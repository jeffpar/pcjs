/**
 * @fileoverview Command-line interface to the Dezip class
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs from "fs/promises";
import path from "path";
import zlib from "zlib";
import Format from "./format.js";
import Dezip from "./dezip.js";
import { LegacyArc, LegacyZip } from "./legacy.js";

const format = new Format();
const printf = function(...args) {
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
        description: "process archives in the specified file"
    },
    "comment": {
        type: "boolean",
        usage: "--comment",
        alias: "-c",
        description: "display archive comments"
    },
    "dir": {
        type: "string",
        usage: "--dir directory",
        alias: "-d",
        description: "extract files into the specified directory"
    },
    "extract": {
        type: "boolean",
        usage: "--extract",
        alias: "-e",
        description: "extract the contents of the specified archive(s)"
    },
    "list": {
        type: "boolean",
        usage: "--list",
        alias: "-l",
        description: "list the contents of the specified archive(s)"
    },
    "overwrite": {
        type: "boolean",
        usage: "--overwrite",
        alias: "-o",
        description: "overwrite existing files when extracting"
    },
    "recurse": {
        type: "boolean",
        usage: "--recurse",
        alias: "-r",
        description: "process archives within archives"
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
                printf("  %-16s %s\n", option.usage, option.description);
            }
        }
    }
};

let archivePaths = [];

/**
 * main(argc, argv)
 */
async function main(argc, argv)
{
    for (let i = 1; i < argv.length; i++) {
        archivePaths.push(argv[i]);
    }
    if (argv.batch) {
        try {
            let lines = await fs.readFile(argv.batch, "utf8");
            archivePaths = archivePaths.concat(lines.split(/\r?\n/).filter(line => line.length > 0));
        } catch (error) {
            printf("%s\n", error.message);
        }
    }
    //
    // Process all specified archive files
    //
    let nArchives = 0, nFiles = 0;

    let processArchive = async function(archivePath, archiveDB = null) {
        let archive;
        let archiveName = path.basename(archivePath);
        let archiveExt = path.extname(archiveName);
        try {
            archive = await dezip.open(archivePath, archiveDB);
            nArchives++;
            printf("opening %s\n", archivePath);
        } catch (error) {
            printf("%s\n", error.message);
            return;
        }
        try {
            let entries = await dezip.readDirectory(archive);
            //
            // If you use the search-and-replace form of the dir option (ie, "--dir <search>=<replace>"), then
            // the destination path is the source path with the first occurrence of <search> replaced with <replace>.
            //
            // Otherwise, destination path is whatever follows "--dir" (or the current directory if not specified).
            //
            let srcPath = path.dirname(archivePath);
            let dstPath = argv.dir || "";
            let chgPath = dstPath.split("=");
            if (chgPath.length > 1) {
                if (srcPath.indexOf(chgPath[0]) >= 0) {
                    dstPath = srcPath.replace(chgPath[0], chgPath[1]);
                } else {
                    printf("warning: source path %s does not contain %s\n", srcPath, chgPath[0]);
                    dstPath = "";
                }
            }
            //
            // If you REALLY want to extract the archive into your current directory, you can specify "--dir ."
            //
            if (dstPath != ".") {
                dstPath = path.join(dstPath, path.basename(archivePath, archiveExt));
            }
            if (archive.comment && argv.comment) {
                printf("archive #%d %s comment: \n%s\n", nArchives, archiveName, archive.comment);
            }
            let nEntries = 0;
            while (nEntries < entries.length) {
                let entry = entries[nEntries++];
                let header = entry.dirHeader || entry.fileHeader;
                let entryAttr = (header.attr || 0) & 0xff;
                if ((entryAttr & 0x10) || header.name.endsWith("/")) {
                    continue;           // skip directories
                }
                let writeData;
                let targetFile, targetPath;
                let recurse = (argv.recurse && header.name.match(/^(.*)(\.ZIP|\.ARC)$/i));
                if ((argv.extract || argv.dir) && !recurse) {
                    writeData = async function(db) {
                        if (db) {
                            if (!targetFile) {
                                targetPath = path.join(dstPath, header.name);
                                await fs.mkdir(path.dirname(targetPath), { recursive: true });
                                try {
                                    targetFile = await fs.open(targetPath, argv.overwrite? "w" : "wx");
                                } catch (error) {
                                    if (error.code == "EEXIST") {
                                        printf("skipping %s\n", targetPath);
                                    } else {
                                        printf("%s\n", error.message);
                                    }
                                    return false;
                                }
                                printf("creating %s\n", targetPath);
                            }
                            await targetFile.write(db.buffer);
                            return true;
                        }
                        if (targetFile) {
                            await targetFile.close();
                            if (header.modified) {
                                await fs.utimes(targetPath, header.modified, header.modified);
                            }
                            return true;
                        }
                        return false;
                    };
                }
                try {
                    let db = await dezip.readFile(archive, entry, writeData);
                    nFiles++;
                    if (argv.list) {
                        let method = header.method < 0? LegacyArc.methodNames[-header.method - 2] : LegacyZip.methodNames[header.method];
                        if (entry.encrypted) method += '*';
                        let ratio = db.length > header.compressedSize? Math.round(100 * (db.length - header.compressedSize) / db.length) : 0;
                        printf("%-14s %7d   %-9s %7d   %3d%%   %T   %0*x\n",
                                header.name, db.length, method, header.compressedSize, ratio, header.modified, archive.type == Dezip.TYPE_ARC? 4 : 8, header.crc);
                    }
                    if (recurse) {
                        await processArchive(path.join(srcPath, path.basename(archivePath, archiveExt), header.name), db);
                    }
                } catch (error) {
                    printf("%s entry #%d (%s): %s\n", archiveName, nEntries, header.name, error.message);
                }
            }
        } catch (error) {
            printf("%s\n", error.message);
        }
        await dezip.close(archive);
    };

    while (archivePaths.length) {
        await processArchive(archivePaths.shift());
    }
    printf("%d archive(s), %d file(s) processed\n", nArchives, nFiles);
}

await main(...Format.parseOptions(process.argv, options, printf));
