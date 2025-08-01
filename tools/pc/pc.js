#!/usr/bin/env node
/**
 * @fileoverview Implements the PCjs machine command-line interface
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * Test examples:
 *
 *      cd disks
 *      diskimage.js /diskettes/pcx86/sys/dos/compaq/3.31/COMPAQ-DOS331-REVG-720K-DISK1.json --extract --dest=compaq331
 *      diskimage.js /diskettes/pcx86/sys/dos/compaq/3.31/COMPAQ-DOS331-REVG-720K-DISK2.json --extract --dest=compaq331
 *      diskimage.js /diskettes/pcx86/sys/dos/compaq/3.31/COMPAQ-DOS331-REVG-720K-DISK3.json --extract --dest=compaq331
 *      for ((t=1; t<=99; t++)); do pc.js compaq331 "load info;chkdsk" --drivetype=$t --sys=compaq:3.31g --test; if [ $? -ne 0 ]; then break; fi; done
 */

import DataBuffer    from "../../machines/modules/v2/databuffer.js";
import DbgLib        from "../../machines/modules/v2/dbglib.js";
import StrLib        from "../../machines/modules/v2/strlib.js";
import Device        from "../../machines/modules/v3/device.js";
import CharSet       from "../../machines/pcx86/modules/v2/charset.js";
import DiskInfo      from "../../machines/pcx86/modules/v3/diskinfo.js";
import { MAXDEBUG, globals }  from "../../machines/modules/v3/defines.js";
import MESSAGE       from "../../machines/modules/v3/message.js";
import WebIO         from "../../machines/modules/v3/webio.js";
import DiskLib       from "../modules/disklib.js";
import PCJSLib       from "../modules/pcjslib.js";
import { node }      from "../modules/nodeapi.js";

await node.import("child_process", "fs", "glob", "json5", "path", "xml2js");

let device = new Device("node");
let printf = device.printf.bind(device);
let sprintf = device.sprintf.bind(device);
let diskLib = new DiskLib(device);

let rootDir, pcjsDir;
let configFile = "pc.json5";
let configJSON = {}, machines = null;

/**
 * @class {PC}
 */
export default class PC extends PCJSLib {

    bare = false;               // true if --bare specified
    debug = false;              // true if --debug specified
    halt = false;               // true if --halt specified
    floppy = false;             // true if --floppy specified
    bootSector = "";
    bootSelect = "";
    serial = false;             // true if --serial specified
    useSerial = false;
    normalize = false;          // true if --normalize specified
    test = false;               // true if --test specified
    verbose = false;            // true if --verbose specified
    autoStart = false;
    training = 4;               // training message count
    machineType = "pcx86";
    systemType = "msdos";
    systemVersion = "3.30";
    systemMBR = "pcjs.mbr";
    savedMachine = "compaq386.json";
    savedState = "state386.json";
    localMachine = "";          // current machine config file
    localDir = ".";             // local directory used to build localDisk
    localDisk = "harddisk.json";
    localDiskette = "floppy.json";
    diskLabel = "default";
    machineDrive = "";          // current drive *inside* the machine
    machineDir = "";            // current directory *inside* the machine
    maxFiles = 1024;            // default disk file limit
    kbTarget = 10 * 1024;       // default disk capacity, in kilobytes (Kb)
    shutdown = false;
    messages = false;           // true if --messages specified
    messagesFilter; debugMode;
    prompt = ">"; command = ""; commandPrev = "";
    machine = "test";           // TODO: Remove after testing
    Component; Errors; Interrupts; Web; embedMachine;

    diskItems = [];
    diskIndexCache = null; diskIndexKeys = [];
    fileIndexCache = null; fileIndexKeys = [];

    /**
     * Each entry in drives[] is a driveInfo object, created by newDrive().
     */
    drives = [];
    driveBuild = 0;             // by default, the drive we build, if any, will be drive 0
    geometryOverride = false;

    static functionKeys = {
        "ArrowUp":      "$up",
        "ArrowDown":    "$down",
        "ArrowRight":   "$right",
        "ArrowLeft":    "$left",
        "F1":           "$f1",
        "F2":           "$f2",
        "F3":           "$f3",
        "F4":           "$f4",
        "F5":           "$f5",
        "F6":           "$f6",
        "F7":           "$f7",
        "F8":           "$f8",
        "F9":           "$f9",
        "F10":          "$f10",
        "F11":          "$f11",
        "F12":          "$f12",
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

    static optionMap = {
        '?': "help",
        'b': "bare",
        'c': "commands",
        'd': "debug",
        'f': "floppy",
        'h': "halt",
        'l': "local",
        'n': "normalize",
        's': "serial",
        't': "test",
        'v': "verbose"
    };

    /**
     * PC()
     *
     * @this {PC}
     * @param {string} [idTerminal]
     * @param {string} [sCommands]
     */
    constructor(idTerminal, sCommands = "")
    {
        super();
        let pc = this;
        this.commands = sCommands;
        this.machine = this.newMachine();
        this.onTerminalData = null;
        this.terminalEncoding = "";
        this.terminalRawMode = false;
        if (idTerminal) {
            this.terminal = document.querySelector('#' + idTerminal);
            if (this.terminal) {
                device.addBinding(WebIO.BINDING.PRINT, this.terminal, this.onTerminalInput.bind(this));
                node.process.stdin = {
                    resume: function() {},
                    setEncoding: function(encoding) {
                        pc.terminalEncoding = encoding;
                    },
                    setRawMode: function(rawMode) {
                        pc.terminalRawMode = rawMode;
                    },
                    on: function(event, fn) {
                        if (event == "data") {
                            pc.onTerminalData = fn;
                        }
                    }
                };
            }
            this.main(...PC.mapArgs(PC.optionMap)).catch((err) => {
                printf("exception: %s\n", err.message);
            });
        }
    }

    /**
     * onTerminalInput(event, down)
     *
     * @this {PC}
     * @param {Event} event
     * @param {boolean} [down] (true if keydown, false if keyup, undefined if keypress)
     * @returns {boolean} (true to consume the event, false to pass it on)
     */
    onTerminalInput(event, down)
    {
        if (this.onTerminalData && this.terminalRawMode) {
            let data;
            if (event.type == "keydown") {
                switch(event.key) {
                case "Backspace":
                case "Delete":
                    data = "\b";
                    break;
                case "Enter":
                    data = "\r";
                    break;
                case "Escape":
                    data = "\x1b";
                    break;
                case "Tab":
                    data = "\t";
                    break;
                case "Control":
                case "Shift":
                case "Alt":
                case "Meta":
                    break;
                default:
                    if (event.ctrlKey) {
                        if (event.key >= "a" && event.key <= "z") {
                            data = String.fromCharCode(event.key.charCodeAt(0) - 96);
                        }
                        break;
                    }
                    if (event.altKey || event.metaKey) break;
                    data = event.key;
                    break;
                }
            } else if (event.type == "keypress") {
                data = event.key;
            }
            if (data) {
                this.onTerminalData(data);
                return true;
            }
        }
        return false;
    }

    /**
     * setDebugMode(nEvent, dataEvent)
     *
     * @this {PC}
     * @param {number} nEvent (eg, DbgLib.EVENTS.EXIT (0), DbgLib.EVENTS.ENTER (1), DbgLib.EVENTS.READY (2))
     * @param {number} [dataEvent] (non-zero if debugger is stepping; we want to avoid unnecessary output in that case)
     */
    setDebugMode(nEvent, dataEvent)
    {
        /**
         * Once the user has been sufficiently trained, we no longer display the helpful "training" messages.
         */
        let message = this.training > 0 && !dataEvent;
        let prevMode = this.debugMode;
        if (!nEvent && this.debugMode != nEvent) {
            if (message && !this.test) {
                printf("[Press CTRL-D to enter command mode]\n");
                this.training--;
            }
        }
        this.debugMode = nEvent;
        if (this.debugMode == DbgLib.EVENTS.READY && prevMode != DbgLib.EVENTS.READY) {
            this.command = "";
            if (message) {
                printf('[' + (this.commandPrev? "Press CTRL-A to repeat last command" : "Type help for list of commands") + ", CTRL-C to terminate]\n");
                this.training--;
            }
            printf("%s> ", this.prompt);
        }
    }

    /**
     * convertXML(xml, idAttrs)
     *
     * @this {PC}
     * @param {Object} xml
     * @param {string} [idAttrs]
     * @returns {Object} (JSON-style machine configuration)
     */
    convertXML(xml, idAttrs = '@')
    {
        let machine = {};
        /**
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
                    /**
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
     * @this {PC}
     * @param {string} factory
     * @param {Array.<string>} modules
     * @param {function()} done
     */
    async loadModules(factory, modules, done)
    {
        let pc = this;
        for (let modulePath of modules) {
            /**
             * Unless I replace all backslashes in modulePath with forward slashes; eg:
             *
             *      .replace(/\\/g, '/')
             *
             * Node will fail on Windows operating systems with the following error:
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
            modulePath = node.path.join("../..", modulePath).replace(/\\/g, '/');
            if (this.debug) printf("loading: %s\n", modulePath.replace(/\.\.\/\.\.\//g, '/'));
            let name = node.path.basename(modulePath, ".js");
            if (name == "embed") {
                let { [factory]: embed } = await import(modulePath);
                this.embedMachine = embed;
                continue;
            }
            let module = await import(modulePath);
            /**
             * Below are the set of classes that we need access to (eg, their static methods, constants, etc).
             */
            switch(name) {
            case "component":
                this.Component = module.default;
                /**
                 * We override Component.printf() in order to replace its DEBUG check with our own debug check.
                 */
                this.Component.printf = function(format, ...args) {
                    let bitsMessage = 0;
                    if (typeof format == "number") {
                        bitsMessage = format;
                        format = args.shift();
                    }
                    if (pc.Component.testBits(bitsMessage, MESSAGE.ERROR)) {
                        format = "error: " + format + "\n";
                        bitsMessage = 0;
                    }
                    if (pc.Component.testBits(bitsMessage, MESSAGE.WARNING)) {
                        format = "warning: " + format + "\n";
                        bitsMessage = 0;
                    }
                    if (pc.debug || !bitsMessage) {
                        printf(format, ...args);
                    }
                };
                break;
            case "defines":
                /**
                 * Whereas OUR "globals.browser" value reflects whether WE are running in a browser, we always
                 * want the machine's "globals.browser" value to indicate that it is NOT running in a browser, so that
                 * Component.getElementsByClass() will always build fake HTML elements for the machine's initialization.
                 */
                module.globals.browser = false;
                break;
            case "errors":
                this.Errors = module.default;
                break;
            case "interrupts":
                this.Interrupts = module.default;
                break;
            case "weblib":
                this.Web = module.default;
                break;
            }
            /**
             * If there's any chance that the module might print something, add a function to intercept it.
             */
            if (module.default && module.default.prototype) {
                module.default.prototype.print = function print(s, bitsMessage) {
                    if ((pc.debugMode || !pc.autoStart) && !bitsMessage || (bitsMessage || pc.messages) && pc.Component.testBits(pc.messagesFilter, bitsMessage)) {
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
     * @this {PC}
     * @param {string} args
     */
    initMachine(args)
    {
        let machine = this.machine;
        let Component = this.Component;
        let Interrupts = this.Interrupts;
        try {
            /**
             * Simulate the "web page" embedding and initialization process now.
             */
            this.embedMachine(machine.id, null, null, args);
            this.Web.doPageInit();

            /**
             * Get the CPU component so we can keep tabs on its running state and also hook
             * a few interrupts (eg, INT 0x10).  Get the Debugger component so we can override
             * the debugger's print() function.
             */
            machine.cpu = Component.getComponentByType("CPU");
            if (machine.cpu && machine.cpu.addIntNotify && Interrupts) {
                machine.cpu.addIntNotify(Interrupts.VIDEO, this.intVideo.bind(this));
                machine.cpu.addIntNotify(Interrupts.VIDEO_VGA, this.intVideoVGA.bind(this));
                machine.cpu.addIntNotify(Interrupts.DISK, this.intDisk.bind(this));
                machine.cpu.addIntNotify(Interrupts.BOOTSTRAP, this.intReboot.bind(this));
                machine.cpu.addIntNotify(Interrupts.DOS_EXIT, this.intLoad.bind(this));
            }

            /**
             * Get the FDC component so we can query its list of available diskettes,
             * and get the HDC component so we can get the state of its hard drive(s).
             */
            machine.fdc = Component.getComponentByType("FDC");
            machine.hdc = Component.getComponentByType("HDC");

            /**
             * Get the Debugger component so we can receive debugger events and send
             * debugger commands.
             */
            machine.dbg = Component.getComponentByType("Debugger");
            if (machine.dbg) machine.dbg.onEvent(this.setDebugMode.bind(this));

            /**
             * Get the Keyboard component to get access to injectKeys(), which simplifies the
             * injection of keystrokes into the machine.
             */
            machine.kbd = Component.getComponentByType("Keyboard");

            /**
             * Establish a serial connection for console I/O if --serial was specified OR there's
             * no keyboard device (as in the case of our PDP-11 machines).
             */
            if (this.serial || !machine.kbd) {
                machine.serial = Component.getComponentByType("SerialPort");
                if (machine.serial) {
                    let exports = machine.serial['exports'];
                    if (exports) {
                        /**
                         * The PDP-11 serial.js component exports a "setConnection" function, whereas the
                         * PC serial.js component exports a "bind" function.  TODO: Bring the PDP-11 and PC
                         * serial interfaces into alignment.
                         */
                        let fnSetConnection = exports['bind'] || exports['setConnection'];
                        if (fnSetConnection) {
                            if (fnSetConnection.call(machine.serial, this, this.receiveSerial)) {
                                machine.fnSendSerial = exports['receiveData'];
                            }
                        }
                    }
                }
            }

            /**
             * Since there may be no debugger (and even if there is, machines that are auto-started won't
             * trigger any debugger events), we simulate an appropriate event.
             *
             * NOTE: The test here used to be "machine.cpu && machine.cpu.isRunning()", but if you're not using
             * the --local option, the CPU may not up and running yet, so we rely on the autoStart setting instead.
             */
            this.setDebugMode(machine.cpu && this.autoStart? DbgLib.EVENTS.EXIT : DbgLib.EVENTS.READY);
        }
        catch(err) {
            printf("machine initialization error: %s\n", err.message);
        }
    }

    /**
     * intVideo(addr)
     *
     * Notification handler for all INT 0x10 software interrupts.
     *
     * @this {PC}
     * @param {number} addr
     * @returns {boolean} true to proceed with the INT 0x10 software interrupt, false to skip
     */
    intVideo(addr)
    {
        let count = 1, s;
        let maxRows = 25, maxCols = 80;     // TODO: update these to reflect active video mode
        let machine = this.machine, cpu = machine.cpu;

        let CX = (cpu.regECX & 0xffff);
        let AH = ((cpu.regEAX >> 8) & 0xff), AL = (cpu.regEAX & 0xff);
        let DH = ((cpu.regEDX >> 8) & 0xff), DL = (cpu.regEDX & 0xff);

        if (machine.nestedVideo) {          // some BIOSes issue calls within the "write TTY" (0x0E)
            return true;                    // function, and we want to ignore those
        }

        switch (AH) {
        case 0x00:
            machine.rowCursor = machine.colCursor = 0;
            break;
        case 0x02:                          // set cursor position (row=DH, col=DL)
            if (DL >= maxCols || DH >= maxRows) {
                break;                      // ignore "off-screen" positions
            }
            if (DH > machine.rowCursor || DH < machine.rowCursor && DL < machine.colCursor) {
                printf('\n');
            }
            else if (DH == machine.rowCursor) {
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
                else if (DL > machine.colCursor) {
                    /**
                     * When BASIC/BASICA erases a character (in response to a BS/DEL key), it wants to redraw
                     * the entire line (eg, with spaces if there was nothing past the character being deleted);
                     * in that situation, it seems best (well, certainly easiest) to simply ignore the cursor
                     * updates and let the spaces ("chips") fall where they may.
                     */
                    break;
                }
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
            /**
             * NOTE: I don't think the IBM BIOS handled CX == 0 very well (it looped 65536 times instead),
             * so we're not going to emulate/risk that.  Also, this function isn't supposed to move the
             * cursor, but when it's used with a count of 1, the caller usually plans to move the cursor
             * themselves anyway, so we assume they will; otherwise, we should "backspace" an equal number
             * of times afterward.
             */
            count = CX || 1;
            if (count != 1) {
                // printf("%s%s", s.repeat(count), "\b".repeat(count));
                break;
            }
            /* falls through */
        case 0x0E:                          // write TTY char (AL)
            /**
             * By default, fromCP437() does NOT translate control characters to UTF-8, which is the proper
             * thing to do for TTY control characters (ie, BEL, BS, LF, and CR) that the TTY function (0x0E)
             * wants to handle, but all other characters must be translated (including ESC or 0x1B, which
             * BASIC uses to display a left-arrow symbol).
             */
            s = CharSet.fromCP437(AL, AH != 0x0E || [0x07, 0x08, 0x0A, 0x0D].indexOf(AL) < 0);
            printf("%s", s.repeat(count));
            if (s == '\r') {
                machine.colCursor = 0;
            } else if (s == '\n') {
                while (machine.rowCursor < maxRows && count--) {
                    machine.rowCursor++;
                }
            } else if (s == '\b') {
                while (machine.colCursor > 0 && count--) {
                    machine.colCursor--;
                }
            } else {
                while (machine.colCursor < maxCols && count--) {
                    machine.colCursor++;
                }
            }
            break;
        }

        /**
         * Originally, we only hooked the IRET if a TTY function (0x0E) was being performed, because that
         * was the only time we wanted to ignore nested INT 0x10 calls, but since we're also handling INT 0x6D
         * calls now (so that we don't miss video calls trigged by CALLF), we need to hook the IRET every time.
         */
        machine.nestedVideo++;              // TTY function performs nested cursor control calls (eg, AH=0x02)
        cpu.addIntReturn(addr, function onVideoReturn(nLevel) {
            machine.nestedVideo--;
        });
        return true;
    }

    /**
     * intVideoVGA(addr)
     *
     * Notification handler for all INT 0x6D software interrupts.
     *
     * Assuming you're using an IBM VGA, its BIOS initializes vector 6Dh to the VGA BIOS entry point,
     * and then it initializes vector 10h to issue INT 0x6D followed by an IRET.
     *
     * The ONLY reason we intercept this is to support newer versions of DOS (eg, PC DOS 6.x and 7.x),
     * which decided to use PUSHF/CALLF to call BIOS video functions instead of a normal INT 10h.  Since
     * our intVideo() handler will ignore nested calls, it will ignore any INT 0x6D that was generated by
     * an INT 0x10, but it will NOT ignore calls that were triggered by CALLF.
     *
     * Other more resilient ways to avoid the PUSHF/CALLF problem would be to patch the BIOS or install
     * our own handler somewhere in the machine's memory, but obviously that's more work, whereas so far,
     * I've managed to maintain a completely non-invasive solution.  The PCjs debugger also supports
     * execution breakpoints that are non-invasive (similar to how the 80386 debug registers work), so I
     * could tap into that functionality, but that's also a bit messy (and more work).
     *
     * @this {PC}
     * @param {number} addr
     * @returns {boolean} true to proceed with the INT 0x6D software interrupt, false to skip
     */
    intVideoVGA(addr)
    {
        return this.intVideo(addr);
    }

    /**
     * intDisk(addr)
     *
     * @this {PC}
     * @param {number} addr
     * @returns {boolean} true to proceed with the INT 0x13 software interrupt, false to skip
     */
    intDisk(addr)
    {
        if (this.geometryOverride) {
            let cpu = this.machine.cpu;
            /**
             * We do basically the same thing our custom MBR does: build drive tables in unused
             * interrupt vector space (16 bytes spanning vectors 0xC0 to 0xC3 for drive 0, and 16
             * bytes spanning vectors 0xC4 to 0xC7 for drive 1) and then update the drive table
             * address at vector 0x41 and/or 0x46 as appropriate.
             *
             * I don't relish altering the machine state like this (using the custom MBR is much
             * cleaner and should actually be compatible with real hardware), but in order to ALSO
             * test the operating system's ability to initialize and format drives with custom
             * geometries from scratch, this seems the best alternative.
             */
            for (let i = 0; i <= 1; i++) {
                if (!this.drives[i]) break;
                if (this.drives[i].drivetype == 0) {
                    let vec = 0xC0 + i * 4;
                    for (let off = 0; off < 16; off++) {
                        let b = 0;
                        switch(off) {
                        case 0x00:
                            b = this.drives[i].nCylinders & 0xff;
                            break;
                        case 0x01:
                            b = (this.drives[i].nCylinders >> 8) & 0xff;
                            break;
                        case 0x02:
                            b = this.drives[i].nHeads;
                            break;
                        case 0x0E:
                            b = this.drives[i].nSectors;
                            break;
                        }
                        cpu.setByte(vec * 4 + off, b);
                    }
                    vec = (i == 0)? 0x41 : 0x46;
                    cpu.setShort(vec * 4, (0xC0 + i * 4) * 4);
                    cpu.setShort(vec * 4 + 2, 0);
                }
            }
            this.geometryOverride = false;
        }
        return true;
    }

    /**
     * intReboot(addr)
     *
     * @this {PC}
     * @param {number} addr
     * @returns {boolean} true to proceed with the INT 0x19 software interrupt, false to skip
     */
    intReboot(addr)
    {
        /**
         * An INT 19h issued from our own QUIT.COM is a signal to shut down.
         */
        let cpu = this.machine.cpu;
        if (cpu.getIP() == 0x102) {
            let sig = cpu.getSOWord(cpu.segCS, cpu.getIP()+2) + (cpu.getSOWord(cpu.segCS, cpu.getIP()+4) << 16);
            if (sig == 0x534A4350) {        // "PCJS"
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
                if (!args) {                // if there were no arguments, then simply "quit"
                    this.exit(0);
                    return false;
                }
                if (args.toLowerCase() != "/r") {
                    printf("unrecognized option: %s\n", args);
                    return false;           // for any unrecognized option, returning false will skip the INT 19h
                }                           // otherwise, for "QUIT /R", we simply reboot
                printf("rebooting...\n");
            }
        }

        /**
         * Any other INT 19h should proceed normally; however, if the machine's hard drive(s) are using
         * custom geometries AND we didn't build a drive image with our custom MBR, then the drive table(s)
         * for those geometries will never get loaded into memory.  So we take this opportunity to install
         * them before the boot process begins.
         *
         * Unfortunately, the default INT 19h behavior resets ALL drive table vectors, so if we tried to
         * install our own drive tables now, they would immediately be replaced.  So instead we set a flag
         * (geometryOverride) telling our intDisk() handler to install new table(s) on the next INT 13h call.
         */
        if (this.drives[0].driveType == 0 || this.drives[1] && this.drives[1].driveType == 0) {
            this.geometryOverride = true;
        }

        /**
         * Also, in order to test floppy diskettes with non-standard sector sizes, we take this opportunity
         * to patch the Diskette Parameter Table (DPT) if we're booting a floppy with a non-standard sector size.
         * Since this table will generally be in ROM (well, at least on the first reboot, since no other code
         * will have had an opportunity to copy it elsewhere yet), we must use bus.setByteDirect() instead of
         * cpu.setByte().
         *
         * TODO: The "correct" way to deal with this will be to make my own boot sector, similar to the MBR I
         * wrote to deal with custom hard disk geometries.  It should be a trivial change, since most DOS boot
         * sectors already copy the DPT to RAM in order tweak other non-geometric parameters (eg, stepping rate).
         */
        if (!this.drives[0].partitioned && this.drives[0].cbSector && this.drives[0].cbSector != 512) {
            let fpDPT = cpu.getLong(0x1E * 4);                      // get the DPT address from interrupt vector 0x1E
            let addrDPT = ((fpDPT >>> 16) << 4) + (fpDPT & 0xffff); // convert real-mode far pointer to physical address

            /**
             * The 4th byte in the DPT (at offset 3) indicates the # bytes/sector, and it is stored as a shift
             * count for the base sector size of 128 (128 << 0 = 128, 128 << 1 = 256, 128 << 2 == 512, etc).  So
             * the value to write is log2(cbSector) - log2(128).  We also update the EOT value in the 5th byte
             * (at offset 4), but that appears to be less critical.
             */
            cpu.bus.setByteDirect(addrDPT + 3, Math.log2(this.drives[0].cbSector) - 7);
            cpu.bus.setByteDirect(addrDPT + 4, this.drives[0].nSectors);

            /**
             * Unfortunately, this all seems to be for naught, because while stepping through the MS-DOS 3.30
             * initialization code in IO.SYS, I saw that when it loads the entire FAT into the top of available
             * memory, it calculates how many paragraphs all the FAT sectors will need, and it does so by shifting
             * the FAT sector count left 5 times.  Well, that only works for 512-byte sectors, because log2(512)
             * is 9 and log2(16) is 4, and 9 - 4 == 5.   The code begins at 70:2CA2 (look for the INT 12h memory
             * size call).
             *
             * When I tested MS-DOS 3.30 with a boot floppy formatted 40:2:5:1024, which contained only one FAT
             * sector, IO.SYS tried to read that one 1K FAT sector into segment 9FE0.  At most, only 512 bytes
             * (0x20 paragraphs) could be returned, since there's no RAM at A000, and even if 512 bytes of FAT was
             * all IO.SYS needed in order continue loading the operating system, there was a second problem,
             * which is that the request spans a 64K DMA boundary, so the call will always return an error.
             *
             * Well, let's see how far we get if we shave 1K off available RAM.  That should at least avoid the
             * DMA boundary problem....
             */
            let kbRAM = cpu.getShort(0x413);
            if (kbRAM % 64 == 0) {
                cpu.setShort(0x413, --kbRAM);
            }

            /**
             * So, no, MS-DOS 3.30 is totally broken for non-512-byte sectors, because after it got past reading
             * the FAT (into segment 9FA0, thanks to the reduced memory size), it then proceeded to read MSDOS.SYS
             * one track at a time, starting 5C9:0, then 5C9:A00, then 5C9:1400, etc.  Well, that's great if all 5
             * sectors on each track are only 512 bytes, but not so great if they are all 1024 bytes.  The address
             * for each successive track is calculated by this code (presumably part of the IO.SYS disk driver):
             *
             *      AX=001E BX=0000 CX=0005 DX=0100 SP=06F4 BP=0005 SI=0522 DI=0482
             *      SS=0000 DS=0070 ES=05C9 PS=0296 V0 D0 I1 T0 S1 Z0 A1 P1 C0
             *      &0070:0E2E 2BC1             SUB      AX,CX                    ;cycles=5
             *      >> tr
             *      AX=0019 BX=0000 CX=0005 DX=0100 SP=06F4 BP=0005 SI=0522 DI=0482
             *      SS=0000 DS=0070 ES=05C9 PS=0202 V0 D0 I1 T0 S0 Z0 A0 P0 C0
             *      &0070:0E30 D0E1             SHL      CL,1                     ;cycles=2
             *      >> tr
             *      AX=0019 BX=0000 CX=000A DX=0100 SP=06F4 BP=0005 SI=0522 DI=0482
             *      SS=0000 DS=0070 ES=05C9 PS=0206 V0 D0 I1 T0 S0 Z0 A0 P1 C0
             *      &0070:0E32 02F9             ADD      BH,CL                    ;cycles=2
             *      >> tr
             *      AX=0019 BX=0A00 CX=000A DX=0100 SP=06F4 BP=0005 SI=0522 DI=0482
             *      SS=0000 DS=0070 ES=05C9 PS=0206 V0 D0 I1 T0 S0 Z0 A0 P1 C0
             *      &0070:0E34 EBCC             JMP      0E02                     ;cycles=2
             *
             * After a track is read, this code reduces the remaining sector count (AX) by the number of sectors just
             * read (CX == 5), then shifts CX left 1 bit (using a byte shift), and then adds that to the HIGH byte of the
             * offset for the next read (BX).  So it is effectively adding CX * 256 to BX -- or rather # sectors * 512,
             * thanks to the earlier shift -- which of course only works for 512-byte sectors.
             *
             * At this point, it's clear this is a pointless exercise -- at least for MS-DOS 3.30.
             *
             * UPDATE: I took a quick look at PC DOS 2.0, and its boot sector immediately makes hard-coded assumptions
             * about sector size.  Here's how it calculates the number of directory sectors from the number of root directory
             * entries:
             *
             *      (entries * 32 + 0x1FF) / 0x200
             *
             * Things go wrong almost immediately, since it has miscalculated where the first data sector (ie, IO.SYS) is
             * located.  Kind of depressing, since DOS 2.0 *introduced* the BPB, which included a field for sector size....
             */
        }
        return true;
    }

    /**
     * intLoad(addr)
     *
     * If an INT 0x20 is followed by a RET and a "PCJS" signature, then it was issued by one
     * of our own programs (eg, LOAD.COM).
     *
     * @this {PC}
     * @param {number} addr
     * @returns {boolean} true to proceed with the INT 0x20 software interrupt, false to skip
     */
    intLoad(addr)
    {
        let cpu = this.machine.cpu;
        let sig = cpu.getSOWord(cpu.segCS, cpu.getIP()+2) + (cpu.getSOWord(cpu.segCS, cpu.getIP()+4) << 16);
        if (sig == 0x534A4350) {            // "PCJS"
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
            if (cpu.getIP() == 0x102) {     // INT 20h appears to have come from LOAD.COM
                printf("\n%s\n", this.doLoad(args));
            }
            else {                          // INT 20h assumed to come from a hidden PCJS command app (eg, LS.COM)
                if (globals.browser) {      // if running in a browser, display the same error as the "exec" command
                    printf("external commands disabled in browser\n");
                    return true;
                }
                let pc = this;
                let off = cpu.getIP()+6;
                let len = cpu.getSOByte(cpu.segDS, off++);
                let appName = getString(cpu.segDS, off, len).trim();
                //
                // Check for newer helper binaries that store both current drive AND current directory into
                // the offset stored at offset 0x101; otherwise, we continue with the hard-coded offset of 0x120.
                //
                off = 0x120;
                this.machineDrive = "";
                if (cpu.getSOByte(cpu.segDS, 0x100) == 0xBE) {
                    off = cpu.getSOWord(cpu.segDS, 0x101);
                    this.machineDrive = String.fromCharCode(0x40 + cpu.getSOByte(cpu.segDS, off++));
                }
                this.machineDir = getString(cpu.segDS, off, -1);
                setTimeout(function() {
                    pc.doCommand("exec " + appName + " " + args, !!pc.drives[pc.driveBuild].driveManifest);
                }, 0);
                return false;               // returning false should bypass the INT 20h and fall into the JMP $-2;
            }                               // we want the machine to spin its wheels until it has been unloaded/reloaded
        }
        return true;
    }

    /**
     * getDriveInfo()
     *
     * @this {PC}
     * @returns {string}
     */
    getDriveInfo()
    {
        let text = "\n";
        if (this.debug && this.machine.id) {
            text += sprintf("%s machine ID %s\n", this.machine.type, this.machine.id);
        }
        let driveInfo = this.drives[this.driveBuild];
        if (driveInfo.driveManifest || driveInfo.driveType >= 0) {
            let info = {
                controller: driveInfo.driveCtrl,
                type: driveInfo.driveType < 0? 0 : driveInfo.driveType,
                cylinders: driveInfo.nCylinders,
                heads: driveInfo.nHeads,
                sectorsPerTrack: driveInfo.nSectors,
                sectorSize: driveInfo.cbSector || 512,
                clusterSize: driveInfo.clusterSize,
                driveSize: driveInfo.driveSize.toFixed(1) + "Mb"
            };
            text += sprintf("%s drive type %d, CHS %d:%d:%d, %s\n", info.controller, info.type, info.cylinders, info.heads, info.sectorsPerTrack, info.driveSize);
            let vol = driveInfo.volume;
            if (vol) {
                info.sectorSize = vol.cbSector || info.sectorSize;
                info.mediaID = sprintf("%#04x", vol.idMedia);
                let sectorsFAT = (vol.vbaRoot - vol.vbaFAT);
                info.typeFAT = vol.nFATBits || vol.idFAT;
                info.totalFATs = (sectorsFAT / Math.ceil(Math.ceil(vol.clusTotal * info.typeFAT / 8) / info.sectorSize))|0;
                info.sizeRoot = vol.rootEntries || vol.rootTotal;
                info.sectorsHidden = vol.lbaStart;
                info.sectorsReserved = vol.vbaFAT;
                info.sectorsFAT = (sectorsFAT / info.totalFATs)|0;
                info.sectorsRoot = Math.ceil((info.sizeRoot * 32) / info.sectorSize);
                info.sectorsTotal = vol.lbaTotal;
                info.sectorsData = info.sectorsTotal - info.sectorsReserved - sectorsFAT - info.sectorsRoot;
                info.clusterSize = vol.clusSecs * info.sectorSize;
                info.clustersTotal = vol.clusTotal;
                info.clustersFree = vol.clusFree;
                info.bytesTotal = info.clustersTotal * info.clusterSize;
                info.bytesFree = info.clustersFree * info.clusterSize;
                info.usageFinalFAT = (info.sectorSize - (Math.ceil(info.clustersTotal * info.typeFAT / 8) % info.sectorSize)) / info.sectorSize * 100;
                text += sprintf("%d hidden sectors, %d reserved sectors\n", info.sectorsHidden, info.sectorsReserved);
                text += sprintf("%d-bit FAT, %d-byte clusters, %d clusters\n", info.typeFAT, info.clusterSize, info.clustersTotal);
                text += sprintf("%d FAT sectors (x%d), %d root sectors (%d entries)\n", info.sectorsFAT, info.totalFATs, info.sectorsRoot, info.sizeRoot);
                text += sprintf("%d total sectors, %d data sectors, %d data bytes\n", info.sectorsTotal, info.sectorsData, info.bytesTotal);
            }
        }
        return text.trim()? text : "use build to create disk image first\n";
    }

    /**
     * receiveSerial(b)
     *
     * @this {PC}
     * @param {number} b
     */
    receiveSerial(b)
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
        this.useSerial = true;
    }

    /**
     * sendSerial(b)
     *
     * @this {PC}
     * @param {number} b
     */
    sendSerial(b)
    {
        let machine = this.machine;
        if (machine.serial && machine.fnSendSerial) {
            machine.fnSendSerial.call(machine.serial, b);
        }
    }

    /**
     * checkMachine(sFile)
     *
     * We now allow a machine file to be specified with or without the --start option, with or without a path, and
     * with or without an extension.  If you don't use --start, then it must be the first non-option argument.  If you
     * don't specify a path, then it must either be in the current directory or the pc.js directory (ie, /tools/pc),
     * and if you don't specify an extension, we'll try ".json", ".json5", and ".xml", in that order.
     *
     * If no file can be found, we return an empty string.
     *
     * @this {PC}
     * @param {string} sFile
     * @returns {string} (sFile with a path prepended and/or an extension appended as needed, or empty string if not found)
     */
    checkMachine(sFile)
    {
        let sVerify = "", config;
        while (sFile) {
            if (sFile.indexOf("http") == 0) {
                break;
            }
            if (diskLib.existsFile(sFile, false) && !diskLib.existsDir(sFile, false)) {
                sVerify = sFile;
                break;
            }
            if (sFile.indexOf('.') > 0) {
                let s = node.path.join(pcjsDir, sFile);
                sVerify = diskLib.existsFile(s, false)? s: "";
            } else {
                const exts = [".json", ".json5", ".xml"];
                for (let ext of exts) {
                    let s = sFile + ext;
                    if (diskLib.existsFile(s, false)) {
                        sVerify = s;
                        break;
                    }
                    s = node.path.join(pcjsDir, s);
                    if (diskLib.existsFile(s, false)) {
                        sVerify = s;
                        break;
                    }
                }
            }
            if (!sVerify) sFile = "";
            break;
        }
        if (sVerify) {
            /**
             * This "pre-read" of the machine file isn't strictly necessary, it just helps confirm
             * the machine type (eg, pcx86, pdp11), which we can also infer from the filename/path, so
             * in the case running remotely, we dispense with it, to avoid another async read.
             */
            if (sVerify.endsWith(".json")) {
                if (node.remote) {
                    sFile = sVerify;
                } else {
                    config = JSON.parse(diskLib.readFileSync(sVerify, "utf8", true) || "{}");
                    let machine = config['machine'];
                    if (machine) {
                        this.machineType = machine['type'] || this.machineType;
                        sFile = sVerify;
                    } else {
                        sFile = "";
                    }
                }
            } else {
                sFile = sVerify;
            }
        }
        if (sFile) {
            let driveCtrl;
            let driveInfo = this.drives[this.driveBuild];
            if (sFile.indexOf("pdp11") >= 0) {
                this.machineType = "pdp11";
            }
            if (config) {
                if (config['hdc']) {
                    driveCtrl = config['hdc']['type'];
                } else {
                    if (!this.bootSelect) this.bootSelect = 'A';
                    this.localDir = "none";
                }
                if (config['chipset'] && config['chipset']['model'] == "deskpro386") {
                    driveCtrl = "COMPAQ";
                }
            } else {
                /**
                 * If we can't crack open the config, we'll have to make inferences from the machine filename.
                 */
                if (sFile.indexOf("5150") >= 0) {
                    if (!this.bootSelect) this.bootSelect = 'A';
                    this.localDir = "none";
                } else if (sFile.indexOf("5160") >= 0) {
                    driveCtrl = "XT";
                } else if (sFile.indexOf("5170") >= 0) {
                    driveCtrl = "AT";
                } else if (sFile.indexOf("compaq") >= 0) {
                    driveCtrl = "COMPAQ";
                }
            }
            if (this.floppy) {
                /**
                 * And even if we *can* crack open the config, our configs don't currently tell us the maximum diskette
                 * capacity, so we have to infer that as well.
                 */
                if (sFile.indexOf("5150") >= 0 || sFile.indexOf("5160") >= 0) {
                    this.kbTarget = 360;
                }
            }
            if (driveCtrl && !driveInfo.driveOverride) {
                driveInfo.driveCtrl = driveCtrl;
            }
            if (driveCtrl != "COMPAQ") {
                this.savedState = "";
            }
        }
        return sFile;
    }

    /**
     * newDrive(shift)
     *
     * @this {PC}
     * @param {boolean} [shift]
     * @returns {DriveInfo}
     */
    newDrive(shift)
    {
        let i = this.driveBuild;
        let driveInfo = this.drives[i];
        if (driveInfo && shift) {
            this.drives[i+1] = driveInfo;
            this.drives[i+1].driveNumber = this.driveBuild = i+1;
        }
        driveInfo = {
            driveNumber:    i,
            driveCtrl:      "COMPAQ",
            driveType:      -1,
            nCylinders:     0,
            nHeads:         0,
            nSectors:       0,
            cbSector:       0,
            driveSize:      0,
            typeFAT:        0,      // set this to 12 or 16 to request a specific FAT type
            clusterSize:    0,      // set this to a specific cluster size (in bytes) if desired
            rootEntries:    0,      // set this to a specific number of root directory entries if desired
            hiddenSectors:  0,      // set this to a specific number of hidden sectors if desired
            verDOS:         0,
            trimFAT:        false,
            partitioned:    undefined,
            files:          [],
            disk:           null,   // cached DiskInfo object, for debugging purposes
            volume:         null,   // cached VolInfo object, for debugging purposes
            driveManifest:  null,
            driveOverride:  false,
            localDir:       this.localDir,
            localDisk:      this.localDisk
        };
        this.drives[i] = driveInfo;
        return driveInfo;
    }

    /**
     * newMachine()
     *
     * Before allowing a machine to be loaded, make sure any previously loaded machine is destroyed
     * and the fake "web page" context is reset.
     *
     * @this {PC}
     * @returns {Object} (new machine object)
     */
    newMachine()
    {
        if (this.Component && this.machine.id) {
            this.Component.destroyMachine(this.machine.id);
        }
        if (this.Web) {
            this.Web.doPageReset();
        }
        return {
            id:           "",
            type:         "",
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
     * @this {PC}
     * @param {string} sFile
     * @returns {string}
     */
    loadMachine(sFile)
    {
        let pc = this;
        let result = "";

        let getFactory = function(config) {

            let machine = pc.machine;
            let typeMachine = config['type'] || (config['machine'] && config['machine']['type']) || pc.machineType;

            machine.id = "";
            if (config['machine']) {
                machine.id = config['machine']['id'];
                machine.type = config['machine']['type'];
            }

            if (config['cpu']) {
                if (pc.halt) {
                    config['cpu']['autoStart'] = 0;
                }
                pc.autoStart = config['cpu']['autoStart'];
                if (pc.autoStart == undefined) {
                    pc.autoStart = !config['debugger'];
                }
            }

            if (config['debugger'] && pc.halt) {
                let messages = configJSON['defaults'] && configJSON['defaults']['messages'];
                if (messages) {
                    config['debugger']['messages'] = messages;
                }
            }

            pc.halt = false;

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
                for (let i = 0; i <= 1; i++) {
                    let driveInfo = pc.drives[i];
                    if (!driveInfo || !driveInfo.partitioned) continue;
                    if (driveInfo.driveCtrl != "PCJS") {
                        let driveCtrl = driveInfo.driveCtrl;
                        if (driveCtrl == "COMPAQ") driveCtrl = "AT";    // COMPAQ is AT-compatible, so suppress the warning
                        if (driveCtrl != typeCtrl) {
                            printf("warning: drive controller (%s) does not match actual controller (%s)\n", driveCtrl, typeCtrl);
                        }
                    }
                    /**
                     * If we don't have a drive type (eg, if no drive was built and no drive type was explicitly set),
                     * we would still like to match the target capacity with a drive.  Convert the capacity from Mb to
                     * sectors and then give it a go.
                     *
                     * And even if we do have a drive type, findDriveType() should simply verify that the type is valid.
                     */
                    if (DiskInfo.findDriveType(driveInfo, (pc.kbTarget * 1024 / (driveInfo.cbSector || 512))|0, device)) {
                        if (pc.verbose) {
                            printf("%s drive type %2d: %4d cylinders, %2d heads, %2d sectors/track (%5sMb)\n", driveInfo.driveCtrl, driveInfo.driveType, driveInfo.nCylinders, driveInfo.nHeads, driveInfo.nSectors, driveInfo.driveSize.toFixed(1));
                        }
                    }
                    if (driveInfo.driveType >= 0) {
                        let driveType = driveInfo.driveType;
                        if (!driveType && driveInfo.driveCtrl == "PCJS") {
                            /**
                             * When a custom geometry is being used, we need to set the drive type to the FIRST type used
                             * by the current drive controller (the PC XT started with type 0, while the PC AT started with 1).
                             */
                            driveType = (typeCtrl == "XT")? 0 : 1;
                            if (typeCtrl == "XT" && driveInfo.nSectors != 17) {
                                printf("warning: XT controller requires 17 sectors/track\n");
                            }
                        }
                        drives[i] = {
                            'type': driveType,
                            'name': Math.round(driveInfo.driveSize) + "Mb Hard Disk (" + String.fromCharCode(67+i) + ":)",
                        };
                        if (driveInfo.localDisk) {
                            drives[i]['path'] = driveInfo.localDisk;
                        }
                        if (driveInfo.driveOverride) {
                            let type = driveInfo.driveCtrl;
                            if (driveInfo.driveCtrl == "PCJS") {
                                type = driveInfo.driveCtrl + '-' + typeCtrl;
                            }
                            config['hdc']['type'] = type;
                        }
                    }
                }
                config['hdc']['drives'] = drives;
            }

            if (config['fdc']) {
                /**
                 * If the --diskette option was used, then localDiskette will be set, and so we
                 * mount that diskette; whether or not they also want to boot from it will have to
                 * be determined by the specified --boot drive (if any).
                 */
                if (pc.localDiskette) {
                    let disk = pc.localDiskette;
                    let name = node.path.basename(pc.localDiskette);
                    let boot = (pc.bootSelect[0] == 'A');
                    config['fdc']['autoMount'] = "{A:{name:\"" + name + "\",path:\"" + disk + "\"}}";
                    config['fdc']['boot'] = boot;
                    if (boot) pc.savedState = "";
                }
                else if (pc.bootSelect[0] != 'A') {
                    /**
                     * If we're not booting from a floppy, then generally we don't want to mount
                     * a floppy diskette.
                     */
                    config['fdc']['autoMount'] = "{A:{name:\"None\"}}";
                } else {
                    /**
                     * This path is intended to deal with floppy disk images we have built, as indicated
                     * by the --floppy (-f) option, and which generally should be bootable as well.
                     */
                    let disk, name;
                    let driveInfo = pc.drives[pc.driveBuild];
                    if (pc.floppy) {
                        disk = driveInfo.localDisk;
                        name = (node.path.basename(pc.localDir).toUpperCase() || "User-defined") + " Diskette";
                    } else if (pc.localDir) {
                        disk = pc.getSystemValue("disk");
                        name = pc.systemType.toUpperCase() + ' ' + sprintf("%.2f", parseFloat(pc.systemVersion));
                    }
                    if (disk) {
                        config['fdc']['autoMount'] = "{A:{name:\"" + name + "\",path:\"" + disk + "\"}}";
                        pc.savedState = "";
                    }
                }
            }

            if (sFile.endsWith(pc.savedMachine) && config['computer'] && pc.savedState) {
                config['computer']['state'] = node.path.join(pcjsDir, pc.savedState);
            }

            let args = JSON.stringify(config);
            pc.loadModules(machines[typeMachine]['factory'], machines[typeMachine]['modules'], function() {
                pc.initMachine(args);
            });
        };

        if (this.machine.cpu) {
            /**
             * Safety check: if newMachine() was called, then this shouldn't happen.
             */
            result = "machine already loaded";
        }
        else if (sFile) {
            if (sFile.indexOf(".json") > 0) {
                result = this.readJSON(sFile, getFactory);
            }
            else if (sFile.indexOf(".xml") > 0) {
                let xml = {_resolving: 0};
                result = this.readXML(sFile, xml, 'machine', null, 0, getFactory);
            } else {
                result = "unsupported machine file: " + sFile;
            }
            if (typeof result != "string") result = "";
        }
        return result;
    }

    /**
     * reloadMachine()
     *
     * @this {PC}
     */
    async reloadMachine()
    {
        let result = "";
        if (this.drives[this.driveBuild].driveManifest) {
            result = await this.buildDisk(this.localDir);
            if (!result) {
                this.loadMachine(this.localMachine);
            }
        } else {
            result = this.loadMachine(this.localMachine);
        }
        return result;
    }

    /**
     * readJSON(sFile, done)
     *
     * @this {PC}
     * @param {string} sFile
     * @param {function(Object, string)} done
     * @returns {string}
     */
    async readJSON(sFile, done)
    {
        let result = "";
        try {
            let sConfig = await diskLib.readFileAsync(sFile);
            /**
             * Since our JSON files may contain comments, hex values, etc, use eval() instead of JSON.parse().
             */
            let config = eval('(' + sConfig + ')');
            done(config);
        }
        catch(err) {
            printf("unable to process %s\n%s\n", sFile, err.message);
        }
        return result;
    }

    /**
     * readXML(sFile, xml, sNode, sFile, aTags, iTag, done)
     *
     * @this {PC}
     * @param {string} sFile
     * @param {Object} xml
     * @param {string} sNode
     * @param {Array|null} aTags
     * @param {number} iTag
     * @param {function(Object)} done
     * @returns {string}
     */
    async readXML(sFile, xml, sNode, aTags, iTag, done)
    {
        let pc = this;
        let result = "";
        let idAttrs = '@';
        try {
            xml._resolving++;
            let sXML = await diskLib.readFileAsync(sFile);
            let parser = new node.xml2js.Parser({attrkey: idAttrs});
            parser.parseString(sXML, function parseXML(err, xmlNode) {
                if (!aTags) {
                    xml[sNode] = xmlNode[sNode];
                } else {
                    /**
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
                                pc.readXML(sFileXML, xml, sTag, aTagsXML, iTagXML, done);
                                /**
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
                        let config = pc.convertXML(xml, idAttrs);
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
     * Multiple commands are allowed, separated by commas, but only the first one will be checked
     * for validity; you can also use semicolons, but since most shells require those to be "escaped"
     * with backslashes, commas make life easier.  You can also put quotes around your command(s) if
     * you want to use semicolons without escaping them (and you may need to use semicolons if any
     * of your commands must use commas).
     *
     * NOTE: The list of internal commands below is not intended to be exhaustive; it's just a start.
     *
     * @this {PC}
     * @param {string} sDir
     * @param {string} sCommand
     * @returns {string} (original command, or empty string if not a valid command or program name)
     */
    checkCommand(sDir, sCommand)
    {
        if (sCommand) {
            let aParts = sCommand.split(/([ ,;\/])/);
            let sProgram = aParts[0].toUpperCase();
            const aInternal = [
                "BREAK",
                "CD",
                "CLS",      // this goes beyond the scope of our limited TTY support, so nothing will happen
                "CHDIR",
                "COPY",
                "CTTY",
                "DATE",     // NOTE: this was actually an external command in DOS 1.0 (became internal in DOS 1.1)
                "DEL",
                "DIR",
                "ECHO",
                "ERASE",
                "FOR",
                "GOTO",
                "IF",
                "LOAD",     // since we create LOAD.COM on the fly, it won't exist externally, so we treat it like an internal command
                "MKDIR",
                "PATH",
                "PAUSE",
                "PROMPT",
                "QUIT",     // since we create QUIT.COM on the fly, it won't exist externally, so we treat it like an internal command
                "REM",
                "REN",
                "RENAME",
                "RMDIR",
                "SET",
                "SHIFT",
                "TIME",     // NOTE: this was actually an external command in DOS 1.0 (became internal in DOS 1.1)
                "TYPE",
                "VER",
                "VOL"
            ];

            if (aInternal.indexOf(sProgram) < 0) {
                if (sProgram.indexOf('.') < 0) {
                    sProgram += ".{COM,EXE,BAT}";
                }
                if (sProgram.indexOf('/') < 0 && sProgram.indexOf('\\') < 0) {
                    sProgram = node.path.join(sDir, "**", sProgram);
                }
                if (node.glob) {
                    let aFiles = node.glob.sync(sProgram);
                    if (!aFiles.length) {
                        sCommand = "";
                    } else {
                        let sArguments = sCommand.slice(aParts[0].length);
                        sCommand = aFiles[0];
                        if (sCommand.indexOf(sDir) == 0) {
                            sCommand = sCommand.slice(sDir.length);
                        }
                        sCommand = sCommand.replace(/\//g, '\\');
                        sCommand = (sCommand[0] != '\\'? '\\' : '') + sCommand + sArguments;
                    }
                }
            }
        }
        return sCommand;
    }

    /**
     * getSystemValue(key, type, version)
     *
     * For "disk" keys, if we don't recognized the system type (eg, "pcdos", "msdos"), or there is no version
     * information, we return an empty string, and if we DO recognize the version, we return the name of the system
     * diskette, else we return an array of available versions.
     *
     * @this {PC}
     * @param {string} key
     * @param {string} [type]
     * @param {string} [version]
     * @returns {string|Array.<string>|undefined}
     */
    getSystemValue(key, type = this.systemType, version = this.systemVersion)
    {
        let value, versionInfo, verNumber;
        let system = configJSON['systems']?.[type];
        if (system && system.versions) {
            /**
             * We'll first try using the version string as-is, but as a backup, we also
             * convert it to a "X.XX" string with optional suffix (eg, "2A" => "2.00A").
             */
            verNumber = sprintf("%.2f", parseFloat(version) || 0);
            let match = version.match(/([A-Z])$/i);
            version = verNumber;
            if (match) version += match[1].toUpperCase();
            versionInfo = system.versions[version] || system.versions[verNumber];
        }
        if (versionInfo) {
            if (key == "disk") {
                let sSystemPath = "/diskettes/pcx86/sys/dos/" + system.vendor + "/" + verNumber + "/";
                if (typeof versionInfo == "string") {
                    value = sSystemPath + versionInfo + ".json";
                } else if (versionInfo[key]) {
                    value = sSystemPath + versionInfo[key] + ".json";
                } else {
                    value = versionInfo['dir'] || "";
                    /**
                     * When a "dir" is specified in lieu of a "disk", we check for a leading '%', which signals
                     * that this is a path to a repository alongside the pcjs repository.
                     */
                    if (value[0] == '%') {
                        value = node.path.join(pcjsDir, "../../..", value.slice(1));
                    }
                    if (value && !value.endsWith("/")) value += "/";
                }
            } else {
                if (typeof versionInfo == "string") {
                    value = system[key];
                } else {
                    value = versionInfo[key];
                }
            }
        } else {
            if (key == "disk") {
                value = system.versions? Object.keys(system.versions) : "";
            } else {
                value = [];
            }
        }
        return value;
    }

    /**
     * buildDisk(sDir, sCommand, sLocalDisk, log)
     *
     * Builds a bootable floppy or hard disk image containing all files in the current directory.
     *
     * At present, the image size defaults to 10Mb (which corresponds to an XT type 3 or AT type 1 drive)
     * and the operating system files default to MS-DOS 3.30.  Use --sys and --ver command-line options to
     * override those defaults.  The allowed systems include "msdos" and "pcdos" and the allowed versions
     * are any available in the PCjs diskette repo; however, the specified system must also be listed in
     * the pc.json5 config file.
     *
     * Choice of hardware (ie, drives other than 10Mb) will be a bit trickier, because that also requires
     * tweaking the machine configuration file to specify a compatible drive type and customizing the master
     * boot record (currently we use a prebuilt ".mbr" file).  There are no plans to support more than one
     * partition/one volume, and to support volumes larger than 32Mb, we'll have to make sure your choice
     * of operating system supports it (eg, COMPAQ MS-DOS 3.31).
     *
     * The first three system files on the disk image will be those listed below (eg, IO.SYS, MSDOS.SYS, and
     * COMMAND.COM); if any of those files already exist in the current directory, ours will take precedence.
     * As for AUTOEXEC.BAT, we read any existing file (or create an empty file) and append the provided command(s).
     *
     * @this {PC}
     * @param {string} sDir
     * @param {string} [sCommand] (eg, "COPY A:*.COM C:"; multiple commands can be separated by commas or semicolons)
     * @param {string} [sLocalDisk] (optional location for built disk image; default is the pc.js "disks" folder)
     * @param {boolean} [log]
     * @returns {string} (error message, if any)
     */
    async buildDisk(sDir, sCommand = "", sLocalDisk = "", log = false)
    {
        let system = configJSON['systems']?.[this.systemType];
        if (!system) {
            return "unsupported system type: " + this.systemType;
        }

        let sSystemDisk = this.getSystemValue("disk");
        if (!sSystemDisk) {
            return "unknown " + this.systemType + " version: " + this.systemVersion;
        } else if (typeof sSystemDisk != "string") {
            return "available " + this.systemType + " versions: " + JSON.stringify(sSystemDisk);
        }

        let verDOS = +parseFloat(this.systemVersion);   // parseFloat() is forgiving of any non-numeric suffix, the "+" operator is not
        let verDOSMajor = verDOS | 0;
        if (verDOSMajor < 2 && !this.floppy) {
            return "DOS 2.0 or greater required (otherwise use --floppy)";
        }

        let sSystemMBR, dbMBR;
        let bootDrive = this.floppy? 0 : 0x80;
        let bootLetter = this.floppy? 'A' : 'C';

        if (!this.floppy) {
            sSystemMBR = this.systemMBR;
            if (sSystemMBR.indexOf(node.path.sep) < 0) {
                sSystemMBR = node.path.join(pcjsDir, sSystemMBR);
            }
            dbMBR = await diskLib.readFileAsync(sSystemMBR, null);
            if (!dbMBR || dbMBR.length < 512) {
                return "invalid system MBR: " + sSystemMBR;
            }
            /**
             * Normal boot sectors (both master and OS boot records) are one sector in size (eg, 512 bytes),
             * but at one point, I was using the PCJS MBR as built, which was 32K bytes due to its ORG address.
             * I've since chopped off those unused bytes, but this will also chop them off if need be.
             */
            if (dbMBR.length > 512) {
                dbMBR = dbMBR.slice(dbMBR.length - 512);
            }
        }

        let kbCapacity = this.kbTarget;
        let driveInfo = this.drives[this.driveBuild];

        driveInfo.files = [];
        driveInfo.disk = null;
        driveInfo.volume = null;
        driveInfo.verDOS = verDOS;
        driveInfo.bootDrive = bootDrive;
        driveInfo.partitioned = !this.floppy;

        let diSystem;
        if (!sSystemDisk.endsWith("/")) {
            diSystem = await diskLib.readDiskAsync(sSystemDisk);
            if (!diSystem) {
                return "missing " + this.systemType + " system diskette: " + sSystemDisk;
            }
        }

        /**
         * Load the boot sector from the system diskette we just read, and use it to update the boot
         * sector on the disk image.
         *
         * NOTE: It seems that many (if not all) DOS boot sectors did NOT rely on the DL register to
         * contain the boot drive # (0x00 for floppy drive, 0x80 for hard drive), even though the BIOS
         * passes that information to the master boot record (MBR) and the DOS MBR preserves and passes
         * it on to the boot sector.  And perhaps the key point is "DOS MBR", because DOS also had to
         * work with third-party MBRs, some of which may have trashed DL.
         */
        let dbBoot, dbBoot2, verBPB = 0;
        if (diSystem) {
            dbBoot = diskLib.getDiskSector(diSystem, 0);
            if (this.bootSector) {
                /**
                * Load alternate boot sector from the specified file; if it fails, we'll stick with the
                * boot sector from the system diskette we already loaded.
                */
                let sBootSector = this.bootSector;
                let db = await diskLib.readFileAsync(sBootSector, null);
                if (db) dbBoot = db;
            }
        } else {
            let sSystemBoot = node.path.join(sSystemDisk, this.getSystemValue("boot"));
            dbBoot = await diskLib.readFileAsync(sSystemBoot, null);
            if (!dbBoot || dbBoot.length < 512) {
                return "invalid system boot file: " + sSystemBoot;
            }
            let boot1Offset = this.getSystemValue("boot1Offset");
            if (boot1Offset) {
                let boot2Offset = this.getSystemValue("boot2Offset");
                if (boot2Offset) {
                    dbBoot2 = dbBoot.slice(boot2Offset);
                }
                if (dbBoot.length >= boot1Offset + 512) {
                    dbBoot = dbBoot.slice(boot1Offset, boot1Offset + 512);
                } else {
                    printf("warning: boot sector (%#0x) too small to slice at %#0x\n", dbBoot.length, boot1Offset);
                }
            }
        }
        if (dbBoot.length > 512) {
            dbBoot = dbBoot.slice(dbBoot.length - 512);
        }

        /**
         * Alas, DOS 2.x COMMAND.COM didn't support running hidden files, so attrHidden will be zero for any
         * "helper binaries" we add to the disk image (and for COMMAND.COM itself).
         */
        let count = 0;
        let aSystemFiles = this.getSystemValue("files");
        let attrHidden = verDOSMajor > 2? DiskInfo.ATTR.HIDDEN : 0;
        for (let name of aSystemFiles) {
            let desc, attr;
            if (!diSystem) {
                name = node.path.join(sSystemDisk, name);
                let dbFile = await diskLib.readFileAsync(name, null, true);
                if (dbFile) {
                    let date;
                    if (dbBoot2 && dbBoot2.length) {
                        let dbCombined = new DataBuffer(dbBoot2.length + dbFile.length);
                        dbBoot2.copy(dbCombined, 0);
                        dbFile.copy(dbCombined, dbBoot2.length);
                        dbFile = dbCombined;
                        dbBoot2 = null;
                    }
                    attr = this.systemType == "custom"? 0 : DiskInfo.ATTR.HIDDEN | DiskInfo.ATTR.SYSTEM | DiskInfo.ATTR.READONLY;
                    date = node.fs.statSync(name).mtime;
                    desc = diskLib.makeFileDesc(node.path.dirname(name), node.path.basename(name), dbFile, attr, date);
                    driveInfo.files.push(desc);
                    count++;
                    continue;
                }
            } else {
                desc = diSystem.findFile(name);
                if (desc) {
                    desc.attr = +desc.attr;
                    desc.attr |= attrHidden;
                    driveInfo.files.push(desc);
                    count++;
                    continue;
                }
            }
            let error = "missing system file: " + name;
            if (count < 3) {
                return error;           // in general, the first 3 system files are critical, others less so
            }
            printf("warning: %s\n", error);
        }

        /**
         * In addition to the system files, we also create a hidden LOAD.COM "helper binary" in the root, which
         * immediately exits with an "INT 20h" instruction.  Our intLoad() interrupt handler should intercept it,
         * determine if the interrupt came from LOAD.COM, and if so, process it as an internal "load [drive]" command.
         */
        if (!this.bare) {
            driveInfo.files.push(diskLib.makeFileDesc(sDir, "LOAD.COM", [0xCD, 0x20, 0xC3, 0x90, 0x50, 0x43, 0x4A, 0x53, 0x00], attrHidden));
        }

        /**
         * We also create a hidden QUIT.COM "helper binary" in the root, which executes an "INT 19h" to reboot the
         * machine. Our intReboot() interrupt handler should intercept it, allowing us to gracefully invoke saveDisk()
         * to look for any changes and then terminate the machine.
         */
        if (!this.bare) {
            driveInfo.files.push(diskLib.makeFileDesc(sDir, "QUIT.COM", [0xCD, 0x19, 0xC3, 0x90, 0x50, 0x43, 0x4A, 0x53, 0x00], attrHidden));
        }

        /**
         * Finally, for any apps listed in configFile, create hidden "helper binaries" in the root, each of which will
         * execute an "INT 20h" that will trigger an exec of the corresponding local command.  Note that 'apps' is a
         * collection of objects, where the keys are the app names and object properties like 'exec' tell us
         * what local program to execute.
         *
         * NOTE: When I say these binaries will be hidden, well, that depends on the attrHidden setting (see above).
         */
        if (!this.bare) {
            let apps = configJSON['apps'] || {};
            let appNames = Object.keys(apps);
            for (let appName of appNames) {
                if (appName[0] == '.') continue;
                let appFile = appName.toUpperCase() + ".COM";
                //
                // Here's the disassembly of the original helper binary:
                //
                //      0100 B447       MOV     AH,47
                //      0102 B203       MOV     DL,03
                //      0104 BE2001     MOV     SI,0120
                //      0107 CD21       INT     21
                //      0109 CD20       INT     20
                //      010B EBFE       JMP     010B
                //      010D 50434A53   DB      "PCJS"
                //
                // And here's the disassembly of the new, improved helper binary, which now retrieves and
                // stores the current (1-based) drive number into the byte preceding the current directory buffer.
                //
                //      0100 BE2201     MOV     SI,0122
                //      0103 B419       MOV     AH,19
                //      0105 CD21       INT     21
                //      0107 40         INC     AX
                //      0108 8804       MOV     [SI],AL
                //      010A 46         INC     SI
                //      010B B447       MOV     AH,47
                //      010D 88C2       MOV     DL,AL
                //      010F CD21       INT     21
                //      0111 CD20       INT     20
                //      0113 EBFE       JMP     0113
                //      0115 50434A53   DB      "PCJS"
                //
                let appContents = [
                    0xBE, 0x22, 0x01, 0xB4, 0x19, 0xCD, 0x21, 0x40, 0x88, 0x04, 0x46, 0xB4, 0x47, 0x88, 0xC2, 0xCD,
                    0x21, 0xCD, 0x20, 0xEB, 0xFE, 0x50, 0x43, 0x4A, 0x53
                ];
                //
                // We don't hard-code a drive number into the "Get Current Directory" code anymore...
                //
                //      if (this.floppy) appContents[3] = 0x01;
                //
                let len = appName.length;
                if (len > 8) {
                    printf("warning: app name \"%s\" truncated to 8 characters\n", appName);
                    len = 8;
                }
                appContents.push(len);
                for (let j = 0; j < len; j++) {
                    appContents.push(appName.charCodeAt(j));
                }
                driveInfo.files.push(diskLib.makeFileDesc(sDir, appFile, appContents, attrHidden));
            }
        }

        /**
         * Create a CONFIG.SYS as needed.
         */
        let text;
        let configSYS = configJSON['defaults'] && configJSON['defaults']['config'];
        if (configSYS && configSYS.length) {
            text = await diskLib.readFileAsync(node.path.join(sDir, "CONFIG.SYS"), "utf8", true);
            if (!text) {
                text = configSYS.join("\r\n") + "\r\n";
                driveInfo.files.push(diskLib.makeFileDesc(sDir, "CONFIG.SYS", text, attrHidden));
            }
        }

        /**
         * We also make sure there's an AUTOEXEC.BAT.  If one already exists, then we make sure there's
         * a PATH command, to which we prepend "C:\" if not already present.  We create an AUTOEXEC.BAT
         * if it doesn't exist, but in that case, we also mark it HIDDEN, since it's a file we created, not
         * the user.  Ensuring that "C:\" is in the PATH ensures that the user can invoke "quit" to run
         * our hidden QUIT.COM program in the root of the drive, regardless of the current directory.
         */
        let attr = DiskInfo.ATTR.ARCHIVE;
        text = await diskLib.readFileAsync(node.path.join(sDir, "AUTOEXEC.BAT"), "utf8", true);
        if (text) {
            if (verDOS >= 3.30 && !text.indexOf("ECHO OFF")) {
                text = '@' + text;
            }
        } else {
            text = verDOSMajor < 2? "" : (verDOS >= 3.30? '@' : '') + "ECHO OFF\n";
            attr |= attrHidden;
        }
        let matchPath = text.match(/^PATH\s*(.*)$/im);
        if (matchPath) {
            let matchPathRoot = matchPath[1].match(new RegExp("(^|;|" + bootLetter + ":|)\\\\(;|$)", "i"));
            if (!matchPathRoot) {
                text = text.replace(/^PATH\s*(.*)$/im, "PATH " + bootLetter + ":\\;$1");
            }
        } else if (verDOSMajor >= 2) {
            text += "PATH " + bootLetter + ":\\\n";
        }

        if (sCommand) {
            let aCommands = sCommand.split(sCommand.indexOf(';') >= 0? ';' : ',');
            for (let command of aCommands) {
                text += command + "\n";
            }
        }
        if (this.machineDrive) {
            text += this.machineDrive + ":\n";
        }
        if (this.machineDir) {
            text += "CD " + this.machineDir + "\n";
        }
        if (this.test) {
            text += "quit\n";
        }
        let autoexecBAT = configJSON['defaults'] && configJSON['defaults']['autoexec'];
        if (autoexecBAT && autoexecBAT.length) {
            text += autoexecBAT.join("\n") + "\n";
        }
        if (text.length) {
            /**
             * Automatically normalize all line-endings in AUTOEXEC.BAT.
             */
            text = CharSet.toCP437(text).replace(/\n/g, "\r\n").replace(/\r+/g, "\r");
            driveInfo.files.push(diskLib.makeFileDesc(sDir, "AUTOEXEC.BAT", text, attr));
        }

        if (verDOS < 2.0) {
            /**
             * So to get this far, floppy had to be true, so in addition to setting the correct
             * BPB version, we should also set kbCapacity to 160 for 1.0 or 320 for 1.1.
             */
            verBPB = 1;
            if (verDOS < 1.1) {
                if (!kbCapacity || kbCapacity > 160) kbCapacity = 160;
            }
            else {
                /**
                 * Even though PC DOS 1.1 added support for 320K, the PC DOS 1.1 boot diskette was formatted
                 * as 160K, so that it could also boot on single-sided drives.  So, if we really want to boot
                 * from a 320K diskette, we have to make the same boot sector modifications that the PC DOS 1.1
                 * FORMAT utility would make: modify the starting sector # and head # of IBMBIO.COM that's
                 * embedded in the boot sector at offset 0x0003 (ie, from 0x08 and 0x00 to 0x03 and 0x01).
                 *
                 * The location of IBMBIO.COM differs between 160K and 320K diskettes because the latter used a
                 * larger root directory (7 sectors instead of 4).
                 *
                 * See /software/pcx86/sys/dos/ibm/1.10/debugger/README.md for more details.
                 */
                if (!kbCapacity || kbCapacity > 320) kbCapacity = 320;
                if (kbCapacity == 320 && dbBoot.readUInt16LE(0x0003) == 0x0008 && dbBoot.readUInt16LE(0x0005) == 0x0014) {
                    dbBoot.writeUInt16LE(0x0103, 0x0003);
                    /**
                     * As an added precaution, zero the BPB region, since any BPB would have been for a 160K diskette,
                     * not a 320K diskette.
                     */
                    for (let off = DiskInfo.BPB.SECBYTES; off < DiskInfo.BPB.BOOTDRIVE; off++) {
                        dbBoot.writeUInt8(0x00, off);
                    }
                }
            }
        }
        else if (verDOS >= 2.0 && verDOS < 3.2) {
            verBPB = 2;
            if (this.floppy) {
                if (!kbCapacity || kbCapacity > 360) kbCapacity = 360;
            }
        }
        else {
            if (this.floppy) {
                let capacity = (verDOS < 3.3? 720 : 1440);
                if (!kbCapacity || kbCapacity > capacity) kbCapacity = capacity;
            }
            if (verDOS >= 3.2 && verDOS < 4.0) {
                /**
                 * When DOS 3.2 writes the boot sector to the media, it inserts the boot drive at offset 0x1fd
                 * (just before the 0x55,0xAA signature).
                 *
                 * Wikipedia claims that offset 0x1fd was used "only in DOS 3.2 to 3.31 boot sectors" and that
                 * in "OS/2 1.0 and DOS 4.0, this entry moved to sector offset 0x024 (at offset 0x19 in the EBPB)".
                 */
                dbBoot.writeUInt8(bootDrive, 0x1FD);                // boot sector offset 0x01FD
            }
            else if (verDOS >= 4.0) {
                dbBoot.writeUInt8(bootDrive, DiskInfo.BPB.DRIVE);   // boot sector offset 0x0024
            }
        }

        let pc = this;
        driveInfo.driveManifest = null;

        let done = function(diskInfo) {
            if (diskInfo) {
                /**
                 * This is where I would normally perform the minimum version check (see below).
                 */
                let manifest = diskInfo.getFileManifest(null, true);
                if (diskInfo.volTable[0] && diskInfo.volTable[0].iPartition >= 0) {
                    /**
                     * Since the disk is partitioned, we need to update the Master Boot Record (MBR),
                     * hence the special volume number (-1).
                     *
                     * In addition, if the MBR is ours AND a custom geometry has been specified, then
                     * we need to pass a second parameter (iDriveTable) to ensure that the appropriate
                     * MBR drive parameter table is updated, too; otherwise, pass -1.
                     *
                     * NOTE: I used to update the MBR drive parameter table ONLY when driveCtrl is "PCJS",
                     * but it's also needed for "COMPAQ" configurations.  For example:
                     *
                     *      pc.js --sys=compaq:3.31 --target=40M
                     *
                     * can fail even though we're supposedly using a standard COMPAQ drive type (13) and
                     * not a custom geometry.
                     *
                     * That failure occurs when we're using a saved machine state for the COMPAQ machine
                     * (state386.json), because the machine is already expecting drive type 1, and so our
                     * options are either 1) do NOT use the saved state, or 2) specify a custom drive table
                     * in our MBR in order to dynamically alter the drive parameters for type 1.
                     */
                    if (dbMBR) {
                        let iDriveTable = -1;
                        if (sSystemMBR.indexOf("pcjs.mbr") >= 0) {
                            /**
                             * One case where we CANNOT use a saved machine state is building a secondary drive
                             * image (ie, driveNumber > 0) AND the driveType is NOT 1.  That's because the MBR code
                             * on a secondary drive is not run (only the MBR's partition table is examined), so any
                             * custom drive table we insert into that MBR will be ignored.
                             */
                            if (pc.savedState && driveInfo.driveNumber != 0 && driveInfo.driveType != 1) {
                                pc.savedState = "";
                                if (driveInfo.driveCtrl == "PCJS") {
                                    printf("warning: secondary drive (%d) with non-standard drive type (%d) not currently supported\n", driveInfo.driveNumber, driveInfo.driveType);
                                }
                            }
                            /**
                             * WARNING: If the driveNumber of the drive we're building is NOT zero, then the system
                             * won't be booting from it, which means the MBR won't run, and so any drive tables in the
                             * MBR will be moot.
                             */
                            if (driveInfo.driveCtrl == "PCJS" || pc.savedState && driveInfo.driveType != 1) {
                                iDriveTable = driveInfo.driveNumber;
                            }
                        }
                        diskInfo.updateBootSector(dbMBR, -1, iDriveTable);
                    } else {
                        printf("warning: missing MBR for partitioned disk\n");
                    }
                }
                /**
                 * Now update the volume boot record (VBR) for the boot drive; for that, the volume number
                 * is always zero because pc.js only builds one volume per drive.
                 */
                diskInfo.updateBootSector(dbBoot, 0, verBPB);
                /**
                 * Time to update the name of localDisk and then write the disk.  We must create a physical file
                 * (preferably JSON, since that tells us more about the disk, its layout, and its contents) because
                 * currently that's the only way to to pass a disk image to the HDC component.
                 */
                if (sLocalDisk) {
                    driveInfo.localDisk = sLocalDisk;
                } else {
                    driveInfo.localDisk = driveInfo.localDisk.replace(node.path.basename(driveInfo.localDisk), (pc.getSystemValue("target") || diskInfo.getName()) + ".json");
                }
                if (driveInfo.localDisk.indexOf(node.path.sep) < 0) {
                    driveInfo.localDisk = node.path.join(pcjsDir, "disks", driveInfo.localDisk);
                }
                if (sLocalDisk || log) {
                    printf("building drive: %s\n", driveInfo.localDisk);
                }
                if (diskLib.writeDiskSync(driveInfo.localDisk, diskInfo, false, 0, true, true)) {
                    pc.updateDriveInfo(driveInfo, diskInfo);
                    /**
                     * I've deferred the minimum version check until now, because even if we can't (well, shouldn't)
                     * use the drive image, I'd still like to be able to inspect it.
                     */
                    if (diskInfo.minDOSVersion && diskInfo.minDOSVersion > verDOS) {
                        printf("error: %s drive type %d (%.2fMb) requires DOS %s or later\n", driveInfo.driveCtrl, driveInfo.driveType, driveInfo.driveSize, diskInfo.minDOSVersion.toFixed(2));
                        return;
                    }
                    driveInfo.driveManifest = manifest;
                }
            }
        };

        if (!sDir.endsWith('/')) sDir += '/';
        if (log) {
            printf("reading files: %s\n", sDir);
        }
        diskLib.readDir(sDir, 0, 0, this.diskLabel == "."? node.path.basename(sDir) : this.diskLabel, null, this.normalize, kbCapacity, this.maxFiles, false, driveInfo, done);

        return driveInfo.driveManifest? "" : "unable to build drive";
    }

    /**
     * dumpDisk(lba)
     *
     * @this {PC}
     * @param {string} lba
     */
    dumpDisk(lba)
    {
        let result = "";
        if (this.drives[this.driveBuild].disk) {
            let db = diskLib.getDiskSector(this.drives[this.driveBuild].disk, +lba);
            if (db) {
                for (let i = 0; i < db.length; i += 16) {
                    let s = sprintf("%04X: ", i);
                    for (let j = 0; j < 16; j++) {
                        s += sprintf("%02X ", db.readUInt8(i + j));
                    }
                    s += " ";
                    for (let j = 0; j < 16; j++) {
                        let ch = db.readUInt8(i + j);
                        s += (ch >= 32 && ch < 127)? String.fromCharCode(ch) : '.';
                    }
                    if (result) result += "\n";
                    result += s;
                }
            } else {
                result = "error reading sector " + lba;
            }
        } else {
            result = "no disk built";
        }
        return result;
    }

    /**
     * readDiskIndex()
     *
     * Returns diskIndex object (properties are disk names).
     *
     * @this {PC}
     * @returns {Object}
     */
    readDiskIndex()
    {
        let total = 0;
        let diskIndex = {};
        let aDiskettes = this.machine.fdc && this.machine.fdc.aDiskettes;
        if (aDiskettes) {
            for (let i = 0; i < aDiskettes.length; i++) {
                let diskette = aDiskettes[i];
                let diskPath = diskette['path'];
                let diskName = diskette['name'];
                if (diskPath.indexOf("/private") >= 0) continue;
                diskIndex[diskName] = {'path': diskPath};
                total++;
                if (total % 100 == 0) {
                    printf(MESSAGE.DEBUG, "diskettes available: %d\r", total);
                }
            }
        }
        printf(MESSAGE.DEBUG, "total diskettes available: %d\n", total);
        return diskIndex;
    }

    /**
     * readFileIndex(diskIndex)
     *
     * Returns fileIndex (properties are file names) built from diskIndex.
     *
     * @this {PC}
     * @param {Object} diskIndex
     * @returns {Object}
     */
    readFileIndex(diskIndex)
    {
        let total = 0;
        let pathIndex = node.path.join(pcjsDir, "files.json");
        let fileIndex = diskLib.readFileSync(pathIndex, "utf8", true);
        if (fileIndex) {
            fileIndex = JSON.parse(fileIndex);
        } else {
            fileIndex = {};
            for (let diskName in diskIndex) {
                let diskPath = diskIndex[diskName]['path'];
                let diskJSON = diskLib.readFileSync(diskPath, "utf8", true);
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
                        /**
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
            node.fs.writeFileSync(pathIndex, JSON.stringify(fileIndex));
        }
        return fileIndex;
    }

    /**
     * updateDriveInfo(driveInfo, diskInfo)
     *
     * @this {PC}
     * @param {DriveInfo} driveInfo
     * @param {DiskInfo} diskInfo
     */
    updateDriveInfo(driveInfo, diskInfo)
    {
        if (diskInfo.getDriveType(driveInfo)) {
            if (this.debug) {
                printf("%s drive type %2d: %4d cylinders, %2d heads, %2d sectors/track (%5sMb)\n", driveInfo.driveCtrl, driveInfo.driveType, driveInfo.nCylinders, driveInfo.nHeads, driveInfo.nSectors, driveInfo.driveSize.toFixed(1));
            }
        }
        driveInfo.disk = diskInfo;
        let volume = diskInfo.volTable[0];
        if (volume) {
            driveInfo.volume = volume;
            if (driveInfo.typeFAT && driveInfo.typeFAT != volume.nFATBits) {
                printf("warning: %d-bit FAT replaced with %d-bit FAT\n", driveInfo.typeFAT, volume.nFATBits);
            }
            if (driveInfo.clusterSize && driveInfo.clusterSize != volume.clusSecs * volume.cbSector) {
                printf("warning: %d-byte clusters replaced with %d-bytes clusters\n", driveInfo.clusterSize, volume.clusSecs * volume.cbSector);
            }
            if (driveInfo.rootEntries && driveInfo.rootEntries != volume.rootEntries) {
                printf("%d root entries replaced with %d root entries\n", driveInfo.rootEntries, volume.rootEntries);
            }
            driveInfo.partitioned = (volume.lbaStart > 0);      // alternatively, check for volume.iPartition !== undefined
            if (!driveInfo.partitioned) {
                this.floppy = true;                             // if a non-partitioned disk was loaded, that's an implicit floppy boot
                this.bootSelect = 'A';
            }
        }
    }

    /**
     * mapDir(machineDir)
     *
     * Maps the given machine directory to a local directory, using the 'origin' paths in the drive
     * manifest created by buildDisk() and updated by saveDisk().
     *
     * Without a drive manifest, all we can do is join the machine directory to the local directory
     * of the drive's root and hope for the best.  If any part of the machine directory is an 8.3
     * mapping to a non-8.3 local directory, the mapping will not be correct, so you really need an
     * up-to-date drive manifest.
     *
     * Note that machine directories (ie, DOS directories) always use backslashes, manifest paths
     * paths always use forward slashes, and manifest origins always use platform-dependent separators.
     *
     * @this {PC}
     * @param {string} machineDir
     * @returns {string}
     */
    mapDir(machineDir)
    {
        let newDir = node.path.join(this.localDir, machineDir.replace(/\\/g, node.path.sep));
        let driveManifest = this.drives[this.driveBuild].driveManifest;
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
     * saveDisk(sDir, sDrive)
     *
     * If we built a drive on entry, this checks the drive on exit for any changes that need to be saved.
     *
     * @this {PC}
     * @param {string} sDir
     * @param {string} [sDrive]
     * @returns {boolean}
     */
    saveDisk(sDir, sDrive)
    {
        let controller, iDrive = this.driveBuild;
        if (sDrive) {
            controller = this.machine.fdc;
            iDrive = sDrive.charCodeAt(0) - 'A'.charCodeAt(0);
            if (iDrive > 1) {
                if (iDrive > 3) {
                    return false;
                }
                controller = this.machine.hdc;
                iDrive -= 2;
            }
        } else {
            controller = this.floppy? this.machine.fdc : this.machine.hdc;
        }
        let imageData = controller && controller.aDrives && controller.aDrives.length && iDrive < controller.aDrives.length && controller.aDrives[iDrive].disk;
        if (imageData) {
            let diskInfo = new DiskInfo(device, "PCJS");
            if (diskInfo.buildDiskFromJSON(imageData, true)) {
                if (this.drives[this.driveBuild].driveManifest && sDir == this.localDir) {
                    let oldManifest = this.drives[this.driveBuild].driveManifest;
                    let newManifest = diskInfo.getFileManifest(null, true);
                    /**
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
                                newItemPath = node.path.join(sDir, newItem.path);
                                if (this.debug) printf("joining: %s => %s\n", newItem.path, newItemPath);
                            } else {
                                newItemPath = node.path.join(curMappings[newItemDir], newItemName);
                                if (newItemDir == "/") newItemDir = "";
                                if (this.debug) printf("mapping: %s/%s => %s\n", newItemDir, newItemName, newItemPath);
                            }
                            if ((newAttr & DiskInfo.ATTR.SUBDIR) && !curMappings[newItem.path]) {
                                curMappings[newItem.path] = newItemPath;
                            }
                        }

                        if (oldItem.path == newItem.path) {
                            let success = true;
                            if ((oldAttr & (DiskInfo.ATTR.SUBDIR | DiskInfo.ATTR.VOLUME)) == (newAttr & (DiskInfo.ATTR.SUBDIR | DiskInfo.ATTR.VOLUME))) {
                                /**
                                 * Even if both entries are SUBDIR or VOLUME, that's OK, because those entries don't have
                                 * contents, so the compare will succeed and writeFileSync() will be bypassed.
                                 */
                                if (!compareContents(oldItem, newItem)) {
                                    let db = newItem.contents;
                                    if (this.debug) printf("updating: %s\n", newItemPath);
                                    if (this.normalize && diskLib.isTextFile(newItemPath)) {
                                        db = diskLib.normalizeTextFile(new DataBuffer(db));
                                    }
                                    success = diskLib.writeFileSync(newItemPath, db, false, true);
                                } else {
                                    // if (this.debug) printf("skipping: %s\n", newItemPath);
                                }
                            } else {
                                /**
                                 * Here's where things get complicated, because we could have scenarios like a directory removed
                                 * and a file with the same name created in its place.
                                 */
                                printf("warning: %s was changed to a %s entry (unsupported)\n", newItemPath, newAttr & DiskInfo.ATTR.SUBDIR? "directory" : (newAttr & DiskInfo.ATTR.VOLUME? "volume" : "file"));
                                success = false;
                            }
                            if (success && oldDate.getTime() != newDate.getTime()) {
                                try {
                                    node.fs.utimesSync(newItemPath, newDate, newDate);
                                } catch (err) {
                                    printf("%s\n", err);
                                    success = false;
                                }
                            }
                            if (success && (oldAttr & DiskInfo.ATTR.READONLY) != (newAttr & DiskInfo.ATTR.READONLY)) {
                                try {
                                    node.fs.chmodSync(newItemPath, (newAttr & DiskInfo.ATTR.READONLY)? 0o444 : 0o644);
                                } catch (err) {
                                    printf("%s\n", err);
                                    success = false;
                                }
                            }
                            iOld++;
                            iNew++;
                        } else if (iNew >= newManifest.length || oldItem.path < newItem.path) {
                            /**
                             * Unfortunately, whenever a directory has been removed, we see the directory first,
                             * followed by any files or other directories that it used to contain.  While we could
                             * perform a recursive removal of the directory right now, that comes with some inherent
                             * risk *and* will cause all subsequent unlink() calls for any contained files to fail.
                             * So instead, we simply queue the directory for removal later.
                             */
                            if (!(oldAttr & (DiskInfo.ATTR.HIDDEN | DiskInfo.ATTR.VOLUME))) {
                                let oldItemPath = oldItem.origin || node.path.join(sDir, oldItem.path);
                                if (oldAttr & DiskInfo.ATTR.SUBDIR) {
                                    removedDirs.push(oldItemPath);
                                } else {
                                    if (this.debug) printf("removing: %s\n", oldItemPath);
                                    try {
                                        node.fs.unlinkSync(oldItemPath);
                                    } catch(err) {
                                        printf("%s\n", err.message);
                                    }
                                }
                            }
                            iOld++;
                        } else {
                            let success = true;
                            if (this.debug) printf("creating: %s\n", newItemPath);
                            try {
                                if (newAttr & DiskInfo.ATTR.SUBDIR) {
                                    node.fs.mkdirSync(newItemPath);
                                } else {
                                    let db = newItem.contents;
                                    if (this.normalize && diskLib.isTextFile(newItemPath)) {
                                        db = diskLib.normalizeTextFile(new DataBuffer(db));
                                    }
                                    success = diskLib.writeFileSync(newItemPath, db, true, false);
                                }
                                if (success) {
                                    node.fs.utimesSync(newItemPath, newDate, newDate);
                                    if (newAttr & DiskInfo.ATTR.READONLY) {
                                        node.fs.chmodSync(newItemPath, 0o444);
                                    }
                                }
                            } catch(err) {
                                printf("%s\n", err.message);
                                success = false;
                            }
                            iNew++;
                        }
                    }
                    while (removedDirs.length) {
                        let dir = removedDirs.pop();
                        if (this.debug) printf("removing: %s\n", dir);
                        try {
                            node.fs.rmdirSync(dir);
                        } catch(err) {
                            printf("%s\n", err.message);
                        }
                    }
                }
                if (sDir != this.localDir) {
                    if (sDir.indexOf('.') < 0) sDir += ".img";
                    if (sDir.indexOf(node.path.sep) < 0) sDir = node.path.join(pcjsDir, "disks", sDir);
                    printf("saving drive as %s\n", sDir);
                    diskLib.writeDiskSync(sDir, diskInfo, false, 0, true, true);
                }
                return true;
            }
        }
        return false;
    }

    /**
     * loadDiskette(sDrive, argv)
     *
     * When then "load" command is followed by a drive-letter and colon (eg, "load a:"), this function is called
     * with all the remaining arguments on the command-line.  Those arguments determine which disk(s) to display for
     * selection and subsequent loading.
     *
     * Arguments fall into two categories: dashed (eg, "--disk", "--file") and non-dashed.  Non-dashed arguments are
     * treated as disk arguments UNLESS they appear to be a file name (eg, a string with a file extension).  For example:
     *
     *      load a: pc dos
     *
     * is equivalent to:
     *
     *      load a: --disk=pc --disk=dos
     *
     * or this regular expression:
     *
     *      load a: --disk="pc.*dos"
     *
     * whereas:
     *
     *      load a: pkunzip.exe
     *
     * is equivalent to:
     *
     *      load a: --file=pkunzip.exe
     *
     * You can also combine criteria to further narrow the list of matching diskettes:
     *
     *      load a: --disk="pc dos" --file=chkdsk --date=1982
     *
     * Note that by putting "pc dos" in quotes, the entire quoted string must match some portion of the disk name,
     * whereas if the string is unquoted, then the disk name must simply contain "pc" followed at some point by "dos".
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
     * Another option is to load a diskette image directly, using the "--path" option; it supports both local and remote
     * PCjs (.json) disk images and raw (.img) disk images:
     *
     *      load a: --path=/diskettes/pcx86/sys/dos/ibm/2.00/PCDOS200-DISK1.json
     *      load a: --path=https://diskettes.pcjs.org/pcx86/sys/dos/ibm/2.00/PCDOS200-DISK1.json
     *
     * and if the file name ends with a `.json` or `.img` extension, then `--path` is assumed.  Be sure to wrap the entire
     * file name with quotes if it contains any spaces; eg:
     *
     *      load a: "my disk image.json"
     *
     * Lastly, to *unload* a diskette drive, specify "none" as the diskette name, as in:
     *
     *     load a: none
     *
     * Note that the "load" command is always available from pc.js "command mode", and it is also available from a DOS command
     * prompt IF the machine was launched with a locally built hard drive containing our hidden LOAD.COM utility (see buildDisk()).
     *
     * TODO: Date criteria using "--date" are accepted but not yet acted upon; implement and consider other criteria as well.
     *
     * @this {PC}
     * @param {string} sDrive ('A:' through 'Z:')
     * @param {Array.<string>} argv
     * @returns {string} (result of command)
     */
    loadDiskette(sDrive, argv)
    {
        let pc = this;
        let result = "";

        sDrive = sDrive.toUpperCase();
        let iDrive = sDrive.charCodeAt(0) - 'A'.charCodeAt(0);

        let doLoad = function(sDrive, diskName, diskPath) {
            diskPath = diskPath || pc.diskIndexCache[diskName]['path'];
            if (diskPath) {
                let done = function(disk, error) {
                    if (error == pc.Errors.DOS.INVALID_DRIVE) {
                        result = "invalid drive (" + sDrive + ")";
                    } else {
                        result = sprintf("diskette \"%s\"%s loaded (%d)", diskName, disk? (error < 0? " already" : "") : " not", error || 0);
                        if (disk && !error) {
                            /**
                             * We blow away the manifest if you just replaced the diskette that was built with that manifest,
                             * because there is no longer a connection between that disk drive and your local files.  That's one
                             * of the downsides of removable media.
                             */
                            if (pc.floppy && !iDrive) pc.drives[0].driveManifest = null;
                        }
                    }
                };
                result = "loading \"" + diskName + "\" in drive " + sDrive;
                pc.machine.fdc.loadDrive(iDrive, diskName, diskPath, false, null, done);
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

        if (this.machine.fdc) {

            let sPath = PC.removeArg(argv, 'path');
            if (!sPath && argv[0] && argv[0].match(/(^https?:|\.json$|\.img$)/)) {
                sPath = argv[0];
            }
            if (sPath) {
                doLoad(sDrive, sPath, sPath);
                return result;
            }
            if (argv[0] == "none") {
                result = pc.machine.fdc.unloadDrive(iDrive)? "drive unloaded" : "drive not loaded";
                return result;
            }
            if (this.diskItems && argv.length == 1 && argv[0].match(/^\d+$/)) {
                let diskItem = this.diskItems[+argv[0] - 1];
                if (diskItem) {
                    if (!diskItem['others']) {
                        doLoad(sDrive, diskItem['disk']);
                    } else {
                        this.diskItems = diskItem['others'];
                        this.diskItems.unshift(diskItem);
                        delete diskItem['others'];
                        result = displayItems(sDrive, this.diskItems, "multiple disks with identical file (use \"load " + sDrive + " 1\" to load original selection)");
                    }
                } else {
                    result = "invalid diskette number (" + argv[0] + ")";
                }
                return result;
            }

            let dateParts = [];
            let diskNameParts = [];
            let fileNameParts = [];
            this.diskItems = [];

            for (let criteria in argv) {
                let args = argv[criteria];
                if (typeof args != 'string') continue;
                if (!Array.isArray(args)) {
                    /**
                     * Thanks to unified argument processing, quoted arguments containing spaces are now
                     * allowed, so if you went to the trouble of doing that, we preserve spaces instead of
                     * splitting them.
                     *
                     *      args = args.split(' ');
                     *
                     * If you still want spaces to separate search terms, then simply don't quote them.
                     *
                     * That works great for disk criteria, since that's the default, but for file criteria,
                     * you'll have to either use multiple file criteria (eg, "load a: --file=pk --file=exe")
                     * or use a RegExp (eg, "load a: --file=pk.*exe"); the latter is recommended.
                     */
                    args = [args];
                }
                if (!isNaN(+criteria)) {
                    criteria = 'disk';
                    if (args[0].match(/\.[A-Z][A-Z][A-Z]$/i) || argv['f']) {
                        criteria = 'file';
                    }
                }
                for (let arg of args) {
                    /**
                    * Instead of trying to prevent the user from using regex characters:
                    *
                    *      arg = arg.replace(/([().\[\]])/g, '\\$1');
                    *
                    * we now embrace them.  Unfortunately, when using our DOS "LOAD" utility, the DOS command interpreter
                    * likes to chop commands up whenever it sees the "pipe" operator, so we have two options: allow the user
                    * to put quotes around regex expressions containing pipes, or let them use commas instead of pipes.
                    *
                    * I prefer the latter but also allow the former.  So these commands are equivalent:
                    *
                    *      load a: --file="arc.*(com,exe)"
                    *      load a: --file="arc.*(com|exe)"
                    *
                    * NOTE: If you want the base filename to end with "ARC", (eg, "ARC.EXE" or "LHARC.EXE" but not "SEARCH.EXE"),
                    * then use a period preceded by a backslash:
                    *
                    *      load a: --file="arc\.(com|exe)"
                    */
                    arg = arg.replace(/^"([^"]*)"$/, '$1').replace(/,/g, '|');
                    switch (criteria.toLowerCase()) {
                    case 'date':
                        dateParts.push(arg);
                        break;
                    case 'disk':
                        diskNameParts.push(arg);
                        break;
                    case 'file':
                        fileNameParts.push(arg);
                        break;
                    default:
                        printf("unknown criteria: %s\n", criteria);
                        break;
                    }
                }
            }
            if (diskNameParts.length || fileNameParts.length) {
                if (!this.diskIndexCache) {
                    this.diskIndexCache = this.readDiskIndex();
                    if (this.diskIndexCache) {
                        this.diskIndexKeys = Object.keys(this.diskIndexCache).sort();
                    }
                }
                if (this.diskIndexKeys.length) {
                    if (fileNameParts.length) {
                        this.fileIndexCache = this.readFileIndex(this.diskIndexCache);
                        if (this.fileIndexCache) {
                            this.fileIndexKeys = Object.keys(this.fileIndexCache).sort();
                        }
                    }
                    /**
                     * If we have file name criteria AND a file name index, then we dig through the file index keys
                     * and build up a list of disk names, similar to diskIndexKeys.  Otherwise, we start with diskIndexKeys.
                     */
                    let index = this.diskIndexCache;
                    let itemNames = this.diskIndexKeys;
                    let itemParts = diskNameParts;
                    if (fileNameParts.length) {
                        itemParts = fileNameParts;
                        if (this.fileIndexKeys.length) {
                            index = this.fileIndexCache;
                            itemNames = this.fileIndexKeys;
                        }
                    }
                    let searchNames = function(names, parts, index) {
                        let matches = [];
                        try {
                            let pattern = parts.join('.*');
                            if (pc.debug) printf("searching for \"%s\"...\n", pattern);
                            let re = new RegExp(pattern, 'i'), reDisk;
                            if (diskNameParts.length) {
                                reDisk = new RegExp(diskNameParts.join('.*'), 'i');
                            }
                            for (let name of names) {
                                let match = name.match(re);
                                if (match) {
                                    if (!Array.isArray(index[name])) {
                                        matches.push({'disk': name});
                                    } else {
                                        let a = index[name];
                                        /**
                                         * The items in this array are sorted by date, but we also want to eliminate duplicates
                                         * based on the hash value, so we maintain a hash index here.  The key is the hash value,
                                         * and each hash entry is an array of disk names.
                                         */
                                        let hashIndex = {};
                                        for (let i = 0; i < a.length; i++) {
                                            let item = a[i];
                                            if (reDisk && !item['disk'].match(reDisk)) continue;
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
                        /**
                         * Since there are multiple items, our job is to display rather than to load; a subsequent
                         * call to loadDiskette() with an item number will do the actual loading of the selected disk.
                         */
                        this.diskItems = items;
                        result = displayItems(sDrive, this.diskItems);
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
     * doCommand(s, reload)
     *
     * The "exec" command is used internally whenever the machine signals the desire to execute a local command;
     * in that case, if a local drive was built, we save its state to the local file system, then kill the machine,
     * exec the local command, and then rebuild the local drive and reload the machine.
     *
     * It's a bit slow and clunky, but it ensures that the local command sees any file changes that the machine made,
     * and conversely, the machine sees any file changes that the local command made.
     *
     * @this {PC}
     * @param {string} s
     * @param {boolean} [reload]
     * @returns {string} (result of command)
     */
    async doCommand(s, reload = false)
    {
        let [argc, argv] = PC.getArgs(s);
        let cmd = (argv[0] || "").toLowerCase();
        argv.splice(0, 1);
        let i = cmd.indexOf('/');
        if (i > 0) {
            argv.unshift(cmd.slice(i));
            cmd = cmd.slice(0, i);
        }
        let arg = argv[0] || "";
        let args = s.split(' ').slice(1).join(' ').trim();
        let result = "", curDir = "", sDir = this.localDir, sDrive = "";

        let help = function(machine, options = "") {
            let result = "internal commands:\n\n" +
                        "abort\tterminate without saving\n" +
                        "build\tbuild disk for specified drive type\n" +
                        "exec\texecute a local command\n" +
                        "fetch\tread disk image and extract to directory\n" +
                        "load\tload drive with specified diskette\n" +
                        "save\tsave disk to directory or as disk image\n" +
                        "select\tselect a new machine (eg, ibm5170)\n" +
                        "start\tstart new machine\n" +
                        "stop\tstop current machine (does not save)\n" +
                        "quit\tsave all changed files and terminate\n";
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
        case "abort":
            this.exit(2);
            break;
        case "help":
            result = help(this.machine);
            break;
        case "cd":
        case "dir":
        case "ls":
        case "rm":
            result = this.doFSCommand(cmd, argv);
            break;
        case "build":
            if (this.machine.cpu) {
                result = "machine already started";
            } else {
                result = this.checkBuildArgs(argv);
                if (!result) {
                    if (arg) {
                        arg = this.verifyDir(arg);
                        if (arg) {
                            this.localDir = arg;
                            argv.splice(0, 1);
                        }
                    }
                    args = argv.join(' ').trim();
                    arg = this.checkCommand(this.localDir, args);
                    if (!arg && args) {
                        result = "bad command or file name: " + args;
                    } else {
                        result = await this.buildDisk(this.localDir, arg, "", true);
                    }
                }
            }
            break;
        case "dump":
            if (!argv.length) {
                result = "usage: dump [logical sector number]";
                break;
            }
            result = this.dumpDisk(...argv);
            break;
        case "exec":
            if (globals.browser) {
                result = "external commands disabled in browser";
                break;
            }
            if (reload) {
                this.saveDisk(sDir);
                this.machine = this.newMachine();
            }
            try {
                let appConfig, child;
                curDir = node.process.cwd();
                node.process.chdir(this.mapDir(this.machineDir));
                appConfig = configJSON['apps']?.[arg];
                if (appConfig && appConfig['exec']) {
                    args = appConfig['exec'].replace(/\$\*/, args);
                }
                /**
                 * I've tweaked execSync() a bit to make it work with both Node and Bun....  I've also tried
                 * spawnSync(arg, argv, ...), but that doesn't work as well.
                 */
                child = node.child_process.execSync(args, {
                    stdio: [
                        "inherit", // node.process.stdin,
                        "inherit", // node.process.stdout,
                        "inherit"  // node.process.stderr
                    ]
                });
            } catch(err) {
                printf("%s\n", err.message);
            }
            node.process.chdir(curDir);
            if (reload) {
                result = await this.reloadMachine();
            }
            break;
        case "fetch":
            if (arg) {
                let diskInfo = await diskLib.readDiskAsync(arg);
                if (diskInfo) {
                    diskLib.extractFiles(diskInfo, {quiet: true, verbose: argv['verbose']}, "", argv[1] || "", argv['hidden']);
                } else {
                    result = "invalid disk image: " + arg;
                }
            } else {
                result = "usage: fetch [disk image] [directory]";
            }
            break;
        case "load":
            result = this.doLoad(args);
            break;
        case "save":
            if (arg) {
                sDir = arg;
                let matchDrive = sDir.match(/^([a-z]):?$/i);
                if (matchDrive) {
                    sDrive = matchDrive[1].toUpperCase() + ':';
                    argv.splice(0, 1);
                    sDir = argv[0];
                    if (!sDir) {
                        result = "specify a disk image for drive " + sDrive;
                        break;
                    }
                }
            }
            if (!this.saveDisk(sDir, sDrive)) {
                result = "no disk in drive " + sDrive;
            }
            break;
        case "select":
            if (this.machine.cpu) {
                result = "machine already started";
            }
            else if (arg) {
                let sFile = this.checkMachine(arg);
                if (sFile) {
                    this.localMachine = sFile;
                    result = "machine selected: " + sFile;
                    break;
                } else {
                    result = "unrecognized machine: " + arg;
                }
            } else {
                result = "missing machine file";
            }
            break;
        case "start":
            if (this.machine.cpu) {
                result = "machine already started";
            } else {
                this.checkMachineArgs(argv);
                if (!arg && !this.machine.cpu) {
                    arg = this.localMachine || this.savedMachine;
                }
                if (arg) {
                    let sFile = this.checkMachine(arg);
                    if (sFile) {
                        this.machine = this.newMachine();
                        printf("loading machine: %s\n", sFile);
                        result = this.loadMachine(sFile);
                        if (!result) {
                            this.localMachine = sFile;
                        }
                    } else {
                        result = "unrecognized machine: " + arg;
                    }
                } else {
                    result = "missing machine file";
                }
            }
            break;
        case "stop":
            if (this.machine.cpu) {
                this.machine = this.newMachine();
                result = "machine destroyed";
            } else {
                result = "no machine started";
            }
            break;
        case "q":
        case "quit":
            if (arg) {
                printf("unsupported option: %s\n", arg);
                break;
            }
            this.exit(0);
            break;
        default:
            if (s) {
                if (!this.machine.dbg) {
                    /**
                     * For machines without a debugger, provide some *very* limited machine control.
                     */
                    switch(cmd) {
                    case "?":
                        result = help(this.machine);
                        break;
                    case "g":
                        if (this.machine.cpu) {
                            if (this.machine.cpu.startCPU()) {
                                this.setDebugMode(DbgLib.EVENTS.EXIT);
                            }
                        } else {
                            result = "no machine started";
                        }
                        break;
                    default:
                        result = "unknown command: " + s;
                        break;
                    }
                } else {
                    try {
                        if (!this.machine.dbg.doCommands(s, true, true)) {
                            result = eval('(' + s + ')');
                        }
                    } catch(err) {
                        result = err.message;
                    }
                }
            }
            break;
        }
        this.commandPrev = s;
        return result? result + "\n" : "";
    }

    /**
     * doLoad(args)
     *
     * When called from doCommand(), it would have been simpler to pass argv, but this must also work from intLoad().
     *
     * NOTE: I originally had intLoad() call doCommand(), because it was cleaner, but that introduced another problem;
     * namely, doCommand() is an async function, whereas intLoad() wants to run synchronously, to preserve the illusion
     * that "load" is also a DOS utility.  So I extracted the "load" logic out of doCommand() and into this function.
     *
     * @param {string} args
     * @returns {string}
     */
    doLoad(args)
    {
        let result;
        let [argc, argv] = PC.getArgs(args);
        let arg = argv[0];
        if (arg) {
            if (arg == "info") {
                result = this.getDriveInfo().trim();
            } else {
                let matchDrive = arg.match(/^([a-z]:?)$/i);
                if (matchDrive) {
                    argv.splice(0, 1);
                    result = this.loadDiskette(matchDrive[1], argv);
                } else {
                    result = "invalid diskette drive: " + arg;
                }
            }
        } else {
            result = "usage: load [drive] [search options]";
        }
        return result;
    }

    /**
     * doFSCommand(cmd, argv)
     *
     * We mimic a small number of *nix-style file system commands in PCjs command mode.  These are
     * intended to be used when pc.js is running in a browser and we are simulating a file system with PCFS,
     * because there's no other way to easily examine the contents of PCFS, other than dumping the contents
     * of "globals.pcjs.files" with a debugger.
     *
     * These commands should also work fine when running pc.js with Node, but in that case, you'll probably
     * prefer real *nix commands, either with DOS commands (eg, "ls -l") that have been mapped to external commands
     * via "exec", or with the internal "exec" command directly (eg, "exec ls -l"), or another terminal window.
     *
     * @param {string} cmd (command to execute)
     * @param {Array} argv (arguments with command removed)
     * @returns {string} (result of command)
     */
    doFSCommand(cmd, argv)
    {
        let result = "", asFiles, sDir, count = 0;

        switch(cmd) {
        case "cd":
            sDir = argv[0];
            if (!sDir) {
                result = "current directory: " + this.localDir;
                break;
            }
            if (sDir[0] != '/') {
                sDir = node.path.join(this.localDir, sDir);
            }
            if (node.fs.existsSync(sDir)) {
                result = "new directory: " + sDir;
                this.localDir = sDir;
            } else {
                result = "invalid directory: " + argv[0];
            }
            break;
        case "dir":
        case "ls":
            result = "contents of " + this.localDir + ":\n";
            asFiles = node.fs.readdirSync(this.localDir);
            for (let sFile of asFiles) {
                if (sFile[0] == '.') continue;
                let sPath = node.path.join(this.localDir, sFile);
                let stats = node.fs.statSync(sPath);
                let attr = stats.attr;
                if (attr === undefined) {
                    if (stats.isDirectory()) {
                        attr = DiskInfo.ATTR.SUBDIR;
                    } else {
                        attr = DiskInfo.ATTR.ARCHIVE;
                        if (!(stats.mode & 0o200)) {
                            attr |= DiskInfo.ATTR.READONLY;
                        }
                    }
                }
                result += sprintf("%-8d  %.3F %-2D %Y  %-2G:%02N%A  %#04x  %s%s\n", stats.size, stats.mtime, stats.mtime, stats.mtime, stats.mtime, stats.mtime, stats.mtime, attr, sFile, (attr & DiskInfo.ATTR.SUBDIR)? '/' : '');
                count++;
            }
            result += sprintf("%-8d item(s)", count);
            break;
        default:
            result = "unsupported command: " + cmd;
            break;
        }
        return result;
    }

    /**
     * parseDriveType(typeDrive)
     *
     * @param {string} typeDrive
     * @returns {string} (error, if any)
     */
    parseDriveType(typeDrive)
    {
        let error = "";
        let driveInfo = this.drives[this.driveBuild];
        let match = typeDrive.match(/^([0-9]+):([0-9]+):([0-9]+):?([0-9]*)$/i);
        if (match) {
            let nCylinders = +match[1];
            let nHeads = +match[2];
            let nSectors = +match[3];
            let cbSector = +match[4] || 512;
            if (nCylinders < 1 || nCylinders > 1024 ||
                nHeads < 1 || nHeads > 256 ||
                nSectors < 1 || nSectors > 63 ||
                cbSector < 128 || cbSector > 1024 || (cbSector & (cbSector - 1))) {
                match = null;
            } else {
                this.kbTarget = 0;
                if (!this.floppy) {
                    driveInfo.driveCtrl = "PCJS";      // pseudo drive controller used for custom drive geometries
                }
                driveInfo.driveType = 0;
                driveInfo.nCylinders = nCylinders;
                driveInfo.nHeads = nHeads;
                if (nHeads > 16) {
                    printf("warning: %d heads may not be supported by the drive controller\n", nHeads);
                }
                driveInfo.nSectors = nSectors;
                driveInfo.cbSector = cbSector;
                if (cbSector != 512) {
                    printf("warning: %d-byte sectors are not known to work with any version of DOS\n", cbSector);
                }
                driveInfo.driveOverride = true;
            }
        } else if (!this.floppy) {
            match = typeDrive.match(/^([A-Z]+|):?([0-9]+)$/i);
            if (match) {
                let driveCtrl = match[1] || driveInfo.driveCtrl;
                let driveType = +match[2];
                /**
                 * WARNING: This code may not validate the type correctly if you didn't specify a controller (eg, "XT:1"),
                 * because the default controller is "COMPAQ" (because our default machine is a COMPAQ) and the code in
                 * checkMachine() that attempts to detect/update the appropriate controller for your particular machine hasn't
                 * run yet (this is too early).
                 */
                if (DiskInfo.validateDriveType(driveCtrl, driveType)) {
                    driveInfo.driveCtrl = driveCtrl;
                    driveInfo.driveType = driveType;
                    driveInfo.driveOverride = !!match[1];
                } else {
                    match = null;
                }
            }
        }
        if (!match) {
            error = "invalid drive type: " + typeDrive;
        }
        return error;
    }

    /**
     * checkArgs(argv)
     *
     * @this {PC}
     * @param {Object} argv
     * @returns {boolean} (true if we should continue, false if we should exit)
     */
    async checkArgs(argv)
    {
        this.debug = PC.removeFlag(argv, 'debug', this.debug);
        this.verbose = PC.removeFlag(argv, 'verbose', this.verbose);
        this.test = PC.removeFlag(argv, 'test', this.test);

        Device.setDebug(this.debug);
        device.setMessages(MESSAGE.DISK + MESSAGE.WARNING + MESSAGE.ERROR + (this.debug && this.verbose? MESSAGE.DEBUG : 0) + (this.verbose? MESSAGE.INFO : 0), true);
        this.messagesFilter = this.debug? MESSAGE.ALL + MESSAGE.TYPES + MESSAGE.ADDR : MESSAGE.ALERTS;

        let args = argv[0].split(' ');
        if (!argv[1] || this.debug || this.test || globals.browser) {
            let options = args.slice(1).join(' ');
            printf("pc.js v%s\n%s\n%s", Device.VERSION, Device.COPYRIGHT, (options? sprintf("Options: %s\n", options) : ""));
        }
        if (!machines) {
            let db;
            rootDir = node.path.join(node.path.dirname(args[0]), "../..");
            pcjsDir = node.path.join(rootDir, "/tools/pc");
            diskLib.setRootDir(rootDir, pcjsDir, PC.removeFlag(argv, 'local')? true : (PC.removeFlag(argv, 'remote')? false : null));
            db = await diskLib.readFileAsync("/machines/machines.json");
            machines = JSON.parse(db || "{}");
            db = await diskLib.readFileAsync(node.path.join(pcjsDir, configFile));
            configJSON = node.json5.parse(db || "{}");
        }
        let result;
        let defaults = configJSON['defaults'] || {};
        this.messages = PC.removeFlag(argv, 'messages', !!defaults['messages']);
        this.localDir = defaults['dir'] || this.localDir;
        this.localDiskette = defaults['diskette'] || this.localDiskette;
        this.localDisk = defaults['disk'] || this.localDisk;
        this.machineType = defaults['type'] || this.machineType;
        this.savedMachine = defaults['machine'] || this.savedMachine;
        this.savedState = defaults['state'] || this.savedState;
        result = this.checkBuildArgs(argv, defaults);
        if (result) {
            printf("error: %s\n", result);
            this.exit(1);
        }
        this.checkMachineArgs(argv, defaults);
        /**
         * Now that we have most of the system defaults, we can process --help (since it displays some of them).
         */
        return !PC.removeFlag(argv, 'help');
    }

    /**
     * checkBuildArgs(argv, defaults)
     *
     * @this {PC}
     * @param {Object|string} argv
     * @param {Object} [defaults]
     * @returns {string} (error message, if any)
     */
    checkBuildArgs(argv, defaults)
    {
        let result = "";
        let checkRemaining;

        if (!defaults) {
            defaults = {};
            checkRemaining = true;
        }

        let driveInfo = this.newDrive();
        this.bare = PC.removeFlag(argv, 'bare', this.bare);
        this.floppy = PC.removeFlag(argv, 'floppy', this.floppy);
        this.diskLabel = PC.removeArg(argv, 'label', defaults['label'] || this.diskLabel);
        this.normalize = PC.removeFlag(argv, 'normalize', defaults['normalize'] || this.normalize);
        this.systemType = PC.removeArg(argv, ['system','sys'], defaults['sys'] || this.systemType).toLowerCase();

        let i = this.systemType.indexOf(':');
        if (i > 0) {
            /**
             * We allow the version to be included with the system argument (eg, --sys=pcdos:2.0), for convenience.
             */
            this.systemVersion = this.systemType.slice(i+1);
            this.systemType = this.systemType.slice(0, i);
        } else {
            this.systemVersion = PC.removeArg(argv, ['version', 'ver'], defaults['ver'] || this.systemVersion);
        }
        this.systemMBR = PC.removeArg(argv, 'mbr', defaults['mbr'] || this.systemMBR);

        this.kbTarget = diskLib.getTargetValue(PC.removeArg(argv, 'target', defaults['target'])) || this.kbTarget;
        this.maxFiles = +PC.removeArg(argv, 'maxfiles', defaults['maxfiles'] || Math.trunc(this.kbTarget / 5));

        if ([160, 180, 320, 360, 720, 1200, 1440, 2880].indexOf(this.kbTarget) >= 0) {
            this.floppy = true;
        } else if (this.floppy) {
            this.kbTarget = this.maxFiles = 0;
        }

        /**
         * When using --floppy, certain other options are disallowed (eg, drivectrl).
         */
        if (this.floppy) {
            this.savedState = "";
            driveInfo.driveCtrl = "FDC";
            driveInfo.driveOverride = true;
            this.bootSelect = 'A';
        } else {
            let driveCtrl = PC.removeArg(argv, 'controller');
            if (driveCtrl) {
                driveInfo.driveCtrl = driveCtrl.toUpperCase();
                driveInfo.driveOverride = true;
            }
        }

        if (PC.removeFlag(argv, 'trim')) driveInfo.trimFAT = true;

        let typeDrive = PC.removeArg(argv, 'drivetype');
        if (typeDrive) {
            result = this.parseDriveType(typeDrive);
        }

        let typeFAT = PC.removeArg(argv, 'fat');
        if (typeFAT) {
            let match = typeFAT.match(/^([0-9]+):?([0-9]*):?([0-9]*)$/i);
            if (match) {
                driveInfo.typeFAT = +match[1];
                if (match[2]) driveInfo.clusterSize = +match[2] || 0;
                if (match[3]) driveInfo.rootEntries = +match[3] || 0;
            }
        }

        let hiddenSectors = PC.removeArg(argv, 'hidden');
        if (hiddenSectors) {
            driveInfo.hiddenSectors = +hiddenSectors || 0;
        }

        if (checkRemaining) {
            this.checkRemainingArgs(argv);
        }

        return result;
    }

    /**
     * checkMachineArgs(argv, defaults)
     *
     * @this {PC}
     * @param {Object|string} argv
     * @param {Object} [defaults]
     */
    checkMachineArgs(argv, defaults)
    {
        let checkRemaining;
        if (!defaults) {
            defaults = {};
            checkRemaining = true;
        }
        this.halt = PC.removeFlag(argv, 'halt', this.halt);
        /**
         * --boot can now be used to EITHER select the boot drive OR specify a custom boot sector.
         */
        let boot = PC.removeArg(argv, 'boot', defaults['boot'] || this.bootSelect);
        if (boot.length <= 1 || boot.length == 2 && boot[1] == ':') {
            this.bootSelect = boot.toUpperCase();
        } else {
            this.bootSector = boot;
        }
        this.serial = PC.removeFlag(argv, 'serial', defaults['serial'] || this.serial);
        if (checkRemaining) {
            this.checkRemainingArgs(argv);
        }
    }

    /**
     * checkRemainingArgs(argv)
     *
     * @this {PC}
     * @param {Object} argv
     * @returns {boolean}
     */
    checkRemainingArgs(argv)
    {
        let success = true;
        let args = Object.keys(argv);
        for (let arg of args) {
            if (!arg.match(/^[0-9]*$/)) {
                let value = argv[arg];
                if (typeof value != "string") {
                    value = "";
                } else {
                    value = "=" + value;
                }
                printf("invalid option: %s%s\n", arg, value);
                success = false;
            }
        }
        return success;
    }

    /**
     * verifyDir(sDir)
     *
     * @this {PC}
     * @param {string} sDir
     * @returns {string}
     */
    verifyDir(sDir)
    {
        if (sDir[0] == '~') {
            sDir = node.path.join(node.process.env.HOME, sDir.slice(1));
        } else if (sDir[0] == '%') {
            /**
             * Like we do for 'dir' values in getSystemValue(), we check for a leading '%',
             * which signals that this is a path to a repository alongside the pcjs repository.
             */
            sDir = node.path.join(pcjsDir, "../../..", sDir.slice(1));
        } else {
            sDir = node.path.resolve(sDir);
        }
        return diskLib.existsDir(sDir, false)? sDir : "";
    }

    /**
     * processArgs(argv, sMachine, sDisk, sDirectory, sLocalDisk, sCommands)
     *
     * Arguments that either the shell consumes (like *.*) or that we consume (like --help) can be
     * problematic if those are actually arguments you want to pass along as a command to buildDisk().
     *
     * So in those cases, you should simply put quotes around the entire buildDisk() command string
     * (eg, pc.js "dir *.* /p;chkdsk").
     *
     * NOTE: The above refers to any command you want executed inside the the machine, via AUTOEXEC.BAT
     * inside the built disk image.  Don't confuse those with sCommands, which are optional "internal"
     * pc.js commands you can specify via the --commands option.  The latter also prevent machine startup,
     * to ensure that those commands run first; include a "start" command to manually start a machine.
     *
     * Also, since --commands prevents automatic machine startup, specifying --commands (aka -c) without
     * any commands simply drops you into command mode.
     *
     * @this {PC}
     * @param {Array.<string>} argv
     * @param {string} [sMachine] (optional machine configuration file)
     * @param {string} [sDiskette] (optional source diskette image)
     * @param {string} [sDisk] (optional source disk image)
     * @param {string} [sDirectory] (optional source directory)
     * @param {string} [sLocalDisk] (optional target disk image, passed to buildDisk())
     * @param {string} [sCommands] (optional list of internal commands)
     */
    async processArgs(argv, sMachine, sDiskette, sDisk, sDirectory, sLocalDisk, sCommands)
    {
        let loading = false;
        let error = "", warning = "";
        let splice = false;

        if (!sMachine) {
            sMachine = argv[1];                 // for convenience, we also allow a bare machine name
            if (sMachine) splice = true;
        }

        if (sMachine) {
            this.localMachine = this.checkMachine(sMachine);
            if (this.localMachine) {
                if (splice) argv.splice(1, 1);
            } else {
                if (sMachine.endsWith(".json") || !splice) {
                    error = "unknown machine: " + sMachine;
                }
                sMachine = "";
            }
        }

        /**
         * If a diskette has been specified, then we need to decide whether the machine
         * can load it as-is; if so, then we can simply assign the path to localDiskette.
         *
         * Otherwise, if not (for example, if it's a ZIP archive), call readDiskAsync()
         * (which has been modified to also transform ZIP/EXE/ARC archives into disk images)
         * and write the resulting disk to the default localDiskette path.
         *
         * Lastly, if no diskette was specified, or there was an error reading or writing
         * the disk, then we must clear localDiskette.
         */
        if (sDiskette) {
            if (sDiskette.match(/\.(img|json)$/i)) {
                this.localDiskette = sDiskette;
            } else {
                let diskInfo = await diskLib.readDiskAsync(sDiskette);
                if (diskInfo) {
                    let sLocalDiskette = this.localDiskette;
                    if (sLocalDiskette.indexOf(node.path.sep) < 0) {
                        sLocalDiskette = node.path.join(pcjsDir, "disks", sLocalDiskette);
                    }
                    if (this.verbose) {
                        printf("building diskette %s as %s\n", sDiskette, sLocalDiskette);
                    }
                    if (diskLib.writeDiskSync(sLocalDiskette, diskInfo, false, 0, true, true)) {
                        this.localDiskette = sLocalDiskette;
                    } else {
                        sDiskette = "";
                    }
                } else {
                    sDiskette = "";
                }
            }
        }
        if (!sDiskette) {
            this.localDiskette = "";
        }

        if (sDisk) {
            if (sDisk == "none") {              // --disk=none disables any prebuilt disk
                this.localDisk = this.savedState = "";
            } else {
                if (sDisk.indexOf(node.path.sep) < 0 && !diskLib.existsFile(sDisk, false)) {
                    sDisk = node.path.join(pcjsDir, "disks", sDisk);
                }
                let diskInfo = await diskLib.readDiskAsync(sDisk);
                if (diskInfo) {
                    /**
                     * By default, any prebuilt disk will be used in the first drive.  So any drive-related
                     * settings are propagated to the next drive, and then a new DriveInfo object is created.
                     */
                    let driveInfo = this.newDrive(true);
                    this.updateDriveInfo(driveInfo, diskInfo);
                    /**
                     * The safe thing to do would be to simply NEVER used a saved state with ANY prebuilt disk,
                     * but we happen to know that our default saved state (state386.json) was built for a machine
                     * with drive type 1, so if that's also the type of the prebuilt disk, we'll allow it.
                     *
                     * Also, I've updated DiskInfo.getDriveType() to check for a PCJS MBR with a custom drive
                     * parameter table.  If if finds one, it will set driveCtrl to "PCJS", which our COMPAQ machine
                     * should support with or without a saved state, so again we'll allow it.
                     */
                    if (driveInfo.driveCtrl != "PCJS" && driveInfo.driveType != 1) {
                        this.savedState = "";
                    }
                    driveInfo.localDisk = sDisk;
                    driveInfo.driveOverride = true;
                    this.localDir = "";
                } else {
                    error = "invalid disk";
                }
            }
        }
        else if (globals.browser) {
            this.localDisk = diskLib.getLocalPath(this.localDisk);
        } else {
            this.localDisk = node.path.join(pcjsDir, "disks", this.localDisk);
        }

        if (sDirectory == "none" || this.localDir == "none") {
            sDirectory = "";                    // --dir=none is synonymous with --disk=none
            this.localDir = this.localDisk = this.savedState = "";
        }

        if (!error) {
            splice = false;
            if (!sDirectory) {
                sDirectory = argv[1];           // for convenience, we also allow a bare directory name
                if (sDirectory) splice = true;
            }
            if (sDirectory) {
                let newDir = this.verifyDir(sDirectory);
                if (newDir) {
                    this.localDir = newDir;
                    if (splice) argv.splice(1, 1);
                } else {
                    if (!splice) {
                        error = "invalid directory: " + sDirectory;
                        this.localDir = "";
                    }
                    sDirectory = "";
                }
            }
        }
        if (!sDirectory && this.localDir) {
            this.localDir = this.verifyDir(this.localDir);
        }

        /**
         * If --commands (or -c) has been specified, we want to avoid automatically building a disk
         * or starting a machine... UNLESS sDirectory indicates that a directory was specified, in which
         * case we assume that the user still wants a disk automatically built (but nothing more).
         */
        if (!error && (!sCommands || sDirectory)) {
            if (this.machineType == "pcx86" && (argv[1] || this.localDir)) {
                let args = argv.slice(1).join(' ');
                let sCommand = this.checkCommand(this.localDir, args);
                if (!sCommand && args) {
                    error = "command not found: " + args;
                } else if (!this.localDir) {
                    warning = "unable to add command '" + sCommand + "' to prebuilt disk";
                } else {
                    error = await this.buildDisk(this.localDir, sCommand, sLocalDisk);
                    /**
                     * If a target disk image was specified (via --save), then we assume that's all the
                     * user wanted us to do.  We'll also the display drive info if --test was specified.
                     */
                    if (!error && sLocalDisk) {
                        if (this.test) printf(this.getDriveInfo());
                        this.exit(0);
                    }
                }
            }
            if (!error && !sCommands) {
                if (!this.localMachine) {
                    this.localMachine = this.checkMachine(this.savedMachine);
                }
                error = this.loadMachine(this.localMachine);
                if (!error) {
                    loading = true;
                } else {
                    this.localMachine = "";
                }
            }
        }

        if (warning) {
            printf("warning: %s\n", warning);
        }

        if (error) {
            printf("error: %s\n", error);
            this.exit(1);
        }

        if (!loading) {
            this.setDebugMode(DbgLib.EVENTS.READY);
            this.processCommands(sCommands);
        }
    }

    /**
     * processCommands(sCommands)
     *
     * @param {string} sCommands
     */
    async processCommands(sCommands)
    {
        let aCommands = sCommands.split(';');
        for (let i = 0; i < aCommands.length; i++) {
            let s = aCommands[i].trim();
            if (s && s != "none") {
                printf("%s\n", s);
                let result = await this.doCommand(s);
                if (result) {
                    printf(result);
                }
                printf("%s> ", this.prompt);
            }
        }
    }

    /**
     * readInput(stdin, stdout)
     *
     * @this {PC}
     * @param {Object} stdin
     * @param {Object} stdout
     */
    readInput(stdin, stdout)
    {
        let pc = this;

        stdin.resume();
        stdin.setEncoding("utf8");
        stdin.setRawMode(true);

        stdin.on("data", function(data) {
            let machine = pc.machine;
            let code = data.charCodeAt(0);
            if (MAXDEBUG) {
                printf("key(s): %j\n", data);
            }
            if (code == 0x04 && !pc.debugMode) {            // check for CTRL-D when NOT in debug mode
                if (machine.cpu) machine.cpu.stopCPU();
                pc.setDebugMode(DbgLib.EVENTS.READY);
                return;
            }
            if (code == 0x03 && pc.debugMode) {             // check for CTRL-C when in debug mode
                pc.exit(3);
                return;
            }
            data = PC.functionKeys[data] || data;
            if (!pc.debugMode) {
                data = data.replace(/\x7f/g, "\b");         // convert DEL to BS
                if (machine.kbd && !pc.useSerial) {
                    if (MAXDEBUG) {
                        printf("injecting key(s): %s\n", data);
                    }
                    machine.kbd.injectKeys.call(machine.kbd, data, 0);
                } else {
                    pc.sendSerial(code);
                }
                return;
            }
            if (code == 0x08 || code == 0x7f) {             // implement BS/DEL ourselves (since we're in "raw" mode)
                if (pc.command.length) {                    // (Windows generates BS, macOS generates DEL)
                    pc.command = pc.command.slice(0, -1);
                    printf("\b \b");                        // by converting it to BS + SPACE + BS
                }
                return;
            }
            if (code == 0x01 && pc.commandPrev) {
                data = pc.commandPrev + '\r';               // implement CTRL-A as a command repeat action
            }
            else if (data == "$up" && !pc.command.length) {
                data = pc.commandPrev;                      // implement UP ARROW ourselves (since we're in "raw" mode)
            }
            else if (code < 0x20 && code != 0x0d || data.length > 1) {
                return;                                     // anything else (including any ESC codes) is ignored
            }
            printf("%s", data);
            pc.command += data;
            do {
                let i = pc.command.indexOf("\r");
                if (i < 0) break;
                let s = pc.command.slice(0, i);
                printf("\n");
                pc.command = pc.command.slice(i+1);
                try {
                    let result = pc.doCommand(s).then((result) => {
                        printf(result);
                        if (this.shutdown) return;
                        if (!machine.cpu || !machine.cpu.isRunning()) {
                            printf("%s> ", pc.prompt);
                        }
                    });
                } catch(err) {
                    printf("exception: %s\n", err.message);
                }
            } while (pc.command.length);
        });
    }

    /**
     * exit(code)
     *
     * Code 1 is a general error code, code 2 is used to abort without saving any changes to local the disk,
     * and code 3 is when terminating from debug mode; default code is 0 (ie, no error).
     *
     * @this {PC}
     * @param {number} code (exit code)
     */
    exit(code = 0)
    {
        if (globals.browser) {
            printf("shutdown disabled in browser\n");
            return;
        }
        this.shutdown = true;
        if (code != 2) {
            this.saveDisk(this.localDir);
        } else if (this.drives[this.driveBuild].driveManifest) {
            printf("warning: any changes to disk not saved\n");
        }
        node.process.stdin.setRawMode(false);
        if (code) printf("shutting down (%d)\n", code);
        if (this.test) printf("\n");
        node.process.exit(code);
    }

    /**
     * main(argc, argv)
     *
     * @this {PC}
     * @param {number} argc
     * @param {Array} argv
     */
    async main(argc, argv)
    {
        let success = await this.checkArgs(argv);

        if (!success) {
            let optionsMain = {
                "--boot=[drive]":           "\tselect boot drive (A, C, or none)",
                "--commands[=...]":         "execute commands, separated by semicolons",
                "--select=[machine]":       "select machine configuration file",
            };
            let optionsDisk = {
                "--dir=[directory]":        "use drive directory (default is " + this.localDir + ")",
                "--disk=[filename]":        "use drive disk image (instead of directory)",
                "--diskette=[filename]":    "load diskette image into drive A",
                "--controller=[id]":        "set drive controller (XT, AT, COMPAQ, or PCJS)",
                "--drivetype=[value]":      "set drive type or C:H:S (eg, 306:4:17)",
                "--fat=[value(s)]":         "set FAT type (12 or 16) [:cluster size[:root size]]",
                "--hidden=[number]":        "set hidden sectors (default is 1)",
                "--label=[string]":         "set volume label of disk image",
                "--maxfiles=[number]":      "set maximum local files (default is " + this.maxFiles + ")",
                "--save=[filename]":        "save drive disk image and exit",
                "--system=[string]":        "set operating system type (default is " + this.systemType + ")",
                "--target=[nK|nM]":         "set target disk size (default is " + ((this.kbTarget / 1024)|0) + "M)",
                "--version=[#.##]":         "set operating system version (default is " + this.systemVersion + ")"
            };
            let optionsOther = {
                "--bare (-b)":              "\tomit helper binaries from disk",
                "--debug (-d)":             "\tenable DEBUG messages",
                "--floppy (-f)":            "\tbuild floppy instead of hard disk",
                "--halt (-h)":              "\thalt machine on startup",
                "--help (-?)":              "\tdisplay command-line usage",
                "--local (-l)":             "\tuse local diskette images",
                "--messages (-m)":          "\tenable debugger messages",
                "--normalize (-n)":         "normalize characters in text files",
                "--test (-t)":              "\tenable test mode (non-interactive)",
                "--serial (s)":             "\tuse serial port instead of keyboard",
                "--verbose (-v)":           "\tenable verbose mode"
            };
            let optionGroups = {
                "machine options:":         optionsMain,
                "disk options:":            optionsDisk,
                "other options:":           optionsOther
            };
            printf("\nusage:\n\t[node] pc.js [machine file] [local directory] [DOS command] [options]\n");
            for (let group in optionGroups) {
                printf("\n%s\n\n", group);
                for (let option in optionGroups[group]) {
                    printf("\t%s\t%s\n", option, optionGroups[group][option]);
                }
            }
            printf("\nnotes:\n\t--drivetype can also specify a drive geometry (eg, --drivetype=306:4:17)\n");
            printf("\t--fat can also specify cluster and root directory sizes (eg, --fat=16:2048:512)\n");
            printf("\t--hidden also disables the use of hidden sectors to work around boot sector bugs\n");
            printf("\t--system can also specify a version (eg, --system=pcdos:2.0) for convenience\n\n");
            printf("\tFAT values should be considered advisory, as it may not be possible to honor them.\n");
            printf("\npc.js configuration settings are stored in %s\n", node.path.join(pcjsDir, configFile));
            return;
        }

        let commands = PC.removeFlag(argv, 'commands')? "none" : PC.removeArg(argv, 'commands', this.commands);
        await this.processArgs(
            argv,
            PC.removeArg(argv, 'select'),
            PC.removeArg(argv, 'diskette'),
            PC.removeArg(argv, 'disk'),
            PC.removeArg(argv, 'dir'),
            PC.removeArg(argv, 'save'),
            commands).catch((err) => {
                printf("exception: %s\n", err.message);
            }
        );

        if (!this.checkRemainingArgs(argv)) {
            this.exit(1);
        }

        this.readInput(node.process.stdin, node.process.stdout);
    }
}

if (!globals.browser) {
    let pc = new PC();
    await pc.main(...PC.mapArgs(PC.optionMap)).catch((err) => {
        printf("exception: %s\n", err.message);
    });
}
