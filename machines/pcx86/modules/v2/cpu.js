/**
 * @fileoverview Implements the PCx86 CPU component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import MESSAGE from "./message.js";
import Component from "../../../modules/v2/component.js";
import StrLib from "../../../modules/v2/strlib.js";
import { DEBUG, DEBUGGER, MAXDEBUG } from "./defines.js";

/**
 * TimeLog objects record the duration of "work" and "idle" intervals, which normally alternate.
 *
 * aTimeLogs normally keeps the last 600 TimeLog objects; ie, new objects are pushed and when the
 * length of the array exceeds 600, we "splice" out the first (oldest) object in the array.  The first
 * two array entries are special: [0] accumulates total "work" and [1] accumulates total "work+idle" time.
 *
 * @typedef {Object} TimeLog
 * @property {number} nCycles       // number of cycles of "work" performed this interval (0 if "idle" interval)
 * @property {number} nCyclesTotal
 * @property {number} msDuration    // duration of this interval
 * @property {number} msLag         // how far this interval "lagged" the previous interval
 * @property {number} msBegin       // start of this interval
 */

/**
 * @class CPU
 * @unrestricted (allows the class to define properties, both dot and named, outside of the constructor)
 */
export default class CPU extends Component {

    static YIELDS_PER_SECOND = 60;

    static BUTTONS = ["power", "reset"];

    /**
     * CPU(parmsCPU, nCyclesDefault)
     *
     * The CPU class supports the following (parmsCPU) properties:
     *
     *      cycles: the machine's base cycles per second; the CPUx86 constructor will provide us with a default
     *      (based on the CPU model) to use as a fallback.
     *
     *      multiplier: base cycle multiplier; default is 1.
     *
     *      autoStart: true to automatically start, false to not, or null if "it depends"; null is the default,
     *      which means autostart UNLESS there is a Debugger present.
     *
     *      csStart: the number of cycles that runCPU() must wait before generating checksum records;
     *      -1 if disabled.  checksum records are a diagnostic aid used to help compare one CPU run to another.
     *
     *      csInterval: the number of cycles that runCPU() must execute before generating a checksum record;
     *      -1 if disabled.
     *
     *      csStop: the number of cycles to stop generating checksum records.
     *
     * This component is primarily responsible for interfacing the CPU with the outside world (eg, Panel and Debugger
     * components), and managing overall CPU operation.
     *
     * It is extended by the CPUx86 component, where all the x86-specific logic resides.
     *
     * @this {CPU}
     * @param {Object} parmsCPU
     * @param {number} nCyclesDefault
     */
    constructor(parmsCPU, nCyclesDefault)
    {
        super("CPU", parmsCPU, MESSAGE.CPU);

        let nCycles = parmsCPU['cycles'] || nCyclesDefault;

        let nMultiplier = parmsCPU['multiplier'] || 1;

        if (DEBUG) this.aTimeLogs = [null, null];
        this.nBaseCyclesPerSecond = nCycles;
        this.msPerYield = Math.round(1000 / CPU.YIELDS_PER_SECOND);

        /**
         * nTargetMultiplier replaces the old "speed" variable (0, 1, 2) and eliminates the need for
         * the constants (SPEED_SLOW, SPEED_FAST and SPEED_MAX).  The UI simply doubles the target multiplier
         * until we've exceeded the host's speed limit (ie, the current value is unable to reach the target),
         * at which point we reset the target back to the default.
         */
        this.nBaseMultiplier = this.nCurrentMultiplier = this.nTargetMultiplier = nMultiplier;
        this.mhzBase = Math.round(this.nBaseCyclesPerSecond / 10000) / 100;
        this.mhzCurrent = this.mhzTarget = this.mhzBase * this.nTargetMultiplier;

        /**
         * We add a number of flags to those initialized by Component.
         */
        this.flags.starting = this.flags.running = this.flags.yield = false;
        this.flags.autoStart = parmsCPU['autoStart'];

        /**
         * TODO: Add some UI for displayLiveRegs (either an XML property, or a UI checkbox, or both)
         */
        this.flags.displayLiveRegs = false;

        /**
         * Get checksum parameters, if any. runCPU() behavior is not affected until fChecksum
         * is true, which won't happen until resetChecksum() is called with nCyclesChecksumInterval
         * ("csInterval") set to a positive value.
         *
         * As above, any of these parameters can also be set with the Debugger's execution options
         * command ("x"); for example, "x cs int 5000" will set nCyclesChecksumInterval to 5000
         * and call resetChecksum().
         */
        this.flags.checksum = false;
        this.nChecksum = this.nCyclesChecksumNext = 0;
        this.nCyclesChecksumStart = parmsCPU["csStart"];
        this.nCyclesChecksumInterval = parmsCPU["csInterval"];
        this.nCyclesChecksumStop = parmsCPU["csStop"];

        /**
         * Array of countdown timers managed by addTimer() and setTimer().
         *
         * See also: getMSCycles(), getBurstCycles(), saveTimers(), restoreTimers(), and updateTimers()
         */
        this.aTimers = [];

        this.idRunTimeout = 0;
        this.onRunTimeout = this.runCPU.bind(this); // function onRunTimeout() { cpu.runCPU(); };
    }

    /**
     * addTimeLog(nCycles, nCyclesTotal, msBegin, msDuration)
     *
     * @this {CPU}
     * @param {number} nCycles
     * @param {number} nCyclesTotal
     * @param {number} msBegin
     * @param {number} msDuration
     */
    addTimeLog(nCycles, nCyclesTotal, msBegin, msDuration)
    {
        if (DEBUG) {
            let msLag = 0;
            if (nCycles) {
                if (!this.aTimeLogs[0]) {
                    this.aTimeLogs[0] = {nCycles, msDuration, msLag, msBegin};
                } else {
                    this.aTimeLogs[0].nCycles += nCycles;
                    this.aTimeLogs[0].msDuration += msDuration;
                }
            }
            if (!this.aTimeLogs[1]) {
                this.aTimeLogs[1] = {nCycles, msDuration, msLag, msBegin};
            } else {
                this.aTimeLogs[1].nCycles += nCycles;
                this.aTimeLogs[1].msDuration += msDuration;
            }
            if (this.aTimeLogs.length > 2) {
                let prevLog = this.aTimeLogs[this.aTimeLogs.length-1];
                let msEndPrev = prevLog.msBegin + prevLog.msDuration;
                // this.assert(msBegin >= msEndPrev);
                msLag = msBegin - msEndPrev;
            }
            this.aTimeLogs.push({nCycles, msDuration, msLag, msBegin});
            if (this.aTimeLogs.length > 600 + 2) {
                this.aTimeLogs.splice(2, 1);
            }
        }
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {CPU}
     * @param {Computer} cmp
     * @param {Busx86} bus
     * @param {CPU} cpu
     * @param {Debuggerx86} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.cmp = cmp;
        this.bus = bus;
        this.dbg = dbg;

        for (let i = 0; i < CPU.BUTTONS.length; i++) {
            let control = this.bindings[CPU.BUTTONS[i]];
            if (control) this.cmp.setBinding("", CPU.BUTTONS[i], control);
        }

        this.fpuActive = null;
        this.fpu = cmp.getMachineComponent("FPU", false);

        /**
         * Attach the ChipSet component to the CPU so that it can obtain the IDT vector number
         * of pending hardware interrupts in response to the ChipSet's updateINTR() notifications.
         *
         * We must also call chipset.updateAllTimers() periodically; stepCPU() takes care of that.
         */
        this.chipset = cmp.getMachineComponent("ChipSet");

        /**
         * We've already saved the parmsCPU 'autoStart' setting, but there may be a machine (or URL) override.
         */
        this.flags.autoStart = cmp.getMachineBoolean('autoStart', this.flags.autoStart);

        let nMultiplier = cmp.getMachineParm('multiplier');
        if (nMultiplier) this.nBaseMultiplier = +nMultiplier;

        this.timerYield = cpu.addTimer(this.id, function yieldTimer() {
            cpu.flags.yield = true;
        }, this.msPerYield);

        this.setReady();
    }

    /**
     * reset()
     *
     * This is a placeholder for reset (overridden by the CPUx86 component).
     *
     * @this {CPU}
     */
    reset()
    {
    }

    /**
     * save(fRunning)
     *
     * This is a placeholder for save support (overridden by the CPUx86 component).
     *
     * @this {CPU}
     * @param {boolean} [fRunning]
     * @returns {Object|null}
     */
    save(fRunning)
    {
        return null;
    }

    /**
     * restore(data)
     *
     * This is a placeholder for restore support (overridden by the CPUx86 component).
     *
     * @this {CPU}
     * @param {Object} data
     * @returns {boolean} true if restore successful, false if not
     */
    restore(data)
    {
        return false;
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {CPU}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) {
            if (!data || !this.restore) {
                this.reset();
            } else {
                this.resetCycles();
                if (!this.restore(data)) return false;
                this.resetChecksum();
            }
            /**
             * Give the Debugger a chance to do/print something once we've powered up
             */
            if (DEBUGGER && this.dbg) {
                this.dbg.init();
            } else {
                this.printf(MESSAGE.NONE, "No debugger detected\n");
            }
        }
        /**
         * The Computer component (which is responsible for all powerDown and powerUp notifications)
         * is now responsible for managing a component's fPowered flag, not us.
         *
         *      this.flags.powered = true;
         */
        this.updateCPU(false);
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {CPU}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
     */
    powerDown(fSave, fShutdown)
    {
        /**
         * The Computer component (which is responsible for all powerDown and powerUp notifications)
         * is now responsible for managing a component's fPowered flag, not us.
         *
         *      this.flags.powered = false;
         */
        let fRunning = this.flags.running;
        if (fShutdown) this.stopCPU();
        return fSave? this.save(fRunning) : true;
    }

    /**
     * autoStart()
     *
     * @this {CPU}
     * @returns {boolean} true if started, false if not
     */
    autoStart()
    {
        if (this.flags.running) {
            return true;
        }
        /**
         * Start running automatically on power-up, assuming there's no Debugger.
         */
        if (this.flags.autoStart || this.flags.autoStart == null && !this.dbg) {
            return this.startCPU(true);
        }
        return false;
    }

    /**
     * isPowered()
     *
     * @this {CPU}
     * @returns {boolean}
     */
    isPowered()
    {
        if (!this.flags.powered) {
            this.printf(MESSAGE.NONE, "%s not powered\n", this.toString());
            return false;
        }
        return true;
    }

    /**
     * isRunning()
     *
     * @this {CPU}
     * @returns {boolean}
     */
    isRunning()
    {
        return this.flags.running;
    }

    /**
     * getChecksum()
     *
     * This will be implemented by the CPUx86 component.
     *
     * @this {CPU}
     * @returns {number} a 32-bit summation of key elements of the current CPU state (used by the CPU checksum code)
     */
    getChecksum()
    {
        return 0;
    }

    /**
     * resetChecksum()
     *
     * If checksum generation is enabled (fChecksum is true), this resets the running 32-bit checksum and the
     * cycle counter that will trigger the next displayChecksum(); called by resetCycles(), which is called whenever
     * the CPU is reset or restored.
     *
     * @this {CPU}
     * @returns {boolean} true if checksum generation enabled, false if not
     */
    resetChecksum()
    {
        if (this.nCyclesChecksumStart === undefined) this.nCyclesChecksumStart = 0;
        if (this.nCyclesChecksumInterval === undefined) this.nCyclesChecksumInterval = -1;
        if (this.nCyclesChecksumStop === undefined) this.nCyclesChecksumStop = -1;
        this.flags.checksum = (this.nCyclesChecksumStart >= 0 && this.nCyclesChecksumInterval > 0);
        if (this.flags.checksum) {
            this.nChecksum = 0;
            this.nCyclesChecksumNext = this.nCyclesChecksumStart - this.nTotalCycles;
            /**
             *  this.nCyclesChecksumNext = this.nCyclesChecksumStart + this.nCyclesChecksumInterval -
             *      (this.nTotalCycles % this.nCyclesChecksumInterval);
             */
            return true;
        }
        return false;
    }

    /**
     * updateChecksum(nCycles)
     *
     * When checksum generation is enabled (fChecksum is true), runCPU() asks stepCPU() to execute a minimum
     * number of cycles (1), effectively limiting execution to a single instruction, and then we're called with
     * the exact number cycles that were actually executed.  This should give us instruction-granular checksums
     * at precise intervals that are 100% repeatable.
     *
     * @this {CPU}
     * @param {number} nCycles
     */
    updateChecksum(nCycles)
    {
        if (this.flags.checksum) {
            /**
             * Get a 32-bit summation of the current CPU state and add it to our running 32-bit checksum
             */
            let fDisplay = false;
            this.nChecksum = (this.nChecksum + this.getChecksum())|0;
            this.nCyclesChecksumNext -= nCycles;
            if (this.nCyclesChecksumNext <= 0) {
                this.nCyclesChecksumNext += this.nCyclesChecksumInterval;
                fDisplay = true;
            }
            if (this.nCyclesChecksumStop >= 0) {
                if (this.nCyclesChecksumStop <= this.getCycles()) {
                    this.nCyclesChecksumInterval = this.nCyclesChecksumStop = -1;
                    this.resetChecksum();
                    this.stopCPU();
                    fDisplay = true;
                }
            }
            if (fDisplay) this.displayChecksum();
        }
    }

    /**
     * displayChecksum()
     *
     * When checksum generation is enabled (fChecksum is true), this is called to provide a crude log of all
     * checksums generated at the specified cycle intervals, as specified by the "csStart" and "csInterval" parmsCPU
     * properties).
     *
     * @this {CPU}
     */
    displayChecksum()
    {
        this.printf("%d cycles: checksum=%x\n", this.getCycles(), this.nChecksum);
    }

    /**
     * displayValue(sLabel, nValue, cch)
     *
     * This is principally for displaying register values, but in reality, it can be used to display any
     * numeric (hex) value bound to the given label.
     *
     * @this {CPU}
     * @param {string} sLabel
     * @param {number} nValue
     * @param {number} cch
     */
    displayValue(sLabel, nValue, cch)
    {
        if (this.bindings[sLabel]) {
            if (nValue === undefined) {
                this.setError("Value for " + sLabel + " is invalid");
                this.stopCPU();
            }
            let sVal;
            if (!this.flags.running || this.flags.displayLiveRegs) {
                sVal = StrLib.toHex(nValue, cch);
            } else {
                sVal = "--------".substr(0, cch);
            }
            /**
             * TODO: Determine if this test actually avoids any redrawing when a register hasn't changed, and/or if
             * we should maintain our own (numeric) cache of displayed register values (to avoid creating these temporary
             * string values that will have to garbage-collected), and/or if this is actually slower, and/or if I'm being
             * too obsessive.
             */
            if (this.bindings[sLabel].textContent != sVal) this.bindings[sLabel].textContent = sVal;
        }
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * @this {CPU}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea", "canvas")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "run")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        let cpu = this;
        let fBound = false;

        switch (sBinding) {
        case "power":
        case "reset":
            /**
             * The "power" and "reset" buttons are functions of the entire computer, not just the CPU,
             * but it's not always convenient to stick a power button in the Computer component definition,
             * so we record those bindings here and pass them on to the Computer component in initBus().
             */
            this.bindings[sBinding] = control;
            fBound = true;
            break;

        case "run":
            this.bindings[sBinding] = control;
            control.onclick = function onClickRun() {
                let fRunning = cpu.flags.running;
                if (!cpu.cmp || !cpu.cmp.checkPower()) return;
                /**
                 * We snapped the CPU's running flag before calling checkPower() because there are rare (REPOWER)
                 * situations where checkPower() will have started the CPU as well.  So toggle the CPU state ONLY
                 * if the running flag remains unchanged.
                 */
                if (fRunning == cpu.flags.running) {
                    if (!cpu.flags.running) {
                        cpu.startCPU(true);
                    } else {
                        cpu.stopCPU(true);
                    }
                }
            };
            fBound = true;
            break;

        case "speed":
            this.bindings[sBinding] = control;
            fBound = true;
            break;

        case "setSpeed":
            this.bindings[sBinding] = control;
            control.onclick = function onClickSetSpeed() {
                cpu.setSpeed(cpu.nTargetMultiplier << 1, true);
            };
            control.textContent = this.getSpeedTarget();
            fBound = true;
            break;

        default:
            break;
        }
        return fBound;
    }

    /**
     * setBurstCycles(nCycles)
     *
     * This function is used by the ChipSet component whenever (for example) a very low timer count is set.
     *
     * @this {CPU}
     * @param {number} nCycles (the target number of cycles to drop the current burst)
     * @returns {boolean}
     */
    setBurstCycles(nCycles)
    {
        if (this.flags.running) {
            let delta = this.nStepCycles - nCycles;
            if (delta > 0) {
                /**
                 * NOTE: If the delta is negative, we would actually be increasing nStepCycles and nBurstCycles.
                 * Which used to be OK, but now that we have CPU timers that calculate and rely upon maximum bursts,
                 * this can no longer be allowed.  TODO: Determine if there are any, um, negative side-effects on
                 * ChipSet timers if we don't allow negative deltas.
                 */
                this.nStepCycles -= delta;
                this.nBurstCycles -= delta;
                return true;
            }
        }
        return false;
    }

    /**
     * addCycles(nCycles, fEndStep)
     *
     * @this {CPU}
     * @param {number} nCycles
     * @param {boolean} [fEndStep]
     */
    addCycles(nCycles, fEndStep)
    {
        this.nTotalCycles += nCycles;
        if (fEndStep) {
            this.nBurstCycles = this.nStepCycles = 0;
        }
    }

    /**
     * calcCycles()
     *
     * Calculate the maximum number of cycles we should attempt to process before the next yield.
     *
     * @this {CPU}
     * @returns {boolean} (true if there was a change to the multiplier, false if not)
     */
    calcCycles()
    {
        let nMultiplier = this.mhzCurrent / this.mhzBase;
        if (!nMultiplier || nMultiplier > this.nTargetMultiplier) {
            nMultiplier = this.nTargetMultiplier;
        } else if (nMultiplier < 1) {
            nMultiplier = 1;
        }
        this.nCyclesPerYield = Math.floor(this.nBaseCyclesPerSecond / CPU.YIELDS_PER_SECOND * nMultiplier);
        if (this.nCurrentMultiplier !== nMultiplier) {
            this.nCurrentMultiplier = nMultiplier;
            return true;
        }
        return false;
    }

    /**
     * getCycles(fScaled)
     *
     * getCycles() returns the number of cycles executed so far.  Note that we can be called after
     * runCPU() OR during runCPU(), perhaps from a handler triggered during the current run's stepCPU(),
     * so nRunCycles must always be adjusted by number of cycles stepCPU() was asked to run (nBurstCycles),
     * less the number of cycles it has yet to run (nStepCycles).
     *
     * nRunCycles is zeroed whenever the CPU is halted or the CPU speed is changed, which is why we also
     * have nTotalCycles, which accumulates all nRunCycles before we zero it.  However, nRunCycles and
     * nTotalCycles eventually get reset by calcSpeed(), to avoid overflow, so components that rely on
     * getCycles() returning steadily increasing values should also be prepared for a reset at any time.
     *
     * @this {CPU}
     * @param {boolean} [fScaled] is true if the caller wants a cycle count relative to a multiplier of 1
     * @returns {number}
     */
    getCycles(fScaled)
    {
        let nCycles = this.nTotalCycles + this.nRunCycles + this.nBurstCycles - this.nStepCycles;
        if (fScaled && this.nTargetMultiplier > 1 && this.mhzCurrent > this.mhzBase) {
            /**
             * We could scale the current cycle count by the current speed (this.mhzCurrent); eg:
             *
             *      nCycles = Math.round(nCycles / (this.mhzCurrent / this.mhzBase));
             *
             * but that speed will fluctuate somewhat: large fluctuations at first, but increasingly smaller
             * fluctuations after each burst of instructions that runCPU() executes.
             *
             * Alternatively, we can scale the cycle count by the multiplier, which is good in that the
             * multiplier doesn't vary once the user changes it, but a potential downside is that the
             * multiplier might be set too high, resulting in a target speed that's higher than the effective
             * speed is able to reach.
             *
             * Also, if multipliers were always limited to a power-of-two, then this could be calculated
             * with a simple shift.  However, only the "setSpeed" UI binding limits it that way; the Debugger
             * interface allows any value, as does the CPU "multiplier" parmsCPU property (from the machine's
             * XML file).
             */
            nCycles = Math.round(nCycles / this.nTargetMultiplier);
        }
        return nCycles;
    }

    /**
     * getBaseCyclesPerSecond()
     *
     * This returns the CPU's base speed (ie, the original cycles per second defined for the machine)
     *
     * @this {CPU}
     * @returns {number}
     */
    getBaseCyclesPerSecond()
    {
        return this.nBaseCyclesPerSecond;
    }

    /**
     * getCurrentCyclesPerSecond()
     *
     * This returns the CPU's current speed (ie, the actual cycles per second, according the current multiplier)
     *
     * @this {CPU}
     * @returns {number}
     */
    getCurrentCyclesPerSecond()
    {
        return (this.nBaseCyclesPerSecond * this.nCurrentMultiplier)|0;
    }

    /**
     * resetCycles()
     *
     * Resets speed and cycle information as part of any reset() or restore(); this typically occurs during powerUp().
     * It's important that this be called BEFORE the actual restore() call, because restore() may want to call setSpeed(),
     * which in turn assumes that all the cycle counts have been initialized to sensible values.
     *
     * @this {CPU}
     */
    resetCycles()
    {
        this.nTotalCycles = this.nRunCycles = this.nBurstCycles = this.nStepCycles = 0;
        this.resetChecksum();
        this.setSpeed(this.nBaseMultiplier);
    }

    /**
     * getSpeed()
     *
     * @this {CPU}
     * @returns {number} the current speed multiplier
     */
    getSpeed()
    {
        return this.nTargetMultiplier;
    }

    /**
     * getSpeedCurrent()
     *
     * @this {CPU}
     * @returns {string} the current speed, in mhz, as a string formatted to two decimal places
     */
    getSpeedCurrent()
    {
        return ((this.flags.running && this.mhzCurrent)? (this.mhzCurrent.toFixed(2) + "Mhz") : "Stopped");
    }

    /**
     * getSpeedTarget()
     *
     * @this {CPU}
     * @returns {string} the target speed, in mhz, as a string formatted to two decimal places
     */
    getSpeedTarget()
    {
        return this.mhzTarget.toFixed(2) + "Mhz";
    }

    /**
     * setSpeed(nMultiplier, fUpdateFocus)
     *
     * @this {CPU}
     * @param {number} [nMultiplier] is the new proposed multiplier (reverts to default if target was too high)
     * @param {boolean} [fUpdateFocus] is true to update Computer focus
     * @returns {boolean} true if successful, false if not
     *
     * @desc Whenever the speed is changed, the running cycle count and corresponding start time must be reset,
     * so that the next effective speed calculation obtains sensible results.  In fact, when runCPU() initially calls
     * setSpeed() with no parameters, that's all this function does (it doesn't change the current speed setting).
     */
    setSpeed(nMultiplier, fUpdateFocus)
    {
        let fSuccess = true;
        if (nMultiplier !== undefined) {
            /**
             * If we haven't reached 90% (0.9) of the current target speed, revert to the default multiplier.
             */
            if (this.mhzCurrent > 0 && this.mhzCurrent < this.mhzTarget * 0.9) {
                nMultiplier = this.nBaseMultiplier;
                fSuccess = false;
            }
            this.mhzCurrent = 0;
            this.nTargetMultiplier = nMultiplier;
            let mhzTarget = this.mhzBase * this.nTargetMultiplier;
            if (this.mhzTarget != mhzTarget) {
                this.mhzTarget = mhzTarget;
                let sSpeed = this.getSpeedTarget();
                let controlSpeed = this.bindings["setSpeed"];
                if (controlSpeed) controlSpeed.textContent = sSpeed;
                this.printf(MESSAGE.NONE, "target speed: %s\n", sSpeed);
            }
            if (fUpdateFocus && this.cmp) this.cmp.updateFocus();
        }
        this.addCycles(this.nRunCycles);
        this.nRunCycles = 0;
        this.msStartRun = this.msEndThisRun = 0;
        if (this.calcCycles()) {    // if a new value was calculated for the current cycle multiplier
            this.resetTimers();     // then update all the fixed-period timers using the new cycle multiplier
        }
        return fSuccess;
    }

    /**
     * calcSpeed(nCycles, msElapsed)
     *
     * @this {CPU}
     * @param {number} nCycles
     * @param {number} msElapsed
     */
    calcSpeed(nCycles, msElapsed)
    {
        if (msElapsed) {
            this.mhzCurrent = Math.round(nCycles / (msElapsed * 10)) / 100;
            if (msElapsed >= 86400000) {
                this.nTotalCycles = 0;
                if (this.chipset) this.chipset.updateAllTimers(true);
                this.setSpeed();        // reset all counters once per day so that we never have to worry about overflow
            }
        }
    }

    /**
     * calcStartTime()
     *
     * @this {CPU}
     */
    calcStartTime()
    {
        this.calcCycles();

        this.nCyclesThisRun = 0;
        this.msDiscount = 0;
        this.msStartThisRun = Component.getTime();
        if (!this.msStartRun) {
            this.msStartRun = this.msStartThisRun;
        }

        /**
         * Try to detect situations where the browser may have throttled us, such as when the user switches
         * to a different tab; in those situations, Chrome and Safari may restrict setTimeout() callbacks
         * to roughly one per second.
         *
         * Another scenario: the user resizes the browser window.  setTimeout() callbacks are not throttled,
         * but there can still be enough of a lag between the callbacks that CPU speed will be noticeably
         * erratic if we don't compensate for it here.
         *
         * We can detect throttling/lagging by verifying that msEndThisRun (which was set at the end of the
         * previous run and includes any requested sleep time) is comparable to the current msStartThisRun;
         * if the delta is significant, we compensate by bumping msStartRun forward by that delta.
         *
         * This shouldn't be triggered when the Debugger halts the CPU, because setSpeed() -- which is called
         * whenever the CPU starts running again -- zeroes msEndThisRun.
         *
         * This also won't do anything about other internal delays; for example, Debugger message() calls.
         * By the time the message() function has called yieldCPU(), the cost of the message has already been
         * incurred, so it will be end up being charged against the instruction(s) that triggered it.
         *
         * TODO: Consider calling yieldCPU() sooner from message(), so that it can arrange for the msEndThisRun
         * "snapshot" to occur sooner; it's unclear, however, whether that will really improve the CPU's ability
         * to hit its target speed, since any instruction that displays a message is unavoidably slooooow.
         */
        let msDelta = 0;
        if (this.msEndThisRun) {
            msDelta = this.msStartThisRun - this.msEndThisRun;
            if (msDelta > this.msPerYield) {
                this.msStartRun += msDelta;
                /**
                 * Bumping msStartRun forward should NEVER cause it to exceed msStartThisRun; however, just
                 * in case, I make absolutely sure it cannot happen, since doing so could result in negative
                 * speed calculations.
                 */
                this.assert(this.msStartRun <= this.msStartThisRun);
                if (this.msStartRun > this.msStartThisRun) {
                    this.msStartRun = this.msStartThisRun;
                }
            }
        }
    }

    /**
     * calcRemainingTime()
     *
     * @this {CPU}
     * @returns {number}
     */
    calcRemainingTime()
    {
        this.msEndThisRun = Component.getTime();

        if (this.msDiscount) {
            this.msStartRun += this.msDiscount;
            this.msStartThisRun += this.msDiscount;
        }

        let msYield = this.msPerYield;
        if (this.nCyclesThisRun) {
            /**
             * Normally, we would assume we executed a full quota of work over msPerYield, but since the CPU
             * now has the option of calling yieldCPU(), that might not be true.  If nCyclesThisRun is correct, then
             * the ratio of nCyclesThisRun/nCyclesPerYield should represent the percentage of work we performed,
             * and so applying that percentage to msPerYield should give us a better estimate of work vs. time.
             */
            msYield = Math.round(msYield * this.nCyclesThisRun / this.nCyclesPerYield);
        }

        let msElapsedThisRun = this.msEndThisRun - this.msStartThisRun;
        let msRemainsThisRun = msYield - msElapsedThisRun;

        /**
         * We could pass only "this run" results to calcSpeed():
         *
         *      nCycles = this.nCyclesThisRun;
         *      msElapsed = msElapsedThisRun;
         *
         * but it seems preferable to use longer time periods and hopefully get a more accurate speed.
         */
        let nCycles = this.nRunCycles;
        let msElapsed = this.msEndThisRun - this.msStartRun;

        if (MAXDEBUG && msRemainsThisRun < 0 && this.nTargetMultiplier > 1) {
            this.printf("warning: updates @%dms (prefer %dms)\n", msElapsedThisRun, Math.round(msYield));
        }

        this.calcSpeed(nCycles, msElapsed);

        if (msRemainsThisRun < 0) {
            /**
             * Try "throwing out" the effects of large anomalies, by moving the overall run start time up;
             * ordinarily, this should only happen when the someone is using an external Debugger or some other
             * tool or feature that is interfering with our overall execution.
             */
            if (msRemainsThisRun < -1000) {
                this.msStartRun -= msRemainsThisRun;
            }
            /**
             * If the last burst took MORE time than we allotted (ie, it's taking more than 1 second to simulate
             * nBaseCyclesPerSecond), all we can do is yield for as little time as possible (ie, 0ms) and hope
             * that the simulation is at least usable.
             */
            msRemainsThisRun = 0;
        }
        else if (this.mhzCurrent < this.mhzTarget) {
            msRemainsThisRun = 0;
        }

        if (DEBUG) {
            /**
             * Every time the browser gives us another chance to run, we want to display our targets for that run
             * here, followed by what we accomplished in that run.
             */
            this.printf(MESSAGE.CPU, "%3dms run  %3dms wait  %6dcy  %6.2fmhz  %6dms total  %8dcy total  %6.2fmhz total",
                msElapsedThisRun,
                msRemainsThisRun,
                this.nCyclesThisRun,
                Math.round(this.nCyclesThisRun / (msElapsedThisRun * 10)) / 100,
                msElapsed,
                nCycles,
                this.mhzCurrent
            );
        }

        this.msEndThisRun += msRemainsThisRun;

        return msRemainsThisRun;
    }

    /**
     * addTimer(id, callBack, ms)
     *
     * Components that want to have timers that fire after some number of milliseconds call addTimer() to create
     * the timer, and then setTimer() when they want to arm it.  Alternatively, they can specify an automatic timeout
     * value (in milliseconds) to have the timer fire automatically at regular intervals.  There is currently
     * no removeTimer() because these are generally used for the entire lifetime of a component.
     *
     * Internally, each timer entry is a preallocated Array with the following entries:
     *
     *      [0]: timer ID
     *      [1]: countdown value, in cycles
     *      [2]: setTimer value: milliseconds if positive, cycles if negative, zero if not used
     *      [3]: callback function
     *
     * A timer is initially dormant; dormant timers have a countdown value of -1 (although any negative number
     * will suffice) and active timers have a non-negative value.
     *
     * Why not use JavaScript's setTimeout() instead?  Good question.  For a good answer, see setTimer() below.
     *
     * @this {CPU}
     * @param {string} id
     * @param {function()} callBack
     * @param {number} [ms] (setTimer value: milliseconds if positive, cycles if negative, zero if not used)
     * @returns {number} timer index
     */
    addTimer(id, callBack, ms = 0)
    {
        let iTimer = this.aTimers.length;
        this.aTimers.push([id, -1, ms, callBack]);
        if (ms) this.setTimer(iTimer, ms);
        return iTimer;
    }

    /**
     * clearTimer(iTimer)
     *
     * Using the timer index from a previous addTimer() call, this clears that timer.
     *
     * @this {CPU}
     * @param {number} iTimer
     * @returns {boolean}
     */
    clearTimer(iTimer)
    {
        if (iTimer >= 0 && iTimer < this.aTimers.length) {
            this.aTimers[iTimer][1] = -1;
            return true;
        }
        return false;
    }

    /**
     * findTimer(id)
     *
     * @this {CPU}
     * @param {string} id
     * @returns {Array|null}
     */
    findTimer(id)
    {
        for (let iTimer = 0; iTimer < this.aTimers.length; iTimer++) {
            let timer = this.aTimers[iTimer];
            if (timer[0] == id) return timer;
        }
        return null;
    }

    /**
     * isTimerSet(iTimer)
     *
     * @this {CPU}
     * @param {number} iTimer
     * @returns {boolean}
     */
    isTimerSet(iTimer)
    {
        if (iTimer >= 0 && iTimer < this.aTimers.length) {
            return this.aTimers[iTimer][1] >= 0;
        }
        return false;
    }

    /**
     * resetTimers()
     *
     * When the target CPU speed multiplier is altered, it's a good idea to run through all the timers that
     * have a fixed millisecond period and re-arm them, because the timers are using cycle counts that were based
     * on a previous multiplier.
     *
     * @this {CPU}
     */
    resetTimers()
    {
        for (let iTimer = this.aTimers.length - 1; iTimer >= 0; iTimer--) {
            let timer = this.aTimers[iTimer];
            if (timer[2]) this.setTimer(iTimer, timer[2], true);
        }
    }

    /**
     * restoreTimers(aTimerStates)
     *
     * @this {CPU}
     * @param {Array} aTimerStates
     */
    restoreTimers(aTimerStates)
    {
        for (let iTimerState = 0; iTimerState < aTimerStates.length; iTimerState++) {
            let state = aTimerStates[iTimerState];
            let timer = this.findTimer(state[0]);
            if (timer) {
                timer[1] = state[1];
                /**
                 * When restoring from a new state (ie, when state[3] is true), the theory was we could use
                 * state[2] as-is, but in reality, overriding a component's timeout value is problematic, especially
                 * if a component wants to start using a new value (ie, we don't want an old value trumping it).
                 */
                // if (state[3] || state[2] > 0) timer[2] = state[2];
            }
        }
    }

    /**
     * saveTimers()
     *
     * @this {CPU}
     * @returns {Array}
     */
    saveTimers()
    {
        let aTimerStates = [];
        for (let iTimer = 0; iTimer < this.aTimers.length; iTimer++) {
            let timer = this.aTimers[iTimer];
            /**
             * We now push a 4th element (true) to indicate that this is a new timer state, where timer[2] is
             * a tri-state value (positive for milliseconds, negative for cycles, zero for none); previously, it
             * was negative (-1) for none or else some number of milliseconds.
             */
            aTimerStates.push([timer[0], timer[1], timer[2], true]);
        }
        return aTimerStates;
    }

    /**
     * setTimer(iTimer, ms, fReset)
     *
     * Using the timer index from a previous addTimer() call, this sets that timer to fire after the
     * specified number of milliseconds.
     *
     * This is preferred over JavaScript's setTimeout(), because all our timers are effectively paused when
     * the CPU is paused (eg, when the Debugger halts execution).  Moreover, setTimeout() handlers only run after
     * runCPU() yields, which is far too granular for some components (eg, when the SerialPort tries to simulate
     * interrupts at 9600 baud).
     *
     * Ideally, the only function that would use setTimeout() is runCPU(), while the rest of the components
     * use setTimer(); however, due to legacy code (ie, code that predates these functions and/or laziness),
     * that may not be the case.
     *
     * @this {CPU}
     * @param {number} iTimer
     * @param {number} ms (number of milliseconds if positive, cycles otherwise)
     * @param {boolean} [fReset] (true if the timer should be reset even if already armed)
     * @returns {number} (number of cycles used to arm timer, or -1 if error)
     */
    setTimer(iTimer, ms, fReset)
    {
        let nCycles = -1;
        if (iTimer >= 0 && iTimer < this.aTimers.length) {
            let timer = this.aTimers[iTimer];
            if (fReset || timer[1] < 0) {
                nCycles = ms > 0? this.getMSCycles(ms) : -ms;
                /**
                 * If the CPU is currently executing a burst of cycles, the number of cycles it has executed in
                 * that burst so far must NOT be charged against the cycle timeout we're about to set.  The simplest
                 * way to resolve that is to immediately call endBurst() and bias the cycle timeout by the number
                 * of cycles that the burst executed.
                 */
                if (this.flags.running) {
                    nCycles += this.endBurst();
                }
                timer[1] = nCycles;
            }
        }
        return nCycles;
    }

    /**
     * updateTimers(nCycles)
     *
     * Used by runCPU() to reduce all active timer countdown values by the number of cycles just executed;
     * this is the function that actually "fires" any timer(s) whose countdown has reached (or dropped below)
     * zero, invoking their callback function.
     *
     * @this {CPU}
     * @param {number} nCycles (number of cycles actually executed)
     */
    updateTimers(nCycles)
    {
        for (let iTimer = this.aTimers.length - 1; iTimer >= 0; iTimer--) {
            let timer = this.aTimers[iTimer];
            if (DEBUG) this.assert(!isNaN(timer[1]));
            if (timer[1] < 0) continue;
            timer[1] -= nCycles;
            if (timer[1] <= 0) {
                if (DEBUG) {
                    this.printf(MESSAGE.CPU + MESSAGE.TIMER, "updateTimer(%d): firing %s with only %d cycles left\n", nCycles, timer[0], (timer[1] + nCycles));
                }
                timer[1] = -1;      // zero is technically an "active" value, so ensure the timer is dormant now
                timer[3]();         // safe to invoke the callback function now
                if (timer[2]) {
                    this.setTimer(iTimer, timer[2]);
                    if (DEBUG) {
                        this.printf(MESSAGE.CPU + MESSAGE.TIMER, "updateTimer(%d): rearming %s for %dms (%d cycles)\n", nCycles, timer[0], timer[2], timer[1]);
                    }
                }
            }
        }
    }

    /**
     * getMSCycles(ms)
     *
     * @this {CPU}
     * @param {number} ms
     * @returns {number} number of corresponding cycles
     */
    getMSCycles(ms)
    {
        return ((this.nBaseCyclesPerSecond * this.nCurrentMultiplier) / 1000 * ms)|0;
    }

    /**
     * getBurstCycles(nCycles)
     *
     * @this {CPU}
     * @param {number} nCycles (maximum number of cycles to execute)
     * @returns {number}
     */
    getBurstCycles(nCycles)
    {
        for (let iTimer = this.aTimers.length - 1; iTimer >= 0; iTimer--) {
            let timer = this.aTimers[iTimer];
            if (DEBUG) this.assert(!isNaN(timer[1]));
            if (timer[1] < 0) continue;
            if (nCycles > timer[1]) {
                nCycles = timer[1];
            }
        }
        return nCycles;
    }

    /**
     * endBurst()
     *
     * @this {CPU}
     * @returns {number} (number of cycles executed in the most recent burst)
     */
    endBurst()
    {
        let nCycles = this.nBurstCycles - this.nStepCycles;
        this.nBurstCycles = this.nStepCycles = 0;
        this.nCyclesThisRun += nCycles;
        this.nRunCycles += nCycles;
        return nCycles;
    }

    /**
     * runCPU()
     *
     * @this {CPU}
     */
    runCPU()
    {
        this.idRunTimeout = 0;
        if (!this.flags.running) return;

        let msRunStart = 0, msRunStop = 0, nRunCycles = 0;
        if (DEBUG) msRunStart = Component.getTime();

        /**
         *  calcStartTime() initializes the cycle counter and timestamp for this runCPU() invocation.
         */
        this.calcStartTime();

        try {
            this.flags.yield = false;
            do {
                /**
                 * getBurstCycles() tells us how many cycles to execute as a burst.  The answer will always
                 * be less than getCurrentCyclesPerSecond(), because at the very least, our own timer fires more than
                 * once per second.
                 */
                let nCycles = this.getBurstCycles(this.flags.checksum? 1 : this.getCurrentCyclesPerSecond());

                if (this.chipset) {
                    this.chipset.updateAllTimers();
                    nCycles = this.chipset.getTimerCycleLimit(0, nCycles);
                    nCycles = this.chipset.getRTCCycleLimit(nCycles);
                }
                /**
                 * Execute the burst.
                 */
                try {
                    this.stepCPU(nCycles);
                }
                catch(exception) {
                    if (typeof exception != "number") throw exception;
                    if (MAXDEBUG) this.printf("CPU exception %#04x\n", exception);
                    /**
                     * TODO: If we ever get into a situation where every single instruction is generating a fault
                     * (eg, if an 8088 executes opcode 0xFF 0xFF, which is incorrectly routed to helpFault() instead
                     * of fnGRPUndefined()), the browser may hang because we're failing to yield often enough.
                     * This is likely because the thrown exceptions are taking MUCH longer than normal instructions,
                     * throwing off our burst calculations.  We need to either adjust the burst or break out of the
                     * DO-WHILE loop on every exception.
                     */
                }

                /**
                 * Terminate the burst, returning the number of cycles that stepCPU() actually ran.  If this
                 * returns zero, then presumably someone already called endBurst(), such as stopCPU(), and already
                 * took care of all the timers.
                 */
                nCycles = this.endBurst();
                if (nCycles) {
                    nRunCycles += nCycles;
                    this.updateTimers(nCycles);
                    this.updateChecksum(nCycles);
                }
            } while (this.flags.running && !this.flags.yield);
        }
        catch (e) {
            this.stopCPU();
            this.updateCPU();
            if (this.cmp) this.cmp.stop(Component.getTime(), this.getCycles());
            this.setError(e.stack || e.message);
            return;
        }

        if (DEBUG) {
            msRunStop = Component.getTime();
            this.addTimeLog(nRunCycles, this.getCycles(), msRunStart, msRunStop - msRunStart);
        }

        if (this.flags.running) {
            this.assert(!this.idRunTimeout);
            let msTimeout = this.calcRemainingTime();
            if (DEBUG) this.addTimeLog(0, 0, msRunStop, msTimeout);
            this.idRunTimeout = setTimeout(this.onRunTimeout, msTimeout);
        }
    }

    /**
     * startCPU(fUpdateFocus)
     *
     * For use by any component that wants to start the CPU.
     *
     * @param {boolean} [fUpdateFocus]
     * @param {boolean} [fQuiet]
     * @returns {boolean}
     */
    startCPU(fUpdateFocus, fQuiet)
    {
        if (this.isError()) {
            return false;
        }
        if (this.flags.running) {
            if (!fQuiet) this.printf(MESSAGE.NONE, "%s busy\n", this.toString());
            return false;
        }
        if (this.idRunTimeout) {
            clearTimeout(this.idRunTimeout);
            this.idRunTimeout = 0;
        }
        /**
         *  setSpeed() without a speed parameter leaves the selected speed in place, but also resets the
         *  cycle counter and timestamp for the current series of runCPU() calls, and calculates the maximum number
         *  of cycles for each burst based on the last known effective CPU speed.
         */
        this.setSpeed();
        this.flags.running = true;
        this.flags.starting = true;
        if (this.chipset) this.chipset.start();
        let controlRun = this.bindings["run"];
        if (controlRun) controlRun.textContent = "Halt";
        if (this.cmp) {
            this.cmp.updateStatus(true);
            if (fUpdateFocus) this.cmp.updateFocus();
            this.cmp.start(Component.getTime(), this.getCycles());
        }
        this.assert(!this.idRunTimeout);
        this.idRunTimeout = setTimeout(this.onRunTimeout, 0);
        return true;
    }

    /**
     * stepCPU(nMinCycles)
     *
     * This will be implemented by the CPUx86 component.
     *
     * @this {CPU}
     * @param {number} nMinCycles (0 implies a single-step, and therefore breakpoints should be ignored)
     * @returns {number} of cycles executed; 0 indicates that the last instruction was not executed
     */
    stepCPU(nMinCycles)
    {
        return 0;
    }

    /**
     * stopCPU(fComplete)
     *
     * For use by any component that wants to stop the CPU.
     *
     * @this {CPU}
     * @param {boolean} [fComplete]
     * @returns {boolean} true if the CPU was stopped, false if it was already stopped
     */
    stopCPU(fComplete)
    {
        let fStopped = false;
        if (this.flags.running) {
            let nCycles = this.endBurst();
            if (nCycles) {
                this.updateTimers(nCycles);
                this.updateChecksum(nCycles);
            }
            this.addCycles(this.nRunCycles);
            this.nRunCycles = 0;
            this.flags.running = false;
            if (this.chipset) this.chipset.stop();
            let controlRun = this.bindings["run"];
            if (controlRun) controlRun.textContent = "Run";
            if (this.cmp) {
                this.cmp.stop(Component.getTime(), this.getCycles());
                this.cmp.updateStatus(true);
            }
            if (!this.dbg) this.printf(MESSAGE.STATUS, "Stopped\n");
            fStopped = true;
        }
        this.flags.complete = fComplete;
        return fStopped;
    }

    /**
     * nonCPU(fn)
     *
     * Use this function to perform any work outside the scope of the CPU (eg, DOM updates),
     * to prevent that work from disrupting our speed calculations.
     *
     * @this {CPU}
     * @param {function()} fn (should return true only if the function actually performed any work)
     * @returns {boolean}
     */
    nonCPU(fn)
    {
        let msStart = Component.getTime();
        if (fn()) {
            let msStop = Component.getTime();
            this.msDiscount += msStop - msStart;
            return true;
        }
        return false;
    }

    /**
     * updateCPU(fForce)
     *
     * This used to be performed at the end of every stepCPU(), but runCPU() -- which relies upon
     * stepCPU() -- needed to have more control over when these updates are performed.  However, for
     * other callers of stepCPU(), such as the Debugger, the combination of stepCPU() + updateCPU()
     * provides the old behavior.
     *
     * @this {CPU}
     * @param {boolean} [fForce] (true to force a Computer update; used by the Debugger)
     */
    updateCPU(fForce)
    {
        if (this.cmp) this.cmp.updateStatus(fForce);
    }

    /**
     * yieldCPU()
     *
     * Similar to stopCPU() with regard to how it resets various cycle countdown values, but the CPU
     * remains in a "running" state.
     *
     * @this {CPU}
     */
    yieldCPU()
    {
        this.flags.yield = true;
        /**
         * The Debugger calls yieldCPU() after every message() to ensure browser responsiveness, but it looks
         * odd for those messages to show CPU state changes but for the CPU's own status display to not (ditto
         * for the Video display), so I've added this call to try to keep things looking synchronized.
         */
        this.updateCPU();
    }
}
