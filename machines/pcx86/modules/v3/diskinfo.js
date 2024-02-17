/**
 * @fileoverview Disk processing module
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import CPUx86   from "./cpux86.js";
import CharSet  from "../v2/charset.js";
import Device   from "../../../modules/v3/device.js";
import MESSAGE  from "../../../modules/v3/message.js";
import FileInfo from "./fileinfo.js";
import { DRIVE_CTRLS, DRIVE_TYPES } from "../v2/driveinfo.js";

/**
 * VolInfo describes a volume.  NOTE: this list of properties may not be
 * exhaustive (it may omit certain internal calculations), but at the very least,
 * it should include every "volume descriptor" property we export via getVolDesc().
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
 * FileData is an input data structure that callers of buildDiskFromFiles() must provide.
 *
 * @typedef {Object} FileData
 * @property {string} path
 * @property {string} name
 * @property {number} attr
 * @property {Date} date
 * @property {number} size
 * @property {DataBuffer} data
 * @property {number} cluster (leave uninitialized; buildFAT() will fill this in)
 * @property {Array.<FileData>} files
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
 * @property {number} iModify (used only with fWritable disk images)
 * @property {number} cModify (used only with fWritable disk images)
 */

/**
 * @typedef {Object} DriveInfo
 * @property {string} driveCtrl
 * @property {number} driveType
 * @property {number} nCylinders
 * @property {number} nHeads
 * @property {number} nSectors
 * @property {number} cbSector
 * @property {number} driveSize
 * @property {number} typeFAT
 * @property {number} clusterSize
 * @property {number} rootEntries
 * @property {number} hiddenSectors
 * @property {number} verDOS
 * @property {boolean} trimFAT
 * @property {boolean} partitioned
 * @property {Array} files
 * @property {Array|string} sectorIDs
 * @property {Array|string} sectorErrors
 * @property {string} suppData
 */

/**
 * @class DiskInfo
 * @property {string} diskName
 * @property {boolean} fWritable
 * @property {Array} aDiskData
 * @property {number} cbDiskData
 * @property {number} dwChecksum
 * @property {string} driveCtrl
 * @property {number} driveType
 * @property {number} nCylinders
 * @property {number} nHeads
 * @property {number} nSectors
 * @property {number} cbSector
 * @property {Array.<VolInfo>|null} volTable
 * @property {Array.<FileInfo>|null} fileTable
 * @property {number} minDOSVersion
 */
export default class DiskInfo {

    static MIN_PARTITION = 3000000;     // ~3MB (used in lieu of any partitioned media indicator)

    /*
     * Top-level descriptors in "v2" JSON disk images.
     */
    static DESC = {
        IMAGE:      'imageInfo',
        VOLUMES:    'volTable',
        FILES:      'fileTable',
        DISKDATA:   'diskData'
    };

    /*
     * Supported image types.
     */
    static TYPE = {
        CHS:        'CHS'
    };

    /*
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
        SOURCE:     'source',           // the source of the data (eg, archive.org, pcjs.org, etc)
        COMMAND:    'diskimage.js'
    };

    /*
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

    /*
     * File descriptor properties.
     *
     * getFileDesc() is the mechanism for callers to obtain a FILEDESC, and there are two flavors: abbreviated and complete.
     * Only the "complete" form includes NAME, SIZE and VOL (regardless if zero), and CONTENTS (if any).
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

    /*
     * Sector object "public" properties.
     */
    static SECTOR = {
        CYLINDER:   'c',                // cylinder number (0-based) [formerly 'iCylinder']
        HEAD:       'h',                // head number (0-based) [formerly 'iHead']
        ID:         's',                // sector ID (generally 1-based, except for unusual/copy-protected disks) [formerly 'sector']
        LENGTH:     'l',                // sector length, in bytes (generally 512, except for unusual/copy-protected disks) [formerly 'length']
        DATA:       'd',                // array of signed 32-bit values (if less than length/4, the last value is repeated) [formerly 'data']
        FILE_INDEX: 'f',                // "v2" JSON disk images only [formerly 'file']
        FILE_OFFSET:'o',                // "v2" JSON disk images only [formerly 'offFile' or 'offset']
                                        // [no longer used: 'pattern']
        /*
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

    /*
     * Boot sector offsets (and assorted constants) in DOS-compatible boot sectors (DOS 2.0 and up)
     *
     * WARNING: I've heard apocryphal stories about SIGNATURE being improperly reversed on some systems
     * (ie, 0x55AA instead 0xAA55) -- perhaps by a dyslexic programmer -- so be careful out there.
     */
    static BOOT = {
        SIG_OFFSET:     0x1FE,
        SIGNATURE:      0xAA55          // to be clear, the low byte (at offset 0x1FE) is 0x55 and the high byte (at offset 0x1FF) is 0xAA
    };

    /*
     * PCJS_LABEL is our default label, used whenever a more suitable label (eg, the disk image's folder name)
     * is not available (or not supplied), and PCJS_OEM is inserted into any DiskInfo-generated diskette images.
     */
    static PCJS_LABEL = "PCJS";
    static PCJS_OEM   = "PCJS.ORG";
    static PCJS_VALUE = 0x534a4350;     // "PCJS"

    /*
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
        /*
         * NOTE: DOS 2.0 also stores the number of sectors in the BIOS file (eg, IO.SYS, IBMBIO.COM) in the byte at offset
         * 0x020 (LARGESECS), followed by a custom 11-byte Diskette Parameter Table (DPT) at offsets 0x021 through 0x0x2B, which
         * it promptly points the DPT vector 0x1E (0:0078h) to.
         */
        LARGESECS:      0x020,      // 4 bytes (DOS 3.31 and up): number of sectors if DISKSECS is zero
        END:            0x024,      // end of standard BPB
        /*
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

    /*
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
        /*
         * The following are some common disk sizes and their CHS values, since missing or bogus MBR and/or BPB values
         * might mislead us when attempting to determine the exact disk geometry.
         */
        10653696:[306, 4, 17],          // PC XT 10Mb hard drive (type 3)
        21411840:[615, 4, 17],          // PC AT 20Mb hard drive (type 2)
        /*
         * Other assorted disk formats, used by DEC and others.
         * For example, the 256256-byte format was also used on early CP/M and SCP (Seattle Computer Products) systems
         */
        256256:  [77,  1, 26, 128],     // RX01 single-platter diskette: 77 tracks, 1 head, 26 sectors/track, 128 bytes/sector, for a total of 256256 bytes
        1261568: [77,  2, 8, 1024],     // SCP(?) single-platter diskette: 77 tracks, 2 heads, 8 sectors/track, 1024-byte sectors, for a total of 1261568 bytes
        2494464: [203, 2, 12, 512],     // RK03 single-platter disk cartridge: 203 tracks, 2 heads, 12 sectors/track, 512 bytes/sector, for a total of 2494464 bytes
        5242880: [256, 2, 40, 256],     // RL01K single-platter disk cartridge: 256 tracks, 2 heads, 40 sectors/track, 256 bytes/sector, for a total of 5242880 bytes
        10485760:[512, 2, 40, 256]      // RL02K single-platter disk cartridge: 512 tracks, 2 heads, 40 sectors/track, 256 bytes/sector, for a total of 10485760 bytes
    };

    /*
     * Media ID (descriptor) bytes for DOS-compatible FAT-formatted disks (stored in the first byte of the FAT)
     */
    static FAT = {
        MEDIA_160KB:    0xFE,       // 5.25-inch, 1-sided,  8-sector, 40-track
        MEDIA_180KB:    0xFC,       // 5.25-inch, 1-sided,  9-sector, 40-track
        MEDIA_320KB:    0xFF,       // 5.25-inch, 2-sided,  8-sector, 40-track
        MEDIA_360KB:    0xFD,       // 5.25-inch, 2-sided,  9-sector, 40-track
        MEDIA_720KB:    0xF9,       //  3.5-inch, 2-sided,  9-sector, 80-track
        MEDIA_1200KB:   0xF9,       //  3.5-inch, 2-sided, 15-sector, 80-track
        MEDIA_FIXED:    0xF8,       // fixed disk (aka hard drive)
        MEDIA_1440KB:   0xF0,       //  3.5-inch, 2-sided, 18-sector, 80-track
        MEDIA_2880KB:   0xF0        //  3.5-inch, 2-sided, 36-sector, 80-track
    };

    /*
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

    /*
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

    /*
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

    /*
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
        METADATA:     0x0100        // for internal use only (used to mark "pseudo" file table entries that list compressed archive contents)
    };

    /*
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
        /*
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

    /**
     * DiskInfo(device, diskName, fWritable)
     *
     * Returns a DiskInfo object used to build a disk images.
     *
     * @this {DiskInfo}
     * @param {Device} device
     * @param {string} [diskName]
     * @param {boolean} [fWritable]
     */
    constructor(device, diskName = "", fWritable = false)
    {
        this.device = device;
        this.printf = device.printf.bind(device);
        this.assert = device.assert.bind(device);
        this.diskName = diskName;
        this.args = "";
        this.fWritable = fWritable;
        this.volTable = [];
        this.fileTable = [];
        this.aMetaData = [];
        this.tablesBuilt = false;
        this.cbDiskData = 0;
        this.dwChecksum = 0;
        this.driveCtrl = "";
        this.driveType = -1;
        this.hash = "none";
    }

    /**
     * buildDiskFromBuffer(dbDisk, forceBPB, fnHash, driveInfo)
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
     * @param {fForceBPP} [forceBPB]
     * @param {function(Array.<number>|string|DataBuffer)} [fnHash]
     * @param {DriveInfo} [driveInfo]
     * @returns {boolean} true if successful (aDiskData initialized); false otherwise
     */
    buildDiskFromBuffer(dbDisk, forceBPB, fnHash, driveInfo = {})
    {
        this.aDiskData = null;
        this.cbDiskData = 0;
        this.dwChecksum = 0;
        this.fromJSON = false;

        let nHeads = 0;
        let nCylinders = 0;
        let nSectorsPerTrack = 0;
        let aTracks = [];                   // track array (used only for disk images with track tables)
        let cbSector = driveInfo.cbSector || 512;
        let bMediaID = 0;
        let offBootSector = 0;
        let cbDiskData = dbDisk.length, cbPartition = cbDiskData;

        let dbTrack, dbSector;
        let iTrack, cbTrack, offTrack, offSector;

        if (driveInfo.driveType == undefined) {
            driveInfo.driveType = -1;
        }

        if (driveInfo.partitioned || cbDiskData >= DiskInfo.MIN_PARTITION && driveInfo.partitioned !== false) {
            let wSig = dbDisk.readUInt16LE(DiskInfo.BOOT.SIG_OFFSET);
            if (wSig == DiskInfo.BOOT.SIGNATURE) {
                /*
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
            /*
             * If we failed to find an active entry, we'll fall into the BPB detection code, which
             * should fail if the first sector really was an MBR.  Otherwise, the BPB should give us
             * the geometry info we need to dump the entire disk image, including the MBR and any
             * other reserved sectors.
             */
        }

        let bByte0 = dbDisk.readUInt8(offBootSector + DiskInfo.BPB.OPCODE);
        let bByte1 = dbDisk.readUInt8(offBootSector + DiskInfo.BPB.OPCODE + 1);
        let cbSectorBPB = dbDisk.readUInt16LE(offBootSector + DiskInfo.BPB.SECBYTES);

        /*
         * Save the original BPB, in case we need to modify it later.
         */
        this.abOrigBPB = [];
        this.fBPBModified = false;
        this.abOrigBPB.push(offBootSector);
        for (let i = DiskInfo.BPB.OPCODE; i < DiskInfo.BPB.LARGESECS+4; i++) {
            this.abOrigBPB.push(dbDisk.readUInt8(offBootSector + i));
        }

        /*
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
            /*
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

        /*
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

                if (defaultGeometry && driveInfo.driveType < 0) {
                    if (bMediaID && bMediaID != bMediaIDBPB) {
                        this.printf(MESSAGE.WARNING, "BPB media ID (%#0bx) does not match physical media ID (%#0bx)\n", bMediaIDBPB, bMediaID);
                    }
                    if (nCylinders != nCylindersBPB) {
                        let message = (nCylinders - nCylindersBPB == 1)? MESSAGE.INFO : MESSAGE.WARNING;
                        this.printf(message, "BPB cylinders (%d) do not match physical cylinders (%d)\n", nCylindersBPB, nCylinders);
                        if (message == MESSAGE.INFO) {
                            this.printf(message, "last cylinder may have been reserved for diagnostics and/or head-parking\n");
                        }
                    }
                    if (nHeads != nHeadsBPB) {
                        this.printf(MESSAGE.WARNING, "BPB heads (%d) do not match physical heads (%d)\n", nHeadsBPB, nHeads);
                    }
                    if (nSectorsPerTrack != nSectorsPerTrackBPB) {
                        this.printf(MESSAGE.WARNING, "BPB sectors/track (%d) do not match physical sectors/track (%d)\n", nSectorsPerTrackBPB, nSectorsPerTrack);
                    }
                }
                else {
                    nHeads = nHeadsBPB;
                    nSectorsPerTrack = nSectorsPerTrackBPB;
                    nCylinders = cbDiskData / (nHeads * nSectorsPerTrack * cbSectorBPB);
                    if (nCylinders != (nCylinders|0)) {
                        this.printf(MESSAGE.WARNING, "total cylinders (%d) not a multiple of %d sectors per cylinder\n", nCylinders, nHeads * nSectorsPerTrack);
                        nCylinders |= 0;
                    }
                    if (cbSector != cbSectorBPB) {
                        this.printf(MESSAGE.WARNING, "overriding default sector size (%d) with BPB sector size (%d)\n", cbSector, cbSectorBPB);
                        cbSector = cbSectorBPB;
                    }
                    bMediaID = bMediaIDBPB;
                }

                /*
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
                    this.printf(MESSAGE.WARNING, "XDF diskette detected, experimental XDF output enabled\n");
                    fXDFOutput = true;
                }
            }
        }

        /*
         * Let's see if we can find a corresponding BPB in our table of default BPBs.
         */
        let iBPB = -1;
        for (let i = 0; i < DiskInfo.aDefaultBPBs.length; i++) {
            if (DiskInfo.aDefaultBPBs[i][DiskInfo.BPB.MEDIA] == bMediaID) {
                let cbDiskBPB = (DiskInfo.aDefaultBPBs[i][DiskInfo.BPB.DISKSECS] + (DiskInfo.aDefaultBPBs[i][DiskInfo.BPB.DISKSECS + 1] * 0x100)) * cbSector;
                if (cbDiskBPB == cbDiskData) {
                    /*
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
            /*
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
                this.printf(MESSAGE.WARNING, "shrinking track size to %d sectors/track\n", nLogicalSectorsPerTrack);
            }
            let fBPBWarning = false;
            if (fBPBExists) {
                /*
                 * In deference to the PC DOS 2.0 BPB behavior discussed above, we stop our BPB verification after
                 * the first word of HIDDENSECS.
                 */
                for (let off = DiskInfo.BPB.SECBYTES; off < DiskInfo.BPB.HIDDENSECS + 2; off++) {
                    let bDefault = DiskInfo.aDefaultBPBs[iBPB][off];
                    let bActual = dbDisk.readUInt8(offBootSector + off);
                    if (bDefault != bActual) {
                        this.printf(MESSAGE.WARNING, "BPB byte %#02bx default (%#02bx) does not match actual byte: %#02bx\n", off, bDefault, bActual);
                        /*
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
                if (bByte0 == CPUx86.OPCODE.JMPS && bByte1 >= 0x22 || forceBPB) {
                    /*
                     * I'm going to stick my neck out here and slam a BPB into this disk image, since it doesn't appear
                     * to have one, which should make it more "mountable" on modern operating systems.  PC DOS 1.x (and
                     * the recently unearthed PC DOS 0.x) are OK with this, because they don't put anything important in
                     * the BPB byte range (0x00B-0x023), just a 9-byte date string (eg, " 7-May-81") at 0x008-0x010,
                     * followed by zero bytes at 0x011-0x030.
                     *
                     * They DO, however, store important constants in the range later used as the 8-byte OEM string at
                     * 0x003-0x00A.  For example, the word at 0x006 contains the starting segment for where to load
                     * IBMBIO.COM and IBMDOS.COM.  Those same early boot sectors are also missing the traditional 0xAA55
                     * signature at the end of the boot sector.
                     *
                     * However, if --forceBPB is specified, all those concerns go out the window: the goal is assumed to
                     * be a mountable disk, not a bootable disk.  So the BPB copy starts at offset 0 instead of SECBYTES.
                     */
                    for (let i = forceBPB? 0 : DiskInfo.BPB.SECBYTES; i < DiskInfo.BPB.LARGESECS+4; i++) {
                        dbDisk.writeUInt8(DiskInfo.aDefaultBPBs[iBPB][i] || 0, offBootSector + i);
                    }
                    this.printf(MESSAGE.INFO, "BPB has been updated\n");
                    if (fnHash) this.fBPBModified = true;
                }
                else if (bByte0 == 0xF6 && bByte1 == 0xF6 && bMediaIDBPB > 0xF8) {
                    /*
                     * WARNING: I've added this "0xF6" hack expressly to fix boot sectors that may have been zapped by an
                     * inadvertent reformat, or...?  However, certain Xenix diskettes get misdetected by this, so we at least
                     * require the media ID (from the first byte of the first FAT sector) be sensible.
                     */
                    this.printf(MESSAGE.WARNING, "repairing damaged boot sector with BPB for media ID %#02bx\n", bMediaID);
                    for (let i = 0; i < DiskInfo.BPB.LARGESECS+4; i++) {
                        dbDisk.writeUInt8(DiskInfo.aDefaultBPBs[iBPB][i] || 0, offBootSector + i);
                    }
                }
                else {
                    this.printf(MESSAGE.WARNING, "unrecognized boot sector: %#02bx,%#02bx\n", bByte0, bByte1);
                }
            }
        }

        if (fBPBExists && dbDisk.readUInt16LE(offBootSector + DiskInfo.BOOT.SIG_OFFSET) == DiskInfo.BOOT.SIGNATURE || forceBPB) {
            /*
             * Overwrite the OEM string with our own for boot sector consistency (this also eliminates variations due to
             * Windows 95's and 98's volume tracking modifications).  We do this only for disks with pre-existing BPBs;
             * it's not safe for pre-2.0 disks (and non-DOS disks, obviously).
             *
             * The signature check is another pre-2.0 disk check, to avoid misinterpreting any BPB that we might have
             * previously added ourselves as an original BPB.
             *
             * UPDATE: We now avoid doing this for any hard drive image (ie, 3Mb or larger -- the same arbitrary threshold
             * we used earlier), because it turns out that post 2.x versions of DOS (eg, PC DOS 3.00, MS-DOS 3.30) look for
             * certain OEM strings (eg, "IBM  2.0", "IBM  3.1") as a for drive and FAT type determination.
             */
            let dw = dbDisk.readInt32LE(DiskInfo.BPB.OEM + offBootSector);
            if (dw != DiskInfo.PCJS_VALUE && cbDiskData < DiskInfo.MIN_PARTITION && driveInfo.driveCtrl != "PCJS") {
                dbDisk.write(DiskInfo.PCJS_OEM, DiskInfo.BPB.OEM + offBootSector, DiskInfo.PCJS_OEM.length);
                this.printf(MESSAGE.INFO, "OEM string has been updated\n");
                if (fnHash) this.fBPBModified = true;
            }
        }

        offTrack = 0;
        if (!nHeads) {
            /*
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
            /*
             * Output the disk data as an array of cylinders, each containing an array of tracks (one track per head),
             * and each track containing an array of sectors.
             */
            iTrack = 0;
            cbTrack = nSectorsPerTrack * cbSector;
            let suppObj = this.parseSuppData(driveInfo.suppData);
            this.aDiskData = new Array(nCylinders);
            if (fnHash) this.hash = fnHash(dbDisk);
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

                    /*
                     * For most disks, the size of every sector and the number of sectors/track are consistent, and the
                     * sector number encoded in every sector (nSector) matches the 1-based sector index (iSector) we use
                     * to "track" our progress through the current track.  However, for XDF disk images, the above is
                     * NOT true beyond cylinder 0, which is why we have all these *ThisTrack variables, which would otherwise
                     * be unnecessary.
                     */
                    let cbSectorThisTrack = cbSector;
                    let nSectorsThisTrack = nLogicalSectorsPerTrack;
                    this.cbSector = cbSector;

                    /*
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

                        /*
                         * Check for any sector ID edits that must be applied to the disk (eg, "--sectorID=C:H:S:ID").
                         *
                         * For example, when building the IBM Multiplan 1.00 Program disk, "--sectorID=11:0:8:61" must be specified.
                         */
                        let aParts, n;
                        if (driveInfo.sectorIDs) {
                            let aSectorIDs = (typeof driveInfo.sectorIDs == "string")? [driveInfo.sectorIDs] : driveInfo.sectorIDs;
                            for (let i = 0; i < aSectorIDs.length; i++) {
                                aParts = aSectorIDs[i].split(":");
                                if (+aParts[0] === iCylinder && +aParts[1] === iHead && +aParts[2] === sectorID) {
                                    n = +aParts[3];
                                    if (!isNaN(n)) {
                                        sectorID = n;
                                        this.printf(MESSAGE.WARNING, "changing %d:%d:%d sectorID to %d\n", +aParts[0], +aParts[1], +aParts[2], sectorID);
                                    }
                                }
                            }
                        }
                        let sectorError = 0;
                        if (driveInfo.sectorErrors) {
                            let aSectorErrors = (typeof driveInfo.sectorErrors == "string")? [driveInfo.sectorErrors] : driveInfo.sectorErrors;
                            for (let i = 0; i < aSectorErrors.length; i++) {
                                aParts = aSectorErrors[i].split(":");
                                if (+aParts[0] === iCylinder && +aParts[1] === iHead && +aParts[2] === sectorID) {
                                    n = +aParts[3] || -1;
                                    if (n) {
                                        sectorError = n;
                                        this.printf(MESSAGE.WARNING, "forcing error for sector %d:%d:%d at %d bytes\n", +aParts[0], +aParts[1], +aParts[2], sectorError);
                                    }
                                }
                            }
                        }

                        dbSector = dbTrack.slice(offSector, offSector + cbSectorThisTrack);

                        /*
                         * NOTE: This code is broken if the disks's reserved sector count is anything other than 1, because
                         * it assumes that the first FAT sector immediately follows the boot sector.  However, we never use
                         * a value other than 1 anyway, because I've yet to find a version DOS (at least DOS 2.x or 3.x) that
                         * actually honors the BPB's reserved sector count.  So there's ample brokenness to go around.
                         */
                        if (bMediaID && !iCylinder && !iHead && iSector == ((offBootSector/cbSector)|0) + 2) {
                            let bFATID = dbSector.readUInt8(0);
                            if (bMediaID != bFATID) {
                                this.printf(MESSAGE.WARNING, "FAT ID (%#02bx) does not match physical media ID (%#02bx)\n", bFATID, bMediaID);
                            }
                            bMediaID = 0;
                        }

                        let sector = this.buildSector(iCylinder, iHead, sectorID, cbSectorThisTrack, dbSector);

                        let suppSector = null;
                        if (suppObj[iCylinder]) {
                            suppTrack = suppObj[iCylinder][iHead];
                            if (suppTrack) {
                                /*
                                 * If there is any overlap of the sectors in suppTrack with the standard sector IDs,
                                 * then we assume that the suppData includes ALL the data for the current track; otherwise,
                                 * we assume that suppTrack contains *extra* sectors and increase nSectorsThisTrack accordingly.
                                 */
                                let j;
                                for (j = 0; j < suppTrack.length; j++) {
                                    if (suppTrack[j]['sectorID'] <= nLogicalSectorsPerTrack) break;
                                }
                                if (j == suppTrack.length) {
                                    nSectorsThisTrack = nLogicalSectorsPerTrack + suppTrack.length;
                                    suppSector = suppTrack[iSector - nLogicalSectorsPerTrack - 1];
                                } else {
                                    suppSector = suppTrack[iSector-1];
                                    nSectorsThisTrack = suppTrack.length;
                                }
                            }
                        }

                        if (suppSector) {
                            sector[DiskInfo.SECTOR.ID] = suppSector['sectorID'];
                            if (suppSector['length']) sector[DiskInfo.SECTOR.LENGTH] = suppSector['length'];
                            if (suppSector['headCRC']) sector[DiskInfo.SECTOR.HEAD_CRC] = suppSector['headCRC'];
                            if (suppSector['headError']) sector[DiskInfo.SECTOR.HEAD_ERROR] = true;
                            if (suppSector['dataCRC']) sector[DiskInfo.SECTOR.DATA_CRC] = suppSector['dataCRC'];
                            if (suppSector['dataMark']) sector[DiskInfo.SECTOR.DATA_MARK] = suppSector['dataMark'];
                            if (!sectorError) sectorError = suppSector['dataError'];
                            sector[DiskInfo.SECTOR.DATA] = suppSector['data'];
                        }

                        if (sectorError) sector[DiskInfo.SECTOR.DATA_ERROR] = sectorError;

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
     * buildDiskFromFiles(dbDisk, diskName, aFileData, kbTarget, fnHash, driveInfo)
     *
     * If a total sector target is provided, we look for a predefined BPB that is an exact match; otherwise we
     * select the first BPB that can accommodate all the files.
     *
     * This function also supports a new driveInfo parameter, which may contain any of the following properties:
     *
     *      driveCtrl: "XT", "AT", or "COMPAQ" (see DRIVE_CTRLS)
     *      driveType: drive type (see DRIVE_TYPES)
     *      typeFAT: 12, 16, or 32 (advisory only; also, 32 is not supported yet)
     *      clusSecs: 1 to 64 (512-byte to 32Kb clusters; advisory only)
     *      rootEntries: 16 to 32768 entries (1 to 1024 sectors; advisory only)
     *      sectorIDs (sector ID edits that must be applied to the disk)
     *      sectorErrors (sector errors that must be applied to the disk)
     *      suppData (supplementary disk data that can be found in such files as: /software/pcx86/app/microsoft/word/1.15/debugger/index.md)
     *
     * Custom disk images also have to work within the constraints of known drive types (ie, we must select a
     * number of cylinders, heads, and sectors per track that can accommodate the number of required sectors).
     *
     * All of the driveInfo properties are optional; that is, default values should be selected based on our
     * understanding of "what would DOS do".  For example, if a disk had 32680 or fewer sectors, supposedly DOS
     * would format it with a 12-bit FAT; otherwise, it would use a 16-bit FAT.
     *
     * TODO: This function currently only knows how to build FAT12 disk images.  Add support for FAT16 and FAT32.
     *
     * @this {DiskInfo}
     * @param {DataBuffer} dbDisk
     * @param {string} diskName
     * @param {Array.<FileData>} aFileData
     * @param {number} [kbTarget]
     * @param {function(Array.<number>|string|DataBuffer)} [fnHash]
     * @param {DriveInfo} [driveInfo] (custom drive parameters, if any)
     * @returns {boolean} true if disk allocation successful, false if not
     */
    buildDiskFromFiles(dbDisk, diskName, aFileData, kbTarget = 0, fnHash, driveInfo = {})
    {
        if (!aFileData || !aFileData.length) {
            return false;
        }

        this.diskName = diskName;
        this.abOrigBPB = [];
        this.fBPBModified = false;
        this.minDOSVersion = 0;

        /*
         * Originally, we did not need to save a copy of the original file data, but now we do, so that we can
         * create associations between the built files *inside* the disk and the original files *outside* the disk.
         */
        this.aFileData = aFileData;

        /*
         * Put reasonable upper limits on both individual file sizes and the total size of all files.
         */
        let cbMax = (kbTarget || 1440) * 1024;
        let nTargetSectors = (kbTarget? kbTarget * 2 : 0);

        /*
         * This initializes cbTotal assuming a "best case scenario" (ie, one sector per cluster); as soon as
         * we find a BPB that will support that size, we recalculate cbTotal using that BPB's cluster size, and
         * then we re-verify that that BPB will work.  If not, then we keep looking.
         */
        let cTotalSectors = 0;
        let cbTotal = this.calcFileSizes(aFileData);

        /*
         * If a custom build has been requested, then we search for an appropriate drive type.  If no sector target
         * has been provided, we fall back on total size of all files, but we also include a "slop factor" (eg, 10%) to
         * account for FAT overhead that we're not prepared to calculate yet (eg, size of the FAT, directories, etc).
         */
        if (DiskInfo.findDriveType(driveInfo, nTargetSectors, this)) {
            this.driveCtrl = driveInfo.driveCtrl;
            this.driveType = driveInfo.driveType;
            this.nCylinders = driveInfo.nCylinders;
            this.nHeads = driveInfo.nHeads;
            this.nSectors = driveInfo.nSectors;
            this.cbSector = driveInfo.cbSector || 512;
            cTotalSectors = this.nCylinders * this.nHeads * this.nSectors;
            cbMax = cTotalSectors * this.cbSector;
        }

        this.printf(MESSAGE.DISK + MESSAGE.INFO, "calculated size for %d files: %d bytes (%#x)\n", aFileData.length, cbTotal);

        if (cbTotal >= cbMax) {
            this.printf(MESSAGE.DISK + MESSAGE.ERROR, "file(s) too large (%d bytes total, %d bytes maximum)\n", cbTotal, cbMax);
            return false;
        }

        /*
         * Define abBoot (where we'll store the boot sector that we either build or select) along with some functions to
         * get/set 1/2/4-byte values in the boot sector.
         */
        let abBoot, diskInfo = this;
        let getBoot = function(off, len) {
            let val = 0;
            for (let i = 0; i < len; i++) {
                val |= abBoot[off++] << (i * 8);
            }
            return val;
        };
        let setBoot = function(off, len, val) {
            for (let i = 0; i < len; i++) {
                abBoot[off++] = val & 0xff;
                val >>>= 8;
            }
            diskInfo.assert(!val);
        };

        let cFATs = 2, typeFAT = 12, cbSector = 512;
        let cSectorsPerTrack, cHeads, cDataSectors, cbAvail;
        let iBPB = -1, cSectorsPerCluster, cbCluster, cFATSectors;
        let rootEntries = 0, cRootSectors;
        let cHiddenSectors = 0, cReservedSectors = 1, cDiagnosticSectors = 0;

        if (this.driveType >= 0) {
            /*
             * Build a BPB to accommodate the selected drive parameters and file requirements, and calculate all
             * the other values we'll need, including total number of data sectors (cDataSectors).
             */
            this.minDOSVersion = 2.0;
            abBoot = [                  // start with a BPB for a 10Mb hard drive
                0xEB, 0xFE, 0x90,       // 0x00: JMP instruction, following by 8-byte OEM signature
                0x49, 0x42, 0x4D, 0x20, 0x20, 0x32, 0x2E, 0x30,     // "IBM  2.0" (WARNING: this signature is REQUIRED for PC DOS 3.x if using a 12-bit FAT)
                0x00, 0x02,             // 0x0B: bytes per sector (eg, 0x200 or 512)
                0x08,                   // 0x0D: sectors per cluster (eg, 8)
                0x01, 0x00,             // 0x0E: reserved sectors (# sectors preceding the FAT--usually just the boot sector)
                0x02,                   // 0x10: FAT copies (normally 2)
                0x00, 0x02,             // 0x11: root directory entries (512)
                0x03, 0x51,             // 0x13: total sectors, less hidden sectors (DISKSECS)
                0xF8,                   // 0x15: media ID (eg, 0xF8: hard drive)
                0x08, 0x00,             // 0x16: sectors per FAT (8)
                0x11, 0x00,             // 0x18: sectors per track (17)
                0x04, 0x00,             // 0x1A: number of heads (4)
                0x01, 0x00,             // 0x1C: number of hidden sectors (always 0 for non-partitioned media)
                0x00,                   // 0x1E: PC DOS 2.0 through 3.1 stores BOOTDRIVE here (0x00 for floppy, 0x80 for hard drive)
                0x00,                   // 0x1F: PC DOS 2.0 through 3.1 uses this space for BOOTHEAD calculations
                0x00                    // 0x20: PC DOS 2.0 stores number of sectors in IO.SYS/IBMBIO.COM here (repurposed later as LARGESECS)
            ];

            let bMediaID = 0xF0;        // TODO: set this correctly (will be hard to do for non-traditional media)
            cHeads = this.nHeads;
            cSectorsPerTrack = this.nSectors;

            if (driveInfo.partitioned) {
                bMediaID = 0xF8;
                cHiddenSectors = driveInfo.hiddenSectors || 1;
                cDiagnosticSectors = cHeads * cSectorsPerTrack;
            }

            if (cTotalSectors <= cHiddenSectors + cDiagnosticSectors) {
                this.printf(MESSAGE.DISK + MESSAGE.ERROR, "insufficient sectors (%d total, %d unusable)\n", cTotalSectors, cHiddenSectors + cDiagnosticSectors);
                return false;
            }
            cTotalSectors -= cHiddenSectors + cDiagnosticSectors;

            cbSector = driveInfo.cbSector || cbSector;
            setBoot(DiskInfo.BPB.SECBYTES, 2, cbSector);

            /*
             * We now decide on the type of FAT and the cluster size.  The caller may have preferences for one or both of
             * those values, which we will try to honor, but there are no guarantees.
             *
             * Note that nearestPowerOfTwo() serves two purposes: it not only ensures a result that is always a power of 2,
             * but it also ensures the result is less than or equal the given limit (ie, 64).  Allegedly, sectors/cluster
             * CAN be as large as 128 (the largest power of 2 that can fit in a byte), but the sector size would have to be
             * 256 instead of the usual 512, because I don't think cluster sizes > 32K are supported by DOS.  However, I'm
             * not even going to go down that rabbit hole....
             *
             * NOTE: Speaking of 256-byte sectors, the 1999 Microsoft FAT "White Paper" claims that only sector sizes of
             * 512, 1024, 2048, and 4096 are supported.  I would have assumed that the 4 supported values were actually 128,
             * 256, 512, and 1024, based on historical IBM PC hardware limitations.  If I had to guess, I'd say that ALL
             * powers of 2 from 128 through 4096 are allowed, but that not all values are supported by all operating systems.
             */
            cSectorsPerCluster = driveInfo.clusterSize && Math.ceil(driveInfo.clusterSize / cbSector) || 1;
            let maxSectorsPerCluster = (32 * 1024 / cbSector)|0;
            if (driveInfo.typeFAT == 12 || driveInfo.typeFAT == 16) {
                typeFAT = driveInfo.typeFAT;
            }
            cSectorsPerCluster = DiskInfo.nearestPowerOfTwo(cSectorsPerCluster, maxSectorsPerCluster);

            /*
             * At the risk of creating a disk image that can't accommodate all the user-supplied files OR that DOS
             * may fail to boot, we now honor any *explicitly* set number of root directory entries.
             */
            rootEntries = driveInfo.rootEntries || 512;
            rootEntries = ((rootEntries + 15) >> 4) << 4;       // round up to nearest multiple of 16
            if (!driveInfo.rootEntries && rootEntries < aFileData.length) {
                rootEntries = Math.ceil(aFileData.length / rootEntries) * rootEntries;
            }

            /*
             * Before we validate our numbers, we must first account for any requirements that the caller's DOS version
             * imposes on us.  For example, DOS 2.x has very specific drive size thresholds that control both cluster size
             * and root directory size.
             *
             * WARNING: The cTotalSectors value we are using here do NOT take into account any additional hidden sectors
             * we may add below when adjusting the starting sector of IO.SYS/IBMBIO.COM, so if you're booting a version of
             * DOS that performs these same tests using the total sectors value from the partition table, then it may be
             * using a slightly different value and therefore arriving at different defaults.
             */
            if (!driveInfo.clusterSize) {
                if (cTotalSectors <= 512) {             // 0x0200 (256Kb)
                    cSectorsPerCluster = 1;
                } else if (cTotalSectors <= 2048) {     // 0x0800 (1Mb)
                    cSectorsPerCluster = 2;
                } else if (cTotalSectors <= 8192) {     // 0x2000 (4Mb)
                    cSectorsPerCluster = 4;
                } else if (cTotalSectors <= 32680) {    // 0x7FA8 (16Mb)
                    cSectorsPerCluster = 8;
                } else if (driveInfo.verDOS >= 3.0) {
                    typeFAT = 16;
                    if (cTotalSectors <= 262144) {
                        cSectorsPerCluster = 4;         // 0x40000 (128Mb)
                    }else if (cTotalSectors <= 524288) {
                        cSectorsPerCluster = 8;         // 0x80000 (256Mb)
                    } else if (cTotalSectors <= 1048576) {
                        cSectorsPerCluster = 16;        // 0x100000 (512Mb)
                    } else if (cTotalSectors <= 2097152) {
                        cSectorsPerCluster = 32;        // 0x200000 (1Gb)
                    } else {
                        cSectorsPerCluster = 64;        // 0x400000 (2Gb)
                    }
                } else {
                    cSectorsPerCluster = 16;
                }
            }
            if (!driveInfo.rootEntries) {
                if (cTotalSectors <= 512) {             // 0x0200
                    rootEntries = 64;
                } else if (cTotalSectors <= 2048) {     // 0x0800
                    rootEntries = 112;
                } else if (cTotalSectors <= 8192) {     // 0x2000
                    rootEntries = 256;
                } else if (cTotalSectors <= 32680 ||    // 0x7FA8
                            driveInfo.verDOS == 3) {    // PC DOS 3.0 seems to have a hard-coded preference for 512 entries
                    rootEntries = 512;
                } else {
                    rootEntries = 1024;                 // TBD: Check DOS 3.x and later root directory thresholds
                }
            }
            cRootSectors = Math.ceil((rootEntries * 32) / cbSector);

            /*
             * This is our code to ensure that the the last sector of the BIOS (IO.SYS or IBMBIO.COM) falls on the
             * last sector of a track.
             *
             * This weird requirement is due to how PC DOS and MS-DOS 2.x/3.x boot sectors read the first system file
             * into memory: they read the file one track at a time; the first track read may be partial, because it
             * starts with whatever the file's first sector is, but every subsequent read is a whole track, even if the
             * file doesn't occupy the entire track.
             *
             * This would be OK if there was ample memory, but the boot sector doesn't relocate itself from 0:7C00,
             * and with its stack sitting just below that address, there's room for only about 28K of file data.  For
             * reference, IO.SYS in MS-DOS 3.30 is about 22K, so there's enough room, but if the final sector is near
             * the start of a track, then the final full track read (8.5K for a track with 17 sectors) runs the risk
             * of overwriting the stack and/or the boot sector itself.
             *
             * See https://www.os2museum.com/wp/hang-with-early-dos-boot-sector/ for more details; it's accurate except
             * for the implication that a contemporaneous disk using only 17 sectors per track was safe (it was not).
             *
             * To make matters *slightly* worse, the affected boot sectors didn't accurately calculate the sector size
             * of the system file correctly; in keeping with the overall "sloppy" approach, they simply divided the file
             * size by the sector size and then *always* added 1 (they should have added 1 only if there was a remainder).
             *
             * This affects any version of IO.SYS or IBMBIO.COM that is an exact multiple of 512 (such as IBMBIO.COM
             * from PC DOS 2.00, which is 4608 bytes or 9 sectors; the boot sector will read 10 sectors instead).  Although
             * interestingly, DOS 2.x "precalculates" that number and stores it in the BPB at offset 0x20, whereas DOS 3.x
             * actually reads the file size from the directory entry and performs the calculation at runtime.  In both
             * cases though, the calculation is "sloppy".
             *
             * Having perfect hindsight, we can help the boot sector avoid running into trouble by performing the same
             * sloppy sector size calculation ourselves, dividing it by sectors per track, and ensuring that the remainder
             * matches the number of free sectors in the first data track (and adjusting volume sector usage until it does).
             * As a result, the system file will end at the end of a track, and the boot sector never risks reading too
             * much data.
             *
             * Finally, a note about disks with a cluster size of 2 or more sectors: on such disks, the final *cluster*
             * of IO.SYS/IBMBIO.COM may not end on a track boundary, but that's OK, because the boot sector is only
             * reading sectors, not clusters.  Any "overhang" is merely wasted cluster space and does not affect us here.
             */
            let cFileSectors = aFileData[0]? Math.trunc(aFileData[0].size / cbSector) + 1 : 0;
            let adjustTotalSectors = function() {
                let fAdjusted = false;
                /*
                 * We skip the hidden sectors adjustment if we weren't given any boot files OR we were given a DOS
                 * version that is >= 3.31; the COMPAQ DOS 3.31 boot sector reads the BIOS a sector at a time, not a
                 * track at a time, and this bug was actually semi-fixed in MS-DOS 3.30, but they only fixed the boot
                 * sector written by SYS and FORMAT, not the boot sector that's actually present on the MS-DOS 3.30
                 * boot diskette itself.
                 */
                if (cFileSectors && (!driveInfo.verDOS || driveInfo.verDOS < 3.31)) {
                    let maxAdjustments = driveInfo.hiddenSectors? 0 : cSectorsPerTrack;
                    while (maxAdjustments--) {
                        let cInitSectors = cHiddenSectors + cReservedSectors + cFATs * cFATSectors + cRootSectors;
                        /*
                         * I used to calculate the number of free sectors in the first track with free sectors:
                         *
                         *      let cFreeSectors = cSectorsPerTrack - (cInitSectors % cSectorsPerTrack);
                         *
                         * and break when cFreeSectors >= cFileSectors, because that meant the file was contained
                         * entirely within that track, but that's not sufficient, because if the disk is using a large
                         * number of sectors/track (eg, 63) AND the file happens to be at the start of the track, then
                         * a full track (31.5K) will be read, which will trash the boot sector.  We REALLY need to push
                         * the file to the END of the track, even if it's already fully contained within the track.
                         */
                        if ((cInitSectors + cFileSectors) % cSectorsPerTrack == 0) {
                            break;
                        }
                        /*
                         * I used to increase root directory sectors, since we were at least getting some benefit from the
                         * adjustment:
                         *
                         *      cRootSectors++;
                         *      rootEntries += (cbSector >> 5);
                         *
                         * However, that created compatibility issues (see the verDOS code above for specific thresholds we
                         * need to honor).  Next, I tried tweaking reserved sectors, but guess what?  Few if any versions of DOS
                         * actually honor reserved sectors (they assume it's 1 and crash if it isn't):
                         *
                         *      cReservedSectors++;
                         *
                         * So we're left with adjusting hidden sectors, which requires a corresponding adjustment to total sectors:
                         */
                        cHiddenSectors++;
                        cTotalSectors--;
                        fAdjusted = true;
                    }
                }
                return fAdjusted;
            };

            /*
             * Now we get to a thornier matter: when calculating how many clusters will fit on a disk, the calculation
             * SHOULD begin with total DATA sectors, not total DISK sectors.  But that presents a chicken-and-egg problem,
             * because we won't know the total DATA sectors until we've determined size of the FAT (in sectors) *and* the
             * size of the ROOT directory (in sectors) *and* the size of a cluster entry (12-bit or 16-bit).  Hence the
             * "gross" cluster calculation below.
             *
             * And there are trip-wires we have to be aware of: if total clusters is less than 4085 (0xFF5), then we MUST
             * use a 12-bit FAT (just as a drive with at least 4085 clusters but less than 65525 (0xFFF5) clusters MUST use
             * a 16-bit FAT).
             */
            let cRecalcs = 4;
            let grossClusters, minClusters, maxClusters, initSectors = cSectorsPerCluster;
            do {
                minClusters = (typeFAT == 12)? 0 : DiskInfo.FAT12.MAX_CLUSTERS + 1;
                maxClusters = (typeFAT == 12)? DiskInfo.FAT12.MAX_CLUSTERS : DiskInfo.FAT16.MAX_CLUSTERS;
                grossClusters = Math.floor(cTotalSectors / cSectorsPerCluster);

                /*
                 * We start with the basic estimate of sectors per FAT that DOS 2.x used for FAT12.
                 */
                cFATSectors = Math.ceil(Math.ceil(grossClusters * typeFAT / 8) / cbSector);
                if (driveInfo.verDOS == 3.0 && typeFAT == 16) {
                    /*
                     * Mimic the somewhat unusual calculations that DOS 3.0 introduced when calculating how many
                     * sectors a 16-bit FAT should consume (instead of simply honoring FATSECS in the BPB).  You
                     * can watch the code starting near 70:14AE (where it's checking the BPB OEM signature) and
                     * confirm the "sectors per FAT" result near 70:1587.
                     *
                     * Although they look odd at first glance, these calculations aren't really that fundamentally
                     * different from the DOS 2.x calculation, which becomes clearer when you substitute 16 for
                     * typeFAT and 512 for cbSector:
                     *
                     *      cFATSectors = ((cTotalSectors / cSectorsPerCluster) * 16 / 8) / 512
                     *  or:
                     *      cFATSectors = (cTotalSectors / cSectorsPerCluster) / 256
                     *  or:
                     *      cFATSectors = cTotalSectors / (cSectorsPerCluster * 256)
                     *
                     * the main differences being that the DOS 3.x code shaves reserved and root directory sectors
                     * from total sectors first, and slightly increases the final divisor by the number of FATs.  No
                     * doubt that slight divisor increase compensates for the fact this calculation does not account
                     * for sectors that the FATs themselves consume (and which should have also been deducted from
                     * total sectors).
                     *
                     * Without this, "pc.js --sys=pcdos:3.0 --drivetype=484:4:17" will fail (later versions work,
                     * presumably because they're actually honoring our BPB).
                     */
                    let divisor = cSectorsPerCluster * 256 + cFATs;
                    cFATSectors = Math.ceil((cTotalSectors - cReservedSectors - cRootSectors) / divisor);
                }

                /*
                 * This next bit is an experiment, because it turns out a disk with 10948 total sectors (162:4:17)
                 * and 4K clusters only needs 4 sectors per FAT, not 5.  And yes, that drive geometry actually has
                 * 11016 sectors, but don't forget that we generally don't use the last cylinder (remember, we are
                 * pretending it's the 1980s, when the last cylinder was reserved for diagnostics and head-parking).
                 *
                 * This is one of many such corner cases, and there's a warning below (see cActualClusters) that will
                 * appear whenever we encounter them.  Calculating all those cases here (rather than hard-coding one
                 * particular disk size) is really what's required, but it's a tricky calculation to do at this point,
                 * and since it's moot, why bother?  DOS (or at least DOS 2.x) requires that we waste the same amount
                 * of space that it wasted, because it doesn't actually honor FATSECS in the BPB.
                 *
                 * So, set trimFAT only if you *really* want to see this failure in DOS 2.x.  ;-)
                 */
                if (driveInfo.trimFAT) {
                    if (cTotalSectors == 10947 && cSectorsPerCluster == 8 && cFATSectors == 5) {
                        cFATSectors = 4;
                    }
                }
                if (grossClusters < minClusters) {
                    if (!cRecalcs--) break;
                    typeFAT = 12;
                    cSectorsPerCluster = initSectors;
                    initSectors = 1;
                    continue;
                }
                if (grossClusters <= maxClusters) {
                    /*
                     * At this point, one would presume we're in good shape as far as basic FAT criteria are concerned,
                     * but there are few other things we want to verify, too.
                     *
                     * IO.SYS in MS-DOS 3.30 cannot safely load a FAT larger than 32K (eg, 64 512-byte FAT sectors);
                     * (see 0000:7DC6).  Presumably disks it formats itself will never break that rule, but we want to
                     * make sure.  Versions 3.31 and up are presumed safe (but I have not confirmed that).
                     *
                     * SIDE NOTE: Who thought it was a good idea to read the *entire* FAT into memory in the first place?
                     * I imagine that 99% of the time, only the first FAT sector will actually be used during boot.
                     */
                    if (cFATSectors * cbSector <= 32 * 1024 || driveInfo.verDOS >= 3.31) {
                        /*
                         * Make sure total sectors doesn't need to be adjusted to avoid a bug (see adjustTotalSectors()
                         * for details).  If it does, then take another pass through this loop, initially continuing without
                         * adjusting the cluster size.
                         */
                        if (adjustTotalSectors()) {
                            if (!cRecalcs--) break;
                            continue;
                        }
                        break;
                    }
                }
                if (cSectorsPerCluster == maxSectorsPerCluster) {
                    if (typeFAT == 12) {
                        if (!cRecalcs--) break;
                        typeFAT = 16;
                        cSectorsPerCluster = initSectors;
                        initSectors = 1;
                        continue;
                    }
                    this.printf(MESSAGE.DISK + MESSAGE.ERROR, "cluster size (%d) at limit for disk with %d sectors\n", cSectorsPerCluster * cbSector, cTotalSectors);
                    break;
                }
                cSectorsPerCluster *= 2;
            } while (true);

            if (cRecalcs < 0) {
                this.printf(MESSAGE.DISK + MESSAGE.ERROR, "unable to find suitable cluster size for %d sectors\n", cTotalSectors);
            }

            if (typeFAT == 16) {
                /*
                 * In general, the OEM signature should be changed from "2.0" to "3.0" to indicate 16-bit FAT support,
                 * with one exception: PC DOS 3.00 will still assume FAT12 if total sectors are <= 0x7FA8; in that case,
                 * the signature should remain "2.0", which will have the beneficial side-effect of PC DOS 3.00 honoring
                 * the BPB, after which it will calculate that there are too many clusters to fit on a FAT12 volume, so
                 * it will set a FAT16 flag.  The relevant code begin at 70:14AE.
                 *
                 * DOS versions 3.10 and higher change the rules again.  For drives with DISKSECS <= 0x7FA8, DOS will
                 * still make certain hard-coded assumptions about the formatting (ie, 12-bit FAT, 4K clusters, 512 directory
                 * entries, etc) UNLESS the OEM string has been bumped even higher (eg, "3.1").  Only then it will honor
                 * the values in the MBR and BPB.
                 *
                 * To debug MS-DOS 3.30, set a breakpoint at 70:0FB9, watch it read the MBR, examine the partition table,
                 * read the boot sector, and examine the OEM string.  It will NOT honor a 10Mb drive's BPB unless the OEM
                 * string contains something greater than "3.0".
                 */
                if (driveInfo.verDOS >= 3.1 || cTotalSectors > 0x7FA8) {
                    let verMajor = (driveInfo.verDOS|0) || 2;
                    let verMinor = (driveInfo.verDOS * 10 % 10) || 0;
                    setBoot(DiskInfo.BPB.OEM + 5, 1, 0x30 + verMajor);
                    setBoot(DiskInfo.BPB.OEM + 7, 1, 0x30 + verMinor);
                }
                if (this.minDOSVersion < 3.0) this.minDOSVersion = 3.0;
            }

            cbCluster = cSectorsPerCluster * cbSector;
            setBoot(DiskInfo.BPB.CLUSSECS, 1, cSectorsPerCluster);
            setBoot(DiskInfo.BPB.FATS, 1, cFATs);
            setBoot(DiskInfo.BPB.MEDIA, 1, bMediaID);
            setBoot(DiskInfo.BPB.FATSECS, 2, cFATSectors);
            setBoot(DiskInfo.BPB.TRACKSECS, 2, cSectorsPerTrack);
            setBoot(DiskInfo.BPB.DRIVEHEADS, 2, cHeads);

            if (cTotalSectors <= 0xffff) {
                setBoot(DiskInfo.BPB.DISKSECS, 2, cTotalSectors);
            } else {
                setBoot(DiskInfo.BPB.DISKSECS, 2, 0);
                setBoot(DiskInfo.BPB.LARGESECS, 4, cTotalSectors);
                this.minDOSVersion = 3.31;
            }
            setBoot(DiskInfo.BPB.DIRENTS, 2, rootEntries);
            setBoot(DiskInfo.BPB.RESSECS, 2, cReservedSectors);
            setBoot(DiskInfo.BPB.HIDDENSECS, 2, cHiddenSectors);
            if (driveInfo.verDOS >= 2.0 && driveInfo.verDOS < 3.2 && driveInfo.verDOS >= this.minDOSVersion) {
                setBoot(DiskInfo.BPB.BOOTDRIVE, 1, driveInfo.partitioned === false? 0x00 : 0x80);
                setBoot(DiskInfo.BPB.LARGESECS, 1, cFileSectors);       // TODO: only required for DOS 2.x?
            }

            cDataSectors = cTotalSectors - (cRootSectors + cFATs * cFATSectors + cReservedSectors);
            cbAvail = cDataSectors * cbSector;

            /*
             * While it's important to calculate cFATSectors the same way that DOS did it, I'm still curious how
             * often this results in wasted FAT sectors.
             */
            let cActualClusters = Math.trunc(cDataSectors / cSectorsPerCluster);
            let cActualFATSectors = Math.ceil(Math.ceil((cActualClusters + 2) * typeFAT / 8) / cbSector);
            if (cActualFATSectors != cFATSectors) {
                this.printf(MESSAGE.DISK + MESSAGE.WARNING, "%d FAT sectors allocated, but only %d are required\n", cFATSectors, cActualFATSectors);
            }
        }

        /*
         * If we didn't just construct a custom BPB, then find a default BPB with enough capacity, and at the same time,
         * calculate all the other values we'll need, including total number of data sectors (cDataSectors).
         *
         * TODO: For now, the code that chooses a default BPB starts with entry #3 instead of #0, because Windows 95
         * (at least when running under VMware) fails to read the contents of such disks correctly.  Whether that's my
         * fault or Windows 95's fault is still TBD (although it's probably mine -- perhaps 160Kb diskettes aren't
         * supposed to have BPBs?)  The simple work-around is to avoid creating 160Kb diskette images used by PC DOS 1.0.
         * To play it safe, I also skip the 320Kb format (added for PC DOS 1.1).  360Kb was the most commonly used format
         * after PC DOS 2.0 introduced it.  PC DOS 2.0 also introduced 180Kb (a single-sided version of the 360Kb
         * double-sided format), but it's less commonly used.
         *
         * UPDATE: I've undone the above change, because when creating a disk image for an old application like:
         *
         *      /apps/pcx86/1983/adventmath ["Adventures in Math (1983)"]
         *
         * it's important to create a disk image that will work with PC DOS 1.0, which didn't understand 180Kb and 360Kb
         * disk images.
         */
        if (!cTotalSectors) {
            let maxRoot = 0;
            for (iBPB = 0; iBPB < DiskInfo.aDefaultBPBs.length; iBPB++) {
                /*
                 * Use slice() to copy the BPB, to ensure we don't alter the original.
                 */
                abBoot = DiskInfo.aDefaultBPBs[iBPB].slice();
                /*
                 * If this BPB is for a hard drive but a disk size was not specified, skip it.
                 */
                if ((abBoot[DiskInfo.BPB.MEDIA] == DiskInfo.FAT.MEDIA_FIXED) != (kbTarget >= 10000)) continue;
                rootEntries = getBoot(DiskInfo.BPB.DIRENTS, 2);
                if (rootEntries > maxRoot) maxRoot = rootEntries;
                if (aFileData.length > rootEntries) continue;
                cbSector = getBoot(DiskInfo.BPB.SECBYTES, 2);
                cSectorsPerCluster = abBoot[DiskInfo.BPB.CLUSSECS];
                cbCluster = cbSector * cSectorsPerCluster;
                cFATs = abBoot[DiskInfo.BPB.FATS];
                cFATSectors = getBoot(DiskInfo.BPB.FATSECS, 2);
                cRootSectors = (((rootEntries * DiskInfo.DIRENT.LENGTH) + cbSector - 1) / cbSector) | 0;
                cTotalSectors = getBoot(DiskInfo.BPB.DISKSECS, 2);
                cHiddenSectors = getBoot(DiskInfo.BPB.HIDDENSECS, 2);
                cSectorsPerTrack = getBoot(DiskInfo.BPB.TRACKSECS, 2);
                cHeads = getBoot(DiskInfo.BPB.DRIVEHEADS, 2);
                cDataSectors = cTotalSectors - (cRootSectors + cFATs * cFATSectors + 1);
                cDiagnosticSectors = cHiddenSectors? cHeads * cSectorsPerTrack : 0;
                cbAvail = cDataSectors * cbSector;
                if (!nTargetSectors || cHiddenSectors) {
                    if (cbTotal <= cbAvail && nTargetSectors <= cTotalSectors) {
                        let cb = this.calcFileSizes(aFileData, cSectorsPerCluster);
                        if (cb <= cbAvail) {
                            cbTotal = cb;
                            break;
                        }
                    }
                } else {
                    if (nTargetSectors == cTotalSectors) break;
                }
            }
            if (iBPB == DiskInfo.aDefaultBPBs.length) {
                rootEntries = maxRoot;
                if (aFileData.length <= rootEntries) {
                    this.printf(MESSAGE.DISK + MESSAGE.ERROR, "files exceed supported disk formats (%d bytes total)\n", cbTotal);
                    return false;
                }
            }

            /*
             * Update drive geometry properties so that functions like getCHS() work properly now.
             */
            this.nCylinders = (cTotalSectors + cHiddenSectors + cDiagnosticSectors) / (cHeads * cSectorsPerTrack);
            this.nHeads = cHeads;
            this.nSectors = cSectorsPerTrack;
            this.cbSector = cbSector;
        }

        if (aFileData.length > rootEntries) {
            this.printf(MESSAGE.DISK + MESSAGE.ERROR, "%d files in root exceeds supported maximum of %d\n", aFileData.length, rootEntries);
            return false;
        }

        if (cbTotal > cbAvail) {
            this.printf(MESSAGE.DISK + MESSAGE.ERROR, "file(s) too large (%d bytes total, %d bytes available)\n", cbTotal, cbAvail);
            return false;
        }

        let abSector, offDisk = 0;
        let cbDisk = (cTotalSectors + cHiddenSectors) * cbSector;

        /*
         * If the disk is actually a partition on a larger drive, calculate how much larger the drive data
         * should be (ie, any hidden sectors preceding the volume, plus a final cylinder reserved for diagnostics,
         * head parking, etc).
         */
        let cbDrive = (cTotalSectors + cHiddenSectors + cDiagnosticSectors) * cbSector;

        /*
         * TODO: Consider doing what (the old) convertToIMG() did, which was deferring setting dbDisk until the
         * buffer is fully (and successfully) initialized.  Here, however, the build process relies on worker
         * functions that prefer not passing around temporary buffers.  In the meantime, perhaps any catastrophic
         * failures should set dbDisk back to null?
         */
        dbDisk.new(cbDrive);

        /*
         * WARNING: Buffers are NOT zero-initialized, so we need explicitly fill dbDisk with zeros (this seems
         * to be a reversal in the trend to zero buffers, when security concerns would trump performance concerns).
         */
        dbDisk.fill(0);

        /*
         * Output a Master Boot Record (MBR) if this is a hard drive image.
         */
        if (cHiddenSectors) {
            abSector = this.buildMBR(cHeads, cSectorsPerTrack, cbSector, cHiddenSectors, cTotalSectors, typeFAT);
            offDisk += this.copyData(dbDisk, offDisk, abSector) * cHiddenSectors;
        }

        /*
         * Output a boot sector.
         */
        abBoot[DiskInfo.BOOT.SIG_OFFSET] = DiskInfo.BOOT.SIGNATURE & 0xff;            // 0x55
        abBoot[DiskInfo.BOOT.SIG_OFFSET + 1] = (DiskInfo.BOOT.SIGNATURE >> 8) & 0xff; // 0xAA
        abSector = this.buildData(cbSector, abBoot);
        offDisk += this.copyData(dbDisk, offDisk, abSector) * cReservedSectors;

        /*
         * Build the FAT, noting the starting cluster number that each file will use along the way.
         *
         * Also, notice that the first byte of the FAT is the "media ID" byte that's replicated in the
         * BPB at offset 0x15.  For old BPB-less diskettes, this is where you must look for the media ID.
         */
        let abFAT = [];
        this.buildFATEntry(abFAT, 0, abBoot[DiskInfo.BPB.MEDIA] | 0xFF00, typeFAT);
        this.buildFATEntry(abFAT, 1, 0xFFFF, typeFAT);
        this.buildFAT(abFAT, aFileData, 2, cbCluster, typeFAT);

        /*
         * Output the FAT sectors; we simplify the logic a bit by writing each FAT table as if it
         * were one giant sector.
         */
        while (cFATs--) {
            abSector = this.buildData(cFATSectors * cbSector, abFAT);
            offDisk += this.copyData(dbDisk, offDisk, abSector);
        }

        /*
         * Build the root directory
         */
        let abRoot = [];
        let cEntries = this.buildDir(abRoot, aFileData);

        /*
         * PC DOS 1.x requires ALL unused directory entries to start with 0xE5; 0x00 isn't good enough,
         * so we must loop through all the remaining directory entries and zap them with 0xE5.
         *
         * However, we do this ONLY for the first two BPB types (160K and 320K diskettes), since those are
         * the only formats PC DOS 1.x understood.
         */
        if (iBPB >= 0 && iBPB < 2) {
            let offRoot = cEntries * DiskInfo.DIRENT.LENGTH;
            while (cEntries++ < rootEntries) {
                abRoot[offRoot] = DiskInfo.DIRENT.INVALID;         // 0xE5
                offRoot += DiskInfo.DIRENT.LENGTH;                 // 0x20 (32)
            }
        }

        /*
         * Output the root directory sectors (as before, as if they were one giant sector)
         */
        abSector = this.buildData(cRootSectors * cbSector, abRoot);
        offDisk += this.copyData(dbDisk, offDisk, abSector);

        /*
         * Output the file data clusters, which must be stored sequentially, mirroring the order in which
         * we wrote the cluster sequences to the FAT, above.
         */
        let cClusters = this.buildClusters(dbDisk, aFileData, offDisk, cbCluster, 0, 0);
        offDisk += cClusters * cSectorsPerCluster * cbSector;

        this.printf(MESSAGE.DISK + MESSAGE.INFO, "%d bytes written, %d bytes available\n", offDisk, cbDisk);

        if (offDisk > cbDisk) {
            this.printf(MESSAGE.DISK + MESSAGE.ERROR, "too much data for disk image (%d clusters required)\n", cClusters);
            return false;
        }

        return this.buildDiskFromBuffer(dbDisk, undefined, fnHash, driveInfo);
    }

    /**
     * calcFileSizes(aFileData, cSectorsPerCluster)
     *
     * @this {DiskInfo}
     * @param {Array.<FileData>} aFileData
     * @param {number} [cSectorsPerCluster] (default is 1)
     * @returns {number} of bytes required for all files, including all subdirectories
     */
    calcFileSizes(aFileData, cSectorsPerCluster)
    {
        let cbTotal = 0;
        let cbCluster = (cSectorsPerCluster || 1) * 512;
        for (let iFile = 0; iFile < aFileData.length; iFile++) {
            let cb = aFileData[iFile].size;
            let cbSubTotal = 0;
            if (cb < 0) {
                cb = (aFileData[iFile].files.length + 2) * 32;
                cbSubTotal = this.calcFileSizes(aFileData[iFile].files, cSectorsPerCluster);
            }
            cbTotal += cb;
            if ((cb %= cbCluster)) {
                cbTotal += cbCluster - cb;
            }
            cbTotal += cbSubTotal;
        }
        return cbTotal;
    }

    /**
     * buildData(cb)
     *
     * @this {DiskInfo}
     * @param {number} cb
     * @param {Array.<number>} [abInit]
     * @returns {Array.<number>} of bytes, initialized with abInit (or with zero when abInit is empty or exhausted)
     */
    buildData(cb, abInit)
    {
        let ab = new Array(cb);
        for (let i = 0; i < cb; i++) {
            ab[i] = abInit && abInit[i] || 0;
        }
        return ab;
    }

    /**
     * copyData(db, offset, ab)
     *
     * @this {DiskInfo}
     * @param {BufferData} db
     * @param {number} offset
     * @param {Array.<number>} ab
     * @returns {number} number of bytes written
     */
    copyData(db, offset, ab)
    {
        db.fill(ab, offset, offset + ab.length);
        return ab.length;
    }

    /**
     * buildClusters(dbDisk, aFileData, offDisk, cbCluster, iParentCluster, done)
     *
     * @this {DiskInfo}
     * @param {DataBuffer} dbDisk
     * @param {Array.<FileData>} aFileData
     * @param {number} offDisk
     * @param {number} cbCluster
     * @param {number} iParentCluster
     * @param {number} iLevel
     * @param {function(Error)} done
     * @returns {number} number of clusters built
     */
    buildClusters(dbDisk, aFileData, offDisk, cbCluster, iParentCluster, iLevel)
    {
        let cSubDirs = 0;
        let cClusters = 0;

        for (let iFile = 0; iFile < aFileData.length; iFile++) {
            let dbData = aFileData[iFile].data;
            let cbData = aFileData[iFile].size;
            if (cbData > 0) {
                this.assert(cbData == dbData.length);
            }
            else if (cbData < 0) {
                let abData = [];
                cbData = this.buildDir(abData, aFileData[iFile].files, aFileData[iFile].date, aFileData[iFile].cluster, iParentCluster) * 32;
                dbData.new(cbData);
                dbData.fill(abData);
                cSubDirs++;
            }
            if (cbData) {
                dbData.copy(dbDisk, offDisk);
                this.printf(MESSAGE.DEBUG + MESSAGE.DISK, "%#x: %#x bytes written for %s\n", offDisk, dbData.length, aFileData[iFile].path);
            }
            offDisk += cbData;
            cClusters += ((cbData / cbCluster) | 0);
            let cbPartial = (cbData % cbCluster);
            if (cbPartial) {
                cbPartial = cbCluster - cbPartial;
                offDisk += cbPartial;
                cClusters++;
            }
        }

        if (cSubDirs > 0) {
            for (let iFile = 0; iFile < aFileData.length; iFile++) {
                let cb = aFileData[iFile].size;
                if (cb < 0) {
                    this.printf(MESSAGE.DEBUG + MESSAGE.DISK, "%#x: buildClusters()\n", offDisk);
                    let cSubClusters = this.buildClusters(dbDisk, aFileData[iFile].files, offDisk, cbCluster, aFileData[iFile].cluster, iLevel + 1);
                    cClusters += cSubClusters;
                    offDisk += cSubClusters * cbCluster;
                    this.printf(MESSAGE.DEBUG + MESSAGE.DISK, "%#x: buildClusters() returned, writing %d clusters\n", offDisk, cSubClusters);
                }
            }
        }

        return cClusters;
    }

    /**
     * buildDateTime(dateMod)
     *
     * NOTE: We now check for dates where getFullYear() is less than 1980, which can happen when
     * a dateMod entry was left uninitialized (ie, zero); in those cases, we return zero, so that
     * the directory entry can be recreated in a similar state.
     *
     * @this {DiskInfo}
     * @param {Date} dateMod contains the modification time of a file
     * @returns {number} the time (bits 0-15) and date (bits 16-31) in FAT format (aka modDateTime)
     */
    buildDateTime(dateMod)
    {
        if (!dateMod) return 0;
        let year = dateMod.getFullYear();
        if (year < 1980) return 0;
        let month = dateMod.getMonth() + 1;
        let day = dateMod.getDate();
        let time = ((dateMod.getHours() & 0x1F) << 11) | ((dateMod.getMinutes() & 0x3F) << 5) | ((dateMod.getSeconds() >> 1) & 0x1F);
        if (year > 2099) {      // technically, the year can go as high as 2107, but allowing that is probably a bad idea
            year = 2099; month = 12; day = 31; time = 1;
        }
        let date = (((year - 1980) & 0x7F) << 9) | (month << 5) | day;
        return ((date & 0xffff) << 16) | (time & 0xffff);
    }

    /**
     * buildDir(abDir, aFileData, dateMod, iCluster, iParentCluster)
     *
     * @this {DiskInfo}
     * @param {Array.<number>} abDir
     * @param {Array.<FileData>} aFileData
     * @param {Date} [dateMod]
     * @param {number} [iCluster]
     * @param {number} [iParentCluster]
     * @returns {number} number of directory entries built
     */
    buildDir(abDir, aFileData, dateMod, iCluster, iParentCluster)
    {
        if (dateMod === undefined) dateMod = null;
        if (iCluster === undefined) iCluster = -1;
        if (iParentCluster === undefined) iParentCluster = -1;

        let offDir = 0;
        let cEntries = 0;
        let names = [];
        if (iCluster >= 0) {
            offDir += this.buildDirEntry(abDir, offDir, ".", 0, DiskInfo.ATTR.SUBDIR, dateMod, iCluster);
            offDir += this.buildDirEntry(abDir, offDir, "..", 0, DiskInfo.ATTR.SUBDIR, dateMod, iParentCluster);
            cEntries += 2;
        }
        for (let iFile = 0; iFile < aFileData.length; iFile++) {
            let file = aFileData[iFile];
            if (file.cluster === undefined) {
                this.printf(MESSAGE.DISK, "file %s missing cluster, skipping\n", file.name);
                continue;
            }
            let name, uniqueID = 0;
            do {
                name = this.buildShortName(file.name, !!(file.attr & DiskInfo.ATTR.VOLUME), uniqueID++, file.nameEncoding);
            } while (names.indexOf(name) >= 0);
            if (file.attr != DiskInfo.ATTR.VOLUME) {
                names.push(name);       // volume labels are not considered a potential name conflict
            }
            offDir += this.buildDirEntry(abDir, offDir, name, file.size, file.attr, file.date, file.cluster);
            cEntries++;
        }
        return cEntries;
    }

    /**
     * buildDirEntry(ab, off, sName, cbFile, bAttr, dateMod, iCluster)
     *
     * TODO: This function should now be using DiskInfo.DIRENT constants where appropriate.
     *
     * @this {DiskInfo}
     * @param {Array.<number>} ab contains the bytes of a directory
     * @param {number} off is the offset within ab to build the next directory entry
     * @param {string} sName is the file name
     * @param {number} cbFile is the size of the file, in bytes
     * @param {number} bAttr contains the attribute bits of the file
     * @param {Date} dateMod contains the modification date of the file
     * @param {number} iCluster is the starting cluster of the file
     * @returns {number} number of bytes added to the directory (normally 32)
     */
    buildDirEntry(ab, off, sName, cbFile, bAttr, dateMod, iCluster)
    {
        let i;
        let sExt = "";
        let offDir = off;
        if (bAttr == DiskInfo.ATTR.VOLUME) {
            sExt = sName.substr(8, 3);
            sName = sName.substr(0, 8);
        } else {
            i = sName.indexOf('.');
            if (i > 0) {
                sExt = sName.substr(i+1);
                sName = sName.substr(0, i);
            }
        }
        for (i = 0; i < 8; i++) {
            ab[off++] = (i < sName.length? sName.charCodeAt(i) : 0x20);
        }
        for (i = 0; i < 3; i++) {
            ab[off++] = (i < sExt.length? sExt.charCodeAt(i) : 0x20);
        }

        /*
         * File attribute bits at offset 0x0B are next: (0x01 for read-only, 0x02 for hidden, 0x04 for system,
         * 0x08 for volume label, 0x10 for subdirectory, and 0x20 for archive)
         */
        ab[off++] = bAttr;

        /*
         * Skip 10 bytes, bringing us to offset 0x16: 2 bytes for modification time, plus 2 bytes for modification date.
         */
        off += 10;
        let modDateTime = this.buildDateTime(dateMod);
        ab[off++] = modDateTime & 0xff;
        ab[off++] = (modDateTime >> 8) & 0xff;
        modDateTime >>>= 16;
        ab[off++] = modDateTime & 0xff;
        ab[off++] = (modDateTime >> 8) & 0xff;

        /*
         * Now we're at offset 0x1A, where the starting cluster (2 bytes) and file size (4 bytes) are stored,
         * completing the 32-byte directory entry.
         */
        ab[off++] = iCluster & 0xff;                // first file cluster (low byte)
        ab[off++] = (iCluster >> 8) & 0xff;         // first file cluster (high byte)

        /*
         * For subdirectories, we recorded a -1 rather than a 0, because unlike true 0-length files, they DO actually
         * have a size, it's just not immediately known until we traverse the directory's contents.  However, when it
         * comes time to the write the directory entry for a subdirectory, the FAT convention is to record it as zero.
         */
        if (cbFile < 0) cbFile = 0;
        ab[off++] = cbFile & 0xff;
        ab[off++] = (cbFile >> 8) & 0xff;
        ab[off++] = (cbFile >> 16) & 0xff;
        ab[off++] = (cbFile >> 24) & 0xff;

        return off - offDir;
    }

    /**
     * buildFAT(abFAT, aFileData, iCluster, cbCluster, typeFAT)
     *
     * @this {DiskInfo}
     * @param {Array.<number>} abFAT
     * @param {Array.<FileData>} aFileData
     * @param {number} iCluster
     * @param {number} cbCluster
     * @param {number} [typeFAT] (ie, 12, 16, 32; default is 12)
     * @returns {number}
     */
    buildFAT(abFAT, aFileData, iCluster, cbCluster, typeFAT = 12)
    {
        let cb;
        let cSubDirs = 0;
        for (let iFile = 0; iFile < aFileData.length; iFile++) {
            cb = aFileData[iFile].size;
            if (cb < 0) {
                cb = (aFileData[iFile].files.length + 2) * 32;
                cSubDirs++;
            }
            let cFileClusters = ((cb + cbCluster - 1) / cbCluster) | 0;
            if (!cFileClusters) {
                aFileData[iFile].cluster = 0;
            } else {
                aFileData[iFile].cluster = iCluster;
                while (cFileClusters-- > 0) {
                    let iNextCluster = iCluster + 1;
                    if (!cFileClusters) iNextCluster = (1 << typeFAT) - 1;
                    this.printf(MESSAGE.DEBUG + MESSAGE.DISK, "%s: setting cluster entry %d to %#0wx\n", aFileData[iFile].name, iCluster, iNextCluster);
                    this.buildFATEntry(abFAT, iCluster++, iNextCluster, typeFAT);
                }
            }
        }
        if (cSubDirs) {
            for (let iFile = 0; iFile < aFileData.length; iFile++) {
                cb = aFileData[iFile].size;
                if (cb < 0) {
                    iCluster = this.buildFAT(abFAT, aFileData[iFile].files, iCluster, cbCluster, typeFAT);
                }
            }
        }
        return iCluster;
    }

    /**
     * buildFATEntry(abFat, iFat, v, typeFAT)
     *
     * @this {DiskInfo}
     * @param {Array.<number>} abFAT
     * @param {number} iFAT
     * @param {number} v
     * @param {number} [typeFAT] (ie, 12, 16, 32; default is 12)
     */
    buildFATEntry(abFAT, iFAT, v, typeFAT = 12)
    {
        let iBit = iFAT * typeFAT;
        let iByte = (iBit >> 3);
        v &= ((1 << typeFAT) - 1);
        if (typeFAT == 16) {
            abFAT[iByte] = v & 0xff;
            abFAT[iByte + 1] = (v >> 8);
        }
        else if ((iBit % 8) === 0) {
            abFAT[iByte] = v & 0xff;
            iByte++;
            if (abFAT[iByte] === undefined) abFAT[iByte] = 0;
            abFAT[iByte] = (abFAT[iByte] & 0xF0) | (v >> 8);
        }
        else {
            if (abFAT[iByte] === undefined) abFAT[iByte] = 0;
            abFAT[iByte] = (abFAT[iByte] & 0x0F) | ((v & 0xF) << 4);
            abFAT[iByte + 1] = (v >> 4);
        }
    }

    /**
     * buildMBR(cHeads, cSectorsPerTrack, cbSector, cHiddenSectors, cTotalSectors, typeFAT)
     *
     * @this {DiskInfo}
     * @param {number} cHeads
     * @param {number} cSectorsPerTrack
     * @param {number} cbSector
     * @param {number} cHiddenSectors
     * @param {number} cTotalSectors
     * @param {number} [typeFAT] (ie, 12, 16, 32; default is 12)
     * @returns {Array.<number>}
     */
    buildMBR(cHeads, cSectorsPerTrack, cbSector, cHiddenSectors, cTotalSectors, typeFAT = 12)
    {
        /*
         * There are four 16-byte partition entries in the MBR, starting at offset 0x1BE,
         * but we need only one, and like DOS 2.0, we'll use the last one, at offset 0x1EE.
         */
        let offSector = 0x1EE;
        let abSector = this.buildData(cbSector);

        /*
         * Next 1 byte: status + physical drive #
         */
        abSector[offSector++] = 0x80;           // 0x80 indicates an active partition entry

        /*
         * Next 3 bytes: CHS (Cylinder/Head/Sector) of first partition sector
         */
        let chs = this.getCHS(cHiddenSectors);
        abSector[offSector++] = chs[1];                                 // head: 0
        abSector[offSector++] = chs[2] | ((chs[0] & 0x300) >> 2);       // sector: 2 (bits 0-5), cylinder bits 8-9: 0 (bits 6-7)
        abSector[offSector++] = chs[0] & 0xff;                           // cylinder bits 0-7: 0

        /*
         * Next 1 byte: partition ID
         */
        let id = typeFAT == 12? DiskInfo.MBR.PARTITIONS.TYPE.FAT12_PRIMARY : (cTotalSectors <= 0xffff? DiskInfo.MBR.PARTITIONS.TYPE.FAT16_PRIMARY : DiskInfo.MBR.PARTITIONS.TYPE.FAT16_BIG);
        abSector[offSector++] = id;             // partition ID

        /*
         * Next 3 bytes: CHS (Cylinder/Head/Sector) of last partition sector
         */
        abSector[offSector++] = cHeads-1;
        let cCylinders = (cTotalSectors / (cHeads * cSectorsPerTrack)) | 0;
        abSector[offSector++] = cSectorsPerTrack | ((cCylinders & 0x300) >> 2);
        abSector[offSector++] = cCylinders & 0xff;

        /*
         * Next 4 bytes: LBA (Logical Block Address) of first partition sector
         */
        abSector[offSector++] = cHiddenSectors & 0xff;
        abSector[offSector++] = (cHiddenSectors >> 8) & 0xff;
        abSector[offSector++] = (cHiddenSectors >> 16) & 0xff;
        abSector[offSector++] = (cHiddenSectors >> 24) & 0xff;

        /*
         * Next 4 bytes: Number of sectors in partition
         */
        abSector[offSector++] = cTotalSectors & 0xff;
        abSector[offSector++] = (cTotalSectors >> 8) & 0xff;
        abSector[offSector++] = (cTotalSectors >> 16) & 0xff;
        abSector[offSector++] = (cTotalSectors >> 24) & 0xff;

        /*
         * Since we should be at offset 0x1FE now, store the MBR signature bytes
         */
        abSector[offSector++] = 0x55;
        abSector[offSector] = 0xAA;
        return abSector;
    }

    /**
     * buildShortName(sFile, fLabel, uniqueID, encoding)
     *
     * @this {DiskInfo}
     * @param {string} sFile is the basename of a file
     * @param {boolean} [fLabel]
     * @param {number} [uniqueID]
     * @param {string} [encoding] (eg, "utf8", "cp437", "ascii")
     * @returns {string} containing a corresponding filename in FAT "8.3" format
     */
    buildShortName(sFile, fLabel=false, uniqueID=0, encoding="utf8")
    {
        let sName = (encoding == "utf8")? sFile.toUpperCase() : CharSet.toUpperCaseASCII(sFile);
        if (fLabel) {
            /*
             * Character validation is disabled for labels; I'm not sure what the limitations are on label characters,
             * if any, but they definitely allow for things like extra periods and lower-case letters.
             */
            sName = sName.substr(0, 11).trimEnd();
        } else {
            let iExt = sName.lastIndexOf('.');
            let sExt = "";
                if (iExt >= 0) {
                sExt = sName.substr(iExt+1);
                sName = sName.substr(0, iExt);
            } else if (fLabel && sName.length > 8) {
                sExt = sName.substr(8);
            }
            sName = sName.substr(0, 8).trimEnd();
            if (uniqueID) {
                let suffix = "~" + uniqueID;
                sName = sName.substr(0, 8 - suffix.length) + suffix;
            }
            sExt = sExt.substr(0, 3).trimEnd();
            let iPeriod = -1;
            if (sExt) {
                iPeriod = sName.length;
                sName += '.' + sExt;
            }
            for (let i = 0; i < sName.length; i++) {
                if (i == iPeriod) continue;
                let ch = sName.charAt(i);
                /*
                 * If the filename encoding is "cp437", there's nothing to do, because that's the
                 * encoding we assume for PC disk images.  Ditto for "ascii", which is our fallback
                 * when dealing with modules (eg, StreamZip) that have no idea what "cp437" is/was.
                 * And finally, if the encoding is unknown, we again simply hope for the best.
                 *
                 * Only if the encoding has been explicitly set to "utf8" will we strip any non-standard
                 * FAT filename characters, because now we're dealing with a potentially huge set of
                 * characters, most of which have no meaning in the 8-bit world of early PCs.
                 */
                if (encoding == "utf8" && "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()-@^_`{}~ ".indexOf(ch) < 0) {
                    sName = sName.substr(0, i) + '_' + sName.substr(i + 1);
                }
            }
        }
        return sName;
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
        this.abOrigBPB = [];
        this.fBPBModified = false;
        this.hash = "none";

        if (typeof imageData == "string") {
            try {
                imageData = JSON.parse(imageData);
            } catch(e) {
                try {
                    imageData = JSON.parse(imageData.replace(/([a-z]+):/gm, "\"$1\":").replace(/\/\/[^\n]*/gm, ""));
                } catch(err) {
                    this.printf(MESSAGE.ERROR, "%s\n", err.message);
                }
            }
        }

        if (imageData) {
            /*
             * We now differentiate between "legacy" JSON images (which were simply arrays of CHS data)
             * and "v2" JSON images, which are objects with a CHS diskData property, among other things.
             */
            let imageInfo = imageData[DiskInfo.DESC.IMAGE];
            if (imageInfo) {
                let sOrigBPB = imageInfo[DiskInfo.IMAGE.ORIGBPB];
                if (sOrigBPB) this.abOrigBPB = JSON.parse(sOrigBPB);
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
                /*
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
                            this.printf(MESSAGE.DISK + MESSAGE.INFO, "%s: %d:%d has non-standard sector count: %d\n", this.diskName, iCylinder, iHead, nSectors);
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
                                this.printf(MESSAGE.DISK + MESSAGE.INFO, "%s: %d:%d:%d has non-standard sector size: %d\n", this.diskName, iCylinder, iHead, sector? sector[DiskInfo.SECTOR.ID] : (iSector+1), cbSector);
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
     * buildDiskFromPSI()
     *
     * Build disk image from a PSI file.
     *
     * PSI files are PCE Sector Image files; see https://github.com/jeffpar/pce/blob/master/doc/psi-format.txt for details.
     *
     * @this {DiskInfo}
     * @param {DataBuffer} dbDisk
     * @returns {boolean} true if successful (aDiskData initialized); false otherwise
     */
    buildDiskFromPSI(dbDisk)
    {
        this.aDiskData = null;
        this.cbDiskData = 0;

        this.abOrigBPB = [];
        this.fBPBModified = false;

        let data = [];
        let chunkOffset = 0;
        let chunkEnd = dbDisk.length;
        let chunkID, chunkSize = 0, dbChunk;

        let CHUNK_PSI  = 0x50534920;
        let CHUNK_END  = 0x454e4420;
        let CHUNK_SECT = 0x53454354;
        let CHUNK_OFFS = 0x4f464653;
        let CHUNK_IBMM = 0x49424d4d;    // "IBMM": IBM MFM sector header
        let CHUNK_TEXT = 0x54455854;
        let CHUNK_DATA = 0x44415441;

        let getCRC = function(start, end) {
            let crc = 0;
            for (let i = start; i < end; i++) {
                crc ^= dbDisk.readUInt8(i) << 24;
                for (let j = 0; j < 8; j++) {
                    if (crc & 0x80000000) {
                        crc = (crc << 1) ^ 0x1edc6f41;
                    } else {
                        crc = crc << 1;
                    }
                }
            }
            return crc | 0;
        };

        let getNextChunk = function() {
            if (chunkSize) chunkOffset += chunkSize + 12;
            chunkID = dbDisk.readUInt32BE(chunkOffset);
            chunkSize = dbDisk.readUInt32BE(chunkOffset + 4);
            let chunkCRC = dbDisk.readInt32BE(chunkOffset + 8 + chunkSize);
            let myCRC = getCRC(chunkOffset, chunkOffset + 8 + chunkSize);
            if (chunkCRC == myCRC) {
                dbChunk = dbDisk.slice(chunkOffset + 8, chunkOffset + 8 + chunkSize);
            } else {
                this.printf(MESSAGE.WARNING, "chunk 0x%x at 0x%x: CRC 0x%x != calculated CRC 0x%x\n", chunkID, chunkOffset, chunkCRC, myCRC);
                chunkID = CHUNK_END;
            }
        };

        getNextChunk();

        if (chunkID != CHUNK_PSI) {
            this.printf(MESSAGE.WARNING, "missing PSI header\n");
            chunkEnd = 0;
        }

        let fileFormat = dbChunk.readUInt16BE(0);
        let sectorFormat = dbChunk.readUInt16BE(2);
        let cylinder, head, idSector, size, flags, pattern, sector, sectorIndex, maxIndex;

        this.printf(MESSAGE.INFO, "file format: 0x%04x\nsector format: 0x%02x 0x%02x\n", fileFormat, sectorFormat >> 8, sectorFormat & 0xff);

        while (chunkOffset < chunkEnd) {
            getNextChunk();
            switch(chunkID) {

            case CHUNK_SECT:
                cylinder = dbChunk.readUInt16BE(0);
                head = dbChunk.readUInt8(2);
                idSector = dbChunk.readUInt8(3);
                size = dbChunk.readUInt16BE(4);
                flags = dbChunk.readUInt8(6);
                pattern = dbChunk.readUInt8(7);
                sector = {
                    [DiskInfo.SECTOR.CYLINDER]: cylinder,
                    [DiskInfo.SECTOR.HEAD]:     head,
                    [DiskInfo.SECTOR.ID]:       idSector,
                    [DiskInfo.SECTOR.LENGTH]:   size,
                    [DiskInfo.SECTOR.DATA]:     []
                };
                sectorIndex = 0;
                maxIndex = size >> 2;
                this.printf(MESSAGE.DEBUG, "SECT: %d:%d:%d %d bytes, flags 0x%x, pattern 0x%02x\n", cylinder, head, idSector, size, flags, pattern);
                while (data.length < cylinder + 1) {
                    data.push([]);
                }
                while (data[cylinder].length < head + 1) {
                    data[cylinder].push([]);
                }
                data[cylinder][head].push(sector);
                if (flags & 0x1) {
                    sector[DiskInfo.SECTOR.DATA][sectorIndex++] = pattern | (pattern << 8) | (pattern << 16) | (pattern << 24);
                }
                if (flags & 0x4) {
                    sector[DiskInfo.SECTOR.DATA_ERROR] = -1;
                }
                if (flags & ~(0x1 | 0x4)) {
                    this.printf(MESSAGE.WARNING, "unsupported flags: 0x%x\n", flags);
                }
                this.cbDiskData += size;
                break;

            case CHUNK_DATA:
                this.printf(MESSAGE.DEBUG, "DATA: %d bytes\n", dbChunk.length);
                if (!sector) {
                    this.printf(MESSAGE.ERROR, "no sector defined, aborting\n");
                    chunkID = 0;
                    break;
                }
                if (sectorIndex) {
                    this.printf(MESSAGE.WARNING, "sector with data and pattern\n");
                    sectorIndex = 0;
                }
                for (let off = 0; off < dbChunk.length; off += 4) {
                    if (sectorIndex >= maxIndex) {
                        this.printf(MESSAGE.WARNING, "data for sector offset %d exceeds sector length\n", sectorIndex * 4, size);
                    }
                    sector[DiskInfo.SECTOR.DATA][sectorIndex++] = dbChunk.readUInt8(off) | (dbChunk.readUInt8(off+1) << 8) | (dbChunk.readUInt8(off+2) << 16) | (dbChunk.readUInt8(off+3) << 24);
                }
                if (sectorIndex < maxIndex) {
                    this.printf(MESSAGE.WARNING, "sector data stops at offset %d instead of %d\n", sectorIndex * 4, size);
                }
                break;

            case CHUNK_IBMM:
                this.printf(MESSAGE.DEBUG, "IBMM: at 0x%x\n", chunkOffset);
                break;

            case CHUNK_OFFS:
                this.printf(MESSAGE.DEBUG, "OFFS: at 0x%x\n", chunkOffset);
                break;

            case CHUNK_TEXT:
                this.printf(MESSAGE.DEBUG, "TEXT: at 0x%x\n", chunkOffset);
                break;

            case CHUNK_END:
                chunkID = 0;
                this.aDiskData = data;
                break;

            default:
                this.printf(MESSAGE.WARNING, "unrecognized chunk at 0x%x: 0x%08x\n", chunkOffset, chunkID);
                chunkID = 0;
            }
            if (!chunkID) break;
        }
        return !!this.aDiskData;
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
                    let iVolume = desc[DiskInfo.FILEDESC.VOL] || 0;
                    let name = this.device.getBaseName(desc[DiskInfo.FILEDESC.PATH], false, true);
                    let path = desc[DiskInfo.FILEDESC.PATH].replace(/\//g, '\\');
                    let attr = +desc[DiskInfo.FILEDESC.ATTR];
                    /*
                     * parseDate() *must* return local time (the second parameter must be true), because we've changed
                     * everything else to use local time (eg, getFileListing()).
                     */
                    let date = this.device.parseDate(desc[DiskInfo.FILEDESC.DATE], true);
                    let size = desc[DiskInfo.FILEDESC.SIZE] || 0;
                    let file = new FileInfo(this, iVolume, path, name, attr, date, size);
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
     * buildTables(fRebuild)
     *
     * This function builds (or rebuilds) a complete file table from all FAT volumes found on the current disk,
     * and then updates all the sector objects with references to the corresponding file and offset.  Used for
     * BACKTRACK and SYMBOLS support.  Because this is an expensive operation, in terms of both time and memory,
     * it should only be called when a disk is mounted or has been modified (eg, by applying deltas from a saved
     * machine state).
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
     * @param {boolean} [fRebuild]
     * @returns {number} (-1 if error, otherwise number of files found across all volumes)
     */
    buildTables(fRebuild)
    {
        if (!this.fileTable.length && !this.tablesBuilt || fRebuild) {

            /*
             * The built flag avoids rebuilding tables needlessly for volumes that simply have zero files.
             */
            this.tablesBuilt = true;

            this.deleteTables();

            let sectorBoot = this.getSector(0);
            if (!sectorBoot) {
                this.printf(MESSAGE.DISK + MESSAGE.ERROR, "unable to read %s boot sector\n", this.diskName);
                return -1;
            }

            /*
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

            /*
             * If there's an original aFileData list, then we built this disk from a list of files, and we should
             * have saved the starting cluster number for each file in that list, so let's build a cluster lookup table
             * that will allow us to quickly associate each of the original file paths with the files on the disk.
             */
            let clusterInfo = [];
            if (this.aFileData) {
                let scanFiles = function(files) {
                    for (let i = 0; i < files.length; i++) {
                        let file = files[i];
                        if (file.cluster) {
                            clusterInfo[file.cluster] = {origin: file.path, contents: [...file.data.buffer]};
                        }
                        if (file.files) scanFiles(file.files);
                    }
                };
                scanFiles(this.aFileData);
            }

            /*
             * For all files in the file table, create the sector-to-file mappings now.
             */
            for (let iFile = 0; iFile < this.fileTable.length; iFile++) {
                let file = this.fileTable[iFile], off = 0;
                if (file.name == "." || file.name == "..") continue;
                if (file.cluster) {
                    let info = clusterInfo[file.cluster];
                    if (info) {
                        file.origin = info.origin;
                        file.contents = info.contents;
                    }
                }
                for (let iSector = 0; iSector < file.aLBA.length; iSector++) {
                    if (!this.updateSector(iFile, off, file.aLBA[iSector])) {
                        this.printf(MESSAGE.DISK + MESSAGE.ERROR, "unable to map %s sector to offset %d\n", file.name, off);
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
                /*
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
                        /*
                         * With such a heavy reliance on a single byte (idMedia) from the first FAT sector, we're going to
                         * believe this BPB match only for disks <= 360K.  I would have limited it to 320K (the largest
                         * that DOS 1.x supported), but there's the 360K Microsoft Chart 2.02 disk image (and a few others),
                         * which are a bit "off", so there you go.
                         */
                        if (cbDiskBPB == cbDisk && (cbDisk <= 360 * 1024 || !bpb[DiskInfo.BPB.MEDIA])) {
                            vol.idMedia = idMedia;
                            /*
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

            /*
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
                if (!iVolume) this.printf(MESSAGE.DISK + MESSAGE.WARNING, "%d-byte %s disk image contains unknown volume(s)\n", cbDisk, this.diskName);
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

        /*
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
                this.printf(MESSAGE.DISK + MESSAGE.ERROR, "%s volume %d %d-bit FAT inconsistent with cluster total (%d)\n", this.diskName, iVolume, vol.nFATBits, vol.clusTotal);
            }
        }

        vol.nFATBits = (vol.clusTotal <= DiskInfo.FAT12.MAX_CLUSTERS)? 12 : 16;
        vol.clusMax = (vol.nFATBits == 12)? DiskInfo.FAT12.CLUSNUM_MAX : DiskInfo.FAT16.CLUSNUM_MAX;

        if (!idMedia) idMedia = this.getClusterEntry(vol, 0, 0);

        if (idMedia != vol.idMedia) {
            this.printf(MESSAGE.DISK + MESSAGE.ERROR, "%s volume %d FAT ID (%#0bx) does not match media ID (%#0bx)\n", this.diskName, iVolume, idMedia, vol.idMedia);
            return null;
        }

        this.printf(MESSAGE.DEBUG + MESSAGE.DISK, "%s:\n  vbaFAT: %d\n  vbaRoot: %d\n  vbaData: %d\n  lbaTotal: %d\n  clusSecs: %d\n  clusTotal: %d\n", this.diskName, vol.vbaFAT, vol.vbaRoot, vol.vbaData, vol.lbaTotal, vol.clusSecs, vol.clusTotal);

        /*
         * The following assertion is here only to catch anomalies; it is NOT a requirement that the number of data sectors
         * be a perfect multiple of clusSecs, but if it ever happens, it's worth verifying we didn't miscalculate something.
         */
        let nWasted = (vol.lbaTotal - vol.vbaData) % vol.clusSecs;
        if (nWasted) this.printf(MESSAGE.DISK + MESSAGE.INFO, "%s volume %d contains %d sectors, wasting %d sectors\n", this.diskName, iVolume, vol.lbaTotal, nWasted);

        /*
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

        /*
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

        this.printf(MESSAGE.DISK + MESSAGE.INFO, "%s volume %d: %d cluster(s) bad, %d cluster(s) free, %d bytes free\n", this.diskName, iVolume, vol.clusBad, vol.clusFree, vol.clusFree * vol.clusSecs * vol.cbSector);
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
     * deleteTables()
     *
     * In order for buildTables() to rebuild an existing table (eg, after deltas have been
     * applied), we also need to zap any and all existing file table references in the sector data.
     *
     * @this {DiskInfo}
     */
    deleteTables()
    {
        if (this.fileTable.length) {
            let aDiskData = this.aDiskData;
            for (let iCylinder = 0; iCylinder < aDiskData.length; iCylinder++) {
                for (let iHead = 0; iHead < aDiskData[iCylinder].length; iHead++) {
                    for (let iSector = 0; iSector < aDiskData[iCylinder][iHead].length; iSector++) {
                        let sector = aDiskData[iCylinder][iHead][iSector];
                        if (sector) {
                            delete sector[DiskInfo.SECTOR.FILE_INDEX];
                            delete sector[DiskInfo.SECTOR.FILE_OFFSET];
                            delete sector.iModify;
                            delete sector.cModify;
                        }
                    }
                }
            }
        }
        this.fileTable = [];
        this.volTable = [];
    }

    /**
     * getFileDesc(file, fComplete, fnHash)
     *
     * @this {DiskInfo}
     * @param {FileInfo} file
     * @param {boolean} [fComplete] (if not "complete", then the descriptor omits NAME, since PATH includes it, as well as SIZE and VOL when they are zero)
     * @param {function(Array.<number>|string|DataBuffer)} [fnHash]
     * @returns {Object}
     */
    getFileDesc(file, fComplete, fnHash)
    {
        let ab = null;
        let desc = {
            [DiskInfo.FILEDESC.HASH]: file.hash,
            [DiskInfo.FILEDESC.PATH]: file.path.replace(/\\/g, '/'),
            [DiskInfo.FILEDESC.NAME]: file.name,
            [DiskInfo.FILEDESC.ATTR]: this.device.sprintf("%#0bx", file.attr),
            [DiskInfo.FILEDESC.DATE]: this.device.sprintf("%T", file.date),
            [DiskInfo.FILEDESC.SIZE]: file.size,
            [DiskInfo.FILEDESC.VOL]:  file.iVolume
        };
        if (file.size && !(file.attr & DiskInfo.ATTR.METADATA) && (fComplete || fnHash)) {
            this.assert(file.name[0] != '.');   // make sure we're not hashing "." and ".." DIRENTs
            if (file.contents) {
                ab = file.contents;
            } else {
                ab = new Array(file.size);
                this.readSectorArray(file, ab);
            }
        }
        if (fComplete) {
            desc[DiskInfo.FILEDESC.CONTENTS] = ab;
            if (file.origin) desc[DiskInfo.FILEDESC.ORIGIN] = file.origin;
        } else {
            delete desc[DiskInfo.FILEDESC.NAME];
            if (!file.size && (file.attr & DiskInfo.ATTR.SUBDIR | DiskInfo.ATTR.VOLUME)) {
                delete desc[DiskInfo.FILEDESC.SIZE];
            }
            if (!file.iVolume) {
                delete desc[DiskInfo.FILEDESC.VOL];
            }
        }
        if (file.module) {
            desc[DiskInfo.FILEDESC.MODULE] = {
                [DiskInfo.FILEDESC.MODNAME]: file.module,
                [DiskInfo.FILEDESC.MODDESC]: file.modDesc,
                [DiskInfo.FILEDESC.MODSEGS]: file.segments
            };
        }
        if (fnHash && ab) {
            let hash = fnHash(ab);
            if (desc[DiskInfo.FILEDESC.HASH] && hash != desc[DiskInfo.FILEDESC.HASH]) {
                this.printf(MESSAGE.DISK + MESSAGE.WARNING, "%s original hash (%s) does not match current hash (%s)\n", desc[DiskInfo.FILEDESC.PATH], desc[DiskInfo.FILEDESC.HASH], hash);
            }
            desc[DiskInfo.FILEDESC.HASH] = hash;
        } else {
            if (!desc[DiskInfo.FILEDESC.HASH]) delete desc[DiskInfo.FILEDESC.HASH];
        }
        return desc;
    }

    /**
     * getFileListing(iVolume, indent, options)
     *
     * If options is something other than "sorted" or "metadata", then it's assumed to be a file specification.
     *
     * @this {DiskInfo}
     * @param {number} [iVolume] (-1 to list contents of ALL volumes in image)
     * @param {number} [indent]
     * @param {boolean|string} [options]
     * @returns {string}
     */
    getFileListing(iVolume = -1, indent = 0, options)
    {
        let sListing = "";
        if (this.buildTables() > 0) {
            let nVolumes = this.volTable.length;
            if (iVolume < 0) {
                iVolume = 0;
            } else {
                nVolumes = 1;
            }
            let sIndent = " ".repeat(indent);
            let fileSpec = (typeof options == "string" && options != "sorted" && options != "metadata")? new RegExp("^" + options.replace(/\./g, "\\.").replace(/\*/g, ".*").replace(/\?/g, ".") + "$", "i") : null;
            while (iVolume < this.volTable.length && nVolumes-- > 0) {
                let vol = this.volTable[iVolume];
                let curVol = -1;
                let curDir = null;
                let cbDir = 0, nFiles = 0;
                let cbTotal = 0, nTotal = 0;
                let getTotal = function(nFiles, cbDir) {
                    return this.device.sprintf("%s %8d file(s)   %8d bytes\n", sIndent, nFiles, cbDir);
                }.bind(this);
                let i, sLabel = "", sDrive = "?";
                let fileTable = this.fileTable;
                if (options == "sorted") {
                    fileTable = this.fileTable.slice(0);
                    fileTable.sort(function(a, b) {
                        /*
                         * We don't use "a.path.localeCompare(b.path)", because we want a traditional
                         * ASCII sort, not a Unicode sort.
                         */
                        return a.path < b.path? -1 : (a.path > b.path? 1 : 0); //
                    });
                }
                /*
                 * Do a preliminary scan for a volume label, and don't look beyond root directory entries;
                 * since those are all at the beginning of the file table, we can stop as soon as we see a SUBDIR.
                 */
                let subDirs = false;
                let fileMatch = !fileSpec;
                for (i = 0; i < fileTable.length; i++) {
                    let file = fileTable[i];
                    if (file.iVolume > iVolume) break;
                    if (file.iVolume != iVolume) continue;
                    if (!fileMatch && file.name != "." && file.name != "..") {
                        if (file.name.match(fileSpec)) {
                            fileMatch = true;
                        }
                    }
                    if (file.path.lastIndexOf('\\') > 0) {
                        subDirs = true;
                        if (!fileSpec) break;
                    }
                    if ((file.attr & DiskInfo.ATTR.VOLUME) && !subDirs) {
                        /*
                         * Volume labels are displayed slightly differently from all other directory entries;
                         * specifically, they may contain non-standard characters (eg, extra periods, lower-case letters),
                         * and they are displayed as an 11-character sequence.  In other words, they are displayed as-is.
                         */
                        sLabel = file.name;
                        break;
                    }
                }
                for (i = 0; i < fileTable.length && fileMatch; i++) {
                    let file = fileTable[i];
                    if (file.iVolume != iVolume) continue;
                    if (file.attr & DiskInfo.ATTR.VOLUME) continue;
                    if ((file.attr & DiskInfo.ATTR.METADATA) && options != "metadata") continue;
                    if (curVol != file.iVolume) {
                        let vol = this.volTable[file.iVolume];
                        sDrive = String.fromCharCode(vol.iPartition < 0? 0x41 : 0x43 + vol.iPartition);
                        curVol = file.iVolume;
                    }
                    let name = file.name, ext = "";
                    let j = file.path.lastIndexOf('\\');
                    let dir = file.path.substring(0, j);
                    if (!dir) dir = "\\";
                    /*
                     * The only names allowed to begin with a period are "." and "..", and those should always
                     * have an attr with DiskInfo.ATTR.SUBDIR set.
                     */
                    if (name[0] != ".") {
                        j = name.indexOf(".");
                        if (j > 0) {
                            ext = name.substr(j + 1);
                            name = name.substr(0, j);
                        }
                    }
                    if (curDir != dir) {
                        if (curDir != null) {
                            sListing += getTotal(nFiles, cbDir);
                        } else {
                            sListing += this.device.sprintf("\n%s Volume in drive %s %s%s", sIndent, sDrive, sLabel? "is " : "has no label", sLabel);
                        }
                        curDir = dir;
                        sListing += this.device.sprintf("\n%s Directory of %s:%s\n\n", sIndent, sDrive, dir);
                        cbDir = nFiles = 0;
                    }
                    let sSize;
                    if (file.attr & DiskInfo.ATTR.SUBDIR) {
                        sSize = "<DIR>    ";
                    } else {
                        if (fileSpec && !file.name.match(fileSpec)) {
                            continue;
                        }
                        sSize = this.device.sprintf("%9d", file.size);
                        cbDir += file.size;
                        cbTotal += file.size;
                    }
                    let sDate = "", sTime = "";
                    if (file.date.getFullYear() >= 1980) {
                        sDate = this.device.sprintf("  %2M-%02D-%0.2Y", file.date);
                        if (file.date.getHours() || file.date.getMinutes() || file.date.getSeconds()) {
                            sTime = this.device.sprintf("  %2G:%02N%.1A", file.date);
                        }
                    }
                    sListing += this.device.sprintf(
                        "%s%-8s %-3s%s%s%s%s\n",
                        sIndent, name, ext,
                        (file.attr & (DiskInfo.ATTR.READONLY | DiskInfo.ATTR.HIDDEN | DiskInfo.ATTR.SYSTEM))? "*" : " ",
                        sSize, sDate, sTime
                    );
                    nTotal++;
                    /*
                     * NOTE: While it seems odd to include all SUBDIR entries in the file count, that's what DOS always did, so we do, too.
                     * SUBDIRs don't affect the current directory's byte total (cbDir), since A) the size of a SUBDIR entry is normally recorded
                     * as zero (regardless whether the SUBDIR contains files or not), and B) we don't add their size to the total anyway.
                     */
                    nFiles++;
                }
                if (fileMatch) {
                    sListing += getTotal(nFiles, cbDir);
                    if (nTotal > nFiles) {
                        sListing += "\n" + sIndent + "Total files listed:\n";
                        sListing += getTotal(nTotal, cbTotal);
                    }
                    /*
                    * This calculation used to use vol.cbSector, but we don't really support volumes with (default) sector sizes that
                    * that differ from the disk's (default) sector size, nor do we export per-volume sector sizes in the VOLDESC structure,
                    * so the only code that can rely on vol.cbSector is buildTables(), buildVolume(), and any other code that follows
                    * those calls -- and if we've reconstituted the disk and all its tables using buildDiskFromJSON(), that doesn't happen
                    * automatically.
                    */
                    sListing += this.device.sprintf("%s%28d bytes free\n", sIndent, vol.clusFree * vol.clusSecs * this.cbSector);
                }
                iVolume++;
            }
            if (!sListing && fileSpec) {
                sListing = "file not found: " + options + "\n";
            }
        }
        return sListing;
    }

    /**
     * getFileManifest(fnHash, fSorted, fMetaData, fComplete)
     *
     * Returns an array of FILEDESC (file descriptors).  Each object is largely a clone of the
     * FileInfo object, with the exception of cluster and aLBA properties (which aren't useful
     * outside the context of the DiskInfo object), and with the inclusion of a HASH property,
     * if the caller provides a hash function.
     *
     * @this {DiskInfo}
     * @param {function(Array.<number>|string|DataBuffer)} [fnHash]
     * @param {boolean} [fSorted] (default is false)
     * @param {boolean} [fMetaData] (default is false)
     * @param {boolean} [fComplete] (default is true)
     * @returns {Array}
     */
    getFileManifest(fnHash, fSorted = false, fMetaData = false, fComplete = true)
    {
        let aFiles = [];
        if (this.buildTables() > 0) {
            for (let i = 0; i < this.fileTable.length; i++) {
                let file = this.fileTable[i];
                if (file.name == "." || file.name == "..") continue;
                if ((file.attr & DiskInfo.ATTR.METADATA) && !fMetaData) continue;
                aFiles.push(this.getFileDesc(file, fComplete, fnHash));
            }
            if (fSorted) {
                aFiles.sort(function(a, b) {
                    /*
                     * We don't use "a.path.localeCompare(b.path)", because we want a traditional
                     * ASCII sort, not a Unicode sort.
                     */
                    return a.path < b.path? -1 : (a.path > b.path? 1 : 0); //
                });
            }
        }
        return aFiles;
    }

    /**
     * getModuleInfo(sModule, nSegment)
     *
     * If the given module and segment number is found, we return an Array of symbol offsets, indexed by symbol name.
     *
     * @this {DiskInfo}
     * @param {string} sModule
     * @param {number} nSegment
     * @returns {Object}
     */
    getModuleInfo(sModule, nSegment)
    {
        let aSymbols = {};
        for (let iFile = 0; iFile < this.fileTable.length; iFile++) {
            let file = this.fileTable[iFile];
            if (file.sModule != sModule) continue;
            let segment = file.aSegments[nSegment];
            if (!segment) continue;
            for (let iOrdinal in segment.entries) {
                let entry = segment.entries[iOrdinal];
                /*
                 * entry[1] is the symbol name, which becomes the index, and entry[0] is the offset.
                 */
                aSymbols[entry[1]] = entry[0];
            }
            break;
        }
        return aSymbols;
    }

    /**
     * getSymbolInfo(sSymbol)
     *
     * For all whole or partial symbol matches, return them in an Array of entries:
     *
     *      [symbol, file name, segment number, segment offset, segment size].
     *
     * TODO: This function has many limitations (ie, slow, case-sensitive), but it gets the job done for now.
     *
     * @this {DiskInfo}
     * @param {string} sSymbol
     * @returns {Array}
     */
    getSymbolInfo(sSymbol)
    {
        let aInfo = [];
        let sSymbolUpper = sSymbol.toUpperCase();
        for (let iFile = 0; iFile < this.fileTable.length; iFile++) {
            let file = this.fileTable[iFile];
            for (let iSegment in file.aSegments) {
                let segment = file.aSegments[iSegment];
                for (let iOrdinal in segment.entries) {
                    let entry = segment.entries[iOrdinal];
                    if (entry[1] && entry[1].indexOf(sSymbolUpper) >= 0) {
                        aInfo.push([entry[1], file.name, iSegment, entry[0], segment.offEnd - segment.offStart]);
                    }
                }
            }
        }
        return aInfo;
    }

    /**
     * getVolDesc(vol, fComplete)
     *
     * @this {DiskInfo}
     * @param {VolInfo} vol
     * @param {boolean} [fComplete]
     * @returns {Object}
     */
    getVolDesc(vol, fComplete)
    {
        let desc = {
            [DiskInfo.VOLDESC.PARTITION]:  vol.iPartition,
            [DiskInfo.VOLDESC.MEDIA_ID]:   vol.idMedia,
            [DiskInfo.VOLDESC.LBA_VOL]:    vol.lbaStart,
            [DiskInfo.VOLDESC.LBA_TOTAL]:  vol.lbaTotal,
            [DiskInfo.VOLDESC.FAT_ID]:     vol.nFATBits,
            [DiskInfo.VOLDESC.VBA_FAT]:    vol.vbaFAT,
            [DiskInfo.VOLDESC.VBA_ROOT]:   vol.vbaRoot,
            [DiskInfo.VOLDESC.ROOT_TOTAL]: vol.rootEntries,
            [DiskInfo.VOLDESC.VBA_DATA]:   vol.vbaData,
            [DiskInfo.VOLDESC.CLUS_SECS]:  vol.clusSecs,
            [DiskInfo.VOLDESC.CLUS_MAX]:   vol.clusMax,
            [DiskInfo.VOLDESC.CLUS_BAD]:   vol.clusBad,
            [DiskInfo.VOLDESC.CLUS_FREE]:  vol.clusFree,
            [DiskInfo.VOLDESC.CLUS_TOTAL]: vol.clusTotal
        };
        /*
         * By default, we don't include a partition number if it's an unpartitioned disk.
         */
        if (!fComplete) {
            if (vol.iPartition < 0) {
                delete desc[DiskInfo.VOLDESC.PARTITION];
            }
        }
        return desc;
    }

    /**
     * getDate(modDate, modTime, sFile)
     *
     * If modDate wasn't set (ie, 0x0000), then m will be -1 and d will be 0,
     * resulting in a Date of "1979-11-30 00:00:00".  We allow those particular
     * "errors" because that's how we detect uninitialized directory entries
     * (see getFileListing()).
     *
     * @this {DiskInfo}
     * @param {number} modDate
     * @param {number} modTime
     * @param {number} sFile
     * @returns {Date} (local date corresponding to the given date/time parameters)
     */
    getDate(modDate, modTime, sFile)
    {
        let errors = 0;
        let year = (modDate >> 9) + 1980;
        let month = ((modDate >> 5) & 0xf) - 1;
        let day = (modDate & 0x1f);
        let hour = (modTime >> 11);
        let minute = (modTime >> 5) & 0x3f;
        let second = (modTime & 0x1f) << 1;
        let y = year, m = month, d = day, h = hour, n = minute, s = second;
        if ((modDate || modTime) && m < 0) {
            m = 0;
            errors++;
        }
        if (m > 11) {
            m = 11;
            errors++;
        }
        if ((modDate || modTime) && d < 1) {
            d = 1;
            errors++;
        }
        if (d > 31) {
            d = 31;
            errors++;
        }
        if (h > 23) {
            h = 23;
            errors++;
        }
        if (n > 59) {
            n = 59;
            errors++;
        }
        if (s > 59) {
            s = 59;
            errors++;
        }
        if (errors) {
            this.printf(MESSAGE.DISK + MESSAGE.WARNING, "%s has invalid timestamp: %04d-%02d-%02d %02d:%02d:%02d\n", sFile, year, month, day, hour, minute, second);
        }
        /*
         * Previously, I used device.parseDate() to create a UTC date and then used "%#T" in getFileDesc() and
         * assorted "%#" specifiers in getFileListing() to display the UTC date; since file dates are time-zone
         * agnostic, standardizing on UTC was fine as long as I was consistent.  Unfortunately, I was not.
         *
         * For example, when diskimage.js reads a set of files from a local directory, it obtains dates in local
         * time, not UTC time.  Since I can't change how fs.stat() works (it always returns local times), and
         * since time-zone conversions can be tricky (especially thanks to Daylight Savings Time), I now use local
         * times everywhere.
         *
         * At least, I hope so.
         *
         *      return this.device.parseDate(y, m, d, h, n, s);
         */
        return new Date(y, m, d, h, n, s);
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

        this.printf(MESSAGE.DEBUG + MESSAGE.DISK, 'getDir("%s","%s")\n', this.diskName, dir.path);

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
                let dateMod = this.getDate(dir.modDate, dir.modTime, this.diskName + ":" + path);
                file = new FileInfo(this, vol.iVolume, path, name, dir.attr, dateMod, dir.size, dir.cluster, dir.aLBA);
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
            // this.printf(MESSAGE.DEBUG + MESSAGE.DISK, this.dumpSector(vol.sectorDirCache, vol.lbaDirCache, dir.path));
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
                this.printf(MESSAGE.DISK + MESSAGE.WARNING, "%s %s contains invalid cluster (%d)\n", this.diskName, dir.name, cluster);
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
            /*
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
                                /*
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
                                /*
                                 * Disks that have known errors (like the APL-100 disk image we received) can trigger this
                                 * assertion, so it should be a DEBUG-only check.
                                 */
                                if (Device.DEBUG) this.assert(fileCur.aLBA[iLBA] == undefined || fileCur.aLBA[iLBA] == iLBA);
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
     * getUnusedSector(iVolume, lba)
     *
     * @this {DiskInfo}
     * @param {number} iVolume
     * @param {number} lba (previous lba from getUnusedSector(), or -1 if none)
     * @returns {boolean}
     */
    getUnusedSector(iVolume, lba)
    {
        let lbaNext = -1;
        if (iVolume < 0) iVolume = 0;
        if (this.volTable.length && iVolume >= 0 && iVolume < this.volTable.length) {
            lbaNext = lba + 1;
            if (!lbaNext) {
                let vol = this.volTable[iVolume];
                lbaNext = vol.lbaStart + vol.vbaData;
            }
            let sector;
            while ((sector = this.getSector(lbaNext))) {
                if (this.getUnusedSectorData(sector) >= 0) break;
                lbaNext++;
            }
            if (!sector) lbaNext = -1;
        }
        return lbaNext;
    }

    /**
     * getUnusedSectorData(sector)
     *
     * @this {DiskInfo}
     * @param {Sector} sector (presumed to be in the volume data area)
     * @returns {number} (offset of unused data in sector, or -1 if none)
     */
    getUnusedSectorData(sector)
    {
        let offset = 0;
        let iFile = sector[DiskInfo.SECTOR.FILE_INDEX];
        if (iFile != undefined) {
            let file = this.fileTable[iFile];
            if (file) {
                let offFile = sector[DiskInfo.SECTOR.FILE_OFFSET];
                offset = file.size - offFile;
                if (offset >= this.cbSector) offset = -1;
            }
        }
        return offset;
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
     * @param {number} iFile
     * @param {number} off (file offset corresponding to the given LBA of the given file)
     * @param {number} lba (logical block address from the file's aLBA)
     * @returns {boolean} true if successfully updated, false if not
     */
    updateSector(iFile, off, lba)
    {
        let cylinder, head, sector;
        let [iCylinder, iHead, idSector] = this.getCHS(lba);
        if ((cylinder = this.aDiskData[iCylinder]) && (head = cylinder[iHead]) && (sector = head[idSector - 1])) {
            let file = this.fileTable[iFile];
            if (sector[DiskInfo.SECTOR.ID] != idSector) {
                this.printf(MESSAGE.DISK + MESSAGE.WARNING, "%d:%d:%d has non-standard sector ID %d; see file %s\n", iCylinder, iHead, idSector, sector[DiskInfo.SECTOR.ID], file.path);
            }
            if (sector[DiskInfo.SECTOR.FILE_INDEX] != undefined) {
                if (sector[DiskInfo.SECTOR.FILE_INDEX] != iFile || sector[DiskInfo.SECTOR.FILE_OFFSET] != off) {
                    let filePrev = this.fileTable[sector[DiskInfo.SECTOR.FILE_INDEX]];
                    this.printf(MESSAGE.DISK + MESSAGE.WARNING, '"%s" cross-linked at offset %d with "%s" at offset %d\n', filePrev.path, sector[DiskInfo.SECTOR.FILE_OFFSET], file.path, off);
                    return false;
                }
            }
            sector[DiskInfo.SECTOR.FILE_INDEX] = iFile;
            sector[DiskInfo.SECTOR.FILE_OFFSET] = off;
            return true;
        }
        this.printf(MESSAGE.DISK + MESSAGE.ERROR, "unable to map %s LBA %d to CHS\n", this.diskName, lba);
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
        /*
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
        if (this.fWritable) {
            /*
             * If this disk is writable (ie, will be loaded into a machine with a read/write drive),
             * then we also maintain the following information on a per-sector basis, as sectors are modified:
             *
             *      iModify:    index of first modified dword in sector
             *      cModify:    number of modified dwords in sector
             */
            sector.iModify = sector.cModify = 0;
        }
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
            if (this.abOrigBPB.length && fLegacy) {
                let off = this.abOrigBPB.shift();
                for (let i = DiskInfo.BPB.OPCODE; i < DiskInfo.BPB.LARGESECS+4; i++) {
                    dbDisk.writeUInt8(this.abOrigBPB[i - DiskInfo.BPB.OPCODE], off + i);
                }
            }
            this.assert(ib == dbDisk.length);
            return true;
        }
        return false;
    }

    /**
     * addMetaData(aFileData)
     *
     * @this {DiskInfo}
     * @param {Array.<FileData>} aFileData
     */
    addMetaData(aFileData)
    {
        if (aFileData) {
            this.aMetaData = this.aMetaData.concat(aFileData);
        }
    }

    /**
     * getJSON(fnHash, fLegacy, indent, source)
     *
     * If a disk image contains a recognized volume type (eg, FAT12, FAT16), we now prefer to produce a
     * "v2" JSON image, which will include a volume table (of volume descriptors), a file table (of file
     * descriptors), and sector-level "metadata" which, for every used sector, refers back to a file
     * in the file table (along with a file offset).
     *
     * To create a "legacy" JSON image, without any "v2" information, set fLegacy to true.
     *
     * @this {DiskInfo}
     * @param {function(Array.<number>|string|DataBuffer)} [fnHash]
     * @param {boolean} [fLegacy] (must be explicitly set to true to generate a "legacy" JSON disk image)
     * @param {number} [indent] (indentation is not recommended, due to significant bloat)
     * @param {string} [source] (source information, if any)
     * @returns {string}
     */
    getJSON(fnHash, fLegacy = false, indent = 0, source = "")
    {
        let volTable, fileTable;
        if (!fLegacy) {
            if (this.buildTables(this.fromJSON) >= 0) {
                for (let iVolume = 0; iVolume < this.volTable.length; iVolume++) {
                    if (!volTable) volTable = [];
                    volTable.push(this.getVolDesc(this.volTable[iVolume]));
                }
                for (let iFile = 0; iFile < this.fileTable.length; iFile++) {
                    let file = this.fileTable[iFile];
                    /*
                     * We can't skip any "." and ".." entries without adjusting file indexes, so let's not.
                     *
                     *      if (file.name == "." || file.name == "..") continue;
                     */
                    let desc = this.getFileDesc(file, false, fnHash);
                    // let indentDesc = desc[DiskInfo.FILEDESC.MODULE]? 4 : 0;
                    if (!fileTable) fileTable = [];
                    fileTable.push(JSON.stringify(desc, null, 0));
                }
            }
        } else {
            this.deleteTables();
        }
        let imageInfo = {
            [DiskInfo.IMAGE.TYPE]: DiskInfo.TYPE.CHS,
            [DiskInfo.IMAGE.NAME]: this.diskName,
            [DiskInfo.IMAGE.FORMAT]: this.getFormat(),
            [DiskInfo.IMAGE.HASH]: this.hash,
            [DiskInfo.IMAGE.CHECKSUM]: this.dwChecksum,
            [DiskInfo.IMAGE.CYLINDERS]: this.nCylinders,
            [DiskInfo.IMAGE.HEADS]: this.nHeads,
            [DiskInfo.IMAGE.TRACKDEF]: this.nSectors,
            [DiskInfo.IMAGE.SECTORDEF]: this.cbSector,
            [DiskInfo.IMAGE.DISKSIZE]: this.cbDiskData,
            [DiskInfo.IMAGE.ORIGBPB]: JSON.stringify(this.abOrigBPB),
            [DiskInfo.IMAGE.VERSION]: "2.10",   // Device.VERSION,
            [DiskInfo.IMAGE.REPOSITORY]: Device.REPOSITORY
            // [DiskInfo.IMAGE.GENERATED]: this.device.parseDate(),
            // [DiskInfo.IMAGE.COMMAND]: this.args
        };
        if (!this.fBPBModified) {
            delete imageInfo[DiskInfo.IMAGE.ORIGBPB];
        }
        if (source) {
            imageInfo[DiskInfo.IMAGE.SOURCE] = source;
        }
        let sImageInfo = JSON.stringify(imageInfo, null, indent + 2);
        let sVolTable, sFileTable;
        if (volTable) {
            sVolTable = JSON.stringify(volTable, null, indent + 1);
        }
        if (fileTable) {
            sFileTable = '';
            fileTable.forEach((desc) => {
                if (sFileTable) sFileTable += ',\n';
                sFileTable += '  ' + desc;
            });
            if (this.aMetaData) {
                this.aMetaData.forEach((file) => {
                    if (sFileTable) sFileTable += ',\n';
                    let desc = this.getFileDesc(file, false);
                    sFileTable += '  ' + JSON.stringify(desc, null, 0);
                });
            }
            sFileTable = '[\n' + sFileTable + '\n]';
        }
        let sDiskData = JSON.stringify(this.aDiskData, null, indent);
        /*
         * To make "diskData" slightly more readable/diff-able in the "un-indented" case, I've decided to insert
         * breaks ("\n  ") in front of every "{".
         */
        if (!indent) {
            sDiskData = sDiskData.replace(/\{/g, "\n  {");
        }
        let sImageData = "{\n\"" + DiskInfo.DESC.IMAGE + "\": " + sImageInfo + ",\n\"" + (sVolTable? DiskInfo.DESC.VOLUMES + "\": " + sVolTable + ",\n\"" : "") + (sFileTable? DiskInfo.DESC.FILES + "\": " + sFileTable + ",\n\"" : "") + DiskInfo.DESC.DISKDATA + "\":" + sDiskData + "\n}";
        return sImageData;
    }

    /**
     * findFile(name, text)
     *
     * @this {DiskInfo}
     * @param {string} name
     * @param {string|boolean} [text]
     * @returns {Object|null}
     */
    findFile(name, text = true)
    {
        let desc = null;
        if (this.buildTables() > 0) {
            name = name.toUpperCase();
            if (this.fileTable) {
                for (let i = 0; i < this.fileTable.length; i++) {
                    let file = this.fileTable[i];
                    if (name == file.name) {
                        desc = this.getFileDesc(file, !!text);
                        break;
                    }
                }
            }
        }
        return desc;
    }

    /**
     * getChecksum()
     *
     * NOTE: As noted in initSector(), our checksums are somewhat constrained by compatibility with previous JSON formats;
     * in particular, for sectors that end with a repeating value, only the DATA values up to but NOT including that final
     * repeating value are checksummed.
     *
     * Technically, the checksums we calculated for older JSON formats should have repeatedly summed their 'pattern' value
     * as well.  But they didn't.  And I would like to avoid checksum warnings for anyone loading the new JSON format for the
     * first time, due to an old checksum stored in their browser's local storage.  The warnings aren't fatal, but they do
     * cause any saved machine state to be discarded, since the validity of a machine state is predicated on all the original
     * inputs (including the original diskette images) matching the current inputs.  And while it's unfortunate that our
     * checksums didn't (and still don't) sum the entire image, the limited purpose that they serve is still satisfied.
     *
     * TODO: Add a new "full" checksum property to DiskInfo that checksums the entire disk image, including repeated values,
     * along with an option to return the "full" checksum here.
     *
     * @this {DiskInfo}
     * @returns {number}
     */
    getChecksum()
    {
        return this.dwChecksum;
    }

    /**
     * findDriveType(driveInfo, nTargetSectors, device)
     *
     * If a drive type appropriate for the specified device matches the specified drive type or the requested (minimum)
     * number of sectors, update the DriveInfo and return true.
     *
     * @param {DriveInfo} driveInfo
     * @param {number} nTargetSectors
     * @param {Device} [device]
     * @returns {boolean}
     */
    static findDriveType(driveInfo, nTargetSectors, device)
    {
        if (driveInfo.driveCtrl) {
            let iCtrl = DRIVE_CTRLS.indexOf(driveInfo.driveCtrl);
            if (iCtrl >= 0) {
                let bestType = -1, bestDiff = 0, bestParms;
                let driveTypes = Object.keys(DRIVE_TYPES[iCtrl]);
                for (let type of driveTypes) {
                    let parms = DRIVE_TYPES[iCtrl][type].slice();
                    parms.unshift(+type);
                    parms[3] = parms[3] || 17;
                    parms[4] = parms[4] || 512;
                    let nTotalSectors = parms[1] * parms[2] * parms[3], cbSector = parms[4], cbTotal, diff;
                    if (cbSector != 512) continue;
                    cbTotal = nTotalSectors * cbSector;
                    parms[5] = cbTotal / 1024 / 1024;
                    if (device) {
                        device.printf(MESSAGE.DISK + MESSAGE.INFO, "%s drive type %2d: %4d cylinders, %2d heads, %2d sectors/track (%5sMb)%s\n", driveInfo.driveCtrl, parms[0], parms[1], parms[2], parms[3], parms[5].toFixed(1), driveInfo.driveType == parms[0]? '*' : '');
                    }
                    if (driveInfo.driveType >= 0) {
                        if (driveInfo.driveType == parms[0]) {
                            bestType = parms[0];
                            bestParms = parms;
                        }
                    }
                    else if (nTargetSectors && (diff = Math.abs(nTotalSectors - nTargetSectors)) && (diff < bestDiff || bestType < 0) ||
                            !nTargetSectors && (diff = Math.abs(nTotalSectors * 512 - cbTotal * 1.10)) && (diff < bestDiff || bestType < 0)) {
                        bestDiff = diff;
                        bestType = parms[0];
                        bestParms = parms;
                    }
                }
                if (bestType >= 0) {
                    driveInfo.driveType = bestType;
                    driveInfo.nCylinders = bestParms[1];
                    driveInfo.nHeads = bestParms[2];
                    driveInfo.nSectors = bestParms[3];
                    driveInfo.cbSector = bestParms[4];
                    driveInfo.driveSize = bestParms[5];
                    return true;
                }
            }
            else if (!driveInfo.partitioned) {
                if (driveInfo.driveType >= 0) {
                    return true;
                }
            }
            else if (driveInfo.driveCtrl == "PCJS") {
                /*
                 * The "PCJS" pseudo-controller allows for any geometry.  If nTargetSectors is non-zero, then we
                 * create a geometry that matches the number as closely as possible.  Working within the limits of
                 * the CHS-based INT 13h interface and ST506 controllers, nCylinders must be <= 1024, nHeads must
                 * be <= 16, and nSectors must be <= 63.
                 *
                 * We now use trunc() instead of ceil() for our calculations, so that you get a drive slightly smaller
                 * than requested rather than slightly larger; otherwise, you could be puzzled why a request for a 32Mb
                 * disk fails 32Mb limit tests later (since we were actually creating a 32.01Mb disk).
                 */
                if (nTargetSectors) {
                    let nCylinders, nHeads, nTracks, nSectors = -6;
                    do {
                        nSectors += 23;         // start with 17, then 40, then 63
                        if (nSectors > 63) return false;
                        nTracks = Math.trunc(nTargetSectors / nSectors);
                        nHeads = Math.trunc(nTracks / 1024) || 1;
                        nHeads += nHeads & 1;   // an odd number of heads seems pretty, um, odd, so let's avoid it
                        nCylinders = Math.trunc(nTracks / nHeads);
                    } while (nHeads > 16 || nCylinders > 1024);
                    let cbSector = 512;
                    let cbTotal = nCylinders * nHeads * nSectors * cbSector;
                    driveInfo.driveType = 0;
                    driveInfo.nCylinders = nCylinders;
                    driveInfo.nHeads = nHeads;
                    driveInfo.nSectors = nSectors;
                    driveInfo.cbSector = cbSector;
                    driveInfo.driveSize = cbTotal / 1024 / 1024;
                    return true;
                }
                /*
                 * If no target sectors were supplied, then if driveType is 0, we presume a user-defined geometry
                 * was supplied.  Nothing much for us to do, other than select a default sector size and calculate
                 * the drive size (in *megabytes*).
                 */
                if (driveInfo.driveType == 0) {
                    if (!driveInfo.cbSector) driveInfo.cbSector = 512;
                    driveInfo.driveSize = driveInfo.nCylinders * driveInfo.nHeads * driveInfo.nSectors * driveInfo.cbSector / 1024 / 1024;
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * getDriveType(driveInfo)
     *
     * Update the DriveInfo with a drive type appropriate for the current device and disk parameters.
     *
     * @this {DiskInfo}
     * @param {DriveInfo} [driveInfo]
     * @returns {boolean} (true if DriveInfo updated, false if no data available)
     */
    getDriveType(driveInfo)
    {
        let success = false;
        if (this.cbDiskData) {
            let driveCtrl = this.driveCtrl || driveInfo.driveCtrl;;
            let driveType = this.driveType;
            if (driveType < 0) {
                /*
                 * If this disk has a PCJS MBR with a non-zero drive parameter table entry, we prefer to use that.
                 */
                let sectorMBR = this.getSector(0);
                let sig = sectorMBR && this.getSectorData(sectorMBR, DiskInfo.MBR.PCJS_SIG, 4);
                if (sig == DiskInfo.PCJS_VALUE) {
                    let nCylinders = this.getSectorData(sectorMBR, DiskInfo.MBR.DRIVE0PARMS.CYLS, 2);
                    if (nCylinders) {
                        this.assert(this.nCylinders == nCylinders);
                        this.assert(this.nHeads == this.getSectorData(sectorMBR, DiskInfo.MBR.DRIVE0PARMS.HEADS, 1));
                        this.assert(this.nSectors == this.getSectorData(sectorMBR, DiskInfo.MBR.DRIVE0PARMS.SECTORS, 1));
                        driveCtrl = "";         // force use of "PCJS" controller with drive type of zero
                    }
                }
                let iCtrl = DRIVE_CTRLS.indexOf(driveCtrl);
                if (iCtrl >= 0) {
                    let driveTypes = Object.keys(DRIVE_TYPES[iCtrl]);
                    for (let type of driveTypes) {
                        let parms = DRIVE_TYPES[iCtrl][type];
                        if (this.nCylinders == parms[0] && this.nHeads == parms[1] && this.nSectors == (parms[2] || 17)) {
                            driveType = +type;
                            break;
                        }
                    }
                }
                if (driveType < 0) {
                    driveCtrl = "PCJS";
                    driveType = 0;
                }
            }
            driveInfo.driveCtrl = driveCtrl;
            driveInfo.driveType = driveType;
            driveInfo.nCylinders = this.nCylinders;
            driveInfo.nHeads = this.nHeads;
            driveInfo.nSectors = this.nSectors;
            driveInfo.cbSector = this.cbSector || 512;
            driveInfo.driveSize = this.cbDiskData / 1024 / 1024;
            success = true;
        }
        return success;
    }

    /**
     * validateDriveType(driveCtrl, driveType)
     *
     * @this {DiskInfo}
     * @param {string} driveCtrl
     * @param {number} driveType
     * @returns {DriveInfo|null}
     */
    static validateDriveType(driveCtrl, driveType)
    {
        let driveInfo = null;
        let iCtrl = DRIVE_CTRLS.indexOf(driveCtrl);
        if (iCtrl >= 0) {
            let parms = DRIVE_TYPES[iCtrl][driveType];
            if (parms) {
                let nCylinders = parms[0];
                let nHeads = parms[1];
                let nSectors = parms[2] || 17;
                let cbSector = parms[3] || 512;
                let driveSize = nCylinders * nHeads * nSectors * cbSector / 1024 / 1024;
                driveInfo = {driveCtrl, driveType, nCylinders, nHeads, nSectors, cbSector, driveSize};
            }
        }
        return driveInfo;
    }

    /**
     * getFormat()
     *
     * For disks that match a standard "PC" disk geometry AND contain 1 or more FAT volumes,
     * this returns a "PCxxxK" string; otherwise, it returns "Unknown".  Additionally, if any
     * sector contains a non-standard "marker", eg:
     *
     *      dataCRC
     *      dataError
     *      dataMark
     *      headCRC
     *      headError
     *
     * or a non-standard sector ID, then the string will be flagged with an asterisk (eg, "PC360K*",
     * "Unknown*", etc.)
     *
     * @this {DiskInfo}
     * @returns {string}
     */
    getFormat()
    {
        let flags = "";
        let sFormat = "Unknown";
        let markers = [
            DiskInfo.SECTOR.DATA_CRC,
            DiskInfo.SECTOR.DATA_ERROR,
            DiskInfo.SECTOR.DATA_MARK,
            DiskInfo.SECTOR.HEAD_CRC,
            DiskInfo.SECTOR.HEAD_ERROR
        ];
        if (this.aDiskData) {
            let aDiskData = this.aDiskData;
            for (let iCylinder = 0; iCylinder < aDiskData.length && !flags; iCylinder++) {
                for (let iHead = 0; iHead < aDiskData[iCylinder].length && !flags; iHead++) {
                    for (let iSector = 0; iSector < aDiskData[iCylinder][iHead].length && !flags; iSector++) {
                        let sector = aDiskData[iCylinder][iHead][iSector];
                        if (sector) {
                            if (+sector[DiskInfo.SECTOR.ID] != iSector + 1) {
                                flags = "*";
                                break;
                            }
                            for (let marker in markers) {
                                if (sector[markers[marker]] !== undefined) {
                                    flags = "*";
                                    break;
                                }
                            }
                        }
                    }
                }
            }
            if (this.volTable.length) {
                sFormat = "PC" + Math.round(this.cbDiskData / 1024) + "K";
            }
        }
        return sFormat + flags;
    }

    /**
     * getHash()
     *
     * @this {DiskInfo}
     * @returns {string}
     */
    getHash()
    {
        return this.hash;
    }

    /**
     * getName()
     *
     * @this {DiskInfo}
     * @returns {string}
     */
    getName()
    {
        return this.diskName.replace(/\.[a-z]+$/i, "");
    }

    /**
     * setName(name)
     *
     * A disk image file name is normally associated with the DiskInfo when it's created (see the constructor), and it
     * doesn't normally change.  However, there are cases where the disk was created from a set of files, and so the default
     * name isn't particularly meaningful or appropriate, so we let the caller update the name as needed.
     *
     * @this {DiskInfo}
     * @param {string} name
     */
    setName(name)
    {
        if (name) this.diskName = name;
    }

    /**
     * getNewestDate(fExecutable)
     *
     * Looks through the dates of all the specified files and returns the newest date found, if any.
     *
     * @this {DiskInfo}
     * @param {boolean} [fExecutable] (true for executable files only, false for all files)
     * @returns {Date|undefined}
     */
    getNewestDate(fExecutable)
    {
        let date;
        for (let i = 0; i < this.fileTable.length; i++) {
            let file = this.fileTable[i];
            if (!fExecutable || file.name.indexOf(".COM") > 0 || file.name.indexOf(".EXE") > 0) {
                if (!date || date.getTime() < file.date.getTime()) date = file.date;
            }
        }
        return date;
    }

    /**
     * getSize()
     *
     * @this {DiskInfo}
     * @returns {number|undefined}
     */
    getSize()
    {
        return this.cbDiskData;
    }

    /**
     * setArgs(args)
     *
     * @this {DiskInfo}
     * @param {string} args
     */
    setArgs(args)
    {
        this.args = args;
    }

    /**
     * parseSuppData()
     *
     * @this {DiskInfo}
     * @param {string} suppData
     * @returns {Object}
     */
    parseSuppData(suppData)
    {
        let suppObj = {};
        if (suppData) {
            let aSuppData = suppData.split(/[ \t]*MFM Sector\s*\n/);
            for (let i = 1; i < aSuppData.length; i++) {
                let metaData = aSuppData[i].match(/Sector ID:([0-9]+)[\s\S]*?Track ID:([0-9]+)[\s\S]*?Side ID:([0-9]+)[\s\S]*?Size:([0-9]+)[\s\S]*?DataMark:0x([0-9A-F]+)[\s\S]*?Head CRC:0x([0-9A-F]+)\s+\(([^)]*)\)[\s\S]*?Data CRC:0x([0-9A-F]+)\s+\(([^)]*)\)/);
                if (metaData) {
                    let data = [];
                    let sectorID = +metaData[1];
                    let trackID = +metaData[2];
                    let headID = +metaData[3];
                    let length = +metaData[4];
                    let dataMark = parseInt(metaData[5], 16);
                    let headCRC = parseInt(metaData[6], 16);
                    let headError = (metaData[7] != "Ok");
                    let dataCRC = parseInt(metaData[8], 16);
                    let dataError = (metaData[9] != "BAD CRC!"? 0 : -1);
                    let matchData, reData = /([0-9A-F]+)\|([^|]*)\|/g;
                    while ((matchData = reData.exec(aSuppData[i]))) {
                        let shift = 0, dw = 0;
                        let matchByte, reByte = /\s+([0-9A-F]+)/g;
                        while ((matchByte = reByte.exec(matchData[2]))) {
                            dw |= parseInt(matchByte[1], 16) << shift;
                            shift += 8;
                            if (shift == 32) {
                                data.push(dw);
                                shift = dw = 0;
                            }
                        }
                        if (shift) data.push(dw);
                    }
                    if (!suppObj[trackID]) suppObj[trackID] = {};
                    if (!suppObj[trackID][headID]) suppObj[trackID][headID] = [];
                    let sector = {sectorID, length, dataMark, headCRC, headError, dataCRC, dataError, data};
                    suppObj[trackID][headID].push(sector);
                }
            }
        }
        return suppObj;
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
            if (Device.DEBUG && !iByte && !fCompare) {
                this.printf(MESSAGE.DEBUG + MESSAGE.DISK, 'read("%s",CHS=%d:%d:%d)\n', this.diskName, sector[DiskInfo.SECTOR.CYLINDER], sector[DiskInfo.SECTOR.HEAD], sector[DiskInfo.SECTOR.ID]);
            }
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
            /*
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
                /*
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
                        /*
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
                /*
                 * The following code allows an 8-sector track to be reformatted (ie, "expanded") as a 9-sector track.
                 */
                if (!sector && drive && drive.bFormatting && drive.bSector == 9) {
                    sector = track[i] = this.buildSector(iCylinder, iHead, drive.bSector, drive.nBytes);
                    /*
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

    /**
     * write(sector, iByte, b, fForce)
     *
     * @this {DiskInfo}
     * @param {Sector} sector (returned from a previous seek)
     * @param {number} iByte (byte index within the given sector)
     * @param {number} b the byte value to write
     * @param {boolean} [fForce] (true to force a write operation, even if disk not writable)
     * @returns {boolean|null} true if write successful, false if write-protected, null if out of bounds
     */
    write(sector, iByte, b, fForce)
    {
        if (!fForce && !this.fWritable) return false;

        if (Device.DEBUG && !iByte) {
            this.printf(MESSAGE.DEBUG + MESSAGE.DISK, 'write("%s",CHS=%d:%d:%d)\n', this.diskName, sector[DiskInfo.SECTOR.CYLINDER], sector[DiskInfo.SECTOR.HEAD], sector[DiskInfo.SECTOR.ID]);
        }

        if (iByte < sector[DiskInfo.SECTOR.LENGTH]) {
            if (b != this.read(sector, iByte, true)) {
                let adw = sector[DiskInfo.SECTOR.DATA];
                let dwPattern = adw[adw.length-1];
                let idw = iByte >> 2;
                let nShift = (iByte & 0x3) << 3;
                /*
                 * Ensure every byte up to the specified byte is properly initialized.
                 */
                for (let i = adw.length; i <= idw; i++) adw[i] = dwPattern;
                /*
                 * Non-writable disks don't need to track modifications, and the only way we can get here
                 * on a non-writable disk is if this is a "forced" write, which again doesn't need to be tracked.
                 */
                if (this.fWritable) {
                    if (!sector.cModify) {
                        sector.iModify = idw;
                        sector.cModify = 1;
                    } else if (idw < sector.iModify) {
                        sector.cModify += sector.iModify - idw;
                        sector.iModify = idw;
                    } else if (idw >= sector.iModify + sector.cModify) {
                        sector.cModify += idw - (sector.iModify + sector.cModify) + 1;
                    }
                }
                /*
                 * Finally, write the byte.
                 */
                adw[idw] = (adw[idw] & ~(0xff << nShift)) | (b << nShift);
            }
            return true;
        }
        return null;
    }

    /**
     * updateBootSector(dbBoot, iVolume, verBPB)
     *
     * We use the write() interface to modify the bytes of the boot sector, with fForce set,
     * which allows writes even when the disk wasn't opened for writing.
     *
     * The verBPB values are as follows:
     *
     *      0: The entire BPB of the target boot sector is preserved
     *      1: Only a subset of the BPB that doesn't interfere with DOS 1.x is preserved
     *      2: Only a subset of the BPB used by DOS 2.x is preserved
     *
     * Also, if iVolume is -1, then we update the master boot record (MBR) instead, and verBPB
     * is actually a drive table entry number (0 or 1; pass -1 to leave drive table alone).
     *
     * @this {DiskInfo}
     * @param {DataBuffer} dbBoot (DataBuffer containing new boot sector)
     * @param {number} [iVolume] (default is 0 for first volume; -1 for MBR)
     * @param {number} [verBPB] (default is 0; see above)
     * @returns {boolean} (true if successful, false otherwise)
     */
    updateBootSector(db, iVolume = 0, verBPB = 0)
    {
        let fSuccess = false;
        if (db && this.buildTables() >= 0) {
            let lbaBoot = -1;
            let hasBPB = false;
            if (iVolume < 0) {
                lbaBoot = 0;
            } else if (iVolume >= 0 && iVolume < this.volTable.length) {
                hasBPB = true;
                lbaBoot = this.volTable[iVolume].lbaStart;
            }
            if (lbaBoot >= 0) {
                let sectorBoot = this.getSector(lbaBoot);
                if (sectorBoot) {
                    fSuccess = true;
                    let cb = sectorBoot[DiskInfo.SECTOR.LENGTH];
                    /*
                     * Even if we're not replacing the BPB portion of the boot sector, we still
                     * need to check for a disk using our extended BPB format, and make sure those
                     * fields are in sync with the existing BPB fields.
                     */
                    if (hasBPB) {
                        let bOpcode = db.readUInt8(0);
                        if (bOpcode == CPUx86.OPCODE.CLD) {
                            let nSecBytes = this.getSectorData(sectorBoot, DiskInfo.BPB.SECBYTES, 2);
                            let nFATs = this.getSectorData(sectorBoot, DiskInfo.BPB.FATS, 1);
                            let nFATSecs = this.getSectorData(sectorBoot, DiskInfo.BPB.FATSECS, 2);
                            let nResSecs = this.getSectorData(sectorBoot, DiskInfo.BPB.RESSECS, 2);
                            let nLBARoot = nResSecs + nFATs * nFATSecs;
                            let nDirEnts = this.getSectorData(sectorBoot, DiskInfo.BPB.DIRENTS, 2);
                            let nLBAData = (nLBARoot + ((nDirEnts * 0x20) + (nSecBytes - 1)) / nSecBytes)|0;
                            let nTrackSecs = this.getSectorData(sectorBoot, DiskInfo.BPB.TRACKSECS, 2);
                            let nDriveHeads = this.getSectorData(sectorBoot, DiskInfo.BPB.DRIVEHEADS, 2);
                            let nCylSecs = nTrackSecs * nDriveHeads;
                            db.writeUInt8(0, DiskInfo.BPB.DRIVE);
                            db.writeUInt16LE(nCylSecs, DiskInfo.BPB.CYLSECS);
                            db.writeUInt16LE(nLBARoot, DiskInfo.BPB.LBAROOT);
                            db.writeUInt16LE(nLBAData, DiskInfo.BPB.LBADATA);
                        }
                    }
                    for (let off = 0; off < cb && off < db.length; off++) {
                        let b = db.readUInt8(off);
                        if (hasBPB) {
                            switch(verBPB) {
                            case 0:
                                if (off >= DiskInfo.BPB.BEGIN && off < DiskInfo.BPB.END) continue;
                                break;
                            case 1:
                                /*
                                 * NOTE: While PC DOS 1.x boot sectors tolerate a minimal BPB (excluding any OEM signature),
                                 * the COMPAQ DOS 1.x boot sectors are a different story.  A BPB obviously isn't necessary for
                                 * them, it just makes the disk readable by modern operating systems.
                                 *
                                 *      if (off >= DiskInfo.BPB.SECBYTES && off < DiskInfo.BPB.BOOTDRIVE) continue;
                                 */
                                break;
                            case 2:
                                if (off >= DiskInfo.BPB.BEGIN && off < DiskInfo.BPB.LARGESECS) continue;
                                break;
                            }
                        } else {
                            if (lbaBoot == 0) {
                                if (off >= DiskInfo.MBR.PARTITIONS.OFFSET) continue;
                                if (verBPB >= 0) {
                                    /*
                                     * When iVolume is -1, verBPB serves a completely purpose.  It is either -1,
                                     * indicating this a normal MBR, or it is 0 or 1, indicating that we should update
                                     * the corresponding drive table in the MBR.  It's assumed we're using the PCJS MBR,
                                     * which supports up to 2 drive parameter tables.
                                     *
                                     * TODO: It might be wise to verify that this actually IS a PCJS MBR, by verifying
                                     * the "PCJS" signature at offset 0x199 (MBR.PCJS_SIG) of the MBR, too.
                                     */
                                    let i = -1, n;
                                    switch(off) {
                                    case DiskInfo.MBR.DRIVE1PARMS.CYLS:
                                        i++;
                                        /* falls through */
                                    case DiskInfo.MBR.DRIVE0PARMS.CYLS:
                                        i++;
                                        n = this.nCylinders & 0xff;
                                        break;
                                    case DiskInfo.MBR.DRIVE1PARMS.CYLS + 1:
                                        i++;
                                        /* falls through */
                                    case DiskInfo.MBR.DRIVE0PARMS.CYLS + 1:
                                        i++;
                                        n = (this.nCylinders >> 8) & 0xff;
                                        break;
                                    case DiskInfo.MBR.DRIVE1PARMS.HEADS:
                                        i++;
                                        /* falls through */
                                    case DiskInfo.MBR.DRIVE0PARMS.HEADS:
                                        i++;
                                        n = this.nHeads;
                                        break;
                                    case DiskInfo.MBR.DRIVE1PARMS.SECTORS:
                                        i++;
                                        /* falls through */
                                    case DiskInfo.MBR.DRIVE0PARMS.SECTORS:
                                        i++;
                                        n = this.nSectors;
                                        break;
                                    }
                                    /*
                                     * Leave MBR byte b unchanged unless we fell into one of the above cases.
                                     */
                                    if (i == verBPB) {
                                        b = n;
                                    }
                                }
                            }
                        }
                        if (!this.write(sectorBoot, off, b, true)) {
                            fSuccess = false;
                            break;
                        }
                    }
                }
            }
        }
        return fSuccess;
    }

    /**
     * nearestPowerOfTwo(n, limit)
     *
     * Returns the nearest power of two equal to or greater than the specified number (or limit, whichever occurs first).
     *
     * @param {number} n
     * @param {number} [limit]
     * @returns {number}
     */
    static nearestPowerOfTwo(n, limit = 0x40000000)
    {
        let nearestPower = 1;
        while (nearestPower < n && nearestPower < limit) {
            nearestPower <<= 1;
        }
        return nearestPower;
    }
}
