#!/usr/bin/env node
/**
 * @fileoverview Tool for converting 16-bit big-endian binaries to 16-bit little-endian
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
        let bufIn = fs.readFileSync(sFileIn);
        let nWords = bufIn.length >> 1;
        console.log("outputting " + nWords + " 16-bit words (little-endian)...");
        let nb = nWords << 1;
        let bufOut = Buffer.alloc(nb);
        for (let i = 0; i < nb; i += 2) {
            bufOut[i] = bufIn[i+1];  bufOut[i+1] = bufIn[i];
        }
        fs.writeFileSync(sFileOut, bufOut);
    }
    catch (err) {
        console.log(err.message);
    }
}

if (process.argv.length <= 2) {
    console.log("usage: node be2le.js [input filename] [output filename]");
    process.exit();
}

processFile(process.argv[2], process.argv[3]);
