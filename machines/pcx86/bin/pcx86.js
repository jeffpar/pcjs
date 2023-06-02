#!/usr/bin/env node
/**
 * @fileoverview Implements the PCx86 command-line interface
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs from "fs";
import path from "path";
import Messages from "../../modules/v1/messages.js";
import filelib from "../../modules/v2/filelib.js";
import proclib from "../../modules/v2/proclib.js";

let args = proclib.getArgs();
let argv = args.argv;
let fDebug = (argv['debug'] || false);

let sCmdPrev = "";
let Component, Interrupts;
let strlib, weblib, embedMachine;
let cpu, dbg, kbd;

let injectKeys = false;
let machines = JSON.parse(fs.readFileSync("../../machines.json", "utf8"));

/**
 * loadModules(factory, modules)
 *
 * @param {string} factory
 * @param {Array.<string>} modules
 */
async function loadModules(factory, modules)
{
    for (let modulePath of modules) {
        modulePath = path.join("../../..", modulePath);
        let name = path.basename(modulePath, ".js");
        if (name == "embed") {
            let { [factory]: embed } = await import(modulePath);
            embedMachine = embed;
            continue;
        }
        let { default: module } = await import(modulePath);
        switch(name) {
        case "strlib":
            strlib = module;
            break;
        case "weblib":
            weblib = module;
            break;
        case "component":
            Component = module;
            break;
        case "interrupts":
            Interrupts = module;
            break;
        }
    }
    readInput(factory.replace("embed", ""), process.stdin, process.stdout);
}

/**
 * printf(format, ...args)
 *
 * @param {string} format
 * @param {...} args
 */
function printf(format, ...args)
{
    if (strlib) {
        process.stdout.write(strlib.sprintf(format, ...args));
        return;
    }
    console.log(format, ...args);
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
            doCommand(aCmds[i]);
        }
        sCmdPrev = "";
    }

    let command = "";
    let debugMode = !kbd;
    prompt = ">";
    printf("Press ctrl-a to enter debug mode, ctrl-a again to exit\n");
    if (debugMode) {
        printf("%s> ", prompt);
    }

    stdin.resume();
    stdin.setEncoding("utf-8");
    stdin.setRawMode(true);

    stdin.on("data", function(data) {
        let code = data.charCodeAt(0);
        if (code == 0x01) {
            if (debugMode) {
                process.exit();
                return;
            }
            cpu.stopCPU();
            debugMode = true;
            command = data = "";
            printf("%s> ", prompt);
        }
        if (!debugMode) {
            kbd.injectKeys.call(kbd, data, 0);
            return;
        }
        if (data) {
            if (data == "\x7f") {
                if (command.length) {
                    command = command.slice(0, -1);
                    printf("\b \b");
                }
                return;
            }
            if (data == "\x1b[A" && !command.length) {
                data = sCmdPrev;
            }
            else if (code < 0x20 && code != 0x0d) {
                return;
            }
            printf("%s", data);
            command += data;
            do {
                let i = command.indexOf("\r");
                if (i < 0) break;
                let sCmd = command.slice(0, i);
                if (prompt != ">" || !sCmd) printf("\n");
                doCommand(sCmd);
                if (cpu.isRunning()) {
                    debugMode = false;
                    break;
                }
                printf("%s> ", prompt);
                command = command.slice(i+1);
            } while (command.length);
        }
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
        injectKeys = true;
    }
    return true;
}

/**
 * loadMachine(sFile)
 *
 * @param {string} sFile
 * @returns {Object} machine structure if successful
 */
function loadMachine(sFile)
{
    let machine;
    if (fDebug) printf("loadMachine(\"%s\")\n", sFile);
    try {
        let sMachine = fs.readFileSync(sFile, "utf8");
        /*
         * Since our JSON files may contain comments, hex values, and other tokens deemed unacceptable
         * by the JSON Overlords, we must use eval() instead of JSON.parse().
         */
        machine = eval('(' + sMachine + ')');
        if (machine) {
            /*
             * 'machine' is a pseudo-component that is only used to define an ID for the entire machine;
             * if it exists, then that ID is prepended to every component ID, just as our XSLT code would
             * do for a machine XML file.  This relieves the JSON file from having to manually prepend
             * a machine ID to every component ID itself.
             *
             * This doesn't mean I anticipate a Node environment running multiple machines, as we do in
             * a browser; it only means that I'm trying to make both environments operate similarly.
             */
            let idMachine = "";
            if (machine['machine']) {
                idMachine = machine['machine']['id'];
            }

            embedMachine(idMachine, null, null, sMachine);
            weblib.doPageInit();

            cpu = Component.getComponentByType("CPU");
            if (cpu) {
                cpu.addIntNotify(Interrupts.VIDEO, intVideo.bind(cpu));
            }
            dbg = Component.getComponentByType("Debugger");
            if (dbg) {
                dbg.print = function(s, bitMessage) {
                    // if (bitsMessage != Messages.LOG) printf(s);
                    printf(s);
                };
            }
            kbd = Component.getComponentByType("Keyboard");
        }
    } catch(err) {
        printf("%s\n", err.message);
    }
    return machine;
}

/**
 * doCommand(sCmd)
 *
 * @param {string} sCmd
 * @returns {*}
 */
function doCommand(sCmd)
{
    let result = false;
    let aTokens = sCmd.split(' ');

    switch(aTokens[0]) {
    case "cwd":
        result = process.cwd();
        break;
    case "load":
        result = loadMachine(aTokens[1]);
        break;
    case "quit":
        process.exit();
        result = true;
        break;
    default:
        if (sCmd) {
            try {
                if (dbg && !dbg.doCommands(sCmd, true)) {
                    result = eval('(' + sCmd + ')');
                }
            } catch(err) {
                printf("%s\n", err.message);
            }
        }
        break;
    }
    sCmdPrev = sCmd;
    return result;
}

loadModules(machines['pcx86']['factory'], machines['pcx86']['modules']);
