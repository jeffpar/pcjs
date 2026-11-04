/**
 * @fileoverview Implements a minimal Socket.IO client device
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2026 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Device from "./device.js";

/**
 * @class SocketIO
 * @unrestricted
 */
export default class SocketIO extends Device {
    /**
     * SocketIO(idMachine, idDevice, config)
     *
     * This implements only the small subset of Engine.IO and Socket.IO required by serial terminal
     * services such as WeTTY: opening a namespace, responding to pings, and exchanging named events.
     *
     * @this {SocketIO}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        this.url = this.config['url'] || "";
        this.eventInput = this.config['eventInput'] || "input";
        this.eventOutput = this.config['eventOutput'] || "data";
        this.eventResize = this.config['eventResize'] || "resize";
        this.cols = this.config['cols'] || 80;
        this.rows = this.config['rows'] || 24;
        this.ackBytes = this.config['ackBytes'] || 262144;

        this.connection = this.sendData = null;
        this.socket = null;
        this.fConnected = false;
        this.sDataPending = "";
        this.cbReceived = 0;

        this['exports'] = {
            'connect': this.initConnection,
            'receiveData': this.receiveData,
            'receiveStatus': this.receiveStatus,
            'receiveBreak': this.receiveBreak
        };
    }

    /**
     * initConnection()
     *
     * The machine connection is expected to have the form "{sourcePort}->{socketDevice}".  Once
     * the source device has been found, its receiveData() export becomes the destination for all
     * output events received from the Socket.IO server.
     *
     * @this {SocketIO}
     */
    initConnection()
    {
        if (!this.connection) {
            let sConnection = this.getMachineConfig("connection");
            if (!sConnection) return;

            let asParts = sConnection.split('->');
            if (asParts.length != 2 || asParts[1].trim() != this.idDevice) return;

            let sSourceID = asParts[0].trim();
            this.connection = this.findDevice(sSourceID, false);
            let exports = this.connection && this.connection['exports'];
            this.sendData = exports && exports['receiveData'];
            if (!this.sendData) {
                this.connection = null;
                this.printf("Unable to establish connection: %s\n", sConnection);
                return;
            }
            this.printf("Connected %s.%s to %s\n", this.idMachine, this.idDevice, sSourceID);
        }
        if (!this.socket && this.url) this.openSocket();
    }

    /**
     * openSocket()
     *
     * @this {SocketIO}
     */
    openSocket()
    {
        let socket = this.socket = new WebSocket(this.url);
        socket.binaryType = "arraybuffer";

        socket.onmessage = (event) => {
            if (this.socket == socket && typeof event.data == "string") {
                let asPackets = event.data.split('\x1e');
                for (let sPacket of asPackets) this.receivePacket(sPacket);
            }
        };
        socket.onerror = () => {
            if (this.socket == socket) this.printf("Socket.IO connection error: %s\n", this.url);
        };
        socket.onclose = () => {
            if (this.socket == socket) {
                this.socket = null;
                this.fConnected = false;
                this.printf("Socket.IO connection closed: %s\n", this.url);
            }
        };
    }

    /**
     * closeSocket()
     *
     * @this {SocketIO}
     */
    closeSocket()
    {
        let socket = this.socket;
        this.socket = null;
        this.fConnected = false;
        if (socket) socket.close();
    }

    /**
     * receivePacket(sPacket)
     *
     * Engine.IO packets begin with a packet type.  A Socket.IO packet is carried inside an Engine.IO
     * message packet (type 4), so an event begins with "42" followed by its JSON-encoded argument list.
     *
     * @this {SocketIO}
     * @param {string} sPacket
     */
    receivePacket(sPacket)
    {
        if (!this.socket || !sPacket) return;

        switch(sPacket[0]) {
        case '0':
            this.socket.send("40");
            break;

        case '2':
            this.socket.send('3' + sPacket.substring(1));
            break;

        case '4':
            switch(sPacket[1]) {
            case '0':
                this.fConnected = true;
                this.sendEvent(this.eventResize, {cols: this.cols, rows: this.rows});
                if (this.sDataPending) {
                    let sData = this.sDataPending;
                    this.sDataPending = "";
                    this.sendEvent(this.eventInput, sData);
                }
                break;

            case '1':
                this.closeSocket();
                break;

            case '2':
                try {
                    let aEvent = JSON.parse(sPacket.substring(2));
                    if (aEvent[0] == this.eventOutput && typeof aEvent[1] == "string") {
                        this.receiveOutput(aEvent[1]);
                    }
                } catch(err) {
                    this.printf("Invalid Socket.IO event: %s\n", err.message);
                }
                break;

            case '4':
                this.printf("Socket.IO server rejected connection: %s\n", sPacket.substring(2));
                break;
            }
            break;
        }
    }

    /**
     * receiveOutput(sData)
     *
     * Deliver bytes individually so that serial devices can append them to any data already queued;
     * their string receive interface is commonly reserved for replacing test data still in progress.
     *
     * @this {SocketIO}
     * @param {string} sData
     */
    receiveOutput(sData)
    {
        for (let i = 0; i < sData.length; i++) {
            this.sendData.call(this.connection, sData.charCodeAt(i) & 0xff);
        }
        this.cbReceived += sData.length;
        if (this.cbReceived >= this.ackBytes) {
            this.cbReceived -= this.ackBytes;
            this.sendEvent("commit", this.ackBytes);
        }
    }

    /**
     * sendEvent(sName, data)
     *
     * @this {SocketIO}
     * @param {string} sName
     * @param {*} data
     * @returns {boolean}
     */
    sendEvent(sName, data)
    {
        if (this.socket && this.fConnected && this.socket.readyState == 1) {
            this.socket.send("42" + JSON.stringify([sName, data]));
            return true;
        }
        return false;
    }

    /**
     * receiveData(data)
     *
     * @this {SocketIO}
     * @param {number|string} data
     * @returns {boolean}
     */
    receiveData(data)
    {
        let sData = typeof data == "number"? String.fromCharCode(data & 0xff) : data;
        if (!this.sendEvent(this.eventInput, sData)) {
            this.sDataPending += sData;
        }
        return true;
    }

    /**
     * receiveStatus()
     *
     * @this {SocketIO}
     * @returns {boolean}
     */
    receiveStatus()
    {
        return true;
    }

    /**
     * receiveBreak()
     *
     * @this {SocketIO}
     * @returns {boolean}
     */
    receiveBreak()
    {
        return false;
    }

    /**
     * onPower(on)
     *
     * @this {SocketIO}
     * @param {boolean} on
     */
    onPower(on)
    {
        if (on) {
            this.initConnection();
        } else {
            this.closeSocket();
        }
    }
}

SocketIO.CLASSES["SocketIO"] = SocketIO;
