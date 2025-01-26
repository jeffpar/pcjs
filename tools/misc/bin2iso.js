#!/usr/bin/env node
/**
 * @fileoverview Tool for converting binary CD dumps to ISOs
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs from "fs";
import PCJSLib from "../modules/pcjslib.js";
import { printf, sprintf } from "../../machines/modules/v2/printf.js";

var [argc, argv] = PCJSLib.getArgs();

/**
 * dumpBytes(buffer, offset, length, desc)
 *
 * @param {Buffer} buffer
 * @param {number} offset
 * @param {number} length
 * @param {string} desc
 */
function dumpBytes(buffer, offset, length, desc)
{
    if (desc) {
        printf("%s\n", desc);
    }
    while (length > 0) {
        let i, bytes = "", chars = "";
        for (i = 0; i < 16 && i < length; i++) {
            let b = buffer[offset + i];
            bytes += sprintf("%02x ", b);
            chars += b >= 0x20 && b < 0x7f? String.fromCharCode(b) : '.';
        }
        printf("%08x: %s  %s\n", offset, bytes, chars);
        length -= i;
        offset += i;
    }
}

/**
 * convertBinToISO(sInput, sOutput, fDebug, fOverwrite, fVerbose)
 *
 * We assume that the ".bin" file is a CD-ROM dump consisting of 2352-byte sectors.  Such a
 * dump can be produced by the macOS `dd` utility, using the physical CD-ROM device; eg:
 *
 *      dd if=/dev/disk6 of=disk.bin
 *
 * To produce an ".iso" file with 2048-byte sectors, we must eliminate the extra “junk” (eg, sync
 * and address bits, headers, error correction, etc) from each sector in the ".bin" file.
 *
 * We do this by extracting each 2352-byte sector from bufferBin, discarding the first 16 and the
 * last 288 bytes, and writing a 2048-byte sector out.
 *
 * It probably goes without saying that if the ".bin" file is from anything other than a simple data
 * CD-ROM with a single track of data, the resulting ".iso" will likely be unusable.  One warning
 * sign that something is amiss is if the ".bin" file doesn't contain a perfect multiple of 2352-byte
 * sectors.
 *
 * Note that you can *usually* create an ".iso" in a single step (without running this script) by
 * simply dumping the logical device that macOS automatically creates:
 *
 *      dd if=/dev/disk6s0 of=disk.iso
 *
 * but if macOS isn't able to mount the disc, then that logical device won't exist, so you'll have
 * to create a ".bin" instead and use this conversion script.
 *
 * Thanks to @mnecasek of the OS/2 Museum for his explanation of the required conversion process.
 *
 * @param {string} sInput
 * @param {string} sOutput
 * @param {boolean} [fDebug]
 * @param {boolean} [fOverwrite]
 * @param {boolean} [fVerbose]
 * @param {string} [nSkip]
 */
function convertBinToISO(sInput, sOutput, fDebug, fOverwrite, fVerbose, nSkip)
{
    let bufferBin, streamISO, exitCode = 0;
    try {
        printf("Reading '%s'...\n", sInput);
        bufferBin = fs.readFileSync(sInput);
    } catch(err) {
        printf("error: unable to open '%s' (%s)\n", sInput, err.message);
        process.exit(1);
    }
    let nSectors = bufferBin.length / 2352;
    printf("%d bytes (%f sectors) read\n", bufferBin.length, nSectors);
    if (nSectors != (nSectors|0)) {
        printf("warning: fractional sector, possible image error\n");
        exitCode = 1;
    }
    if (!fOverwrite && fs.existsSync(sOutput)) {
        printf("warning: output file '%s' already exists; use --overwrite\n", sOutput);
        process.exit(1);
    }
    if (sOutput && sOutput != "null") {
        try {
            streamISO = fs.createWriteStream(sOutput);
        } catch(err) {
            printf("error: unable to create '%s' (%s)\n", sOutput, err.message);
            process.exit(1);
        }
    }
    let cbSector = 2048, cbTotal = 0, skip = +nSkip;
    for (let iSector = 0; iSector < nSectors; iSector++) {
        let iBuffer = iSector * 2352;
        let bufferSector = Buffer.alloc(cbSector);
        if (fVerbose && !skip) {
            dumpBytes(bufferBin, iBuffer, 16, "\nleader");
            dumpBytes(bufferBin, iBuffer+16, cbSector, "sector " + iSector);
            dumpBytes(bufferBin, iBuffer+16+cbSector, 288, "footer");
        }
        iBuffer += 16;
        bufferBin.copy(bufferSector, 0, iBuffer, iBuffer + cbSector);
        if (streamISO && !skip) streamISO.write(bufferSector);
        if (skip > 0) skip--;
        cbTotal += cbSector;
    }
    if (streamISO) {
        streamISO.on('finish', function() {
            printf("%d bytes written\n", cbTotal);
            process.exit(exitCode);
        });
        streamISO.end();
    }
}

if (argc < 2) {
    printf("usage: bin2iso.js [input file] [output file] [options]\n");
} else {
    convertBinToISO(argv[1], argv[2], argv['debug'], argv['overwrite'], argv['verbose'], argv['skip']);
}
