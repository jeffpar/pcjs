#!/usr/bin/env node
/**
 * @fileoverview Implements the PCjs machine command-line interface
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import path from "path";
import xml2js from "xml2js";
import Messages from "../../machines/modules/v2/messages.js";
import filelib from "../../machines/modules/v2/filelib.js";
import proclib from "../../machines/modules/v2/proclib.js";
import { printf } from "../../machines/modules/v2/printf.js";
import { readDir, writeDisk } from "../modules/disklib.js";

let args = proclib.getArgs();
let argv = args.argv;
let fDebug = argv['debug'] || false;
let machineType = argv['type'] || "pcx86";

let sCmdPrev = "";
let Component, Interrupts;
let strlib, weblib, embedMachine;
let cpu, dbg, kbd;

/**
 * loadModules(factory, modules)
 *
 * @param {string} factory
 * @param {Array.<string>} modules
 */
async function loadModules(factory, modules)
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
         * which is bizarre, because backslash is actually Windows' preferred path separator.
         * ¯\_(ツ)_/¯
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
        case "strlib":
            strlib = module.default;
            break;
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
    }
    readInput(factory.replace("embed", ""), process.stdin, process.stdout);
}

/**
 * readInput(prompt, stdin, stdout)
 *
 * @param {string} prompt
 * @param {Object} stdin
 * @param {Object} stdout
 */
function readInput(prompt, stdin, stdout)
{
    /*
     * Process any command-line (--cmd) commands first.
     */
    if (argv['cmd'] !== undefined) {
        let cmds = argv['cmd'];
        let aCmds = (typeof cmds == "string"? [cmds] : cmds);
        for (let i = 0; i < aCmds.length; i++) {
            printf(doCommand(aCmds[i]));
        }
        sCmdPrev = "";
    }

    let command = "";
    let debugMode = undefined;

    prompt = ">";

    let setDebugMode = function(f) {
        if (!f && debugMode != f) {
            printf("Press ctrl-a to enter debugger, ctrl-c to terminate process\n");
        }
        debugMode = f;
        if (debugMode) {
            printf("%s> ", prompt);
        }
    };

    setDebugMode(!kbd);

    stdin.resume();
    stdin.setEncoding("utf8");
    stdin.setRawMode(true);

    stdin.on("data", function(data) {
        let code = data.charCodeAt(0);
        if (code == 0x01 && !debugMode) {           // check for CTRL-A when NOT in debug mode
            cpu.stopCPU();
            command = "";
            setDebugMode(true);
            return;
        }
        if (code == 0x03 && debugMode) {            // check for CTRL-C when in debug mode
            printf("terminating...\n");
            process.exit();
            return;
        }
        if (!debugMode) {
            data = data.replace(/\x7f/g, "\b");     // convert DEL to BS
            kbd.injectKeys.call(kbd, data, 0);
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
            if (cpu.isRunning()) {
                setDebugMode(false);
                break;
            }
            printf("%s> ", prompt);
            command = command.slice(i+1);
        } while (command.length);
    });
}

/**
 * intVideo(addr)
 *
 * @param {number} addr
 * @returns {boolean} true to proceed with the INT 0x10 software interrupt, false to skip
 */
function intVideo(addr)
{
    let AH = ((cpu.regEAX >> 8) & 0xff), AL = (cpu.regEAX & 0xff);
    if (AH == 0x0e) {
        printf("%c", AL);
    }
    return true;
}

/**
 * initMachine(machine, sMachine)
 *
 * @param {Object} machine
 * @param {string} [sMachine]
 * @returns {string}
 */
function initMachine(machine, sMachine)
{
    let result = "";
    if (fDebug) printf("initMachine()\n");
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
        if (cpu && Interrupts.VIDEO) {
            cpu.addIntNotify(Interrupts.VIDEO, intVideo.bind(cpu));
        }

        /*
         * Get the Debugger component so we can override the debugger's print() function.
         */
        dbg = Component.getComponentByType("Debugger");
        if (dbg) {
            dbg.print = function(s, bitsMessage) {
                if (fDebug || bitsMessage != Messages.LOG) {
                    printf(s);
                }
            };
        }

        /*
         * Get the Keyboard component to get access to injectKeys(), which simplifies the
         * injection of keystrokes into the machine.
         */
        kbd = Component.getComponentByType("Keyboard");
        result = "Machine loaded: " + idMachine;;
    } catch(err) {
        result = err.message;
    }
    return result;
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
    if (fDebug) printf("loadMachine(\"%s\")\n", sFile);

    if (sFile.endsWith(".json") || sFile.endsWith(".json5")) {
        result = readJSON(sFile, initMachine);
    }
    else if (sFile.endsWith(".xml")) {
        let xml = {_resolving: 0};
        result = readXML(sFile, xml, 'machine', null, 0, initMachine);
    } else {
        result = "unsupported machine configuration file: " + sFile;
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
        let sMachine = filelib.readFileSync(sFile, "utf8");
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
        let sXML = filelib.readFileSync(sFile, "utf8");
        let parser = new xml2js.Parser({attrkey: idAttrs});
        parser.parseString(sXML, function(err, xmlNode) {
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
                        if (attrs) {
                            for (let attr in attrs) {
                                if (attr == "ref") {
                                    let sFileXML = attrs[attr];
                                    readXML(sFileXML, xml, sTag, aTagsXML, iTagXML, done);
                                }
                            }
                        }
                    }
                }
                if (!--xml._resolving) done(xml);
            }
        });
    } catch(err) {
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
        result = process.cwd();
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

filelib.setRootDir("../..");
let machines = JSON.parse(filelib.readFileSync("/machines/machines.json", "utf8"));
loadModules(machines[machineType]['factory'], machines[machineType]['modules']);
