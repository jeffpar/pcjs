/**
 * @fileoverview Implements the PCx86 Floppy Drive Controller (FDC) component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import ChipSet from "./chipset.js";
import Disk from "./disk.js";
import Errors from "./errors.js";
import MESSAGE from "./message.js";
import Panel from "./panel.js";
import Component from "../../../modules/v2/component.js";
import DiskAPI from "../../../modules/v2/diskapi.js";
import JSONLib from "../../../modules/v2/jsonlib.js";
import State from "../../../modules/v2/state.js";
import StrLib from "../../../modules/v2/strlib.js";
import WebLib from "../../../modules/v2/weblib.js";
import { APPCLASS, DEBUG, MAXDEBUG, globals } from "./defines.js";

/**
 * FDC Terms (see FDC.TERMS)
 *
 *      C       Cylinder Number         the current or selected cylinder number
 *
 *      D       Data                    the data pattern to be written to a sector
 *
 *      DS      Drive Select            the selected driver number encoded the same as bits 0 and 1 of the Digital Output
 *                                      Register (DOR); eg, DS0, DS1, DS2, or DS3
 *
 *      DTL     Data Length             when N is 00, DTL is the data length to be read from or written to a sector
 *
 *      EOT     End Of Track            the final sector number on a cylinder
 *
 *      GPL     Gap Length              the length of gap 3 (spacing between sectors excluding the VCO synchronous field)
 *
 *      H       Head Address            the head number, either 0 or 1, as specified in the ID field
 *
 *      HD      Head                    the selected head number, 0 or 1 (H = HD in all command words)
 *
 *      HLT     Head Load Time          the head load time in the selected drive (2 to 256 milliseconds in 2-millisecond
 *                                      increments for the 1.2M-byte drive and 4 to 512 milliseconds in 4 millisecond increments
 *                                      for the 320K-byte drive)
 *
 *      HUT     Head Unload Time        the head unload time after a read or write operation (0 to 240 milliseconds in
 *                                      16-millisecond increments for the 1.2M-byte drive and 0 to 480 milliseconds in
 *                                      32-millisecond increments for the 320K-byte drive)
 *
 *      MF      FM or MFM Mode          0 selects FM mode and 1 selects MFM (MFM is selected only if it is implemented)
 *
 *      MT      Multitrack              1 selects multitrack operation (both HD0 and HD1 will be read or written)
 *
 *      N       Number                  the number of data bytes written in a sector
 *
 *      NCN     New Cylinder Number     the new cylinder number for a SEEK operation
 *
 *      ND      Non-Data Mode           indicates an operation in the non-data mode
 *
 *      PCN     Present Cylinder Number the cylinder number at the completion of a SENSE INTERRUPT STATUS command
 *                                      (present position of the head)
 *
 *      R       Record                  the sector number to be read or written
 *
 *      SC      Sectors Per Cylinder    the number of sectors per cylinder
 *
 *      SK      Skip                    this stands for skip deleted-data address mark
 *
 *      SRT     Stepping Rate           this 4 bit byte indicates the stepping rate for the diskette drive as follows:
 *                                      1.2M-Byte Diskette Drive: 1111=1ms, 1110=2ms, 1101=3ms
 *                                      320K-Byte Diskette Drive: 1111=2ms, 1110=4ms, 1101=6ms
 *
 *      STP     STP Scan Test           if STP is 1, the data in contiguous sectors is compared with the data sent
 *                                      by the processor during a scan operation; if STP is 2, then alternate sections
 *                                      are read and compared
 */

/**
 * @typedef {Object} DiskImage
 * @property {string} name
 * @property {string} path
 */

/**
 * @typedef {Object} DriveType
 * @property {number} heads
 * @property {number} tracks
 * @property {boolean} boot
 */

 /**
  * @typedef {Object} DriveInfo
  * @property {number} iDrive
  * @property {string} name
  * @property {number} nCylinders
  * @property {number} nHeads
  * @property {number} nSectors
  * @property {number} cbSector
  * @property {boolean} fBusy
  * @property {boolean} fLocal
  * @property {boolean} fBootable
  * @property {boolean} fRemovable
  * @property {boolean} fWritable
  * @property {number} nDiskCylinders
  * @property {number} nDiskHeads
  * @property {number} nDiskSectors
  * @property {number} bHead
  * @property {number} bCylinder
  * @property {number} bCylinderSeek
  * @property {number} bSector
  * @property {number} bSectorEnd
  * @property {number} nBytes
  * @property {number} iByte
  */

/**
 * @class FDC
 * @property {Array.<DriveInfo>} aDrives
 * @property {Array.<DriveType>|null} aDriveTypes
 * @unrestricted (allows the class to define properties, both dot and named, outside of the constructor)
 */
export default class FDC extends Component {

    static DEFAULT_DRIVE_NAME = "Floppy Drive";

    static TERMS = {
        C:   "C",       // Cylinder Number
        D:   "D",       // Data (eg, pattern to be written to a sector)
        H:   "H",       // Head Address
        R:   "R",       // Record (ie, sector number to be read or written)
        N:   "N",       // Number (ie, number of data bytes to write)
        DS:  "DS",      // Drive Select
        SC:  "SC",      // Sectors per Cylinder
        DTL: "DTL",     // Data Length
        EOT: "EOT",     // End of Track
        GPL: "GPL",     // Gap Length
        HLT: "HLT",     // Head Load Time
        NCN: "NCN",     // New Cylinder Number
        PCN: "PCN",     // Present Cylinder Number
        SRT: "SRT",     // Stepping Rate
        ST0: "ST0",     // Status Register 0
        ST1: "ST1",     // Status Register 1
        ST2: "ST2",     // Status Register 2
        ST3: "ST3"      // Status Register 3
    };

    /**
     * FDC Digital Output Register (DOR) (0x3F2, write-only)
     *
     * NOTE: Reportedly, a drive's MOTOR had to be ON before the drive could be selected; however, outFDCOutput() no
     * longer verifies that.  Also, motor start time for original drives was 500ms, but we make no attempt to simulate that.
     *
     * On the MODEL_5170 "PC AT Fixed Disk and Diskette Drive Adapter", this port is called the Digital Output Register
     * or DOR.  It uses the same bit definitions as the original FDC Output Register, except that only two diskette drives
     * are supported, hence bit 1 is always 0 (ie, FDC.REG_OUTPUT.DS2 and FDC.REG_OUTPUT.DS3 are not supported) and bits
     * 6 and 7 are unused (FDC.REG_OUTPUT.MOTOR_D2 and FDC.REG_OUTPUT.MOTOR_D3 are not supported).
     */
    static REG_OUTPUT = {
        PORT:      0x3F2,
        DS:         0x03,   // drive select bits
        DS0:        0x00,
        DS1:        0x01,
        DS2:        0x02,   // reserved on the MODEL_5170
        DS3:        0x03,   // reserved on the MODEL_5170
        ENABLE:     0x04,   // clearing this bit resets the FDC
        INT_ENABLE: 0x08,   // enables both FDC and DMA (Channel 2) interrupt requests (IRQ 6)
        MOTOR_D0:   0x10,
        MOTOR_D1:   0x20,
        MOTOR_D2:   0x40,   // reserved on the MODEL_5170
        MOTOR_D3:   0x80    // reserved on the MODEL_5170
    };

    /**
     * FDC Main Status Register (0x3F4, read-only)
     *
     * On the MODEL_5170 "PC AT Fixed Disk and Diskette Drive Adapter", bits 2 and 3 are reserved, since that adapter
     * supported a maximum of two diskette drives.
     */
    static REG_STATUS = {
        PORT:      0x3F4,
        BUSY_A:     0x01,
        BUSY_B:     0x02,
        BUSY_C:     0x04,   // reserved on the MODEL_5170
        BUSY_D:     0x08,   // reserved on the MODEL_5170
        BUSY:       0x10,   // a read or write command is in progress
        NON_DMA:    0x20,   // FDC is in non-DMA mode
        READ_DATA:  0x40,   // transfer is from FDC Data Register to processor (if clear, then transfer is from processor to the FDC Data Register)
        RQM:        0x80    // indicates FDC Data Register is ready to send or receive data to or from the processor (Request for Master)
    };

    /**
     * FDC Data Register (0x3F5, read-write)
     */
    static REG_DATA = {
        PORT:      0x3F5,
        /**
         * FDC Commands
         *
         * NOTE: FDC command bytes need to be masked with FDC.REG_DATA.CMD.MASK before comparing to the values below, since a
         * number of commands use the following additional bits as follows:
         *
         *      SK (0x20): Skip Deleted Data Address Mark
         *      MF (0x40): Modified Frequency Modulation (as opposed to FM or Frequency Modulation)
         *      MT (0x80): multi-track operation (ie, data processed under both head 0 and head 1)
         *
         * We don't support MT (Multi-Track) operations at this time, and the MF and SK designations cannot be supported as long
         * as our diskette images contain only the original data bytes without any formatting information.
         */
        CMD: {
            READ_TRACK:     0x02,
            SPECIFY:        0x03,
            SENSE_DRIVE:    0x04,
            WRITE_DATA:     0x05,
            READ_DATA:      0x06,
            RECALIBRATE:    0x07,
            SENSE_INT:      0x08,           // this command is used to clear the FDC interrupt following the clearing/setting of FDC.REG_OUTPUT.ENABLE
            WRITE_DEL_DATA: 0x09,
            READ_ID:        0x0A,
            READ_DEL_DATA:  0x0C,
            FORMAT_TRACK:   0x0D,
            SEEK:           0x0F,
            SCAN_EQUAL:     0x11,
            SCAN_LO_EQUAL:  0x19,
            SCAN_HI_EQUAL:  0x1D,
            MASK:           0x1F,
            SK:             0x20,           // SK (Skip Deleted Data Address Mark)
            MF:             0x40,           // MF (Modified Frequency Modulation)
            MT:             0x80            // MT (Multi-Track; ie, data under both heads will be processed)
        },
        /**
         * FDC status/error results, generally assigned according to the corresponding ST0, ST1, ST2 or ST3 status bit.
         *
         * TODO: Determine when EQUIP_CHECK is *really* set; also, "77 step pulses" sounds suspiciously like a typo (it's not 79?)
         */
        RES: {
            NONE:           0x00000000,     // ST0 (IC): Normal termination of command (NT)
            NOT_READY:      0x00000008,     // ST0 (NR): When the FDD is in the not-ready state and a read or write command is issued, this flag is set; if a read or write command is issued to side 1 of a single sided drive, then this flag is set
            EQUIP_CHECK:    0x00000010,     // ST0 (EC): If a fault signal is received from the FDD, or if the track 0 signal fails to occur after 77 step pulses (recalibrate command), then this flag is set
            SEEK_END:       0x00000020,     // ST0 (SE): When the FDC completes the Seek command, this flag is set to 1 (high)
            INCOMPLETE:     0x00000040,     // ST0 (IC): Abnormal termination of command (AT); execution of command was started, but was not successfully completed
            RESET:          0x000000C0,     // ST0 (IC): Abnormal termination because during command execution the ready signal from the drive changed state
            INVALID:        0x00000080,     // ST0 (IC): Invalid command issue (IC); command which was issued was never started
            ST0:            0x000000FF,
            NO_ID_MARK:     0x00000100,     // ST1 (MA): If the FDC cannot detect the ID Address Mark, this flag is set; at the same time, the MD (Missing Address Mark in Data Field) of Status Register 2 is set
            NOT_WRITABLE:   0x00000200,     // ST1 (NW): During Execution of a Write Data, Write Deleted Data, or Format a Cylinder command, if the FDC detects a write protect signal from the FDD, then this flag is set
            NO_DATA:        0x00000400,     // ST1 (ND): FDC cannot find specified sector (or specified ID if READ_ID command)
            DMA_OVERRUN:    0x00001000,     // ST1 (OR): If the FDC is not serviced by the main systems during data transfers within a certain time interval, this flag is set
            CRC_ERROR:      0x00002000,     // ST1 (DE): When the FDC detects a CRC error in either the ID field or the data field, this flag is set
            END_OF_CYL:     0x00008000,     // ST1 (EN): When the FDC tries to access a sector beyond the final sector of a cylinder, this flag is set
            ST1:            0x0000FF00,
            NO_DATA_MARK:   0x00010000,     // ST2 (MD): When data is read from the medium, if the FDC cannot find a Data Address Mark or Deleted Data Address Mark, then this flag is set
            BAD_CYL:        0x00020000,     // ST2 (BC): This bit is related to the ND bit, and when the contents of C on the medium are different from that stored in the ID Register, and the content of C is FF, then this flag is set
            SCAN_FAILED:    0x00040000,     // ST2 (SN): During execution of the Scan command, if the FDC cannot find a sector on the cylinder which meets the condition, then this flag is set
            SCAN_EQUAL:     0x00080000,     // ST2 (SH): During execution of the Scan command, if the condition of "equal" is satisfied, this flag is set
            WRONG_CYL:      0x00100000,     // ST2 (WC): This bit is related to the ND bit, and when the contents of C on the medium are different from that stored in the ID Register, this flag is set
            DATA_FIELD:     0x00200000,     // ST2 (DD): If the FDC detects a CRC error in the data, then this flag is set
            STRL_MARK:      0x00400000,     // ST2 (CM): During execution of the Read Data or Scan command, if the FDC encounters a sector which contains a Deleted Data Address Mark, this flag is set
            ST2:            0x00FF0000,
            DRIVE:          0x03000000,     // ST3 (Ux): Status of the "Drive Select" signals from the diskette drive
            HEAD:           0x04000000,     // ST3 (HD): Status of the "Side Select" signal from the diskette drive
            TWOSIDE:        0x08000000,     // ST3 (TS): Status of the "Two Side" signal from the diskette drive
            TRACK0:         0x10000000,     // ST3 (T0): Status of the "Track 0" signal from the diskette drive
            READY:          0x20000000,     // ST3 (RY): Status of the "Ready" signal from the diskette drive
            WRITEPROT:      0x40000000,     // ST3 (WP): Status of the "Write Protect" signal from the diskette drive
            FAULT:          0x80000000|0,   // ST3 (FT): Status of the "Fault" signal from the diskette drive
            ST3:            0xFF000000|0
        }
    };

    /**
     * FDC "Fixed Disk" Register (0x3F6, write-only)
     *
     * Since this register's functions are all specific to the Hard Drive Controller, see the HDC component for details.
     * The fact that this HDC register is in the middle of the FDC I/O port range is an oddity of the "HFCOMBO" controller.
     */

    /**
     * FDC Digital Input Register (0x3F7, read-only, MODEL_5170 only)
     *
     * Bit 7 indicates a diskette change (the MODEL_5170 introduced change-line support).  Bits 0-6 are for the selected
     * hard drive, so this port must be shared with the HDC; bits 0-6 are valid for 50 microseconds after a write to the
     * Drive Head Register.
     */
    static REG_INPUT = {
        PORT:      0x3F7,
        DS0:        0x01,   // Drive Select 0
        DS1:        0x02,   // Drive Select 1
        HS0:        0x04,   // Head Select 0
        HS1:        0x08,   // Head Select 1
        HS2:        0x10,   // Head Select 2
        HS3:        0x20,   // Head Select 3
        WRITE_GATE: 0x40,   // Write Gate
        DISK_CHANGE:0x80    // Diskette Change
    };

    /**
     * FDC Diskette Control Register (0x3F7, write-only, MODEL_5170 only)
     *
     * Only bits 0-1 are used; bits 2-7 are reserved.
     */
    static REG_CONTROL = {
        PORT:      0x3F7,
        RATE500K:   0x00,   // 500,000 bps
        RATE300K:   0x02,   // 300,000 bps
        RATE250K:   0x01,   // 250,000 bps
        RATEUNUSED: 0x03
    };

    /**
     * FDC Command Sequences
     *
     * For each command, cbReq indicates the total number of bytes in the command request sequence,
     * including the first (command) byte; cbRes indicates total number of bytes in the response sequence.
     */
    static CMDS = {
        READ_TRACK:   "READ TRACK",
        SPECIFY:      "SPECIFY",
        SENSE_DRIVE:  "SENSE DRIVE",
        WRITE_DATA:   "WRITE DATA",
        READ_DATA:    "READ DATA",
        RECALIBRATE:  "RECALIBRATE",
        SENSE_INT:    "SENSE INTERRUPT",
        READ_ID:      "READ ID",
        FORMAT:       "FORMAT",
        SEEK:         "SEEK"
    };

    static aCmdInfo = {
        0x02: {cbReq: 9, cbRes: 7, name: FDC.CMDS.READ_TRACK},
        0x03: {cbReq: 3, cbRes: 0, name: FDC.CMDS.SPECIFY},
        0x04: {cbReq: 2, cbRes: 1, name: FDC.CMDS.SENSE_DRIVE},
        0x05: {cbReq: 9, cbRes: 7, name: FDC.CMDS.WRITE_DATA},
        0x06: {cbReq: 9, cbRes: 7, name: FDC.CMDS.READ_DATA},
        0x07: {cbReq: 2, cbRes: 0, name: FDC.CMDS.RECALIBRATE},
        0x08: {cbReq: 1, cbRes: 2, name: FDC.CMDS.SENSE_INT},
        0x0A: {cbReq: 2, cbRes: 7, name: FDC.CMDS.READ_ID},
        0x0D: {cbReq: 6, cbRes: 7, name: FDC.CMDS.FORMAT},
        0x0F: {cbReq: 3, cbRes: 0, name: FDC.CMDS.SEEK}
    };

    static {
        /**
         * Port input notification table
         *
         * TODO: Even though port 0x3F7 was not present on controllers prior to MODEL_5170, I'm taking the easy
         * way out and always emulating it.  So, consider an FDC parameter to disable that feature for stricter compatibility.
         */
        FDC.aPortInput = {
            0x3F1: FDC.prototype.inFDCDiagnostic,
            0x3F4: FDC.prototype.inFDCStatus,
            0x3F5: FDC.prototype.inFDCData,
            0x3F7: FDC.prototype.inFDCInput
        };

        /**
         * Port output notification table
         *
         * TODO: Even though port 0x3F7 was not present on controllers prior to MODEL_5170, I'm taking the easy
         * way out and always emulating it.  So, consider an FDC parameter to disable that feature for stricter compatibility.
         */
        FDC.aPortOutput = {
            0x3F2: FDC.prototype.outFDCOutput,
            0x3F5: FDC.prototype.outFDCData,
            0x3F7: FDC.prototype.outFDCControl
        };
    }

    /**
     * FDC(parmsFDC)
     *
     * The FDC component simulates a NEC µPD765A or Intel 8272A compatible floppy disk controller, and has one
     * component-specific property:
     *
     *      autoMount: one or more JSON-encoded objects, each containing 'name' and 'path' properties
     *      diskettes: an array of DiskImage objects, or the name of a JSON file containing disk descriptors
     *      server: name of the diskette server, if any
     *      drives: an array of DriveType objects, each containing 'heads', 'tracks', and 'boot' properties
     *      sortBy: "name" to sort disks by name, "path" to sort by path, or "none" to leave as-is (default is "name")
     *
     * Regarding early diskette drives: the IBM PC Model 5150 originally shipped with single-sided drives,
     * and therefore supported only 160Kb diskettes.  That's the only diskette format PC-DOS 1.00 supported, too.
     *
     * At some point, 5150's started shipping with double-sided drives, but I'm not sure whether the ROMs changed;
     * they probably did NOT change, because the original ROM BIOS already supported drives with multiple heads.
     * However, what the ROM BIOS did NOT do was provide any indication of drive type, which as far as I can tell,
     * meant you had to simply read/write/format tracks with the second head and check for errors.
     *
     * Presumably at the same time double-sided drives started shipping, PC-DOS 1.10 shipped, which added
     * support for 320Kb diskettes.  And the FORMAT command changed as well, defaulting to a double-sided format
     * operation UNLESS you specified "FORMAT /1".  If I run PC-DOS 1.10 and try to simulate a single-sided drive
     * (by setting drive.nHeads = 1 in initDrive), FORMAT will balk with "Track 0 bad - disk unusable".  I have to
     * wonder if everyone with single-sided drives who upgraded to PC-DOS 1.10 also got that error, forcing them
     * to always specify "FORMAT /1", or if I'm doing something wrong wrt single-sided drive simulation.
     *
     * I've noticed that if I turn FDC messages on ("m fdc on"), and then run "FORMAT B:/1", the command still
     * tries to format head 1/track 0, followed by head 0/track 0, and then the FDC is reset, and the format operation
     * proceeds with only head 0 for all tracks 0 through 39.  FORMAT successfully creates a 160Kb single-sided diskette,
     * but why it also tries to initially format track 0 using the second head remains a bit of a mystery.
     *
     * @this {FDC}
     * @param {Object} parmsFDC
     */
    constructor(parmsFDC)
    {
        /**
         * TODO: Indicate the type of diskette image being loaded (this might help folks understand what's going
         * on when they try to load a diskette image that's larger than what the selected operating system supports).
         */
        super("FDC", parmsFDC, MESSAGE.FDC);

        this['dmaRead'] = FDC.prototype.doDMARead;
        this['dmaWrite'] = FDC.prototype.doDMAWrite;
        this['dmaFormat'] = FDC.prototype.doDMAFormat;

        this.aDriveTypes = null;
        this.aDiskettes = parmsFDC['diskettes'];
        this.sDisketteServer = parmsFDC['server'] || "";

        /**
         * We don't eval() sDriveTypes until initBus() is called, so that we can check for any machine overrides;
         * note that the override, if any, must be named 'floppyDrives' to avoid conflicting with the HDC's 'drives'
         * setting.
         */
        this.sDriveTypes = parmsFDC['drives'];

        /**
         * We record any 'autoMount' object now, but we no longer parse it until initBus(), because the Computer's
         * getMachineParm() service may have an override for us.
         */
        this.configMount = this.parseMount(parmsFDC['autoMount']);

        /**
         * This establishes "name" as the default; if we decide we'd prefer "none" to be the default (ie, the order
         * to use when no sortBy value is specified), we can just drop the '|| "name"', because an undefined value is
         * just as falsy as null.
         *
         * The code that actually performs the sorting (in setBinding()) first checks that sortBy is not falsy, and
         * then assumes that the non-falsy value must be either "path" or "name", and since it explicitly checks for
         * "path" first, any nonsensical value will be treated as "name" (which is fine, since that's our current default).
         */
        this.sortBy = parmsFDC['sortBy'] || "name";
        if (this.sortBy == "none") this.sortBy = null;

        /**
         * The following array keeps track of every disk image we've ever mounted.  Each entry in the
         * array is another array whose elements are:
         *
         *      [0]: name of disk
         *      [1]: path of disk
         *      [2]: array of deltas, uninitialized until the disk is unmounted and/or all state is saved
         *
         * See functions addDiskHistory() and updateDiskHistory().
         */
        this.aDiskHistory = [];

        /**
         * Support for local disk images is currently limited to desktop browsers with FileReader support;
         * when this flag is set, setBinding() allows local disk bindings and informs initBus() to update the
         * "listDisks" binding accordingly.
         */
        this.fLocalDisks = (!WebLib.isMobile() && 'FileReader' in globals.window);

        /**
         * If the HDC component is configured for removable discs (ie, if it's configured as a CD-ROM drive),
         * it may prefer to overload our drive control for easier disc selection, in which case this will contain
         * drive name properties mapped to external disc lists.
         */
        this.driveActive = null;
        this.externalDrives = {};
        this.externalActive = null;

        /**
         * The remainder of FDC initialization now takes place in our initBus() handler, largely because we
         * want initController() to have access to the ChipSet component, so that it can query switches and/or CMOS
         * settings that determine the number of drives and their characteristics (eg, 40-track vs. 80-track),
         * which it can then pass on to initDrive().
         */
        this.fAutoScroll = false;
        this['exports'] = {
            'loadDisk':     this.loadSelectedDisk,
            'wait':         this.waitDrives
        };
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * @this {FDC}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea", "canvas")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "listDisks")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        let fdc = this;
        /**
         * TODO: Making copies of control that are simply cast to different types seems silly, but it doesn't
         * really cost anything and it's cleaner than doing a lot MORE type overrides inline.  However, it still
         * doesn't solve all my problems: controlForm should really be cast as HTMLFormElement, but JavaScript
         * inspections refuse to believe there's an 'onsubmit' property on an HTMLFormElement that I can override.
         */
        let controlForm = /** @type {Object} */ (control);
        let controlSelect = /** @type {HTMLSelectElement} */ (control);

        switch (sBinding) {

        case "listDisks":
            this.bindings[sBinding] = controlSelect;
            controlSelect.onchange = function onChangeListDisks(event) {
                fdc.updateSelectedDiskette();
            };
            return true;

        case "descDisk":
        case "listDrives":
            this.bindings[sBinding] = controlSelect;
            /**
             * I tried going with onclick instead of onchange, so that if you wanted to confirm what's
             * loaded in a particular drive, you could click the drive control without having to change it.
             * However, that doesn't seem to work for all browsers, so I've reverted to onchange.
             */
            controlSelect.onchange = function onChangeListDrives(event) {
                let iDrive = StrLib.parseInt(controlSelect.value, 10);
                if (iDrive != null) fdc.displayDiskette(iDrive, true);
            };
            return true;

        case "loadDisk":
            this.bindings[sBinding] = control;
            control.onclick = function onClickLoadDisk(event) {
                if (!fdc.externalActive) {
                    fdc.loadSelectedDisk();
                } else {
                    let externalDrive = fdc.externalDrives[fdc.externalActive];
                    externalDrive.controller.loadSelectedDisk(externalDrive.drive.iDrive, externalDrive.controlDisks);
                }
            };
            return true;

        case "saveDisk":
            /**
             * Yes, technically, this feature does not require "Local disk support" (which is really a reference
             * to FileReader support), but since fLocalDisks is also false for all mobile devices, and since there
             * is an "orthogonality" to disabling both features in tandem, let's just let it slide, OK?
             */
            if (!this.fLocalDisks) {
                if (DEBUG) this.printf(MESSAGE.LOG, "Local disk support not available");
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
            control.onclick = function onClickSaveDisk(event) {
                let controlDrives = fdc.bindings["listDrives"];
                if (controlDrives && controlDrives.options && fdc.aDrives) {
                    let iDriveSelected = StrLib.parseInt(controlDrives.value, 10) || 0;
                    let drive = fdc.aDrives[iDriveSelected];
                    if (drive) {
                        /**
                         * Note the similarity (and hence factoring opportunity) between this code and the HDC's
                         * "saveHD*" binding.
                         */
                        let disk = drive.disk;
                        if (disk) {
                            if (DEBUG) fdc.printf("saving diskette %s...\n", disk.sDiskPath);
                            let sAlert = WebLib.downloadFile(disk.encodeAsBinary(), "octet-stream", true, disk.sDiskFile.replace(".json", ".img"));
                            Component.alertUser(sAlert);
                        } else {
                            fdc.printf(MESSAGE.NOTICE, "No diskette loaded in drive\n");
                        }
                    } else {
                        fdc.printf(MESSAGE.NOTICE, "No diskette drive selected\n");
                    }
                }
            };
            return true;

        case "mountDisk":
            if (!this.fLocalDisks) {
                if (DEBUG) this.printf(MESSAGE.LOG, "Local disk support not available\n");
                /**
                 * We could also simply hide the control; eg:
                 *
                 *      controlForm.style.display = "none";
                 *
                 * but removing the control altogether seems better.
                 */
                controlForm.parentNode.removeChild(/** @type {Node} */ (controlForm));
                return false;
            }
            this.bindings[sBinding] = controlForm;
            /**
             * Enable "Mount" button only if a file is actually selected
             */
            controlForm.onchange = function onChangeMountDisk() {
                let fieldset = controlForm.children[0];
                let files = fieldset.children[0].files;
                let submit = fieldset.children[1];
                submit.disabled = !files.length;
            };
            controlForm.onsubmit = function onSubmitMountDisk(event) {
                let file = event.currentTarget[1].files[0];
                if (file) {
                    let sDiskPath = file.name;
                    let sDiskName = StrLib.getBaseName(sDiskPath, true);
                    fdc.loadSelectedDrive(sDiskName, sDiskPath, file);
                }
                /**
                 * Prevent reloading of web page after form submission
                 */
                return false;
            };
            return true;

        default:
            break;
        }
        return false;
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {FDC}
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

        let aDriveTypes = cmp.getMachineParm('floppyDrives');
        if (aDriveTypes) {
            if (typeof aDriveTypes == "string") {
                this.sDriveTypes = aDriveTypes;
            } else {
                this.aDriveTypes = aDriveTypes;
                this.sDriveTypes = "";
            }
        }

        if (this.sDriveTypes) {
            try {
                /**
                 * We must take care when parsing user-supplied JSON-encoded drive data.
                 */
                this.aDriveTypes = eval("(" + this.sDriveTypes + ")");
                this.sDriveTypes = "";
            } catch (e) {
                Component.error("FDC drive configuration error: " + e.message + " (" + this.sDriveTypes + ")");
            }
        }

        this.chipset = cmp.getMachineComponent("ChipSet");
        this.configMount = this.parseMount(this.cmp.getMachineParm('autoMount'), this.configMount);

        this.panel = cmp.getMachineComponent("Panel", false);

        /**
         * If we didn't need auto-mount support, we could defer controller initialization until we received
         * a powerUp() notification, at which point reset() would call initController(), or restore() would
         * restore the controller; in that case, all we'd need to do here is call setReady().
         */
        this.initController();

        bus.addPortInputTable(this, FDC.aPortInput);
        bus.addPortOutputTable(this, FDC.aPortOutput);

        /**
         * We now allow the FDC's 'diskettes' parameter to be overridden with a machine parameter;
         * fortunately, that's not a problem, since we weren't doing anything with the parameter until
         * this point (initBus()) anyway, and it's just a comma-delimited list of "diskettes.json" files,
         * the default one being "/machines/pcx86/diskettes.json".
         */
        this.aDiskettes = this.cmp.getMachineParm('diskettes') || this.aDiskettes;

        if (this.aDiskettes && typeof this.aDiskettes == "string") {
            let fdc = this;
            let hostName = WebLib.getHostName();
            let limits = fdc.getDriveLimits();
            let urls = fdc.aDiskettes.split(',');
            let cLoaded = 0, cSuccessful = 0;
            /**
             * Preprocess the list of URLs, removing any that are not appropriate for the current host.
             */
            for (let i = 0; i < urls.length; i++) {
                if (hostName != "localhost" && urls[i].indexOf("private") >= 0) {
                    urls.splice(i--, 1);
                }
            }
            fdc.aDiskettes = [];
            for (let i = 0; i < urls.length; i++) {
                let url = urls[i];
                let sProgress = "Loading " + url + "...";
                WebLib.getResource(url, "json", true, function loadDone(url, sResponse, nErrorCode) {
                    let privateURL = url.indexOf("private") >= 0;
                    if (sResponse && !nErrorCode) {
                        try {
                            JSONLib.parseDiskettes(fdc.aDiskettes, /** @type {Object} */ (JSON.parse(sResponse)), "/pcx86", fdc.sDisketteServer, hostName, limits);
                            cSuccessful++;
                        } catch(err) {
                            if (!privateURL || sResponse[0] != '<') fdc.printf(MESSAGE.WARNING, "Unable to parse %s: %s\n", url, err.message);
                        }
                    } else {
                        if (!privateURL) fdc.printf(MESSAGE.WARNING, "Unable to open %s (%d)\n", url, nErrorCode);
                    }
                    if (++cLoaded == urls.length) fdc.addDiskettes(!cSuccessful);
                }, function(nState) {
                    fdc.printf(MESSAGE.PROGRESS, "%s\n", sProgress);
                });
            }
            return;
        }
        this.addDiskettes();
    }

    /**
     * setLED(color)
     *
     * @this {FDC}
     * @param {string} [color]
     */
    setLED(color)
    {
        if (this.panel) {
            this.panel.setLED("fdcState", color);
        }
    }

    /**
     * parseMount(config, configMerge)
     *
     * @this {FDC}
     * @param {Object|string|undefined} config
     * @param {Object} [configMerge]
     * @returns {Object}
     */
    parseMount(config, configMerge)
    {
        if (config) {
            if (typeof config == "string") {
                try {
                    /**
                     * We must take care when parsing user-supplied JSON-encoded diskette data.
                     */
                    config = /** @type {Object} */ (eval("(" + config + ")"));
                } catch (e) {
                    Component.error("FDC auto-mount error: " + e.message + " (" + config + ")");
                    config = {};
                }
            }
        } else {
            config = {};
        }
        /**
         * Instead of modifying configMerge, we merely import anything in configMerge that doesn't exist in the new config.
         */
        if (configMerge) {
            for (let sDrive in configMerge) {
                if (!config[sDrive]) config[sDrive] = configMerge[sDrive];
            }
        }
        /**
         * We now allow "shorthand" configs, where each drive property can simply be a string (ie, the implied 'name' of a diskette)
         * instead of an object containing 'name' and/or 'path' strings.
         */
        for (let sDrive in config) {
            let drive = config[sDrive];
            if (typeof drive == "string") config[sDrive] = {'name': drive};
        }
        return config;
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {FDC}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) {
            if (!data) {
                this.reset(true);
                if (this.cmp.fReload) {
                    /**
                     * If the computer's fReload flag is set, we're required to toss all currently
                     * loaded disks and remount all disks specified in the auto-mount configuration.
                     */
                    this.unloadAllDrives(true);
                    this.autoMount(true);
                }
            } else {
                if (!this.restore(data)) return false;
            }
            this.resetDriveList();
        }
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {FDC}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
     */
    powerDown(fSave, fShutdown)
    {
        return fSave? this.save() : true;
    }

    /**
     * reset()
     *
     * NOTE: initController() establishes the maximum possible number of drives, but it's not until
     * initController() interrogates the current SW1 settings that we will have an ACTUAL number of drives
     * (nDrives), at which point we can also update the contents of the "listDrives" HTML control, if any.
     *
     * @this {FDC}
     * @param {boolean} [fPowerUp] (this isn't set by a computer reset(), only by our powerUp() handler)
     */
    reset(fPowerUp)
    {
        /**
         * NOTE: The controller is also initialized by the constructor, to assist with auto-mount support,
         * so think about whether we can skip powerUp initialization.
         */
        this.initController();
        /**
         * Don't bother resetting the drive list if we're being called by powerUp(), because powerUp() will.
         */
        if (!fPowerUp) this.resetDriveList();
    }

    /**
     * addDrive(drive, controller, controlDisks)
     *
     * @this {FDC}
     * @param {DriveInfo} drive
     * @param {Component} controller
     * @param {HTMLSelectElement} controlDisks
     */
    addDrive(drive, controller, controlDisks)
    {
        this.externalDrives[drive.name] = {drive, controller, controlDisks};
    }

    /**
     * resetDriveList()
     *
     * @this {FDC}
     */
    resetDriveList()
    {
        /**
         * Populate the HTML controls to match the actual (well, um, specified) number of floppy drives.
         */
        let controlDrives;
        if ((controlDrives = this.bindings['listDrives'])) {
            while (controlDrives.firstChild) {
                controlDrives.removeChild(controlDrives.firstChild);
            }
            let iDrive = 0;
            controlDrives.value = "";
            while (iDrive < this.nDrives) {
                let controlOption = document.createElement("option");
                controlOption.value = iDrive.toString();
                controlOption.text = String.fromCharCode(0x41 + iDrive) + ":";
                controlDrives.appendChild(controlOption);
                /**
                 * Add a second element for the drive that will automatically "write-protect" the selected diskette.
                 */
                controlOption = document.createElement("option");
                controlOption.value = iDrive.toString();
                controlOption.text = String.fromCharCode(0x41 + iDrive) + "*";
                controlOption.title = "write-protected";        // NOTE: this "tooltip" attribute does not work on all browsers (eg, Chrome)
                controlDrives.appendChild(controlOption);
                iDrive++;
            }
            for (let name in this.externalDrives) {
                let controlOption = document.createElement("option");
                controlOption.value = iDrive.toString();
                controlOption.text = name;
                controlDrives.appendChild(controlOption);
                iDrive++;
            }
            if (this.nDrives > 0) {
                controlDrives.value = "0";
                this.displayDiskette(0, false);
            }
        }
    }

    /**
     * save()
     *
     * This implements save support for the FDC component.
     *
     * @this {FDC}
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
     * This implements restore support for the FDC component.
     *
     * @this {FDC}
     * @param {Object} data
     * @returns {boolean} true if successful, false if failure
     */
    restore(data)
    {
        return this.initController(data[0]);
    }

    /**
     * initController(data)
     *
     * @this {FDC}
     * @param {Array} [data]
     * @returns {boolean} true if successful, false if failure
     */
    initController(data)
    {
        let i = 0, iDrive;
        let fSuccess = true;

        if (!data) {
            data = [0, 0, FDC.REG_STATUS.RQM, new Array(9), 0, 0, 0, []];
        }

        /**
         * Selected drive (from regOutput), which can only be selected if its motor is on (see regOutput).
         */
        this.iDrive = data[i++];
        i++;                        // unused slot (if reused, bias by +4, since it was formerly a unit #)

        /**
         * Defaults to FDC.REG_STATUS.RQM set (ready for command) and FDC.REG_STATUS.READ_DATA clear (data direction
         * is from processor to the FDC Data Register).
         */
        this.regStatus = data[i++];

        /**
         * There can be up to 9 command bytes, and 7 result bytes, so 9 data registers are sufficient for communicating
         * in both directions (hence, the new Array(9) default above).
         */
        this.regDataArray = data[i++];

        /**
         * Determines the next data byte to be received.
         */
        this.regDataIndex = data[i++];

        /**
         * Determines the next data byte to be sent (internally, we use regDataIndex to read data bytes, up to this total).
         */
        this.regDataTotal = data[i++];
        this.regOutput = data[i++];
        let dataDrives = data[i++];

        /**
         * Initialize the disk history (if available) before initializing the drives, so that any disk deltas can be
         * applied to disk images that are already loaded.
         */
        let aDiskHistory = data[i++];
        if (aDiskHistory != null) this.aDiskHistory = aDiskHistory;

        /**
         * Default to the maximum number of drives unless ChipSet can give us a specific number of drives.
         */
        this.nDrives = this.aDriveTypes? this.aDriveTypes.length : (this.chipset? this.chipset.getDIPFloppyDrives() : 4);

        /**
         * I would prefer to allocate only nDrives, but as discussed in the handling of the FDC.REG_DATA.CMD.SENSE_INT
         * command, we're faced with situations where the controller must respond to any drive in the range 0-3, regardless
         * how many drives are actually installed.  We still rely upon nDrives to determine the number of drives displayed
         * to the user, however.
         */
        if (this.aDrives === undefined) {
            this.aDrives = new Array(4);
        }

        for (iDrive = 0; iDrive < this.aDrives.length; iDrive++) {
            let fInit = false;
            let drive = this.aDrives[iDrive];
            if (drive === undefined) {
                /**
                 * The first time each drive is initialized, we query its capacity (based on switches or CMOS) and set
                 * the drive's physical limits accordingly (ie, max tracks, max heads, and max sectors/track).
                 */
                fInit = true;
                drive = this.aDrives[iDrive] = {};
                let nKb = (this.chipset? this.chipset.getDIPFloppyDriveSize(iDrive) : 0);
                switch(nKb) {
                case 160:
                case 180:
                    drive.nHeads = 1;       // required for single-sided drives only (all others default to double-sided)
                    /* falls through */
                case 320:
                case 360:
                    /* falls through */
                default:                    // drives that don't have a recognized capacity default to 360
                    drive.nCylinders = 40;
                    drive.nSectors = 9;     // drives capable of writing 8 sectors/track can also write 9 sectors/track
                    break;
                case 720:
                    drive.nCylinders = 80;
                    drive.nSectors = 9;
                    break;
                case 1200:
                    drive.nCylinders = 80;
                    drive.nSectors = 15;
                    break;
                case 1440:
                    drive.nCylinders = 80;
                    drive.nSectors = 18;
                    break;
                }
            }
            if (!this.initDrive(drive, iDrive, this.aDriveTypes? this.aDriveTypes[iDrive] : null, dataDrives[iDrive], fInit)) {
                fSuccess = false;
            }
        }

        /**
         * regInput and regControl (port 0x3F7) were not present on controllers prior to MODEL_5170, which is why
         * we don't include initializers for them in the default data array; we could eliminate them on older models,
         * but we don't have access to the model info right now, and there's no real cost to always including them
         * in the FDC state.
         *
         * The bigger compatibility question is whether to always include hooks for them (see aPortInput and aPortOutput).
         */
        this.regInput = data[i++] || 0;                             // TODO: Determine if we should default to FDC.REG_INPUT.DISK_CHANGE instead of 0
        this.regControl = data[i] || FDC.REG_CONTROL.RATE500K;      // default to maximum data rate

        this.printf("FDC initialized for %d drive(s)\n", this.aDrives.length);

        return fSuccess;
    }

    /**
     * saveController()
     *
     * @this {FDC}
     * @returns {Array}
     */
    saveController()
    {
        let i = 0;
        let data = [];
        data[i++] = this.iDrive;
        data[i++] = 0;
        data[i++] = this.regStatus;
        data[i++] = this.regDataArray;
        data[i++] = this.regDataIndex;
        data[i++] = this.regDataTotal;
        data[i++] = this.regOutput;
        data[i++] = this.saveDrives();
        data[i++] = this.saveDeltas();
        data[i++] = this.regInput;
        data[i] = this.regControl;
        return data;
    }

    /**
     * initDrive(drive, iDrive, driveType, data, fInit)
     *
     * TODO: Consider a separate Drive class that both FDC and HDC can use, since there's a lot of commonality
     * between the drive objects created by both controllers.  This will clean up overall drive management and allow
     * us to factor out some common Drive methods (eg, advanceSector()).
     *
     * @this {FDC}
     * @param {DriveInfo} drive
     * @param {number} iDrive
     * @param {DriveType|null} driveType
     * @param {Array|undefined} data
     * @param {boolean} fInit
     * @returns {boolean} true if successful, false if failure
     */
    initDrive(drive, iDrive, driveType, data, fInit)
    {
        let i = 0;
        let fSuccess = true;

        drive.iDrive = iDrive;
        drive.fBusy = drive.fLocal = false;
        drive.fnCallReady = null;

        let nHeads = driveType && driveType['heads'];
        drive.fBootable = driveType && driveType['boot'];
        if (drive.fBootable == null) drive.fBootable = true;

        if (fInit) {
            drive.fWritable = true;
            if (nHeads) this.printf(MESSAGE.STATUS, "drive %d configured with %d head%s\n", iDrive, nHeads, nHeads > 1? 's' : '');
            if (!drive.fBootable) this.printf(MESSAGE.STATUS, "drive %d configured as non-bootable\n", iDrive);
        }

        if (data === undefined) {
            /**
             * We set a default of two heads (MODEL_5150 PCs originally shipped with single-sided drives,
             * but the ROM BIOS appears to have always supported both drive types).
             */
            data = [FDC.REG_DATA.RES.RESET, true, 0, nHeads || 2, 0];
        }

        if (typeof data[1] == "boolean") {
            /**
             * Note that when no data is provided (eg, when the controller is being reinitialized), we now take
             * care to preserve any drive defaults that initController() already obtained for us, falling back to
             * bare minimums only when all else fails.
             */
            data[1] = [
                FDC.DEFAULT_DRIVE_NAME, // a[0]
                drive.nCylinders || 40, // a[1]
                drive.nHeads || data[3],// a[2]
                drive.nSectors || 9,    // a[3]
                drive.cbSector || 512,  // a[4]
                data[1],                // a[5]
                drive.nDiskCylinders,   // a[6]
                drive.nDiskHeads,       // a[7]
                drive.nDiskSectors      // a[8]
            ];
        }

        /**
         * resCode used to be an FDC global, but in order to insulate FDC state from the operation of various functions
         * that operate on drive objects (eg, readData and writeData), I've made it a per-drive variable.  This choice,
         * similar to my choice for handling PCN, may be contrary to how the actual hardware works, but I prefer this
         * approach, as long as it doesn't expose any incompatibilities that any software actually cares about.
         */
        drive.resCode = data[i++];

        /**
         * Some additional drive properties/defaults that are largely for the Disk component's benefit.
         */
        let a = data[i++];
        drive.name = a[0];
        drive.nCylinders = a[1];          // cylinders
        drive.nHeads = a[2];              // heads/cylinders
        drive.nSectors = a[3];            // sectors/track
        drive.cbSector = a[4];            // bytes/sector
        drive.fRemovable = a[5];
        /**
         * If we have current media parameters, restore them; otherwise, default to the drive's physical parameters.
         */
        if ((drive.nDiskCylinders = a[6])) {
            drive.nDiskHeads = a[7];
            drive.nDiskSectors = a[8];
        } else {
            drive.nDiskCylinders = drive.nCylinders;
            drive.nDiskHeads = drive.nHeads;
            drive.nDiskSectors = drive.nSectors;
        }

        /**
         * The next group of properties are set by various FDC command sequences.
         *
         * We initialize this.iDrive (above) and drive.bHead and drive.bCylinder (below) to zero, but leave the rest undefined,
         * awaiting their first FDC command.  We do this because the initial SENSE_INT command returns a PCN, which will also
         * be undefined unless we have at least zeroed both the current drive and the "present" cylinder on that drive.
         *
         * Alternatively, I could make PCN a global FDC variable.  That may be closer to how the actual hardware operates,
         * but I'm using per-drive variables so that the FDC component can be a good client to both the CPU and other components.
         *
         * COMPATIBILITY ALERT: The MODEL_5170 BIOS ("DSKETTE_SETUP") attempts to discern the drive type (double-density vs.
         * high-capacity) by "slapping" the heads around -- literally (it uses a constant named "TRK_SLAP" equal to 48).
         * After seeking to "TRK_SLAP", the BIOS performs a series of seeks, looking for the precise point where the heads
         * return to track 0.
         *
         * Here's how it works: the BIOS seeks to track 48 (which is fine on an 80-track 1.2Mb high-capacity drive, but 9 tracks
         * too far on a 40-track 360Kb double-density drive), then seeks to track 10, and then seeks in single-track increments
         * up to 10 more times until the SENSE_DRIVE command returns ST3 with the TRACK0 bit set.
         *
         * This implies that SEEK isn't really seeking to a specified cylinder, but rather it is calculating a delta from
         * the previous cylinder to the specified cylinder, and stepping over that number of tracks.  Which means that SEEK
         * is updating a "logical" cylinder number, not the "physical" (actual) cylinder number.  Presumably a RECALIBRATE
         * command will bring the logical and physical values into sync, but once an out-of-bounds cylinder is requested, they
         * will be out of sync.
         *
         * To simulate this, bCylinder is now treated as the "physical" cylinder (since that's how it's ALWAYS been used here),
         * and bCylinderSeek will now track (pun intended) the "logical" cylinder that's programmed via SEEK commands.
         */
        drive.bHead = data[i++];
        drive.bCylinderSeek = data[i++];        // the data[] slot where we used to store drive.nHeads (or -1)
        drive.bCylinder = data[i++];
        if (drive.bCylinderSeek >= 100) {       // verify that the saved bCylinderSeek is valid, otherwise sync it with bCylinder
            drive.bCylinderSeek -= 100;
        } else {
            drive.bCylinderSeek -= drive.bCylinder;
        }
        drive.bSector = data[i++];
        drive.bSectorEnd = data[i++];           // aka EOT
        drive.nBytes = data[i++];

        /**
         * The next group of properties are managed by worker functions (eg, doRead()) to maintain state across DMA requests.
         */
        drive.iByte = data[i++];                // location of the next byte to be accessed in the current sector
        drive.sector = null;
        drive.sectorPrev = null;                // used to remember the last sector read (or written)

        /**
         * We no longer reinitialize drive.disk, in order to retain previously mounted diskette across resets;
         * however, we do ensure that sDiskPath is initialized to a default that displayDiskette() can deal with.
         */
        if (!drive.disk) drive.sDiskPath = "";

        let deltas = data[i++];
        if (deltas == 102) deltas = false;      // v1.02 backward-compatibility

        if (typeof deltas == "boolean") {
            let fLocal = deltas;
            let sDiskName = data[i++];
            let sDiskPath = data[i++];
            if (data[i] != null) drive.fWritable = data[i];
            /**
             * If we're restoring a local disk image, then the entire disk contents should be captured in aDiskHistory,
             * so all we have to do is mount a blank diskette and let disk.restore() do the rest; ie, there's nothing to
             * "load" (it's a purely synchronous operation).
             *
             * Otherwise, we must call loadDrive(); in the common case, loadDrive() will have already "auto-mounted"
             * the diskette, so it will return true, and then we restore any deltas to the current image.
             *
             * However, if loadDrive() returns false, then it has initiated the load for a *different* disk image,
             * so we must mark ourselves as "not ready" again, and add another "wait for ready" test in Computer before
             * finally powering the CPU.
             */
            if (fLocal) {
                this.mountDrive(iDrive, sDiskName, sDiskPath);
            }
            else if (this.loadDrive(iDrive, sDiskName, sDiskPath, true)) {
                if (drive.disk) {
                    if (sDiskPath) {
                        this.addDiskHistory(sDiskName, sDiskPath, drive.disk);
                    } else {
                        if (MAXDEBUG) Component.warning("Disk '" + (drive.disk.sDiskName || sDiskName) + "' not recorded properly in drive " + iDrive);
                    }
                }
            } else {
                this.setReady(false);
            }
        } else if (deltas !== undefined) {
            /**
             * If there's any data at all (ie, if this is a restore and not a reset), then it must be in the
             * pre-v1.02 save/restore format, so we'll restore as best we can, but be aware that if disk.restore()
             * notices that the currently mounted disk image differs from the disk image that these deltas belong to,
             * it will return false, and the restore operation will be aborted.
             */
            if (drive.disk && drive.disk.restore(deltas) < 0) {
                fSuccess = false;
            }
        }

        /**
         * TODO: If loadDrive() returned true, then this can happen immediately.  Otherwise, loadDrive()
         * will have merely "queued up" the load request and drive.disk won't be ready yet, so figure out how/when
         * we can properly restore drive.sector in that case.
         */
        if (fSuccess && drive.disk && drive.iByte !== undefined) {
            drive.sector = drive.disk.seek(drive.bCylinder, drive.bHead, drive.bSector);
        }
        return fSuccess;
    }

    /**
     * getDriveLimits()
     *
     * @this {FDC}
     * @returns {Array} ([0] is max heads, and [1] is max cylinders)
     */
    getDriveLimits()
    {
        let i = 0;
        let limits = [0, 0];
        for (let iDrive = 0; iDrive < this.aDrives.length; iDrive++) {
            let drive = this.aDrives[i];
            if (limits[0] > drive.nHeads || !limits[0]) {
                limits[0] = drive.nHeads;
            }
            if (limits[1] > drive.nCylinders || !limits[1]) {
                limits[1] = drive.nCylinders;
            }
        }
        return limits;
    }

    /**
     * saveDrives()
     *
     * @this {FDC}
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
     * @this {FDC}
     * @param {Object} drive
     * @returns {Array}
     */
    saveDrive(drive)
    {
        let i = 0;
        let data = [];
        data[i++] = drive.resCode;
        data[i++] = [drive.name, drive.nCylinders, drive.nHeads, drive.nSectors, drive.cbSector, drive.fRemovable, drive.nDiskCylinders, drive.nDiskHeads, drive.nDiskSectors];
        data[i++] = drive.bHead;
        /**
         * We used to store drive.nHeads in the next slot, but now we store bCylinderSeek,
         * and we bias it by +100 so that initDrive() can distinguish it from older values.
         */
        data[i++] = drive.bCylinderSeek + 100;
        data[i++] = drive.bCylinder;
        data[i++] = drive.bSector;
        data[i++] = drive.bSectorEnd;
        data[i++] = drive.nBytes;
        data[i++] = drive.iByte;
        /**
         * Now we deviate from the 1.01a save format: instead of next storing all the deltas for the
         * currently mounted disk (if any), we store only the name and path of the currently mounted disk
         * (if any).  Deltas for ALL disks, both currently mounted and previously mounted, are stored later.
         *
         *      data[i++] = drive.disk? drive.disk.save() : null;
         *
         * To indicate this deviation, we store neither a null nor a delta array, but a boolean (fLocal);
         * if that boolean is not present, then the restore code will know it's dealing with a pre-v1.02 state.
         */
        data[i++] = drive.fLocal;
        data[i++] = drive.sDiskName;
        data[i++] = drive.sDiskPath;
        data[i] = drive.fWritable;
        if (DEBUG && !drive.sDiskPath && drive.disk && drive.disk.sDiskPath) {
            Component.warning("Disk '" + drive.disk.sDiskName + "' not saved properly in drive " + drive.iDrive);
        }
        return data;
    }

    /**
     * saveDeltas()
     *
     * This returns an array of entries, one for each disk image we've ever mounted, including any deltas; ie:
     *
     *      [name, path, deltas]
     *
     * aDiskHistory contains exactly that, except that deltas may not be up-to-date for any currently mounted
     * disk image(s), so we call updateHistory() for all those disks, and then aDiskHistory is ready to be saved.
     *
     * @this {FDC}
     * @returns {Array}
     */
    saveDeltas()
    {
        for (let iDrive = 0; iDrive < this.aDrives.length; iDrive++) {
            let drive = this.aDrives[iDrive];
            if (drive.disk) {
                this.updateDiskHistory(drive.sDiskName, drive.sDiskPath, drive.disk);
            }
        }
        return this.aDiskHistory;
    }

    /**
     * copyDrive(iDrive)
     *
     * @this {FDC}
     * @param {number} iDrive
     * @returns {Object|undefined} drive (which may be undefined if the requested drive does not exist)
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
     * seekDrive(drive, iSector, nSectors)
     *
     * The FDC doesn't need this function, since all FDC requests from the CPU are handled by doCmd().  This function
     * is used by other components (eg, Debugger) to mimic an FDC request, using a drive object obtained from copyDrive(),
     * to avoid disturbing the internal state of the FDC's drive objects.
     *
     * Also note that in an actual FDC request, drive.nBytes is initialized to the size of a single sector; the extent
     * of the entire transfer is actually determined by a count that has been pre-loaded into the DMA controller.  The FDC
     * isn't even aware of the extent of the transfer, so in the case of a read request, all readData() can do is return
     * bytes until the current track (or, in the case of a multi-track request, the current cylinder) has been exhausted.
     *
     * Since seekDrive() is for use with non-DMA requests, we use nBytes to specify the length of the entire transfer.
     *
     * @this {FDC}
     * @param {Object} drive
     * @param {number} iSector (a "logical" sector number, relative to the entire disk, NOT a physical sector number)
     * @param {number} nSectors
     * @returns {boolean} true if successful, false if invalid position request
     */
    seekDrive(drive, iSector, nSectors)
    {
        if (drive.disk) {
            let aDiskInfo = drive.disk.info();
            let nCylinders = aDiskInfo[0];
            let nHeads = aDiskInfo[1];
            let nSectorsPerTrack = aDiskInfo[2];
            let nSectorsPerCylinder = nHeads * nSectorsPerTrack;
            let nSectorsPerDisk = nCylinders * nSectorsPerCylinder;
            if (iSector + nSectors <= nSectorsPerDisk) {
                drive.bCylinder = Math.floor(iSector / nSectorsPerCylinder);
                iSector %= nSectorsPerCylinder;
                drive.bHead = Math.floor(iSector / nSectorsPerTrack);
                drive.bSector = (iSector % nSectorsPerTrack) + 1;
                drive.nBytes = nSectors * aDiskInfo[3];
                /**
                 * NOTE: We don't set bSectorEnd, as an FDC command would, but it's irrelevant, because we don't actually
                 * do anything with bSectorEnd at this point.  Perhaps someday, when we faithfully honor/restrict requests
                 * to a single track (or a single cylinder, in the case of multi-track requests).
                 */
                drive.resCode = FDC.REG_DATA.RES.NONE;
                /**
                 * At this point, we've finished simulating what an FDC.REG_DATA.CMD.READ_DATA command would have performed,
                 * up through doRead().  Now it's the caller responsibility to call readData(), just like the DMA Controller would.
                 */
                return true;
            }
        }
        return false;
    }

    /**
     * autoMount(fRemount)
     *
     * @this {FDC}
     * @param {boolean} [fRemount] is true if we're remounting all auto-mounted diskettes
     * @returns {boolean} true if one or more diskette images are being auto-mounted, false if none
     */
    autoMount(fRemount)
    {
        if (!fRemount) this.cAutoMount = 0;
        for (let sDrive in this.configMount) {
            let configDrive = this.configMount[sDrive];
            let sDiskPath = configDrive['path'] || this.findDisketteByName(configDrive['name']);
            if (sDiskPath) {
                /**
                 * WARNING: This conversion of drive letter to drive number, starting with A:, is very simplistic
                 * and is not guaranteed to match the drive mapping that DOS ultimately uses.
                 */
                let iDrive = sDrive.charCodeAt(0) - 0x41;
                if (iDrive >= 0 && iDrive < this.aDrives.length) {
                    let sDiskName = configDrive['name'] || this.findDisketteByPath(sDiskPath) || StrLib.getBaseName(sDiskPath, true);
                    if (!this.loadDrive(iDrive, sDiskName, sDiskPath, true) && fRemount) {
                        this.setReady(false);
                    }
                    continue;
                }
                this.printf(MESSAGE.NOTICE, "Incorrect auto-mount settings for drive %s (%s)\n", sDrive, JSON.stringify(configDrive));
            }
        }
        return !!this.cAutoMount;
    }

    /**
     * loadSelectedDisk(...args)
     *
     * NOTE: Since this can be called via script command (eg, 'loadDisk FDC'), additional parameters can be
     * passed; use the args array to access them if necessary.
     *
     * @this {FDC}
     * @param {...} args
     * @returns {boolean}
     */
    loadSelectedDisk(...args)
    {
        let controlDisks = this.bindings["listDisks"];
        if (controlDisks) {
            let sDiskName = controlDisks.options[controlDisks.selectedIndex].text;
            let sDiskPath = controlDisks.value;
            this.fAutoScroll = (args[0] == "scroll");
            return this.loadSelectedDrive(sDiskName, sDiskPath);
        }
        return false;
    }

    /**
     * loadSelectedDrive(sDiskName, sDiskPath, file)
     *
     * @this {FDC}
     * @param {string} sDiskName
     * @param {string} sDiskPath
     * @param {File} [file] is set if there's an associated File object
     * @returns {boolean}
     */
    loadSelectedDrive(sDiskName, sDiskPath, file)
    {
        let iDrive;
        let controlDrives = this.bindings["listDrives"];
        if (controlDrives && !isNaN(iDrive = StrLib.parseInt(controlDrives.value, 10)) && iDrive >= 0 && iDrive < this.aDrives.length) {

            if (!sDiskPath) {
                this.unloadDrive(iDrive);
                return true;
            }

            if (sDiskPath == "?") {
                this.printf(MESSAGE.NOTICE, "Use \"Choose File\" and \"Mount\" to select and load a local disk\n");
                return false;
            }

            /**
             * If the special path of "??" is selected, then we want to prompt the user for a URL.  Oh, and
             * make sure we pass an empty string as the 2nd parameter to prompt(), so that IE won't display
             * "undefined" -- because after all, undefined and "undefined" are EXACTLY the same thing, right?
             *
             * TODO: This is literally all I've done to support remote disk images. There's probably more
             * I should do, like dynamically updating "listDisks" to include new entries, and adding new entries
             * to the save/restore data.
             */
            if (sDiskPath == "??") {
                sDiskPath = "";
                if (globals.window.prompt) {
                    sDiskPath = globals.window.prompt("Enter the URL of a remote disk image.", "") || "";
                }
                if (!sDiskPath) return false;
                sDiskName = StrLib.getBaseName(sDiskPath);
                this.printf(MESSAGE.DEBUG, "Attempting to load %s as \"%s\"\n", sDiskPath, sDiskName);
            }

            while (this.loadDrive(iDrive, sDiskName, sDiskPath, false, file) < 0) {
                /**
                 * I got tired of the "reload" warning when running locally, so I've disabled it there.
                 */
                if (WebLib.getHostName() != "localhost" && (!globals.window.confirm || !globals.window.confirm("Click OK to reload the original disk and discard any changes."))) {
                    this.printf(MESSAGE.DEBUG, "load cancelled\n");
                    return false;
                }
                /**
                 * So here's the story: loadDrive() returned -1, which it does ONLY if the specified disk is
                 * already mounted AND the user clicked OK to reload the original disk image.  So at the user's
                 * request, we toss any disk history, unload the disk, and then loop back around to loadDrive().
                 *
                 * loadDrive() should NEVER return -1 the second time, since no disk should be loaded, so this
                 * isn't really a loop, just a one-time retry operation.
                 */
                this.removeDiskHistory(sDiskName, sDiskPath);
                this.unloadDrive(iDrive, false, true);
            }
            return true;
        }
        this.printf(MESSAGE.NOTICE, "Unable to load the selected drive\n");
        return false;
    }

    /**
     * mountDrive(iDrive, sDiskName, sDiskPath)
     *
     * @this {FDC}
     * @param {number} iDrive
     * @param {string} sDiskName
     * @param {string} sDiskPath
     */
    mountDrive(iDrive, sDiskName, sDiskPath)
    {
        let drive = this.aDrives[iDrive];
        this.unloadDrive(iDrive, true, true);
        drive.fLocal = true;
        let disk = new Disk(this, drive, DiskAPI.MODE.PRELOAD);
        this.doneLoadDrive(drive, disk, sDiskName, sDiskPath, true);
    }

    /**
     * loadDrive(iDrive, sDiskName, sDiskPath, fAutoMount, file)
     *
     * NOTE: If sDiskPath is already loaded in the drive, nothing needs to be done.
     *
     * @this {FDC}
     * @param {number} iDrive
     * @param {string} sDiskName
     * @param {string} sDiskPath
     * @param {boolean} [fAutoMount]
     * @param {File} [file] is set if there's an associated File object
     * @param {function(Disk,number)} [done] optional callback on completion of the load request
     * @returns {number} 1 if diskette loaded, 0 if queued up (or busy), -1 if already loaded
     */
    loadDrive(iDrive, sDiskName, sDiskPath, fAutoMount, file, done)
    {
        let result = -1;
        let doneLoadDisk = (drive, disk, sDiskName, sDiskPath, error) => {
            this.doneLoadDrive(drive, disk, sDiskName, sDiskPath);
            if (done) done(disk, error);
        };
        let drive = this.aDrives[iDrive];
        if (!drive) {
            result = Errors.DOS.INVALID_DRIVE;
        }
        else if (sDiskPath) {
            sDiskPath = WebLib.redirectResource(sDiskPath);
            /**
             * TODO: Machines with saved states may be using lower-case disk image names, whereas we now use
             * UPPER-CASE names for disk images, so we upper-case both before comparing.  The only problem with
             * removing these hacks is that we can never be sure when all saved states in the wild have been updated.
             */
            if (drive.sDiskPath.toUpperCase() != sDiskPath.toUpperCase()) {
                result = 1;
                this.unloadDrive(iDrive, fAutoMount, true);
                if (drive.fBusy) {
                    this.printf(MESSAGE.NOTICE, "Drive %d busy\n", iDrive);
                    return 0;
                }
                drive.fBusy = true;
                if (fAutoMount) {
                    drive.fAutoMount = true;
                    this.cAutoMount++;
                    this.printf("loading diskette \"%s\"\n", sDiskName);
                }
                drive.fLocal = !!file;
                let disk = new Disk(this, drive, DiskAPI.MODE.PRELOAD);
                if (!disk.load(sDiskName, sDiskPath, file, doneLoadDisk)) {
                    result = 0;
                }
                return result;
            }
        }
        if (done) {
            done(drive && drive.disk, result);
        }
        return result;
    }

    /**
     * doneLoadDrive(drive, disk, sDiskName, sDiskPath, fAutoMount)
     *
     * @this {FDC}
     * @param {Object} drive
     * @param {Disk} disk (set if the disk was successfully loaded, null if not)
     * @param {string} sDiskName
     * @param {string} sDiskPath
     * @param {boolean} [fAutoMount]
     */
    doneLoadDrive(drive, disk, sDiskName, sDiskPath, fAutoMount)
    {
        let aDiskInfo;

        drive.fBusy = false;

        if (disk) {
            /**
             * We shouldn't mount the diskette unless the drive is able to handle it; for example, FD360 (40-track)
             * drives cannot read FD1200 (80-track) diskettes.  However, I no longer require that the diskette's
             * sectors/track fall within the drive's standard maximum, because XDF diskettes use 19 physical sectors/track
             * on the first cylinder (1 more than the typical 18 sectors/track found on 1.44Mb diskettes) but declare
             * a larger logical size (23 512-byte sectors/track) to reflect the actual capacity of XDF tracks beyond the
             * first cylinder (ie, one 8Kb sector, one 2Kb sector, one 1Kb sector, and one 512-byte sector).
             */
            aDiskInfo = disk.info();
            if (disk && aDiskInfo[0] > drive.nCylinders || aDiskInfo[1] > drive.nHeads /* || aDiskInfo[2] > drive.nSectors */) {
                this.printf(MESSAGE.NOTICE, "Diskette \"%s\" too large for drive %s\n", sDiskName, String.fromCharCode(0x41 + drive.iDrive));
                disk = null;
            }
        }

        if (disk) {
            drive.disk = disk;
            drive.sDiskName = sDiskName;
            drive.sDiskPath = sDiskPath;

            /**
             * Since we allow a diskette image to be auto-mounted even if it isn't in the machine's list of disks,
             * let's add it to the list now, since the disk apparently exists.
             */
            if (!this.findDisketteByPath(sDiskPath)) {
                this.addDiskette(sDiskName, sDiskPath);
            }

            /**
             * Adding local disk image names to the disk list seems like a nice idea, but it's too confusing,
             * because then it looks like the "Mount" button should be able to (re)load them, and that can NEVER
             * happen, for security reasons; local disk images can ONLY be loaded via the "Mount" button after
             * the user has selected them via the "Choose File" button.
             *
             *      this.addDiskette(sDiskName, sDiskPath);
             *
             * So we're going to take a different approach: when displayDiskette() is asked to display the name
             * of a local disk image, it will map all such disks to "Local Disk", and any attempt to "Mount" such
             * a disk, will essentially result in a "Disk not found" error.
             */
            this.addDiskHistory(sDiskName, sDiskPath, disk);

            /**
             * For a local disk (ie, one loaded via mountDrive()), the disk.restore() performed by addDiskHistory()
             * may have altered the disk geometry, so refresh the disk info.
             */
            aDiskInfo = disk.info();

            /**
             * Clearly, a successful mount implies a disk change, and I suppose that, technically, an *unsuccessful*
             * mount should imply the same, but what would the real-world analog be?  Inserting a piece of cardboard
             * instead of an actual diskette?  In any case, if we can do the user a favor by pretending (as far as the
             * disk change line is concerned) that an unsuccessful mount never happened, let's do it.
             *
             * Successful unmounts are a different story, however; those *do* trigger a change. See unloadDrive().
             */
            this.regInput |= FDC.REG_INPUT.DISK_CHANGE;

            /**
             * With the addition of notify(), users are now "alerted" whenever a diskette has finished loading;
             * notify() is selective about its output, using print() if a print window is open, alert() otherwise.
             *
             * TODO: Consider adding support for non-modal notices that appear briefly over the machine and then fade,
             * because these modal alerts quickly become annoying.  In the meantime, I now set fPrintOnly to true, on the
             * theory no message is a good sign, while load errors in disk.js should continue to trigger notifications.
             */
            if (!drive.fnCallReady) {
                this.printf(MESSAGE.STATUS, "Mounted \"%s\" (format %s) in drive %s\n", sDiskName, (disk.imageInfo && disk.imageInfo.format || "unknown"), String.fromCharCode(0x41 + drive.iDrive));
            }

            /**
             * Update the drive's current media parameters to match the disk's.
             */
            drive.nDiskCylinders = aDiskInfo[0];
            drive.nDiskHeads = aDiskInfo[1];
            drive.nDiskSectors = aDiskInfo[2];

            /**
             * Since you usually want the Computer to have focus again after loading a new diskette, let's try automatically
             * updating the focus after a successful load.
             */
            if (this.cmp) this.cmp.updateFocus(this.fAutoScroll);
        }
        else {
            drive.fLocal = false;
        }

        if (drive.fAutoMount) {
            drive.fAutoMount = false;
            if (!--this.cAutoMount) this.setReady();
        }

        this.displayDiskette(drive.iDrive);

        if (drive.fnCallReady) {
            drive.fnCallReady();
            drive.fnCallReady = null;
        }

        this.fAutoScroll = false;
    }

    /**
     * addDiskette(sName, sPath, fTop)
     *
     * @this {FDC}
     * @param {string} sName
     * @param {string} sPath
     * @param {boolean} [fTop] (default is bottom)
     */
    addDiskette(sName, sPath, fTop)
    {
        let controlDisks = this.bindings["listDisks"];
        if (controlDisks && controlDisks.options) {
            for (let i = 0; i < controlDisks.options.length; i++) {
                if (controlDisks.options[i].value == sPath) return;
            }
            let controlOption = document.createElement("option");
            controlOption.text = sName;
            controlOption.value = sPath;
            if (fTop && controlDisks.childNodes[0]) {
                controlDisks.insertBefore(controlOption, controlDisks.childNodes[0]);
            } else {
                controlDisks.appendChild(controlOption);
            }
        }
    }

    /**
     * addDiskettes(fSilent)
     *
     * @this {FDC}
     * @param {boolean} [fSilent]
     */
    addDiskettes(fSilent)
    {
        if (this.aDiskettes) {
            for (let i = 0; i < this.aDiskettes.length; i++) {
                let diskette = this.aDiskettes[i];
                this.addDiskette(diskette['name'], diskette['path']);
            }
        }
        /**
         * Why didn't we sort aDiskettes before adding them to the controlDisks list control?
         * Because that wouldn't handle any prepopulated entries already stored in the list control.
         */
        if (this.sortBy) {
            let i, aOptions = [], fdc = this;
            let controlDisks = this.bindings["listDisks"];
            if (controlDisks) {
                /**
                 * NOTE: All this monkeying around with copying the elements from control.options to aOptions
                 * and then back again is necessary because control.options isn't a *real* Array (at least not
                 * in all browsers); consequently, it may have no sort() method.  It has a length property,
                 * along with numeric properties 0 to length-1, but it's still probably just an Object, not
                 * an Array.
                 *
                 * Also note that changing the order of the control's options would ordinarily mean that the
                 * control's selectedIndex may now be incorrect, but in our case, it doesn't matter, because
                 * we have a special function, displayDiskette(), that will be called at LEAST once during
                 * initialization, ensuring that selectedIndex is set correctly.
                 */
                for (i = 0; i < controlDisks.options.length; i++)  {
                    aOptions.push(controlDisks.options[i]);
                }
                aOptions.sort(function(a, b) {
                    /**
                     * I've switched to localeCompare() because it offers case-insensitivity by default;
                     * I'm still a little concerned that we could somehow end up with list elements whose text
                     * and/or value properties are undefined (because calling a method on an undefined variable
                     * will throw an exception), but maybe I'm being overly paranoid....
                     */
                    if (fdc.sortBy != "path") {
                        return a.text.localeCompare(b.text);
                    } else {
                        return a.value.localeCompare(b.value);
                    }
                });
                for (i = 0; i < aOptions.length; i++)  {
                    try {
                        /**
                         * TODO: Determine why this line blows up in IE8; are the properties of an options object not settable in IE8?
                         */
                        controlDisks.options[i] = aOptions[i];
                    } catch(e) {
                        break;
                    }
                }
            }
        }

        this.addDiskette("None", "", true);
        if (this.fLocalDisks) this.addDiskette("Local Disk", "?");
        this.addDiskette("Remote Disk", "??");

        if (fSilent || !this.autoMount()) this.setReady();
    }

    /**
     * findDisketteByPath(sPath)
     *
     * This is used to deal with mount requests (eg, autoMount) that supply a path without a name;
     * if we can find the path in the "listDisks" control, then we return the associated disk name.
     *
     * @this {FDC}
     * @param {string} sPath
     * @returns {string|null}
     */
    findDisketteByPath(sPath)
    {
        let controlDisks = this.bindings["listDisks"];
        if (controlDisks) {
            if (controlDisks.options) {
                for (let i = 0; i < controlDisks.options.length; i++) {
                    let control = controlDisks.options[i];
                    if (control.value == sPath) return control.text;
                }
            }
        } else if (this.aDiskettes) {
            for (let i = 0; i < this.aDiskettes.length; i++) {
                let diskette = this.aDiskettes[i];
                if (diskette['path'] == sPath) return diskette['name'];
            }
        }
        return null;
    }

    /**
     * findDisketteByName(sName)
     *
     * This is used to deal with mount requests (eg, autoMount) that supply a name without a path;
     * if we can find the name in the "listDisks" control, then we return the associated disk path.
     *
     * @this {FDC}
     * @param {string|undefined} sName
     * @returns {string}
     */
    findDisketteByName(sName)
    {
        if (sName && sName != "None") {
            let controlDisks = this.bindings["listDisks"];
            if (controlDisks) {
                if (controlDisks.options) {
                    for (let i = 0; i < controlDisks.options.length; i++) {
                        let control = controlDisks.options[i];
                        if (control.text == sName) return control.value;
                    }
                }
            } else if (this.aDiskettes) {
                for (let i = 0; i < this.aDiskettes.length; i++) {
                    let diskette = this.aDiskettes[i];
                    if (diskette['name'] == sName) return diskette['path'];
                }
            }
            this.printf(MESSAGE.NOTICE, "Unable to find diskette \"%s\"\n", sName);
        }
        return "";
    }

    /**
     * getDiskList(controlDrives)
     *
     * In "the old days", the HTML control containing the list of all available diskettes was stored in:
     *
     *      this.bindings["listDisks"]
     *
     * and it still is.  But now, if the HDC component decides to overload our drive list with one or more
     * of its own drives (eg, "CD"), then our drive/diskette controls must be thought of as general-purpose
     * "Removable Media" controls that the FDC just happens to manage for historical reasons.  This avoids
     * cluttering the UI with multiple drop-downs when there are multiple types of removable disk drives.
     *
     * To detect that situation, the name of the selected drive must be checked against the list of external
     * drives, and if there's a match, then we "swap" the disks control normally used by the FDC with the one
     * provided by the HDC; similarly, if there's no longer a match BUT externalActive is set, when we know
     * that a swap is still active and that we must "unswap" them, putting the FDC's original diskette control
     * back in place.
     *
     * TODO: It would be nice to generalize this someday, and support separate diskette lists for separate
     * diskette drive types; for example, if a machine wants to have a 1.2Mb floppy drive for A: and a 360Kb
     * or 1.44Mb floppy drive for B:, it would be nice to have the diskettes segregated by type as well.
     * The FDC will try to alert you whenever you attempt to mount a diskette in a drive that can't support it,
     * but it would be even better if those diskette images weren't listed for that drive in the first place.
     *
     * @this {FDC}
     * @param {number} iDrive
     * @returns {HTMLSelectElement|undefined}
     */
    getDiskList(iDrive)
    {
        let drive;
        let controlDisks1, controlDisks2;
        let controlDrives = this.bindings["listDrives"];
        if (controlDrives && controlDrives.options) {
            let option = controlDrives.options[controlDrives.selectedIndex];
            if (option) {
                let driveName = option.textContent;
                controlDisks1 = this.bindings["listDisks"];
                if (this.externalDrives[driveName]) {
                    if (!this.externalActive) {
                        controlDisks2 = this.externalDrives[driveName].controlDisks;
                        this.externalActive = driveName;
                    }
                    drive = this.externalDrives[driveName].drive;
                } else {
                    if (this.externalActive) {
                        controlDisks2 = controlDisks1;
                        controlDisks1 = this.externalDrives[this.externalActive].controlDisks;
                        this.externalActive = null;
                    }
                    drive = this.aDrives[iDrive];
                }
            }
        }
        if (controlDisks1 && controlDisks2) {           // swap controlDisks1 and controlDisks2
            let next2 = controlDisks2.nextSibling;      // save the location of controlDisks2
            let parent2 = controlDisks2.parentNode;
            if (next2 === controlDisks1) {              // if controlDisks1 is the next sibling of controlDisks2,
                parent2.insertBefore(                   // just put controlDisks1 before controlDisks2
                    controlDisks1, controlDisks2
                );
            } else {                                    // otherwise, insert controlDisks2 right before controlDisks1
                controlDisks1.parentNode.insertBefore(  // and insert controlDisks1 where controlDisks2 was
                    controlDisks2, controlDisks1
                );
                if (next2) {                            // if there was an element after controlDisks2, insert controlDisks1 right before that
                    parent2.insertBefore(controlDisks1, next2);
                } else {                                // otherwise, just append as last child
                    parent2.appendChild(controlDisks1);
                }
            }
            /**
             * Propagate the actual width (scrollWidth) of the currently visible control to the control we're
             * about to make visible in its place, so that there's no discernable change in the overall layout.
             */
            controlDisks2.style.width = controlDisks1.scrollWidth + "px";
            controlDisks1.style.display = "none";
            controlDisks2.style.display = "inline-block";
            controlDisks1 = controlDisks2;
        }
        /**
         * We need to return multiple values: the requested disk list (controlDisks1) AND the associated drive,
         * since both may now be managed by the HDC; we cheat and return the drive as an FDC property (driveActive).
         *
         * The "Active" designations are a bit of a misnomer; externalActive and driveActive refer only to the
         * drive that's currently displayed in the drive list.  Let's just say they're being "actively" displayed.
         */
        if (drive) {
            this.driveActive = drive;
        } else {
            controlDisks1 = undefined;
        }
        return controlDisks1;
    }

    /**
     * displayDiskette(iDrive, fDriveChange)
     *
     * @this {FDC}
     * @param {number} iDrive (unvalidated)
     * @param {boolean} [fDriveChange] (true if selected drive was changed, false if selected drive should be updated)
     */
    displayDiskette(iDrive, fDriveChange)
    {
        let controlDisks = this.getDiskList(iDrive);
        if (controlDisks) {
            /**
             * Next, make sure the drive whose disk we're updating is the currently selected drive.
             */
            let drive = this.driveActive;
            let controlDrives = this.bindings["listDrives"];
            let i, iDriveSelected = StrLib.parseInt(controlDrives.value, 10);
            let sTargetPath = (drive.fLocal? "?" : drive.sDiskPath);
            if (!isNaN(iDriveSelected) && iDriveSelected == iDrive) {
                for (i = 0; i < controlDisks.options.length; i++) {
                    if (controlDisks.options[i].value == sTargetPath) {
                        if (controlDisks.selectedIndex != i) {
                            controlDisks.selectedIndex = i;
                        }
                        break;
                    }
                }
                if (i == controlDisks.options.length) controlDisks.selectedIndex = 0;
            }
            if (fDriveChange === false) {
                /**
                 * Update the selected drive to match the specified drive (and its write-protected state, if any).
                 */
                for (i = 0; i < controlDrives.options.length; i++) {
                    if (+controlDrives.options[i].value == drive.iDrive) {
                        if (controlDrives.selectedIndex != i) {
                            controlDrives.selectedIndex = i;
                        }
                        if (drive.fWritable === false) controlDrives.selectedIndex++;
                        break;
                    }
                }
            }
            else if (fDriveChange === true && drive.fWritable !== undefined) {
                /**
                 * Odd drive entries are asterisked (eg, "A*" rather than "A:"), providing the user with a mechanism for
                 * automatically write-protecting all disk images mounted in the drive.  External drives (eg, CD-ROM drives)
                 * don't define fWritable, not because the drive's writability isn't known but rather because we don't want
                 * separate (write-protected) drive entries defined for them.
                 */
                if (controlDrives.selectedIndex >= 0) {
                    if (drive.fWritable != !(controlDrives.selectedIndex & 0x1)) {
                        drive.fWritable = !drive.fWritable;
                        if (!drive.fWritable) {
                            this.printf(MESSAGE.NOTICE, "Any diskette loaded in this drive will now be write-protected.");
                        }
                    }
                }
            }
        }
    }

    /**
     * updateSelectedDiskette()
     *
     * @this {FDC}
     */
    updateSelectedDiskette()
    {
        let control = this.bindings["listDisks"];
        let controlDesc = this.bindings["descDisk"];
        let controlOption = control.options[control.selectedIndex];
        if (controlDesc && controlOption) {
            let dataValue = {};
            let sValue = controlOption.getAttribute("data-value");
            if (sValue) {
                try {
                    dataValue = eval("(" + sValue + ")");
                } catch (e) {
                    Component.error(this.type + " option error: " + e.message);
                }
            }
            let sHTML = dataValue['desc'];
            if (sHTML === undefined) sHTML = "";
            let sHRef = dataValue['href'];
            if (sHRef !== undefined) sHTML = "<a href=\"" + sHRef + "\" target=\"_blank\">" + sHTML + "</a>";
            controlDesc.innerHTML = sHTML;
        }
    }

    /**
     * waitDrives(fnCallReady)
     *
     * @this {FDC}
     * @param {function()|null} fnCallReady
     * @returns {boolean} false if wait required, true otherwise
     */
    waitDrives(fnCallReady)
    {
        for (let iDrive = 0; iDrive < this.aDrives.length; iDrive++) {
            let drive = this.aDrives[iDrive];
            if (drive && drive.fBusy) {
                if (!drive.fnCallReady) drive.fnCallReady = fnCallReady;
                return false;
            }
        }
        return true;
    }

    /**
     * unloadDrive(iDrive, fAutoUnload, fQuiet)
     *
     * @this {FDC}
     * @param {number} iDrive (pre-validated)
     * @param {boolean} [fAutoUnload] is true if this unload is being forced as part of an automount and/or restored mount
     * @param {boolean} [fQuiet]
     * @returns {boolean} true if diskette unloaded, false if not
     */
    unloadDrive(iDrive, fAutoUnload, fQuiet)
    {
        let drive = this.aDrives[iDrive];
        if (drive.disk) {
            /**
             * Before we toss the disk's information, capture any deltas that may have occurred.
             */
            this.updateDiskHistory(drive.sDiskName, drive.sDiskPath, drive.disk);
            drive.sDiskName = "";
            drive.sDiskPath = "";
            drive.disk = null;
            drive.fLocal = false;

            this.regInput |= FDC.REG_INPUT.DISK_CHANGE;

            /**
             * TODO: Consider adding support for non-modal notices that appear briefly over the machine and then fade,
             * because these modal alerts quickly become annoying.  In the meantime, I now set fPrintOnly to true, on the
             * theory no message is a good sign, while load errors in disk.js should continue to trigger notifications.
             */
            if (!fQuiet) {
                this.printf(MESSAGE.STATUS, "Drive %s unloaded\n", String.fromCharCode(0x41 + iDrive));
            }
            /**
             * Try to avoid any unnecessary hysteresis regarding the diskette display if this unload is merely
             * a prelude to another load.
             */
            if (!fAutoUnload && !fQuiet) {
                this.displayDiskette(iDrive);
            }
            return true;
        }
        return false;
    }

    /**
     * unloadAllDrives(fDiscard)
     *
     * @this {FDC}
     * @param {boolean} fDiscard to discard all disk history before unloading
     */
    unloadAllDrives(fDiscard)
    {
        if (fDiscard) {
            this.aDiskHistory = [];
        }
        for (let iDrive = 0; iDrive < this.aDrives.length; iDrive++) {
            this.unloadDrive(iDrive, true);
        }
    }

    /**
     * addDiskHistory(sDiskName, sDiskPath, disk)
     *
     * @this {FDC}
     * @param {string} sDiskName
     * @param {string} sDiskPath
     * @param {Disk} disk containing corresponding disk image
     */
    addDiskHistory(sDiskName, sDiskPath, disk)
    {
        let i;
        // this.assert(!!sDiskPath);
        for (i = 0; i < this.aDiskHistory.length; i++) {
            if (this.aDiskHistory[i][1] == sDiskPath) {
                let nChanges = disk.restore(this.aDiskHistory[i][2]);
                if (DEBUG) this.printf("disk '%s' restored from history (%d changes)\n", sDiskName, nChanges);
                return;
            }
        }
        if (DEBUG) this.printf("disk '%s' added to history (nothing to restore)\n", sDiskName);
        this.aDiskHistory[i] = [sDiskName, sDiskPath, []];
    }

    /**
     * removeDiskHistory(sDiskName, sDiskPath)
     *
     * @this {FDC}
     * @param {string} sDiskName
     * @param {string} sDiskPath
     */
    removeDiskHistory(sDiskName, sDiskPath)
    {
        let i;
        for (i = 0; i < this.aDiskHistory.length; i++) {
            if (this.aDiskHistory[i][1] == sDiskPath) {
                this.aDiskHistory.splice(i, 1);
                if (DEBUG) this.printf("disk '%s' removed from history\n", sDiskName);
                return;
            }
        }
        if (DEBUG) this.printf("unable to remove disk '%s' from history (%s)\n", sDiskName, sDiskPath);
    }

    /**
     * updateDiskHistory(sDiskName, sDiskPath, disk)
     *
     * @this {FDC}
     * @param {string} sDiskName
     * @param {string} sDiskPath
     * @param {Disk} disk containing corresponding disk image, with possible deltas
     */
    updateDiskHistory(sDiskName, sDiskPath, disk)
    {
        let i;
        for (i = 0; i < this.aDiskHistory.length; i++) {
            if (this.aDiskHistory[i][1] == sDiskPath) {
                this.aDiskHistory[i][2] = disk.save();
                if (DEBUG) this.printf("disk '%s' updated in history\n", sDiskName);
                return;
            }
        }
        /**
         * I used to report this as an error (at least in the DEBUG release), but it's no longer really
         * an error, because if we're trying to re-mount a clean copy of a disk, we toss its history, then
         * unload, and then reload/remount.  And since unloadDrive's normal behavior is to call updateDiskHistory()
         * before unloading, the fact that the disk is no longer listed here can't be treated as an error.
         */
        if (DEBUG) this.printf("unable to update disk '%s' in history (%s)\n", sDiskName, sDiskPath);
    }

    /**
     * outFDCOutput(port, bOut, addrFrom)
     *
     * @this {FDC}
     * @param {number} port (0x3F2, output only)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     */
    outFDCOutput(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "OUTPUT");
        if (!(bOut & FDC.REG_OUTPUT.ENABLE)) {
            this.initController();
            /**
             * initController() resets, among other things, the selected drive (this.iDrive), so if we were
             * still updating this.iDrive below based on the "drive select" bits in regOutput, we would want
             * to make sure those bits now match what initController() set.  But since we no longer do that
             * (see below), this is no longer needed either.
             *
             *      bOut = (bOut & ~FDC.REG_OUTPUT.DS) | this.iDrive;
             */
        }
        else if (!(this.regOutput & FDC.REG_OUTPUT.ENABLE)) {
            /**
             * When FDC.REG_OUTPUT.ENABLE transitions from 0 to 1, generate an interrupt (assuming INT_ENABLE is set).
             */
            this.regOutput = bOut;      // this may look redundant but requestInterrupt() needs to see regOutput set
            this.requestInterrupt();
        }
        /**
         * This no longer updates the internally selected drive (this.iDrive) based on regOutput, because (a) there seems
         * to be no point, as all drive-related commands include their own "drive select" bits, and (b) it breaks the
         * MODEL_5170 boot code.  Here's why:
         *
         * Unlike previous models, the MODEL_5170 BIOS probes all installed diskette drives to determine drive type;
         * ie, FD360 (40-track) or FD1200 (80-track).  So if there are two drives, the last selected drive will be drive 1.
         * Immediately before booting, the BIOS issues an INT 0x13/AH=0 reset, which writes regOutput two times: first
         * with FDC.REG_OUTPUT.ENABLE clear, and then with it set.  However, both times, it ALSO loads the last selected
         * drive number into regOutput's "drive select" bits.
         *
         * If we switched our selected drive to match regOutput, then the ST0 value we returned on an SENSE_INT command
         * following the regOutput reset operation would indicate drive 1 instead of drive 0.  But the BIOS requires
         * the ST0 result from the SENSE_INT command ALWAYS be 0xC0 (not 0xC1), so the controller must not be propagating
         * regOutput's "drive select" bits in the way I originally assumed.
         *
         *      let iDrive = bOut & FDC.REG_OUTPUT.DS;
         *      if (bOut & (FDC.REG_OUTPUT.MOTOR_D0 << iDrive)) this.iDrive = iDrive;
         */
        this.regOutput = bOut;
    }

    /**
     * inFDCDiagnostic(port, addrFrom)
     *
     * It turns out that any 5170 configuration without an HDC component that attempts to use either the REV2 or REV3
     * PC AT ROM BIOS will fail with error "601-Diskette Error", unless we also provide this "D/S/P DIAGNOSTIC REGISTER".
     * The original 5170 REV1 BIOS didn't have this requirement.
     *
     * I'm unable to find any documentation on this so-called "D/S/P DIAGNOSTIC REGISTER" (port 0x3F1) or the "D/S/P CARD"
     * to which the ROM BIOS refers.  But it seems clear that if we don't provide the expected response from the DIAGNOSTIC
     * REGISTER, and there's no HDC to respond to the MULTIPLE DATA RATE CAPABLE test that follows, then an error is
     * inevitable.  Clearly, there is a very intimate relationship between the FDC and HDC portions of this card.
     *
     * Here's the relevant code from the REV3 PC AT ROM BIOS (TEST2.ASM):
     *
     *      ;-----  CHECK FOR MULTIPLE DATA RATE CAPABILITY
     *
     *      J_OK:
     *              MOV     DX,03F1H                ; D/S/P DIAGNOSTIC REGISTER
     *              IN      AL,DX                   ; READ D/S/P TYPE CODE
     *              AND     AL,11111000B            ; KEEP ONLY UNIQUE CODE FOR D/S/P
     *              CMP     AL,01010000B            ; D/S/P CARD - MULTIPLE DATA RATE?
     *              JZ      J_OK3                   ; IF SO JUMP
     *
     *              MOV     DX,05F7H                ; FIXED DISK DIAGNOSTIC REGISTER
     *              IN      AL,DX                   ; READ FIXED DISK TYPE CODE
     *              AND     AL,11110000B            ; KEEP ONLY UNIQUE CODE FOR F/D
     *              CMP     AL,10100000B            ; FIXED DISK ADAPTER ?
     *              JZ      J_FAIL                  ; MUST BE COMBO ELSE ERROR
     *
     *              MOV     BL,0FH                  ; OUTER LOOP COUNT WAIT FOR BUSY OFF
     *              SUB     CX,CX
     *              MOV     DX,01F7H                ; HARD FILE STATUS PORT
     *      J_OK1:
     *              IN      AL,DX                   ; GET THE STATUS
     *              TEST    AL,080H                 ; IS THE CONTROLLER BUSY?
     *              JZ      J_OK2                   ; CONTINUE IF NOT
     *              LOOP    J_OK1                   ; TRY AGAIN
     *              DEC     BL                      ; DECREMENT OUTER LOOP
     *              JNZ     J_OK1                   ; TRY AGAIN IF NOT ZERO
     *              AND     AL,0CH                  ; BITS 2 & 3 = 0 IF MULTI DATA CAPABLE
     *              JZ      J_OK3                   ; GO IF YES
     *              JMP     SHORT J_FAIL            ; NO MULTIPLE DATA RATE CAPABILITY
     *      J_OK2:
     *              MOV     DX,1F4H                 ; VERIFY MULTIPLE DATA RATE CAPABLE
     *              MOV     AL,055H                 ; WRITE TO THE CYLINDER BYTE
     *              OUT     DX,AL
     *              JMP     $+2                     ; I/O DELAY
     *              IN      AL,DX                   ; CHECK DATA WRITTEN = DATA READ
     *              CMP     AL,055H
     *              JNZ     J_FAIL                  ; GO IF NOT
     *              MOV     AL,0AAH                 ; WRITE ANOTHER PATTERN
     *              OUT     DX,AL
     *              JMP     $+2                     ; I/O DELAY
     *              IN      AL,DX
     *              CMP     AL,0AAH                 ; IS DATA PATTERN THE SAME?
     *              JZ      J_OK3                   ; GO IF SO
     *
     *      J_FAIL:
     *              OR      @MFG_ERR_FLAG+1,DSK_FAIL;       <><><><><><><><><><><><><>
     *                                              ;       <><> DISKETTE FAILED  <><>
     *              MOV     SI,OFFSET E601          ; GET ADDRESS OF MESSAGE
     *              CALL    E_MSG                   ; GO PRINT ERROR MESSAGE
     *              JMP     SHORT F15C              ; SKIP SETUP IF ERROR
     *
     *      J_OK3:
     *              OR      @LASTRATE,DUAL          ; TURN ON DSP/COMBO FLAG
     *
     * @this {FDC}
     * @param {number} port (0x3F1, input only)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number} simulated port value
     */
    inFDCDiagnostic(port, addrFrom)
    {
        let b = 0x50;       // we simply return the expected pattern (01010000B); see code excerpt above
        this.printIO(port, undefined, addrFrom, "DIAG", b);
        return b;
    }

    /**
     * inFDCStatus(port, addrFrom)
     *
     * @this {FDC}
     * @param {number} port (0x3F4, input only)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number} simulated port value
     */
    inFDCStatus(port, addrFrom)
    {
        this.printIO(port, undefined, addrFrom, "STATUS", this.regStatus);
        return this.regStatus;
    }

    /**
     * inFDCData(port, addrFrom)
     *
     * @this {FDC}
     * @param {number} port (0x3F5, input/output)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number} simulated port value
     */
    inFDCData(port, addrFrom)
    {
        let bIn = 0;
        if (this.regDataIndex < this.regDataTotal) {
            bIn = this.regDataArray[this.regDataIndex];
        }
        /**
         * As per the discussion in doCmd(), once the first byte of the Result Phase has been read, the interrupt must be cleared.
         */
        if (this.regOutput & FDC.REG_OUTPUT.INT_ENABLE) {
            if (this.chipset) this.chipset.clearIRR(ChipSet.IRQ.FDC);
        }
        if (this.messageEnabled()) {
            this.printIO(port, undefined, addrFrom, "DATA[" + this.regDataIndex + "]", bIn);
        }
        if (++this.regDataIndex >= this.regDataTotal) {
            this.regStatus &= ~(FDC.REG_STATUS.READ_DATA | FDC.REG_STATUS.BUSY);
            this.regDataIndex = this.regDataTotal = 0;
        }
        return bIn;
    }

    /**
     * outFDCData(port, bOut, addrFrom)
     *
     * @this {FDC}
     * @param {number} port (0x3F5, input/output)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     */
    outFDCData(port, bOut, addrFrom)
    {
        if (this.messageEnabled()) {
            this.printIO(port, bOut, addrFrom, "DATA[" + this.regDataTotal + "]");
        }

        if (this.regDataTotal < this.regDataArray.length) {
            this.regDataArray[this.regDataTotal++] = bOut;
        }
        let bCmd = this.regDataArray[0];
        let bCmdMasked = bCmd & FDC.REG_DATA.CMD.MASK;
        if (FDC.aCmdInfo[bCmdMasked] !== undefined) {
            if (this.regDataTotal >= FDC.aCmdInfo[bCmdMasked].cbReq) {
                this.doCmd();
            }
            return;
        }
        this.printf("unsupported FDC command: %02x\n", bCmd);
        if (MAXDEBUG) this.dbg.stopCPU();
    }

    /**
     * inFDCInput(port, addrFrom)
     *
     * TODO: We're never actually setting any of the head or drive select bits.  I would guess
     * that the latter, at least, should mirror the drive select value written to port 0x3F2.
     *
     * @this {FDC}
     * @param {number} port (0x3F7, input only, MODEL_5170 only)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number} simulated port value
     */
    inFDCInput(port, addrFrom)
    {
        let bIn = this.regInput;
        /**
         * TODO: Determine when the DISK_CHANGE bit is *really* cleared (this is just a guess)
         */
        this.regInput &= ~FDC.REG_INPUT.DISK_CHANGE;
        this.printIO(port, undefined, addrFrom, "INPUT", bIn);
        return bIn;
    }

    /**
     * outFDCControl(port, bOut, addrFrom)
     *
     * @this {FDC}
     * @param {number} port (0x3F7, output only, MODEL_5170 only)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     */
    outFDCControl(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "CONTROL");
        this.regControl  = bOut;
    }

    /**
     * doCmd()
     *
     * @this {FDC}
     */
    doCmd()
    {
        let fIRQ = false;
        this.regDataIndex = 0;
        let bCmd = this.popCmd();
        let drive, bDrive, bHead, c, h, r, n;

        /**
         * NOTE: We currently ignore the FDC.REG_DATA.CMD.SK, FDC.REG_DATA.CMD.MF and FDC.REG_DATA.CMD.MT bits of every command.
         * The only command bit of possible interest down the road might be the FDC.REG_DATA.CMD.MT (Multi-Track); the rest relate
         * to storage format details that we cannot emulate as long as our diskette images contain nothing more than sector
         * data without any formatting data.
         *
         * Similarly, we ignore parameters like SRT, HUT, HLT and the like, since our "motors" don't require physical delays;
         * however, if timing issues become compatibility issues, we'll have to revisit those delays.  In any case, the maximum
         * speed of the simulation will still be limited by various spin-loops in the ROM BIOS that wait prescribed times, so even
         * with infinitely fast hardware, the simulation will never run as fast as it theoretically could, unless we opt to identify
         * those spin-loops and either patch them or skip over them.
         */
        let ledState;
        let bCmdMasked = bCmd & FDC.REG_DATA.CMD.MASK;

        switch (bCmdMasked) {
        case FDC.REG_DATA.CMD.SPECIFY:                      // 0x03
            this.popSRT();                                  // SRT and HUT (encodings?)
            this.popHLT();                                  // HLT and ND (encodings?)
            this.beginResult();
            /**
             * No results are provided by this command, and fIRQ should remain false
             */
            break;

        case FDC.REG_DATA.CMD.SENSE_DRIVE:                  // 0x04
            bDrive = this.popCmd(FDC.TERMS.DS);
            bHead = (bDrive >> 2) & 0x1;
            this.iDrive = (bDrive & 0x3);
            drive = this.aDrives[this.iDrive];
            this.beginResult();
            this.pushST3(drive);
            break;

        case FDC.REG_DATA.CMD.WRITE_DATA:                   // 0x05
            ledState = Panel.STATE.WRITE;
            /* fall through */

        case FDC.REG_DATA.CMD.READ_DATA:                    // 0x06
        case FDC.REG_DATA.CMD.READ_TRACK:                   // 0x02
            if (!ledState) ledState = Panel.STATE.READ;
            bDrive = this.popCmd(FDC.TERMS.DS);             // Drive Select
            bHead = (bDrive >> 2) & 0x1;                    // isolate HD (Head Select) bits
            this.iDrive = (bDrive & 0x3);                   // isolate DS (Drive Select, aka Unit Select) bits
            drive = this.aDrives[this.iDrive];
            drive.bHead = bHead;
            c = drive.bCylinder = this.popCmd(FDC.TERMS.C); // C
            h = this.popCmd(FDC.TERMS.H);                   // H
            /**
             * Controller docs say that H should always match HD, so I assert that, but what if someone
             * made a mistake and didn't program them identically -- what would happen?  Which should we honor?
             */
            this.assert(h == bHead);
            r = drive.bSector = this.popCmd(FDC.TERMS.R);   // R
            n = this.popCmd(FDC.TERMS.N);                   // N
            drive.nBytes = 128 << n;                        // 0 => 128, 1 => 256, 2 => 512, 3 => 1024
            drive.bSectorEnd = this.popCmd(FDC.TERMS.EOT);  // EOT (final sector number on a cylinder)
            this.popCmd(FDC.TERMS.GPL);                     // GPL (spacing between sectors, excluding VCO Sync Field; 3)
            this.popCmd(FDC.TERMS.DTL);                     // DTL (when N is 0, DTL stands for the data length to read out or write into the sector)
            this.setLED(ledState);
            if (drive.disk && drive.disk.nSectors >= 15 && this.regControl != FDC.REG_CONTROL.RATE500K) {
                /**
                 * Originally, I only set RES.INCOMPLETE (which is an ST0 result byte), because that's all that MINIX 1.1
                 * relied upon to differentiate 1.2M media from 360K media, but the COMPAQ DeskPro 386 ROM has a similar
                 * dependency AND requires that an error appear in the ST1 result byte as well -- so I added RES.NO_DATA to
                 * the result code.
                 *
                 * The change for the DeskPro had a further impact: after it issues an INT 13h to read the boot sector, it
                 * probes the diskette to look for any inconsistency between the presumed drive type and the CMOS setting;
                 * for example, when I booted a 1.2M disk (which has 15 sectors/track) in a "1200" drive, the DeskPro 386 ROM
                 * would then attempt to read sector 16, which it assumes would only work in "1440" drives, but since I didn't
                 * return an error (the ROM was using DMA_MODE.TYPE_VERIFY, which doesn't trigger any FDC I/O and consequently
                 * no error), the ROM decided there was a drive type inconsistency and reported a setup error.
                 *
                 * I eliminated the error by changing all DeskPro 386 machine configs to use the "1440" floppy drive type,
                 * which has the added benefit of allowing any size floppy to work with those machines, but that solution is
                 * "papering over" the FDC's failure to report an error reading non-existent sectors when the DMA mode is
                 * TYPE_VERIFY instead of TYPE_READ or TYPE_WRITE.
                 */
                drive.resCode = FDC.REG_DATA.RES.INCOMPLETE | FDC.REG_DATA.RES.NO_DATA;
                fIRQ = true;
            } else {
                if (bCmdMasked != FDC.REG_DATA.CMD.WRITE_DATA) {
                    fIRQ = this.doRead(drive);
                } else {
                    fIRQ = this.doWrite(drive);
                }
            }
            this.pushResults(drive, bCmd, bHead, c, h, r, n);
            break;

        case FDC.REG_DATA.CMD.RECALIBRATE:                  // 0x07
            bDrive = this.popCmd(FDC.TERMS.DS);
            this.iDrive = (bDrive & 0x3);
            drive = this.aDrives[this.iDrive];
            drive.bCylinder = drive.bCylinderSeek = 0;
            drive.resCode = FDC.REG_DATA.RES.SEEK_END | FDC.REG_DATA.RES.TRACK0;
            this.beginResult();                             // no results provided; this command is typically followed by FDC.REG_DATA.CMD.SENSE_INT
            fIRQ = true;
            break;

        case FDC.REG_DATA.CMD.SENSE_INT:                    // 0x08
            drive = this.aDrives[this.iDrive];
            drive.bHead = 0;                                // this command is documented as ALWAYS returning a head address of 0 in ST0; see pushST0()
            this.beginResult();
            this.pushST0(drive);
            this.pushResult(drive.bCylinder, FDC.TERMS.PCN);
            /**
             * For some strange reason, the "DISK_RESET" function in the MODEL_5170_REV3 BIOS resets the
             * adapter and then issues FOUR -- that's right, not ONE but FOUR -- SENSE INTERRUPT STATUS commands
             * in a row, and expects ST0 to contain a different drive number after each command (first 0, then 1,
             * then 2, and finally 3).  What makes this doubly weird is SENSE INTERRUPT STATUS (unlike SENSE
             * DRIVE STATUS) is a drive-agnostic command.
             *
             * Didn't the original PC AT "HFCOMBO" controller limit support to TWO diskette drives max?
             * And even if the PC AT supported other FDC controllers that DID support up to FOUR diskette drives,
             * why should "DISK_RESET" hard-code a 4-drive loop?
             *
             * Well, whatever.  All this head-scratching doesn't change the fact that I apparently have to
             * "auto-increment" the internal drive number (this.iDrive) after each SENSE INTERRUPT STATUS command.
             */
            this.iDrive = (this.iDrive + 1) & 0x3;
            /**
             * No interrupt is generated by this command, so fIRQ should remain false.
             */
            break;

        case FDC.REG_DATA.CMD.READ_ID:                      // 0x0A
            /**
             * This command is used by "SETUP_DBL" in the MODEL_5170_REV3 BIOS to determine if a double-density
             * (40-track) diskette has been inserted in a high-density (80-track) drive; ie, whether "double stepping"
             * is required, since only 40 of the 80 possible "steps" are valid for a double-density diskette.
             *
             * To start, we'll focus on making this work in the normal case (80-track diskette in 80-track drive).
             */
            bDrive = this.popCmd(FDC.TERMS.DS);
            bHead = (bDrive >> 2) & 0x1;
            this.iDrive = (bDrive & 0x3);
            drive = this.aDrives[this.iDrive];
            c = drive.bCylinder;
            h = drive.bHead = bHead;
            r = drive.bSector = 1;
            n = 0;
            drive.resCode = FDC.REG_DATA.RES.NONE;
            if (drive.disk && (drive.sector = drive.disk.seek(drive.bCylinder, drive.bHead, drive.bSector))) {
                n = (drive.sector['length'] >> 8);
            } else {
                /**
                 * TODO: Determine the appropriate response code(s) for the possible errors that can occur here.
                 */
                drive.resCode = FDC.REG_DATA.RES.NOT_READY | FDC.REG_DATA.RES.INCOMPLETE;
            }
            this.pushResults(drive, bCmd, bHead, c, h, r, n);
            fIRQ = true;
            break;

        case FDC.REG_DATA.CMD.FORMAT_TRACK:                 // 0x0D
            bDrive = this.popCmd(FDC.TERMS.DS);
            bHead = (bDrive >> 2) & 0x1;
            this.iDrive = (bDrive & 0x3);
            drive = this.aDrives[this.iDrive];
            c = drive.bCylinder;
            h = drive.bHead = bHead;
            r = 1;
            n = this.popCmd(FDC.TERMS.N);                   // N
            drive.nBytes = 128 << n;                        // 0 => 128, 1 => 256, 2 => 512, 3 => 1024 (bytes/sector)
            drive.bSectorEnd = this.popCmd(FDC.TERMS.SC);   // SC (sectors/track)
            this.popCmd(FDC.TERMS.GPL);                     // GPL (spacing between sectors, excluding VCO Sync Field; 3)
            drive.bFiller = this.popCmd(FDC.TERMS.D);       // D (filler byte)
            this.doFormat(drive);
            this.pushResults(drive, bCmd, bHead, c, h, r, n);
            fIRQ = true;
            break;

        case FDC.REG_DATA.CMD.SEEK:                         // 0x0F
            bDrive = this.popCmd(FDC.TERMS.DS);
            bHead = (bDrive >> 2) & 0x1;
            this.iDrive = (bDrive & 0x3);
            drive = this.aDrives[this.iDrive];
            drive.bHead = bHead;
            /**
             * As discussed in initDrive(), we can no longer simply set bCylinder to the specified NCN;
             * instead, we must calculate the delta between bCylinderSeek and the NCN, and adjust bCylinder
             * by that amount.  Then we simply move the NCN into bCylinderSeek without any range checking.
             *
             * Since bCylinder is now expressly defined as the "physical" cylinder number, it must never
             * be allowed to exceed the physical boundaries of the drive (ie, never lower than 0, and never
             * greater than or equal to nCylinders).
             */
            c = this.popCmd(FDC.TERMS.NCN);
            drive.bCylinder += c - drive.bCylinderSeek;
            if (drive.bCylinder < 0) drive.bCylinder = 0;
            if (drive.bCylinder >= drive.nCylinders) drive.bCylinder = drive.nCylinders - 1;
            drive.bCylinderSeek = c;
            drive.resCode = FDC.REG_DATA.RES.SEEK_END;
            /**
             * TODO: To properly support ALL the ST3 result bits (not just TRACK0), we need a resCode
             * update() function that all FDC commands can use.  This code is merely sufficient to get us
             * through the "DSKETTE_SETUP" gauntlet in the MODEL_5170 BIOS.
             */
            if (!drive.bCylinder) {
                drive.resCode |= FDC.REG_DATA.RES.TRACK0;
            }
            this.beginResult();                             // like FDC.REG_DATA.CMD.RECALIBRATE, no results are provided
            fIRQ = true;
            break;

        default:
            this.printf("unsupported FDC operation: %02x\n", bCmd);
            if (MAXDEBUG) this.dbg.stopCPU();
            break;
        }

        if (this.regDataTotal > 0) {
            this.regStatus |= (FDC.REG_STATUS.READ_DATA | FDC.REG_STATUS.BUSY);
        }

        /**
         * After the Execution Phase (eg, DMA Terminal Count has occurred, or the EOT sector has been read/written),
         * an interrupt is supposed to occur, signaling the beginning of the Result Phase.  Once the first byte of the
         * result has been read, the interrupt is cleared (see inFDCData).
         *
         * TODO: Technically, interrupt request status should be cleared by the FDC.REG_DATA.CMD.SENSE_INT command; in fact,
         * if that command is issued and no interrupt was pending, then FDC.REG_DATA.RES.INVALID should be returned (via ST0).
         *
         * NOTE: When the COMPAQ DeskPro 386 BIOS attempts to read from an empty diskette drive, it waits quite a while
         * before giving up waiting for an interrupt, which results in a rather lengthy boot time.  That's probably my fault,
         * but without an actual DeskPro 386 to play with, I'm not sure what I might be doing wrong.
         *
         * However, it turns out there's a simple work-around: always deliver an interrupt after the READ command on the
         * the DeskPro 386, because it appears to actually pay attention to the NOT_READY bit in the ST0 result byte.  On
         * IBM machines, I still do not deliver an interrupt in the NOT_READY case, because for the IBM BIOS to return
         * a "not ready" (aka TIME_OUT) error, its WAIT_INT function has to actually time out (ie, no interrupt can occur).
         */
        if (!drive || (drive.resCode & FDC.REG_DATA.RES.NOT_READY) && this.chipset.model < ChipSet.MODEL_COMPAQ_DESKPRO386) {
            fIRQ = false;
        }

        /**
         * When the Windows 95 HSFLOP ("High-Speed Floppy") VxD performs its diskette change-line detection logic
         * ("determine_changeline"), it sets a special callback ("dcl_callback_int_entry") for its interrupt handler
         * to invoke, then issues a READ_ID command, and then sets a bit telling its interrupt handler to expect an
         * interrupt ("FLP_NEC_INT_EXPECTED").
         *
         * Technically, it should have set *both* "dcl_callback_int_entry" *and* "FLP_NEC_INT_EXPECTED" *before*
         * issuing the READ_ID command, but I imagine the author assumed all was fine, since interrupts had been
         * disabled with a "cli" beforehand and had not been re-enabled with an "sti" yet.  But alas, the function
         * used to the issue the READ_ID command ("NecOut") immediately re-enabled interrupts.
         *
         * So, if we request an interrupt immediately after the READ_ID command, the interrupt handler will think
         * our interrupt is spurious (ie, not EXPECTED).  In this particular case, there are only about 10 instructions
         * executed from the time READ_ID is issued until the "FLP_NEC_INT_EXPECTED" bit is set, but I'm going to
         * add a little padding to that, in part because I wouldn't be surprised if there are other places where a
         * similar assumption exists (ie, either that "NecOut" leaves interrupts disabled, or simply that the floppy
         * controller is an inherently slow device).
         *
         * TODO: Determine why the Football prototype disk fails to boot if we specify a larger delay (eg, 32) and
         * why TopView 1.10 hangs when the delay is set to 16.  I've worked around those questions for now, by simply
         * limiting the delay to the READ_ID command.
         *
         * UPDATE: Those aforementioned issues with Football and TopView may have been entirely due to a problem
         * with an earlier version of requestInterrupt(), which had an additional fCondition parameter into which I
         * was passing the entire "drive && fIRQ && !(drive.resCode & FDC.REG_DATA.RES.NOT_READY)" expression.  Note
         * that if "drive" was undefined, the entire expression would be "undefined", which I assumed would translate
         * to a "falsy" fCondition, but the fCondition parameter was also declared with a default value of true,
         * and default values are used whenever NO value is supplied OR an "undefined" value is supplied.  Oops.
         */
        if (fIRQ) {
            this.requestInterrupt(bCmdMasked == FDC.REG_DATA.CMD.READ_ID? 16 : 0);
        }
    }

    /**
     * pushResults(drive, bCmd, bHead, c, h, r, n)
     *
     * @this {FDC}
     * @param {Object} drive
     * @param {number} bCmd
     * @param {number} bHead
     * @param {number} c
     * @param {number} h
     * @param {number} r
     * @param {number} n
     */
    pushResults(drive, bCmd, bHead, c, h, r, n)
    {
        this.beginResult();
        this.pushST0(drive);
        this.pushST1(drive);
        this.pushST2(drive);
        /**
         * NOTE: I used to set the following C/H/R/N results using the values that advanceSector() had "advanced"
         * them to, which seemed logical but was technically incorrect.  For non-multi-track reads, they should match
         * the programmed C/H/R/N values, except when EOT has been reached, in which case C = C + 1 and R = 1.
         *
         * For multi-track, the LSB of H should be complemented whenever EOT has been reached, which I "informally"
         * detect by testing if the drive's current bCylinder and/or bHead positions advanced to a new cylinder or head,
         * and apparently, C should never be advanced if H was initially 0.
         *
         * I don't do strict EOT comparisons here or elsewhere, because it allows the controller to work with a wider
         * range of disks (eg, "fake" XDF disk images that contain 23 512-byte sectors/track).
         *
         * Original version of this function:
         * https://github.com/jeffpar/pcjs.v1/commit/6110bb6a9f2eb992acb476707376ef5116afeee5#diff-d97e0120475cfb16e63a3ca1fa0e0c49121a314e80e9039081371730e6f2631b
         */
        let i = 0;
        if (c != drive.bCylinder || h != drive.bHead) {
            i = r = 1;
        }
        if (bCmd & FDC.REG_DATA.CMD.MT) {
            h ^= i;
            if (!bHead) i = 0;
            r = drive.bSector;                          // REQUIRED in order for MINIX 1.1 to load ROOT diskette
            if (drive.disk && drive.disk.diskData && drive.disk.diskData[c] && drive.disk.diskData[c][h] && drive.disk.diskData[c][h][r-1]) {
                r = drive.disk.diskData[c][h][r-1][Disk.SECTOR.ID];
            }
        }
        c += i;
        this.pushResult(c, FDC.TERMS.C);                // formerly drive.bCylinder
        this.pushResult(h, FDC.TERMS.H);                // formerly drive.bHead
        this.pushResult(r, FDC.TERMS.R);                // formerly drive.bSector
        this.pushResult(n, FDC.TERMS.N);
    }

    /**
     * popCmd(name)
     *
     * @this {FDC}
     * @param {string|undefined} [name]
     * @returns {number}
     */
    popCmd(name)
    {
        this.assert((!this.regDataIndex || name !== undefined) && this.regDataIndex < this.regDataTotal);
        let bCmd = this.regDataArray[this.regDataIndex];
        if (DEBUG) {
            let bCmdMasked = bCmd & FDC.REG_DATA.CMD.MASK;
            if (!name && !this.regDataIndex && FDC.aCmdInfo[bCmdMasked]) name = FDC.aCmdInfo[bCmdMasked].name;
            this.printf(MESSAGE.PORT + MESSAGE.FDC, "%s.popCmd(%s): %#04x\n", this.idComponent, (name || this.regDataIndex), bCmd);
        }
        this.regDataIndex++;
        return bCmd;
    }

    /**
     * popHLT()
     *
     * NOTE: This byte is actually a combination of HLT (Head Load Time) and ND (Non-DMA Mode)
     *
     * @this {FDC}
     */
    popHLT()
    {
        this.popCmd(FDC.TERMS.HLT);
     // this.nHLT = this.popCmd(FDC.TERMS.HLT);
    }

    /**
     * popSRT()
     *
     * NOTE: This byte is actually a combination of SRT (Step Rate Time) and HUT (Head Unload Time)
     *
     * @this {FDC}
     */
    popSRT()
    {
        this.popCmd(FDC.TERMS.SRT);
     // this.nSRT = this.popCmd(FDC.TERMS.SRT);
    }

    /**
     * requestInterrupt(nDelay)
     *
     * Request an FDC interrupt, as long as INT_ENABLE is set (and the optional supplied condition, if any, is true).
     *
     * @this {FDC}
     * @param {number} [nDelay]
     */
    requestInterrupt(nDelay)
    {
        if (this.regOutput & FDC.REG_OUTPUT.INT_ENABLE) {
            if (this.chipset) this.chipset.setIRR(ChipSet.IRQ.FDC, nDelay);
        }
    }

    /**
     * beginResult()
     *
     * @this {FDC}
     */
    beginResult()
    {
        this.setLED();
        this.regDataIndex = this.regDataTotal = 0;
    }

    /**
     * pushResult(bResult, name)
     *
     * @this {FDC}
     * @param {number} bResult
     * @param {string|undefined} [name]
     */
    pushResult(bResult, name)
    {
        if (DEBUG) this.printf(MESSAGE.PORT + MESSAGE.FDC, "%s.pushResult(%s): %#04x\n", this.idComponent, (name || this.regDataTotal), bResult);
        this.assert(!(bResult & ~0xff));
        this.regDataArray[this.regDataTotal++] = bResult;
    }

    /**
     * pushST0(drive)
     *
     * @this {FDC}
     * @param {Object} drive
     */
    pushST0(drive)
    {
        this.pushResult(drive.iDrive | (drive.bHead << 2) | (drive.resCode & FDC.REG_DATA.RES.ST0), FDC.TERMS.ST0);
    }

    /**
     * pushST1(drive)
     *
     * @this {FDC}
     * @param {Object} drive
     */
    pushST1(drive)
    {
        this.pushResult((drive.resCode & FDC.REG_DATA.RES.ST1) >>> 8, FDC.TERMS.ST1);
    }

    /**
     * pushST2(drive)
     *
     * @this {FDC}
     * @param {Object} drive
     */
    pushST2(drive)
    {
        this.pushResult((drive.resCode & FDC.REG_DATA.RES.ST2) >>> 16, FDC.TERMS.ST2);
    }

    /**
     * pushST3(drive)
     *
     * @this {FDC}
     * @param {Object} drive
     */
    pushST3(drive)
    {
        this.pushResult((drive.resCode & FDC.REG_DATA.RES.ST3) >>> 24, FDC.TERMS.ST3);
    }

    /**
     * doDMARead(drive, b, done)
     *
     * @this {FDC}
     * @param {Object} drive
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
        if (DEBUG) this.printf("%s.doDMARead(): invalid DMA acknowledgement\n", this.idComponent);
        done(-1, false);
    }

    /**
     * doDMAWrite(drive, b)
     *
     * @this {FDC}
     * @param {Object} drive
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
        if (DEBUG) this.printf("%s.doDMAWrite(): invalid DMA acknowledgement\n", this.idComponent);
        return -1;
    }

    /**
     * doDMAFormat(drive, b)
     *
     * @this {FDC}
     * @param {Object} drive
     * @param {number} b
     * @returns {number}
     */
    doDMAFormat(drive, b)
    {
        if (b !== undefined && b >= 0) {
            return this.writeFormat(drive, b);
        }
        /**
         * The DMA controller should be GIVING us data, not ASKING for data; this suggests an internal DMA miscommunication
         */
        if (DEBUG) this.printf("%s.doDMAFormat(): invalid DMA acknowledgement\n", this.idComponent);
        return -1;
    }

    /**
     * doRead(drive)
     *
     * @this {FDC}
     * @param {Object} drive
     * @returns {boolean}
     */
    doRead(drive)
    {
        /**
         * With only NOT_READY and INCOMPLETE set, an empty drive causes DOS to report "General Failure";
         * with the addition of NO_DATA, DOS reports "Sector not found".  The traditional "Drive not ready"
         * error message is not triggered by anything we return here, but simply by BIOS commands timing out.
         */
        drive.resCode = FDC.REG_DATA.RES.NOT_READY | FDC.REG_DATA.RES.INCOMPLETE;
        if (drive.disk) {
            if (this.messageEnabled()) {
                let a = this.chipset.getDMAState(ChipSet.DMA_FDC);
                this.printf("%s.doRead(drive=%d,CHS=%d:%d:%d,LBA=%d,addr=%#X,len=%#X)\n",
                            this.idComponent, drive.iDrive, drive.bCylinder, drive.bHead, drive.bSector,
                            (drive.bCylinder * (drive.disk.nHeads * drive.disk.nSectors) + drive.bHead * drive.disk.nSectors + drive.bSector-1),
                            a[0], a[1]+1);
            }
            if (drive.bHead > drive.nHeads - 1) {
                drive.resCode = FDC.REG_DATA.RES.NO_DATA | FDC.REG_DATA.RES.INCOMPLETE;
                return true;
            }
            drive.sector = null;
            drive.resCode = FDC.REG_DATA.RES.NONE;
            if (this.chipset) {
                if (!drive.bCylinder && !drive.bHead && drive.bSector == 1) {
                    if (!drive.fBootable && this.chipset.getDMAState(ChipSet.DMA_FDC)[0] == 0x7C00) {
                        return false;
                    }
                }
                this.chipset.connectDMA(ChipSet.DMA_FDC, this, 'dmaRead', drive);
                this.chipset.requestDMA(ChipSet.DMA_FDC);
            }
        }
        return true;
    }

    /**
     * doWrite(drive)
     *
     * @this {FDC}
     * @param {Object} drive
     * @returns {boolean}
     */
    doWrite(drive)
    {
        drive.resCode = FDC.REG_DATA.RES.NOT_READY | FDC.REG_DATA.RES.INCOMPLETE;
        if (drive.disk) {
            if (this.messageEnabled()) {
                let a = this.chipset.getDMAState(ChipSet.DMA_FDC);
                this.printf("%s.doWrite(drive=%d,CHS=%d:%d:%d,LBA=%d,addr=%#X,len=%#X)\n",
                            this.idComponent, drive.iDrive, drive.bCylinder, drive.bHead, drive.bSector,
                            (drive.bCylinder * (drive.disk.nHeads * drive.disk.nSectors) + drive.bHead * drive.disk.nSectors + drive.bSector-1),
                            a[0], a[1]+1);
            }
            if (drive.bHead > drive.nHeads - 1) {
                drive.resCode = FDC.REG_DATA.RES.NO_DATA | FDC.REG_DATA.RES.INCOMPLETE;
                return true;
            }
            if (!drive.fWritable || drive.disk.fWriteProtected) {
                drive.resCode = FDC.REG_DATA.RES.NOT_WRITABLE | FDC.REG_DATA.RES.INCOMPLETE;
                return true;
            }
            drive.sector = null;
            drive.resCode = FDC.REG_DATA.RES.NONE;
            if (this.chipset) {
                this.chipset.connectDMA(ChipSet.DMA_FDC, this, 'dmaWrite', drive);
                this.chipset.requestDMA(ChipSet.DMA_FDC);
            }
        }
        return true;
    }

    /**
     * doFormat(drive)
     *
     * drive is initialized by doCmd() to the following extent:
     *
     *      drive.bHead (ignored)
     *      drive.nBytes (bytes/sector)
     *      drive.bSectorEnd (sectors/track)
     *      drive.bFiller (fill byte)
     *
     * and we expect the DMA controller to provide C, H, R and N (ie, 4 bytes) for each sector to be formatted.
     *
     * @this {FDC}
     * @param {Object} drive
     */
    doFormat(drive)
    {
        drive.resCode = FDC.REG_DATA.RES.NOT_READY | FDC.REG_DATA.RES.INCOMPLETE;
        /**
         * NOTE: Strangely, we must ignore the number of drive heads both here and in seek(); otherwise,
         * PC DOS 1.10 "FORMAT /1" will fail, even though "/1" means format it as a single-sided diskette.
         *
         *      if (drive.bHead > drive.nHeads - 1) {
         *          drive.resCode = FDC.REG_DATA.RES.NO_DATA | FDC.REG_DATA.RES.INCOMPLETE;
         *          return;
         *      }
         */
        if (drive.disk) {
            drive.sector = null;
            drive.resCode = FDC.REG_DATA.RES.NONE;
            if (this.chipset) {
                drive.cbFormat = 0;
                drive.abFormat = new Array(4);
                drive.bFormatting = true;
                drive.cSectorsFormatted = 0;
                this.chipset.connectDMA(ChipSet.DMA_FDC, this, 'dmaFormat', drive);
                this.chipset.requestDMA(ChipSet.DMA_FDC);
                drive.bFormatting = false;
            }
        }
    }

    /**
     * readData(drive, done)
     *
     * The following drive properties must have been setup prior to our first call:
     *
     *      drive.bHead
     *      drive.bCylinder
     *      drive.bSector
     *      drive.sector (initialized to null)
     *
     * On the first readData() request, since drive.sector will be null, we ask the Disk object to look
     * up the first sector of the request.  We then ask the Disk for bytes from that sector until the sector
     * is exhausted, and then we look up the next sector and continue the process.
     *
     * NOTE: Since the FDC isn't aware of the extent of the transfer, all readData() can do is return bytes
     * until the current track (or, in the case of a multi-track request, the current cylinder) has been exhausted.
     *
     * TODO: Research the requirements, if any, for multi-track I/O and determine what else needs to be done.
     *
     * @this {FDC}
     * @param {Object} drive
     * @param {function(number,boolean,Object,number)} done (number is next available byte from drive, or -1 if no more bytes available)
     */
    readData(drive, done)
    {
        let b = -1;
        let obj = null, off = 0;    // these variables are purely for BACKTRACK purposes

        /**
         * Our JSON-encoded disk images now support certain copy-protection-related features, such as sectors
         * with non-standard sizes (ie, other than 512), non-sequential sector IDs (see IBM Multiplan 1.00), and
         * sectors with forced CRC errors (see Microsoft Word 1.15).
         *
         * The latter requires that we check our sectors for the optional *dataError* property and set resCode
         * accordingly; logically, that probably shouldn't happen until just after the last byte of the sector
         * has been transferred, but we don't really know when that happens, since we're just calling disk.read()
         * as many times as the DMA controller count indicates.
         *
         * So we simply set resCode to CRC_ERROR as soon as we notice a sector with *dataError* set, and we no
         * longer bypass the entire operation simply because resCode has been set to that value.
         *
         * TODO: Someday all possible FDC error conditions need to be tested on a real controller, because this
         * code is becoming a bit too crufty.
         */
        if ((!drive.resCode || drive.resCode == (FDC.REG_DATA.RES.CRC_ERROR | FDC.REG_DATA.RES.INCOMPLETE)) && drive.disk) {
            do {
                if (drive.sector) {
                    off = drive.iByte;
                    if ((b = drive.disk.read(drive.sector, drive.iByte++)) >= 0) {
                        obj = drive.sector;
                        break;
                    }
                }
                /**
                 * Locate the next sector, and then try reading again.
                 */
                drive.sector = drive.disk.seek(drive.bCylinder, drive.bHead, drive.bSector, drive.sectorPrev);
                if (!drive.sector) {
                    drive.resCode = FDC.REG_DATA.RES.NO_DATA | FDC.REG_DATA.RES.INCOMPLETE;
                    break;
                }
                drive.sectorPrev = drive.sector;
                if (drive.sector['dataError']) {
                    drive.resCode = FDC.REG_DATA.RES.CRC_ERROR | FDC.REG_DATA.RES.INCOMPLETE;
                }
                drive.iByte = 0;
                /**
                 * We "pre-advance" bSector et al now, instead of waiting to advance it right before the seek().
                 * This allows the initial call to readData() to perform a seek without triggering an unwanted advance.
                 */
                this.advanceSector(drive);
            } while (true);
        }
        done(b, false, obj, off);
    }

    /**
     * writeData(drive, b)
     *
     * The following drive properties must have been setup prior to our first call:
     *
     *      drive.bHead
     *      drive.bCylinder
     *      drive.bSector
     *      drive.sector (initialized to null)
     *
     * On the first writeData() request, since drive.sector will be null, we ask the Disk object to look
     * up the first sector of the request.  We then send the Disk bytes for that sector until the sector
     * is full, and then we look up the next sector and continue the process.
     *
     * NOTE: Since the FDC isn't aware of the extent of the transfer, all writeData() can do is accept bytes
     * until the current track (or, in the case of a multi-track request, the current cylinder) has been exhausted.
     *
     * TODO: Research the requirements, if any, for multi-track I/O and determine what else needs to be done.
     *
     * @this {FDC}
     * @param {Object} drive
     * @param {number} b containing next byte to write
     * @returns {number} (b unchanged; return -1 if command should be terminated)
     */
    writeData(drive, b)
    {
        if (drive.resCode || !drive.disk) return -1;
        do {
            if (drive.sector) {
                if (drive.sector['dataError'] && drive.iByte >= drive.sector['dataError']) {
                    break;
                }
                if (drive.disk.write(drive.sector, drive.iByte++, b)) break;
            }
            /**
             * Locate the next sector, and then try writing again.
             */
            drive.sector = drive.disk.seek(drive.bCylinder, drive.bHead, drive.bSector, drive.sectorPrev);
            if (!drive.sector) {
                /**
                 * TODO: Determine whether this should be FDC.REG_DATA.RES.CRC_ERROR or FDC.REG_DATA.RES.DATA_FIELD
                 */
                drive.resCode = FDC.REG_DATA.RES.CRC_ERROR | FDC.REG_DATA.RES.INCOMPLETE;
                b = -1;
                break;
            }
            drive.sectorPrev = drive.sector;
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
     * This increments the sector number; when the sector number reaches drive.nDiskSectors on the current track, we
     * increment drive.bHead and reset drive.bSector, and when drive.bHead reaches drive.nDiskHeads, we reset drive.bHead
     * and increment drive.bCylinder.
     *
     * @this {FDC}
     * @param {Object} drive
     */
    advanceSector(drive)
    {
        this.assert(drive.bCylinder < drive.nDiskCylinders);
        drive.bSector++;
        let bSectorStart = 1;
        if (drive.bSector >= drive.nDiskSectors + bSectorStart) {
            drive.bSector = bSectorStart;
            drive.bHead++;
            if (drive.bHead >= drive.nDiskHeads) {
                drive.bHead = 0;
                drive.bCylinder++;
            }
        }
    }

    /**
     * writeFormat(drive, b)
     *
     * @this {FDC}
     * @param {Object} drive
     * @param {number} b containing a format command byte
     * @returns {number} (b if successful, -1 if command should be terminated)
     */
    writeFormat(drive, b)
    {
        if (drive.resCode) return -1;
        drive.abFormat[drive.cbFormat++] = b;
        if (drive.cbFormat == drive.abFormat.length) {
            drive.bCylinder = drive.abFormat[0];    // C
            drive.bHead = drive.abFormat[1];        // H
            drive.bSector = drive.abFormat[2];      // R
            drive.nBytes = 128 << drive.abFormat[3];// N (0 => 128, 1 => 256, 2 => 512, 3 => 1024)
            drive.cbFormat = 0;
            if (this.messageEnabled()) {
                this.printf("%s.writeFormat(drive=%d,CHS=%d:%d:%d,len=%d)\n",
                            this.idComponent, drive.iDrive, drive.bCylinder, drive.bHead, drive.bSector, drive.nBytes);
            }
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
     * FDC.init()
     *
     * This function operates on every HTML element of class "fdc", extracting the
     * JSON-encoded parameters for the FDC constructor from the element's "data-value"
     * attribute, invoking the constructor to create a FDC component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        let aeFDC = Component.getElementsByClass(APPCLASS, "fdc");
        for (let iFDC = 0; iFDC < aeFDC.length; iFDC++) {
            let eFDC = aeFDC[iFDC];
            let parmsFDC = Component.getComponentParms(eFDC);
            let fdc = new FDC(parmsFDC);
            Component.bindComponentControls(fdc, eFDC, APPCLASS);
        }
    }
}

/**
 * Initialize every Floppy Drive Controller (FDC) module on the page.
 */
WebLib.onInit(FDC.init);
