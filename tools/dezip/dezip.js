/**
 * @fileoverview ZIP/ARC Decompression Library
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import DataBuffer from "./db.js";
import CharSet from "./charset.js";
import Struct from './struct.js';
import {LegacyZip, LegacyArc} from '../modules/legacyzip.js';

/**
 * We give the user total control over the interfaces that will be used to read and decompress
 * archives, so that we don't have to import them ourselves.  As a result, it becomes trivial for
 * this code to run in any environment (eg, Nodejs, browser, etc).
 *
 * @typedef  {Object}   Interfaces
 * @property {function} fetch       (http interface to fetch remote files)
 * @property {function} open        (fs interface to open local files)
 * @property {function} inflate     (zlib interface to decompress "deflated" buffers; all other compression types will be handled by LegacyZip or LegacyArc)
 *
 * @typedef  {Object}   InterfaceOptions
 * @property {number}   scratchSize (size of scratch buffer, if needed; default is 64K)
 *
 * @typedef  {Object}   Archive
 * @property {string}   fileName    (name of the archive file)
 * @property {number}   arcType     (type of archive)
 * @property {Date}     modified    (modification date of archive file, if known)
 * @property {string}   password    (password for encrypted archives; copied from ArchiveOptions)
 * @property {number}   length      (length of the archive file)
 * @property {number}   file        (file descriptor, if any)
 * @property {Scratch}  scratch     (scratch data)
 * @property {number}   posHeader   (position of the next header to read, -1 if unknown)
 *
 * @typedef  {Object}   ArchiveOptions
 * @property {DataBuffer} db        (optional DataBuffer to use instead of reading from a file)
 * @property {number}   arcType     (type of archive; default is TYPE_ZIP)
 * @property {Date}     modified    (modification date of archive file, if known)
 * @property {string}   password    (password for encrypted archives)
 * @property {boolean}  prefill     (if true, read the entire archive into memory on open)
 *
 * @typedef  {Object}   Scratch
 * @property {DataBuffer} db        (scratch buffer)
 * @property {number}   offset      (offset in file of data in scratch buffer)
 * @property {number}   length      (length of valid data in scratch buffer
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
        this.scratchSize = interfaceOptions.scratchSize || 64 * 1024;
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
            scratch: {},                // scratch data
            posHeader: -1               // position of the next header in the archive (-1 if unknown)
        };
        //
        // If a DataBuffer (db) is provided, then no reading is required; we also provide
        // the option of reading the entire archive into a DataBuffer.  However, the preferred
        // approach is to read structures from the file as needed into a scratch buffer.
        //
        if (options.db) {
            archive.length = options.db.length;
            this.initScratch(archive, options.db);
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
            this.initScratch(archive, new DataBuffer(new Uint8Array(arrayBuffer)), archive.length);
        }
        else if (this.interfaces.open) {
            archive.file = await this.interfaces.open(fileName, 'r');
            if (!archive.file) {
                throw new Error("Unable to open archive " + fileName);
            }
            const stats = await archive.file.stat();
            archive.length = stats.size;
            archive.modified = stats.mtime;
            this.initScratch(archive, Buffer.alloc(Math.min(this.scratchSize, archive.length)));
            if (options.prefill) {
                let buffer = Buffer.alloc(0);
                let scratch = archive.scratch;
                do {
                    let result = await archive.file.read(scratch.db);
                    if (result.bytesRead == 0) break;
                    if (result.bytesRead < scratch.db.length) {
                        scratch.db = scratch.db.subarray(0, result.bytesRead);
                    }
                    buffer = Buffer.concat([buffer, scratch.db]);
                    if (result.bytesRead < scratch.db.length) break;
                } while (true);
                //
                // We're not really done with the archive yet, but we ARE done with the file handle
                // (and by extension, the old scratch buffer).  The new buffer becomes the scratch buffer.
                //
                await this.close(archive);
                this.assert(archive.length == buffer.length);
                this.initScratch(archive, new DataBuffer(buffer), archive.length);
            }
        }
        else {
            throw new Error("No appropriate Dezip interface(s) available");
        }
        return archive;
    }

    /**
     * initScratch(archive, db, length)
     *
     * @param {Object} archive
     * @param {DataBuffer} [db]
     * @param {number} [length]
     */
    initScratch(archive, db = null, length = 0)
    {
        archive.scratch.db = db;
        archive.scratch.position = 0;           // position within the archive of the data in the scratch buffer
        archive.scratch.length = length;        // amount of valid data in the scratch buffer (always <= db.length)
    }

    /**
     * fillScratch(archive, position, length)
     *
     * Given a position and length within the archive, and given the archive's scratch
     * buffer, move any existing data in the scratch buffer as appropriate, and then read
     * any remaining requested data into the scratch buffer.
     *
     * @param {Object} archive
     * @param {number} position
     * @param {number} length
     * @returns {[number, number]} ([offset, length] of requested data)
     */
    async fillScratch(archive, position, length)
    {
        let scratch = archive.scratch;
        //
        // Perform some sanity checks on the input parameters, and enforce boundaries.
        //
        this.assert(position >= 0 && length >= 0);
        if (position < 0 || position >= archive.length) {
            position = length = 0;
        }
        if (position + length > archive.length) {
            length = archive.length - position;
        }
        if (position < scratch.position || position + length > scratch.position + scratch.length) {
            //
            // If there is any overlap between data currently in the scratch buffer and
            // the requested data, move the existing data appropriately, and then read only
            // what is missing.
            //
            let delta = scratch.position - position;
            let readPosition = position, readOffset = 0, readLength = 0, moveLength;
            if (delta > 0) {
                //
                // See if we can make room for new data at the top of the buffer, moving
                // any existing data forward by that amount.
                //
                if (delta >= scratch.db.length) {
                    //
                    // The requested new data is too large to save any existing data,
                    // so the new length will simply be the requested length.
                    //
                    scratch.length = readLength = length;
                }
                else {
                    //
                    // There's room in the buffer for the new data (of length delta) AND
                    // some or all of the existing data (of length scratch.length), so move
                    // the existing data forward.
                    //
                    moveLength = Math.min(scratch.length, scratch.db.length - readLength);
                    scratch.db.copy(scratch.db, readLength, 0, 0 + moveLength);
                    scratch.length = readLength + moveLength;
                    readLength = delta;
                }
                //
                // We're now ready to read an amount of new data (length) from the new position.
                //
                scratch.position = position;
            }
            else {
                //
                // Since position >= scratch.position, the data requested must extend beyond
                // the data in the scratch buffer, so let's calculate how far beyond it extends.
                //
                delta = (position + length) - (scratch.position + scratch.length);
                if (!scratch.length || delta >= scratch.db.length) {
                    //
                    // If there is no existing data, or the requested new data is too large to
                    // save any existing data, the new length will simply be the requested length.
                    //
                    scratch.position = position;
                    scratch.length = readLength = length;
                }
                else if (delta <= scratch.db.length - scratch.length) {
                    //
                    // There's enough room after the existing data for the new data.
                    //
                    readLength = delta;
                    readOffset = scratch.length;
                    scratch.length += readLength;
                }
                else {
                    //
                    // There's room in the buffer for the new data after we move some or all
                    // of the existing data backward.
                    //
                    readLength = delta;
                    moveLength = Math.min(scratch.length, scratch.db.length - readLength);
                    scratch.db.copy(scratch.db, 0, moveLength, moveLength + readLength);
                    scratch.position += moveLength;
                    scratch.length = readLength + moveLength;
                    readOffset += moveLength;
                    readPosition += readLength;
                }
            }
            this.assert(scratch.position >= 0 && scratch.position + scratch.length <= archive.length);
            //
            // If readLength is > 0, then we need to read that many bytes from readPosition into the
            // scratch buffer at readOffset.
            //
            if (readLength > 0) {
                if (archive.file) {
                    let result = await archive.file.read(scratch.db, {offset: readOffset, length: readLength, position: readPosition});
                    if (result.bytesRead != readLength) {
                        throw new Error("Unable to read from archive");
                    }
                }
                else {
                    throw new Error("No file handle available");
                }
            }
        }
        let offset = position - scratch.position;
        return [offset, length];
    }

    /**
     * readHeader(archive)
     *
     * Reads the next CentralHeader of the archive, based on posHeader.  If posHeader is -1,
     * then we need to scan the archive for a CentralEndHeader ENDSIG, starting from the end
     * of the archive, which will tell us where the first CentralHeader is located.
     *
     * @this {Dezip}
     * @param {Archive} archive
     * @returns {Object|null}
     */
    async readHeader(archive)
    {
        let header = null;
        let scratch = archive.scratch;
        let posHeader = archive.posHeader;
        if (posHeader < 0) {
            //
            // Locate CentralEndHeader first, by scanning backwards through scratch buffer chunks,
            // starting with the last chunk in the archive, until we find a CentralEndHeader signature.
            //
            let posArchive = archive.length - scratch.db.length;
            while (true) {
                let [offset, length] = await this.fillScratch(archive, posArchive, scratch.db.length);
                let offsetEnd = offset + scratch.length - Dezip.CentralEndHeader.length;
                while (offsetEnd >= offset) {
                    //
                    // To save the expense of readStruct() on every location, we probe the low byte first;
                    // if it doesn't match the low byte off the CentralEndHeader signature, then we can skip
                    // the readStruct().
                    //
                    if (scratch.db.readUInt8(offsetEnd) == (Dezip.CentralEndHeader.fields.signature.ENDSIG & 0xff)) {
                        let header = Dezip.CentralEndHeader.readStruct(scratch.db, offsetEnd);
                        if (header.signature == Dezip.CentralEndHeader.fields.signature.ENDSIG) {
                            //
                            // Found the CentralEndHeader signature, so we can read the CentralHeader position.
                            //
                            posHeader = header.position;
                            break;
                        }
                    }
                    offsetEnd--;
                }
                if (posHeader >= 0 || posArchive == 0) break;
                posArchive -= scratch.db.length;
                if (posArchive < 0) posArchive = 0;
            }
        }
        if (posHeader >= 0) {
            //
            // Now we can read the next CentralHeader.
            //
            let [offset, length] = await this.fillScratch(archive, posHeader, Dezip.CentralHeader.length);
            header = Dezip.CentralHeader.readStruct(scratch.db, offset);
            if (header.signature != Dezip.CentralHeader.fields.signature.CENSIG) {
                throw new Error("Invalid CentralHeader signature");
            }
            offset += Dezip.CentralHeader.length;
            header.fname = Dezip.CentralHeader.readString(scratch.db, offset, header.fnameLen);
            //
            // TODO: Find examples of archives with "extraLen" data and figure out what to do with it.
            //
            offset += header.fnameLen + header.extraLen;
            header.comment = Dezip.CentralHeader.readString(scratch.db, offset, header.comLen);
            //
            // Advance posHeader to the next CentralHeader, and then we're done.
            //
            archive.posHeader = posHeader + Dezip.CentralHeader.length + header.fnameLen + header.extraLen + header.comLen;
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
        this.initScratch(archive);
    }
}
