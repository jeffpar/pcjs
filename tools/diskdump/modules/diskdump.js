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

let device = new Device();
let printf = device.printf.bind(device);

/**
 * main()
 */
function main()
{
    let lib = new StdLib();
    let {argc, argv} = lib.getArgs();

    if (argv['disk']) {
        try {
            let db = new DataBuffer(fs.readFileSync(argv['disk']));
            let di = new DiskImage(device, db);
            printf("disk size: %d\n", di.getSize());
        } catch(err) {
            printf("error: %s\n", err.message);
        }
        return;
    }
    printf("nothing to do\n");
}

main();
