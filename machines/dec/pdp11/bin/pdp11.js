#!/usr/bin/env node
/**
 * @fileoverview Implements the PDP11 command-line interface
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import path from "path";
import fs from "fs";
import repl from "repl";
import xml2js from "xml2js";
import File from "../../../modules/v2/filelib.js";
import Proc from "../../../modules/v2/proclib.js";
import Str from "../../../modules/v2/strlib.js";

//
// The following list of imports should be a strict subset of the scripts listed in machines.json for 'pdp11'.
//
import "../../../modules/v1/format.js";
import "../../../modules/v1/messages.js";
import "../../../modules/v2/defines.js";
import "../../../modules/v2/diskapi.js";
import "../../../modules/v2/dumpapi.js";
import "../../../modules/v2/reportapi.js";
import "../../../modules/v2/userapi.js";
import "../../../modules/v2/keys.js";
import "../../../modules/v2/strlib.js";
import "../../../modules/v2/usrlib.js";
import "../../../modules/v2/weblib.js";
import "../../../modules/v2/component.js";
import "../modules/v2/defines.js";
import "../modules/v1/messages.js";
import "../modules/v2/panel.js";
import "../modules/v2/bus.js";
import "../modules/v2/device.js";
import "../modules/v2/memory.js";
import "../modules/v2/cpu.js";
import "../modules/v2/cpustate.js";
import "../modules/v2/cpuops.js";
import "../modules/v2/rom.js";
import "../modules/v2/ram.js";
import "../modules/v2/keyboard.js";
import "../modules/v2/serial.js";
import "../modules/v2/pc11.js";
import "../modules/v2/disk.js";
import "../modules/v2/drive.js";
import "../modules/v2/rk11.js";
import "../modules/v2/rl11.js";
import "../modules/v2/rx11.js";
import "../../../modules/v2/debugger.js";
import "../modules/v2/debugger.js";
import "../modules/v2/computer.js";
import "../../../modules/v2/state.js";
import "../../../modules/v2/embed.js";

var replServer = null;
var idAttrs = '@';
var args = Proc.getArgs();
var argv = args.argv;
var sCmdPrev = "";
var fConsole = (argv['console'] || false);
var fDebug = (argv['debug'] || false);

/*
 * We will build an array of components whose names will match the component names
 * used in a JSON machine definition file; eg:
 *
 *  [
 *      {name: "panel",
 *       Create: Panel,
 *       objects: []
 *      },
 *      {name: "chipset":
 *       Create: ChipSet,
 *       objects: []
 *      },
 *      ...
 *  ]
 *
 * Every component name comes from the component filename, minus the ".js" extension;
 * Create is the constructor returned by require().
 *
 * TODO: Update the list of ignored (ie, ignorable) components.
 */
var dbg, serial, fnSendData;

/**
 * initMachine(xml)
 *
 * @param {Object} xml
 */
function initMachine(xml)
{
    /*
     * Clear any/all saved objects from any previous machine
     */
    Component = dbg = null;
    for (var i = 0; i < aComponents.length; i++) {
        aComponents[i].objects = [];
    }

    var machine = xml['machine'];

    if (fDebug) {
        console.log(JSON.stringify(machine, null, 2));
    }

    var idMachine = machine[idAttrs] && machine[idAttrs]['id'] || "";

    for (var iComponent = 0; iComponent < aComponents.length; iComponent++) {

        var component = aComponents[iComponent], sDeviceName = component.name;

        var aDevices = machine[sDeviceName], iDevice;

        if (aDevices) {
            /*
             * When processing the 'device' component, if there is a 'default' device,
             * that's the only device we want to create at this point.
             */
            if (sDeviceName == 'device') {
                for (iDevice = 0; iDevice < aDevices.length; iDevice++) {
                    if (aDevices[iDevice][idAttrs] && aDevices[iDevice][idAttrs]['type'] == 'default') {
                        aDevices = aDevices.slice(iDevice, iDevice + 1);
                        break;
                    }
                }
            }
        }
        else {
            /*
             * When encountering an unrecognized component, it could be another type of device.
             */
            var aMachineDevices = machine['device'];
            if (aMachineDevices) {
                for (iDevice = 0; iDevice < aMachineDevices.length; iDevice++) {
                    if (aMachineDevices[iDevice][idAttrs] && aMachineDevices[iDevice][idAttrs]['type'] == sDeviceName) {
                        aDevices = aMachineDevices.slice(iDevice, iDevice + 1);
                        break;
                    }
                }
            }
        }

        if (!aDevices) continue;

        for (iDevice = 0; iDevice < aDevices.length; iDevice++) {

            var obj;
            var device = aDevices[iDevice];
            var parmsObj = device[idAttrs];

            if (idMachine) parmsObj['id'] = idMachine + '.' + parmsObj['id'];

            if (fDebug) {
                console.log("creating " + sDeviceName + "...");
                console.log(parmsObj);
            }

            if (sDeviceName == "cpu") {
                parmsObj['autoStart'] = true;
            }

            try {
                obj = new component.Create(parmsObj);
            } catch (err) {
                console.log("error creating " + sDeviceName + ": " + err.message);
                continue;
            }

            console.log(obj['type'] + " object created: " + obj['id']);
            component.objects.push(obj);

            if (obj.type == "DebuggerPDP11") {
                dbg = obj;
            }
            else if (obj.type == "SerialPort") {
                serial = obj;
                var exports = serial['exports'];
                if (exports) {
                    var fnSetConnection = exports['setConnection'];
                    if (fnSetConnection) {
                        if (fnSetConnection.call(serial, null, receiveData)) {
                            fnSendData = exports['receiveData'];
                        }
                    }
                }
            }
        }
    }
}

/**
 * loadMachine(sFile)
 *
 * @param {string} sFile
 * @returns {boolean}
 */
function loadMachine(sFile)
{
    if (fDebug) console.log('loadMachine("' + sFile + '")');
    var xml = {_resolving: 0};
    return readXML(xml, 'machine', sFile, null, 0, initMachine);
}

/**
 * readXML(xml, sNode, sFile, aTags, iTag, done)
 *
 * @param {Object} xml
 * @param {string} sNode
 * @param {string} sFile
 * @param {Array|null} aTags
 * @param {number} iTag
 * @param {function(Object)} done
 * @returns {boolean}
 */
function readXML(xml, sNode, sFile, aTags, iTag, done)
{
    var fLoading = false;
    try {
        xml._resolving++;
        var sXML = fs.readFileSync(sFile, {encoding: "utf8"});
        var parser = new xml2js.Parser({attrkey: idAttrs});
        parser.parseString(sXML, function(err, xmlNode) {
            if (!aTags) {
                xml[sNode] = xmlNode[sNode];
            } else {
                aTags[iTag] = xmlNode[sNode];
            }
            if (err) {
                console.log(err.message);
            }
            else if (xmlNode && xmlNode[sNode]) {
                for (var sTag in xmlNode[sNode]) {
                    var aTagsXML = xmlNode[sNode][sTag];
                    for (var iTagXML = 0; iTagXML < aTagsXML.length; iTagXML++) {
                        var tag = aTagsXML[iTagXML];
                        var attrs = tag[idAttrs];
                        if (attrs) {
                            for (var attr in attrs) {
                                if (attr == "ref") {
                                    var sFileXML = "../../.." + attrs[attr];
                                    readXML(xml, sTag, sFileXML, aTagsXML, iTagXML, done);
                                }
                            }
                        }
                    }
                }
                if (!--xml._resolving) done(xml);
            }
        });
        fLoading = true;
    } catch(err) {
        console.log(err.message);
    }
    return fLoading;
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

    var result = false;
    var aTokens = sCmd.split(' ');

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
                console.log(err.message);
            }
            if (sCmd == '?') {
                console.log(".exit    exit REPL and connect console to machine");
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
 * WARNING: After updating from Node v0.10.x to v0.11.x, the incoming expression in "cmd" is no longer
 * parenthesized, so I had to tweak the RegExp below.  WTF.
 *
 * @param {string} cmd
 * @param {Object} context
 * @param {string} filename
 * @param {function(Object|null, Object)} callback
 */
function onCommand(cmd, context, filename, callback)
{
    var result = false;
    var match = cmd.match(/^\(?\s*(.*?)\s*\)?$/);
    if (match) result = doCommand(match[1]);
    callback(null, result);
}

/**
 * receiveData(b)
 *
 * @param {number} b
 */
function receiveData(b)
{
    var s;
    if (b != Str.ASCII.CR && b != Str.ASCII.LF) {
        s = Str.ASCIICodeMap[b];
    }
    if (s) {
        s = '<' + s + '>';
    } else {
        s = String.fromCharCode(b);
    }
    process.stdout.write(s);
}

/**
 * sendData(b)
 *
 * @param {number} b
 */
function sendData(b)
{
    if (serial && fnSendData) {
        fnSendData.call(serial, b);
    }
}

/**
 * startInput()
 *
 * @returns {boolean}
 */
function startInput()
{
    var stdin = process.stdin;
    if (!stdin.setRawMode) return false;
    console.log("console connected to machine (ctrl-d to exit, ctrl-r for REPL prompt)");
    stdin.setRawMode(true);
    stdin.resume();
    stdin.on('data', function(buf){
        // if (buf[0] == 0x1b && (buf[1] == 0x72 || buf[1] == 0x78)) {
        if (buf[0] == 0x04 || buf[0] == 0x12) {
            stdin.removeAllListeners('data');
            stdin.setRawMode(false);
            stdin.pause();
            if (buf[0] == 0x04) {
                console.log("ctrl-d detected, exiting...");
                process.exit();
            } else if (buf[0] == 0x12) {
                console.log("ctrl-r detected, starting REPL...");
                startREPL();
            } else {
            }
            return;
        }
        sendData(buf[0]);
    });
    return true;
}

/**
 * startREPL()
 */
function startREPL()
{
    replServer = repl.start({
        prompt: "PDP11> ",
        input: process.stdin,
        output: process.stdout,
        eval: onCommand
    });
    replServer.on('exit', () => {
        startInput();
    });
}

/*
 * Before falling into the REPL, process any command-line (--cmd) commands -- which should eventually include batch files.
 */
if (argv['cmd'] !== undefined) {
    var cmds = argv['cmd'];
    var aCmds = (typeof cmds == "string"? [cmds] : cmds);
    for (var i = 0; i < aCmds.length; i++) {
        doCommand(aCmds[i]);
    }
    sCmdPrev = "";
}

startInput();
