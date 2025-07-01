/**
 * @fileoverview BASIC File Conversion Library
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * Adapted from https://www.pcjs.org/tools/modules/basfile.js
 */

import DataBuffer from "./db.js";
import CharSet    from "./charset.js";

/**
 * BASIC File Conversion Library
 *
 * The code in this class is based on https://github.com/rwtodd/bascat, which was a good start but had some issues.
 * I'm sure there are still some lingering issues here (perhaps some magic whitespace rules that I'm unaware of), but
 * this code seems to work pretty well now, and the PCjs tokens dictionary is *much* more straightforward.
 *
 * @class BASFile
 */
export default class BASFile {

    static tokens = {
        0x11:   "0",
        0x12:   "1",
        0x13:   "2",
        0x14:   "3",
        0x15:   "4",
        0x16:   "5",
        0x17:   "6",
        0x18:   "7",
        0x19:   "8",
        0x1A:   "9",
        0x1B:   "10",
        0x81:   "END",
        0x82:   "FOR",
        0x83:   "NEXT",
        0x84:   "DATA",
        0x85:   "INPUT",
        0x86:   "DIM",
        0x87:   "READ",
        0x88:   "LET",
        0x89:   "GOTO",
        0x8A:   "RUN",
        0x8B:   "IF",
        0x8C:   "RESTORE",
        0x8D:   "GOSUB",
        0x8E:   "RETURN",
        0x8F:   "REM",
        0x90:   "STOP",
        0x91:   "PRINT",
        0x92:   "CLEAR",
        0x93:   "LIST",
        0x94:   "NEW",
        0x95:   "ON",
        0x96:   "WAIT",
        0x97:   "DEF",
        0x98:   "POKE",
        0x99:   "CONT",
        0x9C:   "OUT",
        0x9D:   "LPRINT",
        0x9E:   "LLIST",
        0xA0:   "WIDTH",
        0xA1:   "ELSE",
        0xA2:   "TRON",
        0xA3:   "TROFF",
        0xA4:   "SWAP",
        0xA5:   "ERASE",
        0xA6:   "EDIT",
        0xA7:   "ERROR",
        0xA8:   "RESUME",
        0xA9:   "DELETE",
        0xAA:   "AUTO",
        0xAB:   "RENUM",
        0xAC:   "DEFSTR",
        0xAD:   "DEFINT",
        0xAE:   "DEFSNG",
        0xAF:   "DEFDBL",
        0xB0:   "LINE",
        0xB1:   "WHILE",
        0xB2:   "WEND",
        0xB3:   "CALL",
        0xB7:   "WRITE",
        0xB8:   "OPTION",
        0xB9:   "RANDOMIZE",
        0xBA:   "OPEN",
        0xBB:   "CLOSE",
        0xBC:   "LOAD",
        0xBD:   "MERGE",
        0xBE:   "SAVE",
        0xBF:   "COLOR",
        0xC0:   "CLS",
        0xC1:   "MOTOR",
        0xC2:   "BSAVE",
        0xC3:   "BLOAD",
        0xC4:   "SOUND",
        0xC5:   "BEEP",
        0xC6:   "PSET",
        0xC7:   "PRESET",
        0xC8:   "SCREEN",
        0xC9:   "KEY",
        0xCA:   "LOCATE",
        0xCC:   "TO",
        0xCD:   "THEN",
        0xCE:   "TAB(",
        0xCF:   "STEP",
        0xD0:   "USR",
        0xD1:   "FN",
        0xD2:   "SPC(",
        0xD3:   "NOT",
        0xD4:   "ERL",
        0xD5:   "ERR",
        0xD6:   "STRING$",
        0xD7:   "USING",
        0xD8:   "INSTR",
        0xD9:   "'",
        0xDA:   "VARPTR",
        0xDB:   "CSRLIN",
        0xDC:   "POINT",
        0xDD:   "OFF",
        0xDE:   "INKEY$",
        0xE6:   ">",
        0xE7:   "=",
        0xE8:   "<",
        0xE9:   "+",
        0xEA:   "-",
        0xEB:   "*",
        0xEC:   "/",
        0xED:   "^",
        0xEE:   "AND",
        0xEF:   "OR",
        0xF0:   ">=",
        0xF1:   "EQV",
        0xF2:   "IMP",
        0xF3:   "MOD",
        0xF4:   "\\",
        0xFD81: "CVI",
        0xFD82: "CVS",
        0xFD83: "CVD",
        0xFD84: "MKI$",
        0xFD85: "MKS$",
        0xFD86: "MKD$",
        0xFD8B: "EXTERR",
        0xFE81: "FILES",
        0xFE82: "FIELD",
        0xFE83: "SYSTEM",
        0xFE84: "NAME",
        0xFE85: "LSET",
        0xFE86: "RSET",
        0xFE87: "KILL",
        0xFE88: "PUT",
        0xFE89: "GET",
        0xFE8A: "RESET",
        0xFE8B: "COMMON",
        0xFE8C: "CHAIN",
        0xFE8D: "DATE$",
        0xFE8E: "TIME$",
        0xFE8F: "PAINT",
        0xFE90: "COM",
        0xFE91: "CIRCLE",
        0xFE92: "DRAW",
        0xFE93: "PLAY",
        0xFE94: "TIMER",
        0xFE95: "ERDEV",
        0xFE96: "IOCTL",
        0xFE97: "CHDIR",
        0xFE98: "MKDIR",
        0xFE99: "RMDIR",
        0xFE9A: "SHELL",
        0xFE9B: "ENVIRON",
        0xFE9C: "VIEW",
        0xFE9D: "WINDOW",
        0xFE9E: "PMAP",
        0xFE9F: "PALETTE",
        0xFEA0: "LCOPY",
        0xFEA1: "CALLS",
        0xFEA4: "NOISE",
        0xFEA5: "PCOPY",
        0xFEA6: "TERM",
        0xFEA7: "LOCK",
        0xFEA8: "UNLOCK",
        0xFF81: "LEFT$",
        0xFF82: "RIGHT$",
        0xFF83: "MID$",
        0xFF84: "SGN",
        0xFF85: "INT",
        0xFF86: "ABS",
        0xFF87: "SQR",
        0xFF88: "RND",
        0xFF89: "SIN",
        0xFF8A: "LOG",
        0xFF8B: "EXP",
        0xFF8C: "COS",
        0xFF8D: "TAN",
        0xFF8E: "ATN",
        0xFF8F: "FRE",
        0xFF90: "INP",
        0xFF91: "POS",
        0xFF92: "LEN",
        0xFF93: "STR$",
        0xFF94: "VAL",
        0xFF95: "ASC",
        0xFF96: "CHR$",
        0xFF97: "PEEK",
        0xFF98: "SPACE$",
        0xFF99: "OCT$",
        0xFF9A: "HEX$",
        0xFF9B: "LPOS",
        0xFF9C: "CINT",
        0xFF9D: "CSNG",
        0xFF9E: "CDBL",
        0xFF9F: "FIX",
        0xFFA0: "PEN",
        0xFFA1: "STICK",
        0xFFA2: "STRIG",
        0xFFA3: "EOF",
        0xFFA4: "LOC",
        0xFFA5: "LOF"
    };

    /**
     * BASFile(db, toUTF8, name, print)
     *
     * @this {BASFile}
     * @param {DataBuffer} db
     * @param {boolean} [toUTF8] (also implies CR/LF to LF conversion and EOF filtering)
     * @param {string} [name]
     */
    constructor(db, toUTF8, name)
    {
        this.db = db;
        this.toUTF8 = toUTF8;
        this.name = name || "unknown";
        this.warnings = [];
    }

    /**
     * eof()
     *
     * @this {BASFile}
     * @returns {boolean}
     */
    eof() {
        return this.off >= this.db.length;
    }

    /**
     * readU8()
     *
     * @this {BASFile}
     * @returns {number}
     */
    readU8() {
        return this.off < this.db.length? this.db.readUInt8(this.off++) : 0;
    }

    /**
     * peekU8(v)
     *
     * @this {BASFile}
     * @param {number} v
     * @returns {boolean}
     */
    peekU8(v) {
        return !this.eof() && this.db.readUInt8(this.off) == v;
    }

    /**
     * peekU16(v1, v2)
     *
     * @this {BASFile}
     * @param {number} v1
     * @param {number} v2
     * @returns {boolean}
     */
    peekU16(v1, v2)
    {
        return (this.off < this.db.length - 1) && (this.db.readUInt8(this.off) == v1) && (this.db.readUInt8(this.off+1) == v2);
    }

    /**
     * skip(off)
     *
     * @this {BASFile}
     * @param {number} off
     */
    skip(off)
    {
        this.off += off;
    }

    /**
     * readU16()
     *
     * @this {BASFile}
     * @returns {number}
     */
    readU16()
    {
        let v = (this.off < this.db.length - 1)? this.db.readUInt16LE(this.off) : 0;
        this.off += 2;
        return v;
    }

    /**
     * readS16()
     *
     * @this {BASFile}
     * @returns {number}
     */
    readS16()
    {
        let v = (this.off < this.db.length - 1)? this.db.readInt16LE(this.off) : 0;
        this.off += 2;
        return v;
    }

    /**
     * readMBF32()
     *
     * @this {BASFile}
     * @returns {number}
     */
    readMBF32()
    {
        let mbf = new Array(4);
        for (let i = 0; i < mbf.length; i++) {
            mbf[i] = this.readU8();
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

    /**
     * readMBF64()
     *
     * @this {BASFile}
     * @returns {number}
     */
    readMBF64()
    {
        let mbf = new Array(8);
        for (let i = 0; i < mbf.length; i++) {
            mbf[i] = this.readU8();
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
     * getToken(lineNum)
     *
     * @this {BASFile}
     * @param {number} lineNum
     * @returns {string|null}
     */
    getToken(lineNum)
    {
        let token = null;                               // null will signal end of tokens for the line
        let v = this.readU8();
        if (v) {
            /**
             * The original code failed to account for programs that include IBM PC drawing characters
             * inside strings or comments or DATA statements, and those characters can be (almost) any 8-bit
             * value, which is why we must track the "quote" and "comment" and "data" states of the text
             * stream and decode accordingly.
             *
             * I say "almost" because there are a few control characters (below 0x20) that you can't embed
             * inside strings.  But many can be.  For example, you can use the IBM PC's "Alt Num Keypad"
             * trick to enter decimal character 16 and a "►" will appear.
             *
             * For text that's not quoted or commented, we still have to handle 0x3A (colon) elsewhere,
             * because it's a weird one; see the 'default' case below.
             */
            if ((this.comment || this.quote || this.data && v != 0x3A) && v < 0xFF || v >= 0x20 && v <= 0x7E && v != 0x3A) {
                token = String.fromCharCode(v);
                if (this.toUTF8 && v != 0x09) {         // transform everything except TAB
                    token = CharSet.fromCP437(token, true);
                }
                if (v == 0x22 && !this.comment) this.quote = !this.quote;
            }
            else {
                if (v >= 0xFD) {
                    v = (v << 8) | this.readU8();
                }
                switch (v) {
                case 0x0B:
                    token = "&O" + this.readU16().toString(8);
                    break;
                case 0x0C:
                    token = "&H" + this.readU16().toString(16).toUpperCase();
                    break;
                case 0x0E:
                    token = this.readU16().toString();
                    break;
                case 0x0F:
                    token = this.readU8().toString();
                    break;
                case 0x1C:
                    token = this.readS16().toString();
                    break;
                case 0x1D:
                    /**
                     * BASICA likes to display "0.1" simply as ".1"; I'm not sure that's worth worrying about.
                     *
                     * At the moment, all we do is trim trailing zeros and trailing decimal points.  It also seems
                     * that BASICA eschews '!' for 32-bit floating point numbers unless it's a whole number, presumably
                     * to prevent it being confused with an integer and running the risk of integer overflow (eg, 65536!).
                     */
                    token = this.readMBF32().toPrecision(7).replace(/(\.[0-9]*?)0*$/, "$1").replace(/\.$/, "");
                    if (token.indexOf('.') < 0) token += '!';
                    break;
                case 0x1F:
                    token = this.readMBF64().toPrecision(15).replace(/(\.[0-9]*?)0*$/, "$1").replace(/\.$/, "") + '#';
                    break;
                default:
                    if (v == 0x3A) {
                        if (this.peekU8(0xA1)) {
                            token = "ELSE";
                            this.skip(1);
                            break;
                        }
                        if (this.peekU16(0x8F, 0xD9)) {
                            token = "'";
                            this.comment = true;
                            this.skip(2);
                            break;
                        }
                        token = String.fromCharCode(v);
                        this.data = false;              // unlike REM, other colon-separated statements CAN appear after a DATA statement
                        break;
                    }
                    if (v == 0xB1 && this.peekU8(0xE9)) {
                        token = "WHILE";
                        this.skip(1);
                        break;
                    }
                    token = BASFile.tokens[v];
                    if (token == "REM") {
                        this.comment = true;
                    }
                    else if (token == "DATA") {
                        this.data = true;
                    }
                    break;
                }
                if (!token) {
                    if (v == 0x09) {                    // we'll pass TABs through
                        token = String.fromCharCode(v);
                    } else if (v == 0x0A) {
                        token = "";                     // and we'll ignore embedded LFs
                    } else {
                        /**
                         * I've seen DATA statements with embedded non-ASCII characters, so at this point,
                         * we pretty much have to encode anything else as raw text.  But first, we must un-read
                         * any extra byte we fetched above.
                         */
                        let u = v;
                        if (v >= 0xFD00) {
                            this.off--;                 // un-read the extra byte
                            v >>= 8;                    // and shift the value back to 8 bits
                        }
                        token = String.fromCharCode(v);
                        if (this.toUTF8) {
                            token = CharSet.fromCP437(token, true);
                        }
                        if (this.lineWarning != lineNum) {
                            this.warnings.push(this.name + " contained unusual bytes (eg, " + u + " on line " + lineNum + ")");
                            this.lineWarning = lineNum; // one such warning per line is enough...
                        }
                    }
                }
                /**
                 * There are some additional whitespace "rules" that BASIC appears to follow, such as an implied space
                 * between PRINT (0x91) and other non-quote/non-colon tokens (otherwise statements like "PRINT CHR$(29)"
                 * become "PRINTCHR$(29)") and an implied space between number tokens and alphabetic tokens.
                 */
                if (this.prevToken == 0x91 && v != 0x22 && v != 0x3A ||
                    this.prevToken <= 0x1F && token[0] >= 'A' && token[0] <= 'Z') {
                    token = ' ' + token;
                }
            }
        }
        this.prevToken = v;
        return token;
    }

    /**
     * normalize(db, assumeText)
     *
     * In the context of old BASIC programs, normalization means transforming the character set
     * (ie, from CP437 to UTF-8).  For tokenized programs, normalization was performed as tokens
     * were processed; for plain-text files, we use this function.
     *
     * @param {DataBuffer} db
     * @param {boolean} [assumeText]
     * @returns {DataBuffer}
     */
    static normalize(db, assumeText)
    {
        /**
         * Either the caller tells us the data is text, or we make sure the first 4 bytes look like text.
         */
        if (assumeText || CharSet.isText(db.toString("utf-8", 0, 4))) {
            let s = CharSet.fromCP437(db, false);
            s = s.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
            let i = s.indexOf(String.fromCharCode(0x1A));
            if (i >= 0) {
                s = s.slice(0, i);
            }
            db = new DataBuffer(s);
        }
        return db;
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
    static unprotect(db)
    {
        const key1 = [
            0xA9, 0x84, 0x8D, 0xCD, 0x75, 0x83, 0x43, 0x63, 0x24, 0x83, 0x19, 0xF7, 0x9A
        ];
        const key2 = [
            0x1E, 0x1D, 0xC4, 0x77, 0x26, 0x97, 0xE0, 0x74, 0x59, 0x88, 0x7C
        ];
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

    /**
     * convert()
     *
     * @this {BASFile}
     * @returns {DataBuffer}
     */
    convert()
    {
        this.quote = false;
        this.comment = false;
        this.data = false;
        this.lineWarning = 0;

        this.off = 0;

        /**
         * If the first byte is 0xFE, then this is a protected GW-BASIC program,
         * which we transform into an unprotected (but still tokenized) stream.
         */
        this.db = BASFile.unprotect(this.db);

        /**
         * If the first byte is 0xFF, then this is a tokenized GW-BASIC program.
         */
        if (this.readU8() != 0xFF) {
            /**
             * This does not appear to be a tokenized BASIC program, so there's nothing to do UNLESS
             * character set transformation was requested, too.
             */
            if (this.toUTF8) {
                this.db = BASFile.normalize(this.db);
            }
        }
        else {
            let s = "";
            while (!this.eof()) {
                /**
                 * Every line in the file begins with two 16-bit values: the offset of the *next* line,
                 * and the line number of the *current* line.  The offset can be used as a sanity check
                 * (eg, for file integrity) but we're not going to bother; all we check for here is
                 * an offset of ZERO, which effectively means end-of-program, and it's normally followed
                 * by an EOF byte (0x1A) (and which we'll pass along, *unless* we're "normalizing" the text).
                 */
                let off = this.readU16();
                if (!off) {
                    if (this.peekU8(0x1A)) {
                        if (!this.toUTF8) s += String.fromCharCode(0x1A);
                    } else if (!this.eof()) {
                        this.warnings.push(this.name + " contains non-EOF at offset " + this.off + " (" + this.readU8() + ")");
                    }
                    break;
                }
                let lineNum = this.readU16();
                let line = lineNum + " ";       // BASIC defaults to one space between line number and first token
                this.prevToken = 0x20;
                let t;
                while ((t = this.getToken(lineNum)) !== null) {
                    line += t;
                }
                s += line.trim() + (this.toUTF8? "\n" : "\r\n");
                this.quote = false;             // if you end a line with an open quote, BASIC automatically "closes" it
                this.comment = false;           // ditto for comments
                this.data = false;              // ditto for DATA statements
            }
            this.db = new DataBuffer(s);
        }
        return this.db;
    }
}
