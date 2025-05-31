/**
 * @fileoverview ISO Extraction Library
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * Items of interest:
 *
 * I was intrigued by this blog post (https://multimedia.cx/eggs/iso-9660-compromise-part-2-finding-root),
 * which discussed this ISO 9660 CD-ROM image (https://archive.org/details/Power-Drive-DOS-1994), which was
 * purported to have some "corruption"... except that macOS was able to mount and read the image just fine.
 *
 * So I took a look, and sure enough, this utility was unable to read the image as well.  As the blogger
 * noted, there seemed to be off-by-one errors in all the directory block numbers.  But then I also noticed
 * that all the directory entries also contained a 1 instead of the usual 0 in the "extended attributes"
 * field.
 *
 * Up until this point, I had been ignoring that field, largely because most of the ISO 9660 documentation
 * I'd referred to (eg, https://wiki.osdev.org/ISO_9660) didn't really explain extended attributes, so I had
 * no idea where they were stored or what they typically contained.  But looking at the Power Drive image,
 * I saw single-sector chunks of data sprinkled throughout the image that looked a bit "attributey"; eg:
 *
 *      00031000  0a 00 00 0a 0c 00 00 0c  aa aa 00 00 00 00 03 a7  |................|
 *      00031010  4e 0a 00 00 00 d8 03 a7  4e 0a 03 9d de 06 03 a7  |N.......N.......|
 *      00031020  4d 32 00 00 00 00 00 00  00 3a 00 01 30 30 30 30  |M2.......:..0000|
 *      00031030  30 30 30 30 30 30 30 30  30 30 30 30 00 30 30 30  |000000000000.000|
 *      00031040  30 30 30 30 30 30 30 30  30 30 30 30 30 00 00 00  |0000000000000...|
 *      00031050  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
 *
 * For example, the first 8 bytes look suspiciously like a pair of UINT16CE values and all those "0" bytes
 * look like a pair of ISODATETIME17 values.  Anyway, it didn't take long to learn that extended attributes
 * are always stored in block(s) preceding an items's data block(s), so you simply add the extended attribute
 * block size (cbAttr) to an item's starting block to get its first data block.
 *
 * I still haven't investigated the data stored in those extended attribute blocks, but it's not essential
 * to the operations performed here (ie, file listing and extraction), so that's an exercise for another day.
 */

import DataBuffer from "./db.js";
import Struct from './struct.js';

/**
 * We give the user total control over the interfaces that will be used to read images,
 * which also relieves us from importing them ourselves, allowing this code to easily run
 * in any environment (eg, Node.js, browser, etc).
 *
 * @typedef  {object}   Interfaces
 * @property {function} fetch       (fetch() interface to read remote files)
 * @property {function} open        (open() interface to open local files)
 * @property {function} printf      (printf() interface to write messages; default is console.log)
 *
 * @typedef  {object}   InterfaceOptions
 * @property {number}   cacheSize   (size of cache buffer, if needed; default is 64K)
 * @property {string}   encoding    (encoding to use for strings in image; default is "cp437")
 *
 * @typedef  {object}   Image
 * @property {string}   name        (name of the image file)
 * @property {Date}     modified    (modification date of image file, if known)
 * @property {number}   size        (size of the image file)
 * @property {string}   source      (source of the image data; eg, "Buffer", "FS", or "Network")
 * @property {number}   lbaMax      (maximum logical block address in the image)
 * @property {number}   file        (file descriptor, if any)
 * @property {Cache}    cache       (cache data)
 * @property {Array}    paths       (array of path records, if any)
 * @property {Array}    records     (array of directory records, if any)
 * @property {number}   exceptions  (see ISO.EXCEPTIONS.*)
 * @property {Array}    warnings    (array of image warnings, if any)
 *
 * @typedef  {object}   ImageOptions
 * @property {Date}     modified    (modification date of image file, if known)
 * @property {boolean}  prefill     (if true, read the entire image into memory on open)
 * @property {boolean}  compat      (if true, ignore any supplementary (eg, Joliet) volume descriptor
 *
 * @typedef  {object}   Cache
 * @property {DataBuffer} db        (cache buffer)
 * @property {number}   offset      (offset in file of data in cache buffer)
 * @property {number}   length      (length of valid data in cache buffer
 */

/**
 * This class provides an environment-agnostic interface for extracting contents of ISO images.
 *
 * That means the constructor must be provided with the reading interfaces available in the current
 * environment (eg, fetch() if running in a browser, or fs.open() if running in Node.js).
 *
 * @class ISO
 * @property {Interfaces} interfaces
 * @property {number} cacheSize (default is 64K)
 * @property {string} encoding (default is "cp437")
 */
export default class ISO {

    /**
     * Public class fields
     */
    static DEBUG = true;
    static VERSION = "1.0";
    static COPYRIGHT = "Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>";

    static BLOCK_SIZE = 2048;           // default block size
    static SYSTEM_SIZE = 32768;         // size of system area
    static PATHREC_SIZE = 255;          // maximum size of a path record

    static DirRecord = new Struct("Directory Record")
        .field('length',        Struct.BYTE)            // 0x00: length of this record in bytes
        .field('cbAttr',        Struct.BYTE)            // 0x01: extended attribute record length (in blocks)
        .field('lba',           Struct.UINT32CE)        // 0x02: logical block address of the file
        .field('size',          Struct.UINT32CE)        // 0x0A: size of the file (in bytes)
        .field('dateTime',      Struct.ISODATETIME7)    // 0x12: date and time of last modification
        .field('flags',         Struct.BYTE, {          // 0x19: flags
            HIDDEN:     0x01,                           // hidden entry
            DIRECTORY:  0x02,                           // directory entry
            ASSOCIATED: 0x04,                           // associated file
            EXTENDED:   0x08                            // record format
        })
        .field('unitSize',      Struct.BYTE)            // 0x1A: unit size for interleaved files
        .field('interleave',    Struct.BYTE)            // 0x1B: interleave gap size for interleaved files
        .field('volSeq',        Struct.UINT16CE)        // 0x1C: volume sequence number for interleaved files
        .field('lenName',       Struct.BYTE)            // 0x20: length of name (maximum 31)
        .field('name',          Struct.STRLEN1)         // 0x21: name of file or directory (in ASCII)
        .verifyLength(34);

    static DirRecord2 = new Struct("Directory Record (UCS-2 BE)")
        .field('length',        Struct.BYTE)            // 0x00: length of this record in bytes
        .field('cbAttr',        Struct.BYTE)            // 0x01: extended attribute record length (in blocks)
        .field('lba',           Struct.UINT32CE)        // 0x02: logical block address of the file
        .field('size',          Struct.UINT32CE)        // 0x0A: size of the file (in bytes)
        .field('dateTime',      Struct.ISODATETIME7)    // 0x12: date and time of last modification
        .field('flags',         Struct.BYTE, {          // 0x19: flags
            HIDDEN:     0x01,                           // hidden entry
            DIRECTORY:  0x02,                           // directory entry
            ASSOCIATED: 0x04,                           // associated file
            EXTENDED:   0x08                            // record format
        })
        .field('unitSize',      Struct.BYTE)            // 0x1A: unit size for interleaved files
        .field('interleave',    Struct.BYTE)            // 0x1B: interleave gap size for interleaved files
        .field('volSeq',        Struct.UINT16CE)        // 0x1C: volume sequence number for interleaved files
        .field('lenName',       Struct.BYTE)            // 0x20: length of name (in bytes, even though 2-byte characters are used)
        .field('name',          Struct.UCS2BE1)         // 0x21: name of file or directory (in UCS-2 BE)
        .verifyLength(34);

    static HSDirRecord = new Struct("High Sierra Directory Record")
        .field('length',        Struct.BYTE)            // 0x00: length of this record in bytes
        .field('cbAttr',        Struct.BYTE)            // 0x01: extended attribute record length (in blocks)
        .field('lba',           Struct.UINT32CE)        // 0x02: logical block address of the file
        .field('size',          Struct.UINT32CE)        // 0x0A: size of the file (in bytes)
        .field('dateTime',      Struct.ISODATETIME6)    // 0x12: date and time of last modification
        .field('flags',         Struct.BYTE, {          // 0x18: flags
            HIDDEN:     0x01,                           // hidden entry
            DIRECTORY:  0x02,                           // directory entry
            ASSOCIATED: 0x04,                           // associated file
            EXTENDED:   0x08                            // record format
        })
        .field('.reserved',     Struct.BYTE)            // 0x19: reserved for future use
        .field('unitSize',      Struct.BYTE)            // 0x1A: unit size for interleaved files
        .field('interleave',    Struct.BYTE)            // 0x1B: interleave gap size for interleaved files
        .field('volSeq',        Struct.UINT16CE)        // 0x1C: volume sequence number for interleaved files
        .field('lenName',       Struct.BYTE)            // 0x20: length of name (maximum 31)
        .field('name',          Struct.STRLEN1)         // 0x21: name of file or directory (in ASCII)
        .verifyLength(34);

    static PathRecordLE = new Struct("Path Record (LE)")
        .field('lenName',       Struct.BYTE)            // 0x00: length of name (in bytes, even if 2-byte characters are used)
        .field('cbAttr',        Struct.BYTE)            // 0x01: extended attribute record length (in blocks)
        .field('lba',           Struct.UINT32LE)        // 0x02: logical block address of directory
        .field('indexParent',   Struct.UINT16LE)        // 0x06: directory number of parent directory
        .field('name',          Struct.STRLEN8)         // 0x08: name of directory (in ASCII)
        .verifyLength(8);

    static PathRecordLE2 = new Struct("Path Record (LE with UCS-2 BE)")
        .field('lenName',       Struct.BYTE)            // 0x00: length of name (in bytes, even though 2-byte characters are used)
        .field('cbAttr',        Struct.BYTE)            // 0x01: extended attribute record length (in blocks)
        .field('lba',           Struct.UINT32LE)        // 0x02: logical block address of directory
        .field('indexParent',   Struct.UINT16LE)        // 0x06: directory number of parent directory
        .field('name',          Struct.UCS2BE8)         // 0x08: name of directory (in UCS-2 BE)
        .verifyLength(8);

    static HSPathRecordLE = new Struct("High Sierra Path Record")
        .field('lba',           Struct.UINT32LE)        // 0x00: logical block address of directory
        .field('cbAttr',        Struct.BYTE)            // 0x04: extended attribute record length (in blocks)
        .field('lenName',       Struct.BYTE)            // 0x05: length of name
        .field('indexParent',   Struct.UINT16LE)        // 0x06: directory number of parent directory
        .field('name',          Struct.STRLEN3)         // 0x08: name of directory (in ASCII)
        .verifyLength(8);

    static PrimaryDesc = new Struct("Primary Volume Descriptor")
        .field('type',          Struct.BYTE, {          // 0x0000
            BOOT:       0x00,
            PRIMARY:    0x01,                           // Primary Volume Descriptor
            SUPP:       0x02,                           // Supplementary Volume Descriptor
            PARTITION:  0x03,                           // Volume Partition Descriptor
            END:        0xFF                            // End of Volume Descriptor
        })
        .field('identifier',    Struct.STR(5))          // 0x0001: "CD001"
        .field('version',       Struct.BYTE)            // 0x0006: version of the ISO 9660 standard
        .field('flags',         Struct.BYTE)            // 0x0007: (Supplementary Volume Descriptor only)
        .field('sysID',         Struct.STR(32))         // 0x0008
        .field('volID',         Struct.STR(32))         // 0x0028: volume identifier
        .field('.unused2',      Struct.BSS(8))          // 0x0048
        .field('volBlocks',     Struct.UINT32CE)        // 0x0050: size of the volume in blocks
        .field('escSeq',        Struct.STR(32))         // 0x0058: (Supplementary Volume Descriptor only)
        .field('volSet',        Struct.UINT16CE)        // 0x0078: number of volumes in the volume set
        .field('volSeq',        Struct.UINT16CE)        // 0x007C: sequence number of this volume in the volume set
        .field('blockSize',     Struct.UINT16CE)        // 0x0080: logical block size in bytes, usually 2048 (0x0800)
        .field('lenPaths',      Struct.UINT32CE)        // 0x0084: size of the path table in bytes
        .field('lbaPaths',      Struct.UINT32LE)        // 0x008C: LBA location of the little-endian path table
        .field('.lbaOptPaths',  Struct.UINT32LE)        // 0x0090: LBA location of the optional little-endian path table
        .field('.lbaPathsBE',   Struct.UINT32BE)        // 0x0094: LBA location of the big-endian path table
        .field('.lbaOptPathsBE',Struct.UINT32BE)        // 0x0098: LBA location of the optional big-endian path table
        .field('rootDir',       ISO.DirRecord)          // 0x009C: root directory entry
        .field('volSetID',      Struct.STR(128))        // 0x00BE: volume set identifier
        .field('publisherID',   Struct.STR(128))        // 0x013E: publisher identifier
        .field('preparerID',    Struct.STR(128))        // 0x01BE: preparer identifier
        .field('appID',         Struct.STR(128))        // 0x023E: application identifier
        .field('copyright',     Struct.STR(37))         // 0x02BE: copyright file identifier
        .field('abstract',      Struct.STR(37))         // 0x02E3: abstract file identifier
        .field('bibliographic', Struct.STR(37))         // 0x0308: bibliographic file identifier
        .field('created',       Struct.ISODATETIME17)   // 0x032D: creation date of the volume
        .field('modified',      Struct.ISODATETIME17)   // 0x033E: modification date of the volume
        .field('expiration',    Struct.ISODATETIME17)   // 0x034F: expiration date of the volume
        .field('effective',     Struct.ISODATETIME17)   // 0x0360: effective date of the volume
        .field('fileStructure', Struct.BYTE)            // 0x0371
        .field('.unused4',      Struct.BYTE)            // 0x0372
        .field('appData',       Struct.BSS(512))        // 0x0373: reserved for future use
        .field('.unused5',      Struct.BSS(653))        // 0x0573-0x07FF
        .verifyLength(2048);

    static HSPrimaryDesc = new Struct("High Sierra Primary Volume Descriptor")
        .field('lbaVol',        Struct.UINT32CE)        // 0x0000: eg, 0x00000010
        .field('type',          Struct.BYTE)            // 0x0008: eg, 0x01
        .field('identifier',    Struct.STR(5))          // 0x0009: "CDROM"
        .field('version',       Struct.BYTE)            // 0x000E: eg, 0x01
        .field('.unused1',      Struct.BYTE)            // 0x000F
        .field('sysID',         Struct.STR(32))         // 0x0010
        .field('volID',         Struct.STR(32))         // 0x0030: eg, "PC_SIG_4_88"
        .field('.unused2',      Struct.BSS(8))          // 0x0050
        .field('volBlocks',     Struct.UINT32CE)        // 0x0058: size of the volume in blocks
        .field('.unused3',      Struct.BSS(32))         // 0x0060
        .field('volSet',        Struct.UINT16CE)        // 0x0080: number of volumes in the volume set
        .field('volSeq',        Struct.UINT16CE)        // 0x0084: sequence number of this volume in the volume set
        .field('blockSize',     Struct.UINT16CE)        // 0x0088: logical block size in bytes, usually 2048 (0x0800)
        .field('lenPaths',      Struct.UINT32CE)        // 0x008C: size of the path table in bytes
        .field('lbaPaths',      Struct.UINT32LE)        // 0x0094: LBA location of the little-endian path table
        .field('.lbaOptPath1',  Struct.UINT32LE)        // 0x0098: LBA location of the optional little-endian path table
        .field('.lbaOptPath2',  Struct.UINT32LE)        // 0x009C: LBA location of the optional little-endian path table
        .field('.lbaOptPath3',  Struct.UINT32LE)        // 0x00A0: LBA location of the optional little-endian path table
        .field('.lbaPathsBE',   Struct.UINT32BE)        // 0x00A4: LBA location of the big-endian path table
        .field('.lbaOptPath1BE',Struct.UINT32BE)        // 0x00A8: LBA location of the optional big-endian path table
        .field('.lbaOptPath2BE',Struct.UINT32BE)        // 0x00AC: LBA location of the optional big-endian path table
        .field('.lbaOptPath3BE',Struct.UINT32BE)        // 0x00B0: LBA location of the optional big-endian path table
        .field('rootDir',       ISO.HSDirRecord)        // 0x00B4: root directory entry
        .field('volSetID',      Struct.STR(128))        // 0x00D6: volume set identifier
        .field('publisherID',   Struct.STR(128))        // 0x0156: publisher identifier
        .field('preparerID',    Struct.STR(128))        // 0x01D6: preparer identifier
        .field('appID',         Struct.STR(128))        // 0x0256: application identifier
        .field('copyright',     Struct.STR(32))         // 0x02D6: copyright file identifier
        .field('abstract',      Struct.STR(32))         // 0x02F6: abstract file identifier
        .field('created',       Struct.ISODATETIME16)   // 0x0316: creation date of the volume
        .field('modified',      Struct.ISODATETIME16)   // 0x0326: modification date of the volume
        .field('expiration',    Struct.ISODATETIME16)   // 0x0336: expiration date of the volume
        .field('effective',     Struct.ISODATETIME16)   // 0x0346: effective date of the volume
        .field('fileStructure', Struct.BYTE)            // 0x0356: eg, 0x00
        .field('.unused4',      Struct.BYTE)            // 0x0357
        .field('appData',       Struct.BSS(512))        // 0x0358: reserved for future use
        .field('.unused5',      Struct.BSS(680))        // 0x0558-0x07FF
        .verifyLength(2048);

    static EXCEPTIONS = {
        HIGH_SIERRA:            0x00000001              // the image is High Sierra (not ISO 9660)
    };

    /**
     * constructor(interfaces)
     *
     * @this {ISO}
     * @param {Interfaces} [interfaces]
     * @param {InterfaceOptions} [interfaceOptions]
     */
    constructor(interfaces = {}, interfaceOptions = {})
    {
        this.interfaces = interfaces;
        this.printf = interfaces.printf || console.log.bind(console);
        //
        // Set default interface options.
        //
        this.cacheSize = interfaceOptions.cacheSize || 64 * 1024;
        this.encoding = (interfaceOptions.encoding || "cp437").toLowerCase();
    }

    /**
     * assert(condition, message)
     *
     * @param {boolean} condition
     * @param {string} [message]
     */
    static assert(condition, message = "Assertion failed")
    {
        if (ISO.DEBUG && !condition) {
            throw new Error(message);
        }
    }

    /**
     * open(name, db, options)
     *
     * If successful, this method returns an Image object used with our other high-level methods;
     * eg, readDirectory(), readFile(), and close().
     *
     * @this {ISO}
     * @param {string} name
     * @param {DataBuffer} [db]
     * @param {ImageOptions} [options]
     * @returns {Image}
     */
    async open(name, db = null, options = {})
    {
        let image = {
            name,                       // name of the image file
            source: "",
            modified: options.modified, // modification date of image file
            size: 0,                    // size of the image file
            file: null,                 // file handle, if any
            cache: {},                  // cache data
            paths: null,                // array of path records, if any
            records: null,              // array of directory records, if any
            primary: null,              // primary volume descriptor, if any
            exceptions: 0,              // see ISO.EXCEPTIONS.*
            warnings: []                // array of image warnings, if any
        };
        //
        // If a DataBuffer (db) is provided, then no reading is required; we also provide
        // the option of reading the entire image into a DataBuffer.  However, the preferred
        // approach is to read structures from the file as needed into the image's cache buffer.
        //
        if (db) {
            image.size = db.length;
            this.initCache(image, db, image.size);
            image.source = "Buffer";
        }
        else if (this.interfaces.open && !name.match(/^https?:\/\//i)) {
            image.file = await this.interfaces.open(name, "r");
            if (!image.file) {
                throw new Error(`Unable to open ${name}`);
            }
            const stats = await image.file.stat();
            image.size = stats.size;
            //
            // If the caller supplied a modification date for the image, then we stick with that,
            // because the caller may have extracted the image from another image that preserved
            // the original date.  Otherwise, we use the modification date provided by the file system.
            //
            if (!image.modified) {
                image.modified = stats.mtime;
            }
            this.initCache(image, new DataBuffer(Math.min(this.cacheSize, image.size)));
            if (options.prefill) {
                let db = new DataBuffer(0);
                let cache = image.cache;
                do {
                    let result = await image.file.read(cache.db.buffer);
                    if (result.bytesRead == 0) break;
                    if (result.bytesRead < cache.db.length) {
                        cache.db = cache.db.slice(0, result.bytesRead);
                    }
                    db = DataBuffer.concat([db, cache.db]);
                    if (result.bytesRead < cache.db.length) break;
                } while (true);
                //
                // We're not really done with the image yet, but we ARE done with the file handle
                // (and by extension, the old cache buffer).  The new buffer becomes the cache buffer.
                //
                await this.close(image);
                ISO.assert(image.size == db.length);
                this.initCache(image, new DataBuffer(db), image.size);
            }
            image.source = "FS";
        }
        else if (this.interfaces.fetch) {
            //
            // For remote files, prefill is the default.
            //
            // TODO: Consider honoring prefill === false, provided we can obtain
            // Content-Length from the server and it supports byte range requests.
            //
            let response = await this.interfaces.fetch(name);
            if (!response.ok) {
                throw new Error(`Unable to fetch ${name} (${response.statusText})`);
            }
            let arrayBuffer = await response.arrayBuffer();
            image.size = arrayBuffer.byteLength;
            this.initCache(image, new DataBuffer(new Uint8Array(arrayBuffer)), image.size);
            image.source = "Network";
        }
        else {
            throw new Error("No image open interface available");
        }
        image.dirClass = ISO.DirRecord;
        image.pathClass = ISO.PathRecordLE;
        let position = ISO.SYSTEM_SIZE, extent = ISO.BLOCK_SIZE;
        do {
            let [offset, length] = await this.readCache(image, position, extent);
            //
            // We're going to probe for a High Sierra Primary Volume Descriptor first...
            //
            if (image.cache.db.readUInt32BE(offset + 8) == 0x01434452) {
                image.primary = ISO.HSPrimaryDesc.readStruct(image.cache.db, offset);
                image.dirClass = ISO.HSDirRecord;
                image.pathClass = ISO.HSPathRecordLE;
                image.exceptions |= ISO.EXCEPTIONS.HIGH_SIERRA;
                break;
            }
            let type = image.cache.db.readUInt8(offset);
            if (type == ISO.PrimaryDesc.fields.type.END) {
                break;
            }
            if (type == ISO.PrimaryDesc.fields.type.PRIMARY && !image.primary || type == ISO.PrimaryDesc.fields.type.SUPP && !options.compat) {
                image.primary = ISO.PrimaryDesc.readStruct(image.cache.db, offset);
                if (image.primary.type == ISO.PrimaryDesc.fields.type.SUPP) {
                    if (image.primary.escSeq == "%/@" || image.primary.escSeq == "%/C" || image.primary.escSeq == "%/E") {
                        //
                        // TODO: Make a note of the escape sequence's implied level (1, 2, or 3) and how
                        // that affects our interpretation of character data.  For now, all we do is switch
                        // to structure definitions that assume UCS2BE (UCS-2 BE) instead of STRLEN (ASCII).
                        //
                        // For reference: https://pismotec.com/cfs/jolspec.html
                        //
                        image.dirClass = ISO.DirRecord2;
                        image.pathClass = ISO.PathRecordLE2;
                    }
                }
                extent = image.primary.blockSize;
            }
            position += extent;
        } while (position < image.size);
        image.lbaMax = Math.floor(image.size / (image.primary && image.primary.blockSize || ISO.BLOCK_SIZE));
        return image;
    }

    /**
     * close(image)
     *
     * @this {ISO}
     * @param {Image} image
     */
    async close(image)
    {
        if (image.file) {
            await image.file.close();
            image.file = null;
        }
        this.initCache(image);
    }

    /**
     * initCache(image, db, length)
     *
     * @this {ISO}
     * @param {Image} image
     * @param {DataBuffer} [db]
     * @param {number} [length]
     */
    initCache(image, db = null, length = 0)
    {
        image.cache.db = db;
        image.cache.position = 0;       // position within the image of the data in the cache buffer
        image.cache.extent = length;    // amount of valid data in the cache buffer (always <= db.length)
    }

    /**
     * readImage(image, position, extent)
     *
     * NOTE: When reading from a file, this function deliberately bypasses the cache,
     * on the assumption that we're reading unstructured chunks of data which don't need
     * to be cached and/or could exceed the size of our cache buffer.
     *
     * The cache is only intended for reading well-defined data structures from the image.
     *
     * @this {ISO}
     * @param {Image} image
     * @param {number} position
     * @param {number} extent
     * @returns {DataBuffer}
     */
    async readImage(image, position, extent)
    {
        let db;
        if (!image.file) {
            db = image.cache.db.slice(position, position + extent);
        } else {
            db = new DataBuffer(extent);
            let result = await image.file.read(db.buffer, 0, extent, position);
            if (result.bytesRead < extent) {
                db = db.slice(0, result.bytesRead);
            }
        }
        return db;
    }

    /**
     * readCache(image, position, extent)
     *
     * Given a position and extent within the image, and given the image's cache
     * buffer, moves any existing data in the cache buffer as appropriate, and then reads
     * any remaining requested data into the cache buffer, returning the offset and length
     * of the requested data.
     *
     * In general, the returned length will be the same as the requested extent, except
     * when the request extends beyond the size of the image or is larger than the current
     * cache size.
     *
     * NOTE: I deliberately chose the terminology "position" and "extent" when referring to
     * file locations, and "offset" and "length" when referring to buffer locations, in
     * order to minimize the risk of confusion between the two.
     *
     * @this {ISO}
     * @param {Image} image
     * @param {number} position
     * @param {number} extent
     * @returns {[number, number]} ([offset, length] of requested data)
     */
    async readCache(image, position, extent)
    {
        ISO.assert(position >= 0 && extent >= 0);
        if (position > image.size) {
            throw new Error(`Position ${position} exceeds limit (${image.size})`);
        }
        if (position + extent > image.size) {
            extent = image.size - position;
        }
        let cache = image.cache;
        let maxExtent = cache.db.length;
        if (extent > maxExtent) {
            extent = maxExtent;
        }
        if (position + maxExtent > image.size) {
            maxExtent = image.size - position;
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
                ISO.assert(image.file);
                if (image.file) {
                    let result = await image.file.read(cache.db.buffer, readOffset, readExtent, readPosition);
                    if (result.bytesRead != readExtent) {
                        throw new Error(`Received ${result.bytesRead} bytes, expected ${readExtent} at ${readPosition}`);
                    }
                } else {
                    //
                    // As asserted above, this is an internal inconsistency, because images without handles
                    // should be fully cached (so, technically, you should never see this error).
                    //
                    throw new Error(`${image.name}: No file handle available`);
                }
            }
            cache.position = position;
            cache.extent = maxExtent;
        }
        let offset = position - cache.position;
        return [offset, extent];
    }

    /**
     * readDirectory(image, filespec)
     *
     * This function always returns a new list of image entries, based on any filtering that may
     * have been requested.
     *
     * @this {ISO}
     * @param {Image} image
     * @param {string} [filespec]
     * @returns {Array}
     */
    async readDirectory(image, filespec = "*")
    {
        let entries = [];
        if (image.primary) {
            if (!image.paths) {
                image.paths = await this.readPathRecords(image, image.primary.lbaPaths, image.primary.lenPaths);
            }
            if (!image.records) {
                image.records = await this.readDirRecords(image, image.primary.rootDir.lba + image.primary.rootDir.cbAttr, image.primary.rootDir.size);
            }
            for (let index = 0; index < image.records.length; index++) {
                let record = image.records[index];
                let name = record.name;
                if (filespec && filespec != "*") {
                    let re = new RegExp(filespec.replace(/\./g, "\\.").replace(/\*/g, ".*"));
                    if (!name.match(re)) continue;
                }
                let attr = 0;
                if (record.flags & image.dirClass.fields.flags.DIRECTORY) {
                    attr |= 0x10;
                }
                entries.push({
                    index,
                    name,
                    attr,
                    modified: record.dateTime,
                    size: record.size,
                    compressedSize: record.size,
                    flags: 0,
                    method: 0,
                    crc: 0,
                    warnings: []
                });
            }
        }
        return entries;
    }

    /**
     * readDirRecords(image, lba, size, subdir)
     *
     * NOTE: In my extremely limited experience with ISO 9660 images, the size of a directory
     * (in bytes) is always the total number of blocks multiplied by the block size, so it
     * encompasses all padding in all the blocks, including any unused space in the last block.
     *
     * @this {ISO}
     * @param {Image} image
     * @param {number} lba
     * @param {number} size (of all the directory blocks, in bytes)
     * @param {string} [subdir]
     * @returns {Array}
     */
    async readDirRecords(image, lba, size, subdir = "")
    {
        let records = [], subrecs = [];
        let position = lba * image.primary.blockSize;
        let positionEnd = position + size;
        ISO.assert(positionEnd <= image.size);
        try {
            do {
                //
                // To make sure we always get the full directory record, adjust the size of our request
                // to the amount of data remaining in the current block.  That may be larger than the largest
                // allowed directory record, but that's okay; we're simply caching data we can use later.
                //
                let extent = image.primary.blockSize - (position % image.primary.blockSize);
                //
                // If that extent is smaller than the minimum size of a directory record, we know we should
                // advance to the next block first.  Alternatively, we could proceed with the read and assume
                // we will get a zero-length record, but that would waste time AND risk calling readStruct()
                // with insufficient data (which would be our fault, not the CD-ROM's).
                //
                if (extent < image.dirClass.length) {
                    position = Math.ceil(position / image.primary.blockSize) * image.primary.blockSize;
                    continue;
                }
                let [offset, length] = await this.readCache(image, position, extent);
                ISO.assert(length >= image.dirClass.length);
                let record = image.dirClass.readStruct(image.cache.db, offset);
                //
                // Directory records are not allowed to span block boundaries, and any padding between records
                // is supposed to be zeroed, so if we encounter a zero-length record, then we round the position
                // up to the next block boundary and try again.
                //
                if (!record.length) {
                    position = Math.ceil(position / image.primary.blockSize) * image.primary.blockSize;
                    continue;
                }
                if (ISO.DEBUG) record.position = position.toString(16);
                position += record.length;
                ISO.assert(record.name && length >= record.length);
                if (record.name == ".") {           // skip the first directory record, which should always be "."
                    ISO.assert(record.lba + record.cbAttr == lba);
                    continue;
                }
                if (record.name == "..") {          // skip the second directory record, which should always be ".."
                    ISO.assert(record.lenName == 1);
                    continue;
                }
                if (record.lba + record.cbAttr >= image.lbaMax) {
                    throw new Error(`Invalid record in directory "${subdir}" at position ${position}`);
                }
                //
                // Massage the name by prepending any subdir and stripping any "version" suffix (eg, ";1").
                //
                record.name = (subdir? subdir + "/" : "") + record.name.replace(/;[0-9]+$/, "");
                records.push(record);
            } while (position < positionEnd);
            for (let record of records) {
                if (record.flags & image.dirClass.fields.flags.DIRECTORY) {
                    let recs = await this.readDirRecords(image, record.lba + record.cbAttr, record.size, record.name);
                    subrecs.push(recs);
                }
            }
        } catch (error) {
            if (subdir) {
                throw error;
            }
            image.warnings.push(error.message);
        }
        return records.concat(...subrecs);
    }

    /**
     * readPathRecords(image, lba, size)
     *
     * @this {ISO}
     * @param {Image} image
     * @param {number} lba
     * @param {number} size (of the path table, in bytes)
     * @returns {Array}
     */
    async readPathRecords(image, lba, size)
    {
        let index = 0;
        let paths = [];
        let position = lba * image.primary.blockSize;
        let positionEnd = position + size;
        try {
            do {
                let [offset, length] = await this.readCache(image, position, ISO.PATHREC_SIZE);
                let record = image.pathClass.readStruct(image.cache.db, offset);
                if (!record.lenName) break;         // if we've hit zero-padding, presumably that's the end
                if (ISO.DEBUG) record.position = position.toString(16);
                position += image.pathClass.length + record.lenName + (record.lenName & 0x1);
                if (++index == record.indexParent) {
                    continue;                       // if the entry is its own parent (ie, the root), skip it
                }
                ISO.assert(record.name);
                if (record.lba + record.cbAttr >= image.lbaMax) {
                    throw new Error(`Invalid path record at position ${position}`);
                }
                paths.push(record);
            } while (position < positionEnd);
        } catch (error) {
            image.warnings.push(error.message);
        }
        return paths;
    }

    /**
     * readFile(image, index, writeData)
     *
     * @this {ISO}
     * @param {Image} image
     * @param {number} index
     * @param {function} [writeData]
     * @returns {DataBuffer|undefined}
     */
    async readFile(image, index, writeData)
    {
        let record = image.records && image.records[index];
        if (!record || (record.flags & image.dirClass.fields.flags.DIRECTORY)) {
            throw new Error(`No file entry at index ${index}`);
        }
        let db = await this.readImage(image, (record.lba + record.cbAttr) * image.primary.blockSize, record.size);
        if (writeData) {
            await writeData(db);
            await writeData();
        }
        return db;
    }
}
