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
        description: "process archives listed in specified file"
    },
    "comment": {
        type: "boolean",
        usage: "--comment",
        alias: "-c",
        description: "display archive comments"
    },
    "debug": {
        type: "boolean",
        usage: "--debug",
        alias: "-g",
        description: "display debug information"
    },
    "dir": {
        type: "string",
        usage: "--dir directory",
        alias: "-d",
        description: "extract files into specified directory"
    },
    "extract": {
        type: "boolean",
        usage: "--extract",
        alias: "-e",
        description: "extract files (implied by --dir)"
    },
    "list": {
        type: "boolean",
        usage: "--list",
        alias: "-l",
        description: "list contents of specified archive(s)"
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
    "skip": {
        type: "number",
        usage: "--skip n",
        alias: "-s",
        internal: true,
        description: "skip the first n specified archive(s)"
    },
    "test": {
        type: "boolean",
        usage: "--test",
        alias: "-t",
        description: "test contents of specified archive(s)"
    },
    "verbose": {
        type: "boolean",
        usage: "--verbose",
        alias: "-v",
        description: "display detailed information about archive(s)"
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

let archivePaths = [];

/**
 * main(argc, argv, errors)
 */
async function main(argc, argv, errors)
{
    //
    // Before we get started, display any usage errors encountered by parseOptions().
    //
    for (let error of errors) {
        printf("%s\n", error);
    }
    //
    // Build the list of archive files to process, starting with any explicitly listed.
    //
    for (let i = 1; i < argv.length; i++) {
        archivePaths.push(argv[i]);
    }
    //
    // Next, add all files listed in the specified batch file, if any.
    //
    if (argv.batch) {
        try {
            let lines = await fs.readFile(argv.batch, "utf8");
            archivePaths = archivePaths.concat(lines.split(/\r?\n/).filter(line => line.length > 0));
        } catch (error) {
            printf("%s\n", error.message);
        }
    }
    if (argv.skip) {
        archivePaths = archivePaths.slice(argv.skip);
    }
    //
    // Define the function used to process all archive files, which will also allow us to recursively process
    // nested archives, if --recurse has been specified.
    //
    let nArchives = 0, nFiles = 0;
    let processArchive = async function(archivePath, archiveDB = null) {
        let archive;
        let archiveName = path.basename(archivePath);
        let archiveExt = path.extname(archiveName);
        try {
            nArchives++;
            if (argv.verbose) {
                printf("opening %s\n", archivePath);
            } else {
                if (nArchives % 10000 == 0) {
                    printf("%d archives processed\n", nArchives);
                }
            }
            archive = await dezip.open(archivePath, archiveDB);
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
            // Otherwise, destination path is whatever follows "--dir".  Any form of the "--dir" option automatically
            // enables extraction.
            //
            // If no directory is specified but extraction is still enabled via "--extract", then the current directory
            // is used.  By default, extraction always occurs inside a new directory with same name as the base name
            // of the archive, but you can force extraction into the current directory by specifying "--dir .".
            //
            let srcPath = path.dirname(archivePath);
            let dstPath = argv.dir || "";
            let chgPath = dstPath.split("=");
            if (chgPath.length > 1) {
                if (srcPath.indexOf(chgPath[0]) >= 0) {
                    dstPath = srcPath.replace(chgPath[0], chgPath[1]);
                } else {
                    printf("warning: source path %s does not contain %s\n", srcPath, chgPath[0]);
                    dstPath = chgPath[1];
                }
            }
            if (dstPath != ".") {
                if (!dstPath || archivePaths.length > 1) {
                    dstPath = path.join(dstPath, path.basename(archivePath, archiveExt));
                }
            }
            if (archive.comment && argv.comment) {
                if (argv.verbose) {
                    printf("comment: \n%s\n", archive.comment);
                } else {
                    printf("comment for %s:\n%s\n", archivePath, archive.comment);
                }
            }
            if (argv.list) {
                printf("\nFilename        Length   Method       Size  Ratio   Date       Time       CRC\n");
                printf("--------        ------   ------       ----  -----   ----       ----       ---\n");
            }
            let nEntries = 0;
            while (nEntries < entries.length) {
                let entry = entries[nEntries++];
                let header = entry.dirHeader || entry.fileHeader;
                if (!dezip.isEntryValid(archive, entry)) {
                    printf("warning: missing %s (archive disk %d != entry disk %d)\n", header.name, archive.endHeader?.diskNum, entry.dirHeader?.diskStart);
                    continue;
                }
                let entryAttr = (header.attr || 0) & 0xff;
                //
                // TODO: I'm not sure I fully understand all the idiosyncrasies of directory entries inside archives;
                // for now, I'm trusting that entries inside one or more directories have those directories explicitly
                // specified in header.name (ie, that header.name is always a full relative path).
                //
                // What am I concerned about?  Well, in early ZIP files, I thought I read something somewhere about
                // entries with zero size also implying directories.  Also, note that the 'attr' field only exists in
                // DirHeaders, not FileHeaders, so there's that.  And what's the deal with trailing forward slashes?
                // That feels more like a modern convention rather than something the DOS version of PKZIP would have done.
                //
                if (entryAttr & 0x08) {
                    continue;           // skip volume labels
                }
                if ((entryAttr & 0x10) || header.name.endsWith("/")) {
                    continue;           // skip directory entries
                }
                let writeData;
                let targetFile, targetPath;
                let recurse = (argv.recurse && header.name.match(/^(.*)(\.ZIP|\.ARC)$/i));
                if ((argv.dir || argv.extract) && !recurse) {
                    writeData = async function(db) {
                        if (db) {
                            if (!targetFile) {
                                targetPath = path.join(dstPath, header.name);
                                await fs.mkdir(path.dirname(targetPath), { recursive: true });
                                try {
                                    targetFile = await fs.open(targetPath, argv.overwrite? "w" : "wx");
                                } catch (error) {
                                    if (error.code == "EEXIST") {
                                        if (argv.verbose) printf("skipping %s\n", targetPath);
                                    } else {
                                        printf("%s\n", error.message);
                                    }
                                    return false;
                                }
                                if (argv.verbose) printf("creating %s\n", targetPath);
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
                    let db;
                    let printed = false;
                    nFiles++;
                    if (argv.dir || argv.extract || argv.test || recurse) {
                        if (argv.debug) {
                            printf("reading %s\n", header.name);
                            printed = true;
                        }
                        db = await dezip.readFile(archive, entry, writeData);
                    }
                    if (argv.list) {
                        let method = header.method < 0? LegacyArc.methodNames[-header.method - 2] : LegacyZip.methodNames[header.method];
                        if (header.flags & Dezip.FileHeader.fields.flags.ENCRYPTED) {
                            method += '*';
                        }
                        let ratio = header.size > header.compressedSize? Math.round(100 * (header.size - header.compressedSize) / header.size) : 0;
                        printf("%-14s %7d   %-9s %7d   %3d%%   %T   %0*x  %s\n",
                                header.name, header.size, method, header.compressedSize, ratio, header.modified, archive.type == Dezip.TYPE_ARC? 4 : 8, header.crc, entry.warnings.join("; "));
                    }
                    else if (argv.debug && !printed) {
                        printf("listing %s\n", header.name);
                    }
                    if (recurse) {
                        await processArchive(path.join(srcPath, path.basename(archivePath, archiveExt), header.name), db);
                    }
                } catch (error) {
                    printf("%s/%s error: %s\n", archivePath, header.name, error.message);
                }
            }
        } catch (error) {
            printf("%s\n", error.message);
        }
        await dezip.close(archive);
    };
    //
    // And finally: a one-line loop to bring them all and in the darkness bind them.
    //
    for (let archivePath of archivePaths) {
        await processArchive(archivePath);
    }
    printf("%d archive(s), %d file(s) processed\n", nArchives, nFiles);
}

await main(...Format.parseOptions(process.argv, options));
