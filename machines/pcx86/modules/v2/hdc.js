/**
 * @fileoverview Implements the PCx86 Hard Drive Controller (HDC) component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import ChipSet from "./chipset.js";
import Disk from "./disk.js";
import Interrupts from "./interrupts.js";
import MESSAGE from "./message.js";
import Component from "../../../modules/v2/component.js";
import DiskAPI from "../../../modules/v2/diskapi.js";
import State from "../../../modules/v2/state.js";
import StrLib from "../../../modules/v2/strlib.js";
import WebLib from "../../../modules/v2/weblib.js";
import { DRIVE_CTRLS, DRIVE_TYPES } from "./driveinfo.js";
import { APPCLASS, BACKTRACK, DEBUG, MAXDEBUG, globals } from "./defines.js";

/**
 * @typedef {Object} DriveConfig
 * @property {string} name
 * @property {string} path
 * @property {number} type
 * @property {number} size (for custom disk geometries; not yet implemented)
 * @property {string} mode (for enabling on-demand disk I/O with special server APIs; not currently used)
 */

/**
 * @typedef {Object} Drive
 * @property {number} iDrive
 * @property {number} errorCode
 * @property {number} senseCode
 * @property {boolean} fRemovable
 * @property {Array.<number>} abDriveParms
 * @property {Array.<number>} buffer (BYTE array)
 * @property {number} bHead
 * @property {number} nHeads
 * @property {number} wCylinder
 * @property {number} nCylinders
 * @property {number} bSector
 * @property {number} bSectorEnd
 * @property {number} nBytes
 * @property {number} bSectorBias
 * @property {string} name (from DriveConfig.name)
 * @property {string} path (from DriveConfig.path)
 * @property {string} mode (from DriveConfig.mode)
 * @property {number} type (from DriveConfig.type)
 * @property {string} sDiskPath (initialized to path, but can change if media removable; eg, ATAPI CD-ROM drive)
 * @property {number} nSectors
 * @property {number} cbSector
 * @property {number} cbTransfer (normally the same as cbSector, except for PACKET commands)
 * @property {Disk|null} disk
 * @property {Sector|null} sector
 * @property {number} iByte
 * @property {boolean} useBuffer (true if buffer rather than sector must be used; make sure initBuffer() has been called)
 * @property {Array} chunksCached (sparse array of cached chunks)
 * @property {Array} chunksMRU (array of cached chunk indexes, starting with the most-recently-used; capped at 128 entries)
 */

/**
 * @class HDC
 * @property {Array.<DriveConfig>} aDriveConfigs
 * @unrestricted (allows the class to define properties, both dot and named, outside of the constructor)
 */
export default class HDC extends Component {

    /**
     * HDC defaults, in case drive parameters weren't specified
     */
    static DEFAULT_DRIVE_NAME = "Hard Drive";

    /**
     * ATC (AT Controller) Registers
     *
     * The "IBM Personal Computer AT Fixed Disk and Diskette Drive Adapter", aka the HFCOMBO card, contains what we refer
     * to here as the ATC (AT Controller).  Even though that card contains both Fixed Disk and Diskette Drive controllers,
     * this component (HDC) still deals only with the "Fixed Disk" portion.  Fortunately, the "Diskette Drive Adapter"
     * portion of the card is compatible with the existing FDC component, so that component continues to be responsible
     * for all diskette operations.
     *
     * ATC ports default to their primary addresses; secondary port addresses are 0x80 lower (e.g., 0x170 instead of 0x1F0).
     *
     * It's important to know that the MODEL_5170 BIOS has a special relationship with the "Combo Hard File/Diskette
     * (HFCOMBO) Card" (see @F000:144C).  Initially, the ChipSet component intercepted reads for HFCOMBO's STATUS port
     * and returned the BUSY bit clear to reduce boot time; however, it turned out that was also a prerequisite for the
     * BIOS to write test patterns to the CYLLO port (0x1F4) and set the "DUAL" bit (bit 0) of the "HFCNTRL" byte at 40:8Fh
     * if those CYLLO operations succeeded (now that the HDC is "ATC-aware", the ChipSet port intercepts have been removed).
     *
     * Without the "DUAL" bit set, when it came time later to report the diskette drive type, the "DISK_TYPE" function
     * (@F000:273D) would branch to one of two almost-identical blocks of code -- specifically, a block that disallowed
     * diskette drive types >= 2 (ChipSet.CMOS.FDRIVE.FD360) instead of >= 3 (ChipSet.CMOS.FDRIVE.FD1200).
     *
     * In other words, the "Fixed Disk" portion of the HFCOMBO controller has to be present and operational if the user
     * wants to use high-capacity (80-track) diskettes with "Diskette Drive" portion of the controller.  This may not be
     * immediately obvious to anyone creating a 5170 machine configuration with the FDC component but no HDC component.
     *
     * TODO: Investigate what a MODEL_5170 can do, if anything, with diskettes if an "HFCOMBO card" was NOT installed;
     * e.g., was there Diskette-only Controller that could be installed, and if so, did it support high-capacity diskette
     * drives?  Also, consider making the FDC component able to detect when the HDC is missing and provide the same minimal
     * HFCOMBO port intercepts that ChipSet once provided (this is not a requirement, just a usability improvement).
     *
     * UPDATE: I later discovered that newer (ie, REV2 and REV3) 5170 ROMs are even less happy when no HDC is installed,
     * *unless* an undocumented FDC "DIAGNOSTIC" register (port 0x3F1) provides a "MULTIPLE DATA RATE" response, bypassing
     * the HDC port tests described above.  This may also imply that those newer 5170 revisions are incompatible with FD360
     * diskette drives, because if none of the "MULTIPLE DATA RATE" tests succeed, a "601-Diskette Error" always occurs.
     */
    static ATC = {
        DATA:   {                   // no register (read-write)
            PORT1:      0x1F0,      // data port address for primary interface
            PORT2:      0x170       // data port address for secondary interface
        },
        DIAG:   {                   // this.regError (read-only)
            PORT1:      0x1F1,
            PORT2:      0x171,
            NO_ERROR:    0x01,
            CTRL_ERROR:  0x02,
            SEC_ERROR:   0x03,
            ECC_ERROR:   0x04,
            PROC_ERROR:  0x05
        },
        ERROR: {                    // this.regError (read-only)
            PORT1:      0x1F1,
            PORT2:      0x171,
            NONE:        0x00,
            NO_DAM:      0x01,      // Data Address Mark (DAM) not found
            NO_TRK0:     0x02,      // Track 0 not detected
            CMD_ABORT:   0x04,      // Aborted Command
            NO_CHS:      0x10,      // ID field with the specified C:H:S not found
            ECC_ERR:     0x40,      // Data ECC Error
            BAD_BLOCK:   0x80       // Bad Block Detect
        },
        WPREC:  {                   // this.regWPreC (write-only)
            PORT1:      0x1F1,
            PORT2:      0x171
        },
        SECCNT: {                   // this.regSecCnt (read-write; 0 implies a 256-sector request)
            PORT1:      0x1F2,
            PORT2:      0x172,
            PACKET_CD:   0x01,      // for PACKET command, bit 0 set upon transfer of packet command
            PACKET_IO:   0x02       // for PACKET command, bit 1 set upon transfer of packet response
        },
        SECNUM: {                   // this.regSecNum (read-write)
            PORT1:      0x1F3,
            PORT2:      0x173
        },
        CYLLO:  {                   // this.regCylLo (read-write; all 8 bits are used)
            PORT1:      0x1F4,
            PORT2:      0x174
        },
        CYLHI:  {                   // this.regCylHi (read-write; only bits 0-1 are used, for a total of 10 bits, or 1024 max cylinders)
            PORT1:      0x1F5,
            PORT2:      0x175,
            MASK:        0x03
        },
        DRVHD:  {                   // this.regDrvHd (read-write)
            PORT1:      0x1F6,
            PORT2:      0x176,
            HEAD_MASK:   0x0F,      // set this to the max number of heads before issuing a SET PARAMETERS command
            DRIVE_MASK:  0x10,
            SET_MASK:    0xE0,
            SET_BITS:    0xA0       // for whatever reason, these bits must always be set
        },
        STATUS: {                   // this.regStatus (read-only; reading clears IRQ.ATC1 or IRQ.ATC2 as appropriate)
            PORT1:      0x1F7,
            PORT2:      0x177,
            ERROR:       0x01,      // set when the previous command ended in an error; one or more bits are set in the ERROR register (the next command to the controller resets the ERROR bit)
            INDEX:       0x02,      // set once for every revolution of the disk
            CORRECTED:   0x04,
            DATA_REQ:    0x08,      // indicates that "the sector buffer requires servicing during a Read or Write command. If either bit 7 (BUSY) or this bit is active, a command is being executed. Upon receipt of any command, this bit is reset."
            SEEK_OK:     0x10,      // seek operation complete
            WFAULT:      0x20,      // write fault
            READY:       0x40,      // if this is set (along with the SEEK_OK bit), the drive is ready to read/write/seek again
            BUSY:        0x80       // if this is set, no other STATUS bits are valid
        },
        COMMAND: {                  // this.regCommand (write-only)
            PORT1:      0x1F7,
            PORT2:      0x177,
            NO_RETRY:    0x01,      // optional bit for READ_DATA, WRITE_DATA, and READ_VERF commands
            WITH_ECC:    0x02,      // optional bit for READ_DATA and WRITE_DATA commands
            STEP_RATE:   0x0F,      // optional bits for stepping rate used with RESTORE and SEEK commands
                                    // (low nibble x 500us equals stepping rate, except for 0, which corresponds to 35us)
            /**
             * The following 8 commands comprised the original PC AT (ATA) command set.  You may see other later command
             * set definitions that show "mandatory" commands, such as READ_MULT (0xC4) or WRITE_MULT (0xC5), but those didn't
             * exist until the introduction of later interface enhancements (e.g., ATA-1, ATA-2, IDE, EIDE, ATAPI, etc).
             */
            RESTORE:     0x10,      // aka RECALIBRATE
            READ_DATA:   0x20,      // also supports NO_RETRY and/or WITH_ECC
            WRITE_DATA:  0x30,      // also supports NO_RETRY and/or WITH_ECC
            READ_VERF:   0x40,      // also supports NO_RETRY
            FORMAT_TRK:  0x50,      // TODO
            SEEK:        0x70,      //
            DIAGNOSE:    0x90,      //
            SETPARMS:    0x91,      //
            /**
             * Additional commands go here.  As for when these commands were introduced, I may try to include
             * that information parenthetically, but I'm not going to pretend this is in any way authoritative.
             */
            RESET:       0x08,      // Device Reset (ATAPI)
            PACKET:      0xA0,      // Packet Request (ATAPI)
            IDPACKET:    0xA1,      // Identify Packet Device (ATAPI)
            IDDEVICE:    0xEC       // Identify Device (ATA-1)
        },
        FDR: {                      // this.regFDR
            PORT1:      0x3F6,
            PORT2:      0x376,
            INT_DISABLE: 0x02,      // a logical 0 enables fixed disk interrupts
            RESET:       0x04,      // a logical 1 enables reset fixed disk function
            HS3:         0x08,      // a logical 1 enables head select 3 (a logical 0 enables reduced write current)
            RESERVED:    0xF1
        },
        /**
         * Much of the following IDENTIFY structure information came from a Seagate ATA Reference Manual,
         * 36111-001, Rev. C, dated 21 May 1993 (111-1c.pdf), a specification which I believe later became known
         * as ATA-1.
         *
         * All words are stored little-endian; also note some definitions of CUR_CAPACITY define it as two
         * 16-bit words, since as a 32-bit dword, it would be misaligned if the structure began on a dword boundary
         * (and, of course, if it did NOT begin on a dword boundary, then LBA_CAPACITY would be misaligned).
         * Alignment considerations are of no great concern on Intel platforms, however.
         */
        IDENTIFY: {
            CONFIG: {                   // WORD: GENERAL_CONFIG
                OFFSET:         0x00,
                ATA_RESERVED:   0x0001, // always clear (ATA reserved)
                HARD_SECTORED:  0x0002, // set if hard sectored
                SOFT_SECTORED:  0x0004, // set if soft sectored
                NOT_MFM:        0x0008, // set if not MFM encoded
                HDSW_15MS:      0x0010, // set if head switch time > 15usec
                SPINDLE_OPT:    0x0020, // set if spindle motor control option implemented
                FIXED:          0x0040, // set if fixed drive
                REMOVABLE:      0x0080, // set if removable cartridge drive
                RATE_5MBIT:     0x0100, // set if disk transfer rate <= 5Mbit/sec
                RATE_10MBIT:    0x0200, // set if disk transfer rate <= 10Mbit/sec and > 5Mbit/sec
                RATE_FASTER:    0x0400, // set if disk transfer rate > 10Mbit/sec
                ROT_TOLERANCE:  0x0800, // set if rotational speed tolerance is > 0.5%
                STROBE_OPT:     0x1000, // set if data strobe offset option available
                TRACK_OPT:      0x2000, // set if track offset option available
                FMT_TOLERANCE:  0x4000, // set if format speed tolerance gap required
                NM_RESERVED:    0x8000  // always clear (reserved for non-magnetic drives)
            },
            CYLS:               0x02,   // WORD: number of physical cylinders
            CONFIG2:            0x04,   // WORD: SPECIFIC_CONFIG
            HEADS:              0x06,   // WORD: number of physical heads
            TRACK_BYTES:        0x08,   // WORD: bytes per track
            SECBYTES:           0x0A,   // WORD: bytes per sector
            SECTORS:            0x0C,   // WORD: sectors per track
                                        // (reserved words at 0x0E, 0x10, and 0x12)
            SERIAL_NUMBER:      0x14,   // CHAR: 20 ASCII characters
            BUFFER_TYPE:        0x28,   // WORD: 0=unspecified, 1=single, 2=dual, 3=caching
            BUFFER_SIZE:        0x2A,   // WORD: 512-byte increments
            ECC_BYTES:          0x2C,   // WORD: number of ECC bytes on read/write long commands
            FIRMWARE_REV:       0x2E,   // CHAR: 8 ASCII characters
            MODEL_NUMBER:       0x36,   // CHAR: 40 ASCII characters
            MAX_MULTISEC:       0x5E,   // BYTE: if non-zero, number of transferable sectors per interrupt
                                        // (reserved byte at 0x5F)
            DWORD_IO:           0x60,   // WORD: 0x0001 if double-word I/O supported, 0x0000 if not
                                        // (reserved byte at 0x62)
            CAPABILITY:         0x63,   // BYTE: bit0=DMA, bit1=LBA, bit2=IORDYsw, bit3=IORDYsup
                                        // (reserved word at 0x64; reserved byte at 0x66)
            PIO_TIMING:         0x67,   // BYTE: 0=slow, 1=medium, 2=fast
                                        // (reserved byte at 0x68)
            DMA_TIMING:         0x69,   // BYTE: 0=slow, 1=medium, 2=fast
            NEXT5_VALID:        0x6A,   // WORD: bit0=1 if next 5 words are valid, 0 if not
            CUR_CYLS:           0x6C,   // WORD: number of logical cylinders
            CUR_HEADS:          0x6E,   // WORD: number of logical heads
            CUR_SECTORS:        0x70,   // WORD: number of logical sectors per track
            CUR_CAPACITY:       0x72,   // LONG: logical capacity in sectors
            MULTISECT:          0x76,   // BYTE: current multiple sector count
            MULTISECT_VALID:    0x77,   // BYTE: bit0=1 if MULTSECT is valid, 0 if not
            LBA_CAPACITY:       0x78,   // LONG: total number of sectors
            DMA_SINGLE:         0x7C,   // BYTE
            DMA_SINGLE_ACTIVE:  0x7D,   // BYTE
            DMA_MULTI:          0x7E,   // BYTE
            DMA_MULTI_ACTIVE:   0x7F,   // BYTE
            /**
             * The rest of this 512-byte structure (words 64 through 255) was reserved at the time of the ATA-1 spec,
             * so I will not delve any deeper into this structure now.
             *
             * Further details can be found at:
             *
             *      https://docs.microsoft.com/en-us/windows-hardware/drivers/ddi/content/ata/ns-ata-_identify_device_data
             *      https://chromium.googlesource.com/chromiumos/third_party/u-boot-next/+/master/include/ata.h
             *
             * Regrettably, those more modern documents don't bother mentioning at what point any fields were added
             * to the specification, and they treat some of the early obsolete fields as too old to warrant any explanation,
             * calling them simply "Retired" or "Obsolete".  Not particularly helpful to anyone who cares about history.
             */
        },
        PACKET: {
            COMMAND: {
                TEST_UNIT:      0x00,   // Test Unit Ready
                REQ_SENSE:      0x03,   // Request Sense
                INQUIRY:        0x12,   // Inquiry
                READ:           0x28,   // Read
                SEEK:           0x2B,   // Seek
                READ_TOC:       0x43,   // Read TOC (Table of Contents), PMA (Program Memory Area), and ATIP (Absolute Time in Pre-Groove)
                PLAY_AUDIO:     0x45,   // Play Audio
                MODE_SENSE:     0x5A    // Mode Sense
            },
            /**
             * Finding a succinct list of all the (SCSI) Page Codes in old ATAPI/SCSI specs is surprisingly hard,
             * but there is a nice summary on Wikipedia (https://en.wikipedia.org/wiki/SCSI_mode_page).  For details
             * on Page Code contents, check out the ANSI X3.304-1997 spec (e.g., page 72 for Page Code 0x2A).
             */
            PAGECODE: {
                RW_ERRREC:      0x01,   // Read-Write Error Recovery Page
                CD_STATUS:      0x2A    // CD Capabilities and Mechanical Status Page
            },
            ADR: {                      // ADR Q sub-channel values (0x4-0xF reserved)
                NONE:           0x0,
                CUR_POS:        0x1,
                MEDIA_CAT_NO:   0x2,
                ISRC:           0x3
            },
            CONTROL: {                  // CONTROL Q sub-channel values
                DATA_TRACK:     0x4
            }
        }
    };

    /**
     * XTC (XT Controller) Registers
     */
    static XTC = {
        /**
         * XTC Data Register (0x320, read-write)
         *
         * Writes to this register are discussed below; see HDC Commands.
         *
         * Reads from this register after a command has been executed retrieve a "status byte",
         * which must NOT be confused with the Status Register (see below).  This data "status byte"
         * contains only two bits of interest: XTC.DATA.STATUS.ERROR and XTC.DATA.STATUS.UNIT.
         */
        DATA: {
            PORT:          0x320,   // port address
            STATUS: {
                OK:         0x00,   // no error
                ERROR:      0x02,   // error occurred during command execution
                UNIT:       0x20    // logical unit number of the drive
            },
            /**
             * XTC Commands, as issued to XTC_DATA
             *
             * Commands are multi-byte sequences sent to XTC_DATA, starting with a XTC_DATA.CMD byte,
             * and followed by 5 more bytes, for a total of 6 bytes, which collectively are called a
             * Device Control Block (DCB).  Not all commands use all 6 bytes, but all 6 bytes must be present;
             * unused bytes are simply ignored.
             *
             *      XTC_DATA.CMD    (3-bit class code, 5-bit operation code)
             *      XTC_DATA.HEAD   (1-bit drive number, 5-bit head number)
             *      XTC_DATA.CLSEC  (upper bits of 10-bit cylinder number, 6-bit sector number)
             *      XTC_DATA.CH     (lower bits of 10-bit cylinder number)
             *      XTC_DATA.COUNT  (8-bit interleave or block count)
             *      XTC_DATA.CTRL   (8-bit control field)
             *
             * One command, HDC.XTC.DATA.CMD.INIT_DRIVE, must include 8 additional bytes following the DCB:
             *
             *      maximum number of cylinders (high)
             *      maximum number of cylinders (low)
             *      maximum number of heads
             *      start reduced write current cylinder (high)
             *      start reduced write current cylinder (low)
             *      start write precompensation cylinder (high)
             *      start write precompensation cylinder (low)
             *      maximum ECC data burst length
             *
             * Note that the 3 word values above are stored in "big-endian" format (high byte followed by low byte),
             * rather than the "little-endian" format (low byte followed by high byte) you typically find on Intel machines.
             */
            CMD: {
                TEST_READY:     0x00,       // Test Drive Ready
                RECALIBRATE:    0x01,       // Recalibrate
                REQ_SENSE:      0x03,       // Request Sense Status
                FORMAT_DRIVE:   0x04,       // Format Drive
                READ_VERF:      0x05,       // Read Verify
                FORMAT_TRK:     0x06,       // Format Track
                FORMAT_BAD:     0x07,       // Format Bad Track
                READ_DATA:      0x08,       // Read
                WRITE_DATA:     0x0A,       // Write
                SEEK:           0x0B,       // Seek
                INIT_DRIVE:     0x0C,       // Initialize Drive Characteristics
                READ_ECC_BURST: 0x0D,       // Read ECC Burst Error Length
                READ_BUFFER:    0x0E,       // Read Data from Sector Buffer
                WRITE_BUFFER:   0x0F,       // Write Data to Sector Buffer
                RAM_DIAGNOSTIC: 0xE0,       // RAM Diagnostic
                DRV_DIAGNOSTIC: 0xE3,       // HDC BIOS: CHK_DRV_CMD
                CTL_DIAGNOSTIC: 0xE4,       // HDC BIOS: CNTLR_DIAG_CMD
                READ_LONG:      0xE5,       // HDC BIOS: RD_LONG_CMD
                WRITE_LONG:     0xE6        // HDC BIOS: WR_LONG_CMD
            },
            ERR: {
                /**
                 * HDC error conditions, as returned in byte 0 of the (4) bytes returned by the Request Sense Status command
                 */
                NONE:           0x00,
                NO_INDEX:       0x01,       // no index signal detected
                SEEK_INCOMPLETE:0x02,       // no seek-complete signal
                WRITE_FAULT:    0x03,
                NOT_READY:      0x04,       // after the controller selected the drive, the drive did not respond with a ready signal
                NO_TRACK:       0x06,       // after stepping the max number of cylinders, the controller did not receive the track 00 signal from the drive
                STILL_SEEKING:  0x08,
                ECC_ID_ERROR:   0x10,
                ECC_DATA_ERROR: 0x11,
                NO_ADDR_MARK:   0x12,
                NO_SECTOR:      0x14,
                BAD_SEEK:       0x15,       // seek error: the cylinder and/or head address did not compare with the expected target address
                ECC_CORRECTABLE:0x18,       // correctable data error
                BAD_TRACK:      0x19,
                BAD_CMD:        0x20,
                BAD_DISK_ADDR:  0x21,
                RAM:            0x30,
                CHECKSUM:       0x31,
                POLYNOMIAL:     0x32,
                MASK:           0x3F
            },
            SENSE: {
                ADDR_VALID:     0x80
            }
        },
        /**
         * XTC Status Register (0x321, read-only)
         *
         * WARNING: The IBM Technical Reference Manual *badly* confuses the XTC_DATA "status byte" (above)
         * that the controller sends following an HDC.XTC.DATA.CMD operation with the Status Register (below).
         * In fact, it's so badly confused that it completely fails to document any of the Status Register
         * bits below; I'm forced to guess at their meanings from the HDC BIOS listing.
         */
        STATUS: {
            PORT:          0x321,   // port address
            NONE:           0x00,
            REQ:            0x01,   // HDC BIOS: request bit
            IOMODE:         0x02,   // HDC BIOS: mode bit (GUESS: set whenever XTC_DATA contains a response?)
            BUS:            0x04,   // HDC BIOS: command/data bit (GUESS: set whenever XTC_DATA ready for request?)
            BUSY:           0x08,   // HDC BIOS: busy bit
            INTERRUPT:      0x20    // HDC BIOS: interrupt bit
        }
    };

    /**
     * XTC Config Register (0x322, read-only)
     *
     * This register is used to read HDC card switch settings that defined the "Drive Type" for
     * drives 0 and 1.  SW[1],SW[2] (for drive 0) and SW[3],SW[4] (for drive 1) are set as follows:
     *
     *      ON,  ON     Drive Type 0   (306 cylinders, 2 heads)
     *      ON,  OFF    Drive Type 1   (375 cylinders, 8 heads)
     *      OFF, ON     Drive Type 2   (306 cylinders, 6 heads)
     *      OFF, OFF    Drive Type 3   (306 cylinders, 4 heads)
     */

    /**
     * HDC Command Sequences
     *
     * Unlike the FDC, all the HDC commands have fixed-length command request sequences (well, OK, except for
     * HDC.XTC.DATA.CMD.INIT_DRIVE) and fixed-length response sequences (well, OK, except for HDC.XTC.DATA.CMD.REQ_SENSE),
     * so a table of byte-lengths isn't much use, but having names for all the commands is still handy for debugging.
     */
    static aATACommands = {
        0x08: "Device Reset",           // ATAPI
        0x10: "Restore (Recalibrate)",  // ATA
        0x20: "Read",                   // ATA
        0x30: "Write",                  // ATA
        0x40: "Read Verify",            // ATA
        0x50: "Format Track",           // ATA
        0x70: "Seek",                   // ATA
        0x90: "Diagnose",               // ATA
        0x91: "Set Parameters",         // ATA
        0xA0: "Packet Request",         // ATAPI
        0xA1: "Identify Packet Device", // ATAPI
        0xEC: "Identify Device"         // ATA-1
    };

    static aATAPICommands = {
        [HDC.ATC.PACKET.COMMAND.TEST_UNIT]:     "Test Unit Ready",
        [HDC.ATC.PACKET.COMMAND.REQ_SENSE]:     "Request Sense",
        [HDC.ATC.PACKET.COMMAND.INQUIRY]:       "Inquiry",
        [HDC.ATC.PACKET.COMMAND.READ]:          "Read",
        [HDC.ATC.PACKET.COMMAND.SEEK]:          "Seek",
        [HDC.ATC.PACKET.COMMAND.READ_TOC]:      "Read TOC",
        [HDC.ATC.PACKET.COMMAND.PLAY_AUDIO]:    "Play Audio",
        [HDC.ATC.PACKET.COMMAND.MODE_SENSE]:    "Mode Sense",
    };

    static aXTACommands = {
        0x00: "Test Drive Ready",
        0x01: "Recalibrate",
        0x03: "Request Sense Status",
        0x04: "Format Drive",
        0x05: "Read Verify",
        0x06: "Format Track",
        0x07: "Format Bad Track",
        0x08: "Read",
        0x0A: "Write",
        0x0B: "Seek",
        0x0C: "Initialize Drive Characteristics",
        0x0D: "Read ECC Burst Error Length",
        0x0E: "Read Data from Sector Buffer",
        0x0F: "Write Data to Sector Buffer",
        0xE0: "RAM Diagnostic",
        0xE3: "Drive Diagnostic",
        0xE4: "Controller Diagnostic",
        0xE5: "Read Long",
        0xE6: "Write Long"
    };

    static {
        /**
         * Port input notification tables
         */
        HDC.aXTCPortInput = {
            0x320:  HDC.prototype.inXTCData,
            0x321:  HDC.prototype.inXTCStatus,
            0x322:  HDC.prototype.inXTCConfig
        };

        /**
         * For future reference, the REV2 and REV3 PC AT ROM BIOS also refer to a "FIXED DISK DIAGNOSTIC REGISTER" at
         * port 0x5F7, but I have no documentation on it, and failure to respond is non-fatal.  See the discussion of the
         * FDC diagnostic register in inFDCDiagnostic() for more details.
         */
        HDC.aATCPortInputPrimary = {
            0x1F0:  HDC.prototype.inATCData,
            0x1F1:  HDC.prototype.inATCError,
            0x1F2:  HDC.prototype.inATCSecCnt,
            0x1F3:  HDC.prototype.inATCSecNum,
            0x1F4:  HDC.prototype.inATCCylLo,
            0x1F5:  HDC.prototype.inATCCylHi,
            0x1F6:  HDC.prototype.inATCDrvHd,
            0x1F7:  HDC.prototype.inATCStatus
        };

        HDC.aATCPortInputSecondary = {
            0x170:  HDC.prototype.inATCData,
            0x171:  HDC.prototype.inATCError,
            0x172:  HDC.prototype.inATCSecCnt,
            0x173:  HDC.prototype.inATCSecNum,
            0x174:  HDC.prototype.inATCCylLo,
            0x175:  HDC.prototype.inATCCylHi,
            0x176:  HDC.prototype.inATCDrvHd,
            0x177:  HDC.prototype.inATCStatus
        };

        /**
         * Port output notification tables
         */
        HDC.aXTCPortOutput = {
            0x320:  HDC.prototype.outXTCData,
            0x321:  HDC.prototype.outXTCReset,
            0x322:  HDC.prototype.outXTCPulse,
            0x323:  HDC.prototype.outXTCPattern,
            /**
             * The PC XT Fixed Disk BIOS includes some additional "housekeeping" that it performs
             * not only on port 0x323 but also on three additional ports, at increments of 4 (see all
             * references to "RESET INT/DMA MASK" in the Fixed Disk BIOS).  It's not clear to me if
             * those ports refer to additional HDC controllers, and I haven't seen other references to
             * them, but in any case, they represent a lot of "I/O noise" that we simply squelch here.
             */
            0x327:  HDC.prototype.outXTCNoise,
            0x32B:  HDC.prototype.outXTCNoise,
            0x32F:  HDC.prototype.outXTCNoise
        };

        HDC.aATCPortOutputPrimary = {
            0x1F0:  HDC.prototype.outATCData,
            0x1F1:  HDC.prototype.outATCWPreC,
            0x1F2:  HDC.prototype.outATCSecCnt,
            0x1F3:  HDC.prototype.outATCSecNum,
            0x1F4:  HDC.prototype.outATCCylLo,
            0x1F5:  HDC.prototype.outATCCylHi,
            0x1F6:  HDC.prototype.outATCDrvHd,
            0x1F7:  HDC.prototype.outATCCommand,
            0x3F6:  HDC.prototype.outATCFDR
        };

        HDC.aATCPortOutputSecondary = {
            0x170:  HDC.prototype.outATCData,
            0x171:  HDC.prototype.outATCWPreC,
            0x172:  HDC.prototype.outATCSecCnt,
            0x173:  HDC.prototype.outATCSecNum,
            0x174:  HDC.prototype.outATCCylLo,
            0x175:  HDC.prototype.outATCCylHi,
            0x176:  HDC.prototype.outATCDrvHd,
            0x177:  HDC.prototype.outATCCommand,
            0x376:  HDC.prototype.outATCFDR
        };
    }

    /**
     * HDC(parmsHDC)
     *
     * The HDC component simulates an STC-506/412 interface to an IBM-compatible fixed disk drive. The first
     * such drive was a 10Mb 5.25-inch drive containing two platters and 4 heads. Data spanned 306 cylinders
     * for a total of 1224 tracks, with 17 sectors/track and 512 bytes/sector.  Support has since been expanded
     * to include the original PC AT Western Digital controller.
     *
     * HDC supports the following component-specific properties:
     *
     *      drives: an array of DriveConfig objects, each containing 'name', 'path', 'type' and 'size' properties
     *      type: either "XT" (for the PC XT Xebec controller), or "AT" (for the PC AT Western Digital controller)
     *
     * The 'type' parameter defaults to "XT", enabling support for the PC XT controller.  All ports for the
     * PC XT controller are referred to as XTC ports.  We may also say that the XTC implements the XTA interface,
     * to differentiate it from ATA controllers, which came later.
     *
     * Choosing "AT" as the controller type enables ATA compatibility, and by default, the primary ATA interface is
     * enabled (ie, "AT" is equivalent to "AT1"); if you want to enable the secondary ATA interface, specify "AT2".
     * PC AT controller ports are referred to as ATC ports, and the ATC implements the ATA interface (along with
     * ATAPI, if requested).
     *
     * If you want to connect an ATAPI (CD-ROM) drive to the controller, specify "ATAPI" instead of "AT"; unlike
     * "AT", "ATAPI" defaults to secondary interface (ie, "ATAPI" is equivalent to "ATAPI2"), but you can override
     * the default (e.g., "ATAPI1").
     *
     * If 'path' is empty, a scratch disk image is created; otherwise, we make a note of the path, but we will NOT
     * pre-load it like we do for floppy disk images.
     *
     * My current plan is to read all disk data on-demand, keeping a cache of what we've read, and possibly adding
     * some read-ahead as well. Any portions of the disk image that are written before being read will never be read.
     *
     * TRIVIA: On p.1-179 of the PC XT Technical Reference Manual (revised APR83), it reads:
     *
     *      "WARNING: The last cylinder on the fixed disk drive is reserved for diagnostic use.
     *      Diagnostic write tests will destroy any data on this cylinder."
     *
     * Does FDISK insure that the last cylinder is reserved?  I'm sure we'll eventually find out.
     *
     * @this {HDC}
     * @param {Object} parmsHDC
     */
    constructor(parmsHDC)
    {
        super("HDC", parmsHDC, MESSAGE.HDC);

        this['dmaRead'] = HDC.prototype.doDMARead;
        this['dmaWrite'] = HDC.prototype.doDMAWrite;
        this['dmaWriteBuffer'] = HDC.prototype.doDMAWriteBuffer;
        this['dmaWriteFormat'] = HDC.prototype.doDMAWriteFormat;

        this.aDriveConfigs = [];

        /**
         * We used to eval() driveConfigs immediately, but now we wait until initBus() is called, so that
         * we can check for any machine overrides.
         */
        this.driveConfigs = parmsHDC['drives'];

        /**
         * Set fATC (AT Controller flag) according to the 'type' parameter.  This in turn determines other
         * defaults.  For example, the default XT drive type is 3 (for a 10Mb disk drive), whereas the default
         * AT drive type is 2 (for a 20Mb disk drive).
         */
        this.fATC = this.fATAPI = false;
        this.sType = (parmsHDC['type'] || "XT").toUpperCase();
        if (this.sType.indexOf("XT") < 0) {
            this.fATC = true;
            this.fATAPI = this.sType.indexOf("ATAPI") >= 0;
        }
        this.nInterface = (this.fATAPI? 1 : 0);     // default to the secondary interface if type is "ATAPI"
        let nInterface = this.sType.slice(-1);      // but if an interface is specified (e.g., "AT2", "ATAPI1"), honor it
        if (nInterface == '1') {
            this.nInterface = 0;
        } else if (nInterface == '2') {
            this.nInterface = 1;
        }

        /**
         * Support for local disk images is currently limited to desktop browsers with FileReader support;
         * when this flag is set, setBinding() allows local disk bindings and informs initBus() to update the
         * "listDisks" binding accordingly.
         */
        this.fLocalDisks = (!WebLib.isMobile() && 'FileReader' in globals.window);

        /**
         * The remainder of HDC initialization now takes place in our initBus() handler.
         */
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * @this {HDC}
     * @param {string} sHTMLType is the type of the HTML control (e.g., "button", "list", "text", "submit", "textarea", "canvas")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (e.g., "listDisks")
     * @param {HTMLElement} control is the HTML control DOM object (e.g., HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        let hdc = this;

        switch (sBinding) {

        case "listDisks":
            this.bindings[sBinding] = control;
            break;

        case "saveHD0":
        case "saveHD1":
            /**
             * Yes, technically, this feature does not require "Local disk support" (which is really a reference
             * to FileReader support), but since fLocalDisks is also false for all mobile devices, and since there
             * is an "orthogonality" to disabling both features in tandem, let's just let it slide, OK?
             */
            if (!this.fLocalDisks) {
                if (DEBUG) this.printf(MESSAGE.LOG, "Local disk support not available\n");
                /**
                 * We could also simply remove the control; eg:
                 *
                 *      control.parentNode.removeChild(@type {Node} (control));
                 *
                 * but as long as the parentNode remains, with its accompanying style, the visual layout of the machine
                 * could look odd.  So let's change the parent's style instead.
                 */
                control.parentNode.style.display = "none";
                return false;
            }
            this.bindings[sBinding] = control;
            control.onclick = function(iDrive) {
                return function onClickSaveDrive(event) {
                    let drive = hdc.aDrives && hdc.aDrives[iDrive];
                    if (drive && drive.disk) {
                        /**
                         * Note the similarity (and hence factoring opportunity) between this code and the FDC's
                         * "saveDisk" binding.
                         *
                         * One important difference between the FDC and the HDC is that an FDC may or may not contain
                         * a disk, whereas an HDC always contains a disk.  However, the contents of an HDC's disk may
                         * never have been initialized with the contents of an external disk image, and therefore the
                         * disk's sDiskFile/sDiskPath properties may be undefined.  sDiskName should always be defined
                         * though, defaulting to the name of the drive (e.g., "10Mb Hard Disk").
                         */
                        let disk = drive.disk;
                        let sDiskName = disk.sDiskFile || disk.sDiskName;
                        let i = sDiskName.lastIndexOf('.');
                        if (i >= 0) sDiskName = sDiskName.substr(0, i);
                        sDiskName += ".img";
                        if (DEBUG) hdc.printf("saving disk %s...\n", sDiskName);
                        let sAlert = WebLib.downloadFile(disk.encodeAsBinary(), "octet-stream", true, sDiskName);
                        Component.alertUser(sAlert);
                    } else {
                        hdc.printf(MESSAGE.NOTICE, "Hard drive %d is not available.\n", iDrive);
                    }
                };
            }(+sBinding.slice(-1));
            return true;
        }
        return false;
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {HDC}
     * @param {Computer} cmp
     * @param {Busx86} bus
     * @param {CPUx86} cpu
     * @param {Debuggerx86} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.bus = bus;
        this.cpu = cpu;
        this.dbg = dbg;
        this.cmp = cmp;

        /**
         * Any machine-specific 'drives' settings apply only the first HDC interface.
         */
        let driveConfigs = cmp.getMachineParm(this.nInterface? 'cdromDrives' : 'drives') || this.driveConfigs;

        if (Array.isArray(driveConfigs)) {
            this.aDriveConfigs = driveConfigs;
        }
        else if (typeof driveConfigs == "string") {
            try {
                /**
                 * We must take care when parsing user-supplied JSON-encoded drive data.
                 */
                this.aDriveConfigs = eval("(" + driveConfigs + ")");
            } catch (e) {
                Component.error("HDC drive configuration error: " + e.message + " (" + driveConfigs + ")");
            }
        }

        /**
         * We need access to the ChipSet component, because we need to communicate with
         * the PIC and DMA controller.
         */
        this.chipset = cmp.getMachineComponent("ChipSet");

        this.iDriveCtrl = 0;
        this.iDriveTypeDefault = 3;

        if (!this.fATC) {
            bus.addPortInputTable(this, HDC.aXTCPortInput);
            bus.addPortOutputTable(this, HDC.aXTCPortOutput);
        } else {
            if (!this.nInterface) {
                bus.addPortInputTable(this, HDC.aATCPortInputPrimary);
                bus.addPortOutputTable(this, HDC.aATCPortOutputPrimary);
                bus.addPortInputWidth(HDC.ATC.DATA.PORT1, 2);
                bus.addPortOutputWidth(HDC.ATC.DATA.PORT1, 2);
            } else {
                bus.addPortInputTable(this, HDC.aATCPortInputSecondary);
                bus.addPortOutputTable(this, HDC.aATCPortOutputSecondary);
                bus.addPortInputWidth(HDC.ATC.DATA.PORT2, 2);
                bus.addPortOutputWidth(HDC.ATC.DATA.PORT2, 2);
            }
            this.iDriveCtrl++;
            if (this.chipset && this.chipset.model == ChipSet.MODEL_COMPAQ_DESKPRO386) this.iDriveCtrl++;
            this.iDriveTypeDefault = 2;
        }

        cpu.addIntNotify(Interrupts.DISK, this.intBIOSDisk.bind(this));
        cpu.addIntNotify(Interrupts.ALT_DISK, this.intBIOSDiskette.bind(this));

        /**
         * The following code used to be performed in the HDC constructor, but now we need to wait for information
         * about the Computer to be available (e.g., getMachineID() and getUserID()) before we start loading and/or
         * connecting to disk images.
         *
         * If we didn't need auto-mount support, we could defer controller initialization until we received a powerUp()
         * notification, at which point reset() would call initController(), or restore() would restore the controller;
         * in that case, all we'd need to do here is call setReady().
         */
        this.reset();

        this.fdc = cmp.getMachineComponent("FDC");
        if (this.fdc && this.fATAPI && this.bindings["listDisks"]) {
            for (let iDrive = 0; iDrive < this.aDrives.length; iDrive++) {
                let drive = this.aDrives[iDrive];
                if (!drive.type) this.fdc.addDrive(drive, this, this.bindings["listDisks"]);
            }
        }

        if (!this.autoMount()) this.setReady();
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {HDC}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) {
            if (!data) {
                this.initController();
                if (this.cmp.fReload) {
                    /**
                     * If the computer's fReload flag is set, we're required to toss all currently
                     * loaded disks and remount all disks specified in the auto-mount configuration.
                     */
                    this.autoMount(true);
                }
            } else {
                if (!this.restore(data)) return false;
            }
        }
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {HDC}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean}
     */
    powerDown(fSave, fShutdown)
    {
        return fSave? this.save() : true;
    }

    /**
     * getMachineID()
     *
     * @returns {string}
     */
    getMachineID()
    {
        return this.cmp? this.cmp.getMachineID() : "";
    }

    /**
     * getUserID()
     *
     * @returns {string}
     */
    getUserID()
    {
        return this.cmp? this.cmp.getUserID() : "";
    }

    /**
     * reset()
     *
     * @this {HDC}
     */
    reset()
    {
        /**
         * TODO: The controller is also initialized by the constructor, to assist with auto-mount support,
         * so think about whether we can skip powerUp initialization.
         */
        this.initController(null, true);
    }

    /**
     * save()
     *
     * This implements save support for the HDC component.
     *
     * @this {HDC}
     * @returns {Object}
     */
    save()
    {
        let state = new State(this);
        state.set(0, this.saveController());
        return state.data();
    }

    /**
     * restore(data)
     *
     * This implements restore support for the HDC component.
     *
     * @this {HDC}
     * @param {Object} data
     * @returns {boolean} true if successful, false if failure
     */
    restore(data)
    {
        return this.initController(data[0]);
    }

    /**
     * initController(data, fHard)
     *
     * @this {HDC}
     * @param {Array} [data]
     * @param {boolean} [fHard] true if a machine reset (not just a controller reset)
     * @returns {boolean} true if successful, false if failure
     */
    initController(data, fHard)
    {
        let i = 0;
        let fSuccess = true;

        /**
         * TODO: This is used to re-select the controller's active drive whenever the machine is restored, but alas,
         * we currently only update it and save it for the ATC, not the XTC.
         */
        this.iDrive = -1;

        /**
         * At this point, it's worth calling into question my decision to NOT split the HDC component into separate XTC
         * and ATC components, given all the differences, and given that I'm about to write some "if (ATC) else (XTC) ..."
         * code.  And all I can say in my defense is, yes, it's definitely worth calling that into question.
         *
         * However, there's also some common code, mostly in the area of disk management rather than controller management,
         * and if the components were split, then I'd have to create a third component for that common code (although again,
         * disk management probably belongs in its own component anyway).
         *
         * However, let's not forget that since my overall plan is to have only one PCx86 "binary", everything's going to end
         * up in the same bucket anyway, so let's not be too obsessive about organizational details.  As long as the number
         * of these conditionals is small and they're not performance-critical, this seems much ado about nothing.
         */
        if (this.fATC) {
            /**
             * Since there's no way (and never will be a way) for an HDC to change its "personality" (from 'xt' to 'at'
             * or vice versa), we're under no obligation to use the same number of registers, or save/restore format, etc,
             * as the original XT controller.
             */
            if (data == null) data = [0, 0, 0, 0, 0, 0, 0, HDC.ATC.STATUS.READY, 0, [0, -1]];
            this.regError   = data[i++];
            this.regWPreC   = data[i++];
            this.regSecCnt  = data[i++];
            this.regSecNum  = data[i++];
            this.regCylLo   = data[i++];
            this.regCylHi   = data[i++];
            this.regDrvHd   = data[i++];
            this.regStatus  = data[i++];
            this.regCommand = data[i++];
            this.regFDR     = data[i++];
            if (typeof this.regFDR == "object") {
                let a = this.regFDR;
                this.regFDR = a[0];
                this.iDrive = a[1];
            }
            /**
             * Additional state is maintained by the Drive object (e.g., buffer, iByte)
             */
        } else {
            if (data == null) data = [0, HDC.XTC.STATUS.NONE, new Array(14), 0, 0];
            this.regConfig    = data[i++];
            this.regStatus    = data[i++];
            this.regDataArray = data[i++];  // there can be up to 14 command bytes (6 for normal commands, plus 8 more for HDC.XTC.DATA.CMD.INIT_DRIVE)
            this.regDataIndex = data[i++];  // used to control the next data byte to be received
            this.regDataTotal = data[i++];  // used to control the next data byte to be sent (internally, we use regDataIndex to read data bytes, up to this total)
            this.regReset     = data[i++];
            this.regPulse     = data[i++];
            this.regPattern   = data[i++];
            /**
             * Initialize iDriveAllowFail only if it's never been initialized, otherwise its entire purpose will be defeated.
             * See the related HACK in intBIOSDisk() for more details.
             */
            let iDriveAllowFail = data[i++];
            if (iDriveAllowFail !== undefined) {
                this.iDriveAllowFail = iDriveAllowFail;
            } else {
                if (this.iDriveAllowFail === undefined) this.iDriveAllowFail = -1;
            }
        }

        if (this.aDrives === undefined) {
            this.aDrives = new Array(this.aDriveConfigs.length);
        }

        let dataDrives = data[i];
        if (dataDrives === undefined) dataDrives = [];

        for (let iDrive = 0; iDrive < this.aDrives.length; iDrive++) {
            if (this.aDrives[iDrive] === undefined) {
                this.aDrives[iDrive] = {};
            }
            let drive = this.aDrives[iDrive];
            let driveConfig = this.aDriveConfigs[iDrive];
            if (!this.initDrive(iDrive, drive, driveConfig, dataDrives[iDrive], fHard)) {
                fSuccess = false;
            }
            /**
             * XTC only: the original STC-506/412 controller had two pairs of DIP switches to indicate a drive
             * type (0, 1, 2 or 3) for drives 0 and 1.  Those switch settings are recorded in regConfig, now that
             * drive.type has been validated by initDrive().
             */
            if (this.regConfig != null && iDrive <= 1) {
                this.regConfig |= (drive.type & 0x3) << ((1 - iDrive) << 1);
            }
        }

        if (this.iDrive >= 0) {
            this.drive = this.aDrives[this.iDrive];
        }

        if (fHard) this.printf("HDC initialized for %d drive(s)\n", this.aDrives.length);
        return fSuccess;
    }

    /**
     * saveController()
     *
     * @this {HDC}
     * @returns {Array}
     */
    saveController()
    {
        let i = 0;
        let data = [];
        if (this.fATC) {
            data[i++] = this.regError;
            data[i++] = this.regWPreC;
            data[i++] = this.regSecCnt;
            data[i++] = this.regSecNum;
            data[i++] = this.regCylLo;
            data[i++] = this.regCylHi;
            data[i++] = this.regDrvHd;
            data[i++] = this.regStatus;
            data[i++] = this.regCommand;
            data[i++] = [this.regFDR, this.iDrive];
        } else {
            data[i++] = this.regConfig;
            data[i++] = this.regStatus;
            data[i++] = this.regDataArray;
            data[i++] = this.regDataIndex;
            data[i++] = this.regDataTotal;
            data[i++] = this.regReset;
            data[i++] = this.regPulse;
            data[i++] = this.regPattern;
            data[i++] = this.iDriveAllowFail;
        }
        data[i] = this.saveDrives();
        return data;
    }

    /**
     * initBuffer(drive, length)
     *
     * @this {HDC}
     * @param {Drive} drive
     * @param {number} [length]
     */
    initBuffer(drive, length=drive.nBytes)
    {
        if (!drive.buffer || drive.buffer.length < length) {
            drive.buffer = new Array(length);
        }
        drive.buffer.fill(0, 0, length);
        drive.iByte = 0;
    }

    /**
     * initDrive(iDrive, drive, driveConfig, data, fHard)
     *
     * TODO: Consider a separate Drive class that both FDC and HDC can use, since there's a lot of commonality
     * between the drive objects created by both controllers.  This will clean up overall drive management and allow
     * us to factor out some common Drive methods (e.g., advanceSector()).
     *
     * @this {HDC}
     * @param {number} iDrive
     * @param {Drive} drive
     * @param {DriveConfig} driveConfig
     * @param {Array} [data]
     * @param {boolean} [fHard] true if a machine reset (not just a controller reset)
     * @returns {boolean} true if successful, false if failure
     */
    initDrive(iDrive, drive, driveConfig, data, fHard)
    {
        let i = 0;
        let fSuccess = true;
        if (data === undefined) data = [HDC.XTC.DATA.ERR.NONE, 0, false, new Array(8)];

        drive.iDrive = iDrive;

        /**
         * errorCode could be an HDC global, but in order to insulate HDC state from the operation of various functions
         * that operate on drive objects (e.g., readData and writeData), I've made it a per-drive variable.  This choice
         * may be contrary to how the actual hardware works, but I prefer this approach, as long as it doesn't expose any
         * incompatibilities that any software actually cares about.
         */
        drive.errorCode = data[i++];
        drive.senseCode = data[i++];
        drive.fRemovable = data[i++];
        drive.abDriveParms = data[i++];         // captures drive parameters programmed via HDC.XTC.DATA.CMD.INIT_DRIVE

        /**
         * TODO: Make buffer a DWORD array rather than a BYTE array (we could even allocate a Memory block for it);
         * alternatively, eliminate the buffer entirely and re-establish a reference to the appropriate Disk sector object.
         */
        drive.buffer = data[i++];

        /**
         * The next group of properties are set by various HDC command sequences.
         */
        drive.bHead = data[i++];
        drive.nHeads = data[i++];
        drive.wCylinder = data[i++];
        drive.bSector = data[i++];
        drive.bSectorEnd = data[i++];           // aka EOT
        drive.nBytes = data[i++];
        drive.bSectorBias = (this.fATC? 0: 1);

        drive.name = driveConfig['name'];
        if (drive.name === undefined) drive.name = HDC.DEFAULT_DRIVE_NAME;
        drive.path = drive.sDiskPath = driveConfig['path'];

        /**
         * If no 'mode' is specified, we fall back to the original behavior, which is to completely preload
         * any specific disk image, or create an empty (purely local) disk image.
         */
        drive.mode = driveConfig['mode'] || (drive.path? DiskAPI.MODE.PRELOAD : DiskAPI.MODE.LOCAL);

        /**
         * On-demand I/O of raw disk images is supported only if there's a valid user ID; fall back to an empty
         * local disk image if there's not.
         */
        if (drive.mode == DiskAPI.MODE.DEMANDRO || drive.mode == DiskAPI.MODE.DEMANDRW) {
            if (!this.getUserID()) drive.mode = DiskAPI.MODE.LOCAL;
        }

        drive.type = driveConfig['type'];
        if (drive.type === undefined || DRIVE_TYPES[this.iDriveCtrl][drive.type] === undefined) drive.type = this.iDriveTypeDefault;

        let driveType = DRIVE_TYPES[this.iDriveCtrl][drive.type];
        drive.nSectors = driveType[2] || 17;                        // sectors/track
        drive.cbSector = drive.cbTransfer = driveType[3] || 512;    // bytes/sector (default is 512 if unspecified in the table)

        /**
         * On a full machine reset, pass the current drive type to setCMOSDriveType() (a no-op on pre-CMOS machines).
         */
        if (fHard && this.chipset) {
            this.chipset.setCMOSDriveType(this.nInterface*2+iDrive, drive.type);
        }

        /**
         * The next group of properties are set by user requests to load/unload disk images.
         *
         * We no longer reinitialize drive.disk, in order to retain previously mounted disk across resets.
         */
        if (drive.disk === undefined) {
            drive.disk = null;
            this.printf(MESSAGE.STATUS, "Type %d \"%s\" is fixed disk %d\n", drive.type, drive.name, iDrive);
        }

        /**
         * With the advent of save/restore, we need to verify every drive at initialization, not just whenever
         * drive characteristics are initialized.  Thus, if we've restored a sensible set of drive characteristics,
         * then verifyDrive will create an empty disk if none has been provided, insuring we are ready for
         * disk.restore().
         */
        this.verifyDrive(drive);

        /**
         * The next group of properties are managed by worker functions (e.g., doRead()) to maintain state across DMA requests.
         */
        drive.iByte = data[i++];                // location of the next byte to be accessed in the above sector
        drive.sector = null;                    // initialized to null by worker, and then set to the next sector satisfying the request
        drive.useBuffer = false;
        drive.chunksCached = [];
        drive.chunksMRU = [];

        if (drive.disk) {
            let deltas = data[i];
            if (deltas !== undefined && drive.disk.restore(deltas) < 0) {
                fSuccess = false;
            }
            if (fSuccess && drive.iByte !== undefined) {
                drive.sector = drive.disk.seek(drive.wCylinder, drive.bHead, drive.bSector + drive.bSectorBias);
            }
        }
        return fSuccess;
    }

    /**
     * saveDrives()
     *
     * @this {HDC}
     * @returns {Array}
     */
    saveDrives()
    {
        let i = 0;
        let data = [];
        for (let iDrive = 0; iDrive < this.aDrives.length; iDrive++) {
            data[i++] = this.saveDrive(this.aDrives[iDrive]);
        }
        return data;
    }

    /**
     * saveDrive(drive)
     *
     * @this {HDC}
     * @returns {Array}
     */
    saveDrive(drive)
    {
        let i = 0;
        let data = [];
        data[i++] = drive.errorCode;
        data[i++] = drive.senseCode;
        data[i++] = drive.fRemovable;
        data[i++] = drive.abDriveParms;
        data[i++] = drive.buffer;
        data[i++] = drive.bHead;
        data[i++] = drive.nHeads;
        data[i++] = drive.wCylinder;
        data[i++] = drive.bSector;
        data[i++] = drive.bSectorEnd;
        data[i++] = drive.nBytes;
        data[i++] = drive.iByte;
        data[i] = drive.disk? drive.disk.save() : null;
        return data;
    }

    /**
     * copyDrive(iDrive)
     *
     * @this {HDC}
     * @param {number} iDrive
     * @returns {Object|undefined} (undefined if the requested drive does not exist)
     */
    copyDrive(iDrive)
    {
        let driveNew;
        let driveOld = this.aDrives[iDrive];
        if (driveOld !== undefined) {
            driveNew = {};
            for (let p in driveOld) {
                driveNew[p] = driveOld[p];
            }
        }
        return driveNew;
    }

    /**
     * verifyDrive(drive, type)
     *
     * If no disk image is attached, create an empty disk with the specified drive characteristics.
     * Normally, we'd rely on the drive characteristics programmed via the HDC.XTC.DATA.CMD.INIT_DRIVE
     * command, but if an explicit drive type is specified, then we use the characteristics (geometry)
     * associated with that type.
     *
     * @this {HDC}
     * @param {Drive} drive
     * @param {number} [type] to create a disk of the specified type, if no disk exists yet
     */
    verifyDrive(drive, type)
    {
        if (drive) {
            let nHeads = 0, nCylinders = 0;
            if (type == null) {
                /**
                 * If the caller wants us to use the programmed drive parameters, we use those,
                 * but if there aren't any drive parameters (yet), then use default parameters based
                 * on drive.type.
                 *
                 * We used to do the last step ONLY if there was no drive.path -- otherwise, we'd waste
                 * time creating an empty disk if autoMount() was going to load an image from drive.path;
                 * but hopefully the Disk component is smarter now.
                 */
                nHeads = drive.abDriveParms[2];
                if (nHeads) {
                    nCylinders = (drive.abDriveParms[0] << 8) | drive.abDriveParms[1];
                } else {
                    type = drive.type;
                }
            }
            if (type != null && !nHeads) {
                nHeads = DRIVE_TYPES[this.iDriveCtrl][type][1];
                nCylinders = DRIVE_TYPES[this.iDriveCtrl][type][0];
            }
            if (nHeads) {
                /**
                 * The assumption here is that if the 3rd drive parameter byte (abDriveParms[2]) has been set
                 * (ie, if nHeads is valid) then the first two bytes (ie, the low and high cylinder byte values)
                 * must have been set as well.
                 *
                 * Do these values agree with those for the given drive type?  Even if they don't, all we do is warn.
                 */
                let driveType = DRIVE_TYPES[this.iDriveCtrl][drive.type];
                if (driveType) {
                    if (nCylinders != driveType[0] && nHeads != driveType[1]) {
                        this.printf(MESSAGE.NOTICE, "Warning: drive parameters (%d,%d) do not match drive type %d (%d,%d)\n", nCylinders, nHeads, drive.type, driveType[0], driveType[1]);
                    }
                }
                if (!drive.nCylinders || this.sType.indexOf("PCJS") < 0) {
                    drive.nCylinders = nCylinders;
                    drive.nHeads = nHeads;
                }
                if (drive.disk == null) {
                    drive.disk = new Disk(this, drive, drive.mode);
                }
            }
        }
    }

    /**
     * seekDrive(drive, iSector, nSectors)
     *
     * The HDC doesn't need this function, since all HDC requests from the CPU are handled by doXTCmd().  This function
     * is used by other components (e.g., Debugger) to mimic an HDC request, using a drive object obtained from copyDrive(),
     * to avoid disturbing the internal state of the HDC's drive objects.
     *
     * Also note that in an actual HDC request, drive.nBytes is initialized to the size of a single sector; the extent
     * of the entire transfer is actually determined by a count that has been pre-loaded into the DMA controller.  The HDC
     * isn't aware of the extent of the transfer, so in the case of a read request, all readData() can do is return bytes
     * until the current track (or, in the case of a multi-track request, the current cylinder) has been exhausted.
     *
     * Since seekDrive() is for use with non-DMA requests, we use nBytes to specify the length of the entire transfer.
     *
     * @this {HDC}
     * @param {Drive} drive
     * @param {number} iSector (a "logical" sector number, relative to the entire disk, NOT a physical sector number)
     * @param {number} nSectors
     * @returns {boolean} true if successful, false if invalid position request
     */
    seekDrive(drive, iSector, nSectors)
    {
        if (drive.disk) {
            let aDiskInfo = drive.disk.info();
            let nCylinders = aDiskInfo[0];
            /**
             * If nCylinders is zero, we probably have an empty disk image, awaiting initialization (see verifyDrive())
             */
            if (nCylinders) {
                let nHeads = aDiskInfo[1];
                let nSectorsPerTrack = aDiskInfo[2];
                let nSectorsPerCylinder = nHeads * nSectorsPerTrack;
                let nSectorsPerDisk = nCylinders * nSectorsPerCylinder;
                if (iSector + nSectors <= nSectorsPerDisk) {
                    drive.wCylinder = Math.floor(iSector / nSectorsPerCylinder);
                    iSector %= nSectorsPerCylinder;
                    drive.bHead = Math.floor(iSector / nSectorsPerTrack);
                    /**
                     * Important difference between the FDC and the XTC: the XTC uses 0-based sector numbers, so unlike
                     * FDC.seekDrive(), we must NOT add 1 to bSector below.  I could change how sector numbers are stored in
                     * hard drive images, but it seems preferable to keep the image format consistent and controller-independent.
                     */
                    drive.bSector = (iSector % nSectorsPerTrack);
                    drive.nBytes = nSectors * aDiskInfo[3];
                    /**
                     * NOTE: We don't set nSectorEnd, as an HDC command would, but it's irrelevant, because we don't actually
                     * do anything with nSectorEnd at this point.  Perhaps someday, when we faithfully honor/restrict requests
                     * to a single track (or a single cylinder, in the case of multi-track requests).
                     */
                    drive.errorCode = HDC.XTC.DATA.ERR.NONE;
                    /**
                     * At this point, we've finished simulating what an HDC.XTC.DATA.CMD.READ_DATA command would have performed,
                     * up through doRead().  Now it's the caller responsibility to call readData(), like the DMA Controller would.
                     */
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * autoMount(fRemount)
     *
     * @this {HDC}
     * @param {boolean} [fRemount] is true if we're remounting all auto-mounted disks
     * @returns {boolean} true if one or more disk images are being auto-mounted, false if none
     */
    autoMount(fRemount)
    {
        if (!fRemount) this.cAutoMount = 0;
        for (let iDrive = 0; iDrive < this.aDrives.length; iDrive++) {
            let drive = this.aDrives[iDrive];
            if (drive.name && drive.sDiskPath) {
                if (fRemount && drive.disk && drive.disk.isRemote() || this.fATAPI) {
                    /**
                     * The Disk component has its own logic for remounting remote disks, so skip this disk.
                     *
                     * TODO: Consider rewriting how ALL disks are automounted/remounted, now that the Disk component
                     * is receiving its own powerDown() and powerUp() notifications (originally, it didn't receive them).
                     */
                    continue;
                }
                if (!this.loadDisk(iDrive, drive.name, drive.sDiskPath, true) && fRemount) {
                    this.setReady(false);
                }
                continue;
            }
            if (fRemount && drive.type !== undefined) {
                drive.disk = null;
                this.verifyDrive(drive, drive.type);
            }
        }
        return !!this.cAutoMount;
    }

    /**
     * loadDisk(iDrive, sDiskName, sDiskPath, fAutoMount)
     *
     * @this {HDC}
     * @param {number} iDrive
     * @param {string} sDiskName
     * @param {string} sDiskPath
     * @param {boolean} fAutoMount
     * @returns {boolean} true if disk (already) loaded, false if queued up (or busy)
     */
    loadDisk(iDrive, sDiskName, sDiskPath, fAutoMount)
    {
        let drive = this.aDrives[iDrive];
        if (drive.fBusy) {
            this.printf(MESSAGE.NOTICE, "Drive %d busy\n", iDrive);
            return true;
        }
        drive.fBusy = true;
        if (fAutoMount) {
            drive.fAutoMount = true;
            this.cAutoMount++;
            this.printf("loading \"%s\"\n", sDiskName);
        }
        let disk = drive.disk || new Disk(this, drive, drive.mode);
        sDiskPath = WebLib.redirectResource(sDiskPath);
        disk.load(sDiskName, sDiskPath, null, this.doneLoadDisk);
        return false;
    }

    /**
     * loadSelectedDisk(iDrive, controlDisks)
     *
     * @this {HDC}
     * @param {number} iDrive
     * @param {HTMLSelectElement} controlDisks
     */
    loadSelectedDisk(iDrive, controlDisks)
    {
        let drive = this.aDrives[iDrive];
        drive.sDiskPath = controlDisks.options[controlDisks.selectedIndex].value;
        drive.chunksCached = [];
        drive.chunksMRU = [];
    }

    /**
     * doneLoadDisk(drive, disk, sDiskName, sDiskPath)
     *
     * This is a callback issued by the Disk component once the load() operation has finished.
     *
     * @this {HDC}
     * @param {Drive} drive
     * @param {Disk} disk is set if the disk was successfully mounted, null if not
     * @param {string} sDiskName
     * @param {string} sDiskPath
     */
    doneLoadDisk(drive, disk, sDiskName, sDiskPath)
    {
        drive.fBusy = false;
        if ((drive.disk = disk)) {
            /**
             * With the addition of notice(), users are now "alerted" whenever a diskette has finished loading;
             * notice() is selective about its output, using print() if a print window is open, otherwise alert().
             *
             * WARNING: This conversion of drive number to drive letter, starting with "C:" (0x43), is very simplistic
             * and is not guaranteed to match the drive mapping that DOS ultimately uses.
             */
            this.printf(drive.fAutoMount? MESSAGE.STATUS : MESSAGE.NOTICE, "Mounted disk \"%s\" in drive %s\n", sDiskName, String.fromCharCode(0x43 + drive.iDrive));

            let aDiskInfo = disk.info();
            if (aDiskInfo[0] != drive.nCylinders || aDiskInfo[1] != drive.nHeads || aDiskInfo[2] != drive.nSectors || aDiskInfo[3] != drive.cbSector) {
                /**
                 * TODO: Decide how to deal with this problem; ie, either disallow disk access altogether, or automatically
                 * map the controller's I/O requests to the disk's geometry.  Also, we should provide a way to reformat such a
                 * disk so that its geometry matches the controller requirements.
                 */
                if (this.sType.indexOf("PCJS") == 0) {          // if pc.js custom-built this disk...
                    drive.nCylinders = aDiskInfo[0];
                    drive.nHeads = aDiskInfo[1];
                    drive.nSectors = aDiskInfo[2];
                    drive.cbSector = aDiskInfo[3];
                } else {
                    this.printf(MESSAGE.NOTICE, "Warning: disk geometry (%d:%d:%d) does not match %s drive type %d (%d:%d:%d)\n", aDiskInfo[0], aDiskInfo[1], aDiskInfo[2], DRIVE_CTRLS[this.iDriveCtrl], drive.type, drive.nCylinders, drive.nHeads, drive.nSectors);
                }
            }
        }
        if (drive.fAutoMount) {
            drive.fAutoMount = false;
            if (!--this.cAutoMount) this.setReady();
        }
    }

    /**
     * intXTCData(port, addrFrom)
     *
     * @this {HDC}
     * @param {number} port (0x320)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number} simulated port value
     */
    inXTCData(port, addrFrom)
    {
        let bIn = 0;
        if (this.regDataIndex < this.regDataTotal) {
            bIn = this.regDataArray[this.regDataIndex];
        }
        if (this.chipset) this.chipset.clearIRR(ChipSet.IRQ.XTC);
        this.regStatus &= ~HDC.XTC.STATUS.INTERRUPT;

        this.printIO(port, undefined, addrFrom, "DATA[" + this.regDataIndex + "]", bIn);
        if (++this.regDataIndex >= this.regDataTotal) {
            this.regDataIndex = this.regDataTotal = 0;
            this.regStatus &= ~(HDC.XTC.STATUS.IOMODE | HDC.XTC.STATUS.BUS | HDC.XTC.STATUS.BUSY);
        }
        return bIn;
    }

    /**
     * outXTCData(port, bOut, addrFrom)
     *
     * @this {HDC}
     * @param {number} port (0x320)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to write the specified port)
     */
    outXTCData(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "DATA[" + this.regDataTotal + "]");
        if (this.regDataTotal < this.regDataArray.length) {
            this.regDataArray[this.regDataTotal++] = bOut;
        }
        let bCmd = this.regDataArray[0];
        let cbCmd = (bCmd != HDC.XTC.DATA.CMD.INIT_DRIVE? 6 : this.regDataArray.length);
        if (this.regDataTotal == 6) {
            /**
             * XTC.STATUS.REQ must be CLEAR following any 6-byte command sequence that the HDC BIOS "COMMAND" function outputs,
             * yet it must also be SET before the HDC BIOS will proceed with the remaining the 8-byte sequence that's part of
             * HDC.XTC.DATA.CMD.INIT_DRIVE command. See inXTCStatus() for HACK details.
             */
            this.regStatus &= ~HDC.XTC.STATUS.REQ;
        }
        if (this.regDataTotal >= cbCmd) {
            /**
             * It's essential that XTC.STATUS.IOMODE be set here, at least after the final 8-byte HDC.XTC.DATA.CMD.INIT_DRIVE sequence.
             */
            this.regStatus |= HDC.XTC.STATUS.IOMODE;
            this.regStatus &= ~HDC.XTC.STATUS.REQ;
            this.doXTC();
        }
    }

    /**
     * inXTCStatus(port, addrFrom)
     *
     * @this {HDC}
     * @param {number} port (0x321)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number} simulated port value
     */
    inXTCStatus(port, addrFrom)
    {
        let b = this.regStatus;
        this.printIO(port, undefined, addrFrom, "STATUS", b);
        /**
         * HACK: The HDC BIOS will not finish the HDC.XTC.DATA.CMD.INIT_DRIVE sequence unless it sees XTC.STATUS.REQ set again, nor will
         * it read any of the XTC.DATA bytes returned from a HDC.XTC.DATA.CMD.REQ_SENSE command unless XTC.STATUS.REQ is set again, so
         * we turn it back on if there are unprocessed data bytes.
         */
        if (this.regDataIndex < this.regDataTotal) {
            this.regStatus |= HDC.XTC.STATUS.REQ;
        }
        return b;
    }

    /**
     * outXTCReset(port, bOut, addrFrom)
     *
     * @this {HDC}
     * @param {number} port (0x321)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to write the specified port)
     */
    outXTCReset(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "RESET");
        /**
         * Not sure what to do with this value, and the value itself may be "don't care", but we'll save it anyway.
         */
        this.regReset = bOut;
        if (this.chipset) this.chipset.clearIRR(ChipSet.IRQ.XTC);
        this.initController();
    }

    /**
     * inXTCConfig(port, addrFrom)
     *
     * @this {HDC}
     * @param {number} port (0x322)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number} simulated port value
     */
    inXTCConfig(port, addrFrom)
    {
        this.printIO(port, undefined, addrFrom, "CONFIG", this.regConfig);
        return this.regConfig;
    }

    /**
     * outXTCPulse(port, bOut, addrFrom)
     *
     * @this {HDC}
     * @param {number} port (0x322)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to write the specified port)
     */
    outXTCPulse(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "PULSE");
        /**
         * Not sure what to do with this value, and the value itself may be "don't care", but we'll save it anyway.
         */
        this.regPulse = bOut;
        /**
         * The HDC BIOS "COMMAND" function (@C800:0562) waits for these ALL status bits after writing to both regPulse
         * and regPattern, so we must oblige it.
         *
         * TODO: Figure out exactly when either XTC.STATUS.BUS or XTC.STATUS.BUSY are supposed to be cleared.
         * The HDC BIOS doesn't care much about them, except for the one location mentioned above. However, MS-DOS 4.0
         * (aka the unreleased "multitasking" version of MS-DOS) cares, so I'm going to start by clearing them at the
         * same point I clear XTC.STATUS.IOMODE.
         */
        this.regStatus = HDC.XTC.STATUS.REQ | HDC.XTC.STATUS.BUS | HDC.XTC.STATUS.BUSY;
    }

    /**
     * outXTCPattern(port, bOut, addrFrom)
     *
     * @this {HDC}
     * @param {number} port (0x323)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to write the specified port)
     */
    outXTCPattern(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "PATTERN");
        this.regPattern = bOut;
    }

    /**
     * outXTCNoise(port, bOut, addrFrom)
     *
     * @this {HDC}
     * @param {number} port (0x327, 0x32B or 0x32F)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to write the specified port)
     */
    outXTCNoise(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "NOISE");
    }

    /**
     * inATCByte(port, addrFrom)
     *
     * @this {HDC}
     * @param {number} port (0x1F0)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number} simulated port value
     */
    inATCByte(port, addrFrom)
    {
        let bIn = -1;
        let drive = this.drive;

        if (drive) {
            /**
             * We use the synchronous form of readData() at this point because we have no choice; an I/O instruction
             * has just occurred and cannot be delayed.  The good news is that doATC() should have already primed
             * the pump; all we can do is assert that the pump has something in it.  If bIn is inexplicably negative,
             * well, then the caller will get 0xff.
             */
            let hdc = this;
            bIn = this.readData(drive, function onATCReadData(b, fAsync, obj, off) {
                hdc.assert(!fAsync);
                if (BACKTRACK && obj) {
                    if (!off && obj.file) {
                        hdc.printf(MESSAGE.DISK + MESSAGE.PORT + MESSAGE.ADDR, "loading %s[%d] via port %#06x\n", obj.file.path, obj.offFile, port);
                    }
                    /**
                     * TODO: We could define a cached BTO that's reset prior to a new ATC command, and then pass that
                     * to addBackTrackObject() here instead of null; but for now, we're going to rely on that function's
                     * simplistic MRU logic.  If that fails, the worst that will (or should) happen is we'll burn through
                     * more BackTrack wrapper objects than necessary, and risk running out.
                     */
                    let bto = hdc.bus.addBackTrackObject(obj, /** @type BackTrack */ (null), off);
                    hdc.cpu.backTrack.btiIO = hdc.bus.getBackTrackIndex(bto, off);
                }
            });
            this.assert(bIn >= 0);

            if (drive.iByte == 1 || drive.iByte == drive.cbTransfer) {
                /**
                 * printIO() calls, if enabled, can be overwhelming for this port, so limit them to the first
                 * and last bytes of each sector.
                 */
                if (this.messageEnabled(MESSAGE.PORT + MESSAGE.HDC)) {
                    this.printIO(port, undefined, addrFrom, "DATA[" + drive.iByte + "]", bIn);
                }
                if (drive.iByte > 1) {          // in other words, if drive.iByte == drive.cbTransfer...
                    if (this.messageEnabled(MESSAGE.DATA + MESSAGE.HDC)) {
                        let sDump = drive.disk.dumpSector(drive.sector);
                        if (sDump) this.print(sDump);
                    }
                    /**
                     * Now that we've supplied a full sector of data, see if the caller's expecting additional sectors;
                     * if so, prime the pump again.  The caller should not poll us again until another interrupt's delivered.
                     */
                    drive.nBytes -= drive.cbTransfer;
                    this.regSecCnt = (this.regSecCnt - 1) & 0xff;
                    /**
                     * TODO: If the WITH_ECC bit is set in the READ_DATA command, then we need to support "stuffing" 4
                     * additional bytes into the inATCByte() stream.  And we must first set DATA_REQ in the STATUS register.
                     */
                    if (drive.nBytes >= drive.cbTransfer) {
                        /**
                         * FYI, with regard to regStatus, I'm simply aping what the ATC.COMMAND.READ_DATA setup code does
                         * for the first sector, which may not strictly be necessary for subsequent sectors....
                         */
                        hdc.regStatus = HDC.ATC.STATUS.BUSY;
                        this.readData(drive, function onATCReadDataNext(b, fAsync) {
                            if (b >= 0) {
                                hdc.setATCIRR();
                                /**
                                 * Due to the way I'm immediately triggering an interrupt whenever more data is available,
                                 * I must take a "shotgun approach' to regStatus bits in order to make the MODEL_5170_REV1,
                                 * MODEL_5170_REV3, and MODEL_COMPAQ_DESKPRO386 all happy.
                                 *
                                 * In general, it's fine for all of STATUS.READY, STATUS.SEEK_OK and STATUS.DATA_REQ to be
                                 * set now; the MODEL_5170_REV3 requires at least the first two, and the MODEL_COMPAQ_DESKPRO386
                                 * requires the third.  Unfortunately, the outlier is the MODEL_5170_REV1, which also needs
                                 * the STATUS.BUSY to be set on the first regStatus read after it finishes reading a sector;
                                 * otherwise, the MODEL_5170_REV1 BIOS will never read any remaining sectors.
                                 *
                                 * Technically, it doesn't make sense for both BUSY and READY to be set at the same time,
                                 * so we fix that in inATCStatus() by clearing BUSY whenever READY is detected *after* that
                                 * first read.  In addition, since this hack is really only needed for the MODEL_5170_REV1,
                                 * we clear BUSY immediately on the MODEL_COMPAQ_DESKPRO386 (which makes the Windows 95
                                 * protected-mode disk driver much happier).
                                 */
                                if (hdc.chipset && hdc.chipset.model == ChipSet.MODEL_COMPAQ_DESKPRO386) hdc.regStatus = 0;
                                hdc.regStatus |= HDC.ATC.STATUS.READY | HDC.ATC.STATUS.SEEK_OK | HDC.ATC.STATUS.DATA_REQ;
                            } else {
                                /**
                                 * TODO: It would be nice to be a bit more specific about the error (if any) that just occurred.
                                 * Consult drive.errorCode (it uses older XTC error codes, but mapping those codes should be trivial).
                                 */
                                hdc.regStatus = HDC.ATC.STATUS.ERROR;
                                hdc.regError = HDC.ATC.ERROR.NO_CHS;
                                if (DEBUG) hdc.printf("%s.inATCByte(): read failed\n", this.idComponent);
                            }
                        }, false);
                    } else {
                        this.assert(!drive.nBytes);
                        this.regStatus = HDC.ATC.STATUS.READY;
                        if (!drive.useBuffer) {
                            this.regStatus |= HDC.ATC.STATUS.SEEK_OK;   // TODO: Necessary?
                        } else {
                            this.regSecCnt = HDC.ATC.SECCNT.PACKET_IO | HDC.ATC.SECCNT.PACKET_CD;
                            this.setATCIRR();
                        }
                    }
                }
            }
        }
        return bIn;
    }

    /**
     * inATCData(port, addrFrom)
     *
     * Wrapper around inATCByte() to treat this as a 16-bit port; see addPortInputWidth(HDC.ATC.DATA.PORT1, 2).
     *
     * @this {HDC}
     * @param {number} port (0x1F0,0x170)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number} simulated port data
     */
    inATCData(port, addrFrom)
    {
        return this.inATCByte(port, addrFrom) | (this.inATCByte(port, addrFrom) << 8);
    }

    /**
     * outATCByte(port, bOut, addrFrom)
     *
     * @this {HDC}
     * @param {number} port (0x1F0,0x170)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to write the specified port)
     */
    outATCByte(port, bOut, addrFrom)
    {
        let drive = this.drive;
        if (drive) {
            if (drive.nBytes >= drive.cbTransfer) {
                if (this.writeData(drive, bOut) < 0) {
                    /**
                     * TODO: It would be nice to be a bit more specific about the error (if any) that just occurred.
                     * Consult drive.errorCode (it uses older XTC error codes, but mapping those codes should be trivial).
                     */
                    this.regStatus = HDC.ATC.STATUS.ERROR;
                    this.regError = HDC.ATC.ERROR.NO_CHS;
                    if (DEBUG) {
                        this.printf("%s.outATCByte(%#04x): write failed\n", this.idComponent, bOut);
                    }
                }
                else if (drive.iByte == 1 || drive.iByte == drive.cbTransfer) {
                    /**
                     * printIO() calls, if enabled, can be overwhelming for this port, so limit them to the first
                     * and last bytes of each sector.
                     */
                    if (this.messageEnabled(MESSAGE.PORT + MESSAGE.HDC)) {
                        this.printIO(port, bOut, addrFrom, "DATA[" + drive.iByte + "]");
                    }
                    if (drive.iByte > 1) {          // in other words, if drive.iByte == drive.cbTransfer...
                        if (this.messageEnabled(MESSAGE.DATA + MESSAGE.HDC)) {
                            let sDump = drive.disk.dumpSector(drive.sector);
                            if (sDump) this.print(sDump);
                        }
                        drive.nBytes -= drive.cbTransfer;
                        this.regSecCnt = (this.regSecCnt - 1) & 0xff;
                        this.regStatus = HDC.ATC.STATUS.READY | HDC.ATC.STATUS.SEEK_OK;
                        if (drive.nBytes >= drive.cbTransfer) {
                            this.regStatus |= HDC.ATC.STATUS.DATA_REQ;
                        } else {
                            this.assert(!drive.nBytes);
                            if (drive.useBuffer) {
                                this.processPacket(drive);
                                return;
                            }
                        }
                        this.setATCIRR(true);
                    }
                }
            } else {
                /**
                 * TODO: What to do about unexpected writes? The number of bytes has exceeded what the command specified.
                 */
                if (DEBUG) {
                    this.printf("%s.outATCByte(%#04x): write exceeds count (%d)\n", this.idComponent, bOut, this.drive.nBytes);
                }
            }
        } else {
            /**
             * TODO: What to do about unexpected writes? No command was specified.
             */
            if (DEBUG) {
                this.printf("%s.outATCByte(%#04x): write without command\n", this.idComponent, bOut);
            }
        }
    }

    /**
     * outATCData(port, data, addrFrom)
     *
     * Wrapper around outATCByte() to treat this as a 16-bit port; see addPortOutputWidth(HDC.ATC.DATA.PORT1, 2)
     *
     * @this {HDC}
     * @param {number} port (0x1F0,0x170)
     * @param {number} data
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to write the specified port)
     */
    outATCData(port, data, addrFrom)
    {
        this.outATCByte(port, data & 0xff, addrFrom);
        this.outATCByte(port, (data >> 8) & 0xff, addrFrom);
    }

    /**
     * inATCError(port, addrFrom)
     *
     * @this {HDC}
     * @param {number} port (0x1F1,0x171)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number} simulated port value
     */
    inATCError(port, addrFrom)
    {
        let bIn = this.regError;
        this.printIO(port, undefined, addrFrom, "ERROR", bIn);
        return bIn;
    }

    /**
     * outATCWPreC(port, bOut, addrFrom)
     *
     * @this {HDC}
     * @param {number} port (0x1F1,0x171)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to write the specified port)
     */
    outATCWPreC(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "WPREC");
        this.regWPreC = bOut;
    }

    /**
     * inATCSecCnt(port, addrFrom)
     *
     * @this {HDC}
     * @param {number} port (0x1F2,0x172)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number} simulated port value
     */
    inATCSecCnt(port, addrFrom)
    {
        let bIn = this.regSecCnt;
        this.printIO(port, undefined, addrFrom, "SECCNT", bIn);
        return bIn;
    }

    /**
     * outATCSecCnt(port, bOut, addrFrom)
     *
     * @this {HDC}
     * @param {number} port (0x1F2,0x172)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to write the specified port)
     */
    outATCSecCnt(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "SECCNT");
        this.regSecCnt = bOut;
    }

    /**
     * inATCSecNum(port, addrFrom)
     *
     * @this {HDC}
     * @param {number} port (0x1F3,0x173)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number} simulated port value
     */
    inATCSecNum(port, addrFrom)
    {
        let bIn = this.regSecNum;
        this.printIO(port, undefined, addrFrom, "SECNUM", bIn);
        return bIn;
    }

    /**
     * outATCSecNum(port, bOut, addrFrom)
     *
     * @this {HDC}
     * @param {number} port (0x1F3,0x173)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to write the specified port)
     */
    outATCSecNum(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "SECNUM");
        this.regSecNum = bOut;
    }

    /**
     * inATCCylLo(port, addrFrom)
     *
     * @this {HDC}
     * @param {number} port (0x1F4,0x174)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number} simulated port value
     */
    inATCCylLo(port, addrFrom)
    {
        let bIn = this.regCylLo;
        this.printIO(port, undefined, addrFrom, "CYLLO", bIn);
        return bIn;
    }

    /**
     * outATCCylLo(port, bOut, addrFrom)
     *
     * @this {HDC}
     * @param {number} port (0x1F4,0x174)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to write the specified port)
     */
    outATCCylLo(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "CYLLO");
        this.regCylLo = bOut;
    }

    /**
     * inATCCylHi(port, addrFrom)
     *
     * @this {HDC}
     * @param {number} port (0x1F5,0x175)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number} simulated port value
     */
    inATCCylHi(port, addrFrom)
    {
        let bIn = this.regCylHi;
        this.printIO(port, undefined, addrFrom, "CYLHI", bIn);
        return bIn;
    }

    /**
     * outATCCylHi(port, bOut, addrFrom)
     *
     * @this {HDC}
     * @param {number} port (0x1F5,0x175)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to write the specified port)
     */
    outATCCylHi(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "CYLHI");
        this.regCylHi = bOut;
    }

    /**
     * inATCDrvHd(port, addrFrom)
     *
     * @this {HDC}
     * @param {number} port (0x1F6,0x176)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number} simulated port value
     */
    inATCDrvHd(port, addrFrom)
    {
        let bIn = this.regDrvHd;
        this.printIO(port, undefined, addrFrom, "DRVHD", bIn);
        return bIn;
    }

    /**
     * outATCDrvHd(port, bOut, addrFrom)
     *
     * @this {HDC}
     * @param {number} port (0x1F6,0x176)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to write the specified port)
     */
    outATCDrvHd(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "DRVHD");
        this.regDrvHd = bOut;
        /**
         * The MODEL_5170_REV3 BIOS (see "POST2_CHK_HF2" @F000:14FC) probes for a 2nd hard drive when the number
         * of configured hard drives is something other than 2, using INT 0x13/AH=0x10.  This in turn calls the
         * BIOS "TST_RDY" function, which selects the drive in this register (see DRIVE_MASK), and then immediately
         * expects regStatus to reflect success or failure.
         *
         * We were always returning success, because no ATC command was actually issued, and so the user would
         * always get a spurious CMOS configuration error: "System Options Not Set-(Run SETUP)".
         *
         * So now we update regStatus here.  I'm not sure which status bits are normally set to indicate failure,
         * but it should be sufficient to set or clear the READY bit according to whether the drive exists or not.
         *
         * TODO: Dig into the ATC documentation some more, and determine what other situations, if any, regStatus
         * needs to be updated.
         *
         * UPDATE: The COMPAQ DeskPro 386 ROM BIOS requires setting STATUS.SEEK_OK in addition to STATUS.READY;
         * a quick retest of the MODEL_5170_REV3 BIOS suggests that it's happy with that change, so it's quite likely
         * that was the appropriate change all along.
         */
        let iDrive = (this.regDrvHd & HDC.ATC.DRVHD.DRIVE_MASK? 1 : 0);
        if (this.aDrives[iDrive]) {
            this.regStatus |= HDC.ATC.STATUS.READY | HDC.ATC.STATUS.SEEK_OK;
        } else {
            this.regStatus &= ~HDC.ATC.STATUS.READY;
        }
    }

    /**
     * inATCStatus(port, addrFrom)
     *
     * @this {HDC}
     * @param {number} port (0x1F7,0x177)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number} simulated port value
     */
    inATCStatus(port, addrFrom)
    {
        let bIn = this.regStatus;
        this.printIO(port, undefined, addrFrom, "STATUS", bIn);
        /**
         * Despite what IBM's documentation for the "Personal Computer AT Fixed Disk and Diskette Drive Adapter"
         * (August 31, 1984) says (ie, "A read of the status register clears interrupt request 14"), we cannot
         * unilaterally clear the IRQ on any read of STATUS.  For starters, that would completely break the PC AT
         * ROM BIOS; here's what it does for multi-sector reads:
         *
         *      (1) read sector (REP INSW)
         *      (2) check STATUS
         *      (3) check sector count, exit if done
         *      (4) wait for interrupt
         *      (5) repeat
         *
         * Since we set the IRR immediately after (1), we cannot immediately clear the IRR at (2), otherwise the
         * interrupt at (4) never happens.  So, maybe there are SOME situations where IRR should be cleared on
         * a read, but I don't know what they are.
         *
         *      if (this.chipset) this.chipset.clearIRR(ChipSet.IRQ.ATC1 + this.nInterface);
         */
        if (this.regStatus & HDC.ATC.STATUS.READY) this.regStatus &= ~HDC.ATC.STATUS.BUSY;
        return bIn;
    }

    /**
     * outATCCommand(port, bOut, addrFrom)
     *
     * @this {HDC}
     * @param {number} port (0x1F7,0x177)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to write the specified port)
     */
    outATCCommand(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "COMMAND");
        this.regCommand = bOut;
        if (this.chipset) this.chipset.clearIRR(ChipSet.IRQ.ATC1 + this.nInterface);
        this.doATC();
    }

    /**
     * outATCFDR(port, bOut, addrFrom)
     *
     * This is referred to in IBM's docs as the "Fixed Disk Register" (write-only); aka "Device Control Register".
     *
     * @this {HDC}
     * @param {number} port (0x3F6,0x376)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to write the specified port)
     */
    outATCFDR(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "FDR");
        /**
         * I'm not really sure if I should set HDC.ATC.DIAG.NO_ERROR in regError after *every* write where
         * HDC.ATC.FDR.RESET is clear, or only after it has transitioned from set to clear; since the BIOS only
         * requires the latter, I'm going to be conservative and restrict regError updates to the latter.
         */
        if ((this.regFDR & HDC.ATC.FDR.RESET) && !(bOut & HDC.ATC.FDR.RESET)) this.regError = HDC.ATC.DIAG.NO_ERROR;
        this.regFDR = bOut;
    }

    /**
     * doATC()
     *
     * Handles ATC (AT Controller) commands.  Initially, just PC AT (ATA) commands were supported,
     * but in order to work with CD-ROM devices, selected (ATA-1 and ATAPI) commands have been added.
     * However, the configuration must request that support; eg:
     *
     *      	<hdc id="cdrom" type="ATAPI" drives='[{name:"CD-ROM Drive"}]'/>
     *
     * in order to set the fATAPI property and enable that support.
     *
     * @this {HDC}
     */
    doATC()
    {
        let hdc = this;
        let fInterrupt = false, fProcessed = false;

        let bCmd = this.regCommand;
        let bCmdMasked = bCmd & ~HDC.ATC.COMMAND.STEP_RATE;
        if (bCmdMasked == HDC.ATC.COMMAND.RESTORE || bCmdMasked == HDC.ATC.COMMAND.SEEK) {
            bCmd = bCmdMasked;
        } else if (bCmdMasked == HDC.ATC.COMMAND.READ_DATA || bCmdMasked == HDC.ATC.COMMAND.WRITE_DATA) {
            bCmd &= ~(HDC.ATC.COMMAND.NO_RETRY | HDC.ATC.COMMAND.WITH_ECC);
        } else if (bCmdMasked == HDC.ATC.COMMAND.READ_VERF) {
            bCmd &= ~(HDC.ATC.COMMAND.NO_RETRY);
        }

        let iDrive = (this.regDrvHd & HDC.ATC.DRVHD.DRIVE_MASK? 1 : 0);
        let nHead = this.regDrvHd & HDC.ATC.DRVHD.HEAD_MASK;
        let nCylinder = this.regCylLo | ((this.regCylHi & HDC.ATC.CYLHI.MASK) << 8);
        let nSector = this.regSecNum;
        let nSectors = this.regSecCnt || 256;

        this.iDrive = -1;
        this.drive = null;
        this.regError = HDC.ATC.ERROR.NONE;
        this.regStatus = HDC.ATC.STATUS.READY | HDC.ATC.STATUS.SEEK_OK;
        let drive = this.aDrives[iDrive];

        this.printf(MESSAGE.HDC + MESSAGE.PORT + MESSAGE.ADDR, "%s.doATC(%d,%#04x): %s%s\n", this.idComponent, (this.nInterface*2+iDrive), bCmd, HDC.aATACommands[bCmd], (drive? "" : " (drive " + iDrive + " not present)"));

        if (!drive) return;
        this.iDrive = iDrive;
        this.drive = drive;

        /**
         * Update the Drive object with the new positional information associated with this command.
         */
        drive.wCylinder = nCylinder;
        drive.bHead = nHead;
        drive.bSector = nSector;
        drive.nBytes = nSectors * (drive.cbTransfer = drive.cbSector);

        /**
         * Since the (original) ATC doesn't use DMA, we must now set some additional Drive state for the benefit
         * of any follow-up I/O instructions.  For example, any subsequent inATCByte() and outATCByte() calls need
         * to know which drive to talk to ("this.drive"), to issue their own readData() and writeData() calls.
         *
         * The XTC didn't need this, because it used doRead(), doWrite(), doFormat() helper functions, which reset
         * the current drive's sector and errorCode properties themselves and then used DMA functions that delivered
         * drive data with direct calls to readData() and writeData().
         */
        drive.sector = null;
        drive.iByte = 0;
        drive.errorCode = 0;
        drive.useBuffer = false;

        switch (bCmd) {

        case HDC.ATC.COMMAND.RESET:                 // 0x08 (ATAPI)
            if (this.processReset(drive)) {
                fProcessed = true;
            }
            break;

        case HDC.ATC.COMMAND.RESTORE:               // 0x10 (ATA)
            /**
             * Physically, this retracts the heads to cylinder 0, but logically, there isn't anything to do.
             */
            fInterrupt = fProcessed = true;
            break;

        case HDC.ATC.COMMAND.IDPACKET:              // 0xA1 (ATAPI)
        case HDC.ATC.COMMAND.IDDEVICE:              // 0xEC (ATA-1)
            if (!this.processIdentify(drive, bCmd)) break;
            /* falls through */

        case HDC.ATC.COMMAND.READ_DATA:             // 0x20 (ATA)
            if (!drive.useBuffer) {
                this.printf(MESSAGE.HDC + MESSAGE.PORT, "%s.doATCRead(%d,%d:%d:%d,%d)\n", this.idComponent, iDrive, drive.wCylinder, drive.bHead, drive.bSector, nSectors);
            }
            /**
             * We're using a call to readData() that disables auto-increment, so that once we've got the first
             * byte of the next sector, we can signal an interrupt without also consuming the first byte, allowing
             * inATCByte() to begin with that byte.
             */
            this.regStatus = HDC.ATC.STATUS.BUSY;
            this.readData(drive, function onATCReadDataFirst(b, fAsync) {
                if (b >= 0 && hdc.chipset) {
                    hdc.setATCIRR();
                    /**
                     * Bytes from the requested sector(s) will now be delivered via inATCByte().
                     *
                     * FYI, I'm taking a shotgun approach to these status bits: I need to clear STATUS.BUSY and
                     * set STATUS.DATA_REQ, because otherwise COMPAQ DeskPro 386 reads will fail, and I need to set
                     * the STATUS.READY and STATUS.SEEK_OK bits, because otherwise MODEL_5170_REV3 reads will fail.
                     */
                    hdc.regStatus = HDC.ATC.STATUS.READY | HDC.ATC.STATUS.SEEK_OK | HDC.ATC.STATUS.DATA_REQ;
                } else {
                    /**
                     * TODO: It would be nice to be a bit more specific about the error (if any) that just occurred.
                     * Consult drive.errorCode (it uses older XTC error codes, but mapping those codes should be trivial).
                     */
                    hdc.regStatus = HDC.ATC.STATUS.ERROR;
                    hdc.regError = HDC.ATC.ERROR.NO_CHS;
                }
            }, false);
            fProcessed = true;
            break;

        case HDC.ATC.COMMAND.PACKET:                // 0xA0 (ATAPI)
            this.initBuffer(drive);
            drive.useBuffer = true;
            drive.nBytes = drive.cbTransfer = 12;
            this.regSecCnt = HDC.ATC.SECCNT.PACKET_CD;
            /* falls through */

        case HDC.ATC.COMMAND.WRITE_DATA:            // 0x30 (ATA)
            if (!drive.useBuffer) {
                this.printf(MESSAGE.HDC + MESSAGE.PORT, "%s.doATCWrite(%d,%d:%d:%d,%d)\n", this.idComponent, iDrive, drive.wCylinder, drive.bHead, drive.bSector, nSectors);
            }
            this.regStatus = HDC.ATC.STATUS.DATA_REQ;
            fProcessed = true;
            break;

        case HDC.ATC.COMMAND.READ_VERF:             // 0x40 (ATA)
            /**
             * Since the READ VERIFY command returns no data, once again, logically, there isn't much we HAVE to
             * to do, but... TODO: Verify that all the disk parameters are valid, and return an error if they're not.
             */
            fInterrupt = fProcessed = true;
            break;

        case HDC.ATC.COMMAND.SEEK:                  // 0x70 (ATA)
            /**
             * Physically, this moves the head(s) to the requested cylinder, but logically, there isn't anything to do;
             * in fact, we didn't even need this command for the MODEL_5170 ROM BIOS (the COMPAQ DeskPro 386 ROM BIOS was
             * another story).
             */
            fInterrupt = fProcessed = true;
            break;

        case HDC.ATC.COMMAND.DIAGNOSE:              // 0x90 (ATA)
            this.regError = HDC.ATC.DIAG.NO_ERROR;
            fInterrupt = fProcessed = true;
            break;

        case HDC.ATC.COMMAND.SETPARMS:              // 0x91 (ATA)
            /**
             * The documentation implies that the only parameters this command really affects are the number
             * of heads (from regDrvHd) and sectors/track (from regSecCnt) -- this despite the fact that the BIOS
             * programs all the other registers.  For a type 2 drive, that includes:
             *
             *      WPREC:   0x4B
             *      SECCNT:  0x11 (for 17 sectors per track)
             *      CYL:    0x100 (256 -- huh?)
             *      SECNUM:  0x0C (12 -- huh?)
             *      DRVHD:   0xA3 (max head of 0x03, for 4 total heads)
             *
             * The importance of SECCNT (nSectors) and DRVHD (nHeads) is controlling how multi-sector operations
             * advance to the next sector; see advanceSector().
             */
            drive.nHeads = nHead + 1;
            drive.nSectors = nSectors;
            fInterrupt = fProcessed = true;
            break;

        /**
         * We don't need a 'default' case because any command that declined to set fProcessed will be dealt with below.
         */
        }

        if (fProcessed) {
            if (fInterrupt) this.setATCIRR();
        } else {
            this.regStatus = HDC.ATC.STATUS.ERROR;
            this.regError = HDC.ATC.ERROR.CMD_ABORT;
            if (this.messageEnabled()) {
                this.printf("%s.doATC(%#04x): unsupported operation\n", this.idComponent, this.regCommand);
                if (MAXDEBUG) this.dbg.stopCPU();
            }
        }
    }

    /**
     * setATCIRR(fWrite)
     *
     * Raise the ATC's IRQ, provided ATC interrupts are enabled.
     *
     * @this {HDC}
     * @param {boolean} [fWrite] is true on completion of a write to the sector buffer
     */
    setATCIRR(fWrite)
    {
        if (this.chipset) {
            if (!(this.regFDR & HDC.ATC.FDR.INT_DISABLE)) {
                /**
                 * TODO: Determine what the "correct" instruction delay should be here.  When the OS/2 1.0 Install Disk
                 * begins copying files to the hard drive, at one point it performs the following 125-sector write (use the
                 * Debugger's "m hdc on" and "m pic on" commands to enable HDC and PIC messages, along with "m data on"
                 * if you also want to see the actual sector data being written):
                 *
                 *      HDC.doATC(0x30): Write
                 *      HDC.doATCWrite(0,2:0:5,125)
                 *
                 * As the write progresses, you'll notice that the HDC interrupt after each sector occurs at decreasingly
                 * lower points in the stack, until we eventually start overwriting non-stack data:
                 *
                 *      getIRRVector(): IRQ 14 interrupting @0090:52A6 stack=0050:1906
                 *      getIRRVector(): IRQ 14 interrupting @0318:196B stack=0050:18D6
                 *      getIRRVector(): IRQ 14 interrupting @0318:196B stack=0050:18A6
                 *      ...
                 *      getIRRVector(): IRQ 14 interrupting @0318:196B stack=0050:1156
                 *
                 * At roughly this point, very bad things start happening.  I decided to try an arbitrarily large delay
                 * on the setIRR() call here (120), and the problem vanished, so it seems likely that the OS/2 disk driver
                 * has a low tolerance for fast controller interrupts during multi-sector operations.
                 */
                this.chipset.setIRR(ChipSet.IRQ.ATC1 + this.nInterface, 120);
                if (DEBUG) this.printf(MESSAGE.PIC + MESSAGE.HDC, "%s.setATCIRR(): enabled\n", this.idComponent);
            } else {
                if (DEBUG) this.printf(MESSAGE.PIC + MESSAGE.HDC, "%s.setATCIRR(): disabled\n", this.idComponent);
            }
        }
    }

    /**
     * doXTC()
     *
     * Handles XTC (XT Controller) commands
     *
     * @this {HDC}
     */
    doXTC()
    {
        let hdc = this;
        this.regDataIndex = 0;

        let bCmd = this.popCmd();
        let bCmdOrig = bCmd;
        let b1 = this.popCmd();
        let bDrive = b1 & 0x20;
        let iDrive = (bDrive >> 5);

        let bHead = b1 & 0x1f;
        let b2 = this.popCmd();
        let b3 = this.popCmd();
        let wCylinder = ((b2 << 2) & 0x300) | b3;
        let bSector = b2 & 0x3f;
        let bCount = this.popCmd();                 // block count or interleave count, depending on the command
        let bControl = this.popCmd();
        let bParm, bDataStatus;

        let drive = this.aDrives[iDrive];
        if (drive) {
            drive.wCylinder = wCylinder;
            drive.bHead = bHead;
            drive.bSector = bSector;
            drive.nBytes = bCount * drive.cbSector;
        }

        /**
         * I tried to save normal command processing from having to deal with invalid drives,
         * but the HDC BIOS initializes both drive 0 AND drive 1 on a HDC.XTC.DATA.CMD.INIT_DRIVE command,
         * and apparently that particular command has no problem with non-existent drives.
         *
         * So I've separated the commands into two groups: drive-ambivalent commands should be
         * processed in the first group, and all the rest should be processed in the second group.
         */
        let i;
        switch (bCmd) {

        case HDC.XTC.DATA.CMD.REQ_SENSE:            // 0x03
            this.beginResult(drive? drive.errorCode : HDC.XTC.DATA.ERR.NOT_READY);
            this.pushResult(b1);
            this.pushResult(b2);
            this.pushResult(b3);
            /**
             * Although not terribly clear from IBM's "Fixed Disk Adapter" documentation, a data "status byte"
             * also follows the 4 "sense bytes".  Interestingly, The HDC BIOS checks that data status byte for
             * XTC.DATA.STATUS.ERROR, but I have to wonder if it would have ever been set for this command....
             *
             * The whole point of the HDC.XTC.DATA.CMD.REQ_SENSE command is to obtain details about a
             * previous error, so if HDC.XTC.DATA.CMD.REQ_SENSE itself reports an error, what would that mean?
             */
            this.pushResult(HDC.XTC.DATA.STATUS.OK | bDrive);
            bCmd = -1;                              // mark the command as complete
            break;

        case HDC.XTC.DATA.CMD.INIT_DRIVE:           // 0x0C
            /**
             * Pop off all the extra "Initialize Drive Characteristics" bytes and store them, for the benefit of
             * other functions, like verifyDrive().
             */
            i = 0;
            while ((bParm = this.popCmd()) >= 0) {
                if (drive && i < drive.abDriveParms.length) {
                    drive.abDriveParms[i++] = bParm;
                }
            }
            if (drive) this.verifyDrive(drive);
            bDataStatus = HDC.XTC.DATA.STATUS.OK;
            if (!drive && this.iDriveAllowFail == iDrive) {
                this.iDriveAllowFail = -1;
                if (DEBUG) this.printf(MESSAGE.HDC + MESSAGE.PORT, "%s.doXTC(): fake failure triggered\n", this.idComponent);
                bDataStatus = HDC.XTC.DATA.STATUS.ERROR;
            }
            this.beginResult(bDataStatus | bDrive);
            bCmd = -1;                              // mark the command as complete
            break;

        case HDC.XTC.DATA.CMD.RAM_DIAGNOSTIC:       // 0xE0
        case HDC.XTC.DATA.CMD.CTL_DIAGNOSTIC:       // 0xE4
            this.beginResult(HDC.XTC.DATA.STATUS.OK | bDrive);
            bCmd = -1;                              // mark the command as complete
            break;

        default:
            break;
        }

        if (bCmd >= 0) {
            if (drive === undefined) {
                bCmd = -1;
            } else {
                /**
                 * In preparation for this command, zero out the drive's errorCode and senseCode.
                 * Commands that require a disk address should update senseCode with HDC.XTC.DATA.SENSE_ADDR_VALID.
                 * And of course, any command that encounters an error should set the appropriate error code.
                 */
                drive.errorCode = HDC.XTC.DATA.ERR.NONE;
                drive.senseCode = 0;
            }
            switch (bCmd) {
            case HDC.XTC.DATA.CMD.TEST_READY:       // 0x00
                this.beginResult(HDC.XTC.DATA.STATUS.OK | bDrive);
                break;

            case HDC.XTC.DATA.CMD.RECALIBRATE:      // 0x01
                drive.bControl = bControl;
                if (DEBUG) {
                    this.printf(MESSAGE.HDC + MESSAGE.PORT, "%s.doXTC(): drive %d control byte: %#04x\n", this.idComponent, iDrive, bControl);
                }
                this.beginResult(HDC.XTC.DATA.STATUS.OK | bDrive);
                break;

            case HDC.XTC.DATA.CMD.READ_VERF:        // 0x05
                /**
                 * This is a non-DMA operation, so we simply pretend everything is OK for now.  TODO: Revisit.
                 */
                this.beginResult(HDC.XTC.DATA.STATUS.OK | bDrive);
                break;

            case HDC.XTC.DATA.CMD.READ_DATA:        // 0x08
                this.doRead(drive, function onXTCReadDataCommand(bStatus) {
                    hdc.beginResult(bStatus | bDrive);
                });
                break;

            case HDC.XTC.DATA.CMD.WRITE_DATA:       // 0x0A
                /**
                 * QUESTION: The IBM TechRef (p.1-188) implies that bCount is used as part of HDC.XTC.DATA.CMD.WRITE_DATA command,
                 * but it is omitted from the HDC.XTC.DATA.CMD.READ_DATA command.  Is that correct?  Note that, as far as the length
                 * of the transfer is concerned, we rely exclusively on the DMA controller being programmed with the appropriate byte count.
                 */
                this.doWrite(drive, function onXTCWriteDataCommand(bStatus) {
                    hdc.beginResult(bStatus | bDrive);
                });
                break;

            case HDC.XTC.DATA.CMD.WRITE_BUFFER:     // 0x0F
                this.doWriteBuffer(drive, function onXTCWriteBufferCommand(bStatus) {
                    hdc.beginResult(bStatus | bDrive);
                });
                break;

            default:
                this.beginResult(HDC.XTC.DATA.STATUS.ERROR | bDrive);
                if (this.messageEnabled()) {
                    this.printf("%s.doXTC(%#04x): %d\n", this.idComponent, bCmdOrig, (bCmd < 0? ("invalid drive (" + iDrive + ")") : "unsupported operation"));
                    if (MAXDEBUG && bCmd >= 0) this.dbg.stopCPU();
                }
                break;
            }
        }
    }

    /**
     * popCmd()
     *
     * @this {HDC}
     * @returns {number}
     */
    popCmd()
    {
        let bCmd = -1;
        let bCmdIndex = this.regDataIndex;
        if (bCmdIndex < this.regDataTotal) {
            bCmd = this.regDataArray[this.regDataIndex++];
            this.printf((bCmdIndex > 0? MESSAGE.PORT : 0) + MESSAGE.HDC, "%s.popCmd(%d): %#04x%s\n", this.idComponent, bCmdIndex, bCmd, (!bCmdIndex && HDC.aXTACommands[bCmd]? (" (" + HDC.aXTACommands[bCmd] + ")") : ""));
        }
        return bCmd;
    }

    /**
     * beginResult(bResult)
     *
     * @this {HDC}
     * @param {number} [bResult]
     */
    beginResult(bResult)
    {
        this.regDataIndex = this.regDataTotal = 0;
        if (bResult !== undefined) this.pushResult(bResult);
        /**
         * After the Execution phase (e.g., DMA Terminal Count has occurred, or the EOT sector has been read/written),
         * an interrupt is supposed to occur, signaling the beginning of the Result Phase.  Once the data "status byte"
         * has been read from XTC.DATA, the interrupt is cleared (see inXTCData).
         */
        if (this.chipset) this.chipset.setIRR(ChipSet.IRQ.XTC);
        this.regStatus |= HDC.XTC.STATUS.INTERRUPT;
    }

    /**
     * pushResult(bResult)
     *
     * @this {HDC}
     * @param {number} bResult
     */
    pushResult(bResult)
    {
        if (DEBUG) {
            this.printf((this.regDataTotal > 0? MESSAGE.PORT : 0) + MESSAGE.HDC, "%s.pushResult(%d): %#04x\n", this.idComponent, this.regDataTotal, bResult);
        }
        this.regDataArray[this.regDataTotal++] = bResult;
    }

    /**
     * doDMARead(drive, b, done)
     *
     * @this {HDC}
     * @param {Drive} drive
     * @param {number} b
     * @param {function(number,boolean)} done
     */
    doDMARead(drive, b, done)
    {
        if (b === undefined || b < 0) {
            this.readData(drive, done);
            return;
        }
        /**
         * The DMA controller should be ASKING for data, not GIVING us data; this suggests an internal DMA miscommunication
         */
        if (DEBUG) this.printf(MESSAGE.HDC + MESSAGE.PORT, "%s.doDMARead(): invalid DMA acknowledgement\n", this.idComponent);
        done(-1, false);
    }

    /**
     * doDMAWrite(drive, b)
     *
     * @this {HDC}
     * @param {Drive} drive
     * @param {number} b
     * @returns {number}
     */
    doDMAWrite(drive, b)
    {
        if (b !== undefined && b >= 0) {
            return this.writeData(drive, b);
        }
        /**
         * The DMA controller should be GIVING us data, not ASKING for data; this suggests an internal DMA miscommunication
         */
        if (DEBUG) this.printf(MESSAGE.HDC + MESSAGE.PORT, "%s.doDMAWrite(): invalid DMA acknowledgement\n", this.idComponent);
        return -1;
    }

    /**
     * doDMAWriteBuffer(drive, b)
     *
     * @this {HDC}
     * @param {Drive} drive
     * @param {number} b
     * @returns {number}
     */
    doDMAWriteBuffer(drive, b)
    {
        if (b !== undefined && b >= 0) {
            return this.writeBuffer(drive, b);
        }
        /**
         * The DMA controller should be GIVING us data, not ASKING for data; this suggests an internal DMA miscommunication
         */
        if (DEBUG) this.printf(MESSAGE.HDC + MESSAGE.PORT, "%s.doDMAWriteBuffer(): invalid DMA acknowledgement\n", this.idComponent);
        return -1;
    }

    /**
     * doDMAWriteFormat(drive, b)
     *
     * @this {HDC}
     * @param {Drive} drive
     * @param {number} b
     * @returns {number}
     */
    doDMAWriteFormat(drive, b)
    {
        if (b !== undefined && b >= 0) {
            return this.writeFormat(drive, b);
        }
        /**
         * The DMA controller should be GIVING us data, not ASKING for data; this suggests an internal DMA miscommunication
         */
        if (DEBUG) this.printf(MESSAGE.HDC + MESSAGE.PORT, "%s.doDMAWriteFormat(): invalid DMA acknowledgement\n", this.idComponent);
        return -1;
    }

    /**
     * doRead(drive, done)
     *
     * @this {HDC}
     * @param {Drive} drive
     * @param {function(number)} done (dataStatus is XTC.DATA.STATUS.OK or XTC.DATA.STATUS.ERROR; if error, then drive.errorCode should be set as well)
     */
    doRead(drive, done)
    {
        drive.errorCode = HDC.XTC.DATA.ERR.NOT_READY;

        this.printf(MESSAGE.HDC + MESSAGE.PORT, "%s.doRead(%d,%d:%d:%d,%d)\n", this.idComponent, drive.iDrive, drive.wCylinder, drive.bHead, drive.bSector, ((drive.nBytes / drive.cbSector)|0));

        if (drive.disk) {
            drive.sector = null;
            if (this.chipset) {
                /**
                 * We need to reverse the original logic, and default to success unless/until an actual error occurs;
                 * otherwise doDMARead()/readData() will bail on us.  The original approach used to work because requestDMA()
                 * would immediately call us back with fComplete set to true EVEN if the DMA channel was not yet unmasked;
                 * now the callback is deferred until the DMA channel has been unmasked and the DMA request has finished.
                 */
                drive.errorCode = HDC.XTC.DATA.ERR.NONE;
                this.chipset.connectDMA(ChipSet.DMA_HDC, this, 'dmaRead', drive);
                this.chipset.requestDMA(ChipSet.DMA_HDC, function onDMAReadRequest(fComplete) {
                    if (!fComplete) {
                        /**
                         * If an incomplete request wasn't triggered by an explicit error, then let's make explicit
                         * (ie, revert to the default failure code that we originally set above).
                         */
                        if (drive.errorCode == HDC.XTC.DATA.ERR.NONE) {
                            drive.errorCode = HDC.XTC.DATA.ERR.NOT_READY;
                        }
                    }
                    done(drive.errorCode? HDC.XTC.DATA.STATUS.ERROR : HDC.XTC.DATA.STATUS.OK);
                });
                return;
            }
        }
        done(drive.errorCode? HDC.XTC.DATA.STATUS.ERROR : HDC.XTC.DATA.STATUS.OK);
    }

    /**
     * doWrite(drive, done)
     *
     * @this {HDC}
     * @param {Drive} drive
     * @param {function(number)} done (dataStatus is XTC.DATA.STATUS.OK or XTC.DATA.STATUS.ERROR; if error, then drive.errorCode should be set as well)
     */
    doWrite(drive, done)
    {
        drive.errorCode = HDC.XTC.DATA.ERR.NOT_READY;

        this.printf(MESSAGE.HDC + MESSAGE.PORT, "%s.doWrite(%d,%d:%d:%d,%d)\n", this.idComponent, drive.iDrive, drive.wCylinder, drive.bHead, drive.bSector, ((drive.nBytes / drive.cbSector)|0));

        if (drive.disk) {
            drive.sector = null;
            if (this.chipset) {
                /**
                 * We need to reverse the original logic, and default to success unless/until an actual error occurs;
                 * otherwise doDMAWrite()/writeData() will bail on us.  The original approach would work because requestDMA()
                 * would immediately call us back with fComplete set to true EVEN if the DMA channel was not yet unmasked;
                 * now the callback is deferred until the DMA channel has been unmasked and the DMA request has finished.
                 */
                drive.errorCode = HDC.XTC.DATA.ERR.NONE;
                this.chipset.connectDMA(ChipSet.DMA_HDC, this, 'dmaWrite', drive);
                this.chipset.requestDMA(ChipSet.DMA_HDC, function onDMAWriteRequest(fComplete) {
                    if (!fComplete) {
                        /**
                         * If an incomplete request wasn't triggered by an explicit error, then let's make explicit
                         * (ie, revert to the default failure code that we originally set above).
                         */
                        if (drive.errorCode == HDC.XTC.DATA.ERR.NONE) {
                            drive.errorCode = HDC.XTC.DATA.ERR.NOT_READY;
                        }
                        /**
                         * Mask any error that's the result of an attempt to write beyond the end of the track (which is
                         * something the MS-DOS 4.0M's FORMAT utility seems to like to do).
                         */
                        if (drive.errorCode == HDC.XTC.DATA.ERR.NO_SECTOR) {
                            drive.errorCode = HDC.XTC.DATA.ERR.NONE;
                        }
                    }
                    done(drive.errorCode? HDC.XTC.DATA.STATUS.ERROR : HDC.XTC.DATA.STATUS.OK);
                });
                return;
            }
        }
        done(drive.errorCode? HDC.XTC.DATA.STATUS.ERROR : HDC.XTC.DATA.STATUS.OK);
    }

    /**
     * doWriteBuffer(drive, done)
     *
     * @this {HDC}
     * @param {Drive} drive
     * @param {function(number)} done (dataStatus is XTC.DATA.STATUS.OK or XTC.DATA.STATUS.ERROR; if error, then drive.errorCode should be set as well)
     */
    doWriteBuffer(drive, done)
    {
        drive.errorCode = HDC.XTC.DATA.ERR.NOT_READY;

        if (DEBUG) this.printf(MESSAGE.HDC + MESSAGE.PORT, "%s.doWriteBuffer()\n", this.idComponent);

        this.initBuffer(drive);

        if (this.chipset) {
            /**
             * We need to reverse the original logic, and default to success unless/until an actual error occurs;
             * otherwise doDMAWriteBuffer() will bail on us.  The original approach would work because requestDMA()
             * would immediately call us back with fComplete set to true EVEN if the DMA channel was not yet unmasked;
             * now the callback is deferred until the DMA channel has been unmasked and the DMA request has finished.
             */
            drive.errorCode = HDC.XTC.DATA.ERR.NONE;
            this.chipset.connectDMA(ChipSet.DMA_HDC, this, 'dmaWriteBuffer', drive);
            this.chipset.requestDMA(ChipSet.DMA_HDC, function onDMAWriteBufferRequest(fComplete) {
                if (!fComplete) {
                    /**
                     * If an incomplete request wasn't triggered by an explicit error, then let's make explicit
                     * (ie, revert to the default failure code that we originally set above).
                     */
                    if (drive.errorCode == HDC.XTC.DATA.ERR.NONE) {
                        drive.errorCode = HDC.XTC.DATA.ERR.NOT_READY;
                    }
                }
                done(drive.errorCode? HDC.XTC.DATA.STATUS.ERROR : HDC.XTC.DATA.STATUS.OK);
            });
            return;
        }
        done(drive.errorCode? HDC.XTC.DATA.STATUS.ERROR : HDC.XTC.DATA.STATUS.OK);
    }

    /**
     * readData(drive, done)
     *
     * The following drive variable properties must have been setup prior to our first call:
     *
     *      drive.wCylinder
     *      drive.bHead
     *      drive.bSector
     *      drive.sector (initialized to null)
     *
     * On the first readData() request, since drive.sector will be null, we ask the Disk object to look
     * up the first sector of the request.  We then ask the Disk for bytes from that sector until the sector
     * is exhausted, and then we look up the next sector and continue the process.
     *
     * NOTE: Since the HDC isn't aware of the extent of the transfer, all readData() can do is return bytes
     * until the current track (or, in the case of a multi-track request, the current cylinder) has been exhausted.
     *
     * @this {HDC}
     * @param {Drive} drive
     * @param {function(number,boolean,Object,number)} [done] (number is next available byte from drive, or -1 if no more bytes available)
     * @param {boolean} [fAutoInc] (default is true to auto-increment)
     * @returns {number} the requested byte, or -1 if unavailable
     */
    readData(drive, done, fAutoInc)
    {
        let b = -1;
        let obj = null, off = 0;    // these variables are purely for BACKTRACK purposes

        if (drive.errorCode) {
            if (done) done(b, false, obj, off);
            return b;
        }

        let inc = (fAutoInc !== false? 1 : 0);

        if (drive.useBuffer) {
            if (drive.iByte < drive.buffer.length) {
                b = drive.buffer[drive.iByte];
                drive.iByte += inc;
                if (done) done(b, false, obj, off);
            }
            return b;
        }

        if (drive.sector) {
            off = drive.iByte;
            b = drive.disk.read(drive.sector, drive.iByte);
            drive.iByte += inc;
            if (b >= 0) {
                obj = drive.sector;
                if (done) done(b, false, obj, off);
                return b;
            }
        }

        /**
         * Locate the next sector, and then try reading again.
         *
         * Important difference between the FDC and the XTC: the XTC uses 0-based sector numbers,
         * hence the bSectorBias below.  I could change how sector numbers are stored in the image,
         * but it seems preferable to keep the image format consistent and controller-independent.
         */
        if (done) {
            let hdc = this;
            if (drive.disk) {
                drive.disk.seek(drive.wCylinder, drive.bHead, drive.bSector + drive.bSectorBias, null, false, function onReadDataSeek(sector, fAsync) {
                    if ((drive.sector = sector)) {
                        obj = sector;
                        off = drive.iByte = 0;
                        /**
                         * We "pre-advance" bSector et al now, instead of waiting to advance it right before the seek().
                         * This allows the initial call to readData() to perform a seek without triggering an unwanted advance.
                         */
                        hdc.advanceSector(drive);
                        b = drive.disk.read(drive.sector, drive.iByte);
                        drive.iByte += inc;
                    } else {
                        drive.errorCode = HDC.XTC.DATA.ERR.NO_SECTOR;
                    }
                    done(b, fAsync, obj, off);
                });
                return b;
            }
            drive.errorCode = HDC.XTC.DATA.ERR.NO_SECTOR;
            done(b, false, obj, off);
        }
        return b;
    }

    /**
     * writeData(drive, b)
     *
     * The following drive variable properties must have been setup prior to our first call:
     *
     *      drive.wCylinder
     *      drive.bHead
     *      drive.bSector
     *      drive.sector (initialized to null)
     *
     * On the first writeData() request, since drive.sector will be null, we ask the Disk object to look
     * up the first sector of the request.  We then send the Disk bytes for that sector until the sector
     * is full, and then we look up the next sector and continue the process.
     *
     * NOTE: Since the HDC isn't aware of the extent of the transfer, all writeData() can do is accept bytes
     * until the current track (or, in the case of a multi-track request, the current cylinder) has been exhausted.
     *
     * @this {HDC}
     * @param {Drive} drive
     * @param {number} b containing next byte to write
     * @returns {number} (b unchanged; return -1 if command should be terminated)
     */
    writeData(drive, b)
    {
        if (drive.errorCode) return -1;
        do {
            if (drive.useBuffer) {
                if (drive.iByte < drive.buffer.length) {
                    drive.buffer[drive.iByte++] = b;
                    return b;
                }
                return -1;
            }
            if (drive.sector) {
                if (drive.disk.write(drive.sector, drive.iByte++, b)) break;
            }
            /**
             * Locate the next sector, and then try writing again.
             *
             * Important difference between the FDC and the XTC: the XTC uses 0-based sector numbers,
             * hence the bSectorBias below.  I could change how sector numbers are stored in the image,
             * but it seems preferable to keep the image format consistent and controller-independent.
             */
            if (drive.disk) {
                drive.disk.seek(drive.wCylinder, drive.bHead, drive.bSector + drive.bSectorBias, null, true, function onWriteDataSeek(sector, fAsync) {
                    drive.sector = sector;
                });
            }
            if (!drive.sector) {
                drive.errorCode = HDC.XTC.DATA.ERR.NO_SECTOR;
                b = -1;
                break;
            }
            drive.iByte = 0;
            /**
             * We "pre-advance" bSector et al now, instead of waiting to advance it right before the seek().
             * This allows the initial call to writeData() to perform a seek without triggering an unwanted advance.
             */
            this.advanceSector(drive);
        } while (true);
        return b;
    }

    /**
     * advanceSector(drive)
     *
     * This increments the sector number; when the sector number reaches drive.nSectors on the current track, we
     * increment drive.bHead and reset drive.bSector, and when drive.bHead reaches drive.nHeads, we reset drive.bHead
     * and increment drive.wCylinder.
     *
     * One wrinkle is that the ATC uses 1-based sector numbers (bSectorBias is 0), whereas the XTC uses 0-based sector
     * numbers (bSectorBias is 1).  Thus, the correct "reset" value for bSector is (1 - bSectorBias), and the correct
     * limit for bSector is (nSectors + bSectorStart).
     *
     * @this {HDC}
     * @param {Drive} drive
     */
    advanceSector(drive)
    {
        this.assert(drive.wCylinder < drive.nCylinders);
        drive.bSector++;
        let bSectorStart = (1 - drive.bSectorBias);
        if (drive.bSector >= drive.nSectors + bSectorStart) {
            drive.bSector = bSectorStart;
            drive.bHead++;
            if (drive.bHead >= drive.nHeads) {
                drive.bHead = 0;
                drive.wCylinder++;
            }
            /**
             * ATA Note: It's unclear just from reading specs whether the original PC AT adapter updated
             * the Drive/Head register to reflect the current head at the end of a command.  Since later adapters
             * apparently did, and since the risk of always updating it seems minimal, that's what we'll do.
             */
            this.regDrvHd = (this.regDrvHd & ~HDC.ATC.DRVHD.HEAD_MASK) | (drive.bHead & HDC.ATC.DRVHD.HEAD_MASK);
        }
    }

    /**
     * writeBuffer(drive, b)
     *
     * NOTE: Since the HDC isn't aware of the extent of the transfer, all writeBuffer() can do is accept bytes
     * until the buffer is full.
     *
     * TODO: Support for HDC.XTC.DATA.CMD.READ_BUFFER is missing, and support for HDC.XTC.DATA.CMD.WRITE_BUFFER may not be complete;
     * tests required.
     *
     * @this {HDC}
     * @param {Drive} drive
     * @param {number} b containing next byte to write
     * @returns {number} (b unchanged; return -1 if command should be terminated)
     */
    writeBuffer(drive, b)
    {
        if (drive.iByte < drive.buffer.length) {
            drive.buffer[drive.iByte++] = b;
        } else {
            /**
             * TODO: Determine the proper error code to return here.
             */
            drive.errorCode = HDC.XTC.DATA.ERR.NO_SECTOR;
            b = -1;
        }
        return b;
    }

    /**
     * writeFormat(drive, b)
     *
     * @this {HDC}
     * @param {Drive} drive
     * @param {number} b containing a format command byte
     * @returns {number} (b if successful, -1 if command should be terminated)
     */
    writeFormat(drive, b)
    {
        if (drive.errorCode) return -1;
        drive.abFormat[drive.cbFormat++] = b;
        if (drive.cbFormat == drive.abFormat.length) {
            drive.wCylinder = drive.abFormat[0];    // C
            drive.bHead = drive.abFormat[1];        // H
            drive.bSector = drive.abFormat[2];      // R
            drive.nBytes = 128 << drive.abFormat[3];// N (0 => 128, 1 => 256, 2 => 512, 3 => 1024)
            drive.cbFormat = 0;

            this.printf(MESSAGE.HDC + MESSAGE.PORT, "%s.writeFormat(%d:%d:%d:%d)\n", this.idComponent, drive.wCylinder, drive.bHead, drive.bSector, drive.nBytes);

            for (let i = 0; i < drive.nBytes; i++) {
                if (this.writeData(drive, drive.bFiller) < 0) {
                    return -1;
                }
            }
            drive.cSectorsFormatted++;
        }
        if (drive.cSectorsFormatted >= drive.bSectorEnd) b = -1;
        return b;
    }

    /**
     * processIdentify(drive, bCmd)
     *
     * Worker for the IDDEVICE (ATA-1) and IDPACKET (ATAPI) commands.
     *
     * @this {HDC}
     * @param {Drive} drive
     * @param {number} bCmd
     * @returns {boolean} (true if processed, false otherwise)
     */
    processIdentify(drive, bCmd)
    {
        if (this.fATAPI) {

            if (drive.type && bCmd == HDC.ATC.COMMAND.IDPACKET) {
                return false;
            }

            if (!drive.type && bCmd == HDC.ATC.COMMAND.IDDEVICE) {
                this.processReset(drive);
                return false;
            }

            this.initBuffer(drive);

            /**
             * NOTE: The data for both IDENTIFY commands is stored little-endian, with one unusual exception: string data
             * is returned with every even/odd byte pair swapped.  setString() takes this into account, by XOR'ing bit 0 of
             * each character offset with 0x1.
             */
            let setByte = function(offset, value) {
                drive.buffer[offset] = value & 0xff;
            };
            let setWord = function(offset, value) {
                setByte(offset, value);
                setByte(offset + 1, value >> 8);
            };
            let setLong = function(offset, value) {
                setWord(offset, value);
                setWord(offset + 2, value >> 16);
            };
            let setString = function(offset, value, length) {
                if (!value) value = "";
                for (let i = 0; i < length; i++) {
                    setByte(offset + (i ^ 0x1), i < value.length? value.charCodeAt(i) : 0x20);
                }
            };
            /**
             * TODO: Filling out a complete IDENTIFY response packet requires more work; hopefully this is good enough for now.
             */
            setWord(HDC.ATC.IDENTIFY.CONFIG.OFFSET, drive.type? HDC.ATC.IDENTIFY.CONFIG.FIXED : 0x8580);
            if (drive.type) {
                setWord(HDC.ATC.IDENTIFY.CYLS, drive.nCylinders);
                setWord(HDC.ATC.IDENTIFY.HEADS, drive.nHeads);
                setWord(HDC.ATC.IDENTIFY.SECBYTES, drive.cbSector);
                setWord(HDC.ATC.IDENTIFY.SECTORS, drive.nSectors);
            }
            setString(HDC.ATC.IDENTIFY.SERIAL_NUMBER, "PCJS-20190528", 20);
            setWord(HDC.ATC.IDENTIFY.BUFFER_TYPE, 3);
            setWord(HDC.ATC.IDENTIFY.BUFFER_SIZE, 512);
            setString(HDC.ATC.IDENTIFY.FIRMWARE_REV, "0.1", 8);
            setString(HDC.ATC.IDENTIFY.MODEL_NUMBER, "PCJS CD-ROM", 40);
            if (!drive.type) setByte(HDC.ATC.IDENTIFY.CAPABILITY, 0x0B);
            drive.useBuffer = true;
            if (MAXDEBUG) this.dbg.stopCPU();
            return true;
        }
        return false;
    }

    /**
     * processPacket(drive)
     *
     * @this {HDC}
     * @param {Drive} drive
     */
    processPacket(drive)
    {
        let hdc = this;
        let limit = drive.buffer.length, error = 0;
        let format, lba, num, page = 0, pageCode, pageControl;
        let bPacketCmd, off, iChunk, offChunk, lenChunk, lenTotal, offBuffer, nChunks, nChunkErrors;
        /**
         * NOTE: Packet data is typically stored big-endian, and since BE is not normally assumed,
         * we include BE in the appropriate function signatures.
         */
        let getBits = function(offset, bit, length) {
            return (drive.buffer[offset] >> bit) & ((1 << length) - 1);
        };
        let getByte = function(offset) {
            return drive.buffer[offset] & 0xff;
        };
        let getWordBE = function(offset) {
            return (getByte(offset) << 8) | getByte(offset + 1);
        };
        let getLongBE = function(offset) {
            return (getWordBE(offset) << 16) | getWordBE(offset + 2);
        };
        let getLength = function(offset) {
            let length = getWordBE(offset);
            if (length > limit) length = limit;
            return length;
        };
        let setByte = function(offset, value) {
            if (offset < limit) {
                drive.buffer[offset] = value & 0xff;
            }
        };
        let setBytes = function(offset, value, length) {
            while (length--) setByte(offset++, value);
        };
        let setString = function(offset, value, length) {
            if (!value) value = "";
            for (let i = 0; i < length; i++) {
                setByte(offset + i, i < value.length? value.charCodeAt(i) : 0x20);
            }
        };
        let setWordBE = function(offset, value) {
            setByte(offset, value >> 8);
            setByte(offset + 1, value);
        };
        let setLongBE = function(offset, value) {
            setWordBE(offset, value >> 16);
            setWordBE(offset + 2, value);
        };
        let done = function(fData, error=0) {
            /**
             * TODO: Deal with errors.  In addition, if nChunkErrors is non-zero, then at least one of the
             * requested chunks returned an error (or simply failed to return any data), so deal with that, too.
             */
            if (error) {
                hdc.regStatus = HDC.ATC.STATUS.ERROR;
            }
            else if (!fData) {
                hdc.regStatus = HDC.ATC.STATUS.READY;
                hdc.regSecCnt = HDC.ATC.SECCNT.PACKET_IO | HDC.ATC.SECCNT.PACKET_CD;
            } else {
                drive.iByte = 0;
                drive.nBytes = drive.cbTransfer = limit;
                hdc.regCylLo = limit & 0xff;
                hdc.regCylHi = (limit >> 8) & 0xff;
                hdc.regStatus = (hdc.regStatus & ~HDC.ATC.STATUS.BUSY) | HDC.ATC.STATUS.DATA_REQ;
                hdc.regSecCnt = HDC.ATC.SECCNT.PACKET_IO;
            }
            hdc.setATCIRR(true);
        };
        let copyChunk = function(data, iChunk, offChunk, lenChunk, offBuffer) {
            let dataCached = drive.chunksCached[iChunk];
            if (data) {
                hdc.assert(!dataCached);
            } else {
                if (!dataCached) return false;
                data = dataCached;
            }
            let i = -1;
            if (dataCached) {
                i = drive.chunksMRU.indexOf(iChunk);
                hdc.assert(i >= 0);
                if (i > 0) drive.chunksMRU.splice(i, 1);
            } else {
                drive.chunksCached[iChunk] = data;
            }
            if (drive.chunksMRU.length >= 128) drive.chunksMRU.pop();
            if (i) drive.chunksMRU.unshift(iChunk);
            let bytes = new Uint8Array(data);
            while (offChunk < bytes.byteLength && lenChunk--) {
                setByte(offBuffer++, bytes[offChunk++]);
            }
            if (!--nChunks) done(true);
            return true;
        };
        let readChunk = function(iChunk, offChunk, lenChunk, offBuffer) {
            nChunks++;
            if (copyChunk(null, iChunk, offChunk, lenChunk, offBuffer)) return;
            WebLib.getResource(StrLib.sprintf("%s/x%05d", drive.sDiskPath, iChunk), "arraybuffer", true, function(url, data, error) {
                if (data && !error) {
                    copyChunk(data, iChunk, offChunk, lenChunk, offBuffer);
                    return;
                }
                nChunkErrors++;
                if (!--nChunks) done(false, error);
            });
        };

        bPacketCmd = getByte(0);

        this.printf(MESSAGE.HDC, "%s.packet(%#04x): %s (drive %d)\n", this.idComponent, bPacketCmd, HDC.aATAPICommands[bPacketCmd], drive.iDrive);

        switch(bPacketCmd) {
        case HDC.ATC.PACKET.COMMAND.TEST_UNIT:  // 0x00
            /**
             * If the TEST UNIT READY command status is GOOD, then there is no further response;
             * otherwise, we have a CHECK CONDITION, which will require adding the REQUEST SENSE command.
             * TODO: Worry about that later.
             *
             * NOTE: This was a 12-byte packet (circa 2001) with nothing but a Logical Unit Number (LUN)
             * in bits 5-7 of byte 1, but it was later spec'ed (circa 2010) as a 6-byte packet with no LUN
             * and a CONTROL value in byte 5.
             */
            bPacketCmd = 0;                     // nothing to return, so we can wrap up this command now
            break;

        case HDC.ATC.PACKET.COMMAND.REQ_SENSE:  // 0x03
            limit = 0;                          // TODO
            break;

        case HDC.ATC.PACKET.COMMAND.INQUIRY:    // 0x12
            limit = getLength(3);               // in ATAPI (circa 2001), length was simply drive.buffer[4]; e.g., 36 (0x24) bytes
            setByte(0, 0x05);                   // 0x05 (bits 0-4, the Peripheral Device Type, is 0x05 for CD-ROM devices)
            setByte(1, 0x80);                   // 0x80 (bit 7, the RMB or Removable Media Bit, must be set for CD-ROM devices)
            setByte(2, 0x00);                   // 0x00 (bits 0-2 == ANSI version, bits 3-5 == ECMA version, bits 6-7 == ISO version)
            setByte(3, 0x21);                   // 0x21 (bits 0-3 == Response Data Format (1), bits 4-7 == ATAPI version (2))
            setByte(4, 31);                     // number of additional bytes following this one
            setBytes(5, 0, 3);                  // these bytes were defined in later specs, but we're sticking with earlier (circa 2001) specs for now
            setString(8, "PCJS.ORG", 8);
            setString(16, drive.name, 16);
            setString(32, "1.0", 4);
            break;

        case HDC.ATC.PACKET.COMMAND.READ:       // 0x28
            lba = getLongBE(2);                 // LBA
            num = getWordBE(7);                 // number of blocks
            off = lba << 11;                    // shift left 11 bits to multiply by 2Kb
            limit = num << 11;
            this.initBuffer(drive, limit);
            nChunks = 1;                        // preset chunk request count to 1
            nChunkErrors = 0;
            iChunk = off >>> 15;                // iChunk is the starting 32Kb chunk
            offChunk = off & 0x7fff;            // offChunk is the starting offset within that chunk
            lenTotal = limit;                   // lenTotal is number of bytes left to read
            offBuffer = 0;
            while (lenTotal > 0) {
                lenChunk = 32768 - offChunk;
                if (lenChunk > lenTotal) lenChunk = lenTotal;
                readChunk(iChunk, offChunk, lenChunk, offBuffer);
                offBuffer += lenChunk;
                lenTotal -= lenChunk;
                offChunk = 0;
                iChunk++;
            }
            if (!--nChunks) done(true);         // if chunk request count drops to zero immediately, all chunks must have been cached
            bPacketCmd = -1;
            break;

        case HDC.ATC.PACKET.COMMAND.SEEK:       // 0x2B
            lba = getLongBE(2);                 // TODO: Do something with the Logical Block Address
            bPacketCmd = 0;                     // nothing to return, so we can wrap up this command now
            break;

        case HDC.ATC.PACKET.COMMAND.READ_TOC:   // 0x43
            /**
                Sample requests:

                    1) 0030:c13d65b0 43 02 00 00 00 00 00 03-24 40 00 00 00 00 00 00
                    2) 0030:c13d65b0 43 02 00 00 00 00 00 03-24 00 00 00 00 00 00 00

                Sample responses:

                    1) 0030:c1a05f6c 00 0a 01 01 00 14 01 00-00 00 02 00 (6 words)
                    2) 0030:c1a05f6c 00 12 01 01 00 14 01 00-00 00 02 00 00 14 aa 00 00 3f 2c 42 (10 words)
             */
            limit = getLength(7);
            format = getBits(2, 0, 4);
            switch(format) {
            case 0x0:                           // track/session number (starting track number for which the data will be returned)
                setWordBE(0, 10);               // 0-1: TOC data length
                setByte(2, 1);                  // 2: first track number
                setByte(3, 1);                  // 3: last track number
                                                // beginning of TOC track descriptor(s)
                setByte(4, 0);                  // 4: reserved
                setByte(5, 0x14);               // 5: bits 7-4 = ADR.CUR_POS; bits 3-0 = CONTROL.DATA_TRACK
                setByte(6, 1);                  // 6: track number
                setByte(7, 0);                  // 7: reserved
                setLongBE(8, 0);                // 8-11: LBA
                break;

            default:
                this.printf(MESSAGE.HDC, "%s.packet(%#04x): unsupported format %d\n", this.idComponent, bPacketCmd, format);
                if (MAXDEBUG) this.dbg.stopCPU();
                bPacketCmd = -1;                // TODO: Add support for other READ_TOC formats
                break;
            }
            break;

        case HDC.ATC.PACKET.COMMAND.PLAY_AUDIO: // 0x45
            /**
                Sample request:

                0030:c13d65b0 45 00 00 00 00 96 00 00-00 00 00 00 00 00 00 00 E...............
             */
            bPacketCmd = 0;                     // nothing to return, so we can wrap up this command now
            // error = -1;
            break;

        case HDC.ATC.PACKET.COMMAND.MODE_SENSE: // 0x5A
            limit = getLength(7);
            pageCode = getBits(2, 0, 6);
            pageControl = getBits(2, 6, 2);
            switch(pageCode) {
            case HDC.ATC.PACKET.PAGECODE.RW_ERRREC:     // 0x01
            /**
                Sample requests:

                    1) 0030:c13d65b0 5a 00 01 00 00 00 00 00-10 00 00 00 00 00 00 00 Z...............
                    2) 0030:c13d65b0 5a 00 41 00 00 00 00 00-10 00 00 00 00 00 00 00 Z.A.............

                The word at offset 7 specifies a Parameter List Length (aka limit) of 0x0010, so we'll
                restrict our response to that many bytes.

                Sample responses (0x10 bytes):

                    1) 0030:c1a06294 00 0e 01 00 00 00 00 00-01 06 00 01 00 00 00 00 ................
                    2) 0030:c1a06294 00 0e 01 00 00 00 00 00-01 06 00 00 00 00 00 00 ................
             */
                setBytes(0, 0, limit);
                setWordBE(0, limit-2);
                setByte(2, 1);          // Medium Type Code (vendor-specific. so I'm not sure what this means)
                page = 8;
                setByte(page, pageCode);
                setByte(page+1, limit-8-2);
                break;

            case HDC.ATC.PACKET.PAGECODE.CD_STATUS:     // 0x2A
            /**
                Sample request:

                    0030:c13d7ba8 5a 00 2a 00 00 00 00 00-1c 00 00 00 00 00 00 00 Z.*.............

                The word at offset 7 specifies a Parameter List Length (aka limit) of 0x001C, so we should
                restrict our response to that many bytes; however, the sample VirtualBox response below didn't
                appear to honor that limit (unless I'm misunderstanding how it's interpreted).

                Sample response:

                    0b8c:000000f8: 00 26 00 00 00 00 00 00-2a 1e 08 00 71 00 29 00  .&......*...q.).
                    0b8c:00000108: 16 00 00 02 00 80 16 00-00 00 00 00 00 00 00 00  ................
                    0b8c:00000118: 00 00 00 01 00 00 00 00

                The first 8 bytes are a Mode Parameter Header.  The first word (0x0026) is the number of bytes
                in the entire response (excluding the first word).  There are some other bits that can be set in
                the MPH that we'll worry about later.

                The first (and in this case only) "page" begins at offset 8 with a Page Code (0x2A) followed by
                a length byte (0x1E) indicating the number of bytes in the rest of the "page".  Deciphering the above
                sample, here are the first 16 bytes (I'm not sure what the rest of the bytes beyond that point are).

                Byte    Value   Bit 7   Bit 6   Bit 5   Bit 4   Bit 3   Bit 2   Bit 1   Bit 0
                ----    -----   -----   -----   -----   -----   -----   -----   -----   -----
                   0     2Ah    (Page Code)
                   1     1Eh    (Number of following bytes)
                   2     08h                                            Method2 CDRW-R  CDR-R
                   3     00h                                            TestW   CDRW-W  CDR-W
                   4     71h            MultiS  Mode2-2 Mode2-1 DP-2    DP-1    Comp.   Audio
                   5     00h    BarCode UPC     ISRC    C2      R-W     R-W     CD-DA   CD-DA
                   6     29h    -----Loading Type----   Res.    Eject   PJ      LockS   Lock
                   7     00h    ----------Reserved-----------   SS      DPR     SCM     SVL
                   8     16h    ----------Maximum Read Speed Supported (KBps) MSB------------
                   9     00h
                  10     00h    ----------Number of Volume Levels Supported MSB--------------
                  11     02h
                  12     00h    ----------Buffer Size Supported by Drive (KB) MSB------------
                  13     80h
                  14     16h    ----------Current Read Speed Selected (KBps) MSB-------------
                  15     00h
             */
                setBytes(0, 0, limit);          // previously hard-coded to 30
                setWordBE(0, limit-2);          // previously hard-coded to 30-2
                page = 8;
                setByte(page, pageCode);
                setByte(page+1, limit-8-2);     // previously hard-coded to 22-2
                setByte(page+2, 0x08);
                setByte(page+4, 0x71);
                setByte(page+6, 0x29);
                setWordBE(page+8,  0x1600);
                setWordBE(page+10, 0x0002);
                setWordBE(page+12, 0x0080);
                setWordBE(page+14, 0x1600);
                break;

            default:
                this.printf(MESSAGE.HDC, "%s.packet(%#04x): unsupported page code %d\n", this.idComponent, bPacketCmd, pageCode);
                if (MAXDEBUG) this.dbg.stopCPU();
                bPacketCmd = -1;        // TODO: Add support for other Page Codes
                break;
            }
            break;

        default:
            if (MAXDEBUG) this.dbg.stopCPU();
            bPacketCmd = -1;            // TODO: Not sure what to do, so currently we choose to do nothing
            break;
        }
        if (bPacketCmd >= 0) done(bPacketCmd > 0, error);
    }

    /**
     * processReset(drive)
     *
     * Worker for the DEVICE RESET (ATAPI) command, as well as other operations that are supposed to
     * store "signature" bytes in the device registers, based on the level of packet (ATAPI) command support.
     *
     * @this {HDC}
     * @param {Drive} drive
     * @returns {boolean}
     */
    processReset(drive)
    {
        if (this.fATAPI) {
            this.regSecCnt = 0x01;
            this.regSecNum = 0x01;
            if (!drive.type) {
                this.regCylLo = 0x14;
                this.regCylHi = 0xEB;
            } else {
                this.regCylLo = this.regCylHi = 0;
            }
            this.regDrvHd = 0;
            if (MAXDEBUG) this.dbg.stopCPU();
            return true;
        }
        return false;
    }

    /**
     * intBIOSDisk(addr)
     *
     * NOTE: This function differentiates HDC requests from FDC requests, based on whether the INT 0x13 drive number
     * in DL is >= 0x80.
     *
     * HACK: The HDC BIOS code for both INT 0x13/AH=0x00 and INT 0x13/AH=0x09 calls "INIT_DRV" @C800:0427, which is
     * hard-coded to issue the HDC.XTC.DATA.CMD.INIT_DRIVE command for BOTH drives 0 and 1 (aka drive numbers 0x80 and
     * 0x81), regardless of the drive number specified in DL; this means that the HDC.XTC.DATA.CMD.INIT_DRIVE command
     * must always succeed for drive 1 if it also succeeds for drive 0 -- even if there is no drive 1.  Bizarre, but OK,
     * whatever.
     *
     * So assuming we a have drive 0, when the power-on diagnostics in "DISK_SETUP" @C800:0003 call INT 0x13/AH=0x09
     * (@C800:00DB) for drive 0, it must succeed.  No problem.  But when "DISK_SETUP" starts probing for additional drives,
     * it first issues INT 0x13/AH=0x00, followed by INT 0x13/AH=0x11, and finally INT 0x13/AH=0x09.  If the first
     * (AH=0x00) or third (AH=0x09) INT 0x13 fails, it quickly moves on (ie, it jumps to "POD_DONE").  But as we just
     * discussed, both those operations call "INIT_DRV", which can't return an error.  This means the only function that
     * can return an error in this context is the recalibrate function (AH=0x11).  That sucks, because the way the HDC
     * BIOS is written, it will loop for anywhere from 1.5 seconds to 25 seconds (depending on whether the controller
     * is part of the "System Unit" or not; see port 0x213), attempting to recalibrate drive 1 until it finally times out.
     *
     * Normally, you'll only experience the 1.5 second delay, but even so, it's a ridiculous waste of time and a lot of
     * useless INT 0x13 calls.  So I monitor INT 0x13/AH=0x00 for DL >= 0x80 and set a special HDC.XTC.DATA.CMD.INIT_DRIVE
     * override flag (iDriveAllowFail) that will allow that command to fail, and in theory, make the the HDC BIOS
     * "DISK_SETUP" code much more efficient.
     *
     * @this {HDC}
     * @param {number} addr
     * @returns {boolean} true to proceed with the INT 0x13 software interrupt, false to skip
     */
    intBIOSDisk(addr)
    {
        let AH = this.cpu.regEAX >> 8;
        let DL = this.cpu.regEDX & 0xff;
        if (!AH && DL > 0x80) this.iDriveAllowFail = DL - 0x80;
        return true;
    }

    /**
     * intBIOSDiskette(addr)
     *
     * When the HDC BIOS overwrites the ROM BIOS INT 0x13 address, it saves the original INT 0x13 address
     * in the INT 0x40 vector.  This function intercepts calls to that vector to work around a minor nuisance.
     *
     * The HDC BIOS's plan was simple, albeit slightly flawed: assign fixed disks drive numbers >= 0x80,
     * and whenever someone calls INT 0x13 with a drive number < 0x80, invoke the original INT 0x13 diskette
     * code via INT 0x40 and return via RET 2.
     *
     * Unfortunately, not all original INT 0x13 functions required a drive number in DL (e.g., the "reset"
     * function, where AH=0).  And the HDC BIOS knew this, which is why, in the case of the "reset" function,
     * the HDC BIOS performs BOTH an INT 0x40 diskette reset AND an HDC reset -- it can't be sure which
     * controller the caller really wants to reset.
     *
     * An unfortunate side-effect of this behavior: when the HDC BIOS is initialized for the first time, it may
     * issue several resets internally, depending on whether there are 0, 1 or 2 hard drives installed, and each
     * of those resets also triggers completely useless diskette resets, each wasting up to two seconds waiting
     * for the FDC to interrupt.  The FDC tries to interrupt, but it can't, because at this early stage of
     * ROM BIOS initialization, IRQ.FDC hasn't been unmasked yet.
     *
     * My work-around: have the HDC component hook INT 0x40, and every time an INT 0x40 is issued with AH=0 and
     * IRQ.FDC masked, bypass the INT 0x40 interrupt.  This is as close as PCx86 has come to patching any BIOS code
     * (something I've refused to do), and even here, I'm not doing it out of necessity, just annoyance.
     *
     * @this {HDC}
     * @param {number} addr
     * @returns {boolean} true to proceed with the INT 0x40 software interrupt, false to skip
     */
    intBIOSDiskette(addr)
    {
        let AH = this.cpu.regEAX >> 8;
        if ((!AH && this.chipset && this.chipset.checkIMR(ChipSet.IRQ.FDC))) {
            if (DEBUG) this.printf("%s.intBIOSDiskette(): skipping useless INT 0x40 diskette reset\n", this.idComponent);
            return false;
        }
        return true;
    }

    /**
     * unloadDrive(iDrive)
     *
     * NOTE: At the moment, we support only auto-mounts; there is no user interface for selecting hard drive
     * images, let alone unloading them, so there is currently no need for the following function.
     *
     * @this {HDC}
     * @param {number} iDrive
     */
    // unloadDrive(iDrive)
    // {
    //     this.aDrives[iDrive].disk = null;
    //     //
    //     // WARNING: This conversion of drive number to drive letter, starting with "C:" (0x43), is very simplistic
    //     // and is not guaranteed to match the drive mapping that DOS ultimately uses.
    //     //
    //     this.printf(MESSAGE.NOTICE, "Drive %s unloaded\n", String.fromCharCode(0x43 + iDrive));
    // }

    /**
     * doFormat(drive, done)
     *
     * The drive variable is initialized by doXTC() to the following extent:
     *
     *      drive.bHead (ignored)
     *      drive.nBytes (bytes/sector)
     *      drive.bSectorEnd (sectors/track)
     *      drive.bFiller (fill byte)
     *
     * and we expect the DMA controller to provide C, H, R and N (ie, 4 bytes) for each sector to be formatted.
     *
     * NOTE: This function is not currently used.
     *
     * @this {HDC}
     * @param {Drive} drive
     * @param {function(number)} done (dataStatus is XTC.DATA.STATUS.OK or XTC.DATA.STATUS.ERROR; if error, then drive.errorCode should be set as well)
     */
    // doFormat(drive, done)
    // {
    //     drive.errorCode = HDC.XTC.DATA.ERR.NOT_READY;
    //
    //     if (drive.disk) {
    //         drive.sector = null;
    //         if (this.chipset) {
    //             drive.cbFormat = 0;
    //             drive.abFormat = new Array(4);
    //             drive.bFormatting = true;
    //             drive.cSectorsFormatted = 0;
    //             //
    //             // We need to reverse the original logic, and default to success unless/until an actual error occurs;
    //             // otherwise doDMAWriteFormat() will bail on us.  The original approach would work because requestDMA()
    //             // would immediately call us back with fComplete set to true EVEN if the DMA channel was not yet unmasked;
    //             // now the callback is deferred until the DMA channel has been unmasked and the DMA request has finished.
    //             //
    //             drive.errorCode = HDC.XTC.DATA.ERR.NONE;
    //             this.chipset.connectDMA(ChipSet.DMA_HDC, this, 'dmaWriteFormat', drive);
    //             this.chipset.requestDMA(ChipSet.DMA_HDC, function onDMAFormat(fComplete) {
    //                 if (!fComplete) {
    //                     //
    //                     // If an incomplete request wasn't triggered by an explicit error, then let's make explicit
    //                     // (ie, revert to the default failure code that we originally set above).
    //                     //
    //                     if (drive.errorCode == HDC.XTC.DATA.ERR.NONE) {
    //                         drive.errorCode = HDC.XTC.DATA.ERR.NOT_READY;
    //                     }
    //                 }
    //                 drive.bFormatting = false;
    //                 done(drive.errorCode? HDC.XTC.DATA.STATUS.ERROR : HDC.XTC.DATA.STATUS.OK);
    //             });
    //             return;
    //         }
    //     }
    //     done(drive.errorCode? HDC.XTC.DATA.STATUS.ERROR : HDC.XTC.DATA.STATUS.OK);
    // }

    /**
     * HDC.init()
     *
     * This function operates on every HTML element of class "hdc", extracting the
     * JSON-encoded parameters for the HDC constructor from the element's "data-value"
     * attribute, invoking the constructor to create a HDC component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        let aeHDC = Component.getElementsByClass(APPCLASS, "hdc");
        for (let iHDC = 0; iHDC < aeHDC.length; iHDC++) {
            let eHDC = aeHDC[iHDC];
            let parmsHDC = Component.getComponentParms(eHDC);
            let hdc = new HDC(parmsHDC);
            Component.bindComponentControls(hdc, eHDC, APPCLASS);
        }
    }
}

/**
 * Initialize every Hard Drive Controller (HDC) module on the page.
 */
WebLib.onInit(HDC.init);
