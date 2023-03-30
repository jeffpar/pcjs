/**
 * @fileoverview Command-line interface to disk image processing module
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
import got        from "got";
import DataBuffer from "../modules/nodebuffer.js";
import PCJSLib    from "../modules/pcjslib.js";
import StreamZip  from "../modules/streamzip.js";
// import StreamZip  from "node-stream-zip";
import Device     from "../../machines/modules/device.js";
import JSONLib    from "../../machines/modules/jsonlib.js";
import DiskInfo   from "../../machines/pcx86/modules/diskinfo.js";
import CharSet    from "../../machines/pcx86/modules/charset.js";

let device = new Device("node");
let printf = device.printf.bind(device);
let sprintf = device.sprintf.bind(device);
let pcjslib = new PCJSLib();
let moduleDir, rootDir;

let nMaxDefault = 512, nMaxInit, nMaxCount, sFileIndex, useServer;

function printError(err, filename)
{
    let msg = err.message;
    if (filename) msg = path.basename(filename) + ": " + msg;
    printf("error: %s\n", msg);
}

/*
 * List of text file types to convert line endings from LF to CR+LF when "--normalize" is specified.
 * A warning is always displayed when we replace line endings in any file being copied to a disk image.
 *
 * NOTE: Some files, like ".BAS" files, aren't always ASCII, which is why we now call isText() on all
 * these file contents first.
 */
let asTextFileExts = [".MD", ".ME", ".BAS", ".BAT", ".RAT", ".ASM", ".LRF", ".MAK", ".TXT", ".XML"];

/**
 * compareDisks(sDisk1, sDisk2)
 *
 * @param {string} sDisk1
 * @param {string} sDisk2
 * @returns {boolean} (true if the contents of this buffer are equal to the contents of the specified buffer, false otherwise)
 */
function compareDisks(sDisk1, sDisk2)
{
    /*
     * Passing null for the encoding parameter tells readFile() to return a buffer (which, in our case, is a DataBuffer).
     */
    let db1 = readFile(sDisk1, null);
    let db2 = readFile(sDisk2, null);
    return db1 && db2 && db1.compare(db2) || false;
}

/**
 * createDisk(diskFile, diskette, argv, done)
 *
 * @param {string} diskFile
 * @param {Object} diskette
 * @param {Array} argv
 * @param {function(DiskInfo)} [done]
 * @returns {DiskInfo|null}
 */
function createDisk(diskFile, diskette, argv, done)
{
    let di;
    let sArchiveFolder = "archive/";
    if (path.dirname(diskFile).endsWith("/disks")) {
        sArchiveFolder = "../archive/";
    }
    let sArchiveFile = path.join(path.dirname(diskFile), sArchiveFolder, path.basename(diskFile).replace(".json", ".img"));
    if (diskette.archive) {
        /*
         * The "archive" property determines what we look for in an "archive/" folder alongside the JSON disk image:
         *
         *  1) If it begins with a period, then we assume it's a file extension (eg, ".img", ".psi", etc)
         *  2) If it's "folder", then the name of the diskette is used as a folder name (with trailing slash)
         *  3) Anything else is more or less used as-is (and unless it contains a period, we add a trailing slash)
         */
        if (diskette.archive[0] == '/') {
            sArchiveFile = path.sep + diskette.archive.slice(1);
        } else if (diskette.archive[0] == '.') {
            sArchiveFile = sArchiveFile.replace(".img", diskette.archive.toUpperCase());
        } else if (diskette.archive == "folder") {
            sArchiveFile = sArchiveFile.replace(".img", path.sep);
        } else {
            sArchiveFile = path.join(path.dirname(sArchiveFile), diskette.archive) + (diskette.archive.indexOf(".") < 0 && !diskette.archive.endsWith(path.sep)? path.sep : "");
        }
    } else if (!existsFile(sArchiveFile)) {
        /*
         * Try automatically switching from a "--disk" to a "--dir" operation if there's no IMG file.
         */
        sArchiveFile = sArchiveFile.replace(".img", path.sep);
    }
    let name = path.basename(sArchiveFile);
    let sectorIDs = diskette.argv['sectorID'] || argv['sectorID'];
    let sectorErrors = diskette.argv['sectorError'] || argv['sectorError'];
    let suppData = diskette.argv['suppData'] || argv['suppData'];
    if (suppData) suppData = readFile(suppData);
    let fDir = false, arcType = 0, sExt = path.parse(sArchiveFile).ext.toLowerCase();
    if (sArchiveFile.endsWith(path.sep)) {
        fDir = true;
        diskette.command = "--dir=" + name;
    }
    else if (sExt == ".arc") {
        arcType = 1;
        diskette.command = "--arc=" + name;
    }
    else if (sExt == ".zip") {
        arcType = 2;
        diskette.command = "--zip=" + name;
    }
    else {
        diskette.command = "--disk=" + name;
    }
    diskette.archive = sArchiveFile;
    printf("checking archive: %s\n", sArchiveFile);
    if (fDir || arcType) {
        let label = diskette.label || argv['label'];
        let normalize = diskette.normalize || argv['normalize'];
        let target = getTarget(diskette.format);
        let verbose = argv['verbose'];
        di = readDir(sArchiveFile, arcType, label, normalize, target, undefined, verbose, done, sectorIDs, sectorErrors, suppData);
    } else {
        di = readDisk(sArchiveFile, false, sectorIDs, sectorErrors, suppData);
    }
    return di;
}

/**
 * dumpSector(di, sector, offset, limit)
 *
 * @param {DiskInfo} di
 * @param {Sector} sector
 * @param {number} [offset]
 * @param {number} [limit]
 * @returns {string}
 */
function dumpSector(di, sector, offset = 0, limit = -1)
{
    let sBytes = "", sChars = "", sLines = "";
    if (limit < 0) limit = di.cbSector;
    while (offset < limit) {
        let b = di.read(sector, offset);
        if (b < 0) break;
        if (!sLines || offset % 16 == 0) sLines += sprintf("%#06x  ", offset);
        sBytes += sprintf("%02x ", b);
        sChars += (b >= 0x20 && b < 0x7f? String.fromCharCode(b) : '.');
        if (++offset % 16 == 0) {
            sLines += sprintf("%48s %16s\n", sBytes, sChars);
            sBytes = sChars = "";
        }
    }
    if (sBytes) sLines += sprintf("%-48s %-16s\n", sBytes, sChars);
    return sLines;
}

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
                sArchive = sPath.slice(0, -sExt.length);
                break;
            }
            continue;
        }
        let sFile = sPath + sExt;
        if (existsFile(sFile)) {
            sArchive = sFile;
            break;
        }
    }
    return sArchive;
}

/**
 * existsFile(sFile, fError)
 *
 * @param {string} sFile
 * @param {boolean} [fError]
 * @returns {boolean}
 */
function existsFile(sFile, fError = true)
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
function getHash(data, type = "md5")
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
function getFullPath(sFile)
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
 * getDiskServer(diskFile)
 *
 * @param {string} diskFile
 * @returns {string|undefined}
 */
function getDiskServer(diskFile)
{
    let match = diskFile.match(/^\/(disks\/|)(diskettes|gamedisks|miscdisks|pcsig[0-9]|pcsig[0-9]*[a-z]*-disks|harddisks|decdisks|cdroms|private)\//);
    return match && (match[1] + match[2]);
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
     * In addition to disk server paths, we had to add /machines (for diskette config files) and /software (for Markdown files
     * containing supplementary copy-protection disk data).
     */
    let match = sFile.match(/^\/(disks\/|)(machines|software|diskettes|gamedisks|miscdisks|pcsig[0-9]|pcsig[0-9]*[a-z]*-disks|harddisks|decdisks|cdroms|private)(\/.*)$/);
    if (match) {
        sFile = path.join(rootDir, (match[2] == "machines" || match[2] == "software"? "" : "disks"), match[2], match[3]);
    }
    return sFile;
}

/**
 * getTarget(sTarget)
 *
 * @param {string} sTarget
 * @returns {number} (target Kb for disk image, 0 if no target)
 */
function getTarget(sTarget)
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
 * isText(data)
 *
 * @param {string} data
 * @return {boolean} true if sData is entirely ASCII (ie, no bytes with bit 7 set) *or* UTF-8
 */
function isText(data)
{
    for (let i = 0; i < data.length; i++) {
        let b = data.charCodeAt(i);
        if ((b & 0x80) && !CharSet.isCP437(data[i])) return false;
    }
    return true;
}

/**
 * isBASICFile(sFile)
 *
 * @param {string} sFile
 * @return {boolean} true if the filename has a ".BAS" extension
 */
function isBASICFile(sFile)
{
    let ext = path.parse(sFile).ext;
    return ext && ext.toUpperCase() == ".BAS";
}

/**
 * isTextFile(sFile)
 *
 * @param {string} sFile
 * @return {boolean} true if the filename contains a known text file extension, false if unknown
 */
function isTextFile(sFile)
{
    let sFileUC = sFile.toUpperCase();
    for (let i = 0; i < asTextFileExts.length; i++) {
        if (sFileUC.endsWith(asTextFileExts[i])) return true;
    }
    return false;
}

/**
 * convertBASICFile(db, fNormalize)
 *
 * NOTE: The code in this function is based on https://github.com/rwtodd/bascat.  There is no warranty, express or implied.
 *
 * @param {DataBuffer} db
 * @param {boolean} [fNormalize]
 * @returns {DataBuffer}
 */
function convertBASICFile(db, fNormalize)
{
    let i = 0, s = "", quoted = false;

    const tokens = [
       /* 0x11 - 0x1B */
       "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
       /* 0x81 - 0x90 */
       "END", "FOR", "NEXT", "DATA", "INPUT", "DIM", "READ", "LET",
       "GOTO", "RUN", "IF", "RESTORE", "GOSUB", "RETURN", "REM", "STOP",
       /* 0x91 - 0xA0 */
       "PRINT", "CLEAR", "LIST", "NEW", "ON", "WAIT", "DEF", "POKE",
       "CONT", "<0x9A>", "<0x9B>", "OUT", "LPRINT", "LLIST", "<0x9F>", "WIDTH",
       /* 0xA1 - 0xB0 */
       "ELSE", "TRON", "TROFF", "SWAP", "ERASE", "EDIT", "ERROR", "RESUME",
       "DELETE", "AUTO", "RENUM", "DEFSTR", "DEFINT", "DEFSNG", "DEFDBL", "LINE",
       /* 0xB1 - 0xC0 */
       "WHILE", "WEND", "CALL", "<0xB4>", "<0xB5>", "<0xB6>", "WRITE", "OPTION",
       "RANDOMIZE", "OPEN", "CLOSE", "LOAD", "MERGE", "SAVE", "COLOR", "CLS",
       /* 0xC1 - 0xD0 */
       "MOTOR", "BSAVE", "BLOAD", "SOUND", "BEEP", "PSET", "PRESET", "SCREEN",
       "KEY", "LOCATE", "<0xCB>", "TO", "THEN", "TAB(", "STEP", "USR",
       /* 0xD1 - 0xE0 */
       "FN", "SPC(", "NOT", "ERL", "ERR", "STRING$", "USING", "INSTR",
       "'", "VARPTR", "CSRLIN", "POINT", "OFF", "INKEY$", "<0xDF>", "<0xE0>",
       /* 0xE1 - 0xF0 */
       "<0xE1>", "<0xE2>", "<0xE3>", "<0xE4>", "<0xE5>", ">", "=", "<",
       "+", "-", "*", "/", "^", "AND", "OR", "XOR",
       /* 0xF1 - 0xF4 */
       "EQV", "IMP", "MOD", "\\",
       /* 0xFD81 - 0xFD8B */
       "CVI", "CVS", "CVD", "MKI$", "MKS$", "MKD$", "<0xFD87>", "<0xFD88>",
       "<0xFD89>", "<0xFD8A>", "EXTERR",
       /* 0xFE81 - 0xFE90 */
       "FILES", "FIELD", "SYSTEM", "NAME", "LSET", "RSET", "KILL", "PUT",
       "GET", "RESET", "COMMON", "CHAIN", "DATE$", "TIME$", "PAINT", "COM",
       /* 0xFE91 - 0xFEA0 */
       "CIRCLE", "DRAW", "PLAY", "TIMER", "ERDEV", "IOCTL", "CHDIR", "MKDIR",
       "RMDIR", "SHELL", "ENVIRON", "VIEW", "WINDOW", "PMAP", "PALETTE", "LCOPY",
       /* 0xFEA1 - 0xFEA8 */
       "CALLS", "<0xFEA2>", "<0xFEA3>", "NOISE", "PCOPY", "TERM", "LOCK", "UNLOCK",
       /* 0xFF81 - 0xFE90 */
       "LEFT$", "RIGHT$", "MID$", "SGN", "INT", "ABS", "SQR", "RND",
       "SIN", "LOG", "EXP", "COS", "TAN", "ATN", "FRE", "INP",
       /* 0xFF91 - 0xFEA0 */
       "POS", "LEN", "STR$", "VAL", "ASC", "CHR$", "PEEK", "SPACE$",
       "OCT$", "HEX$", "LPOS", "CINT", "CSNG", "CDBL", "FIX", "PEN",
       /* 0xFFA1 - 0xFFA5 */
       "STICK", "STRIG", "EOF", "LOC", "LOF"
    ];

    let EOF = function() {
        return i >= db.length;
    };

    let readU8 = function() {
        return (i < db.length? db.readUInt8(i++) : 0);
    };

    let peekU8 = function(v) {
        return !EOF() && db.readUInt8(i) == v;
    };

    let peekU16 = function(v1, v2) {
        return (i < db.length - 1) && (db.readUInt8(i) == v1) && (db.readUInt8(i+1) == v2);
    };

    let skip = function(off) {
        i += off;
    };

    let readU16 = function() {
        let v = (i < db.length - 1)? db.readUInt16LE(i) : 0;
        i += 2;
        return v;
    };

    let readS16 = function() {
        let v = (i < db.length - 1)? db.readInt16LE(i) : 0;
        i += 2;
        return v;
    };

    let readMBF32 = function() {
        let mbf = new Array(4);
        for (let i = 0; i < mbf.length; i++) {
            mbf[i] = readU8();
        }
        if (mbf[3] == 0) return 0.0;

        let buf = new ArrayBuffer(mbf.length);
        let view = new DataView(buf);
        let sign = (mbf[2] & 0x80);
        let exp = (mbf[3] - 2) & 0xff;

        view.setUint8(3, sign | (exp >> 1));
        view.setUint8(2, ((exp << 7) & 0x80) | (mbf[2] & 0x7f));
        view.setUint8(1, mbf[1]);
        view.setUint8(0, mbf[0]);

        return view.getFloat32(0, true);
    }

    let readMBF64 = function() {
        let mbf = new Array(8);
        for (let i = 0; i < mbf.length; i++) {
            mbf[i] = readU8();
        }
        if (mbf[7] == 0) return 0.0;

        let sign = (mbf[6] & 0x80);
        mbf[6] &= 0x7f;
        let exp = (mbf[7] - 129 + 1023) & 0xffff;
        for (let i = 0; i < 7; i++) {
            mbf[i] = ((mbf[i] >> 3) | ((mbf[i + 1] << 5) & 0xff));
        }
        mbf[7] = (sign | ((exp >> 4) & 0x7f));
        mbf[6] = ((mbf[6] & 0x0f) | ((exp & 0x0f) << 4));

        let buf = new ArrayBuffer(mbf.length);
        let view = new DataView(buf);
        mbf.forEach(function (b, i) {
            view.setUint8(i, b);
        });
        return view.getFloat64(0, true);
    }

    /**
     * unprotect(db)
     *
     * From: https://slions.net/threads/deciphering-gw-basic-basica-protected-programs.50/:
     *
     *  "The American Cryptogram Association (ACA) publishes a bimonthly periodical journal called The Cryptogram.
     *   In their Computer Supplement #19 of summer 1994, Paul C. Kocher published BASCRACK, a C program to decipher
     *   GW-BASIC protected files."
     *
     * This is a JavaScript port of BASCRACK.
     *
     * @param {DataBuffer} db
     * @returns {DataBuffer}
     */
    let unprotect = function(db) {
        const key1 = [
            0xA9, 0x84, 0x8D, 0xCD, 0x75, 0x83, 0x43, 0x63, 0x24, 0x83, 0x19, 0xF7, 0x9A
        ];
        const key2 = [
            0x1E, 0x1D, 0xC4, 0x77, 0x26, 0x97, 0xE0, 0x74, 0x59, 0x88, 0x7C
        ]
        if (db.readUInt8(0) == 0xFE) {                  // 0xFE: protected GW-BASIC signature byte
            let index = 0;
            let dbNew = new DataBuffer(db.length);
            let i = 0;
            dbNew.writeUInt8(0xFF, i++);                // 0xFF: unprotected GW-BASIC signature byte
            while (i < db.length) {
                let b = db.readUInt8(i);
                if (b != 0x1A || i < db.length - 1) {   // don't "decrypt" the final byte if it's 0x1A (EOF)
                    b -= 11 - (index % 11);
                    b ^= key1[index % 13];
                    b ^= key2[index % 11];
                    b += 13 - (index % 13);
                    index = (index+1) % (13*11);
                }
                dbNew.writeUInt8(b & 0xFF, i++);
            }
            db = dbNew;
        }
        return db;
    }

    let getToken = function() {
        let token = "";
        let v = readU8();
        if (v >= 0xFD) {
            v = (v << 8) | readU8();
        }
        if (v) {
            /*
             * The original code failed to account for programs that include IBM PC drawing characters
             * inside strings, and those characters can literally be any 8-bit value, which is why we now
             * track the "quoted" state.
             *
             * TODO: Now that "normalization" also includes CP437 to UTF-8 conversion, we will probably
             * want to update the import normalization of BAS files too (ie, convert any UTF-8 characters
             * back to CP437).
             */
            if (quoted && v < 0xFD || v >= 0x20 && v <= 0x7E && v != 0x3A) {
                token = String.fromCharCode(v);
                if (fNormalize) {
                    token = CharSet.fromCP437(token);
                }
                if (v == 0x22) quoted = !quoted;
            }
            else {
                switch (v) {
                case 0x0B:
                    token = "&O" + readU16().toString(8);
                    break;
                case 0x0C:
                    token = "&H" + readU16().toString(16).toUpperCase();
                    break;
                case 0x0E:
                    token = readU16().toString();
                    break;
                case 0x0F:
                    token = readU8().toString();
                    break;
                case 0x1C:
                    token = readS16().toString();
                    break;
                case 0x1D:
                    token = readMBF32().toString();
                    break;
                case 0x1F:
                    token = readMBF64().toString() + '#';
                    break;
                default:
                    if (v == 0x3A) {
                        if (peekU8(0xA1)) {
                            token = "ELSE";
                            skip(1);
                            break;
                        }
                        if (peekU16(0x8F, 0xD9)) {
                            token = "'";
                            skip(2);
                            break;
                        }
                        token = String.fromCharCode(v);
                        break;
                    }
                    if (v == 0xB1 && peekU8(0xE9)) {
                        token = "WHILE";
                        skip(1);
                        break;
                    }
                    if (v >= 0x11 && v <= 0x1B) {
                        token = tokens[v - 0x11];
                        break;
                    }
                    if (v >= 0x81 && v <= 0xF4) {
                        token = tokens[v - 118];
                        break;
                    }
                    if (v >= 0xFD81 && v <= 0xFD8B) {
                        token = tokens[v - 64770];
                        break;
                    }
                    if (v >= 0xFE81 && v <= 0xFEA8) {
                        token = tokens[v - 65015];
                        break;
                    }
                    if (v >= 0xFF81 && v <= 0xFFA5) {
                        token = tokens[v - 65231];
                        break;
                    }
                    break;
                }
                if (!token) {
                    s += "<0x" + v.toString(16) + ">";
                }
            }
        }
        return token;
    }

    db = unprotect(db);

    let b = readU8();
    if (b == 0xFF) {
        while (!EOF()) {
            let t;
            if (readU16() == 0) break;
            s += readU16() + "  ";
            while ((t = getToken())) {
                s += t;
            }
            s += (fNormalize? "\n" : "\r\n");
            quoted = false;         // if you end a line with an open quote, BASIC automatically "closes" it
        }
        db = new DataBuffer(s);
    } else {
        db = new DataBuffer(CharSet.fromCP437(db.toString(), false));
    }
    return db;
}

/**
 * mapDiskToServer(diskFile)
 *
 * @param {string} diskFile
 * @returns {string}
 */
function mapDiskToServer(diskFile)
{
    if (useServer || !existsFile(getFullPath(diskFile))) {
        diskFile = diskFile.replace(/^\/disks\/(diskettes|gamedisks|miscdisks|harddisks|decdisks|pcsig[0-9]|pcsig[0-9a-z]*-disks|private)\//, "https://$1.pcjs.org/").replace(/^\/disks\/cdroms\/([^/]*)\//, "https://$1.pcjs.org/");
    }
    return diskFile;
}

/**
 * printFileDesc(diskFile, diskName, desc)
 *
 * @param {string} diskFile
 * @param {string} diskName
 * @param {Object} desc
 */
function printFileDesc(diskFile, diskName, desc)
{
    printf("%-32s  %-12s  %s  %s %7d  %s\n", desc[DiskInfo.FILEDESC.HASH] || "-".repeat(32), desc[DiskInfo.FILEDESC.NAME], desc[DiskInfo.FILEDESC.DATE], desc[DiskInfo.FILEDESC.ATTR], desc[DiskInfo.FILEDESC.SIZE] || 0, diskName + ':' + desc[DiskInfo.FILEDESC.PATH]);
}

/**
 * printManifest(diskFile, diskName, manifest)
 *
 * @param {string} diskFile
 * @param {string} diskName
 * @param {Array.<FILEDESC>} manifest
 */
function printManifest(diskFile, diskName, manifest)
{
    manifest.forEach(function printManifestFile(desc) {
        printFileDesc(diskFile, diskName, desc);
    });
}

/**
 * processDisk(di, diskFile, argv, diskette)
 *
 * @param {DiskInfo} di
 * @param {string} diskFile
 * @param {Array} argv
 * @param {Object} [diskette] (if present, then we were invoked by readCollection(), so any --output option should be ignored)
 */
function processDisk(di, diskFile, argv, diskette)
{
    di.setArgs(argv.slice(1).join(' '));

    /*
     * Any "--format=xxx" acts as a filter function; if the disk's format doesn't contain
     * the specified format, we skip the disk.
     */
    if (typeof argv['format'] == "string") {
        let sFormat = di.getFormat();
        if (sFormat.indexOf(argv['format']) < 0) {
            printf("warning: specified format (\"%s\") does not match disk format (\"%s\")\n", argv['format'], sFormat);
            return;
        }
    }

    if (!argv['quiet']) {
        printf("processing %s: %d bytes (checksum %d, hash %s)\n", di.getName(), di.getSize(), di.getChecksum(), di.getHash());
    }

    let sFindName = argv['file'];
    if (typeof sFindName == "string") {
        let sFindText = argv['find'];
        if (typeof sFindText != "string") sFindText = undefined;
        /*
         * TODO: Implement support for finding text in findFile()....
         */
        let desc = di.findFile(sFindName, sFindText);
        if (desc) {
            printFileDesc(di.getName(), desc);
            if (argv['index']) {
                /*
                 * We cheat and search for matching hash values in the provided index; this is much faster than laboriously
                 * opening and searching all the other disk images, even when they DO contain pre-generated file tables.
                 */
                if (sFileIndex === undefined) {
                    sFileIndex = readFile(argv['index']);
                    if (!sFileIndex) sFileIndex = null;
                }
                let cMatches = 0;
                if (sFileIndex) {
                    let re = new RegExp("^" + desc[DiskInfo.FILEDESC.HASH] + ".*$", "gm"), match;
                    while ((match = re.exec(sFileIndex))) {
                        if (match[0].indexOf(diskFile) >= 0) continue;
                        if (!cMatches++) printf("see also:\n");
                        printf("%s\n", match[0]);
                    }
                }
                if (!cMatches) printf("no matches\n");
            }
        }
    }

    let chs = argv['dump'];
    if (chs) {
        if (typeof chs != "string") {
            printf("specify --dump=C:H:S[:N]\n");
        } else {
            let values = chs.split(':');
            let iCylinder = +values[0], iHead = +values[1], idSector = +values[2], nSectors = +values[3] || 1;
            while (nSectors-- > 0) {
                let sector = di.seek(iCylinder, iHead, idSector);
                if (!sector) {
                    printf("unable to find %d:%d:%d\n", iCylinder, iHead, idSector);
                    break;
                }
                let sLines = sprintf("CHS=%d:%d:%d\n", iCylinder, iHead, idSector);
                sLines += dumpSector(di, sector, 0);
                printf("%s\n", sLines);
                idSector++;
            }
        }
    }

    if (argv['list']) {
        let sLines = "";
        let iVolume = +argv['volume'];
        if (isNaN(iVolume)) iVolume = -1;
        if (argv['list'] == "unused") {
            let lba = -1;
            while ((lba = di.getUnusedSector(iVolume, lba)) >= 0) {
                let sector = di.getSector(lba);
                let offset = di.getUnusedSectorData(sector);
                sLines += sprintf("\nLBA=%d\n", lba);
                /*
                 * There are two partial sector usage cases: the current sector contains the last N bytes of a file,
                 * or the sector is COMPLETELY unused (ie, offset is zero).  When would a file have a completely unused
                 * sector?  When the disk's cluster size is 2 or more sectors.  If a file ends somewhere in the middle
                 * of a cluster, leaving 1 or more sectors in that cluster unused, we still "flag" all the sectors in
                 * the cluster as belonging to the file.
                 *
                 * This is why we don't differentiate those cases on the basis of whether there's an associated file,
                 * but simply on whether the offset is zero.
                 */
                if (offset) {
                    let iFile = sector[DiskInfo.SECTOR.FILE_INDEX];
                    device.assert(iFile != undefined);
                    let file = di.fileTable[iFile];
                    let cbPartial = file.size - sector[DiskInfo.SECTOR.FILE_OFFSET];
                    sLines += sprintf("last %d bytes of %s:\n", cbPartial, file.path);
                    sLines += dumpSector(di, sector, 0, offset);
                }
                sLines += sprintf("unused %d bytes:\n", di.cbSector - offset);
                sLines += dumpSector(di, sector, offset);
            }
            if (!sLines) sLines = "no unused data space on disk";
        } else {
            /*
             * Other --list options include: "metadata", "sorted"
             */
            sLines = di.getFileListing(iVolume, 0, argv['list']) || "\tno listing available\n";
        }
        printf("%s\n", sLines);
    }

    if (argv['extract']) {
        let manifest = di.getFileManifest();
        manifest.forEach(function extractManifestFile(desc) {
            /*
             * Parse each file descriptor in much the same way that buildFileTableFromJSON() does.  That function
             * doesn't get the file's CONTENTS, because it's working with the file descriptors that have been stored
             * in a JSON file (where CONTENTS would be redundant and a waste of space).  Here, we call getFileManifest(),
             * which calls getFileDesc(true), which returns a complete file descriptor that includes CONTENTS.
             */
            let sPath = desc[DiskInfo.FILEDESC.PATH];
            if (sPath[0] == path.sep) sPath = sPath.substr(1);      // PATH should ALWAYS start with a slash, but let's be safe
            let name = path.basename(sPath);
            let size = desc[DiskInfo.FILEDESC.SIZE] || 0;
            let attr = +desc[DiskInfo.FILEDESC.ATTR];
            /*
             * We call parseDate() requesting a *local* date from the timestamp, because that's exactly how we're going
             * to use it: as a local file modification time.  We used to deal exclusively in UTC dates, unpolluted
             * by timezone information, but here we don't really have a choice.  Trying to fix the date after the fact,
             * by adding Date.getTimezoneOffset(), doesn't always work either, probably due to Daylight Savings Time issues;
             * best not to go down that rabbit hole.
             */
            let date = device.parseDate(desc[DiskInfo.FILEDESC.DATE], true);
            let contents = desc[DiskInfo.FILEDESC.CONTENTS] || [];
            let db = new DataBuffer(contents);
            device.assert(size == db.length);
            let subDir = typeof argv['extract'] != "string"? di.getName() : "";
            if (subDir || name == argv['extract']) {
                let fSuccess = false;
                if (argv['collection']) {
                    subDir = getFullPath(path.join(path.dirname(diskFile), "archive", subDir));
                    if (diskFile.indexOf("/private") == 0 && diskFile.indexOf("/disks") > 0) {
                        subDir = subDir.replace("/disks/archive", "/archive");
                    }
                }
                sPath = path.join(subDir, sPath);
                /*
                 * OS X / macOS loves to scribble bookkeeping data on any read-write diskettes or diskette images that
                 * it mounts, so if we see any of those remnants (which are normally hidden, but we do not assume that they
                 * always will be), then we ignore them.
                 *
                 * This is why I make all my IMG files read-only and also write-protect physical diskettes before inserting
                 * them into a drive.  Other operating systems pose similar threats.  For example, Windows 9x likes to modify
                 * the 8-byte OEM signature field of a diskette's boot sector with unique volume-tracking identifiers.
                 */
                // if (attr & DiskInfo.ATTR.HIDDEN) {
                    if (sPath.endsWith("~1.TRA") || sPath.endsWith("TRASHE~1") || sPath.indexOf("FSEVEN~1") >= 0) return;
                // }
                let dir = path.dirname(sPath);
                if (!existsFile(dir)) {
                    fs.mkdirSync(dir, {recursive: true});
                }
                if (attr & DiskInfo.ATTR.SUBDIR) {
                    if (!existsFile(sPath)) {
                        fs.mkdirSync(sPath);
                        fSuccess = true;
                    }
                } else if (!(attr & DiskInfo.ATTR.VOLUME)) {
                    let fPrinted = false;
                    let fQuiet = argv['quiet'];
                    let sFile = sPath.substr(subDir.length? subDir.length + 1 : 0);
                    if (!argv['collection']) {
                        if (!fQuiet) printf("extracting: %s\n", sFile);
                    } else {
                        let sArchive = checkArchive(sPath, true);
                        if (sArchive) {
                            let fExtracted;
                            if (existsFile(sPath)) {
                                if (!fQuiet) {
                                    printf("extracted: %s\n", sFile);
                                    fPrinted = true;
                                }
                            }
                            if (!existsFile(sArchive)) {
                                fExtracted = false;
                            } else {
                                let aArchiveFiles = glob.sync(path.join(sArchive, "**"));
                                if (!aArchiveFiles.length) {
                                    fExtracted = false;
                                    printf("warning: empty archive folder: %s\n", sArchive);
                                } else if (!fQuiet) {
                                    aArchiveFiles.forEach((sArchiveFile) => {
                                        printf("expanded:  %s\n", sArchiveFile.substr(subDir.length));
                                    });
                                }
                            }
                            if (fExtracted === false) {
                                // printf("unar -o %s -d \"%s\"\n", path.dirname(sArchive), sPath);
                            }
                        }
                        if (existsFile(sPath)) {
                            if (!fPrinted && !fQuiet) printf("extracted: %s\n", sFile);
                            return;
                        }
                        printf("extracting: %s\n", sFile);
                    }
                    /*
                     * Originally, "normalize" was just an import option (to fix line endings of known text files on
                     * disks we created); however, I'm going to make it an export option as well, and not just to revert
                     * line endings, but to also address the fact that there are a lot of old "tokenized" BASIC files out
                     * in the world, and they are much easier to work with locally in their "un-tokenized" form.
                     */
                    if (argv['normalize']) {
                        if (isBASICFile(sPath)) {
                            db = convertBASICFile(db, true);
                        }
                    }
                    fSuccess = writeFile(sPath, db, true, argv['overwrite'], !!(attr & DiskInfo.ATTR.READONLY), argv['quiet']);
                }
                if (fSuccess) fs.utimesSync(sPath, date, date);
            }
        });
    }

    if (argv['manifest']) {
        let manifest = di.getFileManifest(getHash, argv['metadata']);
        printManifest(diskFile, di.getName(), manifest);
    }

    /*
     * If --rewrite, then rewrite the JSON disk image.  --overwrite is implicit.
     */
    if (argv['rewrite']) {
        if (diskFile.endsWith(".json")) {
            writeDisk(diskFile, di, argv['legacy'], 0, true, argv['quiet'], undefined, argv['source']);
        }
    }

    /*
     * If --checkdisk, then let's load the corresponding archived disk image (.IMG) as well, convert it to JSON,
     * load the JSON as a disk image, save it as a temp .IMG, and verify that temp image and archived image are identical.
     *
     * You must ALSO specify --rebuild if you want the JSON disk image updated as well.
     */
    if (argv['checkdisk'] && diskette) {
        if (diskette.format) {
            let matchFormat = diskette.format.match(/PC([0-9]+)K/);
            if (matchFormat) {
                let diskSize = di.getSize();
                if (+matchFormat[1] * 1024 != diskSize) {
                    printf("warning: format '%s' does not match disk size (%d) for %s\n", diskette.format, diskSize, diskFile);
                }
            }
        }
        /*
         * If a JSON disk image was originally built from kryoflux data AND included special args (eg, for copy-protection),
         * then don't bother with the rebuild, because those disks can't be saved as IMG disk images.
         */
        if (diskFile.endsWith(".json") && !(diskette.kryoflux && diskette.args)) {
            if (typeof argv['checkdisk'] == "string" && diskFile.indexOf(argv['checkdisk']) < 0) return;
            createDisk(diskFile, diskette, argv, function(diTemp) {
                let sTempJSON = path.join(rootDir, "tmp", path.basename(diskFile).replace(/\.[a-z]+$/, "") + ".json");
                diTemp.setArgs(sprintf("%s --output %s%s", diskette.command, sTempJSON, diskette.args));
                writeDisk(sTempJSON, diTemp, argv['legacy'], 0, true, false, undefined, diskette.source);
                let warning = false;
                if (diskette.archive.endsWith(".img")) {
                    let json = diTemp.getJSON();
                    diTemp.buildDiskFromJSON(json);
                    let sTempIMG = sTempJSON.replace(".json",".img");
                    writeDisk(sTempIMG, diTemp, true, 0, true, false, undefined, diskette.source);
                    if (!compareDisks(sTempIMG, diskette.archive)) {
                        printf("warning: %s unsuccessfully rebuilt\n", diskette.archive);
                        warning = true;
                    } else {
                        fs.unlinkSync(sTempIMG);
                    }
                }
                if (!warning) {
                    if (argv['rebuild']) {
                        printf("rebuilding %s\n", diskFile);
                        fs.renameSync(sTempJSON, getFullPath(diskFile));
                    } else {
                        fs.unlinkSync(sTempJSON);
                    }
                }
            });
        }
    }

    /*
     * If --checkpage, then get the disk's listing and see if it's up-to-date in the website's index.md.
     *
     * Additionally, if the page doesn't have a machine, add one, tailored to the software's requirements as best we can.
     *
     * You must ALSO specify --rebuild if you want the index.md updated (or created) as well.
     */
    if (argv['checkpage'] && diskette && !diskette.hidden && !diskette.demos) {
        /*
         * We don't need/want any software pages checked/built for private diskette collections.
         *
         * The PCSIG08 software pages were hand-built, so it would take some extra effort to automatically rebuild those;
         * besides, when the pages were moved from /software/pcx86/shareware/pcsig08 to /software/pcx86/sw/misc/pcsig08,
         * the diskettes on /pcsig8a-disks and /pcsig8b-disks remained at /pcx86/shareware/pcsig08, so those paths would
         * have to be changed, too.  The diskettes.json on each of those servers are what control where the named diskettes
         * are loaded from, so the difference in paths doesn't affect the current pages; it's just something to be aware of
         * if we ever try to automatically rebuild the PCSIG software pages, too.
         */
        if (diskFile.indexOf("/private") >= 0 || diskFile.indexOf("/pcsig8") >= 0) return;

        let sListing = di.getFileListing(0, 4);
        if (!sListing) return;
        let sIndex = "", sIndexNew = "", sAction = "";
        let sHeading = "\n### Directory of " + diskette.name + "\n";
        let sIndexFile = path.join(path.dirname(diskFile.replace(/\/(disks\/|)(diskettes|gamedisks|miscdisks|harddisks|pcsig[0-9]|pcsig[0-9a-z-]*-disks|private)\//, "/software/")), "index.md");
        if (existsFile(sIndexFile)) {
            sIndex = sIndexNew = readFile(sIndexFile);
            sAction = "updated";
        } else {
            if (diskette.title) {
                let sTitle = diskette.title;
                if (sTitle.match(/[#:[\]{}]/)) {
                    sTitle = '"' + sTitle + '"';
                }
                let permalink = path.dirname(diskette.path.replace(/^\/(disks\/|)[^/]+/, "/software")) + path.sep;
                sIndexNew = "---\nlayout: page\ntitle: " + sTitle + "\npermalink: " + permalink + "\n---\n";
                sIndexNew += sHeading + sListing;
                sAction = "created";
            }
        }

        /*
         * Step 1: make sure there's a machine present to load/examine/test the software.
         */
        let sMachineEmbed = "";
        let matchFrontMatter = sIndexNew.match(/^---\n([\s\S]*?\n)---\n/);
        if (matchFrontMatter && diskette) {
            let sFrontMatter = matchFrontMatter[1];
            let matchMachines = sFrontMatter.match(/^machines: *\n([\s\S]*?\n)(\S|$)/m);
            if (matchMachines) {
                /*
                 * If this was a generated machine and --rebuild is set, then we'll regenerate it.
                 */
                if (matchMachines[1].indexOf("autoGen: true") >= 0 && matchMachines[1].indexOf(diskette.name) >= 0 && argv['rebuild']) {
                    sFrontMatter = sFrontMatter.replace(matchMachines[0], matchMachines[2]);
                    sIndexNew = sIndexNew.replace(/\n\{% include machine.html .*?%\}\n/, "");
                    matchMachines = null;
                }
            }
            if (!matchMachines) {
                /*
                 * To add a compatible machine, we look at a few aspects of the diskette itself:
                 *
                 *      if the diskette format > 360K or any file dates are >= 1986, then a PC AT ("5170") is preferred;
                 *      otherwise, if any file dates are >= 1984, a PC XT ("5160") is preferred;
                 *      otherwise, a PC ("5150") should suffice.
                 *
                 * However, a diskette's "version" definition can also include a "@hardware" configuration with "options"
                 * that supplement or override those initial preferences:
                 *
                 *      manufacturer, such as "ibm" or "compaq"
                 *      model, such as "5150" or "5160"
                 *      video preference, such as "mda" or "cga"
                 *      memory preference, such "256kb" or "640kb"
                 *      hardware preference, such as "com1" or "mouse"
                 *      operating system (aka boot disk) preference, such as "PC DOS 2.00 (Disk 1)"
                 *
                 * Browse diskettes.json for more examples (look for "@hardware" properties).
                 *
                 * TODO: Finish support for all of the above preferences (eg, mouse support, serial and parallel ports, etc).
                 *
                 * TODO: Consider using the @hardware 'machine' property to allow a specific machine to be used; when that property
                 * is named 'url' instead, the /_includes/explorer/software.html template uses it to create a hardware_url link for the
                 * software, but we REALLY prefer having dedicated pages for each piece of software.
                 */
                let diskSize = di.getSize() / 1024;
                let dateNewest = di.getNewestDate(true);
                let yearNewest = dateNewest && dateNewest.getFullYear() || 1981;
                let hardware = diskette.hardware || {}, options = "";
                if (hardware) options = hardware.options || "";
                let aOptions = options.split(",");
                let findOption = function(aPossibleOptions) {
                    for (let i = 0; i < aPossibleOptions.length; i++) {
                        if (!aPossibleOptions[i]) continue;
                        for (let j = 0; j < aOptions.length; j++) {
                            if (aOptions[j].indexOf(aPossibleOptions[i]) >= 0) return aOptions[j];
                        }
                    }
                    return aPossibleOptions[0];
                };
                let findConfig = function(configPath) {
                    configPath = getFullPath(configPath);
                    let configPossible;
                    let aPossibleConfigs = glob.sync(configPath);
                    let optionMemory = findOption(["kb"]);
                    for (let i = 0; i < aPossibleConfigs.length; i++) {
                        let configFile = aPossibleConfigs[i];
                        if (configFile.indexOf("debugger") > 0 || configFile.indexOf("array") > 0) continue;
                        configPossible = configFile.substr(rootDir.length);
                        if (configFile.indexOf(optionMemory) >= 0) break;
                    }
                    return configPossible;
                };
                /*
                 * Now that we have all the raw inputs ("ingredients"), let's toss some defaults together.
                 */
                let sAutoGen = "    autoGen: true\n";
                let sAutoType = hardware.autoType;
                if (sAutoType == undefined) sAutoType = diskette.autoType;
                let manufacturer = findOption(["ibm","compaq"]);
                let sDefaultIBMModel = diskSize > 360 || yearNewest >= 1986? "5170" : (yearNewest >= 1984? "5160" : "5150");
                let sDefaultCOMPAQModel = diskSize > 360 || yearNewest >= 1986? "deskpro386" : "portable";
                let model = findOption({
                    "ibm": [sDefaultIBMModel, "5150","5160","5170"],
                    "compaq": [sDefaultCOMPAQModel, "portable","deskpro386"]
                }[manufacturer]);
                let video = findOption(["*","mda","cga","ega","vga","vdu"]);
                let configFile = hardware.config || findConfig("/machines/pcx86/" + manufacturer + '/' + model + '/' + video + "/**/machine.xml");
                if (configFile == "none") configFile = "";
                if (configFile) {
                    let bootDisk = findOption(["", "DOS"]);
                    let demoDisk = diskette.name;
                    let sDiskettes = "";
                    let diskMatch = diskFile.match(/\/pcsig\/([0-9])[0-9]+-/);
                    if (diskMatch) {
                        sDiskettes = "    diskettes: /machines/pcx86/diskettes.json,/disks/pcsig" + diskMatch[1] + "/pcx86/diskettes.json\n";
                    }
                    if (diskette.bootable) {
                        bootDisk = demoDisk;
                        demoDisk = "";
                    } else {
                        if (sAutoType == undefined) sAutoType = "$date\\r$time\\rB:\\rDIR\\r";
                    }
                    let sMachineID = (model.length <= 4? manufacturer : "") + model;
                    let sMachine = "  - id: " + sMachineID + "\n    type: pcx86\n    config: " + configFile + "\n";
                    for (let prop in hardware) {
                        if (prop == "autoType" || prop == "config" || prop == "machine" || prop == "options" || prop == "url" || prop[0] == '@') continue;
                        let chQuote = "";
                        if (prop == "drives" || prop == "floppyDrives") {
                            chQuote = "'";
                            if (prop == "drives") bootDisk = "None";
                            sAutoType = "";
                        }
                        sMachine += "    " + prop + ": " + chQuote + hardware[prop] + chQuote + "\n";
                    }
                    if (bootDisk) bootDisk = "      A: \"" + bootDisk + "\"\n";
                    if (demoDisk) demoDisk = "      B: \"" + demoDisk + "\"\n";
                    let sAutoMount = "    autoMount:\n" + bootDisk + demoDisk;
                    if (sAutoType) sAutoType = "    autoType: " + sAutoType + "\n";
                    sFrontMatter += "machines:\n" + sMachine + sDiskettes + sAutoGen + sAutoMount + (sAutoType || "");
                    sIndexNew = sIndexNew.replace(matchFrontMatter[1], sFrontMatter);
                    sMachineEmbed = "\n{% include machine.html id=\"" + sMachineID + "\" %}\n";
                }
            }
        }

        /*
         * Step 2: Making sure there's an up-to-date directory listing.  The listing can include a picture of
         * the diskette, if any, and a link to the source of the diskette, if any, so append those to the listing now.
         *
         * Picture example:
         *
         *      ![MS C 1.03 Beta (Disk 1)]({{ site.software.miscdisks.server }}/pcx86/lang/microsoft/c/1.03/MSC103-BETA-DISK1.jpg)
         */
        let sDiskPic = diskette.path.replace(".json", ".jpg");
        if (!existsFile(sDiskPic)) {
            sDiskPic = diskette.path.replace(".json", ".png");
        }
        if (existsFile(sDiskPic)) {
            let sDiskServer = getDiskServer(sDiskPic);
            if (sDiskServer) {
                sListing += "\n![" + diskette.name + "]({{ site.software." + sDiskServer.replace("disks/", "") + ".server }}" + sDiskPic.slice(sDiskServer.length + 1) + ")\n";
            }
        }
        if (diskette.source && !diskette.source.indexOf("http")) {
            sListing += "\n[[Source](" + diskette.source + ")]\n";
        }

        let sMatch = "\n(##+)\\s+Directory of " + diskette.name.replace("(","\\(").replace(")","\\)").replace("*","\\*").replace("+","\\+") + " *\n([\\s\\S]*?)(\n[^!{[\\s]|$)";
        let matchDirectory = sIndexNew.match(new RegExp(sMatch));
        if (matchDirectory) {
            if (matchDirectory[1].length != 3) {
                printf("warning: directory heading level '%s' should really be '###'\n", matchDirectory[1]);
            }
            let matchInclude = matchDirectory[2].match(/\n\{%.*?%}\n/);
            /*
             * Work around JavaScript's handling of '$' in the replacement string ('$' is interpreted as a back-reference
             * indicator, with '$$' interpreted as '$', even when the search string is NOT a regular expression) by first
             * replacing every '$' with '$$' in sListing (the only portion where we're likely encounter '$' characters).
             *
             * Note that the work-around itself is subject to the interpretation of '$$' as '$', therefore it must use '$$$$'.
             */
            sIndexNew = sIndexNew.replace(matchDirectory[0], sHeading + (matchInclude? matchInclude[0] : "") + sListing.replace(/\$/g, "$$$$") + matchDirectory[3]);
        } else {
            /*
             * Look for the last "Directory of ..." entry and insert this directory listing after it (and if there's none, append it).
             */
            sListing = sHeading + sListing;
            let matchLast, match, re = /\n(##+)\\s+Directory of [^\n]*\n([\\s\\S]*?)\n(\\S|$)/g;
            while ((match = re.exec(sIndexNew))) {
                matchLast = match;
            }
            let index = sIndexNew.length, length = 0;
            if (matchLast) {
                index = matchLast.index;
                length = matchLast[0].length;
                if (matchLast[3]) length--;
            }
            sIndexNew = sIndexNew.substr(0, index + length) + sListing + sIndex.substr(index + length);
        }

        /*
         * Step 3: If a generated machine needs to be embedded, put it ahead of the first directory listing
         * (which is why we waited until now).  Also, any available 'info' summary lines should be embedded as well.
         */
        let sDiskInfo = ""
        if (diskette.info) {
            let i;
            sDiskInfo += "\n## Information about \"" + diskette.info.diskTitle + "\"\n\n";
            for (i = 0; i < diskette.info.diskSummary.length; i++) {
                sDiskInfo += "    " + diskette.info.diskSummary[i] + "\n";
            }
        }
        let sInsert = sMachineEmbed;
        if (sIndexNew.indexOf(sDiskInfo) < 0) {
            sInsert += sDiskInfo;
        }
        if (sInsert) {
            matchDirectory = sIndexNew.match(/\n(##+)\s+Directory of /);
            if (matchDirectory) {
                sIndexNew = sIndexNew.replace(matchDirectory[0], sInsert + matchDirectory[0]);
            } else {
                sIndexNew += sInsert;
            }
        }

        /*
         * Step 4: Add a document gallery section if there are any documents associated with this software.
         */
        if (diskette.documents) {
            let sHeader = "\n<!-- Documentation -->\n";
            let sGallery = sHeader + "\n{% include gallery/documents.html width=\"200\" height=\"260\" %}\n";
            if (sIndexNew && sIndexNew.indexOf(sHeader) < 0) {
                sIndexNew += sGallery;
            }
        }

        if (!sIndexNew) {
            printf("\tmissing index for \"%s\": %s\n", diskette.title, sIndexFile);
        }
        else if (sIndexNew != sIndex) {
            if (argv['rebuild']) {
                if (writeFile(getFullPath(sIndexFile), sIndexNew, true, true)) {
                    printf("\t%s index for \"%s\": %s\n", sAction, diskette.title, sIndexFile);
                }
            } else {
                printf("\tindex for \"%s\" should be %s (%s); use --rebuild\n", diskette.title, sAction, sIndexFile);
            }
        }
    }

    /*
     * NOTE: When recreating an IMG file from a JSON file, if the JSON file preserved the original BPB
     * (which includes the original OEM signature), then you can use --legacy to tell writeDisk() to tell
     * getData() to restore those BPB bytes as well.  Otherwise, we leave the PCJS_OEM signature, if any, alone.
     */
    if (!diskette) {
        if (argv['boot']) {
            di.updateBootSector(readFile(argv['boot'], null));
        }
        let output = argv['output'] || argv[1];
        if (output) {
            if (typeof output == "string") output = [output];
            output.forEach((outputFile) => {
                writeDisk(outputFile, di, argv['legacy'], argv['indent']? 2 : 0, argv['overwrite'], argv['quiet'], argv['writable'], argv['source']);
            });
        }
    }
}

/**
 * addMetaData(di, sDir, sPath)
 *
 * @param {DiskInfo} di
 * @param {string} sDir
 * @param {string} sPath
 */
function addMetaData(di, sDir, sPath)
{
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
                        path: path.join(sArchiveFile, sPath.slice(sArchiveDir.length)).slice(sDir.length - 1),
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
}

/**
 * readCollection(argv)
 *
 * If "--collection=[string]" then the set of disks is limited to those where pathname contains [string].
 *
 * @param {Array} argv
 */
function readCollection(argv)
{
    let family = "pcx86";
    let asServers = ["diskettes", "gamedisks", "miscdisks", "pcsig0", "pcsig8a-disks", "pcsig8b-disks", "private"];
    let cCollections = 0, cDisks = 0;
    let asCollections = [];
    asServers.forEach((server) => {
        asCollections = asCollections.concat(glob.sync(path.join(rootDir, "disks" + path.sep + server + path.sep + family + path.sep + "diskettes.json")));
    });
    let messages;
    if (argv['quiet']) {
        messages = device.setMessages(Device.MESSAGE.WARN + Device.MESSAGE.ERROR, false);
    }
    let aDiskNames = {};        // we use this table of disk names to detect non-unique disk names
    asCollections.forEach(function readAllCollections(collectionFile) {
        collectionFile = collectionFile.substr(rootDir.length);
        if (argv['verbose']) printf("reading collection %s...\n", collectionFile);
        let library = readJSON(collectionFile);
        if (library) {
            let aDiskettes = [];
            JSONLib.parseDiskettes(aDiskettes, library, "/pcx86", "/diskettes");
            aDiskettes.forEach(function readAllDiskettes(diskette) {
                diskette.argc = 0;
                diskette.argv = [];
                if (!diskette.args) {
                    diskette.args = "";
                } else {
                    [diskette.argc, diskette.argv] = pcjslib.getArgs(diskette.args);
                    diskette.args = " " + diskette.args;
                }
                /*
                 * TODO: I don't think '@local' is being used anymore, so consider removing this support.  The last
                 * place I saw it used was in the PCSIG08 diskettes.json files, but weblib.getResource() knows how to map
                 * local folder names (eg, /pcsig8a-disks) to the corresponding server names now, as does this module,
                 * so there's probably no longer any need for this.
                 */
                if (library['@local']) {
                    diskette.path = diskette.path.replace(library['@server'], library['@local']);
                }
                let diskFile = diskette.path;
                if (typeof argv['collection'] == "string") {
                    if (argv['verbose']) printf("checking %s for '%s'...\n", diskFile, argv['collection']);
                    if (diskFile.indexOf(argv['collection']) < 0) return;
                }
                let sName = path.basename(diskFile);
                if (aDiskNames[sName]) {
                    if (argv['verbose']) printf("warning: %s disk name is not unique (see %s)\n", diskFile, aDiskNames[sName]);
                } else {
                    aDiskNames[sName] = diskFile;
                }
                let di = readDisk(diskFile);
                if (!di) {
                    di = createDisk(diskFile, diskette, argv);
                    if (di) {
                        writeDisk(diskFile, di, false, 0, undefined, undefined, undefined, diskette.source);
                    }
                }
                if (di) {
                    processDisk(di, diskFile, argv, diskette);
                    cDisks++;
                }
            });
        }
        cCollections++;
    });

    printf("%d config(s), %d disks(s) processed\n\n", cCollections, cDisks);
    if (messages) device.setMessages(messages, true);
}

/**
 * readDir(sDir, arcType, sLabel, fNormalize, kbTarget, nMax, fVerbose, done, sectorIDs, sectorErrors, suppData)
 *
 * @param {string} sDir (directory name)
 * @param {number} [arcType] (1 if ARC file, 2 if ZIP file, otherwise 0)
 * @param {string} [sLabel] (if not set with --label, then basename(sDir) will be used instead)
 * @param {boolean} [fNormalize] (if true, known text files get their line-endings "fixed")
 * @param {number} [kbTarget] (target disk size, in Kb; zero or undefined if no target disk size)
 * @param {number} [nMax] (maximum number of files to read; default is 256)
 * @param {boolean} [fVerbose] (true for verbose output)
 * @param {function(DiskInfo)} [done] (optional function to call on completion)
 * @param {Array|string} [sectorIDs]
 * @param {Array|string} [sectorErrors]
 * @param {string} [suppData] (eg, supplementary disk data that can be found in such files as: /software/pcx86/app/microsoft/word/1.15/debugger/index.md)
 * @returns {DiskInfo|null}
 */
function readDir(sDir, arcType, sLabel, fNormalize, kbTarget, nMax, fVerbose, done, sectorIDs, sectorErrors, suppData)
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
            if (done) {
                done(di);
                return null;
            }
            /*
             * Walk aFileData and look for archives accompanied by folders containing their expanded contents.
             */
            for (let i = 0; i < aFileData.length; i++) {
                addMetaData(di, sDir, aFileData[i].path);
            }
        }
        return di;
    };
    try {
        nMaxInit = nMaxCount = nMax || nMaxDefault;
        if (arcType) {
            readARCFiles(sDir, arcType, sLabel, fVerbose, readDone);
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
        let sArchive = checkArchive(sPath, true);
        if (sArchive) {
            if (!existsFile(sArchive)) {
                // printf("unar -o %s -d \"%s\"\n", path.dirname(sArchive), sPath);
            }
        }
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
                if (isText(data)) {
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
 * readARCFiles(sARC, arcType, sLabel, fVerbose, done)
 *
 * @param {string} sARC (ARC/ZIP filename)
 * @param {number} arcType (1 for ARC, 2 for ZIP)
 * @param {boolean|null} sLabel (optional volume label)
 * @param {boolean} fVerbose (true to display verbose output, false to display minimal output)
 * @param {function(Array.<FileData>)} done
 */
function readARCFiles(sARC, arcType, sLabel, fVerbose, done)
{
    let zip = new StreamZip({
        file: sARC,
        arcType: arcType,
        storeEntries: true,
        nameEncoding: "ascii",
        // printfDebug: printf,
        logErrors: true
    });
    zip.on('ready', () => {
        let aFileData = [];
        let aDirectories = [];
        if (fVerbose) {
            printf("\n%s\n", sARC);
            printf("Filename        Length   Method       Size  Ratio   Date       Time       CRC\n");
            printf("--------        ------   ------       ----  -----   ----       ----       ---\n");
        }
        let entries = Object.values(zip.entries());
        for (let entry of entries) {
            let file = {path: entry.name, name: path.basename(entry.name), nameEncoding: "cp437"};
            //
            // The 'time' field in StreamZip entries is a UTC time, which is unfortunate,
            // because file times stored in a ZIP file are *local* times.
            //
            // So I've updated StreamZip to include the file's local time as a Date object
            // ('date') in the entry object.  If it's not available (eg, we're using an older
            // version of StreamZip), then we'll fall back to our 'time' field work-around.
            //
            file.date = entry.date;
            if (!file.date) {
                let date = new Date(entry.time);
                file.date = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
            }
            if (entry.isDirectory) {
                file.attr = DiskInfo.ATTR.SUBDIR;
                file.size = -1;
                file.data = new DataBuffer();
                file.files = [];
                aDirectories.push(file);
            } else {
                let data;
                if (fVerbose == "nodata") {
                    /*
                     * HACK to skip decompression (--verbose=nodata)
                     */
                    data = new DataBuffer(entry.size);
                }
                else {
                    try {
                        data = zip.entryDataSync(entry.name);
                    } catch(err) {
                        if (entry.error) {
                            entry.error(err.message);
                        } else {
                            printError(err);
                        }
                    }
                    data = new DataBuffer(data || 0);
                }
                file.attr = DiskInfo.ATTR.ARCHIVE;
                file.size = data.length;
                file.data = data;
            }
            if (entry.errors) {
                for (let error of entry.errors) {
                    printf("%s\n", error);
                }
            }
            let d, sDir = path.dirname(file.path) + path.sep;
            for (d = 0; d < aDirectories.length; d++) {
                let dir = aDirectories[d];
                if (dir.path == sDir) {
                    dir.files.push(file);
                    break;
                }
            }
            if (d == aDirectories.length) {
                aFileData.push(file);
            }
            if (fVerbose) {
                let methodsARC = [
                    "Unpacked"
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
                    filename += "/";
                }
                let method = entry.method < 0? methodsARC[-entry.method - 2] : methodsZIP[entry.method];
                let ratio = filesize > entry.compressedSize? Math.round(100 * (filesize - entry.compressedSize) / filesize) : 0;
                printf("%-14s %7d   %-9s %7d   %3d%%   %T   %08x\n",
                    filename, filesize, method, entry.compressedSize, ratio, file.date, entry.crc);
            }
        }
        zip.close()
        done(aFileData);
    });
    zip.on('error', (err) => {
        printError(err, sARC);
    });
}

/**
 * readDisk(diskFile, forceBPB, sectorIDs, sectorErrors, suppData)
 *
 * @param {string} diskFile
 * @param {boolean} [forceBPB]
 * @param {Array|string} [sectorIDs]
 * @param {Array|string} [sectorErrors]
 * @param {string} [suppData] (eg, supplementary disk data that can be found in such files as: /software/pcx86/app/microsoft/word/1.15/debugger/index.md)
 * @returns {DiskInfo|null}
 */
function readDisk(diskFile, forceBPB, sectorIDs, sectorErrors, suppData)
{
    let db, di
    try {
        let diskName = path.basename(diskFile);
        di = new DiskInfo(device, diskName);
        if (diskName.endsWith(".json")) {
            db = readFile(diskFile, "utf8");
            if (!db) {
                di = null;
            } else {
                if (!di.buildDiskFromJSON(db)) di = null;
            }
        }
        else {
            /*
             * Passing null for the encoding parameter tells readFile() to return a buffer (which, in our case, is a DataBuffer).
             */
            db = readFile(diskFile, null);
            if (!db) {
                di = null;
            } else {
                if (diskName.endsWith(".psi")) {
                    if (!di.buildDiskFromPSI(db)) di = null;
                } else {
                    if (!di.buildDiskFromBuffer(db, forceBPB, getHash, sectorIDs, sectorErrors, suppData)) di = null;
                }
            }
        }
        if (di) {
            let sDir = getFullPath(diskFile.replace(/\.[a-z]+$/, path.sep));
            let aDiskFiles = glob.sync(path.join(sDir, "**"));
            for (let i = 0; i < aDiskFiles.length; i++) {
                addMetaData(di, sDir, aDiskFiles[i]);
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
 * @returns {DataBuffer|string|undefined}
 */
function readFile(sFile, encoding = "utf8")
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
function readJSON(sFile)
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
function writeDisk(diskFile, di, fLegacy = false, indent = 0, fOverwrite = false, fQuiet = false, fWritable = false, source = "")
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
                if (!existsFile(sDir)) fs.mkdirSync(sDir, {recursive: true});
                if (fExists) fs.unlinkSync(diskFile);
                fs.writeFileSync(diskFile, data);
                if (diskFileLC.endsWith(".img") && !fWritable) fs.chmodSync(diskFile, 0o444);
            } else {
                printf("%s not written, no data\n", diskName);
            }
        } else {
            if (!fQuiet) printf("%s exists, use --overwrite to replace\n", diskFile);
        }
    }
    catch(err) {
        printError(err);
    }
}

/**
 * writeFile(sFile, data, fCreateDir, fOverwrite, fReadOnly, fQuiet)
 *
 * @param {string} sFile
 * @param {DataBuffer|string} data
 * @param {boolean} [fCreateDir]
 * @param {boolean} [fOverwrite]
 * @param {boolean} [fReadOnly]
 * @param {boolean} [fQuiet]
 * @returns {boolean}
 */
function writeFile(sFile, data, fCreateDir, fOverwrite, fReadOnly, fQuiet)
{
    if (sFile) {
        try {
            if (data instanceof DataBuffer) {
                data = data.buffer;
            }
            if (fCreateDir) {
                let sDir = path.dirname(sFile);
                if (!existsFile(sDir)) fs.mkdirSync(sDir, {recursive: true});
            }
            if (!existsFile(sFile) || fOverwrite) {
                fs.writeFileSync(sFile, data);
                if (fReadOnly) fs.chmodSync(sFile, 0o444);
                return true;
            }
            if (!fQuiet) printf("%s exists, use --overwrite to replace\n", sFile);
        } catch(err) {
            printError(err);
        }
    }
    return false;
}

/**
 * processDiskAsync(input, argv)
 *
 * @param {string} input
 * @param {Array} argv
 */
async function processDiskAsync(input, argv)
{
    let di = await readDiskAsync(input, argv['forceBPB'], argv['sectorID'], argv['sectorError'], readFile(argv['suppData']));
    if (di) {
        processDisk(di, input, argv);
    }
}

/**
 * readDiskAsync(diskFile, forceBPB, sectorIDs, sectorErrors, suppData)
 *
 * @param {string} diskFile
 * @param {boolean} [forceBPB]
 * @param {Array|string} [sectorIDs]
 * @param {Array|string} [sectorErrors]
 * @param {string} [suppData] (eg, supplementary disk data that can be found in such files as: /software/pcx86/app/microsoft/word/1.15/debugger/index.md)
 */
async function readDiskAsync(diskFile, forceBPB, sectorIDs, sectorErrors, suppData)
{
    let db, di
    try {
        let diskName = path.basename(diskFile);
        di = new DiskInfo(device, diskName);
        if (diskName.endsWith(".json")) {
            diskFile = mapDiskToServer(diskFile);
            if (diskFile.startsWith("http")) {
                printf("fetching %s\n", diskFile);
                let response = await got(diskFile);
                db = response.body;
            } else {
                db = await readFileAsync(diskFile, "utf8");
            }
            if (!db) {
                di = null;
            } else {
                if (!di.buildDiskFromJSON(db)) di = null;
            }
        }
        else {
            /*
             * Passing null for the encoding parameter tells readFile() to return a buffer (which, in our case, is a DataBuffer).
             */
            db = await readFileAsync(diskFile, null);
            if (!db) {
                di = null;
            } else {
                if (diskName.endsWith(".psi")) {
                    if (!di.buildDiskFromPSI(db)) di = null;
                } else {
                    if (!di.buildDiskFromBuffer(db, forceBPB, getHash, sectorIDs, sectorErrors, suppData)) di = null;
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
 * readFileAsync(sFile, encoding)
 *
 * @param {string} sFile
 * @param {string|null} [encoding]
 */
function readFileAsync(sFile, encoding = "utf8")
{
    sFile = getFullPath(sFile);
    return new Promise((resolve, reject) => {
        fs.readFile(sFile, encoding, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

/**
 * processAll(all, argv)
 *
 * @param {string} all
 * @param {Array} argv
 */
function processAll(all, argv)
{
    if (all && typeof all == "string") {
        let max = +argv['max'] || 0;
        let asFiles = glob.sync(all);
        if (asFiles.length) {
            let outdir = argv['output'] || argv[1];     // if specified, --output is assumed to be a directory
            let type =  argv['type'] || "json";         // if specified, --type should be a known file extension
            if (type[0] != '.') type = '.' + type;
            let filter = argv['filter'];
            filter = (typeof filter == "string")? new RegExp(filter) : null;
            for (let sFile of asFiles) {
                if (filter && !filter.test(sFile)) continue;
                let args = [argv[0], sFile];
                if (outdir) args['output'] = path.join(outdir, path.parse(sFile).name + type);
                for (let arg of ['list', 'extract', 'overwrite', 'quiet', 'verbose']) {
                    if (argv[arg] !== undefined) args[arg] = argv[arg];
                }
                processFile(args);
                if (!--max) break;
            }
        } else {
            printf("no files matched \"%s\"\n", all);
        }
        return true;
    }
    return false;
}

/**
 * processFile(argv)
 *
 * Formerly part of main(), but factored out so that it can also be called for a list of files ("--all").
 *
 * @param {Array} argv
 * @returns {boolean} true if something was processed, false if not
 */
function processFile(argv)
{
    let fDir = false, fFiles = false, arcType = 0;

    let done = function(di)
    {
        if (di) {
            if (fFiles) {
                /*
                * When a disk is created from a list of files, the default name isn't very meaningful;
                * the basename of the output file isn't much more helpful, but it's better than nothing.
                *
                * This only affects the 'name' property in 'imageInfo', which is of limited interest anyway.
                */
                let name = argv['output'] || argv[1];
                if (name) {
                    if (typeof name != "string") name = name[0];
                    di.setName(path.basename(name));
                }
            }
            processDisk(di, input, argv);
        }
    };

    let input = argv['dir'];
    if (input) {
        fDir = true;                // if --dir, the directory should end with a trailing slash (but we'll make sure)
        if (!input.endsWith(path.sep)) input += path.sep;
    } else {
        input = argv['files'];
        if (input) {                // if --files, the list of files should be separated with commas (and NO trailing slash)
            fDir = fFiles = true;
        } else {
            input = argv['arc'];
            if (input) {
                arcType = 1;
            } else {
                input = argv['zip'];
                if (input) {
                    arcType = 2;
                } else {
                    input = argv[1];
                    argv.splice(1, 1);
                    if (input) {
                        if (input.endsWith(path.sep)) {
                            fDir = true;
                        } else {
                            let ext = path.extname(input).toLowerCase();
                            if (ext == ".arc") {
                                arcType = 1;
                            } else if (ext == ".zip") {
                                arcType = 2;
                            }
                        }
                    }
                }
            }
        }
    }

    if (fDir || arcType) {
        /*
         * Target is normally a number in Kb (eg, 360 for a 360K diskette); you can also add a suffix (eg, K or M).
         * K is assumed, whereas M will automatically produce a Kb value equal to the specified Mb value (eg, 10M is
         * equivalent to 10240K).
         */
        readDir(input, arcType, argv['label'], argv['normalize'], getTarget(argv['target']), +argv['maxfiles'] || 0, argv['verbose'], done);
        return true;
    }
    if (input) {
        done(readDisk(input, argv['forceBPB'], argv['sectorID'], argv['sectorError'], readFile(argv['suppData'])));
        return true;
    }
    return false;
}

/**
 * main(argc, argv)
 *
 * Usage:
 *
 *      node diskimage.js [input disk image or directory] [output disk image] [options]
 *
 * You can use --disk and --dir to explicitly specify an input disk or directory, or you can implicitly
 * specify one as the first non-option argument (a directory is indicated by a trailing slash); similarly,
 * you can use --output to explicitly specify an output disk image, or you can implicitly specify one as
 * the second non-option argument.
 *
 * To add files to a disk in a specific order, use --files=[comma-separated list of files].  And if you
 * want a particular boot sector, use --boot=[sector image file].
 *
 * You can also use the contents of a ZIP archive as your input source with --zip=[zipfile]; to also display
 * a listing of the archive's contents, include --verbose.
 *
 * Use --all to process all files that match the "globbed" filespec (eg, "--all='/Volumes/PCSIG_13B/*.ZIP'");
 * when using --all, --output can be used to specify an output directory, and --type can be used to specify
 * the output file extension (default is "json").
 *
 * Use --collection to process all disk collections with the specified options, or --collection=[subset]
 * to process only disks whose path or name contains [subset]; any input/output disk/directory names are
 * ignored when using --collection.
 *
 * @param {number} argc
 * @param {Array} argv
 */
function main(argc, argv)
{
    let argv0 = argv[0].split(' ');
    let options = argv0.slice(1).join(' ');

    Device.DEBUG = !!argv['debug'];
    moduleDir = path.dirname(argv0[0]);
    rootDir = path.join(moduleDir, "../..");
    useServer = !!argv['server'];

    if (!argv['quiet']) {
        printf("DiskImage v%s\n%s\n%s\n", Device.VERSION, Device.COPYRIGHT, (options? sprintf("options: %s", options) : ""));
    }

    if (Device.DEBUG) {
        device.setMessages(Device.MESSAGE.FILE, true);
    }

    device.setMessages(Device.MESSAGE.DISK + Device.MESSAGE.WARN + Device.MESSAGE.ERROR, true);

    if (argv['collection']) {
        readCollection(argv);
        return;
    }

    let input = argv['disk'];
    if (input) {
        /*
         * If you use --disk to specify a disk image, then I call the experimental async function.
         */
        processDiskAsync(input, argv);
        return;
    }

    if (processAll(argv['all'], argv) || processFile(argv)) {
        return;
    }

    printf("nothing to do\n");
}

main(...pcjslib.getArgs());
