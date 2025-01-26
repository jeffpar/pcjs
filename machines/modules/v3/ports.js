/**
 * @fileoverview Implements I/O ports
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Memory  from "./memory.js";
import MESSAGE from "./message.js";

/**
 * @typedef {Config} PortsConfig
 * @property {number} [addr]
 * @property {number} size
 */

/**
 * @class Ports
 * @unrestricted
 * @property {PortsConfig} config
 * @property {number} addr
 * @property {number} size
 * @property {number} type
 * @property {Array.<function(number)>} aInData
 * @property {Array.<function(number,number)>} aOutData
 * @property {Array.<function(number,boolean)>} aInPair
 * @property {Array.<function(number,number)>} aOutPair
 */
export default class Ports extends Memory {
    /**
     * Ports(idMachine, idDevice, config)
     *
     * @this {Ports}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {PortsConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);
        this.aInData = [];
        this.aOutData = [];
        this.aInPair = [];
        this.aOutPair = [];
        /**
         * Some machines instantiate a Ports device through their configuration, which must include an 'addr';
         * it's also possible that a device may dynamically allocate a Ports device and add it to the Bus itself
         * (eg, the PDP11 IOPage).
         */
        if (this.config['addr'] != undefined) {
            this.bus.addBlocks(this.config['addr'], this.config['size'], Memory.TYPE.NONE, this);
        }
    }

    /**
     * addIOHandlers(device, portLo, portHi, inData, outData, inPair, outPair)
     *
     * @this {Ports}
     * @param {Device} device
     * @param {number} portLo
     * @param {number} portHi
     * @param {function(number)|null} [inData]
     * @param {function(number,number)|null} [outData]
     * @param {function(number,boolean)|null} [inPair]
     * @param {function(number,number)|null} [outPair]
     */
    addIOHandlers(device, portLo, portHi, inData, outData, inPair, outPair)
    {
        let port, success;
        for (port = portLo; port <= portHi; port++) {
            success = false;
            if (inData) {
                if (this.aInData[port]) break;
                this.aInData[port] = inData.bind(device);
            }
            if (outData) {
                if (this.aOutData[port]) break;
                this.aOutData[port] = outData.bind(device);
            }
            if (inPair) {
                if (this.aInPair[port]) break;
                this.aInPair[port] = inPair.bind(device);
            }
            if (outPair) {
                if (this.aOutPair[port]) break;
                this.aOutPair[port] = outPair.bind(device);
            }
            success = true;
        }
        if (!success) {
            throw new Error(this.sprintf("handler for port %#0x already exists", port));
        }
    }

    /**
     * addIOTable(device, table, portBase)
     *
     * @this {Ports}
     * @param {Device} device
     * @param {Object} table
     * @param {number} [portBase]
     */
    addIOTable(device, table, portBase = 0)
    {
        for (let port in table) {
            let handlers = table[port];
            this.addIOHandlers(device, +port + portBase, +port + portBase, handlers[0], handlers[1], handlers[2], handlers[3]);
        }
    }

    /**
     * readNone(offset)
     *
     * This overrides the default readNone() function, which is the default handler for all I/O ports.
     *
     * @this {Ports}
     * @param {number} offset
     * @returns {number}
     */
    readNone(offset)
    {
        let func, port = this.addr + offset, value, read;
        if ((func = this.aInData[port])) {
            value = func(port);
            read = true;
        }
        else if ((func = this.aInPair[port])) {
            if (!(port & 0x1)) {
                value = func(port) & this.dataLimit;
                read = true;
            } else {
                value = func(port & ~0x1) >> this.dataWidth;
                read = true;
            }
        }
        else if (port & 0x1) {
            port &= ~0x1;
            if ((func = this.aInPair[port])) {
                value = func(port) >> this.dataWidth;
                read = true;
            }
            else if ((func = this.aInData[port])) {
                value = func(port);
                read = true;
            }
        }
        if (!read) {
            this.bus.fault(port, 0);
            this.printf(MESSAGE.PORTS + MESSAGE.MISC, "readNone(%#04x): unknown port\n", port);
            value = super.readNone(offset);
        }
        return value;
    }

    /**
     * writeNone(offset, value)
     *
     * This overrides the default writeNone() function, which is the default handler for all I/O ports.
     *
     * @this {Ports}
     * @param {number} offset
     * @param {number} value
     */
    writeNone(offset, value)
    {
        let func, port = this.addr + offset, written;
        if ((func = this.aOutData[port])) {
            func(port, value);
            written = true;
        }
        else if ((func = this.aOutPair[port])) {
            /**
             * If an outPair() handler exists, call the inPair() handler first to get the original data
             * (with preWrite set to true) and call outPair() with the new data inserted into the original data.
             */
            let data = this.aInPair[port]? this.aInPair[port](port, true) : 0;
            if (!(port & 0x1)) {
                func(port, (data & ~this.dataLimit) | value);
                written = true;
            } else {
                func(port, (data & this.dataLimit) | (value << this.dataWidth));
                written = true;
            }
        }
        else if (port & 0x1) {
            port &= ~0x1;
            if ((func = this.aOutPair[port])) {
                let data = this.aInPair[port]? this.aInPair[port](port, true) : 0;
                func(port, (data & this.dataLimit) | (value << this.dataWidth));
                written = true;
            }
            else if ((func = this.aOutData[port])) {
                func(port, value);
                written = true;
            }
        }
        if (!written) {
            this.bus.fault(port, 1);
            this.printf(MESSAGE.PORTS + MESSAGE.MISC, "writeNone(%#04x,%#04x): unknown port\n", port, value);
            super.writeNone(offset, value);
        }
    }
}

Ports.CLASSES["Ports"] = Ports;
