/**
 * @fileoverview Command-line interface to disk image processing module
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2020 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs from "fs";
import crypto from "crypto";
import glob from "glob";
import mkdirp from "mkdirp";
import path from "path";
import DataBuffer from "./nodebuffer.js";
import DiskImage from "./diskimage.js";
import StdLib from "../../modules/stdlib.js";
import Device from "../../../machines/modules/device.js";

let device = new Device("node");
let printf = device.printf.bind(device);
let stdlib = new StdLib();

/**
 * main(argc, argv)
 *
 * @param {number} argc
 * @param {Array} argv
 */
function main(argc, argv)
{
    Device.DEBUG = !!argv['debug'];
    if (Device.DEBUG) {
        printf("diskdump v%s\n", Device.VERSION);
        device.setMessages(Device.MESSAGE.DISK + Device.MESSAGE.FILE, true);
    }
    let input = argv['disk'];
    if (input) {
        try {
            let db;
            if (input.endsWith(".json")) {
                db = fs.readFileSync(input, "utf8");
            } else {
                db = new DataBuffer(fs.readFileSync(input));
            }
            let di = new DiskImage(device, db, path.basename(input, ".img"), true);
            if (argv['list']) {
                let list = di.getFileListing();
                printf(list);
            }
            printf("disk size: %d\n", di.getSize());
            let output = argv['output'];
            if (output) {
                let data = di.getJSON();
                if (!fs.existsSync(output) || argv['overwrite']) {
                    fs.writeFileSync(output, data);
                } else {
                    printf("%s exists, use --overwrite to replace\n", path.basename(output));
                }
            }
        } catch(err) {
            printf("error: %s\n", err.message);
        }
        return;
    }
    printf("nothing to do\n");
}

main(...stdlib.getArgs());
