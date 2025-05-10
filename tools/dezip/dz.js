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
 * Since the archive's DirHeaders appear to have "issues", let's bypass them using -n (aka --nodir)
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
import Disk from "./disk.js";
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

const disk = new Disk(
    {
        fetch,
        open: fs.open
    }
);

const options = {
    "batch": {
        type: "string",
        usage: "--batch [file]",
        description: "process containers listed in file"
    },
    "banner": {
        type: "boolean",
        usage: "--banner",
        alias: "-b",
        description: "display archive comments (banners)"
    },
    "csv": {
        type: "string",
        usage: "--csv [file]",
        description: "output file listings in CSV format"
    },
    "debug": {
        type: "boolean",
        usage: "--debug",
        description: "display debug information",
        internal: true
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
        description: "filter on criteria (see --filter list)",
        options: {
            "list": {
                value: 0,
                description: "list available filters"
            },
            "banner": {
                value: Dezip.EXCEPTIONS.BANNER,
                description: "process only commented archives"
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
                description: "process only archives with the wrong type"
            }
        }
    },
    "list": {
        type: "boolean",
        usage: "--list",
        alias: "-l",
        description: "list contents of specified container(s)"
    },
    "nodir": {
        type: "boolean",
        usage: "--nodir",
        alias: "-n",
        description: "skip archive directory (scan for files)"
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
        usage: "--password [...]",
        alias: ["-g", "-s"],
        description: "decrypt garbled entries using password",
        //
        // The original ARC utility used -g to "garble" entries, whereas PKUNZIP used -s to "scramble" entries;
        // going with --password seems more straightforward, but in honor of the utilities, we also allow -g and -s.
        //
    },
    "path": {
        type: "string",
        usage: "--path [spec]",
        description: "container path specification (eg, \"**/*.zip\")",
    },
    "recurse": {
        type: "boolean",
        usage: "--recurse",
        alias: "-r",
        description: "process containers within containers"
    },
    "test": {
        type: "boolean",
        usage: "--test",
        alias: "-t",
        description: "test contents of specified containers(s)"
    },
    "verbose": {
        type: "boolean",
        usage: "--verbose",
        alias: "-v",
        description: "display additional information"
    },
    "fileID": {
        type: "number",
        usage: "--fileID [id]",
        description: "override file ID (default: 1)",
        internal: true
    },
    "diskID": {
        type: "number",
        usage: "--diskID [id]",
        description: "override disk ID (default: 1)",
        internal: true
    },
    "setID": {
        type: "number",
        usage: "--setID [id]",
        description: "override set ID (default: 1)",
        internal: true
    },
    "help": {
        type: "boolean",
        usage: "--help",
        alias: "-h",
        description: "display this help message",
        handler: function() {
            printf("\nUsage:\n    %s [options] [files]\n", path.basename(process.argv[1]));
            printf("\nProcesses ZIP, ARC, IMG, and JSON containers\n\n");
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
 * enquote(string)
 *
 * @param {string} string
 * @returns {string}
 */
function enquote(string) {
    //
    // Enquote a string for CSV output, but only if necessary.
    //
    // We use the "double-quote" character as the quote character, and escape any double-quotes
    // in the string with another double-quote.
    //
    if (string.indexOf(',') >= 0 || string.indexOf('"') >= 0) {
        string = '"' + string.replace(/"/g, '""') + '"';
    }
    return string;
}

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
    // Before we get started, display any usage errors encountered by parseArgs().
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
    //
    // Build a list of archive files to process, starting with files listed in the batch file, if any.
    //
    if (argv.batch) {
        try {
            let lines = await fs.readFile(argv.batch, "utf8");
            archivePaths = archivePaths.concat(lines.split(/\r?\n/).filter(line => line.length > 0 && !line.startsWith("#")));
        } catch (error) {
            printf("%s\n", error.message);
            nErrors++;
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
    //
    // If CSV output is enabled, then open the specified file for writing.
    //
    let csvFile;
    if (argv.csv) {
        try {
            csvFile = await fs.open(argv.csv, "w");
            //
            // The first three columns come from variables of the same name, and all start at 1,
            // but you can override them with the internal --fileID, --diskID, and --setID options.
            //
            await csvFile.write("fileID,diskID,setID,hash,modified,attr,size,compressed,method,name,path,comment,warnings\n");
        } catch (error) {
            printf("%s: %s\n", argv.csv, error.message);
            nErrors++;
        }
    }
    let fileID = +argv.fileID || 1, diskID = +argv.diskID || 1, setID = argv.setID || 1;
    if (nErrors) {
        return;
    }
    let bannerHashes = {};
    let nTotalArchives = 0, nTotalFiles = 0;
    //
    // Define a function to process an individual archive, which then allows us to recursively process
    // nested archives if --recurse is been specified.
    //
    let processArchive = async function(archivePath, archiveTarget, archiveDB = null, modified = null) {
        let archive;
        let component = dezip, isArchive = true;
        let archiveName = path.basename(archivePath);
        let archiveExt = path.extname(archiveName);
        try {
            nTotalArchives++;
            if (nTotalArchives % 10000 == 0 && !argv.verbose && !argv.list) {
                printf("%d archives processed\n", nTotalArchives);
            }
            let options = {};
            if (modified) {
                options.modified = modified;
            }
            if (argv.password) {
                options.password = argv.password;
            }
            if (archivePath[0] == '~') {
                archivePath = path.join(process.env.HOME, archivePath.slice(1));
            }
            if (archiveExt.match(/(\.img|\.json)$/i)) {
                component = disk;
                isArchive = false;
            }
            archive = await component.open(archivePath, archiveDB, options);
        } catch (error) {
            printf("%s\n", error.message);
            return [0, 1];
        }
        let nArchiveFiles = 0, nArchiveWarnings = 0;
        try {
            let heading = false;
            //
            // We don't have an "official" means of bypassing an archive's DirHeaders, but it's easy
            // to flag the archive as having already scanned them, so that readDirectory() won't bother.
            //
            if (isArchive && argv.nodir) {
                archive.exceptions |= Dezip.EXCEPTIONS.NODIRS;
            }
            let entries = await component.readDirectory(archive, argv.files, filterExceptions, filterMethod);
            if (archive.warnings.length) {
                printf("%s warnings: %s\n", archivePath, archive.warnings.join("; "));
                nArchiveWarnings++;
            }
            else if (archive.exceptions & Dezip.EXCEPTIONS.NOFILES) {
                printf("%s: Unrecognized archive\n", archivePath);
                nArchiveWarnings++;
            } else if (!entries.length) {
                printf("%s: No matches\n", archivePath);
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
                dstPath = archiveTarget || argv.dir || "";
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
                    if (!dstPath || archiveTarget || archivePaths.length > 1) {
                        dstPath = path.join(dstPath, path.basename(archivePath, archiveExt));
                    }
                }
                bannerPath = path.join(argv.dir || "", path.basename(archivePath, archiveExt) + ".BAN");
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
                        // For display purposes, we use archive.comment, which is translated to UTF-8,
                        // but for extraction purposes, we use archive.commentRaw, which is untranslated.
                        //
                        // TODO: Add options to 1) override the input encoding (assumed to be "cp437")
                        // and 2) select the desired output encoding (assumed to be "utf8").
                        //
                        await fs.mkdir(path.dirname(bannerPath), { recursive: true });
                        try {
                            await fs.writeFile(bannerPath, archive.commentRaw, { encoding: "binary", flag: argv.overwrite? "w" : "wx" });
                            if (argv.verbose) printf("created %s\n", targetPath);
                            if (archive.modified) {
                                await fs.utimes(bannerPath, archive.modified, archive.modified);
                            }
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
            let nEntries = 0;
            while (nEntries < entries.length) {
                let entry = entries[nEntries++];
                let entryAttr = (entry.attr || 0) & 0xff;
                //
                // TODO: I'm not sure I fully understand all the idiosyncrasies of directory entries inside
                // archives; for now, I'm trusting that entries inside one or more directories have those
                // directories explicitly specified in entry.name (ie, that entry.name is always a full path).
                //
                if (entryAttr & 0x08) {
                    continue;           // skip volume labels
                }
                if ((entryAttr & 0x10) || entry.name.endsWith("/")) {
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
                    if (argv.banner && archive.comment || argv.list || (argv.extract || argv.dir)) {
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
                        printf("\nFilename          Length   Method         Size  Ratio   Date       Time       CRC\n");
                        printf(  "--------          ------   ------         ----  -----   ----       ----       ---\n");
                    }
                    heading = true;
                }
                nTotalFiles++;
                nArchiveFiles++;
                let db, writeData;
                let printed = false;
                let targetFile, targetPath;
                //
                // TODO: Consider whether we should include IMG and JSON files in the list of containers
                // to process recursively.  For now, we're only doing that for ZIP and ARC files.  Currently,
                // I do not not, because those extensions tend be used more broadly for other purposes.
                //
                let recurse = (argv.recurse && entry.name.match(/^(.*)(\.zip|\.arc)$/i));
                //
                // Define a writeData() function within processArchive() to receive data ONLY if extraction
                // has been enabled; this will take care of writing the received data to the appropriate file.
                //
                if ((argv.extract || argv.dir && !(filterExceptions & Dezip.EXCEPTIONS.BANNER)) && !recurse) {
                    writeData = async function(db) {
                        if (db) {
                            if (!targetFile) {
                                targetPath = path.join(dstPath, entry.name);
                                //
                                // NOTE: Use of the "recursive" option also disables errors if the director(ies) exist.
                                //
                                await fs.mkdir(path.dirname(targetPath), { recursive: true });
                                try {
                                    targetFile = await fs.open(targetPath, argv.overwrite? "w" : "wx");
                                    if (argv.list) {
                                        entry.warnings.unshift(targetPath);
                                    } else {
                                        printf("created %s\n", targetPath);
                                    }
                                } catch (error) {
                                    if (error.code == "EEXIST") {
                                        //
                                        // TODO: Consider ALWAYS warning about the need for --overwrite when a file exists,
                                        // since extraction has been enabled.
                                        //
                                        if (argv.list) {
                                            entry.warnings.unshift(targetPath + " already exists");
                                        } else {
                                            printf("%s already exists\n", targetPath);
                                        }
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
                            if (entry.modified) {
                                await fs.utimes(targetPath, entry.modified, entry.modified);
                            }
                            return true;
                        }
                        return false;
                    };
                }
                if (argv.csv || argv.dir || argv.extract || argv.test || recurse) {
                    if (argv.debug) {
                        printf("reading %s\n", entry.name);
                        printed = true;
                    }
                    db = await component.readFile(archive, entry.index, writeData);
                }
                nArchiveWarnings += entry.warnings.length? 1 : 0;
                let method = entry.method < 0? LegacyArc.methodNames[-(entry.method + 2)] : LegacyZip.methodNames[entry.method];
                if (entry.flags & Dezip.FileHeader.fields.flags.ENCRYPTED) {
                    method += '*';
                }
                if (argv.list) {
                    let ratio = entry.size > entry.compressedSize? Math.round(100 * (entry.size - entry.compressedSize) / entry.size) : 0;
                    let name = path.basename(entry.name);
                    if (name.length > 14) {
                        name = "…" + name.slice(-13);
                    }
                    let comment = entry.comment || (name == entry.name? "" : entry.name);
                    if (entry.warnings.length) {
                        comment = '[' + entry.warnings.join("; ") + ']';
                    }
                    if (comment.length) comment = "  " + comment;
                    printf("%-14s %9d   %-9s %9d   %3d%%   %T   %0*x%s\n",
                            name, entry.size, method, entry.compressedSize, ratio, entry.modified, archive.type == Dezip.TYPE_ARC? 4 : 8, entry.crc, comment);
                }
                else if (argv.debug && !printed) {
                    printf("listing %s\n", entry.name);
                }
                if (argv.csv) {
                    let hash = db? crypto.createHash('md5').update(db.buffer).digest('hex') : "00000000000000000000000000000000";
                    let warnings = entry.warnings.length? entry.warnings.join("; ") : "";
                    let comment = entry.comment || "";
                    //
                    // CSV fields: fileID,diskID,setID,hash,modified,attr,size,compressed,method,name,path,comment,warnings
                    //
                    // Instead of outputting archivePath as-is, let's see if argv.path contains any wildcards;
                    // if so, then convert argv.path to a regex, change the asterisks to "[^/]*", delete all the
                    // remaining characters, then use that regex to search archivePath for a match and remove it.
                    //
                    // For example, if argv.path is:
                    //
                    //      /Volumes/MacSSD/Archives/sets/ibm-wgam-wbiz-collection/**/*.ZIP
                    //
                    // and the current archivePath is:
                    //
                    //    /Volumes/MacSSD/Archives/sets/ibm-wgam-wbiz-collection/download/ibm0000-0009/ibm0001/DESIGN1.ZIP
                    //
                    // then we will reduce archivePath to:
                    //
                    //    /ibm0000-0009/ibm0001/DESIGN1.ZIP
                    //
                    // Thus, you have a crude but effective means of shaving CSV paths down to their essentials.
                    //
                    let entryPath = archivePath;
                    if (argv.path) {
                        let i = argv.path.indexOf('*');
                        if (i >= 0) {
                            let regex = new RegExp(argv.path.slice(0, i) + "[^/]*");
                            entryPath = archivePath.replace(regex, "");
                        }
                    }
                    let line = format.sprintf(
                        "%d,%d,%d,%s,%T,%d,%d,%d,%s,%s,%s,%s,%s\n",
                        fileID++, diskID, setID, hash, entry.modified, entry.attr, entry.size, entry.compressedSize,
                        method, enquote(entry.name), enquote(entryPath), enquote(comment), enquote(warnings)
                    );
                    await csvFile.write(line);
                }
                if (recurse && db) {
                    diskID++;
                    let [nFiles, nWarnings] = await processArchive(path.join(srcPath, path.basename(archivePath), entry.name), dstPath, db, entry.modified);
                    if (nFiles) {
                        heading = false;
                    }
                    //
                    // We now propagate all downstream totals upstream, so that the main loop can accurately
                    // report which archives are completely free of warnings (any nested archive(s) with warnings
                    // are disqualifying).
                    //
                    nArchiveFiles += nFiles;
                    nArchiveWarnings += nWarnings;
                }
            }
        } catch (error) {
            printf("%s: %s\n", archivePath, error.message);
        }
        await component.close(archive);
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
    if (csvFile) {
        await csvFile.close();
    }
}

await main(...Format.parseArgs(process.argv, options));
