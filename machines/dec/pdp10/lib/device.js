/**
 * @fileoverview Implements PDP-10 device support
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2021 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

"use strict";

if (typeof module !== "undefined") {
    var Str = require("../../shared/lib/strlib");
    var Web = require("../../shared/lib/weblib");
    var Component = require("../../shared/lib/component");
    var State = require("../../shared/lib/state");
    var PDP10 = require("./defines");
    var BusPDP10 = require("./bus");
    var MemoryPDP10 = require("./memory");
    var MessagesPDP10 = require("./messages");
}

class DevicePDP10 extends Component {
    /**
     * DevicePDP10(parmsDevice)
     *
     * @param {Object} parmsDevice
     */
    constructor(parmsDevice)
    {
        super("Device", parmsDevice, MessagesPDP10.DEVICE);
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {DevicePDP10}
     * @param {ComputerPDP10} cmp
     * @param {BusPDP10} bus
     * @param {CPUStatePDP10} cpu
     * @param {DebuggerPDP10} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.bus = bus;
        this.cmp = cmp;
        this.cpu = cpu;
        this.dbg = dbg;

        this.setReady();
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {DevicePDP10}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @return {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) {
            if (!data) {
                this.reset();
            } else {
                if (!this.restore(data)) return false;
            }
        }
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {DevicePDP10}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @return {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
     */
    powerDown(fSave, fShutdown)
    {
        return fSave? this.save() : true;
    }

    /**
     * reset()
     *
     * @this {DevicePDP10}
     */
    reset()
    {
    }

    /**
     * save()
     *
     * This implements save support for the DevicePDP10 component.
     *
     * @this {DevicePDP10}
     * @return {Object}
     */
    save()
    {
        var state = new State(this);
        return state.data();
    }

    /**
     * restore(data)
     *
     * This implements restore support for the DevicePDP10 component.
     *
     * @this {DevicePDP10}
     * @param {Object} data
     * @return {boolean} true if successful, false if failure
     */
    restore(data)
    {
        return true;
    }

    /**
     * DevicePDP10.init()
     *
     * This function operates on every HTML element of class "device", extracting the
     * JSON-encoded parameters for the DevicePDP10 constructor from the element's "data-value"
     * attribute, invoking the constructor to create a DevicePDP10 component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        var aeDevice = Component.getElementsByClass(document, PDP10.APPCLASS, "device");
        for (var iDevice = 0; iDevice < aeDevice.length; iDevice++) {
            var device;
            var eDevice = aeDevice[iDevice];
            var parmsDevice = Component.getComponentParms(eDevice);
            switch(parmsDevice['type']) {
            case 'default':
                device = new DevicePDP10(parmsDevice);
                Component.bindComponentControls(device, eDevice, PDP10.APPCLASS);
                break;
            }
        }
    }
}

/*
 * Initialize all the DevicePDP10 modules on the page.
 */
Web.onInit(DevicePDP10.init);

if (typeof module !== "undefined") module.exports = DevicePDP10;
