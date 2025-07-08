/**
 * @fileoverview ISO 9660 Extraction Library
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * Items of interest...
 *
 * 1) I was intrigued by this blog post (https://multimedia.cx/eggs/iso-9660-compromise-part-2-finding-root),
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
 *
 * 2) 350GamesWindows31.iso isn't really an ISO 9660 image; it's a dump of all the 2352-byte sectors of the
 * the original disc.  In addition, all the sectors appear to have a 24-byte header rather than the usual
 * 16-byte header.  Apparently, this means that the disc was a CD-ROM XA disc, which has an additional 8-byte
 * sub-header.
 *
 * So we now have two reading modes: if sectorSize matches ISO.BLOCK_SIZE, then readImage() continues to read
 * data directly from the image file or buffer; otherwise, it maps the requested position to the corresponding
 * physical sector and breaks the read operation into the appropriate number of full and partial sector reads.
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
 *
 * @typedef  {object}   InterfaceOptions
 * @property {number}   cacheSize   (size of cache buffer, if needed; default is 64K)
 * @property {string}   encoding    (encoding to use for strings in image; default is "cp437")
 * @property {boolean}  debug       (if true, enable additional checks/warnings)
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
 * @property {boolean}  preload     (if true, read the entire image into memory on open)
 * @property {boolean}  compat      (if true, ignore any supplementary (eg, Joliet) volume descriptor
 * @property {boolean}  nodir       (if true, read directory structure using path table instead of directory records)
 * @property {boolean}  agnostic    (if true, open() will not fail if the image is unrecognized)
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
 * @property {boolean} debug (if true, enable additional checks/warnings; default is false)
 */
export default class ISO {

    /**
     * Public class fields
     */
    static BLOCK_SIZE = 2048;           // default block size
    static SECTOR_SIZE = 2352;          // default sector size
    static SYSTEM_SIZE = 32768;         // size of system area
    static PATHREC_SIZE = 255;          // maximum size of a path record
    static MAX_SIZE = 2448 * 333000;

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

    static HSPathRecordLE = new Struct("High Sierra Path Record (LE)")
        .field('lba',           Struct.UINT32LE)        // 0x00: logical block address of directory
        .field('cbAttr',        Struct.BYTE)            // 0x04: extended attribute record length (in blocks)
        .field('lenName',       Struct.BYTE)            // 0x05: length of name
        .field('indexParent',   Struct.UINT16LE)        // 0x06: directory number of parent directory
        .field('name',          Struct.STRLEN3)         // 0x08: name of directory (in ASCII)
        .verifyLength(8);

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

    static SuppDesc = new Struct("Supplementary Volume Descriptor")
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
        .field('sysID',         Struct.UCS2(32))        // 0x0008
        .field('volID',         Struct.UCS2(32))        // 0x0028: volume identifier
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
        .field('volSetID',      Struct.UCS2(128))       // 0x00BE: volume set identifier
        .field('publisherID',   Struct.UCS2(128))       // 0x013E: publisher identifier
        .field('preparerID',    Struct.UCS2(128))       // 0x01BE: preparer identifier
        .field('appID',         Struct.UCS2(128))       // 0x023E: application identifier
        .field('copyright',     Struct.UCS2(37))        // 0x02BE: copyright file identifier
        .field('abstract',      Struct.UCS2(37))        // 0x02E3: abstract file identifier
        .field('bibliographic', Struct.UCS2(37))        // 0x0308: bibliographic file identifier
        .field('created',       Struct.ISODATETIME17)   // 0x032D: creation date of the volume
        .field('modified',      Struct.ISODATETIME17)   // 0x033E: modification date of the volume
        .field('expiration',    Struct.ISODATETIME17)   // 0x034F: expiration date of the volume
        .field('effective',     Struct.ISODATETIME17)   // 0x0360: effective date of the volume
        .field('fileStructure', Struct.BYTE)            // 0x0371
        .field('.unused4',      Struct.BYTE)            // 0x0372
        .field('appData',       Struct.BSS(512))        // 0x0373: reserved for future use
        .field('.unused5',      Struct.BSS(653))        // 0x0573-0x07FF
        .verifyLength(2048);

    static EXCEPTIONS = {
        HIGH_SIERRA:            0x00000001              // the image is High Sierra (not ISO 9660)
    };

    /**
     * constructor(interfaces, interfaceOptions)
     *
     * @this {ISO}
     * @param {Interfaces} [interfaces]
     * @param {InterfaceOptions} [interfaceOptions]
     */
    constructor(interfaces = {}, interfaceOptions = {})
    {
        this.interfaces = interfaces;
        //
        // Set default interface options.
        //
        this.cacheSize = interfaceOptions.cacheSize || 64 * 1024;
        this.encoding = (interfaceOptions.encoding || "cp437").toLowerCase();
        this.debug = (interfaceOptions.debug || false);
        if (this.debug) {
            ISO.DirRecord.enableWarnings();
            ISO.DirRecord2.enableWarnings();
            ISO.HSDirRecord.enableWarnings();
            ISO.HSPrimaryDesc.enableWarnings();
            ISO.PrimaryDesc.enableWarnings();
            ISO.SuppDesc.enableWarnings();
        }
    }

    /**
     * assert(condition, message)
     *
     * @this {ISO}
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
     * check(image, condition, message)
     *
     * @this {ISO}
     * @param {Image} image
     * @param {boolean} condition
     * @param {string} [message]
     * @returns {boolean}
     */
    check(image, condition, message = "Check failed")
    {
        if (!condition) {
            image.warnings.push(message);
            return false;
        }
        return true;
    }

    /**
     * open(name, db, options)
     *
     * If successful, this method returns an Image object used with our other high-level methods;
     * eg, readDirectory(), readFile(), and close().
     *
     * Also, unlike the other classes in this library (eg, DZip), preloaded images are maintained
     * in an image DataBuffer that is separate from the cache DataBuffer.  Separate buffers are required
     * if the image turns out to be a rip of raw (2352-byte) sectors, so that we can easily transform
     * logical sector requests into physical sector requests.
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
            modified: null,             // modification date of image file
            size: 0,                    // size of the image file
            db: null,                   // DataBuffer, if any
            file: null,                 // file handle, if any
            cache: {},                  // cache data
            paths: null,                // array of path records, if any
            records: null,              // array of directory records, if any
            primary: null,              // primary volume descriptor, if any
            exceptions: 0,              // see ISO.EXCEPTIONS.*
            warnings: []                // array of image warnings, if any
        };
        image.modified = options.modified;
        try {
            //
            // If a DataBuffer (db) is provided, then no reading is required.
            //
            if (db) {
                image.db = db;
                image.size = db.length;
                image.source = "Buffer";
            }
            else if (this.interfaces.open && !name.match(/^https?:\/\//i)) {
                image.file = await this.interfaces.open(name, "r");
                if (!image.file) {
                    throw new Error(`Unable to open ${name}`);
                }
                const stats = await image.file.stat();
                image.size = stats.size;
                if (!image.modified) {
                    image.modified = stats.mtime;
                }
                if (options.preload && image.size <= ISO.MAX_SIZE) {
                    image.db = new DataBuffer(image.size);
                    let offset = 0, position = 0;
                    let extent = Math.min(this.cacheSize, image.size);
                    do {
                        let result = await image.file.read(image.db, offset, extent, position);
                        if (result.bytesRead < extent) break;
                        offset += result.bytesRead;
                        position += result.bytesRead;
                    } while (true);
                    await this.close(image);
                }
                image.source = "FS";
            }
            else if (this.interfaces.fetch) {
                image.size = NaN;
                if (!options.preload) {
                    let response = await this.interfaces.fetch(name, { method: "HEAD" });
                    if (response.ok) {
                        let contentLength = response.headers.get("Content-Length");
                        if (contentLength) {
                            let acceptsRanges = response.headers.get("Accept-Ranges");
                            if (acceptsRanges && acceptsRanges.toLowerCase() == "bytes") {
                                image.size = +contentLength;
                            }
                        }
                    }
                }
                if (isNaN(image.size)) {
                    //
                    // We apparently have no choice but to read the entire image into memory.
                    //
                    let response = await this.interfaces.fetch(name);
                    if (!response.ok) {
                        throw new Error(`Unable to fetch ${name}: ${response.status} ${response.statusText}`);
                    }
                    image.db = new DataBuffer(await response.arrayBuffer());
                    image.size = image.db.length;
                }
                image.source = "Network";
            }
            else {
                throw new Error("No image open interface available");
            }
            if (image.size > ISO.MAX_SIZE) {
                throw new Error(`Unrecognized CD-ROM image (${image.size})`);
            }
            this.initCache(image, new DataBuffer(Math.min(this.cacheSize, image.size)));
            image.dirClass = ISO.DirRecord;
            image.pathClass = ISO.PathRecordLE;
            image.sectorSize = ISO.BLOCK_SIZE;
            image.sectorOffset = 0;
            //
            // I am piggy-backing on the --nodir option, which was originally intended for bypassing
            // directory records in ZIP files.  Here, it affects how we read ISO directory structure.
            //
            // By default, we perform a recursive read of all the directories and ignore the path table,
            // unless --nodir (-n) is set.  The exception is when we only have network access, in which
            // case we DO use the path table.  However, if --nodir (-n) is set, that default is inverted.
            //
            // Note that the path table preference originally relied on the assumption that path records
            // list the directories in LBA order, and that directories tend to be stored together, all of
            // which allows our cache to function better.  Whether or not the latter is generally true
            // remains to be seen, but as far as the order of the path table records, readDirectory() now
            // creates an LBA index, so even if records aren't ordered by LBA, that's how we read them.
            //
            image.nodir = (!image.db && !image.file);
            if (options.nodir) {
                image.nodir = !image.nodir;
            }
            let position = ISO.SYSTEM_SIZE, extent = ISO.BLOCK_SIZE;
            do {
                let desc;
                let [offset, length] = await this.readCache(image, position, extent);
                if (length < ISO.HSPrimaryDesc.length) {
                    break;
                }
                desc = ISO.HSPrimaryDesc.readStruct(image.cache.db, offset);
                if (desc.identifier == "CDROM" && desc.type == 0x01) {
                    image.primary = desc;
                    image.dirClass = ISO.HSDirRecord;
                    image.pathClass = ISO.HSPathRecordLE;
                    image.exceptions |= ISO.EXCEPTIONS.HIGH_SIERRA;
                    break;
                }
                desc = ISO.PrimaryDesc.readStruct(image.cache.db, offset);
                if (desc.identifier != "CD001") {
                    if (image.sectorSize == ISO.BLOCK_SIZE) {
                        image.sectorSize = ISO.SECTOR_SIZE;
                        image.sectorOffset = 16;    // 16-byte sector header
                        image.cache.extent = 0;     // cache must be invalidated when changing sector format
                        continue;
                    }
                    if (image.sectorSize == ISO.SECTOR_SIZE && image.sectorOffset == 16) {
                        image.sectorOffset += 8;    // allow for an 8-byte sub-header as well
                        image.cache.extent = 0;     // cache must be invalidated when changing sector format
                        continue;
                    }
                    //
                    // All the .mdf files I've examined (eg, 1999-09_X05-01280_X04-96696_Bork4.5Intla/image/X04-96696.mdf)
                    // so far have a sector size of 2448 bytes (2352 + 96 bytes for sub-channel data).  I'm guessing that no
                    // sub-channel data was actually present on the original CDs, and that perhaps the associated .mds file
                    // could tell us more about it, but I'll worry about that later (if at all).
                    //
                    if (image.sectorSize == ISO.SECTOR_SIZE && image.sectorOffset == 24) {
                        image.sectorSize = 2448;
                        image.sectorOffset = 16;    // revert to 16-byte sector header
                        image.cache.extent = 0;     // cache must be invalidated when changing sector format
                        continue;
                    }
                    break;
                }
                if (desc.type == ISO.PrimaryDesc.fields.type.END) {
                    break;
                }
                if (desc.type == ISO.PrimaryDesc.fields.type.PRIMARY && !image.primary || desc.type == ISO.PrimaryDesc.fields.type.SUPP && !options.compat) {
                    if (desc.type == ISO.PrimaryDesc.fields.type.PRIMARY) {
                        image.primary = desc;
                    }
                    else {
                        image.primary = ISO.SuppDesc.readStruct(image.cache.db, offset);
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
                    this.assert(image.primary.blockSize > 0 && ((image.primary.blockSize - 1) & image.primary.blockSize) === 0, `Block size ${image.primary.blockSize} is not a power of 2`);
                    extent = image.primary.blockSize || ISO.BLOCK_SIZE;
                }
                position += extent;
            } while (position < image.size);
            if (!image.primary || !image.primary.blockSize || ((image.primary.blockSize - 1) & image.primary.blockSize) !== 0) {
                if (!options.agnostic) {
                    throw new Error("Unrecognized CD-ROM image");
                }
            }
        } catch (error) {
            await this.close(image);
            throw error;
        }
        image.lbaMax = Math.floor(image.size / (image.primary?.blockSize || ISO.BLOCK_SIZE));
        image.modified = image.primary?.created || image.modified;
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
     * readBytes(image, position, extent, db, offset)
     *
     * Read bytes from the image at the specified physical position.
     *
     * @param {Image} image
     * @param {number} position
     * @param {number} extent
     * @param {DataBuffer} db
     * @param {number} offset
     * @returns {number} [bytesRead]
     */
    async readBytes(image, position, extent, db, offset)
    {
        let bytesRead = 0;
        if (image.db) {
            if (position < image.db.length) {
                if (position + extent > image.db.length) {
                    extent = image.db.length - position;
                }
                image.db.copy(db, offset, position, position + extent);
                bytesRead = extent;
            }
        } else if (image.file) {
            let result = await image.file.read(db.buffer, offset, extent, position);
            bytesRead = result.bytesRead;
        } else {
            const response = await this.interfaces.fetch(image.name, {
                headers: {
                    "Range": `bytes=${position}-${position+extent-1}`
                }
            });
            if (!response.ok || response.status != 206) {
                throw new Error(`Failed to fetch ${extent} bytes from ${image.name} at position ${position}: ${response.statusText}`);
            }
            const arrayBuffer = await response.arrayBuffer();
            let dbRead = new DataBuffer(new Uint8Array(arrayBuffer));
            bytesRead = dbRead.copy(db, offset, 0, extent);
        }
        return bytesRead;
    }

    /**
     * readImage(image, position, extent, db, offset)
     *
     * Read bytes from the image at the specified logical position, de-blocking the data as needed
     * if the image's sector size does not match ISO.BLOCK_SIZE.
     *
     * @this {ISO}
     * @param {Image} image
     * @param {number} position
     * @param {number} extent
     * @param {DataBuffer} [db]
     * @param {number} [offset]
     * @returns {Array} ([db, bytesRead])
     */
    async readImage(image, position, extent, db = null, offset = 0)
    {
        let bytesRead = 0;
        if (!db) {
            db = new DataBuffer(extent);
        }
        if (image.sectorSize == ISO.BLOCK_SIZE) {
            bytesRead = await this.readBytes(image, position, extent, db, offset);
        } else {
            let sector = Math.floor(position / ISO.BLOCK_SIZE);
            let secpos = position % ISO.BLOCK_SIZE;
            do {
                let extData = ISO.BLOCK_SIZE - secpos;
                if (extData > extent - bytesRead) {
                    extData = extent - bytesRead;
                }
                let posData = sector * image.sectorSize + secpos + image.sectorOffset;
                let lenData = await this.readBytes(image, posData, extData, db, offset);
                bytesRead += lenData;
                if (lenData < extData) {
                    break;
                }
                sector++;
                secpos = 0;
                offset += extData;
            } while (bytesRead < extent);
        }
        return [db, bytesRead];
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
        let cache = image.cache;
        let maxExtent = cache.db.length;
        this.assert(position >= 0 && extent >= 0);
        //
        // If the position starts past the end of the image, we used to throw an error,
        // but now I want the caller to honor the returned length (which will be zero).
        // This is more consistent with how we handle extents beyond the end of the image,
        // which return a partial length (ie, less than extent).
        //
        // What position we record and what buffer offset we return is less important,
        // but we do return a buffer offset just past the end of the cache, to ensure that
        // any improper buffer access will fail.
        //
        //      throw new Error(`Position ${position} exceeds limit (${image.size})`);
        //
        // TODO: Consider making this a feature of all other readCache() implementations;
        // in fact, consider moving readCache() into a module like struct.js, so that there's
        // only one implementation of readCache().
        //
        if (position > image.size) {
            cache.position = position;
            cache.extent = 0;
            return [maxExtent, 0];
        }
        if (position + extent > image.size) {
            extent = image.size - position;
        }
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
                let [db, bytesRead] = await this.readImage(image, readPosition, readExtent, cache.db, readOffset);
                if (bytesRead != readExtent) {
                    throw new Error(`Received ${bytesRead} bytes, expected ${readExtent} at ${readPosition}`);
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
        if (image.primary && image.primary.blockSize) {
            if (!image.paths) {
                image.paths = await this.readPathRecords(image, image.primary.lbaPaths, image.primary.lenPaths);
                if (image.nodir) {
                    //
                    // Create an index for the paths that is in LBA order, so that we read the
                    // directory records in the order they appear on the disc; path records are
                    // often already (mostly) in LBA order, but not always.
                    //
                    const pathIndexes = Array.from({ length: image.paths.length }, (_, i) => i);
                    pathIndexes.sort((a, b) => {
                        return image.paths[a].lba - image.paths[b].lba;
                    });
                    let indexDiff = 0;
                    image.records = [];
                    for (let index = 0; index < pathIndexes.length; index++) {
                        if (!indexDiff && index != pathIndexes[index]) {
                            indexDiff = index + 1;
                        }
                        let path = image.paths[pathIndexes[index]];
                        //
                        // Build the subdir (and level) by walking back through the path records.
                        //
                        let level = 0, subdir = path.name;
                        let parentIndex = path.indexParent;
                        while (parentIndex > 1 && parentIndex <= image.paths.length) {
                            let parentPath = image.paths[parentIndex-1];
                            if (parentPath.name) {
                                subdir = parentPath.name + (subdir? "/" + subdir : "");
                            }
                            parentIndex = parentPath.indexParent;
                            level++;
                        }
                        let recs = await this.readDirRecords(image, path.lba + path.cbAttr, 0, level, subdir);
                        image.records.push(...recs);
                    }
                    //
                    // This is of mild interest to me, but it doesn't really rise to the level of a warning.
                    //
                    //      if (indexDiff) {
                    //          image.warnings.push(`path record(s) (eg, ${indexDiff}) not in LBA order`);
                    //      }
                    //
                    // If we built all the directory records from the path records, that could result in an order
                    // that differs from a simple recursive call to readDirRecords(), so in order to smooth over any
                    // inconsistencies between the two methods, we sort the records by path, and then by entry type
                    // (files first, then directories) within paths, and then by name within each type.
                    //
                    image.records.sort((a, b) => {
                        let aType = a.flags & image.dirClass.fields.flags.DIRECTORY;
                        let bType = b.flags & image.dirClass.fields.flags.DIRECTORY;
                        if (a.path < b.path) return -1;
                        if (a.path > b.path) return 1;
                        if (!aType && bType) return -1;
                        if (aType && !bType) return 1;
                        if (a.name < b.name) return -1;
                        if (a.name > b.name) return 1;
                        return 0;
                    });
                }
            }
            if (!image.records) {
                image.records = await this.readDirRecords(image, image.primary.rootDir.lba + image.primary.rootDir.cbAttr, image.primary.rootDir.size);
            }
            const regex = new RegExp("(?:^|/)" + filespec.replace(/\./g, "\\.").replace(/\*/g, ".*").replace(/\?/g, ".") + "$", "i");
            for (let index = 0; index < image.records.length; index++) {
                let record = image.records[index];
                let name = record.path? record.path + '/' + record.name : record.name;
                if (regex.test(name)) {
                    let attr = 0;
                    if (record.flags & image.dirClass.fields.flags.DIRECTORY) {
                        attr |= 0x10;
                    }
                    //
                    // Sometimes names in ISO directory records end with a period, which I believe the 9660 standard says
                    // is not allowed, but that doesn't stop it from happening in the wild.
                    //
                    name = name.replace(/\.$/, "");
                    if (name) {
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
            }
        }
        return entries;
    }

    /**
     * readDirRecords(image, lba, size, level, subdir)
     *
     * When called from readPathRecords(), size is zero, signalling that we're only interested in
     * the current directory (ie, any nested directories will be ignored, since they will presumably
     * appear elsewhere in the path table).
     *
     * The other reason size is zero is because path records do NOT contain a size, but we still
     * need to know the size of the directory in order to know when to stop.  Fortunately, that size
     * information is also stored in the directory's first record (".").
     *
     * @this {ISO}
     * @param {Image} image
     * @param {number} lba
     * @param {number} size (of all the directory blocks, in bytes; zero if called from readPathRecords)
     * @param {number} [level] (used internally to track recursion depth)
     * @param {string} [subdir]
     * @returns {Array}
     */
    async readDirRecords(image, lba, size, level = 1, subdir = "")
    {
        let count = 0;
        let records = [], subrecs = [];
        let position = lba * image.primary.blockSize;
        let positionEnd = position + size;
        try {
            //
            // The maximum level was originally 8, but perhaps that was increased (or ignored?) over time.
            //
            //      this.check(image, level <= 8, `Directory "${subdir}" extremely nested (${level})`);
            //
            if (!this.check(image, positionEnd <= image.size, `Directory at LBA ${lba} out of range`)) {
                return records;
            }
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
                // with insufficient data.
                //
                if (extent < image.dirClass.length) {
                    position = Math.ceil(position / image.primary.blockSize) * image.primary.blockSize;
                    continue;
                }
                let [offset, length] = await this.readCache(image, position, extent);
                if (length < image.dirClass.length) {
                    break;
                }
                let record = image.dirClass.readStruct(image.cache.db, offset);
                //
                // Directory records are not allowed to span block boundaries, and any padding between records
                // is supposed to be zeroed, so if we encounter a zero-length record, then we round the position
                // up to the next block boundary and try again.
                //
                if (!record.length) {
                    position = Math.ceil((position + 1) / image.primary.blockSize) * image.primary.blockSize;
                    continue;
                }
                if (this.debug) record.position = "0x" + position.toString(16);
                position += record.length;
                //
                // Sanity check the directory record, just to make sure we're not reading garbage.
                //
                let sanity = (record.name && length >= record.length) &&
                             (image.dirClass.length + (record.lenName-1) + ((record.lenName-1) & 0x1) <= record.length);
                if (!this.check(image, sanity, `Directory record at position ${record.position} is invalid`)) {
                    break;
                }
                //
                // There are many issues with "Otherware_1_SB_Development.iso", like directories with
                // enormous sizes.
                //
                // And in "0001_Big13.iso", there are some entries (eg, "ICON_") that have zero size and
                // a ridiculous LBA (eg, 0x69696969).
                //
                if ((record.flags & image.dirClass.fields.flags.DIRECTORY) && record.size >= 0x10000000) {
                    record.size &= 0x00ffffff;
                }
                //
                // TODO: For now, I'm not going to complain or bail when encountering out-of-bound directory
                // records, because maybe you already know the image is broken, and you just want to see the entries.
                //
                // if (!this.check(image, (!record.size || record.lba + record.cbAttr < image.lbaMax), `Directory record at position ${record.position} exceeds image bounds`)) {
                //     break;
                // }
                count++;
                //
                // The next check is a bit relaxed; for example, in "Hot Mix 15.iso", there are some ".."
                // records that have an ID 0x00 instead of 0x01, so they look like "." entries.
                //
                // Also, in "101_Only_The_Best_Games_4.iso", there are a number of directories with "." and
                // ".." entries in the middle of them; I've decided to ignore them if count > 2.
                //
                // TODO: Decide whether we should log them and see if they pop up in the context of another
                // directory entry.
                //
                if (record.name == ".") {           // skip the first directory record, which should be "."
                    this.check(image, count == 1 && record.lba + record.cbAttr == lba || count >= 2, `Directory record "${record.name}" at position ${record.position} has LBA ${record.lba + record.cbAttr}, expected ${lba}`);
                    //
                    // If this readDirRecords() call had no size, then it came from readPathRecords(), so
                    // we must update positionEnd according to the size stored in the directory's "." record.
                    //
                    if (!size && count == 1) {
                        positionEnd = position - record.length + record.size;
                    }
                    continue;
                }
                if (record.name == "..") {          // skip the second directory record, which should be ".."
                    this.check(image, count == 2 && record.lenName == 1 || count > 2);
                    continue;
                }
                record.name = record.name.replace(/;[0-9]+$/, "");
                record.path = subdir;
                records.push(record);
            } while (position < positionEnd);
            //
            // If we're reading all directory records, then the size parameter should be non-zero.
            //
            if (size) {
                for (let record of records) {
                    if (record.flags & image.dirClass.fields.flags.DIRECTORY) {
                        let subdir = record.path? record.path + '/' + record.name : record.name;
                        let recs = await this.readDirRecords(image, record.lba + record.cbAttr, record.size, level + 1, subdir);
                        subrecs.push(recs);
                    }
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
                if (length < image.pathClass.length) {
                    break;              // if we can't read a full path record, we're done
                }
                let record = image.pathClass.readStruct(image.cache.db, offset);
                if (!record.lenName) {
                    break;              // if we've hit zero-padding, presumably that's the end
                }
                if (this.debug) record.position = "0x" + position.toString(16);
                position += image.pathClass.length + record.lenName + (record.lenName & 0x1);
                if (record.lba + record.cbAttr >= image.lbaMax) {
                    throw new Error(`Invalid path record at position ${record.position}`);
                }
                paths.push(record);
            } while (position < positionEnd);
        } catch (error) {
            image.warnings.push(error.message);
        }
        return paths;
    }

    /**
     * readFile(image, entry, writeData)
     *
     * @this {ISO}
     * @param {Image} image
     * @param {object} entry (an entry from readDirectory())
     * @param {function} [writeData]
     * @returns {DataBuffer|undefined}
     */
    async readFile(image, entry, writeData)
    {
        let db, bytesRead;
        try {
            let record = image.records && image.records[entry.index];
            if (!record || (record.flags & image.dirClass.fields.flags.DIRECTORY)) {
                throw new Error(`No file record for entry ${entry.name} (${entry.index})`);
            }
            if (!record.size) {
                db = new DataBuffer(bytesRead = 0);
            } else {
                [db, bytesRead] = await this.readImage(image, (record.lba + record.cbAttr) * image.primary.blockSize, record.size);
            }
            if (bytesRead != record.size) {
                entry.warnings.push(`Received ${bytesRead} bytes, expected ${record.size}`);
                db = db.slice(0, bytesRead);
            }
            if (writeData) {
                await writeData(db, bytesRead);
                await writeData();
            }
        } catch (error) {
            entry.warnings.push(typeof error == "string"? error : error.message);
        }
        return db;
    }

    /**
     * readLabel(image)
     *
     * NOTE: While other container classes should wait until after readDirectory() has been called,
     * we need not, because open() has already read the primary volume descriptor, which is all we need.
     *
     * @param {Image} image
     * @returns {string} (the volume label, if any)
     */
    readLabel(image)
    {
        let label = "";
        if (image.primary) {
            label = image.primary.volID.trim();
        }
        return label;
    }
}
