/**
 * @fileoverview Controls the PCx80 CPU component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import MESSAGE from "./message.js";
import Component from "../../../modules/v2/component.js";
import StrLib from "../../../modules/v2/strlib.js";
import { DEBUG, DEBUGGER, MAXDEBUG } from "./defines.js";

/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @class CPUx80
 * @unrestricted
 */
export default class CPUx80 extends Component {
    /**
     * CPUx80(parmsCPU, nCyclesDefault)
     *
     * The CPUx80 class supports the following (parmsCPU) properties:
     *
     *      cycles: the machine's base cycles per second; the CPUStateX80 constructor
     *      will provide us with a default (based on the CPU model) to use as a fallback.
     *
     *      multiplier: base cycle multiplier; default is 1.
     *
     *      autoStart: true to automatically start, false to not, or null if "it depends";
     *      null is the default, which means do not autostart UNLESS there is no Debugger
     *      and no "Run" button (ie, no way to manually start the machine).
     *
     *      csStart: the number of cycles that runCPU() must wait before generating
     *      checksum records; -1 if disabled. checksum records are a diagnostic aid
     *      used to help compare one CPU run to another.
     *
     *      csInterval: the number of cycles that runCPU() must execute before generating
     *      a checksum record; -1 if disabled.
     *
     *      csStop: the number of cycles to stop generating checksum records.
     *
     * This component is primarily responsible for interfacing the CPU with the outside
     * world (eg, Panel and Debugger components), and managing overall CPU operation.
     *
     * It is extended by the CPUStateX80 component, where the simulation control logic resides.
     *
     * @this {CPUx80}
     * @param {Object} parmsCPU
     * @param {number} nCyclesDefault
     */
    constructor(parmsCPU, nCyclesDefault)
    {
        super("CPU", parmsCPU, MESSAGE.CPU);

        let nCycles = parmsCPU['cycles'] || nCyclesDefault;

        let nMultiplier = parmsCPU['multiplier'] || 1;

        this.nCyclesPerSecond = nCycles;

        /*
         * nCyclesMultiplier replaces the old "speed" variable (0, 1, 2) and eliminates the need for
         * the constants (SPEED_SLOW, SPEED_FAST and SPEED_MAX).  The UI simply doubles the multiplier
         * until we've exceeded the host's speed limit and then starts the multiplier over at 1.
         */
        this.nCyclesMultiplier = nMultiplier;
        this.mhzDefault = Math.round(this.nCyclesPerSecond / 10000) / 100;
        /*
         * TODO: Take care of this with an initial setSpeed() call instead?
         */
        this.mhzTarget = this.mhzDefault * this.nCyclesMultiplier;

        /*
         * We add a number of flags to the set initialized by Component
         */
        this.flags.running = false;
        this.flags.starting = false;
        this.flags.autoStart = parmsCPU['autoStart'];

        /*
         * TODO: Add some UI for fDisplayLiveRegs (either an XML property, or a UI checkbox, or both)
         */
        this.flags.displayLiveRegs = false;

        /*
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

        /*
         * Array of countdown timers managed by addTimer() and setTimer().
         */
        this.aTimers = [];

        this.onRunTimeout = this.runCPU.bind(this); // function onRunTimeout() { cpu.runCPU(); };

        this.setReady();
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {CPUx80}
     * @param {ComputerX80} cmp
     * @param {BusX80} bus
     * @param {CPUx80} cpu
     * @param {DebuggerX80} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.cmp = cmp;
        this.bus = bus;
        this.dbg = dbg;

        for (let i = 0; i < CPUx80.BUTTONS.length; i++) {
            let control = this.bindings[CPUx80.BUTTONS[i]];
            if (control) this.cmp.setBinding("", CPUx80.BUTTONS[i], control);
        }

        /*
         * Attach the ChipSet component to the CPU so that it can be notified whenever the CPU stops and starts.
         */
        this.chipset = /** @type {ChipSetX80} */ (cmp.getMachineComponent("ChipSet"));

        /*
         * We've already saved the parmsCPU 'autoStart' setting, but there may be a machine (or URL) override.
         */
        let sAutoStart = cmp.getMachineParm('autoStart');
        if (sAutoStart != null) {
            this.flags.autoStart = (sAutoStart == "true"? true : (sAutoStart  == "false"? false : !!sAutoStart));
        }

        this.setReady();
    }

    /**
     * reset()
     *
     * @this {CPUx80}
     */
    reset()
    {
    }

    /**
     * save()
     *
     * This is a placeholder for save support (overridden by the CPUStateX80 component).
     *
     * @this {CPUx80}
     * @returns {Object|null}
     */
    save()
    {
        return null;
    }

    /**
     * restore(data)
     *
     * This is a placeholder for restore support (overridden by the CPUStateX80 component).
     *
     * @this {CPUx80}
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
     * @this {CPUx80}
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
            /*
             * Give the Debugger a chance to do/print something once we've powered up
             */
            if (DEBUGGER && this.dbg) {
                this.dbg.init();
            } else {
                this.printf("No debugger detected\n");
            }
        }
        /*
         * The Computer component (which is responsible for all powerDown and powerUp notifications)
         * is now responsible for managing a component's fPowered flag, not us.
         *
         *      this.flags.powered = true;
         */
        this.updateCPU();
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {CPUx80}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
     */
    powerDown(fSave, fShutdown)
    {
        /*
         * The Computer component (which is responsible for all powerDown and powerUp notifications)
         * is now responsible for managing a component's fPowered flag, not us.
         *
         *      this.flags.powered = false;
         */
        return fSave? this.save() : true;
    }

    /**
     * autoStart()
     *
     * @this {CPUx80}
     * @returns {boolean} true if started, false if not
     */
    autoStart()
    {
        /*
         * Start running automatically on power-up, assuming there's no Debugger and no "Run" button
         */
        if (this.flags.autoStart || (!DEBUGGER || !this.dbg) && this.bindings["run"] === undefined) {
            /*
             * We used to also set fUpdateFocus when calling runCPU(), on the assumption that in the "auto-starting"
             * context, a machine without focus is like a day without sunshine, but in reality, focus should only be
             * forced when the user takes some other machine-related action.
             */
            this.runCPU();
            return true;
        }
        return false;
    }

    /**
     * isPowered()
     *
     * @this {CPUx80}
     * @returns {boolean}
     */
    isPowered()
    {
        if (!this.flags.powered) {
            this.printf("%s not powered\n", this.toString());
            return false;
        }
        return true;
    }

    /**
     * isRunning()
     *
     * @this {CPUx80}
     * @returns {boolean}
     */
    isRunning()
    {
        return this.flags.running;
    }

    /**
     * getChecksum()
     *
     * This will be implemented by the CPUStateX80 component.
     *
     * @this {CPUx80}
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
     * @this {CPUx80}
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
            /*
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
     * @this {CPUx80}
     * @param {number} nCycles
     */
    updateChecksum(nCycles)
    {
        if (this.flags.checksum) {
            /*
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
     * @this {CPUx80}
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
     * @this {CPUx80}
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
            /*
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
     * @this {CPUx80}
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
            /*
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
                if (!cpu.cmp || !cpu.cmp.checkPower()) return;
                /*
                 * We no longer pass true to these runCPU()/stopCPU() calls, on the theory that if the "run"
                 * control is visible, then the computer is probably sufficiently visible as well; the problem
                 * with setting fUpdateFocus to true is that it can jerk the web page around in annoying ways.
                 */
                if (!cpu.flags.running) {
                    cpu.runCPU();
                } else {
                    cpu.stopCPU();
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
                cpu.setSpeed(cpu.nCyclesMultiplier << 1, true);
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
     * This function is used by the ChipSet component whenever a very low timer count is set,
     * in anticipation of the timer requiring an update sooner than the normal nCyclesPerYield
     * period in runCPU() would normally provide.
     *
     * NOTE: In this context, "timer" refers to a timer chip (eg, an Intel 8253) being emulated by
     * by the ChipSet component, not the timers managed by the CPU (eg, addTimer(), setTimer(), etc).
     *
     * @this {CPUx80}
     * @param {number} nCycles is the target number of cycles to drop the current burst to
     * @returns {boolean}
     */
    setBurstCycles(nCycles)
    {
        if (this.flags.running) {
            let nDelta = this.nStepCycles - nCycles;
            /*
             * NOTE: If nDelta is negative, we will actually be increasing nStepCycles and nBurstCycles.
             * Which is OK, but if we're also taking snapshots of the cycle counts, to make sure that instruction
             * costs are being properly assessed, then we need to update nSnapCycles as well.
             *
             * TODO: If the delta is negative, we could simply ignore the request, but we must first carefully
             * consider the impact on the ChipSet timers, if any.
             */
            // if (DEBUG) this.nSnapCycles -= nDelta;
            this.nStepCycles -= nDelta;
            this.nBurstCycles -= nDelta;
            return true;
        }
        return false;
    }

    /**
     * addCycles(nCycles, fEndStep)
     *
     * @this {CPUx80}
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
     * calcCycles(fRecalc)
     *
     * Calculate the number of cycles to process for each "burst" of CPU activity.  The size of a burst
     * is driven by YIELDS_PER_SECOND (eg, 30).
     *
     * At the end of each burst, we subtract burst cycles from the yield cycle "threshold" counter.
     * Whenever the "next yield" cycle counter goes to (or below) zero, we compare elapsed time to the time
     * we expected the virtual hardware to take (eg, 1000ms/50 or 20ms), and if we still have time remaining,
     * we sleep the remaining time (or 0ms if there's no remaining time), and then restart runCPU().
     *
     * @this {CPUx80}
     * @param {boolean} [fRecalc] is true if the caller wants to recalculate thresholds based on the most recent
     * speed calculation (see calcSpeed).
     */
    calcCycles(fRecalc)
    {
        /*
         * Calculate "per" yield values.
         */
        let vMultiplier = 1;
        if (fRecalc) {
            if (this.nCyclesMultiplier > 1 && this.mhz) {
                vMultiplier = (this.mhz / this.mhzDefault);
            }
        }

        this.msPerYield = Math.round(1000 / CPUx80.YIELDS_PER_SECOND);
        this.nCyclesPerYield = Math.floor(this.nCyclesPerSecond / CPUx80.YIELDS_PER_SECOND * vMultiplier);

        /*
         * And initialize "next" yield values to the "per" values.
         */
        if (!fRecalc) {
            this.nCyclesNextYield = this.nCyclesPerYield;
        }
        this.nCyclesRecalc = 0;
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
     * @this {CPUx80}
     * @param {boolean} [fScaled] is true if the caller wants a cycle count relative to a multiplier of 1
     * @returns {number}
     */
    getCycles(fScaled)
    {
        let nCycles = this.nTotalCycles + this.nRunCycles + this.nBurstCycles - this.nStepCycles;
        if (fScaled && this.nCyclesMultiplier > 1 && this.mhz > this.mhzDefault) {
            /*
             * We could scale the current cycle count by the current effective speed (this.mhz); eg:
             *
             *      nCycles = Math.round(nCycles / (this.mhz / this.mhzDefault));
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
            nCycles = Math.round(nCycles / this.nCyclesMultiplier);
        }
        return nCycles;
    }

    /**
     * getCyclesPerSecond()
     *
     * This returns the CPU's "base" speed (ie, the original cycles per second defined for the machine)
     *
     * @this {CPUx80}
     * @returns {number}
     */
    getCyclesPerSecond()
    {
        return this.nCyclesPerSecond;
    }

    /**
     * resetCycles()
     *
     * Resets speed and cycle information as part of any reset() or restore(); this typically occurs during powerUp().
     * It's important that this be called BEFORE the actual restore() call, because restore() may want to call setSpeed(),
     * which in turn assumes that all the cycle counts have been initialized to sensible values.
     *
     * @this {CPUx80}
     */
    resetCycles()
    {
        this.mhz = 0;
        this.nYieldsSinceStatusUpdate = 0;
        this.nTotalCycles = this.nRunCycles = this.nBurstCycles = this.nStepCycles = 0;
        this.resetChecksum();
        this.setSpeed(1);
    }

    /**
     * getSpeed()
     *
     * @this {CPUx80}
     * @returns {number} the current speed multiplier
     */
    getSpeed()
    {
        return this.nCyclesMultiplier;
    }

    /**
     * getSpeedCurrent()
     *
     * @this {CPUx80}
     * @returns {string} the current speed, in mhz, as a string formatted to two decimal places
     */
    getSpeedCurrent()
    {
        /*
         * TODO: Has toFixed() been "fixed" in all browsers (eg, IE) to return a rounded value now?
         */
        return ((this.flags.running && this.mhz)? (this.mhz.toFixed(2) + "Mhz") : "Stopped");
    }

    /**
     * getSpeedTarget()
     *
     * @this {CPUx80}
     * @returns {string} the target speed, in mhz, as a string formatted to two decimal places
     */
    getSpeedTarget()
    {
        /*
         * TODO: Has toFixed() been "fixed" in all browsers (eg, IE) to return a rounded value now?
         */
        return this.mhzTarget.toFixed(2) + "Mhz";
    }

    /**
     * setSpeed(nMultiplier, fUpdateFocus)
     *
     * NOTE: This used to return the target speed, in mhz, but no callers appear to care at this point.
     *
     * @desc Whenever the speed is changed, the running cycle count and corresponding start time must be reset,
     * so that the next effective speed calculation obtains sensible results.  In fact, when runCPU() initially calls
     * setSpeed() with no parameters, that's all this function does (it doesn't change the current speed setting).
     *
     * @this {CPUx80}
     * @param {number} [nMultiplier] is the new proposed multiplier (reverts to 1 if the target was too high)
     * @param {boolean} [fUpdateFocus] is true to update Computer focus
     * @returns {boolean} true if successful, false if not
     */
    setSpeed(nMultiplier, fUpdateFocus)
    {
        let fSuccess = false;
        if (nMultiplier !== undefined) {
            /*
             * If we haven't reached 80% (0.8) of the current target speed, revert to a multiplier of one (1).
             */
            if (this.mhz / this.mhzTarget < 0.8) {
                nMultiplier = 1;
            } else {
                fSuccess = true;
            }
            this.nCyclesMultiplier = nMultiplier;
            let mhz = this.mhzDefault * this.nCyclesMultiplier;
            if (this.mhzTarget != mhz) {
                this.mhzTarget = mhz;
                let sSpeed = this.getSpeedTarget();
                let controlSpeed = this.bindings["setSpeed"];
                if (controlSpeed) controlSpeed.textContent = sSpeed;
                this.printf("target speed: %s\n", sSpeed);
            }
            if (fUpdateFocus && this.cmp) this.cmp.updateFocus();
        }
        this.addCycles(this.nRunCycles);
        this.nRunCycles = 0;
        this.msStartRun = Component.getTime();
        this.msEndThisRun = 0;
        this.calcCycles();
        return fSuccess;
    }

    /**
     * calcSpeed(nCycles, msElapsed)
     *
     * @this {CPUx80}
     * @param {number} nCycles
     * @param {number} msElapsed
     */
    calcSpeed(nCycles, msElapsed)
    {
        if (msElapsed) {
            this.mhz = Math.round(nCycles / (msElapsed * 10)) / 100;
            if (msElapsed >= 86400000) {
                this.nTotalCycles = 0;
                this.setSpeed();        // reset all counters once per day so that we never have to worry about overflow
            }
        }
    }

    /**
     * calcStartTime()
     *
     * @this {CPUx80}
     */
    calcStartTime()
    {
        if (this.nCyclesRecalc >= this.nCyclesPerSecond) {
            this.calcCycles(true);
        }
        this.nCyclesThisRun = 0;
        this.msStartThisRun = Component.getTime();

        /*
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
         * to hit its target speed, since you would expect any instruction that displays a message to be an
         * EXTREMELY slow instruction.
         */
        if (this.msEndThisRun) {
            let msDelta = this.msStartThisRun - this.msEndThisRun;
            if (msDelta > this.msPerYield) {
                if (MAXDEBUG) this.printf("large time delay: %dms\n", msDelta);
                this.msStartRun += msDelta;
                /*
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
     * @this {CPUx80}
     * @returns {number}
     */
    calcRemainingTime()
    {
        this.msEndThisRun = Component.getTime();

        let msYield = this.msPerYield;
        if (this.nCyclesThisRun) {
            /*
             * Normally, we would assume we executed a full quota of work over msPerYield, but since the CPU
             * now has the option of calling yieldCPU(), that might not be true.  If nCyclesThisRun is correct, then
             * the ratio of nCyclesThisRun/nCyclesPerYield should represent the percentage of work we performed,
             * and so applying that percentage to msPerYield should give us a better estimate of work vs. time.
             */
            msYield = Math.round(msYield * this.nCyclesThisRun / this.nCyclesPerYield);
        }

        let msElapsedThisRun = this.msEndThisRun - this.msStartThisRun;
        let msRemainsThisRun = msYield - msElapsedThisRun;

        /*
         * We could pass only "this run" results to calcSpeed():
         *
         *      nCycles = this.nCyclesThisRun;
         *      msElapsed = msElapsedThisRun;
         *
         * but it seems preferable to use longer time periods and hopefully get a more accurate speed.
         *
         * Also, if msRemainsThisRun >= 0 && this.nCyclesMultiplier == 1, we could pass these results instead:
         *
         *      nCycles = this.nCyclesThisRun;
         *      msElapsed = this.msPerYield;
         *
         * to insure that we display a smooth, constant N Mhz.  But for now, I prefer seeing any fluctuations.
         */
        let nCycles = this.nRunCycles;
        let msElapsed = this.msEndThisRun - this.msStartRun;

        if (MAXDEBUG && msRemainsThisRun < 0 && this.nCyclesMultiplier > 1) {
            this.printf("warning: updates @%dms (prefer %dms)\n", msElapsedThisRun, Math.round(msYield));
        }

        this.calcSpeed(nCycles, msElapsed);

        if (msRemainsThisRun < 0 || this.mhz < this.mhzTarget) {
            /*
             * Try "throwing out" the effects of large anomalies, by moving the overall run start time up;
             * ordinarily, this should only happen when the someone is using an external Debugger or some other
             * tool or feature that is interfering with our overall execution.
             */
            if (msRemainsThisRun < -1000) {
                this.msStartRun -= msRemainsThisRun;
            }
            /*
             * If the last burst took MORE time than we allotted (ie, it's taking more than 1 second to simulate
             * nCyclesPerSecond), all we can do is yield for as little time as possible (ie, 0ms) and hope that the
             * simulation is at least usable.
             */
            msRemainsThisRun = 0;
        }

        /*
         * Last but not least, update nCyclesRecalc, so that when runCPU() starts up again and calls calcStartTime(),
         * it'll be ready to decide if calcCycles() should be called again.
         */
        this.nCyclesRecalc += this.nCyclesThisRun;

        if (DEBUG && this.messageEnabled(MESSAGE.CPU) && msRemainsThisRun) {
            this.printf("calcRemainingTime: %dms to sleep after %dms\n", msRemainsThisRun, this.msEndThisRun);
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
     *      [2]: automatic setTimer value, if any, in milliseconds
     *      [3]: callback function
     *
     * A timer is initially dormant; dormant timers have a countdown value of -1 (although any negative number
     * will suffice) and active timers have a non-negative value.
     *
     * Why not use JavaScript's setTimeout() instead?  Good question.  For a good answer, see setTimer() below.
     *
     * @this {CPUx80}
     * @param {string} id
     * @param {function()} callBack
     * @param {number} [ms] (if set, enables automatic setTimer calls)
     * @returns {number} timer index
     */
    addTimer(id, callBack, ms = -1)
    {
        let iTimer = this.aTimers.length;
        this.aTimers.push([id, -1, ms, callBack]);
        if (ms >= 0) this.setTimer(iTimer, ms);
        return iTimer;
    }

    /**
     * findTimer(id)
     *
     * @this {CPUx80}
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
     * use setTimer(); however, due to legacy code (ie, code that predates these functions) and/or laziness,
     * that's currently not the case.  TODO: Fix.
     *
     * @this {CPUx80}
     * @param {number} iTimer
     * @param {number} ms (converted into a cycle countdown internally)
     * @param {boolean} [fReset] (true if the timer should be reset even if already armed)
     * @returns {number} (number of cycles used to arm timer, or -1 if error)
     */
    setTimer(iTimer, ms, fReset)
    {
        let nCycles = -1;
        if (iTimer >= 0 && iTimer < this.aTimers.length) {
            let timer = this.aTimers[iTimer];
            if (fReset || timer[1] < 0) {
                nCycles = this.getMSCycles(ms);
                /*
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
     * getMSCycles(ms)
     *
     * @this {CPUx80}
     * @param {number} ms
     * @returns {number} number of corresponding cycles
     */
    getMSCycles(ms)
    {
        return ((this.nCyclesPerSecond * this.nCyclesMultiplier) / 1000 * ms)|0;
    }

    /**
     * getBurstCycles(nCycles)
     *
     * Used by runCPU() to get min(nCycles,[timer cycle counts])
     *
     * @this {CPUx80}
     * @param {number} nCycles (number of cycles about to execute)
     * @returns {number} (either nCycles or less if a timer needs to fire)
     */
    getBurstCycles(nCycles)
    {
        for (let iTimer = this.aTimers.length - 1; iTimer >= 0; iTimer--) {
            let timer = this.aTimers[iTimer];
            this.assert(!isNaN(timer[1]));
            if (timer[1] < 0) continue;
            if (nCycles > timer[1]) {
                nCycles = timer[1];
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
     * @this {CPUx80}
     * @param {number} nCycles (number of cycles actually executed)
     */
    updateTimers(nCycles)
    {
        for (let iTimer = this.aTimers.length - 1; iTimer >= 0; iTimer--) {
            let timer = this.aTimers[iTimer];
            this.assert(!isNaN(timer[1]));
            if (timer[1] < 0) continue;
            timer[1] -= nCycles;
            if (timer[1] <= 0) {
                this.printf(MESSAGE.DEBUG + MESSAGE.CPU, "updateTimer(%d): firing %s with only %d cycles left\n", nCycles, timer[0], (timer[1] + nCycles));
                timer[1] = -1;      // zero is technically an "active" value, so ensure the timer is dormant now
                timer[3]();         // safe to invoke the callback function now
                if (timer[2] >= 0) {
                    this.setTimer(iTimer, timer[2]);
                    this.printf(MESSAGE.DEBUG + MESSAGE.CPU, "updateTimer(%d): rearming %s for %dms (%d cycles)\n", nCycles, timer[0], timer[2], timer[1]);
                }
            }
        }
    }

    /**
     * endBurst(fReset)
     *
     * @this {CPUx80}
     * @param {boolean} [fReset]
     * @returns {number} (number of cycles executed in the most recent burst)
     */
    endBurst(fReset)
    {
        let nCycles = this.nBurstCycles -= this.nStepCycles;
        this.nStepCycles = 0;
        if (fReset) this.nBurstCycles = 0;
        return nCycles;
    }

    /**
     * runCPU(fUpdateFocus)
     *
     * @this {CPUx80}
     * @param {boolean} [fUpdateFocus] is true to update Computer focus
     */
    runCPU(fUpdateFocus)
    {
        if (!this.setBusy(true)) {
            this.updateCPU();
            if (this.cmp) this.cmp.stop(Component.getTime(), this.getCycles());
            return;
        }

        this.startCPU(fUpdateFocus);

        /*
         *  calcStartTime() initializes the cycle counter and timestamp for this runCPU() invocation, and optionally
         *  recalculates the the maximum number of cycles for each burst if the nCyclesRecalc threshold has been reached.
         */
        this.calcStartTime();

        try {
            do {
                /*
                 * nCycles is how many cycles we WANT to run on each iteration of stepCPU(), and may be as
                 * HIGH as nCyclesPerYield, but it may be significantly less.  getBurstCycles() will adjust
                 * nCycles downward if any CPU timers need to fire during the next burst.
                 */
                let nCycles = this.getBurstCycles(this.flags.checksum? 1 : this.nCyclesPerYield);

                /*
                 * Execute the burst.
                 */
                this.stepCPU(nCycles);

                /*
                 * Terminate the burst, returning the number of cycles that stepCPU() actually ran.
                 */
                nCycles = this.endBurst(true);

                /*
                 * Add nCycles to nCyclesThisRun, as well as nRunCycles (the cycle count since the CPU first started).
                 */
                this.nCyclesThisRun += nCycles;
                this.nRunCycles += nCycles;
                this.updateChecksum(nCycles);

                /*
                 * Update any/all timers, firing those whose cycle countdowns have reached (or dropped below) zero.
                 */
                this.updateTimers(nCycles);

                this.nCyclesNextYield -= nCycles;
                if (this.nCyclesNextYield <= 0) {
                    this.nCyclesNextYield += this.nCyclesPerYield;
                    if (++this.nYieldsSinceStatusUpdate >= CPUx80.YIELDS_PER_STATUS) {
                        if (this.cmp) this.cmp.updateStatus();
                        this.nYieldsSinceStatusUpdate = 0;
                    }
                    break;
                }
            } while (this.flags.running);
        }
        catch (e) {
            this.stopCPU();
            this.updateCPU();
            if (this.cmp) this.cmp.stop(Component.getTime(), this.getCycles());
            this.setBusy(false);
            this.setError(e.stack || e.message);
            return;
        }

        setTimeout(this.onRunTimeout, this.calcRemainingTime());
    }

    /**
     * startCPU(fUpdateFocus)
     *
     * WARNING: Other components must use runCPU() to get the CPU running; this is a runCPU() helper function only.
     *
     * @param {boolean} [fUpdateFocus]
     */
    startCPU(fUpdateFocus)
    {
        if (!this.flags.running) {
            /*
             *  setSpeed() without a speed parameter leaves the selected speed in place, but also resets the
             *  cycle counter and timestamp for the current series of runCPU() calls, calculates the maximum number
             *  of cycles for each burst based on the last known effective CPU speed, and resets the nCyclesRecalc
             *  threshold counter.
             */
            this.setSpeed();
            if (this.cmp) this.cmp.start(this.msStartRun, this.getCycles());
            this.flags.running = true;
            this.flags.starting = true;
            if (this.chipset) this.chipset.start();
            let controlRun = this.bindings["run"];
            if (controlRun) controlRun.textContent = "Halt";
            if (this.cmp) {
                this.cmp.updateStatus(true);
                if (fUpdateFocus) this.cmp.updateFocus(true);
            }
        }
    }

    /**
     * stepCPU(nMinCycles)
     *
     * This will be implemented by the CPUStateX80 component.
     *
     * @this {CPUx80}
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
     * This similar to yieldCPU(), but it doesn't need to zero nCyclesNextYield to break out of runCPU();
     * it simply needs to clear fRunning (well, "simply" may be oversimplifying a bit....)
     *
     * @this {CPUx80}
     * @param {boolean} [fComplete]
     */
    stopCPU(fComplete)
    {
        this.isBusy(true);
        this.endBurst();
        this.addCycles(this.nRunCycles);
        this.nRunCycles = 0;
        if (this.flags.running) {
            this.flags.running = false;
            if (this.chipset) this.chipset.stop();
            let controlRun = this.bindings["run"];
            if (controlRun) controlRun.textContent = "Run";
        }
        this.flags.complete = fComplete;
    }

    /**
     * updateCPU(fForce)
     *
     * This used to be performed at the end of every stepCPU(), but runCPU() -- which relies upon
     * stepCPU() -- needed to have more control over when these updates are performed.  However, for
     * other callers of stepCPU(), such as the Debugger, the combination of stepCPU() + updateCPU()
     * provides the old behavior.
     *
     * @this {CPUx80}
     * @param {boolean} [fForce] (true to force a video update; used by the Debugger)
     */
    updateCPU(fForce)
    {
        if (this.cmp) {
            this.cmp.updateVideo(fForce);
            this.cmp.updateStatus(fForce);
        }
    }

    /**
     * yieldCPU()
     *
     * Similar to stopCPU() with regard to how it resets various cycle countdown values, but the CPU
     * remains in a "running" state.
     *
     * @this {CPUx80}
     */
    yieldCPU()
    {
        this.endBurst();                    // this will break us out of stepCPU()
        this.nCyclesNextYield = 0;          // this will break us out of runCPU(), once we break out of stepCPU()
        // if (DEBUG) this.nSnapCycles = this.nBurstCycles;
        /*
         * The Debugger calls yieldCPU() after every message() to ensure browser responsiveness, but it looks
         * odd for those messages to show CPU state changes but for the CPU's own status display to not (ditto
         * for the Video display), so I've added this call to try to keep things looking synchronized.
         */
        this.updateCPU();
    }
}

/*
 * Constants that control the frequency at which various updates should occur.
 *
 * These values do NOT control the simulation directly.  Instead, they are used by
 * calcCycles(), which uses the nCyclesPerSecond passed to the constructor as a starting
 * point and computes the following variables:
 *
 *      this.nCyclesPerYield:    (this.nCyclesPerSecond / CPUx80.YIELDS_PER_SECOND)
 *
 * The above variables are also multiplied by any cycle multiplier in effect, via setSpeed(),
 * and then they're used to initialize another set of variables for each runCPU() iteration:
 *
 *      this.nCyclesNextYield:   this.nCyclesPerYield
 */
CPUx80.YIELDS_PER_SECOND       = 30;           // just a gut feeling for the MINIMUM number of yields per second
CPUx80.YIELDS_PER_STATUS       = 15;           // every 15 yields (ie, twice per second), perform CPU status updates

CPUx80.BUTTONS = ["power", "reset"];
