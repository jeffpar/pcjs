#!/usr/bin/env node
/**
 * @fileoverview Node command-line link validation tool
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2020 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

"use strict";

let fs = require("fs");
let glob = require("glob");
let os = require("os");
let path = require("path");
let StdIO = require("../../machines/lib/stdio");
let stdio = new StdIO();
let proclib = require("../../machines/shared/lib/proclib");
let args = proclib.getArgs();

let sRootDir = "../..";

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
 * parseDiskettes(library, propPath)
 *
 * See /machines/pcx86/lib/fdc.js for the same basic function; the difference here is that we're validating the existence of each diskette.
 *
 * @param {Object} library
 * @param {string} propPath
 */
function parseDiskettes(library, propPath = "/pcx86")
{
    for (let category in library) {
        let group = library[category];
        let products = group['@products'];
        if (products) {
            parseDiskettes(products, propPath + '/' + category);
            continue;
        }
        let versions = group['@versions'];
        if (versions) {
            for (let version in versions) {
                let release = versions[version];
                let media = release['@media'];
                if (!media) continue;
                for (let i = 0; i < media.length; i++) {
                    let item = media[i];
                    let name = item['@title'];
                    if (!name) {
                        name = release['@title'];
                        if (!name) {
                            name = group['@title'];
                            if (version) name += ' ' + version;
                        }
                        if (media.length > 1) {
                            name += " (Disk " + (i + 1) + ")";
                        }
                    }
                    let sPath = propPath + '/' + category + '/' + version + '/' + item['@diskette'] + '.json';
                    let sFilePath = "../../../pcjs-diskettes/" + sPath;
                    if (!fileExists(sFilePath)) {
                        printf("warning: missing diskette %s\n", sPath);
                    }
                }
            }
            continue;
        }
        if (category[0] == '@') continue;
        parseDiskettes(group, propPath + '/' + category);
    }
}

/**
 * processFiles(sDir, fDebug)
 *
 * @param {string} sDir
 * @param {boolean} [fDebug] (true if --debug is specified on the command-line)
 */
function processFiles(sDir, fDebug)
{
    let sDiskettes = path.join(sDir, "/configs/pcx86/diskettes.json");
    if (fileExists(sDiskettes)) {
        parseDiskettes(JSON.parse(fs.readFileSync(sDiskettes, {encoding: "utf8"})));
    }
    let asFiles = glob.sync(path.join(sDir, "**", "*.md"));
    for (let i = 0; i < asFiles.length; i++) {
        let aKeys = [];
        let sFile = asFiles[i];
        if (sFile.indexOf("/archive") >= 0 || sFile.indexOf("/private") >= 0 || sFile.indexOf("/node_modules") >= 0) continue;
        let sFileName = path.basename(sFile);
        if (sFileName == "index.md") continue;
        let sFilePath = sFile.replace(sDir, "");
        let sFileDir = path.dirname(sFilePath);
        if (sFileDir != "/") sFileDir += "/";
        let sText = fs.readFileSync(sFile, {encoding: "utf8"});
        let match = sText.match(/^permalink: (.*)$/m);
        if (match) {
            let sPermaLink = sFileDir;
            let matchBlog = sFilePath.match(/^\/_posts\/(?:[0-9]*\/|)([0-9]+)-([0-9]+)-([0-9]+)-.*/);
            if (matchBlog) {
                sPermaLink = "/blog/" + matchBlog[1] + "/" + matchBlog[2] + "/" + matchBlog[3] + "/";
            }
            if (sPermaLink != "/" && match[1] != sPermaLink) {
                printf("warning: %s permalink (%s) does not match path (%s)\n", sFilePath, match[1], sPermaLink);
            }
        } else {
            printf("warning: %s missing permalink\n", sFilePath);
        }
    }
}

if (args.argc < 2) {
    printf("usage: node links.js [directory] [options]\n");
} else {
    let argv = args.argv;
    let sDir = argv[1].replace(/^~/, os.homedir());
    let fDebug = argv['debug'];
    processFiles(sDir, fDebug);
}
