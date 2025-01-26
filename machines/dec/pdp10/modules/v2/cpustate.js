/**
 * @fileoverview Implements the PDP-10 CPU component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import BusPDP10 from "./bus.js";
import CPUPDP10 from "./cpu.js";
import MESSAGE from "./message.js";
import Component from "../../../../modules/v2/component.js";
import State from "../../../../modules/v2/state.js";
import WebLib from "../../../../modules/v2/weblib.js";
import { APPCLASS, DEBUG, DEBUGGER, PDP10 } from "./defines.js";

/*
 * Overview of Device Interrupt Support
 *
 * Originally, the CPU maintained a queue of requested interrupts.  Entries in this queue recorded a device's
 * priority, vector, and delay (ie, a number of instructions to execute before dispatching the interrupt).  This
 * queue would constantly grow and shrink as requests were issued and dispatched, and as long as there was something
 * in the queue, the CPU was constantly examining it.
 *
 * Now we are trying something more efficient.  First, for devices that require delays (like the SerialPort's receiver
 * and transmitter buffer registers, which are supposed to "clock" the data in and out at a specific baud rate), the
 * CPU offers timer services that will "fire" a callback after a specified delay, which are much more efficient than
 * requiring the CPU to dive into an interrupt queue and decrement delay counts on every instruction.
 *
 * Second, devices that generate interrupts will allocate an IRQ object during initialization; we will no longer
 * be creating and destroying interrupt event objects and inserting/deleting them in a constantly changing queue.
 * Each IRQ contains properties that never change (eg, the vector and priority), along with a "next" pointer that's
 * only used when the IRQ is active.
 *
 * When a device decides it's time to interrupt (either at the end of some I/O operation or when a timer has fired),
 * it will simply set the IRQ, which basically means that the IRQ will be linked onto a list of active IRQs, in
 * priority order, so that when the CPU is ready to acknowledge interrupts, it need only check the top of the active
 * IRQ list.
 */

/**
 * @typedef {Object} IRQ
 * @property {number} vector
 * @property {number} priority
 * @property {number} message
 * @property {string|null} name
 * @property {IRQ|null} next
 */

/**
 * @class CPUStatePDP10
 * @unrestricted
 */
export default class CPUStatePDP10 extends CPUPDP10 {
    /**
     * CPUStatePDP10(parmsCPU)
     *
     * The CPUStatePDP10 class uses the following (parmsCPU) properties:
     *
     *      model: a number (eg, 1001) that should match one of the PDP10.MODEL_* values
     *      addrReset: reset address (default is 0)
     *
     * This extends the CPU class and passes any remaining parmsCPU properties to the CPU class
     * constructor, along with a default speed (cycles per second) based on the specified (or default)
     * CPU model number.
     *
     * Speeds are highly instruction-specific and are not broken down into cycles; DEC documents them
     * as a number of microseconds, with two decimal places of accuracy.  The simplest instructions
     * execute in 1-3us, a number of others require 5-6us, and the most time-consuming take anywhere
     * from 10us (MUL) to 17us (DIV).  Of course, instructions that perform multiple indirect memory
     * accesses take even longer.
     *
     * I think we'll just say that the original PDP-10 was roughly a 1Mhz machine, and pretend that all
     * instructions completed in 1 or more multiples of a microsecond.  I'm not sure that trying to be
     * accurate to the nearest 1/100 of a microsecond would have much observable benefit.
     *
     * @param {Object} parmsCPU
     */
    constructor(parmsCPU)
    {
        var nCyclesDefault = 0;
        var model = +parmsCPU['model'] || PDP10.MODEL_KA10;

        switch(model) {
        case PDP10.MODEL_KA10:
        default:
            nCyclesDefault = 1000000;
            break;
        }

        /*
         * ES6 ALERT: Classes cannot access "this" until all superclasses have been initialized as well.
         */
        super(parmsCPU, nCyclesDefault);

        this.model = model;
        this.lastPC = this.addrReset = +parmsCPU['addrReset'] || 0;

        this.opDecode = PDP10.opKA10.bind(this);
        this.opUndefined = PDP10.opUndefined.bind(this);

        /** @type {IRQ|null} */
        this.irqNext = null;        // the head of the active IRQ list, in priority order

        /** @type {Array.<IRQ>} */
        this.aIRQs = [];            // list of all IRQs, active or not (to be used for auto-configuration)

        this.flags.complete = false;
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * Called once the Bus has been initialized.
     *
     * @this {CPUStatePDP10}
     * @param {ComputerPDP10} cmp
     * @param {BusPDP10} bus
     * @param {CPUPDP10} cpu
     * @param {DebuggerPDP10} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        super.initBus(cmp, bus, cpu, dbg);
    }

    /**
     * reset()
     *
     * @this {CPUStatePDP10}
     */
    reset()
    {
        this.printf(MESSAGE.STATUS, "Model %s\n", this.model);
        if (this.flags.running) this.stopCPU();
        this.initCPU();
        this.resetCycles();
        this.clearError();      // clear any fatal error/exception that setError() may have flagged
        super.reset();
    }

    /**
     * initCPU()
     *
     * @this {CPUStatePDP10}
     */
    initCPU()
    {
        /*
         * regEA is the last effective address, while regLA is the last fetch from an effective address
         * calculation.  regRA is the last reference address used to calculate the last effective address.
         */
        this.regEA  = this.regRA = 0;
        this.regLA  = this.regOP = 0;
        this.regPC  = this.lastPC = this.addrReset;
        this.regXC  = -1;       // if >= 0 this supersedes regPC (refers to an opcode from XCT)
        this.regBP  = -1;       // active byte pointer (-1 if none)
        this.regPS  =  0;       // assorted processor flags (see PSFLAG bit definitions)
        this.regEX  =  0;       // internal "extension" register used for 72-bit MUL and DIV calculations

        this.regRes = [0, 0];   // four internal "double-length" registers used for 72-bit DIV calculations
        this.regPow = [0, 0];
        this.regDiv = [0, 0];
        this.regRem = [0, 0];

        /*
         * This is queried and displayed by the Panel when it's not displaying its own ADDRESS register
         * (which takes precedence when, for example, you've manually halted the CPU and are independently
         * examining the contents of other addresses).
         *
         * We initialize it to the current PC.
         */
        this.addrLast = this.regPC;

        /*
         * opFlags contains various conditions that stepCPU() needs to be aware of.
         */
        this.opFlags = 0;

        this.setMemoryAccess();

        this.resetIRQs();
    }

    /**
     * setMemoryAccess()
     *
     * @this {CPUStatePDP10}
     */
    setMemoryAccess()
    {
        this.readWord = this.readWordFromPhysical;
        this.writeWord = this.writeWordToPhysical;
    }

    /**
     * setReset(addr, fStart, bUnit, addrStack)
     *
     * @this {CPUStatePDP10}
     * @param {number} addr
     * @param {boolean} [fStart] (true if a "startable" image was just loaded, false if not)
     * @param {number} [bUnit] (boot unit #)
     * @param {number} [addrStack]
     */
    setReset(addr, fStart, bUnit, addrStack)
    {
        this.addrReset = addr;

        this.setPC(addr);

        if (fStart) {
            if (!this.flags.powered) {
                this.flags.autoStart = true;
            }
            else if (!this.flags.running) {
                this.startCPU();
            }
        }
        else {
            if (this.dbg && this.flags.powered) {
                /*
                 * TODO: Review the decision to always stop the CPU if the Debugger is loaded.  Note that
                 * when stopCPU() stops a running CPU, the Debugger gets notified, so no need to notify it again.
                 *
                 * TODO: There are more serious problems to deal with if another component is slamming a new PC down
                 * the CPU's throat (presumably while also dropping some new code into RAM) while the CPU is running;
                 * we should probably force a complete reset, but for now, it's up to the user to hit the reset button
                 * themselves.
                 */
                if (!this.stopCPU() && !this.cmp.flags.reset) {
                    this.dbg.updateStatus();
                    this.cmp.updateDisplays(-1);
                }
            }
            else if (fStart === false) {
                this.stopCPU();
            }
        }
        if (!this.isRunning() && this.panel) this.panel.stop();
    }

    /**
     * getChecksum()
     *
     * TODO: Implement
     *
     * @this {CPUStatePDP10}
     * @returns {number} a 32-bit summation of key elements of the current CPU state (used by the CPU checksum code)
     */
    getChecksum()
    {
        return 0;
    }

    /**
     * save()
     *
     * @this {CPUStatePDP10}
     * @returns {Object|null}
     */
    save()
    {
        var state = new State(this);
        state.set(0, [
            this.regEA,
            this.regRA,
            this.regLA,
            this.regOP,
            this.regPC,
            this.regXC,
            this.regBP,
            this.regPS,
            this.opFlags,
            this.lastPC,
            this.addrLast,
            this.addrReset
        ]);
        state.set(1, []);
        state.set(2, [this.nTotalCycles, this.getSpeed(), this.flags.autoStart]);
        state.set(3, this.saveIRQs());
        state.set(4, this.saveTimers());
        return state.data();
    }

    /**
     * restore(data)
     *
     * @this {CPUStatePDP10}
     * @param {Object} data
     * @returns {boolean} true if restore successful, false if not
     */
    restore(data)
    {
        /*
         * ES6 ALERT: A handy destructuring assignment, which makes it easy to perform the inverse
         * of what save() does when it collects a bunch of object properties into an array.
         */
        [
            this.regEA,
            this.regRA,
            this.regLA,
            this.regOP,
            this.regPC,
            this.regXC,
            this.regBP,
            this.regPS,
            this.opFlags,
            this.lastPC,
            this.addrLast,
            this.addrReset
        ] = data[0];

        var a = data[2];
        this.nTotalCycles = a[0];
        this.setSpeed(a[1]);
        this.flags.autoStart = a[2];

        this.restoreIRQs(data[3]);
        this.restoreTimers(data[4]);
        return true;
    }

    /**
     * getPS()
     *
     * Gets the processor state flags in the format required by various program control operations (eg, JSP).
     *
     * @this {CPUStatePDP10}
     * @returns {number}
     */
    getPS()
    {
        return (this.regPS & PDP10.HALF_MASK);
    }

    /**
     * setPS(w)
     *
     * Sets the processor state flags in the format required by various program control operations (eg, JRST).
     *
     * @this {CPUStatePDP10}
     * @param {number} w
     */
    setPS(w)
    {
        this.regPS = (this.regPS & ~PDP10.PSFLAG.SET_MASK) | (w & PDP10.PSFLAG.SET_MASK);
        this.regPS |= (w & PDP10.PSFLAG.USERF);
        if (!(w & PDP10.PSFLAG.EXIOT)) {
            this.regPS &= ~PDP10.PSFLAG.EXIOT;
        } else {
            if (!(this.regPS & PDP10.PSFLAG.USERF)) this.regPS |= PDP10.PSFLAG.EXIOT;
        }
    }

    /**
     * setUserMode()
     *
     * Sets the processor's USER_MODE flag.
     *
     * @this {CPUStatePDP10}
     */
    setUserMode()
    {
        this.regPS |= PDP10.PSFLAG.USERF;
    }

    /**
     * readFlags()
     *
     * Used to implement the ""CONI APR," instruction; see opCONI().
     *
     * @this {CPUStatePDP10}
     * @returns {number}
     */
    readFlags()
    {
        var flags = 0;
        if (this.regPS & PDP10.PSFLAG.AROV) flags |= PDP10.RFLAG.AROV;
        if (this.regPS & PDP10.PSFLAG.PDOV) flags |= PDP10.RFLAG.PDOV;
        return flags;
    }

    /**
     * writeFlags(w)
     *
     * Used to implement the ""CONO APR," instruction; see opCONO().
     *
     * @this {CPUStatePDP10}
     * @param {number} w
     */
    writeFlags(w)
    {
        if (w & PDP10.WFLAG.AROV_CL) this.regPS &= ~PDP10.PSFLAG.AROV;
        if (w & PDP10.WFLAG.PDOV_CL) this.regPS &= ~PDP10.PSFLAG.PDOV;
    }

    /**
     * getOpcode()
     *
     * Normally, this fetches the next opcode in regOP, decodes the low 23 bits (I,X,Y), records
     * the effective address (E) in regEA, updates regPC, and returns the high 13 bits of the opcode
     * for further decoding.
     *
     * However, if a reference address (R) in regRA still needs to be decoded (due to indirection),
     * we take care of that first.
     *
     * @this {CPUStatePDP10}
     * @returns {number} (-1 if the reference address in regRA has not yet been fully decoded)
     */
    getOpcode()
    {
        if ((this.regRA & PDP10.OPCODE.I_FIELD)) {
            this.regRA = this.regLA = this.readWord(this.regEA);
        } else if (this.regXC >= 0) {
            this.regRA = this.regOP = this.readWord(this.regXC);
            this.regXC = -1;
        } else {
            this.regRA = this.regOP = this.readWord(this.lastPC = this.regPC);
            this.regPC = (this.regPC + 1) % PDP10.ADDR_LIMIT;
        }

        /*
         * Technically, we don't REALLY need to mask regRA with R_MASK, because all regRA accesses
         * ignore any higher bits, but let's keep things tidy.
         */
        this.regRA &= PDP10.OPCODE.R_MASK;

        /*
         * Bits 0-22 (I,X,Y) contain what we call a "reference address" (R), which is used to calculate an
         * 18-bit "effective address" (E).  To determine E from R, we must extract I, X, and Y from R, set E
         * to Y, then add [X] to E if X is non-zero.  If I is zero, then we're done; otherwise, we must set R
         * to [E] and repeat the process.
         *
         * However, we don't actually repeat the process immediately; we need to treat each indirection as a
         * separate decoding step, to ensure that the emulator can "breathe" periodically.  So instead, we
         * return -1, indicating that the opcode is not fully decoded, and then on the next call, instead of
         * fetching another opcode, we fetch [E], update R, and decode R again.
         */
        this.regEA = this.regRA & PDP10.OPCODE.Y_MASK;
        var x = (this.regRA >> PDP10.OPCODE.X_SHIFT) & PDP10.OPCODE.X_MASK;
        if (x) this.regEA = (this.regEA + (this.regLA = this.readWord(x))) & PDP10.ADDR_MASK;

        return (this.regRA & PDP10.OPCODE.I_FIELD)? -1 : ((this.regOP / PDP10.OPCODE.A_SCALE)|0);
    }

    /**
     * advancePC(off)
     *
     * NOTE: This function is nothing more than a convenience, and we fully expect it to be inlined at runtime.
     *
     * @this {CPUStatePDP10}
     * @param {number} off
     * @returns {number} (original PC)
     */
    advancePC(off)
    {
        var pc = this.regPC;
        this.regPC = (pc + off) % PDP10.ADDR_LIMIT;
        return pc;
    }

    /**
     * getPC()
     *
     * NOTE: This function is nothing more than a convenience, and we fully expect it to be inlined at runtime.
     *
     * @this {CPUStatePDP10}
     * @returns {number}
     */
    getPC()
    {
        return this.regPC;
    }

    /**
     * getXC()
     *
     * NOTE: This function is nothing more than a convenience, and we fully expect it to be inlined at runtime.
     *
     * @this {CPUStatePDP10}
     * @returns {number}
     */
    getXC()
    {
        return this.regXC >= 0? this.regXC : ((this.regRA & PDP10.OPCODE.I_FIELD)? this.lastPC : this.regPC);
    }

    /**
     * getLastAddr()
     *
     * @this {CPUStatePDP10}
     * @returns {number}
     */
    getLastAddr()
    {
        return this.addrLast;
    }

    /**
     * getLastPC()
     *
     * @this {CPUStatePDP10}
     * @returns {number}
     */
    getLastPC()
    {
        return this.lastPC;
    }

    /**
     * setPC(addr)
     *
     * Updates the PC register with the new address after masking it with ADDR_LIMIT (in case the
     * new address was the result of an unchecked calculation).
     *
     * @this {CPUStatePDP10}
     * @param {number} addr
     */
    setPC(addr)
    {
        this.regRA = 0;
        this.regXC = -1;
        this.regPC = addr % PDP10.ADDR_LIMIT;
    }

    /**
     * addIRQ(vector, priority, message)
     *
     * @this {CPUStatePDP10}
     * @param {number} vector (-1 for floating vector)
     * @param {number} priority
     * @param {number} [message]
     * @returns {IRQ}
     */
    addIRQ(vector, priority, message)
    {
        var irq = {vector: vector, priority: priority, message: message || 0, name: null, next: null};
        this.aIRQs.push(/** @type {IRQ} */ (irq));      // TODO: Why the F*CK do I need a type override? Damn JSDoc types....
        return irq;
    }

    /**
     * insertIRQ(irq)
     *
     * @this {CPUStatePDP10}
     * @param {IRQ} irq
     */
    insertIRQ(irq)
    {
        if (irq != this.irqNext) {
            var irqPrev = this.irqNext;
            if (!irqPrev || irqPrev.priority <= irq.priority) {
                irq.next = irqPrev;
                this.irqNext = irq;
            } else {
                do {
                    var irqNext = irqPrev.next;
                    if (!irqNext || irqNext.priority <= irq.priority) {
                        irq.next = irqNext;
                        irqPrev.next = irq;
                        break;
                    }
                    irqPrev = irqNext;
                } while (irqPrev);
            }
        }
        /*
         * See the writeXCSR() function for an explanation of why signalling an IRQ hardware interrupt
         * should be done using IRQ_DELAY rather than setting IRQ directly.
         */
        this.opFlags |= PDP10.OPFLAG.IRQ_DELAY;
    }

    /**
     * removeIRQ(irq)
     *
     * @this {CPUStatePDP10}
     * @param {IRQ} irq
     */
    removeIRQ(irq)
    {
        var irqPrev = this.irqNext;
        if (irqPrev == irq) {
            this.irqNext = irq.next;
        } else {
            while (irqPrev) {
                var irqNext = irqPrev.next;
                if (irqNext == irq) {
                    irqPrev.next = irqNext.next;
                    break;
                }
                irqPrev = irqNext;
            }
        }
        /*
         * We could also set irq.next to null now, but strictly speaking, that shouldn't be necessary.
         *
         * Last but not least, if there's still an IRQ on the active IRQ list, we need to make sure IRQ_DELAY
         * is still set.
         */
        if (this.irqNext) {
            this.opFlags |= PDP10.OPFLAG.IRQ_DELAY;
        }
    }

    /**
     * setIRQ(irq)
     *
     * @this {CPUStatePDP10}
     * @param {IRQ|null} irq
     */
    setIRQ(irq)
    {
        if (irq) {
            this.insertIRQ(irq);
            this.printf(irq.message + MESSAGE.INT + MESSAGE.ADDR, "setIRQ(vector=%o,priority=%d)\n", irq.vector, irq.priority);
        }
    }

    /**
     * clearIRQ(irq)
     *
     * @this {CPUStatePDP10}
     * @param {IRQ|null} irq
     */
    clearIRQ(irq)
    {
        if (irq) {
            this.removeIRQ(irq);
            this.printf(irq.message + MESSAGE.INT + MESSAGE.ADDR, "clearIRQ(vector=%o,priority=%d)\n", irq.vector, irq.priority);
        }
    }

    /**
     * findIRQ(vector)
     *
     * @this {CPUStatePDP10}
     * @param {number} vector
     * @returns {IRQ|null}
     */
    findIRQ(vector)
    {
        for (var i = 0; i < this.aIRQs.length; i++) {
            var irq = this.aIRQs[i];
            if (irq.vector === vector) return irq;
        }
        return null;
    }

    /**
     * checkIRQs(priority)
     *
     * @this {CPUStatePDP10}
     * @param {number} priority
     * @returns {IRQ|null}
     */
    checkIRQs(priority)
    {
        return (this.irqNext && this.irqNext.priority > priority)? this.irqNext : null;
    }

    /**
     * resetIRQs(priority)
     *
     * @this {CPUStatePDP10}
     */
    resetIRQs()
    {
        this.irqNext = null;
    }

    /**
     * saveIRQs()
     *
     * @this {CPUStatePDP10}
     * @returns {Array.<number>}
     */
    saveIRQs()
    {
        var aIRQVectors = [];
        var irq = this.irqNext;
        while (irq) {
            aIRQVectors.push(irq.vector);
            irq = irq.next;
        }
        return aIRQVectors;
    }

    /**
     * restoreIRQs(aIRQVectors)
     *
     * @this {CPUStatePDP10}
     * @param {Array.<number>} aIRQVectors
     */
    restoreIRQs(aIRQVectors)
    {
        for (var i = aIRQVectors.length - 1; i >= 0; i--) {
            var irq = this.findIRQ(aIRQVectors[i]);
            this.assert(irq != null);
            if (irq) {
                irq.next = this.irqNext;
                this.irqNext = irq;
            }
        }
    }

    /**
     * checkInterrupts()
     *
     * @this {CPUStatePDP10}
     * @returns {boolean} true if an interrupt was dispatched, false if not
     */
    checkInterrupts()
    {
        var fInterrupt = false;

        if (this.opFlags & PDP10.OPFLAG.IRQ) {

            // var vector = PDP10.TRAP.PIRQ;
            // var priority = (this.regPIR & PDP10.PSW.PRI) >> PDP10.PSW.SHIFT.PRI;
            //
            // var irq = this.checkIRQs(priority);
            // if (irq) {
            //     vector = irq.vector;
            //     priority = irq.priority;
            // }
            //
            // if (this.dispatchInterrupt(vector, priority)) {
            //     if (irq) this.removeIRQ(irq);
            //     fInterrupt = true;
            // }

            if (!this.irqNext) {
                this.opFlags &= ~PDP10.OPFLAG.IRQ;
            }
        }
        else if (this.opFlags & PDP10.OPFLAG.IRQ_DELAY) {
            /*
             * We know that IRQ (bit 2) is clear, so since IRQ_DELAY (bit 0) is set, incrementing opFlags
             * will eventually transform IRQ_DELAY into IRQ, without affecting any other (higher) bits.
             */
            this.opFlags++;
        }
        return fInterrupt;
    }

    /**
     * dispatchInterrupt(vector, priority)
     *
     * TODO: The process of dispatching an interrupt MUST cost some cycles; either trap() needs to assess
     * that cost, or we do.
     *
     * @this {CPUStatePDP10}
     * @param {number} vector
     * @param {number} priority
     * @returns {boolean} (true if dispatched, false if not)
     */
    dispatchInterrupt(vector, priority)
    {
        return false;
    }

    /**
     * isWaiting()
     *
     * @this {CPUStatePDP10}
     * @returns {boolean} (true if OPFLAG.WAIT is set, false otherwise)
     */
    isWaiting()
    {
        return !!(this.opFlags & PDP10.OPFLAG.WAIT);
    }

    /**
     * readWordFromPhysical(addr)
     *
     * This is a handler set up by setMemoryAccess().  All calls should go through readWord().
     *
     * @this {CPUStatePDP10}
     * @param {number} addr
     * @returns {number}
     */
    readWordFromPhysical(addr)
    {
        return this.bus.getWord(this.addrLast = addr);
    }

    /**
     * writeWordToPhysical(addr, data)
     *
     * This is a handler set up by setMemoryAccess().  All calls should go through writeWord().
     *
     * @this {CPUStatePDP10}
     * @param {number} addr
     * @param {number} data
     * @returns {number} (we return the data back to the caller to permit nested writes)
     */
    writeWordToPhysical(addr, data)
    {
        this.bus.setWord(this.addrLast = addr, data);
        return data;
    }

    /**
     * haltCPU()
     *
     * This is a temporary helper function for the Bus component, to force the CPU to stop executing the
     * current instruction.
     *
     * @this {CPUStatePDP10}
     */
    haltCPU()
    {
        this.stopCPU();
        throw -1;
    }

    /**
     * stepCPU(nMinCycles)
     *
     * NOTE: Single-stepping should not be confused with the Trap flag; single-stepping is a Debugger
     * operation that's completely independent of Trap status.  The CPU can go in and out of Trap mode,
     * in and out of h/w interrupt service routines (ISRs), etc, but from the Debugger's perspective,
     * they're all one continuous stream of instructions that can be stepped or run at will.  Moreover,
     * stepping vs. running should never change the behavior of the simulation.
     *
     * @this {CPUStatePDP10}
     * @param {number} nMinCycles (0 implies a single-step, and therefore breakpoints should be ignored)
     * @returns {number} of cycles executed; 0 indicates a pre-execution condition (ie, an execution breakpoint
     * was hit), -1 indicates a post-execution condition (eg, a read or write breakpoint was hit), and a positive
     * number indicates successful completion of that many cycles (which should always be >= nMinCycles).
     */
    stepCPU(nMinCycles)
    {
        /*
         * The Debugger uses complete to determine if the instruction completed (true) or was interrupted
         * by a breakpoint or some other exceptional condition (false).  NOTE: this does NOT include JavaScript
         * exceptions, which stepCPU() expects the caller to catch using its own exception handler.
         *
         * The CPU relies on the use of stopCPU() rather than complete, because the CPU never single-steps
         * (ie, nMinCycles is always some large number), whereas the Debugger does.  And conversely, when the
         * Debugger is single-stepping (even when performing multiple single-steps), fRunning is never set,
         * so stopCPU() would have no effect as far as the Debugger is concerned.
         */
        this.flags.complete = true;

        /*
         * nDebugCheck is 1 if we want the Debugger's checkInstruction() to check every instruction,
         * -1 if we want it to check just the first instruction, and 0 if there's no need for any checks.
         */
        var nDebugCheck = (DEBUGGER && this.dbg)? (this.dbg.checksEnabled()? 1 : (this.flags.starting? -1 : 0)) : 0;

        /*
         * nDebugState is needed only when nDebugCheck is non-zero; it is -1 if this is a single-step, 0 if
         * this is the start of a new run, and 1 if this is a continuation of a previous run.  It is used by
         * checkInstruction() to determine if it should skip breakpoint checks and/or HALT instructions (ie,
         * if nDebugState is <= zero).
         */
        var nDebugState = (!nMinCycles)? -1 : (this.flags.starting? 0 : 1);
        this.flags.starting = false;        // we've moved beyond "starting" and have officially "started" now

        /*
         * We move the minimum cycle count to nStepCycles (the number of cycles left to step), so that other
         * functions have the ability to force that number to zero (eg, stopCPU()), and thus we don't have to check
         * any other criteria to determine whether we should continue stepping or not.
         */
        this.nBurstCycles = this.nStepCycles = nMinCycles;

        /*
         * And finally, move the nDebugCheck state to an OPFLAG bit, so that the loop need check only one variable.
         */
        this.opFlags = (this.opFlags & ~PDP10.OPFLAG.DEBUGGER) | (nDebugCheck? PDP10.OPFLAG.DEBUGGER : 0);

        do {
            if (this.opFlags) {
                /*
                 * NOTE: We still check DEBUGGER to ensure that this code will be compiled out of existence in
                 * non-DEBUGGER builds.
                 */
                if (DEBUGGER && (this.opFlags & PDP10.OPFLAG.DEBUGGER)) {
                    if (this.dbg.checkInstruction(this.getXC(), nDebugState)) {
                        this.stopCPU();
                        break;
                    }
                    if (!++nDebugCheck) this.opFlags &= ~PDP10.OPFLAG.DEBUGGER;
                    if (!nDebugState) nDebugState++;
                }
                /*
                 * If we're in the IRQ or WAIT state, check for any pending interrupts.
                 *
                 * NOTE: It's no coincidence that we're checking this BEFORE any pending traps, because in rare
                 * cases (including some presented by those pesky "TRAP TEST" diagnostics), the process of dispatching
                 * an interrupt can trigger a TRAP_SP stack overflow condition, which must be dealt with BEFORE we
                 * execute the first instruction of the interrupt handler.
                 */
                if ((this.opFlags & (PDP10.OPFLAG.IRQ_MASK | PDP10.OPFLAG.WAIT)) /* && nDebugState >= 0 */) {
                    if (this.checkInterrupts()) {
                        if ((this.opFlags & PDP10.OPFLAG.DEBUGGER) && this.dbg.checkInstruction(this.getXC(), nDebugState)) {
                            this.stopCPU();
                            break;
                        }
                        /*
                         * Since an interrupt was just dispatched, altering the normal flow of time and changing
                         * the future as we knew it, let's break out immediately if we're single-stepping, so that
                         * the Debugger gets to see the first instruction of the interrupt handler.  NOTE: This
                         * assumes that we've still commented out the nDebugState check above that used to bypass
                         * checkInterrupts() when single-stepping.
                         */
                        if (nDebugState < 0) break;
                    }
                }
            }

            this.opFlags &= PDP10.OPFLAG.PRESERVE;

            var op = this.getOpcode();
            if (op >= 0) {
                this.opDecode(op);
            }
            /*
             * TODO: This is a temporary cycle charge, required for CPU operational bookkeeping until we add
             * correct cycle counts for all instructions.
             */
            this.nStepCycles--;

        } while (this.nStepCycles > 0);

        return (this.flags.complete? this.nBurstCycles - this.nStepCycles : (this.flags.complete === false? -1 : 0));
    }

    /**
     * CPUStatePDP10.init()
     *
     * This function operates on every HTML element of class "cpu", extracting the
     * JSON-encoded parameters for the CPUStatePDP10 constructor from the element's "data-value"
     * attribute, invoking the constructor (which in turn invokes the CPU constructor)
     * to create a CPUStatePDP10 component, and then binding any associated HTML controls to the
     * new component.
     */
    static init()
    {
        var aeCPUs = Component.getElementsByClass(APPCLASS, "cpu");
        for (var iCPU = 0; iCPU < aeCPUs.length; iCPU++) {
            var eCPU = aeCPUs[iCPU];
            var parmsCPU = Component.getComponentParms(eCPU);
            var cpu = new CPUStatePDP10(parmsCPU);
            Component.bindComponentControls(cpu, eCPU, APPCLASS);
        }
    }
}

/*
 * Initialize every CPU module on the page
 */
WebLib.onInit(CPUStatePDP10.init);
