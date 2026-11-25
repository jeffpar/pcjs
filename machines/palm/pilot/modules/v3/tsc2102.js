/**
 * @fileoverview TI TSC2102 Touch Screen Controller and Audio Codec Emulation
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2026 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Device from "../../../../modules/v3/device.js";

/**
 * @typedef {Config} TSC2102Config
 * @property {string} [omap] (ID of the OMAP device; default is the first OMAP device)
 * @property {number} [chipSelect] (uWire chip select that the TSC2102 is attached to; default is 0)
 * @property {number} [gpioPINTDAV] (OMAP GPIO line that the PINTDAV pin is connected to; default is 6)
 */

/**
 * TSC2102 Emulation
 *
 * The TSC2102 is the Tungsten|E's touch screen controller: it converts the pen position (along with the battery
 * voltage and temperature) to digital values, which PalmOS reads over the OMAP's uWire interface.  It's also the
 * Tungsten|E's audio DAC; we implement all of the audio registers, but there is no audio output.
 *
 * Every uWire transfer is 16 bits.  A command word selects a register (a page and an offset within that page)
 * and a direction, and it's followed by one or more data words to or from that register (and those that follow).
 *
 * The chip's behavior was learned from its data sheet and from QEMU's TSC210x emulation.
 *
 * @class TSC2102
 * @unrestricted
 */
export default class TSC2102 extends Device
{
    /**
     * TSC2102(idMachine, idDevice, config)
     *
     * @this {TSC2102}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {TSC2102Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        this.time = /** @type {Time} */ (this.findDeviceByClass("Time"));
        let idOMAP = this.config['omap'];
        this.omap = /** @type {OMAP} */ (idOMAP? this.findDevice(idOMAP) : this.findDeviceByClass("OMAP"));
        this.gpioPINTDAV = this.config['gpioPINTDAV'] != undefined? this.config['gpioPINTDAV'] : 6;
        this.timer = this.time.addTimer(this.idDevice + ".timer", this.onConversion.bind(this));

        this.x = this.y = 0;            // the pen position, as "raw" 12-bit values
        this.fPenDown = false;
        this.reset();

        this.omap.attachUWire(this.config['chipSelect'] || 0, {send: this.send.bind(this), receive: this.receive.bind(this)});
    }

    /**
     * reset()
     *
     * @this {TSC2102}
     */
    reset()
    {
        this.fData = false;             // true if the next word sent to us is data (as opposed to a command)
        this.fRead = false;             // true if the last command was a read
        this.page = this.offset = 0;    // the register selected by the last command
        this.pinFunc = 2;               // what the PINTDAV pin reports (see updatePin())
        this.fEnabled = this.fBusy = this.fHostMode = false;
        this.fPin = false;
        this.function = this.nextFunction = 0;
        this.precision = this.nextPrecision = 0;
        this.filter = this.ref = this.timing = this.noise = 0;
        this.dav = 0;                   // "data available" bits (see TSC2102.FUNCTION_DAV)
        this.audioCtrl1 = 0x0000;
        this.audioCtrl2 = 0x4410;
        this.audioCtrl3 = 0x0000;
        this.pll = [0x1004, 0x0000];
        this.volume = 0xffff;
        this.dacPower = 0x8540;
        this.fSoftStep = true;
        this.filterData = [
            0x6be3, 0x9666, 0x675d, 0x6be3, 0x9666, 0x675d, 0x7d83, 0x84ee, 0x7d83, 0x84ee,
            0x6be3, 0x9666, 0x675d, 0x6be3, 0x9666, 0x675d, 0x7d83, 0x84ee, 0x7d83, 0x84ee
        ];
        this.omap.setGPIO(this.gpioPINTDAV, true);
    }

    /**
     * setPen(x, y, fDown)
     *
     * Called by the machine whenever the pen moves, goes down, or goes up.
     *
     * The position is in units of LCD pixels, where (0,0) is the top left corner of the LCD (and the digitizer
     * extends below the LCD, to cover the Graffiti area), which we convert to the 12-bit values that a real
     * Tungsten|E's digitizer would report, using typical calibration values for the device (courtesy of QEMU).
     *
     * @this {TSC2102}
     * @param {number} x
     * @param {number} y
     * @param {boolean} fDown
     */
    setPen(x, y, fDown)
    {
        if (fDown) {
            this.x = Math.max(0, Math.min(4095, Math.round((22465308 - x * 65536) / 5909)));
            this.y = Math.max(0, Math.min(4095, Math.round((y * 65536 + 1219972) / 7644)));
        }
        if (this.fPenDown != fDown) {
            this.fPenDown = fDown;
            this.updatePin();
        }
    }

    /**
     * updatePin()
     *
     * Updates the PINTDAV pin, and starts the next conversion if one is called for.
     *
     * @this {TSC2102}
     */
    updatePin()
    {
        let fPin;
        switch (this.pinFunc) {
        case 0:                         // PENIRQ: the pen is down
            fPin = this.fPenDown;
            break;
        case 1:                         // DAV: data is available
            fPin = !!this.dav;
            break;
        default:                        // PENIRQ until data is available
            fPin = this.fPenDown && !this.dav;
            break;
        }
        if (!this.fEnabled) fPin = false;
        if (fPin != this.fPin) {
            this.fPin = fPin;
            this.omap.setGPIO(this.gpioPINTDAV, !fPin);         // the pin is active low
        }

        switch (this.nextFunction) {
        case TSC2102.FUNCTION.XY_SCAN:
        case TSC2102.FUNCTION.XYZ_SCAN:
            if (!this.fPenDown) return;
            break;
        case TSC2102.FUNCTION.X:
        case TSC2102.FUNCTION.Y:
        case TSC2102.FUNCTION.Z:
            if (!this.fPenDown) return;
            /* falls through */
        case TSC2102.FUNCTION.BAT1:
        case TSC2102.FUNCTION.BAT2:
        case TSC2102.FUNCTION.AUX:
        case TSC2102.FUNCTION.TEMP1:
        case TSC2102.FUNCTION.TEMP2:
            /**
             * These are one-time conversions, so once the data is available, we're done.
             */
            if (this.dav) this.fEnabled = false;
            break;
        case TSC2102.FUNCTION.AUX_SCAN:
        case TSC2102.FUNCTION.PORT_SCAN:
            break;
        default:
            return;
        }

        if (!this.fEnabled || this.fBusy || this.dav) return;

        /**
         * Start a conversion, which takes about a millisecond.
         */
        this.fBusy = true;
        this.precision = this.nextPrecision;
        this.function = this.nextFunction;
        this.omap.armTimer(this.timer, Math.ceil(this.time.nCyclesPerSecond / 1024));
    }

    /**
     * onConversion()
     *
     * Called when a conversion is complete.
     *
     * @this {TSC2102}
     */
    onConversion()
    {
        if (!this.fBusy) return;
        this.fBusy = false;
        this.dav |= TSC2102.FUNCTION_DAV[this.function];
        this.updatePin();
    }

    /**
     * send(value)
     *
     * Called by the OMAP's uWire interface with every word that it sends to us.
     *
     * @this {TSC2102}
     * @param {number} value (16 bits)
     */
    send(value)
    {
        if (!this.fData) {
            this.fRead = !!(value & 0x8000);
            this.page = (value >> 11) & 0xf;
            this.offset = (value >> 5) & 0x3f;
            this.fData = true;
        } else {
            if (!this.fRead) {
                switch (this.page) {
                case TSC2102.PAGE.CONTROL:
                    this.writeControl(this.offset, value);
                    break;
                case TSC2102.PAGE.AUDIO:
                    this.writeAudio(this.offset, value);
                    break;
                }
            }
            this.updatePin();
            this.fData = false;
        }
    }

    /**
     * receive()
     *
     * Called by the OMAP's uWire interface whenever it wants a word from us.
     *
     * @this {TSC2102}
     * @returns {number} (16 bits)
     */
    receive()
    {
        let value = 0xffff;
        switch (this.page) {
        case TSC2102.PAGE.DATA:
            value = this.readData(this.offset);
            break;
        case TSC2102.PAGE.CONTROL:
            value = this.readControl(this.offset);
            break;
        case TSC2102.PAGE.AUDIO:
            value = this.readAudio(this.offset);
            break;
        }
        this.updatePin();
        this.offset++;                  // registers can be read sequentially
        this.fData = false;
        return value & 0xffff;
    }

    /**
     * cut(value)
     *
     * @this {TSC2102}
     * @param {number} value (16-bit conversion result)
     * @returns {number} (the result reduced to the selected precision, which is 8, 10, or 12 bits)
     */
    cut(value)
    {
        return value >> (16 - TSC2102.RESOLUTIONS[this.precision]);
    }

    /**
     * readData(reg)
     *
     * Reading a conversion result also clears its "data available" bit.
     *
     * @this {TSC2102}
     * @param {number} reg
     * @returns {number}
     */
    readData(reg)
    {
        switch (reg) {
        case 0x00:                      // X
            this.dav &= ~0x0400;
            return this.cut(this.x << 4);
        case 0x01:                      // Y
            this.dav &= ~0x0200;
            return this.cut(this.y << 4);
        case 0x02:                      // Z1
            this.dav &= ~0x0100;
            return this.cut((400 - (this.x >> 3) + (this.fPenDown? 1024 : 0)) << 4);
        case 0x03:                      // Z2
            this.dav &= ~0x0080;
            return this.cut((4000 + (this.y >> 3) - (this.fPenDown? 1024 : 0)) << 4);
        case 0x05:                      // BAT1 (a healthy battery)
            this.dav &= ~0x0040;
            return this.cut(0x8660);
        case 0x06:                      // BAT2
            this.dav &= ~0x0020;
            return this.cut(0x0000);
        case 0x07:                      // AUX1
            this.dav &= ~0x0010;
            return this.cut(0x35c0);
        case 0x08:                      // AUX2
            this.dav &= ~0x0008;
            return 0xffff;
        case 0x09:                      // TEMP1
            this.dav &= ~0x0004;
            return this.cut(0x8c70);
        case 0x0a:                      // TEMP2
            this.dav &= ~0x0002;
            return this.cut(0xa5b0);
        case 0x0b:                      // DAC
            this.dav &= ~0x0001;
            return 0xffff;
        }
        return 0xffff;
    }

    /**
     * readControl(reg)
     *
     * @this {TSC2102}
     * @param {number} reg
     * @returns {number}
     */
    readControl(reg)
    {
        switch (reg) {
        case 0x00:                      // TSC ADC
            return (this.fPenDown? 0x8000 : 0) | (this.fBusy? 0 : 0x4000) | (this.nextFunction << 10) | (this.nextPrecision << 8) | this.filter;
        case 0x01:                      // Status
            return (this.pinFunc << 14) | (this.fEnabled? 0 : 0x2000) | (this.fHostMode? 0x1000 : 0) | (this.dav? 0x0800 : 0) | this.dav;
        case 0x03:                      // Reference
            return this.ref;
        case 0x05:                      // Configuration
            return this.timing;
        }
        return 0xffff;
    }

    /**
     * writeControl(reg, value)
     *
     * @this {TSC2102}
     * @param {number} reg
     * @param {number} value
     */
    writeControl(reg, value)
    {
        switch (reg) {
        case 0x00:                      // TSC ADC
            this.fHostMode = !!(value & 0x8000);
            this.fEnabled = !(value & 0x4000);
            this.fBusy = this.fBusy && this.fEnabled;
            this.nextFunction = (value >> 10) & 0xf;
            this.nextPrecision = (value >> 8) & 0x3;
            this.filter = value & 0xff;
            break;
        case 0x01:                      // Status
            this.pinFunc = value >> 14;
            break;
        case 0x03:                      // Reference
            this.ref = value & 0x1f;
            break;
        case 0x04:                      // Reset
            if (value == 0xbb00) this.reset();
            break;
        case 0x05:                      // Configuration
            this.timing = value & 0x3f;
            break;
        }
    }

    /**
     * readAudio(reg)
     *
     * @this {TSC2102}
     * @param {number} reg
     * @returns {number}
     */
    readAudio(reg)
    {
        let value;
        switch (reg) {
        case 0x00:                      // Audio Control 1
            return this.audioCtrl1;
        case 0x01:
            return 0xff00;
        case 0x02:                      // DAC Volume Control
            return this.volume;
        case 0x03:
            return 0x8b00;
        case 0x04:                      // Audio Control 2 (any volume "soft-stepping" is always complete)
            return this.audioCtrl2 | 0x000c;
        case 0x05:                      // Stereo DAC Power Control (and any power-down is always complete)
            return 0x2aa0 | this.dacPower | ((this.dacPower & 0x0400)? 0x0040 : 0);
        case 0x06:                      // Audio Control 3
            value = this.audioCtrl3 | 0x0001;
            this.audioCtrl3 &= 0xff3f;
            return value;
        case 0x1b:                      // PLL Programmability 1
            return this.pll[0];
        case 0x1c:                      // PLL Programmability 2
            return this.pll[1];
        case 0x1d:                      // Audio Control 4
            return this.fSoftStep? 0 : 0x4000;
        }
        if (reg >= 0x07 && reg <= 0x1a) return this.filterData[reg - 0x07];
        return 0xffff;
    }

    /**
     * writeAudio(reg, value)
     *
     * @this {TSC2102}
     * @param {number} reg
     * @param {number} value
     */
    writeAudio(reg, value)
    {
        switch (reg) {
        case 0x00:                      // Audio Control 1
            this.audioCtrl1 = value & 0x0f3f;
            break;
        case 0x02:                      // DAC Volume Control
            this.volume = value;
            break;
        case 0x04:                      // Audio Control 2
            this.audioCtrl2 = value & 0xf7f2;
            break;
        case 0x05:                      // Stereo DAC Power Control
            this.dacPower = value & 0x9543;
            break;
        case 0x06:                      // Audio Control 3
            this.audioCtrl3 = (this.audioCtrl3 & 0x00c0) | (value & 0xf800);
            break;
        case 0x1b:                      // PLL Programmability 1
            this.pll[0] = value & 0xfffc;
            break;
        case 0x1c:                      // PLL Programmability 2
            this.pll[1] = value & 0xfffc;
            break;
        case 0x1d:                      // Audio Control 4
            this.fSoftStep = !(value & 0x4000);
            break;
        default:
            if (reg >= 0x07 && reg <= 0x1a) this.filterData[reg - 0x07] = value;
            break;
        }
    }

    /**
     * onReset()
     *
     * Called by the Machine device to provide notification of a reset event.
     *
     * @this {TSC2102}
     */
    onReset()
    {
        this.reset();
    }

    /**
     * onLoad(state)
     *
     * Automatically called by the Machine device if the machine's 'autoSave' property is true.
     *
     * @this {TSC2102}
     * @param {Array} state
     * @returns {boolean}
     */
    onLoad(state)
    {
        if (state && this.loadState(state[0])) {
            state.shift();
            return true;
        }
        return false;
    }

    /**
     * onSave(state)
     *
     * Automatically called by the Machine device before all other devices have been powered down (eg, during
     * a page unload event).
     *
     * @this {TSC2102}
     * @param {Array} state
     */
    onSave(state)
    {
        state.push(this.saveState());
    }

    /**
     * saveState()
     *
     * The pen is always saved as "up", since whatever was holding it down (eg, the mouse) is gone when the state
     * is restored; any conversion in progress (ie, the countdown of our timer) is saved, too.
     *
     * @this {TSC2102}
     * @returns {Array}
     */
    saveState()
    {
        return [
            this.idDevice, TSC2102.STATE_VERSION,
            this.x, this.y, this.fData, this.fRead, this.page, this.offset, this.pinFunc,
            this.fEnabled, this.fBusy, this.fHostMode, this.fPin, this.function, this.nextFunction,
            this.precision, this.nextPrecision, this.filter, this.ref, this.timing, this.noise, this.dav,
            this.audioCtrl1, this.audioCtrl2, this.audioCtrl3, this.pll, this.volume, this.dacPower, this.fSoftStep,
            this.filterData, this.time.aTimers[this.timer - 1].nCyclesLeft
        ];
    }

    /**
     * loadState(state)
     *
     * @this {TSC2102}
     * @param {Array} state
     * @returns {boolean}
     */
    loadState(state)
    {
        if (!state || state[0] != this.idDevice || state[1] != TSC2102.STATE_VERSION) {
            this.printf("TSC2102 state mismatch\n");
            return false;
        }
        [
            , , this.x, this.y, this.fData, this.fRead, this.page, this.offset, this.pinFunc,
            this.fEnabled, this.fBusy, this.fHostMode, this.fPin, this.function, this.nextFunction,
            this.precision, this.nextPrecision, this.filter, this.ref, this.timing, this.noise, this.dav,
            this.audioCtrl1, this.audioCtrl2, this.audioCtrl3, this.pll, this.volume, this.dacPower, this.fSoftStep,
            this.filterData, this.time.aTimers[this.timer - 1].nCyclesLeft
        ] = state;
        this.fPenDown = false;
        return true;
    }
}

TSC2102.PAGE = {
    DATA:       0,
    CONTROL:    1,
    AUDIO:      2
};

TSC2102.FUNCTION = {
    NO_SCAN:    0x0,
    XY_SCAN:    0x1,
    XYZ_SCAN:   0x2,
    X:          0x3,
    Y:          0x4,
    Z:          0x5,
    BAT1:       0x6,
    BAT2:       0x7,
    AUX:        0x8,
    AUX_SCAN:   0x9,
    TEMP1:      0xa,
    PORT_SCAN:  0xb,
    TEMP2:      0xc
};

/**
 * The "data available" bits that each function sets when its conversion is complete
 */
TSC2102.FUNCTION_DAV = [0x0000, 0x0600, 0x0780, 0x0400, 0x0200, 0x0180, 0x0040, 0x0030, 0x0010, 0x0010, 0x0004, 0x0070, 0x0002, 0x0000, 0x0000, 0x0000];

TSC2102.RESOLUTIONS = [12, 8, 10, 12];

TSC2102.STATE_VERSION = 1;              // the format of our saved state (see saveState())

TSC2102.CLASSES["TSC2102"] = TSC2102;
