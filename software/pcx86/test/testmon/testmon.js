#!/usr/bin/env node
/**
 * @fileoverview Node-based Test Monitor
 * @author <a href="mailto:Jeff@pcjs.org">Jeff Parsons</a>
 * @copyright © 2012-2025 Jeff Parsons
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs from "fs";
import path from "path";
import { SerialPort } from "serialport";

import Keys from "../../../../machines/modules/v2/keys.js";
import Str from "../../../../machines/modules/v2/strlib.js";
import TestMonitor from "../../../../machines/pcx86/modules/v2/testmon.js";
import pcjslib from "../../../../tools/modules/pcjslib.js";

var Machines = JSON.parse(fs.readFileSync("../../../../machines/machines.json", "utf8"));

var fDebug = false;
var argv = pcjslib.getArgs()[1];

var baudRate = 2400;
var rts_cts = true;

if (argv['debug'] !== undefined) {
    fDebug = argv['debug'];
}
if (argv['baud'] !== undefined) {
    baudRate = +argv['baud'];
    console.log("opening with baudRate " + baudRate);
}
if (global.DEBUG !== undefined) {
    global.DEBUG = fDebug;
}
if (global.APPVERSION !== undefined) {
    global.APPVERSION = Machines['shared']['version'];
}

/**
 * The PortController class mimics the PCx86 TestController class, providing wrappers around Node's SerialPort
 * interfaces that are compatible with the PCx86 TestMonitor module.
 *
 * @class PortController
 */
class PortController {
    /**
     * PortController()
     *
     * @this {PortController}
     * @param {string} path
     * @param {Object} options
     */
    constructor(path, options)
    {
        let controller = this;
        this.port = new SerialPort(path, options);

        this.port.on('data', function(data) {
            controller.receiveData(data);
        });

        // this.port.on('open', function() {
        //     console.log("Connected to: ",controller.port.path);
        //     controller.port.get(function(error, status){
        //         console.log('get() results:');
        //         console.log(error);
        //         console.log(status);
        //     });
        // });

        this.stdin = process.stdin;
        this.stdout = process.stdout;

        try {
            this.stdin.setRawMode(true);
        } catch(err) {
            console.log("unable to use stdin.setRawMode()");
        }
        this.stdin.resume();
        this.stdin.setEncoding("utf8");

        this.stdin.on('data', function(data) {
            controller.receiveInput(data);
        });

        /*
         * Ctrl-F is used to toggle "file prompt" mode.  If a valid filename is received from stdin
         * in that mode, then we transition to "file transfer" mode.
         */
        this.fFilePrompt = false;
        this.fFileTransfer = false;
        this.sFileName = "";
        this.bufFileData = null;
        this.iFileData = -1;
        this.aFileBlock = [];
        this.cbBlockSize = 1024;

        this.tests = JSON.parse(fs.readFileSync("./tests.json", "utf8"));
        this.deliverData = this.deliverInput = this.deliverTests = null;

        let monitor = new TestMonitor();
        monitor.bindController(this, this.sendData, this.sendOutput, this.printf);
    }

    /**
     * bindMonitor(monitor, deliverData, deliverInput, deliverTests)
     *
     * @this {PortController}
     * @param {TestMonitor} monitor
     * @param {function(number)} deliverData
     * @param {function(number)} deliverInput
     * @param {function(Object)} deliverTests
     */
    bindMonitor(monitor, deliverData, deliverInput, deliverTests)
    {
        this.deliverData = deliverData.bind(monitor);
        this.deliverInput = deliverInput.bind(monitor);
        this.deliverTests = deliverTests.bind(monitor);
        if (this.tests && this.deliverTests) {
            this.deliverTests(this.tests);
            this.tests = null;
        }
    }

    /**
     * printf(format, ...args)
     *
     * @this {PortController}
     * @param {string} format
     * @param {...} args
     */
    printf(format, ...args)
    {
        this.stdout.write(Str.sprintf(format, ...args));
    }

    /**
     * receiveData(data)
     *
     * @this {PortController}
     * @param {number|string|Array} data
     */
    receiveData(data)
    {
        if (this.fFileTransfer) {
            let response = data[0];
            if (response == Keys.ASCII.CTRL_M) {
                this.sendNextBlock();
            }
            else if (response == Keys.ASCII.CTRL_R) {
                this.sendBlock();
            }
            else {
                this.endTransfer("unexpected transfer response: " + data);
            }
        }
        if (this.deliverInput) {
            if (typeof data == "number") {
                this.deliverData(data);
            }
            else if (typeof data == "string") {
                for (let i = 0; i < data.length; i++) this.deliverData(data.charCodeAt(i));
            }
            else {
                for (let i = 0; i < data.length; i++) this.deliverData(data[i]);
            }
        } else {
            console.log("data(" + typeof data + "): ", data);
        }
    }

    /**
     * receiveInput(ch)
     *
     * @this {PortController}
     * @param {string} ch
     */
    receiveInput(ch)
    {
        let data = ch.charCodeAt(0);

        if (data == Keys.ASCII.CTRL_C) {
            if (this.fFileTransfer) {
                this.endTransfer("transfer aborted");
                return;
            }
            process.exit();
            return;
        }

        if (data == Keys.ASCII.CTRL_F) {
            if (!this.fFilePrompt) {
                this.printf("\nname of file to transfer: ");
                this.fFilePrompt = true;
                this.sFileName = "";
            } else {
                this.printf("\ntransfer cancelled\n");
                this.fFilePrompt = false;
            }
            return;
        }

        if (this.fFilePrompt) {
            if (data == Keys.ASCII.CTRL_M) {
                data = 0;
                this.fFilePrompt = false;
                this.printf("\n");
                if (this.sFileName) {
                    this.fFileTransfer = true;
                    this.startTransfer();
                }
            }
            else if (data == Keys.ASCII.CTRL_H || data == Keys.ASCII.DEL) {
                data = 0;
                if (this.sFileName) {
                    this.sFileName = this.sFileName.slice(0, -1);
                    this.printf("%s", "\b \b");
                }
            } else if (data < 32 || data > 127) {
                data = 0;
            }
            if (data) {
                this.sFileName += ch;
                this.printf("%c", data);
            }
            return;
        }

        if (this.deliverInput) {
            this.deliverInput(data);
        }

        /*
         * Node defines the first parameter of write() as a "chunk", which can be a string, Buffer, or Uint8Array.
         */
        // this.stdout.write(data);
    }

    /**
     * sendData(data)
     *
     * @this {PortController}
     * @param {number|string|Array} data
     */
    sendData(data)
    {
        if (typeof data == "number") {
            data = [data];
        }
        if (typeof data == "string") {
            this.port.write(data);
        } else {
            this.port.write(Buffer.from(data));
        }
    }

    /**
     * sendOutput(data)
     *
     * @this {PortController}
     * @param {number|string|Array} data
     */
    sendOutput(data)
    {
        if (typeof data == "number") {
            this.printf("%c", data);
        }
        else if (typeof data == "string") {
            this.printf("%s", data);
        }
        else {
            for (let i = 0; i < data.length; i++) this.printf("[0x%02x]", data[i]);
        }
    }

    /**
     * buildDateTime(dateMod)
     *
     * Adapted from the corresponding function in DiskDump.js
     *
     * @this {PortController}
     * @param {Date} dateMod contains the modification time of a file
     * @returns {number} the time (bits 0-15) and date (bits 16-31) in FAT format
     */
    buildDateTime(dateMod)
    {
        let year = dateMod.getFullYear();
        let month = dateMod.getMonth() + 1;
        let day = dateMod.getDate();
        let time = ((dateMod.getHours() & 0x1F) << 11) | ((dateMod.getMinutes() & 0x3F) << 5) | ((dateMod.getSeconds() >> 1) & 0x1F);
        /*
         * NOTE: If validateTime() is doing its job, then we should never have to do this.  This is simple paranoia.
         */
        if (year < 1980) {
            year = 1980; month = 1; day = 1; time = 1;
        } else if (year > 2099) {
            year = 2099; month = 12; day = 31; time = 1;
        }
        let date = (((year - 1980) & 0x7F) << 9) | (month << 5) | day;
        return ((date & 0xffff) << 16) | (time & 0xffff);
    }

    /**
     * buildShortName(sFileName)
     *
     * Adapted from the corresponding function in DiskDump.js
     *
     * @this {PortController}
     * @param {string} sFileName
     * @returns {string} containing a corresponding filename in FAT "8.3" format
     */
    buildShortName(sFileName)
    {
        let sName = path.basename(sFileName).toUpperCase();
        let iExt = sName.lastIndexOf('.');
        let sExt = "";
        if (iExt >= 0) {
            sExt = sName.substr(iExt+1);
            sName = sName.substr(0, iExt);
        }
        sName = sName.substr(0, 8).trim();
        sExt = sExt.substr(0, 3).trim();
        let iPeriod = -1;
        if (sExt) {
            iPeriod = sName.length;
            sName += '.' + sExt;
        }
        for (let i = 0; i < sName.length; i++) {
            if (i == iPeriod) continue;
            let ch = sName.charAt(i);
            if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()-@^_`{}~".indexOf(ch) < 0) {
                sName = sName.substr(0, i) + '_' + sName.substr(i+1);
            }
        }
        return sName;
    };

    /**
     * sendBlock()
     *
     * @this {PortController}
     */
    sendBlock()
    {
        /*
         * The initial block is preceded by a "raw" Ctrl-F as a signal to the receiving end.
         */
        if (!this.iFileData) {
            this.sendData(Keys.ASCII.CTRL_F);
        }
        let cb = this.aFileBlock.length;
        this.sendBlockByte(cb & 0xff);
        this.sendBlockByte((cb >> 8) & 0xff);
        let crc = 0;
        for (let i = 0; i < this.aFileBlock.length; i++) {
            let b = this.aFileBlock[i];
            this.sendBlockByte(b);
            crc += b;
        }
        this.sendBlockByte(crc & 0xff);
        this.printf("block sent (%d bytes)\n", cb);
    }

    /**
     * sendNextBlock()
     *
     * @this {PortController}
     */
    sendNextBlock()
    {
        this.aFileBlock = [];
        for (let i = 0; i < this.cbBlockSize && this.iFileData < this.bufFileData.length; i++) {
            let b = this.bufFileData[this.iFileData++];
            this.aFileBlock.push(b);
        }
        if (this.aFileBlock.length) {
            this.sendBlock();
        } else {
            this.endTransfer();
        }
    }

    /**
     * sendBlockByte(b)
     *
     * This converts any "control characters" in the range 0x00 to 0x1B (Ctrl-@ to Ctrl-[) into
     * the corresponding ASCII sequence "^@" to "^[".  This is a superset of control characters Ctrl-A
     * to Ctrl-Z, which will be converted to the corresponding "^A" to "^Z" sequences.
     *
     * And since '^' has been hijacked for this purpose, we also convert '^' into "^^".
     *
     * The idea is to reserve ACTUAL control characters for special operations that require immediate
     * action.  This, of course, is overkill, and introduces far more overhead than we really need, but I'm
     * not interested in maximum speed for these occasional file transfers.
     *
     * @this {PortController}
     * @param {number} b
     */
    sendBlockByte(b)
    {
        if (b <= 27) {
            this.sendData(Keys.ASCII['^']);
            this.sendData(b + Keys.ASCII['@']);
        } else if (b == Keys.ASCII['^']) {
            this.sendData(Keys.ASCII['^']);
            this.sendData(Keys.ASCII['^']);
        } else {
            this.sendData(b);
        }
    }

    /**
     * setBlock(s)
     *
     * @this {PortController}
     * @param {string} s
     */
    setBlock(s)
    {
        this.aFileBlock = [];
        for (let i = 0; i < s.length; i++) {
            this.aFileBlock.push(s.charCodeAt(i));
        }
    }

    /**
     * startTransfer()
     *
     * @this {PortController}
     */
    startTransfer()
    {
        if (!this.fFileTransfer) return;
        try {
            let stats = fs.statSync(this.sFileName);
            let dateTime = this.buildDateTime(stats.mtime);
            let cbSize = stats.size;
            this.bufFileData = fs.readFileSync(this.sFileName);
            if (this.bufFileData && this.bufFileData.length == cbSize) {
                this.iFileData = 0;
                this.setBlock('|' + this.buildShortName(this.sFileName) + '|' + Str.toHex(cbSize, 8) + '|' + Str.toHex(dateTime, 8) + '|');
                this.sendBlock();
            } else {
                this.endTransfer("incorrect data length: " + this.bufFileData.length);
            }
        } catch(err) {
            this.endTransfer(err.message);
        }
    }

    /**
     * startTransfer(sError)
     *
     * @this {PortController}
     * @param {string} [sError]
     */
    endTransfer(sError)
    {
        this.fFileTransfer = false;
        this.bufFileData = null;
        this.iFileData = -1;
        this.aFileBlock = [];
        this.printf("%s\n", sError? ("transfer error (" + sError + ")") : "transfer complete");
    }
}

let controller = new PortController("/dev/tty.KeySerial1", {baudRate, rts_cts});
