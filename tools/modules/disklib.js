/**
 * @fileoverview Disk Image Functions
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs         from "fs";
import os         from "os";
import crypto     from "crypto";
import glob       from "glob";
import path       from "path";
import StreamZip  from "../modules/streamzip.js";
import { DEBUG }  from "../../machines/modules/v2/defines.js";
import DataBuffer from "../../machines/modules/v2/databuffer.js";
import Device     from "../../machines/modules/v3/device.js";
import DiskInfo   from "../../machines/pcx86/modules/v3/diskinfo.js";
import CharSet    from "../../machines/pcx86/modules/v3/charset.js";

let device = new Device("node");
let printf = device.printf.bind(device);
let sprintf = device.sprintf.bind(device);

export { device, printf, sprintf }

export function printError(err, filename)
{
    let msg = err.message;
    if (filename) msg = path.basename(filename) + ": " + msg;
    printf("error: %s\n", msg);
}

/*
 * List of archive file types to expand when "--expand" is specified.
 */
const asArchiveFileExts = [".ARC", ".ZIP"];       // order must match StreamZip.TYPE_* constants

/*
 * List of text file types to convert line endings from LF to CR+LF when "--normalize" is specified.
 * A warning is always displayed when we replace line endings in any file being copied to a disk image.
 *
 * NOTE: Some files, like ".BAS" files, aren't always ASCII, which is why we now call isText() on all
 * these file contents first.
 */
const asTextFileExts = [".MD", ".ME", ".BAS", ".BAT", ".RAT", ".ASM", ".LRF", ".MAK", ".TXT", ".XML"];

let nMaxDefault = 512, nMaxInit, nMaxCount, rootDir = ".";

/**
 * checkArchive(sPath, fExt)
 *
 * @param {string} sPath
 * @param {boolean} fExt (true to check path for archive extension only)
 * @returns {string|undefined}
 */
function checkArchive(sPath, fExt)
{
    let sArchive;
    for (let sExt of [".ZIP", ".zip", ".ARC", ".arc"]) {
        if (fExt) {
            if (sPath.endsWith(sExt)) {
                sArchive = sPath;   // sPath.slice(0, -sExt.length);
                break;
            }
            continue;
        }
        let sFile = sPath.endsWith(sExt)? sPath : (sPath + sExt);
        if (existsFile(sFile)) {
            sArchive = sFile;
            break;
        }
    }
    return sArchive;
}

/**
 * existsDir(sDir, fError)
 *
 * @param {string} sDir
 * @param {boolean} [fError]
 * @returns {boolean}
 */
export function existsDir(sDir, fError = true)
{
    try {
        sDir = getFullPath(sDir);
        let stat = fs.statSync(sDir);
        return stat.isDirectory();
    } catch(err) {
        if (fError) printError(err);
    }
    return false;
}

/**
 * existsFile(sFile, fError)
 *
 * This is really "existsFileOrDir()"; if you need to know which, call existsDir() afterward.
 *
 * @param {string} sFile
 * @param {boolean} [fError]
 * @returns {boolean}
 */
export function existsFile(sFile, fError = true)
{
    try {
        sFile = getFullPath(sFile);
        return fs.existsSync(sFile);
    } catch(err) {
        if (fError) printError(err);
    }
    return false;
}

/**
 * getHash(data, type)
 *
 * @param {Array.<number>|string|DataBuffer} data
 * @param {string} [type] (eg, "md5")
 * @returns {string}
 */
export function getHash(data, type = "md5")
{
    let db;
    if (data instanceof DataBuffer) {
        db = data;
    } else {
        db = new DataBuffer(data);
    }
    return crypto.createHash(type).update(db.buffer).digest('hex');
}

/**
 * getFullPath(sFile)
 *
 * @param {string} sFile
 * @returns {string}
 */
export function getFullPath(sFile)
{
    if (sFile[0] == '~') {
        sFile = os.homedir() + sFile.substr(1);
    }
    else {
        sFile = getServerPath(sFile);
    }
    return sFile;
}

/**
 * getServerPath(sFile)
 *
 * @param {string} sFile
 * @returns {string}
 */
function getServerPath(sFile)
{
    /*
     * In addition to disk server paths, we had to add /machines (for diskette config files) and /software
     * (for Markdown files containing supplementary copy-protection disk data).
     */
    let match = sFile.match(/^\/(disks\/|)(machines|software|diskettes|gamedisks|miscdisks|harddisks|decdisks|pcsigdisks|cdroms|private)(\/.*)$/);
    if (match) {
        sFile = path.join(rootDir, (match[2] == "machines" || match[2] == "software"? "" : "disks"), match[2], match[3]);
    }
    return sFile;
}

/**
 * getTargetValue(sTarget)
 *
 * Target is normally a number in Kb (eg, 360 for a 360K diskette); you can also add a suffix (eg, K or M).
 * K is assumed, whereas M will automatically produce a Kb value equal to the specified Mb value (eg, 10M is
 * equivalent to 10240K).
 *
 * @param {string} sTarget
 * @returns {number} (target Kb for disk image, 0 if no target)
 */
function getTargetValue(sTarget)
{
    let target = 0;
    if (sTarget) {
        let match = sTarget.match(/^(PC|)([0-9]+)([KM]*)/i);
        if (match) {
            target = +match[2];
            if (match[3].toUpperCase() == 'M') {
                target *= 1024;
            }
        }
    }
    return target;
}

/**
 * isArchiveFile(sFile)
 *
 * @param {string} sFile
 * @returns {number} StreamZip TYPE value, or 0 if not an archive file
 */
export function isArchiveFile(sFile)
{
    let sExt = path.parse(sFile).ext.toUpperCase();
    return asArchiveFileExts.indexOf(sExt) + 1;
}

/**
 * isTextFile(sFile)
 *
 * @param {string} sFile
 * @returns {boolean} true if the filename contains a known text file extension, false if unknown
 */
export function isTextFile(sFile)
{
    let sFileUC = sFile.toUpperCase();
    for (let i = 0; i < asTextFileExts.length; i++) {
        if (sFileUC.endsWith(asTextFileExts[i])) return true;
    }
    return false;
}

/**
 * makeDir(sDir, recursive, deleteFile)
 *
 * The deleteFile parameter is never true unless '--overwrite' was specified; it is only intended
 * to come into play when using '--expand' along with '--extract', because if any earlier '--extract'
 * did NOT use '--expand', then any archives inside the source disk/archive will have been extracted
 * as a file rather than a directory -- in which case, we must delete the file before we can create
 * a directory.
 *
 * @param {string} sDir
 * @param {boolean} [recursive]
 * @param {boolean} [deleteFile] (delete any existing file with the same name as the directory)
 * @returns {boolean} true if successful (or the directory already exists), false if error
 */
export function makeDir(sDir, recursive = false, deleteFile = false)
{
    let success = true;
    if (existsFile(sDir, false) && !existsDir(sDir, false) && deleteFile) {
        try {
            fs.unlinkSync(sDir);
        } catch(err) {
            printError(err);
            success = false;
        }
    }
    if (success && !existsFile(sDir, false)) {
        try {
            fs.mkdirSync(sDir, {recursive});
        } catch(err) {
            printError(err);
            success = false;
        }
    }
    return success;
}

/**
 * addMetaData(di, sDir, sPath, aFiles)
 *
 * @param {DiskInfo} di
 * @param {string} sDir
 * @param {string} sPath
 * @param {Array.<FileData>} [aFiles]
 */
export function addMetaData(di, sDir, sPath, aFiles)
{
    sPath = path.join(sDir, sPath);
    let sArchiveDir = checkArchive(sPath, true);
    if (sArchiveDir) {
        let sArchiveFile = checkArchive(sArchiveDir);
        if (sArchiveFile) {
            let aArchiveData = [];
            let aArchiveFiles = glob.sync(path.join(sArchiveDir, "**"));
            for (let j = 0; j < aArchiveFiles.length; j++) {
                let sPath = aArchiveFiles[j];
                let sName = path.basename(sPath);
                let stats = fs.statSync(sPath);
                if (!stats.isDirectory()) {
                    let data = readFile(sPath, null);
                    if (!data) continue;
                    let file = {
                        hash: getHash(data),
                        path: sPath.slice(sDir.length),
                        attr: DiskInfo.ATTR.METADATA,
                        date: stats.mtime,
                        size: data.length
                    };
                    aArchiveData.push(file);
                }
            }
            di.addMetaData(aArchiveData);
        }
    }
    if (aFiles) {
        for (let i = 0; i < aFiles.length; i++) {
            addMetaData(di, sDir, aFiles[i].path, aFiles[i].files);
        }
    }
}

/**
 * readDir(sDir, arcType, arcOffset, sLabel, sPassword, fNormalize, kbTarget, nMax, verbose, done, sectorIDs, sectorErrors, suppData)
 *
 * @param {string} sDir (directory name)
 * @param {number} [arcType] (1 if ARC file, 2 if ZIP file, otherwise 0)
 * @param {number} [arcOffset] (0 if none)
 * @param {string} [sLabel] (if not set with --label, then basename(sDir) will be used instead)
 * @param {string} [sPassword] (password; for encrypted ARC files only at this point)
 * @param {boolean} [fNormalize] (if true, known text files get their line-endings "fixed")
 * @param {number} [kbTarget] (target disk size, in Kb; zero or undefined if no target disk size)
 * @param {number} [nMax] (maximum number of files to read; default is 256)
 * @param {boolean} [verbose] (true for verbose output)
 * @param {function(DiskInfo)} [done] (optional function to call on completion)
 * @param {Array|string} [sectorIDs]
 * @param {Array|string} [sectorErrors]
 * @param {string} [suppData] (eg, supplementary disk data that can be found in such files as: /software/pcx86/app/microsoft/word/1.15/debugger/index.md)
 * @returns {DiskInfo|null}
 */
export function readDir(sDir, arcType, arcOffset, sLabel, sPassword, fNormalize, kbTarget, nMax, verbose, done, sectorIDs, sectorErrors, suppData)
{
    let di;
    let diskName = path.basename(sDir);
    if (sDir.endsWith(path.sep)) {
        if (!sLabel) {
            sLabel = diskName.replace(/^.*-([^0-9][^-]+)$/, "$1");
        }
    } else if (!arcType) {
        diskName = path.basename(path.dirname(sDir));
        /*
         * When we're given a list of files, we don't pick a default label; use --label if you want one.
         */
    }
    sDir = getFullPath(sDir);
    let readDone = function(aFileData) {
        let db = new DataBuffer();
        let di = new DiskInfo(device);
        if (di.buildDiskFromFiles(db, diskName, aFileData, kbTarget, getHash, sectorIDs, sectorErrors, suppData)) {
            /*
             * Walk aFileData and look for archives accompanied by folders containing their expanded contents.
             */
            if (arcType) sDir = sDir.slice(0, -4);
            for (let i = 0; i < aFileData.length; i++) {
                addMetaData(di, sDir, aFileData[i].path, aFileData[i].files);
            }
            if (done) {
                done(di);
                return null;
            }
        }
        return di;
    };
    try {
        nMaxInit = nMaxCount = nMax || nMaxDefault;
        if (arcType) {
            readArchiveFiles(sDir, arcType, arcOffset, sLabel, sPassword, verbose, readDone);
        } else {
            di = readDone(readDirFiles(sDir, sLabel, fNormalize, 0));
        }
    } catch(err) {
        printError(err);
    }
    return di;
}

/**
 * readDirFiles(sDir, sLabel, fNormalize, iLevel)
 *
 * @param {string} sDir (directory name)
 * @param {boolean|null} [sLabel] (optional volume label; this should NEVER be set when reading subdirectories)
 * @param {boolean} [fNormalize] (if true, known text files get their line-endings "fixed")
 * @param {number} [iLevel] (current directory level, primarily for diagnostic purposes only; zero if unspecified)
 * @returns {Array.<FileData>}
 */
function readDirFiles(sDir, sLabel, fNormalize = false, iLevel = 0)
{
    let aFileData = [];

    let asFiles;
    if (sDir.endsWith(path.sep)) {
        asFiles = fs.readdirSync(sDir);
        for (let i = 0; i < asFiles.length; i++) {
            asFiles[i] = path.join(sDir, asFiles[i]);
        }
    } else {
        asFiles = sDir.split(',');
        sDir = ".";
        for (let i = 0; i < asFiles.length; i++) {
            let sDirFile = path.dirname(asFiles[i]);
            if (sDirFile != ".") sDir = sDirFile;
            asFiles[i] = path.join(sDir, path.basename(asFiles[i]));
        }
    }

    /*
     * There are two special label strings you can pass on the command-line:
     *
     *      "--label none" (for no volume label at all)
     *      "--label default" (for our default volume label; currently "PCJS")
     *
     * Any other string following "--label" will be used as-is, and if no "--label" is specified
     * at all, we build a volume label from the basename of the directory.
     */
    if (sLabel == "none") {
        sLabel = "";
    } else if (sLabel == "default") {
        sLabel = DiskInfo.PCJS_LABEL;
    }

    /*
     * The label, if any, will always be first in the list; this shouldn't be a concern since
     * there is currently no support for building "bootable" disks from a set of files.
     */
    if (sLabel) {
        /*
         * I prefer a hard-coded date/time, because it avoids creating different disk images
         * time this utility is run.
         *
         * And remember, of all the Date() constructor parameters, month is the oddball;
         * it's interpreted as the actual month - 1, so 8 corresponds to September.  Brilliant.
         */
        let dateLabel = new Date(1989, 8, 27, 3, 0, 0);
        let file = {path: sDir, name: sLabel, attr: DiskInfo.ATTR.VOLUME, date: dateLabel, size: 0};
        aFileData.push(file);
    }

    let iFile;
    for (iFile = 0; iFile < asFiles.length && nMaxCount > 0; iFile++, nMaxCount--) {
        /*
         * fs.readdirSync() already excludes "." and ".." but there are also a variety of hidden
         * files on *nix systems that begin with a period, which in general we should ignore, too.
         *
         * TODO: Consider an override option that will allow hidden file(s) to be included as well.
         */
        let sPath = asFiles[iFile];
        let sName = path.basename(sPath);
        if (sName.charAt(0) == '.') continue;
        let file = {path: sPath, name: sName, nameEncoding: "utf8"};
        let stats = fs.statSync(sPath);
        file.date = stats.mtime;
        if (stats.isDirectory()) {
            let sArchive = checkArchive(sPath, false);
            if (sArchive) {
                // printf("warning: skipping directory matching archive: %s\n", sArchive);
                continue;
            }
            file.attr = DiskInfo.ATTR.SUBDIR;
            file.size = -1;
            file.data = new DataBuffer();
            file.files = readDirFiles(sPath + path.sep, null, fNormalize, iLevel + 1);
        } else {
            let fText = fNormalize && isTextFile(sName);
            let data = readFile(sPath, fText? "utf8" : null);
            if (!data) continue;
            if (data.length != stats.size) {
                printf("file data length (%d) does not match file size (%d)\n", data.length, stats.size);
            }
            if (fText) {
                if (CharSet.isText(data)) {
                    let dataNew = CharSet.toCP437(data).replace(/\n/g, "\r\n").replace(/\r+/g, "\r");
                    if (dataNew != data) printf("replaced line endings in %s (size changed from %d to %d bytes)\n", sName, data.length, dataNew.length);
                    data = dataNew;
                } else {
                    printf("non-ASCII data in %s (line endings unchanged)\n", sName);
                }
                data = new DataBuffer(data);
            }
            file.attr = DiskInfo.ATTR.ARCHIVE;
            file.size = data.length;
            file.data = data;
        }
        aFileData.push(file);
    }
    if (iFile < asFiles.length && nMaxCount <= 0) {
        printf("warning: %d file limit reached, use --maxfiles # to increase\n", nMaxInit);
    }
    return aFileData;
}

/**
 * getArchiveFiles(zip, verbose)
 *
 * @param {StreamZip} zip
 * @param {boolean} verbose
 * @returns {Array.<FileData>}
 */
export function getArchiveFiles(zip, verbose)
{
    let aFiles = [];
    if (verbose) {
        printf("reading: %s\n", zip.fileName);
        printf("Filename        Length   Method       Size  Ratio   Date       Time       CRC\n");
        printf("--------        ------   ------       ----  -----   ----       ----       ---\n");
    }
    let messages = "";
    let entries = Object.values(zip.entries());
    for (let entry of entries) {

        let file = {path: entry.name, name: path.basename(entry.name), nameEncoding: "cp437"};
        /*
         * The 'time' field in StreamZip entries is a UTC time, which is unfortunate,
         * because file times stored in a ZIP file are *local* times.
         *
         * So I've updated StreamZip to include the file's local time as a Date object
         * ('date') in the entry object.  If it's not available (eg, we're using an older
         * version of StreamZip), then we'll fall back to our 'time' field work-around.
         */
        file.date = entry.date;
        if (!file.date) {
            let date = new Date(entry.time);
            file.date = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
        }
        /*
         * Not all archives provide discrete entries for every subdirectory before they are
         * referenced, so we must always examine every entry for subdirectory components and
         * add them to the file list if they don't already exist.
         */
        let files = aFiles, subDir = "";
        let sep = file.path.indexOf('/') >= 0? '/' : '\\';
        let dirs = (entry.isDirectory? file.path : path.dirname(file.path)).split(sep);
        for (let dir of dirs) {
            if (!dir || dir == '.') continue;
            subDir += dir + '/';
            let file = files.find(function(file) { return file.name == dir && file.attr == DiskInfo.ATTR.SUBDIR; });
            if (!file) {
                file = {path: subDir, name: dir, attr: DiskInfo.ATTR.SUBDIR, size: -1, data: new DataBuffer(), files: []};
                files.push(file);
            }
            files = file.files;
        }
        if (!entry.isDirectory) {
            /*
             * HACK to skip decompression for all entries (--verbose=skip) or all entries except a named entry.
             */
            let data;
            if (typeof verbose == "string" && (verbose == "skip" || verbose != entry.name)) {
                data = new DataBuffer(entry.size);
            }
            else {
                data = zip.entryDataSync(entry.name);
                data = new DataBuffer(data || 0);
            }
            file.attr = DiskInfo.ATTR.ARCHIVE;
            file.size = data.length;
            file.data = data;
            files.push(file);
        }
        if (entry.messages && entry.messages.length) {
            for (let message of entry.messages) {
                messages += message + "\n";
            }
        }
        if (verbose) {
            /*
             * Notes regarding ARC compression method "naming conventions":
             *
             * I've not yet seen any examples of Method5 or Method7 "in the wild", but I have seen Method6
             * (see PC-SIG DISK0568: 123EGA.ARC), which PKXARC.EXE called "crunched" (with a lower-case "c"),
             * distinct from Method8 which it called "Crunched" (with an upper-case "C").
             *
             * Technically, yes, methods 5-7 and method 8 were all called "crunching", but 5-7 performed LZW
             * compression (with unpacked (5), packed (6), and "new hash" (7) variants) while method 8 performed
             * "dynamic" LZW compression.
             *
             * To distinguish the methods better, I'm going call 5-7 "Crunch" and 8 "Crush", placing method 8
             * squarely between "Crunch" and "Squash".
             */
            let methodsARC = [
                "Store", "Pack", "Squeeze", "Crunch5", "Crunch", "Crunch7", "Crush", "Squash"
            ];
            let methodsZIP = [
                "Store", "Shrink", "Reduce1", "Reduce2", "Reduce3", "Reduce4", "Implode", undefined, "Deflate", "Deflate64", "Implode2"
            ];
            let filename = CharSet.fromCP437(file.name);
            if (filename.length > 14) {
                filename = "..." + filename.slice(filename.length - 11);
            }
            let filesize = file.size;
            if (filesize < 0) {
                filesize = 0;
                filename += path.sep;
            }
            let method = entry.method < 0? methodsARC[-entry.method - 2] : methodsZIP[entry.method];
            if (entry.encrypted) method += '*';
            let ratio = filesize > entry.compressedSize? Math.round(100 * (filesize - entry.compressedSize) / filesize) : 0;
            if (entry.errors) filesize = -1;
            if (!DEBUG) {
                printf("%-14s %7d   %-9s %7d   %3d%%   %T   %0*x\n",
                    filename, filesize, method, entry.compressedSize, ratio, file.date, zip.arcType == StreamZip.TYPE_ARC? 4 : 8, entry.crc);
            } else {
                printf("%-14s %7d   %-9s %7d   %3d%%   %T   %0*x  %#08x\n",
                    filename, filesize, method, entry.compressedSize, ratio, file.date, zip.arcType == StreamZip.TYPE_ARC? 4 : 8, entry.crc, entry.offset);
            }
        }
    }
    if (messages) printf("%s", messages);
    return aFiles;
}

/**
 * readArchiveFiles(sArchive, arcType, arcOffset, sLabel, sPassword, verbose, done)
 *
 * @param {string} sArchive (ARC/ZIP filename)
 * @param {number} arcType (1 for ARC, 2 for ZIP)
 * @param {number} arcOffset (0 if none)
 * @param {string} sLabel (optional volume label)
 * @param {string} sPassword (optional password)
 * @param {boolean} verbose (true to display verbose output, false to display minimal output)
 * @param {function(Array.<FileData>)} done
 */
function readArchiveFiles(sArchive, arcType, arcOffset, sLabel, sPassword, verbose, done)
{
    let zip = new StreamZip({
        file: sArchive,
        password: sPassword,
        arcType: arcType,
        arcOffset: arcOffset,
        storeEntries: true,
        nameEncoding: "ascii",
        // printfDebug: printf,
        holdErrors: true
    });
    zip.on('ready', function readArchiveFilesReady() {
        let aFileData = getArchiveFiles(zip, verbose);
        zip.close();
        done(aFileData);
    });
    zip.on('error', function readArchiveFilesError(err) {
        printError(err, sArchive);
    });
}

/**
 * readFile(sFile, encoding)
 *
 * @param {string} sFile
 * @param {string|null} [encoding]
 * @returns {DataBuffer|string|undefined}
 */
export function readFile(sFile, encoding = "utf8")
{
    let data;
    if (sFile) {
        try {
            sFile = getFullPath(sFile);
            data = fs.readFileSync(sFile, encoding);
            if (!encoding) data = new DataBuffer(data);
        } catch(err) {
            printError(err);
        }
    }
    return data;
}

/**
 * readJSON(sFile)
 *
 * @param {string} sFile
 * @returns {Object|undefined}
 */
export function readJSON(sFile)
{
    let data, json;
    try {
        data = readFile(sFile);
        json = JSON.parse(data);
    } catch(err) {
        printError(err);
    }
    return json;
}

/**
 * writeDisk(diskFile, di, fLegacy, indent, fOverwrite, fQuiet, fWritable, source)
 *
 * @param {string} diskFile
 * @param {DiskInfo} di
 * @param {boolean} [fLegacy]
 * @param {number} [indent]
 * @param {boolean} [fOverwrite]
 * @param {boolean} [fQuiet]
 * @param {boolean} [fWritable]
 * @param {string} [source]
 */
export function writeDisk(diskFile, di, fLegacy = false, indent = 0, fOverwrite = false, fQuiet = false, fWritable = false, source = "")
{
    let diskName = path.basename(diskFile);
    try {
        let fExists = existsFile(diskFile);
        if (!fExists || fOverwrite) {
            let data;
            let diskFileLC = diskFile.toLowerCase();
            if (diskFileLC.endsWith(".json")) {
                data = di.getJSON(getHash, fLegacy, 0, source);
            } else {
                let db = new DataBuffer(di.getSize());
                if (di.getData(db, fLegacy)) data = db.buffer;
            }
            if (data) {
                if (!fQuiet) printf("writing %s...\n", diskFile);
                diskFile = getFullPath(diskFile);
                let sDir = path.dirname(diskFile);
                makeDir(sDir, true);
                if (fExists) fs.unlinkSync(diskFile);
                fs.writeFileSync(diskFile, data);
                if (diskFileLC.endsWith(".img") && !fWritable) fs.chmodSync(diskFile, 0o444);
            } else {
                printf("%s not written, no data\n", diskName);
            }
        } else {
            if (!fQuiet) printf("warning: %s exists, use --overwrite to replace\n", diskFile);
        }
    }
    catch(err) {
        printError(err);
    }
}

/**
 * setRootDir(sDir)
 *
 * @param {string} sDir
 */
export function setRootDir(sDir)
{
    rootDir = sDir;
}
