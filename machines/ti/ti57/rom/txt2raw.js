#!/usr/bin/env node
/**
 * @fileoverview Tool for converting hand-transcribed ti57rawbits.txt to ti57raw.bin
 * @author <a href="mailto:Jeff@pcjs.org">Jeff Parsons</a>
 * @copyright © 2012-2020 Jeff Parsons
 * @suppress {missingProperties}
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * PCjs is free software: you can redistribute it and/or modify it under the terms of the
 * GNU General Public License as published by the Free Software Foundation, either version 3
 * of the License, or (at your option) any later version.
 *
 * PCjs is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
 * even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with PCjs.  If not,
 * see <http://www.gnu.org/licenses/gpl.html>.
 *
 * You are required to include the above copyright notice in every modified copy of this work
 * and to display that copyright notice when the software starts running; see COPYRIGHT in
 * <https://www.pcjs.org/modules/shared/lib/defines.js>.
 *
 * Some PCjs files also attempt to load external resource files, such as character-image files,
 * ROM files, and disk image files. Those external resource files are not considered part of PCjs
 * for purposes of the GNU General Public License, and the author does not claim any copyright
 * as to their contents.
 */

"use strict";

var fs = require("fs");

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
