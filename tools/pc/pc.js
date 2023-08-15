#!/usr/bin/env node
/**
 * @fileoverview Implements the PCjs machine command-line interface
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import child_process from "child_process";
import fs            from "fs";
import glob          from "glob";
import path          from "path";
import xml2js        from "xml2js";
import DbgLib        from "../../machines/modules/v2/dbglib.js";
import Messages      from "../../machines/modules/v2/messages.js";
import { printf, sprintf } from "../../machines/modules/v2/printf.js";
import StrLib        from "../../machines/modules/v2/strlib.js";
import Device        from "../../machines/modules/v3/device.js";
import CharSet       from "../../machines/pcx86/modules/v3/charset.js";
import DiskInfo      from "../../machines/pcx86/modules/v3/diskinfo.js";
import { Defines, MESSAGE } from "../../machines/modules/v3/defines.js";
import { device, existsDir, existsFile, getDiskSector, makeFileDesc, readDir, readDiskAsync, readFileAsync, readFileSync, setRootDir, writeDiskSync, writeFileSync } from "../modules/disklib.js";
import pcjslib       from "../modules/pcjslib.js";

let fDebug = false;
let fHalt = false;
let fNoFloppy = false;
let fVerbose = false;
let fWrite = false;
let autoStart = false;
let machineType = "pcx86";
let systemType = "msdos";
let systemVersion = "3.30";
let systemOverride = false;
let savedMachine = "compaq386.json";
let savedState = "state386.json";
let localMachine = "";  // current machine config file
let localCommand = "";  // current command issued from machine
let localDir = ".";     // local directory used to build localDrive
let localDrive = "disks/harddisk.json";
let machineDir = "";    // current directory *inside* the machine
let maxFiles = 1024;    // default hard drive file limit
let maxCapacity = 10;   // default hard drive capacity, in megabytes (Mb)
let configJSON = {}, machines = {};

let rootDir, pcjsDir;
let messagesFilter, debugMode;
let Component, Errors, Interrupts, Web, embedMachine;
let prompt = ">", command = "", commandPrev = "";
let machine = newMachine();

let diskItems = [];
let diskIndexCache = null, diskIndexKeys = [];
let fileIndexCache = null, fileIndexKeys = [];
let driveManifest = null, driveOverride = false, geometryOverride = false;
let driveInfo = {
    driveCtrl: "COMPAQ",
    driveType:  -1,
    nCylinders: 0,
    nHeads:     0,
    nSectors:   0,
    cbSector:   0,
    driveSize:  0,
    typeFAT:    0,
    files:      []
};

const functionKeys = {
    "\u001b[A":     "$up",
    "\u001b[B":     "$down",
    "\u001b[C":     "$right",
    "\u001b[D":     "$left",
    "\u001bOP":     "$f1",
    "\u001bOQ":     "$f2",
    "\u001bOR":     "$f3",
    "\u001bOS":     "$f4",
    "\u001b[15~":   "$f5",
    "\u001b[17~":   "$f6",
    "\u001b[18~":   "$f7",
    "\u001b[19~":   "$f8",
    "\u001b[20~":   "$f9",
    "\u001b[21~":   "$f10",
    "\u001b[23~":   "$f11",
    "\u001b[24~":   "$f12"
};

/**
 * setDebugMode(nEvent)
 *
 * @param {number} nEvent (eg, DbgLib.EVENTS.ENTER, DbgLib.EVENTS.READY, DbgLib.EVENTS.EXIT)
 */
function setDebugMode(nEvent)
{
    let prevMode = debugMode;
    if (!nEvent && debugMode != nEvent) {
        printf("[Press CTRL-D to enter command mode]\n");
    }
    debugMode = nEvent;
    if (debugMode == DbgLib.EVENTS.READY && prevMode != DbgLib.EVENTS.READY) {
        command = "";
        printf('[' + (commandPrev? "Press CTRL-A to repeat last command" : "Type help for list of commands") + ", CTRL-C to terminate]\n");
        printf("%s> ", prompt);
    }
}

/**
 * convertXML(xml, idAttrs)
 *
 * @param {Object} xml
 * @param {string} [idAttrs]
 * @returns {Object} (JSON-style machine configuration)
 */
function convertXML(xml, idAttrs = '@')
{
    let machine = {};
    /*
     * Walk the XML tree and add all the objects to the root of the machine object.
     */
    let addXML = function(xml, xid, obj, oid) {
        if (!obj || obj == machine) {
            obj = {};
            if (!oid) oid = xid;
        }
        if (oid) {
            if (!machine[oid]) {
                machine[oid] = obj;
            } else {
                if (Array.isArray(machine[oid])) {
                    machine[oid].push(obj);
                } else {
                    machine[oid] = [machine[oid], obj];
                }
            }
        }
        xml = xml[xid];
        if (typeof xml != "object") {
            obj['value'] = xml;
            return;
        }
        for (let key in xml) {
            if (key == idAttrs) {
                /*
                 * Our XSL files include rules for providing default IDs, so we do, too...
                 */
                if (!xml[key]['id']) {
                    obj['id'] = oid;
                }
                addXML(xml, key, obj);
            } else {
                if (key == 'br' || key == 'comment' || key == 'control' || key == 'menu') {
                    continue;
                }
                if (Array.isArray(xml[key])) {
                    for (let i = 0; i < xml[key].length; i++) {
                        addXML(xml[key], i, machine, key);
                    }
                } else {
                    if (key != '_') {
                        obj[key] = xml[key];
                    } else {
                        obj['value'] = xml[key];
                    }
                }
            }
        }
    };
    addXML(xml, 'machine');
    return machine;
}

/**
 * loadModules(factory, modules, done)
 *
 * @param {string} factory
 * @param {Array.<string>} modules
 * @param {function()} done
 */
async function loadModules(factory, modules, done)
{
    for (let modulePath of modules) {
        /*
         * Unless I replace all backslashes in modulePath with forward slashes; eg:
         *
         *      .replace(/\\/g, '/')
         *
         * pc.js will fail on Windows operating systems with the following error:
         *
         *      TypeError [ERR_INVALID_MODULE_SPECIFIER]: Invalid module
         *      "..\..\..\machines\modules\v2\defines.js" is not a valid package name ....
         *
         * which seems bizarre, since backslash is actually Windows' preferred path separator
         * and is precisely what Node's path.sep returns on Windows. ¯\_(ツ)_/¯
         *
         * Moreover, we cannot join modulePath with rootDir, because rootDir will start with
         * a drive letter (eg, "C:") on Windows, which then fails with the following error:
         *
         *      Only URLs with a scheme in: file and data are supported by the default ESM loader.
         *      On Windows, absolute paths must be valid file:// URLs. Received protocol 'c:'
         *
         * so we join it with a relative directory instead (ie, "../..").
         */
        modulePath = path.join("../..", modulePath).replace(/\\/g, '/');
        if (fDebug) printf("loading: %s\n", modulePath.replace(/\.\.\/\.\.\//g, '/'));
        let name = path.basename(modulePath, ".js");
        if (name == "embed") {
            let { [factory]: embed } = await import(modulePath);
            embedMachine = embed;
            continue;
        }
        let module = await import(modulePath);
        /*
         * Below are the set of classes that we need access to (eg, static methods, constants, etc).
         */
        switch(name) {
        case "weblib":
            Web = module.default;
            break;
        case "component":
            Component = module.default;
            /*
             * We override Component.printf() in order to replace its DEBUG check with our own fDebug check.
             */
            Component.printf = function(format, ...args) {
                let bitsMessage = 0;
                if (typeof format == "number") {
                    bitsMessage = format;
                    format = args.shift();
                }
                if (Component.testBits(bitsMessage, Messages.ERROR)) {
                    format = "error: " + format + "\n";
                    bitsMessage = 0;
                }
                if (Component.testBits(bitsMessage, Messages.WARNING)) {
                    format = "warning: " + format + "\n";
                    bitsMessage = 0;
                }
                if (fDebug || !bitsMessage) {
                    printf(format, ...args);
                }
            }
            break;
        case "errors":
            Errors = module.default;
            break;
        case "interrupts":
            Interrupts = module.default;
            break;
        }
        /*
         * If there's any chance that the module might print something, add a function to intercept it.
         */
        if (module.default && module.default.prototype) {
            module.default.prototype.print = function print(s, bitsMessage) {
                if ((debugMode || !autoStart) && !bitsMessage || (bitsMessage || fDebug) && Component.testBits(messagesFilter, bitsMessage)) {
                    printf(s);
                }
            };
        }
    }
    done();
}

/**
 * initMachine(args)
 *
 * @param {string} args
 */
function initMachine(args)
{
    try {
        /*
         * Simulate the "web page" embedding and initialization process now.
         */
        embedMachine(machine.id, null, null, args);
        Web.doPageInit();

        /*
         * Get the CPU component so we can keep tabs on its running state and also hook
         * a few interrupts (eg, INT 0x10).  Get the Debugger component so we can override
         * the debugger's print() function.
         */
        machine.cpu = Component.getComponentByType("CPU");
        if (machine.cpu && machine.cpu.addIntNotify && Interrupts) {
            machine.cpu.addIntNotify(Interrupts.VIDEO, intVideo.bind(machine.cpu));
            machine.cpu.addIntNotify(Interrupts.DISK, intDisk.bind(machine.cpu));
            machine.cpu.addIntNotify(Interrupts.BOOTSTRAP, intReboot.bind(machine.cpu));
            machine.cpu.addIntNotify(Interrupts.DOS_EXIT, intLoad.bind(machine.cpu));
        }

        /*
         * Get the FDC component so we can query its list of available diskettes,
         * and get the HDC component so we can get the state of its hard drive(s).
         */
        machine.fdc = Component.getComponentByType("FDC");
        machine.hdc = Component.getComponentByType("HDC");

        /*
         * Get the Debugger component so we can receive debugger events and send
         * debugger commands.
         */
        machine.dbg = Component.getComponentByType("Debugger");
        if (machine.dbg) machine.dbg.onEvent(setDebugMode);

        /*
         * Get the Keyboard component to get access to injectKeys(), which simplifies the
         * injection of keystrokes into the machine.
         */
        machine.kbd = Component.getComponentByType("Keyboard");

        machine.serial = Component.getComponentByType("SerialPort");
        if (machine.serial) {
            let exports = machine.serial['exports'];
            if (exports) {
                var fnSetConnection = exports['setConnection'];
                if (fnSetConnection) {
                    if (fnSetConnection.call(machine.serial, null, receiveSerial)) {
                        machine.fnSendSerial = exports['receiveData'];
                    }
                }
            }
        }

        /*
         * Since there may be no debugger (and even if there is, machines that are auto-started won't
         * trigger any debugger events), we simulate an appropriate event.
         *
         * NOTE: The test here used to be "machine.cpu && machine.cpu.isRunning()", but if you're not using
         * the --local option, the CPU may not up and running yet, so we rely on the autoStart setting instead.
         */
        setDebugMode(machine.cpu && autoStart? DbgLib.EVENTS.EXIT : DbgLib.EVENTS.READY);
    }
    catch(err) {
        printf("machine initialization error: %s\n", err.message);
    }
}

/**
 * intVideo(addr)
 *
 * @param {CPUx86} this
 * @param {number} addr
 * @returns {boolean} true to proceed with the INT 0x10 software interrupt, false to skip
 */
function intVideo(addr)
{
    let maxRows = 25, maxCols = 80;     // TODO: update these to reflect active video mode
    let CX = (this.regECX & 0xffff);
    let AH = ((this.regEAX >> 8) & 0xff), AL = (this.regEAX & 0xff);
    let DH = ((this.regEDX >> 8) & 0xff), DL = (this.regEDX & 0xff);

    if (machine.nestedVideo) {          // some BIOSes issue calls within the "write TTY" (0x0E)
        return true;                    // function, and we want to ignore those
    }

    switch (AH) {
    case 0x02:                          // set cursor position (row=DH, col=DL)
        if (DL >= maxCols || DH >= maxRows) {
            break;                      // ignore "off-screen" positions
        }
        if (DL < machine.colCursor) {
            if (!DL) {
                printf('\r');
            } else {
                let s = "";
                while (DL + s.length < machine.colCursor) {
                    s += '\b';
                }
                printf(s);
            }
        }
        if (DH != machine.rowCursor) {
            printf('\n');
        } else if (DL > machine.colCursor) {
            /*
             * When BASIC/BASICA erases a character (in response to a BS/DEL key), it wants to redraw
             * the entire line (eg, with spaces if there was nothing past the character being deleted);
             * in that situation, it seems best (well, certainly easiest) to simply ignore the cursor
             * updates and let the spaces ("chips") fall where they may.
             */
            break;
        }
        machine.rowCursor = DH;
        machine.colCursor = DL;
        break;
    case 0x06:                          // scroll up (AL lines)
        while (AL--) {                  // TODO: Should probably check the boundaries of the scroll
            printf('\n');               // but that's more work than our cheesy TTY emulation deserves
        }
        break;
    case 0x09:                          // write raw char/attr (AL/BL) with count (CX)
    case 0x0A:                          // write raw char (AL) with count (CX)
        /* falls through */
    case 0x0E:                          // write TTY char (AL)
        /*
         * By default, fromCP437() does NOT translate control characters to UTF-8, which is the proper
         * thing to do for TTY control characters (ie, BEL, BS, LF, and CR) that the TTY function (0x0E)
         * wants to handle, but all other characters must be translated (including ESC or 0x1B, which
         * BASIC uses to display a left-arrow symbol).  And when non-TTY output is being performed, there
         * are no exceptions (ie, translate everything).
         */
        let s = CharSet.fromCP437(AL, AH != 0x0E || [0x07, 0x08, 0x0A, 0x0D].indexOf(AL) < 0);
        /*
         * NOTE: I don't think the BIOS actually handled CX == 0 very well (it looped 65536 times instead),
         * but we're not going to emulate/risk that.
         */
        if (AH == 0x0E || !CX) CX = 1;
        printf("%s", s.repeat(CX));
        if (AL == '\r') {
            machine.colCursor = 0;
        } else if (AL == '\n') {
            while (machine.rowCursor < maxRows && CX--) {
                machine.rowCursor++;
            }
        } else if (AL == '\b') {
            while (machine.colCursor > 0 && CX--) {
                machine.colCursor--;
            }
        } else {
            while (machine.colCursor < maxCols && CX--) {
                machine.colCursor++;
            }
        }
        if (AH == 0x0E) {
            machine.nestedVideo++;      // TTY function performs nested cursor control calls (eg, AH=0x02)
            this.addIntReturn(addr, function onVideoReturn(nLevel) {
                machine.nestedVideo--;
            });
        }
        break;
    }
    return true;
}

/**
 * intDisk(addr)
 *
 * @param {CPUx86} this
 * @param {number} addr
 * @returns {boolean} true to proceed with the INT 0x13 software interrupt, false to skip
 */
function intDisk(addr)
{
    if (geometryOverride) {
        let cpu = this;
        /*
         * We do basically the same thing our custom MBR does: build a drive table in unused
         * interrupt vector space (16 bytes spanning vectors 0xC0 to 0xC3) and then point the
         * drive table vector at 0x41 to that space.
         *
         * Unlike our custom MBR (see MBR.ASM), we need only do this for the primary drive,
         * because we don't currently support building or overriding additional drives.  Otherwise,
         * we would also need to build a secondary drive table (eg, in the space spanning vectors
         * 0xC4 to 0xC7) and update the secondary drive table vector at 0x46.
         *
         * I don't relish altering the machine state like this (using the custom MBR is much
         * cleaner and should actually be compatible with real hardware), but in order to test the
         * operating system's ability to initialize and format drives with custom geometries
         * from scratch, this seems the best alternative.
         */
        for (let off = 0; off < 16; off++) {
            let b = 0;
            switch(off) {
            case 0x00:
                b = driveInfo.nCylinders & 0xff;
                break;
            case 0x01:
                b = (driveInfo.nCylinders >> 8) & 0xff;
                break;
            case 0x02:
                b = driveInfo.nHeads;
                break;
            case 0x0E:
                b = driveInfo.nSectors;
                break;
            }
            cpu.setByte(0xC0 * 4 + off, b);
        }
        cpu.setShort(0x41 * 4, 0xC0 * 4);
        cpu.setShort(0x41 * 4 + 2, 0);
        geometryOverride = false;
    }
    return true;
}

/**
 * intReboot(addr)
 *
 * @param {CPUx86} this
 * @param {number} addr
 * @returns {boolean} true to proceed with the INT 0x19 software interrupt, false to skip
 */
function intReboot(addr)
{
    /*
     * An INT 19h issued from our own RETURN.COM is a signal to shut down.
     */
    if (this.getIP() == 0x102) {
        let sig = this.getSOWord(this.segCS, this.getIP()+2) + (this.getSOWord(this.segCS, this.getIP()+4) << 16);
        if (sig == 0x534A4350) {        // "PCJS"
            exit();                     // INT 19h appears to have come from RETURN.COM
        }
    }
    /*
     * Any other INT 19h should proceed normally; however, if the machine's hard drive(s) are using
     * custom geometries AND we didn't build a drive image with our custom MBR, then the drive table(s)
     * for those geometries will never get loaded into memory.  So we take this opportunity to install
     * them before the boot process begins.
     *
     * Unfortunately, the default INT 19h behavior resets the drive table vectors, so if we tried to
     * install our own drive tables now, they would immediately be replaced.  So instead we set a flag
     * (geometryOverride) telling our intDisk() handler to install drive tables on the next INT 13h call.
     */
    if (!driveManifest && driveInfo.driveCtrl == "PCJS") {
        geometryOverride = true;
    }
    return true;
}

/**
 * intLoad(addr)
 *
 * If an INT 0x20 is followed by a RET and a "PCJS" signature, then it was issued by one
 * of our own programs (eg, LOAD.COM).
 *
 * @param {CPUx86} this
 * @param {number} addr
 * @returns {boolean} true to proceed with the INT 0x20 software interrupt, false to skip
 */
function intLoad(addr)
{
    let sig = this.getSOWord(this.segCS, this.getIP()+2) + (this.getSOWord(this.segCS, this.getIP()+4) << 16);
    if (sig == 0x534A4350) {            // "PCJS"
        let cpu = this;
        let getString = function(seg, off, len) {
            let s = "";
            while (len--) {
                let b = cpu.getSOByte(seg, off++);
                if (!b) break;
                s += CharSet.fromCP437(b);
            }
            return s;
        };
        let len = cpu.getSOByte(cpu.segDS, 0x80);
        let args = getString(cpu.segDS, 0x81, len).trim();
        if (this.getIP() == 0x102) {    // INT 20h appears to have come from LOAD.COM
            let aTokens = args.split(' ');
            let matchDrive = aTokens[0].match(/^([a-z]:?)$/i);
            if (matchDrive) {
                aTokens.splice(0, 1)
                printf("%s\n", loadDiskette(matchDrive[1], aTokens));
            } else {
                if (!args) {
                    printf("usage: load [drive] [search options]\n");
                } else {
                    printf("invalid load command: \"%s\"\n", args);
                }
            }
        } else {                        // INT 20h assumed to have come from a hidden PCJS command app (eg, LS.COM)
            let off = cpu.getIP()+6;
            let len = cpu.getSOByte(cpu.segDS, off++);
            let appName = getString(cpu.segDS, off, len).trim();
            machineDir = getString(cpu.segDS, 0x120, -1);
            localCommand = appName + " " + args;
            setTimeout(function() { doCommand("exec " + localCommand); }, 0);
            return false;               // returning false should bypass the INT 20h and fall into the JMP $-2;
        }                               // we want the machine to spin its wheels until it has been unloaded/reloaded
    }
    return true;
}

/**
 * receiveSerial(b)
 *
 * @param {number} b
 */
function receiveSerial(b)
{
    let s;
    if (b != StrLib.ASCII.CR && b != StrLib.ASCII.LF) {
        s = StrLib.ASCIICodeMap[b];
    }
    if (s) {
        s = '<' + s + '>';
    } else {
        s = String.fromCharCode(b);
    }
    printf(s);
}

/**
 * sendSerial(b)
 *
 * @param {number} b
 */
function sendSerial(b)
{
    if (machine.serial && machine.fnSendSerial) {
        machine.fnSendSerial.call(machine.serial, b);
    }
}

/**
 * checkMachine(sFile)
 *
 * We now allow a machine file to be specified with or without the --load option, with or without a path, and
 * with or without an extension.  If you don't use --load, then it must be the first non-option argument.  If you
 * don't specify a path, then it must either be in the current directory or the pc.js directory (ie, /tools/pc),
 * and if you don't specify an extension, we'll try ".json", ".json5", and ".xml", in that order.
 *
 * If no file can be found, we return an empty string.
 *
 * @param {string} sFile
 * @returns {string} (sFile with a path prepended and/or an extension appended as needed, or empty string if not found)
 */
function checkMachine(sFile)
{
    let sVerify = "", machine;
    while (sFile) {
        if (sFile.indexOf("http") == 0) {
            break;
        }
        if (existsFile(sFile, false) && !existsDir(sFile, false)) {
            sVerify = sFile;
            break;
        }
        if (sFile.indexOf('.') > 0) {
            let s = path.join(pcjsDir, sFile);
            sVerify = existsFile(s, false)? s: "";
        } else {
            const exts = [".json", ".json5", ".xml"];
            for (let ext of exts) {
                let s = sFile + ext;
                if (existsFile(s, false)) {
                    sVerify = s;
                    break;
                }
                s = path.join(pcjsDir, s);
                if (existsFile(s, false)) {
                    sVerify = s;
                    break;
                }
            }
        }
        if (!sVerify) sFile = "";
        break;
    }
    if (sVerify) {
        if (sVerify.endsWith(".json")) {
            machine = JSON.parse(readFileSync(sVerify, "utf8", true) || "{}");
            sFile = machine['machine']? sVerify : "";
        } else {
            sFile = sVerify;
        }
    }
    if (sFile && !driveOverride) {
        if (machine) {
            if (machine['hdc']) {
                driveInfo.driveCtrl = machine['hdc']['type'];
            }
            if (machine['chipset'] && machine['chipset']['model'] == "deskpro386") {
                driveInfo.driveCtrl = "COMPAQ";
            }
        } else {
            if (sFile.indexOf("5160") >= 0) {
                driveInfo.driveCtrl = "XT";
            } else if (sFile.indexOf("5170") >= 0) {
                driveInfo.driveCtrl = "AT";
            } else if (sFile.indexOf("compaq") >= 0) {
                driveInfo.driveCtrl = "COMPAQ";
            }
        }
    }
    return sFile;
}

/**
 * newMachine()
 *
 * Before allowing a machine to be loaded, make sure any previously loaded machine is destroyed
 * and the fake "web page" context is reset.
 *
 * @returns {Object} (new machine object)
 */
function newMachine()
{
    if (Component && machine.id) {
        Component.destroyMachine(machine.id);
    }
    if (Web) {
        Web.doPageReset();
    }
    return {
        id:           "",
        cpu:          null,
        dbg:          null,
        fdc:          null,
        hdc:          null,
        kbd:          null,
        serial:       null,
        fnSendSerial: null,
        rowCursor:    0,
        colCursor:    0,
        nestedVideo:  0
    };
}

/**
 * loadMachine(sFile)
 *
 * @param {string} sFile
 * @returns {string}
 */
function loadMachine(sFile)
{
    let result = "";
    let getFactory = function(config) {

        let removeFloppy = fNoFloppy;
        let typeMachine = config['type'] || (config['machine'] && config['machine']['type']) || machineType;

        machine.id = "";
        if (config['machine']) {
            machine.id = config['machine']['id'];
        }

        if (config['cpu']) {
            if (fHalt) {
                config['cpu']['autoStart'] = 0;
            }
            autoStart = config['cpu']['autoStart'];
            if (autoStart == undefined) {
                autoStart = !config['debugger'];
            }
        }

        if (config['hdc']) {
            let typeCtrl = config['hdc']['type'];
            let drives = config['hdc']['drives'];
            if (typeof drives == "string") {
                try {
                    drives = eval(drives);
                } catch(err) {
                    drives = null;
                }
            }
            if (!drives) drives = [];
            if (driveInfo.driveCtrl != typeCtrl && driveInfo.driveCtrl != "PCJS") {
                printf("warning: default drive controller (%s) does not match actual controller (%s)\n", driveInfo.driveCtrl, typeCtrl);
            }
            /*
             * If we don't have a drive type (eg, if no drive was built and no drive type was explicitly set),
             * we would still like to match the target capacity with a drive.  Convert the capacity from Mb to
             * sectors and then give it a go.
             *
             * And even if we do have a drive type, findDriveType() should simply verify that the type is valid.
             */
            if (DiskInfo.findDriveType(driveInfo, maxCapacity * 1024 * 2, device)) {
                if (fVerbose) {
                    printf("%s drive type %2d: %4d cylinders, %2d heads, %2d sectors/track (%5sMb)\n", driveInfo.driveCtrl, driveInfo.driveType, driveInfo.nCylinders, driveInfo.nHeads, driveInfo.nSectors, driveInfo.driveSize.toFixed(1));
                }
            }
            if (driveInfo.driveType >= 0) {
                let driveType = driveInfo.driveType;
                if (!driveType && driveInfo.driveCtrl == "PCJS") {
                    /*
                     * When a custom geometry is being used, we need to set the drive type to the FIRST type used
                     * by the current drive controller (the PC XT started with type 0, while the PC AT started with 1).
                     */
                    driveType = (typeCtrl == "XT")? 0 : 1;
                }
                drives[0] = {
                    'type': driveType,
                    'name': (driveInfo.driveSize|0) + "Mb Hard Disk"
                };
                if (driveManifest || !localDir) {
                    drives[0]['path'] = localDrive;
                    if (driveManifest) {
                        removeFloppy = true;
                    }
                }
                if (driveOverride) {
                    let type = driveInfo.driveCtrl;
                    if (driveInfo.driveCtrl == "PCJS") {
                        type = driveInfo.driveCtrl + '-' + typeCtrl;
                    }
                    config['hdc']['type'] = type;
                }
            }
            config['hdc']['drives'] = drives;
        }

        if (sFile.endsWith(savedMachine) && config['computer']) {
            config['computer']['state'] = path.join(pcjsDir, savedState);
        }

        if (config['fdc']) {
            if (removeFloppy) {
                config['fdc']['autoMount'] = "{A:{name:\"None\"}}";
            } else if (systemOverride) {
                let name = systemType.toUpperCase() + ' ' + systemVersion;
                let sSystemDisk = getSystemDisk(systemType, systemVersion);
                if (sSystemDisk) {
                    config['fdc']['autoMount'] = "{A:{name:\"" + name + "\",path:\"" + sSystemDisk + "\"}}";
                }
            }
        }

        let args = JSON.stringify(config);
        loadModules(machines[typeMachine]['factory'], machines[typeMachine]['modules'], function() {
            initMachine(args);
        });
    };
    if (machine.cpu) {
        /*
         * Safety check: if newMachine() was called, then this shouldn't happen.
         */
        result = "machine already loaded";
    }
    else if (sFile) {
        if (sFile.indexOf(".json") > 0) {
            result = readJSON(sFile, getFactory);
        }
        else if (sFile.indexOf(".xml") > 0) {
            let xml = {_resolving: 0};
            result = readXML(sFile, xml, 'machine', null, 0, getFactory);
        } else {
            result = "unsupported machine file: " + sFile;
        }
        if (typeof result != "string") result = "";
    }
    return result;
}

/**
 * reloadMachine()
 */
async function reloadMachine()
{
    let result = "";
    if (driveManifest) {
        result = await buildDrive(localDir);
        if (!result) {
            loadMachine(localMachine);
        }
    } else {
        result = loadMachine(localMachine);
    }
    return result;
}

/**
 * readJSON(sFile, done)
 *
 * @param {string} sFile
 * @param {function(Object, string)} done
 * @returns {string}
 */
async function readJSON(sFile, done)
{
    let result = "";
    try {
        let sConfig = await readFileAsync(sFile);
        /*
         * Since our JSON files may contain comments, hex values, etc, use eval() instead of JSON.parse().
         */
        let config = eval('(' + sConfig + ')');
        done(config);
    }
    catch(err) {
        result = err.message;
    }
    return result;
}

/**
 * readXML(sFile, xml, sNode, sFile, aTags, iTag, done)
 *
 * @param {string} sFile
 * @param {Object} xml
 * @param {string} sNode
 * @param {Array|null} aTags
 * @param {number} iTag
 * @param {function(Object)} done
 * @returns {string}
 */
async function readXML(sFile, xml, sNode, aTags, iTag, done)
{
    let result = "";
    let idAttrs = '@';
    try {
        xml._resolving++;
        let sXML = await readFileAsync(sFile);
        let parser = new xml2js.Parser({attrkey: idAttrs});
        parser.parseString(sXML, function parseXML(err, xmlNode) {
            if (!aTags) {
                xml[sNode] = xmlNode[sNode];
            } else {
                /*
                 * Preserve any non-ref attributes in the tag we're updating.
                 */
                let attrs = aTags[iTag][idAttrs];
                aTags[iTag] = xmlNode[sNode];
                for (let attr in attrs) {
                    if (attr != 'ref') {
                        aTags[iTag][idAttrs][attr] = attrs[attr];
                    }
                }
}
            if (err) {
                printf("%s\n", err.message);
            }
            else if (xmlNode && xmlNode[sNode]) {
                for (let sTag in xmlNode[sNode]) {
                    let aTagsXML = xmlNode[sNode][sTag];
                    for (let iTagXML = 0; iTagXML < aTagsXML.length; iTagXML++) {
                        let tag = aTagsXML[iTagXML];
                        let attrs = tag[idAttrs];
                        let sFileXML = attrs && attrs['ref'];
                        if (sFileXML) {
                            readXML(sFileXML, xml, sTag, aTagsXML, iTagXML, done);
                            /*
                             * Any non-ref attributes in the tag should override those in the referenced file.
                             */
                            for (let attr in attrs) {
                                if (attr != 'ref') {
                                    aTagsXML[iTagXML][idAttrs][attr] = attrs[attr];
                                }
                            }
                        }
                    }
                }
                if (!--xml._resolving) {
                    let config = convertXML(xml, idAttrs);
                    done(config);
                }
            }
        });
    }
    catch(err) {
        result = err.message;
    }
    return result;
}

/**
 * checkCommand(sDir, sCommand)
 *
 * An external DOS command is allowed if we can find a matching COM, EXE, or BAT file somewhere
 * within the specified directory.  Internal DOS commands are allowed if they're on the list below.
 *
 * NOTE: The list of internal commands below is not intended to be exhaustive; it's just a start.
 *
 * @param {string} sDir
 * @param {string} sCommand
 * @returns {string} (original command, or empty string if not a valid command or program name)
 */
function checkCommand(sDir, sCommand)
{
    if (sCommand) {
        let aParts = sCommand.split(' ');
        let sProgram = aParts[0].toUpperCase();
        const aInternal = ["CD", "COPY", "DEL", "DIR", "ECHO", "MKDIR", "PAUSE", "RMDIR", "SET", "TYPE", "VER"];

        if (aInternal.indexOf(sProgram) < 0) {
            if (sProgram.indexOf('.') < 0) {
                sProgram += ".{COM,EXE,BAT}";
            }
            if (sProgram.indexOf('/') < 0 && sProgram.indexOf('\\') < 0) {
                sProgram = path.join(sDir, "**", sProgram);
            }
            let aFiles = glob.sync(sProgram);
            if (!aFiles.length) {
                sCommand = "";
            } else {
                let sArguments = aParts.slice(1).join(' ');
                sCommand = aFiles[0];
                if (sCommand.indexOf(sDir) == 0) {
                    sCommand = sCommand.slice(sDir.length);
                }
                sCommand = sCommand.replace(/\//g, '\\');
                sCommand = "C:" + (sCommand[0] != '\\'? '\\' : '') + sCommand + (sArguments? " " + sArguments : "");
            }
        }
    }
    return sCommand;
}

/**
 * getSystemDisk(type, version)
 *
 * @param {string} type
 * @param {string} version
 * @returns {string}
 */
function getSystemDisk(type, version)
{
    let sSystemDisk = "";
    let system = configJSON['systems']?.[type];
    if (system) {
        sSystemDisk = "/diskettes/pcx86/sys/dos/" + system.vendor + "/" + version + "/";
        sSystemDisk += (system.product || type).toUpperCase() + version.replace('.', '') + "-DISK1.json";
    }
    return sSystemDisk;
}

/**
 * buildDrive(sDir, sCommand, fLog)
 *
 * Builds a bootable hard drive image containing all files in the current directory.
 *
 * At present, the image size is defaults to 10Mb (which corresponds to an XT type 3 or AT type 1 drive)
 * and the operating system files default to MS-DOS 3.20.  Use --sys and --ver command-line options to
 * override those defaults.  The allowed systems are currently "msdos" and "pcdos", and the allowed versions
 * are any available in the PCjs diskette repo.
 *
 * Choice of hardware (ie, drives other than 10Mb) will be a bit trickier, because that also requires
 * tweaking the machine configuration file to specify a compatible drive type and customizing the master
 * boot record (currently we use a prebuilt ".mbr" file).  There are no plans to support more than one
 * partition/one volume, and to support volumes larger than 32Mb, we'll have to make sure your choice
 * of operating system supports it (eg, COMPAQ MS-DOS 3.31).
 *
 * The first three system files on the disk image will be those listed below (eg, IO.SYS, MSDOS.SYS, and
 * COMMAND.COM); if any of those files already exist in the current directory, ours will take precedence.
 * As for AUTOEXEC.BAT, we read any existing file (or create an empty file) and append the provided command.
 *
 * @param {string} sDir
 * @param {string} [sCommand] (eg, "COPY A:*.COM C:", "PKUNZIP DEMO.ZIP", etc)
 * @param {boolean} [fLog]
 * @returns {string} (error message, if any)
 */
async function buildDrive(sDir, sCommand = "", fLog = false)
{
    let system = configJSON['systems']?.[systemType];
    if (!system) {
        return "unsupported system type: " + systemType;
    }

    let version = +systemVersion;
    let majorVersion = version | 0;
    if (majorVersion < 2) {
        return "minimum DOS version with hard disk support is 2.00";
    }

    let sSystemDisk = getSystemDisk(systemType, systemVersion);
    let diSystem = await readDiskAsync(sSystemDisk);
    if (!diSystem) {
        return "missing system diskette: " + sSystemDisk;
    }

    let sSystemMBR = (driveInfo.driveCtrl == "PCJS")? "pcjs.mbr" : "DOS.mbr";
    if (sSystemMBR.indexOf(path.sep) < 0) {
        sSystemMBR = path.join(pcjsDir, sSystemMBR);
    }
    let dbMBR = readFileSync(sSystemMBR, null);
    if (!dbMBR || dbMBR.length < 512) {
        return "invalid system MBR: " + sSystemMBR;
    }
    if (dbMBR.length > 512) dbMBR = dbMBR.slice(dbMBR.length - 512);

    /*
     * Alas, DOS 2.x COMMAND.COM didn't support running hidden files, so attrHidden will be zero
     * for our added utilities (and for COMMAND.COM itself).
     */
    driveInfo.files = [];
    let attrHidden = majorVersion > 2? DiskInfo.ATTR.HIDDEN : 0;
    for (let name of system.files) {
        let desc = diSystem.findFile(name);
        if (desc) {
            desc.attr = +desc.attr;
            desc.attr |= attrHidden;
            driveInfo.files.push(desc);
        }
    }

    /*
     * In addition to the system files, we also create a hidden LOAD.COM in the root, which immediately
     * exits with an "INT 20h" instruction.  Our intLoad() interrupt handler should intercept it, determine
     * if the interrupt came from LOAD.COM, and if so, process it as an internal "load [drive]" command.
     */
    driveInfo.files.push(makeFileDesc("LOAD.COM", [0xCD, 0x20, 0xC3, 0x90, 0x50, 0x43, 0x4A, 0x53, 0x00], attrHidden));

    /*
     * We also create a hidden RETURN.COM in the root, which executes an "INT 19h" to reboot the machine.
     * Our intReboot() interrupt handler should intercept it, allowing us to gracefully invoke saveDrive()
     * to look for any changes and then terminate the machine.
     */
    driveInfo.files.push(makeFileDesc("RETURN.COM", [0xCD, 0x19, 0xC3, 0x90, 0x50, 0x43, 0x4A, 0x53, 0x00], attrHidden));

    /*
     * For any apps listed in pc.json, create hidden command apps in the root, each of which will execute
     * an "INT 20h" that will trigger an exec of the corresponding local command.  Note that 'apps' is a
     * collection of objects, where the keys are the app names and object properties like 'exec' tell us
     * what local program to execute.
     */
    let apps = configJSON['apps'] || {};
    let appNames = Object.keys(apps);
    for (let appName of appNames) {
        let appFile = appName.toUpperCase() + ".COM";
        let appContents = [0xB4, 0x47, 0xB2, 0x03, 0xBE, 0x20, 0x01, 0xCD, 0x21, 0xCD, 0x20, 0xEB, 0xFE, 0x50, 0x43, 0x4A, 0x53];
        appContents.push(appName.length);
        for (let j = 0; j < appName.length; j++) {
            appContents.push(appName.charCodeAt(j));
        }
        driveInfo.files.push(makeFileDesc(appFile, appContents, attrHidden));
    }

    /*
     * We also make sure there's an AUTOEXEC.BAT.  If one already exists, then we make sure there's
     * a PATH command, to which we prepend "C:\" if not already present.  We create an AUTOEXEC.BAT
     * if it doesn't exist, but in that case, we also mark it HIDDEN, since it's a file we created, not
     * the user.  Ensuring that "C:\" is in the PATH ensures that the user can invoke "return" to run
     * our hidden "RETURN.COM" program in the root of the drive, regardless of the current directory.
     */
    let attr = DiskInfo.ATTR.ARCHIVE;
    let data = readFileSync(path.join(sDir, "AUTOEXEC.BAT"), "utf8", true);
    if (data) {
        if (version >= 3.30 && !data.indexOf("ECHO OFF")) {
            data = '@' + data;
        }
    } else {
        data = (version >= 3.30? '@' : '') + "ECHO OFF\r\n";
        attr |= attrHidden;
    }
    let matchPath = data.match(/^PATH\s*(.*)$/im);
    if (matchPath) {
        let matchPathRoot = matchPath[1].match(/(^|;|C:|)\\(;|$)/i);
        if (!matchPathRoot) {
            data = data.replace(/^PATH\s*(.*)$/im, "PATH C:\\;$1");
        }
    } else {
        data += "PATH C:\\\r\n";
    }

    if (sCommand) data += sCommand + "\r\n";
    if (machineDir) data += "CD " + machineDir + "\r\n";
    driveInfo.files.push(makeFileDesc("AUTOEXEC.BAT", data, attr));

    /*
     * Load the boot sector from the system diskette we read above, and use it to update the boot
     * sector on the hard drive image.
     *
     * NOTE: It seems that many (if not all) DOS boot sectors did NOT rely on the DL register to
     * contain the boot drive # (0x00 for floppy drive, 0x80 for hard disk), even though the BIOS
     * passes that information to the master boot record (MBR) and the DOS MBR preserves and passes
     * it on to the boot sector.  And perhaps the key point is "DOS MBR", because DOS also had to
     * work with third-party MBRs, some of which may have trashed DL.
     */
    let verBPB = 0;
    let dbBoot = getDiskSector(diSystem, 0);
    if (version >= 2.0 && version < 3.2) {
        /*
         * PC DOS 2.0 to 3.1 requires the boot drive (AND drive head # -- go figure) to be in locations
         * that later became part of the BPB, and by default, updateBootSector() doesn't let us change any
         * part of the BPB unless we specify a BPB version number, so in this case, it must be 2.
         */
        verBPB = 2;
        dbBoot.writeUInt8(0x80, DiskInfo.BPB.BOOTDRIVE);    // boot sector offset 0x001E
        /*
         * NOTE: Hard-coding the boot drive head # to 0 is fine for our purposes, because when we build a
         * drive image, we place the first (and only) partition immediately after the MBR.  Some systems
         * reserve the entire first track for the MBR, in which case the first partition would not necessarily
         * be located at head 0.
         */
        dbBoot.writeUInt8(0x00, DiskInfo.BPB.BOOTHEAD);     // boot sector offset 0x001F
    }
    else if (version >= 3.2 && version < 4.0) {
        /*
         * When DOS 3.2 writes the boot sector to the media, it inserts the boot drive at offset 0x1fd
         * (just before the 0x55,0xAA signature).
         *
         * Wikipedia claims that offset 0x1fd was used "only in DOS 3.2 to 3.31 boot sectors" and that
         * in "OS/2 1.0 and DOS 4.0, this entry moved to sector offset 0x024 (at offset 0x19 in the EBPB)".
         */
        dbBoot.writeUInt8(0x80, 0x1FD);                     // boot sector offset 0x01FD
    }
    else if (version >= 4.0) {
        dbBoot.writeUInt8(0x80, DiskInfo.BPB.DRIVE);        // boot sector offset 0x0024
    }

    driveManifest = null;
    let done = function(di) {
        if (di) {
            /*
             * This is where I would normally perform the minimum version check (see below).
             */
            let manifest = di.getFileManifest(null, true);
            di.updateBootSector(dbMBR, -1);                 // a volume of -1 indicates the master boot record
            di.updateBootSector(dbBoot, 0, verBPB);
            localDrive = localDrive.replace(/[^/]*$/, di.getName() + ".json");
            if (fLog) printf("building drive: %s\n", localDrive);
            if (writeDiskSync(localDrive, di, false, 0, true, true)) {
                updateDriveInfo(di);
                /*
                 * I've deferred the minimum version check until now, because even if we can't (well, shouldn't)
                 * use the drive image, I'd still like to be able to inspect it.
                 */
                if (di.minDOSVersion && di.minDOSVersion > version) {
                    printf("error: drive requires DOS %s or later\n", di.minDOSVersion.toFixed(2));
                    return;
                }
                driveManifest = manifest;
            }
        }
    }

    let normalize = true;
    if (!sDir.endsWith('/')) sDir += '/';
    if (fLog) printf("reading files: %s\n", sDir);

    readDir(sDir, 0, 0, "PCJS", null, normalize, maxCapacity * 1024, maxFiles, false, driveInfo, done);

    return driveManifest? "" : "unable to build drive";
}

/**
 * buildDiskIndex()
 *
 * Returns diskIndex object (properties are disk names).
 *
 * @returns {Object}
 */
function buildDiskIndex()
{
    let total = 0;
    let diskIndex = {};
    let aDiskettes = machine.fdc && machine.fdc.aDiskettes;
    if (aDiskettes) {
        for (let i = 0; i < aDiskettes.length; i++) {
            let diskette = aDiskettes[i];
            let diskPath = diskette['path'];
            let diskName = diskette['name'];
            if (diskPath.indexOf("/private") >= 0) continue;
            diskIndex[diskName] = {'path': diskPath};
            total++;
            if (total % 100 == 0) {
                printf("diskettes available: %d\r", total);
            }
        }
    }
    printf("total diskettes available: %d\n", total);
    return diskIndex;
}

/**
 * buildFileIndex(diskIndex)
 *
 * Returns fileIndex (properties are file names) built from diskIndex.
 *
 * @param {Object} diskIndex
 * @returns {Object}
 */
function buildFileIndex(diskIndex)
{
    let total = 0;
    let pathIndex = path.join(pcjsDir, "files.json");
    let fileIndex = readFileSync(pathIndex, "utf8", true);
    if (fileIndex) {
        fileIndex = JSON.parse(fileIndex);
    } else {
        fileIndex = {};
        for (let diskName in diskIndex) {
            let diskPath = diskIndex[diskName]['path'];
            let diskJSON = readFileSync(diskPath, "utf8", true);
            if (diskJSON) {
                let disk = JSON.parse(diskJSON);
                let fileTable = disk['fileTable'];
                if (!fileTable) continue;
                for (let j = 0; j < fileTable.length; j++) {
                    let file = fileTable[j];
                    let parts = file['path'].split('/');
                    let fileName = parts[parts.length - 1];
                    if (!fileIndex[fileName]) {
                        fileIndex[fileName] = [];
                    }
                    let newItem = {'disk': diskName, 'size': file['size'], 'date': file['date'], 'hash': file['hash']};
                    /*
                     * Insert the new item into the fileIndex array in 'date' order.
                     */
                    let i = fileIndex[fileName].findIndex(item => item['date'] > newItem['date']);
                    if (i < 0) i = fileIndex[fileName].length;
                    fileIndex[fileName].splice(i, 0, newItem);
                }
                total++;
                if (total % 100 == 0) {
                    printf("diskettes read: %d\r", total);
                }
            }
        }
        printf("total diskettes read: %d\n", total);
        fs.writeFileSync(pathIndex, JSON.stringify(fileIndex));
    }
    return fileIndex;
}

/**
 * updateDriveInfo(di)
 *
 * @param {DiskInfo} di
 */
function updateDriveInfo(di)
{
    if (di.getDriveType(driveInfo)) {
        if (fVerbose) {
            printf("%s drive type %2d: %4d cylinders, %2d heads, %2d sectors/track (%5sMb)\n", driveInfo.driveCtrl, driveInfo.driveType, driveInfo.nCylinders, driveInfo.nHeads, driveInfo.nSectors, driveInfo.driveSize.toFixed(1));
        }
    }
    driveInfo.volTable = di.volTable;
}

/**
 * mapDir(machineDir)
 *
 * Maps the given machine directory to a local directory, using the 'origin' paths in the drive
 * manifest created by buildDrive() and updated by saveDrive().
 *
 * Without a drive manifest, all we can do is join the machine directory to the local directory
 * of the drive's root and hope for the best.  If any part of the machine directory is an 8.3
 * mapping to a non-8.3 local directory, the mapping will not be correct, so you really need an
 * up-to-date drive manifest.
 *
 * Note that machine directories (ie, DOS directories) always use backslashes, manifest paths
 * paths always use forward slashes, and manifest origins always use platform-dependent separators.
 *
 * @param {string} machineDir
 * @returns {string}
 */
function mapDir(machineDir)
{
    let newDir = path.join(localDir, machineDir.replace(/\\/g, path.sep));
    if (driveManifest) {
        machineDir = machineDir.replace(/\\/g, '/');
        if (machineDir[0] != '/') machineDir = '/' + machineDir;
        for (let i = 0; i < driveManifest.length; i++) {
            let item = driveManifest[i];
            if (!(item.attr & DiskInfo.ATTR.SUBDIR)) continue;
            if (item.path == machineDir) {
                newDir = item.origin;
                break;
            }
        }
    }
    return newDir;
}

/**
 * saveDrive(sDir, sImage)
 *
 * If we built a drive on entry, this checks the drive on exit for any changes that need to be saved.
 *
 * @param {string} sDir
 * @param {string|boolean} [sImage] (if true, save to localDrive; if string, save to that path)
 * @returns {boolean}
 */
function saveDrive(sDir, sImage)
{
    let imageData = machine.hdc && machine.hdc.aDrives && machine.hdc.aDrives.length && machine.hdc.aDrives[0].disk;
    if (imageData) {
        let di = new DiskInfo(device, "PCJS");
        if (di.buildDiskFromJSON(imageData)) {
            if (driveManifest) {
                let oldManifest = driveManifest;
                let newManifest = di.getFileManifest(null, true);
                /*
                 * We now have the old and new manifests, and both should be sorted; time to look for differences.
                 */
                let removedDirs = [];
                let iOld = 0, iNew = 0;
                let compareContents = function(a, b) {
                    let aContents = a.contents || [];
                    let bContents = b.contents || [];
                    return aContents.length === bContents.length && aContents.every((element, i) => element === bContents[i]);
                };

                let curMappings = {"/": sDir};
                while (iOld < oldManifest.length || iNew < newManifest.length) {

                    let oldItem = oldManifest[iOld] || {};
                    let newItem = newManifest[iNew] || {};
                    let oldAttr = +oldItem.attr || 0;
                    let newAttr = +newItem.attr || 0;
                    let oldDate = device.parseDate(oldItem.date, true);
                    let newDate = device.parseDate(newItem.date, true);

                    if (oldAttr & DiskInfo.ATTR.SUBDIR) {
                        curMappings[oldItem.path] = oldItem.origin;
                    }

                    let newItemPath = "";
                    if (newItem.path) {
                        let newItemDir, newItemName = "";
                        let i = newItem.path.lastIndexOf("/");
                        newItemDir = newItem.path.slice(0, i) || "/";
                        newItemName = newItem.path.slice(i + 1);
                        if (!curMappings[newItemDir]) {
                            newItemPath = path.join(sDir, newItem.path);
                            if (fDebug) printf("joining: %s => %s\n", newItem.path, newItemPath);
                        } else {
                            newItemPath = path.join(curMappings[newItemDir], newItemName);
                            if (newItemDir == "/") newItemDir = "";
                            if (fDebug) printf("mapping: %s/%s => %s\n", newItemDir, newItemName, newItemPath);
                        }
                        if ((newAttr & DiskInfo.ATTR.SUBDIR) && !curMappings[newItem.path]) {
                            curMappings[newItem.path] = newItemPath;
                        }
                    }

                    if (oldItem.path == newItem.path) {
                        if (oldAttr == newAttr) {
                            /*
                             * Even if both entries are SUBDIR or VOLUME, that's OK, because those entries don't have
                             * contents, so the compare will succeed and writeFileSync() will be bypassed.
                             */
                            if (!compareContents(oldItem, newItem)) {
                                if (fDebug) printf("updating: %s\n", newItemPath);
                                writeFileSync(newItemPath, newItem.contents, false, true);
                            } else {
                                // if (fDebug) printf("skipping: %s\n", newItemPath);
                            }
                        } else {
                            /*
                             * Here's where things get complicated, because we could have scenarios like a directory removed
                             * and a file with the same name created in its place.
                             */
                            try {
                                fs.chmodSync(newItemPath, (newAttr & DiskInfo.ATTR.READONLY)? 0o444 : 0o666);
                            } catch (err) {
                                printf("%s\n", err);
                            }
                        }
                        if (oldDate.getTime() != newDate.getTime()) {
                            try {
                                fs.utimesSync(newItemPath, newDate, newDate);
                            } catch (err) {
                                printf("%s\n", err);
                            }
                        }
                        iOld++;
                        iNew++;
                    } else if (iNew >= newManifest.length || oldItem.path < newItem.path) {
                        /*
                         * Unfortunately, whenever a directory has been removed, we see the directory first,
                         * followed by any files or other directories that it used to contain.  While we could
                         * perform a recursive removal of the directory right now, that comes with some inherent
                         * risk *and* will cause all subsequent unlink() calls for any contained files to fail.
                         * So instead, we simply queue the directory for removal later.
                         */
                        if (!(oldAttr & (DiskInfo.ATTR.HIDDEN | DiskInfo.ATTR.VOLUME))) {
                            let oldItemPath = oldItem.origin || path.join(sDir, oldItem.path);
                            if (oldAttr & DiskInfo.ATTR.SUBDIR) {
                                removedDirs.push(oldItemPath);
                            } else {
                                if (fDebug) printf("removing: %s\n", oldItemPath);
                                try {
                                    fs.unlinkSync(oldItemPath);
                                } catch(err) {
                                    printf("%s\n", err.message);
                                }
                            }
                        }
                        iOld++;
                    } else {
                        if (fDebug) printf("creating: %s\n", newItemPath);
                        try {
                            if (newAttr & DiskInfo.ATTR.SUBDIR) {
                                fs.mkdirSync(newItemPath);
                            } else {
                                writeFileSync(newItemPath, newItem.contents, true, false);
                            }
                            fs.utimesSync(newItemPath, newDate, newDate);
                            if (newAttr & DiskInfo.ATTR.READONLY) {
                                fs.chmodSync(newItemPath, 0o444);
                            }
                        } catch(err) {
                            printf("%s\n", err.message);
                        }
                        iNew++;
                    }
                }
                while (removedDirs.length) {
                    let dir = removedDirs.pop();
                    if (fDebug) printf("removing: %s\n", dir);
                    try {
                        fs.rmdirSync(dir);
                    } catch(err) {
                        printf("%s\n", err.message);
                    }
                }
            }
            if (sImage) {
                if (typeof sImage != "string") {
                    sImage = localDrive.replace(".json", ".img");
                }
                printf("saving drive: %s\n", sImage);
                writeDiskSync(sImage, di, false, 0, true, true);
            }
            return true;
        }
    }
    return false;
}

/**
 * loadDiskette(sDrive, aTokens)
 *
 * When then "load" command is followed by a drive-letter and colon (eg, "load a:"), this function is called
 * with all the remaining tokens on the command-line.  Those tokens determine which disk(s) to display for selection
 * and subsequent loading.
 *
 * Tokens fall into two categories: dash tokens (eg, "--disk", "--file") and non-dash tokens.  Non-dash tokens simply
 * add to the search criteria of whichever dash token is in effect; initially, "--disk" is in effect, which means that:
 *
 *      load a: pc dos
 *
 * is equivalent to:
 *
 *      load a: --disk pc dos
 *
 * You can also combine criteria to further narrow the list of matching diskettes:
 *
 *      load a: --disk pc dos --file chkdsk --date 1982
 *
 * The two primary criteria are disk and file criteria.  Other criteria are secondary; for example, any date criteria
 * will be applied only after any file criteria.
 *
 * If more than one disk matches the criteria, then a numbered list of diskettes will be displayed, and a subsequent
 * "load" command with a number, such as:
 *
 *      load a: 14
 *
 * will load the corresponding diskette.
 *
 * Another option is to load a diskette image directly, using the "--path" option; it supports both PCjs (.json) disk
 * images and raw (.img) disk images:
 *
 *      load a: --path /diskettes/pcx86/sys/dos/ibm/2.00/PCDOS200-DISK1.json
 *      load a: --path https://diskettes.pcjs.org/pcx86/sys/dos/ibm/2.00/PCDOS200-DISK1.json
 *
 * Note that the "load" command is always available from pc.js "command mode", and it is also available from a DOS command
 * prompt IF the machine was launched with a locally built hard drive containing our hidden LOAD.COM utility (see buildDrive()).
 *
 * TODO: Date criteria using "--date" are accepted but not yet acted upon; implement and consider other criteria as well.
 *
 * @param {string} sDrive ('A:' through 'Z:')
 * @param {Array.<string>} aTokens
 * @returns {string} (result of command)
 */
function loadDiskette(sDrive, aTokens)
{
    let result = "";
    let doLoad = function(sDrive, diskName, diskPath) {
        sDrive = sDrive.toUpperCase();
        let iDrive = sDrive.charCodeAt(0) - 'A'.charCodeAt(0);
        diskPath = diskPath || diskIndexCache[diskName]['path'];
        if (diskPath) {
            let done = function(disk, error) {
                if (error == Errors.DOS.INVALID_DRIVE) {
                    result = "invalid drive (" + sDrive + ")";
                } else {
                    result = sprintf("diskette \"%s\"%s loaded (%d)", diskName, disk? (error < 0? " already" : "") : " not", error || 0);
                }
            };
            result = "loading \"" + diskName + "\" in drive " + sDrive;
            machine.fdc.loadDrive(iDrive, diskName, diskPath, false, null, done);
        } else {
            result = "unknown diskette: " + diskName;
        }
    };
    let displayItems = function(sDrive, items, message = "") {
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            if (result) result += '\n';
            if (!item['file']) {
                result += sprintf("%3d: %s", i + 1, item['disk']);
            } else {
                result += sprintf("%3d: %-12s %8d %.10s  \"%s\"", i+1, item['file'], item['size'] || 0, item['date'], item['disk']);
            }
        }
        result += "\nenter \"load " + sDrive + " #\" to load diskette by number" + (message? "\n" + message : "");
        return result;
    };
    if (machine.fdc) {
        let sPath;
        if (aTokens[0] == "--path" && (sPath = aTokens[1]) || (sPath = aTokens[0]).indexOf("http") == 0) {
            doLoad(sDrive, sPath, sPath);
            return result;
        }
        if (diskItems && aTokens.length == 1 && aTokens[0].match(/^\d+$/)) {
            let diskItem = diskItems[+aTokens[0] - 1];
            if (diskItem) {
                if (!diskItem['others']) {
                    doLoad(sDrive, diskItem['disk']);
                } else {
                    diskItems = diskItem['others'];
                    diskItems.unshift(diskItem);
                    delete diskItem['others'];
                    result = displayItems(sDrive, diskItems, "multiple disks with identical file (use \"load a: 1\" to load original selection)");
                }
            } else {
                result = "invalid diskette number (" + aTokens[0] + ")";
            }
            return result;
        }
        diskItems = [];
        let criteria = 'disk';
        let cTokens = 0;
        let dateParts = [];
        let diskNameParts = [];
        let fileNameParts = [];
        for (let token of aTokens) {
            let matchDash = token.match(/^-+(.*)$/);
            if (matchDash) {
                criteria = matchDash[1].toLowerCase();
            } else {
                token = token.toUpperCase();
                if (!cTokens && token.match(/\.[A-Z][A-Z][A-Z]$/)) {
                    /*
                     * If no criteria has been specified, and the token looks like a filename, then assume it's a file.
                     */
                    criteria = 'file';
                }
                /*
                 * Instead of trying to prevent the user from using regex characters:
                 *
                 *      token = token.replace(/([().\[\]])/g, '\\$1');
                 *
                 * we now embrace them.  Unfortunately, when using our DOS "LOAD" utility, the DOS command interpreter
                 * likes to chop commands up whenever it sees the "pipe" operator, so we have two options: allow the user
                 * to put quotes around regex expressions containing pipes, or let them use commas instead of pipes.
                 *
                 * I prefer the latter but also allow the former.  So all these commands are equivalent:
                 *
                 *      load a: --file arc (com,exe)
                 *      load a: --file arc "(com|exe)"
                 *      load a: --file "arc.*(com|exe)"
                 *
                 * NOTE: If you want the base filename to end with "ARC", (eg, "ARC.EXE" or "LHARC.EXE" but not "SEARCH.EXE"),
                 * then use a period preceded by a backslash:
                 *
                 *      load a: --file "arc\.(com|exe"
                 */
                token = token.replace(/^"([^"]*)"$/, '$1').replace(/,/g, '|');
                switch (criteria) {
                case 'date':
                    dateParts.push(token);
                    break;
                case 'disk':
                    diskNameParts.push(token);
                    break;
                case 'file':
                    fileNameParts.push(token);
                    break;
                default:
                    printf("unknown criteria: %s\n", criteria);
                    break;
                }
            }
            cTokens++;
        }
        if (diskNameParts.length || fileNameParts.length) {
            if (!diskIndexCache) {
                diskIndexCache = buildDiskIndex();
                if (diskIndexCache) {
                    diskIndexKeys = Object.keys(diskIndexCache).sort();
                }
            }
            if (diskIndexKeys.length) {
                if (fileNameParts.length) {
                    fileIndexCache = buildFileIndex(diskIndexCache);
                    if (fileIndexCache) {
                        fileIndexKeys = Object.keys(fileIndexCache).sort();
                    }
                }
                /*
                 * If we have file name criteria AND a file name index, then we dig through the file index keys
                 * and build up a list of disk names, similar to diskIndexKeys.  Otherwise, we start with diskIndexKeys.
                 */
                let index = diskIndexCache;
                let itemNames = diskIndexKeys;
                let itemParts = diskNameParts;
                if (fileNameParts.length && fileIndexKeys.length) {
                    index = fileIndexCache;
                    itemNames = fileIndexKeys;
                    itemParts = fileNameParts;
                }
                let searchNames = function(names, parts, index) {
                    let matches = [];
                    try {
                        let pattern = parts.join('.*');
                        if (fDebug) printf("searching for \"%s\"...\n", pattern);
                        let re = new RegExp(pattern, 'i');
                        for (let name of names) {
                            let match = name.match(re);
                            if (match) {
                                if (!Array.isArray(index[name])) {
                                    matches.push({'disk': name});
                                } else {
                                    let a = index[name];
                                    /*
                                     * The items in this array are sorted by date, but we also want to eliminate duplicates
                                     * based on the hash value, so we maintain a hash index here.  The key is the hash value,
                                     * and each hash entry is an array of disk names.
                                     */
                                    let hashIndex = {};
                                    for (let i = 0; i < a.length; i++) {
                                        let item = a[i];
                                        let diskItem = {'disk': item['disk'], 'file': name, 'size': item['size'], 'date': item['date']};
                                        let prevItem = hashIndex[item['hash']];
                                        if (prevItem) {
                                            if (!prevItem['others']) {
                                                prevItem['others'] = [];
                                            }
                                            prevItem['others'].push(diskItem);
                                            continue;
                                        }
                                        hashIndex[item['hash']] = diskItem;
                                        matches.push(diskItem);
                                    }
                                }
                            }
                        }
                    }
                    catch (err) {
                        printf("search error: %s\n", err);
                    }
                    return matches;
                };
                let items = searchNames(itemNames, itemParts, index);
                if (items.length == 1) {
                    doLoad(sDrive, items[0]['disk']);
                } else if (items.length > 1) {
                    /*
                     * Since there are multiple items, our job is to display rather than to load; a subsequent
                     * call to loadDiskette() with an item number will do the actual loading of the selected disk.
                     */
                    diskItems = items;
                    result = displayItems(sDrive, diskItems);
                } else {
                    result = "no diskette(s) found";
                }
            }
            else {
                result = "no diskette(s) available";
            }
        } else {
            result = "missing diskette search options";
        }
    } else {
        result = "no diskette drives (start a machine first)";
    }
    return result;
}

/**
 * doCommand(s)
 *
 * The "exec" command is used internally whenever the machine signals the desire to execute a local command;
 * in that case, if a local drive was built, we save its state to the local file system, then kill the machine,
 * exec the local command, and then rebuild the local drive and reload the machine.
 *
 * It's a bit slow and clunky, but it ensures that the local command sees any file changes that the machine made,
 * and conversely, the machine sees any file changes that the local command made.
 *
 * @param {string} s
 * @returns {string|null} (result of command, or null to quit)
 */
function doCommand(s)
{
    let aTokens = s.split(' ');
    let cmd = aTokens[0].toLowerCase();
    let child, result = "", reload = false, curDir = "", newDir;

    aTokens.splice(0, 1);
    let arg, args = aTokens.join(' ');

    let help = function() {
        let result = "pc.js commands:\n" +
                    "  build [command]\n" +
                    "  disk (displays info)\n" +
                    "  exec [local command]\n" +
                    "  load [drive] [search options]\n" +
                    "  save [local disk image]\n" +
                    "  start [machine]\n" +
                    "  quit";
        if (machine.dbg) {
            result += "\ntype \"?\" for a list of debugger commands (eg, \"g\" to continue running)";
        } else if (machine.cpu) {
            result += "\nmachine commands:\n" +
                    "  g (to continue running)\n" +
                    "start a machine with a debugger for more machine commands";
        }
        return result;
    };

    switch(cmd) {
    case "help":
        result = help();
        break;
    case "build":
        if (machine.cpu) {
            result = "machine already running";
            break;
        }
        arg = checkCommand(localDir, args);
        if (!arg && args) {
            result = "bad command or file name: " + args;
            break;
        }
        buildDrive(localDir, arg, true).then(function(result) {
            if (result) printf("%s\n", result);
        });
        break;
    case "disk":
        if (driveManifest || driveInfo.volTable || driveInfo.driveType >= 0) {
            let info = {
                controller: driveInfo.driveCtrl,
                type: driveInfo.driveType,
                cylinders: driveInfo.nCylinders,
                heads: driveInfo.nHeads,
                sectorsPerTrack: driveInfo.nSectors,
                size: driveInfo.driveSize.toFixed(1) + "mb",
            };
            if (driveInfo.volTable) {
                let vol = driveInfo.volTable[0];
                info.mediaID = sprintf("%#04x", vol.idMedia);
                let sectorsFAT = (vol.vbaRoot - vol.vbaFAT);
                info.typeFAT = vol.nFATBits || vol.idFAT;
                info.totalFATs = sectorsFAT / ((vol.clusTotal * info.typeFAT) / 8 / 512)|0;
                info.sectorsHidden = vol.lbaStart;
                info.sectorsReserved = vol.vbaFAT;
                info.sectorsFAT = sectorsFAT;
                info.sectorsRoot = (vol.nEntries || vol.rootTotal) / 16;
                info.sectorsTotal = vol.lbaTotal + vol.lbaStart;
                info.sectorsPerCluster = vol.clusSecs;
                info.clustersTotal = vol.clusTotal;
                info.clustersFree = vol.clusFree;
                info.bytesTotal = vol.clusTotal * vol.clusSecs * 512;
                info.bytesFree = vol.clusFree * vol.clusSecs * 512;
            }
            result = sprintf("%2j", info);
        } else {
            result = "no built or prebuilt disk";
        }
        break;
    case "exec":
        if (driveManifest) {
            /*
             * TODO: saveDrive() needs to update the driveManifest with any path changes made by the machine.
             */
            saveDrive(localDir);
            machine = newMachine();
            reload = true;
        }
        curDir = process.cwd();
        try {
            process.chdir(mapDir(machineDir));
            let argv = args.split(' ');
            let app = argv[0];
            let appConfig = configJSON['apps']?.[app];
            if (appConfig) {
                if (appConfig['exec']) {
                    args = appConfig['exec'].replace(/\$\*/, argv.slice(1).join(' '));
                }
            }
            child = child_process.execSync(args, {
                stdio: [
                process.stdin,
                process.stdout,
                process.stderr
                ]
            });
        } catch(err) {
            printf("%s\n", err.message);
        }
        process.chdir(curDir);
        if (reload) {
            result = reloadMachine();
            if (typeof result != "string") result = "";
        }
        break;
    case "load":
        arg = aTokens[0];
        if (arg) {
            let matchDrive = arg.match(/^([a-z]:?)$/i);
            if (matchDrive) {
                aTokens.splice(0, 1)
                result = loadDiskette(matchDrive[1], aTokens);
            } else {
                result = "invalid diskette drive: " + arg;
            }
        } else {
            result = "missing diskette drive (eg, A:)";
        }
        break;
    case "save":
        saveDrive(localDir, aTokens[0] || true);
        break;
    case "start":
        arg = aTokens[0];
        if (!arg && !machine.cpu) {
            arg = savedMachine;
        }
        if (arg) {
            let sFile = checkMachine(arg);
            if (sFile) {
                machine = newMachine();
                printf("loading machine: %s\n", sFile);
                result = loadMachine(sFile);
                if (!result) {
                    localMachine = sFile;
                }
            } else {
                result = "unrecognized machine: " + arg;
            }
        } else {
            result = "missing machine file";
        }
        break;
    case "q":
    case "quit":
        return null;
    default:
        if (s) {
            if (!machine.dbg) {
                /*
                 * For machines without a debugger, provide some *very* limited machine control.
                 */
                switch(cmd) {
                case "?":
                    result = help();
                    break;
                case "g":
                    if (machine.cpu) {
                        if (machine.cpu.startCPU()) {
                            setDebugMode(DbgLib.EVENTS.EXIT);
                        }
                    } else {
                        result = "no machine loaded";
                    }
                    break;
                default:
                    result = "unknown command: " + s;
                    break;
                }
            } else {
                try {
                    if (!machine.dbg.doCommands(s, true, true)) {
                        result = eval('(' + s + ')');
                    }
                } catch(err) {
                    result = err.message;
                }
            }
        }
        break;
    }
    commandPrev = s;
    return result? result + "\n" : "";
}

/**
 * processArgs(argv)
 *
 * Arguments that either the shell consumes (like *.*) or that we consume (like --help) can be
 * problematic if those are actually arguments you want to pass along with a command to buildDrive().
 *
 * So in those cases, you should simply put quotes around the entire command (eg, pc.js "dir *.* /p").
 *
 * @param {Array} argv
 */
async function processArgs(argv)
{
    let loading = false;
    let error = "", warning = "";

    let splice = false;
    let sFile = argv['start'];
    if (typeof sFile != "string") {
        sFile = argv[1];                        // for convenience, we also allow a bare machine name
        if (sFile) splice = true;
    }
    if (sFile) {
        localMachine = checkMachine(sFile);
        if (localMachine) {
            if (splice) argv.splice(1, 1);
        } else if (sFile.endsWith(".json") || !splice) {
            error = "unknown machine: " + sFile;
        }
    }

    let verifyDir = function(s) {
        if (s[0] == '~') {
            s = path.join(process.env.HOME, s.slice(1));
        } else {
            s = path.resolve(s);
        }
        return existsDir(s, false)? s : "";
    };

    if (typeof argv['disk'] == "string") {
        localDrive = argv['disk'];
        let di = await readDiskAsync(localDrive);
        if (di) {
            updateDriveInfo(di);
        } else {
            error = "invalid disk";
        }
        localDir = "";
    } else {
        localDrive = path.join(pcjsDir, localDrive);
    }

    if (localDir) {                             // --dir is allowed only if --disk has not been used
        let sDir = "";
        if (!error) {
            splice = false;
            sDir = argv['dir'];
            if (typeof sDir != "string") {
                sDir = argv[1];                 // for convenience, we also allow a bare directory name
                if (sDir) splice = true;
            }
            if (sDir) {
                let newDir = verifyDir(sDir);
                if (newDir) {
                    localDir = newDir;
                    if (splice) argv.splice(1, 1);
                } else {
                    if (!splice) error = "invalid directory: " + sDir;
                    sDir = "";
                }
            }
        }
        if (!sDir) {
            localDir = verifyDir(localDir);
        }
    }

    if (!error) {
        if (argv[1]) {                          // last but not least, check for a DOS command or program name
            let args = argv.slice(1).join(' ');
            let sCommand = checkCommand(localDir, args);
            if (!sCommand && args) {
                error = "command not found: " + args;
            } else if (!localDir) {
                warning = "unable to execute command '" + sCommand + "' with prebuilt disk";
            } else {
                error = await buildDrive(localDir, sCommand);
                if (!error) {
                    if (!localMachine) {
                        localMachine = checkMachine(savedMachine) || savedMachine;
                    }
                }
            }
        }
        if (localMachine && !error) {
            error = loadMachine(localMachine);
            if (!error) {
                loading = true;
            } else {
                localMachine = "";
            }
        }
    }

    if (error || warning) {
        printf("%s\n", error || warning);
    }

    if (!loading) setDebugMode(DbgLib.EVENTS.READY);
}

/**
 * readInput(stdin, stdout)
 *
 * @param {Object} stdin
 * @param {Object} stdout
 */
function readInput(stdin, stdout)
{
    stdin.resume();
    stdin.setEncoding("utf8");
    stdin.setRawMode(true);

    stdin.on("data", function(data) {
        let code = data.charCodeAt(0);
        if (Defines.MAXDEBUG) {
            printf("key(s): %j\n", data);
        }
        if (code == 0x04 && !debugMode) {               // check for CTRL-D when NOT in debug mode
            if (machine.cpu) machine.cpu.stopCPU();
            setDebugMode(DbgLib.EVENTS.READY);
            return;
        }
        if (code == 0x03 && debugMode) {                // check for CTRL-C when in debug mode
            printf("terminating...\n");
            exit();
            return;
        }
        if (!debugMode) {
            data = functionKeys[data] || data;
            data = data.replace(/\x7f/g, "\b");         // convert DEL to BS
            if (machine.kbd) {
                if (Defines.MAXDEBUG) {
                    printf("injecting key(s): %s\n", data);
                }
                machine.kbd.injectKeys.call(machine.kbd, data, 0);
            } else {
                sendSerial(code);
            }
            return;
        }
        if (code == 0x08 || code == 0x7f) {             // implement BS/DEL ourselves (since we're in "raw" mode)
            if (command.length) {                       // (Windows generates BS, macOS generates DEL)
                command = command.slice(0, -1);
                printf("\b \b");                        // by converting it to BS + SPACE + BS
            }
            return;
        }
        if (code == 0x01 && commandPrev) {              // implement CTRL-A as a command repeat action
            data = commandPrev + '\r';
        }
        else if (data == "\x1b[A" && !command.length) { // implement UP ARROW ourselves (since we're in "raw" mode)
            data = commandPrev;
        }
        else if (code < 0x20 && code != 0x0d) {         // anything else (including any ESC codes) is ignored
            return;
        }
        printf("%s", data);
        command += data;
        do {
            let i = command.indexOf("\r");
            if (i < 0) break;
            let s = command.slice(0, i);
            printf("\n");
            let result = doCommand(s);
            if (result == null) {
                exit();
                return;
            }
            printf(result);
            if (machine.cpu && machine.cpu.isRunning()) {
                break;
            }
            printf("%s> ", prompt);
            command = command.slice(i+1);
        } while (command.length);
    });
}

/**
 * exit()
 */
function exit()
{
    saveDrive(localDir, fWrite);
    process.stdin.setRawMode(false);
    process.exit();
}

/**
 * main(argc, argv)
 *
 * @param {number} argc
 * @param {Array} argv
 */
function main(argc, argv)
{
    fDebug = argv['debug'] || fDebug;
    fVerbose = argv['verbose'] || fVerbose;

    device.setDebug(fDebug);
    device.setMessages(MESSAGE.DISK + MESSAGE.WARN + MESSAGE.ERROR + (fDebug? MESSAGE.DEBUG : 0) + (fVerbose? MESSAGE.INFO : 0), true);
    messagesFilter = fDebug? Messages.ALL + Messages.TYPES + Messages.ADDRESS : Messages.ALERTS;

    let arg0 = argv[0].split(' ');
    rootDir = path.join(path.dirname(arg0[0]), "../..");
    pcjsDir = path.join(rootDir, "/tools/pc");
    setRootDir(rootDir, argv['local']? true : (argv['remote']? false : null));

    if (!argv[1] || argv['debug']) {
        let options = arg0.slice(1).join(' ');
        printf("pc.js v%s\n%s\n%s", Device.VERSION, Device.COPYRIGHT, (options? sprintf("Options: %s\n", options) : ""));
    }

    machines = JSON.parse(readFileSync("/machines/machines.json"));
    configJSON = JSON.parse(readFileSync(path.join(pcjsDir, "pc.json"))) || configJSON;
    let defaults = configJSON['defaults'] || {};

    machineType = argv['type'] || defaults['type'] || machineType;
    systemType = (typeof argv['system'] == "string" && argv['system'] || defaults['system'] || systemType).toLowerCase();
    systemVersion = (typeof argv['version'] == "string" && argv['version'] || defaults['version'] || systemVersion);
    systemOverride = argv['system'] || argv['version'];
    savedMachine = defaults['machine'] || savedMachine;
    savedState = defaults['state'] || savedState;
    maxFiles = +argv['maxfiles'] || defaults['maxfiles'] || maxFiles;
    maxCapacity = parseFloat(argv['drivesize']) || parseFloat(defaults['drivesize']) || maxCapacity;
    localDir = defaults['directory'] || localDir;

    if (typeof argv['drivectrl'] == "string") {
        driveInfo.driveCtrl = argv['drivectrl'].toUpperCase();
        driveOverride = true;
    }

    if (typeof argv['drivetype'] == "string") {
        let typeDrive = argv['drivetype'];
        let match =typeDrive.match(/^([0-9]+):([0-9]+):([0-9]+)$/i);
        if (match) {
            maxCapacity = 0;
            driveInfo.driveCtrl = "PCJS";      // this pseudo drive controller is required for custom drive geometries
            driveInfo.driveType = 0;
            driveInfo.nCylinders = +match[1];
            driveInfo.nHeads = +match[2];
            driveInfo.nSectors = +match[3];
            driveOverride = true;
        } else {
            match =typeDrive.match(/^([A-Z]+|):?([0-9]+)$/i)
            if (match) {
                let driveCtrl = match[1] || driveInfo.driveCtrl;
                let driveType = +match[2];
                if (DiskInfo.validateDriveType(driveCtrl, driveType)) {
                    driveInfo.driveCtrl = driveCtrl;
                    driveInfo.driveType = driveType;
                    driveOverride = !!match[1];
                } else {
                    match = null;
                }
            }
        }
        if (!match) {
            printf("unrecognized drive type: %s\n",typeDrive);
        }
    }

    if (typeof argv['fat'] == "string") {
        driveInfo.typeFAT = +argv['fat'] || driveInfo.typeFAT;
    }

    fHalt = argv['halt'] || fHalt;
    fNoFloppy = argv['nofloppy'] || fNoFloppy;
    fWrite = argv['write'] || fWrite;

    if (argv['help']) {
        let optionsMain = {
            "--start=[machine file]":   "start machine configuration file",
        };
        let optionsHard = {
            "--dir=[directory]":        "set drive local directory (default is " + localDir + ")",
            "--disk=[disk image]":      "set drive disk image (instead of directory)",
            "--drivectrl=[ctrl]":       "set drive controller (eg, XT, AT, COMPAQ)",
            "--drivesize=[size]":       "set drive capacity (default is " + maxCapacity + "mb)",
            "--drivetype=[number]":     "set drive type # or C:H:S values (eg, 306:4:17)",
            "--fat=[number]":           "\tset FAT type (12 or 16; default is variable)",
            "--maxfiles=[number]":      "set maximum local files (default is " + maxFiles + ")",
            "--system=[string]":        "operating system type (default is " + systemType + ")",
            "--version=[#.##]":         "operating system version (default is " + systemVersion + ")"
        };
        let optionsOther = {
            "--debug (-d)\t":           "enable DEBUG messages",
            "--halt (-h)\t":            "halt machine on startup",
            "--help (-?)\t":            "display command-line usage",
            "--local (-l)\t":           "use local diskette images",
            "--nofloppy (-n)\t":        "remove any diskette from A:",
            "--verbose (-v)\t":         "enable verbose mode",
            "--write (-w)\t":           "write hard drive image on return"
        };
        let optionGroups = {
            "machine options:":         optionsMain,
            "hard drive options:":      optionsHard,
            "other options:":           optionsOther
        }
        printf("\nusage:\n\t[node] pc.js [machine file] [local directory] [DOS command] [options]\n");
        for (let group in optionGroups) {
            printf("\n%s\n\n", group);
            for (let option in optionGroups[group]) {
                printf("\t%s\t%s\n", option, optionGroups[group][option]);
            }
        }
        printf("\npc.js configuration settings are stored in %s\n", path.join(pcjsDir, "pc.json"));
        return;
    }

    processArgs(argv);

    readInput(process.stdin, process.stdout);
}

main(...pcjslib.getArgs({
    '?': "help",
    'd': "debug",
    'h': "halt",
    'l': "local",
    'n': "nofloppy",
    'v': "verbose",
    'w': "write"
}));
