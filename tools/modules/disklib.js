/**
 * @fileoverview Disk Image Functions
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import crypto     from "crypto";
import fs         from "fs";
import glob       from "glob";
import got        from "got";
import os         from "os";
import path       from "path";
import BASFile    from "../modules/basfile.js";
import StreamZip  from "../modules/streamzip.js";       // PCjs replacement for "node-stream-zip"
import DataBuffer from "../../machines/modules/v2/databuffer.js";
import FileLib    from "../../machines/modules/v2/filelib.js";
import StrLib     from "../../machines/modules/v2/strlib.js";
import Device     from "../../machines/modules/v3/device.js";
import DiskInfo   from "../../machines/pcx86/modules/v3/diskinfo.js";
import CharSet    from "../../machines/pcx86/modules/v3/charset.js";

let device = new Device("node");
let printf = device.printf.bind(device);
let sprintf = device.sprintf.bind(device);

export { device, printf, sprintf }

export function printError(err, filename)
{
    let msg = err.message || err.stack;
    if (filename) msg = path.basename(filename) + ": " + msg;
    printf("%s\n", msg);
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

let nMaxDefault = 512, nMaxInit, nMaxCount;

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
 * isBASICFile(sFile)
 *
 * @param {string} sFile
 * @returns {boolean} true if the filename has a ".BAS" extension
 */
export function isBASICFile(sFile)
{
    let ext = path.parse(sFile).ext;
    return ext && ext.toUpperCase() == ".BAS";
}

/**
 * convertBASICFile(db, toUTF8, sPath)
 *
 * @param {DataBuffer} db (the contents of the BASIC file)
 * @param {boolean} [toUTF8] (true if we should convert characters from CP437 to UTF-8)
 * @param {string} [sPath] (for informational purposes only, since we're working entirely with the DataBuffer)
 * @returns {DataBuffer}
 */
export function convertBASICFile(db, toUTF8, sPath)
{
    let basfile = new BASFile(db, toUTF8, sPath, printf);
    return basfile.convert();
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
        sDir = getLocalPath(sDir);
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
        sFile = getLocalPath(sFile);
        return fs.existsSync(sFile);
    } catch(err) {
        if (fError) printError(err);
    }
    return false;
}

/**
 * getDiskSector(di, lba)
 *
 * @param {DiskInfo} di
 * @param {number} lba (logical block address, aka 0-based sector number)
 * @returns {DataBuffer}
 */
export function getDiskSector(di, lba)
{
    let db;
    let sector = di.getSector(lba);
    if (sector) {
        let ab = [], dw = 0;
        let data = sector[DiskInfo.SECTOR.DATA];
        let dwords = sector[DiskInfo.SECTOR.LENGTH] / 4;
        for (let i = 0; i < dwords; i++) {
            if (i < data.length) dw = data[i];
            for (let shift = 0; shift < 32; shift += 8) {
                ab.push((dw >>> shift) & 0xff);
            }
        }
        db = new DataBuffer(ab);
    }
    return db;
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
 * getLocalPath(sFile)
 *
 * @param {string} sFile
 * @returns {string}
 */
export function getLocalPath(sFile)
{
    if (sFile[0] == '~') {
        sFile = os.homedir() + sFile.substr(1);
    }
    else {
        sFile = FileLib.getLocalPath(sFile);
    }
    return sFile;
}

/**
 * getServerPath(diskFile, fRemote)
 *
 * @param {string} diskFile
 * @param {boolean} [fRemote] (true to return remote address)
 * @returns {string}
 */
export function getServerPath(diskFile, fRemote)
{
    if (fRemote || !existsFile(getLocalPath(diskFile))) {
        diskFile = diskFile.replace(/^\/(disks\/|)(diskettes|gamedisks|miscdisks|harddisks|decdisks|pcsigdisks|pcsig[0-9a-z]*-disks|private)\//, "https://$2.pcjs.org/").replace(/^\/disks\/cdroms\/([^/]*)\//, "https://$2.pcjs.org/");
    }
    return diskFile;
}

/**
 * getServerPrefix(diskFile)
 *
 * @param {string} diskFile
 * @returns {string|undefined}
 */
export function getServerPrefix(diskFile)
{
    let match = diskFile.match(/^\/(disks\/|)(diskettes|gamedisks|miscdisks|harddisks|decdisks|pcsigdisks|cdroms|private)\//);
    return match && (match[1] + match[2]);
}

/**
 * replaceServerPrefix(diskFile, sReplace)
 *
 * @param {string} diskFile
 * @param {string} sReplace (eg, "/software/")
 * @returns {string}
 */
export function replaceServerPrefix(diskFile, sReplace)
{
    return diskFile.replace(/\/(disks\/|)(diskettes|gamedisks|miscdisks|harddisks|pcsigdisks|pcsig[0-9a-z-]*-disks|private)\//, sReplace)
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
function addMetaData(di, sDir, sPath, aFiles)
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
                    let data = readFileSync(sPath, null);
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
 * makeFileDesc(sDir, name, data, attr, date)
 *
 * This mimics getFileDesc() in diskinfo.js, but it creates a FILEDESC object from input
 * parameters rather than a FileInfo object.
 *
 * @param {string} sDir
 * @param {string} name
 * @param {DataBuffer|string} data
 * @param {number} [attr]
 * @param {Date} [date]
 * @returns {Object}
 */
export function makeFileDesc(sDir, name, data, attr = DiskInfo.ATTR.ARCHIVE, date = new Date())
{
    return {
        [DiskInfo.FILEDESC.PATH]: path.join(sDir, name),
        [DiskInfo.FILEDESC.NAME]: name,
        [DiskInfo.FILEDESC.ATTR]: sprintf("%#0bx", attr),
        [DiskInfo.FILEDESC.DATE]: sprintf("%T", date),
        [DiskInfo.FILEDESC.SIZE]: data.length,
        [DiskInfo.FILEDESC.CONTENTS]: data,
        [DiskInfo.FILEDESC.VOL]:  0
    };
}

/**
 * normalizeTextFile(db)
 *
 * @param {DataBuffer} db
 * @returns {DataBuffer}
 */
export function normalizeTextFile(db)
{
    return BASFile.normalize(db, true);
}

/**
 * readDir(sDir, arcType, arcOffset, sLabel, sPassword, fNormalize, kbTarget, nMax, verbose, driveInfo, done)
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
 * @param {DriveInfo} [driveInfo] (custom drive parameters, if any)
 * @param {function(DiskInfo)} [done] (optional function to call on completion)
 */
export function readDir(sDir, arcType, arcOffset, sLabel, sPassword, fNormalize, kbTarget, nMax, verbose, driveInfo = {}, done)
{
    let di;
    let diskName = path.basename(sDir);
    if (sDir.endsWith('/')) {
        if (!sLabel) {
            sLabel = diskName.replace(/^.*-([^0-9][^-]+)$/, "$1");
        }
    } else if (!arcType) {
        diskName = path.basename(path.dirname(sDir));
        /*
         * When we're given a list of files, we don't pick a default label; use --label if you want one.
         */
    }
    sDir = getLocalPath(sDir);
    let readDone = function(aFileData) {
        if (aFileData) {
            let db = new DataBuffer();
            let di = new DiskInfo(device);
            if (driveInfo.files) {
                for (let i = driveInfo.files.length - 1; i >= 0; i--) {
                    let desc = driveInfo.files[i];
                    desc.attr = +desc[DiskInfo.FILEDESC.ATTR];
                    desc.data = new DataBuffer(desc[DiskInfo.FILEDESC.CONTENTS]);
                    desc.date = device.parseDate(desc[DiskInfo.FILEDESC.DATE], true);
                    delete desc[DiskInfo.FILEDESC.HASH];
                    delete desc[DiskInfo.FILEDESC.CONTENTS];
                    let j = aFileData.findIndex((file) => (file.name === desc.name));
                    if (j >= 0) {
                        aFileData.splice(j, 1);
                    }
                    aFileData.unshift(desc);
                }
            }
            if (di.buildDiskFromFiles(db, diskName, aFileData, kbTarget, getHash, driveInfo)) {
                /*
                 * Walk aFileData and look for archives accompanied by folders containing their expanded contents.
                 */
                if (arcType) sDir = sDir.slice(0, -4);
                for (let i = 0; i < aFileData.length; i++) {
                    addMetaData(di, sDir, aFileData[i].path, aFileData[i].files);
                }
                done(di);
                return;
            }
        }
        done();
    };
    try {
        nMaxInit = nMaxCount = nMax || nMaxDefault;
        if (!arcType) {
            readDirFiles(sDir, sLabel, fNormalize, 0, driveInfo, readDone);
        } else {
            readArchiveFiles(sDir, arcType, arcOffset, sLabel, sPassword, verbose, readDone);
        }
    } catch(err) {
        printError(err);
    }
}

/**
 * readDirFiles(sDir, sLabel, fNormalize, iLevel, driveInfo, done)
 *
 * @param {string} sDir (slash-terminated directory name OR comma-delimited list of files)
 * @param {boolean|null} [sLabel] (optional volume label; this should NEVER be set when reading subdirectories)
 * @param {boolean} [fNormalize] (if true, known text files get their line-endings "fixed")
 * @param {number} [iLevel] (current directory level, primarily for diagnostic purposes only; zero if unspecified)
 * @param {DriveInfo} [driveInfo] (custom drive parameters, if any)
 * @param {function(Array.<FileData>)} [done] (optional function to call on completion)
 * @returns {Array.<FileData>}
 */
function readDirFiles(sDir, sLabel, fNormalize = false, iLevel = 0, driveInfo, done)
{
    let aFileData = [];

    let asFiles;
    if (sDir.endsWith('/')) {
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
     * Any other string following "--label" will be used as-is, and if no "--label" is specified at all,
     * we build a volume label from the basename of the directory.
     */
    let dateLabel;
    if (sLabel == "none") {
        sLabel = "";
    } else if (sLabel == "default") {
        sLabel = DiskInfo.PCJS_LABEL;
        dateLabel = new Date(1989, 8, 27, 3, 0, 0);
    }

    /*
     * The label, if any, will always be first in the list; this shouldn't be a concern since there is currently
     * no support for building "bootable" disks from a set of files.
     *
     * By default, I prefer a hard-coded date/time, because it avoids creating different disk images every time this is run.
     */
    if (sLabel && (!driveInfo || driveInfo.verDOS >= 2)) {
        let sPath = '/' + path.basename(sLabel);
        let file = {path: sPath, name: sLabel, attr: DiskInfo.ATTR.VOLUME, date: dateLabel || new Date(), size: 0};
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
        let file = {path: (sPath[0] != '/' && sPath[1] != ':'? '/' : '') + sPath, name: sName, nameEncoding: "utf8"};
        let stats = fs.statSync(sPath);
        file.date = stats.mtime;
        if (stats.isDirectory()) {
            if (driveInfo && driveInfo.verDOS < 2) {
                continue;
            }
            let sArchive = checkArchive(sPath, false);
            if (sArchive) {
                // printf("warning: skipping directory matching archive: %s\n", sArchive);
                continue;
            }
            file.attr = DiskInfo.ATTR.SUBDIR;
            file.size = -1;
            file.data = new DataBuffer();
            file.files = readDirFiles(sPath + '/', null, fNormalize, iLevel + 1, driveInfo);
        } else {
            /*
             * To properly deal with normalization of BASIC files, we first read the file into
             * a DataBuffer and make sure the first byte isn't 0xFE or 0xFF (because that indicates
             * the BASIC program is tokenized and should be left as-is).
             *
             * Once we're convinced we're dealing with a text file, we re-read the file with UTF-8
             * encoding.  The assumption here is that YOU, by specifically requesting normalization,
             * are telling us that the files being read here are "modern" (eg, UTF-8 or at least plain
             * ASCII) files that should be converted to PC standards.
             */
            let data = readFileSync(sPath, null);
            if (!data) continue;
            let fText = fNormalize && isTextFile(sName);
            if (fText) {
                if (isBASICFile(sName)) {
                    if (data.length && data.readUInt8(0) >= 0xFE) fText = false;
                }
            }
            if (fText) {
                data = readFileSync(sPath);
                if (CharSet.isText(data)) {
                    let dataNew = CharSet.toCP437(data).replace(/\n/g, "\r\n").replace(/\r+/g, "\r");
                    if (dataNew != data) {
                        printf(Device.MESSAGE.FILE + Device.MESSAGE.INFO, "replaced line endings in %s (size changed from %d to %d bytes)\n", sName, data.length, dataNew.length);
                    }
                    data = dataNew;
                } else {
                    printf(Device.MESSAGE.FILE + Device.MESSAGE.INFO, "non-ASCII data in %s (line endings unchanged)\n", sName);
                }
                data = new DataBuffer(data);
            } else {
                if (data.length != stats.size) {
                    printf("file data length (%d) does not match file size (%d)\n", data.length, stats.size);
                }
            }
            file.attr = DiskInfo.ATTR.ARCHIVE;
            file.size = data.length;
            file.data = data;
        }
        aFileData.push(file);
    }
    if (iFile < asFiles.length) {
        if (nMaxCount >= 0) {
            printf("warning: %d file limit reached, use --maxfiles # to increase\n", nMaxInit);
            nMaxCount = -1;
        }
    }
    if (done) {
        done(aFileData);
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
            let filesize = file.size || 0;
            if (filesize < 0) {
                filesize = 0;
                filename += path.sep;
            }
            let method = entry.method < 0? methodsARC[-entry.method - 2] : methodsZIP[entry.method];
            if (entry.encrypted) method += '*';
            let ratio = filesize > entry.compressedSize? Math.round(100 * (filesize - entry.compressedSize) / filesize) : 0;
            if (entry.errors) filesize = -1;
            if (!Device.DEBUG) {
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
 * getTargetValue(sTarget)
 *
 * Target is normally a number in Kb (eg, 360 for a 360K diskette); you can also add a suffix (eg, K or M).
 * K is assumed, whereas M will automatically produce a Kb value equal to the specified Mb value (eg, 10M is
 * equivalent to 10240K).
 *
 * @param {string} sTarget
 * @returns {number} (target Kb for disk image, 0 if no target)
 */
export function getTargetValue(sTarget)
{
    let target = 0;
    if (sTarget) {
        let match = sTarget.match(/^(PC|)([0-9.]+)([KM]*)/i);
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
 * readDiskAsync(diskFile, forceBPB, driveInfo)
 *
 * @param {string} diskFile
 * @param {boolean} [forceBPB]
 * @param {DriveInfo} [driveInfo]
 */
export async function readDiskAsync(diskFile, forceBPB, driveInfo)
{
    let db, di
    try {
        let diskName = path.basename(diskFile);
        di = new DiskInfo(device, diskName);
        if (StrLib.getExtension(diskName) == "json") {
            diskFile = getServerPath(diskFile);
            if (Device.DEBUG) printf("reading: %s\n", diskFile);
            if (diskFile.startsWith("http")) {
                let response = await got(diskFile);
                db = response.body;
            } else {
                db = await readFile(diskFile);
            }
            if (!db) {
                di = null;
            } else {
                if (!di.buildDiskFromJSON(db)) di = null;
            }
        }
        else {
            /*
             * Passing null for the encoding parameter tells readFile() to return a buffer instead of a string.
             */
            db = await readFile(diskFile, null);
            if (!db) {
                di = null;
            } else {
                db = new DataBuffer(db);
                if (StrLib.getExtension(diskName) == "psi") {
                    if (!di.buildDiskFromPSI(db)) di = null;
                } else {
                    if (!di.buildDiskFromBuffer(db, forceBPB, getHash, driveInfo)) di = null;
                }
            }
        }
    } catch(err) {
        printError(err);
        return null;
    }
    return di;
}

/**
 * readDiskSync(diskFile, forceBPB)
 *
 * @param {string} diskFile
 * @param {boolean} [forceBPB]
 * @param {DriveInfo} [driveInfo]
 * @returns {DiskInfo|null}
 */
export function readDiskSync(diskFile, forceBPB, driveInfo)
{
    let db, di
    try {
        let diskName = path.basename(diskFile);
        di = new DiskInfo(device, diskName);
        if (StrLib.getExtension(diskName) == "json") {
            db = readFileSync(diskFile);
            if (!db) {
                di = null;
            } else {
                if (!di.buildDiskFromJSON(db)) di = null;
            }
        }
        else {
            /*
             * Passing null for the encoding parameter tells readFileSync() to return a DataBuffer.
             */
            db = readFileSync(diskFile, null);
            if (!db) {
                di = null;
            } else {
                if (StrLib.getExtension(diskName) == "psi") {
                    if (!di.buildDiskFromPSI(db)) di = null;
                } else {
                    if (!di.buildDiskFromBuffer(db, forceBPB, getHash, driveInfo)) di = null;
                }
            }
        }
        if (di) {
            let sDir = getLocalPath(diskFile.replace(/\.[a-z]+$/i, ""));
            // sDir = path.join(path.dirname(sDir), "archive", path.basename(sDir));
            let aDiskFiles = glob.sync(path.join(sDir, "**"));
            for (let i = 0; i < aDiskFiles.length; i++) {
                addMetaData(di, sDir, aDiskFiles[i].slice(sDir.length));
            }
        }
    } catch(err) {
        printError(err);
        return null;
    }
    return di;
}

/**
 * readFile(sFile, encoding)
 *
 * @param {string} sFile
 * @param {string|null} [encoding]
 */
export async function readFile(sFile, encoding = "utf8")
{
    sFile = getLocalPath(sFile);
    return new Promise((resolve, reject) => {
        fs.readFile(sFile, encoding, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

/**
 * readFileAsync(sFile, encoding)
 *
 * @param {string} sFile
 * @param {string|null} [encoding]
 */
export async function readFileAsync(sFile, encoding = "utf8")
{
    let db;
    sFile = getServerPath(sFile);
    if (Device.DEBUG) printf("reading: %s\n", sFile);
    if (sFile.startsWith("http")) {
        try {
            let response = await got(sFile);
            db = response.body;
        } catch(err) {
            printError(err);
        }
    } else {
        db = await readFile(sFile);
    }
    return db;
}

/**
 * readFileSync(sFile, encoding, quiet)
 *
 * @param {string} sFile
 * @param {string|null} [encoding]
 * @param {boolean} [quiet]
 * @returns {DataBuffer|string|undefined}
 */
export function readFileSync(sFile, encoding = "utf8", quiet = false)
{
    let data;
    if (sFile) {
        try {
            sFile = getLocalPath(sFile);
            data = FileLib.readFileSync(sFile, encoding);
        } catch(err) {
            if (!quiet) printError(err);
        }
    }
    return data;
}

/**
 * readJSONSync(sFile)
 *
 * @param {string} sFile
 * @returns {Object|undefined}
 */
export function readJSONSync(sFile)
{
    let data, json;
    try {
        data = readFileSync(sFile);
        json = JSON.parse(data);
    } catch(err) {
        printError(err);
    }
    return json;
}

/**
 * writeDiskSync(diskFile, di, fLegacy, indent, fOverwrite, fQuiet, fWritable, source)
 *
 * @param {string} diskFile
 * @param {DiskInfo} di
 * @param {boolean} [fLegacy]
 * @param {number} [indent]
 * @param {boolean} [fOverwrite]
 * @param {boolean} [fQuiet]
 * @param {boolean} [fWritable]
 * @param {string} [source]
 * @returns {boolean}
 */
export function writeDiskSync(diskFile, di, fLegacy = false, indent = 0, fOverwrite = false, fQuiet = false, fWritable = false, source = "")
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
                diskFile = getLocalPath(diskFile);
                let sDir = path.dirname(diskFile);
                makeDir(sDir, true);
                if (fExists) fs.unlinkSync(diskFile);
                fs.writeFileSync(diskFile, data);
                if (diskFileLC.endsWith(".img") && !fWritable) fs.chmodSync(diskFile, 0o444);
                return true;
            }
            printf("%s not written, no data\n", diskName);
        } else {
            if (!fQuiet) printf("warning: %s exists, use --overwrite to replace\n", diskFile);
        }
    }
    catch(err) {
        printError(err);
    }
    return false;
}

/**
 * writeFileSync(sFile, data, fCreateDir, fOverwrite, fReadOnly, fQuiet)
 *
 * @param {string} sFile
 * @param {DataBuffer|Array|string|undefined} data
 * @param {boolean} [fCreateDir]
 * @param {boolean} [fOverwrite]
 * @param {boolean} [fReadOnly]
 * @param {boolean} [fQuiet]
 * @returns {boolean}
 */
export function writeFileSync(sFile, data, fCreateDir, fOverwrite, fReadOnly, fQuiet)
{
    if (sFile) {
        try {
            if (data === undefined) {
                data = [];
            }
            if (data instanceof DataBuffer) {
                data = data.buffer;
            } else if (Array.isArray(data)) {
                data = new DataBuffer(data).buffer;
            }
            if (fCreateDir) {
                let sDir = path.dirname(sFile);
                makeDir(sDir, true);
            }
            if (!existsFile(sFile) || fOverwrite) {
                fs.writeFileSync(sFile, data);
                if (fReadOnly) fs.chmodSync(sFile, 0o444);
                return true;
            }
            if (!fQuiet) printf("warning: %s exists, use --overwrite to replace\n", sFile);
        } catch(err) {
            printError(err);
        }
    }
    return false;
}

/**
 * setRootDir(sDir, fLocalDisks)
 *
 * @param {string} sDir
 * @param {boolean} [fLocalDisks]
 */
export function setRootDir(sDir, fLocalDisks = false)
{
    FileLib.setRootDir(sDir, fLocalDisks);
}
