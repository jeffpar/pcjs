#!/usr/bin/env node
/**
 * @fileoverview Tool for converting 17-column data to 16-column data
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
 * toHex(n, cch)
 *
 * Number.toString(16) will work, too, but it doesn't support fixed-length output.
 *
 * @param {number} n
 * @param {number} [cch] (default is 4 characters)
 * @return {string}
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
