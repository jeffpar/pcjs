#!/usr/bin/env node
/**
 * @fileoverview Tool for converting binary CD dumps to ISOs
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2021 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

"use strict";

var fs = require("fs");
var Defines = require("../lib/defines");
var Str = require("../lib/strlib");
var Proc = require("../lib/proclib");
var args = Proc.getArgs();

/**
 * printf(format, ...args)
 *
 * @param {string} format
 * @param {...} args
 */
function printf(format, ...args)
{
    process.stdout.write(Str.sprintf(format, ...args));
}

/**
 * dumpBytes(buffer, offset, length)
 *
 * @param {Buffer} buffer
 * @param {number} offset
 * @param {number} length
 */
function dumpBytes(buffer, offset, length)
{
    let line = "", off = offset;
    while (length-- > 0) {
        line += Str.sprintf("%02x ", buffer[off++]);
    }
    printf("%08x: %s\n", offset, line);
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
 */
function convertBinToISO(sInput, sOutput, fDebug, fOverwrite, fVerbose)
{
    let bufferBin, streamISO;
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
        // process.exit(1);
    }
    if (!fOverwrite && fs.existsSync(sOutput)) {
        printf("warning: output file '%s' already exists; use --overwrite\n", sOutput);
        process.exit(1);
    }
    try {
        streamISO = fs.createWriteStream(sOutput);
    } catch(err) {
        printf("error: unable to create '%s' (%s)\n", sOutput, err.message);
        process.exit(1);
    }
    let cbSector = 2048, cbTotal = 0;
    for (let iSector = 0; iSector < nSectors; iSector++) {
        let iBuffer = iSector * 2352;
        let bufferSector = Buffer.alloc(cbSector);
        if (fVerbose) dumpBytes(bufferBin, iBuffer, 16);
        iBuffer += 16;
        bufferBin.copy(bufferSector, 0, iBuffer, iBuffer + cbSector);
        streamISO.write(bufferSector);
        cbTotal += cbSector;
    }
    streamISO.on('finish', function() {
        printf("%d bytes written\n", cbTotal);
        process.exit(0);
    });
    streamISO.end();
}

if (args.argc < 3) {
    printf("usage: node bin2iso.js [input file] [output file] [options]\n");
} else {
    let argv = args.argv;
    convertBinToISO(argv[1], argv[2], argv['debug'], argv['overwrite'], argv['verbose']);
}
