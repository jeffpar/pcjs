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

export default class DiskDump {
    /**
     * DiskDump(printf)
     *
     * @this DiskDump
     * @param {function(string,...)} printf
     */
    constructor(printf)
    {
        printf("hello world!\n");
    }
}
