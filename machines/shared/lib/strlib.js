/**
 * @fileoverview String-related helper functions
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2022 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

"use strict";

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

if (typeof module !== "undefined") module.exports = Str;
