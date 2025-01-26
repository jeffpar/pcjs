#!/usr/bin/env node
/**
 * @fileoverview Tool for adjusting keyboard layouts
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs from "fs";
import { printf } from "../../machines/modules/v2/printf.js";

/**
 * processFile(sFile)
 *
 * @param {string} sFile
 */
function processFile(sFile) {
    try {
        let sXML = fs.readFileSync(sFile, "utf8");
        let maxMatch = sXML.match(/max-width:\s*([0-9]+)/);
        if (!maxMatch) {
            printf("unable to find max width\n");
            return;
        }
        let maxWidth = +maxMatch[1];
        let re = /(<control\s+type="key")([^>]*)>(.*?)(<\/control>)/g;
        let controlMatch;
        while ((controlMatch = re.exec(sXML))) {
            let attrs = controlMatch[2];
            let bindMatch = attrs.match(/ binding="([^"]+)"/);
            let topMatch = attrs.match(/ top="([0-9]+)(px|%|)"/);
            let leftMatch = attrs.match(/ left="([0-9]+)(px|%|)"/);
            let widthMatch = attrs.match(/ width="([0-9]+)(px|%|)"/);

            let top = -1, left = -1, width = -1;
            if (topMatch) top = +topMatch[1];
            if (leftMatch) left = +leftMatch[1];
            if (widthMatch) width = +widthMatch[1];

            //
            // Option to shift all existing rows down one row....
            //
            // if (top >= 0) {
            //     top += 42;
            //     topMatch[2] = 'px';
            // }

            //
            // Option to shift all columns left...
            //
            // if (left >= 84 && !top) {
            //     left += 42;
            // }

            let sLeft = "0", sWidth = "0";

            if (left > 0) {
                sLeft = left.toString();
                if (leftMatch[2] != '%') {
                    left = (left / maxWidth) * 100;
                    sLeft = left.toFixed(2);
                    leftMatch[2] = '%';
                }
            } else {
                leftMatch[2] = "";
            }

            if (width > 0) {
                sWidth = width.toString();
                if (widthMatch[2] != '%') {
                    width = (width / maxWidth) * 100;
                    sWidth = width.toFixed(2);
                    widthMatch[2] = '%';
                }
            } else {
                widthMatch[2] = "";
            }

            if (bindMatch) attrs = attrs.replace(bindMatch[0], "");
            if (top >= 0) attrs = attrs.replace(topMatch[0], "");
            if (left >= 0) attrs = attrs.replace(leftMatch[0], "");
            if (width >= 0) attrs = attrs.replace(widthMatch[0], "");
            let controlNew = controlMatch[1];
            if (bindMatch) controlNew += bindMatch[0];
            if (top >= 0) controlNew += ' top="' + top + (top? topMatch[2] : '') + '"';
            if (left >= 0) controlNew += ' left="' + sLeft + leftMatch[2] + '"';
            if (width >= 0) controlNew += ' width="' + sWidth + widthMatch[2] + '"';
            controlNew += attrs + '>' + controlMatch[3] + controlMatch[4];
            if (controlMatch[0] != controlNew) {
                // printf("changing '%s' to '%s'\n", controlMatch[0], controlNew);
                sXML = sXML.replace(controlMatch[0], controlNew);
                re.lastIndex += (controlNew.length - controlMatch[0].length);
            }
        }
        printf("%s", sXML);
    }
    catch (err) {
        console.log(err.message);
    }
}

if (process.argv.length <= 2) {
    console.log("usage: node kbadjust [us83-softkeys-fixed.xml | us84-softkeys-fixed.xml]");
    process.exit();
}

processFile(process.argv[2]);
