"use strict";

/**
 * @copyright https://www.pcjs.org/modules/defs.js (C) 2012-2025 Jeff Parsons
 */

/**
 * COMMAND is the default name of the global command handler we will define, to provide
 * the same convenient access to all the WebIO COMMAND handlers that the Debugger enjoys.
 *
 * @define {string}
 */
const COMMAND = "command";

/**
 * COMPILED is false by default; overridden with true in the Closure Compiler release.
 *
 * @define {boolean}
 */
const COMPILED = false;

/**
 * DEBUG is true by default, enabling assertions and other runtime checks; overridden with false
 * in the Closure Compiler release, which generally results in the removal of any DEBUG code.  Our
 * gulpfile, however, takes the extra precaution of physically removing all "assert" method calls
 * from the concatenated file that is generated for the Closure Compiler.
 *
 * @define {boolean}
 */
const DEBUG = true;

/**
 * FACTORY is "PCjsMachine" by default; overridden with the machine's "factory" string in machines.json
 * to ensure unique factories.
 *
 * @define {string}
 */
const FACTORY = "PCjsMachine";

/**
 * MAXDEBUG is false by default; overridden with false in the Closure Compiler release.  Set it to
 * true to manually to enable any hyper-aggressive DEBUG checks.
 *
 * @define {boolean}
 */
const MAXDEBUG = false;

/**
 * VERSION is the current PCjs Project release number, updated somewhat arbitrarily and usually only
 * after significant changes.  It will be overridden the machine's "version" string in machines.json.
 *
 * @define {string}
 */
const VERSION = "2.11";

/**
 * REPOSITORY is the primary location (eg, URL) where all PCjs-related resources can be found; it is not
 * intended to refer to any specific type of container (such as a Git repository).
 *
 * @define {string}
 */
const REPOSITORY = "pcjs.org";

const COPYRIGHT = "Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>";

/**
 * @class {Defs}
 */
class Defs {}


Defs.COMMAND    = COMMAND;
Defs.COMPILED   = COMPILED;
Defs.COPYRIGHT  = COPYRIGHT;
Defs.DEBUG      = DEBUG;
Defs.FACTORY    = FACTORY;
Defs.MAXDEBUG   = MAXDEBUG;
Defs.REPOSITORY = REPOSITORY;
Defs.VERSION    = VERSION;

/**
 * The following globals CANNOT be overridden.
 *
 * LITTLE_ENDIAN is true if the browser's ArrayBuffer storage is little-endian.  If LITTLE_ENDIAN matches
 * the endian-ness of a machine being emulated, then that machine can use ArrayBuffers for Memory buffers as-is.
 */
Defs.LITTLE_ENDIAN = function() {
    let buffer = new ArrayBuffer(2);
    new DataView(buffer).setUint16(0, 256, true);
    return new Uint16Array(buffer)[0] === 256;
}();

/**
 * List of standard message groups.  The messages properties defines the set of active message
 * groups, and their names are defined by MESSAGE_NAMES.  See the Device class for more message
 * group definitions.
 *
 * NOTE: To support more than 32 message groups, be sure to use "+", not "|", when concatenating.
 */
Defs.MESSAGE = {
    ALL:        0xffffffffffff,
    NONE:       0x000000000000,
    DEFAULT:    0x000000000000,
    BUFFER:     0x800000000000,
};

/**
 * RS-232 DB-25 Pin Definitions, mapped to bits 1-25 in a 32-bit status value.
 *
 * Serial devices in PCjs machines are considered DTE (Data Terminal Equipment), which means they should be "virtually"
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
Defs.RS232 = {
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

Defs.CLASSES = {};
Defs.CLASSES["Defs"] = Defs;

/**
 * @copyright https://www.pcjs.org/modules/numio.js (C) 2012-2025 Jeff Parsons
 */

/**
 * @class {NumIO}
 * @unrestricted
 */
class NumIO extends Defs {
    /**
     * NumIO()
     *
     * String to integer conversion:
     *
     *      isInt()
     *      parseInt()
     *      parseResource()
     *      parseSwitches()
     *
     * Integer to string conversion:
     *
     *      toBase()
     *
     * Bit operations (for values with more than 32 bits):
     *
     *      clearBits()
     *      setBits()
     *      testBits()
     *
     * Numeric array compression/decompression:
     *
     *      compress()
     *      decompress()
     *
     * Initially, this file was going to be called "stdlib.js", since the C runtime library file "stdlib.h"
     * defines numeric conversion functions like atoi().  But stdlib has too many other functions that have
     * nothing to do with data conversion, and we have many conversion functions that you won't find in stdlib.
     * So I settled on "numio.js" instead.
     *
     * @this {NumIO}
     */

    /**
     * isInt(s, base)
     *
     * The built-in parseInt() function has the annoying feature of returning a partial value (ie,
     * up to the point where it encounters an invalid character); eg, parseInt("foo", 16) returns 0xf.
     *
     * So it's best to use our own parseInt() function, which will in turn use this function to validate
     * the entire string.
     *
     * @this {NumIO}
     * @param {string} s is the string representation of some number
     * @param {number} [base] is the radix to use (default is 10); only 2, 8, 10 and 16 are supported
     * @returns {boolean} true if valid, false if invalid (or the specified base isn't supported)
     */
    isInt(s, base)
    {
        if (!base || base == 10) return s.match(/^[+-]?[0-9]+$/) !== null;
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
     * binary), and then calls isInt() to ensure we don't convert strings that contain partial values;
     * see isInt() for details.
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
     * @this {NumIO}
     * @param {string} s is the string representation of some number
     * @param {number} [base] is the radix to use (default is 10); can be overridden by prefixes/suffixes
     * @returns {number|undefined} corresponding value, or undefined if invalid
     */
    parseInt(s, base)
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
            /**
             * This adds support for the MACRO-10 binary shifting (Bn) suffix, which must be stripped from the
             * number before parsing, and then applied to the value after parsing.  If n is omitted, 35 is assumed,
             * which is a net shift of zero.  If n < 35, then a left shift of (35 - n) is required; if n > 35, then
             * a right shift of -(35 - n) is required.
             */
            let v;
            let shift = 0;
            if (base <= 10) {
                let match = s.match(/(-?[0-9]+)B([0-9]*)$/);
                if (match) {
                    s = match[1];
                    shift = 35 - ((match[2] || 35) & 0xff);
                }
            }
            if (this.isInt(s, base) && !isNaN(v = parseInt(s, base))) {
                /**
                 * With the need to support larger (eg, 36-bit) integers, truncating to 32 bits is no longer helpful.
                 *
                 *      value = v|0;
                 */
                if (shift) {
                    /**
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
     * parseResource(sURL, sData)
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
     * @this {NumIO}
     * @param {string} sURL
     * @param {string} sData
     * @returns {Object|null} (resource)
     */
    parseResource(sURL, sData)
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
                    /**
                     * Early server configs reported an error (via the nErrorCode parameter) if a tape URL was invalid,
                     * but more recent server configs now display a somewhat friendlier HTML error page.  The downside,
                     * however, is that the original error has been buried, and we've received "data" that isn't actually
                     * tape data.  So if the data we've received appears to be "HTML-like", we treat it as an error message.
                     */
                    throw new Error(sData);
                }

                /**
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
                    data = JSON.parse(sData.replace(/([a-z]+):/gm, '"$1":').replace(/\/\/[^\n]*/gm, ""));
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
                    /**
                     * Convert all words into bytes
                     */
                    resource.aBytes = new Array(a.length * 2);
                    for (i = 0, ib = 0; i < a.length; i++) {
                        resource.aBytes[ib++] = a[i] & 0xff;
                        resource.aBytes[ib++] = (a[i] >> 8) & 0xff;

                    }
                }
                else if ((a = data['longs'])) {
                    /**
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
                        this.error("empty resource: %s", sURL);
                        resource = null;
                    }
                    else if (resource.aBytes.length == 1) {
                        this.error(resource.aBytes[0]);
                        resource = null;
                    }
                }
                resource.aSymbols = data['symbols'];

            } catch (err) {
                this.error("resource (%s) exception: %s", sURL, err.message);
                resource = null;
            }
        }
        else {
            /**
             * Parse the data manually; we assume it's a series of hex byte-values separated by whitespace.
             */
            let ab = [];
            let sHexData = sData.replace(/\n/gm, " ").replace(/ +$/, "");
            let asHexData = sHexData.split(" ");
            for (i = 0; i < asHexData.length; i++) {
                let n = parseInt(asHexData[i], 16);
                if (isNaN(n)) {
                    this.error("resource (%s) contains invalid hex byte (%s)", sURL, asHexData[i]);
                    break;
                }
                ab.push(n & 0xff);
            }
            if (i == asHexData.length) resource.aBytes = ab;
        }
        return resource;
    }

    /**
     * parseSwitches(sws, switchesDefault)
     *
     * Parses DIP switch string definitions into numbers.
     *
     * @this {NumIO}
     * @param {string} sws (eg, "00000000", where sws[0] is SW0, sws[1] is SW1, etc.)
     * @param {number} [switchesDefault] (use -1 to parse sws as a mask: 0 for any non-digit character)
     * @returns {number|undefined}
     */
    parseSwitches(sws, switchesDefault)
    {
        let switches;
        if (!sws) {
            switches = switchesDefault;
        } else {
            /**
             * NOTE: It's not convenient to use parseInt() with a base of 2, in part because both bit order
             * and bit sense are reversed, but also because we use this function to parse switch masks, which
             * contain non-digits.  See the "switches" defined in invaders.json for examples.
             */
            switches = 0;
            let bit = 0x1;
            for (let i = 0; i < sws.length; i++) {
                let ch = sws.charAt(i);
                if (switchesDefault == -1) {
                    switches |= (ch != '0' && ch != '1'? 0 : bit);
                }
                else {
                    switches |= (ch == '0'? bit : 0);
                }
                bit <<= 1;
            }
        }
        return switches;
    }

    /**
     * toBase(n, base, bits, prefix, nGrouping)
     *
     * Converts the given number (as an unsigned integer) to a string using the specified base (radix).
     *
     * sprintf() may be a better choice, depending on your needs (eg, signed integers, formatting options, etc.)
     * and support for the desired radix (eg, 8, 10, and 16).
     *
     * @this {NumIO}
     * @param {number|*} n
     * @param {number} [base] (ie, the radix; 0 or undefined for default)
     * @param {number} [bits] (the number of bits in the value, 0 for variable)
     * @param {string} [prefix] (prefix is based on radix; use "" for none)
     * @param {number} [nGrouping]
     * @returns {string}
     */
    toBase(n, base, bits = 0, prefix = undefined, nGrouping = 0)
    {
        /**
         * We can't rely entirely on isNaN(), because isNaN(null) returns false, and we can't rely
         * entirely on typeof either, because typeof NaN returns "number".  Sigh.
         *
         * Alternatively, we could mask and shift n regardless of whether it's null/undefined/NaN,
         * since JavaScript coerces such operands to zero, but I think there's "value" in seeing those
         * values displayed differently.
         */
        let s = "";
        let suffix = "";
        let cch = -1;
        if (!base) base = this.nDefaultRadix || 10;
        if (bits) cch = Math.ceil(bits / Math.log2(base));
        if (prefix == undefined) {
            switch(base) {
            case 8:
                prefix = "0o";
                break;
            case 16:
                prefix = "0x";
                break;
            case 10:
                suffix = ".";
                /* falls through */
            default:
                prefix = "";
                break;
            }
        }
        if (isNaN(n) || typeof n != "number") {
            n = undefined;
            prefix = suffix = "";
        } else {
            /**
             * Callers that produced an input by dividing by a power of two rather than shifting (in order
             * to access more than 32 bits) may produce a fractional result, which ordinarily we would simply
             * ignore, but if the integer portion is zero and the sign is negative, we should probably treat
             * this value as a sign-extension.
             */
            if (n < 0 && n > -1) n = -1;
            /**
             * Negative values should be twos-complemented to produce a positive value for conversion purposes,
             * but we can only do that if/when we're given the number of bits; Math.pow(base, cch) is equivalent
             * to Math.pow(2, bits), but less precise for bases that aren't a power of two (eg, base 10).
             */
            if (bits) {
                if (n < 0) {
                    n += Math.pow(2, bits);
                }
                if (n >= Math.pow(2, bits)) {
                    cch = Math.ceil(Math.log(n) / Math.log(base));
                }
            }
        }
        let g = nGrouping || -1;
        while (cch--) {
            if (!g) {
                s = ',' + s;
                g = nGrouping;
            }
            if (n == undefined) {
                s = '?' + s;
                if (cch < 0) break;
            } else {
                let d = n % base;
                n = Math.trunc(n / base);
                d += (d >= 0 && d <= 9? 0x30 : 0x41 - 10);
                s = String.fromCharCode(d) + s;
                if (!n && cch < 0) break;
            }
            g--;
        }
        return prefix + s + suffix;
    }

    /**
     * clearBits(num, bits)
     *
     * Function for clearing bits in numbers with more than 32 bits.
     *
     * @this {NumIO}
     * @param {number} num
     * @param {number} bits
     * @returns {number} (num & ~bits)
     */
    clearBits(num, bits)
    {
        let shift = NumIO.TWO_POW32;
        let numHi = (num / shift)|0;
        let bitsHi = (bits / shift)|0;
        return (num & ~bits) + (numHi & ~bitsHi) * shift;
    }

    /**
     * setBits(num, bits)
     *
     * Function for setting bits in numbers with more than 32 bits.
     *
     * @this {NumIO}
     * @param {number} num
     * @param {number} bits
     * @returns {number} (num | bits)
     */
    setBits(num, bits)
    {
        let shift = NumIO.TWO_POW32;
        let numHi = (num / shift)|0;
        let bitsHi = (bits / shift)|0;
        return (num | bits) + (numHi | bitsHi) * shift;
    }

    /**
     * testBits(num, bits)
     *
     * Function for testing bits in numbers with more than 32 bits.
     *
     * @this {NumIO}
     * @param {number} num
     * @param {number} bits
     * @returns {boolean} (true IFF num & bits == bits)
     */
    testBits(num, bits)
    {
        let shift = NumIO.TWO_POW32;
        let numHi = (num / shift)|0;
        let bitsHi = (bits / shift)|0;
        return ((num & bits) == (bits|0) && (numHi & bitsHi) == bitsHi);
    }

    /**
     * compress(aSrc)
     *
     * Compresses an array of numbers.
     *
     * @this {NumIO}
     * @param {Array|Uint8Array} aSrc
     * @returns {Array|Uint8Array} is either the original array (aSrc), or a smaller array of "count, value" pairs (aComp)
     */
    compress(aSrc)
    {
        let iSrc = 0;
        let iComp = 0;
        let aComp = [];
        while (iSrc < aSrc.length) {
            let n = aSrc[iSrc];

            let iCompare = iSrc + 1;
            while (iCompare < aSrc.length && aSrc[iCompare] === n) iCompare++;
            aComp[iComp++] = iCompare - iSrc;
            aComp[iComp++] = n;
            iSrc = iCompare;
        }
        if (aComp.length >= aSrc.length) return aSrc;
        return aComp;
    }

    /**
     * decompress(aComp, length)
     *
     * Decompresses an array of numbers.
     *
     * @this {NumIO}
     * @param {Array} aComp
     * @param {number} [length] (expected length of decompressed data)
     * @returns {Array}
     */
    decompress(aComp, length = 0)
    {
        if (aComp.length == length) return aComp;
        let iDst = 0;
        let aDst = length? new Array(length) : [];
        let iComp = 0;
        while (iComp < aComp.length - 1) {
            let c = aComp[iComp++];
            let n = aComp[iComp++];
            while (c--) aDst[iDst++] = n;
        }

        return aDst;
    }
}

/**
 * Assorted constants
 */
NumIO.TWO_POW32 = Math.pow(2, 32);

NumIO.CLASSES["NumIO"] = NumIO;

/**
 * @copyright https://www.pcjs.org/modules/stdio.js (C) 2012-2025 Jeff Parsons
 */

/** @typedef {Function} */
let Formatter;

/**
 * @class {StdIO}
 * @unrestricted
 * @property {Object.<string,(Formatter|null)>}>} formatters
 */
class StdIO extends NumIO {
    /**
     * StdIO()
     *
     * Summary of functions:
     *
     *      addFormatType()
     *      flush()
     *      isDate()
     *      parseDate()
     *      print()
     *      printf()
     *      println()
     *      sprintf()
     *      toHex()
     *
     * This class is called "StdIO" rather than "stdio" because classes are global entities and I prefer global
     * entities to begin with a capital letter and use camelCase.  And its methods are primarily object functions
     * rather than class functions, because the parent objects are typically Device objects which may wish to have
     * unique "print" bindings.  Mingling every object's print output in the same container may not be desired.
     *
     * The filename "stdio.js" is inspired by the C runtime library file "stdio.h", since it includes printf()
     * and sprintf() functions that have many C-like features, but they also have many differences (both additions
     * and omissions).  And you will find other functions here that have no counterpart in "stdio.h", so don't take
     * the name too seriously.
     *
     * @this {StdIO}
     */
    constructor()
    {
        super();
        /**
         * We populate the sprintf() formatters table with null functions for all the predefined (built-in) types,
         * so that type validation has only one look-up to perform.
         *
         * For reference purposes, the standard ANSI C set of format types is "dioxXucsfeEgGpn%", not all of which
         * are supported.  Some built-in types have been added, including Date types (see the upper-case types),
         * a boolean type ('b'), and a JSON type ('j'); external format types include the Debugger Address type ('a'),
         * and a default number type ('n') that selects the appropriate base type ('d', 'o', or 'x'), um, based on
         * current Debugger preferences.
         */
        this.formatters = {};
        let predefinedTypes = "ACDFHGMNSTWYbdfjcsoXx%";
        for (let i = 0; i < predefinedTypes.length; i++) {
            this.formatters[predefinedTypes[i]] = null;
        }
    }

    /**
     * addFormatType(type, func)
     *
     * Whenever the specified type character is encountered in a sprintf() call, the specified
     * function will be called with all the associated formatting parameters; the function must
     * return a stringified copy of the arg.
     *
     * @this {StdIO}
     * @param {string} type (the sprintf standard requires this be a single character)
     * @param {Formatter} func
     * @returns {boolean} (true if successful, false if type character has already been defined)
     */
    addFormatType(type, func)
    {

        if (!this.formatters[type]) {
            this.formatters[type] = func;
            return true;
        }
        return false;
    }

    /**
     * flush()
     *
     * @this {StdIO}
     */
    flush()
    {
        let buffer = StdIO.PrintBuffer;
        StdIO.PrintBuffer = "";
        this.print(buffer);
    }

    /**
     * getBaseName(sFileName, fStripExt)
     *
     * This is a poor-man's version of Node's path.basename(), which Node-only components should use instead.
     *
     * Note that if fStripExt is true, this strips ANY extension, whereas path.basename() strips the extension only
     * if it matches the second parameter (eg, path.basename("/foo/bar/baz/asdf/quux.html", ".html") returns "quux").
     *
     * @this {StdIO}
     * @param {string} sFileName
     * @param {boolean} [fStripExt]
     * @param {boolean} [fAllowAmp]
     * @returns {string}
     */
    getBaseName(sFileName, fStripExt, fAllowAmp)
    {
        let sBaseName = sFileName;

        let i = sFileName.lastIndexOf('/');
        if (i >= 0) sBaseName = sFileName.substr(i + 1);

        /**
         * This next bit is a kludge to clean up names that are part of a URL that includes unsightly query parameters.
         * However, don't do that if fAllowAmp (which will be true, for example, when parsing 8.3 filenames in diskimage.js).
         */
        if (!fAllowAmp) {
            i = sBaseName.indexOf('&');
            if (i > 0) sBaseName = sBaseName.substr(0, i);
        }

        if (fStripExt) {
            i = sBaseName.lastIndexOf(".");
            if (i > 0) {
                sBaseName = sBaseName.substring(0, i);
            }
        }
        return sBaseName;
    }

    /**
     * isDate(date)
     *
     * @this {StdIO}
     * @param {Date} date
     * @returns {boolean}
     */
    isDate(date)
    {
        return !isNaN(date.getTime());
    }

    /**
     * parseDate(date)
     * parseDate(date, time)
     * parseDate(year, month, day, hour, minute, second)
     * parseDate(timestamp, fLocal)
     *
     * Produces a UTC date when ONLY a date (no time) is provided; otherwise, it combines the date and
     * and time, producing a date that is either local or UTC, depending on the presence (or lack) of time
     * zone information.  Finally, if numeric inputs are provided, then Date.UTC() is called to generate
     * a UTC time (since there is no provision for a time zone in that case either).
     *
     * In general, you should use this instead of new Date(), because the Date constructor implicitly calls
     * Date.parse(s), which behaves inconsistently.  For example, ISO date-only strings (e.g. "1970-01-01")
     * generate a UTC time, but non-ISO date-only strings (eg, "10/1/1945" or "October 1, 1945") generate a
     * local time.
     *
     * @this {StdIO}
     * @param {...} args
     * @returns {Date} (UTC unless a time string with a timezone is explicitly provided)
     */
    parseDate(...args)
    {
        let date;
        if (args[0] === undefined) {
            date = new Date(Date.now());
        }
        else if (typeof args[0] === "string") {
            let s = args[0];
            if (s.indexOf(':') < 0) {
                s += ' ' + (args[1] || "00:00:00 UTC");
            } else if (s.match(/^[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9] [0-9][0-9]:[0-9][0-9]:[0-9][0-9]$/)) {
                /**
                 * I don't care to support all the possible time zone specifiers just to determine whether or not
                 * a time zone was provided, so for now, I simply look for common date+time patterns I use, such as
                 * the "timestamp" pattern above.  TODO: Make this general-purpose someday.
                 *
                 * Also, when a timestamp is provided, then a second (optional) fLocal parameter can be specified;
                 * requesting a (local) non-UTC date can be helpful, for example, when the date is going to be used
                 * as a local file modification time.
                 */
                if (!args[1]) s += " UTC";
            }
            date = new Date(s);
        }
        else if (args[1] === undefined) {
            date = new Date(args[0]);
        } else {

            date = new Date(Date.UTC(...args));
        }
        return date;
    }

    /**
     * print(s, fBuffer)
     *
     * @this {StdIO}
     * @param {string} s
     * @param {boolean} [fBuffer] (true to always buffer; otherwise, only buffer the last partial line)
     * @returns {number}
     */
    print(s, fBuffer)
    {
        let i = s.lastIndexOf('\n');
        if (!fBuffer) {
            if (i >= 0) {
                console.log(StdIO.PrintBuffer + s.substr(0, i));
                StdIO.PrintBuffer = "";
                s = s.substr(i + 1);
            }
            StdIO.PrintTime = null;
        } else {
            if (i >= 0) {
                let now = Date.now();
                if (!StdIO.PrintTime) StdIO.PrintTime = now;
                s = ((now - StdIO.PrintTime) / 1000).toFixed(3) + ": " + s;
            }
        }
        StdIO.PrintBuffer += s;
        return s.length;
    }

    /**
     * println(s, fBuffer)
     *
     * @this {StdIO}
     * @param {string} s
     * @param {boolean} [fBuffer] (true to always buffer; otherwise, only buffer the last partial line)
     * @returns {number}
     */
    println(s, fBuffer)
    {
        return this.print(s + '\n', fBuffer);
    }

    /**
     * printf(format, ...args)
     *
     * @this {StdIO}
     * @param {string} format
     * @param {...} [args]
     * @returns {number}
     */
    printf(format, ...args)
    {
        return this.print(this.sprintf(format, ...args));
    }

    /**
     * sprintf(format, ...args)
     *
     * Copied from the CCjs project (https://github.com/jeffpar/ccjs/blob/master/lib/stdio.js) and extended.
     * Far from complete, let alone sprintf-compatible, but it's adequate for the handful of sprintf-style format
     * specifiers that I use.
     *
     * In addition to supporting lots of handy Date formatting types (see below), it also supports custom format
     * types; see addFormatType() for details.
     *
     * TODO: The %c and %s specifiers support a negative width for left-justified output, but the numeric specifiers
     * (eg, %d and %x) do not; they support only positive widths and right-justified output.  That's one of the more
     * glaring omissions at the moment.
     *
     * @this {StdIO}
     * @param {string} format
     * @param {...} [args]
     * @returns {string}
     */
    sprintf(format, ...args)
    {
        /**
         * This isn't just a nice optimization; it's also important if the caller is simply trying
         * to printf() a string that may also contain '%' and doesn't want or expect any formatting.
         */
        if (!args || !args.length) {
            return format;
        }

        let buffer = "";
        let aParts = format.split(/%([-+ 0#]*)([0-9]*|\*)(\.[0-9]+|)([bwhlL]?)([A-Za-z%])/);

        let iArg = 0, iPart;
        for (iPart = 0; iPart < aParts.length - 6; iPart += 6) {

            buffer += aParts[iPart];
            let arg, type = aParts[iPart+5];

            /**
             * Check for unrecognized types immediately, so we don't inadvertently pop any arguments.
             */
            if (this.formatters[type] === undefined) {
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
            let length = aParts[iPart+4];       // eg, 'h', 'l' or 'L'; we also allow 'w' (instead of 'h') and 'b' (instead of 'hh')
            let ach = null, s, radix = 0, prefix = "";

            /**
             * The following non-standard sprintf() format types provide handy alternatives to the
             * PHP date() format types that we previously used with the old datelib.formatDate() function:
             *
             *      a:  lowercase ante meridiem and post meridiem (am or pm)                %A (%.1A for a or p)
             *      F:  month ("January", "February", ..., "December")                      %F (%.3F for 3-letter month)
             *      g:  hour in 12-hour format                                              %G (%02G for leading zero)
             *      h:  hour in 24-hour format                                              %H (%02H for leading zero)
             *      i:  minutes (0, 1, ..., 59)                                             %N (%02N for leading zero)
             *      j:  day of the month (1, 2, ..., 31)                                    %D (%02D for leading zero)
             *      l:  day of the week ("Sunday", "Monday", ..., "Saturday")               %W (%.3W for 3-letter day)
             *      n:  month (1, 2, ..., 12)                                               %M (%02M for leading zero)
             *      s:  seconds (0, 1, ..., 59)                                             %S (%02S for leading zero)
             *      Y:  4-digit year (eg, 2014)                                             %Y (%0.2Y for 2-digit year)
             *
             * We also support a few custom format types:
             *
             *      %C:  calendar output (equivalent to: %W, %F %D, %Y)
             *      %T:  timestamp output (equivalent to: %Y-%02M-%02D %02H:%02N:%02S)
             *
             * Use the optional '#' flag with any of the above '%' format types to produce UTC results
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
            let ch;
            let date = /** @type {Date} */ ("ACDFHGMNSTWY".indexOf(type) >= 0 && typeof arg != "object"? this.parseDate(arg) : arg), dateUndefined;

            switch(type) {
            case 'C':
                ch = hash? '#' : '';
                buffer += (this.isDate(date)? this.sprintf(this.sprintf("%%%sW, %%%sF %%%sD, %%%sY", ch), date) : dateUndefined);
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
                    arg = StdIO.NamesOfMonths[arg];
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
                buffer += (this.isDate(date)? this.sprintf(this.sprintf("%%%sY-%%%s02M-%%%s02D %%%s02H:%%%s02N:%%%s02S", ch), date) : dateUndefined);
                continue;

            case 'W':
                arg = StdIO.NamesOfDays[hash? date.getUTCDay() : date.getDay()];
                type = 's';
                break;

            case 'Y':
                arg = hash? date.getUTCFullYear() : date.getFullYear();
                if (precision > 0) {
                    arg = arg % (Math.pow(10, precision));
                }
                type = 'd';
                break;
            }

            switch(type) {
            case 'b':
                /**
                 * "%b" for boolean-like values is a non-standard format specifier that seems handy.
                 */
                buffer += (arg? "true" : "false");
                break;

            case 'd':
                /**
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
                /**
                 * Before falling into the decimal floating-point code, we take this opportunity to convert
                 * the precision value, if any, to the minimum number of digits to print.  Which basically means
                 * setting zeroPad to true, width to precision, and then unsetting precision.
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
                arg = +arg;
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
                        s = ("0".repeat(width) + s).slice(-width);
                        if (arg < 0) s = '-' + s;
                    } else {
                        s = (" ".repeat(width) + s).slice(-width);
                    }
                }
                buffer += s;
                break;

            case 'j':
                /**
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
                /**
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
                ach = StdIO.HexUpperCase;
                // if (hash) prefix = "0X";     // I don't like that %#X uppercases BOTH the prefix and the value
                /* falls through */

            case 'x':
                s = "";
                if (!radix) radix = 16;
                if (!prefix && hash) prefix = "0x";
                if (!ach) ach = StdIO.HexLowerCase;
                /**
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
                    /**
                     * When zero padding is specified without a width (eg, "%0x"), select an appropriate width.
                     */
                    if (length == 'b') {
                        width = 2;      // if an 8-bit length was specified (eg, "%0bx"), then default to 2
                    } else if (length == 'h' || length == 'w') {
                        width = 4;      // if a 16-bit length was specified (eg, "%0wx"), then default to 4
                    } else if (length == 'l') {
                        width = 8;      // if a 32-bit length was specified (eg, "%0lx"), then default to 8
                    } else {
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

                if (this.formatters[type]) {
                    buffer += this.formatters[type](type, flags, width, precision, arg);
                    break;
                }
                buffer += "(unimplemented sprintf type: %" + type + ")";
                break;
            }
        }

        buffer += aParts[iPart];
        return buffer;
    }

    /**
     * toHex(n)
     *
     * This is a helper function mainly intended for use in a debugging console, allowing you to display numbers
     * as hex by evaluating the expression "this.toHex(n)".
     *
     * In a C runtime, you might use "itoa(n, buffer, 16)", which would be in "stdlib" instead of "stdio", and
     * it would not display a "0x" prefix; however, since we're relying on sprintf() to perform all our number
     * to string conversions, and sprintf() is a "stdio" function, we're keeping all these related functions here.
     *
     * @this {StdIO}
     * @param {number} n
     */
    toHex(n)
    {
        return this.sprintf("%#x", n);
    }
}

/**
 * Global variables
 */
StdIO.PrintBuffer = "";
StdIO.PrintTime = null;

/**
 * Global constants
 */
StdIO.HexLowerCase = "0123456789abcdef";
StdIO.HexUpperCase = "0123456789ABCDEF";
StdIO.NamesOfDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
StdIO.NamesOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

StdIO.CLASSES["StdIO"] = StdIO;

/**
 * @copyright https://www.pcjs.org/modules/v3/webio.js (C) 2012-2025 Jeff Parsons
 */

/** @typedef {{ name: string, path: string }} */
let Media;

/** @typedef {{ class: (string|undefined), bindings: (Object|undefined), version: (number|undefined), overrides: (Array.<string>|undefined) }} */
let Config;

/**
 * @class {WebIO}
 * @unrestricted
 * @property {Object} bindings
 * @property {number} messages
 * @property {WebIO} machine
 */
class WebIO extends StdIO {
    /**
     * WebIO(isMachine)
     *
     * @this {WebIO}
     * @param {boolean} isMachine
     */
    constructor(isMachine)
    {
        super();
        this.bindings = {};
        this.messages = 0;
        /**
         * If this is the machine device, initialize a set of per-machine variables; if it's not,
         * the Device constructor will update this.machine with the actual machine device (see addDevice()).
         */
        this.machine = this;
        if (isMachine) {
            this.machine.messages = 0;
            this.machine.aCommands = [];
            this.machine.iCommand = 0;
            this.machine.handlers = {};
            this.machine.isFullScreen = false;
        }
    }

    /**
     * addBinding(binding, element)
     *
     * @this {WebIO}
     * @param {string} binding
     * @param {Element} element
     */
    addBinding(binding, element)
    {
        let webIO = this;

        switch(binding) {

        case WebIO.BINDING.CLEAR:
            element.onclick = () => this.clear();
            break;

        case WebIO.BINDING.PRINT:
            this.disableAuto(element);
            /**
             * An onKeyDown handler has been added to this element to intercept special (non-printable) keys, such as
             * the UP and DOWN arrow keys, which are used to implement a simple command history/recall feature.
             */
            element.addEventListener(
                'keydown',
                function onKeyDown(event) {
                    webIO.onCommandEvent(event, true);
                }
            );
            /**
             * One purpose of the onKeyPress handler for this element is to stop event propagation, so that if the
             * element has been explicitly given focus, any key presses won't be picked up by the Input device (which,
             * as that device's constructor explains, is monitoring key presses for the entire document).
             *
             * The other purpose is to support the entry of commands and pass them on to parseCommands().
             */
            element.addEventListener(
                'keypress',
                function onKeyPress(event) {
                    webIO.onCommandEvent(event);
                }
            );
            break;
        }
    }

    /**
     * addBindings(bindings)
     *
     * Use the set of DESIRED bindings (this.config['bindings']) to build the set of ACTUAL bindings (this.bindings).
     *
     * bindings is usually an object map that maps internal binding IDs to external element IDs, but it can also be
     * an array of IDs (aka "direct bindings"); using an array of direct bindings simply means that the web page is
     * using element IDs that are the same as our internal IDs.  The downside of direct bindings is that you may have
     * problems loading more than one machine on the page if there's any overlap in their bindings.
     *
     * @this {WebIO}
     * @param {Object} [bindings]
     */
    addBindings(bindings = {})
    {
        if (typeof document == "undefined") return;

        if (!this.config.bindings) {
            this.config.bindings = bindings;
        }
        /**
         * To relieve every device from having to explicitly declare its own container, set up a default.
         * When using direct bindings, the default is simply 'container'; otherwise, the default 'container'
         * element ID is whatever the device ID is.
         */
        let fDirectBindings = Array.isArray(bindings);
        if (fDirectBindings) {
            if (bindings.indexOf('container') < 0) {
                bindings.push('container');
            }
        } else {
            if (!bindings['container']) {
                bindings['container'] = this.idDevice;
            }
        }
        for (let binding in bindings) {
            let id = bindings[binding];
            if (fDirectBindings) {
                binding = id;
            } else {
                /**
                 * This new bit of code allows us to define a binding like this:
                 *
                 *      "label": "0"
                 *
                 * and we will automatically look for "label0", "label1", etc, and build an array of sequential
                 * bindings for "label".  We stop building the array as soon as a missing binding is encountered.
                 */
                if (id.match(/^[0-9]+$/)) {
                    let i = +id;
                    this.bindings[binding] = [];
                    do {
                        id = binding + i++;
                        let element = document.getElementById(id);
                        if (!element) break;
                        this.bindings[binding].push(element);
                    } while (true);
                    continue;
                }
            }
            let element = document.getElementById(id);
            if (element) {
                this.bindings[binding] = element;
                this.addBinding(binding, element);
                continue;
            }
            if (WebIO.MAXDEBUG && !fDirectBindings && id != this.idDevice) {
                this.printf("unable to find element '%s' for device '%s'\n", id, this.idDevice);
            }
        }
    }

    /**
     * addBindingOptions(element, options, fReset, sDefault)
     *
     * @this {WebIO}
     * @param {Element|HTMLSelectElement} element
     * @param {Object} options (eg, key/value pairs for a series of "option" elements)
     * @param {boolean} [fReset]
     * @param {string} [sDefault]
     */
    addBindingOptions(element, options, fReset, sDefault)
    {
        if (fReset) {
            element.options.length = 0;
        }
        if (options) {
            for (let prop in options) {
                let option = document.createElement("option");
                option.text = prop;
                option.value = (typeof options[prop] == "string"? options[prop] : prop);
                element.appendChild(option);
                if (option.value == sDefault) element.selectedIndex = element.options.length - 1;
            }
        }
    }

    /**
     * addHandler(type, func)
     *
     * @this {WebIO}
     * @param {string} type
     * @param {function(Array.<string>)} func
     */
    addHandler(type, func)
    {
        if (!this.machine.handlers[type]) this.machine.handlers[type] = [];
        this.machine.handlers[type].push(func);
    }

    /**
     * alert(format, args)
     *
     * The format argument can be preceded by a boolean (fDiag) which, if true, will suppress the alert().
     *
     * @this {WebIO}
     * @param {string|boolean} format
     * @param {...} [args]
     */
    alert(format, args)
    {
        let fDiag = false;
        if (typeof format == "boolean") {
            fDiag = format;
            format = args.shift();
        }
        let s = this.sprintf(format, ...args);
        if (s) {
            this.println(s);
            if (!fDiag) alert(s);
        }
    }

    /**
     * assert(f, format, args)
     *
     * Verifies conditions that must be true (for DEBUG builds only).
     *
     * The Closure Compiler should automatically remove all references to assert() in non-DEBUG builds.
     *
     * TODO: Add a task to the build process that "asserts" there are no instances of "assertion failure" in RELEASE builds.
     *
     * @this {WebIO}
     * @param {*} f is the expression asserted to be true
     * @param {string} [format] is an optional description of the assertion failure
     * @param {...} [args]
     */
    assert(f, format, ...args)
    {
        if (WebIO.DEBUG) {
            if (!f) {
                throw new Error(format? this.sprintf(format, ...args) : "assertion failure");
            }
        }
    }

    /**
     * clear()
     *
     * @this {WebIO}
     */
    clear()
    {
        let element = this.findBinding(WebIO.BINDING.PRINT, true);
        if (element) element.value = "";
    }

    /**
     * disableAuto(element)
     *
     * @this {WebIO}
     * @param {Element} element
     */
    disableAuto(element)
    {
        element.setAttribute("autocapitalize", "off");
        element.setAttribute("autocomplete", "off");
        element.setAttribute("autocorrect", "off");
        element.setAttribute("spellcheck", "false");
        /**
         * This was added for Firefox (Safari will clear the <textarea> on a page reload, but Firefox does not).
         */
        element.value = "";
    }

    /**
     * error(format, args)
     *
     * @this {WebIO}
     * @param {string} format
     * @param {...} [args]
     */
    error(format, args)
    {
        this.alert("%s", this.sprintf(format, ...args));
    }

    /**
     * findBinding(name, all)
     *
     * @this {WebIO}
     * @param {string} [name]
     * @param {boolean} [all]
     * @returns {Element|null|undefined}
     */
    findBinding(name, all)
    {
        return this.bindings[name];
    }

    /**
     * findHandlers(type)
     *
     * @this {WebIO}
     * @param {string} type
     * @returns {Array.<function(Array.<string>)>|undefined}
     */
    findHandlers(type)
    {
        return this.machine.handlers[type];
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
     * @this {WebIO}
     * @param {Object|null|undefined} obj
     * @param {string} sProp
     * @param {string} [sSuffix]
     * @returns {string|null}
     */
    findProperty(obj, sProp, sSuffix)
    {
        if (obj) {
            do {
                for (let i = 0; i < WebIO.BrowserPrefixes.length; i++) {
                    let sName = WebIO.BrowserPrefixes[i];
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
                if (sProp.indexOf("screen") < 0) break;
                sProp = sProp.replace("screen", "Screen");
            } while (true);
        }
        return null;
    }

    /**
     * getBindingID(name)
     *
     * Since this.bindings contains the actual elements, not their original IDs, we must delve back into
     * the original this.config['bindings'] to determine the original ID.
     *
     * @this {WebIO}
     * @param {string} name
     * @returns {string|undefined}
     */
    getBindingID(name)
    {
        return this.config['bindings'] && this.config['bindings'][name];
    }

    /**
     * getBindingText(name)
     *
     * @this {WebIO}
     * @param {string} name
     * @returns {string|undefined}
     */
    getBindingText(name)
    {
        let text;
        let element = this.bindings[name];
        if (element) text = element.textContent;
        return text;
    }

    /**
     * getBounded(n, min, max)
     *
     * Restricts n to the bounds defined by min and max.  A side-effect is ensuring that the return
     * value is ALWAYS a number, even if n is not.
     *
     * @this {WebIO}
     * @param {number} n
     * @param {number} min
     * @param {number} max
     * @returns {number} (updated n)
     */
    getBounded(n, min, max)
    {

        n = +n || 0;
        if (n < min) n = min;
        if (n > max) n = max;
        return n;
    }

    /**
     * getDefault(idConfig, defaultValue, mappings)
     *
     * @this {WebIO}
     * @param {string} idConfig
     * @param {*} defaultValue
     * @param {Object} [mappings] (used to provide optional user-friendly mappings for values)
     * @returns {*}
     */
    getDefault(idConfig, defaultValue, mappings)
    {
        let value = this.config[idConfig];
        if (value === undefined) {
            value = defaultValue;
        } else {
            if (mappings && mappings[value] !== undefined) {
                value = mappings[value];
            }
            let type = typeof defaultValue;
            if (typeof value != type) {

                if (type == "boolean") {
                    value = !!value;
                } else if (typeof defaultValue == "number") {
                    value = +value;
                }
            }
        }
        return value;
    }

    /**
     * getDefaultBoolean(idConfig, defaultValue)
     *
     * @this {WebIO}
     * @param {string} idConfig
     * @param {boolean} defaultValue
     * @returns {boolean}
     */
    getDefaultBoolean(idConfig, defaultValue)
    {
        return /** @type {boolean} */ (this.getDefault(idConfig, defaultValue));
    }

    /**
     * getDefaultNumber(idConfig, defaultValue, mappings)
     *
     * @this {WebIO}
     * @param {string} idConfig
     * @param {number} defaultValue
     * @param {Object} [mappings]
     * @returns {number}
     */
    getDefaultNumber(idConfig, defaultValue, mappings)
    {
        return /** @type {number} */ (this.getDefault(idConfig, defaultValue, mappings));
    }

    /**
     * getDefaultString(idConfig, defaultValue)
     *
     * @this {WebIO}
     * @param {string} idConfig
     * @param {string} defaultValue
     * @returns {string}
     */
    getDefaultString(idConfig, defaultValue)
    {
        return /** @type {string} */ (this.getDefault(idConfig, defaultValue));
    }

    /**
     * getHost()
     *
     * This is like getHostName() but with the port number, if any.
     *
     * @this {WebIO}
     * @returns {string}
     */
    getHost()
    {
        return (window? window.location.host : "localhost");
    }

    /**
     * getHostName()
     *
     * @this {WebIO}
     * @returns {string}
     */
    getHostName()
    {
        return (window? window.location.hostname : this.getHost());
    }

    /**
     * getHostOrigin()
     *
     * @this {WebIO}
     * @returns {string}
     */
    getHostOrigin()
    {
        return (window? window.location.origin : this.getHost());
    }

    /**
     * getHostPath()
     *
     * @this {WebIO}
     * @returns {string|null}
     */
    getHostPath()
    {
        return (window? window.location.pathname : null);
    }

    /**
     * getHostProtocol()
     *
     * @this {WebIO}
     * @returns {string}
     */
    getHostProtocol()
    {
        return (window? window.location.protocol : "file:");
    }

    /**
     * getHostURL()
     *
     * @this {WebIO}
     * @returns {string|null}
     */
    getHostURL()
    {
        return (window? window.location.href : null);
    }

    /**
     * getMedia(media, done)
     *
     * Used to load media items and media libraries.
     *
     * @this {WebIO}
     * @param {Object|Array|string} media (if string, then the URL of a media item or library)
     * @param {function(*)} done
     * @returns {boolean} (true if media item or library already loaded; otherwise, the media is loaded)
     */
    getMedia(media, done)
    {
        let device = this;
        if (typeof media == "string") {
            this.getResource(media, function onLoadMedia(sURL, sResource, readyState, nErrorCode) {
                let fDiag = false;
                let sErrorMessage, resource;
                if (nErrorCode) {
                    /**
                     * Errors can happen for innocuous reasons, such as the user switching away too quickly, forcing
                     * the request to be cancelled.  And unfortunately, the browser cancels XMLHttpRequest requests
                     * BEFORE it notifies any page event handlers, so if the machine is being powered down, we won't
                     * know that yet.  For now, we suppress the alert() if there's no specific error (nErrorCode < 0).
                     */
                    fDiag = (nErrorCode < 0);
                    sErrorMessage = sURL;
                } else {
                    if (readyState != 4) return;
                    try {
                        resource = JSON.parse(sResource);
                    } catch(err) {
                        nErrorCode = 1;
                        sErrorMessage = err.message || "unknown error";
                    }
                }
                if (sErrorMessage) {
                    device.alert(fDiag, "Unable to load %s media (error %d: %s)", device.idDevice, nErrorCode, sErrorMessage);
                }
                done(resource);
            });
            return false;
        }
        done(media);
        return true;
    }

    /**
     * getResource(url, done)
     *
     * Request the specified resource, and once the request is complete, notify done().
     *
     * done() is passed four parameters:
     *
     *      done(url, sResource, readyState, nErrorCode)
     *
     * readyState comes from the request's 'readyState' property, and the operation should not be
     * considered complete until readyState is 4.
     *
     * If nErrorCode is zero, sResource should contain the requested data; otherwise, an error occurred.
     *
     * @this {WebIO}
     * @param {string} url
     * @param {function(string,string,number,number)} done
     */
    getResource(url, done)
    {
        let webIO = this;
        let nErrorCode = 0, sResource = null;
        let xmlHTTP = (window.XMLHttpRequest? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP"));

        xmlHTTP.onreadystatechange = function()
        {
            if (xmlHTTP.readyState !== 4) {
                done(url, sResource, xmlHTTP.readyState, nErrorCode);
                return;
            }

            /**
             * The following line was recommended for WebKit, as a work-around to prevent the handler firing multiple
             * times when debugging.  Unfortunately, that's not the only XMLHttpRequest problem that occurs when
             * debugging, so I think the WebKit problem is deeper than that.  When we have multiple XMLHttpRequests
             * pending, any debugging activity means most of them simply get dropped on floor, so what may actually be
             * happening are mis-notifications rather than redundant notifications.
             *
             *      xmlHTTP.onreadystatechange = undefined;
             */
            sResource = xmlHTTP.responseText;

            /**
             * The normal "success" case is an HTTP status code of 200, but when testing with files loaded
             * from the local file system (ie, when using the "file:" protocol), we have to be a bit more "flexible".
             */
            if (xmlHTTP.status == 200 || !xmlHTTP.status && sResource.length && webIO.getHostProtocol() == "file:") {
                // if (MAXDEBUG) Web.log("xmlHTTP.onreadystatechange(" + url + "): returned " + sResource.length + " bytes");
            }
            else {
                nErrorCode = xmlHTTP.status || -1;
            }
            done(url, sResource, xmlHTTP.readyState, nErrorCode);
        };

        xmlHTTP.open("GET", url, true);
        xmlHTTP.send();
    }

    /**
     * getURLParms(sParms)
     *
     * @this {WebIO}
     * @param {string} [sParms] containing the parameter portion of a URL (ie, after the '?')
     * @returns {Object} containing properties for each parameter found
     */
    getURLParms(sParms)
    {
        let parms = WebIO.URLParms;
        if (!parms) {
            parms = {};
            if (window) {
                if (!sParms) {
                    /**
                     * Note that window.location.href returns the entire URL, whereas window.location.search
                     * returns only parameters, if any (starting with the '?', which we skip over with a substr() call).
                     */
                    sParms = window.location.search.substr(1);
                }
                let match;
                let pl = /\+/g; // RegExp for replacing addition symbol with a space
                let search = /([^&=]+)=?([^&]*)/g;
                let decode = function decodeParameter(s) {
                    return decodeURIComponent(s.replace(pl, " ")).trim();
                };

                while ((match = search.exec(sParms))) {
                    parms[decode(match[1])] = decode(match[2]);
                }
            }
            WebIO.URLParms = parms;
        }
        return parms;
    }

    /**
     * hasLocalStorage
     *
     * If localStorage support exists, is enabled, and works, return true.
     *
     * @this {WebIO}
     * @returns {boolean}
     */
    hasLocalStorage()
    {
        if (WebIO.LocalStorage.Available === undefined) {
            let f = false;
            if (window) {
                try {
                    window.localStorage.setItem(WebIO.LocalStorage.Test, WebIO.LocalStorage.Test);
                    f = (window.localStorage.getItem(WebIO.LocalStorage.Test) == WebIO.LocalStorage.Test);
                    window.localStorage.removeItem(WebIO.LocalStorage.Test);
                } catch(err) {
                    this.println(err.message);
                    f = false;
                }
            }
            WebIO.LocalStorage.Available = f;
        }
        return !!WebIO.LocalStorage.Available;
    }

    /**
     * isMessageOn(messages)
     *
     * If messages is MESSAGE.DEFAULT (0), then the device's default message group(s) are used,
     * and if it's MESSAGE.ALL (-1), then the message is always displayed, regardless what's enabled.
     *
     * @this {WebIO}
     * @param {number} [messages] is zero or more MESSAGE flags
     * @returns {boolean} true if all specified message enabled, false if not
     */
    isMessageOn(messages = 0)
    {
        if (messages > 1 && (messages % 2)) messages--;
        messages = messages || this.messages;
        if ((messages|1) == -1 || this.testBits(this.machine.messages, messages)) {
            return true;
        }
        return false;
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
     * 2019-10-26: Apple has pulled a similar stunt in iPadOS 13, trying to pretend that Safari on iPadOS is
     * indistinguishable from the desktop version.  Except that there are still situations where we need to know the
     * difference (eg, when there's only a soft keyboard as opposed to a dedicated keyboard).  See monitor.js for details.
     *
     * @this {WebIO}
     * @param {string} s is a substring to search for in the user-agent; as noted above, "iOS" and "MSIE" are special values
     * @returns {boolean} is true if the string was found, false if not
     */
    isUserAgent(s)
    {
        if (window) {
            let userAgent = window.navigator.userAgent;
            return s == "iOS" && (!!userAgent.match(/(iPod|iPhone|iPad)/) || (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1)) || s == "MSIE" && !!userAgent.match(/(MSIE|Trident)/) || (userAgent.indexOf(s) >= 0);
        }
        return false;
    }

    /**
     * loadLocalStorage()
     *
     * @this {WebIO}
     * @returns {Array|null}
     */
    loadLocalStorage()
    {
        let state = null;
        if (this.hasLocalStorage()) {
            let sValue;
            if (window) {
                try {
                    sValue = window.localStorage.getItem(this.idMachine);
                    if (sValue) state = /** @type {Array} */ (JSON.parse(sValue));
                } catch (err) {
                    this.println(err.message);
                }
            }
        }
        return state;
    }

    /**
     * onCommandEvent(event, down)
     *
     * @this {WebIO}
     * @param {Event} event
     * @param {boolean} [down] (true if keydown, false if keyup, undefined if keypress)
     */
    onCommandEvent(event, down)
    {
        event = event || window.event;
        let keyCode = event.which || event.keyCode;
        if (keyCode) {
            let machine = this.machine;
            let element = /** @type {HTMLTextAreaElement} */ (event.target);
            if (down) {
                let consume = false, s;
                let text = element.value;
                let i = text.lastIndexOf('\n');
                /**
                 * Checking for BACKSPACE is not as important as the UP and DOWN arrows, but it's helpful to ensure
                 * that BACKSPACE only erases characters on the final line; consume it otherwise.
                 */
                if (keyCode == WebIO.KEYCODE.BS) {
                    if (element.selectionStart <= i + 1) {
                        consume = true;
                    }
                }
                if (keyCode == WebIO.KEYCODE.UP) {
                    consume = true;
                    if (machine.iCommand > 0) {
                        s = machine.aCommands[--machine.iCommand];
                    }
                }
                else if (keyCode == WebIO.KEYCODE.DOWN) {
                    consume = true;
                    if (machine.iCommand < machine.aCommands.length) {
                        s = machine.aCommands[++machine.iCommand] || "";
                    }
                }
                if (consume) event.preventDefault();
                if (s != undefined) {
                    element.value = text.substr(0, i + 1) + s;
                }
            }
            else {
                let charCode = keyCode;
                let char = String.fromCharCode(charCode);
                /**
                 * Move the caret to the end of any text in the textarea, unless it's already
                 * past the final LF (because it's OK to insert characters on the last line).
                 */
                let text = element.value;
                let i = text.lastIndexOf('\n');
                if (element.selectionStart <= i) {
                    element.setSelectionRange(text.length, text.length);
                }
                /**
                 * Don't let the Input device's document-based keypress handler see any key presses
                 * that came to this element first.
                 */
                event.stopPropagation();
                /**
                 * If '@' is pressed as the first character on the line, then append the last command
                 * that parseCommands() processed, and transform '@' into ENTER.
                 */
                if (char == '@' && machine.iCommand > 0) {
                    if (i + 1 == text.length) {
                        element.value += machine.aCommands[--machine.iCommand];
                        char = '\r';
                    }
                }
                /**
                 * On the ENTER key, call parseCommands() to look for any COMMAND handlers and invoke
                 * them until one of them returns true.
                 *
                 * Note that even though new lines are entered with the ENTER (CR) key, which uses
                 * ASCII character '\r' (aka RETURN aka CR), new lines are stored in the text buffer
                 * as ASCII character '\n' (aka LINEFEED aka LF).
                 */
                if (char == '\r') {
                    /**
                     * At the time we call any command handlers, a LINEFEED will not yet have been
                     * appended to the text, so for consistency, we prevent the default behavior and
                     * add the LINEFEED ourselves.  Unfortunately, one side-effect is that we must
                     * go to some extra effort to ensure the cursor remains in view; hence the stupid
                     * blur() and focus() calls.
                     */
                    event.preventDefault();
                    text = (element.value += '\n');
                    element.blur();
                    element.focus();
                    let i = text.lastIndexOf('\n', text.length - 2);
                    let commands = text.slice(i + 1, -1) || "";
                    let result = this.parseCommands(commands);
                    if (result) this.println(result.replace(/\n$/, ""), false);
                }
            }
        }
    }

    /**
     * onPageEvent(sName, fn)
     *
     * This function creates a chain of callbacks, allowing multiple JavaScript modules to define handlers
     * for the same event, which wouldn't be possible if everyone modified window['onload'], window['onunload'],
     * etc, themselves.
     *
     * NOTE: It's risky to refer to obscure event handlers with "dot" names, because the Closure Compiler may
     * erroneously replace them (eg, window.onpageshow is a good example).
     *
     * @this {WebIO}
     * @param {string} sFunc
     * @param {function()} fn
     */
    onPageEvent(sFunc, fn)
    {
        if (window) {
            let fnPrev = window[sFunc];
            if (typeof fnPrev !== 'function') {
                window[sFunc] = fn;
            } else {
                /**
                 * TODO: Determine whether there's any value in receiving/sending the Event object that the
                 * browser provides when it generates the original event.
                 */
                window[sFunc] = function onWindowEvent() {
                    if (fnPrev) fnPrev();
                    fn();
                };
            }
        }
    }

    /**
     * parseBoolean(token)
     *
     * @this {WebIO}
     * @param {string} token (true if token is "on" or "true", false if "off" or "false", undefined otherwise)
     * @returns {boolean|undefined}
     */
    parseBoolean(token)
    {
        return (token == "true" || token == "on"? true : (token == "false" || token == "off"? false : undefined));
    }

    /**
     * parseCommand(command)
     *
     * @this {WebIO}
     * @param {string} [command]
     * @returns {string|undefined}
     */
    parseCommand(command)
    {
        let result;
        if (command != undefined) {
            let machine = this.machine;
            try {
                command = command.trim();
                if (command) {
                    if (machine.iCommand < machine.aCommands.length && command == machine.aCommands[machine.iCommand]) {
                        machine.iCommand++;
                    } else {
                        machine.aCommands.push(command);
                        machine.iCommand = machine.aCommands.length;
                    }
                }

                let aTokens = command.split(' ');
                let token = aTokens[0], message, on, list, iToken;
                let afnHandlers = this.findHandlers(WebIO.HANDLER.COMMAND);

                switch(token[0]) {
                case 'm':
                    if (token[1] == '?') {
                        result = "";
                        WebIO.MESSAGE_COMMANDS.forEach((command) => {result += command + '\n';});
                        if (result) result = "message commands:\n" + result;
                        break;
                    }
                    result = ""; iToken = 1; list = undefined;
                    token = aTokens[aTokens.length-1].toLowerCase();
                    on = this.parseBoolean(token);
                    if (on != undefined) {
                        aTokens.pop();
                    }
                    if (aTokens.length <= 1) {
                        if (on != undefined) {
                            list = on;
                            on = undefined;
                        }
                        aTokens[iToken] = "all";
                    }
                    if (aTokens[iToken] == "all") {
                        aTokens = Object.keys(WebIO.MESSAGE_NAMES);
                    }
                    for (let i = iToken; i < aTokens.length; i++) {
                        token = aTokens[i];
                        message = WebIO.MESSAGE_NAMES[token];
                        if (!message) {
                            result += "unrecognized message: " + token + '\n';
                            break;
                        }
                        if (on != undefined) {
                            this.setMessages(message, on);
                        }
                        if (list == undefined || list == this.isMessageOn(message)) {
                            result += this.sprintf("%8s: %b\n", token, this.isMessageOn(message));
                        }
                    }
                    if (this.isMessageOn(WebIO.MESSAGE.BUFFER)) {
                        result += "all messages will be buffered until buffer is turned off\n";
                    }
                    if (!result) result = "no messages\n";
                    break;

                case '?':
                    result = "";
                    WebIO.COMMANDS.forEach((command) => {result += command + '\n';});
                    if (result) result = "default commands:\n" + result;
                    /* falls through */

                default:
                    aTokens.unshift(command);
                    if (afnHandlers) {
                        for (let i = 0; i < afnHandlers.length; i++) {
                            let s = afnHandlers[i](aTokens);
                            if (s != undefined) {
                                if (!result) {
                                    result = s;
                                } else {
                                    result += s;
                                }
                                break;
                            }
                        }
                    }
                    break;
                }
            }
            catch(err) {
                result = "error: " + err.message + '\n';
            }
        }
        return result;
    }

    /**
     * parseCommands(commands)
     *
     * @this {WebIO}
     * @param {string} [commands]
     * @returns {string|undefined}
     */
    parseCommands(commands = "?")
    {
        let result;
        if (commands) {
            result = "";
            let aCommands = commands.split(/(?:\n|;\s*)/);
            for (let i = 0; i < aCommands.length; i++) {
                result += this.parseCommand(aCommands[i]);
            }
        }
        return result;
    }

    /**
     * print(s)
     *
     * This overrides StdIO.print(), in case the device has a PRINT binding that should be used instead,
     * or if all printing should be buffered.
     *
     * @this {WebIO}
     * @param {string} s
     * @param {boolean} [fBuffer] (true to always buffer; otherwise, only buffer the last partial line)
     * @returns {number}
     */
    print(s, fBuffer)
    {
        if (fBuffer == undefined) {
            fBuffer = this.isMessageOn(WebIO.MESSAGE.BUFFER);
        }
        if (!fBuffer) {
            let element = this.findBinding(WebIO.BINDING.PRINT, true);
            if (element) {
                /**
                 * To help avoid situations where the element can get overwhelmed by the same repeated string,
                 * don't add the string if it already appears at the end.
                 */
                if (element.value.substr(-s.length) != s) {
                    element.value += s;
                    /**
                     * Prevent the <textarea> from getting too large; otherwise, printing becomes slower and slower.
                     */
                    if (!WebIO.DEBUG && element.value.length > 8192) {
                        element.value = element.value.substr(element.value.length - 4096);
                    }
                    element.scrollTop = element.scrollHeight;
                    /**
                     * Safari requires this, to keep the caret at the end; Chrome and Firefox, not so much.  Go figure.
                     *
                     * However, if I do this in Safari on iPadOS WHILE the app is full-screen, Safari cancels full-screen
                     * mode.  Argh.  And if printf() is called during the full-screen mode change, setSelectionRange() may
                     * trigger the iPad's soft keyboard, even if the machine does not require it (eg, Space Invaders).
                     *
                     * So this Safari-specific hack is now performed ONLY on non-iOS devices.
                     */
                    if (!this.isUserAgent("iOS")) {
                        element.setSelectionRange(element.value.length, element.value.length);
                    }
                }
                return s.length;
            }
        }
        return super.print(s, fBuffer);
    }


    /**
     * printf(format, ...args)
     *
     * This overrides StdIO.printf(), to add support for messages; if format is a number, then it's treated
     * as one or more MESSAGE flags, and the real format string is the first arg.
     *
     * @this {WebIO}
     * @param {string|number} format
     * @param {...} [args]
     * @returns {number}
     */
    printf(format, ...args)
    {
        let messages = 0;
        if (typeof format == "number") {
            messages = format;
            format = args.shift();
        }
        if (this.isMessageOn(messages)) {
            return super.printf(format, ...args);
        }
        return 0;
    }

    /**
     * saveLocalStorage(state)
     *
     * @this {WebIO}
     * @param {Array} state
     * @returns {boolean} true if successful, false if error
     */
    saveLocalStorage(state)
    {
        if (this.hasLocalStorage()) {
            let sValue = JSON.stringify(state);
            try {
                window.localStorage.setItem(this.idMachine, sValue);
                return true;
            } catch(err) {
                this.println(err.message);
            }
        }
        return false;
    }

    /**
     * setBindingText(name, text)
     *
     * @this {WebIO}
     * @param {string} name
     * @param {string} text
     * @returns {boolean} (true if binding exists; false otherwise)
     */
    setBindingText(name, text)
    {
        let element = this.bindings[name];
        if (element) {
            if (element.textContent != text) {
                element.textContent = text;
            }
            return true;
        }
        return false;
    }

    /**
     * getMessages()
     *
     * @this {WebIO}
     * @returns {number}
     */
    getMessages()
    {
        return this.machine.messages;
    }

    /**
     * setMessages(messages, on)
     *
     * Use this function to set/clear message groups.  Use isMessageOn() to decide whether to print
     * messages that are part of a group.
     *
     * MESSAGE.BUFFER is special, causing all print calls to be buffered; the print buffer will be dumped
     * as soon as setMessages() clears MESSAGE.BUFFER.
     *
     * @this {WebIO}
     * @param {number} messages
     * @param {boolean} on (true to set, false to clear)
     * @returns {number} (previous messages set)
     */
    setMessages(messages, on)
    {
        let flush = false;
        let previous = this.machine.messages;
        if (on) {
            this.machine.messages = this.setBits(this.machine.messages, messages);
        } else {
            flush = (this.testBits(this.machine.messages, WebIO.MESSAGE.BUFFER) && this.testBits(messages, WebIO.MESSAGE.BUFFER));
            this.machine.messages = this.clearBits(this.machine.messages, messages);
        }
        if (flush) this.flush();
        return previous;
    }
}

WebIO.BINDING = {
    CLEAR:      "clear",
    PRINT:      "print"
};

WebIO.COMMANDS = [
    "\u2191 \u2193\t\trecall commands",
    "@\t\trepeat last command",
    "m?\t\tmessage commands"
];

WebIO.MESSAGE_COMMANDS = [
    "m\t\tdisplay all messages",
    "m on\t\tdisplay all active messages",
    "m off\t\tdisplay all inactive messages",
    "m all [on|off]\tturn all messages on or off",
    "m ... [on|off]\tturn selected messages on or off"
];

/**
 * NOTE: The first name is automatically omitted from global "on" and "off" operations.
 */
WebIO.MESSAGE_NAMES = {
    "all":      WebIO.MESSAGE.ALL,
    "buffer":   WebIO.MESSAGE.BUFFER
};

WebIO.HANDLER = {
    COMMAND:    "command"
};

/**
 * Codes provided by KeyboardEvent.keyCode on a "keypress" event (aka ASCII codes).
 */
WebIO.CHARCODE = {
    /* 0x0D */ CR:          13,
    /* 0x41 */ A:           65,
    /* 0x42 */ B:           66,
    /* 0x43 */ C:           67,
    /* 0x44 */ D:           68,
    /* 0x45 */ E:           69,
    /* 0x46 */ F:           70,
    /* 0x47 */ G:           71,
    /* 0x48 */ H:           72,
    /* 0x49 */ I:           73,
    /* 0x4A */ J:           74,
    /* 0x4B */ K:           75,
    /* 0x4C */ L:           76,
    /* 0x4D */ M:           77,
    /* 0x4E */ N:           78,
    /* 0x4F */ O:           79,
    /* 0x50 */ P:           80,
    /* 0x51 */ Q:           81,
    /* 0x52 */ R:           82,
    /* 0x53 */ S:           83,
    /* 0x54 */ T:           84,
    /* 0x55 */ U:           85,
    /* 0x56 */ V:           86,
    /* 0x57 */ W:           87,
    /* 0x58 */ X:           88,
    /* 0x59 */ Y:           89,
    /* 0x5A */ Z:           90,
    /* 0x61 */ a:           97,
    /* 0x62 */ b:           98,
    /* 0x63 */ c:           99,
    /* 0x64 */ d:           100,
    /* 0x65 */ e:           101,
    /* 0x66 */ f:           102,
    /* 0x67 */ g:           103,
    /* 0x68 */ h:           104,
    /* 0x69 */ i:           105,
    /* 0x6A */ j:           106,
    /* 0x6B */ k:           107,
    /* 0x6C */ l:           108,
    /* 0x6D */ m:           109,
    /* 0x6E */ n:           110,
    /* 0x6F */ o:           111,
    /* 0x70 */ p:           112,
    /* 0x71 */ q:           113,
    /* 0x72 */ r:           114,
    /* 0x73 */ s:           115,
    /* 0x74 */ t:           116,
    /* 0x75 */ u:           117,
    /* 0x76 */ v:           118,
    /* 0x77 */ w:           119,
    /* 0x78 */ x:           120,
    /* 0x79 */ y:           121,
    /* 0x7A */ z:           122
};

/**
 * Codes provided by KeyboardEvent.keyCode on "keydown" and "keyup" events.
 */
WebIO.KEYCODE = {
    /* 0x08 */  BS:          8,         // BACKSPACE        (ASCII.CTRL_H)
    /* 0x09 */  TAB:         9,         // TAB              (ASCII.CTRL_I)
    /* 0x0A */  LF:          10,        // LINEFEED         (ASCII.CTRL_J) (Some Windows-based browsers used to generate this via CTRL-ENTER)
    /* 0x0D */  CR:          13,        // CARRIAGE RETURN  (ASCII.CTRL_M)
    /* 0x10 */  SHIFT:       16,
    /* 0x11 */  CTRL:        17,
    /* 0x12 */  ALT:         18,
    /* 0x13 */  PAUSE:       19,        // PAUSE/BREAK
    /* 0x14 */  CAPS_LOCK:   20,
    /* 0x1B */  ESC:         27,
    /* 0x20 */  SPACE:       32,
    /* 0x21 */  PGUP:        33,
    /* 0x22 */  PGDN:        34,
    /* 0x23 */  END:         35,
    /* 0x24 */  HOME:        36,
    /* 0x25 */  LEFT:        37,
    /* 0x26 */  UP:          38,
    /* 0x27 */  RIGHT:       39,
    /* 0x27 */  FF_QUOTE:    39,
    /* 0x28 */  DOWN:        40,
    /* 0x2C */  FF_COMMA:    44,
    /* 0x2C */  PRTSC:       44,
    /* 0x2D */  INS:         45,
    /* 0x2E */  DEL:         46,
    /* 0x2E */  FF_PERIOD:   46,
    /* 0x2F */  FF_SLASH:    47,
    /* 0x30 */  ZERO:        48,
    /* 0x31 */  ONE:         49,
    /* 0x32 */  TWO:         50,
    /* 0x33 */  THREE:       51,
    /* 0x34 */  FOUR:        52,
    /* 0x35 */  FIVE:        53,
    /* 0x36 */  SIX:         54,
    /* 0x37 */  SEVEN:       55,
    /* 0x38 */  EIGHT:       56,
    /* 0x39 */  NINE:        57,
    /* 0x3B */  FF_SEMI:     59,
    /* 0x3D */  FF_EQUALS:   61,
    /* 0x41 */  A:           65,
    /* 0x42 */  B:           66,
    /* 0x43 */  C:           67,
    /* 0x44 */  D:           68,
    /* 0x45 */  E:           69,
    /* 0x46 */  F:           70,
    /* 0x47 */  G:           71,
    /* 0x48 */  H:           72,
    /* 0x49 */  I:           73,
    /* 0x4A */  J:           74,
    /* 0x4B */  K:           75,
    /* 0x4C */  L:           76,
    /* 0x4D */  M:           77,
    /* 0x4E */  N:           78,
    /* 0x4F */  O:           79,
    /* 0x50 */  P:           80,
    /* 0x51 */  Q:           81,
    /* 0x52 */  R:           82,
    /* 0x53 */  S:           83,
    /* 0x54 */  T:           84,
    /* 0x55 */  U:           85,
    /* 0x56 */  V:           86,
    /* 0x57 */  W:           87,
    /* 0x58 */  X:           88,
    /* 0x59 */  Y:           89,
    /* 0x5A */  Z:           90,
    /* 0x5B */  CMD:         91,        // aka WIN
    /* 0x5B */  FF_LBRACK:   91,
    /* 0x5C */  FF_BSLASH:   92,
    /* 0x5D */  RCMD:        93,        // aka MENU
    /* 0x5D */  FF_RBRACK:   93,
    /* 0x60 */  NUM_0:       96,
    /* 0x60 */  NUM_INS:     96,
    /* 0x60 */  FF_BQUOTE:   96,
    /* 0x61 */  NUM_1:       97,
    /* 0x61 */  NUM_END:     97,
    /* 0x62 */  NUM_2:       98,
    /* 0x62 */  NUM_DOWN:    98,
    /* 0x63 */  NUM_3:       99,
    /* 0x63 */  NUM_PGDN:    99,
    /* 0x64 */  NUM_4:       100,
    /* 0x64 */  NUM_LEFT:    100,
    /* 0x65 */  NUM_5:       101,
    /* 0x65 */  NUM_CENTER:  101,
    /* 0x66 */  NUM_6:       102,
    /* 0x66 */  NUM_RIGHT:   102,
    /* 0x67 */  NUM_7:       103,
    /* 0x67 */  NUM_HOME:    103,
    /* 0x68 */  NUM_8:       104,
    /* 0x68 */  NUM_UP:      104,
    /* 0x69 */  NUM_9:       105,
    /* 0x69 */  NUM_PGUP:    105,
    /* 0x6A */  NUM_MUL:     106,
    /* 0x6B */  NUM_ADD:     107,
    /* 0x6D */  NUM_SUB:     109,
    /* 0x6E */  NUM_DEL:     110,       // aka PERIOD
    /* 0x6F */  NUM_DIV:     111,
    /* 0x70 */  F1:          112,
    /* 0x71 */  F2:          113,
    /* 0x72 */  F3:          114,
    /* 0x73 */  F4:          115,
    /* 0x74 */  F5:          116,
    /* 0x75 */  F6:          117,
    /* 0x76 */  F7:          118,
    /* 0x77 */  F8:          119,
    /* 0x78 */  F9:          120,
    /* 0x79 */  F10:         121,
    /* 0x7A */  F11:         122,
    /* 0x7B */  F12:         123,
    /* 0x90 */  NUM_LOCK:    144,
    /* 0x91 */  SCROLL_LOCK: 145,
    /* 0xAD */  FF_DASH:     173,
    /* 0xBA */  SEMI:        186,       // Firefox:  59 (FF_SEMI)
    /* 0xBB */  EQUALS:      187,       // Firefox:  61 (FF_EQUALS)
    /* 0xBC */  COMMA:       188,
    /* 0xBD */  DASH:        189,       // Firefox: 173 (FF_DASH)
    /* 0xBE */  PERIOD:      190,
    /* 0xBF */  SLASH:       191,
    /* 0xC0 */  BQUOTE:      192,
    /* 0xDB */  LBRACK:      219,
    /* 0xDC */  BSLASH:      220,
    /* 0xDD */  RBRACK:      221,
    /* 0xDE */  QUOTE:       222,
    /* 0xE0 */  FF_CMD:      224,       // Firefox only (used for both CMD and RCMD)
                LOCK:        901,       // keyCode modifier: treat subsequent keyCode as a lock
                VIRTUAL:    1000        // bias used by other devices to define "virtual" keyCodes
};

/**
 * Maps Firefox-specific keyCodes to their more common keyCode counterparts.
 */
WebIO.FF_KEYCODE = {
    [WebIO.KEYCODE.FF_SEMI]:    WebIO.KEYCODE.SEMI,     //  59 -> 186
    [WebIO.KEYCODE.FF_EQUALS]:  WebIO.KEYCODE.EQUALS,   //  61 -> 187
    [WebIO.KEYCODE.FF_DASH]:    WebIO.KEYCODE.DASH,     // 173 -> 189
    [WebIO.KEYCODE.FF_CMD]:     WebIO.KEYCODE.CMD       // 224 -> 91
};

/**
 * Supported values that a browser may store in the 'location' property of a keyboard event object.
 */
WebIO.LOCATION = {
    LEFT:       1,
    RIGHT:      2,
    NUMPAD:     3
};

/**
 * This maps KEYCODE values to ASCII character (or a string representation for non-ASCII keys).
 */
WebIO.KEYNAME = {
    [WebIO.KEYCODE.BS]:     "\b",
    [WebIO.KEYCODE.TAB]:    "\t",
    [WebIO.KEYCODE.LF]:     "\n",
    [WebIO.KEYCODE.CR]:     "\r",
    [WebIO.KEYCODE.SPACE]:  " ",
    [WebIO.KEYCODE.ZERO]:   "0",
    [WebIO.KEYCODE.ONE]:    "1",
    [WebIO.KEYCODE.TWO]:    "2",
    [WebIO.KEYCODE.THREE]:  "3",
    [WebIO.KEYCODE.FOUR]:   "4",
    [WebIO.KEYCODE.FIVE]:   "5",
    [WebIO.KEYCODE.SIX]:    "6",
    [WebIO.KEYCODE.SEVEN]:  "7",
    [WebIO.KEYCODE.EIGHT]:  "8",
    [WebIO.KEYCODE.NINE]:   "9",
    [WebIO.KEYCODE.A]:      "A",
    [WebIO.KEYCODE.B]:      "B",
    [WebIO.KEYCODE.C]:      "C",
    [WebIO.KEYCODE.D]:      "D",
    [WebIO.KEYCODE.E]:      "E",
    [WebIO.KEYCODE.F]:      "F",
    [WebIO.KEYCODE.G]:      "G",
    [WebIO.KEYCODE.H]:      "H",
    [WebIO.KEYCODE.I]:      "I",
    [WebIO.KEYCODE.J]:      "J",
    [WebIO.KEYCODE.K]:      "K",
    [WebIO.KEYCODE.L]:      "L",
    [WebIO.KEYCODE.M]:      "M",
    [WebIO.KEYCODE.N]:      "N",
    [WebIO.KEYCODE.O]:      "O",
    [WebIO.KEYCODE.P]:      "P",
    [WebIO.KEYCODE.Q]:      "Q",
    [WebIO.KEYCODE.R]:      "R",
    [WebIO.KEYCODE.S]:      "S",
    [WebIO.KEYCODE.T]:      "T",
    [WebIO.KEYCODE.U]:      "U",
    [WebIO.KEYCODE.V]:      "V",
    [WebIO.KEYCODE.W]:      "W",
    [WebIO.KEYCODE.X]:      "X",
    [WebIO.KEYCODE.Y]:      "Y",
    [WebIO.KEYCODE.Z]:      "Z",
    [WebIO.KEYCODE.LEFT]:   "Left",
    [WebIO.KEYCODE.RIGHT]:  "Right",
};

WebIO.BrowserPrefixes = ['', 'moz', 'ms', 'webkit'];

WebIO.COLORS = {
    "aliceblue":            "#f0f8ff",
    "antiquewhite":         "#faebd7",
    "aqua":                 "#00ffff",
    "aquamarine":           "#7fffd4",
    "azure":                "#f0ffff",
    "beige":                "#f5f5dc",
    "bisque":               "#ffe4c4",
    "black":                "#000000",
    "blanchedalmond":       "#ffebcd",
    "blue":                 "#0000ff",
    "blueviolet":           "#8a2be2",
    "brown":                "#a52a2a",
    "burlywood":            "#deb887",
    "cadetblue":            "#5f9ea0",
    "chartreuse":           "#7fff00",
    "chocolate":            "#d2691e",
    "coral":                "#ff7f50",
    "cornflowerblue":       "#6495ed",
    "cornsilk":             "#fff8dc",
    "crimson":              "#dc143c",
    "cyan":                 "#00ffff",
    "darkblue":             "#00008b",
    "darkcyan":             "#008b8b",
    "darkgoldenrod":        "#b8860b",
    "darkgray":             "#a9a9a9",
    "darkgreen":            "#006400",
    "darkkhaki":            "#bdb76b",
    "darkmagenta":          "#8b008b",
    "darkolivegreen":       "#556b2f",
    "darkorange":           "#ff8c00",
    "darkorchid":           "#9932cc",
    "darkred":              "#8b0000",
    "darksalmon":           "#e9967a",
    "darkseagreen":         "#8fbc8f",
    "darkslateblue":        "#483d8b",
    "darkslategray":        "#2f4f4f",
    "darkturquoise":        "#00ced1",
    "darkviolet":           "#9400d3",
    "deeppink":             "#ff1493",
    "deepskyblue":          "#00bfff",
    "dimgray":              "#696969",
    "dodgerblue":           "#1e90ff",
    "firebrick":            "#b22222",
    "floralwhite":          "#fffaf0",
    "forestgreen":          "#228b22",
    "fuchsia":              "#ff00ff",
    "gainsboro":            "#dcdcdc",
    "ghostwhite":           "#f8f8ff",
    "gold":                 "#ffd700",
    "goldenrod":            "#daa520",
    "gray":                 "#808080",
    "green":                "#008000",
    "greenyellow":          "#adff2f",
    "honeydew":             "#f0fff0",
    "hotpink":              "#ff69b4",
    "indianred ":           "#cd5c5c",
    "indigo":               "#4b0082",
    "ivory":                "#fffff0",
    "khaki":                "#f0e68c",
    "lavender":             "#e6e6fa",
    "lavenderblush":        "#fff0f5",
    "lawngreen":            "#7cfc00",
    "lemonchiffon":         "#fffacd",
    "lightblue":            "#add8e6",
    "lightcoral":           "#f08080",
    "lightcyan":            "#e0ffff",
    "lightgoldenrodyellow": "#fafad2",
    "lightgrey":            "#d3d3d3",
    "lightgreen":           "#90ee90",
    "lightpink":            "#ffb6c1",
    "lightsalmon":          "#ffa07a",
    "lightseagreen":        "#20b2aa",
    "lightskyblue":         "#87cefa",
    "lightslategray":       "#778899",
    "lightsteelblue":       "#b0c4de",
    "lightyellow":          "#ffffe0",
    "lime":                 "#00ff00",
    "limegreen":            "#32cd32",
    "linen":                "#faf0e6",
    "magenta":              "#ff00ff",
    "maroon":               "#800000",
    "mediumaquamarine":     "#66cdaa",
    "mediumblue":           "#0000cd",
    "mediumorchid":         "#ba55d3",
    "mediumpurple":         "#9370d8",
    "mediumseagreen":       "#3cb371",
    "mediumslateblue":      "#7b68ee",
    "mediumspringgreen":    "#00fa9a",
    "mediumturquoise":      "#48d1cc",
    "mediumvioletred":      "#c71585",
    "midnightblue":         "#191970",
    "mintcream":            "#f5fffa",
    "mistyrose":            "#ffe4e1",
    "moccasin":             "#ffe4b5",
    "navajowhite":          "#ffdead",
    "navy":                 "#000080",
    "oldlace":              "#fdf5e6",
    "olive":                "#808000",
    "olivedrab":            "#6b8e23",
    "orange":               "#ffa500",
    "orangered":            "#ff4500",
    "orchid":               "#da70d6",
    "palegoldenrod":        "#eee8aa",
    "palegreen":            "#98fb98",
    "paleturquoise":        "#afeeee",
    "palevioletred":        "#d87093",
    "papayawhip":           "#ffefd5",
    "peachpuff":            "#ffdab9",
    "peru":                 "#cd853f",
    "pink":                 "#ffc0cb",
    "plum":                 "#dda0dd",
    "powderblue":           "#b0e0e6",
    "purple":               "#800080",
    "rebeccapurple":        "#663399",
    "red":                  "#ff0000",
    "rosybrown":            "#bc8f8f",
    "royalblue":            "#4169e1",
    "saddlebrown":          "#8b4513",
    "salmon":               "#fa8072",
    "sandybrown":           "#f4a460",
    "seagreen":             "#2e8b57",
    "seashell":             "#fff5ee",
    "sienna":               "#a0522d",
    "silver":               "#c0c0c0",
    "skyblue":              "#87ceeb",
    "slateblue":            "#6a5acd",
    "slategray":            "#708090",
    "snow":                 "#fffafa",
    "springgreen":          "#00ff7f",
    "steelblue":            "#4682b4",
    "tan":                  "#d2b48c",
    "teal":                 "#008080",
    "thistle":              "#d8bfd8",
    "tomato":               "#ff6347",
    "turquoise":            "#40e0d0",
    "violet":               "#ee82ee",
    "wheat":                "#f5deb3",
    "white":                "#ffffff",
    "whitesmoke":           "#f5f5f5",
    "yellow":               "#ffff00",
    "yellowgreen":          "#9acd32"
};

WebIO.LocalStorage = {
    Available:  undefined,
    Test:       "PCjs.localStorage"
};

WebIO.CLASSES["WebIO"] = WebIO;

/**
 * @copyright https://www.pcjs.org/modules/v3/device.js (C) 2012-2025 Jeff Parsons
 */

/** @typedef {{ get: function(), set: (function(number)|null) }} */
let Register;

/**
 * In addition to basic Device services, such as:
 *
 *      addDevice()
 *      enumDevices()
 *      findDevice()
 *      findDeviceByClass()
 *
 * this class also supports register "registration" services, to allow a Device to make any registers
 * it supports available by name to other devices (notably the Debugger):
 *
 *      defineRegister()
 *      defineRegisterAlias()
 *      getRegister()
 *      setRegister()
 *
 * Besides CPUs, other devices may have internal registers or ports that are useful to access by name, too.
 *
 * @class {Device}
 * @unrestricted
 * @property {string} idMachine
 * @property {string} idDevice
 * @property {Config} config
 * @property {string} id
 * @property {Object.<Register>} registers
 * @property {CPU|undefined|null} cpu
 * @property {Debugger|undefined|null} dbg
 */
class Device extends WebIO {
    /**
     * Device()
     *
     * Supported config properties:
     *
     *      "bindings": object containing name/value pairs, where name is the generic name
     *      of a element, and value is the ID of the DOM element that should be mapped to it
     *
     * The properties in the "bindings" object are copied to our own bindings object in addBindings(),
     * but only for DOM elements that actually exist, and it is the elements themselves (rather than
     * their IDs) that we store.
     *
     * Also, URL parameters can be used to override config properties, as long as those properties
     * have been listed in the device's "overrides" array.  For example, the URL:
     *
     *      http://localhost:4000/?cyclesPerSecond=100000
     *
     * will set the Time device's cyclesPerSecond config property to 100000.  In general, the values
     * will be treated as strings, unless they contain all digits (number), or equal "true" or "false"
     * (boolean).
     *
     * @this {Device}
     * @param {string} [idMachine]
     * @param {string} [idDevice]
     * @param {Config} [config]
     * @param {Array} [overrides] (default overrides, if any, which in turn can be overridden by config['overrides'])
     */
    constructor(idMachine = "default", idDevice = idMachine, config = {}, overrides = [])
    {
        super(idMachine == idDevice);
        this.addDevice(idMachine, idDevice);
        this.checkConfig(config, overrides);
        this.registers = {};
        this.aReadyCallbacks = [];
    }

    /**
     * addDevice(idMachine, idDevice)
     *
     * Adds this Device to the global set of Devices, so that findDevice(), findBinding(), etc, will work.
     *
     * @this {Device}
     * @param {string} idMachine
     * @param {string} idDevice
     */
    addDevice(idMachine, idDevice)
    {
        this.idMachine = idMachine;
        this.idDevice = idDevice;
        if (!Device.Machines[this.idMachine]) {
            Device.Machines[this.idMachine] = {};
        }
        if (Device.Machines[this.idMachine][this.idDevice]) {
            this.printf("warning: machine configuration contains multiple '%s' devices\n", this.idDevice);
        }
        Device.Machines[this.idMachine][this.idDevice] = this;
        /**
         * The new Device classes don't use the Components array or machine+device IDs, but we need to continue
         * updating both of those for backward compatibility with older PCjs machines.
         */
        this['id'] = this.idMachine == this.idDevice? this.idMachine : this.idMachine + '.' + this.idDevice;
        Device.Components.push(this);
        /**
         * The WebIO constructor set this.machine tentatively, so that it could define any per-machine variables
         * it needed; we now set it definitively.
         */
        this.machine = this.findDevice(this.idMachine);
        this.ready = true;
    }

    /**
     * addDumper(device, name, desc, func)
     *
     * Interface definition only; implemented by the Debugger.
     *
     * @this {Device}
     * @param {Device} device
     * @param {string} name
     * @param {string} desc
     * @param {function(Array.<number>)} func
     */
    addDumper(device, name, desc, func)
    {
    }

    /**
     * addSymbols(aSymbols)
     *
     * Interface definition only; implemented by the Debugger.
     *
     * @this {Device}
     * @param {Array|undefined} aSymbols
     */
    addSymbols(aSymbols)
    {
    }

    /**
     * checkConfig(config, overrides)
     *
     * @this {Device}
     * @param {Config} config
     * @param {Array} overrides
     */
    checkConfig(config, overrides)
    {
        /**
         * If this device's config contains an "overrides" array, then any of the properties listed in
         * that array may be overridden with a URL parameter.  We don't impose any checks on the overriding
         * value, so it is the responsibility of the component with overridable properties to validate them.
         */
        overrides = config['overrides'] || overrides;
        if (overrides.length) {
            let parms = this.getURLParms();
            for (let prop in parms) {
                if (overrides.indexOf(prop) >= 0) {
                    let s = parms[prop];
                    let value = this.parseInt(s, 10);
                    if (value == undefined) {
                        if (s == "true") {
                            value = true;
                        } else if (s == "false") {
                            value = false;
                        } else {
                            value = s;
                            s = '"' + s + '"';
                        }
                    }
                    config[prop] = value;
                    this.println("overriding " + this.idDevice + " property '" + prop + "' with " + s);
                }
            }
        }
        this.config = config;
        this.addBindings(config['bindings']);
        this.checkVersion(config);
    }

    /**
     * checkVersion(config)
     *
     * Verify that device's version matches the machine's version, and also that the config version stored in
     * the JSON (if any) matches the device's version.
     *
     * This is normally performed by the constructor, but the Machine device cannot be fully initialized in the
     * constructor, so it calls this separately.
     *
     * @this {Device}
     * @param {Config} [config]
     */
    checkVersion(config = {})
    {
        this.version = +Device.VERSION;
        if (this.version) {
            let sVersion = "", version;
            if (this.idMachine != this.idDevice) {
                let machine = this.findDevice(this.idMachine);
                version = machine.version;
                if (version && version != this.version) {
                    sVersion = "Machine";
                }
            }
            if (!sVersion) {
                version = config['version'];
                if (version && version > this.version) {
                    sVersion = "Config";
                }
            }
            if (sVersion) {
                let sError = this.sprintf("%s Device version (%3.2f) incompatible with %s version (%3.2f)", config.class, this.version, sVersion, version);
                this.error("%s\n\nClearing your browser's cache may resolve the issue.", sError);
            }
        }
    }

    /**
     * defineRegister(name, get, set)
     *
     * @this {Device}
     * @param {string} name
     * @param {function()} get
     * @param {function(number)} [set]
     */
    defineRegister(name, get, set)
    {
        this.registers[name] = {get: get.bind(this), set: set? set.bind(this) : null};
    }

    /**
     * defineRegisterAlias(name, alias)
     *
     * @this {Device}
     * @param {string} name
     * @param {string} alias
     */
    defineRegisterAlias(name, alias)
    {

        if (this.registers[name]) {
            this.registers[alias] = this.registers[name];
        }
    }

    /**
     * enumDevices(func)
     *
     * @this {Device}
     * @param {function(Device)} func
     * @returns {boolean} (true if all devices successfully enumerated, false otherwise)
     */
    enumDevices(func)
    {
        let id;
        try {
            let devices = Device.Machines[this.idMachine];
            if (devices) {
                for (id in devices) {
                    let device = devices[id];
                    if (device.idDevice != device.idMachine) { // alternatively, (config['class'] != "Machine"), but that can fail in a misconfigured machine
                        if (!func(device)) return false;
                    }
                }
            }
            return true;
        } catch(err) {
            this.printf("error while enumerating device '%s': %s\n", id, err.message);
        }
        return false;
    }

    /**
     * findBinding(name, all)
     *
     * This will search the current device's bindings, and optionally all the device bindings within the
     * machine.  If the binding is found in another device, that binding is recorded in this device as well.
     *
     * @this {Device}
     * @param {string} [name]
     * @param {boolean} [all]
     * @returns {Element|null|undefined}
     */
    findBinding(name, all = false)
    {
        let element;
        if (name) {
            element = super.findBinding(name, all);
            if (element === undefined && all) {
                let devices = Device.Machines[this.idMachine];
                for (let id in devices) {
                    element = devices[id].bindings[name];
                    if (element) break;
                }
                if (!element) element = null;
                this.bindings[name] = element;
            }
        }
        return element;
    }

    /**
     * findDevice(idDevice, fRequired)
     *
     * @this {Device}
     * @param {string} idDevice
     * @param {boolean} [fRequired] (default is true, so if the device is not found, an Error is thrown)
     * @returns {Device|null}
     */
    findDevice(idDevice, fRequired=true)
    {
        let id = idDevice;
        let idMachine = this.idMachine;
        let i = idMachine.indexOf('.');
        if (i > 0) {
            idMachine = idMachine.substr(0, i);
            idDevice = idDevice.substr(i + 1);
        }
        let devices = Device.Machines[idMachine];
        let device = devices && devices[idDevice] || null;
        if (!device) {
            /**
             * Also check the old list of PCjs machine component IDs, to maintain backward compatibility.
             */
            for (i = 0; i < Device.Components.length; i++) {
                if (Device.Components[i]['id'] === id) {
                    device = Device.Components[i];
                    break;
                }
            }
            if (!device && fRequired) {
                throw new Error(this.sprintf('no "%s" device', id));
            }
        }
        return device;
    }

    /**
     * findDeviceByClass(idClass, fRequired)
     *
     * This is only appropriate for device classes where no more than one instance of the device is allowed;
     * for example, it is NOT appropriate for the Bus class, because machines can have multiple buses (eg, an
     * I/O bus and a Memory bus).
     *
     * @this {Device}
     * @param {string} idClass
     * @param {boolean} [fRequired] (default is true, so if the device is not found, an Error is thrown)
     * @returns {Device|null}
     */
    findDeviceByClass(idClass, fRequired=true)
    {
        let device = null;
        let devices = Device.Machines[this.idMachine];
        if (devices) {
            for (let id in devices) {
                if (devices[id].config['class'] == idClass) {
                    if (device) {
                        device = null;      // multiple devices with the same class, so return an error
                        break;
                    }
                    device = devices[id];
                }
            }
        }
        if (!device && fRequired) {
            throw new Error(this.sprintf('no %s device', idClass));
        }
        return device;
    }

    /**
     * getMachineConfig(prop)
     *
     * @this {Device}
     * @param {string} prop
     * @returns {*}
     */
    getMachineConfig(prop)
    {
        let machine = this.findDevice(this.idMachine);
        return machine && machine.config && machine.config[prop] || this.config[prop];
    }

    /**
     * getRegister(name)
     *
     * @this {Device}
     * @param {string} name
     * @returns {number|undefined}
     */
    getRegister(name)
    {
        let reg = this.registers[name];
        return reg && reg.get();
    }

    /**
     * isReady()
     *
     * @this {Device}
     * @returns {boolean}
     */
    isReady()
    {
        if (this != this.machine || !this.ready) {
            return this.ready;
        }
        /**
         * Machine readiness is more complicated: check the readiness of all devices.  This is easily
         * checked with an enumDevices() function that returns false if a device isn't ready yet, which
         * in turn terminates the enumeration and returns false.
         */
        return this.enumDevices((device) => device.isReady());
    }

    /**
     * setReady(ready)
     *
     * @this {Device}
     * @param {boolean} [ready]
     */
    setReady(ready = this.ready)
    {
        this.ready = ready;
        if (this.isReady()) {
            let callback;
            while ((callback = this.aReadyCallbacks.pop())) {
                callback();
            }
            if (this != this.machine) this.machine.setReady();
        }
    }

    /**
     * whenReady(callback)
     *
     * @this {Device}
     * @param {function()} callback
     * @returns {boolean} (true if ready now, false if not ready yet)
     */
    whenReady(callback)
    {
        if (this.isReady()) {
            callback();
            return true;
        }
        this.aReadyCallbacks.push(callback);
        return false;
    }

    /**
     * notifyMessage(messages)
     *
     * Overidden by other devices (eg, Debugger) to receive notifications of messages, along with the messages bits.
     *
     * @this {Device}
     * @param {number} messages
     */
    notifyMessage(messages)
    {
    }

    /**
     * printf(format, ...args)
     *
     * Just as WebIO.printf() overrides StdIO.printf() to add support for Messages, we override WebIO.printf()
     * to add support for MESSAGE.ADDR: if that message bit is set, we want to append the current execution address
     * (PC) to any message-driven printf() call.
     *
     * @this {Device}
     * @param {string|number} format
     * @param {...} args
     * @returns {number}
     */
    printf(format, ...args)
    {
        if (typeof format == "number" && this.isMessageOn(format)) {
            /**
             * The following call will execute at most once, because findDeviceByClass() returns either a Device or null,
             * neither of which is undefined.
             */
            if (this.dbg === undefined) {
                this.dbg = /** @type {Device} */ (this.findDeviceByClass("Debugger", false));
            }
            if (this.dbg) {
                this.dbg.notifyMessage(format);
            }
            if (this.machine.messages & Device.MESSAGE.ADDR) {
                /**
                 * Same rules as above apply here.  Hopefully no message-based printf() calls will arrive with MESSAGE.ADDR
                 * set *before* the CPU device has been initialized.
                 */
                if (this.cpu === undefined) {
                    this.cpu = /** @type {CPU} */ (this.findDeviceByClass("CPU"));
                }
                if (this.cpu) {
                    format = args.shift();
                    return super.printf("%#06x: %s.%s\n", this.cpu.regPCLast, this.idDevice, this.sprintf(format, ...args).trim());
                }
            }
        }
        return super.printf(format, ...args);
    }

    /**
     * removeDevice(idDevice)
     *
     * @this {Device}
     * @param {string} idDevice
     */
    removeDevice(idDevice)
    {
        let device;
        let devices = Device.Machines[this.idMachine];
        if (devices) delete devices[idDevice];
    }

    /**
     * setRegister(name, value)
     *
     * @this {Device}
     * @param {string} name
     * @param {number} value
     * @returns {boolean} (true if register exists and successfully set, false otherwise)
     */
    setRegister(name, value)
    {
        let reg = this.registers[name];
        if (reg && reg.set) {
            reg.set(value);
            return true;
        }
        return false;
    }
}

if (typeof window != "undefined") {
    if (!window['PCjs']) window['PCjs'] = {};
    if (!window['PCjs']['Machines']) window['PCjs']['Machines'] = {};
    if (!window['PCjs']['Components']) window['PCjs']['Components'] = [];
}

/**
 * Machines is a global object whose properties are machine IDs and whose values are arrays of Devices.
 *
 * @type {Object}
 */
Device.Machines = typeof window != "undefined"? window['PCjs']['Machines'] : {};

/**
 * Components is maintained for backward-compatibility with older PCjs machines, to facilitate machine connections.
 *
 * @type {Array}
 */
Device.Components = typeof window != "undefined"? window['PCjs']['Components'] : [];

/**
 * List of additional message groups, extending the base set defined in lib/webio.js.
 *
 * NOTE: To support more than 32 message groups, be sure to use "+", not "|", when concatenating.
 */
Device.MESSAGE.ADDR             = 0x000000000001;       // this is a special bit (bit 0) used to append address info to messages
Device.MESSAGE.BUS              = 0x000000000002;
Device.MESSAGE.FAULT            = 0x000000000004;
Device.MESSAGE.MEMORY           = 0x000000000008;
Device.MESSAGE.PORTS            = 0x000000000010;
Device.MESSAGE.CHIPS            = 0x000000000020;
Device.MESSAGE.KBD              = 0x000000000040;
Device.MESSAGE.SERIAL           = 0x000000000080;
Device.MESSAGE.MISC             = 0x000000000100;
Device.MESSAGE.CPU              = 0x000000000200;
Device.MESSAGE.MMU              = 0x000000000400;
Device.MESSAGE.INT              = 0x000000000800;
Device.MESSAGE.TRAP             = 0x000000001000;
Device.MESSAGE.VIDEO            = 0x000000002000;       // used with video hardware messages (see video.js)
Device.MESSAGE.MONITOR          = 0x000000004000;       // used with video monitor messages (see monitor.js)
Device.MESSAGE.SCREEN           = 0x000000008000;       // used with screen-related messages (also monitor.js)
Device.MESSAGE.DISK             = 0x000000010000;
Device.MESSAGE.FILE             = 0x000000020000;
Device.MESSAGE.TIME             = 0x000000040000;
Device.MESSAGE.TIMER            = 0x000000080000;
Device.MESSAGE.EVENT            = 0x000000100000;
Device.MESSAGE.INPUT            = 0x000000200000;
Device.MESSAGE.KEY              = 0x000000400000;
Device.MESSAGE.MOUSE            = 0x000000800000;
Device.MESSAGE.TOUCH            = 0x000001000000;
Device.MESSAGE.INFO             = 0x000002000000;
Device.MESSAGE.WARN             = 0x000004000000;
Device.MESSAGE.ERROR            = 0x000008000000;
Device.MESSAGE.HALT             = 0x000010000000;
Device.MESSAGE.CUSTOM           = 0x000100000000;       // all custom device messages must start here

Device.MESSAGE_NAMES["addr"]    = Device.MESSAGE.ADDR;
Device.MESSAGE_NAMES["bus"]     = Device.MESSAGE.BUS;
Device.MESSAGE_NAMES["fault"]   = Device.MESSAGE.FAULT;
Device.MESSAGE_NAMES["memory"]  = Device.MESSAGE.MEMORY;
Device.MESSAGE_NAMES["ports"]   = Device.MESSAGE.PORTS;
Device.MESSAGE_NAMES["chips"]   = Device.MESSAGE.CHIPS;
Device.MESSAGE_NAMES["kbd"]     = Device.MESSAGE.KBD;
Device.MESSAGE_NAMES["serial"]  = Device.MESSAGE.SERIAL;
Device.MESSAGE_NAMES["misc"]    = Device.MESSAGE.MISC;
Device.MESSAGE_NAMES["cpu"]     = Device.MESSAGE.CPU;
Device.MESSAGE_NAMES["mmu"]     = Device.MESSAGE.MMU;
Device.MESSAGE_NAMES["int"]     = Device.MESSAGE.INT;
Device.MESSAGE_NAMES["trap"]    = Device.MESSAGE.TRAP;
Device.MESSAGE_NAMES["video"]   = Device.MESSAGE.VIDEO;
Device.MESSAGE_NAMES["monitor"] = Device.MESSAGE.MONITOR;
Device.MESSAGE_NAMES["screen"]  = Device.MESSAGE.SCREEN;
Device.MESSAGE_NAMES["disk"]    = Device.MESSAGE.DISK;
Device.MESSAGE_NAMES["file"]    = Device.MESSAGE.FILE;
Device.MESSAGE_NAMES["time"]    = Device.MESSAGE.TIME;
Device.MESSAGE_NAMES["timer"]   = Device.MESSAGE.TIMER;
Device.MESSAGE_NAMES["event"]   = Device.MESSAGE.EVENT;
Device.MESSAGE_NAMES["input"]   = Device.MESSAGE.INPUT;
Device.MESSAGE_NAMES["key"]     = Device.MESSAGE.KEY;
Device.MESSAGE_NAMES["mouse"]   = Device.MESSAGE.MOUSE;
Device.MESSAGE_NAMES["touch"]   = Device.MESSAGE.TOUCH;
Device.MESSAGE_NAMES["info"]    = Device.MESSAGE.INFO;
Device.MESSAGE_NAMES["warn"]    = Device.MESSAGE.WARN;
Device.MESSAGE_NAMES["error"]   = Device.MESSAGE.ERROR;
Device.MESSAGE_NAMES["halt"]    = Device.MESSAGE.HALT;

Device.CLASSES["Device"] = Device;

/**
 * @copyright https://www.pcjs.org/modules/v3/input.js (C) 2012-2025 Jeff Parsons
 */

/** @typedef {{ class: string, bindings: (Object|undefined), version: (number|undefined), overrides: (Array.<string>|undefined), location: Array.<number>, map: (Array.<Array.<number>>|Object|undefined), drag: (boolean|undefined), scroll: (boolean|undefined), hexagonal: (boolean|undefined), releaseDelay: (number|undefined) }} */
let InputConfig;

/** @typedef {{ keyNum: number, msDown: number, autoRelease: boolean }} */
let ActiveKey;

/** @typedef {{ id: (string|number), func: function(string,boolean) }} */
let KeyListener;

/** @typedef {{ id: string, cxGrid: number, cyGrid: number, xGrid: number, yGrid: number, func: function(boolean) }} */
let SurfaceListener;

/** @typedef {{ xInput: number, yInput: number, cxInput: number, cyInput: number, hGap: number, vGap: number, cxSurface: number, cySurface: number, xPower: number, yPower: number, cxPower: number, cyPower: number, nRows: number, nCols: number, cxButton: number, cyButton: number, cxGap: number, cyGap: number, xStart: number, yStart: number }} */
let SurfaceState;

/**
 * @class {Input}
 * @unrestricted
 * @property {InputConfig} config
 * @property {Array.<number>} location
 * @property {Array.<Array.<number>>|Object} map
 * @property {boolean} fDrag
 * @property {boolean} fScroll
 * @property {boolean} fHexagonal
 * @property {number} releaseDelay
 * @property {{
 *  surface: Element|undefined
 * }} bindings
 * @property {function(number,number)} onInput
 * @property {function(number,number)} onHover
 * @property {Array.<KeyListener>} aKeyListeners
 * @property {Array.<SurfaceListener>} aSurfaceListeners
 * @property {Array.<ActiveKey>} aActiveKeys
 * @property {number} keyMods
 */
class Input extends Device {
    /**
     * Input(idMachine, idDevice, config)
     *
     * Sample config:
     *
     *      "input": {
     *        "class": "Input",
     *        "location": [139, 325, 368, 478, 0.34, 0.5, 640, 853],
     *        "map": [
     *          ["2nd",  "inv",  "lnx",  "\\b",  "clr"],
     *          ["lrn",  "xchg", "sq",   "sqrt", "rcp"],
     *          ["sst",  "sto",  "rcl",  "sum",  "exp"],
     *          ["bst",  "ee",   "(",    ")",    "/"],
     *          ["gto",  "7",    "8",    "9",    "*"],
     *          ["sbr",  "4",    "5",    "6",    "-"],
     *          ["rst",  "1",    "2",    "3",    "+"],
     *          ["r/s",  "0",    ".",    "+/-",  "=|\\r"]
     *        ],
     *        "drag": false,
     *        "bindings": {
     *          "surface": "imageTI57",
     *          "power": "powerTI57",
     *          "reset": "resetTI57"
     *        }
     *      }
     *
     * A word about the "power" button: the page will likely use absolute positioning to overlay the HTML button
     * onto the image of the physical button, and the temptation might be to use the style "display:none" to hide
     * it, but "opacity:0" should be used instead, because otherwise our efforts to use it as focusable element
     * may fail.
     *
     * @this {Input}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {InputConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        this.messages = Device.MESSAGE.INPUT;
        this.onInput = this.onHover = null;
        this.time = /** @type {Time} */ (this.findDeviceByClass("Time"));
        this.machine = /** @type {Machine} */ (this.findDeviceByClass("Machine"));

        /**
         * If 'drag' is true, then the onInput() handler will be called whenever the current col and/or row
         * changes, even if the mouse hasn't been released since the previous onInput() call.
         *
         * The default is false, because in general, allowing drag is a bad idea for calculator buttons.  But
         * I've made this an option for other input surfaces, like LED arrays, where you might want to turn a
         * series of LEDs on or off.
         */
        this.fDrag = this.getDefaultBoolean('drag', false);

        /**
         * If 'scroll' is true, then we do NOT call preventDefault() on touch events; this permits the input
         * surface to be scrolled like any other part of the page.  The default is false, because this has other
         * side-effects (eg, inadvertent zooms).
         */
        this.fScroll = this.getDefaultBoolean('scroll', false);

        /**
         * If 'hexagonal' is true, then we treat the input grid as hexagonal, where even rows of the associated
         * display are offset.
         */
        this.fHexagonal = this.getDefaultBoolean('hexagonal', false);

        /**
         * The 'releaseDelay' setting is necessary for devices (eg, old calculators) that are either too slow to
         * notice every input transition and/or have debouncing logic that would otherwise be defeated.
         */
        this.releaseDelay = this.getDefaultNumber('releaseDelay', 0);

        /**
         * This is set on receipt of the first 'touch' event of any kind, and is used by the 'mouse' event
         * handlers to disregard mouse events if set.
         */
        this.fTouch = false;

        /**
         * There are two supported configuration maps: a two-dimensional grid (gridMap) and a list of IDs (idMap).
         *
         * The two-dimensional button layouts do not (currently) support individual listeners; instead, any key event
         * that corresponds to a position within the button layout is transformed into an (x,y) position that is passed
         * on to a special function supplied to addInput().
         *
         * Any two-dimensional layout COULD be converted to a list of logical buttons, each with their own grid
         * coordinates, but for devices like calculators that have a natural grid design, the two-dimensional layout
         * is much simpler.
         *
         * Each ID in an idMap references an object with a "keys" array, a "grid" array, and a "state" value;
         * the code below ensures that every object has all three.  As "keys" go down and up (or mouse/touch events
         * occur within a "grid"), the corresponding "state" is updated (0 or 1).
         *
         * A third type of map (keyMap) is supported, but not as a configuration parameter; any keyMap must be supplied
         * by another device, via an addKeyMap() call.
         */
        let map = this.config['map'];
        this.gridMap = this.idMap = this.keyMap = null;

        if (map) {
            if (map.length) {
                this.gridMap = map;
            } else {
                this.idMap = {};
                let ids = Object.keys(map);
                for (let i = 0; i < ids.length; i++) {
                    let grid = [];
                    let id = ids[i];
                    let keys = map[id];
                    if (typeof keys == "string") {
                        keys = [keys];
                    } else if (keys.length == undefined) {
                        grid = keys['grid'];
                        keys = keys['keys'];
                        if (typeof keys == "string") keys = [keys];
                    }
                    let state = 0;
                    this.idMap[id] = {keys, grid, state};
                }
            }
        }

        this.aKeyListeners = [];
        this.aSurfaceListeners = [];

        this.altFocus = false;
        this.focusElement = this.altFocusElement = null;
        let element = this.bindings[Input.BINDING.SURFACE];
        if (element) this.addSurface(element, this.findBinding(config['focusBinding'], true), this.config['location']);

        this.onReset();
    }

    /**
     * addHover(onHover)
     *
     * @this {Input}
     * @param {function(number,number)} onHover
     */
    addHover(onHover)
    {
        this.onHover = onHover;
    }

    /**
     * addInput(onInput)
     *
     * Called by the CPU device to set up input notifications.
     *
     * @this {Input}
     * @param {function(number,number)} onInput
     */
    addInput(onInput)
    {
        this.onInput = onInput;
    }

    /**
     * addListener(type, id, func, init)
     *
     * @this {Input}
     * @param {string} type (see Input.TYPE)
     * @param {string|number} id
     * @param {function(string,boolean)|function(number,boolean)|null} [func]
     * @param {number|boolean|string} [init] (initial state; treated as a boolean for the SWITCH type)
     * @returns {boolean} (true if successful, false if not)
     */
    addListener(type, id, func, init)
    {
        if (type == Input.TYPE.KEYCODE) {
            this.aKeyListeners.push({id, func});
            return true;
        }
        if (type == Input.TYPE.IDMAP && this.idMap) {
            let map = this.idMap[id];
            if (map) {
                let keys = map.keys;
                if (keys && keys.length) {
                    this.aKeyListeners.push({id, func});
                }
                let grid = map.grid;
                if (grid && grid.length) {
                    this.aSurfaceListeners.push({id, cxGrid: grid[0], cyGrid: grid[1], xGrid: grid[2], yGrid: grid[3], func});
                }
                return true;
            }
            return false;
        }
        /**
         * The visual state of a SWITCH control (which could be a div or button or any other element) is controlled
         * by its class attribute -- specifically, the last class name in the attribute.  You must define two classes:
         * one that ends with "-on" for the on (true) state and another that ends with "-off" for the off (false) state.
         *
         * The first addListener() call should include both your listener function and the initial state; the control's
         * class is automatically switched every time the control is clicked, and the newly switched state is passed to
         * your function.  If you need to change the state of the switch for other reasons, call addListener() with NO
         * function, just a new initial state.
         */
        if (type == Input.TYPE.SWITCH) {
            let element = this.findBinding(/** @type {string} */ (id), true);
            if (element) {
                let getClass = function() {
                    return element.getAttribute("class") || "";
                };
                let setClass = function(s) {
                    element.setAttribute("class", s);
                };
                let getState = function() {
                    return (getClass().slice(-3) == "-on")? true : false;
                };
                let setState = function(state) {
                    setClass(getClass().replace(/(-on|-off)$/, state? "-on" : "-off"));
                    return state;
                };
                if (init != undefined) setState(init);
                if (func) {
                    element.addEventListener('click', function onSwitchClick() {
                        func(id, setState(!getState()));
                    });
                }
            }
            return false;
        }
        return false;
    }

    /**
     * addKeyMap(device, keyMap, clickMap)
     *
     * This records the caller's keyMap, changes onKeyCode() to record any physical keyCode
     * that exists in the keyMap as an active key, and allows the caller to use getActiveKey()
     * to get the mapped keyNum of an active key.
     *
     * It also supports an optional clickMap, which lists a set of bindings that the caller
     * supports.  For every valid binding, we add an onclick handler that simulates a call to
     * onKeyCode() with the corresponding keyCode.
     *
     * @this {Input}
     * @param {Device} device
     * @param {Object} keyMap
     * @param {Object} [clickMap]
     * @returns {boolean}
     */
    addKeyMap(device, keyMap, clickMap)
    {
        if (!this.keyMap) {
            let input = this;
            this.keyMap = keyMap;
            this.timerAutoRelease = this.time.addTimer("timerAutoRelease", function onAutoRelease() {
                input.checkAutoRelease();
            });
            if (clickMap) {
                for (let binding in clickMap) {
                    let element = device.bindings[binding];
                    if (element) {
                        element.addEventListener('click', function onKeyClick() {
                            let clickBinding = clickMap[binding];
                            let keyCode, down = true, autoRelease = true;
                            if (typeof clickBinding == "number") {
                                keyCode = clickBinding;
                            } else {
                                /**
                                 * If clickBinding is not a number, the only other possibility currently supported
                                 * is an Array where the first entry is a keyCode modifier; specifically, KEYCODE.LOCK.
                                 */
                                keyCode = clickBinding[0];

                                if (keyCode == Input.KEYCODE.LOCK) {
                                    /**
                                     * In the case of KEYCODE.LOCK, the next entry is the actual keyCode, and we look
                                     * to the element's "data-value" attribute for whether clicking the element should
                                     * "lock" the keyCode ("0") or "unlock" it ("1").  Locking a key is a simple matter
                                     * of simulating a keydown without autoRelease; unlocking is the equivalent of a keyup.
                                     */
                                    let clickState = +element.getAttribute("data-value") || 0;
                                    keyCode = clickBinding[1];
                                    down = !clickState;
                                    autoRelease = false;
                                    element.setAttribute("data-value", 1 - clickState);
                                    element.style.fontWeight = down? "bold" : "normal";
                                }
                            }
                            input.onKeyCode(keyCode, down, autoRelease);
                            input.setFocus();
                        });
                    } else {
                        if (Input.DEBUG) input.printf("click map element '%s' not found\n", binding);
                    }
                }
            }
            return true;
        }
        return false;
    }

    /**
     * checkKeyListeners(id, down)
     *
     * @this {Input}
     * @param {string|number} id
     * @param {boolean} down
     */
    checkKeyListeners(id, down)
    {
        for (let i = 0; i < this.aKeyListeners.length; i++) {
            let listener = this.aKeyListeners[i];
            if (listener.id === id) {
                listener.func(id, down);
            }
        }
    }

    /**
     * addSurface(inputElement, focusElement, location)
     *
     * @this {Input}
     * @param {Element} inputElement (surface element)
     * @param {Element|null} [focusElement] (should be provided if surface element is non-focusable)
     * @param {Array} [location]
     */
    addSurface(inputElement, focusElement, location = [])
    {
        /**
         * The location array, eg:
         *
         *      "location": [139, 325, 368, 478, 0.34, 0.5, 640, 853, 180, 418, 75, 36],
         *
         * contains the top left corner (xInput, yInput) and dimensions (cxInput, cyInput)
         * of the input rectangle where the buttons described in the map are located, relative
         * to the surface image.  It also describes the average amount of horizontal and vertical
         * space between buttons, as fractions of the average button width and height (hGap, vGap).
         *
         * With all that, we can now calculate the center lines for each column and row.  This
         * obviously assumes that all the buttons are evenly laid out in a perfect grid.  For
         * devices that don't have such a nice layout, a different location array format will
         * have to be defined.
         *
         * NOTE: While element.naturalWidth and element.naturalHeight should, for all modern
         * browsers, contain the surface image's dimensions as well, those values still might not
         * be available if our constructor is called before the page's onload event has fired,
         * so we allow them to be stored in the next two elements of the location array, too.
         *
         * Finally, the position and size of the device's power button may be stored in the array
         * as well, in case some browsers refuse to generate onClickPower() events (eg, if they
         * think the button is inaccessible/not visible).
         */
        if (location.length || this.gridMap || this.idMap) {
            let state = {};
            state.xInput = location[0] || 0;
            state.yInput = location[1] || 0;
            state.cxInput = location[2] || inputElement.clientWidth;
            state.cyInput = location[3] || inputElement.clientHeight;
            state.hGap = location[4] || 1.0;
            state.vGap = location[5] || 1.0;
            state.cxSurface = location[6] || inputElement.naturalWidth || state.cxInput;
            state.cySurface = location[7] || inputElement.naturalHeight || state.cyInput;
            state.xPower = location[8] || 0;
            state.yPower = location[9] || 0;
            state.cxPower = location[10] || 0;
            state.cyPower = location[11] || 0;
            if (this.gridMap) {
                state.nRows = this.gridMap.length;
                state.nCols = this.gridMap[0].length;
            } else {
                state.nCols = state.hGap;
                state.nRows = state.vGap;
                state.hGap = state.vGap = 0;
            }

            /**
             * To calculate the average button width (cxButton), we know that the overall width
             * must equal the sum of all the button widths + the sum of all the button gaps:
             *
             *      cxInput = nCols * cxButton + nCols * (cxButton * hGap)
             *
             * The number of gaps would normally be (nCols - 1), but we require that cxInput include
             * only 1/2 the gap at the edges, too.  Solving for cxButton:
             *
             *      cxButton = cxInput / (nCols + nCols * hGap)
             */
            state.cxButton = (state.cxInput / (state.nCols + state.nCols * state.hGap))|0;
            state.cyButton = (state.cyInput / (state.nRows + state.nRows * state.vGap))|0;
            state.cxGap = (state.cxButton * state.hGap)|0;
            state.cyGap = (state.cyButton * state.vGap)|0;

            /**
             * xStart and yStart record the last 'touchstart' or 'mousedown' position on the surface
             * image; they will be reset to -1 when movement has ended (eg, 'touchend' or 'mouseup').
             */
            state.xStart = state.yStart = -1;

            this.captureMouse(inputElement, state);
            this.captureTouch(inputElement, state);

            /**
             * We use a timer for the touch/mouse release events, to ensure that the machine had
             * enough time to notice the input before releasing it.
             */
            if (this.time && this.releaseDelay) {
                let input = this;
                this.timerInputRelease = this.time.addTimer("timerInputRelease", function onInputRelease() {
                    if (state.xStart < 0 && state.yStart < 0) { // auto-release ONLY if it's REALLY released
                        input.setPosition(-1, -1);
                    }
                });
            }
        }

        if (this.gridMap || this.idMap || this.keyMap) {
            /**
             * This auto-releases the last key reported after an appropriate delay, to ensure that
             * the machine had enough time to notice the corresponding button was pressed.
             */
            if (this.time && this.releaseDelay) {
                let input = this;
                this.timerKeyRelease = this.time.addTimer("timerKeyRelease", function onKeyRelease() {
                    input.onKeyTimer();
                });
            }

            /**
             * I used to maintain a single-key buffer (this.keyPressed) and would immediately release
             * that key as soon as another key was pressed, but it appears that the ROM wants a minimum
             * delay between release and the next press -- probably for de-bouncing purposes.  So we
             * maintain a key state: 0 means no key has gone down or up recently, 1 means a key just went
             * down, and 2 means a key just went up.  keysPressed maintains a queue of keys (up to 16)
             * received while key state is non-zero.
             */
            this.keyState = 0;
            this.keyActive = "";
            this.keysPressed = [];

            /**
             * I'm attaching my key event handlers to the document object, since image elements are
             * not focusable.  I'm disinclined to do what I've done with other machines (ie, create an
             * invisible <textarea> overlay), because in this case, I don't really want a soft keyboard
             * popping up and obscuring part of the display.
             *
             * A side-effect, however, is that if the user attempts to explicitly give the image
             * focus, we don't have anything for focus to attach to.  We address that in onMouseDown(),
             * by redirecting focus to the "power" button, if any, not because we want that or any other
             * button to have focus, but simply to remove focus from any other input element on the page.
             */
            let element = inputElement;
            if (focusElement) {
                element = focusElement;
                if (!this.focusElement && focusElement.nodeName == "BUTTON") {
                    element = document;
                    this.focusElement = focusElement;
                    /**
                     * Although we've elected to attach key handlers to the document object in this case,
                     * we also attach to the inputElement as an alternative.
                     */
                    this.captureKeys(inputElement);
                    this.altFocusElement = inputElement;
                }
            }
            this.captureKeys(element);
            if (!this.focusElement) {
                this.focusElement = element;
            }
        }
    }

    /**
     * checkSurfaceListeners(action, x, y, cx, cy)
     *
     * @this {Input}
     * @param {number} action (eg, Input.ACTION.MOVE, Input.ACTION.PRESS, Input.ACTION.RELEASE)
     * @param {number} x (valid for MOVE and PRESS, not RELEASE)
     * @param {number} y (valid for MOVE and PRESS, not RELEASE)
     * @param {number} cx (width of the element that received the event)
     * @param {number} cy (height of the element that received the event)
     */
    checkSurfaceListeners(action, x, y, cx, cy)
    {
        if (action == Input.ACTION.PRESS || action == Input.ACTION.RELEASE) {
            for (let i = 0; i < this.aSurfaceListeners.length; i++) {
                let listener = this.aSurfaceListeners[i];
                if (action == Input.ACTION.RELEASE) {
                    listener.func(listener.id, false);
                    continue;
                }
                let cxSpan = (cx / listener.cxGrid)|0, xActive = (x / cxSpan)|0;
                let cySpan = (cy / listener.cyGrid)|0, yActive = (y / cySpan)|0;
                if (xActive == listener.xGrid && yActive == listener.yGrid) {
                    listener.func(listener.id, true);
                }
            }
        }
    }

    /**
     * advanceKeyState()
     *
     * @this {Input}
     */
    advanceKeyState()
    {
        if (!this.releaseDelay) {
            this.onKeyTimer();
        } else {
            this.time.setTimer(this.timerKeyRelease, this.releaseDelay);
        }
    }

    /**
     * addSelect(device, binding, text, value, top)
     *
     * @this {Input}
     * @param {Device} device
     * @param {string} binding
     * @param {string} text
     * @param {string} value
     * @param {boolean} [top] (default is false)
     * @returns {boolean}
     */
    addSelect(device, binding, text, value, top = false)
    {
        let select = /** @type {HTMLSelectElement} */ (device.bindings[binding]);
        if (select) {
            let i;
            for (let i = 0; i < select.options.length; i++) {
                if (select.options[i].text == text) break;
            }
            if (i == select.options.length) {
                let option = document.createElement("option");
                option.text = text;
                option.value = value;
                // select.add(option);
                if (top && select.childNodes[0]) {
                    select.insertBefore(option, select.childNodes[0]);
                } else {
                    select.appendChild(option);
                }
                return true;
            }
        }
        return false;
    }

    /**
     * bindSelect(device, binding, items, onSelect)
     *
     * @this {Input}
     * @param {Device} device
     * @param {string} binding
     * @param {Array.<Media>} items
     * @param {function(Event)} [onSelect]
     */
    bindSelect(device, binding, items, onSelect)
    {
        let select = device.bindings[binding];
        if (select) {
            for (let i = 0; i < items.length; i++) {
                let name = items[i]['name'];
                let path = items[i]['path'];
                this.addSelect(device, binding, name, path);
            }
            if (onSelect) select.onchange = onSelect;
        }
    }

    /**
     * captureKeys(element)
     *
     * @this {Input}
     * @param {Document|Element} element
     */
    captureKeys(element)
    {
        let input = this;

        /**
         * isFocus(element, event)
         *
         * TODO: Determine the wisdom of having more than one element on the page with KeyboardEvent handlers.
         * Originally, my idea was to use a non-textarea element (such as a button) to capture "raw" keyboard
         * events for machines with virtual keyboards, at least when not running full-screen, to avoid issues with
         * composition keystrokes.  However, that approach creates focus challenges, as well as the apparent
         * duplication of certain key events (eg, CAPS-LOCK).
         *
         * @param {Element} element
         * @param {Event} event
         * @returns {KeyboardEvent|null}
         */
        let isFocus = function(element, event) {
            let activeElement = /* element || */ document.activeElement;
            if (!input.focusElement || activeElement == input.focusElement || activeElement == input.altFocusElement) {
                return /** @type {KeyboardEvent} */ (event || window.event);
            }
            return null;
        };

        /**
         * printEvent(type, code, used)
         *
         * @param {string} type
         * @param {number} code
         * @param {boolean} [used]
         */
        let printEvent = function(type, code, used) {
            let activeElement = document.activeElement;
            input.printf(Device.MESSAGE.KEY + Device.MESSAGE.EVENT, "%s.onKey%s(%d): %5.2f (%s)\n", activeElement.id || activeElement.nodeName, type, code, (Date.now() / 1000) % 60, used != undefined? (used? "used" : "unused") : "ignored");
        };

        element.addEventListener(
            'keydown',
            function onKeyDown(event) {
                event = isFocus(this, event);
                if (event) {
                    let keyCode = event.which || event.keyCode;
                    let used = input.onKeyCode(keyCode, true, false, event);
                    printEvent("Down", keyCode, used);
                     if (used) event.preventDefault();
                }
            }
        );

        element.addEventListener(
            'keypress',
            function onKeyPress(event) {
                event = isFocus(this, event);
                if (event) {
                    let charCode = event.which || event.charCode;
                    let used = input.onKeyCode(charCode);
                    printEvent("Press", charCode, used);
                    if (used) event.preventDefault();
                }
            }
        );

        element.addEventListener(
            'keyup',
            function onKeyUp(event) {
                event = isFocus(this, event);
                if (event) {
                    let keyCode = event.which || event.keyCode;
                    let used = input.onKeyCode(keyCode, false, false, event);
                    printEvent("Up", keyCode);
                    if (used) event.preventDefault();
                    /**
                     * We reset the contents of any textarea element being used exclusively
                     * for keyboard input, to prevent its contents from growing uncontrollably.
                     */
                    if (element.nodeName == "TEXTAREA") element.value = "";
                }
            }
        );

        /**
         * The following onBlur() and onFocus() handlers are currently just for debugging purposes, but
         * PCx86 experience suggests that we may also eventually need them for future pointer-locking support.
         */
        if (Input.DEBUG) {
            element.addEventListener(
                'blur',
                function onBlur(event) {
                    input.printf(Device.MESSAGE.KEY + Device.MESSAGE.EVENT, "onBlur(%s)\n", event.target.id || event.target.nodeName);
                }
            );
            element.addEventListener(
                'focus',
                function onFocus(event) {
                    input.printf(Device.MESSAGE.KEY + Device.MESSAGE.EVENT, "onFocus(%s)\n", event.target.id || event.target.nodeName);
                }
            );
        }
    }

    /**
     * captureMouse(element, state)
     *
     * @this {Input}
     * @param {Element} element
     * @param {SurfaceState} state
     */
    captureMouse(element, state)
    {
        let input = this;

        element.addEventListener(
            'mousedown',
            function onMouseDown(event) {
                if (input.fTouch) return;
                /**
                 * If there are any text input elements on the page that might currently have focus,
                 * this is a good time to divert focus to a focusable element of our own (eg, focusElement).
                 * Otherwise, key presses could be confusingly processed in two places.
                 *
                 * Unfortunately, setting focus on an element can cause the browser to scroll the element
                 * into view, so to avoid that, we use the following scrollTo() work-around.
                 */
                let focusElement = input.altFocus? input.altFocusElement : input.focusElement;
                if (focusElement) {
                    let x = window.scrollX, y = window.scrollY;
                    focusElement.focus();
                    window.scrollTo(x, y);
                }
                if (!event.button) {
                    input.onSurfaceEvent(element, Input.ACTION.PRESS, event, state);
                }
            }
        );

        element.addEventListener(
            'mousemove',
            function onMouseMove(event) {
                if (input.fTouch) return;
                input.onSurfaceEvent(element, Input.ACTION.MOVE, event, state);
            }
        );

        element.addEventListener(
            'mouseup',
            function onMouseUp(event) {
                if (input.fTouch) return;
                if (!event.button) {
                    input.onSurfaceEvent(element, Input.ACTION.RELEASE, event, state);
                }
            }
        );

        element.addEventListener(
            'mouseout',
            function onMouseOut(event) {
                if (input.fTouch) return;
                if (state.xStart < 0) {
                    input.onSurfaceEvent(element, Input.ACTION.MOVE, event, state);
                } else {
                    input.onSurfaceEvent(element, Input.ACTION.RELEASE, event, state);
                }
            }
        );
    }

    /**
     * captureTouch(element, state)
     *
     * @this {Input}
     * @param {Element} element
     * @param {SurfaceState} state
     */
    captureTouch(element, state)
    {
        let input = this;

        /**
         * NOTE: The mouse event handlers below deal only with events where the left button is involved
         * (ie, left button is pressed, down, or released).
         */
        element.addEventListener(
            'touchstart',
            function onTouchStart(event) {
                /**
                 * Under normal circumstances (ie, when fScroll is false), when any touch events arrive,
                 * onSurfaceEvent() calls preventDefault(), which prevents a variety of potentially annoying
                 * behaviors (ie, zooming, scrolling, fake mouse events, etc).  Under non-normal circumstances,
                 * (ie, when fScroll is true), we set fTouch on receipt of a 'touchstart' event, which will
                 * help our mouse event handlers avoid any redundant actions due to fake mouse events.
                 */
                if (input.fScroll) input.fTouch = true;
                input.onSurfaceEvent(element, Input.ACTION.PRESS, event, state);
            }
        );

        element.addEventListener(
            'touchmove',
            function onTouchMove(event) {
                input.onSurfaceEvent(element, Input.ACTION.MOVE, event, state);
            }
        );

        element.addEventListener(
            'touchend',
            function onTouchEnd(event) {
                input.onSurfaceEvent(element, Input.ACTION.RELEASE, event, state);
            }
        );
    }

    /**
     * checkAutoRelease()
     *
     * Auto-release handler for active keys.
     *
     * @this {Input}
     */
    checkAutoRelease()
    {
        let i = 0;
        let msDelayMin = -1;
        while (i < this.aActiveKeys.length) {
            let activeKey = this.aActiveKeys[i];
            if (activeKey.autoRelease) {
                let keyNum = activeKey.keyNum;
                let msDown = activeKey.msDown;
                let msDuration = Date.now() - msDown;
                let msDelay = this.releaseDelay - msDuration;
                if (msDelay > 0) {
                    if (msDelayMin < 0 || msDelayMin > msDelay) {
                        msDelayMin = msDelay;
                    }
                } else {
                    /**
                     * Because the key is already in the auto-release state, this next call guarantees that the
                     * key will be removed from the array; a consequence of that removal, however, is that we must
                     * reset our array index to zero.
                     */
                    this.removeActiveKey(keyNum);
                    i = 0;
                    continue;
                }
            }
            i++;
        }
        if (msDelayMin >= 0) {
            this.time.setTimer(this.timerAutoRelease, msDelayMin);
        }
    }

    /**
     * getActiveKey(index)
     *
     * @this {Input}
     * @param {number} index
     * @returns {number} (the requested active keyNum, -1 if none)
     */
    getActiveKey(index)
    {
        let keyNum = -1;
        if (index < this.aActiveKeys.length) {
            keyNum = this.aActiveKeys[index].keyNum;
        }
        return keyNum;
    }

    /**
     * addActiveKey(keyNum, autoRelease)
     *
     * @this {Input}
     * @param {number|Array.<number>} keyNum
     * @param {boolean} [autoRelease]
     */
    addActiveKey(keyNum, autoRelease = false)
    {
        if (typeof keyNum != "number") {
            for (let i = 0; i < keyNum.length; i++) {
                this.addActiveKey(keyNum[i], autoRelease);
            }
            return;
        }
        let i = this.isActiveKey(keyNum);
        let msDown = Date.now();
        if (i < 0) {
            this.aActiveKeys.push({
                keyNum, msDown, autoRelease
            });
            this.printf(Device.MESSAGE.KEY + Device.MESSAGE.INPUT, "addActiveKey(keyNum=%d,autoRelease=%b)\n", keyNum, autoRelease);
        } else {
            this.aActiveKeys[i].msDown = msDown;
            this.aActiveKeys[i].autoRelease = autoRelease;
        }
        if (autoRelease) this.checkAutoRelease();
    }

    /**
     * isActiveKey(keyNum)
     *
     * @this {Input}
     * @param {number} keyNum
     * @returns {number} index of keyNum in aActiveKeys, or -1 if not found
     */
    isActiveKey(keyNum)
    {
        for (let i = 0; i < this.aActiveKeys.length; i++) {
            if (this.aActiveKeys[i].keyNum == keyNum) return i;
        }
        return -1;
    }

    /**
     * removeActiveKey(keyNum)
     *
     * @this {Input}
     * @param {number|Array.<number>} keyNum
     */
    removeActiveKey(keyNum)
    {
        if (typeof keyNum != "number") {
            for (let i = 0; i < keyNum.length; i++) {
                this.removeActiveKey(keyNum[i]);
            }
            return;
        }
        let i = this.isActiveKey(keyNum);
        if (i >= 0) {
            let activeKey = this.aActiveKeys[i];
            let msNow = Date.now();
            let msDown = activeKey.msDown;

            let msDuration = msNow - msDown;
            if (msDuration < this.releaseDelay) {
                activeKey.autoRelease = true;
                this.checkAutoRelease();
                return;
            }
            this.printf(Device.MESSAGE.KEY + Device.MESSAGE.INPUT, "removeActiveKey(keyNum=%d,duration=%dms,autoRelease=%b)\n", keyNum, msDuration, activeKey.autoRelease);
            this.aActiveKeys.splice(i, 1);
        } else {
            this.printf(Device.MESSAGE.KEY + Device.MESSAGE.INPUT, "removeActiveKey(keyNum=%d): up without down?\n", keyNum);
        }
    }

    /**
     * onKeyCode(code, down, autoRelease, event)
     *
     * @this {Input}
     * @param {number} code (ie, keyCode if down is defined, charCode if undefined)
     * @param {boolean} [down] (true if keydown, false if keyup, undefined if keypress)
     * @param {boolean} [autoRelease]
     * @param {KeyboardEvent} [event]
     * @returns {boolean} (true if processed, false if not)
     */
    onKeyCode(code, down, autoRelease, event)
    {
        let keyCode, keyName;
        if (down != undefined) {
            keyCode = Input.FF_KEYCODE[code] || code;       // fix any Firefox-specific keyCodes
            keyName = Input.KEYNAME[code];
            let keyMod = Input.KEYCODEMOD[keyCode];
            let fRight = (event && event.location == Input.LOCATION.RIGHT);
            if ((keyMod & Input.KEYMOD.LEFT) && fRight) {
                keyMod >>= 1;
            }
            if (keyMod) {
                /**
                 * Firefox generates only keyDown events for CAPS-LOCK, whereas Chrome generates only keyDown
                 * when it's locking and keyUp when it's unlocking.  To support Firefox, we must simply toggle the
                 * current state on a down.
                 */
                if (keyMod & Input.KEYMOD.LOCK) {
                    down = !(this.keyMods & keyMod);
                }
                if (down) {
                    this.keyMods |= keyMod;
                } else {
                    this.keyMods &= ~keyMod;
                }
                this.checkKeyListeners(keyCode, down);
            }
        } else {
            keyCode = 0;
            keyName = String.fromCharCode(code).toUpperCase();
            /**
             * Since code is presumably a charCode, this is a good opportunity to update keyMods with
             * with the *real* CAPS-LOCK setting; that is, we will assume CAPS-LOCK is "off" whenever
             * a lower-case letter arrives and "on" whenever an upper-case letter arrives when neither
             * any SHIFT nor CAPS-LOCK key appears to be depressed.
             */
            if (code >= Input.CHARCODE.A && code <= Input.CHARCODE.Z) {
                if (!(this.keyMods & (Input.KEYMOD.SHIFTS | Input.KEYMOD.CAPS_LOCK))) {
                    this.keyMods |= Input.KEYMOD.CAPS_LOCK;
                    this.checkKeyListeners(Input.KEYCODE.CAPS_LOCK, true);
                }
            }
            else if (code >= Input.CHARCODE.a && code <= Input.CHARCODE.z) {
                if (this.keyMods & Input.KEYMOD.CAPS_LOCK) {
                    this.keyMods &= ~Input.KEYMOD.CAPS_LOCK;
                    this.checkKeyListeners(Input.KEYCODE.CAPS_LOCK, false);
                }
            }
        }
        if (this.gridMap) {
            if (down != undefined) return false;
            for (let row = 0; row < this.gridMap.length; row++) {
                let rowMap = this.gridMap[row];
                for (let col = 0; col < rowMap.length; col++) {
                    let aParts = rowMap[col].split('|');
                    if (aParts.indexOf(keyName) >= 0) {
                        if (this.keyState) {
                            if (this.keysPressed.length < 16) {
                                this.keysPressed.push(code);
                            }
                        } else {
                            this.keyState = 1;
                            this.keyActive = keyName;
                            this.setPosition(col, row);
                            this.checkKeyListeners(keyName, true);
                            this.advanceKeyState();
                        }
                        return true;
                    }
                }
            }
        }
        if (this.idMap) {
            if (down == undefined) {
                return true;            // if there's an idMap, just consume all keyPress events
            }
            let ids = Object.keys(this.idMap);
            for (let i = 0; i < ids.length; i++) {
                let id = ids[i];
                if (this.idMap[id].keys.indexOf(keyName) >= 0) {
                    this.checkKeyListeners(id, down);
                    this.idMap[id].state = down? 1 : 0;
                    return true;
                }
            }
        }
        if (this.keyMap) {
            if (!keyCode) {
                return true;            // if we received a charCode rather than a keyCode, just consume it
            }
            let keyNum = this.keyMap[keyCode];
            if (keyNum) {
                if (down) {
                    this.addActiveKey(keyNum, autoRelease);
                } else {
                    this.removeActiveKey(keyNum);
                }
                /**
                 * At this point, I used to return true, indicating that we're not interested in a keypress
                 * event, but in fact, onkeyCode() is now interested in them only insofar as letters can convey
                 * information about the state of CAPS-LOCK (see above).
                 */
            }
        }
        return false;
    }

    /**
     * onKeyTimer()
     *
     * @this {Input}
     */
    onKeyTimer()
    {

        if (this.keyState == 1) {
            this.keyState++;
            this.checkKeyListeners(this.keyActive, false);
            this.keyActive = "";
            this.setPosition(-1, -1);
            this.advanceKeyState();
        } else {
            this.keyState = 0;
            if (this.keysPressed.length) {
                this.onKeyCode(this.keysPressed.shift());
            }
        }
    }

    /**
     * onReset()
     *
     * Called by the Machine device to provide notification of a reset event.
     *
     * @this {Input}
     */
    onReset()
    {
        /**
         * As keyDown events are encountered, the event keyCode is checked against the active keyMap, if any.
         * If the keyCode exists in the keyMap, then each keyNum in the keyMap is added to the aActiveKeys array.
         * As each key is released (or auto-released), its entry is removed from the array.
         */
        this.aActiveKeys = [];

        /**
         * The current (assumed) physical states of the various shift/lock "modifier" keys (formerly bitsState);
         * the browser doesn't provide a way to query them, so all we can do is infer them as events arrive.
         */
        this.keyMods = 0;               // zero or more KEYMOD bits

        /**
         * Finally, the active input state.  If there is no active input, col and row are -1.  After
         * this point, these variables will be updated by setPosition().
         */
        this.col = this.row = -1;
    }

    /**
     * onSurfaceEvent(element, action, event, state)
     *
     * @this {Input}
     * @param {Element} element
     * @param {number} action
     * @param {Event} event (eg, the MouseEvent or TouchEvent from an 'mouse' or 'touch' event listener)
     * @param {SurfaceState} state
     */
    onSurfaceEvent(element, action, event, state)
    {
        let col = -1, row = -1;
        let fMultiTouch = false;
        let x = -1, y = -1, xInput, yInput, fButton, fInput, fPower;

        if (action < Input.ACTION.RELEASE) {

            /**
             * @name Event
             * @property {Array} targetTouches
             */
            event = event || window.event;
            if (!event.targetTouches || !event.targetTouches.length) {
                x = event.clientX;
                y = event.clientY;
            } else {
                x = event.targetTouches[0].clientX;
                y = event.targetTouches[0].clientY;
                fMultiTouch = (event.targetTouches.length > 1);
            }

            /**
             * The following code replaces the older code below it.  It requires that we use clientX and clientY
             * instead of pageX and pageY from the targetTouches array.  The older code seems to be completely broken
             * whenever the page is full-screen, hence this change.
             */
            let rect = event.target.getBoundingClientRect();
            x -= rect.left;
            y -= rect.top;

            /**
             * Touch coordinates (that is, the pageX and pageY properties) are relative to the page, so to make
             * them relative to the element, we must subtract the element's left and top positions.  This Apple document:
             *
             *      https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/HTML-canvas-guide/AddingMouseandTouchControlstoCanvas/AddingMouseandTouchControlstoCanvas.html
             *
             * makes it sound simple, but it turns out we have to walk the element's entire "parentage" of DOM elements to
             * get the exact offsets.
             *
             *      let xOffset = 0;
             *      let yOffset = 0;
             *      let elementNext = element;
             *      do {
             *          if (!isNaN(elementNext.offsetLeft)) {
             *              xOffset += elementNext.offsetLeft;
             *              yOffset += elementNext.offsetTop;
             *          }
             *      } while ((elementNext = elementNext.offsetParent));
             *      x -= xOffset;
             *      y -= yOffset;
             */

            /**
             * Due to the responsive nature of our pages, the displayed size of the surface image may be smaller than
             * the original size, and the coordinates we receive from events are based on the currently displayed size.
             */
            x = (x * (state.cxSurface / element.offsetWidth))|0;
            y = (y * (state.cySurface / element.offsetHeight))|0;

            xInput = x - state.xInput;
            yInput = y - state.yInput;

            /**
             * fInput is set if the event occurred somewhere within the input region (ie, the calculator keypad),
             * either on a button or between buttons, whereas fButton is set if the event occurred squarely (rectangularly?)
             * on a button.  fPower deals separately with the power button; it is set if the event occurred on the
             * power button.
             */
            fInput = fButton = false;
            fPower = (x >= state.xPower && x < state.xPower + state.cxPower && y >= state.yPower && y < state.yPower + state.cyPower);

            /**
             * I use the top of the input region, less some gap, to calculate a dividing line, above which
             * default actions should be allowed, and below which they should not.  Ditto for any event inside
             * the power button.
             */
            if (xInput >= 0 && xInput < state.cxInput && yInput + state.cyGap >= 0 || fPower) {
                /**
                 * If we allow touch events to be processed, they will generate mouse events as well, causing
                 * confusion and delays.  We can sidestep that problem by preventing default actions on any event
                 * that occurs within the input region.  One downside is that you can no longer scroll or zoom the
                 * image using touch, but that may be just as well, because you probably don't want sloppy touches
                 * moving your display around (or worse, a rapid double-tap zooming the display).  I do try to
                 * make one small concession for two-finger zoom operations (see fMultiTouch), but that's a bit
                 * fiddly, because it depends on both fingers hitting the surface at the same instant.
                 */
                if (!fMultiTouch && !this.fScroll) event.preventDefault();

                if (xInput >= 0 && xInput < state.cxInput && yInput >= 0 && yInput < state.cyInput) {
                    fInput = true;
                    /**
                     * The width and height of each column and row could be determined by computing cxGap + cxButton
                     * and cyGap + cyButton, respectively, but those gap and button sizes are merely estimates, and should
                     * only be used to help with the final button coordinate checks farther down.
                     */
                    let cxCol = (state.cxInput / state.nCols) | 0;
                    let cyCol = (state.cyInput / state.nRows) | 0;
                    let colInput = (xInput / cxCol) | 0;
                    let rowInput = (yInput / cyCol) | 0;

                    /**
                     * If the grid is hexagonal (aka "Lite-Brite" mode), then the cells of even-numbered rows are
                     * offset horizontally by 1/2 cell.  In addition, the last cell in those rows is unused, so if
                     * after compensating by 1/2 cell, the target column is the last cell, we set xInput to -1,
                     * effectively ignoring input on that cell.
                     */
                    if (this.fHexagonal && !(rowInput & 0x1)) {
                        xInput -= (cxCol >> 1);
                        colInput = (xInput / cxCol) | 0;
                        if (colInput == state.nCols - 1) xInput = -1;
                    }

                    /**
                     * (xCol,yCol) will be the top left corner of the button closest to the point of input.  However, that's
                     * based on our gap estimate.  If things seem "too tight", shrink the gap estimates, which will automatically
                     * increase the button size estimates.
                     */
                    let xCol = colInput * cxCol + (state.cxGap >> 1);
                    let yCol = rowInput * cyCol + (state.cyGap >> 1);

                    xInput -= xCol;
                    yInput -= yCol;
                    if (xInput >= 0 && xInput < state.cxButton && yInput >= 0 && yInput < state.cyButton) {
                        col = colInput;
                        row = rowInput;
                        fButton = true;
                    }
                }
            }
        }

        this.checkSurfaceListeners(action, xInput || 0, yInput || 0, element.offsetWidth, element.offsetHeight);

        if (fMultiTouch) return;

        if (action == Input.ACTION.PRESS) {
            /**
             * Record the position of the event, transitioning xStart and yStart to non-negative values.
             */
            state.xStart = x;
            state.yStart = y;
            if (fInput) {
                /**
                 * The event occurred in the input region, so we call setPosition() regardless of whether
                 * it hit or missed a button.
                 */
                this.setPosition(col, row);
                /**
                 * On the other hand, if it DID hit a button, then we arm the auto-release timer, to ensure
                 * a minimum amount of time (ie, releaseDelay).
                 */
                if (fButton && this.releaseDelay) {
                    this.time.setTimer(this.timerInputRelease, this.releaseDelay, true);
                }
            } else if (fPower) {
                this.machine.onPower();
            }
        }
        else if (action == Input.ACTION.MOVE) {
            if (state.xStart >= 0 && state.yStart >= 0 && this.fDrag) {
                this.setPosition(col, row);
            }
            else if (this.onHover) {
                this.onHover(col, row);
            }
        }
        else if (action == Input.ACTION.RELEASE) {
            /**
             * Don't immediately signal the release if the release timer is active (let the timer take care of it).
             */
            if (!this.releaseDelay || !this.time.isTimerSet(this.timerInputRelease)) {
                this.setPosition(-1, -1);
            }
            state.xStart = state.yStart = -1;
        }
        else {
            this.println("unrecognized action: " + action);
        }
    }

    /**
     * setFocus()
     *
     * If we have a focusable input element, give it focus.  This is used by the Debugger, for example, to switch focus
     * after starting the machine.
     *
     * @this {Input}
     */
    setFocus()
    {
        /**
         * In addition, we now check machine.isReady(), to avoid jerking the page's focus around when a machine is first
         * powered; it won't be marked ready until all the onPower() calls have completed, including the CPU's onPower()
         * call, which in turn calls setFocus().
         */
        let focusElement = this.altFocus? this.altFocusElement : this.focusElement;
        if (focusElement && this.machine.isReady()) {
            this.printf(Device.MESSAGE.INPUT, 'setFocus("%s")\n', focusElement.id || focusElement.nodeName);
            focusElement.focus();
            focusElement.scrollIntoView();      // one would have thought focus() would do this, but apparently not....
        }
    }

    /**
     * setAltFocus(fAlt)
     *
     * When a device (eg, Monitor) needs us to use altFocusElement as the input focus (eg, when the machine is running
     * full-screen), it calls setAltFocus(true).
     *
     * @this {Input}
     * @param {boolean} fAlt
     */
    setAltFocus(fAlt)
    {
        this.altFocus = fAlt;
        this.setFocus();
    }

    /**
     * setPosition(col, row)
     *
     * @this {Input}
     * @param {number} col
     * @param {number} row
     */
    setPosition(col, row)
    {
        if (col != this.col || row != this.row) {
            this.col = col;
            this.row = row;
            if (this.onInput) this.onInput(col, row);
        }
    }
}

Input.ACTION = {
    PRESS:      1,              // eg, an action triggered by a 'mousedown' or 'touchstart' event
    MOVE:       2,              // eg, an action triggered by a 'mousemove' or 'touchmove' event
    RELEASE:    3               // eg, an action triggered by a 'mouseup' (or 'mouseout') or 'touchend' event
};

Input.BINDING = {
    POWER:      "power",
    RESET:      "reset",
    SURFACE:    "surface"
};

Input.TYPE = {                  // types for addListener()
    KEYCODE:    "keyCode",
    IDMAP:      "idMap",
    SWITCH:     "switch"
};

/**
 * To keep track of the state of modifier keys, I've grabbed a copy of the same bit definitions
 * used by /modules/pcx86/lib/keyboard.js, since it's only important that we have a set of unique
 * values; what the values are isn't critical.
 *
 * Note that all the "right-hand" modifiers are right-shifted versions of the "left-hand" modifiers.
 */
Input.KEYMOD = {
    RSHIFT:         0x0001,
    SHIFT:          0x0002,
    SHIFTS:         0x0003,
    RCTRL:          0x0004,             // 101-key keyboard only
    CTRL:           0x0008,
    CTRLS:          0x000C,
    RALT:           0x0010,             // 101-key keyboard only
    ALT:            0x0020,
    ALTS:           0x0030,
    RCMD:           0x0040,             // 101-key keyboard only
    CMD:            0x0080,             // 101-key keyboard only
    CMDS:           0x00C0,
    LEFT:           0x00AA,             // SHIFT | CTRL | ALT | CMD
    RIGHT:          0x0055,             // RSHIFT | RCTRL | RALT | RCMD
    TEMP:           0x00FF,             // SHIFT | RSHIFT | CTRL | RCTRL | ALT | RALT | CMD | RCMD
    INSERT:         0x0100,             // TODO: Placeholder (we currently have no notion of any "insert" states)
    CAPS_LOCK:      0x0200,
    NUM_LOCK:       0x0400,
    SCROLL_LOCK:    0x0800,
    LOCK:           0x0E00              // CAPS_LOCK | NUM_LOCK | SCROLL_LOCK
};

Input.KEYCODEMOD = {
    [Input.KEYCODE.SHIFT]:          Input.KEYMOD.SHIFT,
    [Input.KEYCODE.CTRL]:           Input.KEYMOD.CTRL,
    [Input.KEYCODE.ALT]:            Input.KEYMOD.ALT,
    [Input.KEYCODE.CMD]:            Input.KEYMOD.CMD,
    [Input.KEYCODE.CAPS_LOCK]:      Input.KEYMOD.CAPS_LOCK,
    [Input.KEYCODE.NUM_LOCK]:       Input.KEYMOD.NUM_LOCK,
    [Input.KEYCODE.SCROLL_LOCK]:    Input.KEYMOD.SCROLL_LOCK
};

Input.CLASSES["Input"] = Input;

/**
 * @copyright https://www.pcjs.org/modules/v3/led.js (C) 2012-2025 Jeff Parsons
 */

/** @typedef {{ class: string, bindings: (Object|undefined), version: (number|undefined), overrides: (Array.<string>|undefined), type: number, width: (number|undefined), height: (number|undefined), cols: (number|undefined), colsExtra: (number|undefined), rows: (number|undefined), rowsExtra: (number|undefined), color: (string|undefined), backgroundColor: (string|undefined), fixed: (boolean|undefined), hexagonal: (boolean|undefined), highlight: (boolean|undefined), persistent: (boolean|undefined) }} */
let LEDConfig;

/**
 * The ultimate goal is to provide support for a variety of LED types, such as:
 *
 * 1) LED Light (single light)
 * 2) LED Digit (7-segment digit)
 *
 * The initial goal is to manage a 12-element array of 7-segment LED digits for the TI-57.
 *
 * We create a "view" canvas element inside the specified "container" element, along with a "grid" canvas
 * where all the real drawing occurs; drawView() then renders the "grid" canvas onto the "view" canvas.
 *
 * Internally, our LED digits have a width and height of 96 and 128.  Those are "grid" dimensions which
 * cannot be changed, because our table of drawing coordinates in LED.SEGMENTS are hard-coded for those
 * dimensions.  The cell width and height that are specified as part of the LEDConfig are "view" dimensions,
 * which usually match the grid dimensions, but you're welcome to scale them up or down; the browser's
 * drawImage() function takes care of that.
 *
 * There is a low-level function, drawGridSegment(), for drawing specific LED segments of specific digits;
 * generally, you start with clearGrid(), draw all the segments for a given update, and then call drawView()
 * to make them visible.
 *
 * However, our devices operate at a higher level.  They use setLEDState() to modify the state,
 * character, etc, that each of the LED cells should display, which updates our internal LED buffer.  Then
 * at whatever display refresh rate is set (typically 60Hz), drawBuffer() is called to see if the buffer
 * contents have been modified since the last refresh, and if so, it converts the contents of the buffer to
 * a string and calls drawString().
 *
 * This buffering strategy, combined with the buffer "tickled" flag (see below), not only makes life
 * simple for this device, but also simulates how the display goes blank for short periods of time while
 * the CPU is busy performing calculations.
 *
 * @class {LED}
 * @unrestricted
 * @property {LEDConfig} config
 * @property {number} type (one of the LED.TYPE values)
 * @property {number} width (default is 96 for LED.TYPE.DIGIT, 32 otherwise; see LED.SIZES)
 * @property {number} height (default is 128 for LED.TYPE.DIGIT, 32 otherwise; see LED.SIZES)
 * @property {number} cols (default is 1)
 * @property {number} rows (default is 1)
 * @property {number} colsView (default is cols)
 * @property {number} rowsView (default is rows)
 * @property {string} color (default is none; ie, transparent foreground)
 * @property {string} colorBackground (default is none; ie, transparent background)
 * @property {boolean} fFixed (default is false, meaning the view may fill the container to its maximum size)
 * @property {boolean} fHexagonal (default is false)
 * @property {boolean} fHighlight (default is true)
 * @property {boolean} fPersistent (default is false for LED.TYPE.DIGIT, meaning the view will be blanked if not refreshed)
 * @property {number} widthView (computed)
 * @property {number} heightView (computed)
 * @property {number} widthGrid (computed)
 * @property {number} heightGrid (computed)
 * @property {HTMLCanvasElement} canvasView
 * @property {CanvasRenderingContext2D} contextView
 * @property {HTMLCanvasElement} canvasGrid
 * @property {CanvasRenderingContext2D} contextGrid
 * @property {{ container: Element|undefined }} bindings
 * @property {Array.<string|number|null>} buffer
 * @property {Array.<string|number>|null} bufferClone
 * @property {boolean} fBufferModified
 * @property {boolean} fBufferTickled
 */
class LED extends Device {
    /**
     * LED(idMachine, idDevice, config)
     *
     * Sample config:
     *
     *      "display": {
     *        "class": "LED",
     *        "type": 3,
     *        "cols": 12,
     *        "rows": 1,
     *        "color": "red",
     *        "bindings": {
     *          "container": "displayTI57"
     *        }
     *      }
     *
     * @this {LED}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {LEDConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config, ["color", "backgroundColor"]);

        let container = this.bindings[LED.BINDING.CONTAINER];
        if (!container) {
            let sError = "LED " + this.config.bindings[LED.BINDING.CONTAINER] + " binding for '" + LED.BINDING.CONTAINER + "' missing";
            throw new Error(sError);
        }

        let canvasView = /** @type {HTMLCanvasElement} */ (document.createElement("canvas"));
        if (!canvasView || !canvasView.getContext) {
            let sError = "LED device requires HTML5 canvas support";
            container.innerHTML = sError;
            throw new Error(sError);
        }

        this.idView = this.getBindingID(LED.BINDING.CONTAINER) + ".canvas";
        canvasView.setAttribute("id", this.idView);

        this.container = container;
        this.canvasView = canvasView;

        this.type = this.getBounded(this.getDefaultNumber('type', LED.TYPE.ROUND, LED.TYPES), LED.TYPE.SMALL, LED.TYPE.DIGIT);
        this.widthCell = LED.SIZES[this.type][0];
        this.heightCell = LED.SIZES[this.type][1];
        this.width = this.getDefaultNumber('width', this.widthCell);
        this.height = this.getDefaultNumber('height', this.heightCell);
        this.colsView = this.getDefaultNumber('cols',  1);
        this.cols = this.colsView + this.getDefaultNumber('colsExtra', 0);
        this.rowsView = this.getDefaultNumber('rows',  1);
        this.rows = this.rowsView + this.getDefaultNumber('rowsExtra', 0);
        this.widthView = this.width * this.colsView;
        this.heightView = this.height * this.rowsView;

        this.colorTransparent = this.getRGBAColor("black", 0);
        this.colorOn = this.getRGBColor(this.config['color']) || this.colorTransparent;
        this.colorOff = this.getRGBAColor(this.colorOn, 1.0, 0.25);
        this.colorHighlight = this.getRGBAColor(this.colorOn, 1.0, 2.0);
        this.colorBackground = this.getRGBColor(this.config['backgroundColor']);

        /**
         * We generally want our view canvas to be "responsive", not "fixed" (ie, to automatically resize
         * with changes to the overall window size), so we apply the following style attributes:
         *
         *      width: 100%;
         *      height: auto;
         *
         * But, if you really don't want that feature, then set the LED config's "fixed" property to true.
         */
        this.fFixed = this.getDefaultBoolean('fixed', false);
        if (!this.fFixed) {
            canvasView.style.width = "100%";
            canvasView.style.height = "auto";
        }

        /**
         * Hexagonal (aka "Lite-Brite" mode) and highlighting options
         */
        this.fHexagonal = this.getDefaultBoolean('hexagonal', false);
        this.fHighlight = this.getDefaultBoolean('highlight', true);

        /**
         * Persistent LEDS are the default, except for LED.TYPE.DIGIT, which is used with calculator displays
         * whose underlying hardware must constantly "refresh" the LEDs to prevent them from going dark.
         */
        this.fPersistent = this.getDefaultBoolean('persistent', (this.type < LED.TYPE.DIGIT));

        canvasView.setAttribute("width", this.widthView.toString());
        canvasView.setAttribute("height", this.heightView.toString());
        canvasView.style.backgroundColor = this.colorTransparent;
        container.appendChild(canvasView);
        this.contextView = /** @type {CanvasRenderingContext2D} */ (canvasView.getContext("2d"));

        /**
         * canvasGrid is where all LED segments are composited; then they're drawn onto canvasView.
         */
        this.canvasGrid = /** @type {HTMLCanvasElement} */ (document.createElement("canvas"));
        if (this.canvasGrid) {
            this.canvasGrid.width = this.widthGrid = this.widthCell * this.colsView;
            this.canvasGrid.height = this.heightGrid = this.heightCell * this.rowsView;
            this.contextGrid = this.canvasGrid.getContext("2d");
        }

        /**
         * Time to allocate our internal LED buffer.  Other devices access the buffer through interfaces
         * like setLEDState() and getLEDState().  The LED buffer contains four per elements per LED cell:
         *
         *      [0]:    state (eg, ON or OFF or a digit)
         *      [1]:    color
         *      [2]:    count(s) (eg, 0 to 8  4-bit counts)
         *      [3]:    flags (eg, PERIOD, MODIFIED, etc)
         *
         * The LED buffer also contains an extra (scratch) row at the end.  This extra row, along with the
         * dynamically allocated "clone" buffer, is used by the LED Controller for direct buffer manipulation;
         * see the low-level getBuffer(), getBufferClone(), and swapBuffers() interfaces.
         */
        this.nBufferInc = 4;
        this.nBufferCells = ((this.rows + 1) * this.cols) * this.nBufferInc;
        this.buffer = new Array(this.nBufferCells);
        this.bufferClone = null;
        this.nBufferIncExtra = (this.colsView < this.cols? (this.cols - this.colsView) * 4 : 0);

        /**
         * fBufferModified is straightforward: set to true by any setLEDState() call that actually
         * changed something in the LED buffer, set to false after every drawBuffer() call, periodic
         * or otherwise.
         *
         * fBufferTickled is a flag which, under normal (idle) circumstances, will constantly be set
         * to true by periodic display operations that call setLEDState(); we clear it after every
         * periodic drawBuffer(), so if the machine fails to execute a setBuffer() in a timely manner,
         * we will see that fBufferTickled hasn't been "tickled", and automatically blank the display.
         *
         * fDisplayOn is a global "on/off" switch for the entire display.
         */
        this.fBufferModified = this.fBufferTickled = false;
        this.msLastDraw = 0;
        this.fDisplayOn = true;

        /**
         * nShiftedLeft is an optimization that tells drawGrid() when it can minimize the number of
         * individual cells to redraw, by shifting the entire grid image leftward and redrawing only
         * the rightmost cells.
         */
        this.nShiftedLeft = 0;

        /**
         * This records the location of the most recent LED buffer location updated via setLEDState(),
         * in case we want to highlight it.
         */
        this.iBufferRecent = -1;

        let led = this;
        this.time = /** @type {Time} */ (this.findDeviceByClass("Time"));
        this.time.addAnimation(function ledAnimate(t, nFramesPerSecond) {
            led.drawBuffer(false, t, nFramesPerSecond);
        });

        led.clearBuffer(true);
    }

    /**
     * clearBuffer(fDraw)
     *
     * @this {LED}
     * @param {boolean} [fDraw]
     */
    clearBuffer(fDraw)
    {
        this.initBuffer(this.buffer);
        this.fBufferModified = this.fBufferTickled = true;
        if (fDraw) this.drawBuffer(true);
    }

    /**
     * clearGrid()
     *
     * @this {LED}
     */
    clearGrid()
    {
        if (this.colorBackground) {
            this.contextGrid.fillStyle = this.colorBackground;
            this.contextGrid.fillRect(0, 0, this.widthGrid, this.heightGrid);
        } else {
            this.contextGrid.clearRect(0, 0, this.widthGrid, this.heightGrid);
        }
    }

    /**
     * clearGridCell(col, row, xOffset)
     *
     * @this {LED}
     * @param {number} col
     * @param {number} row
     * @param {number} xOffset
     */
    clearGridCell(col, row, xOffset)
    {
        let xDst = col * this.widthCell + xOffset;
        let yDst = row * this.heightCell;
        if (this.colorBackground) {
            this.contextGrid.fillStyle = this.colorBackground;
            this.contextGrid.fillRect(xDst, yDst, this.widthCell, this.heightCell);
        } else {
            this.contextGrid.clearRect(xDst, yDst, this.widthCell, this.heightCell);
        }
    }

    /**
     * drawBuffer(fForced, msFrame, nFramesPerSecond)
     *
     * This is our periodic (60Hz) redraw function; however, it can also be called synchronously
     * (eg, see clearBuffer()).  The other important periodic side-effect of this function is clearing
     * fBufferTickled, so that if no other setLEDState() calls occur between now and the next drawBuffer(),
     * an automatic clearBuffer() will be triggered.  This simulates the normal blanking of the display
     * whenever the machine performs lengthy calculations, because for an LED display to remain lit,
     * the machine must perform a display operation ("refresh") at least 30-60 times per second.
     *
     * @this {LED}
     * @param {boolean} [fForced] (if not set, this is a normal refresh call)
     * @param {number} [msFrame] (timestamp of this frame, in milliseconds, from the requestAnimationFrame() callback)
     * @param {number} [nFramesPerSecond] (normally 60, but it can be lower *or* higher; eg, high refresh-rate displays)
     */
    drawBuffer(fForced = false, msFrame = 0, nFramesPerSecond = 60)
    {
        if (this.fBufferModified || fForced) {
            if (this.type < LED.TYPE.DIGIT) {
                this.drawGrid(fForced);
            } else {
                let s = "";
                for (let i = 0; i < this.buffer.length; i += this.nBufferInc) {
                    s += this.buffer[i] || ' ';
                    if (this.buffer[i+3] & LED.FLAGS.PERIOD) s += '.';
                }
                this.drawString(s);
            }
            this.fBufferModified = false;
            this.iBufferRecent = -1;
        }
        else if (!this.fPersistent && !this.fBufferTickled) {
            if (!msFrame || !this.msLastDraw || (msFrame - this.msLastDraw) >= ((1000 / nFramesPerSecond)|0)) {
                this.clearBuffer(true);
            }
        }
        this.fBufferTickled = false;
        if (msFrame) this.msLastDraw = msFrame;
    }

    /**
     * drawGrid(fForced)
     *
     * Used by drawBuffer() for LED.TYPE.ROUND, LED.TYPE.SQUARE, etc.
     *
     * If the buffer was recently shifted left (ie, nShiftedLeft is set), then we take advantage
     * of that knowledge to use drawImage() to shift the entire grid image left, and then redrawing
     * only the rightmost visible column.
     *
     * @this {LED}
     * @param {boolean} [fForced] (if not set, this is a normal refresh call)
     */
    drawGrid(fForced)
    {
        let colRedraw = 0;
        if (!this.fPersistent || fForced) {
            this.clearGrid();
        } else if (this.nShiftedLeft) {
            colRedraw = this.colsView - this.nShiftedLeft;
            let xStart = this.widthCell * this.nShiftedLeft;
            let cxVisible = this.widthCell * colRedraw;
            this.contextGrid.drawImage(this.canvasGrid, xStart, 0, cxVisible, this.heightGrid, 0, 0, cxVisible, this.heightGrid);
            /**
             * At this point, the only grid drawing we might need to do now is the column at colRedraw,
             * but we still loop over the entire buffer to ensure all the cell MODIFIED states are in sync.
             */
        }
        let i = 0;
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.colsView; col++) {
                let state = this.buffer[i];
                let color = this.buffer[i+1] || this.colorTransparent;
                let fLeaveModified = false;
                let fModified = !!(this.buffer[i+3] & LED.FLAGS.MODIFIED);
                let fHighlight = (this.fHighlight && i == this.iBufferRecent);
                if (!this.fDisplayOn && state) {
                    state = LED.STATE.OFF;
                    fModified = fLeaveModified = true;
                }
                if (fModified || fHighlight || fForced) {
                    if (col >= colRedraw) {
                        this.drawGridCell(state, color, col, row, fHighlight);
                    }
                    if (fHighlight || fLeaveModified) {
                        this.buffer[i+3] |= LED.FLAGS.MODIFIED;
                    } else {
                        this.buffer[i+3] &= ~LED.FLAGS.MODIFIED;
                    }
                }
                i += this.nBufferInc;
            }
            i += this.nBufferIncExtra;
        }
        this.nShiftedLeft = 0;
        this.drawView();
    }

    /**
     * drawGridCell(state, color, col, row, fHighlight)
     *
     * Used by drawGrid() for LED.TYPE.ROUND, LED.TYPE.SQUARE, etc.
     *
     * @this {LED}
     * @param {string} state (eg, LED.STATE.ON or LED.STATE.OFF)
     * @param {string} [color]
     * @param {number} [col] (default is zero)
     * @param {number} [row] (default is zero)
     * @param {boolean} [fHighlight] (true if the cell should be highlighted; default is false)
     */
    drawGridCell(state, color, col = 0, row = 0, fHighlight = false)
    {
        let xOffset = 0;
        if (this.fHexagonal) {
            if (!(row & 0x1)) {
                xOffset = (this.widthCell >> 1);
                if (col == this.colsView - 1) return;
            }
        }

        let colorOn, colorOff;
        if (!color || color == this.colorOn) {
            colorOn = fHighlight? this.colorHighlight : this.colorOn;
            colorOff = this.colorOff;
        } else {
            colorOn = fHighlight? this.getRGBAColor(color, 1.0, 2.0) : color;
            colorOff = this.getRGBAColor(color, 1.0, 0.25);
        }

        let fTransparent = false;
        let colorCell = (state? colorOn : colorOff);
        if (colorOn == this.colorTransparent) {
            colorCell = this.colorBackground;
            fTransparent = true;
        }

        let xDst = col * this.widthCell + xOffset;
        let yDst = row * this.heightCell;

        /**
         * If this is NOT a persistent LED display, then drawGrid() will have done a preliminary clearGrid(),
         * eliminating the need to clear individual cells.  Whereas if this IS a persistent LED display, then
         * we need to clear cells on an as-drawn basis.  If we don't, there could be residual "bleed over"
         * around the edges of the shape we drew here previously.
         */
        if (this.fPersistent) {
            this.clearGridCell(col, row, xOffset);
        }

        this.contextGrid.fillStyle = colorCell;

        let coords = LED.SHAPES[this.type];
        if (coords.length == 3) {
            this.contextGrid.beginPath();
            this.contextGrid.arc(xDst + coords[0], yDst + coords[1], coords[2], 0, Math.PI * 2);
            if (fTransparent) {
                /**
                 * The following code works as well:
                 *
                 *      this.contextGrid.save();
                 *      this.contextGrid.clip();
                 *      this.contextGrid.clearRect(xDst, yDst, this.widthCell, this.heightCell);
                 *      this.contextGrid.restore();
                 *
                 * but I assume it's not as efficient.
                 */
                this.contextGrid.globalCompositeOperation = "destination-out";
                this.contextGrid.fill();
                this.contextGrid.globalCompositeOperation = "source-over";
            } else {
                this.contextGrid.fill();
            }
        } else {
            this.contextGrid.fillRect(xDst + coords[0], yDst + coords[1], coords[2], coords[3]);
        }
    }

    /**
     * drawGridSegment(seg, col, row)
     *
     * Used by drawSymbol() for LED.TYPE.DIGIT.
     *
     * @this {LED}
     * @param {string} seg (eg, "A")
     * @param {number} [col] (default is zero)
     * @param {number} [row] (default is zero)
     */
    drawGridSegment(seg, col = 0, row = 0)
    {
        let coords = LED.SEGMENTS[seg];
        if (coords) {
            let xDst = col * this.widthCell;
            let yDst = row * this.heightCell;
            this.contextGrid.fillStyle = this.colorOn;
            this.contextGrid.beginPath();
            if (coords.length == 3) {
                this.contextGrid.arc(xDst + coords[0], yDst + coords[1], coords[2], 0, Math.PI * 2);
            } else {
                for (let i = 0; i < coords.length; i += 2) {
                    if (!i) {
                        this.contextGrid.moveTo(xDst + coords[i], yDst + coords[i+1]);
                    } else {
                        this.contextGrid.lineTo(xDst + coords[i], yDst + coords[i+1]);
                    }
                }
            }
            this.contextGrid.closePath();
            this.contextGrid.fill();
        }
    }

    /**
     * drawString(s)
     *
     * Used by drawBuffer() for LED.TYPE.DIGIT.
     *
     * @this {LED}
     * @param {string} s
     */
    drawString(s)
    {
        this.clearGrid();
        for (let i = 0, col = 0, row = 0; i < s.length; i++) {
            let ch = s[i];
            if (ch == '.') {
                if (col) col--;
            }
            this.drawSymbol(ch, col, row);
            if (++col == this.colsView) {
                col = 0;
                if (++row == this.rows) {
                    break;
                }
            }
        }
        this.drawView();
    }

    /**
     * drawSymbol(symbol, col, row)
     *
     * Used by drawString() for LED.TYPE.DIGIT.
     *
     * If the symbol does not exist in LED.SYMBOL_SEGMENTS, then nothing is drawn.
     *
     * @this {LED}
     * @param {string} symbol
     * @param {number} [col] (default is zero)
     * @param {number} [row] (default is zero)
     */
    drawSymbol(symbol, col = 0, row = 0)
    {
        let segments = LED.SYMBOL_SEGMENTS[symbol];
        if (segments) {
            for (let i = 0; i < segments.length; i++) {
                this.drawGridSegment(segments[i], col, row)
            }
        }
    }

    /**
     * drawView()
     *
     * @this {LED}
     */
    drawView()
    {
        /**
         * Setting the 'globalCompositeOperation' property of a 2D context is something you rarely need to do,
         * because the default draw behavior ("source-over") is fine for most cases.  One case where it is NOT
         * fine is when we're using a transparent background color, because it doesn't copy over any transparent
         * pixels, effectively making it impossible to "turn off" any previously drawn LED segments.  To force
         * that behavior, we must select the "copy" behavior.
         *
         * Refer to: https://www.w3.org/TR/2dcontext/#dom-context-2d-globalcompositeoperation
         */
        this.contextView.globalCompositeOperation = (this.colorBackground && this.colorOn != this.colorTransparent)? "source-over" : "copy";
        this.contextView.drawImage(this.canvasGrid, 0, 0, this.widthGrid, this.heightGrid, 0, 0, this.widthView, this.heightView);
    }

    /**
     * enableDisplay(on)
     *
     * @this {LED}
     * @param {boolean} [on]
     */
    enableDisplay(on = true)
    {
        if (this.fDisplayOn != on) {
            this.fDisplayOn = on;
            this.fBufferModified = true;
        }
    }

    /**
     * getBuffer()
     *
     * @this {LED}
     * @returns {Array}
     */
    getBuffer()
    {
        return this.buffer;
    }

    /**
     * getBufferClone()
     *
     * @this {LED}
     * @returns {Array}
     */
    getBufferClone()
    {
        if (!this.bufferClone) {
            this.bufferClone = new Array(this.nBufferCells);
            this.initBuffer(this.bufferClone);
        }
        return this.bufferClone;
    }

    /**
     * getLEDColor(col, row)
     *
     * @this {LED}
     * @param {number} col
     * @param {number} row
     * @returns {string}
     */
    getLEDColor(col, row)
    {
        let i = (row * this.cols + col) * this.nBufferInc;
        return this.buffer[i+1] || this.colorTransparent;
    }

    /**
     * getLEDColorValues(col, row, rgb)
     *
     * @this {LED}
     * @param {number} col
     * @param {number} row
     * @param {Array.<number>} rgb
     * @returns {boolean}
     */
    getLEDColorValues(col, row, rgb)
    {
        let i = (row * this.cols + col) * this.nBufferInc;
        return this.parseRGBValues(this.buffer[i+1] || this.colorTransparent, rgb);
    }

    /**
     * getLEDCounts(col, row, counts)
     *
     * This function returns success (true) ONLY for cells that are not transparent.
     *
     * For a typical "Lite-Brite" grid, transparent cells are considered "empty", so we want to
     * ignore them.
     *
     * @this {LED}
     * @param {number} col
     * @param {number} row
     * @param {Array.<number>} counts
     * @returns {boolean}
     */
    getLEDCounts(col, row, counts)
    {
        let fSuccess = false;
        let i = (row * this.cols + col) * this.nBufferInc;
        if (i <= this.buffer.length - this.nBufferInc && this.buffer[i+1]) {
            fSuccess = true;
            let bits = this.buffer[i+2];
            for (let c = counts.length - 1; c >= 0; c--) {
                counts[c] = bits & 0xf;
                bits >>>= 4;
            }
        }
        return fSuccess;
    }

    /**
     * getLEDCountsPacked(col, row)
     *
     * @this {LED}
     * @param {number} col
     * @param {number} row
     * @returns {number}
     */
    getLEDCountsPacked(col, row)
    {
        let i = (row * this.cols + col) * this.nBufferInc;
        return (i <= this.buffer.length - this.nBufferInc)? this.buffer[i+2] : 0;
    }

    /**
     * getLEDState(col, row)
     *
     * @this {LED}
     * @param {number} col
     * @param {number} row
     * @returns {number|undefined}
     */
    getLEDState(col, row)
    {
        let state;
        let i = (row * this.cols + col) * this.nBufferInc;
        if (i <= this.buffer.length - this.nBufferInc) {
            state = this.buffer[i];
        }
        return state;
    }

    /**
     * getDefaultColor()
     *
     * @this {LED}
     * @returns {string}
     */
    getDefaultColor()
    {
        return this.colorOn;
    }

    /**
     * getRGBColor(color, colorDefault)
     *
     * Returns a color string in the "hex" format that fillStyle recognizes (eg, "#rrggbb").
     *
     * The default is optional, allowing an undefined color to remain undefined if we want to use
     * that to signal transparency (as in the case of colorBackground).
     *
     * @this {LED}
     * @param {string|undefined} color
     * @param {string} [colorDefault]
     * @returns {string|undefined}
     */
    getRGBColor(color, colorDefault)
    {
        color = color || colorDefault;
        return color && Device.COLORS[color] || color;
    }

    /**
     * getRGBColorString(rgb)
     *
     * Returns a color string fillStyle recognizes (ie, "#rrggbb", or "rgba(r,g,b,a)" if an alpha value
     * less than 1 is set).
     *
     * TODO: Cache frequently requested colors.
     *
     * @this {LED}
     * @param {Array.<number>} rgb
     * @returns {string}
     */
    getRGBColorString(rgb)
    {
        let s;
        if (rgb.length < 4 || rgb[3] == 1) {
            s = this.sprintf("#%02x%02x%02x", rgb[0], rgb[1], rgb[2]);
        } else {
            s = this.sprintf("rgba(%d,%d,%d,%d)", rgb[0], rgb[1], rgb[2], rgb[3]);
        }
        return s;
    }

    /**
     * getRGBAColor(color, alpha, brightness)
     *
     * Returns a color string in the "rgba" format that fillStyle recognizes (eg, "rgba(255, 255, 255, 0)").
     *
     * I used to use "alpha" to adjust the brightness, but it's safer to use the "brightness" parameter,
     * which simply scales all the RGB values.  That's because if any shapes are redrawn using a fillStyle
     * with alpha < 1.0, the target alpha values will be added instead of replaced, resulting in progressively
     * brighter shapes; probably not what you want.
     *
     * @this {LED}
     * @param {string} color
     * @param {number} [alpha]
     * @param {number} [brightness]
     * @returns {string}
     */
    getRGBAColor(color, alpha = 1.0, brightness = 1.0)
    {
        if (color) {
            let rgb = [];
            color = Device.COLORS[color] || color;
            if (this.parseRGBValues(color, rgb)) {
                color = "rgba(";
                let i;
                for (i = 0; i < 3; i++) {
                    let n = Math.round(rgb[i] * brightness);
                    n = (n < 0? 0 : (n > 255? 255 : n));
                    color += n + ",";
                }
                color += (i < rgb.length? rgb[i] : alpha) + ")";
            }
        }
        return color;
    }

    /**
     * initBuffer(buffer)
     *
     * @this {LED}
     * @param {Array.<number|string|null>} buffer
     */
    initBuffer(buffer)
    {
        for (let i = 0; i < buffer.length; i += this.nBufferInc) {
            this.initCell(buffer, i);
        }
    }

    /**
     * initCell(buffer, iCell)
     *
     * @this {LED}
     * @param {Array.<number|string|null>} buffer
     * @param {number} iCell
     */
    initCell(buffer, iCell)
    {
        if (this.type < LED.TYPE.DIGIT) {
            buffer[iCell] = LED.STATE.OFF;
        } else {
            buffer[iCell] = ' ';
        }
        buffer[iCell+1] = (this.colorOn == this.colorTransparent? null : this.colorOn);
        buffer[iCell+2] = 0;
        buffer[iCell+3] = LED.FLAGS.MODIFIED;
    }

    /**
     * loadState(state)
     *
     * If any saved values don't match (possibly overridden), abandon the given state and return false.
     *
     * @this {LED}
     * @param {Array} state
     * @returns {boolean}
     */
    loadState(state)
    {
        let colorOn = state.shift();
        let colorBackground = state.shift();
        let buffer = state.shift();
        if (colorOn == this.colorOn && colorBackground == this.colorBackground && buffer && buffer.length == this.buffer.length) {
            this.buffer = buffer;
            /**
             * Loop over all the buffer colors to fix a legacy problem (ie, before we started storing null for colorTransparent)
             */
            for (let i = 0; i <= this.buffer.length - this.nBufferInc; i += this.nBufferInc) {
                if (this.buffer[i+1] == this.colorTransparent) this.buffer[i+1] = null;
            }
            this.drawBuffer(true);
            return true;
        }
        return false;
    }

    /**
     * parseRGBValues(color, rgb)
     *
     * @this {LED}
     * @param {string} color
     * @param {Array.<number>} rgb
     * @returns {boolean}
     */
    parseRGBValues(color, rgb)
    {
        let base = 16;
        let match = color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
        if (!match) {
            base = 10;
            match = color.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,?\s*(\d+|)\)$/i);
        }
        if (match) {
            let i;
            for (i = 1; i < match.length; i++) {
                rgb[i-1] = Number.parseInt(match[i], base);
            }
            rgb.length = i-1;
            return true;
        }
        return false;
    }

    /**
     * saveState(state)
     *
     * @this {LED}
     * @param {Array} state
     */
    saveState(state)
    {
        if (this.buffer) {
            state.push(this.colorOn);
            state.push(this.colorBackground);
            state.push(this.buffer);
        }
    }

    /**
     * setContainerStyle(sAttr, sValue)
     *
     * @this {LED}
     * @param {string} sAttr
     * @param {string} sValue
     */
    setContainerStyle(sAttr, sValue)
    {
        if (this.container) this.container.style[sAttr] = sValue;
    }

    /**
     * setLEDColor(col, row, color)
     *
     * @this {LED}
     * @param {number} col
     * @param {number} row
     * @param {string} [color]
     * @returns {boolean|null} (true if this call modified the LED color, false if not, null if error)
     */
    setLEDColor(col, row, color)
    {
        let fModified = null;
        if (row >= 0 && row < this.rows && col >= 0 && col < this.cols) {
            fModified = false;
            let colorNew = color || this.colorOn;
            if (colorNew == this.colorTransparent) colorNew = null;
            let i = (row * this.cols + col) * this.nBufferInc;
            if (this.buffer[i+1] !== colorNew) {
                this.buffer[i+1] = colorNew;
                if (!colorNew) this.buffer[i] = LED.STATE.OFF;  // transparent LEDs are automatically turned off
                this.buffer[i+3] |= LED.FLAGS.MODIFIED;
                this.fBufferModified = fModified = true;
            }
            this.iBufferRecent = i;
            this.fBufferTickled = true;
        }
        return fModified;
    }

    /**
     * setLEDCounts(col, row, counts)
     *
     * @this {LED}
     * @param {number} col
     * @param {number} row
     * @param {Array.<number>} counts
     * @returns {boolean|null} (true if this call modified the LED color, false if not, null if error)
     */
    setLEDCounts(col, row, counts)
    {
        let fModified = null;
        if (row >= 0 && row < this.rows && col >= 0 && col < this.cols) {
            fModified = false;
            let i = (row * this.cols + col) * this.nBufferInc;
            let bits = 0;
            if (this.buffer[i+1]) {                             // only non-transparent LEDs are allowed to set counters
                for (let c = 0; c < counts.length; c++) {
                    bits = (bits << 4) | (counts[c] & 0xf);
                }
            }
            if (this.buffer[i+2] !== bits) {
                this.buffer[i+2] = bits;
                this.buffer[i+3] |= LED.FLAGS.MODIFIED;
                this.fBufferModified = fModified = true;
            }
            this.iBufferRecent = i;
            this.fBufferTickled = true;
        }
        return fModified;
    }

    /**
     * setLEDCountsPacked(col, row, counts)
     *
     * @this {LED}
     * @param {number} col
     * @param {number} row
     * @param {number} counts
     * @returns {boolean|null} (true if this call modified the LED state, false if not, null if error)
     */
    setLEDCountsPacked(col, row, counts)
    {
        let i = (row * this.cols + col) * this.nBufferInc;
        if (i <= this.buffer.length - this.nBufferInc) {
            if (this.buffer[i+2] != counts) {
                this.buffer[i+2] = counts;
                return true;
            }
            return false;
        }
        return null;
    }

    /**
     * setLEDState(col, row, state, flags)
     *
     * For LED.TYPE.ROUND or LED.TYPE.SQUARE, the state parameter should be LED.STATE.OFF or LED.STATE.ON.
     *
     * @this {LED}
     * @param {number} col
     * @param {number} row
     * @param {string|number} state (new state for the specified cell)
     * @param {number} [flags]
     * @returns {boolean} (true if this call modified the LED state, false if not)
     */
    setLEDState(col, row, state, flags = 0)
    {
        let fModified = false;
        let flagsSet = flags & LED.FLAGS.SET;
        let i = (row * this.cols + col) * this.nBufferInc;
        if (i <= this.buffer.length - this.nBufferInc) {
            if (this.buffer[i] !== state || (this.buffer[i+3] & LED.FLAGS.SET) !== flagsSet) {
                this.buffer[i] = state;
                this.buffer[i+3] = (this.buffer[i+3] & ~LED.FLAGS.SET) | flagsSet | LED.FLAGS.MODIFIED;
                this.fBufferModified = fModified = true;
            }
            this.iBufferRecent = i;
            this.fBufferTickled = true;
            this.nShiftedLeft = 0;
        }
        return fModified;
    }

    /**
     * swapBuffers()
     *
     * @this {LED}
     */
    swapBuffers()
    {
        let buffer = this.buffer;
        this.buffer = this.bufferClone;
        this.bufferClone = buffer;
        this.fBufferModified = true;
    }
}

LED.TYPE = {
    SMALL:      0,      // a smaller, more efficient (round) LED for large grids
    ROUND:      1,      // a single (round) LED
    SQUARE:     2,      // a single (square) LED
    DIGIT:      3       // a 7-segment (digit) LED, with optional period as an 8th segment
};

LED.TYPES = {
    "small":    LED.TYPE.SMALL,
    "round":    LED.TYPE.ROUND,
    "square":   LED.TYPE.SQUARE,
    "digit":    LED.TYPE.DIGIT
};

LED.BINDING = {
    CONTAINER:  "container"
};

LED.STATE = {
    OFF:        0,
    ON:         1
};

/**
 * NOTE: Although technically the MODIFIED flag is an internal flag, it may be set explicitly as well;
 * the ROM device uses the setLEDState() flags parameter to set it, in order to trigger highlighting of
 * the most recently active LED.
 */
LED.FLAGS = {
    NONE:       0x00,
    SET:        0x81,   // bits that may be set using the flags parameter of setLEDState()
    PERIOD:     0x01,   // used with DIGIT-type LED to indicate that the period "segment" should be on, too
    MODIFIED:   0x80,   // cell has been modified since the last time it was drawn
};

LED.SHAPES = {
    [LED.TYPE.SMALL]:   [4, 4, 4],
    [LED.TYPE.ROUND]:   [16, 16, 14],
    [LED.TYPE.SQUARE]:  [2, 2, 28, 28]
};

LED.SIZES = [
    [8,   8],           // LED.TYPE.SMALL
    [32,  32],          // LED.TYPE.ROUND
    [32,  32],          // LED.TYPE.SQUARE
    [96, 128]           // LED.TYPE.DIGIT
];

/**
 * The segments are arranged roughly as follows, in a 96x128 grid:
 *
 *      AAAA
 *     F    B
 *     F    B
 *      GGGG
 *     E    C
 *     E    C
 *      DDDD P
 *
 * The following arrays specify pairs of moveTo()/lineTo() coordinates, used by drawGridSegment().  They all
 * assume the hard-coded width and height in LED.SIZES[LED.TYPE.DIGIT] specified above.  If there is a triplet
 * instead of one or more pairs (eg, the 'P' or period segment), then the coordinates are treated as arc()
 * parameters.
 */
LED.SEGMENTS = {
    'A':        [30,   8,  79,   8,  67,  19,  37,  19],
    'B':        [83,  10,  77,  52,  67,  46,  70,  22],
    'C':        [77,  59,  71, 100,  61,  89,  64,  64],
    'D':        [28,  91,  58,  91,  69, 104,  15, 104],
    'E':        [18,  59,  28,  64,  25,  88,  12, 100],
    'F':        [24,  10,  34,  21,  31,  47,  18,  52],
    'G':        [24,  56,  34,  50,  60,  50,  71,  56,  61,  61,  33,  61],
    'P':        [80, 102,  8]
};

/**
 * Segmented symbols are formed with the following segments.
 */
LED.SYMBOL_SEGMENTS = {
    ' ':        [],
    '0':        ['A','B','C','D','E','F'],
    '1':        ['B','C'],
    '2':        ['A','B','D','E','G'],
    '3':        ['A','B','C','D','G'],
    '4':        ['B','C','F','G'],
    '5':        ['A','C','D','F','G'],
    '6':        ['A','C','D','E','F','G'],
    '7':        ['A','B','C'],
    '8':        ['A','B','C','D','E','F','G'],
    '9':        ['A','B','C','D','F','G'],
    'A':        ['A','B','C','E','F','G'],
    'B':        ['C','D','E','F','G'],      // NOTE: this shape is a lower-case 'b', to make 'B' must be distinguishable from '8'
    'C':        ['A','D','E','F'],
    'D':        ['B','C','D','E','G'],      // NOTE: this shape is a lower-case 'd', to make 'D' must be distinguishable from '0'
    'E':        ['A','D','E','F','G'],
    'F':        ['A','E','F','G'],
    '-':        ['G'],
    '.':        ['P']
};

LED.CLASSES["LED"] = LED;

/**
 * @copyright https://www.pcjs.org/modules/v3/time.js (C) 2012-2025 Jeff Parsons
 */

/** @typedef {{ id: string, callBack: function(), msAuto: number, nCyclesLeft: number }} */
let Timer;

/** @typedef {{ cyclesMinimum: (number|undefined), cyclesMaximum: (number|undefined), cyclesPerSecond: (number|undefined), updatesPerSecond: (number|undefined), timeLock: (boolean|undefined) }} */
let TimeConfig;

/**
 * @class {Time}
 * @unrestricted
 * @property {TimeConfig} config
 * @property {number} nCyclesMinimum
 * @property {number} nCyclesMaximum
 * @property {number} nCyclesPerSecond
 * @property {number} nUpdatesPerSecond
 * @property {boolean} timeLock
 */
class Time extends Device {
    /**
     * Time(idMachine, idDevice, config)
     *
     * Sample config:
     *
     *      "clock": {
     *        "class": "Time",
     *        "cyclesPerSecond": 650000,
     *        "bindings": {
     *          "run": "runTI57",
     *          "speed": "speedTI57",
     *          "step": "stepTI57"
     *        },
     *        "overrides": ["cyclesPerSecond","updatesPerSecond"]
     *      }
     *
     * @this {Time}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {TimeConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        this.nCyclesMinimum = this.getDefaultNumber('cyclesMinimum', 100000);
        this.nCyclesMaximum = this.getDefaultNumber('cyclesMaximum', 1000000000);
        this.nCyclesPerSecond = this.getBounded(this.getDefaultNumber('cyclesPerSecond', 1000000), this.nCyclesMinimum, this.nCyclesMaximum);
        this.nFramesPerSecond = 60;
        this.msFrame = 0;
        this.msFrameDefault = 1000 / this.nFramesPerSecond;
        this.nUpdatesPerSecond = this.getDefaultNumber('updatesPerSecond', 2) || 2;
        this.msUpdate = 1000 / this.nUpdatesPerSecond;
        this.msLastUpdate = 0;
        this.timeLock = this.getDefaultBoolean('timeLock', true);

        this.nCurrentMultiplier = this.mhzCurrent = 0;
        this.nBaseMultiplier = this.nTargetMultiplier = 1;
        this.mhzBase = this.mhzTarget = (this.nCyclesPerSecond / 10000) / 100;
        this.aAnimations = [];
        this.aClocks = [];
        this.aTimers = [];
        this.aUpdates = [];
        this.fPowered = this.fRunning = this.fYield = this.fThrottling = false;
        this.nStepping = 0;
        this.idStepTimeout = this.idAnimationTimeout = 0;

        /**
         * I avoid hard-coding the use of requestAnimationFrame() and cancelAnimationFrame() so that
         * we can still use the older setTimeout() and clearTimeout() functions if need be (or want be).
         * However, I've done away with all the old code that used to calculate the optimal setTimeout()
         * delay; in either case, run() is simply called N frames/second, and it's up to calcSpeed() to
         * calculate the appropriate number of cycles to execute per "frame" (nCyclesDepositPerFrame).
         */
        let sRequestAnimationTimeout = this.findProperty(window, 'requestAnimationFrame');
        let timeout;
        if (!sRequestAnimationTimeout) {
            sRequestAnimationTimeout = 'setTimeout';
            timeout = this.msFrameDefault;
        }
        this.requestAnimationTimeout = window[sRequestAnimationTimeout].bind(window, this.run.bind(this), timeout);
        let sCancelAnimationTimeout = this.findProperty(window, 'cancelAnimationFrame') || 'clearTimeout';
        this.cancelAnimationTimeout = window[sCancelAnimationTimeout].bind(window);

        /**
         * Assorted bookkeeping variables.  A running machine actually performs one long series of "runs"
         * (aka animation frames), each followed by a yield back to the browser.  And each "run" consists of
         * one or more "bursts"; the size and number of "bursts" depends on how often the machine's timers
         * need to fire during the "run".
         */
        this.nCyclesLife = 0;           // number of cycles executed for the lifetime of the machine
        this.nCyclesRun = 0;            // number of cycles executed since the machine was last stopped
        this.nCyclesBurst = 0;          // number of cycles requested for the next "burst"
        this.nCyclesRemain = 0;         // number of cycles remaining in the next "burst"

        /**
         * Now that clocking is driven exclusively by animation frames, calcSpeed() calculates how many
         * cycles each animation frame should "deposit" in our cycle bank:
         *
         *      this.nCyclesDepositPerFrame = (nCyclesPerSecond / nFramesPerSecond) + 0.00000001;
         *
         * After that amount is added to our "balance" (this.nCyclesDeposited), we make a "withdrawal"
         * whenever the balance is >= 1.0 and call all our clocking functions with the maximum number of
         * cycles we were able to withdraw.
         *
         * calcSpeed() also adds a tiny amount of "interest" to each "deposit" (0.00000001); otherwise you
         * can end up in situations where the deposit amount is, say, 0.2499999 instead of 0.25, and four
         * such deposits would fall short of a 1-cycle withdrawal.
         */
        this.nCyclesDeposited = this.nCyclesDepositPerFrame = 0;

        /**
         * Reset speed to the base multiplier and perform an initial calcSpeed().
         */
        this.resetSpeed();
    }

    /**
     * addAnimation(callBack)
     *
     * @this {Time}
     * @param {function(number, number)} callBack
     */
    addAnimation(callBack)
    {
        this.aAnimations.push(callBack);
    }

    /**
     * addBinding(binding, element)
     *
     * @this {Time}
     * @param {string} binding
     * @param {Element} element
     */
    addBinding(binding, element)
    {
        let time = this, elementInput;

        switch(binding) {

        case Time.BINDING.RUN:
            element.onclick = function onClickRun() {
                time.onRun();
            };
            break;

        case Time.BINDING.SETSPEED:
            element.onclick = function onClickSetSpeed() {
                time.onSetSpeed();
            };
            break;

        case Time.BINDING.STEP:
            element.onclick = function onClickStep() {
                time.onStep();
            };
            break;

        case Time.BINDING.THROTTLE:
            elementInput = /** @type {HTMLInputElement} */ (element);
            elementInput.addEventListener("mousedown", function onThrottleStart() {
                time.fThrottling = true;
            });
            elementInput.addEventListener("mouseup", function onThrottleStop() {
                time.setSpeedThrottle();
                time.fThrottling = false;
            });
            elementInput.addEventListener("mousemove", function onThrottleChange() {
                if (time.fThrottling) {
                    time.setSpeedThrottle();
                }
            });
            elementInput.addEventListener("change", function onThrottleChange() {
                time.fThrottling = true;
                time.setSpeedThrottle();
                time.fThrottling = false;
            });
            break;
        }
        super.addBinding(binding, element);
    }

    /**
     * addClock(clock)
     *
     * Adds a clocked device, which must support the following interfaces:
     *
     *      startClock(nCycles)
     *      stopClock()
     *      getClock()
     *
     * @this {Time}
     * @param {Device} clock
     */
    addClock(clock)
    {
        this.aClocks.push(clock);
    }

    /**
     * addTimer(id, callBack, msAuto)
     *
     * Devices that want to have timers that fire after some number of milliseconds call addTimer() to create
     * the timer, and then setTimer() when they want to arm it.  Alternatively, they can specify an automatic
     * timeout value (in milliseconds) to have the timer fire automatically at regular intervals.  There is
     * currently no removeTimer() because these are generally used for the entire lifetime of a device.
     *
     * A timer is initially dormant; dormant timers have a cycle count of -1 (although any negative number will
     * suffice) and active timers have a non-negative cycle count.
     *
     * @this {Time}
     * @param {string} id
     * @param {function()} callBack
     * @param {number} [msAuto] (if set, enables automatic setTimer calls)
     * @returns {number} timer index (1-based)
     */
    addTimer(id, callBack, msAuto = -1)
    {
        let nCyclesLeft = -1;
        let iTimer = this.aTimers.length + 1;
        this.aTimers.push({id, callBack, msAuto, nCyclesLeft});
        if (msAuto >= 0) this.setTimer(iTimer, msAuto);
        return iTimer;
    }

    /**
     * addUpdate(device)
     *
     * Adds a device to the update list.  Each device's onUpdate() function is then called from update(),
     * either as the result of a periodic update, single-step updates from step(), or transitional updates
     * from start() and stop().
     *
     * @this {Time}
     * @param {Device} device
     */
    addUpdate(device)
    {

        this.aUpdates.push(device);
    }

    /**
     * calcSpeed(nCycles, msElapsed, msFrame)
     *
     * @this {Time}
     * @param {number} [nCycles] (aggregate number of cycles since we first began running)
     * @param {number} [msElapsed] (aggregate number of milliseconds since we first began running)
     * @param {number} [msFrame] (number of milliseconds for the last frame only; avoid exceeding msFrameDefault)
     * @returns {number} (start time adjustment, if any)
     */
    calcSpeed(nCycles, msElapsed, msFrame)
    {
        let msAdjust = 0;
        let mhz = this.mhzTarget;
        let nCyclesPerSecond = mhz * 1000000;
        if (nCycles && msElapsed) {
            mhz = (nCycles / (msElapsed * 10)) / 100;
            this.printf(Device.MESSAGE.TIME, "calcSpeed(%d cycles, %5.3fms): %5.3fMhz\n", nCycles, msElapsed, mhz);
            if (msFrame > this.msFrameDefault) {
                if (this.nTargetMultiplier > 1) {
                    /**
                     * Alternatively, we could call setSpeed(this.nTargetMultiplier >> 1) at this point, but the
                     * advantages of quietly reducing the target multiplier here are: 1) it will still slow us down,
                     * and 2) allow the next attempt to increase speed via setSpeed() to detect that we didn't
                     * reach 90% of our original target and revert back to the base multiplier.
                     */
                    this.nTargetMultiplier >>= 1;
                    this.printf(Device.MESSAGE.WARN, "warning: frame time (%5.3fms) exceeded maximum (%5.3fms), target multiplier now %d\n", msFrame, this.msFrameDefault, this.nTargetMultiplier);
                }
                /**
                 * If we (potentially) took too long on this last run, we pass that time back as an adjustment,
                 * which runStop() can add to msStartThisRun, thereby reducing the likelihood that the next runStart()
                 * will (potentially) misinterpret the excessive time as browser throttling.
                 */
                msAdjust = msFrame;
            }
        }
        this.mhzCurrent = mhz;
        this.nCurrentMultiplier = mhz / this.mhzBase;
        /**
         * If we're running twice as fast as the base speed (say, 4Mhz instead of 2Mhz), then the current multiplier
         * will be 2; similarly, if we're running at half the base speed (say, 1Mhz instead of 2Mhz), the current
         * multiplier will be 0.5.  And if all we needed to do was converge on the base speed, we would simply divide
         * cycles per second by the current multiplier; but since it's the *target* speed we're aiming for, the divisor
         * must be the ratio of the current and target multipliers.
         *
         * Note that if the machine's default speed has not been altered, the target multiplier will 1, and the divisor
         * will effectively be the current multiplier.
         *
         * NOTE: As the constructor mentions, the "0.00000001" is a tiny bit of "interest" that we want to add to each
         * deposit.  See that function for more details.
         */
        let nDivisor = this.nCurrentMultiplier / this.nTargetMultiplier;
        this.nCyclesDepositPerFrame = (nCyclesPerSecond / nDivisor / this.nFramesPerSecond) + 0.00000001;
        this.printf(Device.MESSAGE.TIME, "nCyclesDepositPerFrame(%5.3f) = nCyclesPerSecond(%d) / nDivisor(%5.3f) / nFramesPerSecond(%d)\n", this.nCyclesDepositPerFrame, nCyclesPerSecond, nDivisor, this.nFramesPerSecond);
        return msAdjust;
    }

    /**
     * doBurst(nCycles)
     *
     * @this {Time}
     * @param {number} nCycles
     * @returns {number} (number of cycles actually executed)
     */
    doBurst(nCycles)
    {
        this.nCyclesBurst = this.nCyclesRemain = nCycles;
        if (!this.aClocks.length) {
            this.nCyclesRemain = 0;
            return this.nCyclesBurst;
        }
        let iClock = 0;
        while (this.nCyclesRemain > 0) {
            if (iClock < this.aClocks.length) {
                let clock = this.aClocks[iClock++];
                nCycles = clock.startClock.call(clock, nCycles) || 1;
            } else {
                iClock = nCycles = 0;
            }
            this.nCyclesRemain -= nCycles;
        }
        return this.nCyclesBurst - this.nCyclesRemain;
    }

    /**
     * doOutside(fn)
     *
     * Use this function to perform any work outside of normal time (eg, DOM updates),
     * to prevent that work from disrupting our speed calculations.
     *
     * @this {Time}
     * @param {function()} fn (should return true only if the function actually performed any work)
     * @returns {boolean}
     */
    doOutside(fn)
    {
        let msStart = Date.now();
        if (fn()) {
            let msStop = Date.now();
            this.msOutsideRun += msStop - msStart;
            return true;
        }
        return false;
    }

    /**
     * endBurst(nCycles)
     *
     * @this {Time}
     * @param {number} [nCycles]
     * @returns {number} (number of cycles executed in burst)
     */
    endBurst(nCycles = this.nCyclesBurst - this.nCyclesRemain)
    {
        if (!this.fRunning) {
            if (this.nCyclesDeposited) {
                for (let iClock = 0; iClock < this.aClocks.length; iClock++) {
                    let clock = this.aClocks[iClock];
                    clock.stopClock.call(clock);
                }
            }
            this.nCyclesDeposited = nCycles;
        }
        this.nCyclesDeposited -= nCycles;
        if (this.nCyclesDeposited < 1) {
            this.yield();
        }
        this.nCyclesLife += nCycles;
        this.nCyclesRun += nCycles;
        this.nCyclesBurst = this.nCyclesRemain = 0;
        if (!this.fRunning) this.nCyclesRun = 0;
        return nCycles;
    }

    /**
     * getCycles()
     *
     * Returns the number of cycles executed so far.
     *
     * @this {Time}
     * @returns {number}
     */
    getCycles()
    {
        let nCyclesClocked = 0;
        for (let iClock = 0; iClock < this.aClocks.length; iClock++) {
            let clock = this.aClocks[iClock];
            nCyclesClocked += clock.getClock.call(clock);
        }
        return this.nCyclesLife + (this.nCyclesBurst - this.nCyclesRemain) + nCyclesClocked;
    }

    /**
     * getCyclesPerMS(ms)
     *
     * If no time period is specified, returns the current number of cycles per second (ie, 1000ms).
     *
     * @this {Time}
     * @param {number} ms (default is 1000)
     * @returns {number} number of corresponding cycles
     */
    getCyclesPerMS(ms = 1000)
    {
        return Math.ceil((this.nCyclesPerSecond * (this.timeLock? this.nBaseMultiplier : this.nCurrentMultiplier)) / 1000 * ms);
    }

    /**
     * getCyclesPerRun(fnMinCycles)
     *
     * Returns the number of cycles to execute for the next run.
     *
     * @this {Time}
     * @param {number} [nMinCycles]
     * @returns {number} (the maximum number of cycles we should execute in the next burst)
     */
    getCyclesPerRun(nMinCycles = 0)
    {
        let nCycles;
        if (nMinCycles) {
            nCycles = nMinCycles;
            this.nCyclesDeposited += nMinCycles;
        } else {
            nCycles = this.nCyclesDeposited;
            if (nCycles < 1) {
                nCycles = (this.nCyclesDeposited += this.nCyclesDepositPerFrame);
            }
            if (nCycles < 0) {
                this.printf(Device.MESSAGE.WARN, "warning: cycle count dropped below zero: %f\n", nCycles);
                nCycles = this.nCyclesDeposited = 0;
            }
            nCycles |= 0;
            for (let iTimer = this.aTimers.length; iTimer > 0; iTimer--) {
                let timer = this.aTimers[iTimer-1];

                if (timer.nCyclesLeft < 0) continue;
                if (nCycles > timer.nCyclesLeft) {
                    nCycles = timer.nCyclesLeft;
                }
            }
        }
        return nCycles;
    }

    /**
     * getSpeed(mhz)
     *
     * @this {Time}
     * @param {number} mhz
     * @returns {string} the given speed, as a formatted string
     */
    getSpeed(mhz)
    {
        let s;
        if (mhz >= 1) {
            s = mhz.toFixed(2) + "Mhz";
        } else {
            let hz = Math.round(mhz * 1000000);
            if (hz <= 999) {
                s = hz + "Hz";
            } else {
                s = Math.ceil(hz / 1000) + "Khz";
            }
        }
        return s;
    }

    /**
     * getSpeedCurrent()
     *
     * @this {Time}
     * @returns {string} the current speed, as a formatted string
     */
    getSpeedCurrent()
    {
        this.printf(Device.MESSAGE.TIME, "getSpeedCurrent(%5.3fhz)\n", this.mhzCurrent * 1000000);
        return (this.fRunning && this.mhzCurrent)? this.getSpeed(this.mhzCurrent) : "Stopped";
    }

    /**
     * getSpeedTarget()
     *
     * @this {Time}
     * @returns {string} the target speed, as a formatted string
     */
    getSpeedTarget()
    {
        return this.getSpeed(this.mhzTarget);
    }

    /**
     * isPowered()
     *
     * For internal use only; use this.machine.isPowered() for the entire machine's status.
     *
     * @this {Time}
     * @returns {boolean} true if this device is powered, false if not
     */
    isPowered()
    {
        if (!this.fPowered) {
            this.println("not powered");
            return false;
        }
        return true;
    }

    /**
     * isRunning()
     *
     * @this {Time}
     * @returns {boolean}
     */
    isRunning()
    {
        return this.fRunning;
    }

    /**
     * isTimerSet(iTimer)
     *
     * NOTE: Even if the timer is armed, we return false if the clock is currently stopped;
     * in that sense, perhaps this function should be named isTimerArmedAndWillItFireOnTime().
     *
     * @this {Time}
     * @param {number} iTimer
     * @returns {boolean}
     */
    isTimerSet(iTimer)
    {
        if (this.fRunning) {
            if (iTimer > 0 && iTimer <= this.aTimers.length) {
                let timer = this.aTimers[iTimer - 1];
                return (timer.nCyclesLeft >= 0);
            }
        }
        return false;
    }

    /**
     * notifyTimers(nCycles)
     *
     * Used by run() to reduce all active timer countdown values by the number of cycles just executed;
     * this is the function that actually "fires" any timer(s) whose countdown has reached (or dropped below)
     * zero, invoking their callback function.
     *
     * @this {Time}
     * @param {number} nCycles (number of cycles actually executed)
     */
    notifyTimers(nCycles)
    {
        if (nCycles >= 1) {
            for (let iTimer = this.aTimers.length; iTimer > 0; iTimer--) {
                let timer = this.aTimers[iTimer-1];

                if (timer.nCyclesLeft < 0) continue;
                timer.nCyclesLeft -= nCycles;
                if (timer.nCyclesLeft <= 0) {
                    timer.nCyclesLeft = -1; // zero is technically an "active" value, so ensure the timer is dormant now
                    timer.callBack();       // safe to invoke the callback function now
                    if (timer.msAuto >= 0) {
                        this.setTimer(iTimer, timer.msAuto);
                    }
                }
            }
        }
    }

    /**
     * onPower(on)
     *
     * Called by the Machine device to provide notification of a power event.
     *
     * @this {Time}
     * @param {boolean} on (true to power on, false to power off)
     */
    onPower(on)
    {
        this.fPowered = on;
        /**
         * This is also a good time to get access to the Debugger, if any, and add our dump extensions.
         */
        if (this.dbg === undefined) {
            this.dbg = /** @type {Debugger} */ (this.findDeviceByClass("Debugger", false));
            if (this.dbg) this.dbg.addDumper(this, "time", "dump time state", this.dumpTime);
        }
    }

    /**
     * onRun()
     *
     * This handles the "run" button, if any, attached to the Time device.
     *
     * Note that this serves a different purpose than the "power" button that's managed by the Input device,
     * because toggling power also requires resetting the program counter prior to start() OR clearing the display
     * after stop().
     *
     * @this {Time}
     */
    onRun()
    {
        if (this.isPowered()) {
            if (this.fRunning) {
                this.stop();
            } else {
                this.start();
            }
        }
    }

    /**
     * onSetSpeed()
     *
     * This handles the "setSpeed" button, if any, attached to the Time device.
     *
     * @this {Time}
     */
    onSetSpeed()
    {
        this.setSpeed(this.nTargetMultiplier << 1);
        this.updateSpeed(this.getSpeedTarget());
    }

    /**
     * onStep(nRepeat)
     *
     * This handles the "step" button, if any, attached to the Time device.
     *
     * @this {Time}
     * @param {number} [nRepeat]
     */
    onStep(nRepeat)
    {
        if (this.isPowered()) {
            if (!this.fRunning) {
                if (this.nStepping) {
                    this.stop();
                } else {
                    this.step(nRepeat);
                }
            } else {
                this.println("already running");
            }
        }
    }

    /**
     * resetSpeed()
     *
     * @this {Time}
     */
    resetSpeed()
    {
        this.nCyclesRun = this.nCyclesBurst = this.nCyclesRemain = 0;
        if (!this.setSpeedThrottle()) this.setSpeed(this.nBaseMultiplier);
    }

    /**
     * resetTimers()
     *
     * When the target speed multiplier is altered, it's a good idea to run through all the timers that
     * have a fixed millisecond period and re-arm them, because the timers are using cycle counts that were
     * based on a previous multiplier.
     *
     * @this {Time}
     */
    resetTimers()
    {
        for (let iTimer = this.aTimers.length; iTimer > 0; iTimer--) {
            let timer = this.aTimers[iTimer-1];
            if (timer.msAuto >= 0) this.setTimer(iTimer, timer.msAuto, true);
        }
    }

    /**
     * run(t)
     *
     * This is the callback function we supply to requestAnimationTimeout().  The callback has a single
     * DOMHighResTimeStamp argument, which indicates the current time; see performance.now() for details.
     *
     * If we have implemented requestAnimationTimeout() with setTimeout() instead of requestAnimationFrame(),
     * the callback's argument will be undefined, in which case we supply a millisecond-granular fallback;
     * see Date.now() for details.
     *
     * @this {Time}
     * @param {number} [t] (relative time in milliseconds)
     */
    run(t = Date.now())
    {
        this.idAnimationTimeout = 0;
        if (this.fRunning) {
            if (this.msFrame) {
                /*
                 * Make ABSOLUTELY certain that nFramesPerSecond can never become a ridiculous value, which means
                 * making sure msDelta is never zero (or even close to it).  If that ever happens, then we choose a
                 * delta (16.67ms) that will revert us to a conventional 60 frames/second.
                 */
                let msDelta = t - this.msFrame;
                if (msDelta < 1) msDelta = 16.67;
                this.nFramesPerSecond = 1000 / msDelta;
            }
            this.msFrame = t;
            this.runStart();
            this.runCycles();
            this.runStop();
            for (let i = 0; i < this.aAnimations.length; i++) {
                this.aAnimations[i](this.msFrame, this.nFramesPerSecond);
            }
            this.idAnimationTimeout = this.requestAnimationTimeout();
        }
    }

    /**
     * runCycles()
     *
     * @this {Time}
     */
    runCycles()
    {
        try {
            this.fYield = false;
            do {
                /**
                 * Execute a normal burst and then update all timers.
                 */
                this.notifyTimers(this.endBurst(this.doBurst(this.getCyclesPerRun())));
            } while (this.fRunning && !this.fYield);
        }
        catch (err) {
            this.println(err.message);
            this.stop();
        }
    }

    /**
     * runStart()
     *
     * @this {Time}
     */
    runStart()
    {
        let msStartThisRun = Date.now();
        /**
         * If there was no interruption between the last run and this run (ie, msEndRun wasn't zeroed by
         * intervening setSpeed() or stop()/start() calls), and there was an unusual delay between the two
         * runs, then we assume that "browser throttling" is occurring due to visibility or redraw issues
         * (eg, the browser window moved off-screen, the window is being actively reized, the user switched
         * tabs, etc).
         *
         * While that's good for overall system performance, it screws up our effective speed calculations,
         * so we must try to estimate and incorporate that delay into our overall run time.
         */
        if (this.msEndRun) {
            /**
             * In a perfect world, the difference between the start of this run and the start of the last run
             * (which is still in this.msStartThisRun since we haven't updated it yet) would be msFrameDefault;
             * if it's more than twice that, we assume the browser is either throttling us or is simply too
             * busy to call us at the rate of msFrameDefault.
             */
            let msDeltaRun = msStartThisRun - this.msStartThisRun - this.msFrameDefault;
            if (msDeltaRun > this.msFrameDefault) {
                this.msStartRun += msDeltaRun;
                this.printf(Device.MESSAGE.WARN, "warning: browser throttling detected, compensating by %5.3fms\n", msDeltaRun);
            }
        }
        this.msStartThisRun = msStartThisRun;
        if (!this.msStartRun) this.msStartRun = msStartThisRun;
        this.msOutsideRun = 0;
    }

    /**
     * runStop()
     *
     * @this {Time}
     */
    runStop()
    {
        this.msEndRun = Date.now();
        if (this.msOutsideRun) {
            this.msStartRun += this.msOutsideRun;
            this.msStartThisRun += this.msOutsideRun;
        }
        this.msStartThisRun += this.calcSpeed(this.nCyclesRun, this.msEndRun - this.msStartRun, this.msEndRun - this.msStartThisRun);
        if (this.msEndRun - this.msLastUpdate >= this.msUpdate) {
            this.update();
        }
    }

    /**
     * setSpeed(nMultiplier)
     *
     * Whenever the speed is changed, the running cycle count and corresponding start time must be reset,
     * so that the next effective speed calculation obtains sensible results.
     *
     * @this {Time}
     * @param {number} [nMultiplier] is the new proposed multiplier (reverts to default if target was too high)
     */
    setSpeed(nMultiplier)
    {
        if (nMultiplier !== undefined) {
            /**
             * If the multiplier is invalid, or we haven't reached 90% of the current target speed,
             * revert to the base multiplier.
             */
            if (nMultiplier < 1 || !this.fThrottling && this.mhzCurrent > 0 && this.mhzCurrent < this.mhzTarget * 0.9) {
                nMultiplier = this.nBaseMultiplier;
            }
            this.nTargetMultiplier = nMultiplier;
            let mhzTarget = this.mhzBase * this.nTargetMultiplier;
            if (this.mhzTarget != mhzTarget) {
                this.mhzTarget = mhzTarget;
                this.updateSpeed(this.getSpeedTarget());
            }
        }
        this.msStartRun = this.msEndRun = 0;
        this.nCyclesDeposited = this.nCyclesRun = 0;
        this.calcSpeed();       // calculate new current cycle multiplier and cycle deposit amount
        this.resetTimers();     // and then update all the fixed-period timers using the current cycle multiplier
    }

    /**
     * setSpeedThrottle()
     *
     * This handles speed adjustments requested by the throttling slider.
     *
     * @this {Time}
     * @returns {boolean} (true if a throttle exists, false if not)
     */
    setSpeedThrottle()
    {
        /**
         * We're not going to assume any direct relationship between the slider's min/max/value
         * and our own nCyclesMinimum/nCyclesMaximum/nCyclesPerSecond.  We're just going to calculate
         * a new target nCyclesPerSecond that is proportional, and then convert that to a speed multiplier.
         */
        let elementInput = this.bindings[Time.BINDING.THROTTLE];
        if (elementInput) {
            let ratio = (elementInput.value - elementInput.min) / (elementInput.max - elementInput.min);
            let nCycles = Math.floor((this.nCyclesMaximum - this.nCyclesMinimum) * ratio + this.nCyclesMinimum);
            let nMultiplier = (nCycles / this.nCyclesPerSecond)|0;

            this.setSpeed(nMultiplier);
            return true;
        }
        return false;
    }

    /**
     * setTimer(iTimer, ms, fReset)
     *
     * Using the timer index from a previous addTimer() call, this sets that timer to fire
     * after the specified number of milliseconds.
     *
     * @this {Time}
     * @param {number} iTimer
     * @param {number} ms (converted into a cycle countdown internally)
     * @param {boolean} [fReset] (true if the timer should be reset even if already armed)
     * @returns {number} (number of cycles used to arm timer, or -1 if error)
     */
    setTimer(iTimer, ms, fReset)
    {
        let nCycles = -1;
        if (iTimer > 0 && iTimer <= this.aTimers.length) {
            let timer = this.aTimers[iTimer-1];
            if (fReset || timer.nCyclesLeft < 0) {
                nCycles = this.getCyclesPerMS(ms);
                /**
                 * If we're currently executing a burst of cycles, the number of cycles executed in the burst
                 * so far must NOT be charged against the cycle timeout we're about to set.  The simplest way to
                 * resolve that is to immediately call endBurst() and bias the cycle timeout by the number of
                 * cycles that the burst executed.
                 */
                if (this.fRunning) {
                    nCycles += this.endBurst();
                }
                timer.nCyclesLeft = nCycles;
            }
        }
        return nCycles;
    }

    /**
     * start()
     *
     * @this {Time}
     * @returns {boolean}
     */
    start()
    {
        if (this.fRunning || this.nStepping) {
            return false;
        }
        this.fRunning = true;
        this.msStartRun = this.msEndRun = 0;
        this.update(true);

        this.idAnimationTimeout = this.requestAnimationTimeout();
        return true;
    }

    /**
     * step(nRepeat)
     *
     * @this {Time}
     * @param {number} [nRepeat]
     * @returns {boolean} true if successful, false if already running
     */
    step(nRepeat = 1)
    {
        if (!this.fRunning) {
            if (nRepeat && !this.nStepping) {
                this.nStepping = nRepeat;
            }
            if (this.nStepping) {
                /**
                 * Execute a minimum-cycle burst and then update all timers.
                 */
                this.nStepping--;
                this.notifyTimers(this.endBurst(this.doBurst(this.getCyclesPerRun(1))));
                this.update(false);
                if (this.nStepping) {
                    let time = this;
                    this.idStepTimeout = setTimeout(function onStepTimeout() {
                        time.step(0);
                    }, 0);
                    return true;
                }
            }
            return true;
        }
        return false;
    }

    /**
     * stop()
     *
     * @this {Time}
     * @returns {boolean} true if successful, false if already stopped
     */
    stop()
    {
        if (this.fRunning) {
            this.fRunning = false;
            this.endBurst();
            if (this.idAnimationTimeout) {
                this.cancelAnimationTimeout(this.idAnimationTimeout);
                this.idAnimationTimeout = 0;
            }
            this.update(true);
            return true;
        }
        if (this.nStepping) {
            this.nStepping = 0;
            this.update(true);
            return true;
        }
        return false;
    }

    /**
     * update(fTransition)
     *
     * Called for periodic updates, single-step updates, and transitional updates from start() and stop().
     *
     * fTransition is set to true by start() and stop() calls, because the machine is transitioning to or from
     * a running state; it is set to false by step() calls, because the machine state changed but it never entered
     * a running state, and it is undefined in all other cases.
     *
     * When we call the update handlers, we set their transition parameter to true for all but periodic updates,
     * because there has been a "transition" in overall state.
     *
     * @this {Time}
     * @param {boolean} [fTransition]
     */
    update(fTransition)
    {
        if (fTransition) {
            this.println(this.fRunning? "started with " + this.getSpeedTarget() + " target" : "stopped");
        }
        this.setBindingText(Time.BINDING.RUN, this.fRunning? "Halt" : "Run");
        this.setBindingText(Time.BINDING.STEP, this.nStepping? "Stop" : "Step");
        if (!this.fThrottling) this.updateSpeed(this.getSpeedCurrent());
        for (let i = 0; i < this.aUpdates.length; i++) {
            let device = this.aUpdates[i];
            device.onUpdate.call(device, fTransition != undefined);
        }
        this.msLastUpdate = Date.now();
        this.yield();
    }

    /**
     * updateSpeed(speed)
     *
     * @this {Time}
     * @param {string} speed
     */
    updateSpeed(speed)
    {
        this.setBindingText(Time.BINDING.SPEED, speed);
        this.setBindingText(Time.BINDING.SETSPEED, speed);
    }

    /**
     * yield()
     *
     * @this {Time}
     */
    yield()
    {
        this.fYield = true;
    }

    /**
     * dumpTime(values)
     *
     * @this {Time}
     * @param {Array.<number>} values (the Debugger passes along any values on the command-line, but we don't use them)
     */
    dumpTime(values)
    {
        let sDump = "";
        sDump += this.sprintf("nCyclesPerSecond: %f\n", this.nCyclesPerSecond);
        sDump += this.sprintf("nUpdatesPerSecond: %f\n", this.nUpdatesPerSecond);
        sDump += this.sprintf("nTargetMultiplier: %f\n", this.nTargetMultiplier);
        sDump += this.sprintf("nCyclesDepositPerFrame: %f\n", this.nCyclesDepositPerFrame);
        return sDump;
    }
}

Time.BINDING = {
    RUN:        "run",
    SETSPEED:   "setSpeed",
    SPEED:      "speed",
    STEP:       "step",
    THROTTLE:   "throttle"
};

Time.CLASSES["Time"] = Time;

/**
 * @copyright https://www.pcjs.org/modules/v3/bus.js (C) 2012-2025 Jeff Parsons
 */

/** @typedef {{ type: string, addrWidth: number, dataWidth: number, blockSize: (number|undefined), littleEndian: (boolean|undefined) }} */
let BusConfig;

/**
 * @class {Bus}
 * @unrestricted
 * @property {BusConfig} config
 * @property {number} type (Bus.TYPE value, converted from config['type'])
 * @property {number} addrWidth
 * @property {number} addrTotal
 * @property {number} addrLimit
 * @property {number} blockSize
 * @property {number} blockTotal
 * @property {number} blockShift
 * @property {number} blockLimit
 * @property {number} dataWidth
 * @property {number} dataLimit
 * @property {number} pairWidth
 * @property {number} pairLimit
 * @property {number} quadWidth
 * @property {number} quadLimit
 * @property {boolean} littleEndian
 * @property {Array.<Memory>} blocks
 * @property {number} nTraps (number of blocks currently being trapped)
 */
class Bus extends Device {
    /**
     * Bus(idMachine, idDevice, config)
     *
     * Sample config:
     *
     *      "bus": {
     *        "class": "Bus",
     *        "type": "static",
     *        "addrWidth": 16,
     *        "dataWidth": 8,
     *        "blockSize": 1024,
     *        "littleEndian": true
     *      }
     *
     * If no blockSize is specified, it defaults to 1024 (1K) for machines with an addrWidth of 16,
     * or 4096 (4K) if addrWidth is greater than 16.
     *
     * @this {Bus}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {BusConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);
        /**
         * Our default type is DYNAMIC for the sake of older device configs (eg, TI-57)
         * which didn't specify a type and need a dynamic bus to ensure that their LED ROM array
         * (if any) gets updated on ROM accesses.
         *
         * Obviously, that can (and should) be controlled by a configuration file that is unique
         * to the device's display requirements, but at the moment, all TI-57 config files have LED
         * ROM array support enabled, whether it's actually used or not.
         */
        this.type = this.config['type'] == "static"? Bus.TYPE.STATIC : Bus.TYPE.DYNAMIC;
        this.addrWidth = this.config['addrWidth'] || 16;
        this.addrTotal = Math.pow(2, this.addrWidth);
        this.addrLimit = (this.addrTotal - 1)|0;
        this.blockSize = this.config['blockSize'] || (this.addrWidth > 16? 4096 : 1024);
        if (this.blockSize > this.addrTotal) this.blockSize = this.addrTotal;
        this.blockTotal = (this.addrTotal / this.blockSize)|0;
        this.blockShift = Math.log2(this.blockSize)|0;
        this.blockLimit = (1 << this.blockShift) - 1;
        this.dataWidth = this.config['dataWidth'] || 8;
        this.dataLimit = Math.pow(2, this.dataWidth) - 1;
        this.pairWidth = this.dataWidth << 1;
        this.pairLimit = Math.pow(2, this.pairWidth) - 1;
        this.quadWidth = this.dataWidth << 2;
        this.quadLimit = Math.pow(2, this.quadWidth) - 1;
        this.littleEndian = this.config['littleEndian'] !== false;
        this.blocks = new Array(this.blockTotal);
        this.nTraps = 0;
        this.nDisableFaults = 0;
        this.fFault = false;
        this.faultHandler = null;
        let block = new Memory(idMachine, idDevice + "[NONE]", {"size": this.blockSize, "bus": this.idDevice});
        for (let addr = 0; addr < this.addrTotal; addr += this.blockSize) {
            this.addBlocks(addr, this.blockSize, Memory.TYPE.NONE, block);
        }
        this.selectInterface(this.type);
    }

    /**
     * addBlocks(addr, size, type, block)
     *
     * Bus interface for other devices to add one or more blocks (eg, RAM or ROM) at a specific starting address.
     * It's an error to add blocks to regions that already contain blocks (other than blocks with TYPE of NONE).
     * There is no attempt to clean up that error (and there is no removeBlocks() function), because it's currently
     * considered a configuration error, but that may change as machines with fancier buses are added.
     *
     * @this {Bus}
     * @param {number} addr is the starting physical address of the request
     * @param {number} size of the request, in bytes
     * @param {number} type is one of the Memory.TYPE constants
     * @param {Memory} [block] (optional preallocated block that must implement the same Memory interfaces that Bus requires)
     * @returns {boolean} (true if successful, false if error)
     */
    addBlocks(addr, size, type, block)
    {
        let addrNext = addr;
        let sizeLeft = size;
        let offset = 0;
        let iBlock = addrNext >>> this.blockShift;
        while (sizeLeft > 0 && iBlock < this.blocks.length) {
            let blockNew;
            let addrBlock = iBlock * this.blockSize;
            let sizeBlock = this.blockSize - (addrNext - addrBlock);
            if (sizeBlock > sizeLeft) sizeBlock = sizeLeft;
            let blockExisting = this.blocks[iBlock];
            /**
             * If addrNext does not equal addrBlock, or sizeBlock does not equal this.blockSize, then either
             * the current block doesn't start on a block boundary or the size is something other than a block;
             * while we might support such requests down the road, that is currently a configuration error.
             */
            if (addrNext != addrBlock || sizeBlock != this.blockSize) {

                return false;
            }
            /**
             * Make sure that no block exists at the specified address, or if so, make sure its type is NONE.
             */
            if (blockExisting && blockExisting.type != Memory.TYPE.NONE) {

                return false;
            }
            /**
             * When no block is provided, we must allocate one that matches the specified type (and remaining size).
             */
            let idBlock = this.idDevice + '[' + this.toBase(addrNext, 16, this.addrWidth) + ']';
            if (!block) {
                blockNew = new Memory(this.idMachine, idBlock, {type, addr: addrNext, size: sizeBlock, "bus": this.idDevice});
            } else {
                /**
                 * When a block is provided, make sure its size matches the default Bus block size, and use it if so.
                 */
                if (block.size == this.blockSize) {
                    blockNew = block;
                } else {
                    blockNew = new Memory(this.idMachine, idBlock, {type, addr: addrNext, size: sizeBlock, "bus": this.idDevice});
                }
            }
            this.blocks[iBlock] = blockNew;
            addrNext = addrBlock + this.blockSize;
            sizeLeft -= sizeBlock;
            offset += sizeBlock;
            iBlock++;
        }
        return true;
    }

    /**
     * cleanBlocks(addr, size)
     *
     * @this {Bus}
     * @param {number} addr
     * @param {number} size
     * @returns {boolean} (true if all blocks were clean, false if dirty; all blocks are cleaned in the process)
     */
    cleanBlocks(addr, size)
    {
        let clean = true;
        let iBlock = addr >>> this.blockShift;
        let sizeBlock = this.blockSize - (addr & this.blockLimit);
        while (size > 0 && iBlock < this.blocks.length) {
            if (this.blocks[iBlock].isDirty()) {
                clean = false;
            }
            size -= sizeBlock;
            sizeBlock = this.blockSize;
            iBlock++;
        }
        return clean;
    }

    /**
     * enumBlocks(types, func)
     *
     * This is used by the Debugger to enumerate all the blocks of certain types.
     *
     * @this {Bus}
     * @param {number} types
     * @param {function(Memory)} func
     * @returns {number} (the number of blocks enumerated based on the requested types)
     */
    enumBlocks(types, func)
    {
        let cBlocks = 0;
        for (let iBlock = 0; iBlock < this.blocks.length; iBlock++) {
            let block = this.blocks[iBlock];
            if (!block || !(block.type & types)) continue;
            func(block);
            cBlocks++;
        }
        return cBlocks;
    }

    /**
     * initBlocks(addr, size, values)
     *
     * @this {Bus}
     * @param {number} addr is the starting physical address of the request
     * @param {number} size of the request, in bytes
     * @param {Array.<number>|Uint8Array} values
     * @returns {boolean}
     */
    initBlocks(addr, size, values)
    {
        let i = 0;
        let offset = addr & this.blockLimit;
        let iBlock = addr >>> this.blockShift;
        if (size > values.length) size = values.length;
        while (size > 0 && iBlock < this.blocks.length) {
            let block = this.blocks[iBlock++];
            if (!block) return false;
            while (size > 0 && offset < block.size) {
                block.writeValue(offset++, values[i++]);
                size--;
            }
            offset = 0;
        }
        return true;
    }

    /**
     * setBlock(addr, block)
     *
     * While addBlocks() can be used to add a specific block at a specific address, it's more restrictive,
     * requiring the specified address to be unused (or contain a block with TYPE of NONE).  This function
     * relaxes that requirement, by returning the previous block with the understanding that the caller will
     * restore the block later.  The PDP11, for example, needs this in order to (re)locate its IOPage block.
     *
     * @this {Bus}
     * @param {number} addr
     * @param {Memory} block
     * @returns {Memory|undefined} (previous block at address, undefined if address is not on a block boundary)
     */
    setBlock(addr, block)
    {
        let blockPrev;
        if (!(addr & this.blockLimit)) {
            let iBlock = addr >>> this.blockShift;
            blockPrev = this.blocks[iBlock];
            this.blocks[iBlock] = block;
        }
        return blockPrev;
    }

    /**
     * fault(addr, reason)
     *
     * @this {Bus}
     * @param {number} addr
     * @param {number} [reason]
     */
    fault(addr, reason)
    {
        this.fFault = true;
        if (!this.nDisableFaults) {
            /**
             * We must call the Debugger's printf() instead of our own in order to use its custom formatters (eg, %n).
             */
            if (this.dbg) {
                this.dbg.printf(Device.MESSAGE.FAULT, "bus fault (%d) at %n\n", reason, addr);
            }
            if (this.faultHandler) {
                this.faultHandler(addr, reason);
            }
        }
    }

    /**
     * checkFault()
     *
     * This also serves as a clearFault() function.
     *
     * @this {Bus}
     * @returns {boolean}
     */
    checkFault()
    {
        let fFault = this.fFault;
        this.fFault = false;
        return fFault;
    }

    /**
     * setFaultHandler(func)
     *
     * @this {Bus}
     * @param {function(number,number)|null} func
     */
    setFaultHandler(func)
    {
        this.faultHandler = func;
    }

    /**
     * getMemoryLimit(type)
     *
     * @this {Bus}
     * @param {number} type is one of the Memory.TYPE constants
     * @returns {number} (the limiting address of the specified memory type, zero if none)
     */
    getMemoryLimit(type)
    {
        let addr = 0;
        for (let iBlock = 0; iBlock < this.blocks.length; iBlock++) {
            let block = this.blocks[iBlock];
            if (block.type & type) {
                addr = block.addr + block.size;
            }
        }
        return addr;
    }

    /**
     * onPower()
     *
     * Called by the Machine device to provide notification of a power event.
     *
     * @this {Bus}
     */
    onPower()
    {
        if (this.dbg === undefined) {
            this.dbg = /** @type {Debugger} */ (this.findDeviceByClass("Debugger", false));
        }
    }

    /**
     * onReset()
     *
     * Called by the Machine device to provide notification of a reset event.
     *
     * @this {Bus}
     */
    onReset()
    {
        /**
         * The following logic isn't needed because Memory and Port objects are Devices as well,
         * so their onReset() handlers will be invoked automatically.
         *
         *      this.enumBlocks(Memory.TYPE.WRITABLE, function(block) {
         *          if (block.onReset) block.onReset();
         *      });
         */
    }

    /**
     * onLoad(state)
     *
     * Automatically called by the Machine device if the machine's 'autoSave' property is true.
     *
     * @this {Bus}
     * @param {Array} state
     * @returns {boolean}
     */
    onLoad(state)
    {
        return state && this.loadState(state)? true : false;
    }

    /**
     * onSave(state)
     *
     * Automatically called by the Machine device before all other devices have been powered down (eg, during
     * a page unload event).
     *
     * @this {Bus}
     * @param {Array} state
     */
    onSave(state)
    {
        this.saveState(state);
    }

    /**
     * loadState(state)
     *
     * @this {Bus}
     * @param {Array} state
     * @returns {boolean}
     */
    loadState(state)
    {
        for (let iBlock = 0; iBlock < this.blocks.length; iBlock++) {
            let block = this.blocks[iBlock];
            if (this.type == Bus.TYPE.DYNAMIC || (block.type & Memory.TYPE.READWRITE)) {
                if (block.loadState) {
                    let stateBlock = state.shift();
                    if (!block.loadState(stateBlock)) return false;
                }
            }
        }
        return true;
    }

    /**
     * saveState(state)
     *
     * @this {Bus}
     * @param {Array} state
     */
    saveState(state)
    {
        for (let iBlock = 0; iBlock < this.blocks.length; iBlock++) {
            let block = this.blocks[iBlock];
            if (this.type == Bus.TYPE.DYNAMIC || (block.type & Memory.TYPE.READWRITE)) {
                if (block.saveState) {
                    let stateBlock = [];
                    block.saveState(stateBlock);
                    state.push(stateBlock);
                }
            }
        }
    }

    /**
     * readDirect(addr)
     *
     * @this {Bus}
     * @param {number} addr
     * @returns {number}
     */
    readDirect(addr)
    {

        return this.blocks[addr >>> this.blockShift].readDirect(addr & this.blockLimit);
    }

    /**
     * readValue(addr)
     *
     * @this {Bus}
     * @param {number} addr
     * @returns {number}
     */
    readValue(addr)
    {

        return this.blocks[addr >>> this.blockShift].readData(addr & this.blockLimit);
    }

    /**
     * writeDirect(addr, value)
     *
     * @this {Bus}
     * @param {number} addr
     * @param {number} value
     */
    writeDirect(addr, value)
    {

        this.blocks[addr >>> this.blockShift].writeDirect(addr & this.blockLimit, value);
    }

    /**
     * writeValue(addr, value)
     *
     * @this {Bus}
     * @param {number} addr
     * @param {number} value
     */
    writeValue(addr, value)
    {

        this.blocks[addr >>> this.blockShift].writeData(addr & this.blockLimit, value);
    }

    /**
     * readValuePairBE(addr)
     *
     * NOTE: Any addr we are passed is assumed to be properly masked; however, any address that we
     * we calculate ourselves (ie, addr + 1) must be masked ourselves.
     *
     * @this {Bus}
     * @param {number} addr
     * @returns {number}
     */
    readValuePairBE(addr)
    {

        if (addr & 0x1) {
            return this.readData((addr + 1) & this.addrLimit) | (this.readData(addr) << this.dataWidth);
        }
        return this.blocks[addr >>> this.blockShift].readPair(addr & this.blockLimit);
    }

    /**
     * readValueQuadBE(addr)
     *
     * NOTE: Any addr we are passed is assumed to be properly masked; however, any address that we
     * we calculate ourselves (ie, addr + 1) must be masked ourselves.
     *
     * @this {Bus}
     * @param {number} addr
     * @returns {number}
     */
    readValueQuadBE(addr)
    {

        if (addr & 0x3) {
            return this.readPair((addr + 2) & this.addrLimit) | (this.readPair(addr) << this.pairWidth);
        }
        return this.blocks[addr >>> this.blockShift].readQuad(addr & this.blockLimit);
    }

    /**
     * readValuePairLE(addr)
     *
     * NOTE: Any addr we are passed is assumed to be properly masked; however, any address that we
     * we calculate ourselves (ie, addr + 1) must be masked ourselves.
     *
     * @this {Bus}
     * @param {number} addr
     * @returns {number}
     */
    readValuePairLE(addr)
    {

        if (addr & 0x1) {
            return this.readData(addr) | (this.readData((addr + 1) & this.addrLimit) << this.dataWidth);
        }
        return this.blocks[addr >>> this.blockShift].readPair(addr & this.blockLimit);
    }

    /**
     * readValueQuadLE(addr)
     *
     * NOTE: Any addr we are passed is assumed to be properly masked; however, any address that we
     * we calculate ourselves (ie, addr + 1) must be masked ourselves.
     *
     * @this {Bus}
     * @param {number} addr
     * @returns {number}
     */
    readValueQuadLE(addr)
    {

        if (addr & 0x3) {
            return this.readPair(addr) | (this.readPair((addr + 2) & this.addrLimit) << this.pairWidth);
        }
        return this.blocks[addr >>> this.blockShift].readQuad(addr & this.blockLimit);
    }

    /**
     * readDynamicPair(addr)
     *
     * Unlike the readValuePairLE()/readValuePairBE() interfaces, we pass any offset -- even or odd -- directly to the block's
     * readPair() interface.  Our only special concern here is whether the request straddles two blocks.
     *
     * @this {Bus}
     * @param {number} addr
     * @returns {number}
     */
    readDynamicPair(addr)
    {

        if ((addr & this.blockLimit) == this.blockLimit) {
            return this.littleEndian? this.readValuePairLE(addr) : this.readValuePairBE(addr);
        }
        return this.blocks[addr >>> this.blockShift].readPair(addr & this.blockLimit);
    }

    /**
     * readDynamicQuad(addr)
     *
     * Unlike the readValueQuadLE()/readValueQuadBE() interfaces, we pass any offset -- even or odd -- directly to the block's
     * readQuad() interface.  Our only special concern here is whether the request straddles two blocks.
     *
     * @this {Bus}
     * @param {number} addr
     * @returns {number}
     */
    readDynamicQuad(addr)
    {

        if ((addr & this.blockLimit) + 3 > this.blockLimit) {
            return this.littleEndian? this.readValueQuadLE(addr) : this.readValueQuadBE(addr);
        }
        return this.blocks[addr >>> this.blockShift].readQuad(addr & this.blockLimit);
    }

    /**
     * writeValuePairBE(addr, value)
     *
     * NOTE: Any addr we are passed is assumed to be properly masked; however, any address that we
     * we calculate ourselves (ie, addr + 1) must be masked ourselves.
     *
     * @this {Bus}
     * @param {number} addr
     * @param {number} value
     */
    writeValuePairBE(addr, value)
    {

        if (addr & 0x1) {
            this.writeData(addr, value >> this.dataWidth);
            this.writeData((addr + 1) & this.addrLimit, value & this.dataLimit);
            return;
        }
        this.blocks[addr >>> this.blockShift].writePair(addr & this.blockLimit, value);
    }

    /**
     * writeValueQuadBE(addr, value)
     *
     * NOTE: Any addr we are passed is assumed to be properly masked; however, any address that we
     * we calculate ourselves (ie, addr + 1) must be masked ourselves.
     *
     * @this {Bus}
     * @param {number} addr
     * @param {number} value
     */
    writeValueQuadBE(addr, value)
    {

        if (addr & 0x3) {
            this.writePair(addr, value >> this.pairWidth);
            this.writePair((addr + 2) & this.addrLimit, value & this.pairLimit);
            return;
        }
        this.blocks[addr >>> this.blockShift].writeQuad(addr & this.blockLimit, value);
    }

    /**
     * writeValuePairLE(addr, value)
     *
     * NOTE: Any addr we are passed is assumed to be properly masked; however, any address that we
     * we calculate ourselves (ie, addr + 1) must be masked ourselves.
     *
     * @this {Bus}
     * @param {number} addr
     * @param {number} value
     */
    writeValuePairLE(addr, value)
    {

        if (addr & 0x1) {
            this.writeData(addr, value & this.dataLimit);
            this.writeData((addr + 1) & this.addrLimit, value >> this.dataWidth);
            return;
        }
        this.blocks[addr >>> this.blockShift].writePair(addr & this.blockLimit, value);
    }

    /**
     * writeValueQuadLE(addr, value)
     *
     * NOTE: Any addr we are passed is assumed to be properly masked; however, any address that we
     * we calculate ourselves (ie, addr + 1) must be masked ourselves.
     *
     * @this {Bus}
     * @param {number} addr
     * @param {number} value
     */
    writeValueQuadLE(addr, value)
    {

        if (addr & 0x3) {
            this.writePair(addr, value & this.pairLimit);
            this.writeData((addr + 2) & this.addrLimit, value >> this.pairWidth);
            return;
        }
        this.blocks[addr >>> this.blockShift].writeQuad(addr & this.blockLimit, value);
    }

    /**
     * writeDynamicPair(addr, value)
     *
     * Unlike the writeValuePairLE()/writeValuePairBE() interfaces, we pass any offset -- even or odd -- directly to the block's
     * writeDynamicPair() interface.  Our only special concern here is whether the request straddles two blocks.
     *
     * @this {Bus}
     * @param {number} addr
     * @param {number} value
     */
    writeDynamicPair(addr, value)
    {

        if ((addr & this.blockLimit) == this.blockLimit) {
            if (this.littleEndian) {
                this.writeValuePairLE(addr, value);
            } else {
                this.writeValuePairBE(addr, value);
            }
            return;
        }
        this.blocks[addr >>> this.blockShift].writePair(addr & this.blockLimit, value);
    }

    /**
     * writeDynamicQuad(addr, value)
     *
     * Unlike the writeValueQuadLE()/writeValueQuadBE() interfaces, we pass any offset -- even or odd -- directly to the block's
     * writeDynamicQuad() interface.  Our only special concern here is whether the request straddles two blocks.
     *
     * @this {Bus}
     * @param {number} addr
     * @param {number} value
     */
    writeDynamicQuad(addr, value)
    {

        if ((addr & this.blockLimit) + 3 > this.blockLimit) {
            if (this.littleEndian) {
                this.writeValueQuadLE(addr, value);
            } else {
                this.writeValueQuadBE(addr, value);
            }
            return;
        }
        this.blocks[addr >>> this.blockShift].writeQuad(addr & this.blockLimit, value);
    }

    /**
     * selectInterface(n)
     *
     * @this {Bus}
     * @param {number} nDelta (the change in trap requests; eg, +/-1)
     */
    selectInterface(nDelta)
    {
        let nTraps = this.nTraps;
        this.nTraps += nDelta;

        if (!nTraps || !this.nTraps) {
            this.readData = this.readValue;
            this.writeData = this.writeValue;
            if (this.type == Bus.TYPE.DYNAMIC) {
                this.readPair = this.readDynamicPair;
                this.readQuad = this.readDynamicQuad;
                this.writePair = this.writeDynamicPair;
                this.writeQuad = this.writeDynamicQuad;
            }
            else if (!this.littleEndian) {
                this.readPair = this.readValuePairBE;
                this.readQuad = this.readValueQuadBE;
                this.writePair = this.writeValuePairBE;
                this.writeQuad = this.writeValueQuadBE;
            } else {
                this.readPair = this.readValuePairLE;
                this.readQuad = this.readValueQuadLE;
                this.writePair = this.writeValuePairLE;
                this.writeQuad = this.writeValueQuadLE;
            }
        }
    }

    /**
     * trapRead(addr, func)
     *
     * @this {Bus}
     * @param {number} addr
     * @param {function((number|undefined), number, number)} func (receives the base address, offset, and value read)
     * @returns {boolean} true if trap successful, false if unsupported or already trapped by another function
     */
    trapRead(addr, func)
    {
        if (this.blocks[addr >>> this.blockShift].trapRead(func)) {
            this.selectInterface(1);
            return true;
        }
        return false;
    }

    /**
     * trapWrite(addr, func)
     *
     * Note that for blocks of type NONE, the base will be undefined, so function will not see the original address,
     * only the block offset.
     *
     * @this {Bus}
     * @param {number} addr
     * @param {function((number|undefined), number, number)} func (receives the base address, offset, and value written)
     * @returns {boolean} true if trap successful, false if unsupported already trapped by another function
     */
    trapWrite(addr, func)
    {
        if (this.blocks[addr >>> this.blockShift].trapWrite(func)) {
            this.selectInterface(1);
            return true;
        }
        return false;
    }

    /**
     * untrapRead(addr, func)
     *
     * @this {Bus}
     * @param {number} addr
     * @param {function((number|undefined), number, number)} func (receives the base address, offset, and value read)
     * @returns {boolean} true if untrap successful, false if no (or another) trap was in effect
     */
    untrapRead(addr, func)
    {
        if (this.blocks[addr >>> this.blockShift].untrapRead(func)) {
            this.selectInterface(-1);
            return true;
        }
        return false;
    }

    /**
     * untrapWrite(addr, func)
     *
     * @this {Bus}
     * @param {number} addr
     * @param {function((number|undefined), number, number)} func (receives the base address, offset, and value written)
     * @returns {boolean} true if untrap successful, false if no (or another) trap was in effect
     */
    untrapWrite(addr, func)
    {
        if (this.blocks[addr >>> this.blockShift].untrapWrite(func)) {
            this.selectInterface(-1);
            return true;
        }
        return false;
    }
}

/**
 * A "dynamic" bus (eg, an I/O bus) is one where block accesses must always be performed via function (no direct
 * value access) because there's "logic" on the other end, whereas a "static" bus can be accessed either way, via
 * function or value.
 *
 * Why don't we use ONLY functions on dynamic buses and ONLY direct value access on static buses?  Partly for
 * historical reasons, but also because when trapping is enabled on one or more blocks of a bus, all accesses must
 * be performed via function, to ensure that the appropriate trap handler always gets invoked.
 *
 * This is why it's important that TYPE.DYNAMIC be 1 (not 0), because we pass that value to selectInterface()
 * to effectively force all block accesses on a "dynamic" bus to use function calls.
 */
Bus.TYPE = {
    STATIC:     0,
    DYNAMIC:    1
};

Bus.CLASSES["Bus"] = Bus;

/**
 * @copyright https://www.pcjs.org/modules/v3/memory.js (C) 2012-2025 Jeff Parsons
 */

/** @typedef {{ addr: (number|undefined), size: number, type: (number|undefined), littleEndian: (boolean|undefined), values: (Array.<number>|string|undefined) }} */
let MemoryConfig;

/**
 * @class {Memory}
 * @unrestricted
 * @property {number} [addr]
 * @property {number} size
 * @property {number} type
 * @property {Bus} bus
 * @property {number} dataWidth
 * @property {number} dataLimit
 * @property {number} pairWidth
 * @property {number} pairLimit
 * @property {number} quadWidth
 * @property {number} quadLimit
 * @property {boolean} littleEndian
 * @property {ArrayBuffer|null} buffer
 * @property {DataView|null} dataView
 * @property {Array.<number>|null} values
 * @property {Array.<Uint16>|null} valuePairs
 * @property {Array.<Int32>|null} valueQuads
 * @property {boolean} fDirty
 * @property {number} nReadTraps
 * @property {number} nWriteTraps
 * @property {function(number)|null} readDataOrig
 * @property {function(number,number)|null} writeDataOrig
 * @property {function(number)|null} readPairOrig
 * @property {function(number,number)|null} writePairOrig
 * @property {function(number)|null} readQuadOrig
 * @property {function(number,number)|null} writeQuadOrig
 * @property {function((number|undefined),number,number)|null} readTrap
 * @property {function((number|undefined),number,number)|null} writeTrap
 */
class Memory extends Device {
    /**
     * Memory(idMachine, idDevice, config)
     *
     * @this {Memory}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {MemoryConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        this.addr = this.config['addr'];
        this.size = this.config['size'];
        this.type = this.config['type'] || Memory.TYPE.NONE;

        /**
         * If no Bus ID was provided, then we fallback to the default Bus.
         */
        let idBus = this.config['bus'];
        this.bus = /** @type {Bus} */ (idBus? this.findDevice(idBus) : this.findDeviceByClass(idBus = "Bus"));
        if (!this.bus) throw new Error(this.sprintf("unable to find bus '%s'", idBus));

        this.dataWidth = this.bus.dataWidth;
        this.dataLimit = Math.pow(2, this.dataWidth) - 1;
        this.pairWidth = this.dataWidth << 1;
        this.pairLimit = Math.pow(2, this.pairWidth) - 1;
        this.quadWidth = this.dataWidth << 2;
        this.quadLimit = Math.pow(2, this.quadWidth) - 1;

        this.fDirty = this.fUseArrayBuffer = false;
        this.littleEndian = this.bus.littleEndian !== false;
        this.buffer = this.dataView = null
        this.values = this.valuePairs = this.valueQuads = null;

        let readValue = this.readValue;
        let writeValue = this.writeValue;
        let readPair = this.littleEndian? this.readDynamicPairLE : this.readDynamicPairBE;
        let writePair = this.littleEndian? this.writeDynamicPairLE : this.writeDynamicPairBE;
        let readQuad = this.littleEndian? this.readDynamicQuadLE : this.readDynamicQuadBE;
        let writeQuad = this.littleEndian? this.writeDynamicQuadLE : this.writeDynamicQuadBE;

        if (this.bus.type == Bus.TYPE.STATIC) {
            writeValue = this.writeValueDirty;
            readPair = this.littleEndian? this.readValuePairLE : this.readValuePairBE;
            readQuad = this.littleEndian? this.readValueQuadLE : this.readValueQuadBE;
            writePair = this.writeValuePairDirty;
            writeQuad = this.writeValueQuadDirty;
            if (this.dataWidth == 8 && this.getMachineConfig('ArrayBuffer') !== false) {
                this.fUseArrayBuffer = true;
                readPair = this.littleEndian == Memory.LITTLE_ENDIAN? this.readValuePair16 : this.readValuePair16SE;
                readQuad = this.littleEndian == Memory.LITTLE_ENDIAN? this.readValueQuad32 : this.readValueQuad32SE;
            }
        }

        switch(this.type) {
        case Memory.TYPE.NONE:
            this.readData = this.readNone;
            this.writeData = this.writeNone;
            this.readPair = this.readNonePair;
            this.writePair = this.writeNonePair;
            this.readQuad = this.readNoneQuad;
            this.writeQuad = this.writeNoneQuad;
            break;
        case Memory.TYPE.READONLY:
            this.readData = readValue;
            this.writeData = this.writeNone;
            this.readPair = readPair;
            this.writePair = this.writeNone;
            this.readQuad = readQuad;
            this.writeQuad = this.writeNone;
            break;
        case Memory.TYPE.READWRITE:
            this.readData = readValue;
            this.writeData = writeValue;
            this.readPair = readPair;
            this.writePair = writePair;
            this.readQuad = readQuad;
            this.writeQuad = writeQuad;
            break;
        default:

            break;
        }

        /**
         * Additional block properties used for trapping reads/writes
         */
        this.nReadTraps = this.nWriteTraps = 0;
        this.readTrap = this.writeTrap = null;
        this.readDataOrig = this.writeDataOrig = null;
        this.readPairOrig = this.writePairOrig = null;
        this.readQuadOrig = this.writeQuadOrig = null;

        this.getValues(this.config['values']);
        this.initValues();
    }

    /**
     * getValues(values)
     *
     * @this {Memory}
     * @param {Array.<number>|string|undefined} values
     */
    getValues(values)
    {
        if (typeof values == "string") {
            let memory = this;
            this.setReady(false);
            this.getResource(values, function onLoadValues(sURL, sResource, readyState, nErrorCode) {
                if (readyState == 4) {
                    if (!nErrorCode && sResource) {
                        try {
                            let json = JSON.parse(sResource);
                            memory.getValues(json.values);
                        } catch(err) {
                            memory.printf("error (%s) parsing resource: %s\n", err.message, sURL);
                        }
                        memory.setReady(true);
                    }
                    else {
                        memory.printf("error (%d) loading resource: %s\n", nErrorCode, sURL);
                    }
                }
            });
            return;
        }
        this.config['values'] = values;
    }

    /**
     * initValues(values)
     *
     * @this {Memory}
     * @param {Array.<number>} [values]
     */
    initValues(values)
    {
        if (this.type > Memory.TYPE.NONE) {
            if (this.fUseArrayBuffer) {
                this.buffer = new ArrayBuffer(this.size);
                this.dataView = new DataView(this.buffer, 0, this.size);
                /**
                 * If littleEndian is true, we can use valuePairs[] and valueQuads[] directly; well, we can use
                 * them whenever the offset is a multiple of 1, 2 or 4, respectively.  Otherwise, we must fallback
                 * to dv.getUint8()/dv.setUint8(), dv.getUint16()/dv.setUint16() and dv.getInt32()/dv.setInt32().
                 */
                this.values = new Uint8Array(this.buffer, 0, this.size);
                this.valuePairs = new Uint16Array(this.buffer, 0, this.size >> 1);
                this.valueQuads = new Int32Array(this.buffer, 0, this.size >> 2);
            }
            else {
                /**
                 * TODO: I used to call fill(this.dataLimit), but is there really any reason to do that?
                 */
                this.values = new Array(this.size).fill(0);
            }
            if (values) {

                for (let i = 0; i < values.length; i++) {
                    this.values[i] = values[i];
                }
            }
        }
    }

    /**
     * onReset()
     *
     * Called by the Bus device to provide notification of a reset event.
     *
     * Originally called by the CPU (eg, TMS1500) onReset() handler.  There was no need for this handler
     * until we added the mini-debugger's ability to edit ROM locations via setData().  So this gives the
     * user the ability to revert back to the original ROM if they want to undo any modifications.
     *
     * NOTE: Machines probably don't (and shouldn't) depend on the initial memory contents being zero,
     * but zeroing doesn't hurt, and when saving memory blocks in a compressed format (eg, RLE), this will
     * help them compress.
     *
     * @this {Memory}
     */
    onReset()
    {
        if (this.config['values']) {
            this.bus.initBlocks(this.addr, this.size, this.config['values']);
        } else {
            if (this.type & Memory.TYPE.READWRITE) {
                if (this.values) this.values.fill(0);
            }
        }
    }

    /**
     * isDirty()
     *
     * Returns true if the block is dirty; the block is marked clean in the process, and the write
     * handlers are switched to those responsible for marking the block dirty.
     *
     * @this {Memory}
     * @returns {boolean}
     */
    isDirty()
    {
        if (this.fDirty) {
            this.fDirty = false;
            if (this.bus.type == Bus.TYPE.STATIC) {
                if (!this.nWriteTraps) {
                    this.writeData = this.writeValueDirty;
                    this.writePair = this.writeValuePairDirty;
                    this.writeQuad = this.writeValueQuadDirty;
                } else {
                    this.writeDataOrig = this.writeValueDirty;
                    this.writePairOrig = this.writeValuePairDirty;
                    this.writeQuadOrig = this.writeValueQuadDirty;
                }
            }
            return true;
        }
        return false;
    }

    /**
     * readNone(offset)
     *
     * @this {Memory}
     * @param {number} offset
     * @returns {number}
     */
    readNone(offset)
    {
        return this.dataLimit;
    }

    /**
     * readNonePair(offset)
     *
     * @this {Memory}
     * @param {number} offset
     * @returns {number}
     */
    readNonePair(offset)
    {
        if (this.littleEndian) {
            return this.readNone(offset) | (this.readNone(offset + 1) << this.dataWidth);
        } else {
            return this.readNone(offset + 1) | (this.readNone(offset) << this.dataWidth);
        }
    }

    /**
     * readNoneQuad(offset)
     *
     * @this {Memory}
     * @param {number} offset
     * @returns {number}
     */
     readNoneQuad(offset)
     {
         if (this.littleEndian) {
             return this.readNonePair(offset) | (this.readNonePair(offset + 2) << this.pairWidth);
         } else {
             return this.readNonePair(offset + 2) | (this.readNonePair(offset) << this.pairWidth);
         }
     }

    /**
     * readDirect(offset)
     *
     * Some Memory devices (eg, ROM) may override readValue() but never readDirect().
     *
     * @this {Memory}
     * @param {number} offset
     * @returns {number}
     */
    readDirect(offset)
    {
        if (this.values) {
            return this.values[offset];
        }
        return 0;
    }

    /**
     * readValue(offset)
     *
     * @this {Memory}
     * @param {number} offset
     * @returns {number}
     */
    readValue(offset)
    {
        return this.values[offset];
    }

    /**
     * readValuePairBE(offset)
     *
     * @this {Memory}
     * @param {number} offset (must be an even block offset)
     * @returns {number}
     */
    readValuePairBE(offset)
    {
        return this.values[offset + 1] | (this.values[offset] << this.dataWidth);
    }

    /**
     * readValueQuadBE(offset)
     *
     * @this {Memory}
     * @param {number} offset (must be a multiple-of-four block offset)
     * @returns {number}
     */
    readValueQuadBE(offset)
    {
         return this.readValuePairBE(offset + 2) | (this.readValuePairBE(offset) << this.pairWidth);
    }

    /**
     * readValuePairLE(offset)
     *
     * @this {Memory}
     * @param {number} offset (must be an even block offset)
     * @returns {number}
     */
    readValuePairLE(offset)
    {
        return this.values[offset] | (this.values[offset + 1] << this.dataWidth);
    }

    /**
     * readValueQuadLE(offset)
     *
     * @this {Memory}
     * @param {number} offset (must be a multiple-of-four block offset)
     * @returns {number}
     */
    readValueQuadLE(offset)
    {
         return this.readValuePairLE(offset) | (this.readValuePairLE(offset + 2) << this.pairWidth);
    }

    /**
     * readValuePair16(offset)
     *
     * @this {Memory}
     * @param {number} offset (must be an even block offset)
     * @returns {number}
     */
    readValuePair16(offset)
    {
        return this.valuePairs[offset >>> 1];
    }

    /**
     * readValueQuad32(offset)
     *
     * @this {Memory}
     * @param {number} offset (must be a multiple-of-4 block offset)
     * @returns {number}
     */
    readValueQuad32(offset)
    {
         return this.valueQuads[offset >>> 2];
    }

    /**
     * readValuePair16SE(offset)
     *
     * This function is neither big-endian (BE) or little-endian (LE), but rather "swap-endian" (SE), which
     * means there's a mismatch between our emulated machine and the host machine, so we call the appropriate
     * DataView function with the desired littleEndian setting.
     *
     * @this {Memory}
     * @param {number} offset (must be an even block offset)
     * @returns {number}
     */
    readValuePair16SE(offset)
    {
        return this.dataView.getUint16(offset, this.littleEndian);
    }

    /**
     * readValueQuad32SE(offset)
     *
     * This function is neither big-endian (BE) or little-endian (LE), but rather "swap-endian" (SE), which
     * means there's a mismatch between our emulated machine and the host machine, so we call the appropriate
     * DataView function with the desired littleEndian setting.
     *
     * @this {Memory}
     * @param {number} offset (must be a multiple-of-four block offset)
     * @returns {number}
     */
    readValueQuad32SE(offset)
    {
        return this.dataView.getInt32(offset, this.littleEndian);
    }

    /**
     * readDynamicPairBE(offset)
     *
     * This slow version is used with a dynamic (eg, I/O) bus only, and it must also accommodate odd offsets.
     *
     * @this {Memory}
     * @param {number} offset
     * @returns {number}
     */
    readDynamicPairBE(offset)
    {

        return this.readValue(offset + 1) | (this.readValue(offset) << this.dataWidth);
    }

    /**
     * readDynamicQuadBE(offset)
     *
     * This slow version is used with a dynamic (eg, I/O) bus only, and it must also accommodate odd offsets.
     *
     * @this {Memory}
     * @param {number} offset
     * @returns {number}
     */
    readDynamicQuadBE(offset)
    {

        return this.readPair(offset + 2) | (this.readPair(offset) << this.pairWidth);
    }

    /**
     * readDynamicPairLE(offset)
     *
     * This slow version is used with a dynamic (eg, I/O) bus only, and it must also accommodate odd offsets.
     *
     * @this {Memory}
     * @param {number} offset
     * @returns {number}
     */
    readDynamicPairLE(offset)
    {

        return this.readValue(offset) | (this.readValue(offset + 1) << this.dataWidth);
    }

    /**
     * readDynamicPairLE(offset)
     *
     * This slow version is used with a dynamic (eg, I/O) bus only, and it must also accommodate odd offsets.
     *
     * @this {Memory}
     * @param {number} offset
     * @returns {number}
     */
    readDynamicQuadLE(offset)
    {

        return this.readPair(offset) | (this.readPair(offset + 2) << this.pairWidth);
    }

    /**
     * writeNone(offset, value)
     *
     * @this {Memory}
     * @param {number} offset
     * @param {number} value
     */
    writeNone(offset, value)
    {
    }

    /**
     * writeNonePair(offset, value)
     *
     * @this {Memory}
     * @param {number} offset
     * @param {number} value
     */
    writeNonePair(offset, value)
    {
        if (this.littleEndian) {
            this.writeNone(offset, value & this.dataLimit);
            this.writeNone(offset + 1, value >> this.dataWidth);
        } else {
            this.writeNone(offset, value >> this.dataWidth);
            this.writeNone(offset + 1, value & this.dataLimit);
        }
    }

    /**
     * writeNoneQuad(offset, value)
     *
     * @this {Memory}
     * @param {number} offset
     * @param {number} value
     */
     writeNoneQuad(offset, value)
     {
         if (this.littleEndian) {
             this.writeNonePair(offset, value & this.pairLimit);
             this.writeNonePair(offset + 2, value >> this.pairWidth);
         } else {
             this.writeNonePair(offset, value >> this.pairWidth);
             this.writeNonePair(offset + 2, value & this.pairLimit);
         }
     }

    /**
     * writeDirect(offset, value)
     *
     * Some Memory devices (eg, ROM) may override writeValue() but never writeDirect().
     *
     * @this {Memory}
     * @param {number} offset
     * @param {number} value
     */
    writeDirect(offset, value)
    {

        if (this.values) this.values[offset] = value;
    }

    /**
     * writeValue(offset, value)
     *
     * @this {Memory}
     * @param {number} offset
     * @param {number} value
     */
    writeValue(offset, value)
    {

        this.values[offset] = value;
    }

    /**
     * writeValueDirty(offset, value)
     *
     * @this {Memory}
     * @param {number} offset
     * @param {number} value
     */
    writeValueDirty(offset, value)
    {

        this.values[offset] = value;
        this.fDirty = true;
        if (!this.nWriteTraps) {
            this.writeData = this.writeValue;
        } else {
            this.writeDataOrig = this.writeValue;
        }
    }

    /**
     * writeValuePairBE(offset, value)
     *
     * @this {Memory}
     * @param {number} offset (must be an even block offset)
     * @param {number} value
     */
    writeValuePairBE(offset, value)
    {

        this.values[offset] = value >> this.dataWidth;
        this.values[offset + 1] = value & this.dataLimit;
    }

    /**
     * writeValueQuadBE(offset, value)
     *
     * @this {Memory}
     * @param {number} offset (must be a multiple-of-four block offset)
     * @param {number} value
     */
    writeValueQuadBE(offset, value)
    {

        this.writeValuePairBE(offset, value >> this.pairWidth);
        this.writeValuePairBE(offset + 2, value & this.pairLimit);
    }

    /**
     * writeValuePairLE(offset, value)
     *
     * @this {Memory}
     * @param {number} offset (must be an even block offset)
     * @param {number} value
     */
    writeValuePairLE(offset, value)
    {

        this.values[offset] = value & this.dataLimit;
        this.values[offset + 1] = value >> this.dataWidth;
    }

    /**
     * writeValueQuadLE(offset, value)
     *
     * @this {Memory}
     * @param {number} offset (must be a multiple-of-four block offset)
     * @param {number} value
     */
    writeValueQuadLE(offset, value)
    {

        this.writeValuePairLE(offset, value & this.pairLimit);
        this.writeValuePairLE(offset + 2, value >> this.pairWidth);
    }

    /**
     * writeValuePair16(offset, value)
     *
     * @this {Memory}
     * @param {number} offset (must be an even block offset)
     * @param {number} value
     */
    writeValuePair16(offset, value)
    {
        let off = offset >>> 1;

        this.valuePairs[off] = value;
    }

    /**
     * writeValueQuad32(offset, value)
     *
     * @this {Memory}
     * @param {number} offset (must be a multiple-of-four block offset)
     * @param {number} value
     */
    writeValueQuad32(offset, value)
    {
        let off = offset >>> 2;

        this.valueQuads[off] = value;
    }

    /**
     * writeValuePair16SE(offset, value)
     *
     * This function is neither big-endian (BE) or little-endian (LE), but rather "swap-endian" (SE), which
     * means there's a mismatch between our emulated machine and the host machine, so we call the appropriate
     * DataView function with the desired littleEndian setting.
     *
     * @this {Memory}
     * @param {number} offset (must be an even block offset)
     * @param {number} value
     */
    writeValuePair16SE(offset, value)
    {

        this.dataView.setUint16(offset, value, this.littleEndian);
    }

    /**
     * writeValueQuad32SE(offset, value)
     *
     * This function is neither big-endian (BE) or little-endian (LE), but rather "swap-endian" (SE), which
     * means there's a mismatch between our emulated machine and the host machine, so we call the appropriate
     * DataView function with the desired littleEndian setting.
     *
     * @this {Memory}
     * @param {number} offset (must be a multiple-of-four block offset)
     * @param {number} value
     */
    writeValueQuad32SE(offset, value)
    {

        this.dataView.setInt32(offset, value, this.littleEndian);
    }

    /**
     * writeDynamicPairBE(offset, value)
     *
     * This slow version is used with a dynamic (eg, I/O) bus only, and it must also accommodate odd offsets.
     *
     * @this {Memory}
     * @param {number} offset
     * @param {number} value
     */
    writeDynamicPairBE(offset, value)
    {

        this.writeValue(offset, value >> this.dataWidth);
        this.writeValue(offset + 1, value & this.dataLimit);
    }

    /**
     * writeDynamicQuadBE(offset, value)
     *
     * This slow version is used with a dynamic (eg, I/O) bus only, and it must also accommodate odd offsets.
     *
     * @this {Memory}
     * @param {number} offset
     * @param {number} value
     */
    writeDynamicQuadBE(offset, value)
    {

        this.writePair(offset, value >> this.pairWidth);
        this.writePair(offset + 2, value & this.pairLimit);
    }

    /**
     * writeDynamicPairLE(offset, value)
     *
     * This slow version is used with a dynamic (eg, I/O) bus only, and it must also accommodate odd offsets.
     *
     * @this {Memory}
     * @param {number} offset
     * @param {number} value
     */
    writeDynamicPairLE(offset, value)
    {

        this.writeValue(offset, value & this.dataLimit);
        this.writeValue(offset + 1, value >> this.dataWidth);
    }

    /**
     * writeDynamicQuadLE(offset, value)
     *
     * This slow version is used with a dynamic (eg, I/O) bus only, and it must also accommodate odd offsets.
     *
     * @this {Memory}
     * @param {number} offset
     * @param {number} value
     */
    writeDynamicQuadLE(offset, value)
    {

        this.writePair(offset, value & this.pairLimit);
        this.writePair(offset + 2, value >> this.pairWidth);
    }

    /**
     * writeValuePairDirty(offset, value)
     *
     * @this {Memory}
     * @param {number} offset (must be an even block offset)
     * @param {number} value
     */
    writeValuePairDirty(offset, value)
    {
        if (!this.buffer) {
            if (this.littleEndian) {
                this.writeValuePairLE(offset, value);
                if (!this.nWriteTraps) {
                    this.writePair = this.writeValuePairLE;
                } else {
                    this.writePairOrig = this.writeValuePairLE;
                }
            } else {
                this.writeValuePairBE(offset, value);
                if (!this.nWriteTraps) {
                    this.writePair = this.writeValuePairBE;
                } else {
                    this.writePairOrig = this.writeValuePairBE;
                }
            }
        } else {
            if (this.littleEndian == Memory.LITTLE_ENDIAN) {
                this.writeValuePair16(offset, value);
                if (!this.nWriteTraps) {
                    this.writePair = this.writeValuePair16;
                } else {
                    this.writePairOrig = this.writeValuePair16;
                }
            } else {
                this.writeValuePair16SE(offset, value);
                if (!this.nWriteTraps) {
                    this.writePair = this.writeValuePair16SE;
                } else {
                    this.writePairOrig = this.writeValuePair16SE;
                }
            }
        }
    }

    /**
     * writeValueQuadDirty(offset, value)
     *
     * @this {Memory}
     * @param {number} offset (must be a multiple-of-four offset)
     * @param {number} value
     */
     writeValueQuadDirty(offset, value)
     {
         if (!this.buffer) {
             if (this.littleEndian) {
                 this.writeValueQuadLE(offset, value);
                 if (!this.nWriteTraps) {
                     this.writeQuad = this.writeValueQuadLE;
                 } else {
                     this.writeQuadOrig = this.writeValueQuadLE;
                 }
             } else {
                 this.writeValueQuadBE(offset, value);
                 if (!this.nWriteTraps) {
                     this.writeQuad = this.writeValueQuadBE;
                 } else {
                     this.writeQuadOrig = this.writeValueQuadBE;
                 }
             }
         } else {
             if (this.littleEndian == Memory.LITTLE_ENDIAN) {
                 this.writeValueQuad32(offset, value);
                 if (!this.nWriteTraps) {
                     this.writeQuad = this.writeValueQuad32;
                 } else {
                     this.writeQuadOrig = this.writeValueQuad32;
                 }
             } else {
                 this.writeValueQuad32SE(offset, value);
                 if (!this.nWriteTraps) {
                     this.writeQuad = this.writeValueQuad32SE;
                 } else {
                     this.writeQuadOrig = this.writeValueQuad32SE;
                 }
             }
         }
     }

    /**
     * trapRead(func)
     *
     * I've decided to call the trap handler AFTER reading the value, so that we can pass the value
     * along with the address; for example, the Debugger might find that useful for its history buffer.
     *
     * Note that for blocks of type NONE, the base will be undefined, so the function will not see the
     * original address, only the block offset.
     *
     * @this {Memory}
     * @param {function((number|undefined), number, number)} func (receives the base address, offset, and value read)
     * @returns {boolean} true if trap successful, false if unsupported or already trapped by another function
     */
    trapRead(func)
    {
        if (!this.nReadTraps) {
            let block = this;
            this.nReadTraps++;
            this.readTrap = func;
            this.readDataOrig = this.readData;
            this.readPairOrig = this.readPair;
            this.readQuadOrig = this.readQuad;
            this.readData = function readDataTrap(offset) {
                let value = block.readDataOrig(offset);
                block.readTrap(block.addr, offset, value);
                return value;
            };
            this.readPair = function readPairTrap(offset) {
                let value = block.readPairOrig(offset);
                block.readTrap(block.addr, offset, value);
                block.readTrap(block.addr, offset + 1, value);
                return value;
            };
            this.readQuad = function readQuadTrap(offset) {
                let value = block.readQuadOrig(offset);
                block.readTrap(block.addr, offset, value);
                block.readTrap(block.addr, offset + 1, value);
                block.readTrap(block.addr, offset + 2, value);
                block.readTrap(block.addr, offset + 3, value);
                return value;
            };
            return true;
        }
        if (this.readTrap == func) {
            this.nReadTraps++;
            return true;
        }
        return false;
    }

    /**
     * trapWrite(func)
     *
     * Note that for blocks of type NONE, the base will be undefined, so the function will not see the
     * original address, only the block offset.
     *
     * @this {Memory}
     * @param {function((number|undefined), number, number)} func (receives the base address, offset, and value written)
     * @returns {boolean} true if trap successful, false if unsupported or already trapped by another function
     */
    trapWrite(func)
    {
        if (!this.nWriteTraps) {
            let block = this;
            this.nWriteTraps++;
            this.writeTrap = func;
            this.writeDataOrig = this.writeData;
            this.writePairOrig = this.writePair;
            this.writeQuadOrig = this.writeQuad;
            this.writeData = function writeDataTrap(offset, value) {
                block.writeTrap(block.addr, offset, value);
                block.writeDataOrig(offset, value);
            };
            this.writePair = function writePairTrap(offset, value) {
                block.writeTrap(block.addr, offset, value);
                block.writeTrap(block.addr, offset + 1, value);
                block.writePairOrig(offset, value);
            };
            this.writeQuad = function writeQuadTrap(offset, value) {
                block.writeTrap(block.addr, offset, value);
                block.writeTrap(block.addr, offset + 1, value);
                block.writeTrap(block.addr, offset + 2, value);
                block.writeTrap(block.addr, offset + 3, value);
                block.writeQuadOrig(offset, value);
            };
            return true;
        }
        if (this.writeTrap == func) {
            this.nWriteTraps++;
            return true
        }
        return false;
    }

    /**
     * untrapRead(func)
     *
     * @this {Memory}
     * @param {function((number|undefined), number, number)} func (receives the base address, offset, and value read)
     * @returns {boolean} true if untrap successful, false if no (or another) trap was in effect
     */
    untrapRead(func)
    {
        if (this.nReadTraps && this.readTrap == func) {
            if (!--this.nReadTraps) {
                this.readData = this.readDataOrig;
                this.readPair = this.readPairOrig;
                this.readQuad = this.readQuadOrig;
                this.readDataOrig = this.readPairOrig = this.readQuadOrig = this.readTrap = null;
            }

            return true;
        }
        return false;
    }

    /**
     * untrapWrite(func)
     *
     * @this {Memory}
     * @param {function((number|undefined), number, number)} func (receives the base address, offset, and value written)
     * @returns {boolean} true if untrap successful, false if no (or another) trap was in effect
     */
    untrapWrite(func)
    {
        if (this.nWriteTraps && this.writeTrap == func) {
            if (!--this.nWriteTraps) {
                this.writeData = this.writeDataOrig;
                this.writePair = this.writePairOrig;
                this.writeQuad = this.writeQuadOrig;
                this.writeDataOrig = this.writePairOrig = this.writeQuadOrig = this.writeTrap = null;
            }

            return true;
        }
        return false;
    }

    /**
     * loadState(state)
     *
     * Memory and Ports states are loaded by the Bus onLoad() handler, which calls our loadState() handler.
     *
     * @this {Memory}
     * @param {Array} state
     * @returns {boolean}
     */
    loadState(state)
    {
        if (state) {
            let idDevice = state.shift();
            if (this.idDevice == idDevice) {
                this.fDirty = state.shift();
                state.shift();      // formerly fDirtyEver, now unused
                let values = state.shift();
                if (values) this.initValues(this.decompress(values, this.size));
                return true;
            }
        }
        return false;
    }

    /**
     * saveState(state)
     *
     * Memory and Ports states are saved by the Bus onSave() handler, which calls our saveState() handler.
     *
     * @this {Memory}
     * @param {Array} state
     */
    saveState(state)
    {
        state.push(this.idDevice);
        state.push(this.fDirty);
        state.push(false);      // formerly fDirtyEver, now unused
        state.push(this.values? this.compress(this.values) : this.values);
    }
}

/**
 * Memory block types use discrete bits so that enumBlocks() can be passed a set of combined types,
 * by OR'ing the desired types together.
 */
Memory.TYPE = {
    NONE:               0x01,
    READONLY:           0x02,
    READWRITE:          0x04,
    /**
     * The rest are not discrete memory types, but rather sets of types that are handy for enumBlocks().
     */
    READABLE:           0x0E,
    WRITABLE:           0x0C
};

Memory.CLASSES["Memory"] = Memory;

/**
 * @copyright https://www.pcjs.org/modules/v3/rom.js (C) 2012-2025 Jeff Parsons
 */

/** @typedef {{ addr: number, size: number, values: Array.<number>, file: string, reference: string, chipID: string, revision: (number|undefined), colorROM: (string|undefined), backgroundColorROM: (string|undefined) }} */
let ROMConfig;

/**
 * @class {ROM}
 * @unrestricted
 * @property {ROMConfig} config
 */
class ROM extends Memory {
    /**
     * ROM(idMachine, idDevice, config)
     *
     * Sample config:
     *
     *      "rom": {
     *        "class": "ROM",
     *        "addr": 0,
     *        "size": 2048,
     *        "bus": "busIO"
     *        "littleEndian": true,
     *        "file": "ti57le.bin",
     *        "reference": "",
     *        "chipID": "TMC1501NC DI 7741",
     *        "revision": "0",
     *        "bindings": {
     *          "array": "romArrayTI57",
     *          "cellDesc": "romCellTI57"
     *        },
     *        "overrides": ["colorROM","backgroundColorROM"],
     *        "values": [
     *          ...
     *        ]
     *      }
     *
     * @this {ROM}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {ROMConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        config['type'] = Memory.TYPE.READONLY;
        super(idMachine, idDevice, config);
        this.bus.addBlocks(this.config['addr'], this.config['size'], this.config['type'], this);
        this.whenReady(this.onReset.bind(this));

        /**
         * If an "array" binding has been supplied, then create an LED array sufficiently large to represent the
         * entire ROM.  If data.length is an odd power-of-two, then we will favor a slightly wider array over a taller
         * one, by virtue of using Math.ceil() instead of Math.floor() for the columns calculation.
         */
        this.cpu = this.dbg = undefined;
        if (ROM.CLASSES["LED"] && this.bindings[ROM.BINDING.ARRAY]) {
            let rom = this;
            let addrLines = Math.log2(this.values.length) / 2;
            this.cols = Math.pow(2, Math.ceil(addrLines));
            this.rows = (this.values.length / this.cols)|0;
            let configLEDs = {
                "class":            "LED",
                "bindings":         {"container": this.getBindingID(ROM.BINDING.ARRAY)},
                "type":             LED.TYPE.ROUND,
                "cols":             this.cols,
                "rows":             this.rows,
                "color":            this.getDefaultString('colorROM', "green"),
                "backgroundColor":  this.getDefaultString('backgroundColorROM', "black"),
                "persistent":       true
            };
            this.ledArray = new LED(idMachine, idDevice + "LEDs", configLEDs);
            this.clearArray();
            let configInput = {
                "class":        "Input",
                "location":     [0, 0, this.ledArray.widthView, this.ledArray.heightView, this.cols, this.rows],
                "bindings":     {"surface": this.getBindingID(ROM.BINDING.ARRAY)}
            };
            this.ledInput = new Input(idMachine, idDevice + "Input", configInput);
            this.sCellDesc = this.getBindingText(ROM.BINDING.CELLDESC) || "";
            this.ledInput.addHover(function onROMHover(col, row) {
                if (rom.cpu) {
                    let sDesc = rom.sCellDesc;
                    if (col >= 0 && row >= 0) {
                        let offset = row * rom.cols + col;

                        let opcode = rom.values[offset];
                        sDesc = rom.cpu.toInstruction(rom.addr + offset, opcode);
                    }
                    rom.setBindingText(ROM.BINDING.CELLDESC, sDesc);
                }
            });
        }
    }

    /**
     * clearArray()
     *
     * clearBuffer(true) performs a combination of clearBuffer() and drawBuffer().
     *
     * @this {ROM}
     */
    clearArray()
    {
        if (this.ledArray) this.ledArray.clearBuffer(true);
    }

    /**
     * drawArray()
     *
     * This performs a simple drawBuffer(); intended for synchronous updates (eg, step operations);
     * otherwise, you should allow the LED object's async animation handler take care of drawing updates.
     *
     * @this {ROM}
     */
    drawArray()
    {
        if (this.ledArray) this.ledArray.drawBuffer();
    }

    /**
     * loadState(state)
     *
     * If any saved values don't match (presumably overridden), abandon the given state and return false.
     *
     * @this {ROM}
     * @param {Array} state
     * @returns {boolean}
     */
    loadState(state)
    {
        let length, success = true;
        let buffer = state.shift();
        if (buffer && this.ledArray) {
            length = buffer.length;

            if (this.ledArray.buffer.length == length) {
                this.ledArray.buffer = buffer;
                this.ledArray.drawBuffer(true);
            } else {
                this.printf("inconsistent saved LED state (%d), unable to load\n", length);
                success = false;
            }
        }
        /**
         * Version 1.21 and up also saves the ROM contents, since our "mini-debugger" has been updated
         * with an edit command ("e") to enable ROM patching.  However, we prefer to detect improvements
         * in saved state based on the length of the array, not the version number.
         */
        if (state.length) {
            let data = state.shift();
            let length = data && data.length || -1;
            if (this.values.length == length) {
                this.values = data;
            } else {
                this.printf("inconsistent saved ROM state (%d), unable to load\n", length);
                success = false;
            }
        }
        return success;
    }

    /**
     * onPower(on)
     *
     * Called by the Machine device to provide notification of a power event.
     *
     * @this {ROM}
     * @param {boolean} on (true to power on, false to power off)
     */
    onPower(on)
    {
        /**
         * We only care about the first power event, because it's a safe opportunity to find the CPU.
         */
        if (this.cpu === undefined) {
            this.cpu = /** @type {CPU} */ (this.findDeviceByClass("CPU"));
        }
        /**
         * This is also a good time to get access to the Debugger, if any, and pass it symbol information, if any.
         */
        if (this.dbg === undefined) {
            this.dbg = /** @type {Debugger} */ (this.findDeviceByClass("Debugger", false));
            if (this.dbg && this.dbg.addSymbols) this.dbg.addSymbols(this.config['symbols']);
        }
    }

    /**
     * readValue(offset)
     *
     * This overrides the Memory readValue() function so that the LED array, if any, can track ROM accesses.
     *
     * @this {ROM}
     * @param {number} offset
     * @returns {number}
     */
    readValue(offset)
    {
        if (this.ledArray) {
            this.ledArray.setLEDState(offset % this.cols, (offset / this.cols)|0, LED.STATE.ON, LED.FLAGS.MODIFIED);
        }
        return this.values[offset];
    }

    /**
     * saveState(state)
     *
     * @this {ROM}
     * @param {Array} state
     */
    saveState(state)
    {
        if (this.ledArray) {
            state.push(this.ledArray.buffer);
            state.push(this.values);
        }
    }
}

ROM.BINDING = {
    ARRAY:      "array",
    CELLDESC:   "cellDesc"
};

ROM.CLASSES["ROM"] = ROM;

/**
 * @copyright https://www.pcjs.org/modules/v3/cpu.js (C) 2012-2025 Jeff Parsons
 */

/** @typedef {{ addrReset: number }} */
let CPUConfig;

/**
 * @class {CPU}
 * @unrestricted
 * @property {Time} time
 * @property {Debugger} dbg
 * @property {number} addrReset
 * @property {number} nCyclesStart
 * @property {number} nCyclesRemain
 * @property {number} nCyclesSnapped
 * @property {number} regPC
 * @property {number} regPCLast
 */
class CPU extends Device {
    /**
     * CPU(idMachine, idDevice, config)
     *
     * @this {CPU}
     * @param {string} idMachine
     * @param {string} idDevice
     * @property {CPUConfig} config
     */
    constructor(idMachine, idDevice, config)
    {
        config['class'] = "CPU";
        super(idMachine, idDevice, config);

        /**
         * If a Debugger is loaded, it will call connectDebugger().  Having access to the Debugger
         * allows our toString() function to include the instruction, via toInstruction(), and conversely,
         * the Debugger will enjoy access to all our defined register names.
         */
        this.dbg = undefined;

        /**
         * regPC is the CPU's program counter, which all CPUs are required to have.
         *
         * regPCLast is an internal register that snapshots the PC at the start of every instruction;
         * this is useful not only for CPUs that need to support instruction restartability, but also for
         * diagnostic/debugging purposes.
         */
        this.regPC = this.regPCLast = 0;
        this.addrReset = this.config['addrReset'] || 0;

        /**
         * Get access to the Time device, so we can give it our clock and update functions.
         */
        this.time = /** @type {Time} */ (this.findDeviceByClass("Time"));
        this.time.addClock(this);
        this.time.addUpdate(this);

        /**
         * nCyclesStart and nCyclesRemain are initialized on every startClock() invocation.
         * The number of cycles executed during the current burst is nCyclesStart - nCyclesRemain,
         * and the burst is complete when nCyclesRemain has been exhausted (ie, is <= 0).
         */
        this.nCyclesStart = this.nCyclesRemain = this.nCyclesSnapped = 0;
    }

    /**
     * abort(err)
     *
     * Called from startClock() if an exception occurs.
     *
     * @this {CPU}
     * @param {Error} err
     */
    abort(err)
    {
        this.regPC = this.regPCLast;
        this.println(err.message);
        this.time.stop();
    }

    /**
     * connectDebugger(dbg)
     *
     * @this {CPU}
     * @param {Debugger} dbg
     * @returns {Object}
     */
    connectDebugger(dbg)
    {
        this.dbg = dbg;
        return this.registers;
    }

    /**
     * execute(nCycles)
     *
     * Called from startClock() to execute a series of instructions; this is a placeholder which the subclass must override.
     *
     * @this {CPU}
     * @param {number} nCycles
     */
    execute(nCycles)
    {
    }

    /**
     * startClock(nCycles)
     *
     * @this {CPU}
     * @param {number} [nCycles] (default is 0 to single-step)
     * @returns {number} (number of cycles actually "clocked")
     */
    startClock(nCycles = 0)
    {
        this.nCyclesStart = this.nCyclesRemain = nCycles;
        try {
            this.execute(nCycles);
        } catch(err) {
            this.abort(err);
        }
        return this.getClock();
    }

    /**
     * stopClock()
     *
     * Stopping the clock is a simple matter of reducing nCyclesRemain to zero.  However, to compensate
     * for the fact that we didn't do any work for those remaining cycles, we must FIRST reduce nCyclesStart
     * by the number of cycles remaining.
     *
     * @this {CPU}
     */
    stopClock()
    {
        this.nCyclesStart -= this.nCyclesRemain;
        this.nCyclesRemain = this.nCyclesSnapped = 0;
    }

    /**
     * getClock()
     *
     * Returns the number of cycles executed so far during the current burst.
     *
     * @this {CPU}
     * @returns {number}
     */
    getClock()
    {
        return this.nCyclesStart - this.nCyclesRemain;
    }
}

// CPU.CLASSES["CPU"] = CPU;

/**
 * @copyright https://www.pcjs.org/modules/cpu1500.js (C) 2012-2025 Jeff Parsons
 */

/**
 * 64-bit Register
 *
 * @class {Reg64}
 * @unrestricted
 * @property {CPU1500} cpu
 * @property {Array.<number>} digits
 */
class Reg64 extends Device {
    /**
     * Reg64(cpu, id, fInternal)
     *
     * @this {Reg64}
     * @param {CPU1500} cpu
     * @param {string} id
     * @param {boolean} [fInternal]
     */
    constructor(cpu, id, fInternal)
    {
        super(cpu.idMachine, id);
        this.cpu = cpu;
        this.name = id;

        /**
         * Each Reg64 register contains 16 BCD/Hex digits, which we store as 16 independent 4-bit numbers,
         * where [0] is D0, aka DIGIT 0, and [15] is D15, aka DIGIT 15.
         */
        this.digits = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        /**
         * Automatically add direct bindings for this new register and all its digits to the caller's bindings.
         */
        if (!fInternal) {
            let bindings = [];
            let name = "reg" + this.name;
            bindings.push(name);
            cpu.regMap[name] = [this, -1];
            for (let d = 0; d < this.digits.length; d++) {
                name = this.sprintf("reg%s-%02d", this.name, d);
                bindings.push(name);
                cpu.regMap[name] = [this, d];
            }
            cpu.addBindings(bindings);
        }
    }

    /**
     * add(reg, regSrc, range, base)
     *
     * @this {Reg64}
     * @param {Reg64} reg
     * @param {Reg64} regSrc
     * @param {Array.<number>} range
     * @param {number} base
     */
    add(reg, regSrc, range, base)
    {
        let carry = 0;
        for (let i = range[0], j = range[1]; i <= j; i++) {
            this.digits[i] = reg.digits[i] + regSrc.digits[i] + carry;
            carry = 0;
            if (this.digits[i] >= base) {
                this.digits[i] -= base;
                carry = 1;
            }
        }
        if (carry) this.cpu.fCOND = true;
        this.updateR5(range);
    }

    /**
     * get()
     *
     * @this {Reg64}
     * @returns {Array}
     */
    get()
    {
        return this.digits;
    }

    /**
     * init(value, range)
     *
     * @this {Reg64}
     * @param {number} value
     * @param {Array.<number>} range
     * @returns {Reg64}
     */
    init(value, range = [0,15])
    {
        for (let i = 0; i < this.digits.length; i++) {
            this.digits[i] = 0;
        }
        for (let i = range[0], j = range[1]; i <= j; i++) {
            this.digits[i] = value & 0xf;
            value >>>= 4;
        }
        return this;
    }

    /**
     * move(regSrc, range, base)
     *
     * This function has been updated to perform the same "BCD Corrector" logic as add(), per these observations from Claus Buchholz:
     *
     *      "From patent 4,125,867 it sounds like all register transfers go through the ALU, and the "BCD corrector" is part of the ALU.
     *      This quote from column 26 line 25 implies it:
     *
     *          In addition during a store operation the output from one register is applied to the arithmetic unit 40,
     *          the output from the other being inhibited by the STORE signal; thus, the adder does not alter the number being
     *          inputted and outputs the data word back to the other register, thereby storing the contents of one register in both registers.
     *
     *      That quote doesn't mention BCD correction, but other text does. I'm not entirely sure that applies to digit shifts as well
     *      but I wouldn't doubt it."
     *
     * TODO: Determine if shl() and shr() should be updated similarly, and whether this function should update fCOND like add() does
     * (in which case, move() could simply be replaced with a call to add() using an internal zero-constant register).
     *
     * @this {Reg64}
     * @param {Reg64} regSrc
     * @param {Array.<number>} range
     * @param {number} base
     */
    move(regSrc, range, base)
    {
        let carry = 0;
        for (let i = range[0], j = range[1]; i <= j; i++) {
            this.digits[i] = regSrc.digits[i] + carry;
            carry = 0;
            if (this.digits[i] >= base) {
                this.digits[i] -= base;
                carry = 1;
            }
        }
        regSrc.updateR5(range);
    }

    /**
     * set(digits)
     *
     * @this {Reg64}
     * @param {Array} digits
     */
    set(digits)
    {
        if (!digits || digits.length != this.digits.length) return;
        for (let i = 0; i < this.digits.length; i++) this.digits[i] = digits[i];
    }

    /**
     * shl(reg, range)
     *
     * @this {Reg64}
     * @param {Reg64} reg
     * @param {Array.<number>} range
     */
    shl(reg, range)
    {
        let i, j;
        for (i = range[1], j = range[0]; i > j; i--) {
            this.digits[i] = reg.digits[i-1];
        }
        this.digits[i] = 0;
        this.updateR5(range);
    }

    /**
     * shr(reg, range)
     *
     * @this {Reg64}
     * @param {Reg64} reg
     * @param {Array.<number>} range
     */
    shr(reg, range)
    {
        let i, j;
        for (i = range[0], j = range[1]; i < j; i++) {
            this.digits[i] = reg.digits[i+1];
        }
        this.digits[i] = 0;
        this.updateR5(range);
    }

    /**
     * store(reg)
     *
     * STORE is similar to MOVE, but all digits are stored (ie, no mask is involved), and R5 is not affected.
     *
     * @this {Reg64}
     * @param {Reg64} reg
     */
    store(reg)
    {
        for (let i = 0, j = this.digits.length; i < j; i++) {
            this.digits[i] = reg.digits[i];
        }
    }

    /**
     * sub(reg, regSrc, range, base)
     *
     * @this {Reg64}
     * @param {Reg64} reg
     * @param {Reg64} regSrc
     * @param {Array.<number>} range
     * @param {number} base
     */
    sub(reg, regSrc, range, base)
    {
        let carry = 0;
        for (let i = range[0], j = range[1]; i <= j; i++) {
            this.digits[i] = reg.digits[i] - regSrc.digits[i] - carry;
            carry = 0;
            if (this.digits[i] < 0) {
                this.digits[i] += base;
                carry = 1;
            }
        }
        if (carry) this.cpu.fCOND = true;
        this.updateR5(range);
    }

    /**
     * toString(fSpaces)
     *
     * @this {Reg64}
     * @param {boolean} [fSpaces]
     * @returns {string}
     */
    toString(fSpaces = false)
    {
        let s = this.idDevice + '=';
        if (fSpaces && s.length < 3) s += ' ';
        for (let i = this.digits.length - 1; i >= 0; i--) {
            if (fSpaces) {
                s += Device.HexUpperCase[this.digits[i]];
            } else {
                s += Device.HexLowerCase[this.digits[i]] + ((i % 4)? '' : ' ');
            }
        }
        return s;
    }

    /**
     * updateR5(range)
     *
     * @this {Reg64}
     */
    updateR5(range)
    {
        this.cpu.regR5 = this.digits[range[0]];

        if (range[0] < range[1]) {
            this.cpu.regR5 |= this.digits[range[0]+1] << 4;

        }
    }

    /**
     * xchg(regSrc, range)
     *
     * @this {Reg64}
     * @param {Reg64} regSrc
     * @param {Array.<number>} range
     */
    xchg(regSrc, range)
    {
        for (let i = range[0], j = range[1]; i <= j; i++) {
            let d = this.digits[i];
            this.digits[i] = regSrc.digits[i];
            regSrc.digits[i] = d;
        }
        regSrc.updateR5(range);
    }
}

 /** @typedef {Object} */
let Debugger;

/**
 * TMS-150x Calculator CPU
 *
 * Emulates various TMS ("Texas Mos Standard") and TMC ("Texas Mos Custom") CPUs.  The 'type' property of
 * the config object should contain one of the following strings:
 *
 *      TI-57: "TMS-1501" or "TMC-1501" (or simply "1501")
 *      TI-55: "TMS-1503" or "TMC-1503" (or simply "1503")
 *
 * This CPU contains lots of small discrete devices, most of which will be emulated either within this
 * class or within another small container class in the same file, because most of them are either very simple
 * or have unique quirks, so it's not clear there's much reusability.
 *
 * One exception is the ROM, since ROMs are a very common device with very similar characteristics.  Since
 * the Machine class guarantees that the CPU class is initialized after the ROM class, we can look it up in
 * the constructor.
 *
 * @class {CPU1500}
 * @unrestricted
 * @property {Array.<Reg64>} regsO (operational registers A-D)
 * @property {Reg64} regA (alias for regsO[0])
 * @property {Reg64} regB (alias for regsO[1])
 * @property {Reg64} regC (alias for regsO[2])
 * @property {Reg64} regD (alias for regsO[3])
 * @property {Array.<Reg64>} regsX (storage registers X0-X7)
 * @property {Array.<Reg64>} regsY (storage registers Y0-Y7)
 * @property {Reg64} regSupp (alternate register used when the destination must be suppressed)
 * @property {Reg64} regTemp (temporary register used to supply constants or other internal values)
 * @property {number} base (10 or 16)
 * @property {boolean} fCOND (true when a carry has been detected)
 * @property {number} regRAB
 * @property {number} regR5 (least significant masked digit(s) from last arithmetic result)
 * @property {number} regPC (program counter: address of next instruction to decode)
 * @property {number} regKey (current key status, propagated to regR5 at appropriate intervals)
 * @property {Array.<number>} stack (3-level address stack; managed by push() and pop())
 * @property {number} nCyclesClocked
 * @property {Input} input
 * @property {LED} led
 * @property {ROM} rom
 * @property {Time} time
 * @property {number} addrPrev
 * @property {number} addrStop
 * @property {Object} breakConditions
 * @property {number} nStringFormat
 * @property {number} type (one of the CPU1500.TYPE values)
 */
class CPU1500 extends CPU {
    /**
     * CPU1500(idMachine, idDevice, config)
     *
     * Defines the basic elements of the TMS-150x CPU, as illustrated by U.S. Patent No. 4,125,901, Fig. 3 (p. 4)
     *
     * @this {CPU1500}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        let sType = this.getDefaultString('type', "1501");
        this.type = Number.parseInt(sType.slice(-4), 10);

        this.regMap = {};

        /**
         * Four (4) Operational Registers (A-D)
         */
        this.regsO = new Array(4);
        for (let i = 0; i < 4; i++) {
            this.regsO[i] = new Reg64(this, String.fromCharCode(0x41+i));
        }

        /**
         * Aliases for each of the Operational Registers, since some instructions use hard-coded registers,
         * rather than calculating a register index (0-3).
         */
        this.regA = this.regsO[0];
        this.regB = this.regsO[1];
        this.regC = this.regsO[2];
        this.regD = this.regsO[3];

        /**
         * Eight (8) Storage Registers (X0-X7)
         */
        this.regsX = new Array(8);
        for (let i = 0; i < 8; i++) {
            this.regsX[i] = new Reg64(this, "X" + i);
        }

        /**
         * Eight (8) Storage Registers (Y0-Y7)
         */
        this.regsY = new Array(8);
        for (let i = 0; i < 8; i++) {
            this.regsY[i] = new Reg64(this, "Y" + i);
        }

        this.regSupp = new Reg64(this, "Supp", true);
        this.regTemp = new Reg64(this, "Temp", true);

        this.base = 10;
        this.fCOND = false;

        /**
         * RAB (Register Address Buffer) is a 3-bit register "selectively loadable by the I4-I6 bits of an
         * instruction word" and "also selectively loadable from the three least significant bits of the number
         * stored in R5 register".
         */
        this.regRAB = 0;

        /**
         * R5 is "an eight bit shift register which may be selectively loaded from either the serial output from
         * arithmetic unit" or "may be loaded on lines KR1-3 and KR5-7 via gates from keyboard logic (at which
         * times the MSB of each digit in Register R5 is loaded with a zero via gates according to the keyboard code
         * code indicated in Table II)".
         */
        this.regR5 = 0;

        /**
         * The "Output Register" is twelve bit register, one bit for each digit of the display.  This essentially
         * provides column information for the LED display, while the next register (regScanGen) provides row
         * information.
         *
         * However, this is only necessary if we decide to simulate the internal operation of the Display Decoder
         * and Keyboard Scanner.
         *
         * Refer to patent Fig. 11c (p. 28)
         */
        // this.regOut = 0;

        /**
         * The "Scan Generator Counter" is a 3-bit register.  It is updated once each instruction cycle.
         * It "does not count sequentially, but during eight instruction cycle provides the three bit binary
         * representations of zero through seven."  Here's the sequence from "Reference A" of Fig. 11e:
         *
         *                 DECODE    DISP     KBD
         *      W   V   U     SEG     SEG    SCAN    HOLD
         *      ---------  ------    ----    ----    ----
         *      1   1   1       D       -       -       1
         *      1   1   0       A       D     KS6       1
         *      1   0   1       B       A     KS5       1
         *      0   1   0       C       B     KS2       1
         *      1   0   0       E       C     KS4       1
         *      0   0   0       F       E     KS0       1
         *      0   0   1       G       F     KS1       1
         *      0   1   1       P       G     KS3       0
         *      ---------  ------    ----    ----    ----
         *      1   1   1       D       P     KS7       1
         *      1   1   0       A       D     KS6       1
         *      ...
         *
         * However, this is only necessary if we decide to simulate the internal operation of the Display Decoder
         * and Keyboard Scanner.
         *
         * Refer to patent Fig. 11e (p. 30)
         */
        // this.regScanGen = 0;

        /**
         * The "Segment/Keyboard Scan" is an 8-bit register "arranged as a ring counter for shifting a logical zero
         * to a different stage during each instruction cycle....  [It is] further interconnected with the RESET signal
         * for inserting a logical one into all stages of the counter."  The outputs from the stages are connected to
         * SEG D, followed by SEG A, SEG B, SEG C, SEG E, SEG F, SEG G, and SEG P.
         *
         * However, this is only necessary if we decide to simulate the internal operation of the Display Decoder
         * and Keyboard Scanner.
         *
         * Refer to patent Fig. 11b (p. 27)
         */
        // this.regSegKbdScan = 0xff;

        /**
         * The "State Time Generator" is represented by a 5-bit register that contains values 00000b through 11111b
         * for each of the 32 state times that occur during a single instruction cycle.  And since each "state time"
         * consists of four clock pulses, designated Φ1, P1, Φ2, and P2, we keep track of which pulse we're on, too.
         *
         * However, these are only necessary if we decide to simulate the internal operation of the Display Decoder
         * and Keyboard Scanner.
         *
         * Refer to patent Fig. 11f (p. 31)
         */
        // this.regStateTime = 0;
        // this.regPulseTime = 0;

        /**
         * The "Program Counter" (regPC) is an 11-bit register that automatically increments unless a HOLD signal
         * is applied, effectively locking execution on a single instruction.
         *
         * regPC is a standard register that has already been initialized by the superclass.
         */
        // this.regPC = 0;

        /**
         * regPCLast is a non-standard register that simply snapshots the PC at the start of every
         * instruction; this is useful not only for CPUs that need to support instruction restartability,
         * but also for diagnostic/debugging purposes.
         *
         * regPCLast is a standard register that has already been initialized by the superclass.
         */
        // this.regPCLast = this.regPC;

        /**
         * If non-zero, a key is being pressed.  Bits 0-3 are the row (0-based) and bits 4-7 are the col (1-based).
         */
        this.regKey = 0;

        /**
         * The "Subroutine Stack".  "When an unconditional branch instruction is decoded by branch logic 32b, the
         * CALL signal goes to zero permitting the present ROM address plus one to be loaded into subroutine stack
         * register 33a....  Addresses previously loaded into subroutine stack/registers 33a and 33b are shifted
         * to registers 33b and 33c."
         *
         * We initialize it with "guard values" (-1) to help detect the presence of invalid data, and to catch stack
         * overflow/underflow errors.
         *
         * Refer to patent Fig. 7a (p. 9)
         */
        this.stack = [-1, -1, -1];

        /**
         * Get access to the Input device, so we can add our click functions.
         */
        this.input = /** @type {Input} */ (this.findDevice(this.config['input']));
        this.input.addInput(this.onInput.bind(this));

        /**
         * Get access to the LED device, so we can update its display.
         */
        this.led = /** @type {LED} */ (this.findDevice(this.config['output'], false));

        /**
         * Get access to the Bus device, so we have access to the address space.
         * NOTE: We're kinda breaking the rules about searching for these devices by class,
         * simply because we know that this particular machine has only one Bus and one ROM.
         */
        this.bus = /** @type {Bus} */ (this.findDeviceByClass("Bus"));
        this.rom = /** @type {ROM} */ (this.findDeviceByClass("ROM"));

        /**
         * To add support for indicators like "2nd" and "INV", I use a set of flags to reflect
         * the state of the external indicator.  They are initially undefined and will be updated
         * by updateIndicators() whenever the internal and external states differ.
         */
        this.f2nd = this.fINV = this.angleMode = undefined;

        /**
         * The following set of properties are all debugger-related; see onCommand().
         */
        this.addrPrev = -1;
        this.addrStop = -1;
        this.breakConditions = {};
        this.nStringFormat = CPU1500.SFORMAT.DEFAULT;
        this.addHandler(CPU1500.HANDLER.COMMAND, this.onCommand.bind(this));
    }

    /**
     * checkBreakCondition(c)
     *
     * @this {CPU1500}
     * @param {string} c
     * @returns {boolean}
     */
    checkBreakCondition(c)
    {
        if (this.breakConditions[c]) {
            this.breakConditions[c] = false;
            this.println("break on " + CPU1500.BREAK[c]);
            this.time.stop();
            return true;
        }
        return false;
    }

    /**
     * clearDisplays()
     *
     * There are certain events (eg, power off, reset) where it is wise to clear all associated displays,
     * such as the LED display, the ROM activity array (if any), and assorted calculator indicators.
     *
     * @this {CPU1500}
     */
    clearDisplays()
    {
        if (this.led) this.led.clearBuffer(true);
        if (this.rom) this.rom.clearArray();
        this.updateIndicators(false);
    }

    /**
     * execute(nCycles)
     *
     * NOTE: TI patents imply that the TI-57 would have a standard cycle time of 0.625us, which translates to
     * 1,600,000 cycles per second.  However, my crude tests with a real device suggest that the TI-57 actually
     * ran at around 40% of that speed, which is why you'll see all my configuration files specifying 650,000
     * cycles per second instead.  But, for purposes of the following discussion, we'll continue to assume a cycle
     * time of 0.625us.
     *
     * Every set of four cycles is designated a "state time".  Within a single state time (2.5us), the four cycles
     * are designated Φ1, P1, Φ2, and P2.  Moreover, one state time is required to transfer 2 bits from a data word
     * register.  Since a data word consists of 16 BCD digits (ie, 64 bits), 32 state times (80us) are required to
     * "clock" all the bits from one register to another.  This total time is referred to as an instruction cycle.
     *
     * Note that some instructions (ie, the DISP instruction) slow the delivery of cycles, such that one state time
     * is 10us instead of 2.5us, and therefore the entire instruction cycle will take 320us instead of 80us.
     *
     * We're currently simulating a full 32 "state times" (128 cycles aka CPU1500.OP_CYCLES) per instruction, since
     * we don't perform discrete simulation of the Display Decoder/Keyboard Scanner circuitry.  See opDISP() for
     * an example of an operation that imposes additional cycle overhead.
     *
     * @this {CPU1500}
     * @param {number} nCycles
     */
    execute(nCycles)
    {
        while (this.nCyclesRemain > 0) {
            if (this.addrStop == this.regPC) {
                this.addrStop = -1;
                this.println("break");
                this.time.stop();
                break;
            }
            let opcode = this.bus.readData(this.regPC);
            let addr = this.regPCLast = this.regPC;
            this.regPC = (addr + 1) & this.bus.addrLimit;
            if (opcode == undefined || !this.decode(opcode, addr)) {
                this.regPC = this.regPCLast;
                this.println("unimplemented opcode");
                this.time.stop();
                break;
            }
            this.nCyclesRemain -= CPU1500.OP_CYCLES;
        }
        if (nCycles <= 0) {
            let cpu = this;
            this.time.doOutside(function clockOutside() {
                cpu.rom.drawArray();
                cpu.print(cpu.toString());
            });
        }
    }

    /**
     * stopClock()
     *
     * @this {CPU1500}
     */
    stopClock()
    {
        this.nCyclesRemain = 0;
    }

    /**
     * getClock()
     *
     * Returns the number of cycles executed so far during the current burst.
     *
     * @this {CPU1500}
     * @returns {number}
     */
    getClock()
    {
        return this.nCyclesStart - this.nCyclesRemain;
    }

    /**
     * decode(opcode, addr)
     *
     * Most operations are performed inline, since this isn't a super complex instruction set, but
     * a few are separated into their own handlers (eg, opDISP).
     *
     * @this {CPU1500}
     * @param {number} opcode (opcode)
     * @param {number} addr (of the opcode)
     * @returns {boolean} (true if opcode successfully decoded, false if unrecognized or unsupported)
     */
    decode(opcode, addr)
    {
        if (opcode & 0x1000) {
            if (opcode & 0x0800) {  // BRC/BRNC
                /**
                 * As TI patent 4078251 states:
                 *
                 *      There being only ten bits in the address for the “branch on condition” instruction, when the
                 *      branch is executed only the ten least significant bits are loaded into the 11 bit address register
                 *      of program counter 32a. The most significant bit in the program counter remains unchanged.
                 */
                if (!!(opcode & 0x0400) == this.fCOND) {
                    this.regPC = (this.regPC & 0x0400) | (opcode & 0x03FF);
                }
            } else {                // CALL
                /**
                 * As TI patent 4078251 states:
                 *
                 *      Since the “branch unconditionally” address contains 11 bits and since the program counter 32a
                 *      contains 11 bits, the “branch unconditionally” instruction can cause the branch anywhere within ROM.
                 */
                this.push(this.regPC);
                this.regPC = opcode & 0x07FF;
            }
            this.fCOND = false;
            return true;
        }

        let range, regSrc, regResult, iOp, base;
        let j, k, l, n, d, b, mask = opcode & CPU1500.IW_MF.MASK;

        switch(mask) {
        case CPU1500.IW_MF.MMSD:    // 0x0000: Mantissa Most Significant Digit (D12)
        case CPU1500.IW_MF.ALL:     // 0x0100: (D0-D15)
        case CPU1500.IW_MF.MANT:    // 0x0200: Mantissa (D2-D12)
        case CPU1500.IW_MF.MAEX:    // 0x0300: Mantissa and Exponent (D0-D12)
        case CPU1500.IW_MF.LLSD:    // 0x0400: Mantissa Least Significant Digit (D2)
        case CPU1500.IW_MF.EXP:     // 0x0500: Exponent (D0-D1)
        case CPU1500.IW_MF.FMAEX:   // 0x0700: Flag and Mantissa and Exponent (D0-D13)
        case CPU1500.IW_MF.D14:     // 0x0800: (D14)
        case CPU1500.IW_MF.FLAG:    // 0x0900: (D13-D15)
        case CPU1500.IW_MF.DIGIT:   // 0x0a00: (D14-D15)
        case CPU1500.IW_MF.D13:     // 0x0d00: (D13)
        case CPU1500.IW_MF.D15:     // 0x0f00: (D15)
            range = CPU1500.RANGE[mask];


            j = (opcode & CPU1500.IW_MF.J_MASK) >> CPU1500.IW_MF.J_SHIFT;
            k = (opcode & CPU1500.IW_MF.K_MASK) >> CPU1500.IW_MF.K_SHIFT;
            l = (opcode & CPU1500.IW_MF.L_MASK) >> CPU1500.IW_MF.L_SHIFT;
            n = (opcode & CPU1500.IW_MF.N_MASK);
            iOp = (n? CPU1500.OP.SUB : CPU1500.OP.ADD);
            base = (opcode >= CPU1500.IW_MF.D14? 16 : this.base);

            switch(k) {
            case 0:
            case 1:
            case 2:
            case 3:
                regSrc = this.regsO[k];
                break;
            case 4:
                regSrc = this.regTemp.init(1, range);
                break;
            case 5:
                iOp = (n? CPU1500.OP.SHR : CPU1500.OP.SHL);
                break;
            case 6:
                regSrc = this.regTemp.init(this.regR5 & 0xf, range);
                break;
            case 7:
                regSrc = this.regTemp.init(this.regR5 & 0xff, range);
                break;
            }

            switch(l) {
            case 0:
                regResult = this.regsO[j];
                break;
            case 1:
                regResult = (k < 4? this.regsO[k] : undefined);
                break;
            case 2:
                regResult = (k < 5? this.regSupp : (k == 5? this.regsO[j] : undefined));
                break;
            case 3:
                if (!n) {

                    this.regA.xchg(regSrc, range);
                } else {

                    this.regsO[j].move(regSrc, range, base);
                }
                return true;
            }

            if (!regResult) break;

            switch(iOp) {
            case CPU1500.OP.ADD:
                regResult.add(this.regsO[j], regSrc, range, base);
                break;
            case CPU1500.OP.SUB:
                regResult.sub(this.regsO[j], regSrc, range, base);
                break;
            case CPU1500.OP.SHL:
                regResult.shl(this.regsO[j], range);
                break;
            case CPU1500.OP.SHR:
                regResult.shr(this.regsO[j], range);
                break;
            }
            return true;

        case CPU1500.IW_MF.FF:      // 0x0c00: (used for flag operations)
            j = (opcode & CPU1500.IW_FF.J_MASK) >> CPU1500.IW_FF.J_SHIFT;
            d = (opcode & CPU1500.IW_FF.D_MASK) >> CPU1500.IW_FF.D_SHIFT;
            b = 1 << ((opcode & CPU1500.IW_FF.B_MASK) >> CPU1500.IW_FF.B_SHIFT);
            if (!d) break;
            d += 12;
            /**
             * For the following bit operations (SET, RESET, TEST, and TOGGLE, displayed by toInstruction()
             * as "SET", "CLR", "TST", and "NOT") are rather trivial, so I didn't bother adding Reg64 methods
             * for them (eg, setBit, resetBit, testBit, toggleBit).
             */
            switch(opcode & CPU1500.IW_FF.MASK) {
            case CPU1500.IW_FF.SET:
                this.regsO[j].digits[d] |= b;
                break;
            case CPU1500.IW_FF.RESET:
                this.regsO[j].digits[d] &= ~b;
                break;
            case CPU1500.IW_FF.TEST:
                if (this.regsO[j].digits[d] & b) this.fCOND = true;
                break;
            case CPU1500.IW_FF.TOGGLE:
                this.regsO[j].digits[d] ^= b;
                break;
            }
            return true;

        case CPU1500.IW_MF.PF:      // 0x0e00: (used for misc operations)
            switch(opcode & CPU1500.IW_PF.MASK) {
            case CPU1500.IW_PF.STYA:        // 0x0000: Contents of storage register Y defined by RAB loaded into operational register A (Yn -> A)
                this.regA.store(this.regsY[this.regRAB]);
                break;
            case CPU1500.IW_PF.RABI:        // 0x0001: Bits 4-6 of instruction are stored in RAB
                this.regRAB = (opcode >> 4) & 0x7;
                break;
            case CPU1500.IW_PF.BRR5:        // 0x0002: Branch to R5
                /**
                 * TODO: Determine whether this type of BRANCH should set fCOND to false like other branches do
                 */
                this.regPC = this.regR5;
                break;
            case CPU1500.IW_PF.RET:         // 0x0003: Return
                this.fCOND = false;
                this.regPC = this.pop();
                break;
            case CPU1500.IW_PF.STAX:        // 0x0004: Contents of operational register A loaded into storage register X defined by RAB (A -> Xn)
                this.regsX[this.regRAB].store(this.regA);
                break;
            case CPU1500.IW_PF.STXA:        // 0x0005: Contents of storage register X defined by RAB loaded into operational register A (Xn -> A)
                this.regA.store(this.regsX[this.regRAB]);
                break;
            case CPU1500.IW_PF.STAY:        // 0x0006: Contents of operational register A loaded into storage register Y defined by RAB (A -> Yn)
                this.regsY[this.regRAB].store(this.regA);
                break;
            case CPU1500.IW_PF.DISP:        // 0x0007: registers A and B are output to the Display Decoder and the Keyboard is scanned
                return this.opDISP();
            case CPU1500.IW_PF.BCDS:        // 0x0008: BCD set: enables BCD corrector in arithmetic unit
                this.base = 10;
                break;
            case CPU1500.IW_PF.BCDR:        // 0x0009: BCD reset: disables BCD corrector in arithmetic unit (which then functions as hexadecimal)
                this.base = 16;
                break;
            case CPU1500.IW_PF.RABR5:       // 0x000A: LSD of R5 (3 bits) is stored in RAB
                this.regRAB = this.regR5 & 0x7;
                break;
            default:
                return false;
            }
            return true;

        case CPU1500.IW_MF.RES1:    // 0x0600: (reserved)
        case CPU1500.IW_MF.RES2:    // 0x0b00: (reserved)
        default:
            break;
        }
        return false;
    }

    /**
     * loadState(state)
     *
     * If any saved values don't match (possibly overridden), abandon the given state and return false.
     *
     * @this {CPU1500}
     * @param {Array|Object} state
     * @returns {boolean}
     */
    loadState(state)
    {
        let stateCPU = state['stateCPU'] || state[0];
        if (!stateCPU || !stateCPU.length) {
            this.println("invalid saved state");
            return false;
        }
        let version = stateCPU.shift();
        if ((version|0) !== (+CPU1500.VERSION|0)) {
            this.printf("saved state version mismatch: %3.2f\n", version);
            return false;
        }
        try {
            this.regsO.forEach((reg) => reg.set(stateCPU.shift()));
            this.regsX.forEach((reg) => reg.set(stateCPU.shift()));
            this.regsY.forEach((reg) => reg.set(stateCPU.shift()));
            this.regSupp.set(stateCPU.shift());
            this.regTemp.set(stateCPU.shift());
            this.base = stateCPU.shift();
            this.fCOND = stateCPU.shift();
            this.regRAB = stateCPU.shift();
            this.regR5 = stateCPU.shift();
            this.regPC = stateCPU.shift();
            this.stack = stateCPU.shift();
            this.regKey = stateCPU.shift();
        } catch(err) {
            this.println("CPU state error: " + err.message);
            return false;
        }
        let stateROM = state['stateROM'] || state[1];
        if (stateROM && this.rom) {
            if (!this.rom.loadState(stateROM)) {
                return false;
            }
        }
        return true;
    }

    /**
     * onCommand(aTokens)
     *
     * Processes commands for our "mini-debugger".
     *
     * @this {CPU1500}
     * @param {Array.<string>} aTokens
     * @returns {string|undefined}
     */
    onCommand(aTokens)
    {
        let result = "";
        let c, condition, count = 0, values = [];
        let s = aTokens[1];
        let addr = Number.parseInt(aTokens[2], 16);
        if (isNaN(addr)) addr = -1;
        let nValues = Number.parseInt(aTokens[3], 10) || 8;

        for (let i = 3; i < aTokens.length; i++) {
            values.push(Number.parseInt(aTokens[i], 16));
        }

        this.nStringFormat = CPU1500.SFORMAT.DEFAULT;

        switch(s[0]) {
        case 'b':
            c = s.substr(1);
            if (c == 'l') {
                for (c in CPU1500.BREAK) {
                    condition = CPU1500.BREAK[c];
                    result += "break on " + condition + " (b" + c + "): " + (this.breakConditions[c] || false) + '\n';
                }
                break;
            }
            condition = CPU1500.BREAK[c];
            if (condition) {
                this.breakConditions[c] = !this.breakConditions[c];
                result = "break on " + condition + " (b" + c + "): " + this.breakConditions[c];
            } else {
                if (c) result = "unrecognized break option '" + c + "'";
            }
            break;

        case 'e':
            for (let i = 0; i < values.length; i++) {
                /**
                 * We use the readDirect() and writeDirect() functions, so that reads won't affect the
                 * ROM LED array (if any) and writes will be allowed (since ROM is normally unwritable).
                 */
                let prev = this.bus.readDirect(addr);
                if (prev == undefined) break;
                this.bus.writeDirect(addr, values[i]);
                result += this.sprintf("%#06x: %#06x changed to %#06x\n", addr, prev, values[i]);
                count++;
                addr++;
            }
            result += this.sprintf("%d locations updated\n", count);
            break;

        case 'g':
            if (this.time.start()) {
                this.addrStop = addr;
            } else {
                result = "already started\n";
            }
            break;

        case 'h':
            if (!this.time.stop()) result = "already stopped\n";
            break;

        case 't':
            if (s[1] == 'c') this.nStringFormat = CPU1500.SFORMAT.COMPACT;
            nValues = Number.parseInt(aTokens[2], 10) || 1;
            this.time.onStep(nValues);
            break;

        case 'r':
            if (s[1] == 'c') this.nStringFormat = CPU1500.SFORMAT.COMPACT;
            this.setRegister(s.substr(1), addr);
            result += this.toString(s[1]);
            break;

        case 'u':
            addr = (addr >= 0? addr : (this.addrPrev >= 0? this.addrPrev : this.regPC));
            while (nValues--) {
                let opcode = this.rom && this.bus.readDirect(addr);
                if (opcode == undefined) break;
                result += this.toInstruction(addr++, opcode);
            }
            this.addrPrev = addr;
            break;

        case '?':
            result = "additional commands:\n";
            CPU1500.COMMANDS.forEach((cmd) => {result += cmd + '\n';});
            break;

        default:
            if (aTokens[0]) {
                result = "unrecognized command '" + aTokens[0] + "' (try '?')\n";
            }
            break;
        }
        return result;
    }

    /**
     * onInput(col, row)
     *
     * Called by the Input device to provide notification of key presses and releases.
     *
     * Converts a logical (col,row), where the top left keyboard position is (0,0), into an 8-bit physical
     * location value, where bits 0-3 are the row (0-based) and bits 4-7 are the col (1-based).  Moreover,
     * if either col or row is negative, then all bits are cleared.
     *
     * @this {CPU1500}
     * @param {number} col
     * @param {number} row
     */
    onInput(col, row)
    {
        let b = 0;
        if (col >= 0 && row >= 0) {

            b = row | ((col + 1) << 4);
        }
        this.regKey = b;
    }

    /**
     * onLoad(state)
     *
     * Automatically called by the Machine device if the machine's 'autoSave' property is true.
     *
     * @this {CPU1500}
     * @param {Array|Object} state
     * @returns {boolean}
     */
    onLoad(state)
    {
        return state && this.loadState(state)? true : false;
    }

    /**
     * onPower(on)
     *
     * Called by the Machine device to provide notification of a power event.
     *
     * @this {CPU1500}
     * @param {boolean} on (true to power on, false to power off)
     */
    onPower(on)
    {
        if (on) {
            this.time.start();
        } else {
            this.time.stop();
            this.clearDisplays();
        }
    }

    /**
     * onReset()
     *
     * Called by the Machine device to provide notification of a reset event.
     *
     * @this {CPU1500}
     */
    onReset()
    {
        this.println("reset");
        this.regPC = 0;
        this.clearDisplays();
        if (!this.time.isRunning()) this.print(this.toString());
    }

    /**
     * onSave(state)
     *
     * Automatically called by the Machine device before all other devices have been powered down (eg, during
     * a page unload event).
     *
     * @this {CPU1500}
     * @param {Array} state
     */
    onSave(state)
    {
        this.saveState(state);
    }

    /**
     * onUpdate(fTransition)
     *
     * Enumerate all bindings and update their values.
     *
     * Called by Time's update() function whenever 1) its YIELDS_PER_UPDATE threshold is reached
     * (default is twice per second), 2) a step() operation has just finished (ie, the device is being
     * single-stepped), and 3) a start() or stop() transition has occurred.
     *
     * @this {CPU1500}
     * @param {boolean} [fTransition]
     */
    onUpdate(fTransition)
    {
        for (let binding in this.bindings) {
            let regMap = this.regMap[binding];
            if (regMap) {
                let sValue;
                let reg = regMap[0];
                let digit = regMap[1];
                if (digit < 0) {
                    sValue = reg.toString();
                } else {
                    sValue = Device.HexUpperCase[reg.digits[digit]];
                }
                this.setBindingText(binding, sValue);
            }
        }
        if (fTransition && !this.time.isRunning()) {
            this.rom.drawArray();
            this.print(this.toString());
        }
    }

    /**
     * opDISP()
     *
     * Handles the DISP opcode.  The following details/tables are from the TI patents:
     *
     *      Register A and Register B are outputted to the display decoder and the keyboard is scanned.
     *      A closed keyboard switch loads K5 and sets condition latch.
     *
     *      Display decoder receives a data representing numerals to be displayed from operational register A.
     *
     *      Display decoder is also responsive to the data from operational register B, which indicates where
     *      the decimal point is to be displayed among the numerals, whether minus signs are to be provided,
     *      and which digits are to be blanked, according to the codes listed in Table III.
     *
     *      TABLE II
     *
     *          Register R5
     *          --------------------------------
     *             7   6   5   4   3   2   1   0
     *           KR8 KR7 KR6 KR5 KR4 KR3 KR2 KR1
     *
     *            K             KS (Keyboard Line Actuated)
     *          -------------------------------------------
     *           001            K1
     *           010            K2
     *           011            K3
     *           100            K4
     *           101            K5
     *
     *            K             KS (Segment Scan Line Actuated)
     *          -----------------------------------------------
     *           000            KS0     (SEG E)
     *           001            KS1     (SEG F)
     *           010            KS2     (SEG B)
     *           011            KS3     (SEG G)
     *           100            KS4     (SEG C)
     *           101            KS5     (SEG A)
     *           110            KS6     (SEG D/D12)
     *
     *      TABLE III
     *
     *          Register B
     *          Control Code    Function
     *          ------------    ------------------------------------------------------------
     *           1XXX           Display digit is blanked in the corresponding digit position
     *           0XX1           Turns on minus sign (Segment G) in corresponding digit position
     *           XX1X           Turns on decimal point and digit specified by register A in corresponding digit position
     *           0XX0           Turns on digit specified by Register A in corresponding digit position
     *
     * @this {CPU1500}
     * @returns {boolean} (true to indicate the opcode was successfully decoded)
     */
    opDISP()
    {
        this.checkBreakCondition('o');

        if (this.led) {
            for (let col = 0, iDigit = 11; iDigit >= 0; col++, iDigit--) {
                let ch;
                if (this.regB.digits[iDigit] & 0x8) {
                    ch = ' ';
                }
                else if (this.regB.digits[iDigit] & 0x1) {
                    ch = '-';
                }
                else {
                    ch = Device.HexUpperCase[this.regA.digits[iDigit]];
                }
                if (this.led.setLEDState(col, 0, ch, (this.regB.digits[iDigit] & 0x2)? LED.FLAGS.PERIOD : 0)) {
                    this.checkBreakCondition('om');
                }
            }
            this.updateIndicators();
        }

        /**
         * The TI patents indicate that DISP operations slow the clock by a factor of 4, and on top of
         * that, the display scan generator uses a HOLD signal to prevent the Program Counter from being
         * incremented while it cycles through all 8 possible segments for all digits, so the total delay
         * imposed by DISP is a factor of 32.  Since every instruction already accounts for OP_CYCLES once,
         * I need to account for it here 31 more times.
         */
        this.nCyclesRemain -= CPU1500.OP_CYCLES * 31;

        if (this.regKey) {
            this.regR5 = this.regKey;
            this.fCOND = true;
            this.checkBreakCondition('i');
        }

        return true;
    }

    /**
     * pop()
     *
     * @this {CPU1500}
     * @returns {number}
     */
    pop()
    {
        /**
         * Normally, you would simply decrement a stack pointer, but that's not how this stack was implemented.
         */
        let addr = this.stack[0];
        let i = 0, j = this.stack.length - 1;
        while (i < j) this.stack[i] = this.stack[++i];
        this.stack[i] = -1;

        return addr;
    }

    /**
     * push(addr)
     *
     * @this {CPU1500}
     * @param {number} addr
     */
    push(addr)
    {
        /**
         * Normally, you would simply increment a stack pointer, but that's not how this stack was implemented.
         */
        let i = this.stack.length - 1;
        /**
         * Apparently, legitimate values are allowed to fall off the end of the stack, so we can't assert overflow.
         *
         *
         */
        while (i > 0) this.stack[i] = this.stack[--i];
        this.stack[0] = addr;
    }

    /**
     * saveState(state)
     *
     * @this {CPU1500}
     * @param {Array} state
     */
    saveState(state)
    {
        let stateCPU = [];
        let stateROM = [];
        stateCPU.push(+CPU1500.VERSION);
        this.regsO.forEach((reg) => stateCPU.push(reg.get()));
        this.regsX.forEach((reg) => stateCPU.push(reg.get()));
        this.regsY.forEach((reg) => stateCPU.push(reg.get()));
        stateCPU.push(this.regSupp.get());
        stateCPU.push(this.regTemp.get());
        stateCPU.push(this.base);
        stateCPU.push(this.fCOND);
        stateCPU.push(this.regRAB);
        stateCPU.push(this.regR5);
        stateCPU.push(this.regPC);
        stateCPU.push(this.stack);
        stateCPU.push(this.regKey);
        if (this.rom) this.rom.saveState(stateROM);
        state.push(stateCPU);
        state.push(stateROM);
    }

    /**
     * setRegister(name, value)
     *
     * TODO: Even though this CPU implementation contains its own "mini-debugger", it should eventually be
     * changed to use the Device register services to define/get/set registers; for now, this override suffices.
     *
     * @this {CPU1500}
     * @param {string} name
     * @param {number} value
     * @returns {boolean}
     */
    setRegister(name, value)
    {
        if (name && value >= 0) {
            switch(name) {
            case "pc":
                this.regPC = value;
                return true;
            default:
                this.println("unrecognized register: " + name);
                break;
            }
        }
        return false;
    }

    /**
     * toInstruction(addr, opcode, fCompact)
     *
     * Returns a string representation of the specified instruction.
     *
     * The TI-57 patents suggest mnemonics for some of the instructions, but not all, so I've taken
     * some liberties in the interests of clarity and familiarity.  Special-purpose instructions like
     * "BCDS" and "BCDR" are displayed as-is, but for more general-purpose instructions, I've adopted
     * the following format:
     *
     *      operation   destination,input(s)[,mask]
     *
     * Instructions that the patent refers to as "STYA", "STAY", "STXA", and "STAX" are all displayed
     * as "STORE" instructions; eg, instead of "STAX", I use:
     *
     *      STORE       X[RAB],A
     *
     * Instructions that use masks are displayed as either "LOAD", "MOVE", or "XCHG".  If the result
     * of the operation is suppressed, the destination will be displayed as "NUL" instead of a register.
     * And if the inputs are being added, subtracted, shifted left, or shifted right, they will be
     * displayed with "+", "-", "<<", or ">>", respectively.  Finally, the 16-digit mask is displayed,
     * as a series of hex digits rather than the unmemorable names used in the patents (eg, MMSD, FMAEX,
     * etc).  I do use the patent nomenclature internally, just not for display purposes.
     *
     * @this {CPU1500}
     * @param {number} addr
     * @param {number|undefined} [opcode]
     * @param {boolean} [fCompact]
     * @returns {string}
     */
    toInstruction(addr, opcode, fCompact = false)
    {
        let sOp = "???", sOperands = "";

        if (opcode & 0x1000) {
            let v;
            if (opcode & 0x0800) {
                sOp = "BR";
                if (opcode & 0x0400) {
                    sOp += "C";
                } else {
                    sOp += "NC";
                }
                v = (addr & 0x0400) | (opcode & 0x03FF);
            } else {
                sOp = "CALL";
                v = opcode & 0x07FF;
            }
            sOperands = this.sprintf("%#06x", v);
        }
        else if (opcode >= 0) {
            let d, j, k, l, n;
            let mask = opcode & CPU1500.IW_MF.MASK;
            let sMask, sOperator, sDst, sSrc, sStore;

            switch(mask) {
            case CPU1500.IW_MF.MMSD:    // 0x0000: Mantissa Most Significant Digit (D12)
            case CPU1500.IW_MF.ALL:     // 0x0100: (D0-D15)
            case CPU1500.IW_MF.MANT:    // 0x0200: Mantissa (D2-D12)
            case CPU1500.IW_MF.MAEX:    // 0x0300: Mantissa and Exponent (D0-D12)
            case CPU1500.IW_MF.LLSD:    // 0x0400: Mantissa Least Significant Digit (D2)
            case CPU1500.IW_MF.EXP:     // 0x0500: Exponent (D0-D1)
            case CPU1500.IW_MF.FMAEX:   // 0x0700: Flag and Mantissa and Exponent (D0-D13)
            case CPU1500.IW_MF.D14:     // 0x0800: (D14)
            case CPU1500.IW_MF.FLAG:    // 0x0900: (D13-D15)
            case CPU1500.IW_MF.DIGIT:   // 0x0a00: (D14-D15)
            case CPU1500.IW_MF.D13:     // 0x0d00: (D13)
            case CPU1500.IW_MF.D15:     // 0x0f00: (D15)
                sMask = this.toStringMask(mask);
                j = (opcode & CPU1500.IW_MF.J_MASK) >> CPU1500.IW_MF.J_SHIFT;
                k = (opcode & CPU1500.IW_MF.K_MASK) >> CPU1500.IW_MF.K_SHIFT;
                l = (opcode & CPU1500.IW_MF.L_MASK) >> CPU1500.IW_MF.L_SHIFT;
                n = (opcode & CPU1500.IW_MF.N_MASK);

                sOp = "LOAD";
                sOperator = "";
                sDst = "?"; sSrc = "?";

                if (!n) {
                    sOperator = (k == 5? "<<" : "+");
                } else {
                    sOperator = (k == 5? ">>" : "-");
                }

                switch(l) {
                case 0:
                    sDst = CPU1500.OP_INPUTS[j];
                    break;
                case 1:
                    if (k < 4) sDst = CPU1500.OP_INPUTS[k];
                    break;
                case 2:
                    if (k < 6) sDst = "NUL";    // "suppressed" operation
                    break;
                case 3:
                    if (!n) {
                        sOp = "XCHG";
                        if (!j) sDst = "A";     // j != 0 or k >= 4 is invalid
                        if (k < 4) sSrc = CPU1500.OP_INPUTS[k];
                    } else {
                        sOp = "MOVE";
                        sDst = CPU1500.OP_INPUTS[j];
                        sSrc = CPU1500.OP_INPUTS[k];    // k == 5 is invalid
                    }
                    k = -1;
                    break;
                }

                switch(k) {
                case 0:
                case 1:
                case 2:
                case 3:
                    sSrc = CPU1500.OP_INPUTS[j] + sOperator + CPU1500.OP_INPUTS[k];
                    break;
                case 4:
                case 5:
                    sSrc = CPU1500.OP_INPUTS[j] + sOperator + "1";
                    break;
                case 6:
                    sSrc = CPU1500.OP_INPUTS[j] + sOperator + "R5L";
                    break;
                case 7:
                    sSrc = CPU1500.OP_INPUTS[j] + sOperator + "R5";
                    break;
                }
                sOperands = sDst + "," + sSrc + "," + sMask;
                break;

            case CPU1500.IW_MF.FF:      // 0x0c00: (used for flag operations)
                switch(opcode & CPU1500.IW_FF.MASK) {
                case CPU1500.IW_FF.SET:
                    sOp = "SET";
                    break;
                case CPU1500.IW_FF.RESET:
                    sOp = "CLR";
                    break;
                case CPU1500.IW_FF.TEST:
                    sOp = "TST";
                    break;
                case CPU1500.IW_FF.TOGGLE:
                    sOp = "NOT";
                    break;
                }
                sOperands = this.regsO[(opcode & CPU1500.IW_FF.J_MASK) >> CPU1500.IW_FF.J_SHIFT].name;
                d = ((opcode & CPU1500.IW_FF.D_MASK) >> CPU1500.IW_FF.D_SHIFT);
                sOperands += '[' + (d? (d + 12) : '?') + ':' + ((opcode & CPU1500.IW_FF.B_MASK) >> CPU1500.IW_FF.B_SHIFT) + ']';
                break;

            case CPU1500.IW_MF.PF:      // 0x0e00: (used for misc operations)
                sStore = "STORE";
                switch(opcode & CPU1500.IW_PF.MASK) {
                case CPU1500.IW_PF.STYA:    // 0x0000: Contents of storage register Y defined by RAB loaded into operational register A (Yn -> A)
                    sOp = sStore;
                    sOperands = "A,Y[RAB]";
                    break;
                case CPU1500.IW_PF.RABI:    // 0x0001: Bits 4-6 of instruction are stored in RAB
                    sOp = sStore;
                    sOperands = "RAB," + ((opcode & 0x70) >> 4);
                    break;
                case CPU1500.IW_PF.BRR5:    // 0x0002: Branch to R5
                    sOp = "BR";
                    sOperands = "R5";
                    break;
                case CPU1500.IW_PF.RET:     // 0x0003: Return
                    sOp = "RET";
                    break;
                case CPU1500.IW_PF.STAX:    // 0x0004: Contents of operational register A loaded into storage register X defined by RAB (A -> Xn)
                    sOp = sStore;
                    sOperands = "X[RAB],A";
                    break;
                case CPU1500.IW_PF.STXA:    // 0x0005: Contents of storage register X defined by RAB loaded into operational register A (Xn -> A)
                    sOp = sStore;
                    sOperands = "A,X[RAB]";
                    break;
                case CPU1500.IW_PF.STAY:    // 0x0006: Contents of operational register A loaded into storage register Y defined by RAB (A -> Yn)
                    sOp = sStore;
                    sOperands = "Y[RAB],A";
                    break;
                case CPU1500.IW_PF.DISP:    // 0x0007: registers A and B are output to the Display Decoder and the Keyboard is scanned
                    sOp = "DISP";
                    break;
                case CPU1500.IW_PF.BCDS:    // 0x0008: BCD set: enables BCD corrector in arithmetic unit
                    sOp = "BCDS";
                    break;
                case CPU1500.IW_PF.BCDR:    // 0x0009: BCD reset: disables BCD corrector in arithmetic unit (which then functions as hexadecimal)
                    sOp = "BCDR";
                    break;
                case CPU1500.IW_PF.RABR5:   // 0x000A: LSD of R5 (3 bits) is stored in RAB
                    sOp = sStore;
                    sOperands = "RAB,R5L";
                    break;
                default:
                    break;
                }
                break;

            case CPU1500.IW_MF.RES1:    // 0x0600: (reserved)
            case CPU1500.IW_MF.RES2:    // 0x0b00: (reserved)
            default:
                break;
            }
        }
        return this.sprintf(fCompact? "%03X %04X\n" : "%#06x: %#06x  %-8s%s\n", addr, opcode, sOp, sOperands);
    }

    /**
     * toString(options, regs)
     *
     * @this {CPU1500}
     * @param {string} [options]
     * @param {Array.<Reg64>} [regs]
     * @returns {string}
     */
    toString(options = "", regs = null)
    {
        let s = "";
        if (this.nStringFormat) {
            if (this.rom) {
                s += this.toInstruction(this.regPC, this.bus.readDirect(this.regPC), true);
            }
            s += "  ";
            for (let i = 0, n = this.regsO.length; i < n; i++) {
                s += this.regsO[i].toString() + ' ';
            }
            s += "\n ";
            s += " COND=" + (this.fCOND? 1 : 0);
            s += " BASE=" + this.base;
            s += " R5=" + this.sprintf("%02X", this.regR5);
            s += " RAB=" + this.regRAB + " ST=";
            this.stack.forEach((addr, i) => {s += this.sprintf("%03X ", (addr < 0? 0 : (addr & 0xfff)));});
            return s.trim();
        }
        if (regs) {
            for (let i = 0, n = regs.length >> 1; i < n; i++) {
                s += regs[i].toString(true) + '  ' + regs[i+n].toString(true) + '\n';
            }
            return s;
        }
        s += this.toString(options, this.regsO);
        if (options.indexOf('a') >= 0) {
            s += this.toString(options, this.regsX);
            s += this.toString(options, this.regsY);
        }
        s += "COND=" + (this.fCOND? 1 : 0);
        s += " BASE=" + this.base;
        s += " R5=" + this.sprintf("%#04x", this.regR5);
        s += " RAB=" + this.regRAB + ' ';
        this.stack.forEach((addr, i) => {s += this.sprintf("ST%d=%#06x ", i, addr & 0xffff);});
        if (this.rom) {
            s += '\n' + this.toInstruction(this.regPC, this.bus.readDirect(this.regPC));
        }
        this.addrPrev = this.regPC;
        return s;
    }

    /**
     * toStringMask(mask)
     *
     * @this {CPU1500}
     * @param {number} mask
     * @returns {string}
     */
    toStringMask(mask)
    {
        let s = "";
        let range = CPU1500.RANGE[mask];
        for (let i = 0; i < 16; i++) {
            if (!(i % 4)) s = ' ' + s;
            s = (range? (i >= range[0] && i <= range[1]? 'F' : '0') : '?') + s;
        }
        return s;
    }

    /**
     * updateIndicators(on)
     *
     * I made the following observations while running the TI-57's 1501 ROM:
     *
     *      "2nd"   C[14] bit 3 set
     *      "INV"   B[15] bit 2 set
     *      "Deg"   X4[15] == 0x0
     *      "Rad"   X4[15] == 0x4
     *      "Grad"  X4[15] == 0xC
     *
     * Similarly, for the TI-55's 1503 ROM:
     *
     *      "2nd"   B[15] bit 2 set
     *      "INV"   D[15] bit 3 set
     *      "Deg"   C[15] == 0x0
     *      "Rad"   C[15] == 0x1
     *      "Grad"  C[15] == 0x2
     *
     * If this is the first time any of the indicator properties (ie, f2nd, fINV, or angleMode) have been initialized,
     * we will also propagate the LED display color (this.led.color) to the indicator's color, so that the colors of all
     * the elements overlaid on the display match.
     *
     * NOTE: These indicators are specific to locations chosen by the ROM, not by the CPU's hardware, but since the
     * ROMs are closely tied to their respective CPUs, I'm going to cheat and just check the CPU type.
     *
     * @this {CPU1500}
     * @param {boolean} [on] (default is true, to display all active indicators; set to false to force all indicators off)
     */
    updateIndicators(on = true)
    {
        let element;
        let f2nd = on && (this.type == CPU1500.TYPE.TMS1501? !!(this.regC.digits[14] & 0x8) : !!(this.regB.digits[15] & 0x4));
        if (this.f2nd !== f2nd) {
            if ((element = this.bindings['2nd'])) {
                element.style.opacity = f2nd? "1" : "0";
                if (this.f2nd === undefined && this.led) element.style.color = this.led.color;
            }
            this.f2nd = f2nd;
        }
        let fINV = on && (this.type == CPU1500.TYPE.TMS1501? !!(this.regB.digits[15] & 0x4) : !!(this.regD.digits[15] & 0x8));
        if (this.fINV !== fINV) {
            if ((element = this.bindings['INV'])) {
                element.style.opacity = fINV? "1" : "0";
                if (this.fINV === undefined && this.led) element.style.color = this.led.color;
            }
            this.fINV = fINV;
        }
        let angleBits = (this.type == CPU1500.TYPE.TMS1501? (this.regsX[4].digits[15] >> 2) : this.regC.digits[15]);
        let angleMode = on? ((!angleBits)? CPU1500.ANGLEMODE.DEGREES : (angleBits == 1)? CPU1500.ANGLEMODE.RADIANS : CPU1500.ANGLEMODE.GRADIENTS) : CPU1500.ANGLEMODE.OFF;
        if (this.angleMode !== angleMode) {
            if ((element = this.bindings['Deg'])) {
                element.style.opacity = (angleMode == CPU1500.ANGLEMODE.DEGREES)? "1" : "0";
                if (this.angleMode === undefined && this.led) element.style.color = this.led.color;
            }
            if ((element = this.bindings['Rad'])) {
                element.style.opacity = (angleMode == CPU1500.ANGLEMODE.RADIANS)? "1" : "0";
                if (this.angleMode === undefined && this.led) element.style.color = this.led.color;
            }
            if ((element = this.bindings['Grad'])) {
                element.style.opacity = (angleMode == CPU1500.ANGLEMODE.GRADIENTS)? "1" : "0";
                if (this.angleMode === undefined && this.led) element.style.color = this.led.color;
            }
            this.angleMode = angleMode;
        }
    }
}

CPU1500.IW_MF = {           // Instruction Word Mask Field
    MASK:   0x0F00,
    MMSD:   0x0000,     // Mantissa Most Significant Digit (D12)
    ALL:    0x0100,     // (D0-D15)
    MANT:   0x0200,     // Mantissa (D2-D12)
    MAEX:   0x0300,     // Mantissa and Exponent (D0-D12)
    LLSD:   0x0400,     // Mantissa Least Significant Digit (D2)
    EXP:    0x0500,     // Exponent (D0-D1)
    RES1:   0x0600,     // (reserved)
    FMAEX:  0x0700,     // Flag and Mantissa and Exponent (D0-D13)
    D14:    0x0800,     // (D14)
    FLAG:   0x0900,     // (D13-D15)
    DIGIT:  0x0A00,     // (D14-D15)
    RES2:   0x0B00,     // (reserved)
    FF:     0x0C00,     // FF used for additional instruction decoding
    D13:    0x0D00,     // (D13)
    PF:     0x0E00,     // PF used for additional instruction decoding
    D15:    0x0F00,     // (D15)
    J_MASK: 0x00C0,
    J_SHIFT:     6,
    K_MASK: 0x0038,
    K_SHIFT:     3,
    L_MASK: 0x0006,
    L_SHIFT:     1,
    N_MASK: 0x0001
};

CPU1500.IW_FF = {           // Instruction Word Flag Field (used when the Mask Field is FF)
    MASK:   0x0003,
    SET:    0x0000,
    RESET:  0x0001,
    TEST:   0x0002,
    TOGGLE: 0x0003,
    J_MASK: 0x00C0,
    J_SHIFT:     6,
    D_MASK: 0x0030,
    D_SHIFT:     4,
    B_MASK: 0x000C,
    B_SHIFT:     2,
};

CPU1500.IW_PF = {           // Instruction Word Misc Field (used when the Mask Field is PF)
    MASK:   0x000F,
    STYA:   0x0000,     // Contents of storage register Y defined by RAB loaded into operational register A (Yn -> A)
    RABI:   0x0001,     // Bits 4-6 of instruction are stored in RAB
    BRR5:   0x0002,     // Branch to R5
    RET:    0x0003,     // Return
    STAX:   0x0004,     // Contents of operational register A loaded into storage register X defined by RAB (A -> Xn)
    STXA:   0x0005,     // Contents of storage register X defined by RAB loaded into operational register A (Xn -> A)
    STAY:   0x0006,     // Contents of operational register A loaded into storage register Y defined by RAB (A -> Yn)
    DISP:   0x0007,     // registers A and B are output to the Display Decoder and the Keyboard is scanned
    BCDS:   0x0008,     // BCD set: enables BCD corrector in arithmetic unit
    BCDR:   0x0009,     // BCD reset: disables BCD corrector in arithmetic unit (which then functions as hexadecimal)
    RABR5:  0x000A,     // LSD of R5 (3 bits) is stored in RAB
    RES1:   0x000B,     // (reserved)
    RES2:   0x000C,     // (reserved)
    RES3:   0x000D,     // (reserved)
    RES4:   0x000E,     // (reserved)
    RES5:   0x000F      // (reserved)
};

CPU1500.RANGE = {
    [CPU1500.IW_MF.MMSD]:  [12,12],         // 0x0000: Mantissa Most Significant Digit (D12)
    [CPU1500.IW_MF.ALL]:   [0,15],          // 0x0100: (D0-D15)
    [CPU1500.IW_MF.MANT]:  [2,12],          // 0x0200: Mantissa (D2-D12)
    [CPU1500.IW_MF.MAEX]:  [0,12],          // 0x0300: Mantissa and Exponent (D0-D12)
    [CPU1500.IW_MF.LLSD]:  [2,2],           // 0x0400: Mantissa Least Significant Digit (D2)
    [CPU1500.IW_MF.EXP]:   [0,1],           // 0x0500: Exponent (D0-D1)
    [CPU1500.IW_MF.FMAEX]: [0,13],          // 0x0700: Flag and Mantissa and Exponent (D0-D13)
    [CPU1500.IW_MF.D14]:   [14,14],         // 0x0800: (D14)
    [CPU1500.IW_MF.FLAG]:  [13,15],         // 0x0900: (D13-D15)
    [CPU1500.IW_MF.DIGIT]: [14,15],         // 0x0a00: (D14-D15)
    [CPU1500.IW_MF.D13]:   [13,13],         // 0x0d00: (D13)
    [CPU1500.IW_MF.D15]:   [15,15],         // 0x0f00: (D15)
};

CPU1500.OP_CYCLES = 128;                    // default number of cycles per instruction

/**
 * Table of operations used by toInstruction() for "masked" operations
 */
CPU1500.OP = {
    ADD:    0,
    SUB:    1,
    SHL:    2,
    SHR:    3,
    XCHG:   4,
    MOVE:   5
};

CPU1500.TYPE = {
    TMS1501:    1501,       // aka TI-57
    TMS1502:    1502,       // aka TI-42 ("MBA")
    TMS1503:    1503        // aka TI-55
};

CPU1500.ANGLEMODE = {
    OFF:        0,
    DEGREES:    1,
    RADIANS:    2,
    GRADIENTS:  3
};

CPU1500.BREAK = {
    'i':    "input",
    'o':    "output",
    'om':   "output modification"
};

CPU1500.SFORMAT = {
    DEFAULT:    0,
    COMPACT:    1
};

/**
 * Table of operational inputs used by toInstruction() for "masked" operations
 */
CPU1500.OP_INPUTS = ["A","B","C","D","1","?","R5L","R5"];

CPU1500.COMMANDS = [
    "b[c]\t\tbreak on condition c",
    "bl\t\tlist break conditions",
    "e [addr] ...\tedit ROM locations",
    "g [addr]\trun (to addr)",
    "h\t\thalt",
    "r[a]\t\tdump (all) registers",
    "t [n]\t\tstep (n instructions)",
    "u [addr] [n]\tunassemble (at addr)"
];

CPU1500.CLASSES["CPU1500"] = CPU1500;

/**
 * @copyright https://www.pcjs.org/modules/v3/machine.js (C) 2012-2025 Jeff Parsons
 */

/**
 * @class {Machine}
 * @unrestricted
 * @property {CPU} cpu
 * @property {string} sConfigFile
 * @property {boolean} fConfigLoaded
 * @property {boolean} fPageLoaded
 */
class Machine extends Device {
    /**
     * Machine(idMachine, sConfig, sParms)
     *
     * If sConfig contains a JSON object definition, then we parse it immediately and save the result in this.config;
     * otherwise, we assume it's the URL of an JSON object definition, so we request the resource, and once it's loaded,
     * we parse it.
     *
     * One important change in v2: the order of the device objects in the JSON file determines creation/initialization order.
     * In general, the Machine object should always be first (it's always created first anyway), and the Time object should
     * be listed next, so that its services are available to any other device when they're created/initialized.
     *
     * Sample config:
     *
     *    {
     *      "ti57": {
     *        "class": "Machine",
     *        "type": "TI57",
     *        "name": "TI-57 Programmable Calculator Simulation",
     *        "version": 2.00,
     *        "autoSave": true,
     *        "autoStart": true,
     *        "bindings": {
     *          "power": "powerTI57",
     *          "reset": "resetTI57",
     *          "clear": "clearTI57",
     *          "print": "printTI57"
     *        }
     *      },
     *      "clock": {
     *        "class": "Time",
     *        "cyclesPerSecond": 650000
     *        "bindings": {
     *          "run": "runTI57",
     *          "speed": "speedTI57",
     *          "step": "stepTI57"
     *        },
     *        "overrides": ["cyclesPerSecond"]
     *      },
     *      "display": {
     *        "class": "LED",
     *        "type": 3,
     *        "cols": 12,
     *        "rows": 1,
     *        "color": "red",
     *        "bindings": {
     *          "container": "displayTI57"
     *        },
     *        "overrides": ["color","backgroundColor"]
     *      },
     *      "buttons": {
     *        "class": "Input",
     *        "map": [
     *          ["2nd",  "inv",  "lnx",  "\\b",  "clr"],
     *          ["lrn",  "xchg", "sq",   "sqrt", "rcp"],
     *          ["sst",  "sto",  "rcl",  "sum",  "exp"],
     *          ["bst",  "ee",   "(",    ")",    "/"],
     *          ["gto",  "7",    "8",    "9",    "*"],
     *          ["sbr",  "4",    "5",    "6",    "-"],
     *          ["rst",  "1",    "2",    "3",    "+"],
     *          ["r/s",  "0",    ".",    "+/-",  "=|\\r"]
     *        ],
     *        "location": [139, 325, 368, 478, 0.34, 0.5, 640, 853, 418, 180, 75, 36],
     *        "bindings": {
     *          "surface": "imageTI57"
     *        }
     *      },
     *      "rom": {
     *        "class": "ROM",
     *        "wordSize": 13,
     *        "valueSize": 16,
     *        "valueTotal": 2048,
     *        "littleEndian": true,
     *        "file": "ti57le.bin",
     *        "reference": "",
     *        "values": [
     *        ]
     *      },
     *      "cpu": {
     *        "class": "CPU",
     *        "type": "TMS-1500",
     *        "input": "buttons",
     *        "output": "display"
     *      }
     *    }
     *
     * @this {Machine}
     * @param {string} idMachine (of both the machine AND the <div> to contain it)
     * @param {string} sConfig (JSON configuration for entire machine, including any static resources)
     * @param {string} [sParms] (optional JSON parameters that can supplement or override the configuration)
     */
    constructor(idMachine, sConfig, sParms)
    {
        super(idMachine, idMachine);

        let machine = this;
        this.fPowered = false;
        this.sParms = sParms;
        this.sConfigFile = "";
        this.fConfigLoaded = false;
        this.fPageLoaded = false;
        this.setReady(false);

        /**
         * You can pass "m" commands to the machine via the "commands" parameter to turn on any desired
         * message groups, but since the Debugger is responsible for parsing those commands, and since the
         * Debugger is usually not initialized until last, messages from any earlier constructor calls will
         * not appear.
         *
         * One alternative is to hard-code any MESSAGE groups here, to ensure that the relevant messages
         * from all device constructors get displayed.
         */
        this.messages = Device.DEBUG? Device.MESSAGE.WARN : Device.MESSAGE.DEFAULT;

        sConfig = sConfig.trim();
        if (sConfig[0] == '{') {
            this.loadConfig(sConfig);
        } else {
            this.sConfigFile = sConfig;
            this.getResource(this.sConfigFile, function onLoadConfig(sURL, sResource, readyState, nErrorCode) {
                if (readyState == 4) {
                    if (!nErrorCode && sResource) {
                        machine.loadConfig(sResource);
                        machine.initDevices();
                    }
                    else {
                        machine.printf("error (%d) loading configuration: %s\n", nErrorCode, sURL);
                    }
                }
            });
        }

        /**
         * Device initialization is now deferred until after the page is fully loaded, for the benefit
         * of devices (eg, Input) that may be dependent on page resources.
         *
         * Strangely, for these page events, I must use the window object rather than the document object.
         */
        window.addEventListener('load', function onLoadPage(event) {
            machine.fPageLoaded = true;
            machine.initDevices();
        });
        let sEvent = this.isUserAgent("iOS")? 'pagehide' : (this.isUserAgent("Opera")? 'unload' : 'beforeunload');
        window.addEventListener(sEvent, function onUnloadPage(event) {
            machine.stopDevices();
        });
        window.addEventListener('pageshow', function onShowPage(event) {
            if (!machine.fPowered) machine.onPower(true);
        });
    }

    /**
     * addBinding(binding, element)
     *
     * @this {Machine}
     * @param {string} binding
     * @param {Element} element
     */
    addBinding(binding, element)
    {
        let machine = this;

        switch(binding) {

        case Machine.BINDING.POWER:
            element.onclick = function onClickPower() {
                machine.onPower();
            };
            break;

        case Machine.BINDING.RESET:
            element.onclick = function onClickReset() {
                machine.onReset();
            };
            break;
        }
        super.addBinding(binding, element);
    }

    /**
     * initDevices()
     *
     * Initializes devices in the proper order.  For example, any Time devices should be initialized first,
     * to ensure that their timer services are available to other devices within their constructor.
     *
     * However, we should avoid device order dependencies whenever possible, so if a Device can defer a call
     * to another Device until its onLoad() or onPower() handler can be called, even better.
     *
     * @this {Machine}
     */
    initDevices()
    {
        let power = true;
        if (this.fConfigLoaded && this.fPageLoaded) {
            for (let idDevice in this.deviceConfigs) {
                let sClass;
                let config = this.deviceConfigs[idDevice];
                try {
                    sClass = config['class'];
                    if (!Machine.CLASSES[sClass]) {
                        this.printf('unrecognized %s device "%s"\n', sClass, idDevice);
                    }
                    else if (sClass == "Machine") {
                        this.printf("PCjs %s v%3.2f\n%s\n", config['name'], +Machine.VERSION, Machine.COPYRIGHT);
                        if (this.sConfigFile) this.printf("Configuration: %s\n", this.sConfigFile);
                    } else {
                        let device = new Machine.CLASSES[sClass](this.idMachine, idDevice, config);
                        if (Machine.MAXDEBUG) this.printf('%s device "%s"\n', sClass, idDevice);
                    }
                }
                catch (err) {
                    if (!config['optional']) {
                        this.printf('error initializing %s device "%s": %s\n', sClass, idDevice, err.message);
                        power = false;
                    }
                    this.removeDevice(idDevice);
                }
            }
            if (this.fAutoSave) {
                let state = this.loadLocalStorage();
                this.enumDevices(function onDeviceLoad(device) {
                    if (device.onLoad) {
                        if (!device.onLoad(state)) {
                            device.printf('unable to restore state for device "%s"\n', device.idDevice);
                            return false;
                        }
                    }
                    return true;
                });
            }
            this.setReady(true);
            if (!this.whenReady(this.onPower.bind(this, power))) {
                this.printf("machine %s not ready to power, waiting for device(s)\n", this.idMachine);
            }
        }
    }

    /**
     * isPowered()
     *
     * @this {Machine}
     * @returns {boolean} true if the machine is powered, false if not
     */
    isPowered()
    {
        return this.fPowered;
    }

    /**
     * loadConfig(sConfig)
     *
     * @this {Machine}
     * @param {string} sConfig
     */
    loadConfig(sConfig)
    {
        try {
            this.deviceConfigs = JSON.parse(sConfig);
            let config = this.deviceConfigs[this.idMachine];
            if (!config) {
                /**
                 * Pages that want to instantiate multiple machines using identical configs would normally
                 * have to create unique config files for each machine, even though the only difference between
                 * the configs would be the machine ID.  To reduce that redundancy, we'll try to identify the
                 * Machine object within the config using the name of the config file itself, and if that
                 * succeeds, then we'll duplicate the Machine object within the config using the actual ID.
                 */
                let id = this.getBaseName(this.sConfigFile, true);
                config = this.deviceConfigs[id];
                if (!config) {
                    throw new Error("configuration missing machine ID");
                }
                this.deviceConfigs[this.idMachine] = config;
            }
            this.checkConfig(config, ['autoSave', 'autoStart']);
            this.fAutoSave = (this.config['autoSave'] !== false);
            this.fAutoStart = (this.config['autoStart'] !== false);
            if (this.sParms) {
                /**
                 * Historically, my web servers have not been consistent about quoting property names inside
                 * the optional parameters object, so we must use eval() instead of JSON.parse() to parse them.
                 * Of course, the REAL problem is that JSON.parse() is being a dick about otherwise perfectly
                 * legitimate Object syntax, but I shall not repeat my long list of gripes about JSON here.
                 */
                let parms = /** @type {Object} */ (eval("(" + this.sParms + ")"));
                /**
                 * Slam all these parameters into the machine's config, overriding any matching machine configuration
                 * properties.  Any other devices that need access to these properties should use getMachineConfig().
                 */
                for (let prop in parms) {
                    this.config[prop] = parms[prop];
                }
            }
            this.fConfigLoaded = true;
        } catch(err) {
            let sError = err.message;
            let match = sError.match(/position ([0-9]+)/);
            if (match) {
                sError += " ('" + sConfig.substr(+match[1], 40).replace(/\s+/g, ' ') + "...')";
            }
            this.println("machine '" + this.idMachine + "' initialization error: " + sError);
        }
    }

    /**
     * onPower(on)
     *
     * @this {Machine}
     * @param {boolean} [on]
     */
    onPower(on = !this.fPowered)
    {
        if (this.isReady()) {
            let machine = this;
            if (on) this.println("power on");
            this.enumDevices(function onDevicePower(device) {
                if (device.onPower && device != machine) {
                    if (device.config['class'] != "CPU" || machine.fAutoStart && machine.isReady()) {
                        device.onPower(on);
                    } else {
                        /**
                         * If we're not going to start the CPU on the first power notification, then we should
                         * we fake a transition to the "stopped" state, so that the Debugger will display the current
                         * machine state.
                         */
                        device.time.update(true);
                    }
                }
                return true;
            });
            this.fPowered = on;
            if (!on) this.println("power off");
        }
    }

    /**
     * onReset()
     *
     * @this {Machine}
     */
    onReset()
    {
        if (this.isReady()) {
            let machine = this;
            this.enumDevices(function onDeviceReset(device) {
                if (device.onReset && device != machine) {
                    device.onReset();
                }
                return true;
            });
            this.println("reset");
        }
    }

    /**
     * stopDevices()
     *
     * @this {Machine}
     */
    stopDevices()
    {
        if (this.fAutoSave) {
            let state = [];
            this.enumDevices(function onDeviceSave(device) {
                if (device.onSave) {
                    device.onSave(state);
                }
                return true;
            });
            this.saveLocalStorage(state);
        }
        this.onPower(false);
    }
}

Machine.BINDING = {
    POWER:      "power",
    RESET:      "reset",
};

/**
 * Create the designated machine FACTORY function (this should suffice for all compiled versions).
 *
 * In addition, expose the machine's COMMAND handler interface, so that it's easy to access any of the
 * machine's built-in commands from a browser or IDE debug console:
 *
 *      window.command("?")
 *
 * Normally, access to the COMMAND handlers will be through the machine's WebIO.BINDING.PRINT textarea,
 * but not all machines will have such a control, and sometimes that control will be inaccessible (eg, if
 * the browser is currently debugging the machine).
 */
window[Machine.FACTORY] = function createMachine(idMachine, sConfig, sParms) {
    let machine = new Machine(idMachine, sConfig, sParms);
    window[Machine.COMMAND] = function(commands) {
        return machine.parseCommands(commands);
    };
    return machine;
};

Machine.CLASSES["Machine"] = Machine;
