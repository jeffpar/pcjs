/**
 * @fileoverview Defines PCx86 Hard Drive Types
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

/*
 * Starting with the IBM PC XT, the ROM defined a "Fixed Disk Parameter Table" (FD_TBL) that contained 16 bytes
 * at the following offsets for each of 4 drive types (see IBM 5160 Tech Ref, April 1983, p. A-94):
 *
 *      0: maximum number of cylinders (word)
 *      2: maximum number of heads
 *      3: starting reduced write current cylinder (word)
 *      5: starting write precompensation cylinder (word)
 *      7: maximum ECC data burst length
 *      8: control byte (drive step option)
 *          bit 7: disable disk-access retries
 *          bit 6: disable ECC retries
 *          bits 5-3: zero
 *          bits 2-0: drive option
 *      9: standard time-out value
 *      A: time-out value for format drive
 *      B: time-out value for check drive
 *      C: reserved
 *      D: reserved
 *      E: reserved
 *      F: reserved
 *
 * Notice that there is nothing in the PC XT table to indicate the number of sectors/track; this is because
 * the XT BIOS assumed 17 sectors/track; in fact, the number 17 (0x11) is hard-coded in the BIOS function (0x08)
 * that returns drive parameters.
 *
 * Starting with the IBM PC AT, the ROM defined a "Fixed Disk Parameter Table" (FD_TBL) that contained 16 bytes
 * at the following offsets for each of 47 drive types (see IBM 5170 Tech Ref, March 1986, p. 5-185):
 *
 *      0: maximum number of cylinders (word)
 *      2: maximum number of heads
 *      3: not used
 *      5: starting write precompensation cylinder (word)
 *      7: not used
 *      8: control byte (drive step option)
 *          bit 7: disable retries -OR-
 *          bit 6: disable retries
 *          bit 3: more than 8 heads
 *      9: not used
 *      A: not used
 *      B: not used
 *      C: landing zone (word)
 *      E: number of sectors/track (NOTE: all PC AT drive types specified 17 sectors/track)
 *      F: reserved
 *
 * NOTE: While drive type 0 was a valid type in the PC XT, it was NOT a valid drive type in the PC AT; zero was used
 * to indicate that no hard drive was installed.
 *
 * All of the predefined PC AT drive types still used only 17 sectors/track -- but unlike the PC XT, user-defined drive
 * parameter tables could now specify different values.
 *
 * Of the 47 PC AT drive types, the first 14 (1-E) could be selected by 4 bits in CMOS byte 0x12.  Drive type 15 was not
 * a valid type but rather an indicator that CMOS byte 0x19 (or 0x1A) contained the actual drive type, which technically
 * could contain any value from 0-255, but was documented as being limited to values 16-255.  And in fact, the ROM only
 * contained entries for drive types 1-47, and of those, only drive types 1-14 and 16-23 were valid; the rest (15 and 24-47)
 * were marked "RESERVED" and contained zeros.
 *
 * If a system needed a drive type that wasn't defined by the ROM, it could be placed in RAM, as the ROM explained:
 *
 *      To dynamically define a set of parameters, build a table for up to 15 types and place
 *      the corresponding vector into interrupt 0x41 for drive 0 and interrupt 0x46 for drive 1.
 *
 * To make PCjs easier to configure, we have three drive tables (for XT, AT, and COMPAQ machines), each of which
 * contains DriveArrays for the various DriveTypes supported by each machine.  Each DriveArray contains the following
 * subset of "Fixed Disk Parameter Table" information:
 *
 *      [0]: total cylinders
 *      [1]: total heads
 *      [2]: total sectors/tracks (optional; default is 17)
 *      [3]: total bytes/sector (optional; default is 512)
 *
 * verifyDrive() attempts to confirm that these values agree with the programmed drive characteristics.
 *
 * NOTE: For the record, PCjs considers 1Kb to be 1 kilobyte (1,024 bytes, not 1,000 bytes) and 1Mb to be 1 megabyte
 * (1024*1024 or 1,048,576 bytes, not 1,000,000 bytes).
 *
 * Apparently, in 1998, it was decided that a kilobyte should be 1,000 bytes and a megabyte should be 1,000,000 bytes,
 * and that if you really meant 2^10 (1,024) or 2^20 (1,048,576), you should use "kibibyte" (KiB) or "mebibyte" (MiB)
 * instead.  But since PCjs simulates machines that pre-date 1998, I have chosen to retain the more "traditional"
 * understanding of Kb and Mb; I never use KiB or MiB.
 */

/*
 * Drive type tables differed across IBM controller models (XTC drive types don't match ATC drive types) and across OEMs
 * (e.g., COMPAQ drive types only match a few IBM drive types), so you must use iDeviceType to index the correct table type
 * inside both DRIVE_CTRLS and DRIVE_TYPES.
 */
const DRIVE_CTRLS = ["XT", "AT", "COMPAQ"];

const DRIVE_TYPES = [
    /*
     * DRIVE_TYPES[0] is for the IBM PC XT (XTC) controller.
     */
    {
         0: [306, 2],           //  5Mb ( 5.08Mb: 306*2*17*512 or  5,326,848 bytes)
         1: [375, 8],           // 25Mb (24.90Mb: 375*8*17*512 or 26,112,000 bytes)
         2: [306, 6],           // 15Mb (15.24Mb: 306*6*17*512 or 15,980,544 bytes)
         3: [306, 4]            // 10Mb (10.16Mb: 306*4*17*512 or 10,653,696 bytes) (default XTC drive type: 3)
    },
    /*
     * DRIVE_TYPES[1] is for the IBM PC AT (ATC) controller.
     */
    {
         0: [1024,16,21,2048],  // arbitrary (reserved for CD-ROMs)
         1: [306,  4],          // 10Mb (10.16Mb:  306*4*17*512 or 10,653,696 bytes)
         2: [615,  4],          // 20Mb (20.42Mb:  615*4*17*512 or 21,411,840 bytes) (default ATC drive type)
         3: [615,  6],          // 31Mb (30.63Mb:  615*6*17*512 or 32,117,760 bytes)
         4: [940,  8],          // 62Mb (62.42Mb:  940*8*17*512 or 65,454,080 bytes)
         5: [940,  6],          // 47Mb (46.82Mb:  940*6*17*512 or 49,090,560 bytes)
         6: [615,  4],
         7: [462,  8],
         8: [733,  5],
         9: [900, 15],
        10: [820,  3],
        11: [855,  5],
        12: [855,  7],
        13: [306,  8],
        14: [733,  7],
        /*
         * Since the remaining drive types are > 14, they must be stored in either EXTHDRIVE0 or EXTHDRIVE1 CMOS bytes (0x19 or 0x1A)
         */
        16: [612,  4],
        17: [977,  5],
        18: [977,  7],
        19: [1024, 7],
        20: [733,  5],
        21: [733,  7],
        22: [733,  5],
        23: [306,  4]
    },
    /*
     * DRIVE_TYPES[2] is for the COMPAQ DeskPro (ATC) controller.
     *
     * NOTE: According to COMPAQ, drive type 25 (0x19) must be used with their 130Mb drive when using MS-DOS 3.1
     * or earlier, or when using any [unspecified] application software that supports only 17 sectors per track;
     * otherwise, use drive type 35 (0x23), which uses the drive's full capacity of 34 sectors per track.
     */
    {
         0: [1024,16,21,2048],  // arbitrary (reserved for CD-ROMs)
         1: [306,  4],          // 10Mb (10.16Mb:  306*4*17*512 or 10,653,696 bytes) (same as IBM)
         2: [615,  4],          // 20Mb (20.42Mb:  615*4*17*512 or 21,411,840 bytes) (same as IBM)
         3: [615,  6],          // 31Mb (30.63Mb:  615*6*17*512 or 32,117,760 bytes) (same as IBM)
         4: [1023, 8],          // 68Mb (67.93Mb: 1023*8*17*512 or 71,233,536 bytes) (TODO: Cylinders is listed as 1024 in the COMPAQ TechRef; confirm)
         5: [940,  6],          // 47Mb (46.82Mb:  940*6*17*512 or 49,090,560 bytes) (same as IBM)
         6: [697,  5],
         7: [462,  8],          // same as IBM
         8: [925,  5],
         9: [900, 15],          // same as IBM
        10: [980,  5],
        11: [925,  7],
        12: [925,  9],
        13: [612,  8],
        14: [980,  4],
        /*
         * Since the remaining drive types are > 14, they must be stored in either EXTHDRIVE0 or EXTHDRIVE1 CMOS bytes (0x19 or 0x1A)
         */
        16: [612,  4],          // same as IBM
        17: [980,  5],
        18: [966,  6],
        19: [1023, 8],
        20: [733,  5],          // same as IBM
        21: [733,  7],          // same as IBM
        22: [524,  4, 40],      // Sep 1986 DeskPro 386 TechRef: [768, 6]; May 1987 80286 TechRef: [805, 6]
        23: [924,  8],          // Sep 1986 DeskPro 386 TechRef: [771, 6]
        24: [966, 14],
        25: [966, 16],
        26: [1023,14],
        27: [832,  6, 33],      // Sep 1986 DeskPro 386 TechRef and May 1987 80286 TechRef: [966, 10]
        28: [1222,15, 34],      // Sep 1986 DeskPro 386 TechRef: [771, 3]; May 1987 80286 TechRef: [748, 16]
        29: [1240, 7, 34],      // Sep 1986 DeskPro 386 TechRef: [578, 4]; May 1987 80286 TechRef: [805, 6, 26]
        30: [615,  4, 25],
        31: [615,  8, 25],
        32: [905,  9, 25],      // Sep 1986 DeskPro 386 TechRef: [966, 3, 34]
        33: [832,  8, 33],      // Sep 1986 DeskPro 386 TechRef: [966, 5, 34]; May 1987 80286 TechRef: [748, 8, 34]
        34: [966,  7, 34],
        35: [966,  8, 34],      // 128Mb (eg, https://harddisks.pcjs.org/pcx86/128mb/MSDOS600.json)
        36: [966,  9, 34],
        37: [966,  5, 34],
        38: [612, 16, 63],      // Sep 1986 DeskPro 386 TechRef: [1023, 9, 33]; May 1987 80286 TechRef: [611, 16, 63]
        39: [1023,11, 33],
        40: [1023,15, 34],      // Sep 1986 DeskPro 386 TechRef: [1023, 13, 33]
        41: [1630,15, 52],      // Sep 1986 DeskPro 386 TechRef and May 1987 80286 TechRef: [1023, 15, 33]
        42: [1023,16, 63],      // Sep 1986 DeskPro 386 TechRef: [1023, 16, 34]
        43: [805,  4, 26],      // Sep 1986 DeskPro 386 TechRef: [756, 4, 26]
        44: [805,  2, 26],      // Sep 1986 DeskPro 386 TechRef: [756, 2, 26]
        45: [748,  8, 33],      // Sep 1986 DeskPro 386 TechRef: [768, 4, 26]
        46: [748,  6, 33],      // Sep 1986 DeskPro 386 TechRef: [768, 2, 26]
        47: [966,  5, 25]
    }
];

export { DRIVE_CTRLS, DRIVE_TYPES };
