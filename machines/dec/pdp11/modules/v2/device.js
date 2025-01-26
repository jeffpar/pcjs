/**
 * @fileoverview Implements PDP-11 device support
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * Portions adapted from the JavaScript PDP 11/70 Emulator written by Paul Nankervis
 * <paulnank@hotmail.com> at <http://skn.noip.me/pdp11/pdp11.html> with permission.
 */

import BusPDP11 from "./bus.js";
import MemoryPDP11 from "./memory.js";
import MESSAGE from "./message.js";
import PC11 from "./pc11.js";
import RL11 from "./rl11.js";
import RK11 from "./rk11.js";
import RX11 from "./rx11.js";
import Component from "../../../../modules/v2/component.js";
import State from "../../../../modules/v2/state.js";
import StrLib from "../../../../modules/v2/strlib.js";
import WebLib from "../../../../modules/v2/weblib.js";
import { APPCLASS, DEBUGGER, PDP11 } from "./defines.js";

/**
 * @class DevicePDP11
 * @unrestricted
 */
export default class DevicePDP11 extends Component {
    /**
     * DevicePDP11(parmsDevice)
     *
     * The Device component implements the following "default" devices:
     *
     *      KW11 (KW11-L Line Time Clock)
     *
     * as well providing access to all the MMU and CPU registers, PSW, etc.
     *
     * @param {Object} parmsDevice
     */
    constructor(parmsDevice)
    {
        super("Device", parmsDevice, MESSAGE.DEVICE);

        this.kw11 = {               // KW11 registers
            lks:        PDP11.KW11.LKS.MON,
            timer:      -1          // initBus() will initialize this timer ID
        };
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {DevicePDP11}
     * @param {ComputerPDP11} cmp
     * @param {BusPDP11} bus
     * @param {CPUStatePDP11} cpu
     * @param {DebuggerPDP11} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.bus = bus;
        this.cmp = cmp;
        this.cpu = cpu;
        this.dbg = dbg;

        var device = this;
        this.kw11.timer = cpu.addTimer(function() {
            device.interruptKW11();
        });

        this.kw11.irq = cpu.addIRQ(PDP11.KW11.VEC, PDP11.KW11.PRI, MESSAGE.KW11);

        bus.addIOTable(this, DevicePDP11.UNIBUS_IOTABLE);
        bus.addResetHandler(this.reset.bind(this));

        if (DEBUGGER && dbg) {
            dbg.messageDump(MESSAGE.MMU, function onDumpMMU(asArgs) {
                device.dumpMMU(asArgs);
            });
        }
        this.setReady();
    }

    /**
     * dumpMMU(asArgs)
     *
     * @this {DevicePDP11}
     * @param {Array.<string>} asArgs
     */
    dumpMMU(asArgs)
    {
        if (DEBUGGER) {
            var cpu = this.cpu;
            this.dumpRegs("KIPDR", cpu.regsPDR[0], 0, asArgs[0]);
            this.dumpRegs("KDPDR", cpu.regsPDR[0], 8, asArgs[0]);
            this.dumpRegs("KIPAR", cpu.regsPAR[0], 0, asArgs[0]);
            this.dumpRegs("KDPAR", cpu.regsPAR[0], 8, asArgs[0], true);
            this.dumpRegs("SIPDR", cpu.regsPDR[1], 0, asArgs[0]);
            this.dumpRegs("SDPDR", cpu.regsPDR[1], 8, asArgs[0]);
            this.dumpRegs("SIPAR", cpu.regsPAR[1], 0, asArgs[0]);
            this.dumpRegs("SDPAR", cpu.regsPAR[1], 8, asArgs[0], true);
            this.dumpRegs("UIPDR", cpu.regsPDR[3], 0, asArgs[0]);
            this.dumpRegs("UDPDR", cpu.regsPDR[3], 8, asArgs[0]);
            this.dumpRegs("UIPAR", cpu.regsPAR[3], 0, asArgs[0]);
            this.dumpRegs("UDPAR", cpu.regsPAR[3], 8, asArgs[0], true);
            if (cpu.regMMR3 & PDP11.MMR3.UNIBUS_MAP) {
                this.dumpRegs("UNIMAP", cpu.regsUniMap, -1, asArgs[0]);
            }
        }
    }

    /**
     * dumpRegs(sName, aRegs, offset, sFilter, fBreak)
     *
     * @this {DevicePDP11}
     * @param {string} sName
     * @param {Array.<number>} aRegs
     * @param {number} offset
     * @param {string} sFilter
     * @param {boolean} [fBreak]
     */
    dumpRegs(sName, aRegs, offset, sFilter, fBreak)
    {
        if (DEBUGGER) {
            var dbg = this.dbg;
            if (sFilter && sName.indexOf(sFilter.toUpperCase()) < 0) return;
            var nBits = 0;
            var nRegs = 8;
            var sDump = "";
            var fIndex = false;
            var nWidth = 8;
            if (offset < 0) {
                nBits = 22;
                nRegs = aRegs.length;
                offset = 0;
                fIndex = true;
                nWidth = 4;
            }
            for (var i = 0; i < nRegs; i++) {
                if (i % nWidth == 0) {
                    if (sDump) sDump += '\n';
                    sDump += sName + (fIndex? ('[' + StrLib.toDec(i, 2) + ']') : '') + ':';
                }
                sDump += ' ' + dbg.toStrBase(aRegs[offset + i], nBits);
            }
            dbg.printf("%s", sDump + (fBreak? '\n' : ''));
        }
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {DevicePDP11}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) {
            if (!data) {
                this.reset();
            } else {
                if (!this.restore(data)) return false;
            }
        }
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {DevicePDP11}
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
     * @this {DevicePDP11}
     */
    reset()
    {
        this.kw11.lks = PDP11.KW11.LKS.MON;
        this.cpu.setTimer(this.kw11.timer, 1000/60, true);
    }

    /**
     * save()
     *
     * This implements save support for the DevicePDP11 component.
     *
     * @this {DevicePDP11}
     * @returns {Object}
     */
    save()
    {
        var state = new State(this);
        state.set(0, [
            this.kw11.lks
        ]);
        return state.data();
    }

    /**
     * restore(data)
     *
     * This implements restore support for the DevicePDP11 component.
     *
     * @this {DevicePDP11}
     * @param {Object} data
     * @returns {boolean} true if successful, false if failure
     */
    restore(data)
    {
        /*
         * ES6 ALERT: A handy destructuring assignment, which makes it easy to perform the inverse
         * of what save() does when it collects a bunch of object properties into an array.
         */
        [
            this.kw11.lks
        ] = data[0];

        return true;
    }

    /**
     * interruptKW11()
     *
     * We used to call this function only when the the KW11's "Interrupt Enable" bit was set,
     * but now we call it at 60Hz regardless.  In part, this was so we could piggy-back on it
     * to drive display updates, but more importantly, the KW11's "Monitor" bit is supposed to
     * be set at the "line frequency" independent of whether KW11 interrupts are enabled or not.
     *
     * @this {DevicePDP11}
     */
    interruptKW11()
    {
        this.kw11.lks |= PDP11.KW11.LKS.MON;
        if (this.kw11.lks & PDP11.KW11.LKS.IE) {
            this.cpu.setIRQ(this.kw11.irq);
        }
        if (this.cmp) this.cmp.updateDisplays(1);
        this.cpu.setTimer(this.kw11.timer, 1000/60);
    }

    /**
     * readLKS(addr)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.LKS or 177546)
     * @returns {number}
     */
    readLKS(addr)
    {
        /*
         * NOTE: The original code always cleared LKS.MON (bit 7) after snapping the value for the read,
         * but based on DEC's "Non-Interrupt Mode" programming examples, it's clear that's not how LKS.MON
         * operates; if the caller wants to clear it, they must explicitly clear it with a write.
         */
        return this.kw11.lks;
    }

    /**
     * writeLKS(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.LKS or 177546)
     */
    writeLKS(data, addr)
    {
        /*
         * NOTE: The original code always cleared LKS.MON (bit 7) as part of any write, but based on DEC's
         * "Non-Interrupt Mode" programming examples, which explicitly CLRB after TSTB reveals LKS.MON is set,
         * I think that was wrong, and that all a write should do is mask off all the other (non-writable) bits.
         */
        this.kw11.lks = data & PDP11.KW11.LKS.MASK;
        if (!(this.kw11.lks & PDP11.KW11.LKS.IE)) this.cpu.clearIRQ(this.kw11.irq);
    }

    /**
     * readMMR0(addr)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.MMR0 or 177572)
     * @returns {number}
     */
    readMMR0(addr)
    {
        return this.cpu.getMMR0();
    }

    /**
     * writeMMR0(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.MMR0 or 177572)
     */
    writeMMR0(data, addr)
    {
        this.cpu.setMMR0((data & ~PDP11.MMR0.COMPLETED) | (this.cpu.regMMR0 & PDP11.MMR0.COMPLETED));
    }

    /**
     * readMMR1(addr)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.MMR1 or 177574)
     * @returns {number}
     */
    readMMR1(addr)
    {
        return this.cpu.getMMR1();
    }

    /**
     * readMMR2(addr)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.MMR2 or 177576)
     * @returns {number}
     */
    readMMR2(addr)
    {
        return this.cpu.getMMR2();
    }

    /**
     * readMMR3(addr)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.MMR3 or 172516)
     * @returns {number}
     */
    readMMR3(addr)
    {
        return this.cpu.getMMR3();
    }

    /**
     * writeMMR3(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.MMR3 or 172516)
     */
    writeMMR3(data, addr)
    {
        this.cpu.setMMR3(data);
    }

    /**
     * readUNIMAP(addr)
     *
     * NOTE: The UNIBUS map ("UNIMAP") is 32 registers spread across 64 words, so we first calculate the word index.
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.UNIMAP)
     * @returns {number}
     */
    readUNIMAP(addr)
    {
        var word = (addr >> 1) & 0x3f, reg = word >> 1;
        var data = this.cpu.regsUniMap[reg];
        return (word & 1)? (data >> 16) : (data & 0xffff);
    }

    /**
     * writeUNIMAP(data, addr)
     *
     * NOTE: The UNIBUS map ("UNIMAP") is 32 registers spread across 64 words, so we first calculate the word index.
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.UNIMAP)
     */
    writeUNIMAP(data, addr)
    {
        var word = (addr >> 1) & 0x3f, reg = word >> 1;
        if (word & 1) {
            this.cpu.regsUniMap[reg] = (this.cpu.regsUniMap[reg] & 0xffff) | ((data & 0x003f) << 16);
        } else {
            this.cpu.regsUniMap[reg] = (this.cpu.regsUniMap[reg] & ~0xffff) | (data & 0xfffe);
        }
    }

    /**
     * readSIPDR(addr)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.SIPDR0--SIPDR7 or 172200--172216)
     * @returns {number}
     */
    readSIPDR(addr)
    {
        var reg = (addr >> 1) & 7;
        return this.cpu.regsPDR[1][reg];
    }

    /**
     * writeSIPDR(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.SIPDR0--SIPDR7 or 172200--172216)
     */
    writeSIPDR(data, addr)
    {
        var reg = (addr >> 1) & 7;
        this.cpu.regsPDR[1][reg] = data & 0xff0f;
    }

    /**
     * readSDPDR(addr)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.SDPDR0--SDPDR7 or 172220--172236)
     * @returns {number}
     */
    readSDPDR(addr)
    {
        var reg = ((addr >> 1) & 7) + 8;
        return this.cpu.regsPDR[1][reg];
    }

    /**
     * writeSDPDR(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.SDPDR0--SDPDR7 or 172220--172236)
     */
    writeSDPDR(data, addr)
    {
        var reg = ((addr >> 1) & 7) + 8;
        this.cpu.regsPDR[1][reg] = data & 0xff0f;
    }

    /**
     * readSIPAR(addr)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.SIPAR0--SIPAR7 or 172240--172256)
     * @returns {number}
     */
    readSIPAR(addr)
    {
        var reg = (addr >> 1) & 7;
        return this.cpu.regsPAR[1][reg];
    }

    /**
     * writeSIPAR(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.SIPAR0--SIPAR7 or 172240--172256)
     */
    writeSIPAR(data, addr)
    {
        var reg = (addr >> 1) & 7;
        this.cpu.regsPAR[1][reg] = data;
        this.cpu.regsPDR[1][reg] &= 0xff0f;

    }

    /**
     * readSDPAR(addr)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.SDPAR0--SDPAR7 or 172260--172276)
     * @returns {number}
     */
    readSDPAR(addr)
    {
        var reg = ((addr >> 1) & 7) + 8;
        return this.cpu.regsPAR[1][reg];
    }

    /**
     * writeSDPAR(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.SDPAR0--SDPAR7 or 172260--172276)
     */
    writeSDPAR(data, addr)
    {
        var reg = ((addr >> 1) & 7) + 8;
        this.cpu.regsPAR[1][reg] = data;
        this.cpu.regsPDR[1][reg] &= 0xff0f;
    }

    /**
     * readKIPDR(addr)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.KIPDR0--KIPDR7 or 172300--172316)
     * @returns {number}
     */
    readKIPDR(addr)
    {
        var reg = (addr >> 1) & 7;
        return this.cpu.regsPDR[0][reg];
    }

    /**
     * writeKIPDR(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.KIPDR0--KIPDR7 or 172300--172316)
     */
    writeKIPDR(data, addr)
    {
        var reg = (addr >> 1) & 7;
        this.cpu.regsPDR[0][reg] = data & 0xff0f;
    }

    /**
     * readKDPDR(addr)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.KDPDR0--KDPDR7 or 172320--172336)
     * @returns {number}
     */
    readKDPDR(addr)
    {
        var reg = ((addr >> 1) & 7) + 8;
        return this.cpu.regsPDR[0][reg];
    }

    /**
     * writeKDPDR(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.KDPDR0--KDPDR7 or 172320--172336)
     */
    writeKDPDR(data, addr)
    {
        var reg = ((addr >> 1) & 7) + 8;
        this.cpu.regsPDR[0][reg] = data & 0xff0f;
    }

    /**
     * readKIPAR(addr)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.KIPAR0--KIPAR7 or 172340--172356)
     * @returns {number}
     */
    readKIPAR(addr)
    {
        var reg = (addr >> 1) & 7;
        return this.cpu.regsPAR[0][reg];
    }

    /**
     * writeKIPAR(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.KIPAR0--KIPAR7 or 172340--172356)
     */
    writeKIPAR(data, addr)
    {
        var reg = (addr >> 1) & 7;
        this.cpu.regsPAR[0][reg] = data;
        this.cpu.regsPDR[0][reg] &= 0xff0f;

    }

    /**
     * readKDPAR(addr)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.KDPAR0--KDPAR7 or 172360--172376)
     * @returns {number}
     */
    readKDPAR(addr)
    {
        var reg = ((addr >> 1) & 7) + 8;
        return this.cpu.regsPAR[0][reg];
    }

    /**
     * writeKDPAR(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.KDPAR0--KDPAR7 or 172360--172376)
     */
    writeKDPAR(data, addr)
    {
        var reg = ((addr >> 1) & 7) + 8;
        this.cpu.regsPAR[0][reg] = data;
        this.cpu.regsPDR[0][reg] &= 0xff0f;
    }

    /**
     * readUIPDR(addr)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.UIPDR0--UIPDR7 or 177600--177616)
     * @returns {number}
     */
    readUIPDR(addr)
    {
        var reg = (addr >> 1) & 7;
        return this.cpu.regsPDR[3][reg];
    }

    /**
     * writeUIPDR(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.UIPDR0--UIPDR7 or 177600--177616)
     */
    writeUIPDR(data, addr)
    {
        var reg = (addr >> 1) & 7;
        this.cpu.regsPDR[3][reg] = data & 0xff0f;
    }

    /**
     * readUDPDR(addr)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.UDPDR0--UDPDR7 or 177620--177636)
     * @returns {number}
     */
    readUDPDR(addr)
    {
        var reg = ((addr >> 1) & 7) + 8;
        return this.cpu.regsPDR[3][reg];
    }

    /**
     * writeUDPDR(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.UDPDR0--UDPDR7 or 177620--177636)
     */
    writeUDPDR(data, addr)
    {
        var reg = ((addr >> 1) & 7) + 8;
        this.cpu.regsPDR[3][reg] = data & 0xff0f;
    }

    /**
     * readUIPAR(addr)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.UIPAR0--UIPAR7 or 177640--177656)
     * @returns {number}
     */
    readUIPAR(addr)
    {
        var reg = (addr >> 1) & 7;
        return this.cpu.regsPAR[3][reg];
    }

    /**
     * writeUIPAR(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.UIPAR0--UIPAR7 or 177640--177656)
     */
    writeUIPAR(data, addr)
    {
        var reg = (addr >> 1) & 7;
        this.cpu.regsPAR[3][reg] = data;
        this.cpu.regsPDR[3][reg] &= 0xff0f;

    }

    /**
     * readUDPAR(addr)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.UDPAR0--UDPAR7 or 177660--177676)
     * @returns {number}
     */
    readUDPAR(addr)
    {
        var reg = ((addr >> 1) & 7) + 8;
        return this.cpu.regsPAR[3][reg];
    }

    /**
     * writeUDPAR(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.UDPAR0--UDPAR7 or 177660--177676)
     */
    writeUDPAR(data, addr)
    {
        var reg = ((addr >> 1) & 7) + 8;
        this.cpu.regsPAR[3][reg] = data;
        this.cpu.regsPDR[3][reg] &= 0xff0f;
    }

    /**
     * readRSET0(addr)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.R0SET0--R5SET0 or 177700--177705)
     * @returns {number}
     */
    readRSET0(addr)
    {
        var data;
        var reg = addr & 7;
        if (this.cpu.regPSW & PDP11.PSW.REGSET) {
            data = this.cpu.regsAlt[reg];
        } else {
            data = this.cpu.regsGen[reg];
        }
        return data;
    }

    /**
     * writeRSET0(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.R0SET0--R5SET0 or 177700--177705)
     */
    writeRSET0(data, addr)
    {
        var reg = addr & 7;
        if (this.cpu.regPSW & PDP11.PSW.REGSET) {
            this.cpu.regsAlt[reg] = data;
        } else {
            this.cpu.regsGen[reg] = data;
        }
    }

    /**
     * readR6KERNEL(addr)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.R6KERNEL or 177706)
     * @returns {number}
     */
    readR6KERNEL(addr)
    {
        var data;
        if (!(this.cpu.regPSW & PDP11.PSW.CMODE)) {         // Kernel Mode
            data = this.cpu.regsGen[6];
        } else {
            data = this.cpu.regsAltStack[0];
        }
        return data;
    }

    /**
     * writeR6KERNEL(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.R6KERNEL or 177706)
     */
    writeR6KERNEL(data, addr)
    {
        if (!(this.cpu.regPSW & PDP11.PSW.CMODE)) {         // Kernel Mode
            this.cpu.regsGen[6] = data;
        } else {
            this.cpu.regsAltStack[0] = data;
        }
    }

    /**
     * readR7KERNEL(addr)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.R7KERNEL or 177707)
     * @returns {number}
     */
    readR7KERNEL(addr)
    {
        return this.cpu.regsGen[7];
    }

    /**
     * writeR7KERNEL(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.R7KERNEL or 177707)
     */
    writeR7KERNEL(data, addr)
    {
        this.cpu.regsGen[7] = data;
    }

    /**
     * readRSET1(addr)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.R0SET1--R5SET1 or 177710--177715)
     * @returns {number}
     */
    readRSET1(addr)
    {
        var data;
        var reg = addr & 7;
        if (this.cpu.regPSW & PDP11.PSW.REGSET) {
            data = this.cpu.regsGen[reg];
        } else {
            data = this.cpu.regsAlt[reg];
        }
        return data;
    }

    /**
     * writeRSET1(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.R0SET1--R5SET1 or 177710--177715)
     */
    writeRSET1(data, addr)
    {
        var reg = addr & 7;
        if (this.cpu.regPSW & PDP11.PSW.REGSET) {
            this.cpu.regsGen[reg] = data;
        } else {
            this.cpu.regsAlt[reg] = data;
        }
    }

    /**
     * readR6SUPER(addr)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.R6SUPER or 177716)
     * @returns {number}
     */
    readR6SUPER(addr)
    {
        var data;
        if (((this.cpu.regPSW & PDP11.PSW.CMODE) >> PDP11.PSW.SHIFT.CMODE) == PDP11.MODE.SUPER) {
            data = this.cpu.regsGen[6];
        } else {
            data = this.cpu.regsAltStack[1];
        }
        return data;
    }

    /**
     * writeR6SUPER(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.R6SUPER or 177716)
     */
    writeR6SUPER(data, addr)
    {
        if (((this.cpu.regPSW & PDP11.PSW.CMODE) >> PDP11.PSW.SHIFT.CMODE) == PDP11.MODE.SUPER) {
            this.cpu.regsGen[6] = data;
        } else {
            this.cpu.regsAltStack[1] = data;
        }
    }

    /**
     * readR6USER(addr)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.R6USER or 177717)
     * @returns {number}
     */
    readR6USER(addr)
    {
        var data;
        if (((this.cpu.regPSW & PDP11.PSW.CMODE) >> PDP11.PSW.SHIFT.CMODE) == PDP11.MODE.USER) {
            data = this.cpu.regsGen[6];
        } else {
            data = this.cpu.regsAltStack[3];
        }
        return data;
    }

    /**
     * writeR6USER(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.R6USER or 177717)
     */
    writeR6USER(data, addr)
    {
        if (((this.cpu.regPSW & PDP11.PSW.CMODE) >> PDP11.PSW.SHIFT.CMODE) == PDP11.MODE.USER) {
            this.cpu.regsGen[6] = data;
        } else {
            this.cpu.regsAltStack[3] = data;
        }
    }

    /**
     * readCTRL(addr)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.LAERR--UNDEF2 or 177740--177756)
     * @returns {number}
     */
    readCTRL(addr)
    {
        var reg = (addr - PDP11.UNIBUS.CTRL) >> 1;
        return this.cpu.regsControl[reg];
    }

    /**
     * writeCTRL(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.LAERR--UNDEF2 or 177740--177756)
     */
    writeCTRL(data, addr)
    {
        var reg = (addr - PDP11.UNIBUS.CTRL) >> 1;
        this.cpu.regsControl[reg] = data;
    }

    /**
     * readSIZE(addr)
     *
     * We're adhering to DEC's documentation, which says:
     *
     *      This read-only register specifies the memory size of the system. It is defined to indicate the
     *      last addressable block of 32 words in memory (bit 0 is equivalent to bit 6 of the Physical Address).
     *
     * Looking at the Memory Clear "toggle-in" code in /devices/pdp11/machine/1170/panel/debugger/README.md, the
     * memory loop gives up when the block number stored in KIPAR0 is >= LSIZE, suggesting that LSIZE is actually
     * the total number of 64-byte blocks, rather than the block number of the last block.  But that code is
     * not conclusive, since it writes 8192 bytes at a time rather than 64, so it doesn't really matter if LSIZE
     * is off by one.
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.LSIZE--HSIZE or 177760--177762)
     * @returns {number}
     */
    readSIZE(addr)
    {
        return addr == PDP11.UNIBUS.LSIZE? ((this.bus.getMemoryLimit(MemoryPDP11.TYPE.RAM) >> 6) - 1) : 0;
    }

    /**
     * writeSIZE(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.LSIZE--HSIZE or 177760--177762)
     */
    writeSIZE(data, addr)
    {
    }

    /**
     * readSYSID(addr)
     *
     * TODO: For SYSID, we currently ignore writes and return 1 on reads
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.SYSID or 177764)
     * @returns {number}
     */
    readSYSID(addr)
    {
        return 1;
    }

    /**
     * writeSYSID(data, addr)
     *
     * TODO: For SYSID, we currently ignore writes and return 1 on reads
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.SYSID or 177764)
     */
    writeSYSID(data, addr)
    {
    }

    /**
     * readCPUERR(addr)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.CPUERR or 177766)
     * @returns {number}
     */
    readCPUERR(addr)
    {
        return this.cpu.regErr;
    }

    /**
     * writeCPUERR(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.CPUERR or 177766)
     */
    writeCPUERR(data, addr)
    {
        this.cpu.regErr = 0;        // TODO: Confirm that writes always zero the register
    }

    /**
     * readMBR(addr)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.MB or 177770)
     * @returns {number}
     */
    readMBR(addr)
    {
        return this.cpu.regMBR;
    }

    /**
     * writeMBR(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.MB or 177770)
     */
    writeMBR(data, addr)
    {
        if (!(addr & 0x1)) {
            data &= 0xff;           // required for KB11-CM without MFPT instruction
        }
        this.cpu.regMBR = data;
    }

    /**
     * readPIR(addr, fPreWrite)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.PIR or 177772)
     * @param {boolean} [fPreWrite]
     * @returns {number}
     */
    readPIR(addr, fPreWrite)
    {
        if (fPreWrite) return 0;
        return this.cpu.getPIR();
    }

    /**
     * writePIR(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.PIR or 177772)
     */
    writePIR(data, addr)
    {
        this.cpu.setPIR(data);
    }

    /**
     * readSLR(addr, fPreWrite)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.SL or 177774)
     * @param {boolean} [fPreWrite]
     * @returns {number}
     */
    readSLR(addr, fPreWrite)
    {
        if (fPreWrite) return 0;
        return this.cpu.getSLR();
    }

    /**
     * writeSLR(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.SL or 177774)
     */
    writeSLR(data, addr)
    {
        this.cpu.setSLR(data);
    }

    /**
     * readPSW(addr)
     *
     * @this {DevicePDP11}
     * @param {number} addr (eg, PDP11.UNIBUS.PSW or 177776)
     * @returns {number}
     */
    readPSW(addr)
    {
        return this.cpu.getPSW();
    }

    /**
     * writePSW(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.PSW or 177776)
     */
    writePSW(data, addr)
    {
        /*
         * pdp11.js disallowed PSW.TF in addition to PSW.UNUSED, but DEC's "TRAP TEST" expects the
         * following instruction to trap:
         *
         *      004174: 052767 000020 173574   BIS   #20,177776
         *
         * Since that test was written for the PDP-11/20, it's possible that newer machines have a different
         * behavior, but for now, we assume that all machines allow setting PSW.TF.
         *
         * Moreover, we have changed setPSW() to disallow the setting of any bits not supported by the current
         * CPU model, so it seems rather pointless to do any masking of bits here.
         */
        this.cpu.setPSW(data);
    }

    /**
     * writeIgnored(data, addr)
     *
     * @this {DevicePDP11}
     * @param {number} data
     * @param {number} addr
     */
    writeIgnored(data, addr)
    {
        this.printf(MESSAGE.ADDR, "writeIgnored(%o): %o\n", addr, data);
    }

    /**
     * DevicePDP11.init()
     *
     * This function operates on every HTML element of class "device", extracting the
     * JSON-encoded parameters for the DevicePDP11 constructor from the element's "data-value"
     * attribute, invoking the constructor to create a DevicePDP11 component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        var aeDevice = Component.getElementsByClass(APPCLASS, "device");
        for (var iDevice = 0; iDevice < aeDevice.length; iDevice++) {
            var device;
            var eDevice = aeDevice[iDevice];
            var parmsDevice = Component.getComponentParms(eDevice);
            switch(parmsDevice['type']) {
            case 'default':
                device = new DevicePDP11(parmsDevice);
                Component.bindComponentControls(device, eDevice, APPCLASS);
                break;
            case 'pc11':
                device = new PC11(parmsDevice);
                Component.bindComponentControls(device, eDevice, APPCLASS);
                break;
            case 'rl11':
                device = new RL11(parmsDevice);
                Component.bindComponentControls(device, eDevice, APPCLASS);
                break;
            case 'rk11':
                device = new RK11(parmsDevice);
                Component.bindComponentControls(device, eDevice, APPCLASS);
                break;
            case 'rx11':
                device = new RX11(parmsDevice);
                Component.bindComponentControls(device, eDevice, APPCLASS);
                break;
            }
        }
    }
}

/*
 * ES6 ALERT: As you can see below, I've finally started using computed property names.
 */
DevicePDP11.UNIBUS_IOTABLE = {
    [PDP11.UNIBUS.UNIMAP]:  /* 170200 */    [null, null, DevicePDP11.prototype.readUNIMAP,  DevicePDP11.prototype.writeUNIMAP,  "UNIMAP",   64, PDP11.MODEL_1170],
    [PDP11.UNIBUS.SIPDR0]:  /* 172200 */    [null, null, DevicePDP11.prototype.readSIPDR,   DevicePDP11.prototype.writeSIPDR,   "SIPDR",    8,  PDP11.MODEL_1145, MESSAGE.MMU],
    [PDP11.UNIBUS.SDPDR0]:  /* 172220 */    [null, null, DevicePDP11.prototype.readSDPDR,   DevicePDP11.prototype.writeSDPDR,   "SDPDR",    8,  PDP11.MODEL_1145, MESSAGE.MMU],
    [PDP11.UNIBUS.SIPAR0]:  /* 172240 */    [null, null, DevicePDP11.prototype.readSIPAR,   DevicePDP11.prototype.writeSIPAR,   "SIPAR",    8,  PDP11.MODEL_1145, MESSAGE.MMU],
    [PDP11.UNIBUS.SDPAR0]:  /* 172260 */    [null, null, DevicePDP11.prototype.readSDPAR,   DevicePDP11.prototype.writeSDPAR,   "SDPAR",    8,  PDP11.MODEL_1145, MESSAGE.MMU],
    [PDP11.UNIBUS.KIPDR0]:  /* 172300 */    [null, null, DevicePDP11.prototype.readKIPDR,   DevicePDP11.prototype.writeKIPDR,   "KIPDR",    8,  PDP11.MODEL_1140, MESSAGE.MMU],
    [PDP11.UNIBUS.KDPDR0]:  /* 172320 */    [null, null, DevicePDP11.prototype.readKDPDR,   DevicePDP11.prototype.writeKDPDR,   "KDPDR",    8,  PDP11.MODEL_1145, MESSAGE.MMU],
    [PDP11.UNIBUS.KIPAR0]:  /* 172340 */    [null, null, DevicePDP11.prototype.readKIPAR,   DevicePDP11.prototype.writeKIPAR,   "KIPAR",    8,  PDP11.MODEL_1140, MESSAGE.MMU],
    [PDP11.UNIBUS.KDPAR0]:  /* 172360 */    [null, null, DevicePDP11.prototype.readKDPAR,   DevicePDP11.prototype.writeKDPAR,   "KDPAR",    8,  PDP11.MODEL_1145, MESSAGE.MMU],
    [PDP11.UNIBUS.MMR3]:    /* 172516 */    [null, null, DevicePDP11.prototype.readMMR3,    DevicePDP11.prototype.writeMMR3,    "MMR3",     1,  PDP11.MODEL_1145, MESSAGE.MMU],
    [PDP11.UNIBUS.LKS]:     /* 177546 */    [null, null, DevicePDP11.prototype.readLKS,     DevicePDP11.prototype.writeLKS,     "LKS"],
    [PDP11.UNIBUS.MMR0]:    /* 177572 */    [null, null, DevicePDP11.prototype.readMMR0,    DevicePDP11.prototype.writeMMR0,    "MMR0",     1,  PDP11.MODEL_1140, MESSAGE.MMU],
    [PDP11.UNIBUS.MMR1]:    /* 177574 */    [null, null, DevicePDP11.prototype.readMMR1,    DevicePDP11.prototype.writeIgnored, "MMR1",     1,  PDP11.MODEL_1145, MESSAGE.MMU],
    [PDP11.UNIBUS.MMR2]:    /* 177576 */    [null, null, DevicePDP11.prototype.readMMR2,    DevicePDP11.prototype.writeIgnored, "MMR2",     1,  PDP11.MODEL_1140, MESSAGE.MMU],
    [PDP11.UNIBUS.UIPDR0]:  /* 177600 */    [null, null, DevicePDP11.prototype.readUIPDR,   DevicePDP11.prototype.writeUIPDR,   "UIPDR",    8,  PDP11.MODEL_1140, MESSAGE.MMU],
    [PDP11.UNIBUS.UDPDR0]:  /* 177620 */    [null, null, DevicePDP11.prototype.readUDPDR,   DevicePDP11.prototype.writeUDPDR,   "UDPDR",    8,  PDP11.MODEL_1145, MESSAGE.MMU],
    [PDP11.UNIBUS.UIPAR0]:  /* 177640 */    [null, null, DevicePDP11.prototype.readUIPAR,   DevicePDP11.prototype.writeUIPAR,   "UIPAR",    8,  PDP11.MODEL_1140, MESSAGE.MMU],
    [PDP11.UNIBUS.UDPAR0]:  /* 177660 */    [null, null, DevicePDP11.prototype.readUDPAR,   DevicePDP11.prototype.writeUDPAR,   "UDPAR",    8,  PDP11.MODEL_1145, MESSAGE.MMU],
    [PDP11.UNIBUS.R0SET0]:  /* 177700 */    [null, null, DevicePDP11.prototype.readRSET0,   DevicePDP11.prototype.writeRSET0,   "R0SET0"],
    [PDP11.UNIBUS.R1SET0]:  /* 177701 */    [null, null, DevicePDP11.prototype.readRSET0,   DevicePDP11.prototype.writeRSET0,   "R1SET0"],
    [PDP11.UNIBUS.R2SET0]:  /* 177702 */    [null, null, DevicePDP11.prototype.readRSET0,   DevicePDP11.prototype.writeRSET0,   "R2SET0"],
    [PDP11.UNIBUS.R3SET0]:  /* 177703 */    [null, null, DevicePDP11.prototype.readRSET0,   DevicePDP11.prototype.writeRSET0,   "R3SET0"],
    [PDP11.UNIBUS.R4SET0]:  /* 177704 */    [null, null, DevicePDP11.prototype.readRSET0,   DevicePDP11.prototype.writeRSET0,   "R4SET0"],
    [PDP11.UNIBUS.R5SET0]:  /* 177705 */    [null, null, DevicePDP11.prototype.readRSET0,   DevicePDP11.prototype.writeRSET0,   "R5SET0"],
    [PDP11.UNIBUS.R6KERNEL]:/* 177706 */    [null, null, DevicePDP11.prototype.readR6KERNEL,DevicePDP11.prototype.writeR6KERNEL,"R6KERNEL"],
    [PDP11.UNIBUS.R7KERNEL]:/* 177707 */    [null, null, DevicePDP11.prototype.readR7KERNEL,DevicePDP11.prototype.writeR7KERNEL,"R7KERNEL"],
    [PDP11.UNIBUS.R0SET1]:  /* 177710 */    [null, null, DevicePDP11.prototype.readRSET1,   DevicePDP11.prototype.writeRSET1,   "R0SET1",   1,  PDP11.MODEL_1145],
    [PDP11.UNIBUS.R1SET1]:  /* 177711 */    [null, null, DevicePDP11.prototype.readRSET1,   DevicePDP11.prototype.writeRSET1,   "R1SET1",   1,  PDP11.MODEL_1145],
    [PDP11.UNIBUS.R2SET1]:  /* 177712 */    [null, null, DevicePDP11.prototype.readRSET1,   DevicePDP11.prototype.writeRSET1,   "R2SET1",   1,  PDP11.MODEL_1145],
    [PDP11.UNIBUS.R3SET1]:  /* 177713 */    [null, null, DevicePDP11.prototype.readRSET1,   DevicePDP11.prototype.writeRSET1,   "R3SET1",   1,  PDP11.MODEL_1145],
    [PDP11.UNIBUS.R4SET1]:  /* 177714 */    [null, null, DevicePDP11.prototype.readRSET1,   DevicePDP11.prototype.writeRSET1,   "R4SET1",   1,  PDP11.MODEL_1145],
    [PDP11.UNIBUS.R5SET1]:  /* 177715 */    [null, null, DevicePDP11.prototype.readRSET1,   DevicePDP11.prototype.writeRSET1,   "R5SET1",   1,  PDP11.MODEL_1145],
    [PDP11.UNIBUS.R6SUPER]: /* 177716 */    [null, null, DevicePDP11.prototype.readR6SUPER, DevicePDP11.prototype.writeR6SUPER, "R6SUPER",  1,  PDP11.MODEL_1145],
    [PDP11.UNIBUS.R6USER]:  /* 177717 */    [null, null, DevicePDP11.prototype.readR6USER,  DevicePDP11.prototype.writeR6USER,  "R6USER",   1,  PDP11.MODEL_1145],
    [PDP11.UNIBUS.CTRL]:    /* 177740 */    [null, null, DevicePDP11.prototype.readCTRL,    DevicePDP11.prototype.writeCTRL,    "CTRL",     8,  PDP11.MODEL_1170],
    [PDP11.UNIBUS.LSIZE]:   /* 177760 */    [null, null, DevicePDP11.prototype.readSIZE,    DevicePDP11.prototype.writeSIZE,    "LSIZE",    1,  PDP11.MODEL_1170],
    [PDP11.UNIBUS.HSIZE]:   /* 177762 */    [null, null, DevicePDP11.prototype.readSIZE,    DevicePDP11.prototype.writeSIZE,    "HSIZE",    1,  PDP11.MODEL_1170],
    [PDP11.UNIBUS.SYSID]:   /* 177764 */    [null, null, DevicePDP11.prototype.readSYSID,   DevicePDP11.prototype.writeSYSID,   "SYSID",    1,  PDP11.MODEL_1170],
    [PDP11.UNIBUS.CPUERR]:  /* 177766 */    [null, null, DevicePDP11.prototype.readCPUERR,  DevicePDP11.prototype.writeCPUERR,  "ERR",      1,  PDP11.MODEL_1170],
    [PDP11.UNIBUS.MB]:      /* 177770 */    [null, null, DevicePDP11.prototype.readMBR,     DevicePDP11.prototype.writeMBR,     "MBR",      1,  PDP11.MODEL_1170],
    [PDP11.UNIBUS.PIR]:     /* 177772 */    [null, null, DevicePDP11.prototype.readPIR,     DevicePDP11.prototype.writePIR,     "PIR"],
    [PDP11.UNIBUS.SL]:      /* 177774 */    [null, null, DevicePDP11.prototype.readSLR,     DevicePDP11.prototype.writeSLR,     "SLR"],
    [PDP11.UNIBUS.PSW]:     /* 177776 */    [null, null, DevicePDP11.prototype.readPSW,     DevicePDP11.prototype.writePSW,     "PSW"]
};

/*
 * Initialize all the DevicePDP11 modules on the page.
 */
WebLib.onInit(DevicePDP11.init);
