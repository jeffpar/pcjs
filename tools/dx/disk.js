/**
 * @fileoverview Disk processing module
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * Adapted from https://www.pcjs.org/machines/pcx86/modules/v3/diskinfo.js
 */

import CharSet  from "./charset.js";
import DataBuffer from "./db.js";
import FileInfo from "./file.js";
import Format from "./format.js";
import Struct from "./struct.js";

/**
 * Instead of importing CPUx86 from /machines/pcx86/modules/v3/cpux86.js,
 * we'll define the handful of constants we need here.
 */
const CPUx86 = {
    OPCODE: {
        JMP:    0xE9,   // 2-byte displacement
        JMPS:   0xEB,   // 1-byte displacement
        CLD:    0xFC
    }
};

/**
 * VolInfo describes a volume.
 *
 * @typedef {Object} VolInfo
 * @property {number} iVolume
 * @property {number} iPartition
 * @property {number} idMedia
 * @property {number} lbaStart
 * @property {number} lbaTotal
 * @property {number} nFATBits
 * @property {number} vbaFAT
 * @property {number} vbaRoot
 * @property {number} rootEntries
 * @property {number} vbaData
 * @property {number} clusSecs
 * @property {number} clusMax
 * @property {number} clusBad
 * @property {number} clusFree
 * @property {number} clusTotal
 */

/**
 * DirInfo is an internal data structure used to help build FileInfo objects.
 *
 * @typedef {Object} DirInfo
 * @property {string} path (filled in by getDir(); the rest are filled in by getDirEntry())
 * @property {string} name (null if invalid/deleted entry)
 * @property {number} attr
 * @property {number} modDate
 * @property {number} modTime
 * @property {number} size
 * @property {number} cluster
 * @property {Array.<number>} aLBA (ie, array of logical block addresses)
 */

/**
 * Sector describes a sector contained within a disk image.  Storing the cylinder and head
 * of a sector within the structure is a bit redundant, but I find it helpful for inspection
 * and verification purposes.
 *
 * @typedef {Object} Sector
 * @property {number} c (cylinder #)
 * @property {number} h (head #)
 * @property {number} s (sector ID)
 * @property {number} l (length of sector, in bytes)
 * @property {Array.<number>} d (array of 32-bit values)
 * @property {number} f (index into the disk's file table)
 * @property {number} o (offset of this sector within the file's data stream)
 * @property {number} dataCRC
 * @property {boolean} dataError
 * @property {number} dataMark
 * @property {number} headCRC
 * @property {boolean} headError
 */

/**
 * We give the user total control over the interfaces that will be used to read disk images,
 * which also relieves us from importing them ourselves, allowing this code to easily run in any
 * environment (eg, Node.js, browser, etc).
 *
 * @typedef  {object}   Interfaces
 * @property {function} fetch       (fetch() interface to read remote files)
 * @property {function} open        (open() interface to open local files)
 *
 * @typedef  {object}   InterfaceOptions
 * @property {number}   cacheSize   (size of cache buffer, if needed; default is 64K)
 * @property {string}   encoding    (encoding to use for strings in archives; default is "cp437")
 */

/**
 * This class provides an environment-agnostic interface for extracting files from disk images.
 *
 * @class Disk
 * @property {Interfaces} interfaces
 * @property {number} cacheSize (default is 64K)
 * @property {string} encoding (default is "cp437")
 * @property {boolean} debug (if true, enable additional checks/warnings; default is false)
 */
export default class Disk {

    /**
     * constructor(interfaces, interfaceOptions)
     *
     * @this {Disk}
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
    }

    /**
     * open(name, db, options)
     *
     * Returns an DiskInfo object to be used with various read functions.
     *
     * TODO: This open() method, unlike open() for DZip and ISO, always reads the entire disk image into memory
     * before returning the DiskInfo object, which is not ideal for large disk images, but it's a side-effect of
     * the code being adapted from the older PCjs diskinfo.js module.  Consider improving this code someday.
     *
     * @this {Disk}
     * @param {string} name
     * @param {DataBuffer} [db]
     * @param {DiskOptions} [options]
     * @returns {DiskInfo}
     */
    async open(name, db = null, options = {})
    {
        let diskInfo = new DiskInfo(name, options.modified, this.debug);
        if (db) {
            diskInfo.db = db;
            diskInfo.source = "Buffer";
        }
        else if (this.interfaces.open && !name.match(/^https?:\/\//i)) {
            let file = await this.interfaces.open(name, "r");
            if (!file) {
                throw new Error(`Unable to open ${name}`);
            }
            const stats = await file.stat();
            if (!stats.size) {
                await file.close();
                throw new Error(`File is empty`);
            }
            //
            // If the caller supplied a modification date for the image, then we stick with that,
            // because the caller may have extracted the image from another container that preserved
            // the original date.  Otherwise, we use the modification date provided by the file system.
            //
            if (!diskInfo.modified) {
                diskInfo.modified = stats.mtime;
            }
            let db = new DataBuffer(stats.size);
            let result = await file.read(db.buffer);
            if (result.bytesRead < db.length) {
                db = db.slice(0, result.bytesRead);
            }
            await file.close();
            diskInfo.db = db;
            diskInfo.source = "FS";
        }
        else if (this.interfaces.fetch) {
            let response = await this.interfaces.fetch(name);
            if (!response.ok) {
                throw new Error(`Unable to fetch ${name} (${response.statusText})`);
            }
            let arrayBuffer = await response.arrayBuffer();
            diskInfo.db = new DataBuffer(new Uint8Array(arrayBuffer));
            diskInfo.source = "Network";
        }
        else {
            throw new Error("No disk open interface available");
        }
        let success = false;
        if (name.match(/\.json$/i)) {
            let json = diskInfo.db.toString();
            success = diskInfo.buildDiskFromJSON(json);
        } else {
            success = diskInfo.buildDiskFromBuffer(diskInfo.db);
        }
        if (!success) {
            throw new Error(`Unrecognized disk image`);
        }
        //
        // Add properties that open() callers expect, consistent with DZip and ISO classes.
        //
        // TODO: Consider renaming cbDiskData to size, and perhaps others, for more consistency.
        //
        diskInfo.name = diskInfo.diskName;
        diskInfo.size = diskInfo.cbDiskData;
        return diskInfo;
    }

    /**
     * readDirectory(diskInfo, filespec, filterExceptions, filterMethod)
     *
     * @this {Disk}
     * @param {DiskInfo} diskInfo
     * @param {string} [filespec]
     * @param {number} [filterExceptions] (0 if none)
     * @param {number} [filterMethod] (-1 if none)
     * @returns {Array}
     */
    async readDirectory(diskInfo, filespec = "*", filterExceptions = 0, filterMethod = -1)
    {
        let entries = [];
        let newEntry = function(file) {
            let name = file.path.replace(/\\/g, "/");
            if (name[0] == "/") name = name.slice(1);
            let entry = {
                index: file.index,
                name: name,
                attr: file.attr,
                modified: file.date,
                size: file.size,
                compressedSize: file.size,
                flags: 0,
                method: 0,
                crc: 0,
                warnings: file.warnings,
                cluster: file.cluster,
                blocks: file.aLBA
            };
            entries.push(entry);
        };
        if (diskInfo.buildTables() > 0) {
            const regex = new RegExp("(?:^|/)" + filespec.replace(/\./g, "\\.").replace(/\*/g, ".*").replace(/\?/g, ".") + "$", "i");
            for (let i = 0; i < diskInfo.fileTable.length; i++) {
                let file = diskInfo.fileTable[i];
                if (file.name == "." || file.name == ".." || !regex.test(file.name)) continue;
                if (file.attr & DiskInfo.ATTR.INTERNAL) continue;
                newEntry(file);
            }
        }
        return entries;
    }

    /**
     * readFile(diskInfo, entry, writeData)
     *
     * @this {Disk}
     * @param {DiskInfo} diskInfo
     * @param {object} entry (an entry from readDirectory())
     * @param {function} [writeData]
     * @returns {DataBuffer|undefined}
     */
    async readFile(diskInfo, entry, writeData)
    {
        let db;
        let file = diskInfo.fileTable[entry.index];
        if (file && file.name.length && file.size < diskInfo.cbDiskData) {
            let ab = new Array(file.size);
            let size = diskInfo.readSectorArray(file, ab);
            if (size != file.size) {
                entry.warnings.push(`Received ${size} bytes, expected ${file.size}`);
            }
            db = new DataBuffer(ab, 0, size);
            if (writeData) {
                await writeData(db);
                await writeData();
            }
        }
        return db;
    }

    /**
     * readLabel(diskInfo)
     *
     * NOTE: This should not be called until after readDirectory() has been called.
     *
     * @param {DiskInfo} diskInfo
     * @returns {string}
     */
    readLabel(diskInfo)
    {
        let match = diskInfo.name.match(/([^\\/.]*)\.[^.]*$/);
        let label = match? match[1].trim() : "";
        for (let i = 0; i < diskInfo.fileTable.length; i++) {
            let file = diskInfo.fileTable[i];
            if (file.attr & DiskInfo.ATTR.VOLUME) {
                label = file.name;
                break;
            }
        }
        return label;
    }

    /**
     * close(diskInfo)
     *
     * @this {Disk}
     * @param {DiskInfo} diskInfo
     */
    async close(diskInfo)
    {
        return;         // nothing to do
    }
}

/**
 * @class DiskInfo
 * @property {string} diskName
 * @property {Array} aDiskData
 * @property {number} cbDiskData
 * @property {number} dwChecksum
 * @property {number} nCylinders
 * @property {number} nHeads
 * @property {number} nSectors
 * @property {number} cbSector
 * @property {Array.<VolInfo>|null} volTable
 * @property {Array.<FileInfo>|null} fileTable
 */
export class DiskInfo {

    /**
     * This is our arbitrary size threshold for any disk image considered to be partitioned
     * (ie, a fixed disk image with a partition table); conversely, anything smaller is assumed
     * to be a diskette image.
     */
    static MIN_PARTITION = 3000000;     // ~3MB (used in lieu of any partitioned media indicator)

    /**
     * Top-level descriptors in PCjs "v2" JSON disk images.
     */
    static DESC = {
        IMAGE:      'imageInfo',
        VOLUMES:    'volTable',
        FILES:      'fileTable',
        DISKDATA:   'diskData'
    };

    /**
     * Supported image types.
     */
    static TYPE = {
        CHS:        'CHS'
    };

    /**
     * Image descriptor properties.
     */
    static IMAGE = {
        TYPE:       'type',
        NAME:       'name',
        FORMAT:     'format',
        HASH:       'hash',
        CHECKSUM:   'checksum',
        CYLINDERS:  'cylinders',
        HEADS:      'heads',
        TRACKDEF:   'trackDefault',
        SECTORDEF:  'sectorDefault',
        DISKSIZE:   'diskSize',
        ORIGBPB:    'bootSector',
        VERSION:    'version',
        REPOSITORY: 'repository',
        GENERATED:  'generated',
        SOURCE:     'source'            // the source of the data (eg, archive.org, pcjs.org, etc)
    };

    /**
     * Volume descriptor properties.
     */
    static VOLDESC = {
        PARTITION:  'iPartition',       // partition (if applicable)
        MEDIA_ID:   'idMedia',          // media ID
        LBA_VOL:    'lbaStart',         // LBA of volume
        LBA_TOTAL:  'lbaTotal',         // total blocks in volume
        FAT_ID:     'idFAT',            // type of FAT (ie, 12 or 16)
        VBA_FAT:    'vbaFAT',           // VBA of first block of (first) FAT
        VBA_ROOT:   'vbaRoot',          // VBA of root directory
        ROOT_TOTAL: 'rootTotal',        // total entries in root directory
        VBA_DATA:   'vbaData',          // VBA of data area
        CLUS_SECS:  'clusSecs',         // number of sectors per cluster
        CLUS_MAX:   'clusMax',          // maximum valid cluster number
        CLUS_BAD:   'clusBad',          // total bad clusters
        CLUS_FREE:  'clusFree',         // total free clusters
        CLUS_TOTAL: 'clusTotal'         // total clusters
    };

    /**
     * File descriptor properties.
     */
    static FILEDESC = {
        VOL:        'vol',
        PATH:       'path',
        NAME:       'name',
        ATTR:       'attr',
        DATE:       'date',
        SIZE:       'size',
        HASH:       'hash',
        MODULE:     'module',
        MODNAME:    'name',
        MODDESC:    'description',
        MODSEGS:    'segments',
        CONTENTS:   'contents',
        ORIGIN:     'origin'            // path of original file (if the file originated from non-DOS media)
    };

    /**
     * Sector object "public" properties.
     */
    static SECTOR = {
        CYLINDER:   'c',                // cylinder number (0-based) [formerly 'iCylinder']
        HEAD:       'h',                // head number (0-based) [formerly 'iHead']
        ID:         's',                // sector ID (generally 1-based, except for unusual/copy-protected disks) [formerly 'sector']
        LENGTH:     'l',                // sector length, in bytes (generally 512, except for unusual/copy-protected disks) [formerly 'length']
        DATA:       'd',                // array of signed 32-bit values (if less than length/4, the last value is repeated) [formerly 'data']
        FILE_INDEX: 'f',                // PCjs "v2" JSON disk images only [formerly 'file']
        FILE_OFFSET:'o',                // PCjs "v2" JSON disk images only [formerly 'offFile' or 'offset']
                                        // [no longer used: 'pattern']
        /**
         * The following properties occur very infrequently (and usually only in copy-protected or degraded disk images),
         * hence the longer, more meaningful IDs.
         */
        DATA_CRC:   'dataCRC',
        DATA_ERROR: 'dataError',
        DATA_MARK:  'dataMark',
        HEAD_CRC:   'headCRC',
        HEAD_ERROR: 'headError'
    };

    static MBR = {
        PCJS_SIG:       0x199,          // PCJS_VALUE
        DRIVE0PARMS: {
            CYLS:       0x19E,          // 1 word
            HEADS:      0x1A0,          // 1 byte
            SECTORS:    0x1AC           // 1 byte
        },
        DRIVE1PARMS: {
            CYLS:       0x1AE,          // 1 word
            HEADS:      0x1B0,          // 1 byte
            SECTORS:    0x1BC           // 1 byte
        },
        PARTITIONS: {
            OFFSET:     0x1BE,
            ENTRY: {
                STATUS:         0x00,   // 1-byte (0x80 if active)
                CHS_FIRST:      0x01,   // 3-byte CHS specifier of first partition sector
                TYPE:           0x04,   // 1-byte TYPE (see below)
                CHS_LAST:       0x05,   // 3-byte CHS specifier of last partition sector
                VBA_FIRST:      0x08,   // 4-byte Volume Block Address
                VBA_TOTAL:      0x0C,   // 4-byte Volume Block Address
            },
            ENTRY_LENGTH:       0x10,
            STATUS: {
                ACTIVE:         0x80,   // ie, bootable
                INACTIVE:       0x00
            },
            TYPE: {
                EMPTY:          0x00,
                FAT12_PRIMARY:  0x01,   // DOS 2.0 and up (12-bit FAT)
                FAT16_PRIMARY:  0x04,   // DOS 3.0 and up (16-bit FAT with less than 65536 sectors (< 32Mb))
                EXTENDED:       0x05,   // DOS 3.3 and up (must reside within the first 8Gb)
                FAT16_BIG:      0x06    // DOS 3.31 and up (16-bit FAT with 65536 or more sectors (>= 32Mb and < 8Gb))
            }
        },
        SIG_OFFSET:     0x1FE,
        SIGNATURE:      0xAA55          // to be clear, the low byte (at offset 0x1FE) is 0x55 and the high byte (at offset 0x1FF) is 0xAA
    };

    /**
     * Boot sector offsets (and assorted constants) in DOS-compatible boot sectors (DOS 2.0 and up)
     *
     * WARNING: I've heard apocryphal stories about SIGNATURE being improperly reversed on some systems
     * (ie, 0x55AA instead 0xAA55) -- perhaps by a dyslexic programmer -- so be careful out there.
     */
    static BOOT = {
        SIG_OFFSET:     0x1FE,
        SIGNATURE:      0xAA55          // to be clear, the low byte (at offset 0x1FE) is 0x55 and the high byte (at offset 0x1FF) is 0xAA
    };

    /**
     * PCJS_LABEL is our default label, used whenever a more suitable label (eg, the disk image's folder name)
     * is not available (or not supplied), and PCJS_OEM is inserted into any DiskInfo-generated diskette images.
     */
    static PCJS_LABEL = "PCJS";
    static PCJS_OEM   = "PCJS.ORG";
    static PCJS_VALUE = 0x534a4350;     // "PCJS"

    /**
     * BIOS Parameter Block (BPB) offsets in DOS-compatible boot sectors (DOS 2.x and up)
     *
     * Technically, OPCODE and OEM are not part of a BPB, but some operating systems test one or both those fields as part
     * of their disk verification logic, so for simplicity's sake, this is where we're recording those offsets.
     *
     * NOTE: DOS 2.x OEM documentation says that the words starting at offset 0x018 (TRACKSECS, DRIVEHEADS, and HIDDENSECS)
     * are optional, but even the DOS 2.0 FORMAT utility initializes all three of those words.  There may be some OEM media out
     * there with BPBs that are only valid up to offset 0x018, but I've not run across any media like that.
     *
     * DOS 3.20 added LARGESECS, but unfortunately, it was added as a 2-byte value at offset 0x01E.  DOS 3.31 decided
     * to make both HIDDENSECS and LARGESECS 4-byte values, which meant that LARGESECS had to move from 0x01E to 0x020.
     */
    static BPB = {
        OPCODE:         0x000,      // 1 byte for an x86 JMP opcode, followed by a 1 or 2-byte offset (or CPUx86.OPCODE.CLD for BASIC-DOS boot sectors)
        BEGIN:          0x003,      //
        OEM:            0x003,      // 8 bytes (eg, "IBM  2.0")
        SECBYTES:       0x00B,      // 2 bytes: bytes per sector (eg, 0x200 or 512)
        CLUSSECS:       0x00D,      // 1 byte: sectors per cluster (eg, 1)
        RESSECS:        0x00E,      // 2 bytes: reserved sectors; ie, # sectors preceding the first FAT, usually just the boot sector (eg, 1)
        FATS:           0x010,      // 1 byte: FAT copies (eg, 2)
        DIRENTS:        0x011,      // 2 bytes: root directory entries (eg, 0x40 or 64)
        DISKSECS:       0x013,      // 2 bytes: number of sectors (eg, 0x140 or 320); if zero, refer to LARGESECS
        MEDIA:          0x015,      // 1 byte: media ID (see DiskInfo.FAT.MEDIA_*); should also match the first byte of the FAT (aka FAT ID)
        FATSECS:        0x016,      // 2 bytes: sectors per FAT (eg, 1)
        TRACKSECS:      0x018,      // 2 bytes: sectors per track (eg, 8)
        DRIVEHEADS:     0x01A,      // 2 bytes: number of heads (eg, 1)
        HIDDENSECS:     0x01C,      // 2 bytes (DOS 2.x) or 4 bytes (DOS 3.31 and up): number of hidden sectors (0 for non-partitioned media)
        BOOTDRIVE:      0x01E,      // 1 byte (DOS 2.x): BIOS boot drive # (eg, 0x00 or 0x80)
        BOOTHEAD:       0x01F,      // 1 byte (DOS 2.x): BIOS boot head # (0-based)
        /**
         * NOTE: DOS 2.0 also stores the number of sectors in the BIOS file (eg, IO.SYS, IBMBIO.COM) in the byte at offset
         * 0x020 (LARGESECS), followed by a custom 11-byte Diskette Parameter Table (DPT) at offsets 0x021 through 0x0x2B, which
         * it promptly points the DPT vector 0x1E (0:0078h) to.
         */
        LARGESECS:      0x020,      // 4 bytes (DOS 3.31 and up): number of sectors if DISKSECS is zero
        END:            0x024,      // end of standard BPB
        /**
         * The rest of these definitions are part of our extended (BASIC-DOS) BPB.  They are not part of a standard DOS BPB.
         *
         * Although, coincidentally, DOS 4.x DID begin storing the boot drive in the same location as our DRIVE field.  It seems
         * DOS couldn't make up its mind what to do with that byte: DOS 2.x through 3.1 stored it at 0x01E (BOOTDRIVE), DOS 3.2 and
         * 3.3 stored it at 0x1FD, and DOS 4.x stored it at 0x024).
         */
        DRIVE:          0x24,       // 1 byte: drive # (eg, 0x00 or 0x80)
        CYLSECS:        0x25,       // 2 bytes: sectors per cylinder
        LBAROOT:        0x27,       // 2 bytes: LBA of 1st root dir sector
        LBADATA:        0x29,       // 2 bytes: LBA of 1st data sector
        ENDEX:          0x2B        // end of extended BPB
    };

    /**
     * Common (supported) diskette geometries.
     *
     * Each entry in GEOMETRIES is an array of values in "CHS" order:
     *
     *      [# cylinders, # heads, # sectors/track, # bytes/sector, media ID]
     *
     * If the 4th value is omitted, the sector size is assumed to be 512.  The order of these "geometric" values mirrors
     * the structure of our JSON-encoded disk images, which consist of an array of cylinders, each of which is an array of
     * heads, each of which is an array of sector objects.
     */
    static GEOMETRIES = {
        163840:  [40,1, 8,512,0xFE],    // media ID 0xFE: 40 cylinders, 1 head (single-sided),   8 sectors/track, ( 320 total sectors x 512 bytes/sector ==  163840)
        184320:  [40,1, 9,512,0xFC],    // media ID 0xFC: 40 cylinders, 1 head (single-sided),   9 sectors/track, ( 360 total sectors x 512 bytes/sector ==  184320)
        327680:  [40,2, 8,512,0xFF],    // media ID 0xFF: 40 cylinders, 2 heads (double-sided),  8 sectors/track, ( 640 total sectors x 512 bytes/sector ==  327680)
        368640:  [40,2, 9,512,0xFD],    // media ID 0xFD: 40 cylinders, 2 heads (double-sided),  9 sectors/track, ( 720 total sectors x 512 bytes/sector ==  368640)
        737280:  [80,2, 9,512,0xF9],    // media ID 0xF9: 80 cylinders, 2 heads (double-sided),  9 sectors/track, (1440 total sectors x 512 bytes/sector ==  737280)
        1228800: [80,2,15,512,0xF9],    // media ID 0xF9: 80 cylinders, 2 heads (double-sided), 15 sectors/track, (2400 total sectors x 512 bytes/sector == 1228800)
        1474560: [80,2,18,512,0xF0],    // media ID 0xF0: 80 cylinders, 2 heads (double-sided), 18 sectors/track, (2880 total sectors x 512 bytes/sector == 1474560)
        2949120: [80,2,36,512,0xF0],    // media ID 0xF0: 80 cylinders, 2 heads (double-sided), 36 sectors/track, (5760 total sectors x 512 bytes/sector == 2949120)
        /**
         * The following are some common disk sizes and their CHS values, since missing or bogus MBR and/or BPB values
         * might mislead us when attempting to determine the exact disk geometry.
         */
        10653696:[306, 4, 17],          // PC XT 10Mb hard drive (type 3)
        21411840:[615, 4, 17],          // PC AT 20Mb hard drive (type 2)
        /**
         * Other assorted disk formats, used by DEC and others.
         * For example, the 256256-byte format was also used on early CP/M and SCP (Seattle Computer Products) systems
         */
        256256:  [77,  1, 26, 128],     // RX01 single-platter diskette: 77 tracks, 1 head, 26 sectors/track, 128 bytes/sector, for a total of 256256 bytes
        1261568: [77,  2, 8, 1024],     // SCP(?) single-platter diskette: 77 tracks, 2 heads, 8 sectors/track, 1024-byte sectors, for a total of 1261568 bytes
        2494464: [203, 2, 12, 512],     // RK03 single-platter disk cartridge: 203 tracks, 2 heads, 12 sectors/track, 512 bytes/sector, for a total of 2494464 bytes
        5242880: [256, 2, 40, 256],     // RL01K single-platter disk cartridge: 256 tracks, 2 heads, 40 sectors/track, 256 bytes/sector, for a total of 5242880 bytes
        10485760:[512, 2, 40, 256]      // RL02K single-platter disk cartridge: 512 tracks, 2 heads, 40 sectors/track, 256 bytes/sector, for a total of 10485760 bytes
    };

    /**
     * Media ID (descriptor) bytes for DOS-compatible FAT-formatted disks (stored in the first byte of the FAT)
     */
    static FAT = {
        MEDIA_320KB:    0xFF,       // 5.25-inch, 2-sided,  8-sector, 40-track
        MEDIA_160KB:    0xFE,       // 5.25-inch, 1-sided,  8-sector, 40-track
        MEDIA_360KB:    0xFD,       // 5.25-inch, 2-sided,  9-sector, 40-track
        MEDIA_180KB:    0xFC,       // 5.25-inch, 1-sided,  9-sector, 40-track
        MEDIA_720KB:    0xF9,       //  3.5-inch, 2-sided,  9-sector, 80-track
        MEDIA_1200KB:   0xF9,       //  3.5-inch, 2-sided, 15-sector, 80-track
        MEDIA_FIXED:    0xF8,       // fixed disk (aka hard drive)
        MEDIA_1440KB:   0xF0,       //  3.5-inch, 2-sided, 18-sector, 80-track
        MEDIA_2880KB:   0xF0        //  3.5-inch, 2-sided, 36-sector, 80-track
    };

    /**
     * Cluster constants for 12-bit FATs (CLUSNUM_FREE, CLUSNUM_RES and CLUSNUM_MIN are the same for all FATs)
     */
    static FAT12 = {
        MAX_CLUSTERS:   4084,
        CLUSNUM_FREE:   0,          // this should NEVER appear in cluster chain (except at the start of an empty chain)
        CLUSNUM_RES:    1,          // reserved; this should NEVER appear in cluster chain
        CLUSNUM_MIN:    2,          // smallest valid cluster number
        CLUSNUM_MAX:    0xFF6,      // largest valid cluster number
        CLUSNUM_BAD:    0xFF7,      // bad cluster; this should NEVER appear in cluster chain
        CLUSNUM_EOC:    0xFF8       // end of chain (actually, anything from 0xFF8-0xFFF indicates EOC)
    };

    /**
     * Cluster constants for 16-bit FATs (CLUSNUM_FREE, CLUSNUM_RES and CLUSNUM_MIN are the same for all FATs)
     */
    static FAT16 = {
        MAX_CLUSTERS:   65524,
        CLUSNUM_FREE:   0,          // this should NEVER appear in cluster chain (except at the start of an empty chain)
        CLUSNUM_RES:    1,          // reserved; this should NEVER appear in cluster chain
        CLUSNUM_MIN:    2,          // smallest valid cluster number
        CLUSNUM_MAX:    0xFFF6,     // largest valid cluster number
        CLUSNUM_BAD:    0xFFF7,     // bad cluster; this should NEVER appear in cluster chain
        CLUSNUM_EOC:    0xFFF8      // end of chain (actually, anything from 0xFFF8-0xFFFF indicates EOC)
    };

    /**
     * Directory Entry offsets (and assorted constants) in FAT disk images
     *
     * NOTE: Versions of DOS prior to 2.0 used INVALID exclusively to mark available directory entries; any entry marked
     * UNUSED was actually considered USED.  In DOS 2.0 and up, UNUSED was added to indicate that all remaining entries were
     * unused, relieving it from having to initialize the rest of the sectors in the directory cluster(s).  And in fact,
     * you will likely encounter garbage in subsequent directory sectors if you read beyond the first UNUSED entry.
     *
     * For more details on MODTIME and MODDATE, see buildDateTime().
     */
    static DIRENT = {
        NAME:           0x00,       // 8 bytes
        EXT:            0x08,       // 3 bytes
        ATTR:           0x0B,       // 1 byte
        MODTIME:        0x16,       // 2 bytes: bits 15-11 is hour (0-31), bits 10-5 is minute (0-63), bits 4-0 is second/2 (0-31)
        MODDATE:        0x18,       // 2 bytes: bits 15-9 is year (0 for 1980, 127 for 2107), bits 8-5 is month (1-12), bits 4-0 is day (1-31)
        CLUSTER:        0x1A,       // 2 bytes
        SIZE:           0x1C,       // 4 bytes (typically zero for subdirectories)
        LENGTH:         0x20,       // 32 bytes total
        UNUSED:         0x00,       // indicates this and all subsequent directory entries are unused
        INVALID:        0xE5        // indicates this directory entry is unused
    };

    /**
     * Possible values for DIRENT.ATTR
     */
    static ATTR = {
        READONLY:       0x01,       // PC DOS 2.0 and up
        HIDDEN:         0x02,
        SYSTEM:         0x04,
        VOLUME:         0x08,       // PC DOS 2.0 and up
        LFN:            0x0f,       // combination used by Windows 95 (MS-DOS 7.0) and up, indicating a long filename (LFN) DIRENT
        SUBDIR:         0x10,       // PC DOS 2.0 and up
        ARCHIVE:        0x20,       // PC DOS 2.0 and up
        INTERNAL:     0x0140,       // Apparently I generated some disk images with 0x40 instead of 0x100... that's annoying...
        METADATA:     0x0100        // for internal use only (used to mark "pseudo" file table entries that list compressed archive contents)
    };

    /**
     * The BPBs that buildDiskFromBuffer() currently supports; these BPBs should be in order of smallest/oldest to largest/newest
     * capacity, to help ensure we don't select a disk format larger (or newer) than necessary.
     *
     * The first two entries MUST be the first two diskette formats (160K and 320K) defined by PC DOS 1.0 and 1.1, respectively,
     * and the next two entries MUST be the corresponding extensions defined by PC DOS 2.0 (ie, 180K and 360K), as there's code above
     * that assumes that order when trying to resolve discrepancies between a disk image's actual size and its "formatted" size.
     *
     * Even though original 160K and 320K diskettes did not include any BPBs, any images we generate with those formats DO include
     * BPBs, because 1) it doesn't hurt anything, and 2) it makes the images mountable on modern operating systems.
     *
     * Finally, we've started adding some non-standard BPBs to the end of the table, with the intention of supporting older DOS-like
     * disk images (eg, SCP diskettes created by Seattle Computer Products).  These are distinguished by a ZERO media ID.
     */
    static aDefaultBPBs = [
      [                             // define BPB for 160Kb diskette
        0xEB, 0xFE, 0x90,           // 0x00: JMP instruction, following by 8-byte OEM signature
        0x50, 0x43, 0x4A, 0x53, 0x2E, 0x4F, 0x52, 0x47,     // PCJS_OEM
     // 0x49, 0x42, 0x4D, 0x20, 0x20, 0x31, 0x2E, 0x30,     // "IBM  1.0" (this is a fake OEM signature)
        0x00, 0x02,                 // 0x0B: bytes per sector (0x200 or 512)
        0x01,                       // 0x0D: sectors per cluster (1)
        0x01, 0x00,                 // 0x0E: reserved sectors; ie, # sectors preceding the first FAT--usually just the boot sector (1)
        0x02,                       // 0x10: FAT copies (2)
        0x40, 0x00,                 // 0x11: root directory entries (0x40 or 64)  0x40 * 0x20 = 0x800 (1 sector is 0x200 bytes, total of 4 sectors)
        0x40, 0x01,                 // 0x13: number of sectors (0x140 or 320)
        0xFE,                       // 0x15: media ID (eg, 0xFF: 320Kb, 0xFE: 160Kb, 0xFD: 360Kb, 0xFC: 180Kb)
        0x01, 0x00,                 // 0x16: sectors per FAT (1)
        0x08, 0x00,                 // 0x18: sectors per track (8)
        0x01, 0x00,                 // 0x1A: number of heads (1)
        0x00, 0x00, 0x00, 0x00      // 0x1C: number of hidden sectors (always 0 for non-partitioned media)
      ],
      [                             // define BPB for 320Kb diskette
        0xEB, 0xFE, 0x90,           // 0x00: JMP instruction, following by 8-byte OEM signature
        0x50, 0x43, 0x4A, 0x53, 0x2E, 0x4F, 0x52, 0x47,     // PCJS_OEM
     // 0x49, 0x42, 0x4D, 0x20, 0x20, 0x31, 0x2E, 0x30,     // "IBM  1.0" (this is a fake OEM signature)
        0x00, 0x02,                 // 0x0B: bytes per sector (0x200 or 512)
        0x02,                       // 0x0D: sectors per cluster (2)
        0x01, 0x00,                 // 0x0E: reserved sectors; ie, # sectors preceding the first FAT--usually just the boot sector (1)
        0x02,                       // 0x10: FAT copies (2)
        0x70, 0x00,                 // 0x11: root directory entries (0x70 or 112)  0x70 * 0x20 = 0xE00 (1 sector is 0x200 bytes, total of 7 sectors)
        0x80, 0x02,                 // 0x13: number of sectors (0x280 or 640)
        0xFF,                       // 0x15: media ID (eg, 0xFF: 320Kb, 0xFE: 160Kb, 0xFD: 360Kb, 0xFC: 180Kb)
        0x01, 0x00,                 // 0x16: sectors per FAT (1)
        0x08, 0x00,                 // 0x18: sectors per track (8)
        0x02, 0x00,                 // 0x1A: number of heads (2)
        0x00, 0x00, 0x00, 0x00      // 0x1C: number of hidden sectors (always 0 for non-partitioned media)
      ],
      [                             // define BPB for 180Kb diskette
        0xEB, 0xFE, 0x90,           // 0x00: JMP instruction, following by 8-byte OEM signature
        0x50, 0x43, 0x4A, 0x53, 0x2E, 0x4F, 0x52, 0x47,     // PCJS_OEM
     // 0x49, 0x42, 0x4D, 0x20, 0x20, 0x32, 0x2E, 0x30,     // "IBM  2.0" (this is a real OEM signature)
        0x00, 0x02,                 // 0x0B: bytes per sector (0x200 or 512)
        0x01,                       // 0x0D: sectors per cluster (1)
        0x01, 0x00,                 // 0x0E: reserved sectors; ie, # sectors preceding the first FAT--usually just the boot sector (1)
        0x02,                       // 0x10: FAT copies (2)
        0x40, 0x00,                 // 0x11: root directory entries (0x40 or 64)  0x40 * 0x20 = 0x800 (1 sector is 0x200 bytes, total of 4 sectors)
        0x68, 0x01,                 // 0x13: number of sectors (0x168 or 360)
        0xFC,                       // 0x15: media ID (eg, 0xFF: 320Kb, 0xFE: 160Kb, 0xFD: 360Kb, 0xFC: 180Kb)
        0x02, 0x00,                 // 0x16: sectors per FAT (2)
        0x09, 0x00,                 // 0x18: sectors per track (9)
        0x01, 0x00,                 // 0x1A: number of heads (1)
        0x00, 0x00, 0x00, 0x00      // 0x1C: number of hidden sectors (always 0 for non-partitioned media)
      ],
      [                             // define BPB for 360Kb diskette
        0xEB, 0xFE, 0x90,           // 0x00: JMP instruction, following by 8-byte OEM signature
        0x50, 0x43, 0x4A, 0x53, 0x2E, 0x4F, 0x52, 0x47,     // PCJS_OEM
     // 0x49, 0x42, 0x4D, 0x20, 0x20, 0x32, 0x2E, 0x30,     // "IBM  2.0" (this is a real OEM signature)
        0x00, 0x02,                 // 0x0B: bytes per sector (0x200 or 512)
        0x02,                       // 0x0D: sectors per cluster (2)
        0x01, 0x00,                 // 0x0E: reserved sectors; ie, # sectors preceding the first FAT--usually just the boot sector (1)
        0x02,                       // 0x10: FAT copies (2)
        0x70, 0x00,                 // 0x11: root directory entries (0x70 or 112)  0x70 * 0x20 = 0xE00 (1 sector is 0x200 bytes, total of 7 sectors)
        0xD0, 0x02,                 // 0x13: number of sectors (0x2D0 or 720)
        0xFD,                       // 0x15: media ID (eg, 0xFF: 320Kb, 0xFE: 160Kb, 0xFD: 360Kb, 0xFC: 180Kb)
        0x02, 0x00,                 // 0x16: sectors per FAT (2)
        0x09, 0x00,                 // 0x18: sectors per track (9)
        0x02, 0x00,                 // 0x1A: number of heads (2)
        0x00, 0x00, 0x00, 0x00      // 0x1C: number of hidden sectors (always 0 for non-partitioned media)
      ],
      [                             // define BPB for 1.2Mb diskette
        0xEB, 0xFE, 0x90,           // 0x00: JMP instruction, following by 8-byte OEM signature
        0x50, 0x43, 0x4A, 0x53, 0x2E, 0x4F, 0x52, 0x47,     // PCJS_OEM
     // 0x49, 0x42, 0x4D, 0x20, 0x31, 0x30, 0x2E, 0x30,     // "IBM 10.0" (which I believe was used on IBM OS/2 1.0 diskettes)
        0x00, 0x02,                 // 0x0B: bytes per sector (0x200 or 512)
        0x01,                       // 0x0D: sectors per cluster (1)
        0x01, 0x00,                 // 0x0E: reserved sectors; ie, # sectors preceding the first FAT--usually just the boot sector (1)
        0x02,                       // 0x10: FAT copies (2)
        0xE0, 0x00,                 // 0x11: root directory entries (0xe0 or 224)  0xe0 * 0x20 = 0x1c00 (1 sector is 0x200 bytes, total of 14 sectors)
        0x60, 0x09,                 // 0x13: number of sectors (0x960 or 2400)
        0xF9,                       // 0x15: media ID (0xF9 was used for 1228800-byte diskettes, and later for 737280-byte diskettes)
        0x07, 0x00,                 // 0x16: sectors per FAT (7)
        0x0f, 0x00,                 // 0x18: sectors per track (15)
        0x02, 0x00,                 // 0x1A: number of heads (2)
        0x00, 0x00, 0x00, 0x00      // 0x1C: number of hidden sectors (always 0 for non-partitioned media)
      ],
      [                             // define BPB for 720Kb diskette (2 sector/cluster format more commonly used)
        0xEB, 0xFE, 0x90,           // 0x00: JMP instruction, following by 8-byte OEM signature
        0x50, 0x43, 0x4A, 0x53, 0x2E, 0x4F, 0x52, 0x47,     // PCJS_OEM
     // 0x49, 0x42, 0x4D, 0x20, 0x20, 0x35, 0x2E, 0x30,     // "IBM  5.0" (this is a real OEM signature)
        0x00, 0x02,                 // 0x0B: bytes per sector (0x200 or 512)
        0x02,                       // 0x0D: sectors per cluster (2)
        0x01, 0x00,                 // 0x0E: reserved sectors; ie, # sectors preceding the first FAT--usually just the boot sector (1)
        0x02,                       // 0x10: FAT copies (2)
        0x70, 0x00,                 // 0x11: root directory entries (0x70 or 112)  0x70 * 0x20 = 0xE00 (1 sector is 0x200 bytes, total of 7 sectors)
        0xA0, 0x05,                 // 0x13: number of sectors (0x5A0 or 1440)
        0xF9,                       // 0x15: media ID
        0x03, 0x00,                 // 0x16: sectors per FAT (3)
        0x09, 0x00,                 // 0x18: sectors per track (9)
        0x02, 0x00,                 // 0x1A: number of heads (2)
        0x00, 0x00, 0x00, 0x00      // 0x1C: number of hidden sectors (always 0 for non-partitioned media)
      ],
      [                             // define BPB for 720Kb diskette (1 sector/cluster format used by PC DOS 4.01)
        0xEB, 0xFE, 0x90,           // 0x00: JMP instruction, following by 8-byte OEM signature
        0x50, 0x43, 0x4A, 0x53, 0x2E, 0x4F, 0x52, 0x47,     // PCJS_OEM
     // 0x49, 0x42, 0x4D, 0x20, 0x20, 0x34, 0x2E, 0x30,     // "IBM  4.0" (this is a real OEM signature)
        0x00, 0x02,                 // 0x0B: bytes per sector (0x200 or 512)
        0x01,                       // 0x0D: sectors per cluster (1)
        0x01, 0x00,                 // 0x0E: reserved sectors; ie, # sectors preceding the first FAT--usually just the boot sector (1)
        0x02,                       // 0x10: FAT copies (2)
        0x70, 0x00,                 // 0x11: root directory entries (0x70 or 112)  0x70 * 0x20 = 0xE00 (1 sector is 0x200 bytes, total of 7 sectors)
        0xA0, 0x05,                 // 0x13: number of sectors (0x5A0 or 1440)
        0xF9,                       // 0x15: media ID
        0x05, 0x00,                 // 0x16: sectors per FAT (5)
        0x09, 0x00,                 // 0x18: sectors per track (9)
        0x02, 0x00,                 // 0x1A: number of heads (2)
        0x00, 0x00, 0x00, 0x00      // 0x1C: number of hidden sectors (always 0 for non-partitioned media)
      ],
      [                             // define BPB for 1.44Mb diskette
        0xEB, 0xFE, 0x90,           // 0x00: JMP instruction, following by 8-byte OEM signature
        0x50, 0x43, 0x4A, 0x53, 0x2E, 0x4F, 0x52, 0x47,     // PCJS_OEM
     // 0x4d, 0x53, 0x44, 0x4F, 0x53, 0x35, 0x2E, 0x30,     // "MSDOS5.0" (an actual OEM signature, arbitrarily chosen for use here)
        0x00, 0x02,                 // 0x0B: bytes per sector (0x200 or 512)
        0x01,                       // 0x0D: sectors per cluster (1)
        0x01, 0x00,                 // 0x0E: reserved sectors; ie, # sectors preceding the first FAT--usually just the boot sector (1)
        0x02,                       // 0x10: FAT copies (2)
        0xE0, 0x00,                 // 0x11: root directory entries (0xe0 or 224)  0xe0 * 0x20 = 0x1c00 (1 sector is 0x200 bytes, total of 14 sectors)
        0x40, 0x0B,                 // 0x13: number of sectors (0xb40 or 2880)
        0xF0,                       // 0x15: media ID (0xF0 was used for 1474560-byte diskettes)
        0x09, 0x00,                 // 0x16: sectors per FAT (9)
        0x12, 0x00,                 // 0x18: sectors per track (18)
        0x02, 0x00,                 // 0x1A: number of heads (2)
        0x00, 0x00, 0x00, 0x00      // 0x1C: number of hidden sectors (always 0 for non-partitioned media)
      ],
        /**
         * Here's some useful background information on a 10Mb PC XT fixed disk, partitioned with a single DOS partition.
         *
         * The BPB for a 10Mb "type 3" PC XT hard disk specifies 0x5103 or 20739 for DISKSECS, which is the partition
         * size in sectors (10,618,368 bytes), whereas total disk size is 20808 sectors (10,653,696 bytes).  The partition
         * is 69 sectors smaller than the disk because the first sector is reserved for the MBR and 68 sectors (the entire
         * last cylinder) are reserved for diagnostics, head parking, etc.  This cylinder usage is confirmed by FDISK,
         * which reports that 305 cylinders (not 306) are assigned to the DOS partition.
         *
         * That 69-sector overhead is NOT overhead incurred by the FAT file system.  The FAT overhead is the boot sector
         * (1), FAT sectors (2 * 8), and root directory sectors (32), for a total of 49 sectors, leaving 20739 - 49 or
         * 20690 sectors.  Moreover, free space is measured in clusters, not sectors, and the partition uses 8 sectors/cluster,
         * leaving room for 2586.25 clusters.  Since a fractional cluster is not allowed, another 2 sectors are lost, for
         * a total of 51 sectors of FAT overhead.  So actual free space is (20739 - 51) * 512, or 10,592,256 bytes -- which
         * is exactly what is reported as the available space on a freshly formatted 10Mb PC XT fixed disk.
         *
         * Some sources on the internet (eg, http://www.wikiwand.com/en/Timeline_of_DOS_operating_systems) claim that the
         * file system overhead for the XT's 10Mb disk is "50 sectors".  As they explain:
         *
         *      "The fixed disk has 10,618,880 bytes of raw space: 305 cylinders (the equivalent of tracks) × 2 platters
         *      × 2 sides or heads per platter × 17 sectors per track = 20,740 sectors × 512 bytes per sector = 10,618,880
         *      bytes...."
         *
         * and:
         *
         *      "With DOS the only partition, the combined overhead is 50 sectors leaving 10,592,256 bytes for user data:
         *      DOS's FAT is eight sectors (16 sectors for two copies) + 32 sectors for the root directory, room for 512
         *      directory entries + 2 sectors (one master and one DOS boot sector) = 50 sectors...."
         *
         * However, that's incorrect.  First, the disk has 306 cylinders, not 305.  Second, there are TWO overhead values:
         * the overhead OUTSIDE the partition (69 sectors) and the overhead INSIDE the partition (51 sectors).  They failed
         * to account for the reserved cylinder in the first calculation and the fractional cluster in the second calculation,
         * and then they conflated the two values to produce a single (incorrect) result.
         *
         * Even if one were to assume that the disk had only 305 cylinders, that would only change the partitioning overhead
         * to 1 sector; the FAT file system overhead would still be 51 sectors.
         */
      [                             // define BPB for 10Mb hard drive
        0xEB, 0xFE, 0x90,           // 0x00: JMP instruction, following by 8-byte OEM signature
        0x49, 0x42, 0x4D, 0x20, 0x20, 0x32, 0x2E, 0x30,     // "IBM  2.0" (WARNING: this signature is REQUIRED for PC DOS 3.x to successfully read a partition using a 12-bit FAT with this BPB)
        0x00, 0x02,                 // 0x0B: bytes per sector (0x200 or 512)
        0x08,                       // 0x0D: sectors per cluster (8)
        0x01, 0x00,                 // 0x0E: reserved sectors; ie, # sectors preceding the first FAT--usually just the boot sector (1)
        0x02,                       // 0x10: FAT copies (2)
        0x00, 0x02,                 // 0x11: root directory entries (0x200 or 512)  0x200 * 0x20 = 0x4000 (1 sector is 0x200 bytes, total of 0x20 or 32 sectors)
        0x03, 0x51,                 // 0x13: number of sectors (0x5103 or 20739; * 512 bytes/sector = 10,618,368 bytes = 10,369Kb = 10Mb)
        0xF8,                       // 0x15: media ID (eg, 0xF8: hard drive)
        0x08, 0x00,                 // 0x16: sectors per FAT (8)
          //
          // Wikipedia (http://en.wikipedia.org/wiki/File_Allocation_Table#BIOS_Parameter_Block) implies everything past
          // this point was introduced post-DOS 2.0.  However, DOS 2.0 merely said they were optional, and in fact, DOS 2.0
          // FORMAT always initializes the next 3 words.  A 4th word, LARGESECS, was added in DOS 3.20 at offset 0x1E,
          // and then in DOS 3.31, both HIDDENSECS and LARGESECS were widened from words to dwords.
          //
        0x11, 0x00,                 // 0x18: sectors per track (17)
        0x04, 0x00,                 // 0x1A: number of heads (4)
          //
          // NOTE: PC DOS 2.0 stores BOOTDRIVE and BOOTHEAD at offsets 0x1E and 0x1F (it used only 2 bytes for hidden sectors)
          //
        0x01, 0x00, 0x00, 0x00      // 0x1C: number of hidden sectors (always 0 for non-partitioned media)
      ],
      [                             // define BPB for 20Mb hard drive
        0xEB, 0xFE, 0x90,           // 0x00: JMP instruction, following by 8-byte OEM signature
        0x49, 0x42, 0x4D, 0x20, 0x20, 0x32, 0x2E, 0x30,     // "IBM  2.0" (WARNING: this signature is REQUIRED for PC DOS 3.x to successfully read a partition using a 12-bit FAT with this BPB)
        0x00, 0x02,                 // 0x0B: bytes per sector (0x200 or 512)
        0x10,                       // 0x0D: sectors per cluster (16)
        0x01, 0x00,                 // 0x0E: reserved sectors; ie, # sectors preceding the first FAT--usually just the boot sector (1)
        0x02,                       // 0x10: FAT copies (2)
        0x00, 0x04,                 // 0x11: root directory entries (0x400 or 1024)  0x400 * 0x20 = 0x8000 (1 sector is 0x200 bytes, total of 0x40 or 64 sectors)
        0x17, 0xa3,                 // 0x13: number of sectors (0xa317 or 41751; * 512 bytes/sector = 21,376,512 bytes = 20,875.5Kb = 20Mb)
        0xF8,                       // 0x15: media ID (eg, 0xF8: hard drive)
        0x08, 0x00,                 // 0x16: sectors per FAT (8)
          //
          // Wikipedia (http://en.wikipedia.org/wiki/File_Allocation_Table#BIOS_Parameter_Block) implies everything past
          // this point was introduced post-DOS 2.0.  However, DOS 2.0 merely said they were optional, and in fact, DOS 2.0
          // FORMAT always initializes the next 3 words.  A 4th word, LARGESECS, was added in DOS 3.20 at offset 0x1E,
          // and then in DOS 3.31, both HIDDENSECS and LARGESECS were widened from words to dwords.
          //
        0x11, 0x00,                 // 0x18: sectors per track (17)
        0x04, 0x00,                 // 0x1A: number of heads (4)
          //
          // NOTE: PC DOS 2.0 stores BOOTDRIVE and BOOTHEAD at offsets 0x1E and 0x1F (it used only 2 bytes for hidden sectors)
          //
        0x01, 0x00, 0x00, 0x00      // 0x1C: number of hidden sectors (always 0 for non-partitioned media)
      ],
      [                             // define BPB for 256Kb diskette (single-sided, 77 tracks, 26 sectors/track, 128-byte sectors, 256256 total bytes)
        0xEB, 0xFE, 0x90,           // 0x00: JMP instruction, following by 8-byte OEM signature
        0x50, 0x43, 0x4A, 0x53, 0x2E, 0x4F, 0x52, 0x47,     // PCJS_OEM
        0x80, 0x00,                 // 0x0B: bytes per sector (0x80 or 128)
        0x04,                       // 0x0D: sectors per cluster (4)
        0x01, 0x00,                 // 0x0E: reserved sectors; ie, # sectors preceding the first FAT--usually just the boot sector (1)
        0x02,                       // 0x10: FAT copies (2)
        0x44, 0x00,                 // 0x11: root directory entries (0x44 or 68)  0x44 * 0x20 = 0x880 (1 sector is 0x80 bytes, total of 0x11 sectors)
        0xD2, 0x07,                 // 0x13: number of sectors (0x7D2 or 2002; ie, 77 * 26)
        0x00,                       // 0x15: media ID (0x00 indicates this is a non-standard format)
        0x06, 0x00,                 // 0x16: sectors per FAT (6)
        0x1A, 0x00,                 // 0x18: sectors per track (26)
        0x01, 0x00,                 // 0x1A: number of heads (1)
        0x00, 0x00, 0x00, 0x00      // 0x1C: number of hidden sectors (always 0 for non-partitioned media)
      ],
      [                             // define BPB for 1232Kb diskette (double-sided, 77 tracks, 8 sectors/track, 1024-byte sectors, 1261568 total bytes)
        0xEB, 0xFE, 0x90,           // 0x00: JMP instruction, following by 8-byte OEM signature
        0x50, 0x43, 0x4A, 0x53, 0x2E, 0x4F, 0x52, 0x47,     // PCJS_OEM
        0x00, 0x04,                 // 0x0B: bytes per sector (0x400 or 1024)
        0x01,                       // 0x0D: sectors per cluster (1)
        0x01, 0x00,                 // 0x0E: reserved sectors; ie, # sectors preceding the first FAT--usually just the boot sector (1)
        0x02,                       // 0x10: FAT copies (2)
        0xC0, 0x00,                 // 0x11: root directory entries (0xC0 or 192)  0xC0 * 0x20 = 0x1800 (1 sector is 1024 bytes, total of 6 sectors)
        0xD0, 0x04,                 // 0x13: number of sectors (0x4D0 or 1232; ie, 2 * 77 * 8)
        0x00,                       // 0x15: media ID (0x00 indicates this is a non-standard format)
        0x02, 0x00,                 // 0x16: sectors per FAT (2)
        0x08, 0x00,                 // 0x18: sectors per track (8)
        0x02, 0x00,                 // 0x1A: number of heads (2)
        0x00, 0x00, 0x00, 0x00      // 0x1C: number of hidden sectors (always 0 for non-partitioned media)
      ]
    ];

    static DirEntry = new Struct("DirEntry")
        .field('name',      Struct.STR(8))
        .field('ext',       Struct.STR(3))
        .field('attr',      Struct.BYTE)
        .field('reserved',  Struct.STR(10))
        .field('modified',  Struct.DOSTIMEDATE)
        .field('cluster',   Struct.WORD)
        .field('size',      Struct.DWORD)
        .verifyLength(32);

    /**
     * DiskInfo(diskName, modified, debug)
     *
     * Returns a DiskInfo object used to build a disk images.
     *
     * @this {DiskInfo}
     * @param {string} [diskName]
     * @param {Date} [modified]
     * @param {boolean} [debug]
     */
    constructor(diskName = "", modified = null, debug = false)
    {
        this.diskName = diskName;
        this.modified = modified;
        this.debug = debug;
        this.volTable = [];
        this.fileTable = [];
        this.tablesBuilt = false;
        this.cbDiskData = 0;
        this.dwChecksum = 0;
        this.warnings = [];
        this.messages = [];
    }

    /**
     * assert(condition, message)
     *
     * @this {DiskInfo}
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
     * buildDiskFromBuffer(dbDisk)
     *
     * Build a disk image from a DataBuffer.
     *
     * All callers are now required to convert their data to a DataBuffer first.  For example, if the caller
     * received an ArrayBuffer from a FileReader object, they must first create a DataBuffer from the ArrayBuffer.
     *
     * Here's the initial (simplified) version of this function.  It got much more complicated over time as support
     * for more types of diskettes and hard disks were added:
     *
     *      let defaultGeometry = DiskInfo.GEOMETRIES[db.length];
     *      if (defaultGeometry) {
     *          let ib = 0;
     *          this.cbDiskData = db.length;
     *          this.nCylinders = defaultGeometry[0];
     *          this.nHeads = defaultGeometry[1];
     *          this.nSectors = defaultGeometry[2];
     *          this.cbSector = (defaultGeometry[3] || 512);
     *          this.aDiskData = new Array(this.nCylinders);
     *          for (let iCylinder = 0; iCylinder < this.aDiskData.length; iCylinder++) {
     *              let cylinder = this.aDiskData[iCylinder] = new Array(this.nHeads);
     *              for (let iHead = 0; iHead < cylinder.length; iHead++) {
     *                  let head = cylinder[iHead] = new Array(this.nSectors);
     *                  for (let iSector = 0; iSector < head.length; iSector++) {
     *                      head[iSector] = this.buildSector(iCylinder, iHead, iSector + 1, this.cbSector, db, ib);
     *                      ib += this.cbSector;
     *                  }
     *              }
     *          }
     *          return true;
     *      }
     *
     * @this {DiskInfo}
     * @param {DataBuffer} dbDisk
     * @returns {boolean} true if successful (aDiskData initialized); false otherwise
     */
    buildDiskFromBuffer(dbDisk)
    {
        this.aDiskData = null;
        this.cbDiskData = 0;
        this.dwChecksum = 0;
        this.fromJSON = false;

        let nHeads = 0;
        let nCylinders = 0;
        let nSectorsPerTrack = 0;
        let aTracks = [];                   // track array (used only for disk images with track tables)
        let cbSector = 512;
        let bMediaID = 0;
        let offBootSector = 0;
        let cbDiskData = dbDisk.length, cbPartition = cbDiskData;

        let dbTrack, dbSector;
        let iTrack, cbTrack, offTrack, offSector;

        if (cbDiskData >= DiskInfo.MIN_PARTITION) {
            let wSig = dbDisk.readUInt16LE(DiskInfo.BOOT.SIG_OFFSET);
            if (wSig == DiskInfo.BOOT.SIGNATURE) {
                /**
                 * In this case, the first sector should be an MBR; find the active partition entry,
                 * then read the LBA of the first partition sector to calculate the boot sector offset.
                 */
                for (let offEntry = 0x1BE; offEntry <= 0x1EE; offEntry += 0x10) {
                    if (dbDisk.readUInt8(offEntry) >= 0x80) {
                        offBootSector = dbDisk.readUInt32LE(offEntry + 0x08) * cbSector;
                        cbPartition = dbDisk.readUInt32LE(offEntry + 0x0C) * cbSector;
                        break;
                    }
                }
            }
            /**
             * If we failed to find an active entry, we'll fall into the BPB detection code, which
             * should fail if the first sector really was an MBR.  Otherwise, the BPB should give us
             * the geometry info we need to dump the entire disk image, including the MBR and any
             * other reserved sectors.
             */
        }

        let bByte0 = dbDisk.readUInt8(offBootSector + DiskInfo.BPB.OPCODE);
        let bByte1 = dbDisk.readUInt8(offBootSector + DiskInfo.BPB.OPCODE + 1);
        let cbSectorBPB = dbDisk.readUInt16LE(offBootSector + DiskInfo.BPB.SECBYTES);

        /**
         * These checks are not only necessary for DOS 1.x diskette images (and other pre-BPB images),
         * but also non-DOS diskette images (eg, CPM-86 diskettes).
         *
         * And we must perform these tests BEFORE checking for a BPB, because we want the PHYSICAL geometry
         * of the disk, whereas any values in the BPB may only be LOGICAL. For example, DOS may only be using
         * 8 sectors per track on diskette that's actually formatted with 9 sectors per track.
         *
         * Checking these common sizes insures we get the proper physical geometry for common disk formats,
         * but at some point, we'll need to perform more general calculations to properly deal with ANY disk
         * image whose logical format doesn't agree with its physical structure.
         */
        let fXDFOutput = false;
        let defaultGeometry = DiskInfo.GEOMETRIES[cbDiskData];
        if (!defaultGeometry) {
            /**
             * I've come across some disk images that were .IMD files that I had converted to .IMG using HxC,
             * and everything was fine except that there was 128 bytes of extra "stuff" af the end of the image,
             * defeating our simple geometry check.
             *
             * Example: Microsoft Macro Assembler 1.10 [Tandy 2000 (r01.00.00)] (5.25-360k)/t2kasm_imd.img
             */
            defaultGeometry = DiskInfo.GEOMETRIES[cbDiskData - 0x80];
        }

        if (defaultGeometry) {
            nCylinders = defaultGeometry[0];
            nHeads = defaultGeometry[1];
            nSectorsPerTrack = defaultGeometry[2];
            cbSector = defaultGeometry[3] || cbSector;
            bMediaID = defaultGeometry[4] || bMediaID;
        }

        /**
         * I used to do these BPB tests only if defaultGeometry was undefined, but now I always do them, because
         * I want to make sure they're in agreement (and if not, then figure out why not).
         *
         * See if the first sector of the image contains a valid DOS BPB.  This is tricky, because there are lots
         * of variations.  For now, the checks are simplistic: the first byte is checked for an Intel JMP opcode
         * (0xEB is JMP with a 1-byte displacement, and 0xE9 is JMP with a 2-byte displacement) or an Intel CLD opcode
         * (used by BASIC-DOS), and the sector size (word at offset 0x0B) is checked for any power of two >= 128
         * (the "standard" IBM sector size was 512, but 128, 256, and 1024 were also possible).
         */
        let fBPBExists = false, bMediaIDBPB = 0;

        if ((bByte0 == CPUx86.OPCODE.JMP || bByte0 == CPUx86.OPCODE.JMPS || bByte0 == CPUx86.OPCODE.CLD) && cbSectorBPB >= 128 && (cbSectorBPB & (cbSectorBPB - 1)) == 0) {

            let nHeadsBPB = dbDisk.readUInt16LE(offBootSector + DiskInfo.BPB.DRIVEHEADS);
            let nSectorsPerTrackBPB = dbDisk.readUInt16LE(offBootSector + DiskInfo.BPB.TRACKSECS);

            if (nHeadsBPB && nSectorsPerTrackBPB) {

                fBPBExists = true;
                bMediaIDBPB = dbDisk.readUInt8(offBootSector + DiskInfo.BPB.MEDIA);

                let nSectorsTotalBPB = dbDisk.readUInt16LE(offBootSector + DiskInfo.BPB.DISKSECS);
                if (!nSectorsTotalBPB) {
                    nSectorsTotalBPB = dbDisk.readUInt32LE(offBootSector + DiskInfo.BPB.LARGESECS);
                }
                let nSectorsPerCylinderBPB = nSectorsPerTrackBPB * nHeadsBPB;
                let nSectorsHiddenBPB = dbDisk.readUInt16LE(offBootSector + DiskInfo.BPB.HIDDENSECS);
                let nCylindersBPB = (nSectorsHiddenBPB + nSectorsTotalBPB) / nSectorsPerCylinderBPB;

                if (defaultGeometry) {
                    if (bMediaID && bMediaID != bMediaIDBPB) {
                        this.warnings.push(`BPB media ID (${bMediaIDBPB}) does not match physical media ID (${bMediaID})`);
                    }
                    if (nCylinders != nCylindersBPB) {
                        let info = (nCylinders - nCylindersBPB == 1);
                        this.warnings.push(`BPB cylinders (${nCylindersBPB}) do not match physical cylinders (${nCylinders})`);
                        if (info) {
                            this.messages.push("last cylinder may have been reserved for diagnostics and/or head-parking");
                        }
                    }
                    if (nHeads != nHeadsBPB) {
                        this.warnings.push(`BPB heads (${nHeadsBPB}) do not match physical heads (${nHeads})`);
                    }
                    if (nSectorsPerTrack != nSectorsPerTrackBPB) {
                        this.warnings.push(`BPB sectors/track (${nSectorsPerTrackBPB}) do not match physical sectors/track (${nSectorsPerTrack})`);
                    }
                }
                else {
                    nHeads = nHeadsBPB;
                    nSectorsPerTrack = nSectorsPerTrackBPB;
                    nCylinders = cbDiskData / (nHeads * nSectorsPerTrack * cbSectorBPB);
                    if (nCylinders != (nCylinders|0)) {
                        this.warnings.push(`Total cylinders (${nCylinders}) not a multiple of ${nHeads * nSectorsPerTrack} sectors per cylinder`);
                        nCylinders |= 0;
                    }
                    if (cbSector != cbSectorBPB) {
                        this.warnings.push(`Overriding default sector size (${cbSector}) with BPB sector size (${cbSectorBPB})`);
                        cbSector = cbSectorBPB;
                    }
                    bMediaID = bMediaIDBPB;
                }

                /**
                 * OK, great, the disk appears to contain a valid BPB.  But so do XDF disk images, which are
                 * diskette images with tracks containing:
                 *
                 *      1 8Kb sector (equivalent of 16 512-byte sectors)
                 *      1 2Kb sector (equivalent of 4 512-byte sectors)
                 *      1 1Kb sector (equivalent of 2 512-byte sectors)
                 *      1 512-byte sector (equivalent of, um, 1 512-byte sector)
                 *
                 * for a total of the equivalent of 23 512-byte sectors, or 11776 (0x2E00) bytes per track.
                 * For an 80-track diskette with 2 sides, that works out to a total of 3680 512-byte sectors,
                 * or 1884160 bytes, or 1.84Mb, which is the exact size of the (only) XDF diskette images we
                 * currently (try to) support.
                 *
                 * Moreover, the first two tracks (ie, the first cylinder) contain only 19 sectors each,
                 * rather than 23, but XDF disk images still pads those tracks with 4 unused sectors.
                 *
                 * So, data for the first track contains 1 boot sector ending at 512 (0x200), 11 FAT sectors
                 * ending at 6144 (0x1800), and 7 "micro-disk" sectors ending at 9728 (0x2600).  Then there's
                 * 4 (useless?) sectors that end at 11776 (0x2E00).
                 *
                 * Data for the second track contains 7 root directory sectors ending at 15360 (0x3C00), followed
                 * by disk data.
                 *
                 * For more details, check out this helpful article: http://www.os2museum.com/wp/the-xdf-diskette-format/
                 */
                if (nSectorsTotalBPB == 3680 && this.fXDFSupport) {
                    this.warnings.push("XDF diskette detected, experimental XDF support enabled");
                    fXDFOutput = true;
                }
            }
        }

        /**
         * Let's see if we can find a corresponding BPB in our table of default BPBs.
         */
        let iBPB = -1;
        for (let i = 0; i < DiskInfo.aDefaultBPBs.length; i++) {
            if (DiskInfo.aDefaultBPBs[i][DiskInfo.BPB.MEDIA] == bMediaID) {
                let cbDiskBPB = (DiskInfo.aDefaultBPBs[i][DiskInfo.BPB.DISKSECS] + (DiskInfo.aDefaultBPBs[i][DiskInfo.BPB.DISKSECS + 1] * 0x100)) * cbSector;
                if (cbDiskBPB == cbDiskData) {
                    /**
                        * This code was added to deal with variations in sectors/cluster.  Most software manufacturers
                        * were happy with the defaults that FORMAT chooses for a given diskette size, but in a few cases
                        * (eg, PC DOS 4.00 360K diskettes, PC DOS 4.01 720K diskettes, etc), the manufacturer (IBM) opted
                        * for a smaller cluster size.
                        */
                    if (!fBPBExists || dbDisk.readUInt8(offBootSector + DiskInfo.BPB.CLUSSECS) == DiskInfo.aDefaultBPBs[i][DiskInfo.BPB.CLUSSECS]) {
                        iBPB = i;
                        break;
                    }
                }
            }
        }

        let nLogicalSectorsPerTrack = nSectorsPerTrack;

        if (iBPB >= 0) {
            /**
             * Sometimes we come across a physical 360Kb disk image that contains a logical 320Kb image (and similarly,
             * a physical 180Kb disk image that contains a logical 160Kb disk image), presumably because it was possible
             * for someone to take a diskette formatted with 9 sectors/track and then use FORMAT or DISKCOPY to create
             * a smaller file system on it (ie, using only 8 sectors/track).
             */
            if (!bMediaIDBPB) bMediaIDBPB = dbDisk.readUInt8(offBootSector + 512);
            if (iBPB >= 2 && bMediaIDBPB == DiskInfo.FAT.MEDIA_320KB && bMediaID == DiskInfo.FAT.MEDIA_360KB || bMediaIDBPB == DiskInfo.FAT.MEDIA_160KB && bMediaID == DiskInfo.FAT.MEDIA_180KB) {
                iBPB -= 2;
                bMediaID = DiskInfo.aDefaultBPBs[iBPB][DiskInfo.BPB.MEDIA];
                nLogicalSectorsPerTrack = DiskInfo.aDefaultBPBs[iBPB][DiskInfo.BPB.TRACKSECS];
                this.warnings.push(`Shrinking track size to ${nLogicalSectorsPerTrack} sectors/track`);
            }
            let fBPBWarning = false;
            if (fBPBExists) {
                /**
                 * In deference to the PC DOS 2.0 BPB behavior discussed above, we stop our BPB verification after
                 * the first word of HIDDENSECS.
                 */
                for (let off = DiskInfo.BPB.SECBYTES; off < DiskInfo.BPB.HIDDENSECS + 2; off++) {
                    let bDefault = DiskInfo.aDefaultBPBs[iBPB][off];
                    let bActual = dbDisk.readUInt8(offBootSector + off);
                    if (bDefault != bActual) {
                        this.warnings.push(`BPB byte ${off} default (${bDefault}) does not match actual byte: ${bActual}`);
                        /**
                         * Silly me for thinking that a given media ID (eg, 0xF9) AND a given disk size (eg, 720K)
                         * AND a given number of sectors/cluster (eg, 2) would always map to the same BPB.  I had already
                         * added *two* 720K BPBs -- one for the common case of 2 sectors/cluster and another for 720K
                         * disks like PC DOS 4.01 which use 1 sector/cluster -- but it turns out there are even more
                         * variations.  For example, the number of root directory entries: I was under the impression that
                         * the "standard" value was 0x70, but the number used by PC DOS 3.3 is 0xE0 entries (exactly
                         * twice as many).
                         *
                         * And while it doesn't much matter which BPB variation we use when we're *building* a new disk OR
                         * sprucing up a disk that never had a BPB anyway, it's a much more serious matter when there's
                         * an existing BPB.  So I have narrowed the conditions where fBPBWarning is set, thereby reducing
                         * the odds of damaging a good BPB versus repairing or replacing a bad one.
                         */
                        if (off != DiskInfo.BPB.FATS && off != DiskInfo.BPB.DIRENTS) fBPBWarning = true;
                    }
                }
            }
            if (!fBPBExists || fBPBWarning) {
                this.messages.push(`Unrecognized boot sector (${bByte0.toString(16)},${bByte1.toString(16)})`);
            }
        }

        offTrack = 0;
        if (!nHeads) {
            /**
             * Next, check for a DSK header (an old private format I used to use, which begins with either
             * 0x00 (read-write) or 0x01 (write-protected), followed by 7 more bytes):
             *
             *      0x01: # heads (1 byte)
             *      0x02: # cylinders (2 bytes)
             *      0x04: # sectors/track (2 bytes)
             *      0x06: # bytes/sector (2 bytes)
             *
             * which may be followed by an array of track table entries if the words at 0x04 and 0x06 are zero.
             * If the track table exists, each entry contains the following:
             *
             *      0x00: # sectors/track (2 bytes)
             *      0x02: # bytes/sector (2 bytes)
             *      0x04: file offset of track data (4 bytes)
             *
             * TODO: Our new JSON disk format should probably include a write-protect indicator.  Instead, we
             * (used to) include the string "write-protected" as a comment in the first line of the JSON data
             * as a work-around, and if the FDC component sees that comment string, it will honor it; however,
             * we now prefer that read-only disk images simply include a "-readonly" suffix in the filename.
             */
            if (!(bByte0 & 0xFE)) {
                let cbSectorDSK = dbDisk.readUInt16LE(offBootSector + 0x06);
                if (!(cbSectorDSK & (cbSectorDSK - 1))) {
                    cbSector = cbSectorDSK;
                    nHeads = dbDisk.readUInt8(offBootSector + 0x01);
                    nCylinders = dbDisk.readUInt16LE(offBootSector + 0x02);
                    nLogicalSectorsPerTrack = nSectorsPerTrack = dbDisk.readUInt16LE(offBootSector + 0x04);
                    let nTracks = nHeads * nCylinders;
                    cbTrack = nSectorsPerTrack * cbSector;
                    offTrack = 0x08;
                    if (!cbTrack) {
                        for (iTrack = 0; iTrack < nTracks; iTrack++) {
                            nLogicalSectorsPerTrack = nSectorsPerTrack = dbDisk.readUInt16LE(offTrack);
                            cbSectorDSK = dbDisk.readUInt16LE(offTrack+2);
                            cbTrack = nSectorsPerTrack * cbSectorDSK;
                            offSector = dbDisk.readUInt32LE(offTrack+4);
                            dbTrack = dbDisk.slice(offSector, offSector + cbTrack);
                            aTracks[iTrack] = [nSectorsPerTrack, cbSectorDSK, dbTrack];
                            offTrack += 8;
                        }
                    }
                }
            }
        }

        if (nHeads) {
            /**
             * Output the disk data as an array of cylinders, each containing an array of tracks (one track per head),
             * and each track containing an array of sectors.
             */
            iTrack = 0;
            cbTrack = nSectorsPerTrack * cbSector;
            this.aDiskData = new Array(nCylinders);
            this.nCylinders = nCylinders;

            for (let iCylinder=0; iCylinder < nCylinders; iCylinder++) {
                let aHeads = new Array(nHeads);
                this.aDiskData[iCylinder] = aHeads;
                this.nHeads = nHeads;

                let offHead = 0;
                for (let iHead=0; iHead < nHeads; iHead++) {
                    if (aTracks.length) {
                        let aTrack = aTracks[iTrack++];
                        nLogicalSectorsPerTrack = nSectorsPerTrack = aTrack[0];
                        cbSector = aTrack[1];
                        dbTrack = aTrack[2];
                        cbTrack = nSectorsPerTrack * cbSector;
                    } else {
                        dbTrack = dbDisk.slice(offTrack + offHead, offTrack + offHead + cbTrack);
                    }

                    let aSectors = new Array(nLogicalSectorsPerTrack);
                    aHeads[iHead] = aSectors;
                    this.nSectors = nLogicalSectorsPerTrack;

                    /**
                     * For most disks, the size of every sector and the number of sectors/track are consistent, and the
                     * sector number encoded in every sector (nSector) matches the 1-based sector index (iSector) we use
                     * to "track" our progress through the current track.  However, for XDF disk images, the above is
                     * NOT true beyond cylinder 0, which is why we have all these *ThisTrack variables, which would otherwise
                     * be unnecessary.
                     */
                    let cbSectorThisTrack = cbSector;
                    let nSectorsThisTrack = nLogicalSectorsPerTrack;
                    this.cbSector = cbSector;

                    /**
                     * Notes regarding XDF track layouts, from http://forum.kryoflux.com/viewtopic.php?f=3&t=234:
                     *
                     *      Track 0, side 0: 19x512 bytes per sector, with standard numbering for the first 8 sectors, then custom numbering
                     *      Track 0, side 1: 19x512 bytes per sector, with interleaved sector numbering 0x81...0x93
                     *
                     *      Track 1 and up, side 0, 4 sectors per track:
                     *      1x1024, 1x512, 1x2048, 1x8192 bytes per sector (0x83, 0x82, 084, 0x86 as sector numbers)
                     *
                     *      Track 1 and up, side 1, 4 sectors per track:
                     *      1x2048, 1x512, 1x1024, 1x8192 bytes per sector (0x84, 0x82, 083, 0x86 as sector numbers)
                     *
                     * Notes regarding the order in which XDF sectors are read (from http://mail.netbridge.at/cgi-bin/info2www?(fdutils)XDF),
                     * where each position column represents a (roughly) 128-byte section of the track:
                     *
                     *          1         2         3         4
                     * 1234567890123456789012345678901234567890 (position)
                     * ----------------------------------------
                     * 6633332244444446666666666666666666666666 (side 0)
                     * 6666444444422333366666666666666666666666 (side 1)
                     *
                     * where 2's contain a 512-byte sector, 3's contain a 1Kb sector, 4's contains a 2Kb sector, and 6's contain an 8Kb sector.
                     *
                     * Reading all the data on an XDF cylinder occurs in the following order, from the specified start to end positions:
                     *
                     *     sector    head   start     end
                     *          3       0       3       7
                     *          4       0       9      16
                     *          6       1      18       5 (1st wrap around)
                     *          2       0       7       9
                     *          2       1      12      14
                     *          6       0      16       3 (2nd wrap around)
                     *          4       1       5      12
                     *          3       1      14      18
                     */
                    if (fXDFOutput) nSectorsThisTrack = (iCylinder? 4 : 19);

                    let suppTrack = null;
                    for (let iSector=1, offSector=0; iSector <= nSectorsThisTrack && (offSector < cbTrack || suppTrack); iSector++, offSector += cbSectorThisTrack) {

                        let sectorID = iSector;

                        if (fXDFOutput && iCylinder) {
                            if (!iHead) {
                                cbSectorThisTrack = (iSector == 1? 1024 : (iSector == 2? 512 : (iSector == 3? 2048 : 8192)));
                            } else {
                                cbSectorThisTrack = (iSector == 1? 8192 : (iSector == 2? 2048 : (iSector == 3? 1024 : 512)));
                            }
                            sectorID = (cbSectorThisTrack == 512? 2 : (cbSectorThisTrack == 1024? 3 : (cbSectorThisTrack == 2048? 4 : 6)));
                        }

                        /**
                         * Check for any sector ID edits that must be applied to the disk (eg, "--sectorID=C:H:S:ID").
                         *
                         * For example, when building the IBM Multiplan 1.00 Program disk, "--sectorID=11:0:8:61" must be specified.
                         */
                        dbSector = dbTrack.slice(offSector, offSector + cbSectorThisTrack);

                        /**
                         * NOTE: This code is broken if the disks's reserved sector count is anything other than 1, because
                         * it assumes that the first FAT sector immediately follows the boot sector.  However, we never use
                         * a value other than 1 anyway, because I've yet to find a version DOS (at least DOS 2.x or 3.x) that
                         * actually honors the BPB's reserved sector count.  So there's ample brokenness to go around.
                         */
                        if (bMediaID && !iCylinder && !iHead && iSector == ((offBootSector/cbSector)|0) + 2) {
                            let bFATID = dbSector.readUInt8(0);
                            if (bMediaID != bFATID) {
                                this.warnings.push(`FAT ID (${bFATID}) does not match physical media ID (${bMediaID})`);
                            }
                            bMediaID = 0;
                        }
                        let sector = this.buildSector(iCylinder, iHead, sectorID, cbSectorThisTrack, dbSector);
                        aSectors[iSector - 1] = sector;
                        this.cbDiskData += sector[DiskInfo.SECTOR.LENGTH];
                    }
                    offHead += cbTrack;         // end of head {iHead}, track {iCylinder}
                }
                offTrack += offHead;            // end of cylinder {iCylinder}
            }
            return true;
        }
        // else if (dbDisk.readUInt16BE(0x900) == 0x4357) {
        //     return this.convertOSIDiskToJSON();
        // }
        return false;
    }

    /**
     * buildDiskFromJSON(imageData, fCopyData)
     *
     * Build a disk image from a JSON object (parsed or unparsed).
     *
     * @this {DiskInfo}
     * @param {Object|string} imageData
     * @param {boolean} [fCopyData]
     * @returns {boolean} true if successful (aDiskData initialized); false otherwise
     */
    buildDiskFromJSON(imageData, fCopyData = false)
    {
        this.aDiskData = null;
        this.cbDiskData = 0;
        this.dwChecksum = 0;
        this.fromJSON = false;

        if (typeof imageData == "string") {
            try {
                imageData = JSON.parse(imageData);
            } catch(e) {
                try {
                    imageData = JSON.parse(imageData.replace(/([a-z]+):/gm, "\"$1\":").replace(/\/\/[^\n]*/gm, ""));
                } catch(error) {
                    this.warnings.push(error.message);
                }
            }
        }

        if (imageData) {
            /**
             * We now differentiate between "legacy" JSON images (which were simply arrays of CHS data)
             * and "v2" JSON images, which are objects with a CHS diskData property, among other things.
             */
            let imageInfo = imageData[DiskInfo.DESC.IMAGE];
            if (imageInfo) {
                if (imageInfo.hash) this.hash = imageInfo.hash;
                if (!this.volTable.length && imageData.volTable) {
                    let volTable = imageData.volTable;
                    for (let iVol = 0; iVol < volTable.length; iVol++) {
                        if (volTable[iVol].iPartition == undefined) volTable[iVol].iPartition = -1;
                    }
                    this.volTable = volTable;
                }
                this.tablesBuilt = this.fromJSON = this.buildFileTableFromJSON(imageData[DiskInfo.DESC.FILES]);
            }
            let aDiskData = imageData[DiskInfo.DESC.DISKDATA] || imageData;
            if (aDiskData && aDiskData.length) {
                /**
                 * If fCopyData is false (the default), then we take aDiskData as-is (presumably it was freshly loaded);
                 * otherwise, we copy all the sector objects, in case the data came from a running machine that added its
                 * own properties to the sector objects.
                 */
                if (fCopyData) {
                    let aCylinders = aDiskData;
                    let aCopyData = new Array(aCylinders.length);
                    for (let iCylinder = 0; iCylinder < aCylinders.length; iCylinder++) {
                        let aHeads = aCylinders[iCylinder];
                        aCopyData[iCylinder] = new Array(aHeads.length);
                        for (let iHead = 0; iHead < aHeads.length; iHead++) {
                            let aSectors = aHeads[iHead];
                            aCopyData[iCylinder][iHead] = new Array(aSectors.length);
                            for (let iSector = 0; iSector < aSectors.length; iSector++) {
                                let sector = aSectors[iSector];
                                aCopyData[iCylinder][iHead][iSector] = {
                                    [DiskInfo.SECTOR.CYLINDER]: sector[DiskInfo.SECTOR.CYLINDER],
                                    [DiskInfo.SECTOR.HEAD]: sector[DiskInfo.SECTOR.HEAD],
                                    [DiskInfo.SECTOR.ID]: sector[DiskInfo.SECTOR.ID],
                                    [DiskInfo.SECTOR.LENGTH]: sector[DiskInfo.SECTOR.LENGTH],
                                    [DiskInfo.SECTOR.DATA]: sector[DiskInfo.SECTOR.DATA],
                                    'pattern': sector['pattern']
                                };
                            }
                        }
                    }
                    aDiskData = aCopyData;
                }
                let aCylinders = aDiskData;
                this.aDiskData = aDiskData;
                this.nCylinders = aCylinders.length;
                this.nSectors = this.cbSector = 0;
                for (let iCylinder = 0; iCylinder < aCylinders.length; iCylinder++) {
                    let aHeads = aCylinders[iCylinder];
                    this.nHeads = aHeads.length;
                    for (let iHead = 0; iHead < aHeads.length; iHead++) {
                        let aSectors = aHeads[iHead];
                        let nSectors = aSectors.length;
                        if (!this.nSectors) {
                            this.nSectors = nSectors;
                        } else if (this.nSectors != nSectors) {
                            this.messages.push(`${iCylinder}:${iHead} has non-standard sector count: ${nSectors}`);
                        }
                        for (let iSector = 0; iSector < aSectors.length; iSector++) {
                            let sector = aSectors[iSector], cbSector = 0;
                            if (sector) {
                                this.rebuildSector(iCylinder, iHead, sector);
                                cbSector = sector[DiskInfo.SECTOR.LENGTH];
                            }
                            if (!this.cbSector && cbSector) {
                                this.cbSector = cbSector;
                            } else if (this.cbSector != cbSector) {
                                this.messages.push(`${iCylinder}:${iHead}:${sector? sector[DiskInfo.SECTOR.ID] : (iSector+1)} has non-standard sector size: ${cbSector}`);
                            }
                            this.cbDiskData += cbSector;
                        }
                    }
                }
                return true;
            }
        }
        return false;
    }

    /**
     * buildFileTableFromJSON(fileTable)
     *
     * Convert an array of JSON FILEDESC objects to FileInfo objects.
     *
     * @this {DiskInfo}
     * @param {Array.<Object>} fileTable
     * @returns {boolean}
     */
    buildFileTableFromJSON(fileTable)
    {
        if (fileTable) {
            if (!this.fileTable.length) {
                for (let i = 0; i < fileTable.length; i++) {
                    let desc = fileTable[i];
                    let vol = desc[DiskInfo.FILEDESC.VOL] || 0;
                    let name = desc[DiskInfo.FILEDESC.PATH].replace(/^.*?\/?([^/]*)$/, "$1");
                    let path = desc[DiskInfo.FILEDESC.PATH].replace(/\//g, '\\');
                    let attr = +desc[DiskInfo.FILEDESC.ATTR];
                    /**
                     * parseDate() *must* return local time (the second parameter must be true), because we've changed
                     * everything else to use local time (eg, getFileListing()).
                     */
                    let date = Format.parseDate(desc[DiskInfo.FILEDESC.DATE], true);
                    let size = desc[DiskInfo.FILEDESC.SIZE] || 0;
                    let file = new FileInfo(this, vol, path, name, attr, date, size);
                    file.index = i;
                    fileTable[i] = file;
                    let hash = desc[DiskInfo.FILEDESC.HASH];
                    if (hash) file.hash = hash;
                }
                this.fileTable = fileTable;
            }
            return true;
        }
        return false;
    }

    /**
     * buildTables()
     *
     * This function builds a complete file table from all FAT volumes found on the current disk, and then
     * updates all the sector objects with references to the corresponding file and offset.
     *
     * More recently, the FileInfo objects in the table have been enhanced to include debugging information if
     * the file is an EXE or DLL, which we determine merely by checking the file extension.
     *
     * Note that while most of the methods in this module use CHS-style parameters, because our primary clients
     * are old disk controllers that deal exclusively with cylinder/head/sector values, here we use 0-based
     * "volume" sector numbers for volume-relative block addresses (aka VBAs or Volume Block Addresses), and
     * 0-based "logical" sector numbers for disk-relative block addresses (aka LBAs or Logical Block Addresses).
     *
     * NOTE: It's now possible to reconstitute these tables from our newer "v2" JSON images, if that was the
     * source of the image.  See buildDiskFromJSON(), which in turn calls buildFileTableFromJSON() when a new
     * JSON disk image is loaded.
     *
     * @this {DiskInfo}
     * @returns {number} (-1 if error, otherwise number of files found across all volumes)
     */
    buildTables()
    {
        if (!this.fileTable.length && !this.tablesBuilt) {

            /**
             * The built flag avoids rebuilding tables needlessly for volumes that simply have zero files.
             */
            this.tablesBuilt = true;

            let sectorBoot = this.getSector(0);
            if (!sectorBoot) {
                this.warnings.push(`Unable to read boot sector`);
                return -1;
            }

            /**
             * Process all recognized volumes.
             *
             * NOTE: Our file table currently supports only files on FAT volumes, and there is only one file
             * table for all FAT volumes; every FileInfo object contains a volume index to indicate the volume.
             */
            let iVolume = 0;
            while (true) {
                let vol = this.buildVolume(iVolume, sectorBoot);
                if (!vol || vol.iPartition < 0) break;
                iVolume++;
            }

            /**
             * For all files in the file table, create the sector-to-file mappings now.
             */
            for (let iFile = 0; iFile < this.fileTable.length; iFile++) {
                let file = this.fileTable[iFile], off = 0;
                if (file.name == "." || file.name == "..") continue;
                for (let iSector = 0; iSector < file.aLBA.length; iSector++) {
                    if (!this.updateSector(iFile, off, file.aLBA[iSector])) {
                        break;
                    }
                    off += this.cbSector;
                }
                file.loadSymbols();
            }
        }
        return this.fileTable.length;
    }

    /**
     * buildVolume(iVolume, sectorBoot)
     *
     * @this {DiskInfo}
     * @param {number} iVolume
     * @param {Sector} sectorBoot
     * @returns {VolInfo|null}
     */
    buildVolume(iVolume, sectorBoot)
    {
        let idMedia = 0;
        let cbDisk = this.nCylinders * this.nHeads * this.nSectors * this.cbSector;
        let vol = /** @type {VolInfo} */({iVolume, iPartition: -1, idMedia: 0, lbaStart: 0, lbaTotal: 0});

        if (iVolume == 0) {

            vol.idMedia = this.getSectorData(sectorBoot, DiskInfo.BPB.MEDIA, 1);
            vol.cbSector = this.getSectorData(sectorBoot, DiskInfo.BPB.SECBYTES, 2);

            if (vol.cbSector != this.cbSector || !this.checkMediaID(vol.idMedia)) {
                /**
                 * When the first sector doesn't appear to contain a valid BPB, the most likely explanations are:
                 *
                 *      1. The image is from a diskette formatted by DOS 1.x, which didn't use BPBs
                 *      2. The image is a fixed (partitioned) disk and the first sector is actually an MBR
                 *      3. The image is from a diskette that used a non-standard boot sector (or sector size)
                 *
                 * We start by assuming it's a DOS 1.x diskette (or a DOS diskette with a non-standard boot sector),
                 * so we'll check ALL our default (diskette) BPBs.  If the diskette looks like a match (both in terms
                 * of FAT ID and total disk size), then we'll extract the remaining BPB defaults.
                 */
                vol.idMedia = 0;
                vol.vbaFAT = 1;
                vol.nFATBits = 12;
                vol.cbSector == this.cbSector;
                idMedia = this.getClusterEntry(vol, 0, 0);
                for (let i = 0; i < DiskInfo.aDefaultBPBs.length; i++) {
                    let bpb = DiskInfo.aDefaultBPBs[i];
                    if (bpb[DiskInfo.BPB.MEDIA] == idMedia || !bpb[DiskInfo.BPB.MEDIA] && idMedia >= 0xF8) {
                        let cbDiskBPB = (bpb[DiskInfo.BPB.DISKSECS] + (bpb[DiskInfo.BPB.DISKSECS + 1] * 0x100)) * this.cbSector;
                        /**
                         * With such a heavy reliance on a single byte (idMedia) from the first FAT sector, we're going to
                         * believe this BPB match only for disks <= 360K.  I would have limited it to 320K (the largest
                         * that DOS 1.x supported), but there's the 360K Microsoft Chart 2.02 disk image (and a few others),
                         * which are a bit "off", so there you go.
                         */
                        if (cbDiskBPB == cbDisk && (cbDisk <= 360 * 1024 || !bpb[DiskInfo.BPB.MEDIA])) {
                            vol.idMedia = idMedia;
                            /**
                             * NOTE: Like DISKSECS, FATSECS and DIRENTS are 2-byte fields; but unlike DISKSECS,
                             * their upper byte is zero in all our default (diskette) BPBs, so there's no need to fetch them.
                             */
                            vol.vbaRoot = vol.vbaFAT + bpb[DiskInfo.BPB.FATSECS] * bpb[DiskInfo.BPB.FATS];
                            vol.clusSecs = bpb[DiskInfo.BPB.CLUSSECS];
                            vol.lbaTotal = cbDiskBPB / this.cbSector;
                            vol.rootEntries = bpb[DiskInfo.BPB.DIRENTS];
                            vol.cbSector = this.cbSector;
                            break;
                        }
                    }
                }
            }
        }

        let iVolFound = 0;
        if (!vol.idMedia) {

            idMedia = 0;
            vol.nFATBits = 0;
            vol.cbSector = this.cbSector;

            /**
             * So, this is either a fixed (partitioned) disk, or a disk using a non-standard sector size.
             *
             * Let's assume the former (ie, we have an MBR) and check for partition records.  We will do this check
             * in two phases: checking for "primary" partition records first, and for "extended" partition records next.
             */
            let iEntry;
            let maxIterations = 48;     // circuit breaker tripped after 24 potential volumes (with 2 phases per volume)
            let lbaPrimary = 0, lbaExtended = 0;

            for (let iPhase = 0; iPhase <= 1; iPhase++) {

                iEntry = 0;
                while (iEntry < 4) {

                    let lba;
                    let off = DiskInfo.MBR.PARTITIONS.OFFSET + iEntry * DiskInfo.MBR.PARTITIONS.ENTRY_LENGTH;
                    let bStatus = this.getSectorData(sectorBoot, off + DiskInfo.MBR.PARTITIONS.ENTRY.STATUS, 1);

                    if (bStatus == DiskInfo.MBR.PARTITIONS.STATUS.ACTIVE || bStatus == DiskInfo.MBR.PARTITIONS.STATUS.INACTIVE) {

                        let bType = this.getSectorData(sectorBoot, off + DiskInfo.MBR.PARTITIONS.ENTRY.TYPE, 1);

                        if (bType == DiskInfo.MBR.PARTITIONS.TYPE.FAT12_PRIMARY ||
                            bType == DiskInfo.MBR.PARTITIONS.TYPE.FAT16_PRIMARY || bType == DiskInfo.MBR.PARTITIONS.TYPE.FAT16_BIG) {
                            if (iPhase == 0 && iVolFound++ == iVolume) {
                                lba = this.getSectorData(sectorBoot, off + DiskInfo.MBR.PARTITIONS.ENTRY.VBA_FIRST, 4);
                                vol.lbaStart = lba + lbaPrimary;
                                sectorBoot = this.getSector(vol.lbaStart);
                                if (!sectorBoot) break;     // something's wrong
                                if (this.getSectorData(sectorBoot, DiskInfo.BPB.SECBYTES, 2) != this.cbSector) {
                                    sectorBoot = null;      // sectorBoot should have contained a DOS boot sector with BPB, but apparently not
                                }
                                vol.nFATBits = (bType == DiskInfo.MBR.PARTITIONS.TYPE.FAT12_PRIMARY)? 12 : 16;
                                break;
                            }
                        }
                        if (bType == DiskInfo.MBR.PARTITIONS.TYPE.EXTENDED) {
                            if (iPhase == 1) {
                                lba = this.getSectorData(sectorBoot, off + DiskInfo.MBR.PARTITIONS.ENTRY.VBA_FIRST, 4);
                                lbaPrimary = lba + lbaExtended;
                                if (!lbaExtended) lbaExtended = lbaPrimary;
                                sectorBoot = this.getSector(lbaPrimary);
                                if (!sectorBoot) break;     // something's wrong
                                iEntry = iPhase = 0;        // sectorBoot should contain another (extended) boot record table
                                continue;
                            }
                        }
                    }
                    iEntry++;
                }
                if (iEntry < 4 || !--maxIterations) break;
            }

            if (!sectorBoot || iEntry == 4) {
                if (!iVolume) this.warnings.push(`${cbDisk}-byte disk image contains unknown volume(s)`);
                return null;
            }

            vol.sectorFATCache = null;  // since vol.lbsStart may have changed, these cache variables must be flushed as well
        }

        vol.iPartition = iVolFound - 1;

        if (!vol.lbaTotal) {
            vol.idMedia = this.getSectorData(sectorBoot, DiskInfo.BPB.MEDIA, 1);
            vol.lbaTotal = this.getSectorData(sectorBoot, DiskInfo.BPB.DISKSECS, 2) || this.getSectorData(sectorBoot, DiskInfo.BPB.LARGESECS, 4);
            vol.vbaFAT = this.getSectorData(sectorBoot, DiskInfo.BPB.RESSECS, 2);
            vol.vbaRoot = vol.vbaFAT + this.getSectorData(sectorBoot, DiskInfo.BPB.FATSECS, 2) * this.getSectorData(sectorBoot, DiskInfo.BPB.FATS, 1);
            vol.rootEntries = this.getSectorData(sectorBoot, DiskInfo.BPB.DIRENTS, 2);
            vol.clusSecs = this.getSectorData(sectorBoot, DiskInfo.BPB.CLUSSECS, 1);
        }

        vol.vbaData = vol.vbaRoot + (((vol.rootEntries * DiskInfo.DIRENT.LENGTH + (vol.cbSector - 1)) / vol.cbSector) | 0);
        vol.clusTotal = (((vol.lbaTotal - vol.vbaData) / vol.clusSecs) | 0);

        /**
         * In all FATs, the first valid cluster number is 2, as 0 is used to indicate a free cluster and 1 is reserved.
         *
         * In a 12-bit FAT chain, the largest valid cluster number (clusMax) is 0xFF6; 0xFF7 is reserved for marking
         * bad clusters and should NEVER appear in a cluster chain, and 0xFF8-0xFFF are used to indicate the end of a chain.
         * Reports that cluster numbers 0xFF0-0xFF6 are "reserved" (eg, http://support.microsoft.com/KB/65541) should be
         * ignored; those numbers may have been considered "reserved" at some early point in FAT's history, but no longer.
         *
         * Since 12 bits yield 4096 possible values, and since 11 of the values (0, 1, and 0xFF7-0xFFF) cannot be used to
         * refer to an actual cluster, that leaves a theoretical maximum of 4085 clusters for a 12-bit FAT.  However, for
         * reasons that only a small (and shrinking -- RIP AAR) number of people know, the actual cut-off is 4084.
         *
         * So, a FAT volume with 4084 or fewer clusters uses a 12-bit FAT, a FAT volume with 4085 to 65524 clusters uses
         * a 16-bit FAT, and a FAT volume with more than 65524 clusters uses a 32-bit FAT.
         *
         * UPDATE: I've changed the partition code above to zero nFATBits and *provisionally* set it to a value based on
         * partition type, but only because I want to catch inconsistencies between partition records and volumes; we still
         * (re)set nFATBits below according to the number of clusters.
         *
         * TODO: Eventually add support for FAT32.
         */

        if (vol.nFATBits) {
            if (vol.nFATBits == 12 && vol.clusTotal > DiskInfo.FAT12.MAX_CLUSTERS || vol.nFATBits == 16 && vol.clusTotal <= DiskInfo.FAT12.MAX_CLUSTERS) {
                this.warnings.push(`volume ${iVolume} ${vol.nFATBits}-bit FAT inconsistent with cluster total (${vol.clusTotal})`);
            }
        }

        vol.nFATBits = (vol.clusTotal <= DiskInfo.FAT12.MAX_CLUSTERS)? 12 : 16;
        vol.clusMax = (vol.nFATBits == 12)? DiskInfo.FAT12.CLUSNUM_MAX : DiskInfo.FAT16.CLUSNUM_MAX;

        if (!idMedia) idMedia = this.getClusterEntry(vol, 0, 0);

        if (idMedia != vol.idMedia) {
            this.warnings.push(`volume ${iVolume} FAT ID (${idMedia}) does not match media ID (${vol.idMedia})`);
            return null;
        }

        /**
         * The following assertion is here only to catch anomalies; it is NOT a requirement that the number of data sectors
         * be a perfect multiple of clusSecs, but if it ever happens, it's worth verifying we didn't miscalculate something.
         */
        let nWasted = (vol.lbaTotal - vol.vbaData) % vol.clusSecs;
        if (nWasted) {
            this.messages.push(`volume ${iVolume} contains ${vol.lbaTotal}, wasting ${nWasted} sectors`);
        }

        /**
         * Similarly, it is NOT a requirement that the size of all root directory entries be a perfect multiple of the sector
         * size (cbSector), but it may indicate a problem if it's not.  Note that when it comes time to read the root directory,
         * we treat it exactly like any other directory; that is, we ignore the rootEntries value and scan the entire contents of
         * every sector allocated to the directory.  TODO: Determine whether DOS reads all root sector contents or only rootEntries
         * (ie, create a test volume where rootEntries * 32 is NOT a multiple of cbSector and watch what happens).
         */
        this.assert(!((vol.rootEntries * DiskInfo.DIRENT.LENGTH) % vol.cbSector));

        this.volTable.push(vol);

        let aLBA = [];
        for (let vba = vol.vbaRoot; vba < vol.vbaData; vba++) aLBA.push(vol.lbaStart + vba);
        this.getDir(vol, aLBA);

        /**
         * Calculate free (unused) space, as well as total "bad" space.
         *
         * Some disks, like FLICKERFREE.img, mark all their unused clusters as bad, perhaps to discourage anyone
         * from writing to the disk.  Here's what CHKDSK reports for the FLICKERFREE diskette:
         *
         *      Volume FlickerFree created Apr 1, 1986 12:00a
         *
         *         179712 bytes total disk space
         *              0 bytes in 1 hidden files
         *          48128 bytes in 5 user files
         *         131584 bytes in bad sectors
         *              0 bytes available on disk
         *
         *         262144 bytes total memory
         *         237568 bytes free
         *
         * And it's a bit of misnomer to list the total as "bad sectors", because the unit of "badness" is a cluster,
         * not a sector, and while for floppies, it's usually true that a cluster is the same size as a sector, that's
         * not true in general.
         */
        vol.clusBad = 0, vol.clusFree = 0;
        for (let cluster = 2; cluster < vol.clusTotal + 2; cluster++) {
            let clusterNext = this.getClusterEntry(vol, cluster, 0) | this.getClusterEntry(vol, cluster, 1);
            if (!clusterNext) {
                vol.clusFree++;
            } else if (clusterNext == vol.clusMax + 1) {
                vol.clusBad++;
            }
        }
        this.messages.push(`volume ${iVolume}: ${vol.clusBad} cluster(s) bad, ${vol.clusFree} cluster(s) free, ${vol.clusFree * vol.clusSecs * vol.cbSector} bytes free`);
        return vol;
    }

    /**
     * checkMediaID(idMedia)
     *
     * @this {DiskInfo}
     * @param {number} idMedia
     * @returns {boolean} (true if idMedia is valid, false if not)
     */
    checkMediaID(idMedia)
    {
        for (let type in DiskInfo.FAT) {
            if (idMedia == DiskInfo.FAT[type]) return true;
        }
        return false;
    }

    /**
     * getDir(vol, aLBA, dir, path)
     *
     * @this {DiskInfo}
     * @param {VolInfo} vol
     * @param {Array.<number>} aLBA
     * @param {DirInfo} [dir]
     * @param {string} [path]
     */
    getDir(vol, aLBA, dir = {}, path = "")
    {
        let file;
        let iStart = this.fileTable.length;
        let nEntriesPerSector = (vol.cbSector / DiskInfo.DIRENT.LENGTH) | 0;
        dir.path = path + "\\";
        for (let iSector = 0; iSector < aLBA.length; iSector++) {
            let lba = aLBA[iSector];
            for (let iEntry = 0; iEntry < nEntriesPerSector; iEntry++) {
                if (!this.getDirEntry(vol, dir, lba, iEntry)) {
                    iSector = aLBA.length;
                    break;
                }
                if (dir.name == null) continue;
                if (dir.attr == DiskInfo.ATTR.LFN) continue;
                let name = CharSet.fromCP437(dir.name);
                let path = CharSet.fromCP437(dir.path) + name;
                let warnings = [];
                let dateMod = DiskInfo.DirEntry.parseDOSDateTime(dir.modDate, dir.modTime, warnings);
                file = new FileInfo(this, vol.iVolume, path, name, dir.attr, dateMod, dir.size, dir.cluster, dir.aLBA);
                file.warnings = file.warnings.concat(warnings);
                file.index = this.fileTable.length;
                this.fileTable.push(file);
            }
        }

        let iEnd = this.fileTable.length;

        for (let i = iStart; i < iEnd; i++) {
            file = this.fileTable[i];
            if ((file.attr & DiskInfo.ATTR.SUBDIR) && file.aLBA.length && file.name != "." && file.name != "..") {
                this.getDir(vol, file.aLBA, dir, path + "\\" + file.name);
            }
        }
    }

    /**
     * getDirEntry(vol, dir, lba, i)
     *
     * This sets the following properties on the 'dir' object:
     *
     *      name (null if invalid/deleted entry)
     *      attr
     *      modDate
     *      modTime
     *      size
     *      cluster
     *      aLBA (ie, array of logical block addresses)
     *
     * On return, it's the caller's responsibility to copy out any data into a new object
     * if it wants to preserve any of the above information.
     *
     * This function also caches the following properties in the 'dir' object:
     *
     *      lbaDirCache (of the last directory sector read, if any)
     *      sectorDirCache (of the last directory sector read, if any)
     *
     * Also, the caller must also set the following 'dir' helper properties, so that clusters
     * can be located and converted to sectors (see convertClusterToSectors):
     *
     *      vbaFAT
     *      vbaData
     *      cbSector
     *      clusMax
     *      clusSecs
     *      nFATBits
     *
     * @this {DiskInfo}
     * @param {VolInfo} vol
     * @param {DirInfo} dir (to be filled in)
     * @param {number} lba (a sector of the directory)
     * @param {number} i (an entry in the directory sector, 0-based)
     * @returns {boolean} true if entry was returned (even if invalid/deleted), false if no more entries
     */
    getDirEntry(vol, dir, lba, i)
    {
        if (!vol.sectorDirCache || !vol.lbaDirCache || vol.lbaDirCache != lba) {
            vol.lbaDirCache = lba;
            vol.sectorDirCache = this.getSector(vol.lbaDirCache);
        }
        if (vol.sectorDirCache) {
            let off = i * DiskInfo.DIRENT.LENGTH;
            let b = this.getSectorData(vol.sectorDirCache, off, 1);
            if (b == DiskInfo.DIRENT.UNUSED) {
                return false;
            }
            if (b == DiskInfo.DIRENT.INVALID) {
                dir.name = null;
                return true;
            }
            dir.attr = this.getSectorData(vol.sectorDirCache, off + DiskInfo.DIRENT.ATTR, 1);
            dir.name = this.getSectorString(vol.sectorDirCache, off + DiskInfo.DIRENT.NAME, 8);
            let ext = this.getSectorString(vol.sectorDirCache, off + DiskInfo.DIRENT.EXT, 3);
            if (dir.attr & DiskInfo.ATTR.VOLUME) {
                dir.name = (dir.name + ext).trim();
            } else {
                dir.name = dir.name.trimEnd();
                ext = ext.trimEnd();
                if (ext.length) dir.name += '.' + ext;
            }
            dir.modDate = this.getSectorData(vol.sectorDirCache, off + DiskInfo.DIRENT.MODDATE, 2);
            dir.modTime = this.getSectorData(vol.sectorDirCache, off + DiskInfo.DIRENT.MODTIME, 2);
            dir.size = this.getSectorData(vol.sectorDirCache, off + DiskInfo.DIRENT.SIZE, 4);
            if (dir.size < 0) {
                dir.size = 0;
            }
            dir.cluster = this.getSectorData(vol.sectorDirCache, off + DiskInfo.DIRENT.CLUSTER, 2);
            dir.aLBA = this.convertClusterToSectors(vol, dir);
            return true;
        }
        return false;
    }

    /**
     * convertClusterToSectors(vol, dir)
     *
     * @this {DiskInfo}
     * @param {VolInfo} vol
     * @param {DirInfo} dir
     * @returns {Array.<number>} of LBAs (logical block addresses)
     */
    convertClusterToSectors(vol, dir)
    {
        let aLBA = [];
        let cluster = dir.cluster;
        if (cluster) {
            while (cluster <= vol.clusMax) {
                if (cluster < DiskInfo.FAT12.CLUSNUM_MIN) {
                    break;
                }
                let vba = vol.vbaData + ((cluster - DiskInfo.FAT12.CLUSNUM_MIN) * vol.clusSecs);
                for (let i = 0; i < vol.clusSecs; i++) {
                    aLBA.push(vol.lbaStart + vba++);
                }
                cluster = this.getClusterEntry(vol, cluster, 0) | this.getClusterEntry(vol, cluster, 1);
            }
            if (cluster < DiskInfo.FAT12.CLUSNUM_MIN || cluster == vol.clusMax + 1 /* aka CLUSNUM_BAD */) {
                this.warnings.push(`${dir.name} contains invalid cluster (${cluster})`);
            }
        }
        return aLBA;
    }

    /**
     * getClusterEntry(vol, cluster, iByte)
     *
     * @this {DiskInfo}
     * @param {VolInfo} vol
     * @param {number} cluster
     * @param {number} iByte (0 for low byte of cluster entry, 1 for high byte)
     * @returns {number}
     */
    getClusterEntry(vol, cluster, iByte)
    {
        let w = 0;
        let cbitsSector = vol.cbSector * 8;
        let offBits = vol.nFATBits * cluster + (iByte? 8 : 0);
        let iSector = (offBits / cbitsSector) | 0;
        if (!vol.sectorFATCache || !vol.vbaFATCache || vol.vbaFATCache != vol.vbaFAT + iSector) {
            vol.vbaFATCache = vol.vbaFAT + iSector;
            vol.sectorFATCache = this.getSector(vol.lbaStart + vol.vbaFATCache);
        }
        if (vol.sectorFATCache) {
            offBits = (offBits % cbitsSector) | 0;
            let off = (offBits >> 3);
            w = this.getSectorData(vol.sectorFATCache, off, 1);
            if (!iByte) {
                if (offBits & 0x7) w >>= 4;
            } else {
                if (vol.nFATBits == 16) {
                    w <<= 8;
                } else {
                    this.assert(vol.nFATBits == 12);
                    if (offBits & 0x7) {
                        w <<= 4;
                    } else {
                        w = (w & 0xf) << 8;
                    }
                }
            }
        }
        return w;
    }

    /**
     * getCHS(lba)
     *
     * @this {DiskInfo}
     * @param {number} lba (logical block address)
     * @returns {Array.<number>} [iCylinder, iHead, idSector] (if idSector is zero, the conversion failed)
     */
    getCHS(lba)
    {
        let iCylinder, iHead = 0, idSector = 0;
        let nSectorsPerCylinder = this.nHeads * this.nSectors;
        iCylinder = (lba / nSectorsPerCylinder) | 0;
        if (iCylinder < this.nCylinders) {
            let nSectorsRemaining = (lba % nSectorsPerCylinder);
            iHead = (nSectorsRemaining / this.nSectors) | 0;
            /**
             * LBA numbers are 0-based, but the sector numbers in CHS addressing are 1-based, so add 1 to the sector index.
             */
            idSector = (nSectorsRemaining % this.nSectors) + 1;
        }
        return [iCylinder, iHead, idSector];
    }

    /**
     * getSector(lba)
     *
     * @this {DiskInfo}
     * @param {number} lba (logical block address)
     * @returns {Sector|null} sector
     */
    getSector(lba)
    {
        let [iCylinder, iHead, idSector] = this.getCHS(lba);
        return this.seek(iCylinder, iHead, idSector);
    }

    /**
     * getSectorArray(file)
     *
     * @this {DiskInfo}
     * @param {FileInfo} [file]
     * @returns {number} (number of sectors mapped)
     */
    getSectorArray(file)
    {
        let nSectors = 0;
        if (this.fileTable.length && (!file || file.size > 0 && !file.aLBA)) {
            let aDiskData = this.aDiskData, lba = 0;
            for (let iCylinder = 0; iCylinder < aDiskData.length; iCylinder++) {
                for (let iHead = 0; iHead < aDiskData[iCylinder].length; iHead++) {
                    for (let iSector = 0; iSector < aDiskData[iCylinder][iHead].length; iSector++) {
                        let sector = aDiskData[iCylinder][iHead][iSector];
                        if (sector) {
                            let iFile = sector[DiskInfo.SECTOR.FILE_INDEX];
                            if (iFile != undefined) {
                                /**
                                 * When the caller specifies a particular file, it is tempting to do this:
                                 *
                                 *      if (file.index === iFile) ...
                                 *
                                 * but if we have to scan every sector for a single file, we may as well do ALL files.
                                 */
                                let fileCur = this.fileTable[iFile];
                                this.assert(fileCur);
                                if (!fileCur.aLBA) fileCur.aLBA = [];
                                let iLBA = sector[DiskInfo.SECTOR.FILE_OFFSET] / this.cbSector;
                                /**
                                 * Disks that have known errors (like the APL-100 disk image we received) can trigger this
                                 * assertion, so it should be a DEBUG-only check.
                                 */
                                this.assert(fileCur.aLBA[iLBA] == undefined || fileCur.aLBA[iLBA] == iLBA);
                                fileCur.aLBA[iLBA] = lba;
                                if (!file || file.index == iFile) nSectors++;
                            }
                        }
                        lba++;
                    }
                }
            }
        }
        return nSectors;
    }

    /**
     * readSectorArray(file, ab)
     *
     * @this {DiskInfo}
     * @param {FileInfo} file
     * @param {Array.<number>} ab
     * @returns {number} (number of bytes read)
     */
    readSectorArray(file, ab)
    {
        let iLBA = 0, ib = 0;
        let cbRemain = ab.length;
        if (!file.aLBA) this.getSectorArray(file);
        if (file.aLBA) {
            while (cbRemain > 0 && iLBA >= 0 && iLBA < file.aLBA.length) {
                let sector = this.getSector(file.aLBA[iLBA++]);
                if (!sector) break;
                let cbSector = sector[DiskInfo.SECTOR.LENGTH];
                let cbRead = cbRemain > cbSector? cbSector : cbRemain;
                for (let i = 0; i < cbRead; i++) {
                    let b = this.read(sector, i);
                    if (b < 0) {
                        iLBA = -1;
                        break;
                    }
                    ab[ib++] = b;
                    cbRemain--;
                }
            }
        }
        return ab.length - cbRemain;
    }

    /**
     * getSectorData(sector, off, len)
     *
     * WARNING: This function is restricted to reading data contained ENTIRELY within the specified sector.
     *
     * NOTE: Yes, this function is not the most efficient way to read a byte/word/dword value from within a sector,
     * but given the different states a sector may be in, it's certainly the simplest and safest, and since this is
     * only used by buildTables() and its progeny, it's not clear that we need to be superfast anyway.
     *
     * @this {DiskInfo}
     * @param {Sector} sector
     * @param {number} off (byte offset)
     * @param {number} len (1 to 4 bytes)
     * @returns {number}
     */
    getSectorData(sector, off, len)
    {
        let dw = 0;
        let nShift = 0;
        this.assert(len > 0 && len <= 4);
        while (len--) {
            this.assert(off < sector[DiskInfo.SECTOR.LENGTH]);
            let b = this.read(sector, off++);
            this.assert(b >= 0);
            if (b < 0) break;
            dw |= (b << nShift);
            nShift += 8;
        }
        return dw;
    }

    /**
     * getSectorString(sector, off, len)
     *
     * WARNING: This function is restricted to reading a string contained ENTIRELY within the specified sector.
     *
     * @this {DiskInfo}
     * @param {Sector} sector
     * @param {number} off (byte offset)
     * @param {number} len (use -1 to read a null-terminated string)
     * @returns {string}
     */
    getSectorString(sector, off, len)
    {
        let s = "";
        while (len--) {
            let b = this.read(sector, off++);
            if (b <= 0) break;
            s += String.fromCharCode(b);
        }
        return s;
    }

    /**
     * updateSector(iFile, off, lba)
     *
     * Like getSector(), this must convert a LBA into CHS values; consider factoring that conversion code out.
     *
     * @this {DiskInfo}
     * @param {number} iFile (0-based file index)
     * @param {number} off (file offset corresponding to the given LBA of the given file)
     * @param {number} lba (logical block address from the file's aLBA)
     * @returns {boolean} true if successfully updated, false if not
     */
    updateSector(iFile, off, lba)
    {
        let cylinder, head, sector;
        let file = this.fileTable[iFile];
        let [iCylinder, iHead, idSector] = this.getCHS(lba);
        if ((cylinder = this.aDiskData[iCylinder]) && (head = cylinder[iHead]) && (sector = head[idSector - 1])) {
            if (sector[DiskInfo.SECTOR.ID] != idSector) {
                this.warnings.push(`${iCylinder}:${iHead}:${idSector} has non-standard sector ID ${sector[DiskInfo.SECTOR.ID]}; see file ${file.path}`);
            }
            if (sector[DiskInfo.SECTOR.FILE_INDEX] != undefined) {
                if (sector[DiskInfo.SECTOR.FILE_INDEX] != iFile || sector[DiskInfo.SECTOR.FILE_OFFSET] != off) {
                    let filePrev = this.fileTable[sector[DiskInfo.SECTOR.FILE_INDEX]];
                    this.warnings.push(`"${filePrev.path}" cross-linked at offset ${sector[DiskInfo.SECTOR.FILE_OFFSET]} with "${file.path}" at offset ${off}`);
                    return false;
                }
            }
            sector[DiskInfo.SECTOR.FILE_INDEX] = iFile;
            sector[DiskInfo.SECTOR.FILE_OFFSET] = off;
            return true;
        }
        this.warnings.push(`Unable to map ${file.path} block ${lba} to offset ${off}`);
        return false;
    }

    /**
     * buildSector(iCylinder, iHead, idSector, cbSector, db, ib)
     *
     * Builds a Sector object with the following properties (see DiskInfo.SECTOR for complete list):
     *
     *      Property    Description                     Deprecated
     *      'c':        cylinder number (0-based)       ('cylinder')
     *      'h':        head number (0-based)           ('head')
     *      's':        sector ID                       ('sector')
     *      'l':        size of the sector, in bytes    ('length')
     *      'd':        array of dwords                 ('data')
     *
     * NOTE: The 'pattern' property is no longer used; if the sector ends with a repeated 32-bit pattern,
     * we now store that pattern as the last 'd' (data) array value and shrink the array.
     *
     * @this {DiskInfo}
     * @param {number} iCylinder
     * @param {number} iHead
     * @param {number} idSector
     * @param {number} cbSector
     * @param {DataBuffer} [db]
     * @param {number} [ib]
     * @returns {Sector}
     */
    buildSector(iCylinder, iHead, idSector, cbSector, db, ib = 0)
    {
        let adw = [];
        let cdw = cbSector >> 2;
        for (let idw = 0; idw < cdw; idw++, ib += 4) {
            adw[idw] = db && ib < db.length? db.readInt32LE(ib) : 0;
        }
        let sector = /** @type {Sector} */ ({
            [DiskInfo.SECTOR.CYLINDER]: iCylinder,
            [DiskInfo.SECTOR.HEAD]:     iHead,
            [DiskInfo.SECTOR.ID]:       idSector,
            [DiskInfo.SECTOR.LENGTH]:   cbSector,
            [DiskInfo.SECTOR.DATA]:     adw
        });
        return this.initSector(sector, adw, cbSector, 0);
    }

    /**
     * rebuildSector(iCylinder, iHead, sector)
     *
     * Builds a Sector object with the following properties (see DiskInfo.SECTOR for complete list):
     *
     *      Property    Description                     Deprecated
     *      'c':        cylinder number (0-based)       ('cylinder')
     *      'h':        head number (0-based)           ('head')
     *      's':        sector ID                       ('sector')
     *      'l':        size of the sector, in bytes    ('length')
     *      'd':        array of dwords                 ('data')
     *
     * NOTE: The 'pattern' property is no longer stored in JSON images; if the sector ends with a repeated
     * 32-bit pattern, we now store that pattern as the last 'd' array value and shrink the array.
     *
     * However, IF the JSON data comes directly from the Disk component, which still uses 'pattern' internally,
     * we will honor it, and fill out any partial sector with the given pattern, instead of assuming we should
     * use the last 'd' value.
     *
     * @this {DiskInfo}
     * @param {number} iCylinder
     * @param {number} iHead
     * @param {Object} sector
     * @returns {Sector}
     */
    rebuildSector(iCylinder, iHead, sector)
    {
        if (sector[DiskInfo.SECTOR.CYLINDER] != undefined) {
            this.assert(sector[DiskInfo.SECTOR.CYLINDER] == iCylinder);
            delete sector[DiskInfo.SECTOR.CYLINDER];
        }

        if (sector[DiskInfo.SECTOR.HEAD] != undefined) {
            this.assert(sector[DiskInfo.SECTOR.HEAD] == iHead);
            delete sector[DiskInfo.SECTOR.HEAD];
        }

        let dwPattern = sector['pattern'];
        delete sector['pattern'];

        let idSector = sector[DiskInfo.SECTOR.ID];
        if (idSector != undefined) {
            delete sector[DiskInfo.SECTOR.ID];
        } else {
            dwPattern |= 0;
            idSector = sector['sector'];
            delete sector['sector'];
        }

        let cbSector = sector[DiskInfo.SECTOR.LENGTH];
        if (cbSector != undefined) {
            delete sector[DiskInfo.SECTOR.LENGTH];
        } else {
            cbSector = sector['length'] || 512;
            delete sector['length'];
        }

        let adw = sector[DiskInfo.SECTOR.DATA];
        if (adw) {
            // this.assert(adw.length);                 // SOFTWARE-CAROUSEL.json contains fake zero-length sectors
            delete sector[DiskInfo.SECTOR.DATA];
        } else {
            adw = sector['data'];
            if (!adw) {
                adw = [];
            } else {
                delete sector['data'];
            }
        }

        sector[DiskInfo.SECTOR.CYLINDER] = iCylinder;
        sector[DiskInfo.SECTOR.HEAD] = iHead;
        sector[DiskInfo.SECTOR.ID] = idSector;
        sector[DiskInfo.SECTOR.LENGTH] = cbSector;
        sector[DiskInfo.SECTOR.DATA] = adw;

        return this.initSector(sector, adw, cbSector, dwPattern);
    }

    /**
     * initSector(sector, adw, cbSector, dwPattern)
     *
     * @this {DiskInfo}
     * @param {Sector} sector
     * @param {Array.<number>} adw
     * @param {number} cbSector
     * @param {number} [dwPattern] (undefined for new JSON disk images, because they simply store any final repeating value as the last DATA value)
     * @returns {Sector}
     */
    initSector(sector, adw, cbSector, dwPattern)
    {
        let cdw = cbSector >> 2;
        let dwPrev = null, cPrev = 0;
        for (let idw = 0; idw < cdw; idw++) {
            let dw = adw[idw];
            if (dw == undefined) {
                if (dwPattern != undefined) {
                    dw = dwPattern;
                } else {
                    dw = adw[adw.length-1];
                    // this.assert(dw != undefined);    // SOFTWARE-CAROUSEL.json contains fake zero-length sectors
                }
                adw[idw] = dw;
            }
            if (dwPrev === dw) {
                cPrev++;
            } else {
                dwPrev = dw;
                cPrev = 0;
            }
        }
        adw.length -= cPrev;
        /**
         * To be backward-compatible with the checksumming logic used with older JSON disk images (where
         * any ending pattern was stored in a separate 'pattern' property and omitted from the 'data' array),
         * we must omit the final data value from *our* checksum as well, but only if it's the final value
         * in a less-than-full sector.
         */
        cdw = adw.length < cdw? adw.length - 1 : adw.length;
        let dwChecksum = 0;
        for (let idw = 0; idw < cdw; idw++) {
            dwChecksum = (dwChecksum + adw[idw]) & 0xffffffff;
        }
        this.dwChecksum = ((this.dwChecksum + dwChecksum) & 0xffffffff) >>> 0;
        return sector;
    }

    /**
     * getData(dbDisk, fLegacy)
     *
     * @this {DiskInfo}
     * @param {DataBuffer} dbDisk
     * @param {boolean} [fLegacy]
     * @returns {boolean} (true if successful, false if error)
     */
    getData(dbDisk, fLegacy)
    {
        if (this.aDiskData) {
            let ib = 0;
            let aDiskData = this.aDiskData;
            for (let iCylinder = 0; iCylinder < aDiskData.length; iCylinder++) {
                for (let iHead = 0; iHead < aDiskData[iCylinder].length; iHead++) {
                    for (let iSector = 0; iSector < aDiskData[iCylinder][iHead].length; iSector++) {
                        let sector = aDiskData[iCylinder][iHead][iSector];
                        if (sector) {
                            let n = sector[DiskInfo.SECTOR.LENGTH];
                            for (let i = 0; i < n; i++) {
                                let b = this.read(sector, i);
                                this.assert(b >= 0);
                                dbDisk.writeUInt8(b, ib++);
                            }
                        }
                    }
                }
            }
            this.assert(ib == dbDisk.length);
            return true;
        }
        return false;
    }

    /**
     * read(sector, iByte, fCompare)
     *
     * @this {DiskInfo}
     * @param {Sector} sector (returned from a previous seek)
     * @param {number} iByte (byte index within the given sector)
     * @param {boolean} [fCompare] is true if this write-compare read
     * @returns {number} the specified (unsigned) byte, or -1 if no more data in the sector
     */
    read(sector, iByte, fCompare)
    {
        let b = -1;
        if (sector) {
            if (iByte < sector[DiskInfo.SECTOR.LENGTH]) {
                let adw = sector[DiskInfo.SECTOR.DATA];
                let idw = iByte >> 2;
                let dw = (idw < adw.length? adw[idw] : adw[adw.length-1]);
                b = ((dw >> ((iByte & 0x3) << 3)) & 0xff);
            }
        }
        return b;
    }

    /**
     * seek(iCylinder, iHead, idSector, sectorPrev, done)
     *
     * TODO: There's some dodgy code in seek() that allows floppy images to be dynamically reconfigured
     * with more heads and/or sectors/track, and it does so by peeking at more drive properties.  That code
     * used to be in the FDC component, where it was perfectly reasonable to access those properties.  We
     * need a cleaner interface back to the drive, similar to the info() interface we provide to the controller.
     *
     * Whether or not the "dynamic reconfiguration" feature itself is perfectly reasonable is, of course,
     * a separate question.
     *
     * @this {DiskInfo}
     * @param {number} iCylinder
     * @param {number} iHead
     * @param {number} idSector
     * @param {Sector|null} [sectorPrev]
     * @param {function(Sector,boolean)} [done]
     * @returns {Sector|null} is the requested sector, or null if not found (or not available yet)
     */
    seek(iCylinder, iHead, idSector, sectorPrev, done)
    {
        let sector = null;
        let drive = this.drive;
        let cylinder = this.aDiskData[iCylinder];
        if (cylinder) {
            let i;
            let track = cylinder[iHead];
            /**
             * The following code allows a single-sided diskette image to be reformatted (ie, "expanded")
             * as a double-sided image, provided the drive has more than one head (see drive.nHeads).
             *
             * NOTE: Strangely, we must ignore the number of drive heads both here and in doFormat(); otherwise,
             * PC DOS 1.10 "FORMAT /1" will fail.  Even though "/1" means format as a single-sided diskette, FORMAT
             * still attempts to format the first track with head 1.
             */
            if (!track && drive && drive.bFormatting && iHead < 2 /* drive.nHeads */) {
                track = new Array(drive.bSectorEnd);
                for (i = 0; i < track.length; i++) {
                    track[i] = this.buildSector(iCylinder, iHead, i + 1, drive.nBytes);
                }
                /**
                 * TODO: This is more dodginess, because we can't be certain that every cylinder on the disk
                 * will receive the same "expanded" treatment, but functions like getSector() rely on instance
                 * properties (eg, this.nHeads), on the assumption that the disk's geometry is homogeneous.
                 */
                if (iHead < drive.nHeads) {
                    cylinder[iHead] = track;
                    this.nHeads = iHead + 1;
                }
            }
            if (track) {
                for (i = 0; i < track.length; i++) {
                    if (track[i] && track[i][DiskInfo.SECTOR.ID] == idSector) {
                        sector = track[i];
                        /**
                         * When confronted with a series of sectors with the same sector ID (as found, for example, on
                         * the 1984 King's Quest copy-protected diskette), we're supposed to advance to another sector in
                         * the series.  So if the current sector matches the previous sector, we'll peek at the next sector
                         * (if any), and if it has the same sector ID, then we'll choose that sector instead.
                         */
                        if (sectorPrev && sectorPrev == sector) {
                            let j = i, sectorNext;
                            while (true) {
                                if (++j >= track.length) j = 0;
                                sectorNext = track[j];
                                if (sectorNext == sector) break;
                                if (sectorNext[DiskInfo.SECTOR.ID] == idSector) {
                                    sector = sectorNext;
                                    i = j;
                                    break;
                                }
                            }
                        }
                        break;
                    }
                }
                /**
                 * The following code allows an 8-sector track to be reformatted (ie, "expanded") as a 9-sector track.
                 */
                if (!sector && drive && drive.bFormatting && drive.bSector == 9) {
                    sector = track[i] = this.buildSector(iCylinder, iHead, drive.bSector, drive.nBytes);
                    /**
                     * TODO: This is more dodginess, because we can't be certain that every track on the disk
                     * will receive the same "expanded" treatment, but functions like getSector() rely on instance
                     * properties (eg, this.nSectors), on the assumption that the disk's geometry is homogeneous.
                     */
                    if (this.nSectors < drive.bSector) this.nSectors = drive.bSector;
                }
            }
        }
        if (done) done(sector, false);
        return sector;
    }
}
