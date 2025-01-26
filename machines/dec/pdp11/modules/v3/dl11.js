/**
 * @fileoverview Implements PDP-11 serial devices (eg, DL11)
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * Portions adapted from the JavaScript PDP 11/70 Emulator written by Paul Nankervis
 * <paulnank@hotmail.com> at <http://skn.noip.me/pdp11/pdp11.html> with permission.
 */

import PDP11   from "./pdp11.js";
import Device  from "../../../../modules/v3/device.js";
import MESSAGE from "../../../../modules/v3/message.js";

MESSAGE.DL11            = 0x000010000000;
MESSAGE.NAMES["dl11"]   = MESSAGE.DL11;

/**
 * @class DL11
 * @unrestricted
 */
export default class DL11 extends Device {
    /**
     * DL11(idMachine, idDevice, config)
     *
     * @this {DL11}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        this.nBaudReceive = +this.config['baudReceive'] || PDP11.DL11.RCSR.BAUD;
        this.nBaudTransmit = +this.config['baudTransmit'] || PDP11.DL11.XCSR.BAUD;

        this.time = /** @type {Time} */ (this.findDeviceByClass("Time"));
        this.timerReceiveNext = this.time.addTimer(this.idDevice + ".receive", this.receiveData.bind(this));
        this.timerTransmitNext = this.time.addTimer(this.idDevice + ".transmit", this.transmitData.bind(this));

        this.ports = /** @type {Ports} */ (this.findDeviceByClass("IOPage"));
        this.ports.addIOTable(this, DL11.IOTABLE);

        /**
         * No connection until initConnection() is called.
         */
        this.sDataReceived = "";
        this.connection = this.sendData = this.updateStatus = null;

        /**
         * Export all functions required by initConnection().
         */
        this['exports'] = {
            'connect': this.initConnection,
            'receiveData': this.receiveData,
            'receiveStatus': this.receiveStatus,
            'setConnection': this.setConnection
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
     * @this {DL11}
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
     * @this {DL11}
     * @param {Array} state
     * @returns {boolean}
     */
    loadState(state)
    {
        let idDevice = state.shift();
        if (this.idDevice == idDevice) {
            this.regRBUF    = state.shift();
            this.regRCSR    = state.shift();
            this.regXCSR    = state.shift();
            this.abReceive  = state.shift();
            return true;
        }
        return false;
    }

    /**
     * saveState(state)
     *
     * Memory and Ports states are managed by the Bus onSave() handler, which calls our saveState() handler.
     *
     * @this {DL11}
     * @param {Array} state
     */
    saveState(state)
    {
        state.push(this.idDevice);
        state.push(this.regRBUF);
        state.push(this.regRCSR);
        state.push(this.regXCSR);
        state.push(this.abReceive);
    }

    /**
     * onPower(on)
     *
     * Called by the Machine device to provide notification of a power event.
     *
     * @this {DL11}
     * @param {boolean} on (true to power on, false to power off)
     */
    onPower(on)
    {
        if (!this.cpu) {
            this.cpu = /** @type {PDP11} */ (this.findDeviceByClass("CPU"));
            this.irqReceiver = this.cpu.addIRQ(this.iAdapter? -1 : PDP11.DL11.RVEC, PDP11.DL11.PRI, MESSAGE.SERIAL);
            this.irqTransmitter = this.cpu.addIRQ(this.iAdapter? -1 : PDP11.DL11.XVEC, PDP11.DL11.PRI, MESSAGE.SERIAL);
        }
    }

    /**
     * onReset()
     *
     * Called by the Machine device to provide notification of a reset event.
     *
     * @this {DL11}
     */
    onReset()
    {
        this.regRBUF = 0;
        this.regRCSR = PDP11.DL11.RCSR.CTS;
        this.regXCSR = PDP11.DL11.XCSR.READY;
        this.abReceive = [];
    }

    /**
     * getBaudTimeout(nBaud)
     *
     * Based on the selected baud rate (nBaud), convert that rate into a millisecond delay.
     *
     * @this {DL11}
     * @param {number} nBaud
     * @returns {number} (number of milliseconds per byte)
     */
    getBaudTimeout(nBaud)
    {
        /**
         * TODO: Do a better job computing this, based on actual numbers of start, stop and parity bits,
         * instead of hard-coding the total number of bits per byte to 10.
         */
        let nBytesPerSecond = Math.round(nBaud / 10);
        return 1000 / nBytesPerSecond;
    }

    /**
     * receiveByte(b)
     *
     * @this {DL11}
     * @param {number} b
     * @returns {boolean}
     */
    receiveByte(b)
    {
        this.printf(MESSAGE.SERIAL, "receiveByte(%#04x)\n", b);
        if (!this.fAutoStop) {
            this.regRBUF = b;
            if (!(this.regRCSR & PDP11.DL11.RCSR.RD)) {
                this.regRCSR |= PDP11.DL11.RCSR.RD;
            } else {
                this.regRBUF |= PDP11.DL11.RBUF.OE | PDP11.DL11.RBUF.ERROR;
            }
            if (this.regRCSR & PDP11.DL11.RCSR.RIE) {
                this.cpu.setIRQ(this.irqReceiver);
            }
            return true;
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
     * @this {DL11}
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
                this.time.setTimer(this.timerReceiveNext, this.getBaudTimeout(this.nBaudReceive));
            }
        }
        return true;                // for now, return true regardless, since we're buffering everything anyway
    }

    /**
     * receiveStatus(pins)
     *
     * @this {DL11}
     * @param {number} pins
     */
    receiveStatus(pins)
    {
        let oldRCSR = this.regRCSR;
        this.regRCSR &= ~(PDP11.DL11.RCSR.CTS | PDP11.DL11.RCSR.CD);
        if (pins & DL11.RS232.CTS.MASK) {
            this.regRCSR |= PDP11.DL11.RCSR.CTS;
        }
        if (pins & DL11.RS232.CD.MASK) {
            this.regRCSR |= PDP11.DL11.RCSR.CD;
        }
        if (oldRCSR != this.regRCSR) {
            this.regRCSR |= PDP11.DL11.RCSR.DSC;
            if (this.regRCSR & PDP11.DL11.RCSR.DIE) {
                this.cpu.setIRQ(this.irqReceiver);
            }
        }
    }

    /**
     * setConnection(device, func)
     *
     * @this {DL11}
     * @param {Device|null} device
     * @param {function(number)} func
     * @returns {boolean}
     */
    setConnection(device, func)
    {
        if (!this.connection) {
            this.connection = device;
            this.sendData = func;
            return true;
        }
        return false;
    }

    /**
     * transmitByte(b)
     *
     * @this {DL11}
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
        /**
         * NOTE: When debugging issues involving the SerialPort, such as debugging code between a pair of
         * transmitted bytes, you can pass 0 instead of getBaudTimeout() to setTimer() to minimize the amount
         * of time spent waiting for XCSR.READY to be set again.
         */
        this.cpu.setTimer(this.timerTransmitNext, this.getBaudTimeout(this.nBaudTransmit));
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
     * the DL11 is connected to another machine.  TODO: Define a separate interface for that feature.
     *
     * @this {DL11}
     * @param {string} [sData]
     * @returns {boolean} true if successful, false if not
     */
    transmitData(sData)
    {
        let success = true;
        this.regXCSR |= PDP11.DL11.XCSR.READY;
        if (this.regXCSR & PDP11.DL11.XCSR.TIE) {
            this.cpu.setIRQ(this.irqTransmitter);
        }
        if (sData) {
            success = this.sendData? this.sendData.call(this.connection, sData) : false;
        }
        return success;
    }

    /**
     * readRCSR(addr)
     *
     * @this {DL11}
     * @param {number} addr (eg, PDP11.UNIBUS.RCSR or 177560)
     * @returns {number}
     */
    readRCSR(addr)
    {
        let data = this.regRCSR & PDP11.DL11.RCSR.RMASK;
        this.regRCSR &= ~PDP11.DL11.RCSR.DSC;
        return data;
    }

    /**
     * writeRCSR(data, addr)
     *
     * @this {DL11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.RCSR or 177560)
     */
    writeRCSR(data, addr)
    {
        let delta = (data ^ this.regRCSR);
        this.regRCSR = (this.regRCSR & ~PDP11.DL11.RCSR.WMASK) | (data & PDP11.DL11.RCSR.WMASK);
        /**
         * Whenever DTR or RTS changes, we also want to notify any connected machine, via updateStatus().
         */
        if (this.updateStatus) {
            if (delta & PDP11.DL11.RCSR.RS232) {
                let pins = 0;
                if (this.fNullModem) {
                    pins |= (data & PDP11.DL11.RCSR.RTS)? DL11.RS232.CTS.MASK : 0;
                    pins |= (data & PDP11.DL11.RCSR.DTR)? (DL11.RS232.DSR.MASK | DL11.RS232.CD.MASK): 0;
                } else {
                    pins |= (data & PDP11.DL11.RCSR.RTS)? DL11.RS232.RTS.MASK : 0;
                    pins |= (data & PDP11.DL11.RCSR.DTR)? DL11.RS232.DTR.MASK : 0;
                }
                this.updateStatus.call(this.connection, pins);
            }
        }
    }

    /**
     * readRBUF(addr)
     *
     * @this {DL11}
     * @param {number} addr (eg, PDP11.UNIBUS.RBUF or 177562)
     * @returns {number}
     */
    readRBUF(addr)
    {
        this.regRCSR &= ~PDP11.DL11.RCSR.RD;
        return this.regRBUF;
    }

    /**
     * writeRBUF(data, addr)
     *
     * @this {DL11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.RBUF or 177562)
     */
    writeRBUF(data, addr)
    {
    }

    /**
     * readXCSR(addr)
     *
     * @this {DL11}
     * @param {number} addr (eg, PDP11.UNIBUS.XCSR or 177564)
     * @returns {number}
     */
    readXCSR(addr)
    {
        return this.regXCSR;
    }

    /**
     * writeXCSR(data, addr)
     *
     * @this {DL11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.XCSR or 177564)
     */
    writeXCSR(data, addr)
    {
        /**
         * If the device is READY, and TIE is being set, then request a hardware interrupt.
         *
         * Conversely, if TIE is being cleared, remove the request; this resolves a problem within
         * MAINDEC TEST 15, where the Transmitter Interrupt Enable (TIE) bit is cleared, set, and cleared
         * in rapid succession, with the expectation that NO interrupt will be generated.  Note that
         * this fix also requires a complementary change in setIRQ(), to request hardware interrupts with
         * IRQ_DELAY rather than IRQ.
         */
        if (this.regXCSR & PDP11.DL11.XCSR.READY) {
            if (data & PDP11.DL11.XCSR.TIE) {
                this.cpu.setIRQ(this.irqTransmitter);
            } else {
                this.cpu.clearIRQ(this.irqTransmitter);
            }
        }
        this.regXCSR = (this.regXCSR & ~PDP11.DL11.XCSR.WMASK) | (data & PDP11.DL11.XCSR.WMASK);
    }

    /**
     * readXBUF(addr)
     *
     * @this {DL11}
     * @param {number} addr (eg, PDP11.UNIBUS.XBUF or 177566)
     * @returns {number}
     */
    readXBUF(addr)
    {
        return 0;
    }

    /**
     * writeXBUF(data, addr)
     *
     * @this {DL11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.XBUF or 177566)
     */
    writeXBUF(data, addr)
    {
        this.transmitByte(data & PDP11.DL11.XBUF.DATA);
        this.regXCSR &= ~PDP11.DL11.XCSR.READY;
    }
}

DL11.IOTABLE = {
    [PDP11.UNIBUS.RCSR]:    /* 177560 */    [null, null, DL11.prototype.readRCSR,   DL11.prototype.writeRCSR,   "RCSR"],
    [PDP11.UNIBUS.RBUF]:    /* 177562 */    [null, null, DL11.prototype.readRBUF,   DL11.prototype.writeRBUF,   "RBUF"],
    [PDP11.UNIBUS.XCSR]:    /* 177564 */    [null, null, DL11.prototype.readXCSR,   DL11.prototype.writeXCSR,   "XCSR"],
    [PDP11.UNIBUS.XBUF]:    /* 177566 */    [null, null, DL11.prototype.readXBUF,   DL11.prototype.writeXBUF,   "XBUF"]
};

DL11.CLASSES["DL11"] = DL11;
