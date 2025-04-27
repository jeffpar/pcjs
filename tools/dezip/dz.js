/**
 * @fileoverview Command-line interface to the Dezip class
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs from "fs/promises";
import glob from "glob";
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
        getZipCRCByte: LegacyZip.getZipCRCByte,
        stretchSync: LegacyZip.stretchSync,         // interface for ZIP_SHRINK data
        expandSync: LegacyZip.expandSync,           // interface for ZIP_REDUCE# data
        explodeSync: LegacyZip.explodeSync,         // interface for ZIP_IMPLODE data
        blastSync: LegacyZip.blastSync,             // interface for ZIP_IMPLODE_DCL data
        inflate: zlib.inflateRaw,                   // interface for ZIP_DEFLATE (async) data
     // createInflate: zlib.createInflateRaw,       // interface for ZIP_DEFLATE (chunked async) data
     // printf                                      // for debug output
    },
    {
        //
        // NOTE: I overrode the default (64K) only to exercise the cache code a bit more
        // and help flush out any bugs.  Some structures in an archive (eg, comments) can be
        // as large as 64K-1, so this change also had the potential to trigger false warnings,
        // because the cache should be as large as the largest structure in the archive
        // (other than compressed data).
        //
        // cacheSize: 4096
    }
);

const optionsDZ = {
    "batch": {
        type: "string",
        usage: "--batch [file]",
        alias: "-b",
        description: "process archives listed in specified file"
    },
    "banner": {
        type: "boolean",
        usage: "--banner",
        alias: "-c",
        description: "display archive (banner) comments"
    },
    "debug": {
        type: "boolean",
        usage: "--debug",
        alias: "-u",
        description: "display debug information"
    },
    "dir": {
        type: "string",
        usage: "--dir [dir]",
        alias: "-d",
        description: "extract files into specified directory"
    },
    "extract": {
        type: "boolean",
        usage: "--extract",
        alias: "-e",
        description: "extract files (implied by --dir)"
    },
    "files": {
        type: "string",
        usage: "--files [spec]",
        alias: "-f",
        description: "file specification (eg, \"*.txt\")",
    },
    "filter": {
        type: "string",
        usage: "--filter [...]",
        alias: "-i",
        description: "comma-separated filter list (see --filter list)",
        options: {
            "list": {
                value: 0,
                description: "list available filters"
            },
            "banner": {
                value: Dezip.EXCEPTIONS.BANNER,
                description: "process only archives with banner comments"
            },
            "comment": {
                value: Dezip.EXCEPTIONS.COMMENT,
                description: "process only commented entries"
            },
            "encrypted": {
                value: Dezip.EXCEPTIONS.ENCRYPTED,
                description: "process only encrypted entries"
            },
            "split": {
                value: Dezip.EXCEPTIONS.SPLIT,
                description: "process only split archives"
            },
            "wrong": {
                value: Dezip.EXCEPTIONS.WRONGTYPE,
                description: "process only archives with wrong archive type"
            },
        }
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
    "password": {
        type: "string",
        usage: "--password [pwd]",
        alias: "-g",
        description: "decrypt \"garbled\" entries using password",
        notes: "pkunzip used -s instead of -g to decrypt 'scrambled' entries"
    },
    "path": {
        type: "string",
        usage: "--path [spec]",
        alias: "-p",
        description: "archive path specification (eg, \"**/*.zip\")",
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
        alias: "-n",
        internal: true,
        description: "skip the first n lines in any batch file"
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
            printf("Usage:\n    %s [options] [filenames]\n\n", path.basename(process.argv[1]));
            printf("Options:\n");
            for (let key in optionsDZ) {
                let option = optionsDZ[key];
                if (option.internal) continue;
                printf("  %-16s %s%s\n", option.usage, option.description, option.alias? " [" + option.alias + "]" : "");
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
    printf("Dezip %s\n%s\n\nArguments: %s\n", Dezip.VERSION, Dezip.COPYRIGHT, argv[0]);
    if (argv.help) {
        optionsDZ.help.handler();
    }
    //
    // Before we get started, display any usage errors encountered by parseOptions().
    //
    for (let error of errors) {
        printf("%s\n", error);
    }
    //
    // Build a list of archive files to process, starting with files listed in the batch file, if any.
    //
    if (argv.batch) {
        try {
            let lines = await fs.readFile(argv.batch, "utf8");
            if (argv.skip) {
                lines = lines.slice(argv.skip);
            }
            archivePaths = archivePaths.concat(lines.split(/\r?\n/).filter(line => line.length > 0 && !line.startsWith("#")));
        } catch (error) {
            printf("%s\n", error.message);
        }
    }
    //
    // Add any files matching --path patterns.
    //
    if (argv.path) {
        let files = glob.sync(argv.path);
        archivePaths = archivePaths.concat(files);
    }
    //
    // Finally, include any explicitly listed archive filenames.
    //
    for (let i = 1; i < argv.length; i++) {
        archivePaths.push(argv[i]);
    }
    let nArchives = 0, nFiles = 0, filterExceptions = 0, filterMethod = -1;
    //
    // Next, let's deal with any specified filters.
    //
    if (typeof argv.filter == "string") {
        let filterNames = argv.filter.split(",");
        for (let i = 0; i < filterNames.length; i++) {
            let filter = filterNames[i].trim();
            let option = optionsDZ.filter.options[filter];
            if (!option) {
                //
                // We also allow filtering based on compression method, but that doesn't actually set a filter bit;
                // it sets a method number instead, which means you can filter on only one compression method at a time.
                //
                let methodName = filter[0].toUpperCase() + filter.slice(1).toLowerCase();
                let method = LegacyZip.methodNames.indexOf(methodName);
                if (method >= 0) {
                    filterMethod = method;
                    continue;
                }
                method = LegacyArc.methodNames.indexOf(methodName);
                if (method >= 0) {
                    filterMethod = -(method + 2);
                    continue;
                }
                printf("unknown filter: %s\n", filter);
                continue;
            }
            if (!option.value) {
                printf("\nAvailable filters:\n");
                for (let key in optionsDZ.filter.options) {
                    let option = optionsDZ.filter.options[key];
                    if (option.value) {
                        printf("%12s: %s\n", key, option.description);
                    }
                }
                //
                // Also list all possible compression methods, since we allow filtering on those as well.
                //
                let methods = LegacyZip.methodNames.concat(LegacyArc.methodNames);
                for (let i = 0; i < methods.length; i++) {
                    if (methods[i]) {
                        let methodValue;
                        if (i < LegacyZip.methodNames.length) {
                            methodValue = i;
                        } else {
                            methodValue = -(i - LegacyZip.methodNames.length + 2);
                        }
                        printf("%12s: process only entries using %s compression (%d)\n", methods[i].toLowerCase(), methods[i], methodValue);
                    }
                }
                continue;
            }
            filterExceptions |= option.value;
        }
    }
    //
    // Define a function to process an individual archive, which then allows us to recursively process
    // nested archives if --recurse is been specified.
    //
    let processArchive = async function(archivePath, archiveDB = null) {
        let archive;
        let archiveName = path.basename(archivePath);
        let archiveExt = path.extname(archiveName);
        try {
            nArchives++;
            if (nArchives % 10000 == 0 && !argv.verbose && !argv.list) {
                printf("%d archives processed\n", nArchives);
            }
            let options = {};
            if (argv.password) {
                options.password = argv.password;
            }
            archive = await dezip.open(archivePath, archiveDB, options);
        } catch (error) {
            printf("%s\n", error.message);
            return;
        }
        try {
            let entries = await dezip.readDirectory(archive, argv.files, filterExceptions, filterMethod);
            //
            // The entries array can be empty for several reasons (eg, no files matched the specified filters),
            // but the NOFILES exception will be set only if the internal entries array is also empty, suggesting
            // that the file is a not actually an archive.
            //
            // Note that we only display this warning if archiveDB is NOT set (or --verbose IS set), because if
            // this is a nested archive, then it was only opened implicitly, not explicitly).
            //
            if ((archive.exceptions & Dezip.EXCEPTIONS.NOFILES) && (!archiveDB || argv.verbose)) {
                printf("%s: not an archive\n", archivePath);
            }
            //
            // If you use the search-and-replace form of the dir option (ie, "--dir <search>=<replace>"), then
            // the destination path is the source path with the first occurrence of <search> replaced with <replace>.
            //
            // Otherwise, destination path is whatever follows "--dir".  The presence of "--dir" automatically
            // enables extraction.  If no directory is specified but extraction is still enabled via "--extract",
            // then the current directory is used.
            //
            // If multiple archives are being processed and/or extraction was enabled without a specific directory,
            // then extraction will occur inside a directory with the name of the archive (which will be created if
            // necessary).  The only way to bypass that behavior is to process archives one at a time OR explicitly
            // use "." as the directory; the goal is to avoid unintentional merging of files.
            //
            let srcPath = path.dirname(archivePath);
            let dstPath = argv.dir || "";
            if (entries.length) {
                if (argv.verbose || argv.list || filterExceptions || filterMethod != -1) {
                    if (argv.list) printf("\n");
                    printf("%s\n", archivePath);
                }
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
                //
                // We also refer to the archive comment as the archive's "banner", which is an archive
                // filtering condition (--filter banner), but if you also want to SEE the banners, then
                // you must also specify --banner.
                //
                if (archive.comment && argv.banner) {
                    printf("%s\n", archive.comment);
                }
                if (argv.list) {
                    printf("\nFilename        Length   Method       Size  Ratio   Date       Time       CRC\n");
                    printf("--------        ------   ------       ----  -----   ----       ----       ---\n");
                }
            }
            let nEntries = 0;
            while (nEntries < entries.length) {
                let entry = entries[nEntries++];
                let header = entry.dirHeader || entry.fileHeader;
                let entryAttr = (header.attr || 0) & 0xff;
                //
                // TODO: I'm not sure I fully understand all the idiosyncrasies of directory entries inside archives;
                // for now, I'm trusting that entries inside one or more directories have those directories explicitly
                // specified in header.name (ie, that header.name is always a full relative path).
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
                                        //
                                        // TODO: Consider ALWAYS warning about the need for --overwrite when a file exists,
                                        // since extraction has been enabled.
                                        //
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
                        let name = path.basename(header.name);
                        if (name.length > 14) {
                            name = "…" + name.slice(-13);
                        }
                        let comment = header.comment || (name == header.name? "" : header.name);
                        if (entry.warnings.length || header.warnings) {
                            let warnings = entry.warnings;
                            if (header.warnings) {
                                warnings = warnings.concat(header.warnings);
                            }
                            comment = '[' + warnings.join("; ") + ']';
                        }
                        printf("%-14s %7d   %-9s %7d   %3d%%   %T   %0*x  %s\n",
                                name, header.size, method, header.compressedSize, ratio, header.modified, archive.type == Dezip.TYPE_ARC? 4 : 8, header.crc, comment);
                    }
                    else if (argv.debug && !printed) {
                        printf("listing %s\n", header.name);
                    }
                    if (recurse && db) {
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
    printf("\n%d archive(s) examined, %d file(s) processed\n", nArchives, nFiles);
}

await main(...Format.parseOptions(process.argv, optionsDZ));
