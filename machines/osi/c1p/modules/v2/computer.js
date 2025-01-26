/**
 * @fileoverview This file implements the C1Pjs Computer component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import MESSAGE from "../../../../modules/v2/message.js";
import Component from "../../../../modules/v2/component.js";
import WebLib from "../../../../modules/v2/weblib.js";
import { APPCLASS, APPNAME, APPVERSION, COPYRIGHT, DEBUG } from "./defines.js";

/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @class C1PComputer
 * @unrestricted
 */
export default class C1PComputer extends Component {
    /**
     * C1PComputer(parmsComputer, modules)
     *
     * The C1PComputer component expects the following (parmsComputer) properties:
     *
     *      modules[{}] (from the <module> definition(s) for the computer)
     *
     * This component processes all the <module> "start" and "end" specifications
     * and "wires" everything to a common "address buffer"; namely, the abMemory array.
     * abMemory encompasses the computer's entire address space, but every component must
     * play nice and use only its assigned section of abMemory -- and pretend it's an array
     * of bytes, when in fact it's an array of floating-point values (the only primitive
     * numeric data type that JavaScript provides).
     *
     * This component also insures that all the other components are ready; in particular,
     * this means that the ROM and Video components have finished loading their resources
     * and are ready for operation.  Other components become ready as soon as we call their
     * setBuffer() method (eg, CPU, RAM, Keyboard, Debugger, SerialPort, DiskController), and
     * others, like Panel, become ready even earlier, at the end of their initialization.
     *
     * Once every component has indicated it's ready, we call its setPower() notification
     * function (if it has one; it's optional).  We call the CPU's setPower() function last,
     * so that the CPU is assured that all other components are ready and "powered".
     *
     * @this {C1PComputer}
     * @param {Object} parmsComputer
     * @param {Object} modules
     */
    constructor(parmsComputer, modules)
    {
        super("C1PComputer", parmsComputer);

        this.modules = modules;
    }

    /**
     * reset(fPowerOn)
     *
     * @this {C1PComputer}
     * @param {boolean} [fPowerOn] is true to indicate that we should start the CPU running
     */
    reset(fPowerOn)
    {
        var cpu = null;
        for (var sType in this.modules) {
            for (var i=0; i < this.modules[sType].length; i++) {
                var component = this.modules[sType][i];
                if (component && component.reset) {
                    if (DEBUG) this.printf("resetting %s\n", sType);
                    component.reset();
                    if (sType == "cpu") cpu = component;
                }
            }
        }
        if (cpu) {
            cpu.update();
            if (fPowerOn) cpu.run();
        }
    }

    /**
     * start()
     *
     * Called by the CPU to notify all component start() handlers.
     *
     * @this {C1PComputer}
     */
    start()
    {
        for (var sType in this.modules) {
            if (sType == "cpu") continue;
            for (var i=0; i < this.modules[sType].length; i++) {
                var component = this.modules[sType][i];
                if (component && component.start) {
                    component.start();
                }
            }
        }
    }

    /**
     * stop(msStart, nCycles)
     *
     * Called by the CPU to notify all component stop() handlers
     *
     * @this {C1PComputer}
     * @param {number} msStart
     * @param {number} nCycles
     */
    stop(msStart, nCycles)
    {
        for (var sType in this.modules) {
            if (sType == "cpu") continue;
            for (var i=0; i < this.modules[sType].length; i++) {
                var component = this.modules[sType][i];
                if (component && component.stop) {
                    component.stop(msStart, nCycles);
                }
            }
        }
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * @this {C1PComputer}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "reset")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        switch(sBinding) {
        case "reset":
            this.bindings[sBinding] = control;
            control.onclick = function(computer) {
                return function() {
                    computer.reset();
                };
            }(this);
            return true;
        default:
            break;
        }
        return false;
    }

    /**
     * getComponentByType(sType, idRelated, componentPrev)
     *
     * NOTE: If there are multiple components for a given type, we may need to provide a means of discriminating.
     *
     * @this {C1PComputer}
     * @param {string} sType
     * @param {string} [idRelated] of related component
     * @param {Component|null} [componentPrev] of previously returned component, if any
     * @returns {Component|null}
     */
    getComponentByType(sType, idRelated, componentPrev)
    {
        if (this.modules[sType]) {
            return this.modules[sType][0];
        }
        return null;
    }

    /**
     * power(computer)
     *
     * @param {C1PComputer} computer
     */
    static power(computer)
    {
        /*
         * Insure that the ROMs, Video and CPU are all ready before "powering" everything; always "power"
         * the CPU last, to make sure it doesn't start asking other components to do things before they're ready.
         */
        var cpu = null;
        for (var sType in computer.modules) {
            for (var i=0; i < computer.modules[sType].length; i++) {
                var component = computer.modules[sType][i];
                if (!component) continue;
                if (!component.isReady()) {
                    component.isReady(function(computer) {
                        return function() {
                            C1PComputer.power(computer);
                        };
                    }(computer));
                    return;
                }
                /*
                 * The CPU component's setPower() notification handler is a special case: we don't want
                 * to call it until the end (below), after all others have been called.
                 */
                if (sType == "cpu") {
                    cpu = component;
                }
                else if (component.setPower) {
                    component.setPower(true, computer);
                }
            }
        }

        /*
         * The entire computer is finally ready; we call our own setReady() for completeness, not because any
         * other component actually cares when we're ready.
         */
        computer.setReady();

        computer.printf(MESSAGE.NONE, "%s v%s\n%s\n", APPNAME, APPVERSION, COPYRIGHT);

        /*
         * Once we get to this point, we're guaranteed that all components are ready, so it's safe to "power" the CPU;
         * setPower() includes an automatic reset(fPowerOn), so the CPU should begin executing immediately, unless a debugger
         * is attached.
         */
        if (cpu) cpu.setPower(true, computer);
    }

    /**
     * init()
     *
     * This function operates on every HTML element of class "c1pjs-computer", extracting the
     * JSON-encoded parameters for the C1PComputer constructor from the element's "data-value"
     * attribute, invoking the constructor to create a C1PComputer component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        var aeComputers = Component.getElementsByClass(APPCLASS, "computer");

        for (var iComputer=0; iComputer < aeComputers.length; iComputer++) {

            var eComputer = aeComputers[iComputer];
            var parmsComputer = Component.getComponentParms(eComputer);

            var component;
            var modules = {};

            var abMemory;
            var addrStart = 0, addrEnd = 0;

            for (var iAddr=0; iAddr < parmsComputer['modules'].length; iAddr++) {
                var addrInfo = parmsComputer['modules'][iAddr];
                /*
                 * The first address range (ie, the CPU range) must specify the range for the entire
                 * address space (abMemory), which we allocate and zero-initialize.
                 *
                 * NOTE: We might consider doing what the Video component does on first reset: initializing
                 * the entire memory buffer to random values.  However, a constant (eg, 0xA5) might be
                 * more useful, acting as a crude indicator of memory the client code hasn't written yet.
                 */
                if (!iAddr) {
                    if (addrInfo['type'] != "cpu") break;
                    addrStart = +addrInfo['start'];
                    addrEnd = +addrInfo['end'];
                    abMemory = new Array(addrEnd+1 - addrStart);
                    for (var addr=addrStart; addr < abMemory.length; addr++) {
                        abMemory[addr] = 0;
                    }
                }
                component = Component.getComponentByID(addrInfo['refID'], parmsComputer['id']);
                if (component) {
                    var sType = addrInfo['type'];
                    if (modules[sType] === undefined) {
                        modules[sType] = [];
                    }
                    modules[sType].push(component);
                    if (component.setBuffer && addrInfo['start'] !== undefined) {
                        component.setBuffer(abMemory, +addrInfo['start'], +addrInfo['end'], modules['cpu'][0]);
                    }
                }
                else {
                    Component.error("no component for <module refid=\"" + addrInfo['refID'] + "\">");
                    return;
                }
            }

            if (abMemory === undefined) {
                Component.error("<module type=\"cpu\"> definition must appear first in the <computer> specification");
                return;
            }

            /*
             * Let's see if the Debugger is installed (NOTE: its ID must be "debugger", and only one per machine is supported);
             * the Debugger needs our setBuffer(), setPower() and reset() notifications, and this relieves us from having an explicit
             * <module> entry for type="debugger".
             */
            component = Component.getComponentByType('C1PDebugger', parmsComputer['id'], false);
            if (component) {
                modules['debugger'] = [component];
                if (component.setBuffer) {
                    component.setBuffer(abMemory, addrStart, addrEnd, modules['cpu'][0]);
                }
            }

            var computer = new C1PComputer(parmsComputer, modules);

            /*
             * Let's see if the Control Panel is installed (NOTE: its ID must be "panel", and only one per machine is supported);
             * the Panel needs our setPower() notifications, and this relieves us from having an explicit <module> entry for type="panel".
             */
            var panel = Component.getComponentByType('C1PPanel', parmsComputer['id'], false);
            if (panel) {
                modules['panel'] = [panel];
                /*
                 * Iterate through all the other components and update their print methods if the Control Panel has provided overrides.
                 */
                var controlPrint = panel.bindings['print'];
                if (controlPrint) {
                    var aComponents = Component.getComponents(parmsComputer['id']);
                    for (var iComponent = 0; iComponent < aComponents.length; iComponent++) {
                        component = aComponents[iComponent];
                        if (component == panel) continue;
                        component.print = panel.print;
                    }
                }
            }

            /*
             *  We may eventually add a "Power" button, but for now, all we have is a "Reset" button
             */
            Component.bindComponentControls(computer, eComputer, APPCLASS);

            /*
             * "Power" the computer automatically
             */
            C1PComputer.power(computer);
        }
    }
}

/*
 * Initialize every Computer on the page.
 */
WebLib.onInit(C1PComputer.init);
