#!/usr/bin/env node
/**
 * @fileoverview Disk image hashing tool
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs from "fs";
import path from "path";
import crypto from "crypto";
import PCJSLib from "../modules/pcjslib.js";
import { printf } from "../../machines/modules/v2/printf.js";

var [argc, argv] = PCJSLib.getArgs();

/**
 * findFile(buf, name)
 *
 * @param {Buffer} buf
 * @param {string} name
 * @returns {number} (offset of directory entry for file, or -1 if not found)
 */
function findFile(buf, name = "*")
{
    let off = 0x600;
    let offMax = 0x800;
    while (off < offMax) {
        let i = 0, src = "";
        for (; i < 11; i++) {
            let b = buf[off+i];
            if (i == 0 && (b == 0xE5 || b == 0x00)) break;
            let ch = String.fromCharCode(b);
            if (ch == " ") {
                if (i > 7) break;
                i = 7;
                continue;
            }
            src += (i == 8? "." : "") + ch;
        }
        if (!src) {
            off = offMax;
            break;
        }
        if (src == name || name == "*") {
            let time = buf[off+0x16] | (buf[off+0x17] << 8);
            let hour = (time >> 11) & 0x1f;
            let minute = (time >> 5) & 0x3f;
            let second = (time & 0x1f) << 1;
            printf("%-12s %02d:%02d:%02d (%#06x)\n", src, hour, minute, second, time);
        }
        if (src == name) break;
        off += 0x20;
    }
    if (off >= offMax) off = -1;
    return off;
}

/**
 * setFileTime(buf, off, hour, minute, second)
 *
 * @param {Buffer} buf
 * @param {number} off
 * @param {number} hour (-1 to leave unchanged)
 * @param {number} minute (-1 to leave unchanged)
 * @param {number} second (-1 to leave unchanged)
 */
function setFileTime(buf, off, hour = -1, minute = -1, second = -1)
{
    let time = buf[off+0x16] | (buf[off+0x17] << 8);
    if (hour >= 0) {
        time = (time & 0x07ff) | ((hour & 0x1f) << 11);
    }
    if (minute >= 0) {
        time = (time & 0xf81f) | ((minute & 0x3f) << 5);
    }
    if (second >= 0) {
        time = (time & 0xffe0) | (second >> 1) & 0x1f;
    }
    buf[off+0x16] = time & 0xff;
    buf[off+0x17] = (time >> 8) & 0xff;
}

/**
 * processDisk(sDisk)
 *
 * @param {string} sDisk
 */
function processDisk(sDisk)
{
    let bufData, shaHash, sumData, off;

    try {
        bufData = fs.readFileSync(sDisk);
    } catch(err) {
        printf("error: unable to read disk image: %s\n", sDisk);
        return;
    }

    findFile(bufData, "*");

    let off1 = findFile(bufData, "EDLIN.COM");
    let off2 = findFile(bufData, "README.DOC");
    if (off1 >= 0 && off2 >= 0) {
        let sec1 = 0;
        setFileTime(bufData, off1, 9, 31, 0);
        // setFileTime(bufData, off2, -1, -1, 22);
        findFile(bufData, "README.DOC");
        while (sec1 < 60) {
            setFileTime(bufData, off1, -1, -1, sec1);
            findFile(bufData, "EDLIN.COM");
            shaHash = crypto.createHash('sha1');
            shaHash.update(bufData);
            sumData = shaHash.digest('hex');
            printf("%s  %s\n", sumData, path.basename(sDisk));
            sec1 += 2;
        }
    }
}

if (argc > 1) {
    processDisk(argv[1]);
    process.exit(0);
}

printf("usage: node diskhash.js [disk image]\n");
