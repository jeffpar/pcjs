#!/usr/bin/env node
/**
 * @fileoverview Tool for converting "raw" TI-57 ROM data to 16-bit little-endian words
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
        let nWords = ((bufIn.length * 8) / 13);
        if (nWords != (nWords|0)) {
            throw new Error("unusual number of 13-bit words: " + nWords);
        }
        if (nWords > Math.pow(2, 11)) {
            throw new Error("excessive number of 13-bit words: " + nWords);
        }
        console.log("outputting " + nWords + " 16-bit words (little-endian)...");
        let nbOut = nWords * 2;
        let bufOut = Buffer.alloc(nbOut);
        for (let ibOut = 0, addr = 0; ibOut < nbOut; addr++) {
            /*
             * The 2K ROM uses 11-bit addresses, with 7 address lines (A0-A6) selecting the row (0-127),
             * where row 0 is the first row of raw data in the buffer, and the remaining 4 address lines
             * (A7-A10) selecting a column (ie, one of 16 columns from each of the 13 groups of 16 bits
             * along the selected row).
             */
            let iRow = addr & 0x7f;
            let iCol = (addr >> 7) & 0xf;
            let ibRow = iRow * 26;
            let wOut = 0;
            for (let iBit = 0; iBit < 13; iBit++) {
                /*
                 * Each row of raw data contains 13 16-bit groups, with the groups arranged such that the
                 * group for the least significant bit (iBit 0) of the desired 13-bit word is on the left
                 * (start of the row), and the group for the most significant bit (iBit 12) is on the right
                 * (end of the row).
                 *
                 * Whereas ibRow is the byte offset of the start of the current row, i is the offset of the
                 * first byte of the desired 16-bit group within the row.
                 */
                let i = ibRow + (iBit << 1);
                let wGroup = (bufIn[i] << 8) | bufIn[i + 1];
                /*
                 * For even bit numbers, the bits within the group are arranged in iCol positions left to right,
                 * while for odd bit numbers, they are arranged right to left.
                 */
                let bit = (wGroup >> ((iBit & 1)? iCol : (15 - iCol))) & 1;
                wOut |= (bit << iBit);
            }
            /*
             * Swap the next two lines if you really want big-endian instead of little-endian
             */
            bufOut[ibOut++] = wOut & 0xff;
            bufOut[ibOut++] = (wOut >> 8);
        }
        fs.writeFileSync(sFileOut, bufOut);
    }
    catch (err) {
        console.log(err.message);
    }
}

if (process.argv.length <= 2) {
    console.log("usage: node raw2le.js [input filename] [output filename]");
    process.exit();
}

processFile(process.argv[2], process.argv[3]);
