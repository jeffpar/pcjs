/**
 * @fileoverview Converts octal constants to hex
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs from "fs";

try {
    var sText = fs.readFileSync(process.argv[2], "utf-8");
    var asLines = sText.split('\n');
    for (var iLine = 0; iLine < asLines.length; iLine++) {
        var sLine = asLines[iLine];
        var match, re = /(^|[^0-9a-z_-])(0[0-7]+)([^0-9a-z_]|$)/gi;
        var iComment = sLine.indexOf("//");
        while ((match = re.exec(sLine))) {
            if (iComment >= 0 && match.index > iComment) break;
            var n = parseInt(match[2], 8);
            if (n < 0) {
                console.log("found negative octal value (" + match[2] + "), skipping");
                continue;
            }
            var cch = (n <= 255? 2 : (n <= 65535? 4 : 8));
            var sReplace = match[1] + "0x" + ("00000000" + n.toString(16).toUpperCase()).substr(-cch) + match[3] + " /*" + match[2] + "*/";
            sLine = sLine.substr(0, match.index) + sReplace + sLine.substr(match.index + match[0].length);
            re.lastIndex = match.index + sReplace.length;
            asLines[iLine] = sLine;
        }
    }
    sText = "";
    for (iLine = 0; iLine < asLines.length; iLine++) {
        if (sText) sText += '\n';
        sText += asLines[iLine];
    }
    console.log(sText);
} catch (err) {
    console.log("error: " + err.message);
}
