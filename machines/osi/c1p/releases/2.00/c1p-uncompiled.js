"use strict";

/**
 * @copyright https://www.pcjs.org/machines/shared/lib/defines.js (C) 2012-2025 Jeff Parsons
 */

/**
 * @define {string}
 */
var APPVERSION = "2.00";                // this @define is overridden by the Closure Compiler with the version in machines.json

var COPYRIGHT = "Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>";

var LICENSE = "License: MIT <https://www.pcjs.org/LICENSE.txt>";

var CSSCLASS = "pcjs";

/**
 * @define {string}
 */
var SITEURL = "http://localhost:8088";  // this @define is overridden by the Closure Compiler with "https://www.pcjs.org"

/**
 * @define {boolean}
 */
var COMPILED = false;                   // this @define is overridden by the Closure Compiler (to true)

/**
 * @define {boolean}
 */
var DEBUG = true;                       // this @define is overridden by the Closure Compiler (to false) to remove DEBUG-only code

/**
 * @define {boolean}
 */
var MAXDEBUG = false;                   // this @define is overridden by the Closure Compiler (to false) to remove MAXDEBUG-only code

/**
 * @define {boolean}
 */
var PRIVATE = false;                    // this @define is overridden by the Closure Compiler (to false) to enable PRIVATE code

/*
 * RS-232 DB-25 Pin Definitions, mapped to bits 1-25 in a 32-bit status value.
 *
 * SerialPorts in PCjs machines are considered DTE (Data Terminal Equipment), which means they should be "virtually"
 * connected to each other via a null-modem cable, which assumes the following cross-wiring:
 *
 *     G       1  <->  1        G       (Ground)
 *     TD      2  <->  3        RD      (Received Data)
 *     RD      3  <->  2        TD      (Transmitted Data)
 *     RTS     4  <->  5        CTS     (Clear To Send)
 *     CTS     5  <->  4        RTS     (Request To Send)
 *     DSR   6+8  <->  20       DTR     (Data Terminal Ready)
 *     SG      7  <->  7        SG      (Signal Ground)
 *     DTR    20  <->  6+8      DSR     (Data Set Ready + Carrier Detect)
 *     RI     22  <->  22       RI      (Ring Indicator)
 *
 * TODO: Move these definitions to a more appropriate shared file at some point.
 */
var RS232 = {
    RTS: {
        PIN:  4,
        MASK: 0x00000010
    },
    CTS: {
        PIN:  5,
        MASK: 0x00000020
    },
    DSR: {
        PIN:  6,
        MASK: 0x00000040
    },
    CD: {
        PIN:  8,
        MASK: 0x00000100
    },
    DTR: {
        PIN:  20,
        MASK: 0x00100000
    },
    RI: {
        PIN:  22,
        MASK: 0x00400000
    }
};


/**
 * @copyright https://www.pcjs.org/machines/shared/lib/dumpapi.js (C) 2012-2025 Jeff Parsons
 */

/*
 * Our "DiskDump API", such as it was, used to look like:
 *
 *      http://pcjs.org/bin/convdisk.php?disk=/disks/pc/dos/ibm/2.00/PCDOS200-DISK1.json&format=img
 *
 * To make it (a bit) more "REST-like", the above request now looks like:
 *
 *      https://www.pcjs.org/api/v1/dump?disk=/disks/pc/dos/ibm/2.00/PCDOS200-DISK1.json&format=img
 *
 * Similarly, our "FileDump API" used to look like:
 *
 *      http://pcjs.org/bin/convrom.php?rom=/devices/pc/rom/5150/1981-04-24/PCBIOS-REV1.rom&format=json
 *
 * and that request now looks like:
 *
 *      https://www.pcjs.org/api/v1/dump?file=/devices/pc/rom/5150/1981-04-24/PCBIOS-REV1.rom&format=json
 *
 * I don't think it makes sense to avoid "query" parameters, because blending the path of a disk image with the
 * the rest of the URL would be (a) confusing, and (b) more work to parse.
 */
var DumpAPI = {
    ENDPOINT:       "/api/v1/dump",
    QUERY: {
        DIR:        "dir",      // value is path of a directory (DiskDump only)
        DISK:       "disk",     // value is path of a disk image (DiskDump only)
        FILE:       "file",     // value is path of a ROM image file (FileDump only)
        IMG:        "img",      // alias for DISK
        PATH:       "path",     // value is path of a one or more files (DiskDump only)
        FORMAT:     "format",   // value is one of FORMAT values below
        COMMENTS:   "comments", // value is either "true" or "false"
        DECIMAL:    "decimal",  // value is either "true" to force all numbers to decimal, "false" or undefined otherwise
        MBHD:       "mbhd",     // value is hard drive size in Mb (formerly "mbsize") (DiskDump only) (DEPRECATED)
        SIZE:       "size"      // value is target disk size in Kb (supersedes "mbhd") (DiskDump only)
    },
    FORMAT: {
        JSON:       "json",     // default
        JSON_GZ:    "gz",       // gzip is currently used ONLY for compressed JSON
        DATA:       "data",     // same as "json", but built without JSON.stringify() (DiskDump only)
        HEX:        "hex",      // deprecated
        OCTAL:      "octal",    // displays data as octal words
        BYTES:      "bytes",    // displays data as hex bytes; normally used only when comments are enabled
        WORDS:      "words",    // displays data as hex words; normally used only when comments are enabled
        LONGS:      "longs",    // displays data as dwords
        IMG:        "img",      // returns the raw disk data (ie, using a Buffer object) (DiskDump only)
        ROM:        "rom"       // returns the raw file data (ie, using a Buffer object) (FileDump only)
    }
};

/*
 * Because we use an overloaded API endpoint (ie, one that's shared with the FileDump module), we must
 * also provide a list of commands which, when combined with the endpoint, define a unique request.
 */
DumpAPI.asDiskCommands = [DumpAPI.QUERY.DIR, DumpAPI.QUERY.DISK, DumpAPI.QUERY.PATH];
DumpAPI.asFileCommands = [DumpAPI.QUERY.FILE];


/**
 * @copyright https://www.pcjs.org/machines/shared/lib/reportapi.js (C) 2012-2025 Jeff Parsons
 */

var ReportAPI = {
    ENDPOINT:       "/api/v1/report",
    QUERY: {
        APP:        "app",
        VER:        "ver",
        URL:        "url",
        USER:       "user",
        TYPE:       "type",
        DATA:       "data"
    },
    TYPE: {
        BUG:        "bug"
    },
    RES: {
        OK:         "Thank you"
    }
};


/**
 * @copyright https://www.pcjs.org/machines/shared/lib/strlib.js (C) 2012-2025 Jeff Parsons
 */

class Str {
    /**
     * isValidInt(s, base)
     *
     * The built-in parseInt() function has the annoying feature of returning a partial value (ie,
     * up to the point where it encounters an invalid character); eg, parseInt("foo", 16) returns 0xf.
     *
     * So it's best to use our own Str.parseInt() function, which will in turn use this function to
     * validate the entire string.
     *
     * @param {string} s is the string representation of some number
     * @param {number} [base] is the radix to use (default is 10); only 2, 8, 10 and 16 are supported
     * @return {boolean} true if valid, false if invalid (or the specified base isn't supported)
     */
    static isValidInt(s, base)
    {
        if (!base || base == 10) return s.match(/^-?[0-9]+$/) !== null;
        if (base == 16) return s.match(/^-?[0-9a-f]+$/i) !== null;
        if (base == 8) return s.match(/^-?[0-7]+$/) !== null;
        if (base == 2) return s.match(/^-?[01]+$/) !== null;
        return false;
    }

    /**
     * parseInt(s, base)
     *
     * This is a wrapper around the built-in parseInt() function.  Our wrapper recognizes certain prefixes
     * ('$' or "0x" for hex, '#' or "0o" for octal) and suffixes ('.' for decimal, 'h' for hex, 'y' for
     * binary), and then calls isValidInt() to ensure we don't convert strings that contain partial values;
     * see isValidInt() for details.
     *
     * The use of multiple prefix/suffix combinations is undefined (although for the record, we process
     * prefixes first).  We do NOT support the "0b" prefix to indicate binary UNLESS one or more commas are
     * also present (because "0b" is also a valid hex sequence), and we do NOT support a single leading zero
     * to indicate octal (because such a number could also be decimal or hex).  Any number of commas are
     * allowed; we remove them all before calling the built-in parseInt().
     *
     * More recently, we've added support for "^D", "^O", and "^B" prefixes to accommodate the base overrides
     * that the PDP-10's MACRO-10 assembly language supports (decimal, octal, and binary, respectively).
     * If this support turns out to adversely affect other debuggers, then it will have to be "conditionalized".
     * Similarly, we've added support for "K", "M", and "G" MACRO-10-style suffixes that add 3, 6, or 9 zeros
     * to the value to be parsed, respectively.
     *
     * @param {string} s is the string representation of some number
     * @param {number} [base] is the radix to use (default is 10); can be overridden by prefixes/suffixes
     * @return {number|undefined} corresponding value, or undefined if invalid
     */
    static parseInt(s, base)
    {
        let value;

        if (s) {
            if (!base) base = 10;

            let ch, chPrefix, chSuffix;
            let fCommas = (s.indexOf(',') > 0);
            if (fCommas) s = s.replace(/,/g, '');

            ch = chPrefix = s.charAt(0);
            if (chPrefix == '#') {
                base = 8;
                chPrefix = '';
            }
            else if (chPrefix == '$') {
                base = 16;
                chPrefix = '';
            }
            if (ch != chPrefix) {
                s = s.substr(1);
            }
            else {
                ch = chPrefix = s.substr(0, 2);
                if (chPrefix == '0b' && fCommas || chPrefix == '^B') {
                    base = 2;
                    chPrefix = '';
                }
                else if (chPrefix == '0o' || chPrefix == '^O') {
                    base = 8;
                    chPrefix = '';
                }
                else if (chPrefix == '^D') {
                    base = 10;
                    chPrefix = '';
                }
                else if (chPrefix == '0x') {
                    base = 16;
                    chPrefix = '';
                }
                if (ch != chPrefix) s = s.substr(2);
            }
            ch = chSuffix = s.slice(-1);
            if (chSuffix == 'Y' || chSuffix == 'y') {
                base = 2;
                chSuffix = '';
            }
            else if (chSuffix == '.') {
                base = 10;
                chSuffix = '';
            }
            else if (chSuffix == 'H' || chSuffix == 'h') {
                base = 16;
                chSuffix = '';
            }
            else if (chSuffix == 'K') {
                chSuffix = '000';
            }
            else if (chSuffix == 'M') {
                chSuffix = '000000';
            }
            else if (chSuffix == 'G') {
                chSuffix = '000000000';
            }
            if (ch != chSuffix) s = s.slice(0, -1) + chSuffix;
            /*
             * This adds support for the MACRO-10 binary shifting (Bn) suffix, which must be stripped from the
             * number before parsing, and then applied to the value after parsing.  If n is omitted, 35 is assumed,
             * which is a net shift of zero.  If n < 35, then a left shift of (35 - n) is required; if n > 35, then
             * a right shift of -(35 - n) is required.
             */
            let v, shift = 0;
            if (base <= 10) {
                let match = s.match(/(-?[0-9]+)B([0-9]*)/);
                if (match) {
                    s = match[1];
                    shift = 35 - ((match[2] || 35) & 0xff);
                }
            }
            if (Str.isValidInt(s, base) && !isNaN(v = parseInt(s, base))) {
                /*
                 * With the need to support larger (eg, 36-bit) integers, truncating to 32 bits is no longer helpful.
                 *
                 *      value = v|0;
                 */
                if (shift) {
                    /*
                     * Since binary shifting is a logical operation, and since shifting by division only works properly
                     * with positive numbers, we must convert a negative value to a positive value, by computing the two's
                     * complement.
                     */
                    if (v < 0) v += Math.pow(2, 36);
                    if (shift > 0) {
                        v *= Math.pow(2, shift);
                    } else {
                        v = Math.trunc(v / Math.pow(2, -shift));
                    }
                }
                value = v;
            }
        }
        return value;
    }

    /**
     * toBase(n, radix, cch, sPrefix, nGrouping)
     *
     * Displays the given number as an unsigned integer using the specified radix and number of digits.
     *
     * @param {number|*} n
     * @param {number} radix (ie, the base)
     * @param {number} cch (the desired number of digits)
     * @param {string} [sPrefix] (default is none)
     * @param {number} [nGrouping]
     * @return {string}
     */
    static toBase(n, radix, cch, sPrefix = "", nGrouping = 0)
    {
        /*
         * We can't rely entirely on isNaN(), because isNaN(null) returns false, and we can't rely
         * entirely on typeof either, because typeof Nan returns "number".  Sigh.
         *
         * Alternatively, we could mask and shift n regardless of whether it's null/undefined/NaN,
         * since JavaScript coerces such operands to zero, but I think there's "value" in seeing those
         * values displayed differently.
         */
        let s = "";
        if (isNaN(n) || typeof n != "number") {
            n = null;
        } else {
            /*
             * Callers that produced an input by dividing by a power of two rather than shifting (in order
             * to access more than 32 bits) may produce a fractional result, which ordinarily we would simply
             * ignore, but if the integer portion is zero and the sign is negative, we should probably treat
             * this value as a sign-extension.
             */
            if (n < 0 && n > -1) n = -1;
            /*
             * Negative values should be two's complemented according to the number of digits; for example,
             * 12 octal digits implies an upper limit 8^12.
             */
            if (n < 0) {
                n += Math.pow(radix, cch);
            }
            if (n >= Math.pow(radix, cch)) {
                cch = Math.ceil(Math.log(n) / Math.log(radix));
            }
        }
        let g = nGrouping || -1;
        while (cch-- > 0) {
            if (!g) {
                s = ',' + s;
                g = nGrouping;
            }
            if (n == null) {
                s = '?' + s;
            } else {
                let d = n % radix;
                d += (d >= 0 && d <= 9? 0x30 : 0x41 - 10);
                s = String.fromCharCode(d) + s;
                n = Math.trunc(n / radix);
            }
            g--;
        }
        return sPrefix + s;
    }

    /**
     * toBin(n, cch, nGrouping)
     *
     * Converts an integer to binary, with the specified number of digits (up to a maximum of 36).
     *
     * @param {number|*} n (supports integers up to 36 bits now)
     * @param {number} [cch] is the desired number of binary digits (0 or undefined for default of either 8, 18, or 36)
     * @param {number} [nGrouping]
     * @return {string} the binary representation of n
     */
    static toBin(n, cch, nGrouping)
    {
        if (!cch) {
            // cch = Math.ceil(Math.log(Math.abs(n) + 1) / Math.LN2) || 1;
            let v = Math.abs(n);
            if (v <= 0b11111111) {
                cch = 8;
            } else if (v <= 0b111111111111111111) {
                cch = 18;
            } else {
                cch = 36;
            }
        } else if (cch > 36) cch = 36;
        return Str.toBase(n, 2, cch, "", nGrouping);
    }

    /**
     * toBinBytes(n, cb, fPrefix)
     *
     * Converts an integer to binary, with the specified number of bytes (up to the default of 4).
     *
     * @param {number|null|undefined} n (interpreted as a 32-bit value)
     * @param {number} [cb] is the desired number of binary bytes (4 is both the default and the maximum)
     * @param {boolean} [fPrefix]
     * @return {string} the binary representation of n
     */
    static toBinBytes(n, cb, fPrefix)
    {
        let s = "";
        if (!cb || cb > 4) cb = 4;
        for (let i = 0; i < cb; i++) {
            if (s) s = ',' + s;
            s = Str.toBin(n & 0xff, 8) + s;
            n >>= 8;
        }
        return (fPrefix? "0b" : "") + s;
    }

    /**
     * toOct(n, cch, fPrefix)
     *
     * Converts an integer to octal, with the specified number of digits (default of 6; max of 12)
     *
     * You might be tempted to use the built-in n.toString(8) instead, but it doesn't zero-pad and it
     * doesn't properly convert negative values.  Moreover, if n is undefined, n.toString() will throw
     * an exception, whereas this function will return '?' characters.
     *
     * @param {number|*} n (supports integers up to 36 bits now)
     * @param {number} [cch] is the desired number of octal digits (0 or undefined for default of either 6, 8, or 12)
     * @param {boolean} [fPrefix]
     * @return {string} the octal representation of n
     */
    static toOct(n, cch, fPrefix)
    {
        if (!cch) {
            // cch = Math.ceil(Math.log(Math.abs(n) + 1) / Math.log(8)) || 1;
            let v = Math.abs(n);
            if (v <= 0o777777) {
                cch = 6;
            } else if (v <= 0o77777777) {
                cch = 8;
            } else {
                cch = 12;
            }
        } else if (cch > 12) cch = 12;
        return Str.toBase(n, 8, cch, fPrefix? "0o" : "");
    }

    /**
     * toDec(n, cch)
     *
     * Converts an integer to decimal, with the specified number of digits (default of 5; max of 11)
     *
     * You might be tempted to use the built-in n.toString(10) instead, but it doesn't zero-pad and it
     * doesn't properly convert negative values.  Moreover, if n is undefined, n.toString() will throw
     * an exception, whereas this function will return '?' characters.
     *
     * @param {number|*} n (supports integers up to 36 bits now)
     * @param {number} [cch] is the desired number of decimal digits (0 or undefined for default of either 5 or 11)
     * @return {string} the decimal representation of n
     */
    static toDec(n, cch)
    {
        if (!cch) {
            // cch = Math.ceil(Math.log(Math.abs(n) + 1) / Math.LN10) || 1;
            let v = Math.abs(n);
            if (v <= 99999) {
                cch = 5;
            } else {
                cch = 11;
            }
        } else if (cch > 11) cch = 11;
        return Str.toBase(n, 10, cch);
    }

    /**
     * toHex(n, cch, fPrefix)
     *
     * Converts an integer to hex, with the specified number of digits (default of 4 or 8, max of 9).
     *
     * You might be tempted to use the built-in n.toString(16) instead, but it doesn't zero-pad and it
     * doesn't properly convert negative values; for example, if n is -2147483647, then n.toString(16)
     * will return "-7fffffff" instead of "80000001".  Moreover, if n is undefined, n.toString() will
     * throw an exception, whereas this function will return '?' characters.
     *
     * NOTE: The following work-around (adapted from code found on StackOverflow) would be another solution,
     * taking care of negative values, zero-padding, and upper-casing, but not null/undefined/NaN values:
     *
     *      s = (n < 0? n + 0x100000000 : n).toString(16);
     *      s = "00000000".substr(0, 8 - s.length) + s;
     *      s = s.substr(0, cch).toUpperCase();
     *
     * @param {number|*} n (supports integers up to 36 bits now)
     * @param {number} [cch] is the desired number of hex digits (0 or undefined for default of either 4, 8, or 9)
     * @param {boolean} [fPrefix]
     * @return {string} the hex representation of n
     */
    static toHex(n, cch, fPrefix)
    {
        if (!cch) {
            // cch = Math.ceil(Math.log(Math.abs(n) + 1) / Math.log(16)) || 1;
            let v = Math.abs(n);
            if (v <= 0xffff) {
                cch = 4;
            } else if (v <= 0xffffffff) {
                cch = 8;
            } else {
                cch = 9;
            }
        } else if (cch > 9) cch = 9;
        return Str.toBase(n, 16, cch, fPrefix? "0x" : "");
    }

    /**
     * toHexByte(b)
     *
     * Alias for Str.toHex(b, 2, true)
     *
     * @param {number|null|undefined} b is a byte value
     * @return {string} the hex representation of b
     */
    static toHexByte(b)
    {
        return Str.toHex(b, 2, true);
    }

    /**
     * toHexWord(w)
     *
     * Alias for Str.toHex(w, 4, true)
     *
     * @param {number|null|undefined} w is a word (16-bit) value
     * @return {string} the hex representation of w
     */
    static toHexWord(w)
    {
        return Str.toHex(w, 4, true);
    }

    /**
     * toHexLong(l)
     *
     * Alias for Str.toHex(l, 8, true)
     *
     * @param {number|null|undefined} l is a dword (32-bit) value
     * @return {string} the hex representation of w
     */
    static toHexLong(l)
    {
        return Str.toHex(l, 8, true);
    }

    /**
     * getBaseName(sFileName, fStripExt)
     *
     * This is a poor-man's version of Node's path.basename(), which Node-only components should use instead.
     *
     * Note that if fStripExt is true, this strips ANY extension, whereas path.basename() strips the extension only
     * if it matches the second parameter (eg, path.basename("/foo/bar/baz/asdf/quux.html", ".html") returns "quux").
     *
     * @param {string} sFileName
     * @param {boolean} [fStripExt]
     * @return {string}
     */
    static getBaseName(sFileName, fStripExt)
    {
        let sBaseName = sFileName;

        let i = sFileName.lastIndexOf('/');
        if (i >= 0) sBaseName = sFileName.substr(i + 1);

        /*
         * This next bit is a kludge to clean up names that are part of a URL that includes unsightly query parameters.
         */
        i = sBaseName.indexOf('&');
        if (i > 0) sBaseName = sBaseName.substr(0, i);

        if (fStripExt) {
            i = sBaseName.lastIndexOf(".");
            if (i > 0) {
                sBaseName = sBaseName.substring(0, i);
            }
        }
        return sBaseName;
    }

    /**
     * getExtension(sFileName)
     *
     * This is a poor-man's version of Node's path.extname(), which Node-only components should use instead.
     *
     * Note that we EXCLUDE the period from the returned extension, whereas path.extname() includes it.
     *
     * @param {string} sFileName
     * @return {string} the filename's extension (in lower-case and EXCLUDING the "."), or an empty string
     */
    static getExtension(sFileName)
    {
        let sExtension = "";
        let i = sFileName.lastIndexOf(".");
        if (i >= 0) {
            sExtension = sFileName.substr(i + 1).toLowerCase();
            if (sExtension == "json5") sExtension = "json";
        }
        return sExtension;
    }

    /**
     * endsWith(s, sSuffix)
     *
     * @param {string} s
     * @param {string} sSuffix
     * @return {boolean} true if s ends with sSuffix, false if not
     */
    static endsWith(s, sSuffix)
    {
        return s.indexOf(sSuffix, s.length - sSuffix.length) !== -1;
    }

    /**
     * escapeHTML(sHTML)
     *
     * @param {string} sHTML
     * @return {string} with special characters "escaped" as HTML entities, similar to PHP's htmlspecialchars()
     */
    static escapeHTML(sHTML)
    {
        /*
         * Most recently, '$' was added to the list to help avoid problems when callers use the resulting string
         * as a replacement string for JavaScript's string replace() function, which treats '$' specially.  Technically,
         * that's on the callers of replace(), not us, but this doesn't seem harmful, and it's definitely helpful.
         */
        return sHTML.replace(/[&<>"'$]/g, function(m)
        {
            return Str.HTMLEscapeMap[m];
        });
    }

    /**
     * replace(sSearch, sReplace, s)
     *
     * The JavaScript replace() function ALWAYS interprets "$" specially in replacement strings, even when
     * the search string is NOT a RegExp; specifically:
     *
     *      $$  Inserts a "$"
     *      $&  Inserts the matched substring
     *      $`  Inserts the portion of the string that precedes the matched substring
     *      $'  Inserts the portion of the string that follows the matched substring
     *      $n  Where n is a positive integer less than 100, inserts the nth parenthesized sub-match string,
     *          provided the first argument was a RegExp object
     *
     * So, if a replacement string containing dollar signs passes through a series of replace() calls, untold
     * problems could result.  Hence, this function, which simply uses the replacement string as-is.
     *
     * Similar to the JavaScript replace() method (when sSearch is a string), this replaces only ONE occurrence
     * (ie, the FIRST occurrence); it might be nice to add options to replace the LAST occurrence and/or ALL
     * occurrences, but we'll revisit that later.
     *
     * @param {string} sSearch
     * @param {string} sReplace
     * @param {string} s
     * @return {string}
     */
    static replace(sSearch, sReplace, s)
    {
        let i = s.indexOf(sSearch);
        if (i >= 0) {
            s = s.substr(0, i) + sReplace + s.substr(i + sSearch.length);
        }
        return s;
    }

    /**
     * replaceAll(sSearch, sReplace, s)
     *
     * @param {string} sSearch
     * @param {string} sReplace
     * @param {string} s
     * @return {string}
     */
    static replaceAll(sSearch, sReplace, s)
    {
        let a = {};
        a[sSearch] = sReplace;
        return Str.replaceArray(a, s);
    }

    /**
     * replaceArray(a, s)
     *
     * @param {Object} a
     * @param {string} s
     * @return {string}
     */
    static replaceArray(a, s)
    {
        let sMatch = "";
        for (let k in a) {
            /*
             * As noted in:
             *
             *      http://www.regexguru.com/2008/04/escape-characters-only-when-necessary/
             *
             * inside character classes, only backslash, caret, hyphen and the closing bracket need to be
             * escaped.  And in fact, if you ensure that the closing bracket is first, the caret is not first,
             * and the hyphen is last, you can avoid escaping those as well.
             */
            k = k.replace(/([\\[\]*{}().+?|$])/g, "\\$1");
            sMatch += (sMatch? '|' : '') + k;
        }
        return s.replace(new RegExp('(' + sMatch + ')', "g"), function(m)
        {
            return a[m];
        });
    }

    /**
     * pad(s, cch, fPadLeft)
     *
     * NOTE: the maximum amount of padding currently supported is 40 spaces.
     *
     * @param {string} s is a string
     * @param {number} cch is desired length
     * @param {boolean} [fPadLeft] (default is padding on the right)
     * @return {string} the original string (s) with spaces padding it to the specified length
     */
    static pad(s, cch, fPadLeft)
    {
        let sPadding = "                                        ";
        return fPadLeft? (sPadding + s).slice(-cch) : (s + sPadding).slice(0, cch);
    }

    /**
     * parseDate(date)
     * parseDate(date, time)
     * parseDate(year, month, day, hour, minute, second)
     *
     * Produces a UTC date when ONLY a date (no time) is provided; otherwise, it combines the date and
     * and time, producing a date that is either UTC or local, depending on the presence (or lack) of time
     * zone information.  Finally, if numeric inputs are provided, then Date.UTC() is called to generate
     * a UTC time.
     *
     * In general, you should use this instead of new Date(s), because the Date constructor implicitly calls
     * Date.parse(s), which behaves inconsistently.  For example, ISO date-only strings (e.g. "1970-01-01")
     * generate a UTC time, but non-ISO date-only strings (eg, "10/1/1945" or "October 1, 1945") generate a
     * local time.
     *
     * @param {...} args
     * @return {Date} (UTC unless a time string with a non-GMT timezone is explicitly provided)
     */
    static parseDate(...args)
    {
        let date;
        if (args[0] === undefined) {
            date = new Date(Date.now());
        }
        else if (typeof args[0] === "string") {
            date = new Date(args[0] + ' ' + (args[1] || "00:00:00 GMT"));
        }
        else if (args[1] === undefined) {
            date = new Date(args[0]);
        } else {
            date = new Date(Date.UTC(...args));
        }
        return date;
    }

    /**
     * isValidDate(date)
     *
     * @param {Date} date
     * @return {boolean}
     */
    static isValidDate(date)
    {
        return !isNaN(date.getTime());
    }

    /**
     * sprintf(format, ...args)
     *
     * Copied from the CCjs project (https://github.com/jeffpar/ccjs/blob/master/lib/stdio.js) and extended.
     * Far from complete, let alone sprintf-compatible, but it's adequate for the handful of sprintf-style format
     * specifiers that I use.
     *
     * TODO: The %c and %s specifiers support a negative width for left-justified output, but the numeric specifiers
     * (eg, %d and %x) do not; they support only positive widths and right-justified output.  That's one of the more
     * glaring omissions at the moment.
     *
     * @param {string} format
     * @param {...} args
     * @return {string}
     */
    static sprintf(format, ...args)
    {
        /*
         * This isn't just a nice optimization; it's also important if the caller is simply trying
         * to printf() a string that may also contain '%' and doesn't want or expect any formatting.
         */
        if (!args || !args.length) {
            return format;
        }

        let buffer = "";
        let aParts = format.split(/%([-+ 0#]*)([0-9]*|\*)(\.[0-9]+|)([hlL]?)([A-Za-z%])/);

        let iArg = 0, iPart;
        for (iPart = 0; iPart < aParts.length - 6; iPart += 6) {

            buffer += aParts[iPart];
            let arg, type = aParts[iPart+5];

            /*
             * Check for unrecognized types immediately, so we don't inadvertently pop any arguments;
             * the first 12 ("ACDFHIMNSTWY") are for our non-standard Date extensions (see below).
             *
             * For reference purposes, the standard ANSI C set of format types is: "dioxXucsfeEgGpn%".
             */
            let iType = "ACDFHIMNSTWYbdfjcsoXx%".indexOf(type);
            if (iType < 0) {
                buffer += '%' + aParts[iPart+1] + aParts[iPart+2] + aParts[iPart+3] + aParts[iPart+4] + type;
                continue;
            }

            if (iArg < args.length) {
                arg = args[iArg];
                if (type != '%') iArg++;
            } else {
                arg = args[args.length-1];
            }
            let flags = aParts[iPart+1];
            let hash = flags.indexOf('#') >= 0;
            let zeroPad = flags.indexOf('0') >= 0;
            let width = aParts[iPart+2];
            if (width == '*') {
                width = arg;
                if (iArg < args.length) {
                    arg = args[iArg++];
                } else {
                    arg = args[args.length-1];
                }
            } else {
                width = +width || 0;
            }
            let precision = aParts[iPart+3];
            precision = precision? +precision.substr(1) : -1;
            // let length = aParts[iPart+4];       // eg, 'h', 'l' or 'L' (all currently ignored)
            let ach = null, s, radix = 0, prefix = "";

            /*
             * The following non-standard sprintf() format codes provide handy alternatives to the
             * PHP date() format codes that we used to use with the old datelib.formatDate() function:
             *
             *      a:  lowercase ante meridiem and post meridiem (am or pm)                %A
             *      d:  day of the month, 2 digits with leading zeros (01, 02, ..., 31)     %02D
             *      D:  3-letter day of the week ("Sun", "Mon", ..., "Sat")                 %.3W
             *      F:  month ("January", "February", ..., "December")                      %F
             *      g:  hour in 12-hour format, without leading zeros (1, 2, ..., 12)       %G
             *      h:  hour in 24-hour format, without leading zeros (0, 1, ..., 23)       %H
             *      H:  hour in 24-hour format, with leading zeros (00, 01, ..., 23)        %02H
             *      i:  minutes, with leading zeros (00, 01, ..., 59)                       %02N
             *      j:  day of the month, without leading zeros (1, 2, ..., 31)             %D
             *      l:  day of the week ("Sunday", "Monday", ..., "Saturday")               %W
             *      m:  month, with leading zeros (01, 02, ..., 12)                         %02M
             *      M:  3-letter month ("Jan", "Feb", ..., "Dec")                           %.3F
             *      n:  month, without leading zeros (1, 2, ..., 12)                        %M
             *      s:  seconds, with leading zeros (00, 01, ..., 59)                       %02S
             *      y:  2-digit year (eg, 14)                                               %0.2Y
             *      Y:  4-digit year (eg, 2014)                                             %Y
             *
             * We also support a few custom format codes:
             *
             *      %C:  calendar output (equivalent to: %W, %F %D, %Y)
             *      %T:  timestamp output (equivalent to: %Y-%02M-%02D %02H:%02N:%02S)
             *
             * Use the optional '#' flag with any of the above '%' format codes to produce UTC results
             * (eg, '%#G' instead of '%G').
             *
             * The %A, %F, and %W types act as strings (which support the '-' left justification flag, as well as
             * the width and precision options), and the rest act as integers (which support the '0' padding flag
             * and the width option).  Also, while %Y does act as an integer, it also supports truncation using the
             * precision option (normally, integers do not); this enables a variable number of digits for the year.
             *
             * So old code like this:
             *
             *      printf("%s\n", formatDate("l, F j, Y", date));
             *
             * can now be written like this:
             *
             *      printf("%W, %F %D, %Y\n", date, date, date, date);
             *
             * or even more succinctly, as:
             *
             *      printf("%C\n", date);
             *
             * In fact, even the previous example can be written more succinctly as:
             *
             *      printf("%W, %F %D, %Y\n", date);
             *
             * because unlike the C runtime, we reuse the final parameter once the format string has exhausted all parameters.
             */
            let ch, date = /** @type {Date} */ (iType < 12 && typeof arg != "object"? Str.parseDate(arg) : arg), dateUndefined;

            switch(type) {
            case 'C':
                ch = hash? '#' : '';
                buffer += (Str.isValidDate(date)? Str.sprintf(Str.sprintf("%%%sW, %%%sF %%%sD, %%%sY", ch), date) : dateUndefined);
                continue;

            case 'D':
                arg = hash? date.getUTCDate() : date.getDate();
                type = 'd';
                break;

            case 'A':
            case 'G':
            case 'H':
                arg = hash? date.getUTCHours() : date.getHours();
                if (type == 'A') {
                    arg = (arg < 12 ? "am" : "pm");
                    type = 's';
                }
                else {
                    if (type == 'G') {
                        arg = (!arg? 12 : (arg > 12 ? arg - 12 : arg));
                    }
                    type = 'd';
                }
                break;

            case 'F':
            case 'M':
                arg = hash? date.getUTCMonth() : date.getMonth();
                if (type == 'F') {
                    arg = Str.NamesOfMonths[arg];
                    type = 's';
                } else {
                    arg++;
                    type = 'd';
                }
                break;

            case 'N':
                arg = hash? date.getUTCMinutes() : date.getMinutes();
                type = 'd';
                break;

            case 'S':
                arg = hash? date.getUTCSeconds() : date.getSeconds();
                type = 'd'
                break;

            case 'T':
                ch = hash? '#' : '';
                buffer += (Str.isValidDate(date)? Str.sprintf(Str.sprintf("%%%sY-%%%s02M-%%%s02D %%%s02H:%%%s02N:%%%s02S", ch), date) : dateUndefined);
                continue;

            case 'W':
                arg = Str.NamesOfDays[hash? date.getUTCDay() : date.getDay()];
                type = 's';
                break;

            case 'Y':
                arg = hash? date.getUTCFullYear() : date.getFullYear();
                if (precision > 0) {
                    arg = arg % (Math.pow(10, precision));
                    precision = -1;
                }
                type = 'd';
                break;
            }

            switch(type) {
            case 'b':
                /*
                 * This is a non-standard format specifier that seems handy.
                 */
                buffer += (arg? "true" : "false");
                break;

            case 'd':
                /*
                 * I could use "arg |= 0", but there may be some value to supporting integers > 32 bits,
                 * so I use Math.trunc() instead.  Bit-wise operators also mask a lot of evils, by converting
                 * complete nonsense into zero, so while I'm ordinarily a fan, that's not desirable here.
                 *
                 * Other (hidden) advantages of Math.trunc(): it automatically converts strings, it honors
                 * numeric prefixes (the traditional "0x" for hex and the newer "0o" for octal), and it returns
                 * NaN if the ENTIRE string cannot be converted.
                 *
                 * parseInt(), which would seem to be the more logical choice here, doesn't understand "0o",
                 * doesn't return NaN if non-digits are embedded in the string, and doesn't behave consistently
                 * across all browsers when parsing older octal values with a leading "0"; Math.trunc() doesn't
                 * recognize those octal values either, but I'm OK with that, as long as it CONSISTENTLY doesn't
                 * recognize them.
                 *
                 * That last problem is why some recommend you ALWAYS pass a radix to parseInt(), but that
                 * forces you to parse the string first and determine the proper radix; otherwise, you end up
                 * with NEW inconsistencies.  For example, if radix is 10 and the string is "0x10", the result
                 * is zero, since parseInt() happily stops parsing when it reaches the first non-radix 10 digit.
                 */
                arg = Math.trunc(arg);
                /*
                 * Before falling into the decimal floating-point code, we take this opportunity to convert
                 * the precision value, if any, to the minimum number of digits to print.  Which basically means
                 * setting zeroPad to true and width to precision, and then unsetting precision.
                 *
                 * TODO: This isn't quite accurate.  For example, printf("%6.3d", 3) should print "   003", not
                 * "000003".  But once again, this isn't a common enough case to worry about.
                 */
                if (precision >= 0) {
                    zeroPad = true;
                    if (width < precision) width = precision;
                    precision = -1;
                }
                /* falls through */

            case 'f':
                s = arg + "";
                if (precision >= 0) {
                    s = arg.toFixed(precision);
                }
                if (s.length < width) {
                    if (zeroPad) {
                        if (arg < 0) {
                            width--;
                            s = s.substr(1);
                        }
                        s = ("0000000000" + s).slice(-width);
                        if (arg < 0) s = '-' + s;
                    } else {
                        s = ("          " + s).slice(-width);
                    }
                }
                buffer += s;
                break;

            case 'j':
                /*
                 * 'j' is one of our non-standard extensions to the sprintf() interface; it signals that
                 * the caller is providing an Object that should be rendered as JSON.  If a width is included
                 * (eg, "%2j"), it's used as an indentation value; otherwise, no whitespace is added.
                 */
                buffer += JSON.stringify(arg, null, width || undefined);
                break;

            case 'c':
                arg = typeof arg == "string"? arg[0] : String.fromCharCode(arg);
                /* falls through */

            case 's':
                /*
                 * 's' includes some non-standard benefits, such as coercing non-strings to strings first;
                 * we know undefined and null values don't have a toString() method, but hopefully everything
                 * else does.
                 */
                if (arg != undefined) {
                    if (typeof arg != "string") {
                        arg = arg.toString();
                    }
                    if (precision >= 0) {
                        arg = arg.substr(0, precision);
                    }
                    while (arg.length < width) {
                        if (flags.indexOf('-') >= 0) {
                            arg += ' ';
                        } else {
                            arg = ' ' + arg;
                        }
                    }
                }
                buffer += arg;
                break;

            case 'o':
                radix = 8;
                if (hash) prefix = "0";
                /* falls through */

            case 'X':
                ach = Str.HexUpperCase;
                // if (hash) prefix = "0X";     // I don't like that %#X uppercases both the prefix and the value
                /* falls through */

            case 'x':
                s = "";
                if (!radix) radix = 16;
                if (!prefix && hash) prefix = "0x";
                if (!ach) ach = Str.HexLowerCase;
                /*
                 * For all the same reasons articulated above (for type 'd'), we pass the arg through Math.trunc(),
                 * and we honor precision, if any, as the minimum number of digits to print.
                 */
                arg = Math.trunc(arg);
                if (precision >= 0) {
                    zeroPad = true;
                    if (width < precision) width = precision;
                    precision = -1;
                }
                if (zeroPad && !width) {
                    /*
                     * Here we replicate a bit of logic from toHex(), which selects a width based on the value, and
                     * is triggered by the format specification "%0x", where zero-padding is requested without a width.
                     */
                    let v = Math.abs(arg);
                    if (v <= 0xff) {
                        width = 2;
                    } else if (v <= 0xffff) {
                        width = 4;
                    } else if (v <= 0xffffffff) {
                        width = 8;
                    } else {
                        width = 9;
                    }
                    width += prefix.length;
                }
                width -= prefix.length;
                do {
                    let d = arg & (radix - 1);
                    arg >>>= (radix == 16? 4 : 3);
                    if (zeroPad || !s || d || arg) {
                        s = ach[d] + s;
                    } else {
                        if (prefix) {
                            s = prefix + s;
                            prefix = "";
                        }
                        if (width > 0) s = ' ' + s;
                    }
                } while (--width > 0 || arg);
                buffer += prefix + s;
                break;

            case '%':
                buffer += '%';
                break;

            default:
                buffer += "(unimplemented printf type %" + type + ")";
                break;
            }
        }

        buffer += aParts[iPart];
        return buffer;
    }

    /**
     * stripLeadingZeros(s, fPad)
     *
     * @param {string} s
     * @param {boolean} [fPad]
     * @return {string}
     */
    static stripLeadingZeros(s, fPad)
    {
        let cch = s.length;
        s = s.replace(/^0+([0-9A-F]+)$/i, "$1");
        if (fPad) s = Str.pad(s, cch, true);
        return s;
    }

    /**
     * trim(s)
     *
     * @param {string} s
     * @return {string}
     */
    static trim(s)
    {
        if (String.prototype.trim) {
            return s.trim();
        }
        return s.replace(/^\s+|\s+$/g, "");
    }

    /**
     * toASCIICode(b)
     *
     * @param {number} b
     * @return {string}
     */
    static toASCIICode(b)
    {
        let s;
        if (b != Str.ASCII.CR && b != Str.ASCII.LF) {
            s = Str.ASCIICodeMap[b];
        }
        if (s) {
            s = '<' + s + '>';
        } else {
            s = String.fromCharCode(b);
        }
        return s;
    }
}

/*
 * Map special characters to their HTML escape sequences.
 */
Str.HTMLEscapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
    '$': '&dollar;'
};

/*
 * Map "unprintable" ASCII codes to mnemonics, to more clearly see what's being printed.
 */
Str.ASCIICodeMap = {
    0x00:   "NUL",
    0x01:   "SOH",      // (CTRL_A) Start of Heading
    0x02:   "STX",      // (CTRL_B) Start of Text
    0x03:   "ETX",      // (CTRL_C) End of Text
    0x04:   "EOT",      // (CTRL_D) End of Transmission
    0x05:   "ENQ",      // (CTRL_E) Enquiry
    0x06:   "ACK",      // (CTRL_F) Acknowledge
    0x07:   "BEL",      // (CTRL_G) Bell
    0x08:   "BS",       // (CTRL_H) Backspace
    0x09:   "TAB",      // (CTRL_I) Horizontal Tab (aka HT)
    0x0A:   "LF",       // (CTRL_J) Line Feed (New Line)
    0x0B:   "VT",       // (CTRL_K) Vertical Tab
    0x0C:   "FF",       // (CTRL_L) Form Feed (New Page)
    0x0D:   "CR",       // (CTRL_M) Carriage Return
    0x0E:   "SO",       // (CTRL_N) Shift Out
    0x0F:   "SI",       // (CTRL_O) Shift In
    0x10:   "DLE",      // (CTRL_P) Data Link Escape
    0x11:   "XON",      // (CTRL_Q) Device Control 1 (aka DC1)
    0x12:   "DC2",      // (CTRL_R) Device Control 2
    0x13:   "XOFF",     // (CTRL_S) Device Control 3 (aka DC3)
    0x14:   "DC4",      // (CTRL_T) Device Control 4
    0x15:   "NAK",      // (CTRL_U) Negative Acknowledge
    0x16:   "SYN",      // (CTRL_V) Synchronous Idle
    0x17:   "ETB",      // (CTRL_W) End of Transmission Block
    0x18:   "CAN",      // (CTRL_X) Cancel
    0x19:   "EM",       // (CTRL_Y) End of Medium
    0x1A:   "SUB",      // (CTRL_Z) Substitute
    0x1B:   "ESC",      // Escape
    0x1C:   "FS",       // File Separator
    0x1D:   "GS",       // Group Separator
    0x1E:   "RS",       // Record Separator
    0x1F:   "US",       // Unit Separator
    0x7F:   "DEL"
};

/*
 * Refer to: https://en.wikipedia.org/wiki/Code_page_437
 */
Str.CP437ToUnicode = [
    '\u0000', '\u263A', '\u263B', '\u2665', '\u2666', '\u2663', '\u2660', '\u2022',
    '\u25D8', '\u25CB', '\u25D9', '\u2642', '\u2640', '\u266A', '\u266B', '\u263C',
    '\u25BA', '\u25C4', '\u2195', '\u203C', '\u00B6', '\u00A7', '\u25AC', '\u21A8',
    '\u2191', '\u2193', '\u2192', '\u2190', '\u221F', '\u2194', '\u25B2', '\u25BC',
    '\u0020', '\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027',
    '\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F',
    '\u0030', '\u0031', '\u0032', '\u0033', '\u0034', '\u0035', '\u0036', '\u0037',
    '\u0038', '\u0039', '\u003A', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F',
    '\u0040', '\u0041', '\u0042', '\u0043', '\u0044', '\u0045', '\u0046', '\u0047',
    '\u0048', '\u0049', '\u004A', '\u004B', '\u004C', '\u004D', '\u004E', '\u004F',
    '\u0050', '\u0051', '\u0052', '\u0053', '\u0054', '\u0055', '\u0056', '\u0057',
    '\u0058', '\u0059', '\u005A', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F',
    '\u0060', '\u0061', '\u0062', '\u0063', '\u0064', '\u0065', '\u0066', '\u0067',
    '\u0068', '\u0069', '\u006A', '\u006B', '\u006C', '\u006D', '\u006E', '\u006F',
    '\u0070', '\u0071', '\u0072', '\u0073', '\u0074', '\u0075', '\u0076', '\u0077',
    '\u0078', '\u0079', '\u007A', '\u007B', '\u007C', '\u007D', '\u007E', '\u2302',
    '\u00C7', '\u00FC', '\u00E9', '\u00E2', '\u00E4', '\u00E0', '\u00E5', '\u00E7',
    '\u00EA', '\u00EB', '\u00E8', '\u00EF', '\u00EE', '\u00EC', '\u00C4', '\u00C5',
    '\u00C9', '\u00E6', '\u00C6', '\u00F4', '\u00F6', '\u00F2', '\u00FB', '\u00F9',
    '\u00FF', '\u00D6', '\u00DC', '\u00A2', '\u00A3', '\u00A5', '\u20A7', '\u0192',
    '\u00E1', '\u00ED', '\u00F3', '\u00FA', '\u00F1', '\u00D1', '\u00AA', '\u00BA',
    '\u00BF', '\u2310', '\u00AC', '\u00BD', '\u00BC', '\u00A1', '\u00AB', '\u00BB',
    '\u2591', '\u2592', '\u2593', '\u2502', '\u2524', '\u2561', '\u2562', '\u2556',
    '\u2555', '\u2563', '\u2551', '\u2557', '\u255D', '\u255C', '\u255B', '\u2510',
    '\u2514', '\u2534', '\u252C', '\u251C', '\u2500', '\u253C', '\u255E', '\u255F',
    '\u255A', '\u2554', '\u2569', '\u2566', '\u2560', '\u2550', '\u256C', '\u2567',
    '\u2568', '\u2564', '\u2565', '\u2559', '\u2558', '\u2552', '\u2553', '\u256B',
    '\u256A', '\u2518', '\u250C', '\u2588', '\u2584', '\u258C', '\u2590', '\u2580',
    '\u03B1', '\u00DF', '\u0393', '\u03C0', '\u03A3', '\u03C3', '\u00B5', '\u03C4',
    '\u03A6', '\u0398', '\u03A9', '\u03B4', '\u221E', '\u03C6', '\u03B5', '\u2229',
    '\u2261', '\u00B1', '\u2265', '\u2264', '\u2320', '\u2321', '\u00F7', '\u2248',
    '\u00B0', '\u2219', '\u00B7', '\u221A', '\u207F', '\u00B2', '\u25A0', '\u00A0'
];

/*
 * TODO: Future home of a complete ASCII table.
 */
Str.ASCII = {
    LF:     0x0A,
    CR:     0x0D
};

Str.TYPES = {
    NULL:       0,
    BYTE:       1,
    WORD:       2,
    DWORD:      3,
    NUMBER:     4,
    STRING:     5,
    BOOLEAN:    6,
    OBJECT:     7,
    ARRAY:      8
};

Str.HexLowerCase = "0123456789abcdef";
Str.HexUpperCase = "0123456789ABCDEF";
Str.NamesOfDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
Str.NamesOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


/**
 * @copyright https://www.pcjs.org/machines/shared/lib/usrlib.js (C) 2012-2025 Jeff Parsons
 */


/** @typedef {{ mask: number, shift: number }} */
let BitField;

/** @typedef {Object.<BitField>} */
let BitFields;

class Usr {
    /**
     * binarySearch(a, v, fnCompare)
     *
     * @param {Array} a is an array
     * @param {number|string|Array|Object} v
     * @param {function((number|string|Array|Object), (number|string|Array|Object))} [fnCompare]
     * @return {number} the index of matching entry if non-negative, otherwise the index of the insertion point
     */
    static binarySearch(a, v, fnCompare)
    {
        let left = 0;
        let right = a.length;
        let found = 0;
        if (fnCompare === undefined) {
            fnCompare = function(a, b)
            {
                return a > b ? 1 : a < b ? -1 : 0;
            };
        }
        while (left < right) {
            let middle = (left + right) >> 1;
            let compareResult;
            compareResult = fnCompare(v, a[middle]);
            if (compareResult > 0) {
                left = middle + 1;
            } else {
                right = middle;
                found = !compareResult;
            }
        }
        return found ? left : ~left;
    }

    /**
     * binaryInsert(a, v, fnCompare)
     *
     * If element v already exists in array a, the array is unchanged (we don't allow duplicates); otherwise, the
     * element is inserted into the array at the appropriate index.
     *
     * @param {Array} a is an array
     * @param {number|string|Array|Object} v is the value to insert
     * @param {function((number|string|Array|Object), (number|string|Array|Object))} [fnCompare]
     */
    static binaryInsert(a, v, fnCompare)
    {
        let index = Usr.binarySearch(a, v, fnCompare);
        if (index < 0) {
            a.splice(-(index + 1), 0, v);
        }
    }

    /**
     * getTimestamp()
     *
     * @return {string} timestamp containing the current date and time ("yyyy-mm-dd hh:mm:ss")
     */
    static getTimestamp()
    {
        let date = new Date();
        return Str.sprintf("%T", date);
    }

    /**
     * getMonthDays(nMonth, nYear)
     *
     * NOTE: If we're being called on behalf of the PCx86 RTC, its year is always truncated to two digits (mod 100),
     * so we have no idea what century the year 0 might refer to.  When using the normal leap-year formula, 0 fails
     * the mod 100 test but passes the mod 400 test, so as far as the RTC is concerned, every century year is a leap
     * year.  Since we're most likely dealing with the year 2000, that's fine, since 2000 was also a leap year.
     *
     * TODO: There IS a separate RTC CMOS byte that's supposed to be set to CMOS_ADDR.CENTURY_DATE; it's always BCD,
     * so theoretically it will contain values like 0x19 or 0x20 (for the 20th and 21st centuries, respectively), and
     * we could add that as another parameter to this function, to improve the accuracy, but that would go beyond what
     * a real RTC actually does.
     *
     * @param {number} nMonth (1-12)
     * @param {number} nYear (normally a 4-digit year, but it may also be mod 100)
     * @return {number} the maximum (1-based) day allowed for the specified month and year
     */
    static getMonthDays(nMonth, nYear)
    {
        let nDays = Usr.aMonthDays[nMonth - 1];
        if (nDays == 28) {
            if ((nYear % 4) === 0 && ((nYear % 100) || (nYear % 400) === 0)) {
                nDays++;
            }
        }
        return nDays;
    }

    /**
     * adjustDays(date, days)
     *
     * Although the setDate() method compensates for day-of-month values outside the current month:
     *
     *      > let d = new Date('11/4/2012');d
     *      2012-11-04T07:00:00.000Z
     *      > new Date(d.setDate(d.getDate() + 365))
     *      2014-11-04T08:00:00.000Z
     *
     * notice the discrepancy in the time-of-day.  Even if there is some technical reason (eg, a DayLight
     * Savings Time side-effect) why that answer is correct, it doesn't satisfy my goal of adjusting ONLY the
     * day, not the time-of-day.
     *
     * By comparison, the method below (multiplying the number of milliseconds in a day by the number of days)
     * works just fine, without any unexpected side-effects:
     *
     *      > let d = new Date('11/4/2012');d
     *      2012-11-04T07:00:00.000Z
     *      > new Date(d.getTime() + 365 * 86400000)
     *      2013-11-04T07:00:00.000Z
     *
     * @param {Date} date
     * @param {number} days (+/-)
     * @return {Date}
     */
    static adjustDays(date, days)
    {
        return new Date(date.getTime() + days * 86400000);
    }

    /**
     * subtractDays(date1, date2)
     *
     * @param {Date|string} date1
     * @param {Date|string} date2
     * @return {number} (date1 - date2, returned as a signed integer number of days)
     */
    static subtractDays(date1, date2)
    {
        if (typeof date1 == "string") date1 = new Date(date1);
        if (typeof date2 == "string") date2 = new Date(date2);
        return Math.round((date1.getTime() - date2.getTime()) / 86400000);
    }

    /**
     * defineBitFields(bfs)
     *
     * Prepares a bit field definition for use with getBitField() and setBitField(); eg:
     *
     *      let bfs = Usr.defineBitFields({num:20, count:8, btmod:1, type:3});
     *
     * The above defines a set of bit fields containing four fields: num (bits 0-19), count (bits 20-27), btmod (bit 28), and type (bits 29-31).
     *
     *      Usr.setBitField(bfs.num, n, 1);
     *
     * The above set bit field "bfs.num" in numeric variable "n" to the value 1.
     *
     * @param {Object} bfs
     * @return {BitFields}
     */
    static defineBitFields(bfs)
    {
        let bit = 0;
        for (let f in bfs) {
            let width = bfs[f];
            let mask = ((1 << width) - 1) << bit;
            bfs[f] = {mask: mask, shift: bit};
            bit += width;
        }
        return bfs;
    }

    /**
     * initBitFields(bfs, ...)
     *
     * @param {BitFields} bfs
     * @param {...number} var_args
     * @return {number} a value containing all supplied bit fields
     */
    static initBitFields(bfs, var_args)
    {
        let v = 0, i = 1;
        for (let f in bfs) {
            if (i >= arguments.length) break;
            v = Usr.setBitField(bfs[f], v, arguments[i++]);
        }
        return v;
    }

    /**
     * getBitField(bf, v)
     *
     * @param {BitField} bf
     * @param {number} v is a value containing bit fields
     * @return {number} the value of the bit field in v defined by bf
     */
    static getBitField(bf, v)
    {
        return (v & bf.mask) >> bf.shift;
    }

    /**
     * setBitField(bf, v, n)
     *
     * @param {BitField} bf
     * @param {number} v is a value containing bit fields
     * @param {number} n is a value to store in v in the bit field defined by bf
     * @return {number} updated v
     */
    static setBitField(bf, v, n)
    {
        return (v & ~bf.mask) | ((n << bf.shift) & bf.mask);
    }

    /**
     * indexOf(a, t, i)
     *
     * Use this instead of Array.prototype.indexOf() if you can't be sure the browser supports it.
     *
     * @param {Array} a
     * @param {*} t
     * @param {number} [i]
     * @returns {number}
     */
    static indexOf(a, t, i)
    {
        if (Array.prototype.indexOf) {
            return a.indexOf(t, i);
        }
        i = i || 0;
        if (i < 0) i += a.length;
        if (i < 0) i = 0;
        for (let n = a.length; i < n; i++) {
            if (i in a && a[i] === t) return i;
        }
        return -1;
    }
}

Usr.aMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


/**
 * @copyright https://www.pcjs.org/machines/shared/lib/weblib.js (C) 2012-2025 Jeff Parsons
 */


/*
 * According to http://www.w3schools.com/jsref/jsref_obj_global.asp, these are the *global* properties
 * and functions of JavaScript-in-the-Browser:
 *
 * Property             Description
 * ---
 * Infinity             A numeric value that represents positive/negative infinity
 * NaN                  "Not-a-Number" value
 * undefined            Indicates that a variable has not been assigned a value
 *
 * Function             Description
 * ---
 * decodeURI()          Decodes a URI
 * decodeURIComponent() Decodes a URI component
 * encodeURI()          Encodes a URI
 * encodeURIComponent() Encodes a URI component
 * escape()             Deprecated in version 1.5. Use encodeURI() or encodeURIComponent() instead
 * eval()               Evaluates a string and executes it as if it was script code
 * isFinite()           Determines whether a value is a finite, legal number
 * isNaN()              Determines whether a value is an illegal number
 * Number()             Converts an object's value to a number
 * parseFloat()         Parses a string and returns a floating point number
 * parseInt()           Parses a string and returns an integer
 * String()             Converts an object's value to a string
 * unescape()           Deprecated in version 1.5. Use decodeURI() or decodeURIComponent() instead
 *
 * And according to http://www.w3schools.com/jsref/obj_window.asp, these are the properties and functions
 * of the *window* object.
 *
 * Property             Description
 * ---
 * closed               Returns a Boolean value indicating whether a window has been closed or not
 * defaultStatus        Sets or returns the default text in the statusbar of a window
 * document             Returns the Document object for the window (See Document object)
 * frames               Returns an array of all the frames (including iframes) in the current window
 * history              Returns the History object for the window (See History object)
 * innerHeight          Returns the inner height of a window's content area
 * innerWidth           Returns the inner width of a window's content area
 * length               Returns the number of frames (including iframes) in a window
 * location             Returns the Location object for the window (See Location object)
 * name                 Sets or returns the name of a window
 * navigator            Returns the Navigator object for the window (See Navigator object)
 * opener               Returns a reference to the window that created the window
 * outerHeight          Returns the outer height of a window, including toolbars/scrollbars
 * outerWidth           Returns the outer width of a window, including toolbars/scrollbars
 * pageXOffset          Returns the pixels the current document has been scrolled (horizontally) from the upper left corner of the window
 * pageYOffset          Returns the pixels the current document has been scrolled (vertically) from the upper left corner of the window
 * parent               Returns the parent window of the current window
 * screen               Returns the Screen object for the window (See Screen object)
 * screenLeft           Returns the x coordinate of the window relative to the screen
 * screenTop            Returns the y coordinate of the window relative to the screen
 * screenX              Returns the x coordinate of the window relative to the screen
 * screenY              Returns the y coordinate of the window relative to the screen
 * self                 Returns the current window
 * status               Sets or returns the text in the statusbar of a window
 * top                  Returns the topmost browser window
 *
 * Method               Description
 * ---
 * alert()              Displays an alert box with a message and an OK button
 * atob()               Decodes a base-64 encoded string
 * blur()               Removes focus from the current window
 * btoa()               Encodes a string in base-64
 * clearInterval()      Clears a timer set with setInterval()
 * clearTimeout()       Clears a timer set with setTimeout()
 * close()              Closes the current window
 * confirm()            Displays a dialog box with a message and an OK and a Cancel button
 * createPopup()        Creates a pop-up window
 * focus()              Sets focus to the current window
 * moveBy()             Moves a window relative to its current position
 * moveTo()             Moves a window to the specified position
 * open()               Opens a new browser window
 * print()              Prints the content of the current window
 * prompt()             Displays a dialog box that prompts the visitor for input
 * resizeBy()           Resizes the window by the specified pixels
 * resizeTo()           Resizes the window to the specified width and height
 * scroll()             This method has been replaced by the scrollTo() method.
 * scrollBy()           Scrolls the content by the specified number of pixels
 * scrollTo()           Scrolls the content to the specified coordinates
 * setInterval()        Calls a function or evaluates an expression at specified intervals (in milliseconds)
 * setTimeout()         Calls a function or evaluates an expression after a specified number of milliseconds
 * stop()               Stops the window from loading
 */

class Web {
    /**
     * log(s, type)
     *
     * For diagnostic output only.  DEBUG must be true (or "--debug" specified via the command-line)
     * for Component.log() to display anything.
     *
     * @param {string} [s] is the message text
     * @param {string} [type] is the message type
     */
    static log(s, type)
    {
        Component.log(s, type);
    }

    /**
     * notice(s, fPrintOnly, id)
     *
     * @param {string} s is the message text
     * @param {boolean} [fPrintOnly]
     * @param {string} [id] is the caller's ID, if any
     */
    static notice(s, fPrintOnly, id)
    {
        Component.notice(s, fPrintOnly, id);
    }

    /**
     * alertUser(sMessage)
     *
     * NOTE: Legacy function for older modules (eg, DiskDump); see Component.alertUser().
     *
     * @param {string} sMessage
     */
    static alertUser(sMessage)
    {
        if (window) {
            window.alert(sMessage);
        } else {
            Web.log(sMessage);
        }
    }

    /**
     * getResource(sURL, type, fAsync, done, progress)
     *
     * Request the specified resource (sURL), and once the request is complete, notify done().
     *
     * If fAsync is true, a done() callback should ALWAYS be supplied; otherwise, you'll have no
     * idea when the request is complete or what the response was.  done() is passed three parameters:
     *
     *      done(sURL, resource, nErrorCode)
     *
     * If nErrorCode is zero, resource should contain the requested data; otherwise, an error occurred.
     *
     * If type is set to a string, that string can be used to control the response format;
     * by default, the response format is plain text, but you can specify "arraybuffer" to request arbitrary
     * binary data, in which case the returned resource will be a ArrayBuffer rather than a string.
     *
     * @param {string} sURL
     * @param {string|Object|null} [type] (object for POST request, otherwise type of GET request)
     * @param {boolean} [fAsync] is true for an asynchronous request; false otherwise (MUST be set for IE)
     * @param {function(string,string,number)|function(string,ArrayBuffer,number)} [done]
     * @param {function(number)} [progress]
     * @return {Array|null} Array containing [resource, nErrorCode], or null if no response available (yet)
     */
    static getResource(sURL, type = "text", fAsync = false, done, progress)
    {
        let nErrorCode = 0, resource = null, response = null;

        if (typeof resources == 'object' && (resource = resources[sURL])) {
            if (done) done(sURL, resource, nErrorCode);
            return [resource, nErrorCode];
        }
        else if (fAsync && typeof resources == 'function') {
            resources(sURL, function(resource, nErrorCode) {
                if (done) done(sURL, resource, nErrorCode);
            });
            return response;
        }

        if (COMPILED || !Web.getHostName().match(/^(.+\.local|localhost|0\.0\.0\.0|pcjs)$/)) {
            sURL = sURL.replace(/^\/(disks\/|)(diskettes|gamedisks|miscdisks|harddisks|decdisks|pcsigdisks|pcsig[0-9a-z]*-disks|private)\//, "https://$2.pcjs.org/").replace(/^\/(disks\/cdroms|discs)\/([^/]*)\//, "https://$2.pcjs.org/");
        } else {
            sURL = sURL.replace(/^\/(diskettes|gamedisks|miscdisks|harddisks|decdisks|pcsigdisks|pcsig[0-9a-z]*-disks|private)\//, "/disks/$1/").replace(/^\/discs\/([^/]*)\//, "/disks/cdroms/$1/");
        }


        let request = (window.XMLHttpRequest? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP"));
        let fArrayBuffer = false, fXHR2 = (typeof request.responseType === 'string');

        let callback = function() {
            if (request.readyState !== 4) {
                if (progress) progress(1);
                return null;
            }
            /*
             * The following line was recommended for WebKit, as a work-around to prevent the handler firing multiple
             * times when debugging.  Unfortunately, that's not the only XMLHttpRequest problem that occurs when
             * debugging, so I think the WebKit problem is deeper than that.  When we have multiple XMLHttpRequests
             * pending, any debugging activity means most of them simply get dropped on floor, so what may actually be
             * happening are mis-notifications rather than redundant notifications.
             *
             *      request.onreadystatechange = undefined;
             */
            /*
             * If the request failed due to, say, a CORS policy denial; eg:
             *
             *      Failed to load http://www.allbootdisks.com/downloads/Disks/Windows_95_Boot_Disk_Download48/Diskette%20Images/Windows95a.img:
             *      Redirect from 'http://www.allbootdisks.com/downloads/Disks/Windows_95_Boot_Disk_Download48/Diskette%20Images/Windows95a.img' to
             *      'http://www.allbootdisks.com/' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
             *      Origin 'http://pcjs:8088' is therefore not allowed access.
             *
             * and our request type was "arraybuffer", attempting to access responseText may trigger an exception; eg:
             *
             *      Uncaught DOMException: Failed to read the 'responseText' property from 'XMLHttpRequest': The value is only accessible if the object's
             *      'responseType' is '' or 'text' (was 'arraybuffer').
             *
             * We could tiptoe around these potential landmines, but the safest thing to do is wrap this code with try/catch.
             */
            try {
                resource = fArrayBuffer? request.response : request.responseText;
            } catch(err) {
                if (MAXDEBUG) Web.log("xmlHTTPRequest(" + sURL + ") exception: " + err.message);
            }
            /*
             * The normal "success" case is a non-null resource and an HTTP status code of 200, but when loading files from the
             * local file system (ie, when using the "file:" protocol), we have to be a bit more flexible.
             */
            if (resource != null && (request.status == 200 || !request.status && resource.length && Web.getHostProtocol() == "file:")) {
                if (MAXDEBUG) Web.log("xmlHTTPRequest(" + sURL + "): returned " + resource.length + " bytes");
            }
            else {
                nErrorCode = request.status || -1;
                Web.log("xmlHTTPRequest(" + sURL + "): error code " + nErrorCode);
                if (!request.status && !Web.fAdBlockerWarning) {
                    let match = sURL.match(/(^https?:\/\/[^/]+)(.*)/);
                    if (match) {
                        Web.fAdBlockerWarning = true;
                        Component.alertUser("PCjs was unable to perform a cross-origin resource request to '" + match[1] + "'.\n\nIf you're running an ad blocker, try adding '" + Web.getHostOrigin() + "' to your whitelist (or find a smarter ad blocker).");
                    }
                }
            }
            if (progress) progress(2);
            if (done) done(sURL, resource, nErrorCode);
            return [resource, nErrorCode];
        };

        if (fAsync) {
            request.onreadystatechange = callback;
        }

        if (progress) progress(0);

        if (type && typeof type == "object") {
            let sPost = "";
            for (let p in type) {
                if (!type.hasOwnProperty(p)) continue;
                if (sPost) sPost += "&";
                sPost += p + '=' + encodeURIComponent(type[p]);
            }
            sPost = sPost.replace(/%20/g, '+');
            if (MAXDEBUG) Web.log("Web.getResource(POST " + sURL + "): " + sPost.length + " bytes");
            request.open("POST", sURL, fAsync);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send(sPost);
        } else {
            if (MAXDEBUG) Web.log("Web.getResource(GET " + sURL + ")");
            request.open("GET", sURL, fAsync);
            if (type == "arraybuffer") {
                if (fXHR2) {
                    fArrayBuffer = true;
                    request.responseType = type;
                } else {
                    request.overrideMimeType("text/plain; charset=x-user-defined");
                }
            }
            request.send();
        }

        if (!fAsync) {
            request.readyState = 4;     // this may already be set for synchronous requests, but I don't want to take any chances
            response = callback();
        }
        return response;
    }

    /**
     * parseMemoryResource(sURL, sData)
     *
     * This converts a variety of JSON-style data streams into an Object with the following properties:
     *
     *      aBytes
     *      aSymbols
     *      addrLoad
     *      addrExec
     *
     * If the source data contains a 'bytes' array, it's passed through to 'aBytes'; alternatively, if
     * it contains a 'words' array, the values are converted from 16-bit to 8-bit and stored in 'aBytes',
     * and if it contains a 'longs' array, the values are converted from 32-bit longs into bytes and
     * stored in 'aBytes'.
     *
     * Alternatively, if the source data contains a 'data' array, we simply pass that through to the output
     * object as:
     *
     *      aData
     *
     * @param {string} sURL
     * @param {string} sData
     * @return {Object|null} (resource)
     */
    static parseMemoryResource(sURL, sData)
    {
        let i;
        let resource = {
            aBytes: null,
            aSymbols: null,
            addrLoad: null,
            addrExec: null
        };

        if (sData.charAt(0) == "[" || sData.charAt(0) == "{") {
            try {
                let a, ib, data;

                if (sData.substr(0, 1) == "<") {    // if the "data" begins with a "<"...
                    /*
                     * Early server configs reported an error (via the nErrorCode parameter) if a tape URL was invalid,
                     * but more recent server configs now display a somewhat friendlier HTML error page.  The downside,
                     * however, is that the original error has been buried, and we've received "data" that isn't actually
                     * tape data.  So if the data we've received appears to be "HTML-like", we treat it as an error message.
                     */
                    throw new Error(sData);
                }

                /*
                 * TODO: IE9 is rather unfriendly and restrictive with regard to how much data it's willing to
                 * eval().  In particular, the 10Mb disk image we use for the Windows 1.01 demo config fails in
                 * IE9 with an "Out of memory" exception.  One work-around would be to chop the data into chunks
                 * (perhaps one track per chunk, using regular expressions) and then manually re-assemble it.
                 *
                 * However, it turns out that using JSON.parse(sDiskData) instead of eval("(" + sDiskData + ")")
                 * is a much easier fix. The only drawback is that we must first quote any unquoted property names
                 * and remove any comments, because while eval() was cool with them, JSON.parse() is more particular;
                 * the following RegExp replacements take care of those requirements.
                 *
                 * The use of hex values is something else that eval() was OK with, but JSON.parse() is not, and
                 * while I've stopped using hex values in DumpAPI responses (at least when "format=json" is specified),
                 * I can't guarantee they won't show up in "legacy" images, and there's no simple RegExp replacement
                 * for transforming hex values into decimal values, so I cop out and fall back to eval() if I detect
                 * any hex prefixes ("0x") in the sequence.  Ditto for error messages, which appear like so:
                 *
                 *      ["unrecognized disk path: test.img"]
                 */
                if (sData.indexOf("0x") < 0 && sData.indexOf("0o") < 0 && sData.substr(0, 2) != '["') {
                    if (sData.indexOf('"values"') < 0) sData = sData.replace(/([a-z]+):/gm, '"$1":').replace(/\/\/[^\n]*/gm, "");
                    data = JSON.parse(sData);
                } else {
                    data = eval("(" + sData + ")");
                }

                resource.addrLoad = data['load'];
                resource.addrExec = data['exec'];

                let width = data['width'];
                let values = data['values'];
                if (width && values) {
                    if (width == 8) {
                        data['bytes'] = values;
                    } else if (width == 16) {
                        data['words'] = values;
                    } else if (width == 32) {
                        data['longs'] = values;
                    } else {
                        data['data'] = values;
                    }
                }

                if ((a = data['bytes'])) {
                    resource.aBytes = a;
                }
                else if ((a = data['words'])) {
                    /*
                     * Convert all words into bytes
                     */
                    resource.aBytes = new Array(a.length * 2);
                    for (i = 0, ib = 0; i < a.length; i++) {
                        resource.aBytes[ib++] = a[i] & 0xff;
                        resource.aBytes[ib++] = (a[i] >> 8) & 0xff;

                    }
                }
                else if ((a = data['longs'])) {
                    /*
                     * Convert all dwords (longs) into bytes
                     */
                    resource.aBytes = new Array(a.length * 4);
                    for (i = 0, ib = 0; i < a.length; i++) {
                        resource.aBytes[ib++] = a[i] & 0xff;
                        resource.aBytes[ib++] = (a[i] >> 8) & 0xff;
                        resource.aBytes[ib++] = (a[i] >> 16) & 0xff;
                        resource.aBytes[ib++] = (a[i] >> 24) & 0xff;
                    }
                }
                else if ((a = data['data'])) {
                    resource.aData = a;
                }
                else {
                    resource.aBytes = data;
                }

                if (resource.aBytes) {
                    if (!resource.aBytes.length) {
                        Component.error("Empty resource: " + sURL);
                        resource = null;
                    }
                    else if (resource.aBytes.length == 1) {
                        Component.error(resource.aBytes[0]);
                        resource = null;
                    }
                }
                resource.aSymbols = data['symbols'];

            } catch (e) {
                Component.error("Resource data error (" + sURL + "): " + e.message);
                resource = null;
            }
        }
        else {
            /*
             * Parse the data manually; we assume it's a series of hex byte-values separated by whitespace.
             */
            let ab = [];
            let sHexData = sData.replace(/\n/gm, " ").replace(/ +$/, "");
            let asHexData = sHexData.split(" ");
            for (i = 0; i < asHexData.length; i++) {
                let n = parseInt(asHexData[i], 16);
                if (isNaN(n)) {
                    Component.error("Resource data error (" + sURL + "): invalid hex byte (" + asHexData[i] + ")");
                    break;
                }
                ab.push(n & 0xff);
            }
            if (i == asHexData.length) resource.aBytes = ab;
        }
        return resource;
    }

    /**
     * redirectResource(sPath)
     *
     * The following replacements should only be necessary for (old) saved states; none of our disk manifests
     * should be using any of these deprecated paths anymore.
     *
     * @param {string} sPath
     * @return {string}
     */
    static redirectResource(sPath)
    {
        sPath = sPath.replace("/disks/pc/", "/disks/pcx86/");
        sPath = sPath.replace("/disks/pcx86/private/", "/disks-private/pcx86/");
        if (sPath.indexOf("archive.pcjs.org") < 0) {
            sPath = sPath.replace("/disks/pcx86/", "/disks-demo/pcx86/");
        }
        sPath = sPath.replace("/pcjs-disks/", "/disks-demo/");
        sPath = sPath.replace("/pcjs-games/", "/disks-game/");
        sPath = sPath.replace("/disks-demo/pcx86/games/", "/disks-game/pcx86/");
        sPath = sPath.replace("/private-disks/", "/disks-private/");
        sPath = sPath.replace("/fixed/", "/drives/");
        return sPath;
    }

    /**
     * sendReport(sApp, sVer, sURL, sUser, sType, sReport, sHostName)
     *
     * Send a report (eg, bug report) to the server.
     *
     * @param {string} sApp (eg, "PCjs")
     * @param {string} sVer (eg, "1.02")
     * @param {string} sURL (eg, "/devices/pc/machine/5150/mda/64kb/machine.xml")
     * @param {string} sUser (ie, the user key, if any)
     * @param {string} sType (eg, "bug"); one of ReportAPI.TYPE.*
     * @param {string} sReport (eg, unparsed state data)
     * @param {string} [sHostName] (default is SITEURL)
     */
    static sendReport(sApp, sVer, sURL, sUser, sType, sReport, sHostName)
    {
        let dataPost = {};
        dataPost[ReportAPI.QUERY.APP] = sApp;
        dataPost[ReportAPI.QUERY.VER] = sVer;
        dataPost[ReportAPI.QUERY.URL] = sURL;
        dataPost[ReportAPI.QUERY.USER] = sUser;
        dataPost[ReportAPI.QUERY.TYPE] = sType;
        dataPost[ReportAPI.QUERY.DATA] = sReport;
        let sReportURL = (sHostName? sHostName : SITEURL) + ReportAPI.ENDPOINT;
        Web.getResource(sReportURL, dataPost, true);
    }

    /**
     * getHost()
     *
     * This is like getHostName() but with the port number, if any.
     *
     * @return {string}
     */
    static getHost()
    {
        return (window? window.location.host : "localhost");
    }

    /**
     * getHostName()
     *
     * @return {string}
     */
    static getHostName()
    {
        return (window? window.location.hostname : "localhost");
    }

    /**
     * getHostOrigin()
     *
     * This could also be implemented with window.location.origin, but that wasn't originally available in all browsers.
     *
     * @return {string}
     */
    static getHostOrigin()
    {
        return (window? window.location.protocol + "//" + window.location.host : SITEURL);
    }

    /**
     * getHostProtocol()
     *
     * @return {string}
     */
    static getHostProtocol()
    {
        return (window? window.location.protocol : "file:");
    }

    /**
     * getHostURL()
     *
     * @return {string|null}
     */
    static getHostURL()
    {
        return (window? window.location.href : null);
    }

    /**
     * getUserAgent()
     *
     * @return {string}
     */
    static getUserAgent()
    {
        return (window? window.navigator.userAgent : "");
    }

    /**
     * hasLocalStorage
     *
     * true if localStorage support exists, is enabled, and works; false otherwise
     *
     * @return {boolean}
     */
    static hasLocalStorage()
    {
        if (Web.fLocalStorage == null) {
            let f = false;
            if (window) {
                try {
                    window.localStorage.setItem(Web.sLocalStorageTest, Web.sLocalStorageTest);
                    f = (window.localStorage.getItem(Web.sLocalStorageTest) == Web.sLocalStorageTest);
                    window.localStorage.removeItem(Web.sLocalStorageTest);
                } catch (e) {
                    Web.logLocalStorageError(e);
                    f = false;
                }
            }
            Web.fLocalStorage = f;
        }
        return Web.fLocalStorage;
    }

    /**
     * logLocalStorageError(e)
     *
     * @param {Error} e is an exception
     */
    static logLocalStorageError(e)
    {
        Web.log(e.message, "localStorage error");
    }

    /**
     * getLocalStorageItem(sKey)
     *
     * Returns the requested key value, or null if the key does not exist, or undefined if localStorage is not available
     *
     * @param {string} sKey
     * @return {string|null|undefined} sValue
     */
    static getLocalStorageItem(sKey)
    {
        let sValue;
        if (window) {
            try {
                sValue = window.localStorage.getItem(sKey);
            } catch (e) {
                Web.logLocalStorageError(e);
            }
        }
        return sValue;
    }

    /**
     * setLocalStorageItem(sKey, sValue)
     *
     * @param {string} sKey
     * @param {string} sValue
     * @return {boolean} true if localStorage is available, false if not
     */
    static setLocalStorageItem(sKey, sValue)
    {
        try {
            window.localStorage.setItem(sKey, sValue);
            return true;
        } catch (e) {
            Web.logLocalStorageError(e);
        }
        return false;
    }

    /**
     * removeLocalStorageItem(sKey)
     *
     * @param {string} sKey
     */
    static removeLocalStorageItem(sKey)
    {
        try {
            window.localStorage.removeItem(sKey);
        } catch (e) {
            Web.logLocalStorageError(e);
        }
    }

    /**
     * getLocalStorageKeys()
     *
     * @return {Array}
     */
    static getLocalStorageKeys()
    {
        let a = [];
        try {
            for (let i = 0, c = window.localStorage.length; i < c; i++) {
                a.push(window.localStorage.key(i));
            }
        } catch (e) {
            Web.logLocalStorageError(e);
        }
        return a;
    }

    /**
     * reloadPage()
     */
    static reloadPage()
    {
        if (window) window.location.reload();
    }

    /**
     * isUserAgent(s)
     *
     * Check the browser's user-agent string for the given substring; "iOS" and "MSIE" are special values you can
     * use that will match any iOS or MSIE browser, respectively (even IE11, in the case of "MSIE").
     *
     * 2013-11-06: In a questionable move, MSFT changed the user-agent reported by IE11 on Windows 8.1, eliminating
     * the "MSIE" string (which MSDN calls a "version token"; see http://msdn.microsoft.com/library/ms537503.aspx);
     * they say "public websites should rely on feature detection, rather than browser detection, in order to design
     * their sites for browsers that don't support the features used by the website." So, in IE11, we get a user-agent
     * that tries to fool apps into thinking the browser is more like WebKit or Gecko:
     *
     *      Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko
     *
     * That's a nice idea, but in the meantime, they hosed the XSL transform code in embed.js, which contained
     * some very critical browser-specific code; turning on IE's "Compatibility Mode" didn't help either, because
     * that's a sledgehammer solution which restores the old user-agent string but also disables other features like
     * HTML5 canvas support. As an interim solution, I'm treating any "MSIE" check as a check for either "MSIE" or
     * "Trident".
     *
     * UPDATE: I've since found ways to make the code in embed.js more browser-agnostic, so for now, there's isn't
     * any code that cares about "MSIE", but I've left the change in place, because I wouldn't be surprised if I'll
     * need more IE-specific code in the future, perhaps for things like copy/paste functionality, or mouse capture.
     *
     * 2019-10-26: Apple has pulled a stunt in iPadOS 13 similar to MSFT: trying to pretend that Safari on iPadOS is
     * indistinguishable from the desktop version.  Except that there are still situations where we need to know the
     * difference (eg, when there's only a soft keyboard as opposed to a dedicated keyboard).  See monitor.js for details.
     *
     * @param {string} s is a substring to search for in the user-agent; as noted above, "iOS" and "MSIE" are special values
     * @return {boolean} is true if the string was found, false if not
     */
    static isUserAgent(s)
    {
        if (window) {
            let userAgent = Web.getUserAgent();
            /*
             * Here's one case where we have to be careful with Component, because when isUserAgent() is called by
             * the init code below, component.js hasn't been loaded yet.  The simple solution for now is to remove the call.
             *
             *      Web.log("agent: " + userAgent);
             *
             * And yes, it would be pointless to use the conditional (?) operator below, if not for the Google Closure
             * Compiler (v20130823) failing to detect the entire expression as a boolean.
             */
            return s == "iOS" && (!!userAgent.match(/(iPod|iPhone|iPad)/) || (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1)) || s == "MSIE" && !!userAgent.match(/(MSIE|Trident)/) || (userAgent.indexOf(s) >= 0);
        }
        return false;
    }

    /**
     * isMobile(sDevice)
     *
     * Checks the URL for a "mobile" parameter, and failing that, checks the browser's user-agent string for the
     * substring "Mobi", as per Mozilla recommendation:
     *
     *      https://developer.mozilla.org/en-US/docs/Browser_detection_using_the_user_agent
     *
     * @param {string} [sDevice] (eg, "iPad" to check for iPad, or "!iPad" to specifically exclude it)
     * @return {boolean} is true if the browser appears to be a mobile (ie, non-desktop) web browser, false if not
     */
    static isMobile(sDevice)
    {
        let sMobile = Web.getURLParm("mobile");
        if (sMobile) return sMobile == "true";
        if (Web.isUserAgent("Mobi")) {
            if (!sDevice) return true;
            let fInvert = sDevice[0] == '!';
            if (fInvert) sDevice = sDevice.substr(1);
            return Web.isUserAgent(sDevice) != fInvert;
        }
        return false;
    }

    /**
     * findProperty(obj, sProp, sSuffix)
     *
     * If both sProp and sSuffix are set, then any browser-specific prefixes are inserted between sProp and sSuffix,
     * and if a match is found, it is returned without sProp.
     *
     * For example, if findProperty(document, 'on', 'fullscreenchange') discovers that 'onwebkitfullscreenchange' exists,
     * it will return 'webkitfullscreenchange', in preparation for an addEventListener() call.
     *
     * More commonly, sSuffix is not used, so whatever property is found is returned as-is.
     *
     * @param {Object|null|undefined} obj
     * @param {string} sProp
     * @param {string} [sSuffix]
     * @return {string|null}
     */
    static findProperty(obj, sProp, sSuffix)
    {
        if (obj) {
            for (let i = 0; i < Web.asBrowserPrefixes.length; i++) {
                let sName = Web.asBrowserPrefixes[i];
                if (sSuffix) {
                    sName += sSuffix;
                    let sEvent = sProp + sName;
                    if (sEvent in obj) return sName;
                } else {
                    if (!sName) {
                        sName = sProp[0];
                    } else {
                        sName += sProp[0].toUpperCase();
                    }
                    sName += sProp.substr(1);
                    if (sName in obj) return sName;
                }
            }
        }
        return null;
    }

    /**
     * getURLParm(sParm)
     *
     * First looks for sParm exactly as specified, then looks for the lower-case version.
     *
     * @param {string} sParm
     * @return {string|undefined}
     */
    static getURLParm(sParm)
    {
        if (!Web.parmsURL) {
            Web.parmsURL = Web.parseURLParms();
        }
        return Web.parmsURL[sParm] || Web.parmsURL[sParm.toLowerCase()];
    }

    /**
     * parseURLParms(sParms)
     *
     * @param {string} [sParms] containing the parameter portion of a URL (ie, after the '?')
     * @return {Object} containing properties for each parameter found
     */
    static parseURLParms(sParms)
    {
        let aParms = {};
        if (window) {       // an alternative to "if (typeof module === 'undefined')" if require("defines") was used
            if (!sParms) {
                /*
                 * Note that window.location.href returns the entire URL, whereas window.location.search
                 * returns only the parameters, if any (starting with the '?', which we skip over with a substr() call).
                 */
                sParms = window.location.search.substr(1);
            }
            let match;
            let pl = /\+/g; // RegExp for replacing addition symbol with a space
            let search = /([^&=]+)=?([^&]*)/g;
            let decode = function(s)
            {
                return decodeURIComponent(s.replace(pl, " "));
            };

            while ((match = search.exec(sParms))) {
                aParms[decode(match[1])] = decode(match[2]);
            }
        }
        return aParms;
    }

    /**
     * downloadFile(sData, sType, fBase64, sFileName)
     *
     * @param {string|Uint8Array} sData
     * @param {string} sType
     * @param {boolean} [fBase64]
     * @param {string} [sFileName]
     */
    static downloadFile(sData, sType, fBase64, sFileName)
    {
        let link = null, sAlert, sURI;

        if (typeof sData != 'string') {
            if (typeof Blob == 'function' && typeof URL != 'undefined' && URL && typeof URL.createObjectURL == 'function') {
                let blob = new Blob([sData], {type: 'application/octet-stream'});
                sURI = URL.createObjectURL(blob);
            }
        }
        else {
            sURI = "data:application/" + sType + (fBase64? ";base64" : "") + ",";
            sURI += (fBase64? sData : encodeURIComponent(sData));
        }
        if (!sURI) {
            sAlert = 'Operation unsupported by your browser.';
        }
        else {
            if (sFileName) {
                link = document.createElement('a');
                if (typeof link.download != 'string') link = null;
            }
            if (link) {
                link.href = sURI;
                link.download = sFileName;
                document.body.appendChild(link);    // Firefox allegedly requires the link to be in the body
                link.click();
                document.body.removeChild(link);
                sAlert = 'Check your Downloads folder for ' + sFileName + '.';
                // if (Web.isUserAgent("Chrome")) {
                //     sAlert += '\n\nIn Chrome, after clicking OK, you may ALSO have to select the "Window" menu, choose "Downloads", and then locate this download and select "Keep".';
                //     sAlert += '\n\nThis is part of Chrome\'s "Security By Jumping Through Extra Hoops" technology, which is much easier for Google to implement than actually checking for something malicious.';
                //     sAlert += '\n\nAnd for the record, there is nothing malicious on the PCjs website.';
                // }
            }
            else {
                window.open(sURI);
                sAlert = 'Check your browser for a new window/tab containing the requested data' + (sFileName? (' (' + sFileName + ')') : '') + '.';
            }
        }
        return sAlert;
    }

    /**
     * onCountRepeat(n, fnRepeat, fnComplete, msDelay)
     *
     * Call fnRepeat() n times with an msDelay millisecond delay between calls,
     * then call fnComplete() when n has been exhausted OR fnRepeat() returns false.
     *
     * @param {number} n
     * @param {function()} fnRepeat
     * @param {function()} fnComplete
     * @param {number} [msDelay]
     */
    static onCountRepeat(n, fnRepeat, fnComplete, msDelay)
    {
        let fnTimeout = function doCountRepeat()
        {
            n -= 1;
            if (n >= 0) {
                if (!fnRepeat()) n = 0;
            }
            if (n > 0) {
                setTimeout(fnTimeout, msDelay || 0);
                return;
            }
            fnComplete();
        };
        fnTimeout();
    }

    /**
     * onClickRepeat(e, msDelay, msRepeat, fn)
     *
     * Repeatedly call fn() with an initial msDelay, and an msRepeat delay thereafter,
     * as long as HTML control Object e has an active "down" event and fn() returns true.
     *
     * @param {Object} e
     * @param {number} msDelay
     * @param {number} msRepeat
     * @param {function(boolean)} fn is passed false on the first call, true on all repeated calls
     */
    static onClickRepeat(e, msDelay, msRepeat, fn)
    {
        let ms = 0, timer = null, fIgnoreMouseEvents = false;

        let fnRepeat = function doClickRepeat()
        {
            if (fn(ms === msRepeat)) {
                timer = setTimeout(fnRepeat, ms);
                ms = msRepeat;
            }
        };
        e.onmousedown = function()
        {
            // Web.log("onMouseDown()");
            if (!fIgnoreMouseEvents) {
                if (!timer) {
                    ms = msDelay;
                    fnRepeat();
                }
            }
        };
        e.ontouchstart = function()
        {
            // Web.log("onTouchStart()");
            if (!timer) {
                ms = msDelay;
                fnRepeat();
            }
        };
        e.onmouseup = e.onmouseout = function()
        {
            // Web.log("onMouseUp()/onMouseOut()");
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
        };
        e.ontouchend = e.ontouchcancel = function()
        {
            // Web.log("onTouchEnd()/onTouchCancel()");
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            /*
             * Devices that generate ontouch* events ALSO generate onmouse* events,
             * and generally do so immediately after all the touch events are complete,
             * so unless we want double the action, we need to ignore mouse events.
             */
            fIgnoreMouseEvents = true;
        };
    }

    /**
     * onPageEvent(sName, fn)
     *
     * For 'onload', 'onunload', and 'onpageshow' events, most callers should NOT use this function, but
     * instead use Web.onInit(), Web.onShow(), and Web.onExit(), respectively.
     *
     * The only components that should still use onPageEvent() are THIS component (see the bottom of this file)
     * and components that need to capture other events (eg, the 'onresize' event in the Video component).
     *
     * This function creates a chain of callbacks, allowing multiple JavaScript modules to define handlers
     * for the same event, which wouldn't be possible if everyone modified window['onload'], window['onunload'],
     * etc, themselves.  However, that's less of a concern now, because assuming everyone else is now using
     * onInit(), onExit(), etc, then there really IS only one component setting the window callback: this one.
     *
     * NOTE: It's risky to refer to obscure event handlers with "dot" names, because the Closure Compiler may
     * erroneously replace them (eg, window.onpageshow is a good example).
     *
     * @param {string} sFunc
     * @param {function()} fn
     */
    static onPageEvent(sFunc, fn)
    {
        if (window) {
            let fnPrev = window[sFunc];
            if (typeof fnPrev !== 'function') {
                window[sFunc] = fn;
            } else {
                /*
                 * TODO: Determine whether there's any value in receiving/sending the Event object that the
                 * browser provides when it generates the original event.
                 */
                window[sFunc] = function onWindowEvent()
                {
                    if (fnPrev) fnPrev();
                    fn();
                };
            }
        }
    }

    /**
     * onInit(fn)
     *
     * Use this instead of setting window.onload.  Allows multiple JavaScript modules to define their own 'onload' event handler.
     *
     * @param {function()} fn
     */
    static onInit(fn)
    {
        Web.aPageEventHandlers['init'].push(fn);
    }

    /**
     * onShow(fn)
     *
     * @param {function()} fn
     *
     * Use this instead of setting window.onpageshow.  Allows multiple JavaScript modules to define their own 'onpageshow' event handler.
     */
    static onShow(fn)
    {
        Web.aPageEventHandlers['show'].push(fn);
    }

    /**
     * onError(sMessage)
     *
     * @param {string} sMessage
     */
    static onError(sMessage)
    {
        Web.notice(sMessage + "\n\nIf it happens again, please send the URL to support@pcjs.org. Thanks.");
    }

    /**
     * onExit(fn)
     *
     * @param {function()} fn
     *
     * Use this instead of setting window.onunload.  Allows multiple JavaScript modules to define their own 'onunload' event handler.
     */
    static onExit(fn)
    {
        Web.aPageEventHandlers['exit'].push(fn);
    }

    /**
     * doPageEvent(afn)
     *
     * @param {Array.<function()>} afn
     */
    static doPageEvent(afn)
    {
        if (Web.fPageEventsEnabled) {
            try {
                for (let i = 0; i < afn.length; i++) {
                    afn[i]();
                }
            } catch (e) {
                Web.onError("An unexpected error occurred: " + e.message);
            }
        }
    }

    /**
     * enablePageEvents(fEnable)
     *
     * @param {boolean} fEnable is true to enable page events, false to disable (they're enabled by default)
     */
    static enablePageEvents(fEnable)
    {
        if (!Web.fPageEventsEnabled && fEnable) {
            Web.fPageEventsEnabled = true;
            if (Web.fPageLoaded) Web.sendPageEvent('init');
            if (Web.fPageShowed) Web.sendPageEvent('show');
            return;
        }
        Web.fPageEventsEnabled = fEnable;
    }

    /**
     * sendPageEvent(sEvent)
     *
     * This allows us to manually trigger page events.
     *
     * @param {string} sEvent (one of 'init', 'show' or 'exit')
     */
    static sendPageEvent(sEvent)
    {
        if (Web.aPageEventHandlers[sEvent]) {
            Web.doPageEvent(Web.aPageEventHandlers[sEvent]);
        }
    }
}

Web.parmsURL = null;            // initialized on first call to parseURLParms()

Web.aPageEventHandlers = {
    'init': [],                 // list of window 'onload' handlers
    'show': [],                 // list of window 'onpageshow' handlers
    'exit': []                  // list of window 'onunload' handlers (although we prefer to use 'onbeforeunload' if possible)
};

Web.asBrowserPrefixes = ['', 'moz', 'ms', 'webkit'];

Web.fPageLoaded = false;        // set once the page's first 'onload' event has occurred
Web.fPageShowed = false;        // set once the page's first 'onpageshow' event has occurred
Web.fPageEventsEnabled = true;  // default is true, set to false (or true) by enablePageEvents()
Web.fAdBlockerWarning = false;

/**
 * fLocalStorage
 *
 * true if localStorage support exists, is enabled, and works; "falsey" otherwise
 *
 * @type {boolean|null}
 */
Web.fLocalStorage = null;

/**
 * TODO: Is there any way to get the Closure Compiler to stop inlining this string?  This isn't cutting it.
 *
 * @const {string}
 */
Web.sLocalStorageTest = "PCjs.localStorage";

Web.onPageEvent('onload', function onPageLoad() {
    Web.fPageLoaded = true;
    Web.doPageEvent(Web.aPageEventHandlers['init']);
});

Web.onPageEvent('onpageshow', function onPageShow() {
    Web.fPageShowed = true;
    Web.doPageEvent(Web.aPageEventHandlers['show']);
});

Web.onPageEvent(Web.isUserAgent("iOS")? 'onpagehide' : (Web.isUserAgent("Opera")? 'onunload' : 'onbeforeunload'), function onPageUnload() {
    Web.doPageEvent(Web.aPageEventHandlers['exit']);
});

/*
 * If this is DEBUG (eg, un-COMPILED) code, then allow the user to override DEBUG with a "debug=false" embedded in
 * the URL; note that the Closure Compiler won't let us alter the DEBUG variable, because it's defined as a @define, which
 * implies @const as well, so we must resort to modifying it indirectly, using the global window object.
 *
 * TODO: Consider yet another embedXXX() parameter that would also allow DEBUG to be turned off on a page-by-page basis;
 * it's low priority, because it would only affect machines that explicitly request un-COMPILED code, and there are very
 * few such machines (eg, /_posts/2015-01-17-pcjs-uncompiled.md).
 *
 * Deal with Web.getURLParm("backtrack") in /modules/pcx86/lib/defines.js at the same time.
 */
if (DEBUG && window) {
    let sDebug = Web.getURLParm("debug");
    if (sDebug == "false") {
        window['DEBUG'] = false;
    }
}


/**
 * @copyright https://www.pcjs.org/machines/shared/lib/component.js (C) 2012-2025 Jeff Parsons
 */

/*
 * All PCjs components now use JSDoc types, primarily so that Google's Closure Compiler will compile
 * everything with zero warnings when ADVANCED_OPTIMIZATIONS are enabled.  For more information about
 * the JSDoc types supported by the Closure Compiler:
 *
 *      https://developers.google.com/closure/compiler/docs/js-for-compiler#types
 *
 * I also attempted to validate this code with JSLint, but it complained too much; eg, it didn't like
 * "while (true)", a tried and "true" programming convention for decades, and it wanted me to replace
 * all "++" and "--" operators with "+= 1" and "-= 1", use "(s || '')" instead of "(s? s : '')", etc.
 *
 * I prefer sticking with traditional C-style idioms, in part because they are more portable.  That
 * does NOT mean I'm trying to write "portable JavaScript," but some of this code was ported from C code
 * I'd written long ago, so portability is good, and I'm not going to throw that away if there's no need.
 *
 * UPDATE: I've since switched from JSLint to JSHint, which seems to have more reasonable defaults.
 * And for new code, I have adopted some popular JavaScript idioms, like "(s || '')", although the need
 * for those kinds of expressions will be reduced as I also start adopting some ES6 features, like
 * default parameters.
 */



/**
 * Since the Closure Compiler treats ES6 classes as @struct rather than @dict by default,
 * it deters us from defining named properties on our components; eg:
 *
 *      this['exports'] = {...}
 *
 * results in an error:
 *
 *      Cannot do '[]' access on a struct
 *
 * So, in order to define 'exports', we must override the @struct assumption by annotating
 * the class as @unrestricted (or @dict).  Note that this must be done both here and in the
 * subclass (eg, SerialPort), because otherwise the Compiler won't allow us to *reference*
 * the named property either.
 *
 * TODO: Consider marking ALL our classes unrestricted, because otherwise it forces us to
 * define every single property the class uses in its constructor, which results in a fair
 * bit of redundant initialization, since many properties aren't (and don't need to be) fully
 * initialized until the appropriate init(), reset(), restore(), etc. function is called.
 *
 * The upside, however, may be that since the structure of the class is completely defined by
 * the constructor, JavaScript engines may be able to optimize and run more efficiently.
 *
 * @unrestricted
 */
class Component {
    /**
     * Component(type, parms, bitsMessage)
     *
     * A Component object requires:
     *
     *      type: a user-defined type name (eg, "CPU")
     *
     * and accepts any or all of the following (parms) properties:
     *
     *      id: component ID (default is "")
     *      name: component name (default is ""; if blank, toString() will use the type name only)
     *      comment: component comment string (default is undefined)
     *
     * Component subclasses will usually have additional (parms) properties.
     *
     * @param {string} type
     * @param {Object} [parms]
     * @param {number} [bitsMessage] selects message(s) that the component wants to enable (default is 0)
     */
    constructor(type, parms, bitsMessage)
    {
        this.type = type;

        if (!parms) parms = {'id': "", 'name': ""};

        this.name = parms['name'];
        this.comment = parms['comment'];
        this.parms = parms;

        /*
         * The following Component properties need to be accessible by other machines and/or command scripts;
         * well, OK, or we could have exported some new functions to walk the contents of these properties, as we
         * did with findMachineComponent(), but this works just as well.
         *
         * Also, while the double-assignment looks silly (ie, using both dot and bracket property notation), it
         * resolves a complaint from the Closure Compiler, because if we use ONLY bracket notation here, then the
         * Compiler wants us to change all the other references to bracket notation as well.
         */
        this.id = this['id'] = parms['id'] || "";
        this.exports = this['exports'] = {};
        this.bindings = this['bindings'] = {};

        let i = this.id.indexOf('.');
        if (i < 0) {
            this.idMachine = "PCjs";
            this.idComponent = this.id;
        } else {
            this.idMachine = this.id.substr(0, i);
            this.idComponent = this.id.substr(i + 1);
        }

        /*
         * Gather all the various component flags (booleans) into a single "flags" object, and encourage
         * subclasses to do the same, to reduce the property clutter we have to wade through while debugging.
         */
        this.flags = {
            ready:      false,
            busy:       false,
            busyCancel: false,
            initDone:   false,
            powered:    false,
            unloading:  false,
            error:      false
        };

        this.fnReady = null;
        this.clearError();
        this.bitsMessage = bitsMessage || 0;

        this.cmp = null;
        this.bus = null;
        this.cpu = null;
        this.dbg = null;

        /*
         * TODO: Consider adding another parameter to the Component() constructor that allows components to tell
         * us if they support single or multiple instances per machine.  For example, there can be multiple SerialPort
         * components per machine, but only one CPU component (some machines also support an FPU, but that component
         * is considered separate from the CPU).
         *
         * It's not critical, but it would help catch machine configuration errors; for example, a machine that mistakenly
         * includes two CPU components may, aside from wasting memory, end up with odd side-effects, like unresponsive
         * CPU controls.
         */
        Component.add(this);
    }

    /**
     * Component.add(component)
     *
     * @param {Component} component
     */
    static add(component)
    {
        /*
         * This just generates a lot of useless noise, handy in the early days, not so much these days....
         *
         *      if (DEBUG) Component.log("Component.add(" + component.type + "," + component.id + ")");
         */
        Component.components.push(component);
    }

    /**
     * Component.addMachine(idMachine)
     *
     * @param {string} idMachine
     */
    static addMachine(idMachine)
    {
        Component.machines[idMachine] = {};
    }

    /**
     * Component.getMachines()
     *
     * @return {Array.<string>}
     */
    static getMachines()
    {
        return Object.keys(Component.machines);
    }

    /**
     * Component.addMachineResource(idMachine, sName, data)
     *
     * @param {string} idMachine
     * @param {string|null} sName (name of the resource)
     * @param {*} data
     */
    static addMachineResource(idMachine, sName, data)
    {
        /*
         * I used to assert(Component.machines[idMachine]), but when we're running as a Node app, embed.js is not used,
         * so addMachine() is never called, so resources do not need to be recorded.
         */
        if (Component.machines[idMachine] && sName) {
            Component.machines[idMachine][sName] = data;
        }
    }

    /**
     * Component.getMachineResources(idMachine)
     *
     * @param {string} idMachine
     * @return {Object|undefined}
     */
    static getMachineResources(idMachine)
    {
        return Component.machines[idMachine];
    }

    /**
     * Component.getTime()
     *
     * @return {number} the current time, in milliseconds
     */
    static getTime()
    {
        return Date.now() || +new Date();
    }

    /**
     * Component.log(s, type)
     *
     * For diagnostic output only.
     *
     * @param {string} [s] is the message text
     * @param {string} [type] is the message type
     */
    static log(s, type)
    {
        if (!COMPILED) {
            if (s) {
                let sElapsed = "", sMsg = (type? (type + ": ") : "") + s;
                if (typeof Usr != "undefined") {
                    if (Component.msStart === undefined) {
                        Component.msStart = Component.getTime();
                    }
                    sElapsed = (Component.getTime() - Component.msStart) + "ms: ";
                }
                sMsg = sMsg.replace(/\r/g, '\\r').replace(/\n/g, ' ');
                if (window && window.console) console.log(sElapsed + sMsg);
            }
        }
    }

    /**
     * Component.assert(f, s)
     *
     * Verifies conditions that must be true (for DEBUG builds only).
     *
     * The Closure Compiler should automatically remove all references to Component.assert() in non-DEBUG builds.
     * TODO: Add a task to the build process that "asserts" there are no instances of "assertion failure" in RELEASE builds.
     *
     * @param {boolean} f is the expression we are asserting to be true
     * @param {string} [s] is description of the assertion on failure
     */
    static assert(f, s)
    {
        if (DEBUG) {
            if (!f) {
                if (!s) s = "assertion failure";
                Component.log(s);
                throw new Error(s);
            }
        }
    }

    /**
     * Component.print(s)
     *
     * Components that inherit from this class should use this.print(), rather than Component.print(), because
     * if a Control Panel is loaded, it will override only the instance method, not the class method (overriding the
     * class method would improperly affect any other machines loaded on the same page).
     *
     * @this {Component}
     * @param {string} s
     */
    static print(s)
    {
        if (!COMPILED) {
            let i = s.lastIndexOf('\n');
            if (i >= 0) {
                Component.println(s.substr(0, i));
                s = s.substr(i + 1);
            }
            Component.printBuffer += s;
        }
    }

    /**
     * Component.println(s, type, id)
     *
     * Components that inherit from this class should use this.println(), rather than Component.println(), because
     * if a Control Panel is loaded, it will override only the instance method, not the class method (overriding the
     * class method would improperly affect any other machines loaded on the same page).
     *
     * @param {string} [s] is the message text
     * @param {string} [type] is the message type
     * @param {string} [id] is the caller's ID, if any
     */
    static println(s, type, id)
    {
        if (!COMPILED) {
            s = Component.printBuffer + (s || "");
            Component.log((id? (id + ": ") : "") + (s? ("\"" + s + "\"") : ""), type);
            Component.printBuffer = "";
        }
    }

    /**
     * Component.notice(s, fPrintOnly, id)
     *
     * notice() is like println() but implies a need for user notification, so we alert() as well.
     *
     * @param {string} s is the message text
     * @param {boolean} [fPrintOnly]
     * @param {string} [id] is the caller's ID, if any
     * @return {boolean}
     */
    static notice(s, fPrintOnly, id)
    {
        if (!COMPILED) {
            Component.println(s, Component.PRINT.NOTICE, id);
        }
        if (!fPrintOnly) Component.alertUser((id? (id + ": ") : "") + s);
        return true;
    }

    /**
     * Component.warning(s)
     *
     * @param {string} s describes the warning
     */
    static warning(s)
    {
        if (!COMPILED) {
            Component.println(s, Component.PRINT.WARNING);
        }
        Component.alertUser(s);
    }

    /**
     * Component.error(s)
     *
     * @param {string} s describes the error; an alert() is displayed as well
     */
    static error(s)
    {
        if (!COMPILED) {
            Component.println(s, Component.PRINT.ERROR);
        }
        Component.alertUser(s);
    }

    /**
     * Component.alertUser(sMessage)
     *
     * @param {string} sMessage
     */
    static alertUser(sMessage)
    {
        if (window) {
            window.alert(sMessage);
        } else {
            Component.log(sMessage);
        }
    }

    /**
     * Component.confirmUser(sPrompt)
     *
     * @param {string} sPrompt
     * @returns {boolean} true if the user clicked OK, false if Cancel/Close
     */
    static confirmUser(sPrompt)
    {
        let fResponse = false;
        if (window) {
            fResponse = window.confirm(sPrompt);
        }
        return fResponse;
    }

    /**
     * Component.promptUser()
     *
     * @param {string} sPrompt
     * @param {string} [sDefault]
     * @returns {string|null}
     */
    static promptUser(sPrompt, sDefault)
    {
        let sResponse = null;
        if (window) {
            sResponse = window.prompt(sPrompt, sDefault === undefined? "" : sDefault);
        }
        return sResponse;
    }

    /**
     * Component.appendControl(control, sText)
     *
     * @param {Object} control
     * @param {string} sText
     */
    static appendControl(control, sText)
    {
        control.value += sText;
        /*
         * Prevent the <textarea> from getting too large; otherwise, printing becomes slower and slower.
         */
        if (COMPILED) {
            sText = control.value;
            if (sText.length > 8192) control.value = sText.substr(sText.length - 4096);
        }
        control.scrollTop = control.scrollHeight;
    }

    /**
     * Component.replaceControl(control, sSearch, sReplace)
     *
     * @param {Object} control
     * @param {string} sSearch
     * @param {string} sReplace
     */
    static replaceControl(control, sSearch, sReplace)
    {
        let sText = control.value;
        let i = sText.lastIndexOf(sSearch);
        if (i < 0) {
            sText += sSearch + '\n';
        } else {
            sText = sText.substr(0, i) + sReplace + sText.substr(i + sSearch.length);
        }
        /*
         * Prevent the <textarea> from getting too large; otherwise, printing becomes slower and slower.
         */
        if (COMPILED && sText.length > 8192) sText = sText.substr(sText.length - 4096);
        control.value = sText;
        control.scrollTop = control.scrollHeight;
    }

    /**
     * Component.bindExternalControl(component, sBinding, sType)
     *
     * @param {Component} component
     * @param {string} sBinding
     * @param {string} [sType] is the external component type (default is "Panel")
     */
    static bindExternalControl(component, sBinding, sType = "Panel")
    {
        if (sBinding) {
            let target = Component.getComponentByType(sType, component.id);
            if (target) {
                let control = target.bindings[sBinding];
                if (control) {
                    component.setBinding("", sBinding, control);
                }
            }
        }
    }

    /**
     * Component.bindComponentControls(component, element, sAppClass)
     *
     * @param {Component} component
     * @param {HTMLElement} element from the DOM
     * @param {string} sAppClass
     */
    static bindComponentControls(component, element, sAppClass)
    {
        let aeControls = Component.getElementsByClass(element.parentNode, sAppClass + "-control");

        for (let iControl = 0; iControl < aeControls.length; iControl++) {

            let aeChildNodes = aeControls[iControl].childNodes;

            for (let iNode = 0; iNode < aeChildNodes.length; iNode++) {
                let control = aeChildNodes[iNode];
                if (control.nodeType !== 1 /* document.ELEMENT_NODE */) {
                    continue;
                }
                let sClass = control.getAttribute("class");
                if (!sClass) continue;
                let aClasses = sClass.split(" ");
                for (let iClass = 0; iClass < aClasses.length; iClass++) {
                    let parms;
                    sClass = aClasses[iClass];
                    switch (sClass) {
                        case sAppClass + "-binding":
                            parms = Component.getComponentParms(/** @type {HTMLElement} */(control));
                            if (parms && parms['binding'] !== undefined) {
                                component.setBinding(parms['type'], parms['binding'], /** @type {HTMLElement} */(control), parms['value']);
                            } else if (!parms || parms['type'] != "description") {
                                Component.log("Component '" + component.toString() + "' missing binding" + (parms? " for " + parms['type'] : ""), "warning");
                            }
                            iClass = aClasses.length;
                            break;
                        default:
                            // if (DEBUG) Component.log("Component.bindComponentControls(" + component.toString() + "): unrecognized control class \"" + sClass + "\"", "warning");
                            break;
                    }
                }
            }
        }
    }

    /**
     * Component.getComponents(idRelated)
     *
     * We could store components as properties, using the component's ID, and change
     * this linear lookup into a property lookup, but some components may have no ID.
     *
     * @param {string} [idRelated] of related component
     * @return {Array} of components
     */
    static getComponents(idRelated)
    {
        let i;
        let aComponents = [];
        /*
         * getComponentByID(id, idRelated)
         *
         * If idRelated is provided, we check it for a machine prefix, and use any
         * existing prefix to constrain matches to IDs with the same prefix, in order to
         * avoid matching components belonging to other machines.
         */
        if (idRelated) {
            if ((i = idRelated.indexOf('.')) > 0)
                idRelated = idRelated.substr(0, i + 1);
            else
                idRelated = "";
        }
        for (i = 0; i < Component.components.length; i++) {
            let component = Component.components[i];
            if (!idRelated || !component.id.indexOf(idRelated)) {
                aComponents.push(component);
            }
        }
        return aComponents;
    }

    /**
     * Component.getComponentByID(id, idRelated)
     *
     * We could store components as properties, using the component's ID, and change
     * this linear lookup into a property lookup, but some components may have no ID.
     *
     * @param {string} id of the desired component
     * @param {string} [idRelated] of related component
     * @return {Component|null}
     */
    static getComponentByID(id, idRelated)
    {
        if (id !== undefined) {
            let i;
            /*
             * If idRelated is provided, we check it for a machine prefix, and use any
             * existing prefix to constrain matches to IDs with the same prefix, in order to
             * avoid matching components belonging to other machines.
             */
            if (idRelated && (i = idRelated.indexOf('.')) > 0) {
                id = idRelated.substr(0, i + 1) + id;
            }
            for (i = 0; i < Component.components.length; i++) {
                if (Component.components[i]['id'] === id) {
                    return Component.components[i];
                }
            }
            if (Component.components.length) {
                Component.log("Component ID '" + id + "' not found", "warning");
            }
        }
        return null;
    }

    /**
     * Component.getComponentByType(sType, idRelated, componentPrev)
     *
     * @param {string} sType of the desired component
     * @param {string} [idRelated] of related component
     * @param {Component|null} [componentPrev] of previously returned component, if any
     * @return {Component|null}
     */
    static getComponentByType(sType, idRelated, componentPrev)
    {
        if (sType !== undefined) {
            let i;
            /*
             * If idRelated is provided, we check it for a machine prefix, and use any
             * existing prefix to constrain matches to IDs with the same prefix, in order to
             * avoid matching components belonging to other machines.
             */
            if (idRelated) {
                if ((i = idRelated.indexOf('.')) > 0) {
                    idRelated = idRelated.substr(0, i + 1);
                } else {
                    idRelated = "";
                }
            }
            for (i = 0; i < Component.components.length; i++) {
                if (componentPrev) {
                    if (componentPrev == Component.components[i]) componentPrev = null;
                    continue;
                }
                if (sType == Component.components[i].type && (!idRelated || !Component.components[i].id.indexOf(idRelated))) {
                    return Component.components[i];
                }
            }
            Component.log("Component type '" + sType + "' not found", "warning");
        }
        return null;
    }

    /**
     * Component.getComponentParms(element)
     *
     * @param {HTMLElement} element from the DOM
     */
    static getComponentParms(element)
    {
        let parms = null;
        let sParms = element.getAttribute("data-value");
        if (sParms) {
            try {
                parms = eval('(' + sParms + ')');
                /*
                 * We can no longer invoke removeAttribute() because some components (eg, Panel) need
                 * to run their initXXX() code more than once, to avoid initialization-order dependencies.
                 *
                 *      if (!DEBUG) {
                 *          element.removeAttribute("data-value");
                 *      }
                 */
            } catch(e) {
                Component.error(e.message + " (" + sParms + ")");
            }
        }
        return parms;
    }

    /**
     * Component.getElementsByClass(element, sClass, sObjClass)
     *
     * This is a cross-browser helper function, since not all browser's support getElementsByClassName()
     *
     * TODO: This should probably be moved into weblib.js at some point, along with the control binding functions above,
     * to keep all the browser-related code together.
     *
     * @param {HTMLDocument|HTMLElement|Node} element from the DOM
     * @param {string} sClass
     * @param {string} [sObjClass]
     * @return {Array|NodeList}
     */
    static getElementsByClass(element, sClass, sObjClass)
    {
        if (sObjClass) sClass += '-' + sObjClass + "-object";
        /*
         * Use the browser's built-in getElementsByClassName() if it appears to be available
         * (for example, it's not available in IE8, but it should be available in IE9 and up)
         */
        if (element.getElementsByClassName) {
            return element.getElementsByClassName(sClass);
        }
        let i, j, ae = [];
        let aeAll = element.getElementsByTagName("*");
        let re = new RegExp('(^| )' + sClass + '( |$)');
        for (i = 0, j = aeAll.length; i < j; i++) {
            if (re.test(aeAll[i].className)) {
                ae.push(aeAll[i]);
            }
        }
        if (!ae.length) {
            Component.log('No elements of class "' + sClass + '" found');
        }
        return ae;
    }

    /**
     * Component.getScriptCommands(sScript)
     *
     * This is a simple parser that breaks sScript into an array of commands, where each command
     * is an array of tokens, where tokens are sequences of characters separated by any of: tab, space,
     * carriage-return (CR), line-feed (LF), semicolon, single-quote, or double-quote; if a quote is
     * used, all characters up to the next matching quote become part of the token, allowing any of the
     * other separators to be part of the token.  CR, LF and semicolon also serve to terminate a command,
     * with semicolon being preferred, because it's 1) more visible, and 2) essential when the entire
     * script is a multi-line string where all CR/LF were replaced by spaces (which is what Jekyll does,
     * and since we can't change Jekyll, it's what our own MarkDown Front Matter parser does as well;
     * see convertMD() in markout.js, where the aCommandDefs array is built).
     *
     * Backslash sequences like \n, \r, and \\ have already been converted to LF, CR and backslash
     * characters, since the entire script string is injected into a JavaScript function call, so any
     * backslash sequence that JavaScript supports is automatically converted:
     *
     *      \0  \'  \"  \\  \n  \r  \v  \t  \b  \f  \uXXXX \xXX
     *                      ^J  ^M  ^K  ^I  ^H  ^L
     *
     * To support any other non-printable 8-bit character, such as ESC, you should use \xXX, where XX
     * is the ASCII code in hex.  For ESC, that would be \x1B.
     *
     * @param {string} sScript
     * @return {Array}
     */
    static getScriptCommands(sScript)
    {
        let cch = sScript.length;
        let aCommands = [], aTokens = [], sToken = "", chQuote = null;
        for (let i = 0; i < cch; i++) {
            let ch = sScript[i];
            if (ch == '"' || ch == "'") {
                if (chQuote && ch != chQuote) {
                    sToken += ch;
                    continue;
                }
                if (!chQuote) {
                    chQuote = ch;
                } else {
                    chQuote = null;
                }
                if (sToken) {
                    aTokens.push(sToken);
                    sToken = "";
                }
                continue;
            }
            if (!chQuote) {
                if (ch == '\r' || ch == '\n') {
                    ch = ';';
                }
                if (ch == ' ' || ch == '\t' || ch == ';') {
                    if (sToken) {
                        aTokens.push(sToken);
                        sToken = "";
                    }
                    if (ch == ';' && aTokens.length) {
                        aCommands.push(aTokens);
                        aTokens = [];
                    }
                    continue;
                }
            }
            sToken += ch;
        }
        if (sToken) {
            aTokens.push(sToken);
        }
        if (aTokens.length) {
            aCommands.push(aTokens);
        }
        return aCommands;
    }

    /**
     * Component.processScript(idMachine, sScript)
     *
     * @param {string} idMachine
     * @param {string} [sScript]
     * @return {boolean}
     */
    static processScript(idMachine, sScript)
    {
        let fSuccess = false;
        idMachine += ".machine";
        if (!sScript) {
            delete Component.commands[idMachine];
            fSuccess = true;
        }
        else if (typeof sScript == "string" && !Component.commands[idMachine]) {
            fSuccess = true;
            Component.commands[idMachine] = Component.getScriptCommands(sScript);
            if (!Component.processCommands(idMachine)) {
                fSuccess = false;
            }
        }
        return fSuccess;
    }

    /**
     * Component.processCommands(idMachine)
     *
     * @param {string} idMachine
     * @return {boolean}
     */
    static processCommands(idMachine)
    {
        let fSuccess = true;
        let aCommands = Component.commands[idMachine];

     // let dbg = Component.getComponentByType("Debugger", idMachine);

        while (aCommands && aCommands.length) {

            let aTokens = aCommands.splice(0, 1)[0];
            let sCommand = aTokens[0];

            /*
             * It's possible to route this output to the Debugger window with dbg.println()
             * instead, but it's a bit too confusing mingling script output in a window that
             * already mingles Debugger and machine output.
             */
            Component.println(aTokens.join(' '), Component.PRINT.SCRIPT);

            let fnCallReady = null;
            if (Component.asyncCommands.indexOf(sCommand) >= 0) {
                fnCallReady = function processNextCommand() {
                    return function() {
                        Component.processCommands(idMachine);
                    }
                }();
            }

            let fnCommand = Component.globalCommands[sCommand];
            if (fnCommand) {
                if (!fnCallReady) {
                    fSuccess = fnCommand(aTokens[1], aTokens[2], aTokens[3]);
                } else {
                    if (!fnCommand(fnCallReady, aTokens[1], aTokens[2], aTokens[3])) break;
                }
            }
            else {
                fSuccess = false;
                let component = Component.getComponentByType(aTokens[1], idMachine);
                if (component) {
                    fnCommand = Component.componentCommands[sCommand];
                    if (fnCommand) {
                        fSuccess = fnCommand(component, aTokens[2], aTokens[3]);
                    }
                    else {
                        let exports = component['exports'];
                        if (exports) {
                            fnCommand = exports[sCommand];
                            if (fnCommand) {
                                fSuccess = true;
                                if (!fnCallReady) {
                                    fSuccess = fnCommand.call(component, aTokens[2], aTokens[3]);
                                } else {
                                    if (!fnCommand.call(component, fnCallReady, aTokens[2], aTokens[3])) break;
                                }
                            }
                        }
                    }
                }
            }

            if (!fSuccess) {
                Component.alertUser("Script error: '" + sCommand + "' command " + (fnCommand? " failed" : " not recognized"));
                break;
            }
        }

        if (aCommands && !aCommands.length) {
            delete Component.commands[idMachine];
        }

        return fSuccess;
    }

    /**
     * Component.scriptAlert(sMessage)
     *
     * @param {string} sMessage
     * @return {boolean}
     */
    static scriptAlert(sMessage)
    {
        Component.alertUser(sMessage);
        return true;
    }

    /**
     * Component.scriptSelect(component, sBinding, sValue)
     *
     * @param {Component} component
     * @param {string} sBinding
     * @param {string} sValue
     * @return {boolean}
     */
    static scriptSelect(component, sBinding, sValue)
    {
        let fSuccess = false;
        let aBindings = component['bindings'];
        let control = aBindings[sBinding];
        if (control) {
            for (let i = 0; i < control.options.length; i++) {
                if (control.options[i].textContent == sValue) {
                    if (control.selectedIndex != i) {
                        control.selectedIndex = i;
                    }
                    fSuccess = true;
                    break;
                }
            }
        }
        return fSuccess;
    }

    /**
     * Component.scriptSleep(fnCallback, sDelay)
     *
     * @param {function()} fnCallback
     * @param {string} sDelay (in milliseconds)
     * @return {boolean}
     */
    static scriptSleep(fnCallback, sDelay)
    {
        setTimeout(fnCallback, +sDelay);
        return false;
    }

    /**
     * toString()
     *
     * @this {Component}
     * @return {string}
     */
    toString()
    {
        return (this.name? this.name : (this.id || this.type));
    }

    /**
     * getMachineNum()
     *
     * @this {Component}
     * @return {number} unique machine number
     */
    getMachineNum()
    {
        let nMachine = 1;
        if (this.idMachine) {
            let aDigits = this.idMachine.match(/\d+/);
            if (aDigits !== null)
                nMachine = parseInt(aDigits[0], 10);
        }
        return nMachine;
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * Component's setBinding() method is intended to be overridden by subclasses.
     *
     * @this {Component}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea", "canvas")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, 'print')
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @return {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        switch (sBinding) {

        case 'clear':
            if (!this.bindings[sBinding]) {
                this.bindings[sBinding] = control;
                control.onclick = (function(component) {
                    return function clearControl() {
                        if (component.bindings['print']) {
                            component.bindings['print'].value = "";
                        }
                    };
                }(this));
            }
            return true;

        case 'print':
            if (!this.bindings[sBinding]) {
                let controlTextArea = /** @type {HTMLTextAreaElement} */(control);
                this.bindings[sBinding] = controlTextArea;
                /**
                 * Override this.notice() with a replacement function that eliminates the Component.alertUser() call.
                 *
                 * @this {Component}
                 * @param {string} s
                 * @return {boolean}
                 */
                this.notice = function noticeControl(s /*, fPrintOnly, id*/) {
                    this.println(s, this.type);
                    return true;
                };
                /*
                 * This was added for Firefox (Safari will clear the <textarea> on a page reload, but Firefox does not).
                 */
                controlTextArea.value = "";
                this.print = function(control) {
                    return function printControl(s) {
                        Component.appendControl(control, s);
                    };
                }(controlTextArea);
                this.println = function(component, control) {
                    return function printlnControl(s, type, id) {
                        if (!s) s = "";
                        if (type != Component.PRINT.PROGRESS || s.slice(-3) != "...") {
                            if (type) s = type + ": " + s;
                            Component.appendControl(control, s + '\n');
                        } else {
                            Component.replaceControl(control, s, s + '.');
                        }
                        if (!COMPILED && window && window.console) Component.println(s, type, id);
                    };
                }(this, controlTextArea);
            }
            return true;

        default:
            return false;
        }
    }

    /**
     * log(s, type)
     *
     * For diagnostic output only.
     *
     * WARNING: Even though this function's body is completely wrapped in DEBUG, that won't prevent the Closure Compiler
     * from including it, so all calls must still be prefixed with "if (DEBUG) ....".  For this reason, the class method,
     * Component.log(), is preferred, because the compiler IS smart enough to remove those calls.
     *
     * @this {Component}
     * @param {string} [s] is the message text
     * @param {string} [type] is the message type
     */
    log(s, type)
    {
        if (!COMPILED) {
            Component.log(s, type || this.id || this.type);
        }
    }

    /**
     * assert(f, s)
     *
     * Verifies conditions that must be true (for DEBUG builds only).
     *
     * WARNING: Make sure you preface all calls to this.assert() with "if (DEBUG)", because unlike Component.assert(),
     * the Closure Compiler can't be sure that this instance method hasn't been overridden, so it refuses to treat it as
     * dead code in non-DEBUG builds.
     *
     * TODO: Add a task to the build process that "asserts" there are no instances of "assertion failure" in RELEASE builds.
     *
     * @this {Component}
     * @param {boolean|number} f is the expression asserted to be true
     * @param {string} [s] is a description of the assertion to be displayed or logged on failure
     */
    assert(f, s)
    {
        if (DEBUG) {
            if (!f) {
                s = "assertion failure in " + (this.id || this.type) + (s? ": " + s : "");
                if (DEBUGGER && this.dbg) {
                    this.dbg.stopCPU();
                    /*
                     * Why do we throw an Error only to immediately catch and ignore it?  Simply to give
                     * any IDE the opportunity to inspect the application's state.  Even when the IDE has
                     * control, you should still be able to invoke Debugger commands from the IDE's REPL,
                     * using the global function that the Debugger constructor defines; eg:
                     *
                     *      pcx86('r')
                     *      pcx86('dw 0:0')
                     *      pcx86('h')
                     *      ...
                     *
                     * If you have no desire to stop on assertions, consider this a no-op.  However, another
                     * potential benefit of creating an Error object is that, for browsers like Chrome, we get
                     * a stack trace, too.
                     */
                    try {
                        throw new Error(s);
                    } catch(e) {
                        this.println(e.stack || e.message);
                    }
                    return;
                }
                this.log(s);
                throw new Error(s);
            }
        }
    }

    /**
     * print(s)
     *
     * Components using this.print() should wait until after their constructor has run to display any messages, because
     * if a Control Panel has been loaded, its override will not take effect until its own constructor has run.
     *
     * @this {Component}
     * @param {string} s
     */
    print(s)
    {
        Component.print(s);
    }

    /**
     * println(s, type, id)
     *
     * Components using this.println() should wait until after their constructor has run to display any messages, because
     * if a Control Panel has been loaded, its override will not take effect until its own constructor has run.
     *
     * @this {Component}
     * @param {string} [s] is the message text
     * @param {string} [type] is the message type
     * @param {string} [id] is the caller's ID, if any
     */
    println(s, type, id)
    {
        Component.println(s, type, id || this.id);
    }

    /**
     * status(format, ...args)
     *
     * status() is like println() but it also includes information about the component (ie, the component type),
     * which is why there is no corresponding Component.status() function.
     *
     * @this {Component}
     * @param {string} format
     * @param {...} args
     */
    status(format, ...args)
    {
        this.println(this.type + ": " + Str.sprintf(format, ...args));
    }

    /**
     * notice(s, fPrintOnly, id)
     *
     * notice() is like println() but implies a need for user notification, so we alert() as well; however, if this.println()
     * is overridden, this.notice will be replaced with a similar override, on the assumption that the override is taking care
     * of alerting the user.
     *
     * @this {Component}
     * @param {string} s is the message text
     * @param {boolean} [fPrintOnly]
     * @param {string} [id] is the caller's ID, if any
     * @return {boolean}
     */
    notice(s, fPrintOnly, id)
    {
        if (!fPrintOnly) {
            /*
             * See if the associated computer, if any, is "unloading"....
             */
            let computer = Component.getComponentByType("Computer", this.id);
            if (computer && computer.flags.unloading) {
                console.log("ignoring notice during unload: " + s);
                return false;
            }
        }
        Component.notice(s, fPrintOnly, id || this.type);
        return true;
    }

    /**
     * setError(s)
     *
     * Set a fatal error condition
     *
     * @this {Component}
     * @param {string} s describes a fatal error condition
     */
    setError(s)
    {
        this.flags.error = true;
        this.notice(s);         // TODO: Any cases where we should still prefix this string with "Fatal error: "?
    }

    /**
     * clearError()
     *
     * Clear any fatal error condition
     *
     * @this {Component}
     */
    clearError() {
        this.flags.error = false;
    }

    /**
     * isError()
     *
     * Report any fatal error condition
     *
     * @this {Component}
     * @return {boolean} true if a fatal error condition exists, false if not
     */
    isError()
    {
        if (this.flags.error) {
            this.println(this.toString() + " error");
            return true;
        }
        return false;
    }

    /**
     * isReady(fnReady)
     *
     * Return the "ready" state of the component; if the component is not ready, it will queue the optional
     * notification function, otherwise it will immediately call the notification function, if any, without queuing it.
     *
     * NOTE: Since only the Computer component actually cares about the "readiness" of other components, the so-called
     * "queue" of notification functions supports exactly one function.  This keeps things nice and simple.
     *
     * @this {Component}
     * @param {function()} [fnReady]
     * @return {boolean} true if the component is in a "ready" state, false if not
     */
    isReady(fnReady)
    {
        if (fnReady) {
            if (this.flags.ready) {
                fnReady();
            } else {
                if (MAXDEBUG) this.log("NOT ready");
                this.fnReady = fnReady;
            }
        }
        return this.flags.ready;
    }

    /**
     * setReady(fReady)
     *
     * Set the "ready" state of the component to true, and call any queued notification functions.
     *
     * @this {Component}
     * @param {boolean} [fReady] is assumed to indicate "ready" unless EXPLICITLY set to false
     */
    setReady(fReady)
    {
        if (!this.flags.error) {
            this.flags.ready = (fReady !== false);
            if (this.flags.ready) {
                if (MAXDEBUG /* || this.name */) this.log("ready");
                let fnReady = this.fnReady;
                this.fnReady = null;
                if (fnReady) fnReady();
            }
        }
    }

    /**
     * isBusy(fCancel)
     *
     * Return the "busy" state of the component
     *
     * @this {Component}
     * @param {boolean} [fCancel] is set to true to cancel a "busy" state
     * @return {boolean} true if "busy", false if not
     */
    isBusy(fCancel)
    {
        if (this.flags.busy) {
            if (fCancel) {
                this.flags.busyCancel = true;
            } else if (fCancel === undefined) {
                this.println(this.toString() + " busy");
            }
        }
        return this.flags.busy;
    }

    /**
     * setBusy(fBusy)
     *
     * Update the current busy state; if a busyCancel request is pending, it will be honored now.
     *
     * @this {Component}
     * @param {boolean} fBusy
     * @return {boolean}
     */
    setBusy(fBusy)
    {
        if (this.flags.busyCancel) {
            this.flags.busy = false;
            this.flags.busyCancel = false;
            return false;
        }
        if (this.flags.error) {
            this.println(this.toString() + " error");
            return false;
        }
        this.flags.busy = fBusy;
        return this.flags.busy;
    }

    /**
     * powerUp(fSave)
     *
     * @this {Component}
     * @param {Object|null} data
     * @param {boolean} [fRepower] is true if this is "repower" notification
     * @return {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        this.flags.powered = true;
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {Component}
     * @param {boolean} fSave
     * @param {boolean} [fShutdown]
     * @return {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
     */
    powerDown(fSave, fShutdown)
    {
        if (fShutdown) this.flags.powered = false;
        return true;
    }

    /**
     * clearBits(num, bits)
     *
     * Helper function for clearing bits in numbers with more than 32 bits.
     *
     * @param {number} num
     * @param {number} bits
     * @return {number}
     */
    clearBits(num, bits)
    {
        let shift = Math.pow(2, 32);
        let numHi = (num / shift)|0;
        let bitsHi = (bits / shift)|0;
        return (num & ~bits) + (numHi & ~bitsHi) * shift;
    }

    /**
     * setBits(num, bits)
     *
     * Helper function for setting bits in numbers with more than 32 bits.
     *
     * @param {number} num
     * @param {number} bits
     * @return {number}
     */
    setBits(num, bits)
    {
        let shift = Math.pow(2, 32);
        let numHi = (num / shift)|0;
        let bitsHi = (bits / shift)|0;
        return (num | bits) + (numHi | bitsHi) * shift;
    }

    /**
     * testBits(num, bits)
     *
     * Helper function for testing bits in numbers with more than 32 bits.
     *
     * @param {number} num
     * @param {number} bits
     * @return {boolean}
     */
    testBits(num, bits)
    {
        let shift = Math.pow(2, 32);
        let numHi = (num / shift)|0;
        let bitsHi = (bits / shift)|0;
        return ((num & bits) == (bits|0) && (numHi & bitsHi) == bitsHi);
    }

    /**
     * messageEnabled(bitsMessage)
     *
     * If bitsMessage is Messages.DEFAULT (0), then the component's Messages category is used,
     * and if it's Messages.ALL (-1), then the message is always displayed, regardless what's enabled.
     *
     * @this {Component}
     * @param {number} [bitsMessage] is zero or more Message flags
     * @return {boolean} true if all specified message enabled, false if not
     */
    messageEnabled(bitsMessage = 0)
    {
        if (DEBUGGER && this.dbg) {
            if (bitsMessage % 2) bitsMessage--;
            bitsMessage = bitsMessage || this.bitsMessage;
            if ((bitsMessage|1) == -1 || this.testBits(this.dbg.bitsMessage, bitsMessage)) {
                return true;
            }
        }
        return false;
    }

    /**
     * printf(format, ...args)
     *
     * If format is a number, then it's treated as one or more Messages flags, and the real format
     * string is the first arg.
     *
     * @this {Component}
     * @param {string|number} format
     * @param {...} args
     */
    printf(format, ...args)
    {
        if (DEBUGGER && this.dbg) {
            let bitsMessage = 0;
            if (typeof format == "number") {
                bitsMessage = format;
                format = args.shift();
            }
            if (this.messageEnabled(bitsMessage)) {
                let s = Str.sprintf(format, ...args);
                /*
                 * Since dbg.message() calls println(), we strip any ending linefeed.
                 *
                 * We could bypass the Debugger and go straight to this.print(), but we would lose
                 * the benefits of debugger messages (eg, automatic buffering, halting, yielding, etc).
                 */
                if (s.slice(-1) == '\n') s = s.slice(0, -1);
                this.dbg.message(s, !!(bitsMessage % 2));   // pass true for fAddress if Messages.ADDRESS is set
            }
        }
    }

    /**
     * printMessage(sMessage, bitsMessage, fAddress)
     *
     * If bitsMessage is not specified, the component's Messages category is used, and if bitsMessage is true,
     * the message is displayed regardless.
     *
     * @this {Component}
     * @param {string} sMessage is any caller-defined message string
     * @param {number|boolean} [bitsMessage] is zero or more Messages flag(s)
     * @param {boolean} [fAddress] is true to display the current address
     */
    printMessage(sMessage, bitsMessage, fAddress)
    {
        if (DEBUGGER && this.dbg) {
            if (typeof bitsMessage == "boolean") {
                bitsMessage = bitsMessage? -1 : 0;
            }
            if (this.messageEnabled(bitsMessage)) {
                this.dbg.message(sMessage, fAddress);
            }
        }
    }

    /**
     * printMessageIO(port, bOut, addrFrom, name, bIn, bitsMessage)
     *
     * If bitsMessage is not specified, the component's Messages category is used,
     * and if bitsMessage is true, the message is displayed if Messages.PORT is enabled also.
     *
     * @this {Component}
     * @param {number} port
     * @param {number} [bOut] if an output operation
     * @param {number} [addrFrom]
     * @param {string} [name] of the port, if any
     * @param {number} [bIn] is the input value, if known, on an input operation
     * @param {number|boolean} [bitsMessage] is zero or more Messages flag(s)
     */
    printMessageIO(port, bOut, addrFrom, name, bIn, bitsMessage)
    {
        if (DEBUGGER && this.dbg) {
            if (bitsMessage === true) {
                bitsMessage = 0;
            } else if (bitsMessage == undefined) {
                bitsMessage = this.bitsMessage;
            }
            this.dbg.messageIO(this, port, bOut, addrFrom, name, bIn, bitsMessage);
        }
    }
}

/*
 * Types recognized and supported by selected functions (eg, Computer.getMachineParm())
 */
Component.TYPE = {
    NUMBER:     "number",
    OBJECT:     "object",
    STRING:     "string"
};

/*
 * These are the standard PRINT values you can pass as an optional argument to println(); in reality,
 * you can pass anything you want, because they are simply prepended to the message, although PROGRESS
 * messages may also be merged with earlier similar messages to keep the output buffer under control.
 */
Component.PRINT = {
    ERROR:      "error",
    NOTICE:     "notice",
    PROGRESS:   "progress",
    SCRIPT:     "script",
    WARNING:    "warning"
};

/*
 * Every component created on the current page is recorded in this array (see Component.add()),
 * enabling any component to locate another component by ID (see Component.getComponentByID())
 * or by type (see Component.getComponentByType()).
 *
 * Every machine on the page are now recorded as well, by their machine ID.  We then record the
 * various resources used by that machine.
 *
 * Includes a fallback for non-browser-based environments (ie, Node).  TODO: This will need to be
 * tailored to Node, probably using the global object instead of the window object, if we ever want
 * to support multi-machine configs in that environment.
 */
if (window) {
    if (!window['PCjs']) window['PCjs'] = {};
    if (!window['PCjs']['Machines']) window['PCjs']['Machines'] = {};
    if (!window['PCjs']['Components']) window['PCjs']['Components'] = [];
    if (!window['PCjs']['Commands']) window['PCjs']['Commands'] = {};
}
Component.machines = window? window['PCjs']['Machines'] : {};
Component.components = window? window['PCjs']['Components'] : [];
Component.commands = window? window['PCjs']['Commands'] : {};

Component.asyncCommands = [
    'hold', 'sleep', 'wait'
];
Component.globalCommands = {
    'alert': Component.scriptAlert,
    'sleep': Component.scriptSleep
};
Component.componentCommands = {
    'select':   Component.scriptSelect
};
Component.printBuffer = "";

/*
 * The following polyfills provide ES5 functionality that's missing in older browsers (eg, IE8),
 * allowing PCjs apps to run without slamming into exceptions; however, due to the lack of HTML5 canvas
 * support in those browsers, all you're likely to see are "soft" errors (eg, "Missing <canvas> support").
 *
 * Perhaps we can implement a text-only faux video display for a fun retro-browser experience someday.
 *
 * TODO: Come up with a better place to put these polyfills.  We will likely have more if we decide to
 * make the leap from ES5 to ES6 features.
 */

/*
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(obj, start) {
        for (let i = (start || 0), j = this.length; i < j; i++) {
            if (this[i] === obj) { return i; }
        }
        return -1;
    }
}

/*
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 */
if (!Array.isArray) {
    Array.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}

/*
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
 */
if (!Function.prototype.bind) {
    Function.prototype.bind = function(obj) {
        if (typeof this != "function") {
            // Closest thing possible to the ECMAScript 5 internal IsCallable function
            throw new TypeError("Function.prototype.bind: non-callable object");
        }
        let args = Array.prototype.slice.call(arguments, 1);
        let fToBind = this;
        let fnNOP = /** @constructor */ (function() {});
        let fnBound = function() {
            return fToBind.apply(this instanceof fnNOP && obj? this : obj, args.concat(/** @type {Array} */(Array.prototype.slice.call(arguments))));
        };
        fnNOP.prototype = this.prototype;
        fnBound.prototype = new fnNOP();
        return fnBound;
    };
}


/**
 * @copyright https://www.pcjs.org/machines/osi/c1p/lib/defines.js (C) 2012-2025 Jeff Parsons
 */

/**
 * @define {string}
 */
var APPCLASS = "c1p";           // this @define is the default application class (eg, "pcx86", "c1p")

/**
 * @define {string}
 */
var APPNAME = "C1Pjs";          // this @define is the default application name (eg, "PCx86", "C1Pjs")

/**
 * @define {boolean}
 *
 * WARNING: DEBUGGER needs to accurately reflect whether or not the Debugger component is (or will be) loaded.
 * In the compiled case, we rely on the Closure Compiler to override DEBUGGER as appropriate.  When it's *false*,
 * nearly all of debugger.js will be conditionally removed by the compiler, reducing it to little more than a
 * "type skeleton", which also solves some type-related warnings we would otherwise have if we tried to remove
 * debugger.js from the compilation process altogether.
 *
 * However, when we're in "development mode" and running uncompiled code in debugger-less configurations,
 * I would like to skip loading debugger.js altogether.  When doing that, we must ALSO arrange for an additional file
 * (nodebugger.js) to be loaded immediately after this file, which *explicitly* overrides DEBUGGER with *false*.
 */
var DEBUGGER = true;            // this @define is overridden by the Closure Compiler to remove Debugger-related support

/*
 * Combine all the shared globals and machine-specific globals into one machine-specific global object,
 * which all machine components should start using; eg: "if (C1PJS.DEBUG) ..." instead of "if (DEBUG) ...".
 */
var C1PJS = {
    APPCLASS:    APPCLASS,
    APPNAME:     APPNAME,
    APPVERSION:  APPVERSION,    // shared
    COMPILED:    COMPILED,      // shared
    CSSCLASS:    CSSCLASS,      // shared
    DEBUG:       DEBUG,         // shared
    DEBUGGER:    DEBUGGER,
    MAXDEBUG:    MAXDEBUG,      // shared
    PRIVATE:     PRIVATE,       // shared
    SITEURL:     SITEURL        // shared
};

/**
 * @copyright https://www.pcjs.org/machines/osi/c1p/lib/panel.js (C) 2012-2025 Jeff Parsons
 */


/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @unrestricted
 */
class C1PPanel extends Component {
    /**
     * C1PPanel(parmsPanel)
     *
     * The Panel component has no required (parmsPanel) properties.
     *
     * @this {C1PPanel}
     * @param {Object} parmsPanel
     */
    constructor(parmsPanel)
    {
        super("C1PPanel", parmsPanel);

        this.flags.powered = false;
    }

    /**
     * The Panel doesn't have any bindings of its own; it passes along all binding requests to
     * the Computer, CPU, Keyboard and Debugger components. The order shouldn't matter, since any
     * component that doesn't recognize the specified binding should simply ignore it.
     *
     * @this {C1PPanel}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea", "canvas")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "reset")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @return {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        if (this.cmp && this.cmp.setBinding(sHTMLType, sBinding, control, sValue)) return true;
        if (this.cpu && this.cpu.setBinding(sHTMLType, sBinding, control, sValue)) return true;
        if (this.kbd && this.kbd.setBinding(sHTMLType, sBinding, control, sValue)) return true;
        if (DEBUGGER && this.dbg && this.dbg.setBinding(sHTMLType, sBinding, control, sValue)) return true;
        return super.setBinding(sHTMLType, sBinding, control, sValue);
    }

    /**
     * @this {C1PPanel}
     * @param {boolean} fOn
     * @param {C1PComputer} cmp
     */
    setPower(fOn, cmp)
    {
        if (fOn && !this.flags.powered) {
            this.flags.powered = true;
            this.cmp = cmp;
            this.cpu = cmp.getComponentByType("cpu");
            this.kbd = cmp.getComponentByType("keyboard");
            if (DEBUGGER) this.dbg = cmp.getComponentByType("debugger");
            C1PPanel.init();
        }
    }

    /**
     * C1PPanel.init()
     *
     * This function operates on every HTML element of class "panel", extracting the
     * JSON-encoded parameters for the C1PPanel constructor from the element's "data-value"
     * attribute, invoking the constructor to create a C1PPanel component, and then binding
     * any associated HTML controls to the new component.
     *
     * NOTE: Unlike most other component init() functions, this one is designed to be
     * called multiple times: once at load time, so that we can binding our print()
     * function to the panel's output control ASAP, and again when the C1PComputer component
     * is verifying that all components are ready and invoking their setPower() functions.
     *
     * Our setPower() method gives us a second opportunity to notify any components that
     * that might care (eg, C1PCPU, C1PKeyboard, and C1PDebugger) that we have some controls
     * they might want to use.
     */
    static init()
    {
        var fReady = false;
        var aePanels = Component.getElementsByClass(document, C1PJS.APPCLASS, "panel");
        for (var iPanel=0; iPanel < aePanels.length; iPanel++) {
            var ePanel = aePanels[iPanel];
            var parmsPanel = Component.getComponentParms(ePanel);
            var panel = Component.getComponentByID(parmsPanel['id']);
            if (!panel) {
                fReady = true;
                panel = new C1PPanel(parmsPanel);
            }
            Component.bindComponentControls(panel, ePanel, C1PJS.APPCLASS);
            if (fReady) panel.setReady();
        }
    }
}

/*
 * Initialize every Panel module on the page.
 */
Web.onInit(C1PPanel.init);

/**
 * @copyright https://www.pcjs.org/machines/osi/c1p/lib/cpu.js (C) 2012-2025 Jeff Parsons
 */


/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @unrestricted
 */
class C1PCPU extends Component {
    /**
     * C1PCPU(parmsCPU)
     *
     * The C1PCPU object has one component-specific initialization property:
     *
     *      autoStart: true to automatically start, false to not, or null (default)
     *      to make the autoStart decision based on whether or not a Debugger is
     *      installed (if there's no Debugger AND no "Run" button, then auto-start,
     *      otherwise don't)
     *
     * It is hard-coded to simulate a 6502 microprocessor, but it also contains
     * hooks into other components for communication with the outside world (eg,
     * Panel and Debugger components). This is a logical simulation, not a physical
     * simulation, and performance is important, so we take lots of liberties; any
     * idiosyncrasies of actual 6502 hardware may not be simulated here, unless it
     * affects the accuracy of the simulation when running actual 6502 software.
     *
     * @this {C1PCPU}
     * @param {Object} parmsCPU
     */
    constructor(parmsCPU)
    {
        super("C1PCPU", parmsCPU);

        this.clearRegs();
        this.flags.powered = false;
        this.flags.running = false;
        var s = Web.getURLParm('autoStart');
        if (s == "true" || s == "false") {
            this.fAutoStart = JSON.parse(s);
        } else {
            this.fAutoStart = parmsCPU['autoStart'];
        }

        /*
         * speed is a number from 0 to 2, where 0 means run as close to 1Mhz as possible,
         * 1 means run at the fastest safe speed, and 2 means run at maximum speed.
         *
         * It's updated via the setSpeed() function, which the Debugger's "option" command
         * uses to adjust the virtual speed (eg, "o slow", "o fast").  There may also
         * be a button present to control the speed as well (using the "setSpeed" binding).
         */
        this.SPEED_SLOW = 0;        // see this.mhzSlow
        this.SPEED_FAST = 1;        // see this.mhzFast
        this.SPEED_MAX  = 2;
        this.speed = this.SPEED_SLOW;
        this.nCyclesPerSecond = 1000000;

        /*
         * Additional values that control the overall speed of the simulated hardware,
         * and the frequency at which various updates should occur.  There are no UI
         * mechanisms for tweaking these values (yet).
         *
         * NOTE: Use of the term "second" below refers to a virtual CPU second, consisting of
         * 1 million simulated cycles.  The values below are used to divide those 1 million
         * cycles into intervals of "work", and as long we are limiting the simulation to 1Mhz
         * per ACTUAL second, then 1 virtual second == 1 real second.
         *
         * However, if the setSpeed() function is used to lift the 1Mhz limit, then 1 virtual
         * second may become much shorter, which is why you may briefly notice the video and/or
         * status (control panel) updates occurring more frequently. To compensate, calcCycles()
         * will automatically scale these values if a recent speed recalculation reveals that
         * we're running significantly faster than 1Mhz.
         */
        this.nYieldsPerSecond = 30;
        this.nVideoUpdatesPerSecond = 30;
        this.nStatusUpdatesPerSecond = 5;
        this.mhzSlow = 1;
        this.mhzFast = 8;
        this.aSpeeds = ["Slow", "Fast", "Max"];
        this.aSpeedDescs = ["(" + this.mhzSlow + "Mhz)", "(up to " + this.mhzFast + "Mhz)", "(unlimited)"];

        /*
         * Lists of notification handlers: aReadNotify and aWriteNotify are lists (ie, Arrays)
         * of 4-element sub-arrays that, in turn, contain:
         *
         *      [0]: starting address of memory range to monitor
         *      [1]: ending address of memory range to monitor (inclusive)
         *      [2]: registered component
         *      [3]: registered function to call for every read/write from/to memory in that range
         *
         * The virtual Serial Port and virtual Keyboard components use these handlers to trap
         * references to their respective memory-based "ports".  Also, the ROM component uses it
         * to "repair" any writes to its address range, since memory is one big array, and arrays
         * don't support "write-only" regions.
         *
         * NOTE: the Video component does NOT use notification handlers, because video memory
         * is written (and occasionally read) far too frequently for that to be efficient.  We
         * just let the CPU pound on it like any other chunk of memory, and then make periodic
         * calls directly to the Video component to refresh all portions of the video buffer
         * that have changed since the last refresh. See displayVideo() for more details.
         *
         * WARNING: Write notifications currently do not catch STACK writes (ie, BRK, JSR, PHA and
         * PHP instructions), because I simply haven't added the necessary code.  Besides, JSR is
         * one of the most-executed instructions, so I'd rather not slow it down. Note that this
         * STACK write limitation affects both the CPU's write-notification handlers AND the Debugger's
         * write breakpoints.
         */
        this.aReadNotify = [];
        this.aWriteNotify = [];

        /*
         * To speed up the processing of read and write notification handlers, we keep track of
         * lower and upper address bounds for each set.  These variables maintain those bounds.
         * They are initialized to values outside the accessible range of addresses.
         */
        this.addrReadLower = 0x10000;
        this.addrReadUpper = 0x0;
        this.addrWriteLower = 0x10000;
        this.addrWriteUpper = 0x0;

        /*
         * Processor status register (P) flag masks
         */
        this.BIT_PN = 0x80;     // N = sign
        this.BIT_PV = 0x40;     // V = overflow
        this.BIT_PB = 0x10;     // B = break
        this.BIT_PD = 0x08;     // D = decimal
        this.BIT_PI = 0x04;     // I = interrupt
        this.BIT_PZ = 0x02;     // Z = zero
        this.BIT_PC = 0x01;     // C = carry

     // this.VECTOR_NMI     = 0xfffa;
        this.VECTOR_RESET   = 0xfffc;
     // this.VECTOR_IRQ     = 0xfffe;

        /*
         * Popular opcodes
         */
        this.OP_JSR         = 0x20;

        /*
         * opSim operation codes
         */
        this.OP_SIM         = 0x02;
        this.SIMOP_HLT      = 0x00;
        this.SIMOP_MSG      = 0x01;

        /*
         * This 256-entry array of opcode functions is at the heart of the CPU engine: step(n).
         *
         * It might be worth trying a switch() statement instead, to see how the performance compares,
         * but I suspect that will vary quite a bit across JavaScript engines; for now, I'm putting my
         * money on array lookup.
         */
        this.aOpcodeFuncs = [
            this.opBRK,         // 0x00
            this.opORAindx,     // 0x01
            this.opSim,         // 0x02
            this.opUndefined,   // 0x03
            this.opUndefined,   // 0x04
            this.opORAzp,       // 0x05
            this.opASLzp,       // 0x06
            this.opUndefined,   // 0x07
            this.opPHP,         // 0x08
            this.opORAimm,      // 0x09
            this.opASLacc,      // 0x0a
            this.opUndefined,   // 0x0b
            this.opUndefined,   // 0x0c
            this.opORAabs,      // 0x0d
            this.opASLabs,      // 0x0e
            this.opUndefined,   // 0x0f
            this.opBPL,         // 0x10
            this.opORAindy,     // 0x11
            this.opUndefined,   // 0x12
            this.opUndefined,   // 0x13
            this.opUndefined,   // 0x14
            this.opORAzpx,      // 0x15
            this.opASLzpx,      // 0x16
            this.opUndefined,   // 0x17
            this.opCLC,         // 0x18
            this.opORAabsy,     // 0x19
            this.opUndefined,   // 0x1a
            this.opUndefined,   // 0x1b
            this.opUndefined,   // 0x1c
            this.opORAabsx,     // 0x1d
            this.opASLabsx,     // 0x1e
            this.opUndefined,   // 0x1f
            this.opJSRabs,      // 0x20
            this.opANDindx,     // 0x21
            this.opUndefined,   // 0x22
            this.opUndefined,   // 0x23
            this.opBITzp,       // 0x24
            this.opANDzp,       // 0x25
            this.opROLzp,       // 0x26
            this.opUndefined,   // 0x27
            this.opPLP,         // 0x28
            this.opANDimm,      // 0x29
            this.opROLacc,      // 0x2a
            this.opUndefined,   // 0x2b
            this.opBITabs,      // 0x2c
            this.opANDabs,      // 0x2d
            this.opROLabs,      // 0x2e
            this.opUndefined,   // 0x2f
            this.opBMI,         // 0x30
            this.opANDindy,     // 0x31
            this.opUndefined,   // 0x32
            this.opUndefined,   // 0x33
            this.opUndefined,   // 0x34
            this.opANDzpx,      // 0x35
            this.opROLzpx,      // 0x36
            this.opUndefined,   // 0x37
            this.opSEC,         // 0x38
            this.opANDabsy,     // 0x39
            this.opUndefined,   // 0x3a
            this.opUndefined,   // 0x3b
            this.opUndefined,   // 0x3c
            this.opANDabsx,     // 0x3d
            this.opROLabsx,     // 0x3e
            this.opUndefined,   // 0x3f
            this.opRTI,         // 0x40
            this.opEORindx,     // 0x41
            this.opUndefined,   // 0x42
            this.opUndefined,   // 0x43
            this.opUndefined,   // 0x44
            this.opEORzp,       // 0x45
            this.opLSRzp,       // 0x46
            this.opUndefined,   // 0x47
            this.opPHA,         // 0x48
            this.opEORimm,      // 0x49
            this.opLSRacc,      // 0x4a
            this.opUndefined,   // 0x4b
            this.opJMPimm16,    // 0x4c
            this.opEORabs,      // 0x4d
            this.opLSRabs,      // 0x4e
            this.opUndefined,   // 0x4f
            this.opBVC,         // 0x50
            this.opEORindy,     // 0x51
            this.opUndefined,   // 0x52
            this.opUndefined,   // 0x53
            this.opUndefined,   // 0x54
            this.opEORzpx,      // 0x55
            this.opLSRzpx,      // 0x56
            this.opUndefined,   // 0x57
            this.opCLI,         // 0x58
            this.opEORabsy,     // 0x59
            this.opUndefined,   // 0x5a
            this.opUndefined,   // 0x5b
            this.opUndefined,   // 0x5c
            this.opEORabsx,     // 0x5d
            this.opLSRabsx,     // 0x5e
            this.opUndefined,   // 0x5f
            this.opRTS,         // 0x60
            this.opADCindx,     // 0x61
            this.opUndefined,   // 0x62
            this.opUndefined,   // 0x63
            this.opUndefined,   // 0x64
            this.opADCzp,       // 0x65
            this.opRORzp,       // 0x66
            this.opUndefined,   // 0x67
            this.opPLA,         // 0x68
            this.opADCimm,      // 0x69
            this.opRORacc,      // 0x6a
            this.opUndefined,   // 0x6b
            this.opJMPabs16,    // 0x6c
            this.opADCabs,      // 0x6d
            this.opRORabs,      // 0x6e
            this.opUndefined,   // 0x6f
            this.opBVS,         // 0x70
            this.opADCindy,     // 0x71
            this.opUndefined,   // 0x72
            this.opUndefined,   // 0x73
            this.opUndefined,   // 0x74
            this.opADCzpx,      // 0x75
            this.opRORzpx,      // 0x76
            this.opUndefined,   // 0x77
            this.opSEI,         // 0x78
            this.opADCabsy,     // 0x79
            this.opUndefined,   // 0x7a
            this.opUndefined,   // 0x7b
            this.opUndefined,   // 0x7c
            this.opADCabsx,     // 0x7d
            this.opRORabsx,     // 0x7e
            this.opUndefined,   // 0x7f
            this.opUndefined,   // 0x80
            this.opSTAindx,     // 0x81
            this.opUndefined,   // 0x82
            this.opUndefined,   // 0x83
            this.opSTYzp,       // 0x84
            this.opSTAzp,       // 0x85
            this.opSTXzp,       // 0x86
            this.opUndefined,   // 0x87
            this.opDEY,         // 0x88
            this.opUndefined,   // 0x89
            this.opTXA,         // 0x8a
            this.opUndefined,   // 0x8b
            this.opSTYabs,      // 0x8c
            this.opSTAabs,      // 0x8d
            this.opSTXabs,      // 0x8e
            this.opUndefined,   // 0x8f
            this.opBCC,         // 0x90
            this.opSTAindy,     // 0x91
            this.opUndefined,   // 0x92
            this.opUndefined,   // 0x93
            this.opSTYzpx,      // 0x94
            this.opSTAzpx,      // 0x95
            this.opSTXzpy,      // 0x96
            this.opUndefined,   // 0x97
            this.opTYA,         // 0x98
            this.opSTAabsy,     // 0x99
            this.opTXS,         // 0x9a
            this.opUndefined,   // 0x9b
            this.opUndefined,   // 0x9c
            this.opSTAabsx,     // 0x9d
            this.opUndefined,   // 0x9e
            this.opUndefined,   // 0x9f
            this.opLDYimm,      // 0xa0
            this.opLDAindx,     // 0xa1
            this.opLDXimm,      // 0xa2
            this.opUndefined,   // 0xa3
            this.opLDYzp,       // 0xa4
            this.opLDAzp,       // 0xa5
            this.opLDXzp,       // 0xa6
            this.opUndefined,   // 0xa7
            this.opTAY,         // 0xa8
            this.opLDAimm,      // 0xa9
            this.opTAX,         // 0xaa
            this.opUndefined,   // 0xab
            this.opLDYabs,      // 0xac
            this.opLDAabs,      // 0xad
            this.opLDXabs,      // 0xae
            this.opUndefined,   // 0xaf
            this.opBCS,         // 0xb0
            this.opLDAindy,     // 0xb1
            this.opUndefined,   // 0xb2
            this.opUndefined,   // 0xb3
            this.opLDYzpx,      // 0xb4
            this.opLDAzpx,      // 0xb5
            this.opLDXzpy,      // 0xb6
            this.opUndefined,   // 0xb7
            this.opCLV,         // 0xb8
            this.opLDAabsy,     // 0xb9
            this.opTSX,         // 0xba
            this.opUndefined,   // 0xbb
            this.opLDYabsx,     // 0xbc
            this.opLDAabsx,     // 0xbd
            this.opLDXabsy,     // 0xbe
            this.opUndefined,   // 0xbf
            this.opCPYimm,      // 0xc0
            this.opCMPindx,     // 0xc1
            this.opUndefined,   // 0xc2
            this.opUndefined,   // 0xc3
            this.opCPYzp,       // 0xc4
            this.opCMPzp,       // 0xc5
            this.opDECzp,       // 0xc6
            this.opUndefined,   // 0xc7
            this.opINY,         // 0xc8
            this.opCMPimm,      // 0xc9
            this.opDEX,         // 0xca
            this.opUndefined,   // 0xcb
            this.opCPYabs,      // 0xcc
            this.opCMPabs,      // 0xcd
            this.opDECabs,      // 0xce
            this.opUndefined,   // 0xcf
            this.opBNE,         // 0xd0
            this.opCMPindy,     // 0xd1
            this.opUndefined,   // 0xd2
            this.opUndefined,   // 0xd3
            this.opUndefined,   // 0xd4
            this.opCMPzpx,      // 0xd5
            this.opDECzpx,      // 0xd6
            this.opUndefined,   // 0xd7
            this.opCLD,         // 0xd8
            this.opCMPabsy,     // 0xd9
            this.opUndefined,   // 0xda
            this.opUndefined,   // 0xdb
            this.opUndefined,   // 0xdc
            this.opCMPabsx,     // 0xdd
            this.opDECabsx,     // 0xde
            this.opUndefined,   // 0xdf
            this.opCPXimm,      // 0xe0
            this.opSBCindx,     // 0xe1
            this.opUndefined,   // 0xe2
            this.opUndefined,   // 0xe3
            this.opCPXzp,       // 0xe4
            this.opSBCzp,       // 0xe5
            this.opINCzp,       // 0xe6
            this.opUndefined,   // 0xe7
            this.opINX,         // 0xe8
            this.opSBCimm,      // 0xe9
            this.opNOP,         // 0xea
            this.opUndefined,   // 0xeb
            this.opCPXabs,      // 0xec
            this.opSBCabs,      // 0xed
            this.opINCabs,      // 0xee
            this.opUndefined,   // 0xef
            this.opBEQ,         // 0xf0
            this.opSBCindy,     // 0xf1
            this.opUndefined,   // 0xf2
            this.opUndefined,   // 0xf3
            this.opUndefined,   // 0xf4
            this.opSBCzpx,      // 0xf5
            this.opINCzpx,      // 0xf6
            this.opUndefined,   // 0xf7
            this.opSED,         // 0xf8
            this.opSBCabsy,     // 0xf9
            this.opUndefined,   // 0xfa
            this.opUndefined,   // 0xfb
            this.opUndefined,   // 0xfc
            this.opSBCabsx,     // 0xfd
            this.opINCabsx,     // 0xfe
            this.opUndefined    // 0xff
        ];
        /*
         * This is a 256-byte array of cycle counts, indexed by opcode.
         * Obviously, true cycle counts are a bit more complicated, but this
         * gets us most of the way to an authentic-feeling simulation.
         *
         * NOTE: BCD functions now account for an extra cycle, and branches
         * now account for an extra cycle whenever the branch is taken.
         * However, branches still don't add an extra cycle whenever the branch
         * crosses a page boundary.
         *
         * The other gaping hole in our cycle-counting is accounting for all
         * page-boundary penalties.  Ideally, that's just a matter of checking
         * MODE_ABSX, MODE_ABSY, and MODE_INDY instructions for EA straddling
         * a page boundary--but is it more complicated than that? What if the
         * criteria is not the final EA, but whether the pre-indexing and
         * post-indexing EAs are in different pages? I also need to confirm
         * whether any other situations merit checking (eg, when a 2 or 3-byte
         * instruction straddles a page boundary).
         */
        this.aOpcodeCycles = [
            7,6,0,0,0,3,5,0,3,2,2,0,0,4,6,0,
            2,5,0,0,0,4,6,0,2,4,0,0,0,4,7,0,
            3,6,0,0,3,3,5,0,4,2,2,0,4,4,6,0,
            2,5,0,0,0,4,6,0,2,4,0,0,0,4,7,0,
            6,6,0,0,0,3,5,0,3,2,2,0,3,4,6,0,
            2,5,0,0,0,4,6,0,2,4,0,0,0,4,7,0,
            6,6,0,0,0,3,5,0,4,2,2,0,5,4,6,0,
            2,5,0,0,0,4,6,0,2,4,0,0,0,4,7,0,
            0,6,0,0,3,3,3,0,2,0,2,0,4,4,4,0,
            2,5,0,0,4,4,4,0,2,4,2,0,0,4,0,0,
            2,6,2,0,3,3,3,0,2,2,2,0,4,4,4,0,
            2,5,0,0,4,4,4,0,2,4,2,0,4,4,4,0,
            2,6,0,0,3,3,5,0,2,2,2,0,4,4,6,0,
            2,5,0,0,0,4,6,0,2,4,0,0,0,4,7,0,
            2,6,0,0,3,3,5,0,2,2,2,0,4,4,6,0,
            2,5,0,0,0,4,6,0,2,4,0,0,0,4,7,0
        ];
    }

    /**
     * reset(fPowerOn)
     *
     * Note that we follow the same model here as other selected reset() handlers; for example, Video.reset()
     * accepts an fPowerOn parameter to govern what's initially displayed on the video screen.
     *
     * @this {C1PCPU}
     * @param {boolean|undefined} fPowerOn is true for the initial reset, so that if the Debugger isn't
     * loaded, we can elect to start running.  Under any other circumstances (such as whenever Computer.reset()
     * is called), "auto-run" is not a good idea, and can actually introduce bugs (eg, multiple run() timers).
     */
    reset(fPowerOn)
    {
        if (this.flags.running) {
            this.halt();
        }
        this.clearRegs();
        this.regPC = this.getWord(this.VECTOR_RESET);
        this.clearError();              // clear any fatal error/exception
        /*
         * If there's a Debugger, notify Debugger.reset(); otherwise, start running
         */
        if (DEBUGGER && this.dbg) {
            this.dbg.reset();
        }
        else if (fPowerOn) {
            if (this.fAutoStart === true || this.fAutoStart === null && (!DEBUGGER || !this.dbg) && this.bindings["run"] === undefined) {
                this.run();             // start running automatically on the initial power-up, assuming there's no Debugger
            }
        }
    }

    /**
     * @this {C1PCPU}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "run")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @return {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        var fBound = false;
        switch(sBinding) {
            case "run":
                this.bindings[sBinding] = control;
                control.onclick = function(cpu) {
                    return function() {
                        if (!cpu.flags.running) {
                            cpu.run();
                        } else {
                            cpu.halt();
                        }
                    };
                }(this);
                fBound = true;
                break;
            case "A": case "X": case "Y": case "S": case "PC":
            case "C": case "Z": case "I": case "D": case "B": case "V": case "N":
            case "speed":
                this.bindings[sBinding] = control;
                fBound = true;
                break;
            case "setSpeed":
                this.bindings[sBinding] = control;
                control.onclick = function(cpu) {
                    return function() {
                        var speed = (cpu.speed >= cpu.SPEED_MAX? cpu.SPEED_SLOW : cpu.speed+1);
                        cpu.setSpeed(speed, true);
                    };
                }(this);
                fBound = true;
                break;
            default:
                break;
        }
        return fBound;
    }

    /**
     * @this {C1PCPU}
     * @param {Array} abMemory
     * @param {number} start
     * @param {number} end
     */
    setBuffer(abMemory, start, end)
    {
        this.abMem = abMemory;
        this.offMem = start;
        this.cbMem = end - start + 1;
        this.offLimit = this.offMem + this.cbMem;
        if (this.offMem) {
            /*
             * It's not that we couldn't support an address buffer that starts at a non-zero offset;
             * we simply have lots of code (eg, all the opcode handlers) that assumes offMem is zero,
             * and therefore that abMem can be indexed by any of the CPU registers without adding offMem.
             * All that code would have to be changed (at a slight performance penalty) if we couldn't
             * make this assumption.
             */
            Component.error("unsupported CPU address buffer offset (" + this.offMem + ")");
            return;
        }
        this.setReady();
    }

    /**
     * @this {C1PCPU}
     * @param {boolean} fOn
     * @param {C1PComputer} cmp
     */
    setPower(fOn, cmp)
    {
        if (fOn && !this.flags.powered) {
            this.cmp = cmp;
            /*
             * Attach the Debugger, if any, to the CPU, so that the CPU can periodically
             * notify it as needed (when the CPU starts, stops, and executes instructions)
             */
            if (DEBUGGER) {
                this.dbg = cmp.getComponentByType("debugger");
                if (this.dbg)
                    this.dbg.init();
            }
            /*
             * Attach the Video device to the CPU, so that the CPU can periodically update
             * the video display via displayVideo(), as cycles permit.
             */
            var video = cmp.getComponentByType("video");
            if (video) {
                this.displayVideo = function(v) {
                    return function() {
                        v.updateScreen();
                    };
                }(video);
                this.setFocus = function(v) {
                    return function() {
                        v.setFocus();
                    };
                }(video);
            }
            this.flags.powered = true;
            this.reset(true);
            this.update();
        }
    }

    /**
     * Add a memory read-notification handler to the CPU's list of such handlers.
     *
     * @this {C1PCPU}
     * @param {number} start address
     * @param {number} end address
     * @param {Component} component
     * @param {function(number,number)} fn is called with the EA and PC values at the time of the write
     */
    addReadNotify(start, end, component, fn)
    {
        if (this.findNotify(this.aReadNotify, start, end, component, fn) < 0) {
            if (this.addrReadLower > start)
                this.addrReadLower = start;
            if (this.addrReadUpper < end)
                this.addrReadUpper = end;
            this.aReadNotify.push([start, end, component, fn]);
            if (DEBUG) this.log("addReadNotify(" + Str.toHexWord(start) + "," + Str.toHexWord(end) + "," + component.id + "): new read range: " + Str.toHexWord(this.addrReadLower) + "-" + Str.toHexWord(this.addrReadUpper));
        }
    }

    /**
     * @this {C1PCPU}
     * @param {number} addrRead is the EA value at the time of the read
     * @param {number} [addrFrom] is the PC value at the time of the read;
     * this will be undefined for read notifications triggered by assorted Debugger commands,
     * so all handlers should be prepared for that as well.
     */
    checkReadNotify(addrRead, addrFrom)
    {
        for (var i=0; i < this.aReadNotify.length; i++) {
            if (addrRead >= this.aReadNotify[i][0] && addrRead <= this.aReadNotify[i][1]) {
                this.aReadNotify[i][3].call(this.aReadNotify[i][2], addrRead, addrFrom);
            }
        }
    }

    /**
     * Remove a memory read-notification handler from the CPU's list of such handlers.
     *
     * @this {C1PCPU}
     * @param {number} start address
     * @param {number} end address
     * @param {Component} component
     * @param {function(number,number)} fn of previously added handler
     * @return {boolean} true if remove was successful, false if the handler was not found
     */
    removeReadNotify(start, end, component, fn)
    {
        var aBounds = this.removeNotify(this.aReadNotify, start, end, component, fn);
        if (aBounds.length == 4) {
            this.addrReadLower = aBounds[2];
            this.addrReadUpper = aBounds[3];
            if (DEBUG) this.log("removeReadNotify(" + Str.toHexWord(start) + "," + Str.toHexWord(end) + "," + component.id + "): new read range: " + Str.toHexWord(this.addrReadLower) + "-" + Str.toHexWord(this.addrReadUpper));
            return true;
        }
        return false;
    }

    /**
     * Add a memory write-notification handler to the CPU's list of such handlers.
     *
     * @this {C1PCPU}
     * @param {number} start address
     * @param {number} end address
     * @param {Component} component
     * @param {function(number,number)} fn is called with the EA and PC values at the time of the write
     */
    addWriteNotify(start, end, component, fn)
    {
        if (this.findNotify(this.aWriteNotify, start, end, component, fn) < 0) {
            if (this.addrWriteLower > start)
                this.addrWriteLower = start;
            if (this.addrWriteUpper < end)
                this.addrWriteUpper = end;
            this.aWriteNotify.push([start, end, component, fn]);
            if (DEBUG) this.log("addWriteNotify(" + Str.toHexWord(start) + "," + Str.toHexWord(end) + "," + component.id + "): new write range: " + Str.toHexWord(this.addrWriteLower) + "-" + Str.toHexWord(this.addrWriteUpper));
        }
    }

    /**
     * @this {C1PCPU}
     * @param {number} addrWrite is the EA value at the time of the write
     * @param {number} [addrFrom] is the PC value at the time of the write;
     * this will be undefined for write notifications triggered by assorted Debugger commands,
     * so all handlers should be prepared for that as well.
     */
    checkWriteNotify(addrWrite, addrFrom)
    {
        for (var i=0; i < this.aWriteNotify.length; i++) {
            if (addrWrite >= this.aWriteNotify[i][0] && addrWrite <= this.aWriteNotify[i][1]) {
                this.aWriteNotify[i][3].call(this.aWriteNotify[i][2], addrWrite, addrFrom);
            }
        }
    }

    /**
     * Remove a memory write-notification handler from the CPU's list of such handlers.
     *
     * @this {C1PCPU}
     * @param {number} start address
     * @param {number} end address
     * @param {Component} component
     * @param {function(number,number)} fn of previously added handler
     * @return {boolean} true if remove was successful, false if the handler was not found
     */
    removeWriteNotify(start, end, component, fn)
    {
        var aBounds = this.removeNotify(this.aWriteNotify, start, end, component, fn);
        if (aBounds.length == 4) {
            this.addrWriteLower = aBounds[2];
            this.addrWriteUpper = aBounds[3];
            if (DEBUG) this.log("removeWriteNotify(" + Str.toHexWord(start) + "," + Str.toHexWord(end) + "," + component.id + "): new write range: " + Str.toHexWord(this.addrWriteLower) + "-" + Str.toHexWord(this.addrWriteUpper));
            return true;
        }
        return false;
    }

    /**
     * Find a memory notification handler from the given array of handlers
     *
     * @this {C1PCPU}
     * @param {Array} aNotify array of handlers
     * @param {number} start address
     * @param {number} end address
     * @param {Component} component
     * @param {function(number,number)} fn of previously added handler
     * @return {number} index of the matching handler, or -1 if not found
     */
    findNotify(aNotify, start, end, component, fn)
    {
        for (var i=0; i < aNotify.length; i++) {
            if (aNotify[i][0] == start && aNotify[i][1] == end && aNotify[i][2] == component && aNotify[i][3] == fn) {
                return i;
            }
        }
        return -1;
    }

    /**
     * Remove a memory notification handler from the given array of handlers
     *
     * @this {C1PCPU}
     * @param {Array} aNotify array of handlers
     * @param {number} start address
     * @param {number} end address
     * @param {Component} component
     * @param {function(number,number)} fn of previously added handler
     * @return {Array} bounds of previous handler ([0] and [1]) and new lower and upper address bounds ([2] and [3])
     */
    removeNotify(aNotify, start, end, component, fn)
    {
        var aBounds = [];
        var i = this.findNotify(aNotify, start, end, component, fn);
        if (i >= 0) {
            aBounds.push(aNotify[i][0]);
            aBounds.push(aNotify[i][1]);
            aNotify.splice(i, 1);
            var addrLower = 0x10000, addrUpper = 0x0;
            for (i=0; i < aNotify.length; i++) {
                if (addrLower > aNotify[i][0])
                    addrLower = aNotify[i][0];
                if (addrUpper < aNotify[i][1])
                    addrUpper = aNotify[i][1];
            }
            aBounds.push(addrLower);
            aBounds.push(addrUpper);
        }
        return aBounds;
    }

    /**
     * @this {C1PCPU}
     * @param {number} [speed] is one of: 0 (slow), 1 (fast) or 2 (maximum)
     * @param {boolean} [fOnClick] is true if called from a click handler that might have stolen focus
     * @desc Whenever the speed is changed, the running cycle count and corresponding start time must be reset,
     * so that the next effective speed calculation obtains sensible results.  In fact, when run() initially calls
     * setSpeed() with no parameters, that's all this function does (it doesn't change the current speed setting).
     */
    setSpeed(speed, fOnClick)
    {
        if (speed !== undefined) {
            this.speed = speed;
            if (this.bindings["setSpeed"])
                this.bindings["setSpeed"].innerHTML = this.aSpeeds[speed >= 2? 0 : speed+1];
            this.println("running at " + this.aSpeeds[speed].toLowerCase() + " speed " + this.aSpeedDescs[speed]);
            if (fOnClick) this.setFocus();
        }
        this.nRunCycles = 0;
        this.msRunStart = Component.getTime();
        this.calcCycles();
    }

    /**
     * @this {C1PCPU}
     * @param {number} nCycles
     * @param {number} msElapsed
     */
    calcSpeed(nCycles, msElapsed)
    {
        if (msElapsed) {
            this.mhz = Math.round(nCycles / ( msElapsed * 100)) / 10;
            if (msElapsed >= 86400000)
                this.setSpeed();        // reset all our counters once per day so that we never have to worry about overflow
        }
    }

    /**
     * @this {C1PCPU}
     */
    displayVideo()
    {
        // Nothing to do until setPower() installs a replacement function
    }

    /**
     * @this {C1PCPU}
     */
    setFocus()
    {
        // Nothing to do until setPower() installs a replacement function
    }

    /**
     * @this {C1PCPU}
     * @param {string} sReg
     * @param {number} vReg
     * @param {number} [len]
     */
    displayReg(sReg, vReg, len)
    {
        if (this.bindings[sReg] !== undefined) {
            if (len === undefined) len = 1;
            var s = "0000" + vReg.toString(16);
            this.bindings[sReg].innerHTML = s.slice(s.length-len).toUpperCase();
        }
    }

    /**
     * @this {C1PCPU}
     */
    displayStatus()
    {
        this.displayReg("A", this.regA, 2);
        this.displayReg("X", this.regX, 2);
        this.displayReg("Y", this.regY, 2);
        var regP = this.getRegP();
        this.displayReg("C", (regP & this.BIT_PC)? 1 : 0);
        this.displayReg("Z", (regP & this.BIT_PZ)? 1 : 0);
        this.displayReg("I", (regP & this.BIT_PI)? 1 : 0);
        this.displayReg("D", (regP & this.BIT_PD)? 1 : 0);
        this.displayReg("B", (regP & this.BIT_PB)? 1 : 0);
        this.displayReg("V", (regP & this.BIT_PV)? 1 : 0);
        this.displayReg("N", (regP & this.BIT_PN)? 1 : 0);
        this.displayReg("S", this.regS, 4);
        this.displayReg("PC", this.regPC, 4);
        if (this.bindings["speed"] && this.mhz) {
            this.bindings["speed"].innerHTML = this.mhz.toFixed(1) + "Mhz";
        }
    }

    /**
     * @this {C1PCPU}
     * @return {boolean}
     */
    isRunning()
    {
        return this.flags.running;
    }

    /**
     * Calculate the number of cycles to process for each "burst" of CPU activity.  The size of a burst
     * is driven by the following values:
     *
     *      nYieldsPerSecond (eg, 30)
     *      nVideoUpdatesPerSecond (eg, 30)
     *      nStatusUpdatesPerSecond (eg, 5)
     *
     * The largest of the above values forces the size of the burst to its smallest value.  Let's say that
     * largest value is 30.  Assuming nCyclesPerSecond is 1,000,000, that results in bursts of 33,333 cycles.
     *
     * At the end of each burst, we subtract burst cycles from yield, video, and status cycle "threshold"
     * counters. Whenever the "next yield" cycle counter goes to (or below) zero, we compare elapsed time
     * to the time we expected the virtual hardware to take (eg, 1000ms/50 or 20ms), and if we still have time
     * remaining, we sleep the remaining time (or 0ms if there's no remaining time), and then restart run().
     *
     * Similarly, whenever the "next video update" cycle counter goes to (or below) zero, we call displayVideo(),
     * and whenever the "next status update" cycle counter goes to (or below) zero, we call displayStatus().
     *
     * @this {C1PCPU}
     * @param {boolean} [fRecalc] is true if the caller wants to recalculate thresholds based on the
     * most recent mhz calculation (see calcSpeed)
     */
    calcCycles(fRecalc)
    {
        /*
         * Calculate the most cycles we're allowed to execute in a single "burst"
         */
        var nMostUpdatesPerSecond = this.nYieldsPerSecond;
        if (nMostUpdatesPerSecond < this.nVideoUpdatesPerSecond) nMostUpdatesPerSecond = this.nVideoUpdatesPerSecond;
        if (nMostUpdatesPerSecond < this.nStatusUpdatesPerSecond) nMostUpdatesPerSecond = this.nStatusUpdatesPerSecond;

        /*
         * Calculate "per" values for the yield, video update, and status update cycle counters
         */
        var vMultiplier = 1;
        if (fRecalc && this.speed > this.SPEED_SLOW && this.mhz) vMultiplier = this.mhz;
        if (vMultiplier > this.mhzFast && this.speed < this.SPEED_MAX) vMultiplier = this.mhzFast;

        this.msPerYield = Math.round(1000/this.nYieldsPerSecond);
        this.nCyclesPerBurst = Math.floor(this.nCyclesPerSecond / nMostUpdatesPerSecond * vMultiplier);
        this.nCyclesPerYield = Math.floor(this.nCyclesPerSecond / this.nYieldsPerSecond * vMultiplier);
        this.nCyclesPerVideoUpdate = Math.floor(this.nCyclesPerSecond / this.nVideoUpdatesPerSecond * vMultiplier);
        this.nCyclesPerStatusUpdate = Math.floor(this.nCyclesPerSecond / this.nStatusUpdatesPerSecond * vMultiplier);

        /*
         * And initialize "next" yield, video update, and status update cycle "threshold" counters to those "per" values
         */
        if (!fRecalc) {
            this.nCyclesNextYield = this.nCyclesPerYield;
            this.nCyclesNextVideoUpdate = this.nCyclesPerVideoUpdate;
            this.nCyclesNextStatusUpdate = this.nCyclesPerStatusUpdate;
        }
        this.nRecalcCycles = 0;
    }

    /**
     * @this {C1PCPU}
     */
    calcStartTime()
    {
        if (this.nRecalcCycles >= this.nCyclesPerSecond) {
            this.calcCycles(true);
        }
        this.nCyclesThisRun = 0;
        this.msStartThisRun = Component.getTime();
    }

    /**
     * @this {C1PCPU}
     * @return {number}
     */
    calcRemainingTime()
    {
        var msCurrent = Component.getTime();
        var msYield = this.msPerYield;

        if (this.nCyclesThisRun) {
            /*
             * Normally, we would assume we executed a full quota of work over msPerYield, but since the CPU
             * now has the option of calling yieldCPU(), that might not be true.  If nCyclesThisRun is correct, then
             * the ratio of nCyclesThisRun/nCyclesPerYield should represent the percentage of work we performed,
             * and so applying that percentage to msPerYield should give us a better estimate of work vs. time.
             */
            msYield = Math.round(msYield * this.nCyclesThisRun / this.nCyclesPerYield);
            // if (msYield < this.msPerYield) this.println("scaling msPerYield (" + this.msPerYield + ") to msYield (" + msYield + ")");
        }

        var msElapsedThisRun = msCurrent - this.msStartThisRun;
        var msRemainsThisRun = msYield - msElapsedThisRun;

        /*
         * We could pass only "this run" results to calcSpeed():
         *
         *      nCycles = this.nCyclesThisRun;
         *      msElapsed = msElapsedThisRun;
         *
         * but it seems preferable to use longer time periods and hopefully get a more accurate speed.
         *
         * Also, if msRemainsThisRun >= 0 && this.speed == this.SPEED_SLOW, we could pass these results instead:
         *
         *      nCycles = this.nCyclesThisRun;
         *      msElapsed = this.msPerYield;
         *
         * to insure that we display a smooth, constant 1Mhz.  But the displayed speed seems pretty steady as-is.
         */
        var nCycles = this.nRunCycles;
        var msElapsed = msCurrent - this.msRunStart;

        if (DEBUG && msRemainsThisRun < 0 && this.speed == this.SPEED_FAST) {
            this.println("warning: updates @" + msElapsedThisRun + "ms (prefer " + Math.round(msYield) + "ms)");
        }

        this.calcSpeed(nCycles, msElapsed);

        if (msRemainsThisRun < 0) {
            /*
             * This is an easy case: it's taking more than 1 second to simulate 1Mhz,
             * so all we can do is yield for as little time as possible (ie, 0ms) and hope the
             * simulation is at least usable.
             */
            msRemainsThisRun = 0;
        }
        else {
            if (this.speed == this.SPEED_FAST) {
                /*
                 * This case requires us to artificially limit the CPU speed.  calcSpeed()
                 * already cranks up the number of cycles we process per burst, in proportion
                 * to the effective mhz, so there isn't much to do here except sleep for
                 * whatever time is in msRemainsThisRun.
                 *
                 * The artificial limit was chosen largely because it's not currently possible
                 * for the keyboard component to inject keys fast enough to avoid duplicate
                 * keystrokes at higher speeds. Perhaps with future improvements to the keyboard
                 * component, this limit can be lifted.
                 */
                if (this.mhz <= this.mhzFast)
                    msRemainsThisRun = 0;
            }
            else
            if (this.speed == this.SPEED_MAX) {
                /*
                 * This is also an easy case: yield for as little time as possible (ie, 0ms), to execute
                 * the maximum number of cycles per second.
                 */
                msRemainsThisRun = 0;
            }
        }

        /*
         * Last but not least, update nRecalcCycles, so that when run() starts up again and calls calcStartTime(),
         * it'll be ready to decide if calcCycles() should be called again.
         */
        this.nRecalcCycles += this.nCyclesThisRun;

        return msRemainsThisRun;
    }

    /**
     * @this {C1PCPU}
     */
    run()
    {
        if (!this.setBusy(true)) {
            this.update();
            if (this.cmp) this.cmp.stop(this.msRunStart, this.nRunCycles);
            return;
        }
        if (!this.flags.running) {
            /*
             *  setSpeed() without a speed parameter leaves the selected speed in place, but also resets the
             *  cycle counter and timestamp for the current series of run() calls, calculates the maximum number
             *  of cycles for each burst based on the last known effective CPU speed, and resets the nRecalcCycles
             *  threshold counter.
             */
            this.setSpeed();
            if (this.cmp) this.cmp.start();
            this.flags.running = true;
            if (this.bindings["run"]) this.bindings["run"].innerHTML = "Halt";
            this.setFocus();
        }
        /*
         *  calcStartTime() initializes the cycle counter and timestamp for this run() invocation, and optionally
         *  recalculates the the maximum number of cycles for each burst if the nRecalcCycles threshold has been reached.
         */
        this.calcStartTime();
        try {
            do {
                /*
                 * NOTE: nCyclesPerBurst is how many cycles we WANT to run each iteration of step(), but that just
                 * initializes nBurstCycles, which (after subtracting any remaining nStepCycles) is how many cycles
                 * we ACTUALLY ran.
                 */
                this.step(this.nCyclesPerBurst);
                /*
                 * nCyclesThisRun is increased by nBurstCycles, plus any additional cycles step() processed after
                 * its cycle count had reached zero (and conversely, minus any cycles that it still had yet to process);
                 * ditto for nRunCycles, which is the cycle count since the CPU first started running.
                 */
                var nCycles = this.nBurstCycles - this.nStepCycles;
                this.nRunCycles += nCycles;
                this.nCyclesThisRun += nCycles;
                /*
                 * These step() cycle variables must be zeroed now, so that getCycles() always returns a valid cycle count.
                 */
                this.nBurstCycles = this.nStepCycles = 0;

                this.nCyclesNextVideoUpdate -= this.nCyclesPerBurst;
                if (this.nCyclesNextVideoUpdate <= 0) {
                    this.nCyclesNextVideoUpdate += this.nCyclesPerVideoUpdate;
                    this.displayVideo();
                }

                this.nCyclesNextStatusUpdate -= this.nCyclesPerBurst;
                if (this.nCyclesNextStatusUpdate <= 0) {
                    this.nCyclesNextStatusUpdate += this.nCyclesPerStatusUpdate;
                    this.displayStatus();
                }

                this.nCyclesNextYield -= this.nCyclesPerBurst;
                if (this.nCyclesNextYield <= 0) {
                    this.nCyclesNextYield += this.nCyclesPerYield;
                    break;
                }
            } while (this.flags.running);
        }
        catch (e) {
            this.halt();
            this.update();
            this.setBusy(false);
            this.setError(e.stack || e.message);
            return;
        }
        setTimeout(function(cpu) { return function() {cpu.run();}; }(this), this.calcRemainingTime());
    }

    /**
     * @this {C1PCPU}
     * @param {number} nMinCycles (0 implies a single-step, and therefore breakpoints should be ignored)
     * @return {boolean|undefined} undefined indicates that the last instruction was not executed (eg,
     * we hit an execution breakpoint), false implies a post-execution condition was triggered (eg, a write
     * breakpoint), and true indicates successful completion of all requested cycles.
     */
    step(nMinCycles)
    {
        /*
         * The Debugger uses fCompleted to determine if the instruction completed (true) or was interrupted
         * by a breakpoint or some other exceptional condition (false). NOTE: this does NOT include thrown
         * exceptions, which step() expects the caller to catch using its own exception handler.
         *
         * The CPU relies on the use of halt() rather than fCompleted, because the CPU never single-steps
         * (ie, nMinCycles is always some large number), whereas the Debugger does.  And conversely, when the
         * Debugger is single-stepping (even when performing multiple single-steps), fRunning is never set,
         * so halt() would have no effect as far as the Debugger is concerned.
         */
        var fCompleted = true;

        /*
         * fDebugCheck is true if we need to "check" every instruction with the Debugger.  The Debugger will
         * call cpu.step(n) with n == 0 if it's executing only ONE instruction (ie, the user just clicked the
         * "Step" button, or they've issued a "t" or "t1" command).  Otherwise, it will call with n == 1
         * (ie, the user is holding the "Step" button, or they've issued a "t#" command where # > 1).
         *
         * In the first case, we want to ignore (ie, "step over") any breakpoints; otherwise, the Debugger has
         * no easy way of moving past a breakpoint (other than clearing it, of course).  In the second case,
         * we want to honor any breakpoints, which in turn will set fCompleted to false and signal the Debugger
         * to stop.
         *
         * Note that as a practical matter, both 0 and 1 are otherwise treated the same when it comes to the
         * minimum number of cycles to run: one and only one instruction will execute, since every instruction
         * consumes at least 1 cycle.
         */
        this.regEA = this.regEAWrite = -1;
        var fDebugCheck = (DEBUGGER && nMinCycles && this.dbg && this.dbg.checksEnabled());

        /*
         * We move the minimum cycle count to nStepCycles (the number of cycles left to run), so that other
         * methods have the ability to force that number to zero (eg, halt()), and thus we don't have to check
         * some other criteria just to determine whether we should continue running or not.
         */
        this.nBurstCycles = this.nStepCycles = nMinCycles;
        do {
            var bOpCode = this.abMem[this.regPC];

            if (fDebugCheck && !this.dbg.checkInstruction(this.regPC, bOpCode)) {
                fCompleted = undefined;
                this.halt();
                break;
            }

            this.regPC++;
            this.aOpcodeFuncs[bOpCode].call(this);

            /*
             * Assert that all register contents remain within their respective ranges.
             */


            /*
             * WARNING: By making the following read-or-write test exclusive, we're not going to catch
             * those situations where an instruction does BOTH. For example, JSR pushes the old PC
             * (which, if we were tracking STACK writes, would set regEAWrite) and then fetches a new PC
             * (which should set regEA).  However, that's a situation which, except for a peculiar
             * combination of read and write breakpoints set by the Debugger, is one we simply don't care
             * about.  Moreover, none of our opcode handlers currently set BOTH regEA and regEAWrite,
             * so it would be completely pointless to check both conditions here.
             *
             * Since READS are FAR more common than WRITES, we check the common case first.  If the
             * day comes that we implement opcode functions that set both regEA AND regEAWrite, then we'll
             * want to remove the "else" below and stop making the read and write tests exclusive.
             * If we don't, then some of those rare/unusual writes will either get missed or delayed.
             *
             * It's also worth mentioning here that not all instructions READ or WRITE (eg, INX, INY and
             * others that are completely flag or register-bound).  It's a bit ironic that those instructions,
             * which are typically the fastest, have to perform both the READ and WRITE tests below.  But
             * on the plus side, both tests will fail, so they'll still get out of here faster than any of
             * the other instructions.
             */
            if (this.regEA >= 0) {
                /*
                 * Serial emulation requires a read notification handler, and the keyboard may eventually
                 * want one, too.
                 */
                if (this.regEA >= this.addrReadLower && this.regEA <= this.addrReadUpper) {
                    this.checkReadNotify(this.regEA, this.regPC);
                }
                if (fDebugCheck && !this.dbg.checkMemoryRead(this.regEA)) {
                    fCompleted = false;
                    this.halt();
                    break;
                }
                this.regEA = -1;
            }
            else if (this.regEAWrite >= 0) {
                /*
                 * We process the write notification handlers before the write breakpoint handlers,
                 * because we don't want to leave any ROM (read-only memory) writes in place before we
                 * (potentially) give up control.  Undoing every write to ROM address space is an essential
                 * part of simulating the "read-only" behavior of ROM.
                 *
                 * Obviously, there are other write notification handlers as well (like the keyboard's),
                 * which may sometimes do things we'd prefer to intercept first, but let's keep things simple.
                 */
                if (this.regEAWrite >= this.addrWriteLower && this.regEAWrite <= this.addrWriteUpper) {
                    this.checkWriteNotify(this.regEAWrite, this.regPC);
                }
                if (fDebugCheck && !this.dbg.checkMemoryWrite(this.regEAWrite, this.abMem[this.regEAWrite])) {
                    fCompleted = false;
                    this.halt();
                    break;
                }
                this.regEAWrite = -1;
            }

            this.nStepCycles -= this.aOpcodeCycles[bOpCode];

        } while (this.nStepCycles > 0);

        return fCompleted;
    }

    /**
     * yieldCPU() is similar to halt() with regard to how it resets various cycle countdown values,
     * but the CPU remains in a "running" state.
     *
     * @this {C1PCPU}
     */
    yieldCPU()
    {
        this.nCyclesNextYield = 0;          // this will break us out of run(), once we break out of step()
        this.nBurstCycles -= this.nStepCycles;
        this.nStepCycles = 0;               // this will break us out of step()
    }

    /**
     * halt() is similar to yieldCPU(), but it doesn't need to zero nCyclesNextYield to break out of run();
     * it simply needs to clear fRunning.
     *
     * @this {C1PCPU}
     */
    halt()
    {
        this.isBusy(true);
        this.nBurstCycles -= this.nStepCycles;
        this.nStepCycles = 0;
        if (this.flags.running) {
            this.flags.running = false;
            if (this.bindings["run"]) this.bindings["run"].innerHTML = "Run";
        }
    }

    /**
     * @this {C1PCPU}
     *
     * This used to be performed at the end of every step(), but run() -- which relies upon step() -- needed to have
     * more control over when these updates are performed.  However, for other callers of step(), such as the Debugger,
     * the combination of step() + update() provides the old behavior.
     */
    update()
    {
        this.displayVideo();
        this.displayStatus();
    }

    /**
     * getCycles() returns the number of cycles executed so far.  Note that we can be called after
     * a run() OR during a run(), perhaps from a handler triggered during the current run's step(),
     * so nRunCycles must always be adjusted by number of cycles step() was asked to run (nBurstCycles),
     * less the number of cycles it has yet to run (nStepCycles).
     *
     * nRunCycles is reset whenever the CPU is halted or the CPU speed is changed, so returning 0 when the
     * CPU is stopped seems perfectly reasonable.  As a result, components that rely on getCycles() returning a
     * steadily increasing number should also be prepared for a reset at any time (eg, the Keyboard's
     * updateMemory() function).
     *
     * @this {C1PCPU}
     * @return {number}
     */
    getCycles()
    {
        return (this.flags.running? this.nRunCycles + this.nBurstCycles - this.nStepCycles : 0);
    }

    /**
     * @this {C1PCPU}
     * @param {number} addr
     * @return {number}
     *
     * Unlike the Debugger versions of these functions, these presume that addr is always valid,
     * since it's internally generated, not user-supplied. Of course, we could still have internal
     * bugs, so asserts are included, but they are present in DEBUG code only (automatically
     * removed from RELEASE code).
     *
     * Moreover, it's unlikely we'll use this function much (unless performance becomes secondary
     * to code size), since all the opCode functions should perform their own fetches, for obvious
     * performance reasons.
     */
    getByte(addr)
    {

        var b = this.abMem[addr];

        return b;
    }

    /**
     * @this {C1PCPU}
     * @param {number} addr
     * @return {number}
     */
    getWord(addr)
    {

        var w = this.abMem[addr] | (this.abMem[addr+1] << 8);

        return w;
    }

    /**
     * @this {C1PCPU}
     * @param {number} addr
     * @param {number} b
     */
    setByte(addr, b)
    {


        this.abMem[addr] = b;
    }

    /**
     * @this {C1PCPU}
     * @return {number}
     */
    getRegP()
    {
        /*
         *  // C = LAZY_C;
         *  this.regP = ((this.regP & 0xfe) | ((((this.regRC & 0x0100)))? 0x01 : 0));
         *  // Z = LAZY_Z;
         *  this.regP = ((this.regP & 0xfd) | ((((this.regRZ & 0xff) == 0))? 0x02 : 0));
         *  // V = LAZY_V;
         *  this.regP = ((this.regP & 0xbf) | (((((((this.regRV & 0xff) ^ this.regRU) ^ (this.regRV >> 1)) & 0x80) != 0))? 0x40 : 0));
         *  // N = LAZY_N;
         *  this.regP = ((this.regP & 0x7f) | ((((this.regRN & 0x80)))? 0x80 : 0));
         */
        var regP = ((this.regRC & 0x0100)? 0x01 : 0x00);
        regP |= (!(this.regRZ & 0xff)? 0x02 : 0x00);
        regP |= (((((this.regRV & 0xff) ^ this.regRU) ^ (this.regRV >> 1)) & 0x80)? 0x40 : 0x00);
        regP |= ((this.regRN & 0x80)? 0x80 : 0x00);
        return (this.regP & 0x3C) | regP;
    }

    /**
     * @this {C1PCPU}
     *
     * Clear the C flag
     */
    clearC()
    {
        this.regRC = 0x00;
    }

    /**
     * @this {C1PCPU}
     *
     * Set the C flag
     */
    setC()
    {
        this.regRC = 0x100;
    }

    /**
     * @this {C1PCPU}
     *
     * Clear the N bit
     */
    clearN()
    {
        this.regRN = 0x00;
    }

    /**
     * @this {C1PCPU}
     *
     * Set the N bit
     */
    setN()
    {
        this.regRN = 0x80;
    }

    /**
     * @this {C1PCPU}
     *
     * Clear the V bit
     */
    clearV()
    {
        this.regRV = 0x00; this.regRU = 0x00;
    }

    /**
     * @this {C1PCPU}
     *
     * Set the V bit
     */
    setV()
    {
        this.regRV = 0x00; this.regRU = 0x80;
    }

    /**
     * @this {C1PCPU}
     *
     * Clear the Z bit
     */
    clearZ()
    {
        this.regRZ = 0x01;
    }

    /**
     * @this {C1PCPU}
     *
     * Set the Z bit
     */
    setZ()
    {
        this.regRZ = 0x00;
    }

    /**
     * @this {C1PCPU}
     *
     * Set the BCD bit and install the BCD opcode handlers
     */
    setBCD()
    {
        this.regP |= 0x08;
        this.aOpcodeFuncs[0x61] = this.opADCindxBCD;
        this.aOpcodeFuncs[0x65] = this.opADCzpBCD;
        this.aOpcodeFuncs[0x69] = this.opADCimmBCD;
        this.aOpcodeFuncs[0x6d] = this.opADCabsBCD;
        this.aOpcodeFuncs[0x71] = this.opADCindyBCD;
        this.aOpcodeFuncs[0x75] = this.opADCzpxBCD;
        this.aOpcodeFuncs[0x79] = this.opADCabsyBCD;
        this.aOpcodeFuncs[0x7d] = this.opADCabsxBCD;
        this.aOpcodeFuncs[0xe1] = this.opSBCindxBCD;
        this.aOpcodeFuncs[0xe5] = this.opSBCzpBCD;
        this.aOpcodeFuncs[0xe9] = this.opSBCimmBCD;
        this.aOpcodeFuncs[0xed] = this.opSBCabsBCD;
        this.aOpcodeFuncs[0xf1] = this.opSBCindyBCD;
        this.aOpcodeFuncs[0xf5] = this.opSBCzpxBCD;
        this.aOpcodeFuncs[0xf9] = this.opSBCabsyBCD;
        this.aOpcodeFuncs[0xfd] = this.opSBCabsxBCD;
    }

    /**
     * @this {C1PCPU}
     *
     * Clear the BCD bit and remove the BCD opcode handlers
     */
    clearBCD()
    {
        this.regP &= ~0x08;
        this.aOpcodeFuncs[0x61] = this.opADCindx;
        this.aOpcodeFuncs[0x65] = this.opADCzp;
        this.aOpcodeFuncs[0x69] = this.opADCimm;
        this.aOpcodeFuncs[0x6d] = this.opADCabs;
        this.aOpcodeFuncs[0x71] = this.opADCindy;
        this.aOpcodeFuncs[0x75] = this.opADCzpx;
        this.aOpcodeFuncs[0x79] = this.opADCabsy;
        this.aOpcodeFuncs[0x7d] = this.opADCabsx;
        this.aOpcodeFuncs[0xe1] = this.opSBCindx;
        this.aOpcodeFuncs[0xe5] = this.opSBCzp;
        this.aOpcodeFuncs[0xe9] = this.opSBCimm;
        this.aOpcodeFuncs[0xed] = this.opSBCabs;
        this.aOpcodeFuncs[0xf1] = this.opSBCindy;
        this.aOpcodeFuncs[0xf5] = this.opSBCzpx;
        this.aOpcodeFuncs[0xf9] = this.opSBCabsy;
        this.aOpcodeFuncs[0xfd] = this.opSBCabsx;
    }

    /**
     * @this {C1PCPU}
     * @param {number} reg
     * @param {number} mem
     * @return {number}
     *
     * Refer to http://www.6502.org/tutorials/decimal_mode.html for 6502-specific details.
     * Refer to http://homepage.cs.uiowa.edu/~jones/bcd/bcd.html for optimization tips.
     */
    addBCD(reg, mem)
    {
        var carry = ((this.regRC & 0x0100)? 1 : 0);

        /*
         * First add the low nibbles.
         */
        var r = (reg & 0x0f) + (mem & 0x0f) + carry;

        /*
         * Adjust the result. NOTE: The extra AND'ing and ADD'ing isn't necessary if we want to
         * assume that ONLY valid BCD digits will be added, but we probably shouldn't assume that.
         * NOTE: We use an OR instead of an ADD at the end because it's logically equivalent and faster.
         */
        if (r >= 0x0A) r = ((r + 0x06) & 0x0f) | 0x10;

        /*
         * Now add the high nibbles.
         */
        r += (reg & 0xf0) + (mem & 0xf0);

        /*
         * Before we do the next adjust, it seems that N and V are dependent on this intermediate
         * result (however, the meaning of N and V in BCD mode is not well documented).
         */
        this.regRU = reg ^ mem; this.regRV = r;
        this.regRN = (r & 0xff);

        /*
         * Final adjustment.
         */
        if (r >= 0xA0) r += 0x60;
        /*
         * NOTE: If the intermediate result was 0x1A0 or more, then adding 0x60 would yield a result
         * of 0x200 or more, but because the rest of the simulator tests regRC for 0x100, rather than
         * comparing regRC for values >= 0x100, we'll miss the fact that there was a carry, unless we
         * scale any value in the 0x200-0x2ff range down to 0x100-0x1ff.  We then assert that the
         * resulting value is within the proper range.
         */
        if (r >= 0x200) r -= 0x100;


        /*
         * In BCD mode, the C flag reflects the decimal result, but the Z flag reflects binary addition.
         */
        this.regRC = r;
        this.regRZ = ((reg + mem + carry) & 0xff);

        /*
         * Account for an extra cycle in BCD mode as well.
         */
        this.nStepCycles--;

        return r & 0xff;
    }

    /**
     * @this {C1PCPU}
     * @param {number} reg
     * @param {number} mem
     * @return {number}
     *
     * Refer to http://www.6502.org/tutorials/decimal_mode.html for 6502-specific details.
     * Refer to http://homepage.cs.uiowa.edu/~jones/bcd/bcd.html for optimization tips.
     */
    subBCD(reg, mem)
    {
        var notcarry = ((this.regRC & 0x0100)? 0 : 1);

        /*
         * First subtract the low nibbles.
         */
        var r = (reg & 0x0f) - (mem & 0x0f) - notcarry;

        /*
         * Adjust the result. NOTE: The extra AND'ing and SUB'ing isn't necessary if we want to
         * assume that ONLY valid BCD digits will be added, but we probably shouldn't assume that.
         */
        if (r < 0x00) r = ((r - 0x06) & 0x0f) - 0x10;

        /*
         * Now subtract the high nibbles.
         */
        r += (reg & 0xf0) - (mem & 0xf0);

        /*
         * Final adjustment.
         */
        if (r < 0x00) r -= 0x60;

        /*
         * In BCD mode, the Z -- and C, N and V -- flags are all set as if binary subtraction was performed.
         */
        // RC = (A - ML - !LAZY_C); SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = (this.regRC = (reg - mem - notcarry)) & 0xff;
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = reg ^ mem; this.regRV = this.regRC;
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;

        /*
         * Account for an extra cycle in BCD mode as well.
         */
        this.nStepCycles--;

        return r & 0xff;
    }

    /**
     * @this {C1PCPU}
     */
    clearRegs()
    {
        this.regA = 0;
        this.regX = 0;
        this.regY = 0;
        this.regS = 0x100;
        this.regP = 0;
        this.regRN = 0;
        this.regRZ = 0;
        this.regRU = 0;
        this.regRV = 0;
        this.regRC = 0;
        this.regPC = 0;
        this.regEA = -1;
        this.regEAWrite = -1;
        this.mhz = 0;
        this.nRunCycles = this.nBurstCycles = this.nStepCycles = 0;
    }

    /**
     * @this {C1PCPU}
     */
    opBRK()
    {   // opcode 0x00
        // PC++;
        this.regPC++;
        // STACK(S--) = PCH;
        this.abMem[this.regS--] = (this.regPC >> 8);
        this.regS |= 0x100;
        // STACK(S--) = PCL;
        this.abMem[this.regS--] = (this.regPC & 0xff);
        this.regS |= 0x100;
        // B = 1;
        this.regP |= 0x10;
        // C = LAZY_C; Z = LAZY_Z; V = LAZY_V; N = LAZY_N;
        this.regP = this.getRegP();
        // STACK(S--) = P;
        this.abMem[this.regS--] = this.regP;
        this.regS |= 0x100;
        // B = 0;
        this.regP &= 0xef;
        // EA = 0xFFFE;
        this.regEA = 0xFFFE;
        // PC = M;
        this.regPC = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8));
    }

    /**
     * @this {C1PCPU}
     */
    opORAindx()
    {   // opcode 0x01
        // EA = WORD((BYTE(PC++)+X) & 0xff);
        this.regEA = ((this.abMem[this.regPC++]) + this.regX) & 0xff;
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8));
        // A = A | ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA |= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opORAzp()
    {   // opcode 0x05
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // A = A | ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA |= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opASLzp()
    {   // opcode 0x06
        // EA = BYTE(PC++);
        this.regEAWrite = this.abMem[this.regPC++];
        // RC = ML << 1;
        this.regRC = this.abMem[this.regEAWrite] << 1;
        // ML = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = (this.regRC & 0xff);
    }

    /**
     * @this {C1PCPU}
     */
    opPHP()
    {   // opcode 0x08
        this.regP = this.getRegP();
        // STACK(S--) = P;
        this.abMem[this.regS--] = this.regP;
        this.regS |= 0x100;
    }

    /**
     * @this {C1PCPU}
     */
    opORAimm()
    {   // opcode 0x09
        // EA = PC++;
        this.regEA = this.regPC++;
        // A = A | ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA |= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opASLacc()
    {   // opcode 0x0a
        // RC = A << 1;
        this.regRC = this.regA << 1;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
    }

    /**
     * @this {C1PCPU}
     */
    opORAabs()
    {   // opcode 0x0d
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // A = A | ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA |= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opASLabs()
    {   // opcode 0x0e
        // EA = WORD(PC); PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // RC = ML << 1;
        this.regRC = this.abMem[this.regEAWrite] << 1;
        // ML = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = (this.regRC & 0xff);
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opBPL()
    {   // opcode 0x10
        // PC = PC + (LAZY_N == 0? SBYTE(PC) : 0) + 1;
        this.regPC += (!(this.regRN & 0x80)? (this.nStepCycles--,((this.abMem[this.regPC] << 24) >> 24)) : 0) + 1;
    }

    /**
     * @this {C1PCPU}
     */
    opORAindy()
    {   // opcode 0x11
        // EA = WORD(BYTE(PC++))+Y;
        this.regEA = (this.abMem[this.regPC++]);
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8)) + this.regY;
        // A = A | ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA |= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opORAzpx()
    {   // opcode 0x15
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEA = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // A = A | ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA |= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opASLzpx()
    {   // opcode 0x16
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEAWrite = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // RC = ML << 1;
        this.regRC = this.abMem[this.regEAWrite] << 1;
        // ML = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = (this.regRC & 0xff);
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opCLC()
    {   // opcode 0x18
        // SET_LAZY_C(0);
        this.regRC = 0x00;
    }

    /**
     * @this {C1PCPU}
     */
    opORAabsy()
    {   // opcode 0x19
        // EA = WORD(PC)+Y; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regY;
        // A = A | ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = this.regA |= this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opORAabsx()
    {   // opcode 0x1d
        // EA = WORD(PC)+X; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // A = A | ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = this.regA |= this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opASLabsx()
    {   // opcode 0x1e
        // EA = WORD(PC)+X; PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // RC = ML << 1;
        this.regRC = this.abMem[this.regEAWrite] << 1;
        // ML = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = (this.regRC & 0xff);
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opJSRabs()
    {   // opcode 0x20
        // EA = PC; PC += 1;
        this.regEA = this.regPC++;
        // STACK(S--) = PCH;
        this.abMem[this.regS--] = (this.regPC >> 8);
        this.regS |= 0x100;
        // STACK(S--) = PCL;
        this.abMem[this.regS--] = (this.regPC & 0xff);
        this.regS |= 0x100;
        // PC = M;
        this.regPC = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8));
    }

    /**
     * @this {C1PCPU}
     */
    opANDindx()
    {   // opcode 0x21
        // EA = WORD((BYTE(PC++)+X) & 0xff);
        this.regEA = ((this.abMem[this.regPC++]) + this.regX) & 0xff;
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8));
        // A = A & ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA &= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opBITzp()
    {   // opcode 0x24
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // SET_LAZY_Z((A & ML) == 0);
        this.regRZ = (this.regA & this.abMem[this.regEA]);
        // SET_LAZY_N(ML7);
        this.regRN = ((this.regRN & 0x7f) | (this.abMem[this.regEA] & 0x80));
        // SET_LAZY_V(ML6);
        this.regRV = 0; this.regRU = ((this.abMem[this.regEA] & 0x40)? 0x80 : 0x00);
    }

    /**
     * @this {C1PCPU}
     */
    opANDzp()
    {   // opcode 0x25
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // A = A & ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA &= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opROLzp()
    {   // opcode 0x26
        // EA = BYTE(PC++);
        this.regEAWrite = this.abMem[this.regPC++];
        // RCL = ML;
        this.regRC = ((this.regRC & 0xff00) | this.abMem[this.regEAWrite]);
        // RC = RC << 1;
        this.regRC <<= 1;
        // RCL0 = RCH1;
        this.regRC = ((this.regRC & 0xfffe) | (((this.regRC & 0x0200))? 0x0001 : 0));
        // ML = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = (this.regRC & 0xff);
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opPLP()
    {   // opcode 0x28
        // P = STACK(++S);
        this.regS = ((this.regS+1) & 0xff) | 0x100;
        this.regP = this.abMem[this.regS];
        // SET_LAZY_C(C);
        this.regRC = ((this.regP & 0x01)? 0x0100 : 0);
        // SET_LAZY_Z(Z);
        this.regRZ = (!(this.regP & 0x02)? 0x01 : 0);
        // SET_LAZY_N(N);
        this.regRN = (this.regP & 0x80);
        // SET_LAZY_V(V);
        this.regRV = 0; this.regRU = ((this.regP & 0x40)? 0x80 : 0x00);
    }

    /**
     * @this {C1PCPU}
     */
    opANDimm()
    {   // opcode 0x29
        // EA = PC++;
        this.regEA = this.regPC++;
        // A = A & ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA &= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opROLacc()
    {   // opcode 0x2a
        // RCL =  A;
        this.regRC = ((this.regRC & 0xff00) | this.regA);
        // RC = RC << 1;
        this.regRC <<= 1;
        // RCL0 = RCH1;
        this.regRC = ((this.regRC & 0xfffe) | ((this.regRC & 0x0200)? 0x0001 : 0));
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
    }

    /**
     * @this {C1PCPU}
     */
    opBITabs()
    {   // opcode 0x2c
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // SET_LAZY_Z((A & ML) == 0);
        this.regRZ = (this.regA & this.abMem[this.regEA]);
        // SET_LAZY_N(ML7);
        this.regRN = ((this.regRN & 0x7f) | (this.abMem[this.regEA] & 0x80));
        // SET_LAZY_V(ML6);
        this.regRV = 0; this.regRU = ((this.abMem[this.regEA] & 0x40)? 0x80 : 0x00);
    }

    /**
     * @this {C1PCPU}
     */
    opANDabs()
    {   // opcode 0x2d
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // A = A & ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA &= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opROLabs()
    {   // opcode 0x2e
        // EA = WORD(PC); PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // RCL = ML;
        this.regRC = ((this.regRC & 0xff00) | this.abMem[this.regEAWrite]);
        // RC = RC << 1;
        this.regRC <<= 1;
        // RCL0 = RCH1;
        this.regRC = ((this.regRC & 0xfffe) | (((this.regRC & 0x0200))? 0x0001 : 0));
        // ML = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = (this.regRC & 0xff);
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opBMI()
    {   // opcode 0x30
        // PC = PC + (LAZY_N != 0? SBYTE(PC) : 0) + 1;
        this.regPC += ((this.regRN & 0x80)? (this.nStepCycles--,((this.abMem[this.regPC] << 24) >> 24)) : 0) + 1;
    }

    /**
     * @this {C1PCPU}
     */
    opANDindy()
    {   // opcode 0x31
        // EA = WORD(BYTE(PC++))+Y;
        this.regEA = (this.abMem[this.regPC++]);
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8)) + this.regY;
        // A = A & ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA &= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opANDzpx()
    {   // opcode 0x35
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEA = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // A = A & ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA &= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opROLzpx()
    {   // opcode 0x36
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEAWrite = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // RCL = ML;
        this.regRC = ((this.regRC & 0xff00) | this.abMem[this.regEAWrite]);
        // RC = RC << 1;
        this.regRC <<= 1;
        // RCL0 = RCH1;
        this.regRC = ((this.regRC & 0xfffe) | (((this.regRC & 0x0200))? 0x0001 : 0));
        // ML = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = (this.regRC & 0xff);
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opSEC()
    {   // opcode 0x38
        // SET_LAZY_C(1);
        this.regRC = 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opANDabsy()
    {   // opcode 0x39
        // EA = WORD(PC)+Y; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regY;
        // A = A & ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA &= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opANDabsx()
    {   // opcode 0x3d
        // EA = WORD(PC)+X; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // A = A & ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA &= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opROLabsx()
    {   // opcode 0x3e
        // EA = WORD(PC)+X; PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // RCL = ML;
        this.regRC = ((this.regRC & 0xff00) | this.abMem[this.regEAWrite]);
        // RC = RC << 1;
        this.regRC <<= 1;
        // RCL0 = RCH1;
        this.regRC = ((this.regRC & 0xfffe) | (((this.regRC & 0x0200))? 0x0001 : 0));
        // ML = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = (this.regRC & 0xff);
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opRTI()
    {   // opcode 0x40
        // P = STACK(++S);
        this.regS = ((this.regS+1) & 0xff) | 0x100;
        this.regP = this.abMem[this.regS];
        // SET_LAZY_C(C);
        this.regRC = ((this.regP & 0x01)? 0x0100 : 0);
        // SET_LAZY_Z(Z);
        this.regRZ = (!(this.regP & 0x02)? 0x01 : 0);
        // SET_LAZY_N(N);
        this.regRN = (this.regP & 0x80);
        // SET_LAZY_V(V);
        this.regRV = 0; this.regRU = ((this.regP & 0x40)? 0x80 : 0x00);
        // PCL = STACK(++S);
        // PCH = STACK(++S);
        this.regS = ((this.regS+2) & 0xff) | 0x100;
        this.regPC = (this.abMem[(this.regS-1) | 0x100]) | (this.abMem[this.regS] << 8);
    }

    /**
     * @this {C1PCPU}
     */
    opEORindx()
    {   // opcode 0x41
        // EA = WORD((BYTE(PC++)+X) & 0xff);
        this.regEA = ((this.abMem[this.regPC++]) + this.regX) & 0xff;
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8));
        // A = A ^ ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA ^= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opEORzp()
    {   // opcode 0x45
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // A = A ^ ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA ^= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opLSRzp()
    {   // opcode 0x46
        // EA = BYTE(PC++);
        this.regEAWrite = this.abMem[this.regPC++];
        // SET_LAZY_C(ML0);
        this.regRC = ((this.regRC & 0xfeff) | ((this.abMem[this.regEAWrite] & 0x01)? 0x0100 : 0));
        // ML = RCL = ML >> 1;
        this.abMem[this.regEAWrite] = ((this.regRC = ((this.regRC & 0xff00) | (this.abMem[this.regEAWrite] >> 1))) & 0xff);
        // SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = (this.regRC & 0xff);
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opPHA()
    {   // opcode 0x48
        // STACK(S--) = A;
        this.abMem[this.regS--] = this.regA;
        this.regS |= 0x100;
    }

    /**
     * @this {C1PCPU}
     */
    opEORimm()
    {   // opcode 0x49
        // EA = PC++;
        this.regEA = this.regPC++;
        // A = A ^ ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA ^= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opLSRacc()
    {   // opcode 0x4a
        // SET_LAZY_C( A0);
        this.regRC = ((this.regRC & 0xfeff) | ((this.regA & 0x01)? 0x0100 : 0));
        // A = RCL =  A >> 1;
        this.regA = ((this.regRC = ((this.regRC & 0xff00) | (this.regA >> 1))) & 0xff);
        // SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = (this.regRC & 0xff);
    }

    /**
     * @this {C1PCPU}
     */
    opJMPimm16()
    {   // opcode 0x4c
        // EA = PC;
        this.regEA = this.regPC;
        // PC += 2;
        // this.regPC += 2;
        // PC = M;
        this.regPC = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8));
    }

    /**
     * @this {C1PCPU}
     */
    opEORabs()
    {   // opcode 0x4d
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // A = A ^ ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA ^= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opLSRabs()
    {   // opcode 0x4e
        // EA = WORD(PC); PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // SET_LAZY_C(ML0);
        this.regRC = ((this.regRC & 0xfeff) | ((this.abMem[this.regEAWrite] & 0x01)? 0x0100 : 0));
        // ML = RCL = ML >> 1;
        this.abMem[this.regEAWrite] = ((this.regRC = ((this.regRC & 0xff00) | (this.abMem[this.regEAWrite] >> 1))) & 0xff);
        // SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = (this.regRC & 0xff);
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opBVC()
    {   // opcode 0x50
        // PC = PC + (LAZY_V == 0? SBYTE(PC) : 0) + 1;
        this.regPC += (!((((this.regRV & 0xff) ^ this.regRU) ^ (this.regRV >> 1)) & 0x80)? (this.nStepCycles--,((this.abMem[this.regPC] << 24) >> 24)) : 0) + 1;
    }

    /**
     * @this {C1PCPU}
     */
    opEORindy()
    {   // opcode 0x51
        // EA = WORD(BYTE(PC++))+Y;
        this.regEA = this.abMem[this.regPC++];
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8)) + this.regY;
        // A = A ^ ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA ^= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opEORzpx()
    {   // opcode 0x55
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEA = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // A = A ^ ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA ^= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opLSRzpx()
    {   // opcode 0x56
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEAWrite = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // SET_LAZY_C(ML0);
        this.regRC = ((this.regRC & 0xfeff) | ((this.abMem[this.regEAWrite] & 0x01)? 0x0100 : 0));
        // ML = RCL = ML >> 1;
        this.abMem[this.regEAWrite] = ((this.regRC = ((this.regRC & 0xff00) | (this.abMem[this.regEAWrite] >> 1))) & 0xff);
        // SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = (this.regRC & 0xff);
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opCLI()
    {   // opcode 0x58
        // I = 0;
        this.regP &= 0xfb;
    }

    /**
     * @this {C1PCPU}
     */
    opEORabsy()
    {   // opcode 0x59
        // EA = WORD(PC)+Y; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regY;
        // A = A ^ ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA ^= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opEORabsx()
    {   // opcode 0x5d
        // EA = WORD(PC)+X; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // A = A ^ ML; SET_LAZY_NZ(A)
        this.regRN = this.regRZ = (this.regA ^= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opLSRabsx()
    {   // opcode 0x5e
        // EA = WORD(PC)+X; PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // SET_LAZY_C(ML0);
        this.regRC = ((this.regRC & 0xfeff) | ((this.abMem[this.regEAWrite] & 0x01)? 0x0100 : 0));
        // ML = RCL = ML >> 1;
        this.abMem[this.regEAWrite] = ((this.regRC = ((this.regRC & 0xff00) | (this.abMem[this.regEAWrite] >> 1))) & 0xff);
        // SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = (this.regRC & 0xff);
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opRTS()
    {   // opcode 0x60
        // PCL = STACK(++S);
        // PCH = STACK(++S);
        // PC++;
        this.regS = ((this.regS+2) & 0xff) | 0x100;
        this.regPC = (((this.abMem[(this.regS-1) | 0x100])) | ((this.abMem[this.regS]) << 8)) + 1;
    }

    /**
     * @this {C1PCPU}
     */
    opADCindx()
    {   // opcode 0x61
        // EA = WORD((BYTE(PC++)+X) & 0xff);
        this.regEA = ((this.abMem[this.regPC++]) + this.regX) & 0xff;
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8));
        // RC = (A + ML + LAZY_C);
        this.regRC = (this.regA + this.abMem[this.regEA] + ((this.regRC & 0x0100)? 1 : 0));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
    }

    /**
     * @this {C1PCPU}
     */
    opADCindxBCD()
    {   // opcode 0x61
        // EA = WORD((BYTE(PC++)+X) & 0xff);
        this.regEA = ((this.abMem[this.regPC++]) + this.regX) & 0xff;
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8));
        // A = this.addBCD(A,ML);
        this.regA = this.addBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opADCzp()
    {   // opcode 0x65
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // RC = (A + ML + LAZY_C);
        this.regRC = (this.regA + this.abMem[this.regEA] + ((this.regRC & 0x0100)? 1 : 0));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
    }

    /**
     * @this {C1PCPU}
     */
    opADCzpBCD()
    {   // opcode 0x65
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // A = this.addBCD(A,ML);
        this.regA = this.addBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opRORzp()
    {   // opcode 0x66
        // EA = BYTE(PC++);
        this.regEAWrite = this.abMem[this.regPC++];
        // RCL = ML;
        this.regRC = ((this.regRC & 0xff00) | this.abMem[this.regEAWrite]);
        // RCH1 = RCL0;
        this.regRC = ((this.regRC & 0xfdff) | ((this.regRC & 0x0001)? 0x0200 : 0));
        // RC = RC >> 1;
        this.regRC >>= 1;
        // ML = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = (this.regRC & 0xff);
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opPLA()
    {   // opcode 0x68
        // A = STACK(++S); SET_LAZY_NZ(A);
        this.regS = ((this.regS+1) & 0xff) | 0x100;
        this.regRN = this.regRZ = this.regA = this.abMem[this.regS];
    }

    /**
     * @this {C1PCPU}
     */
    opADCimm()
    {   // opcode 0x69
        // EA = PC++;
        this.regEA = this.regPC++;
        // RC = (A + ML + LAZY_C);
        this.regRC = (this.regA + this.abMem[this.regEA] + ((this.regRC & 0x0100)? 1 : 0));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
    }

    /**
     * @this {C1PCPU}
     */
    opADCimmBCD()
    {   // opcode 0x69
        // EA = PC++;
        this.regEA = this.regPC++;
        // A = this.addBCD(A,ML);
        this.regA = this.addBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opRORacc()
    {   // opcode 0x6a
        // RCL =  A;
        this.regRC = ((this.regRC & 0xff00) | this.regA);
        // RCH1 = RCL0;
        this.regRC = ((this.regRC & 0xfdff) | ((this.regRC & 0x0001)? 0x0200 : 0));
        // RC = RC >> 1;
        this.regRC >>= 1;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
    }

    /**
     * @this {C1PCPU}
     *
     * NOTE from Wikipedia: "The 6502's memory indirect jump instruction, JMP (<address>), is partially broken.
     * If <address> is hex xxFF (i.e., any word ending in FF), the processor will not jump to the address stored in xxFF and xxFF+1 as expected,
     * but rather the one defined by xxFF and xx00. This defect continued through the entire NMOS line, but was corrected in the CMOS derivatives."
     */
    opJMPabs16()
    {   // opcode 0x6c
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // PC = M;
        this.regPC = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8));
    }

    /**
     * @this {C1PCPU}
     */
    opADCabs()
    {   // opcode 0x6d
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // RC = (A + ML + LAZY_C);
        this.regRC =(this.regA + this.abMem[this.regEA] + ((this.regRC & 0x0100)? 1 : 0));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
    }

    /**
     * @this {C1PCPU}
     */
    opADCabsBCD()
    {   // opcode 0x6d
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // A = this.addBCD(A,ML);
        this.regA = this.addBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opRORabs()
    {   // opcode 0x6e
        // EA = WORD(PC); PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // RCL = ML;
        this.regRC = ((this.regRC & 0xff00) | this.abMem[this.regEAWrite]);
        // RCH1 = RCL0;
        this.regRC = ((this.regRC & 0xfdff) | ((this.regRC & 0x0001)? 0x0200 : 0));
        // RC = RC >> 1;
        this.regRC >>= 1;
        // ML = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = (this.regRC & 0xff);
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opBVS()
    {   // opcode 0x70
        // PC = PC + (LAZY_V != 0? SBYTE(PC) : 0) + 1;
        this.regPC += (((((this.regRV & 0xff) ^ this.regRU) ^ (this.regRV >> 1)) & 0x80)? (this.nStepCycles--,((this.abMem[this.regPC] << 24) >> 24)) : 0) + 1;
    }

    /**
     * @this {C1PCPU}
     */
    opADCindy()
    {   // opcode 0x71
        // EA = WORD(BYTE(PC++))+Y;
        this.regEA = (this.abMem[this.regPC++]);
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8)) + this.regY;
        // RC = (A + ML + LAZY_C);
        this.regRC = (this.regA + this.abMem[this.regEA] + ((this.regRC & 0x0100)? 1 : 0));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
    }

    /**
     * @this {C1PCPU}
     */
    opADCindyBCD()
    {   // opcode 0x71
        // EA = WORD(BYTE(PC++))+Y;
        this.regEA = (this.abMem[this.regPC++]);
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8)) + this.regY;
        // A = this.addBCD(A,ML);
        this.regA = this.addBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opADCzpx()
    {   // opcode 0x75
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEA = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // RC = (A + ML + LAZY_C);
        this.regRC = (this.regA + this.abMem[this.regEA] + ((this.regRC & 0x0100)? 1 : 0));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
    }

    /**
     * @this {C1PCPU}
     */
    opADCzpxBCD()
    {   // opcode 0x75
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEA = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // A = this.addBCD(A,ML);
        this.regA = this.addBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opRORzpx()
    {   // opcode 0x76
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEAWrite = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // RCL = ML;
        this.regRC = ((this.regRC & 0xff00) | this.abMem[this.regEAWrite]);
        // RCH1 = RCL0;
        this.regRC = ((this.regRC & 0xfdff) | ((this.regRC & 0x0001)? 0x0200 : 0));
        // RC = RC >> 1;
        this.regRC >>= 1;
        // ML = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = (this.regRC & 0xff);
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opSEI()
    {   // opcode 0x78
        // I = 1;
        this.regP |= 0x04;
    }

    /**
     * @this {C1PCPU}
     */
    opADCabsy()
    {   // opcode 0x79
        // EA = WORD(PC)+Y; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regY;
        // RC = (A + ML + LAZY_C);
        this.regRC = (this.regA + this.abMem[this.regEA] + ((this.regRC & 0x0100)? 1 : 0));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
    }

    /**
     * @this {C1PCPU}
     */
    opADCabsyBCD()
    {   // opcode 0x79
        // EA = WORD(PC)+Y; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regY;
        // A = this.addBCD(A,ML);
        this.regA = this.addBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opADCabsx()
    {   // opcode 0x7d
        // EA = WORD(PC)+X; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // RC = (A + ML + LAZY_C);
        this.regRC = (this.regA + this.abMem[this.regEA] + ((this.regRC & 0x0100)? 1 : 0));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
    }

    /**
     * @this {C1PCPU}
     */
    opADCabsxBCD()
    {   // opcode 0x7d
        // EA = WORD(PC)+X; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // A = this.addBCD(A,ML);
        this.regA = this.addBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opRORabsx()
    {   // opcode 0x7e
        // EA = WORD(PC)+X; PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // RCL = ML;
        this.regRC = ((this.regRC & 0xff00) | this.abMem[this.regEAWrite]);
        // RCH1 = RCL0;
        this.regRC = ((this.regRC & 0xfdff) | ((this.regRC & 0x0001)? 0x0200 : 0));
        // RC = RC >> 1;
        this.regRC >>= 1;
        // ML = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = (this.regRC & 0xff);
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opSTAindx()
    {   // opcode 0x81
        // EA = WORD((BYTE(PC++)+X) & 0xff);
        this.regEAWrite = ((this.abMem[this.regPC++]) + this.regX) & 0xff;
        this.regEAWrite = (this.abMem[this.regEAWrite] | (this.abMem[this.regEAWrite+1] << 8));
        // ML = A;
        this.abMem[this.regEAWrite] = this.regA;
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opSTYzp()
    {   // opcode 0x84
        // EA = BYTE(PC++);
        this.regEAWrite = this.abMem[this.regPC++];
        // ML = Y;
        this.abMem[this.regEAWrite] = this.regY;
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opSTAzp()
    {   // opcode 0x85
        // EA = BYTE(PC++);
        this.regEAWrite = this.abMem[this.regPC++];
        // ML = A;
        this.abMem[this.regEAWrite] = this.regA;
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opSTXzp()
    {   // opcode 0x86
        // EA = BYTE(PC++);
        this.regEAWrite = this.abMem[this.regPC++];
        // ML = X;
        this.abMem[this.regEAWrite] = this.regX;
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opDEY()
    {   // opcode 0x88
        // Y = ((Y - 1) & 0xff);
        this.regY = ((this.regY - 1) & 0xff);
        // SET_LAZY_NZ(Y);
        this.regRN = this.regRZ = (this.regY);
    }

    /**
     * @this {C1PCPU}
     */
    opTXA()
    {   // opcode 0x8a
        // A = X; SET_LAZY_NZ(X);
        this.regRN = this.regRZ = this.regA = this.regX;
    }

    /**
     * @this {C1PCPU}
     */
    opSTYabs()
    {   // opcode 0x8c
        // EA = WORD(PC); PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // ML = Y;
        this.abMem[this.regEAWrite] = this.regY;
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opSTAabs()
    {   // opcode 0x8d
        // EA = WORD(PC); PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // ML = A;
        this.abMem[this.regEAWrite] = this.regA;
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opSTXabs()
    {   // opcode 0x8e
        // EA = WORD(PC); PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // ML = X;
        this.abMem[this.regEAWrite] = this.regX;
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opBCC()
    {   // opcode 0x90
        // PC = PC + (LAZY_C == 0? SBYTE(PC) : 0) + 1;
        this.regPC += (!(this.regRC & 0x0100)? (this.nStepCycles--,((this.abMem[this.regPC] << 24) >> 24)) : 0) + 1;
    }

    /**
     * @this {C1PCPU}
     */
    opSTAindy()
    {   // opcode 0x91
        // EA = WORD(BYTE(PC++))+Y;
        this.regEAWrite = (this.abMem[this.regPC++]);
        this.regEAWrite = (this.abMem[this.regEAWrite] | (this.abMem[this.regEAWrite+1] << 8)) + this.regY;
        // ML = A;
        this.abMem[this.regEAWrite] = this.regA;
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opSTYzpx()
    {   // opcode 0x94
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEAWrite = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // ML = Y;
        this.abMem[this.regEAWrite] = this.regY;
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opSTAzpx()
    {   // opcode 0x95
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEAWrite = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // ML = A;
        this.abMem[this.regEAWrite] = this.regA;
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opSTXzpy()
    {   // opcode 0x96
        // EA = (BYTE(PC++)+Y) & 0xff;
        this.regEAWrite = (this.abMem[this.regPC++]+this.regY) & 0xff;
        // ML = X;
        this.abMem[this.regEAWrite] = this.regX;
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opTYA()
    {   // opcode 0x98
        // A = Y; SET_LAZY_NZ(Y);
        this.regRN = this.regRZ = this.regA = this.regY;
    }

    /**
     * @this {C1PCPU}
     */
    opSTAabsy()
    {   // opcode 0x99
        // EA = WORD(PC)+Y; PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regY;
        // ML = A;
        this.abMem[this.regEAWrite] = this.regA;
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opTXS()
    {   // opcode 0x9a
        // S = X;
        this.regS = this.regX | 0x100;
    }

    /**
     * @this {C1PCPU}
     */
    opSTAabsx()
    {   // opcode 0x9d
        // EA = WORD(PC)+X; PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // ML = A;
        this.abMem[this.regEAWrite] = this.regA;
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opLDYimm()
    {   // opcode 0xa0
        // EA = PC++;
        this.regEA = this.regPC++;
        // Y = ML; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.regY = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opLDAindx()
    {   // opcode 0xa1
        // EA = WORD((BYTE(PC++)+X) & 0xff);
        this.regEA = ((this.abMem[this.regPC++]) + this.regX) & 0xff;
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8));
        // A = ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = this.regA = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opLDXimm()
    {   // opcode 0xa2
        // EA = PC++;
        this.regEA = this.regPC++;
        // X = ML; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.regX = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opLDYzp()
    {   // opcode 0xa4
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // Y = ML; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.regY = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opLDAzp()
    {   // opcode 0xa5
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // A = ML; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.regA = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opLDXzp()
    {   // opcode 0xa6
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // X = ML; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.regX = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opTAY()
    {   // opcode 0xa8
        // Y = A; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = this.regY = this.regA;
    }

    /**
     * @this {C1PCPU}
     */
    opLDAimm()
    {   // opcode 0xa9
        // EA = PC++;
        this.regEA = this.regPC++;
        // A = ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = this.regA = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opTAX()
    {   // opcode 0xaa
        // X = A; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = this.regX = this.regA;
    }

    /**
     * @this {C1PCPU}
     */
    opLDYabs()
    {   // opcode 0xac
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // Y = ML; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.regY = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opLDAabs()
    {   // opcode 0xad
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // A = ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = this.regA = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opLDXabs()
    {   // opcode 0xae
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // X = ML; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.regX = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opBCS()
    {   // opcode 0xb0
        // PC = PC + (LAZY_C != 0? SBYTE(PC) : 0) + 1;
        this.regPC += ((this.regRC & 0x0100)? (this.nStepCycles--,((this.abMem[this.regPC] << 24) >> 24)) : 0) + 1;
    }

    /**
     * @this {C1PCPU}
     */
    opLDAindy()
    {   // opcode 0xb1
        // EA = WORD(BYTE(PC++))+Y;
        this.regEA = (this.abMem[this.regPC++]);
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8)) + this.regY;
        // A = ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = this.regA = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opLDYzpx()
    {   // opcode 0xb4
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEA = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // Y = ML; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.regY = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opLDAzpx()
    {   // opcode 0xb5
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEA = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // A = ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = this.regA = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opLDXzpy()
    {   // opcode 0xb6
        // EA = (BYTE(PC++)+Y) & 0xff;
        this.regEA = (this.abMem[this.regPC++]+this.regY) & 0xff;
        // X = ML; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.regX = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opCLV()
    {   // opcode 0xb8
        // SET_LAZY_V(0);
        this.regRV = 0; this.regRU = 0;
    }

    /**
     * @this {C1PCPU}
     */
    opLDAabsy()
    {   // opcode 0xb9
        // EA = WORD(PC)+Y; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regY;
        // A = ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = this.regA = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opTSX()
    {   // opcode 0xba
        // X = S; SET_LAZY_NZ(S);
        this.regRN = this.regRZ = this.regX = this.regS & 0xff;
    }

    /**
     * @this {C1PCPU}
     */
    opLDYabsx()
    {   // opcode 0xbc
        // EA = WORD(PC)+X; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // Y = ML; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.regY = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opLDAabsx()
    {   // opcode 0xbd
        // EA = WORD(PC)+X; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // A = ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = this.regA = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opLDXabsy()
    {   // opcode 0xbe
        // EA = WORD(PC)+Y; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regY;
        // X = ML; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.regX = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opCPYimm()
    {   // opcode 0xc0
        // EA = PC++;
        this.regEA = this.regPC++;
        // RC = Y - ML;
        this.regRC = this.regY - this.abMem[this.regEA];
        // SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = (this.regRC);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opCMPindx()
    {   // opcode 0xc1
        // EA = WORD((BYTE(PC++)+X) & 0xff);
        this.regEA = ((this.abMem[this.regPC++]) + this.regX) & 0xff;
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8));
        // RC = A - ML; SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = this.regRC = (this.regA - this.abMem[this.regEA]);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opCPYzp()
    {   // opcode 0xc4
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // RC = Y - ML;
        this.regRC = this.regY - this.abMem[this.regEA];
        // SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = (this.regRC);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opCMPzp()
    {   // opcode 0xc5
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // RC = A - ML; SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = this.regRC = (this.regA - this.abMem[this.regEA]);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opDECzp()
    {   // opcode 0xc6
        // EA = BYTE(PC++);
        this.regEAWrite = this.abMem[this.regPC++];
        // ML = ML - 1; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = ((this.abMem[this.regEAWrite] - 1) & 0xff);
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opINY()
    {   // opcode 0xc8
        // Y = ((Y + 1) & 0xff);
        this.regY = ((this.regY + 1) & 0xff);
        // SET_LAZY_NZ(Y);
        this.regRN = this.regRZ = (this.regY);
    }

    /**
     * @this {C1PCPU}
     */
    opCMPimm()
    {   // opcode 0xc9
        // EA = PC++;
        this.regEA = this.regPC++;
        // RC = A - ML; SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = this.regRC = (this.regA - this.abMem[this.regEA]);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opDEX()
    {   // opcode 0xca
        // X = ((X - 1) & 0xff); SET_LAZY_NZ(X);
        this.regRN = this.regRZ = this.regX = ((this.regX - 1) & 0xff);
    }

    /**
     * @this {C1PCPU}
     */
    opCPYabs()
    {   // opcode 0xcc
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // RC = Y - ML; SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = this.regRC = this.regY - this.abMem[this.regEA];
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opCMPabs()
    {   // opcode 0xcd
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // RC = A - ML; SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = this.regRC = (this.regA - this.abMem[this.regEA]);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opDECabs()
    {   // opcode 0xce
        // EA = WORD(PC); PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // ML = ML - 1; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = ((this.abMem[this.regEAWrite] - 1) & 0xff);
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opBNE()
    {   // opcode 0xd0
        // PC = PC + (LAZY_Z == 0? SBYTE(PC) : 0) + 1;
        this.regPC += ((this.regRZ & 0xff)? (this.nStepCycles--,((this.abMem[this.regPC] << 24) >> 24)) : 0) + 1;
    }

    /**
     * @this {C1PCPU}
     */
    opCMPindy()
    {   // opcode 0xd1
        // EA = WORD(BYTE(PC++))+Y;
        this.regEA = (this.abMem[this.regPC++]);
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8)) + this.regY;
        // RC = A - ML; SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = this.regRC = (this.regA - this.abMem[this.regEA]);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opCMPzpx()
    {   // opcode 0xd5
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEA = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // RC = A - ML; SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = this.regRC = (this.regA - this.abMem[this.regEA]);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opDECzpx()
    {   // opcode 0xd6
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEAWrite = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // ML = ML - 1; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = ((this.abMem[this.regEAWrite] - 1) & 0xff);
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opCLD()
    {   // opcode 0xd8
        // D = 0;
        this.clearBCD();
    }

    /**
     * @this {C1PCPU}
     */
    opCMPabsy()
    {   // opcode 0xd9
        // EA = WORD(PC)+Y; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regY;
        // RC = A - ML; SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = this.regRC = (this.regA - this.abMem[this.regEA]);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opCMPabsx()
    {   // opcode 0xdd
        // EA = WORD(PC)+X; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // RC = A - ML; SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = this.regRC = (this.regA - this.abMem[this.regEA]);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opDECabsx()
    {   // opcode 0xde
        // EA = WORD(PC)+X; PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // ML = ML - 1; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = ((this.abMem[this.regEAWrite] - 1) & 0xff);
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opCPXimm()
    {   // opcode 0xe0
        // EA = PC++;
        this.regEA = this.regPC++;
        // RC = X - ML;
        this.regRC = this.regX - this.abMem[this.regEA];
        // SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = (this.regRC);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opSBCindx()
    {   // opcode 0xe1
        // EA = WORD((BYTE(PC++)+X) & 0xff);
        this.regEA = ((this.abMem[this.regPC++]) + this.regX) & 0xff;
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8));
        // RC = (A - ML - !LAZY_C);
        this.regRC = (this.regA - this.abMem[this.regEA] - ((this.regRC & 0x0100)? 0 : 1));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opSBCindxBCD()
    {   // opcode 0xe1
        // EA = WORD((BYTE(PC++)+X) & 0xff);
        this.regEA = ((this.abMem[this.regPC++]) + this.regX) & 0xff;
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8));
        // A = this.subBCD(A,ML);
        this.regA = this.subBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opCPXzp()
    {   // opcode 0xe4
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // RC = X - ML;
        this.regRC = this.regX - this.abMem[this.regEA];
        // SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = (this.regRC);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opSBCzp()
    {   // opcode 0xe5
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // RC = (A - ML - !LAZY_C);
        this.regRC = (this.regA - this.abMem[this.regEA] - ((this.regRC & 0x0100)? 0 : 1));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opSBCzpBCD()
    {   // opcode 0xe5
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // A = this.subBCD(A,ML);
        this.regA = this.subBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opINCzp()
    {   // opcode 0xe6
        // EA = BYTE(PC++);
        this.regEAWrite = this.abMem[this.regPC++];
        // ML = ML + 1; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = ((this.abMem[this.regEAWrite] + 1) & 0xff);
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opINX()
    {   // opcode 0xe8
        // X = ((X + 1) & 0xff);
        this.regX = ((this.regX + 1) & 0xff);
        // SET_LAZY_NZ(X);
        this.regRN = this.regRZ = (this.regX);
    }

    /**
     * @this {C1PCPU}
     */
    opSBCimm()
    {   // opcode 0xe9
        // EA = PC++;
        this.regEA = this.regPC++;
        // RC = (A - ML - !LAZY_C);
        this.regRC = (this.regA - this.abMem[this.regEA] - ((this.regRC & 0x0100)? 0 : 1));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opSBCimmBCD()
    {   // opcode 0xe9
        // EA = PC++;
        this.regEA = this.regPC++;
        // A = this.subBCD(A,ML);
        this.regA = this.subBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opNOP()
    {   // opcode 0xea
        //
    }

    /**
     * @this {C1PCPU}
     */
    opCPXabs()
    {   // opcode 0xec
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // RC = X - ML; SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = this.regRC = this.regX - this.abMem[this.regEA];
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opSBCabs()
    {   // opcode 0xed
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // RC = (A - ML - !LAZY_C);
        this.regRC = (this.regA - this.abMem[this.regEA] - ((this.regRC & 0x0100)? 0 : 1));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opSBCabsBCD()
    {   // opcode 0xed
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // A = this.subBCD(A,ML);
        this.regA = this.subBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opINCabs()
    {   // opcode 0xee
        // EA = WORD(PC); PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // ML = ML + 1; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = ((this.abMem[this.regEAWrite] + 1) & 0xff);
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opBEQ()
    {   // opcode 0xf0
        // PC = PC + (LAZY_Z == 1? SBYTE(PC) : 0) + 1;
        this.regPC += (!(this.regRZ & 0xff)? (this.nStepCycles--,((this.abMem[this.regPC] << 24) >> 24)) : 0) + 1;
    }

    /**
     * @this {C1PCPU}
     */
    opSBCindy()
    {   // opcode 0xf1
        // EA = WORD(BYTE(PC++))+Y;
        this.regEA = (this.abMem[this.regPC++]);
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8)) + this.regY;
        // RC = (A - ML - !LAZY_C);
        this.regRC = (this.regA - this.abMem[this.regEA] - ((this.regRC & 0x0100)? 0 : 1));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opSBCindyBCD()
    {   // opcode 0xf1
        // EA = WORD(BYTE(PC++))+Y;
        this.regEA = (this.abMem[this.regPC++]);
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8)) + this.regY;
        // A = this.subBCD(A,ML);
        this.regA = this.subBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opSBCzpx()
    {   // opcode 0xf5
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEA = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // RC = (A - ML - !LAZY_C);
        this.regRC = (this.regA - this.abMem[this.regEA] - ((this.regRC & 0x0100)? 0 : 1));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opSBCzpxBCD()
    {   // opcode 0xf5
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEA = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // A = this.subBCD(A,ML);
        this.regA = this.subBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opINCzpx()
    {   // opcode 0xf6
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEAWrite = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // ML = ML + 1; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = ((this.abMem[this.regEAWrite] + 1) & 0xff);
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opSED()
    {   // opcode 0xf8
        // D = 1;
        this.setBCD();
    }

    /**
     * @this {C1PCPU}
     */
    opSBCabsy()
    {   // opcode 0xf9
        // EA = WORD(PC)+Y; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regY;
        // RC = (A - ML - !LAZY_C);
        this.regRC = (this.regA - this.abMem[this.regEA] - ((this.regRC & 0x0100)? 0 : 1));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opSBCabsyBCD()
    {   // opcode 0xf9
        // EA = WORD(PC)+Y; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regY;
        // A = this.subBCD(A,ML);
        this.regA = this.subBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opSBCabsx()
    {   // opcode 0xfd
        // EA = WORD(PC)+X; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // RC = (A - ML - !LAZY_C);
        this.regRC = (this.regA - this.abMem[this.regEA] - ((this.regRC & 0x0100)? 0 : 1));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opSBCabsxBCD()
    {   // opcode 0xfd
        // EA = WORD(PC)+X; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // A = this.subBCD(A,ML);
        this.regA = this.subBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opINCabsx()
    {   // opcode 0xfe
        // EA = WORD(PC)+X; PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // ML = ML + 1; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = ((this.abMem[this.regEAWrite] + 1) & 0xff);
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opSim()
    {
        var addr;
        var bSimOp = this.abMem[this.regPC++];
        switch(bSimOp) {

            case this.SIMOP_HLT:
                this.println("HALT");
                this.halt();
                break;

            case this.SIMOP_MSG:
                addr = this.regPC;                  // currently we're using "inline" strings
                // addr = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
                var s = "";
                while (addr < this.abMem.length) {
                    var b = this.abMem[addr++];
                    if (!b) break;
                    s += String.fromCharCode(b);
                }
                this.regPC = addr;                  // update regPC as long as we're doing "inline" strings
                /*
                 * Before simply printing the string, what kinds of handy substitutions should we provide?
                 *
                 *      eg: %A for this.regA, %X for this.regX, etc
                 */
                s = s.replace(/%A/g, Str.toHex(this.regA, 2)).replace(/%X/g, Str.toHex(this.regX, 2)).replace(/%Y/g, Str.toHex(this.regY, 2));
                this.println(s);
                /*
                 * To make printing "smoother", let's force a yield
                 */
                this.yieldCPU();
                break;

            default:
                this.regPC -= 2;
                this.println("undefined opSim: " + Str.toHexByte(bSimOp) + " at " + Str.toHexWord(this.regPC));
                this.halt();
        }
    }

    /**
     * @this {C1PCPU}
     */
    opUndefined()
    {
        var b = this.abMem[--this.regPC];
        this.println("undefined opcode: " + Str.toHexByte(b) + " at " + Str.toHexWord(this.regPC));
        this.halt();
    }

    /**
     * C1PCPU.init()
     *
     * This function operates on every HTML element of class "cpu", extracting the
     * JSON-encoded parameters for the C1PCPU constructor from the element's "data-value"
     * attribute, invoking the constructor to create a C1PCPU component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        var aeCPUs = Component.getElementsByClass(document, C1PJS.APPCLASS, "cpu");
        for (var iCPU=0; iCPU < aeCPUs.length; iCPU++) {
            var eCPU = aeCPUs[iCPU];
            var parmsCPU = Component.getComponentParms(eCPU);
            var cpu = new C1PCPU(parmsCPU);
            Component.bindComponentControls(cpu, eCPU, C1PJS.APPCLASS);
        }
    }
}

/*
 * Macro reference (from my original 1998 C source code, preserved in the comments below):
 *
 *      #define BYTE(a)  (abMem[(a) & 0xffff])
 *      #define WORD(a)  (*(word *)&BYTE(a))
 *      #define SBYTE(a) ((int)(char)BYTE(a))
 *      #define STACK(a) BYTE(((a) & 0xff)+0x100)
 *      #define M WORD(EA)
 *      #define ML BYTE(EA+0)
 *      #define MH BYTE(EA+1)
 *      #define A (aRegs[0].value)  // 8 bits
 *      #define X (aRegs[1].value)  // 8 bits
 *      #define Y (aRegs[2].value)  // 8 bits
 *      #define S (aRegs[3].value)  // 8 bits
 *      #define P (aRegs[4].value)  // 8 bits
 *      #define RN (aRegs[5].value) // 8 bits
 *      #define RZ (aRegs[6].value) // 8 bits
 *      #define RU (aRegs[7].value) // 8 bits
 *      #define RV (aRegs[8].value) // 16 bits
 *      #define RC (aRegs[9].value) // 16 bits
 *      #define EA (aRegs[10].value)// 16 bits
 *      #define LA (aRegs[11].value)// 16 bits
 *      #define PC (aRegs[12].value)// 16 bits
 *      #define EF (aRegs[13].value)// 8 bits
 *      #define C P0
 *      #define Z P1
 *      #define I P2
 *      #define D P3
 *      #define B P4
 *      #define V P6
 *      #define N P7
 *      #define W EF0
 *      #define LAZY_C (RCH0)
 *      #define SET_LAZY_C(b) (RCH0 = (b))
 *      #define LAZY_N (RN7)
 *      #define SET_LAZY_N(b) (RN7 = (b))
 *      #define SET_LAZY_NZ(v) (RN = RZ = (v))
 *      #define LAZY_Z ((byte)RZ == 0)
 *      #define SET_LAZY_Z(b) (RZ = !(b))
 *      #define LAZY_V ((((RVL ^ RU) ^ (RV >> 1)) & 0x80) != 0)
 *      #define SET_LAZY_V(b) (RV = 0, RU = ((b)? 0x80 : 0x00))
 *      #define SET_LAZY_OV(a,b,r) (RU = (a) ^ (b), RV = (r))
 */

/*
 * Initialize every CPU module on the page (as IF there's ever going to be more than one ;-))
 */
Web.onInit(C1PCPU.init);

/**
 * @copyright https://www.pcjs.org/machines/osi/c1p/lib/rom.js (C) 2012-2025 Jeff Parsons
 */


/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @unrestricted
 */
class C1PROM extends Component {
    /**
     * C1PROM(parmsROM)
     *
     * The ROM component expects the following (parmsROM) properties:
     *
     *      'size': size of ROM, in bytes
     *      'file': name of ROM image file (prior to v1.76, this was 'image')
     *
     * NOTE: The final location for the ROM image, once loaded, will be specified
     * by the Computer object, using the setBuffer() method.
     *
     * @this {C1PROM}
     * @param {Object} parmsROM
     * @property {function()} convertImage
     */
    constructor(parmsROM)
    {
        super("C1PROM", parmsROM);

        this.abMem = null;
        this.abImage = null;
        this.cbROM = +parmsROM['size'];
        this.sImage = parmsROM['file'] || parmsROM['image'];
        if (this.sImage) {
            var sFileURL = this.sImage;
            /**
             * If the selected ROM image has a ".json" extension, then we assume it's a pre-converted
             * JSON-encoded ROM image, so we load it as-is; ditto for files with a ".hex" extension. Otherwise,
             * we ask our server-side ROM image converter to return the corresponding JSON-encoded data,
             * in compact form (ie, minimal whitespace, no ASCII data comments, etc).
             */
            var sFileExt = Str.getExtension(this.sImage);
            if (sFileExt != DumpAPI.FORMAT.JSON && sFileExt != DumpAPI.FORMAT.HEX) {
                sFileURL = Web.getHostOrigin() + DumpAPI.ENDPOINT + '?' + DumpAPI.QUERY.FILE + '=' + this.sImage + '&' + DumpAPI.QUERY.FORMAT + '=' + DumpAPI.FORMAT.BYTES;
            }
            var rom = this;
            Web.getResource(sFileURL, null, true, function(sURL, sResponse, nErrorCode) {
                rom.convertImage(sURL, sResponse, nErrorCode);
            });
            return;
        }
        this.setReady();
    }

    /**
     * @this {C1PROM}
     * @param {Array} abMemory
     * @param {number} start
     * @param {number} end
     * @param {C1PCPU} cpu
     */
    setBuffer(abMemory, start, end, cpu)
    {
        this.abMem = abMemory;
        this.offROM = start;
        var cbROM = end - start + 1;
        /*
         * It's possible that the ROM component didn't specify a size,
         * in which case just use the size the Computer component has specified.
         */
        if (!this.cbROM)
            this.cbROM = cbROM;
        if (cbROM != this.cbROM) {
            this.setError("computer-specified ROM size (" + Str.toHexWord(cbROM) + ") does not match component-specified size (" + Str.toHexWord(this.cbROM) + ")");
            return;
        }
        if (cpu) {
            this.cpu = cpu;
            cpu.addWriteNotify(start, end, this, this.setByte);
        }
        this.copyImage();
    }

    /**
     * @this {C1PROM}
     * @param {boolean} fOn
     * @param {C1PComputer} cmp
     */
    setPower(fOn, cmp)
    {
        if (fOn && !this.flags.powered) {
            this.flags.powered = true;
            if (DEBUGGER) this.dbg = cmp.getComponentByType("debugger");
        }
    }

    /**
     * @this {C1PROM}
     * @param {number} addr
     * @param {number|undefined} [addrFrom]
     */
    setByte(addr, addrFrom)
    {
        /*
         * Beyond reporting this write, we need to "repair" the ROM, using the original image data,
         * but only if addrFrom is defined (undefined implies this is a write from the Debugger, and
         * we need to allow the Debugger to modify ROM contents).
         */
        if (addrFrom !== undefined) {
            if (DEBUGGER && this.dbg) this.dbg.messageIO(this, addr, addrFrom, this.dbg.MESSAGE_PORT, true);
            var offset = (addr - this.offROM);

            if (!this.abImage)
                this.abMem[this.offROM + offset] = 0;
            else
                this.abMem[this.offROM + offset] = this.abImage[offset];
        }
    }

    /**
     * @this {C1PROM}
     * @param {string} sImageName
     * @param {string} sImageData
     * @param {number} nErrorCode (response from server if anything other than 200)
     */
    convertImage(sImageName, sImageData, nErrorCode)
    {
        if (nErrorCode) {
            this.println("Error loading ROM \"" + sImageName + "\" (" + nErrorCode + ")");
            return;
        }
        if (sImageData.charAt(0) == "[" || sImageData.charAt(0) == "{") {
            try {
                /*
                 * The most likely source of any exception will be here: parsing the JSON-encoded ROM data.
                 */
                var rom = eval("(" + sImageData + ")");
                var ab = rom['bytes'];
                if (ab) {
                    this.abImage = ab;
                } else {
                    this.abImage = rom;
                }
            } catch (e) {
                this.println("Error processing ROM \"" + sImageName + "\": " + e.message);
                return;
            }
        }
        else {
            /*
             * Parse the ROM image data manually; we assume it's in "simplified" hex form (a series of hex byte-values separated by whitespace)
             */
            var sData = sImageData.replace(/\n/gm, " ").replace(/ +$/, "");
            var asData = sData.split(" ");
            this.abImage = new Array(asData.length);
            for (var i=0; i < asData.length; i++) {
                this.abImage[i] = parseInt(asData[i], 16);
            }
        }
        this.copyImage();
    }

    /**
     * @this {C1PROM}
     */
    copyImage()
    {
        /*
         * The Computer object may give us the address of the ROM image before we've finished downloading the image,
         * so both setBuffer() and convertImage() call copyImage(), which in turn will copy the image ONLY when both
         * pieces are in place.  At that point, the component becomes "ready", in much the same way that other components
         * (eg, CPU and Screen) become "ready" when all their prerequisites are satisfied.
         */
        if (!this.isReady()) {
            if (!this.sImage) {
                this.setReady();
            }
            else
            if (this.abImage && this.abMem) {
                var cbImage = this.abImage.length;
                if (cbImage != this.cbROM) {
                    this.setError("ROM image size (" + Str.toHexWord(cbImage) + ") does not match component-specified size (" + Str.toHexWord(this.cbROM) + ")");
                    return;
                }
                if (DEBUG) this.log("copyImage(): copying ROM to " + Str.toHexWord(this.offROM) + " (" + Str.toHexWord(cbImage) + " bytes)");
                for (var i=0; i < cbImage; i++) {
                    this.abMem[this.offROM + i] = this.abImage[i];
                }
                this.setReady();
            }
        }
    }

    /**
     * C1PROM.init()
     *
     * This function operates on every HTML element of class "rom", extracting the
     * JSON-encoded parameters for the C1PROM constructor from the element's "data-value"
     * attribute, invoking the constructor to create a C1PROM component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        var aeROM = Component.getElementsByClass(document, C1PJS.APPCLASS, "rom");
        for (var iROM=0; iROM < aeROM.length; iROM++) {
            var eROM = aeROM[iROM];
            var parmsROM = Component.getComponentParms(eROM);
            var rom = new C1PROM(parmsROM);
            Component.bindComponentControls(rom, eROM, C1PJS.APPCLASS);
        }
    }
}

/*
 * Initialize all the ROM modules on the page.
 */
Web.onInit(C1PROM.init);

/**
 * @copyright https://www.pcjs.org/machines/osi/c1p/lib/ram.js (C) 2012-2025 Jeff Parsons
 */


/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @unrestricted
 */
class C1PRAM extends Component {
    /**
     * C1PRAM(parmsRAM)
     *
     * The RAM component expects the following (parmsRAM) properties:
     *
     *      size: amount of RAM, in bytes
     *
     * NOTE: We may make a note of the specified size, but we will not actually allocate
     * any memory for the RAM; we wait for the Computer object to tell us where our RAM is,
     * using the setBuffer() method.
     *
     * @this {C1PRAM}
     * @param {Object} parmsRAM
     */
    constructor(parmsRAM)
    {
        super("C1PRAM", parmsRAM);
    }

    /**
     * @this {C1PRAM}
     * @param {Array} abMemory
     * @param {number} start
     * @param {number} end
     * @param {C1PCPU} cpu
     */
    setBuffer(abMemory, start, end, cpu)
    {
        this.abMem = abMemory;
     // this.offRAM = start;
     // this.cbRAM = end - start + 1;
        this.setReady();
    }

    /**
     * C1PRAM.init()
     *
     * This function operates on every HTML element of class "ram", extracting the
     * JSON-encoded parameters for the C1PRAM constructor from the element's "data-value"
     * attribute, invoking the constructor to create a C1PRAM component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        var aeRAM = Component.getElementsByClass(document, C1PJS.APPCLASS, "ram");
        for (var iRAM=0; iRAM < aeRAM.length; iRAM++) {
            var eRAM = aeRAM[iRAM];
            var parmsRAM = Component.getComponentParms(eRAM);
            var ram = new C1PRAM(parmsRAM);
            Component.bindComponentControls(ram, eRAM, C1PJS.APPCLASS);
        }
    }
}

/*
 * Initialize all the RAM modules on the page.
 */
Web.onInit(C1PRAM.init);

/**
 * @copyright https://www.pcjs.org/machines/osi/c1p/lib/keyboard.js (C) 2012-2025 Jeff Parsons
 */


/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @unrestricted
 */
class C1PKeyboard extends Component {
    /**
     * C1PKeyboard(parmsKbd)
     *
     * The Keyboard component can be configured with the following (parmsKbd) properties:
     *
     *      model: model number (one of: 542 or 600; 600 is the default)
     *
     * Its main purpose is to receive binding requests for various keyboard events,
     * and to use those events to simulate the C1P's keyboard hardware; specifically,
     * an OSI model 600 board (NOT the model 542).
     *
     * Keys on the C1P keyboard that differ from modern keyboards, along with their
     * closest modern counterpart:
     *
     *      C1P      PC
     *      ---      --
     *      2"       2@
     *      6&       6^
     *      7'       7&
     *      8(       8*
     *      9)       9(
     *      0        0)
     *      :*       -_
     *      -=       =+
     *      ;+       ;:
     *      LINEFEED CTRL-J
     *      RETURN   ENTER (or CTRL-M)
     *      SHIFT-O  DELETE (or CTRL-H)
     *      SHIFT-N  ^
     *      SHIFT-P  @ (used by the BASIC-IN-ROM to abandon the current line)
     *      SHIFT-L  \
     *      SHIFT-K  [
     *      SHIFT-M  ]
     *      CTRL-C   Same (used by the BASIC-IN-ROM to interrupt RUN and LIST, unless disabled with POKE 530,1)
     *      CTRL-O   Same (used by the BASIC-IN-ROM to suppress output until another CTRL-O is typed)
     *      RUB-OUT  (no mapping chosen for this key yet)
     *      REPEAT   (no mapping chosen for this key yet)
     *
     * Problems with iOS Devices
     * -------------------------
     * The keyboard pops up with the SHIFT key depressed, which is not the initial keyboard state that the C1P expects.
     * I tried to fix that by adding an 'autocapitalize="off"' attribute alongside the 'contenteditable="true"' attribute
     * on the <canvas> element, but apparently Safari v5 honors that only inside certain elements (eg, <input>).  The simplest
     * work-around is to tap the iOS device's SHIFT key before starting to type, but I'd prefer an automatic solution.
     *
     * Another work-around might be to NEVER pass the real CAPS-LOCK state to the virtual machine, and whenever CAPS-LOCK is
     * actually down, automatically "uncapitalize" all letters.
     *
     * However, the current work-around is for keyPressSimulate() to ALWAYS convert all alphabetic charCodes to their
     * lower-case equivalents, and simply let the C1P's own shift-key logic do its thing.  Note that we do this ONLY for
     * iOS devices, so that on all other devices, you can still use special shifted key combinations like SHIFT-O and SHIFT-P;
     * this work-around breaks those key combinations for iOS devices, but that seems like a reasonable trade-off.
     *
     * Simple C1P Virtual Hardware Test
     * --------------------------------
     * Using the following code:
     *
     *      10 POKE 530,1
     *      20 KEY=57088
     *      25 Q=-1
     *      30 POKE KEY,64
     *      40 P=PEEK(KEY)
     *      50 IF P<>Q THEN PRINT P
     *      60 Q=P
     *      70 GOTO 30
     *
     * The value 64 (0x40) should have enabled every row except R6.  Here were the results for keys
     * on row R7:
     *
     *        1   2   3   4   5   6   7
     *      --- --- --- --- --- --- ---
     *      126 190 222 238 246 250 252
     *
     * Sure enough, none of the keys on R6 worked, and all the keys on rows R0-R5 generated the same
     * values as R7. But why were the values read all EVEN instead of ODD (ie, why was bit 0 cleared as
     * well?)  Answer: because 0x40 also enables keys on row R0, where the SHIFT-LOCK key resides,
     * and since the SHIFT-LOCK is normally locked AND also sits in column C0, bit 0 will be clear as well.
     *
     * This explains why the "STAR WARS" game (SAMPLE4.BAS) expected values "126,190,222,238,246,250"
     * for keys 1-6 after POKE'ing 64 into location 57088 (0xdf00), instead of the more typical values
     * "127,191,223,239,247,251."  This also means that anyone who happened to unlock their SHIFT-LOCK
     * would have trouble playing that game.
     *
     * @this {C1PKeyboard}
     * @param {Object} parmsKbd
     */
    constructor(parmsKbd)
    {
        super("C1PKeyboard", parmsKbd);

        this.flags.powered = false;
        this.nDefaultModel = parmsKbd['model'];

        /*
         * keyCodes that I must pay particular attention to
         */
        this.KEYCODE_DELETE     = 0x08;
        this.KEYCODE_TAB        = 0x09;
        this.KEYCODE_LF         = 0x0A;
        this.KEYCODE_CR         = 0x0D;
        this.KEYCODE_SHIFT      = 0x10;                 // I map this to CHARCODE_LSHIFT
        this.KEYCODE_CONTROL    = 0x11;
        this.KEYCODE_ALT        = 0x12;                 // I map this to CHARCODE_RSHIFT (since the C1P keyboard has no ALT key)
        this.KEYCODE_CAPSLOCK   = 0x14;
        this.KEYCODE_ESC        = 0x1B;                 // NOTE: for some reason, this comes in via keyDown/keyUp only, not keyPress
        this.KEYCODE_COMMAND    = 0x5B;

        /*
         * The following charCodes are the same as the corresponding keyCodes
         */
        this.CHARCODE_DELETE    = this.KEYCODE_DELETE;
        this.CHARCODE_LF        = this.KEYCODE_LF;
        this.CHARCODE_CR        = this.KEYCODE_CR;
        this.CHARCODE_ESC       = this.KEYCODE_ESC;

        /*
         * The following charCodes are NOT the same as the corresponding keyCodes, hence the bias (PSEUDO_CHARCODE);
         * I've deliberately chosen a bias that still produces values in the byte range (0x00-0xFF) and will therefore
         * fit into aCharCodeMap, but which shouldn't conflict with any actual, type-able keys.
         */
        this.PSEUDO_CHARCODE    = 0xE0;
        this.CHARCODE_LSHIFT    = this.KEYCODE_SHIFT    + this.PSEUDO_CHARCODE;
        this.CHARCODE_CTRL      = this.KEYCODE_CONTROL  + this.PSEUDO_CHARCODE;
        this.CHARCODE_RSHIFT    = this.KEYCODE_ALT      + this.PSEUDO_CHARCODE;
        this.CHARCODE_SHIFTLOCK = this.KEYCODE_CAPSLOCK + this.PSEUDO_CHARCODE;

        /*
         * Other common character codes, pseudo (like the C1P's "BREAK" key, which has no modern analog) or otherwise
         */
        this.CHARCODE_BREAK     = 0x00 + this.PSEUDO_CHARCODE;
        this.CHARCODE_CTRLC     = 0x03;
        this.CHARCODE_CTRLO     = 0x0F;

        /*
         * These are "shift key" bits I store in bitsShift, and with the exception of BIT_COMMAND (because
         * the C1P doesn't have a COMMAND key), they all match the bit position of the corresponding shift key's
         * column on row 0 (abKbdCols[0]) of the simulated keyboard hardware.
         *
         * NOTE: Whenever shift key bits need to be restored from bitsShift to abKbdCols[0] (eg, when restoring
         * the current shift state at the completion of a simulated key), be sure to mask bitsShift with BITS_SIMULATE
         * before propagating them.
         */
        this.BIT_SHIFTLOCK      = 0x01;
        this.BIT_RSHIFT         = 0x02;
        this.BIT_LSHIFT         = 0x04;
        this.BIT_COMMAND        = 0x08;     // the C1P has no key "wired" to this column, so I can use this bit for COMMAND
        this.BIT_CTRL           = 0x40;
        this.BITS_SIMULATE      = (this.BIT_RSHIFT | this.BIT_LSHIFT | this.BIT_CTRL);

        this.SIMCODE_KEYPRESS   = 0;
        this.SIMCODE_KEYRELEASE = 1;
        this.SIMCODE_KEYEVENT   = 2;
        this.SIMCODE_KEYTIMEOUT = 3;
        this.SIMCODE_AUTOCLEAR  = 4;
        this.aSimCodeDescs = ["keyPress","keyRelease","keyEvent","keyTimeout","autoClear"];

        /*
         * From "OSI C1P Technical Report" p.19 regarding the Model 600 Board:
         *
         *      "By holding down any key, one will first get one character output, and after approximately
         *      a half second delay a repeat rate of approximately 5 characters per second."
         */
        this.nCyclesThreshold   = 8192;     // number of virtual CPU cycles required before aKbdStates is propagated
        this.msReleaseDelay     = 250;      // number of milliseconds before a down key is "forced" up (unless we see it go up)
        this.msReleaseRepeat    = 100;      // number of milliseconds before a held key is "forced" up (assuming auto-repeat)
        this.msInjectDelay      = 300;      // number of milliseconds between injected keystrokes

        this.aButtonCodeMap = {};
        this.aButtonCodeMap['break']  = this.CHARCODE_BREAK;
        this.aButtonCodeMap['esc']    = this.CHARCODE_ESC;
        this.aButtonCodeMap['ctrl-c'] = this.CHARCODE_CTRLC;
        this.aButtonCodeMap['ctrl-o'] = this.CHARCODE_CTRLO;

        /*
         * This array is used by keyEventSimulate() to lookup a given charCode and convert it to the appropriate
         * row/col bit combination that the C1P requires.  I assign each supported charCode a 16-bit value, where
         * the high byte contains the row/col pair (in the high and low nibbles, respectively), and the low byte
         * contains any required shift-key code.
         *
         * For example, an apostrophe (0x27) is an unshifted key on a modern keyboard, but it is a SHIFT-7 on the
         * C1P keyboard, so when I simulate the 7, I must also simulate a SHIFT (I always choose the LEFT shift
         * key -- CHARCODE_LSHIFT -- but that choice is completely arbitrary).
         *
         * Using charCodes (from keyPress events) proved to be more robust than using keyCodes (from keyDown and
         * keyUp events), in part because of differences between the C1P keyboard's layout and modern keyboards,
         * and also because of differences in the way browsers generate the keyDown and keyUp events.  For
         * example, Safari on iOS devices will not generate up/down events for shift keys, and for other keys,
         * the up/down events are usually generated after the actual press is complete, and in rapid succession,
         * which doesn't give the slow C1P virtual machine enough time to detect the key.
         *
         * There are still a few times that I call keyEventSimulate() from keyEvent(), and for those occasions,
         * I create a pseudo-charCode value by adding PSEUDO_CHARCODE (0xE0) to the keyCode value, to avoid any
         * confusion with real charCodes:
         *
         *      CHARCODE_LSHIFT     (originally 0x10, which also looks like CTRL-P, so converted to 0xF0)
         *      CHARCODE_CTRL       (originally 0x11, which also looks like CTRL-Q, so converted to 0xF1)
         *      CHARCODE_RSHIFT     (originally 0x12, which also looks like CTRL-R, so converted to 0xF2)
         *      CHARCODE_SHIFTLOCK  (originally 0x14, which also looks like CTRL-T, so converted to 0xF4)
         *
         * Again, as things currently stand, iOS devices will never generate the above charCodes, so any C1P software
         * that relies detecting on shift-key state changes will not work on those devices.
         *
         * For reference purposes, I've left some parenthetical references to corresponding keyCodes in the comments
         * below.  Relying on keyCodes is problematic, which is why I've tried to eliminate most dependencies on them,
         * but still, they're all you get on keyDown/keyUp events.
         */
        this.aCharCodeMap = [];
        this.aCharCodeMap[0x31] = 0x7700; this.aCharCodeMap[0x21] = 0x7700 + this.CHARCODE_LSHIFT;  // 1 (0x31) ! (0x31)
        this.aCharCodeMap[0x32] = 0x7600; this.aCharCodeMap[0x22] = 0x7600 + this.CHARCODE_LSHIFT;  // 2 (0x32) " (0xDE)
        this.aCharCodeMap[0x33] = 0x7500; this.aCharCodeMap[0x23] = 0x7500 + this.CHARCODE_LSHIFT;  // 3 (0x33) # (0x33)
        this.aCharCodeMap[0x34] = 0x7400; this.aCharCodeMap[0x24] = 0x7400 + this.CHARCODE_LSHIFT;  // 4 (0x34) $ (0x34)
        this.aCharCodeMap[0x35] = 0x7300; this.aCharCodeMap[0x25] = 0x7300 + this.CHARCODE_LSHIFT;  // 5 (0x35) % (0x35)
        this.aCharCodeMap[0x36] = 0x7200; this.aCharCodeMap[0x26] = 0x7200 + this.CHARCODE_LSHIFT;  // 6 (0x36) & (0x37)
        this.aCharCodeMap[0x37] = 0x7100; this.aCharCodeMap[0x27] = 0x7100 + this.CHARCODE_LSHIFT;  // 7 (0x37) ' (0xDE)
        this.aCharCodeMap[0x38] = 0x6700; this.aCharCodeMap[0x28] = 0x6700 + this.CHARCODE_LSHIFT;  // 8 (0x38) ( (0x39)
        this.aCharCodeMap[0x39] = 0x6600; this.aCharCodeMap[0x29] = 0x6600 + this.CHARCODE_LSHIFT;  // 9 (0x39) ) (0x30)
        this.aCharCodeMap[0x30] = 0x6500;   // 0
        this.aCharCodeMap[0x3A] = 0x6400; this.aCharCodeMap[0x2A] = 0x6400 + this.CHARCODE_LSHIFT;  // : (0xBA) * (0x38)
        this.aCharCodeMap[0x2D] = 0x6300; this.aCharCodeMap[0x3D] = 0x6300 + this.CHARCODE_LSHIFT;  // - (0xBD) = (0xBB)
      //this.aCharCodeMap[0x00] = 0x6200;   // RUB-OUT (no mapping chosen for this key yet)
        this.aCharCodeMap[0x2E] = 0x5700; this.aCharCodeMap[0x3E] = 0x5700 + this.CHARCODE_LSHIFT;  // . (0xBE) > (0xBE)
        this.aCharCodeMap[0x6C] = 0x5600; this.aCharCodeMap[0x4C] = 0x5600 + this.CHARCODE_LSHIFT; this.aCharCodeMap[0x5C] = 0x5600 + this.CHARCODE_LSHIFT; // l L \
        this.aCharCodeMap[0x6F] = 0x5500; this.aCharCodeMap[0x4F] = 0x5500 + this.CHARCODE_LSHIFT; this.aCharCodeMap[this.CHARCODE_DELETE] = 0x5500 + this.CHARCODE_LSHIFT; // o O DELETE
        this.aCharCodeMap[this.CHARCODE_LF] = 0x5400;   // LINE-FEED
        this.aCharCodeMap[this.CHARCODE_CR] = 0x5300;   // RETURN
        this.aCharCodeMap[0x77] = 0x4700; this.aCharCodeMap[0x57] = 0x4700 + this.CHARCODE_LSHIFT;  // w W
        this.aCharCodeMap[0x65] = 0x4600; this.aCharCodeMap[0x45] = 0x4600 + this.CHARCODE_LSHIFT;  // e E
        this.aCharCodeMap[0x72] = 0x4500; this.aCharCodeMap[0x52] = 0x4500 + this.CHARCODE_LSHIFT;  // r R
        this.aCharCodeMap[0x74] = 0x4400; this.aCharCodeMap[0x54] = 0x4400 + this.CHARCODE_LSHIFT;  // t T
        this.aCharCodeMap[0x79] = 0x4300; this.aCharCodeMap[0x59] = 0x4300 + this.CHARCODE_LSHIFT;  // y Y
        this.aCharCodeMap[0x75] = 0x4200; this.aCharCodeMap[0x55] = 0x4200 + this.CHARCODE_LSHIFT;  // u U
        this.aCharCodeMap[0x69] = 0x4100; this.aCharCodeMap[0x49] = 0x4100 + this.CHARCODE_LSHIFT;  // i I
        this.aCharCodeMap[0x73] = 0x3700; this.aCharCodeMap[0x53] = 0x3700 + this.CHARCODE_LSHIFT;  // s S
        this.aCharCodeMap[0x64] = 0x3600; this.aCharCodeMap[0x44] = 0x3600 + this.CHARCODE_LSHIFT;  // d D
        this.aCharCodeMap[0x66] = 0x3500; this.aCharCodeMap[0x46] = 0x3500 + this.CHARCODE_LSHIFT;  // f F
        this.aCharCodeMap[0x67] = 0x3400; this.aCharCodeMap[0x47] = 0x3400 + this.CHARCODE_LSHIFT;  // g G
        this.aCharCodeMap[0x68] = 0x3300; this.aCharCodeMap[0x48] = 0x3300 + this.CHARCODE_LSHIFT;  // h H
        this.aCharCodeMap[0x6A] = 0x3200; this.aCharCodeMap[0x4A] = 0x3200 + this.CHARCODE_LSHIFT;  // j J
        this.aCharCodeMap[0x6B] = 0x3100; this.aCharCodeMap[0x4B] = 0x3100 + this.CHARCODE_LSHIFT; this.aCharCodeMap[0x5B] = 0x3100 + this.CHARCODE_LSHIFT; // k K [
        this.aCharCodeMap[0x78] = 0x2700; this.aCharCodeMap[0x58] = 0x2700 + this.CHARCODE_LSHIFT;  // x X
        this.aCharCodeMap[0x63] = 0x2600; this.aCharCodeMap[0x43] = 0x2600 + this.CHARCODE_LSHIFT;  // c C
        this.aCharCodeMap[0x76] = 0x2500; this.aCharCodeMap[0x56] = 0x2500 + this.CHARCODE_LSHIFT;  // v V
        this.aCharCodeMap[0x62] = 0x2400; this.aCharCodeMap[0x42] = 0x2400 + this.CHARCODE_LSHIFT;  // b B
        this.aCharCodeMap[0x6E] = 0x2300; this.aCharCodeMap[0x4E] = 0x2300 + this.CHARCODE_LSHIFT; this.aCharCodeMap[0x5E] = 0x2300 + this.CHARCODE_LSHIFT; // n N ^
        this.aCharCodeMap[0x6D] = 0x2200; this.aCharCodeMap[0x4D] = 0x2200 + this.CHARCODE_LSHIFT; this.aCharCodeMap[0x5D] = 0x2200 + this.CHARCODE_LSHIFT; // m M ]
        this.aCharCodeMap[0x2C] = 0x2100; this.aCharCodeMap[0x3C] = 0x2100 + this.CHARCODE_LSHIFT;  // , (0xBC) < (0xBC)
        this.aCharCodeMap[0x71] = 0x1700; this.aCharCodeMap[0x51] = 0x1700 + this.CHARCODE_LSHIFT;  // q Q
        this.aCharCodeMap[0x61] = 0x1600; this.aCharCodeMap[0x41] = 0x1600 + this.CHARCODE_LSHIFT;  // a A
        this.aCharCodeMap[0x7A] = 0x1500; this.aCharCodeMap[0x5A] = 0x1500 + this.CHARCODE_LSHIFT;  // z Z
        this.aCharCodeMap[0x20] = 0x1400;   // SPACE
        this.aCharCodeMap[0x2F] = 0x1300; this.aCharCodeMap[0x3F] = 0x1300 + this.CHARCODE_LSHIFT;  // / (0xBF) ? (0xBF)
        this.aCharCodeMap[0x3B] = 0x1200; this.aCharCodeMap[0x2B] = 0x1200 + this.CHARCODE_LSHIFT;  // ; (0xBA) + (0xBB)
        this.aCharCodeMap[0x70] = 0x1100; this.aCharCodeMap[0x50] = 0x1100 + this.CHARCODE_LSHIFT; this.aCharCodeMap[0x40] = 0x1100 + this.CHARCODE_LSHIFT; // p P @
      //this.aCharCodeMap[0x00]                     = 0x0700;   // REPEAT (no mapping chosen for this key yet)
        this.aCharCodeMap[this.CHARCODE_CTRL]       = 0x0600;   // CTRL
        this.aCharCodeMap[this.CHARCODE_ESC]        = 0x0500;   // ESC
        this.aCharCodeMap[this.CHARCODE_LSHIFT]     = 0x0200;   // LEFT-SHIFT
        this.aCharCodeMap[this.CHARCODE_RSHIFT]     = 0x0100;   // RIGHT-SHIFT
        this.aCharCodeMap[this.CHARCODE_SHIFTLOCK]  = 0x0000;   // SHIFT-LOCK

        this.reset();
    }

    /**
     * @this {C1PKeyboard}
     */
    reset()
    {
        this.setModel(this.nDefaultModel);

        /*
         * The physical (not virtual) state of various shift keys,
         * with the exception of SHIFT-LOCK, which needs to start in the
         * "locked" position, regardless of the physical CAPS-LOCK state.
         *
         * QUESTION: In JavaScript, how do you query initial key states?
         */
        this.bitsShift = this.BIT_SHIFTLOCK;

        /*
         * Every SET bit of bKbdRows represents an enabled row (this convention
         * is the REVERSE of the C1P hardware, but I prefer it).
         */
        this.bKbdRows = 0x00;

        /*
         * Every SET bit of abKbdCols represents an enabled column; again, this is
         * the REVERSE of the C1P hardware, but I compensate for that difference with
         * a quick XOR in updateMemory().
         *
         * Like bitsShift, this 8x8 array (8 byte values, each with 8 bits) represents
         * the physical state of the keyboard, encoded in C1P format; the C1P won't
         * actually see data this until updateMemory() decides it's time to propagate it.
         */
        this.abKbdCols = [this.BIT_SHIFTLOCK,0x00,0x00,0x00,0x00,0x00,0x00,0x00];

        /*
         * After a new key event has updated abKbdCols, we "push" a copy of that
         * updated keyboard state onto this array. updateMemory() will then "shift"
         * the next copy off, update its own copy (abKbdColsLast), and then propagate
         * that to the C1P's keyboard memory, once the CPU has had enough time to
         * process the previous event (see nCyclesThreshold).
         */
        this.aKbdStates = [];

        /*
         * When a key "down" is simulated on behalf of some charCode, I save
         * the timer object responsible for simulating the key "up" here, so that
         * if I detect the actual key going up sooner, I can cancel the timer and
         * simulate the "up" immediately.  Similarly, if another press for the same
         * key arrives before last one expired (eg, auto-repeat), I need to cancel
         * the previous timer for that key before setting another.
         *
         * NOTE: If this is anything other than an initial reset, then we need to
         * make sure there are no outstanding timers before we blow the array away.
         */
        if (this.aKeyTimers) {
            for (var i in this.aKeyTimers) {
                if (isNaN(+i)) continue; // ignore any non-numeric properties, if any
                if (this.aKeyTimers[i]) clearTimeout(this.aKeyTimers[i]);
            }
        }
        this.aKeyTimers = [];
        this.prevCharDown = 0;
        this.prevKeyDown = 0;

        /*
         * These save the last values written to keyboard memory, so that I can
         * avoid rewriting the memory if the values haven't changed since the last update.
         */
        this.bWriteLast = -1;
        this.abKbdColsLast = this.abKbdCols;

        /*
         * Due to the way the C1P scans its keyboard rows (from R0 up to R7 *or* to the
         * highest row for which a "down" key has just been detected), if we get back-to-back
         * key events for, say, "I" and then "S", the C1P will see only the "S", never the "I",
         * because "I" is on a higher row.
         *
         * That's why we have aKbdStates, which relies on the following CPU activity variables.
         */
        this.nReadsSinceLastEvent = 0;
        this.nWritesSinceLastEvent = 0;
        this.nCyclesSinceLastEvent = 0;

        /*
         * Make sure the auto-injection buffer is empty, too (an injection could have been
         * in progress on any reset after the first).
         */
        this.sInjectBuffer = "";
    }

    /**
     * @this {C1PKeyboard}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "esc", "ctrl-c")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @return {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        /*
         * I want to bind to the first caller (ie, the Screen), not subsequent ones (eg, the Panel)
         */
        if (this.bindings[sBinding] === undefined) {
            switch(sBinding) {
            case "keyDown":
                this.bindings[sBinding] = control;
                control.onkeydown = function(kbd) {
                    return function(event) {
                        return kbd.keyEvent(event, true);
                    };
                }(this);
                return true;
            case "keyPress":
                this.bindings[sBinding] = control;
                control.onkeypress = function(kbd) {
                    return function(event) {
                        return kbd.keyPress(event);
                    };
                }(this);
                return true;
            case "keyUp":
                this.bindings[sBinding] = control;
                control.onkeyup = function(kbd) {
                    return function(event) {
                        return kbd.keyEvent(event, false);
                    };
                }(this);
                return true;
            case "break":
                /*
                 * The BREAK key is unusual: it requires us forcing the equivalent of someone pressing
                 * our "Reset" and "Run" buttons.  As things stand, the Computer component is responsible
                 * for end-user "reset" requests, so we can simply arrange to call this.cmp.reset(true).
                 *
                 * NOTE: At the risk of making keyPressSimulate() a bit uglier, I also permit BREAK
                 * there, in case someone wants to "inject" the BREAK key; however, if it's followed by
                 * other injected keys, I'll need to avoid clearing the injection buffer on a reset;
                 * currently, reset() resets everything.
                 */
                this.bindings[sBinding] = control;
                control.onclick = function(kbd) {
                    return function(event) {
                        if (DEBUG) kbd.println("keyPressSimulate(break)");
                        if (kbd.cmp) kbd.cmp.reset(true);
                    };
                }(this);
                return true;
            default:
                if (this.aButtonCodeMap[sBinding] !== undefined) {
                    this.bindings[sBinding] = control;
                    control.onclick = function(kbd, sButton, charCode) {
                        return function(event) {
                            if (DEBUG) kbd.println("keyPressSimulate(" + sButton + ")");
                            if (kbd.cpu) kbd.cpu.setFocus();
                            return !kbd.keyPressSimulate(charCode);
                        };
                    }(this, sBinding, this.aButtonCodeMap[sBinding]);
                    return true;
                }
                break;
            }
        }
        return false;
    }

    /**
     * @this {C1PKeyboard}
     * @param {Array} abMemory
     * @param {number} start
     * @param {number} end
     * @param {C1PCPU} cpu
     */
    setBuffer(abMemory, start, end, cpu)
    {
        this.abMem = abMemory;
        this.offKbd = start;
        this.cbKbd = end - start + 1;
        this.offKbdLimit = this.offKbd + this.cbKbd;
        if (cpu) {
            this.cpu = cpu;
            if (DEBUG) cpu.addReadNotify(start, end, this, this.getByte);
            cpu.addWriteNotify(start, end, this, this.setByte);
        }
        this.setReady();
    }

    /**
     * @this {C1PKeyboard}
     * @param {number} nModel
     */
    setModel(nModel)
    {
        this.nModel = nModel;
        /*
         * Default to Model 600 behavior, where the keyboard status lines are inverted
         * (ie, a zero bit indicates a key press).
         */
        this.bInvert = 0xff;
        if (this.nModel != 600) {
            /*
             * No inversion for model 542
             */
            this.bInvert = 0x00;
            this.println("updated keyboard model: " + this.nModel);
        }
    }

    /**
     * @this {C1PKeyboard}
     * @param {boolean} fOn
     * @param {C1PComputer} cmp
     *
     * We make a note of the Computer component, so that we can invoke its reset() method when our simulated
     * BREAK key is pressed, and we query the Debugger component so that we can use its info() and halt() functions,
     * which we use to buffer information without adversely affecting timing and then dump later using the Debugger's
     * "info" command.
     */
    setPower(fOn, cmp)
    {
        if (fOn && !this.flags.powered) {
            this.flags.powered = true;
            this.cmp = cmp;
            if (DEBUGGER) this.dbg = cmp.getComponentByType("debugger");
        }
    }

    /**
     * @this {C1PKeyboard}
     * @param {boolean} [fReady] is assumed to indicate "ready" unless EXPLICITLY set to false
     */
    setReady(fReady)
    {
        this.iOS = Web.isUserAgent("iOS");
        this.fMobile = (this.iOS || Web.isUserAgent("Android"));
        if (DEBUGGER && this.dbg && this.dbg.messageEnabled(this.dbg.MESSAGE_KBD)) {
            this.dbg.message("mobile keyboard support: " + (this.fMobile? "true" : "false") + " (" + window.navigator.userAgent + ")");
        }
        super.setReady();
    }

    /**
     * calcReleaseDelay(fRepeat)
     *
     * This attempts to scale our default "release" delay appropriately for the current CPU speed.
     *
     * Note that if the effective CPU speed exceeds 16Mhz, it becomes very difficult to rely on timer-driven key events
     * (even the shortest available timer delay still gives the CPU too much time, so it thinks that even the briefest key
     * press represents a held key, resulting in multiple keystrokes).  We deal with this by artificially limiting the top
     * speed in the CPU component (the current limit for "fast" mode is 8Mhz; see CPU.mhzFast)
     *
     * @this {C1PKeyboard}
     * @param {boolean} fRepeat is true if a timeout had already been active for the current key
     * @return {number}
     */
    calcReleaseDelay(fRepeat)
    {
        /*
         * NOTE: This delay affects only the "up" delay, not repeat delay, but it's useful to have an initial
         * "up" delay that's sufficiently large to ensure the native machine's auto-repeat behavior cooperates
         * with the virtual machine's auto-repeat behavior. msReleaseDelay is the initial delay, msReleaseRepeat
         * is the subsequent delay.
         *
         * Unfortunately, with a large initial delay, we need to enable the auto-clear code in the keyEvent()
         * handler, otherwise doing things like pressing ENTER repeatedly will result in sluggish behavior
         * (because you can generally press/release/repress keys faster than they will auto-repeat).
         */
        var msDelay = (fRepeat? this.msReleaseRepeat: this.msReleaseDelay);
        if (this.cpu && this.cpu.mhz) {
            msDelay /= this.cpu.mhz;
        }
        return msDelay;
    }

    /**
     * @this {C1PKeyboard}
     * @param {number} [notCharCode]
     */
    autoClear(notCharCode)
    {
        if (this.prevCharDown && (notCharCode === undefined || notCharCode != this.prevCharDown)) {
            if (DEBUGGER && this.dbg && this.dbg.messageEnabled(this.dbg.MESSAGE_KBD)) {
                this.dbg.message("autoClear(" + Str.toHexByte(this.prevCharDown) + ")");
            }

            clearTimeout(this.aKeyTimers[this.prevCharDown]);
            this.keyEventSimulate(this.prevCharDown, false, this.SIMCODE_AUTOCLEAR);
        }
    }

    /**
     * @this {C1PKeyboard}
     * @param {string} sKeyCodes
     * @param {number} [msDelay] is an optional injection delay (default is msInjectDelay)
     */
    injectKeys(sKeyCodes, msDelay)
    {
        this.sInjectBuffer = sKeyCodes;
        if (DEBUG) this.log("injectKeys(" + this.sInjectBuffer.split("\n").join("\\n") + ")");
        this.injectKeysFromBuffer(msDelay || this.msInjectDelay);
    }

    /**
     * @this {C1PKeyboard}
     * @param {number} msDelay is the delay between injected keys
     */
    injectKeysFromBuffer(msDelay)
    {
        if (this.sInjectBuffer.length > 0) {
            var ch = this.sInjectBuffer.charCodeAt(0);
            /*
             * I could require all callers to supply CRs instead of LFs, but this is friendlier.
             */
            if (ch == 0x0a)
                ch = 0x0d;
            /*
             * Also, if upper-case characters are being injected, convert them to lower-case, and rely
             * on the virtual SHIFT-LOCK remaining locked for the duration; otherwise, we'd have to simulate
             * SHIFT key presses around every character (or around the entire set of characters) as well.
             *
             * UPDATE: Even though keyPressSimulate() currently has some code to do this automatically now,
             * it's really intended as a work-around for a SHIFT-related problem on iOS devices only, so
             * we can't rely on that in the general case.
             */
            if (ch >= 0x41 && ch <= 0x5A)
                ch += 0x20;
            this.sInjectBuffer = this.sInjectBuffer.substr(1);
            this.keyPressSimulate(ch);
        }
        if (this.sInjectBuffer.length > 0) {
            setTimeout(function(kbd) { return function() {kbd.injectKeysFromBuffer(msDelay);}; }(this), msDelay);
        }
    }

    /**
     * @this {C1PKeyboard}
     * @param {Object} event
     * @param {boolean} fDown is true if called for a keyDown event, false if called for a keyUp event
     * @return {boolean} true to pass the event along, false to consume it
     */
    keyEvent(event, fDown)
    {
        var fPass;
        var fAutoClear = !fDown;
        var keyCode = event.keyCode;

        if (fDown) this.prevKeyDown = keyCode;

        if (keyCode == this.CHARCODE_LSHIFT - this.PSEUDO_CHARCODE) {
            this.bitsShift &= ~this.BIT_LSHIFT;
            if (fDown) this.bitsShift |= this.BIT_LSHIFT;
            keyCode += this.PSEUDO_CHARCODE;
            fAutoClear = false;
        }
        else
        if (keyCode == this.CHARCODE_RSHIFT - this.PSEUDO_CHARCODE) {
            this.bitsShift &= ~this.BIT_RSHIFT;
            if (fDown) this.bitsShift |= this.BIT_RSHIFT;
            keyCode += this.PSEUDO_CHARCODE;
            fAutoClear = false;
        }
        else
        if (keyCode == this.CHARCODE_CTRL - this.PSEUDO_CHARCODE) {
            this.bitsShift &= ~this.BIT_CTRL;
            if (fDown) this.bitsShift |= this.BIT_CTRL;
            keyCode += this.PSEUDO_CHARCODE;
            fAutoClear = false;
        }
        else
        if (keyCode == this.CHARCODE_SHIFTLOCK - this.PSEUDO_CHARCODE) {
            /*
             * FYI, this generates a "down" event ONLY when getting locked, and an "up" event ONLY
             * when getting unlocked--which is exactly what I want, even though that may seem a little
             * counter-intuitive (since the key itself actually went down AND up for each event).
             *
             * Moreover, since most people do NOT have CAPS-LOCK enabled, whereas the C1P needs it
             * enabled by default, we invert fDown, so that if the user enables CAPS-LOCK for some
             * reason, we treat is as *disabling* SHIFT-LOCK, and vice versa.
             */
            fDown = !fDown;
            this.bitsShift &= ~this.BIT_SHIFTLOCK;
            if (fDown) this.bitsShift |= this.BIT_SHIFTLOCK;
            keyCode += this.PSEUDO_CHARCODE;
            fAutoClear = false;
        }
        else
        if (keyCode == this.KEYCODE_COMMAND) {
            /*
             * Avoid interfering with useful Browser key commands, like COMMAND-Q, COMMAND-T, etc.
             */
            this.bitsShift &= ~this.BIT_COMMAND;
            if (fDown) this.bitsShift |= this.BIT_COMMAND;
            fAutoClear = false;
            fPass = true;
        }
        else
        if (keyCode == this.KEYCODE_TAB) {
            /*
             * If I don't consume TAB on the "down" event, then that's all I'll see, because the
             * browser will see it and give focus to the next control. But the "down" side is that
             * that no "press" event will be generated.  This puts it in the same category as ESC,
             * which also generates "down" and "up" events (LOTS of "down" events for that matter),
             * but no "press" event.  However, the C1P has no TAB key, so it's safe to completely ignore.
             */
            fPass = fAutoClear = false;
        }
        else
        if (keyCode == this.KEYCODE_ESC || keyCode == this.KEYCODE_DELETE) {
            /*
             * I don't get keyPress events for ESC (why?) and I never want the browser to act on DELETE
             * (which does double-duty as the "Back" button and leaves the current page), so I have to
             * simulate them now.
             *
             * Note that I call the "press" simulate method and NOT the "event" simulate method, because
             * the former takes care of simulating both individual "down" and "up" events.
             */
            if (DEBUG && DEBUGGER && keyCode == this.KEYCODE_ESC && this.dbg) this.dbg.halt();
            fPass = (fDown? !this.keyPressSimulate(keyCode) : false);
        }
        else {
            /*
             * Pass on everything else; I'll take care of this key at the keyPress stage, not the
             * the keyDown or keyUp stage.
             */
            fPass = true;
            /*
             * At this point, I have a difficult choice to make: leave fAutoClear true for any remaining
             * "up" events, so that keys will repeat immediately when released/pressed repeatedly (most
             * noticeable with the Enter key), or set fAutoClear to false to ensure that polling apps have
             * enough time to see every key press.
             *
             * I've decided that the former is more important than the latter, so if polling apps are still
             * missing keystrokes, then perhaps nCyclesThreshold needs to be supplemented in some way.
             *
             *      fAutoClear = false;
             */
        }

        if (fAutoClear) {
            /*
             * When you use a command like COMMAND-T, I see the COMMAND key going down, but not going up,
             * so I think the COMMAND key is still down and ignore all input; to easily get out of that state,
             * I clear our internal BIT_COMMAND whenever I see ANY key go up (well, ALMOST any key; cases
             * above that explicitly clear fAutoClear -- such as the COMMAND key itself -- are exceptions
             * to the rule).
             */
            this.bitsShift &= ~this.BIT_COMMAND;
            /*
             * I don't reliably get keyDown/keyUp events for all keys on all devices, but for those devices that
             * I DO, it seems like a good idea to cancel any pending key "up" simulation on receipt of the actual
             * keyUp event.
             *
             * However, the following code is problematic for Safari on iOS devices, which as noted above, doesn't
             * generate keyDown/keyUp events until after the press operation is complete, and then they are generated
             * in rapid succession, which doesn't give the C1P enough time to detect the key.  So I simply don't do
             * this on iOS devices.
             */
            if (!this.fMobile && keyCode == this.prevKeyDown) this.autoClear();
        }

        if (fPass === undefined) {
            fPass = !this.keyEventSimulate(keyCode, fDown, this.SIMCODE_KEYEVENT);
        }

        if (DEBUGGER && this.dbg && this.dbg.messageEnabled(this.dbg.MESSAGE_KBD)) {
            this.dbg.message(/*(fDown?"\n":"") +*/ "key" + (fDown?"Down":"Up") + "(" + Str.toHexByte(keyCode) + "): " + (fPass? "pass" : "consume"));
        }
        return fPass;
    }

    /**
     * @this {C1PKeyboard}
     * @param {Object} event
     * @return {boolean} true to pass the event along, false to consume it
     *
     * We've stopped relying on keyPress for keyboard emulation purposes, but it's still handy to hook and monitor
     * when debugging.
     */
    keyPress(event)
    {
        var fPass = true;
        /*
         * Browser-independent charCode extraction...
         */
        event = event || window.event;
        var charCode = event.which || event.keyCode;

        /*
         * Let's stop any injection currently in progress, too
         */
        this.sInjectBuffer = "";

        if (this.bitsShift & this.BIT_COMMAND)
            this.bitsShift &= ~this.BIT_COMMAND;
        else
            fPass = !this.keyPressSimulate(charCode);

        if (DEBUGGER && this.dbg && this.dbg.messageEnabled(this.dbg.MESSAGE_KBD)) {
            this.dbg.message("keyPress(" + Str.toHexByte(charCode) + "): " + (fPass? "pass" : "consume"));
        }
        return fPass;
    }

    /**
     * @this {C1PKeyboard}
     * @param {number} charCode
     * @return {boolean} true if successfully simulated, false if unrecognized/unsupported key
     */
    keyPressSimulate(charCode)
    {
        var fSimulated = false;
        if (charCode == this.CHARCODE_BREAK) {
            /*
             * The BREAK key is not wired up to the keyboard like the other keys are, but we simulate
             * it here, so that it can be injected like any other key.
             */
            if (this.cmp) {
                this.cmp.reset(true);
                fSimulated = true;
            }
        }
        else {
            /*
             * WARNING: The next line is why you cannot use SHIFT-N, SHIFT-O, SHIFT-P, etc. But without it,
             * iOS devices with the annoying "autocapitalization" feature enabled make the keyboard unusable
             * by default.  The trade-off is: either require all iOS users to first tap the shift key to turn
             * "autocapitalization" off, or lose the ability to type any of the special shifted alphabetic keys.
             * I choose the latter, because I have friendlier aliases already defined for those keys (eg,
             * ^, DELETE, and @).
             *
             * Furthermore, by doing this for iOS (and Android) devices ONLY, other platforms retain the ability
             * to use those special key combos.
             */
            if (this.fMobile) {
                if (charCode >= 0x41 && charCode <= 0x5A)
                    charCode += 0x20;
            }

            /*
             * Auto-clear any previous down key EXCEPT for charCode (because it may be held and repeating).
             */
            this.autoClear(charCode);

            if (this.keyEventSimulate(charCode, true, this.SIMCODE_KEYPRESS)) {
                /*
                 * If CPU speed is unlimited, then we switch to an alternate approach, which is to immediately
                 * queue a "release" event as well.  The problem with the original timer-based approach at high
                 * speeds is that the the CPU may get lucky and execute a LOT of instructions between delivery
                 * of the keyPress event and the "keyTimeout" event. In that case, even enabling keyboard polling
                 * detection in updateMemory() won't entirely help -- although we do that, too -- because JavaScript
                 * events are delivered synchronously, so it may simply take too long for the "keyTimeout" event
                 * to arrive.
                 *
                 * Why don't we ALWAYS do this? Because in the normal case (SPEED_SLOW, and even SPEED_FAST) we want
                 * to faithfully simulate how long a key is held, so that features like auto-repeat work properly.
                 * You'll notice in the SPEED_MAX case, holding a key no longer has any effect; even though multiple
                 * keyPress events WILL arrive, if we simulate a release immediately after each one, then repeat
                 * is defeated.  Also, the keyboard polling detection code in updateMemory() doesn't work well for
                 * all apps.
                 */
                if (this.cpu.speed == this.cpu.SPEED_MAX) {
                    this.keyEventSimulate(charCode, false, this.SIMCODE_KEYRELEASE);
                }
                else {
                    var fRepeat = false;
                    if (this.aKeyTimers[charCode]) {
                        clearTimeout(this.aKeyTimers[charCode]);
                        fRepeat = true;
                    }
                    var msDelay = this.calcReleaseDelay(fRepeat);
                    this.aKeyTimers[this.prevCharDown = charCode] = setTimeout(function(kbd) { return function() {kbd.keyEventSimulate(charCode, false, kbd.SIMCODE_KEYTIMEOUT);}; }(this), msDelay);
                    if (DEBUGGER && this.dbg && this.dbg.messageEnabled(this.dbg.MESSAGE_KBD)) {
                        this.dbg.message("keyPressSimulate(" + Str.toHexByte(charCode) + "): setTimeout()");
                    }
                }
                fSimulated = true;
            }
        }
        if (DEBUGGER && this.dbg && this.dbg.messageEnabled(this.dbg.MESSAGE_KBD)) {
            this.dbg.message("keyPressSimulate(" + Str.toHexByte(charCode) + "): " + (fSimulated? "true" : "false"));
        }
        return fSimulated;
    }

    /**
     * @this {C1PKeyboard}
     * @param {number} charCode
     * @param {boolean} fDown
     * @param {number} simCode indicates the origin of the event
     * @return {boolean} true if successfully simulated, false if unrecognized/unsupported key
     */
    keyEventSimulate(charCode, fDown, simCode)
    {
        var fSimulated = false;
        if (!fDown) {
            this.aKeyTimers[charCode] = null;
            if (this.prevCharDown == charCode) this.prevCharDown = 0;
        }
        var bShift = 0;
        var bCode = this.aCharCodeMap[charCode];
        if (bCode === undefined) {
            /*
             * Perhaps we're dealing with a CTRL variation of an alphabetic key; this won't
             * affect non-CTRL-key combos like CR or LF, because they're defined in aCharCodeMap,
             * and this bit of code relieves us from having to explicitly define every CTRL-letter
             * possibility in aCharCodeMap. However, CTRL-anything-else is a different matter.
             */
            if (charCode >= 0x01 && charCode <= 0x1A) {
                charCode += 0x40;
                bShift = this.CHARCODE_CTRL;
            }
            bCode = this.aCharCodeMap[charCode];
        }
        if (bCode !== undefined) {
            var iRow = bCode >> 12;
            var iCol = (bCode >> 8) & 0xf;
            if (!bShift) bShift = bCode & 0xff;
            if (fDown) {
                this.abKbdCols[iRow] |= 1 << iCol;
                if (bShift == this.CHARCODE_CTRL)
                    this.abKbdCols[0] |= this.BIT_CTRL;
                else
                if (bShift == this.CHARCODE_LSHIFT)
                    this.abKbdCols[0] |= this.BIT_LSHIFT;
                else
                if (bShift == this.CHARCODE_RSHIFT)
                    this.abKbdCols[0] |= this.BIT_RSHIFT;
                else
                    this.abKbdCols[0] &= ~this.BITS_SIMULATE;
            }
            else {
                this.abKbdCols[iRow] &= ~(1 << iCol);
                this.abKbdCols[0] &= ~this.BITS_SIMULATE;
                this.abKbdCols[0] |= (this.bitsShift & this.BITS_SIMULATE);
            }
            var fPropagate = (simCode == this.SIMCODE_KEYPRESS && !this.aKbdStates.length);
            this.aKbdStates.push(this.abKbdCols.slice());
            this.updateMemory(fPropagate);
            fSimulated = true;
        }
        if (DEBUG && this.dbg) this.dbg.info("keyEventSimulate(" + Str.toHexByte(charCode) + "," + (fDown?"down":"up") + "," + this.aSimCodeDescs[simCode] + "): " + (fSimulated? "true" : "false"));
        return fSimulated;
    }

    /**
     * @this {C1PKeyboard}
     * @param {number} addr
     * @param {number|undefined} addrFrom (not defined whenever the Debugger tries to read the specified addr)
     *
     * NOTE: As long as we rely on the CPU processing a certain number of cycles (nCyclesThreshold) before
     * propagating the next kbd state, and not how many reads and/or writes the CPU has performed, we could
     * eliminate the overhead of this read-notification handler.
     *
     * It's useful for diagnostic purposes, which is why it's still here.
     */
    getByte(addr, addrFrom)
    {
        /*
         * Don't trigger any further hardware emulation (beyond what we've already stored in memory) if
         * the Debugger performed this read (need a special Debugger I/O command if/when you really want to do that).
         */
        if (DEBUG) {
            if (addrFrom !== undefined) {
                this.nReadsSinceLastEvent++;
                if (DEBUG && this.dbg) this.dbg.info("reading kbd " + Str.toHexWord(addr) + " @" + this.cpu.getCycles() + " cycles");
            }
        }
    }

    /**
     * @this {C1PKeyboard}
     * @param {number} addr
     * @param {number|undefined} addrFrom (not defined whenever the Debugger tries to write the specified addr)
     *
     * NOTE: Ordinarily, I wouldn't allow Debugger writes (addrFrom === undefined) to interfere with the simulated
     * hardware state, but for now, I find it useful to be able to prod the simulation code directly from the Debugger.
     */
    setByte(addr, addrFrom)
    {
        var b = this.cpu.getByte(addr);
        this.bKbdRows = b ^ this.bInvert;
        this.nWritesSinceLastEvent++;
        this.updateMemory(false, addr, b);
    }

    /**
     * @this {C1PKeyboard}
     * @param {boolean} fPropagate is true to propagate immediately, false to use normal propagation
     * @param {number} [addr] is the memory address to update; default is the entire memory range
     * @param {number} [bWrite] is the value of any immediately preceding write, or undefined if none
     *
     * Update emulated keyboard memory.  By updating the keyboard memory whenever it's written to,
     * as well as whenever a key is pressed or released, I avoid the hit of a read-notification handler.
     * Besides, read-notification handlers are called only AFTER the read has been performed, so it
     * would be too late to update the memory at that point.
     *
     * WARNING: There is a slight risk of an application reading from a different keyboard memory address
     * than it just wrote to.  That would be legal, but very odd, and we save valuable time by not updating
     * every other byte in the entire memory range every time a different keyboard "row" is selected.
     */
    updateMemory(fPropagate, addr, bWrite)
    {
        /*
         * First, we determine if it's time for event propagation...
         */
        var nCycles = this.cpu.getCycles();

        /*
         * Monitoring the C1P's keyboard polling activity is problematic, because not all apps monitor
         * the keyboard in the same way.  It's better to simply wait for a certain amount of CPU activity to
         * occur (nCyclesThreshold); it's more reliable and it scales well, because it's not affected by
         * how many cycles we're executing in real time.  The trick is finding a value for nCyclesThreshold
         * that works well across the board.
         */
        if (!fPropagate) {
            if (this.cpu.speed == this.cpu.SPEED_MAX)
                fPropagate = (addr !== undefined && this.nWritesSinceLastEvent >= 32);
            else {
                /*
                 * We have to handle the delta being less than zero, in case the user changed the speed, thereby
                 * resetting the cycle count returned by getCycles().
                 */
                var nCycleDelta = nCycles - this.nCyclesSinceLastEvent;
                fPropagate = (nCycleDelta < 0 || nCycleDelta >= this.nCyclesThreshold);
            }
        }

        /*
         * Next, we propagate any buffered state (in abKbdStates) as appropriate
         */
        if (fPropagate) {
            var abKbdCols = this.aKbdStates.shift();
            if (abKbdCols !== undefined) {
                if (DEBUG && this.dbg) this.dbg.info("kbd update @" + nCycles + " cycles, " + this.nWritesSinceLastEvent + " writes");
                this.abKbdColsLast = abKbdCols;
            }
            this.nReadsSinceLastEvent = this.nWritesSinceLastEvent = 0;
            this.nCyclesSinceLastEvent = nCycles;
        }
        /*
         * Then we calculate the value (which may or may not have just been propagated),
         * based on the currently selected keyboard row(s) (bKbdRows).
         */
        var b = 0;
        for (var iRow=0; iRow < 8; iRow++) {
            if (!(this.bKbdRows & (1 << iRow)))
                continue;
            b |= this.abKbdColsLast[iRow];
        }
        /*
         * Now invert all the bits, since I SET the column bit of an "active" key,
         * whereas the C1P Model 600 keyboard expects "active" column bits to be CLEAR.
         */
        b ^= this.bInvert;

        if (addr !== undefined) {
            this.abMem[addr] = b;
        }
        else {
            addr = this.offKbd;
            if (b != this.bWriteLast) {
                for (var offset=addr; offset < this.offKbdLimit; offset++)
                    this.abMem[offset] = b;
            }
        }
        this.bWriteLast = b;
        if (DEBUG && this.dbg) this.dbg.info("updating kbd " + Str.toHexWord(addr) + " with " + Str.toHexByte(b) + (bWrite !== undefined? (" following write " + Str.toHexByte(bWrite)) : "") + " @" + nCycles + " cycles");
    }

    /**
     * isShift()
     *
     * @this {C1PKeyboard}
     * @param {number} charCode
     * @return {boolean}
     *
     isShift(charCode)
     {
         return charCode == this.CHARCODE_LSHIFT || charCode == this.CHARCODE_RSHIFT || charCode == this.CHARCODE_CTRL || charCode == this.CHARCODE_SHIFTLOCK;
     }
     */

    /**
     * C1PKeyboard.init()
     *
     * This function operates on every HTML element of class "keyboard", extracting the
     * JSON-encoded parameters for the C1PKeyboard constructor from the element's "data-value"
     * attribute, invoking the constructor to create a C1PKeyboard component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        var aeKbd = Component.getElementsByClass(document, C1PJS.APPCLASS, "keyboard");
        for (var iKbd=0; iKbd < aeKbd.length; iKbd++) {
            var eKbd = aeKbd[iKbd];
            var parmsKbd = Component.getComponentParms(eKbd);
            var kbd = new C1PKeyboard(parmsKbd);
            Component.bindComponentControls(kbd, eKbd, C1PJS.APPCLASS);
        }
    }
}

/*
 * Initialize every Keyboard module on the page.
 */
Web.onInit(C1PKeyboard.init);

/**
 * @copyright https://www.pcjs.org/machines/osi/c1p/lib/video.js (C) 2012-2025 Jeff Parsons
 */


/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @unrestricted
 */
class C1PVideo extends Component {
    /**
     * C1PVideo(parmsVideo, canvas, context, imgChars)
     *
     * The Video component can be configured with the following (parmsVideo) properties:
     *
     *      model: model number (one of: 540 or 600; 600 is the default)
     *      screenWidth: width of the screen window, in pixels
     *      screenHeight: height of the screen window, in pixels
     *      charCols: number of character columns
     *      charRows: number of character rows
     *      charWidth: width of charSet characters, in pixels (default is 0)
     *      charHeight: height of charSet characters, in pixels (default is 0)
     *      charSet: path to image (eg, PNG) file that defines the character set
     *      screenColor: background color of the screen window (default is black)
     *
     * The Video object assumes that the video buffer is organized such that offset 0 is mapped
     * to the left-most column and top-most row (col=0,row=0), offset 1 is (1,0), offset 2
     * is (2,0), and so on.
     *
     * The Video object initially contains no underlying video buffer; memory for the buffer
     * must be given to it by the Computer object.  We allocate a separate buffer, called
     * the screen buffer, into which we periodically copy the contents of the video buffer
     * via updateScreen(); any differences between the two buffers are then rendered in the
     * associated window, via updateWindow().
     *
     * When updateScreen() finds a byte in the screen buffer must be redisplayed, it converts
     * the offset of that byte into a (col,row) character position for the updateWindow() function,
     * which then converts (col,row) into (x,y) pixel offsets within the underlying canvas.
     *
     * Regarding the C1P (aka Model 600): The C1P has a 1K video buffer located at 0xD000-0xD3FF.
     * The ROM draws the initial "D/C/W/M ?" prompt at the "bottom" of the video buffer at location
     * 0xD365. That row really begins at 0xD360, but the C1P "indents" everything by 5 columns due
     * to the lack of a "guard band feature."  Similarly, BASIC defaults to a width of 24 columns
     * avoid display problems near the right edge.  BASIC will let you choose a width SMALLER than
     * 24 but not larger. So, while the video buffer supports a theoretical maximum of 32 rows x 32
     * columns, the practical maximum is 25 rows x 24 columns; the last 4 rows of the video buffer
     * are never used, and while content DOES scroll through the top 3 lines of the buffer, it should
     * never be assumed that you can see the top 3 lines.
     *
     * This is partially confirmed by the "C1P Character Graphics Reference Manual", p3, which says
     * that the "the visible character field consists of 25 lines of 25 columns" and that the "first
     * visible character in the upper left of the screen is accessed via address 53379," or 0xD083.
     * However, they were wrong about both the number of columns and the first visible character.
     *
     * They probably meant 0xD085, because as mentioned earlier, the C1P indents every row by 5
     * characters, not 3.  But that's not correct either, because the difference between 0xD365
     * (where the bottom line starts) and 0xD085 is 0x2E0, or 736.  736 divided by 32 equals 23;
     * add the bottom row, and that would give you 24 visible rows, not 25.  Since we now have
     * screenshots of a C1P monitor displaying 25 rows (courtesy of Stephan Mühlstrasser), C1Pjs
     * now assumes that only the first 3 lines are not visible, and that the address of the first
     * visible character is actually 0xD065 (53349), yielding 25 visible rows.
     *
     * All of this explains why we now use setDimensions(iRowTop=3, nRowsVisible=25) instead of
     * setDimensions(iRowTop=4, nRowsVisible=24) for the Model 600.
     *
     * Model 540 Video Board vs. Model 600 "Superboard II"
     * ---------------------------------------------------
     * This emulation was originally written for the Model 600 "Superboard II" (eg, Challenger 1P).
     * Support for the Model 540 video board (as used in the Challenger II-4P and II-8P) was added
     * later.
     *
     * NOTE: When Model 540 video emulation is enabled, Model 542 keyboard emulation must also be
     * enabled, because the former always came with the latter keyboard interface; this is why when
     * we call this.setModel(540), we must also notify the Keyboard via kbd.setModel(542).
     *
     * Key features/differences of the Model 540 video board include:
     *
     *      2K (8 pages) of video memory located at 0xD000-0xD7FF
     *      Two display modes: 32 rows x 64 cols (default on power up), and 32 rows x 32 cols
     *      64 bytes per screen row, regardless which display mode is selected
     *      The following options can be selected via WRITE to port address 0xDE00:
     *          Bit 0: clear to enable 32/64 mode (default on power up), set to enable 32/32
     *          Bit 1: 1=tone on (542 keyboard)
     *          Bit 2: 1=color on (Rev. B only?)
     *          bit 3: 1=enable 38-40Khz AC Home control output (Rev. B only?)
     *      Video timing counter status via READ from port address 0xDE00:
     *          Bit 7: 0 for 1/120 second, then 1 for 1/120 second, based on video clock (60Hz)
     *
     * @this {C1PVideo}
     * @param {Object} parmsVideo
     * @param {HTMLCanvasElement} canvas
     * @param {CanvasRenderingContext2D} context
     * @param {HTMLImageElement} imgChars
     */
    constructor(parmsVideo, canvas, context, imgChars)
    {
        super("C1PVideo", parmsVideo);

        this.nDefaultModel = parmsVideo['model'];
        this.nDefaultCols = parmsVideo['charCols'];
        this.nDefaultRows = parmsVideo['charRows'];

        this.cxScreen = parmsVideo['screenWidth'];
        this.cyScreen = parmsVideo['screenHeight'];

        /*
         * These (source) character dimensions are tentative, and may not even be provided,
         * but they will become definitive once imgChars has finished loading and setReady() is called.
         */
        this.cxChar = parmsVideo['charWidth'];
        this.cyChar = parmsVideo['charHeight'];

        /*
         * This is a preliminary call to setDimensions(), to initialize default screen buffer and
         * window dimensions.  A more extensive call to setDimensions() will take place when setModel()
         * is called later, from reset() and possibly via the tripGuard() handler.
         *
         * This preliminary call merely establishes a default screen buffer size, so that when
         * setBuffer() is called, it's able to verify the assigned address space is at least as big
         * as the screen buffer.
         */
        this.setDimensions();

        this.canvasScreen = canvas;
        this.contextScreen = context;
        this.imgChars = imgChars;

        /*
         * Support for disabling (or, less commonly, enabling) image smoothing, which all browsers
         * seem to support now (well, OK, I still have to test the latest MS Edge browser), despite
         * it still being labelled "experimental technology".  Let's hope the browsers standardize
         * on this.  I see other options emerging, like the CSS property "image-rendering: pixelated"
         * that's apparently been added to Chrome.  Sigh.
         */
        var i, sEvent, asWebPrefixes = ['', 'moz', 'ms', 'webkit'];
        var fSmoothing = parmsVideo['smoothing'];
        var sSmoothing = Web.getURLParm('smoothing');
        if (sSmoothing) fSmoothing = (sSmoothing == "true");
        if (fSmoothing != null) {
            for (i = 0; i < asWebPrefixes.length; i++) {
                sEvent = asWebPrefixes[i];
                if (!sEvent) {
                    sEvent = 'imageSmoothingEnabled';
                } else {
                    sEvent += 'ImageSmoothingEnabled';
                }
                if (this.contextScreen[sEvent] !== undefined) {
                    this.contextScreen[sEvent] = fSmoothing;
                    break;
                }
            }
        }

        /*
         * QUESTION: Does this video port exist only on the Model 540?
         */
        this.addrVideoPort = 0xDE00;        // WARNING: Hard-coded port address -JP
    }

    /**
     * @this {C1PVideo}
     * @param {boolean} [fPowerOn] is true for the initial reset, so that we have
     * the option of rendering "random" graphic characters, just like the real machine would do.
     */
    reset(fPowerOn)
    {
        this.setModel(this.nDefaultModel);

        if (this.abMem) {
            /*
             * Let's treat every reset like a power-cycle, just for fun.
             * If you don't think that's fun, then simply remove the next line.
             *
                fPowerOn = true;
             */
            for (var offset = this.offVideo; offset < this.offVideoLimit; offset++) {
                var b = (fPowerOn? Math.floor(Math.random() * 256) : 0x20);

                this.abMem[offset] = b;
            }
        }
    }

    /**
     * @this {C1PVideo}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "refresh")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @return {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        switch(sBinding) {
        case "refresh":
            this.bindings[sBinding] = control;
            control.onclick = function(video) {
                return function() {
                    if (DEBUG) video.println("refreshScreen()");
                    video.initScreen();
                    video.updateScreen();
                };
            }(this);
            return true;
        default:
            break;
        }
        return false;
    }

    /**
     * @this {C1PVideo}
     * @param {Array} abMemory
     * @param {number} start
     * @param {number} end
     * @param {C1PCPU} cpu
     */
    setBuffer(abMemory, start, end, cpu)
    {
        this.abMem = abMemory;
        this.offVideo = start;
        this.cbVideo = end - start + 1;
        this.offVideoLimit = this.offVideo + this.cbVideo;

        if (cpu) {
            this.cpu = cpu;
            if (this.addrVideoPort !== undefined) {
                cpu.addReadNotify(this.addrVideoPort, this.addrVideoPort, this, this.getByte);
                cpu.addWriteNotify(this.addrVideoPort, this.addrVideoPort, this, this.setByte);
            }
        }
        this.reset(true);
    }

    /**
     * @this {C1PVideo}
     * @param {number|undefined} [nCols] (default is nDefaultCols)
     * @param {number|undefined} [nRows] (default is nDefaultRows)
     * @param {number|undefined} [iRowTop] (eg, 4; default is 0)
     * @param {number|undefined} [nRowsVisible] (eg, 24; default is nRows)
     */
    setDimensions(nCols, nRows, iRowTop, nRowsVisible)
    {
        this.nCols = (nCols !== undefined? nCols : this.nDefaultCols);
        this.nRows = (nRows !== undefined? nRows : this.nDefaultRows);
        this.cbScreen = this.nCols * this.nRows;
        this.offVideoLimit = this.offVideo + this.cbScreen;
        /*
         * Set the first visible row and total visible rows next
         */
        this.iRowTop = (iRowTop !== undefined? iRowTop : 0);
        this.nRowsVisible = (nRowsVisible !== undefined? nRowsVisible : nRows);
        this.setDrawingDimensions();
    }

    /**
     * @this {C1PVideo}
     *
     * cxScreen and cyScreen give us the overall dimensions of the destination surface.  Dividing that by the number of
     * columns and rows yields a target cell size (cxCharDst,cyCharDst), which may or may not map 1-1 to the source cell size
     * (cxChar,cyChar).
     */
    setDrawingDimensions()
    {
        this.cxCharDst = Math.floor(this.cxScreen / this.nCols);
        this.cyCharDst = Math.floor(this.cyScreen / this.nRowsVisible);
    }

    /**
     * @this {C1PVideo}
     */
    setFocus()
    {
        this.canvasScreen.focus();
    }

    /**
     * @this {C1PVideo}
     * @param {number} nModel
     */
    setModel(nModel)
    {
        this.nModel = nModel;
        /*
         * Default to model 600 behavior (1K video buffer);
         * the only other supported model is 540 (2K video buffer).
         */
        if (this.nModel == 600) {
            this.setDimensions(this.nDefaultCols, this.nDefaultRows, 3, 25);
            if (this.cbScreen == 1024 && this.cpu) {
                /*
                 * NOTE: We deliberately set the guard address to the LAST byte of the 2K
                 * buffer range, not the FIRST byte, which has the same effect but with the
                 * added benefit of deferring any screen update until after the "Model 540"
                 * screen initialization code has completely blanked the entire 2K buffer,
                 * avoiding a brief flicker of unsightly characters.
                 */
                this.addrGuard = this.offVideoLimit + this.cbScreen - 1;
                this.cpu.addWriteNotify(this.addrGuard, this.addrGuard, this, this.tripGuard);
            }
        }
        else {
            this.println("updated video model: " + this.nModel);
            this.setDimensions(64, 32);
        }
        this.initScreen();
        this.updateScreen();
    }

    /**
     * @this {C1PVideo}
     * @param {boolean} fOn
     * @param {C1PComputer} cmp
     */
    setPower(fOn, cmp)
    {
        /*
         * NOTE: No one should be calling power(true) before first checking isReady(), but we check
         * it ourselves, too.  This also means that updateScreen() need check only fPower and not isReady(),
         * since we guarantee that the former implies the latter.
         */
        if (fOn && !this.flags.powered && this.isReady()) {
            this.flags.powered = true;
            if (DEBUGGER) this.dbg = cmp.getComponentByType("debugger");
            /*
             * If we have an associated keyboard, then ensure that the keyboard will be notified whenever
             * the canvas gets focus and receives input.
             *
             * Also, when simulating a Model 540 video board, we need to access to the Keyboard component due
             * to some shared I/O responsibilities; ie, bit 1 of the video control port at 0xDE00 enables whatever
             * tone has been selected via the keyboard frequency port at 0xDF01 (frequency == 49152/n, where n
             * is the value stored at 0xDF01).
             */
            this.kbd = cmp.getComponentByType("keyboard");
            if (this.kbd) {
                this.kbd.setBinding("canvas", "keyDown", this.canvasScreen);
                this.kbd.setBinding("canvas", "keyPress", this.canvasScreen);
                this.kbd.setBinding("canvas", "keyUp", this.canvasScreen);
            }
        }
        else
        if (!fOn && this.flags.powered) {
            this.flags.powered = false;
            /*
             * This is where we would add some method of blanking the display, without the disturbing the video
             * buffer contents, and blocking all further updates to the display.
             */
        }
    }

    /**
     * cxChar and cyChar are the source cell size.  Originally, those values came strictly from the parmsVideo
     * 'charWidth' and 'charHeight' properties.  Now, if those aren't defined (which is normally the case now),
     * then we infer the source cell size from the dimensions of imgChars, which is expected to be a 16x16 array of
     * character bitmaps.  We could be even more flexible, by allowing imgChars to be any rectangular dimension
     * (eg, 1x256) as long as we can assume it contains exactly 256 characters, but there's no need to get carried away.
     *
     * @this {C1PVideo}
     * @param {boolean} [fReady] is assumed to indicate "ready" unless EXPLICITLY set to false
     */
    setReady(fReady)
    {
        if (!this.cxChar) this.cxChar = Math.floor(this.imgChars.width / 16);
        if (!this.cyChar) this.cyChar = Math.floor(this.imgChars.height / 16);
        super.setReady();
    }

    /**
     * @this {C1PVideo}
     * @param {number} addr (ie, addrVideoPort)
     * @param {number|undefined} addrFrom (not defined whenever the Debugger tries to read the specified addr)
     *
     * NOTE: Ordinarily, I wouldn't allow Debugger writes (addrFrom === undefined) to interfere with the simulated
     * hardware state, but for now, I find it useful to be able to prod the simulation code directly from the Debugger.
     */
    getByte(addr, addrFrom)
    {
        var b = this.cpu.getByte(addr);
        if (addrFrom !== undefined) {
            if (DEBUGGER && this.dbg) this.dbg.messageIO(this, addr, addrFrom, this.dbg.MESSAGE_VIDEO);
        }
        /*
         * The only documented READ bit in addrVideoPort is bit 7, which is supposed to alternate between
         * 0 and 1 every 1/120 of a second.  There's no way we're going to add special code to the emulator to update
         * this stupid byte every 8,333 cycles (assuming 1Mhz operation), so clearly we're going to fake it.
         *
         * Faking it means that any polling code will unavoidably get a stale value the FIRST time it reads bit 7.
         * However, we can still do a pretty good job of faking any EXTENSIVE polling: get the number of cycles
         * executed so far, divide that by 8333, floor the quotient, and then set/clear bit 7 according to whether the
         * result is odd/even.
         */
        var nCyclesHigh = Math.floor(this.cpu.getCycles() / 8333);
        this.cpu.setByte(addr, (b & 0x7F) | ((nCyclesHigh & 0x1)? 0x80 : 0));
    }

    /**
     * @this {C1PVideo}
     * @param {number} addr (ie, addrVideoPort)
     * @param {number|undefined} addrFrom (not defined whenever the Debugger tries to write the specified addr)
     */
    setByte(addr, addrFrom)
    {
        if (addrFrom !== undefined) {
            if (DEBUGGER && this.dbg) this.dbg.messageIO(this, addr, addrFrom, this.dbg.MESSAGE_VIDEO);
        }
    }

    /**
     * @this {C1PVideo}
     * @param {number} addr (ie, addrGuard)
     * @param {number|undefined} addrFrom (not defined whenever the Debugger tries to read the specified addr)
     */
    tripGuard(addr, addrFrom)
    {
        /*
         * Don't trigger any further hardware emulation (beyond what we've already stored in memory) if
         * the Debugger performed this read (need a special Debugger I/O command if/when you really want to do that).
         */
        if (addrFrom !== undefined) {
            if (DEBUGGER && this.dbg) this.dbg.messageIO(this, addr, addrFrom, this.dbg.MESSAGE_VIDEO, true);
            /*
             * The CPU has just written to the guard address we established just beyond the video buffer's 1K boundary,
             * implying that the system thinks we have a 2K buffer instead.  So we bump our model to 540, bump the
             * associated keyboard model to 542, and remove this guard handler.
             */
            this.setModel(540);
            if (this.kbd) this.kbd.setModel(542);
            this.cpu.removeWriteNotify(this.addrGuard, this.addrGuard, this, this.tripGuard);
        }
    }

    /**
     * @this {C1PVideo}
     */
    initScreen()
    {
        this.abScreen = new Array(this.cbScreen);
        for (var offset=0; offset <= this.cbScreen; offset++) {
            this.abScreen[offset] = -1; // initialize every cell of the screen to an invalid value
        }
    }

    /**
     * updateScreen() updates the screen buffer from the video buffer and updates the window with any changes.
     *
     * @this {C1PVideo}
     * @return {boolean}
     *
     * For every byte in the video buffer, this renders it if it differs from the byte stored in the screen buffer,
     * and then updates the screen buffer to match.  Since initScreen() sets every byte in the screen buffer
     * to an illegal byte value (ie, a value which is outside the byte range 0x00-0xff), that assures the first call
     * to updateScreen() will redraw every byte in the video buffer.
     */
    updateScreen()
    {
        var offset = 0;
        if (this.flags.powered) {
            while (offset < this.cbScreen) {
                var b = this.abMem[this.offVideo + offset];
                if (this.abScreen[offset] != b) {
                    if (!this.writeByte(offset, b)) {
                        break;
                    }
                    this.abScreen[offset] = b;
                }
                offset++;
            }
        }
        return (offset == this.cbScreen);
    }

    /**
     * @this {C1PVideo}
     * @param {number} offset
     * @param {number} b
     * @return {boolean}
     */
    writeByte(offset, b)
    {
        var col = offset % this.nCols;
        var row = Math.floor(offset / this.nCols);
        return this.updateWindow(col, row, b);
    }

    /**
     * updateWindow(col, row, b)
     *
     * Updates a particular position (row,col) in the associated window with the given byte (b)
     *
     * @this {C1PVideo}
     * @param {number} col
     * @param {number} row
     * @param {number} b
     * @return {boolean} true if successful, false if not
     *
     * I originally used (screenWidth,screenHeight) == (512,448) and (cols,rows) == (32,32) and (cxChar,cyChar) == (16,16),
     * and I simply copied the source cells 1-to-1 to the destination (16,16), knowing that we would never try to display
     * more than 28 rows (the last 4 rows of the 32 possible rows were never used to display any content).  However, I should
     * still have ignored any attempt to draw past row 28 (aka screenHeight 448).  I now perform row clipping and biasing,
     * according to the first visible row (iRowTop) and total visible rows (nRowsVisible).
     *
     * Moreover, I no longer copy the source cell images to the destination 1-to-1.  I calculate (cxCharDst,cyCharDst)
     * separately (see setDrawingDimensions).  And I no longer assume that (cxChar,cyChar) are (16,16); once the source
     * image file has finished loading, I calculate (cxChar,cyChar) based on the size of image file (see setReady).  I made
     * this change when I created chargen1x.png.  In fact, at first I thought I might be able to eliminate chargen2x.png
     * and just let drawImage() scale up the individual character images from (8,8) to (16,16) or whatever (cxCharDst,cyCharDst)
     * size was needed, but the results were fuzzy, so it's still best to use chargen2x.png when using larger window sizes.
     */
    updateWindow(col, row, b)
    {
        if (row >= this.iRowTop) {
            row -= this.iRowTop;
            if (row < this.nRowsVisible) {
                var xChar = (b * this.cxChar);
                var ySrc = Math.floor(xChar / this.imgChars.width) * this.cyChar;
                var xSrc = xChar % this.imgChars.width;
                var xDst = col * this.cxCharDst;
                var yDst = row * this.cyCharDst;
                // if (DEBUG) this.log("updateWindow(" + col + "," + row + "," + b +"): drawing from " + xSrc + "," + ySrc + " to " + xDst + "," + yDst);
                this.contextScreen.drawImage(this.imgChars, xSrc, ySrc, this.cxChar, this.cyChar, xDst, yDst, this.cxCharDst, this.cyCharDst);
            }
        }
        return true;
    }

    /**
     * C1PVideo.init()
     *
     * This function operates on every HTML element of class "video", extracting the
     * JSON-encoded parameters for the C1PVideo constructor from the element's "data-value"
     * attribute, invoking the constructor to create a C1PVideo component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        var aeVideo = Component.getElementsByClass(document, C1PJS.APPCLASS, "video");
        for (var iVideo=0; iVideo < aeVideo.length; iVideo++) {
            var eVideo = aeVideo[iVideo];
            var parmsVideo = Component.getComponentParms(eVideo);

            /*
             * As noted in keyboard.js, the keyboard on an iOS device pops up with the SHIFT key depressed,
             * which is not the initial keyboard state that the C1P expects. I originally tried to fix that by
             * adding an 'autocapitalize="off"' attribute alongside the 'contenteditable="true"' attribute
             * on the <canvas> element, but apparently Safari honors that only inside certain elements (eg, <input>).
             *
             * I've since settled on a better work-around in keyboard.js, so I've stopped worrying about how to make
             * "autocapitalize" work here.
             */
            var eCanvas;
            var aCanvas = Component.getElementsByClass(eVideo, "pcjs-canvas");
            if (aCanvas && aCanvas.length) {
                eCanvas = /** @type {HTMLCanvasElement} */ (aCanvas[0]);
            } else {
                eCanvas = /** @type {HTMLCanvasElement} */ (document.createElement("canvas"));
                if (eCanvas) {
                    eCanvas.setAttribute("class", "pcjs-canvas");
                    eCanvas.setAttribute("width", parmsVideo['screenWidth']);
                    eCanvas.setAttribute("height", parmsVideo['screenHeight']);
                    eCanvas.style.backgroundColor = parmsVideo['screenColor'];
                    /*
                     * HACK: A canvas style of "auto" provides for excellent responsive canvas scaling in EVERY browser
                     * except IE9/IE10, so I recalculate the appropriate CSS height every time the parent DIV is resized;
                     * IE11 works without this hack, so we take advantage of the fact that IE11 doesn't report itself as "MSIE".
                     */
                    eCanvas.style.height = "auto";
                    eVideo.appendChild(eCanvas);
                }
            }
            if (!eCanvas || !eCanvas.getContext) {
                eVideo.innerHTML = "<br>Missing &lt;canvas&gt; support. Please try a newer web browser.";
                return;
            }
            eCanvas.setAttribute("contenteditable", "true");
            eCanvas.setAttribute("autocapitalize", "off");
            eCanvas.setAttribute("autocorrect", "off");

            if (Web.getUserAgent().indexOf("MSIE") >= 0) {
                eCanvas.style.height = (((eVideo.clientWidth * parmsVideo['screenHeight']) / parmsVideo['screenWidth']) | 0) + "px";
                eVideo.onresize = function(eParent, eChild, cx, cy) {
                    return function() {
                        eChild.style.height = (((eParent.clientWidth * cy) / cx) | 0) + "px";
                    };
                }(eVideo, eCanvas, parmsVideo['screenWidth'], parmsVideo['screenHeight']);
            }

            /*
             * Now we can create the Video object, record it, and wire it up to the associated document elements.
             *
             * Regarding "new Image()", see https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement.Image:
             *
             *      This constructor exists for historical reasons only and returns an HTMLImageElement instance just as
             *      document.createElement('img') would.
             */
            var imgCharSet = new Image();
            var eContext = /** @type {CanvasRenderingContext2D} */ (eCanvas.getContext("2d"));
            var video = new C1PVideo(parmsVideo, eCanvas, eContext, imgCharSet);
            var sCharSet = parmsVideo['fontROM'] || parmsVideo['charSet'];
            imgCharSet.onload = function(video, sCharSet) {
                return function() {
                    if (DEBUG) video.log("onload(): finished loading " + sCharSet);
                    video.setReady();
                };
            }(video, sCharSet);
            imgCharSet.src = sCharSet;

            /*
             * Bind any video-specific controls (eg, the Refresh button). There are no essential controls, however;
             * even the "Refresh" button is just a diagnostic tool, to verify that the screen contents are up-to-date.
             */
            Component.bindComponentControls(video, eVideo, C1PJS.APPCLASS);
        }
    }
}

/*
 * Initialize every Video module on the page.
 */
Web.onInit(C1PVideo.init);

/**
 * @copyright https://www.pcjs.org/machines/osi/c1p/lib/serial.js (C) 2012-2025 Jeff Parsons
 */


/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @unrestricted
 */
class C1PSerialPort extends Component {
    /**
     * C1PSerialPort(parmsSerial)
     *
     * The SerialPort component supports the following component-specific parameters:
     *
     *      demo: true to inject a hard-coded BASIC demo program into the machine
     *      autoMount: an object containing 'name' and 'path' properties of a resource to auto-load
     *
     * The autoMount parameter can be overridden with a URL parameter of the same name.
     *
     * @this {C1PSerialPort}
     * @param {Object} parmsSerial
     */
    constructor(parmsSerial)
    {
        super("C1PSerialPort", parmsSerial);

        this.flags.powered = false;

        this.fDemo = parmsSerial['demo'];
        this.sDemo = "10 PRINT \"HELLO OSI #" + this.getMachineNum() + "\"\n";

        this.autoLoad = C1PSerialPort.AUTOLOAD_NONE;
        this.autoMount = Web.getURLParm('autoMount') || parmsSerial['autoMount'];

        if (typeof this.autoMount == "string") {
            try {
                this.autoMount = /** @type {Object} */ (eval("(" + this.autoMount + ")"));
            } catch (err) {
                Component.error(this.type + " auto-mount error: " + err.message + " (" + this.autoMount + ")");
                this.autoMount = null;
            }
        }

        var path = this.autoMount && this.autoMount['path'];
        if (path) {
            var serial = this;
            this.fDemo = true;
            Web.getResource(path, null, true, function(sURL, sResponse, nErrorCode) {
                serial.loadFile(sURL, sResponse, nErrorCode);
                serial.sDemo = sResponse;
                serial.autoMount = null;
                /*
                 * setBuffer() calls setReady() only if autoMount has been cleared; similarly, we must call setReady()
                 * only if setBuffer() has already been called.
                 */
                if (serial.abMem) serial.setReady();
            });
        }
        this.reset(true);
    }

    /**
     * @this {C1PSerialPort}
     * @param {string} sFileName
     * @param {string} sFileData (null if getResource() encountered an error)
     * @param {number} nResponse from server
     */
    loadFile(sFileName, sFileData, nResponse)
    {
        if (!sFileData) {
            this.println("Error loading file \"" + sFileName + "\" (" + nResponse + ")");
            return;
        }

        this.iInput = 0;
        this.sInput = sFileData;
        this.fConvertLF = true;

        /*
         * The following code adds support for loading "65V" files encoded as JSON, which is a cleaner
         * way to store and deliver those files when they contain binary (non-ASCII) data.
         *
         * For example, my 6502 ASSEMBLER/DISASSEMBLER program starts with a conventional "65V" loading
         * sequence, which loads and launches a small program loader that loads the rest of the program
         * using a raw (1-to-1) binary format instead of the usual (3-to-1) HEX format used by "65V" files.
         *
         * The "rawness" of the binary format also necessitates disabling fConvertLF.
         */
        if (sFileName.indexOf(".json") > 0) {
            try {
                /*
                 * The most likely source of any exception will be here: parsing the JSON-encoded data.
                 */
                var s = "";
                var data = eval("(" + sFileData + ")");
                var ab = data['bytes'];
                for (var i = 0; i < ab.length; i++) {
                    s += String.fromCharCode(ab[i]);
                }
                this.sInput = s;
                this.fConvertLF = false;
            } catch (e) {
                this.println("Error processing file \"" + sFileName + "\": " + e.message);
                return;
            }
        }

        if (this.cmp && this.kbd && this.cpu.isRunning()) {
            this.println("auto-loading " + sFileName);
            if (!this.fDemo) this.startLoad(true);
        }
        else {
            this.println(sFileName + " ready to load");
        }
    }

    /**
     * @this {C1PSerialPort}
     * @param {boolean} [fHard]
     */
    reset(fHard)
    {
        /*
         * Because we reset the machine at the start of a 6502 HEX command file auto-load,
         * we must avoid tossing the serial port's input buffer in that particular case (2).
         */
        if (fHard || this.autoLoad != C1PSerialPort.AUTOLOAD_6502) {

            this.bInput = -1;
            this.iInput = 0;
            this.sInput = "";
            if (this.fDemo) this.sInput = this.sDemo;

            this.fConvertLF = true;
            this.autoLoad = C1PSerialPort.AUTOLOAD_NONE;
        }
    }

    /**
     * @this {C1PSerialPort}
     */
    start()
    {
        if (this.kbd && this.fDemo) {
            if (this.sInput[0] == '.') {
                this.fDemo = false;
                this.startLoad();
            } else {
                this.kbd.injectKeys(" C\n\n", 1000);     // override the default injection delay (currently 300ms)
                setTimeout(function(serial) {
                    return function() {
                        serial.fDemo = false;
                        serial.startLoad();
                    };
                }(this), 5000);
            }
        }
    }

    /**
     * @this {C1PSerialPort}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "listSerial")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @return {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        var serial = this;

        switch(sBinding) {

        case "listSerial":
            this.bindings[sBinding] = control;
            return true;

        case "loadSerial":
            this.bindings[sBinding] = control;
            control.onclick = function onClickLoadSerial(event) {
                if (serial.bindings["listSerial"]) {
                    var sFile = serial.bindings["listSerial"].value;
                    // serial.println("loading " + sFile + "...");
                    Web.getResource(sFile, null, true, function(sURL, sResponse, nErrorCode) {
                        serial.loadFile(sURL, sResponse, nErrorCode);
                    });
                }
            };
            return true;

        case "mountSerial":
            /*
             * Check for non-mobile (desktop) browser and the availability of FileReader
             */
            var controlInput = /** @type {Object} */ (control);
            if (!Web.isMobile() && window && 'FileReader' in window) {
                this.bindings[sBinding] = controlInput;
                /*
                 * Enable "Mount" button only if a file is actually selected
                 */
                controlInput.onchange = function onChangeMountSerial() {
                    var fieldset = controlInput.children[0];
                    var files = fieldset.children[0].files;
                    var submit = fieldset.children[1];
                    submit.disabled = !files.length;
                };
                controlInput.onsubmit = function onSubmitMountSerial(event) {
                    var file = event.currentTarget[1].files[0];

                    var reader = new FileReader();
                    reader.onload = function() {
                        // serial.println("mounting " + file.name + "...");
                        serial.loadFile(file.name, reader.result.toString(), 0);
                    };
                    reader.readAsText(file);

                    /*
                     * Prevent reloading of web page after form submission
                     */
                    return false;
                };
            }
            else {
                if (DEBUG) this.log("Local file support not available");
                controlInput.parentNode.removeChild(/** @type {Node} */ (controlInput));
            }
            return true;

        default:
            break;
        }
        return false;
    }

    /**
     * @this {C1PSerialPort}
     * @param {Array} abMemory
     * @param {number} start
     * @param {number} end
     * @param {C1PCPU} cpu
     */
    setBuffer(abMemory, start, end, cpu)
    {
        this.abMem = abMemory;
        this.offPort = start;
        this.cbPort = end - start + 1;
        this.offPortLimit = this.offPort + this.cbPort;
        if ((this.cpu = cpu)) {
            cpu.addReadNotify(start, end, this, this.getByte);
            cpu.addWriteNotify(start, end, this, this.setByte);
        }
        if (!this.autoMount) this.setReady();
    }

    /**
     * @this {C1PSerialPort}
     * @param {boolean} fOn
     * @param {C1PComputer} cmp
     *
     * We make a note of the Computer component, so that we can invoke its reset() method whenever we need to
     * simulate a warm start, and we query the Keyboard component so that we can use its injectKeys() function.
     */
    setPower(fOn, cmp)
    {
        if (fOn && !this.flags.powered) {
            this.flags.powered = true;
            this.cmp = cmp;
            this.kbd = cmp.getComponentByType("keyboard");
            if (DEBUGGER) this.dbg = cmp.getComponentByType("debugger");
        }
    }

    /**
     * @this {C1PSerialPort}
     * @param {boolean} [fReset]
     */
    startLoad(fReset)
    {
        if (this.sInput) {
            /*
             * QUESTION: Is this setFocus() call strictly necessary?  We're being called in the
             * context of getResource(), not some user action.  If there was an original user action,
             * then the handler for THAT action should take care to switch focus back, not us.
             */
            this.cpu.setFocus();
            /*
             * We interpret the presence of a "." at the beginning of the file as a "65V Monitor"
             * address-mode command, and consequently treat the file as 6502 HEX command file.
             *
             * Anything else is treated as commands for the BASIC interpreter, which we re-initialize
             * with "NEW" and "LOAD" commands.  To prevent that behavior, halt the CPU, perform the load,
             * and then start it running again.  BASIC will start reading the data as soon as you type
             * LOAD.
             */
            if (this.sInput.charAt(0) != '.') {
                this.autoLoad = C1PSerialPort.AUTOLOAD_BASIC;
                this.kbd.injectKeys("NEW\nLOAD\n");
            }
            else {
                /*
                 * Set autoLoad to AUTOLOAD_6502 before the reset, so that when our reset() method is called,
                 * we'll take care to preserve all the data we just loaded.
                 */
                this.autoLoad = C1PSerialPort.AUTOLOAD_6502;
                /*
                 * Although the Keyboard allows us to inject any key, even the BREAK key, like so:
                 *
                 *      this.kbd.injectKeys(String.fromCharCode(this.kbd.CHARCODE_BREAK))
                 *
                 * it's easier to initiate a reset() ourselves and then start the machine-language load process
                 */
                if (fReset) this.cmp.reset(true);
                this.kbd.injectKeys("ML");
            }
        }
    }

    /**
     * @this {C1PSerialPort}
     * @param {number} addr
     * @param {number|undefined} addrFrom (not defined whenever the Debugger tries to read the specified addr)
     */
    getByte(addr, addrFrom)
    {
        /*
         * Don't trigger any further hardware emulation (beyond what we've already stored in memory) if
         * the Debugger performed this read (need a special Debugger I/O command if/when you really want to do that).
         */
        if (addrFrom !== undefined) {
            /*
             *  WARNING: All I need to do for now is load the COM interface's "data byte"
             *  with the next byte from the virtual cassette data stream -JP
             */
            if (!(addr & 0x01)) {
                /*
                 * An EVEN address implies they're looking, so if we have a fresh buffer,
                 * then prime the pump.
                 */
                if (this.sInput && !this.iInput)
                    this.advanceInput();
            } else {
                /*
                 * An ODD address implies they just grabbed a data byte, so prep the next data byte.
                 */
                this.advanceInput();
            }
        }
    }

    /**
     * @this {C1PSerialPort}
     * @param {number} addr
     * @param {number|undefined} addrFrom (not defined whenever the Debugger tries to write the specified addr)
     */
    setByte(addr, addrFrom)
    {
        /*
         * Don't trigger any further hardware emulation (beyond what we've already stored in memory) if
         * the Debugger performed this write (need a special Debugger I/O command if/when you really want to do that).
         */
        if (addrFrom !== undefined) {
            if (DEBUGGER && this.dbg) this.dbg.messageIO(this, addr, addrFrom, this.dbg.MESSAGE_SERIAL, true);
            /*
             * WARNING: I don't yet care what state the CPU puts the port into.  When it's time to support serial output,
             * obviously that will become an issue.
             */
        }
    }

    /**
     * @this {C1PSerialPort}
     */
    advanceInput()
    {
        if (this.sInput !== undefined) {
            this.bInput = -1;
            if (this.iInput < this.sInput.length) {
                var b = this.sInput.charCodeAt(this.iInput++) & 0xff;
                if (this.fConvertLF) {
                    if (b == 0x0a) b = 0x0d;
                }
                this.bInput = b;
                // if (DEBUG) this.log("advanceInput(" + Str.toHexByte(b) + ")");
            }
            else {
                this.sInput = "";
                this.iInput = 0;
                if (DEBUG) this.log("advanceInput(): out of data");
                if (this.autoLoad == C1PSerialPort.AUTOLOAD_BASIC && this.kbd) {
                    this.kbd.injectKeys(" \nRUN\n");
                }
                this.autoLoad = C1PSerialPort.AUTOLOAD_NONE;
            }
            this.updateMemory();
        }
        // else if (DEBUG) this.log("advanceInput(): no input");
    }

    /**
     * @this {C1PSerialPort}
     */
    updateMemory()
    {
        var offset;
        /*
         * Update all the status (even) bytes
         */
        for (offset = this.offPort+0; offset < this.offPortLimit; offset+=2) {
            this.abMem[offset] = (this.bInput >= 0? C1PSerialPort.STATUS_DATA : C1PSerialPort.STATUS_NONE);
        }
        /*
         * Update all the data (odd) bytes
         */
        for (offset = this.offPort+1; offset < this.offPortLimit; offset+=2) {
            this.abMem[offset] = (this.bInput >= 0? this.bInput : 0);
        }
    }

    /**
     * C1PSerialPort.init()
     *
     * This function operates on every HTML element of class "serial", extracting the
     * JSON-encoded parameters for the C1PSerialPort constructor from the element's "data-value"
     * attribute, invoking the constructor to create a C1PSerialPort component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        var aeSerial = Component.getElementsByClass(document, C1PJS.APPCLASS, "serial");
        for (var iSerial=0; iSerial < aeSerial.length; iSerial++) {
            var eSerial = aeSerial[iSerial];
            var parmsSerial = Component.getComponentParms(eSerial);
            var serial = new C1PSerialPort(parmsSerial);
            Component.bindComponentControls(serial, eSerial, C1PJS.APPCLASS);
        }
    }
}

C1PSerialPort.STATUS_NONE   = 0x00;
C1PSerialPort.STATUS_DATA   = 0x01;     // indicates data available

/*
 * Values for autoLoad:
 *
 *      0: no auto-load active
 *      1: BASIC command file auto-load in progress
 *      2: 6502 HEX command file auto-load in progress
 */
C1PSerialPort.AUTOLOAD_NONE  = 0;
C1PSerialPort.AUTOLOAD_BASIC = 1;
C1PSerialPort.AUTOLOAD_6502  = 2;

/*
 * Initialize every SerialPort module on the page.
 */
Web.onInit(C1PSerialPort.init);

/**
 * @copyright https://www.pcjs.org/machines/osi/c1p/lib/disk.js (C) 2012-2025 Jeff Parsons
 */


/**
 * @class Drive
 * @property {number} iType
 * @property {number} nTracks
 * @property {boolean} fProtected
 * @property {number} nIndexPulse
 * @property {number} iTrackSelect
 * @property {number} iTrackOffset
 * @property {Array} aTracks
 */

/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @unrestricted
 */
class C1PDiskController extends Component {
    /**
     * C1PDiskController(parmsDC)
     *
     * The C1PDiskController component has no component-specific parameters.
     *
     * This component is being built to supplement a C1P (aka SuperBoard II) Model 600
     * single-board computer with the addition of a 610 Accessory Board, which included:
     *
     *      MC6820 PIA (Peripheral Interface Adapter at $C000-$C003, decoded at $C000-$C00F)
     *      MC6850 ACIA (Asynchronous Communications Interface Adapter at $C010-$C011, decoded at $C010-$C01F)
     *
     * From "OSI C1P Technical Report" p.4 regarding the 610 Accessory Board:
     *
     *      "This board holds up to 24K of additional RAM memory, a dual mini-floppy disk controller,
     *      a BUS expansion facility to Model 620 BUS adapter, and switching circuitry to route the
     *      600 board's serial interface to both the modem and printer as well as an audio cassette.
     *      Thus, a fully expanded Challenger lP system can have BASIC-in-ROM, 32K of RAM memory,
     *      dual mini-floppies, cassette, printer, modem, and full BUS expansion capability to the OSI
     *      48 line BUS through which over 40 accessories can be added (A/D, D/A, voice, I/O, more memory,
     *      etc.)."
     *
     * On p.20, the Report says that the 610 Accessory Board contains:
     *
     *      - Up to 24K of RAM
     *      - Dual mini-floppy controller
     *      - Real Time Clock (although elsewhere the Report says this is disabled by default)
     *      - Expansion interface to a model 620 BUS adapter
     *
     * On p.21, the Report also says:
     *
     *      "The dual mini-floppy interface is designed after Ohio Scientific's extremely popular
     *      and successful 470 floppy disk controller. This floppy disk controller and encoding
     *      technique has been field proven for several years in thousands of floppy disks and is
     *      believed to be one of the most reliable floppy disk configurations in existence. Although
     *      the Challenger lP product line is new, it has the advantage of the experience of a company
     *      which has been building high performance microcomputers for several years."
     *
     * From "PEEK 65" Vol.2 No.3 March 1981, p.9:
     *
     *      "The 470 board wired as a floppy disk controller contains two different interfaces:
     *      a PIA and an ACIA. The PIA A and B ports are used in control circuits: raise and lower
     *      the head, detect drive ready, detect sector hole, clear error faults, etc. The ACIA is
     *      the interface over which the data actually travels. Typical operation is to drop the head,
     *      reset the ACIA, wait for the index hole to come around, activate the read or write circuit,
     *      then read or write characters through the ACIA."
     *
     *      470 Board Addressing
     *      --------------------
     *
     *      Address     Read                    Write
     *      -------     ----                    -----
     *      C000        PIA: PA0 thru PA7       PIA: PA0 thru PA7 or DDA0 thru DDA7
     *      C001        PIA: Port A Ctrl        PIA: Port A Control
     *      C002        PIA: PB0 thru PB7       PIA: PB0 thru PB7 or DDB0 thru DDB7
     *      C003        PIA: Port B Ctrl        PIA: Port B Control
     *      C010        ACIA: Status Reg.       ACIA: Control Register
     *      C011        ACIA: Data Path         ACIA: Data Path
     *      C020        Clear Real Time Clock   Clear Real Time Clock
     *                  (Reset) ($FF returned)  (Reset) (Data Ignored)
     *
     *      PIA Data Register A Layout:
     *
     *      PA7     PA6     PA5     PA4     PA3     PA2     PA1     PA0
     *      ---     ---     ---     ----    ---     ---     ---     ----
     *      IHD  |  SD2  |  WP   |  RDY2 |  SHD  |  FD   |  TZD  |  RDY1
     *      (In)    (Out)   (In)    (In)    (In)    (In)    (In)    (In)
     *
     *      PIA Data Register B Layout:
     *
     *      PB7     PB6     PB5     PB4     PB3     PB2     PB1     PB0
     *      ---     ---     ---     ---     ---     ---     ---     ---
     *      HLD  |  LCS  |  SD1  |  FR   |  ST   |  STI  |  EE   |  WE
     *      (Out)   (Out)   (Out)   (Out)   (Out)   (Out)   (Out)   (Out)
     *
     *      PIA Data Register A Lines       PIA Data Register B Lines
     *      -------------------------       -------------------------
     *      IHD - Index Hole Detect         HLD - Head Load
     *      SD2 - Select Drive 2 (Drive B)  LCS - Low Current Select
     *      WP  - Write Protected           SD1 - Select Drive 1
     *      RDY2- Drive 2 Ready             FR  - Fault Reset
     *      SHD - Sector Hole Detect        ST  - Step
     *      FD  - Fault Detected            STI - Step In
     *      TZD - Track Zero Detected       EE  - Enable Erase
     *      RDY1- Drive 1 Ready             WE  - Write Enable
     *
     * NOTE: The PIA bit assignments above agree with those described, albeit somewhat less clearly,
     * in https://osiweb.org/misc/osi-hardware.txt, under "Model 475 Floppy disk system with
     * 470 Controller board".
     *
     * There is apparently significant overlap with another OSI board: the Model 505 CPU Board
     * used in C4P/MF systems.  According to https://osiweb.org/misc/osi-hardware.txt, it
     * contained:
     *
     *      CPU board w/ ROM, ACIA, Floppy Disk I/O, Real Time Clock
     *      ROM $FDxx, $FExx, $FFxx
     *      Floppy disk interface: 6820 PIA at $C000, 6850 ACIA at $C010 [Original says "6850 PIA"]
     *      ACIA 6850 at $FC00 for RS-232 serial I/O. Baud jumpers for 75,150,300,600,1200,2400,4800,9600
     *      Disk PIA $C0xx CB1 connected to 400mSEC (2.5/sec) clock divided from system clock (RTC)
     *      Home security - PIA $F700-F703
     *
     * Disk Formats (from http://osi.marks-lab.com/files/winOSI/old-source-V1.2/Disk_io.cpp):
     *
     *      5.25" disk, 40 tracks, 8 sectors/track, 256 bytes/sector, 11 bits/byte (8E1) = 80K/disk.
     *
     *      NOTE: 8E1 refers to "8 data bits, even parity, 1 stop bit," plus an implied start bit.
     *
     *      OSI uses 8E1 to give a max unformatted capacity of 2272 bytes per track (see below).
     *      However other bit encodings (8N1) could give up to 2500 bytes/track.
     *
     *      NOTE: 8N1 refers to "8 data bits, no parity, 1 stop bit," plus an implied start bit.
     *
     *      The standard speed for 5.25" drives is 300rpm. Thus one rotation of the disk is 200ms.
     *      Stated baud-rate is 125k or 125000 bits/sec and one serial byte is 11 bits (1 start,
     *      8 data, 1 parity, 1 stop). So the theoretical absolute maximum storage per track is
     *      (125000 x 0.2) / 11 = 2272 bytes or 8.8 pages.
     *
     *      OS-65D loses a bit more because it doesn't write until 10ms after the index pulse, so
     *      (125000 x 0.19) / 11 = 2159 bytes or 8.4 pages and this doesn't even allow for the length
     *      of the index pulse (a few milliseconds?) and the speed variation between drives.
     *
     *      8" disk, 77 tracks, 12 sectors/track, 256 bytes/sector, 11 bits/byte (8E1) = 231K/disk.
     *      OSI uses 8E1 to give a max unformatted capacity of 3772 bytes/track (see below).
     *      However other bit encodings (8N1) could give up to 3900 bytes/track.
     *
     *      The standard speed for 8" drives is 360rpm. Thus one rotation of the disk is 166.6ms.
     *      Stated baud rate is 250K or 250000 bits/sec and one serial byte is 11 bits (1 start,
     *      8 data, 1 parity, 1 stop). So the theoretical absolute maximum storage per track is
     *      (250000 x 0.166 ) / 11 = 3772 or 14.7 pages.
     *
     *      OS-65D loses a bit more because it doesn't write until 10 mS after the index pulse, so
     *      (250000 x 0.156) / 11 = 3545 bytes  or 13.8 pages and this doesn't even allow for the length
     *      of the index pulse (a few milliseconds?) and the speed variation between drives.
     *
     *      Track 0 Format
     *      --------------
     *              (10ms delay after index hole)
     *      0,1     load address of the track in hi,lo form
     *      2       page count of how much data is written on track 0.
     *      3+      sector data
     *
     *      Track N Format (N > 0)
     *      ----------------------
     *              (10ms delay after index hole)
     *      0,1     2-byte start code $43, $57
     *      2       BCD track number
     *      3       track type code (always $58)
     *      4+      sector data
     *
     *      Sector Format (5.25" disks)
     *      ---------------------------
     *      There can be any mixture of various length sectors. The total page count can not
     *      exceed 8 pages (8*256) if more than one sector is on a track. Each sector is written
     *      in the following format:
     *
     *          previous sector length (4 if none before) times 800 microseconds of delay
     *          sector start code $76
     *          sector number in binary
     *          sector length (#pages) in binary
     *          sector data
     *          (end of sector mark? $47, $53? MDS)
     *
     *      Directory Format
     *      ----------------
     *      2 sectors (1 & 2) on track 12 hold the directory information.
     *      Each entry requires 8 bytes. There are a total of 64 entries. The entries are
     *      formatted as follows:
     *
     *          0-5 ASCII 6 character filename
     *          6 BCD first track of file
     *          7 BCD Last track of file
     *
     * So far, all the 5.25" disk images I've seen are 92160 bytes, regardless whether they have an
     * .IMG or .65D extension.  If we divide that total by 40 (tracks/disk), we get 2304 (bytes/track).
     * Divide 2304 by 256 (bytes/page) and we get 9 pages/track.  Presumably a fixed 9 pages was chosen
     * to yield a consistent track size across the entire image, while also allowing room for all the
     * metadata that's typically present on a track as well.  As explained above, the upper limit
     * on data per track (both sector data and metadata) is 8.8 pages in theory, or 8.4 pages in practice.
     *
     * @this {C1PDiskController}
     * @param {Object} parmsDC
     */
    constructor(parmsDC)
    {
        super("C1PDiskController", parmsDC);

        this.flags.powered = false;

        /*
         * Our DiskController simulates the combination of an MC6820 PIA and an MC6850 ACIA.
         * This image of an OSI 470 Controller Board (http://osi.marks-lab.com/boards/images/OSI470.jpg)
         * shows that the chips actually used were MC68B21P and MC68B50P.
         *
         * We start with definitions for the MC6820 PIA.
         */
        this.PORT_PDA   = 0;        // PIA Peripheral Data Register A
        this.PORT_DDA   = 0;        // PIA Data Direction Register A (DDA shares the same register offset as PDA)
        this.PORT_CRA   = 1;        // PIA Control Register A

        this.PORT_PDB   = 2;        // PIA Peripheral Data Register B
        this.PORT_DDB   = 2;        // PIA Data Direction Register B (DDB shares the same register offset as PDB)
        this.PORT_CRB   = 3;        // PIA Control Register B

        this.CR_IRQ1    = 0x80;     // IRQ1
        this.CR_IRQ2    = 0x40;     // IRQ2
     // this.CR_C2_OUT  = 0x20;     // C2 is designated an output
     // this.CR_C2_CTRL = 0x18;     // C2 Control (00 and 10 mask IRQ2, 01 and 11 pass IRQ2 through to the CPU)
        this.CR_PD_SEL  = 0x04;     // set to select PD (PDA or PDB), clear to select DD (DDA or DDB)
     // this.CR_C1_CTRL = 0x03;     // C1 Control (00 and 10 mask IRQ1, 01 and 11 pass IRQ1 through to the CPU)

        /*
         * The PDA bits have the following hard-wired connections in the OSI Floppy Disk Controller.
         * Each line marked INPUT should have its corresponding Data Direction bit clear (0), and each line
         * marked OUTPUT should have its Data Direction bit set (1); however, we do not currently verify that
         * the Data Direction bits are actually initialized to match these specs (and in fact, in the case
         * of PDA_SD2, they may not be).
         */
        this.PDA_RDY1   = 0x01;     // INPUT:   0 = Drive 1 Ready
        this.PDA_TZD    = 0x02;     // INPUT:   0 = Track Zero Detected
        this.PDA_FD     = 0x04;     // INPUT:   0 = Fault Detected
        this.PDA_SHD    = 0x08;     // INPUT:   0 = Sector Hole Detect
        this.PDA_RDY2   = 0x10;     // INPUT:   0 = Drive 2 Ready
        this.PDA_WP     = 0x20;     // INPUT:   0 = Write Protected
        this.PDA_SD2    = 0x40;     // OUTPUT:  0 = Select Drive 2 (Drive B)
        this.PDA_IHD    = 0x80;     // INPUT:   0 = Index Hole Detect

     // this.PDB_WE     = 0x01;     // OUTPUT:  0 = Write Enable
     // this.PDB_EE     = 0x02;     // OUTPUT:  0 = Erase Enable (set to 1)
        this.PDB_STI    = 0x04;     // OUTPUT:  0 = Step In (away from track 0)
        this.PDB_ST     = 0x08;     // OUTPUT:  0 = Step (on 1-to-0 transition)
     // this.PDB_FR     = 0x10;     // OUTPUT:  0 = Fault Reset (set to 1)
        this.PDB_SD1    = 0x20;     // OUTPUT:  0 = Select Drive 1
     // this.PDB_LCS    = 0x40;     // OUTPUT:  0 = Low Current Select (set to 1)
     // this.PDB_HLD    = 0x80;     // OUTPUT:  0 = Head Load (head on disk)

        /*
         * Next, definitions for the MC6850 ACIA.
         *
         * For reference, here are all the possible CTRL_WSEL (Word Select) values:
         *
         *      000     0x00        7 bits, even parity, 2 stop bits
         *      001     0x04        7 bits, odd parity, 2 stop bits
         *      010     0x08        7 bits, even parity, 1 stop bit
         *      011     0x0C        7 bits, odd parity, 1 stop bit
         *      100     0x10        8 bits, 2 stop bits
         *      101     0x14        8 bits, 1 stop bit
         *      110     0x18        8 bits, even parity, 1 stop bit
         *      111     0x1C        8 bits, odd parity, 1 stop bit
         *
         * And here are all the possible CTRL_TCTL (Transmit Control) values:
         *
         *      00      0x00        RTS=Low, Transmitting Interrupt Disabled
         *      01      0x20        RTS=Low, Transmitting Interrupt Enabled
         *      10      0x40        RTS=High, Transmitting Interrupt Disabled
         *      11      0x60        RTS=Low, Transmits a Break level on the Transmit Data Output; Transmitting Interrupt Disabled
         */
        this.PORT_CTRL = 0x10;  // ACIA Control Register (WRITE-only)
        this.PORT_STAT = 0x10;  // ACIA Status Register (READ-only)
        this.PORT_DATA = 0x11;  // ACIA Data Register (Transmit Data Register on WRITE, Receive Data Register on READ)

        this.CTRL_CDIV  = 0x03; // Counter Divide (CR1,CR0) [OSI sets both, performing a "Master Reset", then immediately clears both, for a divide ratio of 1]
     // this.CTRL_WSEL  = 0x1C; // Word Select (CR4,CR3,CR2), determining word length, parity and stop bits [OSI selects 0x18 for "8 bits, even parity, 1 stop bit"]
     // this.CTRL_TCTL  = 0x60; // Transmit Control (CR6,CR5) [OSI selects 0x40 for "RTS=High, Transmitting Interrupt Disabled"]
     // this.CTRL_RINT  = 0x80; // Receive Interrupt Enable (CR7) [OSI selects 0x00 for interrupts disabled]

        this.STAT_RDRF  = 0x01; // Receive Data Register Full
        this.STAT_TDRE  = 0x02; // Transmit Data Register Empty
        this.STAT_DCD   = 0x04; // Data Carrier Detect
        this.STAT_CTS   = 0x08; // Clear To Send
     // this.STAT_FE    = 0x10; // Framing Error (ie, the received character is improperly framed by a start and a stop bit and is detected by the absence of the first stop bit)
     // this.STAT_OVRN  = 0x20; // Receiver Overrun (ie, one or more characters in the data stream were lost due to not being read from the Receive Data Register in time)
     // this.STAT_PE    = 0x40; // Parity Error (ie, the number of highs (ones) in the character does not agree with the preselected odd or even parity)
     // this.STAT_IRQ   = 0x80; // Interrupt Request (ie, state of the IRQ output; cleared by a read operation to the Receive Data Register or a write operation to the Transmit Data Register)

        /*
         * Last but not least, some internal state definitions and hard-coded assumptions
         */
        this.DRIVETYPE_5INCH = 0;
     // this.DRIVETYPE_8INCH = 1;

        this.MAXTRACKS_5INCH = 40;
     // this.MAXTRACKS_8INCH = 77;

        /*
         * Some random OS-65D notes
         *
         * Version 3.3 Initialization Code
         * -------------------------------
         *
         * The following code (where X is 0x00):
         *
         *      2217 8E 01 F4  STX $F401
         *      221A 8E 00 F4  STX $F400
         *      221D 8E 03 F4  STX $F403
         *
         * is intended to reset a Printer PIA located at 0xF400.
         *
         * It then takes a detour to "SET KEYBOARD SOUND GENERATOR TO LOWEST FREQUENCY (192.753 HZ)"
         * with X set to 0xFF; the sound generator is supposed to be turned off a bit later, presumably
         * at the same time it sets "64 char/line" mode -- well, that's what v3.2 did anyway.
         *
         *      2220 CA        DEX
         *      2221 8E 01 DF  STX $DF01
         *
         * While X is still 0xFF, it continues initializing the Printer PIA:
         *
         *      2224 8E 02 F4  STX $F402
         *
         * Then the code fiddles a bit with a mystery serial port (perhaps the "Model 430B Cassette & Analog I/O"
         * interface?)
         *
         *      2227 AD 06 FB  LDA $FB06
         *      222A 8E 05 FB  STX $FB05
         *
         * And then it's back to more Printer PIA initialization:
         *
         *      222D A9 04     LDA #$04
         *      222F 8D 01 F4  STA $F401
         *      2232 8D 03 F4  STA $F403
         *
         * Then it does some disk resetting (with A still 0x04 and Y set to 0x00):
         *
         *      2235 8C 01 C0  STY $C001
         *      2238 A0 40     LDY #$40 ;'@'
         *      223A 8C 00 C0  STY $C000
         *      223D 8D 01 C0  STA $C001
         *
         * This code supposedly selects DRIVE 1:
         *
         *      2240 A9 01     LDA #$01
         *      2242 20 C6 29  JSR $29C6
         *
         * Then it "resets" and "sets" the TERMINAL ACIA.  Note that the C1P serial port is addressed
         * at 0xF000-0xF0FF, and the C1P has ROM mapped to 0xF800-0xFFFF, so we know nothing of the serial
         * port mentioned above at 0xFBxx, nor this terminal ACIA port at 0xFCxx.
         *
         *      2245 A9 03     LDA #$03
         *      2247 8D 00 FC  STA $FC00
         *      224A A0 11     LDY #$11
         *      224C 8C 00 FC  STY $FC00
         *
         * Next, there's some code to "SET CA-10X 16 WAY SERIAL BOARD" at 0xCF00-0xCF1F; again, something
         * we know nothing about:
         *
         *      224F A2 1E     LDX #$1E
         *      2251 9D 00 CF  STA $CF00,X
         *      2254 98        TYA
         *      2255 9D 00 CF  STA $CF00,X
         *      2258 A9 03     LDA #$03
         *      225A CA        DEX
         *      225B CA        DEX
         *      225C 10 F3     BPL $2251
         *
         * Then it clears 8 pages of video memory (ie, it simply ASSUMES that this is a Model 540 video board
         * with 2K of video memory):
         *
         *      225E A2 08     LDX #$08
         *      2260 A9 D0     LDA #$D0
         *      2262 85 FF     STA $FF
         *      2264 A0 00     LDY #$00
         *      2266 84 FE     STY $FE
         *      2268 A9 20     LDA #$20 ;' '
         *      226A 91 FE     STA ($FE),Y
         *      226C C8        INY
         *      226D D0 FB     BNE $226A
         *      226F E6 FF     INC $FF
         *      2271 CA        DEX
         *      2272 D0 F6     BNE $226A
         *
         * Then it performs a memory test, starting with a high page of 0xBF, and stores the highest page of
         * available RAM at 0x2300:
         *
         *      2276 A0 BF     LDY #$BF
         *      2278 20 EC 22  JSR $22EC
         *      227B F0 03     BEQ $2280
         *      227D 88        DEY
         *      227E D0 F8     BNE $2278
         *      2280 8C 00 23  STY $2300
         *
         * Now it checks for "SERIAL OR VIDEO (EITHER 65-A OR 65-V PROM)" (the byte at 0xFE01 on a C1P is 0x28,
         * so X will be 2, implying "VIDEO"):
         *
         *      2283 A2 01     LDX #$01
         *      2285 AD 01 FE  LDA $FE01
         *      2288 F0 01     BEQ $228B
         *      228A E8        INX
         *      228B 8E C6 2A  STX $2AC6
         *
         * Finally, there's some code that's a little different from v3.2; in 3.2, it would set X to 0x01
         * and then store X at 0xDE00, effectively forcing the video board into "64 char/line" mode -- which was
         * originally EXACTLY what I was looking for in the video emulation component.  But v3.3 doesn't do that.
         * Here's what it does instead:
         *
         *      228F A2 00     LDX #$00
         *      2291 8E 80 DC  STX $DC80
         *
         * So, what's supposed to be at 0xDC80?
         */

        this.reset(true);
    }

    /**
     * @this {C1PDiskController}
     * @param {boolean|undefined} [fPowerOn] is true for the initial reset only
     */
    reset(fPowerOn)
    {
        this.resetRegs();
        this.iDriveSelect = -1;
        if (fPowerOn) {
            this.aDrives = [];
            this.resetDrive(0, this.DRIVETYPE_5INCH, this.MAXTRACKS_5INCH);
        }
    }

    /**
     * @this {C1PDiskController}
     */
    resetRegs()
    {
        this.regDDA = {
            bits: this.PDA_SD2, // clear all DDA bits, indicating that all PDA bits represent INPUT lines (well, except for PDA_SD2)
            read: function() {},
            update: function(controller) {
                return function(b) {
                    if (b !== undefined) this.bits = b;
                    if (!(controller.regCRA.bits & controller.CR_PD_SEL)) {
                        controller.writePort(controller.PORT_DDA, this);
                    }
                };
            }(this)
        };
        this.regPDA = {
            bits: 0xff,
            read: function() {
                this.update();
            },
            update: function(controller) {
                return function(b) {
                    this.bits = controller.updatePDA(b);
                    if (controller.regCRA.bits & controller.CR_PD_SEL) {
                        controller.writePort(controller.PORT_PDA, this);
                    }
                };
            }(this)
        };
        this.regCRA = {
            bits: 0,
            read: function() {},
            update: function(controller) {
                return function(b) {
                    /*
                     * Most bits written to CRA should be left as-is (the CPU should read back what it wrote);
                     * bits 7 and 6 (IRQ1 and IRQ2) are exceptions, since those are tied to peripheral "Control Lines"
                     * C1 and C2, which can in theory generate an interrupt depending on how the C1_CTRL and C2_CTRL bits
                     * in CRA are set.  However, assuming there's no need to simulate interrupts for this particular
                     * controller hardware, all we'll do is simply insure those two bits are always off.
                     */
                    if (b !== undefined) this.bits = (b & ~(controller.CR_IRQ1 | controller.CR_IRQ2));
                    controller.writePort(controller.PORT_CRA, this);
                    /*
                     * Since a CRA write may have also changed which register (PDA or DDA) is enabled via the corresponding
                     * PDA port, we simply ask ask both to update (only the one that's enabled will write itself to memory).
                     */
                    controller.regPDA.update();
                    controller.regDDA.update();
                };
            }(this)
        };
        this.regDDB = {
            bits: 0xff,         // set all DDB bits, indicating that all PDB bits represent OUTPUT lines
            read: function() {},
            update: function(controller) {
                return function(b) {
                    if (b !== undefined) this.bits = b;
                    if (!(controller.regCRB.bits & controller.CR_PD_SEL)) {
                        controller.writePort(controller.PORT_DDB, this);
                    }
                };
            }(this)
        };
        this.regPDB = {
            bits: 0xff,
            read: function() {},
            update: function(controller) {
                return function(b) {
                    this.bits = controller.updatePDB(b);
                    if (controller.regCRB.bits & controller.CR_PD_SEL) {
                        controller.writePort(controller.PORT_PDB, this);
                    }
                };
            }(this)
        };
        this.regCRB = {
            bits: 0,
            read: function() {},
            update: function(controller) {
                return function(b) {
                    /*
                     * Most bits written to CRB should be left as-is (the CPU should read back what it wrote);
                     * bits 7 and 6 (IRQ1 and IRQ2) are exceptions, since those are tied to peripheral "Control Lines"
                     * C1 and C2, which can in theory generate an interrupt depending on how the C1_CTRL and C2_CTRL bits
                     * in CRB are set.  However, assuming there's no need to simulate interrupts for this particular
                     * controller hardware, all we'll do is simply insure those two bits are always off.
                     */
                    if (b !== undefined) this.bits = (b & ~(controller.CR_IRQ1 | controller.CR_IRQ2));
                    controller.writePort(controller.PORT_CRB, this);
                    /*
                     * Since a CRB write may have also changed which register (PDB or DDB) is enabled via the corresponding
                     * PDB port, we simply ask ask both to update (only the one that's enabled will write itself to memory).
                     */
                    controller.regPDB.update();
                    controller.regDDB.update();
                };
            }(this)
        };
        this.regCTRL = {
            bits: 0,
            read: function() {},
            update: function(controller) {
                return function(b) {
                    if (b !== undefined) {
                        if ((b & controller.CTRL_CDIV) == controller.CTRL_CDIV) {
                            /*
                             * Setting both CTRL_CDIV bits (CR0 and CR1) constitutes a "Master Reset" of the ACIA
                             */
                            controller.regSTAT.bits = (controller.STAT_TDRE | controller.STAT_DCD | controller.STAT_CTS);
                        }
                        this.bits = b;
                    }
                    // regCTRL isn't readable; instead, we ensure regSTAT is rewritten in its place
                    controller.regSTAT.update();
                };
            }(this)
        };
        this.regSTAT = {
            bits: (this.STAT_TDRE | this.STAT_DCD | this.STAT_CTS),
            read: function() {},
            update: function(controller) {
                return function(b) {
                    this.bits = controller.updateSTAT(b);
                    controller.writePort(controller.PORT_STAT, this);
                };
            }(this)
        };
        this.regDATA = {
            bits: 0,
            read: function(controller) {
                return function() {
                    controller.advanceDriveData();
                };
            }(this),
            update: function(controller) {
                return function(b) {
                    if (b !== undefined) this.bits = b;
                    controller.writePort(controller.PORT_DATA, this);
                };
            }(this)
        };
        this.regUnknown = {
            bits: 0,
            read: function() {},
            update: function(controller) {
                return function(b) {};
            }(this)
        };
        if (DEBUG) {
            this.regDDA.sName = "DDA",
            this.regDDA.aBitIDs = {0x80:"DD7",0x40:"DD6",0x20:"DD5",0x10:"DD4",0x08:"DD3",0x04:"DD2",0x02:"DD1",0x01:"DD0"};
            this.regPDA.sName = "PDA";
            this.regPDA.aBitIDs = {0x80:"IHD",0x40:"SD2",0x20:"WP",0x10:"RDY2",0x08:"SHD",0x04:"FD",0x02:"TZD",0x01:"RDY1"};
            this.regCRA.sName = "CRA";
            this.regCRA.aBitIDs = {0x80:"IRQ1",0x40:"IRQ2",0x20:"C2OUT",0x10:"C2:1",0x08:"C2:0",0x04:"PDS",0x02:"C1:1",0x01:"C1:0"};
            this.regDDB.sName = "DDB";
            this.regDDB.aBitIDs = {0x80:"DD7",0x40:"DD6",0x20:"DD5",0x10:"DD4",0x08:"DD3",0x04:"DD2",0x02:"DD1",0x01:"DD0"};
            this.regPDB.sName = "PDB";
            this.regPDB.aBitIDs = {0x80:"HLD",0x40:"LCS",0x20:"SD1",0x10:"FR",0x08:"ST",0x04:"STI",0x02:"EE",0x01:"WE"};
            this.regCRB.sName = "CRB";
            this.regCRB.aBitIDs = {0x80:"IRQ1",0x40:"IRQ2",0x20:"C2OUT",0x10:"C2:1",0x08:"C2:0",0x04:"PDS",0x02:"C1:1",0x01:"C1:0"};
            this.regCTRL.sName = "CTRL";
            this.regCTRL.aBitIDs = {0x80:"CR7",0x40:"CR6",0x20:"CR5",0x10:"CR4",0x08:"CR3",0x04:"CR2",0x02:"CR1",0x01:"CR0"};
            this.regSTAT.sName = "STAT";
            this.regDATA.sName = "DATA";
            this.regUnknown.sName = "unknown";
        }
    }

    /**
    * @this {C1PDiskController}
    * @param {number} iDrive
    * @param {number} iDriveType
    * @param {number} nMaxTracks
    */
    resetDrive(iDrive, iDriveType, nMaxTracks)
    {
        this.aDrives[iDrive] = {
            iType: iDriveType,
            nTracks: nMaxTracks,
            fProtected: true,               // fake for now
            nIndexPulse: 20,                // nIndex (20 is initial index pulse)
            iTrackSelect: 0,                // nTrack
            iTrackOffset: -1,               // nSector
            /*
             * Our disk data consists of an array of tracks, where each track is an array of sectors;
             * as long as aTracks.length == 0 (empty array), the drive is not considered "loaded" with a disk.
             */
            aTracks: []
        };
    }

    /**
    * @this {C1PDiskController}
    * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea")
    * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "listDisk")
    * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
    * @param {string} [sValue] optional data value
    * @return {boolean} true if binding was successful, false if unrecognized binding request
    */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        switch(sBinding) {

        case "listDisk":
            this.bindings[sBinding] = control;
            return true;

        case "loadDisk":
            this.bindings[sBinding] = control;
            control.onclick = function(controller) {
                return function() {
                    if (controller.bindings["listDisk"]) {
                        var sFilePath = controller.bindings["listDisk"].value;
                        var sFileURL = sFilePath;
                        /*
                         * If the selected disk image has a ".json" extension, then we assume it's a pre-converted
                         * JSON-encoded disk image, so we load it as-is; otherwise, we ask our server-side disk image
                         * converter to return the corresponding JSON-encoded data, in compact form (ie, minimal whitespace,
                         * no ASCII data comments, etc).
                         */
                        if (sFilePath.substr(sFilePath.length-5) != ".json") {
                            /*
                             * TODO: This code was using a deprecated parameter (compact=1); make sure things still work.
                             *
                             * TODO: Convert this code to use the new shared Disk API definitions and weblib functions; eg:
                             *
                             *      sDiskURL = Web.getHostOrigin() + DumpAPI.ENDPOINT + "?" + DumpAPI.QUERY.DISK + "=" + sDiskPath;
                             */
                            sFileURL = "http://" + window.location.host + "/api/v1/dump?disk=" + sFilePath;
                        }
                        controller.println("loading  " + Str.getBaseName(sFilePath) + "...");
                        Web.getResource(sFileURL, null, true, function(sURL, sResponse, nErrorCode) {
                            controller.loadDisk(sURL, sResponse, nErrorCode);
                        });
                    }
                };
            }(this);
            return true;

        default:
            break;
        }
        return false;
    }

    /**
    * @this {C1PDiskController}
    * @param {Array} abMemory
    * @param {number} start
    * @param {number} end
    * @param {C1PCPU} cpu
    */
    setBuffer(abMemory, start, end, cpu)
    {
        this.abMem = abMemory;
        this.addrController = start;
     // this.addrControllerLimit = end + 1;
        if ((this.cpu = cpu)) {
            cpu.addReadNotify(start, end, this, this.getByte);
            cpu.addWriteNotify(start, end, this, this.setByte);
        }
        this.setReady();
    }

    /**
    * @this {C1PDiskController}
    * @param {boolean} fOn
    * @param {C1PComputer} cmp
    *
    * We need We make a note of the Computer component, so that we can invoke its reset() method whenever we need to
    * simulate a warm start, and we query the Keyboard component so that we can use its injectKeys() function.
    */
    setPower(fOn, cmp)
    {
        if (fOn && !this.flags.powered) {
            this.flags.powered = true;
            if (DEBUGGER) this.dbg = cmp.getComponentByType("debugger");
        }
    }

    /**
    * @this {C1PDiskController}
    * @param {string} sDiskName
    * @param {string} sDiskData
    * @param {number} nErrorCode (response from server if anything other than 200)
    *
    * NOTE: Although I've expanded the JSON disk-image format to support multiple heads (ie, platters or disk surfaces),
    * this controller implementation currently supports only single-head drives, and therefore only single-sided images.
    * So, if the image contains more than one entry in head data array, all we use is the first entry; data for any remaining
    * heads is discarded.
    *
    * WARNING: The disk-image format should match that used by PCjs, where the image is an array of cylinders, each of which
    * is an array of heads.  That's also more typical, because it maintains the original data's physical locality.
    */
    loadDisk(sDiskName, sDiskData, nErrorCode)
    {
        if (nErrorCode) {
            this.println("disk load error (" + nErrorCode + ")");
            return;
        }
        var aHeads = [];
        this.println("mounting " + sDiskName + "...");
        try {
            /*
             * The most likely source of any exception will be right here, where we're parsing
             * the JSON-encoded disk data.
             */
            aHeads = eval("(" + sDiskData + ")");
            if (!aHeads.length) {
                this.println("no data: " + sDiskName);
                return;
            }
            if (!aHeads[0].length) {
                this.println("no tracks: " + sDiskName);
                return;
            }
            var aTracks = aHeads[0];
            if (aTracks[0]['trackNum'] === undefined) {
                this.println("data error: " + aTracks[0]);
                return;
            }
            /*
             * NOTE: This should never happen, otherwise we shouldn't have initiated the load
             * in the first place. Can we guarantee that and eliminate this test?
             */
            if (!this.aDrives[0]) {
                this.println("no available drives");
                return;
            }
            /*
             * To make disk access more efficient, we need to supplement every track object with a
             * simple byte-array (trackData) containing all the data bytes for the entire track.
             */
            for (var iTrack=0; iTrack < aTracks.length; iTrack++) {
                var iTrackNum;
                var track = aTracks[iTrack];
                var sectors = track['sectors'];
                /*
                 * WARNING: There are MANY other ways the track data could be malformed, but we'll
                 * start with the most egregious, and worry about the rest later.
                 */
                if ((iTrackNum = track['trackNum']) === undefined || sectors === undefined) {
                    throw new Error("track " + iTrack + " missing data");
                }
                /*
                 * WARNING: We allow out-of-order tracks, because we store each track's data according
                 * to its trackNum index, but just in case that wasn't intended, we're going to mention it.
                 */
                if (iTrackNum != iTrack) {
                    Component.warning("track " + iTrackNum + " out of order (expected " + iTrack + ")");
                }
                /*
                 * For each track, we start with an empty trackData array and "push" (ie, append) all the
                 * sector data onto it. Most of the data is already in byte form and can simply use Array.push(),
                 * but there is also some metadata (signatures, types, lengths, etc), for which we have assorted
                 * helpers below: pushBCD, pushBin, and pushSig.
                 */
                var trackData = [], sector, sectorData, i;
                if (!iTrackNum) {
                    sector = sectors[0];
                    sectorData = sector['sectorData'];
                    this.pushBin(trackData, track, 'trackLoad', 2);
                    this.pushBin(trackData, sector, 'sectorPages');
                    for (i = 0; i < sectorData.length; i++) {
                        trackData.push(sectorData[i]);
                    }
                }
                else {
                    this.pushSig(trackData, track, 'trackSig');
                    this.pushBCD(trackData, track, 'trackNum');
                    this.pushBin(trackData, track, 'trackType');
                    for (var iSector=0; iSector < sectors.length; iSector++) {
                        sector = sectors[iSector];
                        sectorData = sector['sectorData'];
                        this.pushBin(trackData, sector, 'sectorSig');
                        this.pushBin(trackData, sector, 'sectorNum');
                        this.pushBin(trackData, sector, 'sectorPages');
                        for (i = 0; i < sectorData.length; i++) {
                            trackData.push(sectorData[i]);
                        }
                        this.pushSig(trackData, sector, 'sectorEndSig');
                    }
                }
                /*
                 * Finally, here's where we add the newly-created chunk of track data to the current track object
                 */
                aTracks[iTrackNum].trackData = trackData;
                if (DEBUGGER && this.dbg && this.dbg.messageEnabled(this.dbg.MESSAGE_DISK)) {
                    this.dbg.message("track " + iTrackNum + ": " + trackData.length + " bytes");
                }
            }
            this.aDrives[0].aTracks = aTracks;
            this.println("mount of " + sDiskName + " complete");
        } catch (e) {
            this.println("disk data error: " + e.message);
        }
    }

    /**
    * @this {C1PDiskController}
    * @param {Array.<number>} a
    * @param {Object} o is the object containing the key
    * @param {string} k is the key of 8-bit value to convert to BCD (ie, two 4-bit BCD digits) and push
    */
    pushBCD(a, o, k)
    {
        var n = o[k];
        if (n === undefined) {
            throw new Error("missing bcd value: " + k);
        }
        var bcd = (Math.floor(n / 10) << 4) | (n % 10);
        a.push(bcd);
    }

    /**
    * @this {C1PDiskController}
    * @param {Array.<number>} a
    * @param {Object} o is the object containing the key
    * @param {string} k is the key of the value
    * @param {number} [cb] is the number of bytes to push (only 1 or 2 is supported, and the default is 1)
    */
    pushBin(a, o, k, cb)
    {
        var n = o[k];
        if (n === undefined) {
            throw new Error("missing binary value: " + k);
        }
        if (cb == 2) {
            a.push((n >> 8) & 0xff);
        }
        a.push(n & 0xff);
    }

    /**
    * @this {C1PDiskController}
    * @param {Array.<number>} a
    * @param {Object} o is the object containing the key
    * @param {string} k is the key of the signature string to push
    */
    pushSig(a, o, k)
    {
        var s = o[k];
        if (s === undefined) {
            throw new Error("missing signature: " + k);
        }
        for (var i=0; i < s.length; i++) {
            a.push(s.charCodeAt(i));
        }
    }

    /**
    * @this {C1PDiskController}
    * @param {number} port address (0x0000-0x00FF) relative to addrController (0xC000)
    * @param {boolean} fWrite is true if port write, false if port read
    * @return {Object} reg will always be a valid register object, but it may be the "unknown" register if we don't recognize the port.
    */
    getReg(port, fWrite)
    {
        var reg;
        port &= 0x3F;
        /*
         * Now that we've masked the full port range of 0x00-0xFF down to 0x00-0x3F, we further mask the
         * PIA port range (0x00-0x0F) to 0x00-0x03, and the ACIA port range (0x10-0x1F) to 0x10-0x11.
         * The rest of the masked range (0x20-0x3F) is unmapped, so we map it to our global unknown register.
         */
        if (port < 0x10)
            port &= 0x03;
        else if (port < 0x20)
            port &= 0x11;
        switch(port) {
        case this.PORT_PDA:
            reg = (this.regCRA.bits & this.CR_PD_SEL)? this.regPDA : this.regDDA;
            break;
        case this.PORT_CRA:
            reg = this.regCRA;
            break;
        case this.PORT_PDB:
            reg = (this.regCRB.bits & this.CR_PD_SEL)? this.regPDB : this.regDDB;
            break;
        case this.PORT_CRB:
            reg = this.regCRB;
            break;
        case this.PORT_CTRL:
            reg = (fWrite? this.regCTRL : this.regSTAT);
            break;
        case this.PORT_DATA:
            reg = this.regDATA;
            break;
        default:
            reg = this.regUnknown;
            break;
        }
        return reg;
    }

    /**
    * @this {C1PDiskController}
    * @param {number} addr
    * @param {number|undefined} addrFrom (not defined whenever the Debugger tries to read the specified addr)
    */
    getByte(addr, addrFrom)
    {
        /*
         * Don't trigger any further hardware emulation (beyond what we've already stored in memory) if
         * the Debugger performed this read (need a special Debugger I/O command if/when you really want to do that).
         */
        if (addrFrom !== undefined) {
            var port = addr - this.addrController;
            var reg = this.getReg(port, false);
            if (DEBUGGER && this.dbg) this.dbg.messageIO(this, addr, addrFrom, this.dbg.MESSAGE_DISK, false, reg.sName);
            reg.read();
        }
    }

    /**
    * @this {C1PDiskController}
    * @param {number} addr
    * @param {number|undefined} addrFrom (not defined whenever the Debugger tries to write the specified addr)
    */
    setByte(addr, addrFrom)
    {
        /*
         * Don't trigger any further hardware emulation (beyond what we've already stored in memory) if
         * the Debugger performed this write (need a special Debugger I/O command if/when you really want to do that).
         */
        if (addrFrom !== undefined) {
            var b = this.cpu.getByte(addr);
            var port = addr - this.addrController;
            var reg = this.getReg(port, true);
            if (DEBUGGER && this.dbg && this.dbg.messageEnabled(this.dbg.MESSAGE_DISK | this.dbg.MESSAGE_PORT)) {
                this.dbg.messageIO(this, addr, addrFrom, this.dbg.MESSAGE_DISK, true, reg.sName);
                if (reg.aBitIDs) {
                    var bTest = 0x80;
                    var bChanged = reg.bits ^ b;
                    while (bChanged && bTest) {
                        if (bChanged & bTest) {
                            this.dbg.message("  changed " + reg.sName + "." + reg.aBitIDs[bTest] + " to " + ((b & bTest)? "1" : "0"));
                        }
                        bTest >>= 1;
                    }
                }
            }
            reg.update(b);
        }
    }

    /**
    * @this {C1PDiskController}
    * @param {number} bPDA
    * @param {number} bPDB
    */
    setSelectedDrive(bPDA, bPDB)
    {
        var iDriveSelect = -1;
        if (bPDA !== undefined && bPDB !== undefined) {
            iDriveSelect = 0;
            if (!(bPDB & this.PDB_SD1))
                iDriveSelect |= 0x02;
            if (!(this.regPDA.bits & this.PDA_SD2))
                iDriveSelect |= 0x01;
        }
        if (this.iDriveSelect != iDriveSelect) {
            this.iDriveSelect = iDriveSelect;
            this.regSTAT.update();
        }
    }

    /**
     * @this {C1PDiskController}
     */
    startDriveData()
    {
        if (this.iDriveSelect >= 0) {
            this.aDrives[this.iDriveSelect].iTrackOffset = 0;
            this.advanceDriveData();
        }
    }

    /**
     * @this {C1PDiskController}
     */
    stopDriveData()
    {
        if (this.iDriveSelect >= 0) {
            this.aDrives[this.iDriveSelect].iTrackOffset = -1;
            this.regDATA.update(0xFF);          // QUESTION: Is this necessary or helpful in some way?
            this.regSTAT.update();
        }
    }

    /**
     * @this {C1PDiskController}
     * @return {number} current byte of data from the currently selected drive, or null if no (more) data available
     */
    advanceDriveData()
    {
        var b = null;
        if (this.iDriveSelect >= 0) {
            var drive = this.aDrives[this.iDriveSelect];
            var track = drive.aTracks[drive.iTrackSelect];
            if (track !== undefined) {
                if (drive.iTrackOffset >= 0 && drive.iTrackOffset < track.trackData.length) {
                    drive.nIndexPulse = 100;    // QUESTION: Necessary?
                    b = track.trackData[drive.iTrackOffset++];
                    this.regDATA.update(b);
                    this.regSTAT.update();
                }
                else {
                    drive.nIndexPulse = 10;     // QUESTION: Valid or necessary to force index pulse on next poll of $C000?
                    this.stopDriveData();
                }
            }
        }
        return b;
    }

    /**
     * updatePDA() calculates an updated value for the PDA register.
     *
     * In the process, this may also update iDriveSelect and assorted drive internal variables.
     *
     * @this {C1PDiskController}
     * @param {number|undefined} bPDA
     * @return {number} updated bits for PDA
     */
    updatePDA(bPDA)
    {
        if (bPDA === undefined)
            bPDA = this.regPDA.bits;
        else
            this.setSelectedDrive(bPDA, this.regPDB.bits);

        /*
         * We start by turning ON most bits, except for PDA_RDY1, which we always leave
         * OFF (indicating ready).  We leave PDA_SD2 alone, so that it reflects whatever
         * the CPU had set.
         *
         * Then we dive into the update logic, which will turn OFF any of the bits we
         * originally turned ON if the corresponding condition is true (because an OFF bit
         * signals an active condition).
         */
        bPDA |= (this.PDA_IHD | this.PDA_WP | this.PDA_SHD | this.PDA_FD | this.PDA_TZD | this.PDA_RDY2);
        bPDA &= ~(this.PDA_RDY1);

        if (this.iDriveSelect >= 0) {

            if (this.aDrives[this.iDriveSelect].aTracks.length) {

                var drive = this.aDrives[this.iDriveSelect];

                if (drive.fProtected) {
                    bPDA &= ~this.PDA_WP;
                }
                if (!drive.iTrackSelect) {
                    bPDA &= ~this.PDA_TZD;
                }
                /*
                 * Simulate PHD_IHD (Index Hole Detect)
                 */
                if (--drive.nIndexPulse <= 10) {
                    if (drive.nIndexPulse > 0) {
                        bPDA &= ~this.PDA_IHD;
                        this.stopDriveData();
                    } else {
                        drive.nIndexPulse = 100;
                        this.startDriveData();
                    }
                }
            }
        }
        return bPDA;
    }

    /**
     * updatePDB() calculates an updated value for the PDB register.  However, since the
     * PDB consists entirely of OUTPUT bits, none of the given bits should actually be modified.
     *
     * In the process, this may also update iDriveSelect and assorted drive internal variables,
     * as well as selected PDA INPUT bits (hence the call to regPDA.update()).
     *
     * @this {C1PDiskController}
     * @param {number|undefined} bPDB
     * @return {number} updated bits for PDB
     */
    updatePDB(bPDB)
    {
        if (bPDB === undefined)
            bPDB = this.regPDB.bits;
        else
            this.setSelectedDrive(this.regPDA.bits, bPDB);

        if (this.iDriveSelect >= 0 && this.iDriveSelect < this.aDrives.length) {

            var drive = this.aDrives[this.iDriveSelect];

            if (drive.aTracks.length) {
                /*
                 * Is PDB_ST transitioning from 1 to 0?
                 */
                if ((this.regPDB.bits & this.PDB_ST) && !(bPDB & this.PDB_ST)) {
                    /*
                     *  PDB_STI == 0? step toward track 39 : step toward track 0
                     */
                    if (bPDB & this.PDB_STI)
                        drive.iTrackSelect--;
                    else
                        drive.iTrackSelect++;

                    if (DEBUGGER && this.dbg && this.dbg.messageEnabled(this.dbg.MESSAGE_DISK)) {
                        this.dbg.message("stepping " + ((bPDB & this.PDB_STI)? "down" : "up") + " to track " + drive.iTrackSelect);
                    }

                    if (drive.iTrackSelect >= drive.nTracks)
                        drive.iTrackSelect = drive.nTracks;

                    if (drive.iTrackSelect < 0)
                        drive.iTrackSelect = 0;

                    drive.nIndexPulse = 20;

                    this.regPDA.update(this.regPDA.bits | this.PDA_IHD);
                    this.stopDriveData();
                }
            }
        }
        else if (DEBUG && this.iDriveSelect >= 0) {
            this.println("updatePDB(" + Str.toHexByte(bPDB) + "): invalid drive: " + this.iDriveSelect);
        }
        return bPDB;
    }

    /**
     * updateSTAT() calculates an updated value for the ACIA Status register.
     *
     * @this {C1PDiskController}
     * @param {number|undefined} bSTAT
     * @return {number} updated bits for STAT
     */
    updateSTAT(bSTAT)
    {
        if (bSTAT === undefined)
            bSTAT = this.regSTAT.bits;
        bSTAT &= ~this.STAT_RDRF;
        if (this.iDriveSelect >= 0 && this.aDrives[this.iDriveSelect].iTrackOffset >= 0)
            bSTAT |= this.STAT_RDRF;
        return bSTAT;
    }

    /**
     * @this {C1PDiskController}
     * @param {number} port
     * @param {Object} reg
     */
    writePort(port, reg)
    {
        this.cpu.setByte(port + this.addrController, reg.bits);
    }

    /**
     * @this {C1PDiskController}
     * @param {boolean} fLoaded is true if the selected drive must be loaded, false if don't care
     * @return {Object} drive reference to the selected drive, or null if no drive is selected or it doesn't meet the fLoaded requirement
     *
     getSelectedDrive(fLoaded)
     {
         var drive = null;
         if (this.iDriveSelect >= 0) {
             if (this.aDrives[this.iDriveSelect]) {
                 if (!fLoaded || this.aDrives[this.iDriveSelect].aTracks.length)
                     drive = this.aDrives[this.iDriveSelect];
             }
         }
         return drive;
     }
     */

    /**
     * C1PDiskController.init()
     *
     * This function operates on every HTML element of class "disk", extracting the
     * JSON-encoded parameters for the C1PDiskController constructor from the element's "data-value"
     * attribute, invoking the constructor to create a C1PDiskController component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        var aeDC = Component.getElementsByClass(document, C1PJS.APPCLASS, "disk");
        for (var iDC=0; iDC < aeDC.length; iDC++) {
            var eDC = aeDC[iDC];
            var parmsDC = Component.getComponentParms(eDC);
            var controller = new C1PDiskController(parmsDC);
            Component.bindComponentControls(controller, eDC, C1PJS.APPCLASS);
        }
    }
}

/*
 * Initialize every DiskController module on the page.
 */
Web.onInit(C1PDiskController.init);

/**
 * @copyright https://www.pcjs.org/machines/osi/c1p/lib/debugger.js (C) 2012-2025 Jeff Parsons
 */


/**
 * @class C1PDebugger
 * @unrestricted
 */
class C1PDebugger extends Component {
    /**
     * C1PDebugger(parmsDbg)
     *
     * The C1PDebugger component has no required (parmsDbg) properties.
     *
     * The C1PDebugger component is an optional component that implements a variety of user
     * commands for controlling the CPU, dumping and editing memory, etc.
     *
     * @this {C1PDebugger}
     * @param {Object} parmsDbg
     */
    constructor(parmsDbg)
    {
        super("C1PDebugger", parmsDbg);

        if (DEBUGGER) {

            this.dbg = this;
            /*
             * This keeps track of instruction activity, but only when tracing or when
             * Debugger checks have been enabled (eg, one or more breakpoints have been set).
             *
             * This is zeroed by CPU notification handlers reset() and stopped().
             * We set it here to -1 to indicate that the CPU has not yet initialized us.
             */
            this.cIns = -1;

            /*
             * Some commands, like the dump (d) command, start at nextAddr when no address
             * is given (and they also update nextAddr when they're done).
             */
            this.nextAddr = 0;

            /*
             * When Enter is pressed on an empty input buffer, we default to the previous
             * command, which is preserved here.
             */
            this.prevCmd = null;

            /*
             * fAssemble is true when "assemble mode" is active, false when not.
             */
            this.fAssemble = false;
            this.addrAssembleNext = 0;

            /*
             * Initialize the lists of breakpoint addresses.  aExecBreak is a list (Array) of addresses
             * to halt at whenever attempting to execute an instruction at the corresponding address,
             * and aReadBreak and aWriteBreak are lists of addresses to halt at whenever a read or write,
             * respectively, occurs at the corresponding address.
             */
            this.clearBreakpoints();

            /*
             * Instead of pre-allocating these arrays, we wait until our reset() function is called.
             * These arrays are updated in checkInstruction(), but the CPU will never actually call it
             * unless checksEnabled() returns true, and that won't happen until one or more breakpoints
             * have been set.  This ensures that, by default, the CPU runs as fast as possible.
             */
            this.iStepHistory = 0;
            this.aStepHistory = [];
            this.aaOpcodeFreqs = [];

            /*
             * This "info" buffer is a lightweight logging mechanism that has minimal impact on the
             * browser (unlike printing to either window.console.log or an HTML control, which can make
             * the browser unusable if printing is too frequent).  The Debugger's "i" command dumps
             * this buffer.  Note that dumping too much at once can also bog things down, but by that
             * point, you've presumably already captured the info you need and are willing to wait.
             */
            if (DEBUG) {
                this.iInfoBuffer = 0;
                this.aInfoBuffer = new Array(10000);
            }

            /*
             * Message categories supported by the message() function; they are designed to be combined
             * (ie, OR'ed) as needed.  The Debugger's "option" command is used to turn message categories
             * on and off, like so:
             *
             *      o msg port on
             *      o msg port off
             *      ...
             */
            this.MESSAGE_PORT   = 0x01;
            this.MESSAGE_KBD    = 0x10;
            this.MESSAGE_VIDEO  = 0x20;
            this.MESSAGE_DISK   = 0x40;
            this.MESSAGE_SERIAL = 0x80;
            this.MESSAGE_NONE   = 0x00;
         // this.MESSAGE_ALL    = 0xff;
            this.bitsMessage = this.MESSAGE_NONE;
            this.aMessageCategories = {
                'port':     this.MESSAGE_PORT,
                'kbd':      this.MESSAGE_KBD,
                'video':    this.MESSAGE_VIDEO,
                'disk':     this.MESSAGE_DISK,
                'serial':   this.MESSAGE_SERIAL
            };

            /*
             * The aaOperations array is indexed by opcode, and each element is a sub-array that
             * describes the corresponding opcode. The sub-elements are as follows:
             *
             *      [0]: {number} of the operation code (see OP_*)
             *      [1]: {number} of additional bytes following the opcode byte, if any
             *      [2]: {number} of the operation mode operand, if any (see MODE_*)
             *
             * These sub-elements are all optional. If [0] is not present, the opcode is undefined;
             * if [1] is not present (or contains a zero), the opcode is a single-byte opcode; and if
             * [2] is not present, the opcode uses no (or implied) operands.
             */
            this.OP_ADC = 0;
            this.OP_AND = 1;
            this.OP_ASL = 2;
            this.OP_BCC = 3;
            this.OP_BCS = 4;
            this.OP_BEQ = 5;
            this.OP_BIT = 6;
            this.OP_BMI = 7;
            this.OP_BNE = 8;
            this.OP_BPL = 9;
            this.OP_BRK = 10;
            this.OP_BVC = 11;
            this.OP_BVS = 12;
            this.OP_CLC = 13;
            this.OP_CLD = 14;
            this.OP_CLI = 15;
            this.OP_CLV = 16;
            this.OP_CMP = 17;
            this.OP_CPX = 18;
            this.OP_CPY = 19;
            this.OP_DEC = 20;
            this.OP_DEX = 21;
            this.OP_DEY = 22;
            this.OP_EOR = 23;
            this.OP_INC = 24;
            this.OP_INX = 25;
            this.OP_INY = 26;
            this.OP_JMP = 27;
            this.OP_JSR = 28;
            this.OP_LDA = 29;
            this.OP_LDX = 30;
            this.OP_LDY = 31;
            this.OP_LSR = 32;
            this.OP_NOP = 33;
            this.OP_ORA = 34;
            this.OP_PHA = 35;
            this.OP_PHP = 36;
            this.OP_PLA = 37;
            this.OP_PLP = 38;
            this.OP_ROL = 39;
            this.OP_ROR = 40;
            this.OP_RTI = 41;
            this.OP_RTS = 42;
            this.OP_SBC = 43;
            this.OP_SEC = 44;
            this.OP_SED = 45;
            this.OP_SEI = 46;
            this.OP_STA = 47;
            this.OP_STX = 48;
            this.OP_STY = 49;
            this.OP_TAX = 50;
            this.OP_TAY = 51;
            this.OP_TSX = 52;
            this.OP_TXA = 53;
            this.OP_TXS = 54;
            this.OP_TYA = 55;
            this.OP_SIM = 56;
            this.OP_DB  = 57;

            this.aOpCodes = [
                "ADC","AND","ASL","BCC","BCS","BEQ","BIT","BMI",
                "BNE","BPL","BRK","BVC","BVS","CLC","CLD","CLI",
                "CLV","CMP","CPX","CPY","DEC","DEX","DEY","EOR",
                "INC","INX","INY","JMP","JSR","LDA","LDX","LDY",
                "LSR","NOP","ORA","PHA","PHP","PLA","PLP","ROL",
                "ROR","RTI","RTS","SBC","SEC","SED","SEI","STA",
                "STX","STY","TAX","TAY","TSX","TXA","TXS","TYA",
                "SIM",".DB"
            ];

            this.aOpSimCodes = [
                "HLT", "MSG"
            ];

            this.setOpModes(true);

            this.aaOperations = [
                /* 0x00 */ [this.OP_BRK],
                /* 0x01 */ [this.OP_ORA, 1, this.MODE_INDX],
                /* 0x02 */ [this.OP_SIM, 1],
                /* 0x03 */ [],
                /* 0x04 */ [],
                /* 0x05 */ [this.OP_ORA, 1, this.MODE_ZP],
                /* 0x06 */ [this.OP_ASL, 1, this.MODE_ZP],
                /* 0x07 */ [],
                /* 0x08 */ [this.OP_PHP],
                /* 0x09 */ [this.OP_ORA, 1, this.MODE_IMM],
                /* 0x0a */ [this.OP_ASL, 0, this.MODE_ACC],
                /* 0x0b */ [],
                /* 0x0c */ [],
                /* 0x0d */ [this.OP_ORA, 2, this.MODE_ABS],
                /* 0x0e */ [this.OP_ASL, 2, this.MODE_ABS],
                /* 0x0f */ [],
                /* 0x10 */ [this.OP_BPL, 1, this.MODE_DISP],
                /* 0x11 */ [this.OP_ORA, 1, this.MODE_INDY],
                /* 0x12 */ [],
                /* 0x13 */ [],
                /* 0x14 */ [],
                /* 0x15 */ [this.OP_ORA, 1, this.MODE_ZPX],
                /* 0x16 */ [this.OP_ASL, 1, this.MODE_ZPX],
                /* 0x17 */ [],
                /* 0x18 */ [this.OP_CLC],
                /* 0x19 */ [this.OP_ORA, 2, this.MODE_ABSY],
                /* 0x1a */ [],
                /* 0x1b */ [],
                /* 0x1c */ [],
                /* 0x1d */ [this.OP_ORA, 2, this.MODE_ABSX],
                /* 0x1e */ [this.OP_ASL, 2, this.MODE_ABSX],
                /* 0x1f */ [],
                /* 0x20 */ [this.OP_JSR, 2, this.MODE_IMM16],
                /* 0x21 */ [this.OP_AND, 1, this.MODE_INDX],
                /* 0x22 */ [],
                /* 0x23 */ [],
                /* 0x24 */ [this.OP_BIT, 1, this.MODE_ZP],
                /* 0x25 */ [this.OP_AND, 1, this.MODE_ZP],
                /* 0x26 */ [this.OP_ROL, 1, this.MODE_ZP],
                /* 0x27 */ [],
                /* 0x28 */ [this.OP_PLP],
                /* 0x29 */ [this.OP_AND, 1, this.MODE_IMM],
                /* 0x2a */ [this.OP_ROL, 0, this.MODE_ACC],
                /* 0x2b */ [],
                /* 0x2c */ [this.OP_BIT, 2, this.MODE_ABS],
                /* 0x2d */ [this.OP_AND, 2, this.MODE_ABS],
                /* 0x2e */ [this.OP_ROL, 2, this.MODE_ABS],
                /* 0x2f */ [],
                /* 0x30 */ [this.OP_BMI, 1, this.MODE_DISP],
                /* 0x31 */ [this.OP_AND, 1, this.MODE_INDY],
                /* 0x32 */ [],
                /* 0x33 */ [],
                /* 0x34 */ [],
                /* 0x35 */ [this.OP_AND, 1, this.MODE_ZPX],
                /* 0x36 */ [this.OP_ROL, 1, this.MODE_ZPX],
                /* 0x37 */ [],
                /* 0x38 */ [this.OP_SEC],
                /* 0x39 */ [this.OP_AND, 2, this.MODE_ABSY],
                /* 0x3a */ [],
                /* 0x3b */ [],
                /* 0x3c */ [],
                /* 0x3d */ [this.OP_AND, 2, this.MODE_ABSX],
                /* 0x3e */ [this.OP_ROL, 2, this.MODE_ABSX],
                /* 0x3f */ [],
                /* 0x40 */ [this.OP_RTI],
                /* 0x41 */ [this.OP_EOR, 1, this.MODE_INDX],
                /* 0x42 */ [],
                /* 0x43 */ [],
                /* 0x44 */ [],
                /* 0x45 */ [this.OP_EOR, 1, this.MODE_ZP],
                /* 0x46 */ [this.OP_LSR, 1, this.MODE_ZP],
                /* 0x47 */ [],
                /* 0x48 */ [this.OP_PHA],
                /* 0x49 */ [this.OP_EOR, 1, this.MODE_IMM],
                /* 0x4a */ [this.OP_LSR, 0, this.MODE_ACC],
                /* 0x4b */ [],
                /* 0x4c */ [this.OP_JMP, 2, this.MODE_IMM16],
                /* 0x4d */ [this.OP_EOR, 2, this.MODE_ABS],
                /* 0x4e */ [this.OP_LSR, 2, this.MODE_ABS],
                /* 0x4f */ [],
                /* 0x50 */ [this.OP_BVC, 1, this.MODE_DISP],
                /* 0x51 */ [this.OP_EOR, 1, this.MODE_INDY],
                /* 0x52 */ [],
                /* 0x53 */ [],
                /* 0x54 */ [],
                /* 0x55 */ [this.OP_EOR, 1, this.MODE_ZPX],
                /* 0x56 */ [this.OP_LSR, 1, this.MODE_ZPX],
                /* 0x57 */ [],
                /* 0x58 */ [this.OP_CLI],
                /* 0x59 */ [this.OP_EOR, 2, this.MODE_ABSY],
                /* 0x5a */ [],
                /* 0x5b */ [],
                /* 0x5c */ [],
                /* 0x5d */ [this.OP_EOR, 2, this.MODE_ABSX],
                /* 0x5e */ [this.OP_LSR, 2, this.MODE_ABSX],
                /* 0x5f */ [],
                /* 0x60 */ [this.OP_RTS],
                /* 0x61 */ [this.OP_ADC, 1, this.MODE_INDX],
                /* 0x62 */ [],
                /* 0x63 */ [],
                /* 0x64 */ [],
                /* 0x65 */ [this.OP_ADC, 1, this.MODE_ZP],
                /* 0x66 */ [this.OP_ROR, 1, this.MODE_ZP],
                /* 0x67 */ [],
                /* 0x68 */ [this.OP_PLA],
                /* 0x69 */ [this.OP_ADC, 1, this.MODE_IMM],
                /* 0x6a */ [this.OP_ROR, 0, this.MODE_ACC],
                /* 0x6b */ [],
                /* 0x6c */ [this.OP_JMP, 2, this.MODE_ABS16],
                /* 0x6d */ [this.OP_ADC, 2, this.MODE_ABS],
                /* 0x6e */ [this.OP_ROR, 2, this.MODE_ABS],
                /* 0x6f */ [],
                /* 0x70 */ [this.OP_BVS, 1, this.MODE_DISP],
                /* 0x71 */ [this.OP_ADC, 1, this.MODE_INDY],
                /* 0x72 */ [],
                /* 0x73 */ [],
                /* 0x74 */ [],
                /* 0x75 */ [this.OP_ADC, 1, this.MODE_ZPX],
                /* 0x76 */ [this.OP_ROR, 1, this.MODE_ZPX],
                /* 0x77 */ [],
                /* 0x78 */ [this.OP_SEI],
                /* 0x79 */ [this.OP_ADC, 2, this.MODE_ABSY],
                /* 0x7a */ [],
                /* 0x7b */ [],
                /* 0x7c */ [],
                /* 0x7d */ [this.OP_ADC, 2, this.MODE_ABSX],
                /* 0x7e */ [this.OP_ROR, 2, this.MODE_ABSX],
                /* 0x7f */ [],
                /* 0x80 */ [],
                /* 0x81 */ [this.OP_STA, 1, this.MODE_INDX],
                /* 0x82 */ [],
                /* 0x83 */ [],
                /* 0x84 */ [this.OP_STY, 1, this.MODE_ZP],
                /* 0x85 */ [this.OP_STA, 1, this.MODE_ZP],
                /* 0x86 */ [this.OP_STX, 1, this.MODE_ZP],
                /* 0x87 */ [],
                /* 0x88 */ [this.OP_DEY],
                /* 0x89 */ [],
                /* 0x8a */ [this.OP_TXA],
                /* 0x8b */ [],
                /* 0x8c */ [this.OP_STY, 2, this.MODE_ABS],
                /* 0x8d */ [this.OP_STA, 2, this.MODE_ABS],
                /* 0x8e */ [this.OP_STX, 2, this.MODE_ABS],
                /* 0x8f */ [],
                /* 0x90 */ [this.OP_BCC, 1, this.MODE_DISP],
                /* 0x91 */ [this.OP_STA, 1, this.MODE_INDY],
                /* 0x92 */ [],
                /* 0x93 */ [],
                /* 0x94 */ [this.OP_STY, 1, this.MODE_ZPX],
                /* 0x95 */ [this.OP_STA, 1, this.MODE_ZPX],
                /* 0x96 */ [this.OP_STX, 1, this.MODE_ZPY],
                /* 0x97 */ [],
                /* 0x98 */ [this.OP_TYA],
                /* 0x99 */ [this.OP_STA, 2, this.MODE_ABSY],
                /* 0x9a */ [this.OP_TXS],
                /* 0x9b */ [],
                /* 0x9c */ [],
                /* 0x9d */ [this.OP_STA, 2, this.MODE_ABSX],
                /* 0x9e */ [],
                /* 0x9f */ [],
                /* 0xa0 */ [this.OP_LDY, 1, this.MODE_IMM],
                /* 0xa1 */ [this.OP_LDA, 1, this.MODE_INDX],
                /* 0xa2 */ [this.OP_LDX, 1, this.MODE_IMM],
                /* 0xa3 */ [],
                /* 0xa4 */ [this.OP_LDY, 1, this.MODE_ZP],
                /* 0xa5 */ [this.OP_LDA, 1, this.MODE_ZP],
                /* 0xa6 */ [this.OP_LDX, 1, this.MODE_ZP],
                /* 0xa7 */ [],
                /* 0xa8 */ [this.OP_TAY],
                /* 0xa9 */ [this.OP_LDA, 1, this.MODE_IMM],
                /* 0xaa */ [this.OP_TAX],
                /* 0xab */ [],
                /* 0xac */ [this.OP_LDY, 2, this.MODE_ABS],
                /* 0xad */ [this.OP_LDA, 2, this.MODE_ABS],
                /* 0xae */ [this.OP_LDX, 2, this.MODE_ABS],
                /* 0xaf */ [],
                /* 0xb0 */ [this.OP_BCS, 1, this.MODE_DISP],
                /* 0xb1 */ [this.OP_LDA, 1, this.MODE_INDY],
                /* 0xb2 */ [],
                /* 0xb3 */ [],
                /* 0xb4 */ [this.OP_LDY, 1, this.MODE_ZPX],
                /* 0xb5 */ [this.OP_LDA, 1, this.MODE_ZPX],
                /* 0xb6 */ [this.OP_LDX, 1, this.MODE_ZPY],
                /* 0xb7 */ [],
                /* 0xb8 */ [this.OP_CLV],
                /* 0xb9 */ [this.OP_LDA, 2, this.MODE_ABSY],
                /* 0xba */ [this.OP_TSX],
                /* 0xbb */ [],
                /* 0xbc */ [this.OP_LDY, 2, this.MODE_ABSX],
                /* 0xbd */ [this.OP_LDA, 2, this.MODE_ABSX],
                /* 0xbe */ [this.OP_LDX, 2, this.MODE_ABSY],
                /* 0xbf */ [],
                /* 0xc0 */ [this.OP_CPY, 1, this.MODE_IMM],
                /* 0xc1 */ [this.OP_CMP, 1, this.MODE_INDX],
                /* 0xc2 */ [],
                /* 0xc3 */ [],
                /* 0xc4 */ [this.OP_CPY, 1, this.MODE_ZP],
                /* 0xc5 */ [this.OP_CMP, 1, this.MODE_ZP],
                /* 0xc6 */ [this.OP_DEC, 1, this.MODE_ZP],
                /* 0xc7 */ [],
                /* 0xc8 */ [this.OP_INY],
                /* 0xc9 */ [this.OP_CMP, 1, this.MODE_IMM],
                /* 0xca */ [this.OP_DEX],
                /* 0xcb */ [],
                /* 0xcc */ [this.OP_CPY, 2, this.MODE_ABS],
                /* 0xcd */ [this.OP_CMP, 2, this.MODE_ABS],
                /* 0xce */ [this.OP_DEC, 2, this.MODE_ABS],
                /* 0xcf */ [],
                /* 0xd0 */ [this.OP_BNE, 1, this.MODE_DISP],
                /* 0xd1 */ [this.OP_CMP, 1, this.MODE_INDY],
                /* 0xd2 */ [],
                /* 0xd3 */ [],
                /* 0xd4 */ [],
                /* 0xd5 */ [this.OP_CMP, 1, this.MODE_ZPX],
                /* 0xd6 */ [this.OP_DEC, 1, this.MODE_ZPX],
                /* 0xd7 */ [],
                /* 0xd8 */ [this.OP_CLD],
                /* 0xd9 */ [this.OP_CMP, 2, this.MODE_ABSY],
                /* 0xda */ [],
                /* 0xdb */ [],
                /* 0xdc */ [],
                /* 0xdd */ [this.OP_CMP, 2, this.MODE_ABSX],
                /* 0xde */ [this.OP_DEC, 2, this.MODE_ABSX],
                /* 0xdf */ [],
                /* 0xe0 */ [this.OP_CPX, 1, this.MODE_IMM],
                /* 0xe1 */ [this.OP_SBC, 1, this.MODE_INDX],
                /* 0xe2 */ [],
                /* 0xe3 */ [],
                /* 0xe4 */ [this.OP_CPX, 1, this.MODE_ZP],
                /* 0xe5 */ [this.OP_SBC, 1, this.MODE_ZP],
                /* 0xe6 */ [this.OP_INC, 1, this.MODE_ZP],
                /* 0xe7 */ [],
                /* 0xe8 */ [this.OP_INX],
                /* 0xe9 */ [this.OP_SBC, 1, this.MODE_IMM],
                /* 0xea */ [this.OP_NOP],
                /* 0xeb */ [],
                /* 0xec */ [this.OP_CPX, 2, this.MODE_ABS],
                /* 0xed */ [this.OP_SBC, 2, this.MODE_ABS],
                /* 0xee */ [this.OP_INC, 2, this.MODE_ABS],
                /* 0xef */ [],
                /* 0xf0 */ [this.OP_BEQ, 1, this.MODE_DISP],
                /* 0xf1 */ [this.OP_SBC, 1, this.MODE_INDY],
                /* 0xf2 */ [],
                /* 0xf3 */ [],
                /* 0xf4 */ [],
                /* 0xf5 */ [this.OP_SBC, 1, this.MODE_ZPX],
                /* 0xf6 */ [this.OP_INC, 1, this.MODE_ZPX],
                /* 0xf7 */ [],
                /* 0xf8 */ [this.OP_SED],
                /* 0xf9 */ [this.OP_SBC, 2, this.MODE_ABSY],
                /* 0xfa */ [],
                /* 0xfb */ [],
                /* 0xfc */ [],
                /* 0xfd */ [this.OP_SBC, 2, this.MODE_ABSX],
                /* 0xfe */ [this.OP_INC, 2, this.MODE_ABSX],
                /* 0xff */ []
            ];

        }   // endif DEBUGGER
    }

    /**
     * @this {C1PDebugger}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea", "canvas")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "reset")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @return {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        var dbg = this;
        switch(sBinding) {
        case "debugInput":
            this.bindings[sBinding] = control;
            this.eDebug = /** @type {HTMLInputElement} */ (control);
            this.eDebug.focus();
            control.onkeypress = function(dbg, e) {
                return function(event) {
                    if (event.keyCode == 13) {
                        sBinding = e.value;
                        e.value = "";
                        C1PDebugger.input(dbg, sBinding);
                    }
                };
            }(this, control);
            return true;

        case "debugEnter":
            this.bindings[sBinding] = control;
            /*
             * I've replaced the standard "onclick" code with a call to our onClickRepeat() helper in
             * component.js, so that the "Enter" button can be held to repeat, just like the "Step" button.
             */
            Web.onClickRepeat(
                control, 500, 100,
                function(fRepeat) {
                    if (dbg.eDebug) {
                        sBinding = dbg.eDebug.value;
                        //
                        //  If we want to use the debugEnter button to repeatedly enter the same command,
                        //  then don't clear the command string.
                        //
                        //      dbg.eDebug.value = "";
                        //
                        C1PDebugger.input(dbg, sBinding);
                        return true;
                    }
                    if (DEBUG) dbg.log("no debugger input buffer");
                    return false;
                }
            );
            return true;

        case "step":
            this.bindings[sBinding] = control;
            Web.onClickRepeat(
                control, 500, 100,
                function(fRepeat) {
                    var fCompleted = false;
                    if (!dbg.isBusy(true)) {
                        dbg.setBusy(true);
                        fCompleted = dbg.step(fRepeat? 1 : 0);
                        dbg.setBusy(false);
                    }
                    return fCompleted;
                }
            );
            return true;

        default:
            break;
        }
        return false;
    }

    /**
     * @this {C1PDebugger}
     * @param {Array} abMemory
     * @param {number} start
     * @param {number} end
     */
    setBuffer(abMemory, start, end)
    {
        this.abMem = abMemory;
        this.offMem = start;
        this.cbMem = end - start + 1;
        this.offLimit = this.offMem + this.cbMem;
        this.setReady();
    }

    /**
     * @this {C1PDebugger}
     * @param {boolean} fOn
     * @param {C1PComputer} cmp
     */
    setPower(fOn, cmp)
    {
        if (fOn && !this.flags.powered) {
            this.flags.powered = true;
            this.cpu = cmp.getComponentByType("cpu");
        }
    }

    /**
     * @this {C1PDebugger}
     */
    setFocus()
    {
        this.eDebug.focus();
    }

    /**
     * @this {C1PDebugger}
     * @param {boolean} fClassic is true for "classic" operand syntax, or false for "modern" operand syntax
     *
     * The strings describing the operand(s) also describe the addressing mode, as follows:
     *
     *      bbb     mode    classic     modern         description
     *      ---     ----    -------     -------         ----------------
     *      000     INDX    ($nn,X)     [[nn+X]]        Indexed Indirect
     *      001     ZP      $nn         [nn]            Zero-Page
     *      010     IMM     #$nn        nn              Immediate
     *      011     ABS     $nnnn       [nnnn]          Absolute
     *      100     INDY    ($nn),Y     [[nn]+Y]        Indirect Indexed
     *      101     ZPX     $nn,X       [nn+X]          Zero-Page,X
     *      110     ABSY    $nnnn,Y     [nnnn+Y]        Absolute,Y
     *      111     ABSX    $nnnn,X     [nnnn+X]        Absolute,X
     *
     * where bbb generally corresponds to bits 2-4 of the opcode.  I find that using brackets in the
     * descriptors to indicate a memory access (or multiple brackets, in the case of indirect accesses),
     * along with "+" and any index register, is more intuitive than the "classic" operand formats;
     * the absence of any brackets implies immediate data, eliminating the need for a prepended "#".
     * Also, the use of 2-digit instead of 4-digit addresses indicates that a zero-page address is
     * being used.  Finally, all displacements/addresses and immediate values are displayed in hex by
     * default, so there is no need to waste space prepending the traditional "$" to such values.
     *
     * Other addressing modes:
     *
     *      101     ZPY     $nn,Y           Zero-Page,Y (used by LDX and STX only)
     *
     *              ACC     A               Accumulator
     *
     *              IMM16   $nnnn           Used by JSR (0x20) and JMP (0x4C); I consider this an "Immediate" operation
     *                                      that uses 16 bits, but it is documented as "Absolute" addressing (see Zaks)
     *
     *                                      FYI, this is the same operand format used for branch displacements (MODE_DISP),
     *                                      except the displacements are 8-bit values that are signed-extended to 16 bits, so
     *                                      discriminating between MODE_DISP and MODE_IMM16 also requires checking the operand size
     *
     *              ABS16   ($nnnn)         Used by JMP (0x6C); I consider this an "Absolute" operation that fetches
     *                                      16 bits of data, but it is documented as "Indirect" addressing (see Zaks)
     */
    setOpModes(fClassic)
    {
        /*
         * NOTE: The modes are arranged within aOpModes so that longer matches are checked before
         * any subsets that could also match (eg, check for "$nn,X" before "$nn", "$nnnn,X" before "$nnnn", etc).
         */
        this.MODE_ACC   = 0;
        this.MODE_IMM   = 1;
        this.MODE_ABSX  = 2;
        this.MODE_ABSY  = 3;
        this.MODE_IMM16 = 4;
        this.MODE_ABS16 = 5;
        this.MODE_ZPX   = 6;
        this.MODE_ZPY   = 7;
        this.MODE_INDX  = 8;
        this.MODE_INDY  = 9;
        this.MODE_ABS   = 10;
        this.MODE_ZP    = 11;
        this.MODE_DISP  = this.MODE_IMM16;

        var sRegEx = "";
        var iMode, sMode;

        if (fClassic) {
            this.aOpModes = [
                            "A",            // MODE_ACC
                /* 010b */  "#$nn",         // MODE_IMM
                /* 111b */  "$nnnn,X",      // MODE_ABSX
                /* 110b */  "$nnnn,Y",      // MODE_ABSY
                            "$nnnn",        // MODE_IMM16
                            "($nnnn)",      // MODE_ABS16
                /* 101b */  "$nn,X",        // MODE_ZPX
                            "$nn,Y",        // MODE_ZPY
                /* 000b */  "($nn,X)",      // MODE_INDX
                /* 100b */  "($nn),Y",      // MODE_INDY
                /* 011b */  "$nnnn",        // MODE_ABS
                /* 001b */  "$nn"           // MODE_ZP
            ];
            for (iMode=0; iMode < this.aOpModes.length; iMode++) {
                sMode = this.aOpModes[iMode];
                sRegEx += "(" + sMode.replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/nnnn/g, "[0-9A-F][0-9A-F][0-9A-F][0-9A-F]?").replace(/nn/g, "[0-9A-F][0-9A-F]?").replace(/\$/g, "\\$") + "|)";
            }
            this.regexOpModes = new RegExp(sRegEx);
        }
        else {
            this.aOpModes = [
                            "A",            // MODE_ACC
                /* 010b */  "nn",           // MODE_IMM
                /* 111b */  "[nnnn+X]",     // MODE_ABSX
                /* 110b */  "[nnnn+Y]",     // MODE_ABSY
                            "nnnn",         // MODE_IMM16
                            "[nnnn]",       // MODE_ABS16
                /* 101b */  "[nn+X]",       // MODE_ZPX
                            "[nn+Y]",       // MODE_ZPY
                /* 000b */  "[[nn+X]]",     // MODE_INDX
                /* 100b */  "[[nn]+Y]",     // MODE_INDY
                /* 011b */  "[nnnn]",       // MODE_ABS
                /* 001b */  "[nn]"          // MODE_ZP
            ];
            for (iMode=0; iMode < this.aOpModes.length; iMode++) {
                sMode = this.aOpModes[iMode];
                sRegEx += "(" + sMode.replace(/\[/g, "\\[").replace(/]/g, "\\]").replace(/nnnn/g, "[0-9A-F][0-9A-F][0-9A-F][0-9A-F]?").replace(/nn/g, "[0-9A-F][0-9A-F]?").replace(/\+/g, "\\+") + "|)";
            }
            this.regexOpModes = new RegExp(sRegEx);
        }
        /*
         * Regrettably, if "classic" operand syntax is in effect, then we will have to look at the context of the
         * operand (ie, the operation code) whenever we have a MODE_IMM16 (or MODE_DISP) match, because it might actually
         * be a MODE_ABS operand.  MODE_IMM16 is used with only 2 operations (OP_JSR and OP_JMP), and MODE_DISP only 8
         * (OP_BPL, OP_BMI, OP_BVC, OP_BVS, OP_BCC, OP_BCS, OP_BNE, and OP_BEQ), so if the operation isn't one of those
         * codes (in the following array), then we should convert MODE_IMM16 (aka MODE_DISP) into MODE_ABS.
         */
        this.aImm16Codes = [this.OP_JMP, this.OP_JSR, this.OP_BPL, this.OP_BMI, this.OP_BVC, this.OP_BVS, this.OP_BCC, this.OP_BCS, this.OP_BNE, this.OP_BEQ];
    }

    /**
     * @this {C1PDebugger}
     */
    halt()
    {
        /*
         * We ask the CPU to halt, but we can't assume it's stopped until it calls stop()
         */
        this.cpu.halt();
    }

    /**
     * @this {C1PDebugger}
     * @param {string} s is any diagnostic string that you can print later using the Debugger's "i" command
     */
    info(s)
    {
        if (DEBUG) {
            this.aInfoBuffer[this.iInfoBuffer++] = s;
            if (this.iInfoBuffer >= this.aInfoBuffer.length)
                this.iInfoBuffer = 0;
        }
    }

    /**
     * @this {C1PDebugger}
     * @param {Component} component
     * @param {number} addr
     * @param {number|undefined} addrFrom
     * @param {boolean} bitsMessage is a Debugger MESSAGE_* category flag
     * @param {boolean|undefined} [fWrite] is true if this was a write, false (or undefined) if read
     * @param {string|undefined} [name] of the port, if any
     */
    messageIO(component, addr, addrFrom, bitsMessage, fWrite, name)
    {
        if ((this.bitsMessage & bitsMessage) == bitsMessage) {
            var b = this.cpu.getByte(addr);
            this.message(component.id + "." + (fWrite? "setByte":"getByte") + "(" + Str.toHexWord(addr) + ")" + (addrFrom !== undefined? (" @" + Str.toHexWord(addrFrom)) : "") + ": " + (name? (name + "=") : "") + Str.toHexByte(b));
        }
    }

    /**
     * @this {C1PDebugger}
     * @param {string} sMessage is any caller-defined message string
     */
    message(sMessage)
    {
        this.println(sMessage);
        this.cpu.yieldCPU();    // these print() calls are at risk of being called with high frequency, so we need to yieldCPU() more
    }

    /**
     * @this {C1PDebugger}
     */
    init()
    {
        // this.doHelp();
        this.println("Type ? for list of debugger commands\n");
    }

    /**
     * @this {C1PDebugger}
     * @return {boolean}
     */
    run()
    {
        if (!this.isCPUOK()) return false;
        this.cpu.run();
        return true;
    }

    /**
     * @this {C1PDebugger}
     * @param {number} n (0 implies a single-step, and therefore breakpoints should be ignored)
     * @return {boolean}
     */
    step(n)
    {
        if (!this.isCPUOK()) return false;
        var fCompleted;
        try {
            fCompleted = this.cpu.step(n);
        }
        catch(e) {
            fCompleted = undefined;
            this.cpu.setError(e.stack || e.message);
        }
        if (fCompleted !== undefined) this.cIns++;
        /*
         * Because we called cpu.step() and not cpu.run(), we must
         * nudge the CPU's update code, and then update our own state.
         */
        this.cpu.update(true);
        this.update(true);
        return fCompleted;
    }

    /**
     * @this {C1PDebugger}
     * @param {boolean} [fStep]
     */
    update(fStep)
    {
        this.nextAddr = this.cpu.regPC;
        if (fStep || this.fStepOver)
            this.doUnassemble();
        else
            this.doRegisters();
    }

    /**
     * @this {C1PDebugger}
     * @return {boolean}
     *
     * Make sure the CPU is ready (finished initializing), not busy (already running), and not in an error state.
     */
    isCPUOK()
    {
        if (!this.cpu)
            return false;
        if (!this.cpu.isReady())
            return false;
        if (this.cpu.isBusy())
            return false;
        return !this.cpu.isError();
    }

    /**
     * @this {C1PDebugger}
     *
     * This is a notification handler, called by the CPU, to inform us that the CPU has been reset.
     */
    reset()
    {
        var i;
        if (!this.aStepHistory.length)
            this.aStepHistory = new Array(1000);
        for (i = 0; i < this.aStepHistory.length; i++)
            this.aStepHistory[i] = -1;
        if (!this.aaOpcodeFreqs.length)
            this.aaOpcodeFreqs = new Array(256);
        for (i = 0; i < this.aaOpcodeFreqs.length; i++)
            this.aaOpcodeFreqs[i] = [i, 0];
        if (this.cIns) this.update();
        this.cIns = 0;
        this.cReads = this.cWrites = this.cWritesZP = 0;
    }

    /**
     * @this {C1PDebugger}
     *
     * This is a notification handler, called by the CPU, to inform us that the CPU has started running.
     */
    start()
    {
        if (!this.fStepOver) this.println("running");
    }

    /**
     * @this {C1PDebugger}
     * @param {number} msStart
     * @param {number} nCycles
     *
     * This is a notification handler, called by the CPU, to inform us that the CPU has now stopped running.
     */
    stop(msStart, nCycles)
    {
        if (!this.fStepOver) {
            this.println("stopped");
            if (nCycles) {
                var msTotal = Component.getTime();
                msTotal -= msStart;
                this.println(msTotal + "ms (" + nCycles + " cycles)");
                if (DEBUG && msTotal > 0) {
                    nCycles = nCycles * 1000 / msTotal;
                    this.println("total cycles/second: " + Math.round(nCycles));
                    var percent = Math.round((this.cIns? this.cReads / this.cIns : 0) * 1000) / 10;
                    this.println("total reads: " + this.cReads + " (" + percent + "%)");
                    percent = Math.round((this.cIns? this.cWrites / this.cIns : 0) * 1000) / 10;
                    this.println("total writes: " + this.cWrites + " (" + percent + "%)");
                    percent = Math.round((this.cIns? this.cWritesZP / this.cIns : 0) * 1000) / 10;
                    this.println("total zero-page writes: " + this.cWritesZP + " (" + percent + "%)");
                    this.println("total instructions: " + this.cIns);
                }
            }
        }
        this.update();
        this.setFocus();
        if (!this.fStepOver) {
            this.cIns = 0;
            this.cReads = this.cWrites = this.cWritesZP = 0;
        }
        this.clearTempBreakpoint(this.cpu.regPC);
    }

    /**
     * @this {C1PDebugger}
     *
     * This is a check function, called by the CPU, indicating whether other instructions need to be checked.
     */
    checksEnabled()
    {
        return (DEBUG? true : (this.aExecBreak.length > 0 || this.aReadBreak.length > 0 || this.aWriteBreak.length > 0));
    }

    /**
     * @this {C1PDebugger}
     * @param {number} addr
     * @param {number} bOpCode
     * @return {boolean} true to proceed, false to halt
     *
     * This is a check function, called by the CPU, to inform us about the next instruction to be executed, giving
     * us an opportunity to look for "exec" breakpoints and update opcode frequencies and instruction history.
     */
    checkInstruction(addr, bOpCode)
    {
        var fBreak = false;
        if (this.checkBreakpoint(addr, this.aExecBreak, "exec"))
            fBreak = true;
        else {
            this.cIns++;
            this.aaOpcodeFreqs[bOpCode][1]++;
            this.aStepHistory[this.iStepHistory++] = this.cpu.regPC;
            if (this.iStepHistory >= this.aStepHistory.length)
                this.iStepHistory = 0;
        }
        return !fBreak;
    }

    /**
     * @this {C1PDebugger}
     * @param {number} addr
     * @return {boolean} true to proceed, false to halt
     *
     * This is a check function, called by the CPU, to inform us that a memory read occurred, giving us an
     * opportunity to track the read if we want, and look for a matching "read" breakpoint, if any.
     */
    checkMemoryRead(addr)
    {
        var fBreak = false;
        this.cReads++;
        if (this.checkBreakpoint(addr, this.aReadBreak, "read"))
            fBreak = true;
        return !fBreak;
    }

    /**
     * @this {C1PDebugger}
     * @param {number} addr
     * @param {number} value written
     * @return {boolean} true to proceed, false to halt
     *
     * This is a check function, called by the CPU, to inform us that a memory write occurred, giving us an
     * opportunity to track the write if we want, and look for a matching "write" breakpoint, if any.
     */
    checkMemoryWrite(addr, value)
    {
        var fBreak = false;
        this.cWrites++;
        /*
         * NOTE: We keep track of zero-page writes mainly as a reminder to look into whether it makes sense
         * for the CPU to calculate zero-page EAs using a different variable (eg, regEAWriteZP instead of regEAWrite),
         * because write-notification handlers never care about page zero accesses, and while write breakpoints *may*
         * care, it may not be worth the cost of tracking writes to page zero if there's an associated perf penalty.
         */
        if (!(addr & 0xff00))
            this.cWritesZP++;
        if ((value & 0xff) != value) {
            this.println("invalid value at " + Str.toHexWord(addr) + ": " + value);
            fBreak = true;
        }
        if (this.checkBreakpoint(addr, this.aWriteBreak, "write"))
            fBreak = true;
        return !fBreak;
    }

    /**
     * @this {C1PDebugger}
     * @param {number} addr
     * @param {number} b
     * @return {number}
     */
    addSignedByte(addr, b)
    {
        return addr + ((b << 24) >> 24);
    }

    /**
     * getByte() should be used for all memory reads performed by the Debugger (eg, doDump, doUnassemble),
     * to insure that the CPU is properly notified (and by extension, any device that's registered a
     * notification handler with the CPU).
     *
     * @this {C1PDebugger}
     * @param {number} addr
     * @return {number|undefined}
     */
    getByte(addr)
    {
        var b;
        if (addr >= this.offMem && addr < this.offLimit) {
            this.cpu.checkReadNotify(addr);
            b = this.abMem[this.offMem + addr];

            b &= 0xff;
        }
        return b;
    }

    /**
     * setByte() should be used for all memory writes performed by the Debugger (eg, doAssemble, doEdit),
     * to insure that the CPU is properly notified (and by extension, any device that's registered a
     * notification handler with the CPU).
     *
     * NOTE: Even though we call all write-notification handlers, we don't include a "from" address,
     * because the write originated from the Debugger, not from a CPU instruction.  As a result, handlers should
     * not refuse the write unless they have good reason; in particular, the ROM handlers will not refuse our writes,
     * allowing the Debugger to modify ROM contents as needed.
     *
     * @this {C1PDebugger}
     * @param {number} addr
     * @param {number} b
     */
    setByte(addr, b)
    {
        if (addr < this.offMem || addr >= this.offLimit) {
            this.println("invalid address: " + Str.toHexWord(addr));
            return;
        }
        this.abMem[this.offMem + addr] = (b & 0xff);
        this.cpu.checkWriteNotify(addr);
        this.cpu.update();
    }

    /**
     * @this {C1PDebugger}
     */
    clearBreakpoints()
    {
        this.aExecBreak = [];
        this.aReadBreak = [];
        this.aWriteBreak = [];
    }

    /**
     * @this {C1PDebugger}
     * @param {number} addr
     * @return {boolean}
     */
    addExecBreakpoint(addr)
    {
        if (!this.findExecBreakpoint(addr)) {
            this.aExecBreak.push(addr);
        }
        return true;
    }

    /**
     * @this {C1PDebugger}
     * @param {number} addr
     * @return {boolean}
     */
    addReadBreakpoint(addr)
    {
        if (!this.findReadBreakpoint(addr)) {
            this.aReadBreak.push(addr);
        }
        return true;
    }

    /**
     * @this {C1PDebugger}
     * @param {number} addr
     * @return {boolean}
     */
    addWriteBreakpoint(addr)
    {
        if (!this.findWriteBreakpoint(addr)) {
            this.aWriteBreak.push(addr);
        }
        return true;
    }

    /**
     * @this {C1PDebugger}
     * @return {Array}
     */
    getExecBreakpoints()
    {
        return this.aExecBreak;
    }

    /**
     * @this {C1PDebugger}
     * @return {Array}
     */
    getReadBreakpoints()
    {
        return this.aReadBreak;
    }

    /**
     * @this {C1PDebugger}
     * @return {Array}
     */
    getWriteBreakpoints()
    {
        return this.aWriteBreak;
    }

    /**
     * @this {C1PDebugger}
     * @param {Array} aBreak
     * @param {number} addr
     * @param {boolean} [fRemove]
     * @return {boolean}
     */
    findBreakpoint(aBreak, addr, fRemove)
    {
        var fMatch = false;
        for (var i=0; i < aBreak.length; i++) {
            if (aBreak[i] == addr) {
                if (fRemove) {
                    aBreak.splice(i, 1);
                }
                fMatch = true;
                break;
            }
        }
        return fMatch;
    }

    /**
     * @this {C1PDebugger}
     * @param {number} addr
     * @param {boolean} [fRemove]
     * @return {boolean}
     */
    findExecBreakpoint(addr, fRemove)
    {
        return this.findBreakpoint(this.aExecBreak, addr, fRemove);
    }

    /**
     * @this {C1PDebugger}
     * @param {number} addr
     * @param {boolean} [fRemove]
     * @return {boolean}
     */
    findReadBreakpoint(addr, fRemove)
    {
        return this.findBreakpoint(this.aReadBreak, addr, fRemove);
    }

    /**
     * @this {C1PDebugger}
     * @param {number} addr
     * @param {boolean} [fRemove]
     * @return {boolean}
     */
    findWriteBreakpoint(addr, fRemove)
    {
        return this.findBreakpoint(this.aWriteBreak, addr, fRemove);
    }

    /**
     * @this {C1PDebugger}
     * @param {number|undefined} addr of new temp breakpoint
     */
    setTempBreakpoint(addr)
    {
        if (addr !== undefined) {
            /*
             * I don't want temporary breakpoints growing out of control, so I forcibly clear any
             * existing temp breakpoint by feeding clearTempBreakpoint() the current temp address, if any;
             * but you can remove the next line if you decide multiple temp breakpoints are a good thing.
             */
            this.clearTempBreakpoint(this.addrTempBP);
            if (this.addExecBreakpoint(addr))
                this.addrTempBP = addr;
        }
    }

    /**
     * @this {C1PDebugger}
     * @param {number} addr to compare to addrTempBP; the latter is cleared if there's a match
     */
    clearTempBreakpoint(addr)
    {
        if (this.addrTempBP !== undefined && addr == this.addrTempBP) {
            if (this.findExecBreakpoint(this.addrTempBP, true)) {
                this.addrTempBP = undefined;
            }
        }
        this.fStepOver = false;
    }

    /**
     * @this {C1PDebugger}
     * @param {number} addr
     * @param {Array} aBreakpoints
     * @param {string} sType (ie, "exec" or "write")
     * @return {boolean} true if breakpoint has been hit, false if not
     */
    checkBreakpoint(addr, aBreakpoints, sType)
    {
        /*
         * Time to check for execution breakpoints; note that this should be done BEFORE updating any of the frequency
         * or history data (see checkInstruction), since we might not actually execute the current instruction.
         */
        var fBreak = false;
        for (var i=0; i < aBreakpoints.length; i++) {
            if (aBreakpoints[i] == addr) {
                if (addr != this.addrTempBP)
                    this.println("breakpoint hit: " + Str.toHexWord(addr) + " (" + sType + ")");
                fBreak = true;
                break;
            }
        }
        return fBreak;
    }

    /**
     * @this {C1PDebugger}
     * @param {number} addr
     * @param {number} [nIns] is an associated instruction number, or 0 (or undefined) if none
     * @return {string}
     */
    getInstruction(addr, nIns)
    {
        var sLine = Str.toHex(addr, 4);
        var bOpCode = this.getByte(addr++);
        var b = (bOpCode === undefined? 0 : bOpCode);
        var aOpDesc = this.aaOperations[b];
        var abOperand = [];
        var cb = (aOpDesc[1] === undefined? 0 : aOpDesc[1]);
        do {
            sLine += " " + Str.toHex(b, 2);
            if (!(cb--)) break;
            b = this.getByte(addr++);
            if (b === undefined) break;
            abOperand.push(b);
        } while (true);
        if (aOpDesc[0] === undefined) {
            aOpDesc = [this.OP_DB, 1, this.MODE_IMM];
            abOperand.push(bOpCode);
        }
        sLine = (sLine + "        ").substr(0, 15);
        sLine += this.aOpCodes[aOpDesc[0]];
        var sOperand = null;
        if (aOpDesc[2] !== undefined) {
            var bOpMode = aOpDesc[2];
            sOperand = this.aOpModes[bOpMode];
            if (aOpDesc[1] == 1 && bOpMode == this.MODE_DISP) {
                sOperand = sOperand.replace(/nnnn/, Str.toHex(this.addSignedByte(addr, b = abOperand.pop()), 4));
            }
            else {
                while (abOperand.length) {
                    sOperand = sOperand.replace(/nn/, Str.toHex(b = abOperand.pop(), 2));
                }
            }
            if (bOpMode == this.MODE_IMM && aOpDesc[1] == 1) {
                if (b >= 0x20 && b < 0x80)
                    sOperand += " ;'" + String.fromCharCode(b) + "'";
            }
        }
        if (bOpCode == this.cpu.OP_SIM) {
            if (b < this.aOpSimCodes.length)
                sOperand = this.aOpSimCodes[b];
            if (b == this.cpu.SIMOP_MSG) {
                cb = 0;
                sOperand = "\"";
                while ((b = this.getByte(addr++))) {
                    if (cb < 16)
                        sOperand += String.fromCharCode(b);
                    else if (cb == 16)
                        sOperand += "…";
                    cb++;
                }
                sOperand += "\"";
            }
        }
        if (sOperand) sLine += " " + sOperand;
        if (nIns) {
            sLine += "               ";
            sLine = sLine.substr(0, 30);
            sLine += ";" + nIns.toString();
        }
        this.nextIns = addr;
        return sLine;
    }

    /**
     * parseInstruction(sCode, sOperand, addr)
     *
     * This generally requires an exact match of both the operation code (sCode) and mode operand (sOperand)
     * against the aOpCodes[] and aOpModes[] arrays, respectively; however, the regular expression built from
     * aOpModes and stored in regexOpModes does relax the matching criteria slightly; ie, a 4-digit hex value
     * ("nnnn") will be satisfied with either 3 or 4 digits, and similarly, a 2-digit hex address (nn) will
     * be satisified with either 1 or 2 digits.
     *
     * Note that this function does not actually store the instruction into memory, even though it requires
     * a target address (addr); that parameter is currently needed ONLY for "branch" instructions, because in
     * order to calculate the branch displacement, it needs to know where the instruction will ultimately be
     * stored, relative to its target address.
     *
     * Another handy feature of this function is its ability to display all available modes for a particular
     * operation. For example, while in "assemble mode", if one types:
     *
     *      ldy?
     *
     * the Debugger will display:
     *
     *      supported opcodes:
     *           A0: LDY nn
     *           A4: LDY [nn]
     *           AC: LDY [nnnn]
     *           B4: LDY [nn+X]
     *           BC: LDY [nnnn+X]
     *
     * Use of a trailing "?" on any opcode will display all variations of that opcode; no instruction will be
     * assembled, and the operand parameter, if any, will be ignored.
     *
     * Although this function is capable of reporting numerous errors, roughly half of them indicate internal
     * consistency errors, not user errors; the former should really be asserts, but I'm not comfortable bombing
     * out because of my error as opposed to their error.  The only errors a user should expect to see:
     *
     *      "unknown operation":    sCode is not a valid operation (per aOpCodes)
     *      "unknown operand":      sOperand is not a valid operand (per aOpModes)
     *      "unknown instruction":  the combination of sCode + sOperand does not exist (per aaOperations)
     *      "branch out of range":  the branch address, relative to addr, is too far away
     *
     * @this {C1PDebugger}
     * @param {string} sCode
     * @param {string|undefined} sOperand
     * @param {number} addr of memory where this instruction is being assembled
     * @return {Array.<number>} of opcode bytes; if the instruction can't be parsed, the array will be empty
     */
    parseInstruction(sCode, sOperand, addr)
    {
        var aOpBytes = [];
        if (sCode !== undefined) {
            var iCode, iMode;
            /*
             * Find the iCode that corresponds to the given operation code
             */
            sCode = sCode.toUpperCase();
            if (sCode.charAt(sCode.length-1) == "?") {
                sOperand = "?";
                sCode = sCode.substr(0, sCode.length-1);
            }
            for (iCode=0; iCode < this.aOpCodes.length; iCode++) {
                if (sCode == this.aOpCodes[iCode]) {
                    break;
                }
            }
            if (iCode == this.aOpCodes.length) {
                this.println("unknown operation: " + sCode);
                iCode = -1;
            }
            var sMode = "", aModeMatch, i;
            if (iCode >= 0 && sOperand !== undefined) {
                sMode = sOperand.toUpperCase();
                if (sMode == "?") {
                    var cModes = 0;
                    for (i = 0; i < this.aaOperations.length; i++) {
                        if (this.aaOperations[i][0] === iCode) {
                            if (!cModes) this.println("supported opcodes:");
                            this.println("     " + Str.toHex(i, 2) + ": " + sCode + (this.aaOperations[i][2] !== undefined? (" " + this.aOpModes[this.aaOperations[i][2]]) : ""));
                            cModes++;
                        }
                    }
                    iCode = -1;
                }
                else {
                    /*
                     * Find the iMode that corresponds to the given operand
                     */
                    aModeMatch = sMode.match(this.regexOpModes);
                    if (aModeMatch !== null && aModeMatch[0] == sMode) {
                        /*
                         * One of the sub-patterns must have matched as well; the index of the matching
                         * sub-pattern will correspond to the proper aOpModes index, albeit off-by-one since
                         * the regex match at [0] is the complete match, not a sub-pattern match.
                         */
                        for (i = 1; i < aModeMatch.length; i++) {
                            if (aModeMatch[i] == sMode) {
                                if (iMode === undefined)
                                    iMode = i-1;
                                else {
                                    /*
                                     * This is really an internal consistency error; regardless what the user types, this should not occur.
                                     */
                                    //noinspection JSUnusedAssignment
                                    this.println("too many operand matches (both " + this.aOpModes[iMode] + " and " + this.aOpModes[i-1] + ")");
                                    iCode = -1;
                                    break;
                                }
                            }
                        }
                        /*
                         * Regrettably, if "classic" operand syntax is in effect, then we must look at the context of the
                         * operand (ie, the operation code) whenever we have a MODE_IMM16 (or MODE_DISP) match, because it might
                         * actually be a MODE_ABS operand; see setOpModes() for details of the aImm16Codes array.
                         */
                        if (iMode == this.MODE_IMM16) {
                            if (this.aImm16Codes.indexOf(iCode) < 0)
                                iMode = this.MODE_ABS;
                        }
                        /*
                         * Even in "modern" syntax mode, we have to look at the context of a MODE_ABS16 match, because unless
                         * the operation is OP_JMP, then the mode must actually be MODE_ABS.
                         */
                        if (iMode == this.MODE_ABS16) {
                            if (iCode != this.OP_JMP)
                                iMode = this.MODE_ABS;
                        }
                    }
                    else {
                        this.println("unknown operand: " + sMode);
                        iCode = -1;
                    }
                }
            }
            if (iCode >= 0) {
                /*
                 * So we have an iCode and possibly an iMode; find the one (and hopefully only) aaOperations instruction entry that matches
                 */
                var bOpCode = -1;
                for (i = 0; i < this.aaOperations.length; i++) {
                    if (this.aaOperations[i][0] === iCode && this.aaOperations[i][2] === iMode) {
                        if (bOpCode < 0)
                            bOpCode = i;
                        else {
                            /*
                             * This is really an internal consistency error; regardless what the user types, this should not occur.
                             */
                            this.println("too many instruction matches (both " + Str.toHexByte(bOpCode) + " and " + Str.toHexByte(i) + ")");
                            bOpCode = -2;
                            break;
                        }
                    }
                }
                if (bOpCode >= 0) {
                    aOpBytes.push(bOpCode);
                    if (iMode !== undefined) {
                        var cb = this.aaOperations[bOpCode][1];
                        var asHex = sMode.match(/[0-9A-F]+/);
                        if (asHex !== null) {
                            var nHex = parseInt(asHex[0], 16);
                            if (cb == 1 && iMode == this.MODE_DISP) {
                                nHex -= (addr + 2);
                                if (nHex < -128 || nHex > 127) {
                                    this.println("branch out of range (" + nHex + ")");
                                    aOpBytes = [];
                                    cb = 0;
                                }
                            }
                            for (i = 0; i < cb; i++) {
                                aOpBytes.push(nHex & 0xff);
                                nHex >>>= 8;
                            }
                        }
                        else if (cb) {
                            /*
                             * This is really an internal consistency error; regardless what the user types, this should not occur.
                             */
                            this.println("instruction missing " + cb + " bytes");
                        }
                    }
                }
                else {
                    this.println("unknown instruction: " + sCode + " " + sMode + (DEBUG? (" (" + iMode + ")") : ""));
                }
            }
        }
        return aOpBytes;
    }

    /**
     * @this {C1PDebugger}
     * @return {string}
     */
    getRegs()
    {
        return "A=" + Str.toHex(this.cpu.regA, 2) +
              " X=" + Str.toHex(this.cpu.regX, 2) +
              " Y=" + Str.toHex(this.cpu.regY, 2) +
              " P=" + Str.toHex(this.cpu.getRegP(), 2) +
              " S=" + Str.toHex(this.cpu.regS, 4) +
              " PC=" + Str.toHex(this.cpu.regPC, 4);
    }

    /**
     * @this {C1PDebugger}
     * @param {string|undefined} [sAddr]
     * @return {number|undefined}
     */
    getUserAddr(sAddr)
    {
        var addr = this.nextAddr;
        if (sAddr !== undefined) {
            var nBase = 16;
            if (sAddr.charAt(0) == "$")
                sAddr = sAddr.substr(1);
            else
            if (sAddr.substr(0, 2) == "0x")
                sAddr = sAddr.substr(2);
            else
            if (sAddr.charAt(sAddr.length-1) == ".") {
                nBase = 10;
                sAddr = sAddr.substr(0, sAddr.length-1);
            }
            addr = parseInt(sAddr, nBase);
            if (isNaN(addr)) {
                this.println("invalid base-" + nBase + " address: " + sAddr);
                addr = undefined;
            }
        }
        if (addr !== undefined && (addr < this.offMem || addr >= this.offLimit)) {
            this.println("address out of range: " + Str.toHex(addr));
            addr = undefined;
        }
        return addr;
    }

    /**
     * @this {C1PDebugger}
     */
    doHelp()
    {
        this.println("\ncommands:\n?\thelp\na [#]\tassemble\nb [#]\tbreakpoint\nd [#]\tdump memory\ne [#]\tedit memory\nf\tdump frequencies\ng [#]\trun to [#]\nh\thalt\no\toptions\np [#]\tdump history\nr\tdump/edit registers\ns\tstep over instruction\nt [#]\tstep instruction(s)\nu [#]\tunassemble");
        this.println("note: frequency and history commands operate only when breakpoints are set");
    }

    /**
     * doAssemble() always receives the complete argument array, where the order of the arguments is:
     *
     *      [0]: the assemble command (assumed to be "a")
     *      [1]: the target address (eg, "200")
     *      [2]: the operation code, aka mnemonic (eg, "adc")
     *      [3]: the operation mode operand, if any (eg, "14", "[1234]", etc)
     *
     * The Debugger enters "assemble mode" whenever only the first (or first and second) arguments are present.
     * As long as "assemble mode is active, the user can omit the first two arguments on all later assemble commands
     * until "assemble mode" is cancelled with an empty command line; the command processor automatically prepends "a"
     * and the next available target address to the argument array.
     *
     * Entering "assemble mode" is optional; one could enter a series of fully-qualified assemble commands; eg:
     *
     *      a ff00 cld
     *      a ff01 ldx 28
     *      ...
     *
     * without ever entering "assemble mode", but of course, that requires more typing and doesn't take advantage
     * of automatic target address advancement (see addrAssembleNext).
     *
     * NOTE: As the previous example implies, you can even assemble new instructions into ROM address space;
     * as our setByte() function explains, the ROM write-notification handlers only refuse writes from the CPU.
     *
     * @this {C1PDebugger}
     * @param {Array.<string>} asArgs is the complete argument array, beginning with the "a" command in asArgs[0]
     */
    doAssemble(asArgs)
    {
        var addr = this.getUserAddr(asArgs[1]);
        if (addr === undefined)
            return;
        this.addrAssembleNext = addr;
        if (asArgs[2] === undefined) {
            this.println("begin assemble @" + Str.toHexWord(this.addrAssembleNext));
            this.fAssemble = true;
            this.cpu.update();
            return;
        }
        var aOpBytes = this.parseInstruction(asArgs[2], asArgs[3], this.addrAssembleNext);
        if (aOpBytes.length) {
            for (var i=0; i < aOpBytes.length; i++) {
                // this.println(Str.toHexWord(this.addrAssembleNext) + ": " + Str.toHexByte(aOpBytes[i]));
                this.setByte(this.addrAssembleNext+i, aOpBytes[i]);
            }
            this.println(this.getInstruction(this.addrAssembleNext));
            this.addrAssembleNext += aOpBytes.length;
        }
    }

    /**
     * @this {C1PDebugger}
     * @param {string} [sParm]
     * @param {string} [sAddr]
     */
    doBreak(sParm, sAddr)
    {
        if (sParm === undefined || sParm == "?") {
            this.println("\nbreakpoint commands:");
            this.println("bp [a]\tset exec breakpoint at [a]");
            this.println("br [a]\tset read breakpoint at [a]");
            this.println("bw [a]\tset write breakpoint at [a]");
            this.println("bc [a]\tclear breakpoint at [a]");
            this.println("bl\tlist all breakpoints");
            return;
        }
        if (sAddr === undefined && sParm.length > 1) {
            sAddr = sParm.substr(1);
            sParm = sParm.substr(0, 1);
        }
        if (sParm == "l") {
            var cBreaks = 0, i;
            var aAddrs = this.getExecBreakpoints();
            for (i = 0; i < aAddrs.length; i++) {
                this.println("breakpoint enabled: " + Str.toHexWord(aAddrs[i]) + " (exec)");
                cBreaks++;
            }
            aAddrs = this.getReadBreakpoints();
            for (i = 0; i < aAddrs.length; i++) {
                this.println("breakpoint enabled: " + Str.toHexWord(aAddrs[i]) + " (read)");
                cBreaks++;
            }
            aAddrs = this.getWriteBreakpoints();
            for (i = 0; i < aAddrs.length; i++) {
                this.println("breakpoint enabled: " + Str.toHexWord(aAddrs[i]) + " (write)");
                cBreaks++;
            }
            if (!cBreaks)
                this.println("no breakpoints");
            return;
        }
        if (sAddr === undefined) {
            this.println("missing breakpoint address");
            return;
        }
        if (sParm == "c" && sAddr == "*") {
            this.clearBreakpoints();
            this.println("all breakpoints cleared");
            return;
        }
        var addr = this.getUserAddr(sAddr);
        if (addr === undefined)
            return;
        if (sParm == "p") {
            if (this.addExecBreakpoint(addr))
                this.println("breakpoint enabled: " + Str.toHexWord(addr) + " (exec)");
            else
                this.println("breakpoint not set: " + Str.toHexWord(addr));
            return;
        }
        if (sParm == "c") {
            if (this.findExecBreakpoint(addr, true))
                this.println("breakpoint cleared: " + Str.toHexWord(addr) + " (exec)");
            else
            if (this.findReadBreakpoint(addr, true))
                this.println("breakpoint cleared: " + Str.toHexWord(addr) + " (read)");
            else
            if (this.findWriteBreakpoint(addr, true))
                this.println("breakpoint cleared: " + Str.toHexWord(addr) + " (write)");
            else
                this.println("breakpoint missing: " + Str.toHexWord(addr));
            return;
        }
        if (sParm == "r") {
            if (this.addReadBreakpoint(addr))
                this.println("breakpoint enabled: " + Str.toHexWord(addr) + " (read)");
            else
                this.println("breakpoint not set: " + Str.toHexWord(addr));
            return;
        }
        if (sParm == "w") {
            if (this.addWriteBreakpoint(addr))
                this.println("breakpoint enabled: " + Str.toHexWord(addr) + " (write)");
            else
                this.println("breakpoint not set: " + Str.toHexWord(addr));
            return;
        }
        this.println("unknown breakpoint command: " + sParm);
    }

    /**
     * @this {C1PDebugger}
     * @param {string} sAddr
     * @param {string} sLen
     */
    doDump(sAddr, sLen)
    {
        if (sAddr == "?") {
            this.println("\ndump commands:");
            this.println("d [a] [#]    dump # lines of memory");
            return;
        }
        var addr = this.getUserAddr(sAddr);
        if (addr === undefined)
            return;
        var cLines = 0;
        if (sLen !== undefined) {
            if (sLen.charAt(0) == "l")
                sLen = sLen.substr(1);
            cLines = parseInt(sLen, 10);
        }
        if (!cLines) cLines = 1;
        for (var line=0; line < cLines; line++) {
            var sBytes = "";
            var sChars = "";
            var addrLine = addr;
            for (var i=0; i < 8 && addr < this.offLimit; i++) {
                var b = this.getByte(addr);
                if (b === undefined) b = 0;
                sBytes += Str.toHex(b, 2) + " ";
                sChars += (b >= 32 && b < 127? String.fromCharCode(b) : ".");
                addr++;
            }
            this.println(Str.toHex(addrLine, 4) + " " + sBytes + sChars);
        }
        this.nextAddr = addr;
    }

    /**
     * @this {C1PDebugger}
     * @param {Array.<string>} asArgs
     */
    doEdit(asArgs)
    {
        var sAddr = asArgs[1];
        if (sAddr === undefined) {
            this.println("missing address");
            return;
        }
        var addr = this.getUserAddr(sAddr);
        if (addr === undefined)
            return;
        for (var i=2; i < asArgs.length; i++) {
            var b = parseInt(asArgs[i], 16);
            this.setByte(addr++, b);
        }
    }

    /**
     * @this {C1PDebugger}
     * @param {string} sParm
     */
    doFreqs(sParm)
    {
        if (sParm == "?") {
            this.println("\nfrequency commands:");
            this.println("clear\tclear all frequency counts");
            return;
        }
        var cData = 0, i;
        if (this.aaOpcodeFreqs) {
            if (sParm == "clear") {
                for (i = 0; i < this.aaOpcodeFreqs.length; i++)
                    this.aaOpcodeFreqs[i] = [i, 0];
                this.println("frequency data cleared");
                cData++;
            }
            else if (sParm !== undefined) {
                this.println("unknown frequency command: " + sParm);
                cData++;
            }
            else {
                var aaSortedOpcodeFreqs = this.aaOpcodeFreqs.slice();
                aaSortedOpcodeFreqs.sort(function(p, q) {return q[1] - p[1];});
                for (i = 0; i < aaSortedOpcodeFreqs.length; i++) {
                    var bOpcode = aaSortedOpcodeFreqs[i][0];
                    var cFreq = aaSortedOpcodeFreqs[i][1];
                    if (cFreq) {
                        this.println(this.aOpCodes[this.aaOperations[bOpcode][0]] + " (" + Str.toHexByte(bOpcode) + "): " + cFreq + " times");
                        cData++;
                    }
                }
            }
        }
        if (!cData) {
            this.println("no frequency data available");
        }
    }

    /**
     * @this {C1PDebugger}
     */
    doHalt()
    {
        this.halt();
    }

    /**
     * @this {C1PDebugger}
     * @param {string} sCount
     */
    doHistory(sCount)
    {
        var cLines = 10;
        var iHistory = this.iStepHistory;
        var aHistory = this.aStepHistory;
        if (aHistory !== undefined) {
            var n = (sCount === undefined? this.nextHistory : parseInt(sCount, 10));
            if (n === undefined)
                n = 10;
            if (n > aHistory.length) {
                this.println("note: only " + aHistory.length + " available");
                n = aHistory.length;
            }
            if (sCount !== undefined) {
                this.nInsHistory = 0;
                this.println(n + " instructions earlier:");
            }
            var nIns = (this.nInsHistory? this.nInsHistory : 1);
            iHistory -= n;
            if (iHistory < 0) iHistory = aHistory.length - 1;
            while (cLines && iHistory != this.iStepHistory) {
                var addr = aHistory[iHistory];
                if (addr < 0) break;
                this.println(this.getInstruction(addr, nIns++));
                if (++iHistory == aHistory.length) iHistory = 0;
                cLines--;
                n--;
            }
            this.nextHistory = n;
            this.nInsHistory = nIns;
        }
        if (cLines == 10) this.println("no history available");
    }

    /**
     * Prints the contents of the Debugger's "info" buffer (filled by calls like cpu.dbg.info())
     * @this {C1PDebugger}
     * @param {string|undefined} sCount
     * @return {boolean|undefined} true only if the "info" command is supported
     */
    doInfo(sCount)
    {
        if (DEBUG) {
            var cLines = (sCount === undefined? -1 : parseInt(sCount, 10));
            var i = this.iInfoBuffer;
            do {
                var s = this.aInfoBuffer[i++];
                if (s !== undefined) {
                    this.println(s);
                    cLines--;
                }
                if (i >= this.aInfoBuffer.length)
                    i = 0;
            } while (cLines && i != this.iInfoBuffer);
            this.println("nYieldsPerSecond: " + this.cpu.nYieldsPerSecond);
            this.println("msPerYield: " + this.cpu.msPerYield);
            this.println("nCyclesPerBurst: " + this.cpu.nCyclesPerBurst);
            this.println("nCyclesPerYield: " + this.cpu.nCyclesPerYield);
            this.println("nCyclesPerVideoUpdate: " + this.cpu.nCyclesPerVideoUpdate);
            this.println("nCyclesPerStatusUpdate: " + this.cpu.nCyclesPerStatusUpdate);
            return true;
        }
    }

    /**
     * @this {C1PDebugger}
     * @param {string} [sAddr]
     * @param {string} [sAddrEnd]
     * @param {number} [n]
     */
    doUnassemble(sAddr, sAddrEnd, n)
    {
        var addr = this.getUserAddr(sAddr);
        if (addr === undefined)
            return;

        if (n === undefined) n = 1;
        var addrEnd = this.offLimit;
        if (sAddrEnd !== undefined) {
            addrEnd = this.getUserAddr(sAddrEnd);
            if (addrEnd === undefined || addrEnd < addr)
                return;
            if (!DEBUG && (addrEnd - addr) > 0x100) {
                /*
                 * Limiting the amount of disassembled code to one "memory page" in non-DEBUG builds is partly
                 * to prevent the user from wedging their browser, but also a recognition that, in non-DEBUG builds,
                 * the println() output buffer is truncated to 8K, which is only enough for about two pages of
                 * disassembled code anyway.
                 */
                this.println("range too large");
                return;
            }
            addrEnd++;
            n = -1;
        }

        if (addr != this.nextAddr)
            this.println();

        while (n-- && addr < addrEnd) {
            var sIns = this.getInstruction(addr, this.isBusy(false) || this.fStepOver? this.cIns : 0);
            this.println(sIns);
            this.nextAddr = addr = this.nextIns;
        }
    }

    /**
     * @this {C1PDebugger}
     * @param {Array.<string>} asArgs
     */
    doOptions(asArgs)
    {
        if (asArgs[1] === undefined || asArgs[1] == "?") {
            this.println("\noption commands:");
            this.println("max\trun at maximum speed");
            this.println("fast\trun faster (up to " + this.cpu.mhzFast + "Mhz)");
            this.println("slow\trun at normal speed (1Mhz)");
            this.println("classic\tuse classic operand syntax");
            this.println("modern\tuse modern operand syntax");
            this.println("msg\tenable message categories");
            return;
        }
        var sOption = asArgs[1];
        switch(sOption) {
        case "slow":
            this.cpu.setSpeed(this.cpu.SPEED_SLOW);
            break;
        case "fast":
            this.cpu.setSpeed(this.cpu.SPEED_FAST);
            break;
        case "max":
            this.cpu.setSpeed(this.cpu.SPEED_MAX);
            break;
        case "classic":
            this.setOpModes(true);
            this.println("classic syntax enabled");
            break;
        case "modern":
            this.setOpModes(false);
            this.println("modern syntax enabled");
            break;
        case "msg":
            var bitsMessage = 0;
            if (asArgs[2] !== undefined) {
                if (asArgs[2] == "all")
                    bitsMessage = 0xff;
                else if (this.aMessageCategories[asArgs[2]] !== undefined)
                    bitsMessage = this.aMessageCategories[asArgs[2]];
                if (bitsMessage) {
                    if (asArgs[3] == "on") {
                        this.bitsMessage |= bitsMessage;
                    }
                    else if (asArgs[3] == "off") {
                        this.bitsMessage &= ~bitsMessage;
                    }
                }
            }
            for (var sCategory in this.aMessageCategories) {
                if (asArgs[2] !== undefined && (asArgs[2] != "all" && asArgs[2] != sCategory)) continue;
                bitsMessage = this.aMessageCategories[sCategory];
                this.println(sCategory + " messages: " + ((this.bitsMessage & bitsMessage)? "on" : "off"));
            }
            break;
        default:
            this.println("unknown option: " + sOption);
            break;
        }
    }

    /**
     * @this {C1PDebugger}
     * @param {Array.<string>} [asArgs]
     */
    doRegisters(asArgs)
    {
        if (asArgs && asArgs[1] == "?") {
            this.println("\nregister commands:");
            this.println("r to display all");
            this.println("r [target=value] to modify");
            this.println("supported targets:");
            this.println("A,X,Y,S,PC and flags C,Z,D,V,N");
            return;
        }
        var fIns = true;
        if (asArgs !== undefined && asArgs.length > 1) {
            fIns = false;
            var sReg = asArgs[1];
            var sValue = null;
            var i = sReg.indexOf("=");
            if (i > 0) {
                sValue = sReg.substr(i+1);
                sReg = sReg.substr(0, i);
            }
            else if (asArgs.length > 2) {
                sValue = asArgs[2];
            }
            else {
                this.println("missing value for " + asArgs[1]);
                return;
            }
            var b = parseInt(sValue, 16);
            if (!isNaN(b)) {
                switch(sReg.toUpperCase()) {
                case "A":
                    this.cpu.regA = b & 0xff;
                    break;
                case "X":
                    this.cpu.regX = b & 0xff;
                    break;
                case "Y":
                    this.cpu.regY = b & 0xff;
                    break;
                case "C":
                    if (b) this.cpu.setC(); else this.cpu.clearC();
                    break;
                case "Z":
                    if (b) this.cpu.setZ(); else this.cpu.clearZ();
                    break;
                case "D":
                    if (b) this.cpu.setBCD(); else this.cpu.clearBCD();
                    break;
                case "V":
                    if (b) this.cpu.setV(); else this.cpu.clearV();
                    break;
                case "N":
                    if (b) this.cpu.setN(); else this.cpu.clearN();
                    break;
                case "S":
                    if ((b & ~0xff) != 0x100) {
                        this.println("invalid stack pointer: " + sValue);
                        return;
                    }
                    this.cpu.regS = b;
                    break;
                case "PC":
                    fIns = true;
                    this.cpu.regPC = b & 0xffff;
                    this.nextAddr = this.cpu.regPC;
                    break;
                default:
                    this.println("unknown register: " + sReg);
                    return;
                }
            }
            else {
                this.println("invalid value: " + sValue);
                return;
            }
            this.cpu.update();
        }
        this.println(this.getRegs());
        if (fIns) this.doUnassemble(Str.toHex(this.nextAddr = this.cpu.regPC, 4));
    }

    /**
     * @this {C1PDebugger}
     * @param {string} sAddr
     */
    doRun(sAddr)
    {
        if (sAddr !== undefined)
            this.setTempBreakpoint(this.getUserAddr(sAddr));
        if (!this.run()) {
            this.cpu.setFocus();
        }
    }

    /**
     * @this {C1PDebugger}
     */
    doStep()
    {
        if (this.getByte(this.cpu.regPC) == this.cpu.OP_JSR) {
            this.setTempBreakpoint(this.cpu.regPC+3);
            this.fStepOver = true;
            if (!this.run())
                this.cpu.setFocus();
        }
        else {
            this.doTrace();
        }
    }

    /**
     * @this {C1PDebugger}
     * @param {string} [sCount]
     */
    doTrace(sCount)
    {
        var c = (sCount === undefined? 1 : parseInt(sCount, 10));
        var n = (c == 1? 0 : 1);
        Web.onCountRepeat(
            c,
            function(dbg) {
                return function() {
                    return dbg.setBusy(true) && dbg.step(n);
                };
            }(this),
            function(dbg) {
                return function() {
                    dbg.setBusy(false);
                };
            }(this)
        );
    }

    static input(dbg, sCmd)
    {
        if (!sCmd.length) {
            if (dbg.fAssemble) {
                dbg.println("ended assemble @" + Str.toHex(dbg.addrAssembleNext, 4));
                dbg.nextAddr = dbg.addrAssembleNext;
                dbg.fAssemble = false;
            }
            else
            if (dbg.prevCmd)
                sCmd = dbg.prevCmd;
        }
        if (dbg.isReady() && !dbg.isBusy(true) && sCmd.length > 0) {

            if (dbg.fAssemble) {
                sCmd = "a " + Str.toHex(dbg.addrAssembleNext, 4) + " " + sCmd;
            }
            else if (sCmd.length > 1 && sCmd.indexOf(" ") != 1) {
                /*
                 * For certain commands lacking a space after the first character,
                 * insert an automatic space, so that split(" ") has the desired effect.
                 */
                var ch = sCmd.charAt(0).toLowerCase();
                sCmd = ch + " " + sCmd.substr(1);
            }

            var asArgs = sCmd.split(" ");
            dbg.prevCmd = asArgs[0];

            switch(asArgs[0].toLowerCase()) {
            case "a":
                dbg.doAssemble(asArgs);
                break;
            case "b":
                dbg.doBreak(asArgs[1], asArgs[2]);
                break;
            case "d":
                dbg.doDump(asArgs[1], asArgs[2]);
                break;
            case "e":
                dbg.doEdit(asArgs);
                break;
            case "f":
                dbg.doFreqs(asArgs[1]);
                break;
            case "g":
                dbg.doRun(asArgs[1]);
                break;
            case "h":
                dbg.doHalt();
                break;
            case "o":
                dbg.doOptions(asArgs);
                break;
            case "p":
                dbg.doHistory(asArgs[1]);
                break;
            case "r":
                dbg.doRegisters(asArgs);
                break;
            case "s":
                dbg.doStep();
                break;
            case "t":
                dbg.doTrace(asArgs[1]);
                break;
            case "u":
                dbg.doUnassemble(asArgs[1], asArgs[2], 8);
                break;
            case "?":
            case "help":
                dbg.doHelp();
                break;
            case "i":
                if (dbg.doInfo(asArgs[1])) break;
                /* falls through */
            default:
                dbg.println("unknown command: " + sCmd);
                break;
            }
        }
    }

    /**
     * C1PDebugger.init()
     *
     * This function operates on every HTML element of class "debugger", extracting the
     * JSON-encoded parameters for the C1PDebugger constructor from the element's "data-value"
     * attribute, invoking the constructor to create a C1PDebugger component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        var aeDbg = Component.getElementsByClass(document, C1PJS.APPCLASS, "debugger");
        for (var iDbg=0; iDbg < aeDbg.length; iDbg++) {
            var eDbg = aeDbg[iDbg];
            var parmsDbg = Component.getComponentParms(eDbg);
            var dbg = new C1PDebugger(parmsDbg);
            Component.bindComponentControls(dbg, eDbg, C1PJS.APPCLASS);
        }
    }
}

if (DEBUGGER) {

    /*
     * Initialize every Debugger module on the page (as IF there's ever going to be more than one ;-))
     */
    Web.onInit(C1PDebugger.init);

}   // endif DEBUGGER

/**
 * @copyright https://www.pcjs.org/machines/osi/c1p/lib/computer.js (C) 2012-2025 Jeff Parsons
 */


/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @unrestricted
 */
class C1PComputer extends Component {
    /**
     * C1PComputer(parmsComputer, modules)
     *
     * The C1PComputer component expects the following (parmsComputer) properties:
     *
     *      modules[{}] (from the <module> definition(s) for the computer)
     *
     * This component processes all the <module> "start" and "end" specifications
     * and "wires" everything to a common "address buffer"; namely, the abMemory array.
     * abMemory encompasses the computer's entire address space, but every component must
     * play nice and use only its assigned section of abMemory -- and pretend it's an array
     * of bytes, when in fact it's an array of floating-point values (the only primitive
     * numeric data type that JavaScript provides).
     *
     * This component also insures that all the other components are ready; in particular,
     * this means that the ROM and Video components have finished loading their resources
     * and are ready for operation.  Other components become ready as soon as we call their
     * setBuffer() method (eg, CPU, RAM, Keyboard, Debugger, SerialPort, DiskController), and
     * others, like Panel, become ready even earlier, at the end of their initialization.
     *
     * Once every component has indicated it's ready, we call its setPower() notification
     * function (if it has one; it's optional).  We call the CPU's setPower() function last,
     * so that the CPU is assured that all other components are ready and "powered".
     *
     * @this {C1PComputer}
     * @param {Object} parmsComputer
     * @param {Object} modules
     */
    constructor(parmsComputer, modules)
    {
        super("C1PComputer", parmsComputer);

        this.modules = modules;
    }

    /**
     * reset(fPowerOn)
     *
     * @this {C1PComputer}
     * @param {boolean} [fPowerOn] is true to indicate that we should start the CPU running
     */
    reset(fPowerOn)
    {
        var cpu = null;
        for (var sType in this.modules) {
            for (var i=0; i < this.modules[sType].length; i++) {
                var component = this.modules[sType][i];
                if (component && component.reset) {
                    if (DEBUG) this.println("resetting " + sType);
                    component.reset();
                    if (sType == "cpu") cpu = component;
                }
            }
        }
        if (cpu) {
            cpu.update();
            if (fPowerOn) cpu.run();
        }
    }

    /**
     * start()
     *
     * Called by the CPU to notify all component start() handlers.
     *
     * @this {C1PComputer}
     */
    start()
    {
        for (var sType in this.modules) {
            if (sType == "cpu") continue;
            for (var i=0; i < this.modules[sType].length; i++) {
                var component = this.modules[sType][i];
                if (component && component.start) {
                    component.start();
                }
            }
        }
    }

    /**
     * stop(msStart, nCycles)
     *
     * Called by the CPU to notify all component stop() handlers
     *
     * @this {C1PComputer}
     * @param {number} msStart
     * @param {number} nCycles
     */
    stop(msStart, nCycles)
    {
        for (var sType in this.modules) {
            if (sType == "cpu") continue;
            for (var i=0; i < this.modules[sType].length; i++) {
                var component = this.modules[sType][i];
                if (component && component.stop) {
                    component.stop(msStart, nCycles);
                }
            }
        }
    }

    /**
     * @this {C1PComputer}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "reset")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @return {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        switch(sBinding) {
        case "reset":
            this.bindings[sBinding] = control;
            control.onclick = function(computer) {
                return function() {
                    computer.reset();
                };
            }(this);
            return true;
        default:
            break;
        }
        return false;
    }

    /**
     * NOTE: If there are multiple components for a given type, we may need to provide a means of discriminating.
     *
     * @this {C1PComputer}
     * @param {string} sType
     * @param {string} [idRelated] of related component
     * @param {Component|null} [componentPrev] of previously returned component, if any
     * @return {Component|null}
     */
    getComponentByType(sType, idRelated, componentPrev)
    {
        if (this.modules[sType]) {
            return this.modules[sType][0];
        }
        return null;
    }

    static power(computer)
    {
        /*
         * Insure that the ROMs, Video and CPU are all ready before "powering" everything; always "power"
         * the CPU last, to make sure it doesn't start asking other components to do things before they're ready.
         */
        var cpu = null;
        for (var sType in computer.modules) {
            for (var i=0; i < computer.modules[sType].length; i++) {
                var component = computer.modules[sType][i];
                if (!component) continue;
                if (!component.isReady()) {
                    component.isReady(function(computer) {
                        return function() {
                            C1PComputer.power(computer);
                        };
                    }(computer));
                    return;
                }
                /*
                 * The CPU component's setPower() notification handler is a special case: we don't want
                 * to call it until the end (below), after all others have been called.
                 */
                if (sType == "cpu")
                    cpu = component;
                else if (component.setPower) {
                    component.setPower(true, computer);
                }
            }
        }

        /*
         * The entire computer is finally ready; we call our own setReady() for completeness, not because any
         * other component actually cares when we're ready.
         */
        computer.setReady();

        computer.println(C1PJS.APPNAME + " v" + C1PJS.APPVERSION + "\n" + COPYRIGHT);

        /*
         * Once we get to this point, we're guaranteed that all components are ready, so it's safe to "power" the CPU;
         * setPower() includes an automatic reset(fPowerOn), so the CPU should begin executing immediately, unless a debugger
         * is attached.
         */
        if (cpu) cpu.setPower(true, computer);
    }

    /*
     * C1PComputer.init()
     *
     * This function operates on every HTML element of class "c1pjs-computer", extracting the
     * JSON-encoded parameters for the C1PComputer constructor from the element's "data-value"
     * attribute, invoking the constructor to create a C1PComputer component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        var aeComputers = Component.getElementsByClass(document, C1PJS.APPCLASS, "computer");

        for (var iComputer=0; iComputer < aeComputers.length; iComputer++) {

            var eComputer = aeComputers[iComputer];
            var parmsComputer = Component.getComponentParms(eComputer);

            var component;
            var modules = {};

            var abMemory;
            var addrStart = 0, addrEnd = 0;

            for (var iAddr=0; iAddr < parmsComputer['modules'].length; iAddr++) {
                var addrInfo = parmsComputer['modules'][iAddr];
                /*
                 * The first address range (ie, the CPU range) must specify the range for the entire
                 * address space (abMemory), which we allocate and zero-initialize.
                 *
                 * NOTE: We might consider doing what the Video component does on first reset: initializing
                 * the entire memory buffer to random values.  However, a constant (eg, 0xA5) might be
                 * more useful, acting as a crude indicator of memory the client code hasn't written yet.
                 */
                if (!iAddr) {
                    if (addrInfo['type'] != "cpu") break;
                    addrStart = +addrInfo['start'];
                    addrEnd = +addrInfo['end'];
                    abMemory = new Array(addrEnd+1 - addrStart);
                    for (var addr=addrStart; addr < abMemory.length; addr++) {
                        abMemory[addr] = 0;
                    }
                }
                component = Component.getComponentByID(addrInfo['refID'], parmsComputer['id']);
                if (component) {
                    var sType = addrInfo['type'];
                    if (modules[sType] === undefined)
                        modules[sType] = [];
                    modules[sType].push(component);
                    if (component.setBuffer && addrInfo['start'] !== undefined) {
                        component.setBuffer(abMemory, +addrInfo['start'], +addrInfo['end'], modules['cpu'][0]);
                    }
                }
                else {
                    Component.error("no component for <module refid=\"" + addrInfo['refID'] + "\">");
                    return;
                }
            }

            if (abMemory === undefined) {
                Component.error("<module type=\"cpu\"> definition must appear first in the <computer> specification");
                return;
            }

            /*
             * Let's see if the Debugger is installed (NOTE: its ID must be "debugger", and only one per machine is supported);
             * the Debugger needs our setBuffer(), setPower() and reset() notifications, and this relieves us from having an explicit
             * <module> entry for type="debugger".
             */
            component = Component.getComponentByID('debugger', parmsComputer['id']);
            if (component) {
                modules['debugger'] = [component];
                if (component.setBuffer) {
                    component.setBuffer(abMemory, addrStart, addrEnd, modules['cpu'][0]);
                }
            }

            var computer = new C1PComputer(parmsComputer, modules);

            /*
             * Let's see if the Control Panel is installed (NOTE: its ID must be "panel", and only one per machine is supported);
             * the Panel needs our setPower() notifications, and this relieves us from having an explicit <module> entry for type="panel".
             */
            var panel = Component.getComponentByID('panel', parmsComputer['id']);
            if (panel) {
                modules['panel'] = [panel];
                /*
                 * Iterate through all the other components and update their print methods if the Control Panel has provided overrides.
                 */
                var controlPrint = panel.bindings['print'];
                if (controlPrint) {
                    var aComponents = Component.getComponents(parmsComputer['id']);
                    for (var iComponent = 0; iComponent < aComponents.length; iComponent++) {
                        component = aComponents[iComponent];
                        if (component == panel) continue;
                        component.notice = panel.notice;
                        component.print = panel.print;
                        component.println = panel.println;
                    }
                }
            }

            /*
             *  We may eventually add a "Power" button, but for now, all we have is a "Reset" button
             */
            Component.bindComponentControls(computer, eComputer, C1PJS.APPCLASS);

            /*
             * "Power" the computer automatically
             */
            C1PComputer.power(computer);
        }
    }
}

/*
 * Initialize every Computer on the page.
 */
Web.onInit(C1PComputer.init);

/**
 * @copyright https://www.pcjs.org/machines/shared/lib/embed.js (C) 2012-2025 Jeff Parsons
 */


/*
 * We now support asynchronous XML and XSL file loads; simply set fAsync (below) to true.
 *
 * NOTE: For that support to work, we have to keep track of the number of machines on the page
 * (ie, how many embedMachine() calls were issued), reduce the count as each machine XML file
 * is fully transformed into HTML, and when the count finally returns to zero, notify all the
 * machine component init() handlers.
 *
 * Also, to prevent those init() handlers from running prematurely, we must disable all page
 * notification events at the start of the embedding process (Web.enablePageEvents(false)) and
 * re-enable them at the end (Web.enablePageEvents(true)).
 */
var fAsync = true;
var cAsyncMachines = 0;

/**
 * loadXML(sFile, idMachine, sAppName, sAppClass, sParms, sClass, fResolve, display, done)
 *
 * This is the preferred way to load all XML and XSL files. It uses getResource()
 * to load them as strings, which parseXML() can massage before parsing/transforming them.
 *
 * For example, since I've been unable to get the XSLT document() function to work inside any
 * XSL document loaded by JavaScript's XSLT processor, that has prevented me from dynamically
 * loading any XML machine file that uses the "ref" attribute to refer to and incorporate
 * another XML document.
 *
 * To solve that, I've added an fResolve parameter that tells parseXML() to fetch any
 * referenced documents ITSELF and insert them into the XML string prior to parsing, instead
 * of relying on the XSLT template to pull them in.  That fetching is handled by resolveXML(),
 * which iterates over the XML until all "refs" have been resolved (including any nested
 * references).
 *
 * Also, XSL files with a <!DOCTYPE [...]> cause MSIE's Microsoft.XMLDOM.loadXML() function
 * to choke, so I strip that out prior to parsing as well.
 *
 * TODO: Figure out why the XSLT document() function works great when the web browser loads an
 * XML file (and the associated XSL file) itself, but does not work when loading documents via
 * JavaScript XSLT support. Is it broken, is it a security issue, or am I just calling it wrong?
 *
 * @param {string} sXMLFile
 * @param {string} idMachine
 * @param {string} sAppName
 * @param {string} sAppClass
 * @param {string} sParms (machine parameters, if any)
 * @param {string} sClass (an optional machine class name used to style the machine)
 * @param {boolean} fResolve is true to resolve any "ref" attributes
 * @param {function(string)} display
 * @param {function(string,string,Object)} done (string contains the unparsed XML string data, and Object contains a parsed XML object)
 */
function loadXML(sXMLFile, idMachine, sAppName, sAppClass, sParms, sClass, fResolve, display, done)
{
    let doneLoadXML = function(sURL, sXML, nErrorCode) {
        if (nErrorCode) {
            if (!sXML) sXML = "unable to load " + sXMLFile + " (" + nErrorCode + ")";
            done(sURL, sXML, null);
            return;
        }
        parseXML(sXML, sXMLFile, idMachine, sAppName, sAppClass, sParms, sClass, fResolve, display, done);
    };
    display("Loading " + sXMLFile + "...");
    Web.getResource(sXMLFile, null, fAsync, doneLoadXML);
}

/**
 * parseXML(sXML, sXMLFile, idMachine, sAppName, sAppClass, sParms, sClass, fResolve, display, done)
 *
 * Generates an XML document from an XML string. This function also provides a work-around for XSLT's
 * lack of support for the document() function (at least on some browsers), by replacing every reference
 * tag (ie, a tag with a "ref" attribute) with the contents of the referenced file.
 *
 * @param {string} sXML
 * @param {string} sXMLFile
 * @param {string} idMachine
 * @param {string} sAppName
 * @param {string} sAppClass
 * @param {string} sParms (machine parameters, if any)
 * @param {string} sClass (an optional machine class name used to style the machine)
 * @param {boolean} fResolve is true to resolve any "ref" attributes; default is false
 * @param {function(string)} display
 * @param {function(string,string,Object)} done (string contains the unparsed XML string data, and Object contains a parsed XML object)
 */
function parseXML(sXML, sXMLFile, idMachine, sAppName, sAppClass, sParms, sClass, fResolve, display, done)
{
    let buildXML = function(sURL, sXML, sError) {
        if (sError) {
            done(sURL, sError, null);
            return;
        }
        if (idMachine) {

            /*
             * A more sensible place to record the machine XML would be embedMachine(), like we do for the
             * XSL file, but since we're about to modify the original machine XML, it's best to record it now.
             */
            Component.addMachineResource(idMachine, sXMLFile, sXML);

            let match;
            let sURL = sXMLFile;
            if (sURL && sURL.indexOf('/') < 0 && window.location.pathname.slice(-1) == '/') {
                sURL = window.location.pathname + sURL;
            }

            /*
             * We embed the URL of the XML file both as a separate "xml" attribute for easy access from the
             * XSL file, and as part of the "parms" attribute for easy access from machines (see getMachineParm()).
             */
            if (!sParms) {
                sParms = '{';
            } else if (sParms.slice(-1) == '}') {
                sParms = sParms.slice(0, -1);
                if (sParms.length > 1) sParms += ',';
            } else {            // sParms must just be a "state" file, so encode it as a "state" property
                sParms = '{state:"' + sParms + '",';
            }
            sParms += 'url:"' + sURL + '"}';

            /*
             * Note that while we no longer generate a machine XML file with a "state" attribute (because it's
             * encoded inside the "parms" attribute), the XSL file must still cope with "state" attributes inside
             * other XML files; for example, manifest XML files like /apps/pcx86/1981/visicalc/manifest.xml contain
             * machine elements with "state" attributes that must still be passed down to the computer element
             * "the old fashioned way".
             *
             * Until/unless that changes, components.xsl cannot be simplified as much as I might have hoped.
             */
            if (typeof resources == 'object') sURL = null;      // turn off URL inclusion if we have embedded resources
            sParms = sParms.replace(/\$/g, "$$$$").replace(/'/g, "&apos;");
            if (sClass) {
                /*
                 * If there's no hard-coded "class" attribute in the machine tag, then we can set one in the final
                 * replacement below, just like we do for sParms and sURL.  However, if a "class" attribute already
                 * exists, we need alter it and then zap the sClass variable.
                 */
                match = sXML.match(/(<machine[^>]*\sclass=)(['"])(.*?)(\2[^>]*>)/);
                if (match) {
                    sXML = sXML.replace(match[0], match[1] + match[2] + sClass + match[4]);
                    sClass = "";
                }
            }

            /*
             * If the machine element contains a 'debugger' attribute set to 'available', we change it to 'optional',
             * which signals the XSL template to generate a "soft link" to the debugger (using a URL parameter), rather
             * than a "hard link" to the debugger XML file.
             */
            match = sXML.match(/(<machine[^>]*\sdebugger=)(['"])(available)(\2[^>]*>)/);
            if (match) {
                sXML = sXML.replace(match[0], match[1] + match[2] + "optional" + match[4]);
            }

            sXML = sXML.replace(/(<machine[^>]*\sid=)(['"]).*?\2/, "$1$2" + idMachine + "$2" + (sClass? ' class="' + sClass + '"' : '') + (sParms? " parms='" + sParms + "'" : "") + (sURL? ' url="' + sURL + '"' : ''));
        }

        if (!fResolve) {
            /*
             * I'm trying to switch to a shared components.xsl (at least for all PC-class machines),
             * but in the interim, that means hacking the XSL file on the fly to reflect the actual class.
             */
            sXML = sXML.replace(/(<xsl:variable name="APPNAME">).*?(<\/xsl:variable>)/, "$1" + sAppName + "$2");
            sXML = sXML.replace(/(<xsl:variable name="APPCLASS">).*?(<\/xsl:variable>)/, "$1" + sAppClass + "$2");

            /*
             * Replace the version number template in the XSL file (which we assume we're reading, since fResolve is false)
             * with the current APPVERSION.
             *
             * ES6 ALERT: Template strings.
             */
            sXML = sXML.replace(/<xsl:variable name="APPVERSION"(\/>|>[^<]*<\/xsl:variable>)/, `<xsl:variable name="APPVERSION">${APPVERSION}</xsl:variable>`);
        }

        /*
         * If the resource we requested is not really an XML file (or the file didn't exist and the server simply returned
         * a message like "Cannot GET /devices/pc/machine/5150/cga/64kb/donkey/machine.xml"), we'd like to display a more
         * meaningful message, because the XML DOM parsers will blithely return a document that contains nothing useful; eg:
         *
         *      This page contains the following errors:error on line 1 at column 1:
         *      Document is empty Below is a rendering of the page up to the first error.
         *
         * Supposedly, the IE XML DOM parser will throw an exception, but I haven't tested that, and unless all other
         * browsers do that, that's not helpful.
         *
         * The best I can do at this stage (assuming Web.getResource() didn't drop any error information on the floor)
         * is verify that the requested resource "looks like" valid XML (in other words, it begins with a '<').
         */
        let xmlDoc = null;
        if (sXML.charAt(0) == '<') {
            try {
                /*
                 * Another hack for MSIE, which fails to load XSL documents containing a <!DOCTYPE [...]> tag.
                 *
                 * This is also why the XSLTProcessor 'transformToFragment' method in Microsoft Edge silently failed,
                 * so I had pull this hack out of the "ActiveXObject" code.  And rather than add yet-another Microsoft
                 * browser check, I'm going to try doing this across the board, and hope that none of the other XSLT
                 * processors fail *without* the DOCTYPE tag.
                 */
                if (!fResolve) {
                    sXML = sXML.replace(/<!DOCTYPE(.|[\r\n])*]>\s*/g, "");
                }
                /*
                 * Beginning with Microsoft Edge and the corresponding release of Windows 10, all the
                 * 'ActiveXObject' crud has gone away; but of course, this code must remain in place if
                 * we want to continue supporting older Internet Explorer browsers (ie, back to IE9).
                 */
                /** @namespace window.ActiveXObject */
                if (window.ActiveXObject || 'ActiveXObject' in window) {        // second test is required for IE11 on Windows 8.1
                    xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
                    xmlDoc.async = false;
                    xmlDoc['loadXML'](sXML);
                } else {
                    /** @namespace window.DOMParser */
                    xmlDoc = (new window.DOMParser()).parseFromString(sXML, "text/xml");
                }
            } catch(e) {
                xmlDoc = null;
                sXML = e.message;
            }
        } else {
            sXML = "unrecognized XML: " + (sXML.length > 255? sXML.substr(0, 255) + "..." : sXML);
        }
        done(sXMLFile, sXML, xmlDoc);
    };
    if (sXML) {
        if (PRIVATE) sXML = sXML.replace(/\/library.xml/, "/disks/private/library.xml");
        if (fResolve) {
            resolveXML(sXMLFile, sXML, display, buildXML);
            return;
        }
        buildXML(sXMLFile, sXML, "");
        return;
    }
    done(sXMLFile, "no data", null);
}

/**
 * resolveXML(sURL, sXML, display, done)
 *
 * Replaces every tag with a "ref" attribute with the contents of the corresponding file.
 *
 * TODO: Fix some of the limitations of this code, such as: 1) requiring the "ref" attribute
 * to appear as the tag's first attribute, 2) requiring the "ref" attribute to be double-quoted,
 * and 3) requiring the "ref" tag to be self-closing.
 *
 * @param {string} sURL
 * @param {string} sXML
 * @param {function(string)} display
 * @param {function(string,string,string)} done (the first string contains the resolved XML data, the second is for any error message)
 */
function resolveXML(sURL, sXML, display, done)
{
    let matchRef;
    let reRef = /<([a-z]+)\s+ref="(.*?)"(.*?)\/>/g;

    if ((matchRef = reRef.exec(sXML))) {

        let sRefFile = matchRef[2];

        let doneReadXML = function(sURL, sXMLRef, nErrorCode) {
            if (nErrorCode || !sXMLRef) {
                done(sURL, sXML, "unable to resolve XML reference: " + matchRef[0] + " (" + nErrorCode + ")");
                return;
            }
            /*
             * If there are additional attributes in the "referring" XML tag, we want to insert them
             * into the "referred" XML tag; attributes that don't exist in the referred tag should be
             * appended, and attributes that DO exist should be overwritten.
             */
            let sRefAttrs = matchRef[3];
            if (sRefAttrs) {
                let aXMLRefTag = sXMLRef.match(new RegExp("<" + matchRef[1] + "[^>]*>"));
                if (aXMLRefTag) {
                    let sXMLNewTag = aXMLRefTag[0];
                    /*
                     * Iterate over all the attributes in the "referring" XML tag (sRefAttrs)
                     */
                    let matchAttr;
                    let reAttr = /( [a-z]+=)(['"])(.*?)\2/gi;
                    while ((matchAttr = reAttr.exec(sRefAttrs))) {
                        if (sXMLNewTag.toLowerCase().indexOf(matchAttr[1].toLowerCase()) < 0) {
                            /*
                             * This is the append case....
                             */
                            sXMLNewTag = sXMLNewTag.replace(">", matchAttr[0] + ">");
                        } else {
                            /*
                             * This is the overwrite case....
                             */
                            sXMLNewTag = sXMLNewTag.replace(new RegExp(matchAttr[1] + "(['\"])(.*?)\\1"), matchAttr[0]);
                        }
                    }
                    if (aXMLRefTag[0] != sXMLNewTag) {
                        sXMLRef = sXMLRef.replace(aXMLRefTag[0], sXMLNewTag);
                    }
                } else {
                    done(sURL, sXML, "missing <" + matchRef[1] + "> in " + sRefFile);
                    return;
                }
            }

            /*
             * Apparently when a Windows Azure server delivers one of my XML files, it may modify the first line:
             *
             *      <?xml version="1.0" encoding="UTF-8"?>\n
             *
             * I didn't determine exactly what it was doing at this point (probably just changing the \n to \r\n),
             * but in any case, relaxing the following replace() solved it.
             */
            sXMLRef = sXMLRef.replace(/<\?xml[^>]*>[\r\n]*/, "");

            sXML = sXML.replace(matchRef[0], sXMLRef);

            resolveXML(sURL, sXML, display, done);
        };

        display("Loading " + sRefFile + "...");
        Web.getResource(sRefFile, null, fAsync, doneReadXML);
        return;
    }
    done(sURL, sXML, "");
}

/**
 * embedMachine(sAppName, sAppClass, idMachine, sXMLFile, sXSLFile, sParms, sClass)
 *
 * This allows to you embed a machine on a web page, by transforming the machine XML into HTML.
 *
 * @param {string} sAppName is the app name (eg, "PCx86")
 * @param {string} sAppClass is the app class (eg, "pcx86"); also known as the machine class
 * @param {string} idMachine
 * @param {string} [sXMLFile]
 * @param {string} [sXSLFile]
 * @param {string} [sParms] (machine parameters, if any)
 * @param {string} [sClass] (an optional machine class name used to style the machine)
 * @return {boolean} true if successful, false if error
 */
function embedMachine(sAppName, sAppClass, idMachine, sXMLFile, sXSLFile, sParms, sClass)
{
    let eMachine, eWarning, fSuccess = true;

    cAsyncMachines++;
    Component.addMachine(idMachine);

    let doneMachine = function() {

        if (!--cAsyncMachines) {
            if (fAsync) Web.enablePageEvents(true);
        }
    };

    if (!sXMLFile) {
        /*
         * For a machine whose layout is now pre-built based on a JSON config file, the method of passing any machine "parms" to
         * the machine via a "parms" attribute of the XML <machine> tag no longer works, so we must also stash them as a property
         * of the machine's resource object.
         *
         * An alternative approach would be to change the machine HTML template file to build the parms directly into the machine
         * layout, but this is more expedient.
         */
        if (sParms) {
            Component.addMachineResource(idMachine, "parms", sParms);
        }
        /*
         * We used to replace a missing XML configuration file with a default path, but since we now support JSON-based configs,
         * that had to change.
         *
         *      sXMLFile = "machine.xml";
         *      if (!sXSLFile) sXSLFile = "components.xsl";
         */
        doneMachine();
        return fSuccess;
    }

    if (Web.getURLParm('debugger') == "true" && sXMLFile.indexOf("/debugger") < 0) {
        sXMLFile = sXMLFile.replace("/machine.xml", "/debugger/machine.xml");
    }

    let displayError = function(sURL, sError) {
        if (typeof sError == "string") {
            if (sError.indexOf("<!DOCTYPE html>") >= 0) {
                let match = sError.match(/<title>(?:PCjs: |)(.*?)<\/title>/);
                if (match) sError = match[1];
            }
        }
        Component.log(sError);
        displayMessage("Error: " + sError + (sURL? " (" + sURL + ")" : ""));
        if (fSuccess) doneMachine();
        fSuccess = false;
    };

    let displayMessage = function(sMessage) {
        if (eWarning === undefined) {
            /*
             * Our MarkOut module (in convertMDMachineLinks()) creates machine containers that look like:
             *
             *      <div id="' + sMachineID + '" class="machine-placeholder"><p>Embedded PC</p><p class="machine-warning">...</p></div>
             *
             * with the "machine-warning" paragraph pre-populated with a warning message that the user will
             * see if nothing at all happens.  But hopefully, in the normal case (and especially the error case),
             * *something* will have happened.
             *
             * Note that it is the HTMLOut module (in processMachines()) that ultimately decides which scripts to
             * include and then generates the embedXXX() call.
             */
            let aeWarning = (eMachine && Component.getElementsByClass(eMachine, "machine-warning"));
            eWarning = (aeWarning && aeWarning[0]) || eMachine;
        }
        if (eWarning) eWarning.innerHTML = Str.escapeHTML(sMessage);
    };

    try {
        eMachine = document.getElementById(idMachine);
        if (eMachine) {

            /*
             * If we have a 'css' resource, add it to the page first.
             */
            let css;
            if (typeof resources == "object" && (css = resources['css'])) {
                let head = document.head || document.getElementsByTagName('head')[0];
                let style = document.createElement('style');
                style.type = 'text/css';
                // noinspection JSDeprecatedSymbols
                if (style.styleSheet) {
                    // noinspection JSDeprecatedSymbols
                    style.styleSheet.cssText = css;
                } else {
                    style.appendChild(document.createTextNode(css));
                }
                head.appendChild(style);
            }

            if (!sXSLFile) {
                /*
                 * Now that PCjs is an open-source project, we can make the following test more flexible,
                 * and revert to the internal template if DEBUG *or* internal version (instead of *and*).
                 *
                 * Third-party sites that don't use the PCjs server will ALWAYS want to specify a fully-qualified
                 * path to the XSL file, unless they choose to mirror our folder structure.
                 */
                sXSLFile = "/machines/" + sAppClass + "/xsl/components.xsl";
            }

            /*
             * If sAppClass specified a folder (eg, "osi/c1p"), that was required for the location of the XSL file,
             * but now all we want is the final folder name (eg, "c1p") for any XSL "APPCLASS" variable replacement.
             */
            sAppClass = sAppClass.split('/').pop();

            let processXML = function(sURL, sXML, xml) {
                if (!xml) {
                    displayError(sURL, sXML);
                    return;
                }

                let transformXML = function(sURL, sXSL, xsl) {
                    if (!xsl) {
                        displayError(sURL, sXSL);
                        return;
                    }

                    /*
                     * Record the XSL file, in case someone wants to save the entire machine later.
                     *
                     * NOTE: sXSLFile will never be undefined by this point, but apparently the Closure Compiler doesn't realize that.
                     */
                    Component.addMachineResource(idMachine, sXSLFile || "", sXSL);

                    /*
                     * The <machine> template in components.xsl now generates a "machine div" that makes
                     * the div we required the caller of embedMachine() to provide redundant, so instead
                     * of appending this fragment to the caller's node, we REPLACE the caller's node.
                     * This works only because because we ALSO inject the caller's "machine div" ID into
                     * the fragment's ID during parseXML().
                     *
                     *      eMachine.innerHTML = sFragment;
                     *
                     * Also, if the transform function fails, make sure you're using the appropriate
                     * "components.xsl" and not a "machine.xsl", because the latter will not produce valid
                     * embeddable HTML (and is the most common cause of failure at this final stage).
                     */
                    displayMessage("Processing " + sXMLFile + "...");

                    /*
                     * Beginning with Microsoft Edge and the corresponding release of Windows 10, all the
                     * 'ActiveXObject' crud has gone away; but of course, this code must remain in place if
                     * we want to continue supporting older Internet Explorer browsers (ie, back to IE9).
                     */
                    if (window.ActiveXObject || 'ActiveXObject' in window) {        // second test is required for IE11 on Windows 8.1
                        let sFragment = xml['transformNode'](xsl);
                        if (sFragment) {
                            eMachine.outerHTML = sFragment;
                            doneMachine();
                        } else {
                            displayError(sURL, "transformNodeToObject failed");
                        }
                    }
                    else if (document.implementation && document.implementation.createDocument) {
                        let xsltProcessor = new XSLTProcessor();
                        xsltProcessor['importStylesheet'](xsl);
                        let eFragment = xsltProcessor['transformToFragment'](xml, document);
                        if (eFragment) {
                            /*
                             * This fails in Microsoft Edge...
                             *
                             *      let machine = eFragment.getElementById(idMachine);
                             *      if (!machine) {
                             *          displayError(sURL, "machine generation failed: " + idMachine);
                             *      }
                             */
                            let element = eMachine.parentNode;
                            if (element) {

                                let x = 0, y = 0;
                                let rectOld = eMachine.getBoundingClientRect();
                                if (rectOld.bottom < 0) {
                                    x = window.scrollX;
                                    y = window.scrollY;
                                }

                                element.replaceChild(eFragment, eMachine);

                                eMachine = document.getElementById(idMachine);
                                if (eMachine && rectOld.bottom < 0) {
                                    let rectNew = eMachine.getBoundingClientRect();
                                    if (window.performance && window.performance.navigation.type == window.performance.navigation.TYPE_RELOAD) {
                                        /*
                                         * TODO: I'm not sure what to do in this case, because the browser tries to be clever
                                         * on a reload and preserve the original scroll position, but there are multiple variables
                                         * (ie, the presence of a hash ID in the URL, and the fact that we just inserted an HTML
                                         * fragment) that can cause the browser to do the wrong thing.  I could look up any hash
                                         * element and call scrollIntoView(), but that addresses only one scenario.
                                         *
                                         * If I do nothing, then each successive reload simply causes the scroll position to creep
                                         * farther and farther down the page.  So, I'm electing to go to the top of the page instead.
                                         */
                                        y = 0;
                                    } else {
                                        y += Math.ceil(rectNew.height - rectOld.height);
                                    }
                                    window.scrollTo(x, y);
                                }
                                doneMachine();
                            } else {
                                /*
                                 * NOTE: This error can occur if our Node web server, when processing a folder with
                                 * both a manifest.xml with a machine.xml reference AND a README.md containing a
                                 * machine link, generates duplicate embedXXX() calls for the same machine; if the
                                 * first embedXXX() call finds its target, subsequent calls for the same target will
                                 * fail.
                                 *
                                 * Technically, such a folder is in a misconfigured state, but it happens, in part
                                 * because when we switched to the Jekyll web server, we had to add machine links to
                                 * all README.md files where we had previously relied on manifest.xml or machine.xml
                                 * processing.  This is because the Jekyll web server currently doesn't process XML
                                 * files, nor is support for that likely to be added any time soon; it was a nice
                                 * feature of the Node web server, but it's not clear that it's worth doing for Jekyll.
                                 */
                                displayError(sURL, "invalid machine element: " + idMachine);
                            }
                        } else {
                            displayError(sURL, "transformToFragment failed");
                        }
                    } else {
                        /*
                         * Perhaps I should have performed this test at the outset; on the other hand, I'm
                         * not aware of any browsers don't support one or both of the above XSLT transformation
                         * methods, so treat this as a bug.
                         */
                        displayError(sURL, "unable to transform XML: unsupported browser");
                    }
                };
                /*
                 * NOTE: sXSLFile will never be undefined by this point, but apparently the Closure Compiler doesn't realize that.
                 */
                loadXML(sXSLFile || "", "", sAppName, sAppClass, "", "", false, displayMessage, transformXML);
            };

            if (sXMLFile.charAt(0) != '<') {
                loadXML(sXMLFile, idMachine, sAppName, sAppClass, sParms || "", sClass || "", true, displayMessage, processXML);
            } else {
                parseXML(sXMLFile, "", idMachine, sAppName, sAppClass, sParms || "", sClass || "", false, displayMessage, processXML);
            }
        } else {
            displayError(sXMLFile, "missing machine element: " + idMachine);
        }
    } catch(e) {
        displayError(sXMLFile, e.message);
    }
    return fSuccess;
}

/**
 * embedC1P(idMachine, sXMLFile, sXSLFile, sParms, sClass)
 *
 * @param {string} idMachine
 * @param {string} [sXMLFile]
 * @param {string} [sXSLFile]
 * @param {string} [sParms]
 * @param {string} [sClass]
 * @return {boolean} true if successful, false if error
 */
function embedC1P(idMachine, sXMLFile, sXSLFile, sParms, sClass)
{
    if (fAsync) Web.enablePageEvents(false);
    return embedMachine("C1Pjs", "osi/c1p", idMachine, sXMLFile, sXSLFile, undefined, sClass);
}

/**
 * embedPCx86(idMachine, sXMLFile, sXSLFile, sParms, sClass)
 *
 * @param {string} idMachine
 * @param {string} [sXMLFile]
 * @param {string} [sXSLFile]
 * @param {string} [sParms]
 * @param {string} [sClass]
 * @return {boolean} true if successful, false if error
 */
function embedPCx86(idMachine, sXMLFile, sXSLFile, sParms, sClass)
{
    if (fAsync) Web.enablePageEvents(false);
    return embedMachine("PCx86", "pcx86", idMachine, sXMLFile, sXSLFile, sParms, sClass);
}

/**
 * embedPCx80(idMachine, sXMLFile, sXSLFile, sParms, sClass)
 *
 * @param {string} idMachine
 * @param {string} [sXMLFile]
 * @param {string} [sXSLFile]
 * @param {string} [sParms]
 * @param {string} [sClass]
 * @return {boolean} true if successful, false if error
 */
function embedPCx80(idMachine, sXMLFile, sXSLFile, sParms, sClass)
{
    if (fAsync) Web.enablePageEvents(false);
    return embedMachine("PCx80", "pcx80", idMachine, sXMLFile, sXSLFile, sParms, sClass);
}

/**
 * embedPDP10(idMachine, sXMLFile, sXSLFile, sParms, sClass)
 *
 * @param {string} idMachine
 * @param {string} [sXMLFile]
 * @param {string} [sXSLFile]
 * @param {string} [sParms]
 * @param {string} [sClass]
 * @return {boolean} true if successful, false if error
 */
function embedPDP10(idMachine, sXMLFile, sXSLFile, sParms, sClass)
{
    if (fAsync) Web.enablePageEvents(false);
    return embedMachine("PDPjs", "dec/pdp10", idMachine, sXMLFile, sXSLFile, sParms, sClass);
}

/**
 * embedPDP11(idMachine, sXMLFile, sXSLFile, sParms, sClass)
 *
 * @param {string} idMachine
 * @param {string} [sXMLFile]
 * @param {string} [sXSLFile]
 * @param {string} [sParms]
 * @param {string} [sClass]
 * @return {boolean} true if successful, false if error
 */
function embedPDP11(idMachine, sXMLFile, sXSLFile, sParms, sClass)
{
    if (fAsync) Web.enablePageEvents(false);
    return embedMachine("PDPjs", "dec/pdp11", idMachine, sXMLFile, sXSLFile, sParms, sClass);
}

/**
 * findMachineComponent(idMachine, sType)
 *
 * @param {string} idMachine
 * @param {string} sType
 * @return {Component|null}
 */
function findMachineComponent(idMachine, sType)
{
    return Component.getComponentByType(sType, idMachine + ".machine");
}

/**
 * commandMachine(control, fSingle, idMachine, sComponent, sCommand, sValue)
 *
 * Use Component methods to find the requested component for a specific machine, and if the component is found,
 * then check its 'exports' table for an entry matching the specified command string, and if an entry is found, then
 * the corresponding function is called with the specified data.
 *
 * @param {Object} control
 * @param {boolean} fSingle
 * @param {string} idMachine
 * @param {string} sComponent
 * @param {string} sCommand
 * @param {string} [sValue]
 * @return {boolean}
 */
function commandMachine(control, fSingle, idMachine, sComponent, sCommand, sValue)
{
    if (sCommand == "script") {
        if (Component.processScript(idMachine, sValue)) {
            if (fSingle) control.disabled = true;
            return true;
        }
        return false;
    }
    if (sComponent) {
        let component = Component.getComponentByType(sComponent, idMachine + ".machine");
        if (component) {
            let exports = component['exports'];
            if (exports) {
                let fnCommand = exports[sCommand];
                if (fnCommand) {
                    if (fnCommand.call(component, sValue)) {
                        if (fSingle) control.disabled = true;
                        return true;
                    }
                    return false;
                }
            }
        }
    }
    console.log("unimplemented: commandMachine('" + idMachine + "','" + sComponent + "','" + sCommand + "','" + sValue + "')");
    return false;
}

/**
 * Prevent the Closure Compiler from renaming functions we want to export, by adding them as global properties.
 *
 * TODO: Consider making all these functions properties on a single global object (eg, 'PCjs'), to minimize global
 * pollution and risk of name collision.
 */
if (APPNAME == "C1Pjs") {
    window['embedC1P']    = embedC1P;
}
if (APPNAME == "PCx86") {
    window['embedPC']     = embedPCx86;         // WARNING: embedPC() deprecated as of v1.23.0
    window['embedPCx86']  = embedPCx86;
}
if (APPNAME == "PCx80") {
    window['embedPCx80'] = embedPCx80;
}
if (APPNAME == "PDPjs") {
    window['embedPDP10']  = embedPDP10;
    window['embedPDP11']  = embedPDP11;
}

window['commandMachine'] = commandMachine;

window['enableEvents'] = Web.enablePageEvents;
window['sendEvent']    = Web.sendPageEvent;
