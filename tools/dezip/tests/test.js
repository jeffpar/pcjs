/**
 * Script to test Dezip functions.
 */

import fs from "fs/promises";
import path from "path";
import zlib from "zlib";
import Format from "../format.js";
import Dezip from "../dezip.js";
import { LegacyArc, LegacyZip } from "../legacy.js";

let format = new Format();
let printf = function(...args) {
    let s = format.sprintf(...args);
    process.stdout.write(s);
};

const dezip = new Dezip(
    {
        fetch,
        open: fs.open,
        getArcCRC: LegacyArc.getArcCRC,
        unpackSync: LegacyArc.unpackSync,           // interface for ARC_NR data
        unsqueezeSync: LegacyArc.unsqueezeSync,     // interface for ARC_HS data
        uncrunchSync: LegacyArc.uncrunchSync,       // interface for ARC_LZ, ARC_LZNR, ARC_LZNH data
        uncrushSync: LegacyArc.uncrushSync,         // interface for ARC_LZC data
        getZipCRC: LegacyZip.getZipCRC,
        stretchSync: LegacyZip.stretchSync,         // interface for ZIP_SHRINK data
        expandSync: LegacyZip.expandSync,           // interface for ZIP_REDUCE# data
        explodeSync: LegacyZip.explodeSync,         // interface for ZIP_IMPLODE data
        blastSync: LegacyZip.blastSync,             // interface for ZIP_IMPLODE_DCL data
        inflate: zlib.inflateRaw,                   // interface for ZIP_DEFLATE (async) data
     // createInflate: zlib.createInflateRaw        // interface for ZIP_DEFLATE (chunked async) data
    },
    {
        cacheSize: 4096
    }
);

const options = {
    "batch": {
        type: "string",
        usage: "--batch file",
        alias: "-b",
        description: "process archives listed in specified file"
    },
    "help": {
        type: "boolean",
        usage: "--help",
        alias: "-h",
        description: "Display this help message",
        handler: function() {
            printf("Usage:\n    %s [options] [archives]\n", path.basename(process.argv[1]));
            printf("Options:\n");
            for (let key in options) {
                let option = options[key];
                if (option.internal) continue;
                printf("  %-16s %s\n", option.usage, option.description);
            }
        }
    }
};

/**
 * Function to test the Dezip class.
 */
async function main(argc, argv, errors)
{
    for (let error of errors) {
        printf("%s\n", error);
    }
    if (!argv.batch && argc < 2) {
        options.help.handler();
        return;
    }
    let testFiles = [];
    for (let i = 1; i < argv.length; i++) {
        testFiles.push(argv[i]);
    }
    if (argv.batch) {
        let listFile = argv.batch;
        try {
            let lines = await fs.readFile(listFile, "utf8");
            testFiles = lines.split(/\r?\n/).filter(line => line.length > 0);
        } catch (error) {
            console.log(error.message);
            return;
        }
    }
    //
    // Process the test files
    //
    let n = 0;
    while (n < testFiles.length) {
        let archive;
        let testFile = testFiles[n++];
        let fileName = path.basename(testFile);
        try {
            archive = await dezip.open(testFile);
            printf("archive #%d %s opened successfully\n", n+1, testFile);
        } catch (error) {
            console.log(error.message);
            continue;
        }
        try {
            let entries = await dezip.readDirectory(archive);
            if (archive.comment) {
                printf("archive #%d %s comment: %s\n", n+1, fileName, archive.comment);
            }
            for (let i = 0; i < entries.length; i++) {
                let entry = entries[i];
                try {
                    let db = await dezip.readFile(archive, entry);
                    // printf("%s entry #%d (%s): %d bytes\n", fileName, i+1, entry.fileHeader.name, db.length);
                } catch (error) {
                    throw new Error(`${fileName} entry #${i+1} (${entry.fileHeader.name}): ${error.message}`);
                }
            }
        } catch (error) {
            console.log(error.message);
        }
        await dezip.close(archive);
    }
    printf("%d archive(s) processed\n", n);
}

await main(...Format.parseOptions(process.argv, options));
