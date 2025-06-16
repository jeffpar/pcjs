/**
 * @fileoverview Command-line utility for unpacking ZIP, ARC, IMG, JSON, and ISO containers
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
 *      dz.js -lt https://discmaster.textfiles.com/file/29622/ibm0040-0049/ibm0047.tar/ibm0047/AVC-8.ZIP
 *
 * lists 9 files, two of which trigger warnings due to the --test (-t) option:
 *
 *      Filename        External   Internal   Method   Ratio   Attr   Date       Time       CRC
 *      --------        --------   --------   ------   -----   ----   ----       ----       ---
 *      SAMPSHOW._ST       54082      54082   Store       0%   0x20   1991-05-22 01:03:00   9791da66  [FileHeader name: BVHXGA.DLL]
 *      SAMPSND._AD       350840     318710   Implode     9%   0x20   1991-05-22 01:03:00   e74e80bf  [Missing FileHeader at 54160]
 *      SAMPSND._AU         1690       1690   Store       0%   0x20   1991-05-22 01:03:00   790b9590
 *      SAMPSND2._AD      508760     484636   Implode     5%   0x20   1991-05-22 01:03:00   9351eec9
 *      SAMPSND2._AU        2920       1697   Implode    42%   0x20   1991-05-22 01:03:00   1138d881
 *      SAMPVOIC._AD       52448      50099   Implode     4%   0x20   1991-05-22 01:03:00   1e1a9d7f
 *      SPROTECT.EXE       20627      12461   Implode    40%   0x20   1991-05-22 01:03:00   918616b2
 *      VOICE._AD         428672     410777   Implode     4%   0x20   1991-05-22 01:03:00   3a53989f
 *      VOICE._AU           3190       3190   Store       0%   0x20   1991-05-22 01:03:00   15a9741a
 *
 * Since the archive's DirHeaders appear to have "issues", let's bypass them with --nodir (-n)
 * and rely on a scan of the archive's FileHeaders instead.  Now we see a different set of (8) files:
 *
 *      Filename        External   Internal   Method   Ratio   Attr   Date       Time       CRC
 *      --------        --------   --------   ------   -----   ----   ----       ----       ---
 *      BVHXGA.DLL          4330       2638   Implode    39%   0x00   1991-04-22 09:28:30   39d50b6b
 *      DISPLAY.DLL       424864     161490   Implode    62%   0x00   1991-04-22 09:21:44   d595a00f
 *      EXOS2.DLL          35481      15040   Implode    58%   0x00   1991-06-06 08:59:16   ea2ee879
 *      README.XGA          1199        608   Implode    49%   0x00   1991-06-06 17:02:38   1069fd3d
 *      XGA.DDP              336        211   Implode    37%   0x00   1991-05-30 13:03:58   76513e7e
 *      XGALOAD.DLL         5592       2127   Implode    62%   0x00   1991-06-06 10:01:08   d3fac5b3
 *      XGALOAD0.SYS       14993       3554   Implode    76%   0x00   1991-06-06 11:14:12   d94fd9d5
 *      XGARING0.SYS       15001       3567   Implode    76%   0x00   1991-04-05 11:47:36   ac04a726
 *
 * And there are no warnings.  So judicious use of -n can access otherwise inaccessible content.
 *
 * Interestingly, when you search for "AVC-8.ZIP" on discmaster.textfiles.com, you'll notice that they
 * display the archive's comment (aka "banner"), which comes from the directory, but they don't display
 * the entries in the directory, so perhaps they have some logic that "falls back" to the file headers
 * whenever the directory headers appear corrupt.
 */

import fs from "fs/promises";
import glob from "glob";
import path from "path";
import zlib from "zlib";
import crypto from "crypto";
import Format from "./format.js";
import DZip from "./dzip.js";
import Disk from "./disk.js";
import ISO from "./iso.js";
import { LegacyArc, LegacyZip } from "./legacy.js";

const format = new Format();
const printf = function(...args) {
    let s = format.sprintf(...args);
    process.stdout.write(s);
};

//
// Normally, a client will provide either a fetch interface or open interface, not both; for example,
// browsers don't have access to the file system, so they will provide only fetch.  But as a Node client,
// we DO have both, so we provide both; our open() API defaults to open but will fall back to fetch if
// the filename starts with a network prefix (eg, "http://").
//
// NOTE: While 'fetch' works fine for Node, browsers apparently require 'window.fetch.bind(window)' instead.
//
const dzip = new DZip({
    fetch: fetch,                       // async interface for opening remote files
    open: fs.open,                      // async interface for opening local files
 // inflate: zlib.inflateRaw,           // async interface for ZIP_DEFLATE data
    inflateSync: zlib.inflateRawSync    // sync interface for ZIP_DEFLATE data
});

const disk = new Disk({
    fetch: fetch,
    open: fs.open
});

const iso = new ISO({
    fetch: fetch,
    open: fs.open,
    printf: printf
});

const options = {
    "batch": {
        type: "string",
        usage: "--batch [file]",
        description: "process items listed in file"
    },
    "banner": {
        type: "boolean",
        usage: "--banner",
        alias: "-b",
        description: "display archive comments (banners)"
    },
    "compat": {
        type: "boolean",
        usage: "--compat",
        alias: "-c",
        description: "enable CD-ROM compatibility mode"         // ie, ignore any supplementary (eg, "Joliet") volume descriptors
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
                value: DZip.EXCEPTIONS.BANNER,
                description: "process only commented archives"
            },
            "comment": {
                value: DZip.EXCEPTIONS.COMMENT,
                description: "process only commented entries"
            },
            "encrypted": {
                value: DZip.EXCEPTIONS.ENCRYPTED,
                description: "process only encrypted entries"
            },
            "split": {
                value: DZip.EXCEPTIONS.SPLIT,
                description: "process only split archives"
            },
            "wrong": {
                value: DZip.EXCEPTIONS.WRONGTYPE,
                description: "process only archives with the wrong type"
            }
        }
    },
    "list": {
        type: "boolean",
        usage: "--list",
        alias: "-l",
        description: "list contents of specified item(s)"
    },
    "nodir": {
        type: "boolean",
        usage: "--nodir",
        alias: "-n",
        description: "skip archive directory (scan for files)"
        //
        // Yes, scanning for file entries instead of relying on directory entries goes against ZIP protocol,
        // but sometimes an archive is screwed up or is part of a multi-disk archive that's missing some parts.
        //
        // For ISO containers, this option tells readDirectory() to use the path table to build the directory,
        // instead of relying solely on directory records.  Normally, we ignore the path table, because it's
        // redundant, but using it can improve performance when accessing an ISO image over a network connection.
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
        description: "item path specification (eg, \"**/*.zip\")",
    },
    "pcjs": {
        type: "boolean",
        usage: "--pcjs",
        description: "use PCjs-specific rules when processing disk images",
        internal: true
    },
    "recurse": {
        type: "boolean",
        usage: "--recurse",
        alias: "-r",
        description: "process items within items"
        //
        // NOTE: To avoid any unwanted interplay between --recurse and --files, we ignore any file filter
        // for archives processed recursively.
        //
    },
    "test": {
        type: "boolean",
        usage: "--test",
        alias: "-t",
        description: "test contents of specified items(s)"
    },
    "verbose": {
        type: "boolean",
        usage: "--verbose",
        alias: "-v",
        description: "display additional information"
    },
    "warnings": {
        type: "boolean",
        usage: "--warnings",
        alias: "-w",
        description: "display additional warnings (eg, date errors)",
    },
    "fileID": {
        type: "number",
        usage: "--fileID [id]",
        description: "override file ID (default: 1)",
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
            printf("\nUsage:\n    %s [options] [items]\n", path.basename(process.argv[1]));
            printf("\nProcesses ZIP, ARC, IMG, JSON, ISO containers and other items\n");
            printf("\nOptions:\n");
            for (let key in options) {
                let option = options[key];
                if (option.internal) continue;
                let aliases = Array.isArray(option.alias)? option.alias.join(",") : option.alias;
                printf("    %-18s %s%s\n", option.usage, option.description, aliases? " [" + aliases + "]" : "");
            }
        }
    }
};

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
    if (!string) {
        return "";
    }
    if (string.match(/[\r\n,"]/)) {
        string = '"' + string.replace(/"/g, '""') + '"';
    }
    return string;
}

/**
 * getPhotoInfo(basePath, baseExt)
 *
 * @param {string} basePath
 * @param {string} baseExt
 * @returns {Array} [photoPath, width, height]
 */
async function getPhotoInfo(basePath, baseExt)
{
    const imageExts = ['.jpg', '.png'];
    for (const ext of imageExts) {
        const photoPath = path.join(path.dirname(basePath), path.basename(basePath, baseExt) + ext);
        try {
            //
            // Read file header to determine dimensions (courtesy of CoPilot).
            //
            let width = 0, height = 0;
            const file = await fs.open(photoPath, 'r');
            const stats = await file.stat();
            const buffer = Buffer.alloc(stats.size);
            await file.read(buffer, 0, buffer.length, 0);
            await file.close();
            if (buffer[0] === 0xFF && buffer[1] === 0xD8) {
                //
                // JPEG file: Parse JPEG segments to find SOF marker (Start of Frame)
                //
                let offset = 2; // Skip the initial SOI marker (0xFF, 0xD8)
                while (offset < buffer.length - 8) {
                    //
                    // Check if we've found a marker
                    //
                    if (buffer[offset] === 0xFF) {
                        const markerCode = buffer[offset + 1];
                        //
                        // SOF markers are in range 0xC0-0xCF, excluding 0xC4 (DHT), 0xC8 (JPG), and 0xCC (DAC)
                        //
                        if (markerCode >= 0xC0 && markerCode <= 0xCF &&
                            markerCode !== 0xC4 && markerCode !== 0xC8 && markerCode !== 0xCC) {
                            //
                            // SOF marker found, extract dimensions
                            // Format: FF xx SIZE(2 bytes) PRECISION(1 byte) HEIGHT(2 bytes) WIDTH(2 bytes) ...
                            //
                            height = (buffer[offset + 5] << 8) | buffer[offset + 6];
                            width = (buffer[offset + 7] << 8) | buffer[offset + 8];
                            break;
                        }
                        //
                        // If not an SOF marker, skip this segment using its length
                        //
                        if (markerCode !== 0xFF && markerCode !== 0x00) {
                            //
                            // Segment length includes the 2 bytes for the length field itself
                            //
                            const segmentLength = (buffer[offset + 2] << 8) | buffer[offset + 3];
                            if (segmentLength < 2) break; // Invalid segment length
                            offset += segmentLength + 2;
                        } else {
                            //
                            // Skip padding bytes or continue to next byte
                            //
                            offset++;
                        }
                    } else {
                        offset++;
                    }
                }
            }
            else if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47) {
                //
                // PNG file
                //
                width = (buffer[16] << 24) | (buffer[17] << 16) | (buffer[18] << 8) | buffer[19];
                height = (buffer[20] << 24) | (buffer[21] << 16) | (buffer[22] << 8) | buffer[23];
            }
            return [photoPath, width, height];
        } catch (error) {
            // console.log(error);
        }
    }
    return [null, 0, 0];
}

/**
 * main(argc, argv, errors)
 */
async function main(argc, argv, errors)
{
    printf("dz.js %s\n%s\n\nArguments: %s\n", DZip.VERSION, DZip.COPYRIGHT, argv[0]);
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
    let fromDisk = {};
    let itemPaths = [];
    //
    // Build a list of items to process, starting with items listed in the batch file, if any.
    //
    if (argv.batch) {
        try {
            let items = await fs.readFile(argv.batch, "utf8");
            itemPaths = itemPaths.concat(items.split(/\r?\n/).filter(line => line.length > 0 && !line.startsWith("#")));
            printf("Found %d item(s) in specified batch file\n", itemPaths.length);
        } catch (error) {
            printf("%s\n", error.message);
            nErrors++;
        }
    }
    //
    // Add any items matching --path patterns.
    //
    if (argv.path) {
        let items = glob.sync(argv.path, { /* follow: true, */ nodir: true, nocase: true, ignore: [".*"] });
        //
        // If the path included both .img and .json extensions AND --pcjs was specified, then
        // we check every .img file for a neighboring .json file; if found, then the .img file is
        // removed from the list and the .json file is added to the fromDisk list.
        //
        if (argv.pcjs) {
            for (let i = 0; i < items.length; i++) {
                let itemPath = items[i];
                if (path.basename(itemPath) == "diskettes.json" || path.basename(itemPath) == "diskettes-annotated.json") {
                    items.splice(i--, 1);
                }
                else if (itemPath.endsWith(".img")) {
                    let jsonPath = itemPath.replace(/\/archive\/([^/]*)\.img$/, "/$1.json");
                    if (jsonPath != itemPath && items.includes(jsonPath)) {
                        items.splice(i--, 1);
                        fromDisk[jsonPath] = itemPath;
                    }
                }
            }
        }
        itemPaths = itemPaths.concat(items);
        printf("Found %d item(s) in specified path\n", items.length);
    }
    //
    // Finally, include any explicitly listed items.
    //
    for (let i = 1; i < argv.length; i++) {
        itemPaths.push(argv[i]);
    }
    //
    // If CSV output is enabled, then open the specified file for writing.
    //
    let csvFile;
    if (argv.csv) {
        try {
            csvFile = await fs.open(argv.csv, "a");
            let stats = await fs.stat(argv.csv);
            if (!stats.size) {
                await csvFile.write("fileID,archiveID,setID,hash,modified,newest,entries,attr,size,compressed,method,name,path,disk,photo,dimensions,comment,warnings\n");
            }
        } catch (error) {
            printf("%s: %s\n", argv.csv, error.message);
            nErrors++;
        }
    }
    if (nErrors) {
        return;
    }
    if (argv.warnings) {
        dzip.enableWarnings();
        iso.enableWarnings();
    }
    let bannerHashes = {};
    let fileID = +argv.fileID || 1, setID = argv.setID || 1;
    let nTotalItems = 0, nTotalFiles = 0, nTotalWarnings = 0;
    //
    // Define a function to process an individual archive, which then allows us to recursively process nested
    // archives if --recurse is been specified.
    //
    // Note that processArchive() has evolved into container processing, with the added support for FAT disk
    // and ISO 9660 images (as well as generic file processing, with added support for cataloging any specified
    // files, container or otherwise), so it might be more appropriately named processContainer(), but since its
    // original purpose was processing ZIP and ARC archives, the name has stuck.
    //
    let processArchive = async function(archiveID, archivePath, archiveTarget, archiveDB = null, modified = null) {
        let containerClass;
        let archive, doCSV = false;
        let isArchive = false, isDisk = false;
        let archiveName = path.basename(archivePath);
        let archiveExt = path.extname(archiveName);
        let archivePhoto = null, widthPhoto = 0, heightPhoto = 0;
        if (argv.debug) {
            printf("%s\n", archivePath);
        }
        if (!archiveDB && archiveExt.match(/(\.img|\.json|\.iso|\.mdf|\.bin|\.cdr)$/i)) {
            //
            // A top-level archive (specifically, a disk image) may have an associated photo in the file system.
            //
            [archivePhoto, widthPhoto, heightPhoto] = await getPhotoInfo(archivePath, archiveExt);
        }
        let getCSVLine = function(entry, db) {
            let itemID = entry.source? archiveID : fileID++;
            let entryName = entry.name;
            let entryPath = archivePath;
            let entryPhoto = null, entryDisk = null;
            let entryMethod = entry.methodName || entry.source;
            let comment = entry.comment || "";
            let warnings = entry.warnings.length? entry.warnings.join("; ") : "";
            let hash = db && db.length? crypto.createHash('md5').update(db.buffer).digest('hex') : "";
            let newest = "", entries = 0;
            //
            // If we're being passed an archive object rather than an entry object, then entryName
            // will also be the same as the entryPath; reduce them.
            //
            if (entry.source) {
                DZip.assert(entryName == entryPath);
                entryDisk = fromDisk[entryName];
                if (entryDisk) {
                    entryDisk = path.basename(entryDisk);
                } else {
                    entryDisk = entry.label || "";
                }
                entryName = path.basename(entryName);
                entryPath = path.dirname(entryPath);
                entryPhoto = archivePhoto? path.basename(archivePhoto) : null;
                newest = format.sprintf("%T", new Date(entry.newestFileTime));
                entries = entry.totalFiles;
            }
            //
            // Instead of outputting entryPath as-is, let's see if argv.path contains a "**" pattern;
            // if so, then strip all the path components prior to "**" from entryPath.
            //
            if (argv.path) {
                if (argv.pcjs) {
                    entryPath = path.join("/pcjs", entryPath);
                } else {
                    let doubleWild = argv.path.match(/^(.*?)\/[^/]*\*\*/);
                    if (doubleWild) {
                        let regex = new RegExp("^" + doubleWild[1].replace(/\*/g, "[^/]*"));
                        entryPath = entryPath.replace(regex, "");
                    }
                }
            }
            //
            // CSV fields: fileID,archiveID,setID,hash,modified,newest,entries,attr,size,compressed,method,name,path,disk,photo,dimensions,comment,warnings
            //
            let line = format.sprintf(
                "%d,%d,%d,%s,%T,%s,%d,%d,%d,%d,%s,%s,%s,%s,%s,%s,%s,%s\n",
                itemID, archiveID, setID, hash, entry.modified, newest, entries, entry.attr || 0, entry.size, entry.compressedSize || entry.size,
                entryMethod, enquote(entryName), enquote(entryPath), enquote(entryDisk), enquote(entryPhoto), (entryPhoto && widthPhoto? widthPhoto + 'x' + heightPhoto : ""), enquote(comment), enquote(warnings)
            );
            return line;
        };
        try {
            nTotalItems++;
            if (nTotalItems % 10000 == 0 && !argv.verbose && !argv.list) {
                printf("%d items processed\n", nTotalItems);
            }
            let options = {};
            if (modified) {
                options.modified = modified;
            }
            if (argv.csv && !archiveDB) {
                doCSV = true;
                //
                // NOTE: preload is required if you want hashes of the archives, but it slows things down,
                // so I don't enable it unless you also want a list of the contents.  If there are cases where
                // you want the CSV to have hashes WITHOUT listing the contents, then we'll need a new option.
                //
                options.preload = !!argv.list;
            }
            if (argv.password) {
                options.password = argv.password;
            }
            if (argv.compat) {
                options.compat = true;
            }
            if (argv.nodir) {
                options.nodir = true;
            }
            if (archivePath[0] == '~') {
                archivePath = path.join(process.env.HOME, archivePath.slice(1));
            }
            if (archiveExt.match(/(\.zip|\.arc)$/i)) {
                isArchive = true;
                containerClass = dzip;
            }
            if (archiveExt.match(/(\.img|\.json)$/i)) {
                isDisk = true;
                containerClass = disk;
            }
            if (archiveExt.match(/(\.iso|\.mdf|\.bin|\.cdr)$/i)) {
                isDisk = true;
                containerClass = iso;
            }
            if (!containerClass) {
                throw new Error(`unrecognized archive type (${archiveExt})`);
            }
            archive = await containerClass.open(archivePath, archiveDB, options);
        } catch (error) {
            printf("error opening %s: %s\n", archivePath, error.message);
            return [0, 1];
        }
        let nArchiveFiles = 0, nArchiveWarnings = 0;
        try {
            let entries = [];
            //
            // We don't have an "official" means of bypassing an archive's DirHeaders, but it's easy
            // to flag the archive as having already scanned them, so that readDirectory() won't bother.
            //
            if (isArchive && argv.nodir) {
                archive.exceptions |= DZip.EXCEPTIONS.NODIRS;
            }
            if (isArchive || isDisk) {
                entries = await containerClass.readDirectory(archive, archiveDB? undefined : argv.files, filterExceptions, filterMethod);
                archive.label = containerClass.readLabel(archive);
            }
            if (archive.exceptions & DZip.EXCEPTIONS.NOFILES) {
                archive.warnings.push("Unrecognized archive");
            }
            else if ((isArchive || isDisk) && !entries.length) {
                archive.warnings.push("No entries");
            }
            if (archive.warnings.length && (!archive.volTable || archive.volTable.length)) {
                if (argv.verbose) {
                    printf("%s: %s\n", archivePath, archive.warnings.join("; "));
                } else {
                    printf("%s: %d warning(s) detected\n", archivePath, archive.warnings.length);
                }
                nArchiveWarnings++;
            }
            //
            // Set dstPath as needed (for file and/or banner extraction).
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
                    if (!dstPath || archiveTarget || itemPaths.length > 1) {
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
                if (!argv.extract && argv.dir && (filterExceptions & DZip.EXCEPTIONS.BANNER)) {
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
            let heading = false;
            let printHeading = function() {
                if (!heading && !argv.csv) {
                    if (argv.banner && archive.comment || argv.list || (argv.extract || argv.dir)) {
                        if (argv.list) printf("\n");
                        if (!nArchiveFiles || argv.list) {
                            printf("%s%s%s\n", archivePath, archive.label? ` [${archive.label}]` : "", nArchiveFiles? " (continued)" : "");
                        }
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
                        printf("\nFilename         External    Internal   Method   Ratio   Attr   Date       Time       CRC\n");
                        printf(  "--------         --------    --------   ------   -----   ----   ----       ----       ---\n");
                    }
                    heading = true;
                }
            };
            let nEntries = 0;
            let dirTimestamps = {};
            archive.totalFiles = 0;
            archive.newestFileTime = 0;
            while (nEntries < entries.length) {
                let targetPath;
                let entry = entries[nEntries++];
                let entryAttr = (entry.attr || 0) & 0xff;
                //
                // path.join() doesn't like path elements like "http://" (it considers the double-slash
                // redundant and converts it to a single slash), so we replace all double-slashes with a
                // pipe, and then convert all pipes back into double-slashes after the join.
                //
                let entryPath = path.join(srcPath.replace(/\/\//g, "|"), path.basename(archivePath), entry.name).replace(/\|/g, "//");
                //
                // TODO: Consider an option for including volume labels in the output, for completeness.
                //
                if (entryAttr & 0x08) {
                    continue;           // skip volume labels
                }
                //
                // TODO: I'm not sure I fully understand all the idiosyncrasies of directory entries inside
                // archives and whether, for example, they should always end with a slash; for now, I'm trusting
                // that entries inside one or more directories have those directories explicitly specified in
                // entry.name (ie, entry.name is always a complete relative path).
                //
                if ((entryAttr & 0x10) || entry.name.endsWith("/")) {
                    if (argv.extract || argv.dir) {
                        targetPath = path.join(dstPath, entry.name);
                        dirTimestamps[targetPath] = entry.modified;
                    }
                    continue;           // skip directory entries
                }
                //
                // While it might seem odd to print the archive heading inside the entry loop, if you've enabled
                // recursive archive processing, we need to be able to reprint it on return from a recursive call;
                // otherwise, the output would give the wrong impression that subsequent entries are part of the
                // previous archive.
                //
                // The obvious alternative would be to process all non-recursive entries first, followed by a
                // separate entry loop to process all the recursive entries.  But that wastes time and resources,
                // because the best time to process a recursive entry is when we already have its buffered data in
                // hand (and we WILL have it in hand when extracting or even just testing files in the archive).
                //
                printHeading();
                nTotalFiles++;
                nArchiveFiles++;
                let db, targetFile, writeData, printed = false;
                //
                // TODO: Consider whether we should include IMG and JSON files in the list of containers
                // to process recursively.  For now, we're doing that only for ZIP and ARC files, because
                // IMG and JSON extensions tend be used more broadly for other purposes.
                //
                let recurse = (argv.recurse && entry.name.match(/^(.*)(\.zip|\.arc|\.iso)$/i));
                //
                // Define a writeData() function within processArchive() to receive data ONLY if extraction
                // has been enabled; this will take care of writing the received data to the appropriate file.
                //
                if ((argv.extract || argv.dir && !(filterExceptions & DZip.EXCEPTIONS.BANNER)) && !recurse) {
                    writeData = async function(db, length) {
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
                                        entry.comment = targetPath;
                                    } else if (argv.verbose) {
                                        printf("created %s\n", targetPath);
                                    }
                                } catch (error) {
                                    if (error.code == "EEXIST") {
                                        //
                                        // TODO: Consider ALWAYS warning about the need for --overwrite when a file exists,
                                        // since extraction has been enabled.
                                        //
                                        let warning = targetPath + ": already exists";
                                        if (argv.list) {
                                            entry.warnings.unshift(warning);
                                        } else {
                                            printf("%s\n", warning);
                                        }
                                    } else {
                                        printf("%s: %s\n", targetPath, error.message);
                                    }
                                    return false;
                                }
                            }
                            await targetFile.write(db.buffer, 0, length != undefined? length : db.length);
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
                if ((argv.csv && argv.list) || argv.dir || argv.extract || argv.test || recurse) {
                    if (argv.debug) {
                        printf("reading %s\n", entryPath);
                        printed = true;
                    }
                    db = await containerClass.readFile(archive, entry, writeData);
                    //
                    // Upon reflection, I'm leaving entry.size alone, because readFile() records a warning if
                    // the file header size differs from the DataBuffer size, and any differences between file
                    // and directory header values (in the absence of other warnings) should be noted as well.
                    //
                    //      entry.size = db && db.length || 0;
                    //
                    if (!entry.warnings.length && db && db.length != entry.size) {
                        entry.warnings.push(`Received ${db.length} bytes`);
                    }
                    if (!db && !argv.list) {
                        printf("%s: %s\n", entryPath, entry.warnings.join("; ") || "no data");
                    }
                }
                nArchiveWarnings += entry.warnings.length? 1 : 0;
                entry.methodName = archive.volTable? "None" : (entry.method < 0? LegacyArc.methodNames[-(entry.method + 2)] : LegacyZip.methodNames[entry.method]);
                if (entry.flags & DZip.FileHeader.fields.flags.ENCRYPTED) {
                    entry.methodName += '*';
                }
                if (argv.list) {
                    if (argv.csv) {
                        await csvFile.write(getCSVLine(entry, db));
                    }
                    else {
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
                        printf("%-14s %10d  %10d   %-9s %3d%%   %#04x   %T   %0*x%s\n",
                                name, entry.size, entry.compressedSize, entry.methodName, ratio, entryAttr, entry.modified, archive.type == DZip.TYPE_ARC? 4 : 8, entry.crc, comment);
                    }
                }
                else if (argv.debug && !printed) {
                    printf("listing %s\n", entry.name);
                }
                //
                // Update archive stats.
                //
                let fileTime = entry.modified.getTime();
                if (archive.newestFileTime < fileTime) {
                    archive.newestFileTime = fileTime;
                }
                archive.totalFiles++;
                //
                // Perform recursion 1) if requested and 2) if we have a DataBuffer to recurse into.
                //
                if (recurse && db) {
                    let entryTarget = path.join(dstPath || "", path.dirname(entry.name));
                    let [nFiles, nWarnings] = await processArchive(fileID++, entryPath, entryTarget, db, entry.modified);
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
            //
            // If we squirreled away any directory timestamps, now is the time to set them.
            //
            // This had to be deferred until all other entries were processed, because the simple
            // act of creating entries inside directories modifies the timestamps of those directories,
            //
            for (let dirPath in dirTimestamps) {
                try {
                    //
                    // Generally, entries in dirTimestamps will already exist UNLESS there were no
                    // entries inside the directory (seems uncommon in archives but definitely happens
                    // in disk images).
                    //
                    await fs.mkdir(dirPath, { recursive: true });
                    await fs.utimes(dirPath, dirTimestamps[dirPath], dirTimestamps[dirPath]);
                } catch (error) {
                    printf("%s: %s\n", dirPath, error.message);
                }
            }
            if (doCSV) {
                await csvFile.write(getCSVLine(archive, archive.db));
            }
            //
            // TODO: If argv.list, consider displaying entry totals as well (including the total size of the archive)
            //
        } catch (error) {
            printf("error processing %s: %s\n", archivePath, error.message);
        }
        await containerClass.close(archive);
        return [nArchiveFiles, nArchiveWarnings];
    };
    //
    // And finally: the main loop.
    //
    for (let itemPath of itemPaths) {
        //
        // This was a hack for testing purposes, but it should not be required in general,
        // because it's up to the caller to ensure that all characters in a URL are properly encoded.
        //
        //      if (itemPath.match(/^https?:\/\//)) {
        //          itemPath = itemPath.replace(/#/g, "%23");
        //      }
        //
        // We don't want to try fixing URLs ourselves, because encodeURI() transforms too little, as it
        // considers '#' legitimate, and encodeURIComponent() transforms too much (eg, colons and slashes).
        //
        let [nFiles, nWarnings] = await processArchive(fileID++, itemPath);
        if ((argv.list || argv.test) && !argv.csv && nFiles && nWarnings >= 0 || argv.verbose) {
            printf("%s%s: %d file%s, %d warning%s\n", argv.list && !argv.csv && nFiles? "\n" : "", itemPath, nFiles, nFiles, nWarnings, nWarnings);
        }
        nTotalWarnings += nWarnings;
    }
    if (nTotalItems > 1) {
        printf("\n%d total item%s, %d total file%s, %d total warning%s\n", nTotalItems, nTotalItems, nTotalFiles, nTotalFiles, nTotalWarnings, nTotalWarnings);
    }
    if (csvFile) {
        await csvFile.close();
        if (argv.fileID) {
            printf("Use --fileID=%d --setID=%d for the next CSV\n", fileID, ++setID);
        }
    }
}

await main(...Format.parseArgs(process.argv, options));
