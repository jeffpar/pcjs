#!/usr/bin/env node
/**
 * @fileoverview Implements the PCjs machine command-line interface
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import glob       from "glob";
import path       from "path";
import xml2js     from "xml2js";
import Messages   from "../../machines/modules/v2/messages.js";
import { printf, sprintf } from "../../machines/modules/v2/printf.js";
import StrLib     from "../../machines/modules/v2/strlib.js";
import DiskInfo   from "../../machines/pcx86/modules/v3/diskinfo.js";
import { Defines, MESSAGE } from "../../machines/modules/v3/defines.js";
import { device, existsFile, getDiskSector, makeFileDesc, readDir, readDisk, readFile, setRootDir, writeDisk } from "../modules/disklib.js";
import pcjslib    from "../modules/pcjslib.js";

let argv = pcjslib.getArgs()[1];
let arg0 = argv[0].split(' ');
let fDebug = argv['debug'] || false;
let machineType = argv['type'] || "pcx86";

device.setDebug(fDebug);
device.setMessages(MESSAGE.DISK + MESSAGE.WARN + MESSAGE.ERROR + (Defines.DEBUG? MESSAGE.DEBUG : 0), true);
let messagesFilter = fDebug? Messages.TYPES : Messages.ALERTS;

let cwd = process.cwd();
let rootDir = path.join(path.dirname(arg0[0]), "../..");
let pcjsDir = path.join(rootDir, "/tools/pc");
setRootDir(rootDir);

let Component, Interrupts;
let weblib, embedMachine;
let cpu, dbg, fdc, kbd, serial, fnSendSerial;
let debugMode;
let prompt = ">";
let sCmdPrev = "";
let machines = JSON.parse(readFile("/machines/machines.json"));

function setDebugMode(f)
{
    let prevMode = debugMode;
    if (!f && debugMode != f) {
        printf("Press ctrl-a to enter debugger, ctrl-c to terminate process\n");
    }
    debugMode = f;
    if (f && prevMode !== undefined && cpu) {
        cpu.stopCPU();
    }
    if (debugMode) {
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
         * "node pc.js" will fail on Windows operating systems with the following error:
         *
         *      TypeError [ERR_INVALID_MODULE_SPECIFIER]: Invalid module
         *      "..\..\..\machines\modules\v2\defines.js" is not a valid package name ....
         *
         * which seems bizarre, since backslash is actually Windows' preferred path separator.
         * ¯\_(ツ)_/¯
         *
         * Moreover, we cannot join modulePath with rootDir, because rootDir will start with
         * a drive letter (eg, "C:") on Windows, which then fails with the following error:
         *
         *      Only URLs with a scheme in: file and data are supported by the default ESM loader.
         *      On Windows, absolute paths must be valid file:// URLs. Received protocol 'c:'
         *
         * so we join it with a relative directory (ie, "../..").
         */
        modulePath = path.join("../..", modulePath).replace(/\\/g, '/');
        let name = path.basename(modulePath, ".js");
        if (name == "embed") {
            let { [factory]: embed } = await import(modulePath);
            embedMachine = embed;
            continue;
        }
        let module = await import(modulePath);
        switch(name) {
        case "weblib":
            weblib = module.default;
            break;
        case "component":
            Component = module.default;
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
                if (debugMode && !bitsMessage || (bitsMessage || fDebug) && this.testBits(messagesFilter, bitsMessage)) {
                    printf(s);
                }
            };
        }
    }
    done();
}

/**
 * initMachine(machine, sMachine)
 *
 * @param {Object} machine
 * @param {string} [sMachine]
 */
function initMachine(machine, sMachine)
{
    try {
        let idMachine = "";
        if (machine['machine']) {
            idMachine = machine['machine']['id'];
        }

        /*
         * Simulate the page embedding and page initialization process now.
         */
        embedMachine(idMachine, null, null, sMachine);
        weblib.doPageInit();

        /*
         * Get the CPU component so we can keep tabs on its running state and also hook
         * a few interrupts (eg, INT 0x10).  Get the Debugger component so we can override
         * the debugger's print() function.
         */
        cpu = Component.getComponentByType("CPU");
        if (cpu && cpu.addIntNotify) {
            if (Interrupts && Interrupts.VIDEO) {
                cpu.addIntNotify(Interrupts.VIDEO, intVideo.bind(cpu));
            }
        }

        /*
         * Get the FDC component so we can query its complete list of diskettes.
         */
        fdc = Component.getComponentByType("FDC");

        /*
         * Get the Debugger component so we can send the debugger commands.
         */
        dbg = Component.getComponentByType("Debugger");

        /*
         * Get the Keyboard component to get access to injectKeys(), which simplifies the
         * injection of keystrokes into the machine.
         */
        kbd = Component.getComponentByType("Keyboard");

        serial = Component.getComponentByType("SerialPort");
        if (serial) {
            let exports = serial['exports'];
            if (exports) {
                var fnSetConnection = exports['setConnection'];
                if (fnSetConnection) {
                    if (fnSetConnection.call(serial, null, receiveSerial)) {
                        fnSendSerial = exports['receiveData'];
                    }
                }
            }
        }
        setDebugMode(true);
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
    /*
     * If this function is called, then the CPU is presumably running, so let's make sure that
     * has been reflected in the debugMode setting.
     */
    setDebugMode(false);
    let AH = ((this.regEAX >> 8) & 0xff), AL = (this.regEAX & 0xff);
    if (AH == 0x0e) {
        printf("%c", AL);
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
    if (serial && fnSendSerial) {
        fnSendSerial.call(serial, b);
    }
}

/**
 * loadMachine(sFile)
 *
 * @param {string} sFile
 * @returns {string}
 */
function loadMachine(sFile)
{
    let getFactory = function(machine, sMachine) {
        let type = machine['type'] || (machine['machine'] && machine['machine']['type']) || machineType;
        loadModules(machines[type]['factory'], machines[type]['modules'], function() {
            initMachine(machine, sMachine);
        });
    };
    let result = "no machine";
    if (sFile) {
        if (sFile.indexOf(path.sep) < 0) {
            sFile = path.join(pcjsDir, sFile);
        }
        if (fDebug) {
            printf("loadMachine(\"%s\")\n", sFile);
        }
        let sOpen = sFile;
        if (sOpen.indexOf(".json") > 0 || existsFile(sOpen = sFile + ".json5", false) || existsFile(sOpen = sFile + ".json", false)) {
            result = readJSON(sOpen, getFactory);
        }
        else {
            sOpen = sFile;
            if (sOpen.indexOf(".xml") > 0 || existsFile(sOpen = sFile + ".xml", false)) {
                let xml = {_resolving: 0};
                result = readXML(sOpen, xml, 'machine', null, 0, getFactory);
            } else {
                result = "unsupported machine configuration file: " + sFile;
            }
        }
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
function readJSON(sFile, done)
{
    let result = "";
    try {
        let sMachine = readFile(sFile);
        /*
         * Since our JSON files may contain comments, hex values, etc, use eval() instead of JSON.parse().
         */
        let machine = eval('(' + sMachine + ')');
        done(machine, sMachine);
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
function readXML(sFile, xml, sNode, aTags, iTag, done)
{
    let result = "";
    let idAttrs = '@';
    try {
        xml._resolving++;
        let sXML = readFileSync(sFile);
        let parser = new xml2js.Parser({attrkey: idAttrs});
        parser.parseString(sXML, function parseXML(err, xmlNode) {
            if (!aTags) {
                xml[sNode] = xmlNode[sNode];
            } else {
                aTags[iTag] = xmlNode[sNode];
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
                             * Any non-ref attributes in the tag override those in the referenced file.
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
                    let machine = convertXML(xml, idAttrs);
                    done(machine, JSON.stringify(machine));
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
 * doCommand(sCmd)
 *
 * @param {string} sCmd
 * @returns {string} (result of command)
 */
function doCommand(sCmd)
{
    let result = "";
    let aTokens = sCmd.split(' ');

    switch(aTokens[0]) {
    case "cwd":
        result = cwd;
        break;
    case "load":
        result = loadMachine(aTokens[1]);
        break;
    case "q":
    case "quit":
        process.exit();
        break;
    default:
        if (sCmd) {
            try {
                if (dbg && !dbg.doCommands(sCmd, true, true)) {
                    result = eval('(' + sCmd + ')');
                }
            } catch(err) {
                result =  err.message;
            }
        }
        break;
    }
    sCmdPrev = sCmd;
    return result? result + "\n" : "";
}

/**
 * buildDisk(sCommand)
 *
 * The first three system files on the disk image will be those listed below (ie, IO.SYS, MSDOS.SYS, and
 * COMMAND.COM); if any of those files already exist in the current directory, ours will take precedence.
 * As for AUTOEXEC.BAT, we read any existing file (or create an empty file) and append the provided command.
 *
 * NOTE: The list of allowed internal commands is not intended to be exhaustive (yet); it's just a start.
 *
 * @param {string} sCommand (eg, "COPY A:*.COM C:", "PKUNZIP DEMO.ZIP", etc)
 * @returns {string}
 */
function buildDisk(sCommand)
{
    let aSystemFiles = ["IO.SYS", "MSDOS.SYS", "COMMAND.COM"];
    let aInternalCommands = ["COPY", "DEL", "DIR", "ECHO", "MKDIR", "PAUSE", "RMDIR", "SET", "TYPE", "VER"];
    let aParts = sCommand.split(' ');
    let sProgram = aParts[0].toUpperCase();
    let iCommand = aInternalCommands.indexOf(sProgram);
    if (iCommand < 0) {
        if (sProgram.indexOf('.') < 0) {
            sProgram += ".{COM,EXE,BAT}";
        }
        if (sProgram.indexOf('/') < 0 && sProgram.indexOf('\\') < 0) {
            sProgram = path.join("**", sProgram);
        }
        let aFiles = glob.sync(sProgram);
        if (!aFiles.length) {
            sProgram = null;
        } else {
            let sArguments = aParts.slice(1).join(' ');
            sCommand = aFiles[0].replace(/\//g, '\\');
            sCommand = "C:" + (sCommand[0] != '\\'? '\\' : '') + sCommand + (sArguments? " " + sArguments : "");
        }
    }
    if (sProgram) {
        let diSystem = readDisk("/diskettes/pcx86/sys/dos/microsoft/3.20/MSDOS320-DISK1.json");
        let dbMBR = readFile(path.join(pcjsDir, "MSDOS.mbr"), null);
        if (diSystem && dbMBR) {
            let aFileDescs = [];
            for (let name of aSystemFiles) {
                let desc = diSystem.findFile(name);
                if (desc) {
                    desc.attr = +desc.attr | DiskInfo.ATTR.HIDDEN;
                    aFileDescs.push(desc);
                }
            }
            let attr = DiskInfo.ATTR.ARCHIVE;
            let contents = readFile("AUTOEXEC.BAT", "utf8", true);
            if (!contents) {
                contents = "";
                attr |= DiskInfo.ATTR.HIDDEN;
            }
            contents += sCommand + "\r\n";
            aFileDescs.push(makeFileDesc("AUTOEXEC.BAT", contents, attr));
            let dbBoot = getDiskSector(diSystem, 0);
            /*
             * For reasons that are unclear at the moment, the MS-DOS 3.20 boot sector did not rely on the
             * DL register containing the boot drive # (0x00 for floppy drive, 0x80 for hard disk); instead,
             * whenever the operating system wrote the boot sector to the media, it would insert the media's
             * drive number at offset 0x1fd (before the 0x55,0xAA signature).  So that's we do, too.
             *
             * Wikipedia claims this was done "only in DOS 3.2 to 3.31 boot sectors" and that in "OS/2 1.0
             * and DOS 4.0, this entry moved to sector offset 0x024 (at offset 0x19 in the EBPB)".  Something
             * to study later.
             */
            dbBoot.writeUInt8(0x80, 0x1fd);
            let done = function(di) {
                if (di) {
                    di.updateBootSector(dbBoot);
                    di.updateBootSector(dbMBR, -1);
                    writeDisk(path.join(pcjsDir, "MSDOS.json"), di, false, 0, true, true);
                }
            }
            let normalize = true;
            readDir("./", 0, 0, "PCJS", null, normalize, 10240, 1024, false, null, null, aFileDescs, done);
            return true;
        }
    } else {
        printf("command not found: %s\n", sCommand);
    }
    return false;
}

/**
 * buildFileIndex()
 */
function buildFileIndex()
{
    let total = 0;
    let aDiskettes = fdc.aDiskettes;
    let fileIndex = {};
    if (aDiskettes) {
        for (let i = 0; i < aDiskettes.length; i++) {
            let diskette = aDiskettes[i];
            let diskJSON = readFile(diskette['path'], "utf8", true);
            if (diskJSON) {
                let disk = JSON.parse(diskJSON);
                let fileTable = disk['fileTable'];
                if (!fileTable) continue;
                for (let j = 0; j < fileTable.length; j++) {
                    let file = fileTable[j];
                    let parts = file['path'].split('/');
                    let name = parts[parts.length - 1];
                    if (!fileIndex[name]) {
                        fileIndex[name] = [];
                    }
                    fileIndex[name].push(i);
                }
                total++;
                if (total % 100 == 0) {
                    printf("diskettes loaded: %d\r", total);
                }
            }
        }
    }
    printf("total diskettes loaded: %d\n", total);
    return fileIndex;
}

/**
 * readInput(stdin, stdout)
 *
 * @param {Object} stdin
 * @param {Object} stdout
 */
function readInput(stdin, stdout)
{
    let command = "";
    let loading = false;

    if (typeof argv['load'] == "string") {          // process --load argument, if any
        printf(loadMachine(argv['load']));
        loading = true;
    }
    else if (argv[1]) {                             // process first non-option argument, if any
        if (existsFile(argv[1]) || existsFile(argv[1] + ".json")) {
            printf(loadMachine(argv[1]));           // perform an implicit load
            argv.splice(1, 1);
            loading = true;
        } else {
            /*
             * NOTE: Arguments like "*.*" are problematic (since modern shells will expand them), so
             * any arguments you want to pass along with the command to buildDisk() should be included
             * as part of a single fully-quoted argument (eg, pc.js "dir *.* /s").
             */
            if (!buildDisk(argv[1])) {              // the argument is presumably a DOS command or program
                return;                             // exit on error (buildDisk() should have explained)
            }
            if (!argv['load']) {                    // and if it was, automatically load a machine to run it
                printf(loadMachine("compaq386"));
                loading = true;
            }
        }
    }

    if (!loading) setDebugMode(true);

    stdin.resume();
    stdin.setEncoding("utf8");
    stdin.setRawMode(true);

    stdin.on("data", function(data) {
        let code = data.charCodeAt(0);
        if (code == 0x01 && !debugMode) {           // check for CTRL-A when NOT in debug mode
            setDebugMode(true);
            command = "";
            return;
        }
        if (code == 0x03 && debugMode) {            // check for CTRL-C when in debug mode
            printf("terminating...\n");
            process.exit();
            return;
        }
        if (!debugMode) {
            data = data.replace(/\x7f/g, "\b");     // convert DEL to BS
            if (kbd) {
                kbd.injectKeys.call(kbd, data, 0);
            } else {
                sendSerial(code);
            }
            return;
        }
        if (data == "\x08" || data == "\x7f") {     // implement BS/DEL ourselves (since we're in "raw" mode)
            if (command.length) {                   // (Windows generates BS, macOS generates DEL)
                command = command.slice(0, -1);
                printf("\b \b");                    // by converting it to BS + SPACE + BS
            }
            return;
        }
        if (data == "\x1b[A" && !command.length) {  // implement UP ARROW ourselves (since we're in "raw" mode)
            data = sCmdPrev;
        }
        else if (code < 0x20 && code != 0x0d) {     // anything else (including any ESC codes) is ignored
            return;
        }
        printf("%s", data);
        command += data;
        do {
            let i = command.indexOf("\r");
            if (i < 0) break;
            let sCmd = command.slice(0, i);
            printf("\n");
            printf(doCommand(sCmd));
            if (cpu && cpu.isRunning()) {
                setDebugMode(false);
                break;
            }
            printf("%s> ", prompt);
            command = command.slice(i+1);
        } while (command.length);
    });
}

readInput(process.stdin, process.stdout);
