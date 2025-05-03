/**
 * @fileoverview Command-line interface to the Dezip class
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * Some completely random and mildly interesting ZIP anomalies
 * -----------------------------------------------------------
 *
 * This command:
 *
 *      dz.js -lt /Volumes/MacSSD/Archives/sets/ibm-wgam-wbiz-collection/download/ibm0040-0049/ibm0047/AVC-8.ZIP
 *
 * lists 9 files, two of which have warnings:
 *
 *      Filename        Length   Method       Size  Ratio   Date       Time       CRC
 *      --------        ------   ------       ----  -----   ----       ----       ---
 *      SAMPSHOW._ST     54082   Store       54082     0%   1991-05-22 01:03:00   9791da66  [FileHeader name: BVHXGA.DLL]
 *      SAMPSND._AD     350840   Implode    318710     9%   1991-05-22 01:03:00   e74e80bf  [Missing FileHeader at 54160]
 *      SAMPSND._AU       1690   Store        1690     0%   1991-05-22 01:03:00   790b9590
 *      SAMPSND2._AD    508760   Implode    484636     5%   1991-05-22 01:03:00   9351eec9
 *      SAMPSND2._AU      2920   Implode      1697    42%   1991-05-22 01:03:00   1138d881
 *      SAMPVOIC._AD     52448   Implode     50099     4%   1991-05-22 01:03:00   1e1a9d7f
 *      SPROTECT.EXE     20627   Implode     12461    40%   1991-05-22 01:03:00   918616b2
 *      VOICE._AD       428672   Implode    410777     4%   1991-05-22 01:03:00   3a53989f
 *      VOICE._AU         3190   Store        3190     0%   1991-05-22 01:03:00   15a9741a
 *
 * Since the archive's directory appears to have "issues", let's bypass them using -n (aka --nodir)
 * and rely on a scan of the archive's FileHeaders instead.  Now we see a different set of (8) files:
 *
 *      Filename        Length   Method       Size  Ratio   Date       Time       CRC
 *      --------        ------   ------       ----  -----   ----       ----       ---
 *      BVHXGA.DLL        4330   Implode      2638    39%   1991-04-22 09:28:30   39d50b6b
 *      DISPLAY.DLL     424864   Implode    161490    62%   1991-04-22 09:21:44   d595a00f
 *      EXOS2.DLL        35481   Implode     15040    58%   1991-06-06 08:59:16   ea2ee879
 *      README.XGA        1199   Implode       608    49%   1991-06-06 17:02:38   1069fd3d
 *      XGA.DDP            336   Implode       211    37%   1991-05-30 13:03:58   76513e7e
 *      XGALOAD.DLL       5592   Implode      2127    62%   1991-06-06 10:01:08   d3fac5b3
 *      XGALOAD0.SYS     14993   Implode      3554    76%   1991-06-06 11:14:12   d94fd9d5
 *      XGARING0.SYS     15001   Implode      3567    76%   1991-04-05 11:47:36   ac04a726
 *
 * And there are no warnings.  So judicious use of -n can reveal hidden treasures (well, hidden *something*).
 */

import fs from "fs/promises";
import glob from "glob";
import path from "path";
import zlib from "zlib";
import crypto from "crypto";
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
        inflate: zlib.inflateRaw,                   // interface for ZIP_DEFLATE (async) data
     // createInflate: zlib.createInflateRaw        // interface for ZIP_DEFLATE (chunked async) data
    },
    {
        //
        // NOTE: You can override the default cacheSize (64K) to exercise the cache a bit more
        // and help flush out any bugs, but note that some structures in an archive (eg, comments)
        // can be as large as 64K-1, so lower values have the potential to trigger false warnings.
        // The cache should be as large as the largest expected data structure in the archive
        // (other than compressed data).
        //
        // cacheSize: 4096
    }
);

const options = {
    "batch": {
        type: "string",
        usage: "--batch [file]",
        description: "process archives listed in specified file"
    },
    "banner": {
        type: "boolean",
        usage: "--banner",
        alias: "-b",
        description: "display archive (banner) comments"
    },
    "debug": {
        type: "boolean",
        usage: "--debug",
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
        alias: ["-e", "-x"],
        description: "extract files (implied by --dir)"
    },
    "files": {
        type: "string",
        usage: "--files [spec]",
        description: "file specification (eg, \"*.txt\")",
    },
    "filter": {
        type: "string",
        usage: "--filter [...]",
        alias: "-f",
        multiple: true,
        description: "filter archives on criteria (see --filter list)",
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
            }
        }
    },
    "list": {
        type: "boolean",
        usage: "--list",
        alias: "-l",
        description: "list contents of specified archive(s)"
    },
    "nodir": {
        type: "boolean",
        usage: "--nodir",
        alias: "-n",
        description: "skip directory entries (scan for files instead)"
        //
        // Yes, scanning for files instead of relying on directory entries goes against protocol, but
        // sometimes an archive is screwed up, and sometimes you just want to look for hidden treasures...
        //
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
        alias: ["-g", "-s"],
        description: "decrypt \"garbled\" entries using password",
        //
        // The original ARC utility used -g to "garble" entries, whereas PKUNZIP used -s to "scramble" entries;
        // going with --password seems more straightforward, but in honor of the utilities, we also allow -g and -s.
        //
    },
    "path": {
        type: "string",
        usage: "--path [spec]",
        description: "archive path specification (eg, \"**/*.zip\")",
    },
    "recurse": {
        type: "boolean",
        usage: "--recurse",
        alias: "-r",
        description: "process archives within archives"
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
            for (let key in options) {
                let option = options[key];
                if (option.internal) continue;
                let aliases = Array.isArray(option.alias)? option.alias.join(",") : option.alias;
                printf("  %-16s %s%s\n", option.usage, option.description, aliases? " [" + aliases + "]" : "");
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
        options.help.handler();
    }
    //
    // Before we get started, display any usage errors encountered by parseOptions().
    //
    let nErrors = 0;
    for (let error of errors) {
        printf("%s\n", error);
        nErrors++;
    }
    //
    // Next, let's deal with any specified filters.
    //
    let filterExceptions = 0, filterMethod = -1;
    if (Array.isArray(argv.filter)) {
        for (let filter of argv.filter) {
            let option = options.filter.options[filter];
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
                nErrors++;
                continue;
            }
            if (!option.value) {
                printf("\nAvailable filters:\n");
                for (let key in options.filter.options) {
                    let option = options.filter.options[key];
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
    if (nErrors) {
        return;
    }
    //
    // Build a list of archive files to process, starting with files listed in the batch file, if any.
    //
    if (argv.batch) {
        try {
            let lines = await fs.readFile(argv.batch, "utf8");
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
    let bannerHashes = {};
    let nTotalArchives = 0, nTotalFiles = 0;
    //
    // Define a function to process an individual archive, which then allows us to recursively process
    // nested archives if --recurse is been specified.
    //
    let processArchive = async function(archivePath, archiveDB = null) {
        let archive;
        let archiveName = path.basename(archivePath);
        let archiveExt = path.extname(archiveName);
        try {
            nTotalArchives++;
            if (nTotalArchives % 10000 == 0 && !argv.verbose && !argv.list) {
                printf("%d archives processed\n", nTotalArchives);
            }
            let options = {};
            if (argv.password) {
                options.password = argv.password;
            }
            archive = await dezip.open(archivePath, archiveDB, options);
        } catch (error) {
            printf("%s\n", error.message);
            return [0, 1];
        }
        let nArchiveFiles = 0, nArchiveWarnings = 0;
        try {
            //
            // We don't have an "official" means of bypassing an archive's directory, but it's easy enough
            // to flag the archive as having already scanned the directory so that readDirectory() won't bother.
            //
            if (argv.nodir) {
                archive.exceptions |= Dezip.EXCEPTIONS.NODIRS;
            }
            let entries = await dezip.readDirectory(archive, argv.files, filterExceptions, filterMethod);
            //
            // The entries array can be empty for several reasons (eg, no files matched the specified filters),
            // but the NOFILES exception will be set only if the internal entries array is also empty, suggesting
            // that the file is not actually an archive.
            //
            nArchiveWarnings += archive.warnings.length? 1 : 0;
            if (archive.exceptions & Dezip.EXCEPTIONS.NOFILES) {
                //
                // Note that we only display this message if archiveDB is NOT set (or --verbose IS set), because
                // if this is a nested archive, then it was only opened implicitly, not explicitly.
                //
                nArchiveWarnings++;
                if (argv.verbose || !archiveDB || archivePaths.length > 1) {
                    printf("%s: not an archive\n", archivePath);
                    nArchiveWarnings = -1;      // tells caller nothing more need be said about this "archive"
                }
            }
            else if (archive.warnings.length) {
                //
                // Similarly, if readDirectory() encountered any issues, we already tallied them (above), but we
                // don't display them by default.
                //
                if (argv.verbose || !archiveDB) {
                    printf("%s warnings: %s\n", archivePath, archive.warnings.join("; "));
                }
            }
            else if (!entries.length) {
                printf("%s: no match\n", archivePath);
            }
            if (nArchiveWarnings < 0) {
                throw nArchiveWarnings;
            }
            //
            // Set dstPath as needed (needed for file and/or banner extraction).
            //
            // If you use the search-and-replace form of the dir option (ie, "--dir <search>=<replace>"), the
            // destination path is the source path with the first occurrence of <search> replaced with <replace>.
            //
            // Otherwise, destination path is whatever follows "--dir".  The presence of "--dir" automatically
            // enables extraction.  If no directory is specified but extraction is still enabled via "--extract",
            // then the current directory is used.
            //
            // If multiple archives are being processed and/or extraction was enabled without a specific directory,
            // then extraction will occur inside a directory with the name of the archive (which will be created if
            // necessary).  The only way to bypass that behavior is to process archives one at a time OR explicitly
            // use "." as the directory; the goal is to avoid unintentional merging of extracted files.
            //
            let dstPath, bannerPath;
            let srcPath = path.dirname(archivePath);
            if (argv.dir || argv.extract) {
                dstPath = argv.dir || "";
                let chgPath = dstPath.split("=");
                if (chgPath.length > 1) {
                    if (srcPath.indexOf(chgPath[0]) >= 0) {
                        dstPath = srcPath.replace(chgPath[0], chgPath[1]);
                    } else {
                        printf("warning: source path %s does not contain '%s'\n", srcPath, chgPath[0]);
                        dstPath = chgPath[1];
                    }
                }
                if (dstPath != ".") {
                    if (!dstPath || archivePaths.length > 1) {
                        dstPath = path.join(dstPath, path.basename(archivePath, archiveExt));
                        bannerPath = dstPath + ".TXT";
                    }
                }
                if (!bannerPath) {
                    bannerPath = path.join(dstPath, path.basename(archivePath, archiveExt) + ".TXT");
                }
            }
            if (archive.comment) {
                //
                // A special case: if we're filtering on archives with banners AND banner extraction is enabled
                // (by virtue of --dir without --extract), then we will ALSO track banners and bypass duplicates.
                //
                if (!argv.extract && argv.dir && (filterExceptions & Dezip.EXCEPTIONS.BANNER)) {
                    let hash = crypto.createHash('md5').update(archive.comment).digest('hex');
                    if (bannerHashes[hash]) {
                        bannerHashes[hash]++;
                    } else {
                        bannerHashes[hash] = 1;
                        //
                        // For display purposes, we use archive.comment, which gets translated to UTF-8,
                        // but for extraction purposes, we use archive.commentRaw, which is untranslated.
                        //
                        await fs.mkdir(path.dirname(bannerPath), { recursive: true });
                        try {
                            await fs.writeFile(bannerPath, archive.commentRaw, { encoding: "binary", flag: argv.overwrite? "w" : "wx" });
                            if (argv.verbose) printf("created %s\n", targetPath);
                        } catch (error) {
                            if (error.code == "EEXIST") {
                                //
                                // TODO: Consider ALWAYS warning about the need for --overwrite when a file exists,
                                // since extraction has been enabled.
                                //
                                printf("%s: already exists\n", bannerPath);
                            } else {
                                printf("%s: %s\n", bannerPath, error.message);
                            }
                        }
                    }
                }
            }
            let nEntries = 0, heading = false;
            while (nEntries < entries.length) {
                let entry = entries[nEntries++];
                let header = entry.dirHeader || entry.fileHeader;
                let entryAttr = (header.attr || 0) & 0xff;
                //
                // TODO: I'm not sure I fully understand all the idiosyncrasies of directory entries inside
                // archives; for now, I'm trusting that entries inside one or more directories have those
                // directories explicitly specified in header.name (ie, that header.name is always a full path).
                //
                if (entryAttr & 0x08) {
                    continue;           // skip volume labels
                }
                if ((entryAttr & 0x10) || header.name.endsWith("/")) {
                    continue;           // skip directory entries
                }
                //
                // While it might seem odd to print the archive heading inside the entry loop, if you've enabled
                // recursive archive processing, we need to be able to reprint it on return from a recursive call;
                // otherwise, we may give the mistaken impression that subsequent entries are part of the previous
                // archive.
                //
                // The obvious alternative would be to process all non-recursive entries first, followed by a
                // separate entry loop to process all the recursive entries.  But that wastes time and resources,
                // because the best time to process a recursive entry is when we already have its buffered data in
                // hand (and we WILL have it in hand when extracting or even just testing files in the archive).
                //
                if (!heading) {
                    if (argv.banner && archive.comment || argv.list || archivePaths.length > 1) {
                        if (argv.list) printf("\n");
                        printf("%s%s\n", archivePath, nArchiveFiles? " (continued)" : "");
                    }
                    //
                    // We also refer to the archive comment as the archive's "banner", which is an archive
                    // filtering condition (--filter banner), but if you also want to SEE the banners, then
                    // you must also specify --banner.
                    //
                    if (argv.banner && archive.comment && !nArchiveFiles) {
                        printf("%s\n", archive.comment);
                    }
                    if (argv.list) {
                        printf("\nFilename        Length   Method       Size  Ratio   Date       Time       CRC\n");
                        printf(  "--------        ------   ------       ----  -----   ----       ----       ---\n");
                    }
                    heading = true;
                }
                nTotalFiles++;
                nArchiveFiles++;
                let db, writeData;
                let printed = false;
                let targetFile, targetPath;
                let recurse = (argv.recurse && header.name.match(/^(.*)(\.ZIP|\.ARC)$/i));
                if ((argv.extract || argv.dir && !(filterExceptions & Dezip.EXCEPTIONS.BANNER)) && !recurse) {
                    writeData = async function(db) {
                        if (db) {
                            if (!targetFile) {
                                targetPath = path.join(dstPath, header.name);
                                //
                                // NOTE: Use of the "recursive" option also disables errors if the director(ies) exist.
                                //
                                await fs.mkdir(path.dirname(targetPath), { recursive: true });
                                try {
                                    targetFile = await fs.open(targetPath, argv.overwrite? "w" : "wx");
                                    if (argv.verbose) printf("created %s\n", targetPath);
                                } catch (error) {
                                    if (error.code == "EEXIST") {
                                        //
                                        // TODO: Consider ALWAYS warning about the need for --overwrite when a file exists,
                                        // since extraction has been enabled.
                                        //
                                        printf("%s: already exists\n", targetPath);
                                    } else {
                                        printf("%s: %s\n", targetPath, error.message);
                                    }
                                    return false;
                                }
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
                if (argv.dir || argv.extract || argv.test || recurse) {
                    if (argv.debug) {
                        printf("reading %s\n", header.name);
                        printed = true;
                    }
                    db = await dezip.readFile(archive, entry, writeData);
                }
                nArchiveWarnings += entry.warnings.length? 1 : 0;
                if (argv.list) {
                    let method = header.method < 0? LegacyArc.methodNames[-(header.method + 2)] : LegacyZip.methodNames[header.method];
                    if (header.flags & Dezip.FileHeader.fields.flags.ENCRYPTED) {
                        method += '*';
                    }
                    let ratio = header.size > header.compressedSize? Math.round(100 * (header.size - header.compressedSize) / header.size) : 0;
                    let name = path.basename(header.name);
                    if (name.length > 14) {
                        name = "…" + name.slice(-13);
                    }
                    let comment = header.comment || (name == header.name? "" : header.name);
                    if (entry.warnings.length) {
                        let warnings = entry.warnings;
                        //
                        // Let's "dedupe" the warnings; we shouldn't be decoding anything more than once, but some
                        // of the data structures we decode (eg, DirHeaders and FileHeaders) are inherently redundant,
                        // so any warnings in one will probably be in the other.
                        //
                        for (let i = 0; i < warnings.length; i++) {
                            let j = warnings.indexOf(warnings[i], i + 1);
                            if (j >= 0) {
                                warnings.splice(j, 1);
                            }
                        }
                        comment = '[' + warnings.join("; ") + ']';
                    }
                    if (comment.length) comment = "  " + comment;
                    printf("%-14s %7d   %-9s %7d   %3d%%   %T   %0*x%s\n",
                            name, header.size, method, header.compressedSize, ratio, header.modified, archive.type == Dezip.TYPE_ARC? 4 : 8, header.crc, comment);
                }
                else if (argv.debug && !printed) {
                    printf("listing %s\n", header.name);
                }
                if (recurse && db) {
                    let [nFiles, nWarnings] = await processArchive(path.join(srcPath, path.basename(archivePath, archiveExt), header.name), db);
                    if (nFiles) {
                        heading = false;
                    }
                    //
                    // We now propagate all downstream warning totals upstream, so that the main loop can accurately
                    // report which archives are completely free of warnings (any nested archive(s) with warnings are
                    // disqualifying).  For consistency, we'll do the same for file totals as well.
                    //
                    nArchiveFiles += nFiles;
                    nArchiveWarnings += nWarnings;
                }
            }
        } catch (error) {
            if (typeof error != "number") {
                printf("%s: %s\n", archivePath, error.message);
            }
        }
        await dezip.close(archive);
        return [nArchiveFiles, nArchiveWarnings];
    };
    //
    // And finally: the main loop.
    //
    for (let archivePath of archivePaths) {
        let [nFiles, nWarnings] = await processArchive(archivePath);
        if ((argv.list || argv.test) && nFiles && nWarnings >= 0) {
            printf("%s%s: %d file%s, %d warning%s\n", argv.list && nFiles? "\n" : "", archivePath, nFiles, nFiles, nWarnings, nWarnings);
        }
    }
    printf("\n%d archive%s examined, %d file%s processed\n", nTotalArchives, nTotalArchives, nTotalFiles, nTotalFiles);
}

await main(...Format.parseOptions(process.argv, options));
