#!/usr/bin/env node
/**
 * @fileoverview Node command-line diskettes.json generation tool
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs from "fs";
import glob from "glob";
import mkdirp from "mkdirp";
import os from "os";
import path from "path";
import xml2js from "xml2js";
import PCJSLib from "../modules/pcjslib.js";
import { printf, sprintf } from "../../machines/modules/v2/printf.js";

let [argc, argv] = PCJSLib.getArgs();
let idAttrs = '@';
let moduleDir, rootDir, rootRelative = "../..";

let remappings = {
    "/apps": "/app",
    "/apps/ibm/exploring": "/demo/ibm/exploring",
    "/apps/ibm/fland": "/demo/ibm/ega",
    "/apps/ibm/topview": "/env/ibm/topview",
    "/apps/lotus/123/1as": "/app/lotus/123/1aa",
    "/cpm": "/sys/cpm",
    "/diags": "/diag",
    "/dos": "/sys/dos",
    "/os2": "/sys/os2",
    "/personal": "/sw/personal",
    "/roms": "/dev/rom",
    "/shareware": "/sw",
    "/shareware/pcdiskmag": "/sw/pcdm",
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
    "/tools/softlogic": "/env/softlogic",
    "/tools/other/desqview": "/env/quarterdeck/desqview",
    "/tools/other/qemm386": "/env/quarterdeck/qemm386",
    "/tools/other/omniview": "/env/other/omniview",
    "/unix": "/sys/unix",
    "/windows": "/sys/windows"
};

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
        // try {
        //     let buf = fs.readFileSync(srcPath);
        //     mkdirp.sync(path.dirname(dstPath));
        //     fs.writeFileSync(dstPath, buf);
        //     return true;
        // } catch(err) {
        //     printf("copy error: %s\n", err.message);
        // }
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
 * getFileSize(sFile)
 *
 * @param {string} sFile
 * @returns {number} (-1 if file not found)
 */
function getFileSize(sFile)
{
    let size;
    try {
        let stats = fs.statSync(sFile);
        size = stats.size;
    } catch(err) {}
    return size || -1;
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
                if (item['@photo']) {
                    let srcImage = srcPath.replace(".json", '.' + item['@photo']);
                    let dstImage = dstPath.replace(".json", '.' + item['@photo']);
                    fileCopy(srcImage, dstImage);
                }
                if (i == 0) {
                    srcPath = path.dirname(srcPath.replace("/disks-demo/", "/disks/")) + "/index.md";
                    let permalink = path.dirname(paths[1].replace(/\/diskettes\//, "/software/")) + "/";
                    dstPath = rootRelative + permalink + "index.md";
                    if (!fileExists(srcPath)) {
                        printf("warning: no index.md at %s\n", srcPath);
                    }
                    else if (!fileExists(dstPath)) {
                        printf("mv %s %s\n", srcPath, dstPath);
                        let s = fs.readFileSync(srcPath, {encoding: "utf8"});
                        s = s.replace(/\npermalink: ([^\n]*)\n/, "\npermalink: " + permalink + "\nredirect_from: $1\n");
                        s = s.replace(/\n(\s*config:\s*)\/devices\/pcx86\/machine\//, "\n$1/machines/pcx86/");
                        s = s.replace(/gallery-(begin|image|end)\.html/g, "gallery/$1.html");
                        s = s.replace(/\{\{ site\.demo-disks\.baseurl \}\}.*?([^/]*\.)(jpg|jpeg|png)/g, "{{ site.software.diskettes.server }}" + path.dirname(paths[1].replace("/diskettes/", "/")) + "/$1$2");
                        // if (!fileExists(dstPath)) mkdirp.sync(path.dirname(dstPath));
                        // fs.writeFileSync(dstPath, s);
                    }
                }
                delete item['@copy'];
                nCopied++;
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
 * getDiskDB(info)
 *
 * If we're parsing a ".UPP" file, then we'll return a DB object containing "DISKnnnn" properties, where
 * each "DISKnnnn" will contain a 'diskSummary' property with an array of lines containing that disk's raw information.
 *
 * @param {Object} info
 * @returns {Object|null}
 */
function getDiskDB(info)
{
    let diskDB = null;
    let appendLine = function(lines, line) {
        if (line) {
            lines.push(line);
            return;
        }
        if (lines.length && lines[lines.length - 1]) {
            lines.push(line);
        }
    };
    let trimLines = function(lines) {
        if (lines.length && !lines[lines.length - 1].length) {
            lines.pop();
        }
    };
    for (let volume in info) {
        try {
            let sFile = path.join("/Volumes", volume, info[volume]);
            let text = fs.readFileSync(sFile, {encoding: "ascii"});
            let ext = path.parse(sFile).ext;
            if (ext == ".UPP") {
                diskDB = {};
                let prevDisk = "";
                let lines = text.split("\r\n");
                for (let line of lines) {
                    if (!line) continue;
                    let matchLine = line.match(/^([0-9][0-9][0-9][0-9]) ?(.*)$/);
                    if (matchLine) {
                        let disk = "DISK" + matchLine[1];
                        if (!diskDB[disk]) diskDB[disk] = {diskSummary: []};
                        let data = diskDB[disk];
                        line = matchLine[2].trim();
                        let matchField = line.match(/(DISK-NUMBER|DISK-TITLE|PC-SIG VERSION|PROGRAM|AUTHOR VERSION): ?(.*)/);
                        if (matchField) {
                            let prop = "";
                            let value = matchField[2].trim();
                            switch(matchField[1]) {
                            case "DISK-NUMBER":
                                prop = 'diskIndex';
                                break;
                            case "DISK-TITLE":
                                prop = 'diskTitle';
                                break;
                            case "PC-SIG VERSION":
                                prop = 'diskVersion';
                                break;
                            case "PROGRAM":
                                prop = 'diskProgram';
                                break;
                            case "AUTHOR VERSION":
                                prop = 'authorVersion';
                                break;
                            default:
                                break;
                            }
                            if (prop) {
                                if (!data[prop]) {
                                    data[prop] = value;
                                } else {
                                    data[prop] += " / " + value;
                                }
                                /*
                                 * If this field appeared in the middle of a disk's summary, then emit a blank line.
                                 */
                                if (data.diskSummary.length) {
                                    appendLine(data.diskSummary, "");
                                }
                                continue;
                            }
                        }
                        if (prevDisk && disk != prevDisk) {
                            trimLines(diskDB[prevDisk].diskSummary);
                        }
                        appendLine(data.diskSummary, line);
                        prevDisk = disk;
                    }
                }
                if (prevDisk) {
                    trimLines(diskDB[prevDisk].diskSummary);
                }
            }
        } catch(err) {}
    }
    return diskDB;
}

/**
 * processCollection(sCollection, argv)
 *
 * @param {string} sCollection
 * @param {Object} argv
 */
function processCollection(sCollection, argv)
{
    let diskettesFile = path.join(rootDir, "disks", sCollection, "pcx86", sCollection == "pcsigdisks"? "diskettes-annotated.json" : "diskettes.json");
    printf("reading %s...\n", diskettesFile.slice(rootDir.length));
    let diskettes = JSON.parse(fs.readFileSync(diskettesFile, {encoding: "utf8"}));
    let processObjects = function(obj, curPath, defTitle = "") {
        let disks = obj['@media'];
        let title = obj['@title'] || defTitle;
        if (disks) {
            for (let disk of disks) {
                let diskInfo = disk['@diskInfo'];
                let diskTitle = diskInfo && diskInfo['diskTitle'];
                if (diskTitle) title += " - " + diskTitle;
                title = title.replace(/"/g, '&quot;');
                printf("  - [%s](%s)\n", title, curPath + "/");
            }
            return;
        }
        let props = Object.keys(obj);
        for (let prop of props) {
            if (typeof obj[prop] != "object") continue;
            let objPath = prop[0] == "@"? curPath : path.join(curPath, prop);
            processObjects(obj[prop], objPath, title);
        }
    };
    processObjects(diskettes, "/software/pcx86");
}

/**
 * processFolders(sDir, argv)
 *
 * @param {string} sDir
 * @param {Object} argv
 * @returns {Object}
 */
function processFolders(sDir, argv)
{
    let i = 0, dirServer = "";
    let dirParts = sDir.split(path.sep);
    if (!dirParts[i].length) i++;
    dirServer += dirParts[i++];
    if (dirServer == "disks") dirServer += path.sep + dirParts[i++];
    let diskettesFile = path.join(rootDir, dirServer, "pcx86", "diskettes.json");

    let diskettesUpdated = false;
    printf("reading %s...\n", diskettesFile.slice(rootDir.length));
    let diskettes = JSON.parse(fs.readFileSync(diskettesFile, {encoding: "utf8"}));

    if (sDir.indexOf("pcx86") < 0) sDir = path.join(sDir, "pcx86", "**");

    let diskettesPath, verifyJSON = false, trimJSON = false;
    if (argv['folders'] == "json") {
        verifyJSON = true;
        if (argv['trim']) trimJSON = true;
        diskettesPath = path.join(rootDir, sDir, "*.json");
    } else {
        diskettesPath = path.join(rootDir, sDir, "archive", "*.{IMG,ZIP,img,zip}");
    }
    let prefixDir = diskettesPath.slice(0, diskettesPath.indexOf("pcx86") + 6);

    printf("scanning %s...\n", diskettesPath.slice(rootDir.length));
    let asFiles = glob.sync(diskettesPath);

    /*
     * Make sure that every IMG file located directly underneath an "archive" folder is represented in the JSON file.
     */
    asFiles.forEach((imgFile) => {
        let imgPath = imgFile.slice(prefixDir.length);

        if (typeof argv['filter'] == "string" && imgPath.indexOf(argv['filter']) < 0) return;

        let sExt = "", sExtOrig = "";
        let iExt = imgPath.lastIndexOf(".");
        if (iExt == 0) {
            return;
        }
        if (iExt > 0) {
            sExt = (sExtOrig = imgPath.slice(iExt)).toLowerCase();
        }
        if (asFiles.indexOf(imgFile + ".img") >= 0) {
            return;     // ignore presumed folder names that match existing ".img" files
        }
        if (sExt == ".jpg" || sExt == ".jpeg" || sExt == ".png" || sExt == ".pdf") {
            return;
        }
        if (sExt == ".md" || sExt == ".txt" || sExt == ".xml" || sExt == ".sh" || sExt == ".hex" || sExt == ".bad") {
            return;
        }
        let imgParts = imgPath.split(path.sep);
        if (!verifyJSON && imgParts[imgParts.length-2] != "archive") {
            return;
        }
        if (imgParts[imgParts.length-1].indexOf('_') == 0) {
            return;
        }
        if (imgParts[imgParts.length-1] == "kryoflux" || imgPath == "diskettes.json" || imgPath == "diskettesDetail.json") {
            return;
        }

        /*
         * Here's an example:
         *
         *      util/other/pctools/1.03/archive/PCTOOLS103.img
         *
         * So we look for a ['@media'] array at ['util']['other']['pctools']['@versions']['1.03']....
         */
        printf("processing %s...\n", imgPath);

        let formatType;
        if (imgFile.indexOf(".img") > 0) {
            let sizeFile = getFileSize(imgFile);
            if (sizeFile > 0) {
                sizeFile = (sizeFile / 1024)|0;
                formatType = "PC" + sizeFile + "K";
            }
        }

        let i, diskDB;
        let lastObj, lastPart;
        let diskObj = diskettes;
        let title = "", jsonName = "";
        let media, mediaName, archiveType, photoType;

        for (i = 0; i < imgParts.length; i++) {
            if (imgParts[i] != "archive" && !imgParts[i].endsWith(".json")) {
                let obj = diskObj[imgParts[i]];
                if (!obj) {
                    let versions = diskObj['@versions'];
                    if (versions) {
                        obj = versions[imgParts[i]] || versions[''];
                        if (!obj) {
                            obj = versions[imgParts[i] + '/' + imgParts[i+1]];
                            if (obj) i++;
                        }
                    } else {
                        obj = diskObj[imgParts[i] + '/' + imgParts[i+1]];
                        if (obj) i++;
                    }
                }
                diskObj = obj;
                if (diskObj) {
                    if (diskObj['@title']) title = diskObj['@title'];
                    if (diskObj['@diskDB']) {
                        diskDB = getDiskDB(diskObj['@diskDB']);
                    }
                }
            }
            else {
                /*
                 * At this point, we need to look through the current disk object's '@media' array for a mediaItem
                 * object whose '@diskette' contains the JSON version of the final imgPart (or whose '@archive' matches
                 * the final imgPart).
                 */
                media = diskObj['@media'];
                if (!media) {
                    media = diskObj['@versions'];
                    if (media) {
                        media = media[''] || media['disks'];
                        if (media) {
                            if (media['@title']) title = media['@title'];
                            media = media['@media'];
                        }
                    }
                }
                diskObj = null;
                if (media) {
                    if (!imgParts[i].endsWith(".json")) {
                        mediaName = imgParts[++i];
                    } else {
                        mediaName = imgParts[i].slice(0, -5);
                    }
                    jsonName = mediaName;
                    let photoName = mediaName;
                    iExt = jsonName.lastIndexOf('.');
                    if (iExt < 0) {
                        jsonName += ".json";
                        photoName += ".jpg";
                        if (!verifyJSON) archiveType = "folder";
                    } else {
                        mediaName = mediaName.slice(0, iExt);
                        photoName = mediaName + ".jpg";
                        jsonName = mediaName + ".json";
                        if (sExt != ".img") {
                            archiveType = sExt;
                        }
                    }
                    for (let m = 0; m < media.length; m++) {
                        if (media[m]['@diskette'] == jsonName) {
                            diskObj = media[m];
                            break;
                        }
                        if (media[m]['@archive'] == imgParts[i]) {
                            diskObj = media[m];
                            jsonName = diskObj['@diskette'];
                            photoName = jsonName.replace(".json", ".jpg");
                            break;
                        }
                    }
                    if (diskObj) {
                        if (formatType && diskObj['@format'] != formatType) {
                            printf("warning: @format should be %s\n", formatType);
                            if (formatType) {
                                diskObj['@format'] = formatType;
                            } else {
                                delete diskObj['@format'];
                            }
                            diskettesUpdated = true;
                        }

                        photoType = "jpg";
                        let photoFile = imgFile.replace("/archive/", "/").replace(imgParts[i], photoName);
                        if (!fileExists(photoFile)) {
                            let photoFile = imgFile.replace(imgParts[i], photoName);
                            if (!fileExists(photoFile)) {
                                photoType = "png";
                                photoFile = photoFile.replace(".jpg", '.' + photoType);
                                if (!fileExists(photoFile)) {
                                    photoType = undefined;
                                }
                            }
                            if (photoType) {
                                printf("warning: photo exists in archive folder but not public folder\n");
                            }
                        }

                        if (diskObj['@photo'] != photoType) {
                            printf("warning: @photo should be %s\n", photoType);
                            if (photoType) {
                                diskObj['@photo'] = photoType;
                            } else {
                                delete diskObj['@photo'];
                            }
                            diskettesUpdated = true;
                        }

                        if (archiveType) {
                            if (!diskObj['@archive']) {
                                diskObj['@archive'] = archiveType;
                                printf("warning: @archive should be set to '%s'\n", diskObj['@archive'], archiveType);
                                diskettesUpdated = true;
                            } else if (diskObj['@archive'] != archiveType) {
                                printf("warning: @archive '%s' should possibly be '%s' instead\n", diskObj['@archive'], archiveType);
                            }
                        }

                        if (verifyJSON /* && !diskObj['@fileList'] */) {
                            let json = JSON.parse(fs.readFileSync(imgFile, {encoding: "utf8"}));
                            if (json && json.fileTable) {
                                let sFileList = "";
                                for (let f = 0; f < json.fileTable.length; f++) {
                                    if (sFileList) sFileList += '|';
                                    sFileList += json.fileTable[f].path;
                                }
                                diskObj['@fileList'] = sFileList;
                                diskettesUpdated = true;
                            }
                        }

                        if (trimJSON) {
                            let diskInfo = diskObj['@diskInfo'];
                            if (diskInfo) {
                                let diskTitle = diskInfo['diskTitle'];
                                if (diskTitle) {
                                    diskObj['@diskTitle'] = diskTitle;
                                }
                                let summary = "";
                                let diskSummary = diskInfo['diskSummary'];
                                if (diskSummary) {
                                    for (let line of diskSummary) {
                                        if (!line) break;
                                        if (summary) summary += ' ';
                                        summary += line;
                                    }
                                }
                                if (summary) {
                                    diskObj['@diskSummary'] = summary;
                                }
                                delete diskObj['@diskInfo'];
                                diskettesUpdated = true;
                            }
                        }
                        else {
                            if (diskDB && diskDB[mediaName]) {
                                diskObj['@diskInfo'] = diskDB[mediaName];
                                diskettesUpdated = true;
                            }
                        }
                    }
                }
            }
            if (!diskObj) break;
            lastObj = diskObj;
            lastPart = i;
        }
        if (!diskObj) {
            /*
             * Add a new entry...
             */
            let groupName = imgParts[0].toUpperCase();
            let i = imgPath.indexOf('-');
            if (i >= 0) {
                groupName = imgPath.slice(0, i).toUpperCase();
            }
            if (media) {
                if (!title || title == groupName) {
                    title = groupName + ' ' + mediaName;
                } else {
                    let matchDigits = mediaName.match(/([0-9]+)$/);
                    if (matchDigits) {
                        let j = title.indexOf("Disks");
                        if (j >= 0) {
                            title = title.slice(0, j) + "Disk";
                        }
                        title += " #" + (+matchDigits[1]);
                    }
                }
                let diskette = {
                    '@title': title,
                    '@diskette': jsonName
                };
                if (formatType) {
                    diskette['@format'] = formatType;
                }
                if (photoType) {
                    diskette['@photo'] = photoType;
                }
                if (archiveType) {
                    diskette['@archive'] = archiveType;
                }
                media.push(diskette);
                diskettesUpdated = true;
                printf("warning: added diskette %s\n", jsonName);
            } else {
                let itemName = imgParts[lastPart+1];
                let disketteUpdated = false;
                if (lastObj && imgParts[lastPart+2] == "archive") {
                    let versions = lastObj['@versions'];
                    if (versions) {
                        let matchDigits = itemName.match(/([0-9]+)$/);
                        if (matchDigits) {
                            title += " Disk #" + +matchDigits[1];
                        }
                        versions[itemName] = {
                            '@title': title,
                            '@media': [
                                {'@diskette': imgParts[lastPart+3].replace(sExtOrig, ".json")}
                            ]
                        };
                        if (sExt != ".img") {
                            versions[itemName]['@media'][0]['@archive'] = sExt;
                        }
                        disketteUpdated = true;
                    }
                }
                if (disketteUpdated) {
                    diskettesUpdated = true;
                    printf("warning: added item %s\n", itemName);
                } else {
                    printf("\tfailed to find %s in diskettes.json\n", imgPath);
                }
            }
        }
    });
    if (diskettesUpdated) {
        if (!argv['overwrite']) {
            printf("use --overwrite to update %s\n", diskettesFile.slice(rootDir.length));
        } else {
            printf("updating %s...\n", diskettesFile.slice(rootDir.length));
            fs.writeFileSync(diskettesFile, JSON.stringify(diskettes, null, 2) + "\n");
        }
    }
}

/**
 * processManifests(sDir, output, fDebug)
 *
 * @param {string} sDir
 * @param {boolean|string} output
 * @param {boolean} [fDebug] (true if --debug is specified on the command-line)
 * @returns {Object}
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
        // if (sFile.indexOf("/archive") >= 0 || sFile.indexOf("/private") >= 0 || sFile.indexOf("/unlisted") >= 0 || sFile.indexOf("/pcsig08") >= 0) continue;
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
                let versionID = xml.manifest.version? xml.manifest.version[0] : (versionFolder || "");
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
                            let pathDisk = disk[idAttrs].href.replace("/disks-private", "/private");
                            item['@diskette'] = path.basename(pathDisk);
                            let pathParts = pathDisk.split('/');
                            let j = sDir.indexOf('/' + pathParts[1]);
                            if (j >= 0) pathDisk = sDir.substring(0, j) + pathDisk;
                            if (!fs.existsSync(pathDisk)) printf("error: diskette missing: %s\n", pathDisk);
                            if (fs.existsSync(pathDisk.replace(".json", s = ".jpg")) || fs.existsSync(pathDisk.replace(".json", s = ".png"))) item['@photo'] = s.slice(1);
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
                                    let sFileXML = rootRelative + attrs[attr];
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

if (argc < 2) {
    printf("usage: node diskettes.js [directory] [options]\n");
} else {
    let argv = argv;
    let argv0 = argv[0].split(' ');
    moduleDir = path.dirname(argv0[0]);
    rootDir = path.join(moduleDir, rootRelative);
    let sDir = argv[1].replace(/^~/, os.homedir());
    let output = argv['output'];
    let fDebug = argv['debug'];
    /*
     * The use of "manifest.xml" files to describe collections of diskettes and their contents was an artifact of PCjs v1
     * (https://github.com/jeffpar/pcjs.v1)
     *
     * Here's an example:
     * https://github.com/jeffpar/old-demo-disks/blob/4af827d8f2ba957939bb81a6ceda3946f31287c7/pcx86/apps/ibm/exploring/manifest.xml
     *
     * I'm still a fan of XML files, but PCjs v2 was built with the realization that XML files have become "second-class
     * citizens" when compared to JSON files (in spite of JSON's more primitive and artificially restrictive format) so I
     * began the migration from XML to JSON.  XML files are still being used in a few areas (eg, "legacy" machine definition
     * files, where the amount of conversion work outweighs any benefit), but they are no longer used for diskette manifests.
     *
     * NOTE: Until recently, there was still a caveat with respect to XML diskette collections: /machines/pcx86/ibm/fdc/pcsig08.xml.
     * However, that's simply because I hadn't finished cleaning up the XML file and adding references to the new JSON files.
     * Go to https://github.com/jeffpar/pcjs/blob/e804442f1df7912e32f3c6d1f668149bb5412394/machines/pcx86/fdc/pcsig08.xml to
     * see what it looked like prior to conversion.
     *
     * This tool was originally created to assist with the migration from multiple "manifest.xml" files to centralized
     * "diskettes.json" files, and to create corresponding "index.md" files in the "/software" folder of the PCjs v2 repository.
     * Since that was largely a one-time migration, you now have to specify the "--manifests" option if you really want to
     * run that code again.
     *
     * Now the primary purpose of this tool is to scan folders for diskettes that have not yet been added to a collection's
     * "diskettes.json".
     */
    if (argv['manifests']) {
        let diskettes = processManifests(sDir, output, fDebug);
        if (processFiles(sDir, diskettes)) {
            let json = sprintf("%2j\n", diskettes);
            if (typeof output == "string") {
                fs.writeFileSync(output, json);
            } else {
                printf(json);
            }
        }
    }
    else if (argv['folders']) {
        /*
         * "--folders" was originally intended to look for .IMG and .ZIP files that might be missing from a collection;
         * however, you can also use "--folders=json" to look at JSON diskettes that have already been added to the collection,
         * and then do things like extract their fileInfo table and add it to the collection's "diskettes.json" file.
         *
         * Use "--trim" along with "--folders=json" to trim @diskInfo objects.
         */
        processFolders(sDir, argv);
    }
    else if (typeof argv['collection'] == "string") {
        processCollection(argv['collection'], argv);
    }
    else {
        printf("nothing to do\n");
    }
}
