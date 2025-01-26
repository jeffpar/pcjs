#!/usr/bin/env node
/**
 * @fileoverview Tool for converting 16-column data to 17-column data
 * @author <a href="mailto:Jeff@pcjs.org">Jeff Parsons</a>
 * @copyright © 2012-2025 Jeff Parsons
 * @suppress {missingProperties}
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs from "fs";

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
        let cWordsPerLine = 0;
        aWords.forEach((word) => {
            if (cWordsPerLine) {
                sOutput += ' ';
            }
            sOutput += word;
            if (++cWordsPerLine == 17) {
                sOutput += '\n';
                cWordsPerLine = 0;
            }
        });
        fs.writeFileSync(sFileOut, sOutput);
    }
    catch (err) {
        console.log(err.message);
    }
}

if (process.argv.length <= 2) {
    console.log("usage: node 16to17.js [input filename] [output filename]");
    process.exit();
}

processFile(process.argv[2], process.argv[3]);
