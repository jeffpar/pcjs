#!/usr/bin/env node
/**
 * @fileoverview Node command-line XML extraction tool
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs from "fs";
import PCJSLib from "../modules/pcjslib.js";
import { printf } from "../../machines/modules/v2/printf.js";

var [argc, argv] = PCJSLib.getArgs();

/**
 * processManifest(sManifest, iStart, iEnd)
 *
 * @param {string} sManifest
 * @param {number} [iStart]
 * @param {number} [iEnd]
 */
function processManifest(sManifest, iStart, iEnd)
{
    try {
        var sXML = fs.readFileSync(sManifest, 'utf-8');
    } catch(err) {
        printf("error: unable to read manifest: %s\n", sManifest);
        return;
    }

    var aMatchDisks = sXML.match(/<disk[^>]*>[\S\s]*?<\/disk>/g);
    if (!aMatchDisks) {
        printf("warning: no disks found in: %s\n", sManifest);
        return;
    }

    var sDiskTitle = "", sDiskPrefix = "";
    var match = sXML.match(/<title(?: prefix="(.*)"|)>(.*?)<\/title>/);
    if (match) {
        sDiskTitle = match[2];
        if (match[1]) sDiskPrefix = match[1] + ": ";
    }

    if (sDiskTitle) {
        match = sXML.match(/<version>(.*?)<\/version>/);
        if (match) sDiskTitle += ' ' + match[1];
    }

    for (var iDisk = 0; iDisk < aMatchDisks.length; iDisk++) {
        var sDisk = aMatchDisks[iDisk];
        match = sDisk.match(/<name>(.*?)<\/name>/);
        var aMatchFiles = sDisk.match(/<file[^>]*>[\S\s]*?<\/file>/g);
        var sDiskName = match && match[1] || "";
        if (sDiskName && iStart) {
            var n = +sDiskName.substr(4);
            if (n < iStart || iEnd && n > iEnd) continue;
        }
        if (!aMatchFiles || !sDiskName) {
            printf("warning: no files in disk: %s\n", sDiskName);
            return;
        }
        printf("### Directory of %s\n\n", sDiskName? sDiskPrefix + sDiskName : sDiskTitle);
        printf("{%% include machine-command.html type='button' label='Load Disk' machine='%s' command='script' value='select FDC listDrives \"A:\"; select FDC listDisks \"%s\"; loadDisk FDC scroll' %%}\n\n", sDiskPrefix.toLowerCase(), sDiskName? sDiskPrefix + sDiskName : sDiskTitle);
        printf("     Volume in drive A %s\n", (sDiskName? ("is " + sDiskName) : "has no label"));
        printf("     Directory of  A:\\\n    \n");
        for (var iFile = 0; iFile < aMatchFiles.length; iFile++) {
            var sFile = aMatchFiles[iFile];
            var matchSize = sFile.match(/size="([0-9]*)"/);
            var matchTime = sFile.match(/time="([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9]) ([0-9][0-9]):([0-9][0-9]):([0-9][0-9])"/);
            var matchFileName = sFile.match(/>(.*?)</);
            if (!matchSize || !matchTime || !matchFileName) {
                printf("warning: file entry #%d incomplete\n", iFile);
                return;
            }
            var sSize = matchSize[1];
            var sTime = matchTime[1];
            var sFileName = matchFileName[1].replace(/&amp;/g, "&");
            var sBaseName = sFileName;
            var sExtension = "";
            var i = sFileName.lastIndexOf('.');
            if (i >= 0) {
                sBaseName = sFileName.substr(0, i);
                sExtension = sFileName.substr(i + 1);
            }
            var iMonth = +matchTime[2];
            var iDay = +matchTime[3];
            var iYear = +matchTime[1] % 100;
            var iHour = +matchTime[4];
            var iMinute = +matchTime[5];
            var sSuffix;
            if (iHour < 12) {
                sSuffix = "a";
                if (!iHour) iHour = 12;
            }
            else {
                sSuffix = "p";
                if (iHour > 12) iHour -= 12;
            }
            /*
             * Here's our template, from PC-DOS 2.00:
             *
             *      COMMAND  COM    17664   3-08-83  12:00p
             */
            printf("    %-8s %-3s %8s  %2d-%02d-%02d  %2d:%02d%s\n", sBaseName, sExtension, sSize, iMonth, iDay, iYear, iHour, iMinute, sSuffix);
        }
        printf("\n");
    }
}

if (argc > 1) {
    processManifest(argv[1], +argv[2], +argv[3]);
    process.exit(0);
}

printf("usage: node manifest.js [manifest]\n");
