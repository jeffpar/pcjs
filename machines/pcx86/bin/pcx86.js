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
import repl from "repl";
import filelib from "../../modules/v2/filelib.js";
import proclib from "../../modules/v2/proclib.js";

//
// The following list of imports should be a strict subset of the scripts listed in machines.json for 'pcx86'.
//
import "../../modules/v1/format.js";
import "../../modules/v1/databuffer.js";
import "../../modules/v1/messages.js";
import strlib from "../../modules/v2/strlib.js";
import weblib from "../../modules/v2/weblib.js";
import Component from "../../modules/v2/component.js";
import "../../modules/v2/jsonlib.js";
import "../modules/v2/defines.js";
import "../modules/v2/messages.js";
import "../modules/v2/x86.js";
import "../modules/v3/charset.js";
import "../modules/v2/interrupts.js";
import "../modules/v2/bus.js";
import "../modules/v2/memory.js";
import "../modules/v2/cpu.js";
import "../modules/v2/cpux86.js";
import "../modules/v2/fpux86.js";
import "../modules/v2/segx86.js";
import "../modules/v2/x86func.js";
import "../modules/v2/x86help.js";
import "../modules/v2/x86mods.js";
import "../modules/v2/x86ops.js";
import "../modules/v2/x86op0f.js";
import "../modules/v2/chipset.js";
import "../modules/v2/rom.js";
import "../modules/v2/ram.js";
import "../modules/v2/keyboard.js";
import "../modules/v2/video.js";
import "../modules/v2/parallel.js";
import "../modules/v2/serial.js";
import "../modules/v2/testctl.js";
import "../modules/v2/testmon.js";
import "../modules/v2/mouse.js";
import "../modules/v2/disk.js";
import "../modules/v2/fdc.js";
import "../modules/v2/hdc.js";
import "../../modules/v2/debugger.js";
import "../modules/v2/debugger.js";
import "../modules/v2/computer.js";
import { embedPCx86 } from "../../modules/v2/embed.js";

let args = proclib.getArgs();
let argv = args.argv;

let dbg;
let sCmdPrev = "";
let fConsole = (argv['console'] || false), fDebug = (argv['debug'] || false);

/**
 * printf(format, ...args)
 *
 * @param {string} format
 * @param {...} args
 */
function printf(format, ...args)
{
    process.stdout.write(strlib.sprintf(format, ...args));
}

/**
 * loadMachine(sFile)
 *
 * @param {string} sFile
 * @returns {Object} representing the machine whose component objects have been loaded into aComponents
 */
function loadMachine(sFile)
{
    if (fDebug) printf("loadMachine(\"%s\")\n", sFile);

    let machine;
    try {
        let sMachine = /** @type {string} */ (fs.readFileSync(sFile, {encoding: "utf8"}));
        if (fDebug) printf(sMachine);
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

            embedPCx86(idMachine, null, null, sMachine);
            weblib.doPageInit();

            dbg = Component.getComponentByType("Debugger");
            if (dbg) {
                dbg.log = dbg.print = function(s) {
                    printf(s);
                };
            }

            /*
             * Return the original machine object only in DEBUG mode
             */
            if (!fDebug) machine = true;
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
    if (!sCmd) {
        sCmd = sCmdPrev;
    } else {
        sCmdPrev = sCmd;
    }

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
                    sCmd = '(' + sCmd + ')';
                    result = eval(sCmd);
                }
            } catch(err) {
                printf("%s\n", err.message);
            }
        }
        break;
    }
    return result;
}

/**
 * onCommand(cmd, context, filename, callback)
 *
 * The Node docs (http://nodejs.org/api/repl.html) say that repl.start's "eval" option is:
 *
 *      a function that will be used to eval each given line; defaults to an async wrapper for eval()
 *
 * and it gives this example of such a function:
 *
 *      function eval(cmd, context, filename, callback) {
 *          callback(null, result);
 *      }
 *
 * but it defines NEITHER the parameters for the function NOR the parameters for the callback().
 *
 * It's pretty clear that "result" is expected to return whatever "eval()" would return for the expression
 * in "cmd" (which is always parenthesized in preparation for a call to "eval()"), but it's not clear what
 * the first callback() parameter (represented by null) is supposed to be.  Should we assume it's an Error
 * object, in case we want to report an error?
 *
 * @param {string} cmd
 * @param {Object} context
 * @param {string} filename
 * @param {function(Object|null, Object)} callback
 */
var onCommand = function (cmd, context, filename, callback)
{
    let result = false;
    /*
     * WARNING: After updating from Node v0.10.x to v0.11.x, the incoming expression in "cmd" is no longer
     * parenthesized, so I had to tweak the RegExp below.  But... WTF.  Do we not care what we break, folks?
     */
    let match = cmd.match(/^\(?\s*(.*?)\s*\)?$/);
    if (match) result = doCommand(match[1]);
    callback(null, result);
};

/*
 * Before falling into the REPL, process any command-line (--cmd) commands -- which should eventually include batch files.
 */
if (argv['cmd'] !== undefined) {
    var cmds = argv['cmd'];
    var aCmds = (typeof cmds == "string"? [cmds] : cmds);
    for (let i = 0; i < aCmds.length; i++) {
        doCommand(aCmds[i]);
    }
    sCmdPrev = "";
}

repl.start({
    prompt: "PCx86> ",
    input: process.stdin,
    output: process.stdout,
    eval: onCommand
});
