/**
 * @fileoverview Disk image processing module
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2020 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import crypto from "crypto";
import fs from "fs";
import glob from "glob";
import mkdirp from "mkdirp";
import path from "path";
import StdLib from "../../modules/stdlib.js";
import StdIO from "../../../machines/modules/stdio.js";

const stdio = new StdIO();

/**
 * printf(format, ...args)
 *
 * @param {string} format
 * @param {...} args
 */
function printf(format, ...args)
{
    process.stdout.write(stdio.sprintf(format, ...args));
}

export default class DiskDump {

    /**
     * main(argc, argv)
     *
     * @param {number} argc
     * @param {Array} argv
     */
    static main(argc, argv)
    {
        printf("hello world!\n");
        for (let i = 0; i < argc; i++) {
            printf("arg %d: %s\n", i, argv[i]);
        }
    }
}

DiskDump.main(StdLib.args.argc, StdLib.args.argv);
