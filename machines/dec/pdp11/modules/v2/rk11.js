/**
 * @fileoverview Implements the RK11 Disk Controller (for RK03 Disks)
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
 * @class RK11
 * @unrestricted
 */
export default class RK11 extends DriveController {
    /**
     * RK11(parms)
     *
     * The RK11 component has the following component-specific (parms) properties:
     *
     *      autoMount: one or more JSON-encoded objects, each containing 'name' and 'path' properties
     *
     * The RK11 Disk Controller controls up to eight RK05 disk drives, which in turn read/write RK03-KA
     * disk cartridges.  See [RK11 Disk Controller Configuration Files](/devices/pdp11/rk11/).
     *
     * RK03 (or more precisely, RK03-KA) disks are single-platter cartridges with 203 tracks per side,
     * 12 sectors per track, and a sector size of 256 words (512 bytes), for a total capacity of 2.38Mb
     * (2,494,464 bytes).  See [RK03-KA Disk Images](/disks/dec/rk03/).
     *
     * @param {Object} parms
     */
    constructor(parms)
    {
        super("RK11", parms, MESSAGE.RK11, PDP11.RK11, PDP11.RK11.RK05, RK11.UNIBUS_IOTABLE);

        /*
         * Define all the registers required for this controller.
         *
         * TODO: Determine what we should really be doing with the RKDB register.
         */
        this.regRKDS = this.regRKER = this.regRKCS = this.regRKWC = this.regRKBA = this.regRKDA = this.regRKDB = 0;
    }

    /**
     * initController(aRegs)
     *
     * @this {RK11}
     * @param {Array} [aRegs]
     * @returns {boolean} true if successful, false if failure
     */
    initController(aRegs)
    {
        if (!aRegs) {
            aRegs = [(RK11.RKDS.RK05 | RK11.RKDS.SOK | RK11.RKDS.RRDY), 0, (RK11.RKCS.CRDY), 0, 0, 0, 0];
        }

        /*
         * ES6 ALERT: A handy destructuring assignment, which makes it easy to perform the inverse
         * of what saveController() does when it collects a bunch of object properties into an array.
         */
        [
            this.regRKDS,
            this.regRKER,
            this.regRKCS,
            this.regRKWC,
            this.regRKBA,
            this.regRKDA,
            this.regRKDB
        ] = aRegs;

        return true;
    }

    /**
     * saveController()
     *
     * Basically, the inverse of initController().
     *
     * @this {RK11}
     * @returns {Array}
     */
    saveController()
    {
        return [
            this.regRKDS,
            this.regRKER,
            this.regRKCS,
            this.regRKWC,
            this.regRKBA,
            this.regRKDA,
            this.regRKDB
        ];
    }

    /**
     * processCommand()
     *
     * @this {RK11}
     */
    processCommand()
    {
        var fInterrupt = true;
        var fnReadWrite, func, sFunc = "";
        var iDrive = (this.regRKDA & RK11.RKDA.DS) >> RK11.RKDA.SHIFT.DS;
        var drive = this.aDrives[iDrive];
        var iCylinder, iHead, iSector, nWords, addr, inc;

        this.regRKCS &= ~(RK11.RKCS.CRDY | RK11.RKCS.SCP);
        this.regRKER &= ~(RK11.RKER.SE);

        switch(func = this.regRKCS & RK11.RKCS.FUNC) {

        case RK11.FUNC.CRESET:
            this.printf("%s: CRESET(%d)\n", this.type, iDrive);
            this.regRKER = this.regRKDA = 0;
            this.regRKCS = RK11.RKCS.CRDY;
            break;

        case RK11.FUNC.RCHK:
            sFunc = "RCHK";
            /* falls through */

        case RK11.FUNC.READ:
            if (!sFunc) sFunc = "READ";
            fnReadWrite = this.readData;
            /* falls through */

        case RK11.FUNC.WCHK:
            if (!sFunc) sFunc = "WCHK";
            /* falls through */

        case RK11.FUNC.WRITE:
            if (!sFunc) sFunc = "WRITE";
            if (!fnReadWrite) fnReadWrite = this.writeData;

            iCylinder = (this.regRKDA & RK11.RKDA.CA) >> RK11.RKDA.SHIFT.CA;
            iHead = (this.regRKDA & RK11.RKDA.HS) >> RK11.RKDA.SHIFT.HS;
            iSector = this.regRKDA & RK11.RKDA.SA;
            nWords = (0x10000 - this.regRKWC) & 0xffff;
            addr = (((this.regRKCS & RK11.RKCS.MEX)) << (16 - RK11.RKCS.SHIFT.MEX)) | this.regRKBA;
            inc = (this.regRKCS & RK11.RKCS.IBA)? 0 : 2;

            this.printf(MESSAGE.ADDR, "%s: %s(%d:%d:%d) %o-%o\n", this.type, sFunc, iCylinder, iHead, iSector, addr, addr + (nWords << 1));

            if (iCylinder >= drive.nCylinders) {
                this.regRKER |= RK11.RKER.NXC;
                break;
            }
            if (iSector >= drive.nSectors) {
                this.regRKER |= RK11.RKER.NXS;
                break;
            }

            fInterrupt = fnReadWrite.call(this, drive, iCylinder, iHead, iSector, nWords, addr, inc, (func >= RK11.FUNC.WCHK), this.doneReadWrite.bind(this));
            break;

        case RK11.FUNC.SEEK:
            iCylinder = (this.regRKDA & RK11.RKDA.CA) >> RK11.RKDA.SHIFT.CA;
            this.printf("%s: SEEK(%d)\n", this.type, iCylinder);
            if (iCylinder < drive.nCylinders) {
                this.regRKCS |= RK11.RKCS.SCP;
            } else {
                this.regRKER |= RK11.RKER.NXC;
            }
            break;

        case RK11.FUNC.DRESET:
            this.printf("%s: DRESET(%d)\n", this.type, iDrive);
            this.regRKER = this.regRKDA = 0;
            this.regRKCS = RK11.RKCS.CRDY | RK11.RKCS.SCP;
            break;

        default:
            this.printf("%s: UNSUPPORTED(%s)\n", this.type, func);
            break;
        }

        this.regRKDS = drive.status | (drive.disk? RK11.RKDS.DRDY : 0) | (iDrive << RK11.RKDS.SHIFT.ID) | (this.regRKDA & RK11.RKDS.SC);

        this.updateErrors();

        if (fInterrupt) {
            this.regRKCS &= ~RK11.RKCS.GO;
            this.regRKCS |= RK11.RKCS.CRDY;
            if (this.regRKCS & RK11.RKCS.IE) this.cpu.setIRQ(this.irq);
        }
    }

    /**
     * readData(drive, iCylinder, iHead, iSector, nWords, addr, inc, fCheck, done)
     *
     * @this {RK11}
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

        if (!disk) {
            nError = RK11.RKER.NXD;
            nWords = 0;
        }

        var sWords = "";
        while (nWords) {
            if (!sector) {
                if (iCylinder >= disk.nCylinders) {
                    nError = RK11.RKER.NXC;
                    break;
                }
                sector = disk.seek(iCylinder, iHead, iSector + 1);
                if (!sector) {
                    nError = RK11.RKER.SKE;
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
                nError = RK11.RKER.NXS;
                break;
            }
            if (!fCheck) {
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
                if (this.bus.checkFault()) {
                    nError = RK11.RKER.NXM;
                    break;
                }
            }
            if (ibSector >= disk.cbSector) sector = null;
            addr += inc;
            nWords--;
        }
        return done? done(nError, iCylinder, iHead, iSector, nWords, addr) : nError;
    }

    /**
     * writeData(drive, iCylinder, iHead, iSector, nWords, addr, inc, fCheck, done)
     *
     * @this {RK11}
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
    writeData(drive, iCylinder, iHead, iSector, nWords, addr, inc, fCheck, done)
    {
        var nError = 0;
        var disk = drive.disk;
        var sector = null, ibSector;

        if (!disk) {
            nError = RK11.RKER.NXD;
            nWords = 0;
        }

        while (nWords) {
            var data = this.bus.getWordDirect(this.cpu.mapUnibus(addr));
            if (this.bus.checkFault()) {
                nError = RK11.RKER.NXM;
                break;
            }
            if (!sector) {
                if (iCylinder >= disk.nCylinders) {
                    nError = RK11.RKER.NXC;
                    break;
                }
                sector = disk.seek(iCylinder, iHead, iSector + 1, true);
                if (!sector) {
                    nError = RK11.RKER.SKE;
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
            if (fCheck) {
                var b0, b1;
                if ((b0 = disk.read(sector, ibSector++)) < 0 || (b1 = disk.read(sector, ibSector++)) < 0) {
                    nError = RK11.RKER.NXS;
                    break;
                }
                /*
                 * NOTE: During the 11/70 CPU EXERCISER diagnostic, a number of WCHK requests will fail
                 * when the test starts reading/writing with physical addresses > 177777.  I'm pretty sure all
                 * the UNIBUS address calculations are fine, and therefore those failures are expected.
                 *
                 * Originally, those failures were causing me some grief because I was treating a WCE error like
                 * any other error; ie, as a HARD error.  That was wrong.  Two errors (WCE and CSE) are soft
                 * errors, so while they should still trigger the general-purpose RKCS ERR bit, they should NOT
                 * trigger the RKCS HE (Hard Error) bit.  This is all taken care of in updateErrors() now.
                 */
                if (data != (b0 | (b1 << 8))) {
                    nError = RK11.RKER.WCE;
                    break;
                }
            } else {
                if (!disk.write(sector, ibSector++, data & 0xff) || !disk.write(sector, ibSector++, data >> 8)) {
                    nError = RK11.RKER.NXS;
                    break;
                }
            }
            if (ibSector >= disk.cbSector) sector = null;
            addr += inc;
            nWords--;
        }
        return done? done(nError, iCylinder, iHead, iSector, nWords, addr) : nError;
    }

    /**
     * doneReadWrite(nError, iCylinder, iHead, iSector, nWords, addr)
     *
     * @this {RK11}
     * @param {number} nError
     * @param {number} iCylinder
     * @param {number} iHead
     * @param {number} iSector
     * @param {number} nWords
     * @param {number} addr
     * @returns {boolean}
     */
    doneReadWrite(nError, iCylinder, iHead, iSector, nWords, addr)
    {
        this.regRKBA = addr & 0xffff;
        this.regRKCS = (this.regRKCS & ~RK11.RKCS.MEX) | ((addr >> (16 - RK11.RKCS.SHIFT.MEX)) & RK11.RKCS.MEX);
        this.regRKWC = (0x10000 - nWords) & 0xffff;
        this.regRKDA = (this.regRKDA & ~RK11.RKDA.SA) | (iSector & RK11.RKDA.SA);
        this.regRKER |= nError;
        this.updateErrors();
        return true;
    }

    /**
     * updateErrors()
     *
     * @this {RK11}
     */
    updateErrors()
    {
        /*
         * Reflect RKER bits to RKCS bits as appropriate.
         *
         * TODO: I'm not entirely sure about the handling of the DRE bit here.  DEC's RK11 documentation says:
         *
         *      Sets if one of the drives in the system senses a loss of either AC or DC power and a function is
         *      either initiated or in process while the selected drive is not ready or in some error condition.
         *
         * I'm not sure how to parse all the "ands" and "ors" in that sentence.  For now, we're treating the DRE bit
         * much like the high error bit found in other hardware registers: we always set it if any lower error bits
         * are also set.
         */
        this.regRKCS &= ~RK11.RKCS.ERR;
        if (this.regRKER) {
            this.regRKER |= RK11.RKER.DRE;
            this.regRKCS |= RK11.RKCS.ERR;
            if (this.regRKER & RK11.RKER.HE) this.regRKCS |= RK11.RKCS.HE;
            this.printf("%s: ERROR: %o\n", this.type, this.regRKER);
        }
    }

    /**
     * readRKDS(addr)
     *
     * @this {RK11}
     * @param {number} addr (eg, PDP11.UNIBUS.RKDS or 177400)
     * @returns {number}
     */
    readRKDS(addr)
    {
        return this.regRKDS;
    }

    /**
     * writeRKDS(data, addr)
     *
     * @this {RK11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.RKDS or 177400)
     */
    writeRKDS(data, addr)
    {
        /*
         * This is a read-only register
         */
    }

    /**
     * readRKER(addr)
     *
     * @this {RK11}
     * @param {number} addr (eg, PDP11.UNIBUS.RKER or 177402)
     * @returns {number}
     */
    readRKER(addr)
    {
        return this.regRKER;
    }

    /**
     * writeRKER(data, addr)
     *
     * @this {RK11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.RKER or 177402)
     */
    writeRKER(data, addr)
    {
        /*
         * This is a read-only register
         */
    }

    /**
     * readRKCS(addr)
     *
     * @this {RK11}
     * @param {number} addr (eg, PDP11.UNIBUS.RKCS or 177404)
     * @returns {number}
     */
    readRKCS(addr)
    {
        return this.regRKCS & RK11.RKCS.RMASK;
    }

    /**
     * writeRKCS(data, addr)
     *
     * @this {RK11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.RKCS or 177404)
     */
    writeRKCS(data, addr)
    {
        this.regRKCS = (this.regRKCS & ~RK11.RKCS.WMASK) | (data & RK11.RKCS.WMASK);

        if (this.regRKCS & RK11.RKCS.GO) this.processCommand();
    }

    /**
     * readRKWC(addr)
     *
     * @this {RK11}
     * @param {number} addr (eg, PDP11.UNIBUS.RKWC or 177406)
     * @returns {number}
     */
    readRKWC(addr)
    {
        return this.regRKWC;
    }

    /**
     * writeRKWC(data, addr)
     *
     * @this {RK11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.RKWC or 177406)
     */
    writeRKWC(data, addr)
    {
        this.regRKWC = data;
    }

    /**
     * readRKBA(addr)
     *
     * @this {RK11}
     * @param {number} addr (eg, PDP11.UNIBUS.RKBA or 177410)
     * @returns {number}
     */
    readRKBA(addr)
    {
        return this.regRKBA;
    }

    /**
     * writeRKBA(data, addr)
     *
     * @this {RK11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.RKBA or 177410)
     */
    writeRKBA(data, addr)
    {
        this.regRKBA = data;
    }

    /**
     * readRKDA(addr)
     *
     * @this {RK11}
     * @param {number} addr (eg, PDP11.UNIBUS.RKDA or 177412)
     * @returns {number}
     */
    readRKDA(addr)
    {
        return this.regRKDA;
    }

    /**
     * writeRKDA(data, addr)
     *
     * @this {RK11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.RKDA or 177412)
     */
    writeRKDA(data, addr)
    {
        this.regRKDA = data;
    }

    /**
     * readRKDB(addr)
     *
     * @this {RK11}
     * @param {number} addr (eg, PDP11.UNIBUS.RKDB or 177416)
     * @returns {number}
     */
    readRKDB(addr)
    {
        return this.regRKDB;
    }

    /**
     * writeRKDB(data, addr)
     *
     * @this {RK11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.RKDB or 177416)
     */
    writeRKDB(data, addr)
    {
        this.regRKDB = data;
    }
}

/*
 * Alias RK11 definitions as class constants
 */
RK11.RKDS   =   PDP11.RK11.RKDS;        // 177400: Drive Status Register
RK11.RKER   =   PDP11.RK11.RKER;        // 177402: Error Register
RK11.RKCS   =   PDP11.RK11.RKCS;        // 177404: Control Status Register
RK11.RKDA   =   PDP11.RK11.RKDA;        // 177412: Disk Address Register
RK11.FUNC   =   PDP11.RK11.FUNC;

/*
 * ES6 ALERT: As you can see below, I've finally started using computed property names.
 */
RK11.UNIBUS_IOTABLE = {
    [PDP11.UNIBUS.RKDS]:     /* 177400 */    [null, null, RK11.prototype.readRKDS,  RK11.prototype.writeRKDS,   "RKDS"],
    [PDP11.UNIBUS.RKER]:     /* 177402 */    [null, null, RK11.prototype.readRKER,  RK11.prototype.writeRKER,   "RKER"],
    [PDP11.UNIBUS.RKCS]:     /* 177404 */    [null, null, RK11.prototype.readRKCS,  RK11.prototype.writeRKCS,   "RKCS"],
    [PDP11.UNIBUS.RKWC]:     /* 177406 */    [null, null, RK11.prototype.readRKWC,  RK11.prototype.writeRKWC,   "RKWC"],
    [PDP11.UNIBUS.RKBA]:     /* 177410 */    [null, null, RK11.prototype.readRKBA,  RK11.prototype.writeRKBA,   "RKBA"],
    [PDP11.UNIBUS.RKDA]:     /* 177412 */    [null, null, RK11.prototype.readRKDA,  RK11.prototype.writeRKDA,   "RKDA"],
    [PDP11.UNIBUS.RKDB]:     /* 177416 */    [null, null, RK11.prototype.readRKDB,  RK11.prototype.writeRKDB,   "RKDB"]
};
