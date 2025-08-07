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
 *      dx.js -lt https://discmaster.textfiles.com/file/29622/ibm0040-0049/ibm0047.tar/ibm0047/AVC-8.ZIP
 *
 * lists 9 files, two of which trigger warnings due to the --test (-t) option:
 *
 *      Filename         External    Internal   Method   Ratio   Attr   Date       Time       CRC
 *      --------         --------    --------   ------   -----   ----   ----       ----       ---
 *      SAMPSHOW._ST        54082       54082   Store       0%   0x20   1991-05-22 01:03:00   9791da66  [FileHeader name: BVHXGA.DLL]
 *      SAMPSND._AD        350840      318710   Implode     9%   0x20   1991-05-22 01:03:00   e74e80bf  [Missing FileHeader at 54160]
 *      SAMPSND._AU          1690        1690   Store       0%   0x20   1991-05-22 01:03:00   790b9590  AVC-8/SAMPSND._AU
 *      SAMPSND2._AD       508760      484636   Implode     5%   0x20   1991-05-22 01:03:00   9351eec9  AVC-8/SAMPSND2._AD
 *      SAMPSND2._AU         2920        1697   Implode    42%   0x20   1991-05-22 01:03:00   1138d881  AVC-8/SAMPSND2._AU
 *      SAMPVOIC._AD        52448       50099   Implode     4%   0x20   1991-05-22 01:03:00   1e1a9d7f  AVC-8/SAMPVOIC._AD
 *      SPROTECT.EXE        20627       12461   Implode    40%   0x20   1991-05-22 01:03:00   918616b2  AVC-8/SPROTECT.EXE
 *      VOICE._AD          428672      410777   Implode     4%   0x20   1991-05-22 01:03:00   3a53989f  AVC-8/VOICE._AD
 *      VOICE._AU            3190        3190   Store       0%   0x20   1991-05-22 01:03:00   15a9741a  AVC-8/VOICE._AU
 *
 *      https://discmaster.textfiles.com/file/29622/ibm0040-0049/ibm0047.tar/ibm0047/AVC-8.ZIP: 9 files, 2 warnings
 *
 * Since the archive's DirHeaders appear to have "issues", let's bypass them with --nodir (-n)
 * and rely on a scan of the archive's FileHeaders instead.  Now we see a different set of (8) files:
 *
 *      Filename         External    Internal   Method   Ratio   Attr   Date       Time       CRC
 *      --------         --------    --------   ------   -----   ----   ----       ----       ---
 *      BVHXGA.DLL           4330        2638   Implode    39%   0x00   1991-04-22 09:28:30   39d50b6b  AVC-8/BVHXGA.DLL
 *      DISPLAY.DLL        424864      161490   Implode    62%   0x00   1991-04-22 09:21:44   d595a00f  AVC-8/DISPLAY.DLL
 *      EXOS2.DLL           35481       15040   Implode    58%   0x00   1991-06-06 08:59:16   ea2ee879  AVC-8/EXOS2.DLL
 *      README.XGA           1199         608   Implode    49%   0x00   1991-06-06 17:02:38   1069fd3d  AVC-8/README.XGA
 *      XGA.DDP               336         211   Implode    37%   0x00   1991-05-30 13:03:58   76513e7e  AVC-8/XGA.DDP
 *      XGALOAD.DLL          5592        2127   Implode    62%   0x00   1991-06-06 10:01:08   d3fac5b3  AVC-8/XGALOAD.DLL
 *      XGALOAD0.SYS        14993        3554   Implode    76%   0x00   1991-06-06 11:14:12   d94fd9d5  AVC-8/XGALOAD0.SYS
 *      XGARING0.SYS        15001        3567   Implode    76%   0x00   1991-04-05 11:47:36   ac04a726  AVC-8/XGARING0.SYS
 *
 *      https://discmaster.textfiles.com/file/29622/ibm0040-0049/ibm0047.tar/ibm0047/AVC-8.ZIP: 8 files, 0 warnings
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
import CSV from "./csv.js";
import Format from "./format.js";
import DZip from "./dzip.js";
import DXC from "./dxc.js";
import BASFile from "./basfile.js";
import DataBuffer from "./db.js";
import { DiskInfo } from "./disk.js";
import { LegacyArc, LegacyZip } from "./legacy.js";

const format = new Format();
const printf = function(...args) {
    let s = format.sprintf(...args);
    process.stdout.write(s);
};
const pause = async function(prompt) {
    if (!process.stdin.isTTY) {
        return false;
    }
    printf("%s", prompt || "Press return to continue...");
    process.stdin.resume();
    return new Promise(resolve => {
        process.stdin.once('data', () => {
            process.stdin.pause();
            printf("\n");
            resolve(true);
        });
    });
};

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
        description: "print archive comments (banners)"
    },
    "compat": {
        type: "boolean",
        usage: "--compat",
        alias: "-c",
        description: "use CD-ROM 8.3 filenames only"    // ie, ignore any supplementary (eg, "Joliet") volume descriptors
    },
    "csv": {
        type: "string",
        usage: "--csv [file]",
        description: "write list of item contents to CSV file"
    },
    "debug": {
        type: "boolean",
        usage: "--debug",
        description: "display debug information",
        internal: true
    },
    "dest": {
        type: "string",
        usage: "--dest [dir]",
        alias: "-d",
        description: "extract files into destination directory",
    },
    "dir": {
        type: "boolean",
        usage: "--dir",
        description: "print directory of item contents"
        //
        // NOTE: Directory listings can be truncated with --truncate.  Also note that if you use --dir
        // instead of --list in conjunction with --csv, the CSV will include the full list of files but
        // WITHOUT reading and hashing their contents.
        //
    },
    "dump": {
        type: "string",
        usage: "--dump [spec]",
        description: "dump contents of matching files"
    },
    "extract": {
        type: "boolean",
        usage: "--extract",
        alias: ["-e", "-x"],
        description: "extract files (implied by --dest)"
    },
    "files": {
        type: "string",
        usage: "--files [spec]",
        description: "filter on matching files (eg, \"*.txt\")"
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
            },
            "unique": {
                value: DXC.EXCEPTIONS.UNIQUE,
                description: "process only unique items (CSV only)"
            }
        }
    },
    "in": {
        type: "string",
        usage: "--in [encoding]",
        description: "set input encoding (default is cp437)"
    },
    "list": {
        type: "boolean",
        usage: "--list",
        alias: "-l",
        description: "print list of item contents"
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
        // For ISO images, this option tells readDirectory() to use the path table to build the directory,
        // instead of relying solely on directory records.  Normally, we ignore the path table, because it's
        // redundant, but using it can improve performance when accessing an ISO image over a network connection.
        //
    },
    "out": {
        type: "string",
        usage: "--out [encoding]",
        description: "set output encoding (default is --in)"
    },
    "overwrite": {
        type: "boolean",
        usage: "--overwrite",
        alias: "-o",
        description: "overwrite existing files on extract"
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
        description: "process matching items (eg, \"**/*.zip\")",
    },
    "pause": {
        type: "boolean",
        usage: "--pause",
        alias: "-p",
        description: "pause after each item until a key is pressed"
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
    },
    "retries": {
        type: "number",
        usage: "--retries [n]",
        description: "number of retries for network requests (default: 3)",
        internal: true
    },
    "test": {
        type: "boolean",
        usage: "--test",
        alias: "-t",
        description: "test contents of all items"
    },
    "truncate": {
        type: "boolean",
        usage: "--truncate",
        description: "truncate directory of contents (see --dir)",
        internal: true
    },
    "type": {
        type: "string",
        usage: "--type [spec]",
        description: "type contents of matching files"
    },
    "update": {
        type: "boolean",
        usage: "--update",
        description: "generate an update script for the Internet Archive",
        internal: true
    },
    "upload": {
        type: "boolean",
        usage: "--upload",
        description: "generate an upload script for the Internet Archive"
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
            printf("\nUsage:\n    %s [option(s)] [item(s)]\n", path.basename(process.argv[1]));
            printf("\nProcesses ZIP, ARC, IMG, ISO, MDF and other container items\n");
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
 * displayFile(name, encoding, db, dump)
 *
 * Display file contents as specified.
 *
 * @param {string|null} name
 * @param {string} encoding
 * @param {DataBuffer} db
 * @param {boolean} [dump]
 */
function displayFile(name, encoding, db, dump = false)
{
    if (name) {
        printf("%s:\n", name);
    }
    if (!dump) {
        printf("%s\n", db.toString(encoding));
        return;
    }
    //
    // Dump the file contents in hex format, with a 4-byte offset at the start of each line,
    // using the same format as "hexdump"; eg:
    //
    //      00000000  50 4b 03 04 0a 00 00 00  00 00 a4 48 da 5a 00 00  |PK.........H.Z..|
    //
    for (let i = 0; i < db.length; i += 16) {
        let line = format.sprintf("%08x  ", i);
        for (let j = 0; j < 16; j++) {
            if (j == 8) {
                line += " ";
            }
            if (i + j < db.length) {
                line += format.sprintf("%02x ", db.buffer[i + j]);
            } else {
                line += "   ";
            }
        }
        line += " |";
        for (let j = 0; j < 16; j++) {
            let c = 32;
            if (i + j < db.length) {
                c = db.buffer[i + j];
                if (c < 32 || c > 126) {
                    c = 46;
                }
            }
            line += format.sprintf("%c", c);
        }
        line += "|";
        printf("%s\n", line);
    }
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
 * getList(text)
 *
 * @param {string} text
 * @returns {Array} (of objects containing 'path' and optional 'photo' and 'thumb' properties)
 */
function getList(text)
{
    let list;
    if (text[0] != '-') {
        list = text.split(/\r?\n/).filter(line => line.length > 0 && !line.startsWith("#")).map(path => ({ path }));
    } else {
        list = [];
        let items = text.split(/(^|\n)- /);
        items.splice(0, 2);
        for (let item of items) {
            item = item.trim();
            if (!item) continue;
            let lines = item.split(/\n/);
            let id = lines[0].trim();
            let fileNames = [], photoNames = [], thumbNames = [];
            for (let i = 1; i < lines.length; i++) {
                let line = lines[i].trim();
                if (line) {
                    let match = line.match(/^([-+]) (.*)$/);
                    if (match) {
                        if (match[1] == "-") {
                            let matchFile = match[2].match(/^([^_].*)(\.iso|\.cdr|\.mdf|\.7z)$/i);
                            if (matchFile) {
                                fileNames.push(matchFile[1] + matchFile[2]);
                            } else {
                                let matchPhoto = match[2].match(/^([^_].*)(\.jpe?g|\.png|\.tiff?)$/i);
                                if (matchPhoto) {
                                    if (matchPhoto[1].endsWith("_thumb")) {
                                        thumbNames.push(matchPhoto[1] + matchPhoto[2]);
                                    } else {
                                        photoNames.push(matchPhoto[1] + matchPhoto[2]);
                                    }
                                }
                            }
                        }
                    }
                    else {
                        printf("warning: unrecognized line in item %s: %s\n", id, line);
                    }
                } else {
                    printf("warning: empty line in item %s\n", id);
                }
            }
            if (!fileNames.length) {
                printf("warning: no file name(s) in item %s\n", id);
                continue;
            }
            for (let fileName of fileNames) {
                let fileURL = "", photoURL = "", thumbURL = "";
                fileURL = "https://archive.org/download/" + id + "/" + encodeURIComponent(fileName);
                //
                // Find a photo in photoNames that has the same base name as fileName.
                //
                let baseName = fileName.replace(/\.(iso|cdr|mdf|7z)$/i, "");
                let photoName = photoNames.find(name => name.startsWith(baseName)) || photoNames[0] ||"";
                let thumbName = thumbNames.find(name => name.startsWith(baseName + "_thumb")) || thumbNames[0] || "";
                if (photoName) {
                    photoURL = "https://archive.org/download/" + id + "/" + encodeURIComponent(photoName);
                }
                if (thumbName) {
                    thumbURL = "https://archive.org/download/" + id + "/" + encodeURIComponent(thumbName);
                }
                list.push({path: fileURL, photo: photoURL, thumb: thumbURL});
            }
        }
    }
    return list;
}

/**
 * isTextFile(name)
 *
 * @param {string} name
 * @returns {number} 0 if false, 1 if true, 2 if BAS file
 */
function isTextFile(name)
{
    const asTextFileExts = [
        ".md",  ".me",  ".bas", ".bat", ".rat", ".asm", ".inc", ".lrf", ".nfo", ".diz",
        ".mak", ".txt", ".xml", ".mac", ".inf", ".skl", ".dat", ".c",   ".h"
    ];
    let ext = path.extname(name).toLowerCase();
    return (asTextFileExts.includes(ext)? 1 : 0) + (ext == ".bas"? 1 : 0);
}

/**
 * main(argc, argv, errors)
 */
async function main(argc, argv, errors)
{
    if (argv.help || argv.verbose) {
        printf("dx.js %s\n%s\n\nArguments: %s\n", DXC.VERSION, DXC.COPYRIGHT, argv[0]);
        if (argv.help) {
            options.help.handler();
        }
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
    // Build a list of items to process, starting with files listed in a batch file.
    //
    let itemList = [], fromPCJS = {}, uploadIDs = [];
    if (argv.batch) {
        try {
            if (argv.batch.match(/\.csv$/i)) {
                let items = 0;
                let csv = new CSV();
                await csv.open(argv.batch);
                do {
                    let row = await csv.getNextRow();
                    if (!row) break;
                    let item = {
                        volume: row.volume.toUpperCase() || "",
                        entries: row.entries || 0,
                        newest: row.newest? new Date(row.newest) : new Date(0),
                        size: row.size? +row.size : 0,
                        path: row.path + "/" + row.name
                    };
                    if (row.photo) {
                        item.photo = row.photo;
                    }
                    if (row.thumb) {
                        item.thumb = row.thumb;
                    }
                    itemList.push(item);
                    items++;
                } while (true);
                await csv.close();
                //
                // If we're generating scripts for the Internet Archive, we want to weed out duplicates first.
                //
                // The process begins by sorting itemList by volume, then by entries, then by newest, and finally by path.
                //
                let cDuplicates = 0;
                if ((argv.upload || argv.update || (filterExceptions & DXC.EXCEPTIONS.UNIQUE)) && csv.hasFields("volume", "entries", "newest", "size")) {
                    itemList.sort((a, b) => {
                        if (a.volume < b.volume) return -1;
                        if (a.volume > b.volume) return 1;
                        if (a.entries < b.entries) return -1;
                        if (a.entries > b.entries) return 1;
                        if (a.newest.getTime() < b.newest.getTime()) return -1;
                        if (a.newest.getTime() > b.newest.getTime()) return 1;
                        if (a.path < b.path) return 1;
                        if (a.path > b.path) return -1;
                        return 0;
                    });
                    //
                    // Let the weeding begin.
                    //
                    let lastItem = null;
                    itemList = itemList.filter(item => {
                        if (!lastItem || item.volume != lastItem.volume || item.entries != lastItem.entries || item.newest.getTime() != lastItem.newest.getTime()) {
                            lastItem = item;
                            return argv.upload || argv.update? !item.path.match(/^https?:\/\//) : true;
                        }
                        if (argv.verbose && item.path.match(/^https?:\/\//) && lastItem.path.match(/^https?:\/\//)) {
                            printf("possible website duplicates:\n\t%s\n\t%s\n", item.path, lastItem.path);
                        }
                        if (argv.verbose && argv.debug && item.size != lastItem.size) {
                            printf("size mismatch in presumed duplicates:\n\t%s (%d)\n\t%s (%d)\n", item.path, item.size, lastItem.path, lastItem.size);
                        }
                        lastItem = item;
                        cDuplicates++;
                        return false;
                    });
                }
                if (!argv.upload && !argv.update || argv.verbose) {
                    printf("Found %d item%s in %s (%d duplicate%s removed)\n", itemList.length, itemList.length, path.basename(argv.batch), cDuplicates);
                }
            } else {
                let text = await fs.readFile(argv.batch, "utf8");
                let list = getList(text);
                itemList = itemList.concat(list);
                if (!argv.upload && !argv.update || argv.verbose) {
                    printf("Found %d item%s in %s\n", list.length, list.length, path.basename(argv.batch));
                }
            }
        } catch (error) {
            printf("%s\n", error.message);
            nErrors++;
        }
    }
    //
    // Add any items matching --path patterns.
    //
    if (argv.path) {
        if (argv.path[0] == '~') {
            argv.path = path.join(process.env.HOME, argv.path.slice(1));
        }
        let items = glob.sync(argv.path, { /* follow: true, */ nodir: true, nocase: true, ignore: [".*"] });
        //
        // If the path included both .img and .json extensions AND --pcjs was specified, then
        // we check every .img file for a neighboring .json file; if found, then the .img file is
        // removed from the list and the .json file is added to the fromPCJS list.
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
                        fromPCJS[jsonPath] = itemPath;
                    }
                }
            }
        }
        itemList = itemList.concat(items.map(path => ({ path })));
        printf("Found %d item%s in specified path\n", items.length);
    }
    //
    // Finally, include any explicitly listed items.
    //
    for (let i = 1; i < argv.length; i++) {
        itemList.push({path: argv[i]});
    }
    let bannerHashes = {};
    let listing = argv.dir || argv.list;
    let fileID = +argv.fileID || 1, setID = argv.setID || 1;
    let nTotalItems = 0, nTotalFiles = 0, nTotalWarnings = 0;
    let incoding = (argv.in || "cp437").replace(/[-_]/g, "").toLowerCase();
    let outcoding = (argv.out || (argv.type? "utf8" : incoding)).replace(/[-_]/g, "").toLowerCase();
    if (outcoding == "cp437") {
        outcoding = "binary";               // "cp437" is a legacy encoding, so we use "binary" instead
    }
    //
    // Normally, a client will provide either a fetch interface or open interface, not both; for example,
    // browsers don't have access to the file system, so they will provide only fetch.  But as a Node client,
    // we DO have both, so we provide both; our open() API defaults to open but will fall back to fetch if
    // the filename starts with a network prefix (eg, "http://").
    //
    // NOTE: While 'fetch' works fine for Node, browsers apparently require 'window.fetch.bind(window)' instead.
    //
    let dxc = new DXC({
        fetch: fetch,                       // async interface for opening remote files
        open: fs.open,                      // async interface for opening local files
     // inflate: zlib.inflateRaw,           // async interface for ZIP_DEFLATE data
        inflateSync: zlib.inflateRawSync    // sync interface for ZIP_DEFLATE data
    },
    {
        encoding: incoding,                 // input encoding (default is "cp437")
        debug: argv.debug                   // enable debug mode (includes additional warnings)
    });
    //
    // If CSV output is enabled, then open the specified file for writing.
    //
    let csv;
    if (argv.csv) {
        try {
            csv = await fs.open(argv.csv, "a");
            let stats = await fs.stat(argv.csv);
            if (!stats.size) {
                let heading = dxc.formatHeading(DXC.FORMAT.CSV);
                await csv.write(heading);
            }
        } catch (error) {
            printf("%s: %s\n", argv.csv, error.message);
            nErrors++;
        }
    }
    if (nErrors) {
        return;
    }
    let dumpItem = false;
    if (!itemList.length && argv.dump) {
        itemList.push({path: argv.dump});
        dumpItem = true;
        delete argv.dump;
    }
    //
    // Define a function to process an individual container item, which then allows us to recursively process
    // nested containers if --recurse is been specified.
    //
    let processItem = async function(itemID, itemPath, itemPhoto = null, itemThumb = null, itemTarget = null, itemDB = null, modified = null) {
        let handle;
        let heading = false;
        let prevPath = "";
        let dirListing = argv.dir;
        let dirLimit = argv.truncate? 11 : -1;
        let nDirFiles = 0, nDirBytes = 0;
        let itemName = path.basename(itemPath);
        let itemExt = path.extname(itemName);
        let widthPhoto = 0, heightPhoto = 0;
        if (argv.debug) {
            printf("%s\n", itemPath);
        }
        //
        // Generate paths we may need later (for file and/or banner extraction).
        //
        // If you use the search-and-replace form of the dest option (ie, "--dest <search>=<replace>"), the
        // destination path is the source path with the first occurrence of <search> replaced with <replace>.
        //
        // Otherwise, destination path is whatever follows "--dest".  The presence of "--dest" automatically
        // enables extraction.  If no directory is specified but extraction is still enabled via "--extract",
        // then the current directory is used.
        //
        // If multiple items are being processed and/or extraction was enabled without a specific directory,
        // then extraction will occur inside a directory with the name of the item (which will be created if
        // necessary).  The only way to bypass that behavior is to process items one at a time OR explicitly
        // use "." as the directory; the goal is to avoid unintentional merging of extracted files.
        //
        let srcPath = itemPath;
        try {
            srcPath = decodeURIComponent(srcPath);
        } catch (e) {}          // Interesting that a simple function like this can throw a URIError...
        let srcName = path.basename(srcPath);
        let srcBase = path.basename(srcPath, itemExt);
        srcPath = path.dirname(srcPath);
        let dstPath = itemTarget || argv.dest || "";
        let dstDefault = !dstPath;
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
            if (!dstPath || itemTarget || itemList.length > 1) {
                //
                // TODO: Consider an option that determines whether or not to strip the item extension
                // from the destination path.  The danger is that it can result in extraction conflicts,
                // because a folder may contain multiple items with the same name but different extensions
                // (eg, "CONTEST.ZIP" and "CONTEST.ARC") or there might simply be another file or folder
                // with a conflicting name (eg, "CONTEST").
                //
                //      dstPath = path.join(dstPath, srcBase);
                //
                dstPath = path.join(dstPath, itemDB? srcName : srcBase);
            }
        }
        let bannerPath = path.join(argv.dest || "", srcBase + ".BAN");
        if (!itemPhoto && !itemDB && itemExt.match(/\.(img|json|iso|mdf|bin|cdr)$/i)) {
            //
            // A top-level item (specifically, a disk image) may have an associated photo in the file system.
            //
            [itemPhoto, widthPhoto, heightPhoto] = await getPhotoInfo(itemPath, itemExt);
        }
        let printHeading = function(entry, isFile, isNested) {
            let entryPath, fullPath = "";
            let continued = nItemFiles > 0? " (continued)" : "";
            if (entry.target) {
                entryPath = path.dirname(entry.target);
            } else {
                entryPath = path.dirname(entry.name);
                if (entryPath == ".") {
                    entryPath = "";
                }
                if (!entryPath) {
                    entryPath = handle.label;
                } else {
                    entryPath = handle.label + path.sep + entryPath;
                }
            }
            if (!prevPath && !isNested) {
                fullPath = `    [${itemPath}]`;
            }
            if (prevPath != entryPath) {
                if (argv.truncate) {
                    dirLimit = nItemFiles >= 100? 0 : 11;
                }
                prevPath = entryPath;
                if (dirListing) {
                    if (heading) {
                        continued = "";
                    }
                    heading = false;
                }
            }
            if (!heading && (dirLimit || !isFile) && !argv.csv) {
                let itemPrinted = false;
                if (listing || argv.banner && handle.item.comment) {
                    if (listing || !nItemFiles) {
                        if (dirListing && dirLimit < 0 && nDirFiles) {
                            printf("%8d file%s %10d byte%s\n", nDirFiles, nDirFiles == 1? " " : "s", nDirBytes);
                            nDirFiles = nDirBytes = 0;
                        }
                        if (dirListing && dirLimit) {
                            printf("\nDirectory of %s%s%s\n", entryPath, fullPath, continued);
                        }
                        if (!dirListing) {
                            printf("\n%s%s\n", itemPath, continued);
                        }
                        if (argv.truncate) {
                            dirLimit = nItemFiles >= 100? 0 : 11;
                        }
                        itemPrinted = true;
                    }
                }
                if (handle.item.warnings.length && (!handle.item.volTable || handle.item.volTable.length)) {
                    if (argv.verbose) {
                        printf("%s\n%s\n", itemPrinted? "" : entryPath, handle.item.warnings.join("\n"));
                    } else {
                        printf("%s: %d issue%s detected\n", itemPrinted? "\nWarning" : entryPath, handle.item.warnings.length);
                    }
                    nItemWarnings += handle.item.warnings.length;
                }
                //
                // We also refer to the archive comment as the archive's "banner", which is an archive
                // filtering condition (--filter banner), but if you also want to SEE the banners, then
                // you must also specify --banner.
                //
                if (argv.banner && handle.item.comment && !nItemFiles) {
                    printf("%s\n", handle.item.comment);
                }
                if (listing) {
                    if (dirListing) {
                        if (dirLimit < 0) {
                            printf("\n");
                        }
                    }
                    else {
                        printf("\n%s", dxc.formatHeading());
                    }
                }
            }
            heading = true;
            if (isFile) {
                nDirFiles++;
                nDirBytes += entry.size;
                nItemFiles++;
                nTotalFiles++;
            }
        };
        let printScript = function() {
            //
            // I expect item.name to refer to a file with a path of the form:
            //
            //      .../[publisher]/[category]/filename.ext
            //
            // So let's extract the publisher and category values from the path now.
            //
            let pathParts = path.dirname(handle.item.name).split(path.sep);
            let publisher = pathParts[pathParts.length - 2] || "";      // eg. Microsoft
            let category = pathParts[pathParts.length - 1] || "";       // eg. TechNet
            let id = "";
            if (publisher) {
                id += publisher.toLowerCase().replace(/ /g, '-');
                if (id == "microsoft") id = "ms";
                id += '-';
            }
            if (category) {
                id += category.toLowerCase().replace(/ /g, '-') + '-';
            }
            let label = (handle.label || srcBase).replace(/ /g, "-").toUpperCase();
            id += label.toLowerCase();
            let origID = id, nextID = 1;
            while (uploadIDs.includes(id)) {
                id = origID + "-" + nextID++;
            }
            uploadIDs.push(id);
            let title = format.sprintf("%s %s %s Disc (%F %Y)", publisher, category, label, handle.item.modified).trim();
            let files = [], targetName = label + itemExt;
            printf("# %s %s\n", argv.upload? "uploading" : "updating", path.basename(handle.item.name));
            printf("cp \"%s\" %s\n", handle.item.name, targetName);
            files.push(targetName);
            if (argv.upload && itemPhoto) {
                let match = itemPhoto.match(/^(.*?)(\.[^.]+)$/);
                if (match) {
                    let targetExt = match[2].toLowerCase();
                    let targetName = label + targetExt;
                    printf("cp \"%s/%s\" %s\n", path.dirname(handle.item.name), itemPhoto, targetName);
                    files.push(targetName);
                }
            }
            printf("node dx.js \"%s%s\" --dir --truncate > desc.txt\n", label, itemExt);
            files.unshift("desc.txt");
            printf("while true; do\n");
            if (argv.update) {
                printf("    python update.py %s \"%s\" desc.txt\n", id, title);
            } else {
                printf("    python upload.py %s \"%s\" %Y-%02M-%02D \"%s\" \"%s\" %s\n", id, title, handle.item.modified, handle.item.modified, handle.item.modified, publisher, category, files.join(" "));
            }
            printf("    if [ $? -eq 0 ]; then break; fi\n");
            printf("    sleep 300\n");
            printf("done\n");
            printf("rm %s\n", files.join(" "));
        };
        nTotalItems++;
        if (nTotalItems % 10000 == 0 && !argv.verbose && !argv.list) {
            printf("%d item%s processed\n", nTotalItems);
        }
        let options = {};
        if (modified) {
            options.modified = modified;
        }
        if (argv.csv && !itemDB) {
            //
            // NOTE: preload is required if you want hashes of the items themselves, not just the files
            // inside the items, but it slows things down, so I don't enable it unless you also want a list
            // of the contents.  If there are cases where you want the CSV to have hashes WITHOUT listing
            // the contents, then we'll need a new option.
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
        if (dumpItem) {
            options.preload = true;
            options.agnostic = true;
        }
        if (itemPath[0] == '~') {
            itemPath = path.join(process.env.HOME, itemPath.slice(1));
        }
        let retries = +argv.retries || 3;
        do {
            try {
                handle = await dxc.open(itemPath, itemDB, options);
                break;
            } catch (error) {
                if (!retries || error.message.match(/^(Unrecognized|ENOENT)/)) {
                    printf("error opening %s: %s\n", itemPath, error.message);
                    return [0, -1];
                }
                printf("retrying %s...\n", itemPath);
            }
        } while (retries-- > 0);
        let nItemFiles = 0, nItemWarnings = 0;
        try {
            let entries = [];
            // if (!handle.isArchive && !argv.recurse && !itemDB && listing) {
            //     dirListing = true;
            // }
            if (handle.isArchive || handle.isDisk) {
                //
                // We don't have an "official" means of bypassing an archive's DirHeaders, but it's easy
                // to flag the archive as having already scanned them, so that readDirectory() won't bother.
                //
                if (argv.nodir) {
                    handle.item.exceptions |= DZip.EXCEPTIONS.NODIRS;
                }
                //
                // This next line is just shorthand for saying that if we're recursively processing items,
                // then any file filters will be ignored at the top level (ie, file filters will be applied
                // to items' contents, not the items themselves), and conversely, if we're not recursing,
                // then any file filters will only be applied to the items themselves.
                //
                let filterFiles = (!argv.recurse == !itemDB? argv.files: undefined);
                entries = await dxc.readDirectory(handle, filterFiles, filterExceptions, filterMethod);
                if (handle.item.exceptions & DZip.EXCEPTIONS.NOFILES) {
                    handle.item.warnings.push("Unrecognized archive");
                }
                else if ((handle.isArchive || handle.isDisk) && !entries.length && !filterFiles && !filterExceptions && filterMethod == -1) {
                    handle.item.warnings.push("No entries");
                }
            }
            if (handle.item.comment) {
                //
                // A special case: if we're filtering on archives with banners AND banner extraction is enabled
                // (by virtue of --dest without --extract), then we will ALSO track banners and bypass duplicates.
                //
                if (!argv.extract && argv.dest && (filterExceptions & DZip.EXCEPTIONS.BANNER)) {
                    let hash = crypto.createHash('md5').update(handle.item.comment).digest('hex');
                    if (bannerHashes[hash]) {
                        bannerHashes[hash]++;
                    } else {
                        bannerHashes[hash] = 1;
                        //
                        // For display purposes, we use item.comment, which is translated to UTF-8,
                        // but for extraction purposes, we use item.commentRaw, which is untranslated.
                        //
                        await fs.mkdir(path.dirname(bannerPath), { recursive: true });
                        try {
                            await fs.writeFile(bannerPath, outcoding == "utf8"? handle.item.comment : handle.item.commentRaw, { encoding: "binary", flag: argv.overwrite? "w" : "wx" });
                            if (argv.verbose) printf("created %s\n", entry.target);
                            if (handle.item.modified) {
                                await fs.utimes(bannerPath, handle.item.modified, handle.item.modified);
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
            if (argv.csv) {
                //
                // Update item stats
                //
                let item = handle.item;
                item.newestFileTime = 0;
                item.totalFiles = entries.length;
                for (let entry of entries) {
                    let fileTime = entry.modified.getTime();
                    if (item.newestFileTime < fileTime) {
                        item.newestFileTime = fileTime;
                    }
                }
                item.volume = handle.label;
                if (!item.volume) {
                    item.volume = fromPCJS[item.name];
                    if (item.volume) {
                        item.volume = path.basename(item.volume);
                    }
                }
                //
                // Instead of outputting handle.name as-is, let's see if argv.path contains wildcards;
                // if so, then strip all the path components prior to them from handle.name.
                //
                if (argv.path) {
                    if (argv.pcjs) {
                        handle.name = path.join("/pcjs", handle.name);
                    } else {
                        let matchWild = argv.path.match(/^(.*?\/)[^/]*\*/);
                        if (matchWild) {
                            let regex = new RegExp("^" + matchWild[1].replace(/\*/g, "[^/]*"));
                            handle.name = handle.name.replace(regex, "");
                        }
                    }
                }
                //
                // Do a photo/thumb lookup and attach the results (if any) to the item
                //
                if (itemPhoto) {
                    item.photo = itemPhoto;
                    if (item.photo && !item.photo.match(/^https?:\/\//)) {
                        item.photo = path.basename(item.photo);
                    }
                    if (widthPhoto) {
                        item.widthPhoto = widthPhoto;
                        item.heightPhoto = heightPhoto;
                    }
                }
                if (itemThumb) {
                    item.thumb = itemThumb;
                    if (item.thumb && !item.thumb.match(/^https?:\/\//)) {
                        item.thumb = path.basename(item.thumb);
                    }
                }
                item.fileID = itemID;
                item.itemID = itemID;
                item.setID = setID;
                item.hash = (item.db && item.db.length? crypto.createHash('md5').update(item.db.buffer).digest('hex') : "");
                let line = dxc.formatEntry(handle, item, DXC.FORMAT.CSV);
                await csv.write(line);
            }
            if (argv.upload || argv.update) {
                printScript();
            }
            if (dumpItem) {
                displayFile(handle.item.name, outcoding, handle.item.db, true);
            }
            let nEntries = 0;
            let dirTimestamps = {};
            while (nEntries < entries.length) {
                let entry = entries[nEntries++];
                let entryAttr = (entry.attr || 0) & 0xff;
                //
                // path.join() doesn't like path elements like "http://" (it considers the double-slash
                // redundant and converts it to a single slash), so we replace all double-slashes with a
                // pipe, and then convert all pipes back into double-slashes after the join.
                //
                let dirPath = dstDefault && handle.label || dstPath;
                let entryPath = path.join(srcPath.replace(/\/\//g, "|"), srcName, entry.name).replace(/\|/g, "//");
                entry.target = path.join(dirPath, entry.name);
                //
                // TODO: Consider an option for including volume labels in the output, for completeness.
                //
                if (entryAttr & 0x08) {
                    continue;                           // skip volume labels
                }
                //
                // TODO: I'm not sure I fully understand all the idiosyncrasies of directory entries inside
                // archives and whether, for example, they should always end with a slash; for now, I'm trusting
                // that entries inside one or more directories have those directories explicitly specified in
                // entry.name (ie, entry.name is always a complete relative path).
                //
                if ((entryAttr & DiskInfo.ATTR.SUBDIR) || entry.name.endsWith("/")) {
                    if (argv.extract || argv.dest) {
                        dirTimestamps[entry.target] = entry.modified;
                    }
                    if (!dirListing || argv.csv) {
                        continue;                       // skip directory entries
                    }
                    entryAttr |= DiskInfo.ATTR.SUBDIR;  // ensure all directory entries are consistently marked
                }
                //
                // While it might seem odd to print the item heading inside the entry loop, if you've enabled
                // recursive item processing, we want the option of reprinting it on return from a recursive call;
                // otherwise, the output might give the wrong impression that subsequent entries are part of the
                // previous item.
                //
                // One obvious alternative would be to process all non-recursive entries first, followed by a
                // separate entry loop to process all the recursive entries.  But that wastes time and resources,
                // because the best time to process a recursive entry is when we already have its buffered data in
                // hand (and we WILL have it in hand when extracting or even just testing files in the item).
                //
                printHeading(entry, !(entryAttr & DiskInfo.ATTR.SUBDIR), !!itemDB);
                //
                // TODO: Consider whether we should include .IMG and .JSON files in the list of images
                // to process recursively.  For now, we're doing that only for .ZIP and .ARC files, because
                // .IMG and .JSON (and .ISO) extensions tend be used more broadly for other purposes.
                //
                let db, targetFile, writeData, dumpFile = false;
                let recurse = (argv.recurse && entry.name.match(/^(.*)\.(zip|arc)$/i));
                let readFile = argv.csv && argv.list || argv.dest || argv.extract || argv.test || recurse;
                if (!(entryAttr & DiskInfo.ATTR.SUBDIR)) {
                    //
                    // Certain files may require special handling....
                    //
                    // If incoding is "cp437" and outcoding is "utf8", that implies certain text files
                    // should be converted, and in the case of BAS files, conversion requires the entire
                    // file be buffered, so we create a DataBuffer (targetData) to capture the file
                    // contents until reading is complete.
                    //
                    let targetData = null;
                    let convertText = incoding == "cp437" && outcoding == "utf8" && isTextFile(entry.name);
                    if ((argv.extract || argv.dest && !(filterExceptions & DZip.EXCEPTIONS.BANNER)) && !recurse) {
                        if (convertText == 2) {
                            targetData = new DataBuffer();
                        }
                        //
                        // Define a writeData() function within processItem() to receive data ONLY if extraction
                        // has been enabled; this will take care of writing the received data to the appropriate file.
                        //
                        writeData = async function(db, length) {
                            if (db) {
                                if (!targetFile) {
                                    try {
                                        //
                                        // NOTE: mkdir's "recursive" option inhibits any directory-already-exists errors.
                                        //
                                        await fs.mkdir(path.dirname(entry.target), { recursive: true });
                                        targetFile = await fs.open(entry.target, argv.overwrite? "w" : "wx");
                                        if (!argv.list && argv.verbose) {
                                            printf("created %s\n", entry.target);
                                        }
                                    } catch (error) {
                                        if (error.code == "EEXIST" && error.syscall == "open") {
                                            //
                                            // TODO: Consider ALWAYS warning about the need for --overwrite when a file exists,
                                            // since extraction has been enabled.
                                            //
                                            let warning = entry.target + ": already exists";
                                            if (argv.list) {
                                                entry.warnings.unshift(warning);
                                            } else {
                                                printf("%s\n", warning);
                                                nItemWarnings++;
                                            }
                                        } else {
                                            printf("%s: %s\n", entry.target, error.message);
                                            nItemWarnings++;
                                        }
                                        return false;
                                    }
                                }
                                if (targetData) {
                                    targetData = DataBuffer.concat([targetData, db]);
                                } else {
                                    if (convertText) {
                                        db = BASFile.normalize(db, true);
                                    }
                                    await targetFile.write(db.buffer, 0, length != undefined? length : db.length);
                                }
                                return true;
                            }
                            if (targetFile) {
                                if (targetData) {
                                    let basfile = new BASFile(targetData, true, entry.name);
                                    targetData = basfile.convert();
                                    if (basfile.warnings.length) {
                                        entry.warnings = entry.warnings.concat(basfile.warnings);
                                    }
                                    await targetFile.write(targetData.buffer, 0, targetData.length);
                                }
                                await targetFile.close();
                                if (entry.modified) {
                                    await fs.utimes(entry.target, entry.modified, entry.modified);
                                }
                                return true;
                            }
                            return false;
                        };
                    }
                    if (dxc.filterEntry(handle, entry, argv.dump || argv.type)) {
                        dumpFile = readFile = true;
                    }
                    if (readFile) {
                        db = await dxc.readFile(handle, entry, writeData);
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
                        if (db && (dumpFile || argv.test)) {
                            if (convertText == 1) {
                                db = BASFile.normalize(db, true);
                            }
                            else if (convertText == 2) {
                                let basfile = new BASFile(db, true, entry.name);
                                db = basfile.convert();
                                if (!targetData && basfile.warnings.length) {
                                    entry.warnings = entry.warnings.concat(basfile.warnings);
                                }
                            }
                        }
                    }
                }
                let name = path.basename(entry.name);
                if (name.length > 14) {
                    name = "…" + name.slice(-13);
                }
                nItemWarnings += entry.warnings.length;
                if (listing) {
                    entry.methodName = handle.item.volTable? "None" : (entry.method < 0? LegacyArc.methodNames[-(entry.method + 2)] : LegacyZip.methodNames[entry.method]);
                    if (entry.flags & DZip.FileHeader.fields.flags.ENCRYPTED) {
                        entry.methodName += '*';
                    }
                    if (argv.csv) {
                        entry.fileID = fileID++;
                        entry.itemID = itemID;
                        entry.setID = setID;
                        entry.hash = (db && db.length? crypto.createHash('md5').update(db.buffer).digest('hex') : "");
                        let line = dxc.formatEntry(handle, entry, DXC.FORMAT.CSV);
                        await csv.write(line);
                    }
                    else if (dirListing) {
                        if (dirLimit) {
                            if (dirLimit > 1 || dirLimit < 0) {
                                printf("%s\n", dxc.formatEntry(handle, entry, argv.debug? DXC.FORMAT.XDIR : DXC.FORMAT.DIR));
                            } else if (dirLimit == 1) {
                                printf("...\n");
                            }
                            dirLimit--;
                        }
                    }
                    else {
                        printf("%s\n", dxc.formatEntry(handle, entry));
                    }
                } else {
                    if (entry.warnings.length && argv.verbose) {
                        printf("%s: %s\n", entryPath, entry.warnings.join("; "));
                    }
                }
                if (db && dumpFile) {
                    displayFile(listing? null : entry.target, outcoding, db, argv.dump);
                }
                //
                // Perform recursion 1) if requested and 2) if we have a DataBuffer to recurse into.
                //
                if (recurse && db) {
                    let entryTarget = path.join(dirPath, path.dirname(entry.name));
                    let [nFiles, nWarnings] = await processItem(fileID++, entryPath, null, null, entryTarget, db, entry.modified);
                    if (nFiles) {
                        heading = false;
                    }
                    //
                    // We now propagate all downstream totals upstream, so that the main loop can accurately
                    // report which items are completely free of warnings (any nested items with warnings are
                    // disqualifying).
                    //
                    nItemFiles += nFiles;
                    nItemWarnings += nWarnings;
                }
            }
            if (dirListing && nDirFiles && !argv.csv) {
                printf("%8d file%s %10d byte%s\n", nDirFiles, nDirFiles == 1? " " : "s", nDirBytes);
                if (handle.item.volTable && handle.item.volTable.length) {
                    let volume = handle.item.volTable[0];
                    printf("               %10d byte%s free\n", volume.clusFree * volume.clusSecs * volume.cbSector);
                 // printf("               %10d byte%s capacity\n", (volume.clusTotal - volume.clusBad) * volume.clusSecs * volume.cbSector);
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
            //
            // TODO: If argv.list, consider displaying entry totals as well (including the total size of the item)
            //
        } catch (error) {
            printf("error processing %s: %s\n", itemPath, error.message);
        }
        await dxc.close(handle);
        return [nItemFiles, nItemWarnings];
    };
    //
    // And finally: the main loop.
    //
    for (let item of itemList) {
        //
        // This was a hack for testing purposes, but it should not be required in general,
        // because it's up to the caller to ensure that all characters in a URL are properly encoded.
        //
        //      if (item.path.match(/^https?:\/\//)) {
        //          item.path = item.path.replace(/#/g, "%23");
        //      }
        //
        // We don't want to try fixing URLs ourselves, because encodeURI() transforms too little, as it
        // considers '#' legitimate, and encodeURIComponent() transforms too much (eg, colons and slashes).
        //
        let [nFiles, nWarnings] = await processItem(fileID++, item.path, item.photo, item.thumb);
        if (!argv.upload && !argv.update) {
            if (nWarnings >= 0) {
                printf("%s%s: %d file%s, %d warning%s\n", listing && !argv.csv && nFiles? "\n" : "", item.path, nFiles, nFiles, nWarnings, nWarnings);
                if (argv.dir && argv.truncate && !argv.csv) {
                    printf("\nFor more information, visit https://github.com/jeffpar/pcjs/tree/master/tools/dx\n");
                }
                if (argv.pause) {
                    await pause();
                }
            } else {
                nWarnings = -nWarnings;;
            }
        }
        nTotalWarnings += nWarnings;
    }
    if (nTotalItems > 1 && !argv.upload && !argv.update) {
        printf("\n%d total item%s, %d total file%s, %d total warning%s\n", nTotalItems, nTotalItems, nTotalFiles, nTotalFiles, nTotalWarnings, nTotalWarnings);
    }
    if (csv) {
        await csv.close();
        if (argv.fileID) {
            printf("Use --fileID=%d --setID=%d for the next CSV\n", fileID, ++setID);
        }
    } else {
        if (!itemList.length) {
            printf("nothing to do\n");
        }
    }
}

await main(...Format.parseArgs(process.argv, options));
