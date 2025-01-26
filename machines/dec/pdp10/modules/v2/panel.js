/**
 * @fileoverview Implements the PDP-10 Panel component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import BusPDP10 from "./bus.js";
import MESSAGE from "./message.js";
import Component from "../../../../modules/v2/component.js";
import State from "../../../../modules/v2/state.js";
import StrLib from "../../../../modules/v2/strlib.js";
import WebLib from "../../../../modules/v2/weblib.js";
import { APPCLASS, DEBUG, DEBUGGER, PDP10 } from "./defines.js";

/**
 * Since the Closure Compiler treats ES6 classes as @struct rather than @dict by default,
 * it deters us from defining named properties on our components; eg:
 *
 *      this['exports'] = {...}
 *
 * results in an error:
 *
 *      Cannot do '[]' access on a struct
 *
 * So, in order to define 'exports', we must override the @struct assumption by annotating
 * the class as @unrestricted (or @dict).  Note that this must be done both here and in the
 * Component class, because otherwise the Compiler won't allow us to *reference* the named
 * property either.
 *
 * TODO: Consider marking ALL our classes unrestricted, because otherwise it forces us to
 * define every single property the class uses in its constructor, which results in a fair
 * bit of redundant initialization, since many properties aren't (and don't need to be) fully
 * initialized until the appropriate init(), reset(), restore(), etc. function is called.
 *
 * The upside, however, may be that since the structure of the class is completely defined by
 * the constructor, JavaScript engines may be able to optimize and run more efficiently.
 *
 * @class PanelPDP10
 * @unrestricted
 */
export default class PanelPDP10 extends Component {
    /**
     * PanelPDP10(parmsPanel)
     *
     * The PanelPDP10 component has no required (parmsPanel) properties.
     *
     * @param {Object} parmsPanel
     * @param {boolean} fBindings (true if panel may have bindings, otherwise not)
     */
    constructor(parmsPanel, fBindings)
    {
        super("Panel", parmsPanel, MESSAGE.PANEL);

        /*
         * If there are any live registers, LEDs, etc, to display, this will provide a count.
         * TODO: Add some UI for fDisplayLiveRegs (either an XML property, or a UI checkbox, or both).
         */
        this.cLiveRegs = 0;
        this.nDisplayCount = 0;
        this.nDisplayLimit = 60;
        this.fDisplayLiveRegs = true;
        this.fBindings = fBindings;

        /*
         * regSwitches contains the Front Panel (aka Console) SWITCH register, which is also available
         * as a read-only register at 177570 (but only the low 16 bits).  regDisplay contains the DISPLAY
         * register, a write-only register at the same address.
         *
         * regAddr is an internal register containing the contents of the Front Panel's ADDRESS display,
         * and regData corresponds to the DATA display.  They are updated by updateAddr() and updateData(),
         * which in turn take care of calling updateLEDArray().
         *
         * The state of ALL switches is maintained in this.switches, and likewise all LED states are
         * maintained in this.leds, but for convenience, we also mirror some of those states in dedicated
         * variables (eg, regSwitches for the SWITCH register, fLEDTest for the 'TEST' switch, etc).
         */
        this.regDisplay = 0;
        this.regSwitches = 0;
        this.regAddr = this.regData = 0;
        this.ledAddr = this.ledData = -1;

        /*
         * The panel hardware has the following additional (supported) state; note that there are several
         * settings on a real Front Panel that we don't support (eg, stepping one cycle vs. one instruction).
         *
         * While my initial intent is to eventually support all the ADDRSEL switch settings, I probably
         * won't bother with any DATASEL switch settings; instead, I will automatically display the DISPLAY
         * register (regDisplay) [the equivalent of selecting 'DISPLAY REGISTER'] except when data is being
         * examined or deposited [the equivalent of selecting 'DATA PATHS'].
         */
        this.fLEDTest = false;              // LED (lamp) test in progress
        this.fExamine = false;              // true if the previously pressed switch was the 'EXAM' switch
        this.fDeposit = false;              // true if the previously pressed switch was the 'DEP' switch
        this.nAddrSel = PanelPDP10.ADDRSEL.CONS_PHY;

        /*
         * Every LED has a simple numeric value, assigned when setBinding() is called:
         *
         *      zero if "off", non-zero if "on"
         *
         * initBus() will call displayLEDs() to ensure that every LED is set to its initial value.
         */
        this.leds = {};

        /*
         * Every switch has an array associated with it:
         *
         *      [0]: initial value of switch (0 if "down", 1 if "up")
         *      [1]: current value of switch
         *      [2]: true if the switch is momentary, false if not
         *      [3]: true if the switch is currently pressed, false if released
         *      [4]: optional handler to call whenever the switch is pressed or released
         *      [5]: optional switch index (used with CNSW switches 'S0' through 'S21')
         *
         * initBus() will call displaySwitches() to ensure that every switch is the position represented below.
         *
         * NOTE: Not all switches have the same "process" criteria.  For example, 'TEST' will perform a LED test
         * when it is momentarily pressed "up", whereas 'LOAD [ADRS]' will load the ADDRESS register from the
         * SWITCH register when it is momentarily pressed "down".
         *
         * This means that processLEDTest(value) must act when value == 1 ("up"), whereas processLoadAddr(value)
         * must act when value == 0 ("down").  You can infer all this from the table below, because the initial value
         * of any momentary switch is its "inactive" value, so the opposite is its "active" value.
         */
        this.switches = {
            'START':    [1, 1, true,  false, this.processStart],
            'STEP':     [1, 1, false, false, this.processStep],
            'ENABLE':   [1, 1, false, false, this.processEnable],
            'CONT':     [1, 1, true,  false, this.processContinue],
            'DEP':      [0, 0, true,  false, this.processDeposit],
            'EXAM':     [1, 1, true,  false, this.processExamine],
            'LOAD':     [1, 1, true,  false, this.processLoadAddr],
            'TEST':     [0, 0, true,  false, this.processLEDTest]
        };
        for (var i = 0; i < 22; i++) {
            this.switches['S'+i] = [0, 0, false, false, this.processSRSwitch, i];
        }

        /** @type {ComputerPDP10} */
        this.cmp = null;

        /** @type {BusPDP10} */
        this.bus = null;

        /** @type {CPUStatePDP10} */
        this.cpu = null;

        /** @type {DebuggerPDP10} */
        this.dbg = null;

        /*
         * The 'hold' and 'toggle' exports, which map to holdSwitch() and toggleSwitch(), both press and release
         * the specified switch, but processCommands() considers a 'hold' function to be asynchronous, which means
         * that holdSwitch() will be passed a callback function that can be used to implement a delay between the
         * press and the release, whereas toggleSwitch() will not.
         *
         * holdSwitch() only makes sense for momentary switches (eg, 'TEST'), where a visual delay might be nice.
         * If the switch isn't momentary, or no delay is desired, then use toggleSwitch(); it will be more efficient.
         *
         * Finally, for switches that are toggles (eg, 'ENABLE'), you can use setSwitch() to set it to a specific
         * state: zero for "off" and non-zero for "on".  setSwitch() also supports meta-switches like "SR", using
         * the entire value to set a series of switches at once; the value is assumed to be octal unless overridden
         * by a prefix (eg, "0x") or suffix (eg, ".").
         */
        this['exports'] = {
            'hold': this.holdSwitch,
            'toggle': this.toggleSwitch,
            'reset': this.resetSwitches,
            'set': this.setSwitch
        };

        this.setReady();
    }

    /**
     * getAR()
     *
     * @this {PanelPDP10}
     * @returns {number} (current ADDRESS register)
     */
    getAR()
    {
        return this.regAddr;
    }

    /**
     * setAR(value)
     *
     * @this {PanelPDP10}
     * @param {number} value (new ADDRESS register)
     */
    setAR(value)
    {
        this.updateAddr(this.regAddr = value);
    }

    /**
     * getDR()
     *
     * @this {PanelPDP10}
     * @returns {number} (current DISPLAY register)
     */
    getDR()
    {
        return this.regDisplay;
    }

    /**
     * setDR(value)
     *
     * @this {PanelPDP10}
     * @param {number} value (new DISPLAY register)
     * @returns {number}
     */
    setDR(value)
    {
        return this.updateData(this.regDisplay = value);
    }

    /**
     * getSR()
     *
     * @this {PanelPDP10}
     * @returns {number} (current SWITCH register)
     */
    getSR()
    {
        return this.regSwitches;
    }

    /**
     * setSR(value)
     *
     * @this {PanelPDP10}
     * @param {number} value (new SWITCH register)
     */
    setSR(value)
    {
        this.setSRSwitches(value);
    }

    /**
     * getSwitch(name)
     *
     * @this {PanelPDP10}
     * @param {string} name
     * @returns {number|undefined} 0 if switch is off ("down"), 1 if on ("up"), or undefined if unrecognized
     */
    getSwitch(name)
    {
        return this.switches[name] && this.switches[name][1];
    }

    /**
     * reset(fPowerUp)
     *
     * NOTE: Since we've registered our handler with the Bus component, we will be called twice whenever
     * the entire machine is reset: once when the Computer's reset() handler calls the Bus's reset() handler,
     * and again when the Computer's reset() handler calls us directly.  Multiple resets should be harmless.
     *
     * @this {PanelPDP10}
     * @param {boolean} [fPowerUp]
     */
    reset(fPowerUp)
    {
        /*
         * Simulate a call to our stop() handler, to update the panel's ADDRESS register with the current PC.
         */
        this.stop();
        if (fPowerUp) this.setDR(0);
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * Some panel layouts don't have bindings of their own, and even when they do, there may still be some
     * components (eg, the CPU) that prefer to update their own bindings, so we pass along all binding requests
     * to the Computer, CPU, Keyboard and Debugger components first.  The order shouldn't matter, since any
     * component that doesn't recognize the specified binding should simply ignore it.
     *
     * @this {PanelPDP10}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "textarea", "register", "flag", "rled", etc)
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "reset")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        if (this.cmp && this.cmp.setBinding(sHTMLType, sBinding, control, sValue)) return true;
        if (this.cpu && this.cpu.setBinding(sHTMLType, sBinding, control, sValue)) return true;
        if (DEBUGGER && this.dbg && this.dbg.setBinding(sHTMLType, sBinding, control, sValue)) return true;

        switch (sBinding) {
        case 'PC':
            this.bindings[sBinding] = control;
            this.cLiveRegs++;
            return true;

        default:
            /*
             * Square ("led") or round ("rled") LEDs are defined in machine XML files like so:
             *
             *      <control type="rled" binding="A3" value="1" width="100%" container="center"/>
             *
             * Only *type* and *binding* attributes are required; if *value* is omitted, the default value is 0 ("off").
             */
            if (sHTMLType == "led" || sHTMLType == "rled") {
                this.bindings[sBinding] = control;
                this.leds[sBinding] = sValue? 1 : 0;
                this.cLiveRegs++;
                return true;
            }
            /*
             * Switches are defined in machine XML files like so:
             *
             *      <control type="switch" binding="S3" value="1" width="100%" container="center"/>
             *
             * Only *type* and *binding* attributes are required; if *value* is omitted, the default value is 0 ("down").
             *
             * Currently, there is no XML attribute to indicate whether a switch is "momentary"; only recognized switches
             * in our internal table can have that attribute.
             */
            if (sHTMLType == "switch") {
                /*
                 * Like LEDs, we allow unrecognized switches to be defined as well, but they won't do anything useful,
                 * since only recognized switches will have handlers that perform the appropriate operations.
                 */
                if (this.switches[sBinding] === undefined) {
                    this.switches[sBinding] = [sValue? 1 : 0, sValue? 1 : 0];
                }
                this.bindings[sBinding] = control;
                var parent = control.parentElement || control;
                parent = parent.parentElement || parent;
                parent.onmousedown = function(panel, sBinding) {
                    return function onPressSwitch() {
                        panel.pressSwitch(sBinding);
                    };
                }(this, sBinding);
                parent.onmouseup = parent.onmouseout = function(panel, sBinding) {
                    return function onReleaseSwitch() {
                        panel.releaseSwitch(sBinding);
                    };
                }(this, sBinding);
                parent.ontouchstart = function(panel, sBinding) {
                    return function onPressSwitch(event) {
                        panel.pressSwitch(sBinding);
                        event.preventDefault();
                    };
                }(this, sBinding);
                parent.ontouchend = function(panel, sBinding) {
                    return function onReleaseSwitch() {
                        panel.releaseSwitch(sBinding);
                    };
                }(this, sBinding);
                return true;
            }
            return super.setBinding(sHTMLType, sBinding, control, sValue);
        }
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {PanelPDP10}
     * @param {ComputerPDP10} cmp
     * @param {BusPDP10} bus
     * @param {CPUStatePDP10} cpu
     * @param {DebuggerPDP10} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.cmp = cmp;
        this.bus = bus;
        this.cpu = cpu;
        this.dbg = dbg;

        this.displayLEDs();
        this.displaySwitches();
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {PanelPDP10}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) {
            /*
             * As noted in init(), our powerUp() method gives us a second opportunity to notify any
             * components that that might care (eg, CPU, Keyboard, and Debugger) that we have some controls
             * (ie, bindings) they might want to use.
             */
            if (this.fBindings) PanelPDP10.init();

            if (!data) {
                this.reset(true);
            } else {
                if (!this.restore(data)) return false;
            }
        }
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {PanelPDP10}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
     */
    powerDown(fSave, fShutdown)
    {
        return fSave? this.save() : true;
    }

    /**
     * save()
     *
     * This implements save support for the PanelPDP10 component.
     *
     * @this {PanelPDP10}
     * @returns {Object}
     */
    save()
    {
        var state = new State(this);
        state.set(0, [
            this.getAR(),
            this.getDR(),
            this.getSR()
        ]);
        return state.data();
    }

    /**
     * restore(data)
     *
     * This implements restore support for the PanelPDP10 component.
     *
     * @this {PanelPDP10}
     * @param {Object} data
     * @returns {boolean} true if successful, false if failure
     */
    restore(data)
    {
        var a = data[0];
        if (a) {
            this.setAR(a[0]);
            this.setDR(a[1]);
            this.setSR(a[2]);
        }
        return true;
    }

    /**
     * resetSwitches()
     *
     * @this {PanelPDP10}
     * @returns {boolean}
     */
    resetSwitches()
    {
        for (var sBinding in this.switches) {
            var sw = this.switches[sBinding];
            sw[1] = sw[0];
        }
        this.displaySwitches();
        return true;
    }

    /**
     * displayLED(sBinding, value)
     *
     * @this {PanelPDP10}
     * @param {string} sBinding
     * @param {boolean|number} value (true or non-zero if the LED should be on, false or zero if off)
     */
    displayLED(sBinding, value)
    {
        var control = this.bindings[sBinding];
        if (control) {
            /*
             * TODO: Add support for user-definable LED colors?
             */
            control.style.backgroundColor = (value? "#ff0000" : "#000000");
        }
    }

    /**
     * displayLEDs(override)
     *
     * @this {PanelPDP10}
     * @param {boolean|number|null} [override] (true turn on all LEDs, false to turn off all LEDs, null or undefined for normal LED activity)
     */
    displayLEDs(override)
    {
        for (var sBinding in this.leds) {
            this.displayLED(sBinding, override != null? override : this.leds[sBinding]);
        }
    }

    /**
     * displaySwitch(sBinding, value)
     *
     * @this {PanelPDP10}
     * @param {string} sBinding
     * @param {boolean|number} value (true if the switch should be "up" (on), false if "down" (off))
     */
    displaySwitch(sBinding, value)
    {
        var control = this.bindings[sBinding];
        if (control) {
            control.style.marginTop = (value? "0px" : "20px");
            control.style.backgroundColor = (value? "#00ff00" : "#228B22");
        }
    }

    /**
     * displaySwitches()
     *
     * @this {PanelPDP10}
     */
    displaySwitches()
    {
        for (var sBinding in this.switches) {
            this.displaySwitch(sBinding, this.switches[sBinding][1]);
        }
    }

    /**
     * displayValue(sLabel, nValue, cch)
     *
     * This is principally for displaying register values, but in reality, it can be used to display any
     * numeric value bound to the given label.
     *
     * @this {PanelPDP10}
     * @param {string} sLabel
     * @param {number} nValue
     * @param {number} [cch]
     */
    displayValue(sLabel, nValue, cch)
    {
        if (this.bindings[sLabel]) {
            var sVal;
            var nBase = this.dbg && this.dbg.nBase || 8;
            nValue = nValue || 0;
            if (!this.cpu.isRunning() || this.fDisplayLiveRegs) {
                sVal = nBase == 8? StrLib.toOct(nValue, cch) : StrLib.toHex(nValue, cch);
            } else {
                sVal = "--------".substr(0, cch || 4);
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
     * holdSwitch(fnCallback, sBinding, sDelay)
     *
     * @this {PanelPDP10}
     * @param {function()|null} fnCallback
     * @param {string} sBinding
     * @param {string} [sDelay]
     * @returns {boolean} false if wait required, true otherwise
     */
    holdSwitch(fnCallback, sBinding, sDelay)
    {
        if (this.pressSwitch(sBinding)) {
            if (sDelay) {
                var panel = this;
                setTimeout(function() {
                    panel.releaseSwitch(sBinding);
                    if (fnCallback) fnCallback();
                }, +sDelay);
                return false;
            } else {
                this.releaseSwitch(sBinding);
            }
        }
        return true;
    }

    /**
     * setSwitch(sBinding, sValue)
     *
     * @this {PanelPDP10}
     * @param {string} sBinding
     * @param {string} sValue
     * @returns {boolean}
     */
    setSwitch(sBinding, sValue)
    {
        if (sBinding == "SR") {
            return this.setSRSwitches(StrLib.parseInt(sValue, 8));
        }
        var sw = this.switches[sBinding];
        if (sw) {
            sw[1] = +sValue? 1 : 0;
            this.displaySwitch(sBinding, sw[1]);
            return true;
        }
        return false;
    }

    /**
     * toggleSwitch(sBinding)
     *
     * @this {PanelPDP10}
     * @param {string} sBinding
     * @returns {boolean}
     */
    toggleSwitch(sBinding)
    {
        if (this.pressSwitch(sBinding)) {
            this.releaseSwitch(sBinding);
            return true;
        }
        return false;
    }

    /**
     * pressSwitch(sBinding)
     *
     * @this {PanelPDP10}
     * @param {string} sBinding
     * @returns {boolean}
     */
    pressSwitch(sBinding)
    {
        var sw = this.switches[sBinding];
        if (sw) {
            /*
             * Set the new switch value in sw[1] and then immediately display it
             */
            this.displaySwitch(sBinding, (sw[1] = 1 - sw[1]));

            /*
             * Mark the switch as "pressed"
             */
            sw[3] = true;

            /*
             * Call the appropriate process handler with the current switch value (sw[1])
             */
            if (sw[4]) sw[4].call(this, sw[1], sw[5]);

            /*
             * This helps the next 'DEP' or 'EXAM' press determine if the previous press was the same,
             * while also ignoring any intervening 'STEP' presses (see processStep() for why we do that).
             */
            if (sBinding != PanelPDP10.SWITCH.STEP) {
                this.fDeposit = (sBinding == PanelPDP10.SWITCH.DEP);
                this.fExamine = (sBinding == PanelPDP10.SWITCH.EXAM);
            }
            return true;
        }
        return false;
    }

    /**
     * releaseSwitch(sBinding)
     *
     * @this {PanelPDP10}
     * @param {string} sBinding
     * @returns {boolean}
     */
    releaseSwitch(sBinding)
    {
        /*
         * pressSwitch() is simple: flip the switch's current value in sw[1] and marked it "pressed" in sw[3].
         *
         * releaseSwitch() is more complicated, because we must handle both mouseUp and mouseOut events.  The first time
         * we receive EITHER of those events AND the switch is marked momentary (sw[2]) AND the switch is pressed (sw[3]),
         * then we must flip the switch back to its original value.
         *
         * Otherwise, the only thing we have to do is mark the switch as "released" (ie, set sw[3] to false).
         */
        var sw = this.switches[sBinding];
        if (sw) {
            if (sw[2] && sw[3]) {
                /*
                 * Set the new switch value in sw[1] and then immediately display it
                 */
                this.displaySwitch(sBinding, (sw[1] = sw[0]));

                /*
                 * Call the appropriate process handler with the current switch value (sw[1])
                 */
                if (sw[4]) sw[4].call(this, sw[1], sw[5]);
            }
            /*
             * Mark the switch as "released"
             */
            sw[3] = false;
            return true;
        }
        return false;
    }

    /**
     * processStart(value, index)
     *
     * @this {PanelPDP10}
     * @param {number} value
     * @param {number} [index]
     */
    processStart(value, index)
    {
        if (!value && !this.cpu.isRunning()) {

            this.cpu.setPC(this.regAddr);

            /*
             * The PDP-11/70 Handbook goes on to say: "If the system needs to be initialized but execution
             * is not wanted, the START switch should be depressed while the HALT/ENABLE switch is in the HALT
             * position."
             */
            if (this.getSwitch(PanelPDP10.SWITCH.ENABLE)) {
                this.cpu.startCPU();
            }
        }
    }

    /**
     * processStep(value, index)
     *
     * If value == 1 (our initial value), then the 'STEP' switch is set to "S INST" (step one instruction);
     * otherwise, it's set to "S BUS CYCLE" (step one bus cycle).
     *
     * However, since we can't currently support cycle-stepping, I've decided to innovate a little and
     * change the meaning of this switch: the normal ("up") position means that successive 'EXAM' and 'DEP'
     * operations will first add 2 to the ADDRESS register, while the opposite ("down") position means
     * they will first subtract 2.
     *
     * See processLEDTest() for more of these exciting "innovations".  ;-)
     *
     * @this {PanelPDP10}
     * @param {number} value
     * @param {number} [index]
     */
    processStep(value, index)
    {
        /*
         * There's really nothing for us to do here, because the normal press and release handlers
         * already record the state of this switch, so it can be queried as needed, using getSwitch().
         */
    }

    /**
     * processEnable(value, index)
     *
     * If value == 1 (our initial value), then the 'ENABLE'/'HALT' switch is set to 'ENABLE', otherwise 'HALT'.
     *
     * @this {PanelPDP10}
     * @param {number} value
     * @param {number} [index]
     */
    processEnable(value, index)
    {
        /*
         * The "down" (0) position is 'HALT', which stops the CPU; however, the "up" (1) position ('ENABLE')
         * does NOT start the CPU.  You must press 'CONT' to continue execution, which will either continue for
         * one instruction if this switch to set to 'HALT' or indefinitely if it is set to 'ENABLE'.
         */
        if (!value) {
            this.cpu.stopCPU();
        }
    }

    /**
     * processContinue(value, index)
     *
     * @this {PanelPDP10}
     * @param {number} value
     * @param {number} [index]
     */
    processContinue(value, index)
    {
        if (!value && !this.cpu.isRunning()) {
            /*
             * TODO: Technically, we're also supposed to check the 'STEP' switch to determine if we should
             * step one instruction or just one cycle, but we don't currently have the ability to do the latter.
             */
            if (!this.getSwitch(PanelPDP10.SWITCH.ENABLE)) {
                /*
                 * Using the Debugger's stepCPU() function is more convenient, and has the pleasant side-effect
                 * of updating the debugger's display; however, not all machines with a Front Panel will necessarily
                 * also have the Debugger loaded.
                 */
                var dbg = this.dbg;
                if (dbg && !dbg.isBusy(true)) {
                    dbg.setBusy(true);
                    dbg.stepCPU(0, null);
                    dbg.setBusy(false);
                }
                else {
                    /*
                     * For this tiny single-instruction burst, mimic what runCPU() does.
                     */
                    try {
                        var nCyclesStep = this.cpu.stepCPU(1);
                        if (nCyclesStep > 0) {
                            this.cpu.updateTimers(nCyclesStep);
                            this.cpu.addCycles(nCyclesStep, true);
                            this.cpu.updateChecksum(nCyclesStep);
                        }
                    }
                    catch(exception) {
                        /*
                         * We assume that any numeric exception was explicitly thrown by the CPU to interrupt the
                         * current instruction.  For all other exceptions, we attempt a stack dump.
                         */
                        if (typeof exception != "number") {
                            var e = exception;
                            this.cpu.setError(e.stack || e.message);
                        }
                    }
                }

                /*
                 * Simulate a call to our stop() handler, to update the panel's ADDRESS register with the new PC.
                 */
                this.stop();

                /*
                 * Going through the normal channels (ie, the Computer's updateDisplays() interface) ensures that
                 * ALL updateDisplay() handlers will be called, including ours.
                 *
                 * NOTE: If we used the Debugger's stepCPU() function, then that includes a call to updateDisplay();
                 * unfortunately, it will have happened BEFORE we called stop() to update the ADDRESS register, so
                 * we still need to call it again.
                 */
                if (this.cmp) this.cmp.updateDisplays();
            }
            else {
                this.cpu.startCPU();
            }
        }
    }

    /**
     * processDeposit(value, index)
     *
     * @this {PanelPDP10}
     * @param {number} value
     * @param {number} [index]
     */
    processDeposit(value, index)
    {
        if (value && !this.cpu.isRunning()) {
            if (this.fDeposit) this.advanceAddr();
            /*
             * This used to be updateData(), but that only updates regData, whereas setDR() updates both regData and regDisplay,
             * and for these kinds of explicit Front Panel operations, I'm assuming the values should be synced.
             */
            var w = this.setDR(this.regSwitches);

            if (this.nAddrSel == PanelPDP10.ADDRSEL.CONS_PHY) {
                /*
                 * TODO: Determine if this needs to take the UNIBUS map into consideration.
                 */
                this.bus.setWordDirect(this.regAddr, w);
            } else {
                /*
                 * TODO: This code is obviously incomplete, since it doesn't take into account the precise ADDRSEL mode.
                 */
                this.cpu.writeWord(this.regAddr, w);
            }
        }
    }

    /**
     * processExamine(value, index)
     *
     * @this {PanelPDP10}
     * @param {number} value
     * @param {number} [index]
     */
    processExamine(value, index)
    {
        if (!value && !this.cpu.isRunning()) {
            var w;
            if (this.fExamine) this.advanceAddr();
            if (this.nAddrSel == PanelPDP10.ADDRSEL.CONS_PHY) {
                /*
                 * TODO: Determine if this needs to take the UNIBUS map into consideration.
                 */
                w = this.bus.getWordDirect(this.regAddr);
            } else {
                /*
                 * TODO: This code is obviously incomplete, since it doesn't take into account the precise ADDRSEL mode.
                 */
                w = this.cpu.readWord(this.regAddr);
            }
            /*
             * This used to be updateData(), but that only updates regData, whereas setDR() updates both regData and regDisplay,
             * and for these kinds of explicit Front Panel operations, I'm assuming the values should be synced.
             */
            this.setDR(w);
        }
    }

    /**
     * processLoadAddr(value, index)
     *
     * @this {PanelPDP10}
     * @param {number} value
     * @param {number} [index]
     */
    processLoadAddr(value, index)
    {
        if (!value && !this.cpu.isRunning()) {
            this.updateAddr(this.regSwitches);
        }
    }

    /**
     * processLEDTest(value, index)
     *
     * @this {PanelPDP10}
     * @param {number} value
     * @param {number} [index]
     */
    processLEDTest(value, index)
    {
        if (value) {
            this.fLEDTest = true;
            this.displayLEDs(true);
        } else {
            this.fLEDTest = false;
            this.displayLEDs();
            /*
             * This is another one of my "innovations": when you're done testing the LEDs, all the switches reset as well.
             */
            this.setSRSwitches(0);
        }
    }

    /**
     * processSRSwitch(value, index)
     *
     * @this {PanelPDP10}
     * @param {number} value (normally 0 or 1, but we only depend on it being zero or non-zero)
     * @param {number} index
     */
    processSRSwitch(value, index)
    {
        if (value) {
            this.regSwitches |= 1 << index;
        } else {
            this.regSwitches &= ~(1 << index);
        }
    }

    /**
     * advanceAddr()
     *
     * This should also take care of the following Front Panel behaviors when the accessing the general-purpose
     * registers:
     *
     *      1) ADDRESS display incremented by 1 (instead of 2)
     *      2) The STEP after the last register is 177700, such that the addresses are looped
     *
     * A third behavior is NOT emulated: preventing the ADDRESS from stepping to the first General Register (177700)
     * from 177676.
     *
     * @this {PanelPDP10}
     * @returns {number}
     */
    advanceAddr()
    {
        var inc = 1;
        var mask = this.bus.nBusMask;
        if (!this.getSwitch(PanelPDP10.SWITCH.STEP)) inc = -inc;
        return this.updateAddr((this.regAddr & ~mask) | ((this.regAddr + inc) & mask));
    }

    /**
     * updateAddr(value)
     *
     * @this {PanelPDP10}
     * @param {number} value
     * @returns {number}
     */
    updateAddr(value)
    {
        this.regAddr = value & this.bus.nBusMask;
        if (this.ledAddr !== this.regAddr) {
            this.ledAddr = this.regAddr;
            this.updateLEDArray("A", this.ledAddr, 22);
        }
        return this.regAddr;
    }

    /**
     * updateData(value)
     *
     * @this {PanelPDP10}
     * @param {number} value
     * @returns {number}
     */
    updateData(value)
    {
        this.regData = value % PDP10.WORD_LIMIT;
        if (this.ledData !== this.regData) {
            this.ledData = this.regData;
            this.updateLEDArray("D", this.ledData, 16);
        }
        return this.regData;
    }

    /**
     * updateLED(sBinding, value)
     *
     * @this {PanelPDP10}
     * @param {string} sBinding
     * @param {number} value
     * @returns {number}
     */
    updateLED(sBinding, value)
    {
        this.leds[sBinding] = value;
        if (!this.fLEDTest) this.displayLED(sBinding, value);
        return value;
    }

    /**
     * updateLEDArray(sPrefix, value, nLEDs)
     *
     * @this {PanelPDP10}
     * @param {string} sPrefix
     * @param {number} value
     * @param {number} nLEDs
     */
    updateLEDArray(sPrefix, value, nLEDs)
    {
        for (var i = 0; i < nLEDs; i++) {
            var sBinding = sPrefix + i;
            this.updateLED(sBinding, value & (1 << i));
        }
    }

    /**
     * setSRSwitches(value)
     *
     * @this {PanelPDP10}
     * @param {number|undefined} value
     * @returns {boolean}
     */
    setSRSwitches(value)
    {
        this.regSwitches = value | 0;
        for (var i = 0; i < 22; i++) {
            this.switches['S'+i][1] = (this.regSwitches & (1 << i))? 1 : 0;
        }
        /*
         * This (re)displays ALL switches, not merely the SR switches, but that's OK.
         */
        this.displaySwitches();
        return true;
    }

    /**
     * stop(ms, nCycles)
     *
     * This is a notification handler, called by the Computer, to inform us the CPU has now stopped.
     *
     * @this {PanelPDP10}
     * @param {number} [ms]
     * @param {number} [nCycles]
     */
    stop(ms, nCycles)
    {
        this.updateAddr(this.cpu.getPC());
    }

    /**
     * setAddr(value, fActive)
     *
     * This interface is for passing new addresses to the Front Panel.  However, whether or not this will become the
     * ADDRESS actually displayed will depend on other settings (see updateStatus() for details).
     *
     * @this {PanelPDP10}
     * @param {number} value
     * @param {boolean} [fActive] (true if this should become the "active" ADDRESS regardless of other settings)
     */
    setAddr(value, fActive)
    {
        this.regAddr = value;
    }

    /**
     * setData(value, fActive)
     *
     * This interface is for passing new data to the Front Panel.  However, whether or not this will become the
     * DATA actually displayed will depend on the Front Panel's DATASEL switch setting, as well as the fActive flag.
     *
     * @this {PanelPDP10}
     * @param {number} value
     * @param {boolean} [fActive] (true if this should become the "active" DATA regardless of the DATASEL switch setting)
     */
    setData(value, fActive)
    {
        if (!fActive) {
            this.regData = value;
        } else {
            this.regDisplay = value;
        }
    }

    /**
     * updateDisplay(nUpdate)
     *
     * Called by the Computer component at intervals to update registers, LEDs, etc.
     *
     * @this {PanelPDP10}
     * @param {number} [nUpdate] (-2 for power on, -1 for forced, > 0 for periodic, 0 or undefined otherwise)
     */
    updateDisplay(nUpdate)
    {
        if (this.cLiveRegs) {

            var fRunning = this.cpu.isRunning();
            var fWaiting = this.cpu.isWaiting();

            if (nUpdate < 0 || !fRunning || this.fDisplayLiveRegs) {

                /*
                 * We arbitrarily separate the display elements into two categories: cheap and expensive.
                 *
                 * LEDs are considered cheap, register displays are not.  So we'll skip the latter if this
                 * is a periodic update AND our periodic update counter hasn't reached the periodic update limit.
                 */
                if (nUpdate <= 0 || (this.nDisplayCount += nUpdate) >= this.nDisplayLimit) {
                    this.displayValue("PC", this.cpu.getPC());
                    this.nDisplayCount = 0;
                }

                /*
                 * Update the ADDRESS and DATA LEDs by selecting the appropriate values.
                 *
                 * TODO: There is currently no mechanism for selecting regData over regDisplay;
                 * we are acting as if the DATASEL switch setting is locked to "DISPLAY REGISTER".
                 */
                if (nUpdate < -1) {
                    this.regAddr = this.cpu.getPC();
                } else if (nUpdate > 0 && fRunning && !fWaiting) {
                    this.regAddr = this.cpu.getLastAddr();
                }

                this.updateAddr(this.regAddr);
                this.updateData(this.regDisplay);
            }
        }
    }

    /**
     * PanelPDP10.init()
     *
     * This function operates on every HTML element of class "panel", extracting the
     * JSON-encoded parameters for the PanelPDP10 constructor from the element's "data-value"
     * attribute, invoking the constructor to create a PanelPDP10 component, and then binding
     * any associated HTML controls to the new component.
     *
     * NOTE: Unlike most other component init() functions, this one is designed to be
     * called multiple times: once at load time, so that we can bind our print()
     * function to the panel's output control ASAP, and again when the Computer component
     * is verifying that all components are ready and invoking their powerUp() functions.
     *
     * Our powerUp() method gives us a second opportunity to notify any components that
     * that might care (eg, CPU, Keyboard, and Debugger) that we have some controls they
     * might want to use.
     */
    static init()
    {
        var aePanels = Component.getElementsByClass(APPCLASS, "panel");
        for (var iPanel=0; iPanel < aePanels.length; iPanel++) {
            var ePanel = aePanels[iPanel];
            var parmsPanel = Component.getComponentParms(ePanel);
            var panel = Component.getComponentByID(parmsPanel['id'], false);
            if (!panel) panel = new PanelPDP10(parmsPanel, true);
            Component.bindComponentControls(panel, ePanel, APPCLASS);
        }
    }
}

PanelPDP10.ADDRSEL = {
    CONS_PHY:   7       // use a physical address to perform console operations (e.g., LOAD ADRS, EXAM, & DEP)
};

/*
 * To get the current state of a switch; eg::
 *
 *      this.getSwitch(PanelPDP10.SWITCH.ENABLE)
 *
 * I haven't filled out this table, primarily it only needs to list switches we actually query
 * (eg, non-momentary ones like 'ENABLE' and 'STEP', and 'EXAM' and 'DEP' since they have special
 * "step" behavior when pressed more than once in a row).  Ditto for the LED table.
 */
PanelPDP10.SWITCH = {
    DEP:    'DEP',
    ENABLE: 'ENABLE',
    EXAM:   'EXAM',
    STEP:   'STEP'
};

/*
 * Initialize every Panel module on the page.
 */
WebLib.onInit(PanelPDP10.init);
