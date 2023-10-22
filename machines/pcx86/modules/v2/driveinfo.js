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
         0: [ 306,  2],         //  5Mb ( 5.08Mb: 306*2*17*512 or  5,326,848 bytes)
         1: [ 375,  8],         // 25Mb (24.90Mb: 375*8*17*512 or 26,112,000 bytes)
         2: [ 306,  6],         // 15Mb (15.24Mb: 306*6*17*512 or 15,980,544 bytes)
         3: [ 306,  4]          // 10Mb (10.16Mb: 306*4*17*512 or 10,653,696 bytes) (default XTC drive type: 3)
    },
    /*
     * DRIVE_TYPES[1] is for the IBM PC AT (ATC) controller.
     */
    {
         0: [1024,16,21,2048],  // arbitrary (reserved for CD-ROMs)
         1: [ 306,  4],         //  10,653,696  10.16
         2: [ 615,  4],         //  21,411,840  20.42 (default ATC drive type)
         3: [ 615,  6],         //  32,117,760  30.63
         4: [ 940,  8],         //  65,454,080  62.42
         5: [ 940,  6],         //  49,090,560  46.82
         6: [ 615,  4],         //  21,411,840  20.42
         7: [ 462,  8],         //  32,169,984  30.68
         8: [ 733,  5],         //  31,900,160  30.42
         9: [ 900, 15],         // 117,504,000 112.06
        10: [ 820,  3],         //  21,411,840  20.42
        11: [ 855,  5],         //  37,209,600  35.49
        12: [ 855,  7],         //  52,093,440  49.68
        13: [ 306,  8],         //  21,307,392  20.32
        14: [ 733,  7],         //  44,660,224  42.59
        /*
         * Since the remaining drive types are > 14, they must be stored in either EXTHDRIVE0 or EXTHDRIVE1 CMOS bytes (0x19 or 0x1A)
         */
        16: [ 612,  4],         //  21,307,392  20.32
        17: [ 977,  5],         //  42,519,040  40.55
        18: [ 977,  7],         //  59,526,656  56.77
        19: [1024,  7],         //  62,390,272  59.50
        20: [ 733,  5],         //  31,900,160  30.42
        21: [ 733,  7],         //  44,660,224  42.59
        22: [ 733,  5],         //  31,900,160  30.42
        23: [ 306,  4]          //  10,653,696  10.16
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
         1: [ 306,  4],         //  306   4  17  512    10,653,696   10.16  (same as IBM)
         2: [ 615,  4],         //  615   4  17  512    21,411,840   20.42  (same as IBM)
         3: [ 615,  6],         //  615   6  17  512    32,117,760   30.63  (same as IBM)
         4: [1023,  8],         // 1023   8  17  512    71,233,536   67.93  (TODO: Cylinders is listed as 1024 in the COMPAQ TechRef; confirm)
         5: [ 940,  6],         //  940   6  17  512    49,090,560   46.82  (same as IBM)
         6: [ 697,  5],         //  697   5  17  512    30,333,440   28.93
         7: [ 462,  8],         //  462   8  17  512    32,169,984   30.68  (same as IBM)
         8: [ 925,  5],         //  925   5  17  512    40,256,000   38.39
         9: [ 900, 15],         //  900  15  17  512   117,504,000  112.06  (same as IBM)
        10: [ 980,  5],         //  980   5  17  512    42,649,600   40.67
        11: [ 925,  7],         //  925   7  17  512    56,358,400   53.75
        12: [ 925,  9],         //  925   9  17  512    72,460,800   69.10
        13: [ 612,  8],         //  612   8  17  512    42,614,784   40.64
        14: [ 980,  4],         //  980   4  17  512    34,119,680   32.54
        /*
         * Since the remaining drive types are > 14, they must be stored in either EXTHDRIVE0 or EXTHDRIVE1 CMOS bytes (0x19 or 0x1A)
         */
        16: [ 612,  4],         //  612   4  17  512    21,307,392   20.32  (same as IBM)
        17: [ 980,  5],         //  980   5  17  512    42,649,600   40.67
        18: [ 966,  6],         //  966   6  17  512    50,448,384   48.11
        19: [1023,  8],         // 1023   8  17  512    71,233,536   67.93
        20: [ 733,  5],         //  733   5  17  512    31,900,160   30.42  (same as IBM)
        21: [ 733,  7],         //  733   7  17  512    44,660,224   42.59  (same as IBM)
        22: [ 524,  4, 40],     //  524   4  40  512    42,926,080   40.94  (Sep 1986 DeskPro 386 TechRef: [768, 6]; May 1987 80286 TechRef: [805, 6])
        23: [ 924,  8],         //  924   8  17  512    64,339,968   61.36  (Sep 1986 DeskPro 386 TechRef: [771, 6])
        24: [ 966, 14],         //  966  14  17  512   117,712,896  112.26
        25: [ 966, 16],         //  966  16  17  512   134,529,024  128.30
        26: [1023, 14],         // 1023  14  17  512   124,658,688  118.88
        27: [ 832,  6, 33],     //  832   6  33  512    84,344,832   80.44  (Sep 1986 DeskPro 386 TechRef and May 1987 80286 TechRef: [966, 10, 17])
        28: [ 771,  3],         //  771   3  17  512    20,132,352   19.20  (TODO: Verify against actual ROM(s), because I originally had this as [1222, 15, 34]; Sep 1986 DeskPro 386 TechRef: [771, 3, 17]; May 1987 80286 TechRef: [748, 16])
        29: [ 578,  4],         //  578   4  17  512    20,123,648   19.19  (TODO: Verify against actual ROM(s), because I originally had this as [1240,  7, 34]; Sep 1986 DeskPro 386 TechRef: [578, 4, 17]; May 1987 80286 TechRef: [805, 6, 26])
        30: [ 615,  4, 25],     //  615   4  25  512    31,488,000   30.03
        31: [ 615,  8, 25],     //  615   8  25  512    62,976,000   60.06
        32: [ 905,  9, 25],     //  905   9  25  512   104,256,000   99.43  (Sep 1986 DeskPro 386 TechRef: [966, 3, 34])
        33: [ 832,  8, 33],     //  832   8  33  512   112,459,776  107.25  (Sep 1986 DeskPro 386 TechRef: [966, 5, 34]; May 1987 80286 TechRef: [748, 8, 34])
        34: [ 966,  7, 34],     //  966   7  34  512   117,712,896  112.26
        35: [ 966,  8, 34],     //  966   8  34  512   134,529,024  128.30
        36: [ 966,  9, 34],     //  966   9  34  512   151,345,152  144.33
        37: [ 966,  5, 34],     //  966   5  34  512    84,080,640   80.19
        38: [ 612, 16, 63],     //  612  16  63  512   315,850,752  301.22  (Sep 1986 DeskPro 386 TechRef: [1023, 9, 33]; May 1987 80286 TechRef: [611, 16, 63])
        39: [1023, 11, 33],     // 1023  11  33  512   190,130,688  181.32
        40: [1023, 15, 34],     // 1023  15  34  512   267,125,760  254.75  (Sep 1986 DeskPro 386 TechRef: [1023, 13, 33])
        41: [1023, 15, 33],     // 1023  15  33  512   259,269,120  247.26  (TODO: Verify against actual ROM(s), because I originally had this as [1630, 15, 52], which seems suspicious, because 1630 exceeds the 10-bit cylinder limit)
        42: [1023, 16, 63],     // 1023  16  63  512   527,966,208  503.51  (Sep 1986 DeskPro 386 TechRef: [1023, 16, 34])
        43: [ 805,  4, 26],     //  805   4  26  512    42,864,640   40.88  (Sep 1986 DeskPro 386 TechRef: [756, 4, 26])
        44: [ 805,  2, 26],     //  805   2  26  512    21,432,320   20.44  (Sep 1986 DeskPro 386 TechRef: [756, 2, 26])
        45: [ 748,  8, 33],     //  748   8  33  512   101,105,664   96.42  (Sep 1986 DeskPro 386 TechRef: [768, 4, 26])
        46: [ 748,  6, 33],     //  748   6  33  512    75,829,248   72.32  (Sep 1986 DeskPro 386 TechRef: [768, 2, 26])
        47: [ 966,  5, 25]      //  966   5  25  512    61,824,000   58.96
    }
];

export { DRIVE_CTRLS, DRIVE_TYPES };
