/**
 * @fileoverview Implements Space Invaders I/O ports
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2020 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Input from "../../../lib/input.js";
import Ports from "../../../lib/ports.js";

/**
 * @typedef {PortsConfig} InvadersPortsConfig
 * @property {number} addr
 * @property {number} size
 * @property {Object} switches
 */

/**
 * @class {InvadersPorts}
 * @unrestricted
 * @property {InvadersPortsConfig} config
 */
export default class InvadersPorts extends Ports {
    /**
     * InvadersPorts(idMachine, idDevice, config)
     *
     * @this {InvadersPorts}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {InvadersPortsConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);
        this.addIOTable(this, InvadersPorts.IOTABLE);
        this.input = /** @type {Input} */ (this.findDeviceByClass("Input"));
        let onButton = this.onButton.bind(this);
        let buttonIDs = Object.keys(InvadersPorts.STATUS1.KEYMAP);
        for (let i = 0; i < buttonIDs.length; i++) {
            this.input.addListener(Input.TYPE.IDMAP, buttonIDs[i], onButton);
        }
        this.switchConfig = this.config['switches'] || {};
        this.defaultSwitches = this.parseSwitches(this.switchConfig['default'], 0xff);
        this.setSwitches(this.defaultSwitches);
        this.onReset();
    }

    /**
     * loadState(state)
     *
     * Memory and Ports states are managed by the Bus onLoad() handler, which calls our loadState() handler.
     *
     * @this {InvadersPorts}
     * @param {Array|undefined} state
     * @returns {boolean}
     */
    loadState(state)
    {
        if (state) {
            let idDevice = state.shift();
            if (this.idDevice == idDevice) {
                this.bStatus0 = state.shift();
                this.bStatus1 = state.shift();
                this.bStatus2 = state.shift();
                this.wShiftData = state.shift();
                this.bShiftCount = state.shift();
                this.setSwitches(state.shift());
                return true;
            }
        }
        return false;
    }

    /**
     * saveState(state)
     *
     * Memory and Ports states are managed by the Bus onSave() handler, which calls our saveState() handler.
     *
     * @this {InvadersPorts}
     * @param {Array} state
     */
    saveState(state)
    {
        state.push(this.idDevice);
        state.push(this.bStatus0);
        state.push(this.bStatus1);
        state.push(this.bStatus2);
        state.push(this.wShiftData);
        state.push(this.bShiftCount);
        state.push(this.switches);
    }

    /**
     * onButton(id, down)
     *
     * @this {InvadersPorts}
     * @param {string} id
     * @param {boolean} down
     */
    onButton(id, down)
    {
        let bit = InvadersPorts.STATUS1.KEYMAP[id];
        this.bStatus1 = (this.bStatus1 & ~bit) | (down? bit : 0);
    }

    /**
     * onReset()
     *
     * Called by the Machine device to provide notification of a reset event.
     *
     * @this {InvadersPorts}
     */
    onReset()
    {
        this.bStatus0 = 0;
        this.bStatus1 = 0;
        this.bStatus2 = 0;
        this.wShiftData = 0;
        this.bShiftCount = 0;
    }

    /**
     * setSwitches(switches)
     *
     * @this {InvadersPorts}
     * @param {number|undefined} switches
     */
    setSwitches(switches)
    {
        /*
         * switches may be undefined when called from loadState() if a "pre-switches" state was loaded.
         */
        if (switches == undefined) return;
        /*
         * If this.switches is undefined, then this is the first setSwitches() call, so we should set func
         * to onSwitch(); otherwise, we omit func so that all addListener() will do is initialize the visual
         * state of the SWITCH controls.
         */
        let func = this.switches == undefined? this.onSwitch.bind(this) : null;
        /*
         * Now we can set the actual switches to the supplied setting, and initialize each of the (8) switches.
         */
        this.switches = switches;
        for (let i = 1; i <= 8; i++) {
            this.input.addListener(Input.TYPE.SWITCH, "sw"+i, func, !(switches & (1 << (i - 1))));
        }
    }

    /**
     * onSwitch(id, state)
     *
     * @this {InvadersPorts}
     * @param {string} id
     * @param {boolean} state
     */
    onSwitch(id, state)
    {
        let desc;
        let i = +id.slice(-1) - 1, bit = 1 << i;
        if (!state) {
            this.switches |= bit;
        } else {
            this.switches &= ~bit;
        }
        for (let sws in this.switchConfig) {
            if (sws == "default" || sws[i] != '0' && sws[i] != '1') continue;
            let mask = this.parseSwitches(sws, -1);
            let switches = this.parseSwitches(sws);
            if (switches == (this.switches & mask)) {
                desc = this.switchConfig[sws];
                break;
            }
        }
        this.printf("%s: %b (%s)\n", id, state, desc);
    }

    /**
     * inStatus0(port)
     *
     * @this {InvadersPorts}
     * @param {number} port (0x00)
     * @returns {number} simulated port value
     */
    inStatus0(port)
    {
        let value = this.bStatus0;
        this.printf(Ports.MESSAGE.BUS, "inStatus0(%#04x): %#04x\n", port, value);
        return value;
    }

    /**
     * inStatus1(port)
     *
     * @this {InvadersPorts}
     * @param {number} port (0x01)
     * @returns {number} simulated port value
     */
    inStatus1(port)
    {
        let value = this.bStatus1;
        this.printf(Ports.MESSAGE.PORTS, "inStatus1(%#04x): %#04x\n", port, value);
        return value;
    }

    /**
     * inStatus2(port)
     *
     * @this {InvadersPorts}
     * @param {number} port (0x02)
     * @returns {number} simulated port value
     */
    inStatus2(port)
    {
        let value = this.bStatus2 | (this.switches & (InvadersPorts.STATUS2.DIP1_2 | InvadersPorts.STATUS2.DIP4 | InvadersPorts.STATUS2.DIP7));
        this.printf(Ports.MESSAGE.PORTS, "inStatus2(%#04x): %#04x\n", port, value);
        return value;
    }

    /**
     * inShiftResult(port)
     *
     * @this {InvadersPorts}
     * @param {number} port (0x03)
     * @returns {number} simulated port value
     */
    inShiftResult(port)
    {
        let value = (this.wShiftData >> (8 - this.bShiftCount)) & 0xff;
        this.printf(Ports.MESSAGE.PORTS, "inShiftResult(%#04x): %#04x\n", port, value);
        return value;
    }

    /**
     * outShiftCount(port, value)
     *
     * @this {InvadersPorts}
     * @param {number} port (0x02)
     * @param {number} value
     */
    outShiftCount(port, value)
    {
        this.printf(Ports.MESSAGE.PORTS, "outShiftCount(%#04x): %#04x\n", port, value);
        this.bShiftCount = value;
    }

    /**
     * outSound1(port, value)
     *
     * @this {InvadersPorts}
     * @param {number} port (0x03)
     * @param {number} value
     */
    outSound1(port, value)
    {
        this.printf(Ports.MESSAGE.PORTS, "outSound1(%#04x): %#04x\n", port, value);
        this.bSound1 = value;
    }

    /**
     * outShiftData(port, value)
     *
     * @this {InvadersPorts}
     * @param {number} port (0x04)
     * @param {number} value
     */
    outShiftData(port, value)
    {
        this.printf(Ports.MESSAGE.PORTS, "outShiftData(%#04x): %#04x\n", port, value);
        this.wShiftData = (value << 8) | (this.wShiftData >> 8);
    }

    /**
     * outSound2(port, value)
     *
     * @this {InvadersPorts}
     * @param {number} port (0x05)
     * @param {number} value
     */
    outSound2(port, value)
    {
        this.printf(Ports.MESSAGE.PORTS, "outSound2(%#04x): %#04x\n", port, value);
        this.bSound2 = value;
    }

    /**
     * outWatchdog(port, value)
     *
     * @this {InvadersPorts}
     * @param {number} port (0x06)
     * @param {number} value
     */
    outWatchdog(port, value)
    {
        this.printf(Ports.MESSAGE.PORTS, "outWatchDog(%#04x): %#04x\n", port, value);
    }
}

InvadersPorts.STATUS0 = {           // NOTE: STATUS0 not used by the SI1978 ROMs; refer to STATUS1 instead
    PORT:       0,
    DIP4:       0x01,               // self-test request at power up?
    FIRE:       0x10,               // 1 = fire
    LEFT:       0x20,               // 1 = left
    RIGHT:      0x40,               // 1 = right
    PORT7:      0x80,               // some connection to (undocumented) port 7
    ALWAYS_SET: 0x0E                // always set
};

InvadersPorts.STATUS1 = {
    PORT:       1,
    CREDIT:     0x01,               // credit (coin slot)
    P2:         0x02,               // 1 = 2P start
    P1:         0x04,               // 1 = 1P start
    P1_FIRE:    0x10,               // 1 = fire (P1 fire if cocktail machine?)
    P1_LEFT:    0x20,               // 1 = left (P1 left if cocktail machine?)
    P1_RIGHT:   0x40,               // 1 = right (P1 right if cocktail machine?)
    ALWAYS_SET: 0x08                // always set
};

InvadersPorts.STATUS2 = {
    PORT:       2,
    DIP1_2:     0x03,               // 00 = 3 ships, 01 = 4 ships, 10 = 5 ships, 11 = 6 ships
    TILT:       0x04,               // 1 = tilt detected
    DIP4:       0x08,               // 0 = extra ship at 1500, 1 = extra ship at 1000
    P2_FIRE:    0x10,               // 1 = P2 fire (cocktail machines only?)
    P2_LEFT:    0x20,               // 1 = P2 left (cocktail machines only?)
    P2_RIGHT:   0x40,               // 1 = P2 right (cocktail machines only?)
    DIP7:       0x80,               // 0 = display coin info on demo ("attract") screen
    ALWAYS_SET: 0x00
};

InvadersPorts.SHIFT_RESULT = {      // bits 0-7 of barrel shifter result
    PORT:       3
};

InvadersPorts.SHIFT_COUNT = {
    PORT:       2,
    MASK:       0x07
};

InvadersPorts.SOUND1 = {
    PORT:       3,
    UFO:        0x01,
    SHOT:       0x02,
    PDEATH:     0x04,
    IDEATH:     0x08,
    EXPLAY:     0x10,
    AMP_ENABLE: 0x20
};

InvadersPorts.SHIFT_DATA = {
    PORT:       4
};

InvadersPorts.SOUND2 = {
    PORT:       5,
    FLEET1:     0x01,
    FLEET2:     0x02,
    FLEET3:     0x04,
    FLEET4:     0x08,
    UFO_HIT:    0x10
};

InvadersPorts.STATUS1.KEYMAP = {
    "1p":       InvadersPorts.STATUS1.P1,
    "2p":       InvadersPorts.STATUS1.P2,
    "coin":     InvadersPorts.STATUS1.CREDIT,
    "left":     InvadersPorts.STATUS1.P1_LEFT,
    "right":    InvadersPorts.STATUS1.P1_RIGHT,
    "fire":     InvadersPorts.STATUS1.P1_FIRE
};

InvadersPorts.IOTABLE = {
    0: [InvadersPorts.prototype.inStatus0],
    1: [InvadersPorts.prototype.inStatus1],
    2: [InvadersPorts.prototype.inStatus2, InvadersPorts.prototype.outShiftCount],
    3: [InvadersPorts.prototype.inShiftResult, InvadersPorts.prototype.outSound1],
    4: [null, InvadersPorts.prototype.outShiftData],
    5: [null, InvadersPorts.prototype.outSound2],
    6: [null, InvadersPorts.prototype.outWatchdog]
};

InvadersPorts.CLASSES["InvadersPorts"] = InvadersPorts;
