/**
 * @fileoverview Controls the PDP-11 CPU component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import MESSAGE from "./message.js";
import Component from "../../../../modules/v2/component.js";
import StrLib from "../../../../modules/v2/strlib.js";
import { DEBUG, DEBUGGER, MAXDEBUG } from "./defines.js";

/**
 * @class CPUPDP11
 * @unrestricted
 */
export default class CPUPDP11 extends Component {
    /**
     * CPUPDP11(parmsCPU, nCyclesDefault)
     *
     * The CPUPDP11 class supports the following (parmsCPU) properties:
     *
     *      cycles: the machine's base cycles per second; the CPUStatePDP11 constructor
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
     * It is extended by the CPUStatePDP11 component, where the simulation control logic resides.
     *
     * @param {Object} parmsCPU
     * @param {number} nCyclesDefault
     */
    constructor(parmsCPU, nCyclesDefault)
    {
        super("CPU", parmsCPU, MESSAGE.CPU);

        var nCycles = +parmsCPU['cycles'] || nCyclesDefault;

        var nMultiplier = +parmsCPU['multiplier'] || 1;

        this.nDisplayCount = 0;
        this.nDisplayLimit = 30;
        this.nCyclesPerSecond = nCycles;

        /*
         * nCyclesMultiplier replaces the old "speed" variable (0, 1, 2) and eliminates the need for
         * the constants (SPEED_SLOW, SPEED_FAST and SPEED_MAX).  The UI simply doubles the multiplier
         * until we've exceeded the host's speed limit and then starts the multiplier over at 1.
         */
        this.nCyclesMultiplier = nMultiplier;
        this.mhzDefault = Math.round(this.nCyclesPerSecond / 10000) / 100;
        this.mhzTarget = this.mhzDefault * this.nCyclesMultiplier;
        this.msPerYield = this.nCyclesPerYield = this.nCyclesNextYield = this.nCyclesRecalc = 0;

        /*
         * We add a number of flags to the set initialized by Component
         */
        this.flags.running = this.flags.starting = false;
        this.flags.autoStart = parmsCPU['autoStart'];
        if (typeof this.flags.autoStart == "string") this.flags.autoStart = (this.flags.autoStart == "true");

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
        this.nCyclesChecksumStart = +parmsCPU["csStart"];
        this.nCyclesChecksumInterval = +parmsCPU["csInterval"];
        this.nCyclesChecksumStop = +parmsCPU["csStop"];

        /*
         * Array of countdown timers managed by addTimer() and setTimer().
         */
        this.aTimers = [];

        this.onRunTimeout = this.runCPU.bind(this); // function onRunTimeout() { cpu.runCPU(); };

        /*
         * Define the rest of the properties used by the class
         */
        this.mhz = 0;
        this.nYieldsSinceStatusUpdate = 0;
        this.msStartRun = this.msStartThisRun = this.msEndThisRun = this.nCyclesThisRun = 0;
        this.nTotalCycles = this.nRunCycles = this.nBurstCycles = this.nStepCycles = this.nSnapCycles = 0;
        this.panel = null;

        this.setReady();
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {CPUPDP11}
     * @param {ComputerPDP11} cmp
     * @param {BusPDP11} bus
     * @param {CPUPDP11} cpu
     * @param {DebuggerPDP11} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.cmp = cmp;
        this.bus = bus;
        this.dbg = dbg;
        this.panel = cmp.panel;
        for (var i = 0; i < CPUPDP11.BUTTONS.length; i++) {
            var control = this.bindings[CPUPDP11.BUTTONS[i]];
            if (control) this.cmp.setBinding("", CPUPDP11.BUTTONS[i], control);
        }
        this.setReady();
    }

    /**
     * reset()
     *
     * Stub for reset notification (overridden by the CPUStatePDP11 component).
     *
     * @this {CPUPDP11}
     */
    reset()
    {
    }

    /**
     * save()
     *
     * Stub for save support (overridden by the CPUStatePDP11 component).
     *
     * @this {CPUPDP11}
     * @returns {Object|null}
     */
    save()
    {
        return null;
    }

    /**
     * restore(data)
     *
     * Stub for restore support (overridden by the CPUStatePDP11 component).
     *
     * @this {CPUPDP11}
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
     * @this {CPUPDP11}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        /*
         * We've already saved the parmsCPU 'autoStart' setting, but there may be a machine (or URL) override.
         */
        var sAutoStart = this.cmp.getMachineParm('autoStart');
        if (sAutoStart != null) {
            this.flags.autoStart = (sAutoStart == "true"? true : (sAutoStart  == "false"? false : !!sAutoStart));
        }
        else if (this.flags.autoStart == null) {
            /*
             * If there's no explicit parmsCPU setting either, then we will autoStart if there's no Debugger and
             * no "Run" button.
             */
            this.flags.autoStart = ((!DEBUGGER || !this.dbg) && this.bindings["run"] === undefined);
        }

        if (!fRepower) {
            if (!data) {
                this.reset();
            } else {
                this.resetCycles();
                if (!this.restore(data)) return false;
                this.resetChecksum();
            }
            /*
             * Give the Debugger a chance to do/print something once we've powered up.
             */
            if (DEBUGGER && this.dbg) {
                this.dbg.init(this.flags.autoStart);
            } else {
                this.printf(MESSAGE.STATUS, "No debugger detected\n");
            }
            if (!this.flags.autoStart) {
                this.printf("CPU will not be auto-started %s\n", (this.panel? "(click Run to start)" : "(type 'go' to start)"));
            }
        }
        /*
         * The Computer component (which is responsible for all powerDown and powerUp notifications)
         * is now responsible for managing a component's fPowered flag, not us.
         *
         *      this.flags.powered = true;
         */
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {CPUPDP11}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
     */
    powerDown(fSave, fShutdown)
    {
        return fSave? this.save() : true;
    }

    /**
     * autoStart()
     *
     * @this {CPUPDP11}
     * @returns {boolean} true if started, false if not
     */
    autoStart()
    {
        if (this.flags.running) {
            return true;
        }
        if (this.flags.autoStart) {
            /*
             * We used to also set fUpdateFocus when calling startCPU(), on the assumption that in the "auto-starting"
             * context, a machine without focus is like a day without sunshine, but in reality, focus should only be
             * forced when the user takes some other machine-related action.
             */
            return this.startCPU();
        }
        return false;
    }

    /**
     * isPowered()
     *
     * @this {CPUPDP11}
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
     * @this {CPUPDP11}
     * @returns {boolean}
     */
    isRunning()
    {
        return this.flags.running;
    }

    /**
     * getChecksum()
     *
     * This will be implemented by the CPUStatePDP11 component.
     *
     * @this {CPUPDP11}
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
     * @this {CPUPDP11}
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
     * @this {CPUPDP11}
     * @param {number} nCycles
     */
    updateChecksum(nCycles)
    {
        if (this.flags.checksum) {
            /*
             * Get a 32-bit summation of the current CPU state and add it to our running 32-bit checksum
             */
            var fDisplay = false;
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
     * @this {CPUPDP11}
     */
    displayChecksum()
    {
        this.printf("%d cycles: checksum=%x\n", this.getCycles(), this.nChecksum);
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * @this {CPUPDP11}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "textarea", "register", "flag", "rled", etc)
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "run")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        var cpu = this;

        switch (sBinding) {
        case "power":
        case "reset":
            /*
             * The "power" and "reset" buttons are functions of the entire computer, not just the CPU,
             * but it's not always convenient to stick a power button in the Computer component definition,
             * so we record those bindings here and pass them on to the Computer component in initBus().
             */
            this.bindings[sBinding] = control;
            return true;

        case "run":
            this.bindings[sBinding] = control;
            control.onclick = function onClickRun() {
                if (!cpu.cmp || !cpu.cmp.checkPower()) return;
                /*
                 * We no longer pass true to these startCPU()/stopCPU() calls, on the theory that if the "run"
                 * control is visible, then the computer is probably sufficiently visible as well; the problem
                 * with setting fUpdateFocus to true is that it can jerk the web page around in annoying ways.
                 */
                if (!cpu.flags.running) {
                    cpu.startCPU();
                } else {
                    cpu.stopCPU();
                }
            };
            return true;

        case "speed":
            this.bindings[sBinding] = control;
            return true;

        case "setSpeed":
            this.bindings[sBinding] = control;
            control.onclick = function onClickSetSpeed() {
                cpu.setSpeed(cpu.nCyclesMultiplier << 1, true);
            };
            control.textContent = this.getSpeedTarget();
            return true;

        default:
            break;
        }
        return false;
    }

    /**
     * updateDisplays(nUpdate)
     *
     * Simpler wrapper around the Computer's updateDisplays() method.
     *
     * @this {CPUPDP11}
     * @param {number} [nUpdate] (1 for periodic, -1 for forced, 0 or undefined otherwise)
     */
    updateDisplays(nUpdate)
    {
        if (this.cmp) this.cmp.updateDisplays(nUpdate);
    }

    /**
     * updateDisplay(nUpdate)
     *
     * Some of the CPU bindings provide feedback and therefore need to be updated periodically.
     * However, this should be called via the Computer's updateDisplays() interface, not directly.
     *
     * @this {CPUPDP11}
     * @param {number} [nUpdate] (1 for periodic, -1 for forced, 0 otherwise)
     */
    updateDisplay(nUpdate)
    {
        var controlSpeed = this.bindings["speed"];
        if (controlSpeed) {
            if (nUpdate <= 0 || (this.nDisplayCount += nUpdate) >= this.nDisplayLimit) {
                controlSpeed.textContent = this.getSpeedCurrent();
                this.nDisplayCount = 0;
            }
        }
    }

    /**
     * addCycles(nCycles, fEndStep)
     *
     * @this {CPUPDP11}
     * @param {number} nCycles
     * @param {boolean} [fEndStep]
     */
    addCycles(nCycles, fEndStep)
    {
        this.nTotalCycles += nCycles;
        if (fEndStep) {
            this.nBurstCycles = this.nStepCycles = this.nSnapCycles = 0;
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
     * @this {CPUPDP11}
     * @param {boolean} [fRecalc] is true if the caller wants to recalculate thresholds based on the most recent
     * speed calculation (see calcSpeed).
     */
    calcCycles(fRecalc)
    {
        /*
         * Calculate "per" yield values.
         */
        var vMultiplier = 1;
        if (fRecalc) {
            if (this.nCyclesMultiplier > 1 && this.mhz) {
                vMultiplier = (this.mhz / this.mhzDefault);
            }
        }

        this.msPerYield = Math.round(1000 / CPUPDP11.YIELDS_PER_SECOND);
        this.nCyclesPerYield = Math.floor(this.nCyclesPerSecond / CPUPDP11.YIELDS_PER_SECOND * vMultiplier);

        /*
         * And initialize "next" yield values to the "per" values.
         */
        if (!fRecalc) this.nCyclesNextYield = this.nCyclesPerYield;
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
     * @this {CPUPDP11}
     * @param {boolean} [fScaled] is true if the caller wants a cycle count relative to a multiplier of 1
     * @returns {number}
     */
    getCycles(fScaled)
    {
        var nCycles = this.nTotalCycles + this.nRunCycles + this.nBurstCycles - this.nStepCycles;
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
     * @this {CPUPDP11}
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
     * @this {CPUPDP11}
     */
    resetCycles()
    {
        this.mhz = 0;
        this.nYieldsSinceStatusUpdate = 0;
        this.nTotalCycles = this.nRunCycles = this.nBurstCycles = this.nStepCycles = this.nSnapCycles = 0;
        this.resetChecksum();
        this.setSpeed(1);
    }

    /**
     * getSpeed()
     *
     * @this {CPUPDP11}
     * @returns {number} the current speed multiplier
     */
    getSpeed()
    {
        return this.nCyclesMultiplier;
    }

    /**
     * getSpeedCurrent()
     *
     * @this {CPUPDP11}
     * @returns {string} the current speed, in mhz, as a string formatted to two decimal places
     */
    getSpeedCurrent()
    {
        /*
         * TODO: Has toFixed() been "fixed" in all browsers (eg, IE) to return a rounded value now?
         */
        return ((this.flags.running)? (this.mhz.toFixed(2) + "Mhz") : "Stopped");
    }

    /**
     * getSpeedTarget()
     *
     * @this {CPUPDP11}
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
     * @this {CPUPDP11}
     * @param {number} [nMultiplier] is the new proposed multiplier (reverts to 1 if the target was too high)
     * @param {boolean} [fUpdateFocus] is true to update Computer focus
     * @returns {boolean} true if successful, false if not
     */
    setSpeed(nMultiplier, fUpdateFocus)
    {
        var fSuccess = false;
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
            var mhz = this.mhzDefault * this.nCyclesMultiplier;
            if (this.mhzTarget != mhz) {
                this.mhzTarget = mhz;
                var sSpeed = this.getSpeedTarget();
                var controlSpeed = this.bindings["setSpeed"];
                if (controlSpeed) controlSpeed.textContent = sSpeed;
                this.printf("target speed: %s\n", sSpeed);
            }
            if (fUpdateFocus && this.cmp) this.cmp.setFocus();
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
     * @this {CPUPDP11}
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
     * @this {CPUPDP11}
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
            var msDelta = this.msStartThisRun - this.msEndThisRun;
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
     * @this {CPUPDP11}
     * @returns {number}
     */
    calcRemainingTime()
    {
        this.msEndThisRun = Component.getTime();

        var msYield = this.msPerYield;
        if (this.nCyclesThisRun) {
            /*
             * Normally, we would assume we executed a full quota of work over msPerYield, but since the CPU
             * now has the option of calling yieldCPU(), that might not be true.  If nCyclesThisRun is correct, then
             * the ratio of nCyclesThisRun/nCyclesPerYield should represent the percentage of work we performed,
             * and so applying that percentage to msPerYield should give us a better estimate of work vs. time.
             */
            msYield = Math.round(msYield * this.nCyclesThisRun / this.nCyclesPerYield);
        }

        var msElapsedThisRun = this.msEndThisRun - this.msStartThisRun;
        var msRemainsThisRun = msYield - msElapsedThisRun;

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
        var nCycles = this.nRunCycles;
        var msElapsed = this.msEndThisRun - this.msStartRun;

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

        if (DEBUG && msRemainsThisRun) {
            this.printf(MESSAGE.LOG + MESSAGE.BUFFER, "calcRemainingTime: %dms to sleep after %dms\n", msRemainsThisRun, this.msEndThisRun);
        }

        this.msEndThisRun += msRemainsThisRun;
        return msRemainsThisRun;
    }

    /**
     * addTimer(callBack)
     *
     * Components that want to have timers that periodically fire after some number of milliseconds call
     * addTimer() to create the timer, and then setTimer() every time they want to arm it.  There is currently
     * no removeTimer() because these are generally used for the entire lifetime of a component.
     *
     * Internally, each timer entry is a preallocated Array with two entries: a cycle countdown in element [0]
     * and a callback function in element [1].  A timer is initially dormant; dormant timers have a countdown
     * value of -1 (although any negative number will suffice) and active timers have a non-negative value.
     *
     * Why not use JavaScript's setTimeout() instead?  Good question.  For a good answer, see setTimer() below.
     *
     * TODO: Consider making the addTimer() and setTimer() interfaces more like the addIRQ() and setIRQ()
     * interfaces (which return the underlying object instead of an array index) and maintaining a separate list
     * of active timers, in order of highest to lowest cycle countdown values, as this could speed up
     * getBurstCycles() and updateTimers() functions ever so slightly.
     *
     * @this {CPUPDP11}
     * @param {function()} callBack
     * @returns {number} timer index
     */
    addTimer(callBack)
    {
        var iTimer = this.aTimers.length;
        this.aTimers.push([-1, callBack]);
        return iTimer;
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
     * that may not be the case.
     *
     * @this {CPUPDP11}
     * @param {number} iTimer
     * @param {number} ms (converted into a cycle countdown internally)
     * @param {boolean} [fReset] (true if the timer should be reset even if already armed)
     * @returns {number} (number of cycles used to arm timer, or -1 if error)
     */
    setTimer(iTimer, ms, fReset)
    {
        var nCycles = -1;
        if (iTimer >= 0 && iTimer < this.aTimers.length) {
            if (fReset || this.aTimers[iTimer][0] < 0) {
                nCycles = this.getMSCycles(ms);
                /*
                 * We must now confront the following problem: if the CPU is currently executing a burst of cycles,
                 * the number of cycles it has executed in that burst so far must NOT be charged against the cycle
                 * timeout we're about to set.  The simplest way to resolve that is to immediately call endBurst()
                 * and bias the cycle timeout by the number of cycles that the burst executed.
                 */
                if (this.flags.running) {
                    nCycles += this.endBurst();
                }
                this.aTimers[iTimer][0] = nCycles;
            }
        }
        return nCycles;
    }

    /**
     * getMSCycles(ms)
     *
     * @this {CPUPDP11}
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
     * @this {CPUPDP11}
     * @param {number} nCycles (number of cycles about to execute)
     * @returns {number} (either nCycles or less if a timer needs to fire)
     */
    getBurstCycles(nCycles)
    {
        for (var i = this.aTimers.length - 1; i >= 0; i--) {
            var timer = this.aTimers[i];
            this.assert(!isNaN(timer[0]));
            if (timer[0] < 0) continue;
            if (nCycles > timer[0]) {
                nCycles = timer[0];
            }
        }
        return nCycles;
    }

    /**
     * saveTimers()
     *
     * @this {CPUPDP11}
     * @returns {Array.<number>}
     */
    saveTimers()
    {
        var aTimerCycles = [];
        for (var i = 0; i < this.aTimers.length; i++) {
            var timer = this.aTimers[i];
            aTimerCycles.push(timer[0]);
        }
        return aTimerCycles;
    }

    /**
     * restoreTimers(aTimerCycles)
     *
     * @this {CPUPDP11}
     * @param {Array.<number>} aTimerCycles
     */
    restoreTimers(aTimerCycles)
    {
        this.assert(aTimerCycles.length === this.aTimers.length);
        for (var i = 0; i < this.aTimers.length && i < aTimerCycles.length; i++) {
            var timer = this.aTimers[i];
            timer[0] = aTimerCycles[i];
        }
    }

    /**
     * updateTimers(nCycles)
     *
     * Used by runCPU() to reduce all active timer countdown values by the number of cycles just executed;
     * this is the function that actually "fires" any timer(s) whose countdown has reached (or dropped below)
     * zero, invoking their callback function.
     *
     * @this {CPUPDP11}
     * @param {number} nCycles (number of cycles actually executed)
     */
    updateTimers(nCycles)
    {
        for (var i = this.aTimers.length - 1; i >= 0; i--) {
            var timer = this.aTimers[i];
            this.assert(!isNaN(timer[0]));
            if (timer[0] < 0) continue;
            timer[0] -= nCycles;
            if (timer[0] <= 0) {
                timer[0] = -1;      // zero is technically an "active" value, so ensure the timer is dormant now
                timer[1]();         // safe to invoke the callback function now
            }
        }
    }

    /**
     * endBurst(fReset)
     *
     * @this {CPUPDP11}
     * @param {boolean} [fReset]
     * @returns {number} (number of cycles executed in the most recent burst)
     */
    endBurst(fReset)
    {
        var nCycles = this.nBurstCycles -= this.nStepCycles;
        /*
         * In addition to zeroing nStepCycles, it's important that we also zero nSnapCycles, because if a CPU
         * burst is being ended after nStepCycles has been "snapped" (because a certain opcode has an unusual timing
         * calculation that must be based on a "snapped" cycle count rather the opcode's starting cycle count), we
         * could inadvertently undo the endBurst() if the original "snapped" value was used to update nStepCycles.
         */
        this.nStepCycles = this.nSnapCycles = 0;
        if (fReset) this.nBurstCycles = 0;
        return nCycles;
    }

    /**
     * runCPU()
     *
     * @this {CPUPDP11}
     */
    runCPU()
    {
        if (!this.flags.running) return;

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
                var nCycles = this.getBurstCycles(this.flags.checksum? 1 : this.nCyclesPerYield);

                /*
                 * Execute the burst.
                 */
                try {
                    this.stepCPU(nCycles);
                }
                catch(exception) {
                    /*
                     * We assume that any numeric exception was explicitly thrown by the CPU to interrupt the
                     * current instruction (and by extension, the current burst, but not the current run).  All
                     * other exceptions are re-thrown to the catch below, which will attempt a stack dump.
                     */
                    if (typeof exception != "number") throw exception;
                }

                /*
                 * Terminate the burst, returning the number of cycles that stepCPU() actually ran.
                 */
                nCycles = this.endBurst(true);

                /*
                 * Add nCycles to nCyclesThisRun, as well as nRunCycles (the cycle count since the CPU started).
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
                    if (++this.nYieldsSinceStatusUpdate >= CPUPDP11.YIELDS_PER_STATUS) {
                        this.updateDisplays();
                        this.nYieldsSinceStatusUpdate = 0;
                    }
                    break;
                }
            } while (this.flags.running);
        }
        catch (e) {
            this.stopCPU();
            if (this.cmp) this.cmp.stop(Component.getTime(), this.getCycles());
            this.setError(e.stack || e.message);
            return;
        }

        if (this.flags.running) setTimeout(this.onRunTimeout, this.calcRemainingTime());
    }

    /**
     * startCPU(fUpdateFocus)
     *
     * For use by any component that wants to start the CPU.
     *
     * @param {boolean} [fUpdateFocus]
     * @returns {boolean}
     */
    startCPU(fUpdateFocus)
    {
        if (this.isError()) {
            return false;
        }
        if (this.flags.running) {
            this.printf("%s busy\n", this.toString());
            return false;
        }
        /*
         * setSpeed() without a speed parameter leaves the selected speed in place, but also resets the
         * cycle counter and timestamp for the current series of runCPU() calls, calculates the maximum number
         * of cycles for each burst based on the last known effective CPU speed, and resets the nCyclesRecalc
         * threshold counter.
         */
        this.setSpeed();
        this.flags.running = true;
        this.flags.starting = true;
        var controlRun = this.bindings["run"];
        if (controlRun) controlRun.textContent = "Halt";
        if (this.cmp) {
            if (fUpdateFocus) this.cmp.setFocus(true);
            this.cmp.start(this.msStartRun, this.getCycles());
        }
        if (!this.dbg) this.printf(MESSAGE.STATUS, "Started\n");
        setTimeout(this.onRunTimeout, 0);
        return true;
    }

    /**
     * stepCPU(nMinCycles)
     *
     * This will be implemented by the CPUStatePDP11 component.
     *
     * @this {CPUPDP11}
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
     * @this {CPUPDP11}
     * @param {boolean} [fComplete]
     * @returns {boolean} true if the CPU was stopped, false if it was already stopped
     */
    stopCPU(fComplete)
    {
        var fStopped = false;
        if (this.flags.running) {
            this.endBurst();
            this.addCycles(this.nRunCycles);
            this.nRunCycles = 0;
            this.flags.running = false;
            var controlRun = this.bindings["run"];
            if (controlRun) controlRun.textContent = "Run";
            if (this.cmp) {
                this.cmp.stop(Component.getTime(), this.getCycles());
            }
            fStopped = true;
            if (!this.dbg) this.printf(MESSAGE.STATUS, "Stopped\n");
        }
        this.flags.complete = fComplete;
        return fStopped;
    }

    /**
     * yieldCPU()
     *
     * Similar to stopCPU() with regard to how it resets various cycle countdown values, but the CPU
     * remains in a "running" state.
     *
     * @this {CPUPDP11}
     */
    yieldCPU()
    {
        this.endBurst();                    // this will break us out of stepCPU()
        this.nCyclesNextYield = 0;          // this will break us out of runCPU(), once we break out of stepCPU()
        /*
         * The Debugger calls yieldCPU() after every message() to ensure browser responsiveness, but it looks
         * odd for those messages to show CPU state changes if the Control Panel, Video display, etc, does not,
         * so I've added this call to try to keep things looking synchronized.
         */
        this.updateDisplays();
    }
}

/*
 * Constants that control the frequency at which various updates should occur.
 *
 * These values do NOT control the simulation directly.  Instead, they are used by
 * calcCycles(), which uses the nCyclesPerSecond passed to the constructor as a starting
 * point and computes the following variables:
 *
 *      this.nCyclesPerYield:    (this.nCyclesPerSecond / CPUPDP11.YIELDS_PER_SECOND)
 *
 * The above variables are also multiplied by any cycle multiplier in effect, via setSpeed(),
 * and then they're used to initialize another set of variables for each runCPU() iteration:
 *
 *      this.nCyclesNextYield:   this.nCyclesPerYield
 */
CPUPDP11.YIELDS_PER_SECOND      = 30;           // just a gut feeling for the MINIMUM number of yields per second
CPUPDP11.YIELDS_PER_STATUS      = 15;           // every 15 yields (ie, twice per second), perform CPU status updates

CPUPDP11.BUTTONS = ["power", "reset"];
