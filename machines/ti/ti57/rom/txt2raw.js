#!/usr/bin/env node
/**
 * @fileoverview Tool for converting hand-transcribed ti57rawbits.txt to ti57raw.bin
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
        let line = 1;
        let cBits = 0;
        let aBits = [];
        let sInput = fs.readFileSync(sFileIn, "binary");
        for (let i = 0; i < sInput.length; i++) {
            if (sInput[i] == '0') {
                aBits.push(0);
                cBits++;
            } else if (sInput[i] == '1') {
                aBits.push(1);
                cBits++;
            } else if (sInput[i] == '\n') {
                if (aBits.length % 8 != 0) {
                    throw new Error("unexpected number of bits on line " + line + ": " + cBits);
                }
                cBits = 0;
                line++;
            }
        }
        let nBytes = aBits.length >> 3;
        if (nBytes * 8 != aBits.length) {
            throw new Error("unexpected number of bits: " + aBits.length);
        }
        console.log("outputting " + nBytes + " bytes...");
        let bufOut = Buffer.alloc(nBytes);
        let iByte = 0, iBit = 0;
        while (iByte < nBytes) {
            let b = 0, n = 8;
            while (n--) {
                b <<= 1;
                b |= aBits[iBit++];
            }
            bufOut[iByte++] = b;
        }
        fs.writeFileSync(sFileOut, bufOut);
    }
    catch (err) {
        console.log(err.message);
    }
}

if (process.argv.length <= 2) {
    console.log("usage: node txt2raw.js [input filename] [output filename]");
    process.exit();
}

processFile(process.argv[2], process.argv[3]);
