/**
 * Command-line interface to the Dezip class.
 */

import fs from "fs/promises";
import path from "path";
import zlib from "zlib";
import Format from "./format.js";
import Dezip from "./dezip.js";
import { LegacyArc, LegacyZip } from "./legacy.js";

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

/**
 * parseArgs(args, i)
 *
 * Any argument value preceded by a double-hyphen or long-dash switch (eg, "--option value") is
 * saved in argv with the switch as the key (eg, argv["option"] == "value").
 *
 * If there are multiple arguments preceded by the same double-hyphen switch, then the argv entry
 * becomes an array (eg, argv["option"] == ["value1","value2"]).
 *
 * If a double-hyphen switch is followed by another switch (or by nothing, if it's the last argument),
 * then the value of the switch will be a boolean instead of a string (eg, argv["option"] == true).
 *
 * Single-hyphen switches are different: every character following a single hyphen is transformed into
 * a boolean value (eg, "-abc" produces argv["a"] == true, argv["b"] == true, and argv["c"] == true).
 *
 * Only arguments NOT preceded by (or part of) a switch are pushed onto the argv array; they can be
 * accessed as argv[i], argv[i+1], etc.
 *
 * In addition, when the initial i >= 1, then argv[0] is set to the concatenation of all args, starting
 * with args[i], and the first non-switch argument begins at argv[1].
 *
 * Finally, since argv is an Array, it has a built-in 'length' property, so if you also need to specify
 * a "--length" argument, we must precede the key with a '#' (ie, '#length') to avoid a conflict.
 *
 * @param {Array.<string>} [args]
 * @param {number} [i] (default is 1, because if you're passing process.argv, process.argv[0] is useless)
 * @returns {Array} [argc, argv]
 */
function parseArgs(args, i = 1)
{
    let argc = 0, argv = [], option = "";
    if (i) {
        argv.push(args.slice(i++).join(' '));
        //
        // For convenience: if the caller has crammed all their arguments into the next argument,
        // and there are NO double-quotes (because parsing those is extra work), then we split the
        // argument and append it to args (this can happen in VSCode launch profiles, if you're lazy).
        //
        if (i < args.length && args[i].indexOf('"') < 0 && args[i].indexOf(' ') > 0) {
            let a = args[i].split(' ');
            args.splice(i, 1, ...a);
        }
    }
    while (i < args.length) {
        let j, sSep;
        let sArg = args[i++];
        if (!sArg.indexOf(sSep = "--") || !sArg.indexOf(sSep = "—")) {
            sArg = sArg.slice(sSep.length);
            let sValue = true;
            j = sArg.indexOf("=");
            if (j < 0) j = sArg.indexOf(":");   // allow ':' as an alternative to '=' (a common mistake)
            if (j > 0) {
                sValue = sArg.slice(j + 1);
                sArg = sArg.slice(0, j);
                sValue = (sValue == "true") ? true : ((sValue == "false") ? false : sValue);
            }
            if (typeof sValue == "string") {
                let quoteMatch = sValue.match(/^(["'])(.*)\1$/);
                if (quoteMatch) {
                    sValue = quoteMatch[2];
                }
            }
            if (typeof argv[sArg] == "number") {
                sArg = '#' + sArg;              // avoid conflict with the built-in 'length' property
            }
            option = (j < 0? sArg : "");
            if (!argv.hasOwnProperty(sArg)) {
                argv[sArg] = sValue;
                continue;
            }
            if (typeof sValue == "boolean") {
                continue;
            }
            if (!Array.isArray(argv[sArg])) {
                argv[sArg] = [argv[sArg]];
            }
            argv[sArg].push(sValue);
            continue;
        }
        if (!sArg.indexOf("-")) {
            for (j = 1; j < sArg.length; j++) {
                let ch = sArg.charAt(j);
                if (argv[ch] === undefined) {
                    argv[ch] = true;
                }
            }
            continue;
        }
        if (option) {
            if (typeof argv[option] == "boolean") {
                argv[option] = sArg;
            }
            else {
                if (!Array.isArray(argv[option])) {
                    argv[option] = [argv[option]];
                }
                argv[option].push(sArg);
            }
            option = "";
            continue;
        }
        argv.push(sArg);
    }
    argc = Object.keys(argv).length;
    return [argc, argv];
}

/**
 * Function to test the Dezip class.
 */
async function main(argc, argv)
{
    if (argc < 2) {
        printf("Usage: %s --list=<file>\n", path.basename(argv[0]));
        return;
    }
    let testFiles = [];
    for (let i = 1; i < argv.length; i++) {
        testFiles.push(argv[i]);
    }
    if (argv['list']) {
        let listFile = argv['list'];
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

await main(...parseArgs(process.argv));
