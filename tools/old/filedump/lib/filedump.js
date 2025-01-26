/**
 * @fileoverview Converts file contents to JSON
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs from "fs";
import path from "path";
import mkdirp from "mkdirp";
import str from "../../../../machines/modules/v2/strlib.js";
import DumpAPI from "../../../../machines/modules/v2/dumpapi.js";
import { COPYRIGHT } from "../../../../machines/modules/v2/defines.js";
import netlib from "../../../modules/netlib.js";
import PCJSLib from "../../../modules/pcjslib.js";

/**
 * FileDump()
 *
 * Formats
 * -------
 *
 * Using the PCjs 2.0 ROM files as an example, the new "v3" FileDump format should look like this:
 *
 *  {
 *    "addr": 0,
 *    "size": 2048,
 *    "width": 13,
 *    "littleEndian": false,
 *    "file": "ti57be.bin",
 *    "source": "http://seanriddle.com/ti57.bin",
 *    "values": [
 *      4623,4386,5106,7051,3246,6152,5813,5628,5805,7051,4386,3246,7911,5132,1822,6798,
 *      ...
 *    ]
 *  }
 *
 * If the number of values is less than "size", then the final value should be repeated to fill the remainder.
 *
 * One variation will be to allow "values" to be an array of strings that look like this, with optional ASCII "tails":
 *
 *      "0000 35 37 30 30 30 35 31 20 43 4F 50 52 2E 20 49 42 5700051 COPR. IB",
 *      "0010 4D 20 31 39 38 31 D8 E0 ED E1 B9 00 40 FC 8B D9 M 1981......@...",
 *      ...
 *
 * Previous formats looked like this, but they weren't "valid" JSON (according to the JSON overlords):
 *
 *  {
 *    "bytes": [
 *      0x35,0x37,0x30,0x30,0x30,0x35,0x31,0x20,0x43,0x4F,0x50,0x52,0x2E,0x20,0x49,0x42, // 0x00000000 5700051 COPR. IB
 *      0x4D,0x20,0x31,0x39,0x38,0x31,0xD8,0xE0,0xED,0xE1,0xB9,0x00,0x40,0xFC,0x8B,0xD9, // 0x00000010 M 1981......@...
 *      ...
 *    ]
 *  }
 *
 * or this, which is valid JSON, but not very readable:
 *
 *  {
 *    "longs": [
 *      539575080,2037411651,1751607666,1329799284,1363234893,1836008224,1702131056,1866670194,1919905906,...
 *    ]
 *  }
 *
 * TODO: Consider adding a "map" option that allows the user to supply a MAP filename (via a "map" API parameter
 * or a "--map" command-line option), which in turn triggers a call to loadMap().  Note that loadMap() will need to
 * be a bit more general and use a worker function that calls either netlib.getFile() or fs.readFile(), similar to
 * what the loadFile() function already does.
 *
 * @constructor
 * @param {string} [sFormat] should be one of "json"|"longs"|"hex"|"bytes"|"rom" (see the FORMAT constants)
 * @param {boolean|string} [fComments] enables comments and other readability enhancements in the JSON output
 * @param {boolean|string} [fDecimal] forces decimal output if not undefined
 * @param {number|string} [offDump]
 * @param {number|string} [lenDump]
 * @param {number|string} [nWidthDump]
 * @param {string} [symbolFormat]
 * @param {string} [sServerRoot]
 */
function FileDump(sFormat, fComments, fDecimal, offDump, lenDump, nWidthDump, symbolFormat, sServerRoot)
{
    this.fDebug = false;
    this.sFormat = (sFormat || DumpAPI.FORMAT.JSON);
    this.fJSONNative = (this.sFormat == DumpAPI.FORMAT.JSON && !fComments);
    this.nJSONIndent = 0;
    this.fJSONComments = fComments;
    this.sJSONWhitespace = (this.fJSONComments? " " : "");
    this.fDecimal = fDecimal;
    this.offDump = +offDump || 0;
    this.lenDump = +lenDump || 0;
    this.nWidthDump = +nWidthDump || 16;
    this.symbolFormat = symbolFormat || "";
    this.sServerRoot = sServerRoot || "";
    this.buf = null;
    this.addrLoad = null;
    this.addrExec = null;
    /*
     * TODO: Decide what to do with this usage info; we can't use it as a default, because setting this.json
     * causes outputFile() to ignore this.buf indiscriminately (ie, it breaks non-JSON output modes).
     */
    this.json = ""; // "[\n  /**\n   * " + FileDump.sAPIURL + " " + FileDump.sCopyright + "\n   * " + FileDump.sUsage + "\n   */\n]";
}

/*
 * Class constants
 */
FileDump.sAPIURL = "http://www.pcjs.org" + DumpAPI.ENDPOINT;
FileDump.sCopyright = COPYRIGHT;
FileDump.sNotice = FileDump.sAPIURL + " " + FileDump.sCopyright;
FileDump.sUsage = "Usage: " + FileDump.sAPIURL + "?" + DumpAPI.QUERY.FILE + "=({path}|{URL})&" + DumpAPI.QUERY.FORMAT + "=(json|longs|hex|octal|bytes|words|rom)";

FileDump.asBadExts = [
    "js", "log"
];

/*
 * Class methods
 */

/**
 * CLI()
 *
 * Provides the command-line interface for the FileDump module.
 *
 * Usage:
 *
 *      filedump --file=({path}|{URL}) [--merge=({path}|{url})] [--format=(json|longs|hex|octal|bytes|words|rom)]
 *                  [--comments] [--decimal] [--offset={number}] [--width={number}] [--load={number}] [--exec={number}]
 *                  [--output={path}] [--overwrite]
 *
 * Arguments:
 *
 *      The default format is "json", which generates an array of signed 32-bit decimal values; "hex" is an older
 *      text format that consists entirely of 2-character hex values (deprecated), and "bytes" is a JSON-like format
 *      that also uses hex values (but with "0x" prefixes) and is normally used only when comments are enabled (use
 *      --decimal to force decimal byte output).  "words" are like "bytes" except that it outputs 16-bit values
 *      instead of 8-bit values; "octal" is an alias for "words", the only difference being that it includes a comment
 *      alongside each word with the octal form of the word.
 *
 *      If you want actual octal output, then an --octal option should be added at some point; however, that begs the
 *      question of how to render octal numbers so that all versions of JavaScript interpret them correctly.  Prefixing
 *      octal values with an extra zero was the old convention, but it was never formally adopted and it isn't allowed
 *      in "strict" mode.  Prefixing them with "0o" is the new convention for ES6 and up, which is great, but we still
 *      have no octal format that works across the board.  We can use the new octal format in code, because we always
 *      compile browser-based code back to ES5 (converting all numeric constants to decimal), and current versions of
 *      Node have supported the new format for quite a while.  But what we store in data files is more problematic.
 *
 *      When a second file is "merged", the first file sets all even bytes and the second file sets all odd bytes.
 *      In fact, any number of files can be merged: if there are N files, file #1 sets bytes at "offset mod N == 0",
 *      file #2 sets all bytes at "offset mod N == 1", and file #N sets all bytes at "offset mod N == N - 1".
 *
 *      Note that command-line arguments, if any, are not validated.  For example, argv['comments'] may be any of
 *      boolean, string, or undefined, since the user may have typed "--comments" or "--comments=foo" or nothing at all.
 *
 * Examples
 *
 *      filedump --file=devices/pc/video/ibm-ega.rom --format=bytes --decimal
 *
 * Notes
 *
 *      Originally, we had to specify `--format=bytes` because the onLoadROM() code in rom.js assumed the data was
 *      always byte-sized, but it has since been updated to support dword arrays, so the default format ("json")
 *      works fine as well.  Also, `--decimal` reduces the size of the output file significantly.
 *
 *      If there's a ".map" file (eg, "ibm-ega.map"), it's automatically loaded and appended to the ROM data as a
 *      "symbols" property; we may want to consider an option to disable the processing of map files, but for now, the
 *      simple answer is: if you don't want one, don't create one.
 */
FileDump.CLI = function()
{
    let [argc, argv] = PCJSLib.getArgs();

    if (!argc) {
        console.log("usage: filedump --file=({path}|{URL}) [--merge=({path}|{url})] [--format=(json|longs|hex|octal|bytes|words|rom)] [--comments] [--decimal] [--offset={number}] [--width={number}] [--output={path}] [--overwrite]");
        return;
    }

    let sFile = argv['file'];
    if (!sFile || FileDump.asBadExts.indexOf(str.getExtension(sFile)) >= 0) {
        FileDump.logError(new Error("bad or missing input filename"));
        return;
    }

    let sOutputFile = argv['output'];
    let fOverwrite = argv['overwrite'];

    let sServerRoot = process.cwd();
    let i = sServerRoot.indexOf("/pcjs");
    sServerRoot = i > 0? sServerRoot.substr(0, i+5) : undefined;

    let sFormat = FileDump.validateFormat(argv['format']);
    if (sFormat === false) {
        FileDump.logError(new Error("unrecognized format"));
        return;
    }

    let sMergeFile, asMergeFiles = [];
    let file = new FileDump(sFormat, argv['comments'], argv['decimal'], argv['offset'], argv['length'], argv['width'], argv['symbols'], sServerRoot);
    if (argv['merge']) {
        if (typeof argv['merge'] == "string") {
            asMergeFiles.push(argv['merge']);
        } else {
            for (sMergeFile in argv['merge']) asMergeFiles.push(sMergeFile);
        }
    }

    file.addrLoad = str.parseInt(argv['load']);
    file.addrExec = str.parseInt(argv['exec']);

    let cMergesPending = asMergeFiles.length, iStart = 0, nSkip = cMergesPending;

    file.loadFile(sFile, iStart++, nSkip, function(err) {
        let cErrors = 0;
        let convert = function(merge=0) {
            cMergesPending -= merge;
            if (!cMergesPending) {
                if (argv['checksum']) console.log(str.sprintf("checksum: 0x%02X", file.getChecksum()));
                if (!cErrors) file.convertToFile(sOutputFile, fOverwrite);
            }
        };
        if (!err) {
            while ((sMergeFile = asMergeFiles.shift())) {
                file.loadFile(sMergeFile, iStart++, nSkip, function(err) {
                    if (err) cErrors++;
                    convert(1);
                });
            }
            convert();
        }
    });
};

/**
 * logError(err)
 *
 * Conditionally logs an error to the console.
 *
 * @param {Error} err
 * @returns {string} the error message that was logged (or that would have been logged had logging been enabled)
 */
FileDump.logError = function(err)
{
    let sError = "";
    if (err) {
        sError = "FileDump error: " + err.message;
        console.log(sError);
    }
    return sError;
};

/**
 * validateFormat(sFormat)
 *
 * @param {string} sFormat
 * @returns {null|string|boolean} the validated format, null if unspecified, or false if invalid
 */
FileDump.validateFormat = function(sFormat)
{
    if (!sFormat) {
        return null;
    }
    for (let s in DumpAPI.FORMAT) {
        if (sFormat == DumpAPI.FORMAT[s]) return sFormat;
    }
    return false;
};

/*
 * Object methods
 */

/**
 * loadFile(sFile, iStart, nSkip, done)
 *
 * This used to be part of the FileDump constructor, but I felt it would be safer to separate
 * object creation from any I/O, ensuring that the callback will not be invoked until the caller
 * has received the FileDump object.
 *
 * @this {FileDump}
 * @param {string} sFile
 * @param {number} iStart
 * @param {number} nSkip
 * @param {function(Error)} done
 */
FileDump.prototype.loadFile = function(sFile, iStart, nSkip, done)
{
    let obj = this;

    let encoding = null;
    let sExt = str.getExtension(sFile);
    if (sExt == DumpAPI.FORMAT.JSON || sExt == DumpAPI.FORMAT.HEX || sExt == "lst" || sExt == "txt") {
        encoding = "utf8";
    }
    let options = {encoding: encoding};
    let sFilePath = (!this.sServerRoot || netlib.isRemote(sFile))? sFile : path.join(this.sServerRoot, sFile);

    if (!this.sFilePath) this.sFilePath = sFilePath;
    if (this.fDebug) console.log("loadFile(" + sFilePath + "," + iStart + "," + nSkip + ")");

    if (netlib.isRemote(sFilePath)) {
        netlib.getFile(sFilePath, options.encoding, function(err, status, buf) {
            if (err) {
                FileDump.logError(err);
                done(err);
                return;
            }
            obj.setData(buf, iStart, nSkip, sExt);
            done(null);
        });
    } else {
        fs.readFile(sFilePath, options, function(err, buf) {
            if (err) {
                FileDump.logError(err);
                done(err);
                return;
            }
            obj.setData(buf, iStart, nSkip, sExt);
            done(null);
        });
    }
};

/**
 * parseListing(sListing)
 *
 * Parses the data within a MACRO11 listing file and produces an array of bytes.
 *
 * @this {FileDump}
 * @param {string} sListing
 * @returns {Array.<number>}
 */
FileDump.prototype.parseListing = function(sListing)
{
    let ab = [];
    let matchLine;
    let re = /^( [0-9 ]{8}|)([0-7]{6})[: ]+([0-7]+)[ ]*([0-7']+|)[ ]+([0-7']+|)[ ]+(.*)$/gm;
    while ((matchLine = re.exec(sListing))) {
        /*
         * matchLine[1]: line # (optional)
         * matchLine[2]: address
         * matchLine[3]: 6-digit opcode or 3-digit data
         * matchLine[4]: 6-digit operand (with optional apostrophe) or 3-digit data
         * matchLine[5]: 6-digit operand (with optional apostrophe) or 3-digit data
         */
        let addrLine = parseInt(matchLine[2], 8);
        if (this.addrLoad == null) this.addrLoad = addrLine;
        for (let i = 3, s; i <= 5 && (s = matchLine[i]); i++) {
            let data = parseInt(s.substr(0, 6), 8);
            if (s.length == 3) {
                addrLine++;
                ab.push(data);
            }
            else {
                addrLine += 2;
                if (s.length == 7) {
                    data -= addrLine;
                }
                ab.push(data & 0xff);
                ab.push(data >> 8);
            }
        }
    }
    return ab;
};

/**
 * setData(buf, iStart, nSkip, sExt)
 *
 * Records the given file data in the FileDump's buffer
 *
 * @this {FileDump}
 * @param {Buffer|string} buf
 * @param {number} iStart
 * @param {number} nSkip
 * @param {string} [sExt]
 */
FileDump.prototype.setData = function(buf, iStart, nSkip, sExt)
{
    let b, i, j, s;
    if (typeof buf == "string") {
        let ab = [];
        if (sExt == "lst" || sExt == "txt") {
            ab = this.parseListing(buf);
        }
        else if (buf.indexOf('{') >= 0) {
            /*
             * Treat the incoming string data as JSON data.
             */
            let json;
            try {
                // json = JSON.parse(buf);
                json = /** @type {Object} */ (eval("(" + buf + ")"));
            } catch (err) {
                FileDump.logError(err);
                json = null;
            }
            if (json) {
                let values, bytes;
                if ((values = json['values'])) {
                    bytes = (json['width'] / 8);
                }
                else if ((values = json['longs']) || (values = json['data'])) {
                    bytes = 4;
                } else if ((values = json['words'])) {
                    bytes = 2;
                }
                if (values) {
                    for (i = 0; i < values.length; i++) {
                        let v = values[i];
                        for (j = 0; j < bytes; j++) {
                            ab.push(v & 0xff);
                            v >>>= 8;
                        }
                    }
                }
            }
        }
        else {
            /*
             * Treat the incoming string data as HEX (ie, a series of byte values encoded in hex, separated by whitespace)
             */
            let as = buf.split(/\s+/);
            for (i = 0; i < as.length; i++) {
                s = as[i];
                if (!s.length) continue;
                if (isNaN(b = parseInt(s, 16))) break;
                ab.push(b);
            }
        }
        /*
         * If we didn't recognize the data, then simply return, leaving this.buf undefined.
         */
        if (!ab.length) return;
        buf = Buffer.from(ab);
    }
    if (!this.buf) {
        if (!nSkip) {
            this.buf = buf;
        } else {
            this.buf = Buffer.alloc(buf.length * (nSkip + 1));
        }
    }
    if (nSkip) {
        for (i = 0; i < buf.length; i++) {
            this.buf.writeUInt8(b = buf.readUInt8(i), iStart);
            iStart += nSkip + 1;
        }
    }
};

/**
 * getData()
 *
 * @this {FileDump}
 * @returns {Buffer|null}
 */
FileDump.prototype.getData = function()
{
    return this.buf;
};

/**
 * getChecksum()
 *
 * @this {FileDump}
 * @returns {number|null}
 */
FileDump.prototype.getChecksum = function()
{
    if (!this.buf) return null;
    let b = 0;
    for (let i = 0; i < this.buf.length; i++) {
        b += this.buf.readUInt8(i);
    }
    return b & 0xff;
};

/**
 * dumpLine(nIndent, sLine, sComment)
 *
 * @this {FileDump}
 * @param {number} [nIndent] is the relative number of characters to indent the given line (0 if none)
 * @param {string} [sLine] is the given line
 * @param {string} [sComment] is an optional comment to append to the line, if comment output is enabled
 * @returns {string} the indented/commented line
 */
FileDump.prototype.dumpLine = function(nIndent, sLine, sComment)
{
    if (nIndent < 0) {
        this.nJSONIndent += nIndent;
    }
    if (this.fJSONComments) {
        sLine = "                                ".substr(0, this.nJSONIndent) + (sLine? (sLine + (sComment? (" // " + sComment) : "")) : "");
    }
    if (sLine) sLine += "\n";
    if (nIndent > 0) {
        this.nJSONIndent += nIndent;
    }
    return sLine;
};

/**
 * dumpBuffer(sKey, buf, len, cbItem, offDump, lenDump, nWidthDump)
 *
 * @this {FileDump}
 * @param {String} sKey is name of buffer data element
 * @param {Buffer} buf is a Buffer containing the bytes to dump
 * @param {number} len is the number of bytes to dump
 * @param {number} cbItem is either 1 or 4, to dump bytes or dwords respectively
 * @param {number} [offDump] is a relative offset (default is 0; see constructor)
 * @param {number} [lenDump] is a relative length (default is 0; see constructor)
 * @param {number} [nWidthDump] is an alternate width (default is 16; see constructor)
 * @returns {string} hex (or decimal) representation of the data
 */
FileDump.prototype.dumpBuffer = function(sKey, buf, len, cbItem, offDump, lenDump, nWidthDump)
{
    let chOpen = '', chClose = '', chSep = ' ', sHexPrefix = "";

    let nBase = 16;
    if (sKey == DumpAPI.FORMAT.OCTAL) {
        sKey = DumpAPI.FORMAT.WORDS;
        nBase = 8;
    }

    this.sKey = sKey;

    if (this.sFormat != DumpAPI.FORMAT.HEX) {
        chOpen = '['; chClose = ']'; chSep = ',';
    }

    offDump = offDump || this.offDump;
    lenDump = lenDump || this.lenDump || len;
    nWidthDump = nWidthDump || this.nWidthDump;

    let sDump = "";

    let addrs = {'load': this.addrLoad, 'exec': this.addrExec};
    for (let prop in addrs) {
        let addr = addrs[prop];
        if (addr != null) {
            sDump += this.dumpLine(2, '"' + prop + '":' + str.toHexWord(addr) + (nBase == 8? "/*" + str.toOct(addr, 6) + "*/" : "") + ',');
        }
    }

    if (sKey == "bytes") {
        sDump += this.dumpLine(2, '"width":8,');
        sKey = "values";
    }
    else if (sKey == "longs") {
        sDump += this.dumpLine(2, '"width":32,');
        sKey = "values";
    }
    sDump += this.dumpLine(2, (sKey? '"' + sKey + '":' : "") + this.sJSONWhitespace + chOpen);

    let sLine = "";
    let sASCII = "";

    for (let cb = 0, off = offDump; cb < lenDump; cb += cbItem, off += cbItem) {

        /*
         * WARNING: Whenever the following condition arises, you probably have a non-dword-granular
         * file, and you should have requested a byte-granular dump instead.
         */
        if (off + cbItem > buf.length) {
            break;
        }

        let v = (cbItem == 1? buf.readUInt8(off) : (cbItem == 2? buf.readInt16LE(off) : buf.readUInt32LE(off)));

        if (off > offDump) {
            sLine += chSep;
            if (!(cb % nWidthDump)) {
                sDump += this.dumpLine(0, sLine, sASCII);
                sLine = sASCII = "";
            }
        }
        if (cbItem > 1) {
            if (cbItem > 2) {
                sLine += v;
            } else {
                sLine += str.toHexWord(v) + (nBase == 8? "/*" + str.toOct(v & 0xffff, 6) + "*/" : "");
            }
        }
        else {
            if (this.fDecimal) {
                sLine += v;
            } else {
                sLine += str.toHexByte(v);
            }
            if (!sASCII) sASCII = str.toHex(off, 0, true) + " ";
            sASCII += (v >= 0x20 && v < 0x7F && v != 0x3C && v != 0x3E? String.fromCharCode(v) : ".");
        }
    }

    sDump += this.dumpLine(0, sLine + chClose, sASCII);
    this.dumpLine(-2);

    return sDump;
};

/**
 * loadMap(sMapFile, done)
 *
 * NOTE: Since ".map" files are an internal construct, I support only local map files (for now)
 *
 * @this {FileDump}
 * @param {string} sMapFile
 * @param {function(Error,String)} done
 */
FileDump.prototype.loadMap = function(sMapFile, done)
{
    /*
     * The HEX format doesn't support MAP files, because old HEX clients expect an Array of bytes,
     * not an Object.  For all other (JSON) formats, we assume that the JSON is "unwrapped" at this point,
     * and so even if loadMap() doesn't find a map file, it will still wrap the resulting JSON with braces.
     */
    if (this.sFormat != DumpAPI.FORMAT.HEX) {
        if (!this.sKey) {
            this.json = '"bytes":' + this.json;
        }
        let obj = this;

        sMapFile = sMapFile.replace(/\.(rom|json|bin)$/, ".map");

        if (str.endsWith(sMapFile, ".map")) {

            let sMapName = path.basename(sMapFile);

            fs.readFile(sMapFile, {encoding: "utf8"}, function(err, str) {
                let sMapData = null;
                if (err) {
                    /*
                     * This isn't really an error (map files are optional), although it might be helpful to display
                     * a warning.  In any case, this is also why the first done() callback below always passes null for
                     * the Error parameter.
                     *
                     FileDump.logError(err);
                     */
                }
                else {
                    // console.log("add this to obj.json:\n" + str);

                    /*
                     * Parse MAP data into a set of properties; for example, if the .map file contains:
                     *
                     *           0320   =   HF_PORT
                     *      0000:0034   4   HDISK_INT
                     *      0040:0042   1   CMD_BLOCK
                     *           0003   @   DISK_SETUP
                     *      0000:004C   4   ORG_VECTOR
                     *           0028   .   MOV AX,WORD PTR ORG_VECTOR ;GET DISKETTE VECTOR
                     *
                     * where the symbols in the second column of the .map file indicate type/size information as follows:
                     *
                     *      =   unsized value
                     *      1   1-byte (DB) value
                     *      2   2-byte (DW) value
                     *      4   4-byte (DD) value
                     *      @   label
                     *      .   reference
                     *      +   bias (ie, value to be added to all following offsets)
                     *
                     * then we should produce the following corresponding JSON:
                     *
                     *      {
                     *          "HF_PORT": {
                     *              "v":800
                     *          },
                     *          "HDISK_INT": {
                     *              "b":4, "s":0, "o":52
                     *          },
                     *          "ORG_VECTOR": {
                     *              "b":4, "s":0, "o":76
                     *          },
                     *          "CMD_BLOCK": {
                     *              "b":1, "s":64, "o":66
                     *          },
                     *          "DISK_SETUP": {
                     *              "o":3
                     *          },
                     *          ".40": {
                     *              "o":64, "a":"MOV AX,WORD PTR ORG_VECTOR ;GET DISKETTE VECTOR"
                     *          }
                     *      }
                     *
                     * where "v" is the value of an absolute (unsized) value; "b" is either 1, 2, 4 or undefined; "s" is either a hard-coded
                     * segment or undefined; and "o" is the offset of an symbol.  Also, if the symbol is not entirely upper-case, then we
                     * store the original-case version of the symbol as an "l" property.
                     *
                     * If the same symbol appears more than once in a .map file, the value of the last occurrence will replace any previous
                     * occurrence(s).
                     *
                     * aSymbols will be an associative array containing an entry for every symbol, where the key is the symbol and the value
                     * is another associative array containing the other properties described above.
                     *
                     * An alternative output format, enabled with --symbols=array, is a simplified transformation of the map file,
                     * using string triplets:
                     *
                     *      "0320","=","HF_PORT",
                     *      "0000:0034","4","HDISK_INT",
                     *      "0040:0042","1","CMD_BLOCK",
                     *      "0003","@","DISK_SETUP",
                     *      "0000:004C","4","ORG_VECTOR",
                     *      "0028",";","MOV AX,WORD PTR ORG_VECTOR ;GET DISKETTE VECTOR"
                     */
                    let aSymbols;
                    let nBias = 0;
                    let asLines = str.split('\n');
                    if (obj.symbolFormat == "array") {
                        aSymbols = [];
                    } else {
                        aSymbols = {};
                    }
                    for (let iLine = 0; iLine < asLines.length; iLine++){
                        let s = asLines[iLine].trim();
                        if (!s || s.charAt(0) == ';') continue;
                        let match = s.match(/^\s*([0-9A-Z:]+)\s+([=124@.+;])(?:\t| {3})(.*?)\s*$/i);
                        if (match) {
                            let sValue = match[1];
                            let sType = match[2];
                            let sSymbol = match[3].replace(/"/g, "''");
                            if (obj.symbolFormat == "array") {
                                if (sType == '.' && sSymbol[0] == ';') {
                                    sType = ';';
                                    sSymbol = sSymbol.substr(1).trim();
                                    if (!sSymbol) continue;
                                }
                                aSymbols.push(sValue);
                                aSymbols.push(sType);
                                aSymbols.push(sSymbol);
                                continue;
                            }
                            let sSegment = null;
                            let i = sValue.indexOf(':');
                            if (i >= 0) {
                                sSegment = sValue.substr(0, i);
                                sValue = sValue.substr(i+1);
                            }
                            let sComment = null;
                            i = sSymbol.indexOf(';');
                            if (i >= 0) {
                                sComment = sSymbol.substr(i+1).trim();
                                sSymbol = sSymbol.substr(0, i).trim();
                            }
                            let sID = sSymbol.toUpperCase();
                            let aValue = {};
                            switch (sType) {
                            case '=':
                                aValue['v'] = parseInt(sValue, 16);
                                break;
                            case '1':
                            case '2':
                            case '4':
                                aValue['b'] = parseInt(sType, 10);
                                /* falls through */
                            case '@':
                            case '.':
                                aValue['o'] = parseInt(sValue, 16) + nBias;
                                if (sSegment) {
                                    aValue['s'] = parseInt(sSegment, 16);
                                }
                                if (sType != '.') break;
                                match = sSymbol.match(/^([A-Z_][A-Z0-9_]*):\s*(.*)/i);
                                if (match) {
                                    sSymbol = match[1];
                                    sID = sSymbol.toUpperCase();
                                    if (match[2]) aValue['a'] = match[2];
                                    if (aSymbols[sID]) {
                                        sID = '.' + parseInt(sValue, 16);
                                    }
                                } else {
                                    aValue['a'] = sSymbol;
                                    sID = sSymbol = '.' + parseInt(sValue, 16);
                                }
                                break;
                            case '+':
                                nBias = parseInt(sValue, 16);
                                continue;
                            default:
                                done(new Error("unrecognized symbol type (" + sType + ") in MAP file: " + sMapName), null);
                                return;
                            }
                            if (sID != sSymbol) {
                                aValue['l'] = sSymbol;
                            }
                            if (sComment) {
                                aValue['c'] = sComment;
                            }
                            aSymbols[sID] = aValue;
                            continue;
                        }
                        done(new Error("unrecognized line (" + s + ") in MAP file: " + sMapName), null);
                        return;
                    }
                    if (obj.symbolFormat == "array") {
                        sMapData = "[";
                        for (let i = 0; i < aSymbols.length; i+=3) {
                            if (i) sMapData += ',';
                            sMapData += '\n"' + aSymbols[i] + '","' + aSymbols[i+1] + '","' + aSymbols[i+2] + '"';
                        }
                        sMapData += "]\n";
                    } else {
                        if (obj.fJSONComments) {
                            sMapData = JSON.stringify(aSymbols, null, 2);
                        } else {
                            sMapData = JSON.stringify(aSymbols);
                        }
                    }
                    if (sMapData) {
                        obj.json = '{' + obj.json + ',"symbols":' + sMapData + '}';
                    }
                }
                if (!sMapData) {
                    obj.json = '{' + obj.json + '}';
                }
                done(null, obj.json);
            });
            return;
        }
        this.json = '{' + this.json + '}';
    }
    done(null, this.json);
};

/**
 * buildJSON()
 *
 * Common code between the API helper (convertToJSON()) and the command-line helper (convertToFile()).
 *
 * @this {FileDump}
 */
FileDump.prototype.buildJSON = function()
{
    this.json = "";
    if (!this.buf) {
        // console.log("no data available in file");
        this.json = "[ /* no data */ ]";
    } else {
        // console.log("length of buffer: " + this.buf.length);
        if (this.fJSONComments || this.sFormat == DumpAPI.FORMAT.HEX || this.sFormat == DumpAPI.FORMAT.BYTES) {
            this.json += this.dumpBuffer(DumpAPI.FORMAT.BYTES, this.buf, this.buf.length, 1);
        }
        else if (this.sFormat == DumpAPI.FORMAT.OCTAL || this.sFormat == DumpAPI.FORMAT.WORDS) {
            this.json += this.dumpBuffer(this.sFormat, this.buf, this.buf.length, 2);
        } else {
            this.json += this.dumpBuffer(DumpAPI.FORMAT.LONGS, this.buf, this.buf.length, 4);
        }
    }
};

/**
 * convertToJSON(done)
 *
 * Converts the data buffer to JSON.
 *
 * @this {FileDump}
 * @param {function(Error,string)} done
 */
FileDump.prototype.convertToJSON = function(done)
{
    this.buildJSON();
    this.loadMap(this.sFilePath, done);
};

/**
 * convertToFile(sOutputFile, fOverwrite)
 *
 * Converts the data buffer to JSON, as appropriate.
 *
 * @this {FileDump}
 * @param {string} sOutputFile
 * @param {boolean} fOverwrite
 */
FileDump.prototype.convertToFile = function(sOutputFile, fOverwrite)
{
    if (this.sServerRoot && sOutputFile) {
        sOutputFile = path.join(this.sServerRoot, sOutputFile);
    }
    if (this.sFormat != DumpAPI.FORMAT.ROM) {
        let obj = this;
        this.buildJSON();
        this.loadMap(this.sFilePath || sOutputFile, function(err, str) {
            if (err) {
                FileDump.logError(err);
            } else {
                obj.outputFile(sOutputFile, fOverwrite);
            }
        });
        return;
    }
    this.outputFile(sOutputFile, fOverwrite);
};

/**
 * outputFile(sOutputFile, fOverwrite)
 *
 * @this {FileDump}
 * @param {string} sOutputFile
 * @param {boolean} fOverwrite
 */
FileDump.prototype.outputFile = function(sOutputFile, fOverwrite)
{
    let data = this.json || this.buf;

    let sFormat = this.sFormat.toUpperCase();

    if (sOutputFile) {
        try {
            if (fs.existsSync(sOutputFile) && !fOverwrite) {
                console.log(sOutputFile + " exists, use --overwrite to rewrite");
            } else {
                let sDirName = path.dirname(sOutputFile);
                if (!fs.existsSync(sDirName)) mkdirp.sync(sDirName);
                fs.writeFileSync(sOutputFile, data);
                console.log(data.length + "-byte " + sFormat + " file saved as " + sOutputFile);
            }
        } catch(err) {
            FileDump.logError(err);
        }
    } else {
        /*
         * We'll dump JSON to the console, but not a raw file buffer; we could add an option to
         * "stringify" buffers, but if that's what the caller wants, they should use "--format=json".
         */
        if (typeof data == "string") {
            console.log(data);
        } else {
            console.log("specify --output={file} to save " + data.length + "-byte " + sFormat + " file");
        }
    }
};

// module.exports = FileDump;

export default FileDump;
