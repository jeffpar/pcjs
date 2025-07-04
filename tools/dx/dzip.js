/**
 * @fileoverview ZIP (and ARC) Decompression Library
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import DataBuffer from "./db.js";
import Struct from './struct.js';
import { LegacyArc, LegacyZip } from "./legacy.js";

/**
 * We give the user total control over the interfaces that will be used to read and decompress
 * archives, which also relieves us from importing them ourselves, allowing this code to easily
 * run in any environment (eg, Node.js, browser, etc).
 *
 * @typedef  {object}   Interfaces
 * @property {function} fetch       (fetch() interface to read remote files)
 * @property {function} open        (open() interface to open local files)
 * @property {function} inflate     (eg, zlib.inflateRaw)
 * @property {function} createInflate (eg, zlib.createInflateRaw)
 *
 * @typedef  {object}   InterfaceOptions
 * @property {number}   cacheSize   (size of cache buffer, if needed; default is 64K)
 * @property {string}   encoding    (encoding to use for strings in archives; default is "cp437")
 * @property {boolean}  debug       (if true, enable additional checks/warnings)
 *
 * @typedef  {object}   Archive
 * @property {string}   name        (name of the archive file)
 * @property {number}   type        (type of archive)
 * @property {Date}     modified    (modification date of archive file, if known)
 * @property {string}   password    (password for encrypted archives; copied from ArchiveOptions)
 * @property {number}   size        (size of the archive file)
 * @property {number}   file        (file descriptor, if any)
 * @property {Cache}    cache       (cache data)
 * @property {Array}    records     (array of archive records)
 * @property {number}   exceptions  (see DZip.EXCEPTIONS.*)
 * @property {Array}    warnings    (array of archive warnings, if any)
 *
 * @typedef  {object}   ArchiveOptions
 * @property {number}   type        (type of archive; default is TYPE_ZIP)
 * @property {Date}     modified    (modification date of archive file, if known)
 * @property {string}   password    (password for encrypted archives)
 * @property {boolean}  preload     (if true, read the entire archive into memory on open)
 *
 * @typedef  {object}   Cache
 * @property {DataBuffer} db        (cache buffer)
 * @property {number}   offset      (offset in file of data in cache buffer)
 * @property {number}   length      (length of valid data in cache buffer
 *
 * @typedef  {object}   ArchiveRecord
 * @property {number}   index       (index of record)
 * @property {object}   dirHeader   (DirHeader structure)
 * @property {number}   dirPosition (position of dirHeader in the archive)
 * @property {object}   fileHeader  (FileHeader structure)
 * @property {number}   filePosition (position of fileHeader in the archive)
 * @property {number}   crcBytes    (number of bytes checksummed so far)
 * @property {number}   crcValue    (value of CRC so far)
 * @property {number}   exceptions  (see DZip.EXCEPTIONS.*)
 * @property {Array}    warnings    (array of record warnings, if any)
 *
 * @typedef  {object}   ArchiveEntry
 * @property {number}   index       (index of archive record)
 * @property {string}   name
 * @property {number}   attr
 * @property {number}   modified
 * @property {number}   size
 * @property {number}   compressedSize
 * @property {number}   method
 * @property {number}   crc
 * @property {string}   comment
 * @property {Array}    warnings
 */

/**
 * This class provides an environment-agnostic interface for decompressing ZIP (and ARC) archives.
 *
 * That means the constructor must be provided with the reading and decompression interfaces available
 * in the current environment (eg, fetch() and pako.inflateRaw() if running in a browser, or fs.open()
 * and zlib.inflateRaw() if running in Node.js).
 *
 * For this first iteration, I'm going to keep things simple and allow asynchronous I/O when reading an
 * archive but stick with synchronous decompression when extracting entries from an archive; that also
 * means no chunked decompression (yet), so each compressed entry, as well as its decompressed counterpart,
 * must fit entirely in memory.
 *
 * @class DZip
 * @property {Interfaces} interfaces
 * @property {number} cacheSize (default is 64K)
 * @property {string} encoding (default is "cp437")
 * @property {boolean} debug (if true, enable additional checks/warnings; default is false)
 */
export default class DZip {

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
        .field('flags',         Struct.UINT16, {        // general purpose flags
            ENCRYPTED:  0x0001,                         // encrypted file
            COMP1:      0x0002,                         // compression option
            COMP2:      0x0004,                         // compression option
            DATADESC:   0x0008,                         // data descriptor
            DEFLATED2:  0x0010,                         // enhanced deflation
            ENCRYPTED2: 0x0040,                         // strong encryption
            UNICODE:    0x0400                          // UNICODE encoding
        })
        .field('method',        Struct.UINT16)          // compression method
        .field('modified',      Struct.DOSTIMEDATE)     // modification time and date
        .field('crc',           Struct.UINT32)          // uncompressed file CRC-32 value
        .field('compressedSize',Struct.UINT32)          // compressed size
        .field('size',          Struct.UINT32)          // uncompressed size
        .field('lenName',       Struct.UINT16)          // filename length
        .field('lenExtra',      Struct.UINT16)          // extra field length
        .verifyLength(30);
        //
        // NOTE: After we read a FileHeader, we add a 'length' field to it, to simplify locating the data
        // that follows it.
        //

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
        .field('flags',         Struct.UINT16, {
            ENCRYPTED:  0x0001,                         // encrypted file
            COMP1:      0x0002,                         // compression option
            COMP2:      0x0004,                         // compression option
            DATADESC:   0x0008,                         // data descriptor
            DEFLATED2:  0x0010,                         // enhanced deflation
            ENCRYPTED2: 0x0040,                         // strong encryption
            UNICODE:    0x0400                          // UNICODE encoding
        })
        .field('method',        Struct.UINT16)          // compression method
        .field('modified',      Struct.DOSTIMEDATE)     // modification time and date
        .field('crc',           Struct.UINT32)          // uncompressed file CRC-32 value
        .field('compressedSize',Struct.UINT32)          // compressed size
        .field('size',          Struct.UINT32)          // uncompressed size
        .field('lenName',       Struct.UINT16)          // filename length
        .field('lenExtra',      Struct.UINT16)          // extra field length
        .field('lenComment',    Struct.UINT16)          // file comment length
        .field('diskStart',     Struct.UINT16)          // disk number start
        .field('intAttr',       Struct.UINT16)          // internal file attributes
        .field('attr',          Struct.UINT32)          // external file attributes (host system dependent)
        //
        // TODO: Define the 'attr' bit flags.  Generally, only bits 0-7 are ever set (from the DOS directory
        // entries) but some archives, like ibm0020-0029/ibm0028/SDCJRC-S.ZIP, have other bits, like 0x20000000.
        //
        .field('position',      Struct.UINT32)          // position of file header
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
        .field('position',      Struct.UINT32)          // position of first DirHeader
        .field('lenComment',    Struct.UINT16)          // zip file comment length
        .verifyLength(22);

    static MAXFILECOMMENT = 0xffff;

    static Dir64Header = new Struct("Dir64Header")
        .field('signature',     Struct.UINT32,{
            DIRSIG:  0x07064b50                         // "PK\006\007" (ZIP64 end of directory locator)
        })
        .field('diskNum',       Struct.UINT32)          // number of this disk
        .field('headerOffset',  Struct.UINT64)          // offset of the ZIP64 end of directory header
        .field('disks',         Struct.UINT32)          // total number of disks
        .verifyLength(20);

    static Dir64EndHeader = new Struct("Dir64EndHeader")
        .field('signature',     Struct.UINT32, {
            DIREND:     0x06064b50                      // "PK\006\006" (ZIP64 end of directory header)
        })
        .field('sizeEOCD',      Struct.UINT64)          // size of this header (minus 12 bytes)
        .field('verMade',       Struct.UINT16)          // version made by
        .field('version',       Struct.UINT16)          // version needed to extract
        .field('diskNum',       Struct.UINT32)          // number of this disk
        .field('diskStart',     Struct.UINT32)          // disk where directory starts
        .field('volumeEntries', Struct.UINT64)          // number of entries on this disk
        .field('totalEntries',  Struct.UINT64)          // total number of entries
        .field('size',          Struct.UINT64)          // directory size in bytes
        .field('position',      Struct.UINT64)          // position of first directory header
        .verifyLength(56);

    static ArcHeader = new Struct("ArcHeader")
        .field('signature',     Struct.UINT8, {
            ARCSIG:     0x1a                            // EOF
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
            ARC_LZS:    0x09,                           // LZ dynamic ("squash")
            ARC_UNK:    0x0a                            // unknown compression type
        })
        .field('name',          Struct.STR(13))         // filename (null terminated)
        .field('compressedSize',Struct.UINT32)          // compressed size
        .field('modified',      Struct.DOSDATETIME)     // modification date and time (order is reversed from DOS and ZIP files)
        .field('crc',           Struct.UINT16)          // CRC value
        .field('size',          Struct.UINT32)          // uncompressed size (not present if type == ARC_OLD)
        .verifyLength(29);

    /* Compression methods */
    static METHODS = {
        ARC_UNP:                -2,                     // unpacked (no compression)
        ARC_NR:                 -3,                     // non-repeat packing ("pack")
        ARC_HS:                 -4,                     // Huffman squeezing ("squeeze")
        ARC_LZ:                 -5,                     // LZ compression
        ARC_LZNR:               -6,                     // LZ non-repeat compression
        ARC_LZNH:               -7,                     // LZ with new hash
        ARC_LZC:                -8,                     // LZ dynamic ("crunch")
        ARC_LZS:                -9,                     // LZ dynamic ("squash")
        ZIP_STORE:               0,                     // no compression
        ZIP_SHRINK:              1,                     // shrink
        ZIP_REDUCE1:             2,                     // reduce with compression factor 1
        ZIP_REDUCE2:             3,                     // reduce with compression factor 2
        ZIP_REDUCE3:             4,                     // reduce with compression factor 3
        ZIP_REDUCE4:             5,                     // reduce with compression factor 4
        ZIP_IMPLODE:             6,                     // implode
        ZIP_DEFLATE:             8,                     // deflate
        ZIP_DEFLATE64:           9,                     // deflate64
        ZIP_IMPLODE_DCL:        10,                     // PKWare DCL implode
        ZIP_BZIP2:              12,                     // compressed using BZIP2
        ZIP_LZMA:               14,                     // LZMA
        ZIP_IBM_TERSE:          18,                     // compressed using IBM TERSE
        ZIP_IBM_LZ77:           19                      // IBM LZ77
    };

    static EXCEPTIONS = {
        NODIRS:                 0x00000001,             // the archive contains no dir headers
        NOFILES:                0x00000002,             // the archive contains no file headers
        WRONGTYPE:              0x00000004,             // eg, a ZIP appears to be an ARC, or vice versa
        SPLIT:                  0x00000008,             // the archive contains entries referring to another ("split") archive
        BANNER:                 0x00000010,             // the archive contains an archive comment (aka "banner")
        COMMENT:                0x00000100,             // the entry has a comment / the archive contains commented entries
        ENCRYPTED:              0x00000200              // the entry is encrypted ("garbled") / the archive contains encrypted entries
    };

    static ARCHIVE_EXCEPTIONS = 0x000000ff;
    static RECORD_EXCEPTIONS  = 0x0000ff00;

    /**
     * constructor(interfaces, interfaceOptions)
     *
     * @this {DZip}
     * @param {Interfaces} [interfaces]
     * @param {InterfaceOptions} [interfaceOptions]
     */
    constructor(interfaces = {}, interfaceOptions = {})
    {
        this.interfaces = interfaces;
        //
        // If no legacy interfaces are provided, we default to our own.
        //
        this.getArcCRC = this.interfaces.getArcCRC || LegacyArc.getArcCRC;
        this.unpackSync = this.interfaces.unpackSync || LegacyArc.unpackSync;
        this.unsqueezeSync = this.interfaces.unsqueezeSync || LegacyArc.unsqueezeSync;
        this.uncrunchSync = this.interfaces.uncrunchSync || LegacyArc.uncrunchSync;
        this.uncrushSync = this.interfaces.uncrushSync || LegacyArc.uncrushSync;
        this.getZipCRC = this.interfaces.getZipCRC || LegacyZip.getZipCRC;
        this.getZipCRCByte = this.interfaces.getZipCRCByte || LegacyZip.getZipCRCByte;
        this.stretchSync = this.interfaces.stretchSync || LegacyZip.stretchSync;
        this.expandSync = this.interfaces.expandSync || LegacyZip.expandSync;
        this.explodeSync = this.interfaces.explodeSync || LegacyZip.explodeSync;
        this.blastSync = this.interfaces.blastSync || LegacyZip.blastSync;
        //
        // These non-legacy interfaces, however, have no defaults, so if no zlib (or zlib-compatible)
        // interfaces are provided, then deflated streams can't be inflated.
        //
        this.createInflate = this.interfaces.createInflate;
        this.inflate = this.interfaces.inflate;
        this.inflateSync = this.interfaces.inflateSync;
        //
        // Set default interface options.
        //
        // NOTE: You can override the default cacheSize (64K) to exercise the cache a bit more
        // and help flush out any bugs, but note that some structures in an archive (eg, comments)
        // can be as large as 64K-1, so lower values have the potential to trigger false warnings.
        // The cache should be as large as the largest expected data structure in the archive
        // (other than compressed data).
        //
        this.cacheSize = interfaceOptions.cacheSize || 64 * 1024;
        this.encoding = (interfaceOptions.encoding || "cp437").toLowerCase();
        this.debug = (interfaceOptions.debug || false);
        if (this.debug) {
            DZip.FileHeader.enableWarnings();
            DZip.DirHeader.enableWarnings();
            DZip.ArcHeader.enableWarnings();
        }
    }

    /**
     * assert(condition, message)
     *
     * @this {DZip}
     * @param {boolean} condition
     * @param {string} [message]
     */
    assert(condition, message = "Assertion failed")
    {
        if (this.debug && !condition) {
            throw new Error(message);
        }
    }

    /**
     * open(name, db, options)
     *
     * If successful, this method returns an Archive object used with our other high-level methods;
     * eg, readDirectory(), readFile(), and close().
     *
     * There are other low-level methods that a caller might be interested in, such as readArchive(),
     * readDirRecord(), readFileRecord(), etc, but those all imply an understanding of the archive
     * structure and are not intended for general use.
     *
     * @this {DZip}
     * @param {string} name
     * @param {DataBuffer} [db]
     * @param {ArchiveOptions} [options]
     * @returns {Archive}
     */
    async open(name, db = null, options = {})
    {
        let archive = {
            name,                       // name of the archive file
            source: "",
            type: options.type || DZip.TYPE_ZIP,
            modified: options.modified, // modification date of archive file
            password: options.password, // password for encrypted archives
            size: 0,                    // size of the archive file
            db: null,                   // DataBuffer, if any
            file: null,                 // file handle, if any
            cache: {},                  // cache data
            records: [],                // array of archive records
            exceptions: 0,              // see DZip.EXCEPTIONS.*
            warnings: []                // array of archive warnings, if any
        };
        //
        // If a DataBuffer (db) is provided, then no reading is required; we also provide
        // the option of reading the entire archive into a DataBuffer.  However, the preferred
        // approach is to read structures from the file as needed into the archive's cache buffer.
        //
        if (db) {
            archive.db = db;
            archive.size = db.length;
            this.initCache(archive, db, archive.size);
            archive.source = "Buffer";
        }
        else if (this.interfaces.open && !name.match(/^https?:\/\//i)) {
            archive.file = await this.interfaces.open(name, "r");
            if (!archive.file) {
                throw new Error(`Unable to open ${name}`);
            }
            const stats = await archive.file.stat();
            archive.size = stats.size;
            //
            // If the caller supplied a modification date for the archive, then we stick with that,
            // because the caller may have extracted the archive from another archive that preserved
            // the original date.  Otherwise, we use the modification date provided by the file system.
            //
            if (!archive.modified) {
                archive.modified = stats.mtime;
            }
            this.initCache(archive, new DataBuffer(Math.min(this.cacheSize, archive.size)));
            if (options.preload) {
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
                this.assert(archive.size == db.length);
                this.initCache(archive, db, archive.size);
                archive.db = db;
            }
            archive.source = "FS";
        }
        else if (this.interfaces.fetch) {
            archive.size = NaN;
            if (!options.preload) {
                let response = await this.interfaces.fetch(name, { method: "HEAD" });
                if (response.ok) {
                    let contentLength = response.headers.get("Content-Length");
                    if (contentLength) {
                        let acceptsRanges = response.headers.get("Accept-Ranges");
                        if (acceptsRanges && acceptsRanges.toLowerCase() == "bytes") {
                            archive.size = +contentLength;
                        }
                    }
                }
            }
            if (isNaN(archive.size)) {
                //
                // We apparently have no choice but to read the entire archive into memory.
                //
                let response = await this.interfaces.fetch(name);
                if (!response.ok) {
                    throw new Error(`Unable to fetch ${name}: ${response.status} ${response.statusText}`);
                }
                let arrayBuffer = await response.arrayBuffer();
                archive.db = new DataBuffer(new Uint8Array(arrayBuffer));
                archive.size = archive.db.length;
                this.initCache(archive, archive.db, archive.size);
            } else {
                this.initCache(archive, new DataBuffer(Math.min(this.cacheSize, archive.size)));
            }
            archive.source = "Network";
        }
        else {
            throw new Error("No archive open interface available");
        }
        return archive;
    }

    /**
     * close(archive)
     *
     * @this {DZip}
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

    /**
     * decryptZipData(db, fileHeader, password)
     *
     * Notes from PKWARE's APPNOTE.TXT:
     *
     *      6.1 Traditional PKWARE Decryption
     *      ---------------------------------
     *
     *      6.1.1 PKWARE is grateful to Mr. Roger Schlafly for his expert
     *      contribution towards the development of PKWARE's traditional
     *      encryption.
     *
     *      6.1.2 PKZIP encrypts the compressed data stream.  Encrypted files
     *      MUST be decrypted before they can be extracted to their original
     *      form.
     *
     *      6.1.3 Each encrypted file has an extra 12 bytes stored at the start
     *      of the data area defining the encryption header for that file.  The
     *      encryption header is originally set to random values, and then
     *      itself encrypted, using three, 32-bit keys.  The key values are
     *      initialized using the supplied encryption password.  After each byte
     *      is encrypted, the keys are then updated using pseudo-random number
     *      generation techniques in combination with the same CRC-32 algorithm
     *      used in PKZIP and described elsewhere in this document.
     *
     *      6.1.4 The following are the basic steps required to decrypt a file:
     *
     *       1) Initialize the three 32-bit keys with the password.
     *       2) Read and decrypt the 12-byte encryption header, further
     *          initializing the encryption keys.
     *       3) Read and decrypt the compressed data stream using the
     *          encryption keys.
     *
     *      6.1.5 Initializing the encryption keys
     *
     *          Key(0) <- 305419896
     *          Key(1) <- 591751049
     *          Key(2) <- 878082192
     *
     *          loop for i <- 0 to length(password)-1
     *              update_keys(password(i))
     *          end loop
     *
     *      Where update_keys() is defined as:
     *
     *          update_keys(char):
     *            Key(0) <- crc32(key(0),char)
     *            Key(1) <- Key(1) + (Key(0) & 000000ffH)
     *            Key(1) <- Key(1) * 134775813 + 1
     *            Key(2) <- crc32(key(2),key(1) >> 24)
     *          end update_keys
     *
     *      Where crc32(old_crc,char) is a routine that given a CRC value and a
     *      character, returns an updated CRC value after applying the CRC-32
     *      algorithm described elsewhere in this document.
     *
     *      6.1.6 Decrypting the encryption header
     *
     *      The purpose of this step is to further initialize the encryption
     *      keys, based on random data, to render a plaintext attack on the
     *      data ineffective.
     *
     *      Read the 12-byte encryption header into Buffer, in locations
     *      Buffer(0) thru Buffer(11).
     *
     *          loop for i <- 0 to 11
     *              C <- buffer(i) ^ decrypt_byte()
     *              update_keys(C)
     *              buffer(i) <- C
     *          end loop
     *
     *      Where decrypt_byte() is defined as:
     *
     *          unsigned char decrypt_byte()
     *              local unsigned short temp
     *              temp <- Key(2) | 2
     *              decrypt_byte <- (temp * (temp ^ 1)) >> 8
     *          end decrypt_byte
     *
     *      After the header is decrypted,  the last 1 or 2 bytes in Buffer
     *      SHOULD be the high-order word/byte of the CRC for the file being
     *      decrypted, stored in Intel low-byte/high-byte order.  Versions of
     *      PKZIP prior to 2.0 used a 2 byte CRC check; a 1 byte CRC check is
     *      used on versions after 2.0.  This can be used to test if the password
     *      supplied is correct or not.
     *
     *      6.1.7 Decrypting the compressed data stream
     *
     *      The compressed data stream can be decrypted as follows:
     *
     *          loop until done
     *              read a character into C
     *              Temp <- C ^ decrypt_byte()
     *              update_keys(temp)
     *              output Temp
     *          end loop
     *
     *
     * @param {DataBuffer} db
     * @param {FileHeader} fileHeader
     * @param {string} password
     * @returns {DataBuffer}
     */
    decryptZipData(db, fileHeader, password)
    {
        let keys = [0x12345678, 0x23456789, 0x34567890];
        let crc32 = (crc, b) => this.getZipCRCByte(b, crc);
        //
        // The ZIP decryption algorithm multiplies two 32-bit numbers, resulting in values
        // with up to 64 bits.  Even though the algorithm only cares about the low 32 bits of
        // the result, JavaScript multiplication loses precision in those low bits whenever
        // the result exceeds 53 bits, so we have to roll our own multiplication function that
        // focuses on just the low 32 bits and doesn't bother with the high bits.
        //
        let mul32 = (a, b) => {
            var ah = (a >>> 16), al = a & 0xffff;
            var bh = (b >>> 16), bl = b & 0xffff;
            var high = ((ah * bl) + (al * bh)) & 0xffff;
            return (high << 16) + (al * bl);
        };
        let updateKeys = (b) => {
            keys[0] = crc32(keys[0], b);
            keys[1] = mul32(keys[1] + (keys[0] & 0xff), 134775813) + 1;
            keys[2] = crc32(keys[2], keys[1] >>> 24);
        };
        let decryptByte = () => {
            const w = (keys[2] & 0xffff)|2;
            return ((w * (w ^ 1)) >> 8) & 0xff;
        };
        //
        // Initialize keys with password.
        //
        for (let i = 0; i < password.length; i++) {
            updateKeys(password.charCodeAt(i));
        }
        //
        // Decrypt the encryption header.
        //
        for (let i = 0; i < fileHeader.encBytes.length; i++) {
            let b = fileHeader.encBytes[i] ^ decryptByte();
            fileHeader.encBytes[i] = b;
            updateKeys(b);
        }
        //
        // Check the last 2 bytes of the encryption header: they should match the
        // high word of the entry's CRC.
        //
        // For archives produced with PKZIP 2.x, we need to limit the comparison to
        // just the last (high) byte of each, so an additional 8-bit shift is needed.
        //
        let shift = fileHeader.version >= 20? 8 : 0;
        let w = fileHeader.encBytes[10] | (fileHeader.encBytes[11] << 8);
        if ((w >>> shift) != (fileHeader.crc >>> (16 + shift))) {
            throw new Error("Password is incorrect");
        }
        //
        // Decrypt the compressed data stream.
        //
        for (let off = 0; off < db.length; off++) {
            const b = db.readUInt8(off) ^ decryptByte();
            db.writeUInt8(b, off);
            updateKeys(b);
        }
        return db;
    }

    /**
     * inflateAsync(buffer)
     *
     * Asynchronously inflates a buffer using the provided inflate interface.
     *
     * @this {DZip}
     * @param {Buffer} buffer (compressed data to inflate)
     * @returns {Promise<Buffer>} (promise that resolves to the decompressed data)
     */
    async inflateAsync(buffer)
    {
        return new Promise((resolve, reject) => {
            this.inflate(buffer, (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    /**
     * inflateChunks(record, chunkGenerator)
     *
     * @this {DZip}
     * @param {ArchiveRecord} record
     * @param {*} chunkGenerator
     * @returns {Promise<Buffer>}
     */
    async inflateChunks(record, chunkGenerator)
    {
        const chunks = [];
        const inflate = this.createInflate();
        for await (const chunk of chunkGenerator) {
            inflate.write(chunk.buffer);
        }
        inflate.end();
        return new Promise((resolve, reject) => {
            inflate.on('data', (chunk) => {
                chunks.push(chunk);
                this.updateCRC(record, new DataBuffer(chunk), DZip.TYPE_ZIP);
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
     * initCache(archive, db, length)
     *
     * @this {DZip}
     * @param {Archive} archive
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
     * newRecord(archive)
     *
     * @this {DZip}
     * @param {Archive} archive
     * @returns {ArchiveRecord}
     */
    newRecord(archive)
    {
        let record = {
            index: archive.records.length,
            dirHeader: null,
            dirPosition: -1,
            fileHeader: null,
            filePosition: -1,
            crcBytes: 0,
            crcValue: 0,
            exceptions: 0,              // see DZip.EXCEPTIONS.*
            warnings: []                // array of record warnings, if any
        };
        archive.records.push(record);
        return record;
    }

    /**
     * readArchive(archive, position, extent)
     *
     * Read data from the archive, extracting it directly from the cache if the archive
     * is fully cached, or reading it through the cache if the request fits within the cache;
     * otherwise, read directly from the local or network file, bypassing the cache.
     *
     * @this {DZip}
     * @param {Archive} archive
     * @param {number} position
     * @param {number} extent
     * @returns {DataBuffer}
     */
    async readArchive(archive, position, extent)
    {
        let db;
        if (archive.cache.db.length == archive.size) {
            db = archive.cache.db.slice(position, position + extent);
        }
        else if (extent <= archive.cache.db.length) {
            let [offset, length] = await this.readCache(archive, position, extent);
            db = archive.cache.db.slice(offset, offset + length);
        }
        else {
            db = new DataBuffer(extent);
            let bytesRead = await this.readBytes(archive, position, extent, db, 0);
            if (bytesRead < extent) {
                db = db.slice(0, bytesRead);
            }
        }
        return db;
    }

    /**
     * readBytes(archive, position, extent, db, offset)
     *
     * Read bytes from the archive at the specified position.
     *
     * @param {Archive} archive
     * @param {number} position
     * @param {number} extent
     * @param {DataBuffer} db
     * @param {number} offset
     * @returns {number} [bytesRead]
     */
    async readBytes(archive, position, extent, db, offset)
    {
        let bytesRead;
        if (archive.file) {
            let result = await archive.file.read(db.buffer, offset, extent, position);
            bytesRead = result.bytesRead;
        } else {
            const response = await this.interfaces.fetch(archive.name, {
                headers: {
                    "Range": `bytes=${position}-${position+extent-1}`
                }
            });
            if (!response.ok || response.status != 206) {
                throw new Error(`Failed to fetch ${extent} bytes from ${archive.name} at position 0x${(position >>> 0).toString(16)}: ${response.statusText}`);
            }
            const arrayBuffer = await response.arrayBuffer();
            let dbRead = new DataBuffer(new Uint8Array(arrayBuffer));
            bytesRead = dbRead.copy(db, offset, 0, extent);
        }
        return bytesRead;
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
     * when the request extends beyond the size of the archive or is larger than the current
     * cache size.
     *
     * NOTE: I deliberately chose the terminology "position" and "extent" when referring to
     * file locations, and "offset" and "length" when referring to buffer locations, in
     * order to minimize the risk of confusion between the two.
     *
     * @this {DZip}
     * @param {Archive} archive
     * @param {number} position
     * @param {number} extent
     * @returns {[number, number]} ([offset, length] of requested data)
     */
    async readCache(archive, position, extent)
    {
        this.assert(position >= 0 && extent >= 0);
        if (position > archive.size) {
            throw new Error(`Position 0x${(position >>> 0).toString(16)} exceeds limit 0x${(archive.size >>> 0).toString(16)}`);
        }
        if (position + extent > archive.size) {
            extent = archive.size - position;
        }
        let cache = archive.cache;
        let maxExtent = cache.db.length;
        if (extent > maxExtent) {
            extent = maxExtent;
        }
        if (position + maxExtent > archive.size) {
            maxExtent = archive.size - position;
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
                let bytesRead = await this.readBytes(archive, readPosition, readExtent, cache.db, readOffset);
                if (bytesRead != readExtent) {
                    throw new Error(`Received ${bytesRead} bytes, expected ${readExtent} at 0x${(readPosition >>> 0).toString(16)}`);
                }
            }
            cache.position = position;
            cache.extent = maxExtent;
        }
        let offset = position - cache.position;
        return [offset, extent];
    }

    /**
     * readChunks(archive, position, extent)
     *
     * @this {DZip}
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
            yield db;
            position += db.length;
            extent -= db.length;
        }
    }

    /**
     * readDirectory(archive, filespec, filterExceptions, filterMethod)
     *
     * This function always returns a new list of archive entries, based on any filtering that may
     * have been requested (the archive records always contains a complete and unfiltered list).
     *
     * Also note that even though this function always uses readDirRecord() (and failing that,
     * readFileRecord()) to read each archive record, those functions only scan the archive on the
     * first attempt.  Subsequent calls simply return the next record in the archive's records.
     *
     * @this {DZip}
     * @param {Archive} archive
     * @param {string} [filespec]
     * @param {number} [filterExceptions] (0 if none)
     * @param {number} [filterMethod] (-1 if none)
     * @returns {Array.<ArchiveEntry>} (array of archive entries)
     */
    async readDirectory(archive, filespec = "*", filterExceptions = 0, filterMethod = -1)
    {
        let entries = [];
        let record = null;
        let recordExceptions = filterExceptions & DZip.RECORD_EXCEPTIONS;
        let archiveExceptions = filterExceptions & DZip.ARCHIVE_EXCEPTIONS;
        const regex = new RegExp("(?:^|/)" + filespec.replace(/\./g, "\\.").replace(/\*/g, ".*").replace(/\?/g, ".") + "$", "i");

        let newEntry = function(record) {
            let header = record.dirHeader || record.fileHeader;
            let entry = {
                index: record.index,
                name: header.name,
                attr: header.attr,
                modified: header.modified,
                size: header.size,
                compressedSize: header.compressedSize,
                flags: header.flags,
                method: header.method,
                crc: header.crc,
                comment: header.comment,
                warnings: record.warnings
            };
            //
            // TODO: Consider whether we should also return an exceptions field (ie, record.exceptions).
            //
            entries.push(entry);
        };

        if (!(archive.exceptions & DZip.EXCEPTIONS.NODIRS)) {
            do {
                try {
                    record = await this.readDirRecord(archive, record);
                    if (!record) break;
                    this.assert(archive.endHeader && record.dirHeader);
                } catch (error) {
                    archive.warnings.push(error.message);
                    break;
                }
                if (archive.endHeader.diskNum != record.dirHeader.diskStart) {
                    archive.exceptions |= DZip.EXCEPTIONS.SPLIT;
                }
                if (filterMethod != -1 && record.dirHeader.method != filterMethod) {
                    continue;
                }
                if ((record.exceptions & recordExceptions) == recordExceptions && regex.test(record.dirHeader.name)) {
                    newEntry(record);
                }
            } while (true);
        }
        if (!archive.records.length) {
            archive.exceptions |= DZip.EXCEPTIONS.NODIRS;
        }
        //
        // Search the file headers ONLY if there are no dir headers AND we're unsure about file headers.
        //
        if ((archive.exceptions & (DZip.EXCEPTIONS.NODIRS | DZip.EXCEPTIONS.NOFILES)) == DZip.EXCEPTIONS.NODIRS) {
            do {
                try {
                    record = await this.readFileRecord(archive, record);
                    if (!record) break;
                } catch (error) {
                    archive.warnings.push(error.message);
                    break;
                }
                if (record.fileHeader.compressedSize > archive.size || record.fileHeader.lenName > 255) {
                    archive.warnings.push(`Invalid size(s) in FileHeader`);
                    break;
                }
                if (filterMethod != -1 && record.fileHeader.method != filterMethod) {
                    continue;
                }
                if ((record.exceptions & recordExceptions) == recordExceptions && regex.test(record.fileHeader.name)) {
                    newEntry(record);
                }
            } while (true);
        }
        if (!archive.records.length) {
            archive.exceptions |= DZip.EXCEPTIONS.NOFILES;
        }
        if ((archive.exceptions & archiveExceptions) != archiveExceptions) {
            entries = [];
        }
        return entries;
    }

    /**
     * readDirRecord(archive, prevRecord)
     *
     * Reads the next DirHeader of the archive, based on the position of the last header.
     * If this is the first request, then we scan the archive for a DirEndHeader (DIREND), starting
     * from the end of the archive, which should tell us where the first DirHeader is located.
     *
     * @this {DZip}
     * @param {Archive} archive
     * @param {ArchiveRecord|null} prevRecord
     * @returns {ArchiveRecord|null}
     */
    async readDirRecord(archive, prevRecord)
    {
        let record, position;
        if (!prevRecord) {
            position = -1;
            record = archive.records[0];
        } else {
            position = prevRecord.dirPosition;
            record = archive.records[prevRecord.index + 1];
        }
        if (record && record.dirHeader) {
            return record;
        }
        record = null;
        let cache = archive.cache;
        if (position >= 0) {
            let dirHeader = prevRecord.dirHeader;
            position += DZip.DirHeader.length + dirHeader.lenName + dirHeader.lenExtra + dirHeader.lenComment;
        }
        else {
            //
            // Locate DirEndHeader first, by scanning backwards through cache-sized chunks,
            // starting with the last chunk in the archive, until we find a DirEndHeader signature.
            //
            let posArchive = archive.size - cache.db.length;
            let targetStruct = DZip.DirEndHeader;
            while (true) {
                let [offset, length] = await this.readCache(archive, posArchive, cache.db.length);
                let offsetEnd = offset + length - targetStruct.length;
                while (offsetEnd >= offset) {
                    //
                    // To save the expense of readStruct(), probe the signature first.
                    //
                    if (cache.db.readUInt32LE(offsetEnd) == targetStruct.fields.signature.DIREND) {
                        let endHeader = targetStruct.readStruct(cache.db, offsetEnd, this.encoding);
                        this.assert(endHeader.signature == targetStruct.fields.signature.DIREND);
                        if (endHeader.position == 0xffffffff) {
                            targetStruct = DZip.Dir64EndHeader;
                            offsetEnd--;
                            continue;
                        }
                        //
                        // We've got the DirEndHeader, so save it in the archive object.
                        //
                        archive.endHeader = endHeader;
                        position = endHeader.position;
                        //
                        // If there's comment, read it and save it in the archive object.
                        //
                        let lenComment = endHeader.lenComment;
                        if (lenComment == undefined) {  // TODO: Test ZIP64 archive with comment...
                            lenComment = (endHeader.sizeEOCD + 12) - targetStruct.length;
                        }
                        if (lenComment) {
                            let posComment = posArchive + offsetEnd - offset + targetStruct.length;
                            [offset, length] = await this.readCache(archive, posComment, lenComment);
                            if (length < lenComment) {
                                archive.warnings.push(`Archive comment length (${lenComment}) exceeds available length (${length})`);
                            }
                            archive.comment = targetStruct.readString(cache.db, offset, length, this.encoding);
                            archive.commentRaw = targetStruct.readString(cache.db, offset, length, "binary");
                            archive.exceptions |= DZip.EXCEPTIONS.BANNER;
                        }
                        break;
                    }
                    offsetEnd--;
                }
                if (position >= 0 || posArchive == 0) break;
                //
                // Move backward another chunk, but less than the full cache size, to ensure that we don't fail
                // to find a signature (and the structure containing it) that happens to straddle a cache boundary.
                //
                posArchive -= (cache.db.length - targetStruct.length * 2);
                if (posArchive < 0) posArchive = 0;
            }
        }
        if (position >= 0) {
            //
            // Read the specified DirHeader.
            //
            let [offset, length] = await this.readCache(archive, position, DZip.DirHeader.length);
            let signature = cache.db.readUInt32LE(offset);
            if (signature == DZip.DirEndHeader.fields.signature.DIREND || signature == DZip.Dir64EndHeader.fields.signature.DIREND) {
                return null;
            }
            let dirHeader = DZip.DirHeader.readStruct(cache.db, offset, this.encoding);
            if (dirHeader.signature != DZip.DirHeader.fields.signature.DIRSIG) {
                throw new Error(`Missing DirHeader at 0x${(position >>> 0).toString(16)}`);
            }
            record = this.newRecord(archive);
            record.dirHeader = dirHeader;
            record.dirPosition = position;
            position += DZip.DirHeader.length;
            [offset, length] = await this.readCache(archive, position, dirHeader.lenName);
            if (length < dirHeader.lenName) {
                record.warnings.push(`Name length (${dirHeader.lenName}) exceeds available length (${length})`);
            }
            dirHeader.name = DZip.DirHeader.readString(cache.db, offset, length, this.encoding);
            position += dirHeader.lenName;
            position += await this.readExtraData(archive, position, dirHeader);
            if (dirHeader.lenComment) {
                [offset, length] = await this.readCache(archive, position, dirHeader.lenComment);
                if (length < dirHeader.lenComment) {
                    record.warnings.push(`Comment length (${dirHeader.lenComment}) exceeds available length (${length})`);
                }
                dirHeader.comment = DZip.DirHeader.readString(cache.db, offset, length, this.encoding);
                record.exceptions |= DZip.EXCEPTIONS.COMMENT;
                archive.exceptions |= DZip.EXCEPTIONS.COMMENT;
            }
            if (dirHeader.flags & DZip.DirHeader.fields.flags.ENCRYPTED) {
                record.exceptions |= DZip.EXCEPTIONS.ENCRYPTED;
                archive.exceptions |= DZip.EXCEPTIONS.ENCRYPTED;
            }
            if (dirHeader.warnings) {
                record.warnings.unshift(...dirHeader.warnings);
                delete dirHeader.warnings;
            }
        }
        return record;
    }

    /**
     * readExtraData(archive, position, header)
     *
     * @this {DZip}
     * @param {Archive} archive
     * @param {number} position
     * @param {*} header
     * @returns {number} (length of extra data read)
     */
    async readExtraData(archive, position, header)
    {
        if (header.lenExtra) {
            let cache = archive.cache;
            let [offset, length] = await this.readCache(archive, position, header.lenExtra);
            //
            // The "Extra" data is a series of one or more blocks, where each block begins with a 2-byte ID
            // and a 2-byte length, followed by the number of bytes specified by that length.  The only ID we
            // care about is the "Zip64 Extended Information" block, which has an ID of 0x0001.
            //
            while (length >= 4) {
                let idBlock = cache.db.readUInt16LE(offset);
                let lenBlock = cache.db.readUInt16LE(offset + 2);
                offset += 4;
                length -= 4;
                if (idBlock == 0x0001) {
                    if (header.size == 0xffffffff) {
                        header.size = cache.db.readUInt64LE(offset);
                        offset += 8;
                        lenBlock -= 8;
                    }
                    if (header.compressedSize == 0xffffffff) {
                        header.compressedSize = cache.db.readUInt64LE(offset);
                        offset += 8;
                        lenBlock -= 8;
                    }
                    if (header.position == 0xffffffff) {
                        header.position = cache.db.readUInt64LE(offset);
                        offset += 8;
                        lenBlock -= 8;
                    }
                    if (header.diskStart == 0xffff) {
                        header.diskStart = cache.db.readUInt32LE(offset);
                        offset += 4;
                        lenBlock -= 4;
                    }
                    this.assert(lenBlock == 0);
                    break;
                }
                offset += lenBlock;
                length -= lenBlock;
            }
        }
        return header.lenExtra;
    }

    /**
     * readFileRecord(archive, prevRecord)
     *
     * Given the previous record, read the next file in the archive, using the directory if available.
     *
     * @this {DZip}
     * @param {Archive} archive
     * @param {ArchiveRecord|null} prevRecord
     * @returns {ArchiveRecord|null}
     */
    async readFileRecord(archive, prevRecord)
    {
        //
        // If prevRecord is null, then we start with entries[0], and if there are no archive entries,
        // then we scan the archive for the first FileHeader (or ArcHeader).
        //
        let record;
        let position = -1;
        if (!prevRecord) {
            record = archive.records[0];
        } else {
            record = archive.records[prevRecord.index + 1];
        }
        if (record) {
            if (record.fileHeader) {
                return record;
            }
            position = record.dirHeader.position;
        } else {
            record = null;
            if (prevRecord) {
                this.assert(prevRecord.fileHeader != null);
                position = prevRecord.filePosition + prevRecord.fileHeader.length + prevRecord.fileHeader.compressedSize;
                if (position >= archive.size) {
                    return null;
                }
            }
        }
        let cache = archive.cache;
        if (position < 0) {
            //
            // Probe the beginning of the file for a FileHeader (or ArcHeader) signature.
            //
            // NOTE: In the case of ZIP files, we now probe beyond position 0, because if you
            // have only part(s) of a multi-part ZIP archive, then this is the only way to extract
            // ANY of the files from ANY of the part(s).
            //
            // TODO: Consider making this more aggressive probing controlled by an option that
            // you pass to either the open() or readDirectory() functions.
            //
            let probe = 0;
            do {
                let [offset, length] = await this.readCache(archive, probe, DZip.FileHeader.length);
                if (length < DZip.FileHeader.length) break;
                let arcType = archive.type;
                let signature = cache.db.readUInt32LE(offset);
                let type = (signature >> 8) & 0xff;     // for ARC files, we also examine the type byte as a sanity check
                if (signature == DZip.FileHeader.fields.signature.FILESIG) {
                    arcType = DZip.TYPE_ZIP;
                    position = probe;
                } else if (probe == 0) {                // searches for non-FILESIG signatures are limited to the start of file
                    if (signature == DZip.SpanHeader.fields.signature.SPANSIG) {
                        arcType = DZip.TYPE_ZIP;
                        position = probe + 4;
                    } else if ((signature & 0xff) == DZip.ArcHeader.fields.signature.ARCSIG && type > 0 && type < DZip.ArcHeader.fields.type.ARC_UNK) {
                        arcType = DZip.TYPE_ARC;
                        position = probe;
                    }
                }
                if (arcType != archive.type) {
                    archive.exceptions |= DZip.EXCEPTIONS.WRONGTYPE;
                    archive.type = arcType;
                }
                probe++;
            } while (position < 0 && archive.type == DZip.TYPE_ZIP);
        }
        if (position >= 0) {
            record = await this.readFileHeader(archive, record, position);
        }
        return record;
    }

    /**
     * readFileHeader(archive, record, position)
     *
     * @this {DZip}
     * @param {Archive} archive
     * @param {ArchiveRecord} record
     * @param {number} position
     * @returns {ArchiveRecord} record
     */
    async readFileHeader(archive, record, position)
    {
        let fileHeader;
        let filePosition = position;
        let lenHeader = archive.type == DZip.TYPE_ARC? DZip.ArcHeader.length : DZip.FileHeader.length;
        let [offset, length] = await this.readCache(archive, position, lenHeader);
        if (length >= lenHeader) {
            let warnings = [];
            if (archive.type == DZip.TYPE_ARC) {
                let arcHeader = DZip.ArcHeader.readStruct(archive.cache.db, offset, this.encoding);
                if (arcHeader.signature == DZip.ArcHeader.fields.signature.ARCSIG && arcHeader.type > 0 && arcHeader.type < DZip.ArcHeader.fields.type.ARC_UNK) {
                    arcHeader.method = -arcHeader.type;             // convert ARC type to method (signed to avoid conflict with ZIP methods)
                    if (arcHeader.type == DZip.ArcHeader.fields.type.ARC_OLD) {
                        arcHeader.size = arcHeader.compressedSize;
                        arcHeader.method = DZip.METHODS.ARC_UNP;
                    }
                    arcHeader.length = DZip.ArcHeader.length;
                    fileHeader = arcHeader;
                    fileHeader.flags = 0;
                }
            } else {
                let zipHeader = DZip.FileHeader.readStruct(archive.cache.db, offset, this.encoding);
                if (zipHeader.signature == DZip.FileHeader.fields.signature.FILESIG) {
                    position += DZip.FileHeader.length;
                    [offset, length] = await this.readCache(archive, position, zipHeader.lenName);
                    if (length < zipHeader.lenName) {
                        warnings.push(`Name length (${zipHeader.lenName}) exceeds available length (${length})`);
                    }
                    zipHeader.name = DZip.FileHeader.readString(archive.cache.db, offset, length, this.encoding);
                    zipHeader.length = DZip.FileHeader.length + zipHeader.lenName + zipHeader.lenExtra;
                    position += zipHeader.lenName;
                    position += await this.readExtraData(archive, position, zipHeader);
                    if (zipHeader.flags & DZip.FileHeader.fields.flags.ENCRYPTED) {
                        //
                        // There should be an additional 12 bytes of data for encrypted files (ie, the "Encryption Header"),
                        // which we need to read and skip as well.
                        //
                        [offset, length] = await this.readCache(archive, position, 12);
                        if (length < 12) {
                            warnings.push(`Encryption header length (${12}) exceeds available length (${length})`);
                        }
                        zipHeader.encBytes = [];
                        for (let i = 0; i < length; i++) {
                            zipHeader.encBytes[i] = archive.cache.db.buffer[offset + i];
                            // zipHeader.encBytes[i] = archive.cache.db.readUInt8(offset + i);
                        }
                        zipHeader.length += 12;
                    }
                    if (record?.dirHeader) {
                        //
                        // Sanity-check a few of the fields that are in both headers and should be in agreement;
                        // any discrepancies are logged as warnings (and we limit ourselves to one warning, since one
                        // significant difference often implies many differences).
                        //
                        for (let field of ["name", "size", "compressedSize"]) {
                            if (zipHeader[field] != record.dirHeader[field]) {
                                //
                                // TODO: The first time I saw discrepancies here was in a ZIP64 file: the size and
                                // compressedSize fields in the FileHeader were 0.  Determine if that's normal behavior.
                                //
                                if (!zipHeader[field]) {
                                    zipHeader[field] = record.dirHeader[field];
                                    continue;
                                }
                                warnings.push(`FileHeader ${field}: ${zipHeader[field]}`);
                                break;
                            }
                        }
                    }
                    fileHeader = zipHeader;
                }
            }
            if (fileHeader) {
                if (!record) {
                    record = this.newRecord(archive);
                }
                record.fileHeader = fileHeader;
                record.filePosition = filePosition;
                if (fileHeader.flags & DZip.FileHeader.fields.flags.ENCRYPTED) {
                    record.exceptions |= DZip.EXCEPTIONS.ENCRYPTED;
                    archive.exceptions |= DZip.EXCEPTIONS.ENCRYPTED;
                }
                if (fileHeader.warnings) {
                    //
                    // Let's "dedupe" the warnings; we shouldn't be decoding anything more than once, but some
                    // of the data structures we decode (eg, DirHeaders and FileHeaders) are inherently redundant,
                    // so any warnings in one will probably be in the other as well.
                    //
                    for (let i = 0; i < fileHeader.warnings.length; i++) {
                        if (record.warnings.indexOf(fileHeader.warnings[i]) < 0) {
                            record.warnings.push(fileHeader.warnings[i]);
                        }
                    }
                    delete fileHeader.warnings;
                }
                if (warnings.length) {
                    record.warnings.push(...warnings);
                }
            }
        }
        return record;
    }

    /**
     * readFile(archive, entry, writeData)
     *
     * @this {DZip}
     * @param {Archive} archive
     * @param {ArchiveEntry} entry
     * @param {function} [writeData]
     * @returns {DataBuffer|undefined}
     */
    async readFile(archive, entry, writeData)
    {
        let expandedDB;
        let record = archive.records[entry.index];
        try {
            let fileHeader = record.fileHeader;
            if (!fileHeader) {
                this.assert(record.dirHeader);
                let position = record.dirHeader.position;
                await this.readFileHeader(archive, record, position);
                if (!record.fileHeader) {
                    throw new Error(`Missing FileHeader at 0x${(position >>> 0).toString(16)}`);
                }
                fileHeader = record.fileHeader;
            }
            record.crcBytes = 0;
            record.crcValue = archive.type == DZip.TYPE_ARC? 0 : ~0;
            let position = record.filePosition + fileHeader.length;
            let compressedSize = fileHeader.compressedSize;
            let expandedSize = fileHeader.size;
            if ((record.fileHeader.flags & DZip.FileHeader.fields.flags.ENCRYPTED) && !archive.password) {
                throw new Error(`Encrypted file`);
            }
            if (!compressedSize) {
                expandedDB = new DataBuffer(0);
            } else {
                let expandedData;
                if (fileHeader.method == DZip.METHODS.ZIP_DEFLATE || fileHeader.method == DZip.METHODS.ZIP_DEFLATE64) {
                    if (this.createInflate) {
                        expandedData = await this.inflateChunks(
                            record, this.readChunks(archive, position, compressedSize)
                        );
                    } else if (this.inflate || this.inflateSync) {
                        let db = await this.readArchive(archive, position, compressedSize);
                        if (fileHeader.flags & DZip.FileHeader.fields.flags.ENCRYPTED) {
                            db = this.decryptZipData(db, fileHeader, archive.password);
                        }
                        if (this.inflate) {
                            expandedData = await this.inflateAsync(db.buffer);
                        } else {
                            expandedData = this.inflateSync(db.buffer);
                        }
                        if (!expandedData) {
                            throw new Error(`Decompression failure`);
                        }
                    }
                    else {
                        throw new Error(`No decompression interface available`);
                    }
                    expandedDB = new DataBuffer(expandedData);
                } else {
                    //
                    // Legacy decompression is now inside a loop with its own try/catch handler, to automatically
                    // retry decryption in case 1) a password was supplied but not actually required (the ARC file
                    // doesn't tell us one way or the other) or 2) the ARC contains a mixture of encrypted and
                    // unencrypted files.
                    //
                    // With ARC files, our only clue that no password (or a different password) is required is
                    // when decompression fails, and failure can take almost any form, since we may be feeding the
                    // decompressor garbage.
                    //
                    // In the rare case where we do make a 2nd attempt, re-running the "garble" code simply restores
                    // the src data to its original state.
                    //
                    let attempts = 2;                       // maximum of two attempts
                    if (archive.type != DZip.TYPE_ARC || !archive.password) {
                        attempts = 1;                       // only one attempt for the normal case
                    }
                    let db = await this.readArchive(archive, position, compressedSize);
                    while (attempts--) {
                        if (archive.type == DZip.TYPE_ARC && archive.password) {
                            //
                            // Decrypt the "garbled" ARC data.
                            //
                            let password = archive.password.toUpperCase();
                            for (let off = 0; off < db.length; off++) {
                                db.writeUInt8(db.readUInt8(off) ^ password.charCodeAt(off % password.length), off);
                            }
                            //
                            // ARC file headers don't have a "flags" field, but readFileHeader() adds one anyway,
                            // for consistency between headers, and we now update the ENCRYPTED flag to track whether
                            // this particular file was encrypted.
                            //
                            if (attempts) {
                                fileHeader.flags |= DZip.FileHeader.fields.flags.ENCRYPTED;
                            } else {
                                fileHeader.flags &= ~DZip.FileHeader.fields.flags.ENCRYPTED;
                                record.warnings = [];
                            }
                        }
                        else if (archive.type == DZip.TYPE_ZIP && archive.password) {
                            if (fileHeader.flags & DZip.FileHeader.fields.flags.ENCRYPTED) {
                                db = this.decryptZipData(db, fileHeader, archive.password);
                            }
                        }
                        try {
                            let srcDB = db;
                            let largeWindow, literalTree;
                            switch(fileHeader.method) {
                            case DZip.METHODS.ARC_UNP:
                            case DZip.METHODS.ZIP_STORE:
                                expandedDB = srcDB;
                                break;
                            case DZip.METHODS.ARC_NR:              // aka "Pack"
                                expandedDB = this.unpackSync(srcDB, expandedSize);
                                break;
                            case DZip.METHODS.ARC_HS:              // aka "Squeeze" (Huffman squeezing)
                                expandedDB = this.unsqueezeSync(srcDB, expandedSize);
                                break;
                            case DZip.METHODS.ARC_LZ:              // aka "Crunch5" (LZ compression)
                                expandedDB = this.uncrunchSync(srcDB, expandedSize, 0);
                                break;
                            case DZip.METHODS.ARC_LZNR:            // aka "Crunch6" (LZ non-repeat compression)
                                expandedDB = this.uncrunchSync(srcDB, expandedSize, 1);
                                break;
                            case DZip.METHODS.ARC_LZNH:            // aka "Crunch7" (LZ with new hash)
                                expandedDB = this.uncrunchSync(srcDB, expandedSize, 2);
                                break;
                            case DZip.METHODS.ARC_LZC:             // aka "Crush" (dynamic LZW)
                                expandedDB = this.uncrushSync(srcDB, expandedSize, false);
                                break;
                            case DZip.METHODS.ARC_LZS:             // aka "Squash"
                                expandedDB = this.uncrushSync(srcDB, expandedSize, true);
                                break;
                            case DZip.METHODS.ZIP_SHRINK:
                                expandedDB = this.stretchSync(srcDB, expandedSize);
                                break;
                            case DZip.METHODS.ZIP_REDUCE1:
                            case DZip.METHODS.ZIP_REDUCE2:
                            case DZip.METHODS.ZIP_REDUCE3:
                            case DZip.METHODS.ZIP_REDUCE4:
                                expandedDB = this.expandSync(srcDB, expandedSize, fileHeader.method - DZip.METHODS.ZIP_REDUCE1 + 1);
                                break;
                            case DZip.METHODS.ZIP_IMPLODE:
                                largeWindow = !!(fileHeader.flags & DZip.FileHeader.fields.flags.COMP1);
                                literalTree = !!(fileHeader.flags & DZip.FileHeader.fields.flags.COMP2);
                                expandedDB = this.explodeSync(srcDB, expandedSize, largeWindow, literalTree);
                                break;
                            case DZip.METHODS.ZIP_IMPLODE_DCL:
                                expandedDB = this.blastSync(srcDB);
                                break;
                            default:
                                throw new Error(`Unsupported legacy compression method ${fileHeader.method}`);
                            }
                            if (!expandedDB) {
                                //
                                // Since the decompression handler didn't throw an error of its own, throw a generic error.
                                //
                                throw new Error(`Legacy decompression failure`);
                            }
                            break;
                        } catch (error) {
                            if (!attempts) {
                                throw error;
                            }
                        }
                    }
                }
            }
            if (expandedDB) {
                if (expandedSize != expandedDB.length) {
                    record.warnings.push(`Read ${expandedDB.length} bytes, expected ${expandedSize}`);
                }
                if (fileHeader.crc) {
                    this.updateCRC(record, expandedDB, archive.type, true);
                }
                if (writeData) {
                    await writeData(expandedDB);
                    await writeData();
                }
            }
        }
        catch (error) {
            //
            // Pako apparently throws strings instead of Error objects, so we need to handle that case.
            //
            record.warnings.push(typeof error == "string"? error : error.message);
        }
        return expandedDB;
    }

    /**
     * readLabel(archive)
     *
     * NOTE: This should not be called until after readDirectory() has been called.
     *
     * @param {Archive} archive
     * @returns {string}
     */
    readLabel(archive)
    {
        let match = archive.name.match(/([^\\/.]*)\.[^.]*$/);
        let label = match? match[1].trim() : "";
        for (let record of archive.records) {
            if (record.dirHeader && (record.dirHeader.attr & 0x08)) {
                label = record.dirHeader.name;
                break;
            }
        }
        return label;
    }

    /**
     * updateCRC(record, db, type, final)
     *
     * @this {DZip}
     * @param {ArchiveRecord} record
     * @param {DataBuffer} db
     * @param {number} type (archive type; ie, TYPE_ARC or TYPE_ZIP)
     * @param {boolean} [final] (true if we know this is the final -- or only -- chunk)
     * @returns {number} (CRC value)
     */
    updateCRC(record, db, type, final)
    {
        let crc = 0;
        let crcFile = record.fileHeader.crc;
        let sizeFile = record.fileHeader.size;
        if (crcFile && record.crcBytes < sizeFile) {
            if (type == DZip.TYPE_ARC) {
                record.crcValue = crc = this.getArcCRC(db, record.crcValue);
                record.crcBytes += db.length;
            }
            else if (type == DZip.TYPE_ZIP) {
                record.crcValue = crc = this.getZipCRC(db, record.crcValue);
                record.crcBytes += db.length;
                crc = ~crc;
            }
            if (record.crcBytes >= sizeFile || final) {
                //
                // We now read fileHeader.crc from the file as UINT32 rather than INT32, to avoid
                // those annoying negative hex values when calling toString(16); however, that means
                // we must also convert the calculated crc to a positive 32-bit value before comparing.
                //
                if ((crc >>> 0) != crcFile) {
                    record.warnings.push(`Calculated CRC 0x${(crc >>> 0).toString(16)}, expected 0x${crcFile.toString(16)}`);
                }
            }
        }
        return crc;
    }
}
