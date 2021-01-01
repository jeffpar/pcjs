/**
 * @fileoverview Implements the PDP-11 Keyboard component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2021 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

"use strict";

if (typeof module !== "undefined") {
    var Web = require("../../shared/lib/weblib");
    var Component = require("../../shared/lib/component");
    var PDP11 = require("./defines");
    var MessagesPDP11 = require("./messages");
}

class KeyboardPDP11 extends Component {
    /**
     * KeyboardPDP11(parmsKbd)
     *
     * @param {Object} parmsKbd
     */
    constructor(parmsKbd)
    {
        super("Keyboard", parmsKbd, MessagesPDP11.KEYBOARD);

        this.setReady();
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * @this {KeyboardPDP11}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "textarea", "register", "flag", "rled", etc)
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "esc")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @return {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        return false;
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {KeyboardPDP11}
     * @param {ComputerPDP11} cmp
     * @param {BusPDP11} bus
     * @param {CPUStatePDP11} cpu
     * @param {DebuggerPDP11} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.cmp = cmp;
        this.cpu = cpu;
        this.dbg = dbg;         // NOTE: The "dbg" property must be set for the message functions to work
    }

    /**
     * KeyboardPDP11.init()
     *
     * This function operates on every HTML element of class "keyboard", extracting the
     * JSON-encoded parameters for the Keyboard constructor from the element's "data-value"
     * attribute, invoking the constructor to create a Keyboard component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        var aeKbd = Component.getElementsByClass(document, PDP11.APPCLASS, "keyboard");
        for (var iKbd = 0; iKbd < aeKbd.length; iKbd++) {
            var eKbd = aeKbd[iKbd];
            var parmsKbd = Component.getComponentParms(eKbd);
            var kbd = new KeyboardPDP11(parmsKbd);
            Component.bindComponentControls(kbd, eKbd, PDP11.APPCLASS);
        }
    }
}

KeyboardPDP11.MINPRESSTIME = 100;            // 100ms

/*
 * Initialize every Keyboard module on the page.
 */
Web.onInit(KeyboardPDP11.init);

if (typeof module !== "undefined") module.exports = KeyboardPDP11;
