/**
 * @fileoverview This file implements the C1Pjs Panel component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Component from "../../../../modules/v2/component.js";
import WebLib from "../../../../modules/v2/weblib.js";
import { APPCLASS, DEBUG, DEBUGGER } from "./defines.js";

/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @class C1PPanel
 * @unrestricted
 */
export default class C1PPanel extends Component {
    /**
     * C1PPanel(parmsPanel)
     *
     * The Panel component has no required (parmsPanel) properties.
     *
     * @this {C1PPanel}
     * @param {Object} parmsPanel
     */
    constructor(parmsPanel)
    {
        super("C1PPanel", parmsPanel);

        this.flags.powered = false;
    }

    /**
     * The Panel doesn't have any bindings of its own; it passes along all binding requests to
     * the Computer, CPU, Keyboard and Debugger components. The order shouldn't matter, since any
     * component that doesn't recognize the specified binding should simply ignore it.
     *
     * @this {C1PPanel}
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
     * @this {C1PPanel}
     * @param {boolean} fOn
     * @param {C1PComputer} cmp
     */
    setPower(fOn, cmp)
    {
        if (fOn && !this.flags.powered) {
            this.flags.powered = true;
            this.cmp = cmp;
            this.cpu = cmp.getComponentByType("cpu");
            this.kbd = cmp.getComponentByType("keyboard");
            if (DEBUGGER) this.dbg = cmp.getComponentByType("debugger");
            C1PPanel.init();
        }
    }

    /**
     * C1PPanel.init()
     *
     * This function operates on every HTML element of class "panel", extracting the
     * JSON-encoded parameters for the C1PPanel constructor from the element's "data-value"
     * attribute, invoking the constructor to create a C1PPanel component, and then binding
     * any associated HTML controls to the new component.
     *
     * NOTE: Unlike most other component init() functions, this one is designed to be
     * called multiple times: once at load time, so that we can binding our print()
     * function to the panel's output control ASAP, and again when the C1PComputer component
     * is verifying that all components are ready and invoking their setPower() functions.
     *
     * Our setPower() method gives us a second opportunity to notify any components that
     * that might care (eg, C1PCPU, C1PKeyboard, and C1PDebugger) that we have some controls
     * they might want to use.
     */
    static init()
    {
        var fReady = false;
        var aePanels = Component.getElementsByClass(APPCLASS, "panel");
        for (var iPanel=0; iPanel < aePanels.length; iPanel++) {
            var ePanel = aePanels[iPanel];
            var parmsPanel = Component.getComponentParms(ePanel);
            var panel = Component.getComponentByID(parmsPanel['id'], false);
            if (!panel) {
                fReady = true;
                panel = new C1PPanel(parmsPanel);
            }
            Component.bindComponentControls(panel, ePanel, APPCLASS);
            if (fReady) panel.setReady();
        }
    }
}

/*
 * Initialize every Panel module on the page.
 */
WebLib.onInit(C1PPanel.init);
