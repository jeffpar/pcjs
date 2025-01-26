#!/usr/bin/env node
/**
 * @fileoverview Tool for extracting KB articles from MSPL text files
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs from "fs";
import mkdirp from "mkdirp";
import CharSet from "../../machines/pcx86/modules/v2/charset.js";
import { printf } from "../../machines/modules/v2/printf.js";

var aIDs = [];
var tmpDir = "tmp/";

/**
 * processFile(sFile)
 *
 * @param {string} sFile
 */
function processFile(sFile) {
    try {
        let sText = fs.readFileSync(sFile, "binary");
        let re = /([0-9]+)\. *([^\n]*)\s*Product Version\(s\): *([^\n]*)\s*Operating System: *([^\n]*)\s*Flags: *([^\n]*)\s*Last Modified: *([0-9A-Z-]*)\s*ArticleIdent: *(Q[0-9]+)\n/g;
        let match, aMatches = [];
        while ((match = re.exec(sText))) {
            /*
             * match[1]: article number
             * match[2]: title
             * match[3]: product version(s)
             * match[4]: operating system
             * match[5]: flags
             * match[6]: last modified
             * match[7]: article identifier
             */
            aMatches.push(match);
        }
        for (let i = 0; i < aMatches.length; i++) {
            match = aMatches[i];
            let iBody = match.index + match[0].length;
            let cchBody;
            if (i < aMatches.length - 1) cchBody = aMatches[i+1].index - iBody;
            let sBody = sText.substr(iBody, cchBody).trim();
            let id = "";
            if (sFile.indexOf("basknow") >= 0) {
                id = "mspl13_basic";
            } else if (sFile.indexOf("mscknl") >= 0) {
                id = "mspl13_c";
            } else if (sFile.indexOf("masmknwl") >= 0) {
                id = "mspl13_masm";
            }
            processText(match[7], match[2], id, "", match[3], match[4], match[5], match[6], sBody);
        }
    }
    catch (err) {
        console.log(err.message);
    }
}

/**
 * processText(sID, sTitle, sProductID, sProductName, sProductVersions, sOS, sFlags, sDateModified, sText)
 *
 * @param {string} sID
 * @param {string} sTitle
 * @param {string} sProductID
 * @param {string} sProductName
 * @param {string} sProductVersions
 * @param {string} sOS
 * @param {string} sFlags
 * @param {string} sDateModified
 * @param {string} sText
 */
function processText(sID, sTitle, sProductID, sProductName, sProductVersions, sOS, sFlags, sDateModified, sText)
{
    if (aIDs.indexOf(sID) >= 0) {
        printf("warning: duplicate ID: %s\n", sID);
        process.exit();
        return;
    }
    aIDs.push(sID);
    try {
        let sNew = "{% raw %}\n\n";
        sNew += "\tArticle: " + sID + "\n";
        sNew += "\tProduct(s): " + (sProductName || "See article") + "\n";
        sNew += "\tVersion(s): " + sProductVersions + "\n";
        sNew += "\tOperating System(s): " + sOS.replace(/\s+/g, " ").trim() + "\n";
        sNew += "\tKeyword(s): " + sFlags.replace(/\s+/g, " ").trim() + " | " + sProductID + "\n";
        sNew += "\tLast Modified: " + sDateModified + "\n\t\n";
        let aLines = sText.split(/(?:^|\r?\n) ?/);
        for (let l = 0; l < aLines.length;) {
            let sNewLine = "";
            let sLine = aLines[l++];
            for (let i = 0; i < sLine.length;) {
                let chCode = sLine.charCodeAt(i++);
                //
                // 0x7F was used as a hyperlinking character; we simply remove it for now.  Ditto for 0x1E.
                //
                if (chCode == 0x7F || chCode == 0x1E) continue;
                let chNew = CharSet.CP437[chCode];
                if (chCode == 0x09 || chNew === undefined) {
                    throw new Error("line " + l + ", pos " + i + ": unrecognized character (" + chCode + ")");
                }
                sNewLine += chNew;
            }
            sNew += '\t' + sNewLine + '\n';
        }
        sNew += "\n{% endraw %}\n";
        var sDir = tmpDir + "kb/0" + sID[1] + sID[2] + "/" + sID;
        sTitle = sTitle.replace(/&/g, "&amp;").replace(/\|/g, "&#124;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/\$/g, "&#36;").replace(/\*/g, "&#42;").replace(/\[/g, "&#91;").replace(/\\/g, "&#92;").replace(/]/g, "&#93;").replace(/__/g, "&#95;&#95;").replace(/{{/g, "{ {").replace(/}}/g, "} }");
        sNew = "---\nlayout: page\ntitle: \"" + sID + ": " + sTitle + "\"\npermalink: /" + sDir.replace(tmpDir, "") + "/\n---\n\n## " + sID + ": " + sTitle + "\n\n" + sNew;
        if (!fs.existsSync(sDir)) {
            mkdirp.sync(sDir);
        }
        var sFile = sDir + "/README.md";
        if (!fs.existsSync(sFile)) {
            fs.writeFileSync(sFile, sNew);
        } else {
            printf("warning: file already exists: %s\n", sFile);
        }
        /*
         * We also want to update listings by product ID...
         */
        var sNewDir = tmpDir + "id/" + sProductID;
        if (!fs.existsSync(sNewDir)) {
            mkdirp.sync(sNewDir);
        }
        var sNewFile = sNewDir + "/README.md";
        sNew = "- [" + sID + ": " + sTitle + "](/" + sDir.replace(tmpDir, "") + "/)\n";
        if (!fs.existsSync(sNewFile)) {
            sTitle = (sProductName || sProductID);
            let sHeading = "KB Articles for " + sTitle;
            if (sTitle == "mspl13_basic") {
                sTitle = "Microsoft Programmer's Library 1.3: BASIC";
                sHeading = "KB Articles from " + sTitle;
            }
            else if (sTitle == "mspl13_c") {
                sTitle = "Microsoft Programmer's Library 1.3: C";
                sHeading = "KB Articles from " + sTitle;
            }
            else if (sTitle == "mspl13_masm") {
                sTitle = "Microsoft Programmer's Library 1.3: MASM";
                sHeading = "KB Articles from " + sTitle;
            }
            sNew = "---\nlayout: page\ntitle: \"" + sTitle + "\"\npermalink: /" + sNewDir.replace(tmpDir, "") + "/\n---\n\n## " + sHeading + "\n\n" + sNew;
        }
        fs.appendFileSync(sNewFile, sNew);
    }
    catch(err) {
        console.log(err.message);
    }
}

if (process.argv.length <= 2) {
    console.log("usage: kbgen.js [input filename]");
    process.exit();
}

processFile(process.argv[2]);
