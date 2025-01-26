#!/usr/bin/env node
/**
 * @fileoverview Tool for converting bin file to JSON
 * @author <a href="mailto:Jeff@pcjs.org">Jeff Parsons</a>
 * @copyright © 2012-2025 Jeff Parsons
 * @suppress {missingProperties}
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs from "fs";
import StrLib from "../../../modules/v2/strlib.js";

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
        sJSON += '  littleEndian: ' + littleEndian + ',\n  file: "' + StrLib.getBaseName(sFileIn) + '",\n  reference: "",\n';
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
