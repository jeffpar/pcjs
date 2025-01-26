#!/usr/bin/env node
/**
 * @fileoverview Tool for converting dump of 32-bit floating-point numbers to 16-bit little-endian words
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
        let aWords = sInput.match(/[0-9a-z]{8}/g);
        console.log("outputting " + aWords.length + " words...");
        let bufOut = Buffer.alloc(aWords.length * 2);
        let bufNum = new ArrayBuffer(4);
        let i32View = new Int32Array(bufNum);
        let fp32View = new Float32Array(bufNum);
        for (let iByte = 0, iWord = 0; iWord < aWords.length; iWord++) {
            i32View[0] = Number.parseInt(aWords[iWord], 16);
            let w = Math.trunc(fp32View[0]);
            bufOut[iByte++] = w & 0xff;
            bufOut[iByte++] = w >> 8;
        }
        fs.writeFileSync(sFileOut, bufOut);
    }
    catch (err) {
        console.log(err.message);
    }
}

if (process.argv.length <= 2) {
    console.log("usage: node fp2le.js [input filename] [output filename]");
    process.exit();
}

processFile(process.argv[2], process.argv[3]);
