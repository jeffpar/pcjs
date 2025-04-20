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
        usage: "--batch=file",
        description: "process archives in the specified file",
        handler: async function(argv, option) {
            try {
                let lines = await fs.readFile(argv[option], "utf8");
                archiveFiles = archiveFiles.concat(lines.split(/\r?\n/).filter(line => line.length > 0));
            } catch (error) {
                printf(error.message);
            }
        }
    },
    "comment": {
        type: "boolean",
        usage: "--comment",
        description: "display archive comments"
    },
    "dir": {
        type: "string",
        usage: "--dir=directory",
        description: "extract files into the specified directory"
    },
    "extract": {
        type: "boolean",
        usage: "--extract",
        description: "extract the contents of the specified archive(s)"
    },
    "list": {
        type: "boolean",
        usage: "--list",
        description: "list the contents of the specified archive(s)"
    },
    "overwrite": {
        type: "boolean",
        usage: "--overwrite",
        description: "overwrite existing files when extracting"
    },
    "help": {
        type: "boolean",
        usage: "--help",
        description: "Display this help message",
        handler: function(argv, option) {
            printf("Usage:\n    %s [options] [archives]\n", path.basename(argv[0]));
            printf("Options:\n");
            for (let option in options) {
                let optionProps = options[option];
                printf("  %-16s %s\n", optionProps.usage, optionProps.description);
            }
        }
    }
};

let archiveFiles = [];

/**
 * main(argc, argv)
 */
async function main(argc, argv)
{
    for (let i = 1; i < argv.length; i++) {
        archiveFiles.push(argv[i]);
    }
    for (let option in argv) {
        if (!isNaN(option)) continue;
        let optionProps = options[option];
        if (optionProps) {
            if (!optionProps.handler) {
                optionProps.value = argv[option];
            } else {
                await optionProps.handler(argv, option);
            }
        } else {
            printf("Unknown option: %s\n", option);
        }
    }
    if (argc < 2) {
        options.help.handler(argv);
        return;
    }
    //
    // Process all specified archive files
    //
    let nArchives = 0, nFiles = 0;
    while (nArchives < archiveFiles.length) {
        let archive;
        let archiveFile = archiveFiles[nArchives++];
        let archiveName = path.basename(archiveFile);
        let archiveExt = path.extname(archiveName);
        try {
            archive = await dezip.open(archiveFile);
            printf("archive #%d %s opened successfully\n", nArchives, archiveFile);
        } catch (error) {
            printf(error.message);
            continue;
        }
        try {
            let entries = await dezip.readDirectory(archive);
            let dirSrc = path.dirname(path.resolve(archiveFile));
            let dirDst = path.resolve(options.dir.value || ".");
            if (dirDst.indexOf(dirSrc) == 0) {
                dirDst = dirDst.slice(dirSrc.length);
            }
            dirDst = path.join(dirDst, path.basename(archiveFile, archiveExt));
            if (archive.comment && options.comment.value) {
                printf("archive #%d %s comment: \n%s\n", nArchives, archiveName, archive.comment);
            }
            let nEntries = 0;
            while (nEntries < entries.length) {
                let entry = entries[nEntries++];
                let entryName = entry.dirHeader?.name || entry.fileHeader?.name;
                let entryAttr = (entry.dirHeader?.attr || 0) & 0xff;
                if (entryAttr & 0x10) {
                    continue;       // skip directories
                }
                let entryModified = entry.dirHeader?.modified || entry.fileHeader?.modified;
                let targetFile, targetName, writeData;
                if (options.extract.value || options.dir.value) {
                    writeData = async function(db) {
                        if (db) {
                            if (!targetFile) {
                                targetName = path.join(dirDst, entryName);
                                await fs.mkdir(path.dirname(targetName), { recursive: true });
                                targetFile = await fs.open(targetName, options.overwrite.value? "w" : "wx");
                            }
                            await targetFile.write(db.buffer);
                            return;
                        }
                        if (targetFile) {
                            await targetFile.close();
                            if (entryModified) {
                                await fs.utimes(targetName, entryModified, entryModified);
                            }
                        }
                    };
                }
                try {
                    nFiles++;
                    let db = await dezip.readFile(archive, entry, writeData);
                    if (options.list.value) {
                        printf("%s entry #%d (%s): %d bytes\n", archiveName, nEntries, entryName, db.length);
                    }
                } catch (error) {
                    printf("%s entry #%d (%s): %s\n", archiveName, nEntries, entryName, error.message);
                }
            }
        } catch (error) {
            printf(error.message);
        }
        await dezip.close(archive);
    }
    printf("%d archive(s), %d file(s) processed\n", nArchives, nFiles);
}

await main(...Format.parseArgs(process.argv));
