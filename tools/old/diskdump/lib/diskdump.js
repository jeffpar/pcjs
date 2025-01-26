/**
 * @fileoverview Converts disk images to/from JSON
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

/*
 * See http://en.wikipedia.org/wiki/Design_of_the_FAT_file_system for more information.
 */

import fs from "fs";
import path from "path";
import glob from "glob";
import mkdirp from "mkdirp";
import crypto from "crypto";
import str from "../../../../machines/modules/v2/strlib.js";
import web from "../../../../machines/modules/v2/weblib.js";
import DiskAPI from "../../../../machines/modules/v2/diskapi.js";
import DumpAPI from "../../../../machines/modules/v2/dumpapi.js";
import X86 from "../../../../machines/pcx86/modules/v2/x86.js";
import { COPYRIGHT } from "../../../../machines/modules/v2/defines.js";
import netlib from "../../../modules/netlib.js";
import PCJSLib from "../../../modules/pcjslib.js";

var NODE = true;

/**
 * @class exports
 * @property {string} name
 * @property {string} version
 */
var pkg = JSON.parse(fs.readFileSync("../../../../package.json", "utf8"));

/*
 * fConsole controls console messages; it is false by default but is enable by the CLI interface.
 */
var fConsole = false;

/*
 * fDebug controls debug console messages; it is false by default but can be enabled from the command-line
 * using "--debug".
 */
var fDebug = false;

/*
 * logFile is passed from the web server through HTMLOut to us, allowing us to "mingle" our logConsole()
 * output with the server's log (typically "./logs/node.log").
 */
var logFile = null;

/*
 * fNormalize attempts to enforce consistency across multiple dump requests, including the order of files within every
 * directory, the use of hard-coded volume label timestamps, replacement of line-endings in text files, etc.  It can be
 * turned on here or with the experimental "--normalize" command-line option.
 */
var fNormalize = false;

/**
 * BufferPF(init, start, end)
 *
 * BufferPF is our browser polyfill (hence the PF) for Node's Buffer class.  It's basically a wrapper object
 * containing a real Buffer in Node and a simulated buffer in the browser.
 *
 * This is NOT a general-purpose polyfill.  It supports only those Buffer constructor calls and methods that the
 * DiskDump module actually requires.
 *
 * The constructor supports initialization with: 1) a number specifying the buffer length in bytes, 2) a string,
 * 3) an array of byte-sized numbers (aka octets), or 4) another BufferPF, but only when ALSO specifying start and end
 * parameters; this final variation is used to support the slice() method.
 *
 * Finally, under Node, if an API gives us a real Buffer, we need a way to create a BufferPF from it, so that's handled
 * as a special NODE case.
 *
 * @constructor
 * @param {number|string|Array|BufferPF|Buffer} [init]
 * @param {number} [start]
 * @param {number} [end]
 */
function BufferPF(init, start, end)
{
    if (NODE) {
        if (start === undefined) {
            if (typeof init == "object" && init instanceof Buffer) {
                this.buf = init;
            }
            else {
                /*
                 * The following code replaces the now-deprecated code:
                 *
                 *      this.buf = new Buffer(init);
                 */
                if (typeof init == "number") {
                    this.buf = Buffer.alloc(init);
                }
                else {
                    this.buf = Buffer.from(init);
                }
            }
        } else {
            this.buf = init.buf.slice(start, end);
        }
        this.length = this.buf.length;
    }
    else if (typeof init == "number") {
        this.ab = new ArrayBuffer(init);
        this.dv = new DataView(this.ab, 0, init);
        this.length = init;
    }
    else if (start === undefined) {
        let off;
        this.ab = new ArrayBuffer(init.length);
        this.dv = new DataView(this.ab, 0, init.length);
        if (typeof init != "string") {
            for (off = 0; off < init.length; off++) {
                this.dv.setUint8(off, init[off]);
            }
        } else {
            for (off = 0; off < init.length; off++) {
                this.dv.setUint8(off, init.charCodeAt(off));
            }
        }
        this.length = init.length;
    } else {
        this.ab = init.ab;
        if (end === undefined) end = this.ab.length;
        this.dv = new DataView(this.ab, start, this.length = end - start);
    }
}

/**
 * fill(b)
 *
 * @this {BufferPF}
 * @param {number} b
 */
BufferPF.prototype.fill = function(b)
{
    if (NODE) {
        this.buf.fill(b);
    } else {
        for (let off = 0; off < this.length; off++) {
            this.dv.setUint8(off, b);
        }
    }
};

/**
 * write(s, off, len)
 *
 * @this {BufferPF}
 * @param {string} s
 * @param {number} off
 * @param {number} len
 */
BufferPF.prototype.write = function(s, off, len)
{
    if (NODE) {
        this.buf.write(s, off, len);
    } else {
        let i = 0;
        while (off < this.length) {
            this.dv.setUint8(off, s.charCodeAt(i++));
            off++;
        }
    }
};

/**
 * readUInt8(b)
 *
 * @this {BufferPF}
 * @param {number} off
 * @returns {number}
 */
BufferPF.prototype.readUInt8 = function(off)
{
    return (NODE? this.buf.readUInt8(off) : this.dv.getUint8(off));
};

/**
 * writeUInt8(b, off)
 *
 * @this {BufferPF}
 * @param {number} b
 * @param {number} off
 */
BufferPF.prototype.writeUInt8 = function(b, off)
{
    if (NODE) {
        this.buf.writeUInt8(b, off);
    } else {
        this.dv.setUint8(off, b);
    }
};

/**
 * readUInt16BE(off)
 *
 * @this {BufferPF}
 * @param {number} off
 * @returns {number}
 */
BufferPF.prototype.readUInt16BE = function(off)
{
    return (NODE? this.buf.readUInt16BE(off) : this.dv.getUint16(off));
};

/**
 * readUInt16LE(off)
 *
 * @this {BufferPF}
 * @param {number} off
 * @returns {number}
 */
BufferPF.prototype.readUInt16LE = function(off)
{
    return (NODE? this.buf.readUInt16LE(off) : this.dv.getUint16(off, true));
};

/**
 * readUInt32BE(off)
 *
 * @this {BufferPF}
 * @param {number} off
 * @returns {number}
 */
BufferPF.prototype.readUInt32BE = function(off)
{
    return (NODE? this.buf.readUInt32BE(off) : this.dv.getUint32(off));
};

/**
 * readUInt32LE(off)
 *
 * @this {BufferPF}
 * @param {number} off
 * @returns {number}
 */
BufferPF.prototype.readUInt32LE = function(off)
{
    return (NODE? this.buf.readUInt32LE(off) : this.dv.getUint32(off, true));
};

/**
 * readInt32BE(off)
 *
 * @this {BufferPF}
 * @param {number} off
 * @returns {number}
 */
BufferPF.prototype.readInt32BE = function(off)
{
    return (NODE? this.buf.readInt32BE(off) : this.dv.getInt32(off));
};

/**
 * readInt32LE(off)
 *
 * @this {BufferPF}
 * @param {number} off
 * @returns {number}
 */
BufferPF.prototype.readInt32LE = function(off)
{
    return (NODE? this.buf.readInt32LE(off) : this.dv.getInt32(off, true));
};

/**
 * writeInt32LE(dw, off)
 *
 * @this {BufferPF}
 * @param {number} dw
 * @param {number} off
 */
BufferPF.prototype.writeInt32LE = function(dw, off)
{
    if (NODE) {
        this.buf.writeInt32LE(dw, off);
    } else {
        this.dv.setInt32(off, dw, true);
    }
};

/**
 * copy(bufTarget, offTarget)
 *
 * @this {BufferPF}
 * @param {BufferPF} bufTarget
 * @param {number} offTarget
 */
BufferPF.prototype.copy = function(bufTarget, offTarget)
{
    if (NODE) {
        this.buf.copy(bufTarget.buf, offTarget);
    } else {
        let offMax = this.length;
        let cbMax = bufTarget.length - offTarget;
        if (offMax > cbMax) offMax = cbMax;
        for (let off = 0; off < offMax; off++) {
            bufTarget.writeUInt8(this.readUInt8(off), offTarget + off);
        }
    }
};

/**
 * slice(start, end)
 *
 * @this {BufferPF}
 * @param {number} [start]
 * @param {number} [end]
 * @returns {BufferPF}
 */
BufferPF.prototype.slice = function(start, end)
{
    return new BufferPF(this, start || 0, end);
};

/**
 * toString(format)
 *
 * @this {BufferPF}
 * @param {string} [format]
 * @returns {string}
 */
BufferPF.prototype.toString = function(format)
{
    if (NODE) {
        return this.buf.toString(format);
    } else {
        return "";      // TODO: Implement; see also: encodeAsBase64()
    }
};

/**
 * DiskDump()
 *
 * TODO: If sServerRoot is set, make sure sDiskPath refers to something in either /apps/ or /disks-demo/,
 * to prevent random enumeration of other server resources.
 *
 * @constructor
 * @param {string|Array} sDiskPath
 * @param {Array|null} [asExclude] contains filename exclusions, if any
 * @param {string} [sFormat] is the output format, one of "json"|"data"|"hex"|"bytes"|"img"
 * @param {boolean|string} [fComments] enables comments and other readability enhancements in the JSON output
 * @param {string} [sSize] specifies a target disk size, in kilobytes, when building a new image
 * @param {string|null} [sServerRoot]
 * @param {string} [sManifestFile]
 * @param {Object} [argv] optional (experimental) arguments, if any
 */
function DiskDump(sDiskPath, asExclude, sFormat, fComments, sSize, sServerRoot, sManifestFile, argv)
{
    this.argv = argv || {};
    console.log(this.argv);
    this.sDiskPath = sDiskPath;
    this.sServerRoot = sServerRoot || "";
    if (this.sServerRoot && !netlib.isRemote(sDiskPath) && sDiskPath[0] == '/' && sDiskPath.indexOf(';') < 0) {
        this.sDiskPath = path.join(this.sServerRoot, sDiskPath);
    }
    this.asExclude = asExclude || DiskDump.asExclusions;
    this.kbTarget = sSize|0;    // convert the numeric string to a 32-bit number (or 0 if invalid)
    this.sFormat = (sFormat || DumpAPI.FORMAT.JSON);
    this.fJSONNative = (this.sFormat == DumpAPI.FORMAT.JSON && !fComments);
    this.nJSONIndent = 0;
    this.fJSONComments = fComments;
    this.sJSONWhitespace = (this.fJSONComments? " " : "");
    this.fXDFSupport = this.argv['xdf'];
    /*
     * Specifying a label of "none" will suppress volume LABEL generation as well as ARCHIVE
     * file attributes for normal files; this is useful when generating PC DOS 1.x-compatible
     * disk images (ie, 160K disks for PC DOS 1.00 or 320K disks for PC DOS 1.10), because PC
     * DOS 1.x understands neither the LABEL nor the ARCHIVE attribute bits (in fact, PC DOS 1.x
     * CHKDSK misinterprets the ARCHIVE bit, treating it as if the HIDDEN bit was set instead).
     */
    this.sLabel = this.argv['label'];
    this.forceBPB = this.argv['forceBPB'];
    this.fNormalize = fNormalize || this.argv['normalize'];

    /*
     * The dump operation itself doesn't care about sManifestFile, but we DO need some indication
     * of whether MD5 checksums need to be computed for the individual files, so we use the filename
     * as that indication.
     */
    this.sManifestFile = sManifestFile;

    /*
     * If we have to enumerate one or more files during the buildImage() process, this array
     * will save them, in case the caller wants to query that information later, in updateManifest().
     *
     * Originally, I thought each saved entry would be a subset of what the FileInfo objects contain,
     * but it turns out I pretty much need everything.  This, in turn, means that some of the original
     * buildImage() functions could simply use this.aManifestInfo, instead of their own aFiles array,
     * but sometimes they're using aFiles of subdirectories, so it's not quite that simple.
     */
    this.aManifestInfo = [];

    /*
     * bufDisk is set by buildImage() (or by loadFile() if the file is NOT a ".json" file; otherwise
     * loadFile() loads the file as string data and stores it in jsonDisk).
     *
     * In those cases where bufDisk is set, the caller must call convertToJSON() to obtain JSON, which
     * will simply return jsonDisk if it was already set by loadFile() OR if it was already created by
     * a previous convertToJSON() call.
     *
     * In those cases where jsonDisk is set, the caller must call convertToIMG() to obtain an IMG file.
     * Since that function relies on dataDisk, it first calls JSON.parse() to convert jsonDisk to dataDisk,
     * and then it builds bufDisk from dataDisk; if a previous call already created dataDisk and/or bufDisk,
     * the previous values are used/returned.
     *
     * dataDisk is a native data object built by convertToJSON() and convertToIMG() as needed.  In the
     * first case, it's used to create JSON using JSON.stringify(), but only if fJSONNative is set (ie,
     * the caller explicitly specifies FORMAT_JSON); that probably should be the default setting, but it
     * wasn't an option in the original PHP code, so I added it as an option here in order to compare the
     * output of both methods.  fJSONNative still isn't an option for converting OSI disk images to JSON
     * (and it may never be, as those images aren't very common).
     */
    this.bufDisk = null;
    this.jsonDisk = "";
    this.dataDisk = undefined;
}

/**
 * setLogFile(file)
 *
 * @param {Object} file
 */
DiskDump.setLogFile = function(file) {
    logFile = file;
};

/*
 * Class constants
 */
DiskDump.sAPIURL = "http://www.pcjs.org" + DumpAPI.ENDPOINT;
DiskDump.sCopyright = COPYRIGHT;
DiskDump.sNotice = DiskDump.sAPIURL + " " + DiskDump.sCopyright;
DiskDump.sUsage = "Usage: " + DiskDump.sAPIURL + "?" + DumpAPI.QUERY.PATH + "={url}&amp;" + DumpAPI.QUERY.FORMAT + "=json|data|hex|bytes|img";

/*
 * PCJS_LABEL is our default label, used whenever a more suitable label (eg, the disk image's folder name)
 * is not available or not supplied, and PCJS_OEM is inserted into any DiskDump-generated diskette images.
 */
DiskDump.PCJS_LABEL = "PCJS";
DiskDump.PCJS_OEM   = "PCJS.ORG";

/**
 * The BPBs that buildImage() currently supports; these BPBs should be in order of smallest to largest capacity,
 * to help ensure we don't select a disk format larger than necessary.
 */
DiskDump.aDefaultBPBs = [
  [                             // define BPB for 160Kb diskette
    0xEB, 0xFE, 0x90,           // 0x00: JMP instruction, following by 8-byte OEM signature
    0x50, 0x43, 0x4A, 0x53, 0x2E, 0x4F, 0x52, 0x47,     // PCJS_OEM
 // 0x49, 0x42, 0x4D, 0x20, 0x20, 0x31, 0x2E, 0x30,     // "IBM  1.0" (this is a fake OEM signature)
    0x00, 0x02,                 // 0x0B: bytes per sector (0x200 or 512)
    0x01,                       // 0x0D: sectors per cluster (1)
    0x01, 0x00,                 // 0x0E: reserved sectors; ie, # sectors preceding the first FAT--usually just the boot sector (1)
    0x02,                       // 0x10: FAT copies (2)
    0x40, 0x00,                 // 0x11: root directory entries (0x40 or 64)  0x40 * 0x20 = 0x800 (1 sector is 0x200 bytes, total of 4 sectors)
    0x40, 0x01,                 // 0x13: number of sectors (0x140 or 320)
    0xFE,                       // 0x15: media ID (eg, 0xFF: 320Kb, 0xFE: 160Kb, 0xFD: 360Kb, 0xFC: 180Kb)
    0x01, 0x00,                 // 0x16: sectors per FAT (1)
    0x08, 0x00,                 // 0x18: sectors per track (8)
    0x01, 0x00,                 // 0x1A: number of heads (1)
    0x00, 0x00, 0x00, 0x00      // 0x1C: number of hidden sectors (always 0 for non-partitioned media)
  ],
  [                             // define BPB for 320Kb diskette
    0xEB, 0xFE, 0x90,           // 0x00: JMP instruction, following by 8-byte OEM signature
    0x50, 0x43, 0x4A, 0x53, 0x2E, 0x4F, 0x52, 0x47,     // PCJS_OEM
 // 0x49, 0x42, 0x4D, 0x20, 0x20, 0x31, 0x2E, 0x30,     // "IBM  1.0" (this is a real OEM signature)
    0x00, 0x02,                 // 0x0B: bytes per sector (0x200 or 512)
    0x02,                       // 0x0D: sectors per cluster (2)
    0x01, 0x00,                 // 0x0E: reserved sectors; ie, # sectors preceding the first FAT--usually just the boot sector (1)
    0x02,                       // 0x10: FAT copies (2)
    0x70, 0x00,                 // 0x11: root directory entries (0x70 or 112)  0x70 * 0x20 = 0xE00 (1 sector is 0x200 bytes, total of 7 sectors)
    0x80, 0x02,                 // 0x13: number of sectors (0x280 or 640)
    0xFF,                       // 0x15: media ID (eg, 0xFF: 320Kb, 0xFE: 160Kb, 0xFD: 360Kb, 0xFC: 180Kb)
    0x01, 0x00,                 // 0x16: sectors per FAT (1)
    0x08, 0x00,                 // 0x18: sectors per track (8)
    0x02, 0x00,                 // 0x1A: number of heads (2)
    0x00, 0x00, 0x00, 0x00      // 0x1C: number of hidden sectors (always 0 for non-partitioned media)
  ],
  [                             // define BPB for 180Kb diskette
    0xEB, 0xFE, 0x90,           // 0x00: JMP instruction, following by 8-byte OEM signature
    0x50, 0x43, 0x4A, 0x53, 0x2E, 0x4F, 0x52, 0x47,     // PCJS_OEM
 // 0x49, 0x42, 0x4D, 0x20, 0x20, 0x32, 0x2E, 0x30,     // "IBM  2.0" (this is a fake OEM signature)
    0x00, 0x02,                 // 0x0B: bytes per sector (0x200 or 512)
    0x01,                       // 0x0D: sectors per cluster (1)
    0x01, 0x00,                 // 0x0E: reserved sectors; ie, # sectors preceding the first FAT--usually just the boot sector (1)
    0x02,                       // 0x10: FAT copies (2)
    0x40, 0x00,                 // 0x11: root directory entries (0x40 or 64)  0x40 * 0x20 = 0x800 (1 sector is 0x200 bytes, total of 4 sectors)
    0x68, 0x01,                 // 0x13: number of sectors (0x168 or 360)
    0xFC,                       // 0x15: media ID (eg, 0xFF: 320Kb, 0xFE: 160Kb, 0xFD: 360Kb, 0xFC: 180Kb)
    0x02, 0x00,                 // 0x16: sectors per FAT (2)
    0x09, 0x00,                 // 0x18: sectors per track (9)
    0x01, 0x00,                 // 0x1A: number of heads (1)
    0x00, 0x00, 0x00, 0x00      // 0x1C: number of hidden sectors (always 0 for non-partitioned media)
  ],
  [                             // define BPB for 360Kb diskette
    0xEB, 0xFE, 0x90,           // 0x00: JMP instruction, following by 8-byte OEM signature
    0x50, 0x43, 0x4A, 0x53, 0x2E, 0x4F, 0x52, 0x47,     // PCJS_OEM
 // 0x49, 0x42, 0x4D, 0x20, 0x20, 0x32, 0x2E, 0x30,     // "IBM  2.0" (this is a real OEM signature)
    0x00, 0x02,                 // 0x0B: bytes per sector (0x200 or 512)
    0x02,                       // 0x0D: sectors per cluster (2)
    0x01, 0x00,                 // 0x0E: reserved sectors; ie, # sectors preceding the first FAT--usually just the boot sector (1)
    0x02,                       // 0x10: FAT copies (2)
    0x70, 0x00,                 // 0x11: root directory entries (0x70 or 112)  0x70 * 0x20 = 0xE00 (1 sector is 0x200 bytes, total of 7 sectors)
    0xD0, 0x02,                 // 0x13: number of sectors (0x2D0 or 720)
    0xFD,                       // 0x15: media ID (eg, 0xFF: 320Kb, 0xFE: 160Kb, 0xFD: 360Kb, 0xFC: 180Kb)
    0x02, 0x00,                 // 0x16: sectors per FAT (2)
    0x09, 0x00,                 // 0x18: sectors per track (9)
    0x02, 0x00,                 // 0x1A: number of heads (2)
    0x00, 0x00, 0x00, 0x00      // 0x1C: number of hidden sectors (always 0 for non-partitioned media)
  ],
  [                             // define BPB for 1.2Mb diskette
    0xEB, 0xFE, 0x90,           // 0x00: JMP instruction, following by 8-byte OEM signature
    0x50, 0x43, 0x4A, 0x53, 0x2E, 0x4F, 0x52, 0x47,     // PCJS_OEM
 // 0x49, 0x42, 0x4D, 0x20, 0x31, 0x30, 0x2E, 0x31,     // "10.0" (which I believe was used on IBM OS/2 1.0 diskettes)
    0x00, 0x02,                 // 0x0B: bytes per sector (0x200 or 512)
    0x01,                       // 0x0D: sectors per cluster (1)
    0x01, 0x00,                 // 0x0E: reserved sectors; ie, # sectors preceding the first FAT--usually just the boot sector (1)
    0x02,                       // 0x10: FAT copies (2)
    0xE0, 0x00,                 // 0x11: root directory entries (0xe0 or 224)  0xe0 * 0x20 = 0x1c00 (1 sector is 0x200 bytes, total of 14 sectors)
    0x60, 0x09,                 // 0x13: number of sectors (0x960 or 2400)
    0xF9,                       // 0x15: media ID (0xF9 was used for 1228800-byte diskettes, and later for 737280-byte diskettes)
    0x07, 0x00,                 // 0x16: sectors per FAT (7)
    0x0f, 0x00,                 // 0x18: sectors per track (15)
    0x02, 0x00,                 // 0x1A: number of heads (2)
    0x00, 0x00, 0x00, 0x00      // 0x1C: number of hidden sectors (always 0 for non-partitioned media)
  ],
  [                             // define BPB for 720Kb diskette (2 sector/cluster format more commonly used)
    0xEB, 0xFE, 0x90,           // 0x00: JMP instruction, following by 8-byte OEM signature
    0x50, 0x43, 0x4A, 0x53, 0x2E, 0x4F, 0x52, 0x47,     // PCJS_OEM
 // 0x49, 0x42, 0x4D, 0x20, 0x20, 0x35, 0x2E, 0x30,     // "IBM  5.0" (this is a real OEM signature)
    0x00, 0x02,                 // 0x0B: bytes per sector (0x200 or 512)
    0x02,                       // 0x0D: sectors per cluster (2)
    0x01, 0x00,                 // 0x0E: reserved sectors; ie, # sectors preceding the first FAT--usually just the boot sector (1)
    0x02,                       // 0x10: FAT copies (2)
    0x70, 0x00,                 // 0x11: root directory entries (0x70 or 112)  0x70 * 0x20 = 0xE00 (1 sector is 0x200 bytes, total of 7 sectors)
    0xA0, 0x05,                 // 0x13: number of sectors (0x5A0 or 1440)
    0xF9,                       // 0x15: media ID
    0x03, 0x00,                 // 0x16: sectors per FAT (3)
    0x09, 0x00,                 // 0x18: sectors per track (9)
    0x02, 0x00,                 // 0x1A: number of heads (2)
    0x00, 0x00, 0x00, 0x00      // 0x1C: number of hidden sectors (always 0 for non-partitioned media)
  ],
  [                             // define BPB for 720Kb diskette (1 sector/cluster format used by PC DOS 4.01)
    0xEB, 0xFE, 0x90,           // 0x00: JMP instruction, following by 8-byte OEM signature
    0x50, 0x43, 0x4A, 0x53, 0x2E, 0x4F, 0x52, 0x47,     // PCJS_OEM
 // 0x49, 0x42, 0x4D, 0x20, 0x20, 0x34, 0x2E, 0x30,     // "IBM  4.0" (this is a real OEM signature)
    0x00, 0x02,                 // 0x0B: bytes per sector (0x200 or 512)
    0x01,                       // 0x0D: sectors per cluster (1)
    0x01, 0x00,                 // 0x0E: reserved sectors; ie, # sectors preceding the first FAT--usually just the boot sector (1)
    0x02,                       // 0x10: FAT copies (2)
    0x70, 0x00,                 // 0x11: root directory entries (0x70 or 112)  0x70 * 0x20 = 0xE00 (1 sector is 0x200 bytes, total of 7 sectors)
    0xA0, 0x05,                 // 0x13: number of sectors (0x5A0 or 1440)
    0xF9,                       // 0x15: media ID
    0x05, 0x00,                 // 0x16: sectors per FAT (5)
    0x09, 0x00,                 // 0x18: sectors per track (9)
    0x02, 0x00,                 // 0x1A: number of heads (2)
    0x00, 0x00, 0x00, 0x00      // 0x1C: number of hidden sectors (always 0 for non-partitioned media)
  ],
  [                             // define BPB for 1.44Mb diskette
    0xEB, 0xFE, 0x90,           // 0x00: JMP instruction, following by 8-byte OEM signature
    0x50, 0x43, 0x4A, 0x53, 0x2E, 0x4F, 0x52, 0x47,     // PCJS_OEM
 // 0x4d, 0x53, 0x44, 0x4F, 0x53, 0x35, 0x2E, 0x30,     // "MSDOS5.0" (an actual OEM signature, arbitrarily chosen for use here)
    0x00, 0x02,                 // 0x0B: bytes per sector (0x200 or 512)
    0x01,                       // 0x0D: sectors per cluster (1)
    0x01, 0x00,                 // 0x0E: reserved sectors; ie, # sectors preceding the first FAT--usually just the boot sector (1)
    0x02,                       // 0x10: FAT copies (2)
    0xE0, 0x00,                 // 0x11: root directory entries (0xe0 or 224)  0xe0 * 0x20 = 0x1c00 (1 sector is 0x200 bytes, total of 14 sectors)
    0x40, 0x0B,                 // 0x13: number of sectors (0xb40 or 2880)
    0xF0,                       // 0x15: media ID (0xF0 was used for 1474560-byte diskettes)
    0x09, 0x00,                 // 0x16: sectors per FAT (9)
    0x12, 0x00,                 // 0x18: sectors per track (18)
    0x02, 0x00,                 // 0x1A: number of heads (2)
    0x00, 0x00, 0x00, 0x00      // 0x1C: number of hidden sectors (always 0 for non-partitioned media)
  ],
    /*
     * Here's some useful background information on a 10Mb PC XT fixed disk, partitioned with a single DOS partition.
     *
     * The BPB for a 10Mb "type 3" PC XT hard disk specifies 0x5103 or 20739 for DISKSECS, which is the partition
     * size in sectors (10,618,368 bytes), whereas total disk size is 20808 sectors (10,653,696 bytes).  The partition
     * is 69 sectors smaller than the disk because the first sector is reserved for the MBR and 68 sectors (the entire
     * last cylinder) are reserved for diagnostics, head parking, etc.  This cylinder usage is confirmed by FDISK,
     * which reports that 305 cylinders (not 306) are assigned to the DOS partition.
     *
     * That 69-sector overhead is NOT overhead incurred by the FAT file system.  The FAT overhead is the boot sector
     * (1), FAT sectors (2 * 8), and root directory sectors (32), for a total of 49 sectors, leaving 20739 - 49 or
     * 20690 sectors.  Moreover, free space is measured in clusters, not sectors, and the partition uses 8 sectors/cluster,
     * leaving room for 2586.25 clusters.  Since a fractional cluster is not allowed, another 2 sectors are lost, for
     * a total of 51 sectors of FAT overhead.  So actual free space is (20739 - 51) * 512, or 10,592,256 bytes -- which
     * is exactly what is reported as the available space on a freshly formatted 10Mb PC XT fixed disk.
     *
     * Some sources on the internet (eg, http://www.wikiwand.com/en/Timeline_of_DOS_operating_systems) claim that the
     * file system overhead for the XT's 10Mb disk is "50 sectors".  As they explain:
     *
     *      "The fixed disk has 10,618,880 bytes of raw space: 305 cylinders (the equivalent of tracks) × 2 platters
     *      × 2 sides or heads per platter × 17 sectors per track = 20,740 sectors × 512 bytes per sector = 10,618,880
     *      bytes...."
     *
     * and:
     *
     *      "With DOS the only partition, the combined overhead is 50 sectors leaving 10,592,256 bytes for user data:
     *      DOS's FAT is eight sectors (16 sectors for two copies) + 32 sectors for the root directory, room for 512
     *      directory entries + 2 sectors (one master and one DOS boot sector) = 50 sectors...."
     *
     * However, that's incorrect.  First, the disk has 306 cylinders, not 305.  Second, there are TWO overhead values:
     * the overhead OUTSIDE the partition (69 sectors) and the overhead INSIDE the partition (51 sectors).  They failed
     * to account for the reserved cylinder in the first calculation and the fractional cluster in the second calculation,
     * and then they conflated the two values to produce a single (incorrect) result.
     *
     * Even if one were to assume that the disk had only 305 cylinders, that would only change the partitioning overhead
     * to 1 sector; the FAT file system overhead would still be 51 sectors.
     */
  [                             // define BPB for 10Mb hard drive
    0xEB, 0xFE, 0x90,           // 0x00: JMP instruction, following by 8-byte OEM signature
    0x50, 0x43, 0x4A, 0x53, 0x2E, 0x4F, 0x52, 0x47,     // PCJS_OEM
 // 0x49, 0x42, 0x4D, 0x20, 0x20, 0x32, 0x2E, 0x30,     // "IBM  2.0" (this is a real OEM signature)
    0x00, 0x02,                 // 0x0B: bytes per sector (0x200 or 512)
    0x08,                       // 0x0D: sectors per cluster (8)
    0x01, 0x00,                 // 0x0E: reserved sectors; ie, # sectors preceding the first FAT--usually just the boot sector (1)
    0x02,                       // 0x10: FAT copies (2)
    0x00, 0x02,                 // 0x11: root directory entries (0x200 or 512)  0x200 * 0x20 = 0x4000 (1 sector is 0x200 bytes, total of 0x20 or 32 sectors)
    0x03, 0x51,                 // 0x13: number of sectors (0x5103 or 20739; * 512 bytes/sector = 10,618,368 bytes = 10,369Kb = 10Mb)
    0xF8,                       // 0x15: media ID (eg, 0xF8: hard drive w/FAT12)
    0x08, 0x00,                 // 0x16: sectors per FAT (8)
      //
      // Wikipedia (http://en.wikipedia.org/wiki/File_Allocation_Table#BIOS_Parameter_Block) implies everything past
      // this point was introduced post-DOS 2.0.  However, DOS 2.0 merely said they were optional, and in fact, DOS 2.0
      // FORMAT always initializes the next 3 words.  A 4th word, LARGESECS, was added in DOS 3.20 at offset 0x1E,
      // and then in DOS 3.31, both HIDDENSECS and LARGESECS were widened from words to dwords.
      //
    0x11, 0x00,                 // 0x18: sectors per track (17)
    0x04, 0x00,                 // 0x1A: number of heads (4)
      //
      // PC DOS 2.0 actually stored 0x01, 0x00, 0x80, 0x00 here, so you can't rely on more than the first word.
      // TODO: Investigate PC DOS 2.0 BPB behavior (ie, what did the 0x80 mean)?
      //
    0x01, 0x00, 0x00, 0x00      // 0x1C: number of hidden sectors (always 0 for non-partitioned media)
  ]
];

DiskDump.asExclusions = [".*", ".IMG"];

/*
 * List of text file types to convert line endings from LF to CR+LF when "--normalize" is specified.
 * A warning is always displayed when we replace line endings in any file being copied to a disk image.
 *
 * NOTE: Some files, like ".BAS" files, aren't always ASCII, which is why we now call isASCII() on all
 * these file contents first.
 */
DiskDump.asTextFileExts = [".MD", ".ME", ".BAS", ".BAT", ".ASM", ".LRF", ".MAK", ".TXT", ".XML"];

/*
 * Class methods
 */

/**
 * CLI()
 *
 * Provides the command-line interface for the diskdump module.
 *
 * Usage:
 *
 *      diskdump --dir={directory} [--format=json|data|hex|bytes|img] [--comments] [--output={file}]
 *      diskdump --disk={disk image} [--format=json|data|hex|bytes|img] [--comments] [--output={file}]
 *      diskdump --path={file[;file]...} [--format=json|data|hex|bytes|img] [--comments] [--output={file}]
 *
 *      NOTE: --img is permitted as an alias for --disk
 *
 * Arguments:
 *
 *      The default format is "json", which generates an array of signed 32-bit decimal values; "hex" is an older
 *      text format that consists entirely of 2-character hex values (deprecated), and "bytes" is a JSON-like format
 *      that also uses hex values (but with "0x" prefixes) and is normally used only when comments are enabled.
 *
 *      Note that command-line arguments, if any, are not validated.  For example, argv['comments'] may be any of
 *      boolean, string, or undefined, since the user may have typed "--comments" or "--comments=foo" or nothing at all.
 *
 *      Additional command-line arguments include:
 *
 *          --mbhd={number}: requests a hard drive image with the given number of megabytes (DEPRECATED)
 *          --size={number}: requests a target disk size with the given number of kilobytes (eg, 360, 720, 1200, 1440, 10000)
 *          --exclude={filename}: specifies a filename that should be excluded from the image; repeat as often as needed
 *          --overwrite: allows the --output option to overwrite an existing file; default is to NOT overwrite
 *          --manifest[={filename}]: update the specified manifest.xml file with details about the disk image
 *          --xdf: enable support for XDF-formatted disk images (experimental)
 *
 * Examples:
 *
 *      node modules/diskdump/bin/diskdump --disk=../pcjs/disks/pcx86/games/infocom/zork1/zork1.dsk
 *      node modules/diskdump/bin/diskdump --dir=./apps/pcx86/1981/visicalc/ --format=img --output=./apps/pcx86/1981/visicalc/disk.img
 *      node modules/diskdump/bin/diskdump --path=./apps/pcx86/1981/visicalc/bin/vc.com;../README.md --format=json --output=./apps/pcx86/1981/visicalc/disk.json
 */
DiskDump.CLI = function()
{
    let err = null;
    let [argc, argv] = PCJSLib.getArgs();

    fConsole = true;

    if (argc) {
        if (argv['debug'] !== undefined) fDebug = argv['debug'];

        if (fDebug) {
            DiskDump.logConsole("cwd: " + process.cwd());
            DiskDump.logConsole("args: " + JSON.stringify(argv));
        }

        let sDiskPath = null;
        let sServerRoot = process.cwd();
        let i = sServerRoot.indexOf("/pcjs/");
        sServerRoot = i > 0? sServerRoot.substr(0, i+5) : undefined;
        let sDir = argv['dir'], sDisk = (argv['disk'] || argv['img']), sPath = argv['path'];

        if (typeof sDir == "string") {
            sDiskPath = sDir;
        }
        else if (typeof sDisk == "string") {
            sDiskPath = sDisk;
        }
        else if (typeof sPath == "string") {
            sDiskPath = sPath;
        }
        let asExclude = argv['exclude'];
        if (asExclude && typeof asExclude == "string") asExclude = [asExclude];

        /*
         * Create some sensible defaults for --manifest and --output when no values are specified
         */
        let sManifestFile = argv['manifest'];
        if (typeof sManifestFile == "boolean") {
            sManifestFile = "manifest.xml";
        }
        if (sManifestFile && sManifestFile.charAt(0) != '/') {
            sManifestFile = path.join(process.cwd(), sManifestFile);
        }

        let sOutput = "";
        let sOutputFile = argv['output'];
        if (typeof sOutputFile == "string" && sOutputFile.lastIndexOf('.') < 0) {
            sOutput = sOutputFile;
            sOutputFile = true;
        }
        if (typeof sOutputFile == "boolean") {
            if (sDir || sDisk) {
                sOutput = path.join(sOutput, path.basename(sDir || sDisk));
                let i = sOutput.lastIndexOf('.');
                if (i > 0) sOutput = sOutput.substr(0, i);
            } else {
                sOutput = "disk";
            }
            sOutputFile = sOutput + '.' + argv['format'];
        }
        if (sOutputFile && sOutputFile.charAt(0) != '/') sOutputFile = path.join(process.cwd(), sOutputFile);

        let fOverwrite = argv['overwrite'];
        let sManifestTitle = argv['title'];

        if (sDiskPath) {
            let sSize = argv['mbhd'];
            if (!sSize) {
                sSize = argv['size'];
            } else {
                sSize = (sSize * 1000).toString();
            }
            let disk = new DiskDump(sDiskPath, asExclude, argv['format'], argv['comments'], sSize, sServerRoot, sManifestFile, argv);
            if (sDir) {
                disk.buildImage(true, function(err) {
                    DiskDump.outputDisk(err, disk, sDiskPath, sOutputFile, fOverwrite, sManifestTitle);
                });
            }
            else if (sDisk) {
                disk.loadFile(function(err) {
                    DiskDump.outputDisk(err, disk, sDiskPath, sOutputFile, fOverwrite, sManifestTitle);
                });
            }
            else if (sPath) {
                disk.buildImage(false, function(err) {
                    DiskDump.outputDisk(err, disk, sDiskPath, sOutputFile, fOverwrite, sManifestTitle);
                });
            }
        } else {
            err = new Error("no dir|disk|path specified");
        }
    }
    else {
        DiskDump.logConsole("usage: diskdump --dir={dir}|--disk={disk}|--path={file}[;{file}...] [--format=json|data|hex|bytes|img] [--comments] [--output={file}] [--manifest={file}] [--xdf]");
    }

    if (err) {
        DiskDump.logError(err);
        process.exit(1);
    }
};

/**
 * API
 *
 * Client-side version of the web-based server-side function HTTPAPI.processDumpAPI(req, res).
 *
 * @param {Object} aParms (analogous to req.query on the server)
 */
DiskDump.API = function(aParms)
{
    let sDisk = aParms[DumpAPI.QUERY.DISK];
    let sFormat = aParms[DumpAPI.QUERY.FORMAT] || DumpAPI.FORMAT.JSON;
    let fComments = (!!aParms[DumpAPI.QUERY.COMMENTS]);

    if (sDisk) {
        let disk = new DiskDump(sDisk, null, sFormat, fComments);
        disk.loadFile(function(err) {
            if (!err) {
                let sData, sType, fBase64;
                if (sFormat == DumpAPI.FORMAT.IMG) {
                    sType = "octet-stream";
                    let buf = disk.convertToIMG();
                    if (buf) {
                        sData = disk.encodeAsBase64(buf);
                        fBase64 = true;
                    }
                } else {
                    sType = "json";
                    sData = disk.convertToJSON();
                }
                if (sData) {
                    let sFileName = str.getBaseName(disk.sDiskPath, true) + '.' + sFormat;
                    let sAlert = web.downloadFile(sData, sType, fBase64, sFileName);
                    web.alertUser(sAlert);
                } else {
                    web.alertUser("No data.");
                }
            } else {
                web.alertUser(err.message);
            }
        });
    }
    else if (aParms[DumpAPI.QUERY.DIR] || aParms[DumpAPI.QUERY.PATH] || aParms[DumpAPI.QUERY.FILE]) {
        /*
         * The web-based client-side API currently supports DISK requests only (eg, no DIR, PATH, or FILE requests).
         */
        web.alertUser("Unsupported API request.");
    }
};

/**
 * outputDisk(err, disk, sDiskPath, sOutputFile, fOverwrite, sManifestTitle)
 *
 * @param {Error} err
 * @param {DiskDump} disk
 * @param {string} sDiskPath
 * @param {string} sOutputFile
 * @param {boolean} fOverwrite
 * @param {string} [sManifestTitle]
 */
DiskDump.outputDisk = function(err, disk, sDiskPath, sOutputFile, fOverwrite, sManifestTitle)
{
    if (!err) {
        /*
         * The caller may have built an image (or loaded an IMG file), in which case
         * bufDisk will be set (otherwise, jsonDisk will be set).  We then look for pending
         * conversions: if a disk image was built/loaded, but the requested format was not,
         * call convertToJSON().  Similarly, if bufDisk is not set and a raw image was
         * requested, call convertToIMG().
         */
        let data = disk.bufDisk;
        if (data) {
            if (disk.sFormat != DumpAPI.FORMAT.IMG) {
                data = disk.convertToJSON();
            }
        } else {
            if (disk.sFormat == DumpAPI.FORMAT.IMG) {
                data = disk.convertToIMG();
            }
        }
        if (data) {

            let cbDisk = (disk.bufDisk? disk.bufDisk.length : data.length);

            if (sOutputFile) {

                let fUnchanged;
                let md5Disk = disk.hashDisk, md5JSON = null;
                if (disk.sManifestFile) {
                    if (typeof data == "string") {
                        md5JSON = crypto.createHash('md5').update(data).digest('hex');
                    }
                    if (!md5Disk && disk.bufDisk) {
                        let buf = disk.bufDisk.buf || disk.bufDisk;
                        md5Disk = crypto.createHash('md5').update(buf).digest('hex');
                    }
                    /*
                     * Before calling updateManifest(), see if we have any aManifestInfo entries, and if not, see if
                     * there's a folder that the original files have been "dumped" into, from which we can create those
                     * entries...
                     */
                    disk.buildManifestInfo(sDiskPath);
                    fUnchanged = DiskDump.updateManifest(disk, disk.sManifestFile, sDiskPath, sOutputFile, true, sManifestTitle, md5Disk, md5JSON);
                }

                try {
                    if (fUnchanged) {
                        DiskDump.logConsole(sOutputFile + " unchanged");
                    } else {
                        if (fs.existsSync(sOutputFile) && !fOverwrite) {
                            DiskDump.logConsole(sOutputFile + " exists, use --overwrite to rewrite");
                        } else {
                            let sDirName = path.dirname(sOutputFile);
                            if (!fs.existsSync(sDirName)) mkdirp.sync(sDirName);
                            fs.writeFileSync(sOutputFile, data.buf || data);
                            DiskDump.logConsole(cbDisk + "-byte disk image saved as " + sOutputFile);
                        }
                    }
                } catch(e) {
                    err = e;
                }
            } else {
                /*
                 * We'll dump JSON to the console, but not a raw disk buffer; we could add an option to
                 * "stringify" buffers, but if that's what the caller wants, they should use "--format=json".
                 */
                if (typeof data === "string") {
                    DiskDump.logConsole(data);
                } else {
                    DiskDump.logConsole("specify --output={file} to save " + cbDisk + "-byte disk image");
                }
            }
        } else {
            err = new Error("unable to convert " + disk.sDiskPath);
        }
    }

    if (err) {
        DiskDump.logError(err);
        process.exit(1);
    }
};

/**
 * getManifestAttr(sID, sTag)
 *
 * @param sID
 * @param sTag
 * @returns {string|null}
 */
DiskDump.getManifestAttr = function(sID, sTag)
{
    let match = sTag.match(new RegExp(sID + '="([^"]*)"'));
    if (match) return match[1];
    return null;
};

/**
 * updateManifest(disk, sManifestFile, sDiskPath, sOutputFile, fOverwrite, sTitle, md5Disk, md5JSON)
 *
 * This function reports a change if EITHER the md5Disk value does not match the original
 * "md5" value recorded in the manifest OR the manifest itself has changed.  If md5JSON is
 * also provided, we require that to match as well.
 *
 * Since this function is for command-line use only, we use *Sync functions, so that we can
 * return the results immediately.
 *
 * @param {DiskDump} disk
 * @param {string} sManifestFile
 * @param {string} sDiskPath
 * @param {string} sOutputFile
 * @param {boolean} fOverwrite
 * @param {string} [sTitle]
 * @param {string} [md5Disk] for the entire disk image
 * @param {string} [md5JSON] for the entire JSON-encoded disk image, if any
 * @returns {boolean|undefined} true if disk has changed, false if not, undefined if unknown
 */
DiskDump.updateManifest = function(disk, sManifestFile, sDiskPath, sOutputFile, fOverwrite, sTitle, md5Disk, md5JSON)
{
    let i, fUnchanged, fExists = false, sXML, err = null;
    let sMatchDisk = null, sIDDisk = null, sMD5Disk = null, sMD5JSON = null;

    try {
        sXML = fs.readFileSync(sManifestFile, {encoding: "utf8"});
        fExists = true;
    } catch(e) {
        let sPrefix = "";
        if (!sTitle) {
            sTitle = str.getBaseName(disk.sDiskPath);
            if (sTitle) {
                sTitle = sTitle.charAt(0).toUpperCase() + sTitle.substr(1);
            }
        }
        if (sTitle) {
            i = sTitle.indexOf(':');
            if (i > 0) sPrefix = ' prefix="' + sTitle.substr(0, i) + '"';
        }
        sXML = '<?xml version="1.0" encoding="UTF-8"?>\n';
        sXML += '<?xml-stylesheet type="text/xsl" href="/versions/pcx86/' + pkg.version + '/manifest.xsl"?>\n';
        sXML += '<manifest type="software">\n';
        sXML += '\t<title' + sPrefix + '>' + sTitle + '</title>\n';
        sXML += '</manifest>';
    }

    i = sOutputFile.search(/\/disks-[a-z0-9]+/);    // eg, "/disks-demo", "/disks-games", and any similar future disk repos
    if (i < 0) i = sOutputFile.indexOf("/apps/");
    if (i < 0) i = sOutputFile.indexOf("/tests/");
    if (i > 0) sOutputFile = sOutputFile.substr(i);

    let match = sOutputFile.match(/^\/disks-demo\/(.*)\/archive(\/.*)/);
    if (match) {
        sOutputFile = "https://s3-us-west-2.amazonaws.com/archive.pcjs.org/disks/" + match[1] + match[2];
    }

    match = sXML.match(new RegExp('[ \t]*<disk ([^>]*href="' + sOutputFile + '"[^>]*?)(>[\\s\\S]*?</disk>|/>)[ \t]*\n?'));
    if (match) {
        sMatchDisk = match[0];
        sIDDisk = DiskDump.getManifestAttr("id", match[1]);
        sMD5Disk = DiskDump.getManifestAttr("md5", match[1]);
        sMD5JSON = DiskDump.getManifestAttr("md5json", match[1]);
    }

    if (!sIDDisk) {
        for (i = 1; i < 10000; i++) {
            sIDDisk = i.toString();
            if (sIDDisk.length < 2) sIDDisk = '0' + sIDDisk;
            sIDDisk = "disk" + sIDDisk;
            if (sXML.indexOf(' id="' + sIDDisk + '"') < 0) break;
        }
        if (i == 10000) {
            err = new Error("manifest already contains " + i + " disks");
        }
    }

    if (!err) {
        /*
         * Thanks to buildImage(), fDir is true if a "dir" parameter was provided, false if a "path" parameter was provided,
         * and undefined otherwise, which implies a "disk" parameter (or no parameter at all -- in which case, why are we even here?)
         */
        let sParm = null;
        if (disk.fDir === true) {
            sParm = "dir";
        } else if (disk.fDir === undefined) {
            sParm = "img";
        }

        /*
         * Build a "size" attribute with the total disk size in bytes and a "chs" attribute that describes the disk geometry; eg:
         *
         *      size="368640" chs="40:2:9"
         */
        let size = 0, sCHS = "";
        if (disk.dataDisk) {
            sCHS = disk.dataDisk.length + ':' + disk.dataDisk[0].length + ':' + disk.dataDisk[0][0].length;
            size = disk.dataDisk.length * disk.dataDisk[0].length * disk.dataDisk[0][0].length * (disk.dataDisk[0][0][0].length || 512);
        }
        let sXMLDisk = '\t<disk id="' + sIDDisk + '"';
        sXMLDisk += (size? ' size="' + size + '"' : '');
        sXMLDisk += (sCHS? ' chs="' + sCHS + '"' : '');
        // i = sDiskPath.indexOf("archive/");
        // if (i >= 0) sDiskPath = sDiskPath.substr(i);
        sXMLDisk += (sParm? ' ' + sParm + '="' + sDiskPath + '"' : '');
        sXMLDisk += ' href="' + sOutputFile + '"' + (md5Disk? ' md5="' + md5Disk + '"' : '') + (md5JSON? ' md5json="' + md5JSON + '"' : '') + '>\n';

        let sName = "";
        if (sMatchDisk && (match = sMatchDisk.match(/<name>([^>]*)<\/name>/))) {
            sName = match[1];
        }
        if (!sName && sXML.indexOf("\n\t<title>") < 0) {
            sName = str.getBaseName(sOutputFile, true).toUpperCase();
        }
        if (sName) {
            sXMLDisk += '\t\t<name>' + sName + '</name>\n';
        }

        if (sMatchDisk && (match = sMatchDisk.match(/<link[^>]*>[^<]*<\/link>/))) {
            sXMLDisk += '\t\t' + match[0] + '\n';
        }

        if (sMatchDisk && (match = sMatchDisk.match(/<from [^>]*?\/>/))) {
            sXMLDisk += '\t\t' + match[0] + '\n';
        }

        let sBaseDir = null;
        for (i = 0; i < disk.aManifestInfo.length; i++) {
            let sAttrs = "";
            /** @type {FileInfo} */
            let fileInfo = disk.aManifestInfo[i];
            if (fileInfo.FILE_SIZE < 0) continue;       // ignore non-file entries
            let sDir = path.dirname(fileInfo.FILE_PATH) + path.sep;
            if (sBaseDir === null) sBaseDir = sDir;
            sAttrs += ' size="' + fileInfo.FILE_SIZE + '"';
            sAttrs += ' time="' + str.sprintf("%T", fileInfo.FILE_TIME) + '"';
            sAttrs += ' attr="0x' + fileInfo.FILE_ATTR.toString(16) + '"';
            if (fileInfo.FILE_MD5) sAttrs += ' md5="' + fileInfo.FILE_MD5 + '"';
            if (!sDir.indexOf(sBaseDir)) {
                sDir = sDir.substr(sBaseDir.length);
                if (sDir) {
                    sAttrs += ' dir="' + sDir + '"';
                }
            }
            sXMLDisk += '\t\t<file' + sAttrs + '>' + fileInfo.FILE_NAME.replace(/&/g, "&amp;") + '</file>\n';
        }
        sXMLDisk += '\t</disk>\n';
        sXMLDisk = sXMLDisk.replace(/(<disk[^>]*)>\s*<\/disk>/, "$1/>");
        if (!sMatchDisk) {
            sMatchDisk = '</manifest>';
            sXMLDisk += sMatchDisk;
        }
        if (sMatchDisk != sXMLDisk) {
            fUnchanged = false;
            sXML = sXML.replace(sMatchDisk, sXMLDisk);
            if (fOverwrite || !fExists) {
                try {
                    fs.writeFileSync(sManifestFile, sXML);
                    DiskDump.logConsole(sManifestFile + " updated");
                } catch(e) {
                    err = e;
                }
            } else {
                DiskDump.logConsole(sManifestFile + " exists, use --overwrite to rewrite");
                if (fDebug) DiskDump.logConsole(sXML);
            }
        } else {
            DiskDump.logConsole(sManifestFile + " unchanged");
            fUnchanged = (!md5Disk || !sMD5Disk || (md5Disk == sMD5Disk && (!md5JSON || md5JSON == sMD5JSON)));
        }
    }

    DiskDump.logError(err);
    return fUnchanged;
};

/**
 * logConsole(s)
 *
 * @param {string} s
 * @returns {string}
 */
DiskDump.logConsole = function(s)
{
    if (fConsole) console.log(s);
    if (logFile) logFile.write(s + "\n");
    return s;
};

/**
 * logError(err)
 *
 * Conditionally logs an error to the console
 *
 * @param {Error} err
 * @returns {string} the error message that was logged (or that would have been logged had logging been enabled)
 */
DiskDump.logError = function(err)
{
    let sError = "";
    if (err) {
        sError = "DiskDump error: " + err.message;
        if (!NODE) web.alertUser(sError);
        DiskDump.logConsole(sError);
    }
    return sError;
};

/**
 * logWarning(s)
 *
 * Conditionally logs a warning to the console
 *
 * @param {string} s
 * @returns {string} the warning message that was logged (or that would have been logged had logging been enabled)
 */
DiskDump.logWarning = function(s)
{
    let sWarning = "";
    if (s) {
        sWarning = "DiskDump warning: " + s;
        DiskDump.logConsole(sWarning);
    }
    return sWarning;
};


/**
 * getStat(sPath, done)
 *
 * An alternative to fs.stat() that handles supported remote files, in addition to local files
 *
 * @param {string} sPath
 * @param {function(Error,Object)} done
 */
DiskDump.getStat = function(sPath, done)
{
    netlib.isRemote(sPath)? netlib.getStat(sPath, done) : fs.stat(sPath, done);   // jshint ignore:line
};

/**
 * readFile(sPath, sEncoding, done)
 *
 * An alternative to fs.readFile() that handles supported remote files, in addition to local files
 *
 * @param {string} sPath
 * @param {string|null} sEncoding
 * @param {function(Error,Buffer|string)} done
 */
DiskDump.readFile = function(sPath, sEncoding, done)
{
    if (NODE) {
        if (netlib.isRemote(sPath)) {
            /*
             * Just a quick verification that the getStat() function works...
             *
             netlib.getStat(sPath, function(err, stats) {
                if (!err) {
                    DiskDump.logConsole(stats);
                } else {
                    DiskDump.logError(err);
                }
            });
             */
            netlib.getFile(sPath, sEncoding, function doneReadFileRemote(err, status, buf) {
                done(err, buf);
            });
        } else {
            fs.readFile(sPath, {encoding: sEncoding}, function doneReadFileLocal(err, buf) {
                done(err, buf);
            });
        }
    } else {
        /*
         * This is the browser code path (ie, you've loaded diskdump.js in your browser rather than in Node)
         */
        web.getResource(sPath, "bytes", true, function doneReadFileBrowser(sURL, sResource, nErrorCode) {
            let buf = sResource;
            if (!nErrorCode) {
                if (!str.endsWith(sURL, ".json")) {
                    buf = new BufferPF(sResource);
                }
            }
            done(nErrorCode? new Error(sURL + " (" + nErrorCode + ")") : null, buf);
        });
    }
};

/*
 * Object methods
 */

/**
 * isExcluded(sName)
 *
 * @this {DiskDump}
 * @param {string} sName is the basename of a file under consideration
 * @returns {boolean} is true if the file should be excluded, false if not
 */
DiskDump.prototype.isExcluded = function(sName)
{
    sName = sName.toUpperCase();
    for (let i = 0; i < this.asExclude.length; i++) {
        let sExclude = this.asExclude[i].toUpperCase();
        if (sName == sExclude) return true;
        if (sExclude.charAt(0) == '.') {
            if (sExclude.charAt(1) == '*') {
                if (sName.charAt(0) == '.') return true;
            } else {
                if (str.endsWith(sName, sExclude)) return true;
            }
        }
    }
    return false;
};

/**
 * loadFile(done)
 *
 * This used to be part of the DiskDump constructor, but I felt it would be safer to separate
 * object creation from any I/O that the object may perform, to ensure that a callback can never
 * be called before the caller has actually received the newly created object.
 *
 * @this {DiskDump}
 * @param {function(Error)} done
 */
DiskDump.prototype.loadFile = function(done)
{
    /*
     * When the 'encoding' property of the 'options' object is null (or the 'options'
     * object is omitted altogether), the callback's 2nd parameter will be a Buffer object
     * rather than a String.
     */
    let obj = this;
    let sEncoding = null;
    if (this.sDiskPath.slice(-5) == ".json") sEncoding = "utf8";
    DiskDump.readFile(this.sDiskPath, sEncoding, function doneLoadFile(err, buf) {
        obj.setData(err, buf, done);
    });
};

/**
 * setData(err, buf, done)
 *
 * Records the loaded disk data buffer
 *
 * @this {DiskDump}
 * @param {Error} err
 * @param {Buffer|string} buf
 * @param {function(Error)} done
 */
DiskDump.prototype.setData = function(err, buf, done)
{
    if (err) {
        DiskDump.logError(err);  // DiskDump.logConsole("unable to read " + this.sDiskPath);
        done(err);
        return;
    }
    /*
     * Record the disk data buffer, and then notify the caller
     */
    if (typeof buf == "string") {
        this.jsonDisk = buf;
        /*
         * The following code is non-essential, but it's handy for forcing existing JSON to be
         * regenerated; here, we assume that it's unlikely any JSON stored on the server was stored
         * with comments, so if the caller has requested comments, we immediately convert the
         * JSON to a Buffer and throw the JSON away.  The next convertToJSON() call will take care
         * of the rest.
         *
         * We could also move this functionality into its own function, or wait until the
         * caller actually calls convertToJSON() -- although if the caller inadvertently calls
         * convertToJSON() multiple times, you don't want to be regenerating the JSON every time.
         */
        if (this.fJSONComments) {
            if (this.convertToIMG()) {
                /*
                 * Since convertToIMG() succeeded, we can safely blow away jsonDisk.
                 */
                this.jsonDisk = null;
            }
        }
    } else {
        this.bufDisk = buf;
    }
    done(null);
};

/**
 * dumpLine(nIndent, sLine, sComment)
 *
 * @this {DiskDump}
 * @param {number} [nIndent] is the relative number of characters to indent the given line (0 if none)
 * @param {string} [sLine] is the given line
 * @param {string} [sComment] is an optional comment to append to the line, if comment output is enabled
 * @returns {string} the indented/commented line
 */
DiskDump.prototype.dumpLine = function(nIndent, sLine, sComment)
{
    if (nIndent < 0) {
        this.nJSONIndent += nIndent;
    }
    if (this.fJSONComments) {
        sLine = "                                ".substr(0, this.nJSONIndent) + (sLine? (sLine + (sComment? (" // " + sComment) : "") + "\n") : "");
    }
    if (nIndent > 0) {
        this.nJSONIndent += nIndent;
    }
    return sLine;
};

/**
 * dumpProp(sKey, value, fLast)
 *
 * @this {DiskDump}
 * @param {string} sKey
 * @param {number|string|null} value
 * @param {boolean} [fLast]
 * @returns {string} the indented property
 */
DiskDump.prototype.dumpProp = function(sKey, value, fLast)
{
    let sDump = "";
    if (value) {
        sDump += this.dumpLine(0, '"' + sKey + '":' + this.sJSONWhitespace + (typeof value == 'string'? ("'" + value + "'") : value) + (fLast? "" : ","));
    }
    return sDump;
};

/**
 * dumpBuffer(sKey, buf, len, cbItem, offData)
 *
 * @this {DiskDump}
 * @param {string|null} sKey is name of buffer data element
 * @param {Buffer} buf is a Buffer containing the bytes to dump
 * @param {number} len is the number of bytes to dump
 * @param {number} cbItem is either 1 or 4, to dump bytes or dwords respectively
 * @param {number} [offData] is a relative offset of this data within the parent (for display purposes only)
 * @returns {string} hex (or decimal) representation of the data
 */
DiskDump.prototype.dumpBuffer = function(sKey, buf, len, cbItem, offData)
{
    let sDump = this.dumpLine(2, (sKey? '"' + sKey + '":' : "") + this.sJSONWhitespace + '[');

    let sLine = "";
    let sASCII = "";
    let cMaxCols = 16 * cbItem;
    if (offData === undefined) offData = 0;

    /*
     * TODO: Assert that off is always < buf.length as well.
     */
    for (let off = 0; off < len; off += cbItem) {

        let v = (cbItem == 1? buf.readUInt8(off) : buf.readInt32LE(off));

        if (off) {
            sLine += ",";
            if ((off % cMaxCols) === 0) {
                sDump += this.dumpLine(0, sLine, sASCII);
                sLine = sASCII = "";
            }
        }
        if (cbItem > 1) {
            sLine += v;
        }
        else {
            sLine += str.toHexByte(v);
            if (!sASCII) sASCII = str.toHex(offData + off, 0, true) + " ";
            sASCII += (v >= 0x20 && v < 0x7F && v != 0x3C && v != 0x3E? String.fromCharCode(v) : ".");
        }
    }

    sDump += this.dumpLine(0, sLine + "]", sASCII);
    this.dumpLine(-2);

    return sDump;
};

/**
 * dumpTrackOSI(sTrackSig, nTrackNum, nTrackType, nTrackLoad)
 *
 * Dumps track data for an OSI disk track
 *
 * @this {DiskDump}
 * @param {string} sTrackSig
 * @param {number} nTrackNum
 * @param {Number} nTrackType
 * @param {number} [nTrackLoad]
 * @returns {string}
 */
DiskDump.prototype.dumpTrackOSI = function(sTrackSig, nTrackNum, nTrackType, nTrackLoad)
{
    let sDump = "";
    nTrackNum = Math.floor(nTrackNum / 16) * 10 + (nTrackNum % 16);
    sDump += this.dumpLine(2, "{");
    sDump += this.dumpProp("trackSig", sTrackSig);
    sDump += this.dumpProp("trackNum", nTrackNum);
    sDump += this.dumpProp("trackType", nTrackType);
    sDump += this.dumpProp("trackLoad", nTrackLoad);
    sDump += this.dumpLine(2, '"sectors":' + this.sJSONWhitespace + '[');
    return sDump;
};

/**
 * dumpSectorOSI(nSectorSig, nSectorNum, nSectorPages, bufSector, sSectorEndSig, nSectorOffset)
 *
 * Dumps sector data for an OSI disk sector
 *
 * @this {DiskDump}
 * @param {Number} nSectorSig
 * @param {number} nSectorNum
 * @param {number} nSectorPages
 * @param {Buffer} bufSector
 * @param {String} sSectorEndSig
 * @param {number} nSectorOffset
 * @returns {string}
 */
DiskDump.prototype.dumpSectorOSI = function(nSectorSig, nSectorNum, nSectorPages, bufSector, sSectorEndSig, nSectorOffset)
{
    let sDump = "";
    sDump += this.dumpLine(2, "{");
    sDump += this.dumpProp("sectorSig", nSectorSig);
    sDump += this.dumpProp("sectorNum", nSectorNum);
    sDump += this.dumpProp("sectorPages", nSectorPages);
    sDump += this.dumpProp("sectorEndSig", sSectorEndSig);
    sDump += this.dumpBuffer("sectorData", bufSector, bufSector.length, 1, nSectorOffset);
    return sDump;
};

/**
 * trimSector(buf, len)
 *
 * If dwPattern is not null, then cbBuffer is the number of unique bytes
 * at the beginning of the sector, and dwPattern is the 32-bit pattern that
 * fills out the rest of the sector.
 *
 * There are many compression schemes I could have adopted to reduce the size of
 * JSON-encoded disk images, but for now, I keep it simple: trim all matching bytes
 * (DWORDs actually) from the end of each sector.  This is easy for the simulator
 * to deal with, since all it has to do is append zeros (or the specified pattern)
 * to every under-sized sector.
 *
 * NOTE: The C1Pjs Simulator doesn't support this feature (yet), which is why
 * trimSector() isn't used when dumping OSI disk images.
 *
 * @this {DiskDump}
 * @param {Buffer} buf
 * @param {number} len
 * @returns {Array} containing [dwPattern, cbBuffer]
 */
DiskDump.prototype.trimSector = function(buf, len)
{
    let cbTrim = 0;
    let cbBuffer = buf.length;
    let cbPattern = 4;
    let dwPattern = null;
    if (cbBuffer == len) {      // sector must be full-size (we don't pad it with zeros first like convdisk.php did)
    let off = cbBuffer - cbPattern;
        dwPattern = buf.readInt32LE(off);
        while ((off -= cbPattern) >= 0) {
            let dw = buf.readInt32LE(off);
            // if (fDebug) DiskDump.logConsole(str.toHex(off, 0, true) + ": comparing " + str.toHex(dw, 0, true) + " to pattern " + str.toHex(dwPattern, 0, true));
            if (dw != dwPattern) break;
            cbTrim += cbPattern;
        }
    }
    if (cbTrim < 8) {
        dwPattern = null;
    } else {
        cbBuffer -= (cbTrim + cbPattern);
    }
    return [dwPattern, cbBuffer];
};

/**
 * FileInfo objects have the following properties:
 *
 *      FILE_NAME: the 8.3 name to use
 *      FILE_PATH: the fully-qualified host path, if any
 *      FILE_ATTR: the attribute bits to use (see the ATTR constants below)
 *      FILE_TIME: a Date object representing the file's modification date/time, null if unknown
 *      FILE_SIZE: the size of the file, in bytes (or -1, in which case FILE_DATA is another aFiles array)
 *      FILE_DATA: the file's data (either a string or a Buffer), which may either be pre-read or deferred to buildClusters()
 *      FILE_CLUS: the cluster to be assigned to the file, if any
 *
 * @class FileInfo
 * @property {string} FILE_NAME
 * @property {string} FILE_PATH
 * @property {number} FILE_ATTR
 * @property {Date} FILE_TIME
 * @property {number} FILE_SIZE
 * @property {string|Buffer} FILE_DATA
 * @property {number} FILE_CLUS
 * @property {string} FILE_MD5
 */

/**
 * validateTime(dateTime)
 *
 * @this {DiskDump}
 * @param {Date} dateTime
 * @returns {boolean} true if date/time modified, false if not
 */
DiskDump.prototype.validateTime = function(dateTime)
{
    let fModified = false;
    if (dateTime) {
        let year = dateTime.getFullYear();
        let month = dateTime.getMonth();
        let day = dateTime.getDate();
        let hours = dateTime.getHours();
        let minutes = dateTime.getMinutes();
        let seconds = dateTime.getSeconds();
        /*
         * The year in a DOS modification date occupies 7 bits and is interpreted as a non-negative value (0-127)
         * that is added to the base year of 1980, so the range of valid years is 1980-2107.  However, it's worth
         * noting that in PC DOS 2.0, I observed a date with the largest possible year value (127) displayed as
         * "12-31-:7" (an ASCII ':' is the next highest character after '0').  While that DOES distinguish the year
         * 2007 from the year 2107, we probably shouldn't allow any year > 2099, to eliminate confusion.
         *
         * In fact, it might be worth setting the upper limit to 2079, otherwise a date like "12-31-81" is ambiguous
         * (it could mean 1981 or 2081).  But I'll stick to a limit of 2099 for now.
         */
        if (year < 1980) {
            year = 1980; month = 0; day = 1;
            hours = 0; minutes = 0; seconds = 2;        // PC DOS 2.0 won't display times that are completely zero
            fModified = true;
        } else if (year > 2099) {
            year = 2099; month = 11; day = 31;
            hours = 23; minutes = 59; seconds = 2;
            fModified = true;
        }
        if (fModified) {
            dateTime.setFullYear(year, month, day);
            dateTime.setHours(hours, minutes, seconds);
        }
    }
    return fModified;
};

/**
 * buildData(cb)
 *
 * @this {DiskDump}
 * @param {number} cb
 * @param {Array.<number>} [abInit]
 * @returns {Array.<number>} of bytes, initialized with abInit (or with zero when abInit is empty or exhausted)
 */
DiskDump.prototype.buildData = function(cb, abInit)
{
    let ab = new Array(cb);
    for (let i = 0; i < cb; i++) {
        ab[i] = abInit && abInit[i] || 0;
    }
    return ab;
};

/**
 * copyData(ab)
 *
 * @this {DiskDump}
 * @param {number} offDisk
 * @param {Array.<number>} ab
 * @returns {number} number of bytes written
 */
DiskDump.prototype.copyData = function(offDisk, ab)
{
    let buf = new BufferPF(ab);
    buf.copy(this.bufDisk, offDisk);
    return ab.length;
};

/**
 * addManifestInfo(fileInfo)
 *
 * @this {DiskDump}
 * @param {FileInfo} fileInfo
 */
DiskDump.prototype.addManifestInfo = function(fileInfo)
{
    this.aManifestInfo.push(fileInfo);
};

/**
 * buildManifestInfo(sImage)
 *
 * @this {DiskDump}
 * @param {string} sImage
 */
DiskDump.prototype.buildManifestInfo = function(sImage)
{
    if (!this.aManifestInfo.length) {
        let asFiles;
        let sDir = sImage.replace(/\.(img|json)/, "");
        if (sDir != sImage) {
            sDir += path.sep;
            try {
                asFiles = glob.sync(sDir + "**");
            } catch(err) {
                console.log(err.message);
            }
            for (let i = 0; i < asFiles.length; i++) {
                let sFile = asFiles[i];
                if (!sFile.substr(sDir.length)) continue;
                /** @type {FileInfo} */
                let fileInfo = {};
                fileInfo.FILE_PATH = sFile;
                fileInfo.FILE_NAME = path.basename(sFile);
                let stats = fs.statSync(sFile);
                fileInfo.FILE_ATTR = stats.isDirectory()? DiskAPI.ATTR.SUBDIR : (this.sLabel == "none"? 0 : DiskAPI.ATTR.ARCHIVE);
                fileInfo.FILE_SIZE = stats.size;
                fileInfo.FILE_TIME = this.getDSTAdjustedTime(stats.mtime);
                if (!(fileInfo.FILE_ATTR & DiskAPI.ATTR.SUBDIR)) {
                    let bufData = fs.readFileSync(sFile);
                    fileInfo.FILE_MD5 = crypto.createHash('md5').update(bufData).digest('hex');
                }
                this.validateTime(fileInfo.FILE_TIME);
                this.addManifestInfo(fileInfo);
            }
        }
    }
};

/**
 * isDST(time)
 *
 * See: https://stackoverflow.com/questions/11887934/how-to-check-if-the-dst-daylight-saving-time-is-in-effect-and-if-it-is-whats
 *
 * NOTE: This code uses the fact that getTimezoneOffset() returns different values inside and outside of DST,
 * and compares the difference between the two (for example, New York returns -5 outside DST and -4 inside DST).
 *
 * @this {DiskDump}
 * @param {Date} time
 * @returns {number} (1 if time is INSIDE Daylight Savings Time, 0 if OUTSIDE)
 */
DiskDump.prototype.isDST = function(time)
{
    let jan = new Date(time.getFullYear(), 0, 1);
    let jul = new Date(time.getFullYear(), 6, 1);
    return time.getTimezoneOffset() < Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset())? 1 : 0;
};

/**
 * getDSTAdjustedTime(time)
 *
 * To compensate for the fact that modern operating systems (eg, macOS) like to apply a DST bias to file times
 * inside FAT volumes, we attempt to remove that bias as follows: if "today" is INSIDE DST, then any file time
 * OUTSIDE DST should have its hour adjusted by +1; conversely, if "today" is OUTSIDE DST, then any file time
 * INSIDE DST should have its hour adjusted by -1.
 *
 * So, we have defined a function, isDST(time), which returns 1 for INSIDE and 0 for OUTSIDE; thus, the appropriate
 * hour delta is simply "isDST(today) - isDST(time)".
 *
 * @this {DiskDump}
 * @param {Date} time (ie, some local file time)
 * @returns {Date}
 */
DiskDump.prototype.getDSTAdjustedTime = function(time)
{
    let today = new Date();
    let delta = this.isDST(today) - this.isDST(time);
    if (delta) time.setHours(time.getHours() + delta);
    return time;
};

/**
 * isASCII(sData)
 *
 * @this {DiskDump}
 * @param {string} sData
 * @returns {boolean} true if sData is entirely ASCII (ie, no bytes with bit 7 set)
 */
DiskDump.prototype.isASCII = function(sData)
{
    for (let i = 0; i < sData.length; i++) {
        let b = sData.charCodeAt(i);
        if (b & 0x80) return false;
    }
    return true;
};

/**
 * isTextFile(sFileName)
 *
 * @this {DiskDump}
 * @param {string} sFileName
 * @returns {boolean} true if the filename contains a known text file extension, false if unknown
 */
DiskDump.prototype.isTextFile = function(sFileName)
{
    if (this.fNormalize) {
        for (let i = 0; i < DiskDump.asTextFileExts.length; i++) {
            if (str.endsWith(sFileName, DiskDump.asTextFileExts[i])) return true;
        }
    }
    return false;
};

/**
 * readDir(sDir, fRoot, done)
 *
 * Returns an array (aFiles) via the done() callback, where each entry is a FileInfo object.
 * If the FileInfo refers to a subdirectory, then FILE_SIZE is -1 and FILE_DATA entry is another aFiles array.
 *
 * @this {DiskDump}
 * @param {string} sDir is a fully-qualified directory name
 * @param {boolean} [fRoot] should be true for the first directory read
 * @param {function(Error,Array)} done
 */
DiskDump.prototype.readDir = function(sDir, fRoot, done)
{
    let fileInfo;
    let aFiles = [];

    /*
     * Use the directory name as a candidate for a volume label as well, if it's upper-case and
     * 11 characters or less (after we remove any numeric prefix that we may have added to indicate
     * disk order, that is).
     *
     * From the command-line, you can override this by passing --label=<somelabel>.  Specifying
     * --label=none disables the volume label.
     */
    if (fRoot) {
        fileInfo = this.buildVolLabel(this.sLabel || sDir);
        if (fileInfo) {
            aFiles.push(fileInfo);
            // this.addManifestInfo(fileInfo);
        }
    }

    let obj = this;
    var cCallbacks = 0;

    fs.readdir(sDir, function doneReadDir(err, asFiles) {
        let iFile;
        if (err) {
            done(err, null);
            return;
        }

        /*
         * Sorting file names now (since they're just strings) is easier/faster than sorting the filtered
         * aFiles array later (which would require the use of a compare function), so we do the sort now; it
         * has no bearing on the outcome.  Note that the lack of a stable sort in JavaScript also has no
         * bearing, because we're sorting on name, and every name is different.
         *
         * However, it's not entirely clear whether this is strictly necessary.  I think the variations in
         * file name order that I was originally seeing may have simply been due to out-of-order fs.stat()
         * calls, because I used to call addManifestInfo() in the callback.
         */
        if (obj.fNormalize) asFiles.sort();

        for (iFile = 0; iFile < asFiles.length; iFile++) {
            let sFileName = asFiles[iFile];
            /*
             * fs.readdir() already excludes "." and ".." but there are also a wide variety of hidden
             * files on *nix systems that begin with a period, which in general we should ignore, too.
             *
             * TODO: Consider an override option that will allow hidden file(s) to be included as well.
             */
            if (sFileName.charAt(0) == '.') continue;
            let sFilePath = path.join(sDir, sFileName);
            /** @type {FileInfo} */
            fileInfo = {};
            /*
             * TODO: Verify that buildShortName() didn't change the name into one that already exists in this directory.
             * In the normal case, the directory being read already contains files named according to DOS conventions,
             * and therefore they will automatically be unique.
             */
            if (obj.isExcluded(sFileName)) continue;
            fileInfo.FILE_NAME = obj.buildShortName(sFileName);
            fileInfo.FILE_PATH = sFilePath;
            aFiles.push(fileInfo);

            /*
             * We add the fileInfo objects to the aManifestInfo array NOW, because the fs.stat() callbacks may
             * occur out-of-order.  The only downside is that non-file entries can now appear in the array, which
             * means updateManifest() will want to check for those and ignore them.
             */
            obj.addManifestInfo(fileInfo);
        }

        let errSave = null;
        for (iFile = 0; iFile < aFiles.length; iFile++) {
            if (!aFiles[iFile].FILE_PATH) continue;
            (function readDirEntry(fileInfo) {
                cCallbacks++;
                fs.stat(fileInfo.FILE_PATH, function doneStat(err, stats) {
                    if (!err) {
                        fileInfo.FILE_TIME = stats.mtime;       // NOTE: This is a Date object
                        obj.validateTime(fileInfo.FILE_TIME);
                        if (stats.isDirectory()) {
                            fileInfo.FILE_ATTR = DiskAPI.ATTR.SUBDIR;
                            fileInfo.FILE_SIZE = -1;
                            obj.readDir(fileInfo.FILE_PATH, false, function(err, aFilesDir) {
                                fileInfo.FILE_DATA = aFilesDir;
                                if (err && !errSave) errSave = err;
                                if (!--cCallbacks) done(errSave, aFiles);
                            });
                            return;
                        } else {
                            fileInfo.FILE_ATTR = (obj.sLabel == "none"? 0 : DiskAPI.ATTR.ARCHIVE);
                            fileInfo.FILE_SIZE = stats.size;
                            if (obj.isTextFile(fileInfo.FILE_NAME)) {
                                fs.readFile(fileInfo.FILE_PATH, {encoding: "utf8"}, function doneReadDirEntry(err, sData) {
                                    if (!err) {
                                        if (obj.isASCII(sData)) {
                                            let sNew = sData.replace(/\n/g, "\r\n").replace(/\r+/g, "\r");
                                            if (sNew != sData) DiskDump.logWarning("replaced line endings in " + fileInfo.FILE_NAME + " (size changed from " + fileInfo.FILE_SIZE + " to " + sNew.length + " bytes)");
                                            fileInfo.FILE_DATA = sNew;
                                            fileInfo.FILE_SIZE = sNew.length;
                                        } else {
                                            DiskDump.logWarning("non-ASCII data in " + fileInfo.FILE_NAME + " (line endings unchanged)");
                                        }
                                    } else {
                                        if (!errSave) errSave = err;
                                    }
                                    // obj.addManifestInfo(fileInfo);
                                    if (!--cCallbacks) done(errSave, aFiles);
                                });
                                return;
                            }
                            // obj.addManifestInfo(fileInfo);
                        }
                    } else {
                        if (!errSave) errSave = err;
                    }
                    if (!--cCallbacks) done(errSave, aFiles);
                });
            }(aFiles[iFile]));  // jshint ignore:line
        }
        if (!cCallbacks) done(errSave, aFiles);
    });
};

/**
 * readPath(sPath, done)
 *
 * Returns an array (aFiles) via the done() callback, where each entry is a FileInfo object.
 * If the FileInfo refers to a subdirectory, then FILE_SIZE is -1 and FILE_DATA entry is another aFiles array.
 *
 * NOTE: sPath begins fully-qualified (see this.sDiskPath), but if any of the intermediate entries contains paths,
 * it's our responsibility to join them with sServerRoot.
 *
 * @this {DiskDump}
 * @param {string} sPath contains series of semi-colon-separated files (local or remote)
 * @param {function(Error,Array)} done
 */
DiskDump.prototype.readPath = function(sPath, done)
{
    let iFile, aFiles = [];
    let asFiles = sPath.split(';');
    let sDefaultPath = "";

    let fileInfo = this.buildVolLabel(this.sLabel);
    if (fileInfo) {
        aFiles.push(fileInfo);
        // this.addManifestInfo(fileInfo);
    }

    for (iFile = 0; iFile < asFiles.length; iFile++) {
        fileInfo = {};
        let sFileName = asFiles[iFile];
        let i = sFileName.lastIndexOf(path.sep);
        if (i >= 0) {
            //
            // We used to prevent paths with "..", to protect the web server from malicious requests,
            // but we need to allow them for unfettered command-line support of the --path option.
            //
            // if (sFileName.indexOf("..") >= 0) {
            //     let err = new Error('invalid file "' + sFileName + '"');
            //     done(err, null);
            //     return;
            // }
            sDefaultPath = sFileName.substr(0, i);
            /*
             * The DiskDump constructor joins the beginning of sPath with sServerRoot,
             * but if there are any intermediate paths, we have to join them ourselves.
             */
            if (iFile > 0 && !netlib.isRemote(sDefaultPath)) {
                sDefaultPath = path.join(this.sServerRoot, sDefaultPath);
            }
            sFileName = sFileName.substr(i+1);
        }
        /*
         * Ordinarily, sFileName will already be the basename, except when it has a path element like "../"
         *
         * TODO: Verify that buildShortName() doesn't change the name into one that already exists.
         * This is more of a problem than in readDir(), because all these names are user-supplied.
         */
        let sBaseName = path.basename(sFileName);
        if (this.isExcluded(sBaseName)) continue;
        fileInfo.FILE_NAME = this.buildShortName(sBaseName);
        fileInfo.FILE_PATH = path.join(sDefaultPath, sFileName);
        fileInfo.FILE_TIME = null;
        aFiles.push(fileInfo);

        /*
         * We add the fileInfo objects to the aManifestInfo array NOW, because the getStat() callbacks may
         * occur out-of-order.  The only downside is that non-file entries can now appear in the array, which
         * means updateManifest() will want to check for those and ignore them.
         */
        this.addManifestInfo(fileInfo);
    }

    let obj = this;
    let cCallbacks = 0;
    let errSave = null;

    for (iFile = 0; iFile < aFiles.length; iFile++) {
        if (!aFiles[iFile].FILE_PATH) continue;
        (function readPathEntry(fileInfo) {
            cCallbacks++;
            let sFilePath = fileInfo.FILE_PATH;
            /*
             * TODO: See if we can eliminate some of the unfortunate redundancy between the code
             * below and the very similar code in readDir(), such as the "README.md" pre-processing.
             *
             * However, in this case, because we want readPath() to support both local and remote
             * paths, we call DiskDump.readFile() instead of fs.readFile().
             */
            DiskDump.getStat(sFilePath, function doneReadPathStat(err, stats) {
                if (!err) {
                    fileInfo.FILE_TIME = stats.mtime;           // NOTE: This is a Date object
                    obj.validateTime(fileInfo.FILE_TIME);
                    if (!stats.remote && stats.isDirectory()) {
                        fileInfo.FILE_ATTR = DiskAPI.ATTR.SUBDIR;
                        fileInfo.FILE_SIZE = -1;
                        obj.readDir(fileInfo.FILE_PATH, false, function(err, aFilesDir) {
                            fileInfo.FILE_DATA = aFilesDir;
                            if (err && !errSave) errSave = err;
                            if (!--cCallbacks) done(errSave, aFiles);
                        });
                        return;
                    } else {
                        fileInfo.FILE_ATTR = (obj.sLabel == "none"? 0 : DiskAPI.ATTR.ARCHIVE);
                        fileInfo.FILE_SIZE = stats.size;
                        if (obj.isTextFile(fileInfo.FILE_NAME)) {
                            DiskDump.readFile(sFilePath, "utf8", function doneReadPathEntry(err, sData) {
                                if (!err) {
                                    if (obj.isASCII(sData)) {
                                        let sNew = sData.replace(/\n/g, "\r\n").replace(/\r+/g, "\r");
                                        if (sNew != sData) DiskDump.logWarning("replaced line endings in " + fileInfo.FILE_NAME + " (size changed from " + fileInfo.FILE_SIZE + " to " + sNew.length + " bytes)");
                                        fileInfo.FILE_DATA = sNew;
                                        fileInfo.FILE_SIZE = sNew.length;
                                        // obj.addManifestInfo(fileInfo);
                                    } else {
                                        DiskDump.logWarning("non-ASCII data in " + fileInfo.FILE_NAME + " (line endings unchanged)");
                                    }
                                } else {
                                    if (!errSave) errSave = err;
                                }
                                if (!--cCallbacks) done(errSave, aFiles);
                            });
                            return;
                        }
                        // obj.addManifestInfo(fileInfo);
                    }
                } else {
                    if (!errSave) errSave = err;
                }
                if (!--cCallbacks) done(errSave, aFiles);
            });
        }(aFiles[iFile]));      // jshint ignore:line
    }
    if (!cCallbacks) done(errSave, aFiles);
};

/**
 * buildShortName(sFile, fLabel)
 *
 * @this {DiskDump}
 * @param {string} sFile is the basename of a file
 * @param {boolean} [fLabel]
 * @returns {string} containing a corresponding filename in FAT "8.3" format
 */
DiskDump.prototype.buildShortName = function(sFile, fLabel)
{
    let sName = sFile.toUpperCase();
    let iExt = sName.lastIndexOf('.');
    let sExt = "";
    if (iExt >= 0) {
        sExt = sName.substr(iExt+1);
        sName = sName.substr(0, iExt);
    } else if (fLabel && sName.length > 8) {
        sExt = sName.substr(8);
    }
    sName = sName.substr(0, 8).trim();
    sExt = sExt.substr(0, 3).trim();
    let iPeriod = -1;
    if (sExt) {
        iPeriod = sName.length;
        sName += '.' + sExt;
    }
    for (let i = 0; i < sName.length; i++) {
        if (i == iPeriod) continue;
        let ch = sName.charAt(i);
        if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()-@^_`{}~".indexOf(ch) < 0) {
            sName = sName.substr(0, i) + '_' + sName.substr(i+1);
        }
    }
    return sName;
};

/**
 * buildVolLabel(sDir)
 *
 * NOTE: When a FileInfo is returned, there will be no FILE_PATH property, which means
 * don't go looking for a corresponding entry in the host file system, because there isn't one.
 *
 * @this {DiskDump}
 * @param {string} [sDir]
 * @returns {FileInfo|null} (null if no suitable volume label)
 */
DiskDump.prototype.buildVolLabel = function(sDir)
{
    let sVolume = null;
    /** @type {FileInfo} */
    let fileInfo = null;
    if (sDir) {
        sVolume = path.basename(sDir);
        /*
         * UPDATE: This all seems overly restrictive.  I don't even remember what I was thinking
         * here anymore.  Let's just build a frickin' label.
         *
        if (sVolume == sVolume.toUpperCase()) {
            let i = sVolume.indexOf('-');
            if (i > 0) {
                let sPrefix = sVolume.substr(0, i);
                if (!sPrefix.match(/^\d+$/))
                    sVolume = null;
                else
                    sVolume = sVolume.substr(i+1);
            }
        }
        */
        sVolume = sVolume.toLowerCase();
    }
    if (!sVolume || sVolume == "archive" || sVolume == "disk" || sVolume == "root") {
        /*
         * UPDATE: If I dumped all the files for this disk image into a folder generically named
         * "archive" or "disk" or "root", then let's give it more meaningful name for the outside world
         * (ie, the name of the project).
         */
        sVolume = DiskDump.PCJS_LABEL;
    }
    if (sVolume && sVolume != "none") {
        fileInfo = {};
        fileInfo.FILE_NAME = this.buildShortName(sVolume, true);
        fileInfo.FILE_ATTR = DiskAPI.ATTR.LABEL;
        /*
         * I used to initialize the volume label's date with a simple "new Date()", but because that results
         * in a different disk image every time we run DiskDump, I've opted for a hard-coded date/time (ie, the
         * day the IBM PC was introduced, August 12, 1981, with an arbitrary time of 12pm).
         *
         * UPDATE: I'm not sure I care about that anymore.  Time-stamping the created disk image seems more useful.
         */
        fileInfo.FILE_TIME = /* this.fNormalize? new Date(1981, 7, 12, 12) : */ new Date();
        this.validateTime(fileInfo.FILE_TIME);
        fileInfo.FILE_SIZE = 0;
    }
    return fileInfo;
};

/**
 * buildFAT(abFAT, aFiles, iCluster, cbCluster)
 *
 * @this {DiskDump}
 * @param {Array.<number>} abFAT
 * @param {Array} aFiles
 * @param {number} iCluster
 * @param {number} cbCluster
 * @returns {number}
 */
DiskDump.prototype.buildFAT = function(abFAT, aFiles, iCluster, cbCluster)
{
    let cb;
    let cSubDirs = 0;
    for (let iFile = 0; iFile < aFiles.length; iFile++) {
        cb = aFiles[iFile].FILE_SIZE;
        if (cb < 0) {
            cb = (aFiles[iFile].FILE_DATA.length + 2) * 32;
            cSubDirs++;
        }
        let cFileClusters = ((cb + cbCluster - 1) / cbCluster) | 0;
        if (!cFileClusters) {
            aFiles[iFile].FILE_CLUS = 0;
        } else {
            aFiles[iFile].FILE_CLUS = iCluster;
            while (cFileClusters-- > 0) {
                let iNextCluster = iCluster + 1;
                if (!cFileClusters) iNextCluster = 0xFFF;
                // if (fDebug) DiskDump.logConsole(aFiles[iFile].FILE_NAME + ": setting cluster entry " + iCluster + " to " + str.toHexWord(iNextCluster));
                this.buildFATEntry(abFAT, iCluster++, iNextCluster);
            }
        }
    }
    if (cSubDirs) {
        for (let iFile = 0; iFile < aFiles.length; iFile++) {
            cb = aFiles[iFile].FILE_SIZE;
            if (cb < 0) {
                iCluster = this.buildFAT(abFAT, aFiles[iFile].FILE_DATA, iCluster, cbCluster);
            }
        }
    }
    return iCluster;
};

/**
 * buildFATEntry(abFat, iFat, v)
 *
 * @this {DiskDump}
 * @param {Array.<number>} abFAT
 * @param {number} iFAT
 * @param {number} v
 */
DiskDump.prototype.buildFATEntry = function(abFAT, iFAT, v)
{
    let iBit = iFAT * 12;
    let iByte = (iBit >> 3);
    if ((iBit % 8) === 0) {
        abFAT[iByte] = v & 0xff;
        iByte++;
        if (abFAT[iByte] === undefined) abFAT[iByte] = 0;
        abFAT[iByte] = (abFAT[iByte] & 0xF0) | (v >> 8);
    }
    else {
        if (abFAT[iByte] === undefined) abFAT[iByte] = 0;
        abFAT[iByte] = (abFAT[iByte] & 0x0F) | ((v & 0xF) << 4);
        abFAT[iByte + 1] = (v >> 4);
    }
};

/**
 * buildDir(abDir, aFiles, dateMod, iCluster, iParentCluster)
 *
 * @this {DiskDump}
 * @param {Array.<number>} abDir
 * @param {Array} aFiles
 * @param {Date} [dateMod]
 * @param {number} [iCluster]
 * @param {number} [iParentCluster]
 * @returns {number} number of directory entries built
 */
DiskDump.prototype.buildDir = function(abDir, aFiles, dateMod, iCluster, iParentCluster)
{
    if (dateMod === undefined) dateMod = null;
    if (iCluster === undefined) iCluster = -1;
    if (iParentCluster === undefined) iParentCluster = -1;

    let offDir = 0;
    let cEntries = 0;
    if (iCluster >= 0) {
        offDir += this.buildDirEntry(abDir, offDir, ".", 0, DiskAPI.ATTR.SUBDIR, dateMod, iCluster);
        offDir += this.buildDirEntry(abDir, offDir, "..", 0, DiskAPI.ATTR.SUBDIR, dateMod, iParentCluster);
        cEntries += 2;
    }
    for (let iFile = 0; iFile < aFiles.length; iFile++) {
        if (aFiles[iFile].FILE_CLUS === undefined) {
            if (fDebug) DiskDump.logConsole("file " + aFiles[iFile].FILE_NAME + " missing cluster, skipping");
            continue;
        }
        offDir += this.buildDirEntry(abDir, offDir, aFiles[iFile].FILE_NAME, aFiles[iFile].FILE_SIZE, aFiles[iFile].FILE_ATTR, aFiles[iFile].FILE_TIME, aFiles[iFile].FILE_CLUS);
        cEntries++;
    }
    return cEntries;
};

/**
 * buildDateTime(dateMod)
 *
 * @this {DiskDump}
 * @param {Date} dateMod contains the modification time of a file
 * @returns {number} the time (bits 0-15) and date (bits 16-31) in FAT format
 */
DiskDump.prototype.buildDateTime = function(dateMod)
{
    let year = dateMod.getFullYear();
    let month = dateMod.getMonth() + 1;
    let day = dateMod.getDate();
    let time = ((dateMod.getHours() & 0x1F) << 11) | ((dateMod.getMinutes() & 0x3F) << 5) | ((dateMod.getSeconds() >> 1) & 0x1F);
    /*
     * NOTE: If validateTime() is doing its job, then we should never have to do this.  This is simple paranoia.
     */
    if (year < 1980) {
        year = 1980; month = 1; day = 1; time = 1;
    } else if (year > 2099) {
        year = 2099; month = 12; day = 31; time = 1;
    }
    let date = (((year - 1980) & 0x7F) << 9) | (month << 5) | day;
    return ((date & 0xffff) << 16) | (time & 0xffff);
};

/**
 * buildDirEntry(ab, off, sFile, cbFile, bAttr, dateMod, iCluster)
 *
 * TODO: Create constants that define the various directory entry fields, including the overall size (32 bytes).
 *
 * @this {DiskDump}
 * @param {Array.<number>} ab contains the bytes of a directory
 * @param {number} off is the offset within ab to build the next directory entry
 * @param {string} sFile is the file name
 * @param {number} cbFile is the size of the file, in bytes
 * @param {number} bAttr contains the attribute bits of the file
 * @param {Date} dateMod contains the modification date of the file
 * @param {number} iCluster is the starting cluster of the file
 * @returns {number} number of bytes added to the directory (normally 32)
 */
DiskDump.prototype.buildDirEntry = function(ab, off, sFile, cbFile, bAttr, dateMod, iCluster)
{
    let offDir = off;
    let sFileExt = "";
    let i = sFile.indexOf('.');

    if (i > 0) {
        sFileExt = sFile.substr(i+1);
        sFile = sFile.substr(0, i);
    }
    for (i = 0; i < 8; i++) {
        ab[off++] = (i < sFile.length? sFile.charCodeAt(i) : 0x20);
    }
    for (i = 0; i < 3; i++) {
        ab[off++] = (i < sFileExt.length? sFileExt.charCodeAt(i) : 0x20);
    }

    /*
     * File attribute bits at offset 0x0B are next: (0x01 for read-only, 0x02 for hidden, 0x04 for system,
     * 0x08 for volume label, 0x10 for subdirectory, and 0x20 for archive)
     */
    ab[off++] = bAttr;

    /*
     * Skip 10 bytes, bringing us to offset 0x16: 2 bytes for modification time, plus 2 bytes for modification date.
     */
    off += 10;
    if (dateMod) {
        let dateTime = this.buildDateTime(dateMod);
        ab[off++] = dateTime & 0xff;
        ab[off++] = (dateTime >> 8) & 0xff;
        dateTime >>= 16;
        ab[off++] = dateTime & 0xff;
        ab[off++] = (dateTime >> 8) & 0xff;
    } else {
        for (i = 0; i < 4; i++) {
            ab[off++] = 0;
        }
    }

    /*
     * Now we're at offset 0x1A, where the starting cluster (2 bytes) and file size (4 bytes) are stored,
     * completing the 32-byte directory entry.
     */
    ab[off++] = iCluster & 0xff;                // first file cluster (low byte)
    ab[off++] = (iCluster >> 8) & 0xff;         // first file cluster (high byte)

    /*
     * For subdirectories, we recorded a -1 rather than a 0, because unlike true 0-length files, they DO actually
     * have a size, it's just not immediately known until we traverse the directory's contents.  However, when it
     * comes time to the write the directory entry for a subdirectory, the FAT convention is to record it as zero.
     */
    if (cbFile < 0) cbFile = 0;
    ab[off++] = cbFile & 0xff;
    ab[off++] = (cbFile >> 8) & 0xff;
    ab[off++] = (cbFile >> 16) & 0xff;
    ab[off++] = (cbFile >> 24) & 0xff;

    return off - offDir;
};

/**
 * buildClusters(aFiles, offDisk, cbCluster, iParentCluster, done)
 *
 * @this {DiskDump}
 * @param {Array} aFiles
 * @param {number} offDisk
 * @param {number} cbCluster
 * @param {number} iParentCluster
 * @param {number} iLevel
 * @param {function(Error)} done
 * @returns {number} number of clusters built
 */
DiskDump.prototype.buildClusters = function(aFiles, offDisk, cbCluster, iParentCluster, iLevel, done)
{
    let obj = this;
    let cSubDirs = 0;
    let cClusters = 0;

    if (!iLevel) {
        this.cWritesPending = 0;
    }

    for (let iFile = 0; iFile < aFiles.length; iFile++) {
        let bufData = null;
        let cbData = aFiles[iFile].FILE_SIZE;
        if (cbData > 0) {
            let sData = aFiles[iFile].FILE_DATA;
            if (!sData) {
                this.cWritesPending++;
                (function readClusters(file, cb, off) {
                    fs.readFile(file.FILE_PATH, function doneReadClusters(err, buf) {
                        /*
                         * If cWritesPending has been prematurely zeroed, we assume that's because the buildClusters()
                         * caller discovered a problem (eg, the total number of clusters exceeds what can fit in the image),
                         * so we bail.
                         */
                        if (!obj.cWritesPending) return;
                        if (!err) {
                            if (fDebug && cb != buf.length) DiskDump.logConsole(file.FILE_NAME + ": initial size (" + cb + ") does not match actual size (" + buf.length + ")");
                            buf.copy(obj.bufDisk.buf || obj.bufDisk, off);
                            if (fDebug) DiskDump.logConsole(str.toHex(off, 0, true) + ": " + str.toHex(buf.length, 0, true) + " bytes written for " + file.FILE_PATH);
                            if (obj.sManifestFile) file.FILE_MD5 = crypto.createHash('md5').update(buf).digest('hex');
                        }
                        if (!--obj.cWritesPending) done(err);
                    });
                }(aFiles[iFile], cbData, offDisk));     // jshint ignore:line
            } else {
                cbData = sData.length;
                bufData = new BufferPF(sData);
                if (this.sManifestFile) aFiles[iFile].FILE_MD5 = crypto.createHash('md5').update(bufData.buf || bufData).digest('hex');
            }
        }
        else if (cbData < 0) {
            let abData = [];
            cbData = this.buildDir(abData, aFiles[iFile].FILE_DATA, aFiles[iFile].FILE_TIME, aFiles[iFile].FILE_CLUS, iParentCluster) * 32;
            bufData = new BufferPF(this.buildData(cbData, abData));
            cSubDirs++;
        }
        if (bufData) {
            bufData.copy(this.bufDisk, offDisk);
            if (fDebug) DiskDump.logConsole(str.toHex(offDisk, 0, true) + ": " + str.toHex(bufData.length, 0, true) + " bytes IMMEDIATELY written for " + aFiles[iFile].FILE_PATH);
        }
        offDisk += cbData;
        cClusters += ((cbData / cbCluster) | 0);
        let cbPartial = (cbData % cbCluster);
        if (cbPartial) {
            cbPartial = cbCluster - cbPartial;
            offDisk += cbPartial;
            cClusters++;
        }
    }

    if (cSubDirs > 0) {
        for (let iFile = 0; iFile < aFiles.length; iFile++) {
            let cb = aFiles[iFile].FILE_SIZE;
            if (cb < 0) {
                if (fDebug) DiskDump.logConsole(str.toHex(offDisk, 0, true) + ": buildClusters()");
                let cSubClusters = this.buildClusters(aFiles[iFile].FILE_DATA, offDisk, cbCluster, aFiles[iFile].FILE_CLUS, iLevel + 1, done);
                cClusters += cSubClusters;
                offDisk += cSubClusters * cbCluster;
                if (fDebug) DiskDump.logConsole(str.toHex(offDisk, 0, true) + ": buildClusters() returned, writing " + cSubClusters + " clusters");
            }
        }
    }

    if (!iLevel) {
        if (!this.cWritesPending) done(null);
    }

    return cClusters;
};

/**
 * buildImage()
 *
 * @this {DiskDump}
 * @param {boolean} fDir
 * @param {function(Error)} done
 */
DiskDump.prototype.buildImage = function(fDir, done)
{
    let obj = this;
    if ((this.fDir = fDir)) {
        this.readDir(this.sDiskPath, true, function doneReadDir(err, aFiles) {
            if (err) {
                done(err);
                return;
            }
            obj.buildImageFromFiles(aFiles, done);
        });
    } else {
        this.readPath(this.sDiskPath, function doneReadPath(err, aFiles) {
            if (err) {
                done(err);
                return;
            }
            obj.buildImageFromFiles(aFiles, done);
        });
    }
};

/**
 * calcFileSizes(aFiles, cSectorsPerCluster)
 *
 * @this {DiskDump}
 * @param {Array} aFiles
 * @param {number} [cSectorsPerCluster] (default is 1)
 * @returns {number} of bytes required for all files, including all subdirectories
 */
DiskDump.prototype.calcFileSizes = function(aFiles, cSectorsPerCluster)
{
    let cbTotal = 0;
    let cbCluster = (cSectorsPerCluster || 1) * 512;
    for (let iFile = 0; iFile < aFiles.length; iFile++) {
        let cb = aFiles[iFile].FILE_SIZE;
        let cbSubTotal = 0;
        if (cb < 0) {
            cb = (aFiles[iFile].FILE_DATA.length + 2) * 32;
            cbSubTotal = this.calcFileSizes(aFiles[iFile].FILE_DATA, cSectorsPerCluster);
        }
        cbTotal += cb;
        if ((cb %= cbCluster)) {
            cbTotal += cbCluster - cb;
        }
        cbTotal += cbSubTotal;
    }
    return cbTotal;
};

/**
 * buildMBR(cHeads, cSectorsPerTrack, cbSector, cTotalSectors)
 *
 * @this {DiskDump}
 * @param {number} cHeads
 * @param {number} cSectorsPerTrack
 * @param {number} cbSector
 * @param {number} cTotalSectors
 * @returns {Array.<number>}
 */
DiskDump.prototype.buildMBR = function(cHeads, cSectorsPerTrack, cbSector, cTotalSectors)
{
    /*
     * There are four 16-byte partition entries in the MBR, starting at offset 0x1BE,
     * but we need only one, and like DOS 2.0, we'll use the last one, at offset 0x1EE.
     */
    let offSector = 0x1EE;
    let abSector = this.buildData(cbSector);

    /*
     * Next 1 byte: status + physical drive #
     */
    abSector[offSector++] = 0x80;           // 0x80 indicates an active partition entry

    /*
     * Next 3 bytes: CHS (Cylinder/Head/Sector) of first partition sector
     */
    abSector[offSector++] = 0x00;           // head: 0
    abSector[offSector++] = 0x02;           // sector: 1 (bits 0-5), cylinder bits 8-9: 0 (bits 6-7)
    abSector[offSector++] = 0x00;           // cylinder bits 0-7: 0

    /*
     * Next 1 byte: partition ID
     */
    abSector[offSector++] = 0x01;           // partition ID: 0x01 (FAT12)

    /*
     * Next 3 bytes: CHS (Cylinder/Head/Sector) of last partition sector
     */
    abSector[offSector++] = cHeads-1;
    let cCylinders = (cTotalSectors / (cHeads * cSectorsPerTrack)) | 0;
    abSector[offSector++] = cSectorsPerTrack | ((cCylinders & 0x300) >> 2);
    abSector[offSector++] = cCylinders & 0xff;

    /*
     * Next 4 bytes: LBA (Logical Block Address) of first partition sector
     */
    abSector[offSector++] = 1;
    abSector[offSector++] = 0x00;
    abSector[offSector++] = 0x00;
    abSector[offSector++] = 0x00;

    /*
     * Next 4 bytes: Number of sectors in partition
     */
    abSector[offSector++] = (cTotalSectors & 0xff);
    abSector[offSector++] = ((cTotalSectors >> 8) & 0xff);
    abSector[offSector++] = ((cTotalSectors >> 16) & 0xff);
    abSector[offSector++] = ((cTotalSectors >> 24) & 0xff);

    /*
     * Since we should be at offset 0x1FE now, store the MBR signature bytes
     */
    abSector[offSector++] = 0x55;
    abSector[offSector] = 0xAA;
    return abSector;
};

/**
 * buildImageFromFiles(aFiles)
 *
 * Note, however, that even if this function returns true, you won't receive the buffer until
 * all the writes to have it have finished.
 *
 * @this {DiskDump}
 * @param {Array} aFiles
 * @param {function(Error)} done
 * @returns {boolean} true if disk allocation successful, false if not
 */
DiskDump.prototype.buildImageFromFiles = function(aFiles, done)
{
    let err;
    if (!aFiles || !aFiles.length) {
        done(null);
        return false;
    }

    /*
     * Put reasonable upper limits on both individual file sizes and the total size of all files.
     */
    let cbMax = (this.kbTarget || 1440) * 1024;
    let nTargetSectors = (this.kbTarget? this.kbTarget * 2 : 0);

    /*
     * This initializes cbTotal assuming a "best case scenario" (ie, one sector per cluster); as soon as
     * we find a BPB that will support that size, we recalculate cbTotal using that BPB's cluster size, and
     * then we re-verify that that BPB will work.  If not, then we keep looking.
     */
    let cbTotal = this.calcFileSizes(aFiles);

    if (fDebug) DiskDump.logConsole("total calculated size for " + aFiles.length + " files/folders: " + cbTotal + " bytes (" + str.toHex(cbTotal, 0, true) + ")");

    if (cbTotal >= cbMax) {
        err = new Error("file(s) too large (" + cbTotal + " bytes total, " + cbMax + " bytes maximum)");
        done(err);
        return false;
    }

    let iBPB, abBoot, cbSector, cSectorsPerCluster, cbCluster, cFATs, cFATSectors;
    let cRootEntries, cRootSectors, cTotalSectors, cHiddenSectors, cSectorsPerTrack, cHeads, cDataSectors, cbAvail;

    /*
     * Find or build a BPB with enough capacity, and at the same time, calculate all the other values we'll need,
     * including total number of data sectors (cDataSectors).
     *
     * TODO: For now, the code that chooses a default BPB starts with entry #3 instead of #0, because Windows 95
     * (at least when running under VMware) fails to read the contents of such disks correctly.  Whether that's my
     * fault or Windows 95's fault is still TBD (although it's probably mine -- perhaps 160Kb diskettes aren't
     * supposed to have BPBs?)  The simple work-around is to avoid creating 160Kb diskette images used by PC DOS 1.0.
     * To play it safe, I also skip the 320Kb format (added for PC DOS 1.1).  360Kb was the most commonly used format
     * after PC DOS 2.0 introduced it.  PC DOS 2.0 also introduced 180Kb (a single-sided version of the 360Kb
     * double-sided format), but it's less commonly used.
     *
     * UPDATE: I've undone the above change, because when creating a disk image for an old application like:
     *
     *      /apps/pcx86/1983/adventmath ["Adventures in Math (1983)"]
     *
     * it's important to create a disk image that will work with PC DOS 1.0, which didn't understand 180Kb and 360Kb
     * disk images.
     */
    for (iBPB = 0; iBPB < DiskDump.aDefaultBPBs.length; iBPB++) {
        /*
         * Use slice() to copy the BPB, to ensure we don't alter the original.
         */
        abBoot = DiskDump.aDefaultBPBs[iBPB].slice();
        /*
         * If this BPB is for a hard drive but a disk size was not specified, skip it.
         */
        if ((abBoot[DiskAPI.BPB.MEDIA] == DiskAPI.FAT.MEDIA_FIXED) != (this.kbTarget >= 10000)) continue;
        cRootEntries = abBoot[DiskAPI.BPB.DIRENTS] | (abBoot[DiskAPI.BPB.DIRENTS + 1] << 8);
        if (aFiles.length > cRootEntries) continue;
        cbSector = abBoot[DiskAPI.BPB.SECBYTES] | (abBoot[DiskAPI.BPB.SECBYTES + 1] << 8);
        cSectorsPerCluster = abBoot[DiskAPI.BPB.CLUSSECS];
        cbCluster = cbSector * cSectorsPerCluster;
        cFATs = abBoot[DiskAPI.BPB.FATS];
        cFATSectors = abBoot[DiskAPI.BPB.FATSECS] | (abBoot[DiskAPI.BPB.FATSECS + 1] << 8);
        cRootSectors = (((cRootEntries * DiskAPI.DIRENT.LENGTH) + cbSector - 1) / cbSector) | 0;
        cTotalSectors = abBoot[DiskAPI.BPB.DISKSECS] | (abBoot[DiskAPI.BPB.DISKSECS + 1] << 8);
        cHiddenSectors = abBoot[DiskAPI.BPB.HIDDENSECS] | (abBoot[DiskAPI.BPB.HIDDENSECS + 1] << 8);
        cSectorsPerTrack = abBoot[DiskAPI.BPB.TRACKSECS] | (abBoot[DiskAPI.BPB.TRACKSECS + 1] << 8);
        cHeads = abBoot[DiskAPI.BPB.DRIVEHEADS] | (abBoot[DiskAPI.BPB.DRIVEHEADS + 1] << 8);
        cDataSectors = cTotalSectors - (cRootSectors + cFATs * cFATSectors + 1);
        cbAvail = cDataSectors * cbSector;
        if (!nTargetSectors || cHiddenSectors) {
            if (cbTotal <= cbAvail) {
                let cb = this.calcFileSizes(aFiles, cSectorsPerCluster);
                if (cb <= cbAvail) {
                    cbTotal = cb;
                    break;
                }
            }
        } else {
            if (cTotalSectors == nTargetSectors) break;
        }
    }

    if (iBPB == DiskDump.aDefaultBPBs.length) {
        err = new Error("too many file(s) for disk image (" + aFiles.length + " files, " + cbTotal + " bytes)");
        done(err);
        return false;
    }

    let abSector;
    let offDisk = 0;
    let cbDisk = cTotalSectors * cbSector;
    /*
     * If the disk is actually a partition on a larger drive, calculate how much larger the image should be
     * (ie, hidden sectors plus an entire cylinder reserved for diagnostics, head parking, etc).
     */
    let cbDrive = (cHiddenSectors? (cHiddenSectors + cSectorsPerTrack * cHeads) * cbSector : 0) + cbDisk;

    /*
     * TODO: Consider doing what convertToIMG() does, which is deferring setting this.bufDisk until the
     * buffer is fully (and successfully) initialized.  Here, however, the build process relies on worker
     * functions that prefer not passing around temporary buffers.  In the meantime, perhaps any catastrophic
     * failures should set bufDisk back to null?
     */
    this.bufDisk = new BufferPF(cbDrive);

    /*
     * WARNING: Buffers are NOT zero-initialized, so we need explicitly fill bufDisk with zeros (this seems
     * to be a reversal in the trend to zero buffers, when security concerns would trump performance concerns).
     */
    this.bufDisk.fill(0);

    /*
     * Output a Master Boot Record (MBR) if this is a hard drive image.
     */
    if (cHiddenSectors) {
        abSector = this.buildMBR(cHeads, cSectorsPerTrack, cbSector, cTotalSectors);
        offDisk += this.copyData(offDisk, abSector) * cHiddenSectors;
    }

    /*
     * Output a boot sector.
     */
    abBoot[DiskAPI.BOOT.SIG_OFFSET] = DiskAPI.BOOT.SIGNATURE & 0xff;            // 0x55
    abBoot[DiskAPI.BOOT.SIG_OFFSET + 1] = (DiskAPI.BOOT.SIGNATURE >> 8) & 0xff; // 0xAA
    abSector = this.buildData(cbSector, abBoot);
    offDisk += this.copyData(offDisk, abSector);

    /*
     * Build the FAT, noting the starting cluster number that each file will use along the way.
     *
     * Also, notice that the first byte of the FAT is the "media ID" byte that's replicated in the
     * BPB at offset 0x15.  For old BPB-less diskettes, this is where you must look for the media ID.
     */
    let abFAT = [];
    this.buildFATEntry(abFAT, 0, abBoot[DiskAPI.BPB.MEDIA] | 0xF00);
    this.buildFATEntry(abFAT, 1, 0xFFF);
    this.buildFAT(abFAT, aFiles, 2, cbCluster);

    /*
     * Output the FAT sectors; we simplify the logic a bit by writing each FAT table as if it
     * were one giant sector.
     */
    while (cFATs--) {
        abSector = this.buildData(cFATSectors * cbSector, abFAT);
        offDisk += this.copyData(offDisk, abSector);
    }

    /*
     * Build the root directory
     */
    let abRoot = [];
    let cEntries = this.buildDir(abRoot, aFiles);

    /*
     * PC DOS 1.0 requires ALL unused directory entries to start with 0xE5; 0x00 isn't good enough,
     * so we must loop through all the remaining directory entries and zap them with 0xE5.
     */
    let offRoot = cEntries * DiskAPI.DIRENT.LENGTH;
    while (cEntries++ < cRootEntries) {
        abRoot[offRoot] = DiskAPI.DIRENT.INVALID;       // 0xE5
        offRoot += DiskAPI.DIRENT.LENGTH;               // 0x20 (32)
    }

    /*
     * Output the root directory sectors (as before, as if they were one giant sector)
     */
    abSector = this.buildData(cRootSectors * cbSector, abRoot);
    offDisk += this.copyData(offDisk, abSector);

    /*
     * Output the file data clusters, which must be stored sequentially, mirroring the order in which
     * we wrote the cluster sequences to the FAT, above.
     */
    let cClusters = this.buildClusters(aFiles, offDisk, cbCluster, 0, 0, done);
    offDisk += cClusters * cSectorsPerCluster * cbSector;

    if (fDebug) DiskDump.logConsole(offDisk + " bytes written, " + cbDisk + " bytes available");

    if (offDisk > cbDisk) {
        err = new Error("too much data for disk image (" + cClusters + " clusters required)");
        this.cWritesPending = 0;
        done(err);
        return false;
    }

    return true;
};

/**
 * readSuppData()
 *
 * Returns supplemental data for disk, if any.  Data is specified with the "--suppData" command-line option; eg:
 *
 *      --suppData=disks/pcx86/apps/microsoft/word/1.15/debugger/README.md
 *
 * @this {DiskDump}
 * @returns {object}
 */
DiskDump.prototype.readSuppData = function()
{
    let suppData = {};
    if (this.argv['suppData']) {
        let sData;
        try {
            sData = fs.readFileSync(this.argv['suppData'], {encoding: "utf8"});
        } catch(err) {
            DiskDump.logError(err);
        }
        if (sData) {
            let aSectorData = sData.split(/[ \t]*MFM Sector\s*\n/);
            for (let i = 1; i < aSectorData.length; i++) {
                let metaData = aSectorData[i].match(/Sector ID:([0-9]+)[\s\S]*?Track ID:([0-9]+)[\s\S]*?Side ID:([0-9]+)[\s\S]*?Size:([0-9]+)[\s\S]*?DataMark:0x([0-9A-F]+)[\s\S]*?Head CRC:0x([0-9A-F]+)\s+\(([^)]*)\)[\s\S]*?Data CRC:0x([0-9A-F]+)\s+\(([^)]*)\)/);
                if (metaData) {
                    let data = [];
                    let sectorID = +metaData[1];
                    let trackID = +metaData[2];
                    let headID = +metaData[3];
                    let length = +metaData[4];
                    let dataMark = parseInt(metaData[5], 16);
                    let headCRC = parseInt(metaData[6], 16);
                    let headError = metaData[7].toLowerCase() != "ok";
                    let dataCRC = parseInt(metaData[8], 16);
                    let dataError = (metaData[9].toLowerCase() == "ok")? 0 : -1;
                    let matchData, reData = /([0-9A-F]+)\|([^|]*)\|/g;
                    while ((matchData = reData.exec(aSectorData[i]))) {
                        let shift = 0, dw = 0;
                        let matchByte, reByte = /\s+([0-9A-F]+)/g;
                        while ((matchByte = reByte.exec(matchData[2]))) {
                            dw |= parseInt(matchByte[1], 16) << shift;
                            shift += 8;
                            if (shift == 32) {
                                data.push(dw);
                                shift = dw = 0;
                            }
                        }
                        if (shift) data.push(dw);
                    }
                    if (!suppData[trackID]) suppData[trackID] = {};
                    if (!suppData[trackID][headID]) suppData[trackID][headID] = [];
                    let sector = {sectorID, length, dataMark, headCRC, headError, dataCRC, dataError, data};
                    suppData[trackID][headID].push(sector);
                }
            }
        }
    }
    return suppData;
};

/**
 * convertToJSON()
 *
 * Converts the disk image data to JSON.
 *
 * @this {DiskDump}
 * @returns {string|null} containing a JSON representation of the disk image, or null if unrecognized/malformed
 */
DiskDump.prototype.convertToJSON = function()
{
    if (this.jsonDisk) {
        return this.jsonDisk;
    }

    /*
     * TODO: Decide if we want to retain this usage info:
     */
    if (!this.bufDisk) {
        // DiskDump.logConsole("no data available in disk image");
        // this.jsonDisk = "[ /* no data */ ]";
        this.jsonDisk = "[\n  /**\n   * " + DiskDump.sNotice + "\n   * " + DiskDump.sUsage + "\n   */\n]";
        return this.jsonDisk;
    }

    /*
     * Save the original disk hash (ie, before we insert a missing BPB or modify an existing one)
     */
    let buf = this.bufDisk.buf || this.bufDisk;
    this.hashDisk = crypto.createHash('md5').update(buf).digest('hex');

    /*
     * Originally, all we dealt with here were basically IMG files, but now we want to support PSI files, too.
     */
    let sExt = path.extname(this.sDiskPath).toLowerCase();
    if (sExt == ".psi") {
        return this.convertPSItoJSON();
    }

    let suppData = this.readSuppData();

    let json = null;
    let fOptimize = !this.fJSONComments;    // if true, leave out any properties that are defaults
    try {
        let nHeads = 0;
        let nCylinders = 0;
        let nSectorsPerTrack = 0;
        let aTracks = [];                   // track array (used only for disk images with track tables)
        let iTrack, cbTrack, offTrack, bufTrack, offSector, bufSector;
        let cbSector = 512;                 // default sector size
        let bMediaID = 0;
        let offBootSector = 0;
        let cbDiskData = this.bufDisk.length, cbPartition = cbDiskData;

        if (cbDiskData >= 3000000) {        // arbitrary threshold between diskette image sizes and hard drive image sizes
            let wSig = this.bufDisk.readUInt16LE(DiskAPI.BOOT.SIG_OFFSET);
            if (wSig == DiskAPI.BOOT.SIGNATURE) {
                /*
                 * In this case, the first sector should be an MBR; find the active partition entry,
                 * then read the LBA of the first partition sector to calculate the boot sector offset.
                 */
                for (let offEntry = 0x1BE; offEntry <= 0x1EE; offEntry += 0x10) {
                    if (this.bufDisk.readUInt8(offEntry) >= 0x80) {
                        offBootSector = this.bufDisk.readUInt32LE(offEntry + 0x08) * cbSector;
                        cbPartition = this.bufDisk.readUInt32LE(offEntry + 0x0C) * cbSector;
                        break;
                    }
                }
            }
            /*
             * If we failed to find an active entry, we'll fall into the BPB detection code, which
             * should fail if the first sector really was an MBR.  Otherwise, the BPB should give us
             * the geometry info we need to dump the entire disk image, including the MBR and any
             * other reserved sectors.
             */
        }

        let bByte0 = this.bufDisk.readUInt8(offBootSector + DiskAPI.BOOT.OPCODE);
        let bByte1 = this.bufDisk.readUInt8(offBootSector + DiskAPI.BOOT.OPCODE + 1);
        let cbSectorBPB = this.bufDisk.readUInt16LE(offBootSector + DiskAPI.BPB.SECBYTES);

        /*
         * These checks are not only necessary for DOS 1.x diskette images (and other pre-BPB images),
         * but also non-DOS diskette images (eg, CPM-86 diskettes).
         *
         * And we must perform these tests BEFORE checking for a BPB, because we want the PHYSICAL geometry
         * of the disk, whereas any values in the BPB may only be LOGICAL. For example, DOS may only be using
         * 8 sectors per track on diskette that's actually formatted with 9 sectors per track.
         *
         * Checking these common sizes insures we get the proper physical geometry for common disk formats,
         * but at some point, we'll need to perform more general calculations to properly deal with ANY disk
         * image whose logical format doesn't agree with its physical structure.
         */
        let fXDFOutput = false;
        let diskFormat = DiskAPI.GEOMETRIES[cbDiskData];
        if (diskFormat) {
            nCylinders = diskFormat[0];
            nHeads = diskFormat[1];
            nSectorsPerTrack = diskFormat[2];
            cbSector = diskFormat[3] || cbSector;
            bMediaID = diskFormat[4] || bMediaID;
        }

        /*
         * I used to do these BPB tests only if diskFormat was undefined, but now I always do them, because I
         * want to make sure they're in agreement (and if not, then figure out why not).
         *
         * See if the first sector of the image contains a valid DOS BPB.  That begs the question: what IS a valid
         * DOS BPB?  For starters, the first word (at offset 0x0B) is invariably 0x0200, indicating a 512-byte sector
         * size.  I also check the first byte for an Intel JMP opcode (0xEB is JMP with a 1-byte displacement, and
         * 0xE9 is JMP with a 2-byte displacement).  What else?
         */
        let fBPBExists = false, bMediaIDBPB = 0;

        if ((bByte0 == X86.OPCODE.JMP || bByte0 == X86.OPCODE.JMPS) && cbSectorBPB == cbSector) {

            let nHeadsBPB = this.bufDisk.readUInt16LE(offBootSector + DiskAPI.BPB.DRIVEHEADS);
            let nSectorsPerTrackBPB = this.bufDisk.readUInt16LE(offBootSector + DiskAPI.BPB.TRACKSECS);

            if (nHeadsBPB && nSectorsPerTrackBPB) {

                fBPBExists = true;
                bMediaIDBPB = this.bufDisk.readUInt8(offBootSector + DiskAPI.BPB.MEDIA);

                let nSectorsTotalBPB = this.bufDisk.readUInt16LE(offBootSector + DiskAPI.BPB.DISKSECS);
                let nSectorsPerCylinderBPB = nSectorsPerTrackBPB * nHeadsBPB;
                let nSectorsHiddenBPB = this.bufDisk.readUInt16LE(offBootSector + DiskAPI.BPB.HIDDENSECS);
                let nCylindersBPB = (nSectorsHiddenBPB + nSectorsTotalBPB) / nSectorsPerCylinderBPB;

                if (diskFormat) {
                    if (bMediaID && bMediaID != bMediaIDBPB) {
                        DiskDump.logWarning("BPB media ID (" + str.toHexByte(bMediaIDBPB) + ") does not match physical media ID (" + str.toHexByte(bMediaID) + ")");
                    }
                    if (nCylinders != nCylindersBPB) {
                        DiskDump.logWarning("BPB cylinders (" + nCylindersBPB + ") do not match physical cylinders (" + nCylinders + ")");
                        if (nCylinders - nCylindersBPB == 1) {
                            DiskDump.logWarning("the BIOS may have reserved the last cylinder for diagnostics");
                        }
                    }
                    if (nHeads != nHeadsBPB) {
                        DiskDump.logWarning("BPB heads (" + nHeadsBPB + ") do not match physical heads (" + nHeads + ")");
                    }
                    if (nSectorsPerTrack != nSectorsPerTrackBPB) {
                        DiskDump.logWarning("BPB sectors/track (" + nSectorsPerTrackBPB + ") do not match physical sectors/track (" + nSectorsPerTrack + ")");
                    }
                }
                else {
                    nHeads = nHeadsBPB;
                    nSectorsPerTrack = nSectorsPerTrackBPB;
                    nCylinders = cbDiskData / (nHeads * nSectorsPerTrack * cbSector);
                    if (nCylinders != (nCylinders|0)) {
                        DiskDump.logWarning("total cylinders (" + nCylinders + ") not a multiple of heads (" + nHeads + ") and sectors/track (" + nSectorsPerTrack + ")");
                        nCylinders |= 0;
                    }
                    bMediaID = bMediaIDBPB;
                }

                /*
                 * OK, great, the disk appears to contain a valid BPB.  But so do XDF disk images, which are
                 * diskette images with tracks containing:
                 *
                 *      1 8Kb sector (equivalent of 16 512-byte sectors)
                 *      1 2Kb sector (equivalent of 4 512-byte sectors)
                 *      1 1Kb sector (equivalent of 2 512-byte sectors)
                 *      1 512-byte sector (equivalent of, um, 1 512-byte sector)
                 *
                 * for a total of the equivalent of 23 512-byte sectors, or 11776 (0x2E00) bytes per track.
                 * For an 80-track diskette with 2 sides, that works out to a total of 3680 512-byte sectors,
                 * or 1884160 bytes, or 1.84Mb, which is the exact size of the (only) XDF diskette images we
                 * currently (try to) support.
                 *
                 * Moreover, the first two tracks (ie, the first cylinder) contain only 19 sectors each,
                 * rather than 23, but XDF disk images still pads those tracks with 4 unused sectors.
                 *
                 * So, data for the first track contains 1 boot sector ending at 512 (0x200), 11 FAT sectors
                 * ending at 6144 (0x1800), and 7 "micro-disk" sectors ending at 9728 (0x2600).  Then there's
                 * 4 (useless?) sectors that end at 11776 (0x2E00).
                 *
                 * Data for the second track contains 7 root directory sectors ending at 15360 (0x3C00), followed
                 * by disk data.
                 *
                 * For more details, check out this helpful article: http://www.os2museum.com/wp/the-xdf-diskette-format/
                 */
                if (nSectorsTotalBPB == 3680 && this.fXDFSupport) {
                    DiskDump.logWarning("XDF diskette detected, experimental XDF output enabled");
                    fXDFOutput = true;
                }
            }
        }

        /*
         * Let's see if we can find a corresponding BPB in our table of default BPBs.
         */
        let i, iBPB = -1;
        if (bMediaID) {
            for (i = 0; i < DiskDump.aDefaultBPBs.length; i++) {
                if (DiskDump.aDefaultBPBs[i][DiskAPI.BPB.MEDIA] == bMediaID) {
                    let cbDiskBPB = (DiskDump.aDefaultBPBs[i][DiskAPI.BPB.DISKSECS] + (DiskDump.aDefaultBPBs[i][DiskAPI.BPB.DISKSECS + 1] * 0x100)) * cbSector;
                    if (cbDiskBPB == cbDiskData) {
                        /*
                         * This code was added to deal with variations in sectors/cluster.  Most software manufacturers
                         * were happy with the defaults that FORMAT chooses for a given diskette size, but in a few cases
                         * (eg, PC DOS 4.01 720K diskettes), the manufacturer (IBM) opted for a smaller cluster size.
                         */
                        let bClusterSecs = this.bufDisk.readUInt8(offBootSector + DiskAPI.BPB.CLUSSECS);
                        if (bMediaID != DiskAPI.FAT.MEDIA_720KB || bClusterSecs == DiskDump.aDefaultBPBs[i][DiskAPI.BPB.CLUSSECS]) {
                            iBPB = i;
                            break;
                        }
                    }
                }
            }
        }
        let nLogicalSectorsPerTrack = nSectorsPerTrack;
        if (iBPB >= 0) {
            /*
             * Sometimes we come across a physical 360Kb disk image that contains a logical 320Kb image (and similarly,
             * a physical 180Kb disk image that contains a logical 160Kb disk image), presumably because it was possible
             * for someone to take a diskette formatted with 9 sectors/track and then use FORMAT or DISKCOPY to create
             * a smaller file system on it (ie, using only 8 sectors/track).
             */
            if (!bMediaIDBPB) bMediaIDBPB = this.bufDisk.readUInt8(offBootSector + 512);
            if (iBPB >= 2 && bMediaIDBPB == DiskAPI.FAT.MEDIA_320KB && bMediaID == DiskAPI.FAT.MEDIA_360KB || bMediaIDBPB == DiskAPI.FAT.MEDIA_160KB && bMediaID == DiskAPI.FAT.MEDIA_180KB) {
                iBPB -= 2;
                bMediaID = DiskDump.aDefaultBPBs[iBPB][DiskAPI.BPB.MEDIA];
                nLogicalSectorsPerTrack = DiskDump.aDefaultBPBs[iBPB][DiskAPI.BPB.TRACKSECS];
                DiskDump.logWarning("shrinking track size to " + nLogicalSectorsPerTrack + " sectors/track");
            }
            let fBPBWarning = false;
            if (fBPBExists) {
                /*
                 * In deference to the PC DOS 2.0 BPB behavior discussed above, we stop our BPB verification after
                 * the first word of HIDDENSECS.
                 */
                for (i = DiskAPI.BPB.SECBYTES; i < DiskAPI.BPB.HIDDENSECS + 2; i++) {
                    let bDefault = DiskDump.aDefaultBPBs[iBPB][i];
                    let bActual = this.bufDisk.readUInt8(offBootSector + i);
                    if (bDefault != bActual) {
                        DiskDump.logWarning("BPB byte " + str.toHexByte(i) + " default (" + str.toHexByte(bDefault) + ") does not match actual byte: " + str.toHexByte(bActual));
                        fBPBWarning = true;
                    }
                }
            }
            if (!fBPBExists || fBPBWarning) {
                if (bByte0 == X86.OPCODE.JMPS && bByte1 >= 0x22 || this.forceBPB) {
                    /*
                     * I'm going to stick my neck out here and slam a BPB into this disk image, since it doesn't appear
                     * to have one, which should make it more "mountable" on modern operating systems.  PC DOS 1.x (and
                     * the recently unearthed PC DOS 0.x) are OK with this, because they don't put anything important in
                     * the BPB byte range (0x00B-0x023), just a 9-byte date string (eg, " 7-May-81") at 0x008-0x010,
                     * followed by zero bytes at 0x011-0x030.
                     *
                     * They DO, however, store important constants in the range later used as the 8-byte OEM string at
                     * 0x003-0x00A.  For example, the word at 0x006 contains the starting segment for where to load
                     * IBMBIO.COM and IBMDOS.COM.  Those same early boot sectors are also missing the traditional 0xAA55
                     * signature at the end of the boot sector.
                     *
                     * However, if --forceBPB is specified, all those concerns go out the window: the goal is assumed to
                     * be a mountable disk, not a bootable disk.  So the BPB copy starts at offset 0 instead of SECBYTES.
                     */
                    for (i = this.forceBPB? 0 : DiskAPI.BPB.SECBYTES; i < DiskAPI.BPB.LARGESECS+4; i++) {
                        this.bufDisk.writeUInt8(DiskDump.aDefaultBPBs[iBPB][i] || 0, offBootSector + i);
                    }
                    DiskDump.logWarning("BPB has been updated");
                }
                else if (bByte0 == 0xF6 && bByte1 == 0xF6) {
                    /*
                     * WARNING: I've added this "0xF6" hack expressly to fix boot sectors that may have been zapped by an
                     * inadvertent reformat, or...?
                     */
                    DiskDump.logWarning("repairing damaged boot sector with BPB for media ID " + str.toHexByte(bMediaID));
                    for (i = 0; i < DiskAPI.BPB.LARGESECS+4; i++) {
                        this.bufDisk.writeUInt8(DiskDump.aDefaultBPBs[iBPB][i] || 0, offBootSector + i);
                    }
                }
                else {
                    DiskDump.logWarning("unrecognized boot sector: " + str.toHexByte(bByte0) + "," + str.toHexByte(bByte1));
                }
            }
        }
        if (fBPBExists && this.bufDisk.readUInt16LE(offBootSector + DiskAPI.BOOT.SIG_OFFSET) == DiskAPI.BOOT.SIGNATURE || this.forceBPB) {
            /*
             * Overwrite the OEM string with our own, so that people know how the image originated.  We do this
             * only for disks with pre-existing BPBs; it's not safe for pre-2.0 disks (and non-DOS disks, obviously).
             *
             * The signature check is another pre-2.0 disk check, to avoid misinterpreting any BPB that we might have
             * previously added ourselves as an original BPB.
             */
            this.bufDisk.write(DiskDump.PCJS_OEM, DiskAPI.BOOT.OEM + offBootSector, DiskDump.PCJS_OEM.length);
            DiskDump.logWarning("OEM string has been updated");
        }
        if (!nHeads) {
            /*
             * Next, check for a DSK header (an old private format I used to use, which begins with either
             * 0x00 (read-write) or 0x01 (write-protected), followed by 7 more bytes):
             *
             *      0x01: # heads (1 byte)
             *      0x02: # cylinders (2 bytes)
             *      0x04: # sectors/track (2 bytes)
             *      0x06: # bytes/sector (2 bytes)
             *
             * which may be followed by an array of track table entries if the words at 0x04 and 0x06 are zero.
             * If the track table exists, each entry contains the following:
             *
             *      0x00: # sectors/track (2 bytes)
             *      0x02: # bytes/sector (2 bytes)
             *      0x04: file offset of track data (4 bytes)
             *
             * TODO: Our JSON disk format doesn't explicitly support a write-protect indicator.  Instead, we
             * (used to) include the string "write-protected" as a comment in the first line of the JSON data
             * as a work-around, and if the FDC component sees that comment string, it will honor it; however,
             * we now prefer that read-only disk images simply include a "-readonly" suffix in the filename.
             */
            if (!(bByte0 & 0xFE)) {
                let cbSectorDSK = this.bufDisk.readUInt16LE(offBootSector + 0x06);
                if (!(cbSectorDSK & (cbSectorDSK - 1))) {
                    cbSector = cbSectorDSK;
                    nHeads = this.bufDisk.readUInt8(offBootSector + 0x01);
                    nCylinders = this.bufDisk.readUInt16LE(offBootSector + 0x02);
                    nLogicalSectorsPerTrack = nSectorsPerTrack = this.bufDisk.readUInt16LE(offBootSector + 0x04);
                    let nTracks = nHeads * nCylinders;
                    cbTrack = nSectorsPerTrack * cbSector;
                    offTrack = 0x08;
                    if (!cbTrack) {
                        for (iTrack = 0; iTrack < nTracks; iTrack++) {
                            nLogicalSectorsPerTrack = nSectorsPerTrack = this.bufDisk.readUInt16LE(offTrack);
                            cbSectorDSK = this.bufDisk.readUInt16LE(offTrack+2);
                            cbTrack = nSectorsPerTrack * cbSectorDSK;
                            offSector = this.bufDisk.readUInt32LE(offTrack+4);
                            bufTrack = this.bufDisk.slice(offSector, offSector + cbTrack);
                            aTracks[iTrack] = [nSectorsPerTrack, cbSectorDSK, bufTrack];
                            offTrack += 8;
                        }
                    }
                }
            }
        }

        if (nHeads) {
            /*
             * Output the disk data as an array of cylinders, each containing an array of tracks (one track per head),
             * and each track containing an array of sectors.
             */
            iTrack = offTrack = 0;
            cbTrack = nSectorsPerTrack * cbSector;
            if (this.fJSONNative) {
                this.dataDisk = new Array(nCylinders);
            } else {
                json = this.dumpLine(2, "[", "DiskDump of " + this.sDiskPath + " via " + DiskDump.sNotice);
            }
            for (let iCylinder=0; iCylinder < nCylinders; iCylinder++) {

                let aHeads;
                if (this.fJSONNative) {
                    aHeads = new Array(nHeads);
                    this.dataDisk[iCylinder] = aHeads;
                } else {
                    json += this.dumpLine(2, "[", "cylinder: " + iCylinder);
                }
                let offHead = 0;
                for (let iHead=0; iHead < nHeads; iHead++) {

                    if (aTracks.length) {
                        let aTrack = aTracks[iTrack++];
                        nLogicalSectorsPerTrack = nSectorsPerTrack = aTrack[0];
                        cbSector = aTrack[1];
                        bufTrack = aTrack[2];
                        cbTrack = nSectorsPerTrack * cbSector;
                    } else {
                        bufTrack = this.bufDisk.slice(offTrack + offHead, offTrack + offHead + cbTrack);
                    }

                    let aSectors;
                    if (this.fJSONNative) {
                        aSectors = new Array(nLogicalSectorsPerTrack);
                        aHeads[iHead] = aSectors;
                    } else {
                        json += this.dumpLine(2, "[", "head:" + this.sJSONWhitespace + iHead + ", track:" + this.sJSONWhitespace + iCylinder);
                    }

                    /*
                     * For most disks, the size of every sector and the number of sectors/track are consistent, and the
                     * sector number encoded in every sector (nSector) matches the 1-based sector index (iSector) we use
                     * to "track" our progress through the current track.  However, for XDF disk images, the above is
                     * NOT true beyond cylinder 0, which is why we have all these *ThisTrack variables, which would otherwise
                     * be unnecessary.
                     */
                    let cbSectorThisTrack = cbSector;
                    let nSectorsThisTrack = nLogicalSectorsPerTrack;

                    /*
                     * Notes regarding XDF track layouts, from http://forum.kryoflux.com/viewtopic.php?f=3&t=234:
                     *
                     *      Track 0, side 0: 19x512 bytes per sector, with standard numbering for the first 8 sectors, then custom numbering
                     *      Track 0, side 1: 19x512 bytes per sector, with interleaved sector numbering 0x81...0x93
                     *
                     *      Track 1 and up, side 0, 4 sectors per track:
                     *      1x1024, 1x512, 1x2048, 1x8192 bytes per sector (0x83, 0x82, 084, 0x86 as sector numbers)
                     *
                     *      Track 1 and up, side 1, 4 sectors per track:
                     *      1x2048, 1x512, 1x1024, 1x8192 bytes per sector (0x84, 0x82, 083, 0x86 as sector numbers)
                     *
                     * Notes regarding the order in which XDF sectors are read (from http://mail.netbridge.at/cgi-bin/info2www?(fdutils)XDF),
                     * where each position column represents a (roughly) 128-byte section of the track:
                     *
                     *          1         2         3         4
                     * 1234567890123456789012345678901234567890 (position)
                     * ----------------------------------------
                     * 6633332244444446666666666666666666666666 (side 0)
                     * 6666444444422333366666666666666666666666 (side 1)
                     *
                     * where 2's contain a 512-byte sector, 3's contain a 1Kb sector, 4's contains a 2Kb sector, and 6's contain an 8Kb sector.
                     *
                     * Reading all the data on an XDF cylinder occurs in the following order, from the specified start to end positions:
                     *
                     *     sector    head   start     end
                     *          3       0       3       7
                     *          4       0       9      16
                     *          6       1      18       5 (1st wrap around)
                     *          2       0       7       9
                     *          2       1      12      14
                     *          6       0      16       3 (2nd wrap around)
                     *          4       1       5      12
                     *          3       1      14      18
                     */
                    if (fXDFOutput) nSectorsThisTrack = (iCylinder? 4 : 19);

                    let suppTrack = null;
                    for (let iSector=1, offSector=0; iSector <= nSectorsThisTrack && (offSector < cbTrack || suppTrack); iSector++, offSector += cbSectorThisTrack) {

                        let sector = {};
                        let sectorID = iSector;

                        if (fXDFOutput && iCylinder) {
                            if (!iHead) {
                                cbSectorThisTrack = (iSector == 1? 1024 : (iSector == 2? 512 : (iSector == 3? 2048 : 8192)));
                            } else {
                                cbSectorThisTrack = (iSector == 1? 8192 : (iSector == 2? 2048 : (iSector == 3? 1024 : 512)));
                            }
                            sectorID = (cbSectorThisTrack == 512? 2 : (cbSectorThisTrack == 1024? 3 : (cbSectorThisTrack == 2048? 4 : 6)));
                        }

                        /*
                         * Check for any sector ID edits that must be applied to the disk (eg, "--sectorID=C:H:S:ID").
                         *
                         * For example, when building the IBM Multiplan 1.00 Program disk, "--sectorID=11:0:8:61" must be specified.
                         */
                        let sectorIDs = this.argv['sectorID'], aParts, n;
                        if (sectorIDs) {
                            let aSectorIDs = (typeof sectorIDs == "string")? [sectorIDs] : sectorIDs;
                            for (i = 0; i < aSectorIDs.length; i++) {
                                aParts = aSectorIDs[i].split(":");
                                if (+aParts[0] === iCylinder && +aParts[1] === iHead && +aParts[2] === sectorID) {
                                    n = +aParts[3];
                                    if (!isNaN(n)) {
                                        sectorID = n;
                                        DiskDump.logConsole(str.sprintf("changing %d:%d:%d sectorID to %d", +aParts[0], +aParts[1], +aParts[2], sectorID));
                                    }
                                }
                            }
                        }
                        let sectorError = 0;
                        let sectorErrors = this.argv['sectorError'];
                        if (sectorErrors) {
                            let aSectorErrors = (typeof sectorErrors == "string")? [sectorErrors] : sectorErrors;
                            for (i = 0; i < aSectorErrors.length; i++) {
                                aParts = aSectorErrors[i].split(":");
                                if (+aParts[0] === iCylinder && +aParts[1] === iHead && +aParts[2] === sectorID) {
                                    n = +aParts[3] || -1;
                                    if (n) {
                                        sectorError = n;
                                        DiskDump.logConsole(str.sprintf("forcing error for sector %d:%d:%d at %d bytes", +aParts[0], +aParts[1], +aParts[2], sectorError));
                                    }
                                }
                            }
                        }

                        bufSector = bufTrack.slice(offSector, offSector + cbSectorThisTrack);

                        if (bMediaID && !iCylinder && !iHead && iSector == ((offBootSector/cbSector)|0) + 2) {
                            let bFATID = bufSector.readUInt8(0);
                            if (bMediaID != bFATID) {
                                DiskDump.logWarning("FAT ID (" + str.toHexByte(bFATID) + ") does not match physical media ID (" + str.toHexByte(bMediaID) + ")");
                            }
                            bMediaID = 0;
                        }

                        let preComma = (fOptimize? ',' : '');
                        let postComma = (fOptimize? '' : ',');

                        if (this.fJSONNative) {
                            sector['sector'] = sectorID;
                            if (!fOptimize || cbSectorThisTrack != 512) {
                                sector['length'] = cbSectorThisTrack;
                            }
                        } else {
                            json += (iSector == 1? this.dumpLine(2, "{") : "");
                            json += this.dumpLine(0, '"sector":' + this.sJSONWhitespace + sectorID + postComma);
                            if (!fOptimize || cbSectorThisTrack != 512) {
                                json += preComma + this.dumpLine(0, '"length":' + this.sJSONWhitespace + cbSectorThisTrack + postComma);
                            }
                        }

                        let suppSector = null;
                        if (suppData[iCylinder]) {
                            suppTrack = suppData[iCylinder][iHead];
                            if (suppTrack) {
                                suppSector = suppTrack[iSector-1];
                                nSectorsThisTrack = suppTrack.length;
                            }
                        }

                        let cbBuffer = cbSectorThisTrack;
                        if (!suppSector) {
                            let aTrim = this.trimSector(bufSector, cbSectorThisTrack);
                            let dwPattern = aTrim[0];
                            if (dwPattern !== null) {
                                cbBuffer = aTrim[1];
                                if (!fOptimize || dwPattern) {
                                    if (this.fJSONNative) {
                                        sector['pattern'] = dwPattern;
                                    } else {
                                        json += preComma + this.dumpLine(0, '"pattern":' + this.sJSONWhitespace + dwPattern + postComma);
                                    }
                                }
                            }
                        }

                        if (this.fJSONNative) {
                            if (!fOptimize || cbBuffer) {
                                if (suppSector) {
                                    sector['sector'] = suppSector['sectorID'];
                                    if (suppSector['length']) sector['length'] = suppSector['length'];
                                    if (suppSector['dataMark']) sector['dataMark'] = suppSector['dataMark'];
                                    if (suppSector['headCRC']) sector['headCRC'] = suppSector['headCRC'];
                                    if (suppSector['headError']) sector['headError'] = true;
                                    if (suppSector['dataCRC']) sector['dataCRC'] = suppSector['dataCRC'];
                                    if (!sectorError) sectorError = suppSector['dataError'];
                                    sector['data'] = suppSector['data'];
                                } else {
                                    let dataSector = [];
                                    for (let off = 0; off < cbBuffer; off += 4) {
                                        dataSector.push(bufSector.readInt32LE(off));
                                    }
                                    sector['data'] = dataSector;
                                }
                            }
                            if (sectorError) sector['dataError'] = sectorError;
                            aSectors[iSector - 1] = sector;
                        } else {
                            if (!fOptimize || cbBuffer) {
                                if (this.sFormat == DumpAPI.FORMAT.BYTES) {
                                    json += preComma + this.dumpBuffer("bytes", bufSector, cbBuffer, 1, offSector);
                                } else {
                                    /*
                                     * TODO: Assert that sFormat is FORMAT_JSON or FORMAT_DATA (both use the same dword format)
                                     */
                                    json += preComma + this.dumpBuffer("data", bufSector, cbBuffer, 4, offSector);
                                }
                            }
                            json += (iSector < nSectorsThisTrack? this.dumpLine(0, "},{") : this.dumpLine(-2, "}"));
                        }
                    }
                    if (!this.fJSONNative) json += this.dumpLine(-2, "]" + (iHead+1 == nHeads? "" : ","));
                    offHead += cbTrack;         // end of head {iHead}, track {iCylinder}
                }
                if (!this.fJSONNative) json += this.dumpLine(-2, "]" + (iCylinder+1 == nCylinders? "" : ","));
                offTrack += offHead;            // end of cylinder {iCylinder}
            }
            /*
             * Here's where I used to output the following comment:
             *
             *      // write-protected
             *
             * as the first line of the JSON stream if the disk was marked write-protected (ie, if (bByte0 & 0x1) != 0).
             *
             * But since that makes JSON.parse() sad, the preferred solution is to name read-only JSON disk images with a
             * "-readonly" suffix.
             */
            if (this.fJSONNative) {
                json = JSON.stringify(this.dataDisk);
            } else {
                json += this.dumpLine(-2, "]");
            }
            this.jsonDisk = json;
        }
        else if (this.bufDisk.readUInt16BE(0x900) == 0x4357) {
            this.jsonDisk = this.convertOSIDiskToJSON();
        }
    } catch(err) {
        DiskDump.logError(err);
    }
    return this.jsonDisk;
};

/**
 * convertPSItoJSON()
 *
 * Converts PSI image data to JSON.
 *
 * PSI files are PCE Sector Image files; see https://github.com/jeffpar/pce/blob/master/doc/psi-format.txt for details.
 *
 * @this {DiskDump}
 * @returns {string|null} containing a JSON representation of the disk image, or null if unrecognized/malformed
 */
DiskDump.prototype.convertPSItoJSON = function()
{
    let data = [];
    let chunkOffset = 0;
    let buf = this.bufDisk;
    let chunkEnd = buf.length;
    let chunkID, chunkSize = 0, chunkData;
    let CHUNK_PSI = 0x50534920;
    let CHUNK_END = 0x454e4420;
    let CHUNK_SECT = 0x53454354;
    let CHUNK_OFFS = 0x4f464653;
    let CHUNK_IBMM = 0x49424d4d;    // "IBMM": IBM MFM sector header
    let CHUNK_TEXT = 0x54455854;
    let CHUNK_DATA = 0x44415441;
    let getCRC = function(bufData, start, end) {
		let crc = 0;
		for (let i = start; i < end; i++) {
			crc ^= bufData.readUInt8(i) << 24;
			for (let j = 0; j < 8; j++) {
				if (crc & 0x80000000) {
                    crc = (crc << 1) ^ 0x1edc6f41;
                } else {
                    crc = crc << 1;
                }
			}
		}
		return crc|0;
    };
    let getNextChunk = function() {
        if (chunkSize) chunkOffset += chunkSize + 12;
        chunkID = buf.readUInt32BE(chunkOffset);
        chunkSize = buf.readUInt32BE(chunkOffset + 4);
        let chunkCRC = buf.readInt32BE(chunkOffset + 8 + chunkSize);
        let myCRC = getCRC(buf, chunkOffset, chunkOffset + 8 + chunkSize);
        if (chunkCRC == myCRC) {
            chunkData = buf.slice(chunkOffset + 8, chunkOffset + 8 + chunkSize);
        } else {
            DiskDump.logConsole(str.sprintf("chunk 0x%x at 0x%x: CRC 0x%x != calculated CRC 0x%x", chunkID, chunkOffset, chunkCRC, myCRC));
            chunkID = CHUNK_END;
        }
    };
    getNextChunk();
    if (chunkID != CHUNK_PSI) {
        DiskDump.logConsole("missing PSI header");
        chunkEnd = 0;
    }
    let fileFormat = chunkData.readUInt16BE(0);
    let sectorFormat = chunkData.readUInt16BE(2);

    DiskDump.logConsole(str.sprintf("file format: 0x%04x\nsector format: 0x%02x 0x%02x", fileFormat, sectorFormat >> 8, sectorFormat & 0xff));

    let cylinder, head, sectorID, size, flags, pattern, sector, sectorIndex;

    while (chunkOffset < chunkEnd) {
        getNextChunk();
        switch(chunkID) {
        case CHUNK_SECT:
            cylinder = chunkData.readUInt16BE(0);
            head = chunkData.readUInt8(2);
            sectorID = chunkData.readUInt8(3);
            size = chunkData.readUInt16BE(4);
            flags = chunkData.readUInt8(6);
            pattern = chunkData.readUInt8(7);
            sector = {'cylinder': cylinder, 'head': head, 'sector': sectorID, 'length': size};
            sectorIndex = 0;
            if (fDebug) DiskDump.logConsole(str.sprintf("SECT: %d:%d:%d %d bytes, flags 0x%x, pattern 0x%02x", cylinder, head, sectorID, size, flags, pattern));
            while (data.length < cylinder + 1) {
                data.push([]);
            }
            while (data[cylinder].length < head + 1) {
                data[cylinder].push([]);
            }
            data[cylinder][head].push(sector);
            if (flags & 0x1) {
                sector['pattern'] = pattern | (pattern << 8) | (pattern << 16) | (pattern << 24);
            }
            if (flags & 0x4) {
                sector['dataError'] = -1;
            }
            if (flags & ~(0x1 | 0x4)) {
                DiskDump.logConsole(str.sprintf("unsupported flags: 0x%x", flags));
            }
            break;
        case CHUNK_DATA:
            if (fDebug) DiskDump.logConsole(str.sprintf("DATA: %d bytes", chunkData.length));
            if (!sector) {
                DiskDump.logConsole("No sector defined, aborting");
                chunkID = 0;
                break;
            }
            sector['data'] = new Array(size >> 2);
            for (let off = 0; off < chunkData.length; off += 4) {
                if (sectorIndex >= sector['data'].length) {
                    DiskDump.logConsole(str.sprintf("warning: data for sector offset %d exceeds sector length", sectorIndex * 4, sector['data'].length));
                }
                sector['data'][sectorIndex++] = chunkData.readUInt8(off) | (chunkData.readUInt8(off+1) << 8) | (chunkData.readUInt8(off+2) << 16) | (chunkData.readUInt8(off+3) << 24);
            }
            if (sectorIndex < sector['data'].length) {
                DiskDump.logConsole(str.sprintf("warning: sector data stops at offset %d instead of %d", sectorIndex * 4, sector['data'].length));
            }
            break;
        case CHUNK_IBMM:
            if (fDebug) DiskDump.logConsole(str.sprintf("IBMM: at 0x%x", chunkOffset));
            break;
        case CHUNK_OFFS:
            if (fDebug) DiskDump.logConsole(str.sprintf("OFFS: at 0x%x", chunkOffset));
            break;
        case CHUNK_TEXT:
            if (fDebug) DiskDump.logConsole(str.sprintf("TEXT: at 0x%x", chunkOffset));
            break;
        case CHUNK_END:
            chunkID = 0;
            break;
        default:
            DiskDump.logConsole(str.sprintf("unrecognized chunk at 0x%x: 0x%08x", chunkOffset, chunkID));
            chunkID = 0;
        }
        if (!chunkID) break;
    }
    return data.length && JSON.stringify(data) || null;
};

/**
 * convertOSIDiskToJSON()
 *
 * This is called when we detect a "CW" signature at offset 0x900 of bufDisk, so we'll try parsing the data
 * as an OSI disk image, and output the data in JSON as an array of heads, each containing an array of tracks,
 * like so:
 *
 *    [ [ {
 *          trackSig:"CW",
 *          trackNum:0x01,
 *          trackType:0x58,
 *          trackLoad:0xnnnn,
 *          sectors:[
 *            { sectorSig:0x76,
 *              sectorNum:0x01,
 *              sectorPages:0x01,
 *              sectorEndSig:"GS",
 *              sectorData: [0x52,0x41,0x43,0x4b,...]
 *            },...
 *          ]
 *        },
 *        {
 *          trackSig:"CW",
 *          ...
 *        }
 *    ] ]
 *
 * TODO: If we ever add support for OSI drives/disk images with more than one head, we should change the disk image
 * format to match that used by DOS disk images and PCjs; ie, an array of cylinders, each containing an array of heads,
 * each containing an array of tracks.  It's largely just a matter of swapping the two outermost array elements, both
 * here and in the C1Pjs disk module.
 *
 * @this {DiskDump}
 * @returns {string|null} containing a JSON representation of the disk image, or null if unrecognized/malformed
 */
DiskDump.prototype.convertOSIDiskToJSON = function()
{
    let json = null;
    try {
        let iTrack = 0;
        let offTrack = 0;
        let cbTrack = 0x900;                // this is the raw track length for a 40-track 5.25-inch disk image

        if (this.fJSONNative) {
            json = "";
        } else {
            json = "/*\n *  OSI DiskDump of " + this.sDiskPath + " via " + DiskDump.sNotice + "\n */\n";
        }
        json += this.dumpLine(2, "[");
        json += this.dumpLine(2, "[");      // begin array of heads

        while (true) {
            let bufSector;
            let bufTrack = this.bufDisk.slice(offTrack, offTrack + cbTrack);
            if (!bufTrack.length) {
                if (iTrack) {
                    json += this.dumpLine(-2, "}");
                }
                break;
            }
            let nSectorPages;
            if (!iTrack) {
                /*
                 * Track 0 is first, with this format:
                 *
                 *      0x0000: track load address (high and low bytes of 16-bit address, respectively)
                 *      0x0002: number of pages (up to 8)
                 */
                let nTrackLoad = bufTrack.readUInt16BE(0);
                json += this.dumpTrackOSI("", 0, null, nTrackLoad);
                /*
                 * Track 0 supports only 1 sector; it has no nSectorSig (hence the first null), an implied
                 * sector number of 1, and no end signature (hence the second null).
                 */
                nSectorPages = bufTrack.readUInt8(2);
                bufSector = bufTrack.slice(3, 3 + nSectorPages * 256);
                json += this.dumpSectorOSI(null, 1, nSectorPages, bufSector, null, nTrackLoad);
                json += this.dumpLine(-2, "}");
                json += this.dumpLine(-2, "]");
            }
            else {
                /*
                 * Track N is next, with this format:
                 *
                 *      0x0000: start-of-track signature "CW" (0x43,0x57)
                 *      0x0002: track number (in BCD); eg, 0x01
                 *      0x0003: track type code (0x58)
                 *              <sector info begins>
                 *      0x0004: sector start code (0x76)
                 *      0x0005: sector number (in binary); eg, 0x01
                 *      0x0006: sector length (no. of pages, in binary); eg, 0x08
                 *      0x0007: <sector data begins>
                 *      0xnnnn: end-of-sector signature "GS" (0x47,0x53); eg, 0xnnnn is 0x0807, using the above examples.
                 *
                 * The next track is typically stored at the next page boundary (eg, 0x0900), which is why
                 * cbTrack is hard-coded to 0x900 above.
                 *
                 * Note that anything from 1 (large) sector to multiple (smaller) sectors can be stored in a single track,
                 * if the sector length byte at 0x0006 is less than 8; for example, if the first sector's length was only 1 page,
                 * then this would follow:
                 *
                 *      0x0107: end-of-sector signature "GS"
                 *              <sector info begins>
                 *      0x0109: sector start code (0x76)
                 *      0x010A: sector number (in binary); eg, 0x02
                 *      0x010B: sector length (no. of pages, in binary); eg, 0x01
                 *      0x010C: <sector data begins>
                 *      0xnnnn: next end-of-sector signature "GS" (0x47,0x53); eg, 0x020C
                 */
                if (bufTrack.readUInt16BE(0) == 0x4357) {
                    let nSectorOffset = 0;
                    json += this.dumpLine(-2, "},");
                    json += this.dumpTrackOSI("CW", bufTrack.readUInt8(2), bufTrack.readUInt8(3));
                    bufTrack = bufTrack.slice(4);
                    while (bufTrack.length > 5 && bufTrack.readUInt8(0) == 0x76) {
                        nSectorPages = bufTrack.readUInt8(2);
                        let cbSector = nSectorPages * 256;
                        bufSector = bufTrack.slice(3, cbSector+3);
                        let sSectorEndSig = bufTrack.slice(cbSector+3, cbSector+5).toString("ascii");
                        if (nSectorOffset) json += this.dumpLine(-2, "},");
                        json += this.dumpSectorOSI(bufTrack.readUInt8(0), bufTrack.readUInt8(1), nSectorPages, bufSector, sSectorEndSig, nSectorOffset);
                        bufTrack = bufTrack.slice(cbSector+5);
                        nSectorOffset += cbSector;
                    }
                    json += this.dumpLine(-2, "}");
                    json += this.dumpLine(-2, "]");
                }
                else {
                    DiskDump.logError(new Error("unrecognized OSI disk track at " + str.toHex(offTrack, 0, true)));
                    break;
                }
            }
            offTrack += cbTrack;
            iTrack++;
        }
        json += this.dumpLine(-2, "]");
        json += this.dumpLine(-2, "]");
    } catch(err) {
        DiskDump.logError(err);
    }
    return json;
};

/**
 * convertToIMG(fRaw)
 *
 * Converts the disk image data to a Buffer.
 *
 * TODO: Consider creating a caching mechanism for these requests (ie, stash a limited number of these
 * disk images under /tmp, using a name based on a hash of the source path).
 *
 * @this {DiskDump}
 * @param {boolean} [fRaw] (used by httpapi.js to get the underlying Buffer)
 * @returns {Buffer|null} containing the disk image's raw data, or null if no data available (or parse error)
 */
DiskDump.prototype.convertToIMG = function(fRaw)
{
    if (!this.bufDisk) {

        if (!this.dataDisk) {
            if (!this.jsonDisk) {
                return null;
            }
            try {
                /*
                 * These replacements provide compatibility with older JSON disk images
                 * that were generated by convdisk.php and weren't entirely JSON-compatible.
                 */
                this.jsonDisk = this.jsonDisk.replace(/(sector|length|bytes|data|pattern):/g, '"$1":');
                /*
                 * Comments can appear even when comments weren't requested; the only situation
                 * where that currently may occur is when a write-protected .DSK file is converted,
                 * requiring us to output a "write-protected" comment on the first line.
                 * A better solution requires revamping the disk image format or, better yet, updating
                 * the FDC component to implement a user-configurable option for write-protecting media.
                 */
                this.jsonDisk = this.jsonDisk.replace(/\/\/[^\n]*/g, "");
                /*
                 * There are also some old files that also contain hex constants; eg:
                 *
                 *      "pattern": 0xe5e5e5e5
                 *
                 * which must be converted to decimal before JSON.parse() will be happy.
                 * While I could sit here and search for all hex patterns and replace them,
                 * the proper solution is to simply reconvert those disk images.
                 *
                 * TODO: Generate a clear warning whenever "this.jsonDisk.indexOf("0x") >= 0".
                 *
                 * TODO: Remove the above transformations once we can be sure there are no more
                 * disk images with those legacy features.
                 */
                this.dataDisk = JSON.parse(this.jsonDisk);
            } catch(err) {
                DiskDump.logError(err);
                return null;
            }
        }

        /*
         * The following code was adapted from the mount() method in disk.js, and assumes a homogeneous disk
         * format with 512-byte sectors.
         *
         * TODO: Rework this code to support non-homogeneous disk formats (eg, variable sector sizes, variable
         * sectors per track, etc).
         */
        let buf = null;

        try {
            /*
             * We need to be prepared for any number of errors due to malformed data; in fact, it's entirely
             * possible the JSON we just parsed is NOT a disk image, which means nCylinders, nHeads, etc may be
             * undefined, in which case an exception will occur almost immediately.
             */
            let nCylinders = this.dataDisk.length;
            let nHeads = this.dataDisk[0].length;
            let nSectorsPerTrack = this.dataDisk[0][0].length;
            let cbDisk = nCylinders * nHeads * nSectorsPerTrack * 512;

            let off = 0;
            buf = new BufferPF(cbDisk);

            /*
             * WARNING: Buffers are NOT zero-initialized, so we need explicitly fill it with zeros (this seems to
             * be a reversal in the trend to zero buffers, when security concerns used to trump performance concerns).
             */
            buf.fill(0);

            for (let iCylinder = 0; iCylinder < nCylinders; iCylinder++) {
                for (let iHead = 0; iHead < this.dataDisk[iCylinder].length; iHead++) {
                    for (let iSector = 0; iSector < this.dataDisk[iCylinder][iHead].length; iSector++) {
                        let idw;
                        let sector = this.dataDisk[iCylinder][iHead][iSector];
                        let length = sector['length'];
                        if (length === undefined) {     // provide backward-compatibility with older JSON...
                            length = sector['length'] = 512;
                        }
                        length >>= 2;                   // convert length from a byte-length to a dword-length
                        let dwPattern = sector['pattern'];
                        if (dwPattern === undefined) {
                            dwPattern = sector['pattern'] = 0;
                        }
                        let adw = sector['data'];
                        if (adw === undefined) {
                            let ab = sector['bytes'];
                            if (ab === undefined || !ab.length) {
                                /*
                                 * It would be odd if there was neither a 'bytes' nor 'data' array; I'm just
                                 * being paranoid.  It's more likely that the 'bytes' array is simply empty,
                                 * in which case we need only create an empty 'data' array and turn the byte
                                 * pattern, if any, into a dword pattern.
                                 */
                                adw = [];
                                // if (DEBUG) this.assert((dwPattern & 0xff) == dwPattern);
                                dwPattern = sector['pattern'] = (dwPattern | (dwPattern << 8) | (dwPattern << 16) | (dwPattern << 24));
                            } else {
                                /*
                                 * To keep the conversion code simple, we'll do any necessary pattern-filling first,
                                 * to fully "inflate" the sector, eliminating the possibility of partial dwords and
                                 * saving any code downstream from dealing with byte-size patterns.
                                 */
                                let ib;
                                let cb = length << 2;
                                for (ib = ab.length; ib < cb; ib++) {
                                    ab[ib] = dwPattern; // the pattern for byte-arrays was only a byte
                                }
                                ib = 0;
                                adw = new Array(length);
                                for (idw = 0; idw < adw.length; idw++) {
                                    adw[idw] = ab[ib] | (ab[ib + 1] << 8) | (ab[ib + 2] << 16) | (ab[ib + 3] << 24);
                                    ib += 4;
                                }
                            }
                            delete sector['bytes'];
                            sector['data'] = adw;
                        }
                        /*
                         * Now the current sector has ALL of the following properties:
                         *
                         *      'sector': sector number
                         *      'length': size of the sector, in bytes
                         *      'data': array of dwords
                         *      'pattern': dword pattern to use for empty or partial sectors
                         *
                         * TODO: Honor the 'sector' property and dump the sectors in sector-number order.
                         */
                        for (idw = 0; idw < length; idw++) {
                            let dw = (idw < adw.length? adw[idw] : dwPattern);
                            buf.writeInt32LE(dw, off);
                            off += 4;
                        }
                    }
                }
            }
            /*
             * Since there's no way (and rightly so) of setting fDebug via the API, I've added the check for
             * fJSONComments as another way of disabling "branding" via the API; requesting an IMG file with comments
             * is otherwise a nonsensical request.
             *
             * UPDATE: This code has been disabled, since we do a better job of this on the conversion *to* JSON now.
             */
            // if (!fDebug && !this.fJSONComments && buf.length < 3000000) {   // arbitrary size threshold between diskette images and hard drive images
            //     /*
            //      * Mimic the BPB test in convertToJSON(), because we don't want to blast an OEM string into non-DOS diskette images
            //      */
            //     let bByte0 = buf.readUInt8(DiskAPI.BOOT.OPCODE);
            //     let cbSectorBPB = buf.readUInt16LE(DiskAPI.BPB.SECBYTES);
            //     let wSig = buf.readUInt16LE(DiskAPI.BOOT.SIG_OFFSET);
            //     if ((bByte0 == X86.OPCODE.JMP || bByte0 == X86.OPCODE.JMPS) && cbSectorBPB == 512 && wSig == DiskAPI.BOOT.SIGNATURE) {
            //         /*
            //          * Overwrite the OEM string with our own, so that people know how the image originated.
            //          */
            //         buf.write(DiskDump.PCJS_OEM, DiskAPI.BOOT.OEM, DiskDump.PCJS_OEM.length);
            //         DiskDump.logWarning("OEM string has been updated");
            //     }
            // }
        } catch(err) {
            DiskDump.logError(err);
            return null;
        }

        this.bufDisk = buf;
    }
    return (fRaw && this.bufDisk instanceof BufferPF)? this.bufDisk.buf : this.bufDisk;
};

/**
 * encodeAsBase64(buf)
 *
 * Converts the buffer contents to base64.  TODO: Consider implementing BufferPF.toString('ascii').
 *
 * @this {DiskDump}
 * @param {Buffer} buf
 * @returns {string}
 */
DiskDump.prototype.encodeAsBase64 = function(buf)
{
    let s = "";
    for (let off = 0; off < buf.length; off++) {
        s += String.fromCharCode(buf.readUInt8(off));
    }
    return btoa(s);

};

// let aParms = web.parseURLParms();
// DiskDump.API(aParms);

export default DiskDump;
