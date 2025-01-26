/**
 * @fileoverview CPU base class
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Device from "./device.js";

/**
 * @typedef {Config} CPUConfig
 * @property {number} addrReset
 */

/**
 * @class CPU
 * @unrestricted
 * @property {Time} time
 * @property {Debugger} dbg
 * @property {number} addrReset
 * @property {number} nCyclesStart
 * @property {number} nCyclesRemain
 * @property {number} nCyclesSnapped
 * @property {number} regPC
 * @property {number} regPCLast
 */
export default class CPU extends Device {
    /**
     * CPU(idMachine, idDevice, config)
     *
     * @this {CPU}
     * @param {string} idMachine
     * @param {string} idDevice
     * @property {CPUConfig} config
     */
    constructor(idMachine, idDevice, config)
    {
        config['class'] = "CPU";
        super(idMachine, idDevice, config);

        /**
         * If a Debugger is loaded, it will call connectDebugger().  Having access to the Debugger
         * allows our toString() function to include the instruction, via toInstruction(), and conversely,
         * the Debugger will enjoy access to all our defined register names.
         */
        this.dbg = undefined;

        /**
         * regPC is the CPU's program counter, which all CPUs are required to have.
         *
         * regPCLast is an internal register that snapshots the PC at the start of every instruction;
         * this is useful not only for CPUs that need to support instruction restartability, but also for
         * diagnostic/debugging purposes.
         */
        this.regPC = this.regPCLast = 0;
        this.addrReset = this.config['addrReset'] || 0;

        /**
         * Get access to the Time device, so we can give it our clock and update functions.
         */
        this.time = /** @type {Time} */ (this.findDeviceByClass("Time"));
        this.time.addClock(this);
        this.time.addUpdate(this);

        /**
         * nCyclesStart and nCyclesRemain are initialized on every startClock() invocation.
         * The number of cycles executed during the current burst is nCyclesStart - nCyclesRemain,
         * and the burst is complete when nCyclesRemain has been exhausted (ie, is <= 0).
         */
        this.nCyclesStart = this.nCyclesRemain = this.nCyclesSnapped = 0;
    }

    /**
     * abort(err)
     *
     * Called from startClock() if an exception occurs.
     *
     * @this {CPU}
     * @param {Error} err
     */
    abort(err)
    {
        this.regPC = this.regPCLast;
        this.printf("%s\n", err.message);
        this.time.stop();
    }

    /**
     * connectDebugger(dbg)
     *
     * @this {CPU}
     * @param {Debugger} dbg
     * @returns {Object}
     */
    connectDebugger(dbg)
    {
        this.dbg = dbg;
        return this.registers;
    }

    /**
     * execute(nCycles)
     *
     * Called from startClock() to execute a series of instructions; this is a placeholder which the subclass must override.
     *
     * @this {CPU}
     * @param {number} nCycles
     */
    execute(nCycles)
    {
    }

    /**
     * startClock(nCycles)
     *
     * @this {CPU}
     * @param {number} [nCycles] (default is 0 to single-step)
     * @returns {number} (number of cycles actually "clocked")
     */
    startClock(nCycles = 0)
    {
        this.nCyclesStart = this.nCyclesRemain = nCycles;
        try {
            this.execute(nCycles);
        } catch(err) {
            this.abort(err);
        }
        return this.getClock();
    }

    /**
     * stopClock()
     *
     * Stopping the clock is a simple matter of reducing nCyclesRemain to zero.  However, to compensate
     * for the fact that we didn't do any work for those remaining cycles, we must FIRST reduce nCyclesStart
     * by the number of cycles remaining.
     *
     * @this {CPU}
     */
    stopClock()
    {
        this.nCyclesStart -= this.nCyclesRemain;
        this.nCyclesRemain = this.nCyclesSnapped = 0;
    }

    /**
     * getClock()
     *
     * Returns the number of cycles executed so far during the current burst.
     *
     * @this {CPU}
     * @returns {number}
     */
    getClock()
    {
        return this.nCyclesStart - this.nCyclesRemain;
    }
}

// CPU.CLASSES["CPU"] = CPU;
