/**
 * @fileoverview ZIP/ARC Decompression Library
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import DataBuffer from "./db.js";
import Struct from './struct.js';

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
 * @property {string}   encoding    (encoding to use for strings in archives; default is "cp437")
 *
 * @typedef  {object}   Archive
 * @property {string}   fileName    (name of the archive file)
 * @property {number}   type        (type of archive)
 * @property {Date}     modified    (modification date of archive file, if known)
 * @property {string}   password    (password for encrypted archives; copied from ArchiveOptions)
 * @property {number}   length      (length of the archive file)
 * @property {number}   file        (file descriptor, if any)
 * @property {Cache}    cache       (cache data)
 * @property {Array}    entries     (array of directory entries)
 *
 * @typedef  {object}   ArchiveOptions
 * @property {DataBuffer} db        (optional DataBuffer to use instead of reading from a file)
 * @property {number}   type        (type of archive; default is TYPE_ZIP)
 * @property {Date}     modified    (modification date of archive file, if known)
 * @property {string}   password    (password for encrypted archives)
 * @property {boolean}  prefill     (if true, read the entire archive into memory on open)
 *
 * @typedef  {object}   Cache
 * @property {DataBuffer} db        (cache buffer)
 * @property {number}   offset      (offset in file of data in cache buffer)
 * @property {number}   length      (length of valid data in cache buffer
 *
 * @typedef  {object}   Entry
 * @property {number}   index       (index of entry)
 * @property {object}   dirHeader   (DirHeader structure)
 * @property {number}   dirPosition (position of dirHeader in the archive)
 * @property {object}   fileHeader  (FileHeader structure)
 * @property {number}   filePosition (position of fileHeader in the archive)
 * @property {number}   crcBytes    (number of bytes checksummed so far)
 * @property {number}   crcValue    (value of CRC so far)
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
 * @property {Interfaces} interfaces
 * @property {number} cacheSize (default is 64K)
 * @property {string} encoding (default is "cp437")
 */
export default class Dezip {
    /**
     * Public class fields
     */
    static DEBUG = true;
    static VERSION = "0.1.0";
    static COPYRIGHT = "Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>";

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
        .field('crc',           Struct.INT32)           // uncompressed file CRC-32 value
        .field('compressedSize',Struct.UINT32)          // compressed size
        .field('size',          Struct.UINT32)          // uncompressed size
        .field('lenName',       Struct.UINT16)          // filename length
        .field('lenExtra',      Struct.UINT16)          // extra field length
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
        .field('crc',           Struct.INT32)           // uncompressed file CRC-32 value
        .field('compressedSize',Struct.UINT32)          // compressed size
        .field('size',          Struct.UINT32)          // uncompressed size
        .field('lenName',       Struct.UINT16)          // filename length
        .field('lenExtra',      Struct.UINT16)          // extra field length
        .field('lenComment',    Struct.UINT16)          // file comment length
        .field('diskStart',     Struct.UINT16)          // disk number start
        .field('intAttr',       Struct.UINT16)          // internal file attributes
        .field('attr',          Struct.UINT32)          // external file attributes (host system dependent)
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
        .field('name',          13)                     // filename (null terminated)
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
        COMMENT:                0x00010000,             // the archive contains one or more entry comments
        ENCRYPTED:              0x00020000              // the archive contains one or more encrypted ("garbled") entries
    };

    static ARCHIVE_EXCEPTIONS = 0x0000ffff;
    static ENTRY_EXCEPTIONS   = 0xffff0000;

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
        this.encoding = (interfaceOptions.encoding || "cp437").toLowerCase();
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
     * open(fileName, db, options)
     *
     * If successful, this method returns an Archive object used with various read functions.
     *
     * @this {Dezip}
     * @param {string} fileName
     * @param {DataBuffer} [db]
     * @param {ArchiveOptions} [options]
     * @returns {Archive}
     */
    async open(fileName, db = null, options = {})
    {
        let archive = {
            fileName,                   // name of the archive file
            type: options.type || Dezip.TYPE_ZIP,
            modified: options.modified, // modification date of archive file
            password: options.password, // password for encrypted archives
            length: 0,                  // length of the archive file
            file: null,                 // file handle, if any
            cache: {},                  // cache data
            entries: [],                // array of directory entries,
            exceptions: 0,              // see Dezip.EXCEPTIONS.*
            warnings: []                // array of archive warnings, if any
        };
        //
        // If a DataBuffer (db) is provided, then no reading is required; we also provide
        // the option of reading the entire archive into a DataBuffer.  However, the preferred
        // approach is to read structures from the file as needed into a cache buffer.
        //
        if (db) {
            archive.length = db.length;
            this.initCache(archive, db, archive.length);
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
            archive.file = await this.interfaces.open(fileName, "r");
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
        let crc32 = (crc, b) => this.interfaces.getZipCRCByte(b, crc);
        //
        // The ZIP decryption algorithm multiplies two 32-bit numbers, resulting in values
        // with up to 64 bits.  Even though the algorithm only cares about the low 32 bits of
        // the result, Javascript multiplication loses precision in those low bits whenever
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
        // the last (high) byte of each, so an additional 8-bit shift is needed.
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
     * inflateChunks(entry, chunkGenerator)
     *
     * @this {Dezip}
     * @param {Entry} entry
     * @param {*} chunkGenerator
     * @returns {Promise<Buffer>}
     */
    async inflateChunks(entry, chunkGenerator)
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
                this.updateCRC(entry, new DataBuffer(chunk), Dezip.TYPE_ZIP);
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
     * @this {Dezip}
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
     * newEntry(archive)
     *
     * @this {Dezip}
     * @param {Archive} archive
     * @returns {Entry}
     */
    newEntry(archive)
    {
        let entry = {
            index: archive.entries.length,
            dirHeader: null,
            dirPosition: -1,
            fileHeader: null,
            filePosition: -1,
            exceptions: 0,              // see Dezip.EXCEPTIONS.*
            warnings: []                // array of entry warnings, if any
        };
        archive.entries.push(entry);
        return entry;
    }

    /**
     * readArchive(archive, position, extent)
     *
     * NOTE: When reading from a file, this function deliberately bypasses the cache,
     * on the assumption that we're reading unstructured (eg, compressed) chunks of data
     * which don't need to be cached and/or could exceed the size of our cache buffer.
     *
     * The cache is only intended for reading small data structures from the archive.
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
            throw new Error(`${archive.fileName}: Position ${position} exceeds archive length (${archive.length})`);
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
                        throw new Error(`${archive.fileName}: Requested ${readExtent} bytes from archive at position ${readPosition}, received ${result.bytesRead}`);
                    }
                } else {
                    //
                    // As asserted above, this is an inconsistency, because archives without handles should be fully cached.
                    //
                    throw new Error(`${archive.fileName}: No file handle available`);
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
            yield db;
            position += db.length;
            extent -= db.length;
        }
    }

    /**
     * readDirectory(archive, filespec, filterExceptions, filterMethod)
     *
     * This function always returns a new list of entries, based on any filtering that may
     * have been requested (archives.entries always contains the complete and unfiltered list).
     *
     * Also note that even though this function always uses readDirEntry() (and failing that,
     * readFileEntry()) to read each entry, those functions only scan the archive on the first
     * attempt.  Subsequent calls to those functions simply return the next entry in archive.entries.
     *
     * @this {Dezip}
     * @param {Archive} archive
     * @param {string} [filespec]
     * @param {number} [filterExceptions] (0 if none)
     * @param {number} [filterMethod] (-1 if none)
     * @returns {Array}
     */
    async readDirectory(archive, filespec = "*", filterExceptions = 0, filterMethod = -1)
    {
        let entry = null, entries = [];
        let entryExceptions = filterExceptions & Dezip.ENTRY_EXCEPTIONS;
        let archiveExceptions = filterExceptions & Dezip.ARCHIVE_EXCEPTIONS;
        const regex = new RegExp("(?:^|/)" + filespec.replace(/\./g, "\\.").replace(/\*/g, ".*").replace(/\?/g, ".") + "$", "i");
        if (!(archive.exceptions & Dezip.EXCEPTIONS.NODIRS)) {
            do {
                entry = await this.readDirEntry(archive, entry);
                if (!entry) break;
                this.assert(archive.endHeader && entry.dirHeader);
                if (archive.endHeader.diskNum != entry.dirHeader.diskStart) {
                    archive.exceptions |= Dezip.EXCEPTIONS.SPLIT;
                }
                if (filterMethod != -1 && entry.dirHeader.method != filterMethod) {
                    continue;
                }
                if ((entry.exceptions & entryExceptions) == entryExceptions && regex.test(entry.dirHeader.name)) {
                    entries.push(entry);
                }
            } while (true);
            if (!archive.entries.length) {
                archive.exceptions |= Dezip.EXCEPTIONS.NODIRS;
            }
        }
        //
        // Search the file headers ONLY if there are no dir headers AND we're unsure about file headers.
        //
        if ((archive.exceptions & (Dezip.EXCEPTIONS.NODIRS | Dezip.EXCEPTIONS.NOFILES)) == Dezip.EXCEPTIONS.NODIRS) {
            do {
                entry = await this.readFileEntry(archive, entry);
                if (!entry) break;
                if (filterMethod != -1 && entry.fileHeader.method != filterMethod) {
                    continue;
                }
                if ((entry.exceptions & entryExceptions) == entryExceptions && regex.test(entry.fileHeader.name)) {
                    entries.push(entry);
                }
            } while (true);
            if (!archive.entries.length) {
                archive.exceptions |= Dezip.EXCEPTIONS.NOFILES;
            }
        }
        if ((archive.exceptions & archiveExceptions) != archiveExceptions) {
            entries = [];
        }
        return entries;
    }

    /**
     * readDirEntry(archive, prevEntry)
     *
     * Reads the next DirHeader of the archive, based on the position of the last header.
     * If this is the first request, then we scan the archive for a DirEndHeader (DIREND), starting
     * from the end of the archive, which should tell us where the first DirHeader is located.
     *
     * @this {Dezip}
     * @param {Archive} archive
     * @param {Entry|null} prevEntry
     * @returns {Entry|null}
     */
    async readDirEntry(archive, prevEntry)
    {
        let entry, position;
        if (!prevEntry) {
            position = -1;
            entry = archive.entries[0];
        } else {
            position = prevEntry.dirPosition;
            entry = archive.entries[prevEntry.index + 1];
        }
        if (entry && entry.dirHeader) {
            return entry;
        }
        entry = null;
        let cache = archive.cache;
        if (position >= 0) {
            let dirHeader = prevEntry.dirHeader;
            position += Dezip.DirHeader.length + dirHeader.lenName + dirHeader.lenExtra + dirHeader.lenComment;
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
                    // To save the expense of readStruct(), probe the signature first.
                    //
                    if (cache.db.readUInt32LE(offsetEnd) == Dezip.DirEndHeader.fields.signature.DIREND) {
                        let endHeader = Dezip.DirEndHeader.readStruct(cache.db, offsetEnd, this.encoding);
                        this.assert(endHeader.signature == Dezip.DirEndHeader.fields.signature.DIREND);
                        //
                        // We've got the DirEndHeader, so save it in the archive object.
                        //
                        archive.endHeader = endHeader;
                        position = endHeader.position;
                        //
                        // If there's comment, read it and save it in the archive object.
                        //
                        let lenComment = endHeader.lenComment;
                        if (lenComment) {
                            let posComment = posArchive + offsetEnd - offset + Dezip.DirEndHeader.length;
                            [offset, length] = await this.readCache(archive, posComment, lenComment);
                            if (length < lenComment) {
                                archive.warnings.push(`Archive comment length (${lenComment}) exceeds available length (${length})`);
                            }
                            archive.comment = Dezip.DirEndHeader.readString(cache.db, offset, length, this.encoding);
                            archive.exceptions |= Dezip.EXCEPTIONS.BANNER;
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
                posArchive -= (cache.db.length - Dezip.DirEndHeader.length * 2);
                if (posArchive < 0) posArchive = 0;
            }
        }
        if (position >= 0) {
            //
            // Read the specified DirHeader.
            //
            let [offset, length] = await this.readCache(archive, position, Dezip.DirHeader.length);
            let signature = cache.db.readUInt32LE(offset);
            if (signature == (Dezip.DirEndHeader.fields.signature.DIREND)) {
                return null;
            }
            let dirHeader = Dezip.DirHeader.readStruct(cache.db, offset, this.encoding);
            if (dirHeader.signature != Dezip.DirHeader.fields.signature.DIRSIG) {
                throw new Error(`${archive.fileName}: Invalid DirHeader signature (${dirHeader.signature.toString(16)}) at position ${position+offset}`);
            }
            entry = this.newEntry(archive);
            entry.dirHeader = dirHeader;
            entry.dirPosition = position;
            position += Dezip.DirHeader.length;
            [offset, length] = await this.readCache(archive, position, dirHeader.lenName);
            if (length < dirHeader.lenName) {
                entry.warnings.push(`Name length (${dirHeader.lenName}) exceeds available length (${length})`);
            }
            dirHeader.name = Dezip.DirHeader.readString(cache.db, offset, length, this.encoding);
            //
            // TODO: Find examples of archives with "lenExtra" data and figure out what to do with it.
            //
            position += dirHeader.lenName + dirHeader.lenExtra;
            if (dirHeader.lenComment) {
                [offset, length] = await this.readCache(archive, position, dirHeader.lenComment);
                if (length < dirHeader.lenComment) {
                    entry.warnings.push(`Comment length (${dirHeader.lenComment}) exceeds available length (${length})`);
                }
                dirHeader.comment = Dezip.DirHeader.readString(cache.db, offset, length, this.encoding);
                entry.exceptions |= Dezip.EXCEPTIONS.COMMENT;
                archive.exceptions |= Dezip.EXCEPTIONS.COMMENT;
            }
            if (dirHeader.flags & Dezip.DirHeader.fields.flags.ENCRYPTED) {
                entry.exceptions |= Dezip.EXCEPTIONS.ENCRYPTED;
                archive.exceptions |= Dezip.EXCEPTIONS.ENCRYPTED;
            }
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
     * @returns {Entry|null}
     */
    async readFileEntry(archive, prevEntry)
    {
        //
        // If prevEntry is null, then we start with entries[0], and if there are no directory entries,
        // then we scan the archive for the first FileHeader (or ArcHeader).
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
            position = entry.dirHeader.position;
        } else {
            entry = null;
            if (prevEntry) {
                this.assert(prevEntry.fileHeader != null);
                position = prevEntry.filePosition + prevEntry.fileHeader.length + prevEntry.fileHeader.compressedSize;
                if (position >= archive.length) {
                    return null;
                }
            }
        }
        let cache = archive.cache;
        if (position < 0) {
            //
            // Probe the beginning of the file for a FileHeader (or ArcHeader) signature.
            //
            let [offset, length] = await this.readCache(archive, 0, 4);
            if (length >= 4) {
                let arcType = archive.type;
                let signature = cache.db.readUInt32LE(offset);
                let type = (signature >> 8) & 0xff;     // for ARC files, we also probe the type as a sanity check
                if (signature == Dezip.FileHeader.fields.signature.FILESIG) {
                    arcType = Dezip.TYPE_ZIP;
                    position = 0;
                } else if (signature == Dezip.SpanHeader.fields.signature.SPANSIG) {
                    arcType = Dezip.TYPE_ZIP;
                    position = 4;
                } else if ((signature & 0xff) == Dezip.ArcHeader.fields.signature.ARCSIG && type > 0 && type < Dezip.ArcHeader.fields.type.ARC_UNK) {
                    arcType = Dezip.TYPE_ARC;
                    position = 0;
                }
                if (arcType != archive.type) {
                    archive.exceptions |= Dezip.EXCEPTIONS.WRONGTYPE;
                    archive.type = arcType;
                }
            }
        }
        if (position >= 0) {
            let fileHeader = await this.readFileHeader(archive, position);
            if (!fileHeader) {
                return null;
            }
            entry = entry || this.newEntry(archive);
            entry.fileHeader = fileHeader;
            entry.filePosition = position;
            if (fileHeader.flags & Dezip.FileHeader.fields.flags.ENCRYPTED) {
                entry.exceptions |= Dezip.EXCEPTIONS.ENCRYPTED;
                archive.exceptions |= Dezip.EXCEPTIONS.ENCRYPTED;
            }
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
        let fileHeader = null;
        let lenHeader = archive.type == Dezip.TYPE_ARC? Dezip.ArcHeader.length : Dezip.FileHeader.length;
        let [offset, length] = await this.readCache(archive, position, lenHeader);
        if (length >= lenHeader) {
            if (archive.type == Dezip.TYPE_ARC) {
                let arcHeader = Dezip.ArcHeader.readStruct(archive.cache.db, offset, this.encoding);
                if (arcHeader.signature == Dezip.ArcHeader.fields.signature.ARCSIG && arcHeader.type > 0 && arcHeader.type < Dezip.ArcHeader.fields.type.ARC_UNK) {
                    arcHeader.method = -arcHeader.type;             // convert ARC type to method (signed to avoid conflict with ZIP methods)
                    if (arcHeader.type == Dezip.ArcHeader.fields.type.ARC_OLD) {
                        arcHeader.size = arcHeader.compressedSize;
                        arcHeader.method = Dezip.METHODS.ARC_UNP;
                    }
                    arcHeader.length = Dezip.ArcHeader.length;
                    fileHeader = arcHeader;
                    fileHeader.flags = 0;
                }
            } else {
                let zipHeader = Dezip.FileHeader.readStruct(archive.cache.db, offset, this.encoding);
                if (zipHeader.signature == Dezip.FileHeader.fields.signature.FILESIG) {
                    //
                    // TODO: For all fields that appear in BOTH FileHeader AND DirHeader, consider comparing them
                    // and warning about any differences.
                    //
                    position += Dezip.FileHeader.length;
                    [offset, length] = await this.readCache(archive, position, zipHeader.lenName);
                    if (length < zipHeader.lenName) {
                        //
                        // Although generally warnings are saved in archive.warnings or entry.warnings as appropriate,
                        // we don't have an entry yet, so we save it in the header.  Note that headers are created
                        // by readStruct() which may also generate warnings, but one key difference is that readStruct()
                        // ONLY adds a 'warnings' property if there were actual warnings, so we have to check first.
                        //
                        if (!zipHeader.warnings) zipHeader.warnings = [];
                        zipHeader.warnings.push(`Name length (${zipHeader.lenName}) exceeds available length (${length})`);
                    }
                    zipHeader.name = Dezip.FileHeader.readString(archive.cache.db, offset, length, this.encoding);
                    zipHeader.length = Dezip.FileHeader.length + zipHeader.lenName + zipHeader.lenExtra;
                    if (zipHeader.flags & Dezip.FileHeader.fields.flags.ENCRYPTED) {
                        //
                        // There should be an additional 12 bytes of data for encrypted files (ie, the "Encryption Header"),
                        // which we need to read and skip as well.
                        //
                        position += zipHeader.lenName + zipHeader.lenExtra;
                        [offset, length] = await this.readCache(archive, position, 12);
                        if (length < 12) {
                            zipHeader.warnings.push(`Encryption header length (${12}) exceeds available length (${length})`);
                        }
                        zipHeader.encBytes = [];
                        for (let i = 0; i < length; i++) {
                            zipHeader.encBytes[i] = archive.cache.db.buffer[offset + i];
                            // zipHeader.encBytes[i] = archive.cache.db.readUInt8(offset + i);
                        }
                        zipHeader.length += 12;
                        archive.exceptions |= Dezip.EXCEPTIONS.ENCRYPTED;
                    }
                    fileHeader = zipHeader;
                }
            }
        }
        return fileHeader;
    }

    /**
     * readFile(archive, entry, writeData)
     *
     * @this {Dezip}
     * @param {Archive} archive
     * @param {Entry} entry
     * @param {function} [writeData]
     * @returns {DataBuffer} (expandedDB)
     */
    async readFile(archive, entry, writeData)
    {
        let expandedDB;
        let fileHeader = entry.fileHeader;
        if (!fileHeader) {
            this.assert(entry.dirHeader);
            let position = entry.dirHeader.position;
            fileHeader = await this.readFileHeader(archive, position);
            if (!fileHeader) {
                throw new Error(`Unable to read file header`);
            }
            entry.fileHeader = fileHeader;
            entry.filePosition = position;
        }
        entry.crcBytes = 0;
        entry.crcValue = archive.type == Dezip.TYPE_ARC? 0 : ~0;
        let position = entry.filePosition + fileHeader.length;
        let compressedSize = fileHeader.compressedSize;
        let expandedSize = fileHeader.size;
        if ((entry.fileHeader.flags & Dezip.FileHeader.fields.flags.ENCRYPTED) && !archive.password) {
            compressedSize = 0;
            entry.warnings.push(`Encrypted file`);
        }
        if (compressedSize) {
            let expandedData;
            if (fileHeader.method == Dezip.METHODS.ZIP_DEFLATE || fileHeader.method == Dezip.METHODS.ZIP_DEFLATE64) {
                if (this.interfaces.createInflate) {
                    expandedData = await this.inflateChunks(
                        entry, this.readChunks(archive, position, compressedSize)
                    );
                } else if (this.interfaces.inflate) {
                    let db = await this.readArchive(archive, position, compressedSize);
                    if (fileHeader.flags & Dezip.FileHeader.fields.flags.ENCRYPTED) {
                        db = this.decryptZipData(db, fileHeader, archive.password);
                    }
                    expandedData = await this.inflateAsync(db.buffer);
                }
                else {
                    throw new Error(`No inflate interface available`);
                }
            } else {
                /**
                 * The actual decompression is now inside a loop AND a try/catch block, to automatically retry
                 * decryption in case 1) a password was supplied but not actually required (the ARC file doesn't tell
                 * us one way or the other) or 2) the ARC contains a mixture of encrypted and unencrypted files.
                 *
                 * With ARC files, our only clue that no password (or a different password) is required is when
                 * decompression fails, and failure can take almost any form, since we may be feeding the decompressor
                 * garbage.
                 *
                 * In the rare case where we do make a 2nd attempt, re-running the password code will restore the
                 * src data to its original state, and entry.reset() will clear any logged errors from the 1st attempt.
                 */
                let attempts = 2;                       // maximum of two attempts
                if (archive.type != Dezip.TYPE_ARC || !archive.password) {
                    attempts = 1;                       // only one attempt for the normal case
                }
                let db = await this.readArchive(archive, position, compressedSize);
                while (attempts--) {
                    try {
                        if (archive.type == Dezip.TYPE_ARC && archive.password) {
                            /**
                             * Decrypt the "garbled" ARC data.
                             */
                            let password = archive.password.toUpperCase();
                            for (let off = 0; off < db.length; off++) {
                                db.writeUInt8(db.readUInt8(off) ^ password.charCodeAt(off % password.length), off);
                            }
                            /**
                             * ARC file headers don't have a "flags" field, but readFileHeader() adds one anyway,
                             * for consistency between headers, and we now update the ENCRYPTED flag to track whether
                             * this particular file was encrypted.
                             */
                            if (attempts) {
                                fileHeader.flags |= Dezip.FileHeader.fields.flags.ENCRYPTED;
                            } else {
                                fileHeader.flags &= ~Dezip.FileHeader.fields.flags.ENCRYPTED;
                                entry.warnings = [];
                            }
                        }
                        else if (archive.type == Dezip.TYPE_ZIP && archive.password) {
                            if (fileHeader.flags & Dezip.FileHeader.fields.flags.ENCRYPTED) {
                                db = this.decryptZipData(db, fileHeader, archive.password);
                            }
                        }
                        let srcData = db.buffer;
                        //
                        // Process "legacy" compression methods here.
                        //
                        // TODO: Create versions of the LegacyZIP and LegacyARC classes that use DataBuffers.
                        //
                        switch(fileHeader.method) {
                        case Dezip.METHODS.ARC_UNP:
                        case Dezip.METHODS.ZIP_STORE:
                            expandedData = srcData;
                            break;
                        case Dezip.METHODS.ARC_NR:              // aka "Pack"
                            if (this.interfaces.unpackSync) {
                                expandedData = this.interfaces.unpackSync(srcData, expandedSize);
                            }
                            break;
                        case Dezip.METHODS.ARC_HS:              // aka "Squeeze" (Huffman squeezing)
                            if (this.interfaces.unsqueezeSync) {
                                expandedData = this.interfaces.unsqueezeSync(srcData, expandedSize);
                            }
                            break;
                        case Dezip.METHODS.ARC_LZ:              // aka "Crunch5" (LZ compression)
                            if (this.interfaces.uncrunchSync) {
                                expandedData = this.interfaces.uncrunchSync(srcData, expandedSize, 0);
                            }
                            break;
                        case Dezip.METHODS.ARC_LZNR:            // aka "Crunch6" (LZ non-repeat compression)
                            if (this.interfaces.uncrunchSync) {
                                expandedData = this.interfaces.uncrunchSync(srcData, expandedSize, 1);
                            }
                            break;
                        case Dezip.METHODS.ARC_LZNH:            // aka "Crunch7" (LZ with new hash)
                            if (this.interfaces.uncrunchSync) {
                                expandedData = this.interfaces.uncrunchSync(srcData, expandedSize, 2);
                            }
                            break;
                        case Dezip.METHODS.ARC_LZC:             // aka "Crush" (dynamic LZW)
                            if (this.interfaces.uncrushSync) {
                                expandedData = this.interfaces.uncrushSync(srcData, expandedSize, false);
                            }
                            break;
                        case Dezip.METHODS.ARC_LZS:             // aka "Squash"
                            if (this.interfaces.uncrushSync) {
                                expandedData = this.interfaces.uncrushSync(srcData, expandedSize, true);
                            }
                            break;
                        case Dezip.METHODS.ZIP_SHRINK:
                            if (this.interfaces.stretchSync) {
                                expandedData = this.interfaces.stretchSync(srcData, expandedSize);
                            }
                            break;
                        case Dezip.METHODS.ZIP_REDUCE1:
                        case Dezip.METHODS.ZIP_REDUCE2:
                        case Dezip.METHODS.ZIP_REDUCE3:
                        case Dezip.METHODS.ZIP_REDUCE4:
                            if (this.interfaces.expandSync) {
                                expandedData = this.interfaces.expandSync(srcData, expandedSize, fileHeader.method - Dezip.METHODS.ZIP_REDUCE1 + 1);
                            }
                            break;
                        case Dezip.METHODS.ZIP_IMPLODE:
                            if (this.interfaces.explodeSync) {
                                let largeWindow = !!(fileHeader.flags & Dezip.FileHeader.fields.flags.COMP1);
                                let literalTree = !!(fileHeader.flags & Dezip.FileHeader.fields.flags.COMP2);
                                expandedData = this.interfaces.explodeSync(srcData, expandedSize, largeWindow, literalTree);
                            }
                            break;
                        case Dezip.METHODS.ZIP_IMPLODE_DCL:
                            if (this.interfaces.blastSync) {
                                expandedData = this.interfaces.blastSync(srcData);
                            }
                            break;
                        }
                        if (expandedData) break;
                        if (!attempts) {
                            throw new Error(`Unsupported compression method ${fileHeader.method}`);
                        }
                    } catch (error) {
                        entry.warnings.push(error.message);
                    }
                }
            }
            if (expandedData) {
                if (expandedSize != expandedData.length) {
                    entry.warnings.push(`Expected ${expandedSize} bytes, received ${expandedData.length}`);
                }
                expandedDB = new DataBuffer(expandedData);
                if (fileHeader.crc) {
                    this.updateCRC(entry, expandedDB, archive.type, true);
                }
                if (writeData) {
                    await writeData(expandedDB);
                    await writeData();
                }
            }
        }
        return expandedDB;
    }

    /**
     * updateCRC(entry, db, type, final)
     *
     * @this {Dezip}
     * @param {Entry} entry
     * @param {DataBuffer} db
     * @param {number} type (archive type; ie, TYPE_ARC or TYPE_ZIP)
     * @param {boolean} [final] (true if we know this is the final -- or only -- chunk)
     * @returns {number} (CRC value)
     */
    updateCRC(entry, db, type, final)
    {
        let crc = 0;
        let crcFile = entry.fileHeader.crc;
        let sizeFile = entry.fileHeader.size;
        if (crcFile && entry.crcBytes < sizeFile) {
            if (type == Dezip.TYPE_ARC && this.interfaces.getArcCRC) {
                entry.crcValue = crc = this.interfaces.getArcCRC(db.buffer, entry.crcValue);
                entry.crcBytes += db.length;
            }
            else if (type == Dezip.TYPE_ZIP && this.interfaces.getZipCRC) {
                entry.crcValue = crc = this.interfaces.getZipCRC(db.buffer, entry.crcValue);
                entry.crcBytes += db.length;
                crc = ~crc;
            }
            if (entry.crcBytes >= sizeFile || final) {
                if (crc != crcFile) {
                    entry.warnings.push(`Expected CRC ${crcFile.toString(16)}, received ${(crc).toString(16)}`);
                }
            }
        }
        return crc;
    }
}
