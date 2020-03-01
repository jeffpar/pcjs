#!/usr/bin/env node
/**
 * @fileoverview Tool for converting bin file to JSON
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
var Defines = require("../../../modules/shared/lib/defines");
var Str = require("../../../modules/shared/lib/strlib");

/**
 * processFile(sFileIn, sFileOut, wordSize, valueSize, littleEndian)
 *
 * @param {string} sFileIn
 * @param {string|undefined} sFileOut
 * @param {number} wordSize (must be <= 32; informational only, since we assume the input data is already padded)
 * @param {number} valueSize (this is the output size; only 8, 16, or 32 are supported)
 * @param {boolean} [littleEndian]
 */
function processFile(sFileIn, sFileOut, wordSize, valueSize, littleEndian = true) {
    try {
        let fQuoteProps = true;
        let bufIn = fs.readFileSync(sFileIn);
        let bytesPerValue = valueSize >> 3;
        let valueTotal = bufIn.length / bytesPerValue;
        let valuesPerLine = (valueSize < 16? 32 : (valueSize > 16? 8 : valueSize));
        let sJSON = '{\n  class: "ROM",\n  wordSize: ' + wordSize + ',\n  valueSize: ' + valueSize + ',\n  valueTotal: ' + valueTotal + ',\n';
        sJSON += '  littleEndian: ' + littleEndian + ',\n  file: "' + Str.getBaseName(sFileIn) + '",\n  reference: "",\n';
        sJSON += '  values: [\n';
        if (fQuoteProps) {
            sJSON = sJSON.replace(/([a-z]+):/gi, '"$1":');
        }
        let sValues = "", sLine = "", nLine = 0;
        for (let ib = 0; ib < bufIn.length;) {
            let w = 0;
            for (let i = 0; i < bytesPerValue && ib < bufIn.length; i++) {
                w |= (bufIn[ib++] << (i << 3));
            }
            if (nLine == valuesPerLine) {
                if (sValues) sValues += ',\n';
                sValues += '    ' + sLine;
                sLine = "";
                nLine = 0;
            }
            if (sLine) sLine += ',';
            sLine += w;
            nLine++;
        }
        if (sLine) {
            if (sValues) sValues += ',\n';
            sValues += '    ' + sLine;
        }
        if (sValues) {
            sJSON += sValues + '\n  ]\n}\n';
        }
        if (sFileOut) {
            fs.writeFileSync(sFileOut, sJSON);
        } else {
            console.log(sJSON.replace(/^/gm, "        "));
        }
    }
    catch (err) {
        console.log(err.message);
    }
}

if (process.argv.length <= 2) {
    console.log("usage: node bin2json.js [input filename] [output filename]");
    process.exit();
}

processFile(process.argv[2], process.argv[3], 13, 16, true);
