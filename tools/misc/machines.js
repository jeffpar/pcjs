#!/usr/bin/env node
/**
 * @fileoverview Node command-line machine extraction tool
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs from "fs";
import glob from "glob";
import path from "path";
import xml2js from "xml2js";
import PCJSLib from "../modules/pcjslib.js";
import { printf, sprintf } from "../../machines/modules/v2/printf.js";

let [argc, argv] = PCJSLib.getArgs();
let idAttrs = '@';
let sRootDir = "../..";

/**
 * @typedef {Object} Machine
 * @property {string} title
 * @property {string} id
 * @property {string} category
 * @property {string} config
 * @property {string} directory
 *
 * Additional properties will depend on what appears in a given document's YFM (YAML Front Matter).
 */

/**
 * processLaunch(aMachines, fDebug)
 *
 * @param {Array.<Machine>} aMachines
 * @param {boolean} [fDebug] (true if --debug is specified on the command-line)
 */
function processLaunch(aMachines, fDebug)
{
    let launch = {};
    launch.version = "0.1.0";
    launch.configurations = [];
    let aTitles = {}, aDirectories = {};
    for (let i = 0; i < aMachines.length; i++) {
        let machine = aMachines[i];
        /*
         * We're letting this slide because there are a variety of pages (eg, machine "array" demos)
         * that contain multiple machines; such pages need only one launch entry.
         */
        if (aDirectories[machine.directory]) {
            // printf('warning: duplicate machine directory "%s"\n', machine.directory);
            continue;
        }
        aDirectories[machine.directory] = machine;
        if (aTitles[machine.title]) {
            printf('warning: duplicate machine title "%s"\n', machine.title);
            printf('current:  %s\n', machine.directory);
            printf('original: %s\n\n', aTitles[machine.title].directory);
            continue;
        }
        aTitles[machine.title] = machine;
        let entry = {};
        entry.name = machine.title;
        if (machine.category) entry.name = machine.category + ": " + entry.name;
        entry.type = "chrome";
        entry.request = "launch";
        entry.url = "http://pcjs:8088" + machine.directory;
        entry.webRoot = '$' + "{workspaceFolder}";
        launch.configurations.push(entry);
    }
    launch.configurations.sort(function compare(a,b) {
        let fixName = function(s) {
            return s.toLowerCase().replace(/^([a-z]+:) (a|an|the) (.*)$/, "$1 $3");
        };
        let s1 = fixName(a.name);
        let s2 = fixName(b.name);
        return s1 < s2? -1 : s1 > s2? 1 : 0;
    });
    printf("%2j\n", launch);
}

/**
 * processMachines(sDir)
 *
 * @param {string} sDir
 */
function processMachines(sDir)
{
    let asFiles = glob.sync(path.join(sDir, "**", "machine.xml"));
    for (let i = 0; i < asFiles.length; i++) {
        let sFile = asFiles[i];
        if (sFile.indexOf('/debugger') >= 0) {
            let sMachine;
            sFile = sFile.replace("/debugger", "");
            try {
                sMachine = fs.readFileSync(sFile, {encoding: "utf8"});
            } catch(err) {
                printf("error: %s\n", err.message);
                continue;
            }
            let matchMachine = sMachine.match(/<machine[^>]*>/);
            if (!matchMachine) {
                printf("error: unable to find <machine> element in %s\n", sFile);
                continue;
            }
            if (sMachine.indexOf("debugger=") < 0) {
                sMachine = sMachine.replace(matchMachine[0], matchMachine[0].replace('>', ' debugger="available">'));
                printf("updating debugger availability in %s\n", sFile);
                fs.writeFileSync(sFile, sMachine);
            }
        }
    }
}

/**
 * processPages(sDir, fLaunch, fDebug)
 *
 * @param {string} sDir
 * @param {boolean} [fLaunch] (true if --launch is specified on the command-line)
 * @param {boolean} [fDebug] (true if --debug is specified on the command-line)
 */
function processPages(sDir, fLaunch, fDebug)
{
    let aMachines = [];
    let asFiles = glob.sync(path.join(sDir, "**", "index.md"));
    for (let i = 0; i < asFiles.length; i++) {
        let sFile = asFiles[i], sMarkdown;
        if (sFile.indexOf("/archive") >= 0 || sFile.indexOf("/private") >= 0 || sFile.indexOf("/unlisted") >= 0) continue;
        try {
            sMarkdown = fs.readFileSync(sFile, {encoding: "utf8"});
        } catch(err) {
            printf("error: %s\n", err.message);
            return;
        }

        let sDir = path.dirname(sFile);
        let sParent = ".." + path.sep;
        while (sDir.indexOf(sParent) == 0) sDir = sDir.substr(sParent.length);
        let j = sDir.indexOf(path.sep);
        let sCategory = j > 0? sDir.charAt(0).toUpperCase() + sDir.substring(1, j) : "";
        sDir = path.sep + sDir + path.sep;

        if (fDebug) printf("opened %s\n", sFile);
        /*
         * Check the file for YAML Front Matter (ie, a header at the top of the file delineated by "---" lines)
         * that includes both a "title" property and a "machines" section.
         */
        let matchYFM = sMarkdown.match(/^---[\s\S]*?\ntitle:\s*(["']|)(.*?)\1\n[\s\S]*?machines:([\s\S]*?\n)\S/);
        if (matchYFM) {
            let sTitle = matchYFM[2].replace(/&amp;/g, '&');
            let asMachines = matchYFM[3].split("\n  - ");
            for (let sMachine of asMachines) {
                if (!sMachine) continue;
                /** @type {Machine} */
                let machine = {};
                machine.title = sTitle;
                machine.directory = sDir;
                machine.category = sCategory;
                let aProps = sMachine.split("\n    ");
                processYAML(machine, aProps, 0, "");
                if (!machine.id) continue;
                /*
                 * When no "config" property is provided, a "machine.xml" in the same directory is implied.
                 */
                if (!machine.config) machine.config = path.join(sDir, "machine.xml");
                if (fDebug) printf("%2j\n", machine);
                aMachines.push(machine);
            }
        }
    }
    if (fLaunch) {
        processLaunch(aMachines, fDebug);
        return;
    }
    processXML(aMachines, "machines.json", fDebug);
}

/**
 * processXML(aMachines, sNameCSV, fDebug)
 *
 * @param {Array.<Machine>} aMachines
 * @param {string} sNameCSV
 * @param {boolean} [fDebug] (true if --debug is specified on the command-line)
 */
function processXML(aMachines, sNameCSV, fDebug)
{
    let cXML = 0, streamCSV;
    try {
        streamCSV = fs.createWriteStream(sNameCSV);
    } catch(err) {
        printf("error: %s\n", err.message);
        return;
    }
    let aConfigs = [];
    let aMachineRefs = [];
    for (let i = 0; i < aMachines.length; i++) {
        let machine = aMachines[i];
        let sFile = sRootDir + machine.config;
        if (sFile.indexOf(".xml") > 0 && aConfigs.indexOf(sFile) < 0) {
            aConfigs.push(sFile);
            aMachineRefs.push(i);
        }
    }
    for (let i = 0; i < aConfigs.length; i++) {
        let sFile = aConfigs[i];
        let xml = {_resolving: 0};
        readXML(xml, 'machine', sFile, null, 0, function(err) {
            ++cXML;
            if (!err) {
                if (fDebug) printf("XML config %d processed\n", cXML);
                streamCSV.write(sprintf("%s%2j\n", cXML > 1? ",\n" : "", xml));
            } else {
                printf("error: %s\n", err.message);
                printf("  reference: %s%s%s\n", sRootDir, aMachines[aMachineRefs[i]].directory, "index.md");
            }
            if (cXML == aConfigs.length) {
                streamCSV.end();
            }
        }, fDebug);
    }
    streamCSV.on('finish', function() {
        printf("total configurations processed: %d\n", cXML);
    });
}

/**
 * processYAML(obj, aProps, iProp, sIndent)
 *
 * @param {Object} obj (the object to update)
 * @param {Array.<string>} aProps (array of property strings)
 * @param {number} iProp (index within aProps to process)
 * @param {string} sIndent (some quantity of spaces, initially none)
 * @returns {number} (updated iProp)
 */
function processYAML(obj, aProps, iProp, sIndent)
{
    let re = new RegExp("^" + sIndent + "([^ :]*):\\s*(.*)");
    while (iProp < aProps.length) {
        let sProp = aProps[iProp];
        let prop = re.exec(sProp);
        if (!prop) break;
        iProp++;
        if (!prop[2]) {
            obj[prop[1]] = {};
            iProp = processYAML(obj[prop[1]], aProps, iProp, sIndent + "  ");
        } else {
            obj[prop[1]] = prop[2];
        }
    }
    return iProp;
}

/**
 * readXML(xml, sNode, sFile, aTags, iTag, done, fDebug)
 *
 * @param {Object} xml
 * @param {string} sNode
 * @param {string} sFile
 * @param {Array|null} aTags
 * @param {number} iTag
 * @param {function(Error)} done
 * @param {boolean} [fDebug]
 * @returns {boolean}
 */
function readXML(xml, sNode, sFile, aTags, iTag, done, fDebug)
{
    let fLoading = false;
    try {
        xml._resolving++;
        if (fDebug) printf("loading %s...\n", sFile);
        let sXML = fs.readFileSync(sFile, {encoding: "utf8"});
        let parser = new xml2js.Parser({attrkey: idAttrs});
        parser.parseString(sXML, function(err, xmlNode) {
            if (!aTags) {
                xml[sNode] = xmlNode[sNode];
            } else {
                aTags[iTag] = xmlNode[sNode];
            }
            if (err) {
                done(err);
                return;
            }
            if (xmlNode && xmlNode[sNode]) {
                for (let sTag in xmlNode[sNode]) {
                    let aTagsXML = xmlNode[sNode][sTag];
                    for (let iTagXML = 0; iTagXML < aTagsXML.length; iTagXML++) {
                        let tag = aTagsXML[iTagXML];
                        let attrs = tag[idAttrs];
                        if (attrs) {
                            for (let attr in attrs) {
                                if (attr == "ref") {
                                    let sFileXML = sRootDir + attrs[attr];
                                    readXML(xml, sTag, sFileXML, aTagsXML, iTagXML, done, fDebug);
                                }
                            }
                        }
                    }
                }
            }
            if (!--xml._resolving) {
                delete xml._resolving;
                done();
            }
        });
        fLoading = true;
    } catch(err) {
        done(err);
    }
    return fLoading;
}

if (argc < 2) {
    printf("usage: node machines.js [directory]\n");
} else {
    processMachines(argv[1]);
    // processPages(argv[1], argv['launch'], argv['debug']);
}
