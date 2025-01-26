#!/usr/bin/env node
/**
 * @fileoverview Tool for converting 17-column data to 16-column data
 * @author <a href="mailto:Jeff@pcjs.org">Jeff Parsons</a>
 * @copyright © 2012-2025 Jeff Parsons
 * @suppress {missingProperties}
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs from "fs";

/**
 * toHex(n, cch)
 *
 * Number.toString(16) will work, too, but it doesn't support fixed-length output.
 *
 * @param {number} n
 * @param {number} [cch] (default is 4 characters)
 * @returns {string}
 */
function toHex(n, cch = 4)
{
    let s = "";
    let ach = "0123456789abcdef";
    while (cch--) {
        s = ach[n & 0xf] + s;
        n >>= 4;
    }
    return s;
}

/**
 * processFile(sFileIn, sFileOut)
 *
 * @param {string} sFileIn
 * @param {string} sFileOut
 */
function processFile(sFileIn, sFileOut) {
    try {
        let sInput = fs.readFileSync(sFileIn, "binary");
        let aWords = sInput.match(/[0-9a-z]{4}/g);
        let sOutput = "";
        let cWordsPerLine = 0, cWordsTotal = 0;
        aWords.forEach((word) => {
            if (!cWordsPerLine) {
                sOutput += '\t' + toHex(cWordsTotal, 3);
            }
            sOutput += (cWordsPerLine == 8? " - " : "  ") + word;
            if (++cWordsPerLine == 16) {
                sOutput += '\n';
                cWordsPerLine = 0;
            }
            cWordsTotal++;
        });
        fs.writeFileSync(sFileOut, sOutput);
    }
    catch (err) {
        console.log(err.message);
    }
}

if (process.argv.length <= 2) {
    console.log("usage: node 17to16.js [input filename] [output filename]");
    process.exit();
}

processFile(process.argv[2], process.argv[3]);
