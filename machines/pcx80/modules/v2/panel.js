/**
 * @fileoverview Implements the PCx80 Panel component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import BusX80 from "./bus.js";
import Component from "../../../modules/v2/component.js";
import WebLib from "../../../modules/v2/weblib.js";
import { APPCLASS, DEBUGGER } from "./defines.js";

/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @class PanelX80
 * @unrestricted
 */
export default class PanelX80 extends Component {
    /**
     * PanelX80(parmsPanel)
     *
     * The PanelX80 component has no required (parmsPanel) properties.
     *
     * @this {PanelX80}
     * @param {Object} parmsPanel
     */
    constructor(parmsPanel)
    {
        super("Panel", parmsPanel);
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * Most panel layouts don't have bindings of their own, so we pass along all binding requests to the
     * Computer, CPU, Keyboard and Debugger components first.  The order shouldn't matter, since any component
     * that doesn't recognize the specified binding should simply ignore it.
     *
     * @this {PanelX80}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea", "canvas")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "reset")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        if (this.cmp && this.cmp.setBinding(sHTMLType, sBinding, control, sValue)) return true;
        if (this.cpu && this.cpu.setBinding(sHTMLType, sBinding, control, sValue)) return true;
        if (this.kbd && this.kbd.setBinding(sHTMLType, sBinding, control, sValue)) return true;
        if (DEBUGGER && this.dbg && this.dbg.setBinding(sHTMLType, sBinding, control, sValue)) return true;
        return super.setBinding(sHTMLType, sBinding, control, sValue);
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {PanelX80}
     * @param {ComputerX80} cmp
     * @param {BusX80} bus
     * @param {CPUStateX80} cpu
     * @param {DebuggerX80} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.cmp = cmp;
        this.bus = bus;
        this.cpu = cpu;
        this.dbg = dbg;
        this.kbd = /** @type {KeyboardX80} */ (cmp.getMachineComponent("Keyboard"));
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {PanelX80}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) PanelX80.init();
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {PanelX80}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
     */
    powerDown(fSave, fShutdown)
    {
        return true;
    }

    /**
     * updateStatus(fForce)
     *
     * Update function for Panels containing elements with high-frequency display requirements.
     *
     * For older (and slower) DOM-based display elements, those are sill being managed by the CPUState component,
     * so it has its own updateStatus() handler.
     *
     * The Computer's updateStatus() handler is currently responsible for calling both our handler and the CPU's handler.
     *
     * @this {PanelX80}
     * @param {boolean} [fForce] (true will display registers even if the CPU is running and "live" registers are not enabled)
     */
    updateStatus(fForce)
    {
    }

    /**
     * PanelX80.init()
     *
     * This function operates on every HTML element of class "panel", extracting the
     * JSON-encoded parameters for the PanelX80 constructor from the element's "data-value"
     * attribute, invoking the constructor to create a PanelX80 component, and then binding
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
        let fReady = false;
        let aePanels = Component.getElementsByClass(APPCLASS, "panel");
        for (let iPanel=0; iPanel < aePanels.length; iPanel++) {
            let ePanel = aePanels[iPanel];
            let parmsPanel = Component.getComponentParms(ePanel);
            let panel = Component.getComponentByID(parmsPanel['id'], false);
            if (!panel) {
                fReady = true;
                panel = new PanelX80(parmsPanel);
            }
            Component.bindComponentControls(panel, ePanel, APPCLASS);
            if (fReady) panel.setReady();
        }
    }
}

/*
 * Initialize every Panel module on the page.
 */
WebLib.onInit(PanelX80.init);
