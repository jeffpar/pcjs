#!/usr/bin/env node
/**
 * @fileoverview Tool for converting text files to Markdown files
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs from "fs";
import CharSet from "../../machines/pcx86/modules/v2/charset.js";

/**
 * processFile(sInputFile, sOutputFile)
 *
 * @param {string} sInputFile
 * @param {string} [sOutputFile]
 */
function processFile(sInputFile, sOutputFile)
{
    try {
        let sNew = "";
        let sText = fs.readFileSync(sInputFile, "binary");
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
                if (/* chCode == 0x09 || */ chNew === undefined) {
                    throw new Error("line " + l + ", pos " + i + ": unrecognized character (" + chCode + ")");
                }
                sNewLine += chNew;
            }
            if (!sOutputFile) {
                console.log(sNewLine);
            } else {
                sNew += sNewLine + '\n';
            }
        }
        if (sOutputFile) {
            fs.writeFileSync(sOutputFile, sNew);
        }
    }
    catch(err) {
        console.log(err.message);
    }
}

if (process.argv.length <= 2) {
    console.log("usage: txt2md.js [input filename] [output filename]");
    process.exit();
}

processFile(process.argv[2], process.argv[3]);
