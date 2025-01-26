/**
 * @fileoverview This file implements the C1Pjs RAM component
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
 * @class C1PRAM
 * @unrestricted
 */
export default class C1PRAM extends Component {
    /**
     * C1PRAM(parmsRAM)
     *
     * The RAM component expects the following (parmsRAM) properties:
     *
     *      size: amount of RAM, in bytes
     *
     * NOTE: We may make a note of the specified size, but we will not actually allocate
     * any memory for the RAM; we wait for the Computer object to tell us where our RAM is,
     * using the setBuffer() method.
     *
     * @this {C1PRAM}
     * @param {Object} parmsRAM
     */
    constructor(parmsRAM)
    {
        super("C1PRAM", parmsRAM);
    }

    /**
     * @this {C1PRAM}
     * @param {Array} abMemory
     * @param {number} start
     * @param {number} end
     * @param {C1PCPU} cpu
     */
    setBuffer(abMemory, start, end, cpu)
    {
        this.abMem = abMemory;
     // this.offRAM = start;
     // this.cbRAM = end - start + 1;
        this.setReady();
    }

    /**
     * C1PRAM.init()
     *
     * This function operates on every HTML element of class "ram", extracting the
     * JSON-encoded parameters for the C1PRAM constructor from the element's "data-value"
     * attribute, invoking the constructor to create a C1PRAM component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        var aeRAM = Component.getElementsByClass(APPCLASS, "ram");
        for (var iRAM=0; iRAM < aeRAM.length; iRAM++) {
            var eRAM = aeRAM[iRAM];
            var parmsRAM = Component.getComponentParms(eRAM);
            var ram = new C1PRAM(parmsRAM);
            Component.bindComponentControls(ram, eRAM, APPCLASS);
        }
    }
}

/*
 * Initialize all the RAM modules on the page.
 */
WebLib.onInit(C1PRAM.init);
