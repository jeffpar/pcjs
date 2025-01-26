/**
 * @fileoverview Implements the RL11 Disk Controller (for RL01 and RL02 Disks)
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
 * @class RL11
 * @unrestricted
 */
export default class RL11 extends DriveController {
    /**
     * RL11(parms)
     *
     * The RL11 component has the following component-specific (parms) properties:
     *
     *      autoMount: one or more JSON-encoded objects, each containing 'name' and 'path' properties
     *
     * The RL11 Disk Controller controls up to four RL01 or RL02 disk drives, which in turn read/write RL01K or
     * RL02K disk cartridges.  See [RL11 Disk Controller Configuration Files](/devices/pdp11/rl11/).
     *
     * RL01K disks are single-platter cartridges with 256 tracks per side, 40 sectors per track, and a sector size
     * of 256 bytes, for a total capacity of 5Mb (5,242,880 bytes).  See [RL01K Disk Images](/disks/dec/rl01k/).
     *
     * RL02K disks are single-platter cartridges with 512 tracks per side, 40 sectors per track, and a sector size
     * of 256 bytes, for a total capacity of 10Mb (10,485,760 bytes).  See [RL02K Disk Images](/software/dec/pdp11/disks/rl02k/).
     *
     * @param {Object} parms
     */
    constructor(parms)
    {
        super("RL11", parms, MESSAGE.RL11, PDP11.RL11, PDP11.RL11.RL02K, RL11.UNIBUS_IOTABLE);

        /*
         * Define all the registers required for this controller.
         */
        this.regRLCS = this.regRLBA = this.regRLDA = this.tmpRLDA = this.regRLMP = this.regRLBE = 0;
    }

    /**
     * initController(aRegs)
     *
     * @this {RL11}
     * @param {Array} [aRegs]
     * @returns {boolean} true if successful, false if failure
     */
    initController(aRegs)
    {
        if (!aRegs) {
            aRegs = [(RL11.RLCS.DRDY | RL11.RLCS.CRDY), 0, 0, 0, 0, 0];
        }

        /*
         * ES6 ALERT: A handy destructuring assignment, which makes it easy to perform the inverse
         * of what saveController() does when it collects a bunch of object properties into an array.
         */
        [
            this.regRLCS,
            this.regRLBA,
            this.regRLDA,
            this.tmpRLDA,
            this.regRLMP,
            this.regRLBE
        ] = aRegs;

        return true;
    }

    /**
     * saveController()
     *
     * Basically, the inverse of initController().
     *
     * @this {RL11}
     * @returns {Array}
     */
    saveController()
    {
        return [
            this.regRLCS,
            this.regRLBA,
            this.regRLDA,
            this.tmpRLDA,
            this.regRLMP,
            this.regRLBE
        ];
    }

    /**
     * processCommand()
     *
     * @this {RL11}
     */
    processCommand()
    {
        var fInterrupt = true;
        var fnReadWrite, sFunc = "";
        var iDrive = (this.regRLCS & RL11.RLCS.DS) >> RL11.RLCS.SHIFT.DS;
        var drive = this.aDrives[iDrive];
        var disk = drive.disk;
        var iCylinder, iHead, iSector, nWords, addr;

        /*
         * The typical pattern of DRDY and CRDY:
         *
         *  1) Normally both set
         *  2) CRDY is cleared to process a command
         *  3) DRDY is cleared to indicate a command in process
         */
        this.regRLCS &= ~RL11.RLCS.DRDY;

        switch(this.regRLCS & RL11.RLCS.FUNC) {

        case RL11.FUNC.NOP:
        case RL11.FUNC.WCHK:
        case RL11.FUNC.RDNC:
            break;

        case RL11.FUNC.STATUS:
            if (this.regRLMP & RL11.RLMP.GS_BH) {
                this.regRLCS &= (RL11.RLCS.DRDY | RL11.RLCS.FUNC | RL11.RLCS.BAE);    // TODO: Review
            }
            /*
             * The bit indicating whether or not the disk contains 256 or 512 cylinders is critical;
             * for example, the first RSTS/E disk image we tried was an RL01K, which has only 256 cylinders,
             * and the operating system would crash mysteriously if we didn't report the correct geometry.
             */
            this.regRLMP = drive.status | (this.tmpRLDA & RL11.RLDA.RW_HS) | (disk && disk.nCylinders == 512? RL11.RLMP.GS_DT : 0);
            break;

        case RL11.FUNC.SEEK:
            if ((this.regRLDA & RL11.RLDA.GS_CMD) == RL11.RLDA.SEEK_CMD) {
                var darCA = (this.regRLDA & RL11.RLDA.RW_CA);
                var darHS = (this.regRLDA & RL11.RLDA.SEEK_HS) << 2;
                if (this.regRLDA & RL11.RLDA.SEEK_DIR) {
                    this.tmpRLDA += darCA;
                } else {
                    this.tmpRLDA -= darCA;
                }
                this.regRLDA = this.tmpRLDA = (this.tmpRLDA & RL11.RLDA.RW_CA) | darHS;
            }
            break;

        case RL11.FUNC.RHDR:
            this.regRLMP = this.tmpRLDA;
            break;

        case RL11.FUNC.RDATA:
            sFunc = "READ";
            fnReadWrite = this.readData;
            /* falls through */

        case RL11.FUNC.WDATA:
            if (!sFunc) sFunc = "WRITE";
            if (!fnReadWrite) fnReadWrite = this.writeData;

            iCylinder = this.regRLDA >> RL11.RLDA.SHIFT.RW_CA;
            iHead = (this.regRLDA & RL11.RLDA.RW_HS)? 1 : 0;
            iSector = this.regRLDA & RL11.RLDA.RW_SA;
            if (!disk || iCylinder >= disk.nCylinders || iSector >= disk.nSectors) {
                this.regRLCS |= RL11.ERRC.HNF | RL11.RLCS.ERR;
                break;
            }
            nWords = (0x10000 - this.regRLMP) & 0xffff;
            addr = (((this.regRLBE & RL11.RLBE.MASK)) << 16) | this.regRLBA;   // 22 bit mode

            this.printf(MESSAGE.ADDR, "%s: %s(%d:%d:%d) %o-%o\n", this.type, sFunc, iCylinder, iHead, iSector, addr, addr + (nWords << 1));

            fInterrupt = fnReadWrite.call(this, drive, iCylinder, iHead, iSector, nWords, addr, 2, false, this.doneReadWrite.bind(this));
            break;

        default:
            break;
        }

        if (fInterrupt) {
            this.regRLCS |= RL11.RLCS.DRDY | RL11.RLCS.CRDY;
            if (this.regRLCS & RL11.RLCS.IE) this.cpu.setIRQ(this.irq);
        }
    }

    /**
     * readData(drive, iCylinder, iHead, iSector, nWords, addr, inc, fCheck, done)
     *
     * @this {RL11}
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
        var checksum = 0;
        var disk = drive.disk;
        var sector = null, ibSector;

        if (!disk) {
            nError = RL11.ERRC.HNF;      // TODO: Review
            nWords = 0;
        }

        var sWords = "";
        while (nWords) {
            if (!sector) {
                sector = disk.seek(iCylinder, iHead, iSector + 1);
                if (!sector) {
                    nError = RL11.ERRC.HNF;
                    break;
                }
                ibSector = 0;
            }
            var b0, b1, data;
            if ((b0 = disk.read(sector, ibSector++)) < 0 || (b1 = disk.read(sector, ibSector++)) < 0) {
                nError = RL11.ERRC.HNF;
                break;
            }
            /*
             * Apparently, this controller honors the UNIBUS Map registers, which means we must call mapUnibus()
             * on the address REGARDLESS whether it is actually >= BusPDP11.UNIBUS_22BIT.  TODO: This is inherited
             * code, so let's review the documentation on this.
             */
            this.bus.setWordDirect(this.cpu.mapUnibus(addr), data = b0 | (b1 << 8));
            if (DEBUG && this.messageEnabled(MESSAGE.READ)) {
                if (!sWords) sWords = StrLib.toOct(addr) + ": ";
                sWords += StrLib.toOct(data) + ' ';
                if (sWords.length >= 64) {
                    console.log(sWords);
                    sWords = "";
                }
            }
            if (this.bus.checkFault()) {
                nError = RL11.ERRC.NXM;
                break;
            }
            addr += 2;
            nWords--;
            checksum += data;
            if (ibSector >= disk.cbSector) {
                sector = null;
                if (++iSector >= disk.nSectors) {
                    iSector = 0;
                    if (++iHead >= disk.nHeads) {
                        iHead = 0;
                        if (++iCylinder >= disk.nCylinders) {
                            nError = RL11.ERRC.HNF;
                            break;
                        }
                    }
                }
            }
        }

        if (DEBUG && this.messageEnabled(MESSAGE.READ)) {
            console.log("checksum: " + (checksum|0));
        }

        return done? done(nError, iCylinder, iHead, iSector, nWords, addr) : nError;
    }

    /**
     * writeData(drive, iCylinder, iHead, iSector, nWords, addr, inc, fCheck, done)
     *
     * @this {RL11}
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
        var checksum = 0;
        var disk = drive.disk;
        var sector = null, ibSector;

        if (!disk) {
            nError = RL11.ERRC.HNF;      // TODO: Review
            nWords = 0;
        }

        var sWords = "";
        while (nWords) {
            /*
             * Apparently, this controller honors the UNIBUS Map registers, which means we must call mapUnibus()
             * on the address REGARDLESS whether it is actually >= BusPDP11.UNIBUS_22BIT.  TODO: This is inherited
             * code, so let's review the documentation on this.
             */
            var data = this.bus.getWordDirect(this.cpu.mapUnibus(addr));
            if (this.bus.checkFault()) {
                nError = RL11.ERRC.NXM;
                break;
            }
            if (DEBUG && this.messageEnabled(MESSAGE.WRITE)) {
                if (!sWords) sWords = StrLib.toOct(addr) + ": ";
                sWords += StrLib.toOct(data) + ' ';
                if (sWords.length >= 64) {
                    console.log(sWords);
                    sWords = "";
                }
            }
            addr += 2;
            nWords--;
            checksum += data;
            if (!sector) {
                sector = disk.seek(iCylinder, iHead, iSector + 1, true);
                if (!sector) {
                    nError = RL11.ERRC.HNF;
                    break;
                }
                ibSector = 0;
            }
            if (!disk.write(sector, ibSector++, data & 0xff) || !disk.write(sector, ibSector++, data >> 8)) {
                nError = RL11.ERRC.HNF;
                break;
            }
            if (ibSector >= disk.cbSector) {
                sector = null;
                if (++iSector >= disk.nSectors) {
                    iSector = 0;
                    if (++iHead >= disk.nHeads) {
                        iHead = 0;
                        if (++iCylinder >= disk.nCylinders) {
                            nError = RL11.ERRC.HNF;
                            break;
                        }
                    }
                }
            }
        }

        if (DEBUG && this.messageEnabled(MESSAGE.WRITE)) {
            console.log("checksum: " + (checksum|0));
        }

        return done? done(nError, iCylinder, iHead, iSector, nWords, addr) : nError;
    }

    /**
     * doneReadWrite(nError, iCylinder, iHead, iSector, nWords, addr)
     *
     * @this {RL11}
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
        this.regRLBA = addr & 0xffff;
        this.regRLCS = (this.regRLCS & ~RL11.RLCS.BAE) | ((addr >> (16 - RL11.RLCS.SHIFT.BAE)) & RL11.RLCS.BAE);
        this.regRLBE = (addr >> 16) & RL11.RLBE.MASK;         // 22 bit mode
        this.regRLDA = (iCylinder << RL11.RLDA.SHIFT.RW_CA) | (iHead? RL11.RLDA.RW_HS : 0) | (iSector & RL11.RLDA.RW_SA);
        this.tmpRLDA = this.regRLDA;
        this.regRLMP = (0x10000 - nWords) & 0xffff;
        if (nError) {
            this.regRLCS |= nError | RL11.RLCS.ERR;
        }
        return true;
    }

    /**
     * readRLCS(addr)
     *
     * @this {RL11}
     * @param {number} addr (eg, PDP11.UNIBUS.RLCS or 174400)
     * @returns {number}
     */
    readRLCS(addr)
    {
        return this.regRLCS & RL11.RLCS.RMASK;
    }

    /**
     * writeRLCS(data, addr)
     *
     * @this {RL11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.RLCS or 174400)
     */
    writeRLCS(data, addr)
    {
        this.regRLCS = (this.regRLCS & ~RL11.RLCS.WMASK) | (data & RL11.RLCS.WMASK);
        this.regRLBE = (this.regRLBE & 0x3C) | ((data & RL11.RLCS.BAE) >> RL11.RLCS.SHIFT.BAE);
        if (!(this.regRLCS & RL11.RLCS.CRDY)) this.processCommand();
    }

    /**
     * readRLBA(addr)
     *
     * @this {RL11}
     * @param {number} addr (eg, PDP11.UNIBUS.RLBA or 174402)
     * @returns {number}
     */
    readRLBA(addr)
    {
        return this.regRLBA;
    }

    /**
     * writeRLBA(data, addr)
     *
     * @this {RL11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.RLBA or 174402)
     */
    writeRLBA(data, addr)
    {
        this.regRLBA = data & RL11.RLBA.WMASK;
    }

    /**
     * readRLDA(addr)
     *
     * @this {RL11}
     * @param {number} addr (eg, PDP11.UNIBUS.RLDA or 174404)
     * @returns {number}
     */
    readRLDA(addr)
    {
        return this.regRLDA;
    }

    /**
     * writeRLDA(data, addr)
     *
     * @this {RL11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.RLDA or 174404)
     */
    writeRLDA(data, addr)
    {
        this.regRLDA = data;
    }

    /**
     * readRLMP(addr)
     *
     * @this {RL11}
     * @param {number} addr (eg, PDP11.UNIBUS.RLMP or 174406)
     * @returns {number}
     */
    readRLMP(addr)
    {
        return this.regRLMP;
    }

    /**
     * writeRLMP(data, addr)
     *
     * @this {RL11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.RLMP or 174406)
     */
    writeRLMP(data, addr)
    {
        this.regRLMP = data;
    }

    /**
     * readRLBE(addr)
     *
     * @this {RL11}
     * @param {number} addr (eg, PDP11.UNIBUS.RLBE or 174410)
     * @returns {number}
     */
    readRLBE(addr)
    {
        return this.regRLBE;
    }

    /**
     * writeRLBE(data, addr)
     *
     * Curiously, we see RSTS/E v7.0 writing RLBE bits that aren't documented:
     *
     *      R0=000000 R1=000000 R2=174410 R3=000000 R4=102076 R5=045166
     *      SP=052662 PC=067624 PS=034344 IR=000000 SL=000377 T0 N0 Z1 V0 C0
     *      067624: 012712 000300          MOV   #300,@R2
     *
     * @this {RL11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.RLBE or 174410)
     */
    writeRLBE(data, addr)
    {
        this.regRLBE = data & RL11.RLBE.MASK;
        this.regRLCS = (this.regRLCS & ~RL11.RLCS.BAE) | ((this.regRLBE & 0x3) << RL11.RLCS.SHIFT.BAE);
    }
}

/*
 * Alias RL11 definitions as class constants
 */
RL11.RLCS   =   PDP11.RL11.RLCS;        // 174400: Control Status Register
RL11.RLBA   =   PDP11.RL11.RLBA;        // 174402: Bus Address Register
RL11.RLDA   =   PDP11.RL11.RLDA;        // 174404: Disk Address Register
RL11.RLMP   =   PDP11.RL11.RLMP;        // 177406: Multi-Purpose Register
RL11.RLBE   =   PDP11.RL11.RLBE;        // 174410: Bus (Address) Extension Register
RL11.ERRC   =   PDP11.RL11.ERRC;        // NOTE: These error codes are pre-shifted to read/write directly from/to RLCS.ERRC
RL11.FUNC   =   PDP11.RL11.FUNC;        // NOTE: These function codes are pre-shifted to read/write directly from/to RLCS.FUNC

/*
 * ES6 ALERT: As you can see below, I've finally started using computed property names.
 */
RL11.UNIBUS_IOTABLE = {
    [PDP11.UNIBUS.RLCS]:     /* 174400 */    [null, null, RL11.prototype.readRLCS,  RL11.prototype.writeRLCS,   "RLCS"],
    [PDP11.UNIBUS.RLBA]:     /* 174402 */    [null, null, RL11.prototype.readRLBA,  RL11.prototype.writeRLBA,   "RLBA"],
    [PDP11.UNIBUS.RLDA]:     /* 174404 */    [null, null, RL11.prototype.readRLDA,  RL11.prototype.writeRLDA,   "RLDA"],
    [PDP11.UNIBUS.RLMP]:     /* 174406 */    [null, null, RL11.prototype.readRLMP,  RL11.prototype.writeRLMP,   "RLMP"],
    [PDP11.UNIBUS.RLBE]:     /* 174410 */    [null, null, RL11.prototype.readRLBE,  RL11.prototype.writeRLBE,   "RLBE"]
};
