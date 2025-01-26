#!/usr/bin/env node
/**
 * @fileoverview Node command-line directory parsing tool
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs         from "fs";
import PCJSLib    from "../modules/pcjslib.js";
import Device     from "../../machines/modules/v3/device.js";

let device = new Device("node");
let printf = device.printf.bind(device);
let sprintf = device.sprintf.bind(device);

/**
 * parseListing(listing, inventory, filter, exclude, target)
 */
function parseListing(listing, inventory, filter, exclude, target)
{
    let cwd = "";
    let lines = listing.split('\n');
    let totalFiles = 0, totalSize = 0;
    let filterRE = filter? new RegExp(filter, "i") : null;
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i], match;
        match = line.match(/ Directory of (.*)/);
        if (match) {
            cwd = match[1];
            continue;
        }
        match = line.match(/([0-9]+)\/([0-9]+)\/([0-9]+)\s+([0-9]+):([0-9]+)\s*(AM|PM)\s+([0-9,]+)\s+(.*)/);
        if (match) {
            let hour = +match[4];
            if (match[6] == "AM") {
                if (hour == 12) match[4] = "00";
            } else {
                if (hour != 12) match[4] = sprintf("%02d", hour + 12);
            }
            let date = device.parseDate(match[3] + '-' + match[1] + '-' + match[2] + ' ' + match[4] + ':' + match[5] + ':00');
            let size = +match[7].replace(/,/g, '');
            let name = match[8];
            if (!cwd) {
                printf("unknown directory for: %s\n", name);
            }
            else {
                let filtered = true;
                let path = cwd + '\\' + name;
                if (filterRE) {
                    filterRE.lastIndex = 0;
                    filtered = !!filterRE.exec(path);
                }
                if (filtered) {
                    if (target) {
                        let i = path.indexOf(target);
                        if (i > 0) {
                            let targetFile = path.substr(i + target.length + 1);
                            if (inventory.indexOf(targetFile.replace(/\\/g, "/")) >= 0 || exclude && targetFile.indexOf(exclude) >= 0) {
                                printf("REM skipping \"Files\\%s\"\n", targetFile);
                            } else {
                                printf("ECHO F|XCOPY \"%s\" \"Files\\%s\" /Y /D\n", path, targetFile);
                                totalSize += size;
                                totalFiles++;
                            }
                        }
                    } else {
                        printf("%#T %10d %s\n", date, size, path);
                        totalSize += size;
                        totalFiles++;
                    }
                }
            }
        }
    }
    printf("total files: %17d\n", totalFiles);
    printf("total size: %18d\n", totalSize);
}

/**
 * main(argc, argv)
 *
 * @param {number} argc
 * @param {Array} argv
 */
function main(argc, argv)
{
    let argv0 = argv[0].split(' ');
    let options = argv0.slice(1).join(' ');

    Device.DEBUG = !!argv['debug'];

    printf("dirparse v%s\n%s\n%s\n", Device.VERSION, Device.COPYRIGHT, (options? sprintf("options: %s\n", options) : ""));

    if (!argv[1]) {
        printf("missing filename\n");
    } else {
        parseListing(fs.readFileSync(argv[1], "utf-8"), fs.readFileSync(argv[2], "utf-8"), argv[3], argv[4], argv[5]);
    }
}

main(...PCJSLib.getArgs());
