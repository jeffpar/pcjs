/**
 * @fileoverview ZIP/ARC Decompression Library
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import CharSet from "./charset.js";
import DataBuffer from "./databuffer.js";
import Struct from './struct.js';
import {LegacyZip, LegacyArc} from '../modules/legacyzip.js';

/**
 * We give the user total control over the interfaces that will be used to read and decompress
 * archives, so that we don't have to import them ourselves.  As a result, it becomes trivial for
 * this code to run in any environment (eg, Nodejs, browser, etc).
 *
 * @typedef  {object}   Interfaces
 * @property {function} fetch       (http interface to fetch remote files)
 * @property {function} open        (fs interface to open local files)
 * @property {function} inflate     (zlib interface to decompress "deflated" buffers; all other compression types will be handled by LegacyZip or LegacyArc)
 *
 * @typedef  {object}   InterfaceOptions
 * @property {number}   cacheSize   (size of cache buffer, if needed; default is 64K)
 *
 * @typedef  {object}   Archive
 * @property {string}   fileName    (name of the archive file)
 * @property {number}   arcType     (type of archive)
 * @property {Date}     modified    (modification date of archive file, if known)
 * @property {string}   password    (password for encrypted archives; copied from ArchiveOptions)
 * @property {number}   length      (length of the archive file)
 * @property {number}   file        (file descriptor, if any)
 * @property {Cache}    cache       (cache data)
 *
 * @typedef  {object}   ArchiveOptions
 * @property {DataBuffer} db        (optional DataBuffer to use instead of reading from a file)
 * @property {number}   arcType     (type of archive; default is TYPE_ZIP)
 * @property {Date}     modified    (modification date of archive file, if known)
 * @property {string}   password    (password for encrypted archives)
 * @property {boolean}  prefill     (if true, read the entire archive into memory on open)
 *
 * @typedef  {object}   Cache
 * @property {DataBuffer} db        (cache buffer)
 * @property {number}   offset      (offset in file of data in cache buffer)
 * @property {number}   length      (length of valid data in cache buffer
 */

/**
 * This class provides an environment-agnostic interface for decompressing ZIP (and ARC) archives.
 *
 * That means the constructor must be provided with the reading and decompression interfaces available
 * in the current environment (eg, fetch() and pako.inflateRaw() if running in a browser, or fs.open()
 * and zlib.inflateRawSync() if running in Nodejs).
 *
 * For this first iteration, I'm going to keep things simple and allow asynchronous I/O when reading an
 * archive but stick with synchronous decompression when extracting entries from an archive; that also
 * means no chunked decompression (yet), so each compressed entry, as well as its decompressed counterpart,
 * must fit entirely in memory.
 *
 * @class Dezip
 */
export default class Dezip {
    /**
     * Public class fields
     */
    static TYPE_ARC = 1;
    static TYPE_ZIP = 2;
    static LocalHeader = new Struct("LocalHeader")
        .field('signature',     Struct.UINT32, {
            LOCSIG:     0x04034b50                      // "PK\003\004" (local file header signature)
        })
        .field('version',       Struct.UINT16)          // version needed to extract
        .field('flags',         Struct.UINT16, {        // general purpose bit flag
            ENC:        0x0001,                         // encrypted file
            COMP1:      0x0002,                         // compression option
            COMP2:      0x0004,                         // compression option
            DESC:       0x0008,                         // data descriptor
            ENH:        0x0010,                         // enhanced deflation
            STR:        0x0040,                         // strong encryption
            LNG:        0x0400                          // UNICODE encoding
        })
        .field('method',        Struct.UINT16)          // compression method
        .field('time',          Struct.UINT16)          // modification time
        .field('date',          Struct.UINT16)          // modification date
        .field('crc',           Struct.INT32)           // uncompressed file CRC-32 value
        .field('compressedSize',Struct.UINT32)          // compressed size
        .field('size',          Struct.UINT32)          // uncompressed size
        .field('fnameLen',      Struct.UINT16)          // filename length
        .field('extraLen',      Struct.UINT16)          // extra field length
        .verifyLength(30);

    static SpanHeader = new Struct("SpanHeader")
        .field('signature',     Struct.UINT32, {
            SPANSIG:    0x08074b50                      // "PK\007\008" (spanned/split archive signature)
        })                                              // if present, followed by 1 or more LocalHeader structures
        .verifyLength(4);

    static CentralHeader = new Struct("CentralHeader")
        .field('signature',     Struct.UINT32, {
            CENSIG:     0x02014b50                      // "PK\001\002" (central file header signature)
        })
        .field('verMade',       Struct.UINT16)          // version made by
        .field('version',       Struct.UINT16)          // version needed to extract
        .field('flags',         Struct.UINT16)          // general purpose bit flag
        .field('method',        Struct.UINT16)          // compression method
        .field('time',          Struct.UINT16)          // modification time
        .field('date',          Struct.UINT16)          // modification date
        .field('crc',           Struct.INT32)           // uncompressed file CRC-32 value
        .field('compressedSize',Struct.UINT32)          // compressed size
        .field('size',          Struct.UINT32)          // uncompressed size
        .field('fnameLen',      Struct.UINT16)          // filename length
        .field('extraLen',      Struct.UINT16)          // extra field length
        .field('comLen',        Struct.UINT16)          // file comment length
        .field('diskStart',     Struct.UINT16)          // disk number start
        .field('intAttr',       Struct.UINT16)          // internal file attributes
        .field('attr',          Struct.UINT32)          // external file attributes (host system dependent)
        .field('offset',        Struct.UINT32)          // relative offset of local header
        .verifyLength(46);

    static CentralEndHeader = new Struct("CentralEndHeader")
        .field('signature',     Struct.UINT32, {
            ENDSIG:     0x06054b50                      // "PK\005\006" (end of central dir signature)
        })
        .field('diskNum',       Struct.UINT16)          // number of this disk
        .field('diskStart',     Struct.UINT16)          // disk where central directory starts
        .field('volumeEntries', Struct.UINT16)          // number of entries on this disk
        .field('totalEntries',  Struct.UINT16)          // total number of entries
        .field('size',          Struct.UINT32)          // central directory size in bytes
        .field('position',      Struct.UINT32)          // position of first CentralHeader
        .field('commentLength', Struct.UINT16)          // zip file comment length
        .verifyLength(22);

    static MAXFILECOMMENT = 0xffff;

    static Central64Header = new Struct("Central64Header")
        .field('signature',     Struct.UINT32,{
            ENDL64SIG:  0x07064b50                      // "PK\006\007" (ZIP64 end of central directory locator)
        })
        .field('diskNum',       Struct.UINT32)          // number of this disk
        .field('headerOffset',  Struct.UINT64)          // offset of the ZIP64 end of central directory record
        .field('disks',         Struct.UINT32)          // total number of disks
        .verifyLength(20);

    static Central64EndHeader = new Struct("Central64EndHeader")
        .field('signature',     Struct.UINT32, {
            END64SIG:   0x06064b50                      // "PK\006\006" (ZIP64 end of central directory record)
        })
        .field('sizeEOCD',      Struct.UINT64)          // size of zip64 end of central directory record
        .field('verMade',       Struct.UINT16)          // version made by
        .field('version',       Struct.UINT16)          // version needed to extract
        .field('diskNum',       Struct.UINT32)          // number of this disk
        .field('diskStart',     Struct.UINT32)          // disk where central directory starts
        .field('volumeEntries', Struct.UINT64)          // number of entries on this disk
        .field('totalEntries',  Struct.UINT64)          // total number of entries
        .field('size',          Struct.UINT64)          // central directory size in bytes
        .field('offset',        Struct.UINT64)          // offset of first CEN header
        .verifyLength(56);

    static ArcHeader = new Struct("ArcHeader")
        .field('signature',     Struct.UINT8, {
            ARC_SIG:    0x1a                            // EOF
        })
        .field('type',          Struct.UINT8, {         // header type
            ARC_END:    0x00,                           // end of archive
            ARC_OLD:    0x01,                           // old archive header (unpacked, no 'size' field)
            ARC_UNP:    0x02,                           // new archive header (unpacked, 'size' == 'compressedSize')
            ARC_NR:     0x03,                           // non-repeat packing ("pack")
            ARC_HS:     0x04,                           // Huffman squeezing ("squeeze")
            ARC_LZ:     0x05,                           // LZ compression
            ARC_LZNR:   0x06,                           // LZ non-repeat compression
            ARC_LZNH:   0x07,                           // LZ with new hash
            ARC_LZC:    0x08,                           // LZ dynamic ("crunch")
            ARC_LZS:    0x09                            // LZ dynamic ("squash")
        })
        .field('name',          13)                     // filename (null terminated)
        .field('compressedSize',Struct.UINT32)          // compressed size
        .field('date',          Struct.UINT16)          // modification date
        .field('time',          Struct.UINT16)          // modification time (date and time order is reversed from ZIP files)
        .field('crc',           Struct.UINT16)          // CRC value
        .field('size',          Struct.UINT32)          // uncompressed size (not present if type == ARC_OLD)
        .verifyLength(29);

    /* Compression methods */
    static ARC_UNP              = -2;                   // unpacked (no compression)
    static ARC_NR               = -3;                   // non-repeat packing ("pack")
    static ARC_HS               = -4;                   // Huffman squeezing ("squeeze")
    static ARC_LZ               = -5;                   // LZ compression
    static ARC_LZNR             = -6;                   // LZ non-repeat compression
    static ARC_LZNH             = -7;                   // LZ with new hash
    static ARC_LZC              = -8;                   // LZ dynamic ("crunch")
    static ARC_LZS              = -9;                   // LZ dynamic ("squash")

    static ZIP_STORE            = 0;                    // no compression
    static ZIP_SHRINK           = 1;                    // shrink
    static ZIP_REDUCE1          = 2;                    // reduce with compression factor 1
    static ZIP_REDUCE2          = 3;                    // reduce with compression factor 2
    static ZIP_REDUCE3          = 4;                    // reduce with compression factor 3
    static ZIP_REDUCE4          = 5;                    // reduce with compression factor 4
    static ZIP_IMPLODE          = 6;                    // implode
    static ZIP_DEFLATE          = 8;                    // deflate
    static ZIP_DEFLATE64        = 9;                    // deflate64
    static ZIP_IMPLODE_DCL      = 10;                   // PKWare DCL implode
    static ZIP_BZIP2            = 12;                   // compressed using BZIP2
    static ZIP_LZMA             = 14;                   // LZMA
    static ZIP_IBM_TERSE        = 18;                   // compressed using IBM TERSE
    static ZIP_IBM_LZ77         = 19;                   // IBM LZ77

    /* 4.5 Extensible data fields */
    static EF_ID                = 0;
    static EF_SIZE              = 2;

    /* Header IDs */
    static ID_ZIP64             = 0x0001;
    static ID_AVINFO            = 0x0007;
    static ID_PFS               = 0x0008;
    static ID_OS2               = 0x0009;
    static ID_NTFS              = 0x000a;
    static ID_OPENVMS           = 0x000c;
    static ID_UNIX              = 0x000d;
    static ID_FORK              = 0x000e;
    static ID_PATCH             = 0x000f;
    static ID_X509_PKCS7        = 0x0014;
    static ID_X509_CERTID_F     = 0x0015;
    static ID_X509_CERTID_C     = 0x0016;
    static ID_STRONGENC         = 0x0017;
    static ID_RECORD_MGT        = 0x0018;
    static ID_X509_PKCS7_RL     = 0x0019;
    static ID_IBM1              = 0x0065;
    static ID_IBM2              = 0x0066;
    static ID_POSZIP            = 0x4690;

    static EF_ZIP64_OR_32       = 0xffffffff;
    static EF_ZIP64_OR_16       = 0xffff;

    /**
     * constructor(interfaces)
     *
     * If no interfaces are provided, the default is to use the fetch() interface, since that's
     * now available in both Nodejs and the browser.
     *
     * @this {Dezip}
     * @param {Interfaces} [interfaces]
     * @param {InterfaceOptions} [interfaceOptions]
     */
    constructor(interfaces = {fetch}, interfaceOptions = {})
    {
        this.interfaces = interfaces;
        this.cacheSize = interfaceOptions.cacheSize || 64 * 1024;
    }

    /**
     * assert(condition, message)
     *
     * @param {boolean} condition
     * @param {string} [message]
     */
    assert(condition, message = "Assertion failed")
    {
        if (!condition) {
            throw new Error(message);
        }
    }

    /**
     * open(fileName, options)
     *
     * If successful, this method returns an Archive object that can be passed to the readHeader()
     * method to read the next header in the archive.
     *
     * @this {Dezip}
     * @param {string} fileName
     * @param {ArchiveOptions} [options]
     * @returns {Archive}
     */
    async open(fileName, options = {})
    {
        let archive = {
            fileName,                   // name of the archive file
            arcType: options.arcType || Dezip.TYPE_ZIP,
            modified: options.modified, // modification date of archive file
            password: options.password, // password for encrypted archives
            length: 0,                  // length of the archive file
            file: null,                 // file handle, if any
            cache: {}                   // cache data
        };
        //
        // If a DataBuffer (db) is provided, then no reading is required; we also provide
        // the option of reading the entire archive into a DataBuffer.  However, the preferred
        // approach is to read structures from the file as needed into a cache buffer.
        //
        if (options.db) {
            archive.length = options.db.length;
            this.initCache(archive, options.db);
        }
        else if (this.interfaces.fetch && fileName.match(/^https?:/i)) {
            //
            // For remote files, prefill is the default.
            //
            // TODO: Consider honoring prefill === false, provided we can obtain Content-Length
            // from the server and byte range requests are supported.
            //
            let response = await this.interfaces.fetch(fileName);
            if (!response.ok) {
                throw new Error(`Failed to fetch ${fileName}: ${response.statusText}`);
            }
            let arrayBuffer = await response.arrayBuffer();
            archive.length = arrayBuffer.byteLength;
            this.initCache(archive, new DataBuffer(new Uint8Array(arrayBuffer)), archive.length);
        }
        else if (this.interfaces.open) {
            archive.file = await this.interfaces.open(fileName, 'r');
            if (!archive.file) {
                throw new Error("Unable to open archive " + fileName);
            }
            const stats = await archive.file.stat();
            archive.length = stats.size;
            archive.modified = stats.mtime;
            this.initCache(archive, Buffer.alloc(Math.min(this.cacheSize, archive.length)));
            if (options.prefill) {
                let buffer = Buffer.alloc(0);
                let cache = archive.cache;
                do {
                    let result = await archive.file.read(cache.db);
                    if (result.bytesRead == 0) break;
                    if (result.bytesRead < cache.db.length) {
                        cache.db = cache.db.subarray(0, result.bytesRead);
                    }
                    buffer = Buffer.concat([buffer, cache.db]);
                    if (result.bytesRead < cache.db.length) break;
                } while (true);
                //
                // We're not really done with the archive yet, but we ARE done with the file handle
                // (and by extension, the old cache buffer).  The new buffer becomes the cache buffer.
                //
                await this.close(archive);
                this.assert(archive.length == buffer.length);
                this.initCache(archive, new DataBuffer(buffer), archive.length);
            }
        }
        else {
            throw new Error("No appropriate Dezip interface(s) available");
        }
        return archive;
    }

    /**
     * initCache(archive, db, length)
     *
     * @param {object} archive
     * @param {DataBuffer} [db]
     * @param {number} [length]
     */
    initCache(archive, db = null, length = 0)
    {
        archive.cache.db = db;
        archive.cache.position = 0;     // position within the archive of the data in the cache buffer
        archive.cache.length = length;  // amount of valid data in the cache buffer (always <= db.length)
    }

    /**
     * fillCache(archive, position, extent)
     *
     * Given a position and extent within the archive, and given the archive's cache
     * buffer, move any existing data in the cache buffer as appropriate, and then read
     * any remaining requested data into the cache buffer, returning the offset and length
     * of the requested data.
     *
     * In general, the returned length will be the same as the requested extent, except
     * when the request is outside the bounds of the archive.
     *
     * @param {Archive} archive
     * @param {number} position
     * @param {number} extent
     * @returns {[number, number]} ([offset, length] of requested data)
     */
    async fillCache(archive, position, extent)
    {
        let cache = archive.cache;
        //
        // Perform some sanity checks on the input parameters, and enforce boundaries.
        //
        this.assert(position >= 0 && extent >= 0);
        if (position < 0 || position >= archive.length) {
            position = extent = 0;
        }
        if (position + extent > archive.length) {
            extent = archive.length - position;
        }
        //
        // Calculate the overlaps, if any (prelap and postlap).
        //
        let prelap = cache.position - position;
        let postlap = (position + extent) - (cache.position + cache.length);
        if (prelap > 0 || postlap > 0) {
            //
            // If there is any overlap between data currently in the cache buffer and
            // the requested data, move the existing data appropriately, and then read only
            // what is missing.
            //
            let readOffset = 0, readPosition = position, readExtent = 0, moveLength;
            if (prelap > 0) {
                //
                // See if we can make room for new data at the top of the buffer,
                // moving any existing data forward by that amount.  We also give up
                // if there is ALSO a postlap (we could do prelap and postlap reads,
                // but that doesn't seem worthwhile).
                //
                if (prelap >= cache.db.length || postlap >= 0 || position + extent < cache.position) {
                    //
                    // The requested new data is too large (or overlaps on both ends,
                    // or doesn't actually overlap at all) to save any existing data, so
                    // the new length will simply be the requested extent.
                    //
                    cache.length = readExtent = extent;
                }
                else {
                    //
                    // There's room in the buffer for the new data (of length prelap) AND
                    // some or all of the existing data (of length cache.length), so move
                    // the existing data forward.
                    //
                    readExtent = prelap;
                    moveLength = Math.min(cache.length, cache.db.length - readExtent);
                    cache.db.copy(cache.db, readExtent, 0, 0 + moveLength);
                    cache.length = readExtent + moveLength;
                }
                //
                // We're now ready to read an amount of new data (readExtent) from readPosition.
                //
                cache.position = position;
            }
            else {
                //
                // Since position >= cache.position, the data requested must extend beyond
                // the data in the cache buffer, so let's calculate how far beyond it extends.
                //
                if (!cache.length || postlap >= cache.db.length || position > cache.position + cache.length) {
                    //
                    // If there is no existing data, or the requested new data is too large to
                    // save any existing data, the new length will simply be the requested extent.
                    //
                    cache.position = position;
                    cache.length = readExtent = extent;
                }
                else if (postlap <= cache.db.length - cache.length) {
                    //
                    // There's enough room after the existing data for the new data.
                    //
                    readExtent = postlap;
                    readOffset += cache.length;
                    readPosition = cache.position + cache.length;
                    cache.length += readExtent;
                }
                else {
                    //
                    // There's room in the buffer for the new data after we move some
                    // of the existing data backward.
                    //
                    readExtent = postlap;
                    moveLength = Math.min(cache.length, cache.db.length - readExtent);
                    cache.db.copy(cache.db, 0, cache.length - moveLength, cache.length);
                    cache.position += cache.length - moveLength;
                    cache.length = moveLength + readExtent;
                    readOffset += moveLength;
                    readPosition = cache.position + moveLength;
                }
            }
            this.assert(cache.position >= 0 && cache.position + cache.length <= archive.length);
            //
            // If readExtent is > 0, then we need to read that many bytes from readPosition into the
            // cache buffer at readOffset.
            //
            if (readExtent > 0) {
                if (archive.file) {
                    let result = await archive.file.read(cache.db, {offset: readOffset, length: readExtent, position: readPosition});
                    if (result.bytesRead != readExtent) {
                        throw new Error("Unable to read from archive");
                    }
                }
                else {
                    throw new Error("No file handle available");
                }
            }
        }
        let offset = position - cache.position;
        return [offset, extent];
    }

    /**
     * readHeader(archive, lastHeader)
     *
     * Reads the next CentralHeader of the archive, based on the position of the last header.
     * If this is the first request, then we scan the archive for a CentralEndHeader ENDSIG, starting
     * from the end of the archive, which should tell us where the first CentralHeader is located.
     *
     * @this {Dezip}
     * @param {Archive} archive
     * @param {object} [lastHeader]
     * @returns {object|null}
     */
    async readHeader(archive, lastHeader = null)
    {
        let header = null;
        let cache = archive.cache;
        let position = lastHeader? lastHeader.position : -1;
        if (position >= 0) {
            position += Dezip.CentralHeader.length + lastHeader.fnameLen + lastHeader.extraLen + lastHeader.comLen;
        } else {
            //
            // Locate CentralEndHeader first, by scanning backwards through cache buffer chunks,
            // starting with the last chunk in the archive, until we find a CentralEndHeader signature.
            //
            let posArchive = archive.length - cache.db.length;
            while (true) {
                let [offset, length] = await this.fillCache(archive, posArchive, cache.db.length);
                let offsetEnd = offset + length - Dezip.CentralEndHeader.length;
                while (offsetEnd >= offset) {
                    //
                    // To save the expense of readStruct() at every location, we probe the low byte first;
                    // if it doesn't match the low byte off the CentralEndHeader signature, then we can skip
                    // the readStruct().
                    //
                    if (cache.db.readUInt8(offsetEnd) == (Dezip.CentralEndHeader.fields.signature.ENDSIG & 0xff)) {
                        let header = Dezip.CentralEndHeader.readStruct(cache.db, offsetEnd);
                        if (header.signature == Dezip.CentralEndHeader.fields.signature.ENDSIG) {
                            //
                            // Found the CentralEndHeader signature, so we can read the CentralHeader position.
                            //
                            position = header.position;
                            break;
                        }
                    }
                    offsetEnd--;
                }
                if (position >= 0 || posArchive == 0) break;
                posArchive -= cache.db.length;
                if (posArchive < 0) posArchive = 0;
            }
        }
        if (position >= 0) {
            //
            // Read the next CentralHeader.
            //
            let [offset, length] = await this.fillCache(archive, position, Dezip.CentralHeader.length);
            let signature = cache.db.readUInt32LE(offset);
            if (signature == (Dezip.CentralEndHeader.fields.signature.ENDSIG)) {
                return null;    // end of archive
            }
            header = Dezip.CentralHeader.readStruct(cache.db, offset);
            if (header.signature != Dezip.CentralHeader.fields.signature.CENSIG) {
                throw new Error("Invalid CentralHeader signature");
            }
            offset += Dezip.CentralHeader.length;
            header.fname = Dezip.CentralHeader.readString(cache.db, offset, header.fnameLen);
            //
            // TODO: Find examples of archives with "extraLen" data and figure out what to do with it.
            //
            offset += header.fnameLen + header.extraLen;
            header.comment = Dezip.CentralHeader.readString(cache.db, offset, header.comLen);
            //
            // Last but not least, record the header's position.
            //
            header.position = position;
        }
        return header;
    }

    /**
     * close(archive)
     *
     * @this {Dezip}
     * @param {Archive} archive
     */
    async close(archive)
    {
        if (archive.file) {
            await archive.file.close();
            archive.file = null;
        }
        this.initCache(archive);
    }
}
