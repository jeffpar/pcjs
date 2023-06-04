#!/usr/bin/env node
/**
 * @fileoverview Implements the PCjs machine command-line interface
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs from "fs";
import path from "path";
import Messages from "../../machines/modules/v2/messages.js";
/*
 * We don't use the File class (filelib.js) here, but the simple act of loading it will make
 * readFileSync() visible to the WebLib class (weblib.js), which in turn will allow getResource()
 * to load any local files referenced by the machine's JSON file locally instead of remotely.
 */
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

let machines = JSON.parse(fs.readFileSync("../../machines/machines.json", "utf8"));

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
        if (data == "\x7f") {                       // implement DEL ourselves (since we're in "raw" mode)
            if (command.length) {
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
 * loadMachine(sFile)
 *
 * @param {string} sFile
 * @returns {string}
 */
function loadMachine(sFile)
{
    let result = "";
    if (fDebug) printf("loadMachine(\"%s\")\n", sFile);
    try {
        let sMachine = fs.readFileSync(sFile, "utf8");
        /*
         * Since our JSON files may contain comments, hex values, etc, use eval() instead of JSON.parse().
         */
        let machine = eval('(' + sMachine + ')');
        if (machine) {
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
        }
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

loadModules(machines[machineType]['factory'], machines[machineType]['modules']);
