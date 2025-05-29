/**
 * @fileoverview ISO Extraction Library
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
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
    static DIRREC_SIZE = 255;           // maximum size of a directory record

    static VolDesc = new Struct("Volume Descriptor")
        .field('type',          Struct.BYTE, {
            BOOT:       0x00,
            PRIMARY:    0x01,                           // Primary Volume Descriptor
            SUPP:       0x02,                           // Supplementary Volume Descriptor
            PARTITION:  0x03,                           // Volume Partition Descriptor
            END:        0xFF                            // End of Volume Descriptor
        })
        .field('identifier',    Struct.STR(5))          // "CD001"
        .field('version',       Struct.BYTE)            // version of the ISO 9660 standard (eg, 0x01)
        .field('data',          Struct.BSS(2041))
        .verifyLength(2048);

    static DirRecord = new Struct("Directory Record")
        .field('length',        Struct.BYTE)            // 0x00: length of this record in bytes
        .field('lenAttr',       Struct.BYTE)            // 0x01: extended attribute record length
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
        .field('name',          Struct.STRLEN)          // 0x21: name of file or directory
        .verifyLength(34);

    static HSDirRecord = new Struct("High Sierra Directory Record")
        .field('length',        Struct.BYTE)            // 0x00: length of this record in bytes
        .field('lenAttr',       Struct.BYTE)            // 0x01: extended attribute record length
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
        .field('name',          Struct.STRLEN)          // 0x21: name of file or directory
        .verifyLength(34);

    //
    // NOTE: This is the little-endian version of the Path Record (the only version we care about)
    //
    static PathRecord = new Struct("Path Record")
        .field('lenName',       Struct.BYTE)            // 0x00: length of name
        .field('lenAttr',       Struct.BYTE)            // 0x01: extended attribute record length
        .field('lba',           Struct.UINT32LE)        // 0x02: logical block address of directory
        .field('indexParent',   Struct.UINT16LE)        // 0x06: directory number of parent directory
        .field('name',          Struct.STRLEN8)         // 0x08: name of directory
        .verifyLength(8);

    //
    // NOTE: Field names beginning with a dot (.) are ignored by readStruct(), which means
    // those fields will not be read and therefore will not be present in any returned structures.
    //
    static PrimaryDesc = new Struct("Primary Volume Descriptor")
        .field('type',          Struct.BYTE)
        .field('identifier',    Struct.STR(5))          // "CD001"
        .field('version',       Struct.BYTE)            // version of the ISO 9660 standard
        .field('.unused1',      Struct.BYTE)
        .field('sysID',         Struct.STR(32))
        .field('volID',         Struct.STR(32))
        .field('.unused2',      Struct.BSS(8))
        .field('volBlocks',     Struct.UINT32CE)        // size of the volume in 2048-byte sectors
        .field('.unused3',      Struct.BSS(32))
        .field('volSet',        Struct.UINT16CE)        // number of volumes in the volume set
        .field('volSeq',        Struct.UINT16CE)        // sequence number of this volume in the volume set
        .field('blockSize',     Struct.UINT16CE)        // logical block size in bytes (usually 2048)
        .field('lenPaths',      Struct.UINT32CE)        // size of the path table in bytes
        .field('lbaPaths',      Struct.UINT32LE)        // LBA location of the little-endian path table
        .field('.lbaOptPaths',  Struct.UINT32LE)        // LBA location of the optional little-endian path table
        .field('.lbaPathsBE',   Struct.UINT32BE)        // LBA location of the big-endian path table
        .field('.lbaOptPathsBE',Struct.UINT32BE)        // LBA location of the optional big-endian path table
        .field('rootDir',       ISO.DirRecord)          // root directory entry
        .field('volSetID',      Struct.STR(128))        // volume set identifier
        .field('publisherID',   Struct.STR(128))        // publisher identifier
        .field('preparerID',    Struct.STR(128))        // preparer identifier
        .field('appID',         Struct.STR(128))        // application identifier
        .field('copyright',     Struct.STR(37))         // copyright file identifier
        .field('abstract',      Struct.STR(37))         // abstract file identifier
        .field('bibliographic', Struct.STR(37))         // bibliographic file identifier
        .field('created',       Struct.ISODATETIME17)   // creation date of the volume
        .field('modified',      Struct.ISODATETIME17)   // modification date of the volume
        .field('expiration',    Struct.ISODATETIME17)   // expiration date of the volume
        .field('effective',     Struct.ISODATETIME17)   // effective date of the volume
        .field('fileStructure', Struct.BYTE)
        .field('.unused4',      Struct.BYTE)
        .field('appData',       Struct.BSS(512))        // reserved for future use
        .field('.unused5',      Struct.BSS(653))        // reserved for future use
        .verifyLength(2048);

    //
    // High Sierra Primary Volume Descriptor
    //
    static HSPrimaryDesc = new Struct("High Sierra Primary Volume Descriptor")
        .field('lbaVol',        Struct.UINT32CE)        // 0x0000: eg, 0x00000010
        .field('type',          Struct.BYTE)            // 0x0008: eg, 0x01
        .field('identifier',    Struct.STR(5))          // 0x0009: "CDROM"
        .field('version',       Struct.BYTE)            // 0x000E: eg, 0x01
        .field('.unused1',      Struct.BYTE)            // 0x000F
        .field('sysID',         Struct.STR(32))         // 0x0010
        .field('volID',         Struct.STR(32))         // 0x0030: eg, "PC_SIG_4_88"
        .field('.unused2',      Struct.BSS(8))          // 0x0050
        .field('volBlocks',     Struct.UINT32CE)        // 0x0058: size of the volume in 2048-byte sectors
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
        .field('.unused5',      Struct.BSS(680))        // 0x0558: reserved for future use
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
            primary: {},                // primary volume descriptor, if any
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
        let position = ISO.SYSTEM_SIZE, extent = ISO.BLOCK_SIZE;
        do {
            let [offset, length] = await this.readCache(image, position, extent);
            //
            // We're going to probe for a High Sierra Primary Volume Descriptor first...
            //
            if (image.cache.db.readUInt32BE(offset + 8) == 0x01434452) {
                image.primary = ISO.HSPrimaryDesc.readStruct(image.cache.db, offset);
                image.dirClass = ISO.HSDirRecord;
                image.exceptions |= ISO.EXCEPTIONS.HIGH_SIERRA;
                break;
            }
            let type = image.cache.db.readUInt8(offset);
            if (type == ISO.VolDesc.fields.type.END) {
                break;
            }
            if (type == ISO.VolDesc.fields.type.PRIMARY) {
                image.primary = ISO.PrimaryDesc.readStruct(image.cache.db, offset);
                extent = image.primary.blockSize;
            }
            position += extent;
        } while (position < image.size);
        image.lbaMax = Math.floor(image.size / (image.primary.blockSize || ISO.BLOCK_SIZE));
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
        if (!image.paths) {
            image.paths = await this.readPathRecords(image, image.primary.lbaPaths);
        }
        if (!image.records) {
            image.records = await this.readDirRecords(image, image.primary.rootDir.lba);
        }
        for (let index = 0; index < image.records.length; index++) {
            let record = image.records[index];
            let name = record.name;
            if (filespec && filespec != "*") {
                let re = new RegExp(filespec.replace(/\./g, "\\.").replace(/\*/g, ".*"));
                if (!name.match(re)) continue;
            }
            let attr = 0;
            if (record.flags & ISO.DirRecord.fields.flags.DIRECTORY) {
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
        return entries;
    }

    /**
     * readDirRecords(image, lba, subdir)
     *
     * @this {ISO}
     * @param {Image} image
     * @param {number} lba
     * @param {string} [subdir]
     * @returns {Array}
     */
    async readDirRecords(image, lba, subdir = "")
    {
        let records = [], subrecs = [];
        let position = lba * image.primary.blockSize;
        try {
            do {
                let [offset, length] = await this.readCache(image, position, ISO.DIRREC_SIZE);
                let record = image.dirClass.readStruct(image.cache.db, offset);
                if (!record.length) break;          // end-of-directory record
                if (ISO.DEBUG) record.position = position.toString(16);
                position += record.length;
                ISO.assert(record.name);
                if (record.name == ".") {           // skip the first directory record, which should always be "."
                    ISO.assert(record.lba == lba);
                    continue;
                }
                if (record.name == "..") {          // skip the second directory record, which should always be ".."
                    ISO.assert(record.lenName == 1);
                    continue;
                }
                if (record.lba >= image.lbaMax) {
                    throw new Error(`Invalid record in directory "${subdir}" at position ${position}`);
                }
                //
                // Massage the name by prepending any subdir and stripping any "version" suffix (eg, ";1").
                //
                record.name = (subdir? subdir + "/" : "") + record.name.replace(/;[0-9]+$/, "");
                records.push(record);
            } while (position < image.size);
            for (let record of records) {
                if (record.flags & ISO.DirRecord.fields.flags.DIRECTORY) {
                    let recs = await this.readDirRecords(image, record.lba, record.name);
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
     * readPathRecords(image, lba)
     *
     * @this {ISO}
     * @param {Image} image
     * @param {number} lba
     * @returns {Array}
     */
    async readPathRecords(image, lba)
    {
        let index = 0;
        let paths = [];
        let position = lba * image.primary.blockSize;
        let positionEnd = position + image.primary.lenPaths;
        try {
            do {
                let [offset, length] = await this.readCache(image, position, ISO.PATHREC_SIZE);
                let record = ISO.PathRecord.readStruct(image.cache.db, offset);
                if (!record.lenName) break;         // end-of-path-table record?
                if (ISO.DEBUG) record.position = position.toString(16);
                position += ISO.PathRecord.length + record.lenName + (record.lenName & 0x1);
                if (++index == record.indexParent) {
                    continue;                       // if the entry is its own parent (ie, the root), skip it
                }
                if (record.lba >= image.lbaMax) {
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
        let record = image.records[index];
        if (!record || (record.flags & ISO.DirRecord.fields.flags.DIRECTORY)) {
            throw new Error(`No file entry at index ${index}`);
        }
        let db = await this.readImage(image, record.lba * image.primary.blockSize, record.size);
        if (writeData) {
            await writeData(db);
            await writeData();
        }
        return db;
    }
}
