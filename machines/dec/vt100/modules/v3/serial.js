/**
 * @fileoverview Implements VT100 serial hardware
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Device  from "../../../../modules/v3/device.js";
import LED     from "../../../../modules/v3/led.js";
import MESSAGE from "../../../../modules/v3/message.js";

/**
 * @class VT100Serial
 * @unrestricted
 */
export default class VT100Serial extends Device {
    /**
     * VT100Serial(idMachine, idDevice, config)
     *
     * @this {VT100Serial}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        this.nIRQ = this.config['irq'] || 2;
        this.portBase = this.config['portBase'] || 0;

        this.time = /** @type {Time} */ (this.findDeviceByClass("Time"));
        this.ports = /** @type {Ports} */ (this.findDeviceByClass("Ports"));
        this.ports.addIOTable(this, VT100Serial.IOTABLE, this.portBase);

        /*
         * Whereas VT100Serial.LEDS maps bits to LED ID, this.leds maps bits to the actual LED devices.
         */
        this.leds = {};
        for (let bit in VT100Serial.LEDS) {
            this.leds[bit] = /** @type {LED} */ (this.findDevice(VT100Serial.LEDS[bit], false));
        }

        this.timerReceiveNext = this.time.addTimer(this.idDevice + ".receive", this.receiveData.bind(this));
        this.timerTransmitNext = this.time.addTimer(this.idDevice + ".transmit", this.transmitData.bind(this));

        /*
         * No connection until initConnection() is called.
         */
        this.sDataReceived = "";
        this.connection = this.sendData = this.updateStatus = null;

        /*
         * Export all functions required by initConnection().
         */
        this['exports'] = {
            'connect': this.initConnection,
            'receiveData': this.receiveData,
            'receiveStatus': this.receiveStatus
        };
        this.onReset();
    }

    /**
     * initConnection(fNullModem)
     *
     * If a machine 'connection' parameter exists of the form "{sourcePort}->{targetMachine}.{targetPort}",
     * and "{sourcePort}" matches our idDevice, then look for a component with id "{targetMachine}.{targetPort}".
     *
     * If the target component is found, then verify that it has exported functions with the following names:
     *
     *      receiveData(data): called when we have data to transmit; aliased internally to sendData(data)
     *      receiveStatus(pins): called when our control signals have changed; aliased internally to updateStatus(pins)
     *
     * For now, we're not going to worry about communication in the other direction, because when the target component
     * performs its own initConnection(), it will find our receiveData() and receiveStatus() functions, at which point
     * communication in both directions should be established, and the circle of life complete.
     *
     * For added robustness, if the target machine initializes much more slowly than we do, and our connection attempt
     * fails, that's OK, because when it finally initializes, its initConnection() will call our initConnection();
     * if we've already initialized, no harm done.
     *
     * @this {VT100Serial}
     * @param {boolean} [fNullModem] (caller's null-modem setting, to ensure our settings are in agreement)
     */
    initConnection(fNullModem)
    {
        if (!this.connection) {
            let sConnection = this.getMachineConfig("connection");
            if (sConnection) {
                let asParts = sConnection.split('->');
                if (asParts.length == 2) {
                    let sSourceID = asParts[0].trim();
                    if (sSourceID != this.idDevice) return;     // this connection string is intended for another instance
                    let sTargetID = asParts[1].trim();
                    this.connection = this.findDevice(sTargetID);
                    if (this.connection) {
                        let exports = this.connection['exports'];
                        if (exports) {
                            let fnConnect = /** @function */ (exports['connect']);
                            if (fnConnect) fnConnect.call(this.connection, this.fNullModem);
                            this.sendData = exports['receiveData'];
                            if (this.sendData) {
                                this.fNullModem = fNullModem;
                                this.updateStatus = exports['receiveStatus'];
                                this.printf("Connected %s.%s to %s\n", this.idMachine, sSourceID, sTargetID);
                                return;
                            }
                        }
                    }
                }
                this.printf("Unable to establish connection: %s\n", sConnection);
            }
        }
    }

    /**
     * loadState(state)
     *
     * Memory and Ports states are managed by the Bus onLoad() handler, which calls our loadState() handler.
     *
     * @this {VT100Serial}
     * @param {Array} state
     * @returns {boolean}
     */
    loadState(state)
    {
        let idDevice = state.shift();
        if (this.idDevice == idDevice) {
            this.fReady     = state.shift();
            this.bDataIn    = state.shift();
            this.bDataOut   = state.shift();
            this.bStatus    = state.shift();
            this.bMode      = state.shift();
            this.bCommand   = state.shift();
            this.bBaudRates = state.shift();
            return true;
        }
        return false;
    }

    /**
     * saveState(state)
     *
     * Memory and Ports states are managed by the Bus onSave() handler, which calls our saveState() handler.
     *
     * @this {VT100Serial}
     * @param {Array} state
     */
    saveState(state)
    {
        state.push(this.idDevice);
        state.push(this.fReady);
        state.push(this.bDataIn);
        state.push(this.bDataOut);
        state.push(this.bStatus);
        state.push(this.bMode);
        state.push(this.bCommand);
        state.push(this.bBaudRates);
    }

    /**
     * onPower(on)
     *
     * Called by the Machine device to provide notification of a power event.
     *
     * @this {VT100Serial}
     * @param {boolean} on (true to power on, false to power off)
     */
    onPower(on)
    {
        if (!this.cpu) {
            this.cpu = /** @type {CPUx80} */ (this.findDeviceByClass("CPU"));
            /*
             * This is as late as we can currently wait to make our first inter-machine connection attempt;
             * even so, the target machine's initialization process may still be ongoing, so any connection
             * may be not fully resolved until the target machine performs its own initConnection(), which will
             * in turn invoke our initConnection() again.
             */
            this.initConnection(this.fNullModem);
        }
    }

    /**
     * onReset()
     *
     * Called by the Machine device to provide notification of a reset event.
     *
     * @this {VT100Serial}
     */
    onReset()
    {
        this.fReady = false;
        this.bDataIn = 0;
        this.bDataOut = 0;
        this.bStatus = VT100Serial.UART8251.STATUS.INIT;
        this.bMode = VT100Serial.UART8251.MODE.INIT;
        this.bCommand = VT100Serial.UART8251.COMMAND.INIT;
        this.bBaudRates = VT100Serial.UART8251.BAUDRATES.INIT;
        this.updateLEDs();
    }

    /**
     * getBaudTimeout(maskRate)
     *
     * @this {VT100Serial}
     * @param {number} maskRate (either VT100Serial.UART8251.BAUDRATES.RECV_RATE or VT100Serial.UART8251.BAUDRATES.XMIT_RATE)
     * @returns {number} (number of milliseconds per byte)
     */
    getBaudTimeout(maskRate)
    {
        let indexRate = (this.bBaudRates & maskRate);
        if (!(maskRate & 0xf)) indexRate >>= 4;
        let nBaud = VT100Serial.UART8251.BAUDTABLE[indexRate];
        let nBits = ((this.bMode & VT100Serial.UART8251.MODE.DATA_BITS) >> 2) + 6;   // includes an extra +1 for start bit
        if (this.bMode & VT100Serial.UART8251.MODE.PARITY_ENABLE) nBits++;
        nBits += ((((this.bMode & VT100Serial.UART8251.MODE.STOP_BITS) >> 6) + 1) >> 1);
        let nBytesPerSecond = nBaud / nBits;
        return (1000 / nBytesPerSecond)|0;
    }

    /**
     * isTransmitterReady()
     *
     * Called when someone needs the UART's transmitter status.
     *
     * @this {VT100Serial}
     * @returns {boolean} (true if ready, false if not)
     */
    isTransmitterReady()
    {
        return !!(this.bStatus & VT100Serial.UART8251.STATUS.XMIT_READY);
    }

    /**
     * receiveByte(b)
     *
     * @this {VT100Serial}
     * @param {number} b
     * @returns {boolean}
     */
    receiveByte(b)
    {
        this.printf(MESSAGE.SERIAL, "receiveByte(%#04x): status=%#04x\n", b, this.bStatus);
        if (!this.fAutoStop && !(this.bStatus & VT100Serial.UART8251.STATUS.RECV_FULL)) {
            if (this.cpu) {
                this.bDataIn = b;
                this.bStatus |= VT100Serial.UART8251.STATUS.RECV_FULL;
                this.cpu.requestINTR(this.nIRQ);
                return true;
            }
        }
        return false;
    }

    /**
     * receiveData(data)
     *
     * Helper for clocking received data at the expected RECV_RATE.
     *
     * When we're cramming test data down the terminal's throat, that data will typically be in the form
     * of a string.  When we're called by another component, data will typically be a number (ie, byte).  If no
     * data is specified at all, then all we do is "clock" any remaining data into the receiver.
     *
     * @this {VT100Serial}
     * @param {number|string|undefined} [data]
     * @returns {boolean} true if received, false if not
     */
    receiveData(data)
    {
        if (data != null) {
            if (typeof data != "number") {
                this.sDataReceived = data;
            } else {
                this.sDataReceived += String.fromCharCode(data);
            }
        }
        if (this.sDataReceived) {
            if (this.receiveByte(this.sDataReceived.charCodeAt(0))) {
                this.sDataReceived = this.sDataReceived.substr(1);
            }
            if (this.sDataReceived) {
                this.time.setTimer(this.timerReceiveNext, this.getBaudTimeout(VT100Serial.UART8251.BAUDRATES.RECV_RATE));
            }
        }
        return true;                // for now, return true regardless, since we're buffering everything anyway
    }

    /**
     * receiveStatus(pins)
     *
     * NOTE: Prior to the addition of this interface, the DSR bit was initialized set and remained set for the life
     * of the machine.  It is entirely appropriate that this is the only way the bit can be changed, because it represents
     * an external control signal.
     *
     * @this {VT100Serial}
     * @param {number} pins
     */
    receiveStatus(pins)
    {
        this.bStatus &= ~VT100Serial.UART8251.STATUS.DSR;
        if (pins & VT100Serial.RS232.DSR.MASK) this.bStatus |= VT100Serial.UART8251.STATUS.DSR;
    }

    /**
     * transmitByte(b)
     *
     * @this {VT100Serial}
     * @param {number} b
     * @returns {boolean} true if transmitted, false if not
     */
    transmitByte(b)
    {
        let fTransmitted = false;
        this.printf(MESSAGE.SERIAL, "transmitByte(%#04x)\n", b);
        if (this.fAutoXOFF) {
            if (b == 0x13) {        // XOFF
                this.fAutoStop = true;
                return false;
            }
            if (b == 0x11) {        // XON
                this.fAutoStop = false;
                return false;
            }
        }
        if (this.sendData && this.sendData.call(this.connection, b)) {
            fTransmitted = true;
        }
        return fTransmitted;
    }

    /**
     * transmitData(sData)
     *
     * Helper for clocking transmitted data at the expected XMIT_RATE.
     *
     * When timerTransmitNext fires, we have honored the programmed XMIT_RATE period, so we can
     * set XMIT_READY (and XMIT_EMPTY), which signals the firmware that another byte can be transmitted.
     *
     * The sData parameter is not used when we're called via the timer; it's an optional parameter used by
     * the Keyboard component to deliver data pasted via the clipboard, and is currently only useful when
     * the VT100Serial is connected to another machine.  TODO: Define a separate interface for that feature.
     *
     * @this {VT100Serial}
     * @param {string} [sData]
     * @returns {boolean} true if successful, false if not
     */
    transmitData(sData)
    {
        this.bStatus |= (VT100Serial.UART8251.STATUS.XMIT_READY | VT100Serial.UART8251.STATUS.XMIT_EMPTY);
        if (sData) {
            return this.sendData? this.sendData.call(this.connection, sData) : false;
        }
        return true;
    }

    /**
     * inData(port)
     *
     * @this {VT100Serial}
     * @param {number} port (0x0)
     * @returns {number} simulated port value
     */
    inData(port)
    {
        let value = this.bDataIn;
        this.printf(MESSAGE.SERIAL + MESSAGE.PORTS, "inData(%#04x): %#04x\n", port, value);
        this.bStatus &= ~VT100Serial.UART8251.STATUS.RECV_FULL;
        return value;
    }

    /**
     * inStatus(port)
     *
     * @this {VT100Serial}
     * @param {number} port (0x1)
     * @returns {number} simulated port value
     */
    inStatus(port)
    {
        let value = this.bStatus;
        this.printf(MESSAGE.SERIAL + MESSAGE.PORTS, "inStatus(%#04x): %#04x\n", port, value);
        return value;
    }

    /**
     * outData(port, bOut)
     *
     * @this {VT100Serial}
     * @param {number} port (0x0)
     * @param {number} value
     */
    outData(port, value)
    {
        this.printf(MESSAGE.SERIAL + MESSAGE.PORTS, "outData(%#04x): %#04x\n", port, value);
        this.bDataOut = value;
        this.bStatus &= ~(VT100Serial.UART8251.STATUS.XMIT_READY | VT100Serial.UART8251.STATUS.XMIT_EMPTY);
        /*
         * If we're transmitting to a virtual device that has no measurable delay, this code may clear XMIT_READY
         * too quickly:
         *
         *      if (this.transmitByte(bOut)) {
         *          this.bStatus |= (VT100Serial.UART8251.STATUS.XMIT_READY | VT100Serial.UART8251.STATUS.XMIT_EMPTY);
         *      }
         *
         * A better solution is to arm a timer based on the XMIT_RATE baud rate, and clear the above bits when that
         * timer fires.  Consequently, we no longer care what transmitByte() reports.
         */
        this.transmitByte(value);
        this.time.setTimer(this.timerTransmitNext, this.getBaudTimeout(VT100Serial.UART8251.BAUDRATES.XMIT_RATE));
    }

    /**
     * outControl(port, value)
     *
     * Writes to the CONTROL port (0x1) are either MODE or COMMAND bytes.  If the device has just
     * been powered or reset, it is in a "not ready" state and is waiting for a MODE byte.  Once it
     * has received that initial byte, the device is marked "ready", and all further bytes are
     * interpreted as COMMAND bytes (until/unless a COMMAND byte with the INTERNAL_RESET bit is set).
     *
     * @this {VT100Serial}
     * @param {number} port (0x1)
     * @param {number} value
     */
    outControl(port, value)
    {
        this.printf(MESSAGE.SERIAL + MESSAGE.PORTS, "outControl(%#04x): %#04x\n", port, value);
        if (!this.fReady) {
            this.bMode = value;
            this.fReady = true;
        } else {
            /*
             * Whenever DTR or RTS changes, we also want to notify any connected machine, via updateStatus().
             */
            if (this.updateStatus) {
                let delta = (value ^ this.bCommand);
                if (delta & (VT100Serial.UART8251.COMMAND.RTS | VT100Serial.UART8251.COMMAND.DTR)) {
                    let pins = 0;
                    if (this.fNullModem) {
                        pins |= (value & VT100Serial.UART8251.COMMAND.RTS)? VT100Serial.RS232.CTS.MASK : 0;
                        pins |= (value & VT100Serial.UART8251.COMMAND.DTR)? (VT100Serial.RS232.DSR.MASK | VT100Serial.RS232.CD.MASK): 0;
                    } else {
                        pins |= (value & VT100Serial.UART8251.COMMAND.RTS)? VT100Serial.RS232.RTS.MASK : 0;
                        pins |= (value & VT100Serial.UART8251.COMMAND.DTR)? VT100Serial.RS232.DTR.MASK : 0;
                    }
                    this.updateStatus.call(this.connection, pins);
                }
            }
            this.updateLEDs(value, this.bCommand);
            this.bCommand = value;
            if (this.bCommand & VT100Serial.UART8251.COMMAND.INTERNAL_RESET) {
                this.fReady = false;
            }
        }
    }

    /**
     * outBaudRates(port, value)
     *
     * @this {VT100Serial}
     * @param {number} port (0x2)
     * @param {number} value
     */
    outBaudRates(port, value)
    {
        this.printf(MESSAGE.SERIAL + MESSAGE.PORTS, "outBaudRates(%#04x): %#04x\n", port, value);
        this.bBaudRates = value;
    }

    /**
     * updateLEDs(value, previous)
     *
     * @this {VT100Serial}
     * @param {number} [value] (if not provided, all LEDS are turned off)
     * @param {number} [previous] (if not provided, all LEDs are updated)
     */
    updateLEDs(value, previous)
    {
        for (let id in this.leds) {
            let led = this.leds[id];
            if (!led) continue;
            let bit = +id, on, changed = 1, redraw = 1;
            if (value != undefined) {
                if (!(bit & (bit - 1))) {       // if a single bit is set, this will be zero
                    on = value & bit;           // and "on" will be true if that single bit is set
                } else {
                    bit = ~bit & 0xff;          // otherwise, we assume that a single bit is clear
                    on = !(value & bit);        // so "on" will be true if that same single bit is clear
                }
                if (previous != undefined) {
                    changed = (value ^ previous) & bit;
                    redraw = 0;
                }
            }
            if (changed) {                      // call setLEDState() only if the bit changed
                led.setLEDState(0, 0, on? LED.STATE.ON : LED.STATE.OFF);
                if (redraw) led.drawBuffer();
            }
        }
    }
}

VT100Serial.UART8251 = {
    /*
     * Format of MODE byte written to CONTROL port 0x1
     */
    MODE: {
        BAUD_FACTOR:    0x03,       // 00=SYNC, 01=1x, 10=16x, 11=64x
        DATA_BITS:      0x0C,       // 00=5, 01=6, 10=7, 11=8
        PARITY_ENABLE:  0x10,
        EVEN_PARITY:    0x20,
        STOP_BITS:      0xC0,       // 00=invalid, 01=1, 10=1.5, 11=2
        INIT:           0x8E        // 16x baud rate, 8 data bits, no parity, 1.5 stop bits
    },
    /*
     * Format of COMMAND byte written to CONTROL port 0x1
     */
    COMMAND: {
        XMIT_ENABLE:    0x01,
        DTR:            0x02,       // Data Terminal Ready
        RECV_ENABLE:    0x04,
        SEND_BREAK:     0x08,
        ERROR_RESET:    0x10,
        RTS:            0x20,       // Request To Send
        INTERNAL_RESET: 0x40,
        HUNT_MODE:      0x80,
        INIT:           0x27        // XMIT_ENABLE | DTR | RECV_ENABLE | RTS
    },
    /*
     * Format of STATUS byte read from CONTROL port 0x1
     */
    STATUS: {
        XMIT_READY:     0x01,
        RECV_FULL:      0x02,
        XMIT_EMPTY:     0x04,
        PARITY_ERROR:   0x08,
        OVERRUN_ERROR:  0x10,
        FRAMING_ERROR:  0x20,
        BREAK_DETECT:   0x40,
        DSR:            0x80,       // Data Set Ready
        INIT:           0x85        // XMIT_READY | XMIT_EMPTY | DSR
    },
    /*
     * Format of BAUDRATES byte written to port 0x2
     *
     * Each nibble is an index (0x0-0xF) into a set of internal CPU clock divisors that yield the
     * following baud rates:
     *
     *      Index   Divisor     Baud Rate
     *      -----   -------     ---------
     *      0x0      3456       50
     *      0x1      2304       75
     *      0x2      1571       110
     *      0x3      1285       134.5
     *      0x4      1152       150
     *      0x5      864        200
     *      0x6      576        300
     *      0x7      288        600
     *      0x8      144        1200
     *      0x9      96         1800
     *      0xA      86         2000
     *      0xB      72         2400
     *      0xC      48         3600
     *      0xD      36         4800
     *      0xE      18         9600    (default)
     *      0xF      9          19200
     *
     * NOTE: This is a VT100-specific port and baud rate table.
     */
    BAUDRATES: {
        RECV_RATE:      0x0F,
        XMIT_RATE:      0xF0,
        INIT:           0xEE    // default to 9600 (0xE) for both XMIT and RECV
    },
    BAUDTABLE: [
        50, 75, 110, 134.5, 150, 200, 300, 600, 1200, 1800, 2000, 2400, 3600, 4800, 9600, 19200
    ]
};

VT100Serial.LEDS = {
    [VT100Serial.UART8251.COMMAND.DTR]:  "ledDTR",
    [VT100Serial.UART8251.COMMAND.RTS]:  "ledRTS"
};

VT100Serial.IOTABLE = {
    0x0: [VT100Serial.prototype.inData, VT100Serial.prototype.outData],
    0x1: [VT100Serial.prototype.inStatus, VT100Serial.prototype.outControl],
    0x2: [null, VT100Serial.prototype.outBaudRates]
};

VT100Serial.CLASSES["VT100Serial"] = VT100Serial;
