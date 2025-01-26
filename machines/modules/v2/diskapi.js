/**
 * @fileoverview Disk APIs, as defined by httpapi.js and consumed by disk.js
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

/*
 * Our "DiskIO API" looks like:
 *
 *      http://www.pcjs.org/api/v1/disk?action=open&volume=*10mb.img&mode=demandrw&chs=c:h:s&machine=xxx&user=yyy
 */
const DiskAPI = {
    ENDPOINT:       "/api/v1/disk",
    QUERY: {
        ACTION:     "action",   // value is one of DiskAPI.ACTION.*
        VOLUME:     "volume",   // value is path of a disk image
        MODE:       "mode",     // value is one of DiskAPI.MODE.*
        CHS:        "chs",      // value is cylinders:heads:sectors:bytes
        ADDR:       "addr",     // value is cylinder:head:sector:count
        MACHINE:    "machine",  // value is machine token
        USER:       "user",     // value is user ID
        DATA:       "data"      // value is data to be written
    },
    ACTION: {
        OPEN:       "open",
        READ:       "read",
        WRITE:      "write",
        CLOSE:      "close"
    },
    MODE: {
        LOCAL:      "local",    // this mode implies no API (at best, localStorage backing only)
        PRELOAD:    "preload",  // this mode implies use of the DumpAPI
        DEMANDRW:   "demandrw",
        DEMANDRO:   "demandro"
    },
    FAIL: {
        BADACTION:  "invalid action",
        BADUSER:    "invalid user",
        BADVOL:     "invalid volume",
        OPENVOL:    "unable to open volume",
        CREATEVOL:  "unable to create volume",
        WRITEVOL:   "unable to write volume",
        REVOKED:    "access revoked"
    }
};

/*
 * TODO: Eventually, our tools will need to support looking up disk formats by "model" rather than by raw disk size,
 * because obviously multiple disk geometries can yield the same raw disk size.  For each conflict that arises, I'll
 * probably create a fake (approximate) disk size entry above, and then create a mapping to that approximate size below.
 */
DiskAPI.MODELS = {
    "RL01": 5242880,
    "RL02": 10485760
};

DiskAPI.MBR = {
    PARTITIONS: {
        OFFSET:     0x1BE,
        ENTRY: {
            STATUS:         0x00,   // 1-byte (0x80 if active)
            CHS_FIRST:      0x01,   // 3-byte CHS specifier
            TYPE:           0x04,   // 1-byte TYPE (see below)
            CHS_LAST:       0x05,   // 3-byte CHS specifier
            LBA_FIRST:      0x08,   // 4-byte Logical Block Address
            LBA_TOTAL:      0x0C,   // 4-byte Logical Block Address
        },
        ENTRY_LENGTH:       0x10,
        STATUS: {
            ACTIVE:         0x80
        },
        TYPE: {
            EMPTY:          0x00,
            FAT12_PRIMARY:  0x01,   // DOS 2.0 and up (12-bit FAT)
            FAT16_PRIMARY:  0x04    // DOS 3.0 and up (16-bit FAT)
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
DiskAPI.BOOT = {
    OPCODE:         0x000,      // 1 byte for a JMP opcode, followed by a 1 or 2-byte offset
    OEM:            0x003,      // 8 bytes
    SIG_OFFSET:     0x1FE,
    SIGNATURE:      0xAA55      // to be clear, the low byte (at offset 0x1FE) is 0x55 and the high byte (at offset 0x1FF) is 0xAA
};

/*
 * BIOS Parameter Block (BPB) offsets in DOS-compatible boot sectors (DOS 2.x and up)
 *
 * NOTE: DOS 2.x OEM documentation says that the words starting at offset 0x018 (TRACKSECS, DRIVEHEADS, and HIDDENSECS)
 * are optional, but even the DOS 2.0 FORMAT utility initializes all three of those words.  There may be some OEM media out
 * there with BPBs that are only valid up to offset 0x018, but I've not run across any media like that.
 *
 * DOS 3.20 added LARGESECS, but unfortunately, it was added as a 2-byte value at offset 0x01E.  DOS 3.31 decided
 * to make both HIDDENSECS and LARGESECS 4-byte values, which meant that LARGESECS had to move from 0x01E to 0x020.
 */
DiskAPI.BPB = {
    SECBYTES:       0x00B,      // 2 bytes: bytes per sector (eg, 0x200 or 512)
    CLUSSECS:       0x00D,      // 1 byte: sectors per cluster (eg, 1)
    RESSECS:        0x00E,      // 2 bytes: reserved sectors; ie, # sectors preceding the first FAT--usually just the boot sector (eg, 1)
    FATS:           0x010,      // 1 byte: FAT copies (eg, 2)
    DIRENTS:        0x011,      // 2 bytes: root directory entries (eg, 0x40 or 64) 0x40 * 0x20 = 0x800 (1 sector is 0x200 bytes, total of 4 sectors)
    DISKSECS:       0x013,      // 2 bytes: number of sectors (eg, 0x140 or 320); if zero, refer to LARGESECS
    MEDIA:          0x015,      // 1 byte: media ID (see DiskAPI.FAT.MEDIA_*); should also match the first byte of the FAT (aka FAT ID)
    FATSECS:        0x016,      // 2 bytes: sectors per FAT (eg, 1)
    TRACKSECS:      0x018,      // 2 bytes: sectors per track (eg, 8)
    DRIVEHEADS:     0x01A,      // 2 bytes: number of heads (eg, 1)
    HIDDENSECS:     0x01C,      // 2 bytes (DOS 2.x) or 4 bytes (DOS 3.31 and up): number of hidden sectors (always 0 for non-partitioned media)
    LARGESECS:      0x020       // 4 bytes (DOS 3.31 and up): number of sectors if DISKSECS is zero
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
 *
 * NOTES
 *
 *      1720320 is used by Microsoft "DMF" diskettes (eg, OEM signature "MSDMF3.2"); see Windows 95.
 *
 *      1884160 is used by IBM "XDF" diskettes (eg, OEM signature "IBM 20.0") which effectively have 23 512-byte
 *      sectors per track, but whose tracks (beyond track 0) are actually formatted with one 8Kb sector, one 2Kb sector,
 *      one 1Kb sector, and one 512-byte sector; see PC DOS 7.0.  Unsure why IBM chose media ID 0xF9.
 */
DiskAPI.GEOMETRIES = {
    163840:  [40,1,8,,0xFE],    // media ID 0xFE: 40 cylinders, 1 head (single-sided),   8 sectors/track, ( 320 total sectors x 512 bytes/sector ==  163840)
    184320:  [40,1,9,,0xFC],    // media ID 0xFC: 40 cylinders, 1 head (single-sided),   9 sectors/track, ( 360 total sectors x 512 bytes/sector ==  184320)
    327680:  [40,2,8,,0xFF],    // media ID 0xFF: 40 cylinders, 2 heads (double-sided),  8 sectors/track, ( 640 total sectors x 512 bytes/sector ==  327680)
    368640:  [40,2,9,,0xFD],    // media ID 0xFD: 40 cylinders, 2 heads (double-sided),  9 sectors/track, ( 720 total sectors x 512 bytes/sector ==  368640)
    737280:  [80,2,9,,0xF9],    // media ID 0xF9: 80 cylinders, 2 heads (double-sided),  9 sectors/track, (1440 total sectors x 512 bytes/sector ==  737280)
    1228800: [80,2,15,,0xF9],   // media ID 0xF9: 80 cylinders, 2 heads (double-sided), 15 sectors/track, (2400 total sectors x 512 bytes/sector == 1228800)
    1474560: [80,2,18,,0xF0],   // media ID 0xF0: 80 cylinders, 2 heads (double-sided), 18 sectors/track, (2880 total sectors x 512 bytes/sector == 1474560)
    1720320: [80,2,21,,0xF0],   // media ID 0xF0: 80 cylinders, 2 heads (double-sided), 21 sectors/track, (3360 total sectors x 512 bytes/sector == 1720320)
    1884160: [80,2,23,,0xF9],   // media ID 0xF9: 80 cylinders, 2 heads (double-sided), 23 sectors/track, (3680 total sectors x 512 bytes/sector == 1884160)
    2949120: [80,2,36,,0xF0],   // media ID 0xF0: 80 cylinders, 2 heads (double-sided), 36 sectors/track, (5760 total sectors x 512 bytes/sector == 2949120)
    /*
     * The following are some common disk sizes and their CHS values, since missing or bogus MBR and/or BPB values
     * might mislead us when attempting to determine the exact disk geometry.
     */
    10653696:[306,4,17],        // PC XT 10Mb hard drive (type 3)
    21411840:[615,4,17],        // PC AT 20Mb hard drive (type 2)
    /*
     * Assorted DEC disk formats.
     */
    256256:  [77, 1,26,128],    // RX01 single-platter diskette: 77 tracks, 1 head, 26 sectors/track, 128 bytes/sector, for a total of 256256 bytes
    2494464: [203,2,12,512],    // RK03 single-platter disk cartridge: 203 tracks, 2 heads, 12 sectors/track, 512 bytes/sector, for a total of 2494464 bytes
    5242880: [256,2,40,256],    // RL01K single-platter disk cartridge: 256 tracks, 2 heads, 40 sectors/track, 256 bytes/sector, for a total of 5242880 bytes
    10485760:[512,2,40,256]     // RL02K single-platter disk cartridge: 512 tracks, 2 heads, 40 sectors/track, 256 bytes/sector, for a total of 10485760 bytes
};

/*
 * Media ID (descriptor) bytes for DOS-compatible FAT-formatted disks (stored in the first byte of the FAT)
 */
DiskAPI.FAT = {
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
DiskAPI.FAT12 = {
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
DiskAPI.FAT16 = {
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
 * For more details on MODTIME and MODDATE, see diskdump.js; in particular, buildDateTime() and getDSTAdjustedTime().
 */
DiskAPI.DIRENT = {
    NAME:           0x000,      // 8 bytes
    EXT:            0x008,      // 3 bytes
    ATTR:           0x00B,      // 1 byte
    MODTIME:        0x016,      // 2 bytes: bits 15-11 is hour (0-31), bits 10-5 is minute (0-63), bits 4-0 is second/2 (0-31)
    MODDATE:        0x018,      // 2 bytes: bits 15-9 is year (0 for 1980, 127 for 2107), bits 8-5 is month (1-12), bits 4-0 is day (1-31)
    CLUSTER:        0x01A,      // 2 bytes
    SIZE:           0x01C,      // 4 bytes (typically zero for subdirectories)
    LENGTH:         0x20,       // 32 bytes total
    UNUSED:         0x00,       // indicates this and all subsequent directory entries are unused
    INVALID:        0xE5        // indicates this directory entry is unused
};

/*
 * Possible values for DIRENT.ATTR
 */
DiskAPI.ATTR = {
    READONLY:       0x01,       // PC-DOS 2.0 and up
    HIDDEN:         0x02,
    SYSTEM:         0x04,
    LABEL:          0x08,       // PC-DOS 2.0 and up
    SUBDIR:         0x10,       // PC-DOS 2.0 and up
    ARCHIVE:        0x20        // PC-DOS 2.0 and up
};

export default DiskAPI;
