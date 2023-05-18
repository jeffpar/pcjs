#!/usr/bin/env node
/**
 * @fileoverview Implements the PDP11 command-line interface
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

"use strict";

var path = require("path");
var fs = require("fs");
var repl = require("repl");
var xml2js = require("xml2js");
var Defines = require("../../shared/lib/defines");
var Str = require("../../shared/lib/strlib");
var Proc = require("../../shared/lib/proclib");

var replServer = null;
var idAttrs = '@';
var fConsole = false;
var fDebug = false;
var fGlobalsSet = false;
var args = Proc.getArgs();
var argv = args.argv;
var sCmdPrev = "";
if (argv['console'] !== undefined) fConsole = argv['console'];
if (argv['debug'] !== undefined) fDebug = argv['debug'];

var lib = path.join(path.dirname(fs.realpathSync(__filename)), "../lib/");

try {
    var machines = require(lib + "../../../_data/machines.json");
    var scriptsPDP11 = /** @type {Array.<string>} */ (machines['pdp11'].scripts);
} catch(err) {
    console.log(err.message);
}

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
var Component;
var dbg, serial, fnSendData;
var aComponents = [];
var asComponentsIgnore = ["embed", "save"];

/*
 * A few of the components are subclasses of other classes (eg, "cpustate" subclasses "cpu").
 * In those situations, we "hoist" the subclass constructor into the corresponding superclass,
 * because it is the name of the superclass that we rely on during machine initialization.
 */
var aSubClasses = {
    "pdp11/lib/cpustate": "pdp11/lib/cpu",
    "pdp11/lib/debugger": "shared/lib/debugger"
};

/**
 * loadComponents(asFiles)
 *
 * @param {Array.<string>} asFiles
 */
function loadComponents(asFiles)
{
    for (var i = 0; i < asFiles.length; i++) {
        var sFile = asFiles[i];
        if (Str.getExtension(sFile) != "js") continue;
        var sName = Str.getBaseName(sFile, true);
        if (asComponentsIgnore.indexOf(sName) >= 0) continue;
        if (fDebug) console.log(sFile);
        try {
            /*
             * We COULD load ("require") all the files on-demand, because it's only the browser initialization
             * sequence we want to mimic in loadMachine(), but this is simpler, and it also gives us direct references
             * to certain components we'll want to access later (eg, "component" in getComponentByType()).
             */
            let props = 0;
            let exports = require(lib + "../../../" + sFile);
            let afn = (typeof exports == "function"? [exports] : exports);
            for (let f in afn) {
                props++;
                let fn = afn[f];
                if (typeof fn != "function") continue;
                let sSuperClass = null;
                for (let s in aSubClasses) {
                    if (sFile.indexOf(s) >= 0) {
                        sSuperClass = aSubClasses[s];
                        break;
                    }
                }
                if (sSuperClass) {
                    for (let j = 0; j < aComponents.length; j++) {
                        if (aComponents[j].path.indexOf(sSuperClass) >= 0) {
                            if (fDebug) console.log("updating superclass " + aComponents[j].path + " with subclass " + sFile);
                            aComponents[j].Create = fn;
                            sName = null;
                            break;
                        }
                    }
                }
                if (sName == "component") {
                    fn.log = fn.println = function(s, type) {
                        console.log((type !== undefined? (type + ": ") : "") + (s || ""));
                    };
                }
                if (sName) {
                    aComponents.push({name: sName, path: sFile, Create: fn, objects: []});
                }
            }
            /*
             * The "defines.js" module that defines all PCjs globals (as opposed to machine-specific globals)
             * doesn't export anything, so exports is an empty object, hence props is zero.  However, that isn't
             * the ONLY module that doesn't export anything, so we also check for whether DEBUG has been set yet.
             */
            if (!props && !fGlobalsSet) {
                if (global.DEBUG !== undefined) {
                    global.DEBUG = fDebug;
                    global.APPVERSION = machines['shared']['version'];
                    fGlobalsSet = true;
                }
            }
        } catch(err) {
            console.log(err.message);
        }
    }
}

/**
 * getComponentByName(sName)
 *
 * @param sName
 * @return {*}
 */
function getComponentByName(sName)
{
    for (var i = 0; i < aComponents.length; i++) {
        if (aComponents[i].name == sName) {
            return aComponents[i].Create;
        }
    }
    return null;
}

/**
 * getComponentByType(sType)
 *
 * @param sType
 * @return {*}
 */
function getComponentByType(sType)
{
    var component = null;

    if (!Component) {
        Component = getComponentByName("component");
    }
    if (Component) {
        component = Component.getComponentByType(sType);
    }
    return component;
}

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
 * @return {boolean}
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
 * @return {boolean}
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
 * @return {*}
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
 * @return {boolean}
 */
function startInput()
{
    var stdin = process.stdin;
    if (!stdin.setRawMode) return false;
    console.log("console connected to machine (alt-r for REPL prompt, alt-x to exit)");
    stdin.setRawMode(true);
    stdin.resume();
    stdin.on('data', function(buf){
        if (buf[0] == 0x1b && (buf[1] == 0x72 || buf[1] == 0x78)) {
            stdin.removeAllListeners('data');
            stdin.setRawMode(false);
            stdin.pause();
            if (buf[1] == 0x72) {
                console.log("alt-r detected, starting REPL...");
                startREPL();
            } else {
                console.log("alt-x detected, exiting...");
                process.exit();
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

if (scriptsPDP11) {
    loadComponents(scriptsPDP11);
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
