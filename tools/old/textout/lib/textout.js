/**
 * @fileoverview Provides miscellaneous text-munging services
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
import netlib from "../../../modules/netlib.js";
import PCJSLib from "../../../modules/pcjslib.js";

/**
 * TextOut()
 *
 * @constructor
 */
function TextOut()
{
    this.fDebug = false;
    this.fASCII = true;
    this.sServerRoot = process.cwd();
    this.asLines = [];
    this.nTabWidth = 8;
    this.sTarget = "; ";
}

TextOut.asTargetRefs = ["call", "jmp", "jz", "jnz", "jc", "jnc", "ja", "jna", "js", "jns", "jo", "jno", "jl", "jnl", "jg", "jng", "jpo", "jpe", "loop", "loope", "loopne", "jcxz", "jecxz"];

/*
 * Class methods
 */

/**
 * CLI()
 *
 * Provides the command-line interface for the TextOut module.
 *
 * Usage
 * ---
 *      textout --file=({path}|{URL}) [--nasm]
 *
 * Arguments
 * ---
 *      --nasm performs a variety of NASM-related processing, including:
 *
 *          massageLines(): reorders basic elements of every line to make them "assemble-able"
 *
 *          collapseLines(): looks for series of lines containing nothing more than a "db",
 *          "dw", or something equivalent, and collapses them into a single repetition
 *
 *          labelTargets(): looks for all JMP and CALL targets and labels them
 *
 *          alignVertical(): looks for a predefined target string (eg, '; ') in the first line,
 *          and ensures that the same sequence in all subsequent lines starts at the same column
 *
 *      For now, all output is written to stdout only.
 *
 * Examples
 * ---
 *      node modules/textout/bin/textout --file=devices/pc/rom/compaq/deskpro386/1988-01-28/1988-01-28.asm --nasm
 */
TextOut.CLI = function()
{
    var [argc, argv] = PCJSLib.getArgs();

    if (!argc) {
        console.log("usage: textout --file=({path}|{URL}) [--nasm]");
        return;
    }

    var sFile = argv['file'];
    if (!sFile) {
        TextOut.logError(new Error("bad or missing input filename"));
        return;
    }

    var text = new TextOut();
    text.loadFile(sFile, function(err) {
        if (!err) {
            if (argv['nasm']) {
                text.massageLines();
                text.collapseLines();
                text.labelTargets();
                text.alignVertical();
            }
            text.outputText();
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
TextOut.logError = function(err)
{
    var sError = "";
    if (err) {
        sError = "textout error: " + err.message;
        console.log(sError);
    }
    return sError;
};

/*
 * Object methods
 */

/**
 * loadFile(sFile, done)
 *
 * @this {TextOut}
 * @param {string} sFile
 * @param {function(Error)} done
 */
TextOut.prototype.loadFile = function(sFile, done)
{
    var obj = this;
    var options = {encoding: "utf8"};
    var sFilePath = netlib.isRemote(sFile)? sFile : path.join(this.sServerRoot, sFile);

    if (!this.sFilePath) this.sFilePath = sFilePath;

    if (this.fDebug) console.log("loadFile(" + sFilePath + ")");

    if (netlib.isRemote(sFilePath)) {
        netlib.getFile(sFilePath, options.encoding, function(err, status, buf) {
            if (err) {
                TextOut.logError(err);
                done(err);
                return;
            }
            obj.setText(buf);
            done(null);
        });
    } else {
        fs.readFile(sFilePath, options, function(err, buf) {
            if (err) {
                TextOut.logError(err);
                done(err);
                return;
            }
            obj.setText(buf);
            done(null);
        });
    }
};

/**
 * setText(buf)
 *
 * Records the given file data in the TextOut's buffer
 *
 * @this {TextOut}
 * @param {Buffer|string} buf
 * @returns {boolean}
 */
TextOut.prototype.setText = function(buf)
{
    var b, i, j, s;
    if (typeof buf == "string") {
        this.asLines = buf.split('\n');
        return true;
    }
    TextOut.logError(new Error("setText(): invalid data"));
    return false;
};

/**
 * massageLines()
 *
 * @this {TextOut}
 */
TextOut.prototype.massageLines = function()
{
    var iLineASCII = -1, sASCII = "";

    for (var iLine = 0; iLine < this.asLines.length; iLine++) {

        /*
         * NDISASM sometimes inserts spurious lines containing a hyphen immediately followed by one or more hex bytes;
         * this seems to happen whenever an instruction longer than 8 bytes is encountered, and it appears that these
         * extra lines can be completely removed.
         */
        var sLine = this.asLines[iLine];
        if (sLine.match(/^\s*-[0-9A-F]+$/)) {
            this.asLines.splice(iLine--, 1);
            continue;
        }

        sLine = sLine.replace(/^([0-9A-F]+)\s+([0-9A-F]+)\s+(o32 |a32 |)([^\s]*) *(.*)$/, "\t$3$4\t$5\t\t\t; $1  $2");

        var fASCII = false;
        var match = sLine.match(/([0-9A-F]+)$/);
        if (match) {
            fASCII = this.fASCII;
            var cBytes = 0, c;
            var sBytes = match[1], sASCIILine = "";
            for (var i = 0; i < sBytes.length; i += 2) {
                c = str.parseInt(sBytes.substr(i, 2), 16);
                if (c != 0x0D && c != 0x0A && (c < 0x20 || c >= 0x7F)) {
                    c = 0x2E;
                    fASCII = false;
                }
                sASCIILine += String.fromCharCode(c);
                cBytes++;
            }
            /*
             * Don't interpret single-byte opcodes within the ASCII range as potential ASCII?
             *
             *      if (cBytes == 1 && (c >= 0x40 && c <= 0x5F)) fASCII = false;
             */
            sLine += "  " + this.encodeASCII(sASCIILine);
        }

        this.asLines[iLine] = sLine;

        if (fASCII) {
            if (iLineASCII < 0) iLineASCII = iLine;
            sASCII += sASCIILine;
            continue;
        }

        if (iLineASCII >= 0) {
            if (iLine - iLineASCII >= 4) {
                /*
                 * This seems a better way of discriminating between single-byte opcodes and ASCII:
                 * output ASCII only when the number of ASCII bytes exceeds the number of opcode bytes.
                 */
                if (sASCII.length > iLine - iLineASCII + 1) {
                    this.asLines[iLineASCII] = "\tdb\t" + this.encodeASCII(sASCII);
                    this.asLines.splice(iLineASCII+1, iLine - iLineASCII - 1);
                    iLine = iLineASCII;
                }
            }
            iLineASCII = -1; sASCII = "";
        }
    }
};

/**
 * encodeASCII(s)
 *
 * @param s
 * @returns {string}
 */
TextOut.prototype.encodeASCII = function(s)
{
    var sNew = "", fInQuotes = false;
    for (var i = 0; i < s.length; i++) {
        var c = s.charCodeAt(i);
        if (c < 0x20 || c == 0x27) {
            if (fInQuotes) {
                sNew += "'";
                fInQuotes = false;
            }
            if (sNew) sNew += ',';
            sNew += str.toHexByte(c);
            continue;
        }
        if (!fInQuotes) {
            if (sNew) sNew += ',';
            sNew += "'";
            fInQuotes = true;
        }
        var ch = String.fromCharCode(c);
        if (ch == "'") ch = "\\'";
        sNew += ch;
    }
    if (fInQuotes) sNew += "'";
    return sNew;
};

/**
 * collapseLines()
 *
 * @this {TextOut}
 */
TextOut.prototype.collapseLines = function()
{
    for (var i = 0; i < this.asLines.length; i++) {
        var as = this.getLineParts(i, true);
        if (!as) continue;
        if (as[2] != "db" && as[2] != "dw") continue;
        var cCombine = 0, asLast;
        for (var j = i + 1; j < this.asLines.length; j++) {
            var asNext = this.getLineParts(j, true);
            if (!asNext) break;
            if (as[2] != asNext[2] || as[2] != asNext[2]) break;
            asLast = asNext;
            cCombine++;
        }
        if (cCombine > 2) {
            this.asLines[i] = "\n\ttimes\t" + (cCombine + 1) + ' ' + as[2] + ' ' + as[3] + "\t\t; " + as[4] + " - " + asLast[4];
            this.asLines.splice(i + 1, cCombine);
        }
    }
};

/**
 * labelTargets()
 *
 * @this {TextOut}
 */
TextOut.prototype.labelTargets = function()
{
    /*
     * First pass: find all target references (eg, JMP and CALL instructions)
     */
    var chPrefix = 'x';
    var i, j, as, target, aTargets = [], aHardTargets = [];

    for (i = 0; i < this.asLines.length; i++) {
        as = this.getLineParts(i);
        if (!as) continue;
        var iTarget = TextOut.asTargetRefs.indexOf(as[2]);
        if (iTarget < 0) continue;
        var sTarget = as[3];
        var sShort = "short ";
        if (sTarget.indexOf(sShort) !== 0) {
            sShort = "";
        } else {
            sTarget = sTarget.substr(sShort.length);
        }
        target = str.parseInt(sTarget, 16);
        if (target == undefined) continue;
        if (aTargets.indexOf(target) < 0) {
            aTargets.push(target);
            /*
             * For now, we're classifying only "call" targets as "hard" targets, and thus worthy of extra whitespace
             */
            if (iTarget < 1) aHardTargets.push(target);
        }
        this.asLines[i] = this.asLines[i].replace(as[3], sShort + chPrefix + target.toString(16));
    }

    /*
     * Second pass: label all targets
     */
    var addr, fPrevHard = false;
    for (i = 0; i < this.asLines.length; i++) {
        as = this.getLineParts(i);
        if (!as) continue;
        addr = str.parseInt(as[4], 16);
        if (addr == undefined) continue;
        j = aTargets.indexOf(addr);
        if (j >= 0) {
            var fHard = (aHardTargets.indexOf(addr) >= 0);
            this.asLines[i] = (fHard || fPrevHard? '\n' : '') + chPrefix + addr.toString(16) + ':' + this.asLines[i];
            aTargets.splice(j, 1);
        } else {
            if (fPrevHard) this.asLines[i] = '\n' + this.asLines[i];
        }
        fPrevHard = (as[2] == "jmp" || as[2] == "ret" || as[2] == "retf" || as[2] == "iret");
    }

    /*
     * Third pass: for all targets that turned out to NOT be targets, fix all references
     */
    var aRepairs = [];
    if (aTargets.length) {
        for (i = 0; i < this.asLines.length; i++) {
            as = this.getLineParts(i);
            if (!as) continue;
            if (as[3].charAt(0) == chPrefix) {
                addr = str.parseInt(as[3].substr(1), 16);
                if (aTargets.indexOf(addr) >= 0) {
                    /*
                     * Instead of putting back the original target address, let's just convert the line to a "db"
                     */
                    this.asLines[i] = as[1] + "\tdb\t";
                    for (j = 0; j < as[5].length; j += 2) {
                        this.asLines[i] += (j > 0? ',' : '') + "0x" + as[5].substr(j, 2);
                    }
                    // this.asLines[i] = this.asLines[i].replace(as[3], str.toHexWord(addr));
                    if (aRepairs.indexOf(addr) < 0) aRepairs.push(addr);
                }
            }
        }
        if (aTargets.length != aRepairs.length) {
            console.log("; warning: " + aTargets.length + " unprocessed targets (" + aRepairs.length + " repaired):");
            for (j = 0; j < aTargets.length; j++) {
                if (aRepairs.indexOf(aTargets[j]) < 0) console.log(';\t' + str.toHexWord(aTargets[j]));
            }
        }
    }
};

/**
 * alignVertical()
 *
 * @this {TextOut}
 */
TextOut.prototype.alignVertical = function()
{
    var iTarget = this.asLines.length? this.findTarget(this.asLines[0]) : -1;
    if (iTarget < 0) return;

    if (this.fDebug) console.log("target vertical alignment: " + (iTarget + 1));

    for (var iLine = 1; iLine < this.asLines.length; iLine++) {
        var iVictim;
        var sLine = this.asLines[iLine];
        while ((iVictim = this.findTarget(sLine)) != iTarget) {
            if (iVictim < 0) break;

            if (this.fDebug) console.log("line " + (iLine + 1) + ": current vertical alignment: " + (iVictim + 1));

            if (iVictim > iTarget) {
                if (!this.iTargetIndex) break;
                var ch = sLine.charAt(this.iTargetIndex-1);
                if (ch != ' ' && ch != '\t') break;
                sLine = sLine.substr(0, this.iTargetIndex-1) + sLine.substr(this.iTargetIndex);
            } else {
                sLine = sLine.substr(0, this.iTargetIndex) + ' ' + sLine.substr(this.iTargetIndex);
            }
        }
        this.asLines[iLine] = sLine;
    }
};

/**
 * findTarget(sSrc, fDebug)
 *
 * This does not return the physical 0-based index of sTarget within sSrc, but rather the logical
 * 0-based position, taking into account tab stops, based on the current nTabWidth setting.
 *
 * @this {TextOut}
 * @param {string} sSrc
 * @param {boolean} [fDebug]
 * @returns {number} logical position of sTarget within sSrc, -1 if not found
 */
TextOut.prototype.findTarget = function(sSrc, fDebug)
{
    var i = 0, iPos = 0, iTarget;

    if (fDebug) console.log('findTarget("' + sSrc + '")');

    if ((iTarget = sSrc.indexOf(this.sTarget, i)) >= 0) {
        /*
         * i is a physical position, whereas iPos is the logical position (ie, taking into account tab stops),
         * so we have to walk i up to iTarget, advancing iPos as we go.
         */
        while (i < iTarget) {
            var ch = sSrc.charAt(i++);
            if (ch != '\t') {
                iPos++;
            } else {
                iPos = iPos + (this.nTabWidth - (iPos % this.nTabWidth));
            }
            if (fDebug) console.log('\t"' + ch + '": index=' + (i - 1) + ', pos=' + iPos);
        }
        this.iTargetIndex = iTarget;
        iTarget = iPos;
    }
    return iTarget;
};

/**
 * getLineParts(iLine, fBogus)
 *
 * Returns the following array:
 *
 *      asParts[1]: label
 *      asParts[2]: operation
 *      asParts[3]: operand(s)
 *      asParts[4]: offset
 *      asParts[5]: byte sequence
 *      asParts[6]: ASCII sequence, if any
 *
 * or null if the line does not contain all of the above.
 *
 * @this {TextOut}
 * @param {number} iLine
 * @param {boolean} [fBogus]
 * @returns {Array.<string>}
 */
TextOut.prototype.getLineParts = function(iLine, fBogus)
{
    var as = this.asLines[iLine].match(/^\n?([^\s:]+:|)\s*([^\s;]+)\s*([^;]*?)\s*;\s*([0-9A-F]+)\s*([0-9A-F]+)\s*([^\s]+|)$/);
    if (as && fBogus) {
        /*
         * In most (but not all) cases, an "add [bx+si],al" instruction is bogus (TODO: Come up with an actual bogosity test)
         */
        if (as[2] == "add" && as[3] == "[bx+si],al") {
            as[2] = "dw";
            as[3] = "0x0000";
        }
    }
    return as;
};

/**
 * outputText(sOutputFile, fOverwrite)
 *
 * @this {TextOut}
 * @param {string} [sOutputFile]
 * @param {boolean} [fOverwrite]
 */
TextOut.prototype.outputText = function(sOutputFile, fOverwrite)
{
    if (this.asLines.length) {
        var sText = "";
        for (var iLine = 0; iLine < this.asLines.length; iLine++) {
            if (sText) sText += '\n';
            sText += this.asLines[iLine];
        }
        if (sOutputFile) {
            try {
                if (fs.existsSync(sOutputFile) && !fOverwrite) {
                    console.log(sOutputFile + " exists, use --overwrite to rewrite");
                } else {
                    var sDirName = path.dirname(sOutputFile);
                    if (!fs.existsSync(sDirName)) mkdirp.sync(sDirName);
                    fs.writeFileSync(sOutputFile, sText);
                    console.log(sText.length + "-byte file saved as " + sOutputFile);
                }
            } catch(err) {
                TextOut.logError(err);
            }
        } else {
            console.log(sText);
        }
    }
};

// module.exports = TextOut;

export default TextOut;
