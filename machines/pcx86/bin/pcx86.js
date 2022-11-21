#!/usr/bin/env node
/**
 * @fileoverview Implements the PCx86 command-line interface
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2022 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

"use strict";

var path = require("path");
var fs = require("fs");
var repl = require("repl");
var Defines = require("../../shared/lib/defines");
var Str = require("../../shared/lib/strlib");
var Proc = require("../../shared/lib/proclib");

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
    var machines = require(lib + "../../../machines/machines.json");
    var scriptsPCx86 = /** @type {Array.<string>} */ (machines['pcx86'].scripts);
} catch(err) {
    console.log(err.message);
}

/*
 * We will build an array of components whose names will match the component names
 * used in a JSON machine definition file; eg:
 *
 *  [
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
var dbg;
var aComponents = [];
var asComponentsIgnore = ["panel", "embed", "save"];

/*
 * A few of the components are subclasses of other classes (eg, "cpux86" is a subclass
 * of "cpu").  In those situations, we "hoist" the subclass constructor into the
 * corresponding superclass, because it is the name of the superclass that we rely on during
 * machine initialization.
 */
var aSubClasses = {
    "pcx86/lib/cpux86": "pcx86/lib/cpu",
    "pcx86/lib/debugger": "shared/lib/debugger"
};

/**
 * loadComponents(asFiles)
 *
 * @param {Array.<string>} asFiles
 */
function loadComponents(asFiles)
{
    for (let i = 0; i < asFiles.length; i++) {
        let sFile = asFiles[i];
        if (Str.getExtension(sFile) != "js") continue;
        let sName = Str.getBaseName(sFile, true);
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
                    };      // jshint ignore:line
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
    for (let i = 0; i < aComponents.length; i++) {
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
    let component = null;

    if (!Component) {
        Component = getComponentByName("component");
    }
    if (Component) {
        component = Component.getComponentByType(sType);
    }
    return component;
}

/**
 * loadMachine(sFile)
 *
 * @param {string} sFile
 * @return {Object} representing the machine whose component objects have been loaded into aComponents
 */
function loadMachine(sFile)
{
    if (fDebug) console.log('loadMachine("' + sFile + '")');

    /*
     * Clear any/all saved objects from any previous machine
     */
    let i, j;
    Component = dbg = null;
    for (i = 0; i < aComponents.length; i++) {
        aComponents[i].objects = [];
    }

    let machine;
    try {
        /*
         * Since our JSON files may contain comments, hex values, and/or other tokens deemed unacceptable
         * by the JSON Overlords, we can't use require() to load it, as we're able to do with "package.json".
         * Also note that require() assumes the same path as that of the requiring file, whereas fs.readFileSync()
         * assumes the path reported by process.cwd().
         *
         * TODO: I've since removed the comments from my sample "ibm5150.json" file, so we could try to reinstate
         * this code; however, there are still hex constants, which I find *much* preferable to the decimal equivalents.
         * JSON's restrictions continue to irritate me.
         *
         *      let machine = require(lib + "../bin/" +sFile);
         */
        let sMachine = /** @type {string} */ (fs.readFileSync(sFile, {encoding: "utf8"}));
        sMachine = '(' + sMachine + ')';
        if (fDebug) console.log(sMachine);
        machine = eval(sMachine);       // jshint ignore:line
        if (machine) {
            /*
             * Since we have a machine object, we now mimic the initialization sequence that occurs in
             * the browser, by walking the list of PCx86 components we loaded above and looking for matches.
             */
            let idMachine = "";

            /*
             * 'machine' is a pseudo-component that is only used to define an ID for the entire machine;
             * if it exists, then that ID is prepended to every component ID, just as our XSLT code would
             * do for a machine XML file.  This relieves the JSON file from having to manually prepend
             * a machine ID to every component ID itself.
             *
             * This doesn't mean I anticipate a Node environment running multiple machines, as we do in
             * a browser; it only means that I'm trying to make both environments operate similarly.
             */
            if (machine['machine']) {
                idMachine = machine['machine']['id'];
            }

            for (i = 0; i < aComponents.length; i++) {

                let component = aComponents[i];
                let parms = machine[component.name];
                /*
                 * If parms is undefined, it means there is no component with that name defined in the
                 * machine object (NOT that the component has no parms), and therefore we should skip it.
                 */
                if (parms === undefined) continue;
                /*
                 * If parms is an Array, then we must create an object for each parms element; and yes,
                 * I'm relying on the fact that none of my parm objects use a "length" property, as a quick
                 * and dirty way of differentiating objects from arrays.
                 */
                let aParms = parms.length !== undefined? parms : [parms];
                for (j = 0; j < aParms.length; j++) {

                    let obj;
                    let parmsObj = aParms[j];
                    if (idMachine) parmsObj['id'] = idMachine + '.' + parmsObj['id'];

                    if (fDebug) {
                        console.log("creating " + component.name + "...");
                        console.log(parmsObj);
                    }

                    if (component.name == "cpu") {
                        parmsObj['autoStart'] = false;
                    }

                    try {
                        obj = new component.Create(parmsObj);
                    } catch(err) {
                        console.log("error creating " + component.name + ": " + err.message);
                        continue;
                    }

                    console.log(obj['id'] + " object created");
                    component.objects.push(obj);
                    if (obj.type == "Debugger") dbg = obj;
                }
            }
            /*
             * Return the original machine object only in DEBUG mode
             */
            if (!fDebug) machine = true;
        }
    } catch(err) {
        console.log(err.message);
    }
    return machine;
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
                console.log("doCommand(" + sCmd + "): " + dbg);
                if (dbg && !dbg.doCommands(sCmd, true)) {
                    sCmd = '(' + sCmd + ')';
                    result = eval(sCmd);        // jshint ignore:line
                }
            } catch(err) {
                console.log(err.message);
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

if (scriptsPCx86) {
    loadComponents(scriptsPCx86);
}

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
