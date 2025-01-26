/**
 * @fileoverview Implements the RX11 Disk Controller (for RX01 Diskettes)
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * Portions adapted from the JavaScript PDP 11/70 Emulator written by Paul Nankervis
 * <paulnank@hotmail.com> at <http://skn.noip.me/pdp11/pdp11.html> with permission.
 */

import DriveController from "./drive.js";
import MESSAGE from "./message.js";
import StrLib from "../../../../modules/v2/strlib.js";
import { DEBUG, PDP11 } from "./defines.js";

/**
 * @class RX11
 * @unrestricted
 */
export default class RX11 extends DriveController {
    /**
     * RX11(parms)
     *
     * The RX11 component has the following component-specific (parms) properties:
     *
     *      autoMount: one or more JSON-encoded objects, each containing 'name' and 'path' properties
     *
     * The RX11 Disk Controller controls up to two RX01 disk drives, which in turn read/write
     * disk cartridges.  See [RX11 Disk Controller Configuration Files](/devices/pdp11/rx11/).
     *
     * RX01 diskettes are single-sided, with 77 tracks per side, 26 sectors per track, and a sector size
     * of 128 bytes, for a total capacity of 250Kb (256,256 bytes).  See [RX01 Disk Images](/disks/dec/rx01/).
     *
     * @param {Object} parms
     */
    constructor(parms)
    {
        super("RX11", parms, MESSAGE.RX11, PDP11.RX11, PDP11.RX11.RX01, RX11.UNIBUS_IOTABLE);

        /*
         * Define all the registers required for this controller.
         */
        this.regRXCS = this.regRXDB = 0;
        this.regRXTA = this.regRXSA = this.regRXES = this.regError = 0;

        /*
         * Whenever a command is issued, we record the function code internally here, and when the command
         * is completed, we set the internal function code back to UNUSED.
         */
        this.funCode = RX11.FUNC.UNUSED;        // no function in progress (device is idle)

        this.iBuffer = 0;
        /*
         * We use the new ES6 fill() method to ensure that the buffer returns something reasonable if, for some
         * strange reason, the first command we receive is an Empty Buffer command.
         */
        this.abBuffer = new Array(128).fill(0);
    }

    /**
     * initController(aRegs)
     *
     * @this {RX11}
     * @param {Array} [aRegs]
     * @returns {boolean} true if successful, false if failure
     */
    initController(aRegs)
    {
        if (!aRegs) {
            this.regRXCS = 0;
            this.regRXDB = 0;
            this.regRXTA = 1;
            this.regRXSA = 1;
            this.regRXES = 0;
            this.regError = 0;
            this.funCode = RX11.FUNC.READ;
            this.iBuffer = 0;
            this.cpu.clearIRQ(this.irq);
            this.readSector();
        }
        else {
            /*
             * ES6 ALERT: A handy destructuring assignment, which makes it easy to perform the inverse
             * of what saveController() does when it collects a bunch of object properties into an array.
             */
            [
                this.regRXCS,
                this.regRXDB,
                this.regRXTA,
                this.regRXSA,
                this.regRXES,
                this.regError,
                this.funCode,
                this.iBuffer,
                this.abBuffer
            ] = aRegs;
        }
        return true;
    }

    /**
     * saveController()
     *
     * Basically, the inverse of initController().
     *
     * @this {RX11}
     * @returns {Array}
     */
    saveController()
    {
        return [
            this.regRXCS,
            this.regRXDB,
            this.regRXTA,
            this.regRXSA,
            this.regRXES,
            this.regError,
            this.funCode,
            this.iBuffer,
            this.abBuffer
        ];
    }

    /**
     * notifyLoad(iDrive)
     *
     * Called whenever DriveController has loaded a new disk into the specified drive.
     *
     * We're interested in this so that whenever a disk change occurs for drive 0, we can automatically
     * refill the sector buffer with the data from sector 1 from track 1.
     *
     * @this {RX11}
     * @param {number} iDrive
     */
    notifyLoad(iDrive)
    {
        if (iDrive == 0) this.initController();
    }

    /**
     * notifyUnload(iDrive)
     *
     * Called whenever DriveController has unloaded a disk from the specified drive.
     *
     * @this {RX11}
     * @param {number} iDrive
     */
    notifyUnload(iDrive)
    {
    }

    /**
     * processCommand()
     *
     * @this {RX11}
     */
    processCommand()
    {
        this.funCode = this.regRXCS & RX11.RXCS.FUNC;
        this.regRXCS &= ~(RX11.RXCS.GO | RX11.RXCS.TR | RX11.RXCS.DONE | RX11.RXCS.ERR);
        this.cpu.clearIRQ(this.irq);

        this.printf(MESSAGE.ADDR, "%s.processCommand(%s)\n", this.type, RX11.FUNCS[this.funCode >> 1]);

        switch(this.funCode) {

        case RX11.FUNC.FILL:
        case RX11.FUNC.EMPTY:
        case RX11.FUNC.READ:
        case RX11.FUNC.WRITE:
        case RX11.FUNC.WRDEL:
            this.initCommand();
            break;

        case RX11.FUNC.RDSTAT:
            this.readStatus();
            break;

        case RX11.FUNC.RDERR:
            this.readError();
            break;

        default:
            this.assert(this.funCode == RX11.FUNC.UNUSED);
            break;
        }
    }

    /**
     * initCommand()
     *
     * @this {RX11}
     */
    initCommand()
    {
        this.iBuffer = 0;
    }

    /**
     * doneCommand(nError)
     *
     * @this {RX11}
     * @param {number} [nError]
     */
    doneCommand(nError)
    {
        if (nError) {
            this.regError = nError;
            this.regRXDB = this.regRXES;
            this.regRXCS |= RX11.RXCS.ERR;
        }
        this.funCode = RX11.FUNC.UNUSED;
        this.regRXCS |= RX11.RXCS.DONE;
        if (this.regRXCS & RX11.RXCS.IE) this.cpu.setIRQ(this.irq);
    }

    /**
     * readData(drive, iCylinder, iHead, iSector, nWords, addr, inc, fCheck, done)
     *
     * This function is required ONLY if we want to support DriveController's bootSelectedDisk() function (and we do).
     *
     * @this {RX11}
     * @param {Object} drive
     * @param {number} iCylinder
     * @param {number} iHead
     * @param {number} iSector
     * @param {number} nWords
     * @param {number} addr
     * @param {number} inc (normally 2, unless inhibited, in which case it's 0)
     * @param {boolean} [fCheck]
     * @param {function(...)} [done]
     * @returns {boolean|number} true if complete, false if queued (or if no done() is supplied, the error code, if any)
     */
    readData(drive, iCylinder, iHead, iSector, nWords, addr, inc, fCheck, done)
    {
        var nError = 0;
        var disk = drive.disk;
        var sector = null, ibSector;

        this.printf(MESSAGE.ADDR, "%s.readData(%d:%d:%d) %o-%o\n", this.type, iCylinder, iHead, iSector, addr, addr + (nWords << 1));

        if (!disk) {
            nError = drive.iDrive?  RX11.ERROR.HOME1 : RX11.ERROR.HOME0;
            nWords = 0;
        }

        var sWords = "";
        while (nWords) {
            if (!sector) {
                if (iCylinder >= disk.nCylinders) {
                    nError = RX11.ERROR.NO_TRACK;
                    break;
                }
                sector = disk.seek(iCylinder, iHead, iSector + 1);
                if (!sector) {
                    nError = RX11.ERROR.NO_SECTOR;
                    break;
                }
                ibSector = 0;
                if (++iSector >= disk.nSectors) {
                    iSector = 0;
                    if (++iHead >= disk.nHeads) {
                        iHead = 0;
                        ++iCylinder;
                    }
                }
            }
            var b0, b1;
            if ((b0 = disk.read(sector, ibSector++)) < 0 || (b1 = disk.read(sector, ibSector++)) < 0) {
                nError = RX11.ERROR.NO_DATA;
                break;
            }
            var data = b0 | (b1 << 8);
            this.bus.setWordDirect(this.cpu.mapUnibus(addr), data);
            if (DEBUG && this.messageEnabled(MESSAGE.READ)) {
                if (!sWords) sWords = StrLib.toOct(addr) + ": ";
                sWords += StrLib.toOct(data) + ' ';
                if (sWords.length >= 64) {
                    console.log(sWords);
                    sWords = "";
                }
            }
            if (ibSector >= disk.cbSector) sector = null;
            addr += inc;
            nWords--;
        }

        return done? done(nError, iCylinder, iHead, iSector, nWords, addr) : nError;
    }

    /**
     * readSector()
     *
     * @this {RX11}
     */
    readSector()
    {
        var nError = 0;
        var iDrive = (this.regRXCS & RX11.RXCS.UNIT)? 1 : 0;
        var drive = this.aDrives[iDrive];
        var disk = drive && drive.disk;
        var iCylinder = this.regRXTA & RX11.RXTA.MASK, iHead = 0, nSector = this.regRXSA & RX11.RXSA.MASK;

        this.regRXES &= ~(RX11.RXES.CRC | RX11.RXES.PARITY | RX11.RXES.DEL | RX11.RXES.DRDY);

        if (disk) {
            this.regRXES |= RX11.RXES.DRDY;
            this.printf(MESSAGE.ADDR, "%s.readSector(%d:%d:%d)\n", this.type, iCylinder, iHead, nSector);
            this.assert(nSector);       // RX sector numbers (unlike RK and RL) are supposed to be 1-based
            var sector = disk.seek(iCylinder, iHead, nSector, true);
            if (sector) {
                var i = 0, nBytes = this.abBuffer.length;
                while (i < nBytes) {
                    var b = disk.read(sector, i);
                    if (b < 0) {
                        nError = RX11.ERROR.NO_DATA;
                        break;
                    }
                    this.abBuffer[i++] = b;
                }
                if (sector.deleted) this.regRXES |= RX11.RXES.DEL;
            } else {
                nError = RX11.ERROR.NO_SECTOR;
            }
        } else {
            nError = iDrive? RX11.ERROR.HOME1 : RX11.ERROR.HOME0;
        }
        this.doneCommand(nError);
    }

    /**
     * writeSector(fDeleted)
     *
     * @this {RX11}
     * @param {boolean} fDeleted
     */
    writeSector(fDeleted)
    {
        var nError = 0;
        var iDrive = (this.regRXCS & RX11.RXCS.UNIT)? 1 : 0;
        var drive = this.aDrives[iDrive];
        var disk = drive && drive.disk;
        var iCylinder = this.regRXTA & RX11.RXTA.MASK, iHead = 0, nSector = this.regRXSA & RX11.RXSA.MASK;

        this.regRXES &= ~(RX11.RXES.CRC | RX11.RXES.PARITY | RX11.RXES.DEL | RX11.RXES.DRDY);

        if (disk) {
            this.regRXES |= RX11.RXES.DRDY;
            this.printf(MESSAGE.ADDR, "%s.writeSector(%d:%d:%d)\n", this.type, iCylinder, iHead, nSector);
            this.assert(nSector);       // RX sector numbers (unlike RK and RL) are supposed to be 1-based
            var sector = disk.seek(iCylinder, iHead, nSector, true);
            if (sector) {
                if (fDeleted) sector.deleted = true;
                var i = 0, nBytes = this.abBuffer.length;
                while (i < nBytes) {
                    var data = this.abBuffer[i];
                    if (!disk.write(sector, i, data & 0xff)) {
                        nError = RX11.ERROR.NO_DATA;
                        break;
                    }
                    i++;
                }
            } else {
                nError = RX11.ERROR.NO_SECTOR;
            }
        } else {
            nError = iDrive? RX11.ERROR.HOME1 : RX11.ERROR.HOME0;
        }
        this.doneCommand(nError);
    }

    /**
     * readStatus()
     *
     * @this {RX11}
     */
    readStatus()
    {
        var iDrive = (this.regRXCS & RX11.RXCS.UNIT)? 1 : 0;
        var drive = this.aDrives[iDrive];

        this.regRXES &= ~RX11.RXES.DRDY;
        if (drive && drive.disk) this.regRXES |= RX11.RXES.DRDY;

        this.regRXDB = this.regRXES;
        this.doneCommand();
    }

    /**
     * readError()
     *
     * @this {RX11}
     */
    readError()
    {
        this.regRXDB = this.regError;
        this.doneCommand();
    }

    /**
     * readRXCS(addr)
     *
     * @this {RX11}
     * @param {number} addr (eg, PDP11.UNIBUS.RXCS or 177170)
     * @param {boolean} [fPreWrite]
     * @returns {number}
     */
    readRXCS(addr, fPreWrite)
    {
        var w = this.regRXCS;

        if (!fPreWrite) {
            w &= RX11.RXCS.RMASK;

            switch (this.funCode) {

            case RX11.FUNC.FILL:
            case RX11.FUNC.EMPTY:
                if (this.iBuffer < this.abBuffer.length) {
                    this.regRXCS |= RX11.RXCS.TR;
                }
                break;

            case RX11.FUNC.READ:
            case RX11.FUNC.WRITE:
            case RX11.FUNC.WRDEL:
                if (this.iBuffer < 2) {
                    this.regRXCS |= RX11.RXCS.TR;
                }
                break;
            }
        }
        return w;
    }

    /**
     * writeRXCS(data, addr)
     *
     * @this {RX11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.RXCS or 177170)
     */
    writeRXCS(data, addr)
    {
        this.regRXCS = (this.regRXCS & ~RX11.RXCS.WMASK) | (data & RX11.RXCS.WMASK);

        if (this.regRXCS & RX11.RXCS.INIT) {
            this.initController();
            return;
        }

        if ((this.regRXCS & RX11.RXCS.GO) && this.funCode == RX11.FUNC.UNUSED) {
            this.processCommand();
            return;
        }

        if (!(this.regRXCS & RX11.RXCS.IE)) {
            this.cpu.clearIRQ(this.irq);
        }
        else if (this.regRXCS & RX11.RXCS.DONE) {
            this.cpu.setIRQ(this.irq);
        }
    }

    /**
     * readRXDB(addr)
     *
     * @this {RX11}
     * @param {number} addr (eg, PDP11.UNIBUS.RXDB or 177172)
     * @param {boolean} [fPreWrite]
     * @returns {number}
     */
    readRXDB(addr, fPreWrite)
    {
        if (!fPreWrite) {
            switch (this.funCode) {

            case RX11.FUNC.EMPTY:
                if (this.regRXCS & RX11.RXCS.TR) {
                    this.regRXCS &= ~RX11.RXCS.TR;
                    this.assert(this.iBuffer < this.abBuffer.length);
                    this.regRXDB = this.abBuffer[this.iBuffer] & 0xff;
                    this.printf(MESSAGE.ADDR, "%s.readByte(%d): %#04x\n", this.type, this.iBuffer, this.regRXDB);
                    if (++this.iBuffer >= this.abBuffer.length) {
                        this.doneCommand();
                    }
                }
                break;
            }
        }
        return this.regRXDB;
    }

    /**
     * writeRXDB(data, addr)
     *
     * @this {RX11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.RXDB or 177172)
     */
    writeRXDB(data, addr)
    {
        switch(this.funCode) {

        case RX11.FUNC.FILL:
            if (this.regRXCS & RX11.RXCS.TR) {
                this.regRXCS &= ~RX11.RXCS.TR;
                this.assert(this.iBuffer < this.abBuffer.length);
                this.abBuffer[this.iBuffer] = data & 0xff;
                this.printf(MESSAGE.ADDR, "%s.writeByte(%d,%#04x)\n", this.type, this.iBuffer, data);
                if (++this.iBuffer >= this.abBuffer.length) {
                    this.doneCommand();
                }
            }
            break;

        case RX11.FUNC.READ:
        case RX11.FUNC.WRITE:
        case RX11.FUNC.WRDEL:
            if (this.regRXCS & RX11.RXCS.TR) {
                this.regRXCS &= ~RX11.RXCS.TR;

                switch(this.iBuffer++) {
                case 0:
                    this.regRXSA = data;
                    break;

                case 1:
                    this.regRXTA = data;
                    if (this.funCode == RX11.FUNC.READ) {
                        this.readSector();
                    } else {
                        this.writeSector(this.funCode == RX11.FUNC.WRDEL);
                    }
                    break;

                default:
                    this.assert(false);
                    break;
                }
            }
            break;
        }
        this.regRXDB = data;
    }
}

/*
 * Alias RX11 definitions as class constants
 */
RX11.RXCS   =   PDP11.RX11.RXCS;        // 177170: Command and Status Register
RX11.RXDB   =   PDP11.RX11.RXDB;        // 177172: Data Buffer Register
RX11.RXTA   =   PDP11.RX11.RXTA;
RX11.RXSA   =   PDP11.RX11.RXSA;
RX11.RXES   =   PDP11.RX11.RXES;
RX11.FUNC   =   PDP11.RX11.FUNC;
RX11.ERROR  =   PDP11.RX11.ERROR;

RX11.FUNCS  = [
    "FILL", "EMPTY", "WRITE", "READ", "UNUSED", "RDSTAT", "WRDEL", "RDERR"
];

/*
 * ES6 ALERT: As you can see below, I've finally started using computed property names.
 */
RX11.UNIBUS_IOTABLE = {
    [PDP11.UNIBUS.RXCS]:     /* 177170 */    [null, null, RX11.prototype.readRXCS,  RX11.prototype.writeRXCS,   "RXCS"],
    [PDP11.UNIBUS.RXDB]:     /* 177172 */    [null, null, RX11.prototype.readRXDB,  RX11.prototype.writeRXDB,   "RXDB"]
};
