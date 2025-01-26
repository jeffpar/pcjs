#!/usr/bin/env node
/**
 * @fileoverview Node command-line link validation tool
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs from "fs";
import glob from "glob";
import os from "os";
import path from "path";
import PCJSLib from "../modules/pcjslib.js";
import { printf } from "../../machines/modules/v2/printf.js";

let [argc, argv] = PCJSLib.getArgs();
let sRootDir = "../..";
let remappings = {
    "/tests/pcx86/testmon": "/software/pcx86/test/testmon"
};

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
 * See /machines/modules/v2/jsonlib.js for the same basic function; the difference here is that we're validating the existence of each diskette.
 *
 * TODO: Can we use jsonlib.js instead?
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
                    let sPath = propPath + '/' + category + '/' + version + '/' + item['@diskette'];
                    let sFilePath = (sPath.indexOf("/pcx86/game/") < 0? "../pcjs-diskettes/" : "../pcjs-gamedisks/") + sPath;
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
 * processFiles(sDir, fDebug, fFix)
 *
 * @param {string} sDir
 * @param {boolean} [fDebug]
 * @param {boolean} [fFix]
 */
function processFiles(sDir, fDebug, fFix)
{
    let sDiskettes = path.join(sDir, "/machines/pcx86/software.json");
    if (fileExists(sDiskettes)) {
        parseDiskettes(JSON.parse(fs.readFileSync(sDiskettes, {encoding: "utf8"})));
    }
    let asFiles = glob.sync(path.join(sDir, "**", "*.md"));
    for (let i = 0; i < asFiles.length; i++) {
        let sFilePath = asFiles[i];
        if (sFilePath.indexOf("_posts") < 0 && sFilePath.indexOf("index.md") < 0) continue;
        let sFileName = path.basename(sFilePath);
        if (sFilePath.indexOf(sDir) == 0) sFilePath = sFilePath.substr(sDir.length);
        if (sFilePath[0] != "/") sFilePath = "/" + sFilePath;
        let sFileDir = path.dirname(sFilePath);
        if (sFileDir.indexOf("/archive") >= 0 || sFileDir.indexOf("/private") >= 0 || sFileDir.indexOf("/node_modules") >= 0) continue;
        sFilePath = "." + sFilePath;
        let sText = fs.readFileSync(asFiles[i], {encoding: "utf8"});
        /*
         * Fix #1: correct bad permalink entries
         */
        let match = sText.match(/^permalink:\s*(.*)$/m);
        if (match) {
            let sPermaLink = match[1];
            let sCorrectLink = sFileDir + (sFileDir != "/"? "/" : "");
            let matchBlog = sFilePath.match(/^\.?\/blog\/_posts\/(?:[0-9]*\/|)([0-9]+)-([0-9]+)-([0-9]+)-.*/);
            if (matchBlog) {
                sCorrectLink = "/blog/" + matchBlog[1] + "/" + matchBlog[2] + "/" + matchBlog[3] + "/";
            }
            if (sCorrectLink != "/" && sPermaLink != sCorrectLink) {
                printf("%s: permalink (%s) does not match correct link (%s)\n", sFilePath, sPermaLink, sCorrectLink);
                if (fFix) {
                    sText = sText.substr(0, match.index) + "permalink: " + sCorrectLink + sText.substr(match.index + match[0].length);
                    fs.writeFileSync(asFiles[i], sText);
                }
            }
        } else {
            printf("%s: missing permalink\n", sFilePath);
        }
        /*
         * Fix #2: remove redundant page titles
         */
        match = sText.match(/^title:\s*(.*)$/m);
        if (match) {
            let sTitle = match[1];
            let reTitle = new RegExp("\n" + sTitle.replace("(", "\\(").replace(")", "\\)") + "\n---+\n\n");
            let matchTitle = sText.match(reTitle);
            if (matchTitle) {
                printf("%s: redundant title: '%s'\n", sFilePath, sTitle);
                if (fFix) {
                    sText = sText.substr(0, matchTitle.index) + "\n" + sText.substr(matchTitle.index + matchTitle[0].length);
                    fs.writeFileSync(asFiles[i], sText);
                }
            }
        }
        /*
         * Fix #3: find and display extra redirect_from entries
         */
        let matchAll = sText.match(/^redirect_from:.*$/gm);
        if (matchAll && matchAll.length > 1) {
            match = sText.match(/\nredirect_from: *\n( +[^\n]*\n)*/);
            if (match) {
                printf("%s: old redirect_from: '%s'\n", sFilePath, match[0].replace(/\s+/g, ' '));
            }
        }
        /*
         * Fix #4: validate optional preview entries
         */
        match = sText.match(/^preview:\s*(.*)$/m);
        if (match) {
            let sFile = match[1];
            if (sFile.indexOf("http") == 0) {
                sFile = sFile.replace(/https?:\/\/(diskettes|gamedisks|miscdisks|harddisks)\.pcjs\.org/, "../pcjs-$1").replace(/https?:\/\/(cds[0-9]+)\.pcjs\.org/, "../pcjs-cds/pcjs-$1");
            }
            else if (sFile[0] == "/") {
                sFile = "." + sFile;
            } else {
                sFile = "." + sFileDir + "/" + sFile;
            }
            if (!fileExists(sFile)) {
                printf("%s: preview image not found: %s\n", sFilePath, sFile);
            }
        }
        /*
         * Fix #5: validate optional config entries
         */
        match = sText.match(/^(\s+config:\s*)(.*)$/m);
        if (match) {
            let sFile = match[2];
            if (sFile[0] == "/") {
                sFile = "." + sFile;
            } else {
                sFile = "." + sFileDir + "/" + sFile;
            }
            if (!fileExists(sFile)) {
                printf("%s: config not found: %s\n", sFilePath, sFile);
                if (fFix) {
                    let sCorrection = match[2].replace(/^\/devices\/pcx86\/machine/, "/machines/pcx86");
                    if (sCorrection != match[2]) {
                        printf("%s: replacing '%s' with '%s'\n", match[2], sCorrection);
                        sText = sText.substr(0, match.index) + match[1] + sCorrection + sText.substr(match.index + match[0].length);
                        fs.writeFileSync(asFiles[i], sText);
                    }
                }
            }
        }
        /*
         * Fix #6: look at all Markdown-style links and attempt to validate
         */
        let reLinks = /\[([^\]]*)\]\(([^)]*)\)/g;
        while ((match = reLinks.exec(sText))) {
            let sFile = null, sLink = match[2];
            if (sLink[0] == '?' || sLink[0] == '#' || sLink.indexOf("mailto:") >= 0) continue;

            let i = sLink.indexOf(' "');
            if (i > 0) sLink = sLink.substr(0, i);
            i = sLink.indexOf('?');
            if (i > 0) sLink = sLink.substr(0, i);
            i = sLink.indexOf('#');
            if (i > 0) sLink = sLink.substr(0, i);

            let sTargetFile = "index.md";
            if (sLink.indexOf("{{") == 0) {
                if (sLink.indexOf("site.github") >= 0 || sLink.indexOf("site.url") >= 0) continue;
                sFile = sLink.replace(/\{\{\s*site\.github\.pages\s*\}\}/, "..");
                sFile = sFile.replace(/\{\{\s*site\.software\.(diskettes|gamedisks|miscdisks|harddisks)\.server\s*\}\}/, "../pcjs-$1");
                sFile = sFile.replace(/\{\{\s*site\.archive\.(ms|kb)\.server\s*\}\}/, "../$1archive");
                sTargetFile = "README.md";
            }
            else if (sLink.indexOf("http") == 0) {
                sFile = sLink.replace(/https?:\/\/(diskettes|gamedisks|miscdisks|harddisks)\.pcjs\.org/, "../pcjs-$1").replace(/https?:\/\/(cds[0-9]+)\.pcjs\.org/, "../pcjs-cds/pcjs-$1");
                if (sFile.indexOf("http") == 0) continue;
            }
            else {
                let matchBlog = sLink.match(/^\/blog\/([0-9]+)\/([0-9]+)\/([0-9]+)\//);
                if (matchBlog) {
                    sFile = sLink.replace(matchBlog[0], "/blog/_posts/" + matchBlog[1] + "/" + matchBlog[1] + "-" + matchBlog[2] + "-" + matchBlog[3] + "-*");
                    continue;   // TODO: For now, we're just going to assume that blog URLs are OK
                }
                if (sLink[0] == "/") {
                    sFile = "." + sLink;
                } else {
                    sFile = "." + sFileDir + "/" + sLink;
                }
            }
            if (sFile.endsWith("/")) sFile += sTargetFile;
            if (!fileExists(sFile) && !fileExists(sFile.replace("/index.md", ".md"))) {
                printf("%s: link for '%s' not found: %s\n", sFilePath, match[1], sFile);
            }
        }
    }
}

if (argc < 2) {
    printf("usage: node links.js [directory] [options]\n");
} else {
    let sDir = argv[1].replace(/^~/, os.homedir());
    processFiles(sDir, argv['debug'], argv['fix']);
}
