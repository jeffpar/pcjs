/**
 * @fileoverview Implements PDP-11 IOPage
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * Portions adapted from the JavaScript PDP 11/70 Emulator written by Paul Nankervis
 * <paulnank@hotmail.com> at <http://skn.noip.me/pdp11/pdp11.html> with permission.
 */

import PDP11 from "./pdp11.js";
import Ports from "../../../../modules/v3/ports.js";

/**
 * @class IOPage
 * @unrestricted
 */
export default class IOPage extends Ports {
    /**
     * IOPage(idMachine, idDevice, config)
     *
     * @this {IOPage}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {PortsConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);
        for (let port in IOPage.IOTABLE) {
            let handlers = IOPage.IOTABLE[port];
            port = +port;
            let inData = handlers[0];
            let outData = handlers[1];
            let inPair = handlers[2];
            let outPair = handlers[3];
            /**
             * When handlers are being registered for these BYTE-granular UNIBUS addresses,
             * we must install fallback handlers for all BYTE accesses.
             */
            if (port >= PDP11.UNIBUS.R0SET0 && port <= PDP11.UNIBUS.R6USER) {
                if (!inData && inPair) {
                    inData = function(readPair) {
                        return function(port) {
                            return readPair(port) & 0xff;
                        };
                    }(inPair);
                }
                if (!outData && outPair) {
                    outData = function(writePair) {
                        return function(port, value) {
                            return writePair(port, value);
                        };
                    }(outPair);
                }
            }
            this.addIOHandlers(this, port, port, inData, outData, inPair, outPair);
        }
        this.onReset();
    }

    /**
     * onPower()
     *
     * Called by the Machine device to provide notification of a power event.
     *
     * @this {IOPage}
     */
    onPower()
    {
        if (this.cpu === undefined) {
            this.cpu = /** @type {CPU} */ (this.findDeviceByClass("Debugger"));
        }
    }

    /**
     * loadState(state)
     *
     * Memory and Ports states are managed by the Bus onLoad() handler, which calls our loadState() handler.
     *
     * @this {IOPage}
     * @param {Array|undefined} state
     * @returns {boolean}
     */
    loadState(state)
    {
        if (state) {
            let idDevice = state.shift();
            if (this.idDevice == idDevice) {
                return true;
            }
        }
        return false;
    }

    /**
     * saveState(state)
     *
     * Memory and Ports states are managed by the Bus onSave() handler, which calls our saveState() handler.
     *
     * @this {IOPage}
     * @param {Array} state
     */
    saveState(state)
    {
        state.push(this.idDevice);
    }

    /**
     * readUNIMAP(port)
     *
     * NOTE: The UNIBUS map ("UNIMAP") is 32 registers spread across 64 words, so we first calculate the word index.
     *
     * @this {IOPage}
     * @param {number} port (eg, PDP11.UNIBUS.UNIMAP)
     * @returns {number}
     */
    readUNIMAP(port)
    {
        let word = (port >> 1) & 0x3f, reg = word >> 1;
        let value = this.cpu.regsUNIMap[reg];
        return (word & 1)? (value >> 16) : (value & 0xffff);
    }

    /**
     * writeUNIMAP(port, value)
     *
     * NOTE: The UNIBUS map ("UNIMAP") is 32 registers spread across 64 words, so we first calculate the word index.
     *
     * @this {IOPage}
     * @param {number} port (eg, PDP11.UNIBUS.UNIMAP)
     * @param {number} value
     */
    writeUNIMAP(port, value)
    {
        let word = (port >> 1) & 0x3f, reg = word >> 1;
        if (word & 1) {
            this.cpu.regsUNIMap[reg] = (this.cpu.regsUNIMap[reg] & 0xffff) | ((value & 0x003f) << 16);
        } else {
            this.cpu.regsUNIMap[reg] = (this.cpu.regsUNIMap[reg] & ~0xffff) | (value & 0xfffe);
        }
    }
}

IOPage.IOTABLE = {
    [PDP11.UNIBUS.UNIMAP]:  /* 170200 */    [null, null, IOPage.prototype.readUNIMAP,  IOPage.prototype.writeUNIMAP,  "UNIMAP",   64, PDP11.MODEL_1170],
 // [PDP11.UNIBUS.SIPDR0]:  /* 172200 */    [null, null, IOPage.prototype.readSIPDR,   IOPage.prototype.writeSIPDR,   "SIPDR",    8,  PDP11.MODEL_1145, MESSAGE.MMU],
 // [PDP11.UNIBUS.SDPDR0]:  /* 172220 */    [null, null, IOPage.prototype.readSDPDR,   IOPage.prototype.writeSDPDR,   "SDPDR",    8,  PDP11.MODEL_1145, MESSAGE.MMU],
 // [PDP11.UNIBUS.SIPAR0]:  /* 172240 */    [null, null, IOPage.prototype.readSIPAR,   IOPage.prototype.writeSIPAR,   "SIPAR",    8,  PDP11.MODEL_1145, MESSAGE.MMU],
 // [PDP11.UNIBUS.SDPAR0]:  /* 172260 */    [null, null, IOPage.prototype.readSDPAR,   IOPage.prototype.writeSDPAR,   "SDPAR",    8,  PDP11.MODEL_1145, MESSAGE.MMU],
 // [PDP11.UNIBUS.KIPDR0]:  /* 172300 */    [null, null, IOPage.prototype.readKIPDR,   IOPage.prototype.writeKIPDR,   "KIPDR",    8,  PDP11.MODEL_1140, MESSAGE.MMU],
 // [PDP11.UNIBUS.KDPDR0]:  /* 172320 */    [null, null, IOPage.prototype.readKDPDR,   IOPage.prototype.writeKDPDR,   "KDPDR",    8,  PDP11.MODEL_1145, MESSAGE.MMU],
 // [PDP11.UNIBUS.KIPAR0]:  /* 172340 */    [null, null, IOPage.prototype.readKIPAR,   IOPage.prototype.writeKIPAR,   "KIPAR",    8,  PDP11.MODEL_1140, MESSAGE.MMU],
 // [PDP11.UNIBUS.KDPAR0]:  /* 172360 */    [null, null, IOPage.prototype.readKDPAR,   IOPage.prototype.writeKDPAR,   "KDPAR",    8,  PDP11.MODEL_1145, MESSAGE.MMU],
 // [PDP11.UNIBUS.MMR3]:    /* 172516 */    [null, null, IOPage.prototype.readMMR3,    IOPage.prototype.writeMMR3,    "MMR3",     1,  PDP11.MODEL_1145, MESSAGE.MMU],
 // [PDP11.UNIBUS.LKS]:     /* 177546 */    [null, null, IOPage.prototype.readLKS,     IOPage.prototype.writeLKS,     "LKS"],
 // [PDP11.UNIBUS.MMR0]:    /* 177572 */    [null, null, IOPage.prototype.readMMR0,    IOPage.prototype.writeMMR0,    "MMR0",     1,  PDP11.MODEL_1140, MESSAGE.MMU],
 // [PDP11.UNIBUS.MMR1]:    /* 177574 */    [null, null, IOPage.prototype.readMMR1,    IOPage.prototype.writeIgnored, "MMR1",     1,  PDP11.MODEL_1145, MESSAGE.MMU],
 // [PDP11.UNIBUS.MMR2]:    /* 177576 */    [null, null, IOPage.prototype.readMMR2,    IOPage.prototype.writeIgnored, "MMR2",     1,  PDP11.MODEL_1140, MESSAGE.MMU],
 // [PDP11.UNIBUS.UIPDR0]:  /* 177600 */    [null, null, IOPage.prototype.readUIPDR,   IOPage.prototype.writeUIPDR,   "UIPDR",    8,  PDP11.MODEL_1140, MESSAGE.MMU],
 // [PDP11.UNIBUS.UDPDR0]:  /* 177620 */    [null, null, IOPage.prototype.readUDPDR,   IOPage.prototype.writeUDPDR,   "UDPDR",    8,  PDP11.MODEL_1145, MESSAGE.MMU],
 // [PDP11.UNIBUS.UIPAR0]:  /* 177640 */    [null, null, IOPage.prototype.readUIPAR,   IOPage.prototype.writeUIPAR,   "UIPAR",    8,  PDP11.MODEL_1140, MESSAGE.MMU],
 // [PDP11.UNIBUS.UDPAR0]:  /* 177660 */    [null, null, IOPage.prototype.readUDPAR,   IOPage.prototype.writeUDPAR,   "UDPAR",    8,  PDP11.MODEL_1145, MESSAGE.MMU],
 // [PDP11.UNIBUS.R0SET0]:  /* 177700 */    [null, null, IOPage.prototype.readRSET0,   IOPage.prototype.writeRSET0,   "R0SET0"],
 // [PDP11.UNIBUS.R1SET0]:  /* 177701 */    [null, null, IOPage.prototype.readRSET0,   IOPage.prototype.writeRSET0,   "R1SET0"],
 // [PDP11.UNIBUS.R2SET0]:  /* 177702 */    [null, null, IOPage.prototype.readRSET0,   IOPage.prototype.writeRSET0,   "R2SET0"],
 // [PDP11.UNIBUS.R3SET0]:  /* 177703 */    [null, null, IOPage.prototype.readRSET0,   IOPage.prototype.writeRSET0,   "R3SET0"],
 // [PDP11.UNIBUS.R4SET0]:  /* 177704 */    [null, null, IOPage.prototype.readRSET0,   IOPage.prototype.writeRSET0,   "R4SET0"],
 // [PDP11.UNIBUS.R5SET0]:  /* 177705 */    [null, null, IOPage.prototype.readRSET0,   IOPage.prototype.writeRSET0,   "R5SET0"],
 // [PDP11.UNIBUS.R6KERNEL]:/* 177706 */    [null, null, IOPage.prototype.readR6KERNEL,IOPage.prototype.writeR6KERNEL,"R6KERNEL"],
 // [PDP11.UNIBUS.R7KERNEL]:/* 177707 */    [null, null, IOPage.prototype.readR7KERNEL,IOPage.prototype.writeR7KERNEL,"R7KERNEL"],
 // [PDP11.UNIBUS.R0SET1]:  /* 177710 */    [null, null, IOPage.prototype.readRSET1,   IOPage.prototype.writeRSET1,   "R0SET1",   1,  PDP11.MODEL_1145],
 // [PDP11.UNIBUS.R1SET1]:  /* 177711 */    [null, null, IOPage.prototype.readRSET1,   IOPage.prototype.writeRSET1,   "R1SET1",   1,  PDP11.MODEL_1145],
 // [PDP11.UNIBUS.R2SET1]:  /* 177712 */    [null, null, IOPage.prototype.readRSET1,   IOPage.prototype.writeRSET1,   "R2SET1",   1,  PDP11.MODEL_1145],
 // [PDP11.UNIBUS.R3SET1]:  /* 177713 */    [null, null, IOPage.prototype.readRSET1,   IOPage.prototype.writeRSET1,   "R3SET1",   1,  PDP11.MODEL_1145],
 // [PDP11.UNIBUS.R4SET1]:  /* 177714 */    [null, null, IOPage.prototype.readRSET1,   IOPage.prototype.writeRSET1,   "R4SET1",   1,  PDP11.MODEL_1145],
 // [PDP11.UNIBUS.R5SET1]:  /* 177715 */    [null, null, IOPage.prototype.readRSET1,   IOPage.prototype.writeRSET1,   "R5SET1",   1,  PDP11.MODEL_1145],
 // [PDP11.UNIBUS.R6SUPER]: /* 177716 */    [null, null, IOPage.prototype.readR6SUPER, IOPage.prototype.writeR6SUPER, "R6SUPER",  1,  PDP11.MODEL_1145],
 // [PDP11.UNIBUS.R6USER]:  /* 177717 */    [null, null, IOPage.prototype.readR6USER,  IOPage.prototype.writeR6USER,  "R6USER",   1,  PDP11.MODEL_1145],
 // [PDP11.UNIBUS.CTRL]:    /* 177740 */    [null, null, IOPage.prototype.readCTRL,    IOPage.prototype.writeCTRL,    "CTRL",     8,  PDP11.MODEL_1170],
 // [PDP11.UNIBUS.LSIZE]:   /* 177760 */    [null, null, IOPage.prototype.readSIZE,    IOPage.prototype.writeSIZE,    "LSIZE",    1,  PDP11.MODEL_1170],
 // [PDP11.UNIBUS.HSIZE]:   /* 177762 */    [null, null, IOPage.prototype.readSIZE,    IOPage.prototype.writeSIZE,    "HSIZE",    1,  PDP11.MODEL_1170],
 // [PDP11.UNIBUS.SYSID]:   /* 177764 */    [null, null, IOPage.prototype.readSYSID,   IOPage.prototype.writeSYSID,   "SYSID",    1,  PDP11.MODEL_1170],
 // [PDP11.UNIBUS.CPUERR]:  /* 177766 */    [null, null, IOPage.prototype.readCPUERR,  IOPage.prototype.writeCPUERR,  "ERR",      1,  PDP11.MODEL_1170],
 // [PDP11.UNIBUS.MB]:      /* 177770 */    [null, null, IOPage.prototype.readMBR,     IOPage.prototype.writeMBR,     "MBR",      1,  PDP11.MODEL_1170],
 // [PDP11.UNIBUS.PIR]:     /* 177772 */    [null, null, IOPage.prototype.readPIR,     IOPage.prototype.writePIR,     "PIR"],
 // [PDP11.UNIBUS.SL]:      /* 177774 */    [null, null, IOPage.prototype.readSLR,     IOPage.prototype.writeSLR,     "SLR"],
 // [PDP11.UNIBUS.PSW]:     /* 177776 */    [null, null, IOPage.prototype.readPSW,     IOPage.prototype.writePSW,     "PSW"]
};

IOPage.CLASSES["IOPage"] = IOPage;
