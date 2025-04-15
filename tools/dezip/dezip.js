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
 * archives, which also relieves us from importing them ourselves, allowing this code to easily
 * run in any environment (eg, Nodejs, browser, etc).
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
 * @property {Array}    entries     (array of directory entries)
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
 * and zlib.inflateRaw() if running in Nodejs).
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
    static FileHeader = new Struct("FileHeader")
        .field('signature',     Struct.UINT32, {
            FILESIG:    0x04034b50                      // "PK\003\004" (local file header signature)
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
        .field('modified',      Struct.DOSTIMEDATE)     // modification time and date
        .field('crc',           Struct.INT32)           // uncompressed file CRC-32 value
        .field('compressedSize',Struct.UINT32)          // compressed size
        .field('size',          Struct.UINT32)          // uncompressed size
        .field('fnameLen',      Struct.UINT16)          // filename length
        .field('extraLen',      Struct.UINT16)          // extra field length
        .verifyLength(30);

    static SpanHeader = new Struct("SpanHeader")
        .field('signature',     Struct.UINT32, {
            SPANSIG:    0x08074b50                      // "PK\007\008" (spanned/split archive signature)
        })                                              // if present, followed by 1 or more FileHeader structures
        .verifyLength(4);

    static DirHeader = new Struct("DirHeader")
        .field('signature',     Struct.UINT32, {
            DIRSIG:     0x02014b50                      // "PK\001\002" (directory header signature)
        })
        .field('verMade',       Struct.UINT16)          // version made by
        .field('version',       Struct.UINT16)          // version needed to extract
        .field('flags',         Struct.UINT16)          // general purpose bit flag
        .field('method',        Struct.UINT16)          // compression method
        .field('modified',      Struct.DOSTIMEDATE)     // modification time and date
        .field('crc',           Struct.INT32)           // uncompressed file CRC-32 value
        .field('compressedSize',Struct.UINT32)          // compressed size
        .field('size',          Struct.UINT32)          // uncompressed size
        .field('fnameLen',      Struct.UINT16)          // filename length
        .field('extraLen',      Struct.UINT16)          // extra field length
        .field('commentLen',    Struct.UINT16)          // file comment length
        .field('diskStart',     Struct.UINT16)          // disk number start
        .field('intAttr',       Struct.UINT16)          // internal file attributes
        .field('attr',          Struct.UINT32)          // external file attributes (host system dependent)
        .field('offset',        Struct.UINT32)          // relative offset of file header
        .verifyLength(46);

    static DirEndHeader = new Struct("DirEndHeader")
        .field('signature',     Struct.UINT32, {
            DIREND:     0x06054b50                      // "PK\005\006" (end of directory signature)
        })
        .field('diskNum',       Struct.UINT16)          // number of this disk
        .field('diskStart',     Struct.UINT16)          // disk where directory starts
        .field('volumeEntries', Struct.UINT16)          // number of entries on this disk
        .field('totalEntries',  Struct.UINT16)          // total number of entries
        .field('size',          Struct.UINT32)          // directory size in bytes
        .field('offset',        Struct.UINT32)          // offset of first DirHeader
        .field('commentLen',    Struct.UINT16)          // zip file comment length
        .verifyLength(22);

    static MAXFILECOMMENT = 0xffff;

    static Dir64Header = new Struct("Dir64Header")
        .field('signature',     Struct.UINT32,{
            ENDL64SIG:  0x07064b50                      // "PK\006\007" (ZIP64 end of directory locator)
        })
        .field('diskNum',       Struct.UINT32)          // number of this disk
        .field('headerOffset',  Struct.UINT64)          // offset of the ZIP64 end of directory record
        .field('disks',         Struct.UINT32)          // total number of disks
        .verifyLength(20);

    static Dir64EndHeader = new Struct("Dir64EndHeader")
        .field('signature',     Struct.UINT32, {
            END64SIG:   0x06064b50                      // "PK\006\006" (ZIP64 end of directory record)
        })
        .field('sizeEOCD',      Struct.UINT64)          // size of zip64 end of directory record
        .field('verMade',       Struct.UINT16)          // version made by
        .field('version',       Struct.UINT16)          // version needed to extract
        .field('diskNum',       Struct.UINT32)          // number of this disk
        .field('diskStart',     Struct.UINT32)          // disk where directory starts
        .field('volumeEntries', Struct.UINT64)          // number of entries on this disk
        .field('totalEntries',  Struct.UINT64)          // total number of entries
        .field('size',          Struct.UINT64)          // directory size in bytes
        .field('offset',        Struct.UINT64)          // offset of first directory header
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
        .field('modified',      Struct.DOSDATETIME)     // modification date and time (order is reversed from DOS and ZIP files)
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

    static DEBUG = true;

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
     * @this {Dezip}
     * @param {boolean} condition
     * @param {string} [message]
     */
    assert(condition, message = "Assertion failed")
    {
        if (Dezip.DEBUG && !condition) {
            throw new Error(message);
        }
    }

    /**
     * open(fileName, options)
     *
     * If successful, this method returns an Archive object used with various read functions.
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
            cache: {},                  // cache data
            entries: []                 // array of directory entries
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
            // TODO: Consider honoring prefill === false, provided we can obtain
            // Content-Length from the server and it supports byte range requests.
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
            this.initCache(archive, new DataBuffer(Math.min(this.cacheSize, archive.length)));
            if (options.prefill) {
                let db = new DataBuffer(0);
                let cache = archive.cache;
                do {
                    let result = await archive.file.read(cache.db.buffer);
                    if (result.bytesRead == 0) break;
                    if (result.bytesRead < cache.db.length) {
                        cache.db = cache.db.slice(0, result.bytesRead);
                    }
                    db = DataBuffer.concat([db, cache.db]);
                    if (result.bytesRead < cache.db.length) break;
                } while (true);
                //
                // We're not really done with the archive yet, but we ARE done with the file handle
                // (and by extension, the old cache buffer).  The new buffer becomes the cache buffer.
                //
                await this.close(archive);
                this.assert(archive.length == db.length);
                this.initCache(archive, new DataBuffer(db), archive.length);
            }
        }
        else {
            throw new Error("No appropriate Dezip interface(s) available");
        }
        return archive;
    }

    /**
     * readArchive(archive, position, extent)
     *
     * @this {Dezip}
     * @param {Archive} archive
     * @param {number} position
     * @param {number} extent
     * @returns {DataBuffer}
     */
    async readArchive(archive, position, extent)
    {
        let db;
        if (!archive.file) {
            db = archive.cache.db.slice(position, position + extent);
        } else {
            db = new DataBuffer(extent);
            let result = await archive.file.read(db.buffer, 0, extent, position);
            if (result.bytesRead < extent) {
                db = db.slice(0, result.bytesRead);
            }
        }
        return db;
    }

    /**
     * initCache(archive, db, length)
     *
     * @this {Dezip}
     * @param {object} archive
     * @param {DataBuffer} [db]
     * @param {number} [length]
     */
    initCache(archive, db = null, length = 0)
    {
        archive.cache.db = db;
        archive.cache.position = 0;     // position within the archive of the data in the cache buffer
        archive.cache.extent = length;  // amount of valid data in the cache buffer (always <= db.length)
    }

    /**
     * readCache(archive, position, extent)
     *
     * Given a position and extent within the archive, and given the archive's cache
     * buffer, moves any existing data in the cache buffer as appropriate, and then reads
     * any remaining requested data into the cache buffer, returning the offset and length
     * of the requested data.
     *
     * In general, the returned length will be the same as the requested extent, except
     * when the request is outside the bounds of the archive, or is larger than the current
     * cache size.
     *
     * @this {Dezip}
     * @param {Archive} archive
     * @param {number} position
     * @param {number} extent
     * @returns {[number, number]} ([offset, length] of requested data)
     */
    async readCache(archive, position, extent)
    {
        this.assert(position >= 0 && extent >= 0);
        if (position > archive.length) {
            throw new Error(`Position {$position} exceeds archive length (${archive.length})`);
        }
        if (position + extent > archive.length) {
            extent = archive.length - position;
        }
        let cache = archive.cache;
        let maxExtent = cache.db.length;
        if (extent > maxExtent) {
            extent = maxExtent;
        }
        if (position + maxExtent > archive.length) {
            maxExtent = archive.length - position;
        }
        let preceding = cache.position - position;
        let following = (position + extent) - (cache.position + cache.extent);

        if (preceding > 0 || following > 0) {
            //
            // Maximize the request to make the most of the cache buffer.
            //
            let readOffset = 0;
            let readPosition = position;
            let readExtent = maxExtent;
            if (following <= 0) {
                //
                // If there's any overlap, move that to the end of the cache.
                //
                let overlap = (position + maxExtent) - cache.position;
                if (overlap > 0) {
                    let moveLength = Math.min(overlap, cache.extent);
                    cache.db.copy(cache.db, readExtent - moveLength, 0, 0 + moveLength);
                    readExtent -= moveLength;
                }
            }
            else if (preceding <= 0) {
                //
                // If there's any overlap, move that to the beginning of the cache.
                //
                let overlap = (cache.position + cache.extent) - position;
                if (overlap > 0) {
                    let moveLength = Math.min(overlap, cache.extent);
                    cache.db.copy(cache.db, 0, cache.extent - moveLength, cache.extent);
                    cache.extent = readExtent;
                    readOffset += moveLength;
                    readPosition += moveLength;
                    readExtent -= moveLength;
                }
            }
            if (readExtent > 0) {
                this.assert(archive.file);
                if (archive.file) {
                    let result = await archive.file.read(cache.db.buffer, readOffset, readExtent, readPosition);
                    if (result.bytesRead != readExtent) {
                        throw new Error(`Requested ${readExtent} bytes from archive at position ${readPosition}, received ${result.bytesRead}`);
                    }
                } else {
                    //
                    // As asserted above, this is an inconsistency, because archives without handles should be fully cached.
                    //
                    throw new Error("No file handle available");
                }
            }
            cache.position = position;
            cache.extent = maxExtent;
        }
        let offset = position - cache.position;
        return [offset, extent];
    }

    /**
     * readDirectory(archive)
     *
     * @this {Dezip}
     * @param {Archive} archive
     * @returns {Array}
     */
    async readDirectory(archive)
    {
        let entry = null;
        do {
            entry = await this.readDirEntry(archive, entry);
            if (!entry) break;
        } while (true);
        if (!archive.entries.length) {
            do {
                entry = await this.readFileEntry(archive, entry);
                if (!entry) break;
            } while (true);
            if (!archive.entries.length) {
                throw new Error("No file entries found");
            }
        }
        return archive.entries;
    }

    /**
     * readDirEntry(archive, prevEntry)
     *
     * Reads the next DirHeader of the archive, based on the position of the last header.
     * If this is the first request, then we scan the archive for a DirEndHeader DIREND, starting
     * from the end of the archive, which should tell us where the first DirHeader is located.
     *
     * @this {Dezip}
     * @param {Archive} archive
     * @param {object|null} prevEntry
     * @returns {object|null}
     */
    async readDirEntry(archive, prevEntry)
    {
        let entry, header, position;
        if (!prevEntry) {
            position = -1;
            entry = archive.entries[0];
        } else {
            position = prevEntry.position;
            entry = archive.entries[prevEntry.index + 1];
        }
        if (entry && entry.dirHeader) {
            return entry;
        }
        entry = null;
        let cache = archive.cache;
        if (position >= 0) {
            header = prevEntry.dirHeader;
            position += Dezip.DirHeader.length + header.fnameLen + header.extraLen + header.commentLen;
        }
        else {
            //
            // Locate DirEndHeader first, by scanning backwards through cache-sized chunks,
            // starting with the last chunk in the archive, until we find a DirEndHeader signature.
            //
            let posArchive = archive.length - cache.db.length;
            while (true) {
                let [offset, length] = await this.readCache(archive, posArchive, cache.db.length);
                let offsetEnd = offset + length - Dezip.DirEndHeader.length;
                while (offsetEnd >= offset) {
                    //
                    // To save the expense of readStruct() at every location, we probe the low byte first;
                    // if it doesn't match the low byte off the DirEndHeader signature, then we can skip the
                    // readStruct().
                    //
                    if (cache.db.readUInt8(offsetEnd) == (Dezip.DirEndHeader.fields.signature.DIREND & 0xff)) {
                        header = Dezip.DirEndHeader.readStruct(cache.db, offsetEnd);
                        if (header.signature == Dezip.DirEndHeader.fields.signature.DIREND) {
                            //
                            // Found the DirEndHeader signature, so we can read the DirHeader position.
                            //
                            position = header.offset;
                            break;
                        }
                    }
                    offsetEnd--;
                }
                if (position >= 0 || posArchive == 0) break;
                //
                // Move backward another chunk, but less than the full cache size, to ensure that we don't fail
                // to find a signature (and the structure containing it) that happens to straddle a cache boundary.
                //
                posArchive -= (cache.db.length - Dezip.DirEndHeader.length * 2);
                if (posArchive < 0) posArchive = 0;
            }
        }
        if (position >= 0) {
            entry = { index: archive.entries.length, position };
            //
            // Read the specified DirHeader.
            //
            let [offset, length] = await this.readCache(archive, position, Dezip.DirHeader.length);
            let signature = cache.db.readUInt32LE(offset);
            if (signature == (Dezip.DirEndHeader.fields.signature.DIREND)) {
                return null;
            }
            header = Dezip.DirHeader.readStruct(cache.db, offset);
            if (header.signature != Dezip.DirHeader.fields.signature.DIRSIG) {
                throw new Error(`Invalid DirHeader signature (${header.signature.toString(16)}) at position ${position+offset}`);
            }
            entry.dirHeader = header;
            position += Dezip.DirHeader.length;
            [offset, length] = await this.readCache(archive, position, header.fnameLen);
            header.fname = Dezip.DirHeader.readString(cache.db, offset, header.fnameLen);
            //
            // TODO: Find examples of archives with "extraLen" data and figure out what to do with it.
            //
            position += header.fnameLen + header.extraLen;
            [offset, length] = await this.readCache(archive, position, header.commentLen);
            header.comment = Dezip.DirHeader.readString(cache.db, offset, header.commentLen);
            archive.entries.push(entry);
        }
        return entry;
    }

    /**
     * readFileEntry(archive, prevEntry)
     *
     * Given the previous entry, read the next file in the archive, using the directory if available.
     *
     * @this {Dezip}
     * @param {Archive} archive
     * @param {object|null} prevEntry
     * @returns {object|null}
     */
    async readFileEntry(archive, prevEntry)
    {
        //
        // If prevEntry is null, then we start with entries[0], and if there are no directory entries,
        // then we scan the archive for the first FileHeader signature.
        //
        let entry;
        let position = -1;
        if (!prevEntry) {
            entry = archive.entries[0];
        } else {
            entry = archive.entries[prevEntry.index + 1];
        }
        if (entry) {
            if (entry.fileHeader) {
                return entry;
            }
            position = entry.dirHeader.offset;
        } else {
            entry = null;
            if (prevEntry) {
                this.assert(prevEntry.fileHeader != null);
                position = prevEntry.filePosition + Dezip.FileHeader.length;
                position += prevEntry.fileHeader.fnameLen + prevEntry.fileHeader.extraLen + prevEntry.fileHeader.compressedSize;
                if (position >= archive.length) {
                    return null;
                }
            }
        }
        let cache = archive.cache;
        if (position < 0) {
            //
            // Check the beginning of the file for a FileHeader.
            //
            let [offset, length] = await this.readCache(archive, 0, cache.db.length);
            let signature = cache.db.readUInt32LE(offset);
            if (signature == Dezip.SpanHeader.fields.signature.SPANSIG) {
                position = offset + 4;
            }
        }
        if (position >= 0) {
            let fileHeader = await this.readFileHeader(archive, position);
            if (!fileHeader) {
                return null;
            }
            if (!entry) {
                entry = { index: archive.entries.length };
                archive.entries.push(entry);
            }
            entry.fileHeader = fileHeader;
            entry.filePosition = position;
        }
        return entry;
    }

    /**
     * readFileHeader(archive, position)
     *
     * @this {Dezip}
     * @param {Archive} archive
     * @param {number} position
     * @returns {object|null} fileHeader
     */
    async readFileHeader(archive, position)
    {
        let [offset, length] = await this.readCache(archive, position, Dezip.FileHeader.length);
        this.assert(length == Dezip.FileHeader.length);
        let fileHeader = Dezip.FileHeader.readStruct(archive.cache.db, offset);
        if (fileHeader.signature != Dezip.FileHeader.fields.signature.FILESIG) {
            return null;
        }
        position += Dezip.FileHeader.length;
        [offset, length] = await this.readCache(archive, position, fileHeader.fnameLen);
        this.assert(length == fileHeader.fnameLen);
        fileHeader.fname = Dezip.FileHeader.readString(archive.cache.db, offset, fileHeader.fnameLen);
        return fileHeader;
    }

    /**
     * readChunks(archive, position, extent)
     *
     * @this {Dezip}
     * @param {Archive} archive
     * @param {number} position
     * @param {number} extent
     */
    async* readChunks(archive, position, extent)
    {
        while (extent > 0) {
            let chunkSize = Math.min(extent, this.cacheSize);
            let db = await this.readArchive(archive, position, chunkSize);
            if (db.length == 0) {
                break;
            }
            //
            // TODO: Figure out why using our cache buffer instead is problematic, even
            // after copying the data to a new buffer (dbCache). The data always matches,
            // but differences in timing cause inflate requests to randomly fail.
            //
            // let [offset, length] = await this.readCache(archive, position, chunkSize);
            // if (length == 0) {
            //     break;
            // }
            // let dbCache = new DataBuffer(archive.cache.db, offset, offset + length);
            // if (!dbCache.compare(db)) {
            //     throw new Error("Data mismatch");
            // }
            //
            yield db;
            position += db.length;
            extent -= db.length;
        }
    }

    /**
     * inflateChunks(chunkGenerator)
     *
     * @this {Dezip}
     * @param {*} chunkGenerator
     * @returns {Promise<Buffer>}
     */
    async inflateChunks(chunkGenerator)
    {
        const chunks = [];
        const inflate = this.interfaces.createInflate();
        for await (const chunk of chunkGenerator) {
            inflate.write(chunk.buffer);
        }
        inflate.end();
        return new Promise((resolve, reject) => {
            inflate.on('data', (chunk) => {
                chunks.push(chunk);
            });
            inflate.on('end', () => {
                resolve(Buffer.concat(chunks));
            });
            inflate.on('error', (error) => {
                reject(error);
            });
        });
    }

    /**
     * inflateAsync(buffer)
     *
     * Asynchronously inflates a buffer using the provided inflate interface.
     *
     * @this {Dezip}
     * @param {Buffer} buffer (compressed data to inflate)
     * @returns {Promise<Buffer>} (promise that resolves to the decompressed data)
     */
    async inflateAsync(buffer)
    {
        return new Promise((resolve, reject) => {
            this.interfaces.inflate(buffer, (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    /**
     * readFile(archive, entry)
     *
     * @this {Dezip}
     * @param {Archive} archive
     * @param {object} entry
     * @returns {DataBuffer} (decompressed data)
     */
    async readFile(archive, entry)
    {
        let fileHeader = entry.fileHeader;
        if (!fileHeader) {
            this.assert(entry.dirHeader);
            let position = entry.dirHeader.offset;
            fileHeader = await this.readFileHeader(archive, position);
            if (!fileHeader) {
                throw new Error("Unable to read file header");
            }
            entry.fileHeader = fileHeader;
            entry.filePosition = position;
        }
        let position = entry.filePosition + Dezip.FileHeader.length;
        position += entry.fileHeader.fnameLen + entry.fileHeader.extraLen;
        let compressedSize = fileHeader.compressedSize;
        let decompressedSize = fileHeader.size;
        let decompressedData = 0;
        if (compressedSize) {
            if (fileHeader.method == Dezip.ZIP_DEFLATE || fileHeader.method == Dezip.ZIP_DEFLATE64) {
                if (this.interfaces.createInflate) {
                    decompressedData = await this.inflateChunks(
                        this.readChunks(archive, position, compressedSize)
                    );
                } else if (this.interfaces.inflate) {
                    let db = await this.readArchive(archive, position, compressedSize);
                    decompressedData = await this.inflateAsync(db.buffer);
                }
                else {
                    throw new Error("No inflate interface available");
                }
            } else {
                let db = await this.readArchive(archive, position, compressedSize);
                switch(fileHeader.method) {
                case Dezip.ZIP_STORE:
                    decompressedData = db.buffer;
                    break;
                case Dezip.ZIP_SHRINK:
                    if (this.interfaces.stretchSync) {
                        decompressedData = this.interfaces.stretchSync(db.buffer, decompressedSize).getOutput();
                    }
                    break;
                case Dezip.ZIP_REDUCE1:
                case Dezip.ZIP_REDUCE2:
                case Dezip.ZIP_REDUCE3:
                case Dezip.ZIP_REDUCE4:
                    if (this.interfaces.expandSync) {
                        decompressedData = this.interfaces.expandSync(db.buffer, decompressedSize, fileHeader.method - Dezip.ZIP_REDUCE1 + 1).getOutput();
                    }
                    break;
                case Dezip.ZIP_IMPLODE:
                    if (this.interfaces.explodeSync) {
                        let largeWindow = !!(fileHeader.flags & Dezip.FileHeader.fields.flags.COMP1);
                        let literalTree = !!(fileHeader.flags & Dezip.FileHeader.fields.flags.COMP2);
                        decompressedData = this.interfaces.explodeSync(db.buffer, decompressedSize, largeWindow, literalTree).getOutput();
                    }
                    break;
                case Dezip.ZIP_IMPLODE_DCL:
                    if (this.interfaces.blastSync) {
                        decompressedData = this.interfaces.blastSync(db.buffer).getOutput();
                    }
                    break;
                }
                if (!decompressedData) {
                    throw new Error(`Unsupported compression method ${fileHeader.method}`);
                }
                if (decompressedData.length != decompressedSize) {
                    throw new Error(`Decompressed size ${decompressedData.length} does not match expected size ${decompressedSize}`);
                }
            }
        }
        return new DataBuffer(decompressedData);
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
