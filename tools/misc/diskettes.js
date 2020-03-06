#!/usr/bin/env node
/**
 * @fileoverview Node command-line diskettes.json generation tool
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2020 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

"use strict";

let fs = require("fs");
let glob = require("glob");
let mkdirp = require("mkdirp");
let os = require("os");
let path = require("path");
let xml2js = require("xml2js");
let StdIO = require("../../machines/lib/stdio");
let stdio = new StdIO();
let proclib = require("../../machines/shared/lib/proclib");
let args = proclib.getArgs();

let idAttrs = '@';
let sRootDir = "../..";

let remappings = {
    "/apps": "/app",
    "/apps/ibm/exploring": "/demo/ibm/exploring",
    "/apps/ibm/fland": "/demo/ibm/ega",
    "/apps/ibm/topview": "/env/ibm/topview",
    "/cpm": "/sys/cpm",
    "/diags": "/diag",
    "/dos": "/sys/dos",
    "/os2": "/sys/os2",
    "/personal": "/sw/personal",
    "/roms": "/dev/rom",
    "/shareware": "/sw",
    "/tools/borland": "/lang/borland",
    "/tools/borland/sidekick": "/util/borland/sidekick",
    "/tools/borland/skplus": "/util/borland/skplus",
    "/tools/dresearch": "/lang/dresearch",
    "/tools/ibm": "/lang/ibm",
    "/tools/ibm/debug": "/util/ibm/debug",
    "/tools/logitech": "/lang/logitech",
    "/tools/microsoft": "/lang/microsoft",
    "/tools/microsoft/dos/mgr": "/env/microsoft/dosmgr",
    "/tools/microsoft/mouse": "/dev/mouse/microsoft",
    "/tools/microsoft/os2/sdk": "/sdk/os2/microsoft",
    "/tools/microsoft/windows/sdk": "/sdk/windows",
    "/tools/other": "/util",
    "/tools/omniview": "/env/other/omniview",
    "/tools/softlogic": "/env/softlogic",
    "/tools/other/desqview": "/env/quarterdeck/desqview",
    "/tools/other/qemm386": "/env/quarterdeck/qemm386",
    "/unix": "/sys/unix",
    "/windows": "/sys/windows"
};

/**
 * printf(format, ...args)
 *
 * @param {string} format
 * @param {...} args
 */
function printf(format, ...args)
{
    stdio.printf(format, ...args);
}

/**
 * fileCopy(srcPath, dstPath, overwrite)
 *
 * @param {string} srcPath
 * @param {string} dstPath
 * @param {boolean} [overwrite]
 * @returns {boolean}
 */
function fileCopy(srcPath, dstPath, overwrite)
{
    if (overwrite || !fileExists(dstPath)) {
        printf("cp %s %s\n", srcPath, dstPath);
        try {
            let buf = fs.readFileSync(srcPath);
            mkdirp.sync(path.dirname(dstPath));
            fs.writeFileSync(dstPath, buf);
            return true;
        } catch(err) {
            printf("copy error: %s\n", err.message);
        }
    }
    return false;
}

/**
 * fileExists(sFile)
 *
 * @param {string} sFile
 * @returns {string|null}
 */
function fileExists(sFile)
{
    try {
        if (fs.existsSync(sFile)) return sFile;
    } catch(err) {}
    return null;
}

/**
 * processFiles(sDir, diskettes)
 *
 * @param {string} sDir
 * @param {Object} diskettes
 * @returns {number} (number of files copied)
 */
function processFiles(sDir, diskettes)
{
    let nCopied = 0;
    let srcDir = sDir.replace(/^(.*\/pcx86).*$/, "$1");
    let processMedia = function(media) {
        for (let i = 0; i < media.length; i++) {
            let item = media[i];
            let cmd = item['@copy'];
            if (cmd) {
                let paths = cmd.split(" -> ");
                let srcPath = paths[0].replace(/^.*\/pcx86/, srcDir);
                let dstPath = paths[1].replace(/\/diskettes\//, "../../../pcjs-diskettes/");
                fileCopy(srcPath, dstPath);
                if (item['@image']) {
                    let srcImage = srcPath.replace(".json", "." + item['@image']);
                    let dstImage = dstPath.replace(".json", "." + item['@image']);
                    fileCopy(srcImage, dstImage);
                }
                if (i == 0) {
                    srcPath = path.dirname(srcPath.replace("/disks-demo/", "/disks/")) + "/README.md";
                    let permalink = path.dirname(paths[1].replace(/\/diskettes\//, "/software/")) + "/";
                    dstPath = "../.." + permalink + "README.md";
                    if (!fileExists(srcPath)) {
                        printf("warning: no README at %s\n", srcPath);
                    }
                    else if (!fileExists(dstPath)) {
                        printf("mv %s %s\n", srcPath, dstPath);
                        let s = fs.readFileSync(srcPath, {encoding: "utf8"});
                        s = s.replace(/\npermalink: ([^\n]*)\n/, "\npermalink: " + permalink + "\nredirect_from: $1\n");
                        s = s.replace(/\n\{% include machine\.html .*?%\}\n/g, "");
                        s = s.replace(/\{\{ site\.demo-disks\.baseurl \}\}.*?([^/]*\.)(jpg|jpeg|png)/g, "{{ site.software.diskettes.server }}" + path.dirname(paths[1].replace("/diskettes/", "/")) + "/$1$2");
                        fs.writeFileSync(dstPath, s);
                    }
                }
                delete item['@copy'];
            }
        }
    };
    let processObject = function(obj) {
        let media = obj['@media'];
        if (media) {
            processMedia(media);
            return;
        }
        for (let key in obj) {
            let child = obj[key];
            if (typeof child == "object") processObject(child);
        }
    };
    processObject(diskettes);
    return nCopied;
}

/**
 * processManifests(sDir, output, fDebug)
 *
 * @param {string} sDir
 * @param {boolean|string} output
 * @param {boolean} [fDebug] (true if --debug is specified on the command-line)
 * @return {Object}
 */
function processManifests(sDir, output, fDebug)
{
    let diskettes = {};
    if (typeof output == "string" && fileExists(output)) {
        return JSON.parse(fs.readFileSync(output, {encoding: "utf8"}));
    }
    let asFiles = glob.sync(path.join(sDir, "**", "manifest.xml"));
    for (let i = 0; i < asFiles.length; i++) {
        let aKeys = [];
        let sFile = asFiles[i];
        if (sFile.indexOf("/archive") >= 0 || sFile.indexOf("/private") >= 0 || sFile.indexOf("/unlisted") >= 0 || sFile.indexOf("/pcsig08") >= 0) continue;
        let sPath = sFile;
        let versionFolder = null;
        let j = sFile.indexOf("/pcx86");
        if (j >= 0) {
            sPath = sFile.substring(j+6);
            sPath = remapPath(sPath, fDebug);
            let k = sPath.indexOf("/manifest.xml");
            if (k >= 0) {
                sPath = sPath.substring(1, k);
                aKeys = sPath.split('/');
                if (aKeys[aKeys.length-1].indexOf('.') >= 0) {
                    versionFolder = aKeys.pop();
                }
            }
        }
        let xml = {_resolving: 0};
        readXML(xml, 'manifest', sFile, null, 0, function(err) {
            if (!err) {
                let obj = diskettes;
                let vendor = null, vendorKey = null;
                aKeys.forEach((key) => {
                    if (obj[key] == undefined) obj[key] = {"@title": ""};
                    vendor = obj;
                    obj = obj[key];
                });
                let vendorTitle = xml.manifest.company? xml.manifest.company[0] : xml.manifest.author? xml.manifest.author[0] : "";
                if (vendor && !vendor['@title'] && vendorTitle) vendor['@title'] = vendorTitle;
                if (!obj['@title']) obj['@title'] = xml.manifest.title[0];
                if (!obj['@versions']) obj['@versions'] = {};
                let versions = obj['@versions'];
                let versionID = xml.manifest.version? xml.manifest.version[0] : (versionFolder || "1.00");
                if (versions[versionID]) {
                    printf("warning: duplicate version ID (%s) for %s\n", versionID, sPath);
                } else {
                    let version = versions[versionID] = {};
                    let title = version['@title'] = xml.manifest.title[0] + (xml.manifest.version? " " + versionID : "");
                    let media = version['@media'] = [];
                    for (let d = 0; d < xml.manifest.disk.length; d++) {
                        let disk = xml.manifest.disk[d];
                        let item = media[d] = {};
                        item['@title'] = disk.name? disk.name[0] : title;
                        if (!disk[idAttrs].img) {
                            if (fDebug) printf("warning: missing 'img' attribute for disk '%s' in %s\n", disk[idAttrs].id, sFile);
                        }
                        if (disk[idAttrs].href) {
                            let s;
                            item['@diskette'] = path.basename(disk[idAttrs].href, ".json");
                            let pathDisk = disk[idAttrs].href;
                            let pathParts = pathDisk.split('/');
                            let j = sDir.indexOf("/" + pathParts[1] + "/");
                            if (j >= 0) pathDisk = sDir.substring(0, j) + pathDisk;
                            if (!fs.existsSync(pathDisk)) printf("error: diskette missing: %s\n", pathDisk);
                            if (fs.existsSync(pathDisk.replace(".json", s = ".jpg")) || fs.existsSync(pathDisk.replace(".json", s = ".png"))) item['@image'] = s.substr(1);
                        } else {
                            printf("error: missing 'href' attribute for disk '%s' in %s\n", disk[idAttrs].id, sFile);
                        }
                        item['@type'] = disk[idAttrs].size? "PC" + (+disk[idAttrs].size / 1024) + "K" : "unknown";
                        if (disk[idAttrs].href) {
                            item['@copy'] = disk[idAttrs].href + " -> /diskettes/pcx86/" + sPath + "/" + path.basename(disk[idAttrs].href);
                        }
                    }
                }
            } else {
                printf("error: %s\n", err.message);
            }
        }, fDebug);
    }
    if (output) {
        let json = stdio.sprintf("%2j\n", diskettes);
        if (typeof output == "string") {
            fs.writeFileSync(output, json);
        } else {
            printf(json);
        }
    }
    return diskettes;
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
 * @return {boolean}
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
            if (err) {
                done(err);
                return;
            }
            if (!aTags) {
                xml[sNode] = xmlNode[sNode];
            } else {
                aTags[iTag] = xmlNode[sNode];
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

/**
 * remapPath(sPath, fDebug)
 *
 * @param {string} sPath
 * @param {boolean} fDebug
 * @returns {string}
 */
function remapPath(sPath, fDebug)
{
    let cchMatch = 0;
    let keyMatch = null;
    let sNewPath = sPath;
    let aKeys = Object.keys(remappings);
    for (let i = 0; i < aKeys.length; i++) {
        let key = aKeys[i];
        if (sPath.indexOf(key) == 0) {
            if (cchMatch < key.length) {
                cchMatch = key.length;
                keyMatch = key;
            }
        }
    }
    if (keyMatch) {
        sNewPath = remappings[keyMatch] + sPath.substr(keyMatch.length);
        if (fDebug) printf("remapping %s -> %s\n", sPath, sNewPath);
    }
    return sNewPath;
}

if (args.argc < 2) {
    printf("usage: node diskettes.js [directory] [options]\n");
} else {
    let argv = args.argv;
    let sDir = argv[1].replace(/^~/, os.homedir());
    let diskettes = processManifests(sDir, argv['output'], argv['debug']);
    if (processFiles(sDir, diskettes)) {
        printf("%2j\n", diskettes);
    }
}
