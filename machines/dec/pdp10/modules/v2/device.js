/**
 * @fileoverview Implements PDP-10 device support
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import BusPDP10 from "./bus.js";
import MemoryPDP10 from "./memory.js";
import MESSAGE from "./message.js";
import Component from "../../../../modules/v2/component.js";
import State from "../../../../modules/v2/state.js";
import WebLib from "../../../../modules/v2/weblib.js";
import { APPCLASS, DEBUGGER, PDP10 } from "./defines.js";

/**
 * @class DevicePDP10
 * @unrestricted
 */
export default class DevicePDP10 extends Component {
    /**
     * DevicePDP10(parmsDevice)
     *
     * @param {Object} parmsDevice
     */
    constructor(parmsDevice)
    {
        super("Device", parmsDevice, MESSAGE.DEVICE);
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
     * @returns {boolean} true if successful, false if failure
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
     * @returns {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
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
     * @returns {Object}
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
     * @returns {boolean} true if successful, false if failure
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
        var aeDevice = Component.getElementsByClass(APPCLASS, "device");
        for (var iDevice = 0; iDevice < aeDevice.length; iDevice++) {
            var device;
            var eDevice = aeDevice[iDevice];
            var parmsDevice = Component.getComponentParms(eDevice);
            switch(parmsDevice['type']) {
            case 'default':
                device = new DevicePDP10(parmsDevice);
                Component.bindComponentControls(device, eDevice, APPCLASS);
                break;
            }
        }
    }
}

/*
 * Initialize all the DevicePDP10 modules on the page.
 */
WebLib.onInit(DevicePDP10.init);
