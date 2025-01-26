/**
 * @copyright https://www.pcjs.org/machines/modules/v2/defines.js (C) 2012-2025 Jeff Parsons
 */

/**
 * @define {string}
 */
const APPVERSION = "2.21";              // this @define is overridden with the version in machines.json

/**
 * COMPILED is false by default; overridden with true in the Closure Compiler release.
 *
 * @define {boolean}
 */
const COMPILED = false;                 // this @define is overridden by the Closure Compiler

/**
 * @define {string}
 */
const COPYRIGHT = "Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>";

/**
 * @define {string}
 */
const CSSCLASS = "pcjs";

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
 * WARNING: DEBUGGER needs to accurately reflect whether or not the Debugger component is (or will be) loaded.
 * In the compiled case, we rely on the Closure Compiler to override DEBUGGER as appropriate.  When it's *false*,
 * nearly all of debugger.js will be conditionally removed by the compiler, reducing it to little more than a
 * "type skeleton", which also solves some type-related warnings we would otherwise have if we tried to remove
 * debugger.js from the compilation process altogether.
 *
 * However, when we're in "development mode" and running uncompiled code in debugger-less configurations,
 * I would like to skip loading debugger.js altogether.  When doing that, we must ALSO arrange for an additional file
 * (nodebugger.js) to be loaded immediately after this file, which *explicitly* overrides DEBUGGER with *false*.
 *
 * @define {boolean}
 */
var DEBUGGER = true;

/**
 * @define {string}
 */
const LICENSE = "License: MIT <https://www.pcjs.org/LICENSE.txt>";

/**
 * MAXDEBUG can be set to true to enable MAXDEBUG-only code (ie, hyper-aggressive DEBUG checks that should only be
 * enabled in special cases); it always overridden with false in the Closure Compiler release.
 *
 * @define {boolean}
 */
const MAXDEBUG = false;

/**
 * PRIVATE can be set to true to enable PRIVATE-only code (ie, code that should never be enabled in a public release);
 * it always overridden with false in the Closure Compiler release.
 *
 * @define {boolean}
 */
const PRIVATE = false;

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
const RS232 = {
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
 * SITEURL is the URL of the web server; it is replaced by the Closure Compiler (eg, "https://www.pcjs.org")
 *
 * @define {string}
 */
const SITEURL = "http://localhost:8088";

/**
 * LOCALDISKS is intended to reflect the webserver's operating mode.  Normally, we assume that all web
 * resources should be accessed remotely, but if the webserver is running in "developer" mode, then the
 * webserver should indicate that fact by setting the global variable 'LOCALDISKS' to true on any pages
 * with embedded machines.
 *
 * @define {boolean}
 */
var LOCALDISKS = false;

/*
 * Platform-agnostic way to isolate global variables (both mine and the system's).
 */
let globals = {
    browser: (typeof window != "undefined"),
    node: (typeof window != "undefined")? {} : global,
    process: (typeof process != "undefined")? process : {},
    window: (typeof window != "undefined")? window : global,
    document: (typeof document != "undefined")? document : {},
    pcjs: { 'machines': {}, 'components': [], 'commands': {}, 'files': null }
};

if (globals.window['PCjs']) {
    globals.pcjs = globals.window['PCjs'];
} else {
    globals.window['PCjs'] = globals.pcjs;
}

globals.window['LOCALDISKS'] = LOCALDISKS;


/**
 * @copyright https://www.pcjs.org/machines/modules/v2/message.js (C) 2012-2025 Jeff Parsons
 */

/*
 * Standard machine message flags.
 *
 * NOTE: Because this machine defines more than 32 message categories, some of these message flags
 * exceed 32 bits, so when concatenating, be sure to use "+", not "|".
 */
const MESSAGE = {
    NONE:       0x000000000000,
    ADDR:       0x000000000001,
    LOG:        0x001000000000,
    STATUS:     0x002000000000,
    NOTICE:     0x004000000000,
    WARNING:    0x008000000000,
    ERROR:      0x010000000000,
    ALERTS:     0x01c000000000,
    DEBUG:      0x020000000000,
    PROGRESS:   0x040000000000,
    SCRIPT:     0x080000000000,
    TYPES:      0x0ff000000000,
    HALT:       0x400000000000,
    BUFFER:     0x800000000000,
    ALL:        0x000ffffffffe
};

/*
 * Message categories supported by the messageEnabled() function and other assorted message
 * functions. Each category has a corresponding bit value that can be combined (ie, OR'ed) as
 * needed.  The Debugger's message command ("m") is used to turn message categories on and off,
 * like so:
 *
 *      m port on
 *      m port off
 *      ...
 *
 * NOTE: The order of these categories can be rearranged, alphabetized, etc, as desired; just be
 * aware that changing the bit values could break saved Debugger states (not a huge concern, just
 * something to be aware of).
 */
MESSAGE.NAMES = {
    "log":      MESSAGE.LOG,
    "warn":     MESSAGE.WARNING,
    /*
     * Now we turn to message actions rather than message types; for example, setting "halt"
     * on or off doesn't enable "halt" messages, but rather halts the CPU on any message above.
     *
     * Similarly, "m buffer on" turns on message buffering, deferring the display of all messages
     * until "m buffer off" is issued.
     */
    "halt":     MESSAGE.HALT,
    "buffer":   MESSAGE.BUFFER
};


/**
 * @copyright https://www.pcjs.org/machines/modules/v2/format.js (C) 2012-2025 Jeff Parsons
 */

/** @typedef {Function} */
let Formatter;

/**
 * @class Format
 * @property {Object.<string,(Formatter|null)>}>} formatters
 */
class Format {

    static NamesOfDays = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    static NamesOfMonths = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    static HexLowerCase = "0123456789abcdef?";
    static HexUpperCase = "0123456789ABCDEF?";

    /**
     * constructor()
     *
     * @this {Format}
     */
    constructor()
    {
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
        let predefinedTypes = "ACDFGHMNSTWYBbdfjcsoXx%";
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
     * @this {Format}
     * @param {string} type (the sprintf standard requires this be a single character)
     * @param {Formatter} func
     * @returns {boolean} (true if successful, false if type character has already been defined)
     */
    addFormatType(type, func)
    {
        // assert(!this.formatters[type]);
        if (!this.formatters[type]) {
            this.formatters[type] = func;
            return true;
        }
        return false;
    }

    /**
     * isDate(date)
     *
     * @param {Date} date
     * @returns {boolean}
     */
    static isDate(date)
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
     * @param {...} args
     * @returns {Date} (UTC unless a time string with a timezone is explicitly provided)
     */
    static parseDate(...args)
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
            // assert(args[1] < 12 && args[2] <= 31 && args[3] < 24 && args[4] < 60 && args[5] < 60);
            date = new Date(Date.UTC(...args));
        }
        return date;
    }

    /**
     * sprintf(format, ...args)
     *
     * This C-like version of sprintf() supports only a subset of the standard C formatting specifiers, plus a few
     * non-standard ones (eg, to display booleans, dates, times, etc).
     *
     * This version also supports custom format specifiers; see addFormatType() for details.
     *
     * TODO: The %c and %s specifiers support a negative width for left-justified output, but the numeric specifiers
     * (eg, %d and %x) do not; they support only positive widths and right-justified output.  That's one of the more
     * glaring omissions at the moment.
     *
     * @this {Format}
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
            let signed = false;
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
            let date = /** @type {Date} */ ("ACDFGHMNSTWY".indexOf(type) >= 0 && typeof arg != "object"? Format.parseDate(arg) : arg);

            switch(type) {
            case 'C':
                buffer += (Format.isDate(date)? this.sprintf("%#W, %#F %#D, %#Y".replaceAll('#', hash? '#' : ''), date) : undefined);
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
                    arg = Format.NamesOfMonths[arg];
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
                type = 'd';
                break;

            case 'T':
                buffer += (Format.isDate(date)? this.sprintf("%#Y-%#02M-%#02D %#02H:%#02N:%#02S".replaceAll('#', hash? '#' : ''), date) : undefined);
                continue;

            case 'W':
                arg = Format.NamesOfDays[hash? date.getUTCDay() : date.getDay()];
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
            /**
             * "%b" is for boolean-like values.
             */
            case 'b':
                buffer += (arg? "true" : "false");
                break;

            /**
             * "%d" is for signed decimal numbers.
             */
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

            /**
             * "%f" is for floating-point numbers.
             */
            case 'f':
                arg = +arg;             // convert to a number, if it isn't already
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

            /**
             * "%j" is for objects (displayed as JSON, with configurable indentation).
             */
            case 'j':
                /**
                 * 'j' is one of our non-standard extensions to the sprintf() interface; it signals that
                 * the caller is providing an object that should be rendered as JSON.  If a width is included
                 * (eg, "%2j"), it's used as an indentation value; otherwise, no whitespace is added.
                 */
                buffer += JSON.stringify(arg, null, width || undefined);
                break;

            /**
             * "%c" is for characters (which can be either single-character strings or ASCII codes).
             */
            case 'c':
                arg = typeof arg == "string"? arg[0] : String.fromCharCode(arg);
                /* falls through */

            /**
             * "%s" is for strings.
             */
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

            /**
             * "%B" is for binary integers.
             */
            case 'B':
                radix = 2;
                if (hash) prefix = "0b";
                /* falls through */

            /**
             * "%o" is for octal integers.
             */
            case 'o':
                if (!radix) radix = 8;
                if (!prefix && hash) prefix = "0o";
                /* falls through */

            /**
             * "%X" is for hexadecimal integers (using upper-case letters).
             */
            case 'X':
                ach = Format.HexUpperCase;
                // if (!prefix && hash) prefix = "0X";  // I don't like that %#X uppercases BOTH the prefix and the value
                /* falls through */

            /**
             * "%x" is for hexadecimal integers (using lower-case letters).
             */
            case 'x':
                s = "";
                if (!radix) radix = 16;
                if (!prefix && hash) prefix = "0x";
                if (!ach) ach = Format.HexLowerCase;
                /**
                 * For all the same reasons articulated above (for type 'd'), we pass the arg through Math.trunc(),
                 * and we honor precision, if any, as the minimum number of digits to print.
                 *
                 * NOTE: In spite of what I mentioned above, Math.trunc() fails on some string values, most notably
                 * signed prefixed values (eg, "-0x1234").  So we deal with that below.
                 */
                if (typeof arg == "string") {
                    if (arg[0] == '-') {
                        signed = true;
                        arg = arg.slice(1);
                    }
                }
                arg = Math.trunc(arg);
                if (signed) arg = -arg;
                /**
                 * Since we now use division instead of shifts to reduce the value as we extract digits (in order to support
                 * values > 32 bits), negative numbers will not render properly.  That's easily fixed for 32-bit values with
                 * the unsigned 32-bit right-shift operator (>>>).  For larger values, we add 2^53 to the value, which gives us
                 * the two's complement of the value as a positive number.  And if the value is larger than 2^53, well, you've
                 * exceeded the integer precision of JavaScript's Number type, so you're out of luck.
                 *
                 * Example: Let's say you calculated 1 - 0x123456789, resulting in -0x123456788.  By adding 0x2000000000000 to
                 * it, we get 0x1FFFEDCBA9878, which is the 53-bit representation of -0x123456788 as a positive number.
                 */
                if (arg < 0) {
                    if ((arg|0) == arg) {
                        arg >>>= 0;
                    } else if (Math.abs(arg) <= Math.pow(2, 53)) {
                        arg += Math.pow(2, 53);
                    }
                }
                if (precision >= 0) {
                    zeroPad = true;
                    if (width < precision) width = precision;
                    precision = -1;
                }
                if (zeroPad && !width) {
                    /**
                     * When zero padding is specified without a width (eg, "%0x"), auto-select a width.
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
                    let d = 16;         // digit index corresponding to '?'
                    /*
                     * We default to '?' if isNaN(); since we always call Math.trunc() for integer args, if the original
                     * arg was undefined, or a string containing a non-number, or anything else that couldn't be converted
                     * to a number, the resulting arg should be NaN.
                     */
                    if (!Number.isNaN(arg)) {
                        d = arg & (radix - 1);
                        /*
                         * We divide by the base (8 or 16) and truncate, instead of the more traditional bit-wise shift,
                         * because, like the decimal integer case, this allows us to support values > 32 bits (up to 53 bits).
                         */
                        arg = Math.trunc(arg / radix);
                        // arg >>>= (radix == 16? 4 : 3);
                    }
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

            /**
             * "%%" is for the percent symbol.
             */
            case '%':
                buffer += '%';
                break;

            default:
                // assert(this.formatters[type]);
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
}

/**
 * @copyright https://www.pcjs.org/machines/modules/v2/dumpapi.js (C) 2012-2025 Jeff Parsons
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
const DumpAPI = {
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
 * @copyright https://www.pcjs.org/machines/modules/v2/reportapi.js (C) 2012-2025 Jeff Parsons
 */

const ReportAPI = {
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
 * @copyright https://www.pcjs.org/machines/modules/v2/userapi.js (C) 2012-2025 Jeff Parsons
 */

/*
 * Examples of User API requests:
 *
 *      web.getHostOrigin() + UserAPI.ENDPOINT + '?' + UserAPI.QUERY.REQ + '=' + UserAPI.REQ.VERIFY + '&' + UserAPI.QUERY.USER + '=' + sUser;
 */
const UserAPI = {
    ENDPOINT:       "/api/v1/user",
    QUERY: {
        REQ:        "req",      // specifies a request
        USER:       "user",     // specifies a user ID
        STATE:      "state",    // specifies a state ID
        DATA:       "data"      // specifies state data
    },
    REQ: {
        CREATE:     "create",   // creates a user ID
        VERIFY:     "verify",   // requests verification of a user ID
        STORE:      "store",    // stores a machine state on the server
        LOAD:       "load"      // loads a machine state from the server
    },
    RES: {
        CODE:       "code",
        DATA:       "data"
    },
    CODE: {
        OK:         "ok",
        FAIL:       "error"
    },
    FAIL: {
        DUPLICATE:  "user already exists",
        VERIFY:     "unable to verify user",
        BADSTATE:   "invalid state parameter",
        NOSTATE:    "no machine state",
        BADLOAD:    "unable to load machine state",
        BADSTORE:   "unable to save machine state"
    }
};


/**
 * @copyright https://www.pcjs.org/machines/modules/v2/keys.js (C) 2012-2025 Jeff Parsons
 */

const Keys = {
    /*
     * Keys and/or key combinations that generate common ASCII codes.
     *
     * NOTE: If you're looking for a general-purpose ASCII code table, see StrLib.ASCII in strlib.js;
     * if something's missing, that's probably the more appropriate table to add it to.
     *
     * TODO: The Closure Compiler doesn't inline all references to these values, at least those with
     * quoted property names, which is why I've 'unquoted' as many of them as possible.  One solution
     * would be to add mnemonics for all of them, not just the non-printable ones (eg, SPACE instead
     * of ' ', AMP instead of '&', etc.)
     */
    ASCII: {
          BREAK:  0, CTRL_A:  1, CTRL_B:  2, CTRL_C:  3, CTRL_D:  4, CTRL_E:  5, CTRL_F:  6, CTRL_G:  7,
         CTRL_H:  8, CTRL_I:  9, CTRL_J: 10, CTRL_K: 11, CTRL_L: 12, CTRL_M: 13, CTRL_N: 14, CTRL_O: 15,
         CTRL_P: 16, CTRL_Q: 17, CTRL_R: 18, CTRL_S: 19, CTRL_T: 20, CTRL_U: 21, CTRL_V: 22, CTRL_W: 23,
         CTRL_X: 24, CTRL_Y: 25, CTRL_Z: 26, ESC:    27,
            ' ': 32,    '!': 33,    '"': 34,    '#': 35,    '$': 36,    '%': 37,    '&': 38,    "'": 39,
            '(': 40,    ')': 41,    '*': 42,    '+': 43,    ',': 44,    '-': 45,    '.': 46,    '/': 47,
            '0': 48,    '1': 49,    '2': 50,    '3': 51,    '4': 52,    '5': 53,    '6': 54,    '7': 55,
            '8': 56,    '9': 57,    ':': 58,    ';': 59,    '<': 60,    '=': 61,    '>': 62,    '?': 63,
            '@': 64,     A:  65,     B:  66,     C:  67,     D:  68,     E:  69,     F:  70,     G:  71,
             H:  72,     I:  73,     J:  74,     K:  75,     L:  76,     M:  77,     N:  78,     O:  79,
             P:  80,     Q:  81,     R:  82,     S:  83,     T:  84,     U:  85,     V:  86,     W:  87,
             X:  88,     Y:  89,     Z:  90,    '[': 91,    '\\':92,    ']': 93,    '^': 94,    '_': 95,
            '`': 96,     a:  97,     b:  98,     c:  99,     d: 100,     e: 101,     f: 102,     g: 103,
             h:  104,    i: 105,     j: 106,     k: 107,     l: 108,     m: 109,     n: 110,     o: 111,
             p:  112,    q: 113,     r: 114,     s: 115,     t: 116,     u: 117,     v: 118,     w: 119,
             x:  120,    y: 121,     z: 122,    '{':123,    '|':124,    '}':125,    '~':126,   DEL: 127
    },
    /*
     * Browser keyCodes we must pay particular attention to.  For the most part, these are non-alphanumeric
     * or function keys, some which may require special treatment (eg, preventDefault() if returning false on
     * the initial keyDown event is insufficient).
     *
     * keyCodes for most common ASCII keys can simply use the appropriate ASCII code above.
     *
     * Most of these represent non-ASCII keys (eg, the LEFT arrow key), yet for some reason, browsers defined
     * them using ASCII codes (eg, the LEFT arrow key uses the ASCII code for '%' or 37).
     */
    KEYCODE: {
        /* 0x08 */ BS:          8,          // BACKSPACE        (ASCII.CTRL_H)
        /* 0x09 */ TAB:         9,          // TAB              (ASCII.CTRL_I)
        /* 0x0A */ LF:          10,         // LINE-FEED        (ASCII.CTRL_J) (Some Windows-based browsers used to generate this via CTRL-ENTER)
        /* 0x0D */ CR:          13,         // CARRIAGE RETURN  (ASCII.CTRL_M)
        /* 0x10 */ SHIFT:       16,
        /* 0x11 */ CTRL:        17,
        /* 0x12 */ ALT:         18,
        /* 0x13 */ PAUSE:       19,         // PAUSE/BREAK
        /* 0x14 */ CAPS_LOCK:   20,
        /* 0x1B */ ESC:         27,
        /* 0x20 */ SPACE:       32,
        /* 0x21 */ PGUP:        33,
        /* 0x22 */ PGDN:        34,
        /* 0x23 */ END:         35,
        /* 0x24 */ HOME:        36,
        /* 0x25 */ LEFT:        37,
        /* 0x26 */ UP:          38,
        /* 0x27 */ RIGHT:       39,
        /* 0x27 */ FF_QUOTE:    39,
        /* 0x28 */ DOWN:        40,
        /* 0x2C */ FF_COMMA:    44,
        /* 0x2C */ PRTSC:       44,
        /* 0x2D */ INS:         45,
        /* 0x2E */ DEL:         46,
        /* 0x2E */ FF_PERIOD:   46,
        /* 0x2F */ FF_SLASH:    47,
        /* 0x30 */ ZERO:        48,
        /* 0x31 */ ONE:         49,
        /* 0x32 */ TWO:         50,
        /* 0x33 */ THREE:       51,
        /* 0x34 */ FOUR:        52,
        /* 0x35 */ FIVE:        53,
        /* 0x36 */ SIX:         54,
        /* 0x37 */ SEVEN:       55,
        /* 0x38 */ EIGHT:       56,
        /* 0x39 */ NINE:        57,
        /* 0x3B */ FF_SEMI:     59,
        /* 0x3D */ FF_EQUALS:   61,
        /* 0x5B */ CMD:         91,         // aka WIN
        /* 0x5B */ FF_LBRACK:   91,
        /* 0x5C */ FF_BSLASH:   92,
        /* 0x5D */ RCMD:        93,         // aka MENU
        /* 0x5D */ FF_RBRACK:   93,
        /* 0x60 */ NUM_0:       96,
        /* 0x60 */ NUM_INS:     96,
        /* 0x60 */ FF_BQUOTE:   96,
        /* 0x61 */ NUM_1:       97,
        /* 0x61 */ NUM_END:     97,
        /* 0x62 */ NUM_2:       98,
        /* 0x62 */ NUM_DOWN:    98,
        /* 0x63 */ NUM_3:       99,
        /* 0x63 */ NUM_PGDN:    99,
        /* 0x64 */ NUM_4:       100,
        /* 0x64 */ NUM_LEFT:    100,
        /* 0x65 */ NUM_5:       101,
        /* 0x65 */ NUM_CENTER:  101,
        /* 0x66 */ NUM_6:       102,
        /* 0x66 */ NUM_RIGHT:   102,
        /* 0x67 */ NUM_7:       103,
        /* 0x67 */ NUM_HOME:    103,
        /* 0x68 */ NUM_8:       104,
        /* 0x68 */ NUM_UP:      104,
        /* 0x69 */ NUM_9:       105,
        /* 0x69 */ NUM_PGUP:    105,
        /* 0x6A */ NUM_MUL:     106,
        /* 0x6B */ NUM_ADD:     107,
        /* 0x6D */ NUM_SUB:     109,
        /* 0x6E */ NUM_DEL:     110,        // aka PERIOD
        /* 0x6F */ NUM_DIV:     111,
        /* 0x70 */ F1:          112,
        /* 0x71 */ F2:          113,
        /* 0x72 */ F3:          114,
        /* 0x73 */ F4:          115,
        /* 0x74 */ F5:          116,
        /* 0x75 */ F6:          117,
        /* 0x76 */ F7:          118,
        /* 0x77 */ F8:          119,
        /* 0x78 */ F9:          120,
        /* 0x79 */ F10:         121,
        /* 0x7A */ F11:         122,
        /* 0x7B */ F12:         123,
        /* 0x90 */ NUM_LOCK:    144,
        /* 0x91 */ SCROLL_LOCK: 145,
        /* 0xAD */ FF_DASH:     173,
        /* 0xBA */ SEMI:        186,        // Firefox:  59 (FF_SEMI)
        /* 0xBB */ EQUALS:      187,        // Firefox:  61 (FF_EQUALS)
        /* 0xBC */ COMMA:       188,
        /* 0xBD */ DASH:        189,        // Firefox: 173 (FF_DASH)
        /* 0xBE */ PERIOD:      190,
        /* 0xBF */ SLASH:       191,
        /* 0xC0 */ BQUOTE:      192,
        /* 0xDB */ LBRACK:      219,
        /* 0xDC */ BSLASH:      220,
        /* 0xDD */ RBRACK:      221,
        /* 0xDE */ QUOTE:       222,
        /* 0xE0 */ FF_CMD:      224,        // Firefox only (used for both CMD and RCMD)
        //
        // The following biases use what I'll call Decimal Coded Binary or DCB (the opposite of BCD),
        // where the thousands digit is used to store the sum of "binary" digits 1 and/or 2 and/or 4.
        //
        // Technically, that makes it DCO (Decimal Coded Octal), but then again, BCD should have really
        // been called HCD (Hexadecimal Coded Decimal), so if "they" can take liberties, so can I.
        //
        // ONDOWN is a bias we add to browser keyCodes that we want to handle on "down" rather than on "press".
        //
        ONDOWN:                 1000,
        //
        // ONRIGHT is a bias we add to browser keyCodes that need to check for a "right" location (default is "left")
        //
        ONRIGHT:                2000,
        //
        // FAKE is a bias we add to signal these are fake keyCodes corresponding to internal keystroke combinations.
        // The actual values are for internal use only and merely need to be unique and used consistently.
        //
        FAKE:                   4000
    },
    /*
     * The set of values that a browser may store in the 'location' property of a keyboard event object
     * which we also support.
     */
    LOCATION: {
        LEFT:                   1,
        RIGHT:                  2,
        NUMPAD:                 3
    }
};

/*
 * Table to map new browser keyboard event "code" property values to their old KEYCODE values.
 */
Keys.CODEKEY = {
    "Comma":            Keys.KEYCODE.COMMA,
    "Period":           Keys.KEYCODE.PERIOD,
    "Semicolon":        Keys.KEYCODE.SEMI,
    "Quote":            Keys.KEYCODE.QUOTE,
    "BracketLeft":      Keys.KEYCODE.LBRACK,
    "BracketRight":     Keys.KEYCODE.RBRACK,
    "Backquote":        Keys.KEYCODE.BQUOTE,
    "Backslash":        Keys.KEYCODE.BSLASH,
    "Minus":            Keys.KEYCODE.DASH,
    "Equal":            Keys.KEYCODE.EQUALS,
    "AltLeft":          Keys.KEYCODE.ALT,
    "AltRight":         Keys.KEYCODE.ALT,
    "CapsLock":         Keys.KEYCODE.CAPS_LOCK,
    "ControlLeft":      Keys.KEYCODE.CTRL,
    "ControlRight":     Keys.KEYCODE.CTRL,
    "OSLeft":           Keys.KEYCODE.CMD,
    "OSRight":          Keys.KEYCODE.RCMD,
    "ShiftLeft":        Keys.KEYCODE.SHIFT,
    "ShiftRight":       Keys.KEYCODE.SHIFT,
    "Enter":            Keys.KEYCODE.CR,
    "Space":            Keys.KEYCODE.SPACE,
    "Tab":              Keys.KEYCODE.TAB,
    "Delete":           Keys.KEYCODE.DEL,
    "End":              Keys.KEYCODE.END,
    "Home":             Keys.KEYCODE.HOME,
    "Insert":           Keys.KEYCODE.INS,
    "PageDown":         Keys.KEYCODE.PGDN,
    "PageUp":           Keys.KEYCODE.PGUP,
    "ArrowDown":        Keys.KEYCODE.DOWN,
    "ArrowLeft":        Keys.KEYCODE.LEFT,
    "ArrowRight":       Keys.KEYCODE.RIGHT,
    "ArrowUp":          Keys.KEYCODE.UP,
    "Escape":           Keys.KEYCODE.ESC,
    "PrintScreen":      Keys.KEYCODE.PRTSC,
    "ScrollLock":       Keys.KEYCODE.SCROLL_LOCK,
    "Pause":            Keys.KEYCODE.PAUSE,
    "F1":               Keys.KEYCODE.F1,
    "F2":               Keys.KEYCODE.F2,
    "F3":               Keys.KEYCODE.F3,
    "F4":               Keys.KEYCODE.F4,
    "F5":               Keys.KEYCODE.F5,
    "F6":               Keys.KEYCODE.F6,
    "F7":               Keys.KEYCODE.F7,
    "F8":               Keys.KEYCODE.F8,
    "F9":               Keys.KEYCODE.F9,
    "F10":              Keys.KEYCODE.F10,
    "F11":              Keys.KEYCODE.F11,
    "F12":              Keys.KEYCODE.F12,
    "NumLock":          Keys.KEYCODE.NUM_LOCK,
    "Numpad0":          Keys.KEYCODE.NUM_0,
    "Numpad1":          Keys.KEYCODE.NUM_1,
    "Numpad2":          Keys.KEYCODE.NUM_2,
    "Numpad3":          Keys.KEYCODE.NUM_3,
    "Numpad4":          Keys.KEYCODE.NUM_4,
    "Numpad5":          Keys.KEYCODE.NUM_5,
    "Numpad6":          Keys.KEYCODE.NUM_6,
    "Numpad7":          Keys.KEYCODE.NUM_7,
    "Numpad8":          Keys.KEYCODE.NUM_8,
    "Numpad9":          Keys.KEYCODE.NUM_9,
    "NumpadAdd":        Keys.KEYCODE.NUM_ADD,
    "NumpadSubtract":   Keys.KEYCODE.NUM_SUB,
    "NumpadMultiply":   Keys.KEYCODE.NUM_MUL,
    "NumpadDivide":     Keys.KEYCODE.NUM_DIV,
    "NumpadDecimal":    Keys.KEYCODE.NUM_DEL,
    "NumpadEnter":      Keys.KEYCODE.NUM_CR
};

/*
 * Check the event object's 'location' property for a non-zero value for the following ONRIGHT keys.
 */
Keys.KEYCODE.NUM_CR = Keys.KEYCODE.CR + Keys.KEYCODE.ONRIGHT;


/*
 * Maps Firefox keyCodes to their more common keyCode counterparts; a number of entries in this table
 * are no longer valid (if indeed they ever were), so they've been commented out.  It's likely that I
 * simply extended this table to resolve additional differences in other browsers (ie, Opera), but without
 * browser-specific checks, it's not safe to perform all the mappings shown below.
 */
Keys.FF_KEYCODES = {};
Keys.FF_KEYCODES[Keys.KEYCODE.FF_SEMI]   = Keys.KEYCODE.SEMI;           //  59 -> 186
Keys.FF_KEYCODES[Keys.KEYCODE.FF_EQUALS] = Keys.KEYCODE.EQUALS;         //  61 -> 187
Keys.FF_KEYCODES[Keys.KEYCODE.FF_DASH]   = Keys.KEYCODE.DASH;           // 173 -> 189
Keys.FF_KEYCODES[Keys.KEYCODE.FF_CMD]    = Keys.KEYCODE.CMD;            // 224 -> 91
// Keys.FF_KEYCODES[Keys.KEYCODE.FF_COMMA]  = Keys.KEYCODE.COMMA;       //  44 -> 188
// Keys.FF_KEYCODES[Keys.KEYCODE.FF_PERIOD] = Keys.KEYCODE.PERIOD;      //  46 -> 190
// Keys.FF_KEYCODES[Keys.KEYCODE.FF_SLASH]  = Keys.KEYCODE.SLASH;       //  47 -> 191
// Keys.FF_KEYCODES[Keys.KEYCODE.FF_BQUOTE] = Keys.KEYCODE.BQUOTE;      //  96 -> 192
// Keys.FF_KEYCODES[Keys.KEYCODE.FF_LBRACK  = Keys.KEYCODE.LBRACK;      //  91 -> 219
// Keys.FF_KEYCODES[Keys.KEYCODE.FF_BSLASH] = Keys.KEYCODE.BSLASH;      //  92 -> 220
// Keys.FF_KEYCODES[Keys.KEYCODE.FF_RBRACK] = Keys.KEYCODE.RBRACK;      //  93 -> 221
// Keys.FF_KEYCODES[Keys.KEYCODE.FF_QUOTE]  = Keys.KEYCODE.QUOTE;       //  39 -> 222

/*
 * Maps non-ASCII keyCodes to their ASCII counterparts
 */
Keys.NONASCII_KEYCODES = {};
Keys.NONASCII_KEYCODES[Keys.KEYCODE.FF_DASH] = Keys.ASCII['-'];         // 173 -> 45
Keys.NONASCII_KEYCODES[Keys.KEYCODE.SEMI]    = Keys.ASCII[';'];         // 186 -> 59
Keys.NONASCII_KEYCODES[Keys.KEYCODE.EQUALS]  = Keys.ASCII['='];         // 187 -> 61
Keys.NONASCII_KEYCODES[Keys.KEYCODE.DASH]    = Keys.ASCII['-'];         // 189 -> 45
Keys.NONASCII_KEYCODES[Keys.KEYCODE.COMMA]   = Keys.ASCII[','];         // 188 -> 44
Keys.NONASCII_KEYCODES[Keys.KEYCODE.PERIOD]  = Keys.ASCII['.'];         // 190 -> 46
Keys.NONASCII_KEYCODES[Keys.KEYCODE.SLASH]   = Keys.ASCII['/'];         // 191 -> 47
Keys.NONASCII_KEYCODES[Keys.KEYCODE.BQUOTE]  = Keys.ASCII['`'];         // 192 -> 96
Keys.NONASCII_KEYCODES[Keys.KEYCODE.LBRACK]  = Keys.ASCII['['];         // 219 -> 91
Keys.NONASCII_KEYCODES[Keys.KEYCODE.BSLASH]  = Keys.ASCII['\\'];        // 220 -> 92
Keys.NONASCII_KEYCODES[Keys.KEYCODE.RBRACK]  = Keys.ASCII[']'];         // 221 -> 93
Keys.NONASCII_KEYCODES[Keys.KEYCODE.QUOTE]   = Keys.ASCII["'"];         // 222 -> 39

/*
 * Maps unshifted keyCodes to their shifted counterparts; to be used when a shift-key is down.
 * Alphabetic characters are handled in code, since they must also take CAPS_LOCK into consideration.
 */
Keys.SHIFTED_KEYCODES = {};
Keys.SHIFTED_KEYCODES[Keys.ASCII['1']]     = Keys.ASCII['!'];
Keys.SHIFTED_KEYCODES[Keys.ASCII['2']]     = Keys.ASCII['@'];
Keys.SHIFTED_KEYCODES[Keys.ASCII['3']]     = Keys.ASCII['#'];
Keys.SHIFTED_KEYCODES[Keys.ASCII['4']]     = Keys.ASCII['$'];
Keys.SHIFTED_KEYCODES[Keys.ASCII['5']]     = Keys.ASCII['%'];
Keys.SHIFTED_KEYCODES[Keys.ASCII['6']]     = Keys.ASCII['^'];
Keys.SHIFTED_KEYCODES[Keys.ASCII['7']]     = Keys.ASCII['&'];
Keys.SHIFTED_KEYCODES[Keys.ASCII['8']]     = Keys.ASCII['*'];
Keys.SHIFTED_KEYCODES[Keys.ASCII['9']]     = Keys.ASCII['('];
Keys.SHIFTED_KEYCODES[Keys.ASCII['0']]     = Keys.ASCII[')'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.SEMI]   = Keys.ASCII[':'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.EQUALS] = Keys.ASCII['+'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.COMMA]  = Keys.ASCII['<'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.DASH]   = Keys.ASCII['_'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.PERIOD] = Keys.ASCII['>'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.SLASH]  = Keys.ASCII['?'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.BQUOTE] = Keys.ASCII['~'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.LBRACK] = Keys.ASCII['{'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.BSLASH] = Keys.ASCII['|'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.RBRACK] = Keys.ASCII['}'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.QUOTE]  = Keys.ASCII['"'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.FF_DASH]   = Keys.ASCII['_'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.FF_EQUALS] = Keys.ASCII['+'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.FF_SEMI]   = Keys.ASCII[':'];


/**
 * @copyright https://www.pcjs.org/machines/modules/v2/pcfs.js (C) 2012-2025 Jeff Parsons
 */

/** @typedef {{ name: string, size: number, attr: number, date: Date, data: *, files: (Array|null) }} */
let PCFSItem;

/**
 * @class PCFS
 */
class PCFS {

    static root = "/pcfs";

    static ATTR = {                 // copied from /machines/pcx86/modules/v3/diskinfo.js (DiskInfo.ATTR.*)
        READONLY:       0x01,       // PC DOS 2.0 and up
        HIDDEN:         0x02,
        SYSTEM:         0x04,
        VOLUME:         0x08,       // PC DOS 2.0 and up
        LFN:            0x0f,       // combination used by Windows 95 (MS-DOS 7.0) and up, indicating a long filename (LFN) DIRENT
        SUBDIR:         0x10,       // PC DOS 2.0 and up
        ARCHIVE:        0x20,       // PC DOS 2.0 and up
    };

    /**
     * isPCFS(path)
     *
     * @param {string} path
     * @returns {boolean}
     */
    static isPCFS(path)
    {
        return path.indexOf(PCFS.root) == 0;
    }

    /**
     * getRoot(path)
     *
     * @param {string} path
     * @returns {Array|null}
     */
    static getRoot(path)
    {
        return PCFS.isPCFS(path)? globals.pcjs['files'] : null;
    }

    /**
     * getNodes(path)
     *
     * @param {string} path
     * @returns {Array}
     */
    static getNodes(path)
    {
        return path.slice(PCFS.root.length+1).split('/');
    }

    /**
     * getItem(path, fCreate, fDirectory)
     *
     * @param {string} path
     * @param {boolean} [fCreate] (true to create, false to remove)
     * @param {boolean} [fDirectory]
     * @returns {PCFSItem|null}
     */
    static getItem(path, fCreate, fDirectory)
    {
        let item = null;
        let dir = PCFS.getRoot(path);
        if (dir) {
            let nodes = PCFS.getNodes(path);
            let i, j;
            for (i = 0; i < nodes.length; i++) {
                let name = nodes[i], match = false;
                if (!name) {
                    item = dir;
                    break;
                }
                for (j = 0; j < dir.files.length; j++) {
                    let next = dir.files[j];
                    if (next.name.toLowerCase() == name.toLowerCase()) {
                        if (i == nodes.length - 1) {
                            item = next;
                            break;
                        }
                        if (next.files) {
                            dir = next;
                            match = true;
                            break;
                        }
                    }
                }
                if (item) break;
                if (match) continue;
                if (i < nodes.length-1) {
                    if (fCreate) {
                        let sub = {name, size: 0, attr: PCFS.ATTR.SUBDIR, date: new Date(), files: []};
                        dir.files.push(sub);
                        dir = sub;
                        continue;
                    }
                    break;
                }
            }
            if (!item && i == nodes.length) {
                if (fCreate) {
                    let attr = fDirectory? PCFS.ATTR.SUBDIR : PCFS.ATTR.ARCHIVE;
                    item = dir.files[dir.files.length] = {name: nodes[nodes.length-1], size: 0, attr: attr, date: new Date(), files: fDirectory? [] : null};
                } else if (fCreate === false) {
                    dir.files.splice(j, 1);
                }
            }
        }
        return item;
    }

    /**
     * setItem(item, data, date, attr)
     *
     * @param {PCFSItem} item
     * @param {*} [data]
     * @param {Date} [date]
     * @param {number} [attr]
     */
    static setItem(item, data, date, attr)
    {
        if (!item.files && data) {
            item.data = data;
            item.size = data.length;
            if (!date) date = new Date();
        }
        if (date) {
            item.date = date;
        }
        if (attr !== undefined) {
            item.attr = attr;
        }
    }
}

if (!globals.pcjs['files']) {
    globals.pcjs['files'] = { name: "", size: 0, attr: PCFS.ATTR.SUBDIR, date: new Date(), files: [] };
}

/**
 * @copyright https://www.pcjs.org/machines/modules/v2/strlib.js (C) 2012-2025 Jeff Parsons
 */

/**
 * @class StrLib
 * @unrestricted
 */
class StrLib {
    /*
     * Map special characters to their HTML escape sequences.
     */
    static HTMLEscapeMap = {
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
    static ASCIICodeMap = {
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
     * TODO: Future home of a complete ASCII table.
     */
    static ASCII = {
        LF:     0x0A,
        CR:     0x0D
    };

    static TYPES = {
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

    /**
     * isValidInt(s, base)
     *
     * The built-in parseInt() function has the annoying feature of returning a partial value (ie,
     * up to the point where it encounters an invalid character); eg, parseInt("foo", 16) returns 0xf.
     *
     * So it's best to use our own StrLib.parseInt() function, which will in turn use this function to
     * validate the entire string.
     *
     * @param {string} s is the string representation of some number
     * @param {number} [base] is the radix to use (default is 10); only 2, 8, 10 and 16 are supported
     * @returns {boolean} true if valid, false if invalid (or the specified base isn't supported)
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
     * @returns {number|undefined} corresponding value, or undefined if invalid
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
            if (StrLib.isValidInt(s, base) && !isNaN(v = parseInt(s, base))) {
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
     * @returns {string}
     */
    static toBase(n, radix, cch, sPrefix = "", nGrouping = 0)
    {
        /*
         * We can't rely entirely on isNaN(), because isNaN(null) returns false, and we can't rely
         * entirely on typeof either, because typeof NaN returns "number".  Sigh.
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
     * @returns {string} the binary representation of n
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
        return StrLib.toBase(n, 2, cch, "", nGrouping);
    }

    /**
     * toBinBytes(n, cb, fPrefix)
     *
     * Converts an integer to binary, with the specified number of bytes (up to the default of 4).
     *
     * @param {number|null|undefined} n (interpreted as a 32-bit value)
     * @param {number} [cb] is the desired number of binary bytes (4 is both the default and the maximum)
     * @param {boolean} [fPrefix]
     * @returns {string} the binary representation of n
     */
    static toBinBytes(n, cb, fPrefix)
    {
        let s = "";
        if (!cb || cb > 4) cb = 4;
        for (let i = 0; i < cb; i++) {
            if (s) s = ',' + s;
            s = StrLib.toBin(n & 0xff, 8) + s;
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
     * @returns {string} the octal representation of n
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
        return StrLib.toBase(n, 8, cch, fPrefix? "0o" : "");
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
     * @returns {string} the decimal representation of n
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
        return StrLib.toBase(n, 10, cch);
    }

    /**
     * toHex(n, cch, fPrefix)
     *
     * Converts an integer to hex, with the specified number of digits (default of 2/4/8, max of 9).
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
     * @param {number} [cch] is the desired number of hex digits (0 or undefined for default of 2/4/8/9)
     * @param {boolean} [fPrefix]
     * @returns {string} the hex representation of n
     */
    static toHex(n, cch, fPrefix)
    {
        if (!cch) {
            // cch = Math.ceil(Math.log(Math.abs(n) + 1) / Math.log(16)) || 1;
            let v = Math.abs(n);
            if (v <= 0xff) {
                cch = 2;
            } else if (v <= 0xffff) {
                cch = 4;
            } else if (v <= 0xffffffff) {
                cch = 8;
            } else {
                cch = 9;
            }
        } else if (cch > 9) cch = 9;
        return StrLib.toBase(n, 16, cch, fPrefix? "0x" : "");
    }

    /**
     * toHexByte(b)
     *
     * Alias for StrLib.toHex(b, 2, true)
     *
     * @param {number|null|undefined} b is a byte value
     * @returns {string} the hex representation of b
     */
    static toHexByte(b)
    {
        return StrLib.toHex(b, 2, true);
    }

    /**
     * toHexWord(w)
     *
     * Alias for StrLib.toHex(w, 4, true)
     *
     * @param {number|null|undefined} w is a word (16-bit) value
     * @returns {string} the hex representation of w
     */
    static toHexWord(w)
    {
        return StrLib.toHex(w, 4, true);
    }

    /**
     * toHexLong(l)
     *
     * Alias for StrLib.toHex(l, 8, true)
     *
     * @param {number|null|undefined} l is a dword (32-bit) value
     * @returns {string} the hex representation of w
     */
    static toHexLong(l)
    {
        return StrLib.toHex(l, 8, true);
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
     * @returns {string}
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
     * @returns {string} the filename's extension (in lower-case and EXCLUDING the "."), or an empty string
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
     * @returns {boolean} true if s ends with sSuffix, false if not
     */
    static endsWith(s, sSuffix)
    {
        return s.indexOf(sSuffix, s.length - sSuffix.length) !== -1;
    }

    /**
     * escapeHTML(sHTML)
     *
     * @param {string} sHTML
     * @returns {string} with special characters "escaped" as HTML entities, similar to PHP's htmlspecialchars()
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
            return StrLib.HTMLEscapeMap[m];
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
     * @returns {string}
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
     * @returns {string}
     */
    static replaceAll(sSearch, sReplace, s)
    {
        let a = {};
        a[sSearch] = sReplace;
        return StrLib.replaceArray(a, s);
    }

    /**
     * replaceArray(a, s)
     *
     * @param {Object} a
     * @param {string} s
     * @returns {string}
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
        return s.replace(new RegExp('(' + sMatch + ')', "g"), function(m) {
            return a[m];
        });
    }

    /**
     * pad(s, cch)
     *
     * Use a negative cch to pad on the right (ie, left-align), similar to sprintf("%-Ns", s).
     * This also truncates the string if it's longer than abs(cch), similar to sprintf("%.Ns", s).
     *
     * @param {string} s is a string
     * @param {number} cch is desired length
     * @returns {string} the original string (s) with spaces padding it to the specified length
     */
    static pad(s, cch)
    {
        return StrLib.sprintf('%' + cch + '.' + Math.abs(cch) + 's', s);
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
     * @returns {Date} (UTC unless a time string with a non-GMT timezone is explicitly provided)
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
     * @returns {boolean}
     */
    static isValidDate(date)
    {
        return !isNaN(date.getTime());
    }

    /**
     * stripLeadingZeros(s, fPad)
     *
     * @param {string} s
     * @param {boolean} [fPad]
     * @returns {string}
     */
    static stripLeadingZeros(s, fPad)
    {
        let cch = s.length;
        s = s.replace(/^0+([0-9A-F]+)$/i, "$1");
        if (fPad) s = StrLib.pad(s, cch);
        return s;
    }

    /**
     * trim(s)
     *
     * @param {string} s
     * @returns {string}
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
     * @returns {string}
     */
    static toASCIICode(b)
    {
        let s;
        if (b != StrLib.ASCII.CR && b != StrLib.ASCII.LF) {
            s = StrLib.ASCIICodeMap[b];
        }
        if (s) {
            s = '<' + s + '>';
        } else {
            s = String.fromCharCode(b);
        }
        return s;
    }
}

StrLib.format = new Format();
StrLib.sprintf = StrLib.format.sprintf.bind(StrLib.format);

/**
 * @copyright https://www.pcjs.org/machines/modules/v2/usrlib.js (C) 2012-2025 Jeff Parsons
 */

/** @typedef {{ mask: number, shift: number }} */
let BitField;

/** @typedef {Object.<BitField>} */
let BitFields;

/**
 * @class UsrLib
 * @unrestricted
 */
class UsrLib {

    static aMonthDays = [
        31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ];

    /**
     * binarySearch(a, v, fnCompare)
     *
     * @param {Array} a is an array
     * @param {number|string|Array|Object} v
     * @param {function((number|string|Array|Object), (number|string|Array|Object))} [fnCompare]
     * @returns {number} the index of matching entry if non-negative, otherwise the index of the insertion point
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
        let index = UsrLib.binarySearch(a, v, fnCompare);
        if (index < 0) {
            a.splice(-(index + 1), 0, v);
        }
    }

    /**
     * getTimestamp()
     *
     * @returns {string} timestamp containing the current date and time ("yyyy-mm-dd hh:mm:ss")
     */
    static getTimestamp()
    {
        let date = new Date();
        return StrLib.sprintf("%T", date);
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
     * @returns {number} the maximum (1-based) day allowed for the specified month and year
     */
    static getMonthDays(nMonth, nYear)
    {
        let nDays = UsrLib.aMonthDays[nMonth - 1];
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
     * @returns {Date}
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
     * @returns {number} (date1 - date2, returned as a signed integer number of days)
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
     *      let bfs = UsrLib.defineBitFields({num:20, count:8, btmod:1, type:3});
     *
     * The above defines a set of bit fields containing four fields: num (bits 0-19), count (bits 20-27), btmod (bit 28), and type (bits 29-31).
     *
     *      UsrLib.setBitField(bfs.num, n, 1);
     *
     * The above set bit field "bfs.num" in numeric variable "n" to the value 1.
     *
     * @param {Object} bfs
     * @returns {BitFields}
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
     * @returns {number} a value containing all supplied bit fields
     */
    static initBitFields(bfs, var_args)
    {
        let v = 0, i = 1;
        for (let f in bfs) {
            if (i >= arguments.length) break;
            v = UsrLib.setBitField(bfs[f], v, arguments[i++]);
        }
        return v;
    }

    /**
     * getBitField(bf, v)
     *
     * @param {BitField} bf
     * @param {number} v is a value containing bit fields
     * @returns {number} the value of the bit field in v defined by bf
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
     * @returns {number} updated v
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

/**
 * @copyright https://www.pcjs.org/machines/modules/v2/weblib.js (C) 2012-2025 Jeff Parsons
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

/**
 * @class Web
 * @unrestricted
 */
class WebLib {
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
     * @returns {Array|null} Array containing [resource, nErrorCode], or null if no response available (yet)
     */
    static getResource(sURL, type = "text", fAsync = false, done, progress)
    {
        let nErrorCode = 0, resource = null, response = null;

        let resources = globals.window['resources'];
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

        /*
         * While it would be nice to simply import LOCALDISKS from defines.js, that merely defines the *default*
         * value of the global variable 'LOCALDISKS'; since imported values are immutable, we must look at the global
         * variable, since that's the only one that *might* have been changed at runtime.
         */
        if (globals.window['LOCALDISKS'] && WebLib.getHostName().match(/^(.+\.local|localhost|0\.0\.0\.0|pcjs)$/)) {
            sURL = sURL.replace(/^\/(diskettes|gamedisks|miscdisks|harddisks|decdisks|pcsigdisks|pcsig[0-9a-z]*-disks|private)\//, "/disks/$1/").replace(/^\/discs\/([^/]*)\//, "/disks/cdroms/$1/");
        } else {
            sURL = sURL.replace(/^\/(disks\/|)(diskettes|gamedisks|miscdisks|harddisks|decdisks|pcsigdisks|pcsig[0-9a-z]*-disks|private)\//, "https://$2.pcjs.org/").replace(/^\/(disks\/cdroms|discs)\/([^/]*)\//, "https://$2.pcjs.org/");
        }

        Component.printf(MESSAGE.DEBUG, "getResource(%s)\n", sURL);

        /*
         * globals.node.readFileSync exists only when another module has import filelib.js, which means we're
         * running under Node.js, and we can use Node's file system to read local files.  Note that filelib.js only
         * offers readFileSync() at the moment.
         */
        if (globals.node.readFileSync && sURL.indexOf("http") != 0) {
            try {
                let encoding = (type == "arraybuffer"? null : "utf8");
                resource = globals.node.readFileSync(sURL, encoding);
                if (!encoding) {
                    /*
                     * For non-UTF8 data, readFileSync() returns a DataBuffer, which wraps a Node Buffer, which wraps an ArrayBuffer.
                     */
                    resource = resource.buffer;
                    if (resource.buffer) resource = resource.buffer;
                }
            } catch (err) {
                nErrorCode = err['errno'];
            }
            if (resource !== undefined) {
                if (done) done(sURL, resource, nErrorCode);
                return [resource, nErrorCode];
            }
        }

        /*
         * If PCjs is simulating a command-line environment inside a browser, PCFS (the PCjs File System) can be used
         * to simulate a local file system.  So we check for that next.
         */
        if (PCFS.isPCFS(sURL)) {
            let item = PCFS.getItem(sURL);
            if (item) {
                resource = item.data;
                if (done) done(sURL, resource, nErrorCode);
                return [resource, nErrorCode];
            }
        }

        /*
         * Don't encode Windows paths (although frankly, that should never happen and I don't recall under what circumstances
         * it apparently did) or URLs with components (which the caller should have already encoded with encodeURIComponent()).
         */
        if (!sURL.match(/^[A-Z]:/i) && sURL.indexOf('?') < 0) {
            sURL = encodeURI(sURL);
        }

        let request;
        if (globals.window.XMLHttpRequest) {
            request = new globals.window.XMLHttpRequest();
        } else if (globals.window.ActiveXObject) {
            request = new globals.window.ActiveXObject("Microsoft.XMLHTTP");
        } else if (globals.window.fetch) {
            // Component.printf(MESSAGE.DEBUG + MESSAGE.LOG, "getResource.fetch(%s)\n", sURL);
            fetch(sURL)
            .then(response => {
                switch(type) {
                case "json":
                case "text":
                    return response.text();
                case "arraybuffer":
                    return response.arrayBuffer();
                default:
                    throw new Error("unsupported response type: " + type);
                }
            })
            .then(resource => {
                Component.printf(MESSAGE.DEBUG + MESSAGE.LOG, "getResource(%s): fetched %d bytes\n", sURL, resource.length);
                if (done) done(sURL, resource, nErrorCode);
            })
            .catch(error => {
                Component.printf(MESSAGE.LOG, "getResource(%s) fetch error: %d\n", sURL, nErrorCode);
                if (done) done(sURL, resource, nErrorCode);
            });
            return response;
        }

        let fArrayBuffer = false, fXHR2 = (typeof request.responseType === 'string');

        let callback = function getResourceDone() {
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
             *
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
                Component.printf(MESSAGE.LOG, "getResource(%s) exception: %s\n", sURL, err.message);
            }
            /*
             * The normal "success" case is a non-null resource and an HTTP status code of 200, but when loading files from the
             * local file system (ie, when using the "file:" protocol), we have to be a bit more flexible.
             */
            if (resource != null && (request.status == 200 || !request.status && resource.length && WebLib.getHostProtocol() == "file:")) {
                Component.printf(MESSAGE.DEBUG + MESSAGE.LOG, "getResource(%s): returned %d bytes\n", sURL, resource.length);
            }
            else {
                nErrorCode = request.status || -1;
                Component.printf(MESSAGE.DEBUG, "getResource(%s) error: %d\n", sURL, nErrorCode);
                if (!request.status && !WebLib.fAdBlockerWarning) {
                    let match = sURL.match(/(^https?:\/\/[^/]+)(.*)/);
                    if (match) {
                        WebLib.fAdBlockerWarning = true;
                        Component.alertUser("PCjs was unable to perform a cross-origin resource request to '" + match[1] + "'.\n\nIf you're running an ad blocker, try adding '" + WebLib.getHostOrigin() + "' to your whitelist (or find a smarter ad blocker).");
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
            Component.printf(MESSAGE.DEBUG + MESSAGE.LOG, "getResource(%s): posted %d bytes\n", sURL, sPost.length);
            request.open("POST", sURL, fAsync);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send(sPost);
        } else {
            // Component.printf(MESSAGE.DEBUG + MESSAGE.LOG, "getResource.get(%s)\n", sURL);
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
     * @returns {Object|null} (resource)
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
     * @returns {string}
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
        WebLib.getResource(sReportURL, dataPost, true);
    }

    /**
     * getHost()
     *
     * This is like getHostName() but with the port number, if any.
     *
     * @returns {string}
     */
    static getHost()
    {
        return globals.window.location? globals.window.location.host : "localhost";
    }

    /**
     * getHostName()
     *
     * @returns {string}
     */
    static getHostName()
    {
        return globals.window.location? globals.window.location.hostname : "localhost";
    }

    /**
     * getHostOrigin()
     *
     * This could also be implemented with window.location.origin, but that wasn't originally available in all browsers.
     *
     * @returns {string}
     */
    static getHostOrigin()
    {
        return globals.window.location? globals.window.location.protocol + "//" + globals.window.location.host : SITEURL;
    }

    /**
     * getHostProtocol()
     *
     * @returns {string}
     */
    static getHostProtocol()
    {
        return globals.window.location? globals.window.location.protocol : "file:";
    }

    /**
     * getHostURL()
     *
     * @returns {string|null}
     */
    static getHostURL()
    {
        return globals.window.location? globals.window.location.href : null;
    }

    /**
     * getUserAgent()
     *
     * @returns {string}
     */
    static getUserAgent()
    {
        return globals.window.navigator? globals.window.navigator.userAgent : "";
    }

    /**
     * hasLocalStorage
     *
     * true if localStorage support exists, is enabled, and works; false otherwise
     *
     * @returns {boolean}
     */
    static hasLocalStorage()
    {
        if (WebLib.fLocalStorage == null) {
            let f = false;
            if (globals.window.localStorage) {
                try {
                    globals.window.localStorage.setItem(WebLib.sLocalStorageTest, WebLib.sLocalStorageTest);
                    f = (globals.window.localStorage.getItem(WebLib.sLocalStorageTest) == WebLib.sLocalStorageTest);
                    globals.window.localStorage.removeItem(WebLib.sLocalStorageTest);
                } catch (e) {
                    WebLib.printLocalStorageError(e);
                    f = false;
                }
            }
            WebLib.fLocalStorage = f;
        }
        return WebLib.fLocalStorage;
    }

    /**
     * printLocalStorageError(e)
     *
     * @param {Error} e is an exception
     */
    static printLocalStorageError(e)
    {
        Component.printf(MESSAGE.ERROR, "Local storage error: %s\n", e.message);
    }

    /**
     * getLocalStorageItem(sKey)
     *
     * Returns the requested key value, or null if the key does not exist, or undefined if localStorage is not available
     *
     * @param {string} sKey
     * @returns {string|null|undefined} sValue
     */
    static getLocalStorageItem(sKey)
    {
        let sValue;
        if (WebLib.hasLocalStorage()) {
            try {
                sValue = globals.window.localStorage.getItem(sKey);
            } catch (e) {
                WebLib.printLocalStorageError(e);
            }
        }
        return sValue;
    }

    /**
     * setLocalStorageItem(sKey, sValue)
     *
     * @param {string} sKey
     * @param {string} sValue
     * @returns {boolean} true if localStorage is available, false if not
     */
    static setLocalStorageItem(sKey, sValue)
    {
        if (WebLib.hasLocalStorage()) {
            try {
                globals.window.localStorage.setItem(sKey, sValue);
                return true;
            } catch (e) {
                WebLib.printLocalStorageError(e);
            }
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
        if (WebLib.hasLocalStorage()) {
            try {
                globals.window.localStorage.removeItem(sKey);
            } catch (e) {
                WebLib.printLocalStorageError(e);
            }
        }
    }

    /**
     * getLocalStorageKeys()
     *
     * @returns {Array}
     */
    static getLocalStorageKeys()
    {
        let a = [];
        if (WebLib.hasLocalStorage()) {
            try {
                for (let i = 0, c = globals.window.localStorage.length; i < c; i++) {
                    a.push(globals.window.localStorage.key(i));
                }
            } catch (e) {
                WebLib.printLocalStorageError(e);
            }
        }
        return a;
    }

    /**
     * reloadPage()
     */
    static reloadPage()
    {
        if (globals.window.location) globals.window.location.reload();
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
     * @returns {boolean} is true if the string was found, false if not
     */
    static isUserAgent(s)
    {
        if (globals.window.navigator) {
            let userAgent = WebLib.getUserAgent();
            /*
             * Here's one case where we have to be careful with Component, because when isUserAgent() is called by
             * the init code below, component.js hasn't been loaded yet.  The simple solution for now is to remove the call.
             *
             *      Component.printf("agent: %s\n", userAgent);
             *
             * And yes, it would be pointless to use the conditional (?) operator below, if not for the Google Closure
             * Compiler (v20130823) failing to detect the entire expression as a boolean.
             */
            return s == "iOS" && (!!userAgent.match(/(iPod|iPhone|iPad)/) || (globals.window.navigator.platform === 'MacIntel' && globals.window.navigator.maxTouchPoints > 1)) || s == "MSIE" && !!userAgent.match(/(MSIE|Trident)/) || (userAgent.indexOf(s) >= 0);
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
     * @returns {boolean} is true if the browser appears to be a mobile (ie, non-desktop) web browser, false if not
     */
    static isMobile(sDevice)
    {
        let sMobile = WebLib.getURLParm("mobile");
        if (sMobile) return sMobile == "true";
        if (WebLib.isUserAgent("Mobi")) {
            if (!sDevice) return true;
            let fInvert = sDevice[0] == '!';
            if (fInvert) sDevice = sDevice.substr(1);
            return WebLib.isUserAgent(sDevice) != fInvert;
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
     * @returns {string|null}
     */
    static findProperty(obj, sProp, sSuffix)
    {
        if (obj) {
            for (let i = 0; i < WebLib.asBrowserPrefixes.length; i++) {
                let sName = WebLib.asBrowserPrefixes[i];
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
     * @returns {string|undefined}
     */
    static getURLParm(sParm)
    {
        if (!WebLib.parmsURL) {
            WebLib.parmsURL = WebLib.parseURLParms();
        }
        return WebLib.parmsURL[sParm] || WebLib.parmsURL[sParm.toLowerCase()];
    }

    /**
     * parseURLParms(sParms)
     *
     * @param {string} [sParms] containing the parameter portion of a URL (ie, after the '?')
     * @returns {Object} containing properties for each parameter found
     */
    static parseURLParms(sParms)
    {
        let aParms = {};
        if (globals.window.location) {
            if (!sParms) {
                /*
                 * Note that window.location.href returns the entire URL, whereas window.location.search
                 * returns only the parameters, if any (starting with the '?', which we skip over with a substr() call).
                 */
                sParms = globals.window.location.search.substr(1);
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
                // if (WebLib.isUserAgent("Chrome")) {
                //     sAlert += '\n\nIn Chrome, after clicking OK, you may ALSO have to select the "Window" menu, choose "Downloads", and then locate this download and select "Keep".';
                //     sAlert += '\n\nThis is part of Chrome\'s "Security By Jumping Through Extra Hoops" technology, which is much easier for Google to implement than actually checking for something malicious.';
                //     sAlert += '\n\nAnd for the record, there is nothing malicious on the PCjs website.';
                // }
            }
            else if (globals.window.open) {
                globals.window.open(sURI);
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
            // Component.printf(MESSAGE.DEBUG, "onMouseDown()\n");
            if (!fIgnoreMouseEvents) {
                if (!timer) {
                    ms = msDelay;
                    fnRepeat();
                }
            }
        };
        e.ontouchstart = function()
        {
            // Component.printf(MESSAGE.DEBUG, "onTouchStart()\n");
            if (!timer) {
                ms = msDelay;
                fnRepeat();
            }
        };
        e.onmouseup = e.onmouseout = function()
        {
            // Component.printf(MESSAGE.DEBUG, "onMouseUp()/onMouseOut()\n");
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
        };
        e.ontouchend = e.ontouchcancel = function()
        {
            // Component.printf(MESSAGE.DEBUG, "onTouchEnd()/onTouchCancel()\n");
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
     * addPageEvent(sEvent, fn)
     *
     * For 'load', 'unload', and 'pageshow' events, most callers should NOT use this function, but instead use
     * WebLib.onInit(), WebLib.onShow(), and WebLib.onExit(), respectively.
     *
     * The only components that should still use addPageEvent() are THIS component (see the bottom of this file)
     * and components that need to capture other events (eg, the 'resize' event in the Video component).
     *
     * @param {string} sEvent
     * @param {function()} fn
     */
    static addPageEvent(sEvent, fn)
    {
        if (globals.window.addEventListener) {
            globals.window.addEventListener(sEvent, fn);
        }
    }

    /**
     * onInit(fn)
     *
     * Use this instead of setting window.onload.  Allows multiple JavaScript modules to define their own 'load' event handler.
     *
     * @param {function()} fn
     */
    static onInit(fn)
    {
        WebLib.aPageEventHandlers['init'].push(fn);
    }

    /**
     * onShow(fn)
     *
     * @param {function()} fn
     *
     * Use this instead of setting window.onpageshow.  Allows multiple JavaScript modules to define their own 'pageshow' event handler.
     */
    static onShow(fn)
    {
        WebLib.aPageEventHandlers['show'].push(fn);
    }

    /**
     * onError(sMessage)
     *
     * @param {string} sMessage
     */
    static onError(sMessage)
    {
        Component.printf(MESSAGE.NOTICE, "%s\n\nIf it happens again, please send the URL to support@pcjs.org. Thanks.\n", sMessage);
    }

    /**
     * onExit(fn)
     *
     * @param {function()} fn
     *
     * Use this instead of setting window.onunload.  Allows multiple JavaScript modules to define their own 'unload' event handler.
     */
    static onExit(fn)
    {
        WebLib.aPageEventHandlers['exit'].push(fn);
    }

    /**
     * doPageEvent(sEvent, browser)
     *
     * @param {string} sEvent (one of 'init', 'show' or 'exit')
     * @param {boolean} [browser] (true if generated by the browser)
     */
    static doPageEvent(sEvent, browser)
    {
        let afn = WebLib.aPageEventHandlers[sEvent];
        if (afn && WebLib.fPageEventsEnabled) {
            try {
                for (let i = 0; i < afn.length; i++) {
                    afn[i]();
                }
            } catch (e) {
                WebLib.onError("An unexpected error occurred: " + e.message);
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
        if (!WebLib.fPageEventsEnabled && fEnable) {
            WebLib.fPageEventsEnabled = true;
            if (WebLib.fPageLoaded) WebLib.doPageEvent('init');
            if (WebLib.fPageShowed) WebLib.doPageEvent('show');
            return;
        }
        WebLib.fPageEventsEnabled = fEnable;
    }

    /**
     * doPageInit()
     */
    static doPageInit()
    {
        WebLib.fPageLoaded = true;
        WebLib.doPageEvent('init', true);
    }

    /**
     * doPageShow()
     */
    static doPageShow()
    {
        WebLib.fPageShowed = true;
        WebLib.doPageEvent('show', true);
    }

    /**
     * doPageExit()
     */
    static doPageExit()
    {
        WebLib.doPageEvent('exit', true);
    }

    /**
     * doPageReset()
     */
    static doPageReset()
    {
        if (WebLib.fPageLoaded) {
            WebLib.fPageLoaded = false;
            WebLib.fPageShowed = false;
            /*
             * TODO: Anything else?
             */
        }
    }
}

WebLib.parmsURL = null;            // initialized on first call to parseURLParms()

WebLib.aPageEventHandlers = {
    'init': [],                 // list of 'load' handlers
    'show': [],                 // list of 'pageshow' handlers
    'exit': []                  // list of 'unload' handlers (although we prefer to use 'beforeunload' if possible)
};

WebLib.asBrowserPrefixes = ['', 'moz', 'ms', 'webkit'];

WebLib.fPageLoaded = false;        // set once the page's first 'load' event has occurred
WebLib.fPageShowed = false;        // set once the page's first 'pageshow' event has occurred
WebLib.fPageEventsEnabled = true;  // default is true, set to false (or true) by enablePageEvents()
WebLib.fAdBlockerWarning = false;

/**
 * fLocalStorage
 *
 * true if localStorage support exists, is enabled, and works; "falsey" otherwise
 *
 * @type {boolean|null}
 */
WebLib.fLocalStorage = null;

/**
 * TODO: Is there any way to get the Closure Compiler to stop inlining this string?  This isn't cutting it.
 *
 * @const {string}
 */
WebLib.sLocalStorageTest = "PCjs.localStorage";

WebLib.addPageEvent('load', WebLib.doPageInit);
WebLib.addPageEvent('pageshow', WebLib.doPageShow);
WebLib.addPageEvent(WebLib.isUserAgent("iOS")? 'pagehide' : (WebLib.isUserAgent("Opera")? 'unload' : 'beforeunload'), WebLib.doPageExit);

/*
 * If this is DEBUG (eg, un-COMPILED) code, then allow the user to override DEBUG with a "debug=false" embedded in
 * the URL; note that the Closure Compiler won't let us alter the DEBUG variable, because it's defined as a @define, which
 * implies @const as well, so we must resort to modifying it indirectly, using the global window object.
 *
 * TODO: Consider yet another embedXXX() parameter that would also allow DEBUG to be turned off on a page-by-page basis;
 * it's low priority, because it would only affect machines that explicitly request un-COMPILED code, and there are very
 * few such machines (eg, /blog/_posts/2015/2015-01-17-pcjs-uncompiled.md).
 *
 * Deal with WebLib.getURLParm("backtrack") in /machines/pcx86/modules/v2/defines.js at the same time.
 */
if (DEBUG) {
    let debug = WebLib.getURLParm("debug");
    if (debug == "false") {
        globals.window['DEBUG'] = false;
    }
}

/**
 * @copyright https://www.pcjs.org/machines/modules/v2/component.js (C) 2012-2025 Jeff Parsons
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
 * @class Component
 * @unrestricted
 */
class Component {
    /*
    * Types recognized and supported by selected functions (eg, Computer.getMachineParm())
    */
    static TYPE = {
        NUMBER:     "number",
        OBJECT:     "object",
        STRING:     "string"
    };

    /*
    * Every component created on the current page is recorded in this array (see Component.add()),
    * enabling any component to locate another component by ID (see Component.getComponentByID())
    * or by type (see Component.getComponentByType()).
    *
    * Every machine on the page are now recorded as well, by their machine ID.  We then record the
    * various resources used by that machine.
    */

    static asyncCommands = [
        'hold', 'sleep', 'wait'
    ];

    static globalCommands = {
        'alert': Component.scriptAlert,
        'sleep': Component.scriptSleep
    };

    static componentCommands = {
        'select':   Component.scriptSelect
    };

    static lastUID = 0;

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
        this.uid = ++Component.lastUID;

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
         *      if (DEBUG) Component.printf("Component.add(%s,%s)\n", component.type, component.id);
         */
        globals.pcjs['components'].push(component);
    }

    /**
     * Component.addMachine(idMachine)
     *
     * @param {string} idMachine
     */
    static addMachine(idMachine)
    {
        globals.pcjs['machines'][idMachine] = {};
    }

    /**
     * Component.destroyMachine(idMachine)
     *
     * @param {string} idMachine
     * @returns {boolean} true if the machine was destroyed, false if it didn't exist
     */
    static destroyMachine(idMachine)
    {
        if (globals.pcjs['machines'][idMachine]) {
            let components = globals.pcjs['components'];
            for (let i = 0; i < components.length; i++) {
                let component = components[i];
                if (component.id.indexOf(idMachine) == 0) {
                    components.splice(i--, 1);
                }
            }
            delete globals.pcjs['machines'][idMachine];
            return true;
        }
        return false;
    }

    /**
     * Component.getMachines()
     *
     * @returns {Array.<string>}
     */
    static getMachines()
    {
        return Object.keys(globals.pcjs['machines']);
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
         * I used to assert(machines[idMachine]), but when we're running as a Node app, embed.js is not used,
         * so addMachine() is never called, so resources do not need to be recorded.
         */
        if (globals.pcjs['machines'][idMachine] && sName) {
            globals.pcjs['machines'][idMachine][sName] = data;
            if (sName == 'parms' && typeof data == "string") {
                globals.pcjs['machines'][idMachine]['config'] = eval('(' + data + ')');
            }
        }
    }

    /**
     * Component.getMachineResources(idMachine)
     *
     * @param {string} idMachine
     * @returns {Object|undefined}
     */
    static getMachineResources(idMachine)
    {
        return globals.pcjs['machines'][idMachine];
    }

    /**
     * Component.getTime()
     *
     * @returns {number} the current time, in milliseconds
     */
    static getTime()
    {
        return Date.now() || +new Date();
    }

    /**
     * Component.printf(format, ...args)
     *
     * If format is a number, it's used as a message number, and the format string is the first arg.
     *
     * @param {string|number} format
     * @param {...} [args]
     */
    static printf(format, ...args)
    {
        let bitsMessage = 0;
        if (typeof format == "number") {
            bitsMessage = format;
            format = args.shift();
        }
        if (DEBUG || bitsMessage >= MESSAGE.LOG && bitsMessage <= MESSAGE.ERROR) {
            let alert = false;
            if (bitsMessage == MESSAGE.ERROR) {
                alert = true;
                format = "Error: " + format;
            } else if (bitsMessage == MESSAGE.WARNING) {
                alert = true;
                format = "Warning: " + format;
            } else if (bitsMessage == MESSAGE.NOTICE) {
                alert = true;
            }
            let sMessage = StrLib.sprintf(format, ...args).trim();
            if (!alert) {
                console.log(sMessage);
            } else {
                Component.alertUser(sMessage);
            }
        }
    }

    /**
     * Component.assert(f, s, args)
     *
     * Verifies conditions that must be true (for DEBUG builds only).
     *
     * The Closure Compiler should automatically remove all references to Component.assert() in non-DEBUG builds.
     * TODO: Add a task to the build process that "asserts" there are no instances of "assertion failure" in RELEASE builds.
     *
     * @param {boolean|number|undefined} f is the expression we are asserting to be true
     * @param {string} [s] is description of the assertion on failure
     * @param {...} [args]
     */
    static assert(f, s, ...args)
    {
        if (DEBUG) {
            if (!f) {
                if (!s) s = "assertion failure";
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
                    throw new Error(StrLib.sprintf(s, ...args));
                } catch(e) {
                    Component.printf(MESSAGE.ERROR, "%s\n", (e.stack || e.message).replace(/^Error: /i, ""));
                }
            }
        }
    }

    /**
     * Component.warning(s)
     *
     * @param {string} s describes the warning
     */
    static warning(s)
    {
        Component.printf(MESSAGE.WARNING, s);
    }

    /**
     * Component.error(s)
     *
     * @param {string} s describes the error; an alert() is displayed as well
     */
    static error(s)
    {
        Component.printf(MESSAGE.ERROR, s);
    }

    /**
     * Component.alertUser(sMessage, fPrinted)
     *
     * @param {string} sMessage
     * @param {boolean} [fPrinted] (true if the message has already been printed)
     */
    static alertUser(sMessage, fPrinted)
    {
        if (globals.window.alert) {
            globals.window.alert(sMessage);
        }
        if (!fPrinted) console.log(sMessage);
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
        if (globals.window.confirm) {
            fResponse = globals.window.confirm(sPrompt);
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
        if (globals.window.prompt) {
            sResponse = globals.window.prompt(sPrompt, sDefault === undefined? "" : sDefault);
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
     * @param {HTMLElement} element (from the DOM)
     * @param {string} sAppClass
     */
    static bindComponentControls(component, element, sAppClass)
    {
        let aeControls = Component.getElementsByClass(sAppClass + "-control", "", element.parentNode);

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
                                Component.printf(MESSAGE.WARNING, "Component \"%s\" missing binding%s\n", component.toString(), (parms? " for " + parms['type'] : ""));
                            }
                            iClass = aClasses.length;
                            break;
                        default:
                            // if (DEBUG) Component.printf(MESSAGE.WARNING, "Component.bindComponentControls(%s): unrecognized control class \"%s\"\n", component.toString(), sClass);
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
     * @param {string} [idRelated] of related component, if any
     * @returns {Array} of components
     */
    static getComponents(idRelated)
    {
        let i;
        let aComponents = [];
        /*
         * If idRelated is provided, we check it for a machine prefix, and use any
         * existing prefix to constrain matches to IDs with the same prefix, in order to
         * avoid matching components belonging to other machines.
         */
        if (idRelated && (i = idRelated.indexOf('.')) > 0) {
            idRelated = idRelated.substr(0, i + 1);
        }
        let components = globals.pcjs['components'];
        for (i = 0; i < components.length; i++) {
            let component = components[i];
            if (!idRelated || component.id.indexOf(idRelated) == 0) {
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
     * @param {string|boolean} [idRelated] of related component
     * @returns {Component|null}
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
            let components = globals.pcjs['components'];
            for (i = 0; i < components.length; i++) {
                if (components[i]['id'] === id) {
                    return components[i];
                }
            }
            if (components.length && idRelated !== false) {
                Component.printf(MESSAGE.WARNING, "Component ID \"%s\" not found\n", id);
            }
        }
        return null;
    }

    /**
     * Component.getComponentByType(sType, idRelated, componentPrev)
     *
     * @param {string} sType of the desired component
     * @param {string} [idRelated] of related component
     * @param {Component|boolean|null} [componentPrev] of previously returned component, if any
     * @returns {Component|null}
     */
    static getComponentByType(sType, idRelated, componentPrev = null)
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
            let components = globals.pcjs['components'];
            for (i = 0; i < components.length; i++) {
                if (componentPrev) {
                    if (componentPrev == components[i]) componentPrev = null;
                    continue;
                }
                if (sType == components[i].type && (!idRelated || !components[i].id.indexOf(idRelated))) {
                    return components[i];
                }
            }
            if (MAXDEBUG && componentPrev !== false) {
                Component.printf(MESSAGE.WARNING, "Component type \"%s\" not found\n", sType);
            }
        }
        return null;
    }

    /**
     * Component.getComponentParms(element)
     *
     * @param {HTMLElement} element (from the DOM)
     * @returns {Object|null}
     */
    static getComponentParms(element)
    {
        let parms = null;
        if (element.getAttribute) {
            let sParms = element.getAttribute("data-value");
            if (sParms) {
                try {
                    parms = /** @type {Object} */ (eval('(' + sParms + ')'));
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
        } else {
            parms = element['config'] || null;
            if (parms) {
                let idMachine = element['id'], idComponent = parms['id'];
                if (idMachine && idComponent && idComponent.indexOf('.') < 0) parms['id'] = idMachine + '.' + idComponent;
            }
        }
        return parms;
    }

    /**
     * Component.getElementsByClass(sClass, sComponent, element)
     *
     * This is a cross-browser helper function, since not all browser's support getElementsByClassName()
     *
     * TODO: This should probably be moved into weblib.js at some point, along with the control binding functions above,
     * to keep all the browser-related code together.
     *
     * @param {string} sClass
     * @param {string} [sComponent]
     * @param {HTMLElement|Object} [element] (from the DOM; default is document)
     * @returns {Array|NodeList}
     */
    static getElementsByClass(sClass, sComponent = "", element = globals.document)
    {
        let ae = [];
        if (sComponent) {
            sClass += '-' + sComponent;
            if (sComponent != "machine") sClass += "-object";
        }
        /*
         * Use the browser's built-in getElementsByClassName() if it appears to be available
         * (for example, it's not available in IE8, but it should be available in IE9 and up)
         */
        if (globals.browser) {
            if (element.getElementsByClassName) {
                ae = element.getElementsByClassName(sClass);
            }
            else if (element.getElementsByTagName) {
                let i, j;
                let aeAll = element.getElementsByTagName("*");
                let re = new RegExp('(^| )' + sClass + '( |$)');
                for (i = 0, j = aeAll.length; i < j; i++) {
                    if (re.test(aeAll[i].className)) {
                        ae.push(aeAll[i]);
                    }
                }
            }
        } else {
            let machineIDs = Object.keys(globals.pcjs['machines']);
            for (let iMachine = 0; iMachine < machineIDs.length; iMachine++) {
                let idMachine = machineIDs[iMachine];
                let configMachine = globals.pcjs['machines'][idMachine]['config'];
                if (configMachine) {
                    let configComponent = configMachine[sComponent];
                    if (configComponent) {
                        if (!Array.isArray(configComponent)) {
                            configComponent = [configComponent];
                        }
                        for (let component of configComponent) {
                            let fakeElement = {
                                'id': idMachine,
                                'config': component
                            };
                            ae.push(fakeElement);
                        }
                    }
                }
            }
        }
        if (!ae.length) {
            if (MAXDEBUG) Component.printf(MESSAGE.WARNING, "No elements of class \"%s\" found\n", sClass);
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
     * @returns {Array}
     */
    static getScriptCommands(sScript)
    {
        let cch = sScript.length;
        let commands = [], aTokens = [], sToken = "", chQuote = null;
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
                        commands.push(aTokens);
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
            commands.push(aTokens);
        }
        return commands;
    }

    /**
     * Component.processScript(idMachine, sScript)
     *
     * @param {string} idMachine
     * @param {string} [sScript]
     * @returns {boolean}
     */
    static processScript(idMachine, sScript)
    {
        let fSuccess = false;
        let commands = globals.pcjs['commands'];
        idMachine += ".machine";
        if (!sScript) {
            delete commands[idMachine];
            fSuccess = true;
        }
        else if (typeof sScript == "string" && !commands[idMachine]) {
            fSuccess = true;
            commands[idMachine] = Component.getScriptCommands(sScript);
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
     * @returns {boolean}
     */
    static processCommands(idMachine)
    {
        let fSuccess = true;
        let commands = globals.pcjs['commands'][idMachine];

     // let dbg = Component.getComponentByType("Debugger", idMachine);

        while (commands && commands.length) {

            let aTokens = commands.splice(0, 1)[0];
            let sCommand = aTokens[0];

            /*
             * It's possible to route this output to the Debugger window with dbg.printf()
             * instead, but it's a bit too confusing mingling script output in a window that
             * already mingles Debugger and machine output.
             */
            Component.printf(MESSAGE.SCRIPT, aTokens.join(' '));

            let fnCallReady = null;
            if (Component.asyncCommands.indexOf(sCommand) >= 0) {
                fnCallReady = function processNextCommand() {
                    return function() {
                        Component.processCommands(idMachine);
                    };
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

        if (commands && !commands.length) {
            delete globals.pcjs['commands'][idMachine];
        }

        return fSuccess;
    }

    /**
     * Component.scriptAlert(sMessage)
     *
     * @param {string} sMessage
     * @returns {boolean}
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
     * @returns {boolean}
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
     * @returns {boolean}
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
     * @returns {string}
     */
    toString()
    {
        return (this.name? this.name : (this.id || this.type));
    }

    /**
     * getMachineNum()
     *
     * @this {Component}
     * @returns {number} unique machine number
     */
    getMachineNum()
    {
        let nMachine = 1;
        if (this.idMachine) {
            let aDigits = this.idMachine.match(/\d+/);
            if (aDigits !== null) {
                nMachine = parseInt(aDigits[0], 10);
            }
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
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
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
                /*
                 * This was added for Firefox (Safari will clear the <textarea> on a page reload, but Firefox does not).
                 */
                controlTextArea.value = "";
                this.print = function(component, control) {
                    return function printControl(sMessage, bitsMessage = 0) {
                        if (!sMessage) sMessage = "";
                        if (bitsMessage == MESSAGE.PROGRESS && sMessage.slice(-4) == "...\n") {
                            Component.replaceControl(control, sMessage.slice(0, -1), sMessage.slice(0, -1) + ".");
                        } else {
                            Component.appendControl(control, sMessage);
                        }
                        if (!COMPILED) Component.printf(sMessage);
                    };
                }(this, controlTextArea);
            }
            return true;

        default:
            return false;
        }
    }

    /**
     * assert(f, s, args)
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
     * @param {boolean|number|undefined} f is the expression asserted to be true
     * @param {string} [s] is a description of the assertion to be displayed or logged on failure
     * @param {...} [args]
     */
    assert(f, s, ...args)
    {
        if (DEBUG) {
            if (!f) {
                s = "assertion failure in " + (this.id || this.type) + (s? ": " + s : "");
                if (DEBUGGER && this.dbg) {
                    this.dbg.stopCPU();
                }

            }
        }
    }

    /**
     * print(s, bitsMessage)
     *
     * Components using print() should wait until after their constructor has run to display any messages;
     * if a Control Panel has been loaded, its override will not take effect until its own constructor has run.
     *
     * @this {Component}
     * @param {string} s
     * @param {number} [bitsMessage] (optional; this method doesn't use it, but some overrides do)
     */
    print(s, bitsMessage = 0)
    {
        Component.printf(bitsMessage, s);
    }

    /**
     * setError(s)
     *
     * Set a fatal error condition
     *
     * TODO: Any cases where we should still prefix the string with "Fatal error: "?
     *
     * @this {Component}
     * @param {string} s describes a fatal error condition
     */
    setError(s)
    {
        this.flags.error = true;
        this.printf(MESSAGE.NOTICE, "%s\n", s);
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
     * @returns {boolean} true if a fatal error condition exists, false if not
     */
    isError()
    {
        if (this.flags.error) {
            this.print(this.toString() + " error\n");
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
     * @returns {boolean} true if the component is in a "ready" state, false if not
     */
    isReady(fnReady)
    {
        if (fnReady) {
            if (this.flags.ready) {
                fnReady();
            } else {
                if (MAXDEBUG) this.printf(MESSAGE.LOG, "NOT ready\n");
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
                if (MAXDEBUG /* || this.name */) this.printf(MESSAGE.LOG, "ready\n");
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
     * @returns {boolean} true if "busy", false if not
     */
    isBusy(fCancel)
    {
        if (this.flags.busy) {
            if (fCancel) {
                this.flags.busyCancel = true;
            } else if (fCancel === undefined) {
                this.print(this.toString() + " busy\n");
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
     * @returns {boolean}
     */
    setBusy(fBusy)
    {
        if (this.flags.busyCancel) {
            this.flags.busy = false;
            this.flags.busyCancel = false;
            return false;
        }
        if (this.flags.error) {
            this.print(this.toString() + " error\n");
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
     * @returns {boolean} true if successful, false if failure
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
     * @returns {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
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
     * @returns {number}
     */
    static clearBits(num, bits)
    {
        let shift = Math.pow(2, 32);
        let numHi = (num / shift)|0;
        let bitsHi = (bits / shift)|0;
        return (num & ~bits) + (numHi & ~bitsHi) * shift;
    }

    /**
     * maskBits(num, bits)
     *
     * Helper function for returning bits in numbers with more than 32 bits.
     *
     * @param {number} num
     * @param {number} bits
     * @returns {number}
     */
    static maskBits(num, bits)
    {
        let shift = Math.pow(2, 32);
        let numHi = (num / shift)|0;
        let bitsHi = (bits / shift)|0;
        return (num & bits) + (numHi & bitsHi) * shift;
    }

    /**
     * setBits(num, bits)
     *
     * Helper function for setting bits in numbers with more than 32 bits.
     *
     * @param {number} num
     * @param {number} bits
     * @returns {number}
     */
    static setBits(num, bits)
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
     * @returns {boolean} (true if ALL specified bits are set, false if not)
     */
    static testBits(num, bits)
    {
        let shift = Math.pow(2, 32);
        let numHi = (num / shift)|0;
        let bitsHi = (bits / shift)|0;
        return ((num & bits) == (bits|0) && (numHi & bitsHi) == bitsHi);
    }

    /**
     * messageEnabled(bitsMessage)
     *
     * If bitsMessage is MESSAGE.NONE (0), then the component's Messages category is used.
     *
     * @this {Component}
     * @param {number} [bitsMessage] is zero or more Message flags
     * @returns {boolean} true if the specified message(s) are enabled, false if not
     */
    messageEnabled(bitsMessage = 0)
    {
        /*
         * It's important to subtract MESSAGE.ADDR from bitsMessage before testing for MESSAGE.NONE, because
         * if MESSAGE.ADDR was the ONLY bit specified, we still want to default to the component's message category.
         */
        if (bitsMessage & MESSAGE.ADDR) bitsMessage -= MESSAGE.ADDR;
        bitsMessage = bitsMessage || this.bitsMessage;
        /*
         * printf() calls that specify MESSAGE.DEBUG should be stripped out of non-DEBUG builds, but just in case
         * any of those calls slipped through the cracks, we ensure that DEBUG messages are only printed in DEBUG builds.
         */
        if (DEBUG || !Component.testBits(bitsMessage, MESSAGE.DEBUG)) {
            /*
             * The debugger has the ability to filter any messages listed in MESSAGE.NAMES, and that currently
             * includes message types LOG and WARNING, so if the debugger is loaded, subtract those from the types we allow
             * by default.
             */
            let allowedMessages = MESSAGE.TYPES - (this.dbg? MESSAGE.LOG + MESSAGE.WARNING : 0);
            if (Component.testBits(allowedMessages, bitsMessage) || this.dbg && Component.testBits(this.dbg.bitsMessage, bitsMessage)) {
                return true;
            }
        }
        return false;
    }

    /**
     * printf(format, ...args)
     *
     * If format is a number, it's used as a message number, and the format string is the first arg; the call
     * will be suppressed unless the corresponding message category has been enabled by the debugger.
     *
     * Most components provide a default message number to their constructor, so any printf() without an explicit
     * message number will use that default.  If the caller wants a particular call to ALWAYS print, regardless
     * of whether the debugger has enabled it, the caller can use printf(MESSAGE.NONE), and if the caller wants
     * EVERY call to print, then simply omit any message number from their constructor AND all printf() calls.
     *
     * @this {Component}
     * @param {string|number} format
     * @param {...} args
     */
    printf(format, ...args)
    {
        let bitsMessage = 0;
        if (typeof format == "number") {
            bitsMessage = format || MESSAGE.PROGRESS;
            format = args.shift();
            if (Component.testBits(bitsMessage, MESSAGE.LOG)) {
                format = (this.id || this.type || "log") + ": " + format;
            }
            else if (Component.testBits(bitsMessage, MESSAGE.STATUS)) {
                format = this.type + ": " + format;
            }
        }
        if (this.messageEnabled(bitsMessage)) {
            let sMessage = StrLib.sprintf(format, ...args);
            if (this.dbg && this.dbg.message) {
                this.dbg.message(sMessage, bitsMessage);
            } else {
                this.print(sMessage, bitsMessage);
            }
        }
    }

    /**
     * printIO(port, bOut, addrFrom, name, bIn, bitsMessage)
     *
     * If bitsMessage is not specified, the component's Messages category is used,
     * and if bitsMessage is true, the message is displayed if MESSAGE.PORT is enabled also.
     *
     * @this {Component}
     * @param {number} port
     * @param {number} [bOut] if an output operation
     * @param {number} [addrFrom]
     * @param {string} [name] of the port, if any
     * @param {number} [bIn] is the input value, if known, on an input operation
     * @param {number|boolean} [bitsMessage] is zero or more Messages flag(s)
     */
    printIO(port, bOut, addrFrom, name, bIn, bitsMessage = this.bitsMessage)
    {
        if (DEBUGGER && this.dbg) {
            if (bitsMessage === true) {
                bitsMessage = 0;
            }
            this.dbg.messageIO(this, port, bOut, addrFrom, name, bIn, bitsMessage);
        }
    }
}

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
    };
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
 * @copyright https://www.pcjs.org/machines/pcx80/modules/v2/defines.js (C) 2012-2025 Jeff Parsons
 */

/**
 * @define {string}
 */
const APPCLASS = "pcx80";          // this @define is the default application class (eg, "pcx86", "c1p")

/**
 * @define {string}
 */
const APPNAME = "PCx80";          // this @define is the default application name (eg, "PCx86", "C1Pjs")

/**
 * @define {boolean}
 *
 * BYTEARRAYS is a Closure Compiler compile-time option that allocates an Array of numbers for every Memory block,
 * where each a number represents ONE byte; very wasteful, but potentially slightly faster.
 *
 * See the Memory component for details.
 */
const BYTEARRAYS = false;

/**
 * TYPEDARRAYS enables use of typed arrays for Memory blocks.  This used to be a compile-time-only option, but I've
 * added Memory access functions for typed arrays (see MemoryX80.afnTypedArray), so support can be enabled dynamically now.
 *
 * See the Memory component for details.
 */
const TYPEDARRAYS = true; // (typeof ArrayBuffer !== 'undefined');


/**
 * @copyright https://www.pcjs.org/machines/pcx80/modules/v2/message.js (C) 2012-2025 Jeff Parsons
 */

MESSAGE.CPU         = 0x00000002;
MESSAGE.BUS         = 0x00000004;
MESSAGE.MEM         = 0x00000008;
MESSAGE.PORT        = 0x00000010;
MESSAGE.NVR         = 0x00000020;
MESSAGE.CHIPSET     = 0x00000040;
MESSAGE.KBD         = 0x00000080;
MESSAGE.KEY         = 0x00000100;
MESSAGE.VIDEO       = 0x00000200;
MESSAGE.FDC         = 0x00000400;
MESSAGE.DISK        = 0x00000800;
MESSAGE.SERIAL      = 0x00001000;
MESSAGE.SPEAKER     = 0x00002000;
MESSAGE.COMPUTER    = 0x00004000;

/*
 * Message categories supported by the messageEnabled() function and other assorted message
 * functions. Each category has a corresponding bit value that can be combined (ie, OR'ed) as
 * needed.  The Debugger's message command ("m") is used to turn message categories on and off,
 * like so:
 *
 *      m port on
 *      m port off
 *      ...
 *
 * NOTE: The order of these categories can be rearranged, alphabetized, etc, as desired; just be
 * aware that changing the bit values could break saved Debugger states (not a huge concern, just
 * something to be aware of).
 */
MESSAGE.NAMES["cpu"]        = MESSAGE.CPU;
MESSAGE.NAMES["bus"]        = MESSAGE.BUS;
MESSAGE.NAMES["mem"]        = MESSAGE.MEM;
MESSAGE.NAMES["port"]       = MESSAGE.PORT;
MESSAGE.NAMES["nvr"]        = MESSAGE.NVR;
MESSAGE.NAMES["chipset"]    = MESSAGE.CHIPSET;
MESSAGE.NAMES["kbd"]        = MESSAGE.KBD;
MESSAGE.NAMES["key"]        = MESSAGE.KEY;
MESSAGE.NAMES["video"]      = MESSAGE.VIDEO;
MESSAGE.NAMES["fdc"]        = MESSAGE.FDC;
MESSAGE.NAMES["disk"]       = MESSAGE.DISK;
MESSAGE.NAMES["serial"]     = MESSAGE.SERIAL;
MESSAGE.NAMES["speaker"]    = MESSAGE.SPEAKER;
MESSAGE.NAMES["computer"]   = MESSAGE.COMPUTER;


/**
 * @copyright https://www.pcjs.org/machines/pcx80/modules/v2/cpudef.js (C) 2012-2025 Jeff Parsons
 */

const CPUDefX80 = {
    /*
     * CPU model numbers (supported)
     */
    MODEL_8080: 8080,

    /*
     * This constant is used to mark points in the code where the physical address being returned
     * is invalid and should not be used.
     *
     * In a 32-bit CPU, -1 (ie, 0xffffffff) could actually be a valid address, so consider changing
     * ADDR_INVALID to NaN or null (which is also why all ADDR_INVALID tests should use strict equality
     * operators).
     *
     * The main reason I'm NOT using NaN or null now is my concern that, by mixing non-numbers
     * (specifically, values outside the range of signed 32-bit integers), performance may suffer.
     *
     * WARNING: Like many of the properties defined here, ADDR_INVALID is a common constant, which the
     * Closure Compiler will happily inline (with or without @const annotations; in fact, I've yet to
     * see a @const annotation EVER improve automatic inlining).  However, if you don't make ABSOLUTELY
     * certain that this file is included BEFORE the first reference to any of these properties, that
     * automatic inlining will no longer occur.
     */
    ADDR_INVALID: -1,

    /*
     * Processor Status flag definitions (stored in regPS)
     */
    PS: {
        CF:     0x0001,         // bit 0: Carry Flag
        BIT1:   0x0002,         // bit 1: reserved, always set
        PF:     0x0004,         // bit 2: Parity Flag
        BIT3:   0x0008,         // bit 3: reserved, always clear
        AF:     0x0010,         // bit 4: Auxiliary Carry Flag
        BIT5:   0x0020,         // bit 5: reserved, always clear
        ZF:     0x0040,         // bit 6: Zero Flag
        SF:     0x0080,         // bit 7: Sign Flag
        ALL:    0x00D5,         // all "arithmetic" flags (CF, PF, AF, ZF, SF)
        MASK:   0x00FF,         //
        IF:     0x0200          // bit 9: Interrupt Flag (set if interrupts enabled; Intel calls this the INTE bit)
    },
    PARITY:  [                  // 256-byte array with a 1 wherever the number of set bits of the array index is EVEN
        1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1,
        0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0,
        0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0,
        1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1,
        0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0,
        1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1,
        1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1,
        0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0,
        0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0,
        1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1,
        1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1,
        0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0,
        1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1,
        0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0,
        0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0,
        1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1
    ],
    /*
     * Interrupt-related flags (stored in intFlags)
     */
    INTFLAG: {
        NONE:   0x0000,
        INTR:   0x00ff,         // mask for 8 bits, representing interrupt levels 0-7
        HALT:   0x0100          // halt requested; see opHLT()
    },
    /*
     * Opcode definitions
     */
    OPCODE: {
        HLT:    0x76,           // Halt
        ACI:    0xCE,           // Add with Carry Immediate (affects PS.ALL)
        CALL:   0xCD,           // Call
        RST0:   0xC7
        // to be continued....
    }
};

/*
 * These are the internal PS bits (outside of PS.MASK) that getPS() and setPS() can get and set,
 * but which cannot be seen with any of the documented instructions.
 */
CPUDefX80.PS.INTERNAL  =   (CPUDefX80.PS.IF);

/*
 * PS "arithmetic" flags are NOT stored in regPS; they are maintained across separate result registers,
 * hence the RESULT designation.
 */
CPUDefX80.PS.RESULT    =   (CPUDefX80.PS.CF | CPUDefX80.PS.PF | CPUDefX80.PS.AF | CPUDefX80.PS.ZF | CPUDefX80.PS.SF);

/*
 * These are the "always set" PS bits for the 8080.
 */
CPUDefX80.PS.SET       =   (CPUDefX80.PS.BIT1);


/**
 * @copyright https://www.pcjs.org/machines/pcx80/modules/v2/panel.js (C) 2012-2025 Jeff Parsons
 */

/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @class PanelX80
 * @unrestricted
 */
class PanelX80 extends Component {
    /**
     * PanelX80(parmsPanel)
     *
     * The PanelX80 component has no required (parmsPanel) properties.
     *
     * @this {PanelX80}
     * @param {Object} parmsPanel
     */
    constructor(parmsPanel)
    {
        super("Panel", parmsPanel);
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * Most panel layouts don't have bindings of their own, so we pass along all binding requests to the
     * Computer, CPU, Keyboard and Debugger components first.  The order shouldn't matter, since any component
     * that doesn't recognize the specified binding should simply ignore it.
     *
     * @this {PanelX80}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea", "canvas")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "reset")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
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
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {PanelX80}
     * @param {ComputerX80} cmp
     * @param {BusX80} bus
     * @param {CPUStateX80} cpu
     * @param {DebuggerX80} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.cmp = cmp;
        this.bus = bus;
        this.cpu = cpu;
        this.dbg = dbg;
        this.kbd = /** @type {KeyboardX80} */ (cmp.getMachineComponent("Keyboard"));
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {PanelX80}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) PanelX80.init();
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {PanelX80}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
     */
    powerDown(fSave, fShutdown)
    {
        return true;
    }

    /**
     * updateStatus(fForce)
     *
     * Update function for Panels containing elements with high-frequency display requirements.
     *
     * For older (and slower) DOM-based display elements, those are sill being managed by the CPUState component,
     * so it has its own updateStatus() handler.
     *
     * The Computer's updateStatus() handler is currently responsible for calling both our handler and the CPU's handler.
     *
     * @this {PanelX80}
     * @param {boolean} [fForce] (true will display registers even if the CPU is running and "live" registers are not enabled)
     */
    updateStatus(fForce)
    {
    }

    /**
     * PanelX80.init()
     *
     * This function operates on every HTML element of class "panel", extracting the
     * JSON-encoded parameters for the PanelX80 constructor from the element's "data-value"
     * attribute, invoking the constructor to create a PanelX80 component, and then binding
     * any associated HTML controls to the new component.
     *
     * NOTE: Unlike most other component init() functions, this one is designed to be
     * called multiple times: once at load time, so that we can bind our print()
     * function to the panel's output control ASAP, and again when the Computer component
     * is verifying that all components are ready and invoking their powerUp() functions.
     *
     * Our powerUp() method gives us a second opportunity to notify any components that
     * that might care (eg, CPU, Keyboard, and Debugger) that we have some controls they
     * might want to use.
     */
    static init()
    {
        let fReady = false;
        let aePanels = Component.getElementsByClass(APPCLASS, "panel");
        for (let iPanel=0; iPanel < aePanels.length; iPanel++) {
            let ePanel = aePanels[iPanel];
            let parmsPanel = Component.getComponentParms(ePanel);
            let panel = Component.getComponentByID(parmsPanel['id'], false);
            if (!panel) {
                fReady = true;
                panel = new PanelX80(parmsPanel);
            }
            Component.bindComponentControls(panel, ePanel, APPCLASS);
            if (fReady) panel.setReady();
        }
    }
}

/*
 * Initialize every Panel module on the page.
 */
WebLib.onInit(PanelX80.init);

/**
 * @copyright https://www.pcjs.org/machines/pcx80/modules/v2/bus.js (C) 2012-2025 Jeff Parsons
 */

/** @typedef {{ cbTotal: number, cBlocks: number, aBlocks: Array.<number> }} */
let BusInfoX80;

/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @class BusX80
 * @unrestricted
 */
class BusX80 extends Component {

    static ERROR = {
        ADD_MEM_INUSE:      1,
        ADD_MEM_BADRANGE:   2,
        SET_MEM_BADRANGE:   4,
        REM_MEM_BADRANGE:   5
    };

    /**
     * This defines the BlockInfo bit fields used by scanMemory() when it creates the aBlocks array.
     */
    static BlockInfo = UsrLib.defineBitFields({num:20, count:8, btmod:1, type:3});

    /**
     * BusX80(cpu, dbg)
     *
     * The BusX80 component manages physical memory and I/O address spaces.
     *
     * The BusX80 component has no UI elements, so it does not require an init() handler,
     * but it still inherits from the Component class and must be allocated like any
     * other device component.  It's currently allocated by the Computer's init() handler,
     * which then calls the initBus() method of all the other components.
     *
     * For memory beyond the simple needs of the ROM and RAM components (ie, memory-mapped
     * devices), the address space must still be allocated through the BusX80 component via
     * addMemory().  If the component needs something more than simple read/write storage,
     * it must provide a custom controller.
     *
     * All port (I/O) operations are defined by external handlers; they register with us,
     * and we manage those registrations and provide support for I/O breakpoints, but the
     * only default I/O behavior we provide is ignoring writes to any unregistered output
     * ports and returning 0xff from any unregistered input ports.
     *
     * @this {BusX80}
     * @param {Object} parmsBus
     * @param {CPUStateX80} cpu
     * @param {DebuggerX80} dbg
     */
    constructor(parmsBus, cpu, dbg)
    {
        super("Bus", parmsBus);

        this.cpu = cpu;
        this.dbg = dbg;

        this.nBusWidth = parmsBus['busWidth'] || 16;

        /*
         * Compute all BusX80 memory block parameters, based on the width of the bus.  The entire
         * address space is divided into blocks, using a block size that is (hopefully) appropriate to
         * the bus width.  The following table summarizes our simplistic calculations.
         *
         *      Bus Width                       Block Shift     Block Size
         *      ---------                       -----------     ----------
         *      16 bits (64Kb address space):   10              1Kb (64 maximum blocks)
         *      18 bits (256Kb address space):  11              2Kb (128 maximum blocks)
         *      20 bits (1Mb address space):    12              4Kb (256 maximum blocks)
         *      22 bits (4Mb address space):    13              8Kb (512 maximum blocks)
         *      24 bits (16Mb address space):   14              16Kb (1K maximum blocks)
         *      32 bits (4Gb address space);    15              32Kb (128K maximum blocks)
         *
         * The coarser block granularities (ie, 16Kb and 32Kb) may cause problems for certain RAM and/or ROM
         * allocations that are contiguous but are allocated out of order, or that have different controller
         * requirements.  Your choices, for the moment, are either to ensure the allocations are performed in
         * order, or to choose smaller nBlockShift values (at the expense of a generating a larger block array).
         */
        this.addrTotal = Math.pow(2, this.nBusWidth);
        this.nBusLimit = this.nBusMask = (this.addrTotal - 1) | 0;
        this.nBlockShift = (this.nBusWidth >> 1) + 2;
        if (this.nBlockShift < 10) this.nBlockShift = 10;
        if (this.nBlockShift > 15) this.nBlockShift = 15;
        this.nBlockSize = 1 << this.nBlockShift;
        this.nBlockLen = this.nBlockSize >> 2;
        this.nBlockLimit = this.nBlockSize - 1;
        this.nBlockTotal = (this.addrTotal / this.nBlockSize) | 0;
        this.nBlockMask = this.nBlockTotal - 1;


        /*
         * Lists of I/O notification functions: aPortInputNotify and aPortOutputNotify are arrays, indexed by
         * port, of sub-arrays which contain:
         *
         *      [0]: registered function to call for every I/O access
         *
         * The registered function is called with the port address, and if the access was triggered by the CPU,
         * the instruction pointer (IP) at the point of access.
         *
         * WARNING: Unlike the (old) read and write memory notification functions, these support only one
         * pair of input/output functions per port.  A more sophisticated architecture could support a list
         * of chained functions across multiple components, but I doubt that will be necessary here.
         *
         * UPDATE: The Debugger now piggy-backs on these arrays to indicate ports for which it wants notification
         * of I/O.  In those cases, the registered component/function elements may or may not be set, but the
         * following additional element will be set:
         *
         *      [1]: true to break on I/O, false to ignore I/O
         *
         * The false case is important if fPortInputBreakAll and/or fPortOutputBreakAll is set, because it allows the
         * Debugger to selectively ignore specific ports.
         */
        this.aPortInputNotify = [];
        this.aPortOutputNotify = [];
        this.fPortInputBreakAll = this.fPortOutputBreakAll = false;

        /*
         * By default, all I/O ports are 1 byte wide; ports that are wider must add themselves to one or both of
         * these lists, using addPortInputWidth() and/or addPortOutputWidth().
         */
        this.aPortInputWidth = [];
        this.aPortOutputWidth = [];

        /*
         * Allocate empty Memory blocks to span the entire physical address space.
         */
        this.initMemory();

        this.setReady();
    }

    /**
     * initMemory()
     *
     * Allocate enough (empty) Memory blocks to span the entire physical address space.
     *
     * @this {BusX80}
     */
    initMemory()
    {
        let block = new MemoryX80();
        block.copyBreakpoints(this.dbg);
        this.aMemBlocks = new Array(this.nBlockTotal);
        for (let iBlock = 0; iBlock < this.nBlockTotal; iBlock++) {
            this.aMemBlocks[iBlock] = block;
        }
    }

    /**
     * reset()
     *
     * @this {BusX80}
     */
    reset()
    {
    }

    /**
     * powerUp(data, fRepower)
     *
     * We don't need a powerDown() handler, because for largely historical reasons, our state is saved by saveMemory(),
     * which called by the CPU.
     *
     * However, we do need a powerUp() handler, because on resumable machines, the Computer's onReset() function calls
     * everyone's powerUp() handler rather than their reset() handler.
     *
     * TODO: Perhaps Computer should be smarter: if there's no powerUp() handler, then fallback to the reset() handler.
     * In that case, however, we'd either need to remove the powerUp() stub in Component, or detect the existence of the stub.
     *
     * @this {BusX80}
     * @param {Object|null} data (always null because we supply no powerDown() handler)
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) this.reset();
        return true;
    }

    /**
     * addMemory(addr, size, type)
     *
     * Adds new Memory blocks to the specified address range.  Any Memory blocks previously
     * added to that range must first be removed via removeMemory(); otherwise, you'll get
     * an allocation conflict error.  This helps prevent address calculation errors, redundant
     * allocations, etc.
     *
     * We've relaxed some of the original requirements (ie, that addresses must start at a
     * block-granular address, or that sizes must be equal to exactly one or more blocks),
     * because machines with large block sizes can make it impossible to load certain ROMs at
     * their required addresses.  Every allocation still allocates a whole number of blocks.
     *
     * Even so, BusX80 memory management does NOT provide a general-purpose heap.  Most memory
     * allocations occur during machine initialization and never change.  In particular, there
     * is NO support for removing partial-block allocations.
     *
     * Each Memory block keeps track of a start address (addr) and length (used), indicating
     * the used space within the block; any free space that precedes or follows that used space
     * can be allocated later, by simply extending the beginning or ending of the previously used
     * space.  However, any holes that might have existed between the original allocation and an
     * extension are subsumed by the extension.
     *
     * @this {BusX80}
     * @param {number} addr is the starting physical address of the request
     * @param {number} size of the request, in bytes
     * @param {number} type is one of the MemoryX80.TYPE constants
     * @returns {boolean} true if successful, false if not
     */
    addMemory(addr, size, type)
    {
        let addrNext = addr;
        let sizeLeft = size;
        let iBlock = addrNext >>> this.nBlockShift;

        while (sizeLeft > 0 && iBlock < this.aMemBlocks.length) {

            let block = this.aMemBlocks[iBlock];
            let addrBlock = iBlock * this.nBlockSize;
            let sizeBlock = this.nBlockSize - (addrNext - addrBlock);
            if (sizeBlock > sizeLeft) sizeBlock = sizeLeft;

            if (block && block.size) {
                if (block.type == type) {
                    /*
                     * Where there is already a similar block with a non-zero size, we allow the allocation only if:
                     *
                     *   1) addrNext + sizeLeft <= block.addr (the request precedes the used portion of the current block), or
                     *   2) addrNext >= block.addr + block.used (the request follows the used portion of the current block)
                     */
                    if (addrNext + sizeLeft <= block.addr) {
                        block.used += (block.addr - addrNext);
                        block.addr = addrNext;
                        return true;
                    }
                    if (addrNext >= block.addr + block.used) {
                        let sizeAvail = block.size - (addrNext - addrBlock);
                        if (sizeAvail > sizeLeft) sizeAvail = sizeLeft;
                        block.used = addrNext - block.addr + sizeAvail;
                        addrNext = addrBlock + this.nBlockSize;
                        sizeLeft -= sizeAvail;
                        iBlock++;
                        continue;
                    }
                }
                return this.reportError(BusX80.ERROR.ADD_MEM_INUSE, addrNext, sizeLeft);
            }

            let blockNew = new MemoryX80(addrNext, sizeBlock, this.nBlockSize, type);
            blockNew.copyBreakpoints(this.dbg, block);
            this.aMemBlocks[iBlock++] = blockNew;

            addrNext = addrBlock + this.nBlockSize;
            sizeLeft -= sizeBlock;
        }

        if (sizeLeft <= 0) {
            this.printf(MESSAGE.STATUS, "%dKb %s at 0x%04X\n", Math.floor(size / 1024), MemoryX80.TYPE.NAMES[type], addr);
            return true;
        }

        return this.reportError(BusX80.ERROR.ADD_MEM_BADRANGE, addr, size);
    }

    /**
     * cleanMemory(addr, size)
     *
     * @this {BusX80}
     * @param {number} addr
     * @param {number} size
     * @returns {boolean} true if all blocks were clean, false if dirty; all blocks are cleaned in the process
     */
    cleanMemory(addr, size)
    {
        let fClean = true;
        let iBlock = addr >>> this.nBlockShift;
        let sizeBlock = this.nBlockSize - (addr & this.nBlockLimit);
        while (size > 0 && iBlock < this.aMemBlocks.length) {
            if (this.aMemBlocks[iBlock].fDirty) {
                this.aMemBlocks[iBlock].fDirty = fClean = false;
                this.aMemBlocks[iBlock].fDirtyEver = true;
            }
            size -= sizeBlock;
            sizeBlock = this.nBlockSize;
            iBlock++;
        }
        return fClean;
    }

    /**
     * scanMemory(info, addr, size)
     *
     * Returns a BusInfoX80 object for the specified address range.
     *
     * @this {BusX80}
     * @param {Object} [info] previous BusInfoX80, if any
     * @param {number} [addr] starting address of range (0 if none provided)
     * @param {number} [size] size of range, in bytes (up to end of address space if none provided)
     * @returns {Object} updated info (or new info if no previous info provided)
     */
    scanMemory(info, addr, size)
    {
        if (addr == null) addr = 0;
        if (size == null) size = (this.addrTotal - addr) | 0;
        if (info == null) info = {cbTotal: 0, cBlocks: 0, aBlocks: []};

        let iBlock = addr >>> this.nBlockShift;
        let iBlockMax = ((addr + size - 1) >>> this.nBlockShift);

        info.cbTotal = 0;
        info.cBlocks = 0;
        while (iBlock <= iBlockMax) {
            let block = this.aMemBlocks[iBlock];
            info.cbTotal += block.size;
            if (block.size) {
                info.aBlocks.push(UsrLib.initBitFields(/** @type {BitFields} */ (BusX80.BlockInfo), iBlock, 0, 0, block.type));
                info.cBlocks++;
            }
            iBlock++;
        }
        return info;
    }

    /**
     * getWidth()
     *
     * @this {BusX80}
     * @returns {number}
     */
    getWidth()
    {
        return this.nBusWidth;
    }

    /**
     * removeMemory(addr, size)
     *
     * Replaces every block in the specified address range with empty Memory blocks that ignore all reads/writes.
     *
     * TODO: Update the removeMemory() interface to reflect the relaxed requirements of the addMemory() interface.
     *
     * @this {BusX80}
     * @param {number} addr
     * @param {number} size
     * @returns {boolean} true if successful, false if not
     */
    removeMemory(addr, size)
    {
        if (!(addr & this.nBlockLimit) && size && !(size & this.nBlockLimit)) {
            let iBlock = addr >>> this.nBlockShift;
            while (size > 0) {
                let blockOld = this.aMemBlocks[iBlock];
                let blockNew = new MemoryX80(addr);
                blockNew.copyBreakpoints(this.dbg, blockOld);
                this.aMemBlocks[iBlock++] = blockNew;
                addr = iBlock * this.nBlockSize;
                size -= this.nBlockSize;
            }
            return true;
        }
        return this.reportError(BusX80.ERROR.REM_MEM_BADRANGE, addr, size);
    }

    /**
     * getMemoryBlocks(addr, size)
     *
     * @this {BusX80}
     * @param {number} addr is the starting physical address
     * @param {number} size of the request, in bytes
     * @returns {Array} of Memory blocks
     */
    getMemoryBlocks(addr, size)
    {
        let aBlocks = [];
        let iBlock = addr >>> this.nBlockShift;
        while (size > 0 && iBlock < this.aMemBlocks.length) {
            aBlocks.push(this.aMemBlocks[iBlock++]);
            size -= this.nBlockSize;
        }
        return aBlocks;
    }

    /**
     * setMemoryBlocks(addr, size, aBlocks, type)
     *
     * If no type is specified, then specified address range uses all the provided blocks as-is;
     * this form of setMemoryBlocks() is used for complete physical aliases.
     *
     * Otherwise, new blocks are allocated with the specified type; the underlying memory from the
     * provided blocks is still used, but the new blocks may have different access to that memory.
     *
     * @this {BusX80}
     * @param {number} addr is the starting physical address
     * @param {number} size of the request, in bytes
     * @param {Array} aBlocks as returned by getMemoryBlocks()
     * @param {number} [type] is one of the MemoryX80.TYPE constants
     */
    setMemoryBlocks(addr, size, aBlocks, type)
    {
        let i = 0;
        let iBlock = addr >>> this.nBlockShift;
        while (size > 0 && iBlock < this.aMemBlocks.length) {
            let block = aBlocks[i++];

            if (!block) break;
            if (type !== undefined) {
                let blockNew = new MemoryX80(addr);
                blockNew.clone(block, type, this.dbg);
                block = blockNew;
            }
            this.aMemBlocks[iBlock++] = block;
            size -= this.nBlockSize;
        }
    }

    /**
     * getByte(addr)
     *
     * @this {BusX80}
     * @param {number} addr is a physical address
     * @returns {number} byte (8-bit) value at that address
     */
    getByte(addr)
    {
        return this.aMemBlocks[(addr & this.nBusMask) >>> this.nBlockShift].readByte(addr & this.nBlockLimit, addr);
    }

    /**
     * getByteDirect(addr)
     *
     * This is useful for the Debugger and other components that want to bypass getByte() breakpoint detection.
     *
     * @this {BusX80}
     * @param {number} addr is a physical address
     * @returns {number} byte (8-bit) value at that address
     */
    getByteDirect(addr)
    {
        return this.aMemBlocks[(addr & this.nBusMask) >>> this.nBlockShift].readByteDirect(addr & this.nBlockLimit, addr);
    }

    /**
     * getShort(addr)
     *
     * @this {BusX80}
     * @param {number} addr is a physical address
     * @returns {number} word (16-bit) value at that address
     */
    getShort(addr)
    {
        let off = addr & this.nBlockLimit;
        let iBlock = (addr & this.nBusMask) >>> this.nBlockShift;
        if (off != this.nBlockLimit) {
            return this.aMemBlocks[iBlock].readShort(off, addr);
        }
        return this.aMemBlocks[iBlock++].readByte(off, addr) | (this.aMemBlocks[iBlock & this.nBlockMask].readByte(0, addr + 1) << 8);
    }

    /**
     * getShortDirect(addr)
     *
     * This is useful for the Debugger and other components that want to bypass getShort() breakpoint detection.
     *
     * @this {BusX80}
     * @param {number} addr is a physical address
     * @returns {number} word (16-bit) value at that address
     */
    getShortDirect(addr)
    {
        let off = addr & this.nBlockLimit;
        let iBlock = (addr & this.nBusMask) >>> this.nBlockShift;
        if (off != this.nBlockLimit) {
            return this.aMemBlocks[iBlock].readShortDirect(off, addr);
        }
        return this.aMemBlocks[iBlock++].readByteDirect(off, addr) | (this.aMemBlocks[iBlock & this.nBlockMask].readByteDirect(0, addr + 1) << 8);
    }

    /**
     * setByte(addr, b)
     *
     * @this {BusX80}
     * @param {number} addr is a physical address
     * @param {number} b is the byte (8-bit) value to write (we truncate it to 8 bits to be safe)
     */
    setByte(addr, b)
    {
        this.aMemBlocks[(addr & this.nBusMask) >>> this.nBlockShift].writeByte(addr & this.nBlockLimit, b & 0xff, addr);
    }

    /**
     * setByteDirect(addr, b)
     *
     * This is useful for the Debugger and other components that want to bypass breakpoint detection AND read-only
     * memory protection (for example, this is an interface the ROM component could use to initialize ROM contents).
     *
     * @this {BusX80}
     * @param {number} addr is a physical address
     * @param {number} b is the byte (8-bit) value to write (we truncate it to 8 bits to be safe)
     */
    setByteDirect(addr, b)
    {
        this.aMemBlocks[(addr & this.nBusMask) >>> this.nBlockShift].writeByteDirect(addr & this.nBlockLimit, b & 0xff, addr);
    }

    /**
     * setShort(addr, w)
     *
     * @this {BusX80}
     * @param {number} addr is a physical address
     * @param {number} w is the word (16-bit) value to write (we truncate it to 16 bits to be safe)
     */
    setShort(addr, w)
    {
        let off = addr & this.nBlockLimit;
        let iBlock = (addr & this.nBusMask) >>> this.nBlockShift;
        if (off != this.nBlockLimit) {
            this.aMemBlocks[iBlock].writeShort(off, w & 0xffff, addr);
            return;
        }
        this.aMemBlocks[iBlock++].writeByte(off, w & 0xff, addr);
        this.aMemBlocks[iBlock & this.nBlockMask].writeByte(0, (w >> 8) & 0xff, addr + 1);
    }

    /**
     * setShortDirect(addr, w)
     *
     * This is useful for the Debugger and other components that want to bypass breakpoint detection AND read-only
     * memory protection (for example, this is an interface the ROM component could use to initialize ROM contents).
     *
     * @this {BusX80}
     * @param {number} addr is a physical address
     * @param {number} w is the word (16-bit) value to write (we truncate it to 16 bits to be safe)
     */
    setShortDirect(addr, w)
    {
        let off = addr & this.nBlockLimit;
        let iBlock = (addr & this.nBusMask) >>> this.nBlockShift;
        if (off != this.nBlockLimit) {
            this.aMemBlocks[iBlock].writeShortDirect(off, w & 0xffff, addr);
            return;
        }
        this.aMemBlocks[iBlock++].writeByteDirect(off, w & 0xff, addr);
        this.aMemBlocks[iBlock & this.nBlockMask].writeByteDirect(0, (w >> 8) & 0xff, addr + 1);
    }

    /**
     * addMemBreak(addr, fWrite)
     *
     * @this {BusX80}
     * @param {number} addr
     * @param {boolean} fWrite is true for a memory write breakpoint, false for a memory read breakpoint
     */
    addMemBreak(addr, fWrite)
    {
        if (DEBUGGER) {
            let iBlock = addr >>> this.nBlockShift;
            this.aMemBlocks[iBlock].addBreakpoint(addr & this.nBlockLimit, fWrite);
        }
    }

    /**
     * removeMemBreak(addr, fWrite)
     *
     * @this {BusX80}
     * @param {number} addr
     * @param {boolean} fWrite is true for a memory write breakpoint, false for a memory read breakpoint
     */
    removeMemBreak(addr, fWrite)
    {
        if (DEBUGGER) {
            let iBlock = addr >>> this.nBlockShift;
            this.aMemBlocks[iBlock].removeBreakpoint(addr & this.nBlockLimit, fWrite);
        }
    }

    /**
     * saveMemory(fAll)
     *
     * The only memory blocks we save are those marked as dirty, but most likely all of RAM will have been marked dirty,
     * and even if our dirty-memory flags were as smart as our dirty-sector flags (ie, were set only when a write changed
     * what was already there), it's unlikely that would reduce the number of RAM blocks we must save/restore.  At least
     * all the ROM blocks should be clean (except in the unlikely event that the Debugger was used to modify them).
     *
     * All dirty blocks will be stored in a single array, as pairs of block numbers and data arrays, like so:
     *
     *      [iBlock0, [dw0, dw1, ...], iBlock1, [dw0, dw1, ...], ...]
     *
     * In a normal 4Kb block, there will be 1K DWORD values in the data array.  Remember that each DWORD is a signed 32-bit
     * integer (because they are formed using bitwise operator rather than floating-point math operators), so don't be
     * surprised to see negative numbers in the data.
     *
     * The above example assumes "uncompressed" data arrays.  If we choose to use "compressed" data arrays, the data arrays
     * will look like:
     *
     *      [count0, dw0, count1, dw1, ...]
     *
     * where each count indicates how many times the following DWORD value occurs.  A data array length less than 1K indicates
     * that it's compressed, since we'll only store them in compressed form if they actually shrank, and we'll use State
     * helper methods compress() and decompress() to create and expand the compressed data arrays.
     *
     * @this {BusX80}
     * @param {boolean} [fAll] (true to save all non-ROM memory blocks, regardless of their dirty flags)
     * @returns {Array} a
     */
    saveMemory(fAll)
    {
        let i = 0;
        let a = [];

        for (let iBlock = 0; iBlock < this.nBlockTotal; iBlock++) {
            let block = this.aMemBlocks[iBlock];
            /*
             * We have to check both fDirty and fDirtyEver, because we may have called cleanMemory() on some of
             * the memory blocks (eg, video memory), and while cleanMemory() will clear a dirty block's fDirty flag,
             * it also sets the dirty block's fDirtyEver flag, which is left set for the lifetime of the machine.
             */
            if (fAll && block.type != MemoryX80.TYPE.ROM || block.fDirty || block.fDirtyEver) {
                a[i++] = iBlock;
                a[i++] = State.compress(block.save());
            }
        }

        return a;
    }

    /**
     * restoreMemory(a)
     *
     * This restores the contents of all Memory blocks; called by CPUState.restore().
     *
     * In theory, we ONLY have to save/restore block contents.  Other block attributes,
     * like the type, the memory controller (if any), and the active memory access functions,
     * should already be restored, since every component (re)allocates all the memory blocks
     * it was using when it's restored.  And since the CPU is guaranteed to be the last
     * component to be restored, all those blocks (and their attributes) should be in place now.
     *
     * See saveMemory() for more information on how the memory block contents are saved.
     *
     * @this {BusX80}
     * @param {Array} a
     * @returns {boolean} true if successful, false if not
     */
    restoreMemory(a)
    {
        for (let i = 0; i < a.length - 1; i += 2) {
            let iBlock = a[i];
            let adw = a[i+1];
            if (adw && adw.length < this.nBlockLen) {
                adw = State.decompress(adw, this.nBlockLen);
            }
            let block = this.aMemBlocks[iBlock];
            if (!block || !block.restore(adw)) {
                /*
                 * Either the block to restore hasn't been allocated, indicating a change in the machine
                 * configuration since it was last saved (the most likely explanation) or there's some internal
                 * inconsistency (eg, the block size is wrong).
                 */
                Component.error("Unable to restore memory block " + iBlock);
                return false;
            }
        }
        return true;
    }

    /**
     * addPortInputBreak(port)
     *
     * @this {BusX80}
     * @param {number} [port]
     * @returns {boolean} true if break on port input enabled, false if disabled
     */
    addPortInputBreak(port)
    {
        if (port === undefined) {
            this.fPortInputBreakAll = !this.fPortInputBreakAll;
            return this.fPortInputBreakAll;
        }
        if (this.aPortInputNotify[port] === undefined) {
            this.aPortInputNotify[port] = [null, false];
        }
        this.aPortInputNotify[port][1] = !this.aPortInputNotify[port][1];
        return this.aPortInputNotify[port][1];
    }

    /**
     * addPortInputNotify(start, end, fn)
     *
     * Add a port input-notification handler to the list of such handlers.
     *
     * @this {BusX80}
     * @param {number} start port address
     * @param {number} end port address
     * @param {function(number,number)} fn is called with the port and IP values at the time of the input
     */
    addPortInputNotify(start, end, fn)
    {
        if (fn !== undefined) {
            for (let port = start; port <= end; port++) {
                if (this.aPortInputNotify[port] !== undefined) {
                    Component.warning("Input port " + StrLib.toHexWord(port) + " already registered");
                    continue;
                }
                this.aPortInputNotify[port] = [fn, false];
                if (MAXDEBUG) this.printf(MESSAGE.LOG, "addPortInputNotify(%#06x)\n", port);
            }
        }
    }

    /**
     * addPortInputTable(component, table, offset)
     *
     * Add port input-notification handlers from the specified table (a batch version of addPortInputNotify)
     *
     * @this {BusX80}
     * @param {Component} component
     * @param {Object} table
     * @param {number} [offset] is an optional port offset
     */
    addPortInputTable(component, table, offset)
    {
        if (offset === undefined) offset = 0;
        if (table) {
            for (let port in table) {
                this.addPortInputNotify(+port + offset, +port + offset, table[port].bind(component));
            }
        }
    }

    /**
     * addPortInputWidth(port, size)
     *
     * By default, all input ports are 1 byte wide; ports that are wider must call this function.
     *
     * @this {BusX80}
     * @param {number} port
     * @param {number} size (1, 2 or 4)
     */
    addPortInputWidth(port, size)
    {
        this.aPortInputWidth[port] = size;
    }

    /**
     * checkPortInputNotify(port, size, addrIP)
     *
     * @this {BusX80}
     * @param {number} port
     * @param {number} size (1, 2 or 4)
     * @param {number} [addrIP] is the IP value at the time of the input
     * @returns {number} simulated port data
     *
     * NOTE: It seems that parts of the ROM BIOS (like the RS-232 probes around F000:E5D7 in the 5150 BIOS)
     * assume that ports for non-existent hardware return 0xff rather than 0x00, hence my new default (0xff) below.
     */
    checkPortInputNotify(port, size, addrIP)
    {
        let data = 0, shift = 0;

        while (size > 0) {

            let aNotify = this.aPortInputNotify[port];
            let sizePort = this.aPortInputWidth[port] || 1;
            let maskPort = (sizePort == 1? 0xff : (sizePort == 2? 0xffff : -1));
            let dataPort = maskPort;

            /*
             * TODO: We need to decide what to do about 8-bit I/O to a 16-bit port (ditto for 16-bit I/O
             * to a 32-bit port).  We probably should pass the size through to the aNotify[0] handler,
             * and let it decide what to do, but I don't feel like changing all the I/O handlers right now.
             * The good news, at least, is that the 8-bit handlers would not have to do anything special.
             * This assert will warn us if this is a pressing need.
             */


            if (aNotify !== undefined) {
                if (aNotify[0]) {
                    dataPort = aNotify[0](port, addrIP);
                    if (dataPort === undefined) {
                        dataPort = maskPort;
                    } else {
                        dataPort &= maskPort;
                    }
                }
                if (DEBUGGER && this.dbg && this.fPortInputBreakAll != aNotify[1]) {
                    this.dbg.checkPortInput(port, size, dataPort);
                }
            }
            else {
                if (DEBUGGER && this.dbg) {
                    this.dbg.messageIO(this, port, null, addrIP);
                    if (this.fPortInputBreakAll) this.dbg.checkPortInput(port, size, dataPort);
                }
            }

            data |= dataPort << shift;
            shift += (sizePort << 3);
            port += sizePort;
            size -= sizePort;
        }


        return data;
    }

    /**
     * addPortOutputBreak(port)
     *
     * @this {BusX80}
     * @param {number} [port]
     * @returns {boolean} true if break on port output enabled, false if disabled
     */
    addPortOutputBreak(port)
    {
        if (port === undefined) {
            this.fPortOutputBreakAll = !this.fPortOutputBreakAll;
            return this.fPortOutputBreakAll;
        }
        if (this.aPortOutputNotify[port] === undefined) {
            this.aPortOutputNotify[port] = [null, false];
        }
        this.aPortOutputNotify[port][1] = !this.aPortOutputNotify[port][1];
        return this.aPortOutputNotify[port][1];
    }

    /**
     * addPortOutputNotify(start, end, fn)
     *
     * Add a port output-notification handler to the list of such handlers.
     *
     * @this {BusX80}
     * @param {number} start port address
     * @param {number} end port address
     * @param {function(number,number)} fn is called with the port and IP values at the time of the output
     */
    addPortOutputNotify(start, end, fn)
    {
        if (fn !== undefined) {
            for (let port = start; port <= end; port++) {
                if (this.aPortOutputNotify[port] !== undefined) {
                    Component.warning("Output port " + StrLib.toHexWord(port) + " already registered");
                    continue;
                }
                this.aPortOutputNotify[port] = [fn, false];
                if (MAXDEBUG) this.printf(MESSAGE.LOG, "addPortOutputNotify(%#06x)\n", port);
            }
        }
    }

    /**
     * addPortOutputTable(component, table, offset)
     *
     * Add port output-notification handlers from the specified table (a batch version of addPortOutputNotify)
     *
     * @this {BusX80}
     * @param {Component} component
     * @param {Object} table
     * @param {number} [offset] is an optional port offset
     */
    addPortOutputTable(component, table, offset)
    {
        if (offset === undefined) offset = 0;
        if (table) {
            for (let port in table) {
                this.addPortOutputNotify(+port + offset, +port + offset, table[port].bind(component));
            }
        }
    }

    /**
     * addPortOutputWidth(port, size)
     *
     * By default, all output ports are 1 byte wide; ports that are wider must call this function.
     *
     * @this {BusX80}
     * @param {number} port
     * @param {number} size (1, 2 or 4)
     */
    addPortOutputWidth(port, size)
    {
        this.aPortOutputWidth[port] = size;
    }

    /**
     * checkPortOutputNotify(port, size, data, addrIP)
     *
     * @this {BusX80}
     * @param {number} port
     * @param {number} size
     * @param {number} data
     * @param {number} [addrIP] is the IP value at the time of the output
     */
    checkPortOutputNotify(port, size, data, addrIP)
    {
        let shift = 0;

        while (size > 0) {

            let aNotify = this.aPortOutputNotify[port];
            let sizePort = this.aPortOutputWidth[port] || 1;
            let maskPort = (sizePort == 1? 0xff : (sizePort == 2? 0xffff : -1));
            let dataPort = (data >>>= shift) & maskPort;

            /*
             * TODO: We need to decide what to do about 8-bit I/O to a 16-bit port (ditto for 16-bit I/O
             * to a 32-bit port).  We probably should pass the size through to the aNotify[0] handler,
             * and let it decide what to do, but I don't feel like changing all the I/O handlers right now.
             * The good news, at least, is that the 8-bit handlers would not have to do anything special.
             * This assert will warn us if this is a pressing need.
             */


            if (aNotify !== undefined) {
                if (aNotify[0]) {
                    aNotify[0](port, dataPort, addrIP);
                }
                if (DEBUGGER && this.dbg && this.fPortOutputBreakAll != aNotify[1]) {
                    this.dbg.checkPortOutput(port, size, dataPort);
                }
            }
            else {
                if (DEBUGGER && this.dbg) {
                    this.dbg.messageIO(this, port, dataPort, addrIP);
                    if (this.fPortOutputBreakAll) this.dbg.checkPortOutput(port, size, dataPort);
                }
            }

            shift += (sizePort << 3);
            port += sizePort;
            size -= sizePort;
        }

    }

    /**
     * removePortInputNotify(start, end)
     *
     * Remove port input-notification handler(s) (to be ENABLED later if needed)
     *
     * @this {BusX80}
     * @param {number} start address
     * @param {number} end address
     *
     removePortInputNotify(start, end)
     {
         for (let port = start; port < end; port++) {
             if (this.aPortInputNotify[port]) {
                 delete this.aPortInputNotify[port];
             }
         }
     }
     */

    /**
     * removePortOutputNotify(start, end)
     *
     * Remove port output-notification handler(s) (to be ENABLED later if needed)
     *
     * @this {BusX80}
     * @param {number} start address
     * @param {number} end address
     *
     removePortOutputNotify(start, end)
     {
         for (let port = start; port < end; port++) {
             if (this.aPortOutputNotify[port]) {
                 delete this.aPortOutputNotify[port];
             }
         }
     }
     */

    /**
     * reportError(op, addr, size, fQuiet)
     *
     * @this {BusX80}
     * @param {number} op
     * @param {number} addr
     * @param {number} size
     * @param {boolean} [fQuiet] (true if any error should be quietly logged)
     * @returns {boolean} false
     */
    reportError(op, addr, size, fQuiet)
    {
        this.printf(fQuiet? MESSAGE.NONE : MESSAGE.ERROR, "Memory block error (%d: %#x,%#x)\n", op, addr, size);
        return false;
    }
}

/**
 * @copyright https://www.pcjs.org/machines/pcx80/modules/v2/memory.js (C) 2012-2025 Jeff Parsons
 */

/**
 * @class DataView
 * @property {function(number,boolean):number} getUint8
 * @property {function(number,number,boolean)} setUint8
 * @property {function(number,boolean):number} getUint16
 * @property {function(number,number,boolean)} setUint16
 * @property {function(number,boolean):number} getInt32
 * @property {function(number,number,boolean)} setInt32
 */

var littleEndian = (TYPEDARRAYS? (function() {
    let buffer = new ArrayBuffer(2);
    new DataView(buffer).setUint16(0, 256, true);
    return new Uint16Array(buffer)[0] === 256;
})() : false);

/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @class MemoryX80
 * @unrestricted
 */
class MemoryX80 {
    /**
     * MemoryX80(addr, used, size, type)
     *
     * The Bus component allocates MemoryX80 objects so that each has a memory buffer with a
     * block-granular starting address and an address range equal to bus.nBlockSize; however,
     * the size of any given MemoryX80 object's underlying buffer can be either zero or bus.nBlockSize;
     * memory read/write functions for empty (buffer-less) blocks are mapped to readNone/writeNone.
     *
     * The Bus allocates empty blocks for the entire address space during initialization, so that
     * any reads/writes to undefined addresses will have no effect.  Later, the ROM and RAM
     * components will ask the Bus to allocate memory for specific ranges, and the Bus will allocate
     * as many new blockSize MemoryX80 objects as the ranges require.  Partial MemoryX80 blocks could
     * also be supported in theory, but in practice, they're not.
     *
     * Because MemoryX80 blocks now allow us to have a "sparse" address space, we could choose to
     * take the memory hit of allocating 4K arrays per block, where each element stores only one byte,
     * instead of the more frugal but slightly slower approach of allocating arrays of 32-bit dwords
     * (LONGARRAYS) and shifting/masking bytes/words to/from dwords; in theory, byte accesses would
     * be faster and word accesses somewhat less faster.
     *
     * However, preliminary testing of that feature (BYTEARRAYS) did not yield significantly faster
     * performance, so it is OFF by default to minimize our memory consumption.  Using TYPEDARRAYS
     * would seem best, but as discussed in defines.js, it's off by default, because it doesn't perform
     * as well as LONGARRAYS; the other advantage of TYPEDARRAYS is that it should theoretically use
     * about 1/2 the memory of LONGARRAYS (32-bit elements vs 64-bit numbers), but I value speed over
     * size at this point.  Also, not all JavaScript implementations support TYPEDARRAYS (IE9 is probably
     * the only real outlier: it lacks typed arrays but otherwise has all the necessary HTML5 support).
     *
     * WARNING: Since MemoryX80 blocks are low-level objects that have no UI requirements, they
     * do not inherit from the Component class, so if you want to use any Component class methods,
     * such as Component.assert(), use the corresponding Debugger methods instead (assuming a debugger
     * is available).
     *
     * @this {MemoryX80}
     * @param {number|null} [addr] of lowest used address in block
     * @param {number} [used] portion of block in bytes (0 for none); must be a multiple of 4
     * @param {number} [size] of block's buffer in bytes (0 for none); must be a multiple of 4
     * @param {number} [type] is one of the MemoryX80.TYPE constants (default is MemoryX80.TYPE.NONE)
     */
    constructor(addr, used, size, type)
    {
        let i;
        this.id = (MemoryX80.idBlock += 2);
        this.adw = null;
        this.offset = 0;
        this.addr = addr;
        this.used = used;
        this.size = size || 0;
        this.type = type || MemoryX80.TYPE.NONE;
        this.fReadOnly = (type == MemoryX80.TYPE.ROM);
        this.copyBreakpoints();     // initialize the block's Debugger info; the caller will reinitialize

        /*
         * TODO: Study the impact of dirty block tracking.  The original purposes were to allow saveMemory()
         * to save only dirty blocks, and to enable the Video component to quickly detect changes to the video buffer.
         * But the benefit to saveMemory() is minimal, and the Video component has other options; for example, it now
         * uses a custom memory controller for all EGA/VGA video modes, which performs its own dirty block tracking,
         * and that could easily be extended to the older MDA/CGA video modes, which still use conventional memory blocks.
         * Alternatively, we could restrict the use of dirty block tracking to certain memory types (eg, VIDEO memory).
         *
         * However, a quick test with dirty block tracking disabled didn't yield a noticeable improvement in performance,
         * so I think the overhead of our block-based architecture is swamping the impact of these micro-updates.
         */
        this.fDirty = this.fDirtyEver = false;

        /*
         * For empty memory blocks, all we need to do is ensure all access functions are mapped to "none" handlers.
         */
        if (!size) {
            this.setAccess();
            return;
        }

        /*
         * This is the normal case: allocate a buffer that provides 8 bits of data per address;
         * no controller is required because our default memory access functions (see afnMemory)
         * know how to deal with this simple 1-1 mapping of addresses to bytes and words.
         *
         * TODO: Consider initializing the memory array to random (or pseudo-random) values in DEBUG
         * mode; pseudo-random might be best, to help make any bugs reproducible.
         */
        if (TYPEDARRAYS) {
            this.buffer = new ArrayBuffer(size);
            this.dv = new DataView(this.buffer, 0, size);
            /*
             * If littleEndian is true, we can use ab[], aw[] and adw[] directly; well, we can use them
             * whenever the offset is a multiple of 1, 2 or 4, respectively.  Otherwise, we must fallback to
             * dv.getUint8()/dv.setUint8(), dv.getUint16()/dv.setUint16() and dv.getInt32()/dv.setInt32().
             */
            this.ab = new Uint8Array(this.buffer, 0, size);
            this.aw = new Uint16Array(this.buffer, 0, size >> 1);
            this.adw = new Int32Array(this.buffer, 0, size >> 2);
            this.setAccess(littleEndian? MemoryX80.afnArrayLE : MemoryX80.afnArrayBE);
        } else {
            if (BYTEARRAYS) {
                this.ab = new Array(size);
            } else {
                /*
                 * NOTE: This is the default mode of operation (!TYPEDARRAYS && !BYTEARRAYS), because it
                 * seems to provide the best performance; and although in theory, that performance might
                 * come at twice the overhead of TYPEDARRAYS, it's increasingly likely that the JavaScript
                 * runtime will notice that all we ever store are 32-bit values, and optimize accordingly.
                 */
                this.adw = new Array(size >> 2);
                for (i = 0; i < this.adw.length; i++) this.adw[i] = 0;
            }
            this.setAccess(MemoryX80.afnMemory);
        }
    }

    /**
     * init(addr)
     *
     * Quick reinitializer when reusing a MemoryX80 block.
     *
     * @this {MemoryX80}
     * @param {number} addr
     */
    init(addr)
    {
        this.addr = addr;
    }

    /**
     * clone(mem, type)
     *
     * Converts the current MemoryX80 block (this) into a clone of the given MemoryX80 block (mem),
     * and optionally overrides the current block's type with the specified type.
     *
     * @this {MemoryX80}
     * @param {MemoryX80} mem
     * @param {number} [type]
     * @param {DebuggerX80} [dbg]
     */
    clone(mem, type, dbg)
    {
        /*
         * Original memory block IDs are even; cloned memory block IDs are odd;
         * the original ID of the current block is lost, but that's OK, since it was presumably
         * produced merely to become a clone.
         */
        this.id = mem.id | 0x1;
        this.used = mem.used;
        this.size = mem.size;
        if (type) {
            this.type = type;
            this.fReadOnly = (type == MemoryX80.TYPE.ROM);
        }
        if (TYPEDARRAYS) {
            this.buffer = mem.buffer;
            this.dv = mem.dv;
            this.ab = mem.ab;
            this.aw = mem.aw;
            this.adw = mem.adw;
            this.setAccess(littleEndian? MemoryX80.afnArrayLE : MemoryX80.afnArrayBE);
        } else {
            if (BYTEARRAYS) {
                this.ab = mem.ab;
            } else {
                this.adw = mem.adw;
            }
            this.setAccess(MemoryX80.afnMemory);
        }
        this.copyBreakpoints(dbg, mem);
    }

    /**
     * save()
     *
     * This gets the contents of a MemoryX80 block as an array of 32-bit values; used by BusX80.saveMemory(),
     * which in turn is called by CPUState.save().
     *
     * MemoryX80 blocks with custom memory controllers do NOT save their contents; that's the responsibility
     * of the controller component.
     *
     * @this {MemoryX80}
     * @returns {Array|Int32Array|null}
     */
    save()
    {
        let adw, i;
        if (BYTEARRAYS) {
            adw = new Array(this.size >> 2);
            let off = 0;
            for (i = 0; i < adw.length; i++) {
                adw[i] = this.ab[off] | (this.ab[off + 1] << 8) | (this.ab[off + 2] << 16) | (this.ab[off + 3] << 24);
                off += 4;
            }
        }
        else if (TYPEDARRAYS) {
            /*
             * It might be tempting to just return a copy of Int32Array(this.buffer, 0, this.size >> 2),
             * but we can't be sure of the "endianness" of an Int32Array -- which would be OK if the array
             * was always saved/restored on the same machine, but there's no guarantee of that, either.
             * So we use getInt32() and require little-endian values.
             *
             * Moreover, an Int32Array isn't treated by JSON.stringify() and JSON.parse() exactly like
             * a normal array; it's serialized as an Object rather than an Array, so it lacks a "length"
             * property and causes problems for State.store() and State.parse().
             */
            adw = new Array(this.size >> 2);
            for (i = 0; i < adw.length; i++) {
                adw[i] = this.dv.getInt32(i << 2, true);
            }
        }
        else {
            adw = this.adw;
        }
        return adw;
    }

    /**
     * restore(adw)
     *
     * This restores the contents of a MemoryX80 block from an array of 32-bit values;
     * used by BusX80.restoreMemory(), which is called by CPUState.restore(), after all other
     * components have been restored and thus all MemoryX80 blocks have been allocated
     * by their respective components.
     *
     * @this {MemoryX80}
     * @param {Array|null} adw
     * @returns {boolean} true if successful, false if block size mismatch
     */
    restore(adw)
    {
        /*
         * At this point, it's a consistency error for adw to be null; it's happened once already,
         * when there was a restore bug in the Video component that added the frame buffer at the video
         * card's "spec'ed" address instead of the programmed address, so there were no controller-owned
         * memory blocks installed at the programmed address, and so we arrived here at a block with
         * no controller AND no data.
         */


        if (adw && this.size == adw.length << 2) {
            let i;
            if (BYTEARRAYS) {
                let off = 0;
                for (i = 0; i < adw.length; i++) {
                    this.ab[off] = adw[i] & 0xff;
                    this.ab[off + 1] = (adw[i] >> 8) & 0xff;
                    this.ab[off + 2] = (adw[i] >> 16) & 0xff;
                    this.ab[off + 3] = (adw[i] >> 24) & 0xff;
                    off += 4;
                }
            } else if (TYPEDARRAYS) {
                for (i = 0; i < adw.length; i++) {
                    this.dv.setInt32(i << 2, adw[i], true);
                }
            } else {
                this.adw = adw;
            }
            this.fDirty = true;
            return true;
        }
        return false;
    }

    /**
     * setAccess(afn, fDirect)
     *
     * If no function table is specified, a default is selected based on the MemoryX80 type.
     *
     * @this {MemoryX80}
     * @param {Array.<function()>} [afn] function table
     * @param {boolean} [fDirect] (true to update direct access functions as well; default is true)
     */
    setAccess(afn, fDirect)
    {
        if (!afn) {

            afn = MemoryX80.afnNone;
        }
        this.setReadAccess(afn, fDirect);
        this.setWriteAccess(afn, fDirect);
    }

    /**
     * setReadAccess(afn, fDirect)
     *
     * @this {MemoryX80}
     * @param {Array.<function()>} afn
     * @param {boolean} [fDirect]
     */
    setReadAccess(afn, fDirect)
    {
        if (!fDirect || !this.cReadBreakpoints) {
            this.readByte = afn[0] || this.readNone;
            this.readShort = afn[2] || this.readShortDefault;
        }
        if (fDirect || fDirect === undefined) {
            this.readByteDirect = afn[0] || this.readNone;
            this.readShortDirect = afn[2] || this.readShortDefault;
        }
    }

    /**
     * setWriteAccess(afn, fDirect)
     *
     * @this {MemoryX80}
     * @param {Array.<function()>} afn
     * @param {boolean} [fDirect]
     */
    setWriteAccess(afn, fDirect)
    {
        if (!fDirect || !this.cWriteBreakpoints) {
            this.writeByte = !this.fReadOnly && afn[1] || this.writeNone;
            this.writeShort = !this.fReadOnly && afn[3] || this.writeShortDefault;
        }
        if (fDirect || fDirect === undefined) {
            this.writeByteDirect = afn[1] || this.writeNone;
            this.writeShortDirect = afn[3] || this.writeShortDefault;
        }
    }

    /**
     * resetReadAccess()
     *
     * @this {MemoryX80}
     */
    resetReadAccess()
    {
        this.readByte = this.readByteDirect;
        this.readShort = this.readShortDirect;
    }

    /**
     * resetWriteAccess()
     *
     * @this {MemoryX80}
     */
    resetWriteAccess()
    {
        this.writeByte = this.fReadOnly? this.writeNone : this.writeByteDirect;
        this.writeShort = this.fReadOnly? this.writeShortDefault : this.writeShortDirect;
    }

    /**
     * printAddr(sMessage)
     *
     * @this {MemoryX80}
     * @param {string} sMessage
     */
    printAddr(sMessage)
    {
        if (DEBUG && this.dbg) {
            this.dbg.printf(MESSAGE.MEM, "%s %d\n", sMessage, (this.addr != null? ('%' + StrLib.toHex(this.addr)) : '#' + this.id));
        }
    }

    /**
     * addBreakpoint(off, fWrite)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {boolean} fWrite
     */
    addBreakpoint(off, fWrite)
    {
        if (!fWrite) {
            if (this.cReadBreakpoints++ === 0) {
                this.setReadAccess(MemoryX80.afnChecked, false);
            }
            if (DEBUG) this.printAddr("read breakpoint added to memory block");
        }
        else {
            if (this.cWriteBreakpoints++ === 0) {
                this.setWriteAccess(MemoryX80.afnChecked, false);
            }
            if (DEBUG) this.printAddr("write breakpoint added to memory block");
        }
    }

    /**
     * removeBreakpoint(off, fWrite)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {boolean} fWrite
     */
    removeBreakpoint(off, fWrite)
    {
        if (!fWrite) {
            if (--this.cReadBreakpoints === 0) {
                this.resetReadAccess();
                if (DEBUG) this.printAddr("all read breakpoints removed from memory block");
            }

        }
        else {
            if (--this.cWriteBreakpoints === 0) {
                this.resetWriteAccess();
                if (DEBUG) this.printAddr("all write breakpoints removed from memory block");
            }

        }
    }

    /**
     * copyBreakpoints(dbg, mem)
     *
     * @this {MemoryX80}
     * @param {DebuggerX80} [dbg]
     * @param {MemoryX80} [mem] (outgoing MemoryX80 block to copy breakpoints from, if any)
     */
    copyBreakpoints(dbg, mem)
    {
        this.dbg = dbg;
        this.cReadBreakpoints = this.cWriteBreakpoints = 0;
        if (mem) {
            if ((this.cReadBreakpoints = mem.cReadBreakpoints)) {
                this.setReadAccess(MemoryX80.afnChecked, false);
            }
            if ((this.cWriteBreakpoints = mem.cWriteBreakpoints)) {
                this.setWriteAccess(MemoryX80.afnChecked, false);
            }
        }
    }

    /**
     * readNone(off)
     *
     * Previously, this always returned 0x00, but the initial memory probe by the COMPAQ DeskPro 386 ROM BIOS
     * writes 0x0000 to the first word of every 64Kb block in the nearly 16Mb address space it supports, and
     * if it reads back 0x0000, it will initially think that LOTS of RAM exists, only to be disappointed later
     * when it performs a more exhaustive memory test, generating unwanted error messages in the process.
     *
     * TODO: Determine if we should have separate readByteNone(), readShortNone() and readLongNone() functions
     * to return 0xff, 0xffff and 0xffffffff|0, respectively.  This seems sufficient for now, as it seems unlikely
     * that a system would require nonexistent memory locations to return ALL bits set.
     *
     * Also, I'm reluctant to address that potential issue by simply returning -1, because to date, the above
     * MemoryX80 interfaces have always returned values that are properly masked to 8, 16 or 32 bits, respectively.
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readNone(off, addr)
    {
        if (DEBUGGER && this.dbg) {
            this.dbg.printf(MESSAGE.CPU + MESSAGE.MEM + MESSAGE.ADDR, "attempt to read invalid block %#x\n", this.addr);
        }
        return 0xff;
    }

    /**
     * writeNone(off, v, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} v (could be either a byte or word value, since we use the same handler for both kinds of accesses)
     * @param {number} addr
     */
    writeNone(off, v, addr)
    {
        if (DEBUGGER && this.dbg) {
            this.dbg.printf(MESSAGE.CPU + MESSAGE.MEM + MESSAGE.ADDR, "attempt to write %#06x to invalid block %#x\n", v, this.addr);
        }
    }

    /**
     * readShortDefault(off, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readShortDefault(off, addr)
    {
        return this.readByte(off++, addr++) | (this.readByte(off, addr) << 8);
    }

    /**
     * writeShortDefault(off, w, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} w
     * @param {number} addr
     */
    writeShortDefault(off, w, addr)
    {
        this.writeByte(off++, w & 0xff, addr++);
        this.writeByte(off, w >> 8, addr);
    }

    /**
     * readByteMemory(off, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readByteMemory(off, addr)
    {
        if (BYTEARRAYS) {
            return this.ab[off];
        }
        return ((this.adw[off >> 2] >>> ((off & 0x3) << 3)) & 0xff);
    }

    /**
     * readShortMemory(off, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readShortMemory(off, addr)
    {
        if (BYTEARRAYS) {
            return this.ab[off] | (this.ab[off + 1] << 8);
        }
        let w;
        let idw = off >> 2;
        let nShift = (off & 0x3) << 3;
        let dw = (this.adw[idw] >> nShift);
        if (nShift < 24) {
            w = dw & 0xffff;
        } else {
            w = (dw & 0xff) | ((this.adw[idw + 1] & 0xff) << 8);
        }
        return w;
    }

    /**
     * writeByteMemory(off, b, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} b
     * @param {number} addr
     */
    writeByteMemory(off, b, addr)
    {
        if (BYTEARRAYS) {
            this.ab[off] = b;
        } else {
            let idw = off >> 2;
            let nShift = (off & 0x3) << 3;
            this.adw[idw] = (this.adw[idw] & ~(0xff << nShift)) | (b << nShift);
        }
        this.fDirty = true;
    }

    /**
     * writeShortMemory(off, w, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} w
     * @param {number} addr
     */
    writeShortMemory(off, w, addr)
    {
        if (BYTEARRAYS) {
            this.ab[off] = (w & 0xff);
            this.ab[off + 1] = (w >> 8);
        } else {
            let idw = off >> 2;
            let nShift = (off & 0x3) << 3;
            if (nShift < 24) {
                this.adw[idw] = (this.adw[idw] & ~(0xffff << nShift)) | (w << nShift);
            } else {
                this.adw[idw] = (this.adw[idw] & 0x00ffffff) | (w << 24);
                idw++;
                this.adw[idw] = (this.adw[idw] & (0xffffff00|0)) | (w >> 8);
            }
        }
        this.fDirty = true;
    }

    /**
     * readByteChecked(off, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readByteChecked(off, addr)
    {
        if (DEBUGGER && this.dbg && this.addr != null) {
            this.dbg.checkMemoryRead(this.addr + off);
        }
        return this.readByteDirect(off, addr);
    }

    /**
     * readShortChecked(off, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readShortChecked(off, addr)
    {
        if (DEBUGGER && this.dbg && this.addr != null) {
            this.dbg.checkMemoryRead(this.addr + off, 2);
        }
        return this.readShortDirect(off, addr);
    }

    /**
     * writeByteChecked(off, b, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @param {number} b
     */
    writeByteChecked(off, b, addr)
    {
        if (DEBUGGER && this.dbg && this.addr != null) {
            this.dbg.checkMemoryWrite(this.addr + off);
        }
        if (this.fReadOnly) this.writeNone(off, b, addr); else this.writeByteDirect(off, b, addr);
    }

    /**
     * writeShortChecked(off, w, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @param {number} w
     */
    writeShortChecked(off, w, addr)
    {
        if (DEBUGGER && this.dbg && this.addr != null) {
            this.dbg.checkMemoryWrite(this.addr + off, 2);
        }
        if (this.fReadOnly) this.writeNone(off, w, addr); else this.writeShortDirect(off, w, addr);
    }

    /**
     * readByteBE(off, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readByteBE(off, addr)
    {
        return this.ab[off];
    }

    /**
     * readByteLE(off, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readByteLE(off, addr)
    {
        return this.ab[off];
    }

    /**
     * readShortBE(off, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readShortBE(off, addr)
    {
        return this.dv.getUint16(off, true);
    }

    /**
     * readShortLE(off, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @returns {number}
     */
    readShortLE(off, addr)
    {
        /*
         * TODO: It remains to be seen if there's any advantage to checking the offset for an aligned read
         * vs. always reading the bytes separately; it seems a safe bet for longs, but it's less clear for shorts.
         */
        return (off & 0x1)? (this.ab[off] | (this.ab[off+1] << 8)) : this.aw[off >> 1];
    }

    /**
     * writeByteBE(off, b, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} b
     * @param {number} addr
     */
    writeByteBE(off, b, addr)
    {
        this.ab[off] = b;
        this.fDirty = true;
    }

    /**
     * writeByteLE(off, b, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @param {number} b
     */
    writeByteLE(off, b, addr)
    {
        this.ab[off] = b;
        this.fDirty = true;
    }

    /**
     * writeShortBE(off, w, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @param {number} w
     */
    writeShortBE(off, w, addr)
    {
        this.dv.setUint16(off, w, true);
        this.fDirty = true;
    }

    /**
     * writeShortLE(off, w, addr)
     *
     * @this {MemoryX80}
     * @param {number} off
     * @param {number} addr
     * @param {number} w
     */
    writeShortLE(off, w, addr)
    {
        /*
         * TODO: It remains to be seen if there's any advantage to checking the offset for an aligned write
         * vs. always writing the bytes separately; it seems a safe bet for longs, but it's less clear for shorts.
         */
        if (off & 0x1) {
            this.ab[off] = w;
            this.ab[off+1] = w >> 8;
        } else {
            this.aw[off >> 1] = w;
        }
        this.fDirty = true;
    }

    /**
     * adjustEndian(dw)
     *
     * @param {number} dw
     * @returns {number}
     */
    static adjustEndian(dw)
    {
        if (TYPEDARRAYS && !littleEndian) {
            dw = (dw << 24) | ((dw << 8) & 0x00ff0000) | ((dw >> 8) & 0x0000ff00) | (dw >>> 24);
        }
        return dw;
    }
}

/*
 * Basic memory types
 *
 * RAM is the most conventional memory type, providing full read/write capability to x86-compatible (ie,
 * 'little endian") storage.  ROM is equally conventional, except that the fReadOnly property is set,
 * disabling writes.  VIDEO is treated exactly like RAM, unless a controller is provided.  Both RAM and
 * VIDEO memory are always considered writable, and even ROM can be written using the Bus setByteDirect()
 * interface (which in turn uses the MemoryX80 writeByteDirect() interface), allowing the ROM component to
 * initialize its own memory.  The CTRL type is used to identify memory-mapped devices that do not need
 * any default storage and always provide their own controller.
 *
 * Unallocated regions of the address space contain a special memory block of type NONE that contains
 * no storage.  Mapping every addressible location to a memory block allows all accesses to be routed in
 * exactly the same manner, without resorting to any range or processor checks.
 *
 * These types are not mutually exclusive.  For example, VIDEO memory could be allocated as RAM, with or
 * without a custom controller (the original Monochrome and CGA video cards used read/write storage that
 * was indistinguishable from RAM), and CTRL memory could be allocated as an empty block of any type, with
 * a custom controller.  A few types are required for certain features (eg, ROM is required if you want
 * read-only memory), but the larger purpose of these types is to help document the caller's intent and to
 * provide the Control Panel with the ability to highlight memory regions accordingly.
 */
MemoryX80.TYPE = {
    NONE:       0,
    RAM:        1,
    ROM:        2,
    VIDEO:      3,
    CTRL:       4,
    COLORS:     ["black", "blue", "green", "cyan"],
    NAMES:      ["NONE",  "RAM",  "ROM",   "VID",  "H/W"]
};

/*
 * Last used block ID (used for debugging only)
 */
MemoryX80.idBlock = 0;


/*
 * This is the effective definition of afnNone, but we need not fully define it, because setAccess()
 * uses these defaults when any of the 4 handlers (ie, 2 byte handlers and 2 short handlers) are undefined.
 *
MemoryX80.afnNone = [
    MemoryX80.prototype.readNone,
    MemoryX80.prototype.writeNone,
    MemoryX80.prototype.readShortDefault,
    MemoryX80.prototype.writeShortDefault
];
 */
MemoryX80.afnNone = [];

MemoryX80.afnMemory = [
    MemoryX80.prototype.readByteMemory,
    MemoryX80.prototype.writeByteMemory,
    MemoryX80.prototype.readShortMemory,
    MemoryX80.prototype.writeShortMemory
];

MemoryX80.afnChecked = [
    MemoryX80.prototype.readByteChecked,
    MemoryX80.prototype.writeByteChecked,
    MemoryX80.prototype.readShortChecked,
    MemoryX80.prototype.writeShortChecked
];

if (TYPEDARRAYS) {
    MemoryX80.afnArrayBE = [
        MemoryX80.prototype.readByteBE,
        MemoryX80.prototype.writeByteBE,
        MemoryX80.prototype.readShortBE,
        MemoryX80.prototype.writeShortBE
    ];

    MemoryX80.afnArrayLE = [
        MemoryX80.prototype.readByteLE,
        MemoryX80.prototype.writeByteLE,
        MemoryX80.prototype.readShortLE,
        MemoryX80.prototype.writeShortLE
    ];
}

/**
 * @copyright https://www.pcjs.org/machines/pcx80/modules/v2/cpu.js (C) 2012-2025 Jeff Parsons
 */

/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @class CPUx80
 * @unrestricted
 */
class CPUx80 extends Component {
    /**
     * CPUx80(parmsCPU, nCyclesDefault)
     *
     * The CPUx80 class supports the following (parmsCPU) properties:
     *
     *      cycles: the machine's base cycles per second; the CPUStateX80 constructor
     *      will provide us with a default (based on the CPU model) to use as a fallback.
     *
     *      multiplier: base cycle multiplier; default is 1.
     *
     *      autoStart: true to automatically start, false to not, or null if "it depends";
     *      null is the default, which means do not autostart UNLESS there is no Debugger
     *      and no "Run" button (ie, no way to manually start the machine).
     *
     *      csStart: the number of cycles that runCPU() must wait before generating
     *      checksum records; -1 if disabled. checksum records are a diagnostic aid
     *      used to help compare one CPU run to another.
     *
     *      csInterval: the number of cycles that runCPU() must execute before generating
     *      a checksum record; -1 if disabled.
     *
     *      csStop: the number of cycles to stop generating checksum records.
     *
     * This component is primarily responsible for interfacing the CPU with the outside
     * world (eg, Panel and Debugger components), and managing overall CPU operation.
     *
     * It is extended by the CPUStateX80 component, where the simulation control logic resides.
     *
     * @this {CPUx80}
     * @param {Object} parmsCPU
     * @param {number} nCyclesDefault
     */
    constructor(parmsCPU, nCyclesDefault)
    {
        super("CPU", parmsCPU, MESSAGE.CPU);

        let nCycles = parmsCPU['cycles'] || nCyclesDefault;

        let nMultiplier = parmsCPU['multiplier'] || 1;

        this.nCyclesPerSecond = nCycles;

        /*
         * nCyclesMultiplier replaces the old "speed" variable (0, 1, 2) and eliminates the need for
         * the constants (SPEED_SLOW, SPEED_FAST and SPEED_MAX).  The UI simply doubles the multiplier
         * until we've exceeded the host's speed limit and then starts the multiplier over at 1.
         */
        this.nCyclesMultiplier = nMultiplier;
        this.mhzDefault = Math.round(this.nCyclesPerSecond / 10000) / 100;
        /*
         * TODO: Take care of this with an initial setSpeed() call instead?
         */
        this.mhzTarget = this.mhzDefault * this.nCyclesMultiplier;

        /*
         * We add a number of flags to the set initialized by Component
         */
        this.flags.running = false;
        this.flags.starting = false;
        this.flags.autoStart = parmsCPU['autoStart'];

        /*
         * TODO: Add some UI for fDisplayLiveRegs (either an XML property, or a UI checkbox, or both)
         */
        this.flags.displayLiveRegs = false;

        /*
         * Get checksum parameters, if any. runCPU() behavior is not affected until fChecksum
         * is true, which won't happen until resetChecksum() is called with nCyclesChecksumInterval
         * ("csInterval") set to a positive value.
         *
         * As above, any of these parameters can also be set with the Debugger's execution options
         * command ("x"); for example, "x cs int 5000" will set nCyclesChecksumInterval to 5000
         * and call resetChecksum().
         */
        this.flags.checksum = false;
        this.nChecksum = this.nCyclesChecksumNext = 0;
        this.nCyclesChecksumStart = parmsCPU["csStart"];
        this.nCyclesChecksumInterval = parmsCPU["csInterval"];
        this.nCyclesChecksumStop = parmsCPU["csStop"];

        /*
         * Array of countdown timers managed by addTimer() and setTimer().
         */
        this.aTimers = [];

        this.onRunTimeout = this.runCPU.bind(this); // function onRunTimeout() { cpu.runCPU(); };

        this.setReady();
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {CPUx80}
     * @param {ComputerX80} cmp
     * @param {BusX80} bus
     * @param {CPUx80} cpu
     * @param {DebuggerX80} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.cmp = cmp;
        this.bus = bus;
        this.dbg = dbg;

        for (let i = 0; i < CPUx80.BUTTONS.length; i++) {
            let control = this.bindings[CPUx80.BUTTONS[i]];
            if (control) this.cmp.setBinding("", CPUx80.BUTTONS[i], control);
        }

        /*
         * Attach the ChipSet component to the CPU so that it can be notified whenever the CPU stops and starts.
         */
        this.chipset = /** @type {ChipSetX80} */ (cmp.getMachineComponent("ChipSet"));

        /*
         * We've already saved the parmsCPU 'autoStart' setting, but there may be a machine (or URL) override.
         */
        let sAutoStart = cmp.getMachineParm('autoStart');
        if (sAutoStart != null) {
            this.flags.autoStart = (sAutoStart == "true"? true : (sAutoStart  == "false"? false : !!sAutoStart));
        }

        this.setReady();
    }

    /**
     * reset()
     *
     * @this {CPUx80}
     */
    reset()
    {
    }

    /**
     * save()
     *
     * This is a placeholder for save support (overridden by the CPUStateX80 component).
     *
     * @this {CPUx80}
     * @returns {Object|null}
     */
    save()
    {
        return null;
    }

    /**
     * restore(data)
     *
     * This is a placeholder for restore support (overridden by the CPUStateX80 component).
     *
     * @this {CPUx80}
     * @param {Object} data
     * @returns {boolean} true if restore successful, false if not
     */
    restore(data)
    {
        return false;
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {CPUx80}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) {
            if (!data || !this.restore) {
                this.reset();
            } else {
                this.resetCycles();
                if (!this.restore(data)) return false;
                this.resetChecksum();
            }
            /*
             * Give the Debugger a chance to do/print something once we've powered up
             */
            if (DEBUGGER && this.dbg) {
                this.dbg.init();
            } else {
                this.printf("No debugger detected\n");
            }
        }
        /*
         * The Computer component (which is responsible for all powerDown and powerUp notifications)
         * is now responsible for managing a component's fPowered flag, not us.
         *
         *      this.flags.powered = true;
         */
        this.updateCPU();
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {CPUx80}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
     */
    powerDown(fSave, fShutdown)
    {
        /*
         * The Computer component (which is responsible for all powerDown and powerUp notifications)
         * is now responsible for managing a component's fPowered flag, not us.
         *
         *      this.flags.powered = false;
         */
        return fSave? this.save() : true;
    }

    /**
     * autoStart()
     *
     * @this {CPUx80}
     * @returns {boolean} true if started, false if not
     */
    autoStart()
    {
        /*
         * Start running automatically on power-up, assuming there's no Debugger and no "Run" button
         */
        if (this.flags.autoStart || (!DEBUGGER || !this.dbg) && this.bindings["run"] === undefined) {
            /*
             * We used to also set fUpdateFocus when calling runCPU(), on the assumption that in the "auto-starting"
             * context, a machine without focus is like a day without sunshine, but in reality, focus should only be
             * forced when the user takes some other machine-related action.
             */
            this.runCPU();
            return true;
        }
        return false;
    }

    /**
     * isPowered()
     *
     * @this {CPUx80}
     * @returns {boolean}
     */
    isPowered()
    {
        if (!this.flags.powered) {
            this.printf("%s not powered\n", this.toString());
            return false;
        }
        return true;
    }

    /**
     * isRunning()
     *
     * @this {CPUx80}
     * @returns {boolean}
     */
    isRunning()
    {
        return this.flags.running;
    }

    /**
     * getChecksum()
     *
     * This will be implemented by the CPUStateX80 component.
     *
     * @this {CPUx80}
     * @returns {number} a 32-bit summation of key elements of the current CPU state (used by the CPU checksum code)
     */
    getChecksum()
    {
        return 0;
    }

    /**
     * resetChecksum()
     *
     * If checksum generation is enabled (fChecksum is true), this resets the running 32-bit checksum and the
     * cycle counter that will trigger the next displayChecksum(); called by resetCycles(), which is called whenever
     * the CPU is reset or restored.
     *
     * @this {CPUx80}
     * @returns {boolean} true if checksum generation enabled, false if not
     */
    resetChecksum()
    {
        if (this.nCyclesChecksumStart === undefined) this.nCyclesChecksumStart = 0;
        if (this.nCyclesChecksumInterval === undefined) this.nCyclesChecksumInterval = -1;
        if (this.nCyclesChecksumStop === undefined) this.nCyclesChecksumStop = -1;
        this.flags.checksum = (this.nCyclesChecksumStart >= 0 && this.nCyclesChecksumInterval > 0);
        if (this.flags.checksum) {
            this.nChecksum = 0;
            this.nCyclesChecksumNext = this.nCyclesChecksumStart - this.nTotalCycles;
            /*
             *  this.nCyclesChecksumNext = this.nCyclesChecksumStart + this.nCyclesChecksumInterval -
             *      (this.nTotalCycles % this.nCyclesChecksumInterval);
             */
            return true;
        }
        return false;
    }

    /**
     * updateChecksum(nCycles)
     *
     * When checksum generation is enabled (fChecksum is true), runCPU() asks stepCPU() to execute a minimum
     * number of cycles (1), effectively limiting execution to a single instruction, and then we're called with
     * the exact number cycles that were actually executed.  This should give us instruction-granular checksums
     * at precise intervals that are 100% repeatable.
     *
     * @this {CPUx80}
     * @param {number} nCycles
     */
    updateChecksum(nCycles)
    {
        if (this.flags.checksum) {
            /*
             * Get a 32-bit summation of the current CPU state and add it to our running 32-bit checksum
             */
            let fDisplay = false;
            this.nChecksum = (this.nChecksum + this.getChecksum())|0;
            this.nCyclesChecksumNext -= nCycles;
            if (this.nCyclesChecksumNext <= 0) {
                this.nCyclesChecksumNext += this.nCyclesChecksumInterval;
                fDisplay = true;
            }
            if (this.nCyclesChecksumStop >= 0) {
                if (this.nCyclesChecksumStop <= this.getCycles()) {
                    this.nCyclesChecksumInterval = this.nCyclesChecksumStop = -1;
                    this.resetChecksum();
                    this.stopCPU();
                    fDisplay = true;
                }
            }
            if (fDisplay) this.displayChecksum();
        }
    }

    /**
     * displayChecksum()
     *
     * When checksum generation is enabled (fChecksum is true), this is called to provide a crude log of all
     * checksums generated at the specified cycle intervals, as specified by the "csStart" and "csInterval" parmsCPU
     * properties).
     *
     * @this {CPUx80}
     */
    displayChecksum()
    {
        this.printf("%d cycles: checksum=%x\n", this.getCycles(), this.nChecksum);
    }

    /**
     * displayValue(sLabel, nValue, cch)
     *
     * This is principally for displaying register values, but in reality, it can be used to display any
     * numeric (hex) value bound to the given label.
     *
     * @this {CPUx80}
     * @param {string} sLabel
     * @param {number} nValue
     * @param {number} cch
     */
    displayValue(sLabel, nValue, cch)
    {
        if (this.bindings[sLabel]) {
            if (nValue === undefined) {
                this.setError("Value for " + sLabel + " is invalid");
                this.stopCPU();
            }
            let sVal;
            if (!this.flags.running || this.flags.displayLiveRegs) {
                sVal = StrLib.toHex(nValue, cch);
            } else {
                sVal = "--------".substr(0, cch);
            }
            /*
             * TODO: Determine if this test actually avoids any redrawing when a register hasn't changed, and/or if
             * we should maintain our own (numeric) cache of displayed register values (to avoid creating these temporary
             * string values that will have to garbage-collected), and/or if this is actually slower, and/or if I'm being
             * too obsessive.
             */
            if (this.bindings[sLabel].textContent != sVal) this.bindings[sLabel].textContent = sVal;
        }
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * @this {CPUx80}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea", "canvas")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "run")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        let cpu = this;
        let fBound = false;

        switch (sBinding) {
        case "power":
        case "reset":
            /*
             * The "power" and "reset" buttons are functions of the entire computer, not just the CPU,
             * but it's not always convenient to stick a power button in the Computer component definition,
             * so we record those bindings here and pass them on to the Computer component in initBus().
             */
            this.bindings[sBinding] = control;
            fBound = true;
            break;

        case "run":
            this.bindings[sBinding] = control;
            control.onclick = function onClickRun() {
                if (!cpu.cmp || !cpu.cmp.checkPower()) return;
                /*
                 * We no longer pass true to these runCPU()/stopCPU() calls, on the theory that if the "run"
                 * control is visible, then the computer is probably sufficiently visible as well; the problem
                 * with setting fUpdateFocus to true is that it can jerk the web page around in annoying ways.
                 */
                if (!cpu.flags.running) {
                    cpu.runCPU();
                } else {
                    cpu.stopCPU();
                }
            };
            fBound = true;
            break;

        case "speed":
            this.bindings[sBinding] = control;
            fBound = true;
            break;

        case "setSpeed":
            this.bindings[sBinding] = control;
            control.onclick = function onClickSetSpeed() {
                cpu.setSpeed(cpu.nCyclesMultiplier << 1, true);
            };
            control.textContent = this.getSpeedTarget();
            fBound = true;
            break;

        default:
            break;
        }
        return fBound;
    }

    /**
     * setBurstCycles(nCycles)
     *
     * This function is used by the ChipSet component whenever a very low timer count is set,
     * in anticipation of the timer requiring an update sooner than the normal nCyclesPerYield
     * period in runCPU() would normally provide.
     *
     * NOTE: In this context, "timer" refers to a timer chip (eg, an Intel 8253) being emulated by
     * by the ChipSet component, not the timers managed by the CPU (eg, addTimer(), setTimer(), etc).
     *
     * @this {CPUx80}
     * @param {number} nCycles is the target number of cycles to drop the current burst to
     * @returns {boolean}
     */
    setBurstCycles(nCycles)
    {
        if (this.flags.running) {
            let nDelta = this.nStepCycles - nCycles;
            /*
             * NOTE: If nDelta is negative, we will actually be increasing nStepCycles and nBurstCycles.
             * Which is OK, but if we're also taking snapshots of the cycle counts, to make sure that instruction
             * costs are being properly assessed, then we need to update nSnapCycles as well.
             *
             * TODO: If the delta is negative, we could simply ignore the request, but we must first carefully
             * consider the impact on the ChipSet timers, if any.
             */
            // if (DEBUG) this.nSnapCycles -= nDelta;
            this.nStepCycles -= nDelta;
            this.nBurstCycles -= nDelta;
            return true;
        }
        return false;
    }

    /**
     * addCycles(nCycles, fEndStep)
     *
     * @this {CPUx80}
     * @param {number} nCycles
     * @param {boolean} [fEndStep]
     */
    addCycles(nCycles, fEndStep)
    {
        this.nTotalCycles += nCycles;
        if (fEndStep) {
            this.nBurstCycles = this.nStepCycles = 0;
        }
    }

    /**
     * calcCycles(fRecalc)
     *
     * Calculate the number of cycles to process for each "burst" of CPU activity.  The size of a burst
     * is driven by YIELDS_PER_SECOND (eg, 30).
     *
     * At the end of each burst, we subtract burst cycles from the yield cycle "threshold" counter.
     * Whenever the "next yield" cycle counter goes to (or below) zero, we compare elapsed time to the time
     * we expected the virtual hardware to take (eg, 1000ms/50 or 20ms), and if we still have time remaining,
     * we sleep the remaining time (or 0ms if there's no remaining time), and then restart runCPU().
     *
     * @this {CPUx80}
     * @param {boolean} [fRecalc] is true if the caller wants to recalculate thresholds based on the most recent
     * speed calculation (see calcSpeed).
     */
    calcCycles(fRecalc)
    {
        /*
         * Calculate "per" yield values.
         */
        let vMultiplier = 1;
        if (fRecalc) {
            if (this.nCyclesMultiplier > 1 && this.mhz) {
                vMultiplier = (this.mhz / this.mhzDefault);
            }
        }

        this.msPerYield = Math.round(1000 / CPUx80.YIELDS_PER_SECOND);
        this.nCyclesPerYield = Math.floor(this.nCyclesPerSecond / CPUx80.YIELDS_PER_SECOND * vMultiplier);

        /*
         * And initialize "next" yield values to the "per" values.
         */
        if (!fRecalc) {
            this.nCyclesNextYield = this.nCyclesPerYield;
        }
        this.nCyclesRecalc = 0;
    }

    /**
     * getCycles(fScaled)
     *
     * getCycles() returns the number of cycles executed so far.  Note that we can be called after
     * runCPU() OR during runCPU(), perhaps from a handler triggered during the current run's stepCPU(),
     * so nRunCycles must always be adjusted by number of cycles stepCPU() was asked to run (nBurstCycles),
     * less the number of cycles it has yet to run (nStepCycles).
     *
     * nRunCycles is zeroed whenever the CPU is halted or the CPU speed is changed, which is why we also
     * have nTotalCycles, which accumulates all nRunCycles before we zero it.  However, nRunCycles and
     * nTotalCycles eventually get reset by calcSpeed(), to avoid overflow, so components that rely on
     * getCycles() returning steadily increasing values should also be prepared for a reset at any time.
     *
     * @this {CPUx80}
     * @param {boolean} [fScaled] is true if the caller wants a cycle count relative to a multiplier of 1
     * @returns {number}
     */
    getCycles(fScaled)
    {
        let nCycles = this.nTotalCycles + this.nRunCycles + this.nBurstCycles - this.nStepCycles;
        if (fScaled && this.nCyclesMultiplier > 1 && this.mhz > this.mhzDefault) {
            /*
             * We could scale the current cycle count by the current effective speed (this.mhz); eg:
             *
             *      nCycles = Math.round(nCycles / (this.mhz / this.mhzDefault));
             *
             * but that speed will fluctuate somewhat: large fluctuations at first, but increasingly smaller
             * fluctuations after each burst of instructions that runCPU() executes.
             *
             * Alternatively, we can scale the cycle count by the multiplier, which is good in that the
             * multiplier doesn't vary once the user changes it, but a potential downside is that the
             * multiplier might be set too high, resulting in a target speed that's higher than the effective
             * speed is able to reach.
             *
             * Also, if multipliers were always limited to a power-of-two, then this could be calculated
             * with a simple shift.  However, only the "setSpeed" UI binding limits it that way; the Debugger
             * interface allows any value, as does the CPU "multiplier" parmsCPU property (from the machine's
             * XML file).
             */
            nCycles = Math.round(nCycles / this.nCyclesMultiplier);
        }
        return nCycles;
    }

    /**
     * getCyclesPerSecond()
     *
     * This returns the CPU's "base" speed (ie, the original cycles per second defined for the machine)
     *
     * @this {CPUx80}
     * @returns {number}
     */
    getCyclesPerSecond()
    {
        return this.nCyclesPerSecond;
    }

    /**
     * resetCycles()
     *
     * Resets speed and cycle information as part of any reset() or restore(); this typically occurs during powerUp().
     * It's important that this be called BEFORE the actual restore() call, because restore() may want to call setSpeed(),
     * which in turn assumes that all the cycle counts have been initialized to sensible values.
     *
     * @this {CPUx80}
     */
    resetCycles()
    {
        this.mhz = 0;
        this.nYieldsSinceStatusUpdate = 0;
        this.nTotalCycles = this.nRunCycles = this.nBurstCycles = this.nStepCycles = 0;
        this.resetChecksum();
        this.setSpeed(1);
    }

    /**
     * getSpeed()
     *
     * @this {CPUx80}
     * @returns {number} the current speed multiplier
     */
    getSpeed()
    {
        return this.nCyclesMultiplier;
    }

    /**
     * getSpeedCurrent()
     *
     * @this {CPUx80}
     * @returns {string} the current speed, in mhz, as a string formatted to two decimal places
     */
    getSpeedCurrent()
    {
        /*
         * TODO: Has toFixed() been "fixed" in all browsers (eg, IE) to return a rounded value now?
         */
        return ((this.flags.running && this.mhz)? (this.mhz.toFixed(2) + "Mhz") : "Stopped");
    }

    /**
     * getSpeedTarget()
     *
     * @this {CPUx80}
     * @returns {string} the target speed, in mhz, as a string formatted to two decimal places
     */
    getSpeedTarget()
    {
        /*
         * TODO: Has toFixed() been "fixed" in all browsers (eg, IE) to return a rounded value now?
         */
        return this.mhzTarget.toFixed(2) + "Mhz";
    }

    /**
     * setSpeed(nMultiplier, fUpdateFocus)
     *
     * NOTE: This used to return the target speed, in mhz, but no callers appear to care at this point.
     *
     * @desc Whenever the speed is changed, the running cycle count and corresponding start time must be reset,
     * so that the next effective speed calculation obtains sensible results.  In fact, when runCPU() initially calls
     * setSpeed() with no parameters, that's all this function does (it doesn't change the current speed setting).
     *
     * @this {CPUx80}
     * @param {number} [nMultiplier] is the new proposed multiplier (reverts to 1 if the target was too high)
     * @param {boolean} [fUpdateFocus] is true to update Computer focus
     * @returns {boolean} true if successful, false if not
     */
    setSpeed(nMultiplier, fUpdateFocus)
    {
        let fSuccess = false;
        if (nMultiplier !== undefined) {
            /*
             * If we haven't reached 80% (0.8) of the current target speed, revert to a multiplier of one (1).
             */
            if (this.mhz / this.mhzTarget < 0.8) {
                nMultiplier = 1;
            } else {
                fSuccess = true;
            }
            this.nCyclesMultiplier = nMultiplier;
            let mhz = this.mhzDefault * this.nCyclesMultiplier;
            if (this.mhzTarget != mhz) {
                this.mhzTarget = mhz;
                let sSpeed = this.getSpeedTarget();
                let controlSpeed = this.bindings["setSpeed"];
                if (controlSpeed) controlSpeed.textContent = sSpeed;
                this.printf("target speed: %s\n", sSpeed);
            }
            if (fUpdateFocus && this.cmp) this.cmp.updateFocus();
        }
        this.addCycles(this.nRunCycles);
        this.nRunCycles = 0;
        this.msStartRun = Component.getTime();
        this.msEndThisRun = 0;
        this.calcCycles();
        return fSuccess;
    }

    /**
     * calcSpeed(nCycles, msElapsed)
     *
     * @this {CPUx80}
     * @param {number} nCycles
     * @param {number} msElapsed
     */
    calcSpeed(nCycles, msElapsed)
    {
        if (msElapsed) {
            this.mhz = Math.round(nCycles / (msElapsed * 10)) / 100;
            if (msElapsed >= 86400000) {
                this.nTotalCycles = 0;
                this.setSpeed();        // reset all counters once per day so that we never have to worry about overflow
            }
        }
    }

    /**
     * calcStartTime()
     *
     * @this {CPUx80}
     */
    calcStartTime()
    {
        if (this.nCyclesRecalc >= this.nCyclesPerSecond) {
            this.calcCycles(true);
        }
        this.nCyclesThisRun = 0;
        this.msStartThisRun = Component.getTime();

        /*
         * Try to detect situations where the browser may have throttled us, such as when the user switches
         * to a different tab; in those situations, Chrome and Safari may restrict setTimeout() callbacks
         * to roughly one per second.
         *
         * Another scenario: the user resizes the browser window.  setTimeout() callbacks are not throttled,
         * but there can still be enough of a lag between the callbacks that CPU speed will be noticeably
         * erratic if we don't compensate for it here.
         *
         * We can detect throttling/lagging by verifying that msEndThisRun (which was set at the end of the
         * previous run and includes any requested sleep time) is comparable to the current msStartThisRun;
         * if the delta is significant, we compensate by bumping msStartRun forward by that delta.
         *
         * This shouldn't be triggered when the Debugger halts the CPU, because setSpeed() -- which is called
         * whenever the CPU starts running again -- zeroes msEndThisRun.
         *
         * This also won't do anything about other internal delays; for example, Debugger message() calls.
         * By the time the message() function has called yieldCPU(), the cost of the message has already been
         * incurred, so it will be end up being charged against the instruction(s) that triggered it.
         *
         * TODO: Consider calling yieldCPU() sooner from message(), so that it can arrange for the msEndThisRun
         * "snapshot" to occur sooner; it's unclear, however, whether that will really improve the CPU's ability
         * to hit its target speed, since you would expect any instruction that displays a message to be an
         * EXTREMELY slow instruction.
         */
        if (this.msEndThisRun) {
            let msDelta = this.msStartThisRun - this.msEndThisRun;
            if (msDelta > this.msPerYield) {
                if (MAXDEBUG) this.printf("large time delay: %dms\n", msDelta);
                this.msStartRun += msDelta;
                /*
                 * Bumping msStartRun forward should NEVER cause it to exceed msStartThisRun; however, just
                 * in case, I make absolutely sure it cannot happen, since doing so could result in negative
                 * speed calculations.
                 */

                if (this.msStartRun > this.msStartThisRun) {
                    this.msStartRun = this.msStartThisRun;
                }
            }
        }
    }

    /**
     * calcRemainingTime()
     *
     * @this {CPUx80}
     * @returns {number}
     */
    calcRemainingTime()
    {
        this.msEndThisRun = Component.getTime();

        let msYield = this.msPerYield;
        if (this.nCyclesThisRun) {
            /*
             * Normally, we would assume we executed a full quota of work over msPerYield, but since the CPU
             * now has the option of calling yieldCPU(), that might not be true.  If nCyclesThisRun is correct, then
             * the ratio of nCyclesThisRun/nCyclesPerYield should represent the percentage of work we performed,
             * and so applying that percentage to msPerYield should give us a better estimate of work vs. time.
             */
            msYield = Math.round(msYield * this.nCyclesThisRun / this.nCyclesPerYield);
        }

        let msElapsedThisRun = this.msEndThisRun - this.msStartThisRun;
        let msRemainsThisRun = msYield - msElapsedThisRun;

        /*
         * We could pass only "this run" results to calcSpeed():
         *
         *      nCycles = this.nCyclesThisRun;
         *      msElapsed = msElapsedThisRun;
         *
         * but it seems preferable to use longer time periods and hopefully get a more accurate speed.
         *
         * Also, if msRemainsThisRun >= 0 && this.nCyclesMultiplier == 1, we could pass these results instead:
         *
         *      nCycles = this.nCyclesThisRun;
         *      msElapsed = this.msPerYield;
         *
         * to insure that we display a smooth, constant N Mhz.  But for now, I prefer seeing any fluctuations.
         */
        let nCycles = this.nRunCycles;
        let msElapsed = this.msEndThisRun - this.msStartRun;

        if (MAXDEBUG && msRemainsThisRun < 0 && this.nCyclesMultiplier > 1) {
            this.printf("warning: updates @%dms (prefer %dms)\n", msElapsedThisRun, Math.round(msYield));
        }

        this.calcSpeed(nCycles, msElapsed);

        if (msRemainsThisRun < 0 || this.mhz < this.mhzTarget) {
            /*
             * Try "throwing out" the effects of large anomalies, by moving the overall run start time up;
             * ordinarily, this should only happen when the someone is using an external Debugger or some other
             * tool or feature that is interfering with our overall execution.
             */
            if (msRemainsThisRun < -1000) {
                this.msStartRun -= msRemainsThisRun;
            }
            /*
             * If the last burst took MORE time than we allotted (ie, it's taking more than 1 second to simulate
             * nCyclesPerSecond), all we can do is yield for as little time as possible (ie, 0ms) and hope that the
             * simulation is at least usable.
             */
            msRemainsThisRun = 0;
        }

        /*
         * Last but not least, update nCyclesRecalc, so that when runCPU() starts up again and calls calcStartTime(),
         * it'll be ready to decide if calcCycles() should be called again.
         */
        this.nCyclesRecalc += this.nCyclesThisRun;

        if (DEBUG && this.messageEnabled(MESSAGE.CPU) && msRemainsThisRun) {
            this.printf("calcRemainingTime: %dms to sleep after %dms\n", msRemainsThisRun, this.msEndThisRun);
        }

        this.msEndThisRun += msRemainsThisRun;
        return msRemainsThisRun;
    }

    /**
     * addTimer(id, callBack, ms)
     *
     * Components that want to have timers that fire after some number of milliseconds call addTimer() to create
     * the timer, and then setTimer() when they want to arm it.  Alternatively, they can specify an automatic timeout
     * value (in milliseconds) to have the timer fire automatically at regular intervals.  There is currently
     * no removeTimer() because these are generally used for the entire lifetime of a component.
     *
     * Internally, each timer entry is a preallocated Array with the following entries:
     *
     *      [0]: timer ID
     *      [1]: countdown value, in cycles
     *      [2]: automatic setTimer value, if any, in milliseconds
     *      [3]: callback function
     *
     * A timer is initially dormant; dormant timers have a countdown value of -1 (although any negative number
     * will suffice) and active timers have a non-negative value.
     *
     * Why not use JavaScript's setTimeout() instead?  Good question.  For a good answer, see setTimer() below.
     *
     * @this {CPUx80}
     * @param {string} id
     * @param {function()} callBack
     * @param {number} [ms] (if set, enables automatic setTimer calls)
     * @returns {number} timer index
     */
    addTimer(id, callBack, ms = -1)
    {
        let iTimer = this.aTimers.length;
        this.aTimers.push([id, -1, ms, callBack]);
        if (ms >= 0) this.setTimer(iTimer, ms);
        return iTimer;
    }

    /**
     * findTimer(id)
     *
     * @this {CPUx80}
     * @param {string} id
     * @returns {Array|null}
     */
    findTimer(id)
    {
        for (let iTimer = 0; iTimer < this.aTimers.length; iTimer++) {
            let timer = this.aTimers[iTimer];
            if (timer[0] == id) return timer;
        }
        return null;
    }

    /**
     * setTimer(iTimer, ms, fReset)
     *
     * Using the timer index from a previous addTimer() call, this sets that timer to fire after the
     * specified number of milliseconds.
     *
     * This is preferred over JavaScript's setTimeout(), because all our timers are effectively paused when
     * the CPU is paused (eg, when the Debugger halts execution).  Moreover, setTimeout() handlers only run after
     * runCPU() yields, which is far too granular for some components (eg, when the SerialPort tries to simulate
     * interrupts at 9600 baud).
     *
     * Ideally, the only function that would use setTimeout() is runCPU(), while the rest of the components
     * use setTimer(); however, due to legacy code (ie, code that predates these functions) and/or laziness,
     * that's currently not the case.  TODO: Fix.
     *
     * @this {CPUx80}
     * @param {number} iTimer
     * @param {number} ms (converted into a cycle countdown internally)
     * @param {boolean} [fReset] (true if the timer should be reset even if already armed)
     * @returns {number} (number of cycles used to arm timer, or -1 if error)
     */
    setTimer(iTimer, ms, fReset)
    {
        let nCycles = -1;
        if (iTimer >= 0 && iTimer < this.aTimers.length) {
            let timer = this.aTimers[iTimer];
            if (fReset || timer[1] < 0) {
                nCycles = this.getMSCycles(ms);
                /*
                 * If the CPU is currently executing a burst of cycles, the number of cycles it has executed in
                 * that burst so far must NOT be charged against the cycle timeout we're about to set.  The simplest
                 * way to resolve that is to immediately call endBurst() and bias the cycle timeout by the number
                 * of cycles that the burst executed.
                 */
                if (this.flags.running) {
                    nCycles += this.endBurst();
                }
                timer[1] = nCycles;
            }
        }
        return nCycles;
    }

    /**
     * getMSCycles(ms)
     *
     * @this {CPUx80}
     * @param {number} ms
     * @returns {number} number of corresponding cycles
     */
    getMSCycles(ms)
    {
        return ((this.nCyclesPerSecond * this.nCyclesMultiplier) / 1000 * ms)|0;
    }

    /**
     * getBurstCycles(nCycles)
     *
     * Used by runCPU() to get min(nCycles,[timer cycle counts])
     *
     * @this {CPUx80}
     * @param {number} nCycles (number of cycles about to execute)
     * @returns {number} (either nCycles or less if a timer needs to fire)
     */
    getBurstCycles(nCycles)
    {
        for (let iTimer = this.aTimers.length - 1; iTimer >= 0; iTimer--) {
            let timer = this.aTimers[iTimer];

            if (timer[1] < 0) continue;
            if (nCycles > timer[1]) {
                nCycles = timer[1];
            }
        }
        return nCycles;
    }

    /**
     * updateTimers(nCycles)
     *
     * Used by runCPU() to reduce all active timer countdown values by the number of cycles just executed;
     * this is the function that actually "fires" any timer(s) whose countdown has reached (or dropped below)
     * zero, invoking their callback function.
     *
     * @this {CPUx80}
     * @param {number} nCycles (number of cycles actually executed)
     */
    updateTimers(nCycles)
    {
        for (let iTimer = this.aTimers.length - 1; iTimer >= 0; iTimer--) {
            let timer = this.aTimers[iTimer];

            if (timer[1] < 0) continue;
            timer[1] -= nCycles;
            if (timer[1] <= 0) {
                this.printf(MESSAGE.DEBUG + MESSAGE.CPU, "updateTimer(%d): firing %s with only %d cycles left\n", nCycles, timer[0], (timer[1] + nCycles));
                timer[1] = -1;      // zero is technically an "active" value, so ensure the timer is dormant now
                timer[3]();         // safe to invoke the callback function now
                if (timer[2] >= 0) {
                    this.setTimer(iTimer, timer[2]);
                    this.printf(MESSAGE.DEBUG + MESSAGE.CPU, "updateTimer(%d): rearming %s for %dms (%d cycles)\n", nCycles, timer[0], timer[2], timer[1]);
                }
            }
        }
    }

    /**
     * endBurst(fReset)
     *
     * @this {CPUx80}
     * @param {boolean} [fReset]
     * @returns {number} (number of cycles executed in the most recent burst)
     */
    endBurst(fReset)
    {
        let nCycles = this.nBurstCycles -= this.nStepCycles;
        this.nStepCycles = 0;
        if (fReset) this.nBurstCycles = 0;
        return nCycles;
    }

    /**
     * runCPU(fUpdateFocus)
     *
     * @this {CPUx80}
     * @param {boolean} [fUpdateFocus] is true to update Computer focus
     */
    runCPU(fUpdateFocus)
    {
        if (!this.setBusy(true)) {
            this.updateCPU();
            if (this.cmp) this.cmp.stop(Component.getTime(), this.getCycles());
            return;
        }

        this.startCPU(fUpdateFocus);

        /*
         *  calcStartTime() initializes the cycle counter and timestamp for this runCPU() invocation, and optionally
         *  recalculates the the maximum number of cycles for each burst if the nCyclesRecalc threshold has been reached.
         */
        this.calcStartTime();

        try {
            do {
                /*
                 * nCycles is how many cycles we WANT to run on each iteration of stepCPU(), and may be as
                 * HIGH as nCyclesPerYield, but it may be significantly less.  getBurstCycles() will adjust
                 * nCycles downward if any CPU timers need to fire during the next burst.
                 */
                let nCycles = this.getBurstCycles(this.flags.checksum? 1 : this.nCyclesPerYield);

                /*
                 * Execute the burst.
                 */
                this.stepCPU(nCycles);

                /*
                 * Terminate the burst, returning the number of cycles that stepCPU() actually ran.
                 */
                nCycles = this.endBurst(true);

                /*
                 * Add nCycles to nCyclesThisRun, as well as nRunCycles (the cycle count since the CPU first started).
                 */
                this.nCyclesThisRun += nCycles;
                this.nRunCycles += nCycles;
                this.updateChecksum(nCycles);

                /*
                 * Update any/all timers, firing those whose cycle countdowns have reached (or dropped below) zero.
                 */
                this.updateTimers(nCycles);

                this.nCyclesNextYield -= nCycles;
                if (this.nCyclesNextYield <= 0) {
                    this.nCyclesNextYield += this.nCyclesPerYield;
                    if (++this.nYieldsSinceStatusUpdate >= CPUx80.YIELDS_PER_STATUS) {
                        if (this.cmp) this.cmp.updateStatus();
                        this.nYieldsSinceStatusUpdate = 0;
                    }
                    break;
                }
            } while (this.flags.running);
        }
        catch (e) {
            this.stopCPU();
            this.updateCPU();
            if (this.cmp) this.cmp.stop(Component.getTime(), this.getCycles());
            this.setBusy(false);
            this.setError(e.stack || e.message);
            return;
        }

        setTimeout(this.onRunTimeout, this.calcRemainingTime());
    }

    /**
     * startCPU(fUpdateFocus)
     *
     * WARNING: Other components must use runCPU() to get the CPU running; this is a runCPU() helper function only.
     *
     * @param {boolean} [fUpdateFocus]
     */
    startCPU(fUpdateFocus)
    {
        if (!this.flags.running) {
            /*
             *  setSpeed() without a speed parameter leaves the selected speed in place, but also resets the
             *  cycle counter and timestamp for the current series of runCPU() calls, calculates the maximum number
             *  of cycles for each burst based on the last known effective CPU speed, and resets the nCyclesRecalc
             *  threshold counter.
             */
            this.setSpeed();
            if (this.cmp) this.cmp.start(this.msStartRun, this.getCycles());
            this.flags.running = true;
            this.flags.starting = true;
            if (this.chipset) this.chipset.start();
            let controlRun = this.bindings["run"];
            if (controlRun) controlRun.textContent = "Halt";
            if (this.cmp) {
                this.cmp.updateStatus(true);
                if (fUpdateFocus) this.cmp.updateFocus(true);
            }
        }
    }

    /**
     * stepCPU(nMinCycles)
     *
     * This will be implemented by the CPUStateX80 component.
     *
     * @this {CPUx80}
     * @param {number} nMinCycles (0 implies a single-step, and therefore breakpoints should be ignored)
     * @returns {number} of cycles executed; 0 indicates that the last instruction was not executed
     */
    stepCPU(nMinCycles)
    {
        return 0;
    }

    /**
     * stopCPU(fComplete)
     *
     * For use by any component that wants to stop the CPU.
     *
     * This similar to yieldCPU(), but it doesn't need to zero nCyclesNextYield to break out of runCPU();
     * it simply needs to clear fRunning (well, "simply" may be oversimplifying a bit....)
     *
     * @this {CPUx80}
     * @param {boolean} [fComplete]
     */
    stopCPU(fComplete)
    {
        this.isBusy(true);
        this.endBurst();
        this.addCycles(this.nRunCycles);
        this.nRunCycles = 0;
        if (this.flags.running) {
            this.flags.running = false;
            if (this.chipset) this.chipset.stop();
            let controlRun = this.bindings["run"];
            if (controlRun) controlRun.textContent = "Run";
        }
        this.flags.complete = fComplete;
    }

    /**
     * updateCPU(fForce)
     *
     * This used to be performed at the end of every stepCPU(), but runCPU() -- which relies upon
     * stepCPU() -- needed to have more control over when these updates are performed.  However, for
     * other callers of stepCPU(), such as the Debugger, the combination of stepCPU() + updateCPU()
     * provides the old behavior.
     *
     * @this {CPUx80}
     * @param {boolean} [fForce] (true to force a video update; used by the Debugger)
     */
    updateCPU(fForce)
    {
        if (this.cmp) {
            this.cmp.updateVideo(fForce);
            this.cmp.updateStatus(fForce);
        }
    }

    /**
     * yieldCPU()
     *
     * Similar to stopCPU() with regard to how it resets various cycle countdown values, but the CPU
     * remains in a "running" state.
     *
     * @this {CPUx80}
     */
    yieldCPU()
    {
        this.endBurst();                    // this will break us out of stepCPU()
        this.nCyclesNextYield = 0;          // this will break us out of runCPU(), once we break out of stepCPU()
        // if (DEBUG) this.nSnapCycles = this.nBurstCycles;
        /*
         * The Debugger calls yieldCPU() after every message() to ensure browser responsiveness, but it looks
         * odd for those messages to show CPU state changes but for the CPU's own status display to not (ditto
         * for the Video display), so I've added this call to try to keep things looking synchronized.
         */
        this.updateCPU();
    }
}

/*
 * Constants that control the frequency at which various updates should occur.
 *
 * These values do NOT control the simulation directly.  Instead, they are used by
 * calcCycles(), which uses the nCyclesPerSecond passed to the constructor as a starting
 * point and computes the following variables:
 *
 *      this.nCyclesPerYield:    (this.nCyclesPerSecond / CPUx80.YIELDS_PER_SECOND)
 *
 * The above variables are also multiplied by any cycle multiplier in effect, via setSpeed(),
 * and then they're used to initialize another set of variables for each runCPU() iteration:
 *
 *      this.nCyclesNextYield:   this.nCyclesPerYield
 */
CPUx80.YIELDS_PER_SECOND       = 30;           // just a gut feeling for the MINIMUM number of yields per second
CPUx80.YIELDS_PER_STATUS       = 15;           // every 15 yields (ie, twice per second), perform CPU status updates

CPUx80.BUTTONS = ["power", "reset"];

/**
 * @copyright https://www.pcjs.org/machines/pcx80/modules/v2/cpustate.js (C) 2012-2025 Jeff Parsons
 */

/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @class CPUStateX80
 * @unrestricted
 */
class CPUStateX80 extends CPUx80 {
    /**
     * CPUStateX80(parmsCPU)
     *
     * The CPUStateX80 class uses the following (parmsCPU) properties:
     *
     *      model: a number (eg, 8080) that should match one of the CPUDefX80.MODEL_* values
     *
     * This extends the CPU class and passes any remaining parmsCPU properties to the CPU class
     * constructor, along with a default speed (cycles per second) based on the specified (or default)
     * CPU model number.
     *
     * The CPUStateX80 class was initially written to simulate a 8080 microprocessor, although over time
     * it may evolved to support other microprocessors (eg, the Zilog Z80).
     *
     * @this {CPUStateX80}
     * @param {Object} parmsCPU
     */
    constructor(parmsCPU)
    {
        let nCyclesDefault = 0;
        let model = +parmsCPU['model'] || CPUDefX80.MODEL_8080;

        switch(model) {
        case CPUDefX80.MODEL_8080:
        default:
            nCyclesDefault = 1000000;
            break;
        }

        super(parmsCPU, nCyclesDefault);

        this.model = model;

        /*
         * Initialize processor operation to match the requested model
         */
        this.initProcessor();

        /*
         * A variety of stepCPU() state variables that don't strictly need to be initialized before the first
         * stepCPU() call, but it's good form to do so.
         */
        this.resetCycles();
        this.flags.complete = this.flags.debugCheck = false;

        /*
         * If there are no live registers to display, then updateStatus() can skip a bit....
         */
        this.cLiveRegs = 0;

        /*
         * Array of halt handlers, if any (see addHaltCheck)
         */
        this.afnHalt = [];
        this.addrReset = 0x0000;

        /*
         * This initial resetRegs() call is important to create all the registers, so that if/when we call restore(),
         * it will have something to fill in.
         */
        this.resetRegs();
    }

    /**
     * addHaltCheck(fn)
     *
     * Records a function that will be called during HLT opcode processing.
     *
     * @this {CPUStateX80}
     * @param {function(number)} fn
     */
    addHaltCheck(fn)
    {
        this.afnHalt.push(fn);
    }

    /**
     * initProcessor()
     *
     * Interestingly, if I dynamically generate aOps as an array of functions bound to "this", using the bind()
     * method, overall performance is worse.  You would think that eliminating the need to use the call() method
     * on every opcode function invocation would be helpful, but it's not.  I'm not sure exactly why yet; perhaps
     * a Closure Compiler optimization is defeated when generating the function array at run-time instead of at
     * compile-time.
     *
     * @this {CPUStateX80}
     */
    initProcessor()
    {
        this.aOps = CPUDefX80.aOpsX80;
    }

    /**
     * reset()
     *
     * @this {CPUStateX80}
     */
    reset()
    {
        if (this.flags.running) this.stopCPU();
        this.resetRegs();
        this.resetCycles();
        this.clearError();      // clear any fatal error/exception that setError() may have flagged
        super.reset();
    }

    /**
     * resetRegs()
     *
     * @this {CPUStateX80}
     */
    resetRegs()
    {
        this.regA = 0;
        this.regB = 0;
        this.regC = 0;
        this.regD = 0;
        this.regE = 0;
        this.regH = 0;
        this.regL = 0;
        this.setSP(0);
        this.setPC(this.addrReset);

        /*
         * This resets the Processor Status flags (regPS), along with all the internal "result registers".
         */
        this.setPS(0);

        /*
         * intFlags contains some internal states we use to indicate whether a hardware interrupt (INTFLAG.INTR) or
         * Trap software interrupt (INTR.TRAP) has been requested, as well as when we're in a "HLT" state (INTFLAG.HALT)
         * that requires us to wait for a hardware interrupt (INTFLAG.INTR) before continuing execution.
         */
        this.intFlags = CPUDefX80.INTFLAG.NONE;
    }

    /**
     * setReset(addr)
     *
     * @this {CPUStateX80}
     * @param {number} addr
     */
    setReset(addr)
    {
        this.addrReset = addr;
        this.setPC(addr);
    }

    /**
     * getChecksum()
     *
     * @this {CPUStateX80}
     * @returns {number} a 32-bit summation of key elements of the current CPU state (used by the CPU checksum code)
     */
    getChecksum()
    {
        let sum = (this.regA + this.regB + this.regC + this.regD + this.regE + this.regH + this.regL)|0;
        sum = (sum + this.getSP() + this.getPC() + this.getPS())|0;
        return sum;
    }

    /**
     * save()
     *
     * This implements save support for the CPUStateX80 component.
     *
     * @this {CPUStateX80}
     * @returns {Object|null}
     */
    save()
    {
        let state = new State(this);
        state.set(0, [this.regA, this.regB, this.regC, this.regD, this.regE, this.regH, this.regL, this.getSP(), this.getPC(), this.getPS()]);
        state.set(1, [this.intFlags, this.nTotalCycles, this.getSpeed()]);
        state.set(2, this.bus.saveMemory());
        return state.data();
    }

    /**
     * restore(data)
     *
     * This implements restore support for the CPUStateX80 component.
     *
     * @this {CPUStateX80}
     * @param {Object} data
     * @returns {boolean} true if restore successful, false if not
     */
    restore(data)
    {
        let a = data[0];
        this.regA = a[0];
        this.regB = a[1];
        this.regC = a[2];
        this.regD = a[3];
        this.regE = a[4];
        this.regH = a[5];
        this.regL = a[6];
        this.setSP(a[7]);
        this.setPC(a[8]);
        this.setPS(a[9]);
        a = data[1];
        this.intFlags = a[0];
        this.nTotalCycles = a[1];
        this.setSpeed(a[3]);
        return this.bus.restoreMemory(data[2]);
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * @this {CPUStateX80}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea", "canvas")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "AX")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        let fBound = false;
        switch (sBinding) {
        case "A":
        case "B":
        case "C":
        case "BC":
        case "D":
        case "E":
        case "DE":
        case "H":
        case "L":
        case "HL":
        case "SP":
        case "PC":
        case "PS":
        case "IF":
        case "SF":
        case "ZF":
        case "AF":
        case "PF":
        case "CF":
            this.bindings[sBinding] = control;
            this.cLiveRegs++;
            fBound = true;
            break;
        default:
            fBound = super.setBinding(sHTMLType, sBinding, control);
            break;
        }
        return fBound;
    }

    /**
     * getBC()
     *
     * @this {CPUStateX80}
     * @returns {number}
     */
    getBC()
    {
        return (this.regB << 8) | this.regC;
    }

    /**
     * setBC(w)
     *
     * @this {CPUStateX80}
     * @param {number} w
     */
    setBC(w)
    {
        this.regB = (w >> 8) & 0xff;
        this.regC = w & 0xff;
    }

    /**
     * getDE()
     *
     * @this {CPUStateX80}
     * @returns {number}
     */
    getDE()
    {
        return (this.regD << 8) | this.regE;
    }

    /**
     * setDE(w)
     *
     * @this {CPUStateX80}
     * @param {number} w
     */
    setDE(w)
    {
        this.regD = (w >> 8) & 0xff;
        this.regE = w & 0xff;
    }

    /**
     * getHL()
     *
     * @this {CPUStateX80}
     * @returns {number}
     */
    getHL()
    {
        return (this.regH << 8) | this.regL;
    }

    /**
     * setHL(w)
     *
     * @this {CPUStateX80}
     * @param {number} w
     */
    setHL(w)
    {
        this.regH = (w >> 8) & 0xff;
        this.regL = w & 0xff;
    }

    /**
     * getSP()
     *
     * @this {CPUStateX80}
     * @returns {number}
     */
    getSP()
    {
        return this.regSP;
    }

    /**
     * setSP(off)
     *
     * @this {CPUStateX80}
     * @param {number} off
     */
    setSP(off)
    {
        this.regSP = off & 0xffff;
    }

    /**
     * getPC()
     *
     * @this {CPUStateX80}
     * @returns {number}
     */
    getPC()
    {
        return this.regPC;
    }

    /**
     * offPC()
     *
     * @this {CPUStateX80}
     * @param {number} off
     * @returns {number}
     */
    offPC(off)
    {
        return (this.regPC + off) & 0xffff;
    }

    /**
     * setPC(off)
     *
     * @this {CPUStateX80}
     * @param {number} off
     */
    setPC(off)
    {
        this.regPC = off & 0xffff;
    }

    /**
     * clearCF()
     *
     * @this {CPUStateX80}
     */
    clearCF()
    {
        this.resultZeroCarry &= 0xff;
    }

    /**
     * getCF()
     *
     * @this {CPUStateX80}
     * @returns {number} 0 or 1 (CPUDefX80.PS.CF)
     */
    getCF()
    {
        return (this.resultZeroCarry & 0x100)? CPUDefX80.PS.CF : 0;
    }

    /**
     * setCF()
     *
     * @this {CPUStateX80}
     */
    setCF()
    {
        this.resultZeroCarry |= 0x100;
    }

    /**
     * updateCF(CF)
     *
     * @this {CPUStateX80}
     * @param {number} CF (0x000 or 0x100)
     */
    updateCF(CF)
    {
        this.resultZeroCarry = (this.resultZeroCarry & 0xff) | CF;
    }

    /**
     * clearPF()
     *
     * @this {CPUStateX80}
     */
    clearPF()
    {
        if (this.getPF()) this.resultParitySign ^= 0x1;
    }

    /**
     * getPF()
     *
     * @this {CPUStateX80}
     * @returns {number} 0 or CPUDefX80.PS.PF
     */
    getPF()
    {
        return (CPUDefX80.PARITY[this.resultParitySign & 0xff])? CPUDefX80.PS.PF : 0;
    }

    /**
     * setPF()
     *
     * @this {CPUStateX80}
     */
    setPF()
    {
        if (!this.getPF()) this.resultParitySign ^= 0x1;
    }

    /**
     * clearAF()
     *
     * @this {CPUStateX80}
     */
    clearAF()
    {
        this.resultAuxOverflow = (this.resultParitySign & 0x10) | (this.resultAuxOverflow & ~0x10);
    }

    /**
     * getAF()
     *
     * @this {CPUStateX80}
     * @returns {number} 0 or CPUDefX80.PS.AF
     */
    getAF()
    {
        return ((this.resultParitySign ^ this.resultAuxOverflow) & 0x10)? CPUDefX80.PS.AF : 0;
    }

    /**
     * setAF()
     *
     * @this {CPUStateX80}
     */
    setAF()
    {
        this.resultAuxOverflow = (~this.resultParitySign & 0x10) | (this.resultAuxOverflow & ~0x10);
    }

    /**
     * clearZF()
     *
     * @this {CPUStateX80}
     */
    clearZF()
    {
        this.resultZeroCarry |= 0xff;
    }

    /**
     * getZF()
     *
     * @this {CPUStateX80}
     * @returns {number} 0 or CPUDefX80.PS.ZF
     */
    getZF()
    {
        return (this.resultZeroCarry & 0xff)? 0 : CPUDefX80.PS.ZF;
    }

    /**
     * setZF()
     *
     * @this {CPUStateX80}
     */
    setZF()
    {
        this.resultZeroCarry &= ~0xff;
    }

    /**
     * clearSF()
     *
     * @this {CPUStateX80}
     */
    clearSF()
    {
        if (this.getSF()) this.resultParitySign ^= 0xc0;
    }

    /**
     * getSF()
     *
     * @this {CPUStateX80}
     * @returns {number} 0 or CPUDefX80.PS.SF
     */
    getSF()
    {
        return (this.resultParitySign & 0x80)? CPUDefX80.PS.SF : 0;
    }

    /**
     * setSF()
     *
     * @this {CPUStateX80}
     */
    setSF()
    {
        if (!this.getSF()) this.resultParitySign ^= 0xc0;
    }

    /**
     * clearIF()
     *
     * @this {CPUStateX80}
     */
    clearIF()
    {
        this.regPS &= ~CPUDefX80.PS.IF;
    }

    /**
     * getIF()
     *
     * @this {CPUStateX80}
     * @returns {number} 0 or CPUDefX80.PS.IF
     */
    getIF()
    {
        return (this.regPS & CPUDefX80.PS.IF);
    }

    /**
     * setIF()
     *
     * @this {CPUStateX80}
     */
    setIF()
    {
        this.regPS |= CPUDefX80.PS.IF;
    }

    /**
     * getPS()
     *
     * @this {CPUStateX80}
     * @returns {number}
     */
    getPS()
    {
        return (this.regPS & ~CPUDefX80.PS.RESULT) | (this.getSF() | this.getZF() | this.getAF() | this.getPF() | this.getCF());
    }

    /**
     * setPS(regPS)
     *
     * @this {CPUStateX80}
     * @param {number} regPS
     */
    setPS(regPS)
    {
        this.resultZeroCarry = this.resultParitySign = this.resultAuxOverflow = 0;
        if (regPS & CPUDefX80.PS.CF) this.resultZeroCarry |= 0x100;
        if (!(regPS & CPUDefX80.PS.PF)) this.resultParitySign |= 0x01;
        if (regPS & CPUDefX80.PS.AF) this.resultAuxOverflow |= 0x10;
        if (!(regPS & CPUDefX80.PS.ZF)) this.resultZeroCarry |= 0xff;
        if (regPS & CPUDefX80.PS.SF) this.resultParitySign ^= 0xc0;
        this.regPS = (this.regPS & ~(CPUDefX80.PS.RESULT | CPUDefX80.PS.INTERNAL)) | (regPS & CPUDefX80.PS.INTERNAL) | CPUDefX80.PS.SET;

    }

    /**
     * getPSW()
     *
     * @this {CPUStateX80}
     * @returns {number}
     */
    getPSW()
    {
        return (this.getPS() & CPUDefX80.PS.MASK) | (this.regA << 8);
    }

    /**
     * setPSW(w)
     *
     * @this {CPUStateX80}
     * @param {number} w
     */
    setPSW(w)
    {
        this.setPS((w & CPUDefX80.PS.MASK) | (this.regPS & ~CPUDefX80.PS.MASK));
        this.regA = w >> 8;
    }

    /**
     * addByte(src)
     *
     * @this {CPUStateX80}
     * @param {number} src
     * @returns {number} regA + src
     */
    addByte(src)
    {
        this.resultAuxOverflow = this.regA ^ src;
        return this.resultParitySign = (this.resultZeroCarry = this.regA + src) & 0xff;
    }

    /**
     * addByteCarry(src)
     *
     * @this {CPUStateX80}
     * @param {number} src
     * @returns {number} regA + src + carry
     */
    addByteCarry(src)
    {
        this.resultAuxOverflow = this.regA ^ src;
        return this.resultParitySign = (this.resultZeroCarry = this.regA + src + ((this.resultZeroCarry & 0x100)? 1 : 0)) & 0xff;
    }

    /**
     * andByte(src)
     *
     * Ordinarily, one would expect the Auxiliary Carry flag (AF) to be clear after this operation,
     * but apparently the 8080 will set AF if bit 3 in either operand is set.
     *
     * @this {CPUStateX80}
     * @param {number} src
     * @returns {number} regA & src
     */
    andByte(src)
    {
        this.resultZeroCarry = this.resultParitySign = this.resultAuxOverflow = this.regA & src;
        if ((this.regA | src) & 0x8) this.resultAuxOverflow ^= 0x10;        // set AF by inverting bit 4 in resultAuxOverflow
        return this.resultZeroCarry;
    }

    /**
     * decByte(b)
     *
     * We perform this operation using 8-bit two's complement arithmetic, by negating and then adding
     * the implied src of 1.  This appears to mimic how the 8080 manages the Auxiliary Carry flag (AF).
     *
     * @this {CPUStateX80}
     * @param {number} b
     * @returns {number}
     */
    decByte(b)
    {
        this.resultAuxOverflow = b ^ 0xff;
        b = this.resultParitySign = (b + 0xff) & 0xff;
        this.resultZeroCarry = (this.resultZeroCarry & ~0xff) | b;
        return b;
    }

    /**
     * incByte(b)
     *
     * @this {CPUStateX80}
     * @param {number} b
     * @returns {number}
     */
    incByte(b)
    {
        this.resultAuxOverflow = b;
        b = this.resultParitySign = (b + 1) & 0xff;
        this.resultZeroCarry = (this.resultZeroCarry & ~0xff) | b;
        return b;
    }

    /**
     * orByte(src)
     *
     * @this {CPUStateX80}
     * @param {number} src
     * @returns {number} regA | src
     */
    orByte(src)
    {
        return this.resultParitySign = this.resultZeroCarry = this.resultAuxOverflow = this.regA | src;
    }

    /**
     * subByte(src)
     *
     * We perform this operation using 8-bit two's complement arithmetic, by inverting src, adding
     * src + 1, and then inverting the resulting carry (resultZeroCarry ^ 0x100).  This appears to mimic
     * how the 8080 manages the Auxiliary Carry flag (AF).
     *
     * This function is also used as a cmpByte() function; compare instructions simply ignore the
     * return value.
     *
     * Example: A=66, SUI $10
     *
     * If we created the two's complement of 0x10 by negating it, there would just be one addition:
     *
     *      0110 0110   (0x66)
     *    + 1111 0000   (0xF0)  (ie, -0x10)
     *      ---------
     *    1 0101 0110   (0x56)
     *
     * But in order to mimic the 8080's AF flag, we must perform the two's complement of src in two steps,
     * inverting it before the add, and then incrementing after the add; eg:
     *
     *      0110 0110   (0x66)
     *    + 1110 1111   (0xEF)  (ie, ~0x10)
     *      ---------
     *    1 0101 0101   (0x55)
     *    + 0000 0001   (0x01)
     *      ---------
     *    1 0101 0110   (0x56)
     *
     * @this {CPUStateX80}
     * @param {number} src
     * @returns {number} regA - src
     */
    subByte(src)
    {
        src ^= 0xff;
        this.resultAuxOverflow = this.regA ^ src;
        return this.resultParitySign = (this.resultZeroCarry = (this.regA + src + 1) ^ 0x100) & 0xff;
    }

    /**
     * subByteBorrow(src)
     *
     * We perform this operation using 8-bit two's complement arithmetic, using logic similar to subByte(),
     * but changing the final increment to a conditional increment, because if the Carry flag (CF) is set, then
     * we don't need to perform the increment at all.
     *
     * This mimics the behavior of subByte() when the Carry flag (CF) is clear, and hopefully also mimics how the
     * 8080 manages the Auxiliary Carry flag (AF) when the Carry flag (CF) is set.
     *
     * @this {CPUStateX80}
     * @param {number} src
     * @returns {number} regA - src - carry
     */
    subByteBorrow(src)
    {
        src ^= 0xff;
        this.resultAuxOverflow = this.regA ^ src;
        return this.resultParitySign = (this.resultZeroCarry = (this.regA + src + ((this.resultZeroCarry & 0x100)? 0 : 1)) ^ 0x100) & 0xff;
    }

    /**
     * xorByte(src)
     *
     * @this {CPUStateX80}
     * @param {number} src
     * @returns {number} regA ^ src
     */
    xorByte(src)
    {
        return this.resultParitySign = this.resultZeroCarry = this.resultAuxOverflow = this.regA ^ src;
    }

    /**
     * getByte(addr)
     *
     * @this {CPUStateX80}
     * @param {number} addr is a linear address
     * @returns {number} byte (8-bit) value at that address
     */
    getByte(addr)
    {
        return this.bus.getByte(addr);
    }

    /**
     * getWord(addr)
     *
     * @this {CPUStateX80}
     * @param {number} addr is a linear address
     * @returns {number} word (16-bit) value at that address
     */
    getWord(addr)
    {
        return this.bus.getShort(addr);
    }

    /**
     * setByte(addr, b)
     *
     * @this {CPUStateX80}
     * @param {number} addr is a linear address
     * @param {number} b is the byte (8-bit) value to write (which we truncate to 8 bits; required by opSTOSb)
     */
    setByte(addr, b)
    {
        this.bus.setByte(addr, b);
    }

    /**
     * setWord(addr, w)
     *
     * @this {CPUStateX80}
     * @param {number} addr is a linear address
     * @param {number} w is the word (16-bit) value to write (which we truncate to 16 bits to be safe)
     */
    setWord(addr, w)
    {
        this.bus.setShort(addr, w);
    }

    /**
     * getPCByte()
     *
     * @this {CPUStateX80}
     * @returns {number} byte at the current PC; PC advanced by 1
     */
    getPCByte()
    {
        let b = this.getByte(this.regPC);
        this.setPC(this.regPC + 1);
        return b;
    }

    /**
     * getPCWord()
     *
     * @this {CPUStateX80}
     * @returns {number} word at the current PC; PC advanced by 2
     */
    getPCWord()
    {
        let w = this.getWord(this.regPC);
        this.setPC(this.regPC + 2);
        return w;
    }

    /**
     * popWord()
     *
     * @this {CPUStateX80}
     * @returns {number} word popped from the current SP; SP increased by 2
     */
    popWord()
    {
        let w = this.getWord(this.regSP);
        this.setSP(this.regSP + 2);
        return w;
    }

    /**
     * pushWord(w)
     *
     * @this {CPUStateX80}
     * @param {number} w is the word (16-bit) value to push at current SP; SP decreased by 2
     */
    pushWord(w)
    {
        this.setSP(this.regSP - 2);
        this.setWord(this.regSP, w);
    }

    /**
     * checkINTR()
     *
     * @this {CPUStateX80}
     * @returns {boolean} true if execution may proceed, false if not
     */
    checkINTR()
    {
        /*
         * If the Debugger is single-stepping, this.nStepCycles will always be zero, which we take
         * advantage of here to avoid processing interrupts.  The Debugger will have to issue a "g"
         * command (or "p" command on a call instruction) if you want interrupts to be processed.
         */
        if (this.nStepCycles) {
            if ((this.intFlags & CPUDefX80.INTFLAG.INTR) && this.getIF()) {
                let nLevel;
                for (nLevel = 0; nLevel < 8; nLevel++) {
                    if (this.intFlags & (1 << nLevel)) break;
                }
                this.clearINTR(nLevel);
                this.clearIF();
                this.intFlags &= ~CPUDefX80.INTFLAG.HALT;
                this.aOps[CPUDefX80.OPCODE.RST0 | (nLevel << 3)].call(this);
            }
        }
        if (this.intFlags & CPUDefX80.INTFLAG.HALT) {
            /*
             * As discussed in opHLT(), the CPU is never REALLY halted by a HLT instruction; instead, opHLT()
             * calls requestHALT(), which sets INTFLAG.HALT and signals to stepCPU() that it's free to end the
             * current burst AND that it should not execute any more instructions until checkINTR() indicates
             * that a hardware interrupt has been requested.
             */
            this.endBurst();
            return false;
        }
        return true;
    }

    /**
     * clearINTR(nLevel)
     *
     * Clear the corresponding interrupt level.
     *
     * nLevel can either be a valid interrupt level (0-7), or -1 to clear all pending interrupts
     * (eg, in the event of a system-wide reset).
     *
     * @this {CPUStateX80}
     * @param {number} nLevel (0-7, or -1 for all)
     */
    clearINTR(nLevel)
    {
        let bitsClear = nLevel < 0? 0xff : (1 << nLevel);
        this.intFlags &= ~bitsClear;
    }

    /**
     * requestHALT()
     *
     * @this {CPUStateX80}
     */
    requestHALT()
    {
        this.intFlags |= CPUDefX80.INTFLAG.HALT;
        this.endBurst();
    }

    /**
     * requestINTR(nLevel)
     *
     * Request the corresponding interrupt level.
     *
     * Each interrupt level (0-7) has its own intFlags bit (0-7).  If the Interrupt Flag (IF) is also
     * set, then we know that checkINTR() will want to issue the interrupt, so we end the current burst
     * by setting nStepCycles to zero.  But before we do, we subtract nStepCycles from nBurstCycles,
     * so that the calculation of how many cycles were actually executed on this burst is correct.
     *
     * @this {CPUStateX80}
     * @param {number} nLevel (0-7)
     */
    requestINTR(nLevel)
    {
        this.intFlags |= (1 << nLevel);
        if (this.getIF()) {
            this.endBurst();
        }
    }

    /**
     * updateReg(sReg, nValue, cch)
     *
     * This function helps updateStatus() by massaging the register names and values according to
     * CPU type before passing the call to displayValue(); in the "old days", updateStatus() called
     * displayValue() directly (although then it was called displayReg()).
     *
     * @this {CPUStateX80}
     * @param {string} sReg
     * @param {number} nValue
     * @param {number} [cch] (default is 2 hex digits)
     */
    updateReg(sReg, nValue, cch)
    {
        this.displayValue(sReg, nValue, cch || 2);
    }

    /**
     * updateStatus(fForce)
     *
     * This provides periodic Control Panel updates (eg, a few times per second; see YIELDS_PER_STATUS).
     * this is where we take care of any DOM updates (eg, register values) while the CPU is running.
     *
     * Any high-frequency updates should be performed in updateVideo(), which should avoid DOM updates,
     * since updateVideo() can be called up to 60 times per second.
     *
     * @this {CPUStateX80}
     * @param {boolean} [fForce] (true will display registers even if the CPU is running and "live" registers are not enabled)
     */
    updateStatus(fForce)
    {
        if (this.cLiveRegs) {
            if (fForce || !this.flags.running || this.flags.displayLiveRegs) {
                this.updateReg("A", this.regA);
                this.updateReg("B", this.regB);
                this.updateReg("C", this.regC);
                this.updateReg("BC", this.getBC(), 4);
                this.updateReg("D", this.regD);
                this.updateReg("E", this.regE);
                this.updateReg("DE", this.getDE(), 4);
                this.updateReg("H", this.regH);
                this.updateReg("L", this.regL);
                this.updateReg("HL", this.getHL(), 4);
                this.updateReg("SP", this.getSP(), 4);
                this.updateReg("PC", this.getPC(), 4);
                let regPS = this.getPS();
                this.updateReg("PS", regPS, 4);
                this.updateReg("IF", (regPS & CPUDefX80.PS.IF)? 1 : 0, 1);
                this.updateReg("SF", (regPS & CPUDefX80.PS.SF)? 1 : 0, 1);
                this.updateReg("ZF", (regPS & CPUDefX80.PS.ZF)? 1 : 0, 1);
                this.updateReg("AF", (regPS & CPUDefX80.PS.AF)? 1 : 0, 1);
                this.updateReg("PF", (regPS & CPUDefX80.PS.PF)? 1 : 0, 1);
                this.updateReg("CF", (regPS & CPUDefX80.PS.CF)? 1 : 0, 1);
            }
        }
        let controlSpeed = this.bindings["speed"];
        if (controlSpeed) controlSpeed.textContent = this.getSpeedCurrent();
    }

    /**
     * stepCPU(nMinCycles)
     *
     * NOTE: Single-stepping should not be confused with the Trap flag; single-stepping is a Debugger
     * operation that's completely independent of Trap status.  The CPU can go in and out of Trap mode,
     * in and out of h/w interrupt service routines (ISRs), etc, but from the Debugger's perspective,
     * they're all one continuous stream of instructions that can be stepped or run at will.  Moreover,
     * stepping vs. running should never change the behavior of the simulation.
     *
     * @this {CPUStateX80}
     * @param {number} nMinCycles (0 implies a single-step, and therefore breakpoints should be ignored)
     * @returns {number} of cycles executed; 0 indicates a pre-execution condition (ie, an execution breakpoint
     * was hit), -1 indicates a post-execution condition (eg, a read or write breakpoint was hit), and a positive
     * number indicates successful completion of that many cycles (which should always be >= nMinCycles).
     */
    stepCPU(nMinCycles)
    {
        /*
         * The Debugger uses fComplete to determine if the instruction completed (true) or was interrupted
         * by a breakpoint or some other exceptional condition (false).  NOTE: this does NOT include JavaScript
         * exceptions, which stepCPU() expects the caller to catch using its own exception handler.
         *
         * The CPU relies on the use of stopCPU() rather than fComplete, because the CPU never single-steps
         * (ie, nMinCycles is always some large number), whereas the Debugger does.  And conversely, when the
         * Debugger is single-stepping (even when performing multiple single-steps), fRunning is never set,
         * so stopCPU() would have no effect as far as the Debugger is concerned.
         */
        this.flags.complete = true;

        /*
         * fDebugCheck is true if we need to "check" every instruction with the Debugger.
         */
        let fDebugCheck = this.flags.debugCheck = (DEBUGGER && this.dbg && this.dbg.checksEnabled());

        /*
         * nDebugState is checked only when fDebugCheck is true, and its sole purpose is to tell the first call
         * to checkInstruction() that it can skip breakpoint checks, and that will be true ONLY when fStarting is
         * true OR nMinCycles is zero (the latter means the Debugger is single-stepping).
         *
         * Once we snap fStarting, we clear it, because technically, we've moved beyond "starting" and have
         * officially "started" now.
         */
        let nDebugState = (!nMinCycles)? -1 : (this.flags.starting? 0 : 1);
        this.flags.starting = false;

        /*
         * We move the minimum cycle count to nStepCycles (the number of cycles left to step), so that other
         * functions have the ability to force that number to zero (eg, stopCPU()), and thus we don't have to check
         * any other criteria to determine whether we should continue stepping or not.
         */
        this.nBurstCycles = this.nStepCycles = nMinCycles;

        /*
         * NOTE: If checkINTR() returns false, INTFLAG.HALT must be set, so no instructions should be executed.
         */
        if (this.checkINTR()) {
            do {
                if (DEBUGGER && fDebugCheck) {
                    if (this.dbg.checkInstruction(this.regPC, nDebugState)) {
                        this.stopCPU();
                        break;
                    }
                    nDebugState = 1;
                }
                this.aOps[this.getPCByte()].call(this);

            } while (this.nStepCycles > 0);
        }

        return (this.flags.complete? this.nBurstCycles - this.nStepCycles : (this.flags.complete === undefined? 0 : -1));
    }

    /**
     * CPUStateX80.init()
     *
     * This function operates on every HTML element of class "cpu", extracting the
     * JSON-encoded parameters for the CPUStateX80 constructor from the element's "data-value"
     * attribute, invoking the constructor (which in turn invokes the CPU constructor)
     * to create a CPUStateX80 component, and then binding any associated HTML controls to the
     * new component.
     */
    static init()
    {
        let aeCPUs = Component.getElementsByClass(APPCLASS, "cpu");
        for (let iCPU = 0; iCPU < aeCPUs.length; iCPU++) {
            let eCPU = aeCPUs[iCPU];
            let parmsCPU = Component.getComponentParms(eCPU);
            let cpu = new CPUStateX80(parmsCPU);
            Component.bindComponentControls(cpu, eCPU, APPCLASS);
        }
    }
}

/*
 * Initialize every CPU module on the page
 */
WebLib.onInit(CPUStateX80.init);

/**
 * @copyright https://www.pcjs.org/machines/pcx80/modules/v2/cpuops.js (C) 2012-2025 Jeff Parsons
 */

/**
 * op=0x00 (NOP)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opNOP = function()
{
    this.nStepCycles -= 4;
};

/**
 * op=0x01 (LXI B,d16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opLXIB = function()
{
    this.setBC(this.getPCWord());
    this.nStepCycles -= 10;
};

/**
 * op=0x02 (STAX B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSTAXB = function()
{
    this.setByte(this.getBC(), this.regA);
    this.nStepCycles -= 7;
};

/**
 * op=0x03 (INX B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opINXB = function()
{
    this.setBC(this.getBC() + 1);
    this.nStepCycles -= 5;
};

/**
 * op=0x04 (INR B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opINRB = function()
{
    this.regB = this.incByte(this.regB);
    this.nStepCycles -= 5;
};

/**
 * op=0x05 (DCR B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDCRB = function()
{
    this.regB = this.decByte(this.regB);
    this.nStepCycles -= 5;
};

/**
 * op=0x06 (MVI B,d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMVIB = function()
{
    this.regB = this.getPCByte();
    this.nStepCycles -= 7;
};

/**
 * op=0x07 (RLC)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRLC = function()
{
    let carry = this.regA << 1;
    this.regA = (carry & 0xff) | (carry >> 8);
    this.updateCF(carry & 0x100);
    this.nStepCycles -= 4;
};

/**
 * op=0x09 (DAD B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDADB = function()
{
    let w;
    this.setHL(w = this.getHL() + this.getBC());
    this.updateCF((w >> 8) & 0x100);
    this.nStepCycles -= 10;
};

/**
 * op=0x0A (LDAX B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opLDAXB = function()
{
    this.regA = this.getByte(this.getBC());
    this.nStepCycles -= 7;
};

/**
 * op=0x0B (DCX B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDCXB = function()
{
    this.setBC(this.getBC() - 1);
    this.nStepCycles -= 5;
};

/**
 * op=0x0C (INR C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opINRC = function()
{
    this.regC = this.incByte(this.regC);
    this.nStepCycles -= 5;
};

/**
 * op=0x0D (DCR C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDCRC = function()
{
    this.regC = this.decByte(this.regC);
    this.nStepCycles -= 5;
};

/**
 * op=0x0E (MVI C,d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMVIC = function()
{
    this.regC = this.getPCByte();
    this.nStepCycles -= 7;
};

/**
 * op=0x0F (RRC)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRRC = function()
{
    let carry = (this.regA << 8) & 0x100;
    this.regA = (carry | this.regA) >> 1;
    this.updateCF(carry);
    this.nStepCycles -= 4;
};

/**
 * op=0x11 (LXI D,d16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opLXID = function()
{
    this.setDE(this.getPCWord());
    this.nStepCycles -= 10;
};

/**
 * op=0x12 (STAX D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSTAXD = function()
{
    this.setByte(this.getDE(), this.regA);
    this.nStepCycles -= 7;
};

/**
 * op=0x13 (INX D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opINXD = function()
{
    this.setDE(this.getDE() + 1);
    this.nStepCycles -= 5;
};

/**
 * op=0x14 (INR D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opINRD = function()
{
    this.regD = this.incByte(this.regD);
    this.nStepCycles -= 5;
};

/**
 * op=0x15 (DCR D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDCRD = function()
{
    this.regD = this.decByte(this.regD);
    this.nStepCycles -= 5;
};

/**
 * op=0x16 (MVI D,d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMVID = function()
{
    this.regD = this.getPCByte();
    this.nStepCycles -= 7;
};

/**
 * op=0x17 (RAL)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRAL = function()
{
    let carry = this.regA << 1;
    this.regA = (carry & 0xff) | this.getCF();
    this.updateCF(carry & 0x100);
    this.nStepCycles -= 4;
};

/**
 * op=0x19 (DAD D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDADD = function()
{
    let w;
    this.setHL(w = this.getHL() + this.getDE());
    this.updateCF((w >> 8) & 0x100);
    this.nStepCycles -= 10;
};

/**
 * op=0x1A (LDAX D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opLDAXD = function()
{
    this.regA = this.getByte(this.getDE());
    this.nStepCycles -= 7;
};

/**
 * op=0x1B (DCX D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDCXD = function()
{
    this.setDE(this.getDE() - 1);
    this.nStepCycles -= 5;
};

/**
 * op=0x1C (INR E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opINRE = function()
{
    this.regE = this.incByte(this.regE);
    this.nStepCycles -= 5;
};

/**
 * op=0x1D (DCR E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDCRE = function()
{
    this.regE = this.decByte(this.regE);
    this.nStepCycles -= 5;
};

/**
 * op=0x1E (MVI E,d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMVIE = function()
{
    this.regE = this.getPCByte();
    this.nStepCycles -= 7;
};

/**
 * op=0x1F (RAR)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRAR = function()
{
    let carry = (this.regA << 8);
    this.regA = ((this.getCF() << 8) | this.regA) >> 1;
    this.updateCF(carry & 0x100);
    this.nStepCycles -= 4;
};

/**
 * op=0x21 (LXI H,d16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opLXIH = function()
{
    this.setHL(this.getPCWord());
    this.nStepCycles -= 10;
};

/**
 * op=0x22 (SHLD a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSHLD = function()
{
    this.setWord(this.getPCWord(), this.getHL());
    this.nStepCycles -= 16;
};

/**
 * op=0x23 (INX H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opINXH = function()
{
    this.setHL(this.getHL() + 1);
    this.nStepCycles -= 5;
};

/**
 * op=0x24 (INR H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opINRH = function()
{
    this.regH = this.incByte(this.regH);
    this.nStepCycles -= 5;
};

/**
 * op=0x25 (DCR H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDCRH = function()
{
    this.regH = this.decByte(this.regH);
    this.nStepCycles -= 5;
};

/**
 * op=0x26 (MVI H,d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMVIH = function()
{
    this.regH = this.getPCByte();
    this.nStepCycles -= 7;
};

/**
 * op=0x27 (DAA)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDAA = function()
{
    let src = 0;
    let CF = this.getCF();
    let AF = this.getAF();
    if (AF || (this.regA & 0x0F) > 9) {
        src |= 0x06;
    }
    if (CF || this.regA >= 0x9A) {
        src |= 0x60;
        CF = CPUDefX80.PS.CF;
    }
    this.regA = this.addByte(src);
    this.updateCF(CF? 0x100 : 0);
    this.nStepCycles -= 4;
};

/**
 * op=0x29 (DAD H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDADH = function()
{
    let w;
    this.setHL(w = this.getHL() + this.getHL());
    this.updateCF((w >> 8) & 0x100);
    this.nStepCycles -= 10;
};

/**
 * op=0x2A (LHLD a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opLHLD = function()
{
    this.setHL(this.getWord(this.getPCWord()));
    this.nStepCycles -= 16;
};

/**
 * op=0x2B (DCX H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDCXH = function()
{
    this.setHL(this.getHL() - 1);
    this.nStepCycles -= 5;
};

/**
 * op=0x2C (INR L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opINRL = function()
{
    this.regL = this.incByte(this.regL);
    this.nStepCycles -= 5;
};

/**
 * op=0x2D (DCR L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDCRL = function()
{
    this.regL = this.decByte(this.regL);
    this.nStepCycles -= 5;
};

/**
 * op=0x2E (MVI L,d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMVIL = function()
{
    this.regL = this.getPCByte();
    this.nStepCycles -= 7;
};

/**
 * op=0x2F (CMA)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCMA = function()
{
    this.regA = ~this.regA & 0xff;
    this.nStepCycles -= 4;
};

/**
 * op=0x31 (LXI SP,d16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opLXISP = function()
{
    this.setSP(this.getPCWord());
    this.nStepCycles -= 10;
};

/**
 * op=0x32 (STA a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSTA = function()
{
    this.setByte(this.getPCWord(), this.regA);
    this.nStepCycles -= 13;
};

/**
 * op=0x33 (INX SP)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opINXSP = function()
{
    this.setSP(this.getSP() + 1);
    this.nStepCycles -= 5;
};

/**
 * op=0x34 (INR M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opINRM = function()
{
    let addr = this.getHL();
    this.setByte(addr, this.incByte(this.getByte(addr)));
    this.nStepCycles -= 10;
};

/**
 * op=0x35 (DCR M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDCRM = function()
{
    let addr = this.getHL();
    this.setByte(addr, this.decByte(this.getByte(addr)));
    this.nStepCycles -= 10;
};

/**
 * op=0x36 (MVI M,d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMVIM = function()
{
    this.setByte(this.getHL(), this.getPCByte());
    this.nStepCycles -= 10;
};

/**
 * op=0x37 (STC)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSTC = function()
{
    this.setCF();
    this.nStepCycles -= 4;
};

/**
 * op=0x39 (DAD SP)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDADSP = function()
{
    let w;
    this.setHL(w = this.getHL() + this.getSP());
    this.updateCF((w >> 8) & 0x100);
    this.nStepCycles -= 10;
};

/**
 * op=0x3A (LDA a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opLDA = function()
{
    this.regA = this.getByte(this.getPCWord());
    this.nStepCycles -= 13;
};

/**
 * op=0x3B (DCX SP)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDCXSP = function()
{
    this.setSP(this.getSP() - 1);
    this.nStepCycles -= 5;
};

/**
 * op=0x3C (INR A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opINRA = function()
{
    this.regA = this.incByte(this.regA);
    this.nStepCycles -= 5;
};

/**
 * op=0x3D (DCR A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDCRA = function()
{
    this.regA = this.decByte(this.regA);
    this.nStepCycles -= 5;
};

/**
 * op=0x3E (MVI A,d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMVIA = function()
{
    this.regA = this.getPCByte();
    this.nStepCycles -= 7;
};

/**
 * op=0x3F (CMC)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCMC = function()
{
    this.updateCF(this.getCF()? 0 : 0x100);
    this.nStepCycles -= 4;
};

/**
 * op=0x40 (MOV B,B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVBB = function()
{
    this.nStepCycles -= 5;
};

/**
 * op=0x41 (MOV B,C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVBC = function()
{
    this.regB = this.regC;
    this.nStepCycles -= 5;
};

/**
 * op=0x42 (MOV B,D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVBD = function()
{
    this.regB = this.regD;
    this.nStepCycles -= 5;
};

/**
 * op=0x43 (MOV B,E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVBE = function()
{
    this.regB = this.regE;
    this.nStepCycles -= 5;
};

/**
 * op=0x44 (MOV B,H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVBH = function()
{
    this.regB = this.regH;
    this.nStepCycles -= 5;
};

/**
 * op=0x45 (MOV B,L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVBL = function()
{
    this.regB = this.regL;
    this.nStepCycles -= 5;
};

/**
 * op=0x46 (MOV B,M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVBM = function()
{
    this.regB = this.getByte(this.getHL());
    this.nStepCycles -= 7;
};

/**
 * op=0x47 (MOV B,A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVBA = function()
{
    this.regB = this.regA;
    this.nStepCycles -= 5;
};

/**
 * op=0x48 (MOV C,B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVCB = function()
{
    this.regC = this.regB;
    this.nStepCycles -= 5;
};

/**
 * op=0x49 (MOV C,C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVCC = function()
{
    this.nStepCycles -= 5;
};

/**
 * op=0x4A (MOV C,D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVCD = function()
{
    this.regC = this.regD;
    this.nStepCycles -= 5;
};

/**
 * op=0x4B (MOV C,E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVCE = function()
{
    this.regC = this.regE;
    this.nStepCycles -= 5;
};

/**
 * op=0x4C (MOV C,H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVCH = function()
{
    this.regC = this.regH;
    this.nStepCycles -= 5;
};

/**
 * op=0x4D (MOV C,L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVCL = function()
{
    this.regC = this.regL;
    this.nStepCycles -= 5;
};

/**
 * op=0x4E (MOV C,M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVCM = function()
{
    this.regC = this.getByte(this.getHL());
    this.nStepCycles -= 7;
};

/**
 * op=0x4F (MOV C,A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVCA = function()
{
    this.regC = this.regA;
    this.nStepCycles -= 5;
};

/**
 * op=0x50 (MOV D,B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVDB = function()
{
    this.regD = this.regB;
    this.nStepCycles -= 5;
};

/**
 * op=0x51 (MOV D,C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVDC = function()
{
    this.regD = this.regC;
    this.nStepCycles -= 5;
};

/**
 * op=0x52 (MOV D,D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVDD = function()
{
    this.nStepCycles -= 5;
};

/**
 * op=0x53 (MOV D,E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVDE = function()
{
    this.regD = this.regE;
    this.nStepCycles -= 5;
};

/**
 * op=0x54 (MOV D,H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVDH = function()
{
    this.regD = this.regH;
    this.nStepCycles -= 5;
};

/**
 * op=0x55 (MOV D,L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVDL = function()
{
    this.regD = this.regL;
    this.nStepCycles -= 5;
};

/**
 * op=0x56 (MOV D,M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVDM = function()
{
    this.regD = this.getByte(this.getHL());
    this.nStepCycles -= 7;
};

/**
 * op=0x57 (MOV D,A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVDA = function()
{
    this.regD = this.regA;
    this.nStepCycles -= 5;
};

/**
 * op=0x58 (MOV E,B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVEB = function()
{
    this.regE = this.regB;
    this.nStepCycles -= 5;
};

/**
 * op=0x59 (MOV E,C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVEC = function()
{
    this.regE = this.regC;
    this.nStepCycles -= 5;
};

/**
 * op=0x5A (MOV E,D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVED = function()
{
    this.regE = this.regD;
    this.nStepCycles -= 5;
};

/**
 * op=0x5B (MOV E,E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVEE = function()
{
    this.nStepCycles -= 5;
};

/**
 * op=0x5C (MOV E,H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVEH = function()
{
    this.regE = this.regH;
    this.nStepCycles -= 5;
};

/**
 * op=0x5D (MOV E,L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVEL = function()
{
    this.regE = this.regL;
    this.nStepCycles -= 5;
};

/**
 * op=0x5E (MOV E,M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVEM = function()
{
    this.regE = this.getByte(this.getHL());
    this.nStepCycles -= 7;
};

/**
 * op=0x5F (MOV E,A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVEA = function()
{
    this.regE = this.regA;
    this.nStepCycles -= 5;
};

/**
 * op=0x60 (MOV H,B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVHB = function()
{
    this.regH = this.regB;
    this.nStepCycles -= 5;
};

/**
 * op=0x61 (MOV H,C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVHC = function()
{
    this.regH = this.regC;
    this.nStepCycles -= 5;
};

/**
 * op=0x62 (MOV H,D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVHD = function()
{
    this.regH = this.regD;
    this.nStepCycles -= 5;
};

/**
 * op=0x63 (MOV H,E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVHE = function()
{
    this.regH = this.regE;
    this.nStepCycles -= 5;
};

/**
 * op=0x64 (MOV H,H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVHH = function()
{
    this.nStepCycles -= 5;
};

/**
 * op=0x65 (MOV H,L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVHL = function()
{
    this.regH = this.regL;
    this.nStepCycles -= 5;
};

/**
 * op=0x66 (MOV H,M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVHM = function()
{
    this.regH = this.getByte(this.getHL());
    this.nStepCycles -= 7;
};

/**
 * op=0x67 (MOV H,A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVHA = function()
{
    this.regH = this.regA;
    this.nStepCycles -= 5;
};

/**
 * op=0x68 (MOV L,B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVLB = function()
{
    this.regL = this.regB;
    this.nStepCycles -= 5;
};

/**
 * op=0x69 (MOV L,C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVLC = function()
{
    this.regL = this.regC;
    this.nStepCycles -= 5;
};

/**
 * op=0x6A (MOV L,D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVLD = function()
{
    this.regL = this.regD;
    this.nStepCycles -= 5;
};

/**
 * op=0x6B (MOV L,E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVLE = function()
{
    this.regL = this.regE;
    this.nStepCycles -= 5;
};

/**
 * op=0x6C (MOV L,H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVLH = function()
{
    this.regL = this.regH;
    this.nStepCycles -= 5;
};

/**
 * op=0x6D (MOV L,L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVLL = function()
{
    this.nStepCycles -= 5;
};

/**
 * op=0x6E (MOV L,M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVLM = function()
{
    this.regL = this.getByte(this.getHL());
    this.nStepCycles -= 7;
};

/**
 * op=0x6F (MOV L,A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVLA = function()
{
    this.regL = this.regA;
    this.nStepCycles -= 5;
};

/**
 * op=0x70 (MOV M,B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVMB = function()
{
    this.setByte(this.getHL(), this.regB);
    this.nStepCycles -= 7;
};

/**
 * op=0x71 (MOV M,C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVMC = function()
{
    this.setByte(this.getHL(), this.regC);
    this.nStepCycles -= 7;
};

/**
 * op=0x72 (MOV M,D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVMD = function()
{
    this.setByte(this.getHL(), this.regD);
    this.nStepCycles -= 7;
};

/**
 * op=0x73 (MOV M,E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVME = function()
{
    this.setByte(this.getHL(), this.regE);
    this.nStepCycles -= 7;
};

/**
 * op=0x74 (MOV M,H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVMH = function()
{
    this.setByte(this.getHL(), this.regH);
    this.nStepCycles -= 7;
};

/**
 * op=0x75 (MOV M,L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVML = function()
{
    this.setByte(this.getHL(), this.regL);
    this.nStepCycles -= 7;
};

/**
 * op=0x76 (HLT)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opHLT = function()
{
    let addr = this.getPC() - 1;

    /*
     * If any HLT check functions are installed, call them, and if any of them return true, then
     * immediately stop HLT processing.
     */
    if (this.afnHalt.length) {
        for (let i = 0; i < this.afnHalt.length; i++) {
            if (this.afnHalt[i](addr)) return;
        }
    }

    this.nStepCycles -= 7;

    /*
     * The CPU is never REALLY halted by a HLT instruction; instead, we call requestHALT(), which
     * signals to stepCPU() that it should end the current burst AND that it should not execute any
     * more instructions until checkINTR() indicates a hardware interrupt has been requested.
     */
    this.requestHALT();

    /*
     * If a Debugger is present and the HALT message category is enabled, then we REALLY halt the CPU,
     * on the theory that whoever's using the Debugger would like to see HLTs.
     */
    if (DEBUGGER && this.dbg && this.messageEnabled(MESSAGE.HALT)) {
        this.setPC(addr);               // this is purely for the Debugger's benefit, to show the HLT
        this.dbg.stopCPU();
        return;
    }

    /*
     * We also REALLY halt the machine if interrupts have been disabled, since that means it's dead
     * in the water (we have no NMI generation mechanism at the moment).
     */
    if (!this.getIF()) {
        if (DEBUGGER && this.dbg) this.setPC(addr);
        this.stopCPU();
    }
};

/**
 * op=0x77 (MOV M,A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVMA = function()
{
    this.setByte(this.getHL(), this.regA);
    this.nStepCycles -= 7;
};

/**
 * op=0x78 (MOV A,B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVAB = function()
{
    this.regA = this.regB;
    this.nStepCycles -= 5;
};

/**
 * op=0x79 (MOV A,C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVAC = function()
{
    this.regA = this.regC;
    this.nStepCycles -= 5;
};

/**
 * op=0x7A (MOV A,D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVAD = function()
{
    this.regA = this.regD;
    this.nStepCycles -= 5;
};

/**
 * op=0x7B (MOV A,E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVAE = function()
{
    this.regA = this.regE;
    this.nStepCycles -= 5;
};

/**
 * op=0x7C (MOV A,H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVAH = function()
{
    this.regA = this.regH;
    this.nStepCycles -= 5;
};

/**
 * op=0x7D (MOV A,L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVAL = function()
{
    this.regA = this.regL;
    this.nStepCycles -= 5;
};

/**
 * op=0x7E (MOV A,M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVAM = function()
{
    this.regA = this.getByte(this.getHL());
    this.nStepCycles -= 7;
};

/**
 * op=0x7F (MOV A,A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVAA = function()
{
    this.nStepCycles -= 5;
};

/**
 * op=0x80 (ADD B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADDB = function()
{
    this.regA = this.addByte(this.regB);
    this.nStepCycles -= 4;
};

/**
 * op=0x81 (ADD C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADDC = function()
{
    this.regA = this.addByte(this.regC);
    this.nStepCycles -= 4;
};

/**
 * op=0x82 (ADD D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADDD = function()
{
    this.regA = this.addByte(this.regD);
    this.nStepCycles -= 4;
};

/**
 * op=0x83 (ADD E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADDE = function()
{
    this.regA = this.addByte(this.regE);
    this.nStepCycles -= 4;
};

/**
 * op=0x84 (ADD H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADDH = function()
{
    this.regA = this.addByte(this.regH);
    this.nStepCycles -= 4;
};

/**
 * op=0x85 (ADD L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADDL = function()
{
    this.regA = this.addByte(this.regL);
    this.nStepCycles -= 4;
};

/**
 * op=0x86 (ADD M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADDM = function()
{
    this.regA = this.addByte(this.getByte(this.getHL()));
    this.nStepCycles -= 7;
};

/**
 * op=0x87 (ADD A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADDA = function()
{
    this.regA = this.addByte(this.regA);
    this.nStepCycles -= 4;
};

/**
 * op=0x88 (ADC B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADCB = function()
{
    this.regA = this.addByteCarry(this.regB);
    this.nStepCycles -= 4;
};

/**
 * op=0x89 (ADC C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADCC = function()
{
    this.regA = this.addByteCarry(this.regC);
    this.nStepCycles -= 4;
};

/**
 * op=0x8A (ADC D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADCD = function()
{
    this.regA = this.addByteCarry(this.regD);
    this.nStepCycles -= 4;
};

/**
 * op=0x8B (ADC E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADCE = function()
{
    this.regA = this.addByteCarry(this.regE);
    this.nStepCycles -= 4;
};

/**
 * op=0x8C (ADC H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADCH = function()
{
    this.regA = this.addByteCarry(this.regH);
    this.nStepCycles -= 4;
};

/**
 * op=0x8D (ADC L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADCL = function()
{
    this.regA = this.addByteCarry(this.regL);
    this.nStepCycles -= 4;
};

/**
 * op=0x8E (ADC M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADCM = function()
{
    this.regA = this.addByteCarry(this.getByte(this.getHL()));
    this.nStepCycles -= 7;
};

/**
 * op=0x8F (ADC A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADCA = function()
{
    this.regA = this.addByteCarry(this.regA);
    this.nStepCycles -= 4;
};

/**
 * op=0x90 (SUB B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSUBB = function()
{
    this.regA = this.subByte(this.regB);
    this.nStepCycles -= 4;
};

/**
 * op=0x91 (SUB C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSUBC = function()
{
    this.regA = this.subByte(this.regC);
    this.nStepCycles -= 4;
};

/**
 * op=0x92 (SUB D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSUBD = function()
{
    this.regA = this.subByte(this.regD);
    this.nStepCycles -= 4;
};

/**
 * op=0x93 (SUB E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSUBE = function()
{
    this.regA = this.subByte(this.regE);
    this.nStepCycles -= 4;
};

/**
 * op=0x94 (SUB H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSUBH = function()
{
    this.regA = this.subByte(this.regH);
    this.nStepCycles -= 4;
};

/**
 * op=0x95 (SUB L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSUBL = function()
{
    this.regA = this.subByte(this.regL);
    this.nStepCycles -= 4;
};

/**
 * op=0x96 (SUB M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSUBM = function()
{
    this.regA = this.subByte(this.getByte(this.getHL()));
    this.nStepCycles -= 7;
};

/**
 * op=0x97 (SUB A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSUBA = function()
{
    this.regA = this.subByte(this.regA);
    this.nStepCycles -= 4;
};

/**
 * op=0x98 (SBB B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSBBB = function()
{
    this.regA = this.subByteBorrow(this.regB);
    this.nStepCycles -= 4;
};

/**
 * op=0x99 (SBB C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSBBC = function()
{
    this.regA = this.subByteBorrow(this.regC);
    this.nStepCycles -= 4;
};

/**
 * op=0x9A (SBB D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSBBD = function()
{
    this.regA = this.subByteBorrow(this.regD);
    this.nStepCycles -= 4;
};

/**
 * op=0x9B (SBB E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSBBE = function()
{
    this.regA = this.subByteBorrow(this.regE);
    this.nStepCycles -= 4;
};

/**
 * op=0x9C (SBB H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSBBH = function()
{
    this.regA = this.subByteBorrow(this.regH);
    this.nStepCycles -= 4;
};

/**
 * op=0x9D (SBB L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSBBL = function()
{
    this.regA = this.subByteBorrow(this.regL);
    this.nStepCycles -= 4;
};

/**
 * op=0x9E (SBB M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSBBM = function()
{
    this.regA = this.subByteBorrow(this.getByte(this.getHL()));
    this.nStepCycles -= 7;
};

/**
 * op=0x9F (SBB A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSBBA = function()
{
    this.regA = this.subByteBorrow(this.regA);
    this.nStepCycles -= 4;
};

/**
 * op=0xA0 (ANA B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opANAB = function()
{
    this.regA = this.andByte(this.regB);
    this.nStepCycles -= 4;
};

/**
 * op=0xA1 (ANA C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opANAC = function()
{
    this.regA = this.andByte(this.regC);
    this.nStepCycles -= 4;
};

/**
 * op=0xA2 (ANA D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opANAD = function()
{
    this.regA = this.andByte(this.regD);
    this.nStepCycles -= 4;
};

/**
 * op=0xA3 (ANA E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opANAE = function()
{
    this.regA = this.andByte(this.regE);
    this.nStepCycles -= 4;
};

/**
 * op=0xA4 (ANA H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opANAH = function()
{
    this.regA = this.andByte(this.regH);
    this.nStepCycles -= 4;
};

/**
 * op=0xA5 (ANA L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opANAL = function()
{
    this.regA = this.andByte(this.regL);
    this.nStepCycles -= 4;
};

/**
 * op=0xA6 (ANA M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opANAM = function()
{
    this.regA = this.andByte(this.getByte(this.getHL()));
    this.nStepCycles -= 7;
};

/**
 * op=0xA7 (ANA A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opANAA = function()
{
    this.regA = this.andByte(this.regA);
    this.nStepCycles -= 4;
};

/**
 * op=0xA8 (XRA B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opXRAB = function()
{
    this.regA = this.xorByte(this.regB);
    this.nStepCycles -= 4;
};

/**
 * op=0xA9 (XRA C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opXRAC = function()
{
    this.regA = this.xorByte(this.regC);
    this.nStepCycles -= 4;
};

/**
 * op=0xAA (XRA D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opXRAD = function()
{
    this.regA = this.xorByte(this.regD);
    this.nStepCycles -= 4;
};

/**
 * op=0xAB (XRA E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opXRAE = function()
{
    this.regA = this.xorByte(this.regE);
    this.nStepCycles -= 4;
};

/**
 * op=0xAC (XRA H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opXRAH = function()
{
    this.regA = this.xorByte(this.regH);
    this.nStepCycles -= 4;
};

/**
 * op=0xAD (XRA L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opXRAL = function()
{
    this.regA = this.xorByte(this.regL);
    this.nStepCycles -= 4;
};

/**
 * op=0xAE (XRA M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opXRAM = function()
{
    this.regA = this.xorByte(this.getByte(this.getHL()));
    this.nStepCycles -= 7;
};

/**
 * op=0xAF (XRA A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opXRAA = function()
{
    this.regA = this.xorByte(this.regA);
    this.nStepCycles -= 4;
};

/**
 * op=0xB0 (ORA B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opORAB = function()
{
    this.regA = this.orByte(this.regB);
    this.nStepCycles -= 4;
};

/**
 * op=0xB1 (ORA C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opORAC = function()
{
    this.regA = this.orByte(this.regC);
    this.nStepCycles -= 4;
};

/**
 * op=0xB2 (ORA D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opORAD = function()
{
    this.regA = this.orByte(this.regD);
    this.nStepCycles -= 4;
};

/**
 * op=0xB3 (ORA E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opORAE = function()
{
    this.regA = this.orByte(this.regE);
    this.nStepCycles -= 4;
};

/**
 * op=0xB4 (ORA H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opORAH = function()
{
    this.regA = this.orByte(this.regH);
    this.nStepCycles -= 4;
};

/**
 * op=0xB5 (ORA L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opORAL = function()
{
    this.regA = this.orByte(this.regL);
    this.nStepCycles -= 4;
};

/**
 * op=0xB6 (ORA M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opORAM = function()
{
    this.regA = this.orByte(this.getByte(this.getHL()));
    this.nStepCycles -= 7;
};

/**
 * op=0xB7 (ORA A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opORAA = function()
{
    this.regA = this.orByte(this.regA);
    this.nStepCycles -= 4;
};

/**
 * op=0xB8 (CMP B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCMPB = function()
{
    this.subByte(this.regB);
    this.nStepCycles -= 4;
};

/**
 * op=0xB9 (CMP C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCMPC = function()
{
    this.subByte(this.regC);
    this.nStepCycles -= 4;
};

/**
 * op=0xBA (CMP D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCMPD = function()
{
    this.subByte(this.regD);
    this.nStepCycles -= 4;
};

/**
 * op=0xBB (CMP E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCMPE = function()
{
    this.subByte(this.regE);
    this.nStepCycles -= 4;
};

/**
 * op=0xBC (CMP H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCMPH = function()
{
    this.subByte(this.regH);
    this.nStepCycles -= 4;
};

/**
 * op=0xBD (CMP L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCMPL = function()
{
    this.subByte(this.regL);
    this.nStepCycles -= 4;
};

/**
 * op=0xBE (CMP M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCMPM = function()
{
    this.subByte(this.getByte(this.getHL()));
    this.nStepCycles -= 7;
};

/**
 * op=0xBF (CMP A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCMPA = function()
{
    this.subByte(this.regA);
    this.nStepCycles -= 4;
};

/**
 * op=0xC0 (RNZ)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRNZ = function()
{
    if (!this.getZF()) {
        this.setPC(this.popWord());
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 5;
};

/**
 * op=0xC1 (POP B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opPOPB = function()
{
    this.setBC(this.popWord());
    this.nStepCycles -= 10;
};

/**
 * op=0xC2 (JNZ a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opJNZ = function()
{
    let w = this.getPCWord();
    if (!this.getZF()) this.setPC(w);
    this.nStepCycles -= 10;
};

/**
 * op=0xC3 (JMP a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opJMP = function()
{
    this.setPC(this.getPCWord());
    this.nStepCycles -= 10;
};

/**
 * op=0xC4 (CNZ a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCNZ = function()
{
    let w = this.getPCWord();
    if (!this.getZF()) {
        this.pushWord(this.getPC());
        this.setPC(w);
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 11;
};

/**
 * op=0xC5 (PUSH B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opPUSHB = function()
{
    this.pushWord(this.getBC());
    this.nStepCycles -= 11;
};

/**
 * op=0xC6 (ADI d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADI = function()
{
    this.regA = this.addByte(this.getPCByte());
    this.nStepCycles -= 7;
};

/**
 * op=0xC7 (RST 0)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRST0 = function()
{
    this.pushWord(this.getPC());
    this.setPC(0);
    this.nStepCycles -= 11;
};

/**
 * op=0xC8 (RZ)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRZ = function()
{
    if (this.getZF()) {
        this.setPC(this.popWord());
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 5;
};

/**
 * op=0xC9 (RET)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRET = function()
{
    this.setPC(this.popWord());
    this.nStepCycles -= 10;
};

/**
 * op=0xCA (JZ a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opJZ = function()
{
    let w = this.getPCWord();
    if (this.getZF()) this.setPC(w);
    this.nStepCycles -= 10;
};

/**
 * op=0xCC (CZ a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCZ = function()
{
    let w = this.getPCWord();
    if (this.getZF()) {
        this.pushWord(this.getPC());
        this.setPC(w);
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 11;
};

/**
 * op=0xCD (CALL a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCALL = function()
{
    let w = this.getPCWord();
    this.pushWord(this.getPC());
    this.setPC(w);
    this.nStepCycles -= 17;
};

/**
 * op=0xCE (ACI d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opACI = function()
{
    this.regA = this.addByteCarry(this.getPCByte());
    this.nStepCycles -= 7;
};

/**
 * op=0xCF (RST 1)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRST1 = function()
{
    this.pushWord(this.getPC());
    this.setPC(0x08);
    this.nStepCycles -= 11;
};

/**
 * op=0xD0 (RNC)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRNC = function()
{
    if (!this.getCF()) {
        this.setPC(this.popWord());
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 5;
};

/**
 * op=0xD1 (POP D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opPOPD = function()
{
    this.setDE(this.popWord());
    this.nStepCycles -= 10;
};

/**
 * op=0xD2 (JNC a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opJNC = function()
{
    let w = this.getPCWord();
    if (!this.getCF()) this.setPC(w);
    this.nStepCycles -= 10;
};

/**
 * op=0xD3 (OUT d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opOUT = function()
{
    let port = this.getPCByte();
    this.bus.checkPortOutputNotify(port, 1, this.regA, this.offPC(-2));
    this.nStepCycles -= 10;
};

/**
 * op=0xD4 (CNC a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCNC = function()
{
    let w = this.getPCWord();
    if (!this.getCF()) {
        this.pushWord(this.getPC());
        this.setPC(w);
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 11;
};

/**
 * op=0xD5 (PUSH D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opPUSHD = function()
{
    this.pushWord(this.getDE());
    this.nStepCycles -= 11;
};

/**
 * op=0xD6 (SUI d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSUI = function()
{
    this.regA = this.subByte(this.getPCByte());
    this.nStepCycles -= 7;
};

/**
 * op=0xD7 (RST 2)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRST2 = function()
{
    this.pushWord(this.getPC());
    this.setPC(0x10);
    this.nStepCycles -= 11;
};

/**
 * op=0xD8 (RC)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRC = function()
{
    if (this.getCF()) {
        this.setPC(this.popWord());
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 5;
};

/**
 * op=0xDA (JC a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opJC = function()
{
    let w = this.getPCWord();
    if (this.getCF()) this.setPC(w);
    this.nStepCycles -= 10;
};

/**
 * op=0xDB (IN d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opIN = function()
{
    let port = this.getPCByte();
    this.regA = this.bus.checkPortInputNotify(port, 1, this.offPC(-2)) & 0xff;
    this.nStepCycles -= 10;
};

/**
 * op=0xDC (CC a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCC = function()
{
    let w = this.getPCWord();
    if (this.getCF()) {
        this.pushWord(this.getPC());
        this.setPC(w);
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 11;
};

/**
 * op=0xDE (SBI d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSBI = function()
{
    this.regA = this.subByteBorrow(this.getPCByte());
    this.nStepCycles -= 7;
};

/**
 * op=0xDF (RST 3)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRST3 = function()
{
    this.pushWord(this.getPC());
    this.setPC(0x18);
    this.nStepCycles -= 11;
};

/**
 * op=0xE0 (RPO)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRPO = function()
{
    if (!this.getPF()) {
        this.setPC(this.popWord());
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 5;
};

/**
 * op=0xE1 (POP H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opPOPH = function()
{
    this.setHL(this.popWord());
    this.nStepCycles -= 10;
};

/**
 * op=0xE2 (JPO a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opJPO = function()
{
    let w = this.getPCWord();
    if (!this.getPF()) this.setPC(w);
    this.nStepCycles -= 10;
};

/**
 * op=0xE3 (XTHL)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opXTHL = function()
{
    let w = this.popWord();
    this.pushWord(this.getHL());
    this.setHL(w);
    this.nStepCycles -= 18;
};

/**
 * op=0xE4 (CPO a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCPO = function()
{
    let w = this.getPCWord();
    if (!this.getPF()) {
        this.pushWord(this.getPC());
        this.setPC(w);
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 11;
};

/**
 * op=0xE5 (PUSH H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opPUSHH = function()
{
    this.pushWord(this.getHL());
    this.nStepCycles -= 11;
};

/**
 * op=0xE6 (ANI d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opANI = function()
{
    this.regA = this.andByte(this.getPCByte());
    this.nStepCycles -= 7;
};

/**
 * op=0xE7 (RST 4)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRST4 = function()
{
    this.pushWord(this.getPC());
    this.setPC(0x20);
    this.nStepCycles -= 11;
};

/**
 * op=0xE8 (RPE)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRPE = function()
{
    if (this.getPF()) {
        this.setPC(this.popWord());
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 5;
};

/**
 * op=0xE9 (PCHL)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opPCHL = function()
{
    this.setPC(this.getHL());
    this.nStepCycles -= 5;
};

/**
 * op=0xEA (JPE a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opJPE = function()
{
    let w = this.getPCWord();
    if (this.getPF()) this.setPC(w);
    this.nStepCycles -= 10;
};

/**
 * op=0xEB (XCHG)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opXCHG = function()
{
    let w = this.getHL();
    this.setHL(this.getDE());
    this.setDE(w);
    this.nStepCycles -= 5;
};

/**
 * op=0xEC (CPE a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCPE = function()
{
    let w = this.getPCWord();
    if (this.getPF()) {
        this.pushWord(this.getPC());
        this.setPC(w);
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 11;
};

/**
 * op=0xEE (XRI d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opXRI = function()
{
    this.regA = this.xorByte(this.getPCByte());
    this.nStepCycles -= 7;
};

/**
 * op=0xEF (RST 5)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRST5 = function()
{
    this.pushWord(this.getPC());
    this.setPC(0x28);
    this.nStepCycles -= 11;
};

/**
 * op=0xF0 (RP)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRP = function()
{
    if (!this.getSF()) {
        this.setPC(this.popWord());
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 5;
};

/**
 * op=0xF1 (POP PSW)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opPOPSW = function()
{
    this.setPSW(this.popWord());
    this.nStepCycles -= 10;
};

/**
 * op=0xF2 (JP a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opJP = function()
{
    let w = this.getPCWord();
    if (!this.getSF()) this.setPC(w);
    this.nStepCycles -= 10;
};

/**
 * op=0xF3 (DI)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDI = function()
{
    this.clearIF();
    this.nStepCycles -= 4;
};

/**
 * op=0xF4 (CP a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCP = function()
{
    let w = this.getPCWord();
    if (!this.getSF()) {
        this.pushWord(this.getPC());
        this.setPC(w);
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 11;
};

/**
 * op=0xF5 (PUSH PSW)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opPUPSW = function()
{
    this.pushWord(this.getPSW());
    this.nStepCycles -= 11;
};

/**
 * op=0xF6 (ORI d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opORI = function()
{
    this.regA = this.orByte(this.getPCByte());
    this.nStepCycles -= 7;
};

/**
 * op=0xF7 (RST 6)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRST6 = function()
{
    this.pushWord(this.getPC());
    this.setPC(0x30);
    this.nStepCycles -= 11;
};

/**
 * op=0xF8 (RM)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRM = function()
{
    if (this.getSF()) {
        this.setPC(this.popWord());
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 5;
};

/**
 * op=0xF9 (SPHL)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSPHL = function()
{
    this.setSP(this.getHL());
    this.nStepCycles -= 5;
};

/**
 * op=0xFA (JM a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opJM = function()
{
    let w = this.getPCWord();
    if (this.getSF()) this.setPC(w);
    this.nStepCycles -= 10;
};

/**
 * op=0xFB (EI)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opEI = function()
{
    this.setIF();
    this.nStepCycles -= 4;
    this.checkINTR();
};

/**
 * op=0xFC (CM a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCM = function()
{
    let w = this.getPCWord();
    if (this.getSF()) {
        this.pushWord(this.getPC());
        this.setPC(w);
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 11;
};

/**
 * op=0xFE (CPI d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCPI = function()
{
    this.subByte(this.getPCByte());
    this.nStepCycles -= 7;
};

/**
 * op=0xFF (RST 7)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRST7 = function()
{
    this.pushWord(this.getPC());
    this.setPC(0x38);
    this.nStepCycles -= 11;
};

/*
 * This 256-entry array of opcode functions is at the heart of the CPU engine: stepCPU(n).
 *
 * It might be worth trying a switch() statement instead, to see how the performance compares,
 * but I suspect that would vary quite a bit across JavaScript engines; for now, I'm putting my
 * money on array lookup.
 */
CPUDefX80.aOpsX80 = [
    /* 0x00-0x03 */ CPUDefX80.opNOP,   CPUDefX80.opLXIB,  CPUDefX80.opSTAXB, CPUDefX80.opINXB,
    /* 0x04-0x07 */ CPUDefX80.opINRB,  CPUDefX80.opDCRB,  CPUDefX80.opMVIB,  CPUDefX80.opRLC,
    /* 0x08-0x0B */ CPUDefX80.opNOP,   CPUDefX80.opDADB,  CPUDefX80.opLDAXB, CPUDefX80.opDCXB,
    /* 0x0C-0x0F */ CPUDefX80.opINRC,  CPUDefX80.opDCRC,  CPUDefX80.opMVIC,  CPUDefX80.opRRC,
    /* 0x10-0x13 */ CPUDefX80.opNOP,   CPUDefX80.opLXID,  CPUDefX80.opSTAXD, CPUDefX80.opINXD,
    /* 0x14-0x17 */ CPUDefX80.opINRD,  CPUDefX80.opDCRD,  CPUDefX80.opMVID,  CPUDefX80.opRAL,
    /* 0x18-0x1B */ CPUDefX80.opNOP,   CPUDefX80.opDADD,  CPUDefX80.opLDAXD, CPUDefX80.opDCXD,
    /* 0x1C-0x1F */ CPUDefX80.opINRE,  CPUDefX80.opDCRE,  CPUDefX80.opMVIE,  CPUDefX80.opRAR,
    /* 0x20-0x23 */ CPUDefX80.opNOP,   CPUDefX80.opLXIH,  CPUDefX80.opSHLD,  CPUDefX80.opINXH,
    /* 0x24-0x27 */ CPUDefX80.opINRH,  CPUDefX80.opDCRH,  CPUDefX80.opMVIH,  CPUDefX80.opDAA,
    /* 0x28-0x2B */ CPUDefX80.opNOP,   CPUDefX80.opDADH,  CPUDefX80.opLHLD,  CPUDefX80.opDCXH,
    /* 0x2C-0x2F */ CPUDefX80.opINRL,  CPUDefX80.opDCRL,  CPUDefX80.opMVIL,  CPUDefX80.opCMA,
    /* 0x30-0x33 */ CPUDefX80.opNOP,   CPUDefX80.opLXISP, CPUDefX80.opSTA,   CPUDefX80.opINXSP,
    /* 0x34-0x37 */ CPUDefX80.opINRM,  CPUDefX80.opDCRM,  CPUDefX80.opMVIM,  CPUDefX80.opSTC,
    /* 0x38-0x3B */ CPUDefX80.opNOP,   CPUDefX80.opDADSP, CPUDefX80.opLDA,   CPUDefX80.opDCXSP,
    /* 0x3C-0x3F */ CPUDefX80.opINRA,  CPUDefX80.opDCRA,  CPUDefX80.opMVIA,  CPUDefX80.opCMC,
    /* 0x40-0x43 */ CPUDefX80.opMOVBB, CPUDefX80.opMOVBC, CPUDefX80.opMOVBD, CPUDefX80.opMOVBE,
    /* 0x44-0x47 */ CPUDefX80.opMOVBH, CPUDefX80.opMOVBL, CPUDefX80.opMOVBM, CPUDefX80.opMOVBA,
    /* 0x48-0x4B */ CPUDefX80.opMOVCB, CPUDefX80.opMOVCC, CPUDefX80.opMOVCD, CPUDefX80.opMOVCE,
    /* 0x4C-0x4F */ CPUDefX80.opMOVCH, CPUDefX80.opMOVCL, CPUDefX80.opMOVCM, CPUDefX80.opMOVCA,
    /* 0x50-0x53 */ CPUDefX80.opMOVDB, CPUDefX80.opMOVDC, CPUDefX80.opMOVDD, CPUDefX80.opMOVDE,
    /* 0x54-0x57 */ CPUDefX80.opMOVDH, CPUDefX80.opMOVDL, CPUDefX80.opMOVDM, CPUDefX80.opMOVDA,
    /* 0x58-0x5B */ CPUDefX80.opMOVEB, CPUDefX80.opMOVEC, CPUDefX80.opMOVED, CPUDefX80.opMOVEE,
    /* 0x5C-0x5F */ CPUDefX80.opMOVEH, CPUDefX80.opMOVEL, CPUDefX80.opMOVEM, CPUDefX80.opMOVEA,
    /* 0x60-0x63 */ CPUDefX80.opMOVHB, CPUDefX80.opMOVHC, CPUDefX80.opMOVHD, CPUDefX80.opMOVHE,
    /* 0x64-0x67 */ CPUDefX80.opMOVHH, CPUDefX80.opMOVHL, CPUDefX80.opMOVHM, CPUDefX80.opMOVHA,
    /* 0x68-0x6B */ CPUDefX80.opMOVLB, CPUDefX80.opMOVLC, CPUDefX80.opMOVLD, CPUDefX80.opMOVLE,
    /* 0x6C-0x6F */ CPUDefX80.opMOVLH, CPUDefX80.opMOVLL, CPUDefX80.opMOVLM, CPUDefX80.opMOVLA,
    /* 0x70-0x73 */ CPUDefX80.opMOVMB, CPUDefX80.opMOVMC, CPUDefX80.opMOVMD, CPUDefX80.opMOVME,
    /* 0x74-0x77 */ CPUDefX80.opMOVMH, CPUDefX80.opMOVML, CPUDefX80.opHLT,   CPUDefX80.opMOVMA,
    /* 0x78-0x7B */ CPUDefX80.opMOVAB, CPUDefX80.opMOVAC, CPUDefX80.opMOVAD, CPUDefX80.opMOVAE,
    /* 0x7C-0x7F */ CPUDefX80.opMOVAH, CPUDefX80.opMOVAL, CPUDefX80.opMOVAM, CPUDefX80.opMOVAA,
    /* 0x80-0x83 */ CPUDefX80.opADDB,  CPUDefX80.opADDC,  CPUDefX80.opADDD,  CPUDefX80.opADDE,
    /* 0x84-0x87 */ CPUDefX80.opADDH,  CPUDefX80.opADDL,  CPUDefX80.opADDM,  CPUDefX80.opADDA,
    /* 0x88-0x8B */ CPUDefX80.opADCB,  CPUDefX80.opADCC,  CPUDefX80.opADCD,  CPUDefX80.opADCE,
    /* 0x8C-0x8F */ CPUDefX80.opADCH,  CPUDefX80.opADCL,  CPUDefX80.opADCM,  CPUDefX80.opADCA,
    /* 0x90-0x93 */ CPUDefX80.opSUBB,  CPUDefX80.opSUBC,  CPUDefX80.opSUBD,  CPUDefX80.opSUBE,
    /* 0x94-0x97 */ CPUDefX80.opSUBH,  CPUDefX80.opSUBL,  CPUDefX80.opSUBM,  CPUDefX80.opSUBA,
    /* 0x98-0x9B */ CPUDefX80.opSBBB,  CPUDefX80.opSBBC,  CPUDefX80.opSBBD,  CPUDefX80.opSBBE,
    /* 0x9C-0x9F */ CPUDefX80.opSBBH,  CPUDefX80.opSBBL,  CPUDefX80.opSBBM,  CPUDefX80.opSBBA,
    /* 0xA0-0xA3 */ CPUDefX80.opANAB,  CPUDefX80.opANAC,  CPUDefX80.opANAD,  CPUDefX80.opANAE,
    /* 0xA4-0xA7 */ CPUDefX80.opANAH,  CPUDefX80.opANAL,  CPUDefX80.opANAM,  CPUDefX80.opANAA,
    /* 0xA8-0xAB */ CPUDefX80.opXRAB,  CPUDefX80.opXRAC,  CPUDefX80.opXRAD,  CPUDefX80.opXRAE,
    /* 0xAC-0xAF */ CPUDefX80.opXRAH,  CPUDefX80.opXRAL,  CPUDefX80.opXRAM,  CPUDefX80.opXRAA,
    /* 0xB0-0xB3 */ CPUDefX80.opORAB,  CPUDefX80.opORAC,  CPUDefX80.opORAD,  CPUDefX80.opORAE,
    /* 0xB4-0xB7 */ CPUDefX80.opORAH,  CPUDefX80.opORAL,  CPUDefX80.opORAM,  CPUDefX80.opORAA,
    /* 0xB8-0xBB */ CPUDefX80.opCMPB,  CPUDefX80.opCMPC,  CPUDefX80.opCMPD,  CPUDefX80.opCMPE,
    /* 0xBC-0xBF */ CPUDefX80.opCMPH,  CPUDefX80.opCMPL,  CPUDefX80.opCMPM,  CPUDefX80.opCMPA,
    /* 0xC0-0xC3 */ CPUDefX80.opRNZ,   CPUDefX80.opPOPB,  CPUDefX80.opJNZ,   CPUDefX80.opJMP,
    /* 0xC4-0xC7 */ CPUDefX80.opCNZ,   CPUDefX80.opPUSHB, CPUDefX80.opADI,   CPUDefX80.opRST0,
    /* 0xC8-0xCB */ CPUDefX80.opRZ,    CPUDefX80.opRET,   CPUDefX80.opJZ,    CPUDefX80.opJMP,
    /* 0xCC-0xCF */ CPUDefX80.opCZ,    CPUDefX80.opCALL,  CPUDefX80.opACI,   CPUDefX80.opRST1,
    /* 0xD0-0xD3 */ CPUDefX80.opRNC,   CPUDefX80.opPOPD,  CPUDefX80.opJNC,   CPUDefX80.opOUT,
    /* 0xD4-0xD7 */ CPUDefX80.opCNC,   CPUDefX80.opPUSHD, CPUDefX80.opSUI,   CPUDefX80.opRST2,
    /* 0xD8-0xDB */ CPUDefX80.opRC,    CPUDefX80.opRET,   CPUDefX80.opJC,    CPUDefX80.opIN,
    /* 0xDC-0xDF */ CPUDefX80.opCC,    CPUDefX80.opCALL,  CPUDefX80.opSBI,   CPUDefX80.opRST3,
    /* 0xE0-0xE3 */ CPUDefX80.opRPO,   CPUDefX80.opPOPH,  CPUDefX80.opJPO,   CPUDefX80.opXTHL,
    /* 0xE4-0xE7 */ CPUDefX80.opCPO,   CPUDefX80.opPUSHH, CPUDefX80.opANI,   CPUDefX80.opRST4,
    /* 0xE8-0xEB */ CPUDefX80.opRPE,   CPUDefX80.opPCHL,  CPUDefX80.opJPE,   CPUDefX80.opXCHG,
    /* 0xEC-0xEF */ CPUDefX80.opCPE,   CPUDefX80.opCALL,  CPUDefX80.opXRI,   CPUDefX80.opRST5,
    /* 0xF0-0xF3 */ CPUDefX80.opRP,    CPUDefX80.opPOPSW, CPUDefX80.opJP,    CPUDefX80.opDI,
    /* 0xF4-0xF7 */ CPUDefX80.opCP,    CPUDefX80.opPUPSW, CPUDefX80.opORI,   CPUDefX80.opRST6,
    /* 0xF8-0xFB */ CPUDefX80.opRM,    CPUDefX80.opSPHL,  CPUDefX80.opJM,    CPUDefX80.opEI,
    /* 0xFC-0xFF */ CPUDefX80.opCM,    CPUDefX80.opCALL,  CPUDefX80.opCPI,   CPUDefX80.opRST7
];

/**
 * @copyright https://www.pcjs.org/machines/pcx80/modules/v2/chipset.js (C) 2012-2025 Jeff Parsons
 */

/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @class ChipSetX80
 * @unrestricted
 */
class ChipSetX80 extends Component {
    /**
     * ChipSetX80(parmsChipSet)
     *
     * The ChipSetX80 component has the following component-specific (parmsChipSet) properties:
     *
     *      model:  eg, "SI1978" (should be a member of ChipSetX80.MODELS)
     *      swDIP:  eg, "00000000", where swDIP[0] is DIP0, swDIP[1] is DIP1, etc.
     *
     * @this {ChipSetX80}
     * @param {Object} parmsChipSet
     */
    constructor(parmsChipSet)
    {
        super("ChipSet", parmsChipSet, MESSAGE.CHIPSET);

        let model = parmsChipSet['model'];

        if (model && !ChipSetX80.MODELS[model]) {
            Component.printf(MESSAGE.NOTICE, "Unrecognized ChipSet model: %s\n", model);
        }

        this.config = ChipSetX80.MODELS[model] || {};

        this.bSwitches = this.parseDIPSwitches(parmsChipSet['swDIP']);

        /*
         * Here, I'm finally getting around to trying the WebLib Audio API.  Fortunately, based on what little I know about
         * sound generation, using the API to make the same noises as the IBM PC speaker seems straightforward.
         *
         * To start, we create an audio context, unless the 'sound' parameter has been explicitly set to false.
         *
         * From:
         *
         *      http://developer.apple.com/library/safari/#documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/PlayingandSynthesizingSounds/PlayingandSynthesizingSounds.html
         *
         * "Similar to how HTML5 canvas requires a context on which lines and curves are drawn, WebLib Audio requires an audio context
         *  on which sounds are played and manipulated. This context will be the parent object of further audio objects to come....
         *  Your audio context is typically created when your page initializes and should be long-lived. You can play multiple sounds
         *  coming from multiple sources within the same context, so it is unnecessary to create more than one audio context per page."
         */
        this.fSpeaker = false;
        if (parmsChipSet['sound']) {
            this.classAudio = this.contextAudio = null;
            this.classAudio = globals.window['AudioContext'] || globals.window['webkitAudioContext'];
            if (this.classAudio) {
                this.contextAudio = new this.classAudio();
            } else {
                this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "AudioContext not available\n");
            }
        }

        this.setReady();
    }

    /**
     * parseDIPSwitches(sBits, bDefault)
     *
     * @this {ChipSetX80}
     * @param {string} sBits describing switch settings
     * @param {number} [bDefault]
     * @returns {number|undefined}
     */
    parseDIPSwitches(sBits, bDefault)
    {
        let b = bDefault;
        if (sBits) {
            /*
             * NOTE: We can't use parseInt() with a base of 2, because both bit order and bit sense are reversed.
             */
            b = 0;
            let bit = 0x1;
            for (let i = 0; i < sBits.length; i++) {
                if (sBits.charAt(i) == "0") b |= bit;
                bit <<= 1;
            }
        }
        return b;
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * @this {ChipSetX80}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea", "canvas")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "sw1")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        return false;
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {ChipSetX80}
     * @param {ComputerX80} cmp
     * @param {BusX80} bus
     * @param {CPUStateX80} cpu
     * @param {DebuggerX80} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.bus = bus;
        this.cpu = cpu;
        this.dbg = dbg;
        this.cmp = cmp;
        this.kbd = /** @type {KeyboardX80} */ (cmp.getMachineComponent("Keyboard"));
        this.serial = /** @type {SerialPortX80} */ (cmp.getMachineComponent("SerialPort"));
        this.video = /** @type {VideoX80} */ (cmp.getMachineComponent("Video"));
        bus.addPortInputTable(this, this.config.INPUT_PORTS);
        bus.addPortOutputTable(this, this.config.OUTPUT_PORTS);

        if (DEBUGGER) {
            if (dbg) {
                let chipset = this;
                dbg.messageDump(MESSAGE.NVR, function onDumpNVR() {
                    chipset.dumpNVR();
                });
            }
        }
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {ChipSetX80}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) {
            if (!data) {
                this.reset();
            } else {
                if (!this.restore(data)) return false;
            }
        }
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {ChipSetX80}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
     */
    powerDown(fSave, fShutdown)
    {
        return fSave? this.save() : true;
    }

    /**
     * dumpNVR()
     *
     * @this {ChipSetX80}
     */
    dumpNVR()
    {
        if (DEBUGGER) {
            let sDump = "";
            for (let iWord = 0; iWord < this.aNVRWords.length; iWord++) {
                if (sDump) {
                    sDump += (iWord && (iWord % 10)? ", " : ",\n");
                }
                sDump += StrLib.toHexWord(this.aNVRWords[iWord]);
            }
            this.dbg.printf("%s\n", sDump);
        }
    }

    /**
     * reset()
     *
     * @this {ChipSetX80}
     */
    reset()
    {
        if (this.config.INIT && !this.restore(this.config.INIT)) {
            this.printf(MESSAGE.NOTICE, "reset error\n");
        }
    }

    /**
     * save()
     *
     * This implements save support for the ChipSet component.
     *
     * @this {ChipSetX80}
     * @returns {Object}
     */
    save()
    {
        let state = new State(this);
        switch(this.config.VERSION) {
        case ChipSetX80.JUKU.VERSION:
            state.set(0, [
                this.bPPI1A, this.bPPI1B, this.bPPI1C, this.bPPI1Ctrl,
                this.bPPI2A, this.bPPI2B, this.bPPI2C, this.bPPI2Ctrl
            ]);
            break;
        case ChipSetX80.SI1978.VERSION:
            state.set(0, [this.bStatus0, this.bStatus1, this.bStatus2, this.wShiftData, this.bShiftCount, this.bSound1, this.bSound2]);
            break;
        case ChipSetX80.VT100.VERSION:
            state.set(0, [this.bBrightness, this.bFlags]);
            state.set(1, [this.bDC011Cols, this.bDC011Rate]);
            state.set(2, [this.bDC012Scroll, this.bDC012Blink, this.bDC012Reverse, this.bDC012Attr]);
            state.set(3, [this.dNVRAddr, this.wNVRData, this.bNVRLatch, this.bNVROut, this.aNVRWords]);
            break;
        }
        return state.data();
    }

    /**
     * restore(data)
     *
     * This implements restore support for the ChipSet component.
     *
     * @this {ChipSetX80}
     * @param {Object} data
     * @returns {boolean} true if successful, false if failure
     */
    restore(data)
    {
        if (data && data[0] && data[0].length) {
            switch(this.config.VERSION) {
            case ChipSetX80.JUKU.VERSION:
                [
                    this.bPPI1A, this.bPPI1B, this.bPPI1C, this.bPPI1Ctrl,
                    this.bPPI2A, this.bPPI2B, this.bPPI2C, this.bPPI2Ctrl
                ] = data[0];
                return true;
            case ChipSetX80.SI1978.VERSION:
                [this.bStatus0, this.bStatus1, this.bStatus2, this.wShiftData, this.bShiftCount, this.bSound1, this.bSound2] = data[0];
                return true;
            case ChipSetX80.VT100.VERSION:
                [this.bBrightness, this.bFlags] = data[0];
                [this.bDC011Cols, this.bDC011Rate] = data[1];
                [this.bDC012Scroll, this.bDC012Blink, this.bDC012Reverse, this.bDC012Attr] = data[2];
                [
                    this.dNVRAddr,      // 20-bit address
                    this.wNVRData,      // 14-bit word
                    this.bNVRLatch,     // 1 byte
                    this.bNVROut,       // 1 bit
                    this.aNVRWords      // 100 14-bit words
                ] = data[3];
                return true;
            }
        }
        return false;
    }

    /**
     * start()
     *
     * Notification from the CPU that it's starting.
     *
     * @this {ChipSetX80}
     */
    start()
    {
        /*
         * Currently, all we (may) do with this notification is allow the speaker to make noise.
         */
    }

    /**
     * stop()
     *
     * Notification from the CPU that it's stopping.
     *
     * @this {ChipSetX80}
     */
    stop()
    {
        /*
         * Currently, all we (may) do with this notification is prevent the speaker from making noise.
         */
    }

    /**
     * updateStatus0(bit, fSet)
     *
     * @this {ChipSetX80}
     * @param {number} bit
     * @param {boolean} fSet
     */
    updateStatus0(bit, fSet)
    {
        this.bStatus0 &= ~bit;
        if (fSet) this.bStatus0 |= bit;
    }

    /**
     * updateStatus1(bit, fSet)
     *
     * @this {ChipSetX80}
     * @param {number} bit
     * @param {boolean} fSet
     */
    updateStatus1(bit, fSet)
    {
        this.bStatus1 &= ~bit;
        if (fSet) this.bStatus1 |= bit;
    }

    /**
     * updateStatus2(bit, fSet)
     *
     * @this {ChipSetX80}
     * @param {number} bit
     * @param {boolean} fSet
     */
    updateStatus2(bit, fSet)
    {
        this.bStatus2 &= ~bit;
        if (fSet) this.bStatus2 |= bit;
    }

    /**
     * outJukuPPI1A(port, b, addrFrom)
     *
     * @this {ChipSetX80}
     * @param {number} port (0x04)
     * @param {number} b
     * @param {number} [addrFrom] (not defined if the Debugger is trying to write the specified port)
     */
    outJukuPPI1A(port, b, addrFrom)
    {
        this.printIO(port, b, addrFrom, "PPI1A", undefined, true);
        this.bPPI1A = b;
    }

    /**
     * inJukuPPI1B(port, addrFrom)
     *
     * @this {ChipSetX80}
     * @param {number} port (0x05)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    inJukuPPI1B(port, addrFrom)
    {
        let b = this.bPPI1B;
        this.printIO(port, undefined, addrFrom, "PPI1B", b, true);
        return b;
    }

    /**
     * outJukuPPI1C(port, b, addrFrom)
     *
     * @this {ChipSetX80}
     * @param {number} port (0x06)
     * @param {number} b
     * @param {number} [addrFrom] (not defined if the Debugger is trying to write the specified port)
     */
    outJukuPPI1C(port, b, addrFrom)
    {
        this.printIO(port, b, addrFrom, "PPI1C", undefined, true);
        this.bPPI1C = b;
    }

    /**
     * outJukuPPI1Ctrl(port, b, addrFrom)
     *
     * Initially, the Juku writes 0x82 to this port, which (I believe) configures PPI1 ports A and C for output and B for input.
     *
     * @this {ChipSetX80}
     * @param {number} port (0x07)
     * @param {number} b
     * @param {number} [addrFrom] (not defined if the Debugger is trying to write the specified port)
     */
    outJukuPPI1Ctrl(port, b, addrFrom)
    {
        this.printIO(port, b, addrFrom, "PPI1CTRL", undefined, true);
        this.bPPI1Ctrl = b;
    }

    /**
     * outJukuPPI2Ctrl(port, b, addrFrom)
     *
     * Initially, the Juku writes 0x9b to this port, which (I believe) configures all PPI2 ports (A, B, and C) for input.
     *
     * @this {ChipSetX80}
     * @param {number} port (0x0f)
     * @param {number} b
     * @param {number} [addrFrom] (not defined if the Debugger is trying to write the specified port)
     */
    outJukuPPI2Ctrl(port, b, addrFrom)
    {
        this.printIO(port, b, addrFrom, "PPI2CTRL", undefined, true);
        this.bPPI2Ctrl = b;
    }

    /**
     * inSIStatus0(port, addrFrom)
     *
     * @this {ChipSetX80}
     * @param {number} port (0x00)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    inSIStatus0(port, addrFrom)
    {
        let b = this.bStatus0;
        this.printIO(port, undefined, addrFrom, "STATUS0", b, true);
        return b;
    }

    /**
     * inSIStatus1(port, addrFrom)
     *
     * @this {ChipSetX80}
     * @param {number} port (0x01)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    inSIStatus1(port, addrFrom)
    {
        let b = this.bStatus1;
        this.printIO(port, undefined, addrFrom, "STATUS1", b, true);
        return b;
    }

    /**
     * inSIStatus2(port, addrFrom)
     *
     * @this {ChipSetX80}
     * @param {number} port (0x02)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    inSIStatus2(port, addrFrom)
    {
        let b = this.bStatus2;
        this.printIO(port, undefined, addrFrom, "STATUS2", b, true);
        return b;
    }

    /**
     * inSIShiftResult(port, addrFrom)
     *
     * @this {ChipSetX80}
     * @param {number} port (0x03)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    inSIShiftResult(port, addrFrom)
    {
        let b = (this.wShiftData >> (8 - this.bShiftCount)) & 0xff;
        this.printIO(port, undefined, addrFrom, "SHIFT.RESULT", b, true);
        return b;
    }

    /**
     * outSIShiftCount(port, b, addrFrom)
     *
     * @this {ChipSetX80}
     * @param {number} port (0x02)
     * @param {number} b
     * @param {number} [addrFrom] (not defined if the Debugger is trying to write the specified port)
     */
    outSIShiftCount(port, b, addrFrom)
    {
        this.printIO(port, b, addrFrom, "SHIFT.COUNT", undefined, true);
        this.bShiftCount = b;
    }

    /**
     * outSISound1(port, b, addrFrom)
     *
     * @this {ChipSetX80}
     * @param {number} port (0x03)
     * @param {number} b
     * @param {number} [addrFrom] (not defined if the Debugger is trying to write the specified port)
     */
    outSISound1(port, b, addrFrom)
    {
        this.printIO(port, b, addrFrom, "SOUND1", undefined, true);
        this.bSound1 = b;
    }

    /**
     * outSIShiftData(port, b, addrFrom)
     *
     * @this {ChipSetX80}
     * @param {number} port (0x04)
     * @param {number} b
     * @param {number} [addrFrom] (not defined if the Debugger is trying to write the specified port)
     */
    outSIShiftData(port, b, addrFrom)
    {
        this.printIO(port, b, addrFrom, "SHIFT.DATA", undefined, true);
        this.wShiftData = (b << 8) | (this.wShiftData >> 8);
    }

    /**
     * outSISound2(port, b, addrFrom)
     *
     * @this {ChipSetX80}
     * @param {number} port (0x05)
     * @param {number} b
     * @param {number} [addrFrom] (not defined if the Debugger is trying to write the specified port)
     */
    outSISound2(port, b, addrFrom)
    {
        this.printIO(port, b, addrFrom, "SOUND2", undefined, true);
        this.bSound2 = b;
    }

    /**
     * outSIWatchdog(port, b, addrFrom)
     *
     * @this {ChipSetX80}
     * @param {number} port (0x06)
     * @param {number} b
     * @param {number} [addrFrom] (not defined if the Debugger is trying to write the specified port)
     */
    outSIWatchdog(port, b, addrFrom)
    {
        this.printIO(port, b, addrFrom, "WATCHDOG", undefined, true);
    }

    /**
     * getVT100LBA(iBit)
     *
     * Returns the state of the requested (simulated) LBA bit.
     *
     * NOTE: This is currently only used to obtain LBA7, which we approximate with the slightly faster approach
     * of masking bit 6 of the CPU cycle count (see the DC011 discussion above).  This will result in a shorter LBA7
     * period than if we divided the cycle count by 88, but a shorter LBA7 period is probably helpful in terms of
     * overall performance.
     *
     * @param {number} iBit
     * @returns {number}
     */
    getVT100LBA(iBit)
    {
        return (this.cpu.getCycles() & (1 << (iBit - 1))) << 1;
    }

    /**
     * getNVRAddr()
     *
     * @returns {number}
     */
    getNVRAddr()
    {
        let i;
        let tens = 0, ones = 0;
        let addr = ~this.dNVRAddr;
        for (i = 0; i < 10; i++) {
            if (addr & 0x1) tens = 9-i;
            addr >>= 1;
        }
        for (i = 0; i < 10; i++) {
            if (addr & 0x1) ones = 9-i;
            addr >>= 1;
        }
        addr = tens*10 + ones;

        return addr;
    }

    /**
     * doNVRCommand()
     */
    doNVRCommand()
    {
        let addr, data;
        let bit = this.bNVRLatch & 0x1;
        let bCmd = (this.bNVRLatch >> 1) & 0x7;

        switch(bCmd) {
        case ChipSetX80.VT100.NVR.CMD.STANDBY:
            break;

        case ChipSetX80.VT100.NVR.CMD.ACCEPT_ADDR:
            this.dNVRAddr = (this.dNVRAddr << 1) | bit;
            break;

        case ChipSetX80.VT100.NVR.CMD.ERASE:
            addr = this.getNVRAddr();
            this.aNVRWords[addr] = ChipSetX80.VT100.NVR.WORDMASK;
            this.printf("doNVRCommand(): erase data at addr %#06x\n", addr);
            break;

        case ChipSetX80.VT100.NVR.CMD.ACCEPT_DATA:
            this.wNVRData = (this.wNVRData << 1) | bit;
            break;

        case ChipSetX80.VT100.NVR.CMD.WRITE:
            addr = this.getNVRAddr();
            data = this.wNVRData & ChipSetX80.VT100.NVR.WORDMASK;
            this.aNVRWords[addr] = data;
            this.printf("doNVRCommand(): write data %#06x to addr %#06x\n", data, addr);
            break;

        case ChipSetX80.VT100.NVR.CMD.READ:
            addr = this.getNVRAddr();
            data = this.aNVRWords[addr];
            /*
             * If we don't explicitly initialize aNVRWords[], pretend any uninitialized words contains WORDMASK.
             */
            if (data == null) data = ChipSetX80.VT100.NVR.WORDMASK;
            this.wNVRData = data;
            this.printf("doNVRCommand():  read data %#06x from addr %#06x\n", data, addr);
            break;

        case ChipSetX80.VT100.NVR.CMD.SHIFT_OUT:
            this.wNVRData <<= 1;
            /*
             * Since WORDMASK is 0x3fff, this will mask the shifted data with 0x4000, which is the bit we want to isolate.
             */
            this.bNVROut = this.wNVRData & (ChipSetX80.VT100.NVR.WORDMASK + 1);
            break;

        default:
            this.printf("doNVRCommand(): unrecognized command %#04x\n", bCmd);
            break;
        }
    }

    /**
     * inVT100Flags(port, addrFrom)
     *
     * @this {ChipSetX80}
     * @param {number} port (0x42)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    inVT100Flags(port, addrFrom)
    {
        let b = this.bFlags;

        /*
         * The NVR_CLK bit is driven by LBA7 (ie, bit 7 from Line Buffer Address generation); see the DC011 discussion above.
         */
        b &= ~ChipSetX80.VT100.FLAGS.NVR_CLK;
        if (this.getVT100LBA(7)) {
            b |= ChipSetX80.VT100.FLAGS.NVR_CLK;
            if (b != this.bFlags) {
                this.doNVRCommand();
            }
        }

        b &= ~ChipSetX80.VT100.FLAGS.NVR_DATA;
        if (this.bNVROut) {
            b |= ChipSetX80.VT100.FLAGS.NVR_DATA;
        }

        b &= ~ChipSetX80.VT100.FLAGS.KBD_XMIT;
        if (this.kbd && this.kbd.isVT100TransmitterReady()) {
            b |= ChipSetX80.VT100.FLAGS.KBD_XMIT;
        }

        b &= ~ChipSetX80.VT100.FLAGS.UART_XMIT;
        if (this.serial && this.serial.isTransmitterReady()) {
            b |= ChipSetX80.VT100.FLAGS.UART_XMIT;
        }

        this.bFlags = b;
        this.printIO(port, undefined, addrFrom, "FLAGS", b);
        return b;
    }

    /**
     * outVT100Brightness(port, b, addrFrom)
     *
     * @this {ChipSetX80}
     * @param {number} port (0x42)
     * @param {number} b
     * @param {number} [addrFrom] (not defined if the Debugger is trying to write the specified port)
     */
    outVT100Brightness(port, b, addrFrom)
    {
        this.printIO(port, b, addrFrom, "BRIGHTNESS");
        this.bBrightness = b;
    }

    /**
     * outVT100NVRLatch(port, b, addrFrom)
     *
     * @this {ChipSetX80}
     * @param {number} port (0x62)
     * @param {number} b
     * @param {number} [addrFrom] (not defined if the Debugger is trying to write the specified port)
     */
    outVT100NVRLatch(port, b, addrFrom)
    {
        this.printIO(port, b, addrFrom, "NVR.LATCH");
        this.bNVRLatch = b;
    }

    /**
     * outVT100DC012(port, b, addrFrom)
     *
     * TODO: Consider whether we should disable any interrupts (eg, vertical retrace) until
     * this port is initialized at runtime.
     *
     * @this {ChipSetX80}
     * @param {number} port (0xA2)
     * @param {number} b
     * @param {number} [addrFrom] (not defined if the Debugger is trying to write the specified port)
     */
    outVT100DC012(port, b, addrFrom)
    {
        this.printIO(port, b, addrFrom, "DC012");

        let bOpt = b & 0x3;
        let bCmd = (b >> 2) & 0x3;
        switch(bCmd) {
        case 0x0:
            this.bDC012Scroll = (this.bDC012Scroll & ~0x3) | bOpt;
            break;
        case 0x1:
            this.bDC012Scroll = (this.bDC012Scroll & ~0xC) | (bOpt << 2);
            if (this.video) this.video.updateScrollOffset(this.bDC012Scroll);
            break;
        case 0x2:
            switch(bOpt) {
            case 0x0:
                this.bDC012Blink = ~this.bDC012Blink;
                break;
            case 0x1:
                // TODO: Clear vertical frequency interrupt?
                break;
            case 0x2:
            case 0x3:
                this.bDC012Reverse = 0x3 - bOpt;
                break;
            }
            break;
        case 0x3:
            this.bDC012Attr = bOpt;
            break;
        }
    }

    /**
     * outVT100DC011(port, b, addrFrom)
     *
     * @this {ChipSetX80}
     * @param {number} port (0xC2)
     * @param {number} b
     * @param {number} [addrFrom] (not defined if the Debugger is trying to write the specified port)
     */
    outVT100DC011(port, b, addrFrom)
    {
        this.printIO(port, b, addrFrom, "DC011");
        if (b & ChipSetX80.VT100.DC011.RATE60) {
            b &= ChipSetX80.VT100.DC011.RATE50;
            if (this.bDC011Rate != b) {
                this.bDC011Rate = b;
                if (this.video) {
                    this.video.updateRate(this.bDC011Rate == ChipSetX80.VT100.DC011.RATE50? 50 : 60);
                }
            }
        } else {
            b &= ChipSetX80.VT100.DC011.COLS132;
            if (this.bDC011Cols != b) {
                this.bDC011Cols = b;
                if (this.video) {
                    let nCols = (this.bDC011Cols == ChipSetX80.VT100.DC011.COLS132? 132 : 80);
                    let nRows = (nCols > 80 && (this.bFlags & ChipSetX80.VT100.FLAGS.NO_AVO)? 14 : 24);
                    this.video.updateDimensions(nCols, nRows);
                }
            }
        }
    }

    /**
     * ChipSetX80.init()
     *
     * This function operates on every HTML element of class "chipset", extracting the
     * JSON-encoded parameters for the ChipSet constructor from the element's "data-value"
     * attribute, invoking the constructor to create a ChipSet component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        let aeChipSet = Component.getElementsByClass(APPCLASS, "chipset");
        for (let iChip = 0; iChip < aeChipSet.length; iChip++) {
            let eChipSet = aeChipSet[iChip];
            let parmsChipSet = Component.getComponentParms(eChipSet);
            let chipset = new ChipSetX80(parmsChipSet);
            Component.bindComponentControls(chipset, eChipSet, APPCLASS);
        }
    }
}

ChipSetX80.JUKU = {
    VERSION:        5104,
    /*
     * 8255 #1 Programmable Peripheral Interface (PPI) I/O ports.
     */
    PPI1_A: {
        PORT:       0x04
    },
    PPI1_B: {
        PORT:       0x05
    },
    PPI1_C: {
        PORT:       0x06
    },
    PPI1_CTRL: {
        PORT:       0x07
    },
    /*
     * 8255 #2 Programmable Peripheral Interface (PPI) I/O ports.
     */
    PPI2_A: {
        PORT:       0x0c
    },
    PPI2_B: {
        PORT:       0x0d
    },
    PPI2_C: {
        PORT:       0x0e
    },
    PPI2_CTRL: {
        PORT:       0x0f
    },
    INPUT_PORTS: {
    },
    OUTPUT_PORTS: {
        0x0f: ChipSetX80.prototype.outJukuPPI2Ctrl
    }
};

/*
 * NOTE: The STATUS1 port could have been handled entirely by the Keyboard component, but it was just as easy
 * to create a simple ChipSet interface, updateStatus1(), that the Keyboard calls whenever it wants to simulate a
 * button press or release.  It's a six-of-one, half-a-dozen-of-another choice, since technically, Space Invaders
 * doesn't have a keyboard.
 */
ChipSetX80.SI1978 = {
    VERSION:        1978.1,
    STATUS0: {                          // NOTE: STATUS0 not used by the SI1978 ROMs; refer to STATUS1 instead
        PORT:       0,
        DIP4:       0x01,               // self-test request at power up?
        FIRE:       0x10,               // 1 = fire
        LEFT:       0x20,               // 1 = left
        RIGHT:      0x40,               // 1 = right
        PORT7:      0x80,               // some connection to (undocumented) port 7
        ALWAYS_SET: 0x0E                // always set
    },
    STATUS1: {
        PORT:       1,
        CREDIT:     0x01,               // credit (coin slot)
        P2:         0x02,               // 1 = 2P start
        P1:         0x04,               // 1 = 1P start
        P1_FIRE:    0x10,               // 1 = fire (P1 fire if cocktail machine?)
        P1_LEFT:    0x20,               // 1 = left (P1 left if cocktail machine?)
        P1_RIGHT:   0x40,               // 1 = right (P1 right if cocktail machine?)
        ALWAYS_SET: 0x08                // always set
    },
    STATUS2: {
        PORT:       2,
        DIP3_5:     0x03,               // 00 = 3 ships, 01 = 4 ships, 10 = 5 ships, 11 = 6 ships
        TILT:       0x04,               // 1 = tilt detected
        DIP6:       0x08,               // 0 = extra ship at 1500, 1 = extra ship at 1000
        P2_FIRE:    0x10,               // 1 = P2 fire (cocktail machines only?)
        P2_LEFT:    0x20,               // 1 = P2 left (cocktail machines only?)
        P2_RIGHT:   0x40,               // 1 = P2 right (cocktail machines only?)
        DIP7:       0x80,               // 0 = display coin info on demo ("attract") screen
        ALWAYS_SET: 0x00
    },
    SHIFT_RESULT: {                     // bits 0-7 of barrel shifter result
        PORT:       3
    },
    SHIFT_COUNT: {
        PORT:       2,
        MASK:       0x07
    },
    SOUND1: {
        PORT:       3,
        UFO:        0x01,
        SHOT:       0x02,
        PDEATH:     0x04,
        IDEATH:     0x08,
        EXPLAY:     0x10,
        AMP_ENABLE: 0x20
    },
    SHIFT_DATA: {
        PORT:       4
    },
    SOUND2: {
        PORT:       5,
        FLEET1:     0x01,
        FLEET2:     0x02,
        FLEET3:     0x04,
        FLEET4:     0x08,
        UFO_HIT:    0x10
    },
    INPUT_PORTS: {
        0x00: ChipSetX80.prototype.inSIStatus0,
        0x01: ChipSetX80.prototype.inSIStatus1,
        0x02: ChipSetX80.prototype.inSIStatus2,
        0x03: ChipSetX80.prototype.inSIShiftResult
    },
    OUTPUT_PORTS: {
        0x02: ChipSetX80.prototype.outSIShiftCount,
        0x03: ChipSetX80.prototype.outSISound1,
        0x04: ChipSetX80.prototype.outSIShiftData,
        0x05: ChipSetX80.prototype.outSISound2,
        0x06: ChipSetX80.prototype.outSIWatchdog
    }
};

/*
 * One of the many chips in the VT100 is an 8224, which operates at 24.8832MHz.  That frequency is divided by 9
 * to yield a 361.69ns clock period for the 8080 CPU, which means (in theory) that the CPU is running at 2.76Mhz.
 *
 * Hence the CPU component in the VT100's machine.xml should be defined as:
 *
 *      <cpu id="cpu8080" model="8080" cycles="2764800"/>
 *
 * WARNING: The choice of clock speed has an effect on other simulated VT100 circuits; see the DC011 Timing Chip
 * discussion below, along with the getVT100LBA() function.
 *
 * For reference, here is a list of all the VT100 I/O ports, from /devices/pc8080/machine/vt100/debugger/README.md,
 * which in turn comes from p. 4-17 of the VT100 Technical Manual (July 1982):
 *
 *      READ OR WRITE
 *      00H     PUSART data bus
 *      01H     PUSART command port
 *
 *      WRITE ONLY (Decoded with I/O WR L)
 *      02H     Baud rate generator
 *      42H     Brightness D/A latch
 *      62H     NVR latch
 *      82H     Keyboard UART data input [used to update the Keyboard Status Byte -JP]
 *      A2H     Video processor DC012
 *      C2H     Video processor DC011
 *      E2H     Graphics port
 *
 *      READ ONLY (Decoded with I/O RD L)
 *      22H     Modem buffer
 *      42H     Flags buffer
 *      82H     Keyboard UART data output
 *
 * Most of these are handled by the ChipSet component, since it exists as sort of a "catch-all" component,
 * but some are more appropriately handled by other components; eg, port 0x82 is handled by the Keyboard component,
 * so it's defined there instead of here.
 */
ChipSetX80.VT100 = {
    VERSION:        100.0,
    FLAGS: {
        PORT:       0x42,               // read-only
        UART_XMIT:  0x01,               // PUSART transmit buffer empty if SET
        NO_AVO:     0x02,               // AVO present if CLEAR
        NO_GFX:     0x04,               // VT125 graphics board present if CLEAR
        OPTION:     0x08,               // OPTION present if SET
        NO_EVEN:    0x10,               // EVEN FIELD active if CLEAR
        NVR_DATA:   0x20,               // NVR DATA if SET
        NVR_CLK:    0x40,               // NVR CLOCK if SET
        KBD_XMIT:   0x80                // KBD transmit buffer empty if SET
    },
    BRIGHTNESS: {
        PORT:       0x42,               // write-only
        INIT:       0x00                // for lack of a better guess
    },
    /*
     * DC011 is referred to as a Timing Chip.
     *
     * As p. 4-55 (105) of the VT100 Technical Manual (July 1982) explains:
     *
     *      The DCO11 is a custom designed bipolar circuit that provides most of the timing signals required by the
     *      video processor. Internal counters divide the output of a 24.0734 MHz oscillator (located elsewhere on the
     *      terminal controller module) into the lower frequencies that define dot, character, scan, and frame timing.
     *      The counters are programmable through various input pins to control the number of characters per line,
     *      the frequency at which the screen is refreshed, and whether the display is interlaced or noninterlaced.
     *      These parameters can be controlled through SET-UP mode or by the host.
     *
     *          Table 4-6-1: Video Mode Selection (Write Address 0xC2)
     *
     *          D5  D4      Configuration
     *          --  --      -------------
     *          0   0       80-column mode, interlaced
     *          0   1       132-column mode, interlaced
     *          1   0       60Hz, non-interlaced
     *          1   1       50Hz, non-interlaced
     *
     * On p. 4-56, the DC011 Block Diagram shows 8 outputs labeled LBA0 through LBA7.  From p. 4-61:
     *
     *      Several of the LBAs are used as general purpose clocks in the VT100. LBA3 and LBA4 are used to generate
     *      timing for the keyboard. These signals satisfy the keyboard's requirement of two square-waves, one twice the
     *      frequency of the other, even though every 16th transition is delayed (the second stage of the horizontal
     *      counter divides by 17, not 16). LBA7 is used by the nonvolatile RAM.
     *
     * And on p. 4-62, timings are provided for the LBA0 through LBA7; in particular:
     *
     *      LBA6:   16.82353us (when LBA6 is low, for a period of 33.64706us)
     *      LBA7:   31.77778us (when LBA7 is high, for a period of 63.55556us)
     *
     * If we assume that the CPU cycle count increments once every 361.69ns, it will increment roughly 88 times every
     * time LBA7 toggles.  So we can divide the CPU cycle count by 88 and set LBA to the low bit of that truncated
     * result.  An even faster (but less accurate) solution would be to mask bit 6 of the CPU cycle count, which will
     * doesn't change until the count has been incremented 64 times.  See getVT100LBA() for the chosen implementation.
     */
    DC011: {                            // generates Line Buffer Addresses (LBAs) for the Video Processor
        PORT:       0xC2,               // write-only
        COLS80:     0x00,
        COLS132:    0x10,
        RATE60:     0x20,
        RATE50:     0x30,
        INITCOLS:   0x00,               // ie, COLS80
        INITRATE:   0x20                // ie, RATE60
    },
    /*
     * DC012 is referred to as a Control Chip.
     *
     * As p. 4-67 (117) of the VT100 Technical Manual (July 1982) explains:
     *
     *      The DCO12 performs three main functions.
     *
     *       1. Scan count generation. This involves two counters, a multiplexer to switch between the counters,
     *          double-height logic, scroll and line attribute latches, and various logic controlling switching between
     *          the two counters. This is the biggest part of the chip. It includes all scrolling, double-height logic,
     *          and feeds into the underline and hold request circuits.
     *
     *       2. Generation of HOLD REQUEST. This uses information from the scan counters and the scrolling logic to
     *          decide when to generate HOLD REQUEST.
     *
     *       3. Video modifications: dot stretching, blanking, addition of attributes to video outputs, and multiple
     *          intensity levels.
     *
     *      The input decoder accepts a 4-bit command from the microprocessor when VID WR 2 L is asserted. Table 4-6-2
     *      lists the commands.
     *
     *      D3 D2 D1 D0     Function
     *      -- -- -- --     --------
     *      0  0  0  0      Load low order scroll latch = 00
     *      0  0  0  1      Load low order scroll latch = 01
     *      0  0  1  0      Load low order scroll latch = 10
     *      0  0  1  1      Load low order scroll latch = 11
     *
     *      0  1  0  0      Load high order scroll latch = 00
     *      0  1  0  1      Load high order scroll latch = 01
     *      0  1  1  0      Load high order scroll latch = 10
     *      0  1  1  1      Load high order scroll latch = 11 (not used)
     *
     *      1  0  0  0      Toggle blink flip-flop
     *      1  0  0  1      Clear vertical frequency interrupt
     *
     *      1  0  1  0      Set reverse field on
     *      1  0  1  1      Set reverse field off
     *
     *      1  1  0  0      Set basic attribute to underline*
     *      1  1  0  1      Set basic attribute to reverse video*
     *      1  1  1  0      Reserved for future specification*
     *      1  1  1  1      Reserved for future specification*
     *
     *      *These functions also clear blink flip-flop.
     */
    DC012: {                            // generates scan counts for the Video Processor
        PORT:       0xA2,               // write-only
        SCROLL_LO:  0x00,
        INITSCROLL: 0x00,
        INITBLINK:  0x00,
        INITREVERSE:0x00,
        INITATTR:   0x00
    },
    /*
     * ER1400 Non-Volatile RAM (NVR) Chip Definitions
     */
    NVR: {
        LATCH: {
            PORT:   0x62                // write-only
        },
        CMD: {
            ACCEPT_DATA:    0x0,
            ACCEPT_ADDR:    0x1,
            SHIFT_OUT:      0x2,
            WRITE:          0x4,
            ERASE:          0x5,
            READ:           0x6,
            STANDBY:        0x7
        },
        WORDMASK:   0x3fff              // NVR words are 14-bit
        /*
         * The Technical Manual, p. 4-18, also notes that "Early VT100s can disable the receiver interrupt by
         * programming D4 in the NVR latch. However, this is never used by the VT100."
         */
    },
    INPUT_PORTS: {
        0x42: ChipSetX80.prototype.inVT100Flags
    },
    OUTPUT_PORTS: {
        0x42: ChipSetX80.prototype.outVT100Brightness,
        0x62: ChipSetX80.prototype.outVT100NVRLatch,
        0xA2: ChipSetX80.prototype.outVT100DC012,
        0xC2: ChipSetX80.prototype.outVT100DC011
    }
};

/*
 * Supported models and their configurations
 */
ChipSetX80.MODELS = {
    "Juku":         ChipSetX80.JUKU,
    "SI1978":       ChipSetX80.SI1978,
    "VT100":        ChipSetX80.VT100
};

ChipSetX80.JUKU.INIT = [
    [
        0, 0, 0, 0,                     // PPI1_A, PPI1_B, PPI1_C, PPI1_CTRL
        0, 0, 0, 0                      // PPI2_A, PPI2_B, PPI2_C, PPI2_CTRL
    ]
];

ChipSetX80.SI1978.INIT = [
    [
        ChipSetX80.SI1978.STATUS0.ALWAYS_SET,
        ChipSetX80.SI1978.STATUS1.ALWAYS_SET,
        ChipSetX80.SI1978.STATUS2.ALWAYS_SET,
        0, 0, 0, 0
    ]
];

ChipSetX80.VT100.INIT = [
    [
        ChipSetX80.VT100.BRIGHTNESS.INIT,
        ChipSetX80.VT100.FLAGS.NO_AVO | ChipSetX80.VT100.FLAGS.NO_GFX
    ],
    [
        ChipSetX80.VT100.DC011.INITCOLS,
        ChipSetX80.VT100.DC011.INITRATE
    ],
    [
        ChipSetX80.VT100.DC012.INITSCROLL,
        ChipSetX80.VT100.DC012.INITBLINK,
        ChipSetX80.VT100.DC012.INITREVERSE,
        ChipSetX80.VT100.DC012.INITATTR
    ],
    [
        0, 0, 0, 0,
        [
            /*
             * The following array contains the data we use to initialize all (100) words of NVR (Non-Volatile RAM).
             *
             * I used to initialize every word to 0x3ff, as if the NVR had been freshly erased, but that causes the
             * firmware to (attempt to) beep and then display an error code (2).  As the DEC Technical Manual says:
             *
             *      If the NVR fails, the bell sounds several times to inform the operator, and then default settings
             *      stored in the ROM allow the terminal to work.
             *
             * but I think what they meant to say is that default settings are stored in the RAM copy of NVR.  So then
             * I went into SET-UP, pressed SHIFT-S to save those settings back to NVR, and then used the PCx80 debugger
             * "d nvr" command to dump the NVR contents.  The results are below.
             *
             * The first dump actually contains only two modifications to the factory defaults: enabling ONLINE instead
             * of LOCAL operation, and turning ANSI support ON.  The second dump is unmodified (the TRUE factory defaults).
             *
             * By making selective changes, you can discern where the bits for certain features are stored.  For example,
             * smooth-scrolling is apparently controlled by bit 7 of the word at offset 0x2B (and is ON by default in
             * the factory settings).  And it's likely that the word at offset 0x32 (ie, the last word that's not zero)
             * is the NVR checksum.
             */
            0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80,
            0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80,
            0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80,
            0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E00,
            0x2E08, 0x2E8E, 0x2E00, 0x2ED0, 0x2E70, 0x2E00, 0x2E20, 0x2E00, 0x2EE0, 0x2EE0,
            0x2E7D, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
            0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
            0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
            0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
            0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000
        ],
        [
            /*
             * The TRUE factory defaults (not currently used for anything; they're just here for reference, wasting space....)
             */
            0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80,
            0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80,
            0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80,
            0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E80, 0x2E00,
            0x2E08, 0x2E8E, 0x2E20, 0x2ED0, 0x2E50, 0x2E00, 0x2E20, 0x2E00, 0x2EE0, 0x2EE0,
            0x2E69, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
            0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
            0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
            0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
            0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000
        ]
    ]
];

/*
 * Initialize every ChipSet module on the page.
 */
WebLib.onInit(ChipSetX80.init);

/**
 * @copyright https://www.pcjs.org/machines/pcx80/modules/v2/rom.js (C) 2012-2025 Jeff Parsons
 */

/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @class ROMx80
 * @unrestricted
 */
class ROMx80 extends Component {
    /**
     * ROMx80(parmsROM)
     *
     * The ROMx80 component expects the following (parmsROM) properties:
     *
     *      addr: physical address of ROM
     *      size: amount of ROM, in bytes
     *      alias: physical alias address (null if none)
     *      file: name of ROM data file
     *
     * NOTE: The ROM data will not be copied into place until the Bus is ready (see initBus()) AND the
     * ROM data file has finished loading (see doneLoad()).
     *
     * Also, while the size parameter may seem redundant, I consider it useful to confirm that the ROM you received
     * is the ROM you expected.
     *
     * @this {ROMx80}
     * @param {Object} parmsROM
     */
    constructor(parmsROM)
    {
        super("ROM", parmsROM);

        this.abROM = null;
        this.addrROM = parmsROM['addr'];
        this.sizeROM = parmsROM['size'];

        /*
         * The new 'alias' property can now be EITHER a single physical address (like 'addr') OR an array of
         * physical addresses; eg:
         *
         *      [0xf0000,0xffff0000,0xffff8000]
         *
         * We could have overloaded 'addr' to accomplish the same thing, but I think it's better to have any
         * aliased locations listed under a separate property.
         *
         * Most ROMs are not aliased, in which case the 'alias' property should have the default value of null.
         */
        this.addrAlias = parmsROM['alias'];

        this.sFilePath = parmsROM['file'];
        this.sFileName = StrLib.getBaseName(this.sFilePath);

        if (this.sFilePath) {
            let sFileURL = this.sFilePath;
            this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "load(\"%s\"\n", sFileURL);
            /*
             * If the selected ROM file has a ".json" extension, then we assume it's pre-converted
             * JSON-encoded ROM data, so we load it as-is; ditto for ROM files with a ".hex" extension.
             * Otherwise, we ask our server-side ROM converter to return the file in a JSON-compatible format.
             */
            let sFileExt = StrLib.getExtension(this.sFileName);
            if (sFileExt != DumpAPI.FORMAT.JSON && sFileExt != DumpAPI.FORMAT.HEX) {
                sFileURL = WebLib.getHostOrigin() + DumpAPI.ENDPOINT + '?' + DumpAPI.QUERY.FILE + '=' + this.sFilePath + '&' + DumpAPI.QUERY.FORMAT + '=' + DumpAPI.FORMAT.BYTES + '&' + DumpAPI.QUERY.DECIMAL + '=true';
            }
            let rom = this;
            WebLib.getResource(sFileURL, null, true, function(sURL, sResponse, nErrorCode) {
                rom.doneLoad(sURL, sResponse, nErrorCode);
            });
        }
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {ROMx80}
     * @param {ComputerX80} cmp
     * @param {BusX80} bus
     * @param {CPUStateX80} cpu
     * @param {DebuggerX80} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.bus = bus;
        this.cpu = cpu;
        this.dbg = dbg;
        this.copyROM();
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {ROMx80}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (this.aSymbols) {
            if (this.dbg) {
                this.dbg.addSymbols(this.id, this.addrROM, this.sizeROM, this.aSymbols);
            }
            /*
             * Our only role in the handling of symbols is to hand them off to the Debugger at our
             * first opportunity. Now that we've done that, our copy of the symbols, if any, are toast.
             */
            delete this.aSymbols;
        }
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * Since we have nothing to do on powerDown(), and no state to return, we could simply omit
     * this function.  But it doesn't hurt anything, and maybe we'll use our state to save something
     * useful down the road, like user-defined symbols (ie, symbols that the Debugger may have
     * created, above and beyond those symbols we automatically loaded, if any, along with the ROM).
     *
     * @this {ROMx80}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
     */
    powerDown(fSave, fShutdown)
    {
        return true;
    }

    /**
     * doneLoad(sURL, sROMData, nErrorCode)
     *
     * @this {ROMx80}
     * @param {string} sURL
     * @param {string} sROMData
     * @param {number} nErrorCode (response from server if anything other than 200)
     */
    doneLoad(sURL, sROMData, nErrorCode)
    {
        if (nErrorCode) {
            this.printf(MESSAGE.NOTICE, "Unable to load system ROM (error %d: %s)\n", nErrorCode, sURL);
            return;
        }

        Component.addMachineResource(this.idMachine, sURL, sROMData);

        if (sROMData.charAt(0) == "[" || sROMData.charAt(0) == "{") {
            try {
                /*
                 * The most likely source of any exception will be here: parsing the JSON-encoded ROM data.
                 */
                let rom = eval("(" + sROMData + ")");

                /*
                 * PCjs v2 ROM images contain, at a minimum, a 'width' value and a 'values' array, along with
                 * other optional properties, like default load address ('addr'), endianness ('littleEndian'), etc.
                 *
                 * So we'll start with that and fall back to 8-bit 'bytes' or 32-bit 'longs' (or worst-case, 'data',
                 * but the length of 'data' values varied according to the machine architecture, so the introduction
                 * of 'data' was a "bit" ill-advised).
                 */
                let width = rom['width'];
                let values = rom['values'];
                let littleEndian = (rom['littleEndian'] !== false);
                if (!width || !values) {
                    width = 0;
                    if ((values = rom['bytes'])) {
                        width = 8;
                    }
                    else if ((values = rom['longs'] || rom['data'])) {
                        width = 32;
                    }
                }
                /*
                 * Convert all values to bytes, so that subsequent code has a simple and consistent data format: abROM.
                 */
                if (width) {
                    if (width == 8) {
                        this.abROM = values;
                    } else {
                        let bpv = width >>> 3;
                        this.abROM = new Array(values.length * bpv);
                        for (let i = 0, ib = 0; i < values.length; i++) {
                            let v = values[i];
                            if (littleEndian) {
                                for (let b = 0; b < bpv; b++) {
                                    this.abROM[ib + b] = v & 0xff;
                                    v >>>= 8;
                                }
                            } else {
                                for (let b = bpv - 1; b >= 0; b--) {
                                    this.abROM[ib + b] = v & 0xff;
                                    v >>>= 8;
                                }
                            }
                            ib += bpv;
                        }
                    }
                }
                else {
                    this.abROM = rom;
                }

                this.aSymbols = rom['symbols'];

                if (!this.abROM.length) {
                    Component.error("Empty ROM: " + sURL);
                    return;
                }
                else if (this.abROM.length == 1) {
                    Component.error(this.abROM[0]);
                    return;
                }
            } catch (e) {
                this.printf(MESSAGE.NOTICE, "ROM data error: %s\n", e.message);
                return;
            }
        }
        else {
            /*
             * Parse the ROM data manually; we assume it's in "simplified" hex form (a series of hex byte-values
             * separated by whitespace).
             */
            let sHexData = sROMData.replace(/\n/gm, " ").replace(/ +$/, "");
            let asHexData = sHexData.split(" ");
            this.abROM = new Array(asHexData.length);
            for (let i = 0; i < asHexData.length; i++) {
                this.abROM[i] = StrLib.parseInt(asHexData[i], 16);
            }
        }
        this.copyROM();
    }

    /**
     * copyROM()
     *
     * This function is called by both initBus() and doneLoad(), but it cannot copy the the ROM data into place
     * until after initBus() has received the Bus component AND doneLoad() has received the abROM data.  When both
     * those criteria are satisfied, the component becomes "ready".
     *
     * @this {ROMx80}
     */
    copyROM()
    {
        if (!this.isReady()) {
            if (!this.sFilePath) {
                this.setReady();
            }
            else if (this.abROM && this.bus) {
                /*
                 * If no explicit size was specified, then use whatever the actual size is.
                 */
                if (!this.sizeROM) {
                    this.sizeROM = this.abROM.length;
                }
                if (this.abROM.length != this.sizeROM) {
                    /*
                     * Note that setError() sets the component's fError flag, which in turn prevents setReady() from
                     * marking the component ready.  TODO: Revisit this decision.  On the one hand, it sounds like a
                     * good idea to stop the machine in its tracks whenever a setError() occurs, but there may also be
                     * times when we'd like to forge ahead anyway.
                     */
                    this.setError("ROM size (" + StrLib.toHexLong(this.abROM.length) + ") does not match specified size (" + StrLib.toHexLong(this.sizeROM) + ")");
                }
                else if (this.addROM(this.addrROM)) {

                    let aliases = [];
                    if (typeof this.addrAlias == "number") {
                        aliases.push(this.addrAlias);
                    } else if (this.addrAlias != null && this.addrAlias.length) {
                        aliases = this.addrAlias;
                    }
                    for (let i = 0; i < aliases.length; i++) {
                        this.cloneROM(aliases[i]);
                    }
                    /*
                     * We used to hang onto the original ROM data so that we could restore any bytes the CPU overwrote,
                     * using memory write-notification handlers, but with the introduction of read-only memory blocks, that's
                     * no longer necessary.
                     *
                     * TODO: Consider an option to retain the ROM data, and give the user some way of restoring ROMs.
                     * That may be useful for "resumable" machines that save/restore all dirty block of memory, regardless
                     * whether they're ROM or RAM.  However, the only way to modify a machine's ROM is with the Debugger,
                     * and Debugger users should know better.
                     */
                    delete this.abROM;
                }
                this.setReady();
            }
        }
    }

    /**
     * addROM(addr)
     *
     * @this {ROMx80}
     * @param {number} addr
     * @returns {boolean}
     */
    addROM(addr)
    {
        if (this.bus.addMemory(addr, this.sizeROM, MemoryX80.TYPE.ROM)) {
            this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "addROM(%#010x): %#010x bytes\n", addr, this.abROM.length);
            for (let i = 0; i < this.abROM.length; i++) {
                this.bus.setByteDirect(addr + i, this.abROM[i]);
            }
            return true;
        }
        /*
         * We don't need to report an error here, because addMemory() already takes care of that.
         */
        return false;
    }

    /**
     * cloneROM(addr)
     *
     * For ROMs with one or more alias addresses, we used to call addROM() for each address.  However,
     * that obviously wasted memory, since each alias was an independent copy, and if you used the
     * Debugger to edit the ROM in one location, the changes would not appear in the other location(s).
     *
     * Now that the Bus component provides low-level getMemoryBlocks() and setMemoryBlocks() methods
     * to manually get and set the blocks of any memory range, it is now possible to create true aliases.
     *
     * @this {ROMx80}
     * @param {number} addr
     */
    cloneROM(addr)
    {
        let aBlocks = this.bus.getMemoryBlocks(this.addrROM, this.sizeROM);
        this.bus.setMemoryBlocks(addr, this.sizeROM, aBlocks);
    }

    /**
     * ROMx80.init()
     *
     * This function operates on every HTML element of class "rom", extracting the
     * JSON-encoded parameters for the ROMx80 constructor from the element's "data-value"
     * attribute, invoking the constructor to create a ROMx80 component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        let aeROM = Component.getElementsByClass(APPCLASS, "rom");
        for (let iROM = 0; iROM < aeROM.length; iROM++) {
            let eROM = aeROM[iROM];
            let parmsROM = Component.getComponentParms(eROM);
            let rom = new ROMx80(parmsROM);
            Component.bindComponentControls(rom, eROM, APPCLASS);
        }
    }
}

/*
 * NOTE: There's currently no need for this component to have a reset() function, since
 * once the ROM data is loaded, it can't be changed, so there's nothing to reinitialize.
 *
 * OK, well, I take that back, because the Debugger, if installed, has the ability to modify
 * ROM contents, so in that case, having a reset() function that restores the original ROM data
 * might be useful; then again, it might not, depending on what you're trying to debug.
 *
 * If we do add reset(), then we'll want to change copyROM() to hang onto the original
 * ROM data; currently, we release it after copying it into the read-only memory allocated
 * via bus.addMemory().
 */

/*
 * Initialize all the ROMx80 modules on the page.
 */
WebLib.onInit(ROMx80.init);

/**
 * @copyright https://www.pcjs.org/machines/pcx80/modules/v2/ram.js (C) 2012-2025 Jeff Parsons
 */

/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @class RAMx80
 * @unrestricted
 */
class RAMx80 extends Component {
    /**
     * RAMx80(parmsRAM)
     *
     * The RAMx80 component expects the following (parmsRAM) properties:
     *
     *      addr: starting physical address of RAM (default is 0)
     *      size: amount of RAM, in bytes (default is 0, which means defer to motherboard switch settings)
     *      file: name of optional data file to load into RAM (default is "")
     *      load: optional file load address (overrides any load address specified in the data file; default is null)
     *      exec: optional file exec address (overrides any exec address specified in the data file; default is null)
     *
     * NOTE: We make a note of the specified size, but no memory is initially allocated for the RAM until the
     * Computer component calls powerUp().
     *
     * @this {RAMx80}
     * @param {Object} parmsRAM
     */
    constructor(parmsRAM)
    {
        super("RAM", parmsRAM);

        this.abInit = null;
        this.aSymbols = null;

        this.addrRAM = parmsRAM['addr'];
        this.sizeRAM = parmsRAM['size'];
        this.addrLoad = parmsRAM['load'];
        this.addrExec = parmsRAM['exec'];

        this.fInstalled = (!!this.sizeRAM); // 0 is the default value for 'size' when none is specified
        this.fAllocated = false;

        this.sFilePath = parmsRAM['file'];
        this.sFileName = StrLib.getBaseName(this.sFilePath);

        if (this.sFilePath) {
            let sFileURL = this.sFilePath;
            this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "load(\"%s\")\n", sFileURL);
            /*
             * If the selected data file has a ".json" extension, then we assume it's pre-converted
             * JSON-encoded data, so we load it as-is; ditto for ROM files with a ".hex" extension.
             * Otherwise, we ask our server-side converter to return the file in a JSON-compatible format.
             */
            let sFileExt = StrLib.getExtension(this.sFileName);
            if (sFileExt != DumpAPI.FORMAT.JSON && sFileExt != DumpAPI.FORMAT.HEX) {
                sFileURL = WebLib.getHostOrigin() + DumpAPI.ENDPOINT + '?' + DumpAPI.QUERY.FILE + '=' + this.sFilePath + '&' + DumpAPI.QUERY.FORMAT + '=' + DumpAPI.FORMAT.BYTES + '&' + DumpAPI.QUERY.DECIMAL + '=true';
            }
            let ram = this;
            WebLib.getResource(sFileURL, null, true, function(sURL, sResponse, nErrorCode) {
                ram.doneLoad(sURL, sResponse, nErrorCode);
            });
        }
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {RAMx80}
     * @param {ComputerX80} cmp
     * @param {BusX80} bus
     * @param {CPUStateX80} cpu
     * @param {DebuggerX80} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.bus = bus;
        this.cpu = cpu;
        this.dbg = dbg;
        this.initRAM();
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {RAMx80}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        /*
         * The Computer powers up the CPU last, at which point CPUState state is restored,
         * which includes the Bus state, and since we use the Bus to allocate all our memory,
         * memory contents are already restored for us, so we don't need the usual restore
         * logic.
         */
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {RAMx80}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
     */
    powerDown(fSave, fShutdown)
    {
        /*
         * The Computer powers down the CPU first, at which point CPUState state is saved,
         * which includes the Bus state, and since we use the Bus component to allocate all
         * our memory, memory contents are already saved for us, so we don't need the usual
         * save logic.
         */
        return true;
    }

    /**
     * doneLoad(sURL, sData, nErrorCode)
     *
     * @this {RAMx80}
     * @param {string} sURL
     * @param {string} sData
     * @param {number} nErrorCode (response from server if anything other than 200)
     */
    doneLoad(sURL, sData, nErrorCode)
    {
        if (nErrorCode) {
            this.printf(MESSAGE.NOTICE, "Unable to load RAM resource (error %d: %s)\n", nErrorCode, sURL);
            return;
        }

        Component.addMachineResource(this.idMachine, sURL, sData);

        let resource = WebLib.parseMemoryResource(sURL, sData);
        if (resource) {
            this.abInit = resource.aBytes;
            this.aSymbols = resource.aSymbols;
            if (this.addrLoad == null) this.addrLoad = resource.addrLoad;
            if (this.addrExec == null) this.addrExec = resource.addrExec;
        } else {
            this.sFilePath = null;
        }
        this.initRAM();
    }

    /**
     * initRAM()
     *
     * This function is called by both initBus() and doneLoad(), but it cannot copy the initial data into place
     * until after initBus() has received the Bus component AND doneLoad() has received the data.  When both those
     * criteria are satisfied, the component becomes "ready".
     *
     * @this {RAMx80}
     */
    initRAM()
    {
        if (!this.fAllocated && this.sizeRAM) {
            if (this.bus.addMemory(this.addrRAM, this.sizeRAM, MemoryX80.TYPE.RAM)) {
                this.fAllocated = true;
            }
        }
        if (!this.isReady()) {
            if (!this.fAllocated) {
                Component.error("No RAM allocated");
            }
            else if (this.sFilePath) {
                /*
                 * Too early...
                 */
                if (!this.abInit || !this.bus) return;

                let addr = this.addrRAM;
                if (this.addrLoad !== null) addr = this.addrLoad;
                for (let i = 0; i < this.abInit.length; i++) {
                    this.bus.setByteDirect(addr + i, this.abInit[i]);
                }

                if (this.addrExec !== null) {
                    /*
                     * Here's where we enable our "Fake CP/M" support, triggered by the user loading a "writable" ROM image
                     * at offset 0x100.  Fake CP/M support works by installing HLT opcodes at well-known CP/M addresses
                     * (namely, 0x0000, which is the CP/M reset vector, and 0x0005, which is the CP/M system call vector) and
                     * then telling the CPU to call us whenever a HLT occurs, so we can check PC for one of these addresses.
                     */
                    if (this.addrExec == RAMx80.CPM.INIT) {
                        for (let i = 0; i < RAMx80.CPM.VECTORS.length; i++) {
                            this.bus.setByteDirect(RAMx80.CPM.VECTORS[i], CPUDefX80.OPCODE.HLT);
                        }
                        this.cpu.addHaltCheck(function(rom) {
                            return function(addr) {
                                return rom.checkCPMVector(addr);
                            };
                        }(this));
                    }
                    this.cpu.setReset(this.addrExec);
                }

                /*
                 * TODO: Consider an option to retain this data and give the user a way of restoring the initial contents.
                 */
                delete this.abInit;
            }
            this.setReady();
        }
    }

    /**
     * reset()
     *
     * @this {RAMx80}
     */
    reset()
    {
        /*
         * If you want to zero RAM on reset, then this would be a good place to do it.
         */
    }

    /**
     * checkCPMVector(addr)
     *
     * @this {RAMx80}
     * @param {number} addr (of the HLT opcode)
     * @returns {boolean} true if special processing performed, false if not
     */
    checkCPMVector(addr)
    {
        let i = RAMx80.CPM.VECTORS.indexOf(addr);
        if (i >= 0) {
            let fCPM = false;
            let cpu = this.cpu;
            let dbg = this.dbg;
            if (addr == RAMx80.CPM.BDOS.VECTOR) {
                fCPM = true;
                switch(cpu.regC) {
                case RAMx80.CPM.BDOS.FUNC.CON_WRITE:
                    this.writeCPMString(this.getCPMChar(cpu.regE));
                    break;
                case RAMx80.CPM.BDOS.FUNC.STR_WRITE:
                    this.writeCPMString(this.getCPMString(cpu.getDE(), '$'));
                    break;
                default:
                    fCPM = false;
                    break;
                }
            }
            if (fCPM) {
                CPUDefX80.opRET.call(cpu);     // for recognized calls, automatically return
            }
            else if (dbg) {
                this.print("\nCP/M vector %#06x\n", addr);
                cpu.setPC(addr);                // this is purely for the Debugger's benefit, to show the HLT
                dbg.stopCPU();
            }
            return true;
        }
        return false;
    }

    /**
     * getCPMChar(ch)
     *
     * @this {RAMx80}
     * @param {number} ch
     * @returns {string}
     */
    getCPMChar(ch)
    {
        return String.fromCharCode(ch);
    }

    /**
     * getCPMString(addr, chEnd)
     *
     * @this {RAMx80}
     * @param {number} addr (of a string)
     * @param {string|number} [chEnd] (terminating character, default is 0)
     * @returns {string}
     */
    getCPMString(addr, chEnd)
    {
        let s = "";
        let cchMax = 255;
        let bEnd = chEnd && chEnd.length && chEnd.charCodeAt(0) || chEnd || 0;
        while (cchMax--) {
            let b = this.cpu.getByte(addr++);
            if (b == bEnd) break;
            s += String.fromCharCode(b);
        }
        return s;
    }

    /**
     * writeCPMString(s)
     *
     * @this {RAMx80}
     * @param {string} s
     */
    writeCPMString(s)
    {
        this.print(s.replace(/\r/g, ''));
    }

    /**
     * RAMx80.init()
     *
     * This function operates on every HTML element of class "ram", extracting the
     * JSON-encoded parameters for the RAMx80 constructor from the element's "data-value"
     * attribute, invoking the constructor to create a RAMx80 component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        let aeRAM = Component.getElementsByClass(APPCLASS, "ram");
        for (let iRAM = 0; iRAM < aeRAM.length; iRAM++) {
            let eRAM = aeRAM[iRAM];
            let parmsRAM = Component.getComponentParms(eRAM);
            let ram = new RAMx80(parmsRAM);
            Component.bindComponentControls(ram, eRAM, APPCLASS);
        }
    }
}

RAMx80.CPM = {
    BIOS: {
        VECTOR:         0x0000
    },
    BDOS: {
        VECTOR:         0x0005,
        FUNC: {                         // function number (specified in regC)
            RESET:      0x00,
            CON_READ:   0x01,           // output: A = L = ASCII character
            CON_WRITE:  0x02,           // input: E = ASCII character
            AUX_READ:   0x03,           // output: A = L = ASCII character
            AUX_WRITE:  0x04,           // input: E = ASCII character
            PRN_WRITE:  0x05,           // input: E = ASCII character
            MEM_SIZE:   0x06,           // output: base address of CCP (Console Command Processor), but which register? (perhaps moot if this was CP/M 1.3 only...)
            CON_IO:     0x06,           // input: E = ASCII character (or 0xFF to return ASCII character in A)
            GET_IOBYTE: 0x07,
            SET_IOBYTE: 0x08,
            STR_WRITE:  0x09            // input: DE = address of string
        }
    },
    INIT:               0x100
};

RAMx80.CPM.VECTORS = [RAMx80.CPM.BIOS.VECTOR, RAMx80.CPM.BDOS.VECTOR];

/*
 * Initialize all the RAMx80 modules on the page.
 */
WebLib.onInit(RAMx80.init);

/**
 * @copyright https://www.pcjs.org/machines/pcx80/modules/v2/keyboard.js (C) 2012-2025 Jeff Parsons
 */

/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @class KeyboardX80
 * @unrestricted
 */
class KeyboardX80 extends Component {
    /**
     * KeyboardX80(parmsKbd)
     *
     * The KeyboardX80 component has the following component-specific (parmsKbd) properties:
     *
     *      model:  eg, "VT100" (should be a member of KeyboardX80.MODELS)
     *
     * @this {KeyboardX80}
     * @param {Object} parmsKbd
     */
    constructor(parmsKbd)
    {
        super("Keyboard", parmsKbd, MESSAGE.KBD);

        let model = parmsKbd['model'];

        if (model && !KeyboardX80.MODELS[model]) {
            Component.printf(MESSAGE.NOTICE, "Unrecognized KeyboardX80 model: %s\n", model);
        }

        this.config = KeyboardX80.MODELS[model] || {};

        this.reset();

        this.setReady();
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * @this {KeyboardX80}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea", "canvas")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "esc")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        /*
         * There's a special binding that the Video component uses ("screen") to effectively bind its
         * screen to the entire keyboard, in Video.powerUp(); ie:
         *
         *      video.kbd.setBinding("canvas", "screen", video.canvasScreen);
         * or:
         *      video.kbd.setBinding("textarea", "screen", video.textareaScreen);
         *
         * However, it's also possible for the keyboard XML definition to define a control that serves
         * a similar purpose; eg:
         *
         *      <control type="text" binding="kbd" width="2em">Keyboard</control>
         *
         * The latter is purely experimental, while we work on finding ways to trigger the soft keyboard on
         * certain pesky devices (like the Kindle Fire).  Note that even if you use the latter, the former will
         * still be enabled (there's currently no way to configure the Video component to not bind its screen,
         * but we could certainly add one if the need ever arose).
         */
        let kbd = this;
        let id = sHTMLType + '-' + sBinding;

        if (this.bindings[id] === undefined) {

            if (sHTMLType == "led" && this.config.LEDCODES[sBinding]) {
                this.bindings[id] = control;
                return true;
            }

            switch (sBinding) {
            case "kbd":
            case "screen":
                /*
                 * Recording the binding ID prevents multiple controls (or components) from attempting to erroneously
                 * bind a control to the same ID, but in the case of a "dual display" configuration, we actually want
                 * to allow BOTH video components to call setBinding() for "screen", so that it doesn't matter which
                 * display the user gives focus to.
                 *
                 *      this.bindings[id] = control;
                 */
                if (WebLib.isUserAgent("iOS")) {
                    /*
                     * For iOS devices, it's best to deal only with keypress events.  The main reason is that we don't
                     * get shift-key events, so we have no way of distinguishing between certain keys, such as ':' and
                     * ';', unless we are monitoring key presses.  Another reason is that, under certain poorly documented
                     * conditions, an iOS keyup event will not contain any keyCode; this is most easily reproduced with
                     * the iOS simulator and a physical keyboard (not the pop-up keyboard).  When this happens, we think
                     * the key is stuck.  Finally, certain other problems that we have tried to resolve when using a physical
                     * keyboard (eg, keeping the physical and virtual CAPS-LOCK states in sync) simply don't exist in the
                     * iOS environment.
                     *
                     * So, with all that mind, it seems best to have a separate iOS keypress handler and forego keydown
                     * and keyup events entirely.  The iOS keypress handler must also perform some additional checks, such
                     * as watching for keys that can only be typed on the emulated device when a shift key is down, and
                     * simulating "fake" shift-key down and up events.
                     *
                     * Perhaps we can eventually standardize on this alternate keypress-centric approach for ALL devices,
                     * but until then, it's safer to have these two code paths.
                     *
                     * UPDATE: So much for the best laid plans.  iOS won't deliver BACKSPACE events to the keypress handler,
                     * so we have to deal with keydown/keyup events after all.
                     */
                    control.onkeypress = function oniOSKeyPress(event)
                    {
                        return kbd.oniOSKeyPress(event);
                    };
                    control.onkeydown = function oniOSKeyDown(event)
                    {
                        return kbd.oniOSKeyDown(event, true);
                    };
                    control.onkeyup = function oniOSKeyUp(event)
                    {
                        return kbd.oniOSKeyDown(event, false);
                    };
                }
                else {
                    control.onkeydown = function onKeyDown(event)
                    {
                        return kbd.onKeyDown(event, true);
                    };
                    control.onkeyup = function onKeyUp(event)
                    {
                        return kbd.onKeyDown(event, false);
                    };
                    control.onkeypress = function onKeyPress(event)
                    {
                        return kbd.onKeyPress(event);
                    };
                }
                control.onpaste = function onKeyPaste(event)
                {
                    return kbd.onPaste(event);
                };
                return true;

            default:
                if (this.config.SOFTCODES && this.config.SOFTCODES[sBinding] !== undefined) {
                    this.bindings[id] = control;
                    control.onclick = function(kbd, keyCode) {
                        return function onKeyboardBindingDown(event) {
                            /*
                             * iOS usability improvement: calling preventDefault() prevents rapid clicks from
                             * also being (mis)interpreted as a desire to "zoom" in on the machine.
                             */
                            if (event.preventDefault) event.preventDefault();
                            /*
                             * TODO: Add some additional SOFTCODES configuration info that will tell us which soft
                             * keys (eg, CTRL) should be treated as toggles, instead of hard-coding that knowledge below.
                             *
                             * Moreover, if a *real* CTRL or CAPS-LOCK key is pressed or released, it would be nice
                             * to update the state of these on-screen controls, too (ie, not just when the controls are
                             * clicked).
                             */
                            let fDown = true, bit = 0;
                            if (keyCode == Keys.KEYCODE.CTRL) {
                                bit = KeyboardX80.STATE.CTRL;
                            }
                            else if (keyCode == Keys.KEYCODE.CAPS_LOCK) {
                                bit = KeyboardX80.STATE.CAPS_LOCK;
                            }
                            if (bit) {
                                control.style.fontWeight = "normal";
                                fDown = !(kbd.bitsState & bit);
                                if (fDown) control.style.fontWeight = "bold";
                                kbd.checkModifierKeys(keyCode, fDown);
                            }
                            kbd.onSoftKeyDown(keyCode, fDown, !bit);
                            if (kbd.cmp) kbd.cmp.updateFocus();
                        };
                    }(this, this.config.SOFTCODES[sBinding]);
                    //
                    // var fnUp = function (kbd, keyCode) {
                    //     return function onKeyboardBindingUp(event) {
                    //         kbd.onSoftKeyDown(keyCode, false);
                    //         /*
                    //          * Give focus back to the machine (since clicking the button takes focus away).
                    //          *
                    //          *      if (kbd.cmp) kbd.cmp.updateFocus();
                    //          *
                    //          * iOS Usability Improvement: NOT calling updateFocus() keeps the soft keyboard down
                    //          * (assuming it was already down).
                    //          */
                    //     };
                    // }(this, this.config.SOFTCODES[sBinding]);
                    //
                    // if ('ontouchstart' in globals.window) {
                    //     control.ontouchstart = fnDown;
                    //     control.ontouchend = fnUp;
                    // } else {
                    //     control.onmousedown = fnDown;
                    //     control.onmouseup = control.onmouseout = fnUp;
                    // }
                    //
                    // UPDATE: Since the only controls that we explicitly bind to SOFTCODES are buttons, I'm simplifying
                    // the above code with a conventional "onclick" handler.  The only corresponding change I had to make
                    // to the onclick (formerly fnDown) function was to set fAutoRelease on its call to onSoftKeyDown(),
                    // since we're no longer attempting to detect when the control (ie, the button) is actually released.
                    //
                    // This change also resolves a problem I ran into with the Epiphany (WebKit-based) web browser running
                    // on the "elementary" (Ubuntu-based) OS, where clicks on the SET-UP button were ignored; perhaps its
                    // buttons don't generate mouse and/or touch events.  Anyway, an argument for keeping things simple.
                    //
                    return true;
                }
                break;
            }
        }
        return false;
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {KeyboardX80}
     * @param {ComputerX80} cmp
     * @param {BusX80} bus
     * @param {CPUStateX80} cpu
     * @param {DebuggerX80} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.cmp = cmp;
        this.cpu = cpu;
        this.dbg = dbg;     // NOTE: The "dbg" property must be set for the message functions to work

        let kbd = this;
        this.timerReleaseKeys = this.cpu.addTimer(this.id, function() {
            kbd.checkSoftKeysToRelease();
        });

        this.chipset = /** @type {ChipSetX80} */ (cmp.getMachineComponent("ChipSet"));

        this.serial = /** @type {SerialPortX80} */ (cmp.getMachineComponent("SerialPort"));

        bus.addPortInputTable(this, this.config.portsInput);
        bus.addPortOutputTable(this, this.config.portsOutput);
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {KeyboardX80}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) {
            if (!data) {
                this.reset();
            } else {
                if (!this.restore(data)) return false;
            }
        }
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {KeyboardX80}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
     */
    powerDown(fSave, fShutdown)
    {
        return fSave? this.save() : true;
    }

    /**
     * reset()
     *
     * @this {KeyboardX80}
     */
    reset()
    {
        /*
         * As keyDown events are encountered, a corresponding "softCode" is looked up.  If one is found,
         * then an entry for the key is added to the aKeysActive array.  Each "key" entry in aKeysActive contains:
         *
         *      softCode:           number or string representing the key pressed
         *      msDown:             timestamp of the most recent "down" event
         *      fAutoRelease:       true to auto-release the key after MINPRESSTIME (set when "up" occurs too quickly)
         *
         * When the key is finally released (or auto-released), its entry is removed from the array.
         */
        this.aKeysActive = [];

        /*
         * The current (assumed) physical (and simulated) states of the various shift/lock keys.
         *
         * TODO: Determine how (or whether) we can query the browser's initial shift/lock key states.
         */
        this.bitsState = 0;

        if (this.config.INIT && !this.restore(this.config.INIT)) {
            this.printf(MESSAGE.NOTICE, "reset error\n");
        }
    }

    /**
     * save()
     *
     * This implements save support for the Keyboard component.
     *
     * @this {KeyboardX80}
     * @returns {Object}
     */
    save()
    {
        let state = new State(this);
        switch(this.config.MODEL) {
        case KeyboardX80.SI1978.MODEL:
            break;
        case KeyboardX80.VT100.MODEL:
            state.set(0, [this.bVT100Status, this.bVT100Address, this.fVT100UARTBusy, this.nVT100UARTCycleSnap, -1]);
            break;
        }
        return state.data();
    }

    /**
     * restore(data)
     *
     * This implements restore support for the Keyboard component.
     *
     * @this {KeyboardX80}
     * @param {Object} data
     * @returns {boolean} true if successful, false if failure
     */
    restore(data)
    {
        let a;
        if (data && (a = data[0]) && a.length) {
            switch(this.config.MODEL) {
            case KeyboardX80.SI1978.MODEL:
                return true;

            case KeyboardX80.VT100.MODEL:
                this.bVT100Status = a[0];
                this.updateLEDs(this.bVT100Status & KeyboardX80.VT100.STATUS.LEDS);
                this.bVT100Address = a[1];
                this.fVT100UARTBusy = a[2];
                this.nVT100UARTCycleSnap = a[3];
                this.iKeyNext = a[4];
                return true;
            }
        }
        return false;
    }

    /**
     * setLED(control, f, color)
     *
     * TODO: Add support for user-definable LED colors
     *
     * @this {KeyboardX80}
     * @param {Object} control is an HTML control DOM object
     * @param {boolean|number} f is true if the LED represented by control should be "on", false if "off"
     * @param {number} color (ie, 0xff0000 for RED, or 0x00ff00 for GREEN)
     */
    setLED(control, f, color)
    {
        control.style.backgroundColor = (f? ('#' + StrLib.toHex(color, 6)) : "#000000");
    }

    /**
     * updateLEDs(bLEDs)
     *
     * @this {KeyboardX80}
     * @param {number} [bLEDs]
     */
    updateLEDs(bLEDs)
    {
        let id, control;
        if (bLEDs != null) {
            this.bLEDs = bLEDs;
        } else {
            bLEDs = this.bLEDs;
        }
        for (let sBinding in this.config.LEDCODES) {
            id = "led-" + sBinding;
            control = this.bindings[id];
            if (control) {
                let bitLED = this.config.LEDCODES[sBinding];
                let fOn = !!(bLEDs & bitLED);
                if (bitLED & (bitLED-1)) {
                    fOn = !(bLEDs & ~bitLED);
                }
                this.setLED(control, fOn, 0xff0000);
            }
        }
        id = "led-caps-lock";
        control = this.bindings[id];
        if (control) {
            this.setLED(control, (this.bitsState & KeyboardX80.STATE.CAPS_LOCK), 0x00ff00);
        }
    }

    /**
     * checkModifierKeys(keyCode, fDown, fRight)
     *
     * @this {KeyboardX80}
     * @param {number} keyCode (ie, either a keycode or string ID)
     * @param {boolean} fDown (true if key going down, false if key going up)
     * @param {boolean} [fRight] (true if key is on the right, false if not or unknown or n/a)
     * @returns {boolean} (fDown updated as needed for CAPS-LOCK weirdness)
     */
    checkModifierKeys(keyCode, fDown, fRight)
    {
        let bit = 0;
        switch(keyCode) {
        case Keys.KEYCODE.SHIFT:
            bit = fRight? KeyboardX80.STATE.RSHIFT : KeyboardX80.STATE.SHIFT;
            break;
        case Keys.KEYCODE.CTRL:
            bit = fRight? KeyboardX80.STATE.RCTRL : KeyboardX80.STATE.CTRL;
            break;
        case Keys.KEYCODE.ALT:
            bit = fRight? KeyboardX80.STATE.RALT : KeyboardX80.STATE.ALT;
            break;
        case Keys.KEYCODE.CMD:
            bit = fRight? KeyboardX80.STATE.RCMD : KeyboardX80.STATE.CMD;
            break;
        case Keys.KEYCODE.CAPS_LOCK:
            bit = KeyboardX80.STATE.CAPS_LOCK;
            /*
             * WARNING: You have an entered a browser weirdness zone.  In Chrome, pressing-and-releasing
             * CAPS-LOCK generates a "down" event when it turns the lock on and an "up" event when it turns
             * the lock off.  Firefox, OTOH, generates only "down" events, so we have to "manufacture"
             * the fDown parameter ourselves -- which means we also have to propagate it back to the caller.
             *
             * And, while this isn't necessary for Chrome, it doesn't appear to hurt anything in Chrome, so
             * we're not going to bother making it browser-specific.
             */
            fDown = !(this.bitsState & bit);
            break;
        }
        if (bit) {
            if (fDown) {
                this.bitsState |= bit;
            } else {
                this.bitsState &= ~bit;
            }
        }
        return fDown;
    }

    /**
     * getSoftCode(keyCode)
     *
     * Returns a number if the keyCode exists in the KEYMAP, or a string if the keyCode has a string ID.
     *
     * @this {KeyboardX80}
     * @returns {string|number|null}
     */
    getSoftCode(keyCode)
    {
        keyCode = this.config.ALTCODES[keyCode] || keyCode;
        if (this.config.KEYMAP[keyCode]) {
            return keyCode;
        }
        for (let sSoftCode in this.config.SOFTCODES) {
            if (this.config.SOFTCODES[sSoftCode] === keyCode) {
                return sSoftCode;
            }
        }
        return null;
    }

    /**
     * onKeyDown(event, fDown)
     *
     * @this {KeyboardX80}
     * @param {Object} event
     * @param {boolean} fDown is true for a keyDown event, false for up
     * @returns {boolean} true to pass the event along, false to consume it
     */
    onKeyDown(event, fDown)
    {
        let fPass = true;
        let keyCode = event.keyCode;

        this.printf(MESSAGE.KEY, "onKey%s(%d)\n", (fDown? "Down" : "Up"), keyCode);

        /*
         * A note about Firefox: it uses different keyCodes for certain keys; there's a logic to the differences
         * (they use ASCII codes), but since other browsers didn't follow suit, we must use a mapping table to
         * convert their keyCodes to the more traditional values.
         */
        keyCode = Keys.FF_KEYCODES[keyCode] || keyCode;

        /*
         * We now keep track of physical keyboard modifier keys.  This makes it possible for new services
         * to eventually be implemented (simulateKeysDown() and simulateKeysUp()), to map special ALT-key
         * combinations to VT100 keys, etc.
         */
        fDown = this.checkModifierKeys(keyCode, fDown, event.location == Keys.LOCATION.RIGHT);

        let softCode = this.getSoftCode(keyCode);
        if (softCode) {
            /*
             * Key combinations involving the "meta" key (ie, the Windows or Command key) are meaningless to
             * the VT100, so we ignore them.  The "meta" key itself is already effectively ignored, because it's
             * not acknowledged by getSoftCode(), but we also don't want any of the keys combined with "meta"
             * slipping through either.
             */
            if (!event.metaKey) {
                /*
                 * The LINE-FEED key is an important key on the VT100, and while we DO map a host function key
                 * to it (F7), I like the idea of making ALT-ENTER an alias for LINE-FEED as well.  Ditto for
                 * making ALT-DELETE an alias for BACKSPACE (and no, I don't mean ALT-BACKSPACE as an alias for
                 * DELETE; see my earlier discussion involving BACKSPACE and DELETE).
                 *
                 * Of course, as experienced VT100 users know, it's always possible to type CTRL-J for LINE-FEED
                 * and CTRL-H for BACKSPACE, too.  But not all our users are that experienced.
                 *
                 * I was also tempted to use CTRL-ENTER or SHIFT-ENTER, but those are composable VT100 key
                 * sequences, so it's best not to muck with those.
                 *
                 * Finally, this hack is complicated by the fact that if the ALT key is released first, we run
                 * the risk of the remapped key being stuck "down".  Hence the new REMAPPED bit, which should
                 * remain set (as a "proxy" for the ALT bit) as long as a remapped key is down.
                 */
                let fRemapped = false;
                if (this.bitsState & (KeyboardX80.STATE.ALTS | KeyboardX80.STATE.REMAPPED)) {
                    if (softCode == Keys.KEYCODE.CR) {
                        softCode = Keys.KEYCODE.F7;
                        fRemapped = true;
                    }
                    else if (softCode == Keys.KEYCODE.BS) {
                        softCode = Keys.KEYCODE.DEL;
                        fRemapped = true;
                    }
                    if (fRemapped) {
                        if (fDown) {
                            this.bitsState |= KeyboardX80.STATE.REMAPPED;
                        } else {
                            this.bitsState &= ~KeyboardX80.STATE.REMAPPED;
                        }
                    }
                }
                fPass = this.onSoftKeyDown(softCode, fDown);
                /*
                 * As onKeyPress() explains, the only key presses we're interested in are letters, which provide
                 * an important clue regarding the CAPS-LOCK state.  For all other keys, we call preventDefault(),
                 * which normally "suppresses" the keyPress event, as well as other unwanted browser behaviors
                 * (eg, the SPACE key, which browsers interpret as a desire to scroll the entire web page down).
                 *
                 * And, even if the key IS a letter, we STILL want to call preventDefault() if a CTRL key is down,
                 * so that Windows-based browsers (eg, Edge) don't interfere with their stupid CTRL-based shortcuts. ;-)
                 *
                 * NOTE: We COULD check event.ctrlKey too, but it's six of one, half a dozen of another.
                 */
                if (!(softCode >= Keys.ASCII.A && softCode <= Keys.ASCII.Z) || (this.bitsState | KeyboardX80.STATE.CTRLS)) {
                    if (event.preventDefault) event.preventDefault();
                }
            }
        }
        this.printf(MESSAGE.KEY, "onKey%s(%d): softCode=%s, pass=%b\n", (fDown? "Down" : "Up"), keyCode, softCode, fPass);
        return fPass;
    }

    /**
     * onKeyPress(event)
     *
     * For now, our only interest in keyPress events is letters, as a means of detecting the CAPS-LOCK state.
     *
     * @this {KeyboardX80}
     * @param {Object} event
     * @returns {boolean} true to pass the event along, false to consume it
     */
    onKeyPress(event)
    {
        /*
         * A note about Firefox: the KeyboardEvent they pass to a keypress handler doesn't set 'keyCode', so
         * we have to fallback to 'charCode' (or 'which'), both of which are deprecated but realistically can't
         * really go away.
         *
         * TODO: Consider "upgrading" this code to use the new 'key' property.  Note, however, that it's a string,
         * not a number; for example; if the colon key is pressed, 'key' will be ":", whereas 'charCode' and 'which'
         * will be 58.
         */
        let charCode = event.keyCode || event.charCode;

        if (charCode >= Keys.ASCII.A && charCode <= Keys.ASCII.Z) {
            if (!(this.bitsState & (KeyboardX80.STATE.SHIFTS | KeyboardX80.STATE.CAPS_LOCK))) {
                this.bitsState |= KeyboardX80.STATE.CAPS_LOCK;
                this.onSoftKeyDown(Keys.KEYCODE.CAPS_LOCK, true);
                this.updateLEDs();
            }
        }
        else if (charCode >= Keys.ASCII.a && charCode <= Keys.ASCII.z) {
            if (this.bitsState & KeyboardX80.STATE.CAPS_LOCK) {
                this.bitsState &= ~KeyboardX80.STATE.CAPS_LOCK;
                this.onSoftKeyDown(Keys.KEYCODE.CAPS_LOCK, false);
                this.updateLEDs();
            }
        }
        this.printf(MESSAGE.KEY, "onKeyPress(%d)\n", charCode);
        return true;
    }

    /**
     * oniOSKeyDown(event, fDown)
     *
     * @this {KeyboardX80}
     * @param {Object} event
     * @param {boolean} fDown is true for a keyDown event, false for up
     * @returns {boolean} true to pass the event along, false to consume it
     */
    oniOSKeyDown(event, fDown)
    {
        let fPass = true;
        /*
         * Because keydown/keyup events on iOS are inherently "fake", they can be delivered so quickly that
         * if we generated matching down/up events, then the emulated machine might not see the key transition.
         * So we now deliver only down events, with fAutoRelease always set (see below).
         *
         * Also, because of iOS weirdness discussed in setBinding() when using a physical keyboard, the keyup
         * event may not provide a valid keyCode, which is another reason we have no choice but to always deliver
         * keys with fAutoRelease set to true.
         */
        if (fDown) {
            let keyCode = event.keyCode;
            let bMapping = this.config.KEYMAP[keyCode];
            if (bMapping) {
                /*
                 * If this is a mappable key, but the mapping isn't in the CHARMAP table, then we have to process
                 * it now; the most common reason is that the key doesn't generate a keypress event (eg, BACKSPACE).
                 */
                if (!this.indexOfCharMap(bMapping)) {
                    fPass = this.onSoftKeyDown(keyCode, fDown, true);
                    if (event.preventDefault) event.preventDefault();
                    this.printf(MESSAGE.KEY, "oniOSKey%s(%d): pass=%b\n", (fDown ? "Down" : "Up"), keyCode, fPass);
                }
            }
        }
        return fPass;
    }

    /**
     * oniOSKeyPress(event)
     *
     * @this {KeyboardX80}
     * @param {Object} event
     * @returns {boolean} true to pass the event along, false to consume it
     */
    oniOSKeyPress(event)
    {
        /*
         * A note about Firefox: the KeyboardEvent they pass to a keypress handler doesn't set 'keyCode', so
         * we have to fallback to 'charCode' (or 'which'), both of which are deprecated but realistically can't
         * really go away.
         *
         * TODO: Consider "upgrading" this code to use the new 'key' property.  Note, however, that it's a string,
         * not a number; for example; if the colon key is pressed, 'key' will be ":", whereas 'charCode' and 'which'
         * will be 58.
         */
        let charCode = event.keyCode || event.charCode;

        let fShifted = false;
        let bMapping = this.config.CHARMAP[charCode];
        if (bMapping) {
            if (bMapping & 0x80) {
                bMapping &= 0x7f;
                fShifted = true;
            }
            /*
             * Since the rest of our code was built around keyCodes, not charCodes, we look up the CHARMAP byte
             * in the KEYMAP table to find a corresponding keyCode, and that's what we'll use to simulate the key
             * press/release.
             */
            let softCode = this.indexOfKeyMap(bMapping);
            if (softCode) {
                if (!fShifted) {
                    this.onSoftKeyDown(Keys.KEYCODE.SHIFT, false);
                } else {
                    this.onSoftKeyDown(Keys.KEYCODE.SHIFT, true, true);
                }
                this.onSoftKeyDown(softCode, true, true);
            }
        }
        this.printf(MESSAGE.KEY, "oniOSKeyPress(%d)\n", charCode);
        return true;
    }

    /**
     * onPaste(event)
     *
     * @this {KeyboardX80}
     * @param {Object} event
     * @returns {boolean} true to pass the event along, false to consume it
     */
    onPaste(event)
    {
        /*
         * TODO: In a perfect world, we would have implemented simulateKeysDown() and simulateKeysUp(),
         * which would transform any given text into the appropriate keystrokes.  But for now, we're going
         * to leapfrog all that and try invoking the SerialPort's sendData() function, which if available,
         * is nothing more than a call into a connected machine's receiveData() function.
         *
         * Besides, paste functionality doesn't seem to be consistently implemented across all browsers
         * (partly out of security concerns, apparently) so it may not make sense to expend much more
         * effort on this right now.  If you want to paste a lot of text into a machine, you're better off
         * pasting into a machine that's been configured to use a textarea as part of its Control Panel.
         * A visible textarea seems to have less issues than the hidden textarea overlaid on top of our
         * Video display.
         */
        if (this.serial && this.serial.sendData) {
            if (event.stopPropagation) event.stopPropagation();
            if (event.preventDefault) event.preventDefault();
            let clipboardData = event.clipboardData || globals.window.clipboardData;
            if (clipboardData) {
                this.serial.transmitData(clipboardData.getData('Text'));
                return false;
            }
        }
        return true;
    }

    /**
     * indexOfKeyMap(bMapping)
     *
     * @this {KeyboardX80}
     * @param {number} bMapping
     * @returns {number}
     */
    indexOfKeyMap(bMapping)
    {
        for (let keyCode in this.config.KEYMAP) {
            if (this.config.KEYMAP[keyCode] == bMapping) return +keyCode;
        }
        return 0;
    }

    /**
     * indexOfCharMap(bMapping)
     *
     * @this {KeyboardX80}
     * @param {number} bMapping
     * @returns {number}
     */
    indexOfCharMap(bMapping)
    {
        for (let charCode in this.config.CHARMAP) {
            if (this.config.CHARMAP[charCode] == bMapping) return +charCode;
        }
        return 0;
    }

    /**
     * indexOfSoftKey(softCode)
     *
     * @this {KeyboardX80}
     * @param {number|string} softCode
     * @returns {number} index of softCode in aKeysActive, or -1 if not found
     */
    indexOfSoftKey(softCode)
    {
        for (let i = 0; i < this.aKeysActive.length; i++) {
            if (this.aKeysActive[i].softCode == softCode) return i;
        }
        return -1;
    }

    /**
     * onSoftKeyDown(softCode, fDown, fAutoRelease)
     *
     * @this {KeyboardX80}
     * @param {number|string} softCode
     * @param {boolean} fDown is true for a down event, false for up
     * @param {boolean} [fAutoRelease] is true only if we know we want the key to auto-release
     * @returns {boolean} true to pass the event along, false to consume it
     */
    onSoftKeyDown(softCode, fDown, fAutoRelease)
    {
        let i = this.indexOfSoftKey(softCode);
        if (fDown) {
            // this.printf("%s down\n", softCode);
            if (i < 0) {
                this.aKeysActive.push({
                    softCode: softCode,
                    msDown: Date.now(),
                    fAutoRelease: fAutoRelease || false
                });
            } else {
                this.aKeysActive[i].msDown = Date.now();
                this.aKeysActive[i].fAutoRelease = fAutoRelease || false;
            }
            if (fAutoRelease) this.checkSoftKeysToRelease();        // prime the pump
        } else if (i >= 0) {
            // this.printf("%s up\n", softCode);
            if (!this.aKeysActive[i].fAutoRelease) {
                let msDown = this.aKeysActive[i].msDown;
                if (msDown) {
                    let msElapsed = Date.now() - msDown;
                    if (msElapsed < KeyboardX80.MINPRESSTIME) {
                        // this.printf("%s released after only %dms\n", softCode, msElapsed);
                        this.aKeysActive[i].fAutoRelease = true;
                        this.checkSoftKeysToRelease();
                        return true;
                    }
                }
            }
            this.aKeysActive.splice(i, 1);
        } else {
            // this.printf("%s up with no down?\n", softCode);
        }

        if (this.chipset) {
            let bit = 0;
            switch(softCode) {
            case '1p':
                bit = ChipSetX80.SI1978.STATUS1.P1;
                break;
            case '2p':
                bit = ChipSetX80.SI1978.STATUS1.P2;
                break;
            case 'coin':
                bit = ChipSetX80.SI1978.STATUS1.CREDIT;
                break;
            case 'left':
                bit = ChipSetX80.SI1978.STATUS1.P1_LEFT;
                break;
            case 'right':
                bit = ChipSetX80.SI1978.STATUS1.P1_RIGHT;
                break;
            case 'fire':
                bit = ChipSetX80.SI1978.STATUS1.P1_FIRE;
                break;
            }
            if (bit) {
                this.chipset.updateStatus1(bit, fDown);
            }
        }
        return true;
    }

    /**
     * checkSoftKeysToRelease()
     *
     * @this {KeyboardX80}
     */
    checkSoftKeysToRelease()
    {
        let i = 0;
        let msDelayMin = -1;
        while (i < this.aKeysActive.length) {
            if (this.aKeysActive[i].fAutoRelease) {
                let softCode = this.aKeysActive[i].softCode;
                let msDown = this.aKeysActive[i].msDown;
                let msElapsed = Date.now() - msDown;
                let msDelay = KeyboardX80.MINPRESSTIME - msElapsed;
                if (msDelay > 0) {
                    if (msDelayMin < 0 || msDelayMin > msDelay) {
                        msDelayMin = msDelay;
                    }
                } else {
                    /*
                     * Because the key is already in the auto-release state, this next call guarantees that the
                     * key will be removed from the array; a consequence of that removal, however, is that we must
                     * reset our array index to zero.
                     */
                    this.onSoftKeyDown(softCode, false);
                    i = 0;
                    continue;
                }
            }
            i++;
        }
        if (msDelayMin >= 0) {
            /*
             * Replaced the klunky browser setTimeout() call with our own timer service.
             *
             *      var kbd = this;
             *      setTimeout(function() { kbd.checkSoftKeysToRelease(); }, msDelayMin);
             */
            this.cpu.setTimer(this.timerReleaseKeys, msDelayMin);
        }
    }

    /**
     * isVT100TransmitterReady()
     *
     * Called whenever the VT100 ChipSet circuit needs the Keyboard UART's transmitter status.
     *
     * From p. 4-32 of the VT100 Technical Manual (July 1982):
     *
     *      The operating clock for the keyboard interface comes from an address line in the video processor (LBA4).
     *      This signal has an average period of 7.945 microseconds. Each data byte is transmitted with one start bit
     *      and one stop bit, and each bit lasts 16 clock periods. The total time for each data byte is 160 times 7.945
     *      or 1.27 milliseconds. Each time the Transmit Buffer Empty flag on the terminal's UART gets set (when the
     *      current byte is being transmitted), the microprocessor loads another byte into the transmit buffer. In this
     *      way, the stream of status bytes to the keyboard is continuous.
     *
     * We used to always return true (after all, what's wrong with an infinitely fast UART?), but unfortunately,
     * the VT100 firmware relies on the UART's slow transmission speed to drive cursor blink rate.  We have several
     * options:
     *
     *      1) Snapshot the CPU cycle count each time a byte is transmitted (see outVT100UARTStatus()) and then every
     *      time this is polled, see if the cycle count has exceeded the snapshot value by the necessary threshold;
     *      if we assume 361.69ns per CPU cycle, there are 22 CPU cycles for every 1 LBA4 cycle, and since transmission
     *      time is supposed to last for 160 LBA4 cycles, the threshold is 22*160 CPU cycles, or 3520 cycles.
     *
     *      2) Set a CPU timer using the new setTimer() interface, which can be passed the number of milliseconds to
     *      wait before firing (in this case, roughly 1.27ms).
     *
     *      3) Call the ChipSet's getVT100LBA(4) function for the state of the simulated LBA4, and count 160 LBA4
     *      transitions; however, that would be the worst solution, because there's no guarantee that the firmware's
     *      UART polling will occur regularly and/or frequently enough for us to catch every LBA4 transition.
     *
     * I'm going with solution #1 because it's less overhead.
     *
     * @this {KeyboardX80}
     * @returns {boolean} (true if ready, false if not)
     */
    isVT100TransmitterReady()
    {
        if (this.fVT100UARTBusy) {
            /*
             * NOTE: getMSCycles(1.2731488) should work out to 3520 cycles for a CPU clocked at 361.69ns per cycle,
             * which is roughly 2.76Mhz.  We could just hard-code 3520 instead of calling getMSCycles(), but this helps
             * maintain a reasonable blink rate for the cursor even when the user cranks up the CPU speed.
             */
            if (this.cpu.getCycles() >= this.nVT100UARTCycleSnap + this.cpu.getMSCycles(1.2731488)) {
                this.fVT100UARTBusy = false;
            }
        }
        return !this.fVT100UARTBusy;
    }

    /**
     * inVT100UARTAddress(port, addrFrom)
     *
     * We take our cue from iKeyNext.  If it's -1 (default), we simply return the last value latched
     * in bVT100Address.  Otherwise, if iKeyNext is a valid index into aKeysActive, we look up the key
     * in the VT100.KEYMAP, latch it, and increment iKeyNext.  Failing that, we latch KeyboardX80.VT100.KEYLAST
     * and reset iKeyNext to -1.
     *
     * @this {KeyboardX80}
     * @param {number} port (0x82)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to write the specified port)
     * @returns {number} simulated port value
     */
    inVT100UARTAddress(port, addrFrom)
    {
        let b = this.bVT100Address;
        if (this.iKeyNext >= 0) {
            if (this.iKeyNext < this.aKeysActive.length) {
                let key = this.aKeysActive[this.iKeyNext];
                if (!MAXDEBUG) {
                    this.iKeyNext++;
                } else {
                    /*
                     * In MAXDEBUG builds, this code removes the key as soon as it's been reported, because
                     * when debugging, it's easy for the window to lose focus and never receive the keyUp event,
                     * thereby leaving us with a stuck key.  However, this may cause more problems than it solves,
                     * because the VT100's ROM seems to require that key presses persist for more than a single poll.
                     */
                    this.aKeysActive.splice(this.iKeyNext, 1);
                }
                b = KeyboardX80.VT100.KEYMAP[key.softCode];
                if (b & 0x80) {
                    /*
                     * TODO: This code is supposed to be accompanied by a SHIFT key; make sure that it is.
                     */
                    b &= 0x7F;
                }
            } else {
                this.iKeyNext = -1;
                b = KeyboardX80.VT100.KEYLAST;
            }
            this.bVT100Address = b;
            this.cpu.requestINTR(1);
        }
        this.printIO(port, undefined, addrFrom, "KBDUART.ADDRESS", b);
        return b;
    }

    /**
     * outVT100UARTStatus(port, b, addrFrom)
     *
     * @this {KeyboardX80}
     * @param {number} port (0x82)
     * @param {number} b
     * @param {number} [addrFrom] (not defined if the Debugger is trying to write the specified port)
     */
    outVT100UARTStatus(port, b, addrFrom)
    {
        this.printIO(port, b, addrFrom, "KBDUART.STATUS");
        this.bVT100Status = b;
        this.fVT100UARTBusy = true;
        this.nVT100UARTCycleSnap = this.cpu.getCycles();
        this.updateLEDs(b & KeyboardX80.VT100.STATUS.LEDS);
        if (b & KeyboardX80.VT100.STATUS.START) {
            this.iKeyNext = 0;
            this.cpu.requestINTR(1);
        }
    }

    /**
     * KeyboardX80.init()
     *
     * This function operates on every HTML element of class "keyboard", extracting the
     * JSON-encoded parameters for the Keyboard constructor from the element's "data-value"
     * attribute, invoking the constructor to create a Keyboard component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        let aeKbd = Component.getElementsByClass(APPCLASS, "keyboard");
        for (let iKbd = 0; iKbd < aeKbd.length; iKbd++) {
            let eKbd = aeKbd[iKbd];
            let parmsKbd = Component.getComponentParms(eKbd);
            let kbd = new KeyboardX80(parmsKbd);
            Component.bindComponentControls(kbd, eKbd, APPCLASS);
        }
    }
}

/*
 * Now that we want to keep track of the physical (and simulated) state of modifier keys, I've
 * grabbed a copy of the same bit definitions used by /modules/pcx86/modules/v2/keyboard.js, since it's
 * only important that we have a set of unique values; what the values are isn't critical.
 */
KeyboardX80.STATE = {
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
    ALL_RIGHT:      0x0055,             // RSHIFT | RCTRL | RALT | RCMD
    ALL_SHIFT:      0x00FF,             // SHIFT | RSHIFT | CTRL | RCTRL | ALT | RALT | CMD | RCMD
    INSERT:         0x0100,             // TODO: Placeholder (we currently have no notion of any "insert" states)
    CAPS_LOCK:      0x0200,
    NUM_LOCK:       0x0400,
    SCROLL_LOCK:    0x0800,
    ALL_LOCKS:      0x0E00,             // CAPS_LOCK | NUM_LOCK | SCROLL_LOCK
    REMAPPED:       0x1000
};

KeyboardX80.MINPRESSTIME = 50;         // minimum milliseconds to wait before auto-releasing keys

/**
 * Alternate keyCode mappings to support popular "WASD"-style directional-key mappings.
 *
 * TODO: ES6 computed property name support may now be in all mainstream browsers, allowing us to use
 * a simple object literal for this and all other object initializations.
 */
KeyboardX80.WASDCODES = {};
KeyboardX80.WASDCODES[Keys.ASCII.A] = Keys.KEYCODE.LEFT;
KeyboardX80.WASDCODES[Keys.ASCII.D] = Keys.KEYCODE.RIGHT;
KeyboardX80.WASDCODES[Keys.ASCII.L] = Keys.KEYCODE.SPACE;

/*
 * Supported keyboard configurations.
 *
 * A word (or two) about SOFTCODES.  Their main purpose is to provide a naming convention for machine-specific
 * controls, without tying us to any particular keyboard mapping.  They are used in two main ways.
 *
 * First, if we have a binding to the machine's "screen", there will, at a minimum, be onkeydown and onkeyup
 * handlers attached to the screen, and those handlers will need to iterate through the SOFTCODES table, looking
 * for key codes that we care about and converting them to corresponding soft codes.  Some machines, like
 * Space Invaders, will then act directly upon the soft code (eg, converting it to a machine-specific status bit).
 *
 * Second, a machine may have other bindings (eg, buttons) to one or more of these soft codes, and those bindings
 * will need to know which key codes they're supposed to generate.  Some machines, like the VT100, will then use
 * another table (KEYMAP) to convert key codes into a machine-specific "key addresses".
 */
KeyboardX80.SI1978 = {
    MODEL:          1978.1,
    KEYMAP:         {},
    CHARMAP:        {},
    ALTCODES:       KeyboardX80.WASDCODES,
    LEDCODES:       {},
    SOFTCODES: {
        '1p':       Keys.KEYCODE.ONE,
        '2p':       Keys.KEYCODE.TWO,
        'coin':     Keys.KEYCODE.THREE,
        'left':     Keys.KEYCODE.LEFT,
        'right':    Keys.KEYCODE.RIGHT,
        'fire':     Keys.KEYCODE.SPACE
    }
};

KeyboardX80.VT100 = {
    MODEL:          100.0,
    KEYMAP: {
        /*
         * Map of keydown keyCodes to VT100 key addresses (7-bit values representing key positions on the VT100).
         *
         * NOTE: The VT100 keyboard has both BACKSPACE and DELETE keys, whereas modern keyboards generally only
         * have DELETE.  And sadly, when you press DELETE, your modern keyboard and/or modern browser is reporting
         * it as keyCode 8: the code for BACKSPACE, aka CTRL-H.  You have to press a modified DELETE key to get
         * the actual DELETE keyCode of 127.
         *
         * We resolve this below by mapping KEYCODE.BS (8) to VT100 keyCode DELETE (0x03) and KEYCODE.DEL (127)
         * to VT100 keyCode BACKSPACE (0x33).  So, DELETE is BACKSPACE and BACKSPACE is DELETE.  Fortunately, this
         * confusion is all internal, because your physical key is (or should be) labeled DELETE, so the fact that
         * the browser is converting it to BACKSPACE and that we're converting BACKSPACE back into DELETE is
         * something most people don't need to worry their heads about.
         *
         * ES6 ALERT: As you can see below, I've finally started using computed property names.
         */
        [Keys.KEYCODE.BS]:      0x03,
        [Keys.ASCII.P]:         0x05,
        [Keys.ASCII.O]:         0x06,
        [Keys.ASCII.Y]:         0x07,
        [Keys.ASCII.T]:         0x08,
        [Keys.ASCII.W]:         0x09,
        [Keys.ASCII.Q]:         0x0A,
        [Keys.KEYCODE.RIGHT]:   0x10,
        [Keys.KEYCODE.RBRACK]:  0x14,
        [Keys.KEYCODE.LBRACK]:  0x15,
        [Keys.ASCII.I]:         0x16,
        [Keys.ASCII.U]:         0x17,
        [Keys.ASCII.R]:         0x18,
        [Keys.ASCII.E]:         0x19,
        [Keys.KEYCODE.ONE]:     0x1A,
        [Keys.KEYCODE.LEFT]:    0x20,
        [Keys.KEYCODE.DOWN]:    0x22,
        [Keys.KEYCODE.F6]:      0x23,   // aka BREAK
        [Keys.KEYCODE.PAUSE]:   0x23,   // aka BREAK
        [Keys.KEYCODE.BQUOTE]:  0x24,
        [Keys.KEYCODE.DASH]:    0x25,
        [Keys.KEYCODE.NINE]:    0x26,
        [Keys.KEYCODE.SEVEN]:   0x27,
        [Keys.KEYCODE.FOUR]:    0x28,
        [Keys.KEYCODE.THREE]:   0x29,
        [Keys.KEYCODE.ESC]:     0x2A,
        [Keys.KEYCODE.UP]:      0x30,
        [Keys.KEYCODE.F3]:      0x31,   // aka PF3
        [Keys.KEYCODE.F1]:      0x32,   // aka PF1
        [Keys.KEYCODE.DEL]:     0x33,
        [Keys.KEYCODE.EQUALS]:  0x34,
        [Keys.KEYCODE.ZERO]:    0x35,
        [Keys.KEYCODE.EIGHT]:   0x36,
        [Keys.KEYCODE.SIX]:     0x37,
        [Keys.KEYCODE.FIVE]:    0x38,
        [Keys.KEYCODE.TWO]:     0x39,
        [Keys.KEYCODE.TAB]:     0x3A,
        [Keys.KEYCODE.NUM_7]:   0x40,
        [Keys.KEYCODE.F4]:      0x41,   // aka PF4
        [Keys.KEYCODE.F2]:      0x42,   // aka PF2
        [Keys.KEYCODE.NUM_0]:   0x43,
        [Keys.KEYCODE.F7]:      0x44,   // aka LINE-FEED
        [Keys.KEYCODE.BSLASH]:  0x45,
        [Keys.ASCII.L]:         0x46,
        [Keys.ASCII.K]:         0x47,
        [Keys.ASCII.G]:         0x48,
        [Keys.ASCII.F]:         0x49,
        [Keys.ASCII.A]:         0x4A,
        [Keys.KEYCODE.NUM_8]:   0x50,
        [Keys.KEYCODE.NUM_CR]:  0x51,
        [Keys.KEYCODE.NUM_2]:   0x52,
        [Keys.KEYCODE.NUM_1]:   0x53,
        [Keys.KEYCODE.QUOTE]:   0x55,
        [Keys.KEYCODE.SEMI]:    0x56,
        [Keys.ASCII.J]:         0x57,
        [Keys.ASCII.H]:         0x58,
        [Keys.ASCII.D]:         0x59,
        [Keys.ASCII.S]:         0x5A,
        [Keys.KEYCODE.NUM_DEL]: 0x60,   // keypad period
        [Keys.KEYCODE.F5]:      0x61,   // aka KEYPAD COMMA
        [Keys.KEYCODE.NUM_5]:   0x62,
        [Keys.KEYCODE.NUM_4]:   0x63,
        [Keys.KEYCODE.CR]:      0x64,   // TODO: Figure out why the Technical Manual lists CR at both 0x04 and 0x64
        [Keys.KEYCODE.PERIOD]:  0x65,
        [Keys.KEYCODE.COMMA]:   0x66,
        [Keys.ASCII.N]:         0x67,
        [Keys.ASCII.B]:         0x68,
        [Keys.ASCII.X]:         0x69,
        [Keys.KEYCODE.F8]:      0x6A,   // aka NO-SCROLL
        [Keys.KEYCODE.NUM_9]:   0x70,
        [Keys.KEYCODE.NUM_3]:   0x71,
        [Keys.KEYCODE.NUM_6]:   0x72,
        [Keys.KEYCODE.NUM_SUB]: 0x73,   // aka KEYPAD MINUS
        [Keys.KEYCODE.SLASH]:   0x75,
        [Keys.ASCII.M]:         0x76,
        [Keys.ASCII[' ']]:      0x77,
        [Keys.ASCII.V]:         0x78,
        [Keys.ASCII.C]:         0x79,
        [Keys.ASCII.Z]:         0x7A,
        [Keys.KEYCODE.F9]:      0x7B,   // aka SET-UP
        [Keys.KEYCODE.CTRL]:    0x7C,
        [Keys.KEYCODE.SHIFT]:   0x7D,   // either shift key (doesn't matter)
        [Keys.KEYCODE.CAPS_LOCK]:0x7E
    },
    CHARMAP: {
        /*
         * Map of keypress charCodes to VT100 key addresses (7-bit values representing key positions on the VT100);
         * the 8th bit (0x80) is set for keys that need to be shifted.
         *
         * This is currently used only with the iOS keypress handler, which processes character codes rather than
         * keyboard codes.  As a result, this table is not as complete as the KEYMAP table, since certain keys are
         * not delivered as key presses (eg, BACKSPACE) and/or are simply not present on the iOS keyboard (eg, ESC,
         * arrow keys).  Also, SPACE had to be removed from the CHARMAP table as well, because otherwise it causes
         * the entire page to scroll down (you have to wonder who thought THAT was a good idea).
         *
         * ES6 ALERT: As you can see below, I've finally started using computed property names.
         */
        [Keys.ASCII.p]:         0x05,
        [Keys.ASCII.o]:         0x06,
        [Keys.ASCII.y]:         0x07,
        [Keys.ASCII.t]:         0x08,
        [Keys.ASCII.w]:         0x09,
        [Keys.ASCII.q]:         0x0A,
        [Keys.ASCII[']']]:      0x14,
        [Keys.ASCII['[']]:      0x15,
        [Keys.ASCII.i]:         0x16,
        [Keys.ASCII.u]:         0x17,
        [Keys.ASCII.r]:         0x18,
        [Keys.ASCII.e]:         0x19,
        [Keys.ASCII['1']]:      0x1A,
        [Keys.ASCII['`']]:      0x24,
        [Keys.ASCII['-']]:      0x25,
        [Keys.ASCII['9']]:      0x26,
        [Keys.ASCII['7']]:      0x27,
        [Keys.ASCII['4']]:      0x28,
        [Keys.ASCII['3']]:      0x29,
        [Keys.ASCII['=']]:      0x34,
        [Keys.ASCII['0']]:      0x35,
        [Keys.ASCII['8']]:      0x36,
        [Keys.ASCII['6']]:      0x37,
        [Keys.ASCII['5']]:      0x38,
        [Keys.ASCII['2']]:      0x39,
        [Keys.ASCII['\\']]:     0x45,
        [Keys.ASCII.l]:         0x46,
        [Keys.ASCII.k]:         0x47,
        [Keys.ASCII.g]:         0x48,
        [Keys.ASCII.f]:         0x49,
        [Keys.ASCII.a]:         0x4A,
        [Keys.ASCII["'"]]:      0x55,
        [Keys.ASCII[';']]:      0x56,
        [Keys.ASCII.j]:         0x57,
        [Keys.ASCII.h]:         0x58,
        [Keys.ASCII.d]:         0x59,
        [Keys.ASCII.s]:         0x5A,
        [Keys.KEYCODE.CR]:      0x64,   // TODO: Figure out why the Technical Manual lists CR at both 0x04 and 0x64
        [Keys.ASCII['.']]:      0x65,
        [Keys.ASCII[',']]:      0x66,
        [Keys.ASCII.n]:         0x67,
        [Keys.ASCII.b]:         0x68,
        [Keys.ASCII.x]:         0x69,
        [Keys.ASCII['/']]:      0x75,
        [Keys.ASCII.m]:         0x76,
     // [Keys.ASCII[' ']]:      0x77,   // as noted above, we need to process SPACE at keydown rather than keypress
        [Keys.ASCII.v]:         0x78,
        [Keys.ASCII.c]:         0x79,
        [Keys.ASCII.z]:         0x7A,
        [Keys.ASCII.P]:         0x85,
        [Keys.ASCII.O]:         0x86,
        [Keys.ASCII.Y]:         0x87,
        [Keys.ASCII.T]:         0x88,
        [Keys.ASCII.W]:         0x89,
        [Keys.ASCII.Q]:         0x8A,
        [Keys.ASCII['}']]:      0x94,
        [Keys.ASCII['{']]:      0x95,
        [Keys.ASCII.I]:         0x96,
        [Keys.ASCII.U]:         0x97,
        [Keys.ASCII.R]:         0x98,
        [Keys.ASCII.E]:         0x99,
        [Keys.ASCII['!']]:      0x9A,
        [Keys.ASCII['~']]:      0xA4,
        [Keys.ASCII['_']]:      0xA5,
        [Keys.ASCII['(']]:      0xA6,
        [Keys.ASCII['&']]:      0xA7,
        [Keys.ASCII['$']]:      0xA8,
        [Keys.ASCII['#']]:      0xA9,
        [Keys.ASCII['+']]:      0xB4,
        [Keys.ASCII[')']]:      0xB5,
        [Keys.ASCII['*']]:      0xB6,
        [Keys.ASCII['^']]:      0xB7,
        [Keys.ASCII['%']]:      0xB8,
        [Keys.ASCII['@']]:      0xB9,
        [Keys.ASCII['|']]:      0xC5,
        [Keys.ASCII.L]:         0xC6,
        [Keys.ASCII.K]:         0xC7,
        [Keys.ASCII.G]:         0xC8,
        [Keys.ASCII.F]:         0xC9,
        [Keys.ASCII.A]:         0xCA,
        [Keys.ASCII['"']]:      0xD5,
        [Keys.ASCII[':']]:      0xD6,
        [Keys.ASCII.J]:         0xD7,
        [Keys.ASCII.H]:         0xD8,
        [Keys.ASCII.D]:         0xD9,
        [Keys.ASCII.S]:         0xDA,
        [Keys.ASCII['>']]:      0xE5,
        [Keys.ASCII['<']]:      0xE6,
        [Keys.ASCII.N]:         0xE7,
        [Keys.ASCII.B]:         0xE8,
        [Keys.ASCII.X]:         0xE9,
        [Keys.ASCII['?']]:      0xF5,
        [Keys.ASCII.M]:         0xF6,
        [Keys.ASCII.V]:         0xF8,
        [Keys.ASCII.C]:         0xF9,
        [Keys.ASCII.Z]:         0xFA
    },
    ALTCODES: {},
    LEDCODES: {},
    SOFTCODES: {
        'caps-lock':    Keys.KEYCODE.CAPS_LOCK,
        'ctrl':         Keys.KEYCODE.CTRL,
        'esc':          Keys.KEYCODE.ESC,
        'tab':          Keys.KEYCODE.TAB,
        'num-comma':    Keys.KEYCODE.F5,        // since modern keypads don't typically have a comma...
        'break':        Keys.KEYCODE.F6,
        'line-feed':    Keys.KEYCODE.F7,
        'no-scroll':    Keys.KEYCODE.F8,
        'setup':        Keys.KEYCODE.F9
    },
    /*
     * Reading port 0x82 returns a key address from the VT100 keyboard's UART data output.
     *
     * Every time a keyboard scan is initiated (by setting the START bit of the status byte),
     * our internal address index (iKeyNext) is set to zero, and an interrupt is generated for
     * each entry in the aKeysActive array, along with a final interrupt for KEYLAST.
     */
    ADDRESS: {
        PORT:       0x82,
        INIT:       0x7F
    },
    /*
     * Writing port 0x82 updates the VT100's keyboard status byte via the keyboard's UART data input.
     */
    STATUS: {
        PORT:       0x82,               // write-only
        LED4:       0x01,
        LED3:       0x02,
        LED2:       0x04,
        LED1:       0x08,
        LOCKED:     0x10,
        LOCAL:      0x20,
        LEDS:       0x3F,               // all LEDs
        START:      0x40,               // set to initiate a scan
        /*
         * From p. 4-38 of the VT100 Technical Manual (July 1982):
         *
         *      A bit (CLICK) in the keyboard status word controls the bell....  When a single status word contains
         *      the bell bit, flip-flop E3 toggles and turns on E1, generating a click. If the bell bit is set for
         *      many words in succession, the UART latch holds the data output constant..., allowing the circuit to
         *      produce an 800 hertz tone. Bell is generated by setting the bell bit for 0.25 seconds.  Each cycle of
         *      the tone is at a reduced amplitude compared with the single keyclick....  The overall effect of the
         *      tone burst on the ear is that of a beep.
         */
        CLICK:      0x80,
        INIT:       0x00
    },
    KEYLAST:        0x7F                // special end-of-scan key address (all valid key addresses are < KEYLAST)
};

KeyboardX80.VT100.LEDCODES = {
    'l4':       KeyboardX80.VT100.STATUS.LED4,
    'l3':       KeyboardX80.VT100.STATUS.LED3,
    'l2':       KeyboardX80.VT100.STATUS.LED2,
    'l1':       KeyboardX80.VT100.STATUS.LED1,
    'locked':   KeyboardX80.VT100.STATUS.LOCKED,
    'local':    KeyboardX80.VT100.STATUS.LOCAL,
    'online':  ~KeyboardX80.VT100.STATUS.LOCAL,
    'caps-lock':KeyboardX80.STATE.CAPS_LOCK
};

/*
 * Supported models and their configurations
 */
KeyboardX80.MODELS = {
    "SI1978":       KeyboardX80.SI1978,
    "VT100":        KeyboardX80.VT100
};

KeyboardX80.VT100.INIT = [
    [
        KeyboardX80.VT100.STATUS.INIT,         // bVT100Status
        KeyboardX80.VT100.ADDRESS.INIT,        // bVT100Address
        false,                                  // fVT100UARTBusy
        0,                                      // nVT100UARTCycleSnap
        -1                                      // iKeyNext
    ]
];

/*
 * Port notification tables
 */
KeyboardX80.VT100.portsInput = {
    0x82: KeyboardX80.prototype.inVT100UARTAddress
};

KeyboardX80.VT100.portsOutput = {
    0x82: KeyboardX80.prototype.outVT100UARTStatus
};

/*
 * Initialize every Keyboard module on the page.
 */
WebLib.onInit(KeyboardX80.init);

/**
 * @copyright https://www.pcjs.org/machines/pcx80/modules/v2/video.js (C) 2012-2025 Jeff Parsons
 */

/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @class VideoX80
 * @unrestricted
 */
class VideoX80 extends Component {
    /**
     * VideoX80(parmsVideo, canvas, context, textarea, container)
     *
     * The VideoX80 component can be configured with the following (parmsVideo) properties:
     *
     *      screenWidth: width of the screen canvas, in pixels
     *      screenHeight: height of the screen canvas, in pixels
     *      screenColor: background color of the screen canvas (default is black)
     *      screenRotate: the amount of counter-clockwise screen rotation required (eg, -90 or 270)
     *      aspectRatio (eg, 1.33)
     *      bufferAddr: the starting address of the frame buffer (eg, 0x2400)
     *      bufferRAM: true to use existing RAM (default is false)
     *      bufferFormat: if defined, one of the recognized formats in VideoX80.FORMATS (eg, "vt100")
     *      bufferCols: the width of a single frame buffer row, in pixels (eg, 256)
     *      bufferRows: the number of frame buffer rows (eg, 224)
     *      bufferBits: the number of bits per column (default is 1)
     *      bufferLeft: the bit position of the left-most pixel in a byte (default is 0; CGA uses 7)
     *      bufferRotate: the amount of counter-clockwise buffer rotation required (eg, -90 or 270)
     *      interruptRate: normally the same as (or some multiple of) refreshRate (eg, 120)
     *      refreshRate: how many times updateScreen() should be performed per second (eg, 60)
     *
     *  In addition, if a text-only display is being emulated, define the following properties:
     *
     *      fontROM: URL of font ROM
     *      fontColor: default is white
     *      cellWidth: number (eg, 10 for VT100)
     *      cellHeight: number (eg, 10 for VT100)
     *
     * We record all the above values now, but we defer creation of the frame buffer until our initBus()
     * handler is called.  At that point, we will also compute the extent of the frame buffer, determine the
     * appropriate "cell" size (ie, the number of pixels that updateScreen() will fetch and process at once),
     * and then allocate our cell cache.
     *
     * Why interruptRate in addition to refreshRate?  A higher interrupt rate is required for Space Invaders,
     * because even though the CRT refreshes at 60Hz, the CRT controller interrupts the CPU *twice* per
     * refresh (once after the top half of the screen has been redrawn, and again after the bottom half has
     * been redrawn), so we need an interrupt rate of 120Hz.  We pass the higher rate on to the CPU, so that
     * it will call updateScreen() more frequently, but we still limit our screen updates to every *other* call.
     *
     * bufferRotate is an alternative to screenRotate; you may set one or the other (but not both) to -90 to
     * enable different approaches to counter-clockwise 90-degree image rotation.  screenRotate uses canvas
     * transformation methods (translate(), rotate(), and scale()), while bufferRotate inverts the dimensions
     * of the off-screen buffer and then relies on setPixel() to "rotate" the data into the proper location.
     *
     * @this {VideoX80}
     * @param {Object} parmsVideo
     * @param {Object} [canvas]
     * @param {Object} [context]
     * @param {Object} [textarea]
     * @param {Object} [container]
     */
    constructor(parmsVideo, canvas, context, textarea, container)
    {
        super("Video", parmsVideo, MESSAGE.VIDEO);

        let video = this, sProp, sEvent;
        this.fGecko = WebLib.isUserAgent("Gecko/");

        this.cxScreen = parmsVideo['screenWidth'];
        this.cyScreen = parmsVideo['screenHeight'];

        this.addrBuffer = parmsVideo['bufferAddr'];
        this.fUseRAM = parmsVideo['bufferRAM'];

        let sFormat = parmsVideo['bufferFormat'];
        this.nFormat = sFormat && VideoX80.FORMATS[sFormat.toUpperCase()] || VideoX80.FORMAT.UNKNOWN;

        this.nColsBuffer = parmsVideo['bufferCols'];
        this.nRowsBuffer = parmsVideo['bufferRows'];

        this.cxCellDefault = this.cxCell = parmsVideo['cellWidth'] || 1;
        this.cyCellDefault = this.cyCell = parmsVideo['cellHeight'] || 1;
        this.abFontData = null;
        this.fDotStretcher = false;

        this.nBitsPerPixel = parmsVideo['bufferBits'] || 1;
        this.iBitFirstPixel = parmsVideo['bufferLeft'] || 0;

        this.rotateBuffer = parmsVideo['bufferRotate'];
        if (this.rotateBuffer) {
            this.rotateBuffer = this.rotateBuffer % 360;
            if (this.rotateBuffer > 0) this.rotateBuffer -= 360;
            if (this.rotateBuffer != -90) {
                this.printf(MESSAGE.NOTICE, "unsupported buffer rotation: %d\n", this.rotateBuffer);
                this.rotateBuffer = 0;
            }
        }

        this.rateInterrupt = parmsVideo['interruptRate'];
        this.rateRefresh = parmsVideo['refreshRate'] || 60;

        this.canvasScreen = canvas;
        this.contextScreen = context;
        this.textareaScreen = textarea;
        this.inputScreen = textarea || canvas || null;

        /*
         * These variables are here in case we want/need to add support for borders later...
         */
        this.xScreenOffset = this.yScreenOffset = 0;
        this.cxScreenOffset = this.cxScreen;
        this.cyScreenOffset = this.cyScreen;

        this.cxScreenCell = (this.cxScreen / this.nColsBuffer)|0;
        this.cyScreenCell = (this.cyScreen / this.nRowsBuffer)|0;

        /*
         * Now that we've finished using nRowsBuffer to help define the screen size, we add one more
         * row for text modes, to account for the VT100's scroll line buffer (used for smooth scrolling).
         */
        if (this.cyCell > 1) {
            this.nRowsBuffer++;
            this.bScrollOffset = 0;
            this.fSkipSingleCellUpdate = false;
        }

        /*
         * Support for disabling (or, less commonly, enabling) image smoothing, which all browsers
         * seem to support now (well, OK, I still have to test the latest MS Edge browser), despite
         * it still being labelled "experimental technology".  Let's hope the browsers standardize
         * on this.  I see other options emerging, like the CSS property "image-rendering: pixelated"
         * that's apparently been added to Chrome.  Sigh.
         */
        let fSmoothing = parmsVideo['smoothing'];
        let sSmoothing = WebLib.getURLParm('smoothing');
        if (sSmoothing) fSmoothing = (sSmoothing == "true");
        this.fSmoothing = fSmoothing;
        this.sSmoothing = WebLib.findProperty(this.contextScreen, 'imageSmoothingEnabled');

        this.rotateScreen = parmsVideo['screenRotate'];
        if (this.rotateScreen) {
            this.rotateScreen = this.rotateScreen % 360;
            if (this.rotateScreen > 0) this.rotateScreen -= 360;
            /*
             * TODO: Consider also disallowing any rotateScreen value if bufferRotate was already set; setting
             * both is most likely a mistake, but who knows, maybe someone wants to use both for 180-degree rotation?
             */
            if (this.rotateScreen != -90) {
                this.printf(MESSAGE.NOTICE, "unsupported screen rotation: %d\n", this.rotateScreen);
                this.rotateScreen = 0;
            } else {
                this.contextScreen.translate(0, this.cyScreen);
                this.contextScreen.rotate((this.rotateScreen * Math.PI)/180);
                this.contextScreen.scale(this.cyScreen/this.cxScreen, this.cxScreen/this.cyScreen);
            }
        }

        /*
         * Here's the gross code to handle full-screen support across all supported browsers.  The lack of standards
         * is exasperating; browsers can't agree on 'Fullscreen' (most common) or 'FullScreen' (least common), and while
         * some browsers honor other browser prefixes, most don't.  Event handlers tend to be more consistent (ie, all
         * lower-case).
         */
        this.container = container;
        if (this.container) {
            sProp = WebLib.findProperty(container, 'requestFullscreen') || WebLib.findProperty(container, 'requestFullScreen');
            if (sProp) {
                this.container.doFullScreen = container[sProp];
                sEvent = WebLib.findProperty(document, 'on', 'fullscreenchange');
                if (sEvent) {
                    let sFullScreen = WebLib.findProperty(document, 'fullscreenElement') || WebLib.findProperty(document, 'fullScreenElement');
                    document.addEventListener(sEvent, function onFullScreenChange() {
                        video.notifyFullScreen(document[sFullScreen] != null);
                    }, false);
                }
                sEvent = WebLib.findProperty(document, 'on', 'fullscreenerror');
                if (sEvent) {
                    document.addEventListener(sEvent, function onFullScreenError() {
                        video.notifyFullScreen();
                    }, false);
                }
            }
        }

        this.sFontROM = parmsVideo['fontROM'];
        if (this.sFontROM) {
            let sFileExt = StrLib.getExtension(this.sFontROM);
            if (sFileExt != "json") {
                this.sFontROM = WebLib.getHostOrigin() + DumpAPI.ENDPOINT + '?' + DumpAPI.QUERY.FILE + '=' + this.sFontROM + '&' + DumpAPI.QUERY.FORMAT + '=' + DumpAPI.FORMAT.BYTES;
            }
            WebLib.getResource(this.sFontROM, null, true, function(sURL, sResponse, nErrorCode) {
                video.doneLoad(sURL, sResponse, nErrorCode);
            });
        }

        this.ledBindings = {};
    }

    /**
     * initBuffers()
     *
     * @this {VideoX80}
     * @returns {boolean}
     */
    initBuffers()
    {
        /*
         * Allocate off-screen buffers now
         */
        this.cxBuffer = this.nColsBuffer * this.cxCell;
        this.cyBuffer = this.nRowsBuffer * this.cyCell;

        let cxBuffer = this.cxBuffer;
        let cyBuffer = this.cyBuffer;
        if (this.rotateBuffer) {
            cxBuffer = this.cyBuffer;
            cyBuffer = this.cxBuffer;
        }

        this.sizeBuffer = 0;
        if (!this.fUseRAM) {
            this.sizeBuffer = ((this.cxBuffer * this.nBitsPerPixel) >> 3) * this.cyBuffer;
            if (!this.bus.addMemory(this.addrBuffer, this.sizeBuffer, MemoryX80.TYPE.VIDEO)) {
                return false;
            }
        }

        /*
         * imageBuffer is only used for graphics modes.  For text modes, we create a canvas
         * for each font and draw characters by drawing from the font canvas to the target canvas.
         */
        if (this.sizeBuffer) {
            this.imageBuffer = this.contextScreen.createImageData(cxBuffer, cyBuffer);
            this.nPixelsPerCell = (16 / this.nBitsPerPixel)|0;
            this.initCellCache(this.sizeBuffer >> 1);
        } else {
            /*
             * We add an extra column per row to store the visible line length at the start of every row.
             */
            this.initCellCache((this.nColsBuffer + 1) * this.nRowsBuffer);
        }

        this.canvasBuffer = document.createElement("canvas");
        this.canvasBuffer.width = cxBuffer;
        this.canvasBuffer.height = cyBuffer;
        this.contextBuffer = this.canvasBuffer.getContext("2d");

        this.aFonts = {};
        this.initColors();

        if (this.nFormat == VideoX80.FORMAT.VT100) {
            /*
             * Beyond fonts, VT100 support requires that we maintain a number of additional properties:
             *
             *      rateMonitor: must be either 50 or 60 (defaults to 60); we don't emulate the monitor refresh rate,
             *      but we do need to keep track of which rate has been selected, because that affects the number of
             *      "fill lines" present at the top of the VT100's frame buffer: 2 lines for 60Hz, 5 lines for 50Hz.
             *
             *      The VT100 July 1982 Technical Manual, p. 4-89, shows the following sample frame buffer layout:
             *
             *                  00  01  02  03  04  05  06  07  08  09  0A  0B  0C  0D  0E  0F
             *                  --------------------------------------------------------------
             *          0x2000: 7F  70  03  7F  F2  D0  7F  70  06  7F  70  0C  7F  70  0F  7F
             *          0x2010: 70  03  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..
             *          ...
             *          0x22D0: 'D' 'A' 'T' 'A' ' ' 'F' 'O' 'R' ' ' 'F' 'I' 'R' 'S' 'T' ' ' 'L'
             *          0x22E0: 'I' 'N' 'E' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' '
             *          ...
             *          0x2320: 7F  F3  23  'D' 'A' 'T' 'A' ' ' 'F' 'O' 'R' ' ' 'S' 'E' 'C' 'O'
             *          0x2330: 'N' 'D' ' ' 'L' 'I' 'N' 'E' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' '
             *          ...
             *          0x2BE0: ' ' ' ' 'E' 'N' 'D' ' ' 'O' 'F' ' ' 'L' 'A' 'S' 'T' ' ' 'L' 'I'
             *          0x2BF0: 'N' 'E' 7F  70  06  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..
             *          0x2C00: [AVO SCREEN RAM, IF ANY, BEGINS HERE]
             *
             *      ERRATA: The manual claims that if you change the byte at 0x2002 from 03 to 09, the number of "fill
             *      lines" will change from 2 to 5 (for 50Hz operation), but it shows 06 instead of 0C at location 0x200B;
             *      if you follow the links, it's pretty clear that byte has to be 0C to yield 5 "fill lines".  Since the
             *      address following the terminator at 0x2006 points to itself, it never makes sense for that terminator
             *      to be used EXCEPT at the end of the frame buffer.
             *
             *      As an alternative to tracking the monitor refresh rate, we could hard-code some knowledge about how
             *      the VT100's 8080 code uses memory, and simply ignore lines below address 0x22D0.  But the VT100 Video
             *      Processor makes no such assumption, and it would also break our test code in createFonts(), which
             *      builds a contiguous screen of test data starting at the default frame buffer address (0x2000).
             */
            this.rateMonitor = 60;

            /*
             * The default character-selectable attribute (reverse video vs. underline) is controlled by fUnderline.
             */
            this.fUnderline = false;

            this.abLineBuffer = new Array(this.nColsBuffer);
        }

        /*
         * Our 'smoothing' parameter defaults to null (which we treat the same as undefined), which means that
         * image smoothing will be selectively enabled (ie, true for text modes, false for graphics modes); otherwise,
         * we'll set image smoothing to whatever value was provided for ALL modes -- assuming the browser supports it.
         */
        if (this.sSmoothing) {
            this.contextScreen[this.sSmoothing] = (this.fSmoothing == null? false /* (this.nFormat == VideoX80.FORMAT.VT100? true : false) */ : this.fSmoothing);
        }

        return true;
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * @this {VideoX80}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea", "canvas")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "refresh")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        let video = this;

        /*
         * TODO: A more general-purpose binding mechanism would be nice someday....
         */
        if (sHTMLType == "led" || sHTMLType == "rled") {
            this.ledBindings[sBinding] = control;
            return true;
        }

        switch (sBinding) {
        case "fullScreen":
            this.bindings[sBinding] = control;
            if (this.container && this.container.doFullScreen) {
                control.onclick = function onClickFullScreen() {
                    video.printf(MESSAGE.DEBUG, "fullScreen()\n");
                    video.doFullScreen();
                };
            } else {
                this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "FullScreen API not available\n");
                control.parentNode.removeChild(/** @type {Node} */ (control));
            }
            return true;

        default:
            break;
        }
        return false;
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {VideoX80}
     * @param {ComputerX80} cmp
     * @param {BusX80} bus
     * @param {CPUStateX80} cpu
     * @param {DebuggerX80} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.cmp = cmp;
        this.bus = bus;
        this.cpu = cpu;
        this.dbg = dbg;

        /*
         * Allocate the frame buffer (as needed) along with all other buffers.
         */
        this.initBuffers();

        /*
         * If we have an associated keyboard, then ensure that the keyboard will be notified
         * whenever the canvas gets focus and receives input.
         */
        this.kbd = /** @type {KeyboardX80} */ (cmp.getMachineComponent("Keyboard"));
        if (this.kbd) {
            for (let s in this.ledBindings) {
                this.kbd.setBinding("led", s, this.ledBindings[s]);
            }
            if (this.canvasScreen) {
                this.kbd.setBinding(this.textareaScreen? "textarea" : "canvas", "screen", /** @type {HTMLElement} */ (this.inputScreen));
            }
        }

        let video = this;
        this.timerUpdateNext = this.cpu.addTimer(this.id, function() {
            video.updateScreen();
        });
        this.cpu.setTimer(this.timerUpdateNext, this.getRefreshTime());
        this.nUpdates = 0;

        if (!this.sFontROM) this.setReady();
    }

    /**
     * doneLoad(sURL, sFontData, nErrorCode)
     *
     * @this {VideoX80}
     * @param {string} sURL
     * @param {string} sFontData
     * @param {number} nErrorCode (response from server if anything other than 200)
     */
    doneLoad(sURL, sFontData, nErrorCode)
    {
        if (nErrorCode) {
            this.printf(MESSAGE.NOTICE, "Unable to load font ROM (error %d: %s)\n", nErrorCode, sURL);
            return;
        }

        Component.addMachineResource(this.idMachine, sURL, sFontData);

        try {
            /*
             * The most likely source of any exception will be here: parsing the JSON-encoded data.
             */
            let ab = eval("(" + sFontData + ")");

            let abFontData = ab['bytes'] || ab;

            if (!abFontData || !abFontData.length) {
                Component.error("Empty font ROM: " + sURL);
                return;
            }
            else if (abFontData.length == 1) {
                Component.error(abFontData[0]);
                return;
            }

            /*
             * Minimal font data validation, just to make sure we're not getting garbage from the server.
             */
            if (abFontData.length == 2048) {
                this.abFontData = abFontData;
                this.createFonts();
            }
            else {
                this.printf(MESSAGE.NOTICE, "Unrecognized font data length (%d)\n", abFontData.length);
                return;
            }

        } catch (e) {
            this.printf(MESSAGE.NOTICE, "Font ROM data error: %s\n", e.message);
            return;
        }

        /*
         * If we're still here, then we're ready!
         *
         * UPDATE: Per issue #21, I'm issuing setReady() *only* if a valid contextScreen exists *or* a Debugger is attached.
         *
         * TODO: Consider a more general-purpose solution for deciding whether or not the user wants to run in a "headless" mode.
         */
        if (this.contextScreen || this.dbg) this.setReady();
    }

    /**
     * createFonts()
     *
     * @this {VideoX80}
     * @returns {boolean}
     */
    createFonts()
    {
        /*
         * We retain abFontData in case we have to rebuild the fonts (eg, when we switch from 80 to 132 columns)
         */
        if (this.abFontData) {
            this.fDotStretcher = (this.nFormat == VideoX80.FORMAT.VT100);
            this.aFonts[VideoX80.VT100.FONT.NORML] = [
                this.createFontVariation(this.cxCell, this.cyCell),
                this.createFontVariation(this.cxCell, this.cyCell, this.fUnderline)
            ];
            this.aFonts[VideoX80.VT100.FONT.DWIDE] = [
                this.createFontVariation(this.cxCell*2, this.cyCell),
                this.createFontVariation(this.cxCell*2, this.cyCell, this.fUnderline)
            ];
            this.aFonts[VideoX80.VT100.FONT.DHIGH] = this.aFonts[VideoX80.VT100.FONT.DHIGH_BOT] = [
                this.createFontVariation(this.cxCell*2, this.cyCell*2),
                this.createFontVariation(this.cxCell*2, this.cyCell*2, this.fUnderline)
            ];
            return true;
        }
        return false;
    }

    /**
     * createFontVariation(cxCell, cyCell, fUnderline)
     *
     * This creates a 16x16 character grid for the requested font variation.  Variations include:
     *
     *      1) no variation (cell size is this.cxCell x this.cyCell)
     *      2) double-wide characters (cell size is this.cxCell*2 x this.cyCell)
     *      3) double-high double-wide characters (cell size is this.cxCell*2 x this.cyCell*2)
     *      4) any of the above with either reverse video or underline enabled (default is neither)
     *
     * @this {VideoX80}
     * @param {number} cxCell is the target width of each character in the grid
     * @param {number} cyCell is the target height of each character in the grid
     * @param {boolean} [fUnderline] (null for unmodified font, false for reverse video, true for underline)
     * @returns {Object}
     */
    createFontVariation(cxCell, cyCell, fUnderline)
    {
        /*
         * On a VT100, cxCell,cyCell is initially 10,10, but may change to 9,10 for 132-column mode.
         */



        /*
         * Create a font canvas that is both 16 times the target character width and the target character height,
         * ensuring that it will accommodate 16x16 characters (for a maximum of 256).  Note that the VT100 font ROM
         * defines only 128 characters, so that canvas will contain only 16x8 entries.
         */
        let nFontBytesPerChar = this.cxCellDefault <= 8? 8 : 16;
        let nFontByteOffset = nFontBytesPerChar > 8? 15 : 0;
        let nChars = this.abFontData.length / nFontBytesPerChar;

        /*
         * The absence of a boolean for fUnderline means that both fReverse and fUnderline are "falsey".  The presence
         * of a boolean means that fReverse will be true OR fUnderline will be true, but NOT both.
         */
        let fReverse = (fUnderline === false);

        let font = {cxCell: cxCell, cyCell: cyCell};
        font.canvas = document.createElement("canvas");
        font.canvas.width = cxCell * 16;
        font.canvas.height = cyCell * (nChars / 16);
        font.context = font.canvas.getContext("2d");

        let imageChar = font.context.createImageData(cxCell, cyCell);

        for (let iChar = 0; iChar < nChars; iChar++) {
            for (let y = 0, yDst = y; y < this.cyCell; y++) {
                let offFontData = iChar * nFontBytesPerChar + ((nFontByteOffset + y) & (nFontBytesPerChar - 1));
                let bits = (fUnderline && y == 8? 0xff : this.abFontData[offFontData]);
                for (let nRows = 0; nRows < (cyCell / this.cyCell); nRows++) {
                    let bitPrev = 0;
                    for (let x = 0, xDst = x; x < this.cxCell; x++) {
                        /*
                         * While x goes from 0 to cxCell-1, obviously we will run out of bits after x is 7;
                         * since the final bit must be replicated all the way to the right edge of the cell
                         * (so that line-drawing characters seamlessly connect), we ensure that the effective
                         * shift count remains stuck at 7 once it reaches 7.
                         */
                        let bitReal = bits & (0x80 >> (x > 7? 7 : x));
                        let bit = (this.fDotStretcher && !bitReal && bitPrev)? bitPrev : bitReal;
                        for (let nCols = 0; nCols < (cxCell / this.cxCell); nCols++) {
                            if (fReverse) bit = !bit;
                            this.setPixel(imageChar, xDst, yDst, bit? 1 : 0);
                            xDst++;
                        }
                        bitPrev = bitReal;
                    }
                    yDst++;
                }
            }
            /*
             * (iChar >> 4) performs the integer equivalent of Math.floor(iChar / 16), and (iChar & 0xf) is the equivalent of (iChar % 16).
             */
            font.context.putImageData(imageChar, (iChar & 0xf) * cxCell, (iChar >> 4) * cyCell);
        }
        return font;
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {VideoX80}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) {
            if (data) {
                if (!this.restore(data)) return false;
            }
        }
        /*
         * Because the VT100 frame buffer can be located anywhere in RAM (above 0x2000), we must defer this
         * test code until the powerUp() notification handler is called, when all RAM has (hopefully) been allocated.
         *
         * NOTE: The following test screen was useful for early testing, but a *real* VT100 doesn't display a test screen,
         * so this code is no longer enabled by default.  Remove MAXDEBUG if you want to see it again.
         */
        if (MAXDEBUG && this.nFormat == VideoX80.FORMAT.VT100) {
            /*
             * Build a test screen in the VT100 frame buffer; we'll mimic the "SET-UP A" screen, since it uses
             * all the font variations.  The process involves iterating over 0-based row numbers -2 (or -5 if 50Hz
             * operation is selected) through 24, checking aLineData for a matching row number, and converting the
             * corresponding string(s) to appropriate byte values.  Negative row numbers correspond to "fill lines"
             * and do not require a row entry.  If multiple strings are present for a given row, we invert the
             * default character attribute for subsequent strings.  An empty array ends the screen build process.
             */
            let aLineData = {
                 0: [VideoX80.VT100.FONT.DHIGH, 'SET-UP A'],
                 2: [VideoX80.VT100.FONT.DWIDE, 'TO EXIT PRESS "SET-UP"'],
                22: [VideoX80.VT100.FONT.NORML, '        T       T       T       T       T       T       T       T       T'],
                23: [VideoX80.VT100.FONT.NORML, '1234567890', '1234567890', '1234567890', '1234567890', '1234567890', '1234567890', '1234567890', '1234567890'],
                24: []
            };
            let addr = this.addrBuffer;
            let addrNext = -1, font = -1;
            let b, nFill = (this.rateMonitor == 60? 2 : 5);
            for (let iRow = -nFill; iRow < this.nRowsBuffer; iRow++) {
                let lineData = aLineData[iRow];
                if (addrNext >= 0) {
                    let fBreak = false;
                    addrNext = addr + 2;
                    if (!lineData) {
                        if (font == VideoX80.VT100.FONT.DHIGH) {
                            lineData = aLineData[iRow-1];
                            font = VideoX80.VT100.FONT.DHIGH_BOT;
                        }
                    }
                    else {
                        if (lineData.length) {
                            font = lineData[0];
                        } else {
                            addrNext = addr - 1;
                            fBreak = true;
                        }
                    }
                    b = (font & VideoX80.VT100.LINEATTR.FONTMASK) | ((addrNext >> 8) & VideoX80.VT100.LINEATTR.ADDRMASK) | VideoX80.VT100.LINEATTR.ADDRBIAS;
                    this.bus.setByteDirect(addr++, b);
                    this.bus.setByteDirect(addr++, addrNext & 0xff);
                    if (fBreak) break;
                }
                if (lineData) {
                    let attr = 0;
                    for (let j = 1; j < lineData.length; j++) {
                        let s = lineData[j];
                        for (let k = 0; k < s.length; k++) {
                            this.bus.setByteDirect(addr++, s.charCodeAt(k) | attr);
                        }
                        attr ^= 0x80;
                    }
                }
                this.bus.setByteDirect(addr++, VideoX80.VT100.LINETERM);
                addrNext = addr;
            }
            /*
             * NOTE: By calling updateVT100() directly, we are bypassing any checks that might block the update.
             */
            this.updateVT100();
        }
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {VideoX80}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
     */
    powerDown(fSave, fShutdown)
    {
        return !fSave || this.save();
    }

    /**
     * save()
     *
     * This implements save support for the VideoX80 component.
     *
     * @this {VideoX80}
     * @returns {Object|null}
     */
    save()
    {
        let state = new State(this);
        state.set(0, []);
        return state.data();
    }

    /**
     * restore(data)
     *
     * This implements restore support for the VideoX80 component.
     *
     * @this {VideoX80}
     * @param {Object} data
     * @returns {boolean} true if restore successful, false if not
     */
    restore(data)
    {
        return true;
    }

    /**
     * updateDimensions(nCols, nRows)
     *
     * Called from the ChipSet component whenever the screen dimensions have been dynamically altered.
     *
     * @this {VideoX80}
     * @param {number} nCols (should be either 80 or 132; 80 is the default)
     * @param {number} nRows (should be either 24 or 14; 24 is the default)
     */
    updateDimensions(nCols, nRows)
    {
        this.printf("updateDimensions(%d,%d)\n", nCols, nRows);
        this.nColsBuffer = nCols;
        /*
         * Even when the number of effective rows is 14 (or 15 counting the scroll line buffer), we want
         * to leave the number of rows at 24 (or 25 counting the scroll line buffer), because the VT100 doesn't
         * actually change character height (only character width).
         *
         *      this.nRowsBuffer = nRows+1; // +1 for scroll line buffer
         */
        this.cxCell = this.cxCellDefault;
        if (nCols > 80) this.cxCell--;      // VT100 font cells are 9x10 instead of 10x10 in 132-column mode
        if (this.initBuffers()) {
            this.createFonts();
        }
    }

    /**
     * updateRate(nRate)
     *
     * Called from the ChipSet component whenever the monitor refresh rate has been dynamically altered.
     *
     * @this {VideoX80}
     * @param {number} nRate (should be either 50 or 60; 60 is the default)
     */
    updateRate(nRate)
    {
        this.printf("updateRate(%d)\n", nRate);
        this.rateMonitor = nRate;
    }

    /**
     * updateScrollOffset(bScroll)
     *
     * Called from the ChipSet component whenever the screen scroll offset has been dynamically altered.
     *
     * @this {VideoX80}
     * @param {number} bScroll
     */
    updateScrollOffset(bScroll)
    {
        this.printf("updateScrollOffset(%s)\n", bScroll);
        if (this.bScrollOffset !== bScroll) {
            this.bScrollOffset = bScroll;
            /*
             * WARNING: If we immediately redraw the screen on the first wrap of the scroll offset back to zero,
             * we end up "slamming" the screen's contents back down again, because it seems that the frame buffer
             * contents haven't actually been scrolled yet.  So we redraw now ONLY if bScroll is non-zero, lest
             * we ruin the smooth-scroll effect.
             *
             * And this change, while necessary, is not sufficient, because another intervening updateScreen()
             * call could still occur before the frame buffer contents are actually scrolled; and ordinarily, if the
             * buffer hasn't changed, updateScreen() would do nothing, but alas, if the cursor happens to get toggled
             * in the interim, updateScreen() will want to update exactly ONE cell.
             *
             * So we deal with that by setting the fSkipSingleCellUpdate flag.  Now of course, there's no guarantee
             * that the next update of only ONE cell will always be a cursor update, but even if it isn't, skipping
             * that update doesn't seem like a huge cause for concern.
             */
            if (bScroll) {
                this.updateScreen(true);
            } else {
                this.fSkipSingleCellUpdate = true;
            }
        }
    }

    /**
     * doFullScreen()
     *
     * @this {VideoX80}
     * @returns {boolean} true if request successful, false if not (eg, failed OR not supported)
     */
    doFullScreen()
    {
        let fSuccess = false;
        if (this.container) {
            if (this.container.doFullScreen) {
                /*
                 * Styling the container with a width of "100%" and a height of "auto" works great when the aspect ratio
                 * of our virtual screen is at least roughly equivalent to the physical screen's aspect ratio, but now that
                 * we support virtual VGA screens with an aspect ratio of 1.33, that's very much out of step with modern
                 * wide-screen monitors, which usually have an aspect ratio of 1.6 or greater.
                 *
                 * And unfortunately, none of the browsers I've tested appear to make any attempt to scale our container to
                 * the physical screen's dimensions, so the bottom of our screen gets clipped.  To prevent that, I reduce
                 * the width from 100% to whatever percentage will accommodate the entire height of the virtual screen.
                 *
                 * NOTE: Mozilla recommends both a width and a height of "100%", but all my tests suggest that using "auto"
                 * for height works equally well, so I'm sticking with it, because "auto" is also consistent with how I've
                 * implemented a responsive canvas when the browser window is being resized.
                 */
                let sWidth = "100%";
                let sHeight = "auto";
                if (screen && screen.width && screen.height) {
                    let aspectPhys = screen.width / screen.height;
                    let aspectVirt = this.cxScreen / this.cyScreen;
                    if (aspectPhys > aspectVirt) {
                        sWidth = Math.round(aspectVirt / aspectPhys * 100) + '%';
                    }
                    // TODO: We may need to someday consider the case of a physical screen with an aspect ratio < 1.0....
                }
                if (!this.fGecko) {
                    this.container.style.width = sWidth;
                    this.container.style.height = sHeight;
                } else {
                    /*
                     * Sadly, the above code doesn't work for Firefox, because as http://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode
                     * explains:
                     *
                     *      'It's worth noting a key difference here between the Gecko and WebKit implementations at this time:
                     *      Gecko automatically adds CSS rules to the element to stretch it to fill the screen: "width: 100%; height: 100%".
                     *
                     * Which would be OK if Gecko did that BEFORE we're called, but apparently it does that AFTER, effectively
                     * overwriting our careful calculations.  So we style the inner element (canvasScreen) instead, which
                     * requires even more work to ensure that the canvas is properly centered.  FYI, this solution is consistent
                     * with Mozilla's recommendation for working around their automatic CSS rules:
                     *
                     *      '[I]f you're trying to emulate WebKit's behavior on Gecko, you need to place the element you want
                     *      to present inside another element, which you'll make fullscreen instead, and use CSS rules to adjust
                     *      the inner element to match the appearance you want.'
                     */
                    this.canvasScreen.style.width = sWidth;
                    this.canvasScreen.style.width = sWidth;
                    this.canvasScreen.style.display = "block";
                    this.canvasScreen.style.margin = "auto";
                }
                this.container.style.backgroundColor = "black";
                this.container.doFullScreen();
                fSuccess = true;
            }
            this.setFocus();
        }
        return fSuccess;
    }

    /**
     * notifyFullScreen(fFullScreen)
     *
     * @this {VideoX80}
     * @param {boolean} [fFullScreen] (undefined if there was a full-screen error)
     */
    notifyFullScreen(fFullScreen)
    {
        if (!fFullScreen && this.container) {
            if (!this.fGecko) {
                this.container.style.width = this.container.style.height = "";
            } else {
                this.canvasScreen.style.width = this.canvasScreen.style.height = "";
            }
        }
        this.printf("notifyFullScreen(%s)\n", fFullScreen);
    }

    /**
     * setFocus()
     *
     * @this {VideoX80}
     */
    setFocus()
    {
        if (this.inputScreen) this.inputScreen.focus();
    }

    /**
     * getRefreshTime()
     *
     * @this {VideoX80}
     * @returns {number} (number of milliseconds per refresh)
     */
    getRefreshTime()
    {
        return 1000 / Math.max(this.rateRefresh, this.rateInterrupt);
    }

    /**
     * initCellCache(nCells)
     *
     * Initializes the contents of our internal cell cache.
     *
     * @this {VideoX80}
     * @param {number} nCells
     */
    initCellCache(nCells)
    {
        this.nCellCache = nCells;
        this.fCellCacheValid = false;
        if (this.aCellCache === undefined || this.aCellCache.length != this.nCellCache) {
            this.aCellCache = new Array(this.nCellCache);
        }
    }

    /**
     * initColors()
     *
     * This creates an array of nColors, with additional OVERLAY_TOTAL colors tacked on to the end of the array.
     *
     * @this {VideoX80}
     */
    initColors()
    {
        let rgbBlack  = [0x00, 0x00, 0x00, 0xff];
        let rgbWhite  = [0xff, 0xff, 0xff, 0xff];
        this.nColors = (1 << this.nBitsPerPixel);
        this.aRGB = new Array(this.nColors + VideoX80.COLORS.OVERLAY_TOTAL);
        this.aRGB[0] = rgbBlack;
        this.aRGB[1] = rgbWhite;
        if (this.nFormat == VideoX80.FORMAT.SI1978) {
            let rgbGreen  = [0x00, 0xff, 0x00, 0xff];
            //noinspection UnnecessaryLocalVariableJS
            let rgbYellow = [0xff, 0xff, 0x00, 0xff];
            this.aRGB[this.nColors + VideoX80.COLORS.OVERLAY_TOP] = rgbYellow;
            this.aRGB[this.nColors + VideoX80.COLORS.OVERLAY_BOTTOM] = rgbGreen;
        }
    }

    /**
     * setPixel(image, x, y, bPixel)
     *
     * @this {VideoX80}
     * @param {Object} image
     * @param {number} x
     * @param {number} y
     * @param {number} bPixel (ie, an index into aRGB)
     */
    setPixel(image, x, y, bPixel)
    {
        let index;
        if (!this.rotateBuffer) {
            index = (x + y * image.width);
        } else {
            index = (image.height - x - 1) * image.width + y;
        }
        if (bPixel && this.nFormat == VideoX80.FORMAT.SI1978) {
            if (x >= 208 && x < 236) {
                bPixel = this.nColors + VideoX80.COLORS.OVERLAY_TOP;
            }
            else if (x >= 28 && x < 72) {
                bPixel = this.nColors + VideoX80.COLORS.OVERLAY_BOTTOM;
            }
        }
        let rgb = this.aRGB[bPixel];
        index *= rgb.length;
        image.data[index] = rgb[0];
        image.data[index+1] = rgb[1];
        image.data[index+2] = rgb[2];
        image.data[index+3] = rgb[3];
    }

    /**
     * updateChar(idFont, col, row, data, context)
     *
     * Updates a particular character cell (row,col) in the associated window.
     *
     * @this {VideoX80}
     * @param {number} idFont
     * @param {number} col
     * @param {number} row
     * @param {number} data
     * @param {Object} [context]
     */
    updateChar(idFont, col, row, data, context)
    {
        let bChar = data & 0x7f;
        let font = this.aFonts[idFont][(data & 0x80)? 1 : 0];
        if (!font) return;

        let xSrc = (bChar & 0xf) * font.cxCell;
        let ySrc = (bChar >> 4) * font.cyCell;

        let xDst, yDst, cxDst, cyDst;

        let cxSrc = font.cxCell;
        let cySrc = font.cyCell;

        if (context) {
            xDst = col * this.cxCell;
            yDst = row * this.cyCell;
            cxDst = this.cxCell;
            cyDst = this.cyCell;
        } else {
            xDst = col * this.cxScreenCell;
            yDst = row * this.cyScreenCell;
            cxDst = this.cxScreenCell;
            cyDst = this.cyScreenCell;
        }

        /*
         * If font.cxCell > this.cxCell, then we assume the caller wants to draw a double-wide character,
         * so we will double xDst and cxDst.
         */
        if (font.cxCell > this.cxCell) {
            xDst *= 2;
            cxDst *= 2;

        }

        /*
         * If font.cyCell > this.cyCell, then we rely on idFont to indicate whether the top half or bottom half
         * of the character should be drawn.
         */
        if (font.cyCell > this.cyCell) {
            if (idFont == VideoX80.VT100.FONT.DHIGH_BOT) ySrc += this.cyCell;
            cySrc = this.cyCell;

        }

        if (context) {
            context.drawImage(font.canvas, xSrc, ySrc, cxSrc, cySrc, xDst, yDst, cxDst, cyDst);
        } else {
            xDst += this.xScreenOffset;
            yDst += this.yScreenOffset;
            this.contextScreen.drawImage(font.canvas, xSrc, ySrc, cxSrc, cySrc, xDst, yDst, cxDst, cyDst);
        }
    }

    /**
     * updateVT100(fForced)
     *
     * @this {VideoX80}
     * @param {boolean} [fForced]
     */
    updateVT100(fForced)
    {
        let addrNext = this.addrBuffer, fontNext = -1;

        let font, nRows = 0;
        let nFill = (this.rateMonitor == 60? 2 : 5);
        let iCell = 0, cUpdated = 0, iCellUpdated = -1;



        while (nRows < this.nRowsBuffer) {
            /*
             * Populate the line buffer
             */
            let nCols = 0;
            let addr = addrNext;
            let nColsVisible = this.nColsBuffer;
            font = fontNext;
            if (font != VideoX80.VT100.FONT.NORML) nColsVisible >>= 1;
            while (true) {
                let data = this.bus.getByteDirect(addr++);
                if ((data & VideoX80.VT100.LINETERM) == VideoX80.VT100.LINETERM) {
                    let b = this.bus.getByteDirect(addr++);
                    fontNext = b & VideoX80.VT100.LINEATTR.FONTMASK;
                    addrNext = ((b & VideoX80.VT100.LINEATTR.ADDRMASK) << 8) | this.bus.getByteDirect(addr);
                    addrNext += (b & VideoX80.VT100.LINEATTR.ADDRBIAS)? VideoX80.VT100.ADDRBIAS_LO : VideoX80.VT100.ADDRBIAS_HI;
                    break;
                }
                if (nCols < nColsVisible) {
                    this.abLineBuffer[nCols++] = data;
                } else {
                    break;                          // ideally, we would wait for a LINETERM byte, but it's not safe to loop without limit
                }
            }

            /*
             * Skip the first few "fill lines"
             */
            if (nFill) {
                nFill--;
                continue;
            }

            /*
             * Pad the line buffer as needed
             */
            while (nCols < this.abLineBuffer.length) {
                this.abLineBuffer[nCols++] = 0;     // character code 0 is a empty font character
            }

            /*
             * Display the line buffer; ordinarily, the font number would be valid after processing the "fill lines",
             * but if the buffer isn't initialized yet, those lines might be missing, so the font number might not be set.
             */
            if (font >= 0) {
                /*
                 * Cell cache logic is complicated by the fact that a line may be single-width one frame and double-width
                 * the next.  So we store the visible line length at the start of each row in the cache, which must match if
                 * the cache can be considered valid for the current line.
                 */
                let fLineCacheValid = this.fCellCacheValid && (this.aCellCache[iCell] == nColsVisible);
                this.aCellCache[iCell++] = nColsVisible;
                for (let iCol = 0; iCol < nCols; iCol++) {
                    let data = this.abLineBuffer[iCol];
                    if (!fLineCacheValid || data !== this.aCellCache[iCell]) {
                        this.aCellCache[iCellUpdated = iCell] = data;
                        this.updateChar(font, iCol, nRows, data, this.contextBuffer);
                        cUpdated++;
                    }
                    iCell++;
                }
            }
            nRows++;
        }

        this.fCellCacheValid = true;



        if (!fForced && this.fSkipSingleCellUpdate && cUpdated == 1) {
            /*
             * We're going to blow off this update, since it comes on the heels of a smooth-scroll that *may*
             * not be completely finished yet, and at the same time, we're going to zap the only updated cell
             * cache entry, to guarantee that it's redrawn on the next update.
             */

            /*
             * TODO: If I change the RECV rate to 19200 and enable smooth scrolling, I sometimes see a spurious
             * "H" on the bottom line after a long series of "HELLO WORLD!\r\n" tests.  Dumping video memory shows
             * "HELLO WORLD!" on 23 lines and an "H" on the 24th line, so it's really there.  But strangely, if
             * I then press SET-UP two times, the restored screen does NOT have the spurious "H".  So somehow the
             * firmware knows what should and shouldn't be on-screen.
             *
             * Possible VT100 firmware bug?  I'm not sure.  Anyway, this DEBUG-only code is here to help trap
             * that scenario, until I figure it out.
             */
            if (DEBUG && (this.aCellCache[iCellUpdated] & 0x7f) == 0x48) {
                console.log("spurious character?");
            }
            this.aCellCache[iCellUpdated] = -1;
            cUpdated = 0;
        }
        this.fSkipSingleCellUpdate = false;

        if ((cUpdated || fForced) && this.contextBuffer) {
            /*
             * We must subtract cyCell from cyBuffer to avoid displaying the extra "scroll line" that we normally
             * buffer, in support of smooth scrolling.  Speaking of which, we must also add bScrollOffset to ySrc
             * (well, ySrc is always relative to zero, so no add is actually required).
             */
            this.contextScreen.drawImage(
                this.canvasBuffer,
                0,                                  // xSrc
                this.bScrollOffset,                 // ySrc
                this.cxBuffer,                      // cxSrc
                this.cyBuffer - this.cyCell,        // cySrc
                this.xScreenOffset,                 // xDst
                this.yScreenOffset,                 // yDst
                this.cxScreenOffset,                // cxDst
                this.cyScreenOffset                 // cyDst
            );
        }
    }

    /**
     * updateScreen(fForced)
     *
     * Propagates the video buffer to the cell cache and updates the screen with any changes.  Forced updates
     * are generally internal updates triggered by an I/O operation or other state change, while non-forced updates
     * are the periodic updates coming from the CPU.
     *
     * For every cell in the video buffer, compare it to the cell stored in the cell cache, render if it differs,
     * and then update the cell cache to match.  Since initCellCache() sets every cell in the cell cache to an
     * invalid value, we're assured that the next call to updateScreen() will redraw the entire (visible) video buffer.
     *
     * @this {VideoX80}
     * @param {boolean} [fForced]
     */
    updateScreen(fForced)
    {
        let fUpdate = true;

        if (!fForced) {
            if (this.rateInterrupt) {
                /*
                 * TODO: Incorporate these hard-coded interrupt vector numbers into configuration blocks.
                 */
                if (this.rateInterrupt == 120) {
                    if (!(this.nUpdates & 1)) {
                        /*
                         * On even updates, call cpu.requestINTR(1), and also update our copy of the screen.
                         */
                        this.cpu.requestINTR(1);
                    } else {
                        /*
                         * On odd updates, call cpu.requestINTR(2), but do NOT update our copy of the screen, because
                         * the machine has presumably only updated the top half of the frame buffer at this point; it will
                         * update the bottom half of the frame buffer after acknowledging this interrupt.
                         */
                        this.cpu.requestINTR(2);
                        fUpdate = false;
                    }
                } else {
                    this.cpu.requestINTR(4);
                }
            }

            /*
             * Since this is not a forced update, if our cell cache is valid AND we allocated our own buffer AND the buffer
             * is clean, then there's nothing to do.
             */
            if (fUpdate && this.fCellCacheValid && this.sizeBuffer) {
                if (this.bus.cleanMemory(this.addrBuffer, this.sizeBuffer)) {
                    fUpdate = false;
                }
            }
            this.cpu.setTimer(this.timerUpdateNext, this.getRefreshTime());
            this.nUpdates++;
        }

        if (!fUpdate) {
            return;
        }

        if (this.cxCell > 1) {
            this.updateScreenText(fForced);
        } else {
            this.updateScreenGraphics(fForced);
        }
    }

    /**
     * updateScreenText(fForced)
     *
     * @this {VideoX80}
     * @param {boolean} [fForced]
     */
    updateScreenText(fForced)
    {
        switch(this.nFormat) {
        case VideoX80.FORMAT.VT100:
            this.updateVT100(fForced);
            break;
        }
    }

    /**
     * updateScreenGraphics(fForced)
     *
     * @this {VideoX80}
     * @param {boolean} [fForced]
     */
    updateScreenGraphics(fForced)
    {
        let addr = this.addrBuffer;
        let addrLimit = addr + this.sizeBuffer;

        let iCell = 0;
        let nPixelShift = 1;

        let xBuffer = 0, yBuffer = 0;
        let xDirty = this.cxBuffer, xMaxDirty = 0, yDirty = this.cyBuffer, yMaxDirty = 0;

        let nShiftInit = 0;
        let nShiftPixel = this.nBitsPerPixel;
        let nMask = (1 << nShiftPixel) - 1;
        if (this.iBitFirstPixel) {
            nShiftPixel = -nShiftPixel;
            nShiftInit = 16 + nShiftPixel;
        }

        while (addr < addrLimit) {
            let data = this.bus.getShortDirect(addr);

            if (this.fCellCacheValid && data === this.aCellCache[iCell]) {
                xBuffer += this.nPixelsPerCell;
            } else {
                this.aCellCache[iCell] = data;
                let nShift = nShiftInit;
                if (nShift) data = ((data >> 8) | ((data & 0xff) << 8));
                if (xBuffer < xDirty) xDirty = xBuffer;
                let cPixels = this.nPixelsPerCell;
                while (cPixels--) {
                    let bPixel = (data >> nShift) & nMask;
                    this.setPixel(this.imageBuffer, xBuffer++, yBuffer, bPixel);
                    nShift += nShiftPixel;
                }
                if (xBuffer > xMaxDirty) xMaxDirty = xBuffer;
                if (yBuffer < yDirty) yDirty = yBuffer;
                if (yBuffer >= yMaxDirty) yMaxDirty = yBuffer + 1;
            }
            addr += 2; iCell++;
            if (xBuffer >= this.cxBuffer) {
                xBuffer = 0; yBuffer++;
                if (yBuffer > this.cyBuffer) break;
            }
        }

        this.fCellCacheValid = true;

        /*
         * Instead of blasting the ENTIRE imageBuffer into contextBuffer, and then blasting the ENTIRE
         * canvasBuffer onto contextScreen, even for the smallest change, let's try to be a bit smarter about
         * the update (well, to the extent that the canvas APIs permit).
         */
        if (xDirty < this.cxBuffer) {
            let cxDirty = xMaxDirty - xDirty;
            let cyDirty = yMaxDirty - yDirty;
            if (this.rotateBuffer) {
                /*
                 * If rotateBuffer is set, then it must be -90, so we must "rotate" the dirty coordinates as well,
                 * because they are relative to the frame buffer, not the rotated image buffer.  Alternatively, you
                 * can use the following call to blast the ENTIRE imageBuffer into contextBuffer instead:
                 *
                 *      this.contextBuffer.putImageData(this.imageBuffer, 0, 0);
                 */
                let xDirtyOrig = xDirty, cxDirtyOrig = cxDirty;
                //noinspection JSSuspiciousNameCombination
                xDirty = yDirty;
                cxDirty = cyDirty;
                yDirty = this.cxBuffer - (xDirtyOrig + cxDirtyOrig);
                cyDirty = cxDirtyOrig;
            }
            this.contextBuffer.putImageData(this.imageBuffer, 0, 0, xDirty, yDirty, cxDirty, cyDirty);
            /*
             * As originally noted in /machines/pcx86/modules/v2/video.js, I would prefer to draw only the dirty portion
             * of canvasBuffer, but there usually isn't a 1-1 pixel mapping between canvasBuffer and contextScreen, so
             * if we draw interior rectangles, we can end up with subpixel artifacts along the edges of those rectangles.
             */
            this.contextScreen.drawImage(this.canvasBuffer, 0, 0, this.canvasBuffer.width, this.canvasBuffer.height, 0, 0, this.cxScreen, this.cyScreen);
        }
    }

    /**
     * VideoX80.init()
     *
     * This function operates on every HTML element of class "video", extracting the
     * JSON-encoded parameters for the Video constructor from the element's "data-value"
     * attribute, invoking the constructor to create a Video component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        let aeVideo = Component.getElementsByClass(APPCLASS, "video");
        for (let iVideo = 0; iVideo < aeVideo.length; iVideo++) {

            let element = aeVideo[iVideo];
            let parmsVideo = Component.getComponentParms(element);

            /*
             * We used to create the canvas element ourselves:
             *
             *      let canvas = document.createElement("canvas");
             *
             * and then update its properties to match those specified in parmsVideo:
             *
             *      canvas.setAttribute("class", "pcjs-canvas");
             *      canvas.setAttribute("width", parmsVideo['screenWidth']);
             *      canvas.setAttribute("height", parmsVideo['screenHeight']);
             *
             * but now we prefer to let the XSL template create the canvas element for us, so that the HTML
             * we inject into the page is as fully-formed as possible, keeping disruption of page layout to a
             * minimum.
             */
            let canvas, context;
            let aCanvas = Component.getElementsByClass("pcjs-canvas", "", element);
            if (aCanvas && aCanvas.length && aCanvas[0].getContext) {
                canvas = aCanvas[0];
                canvas.style.backgroundColor = parmsVideo['screenColor'];
                context = canvas.getContext("2d");
            } else {
                element.innerHTML = "<br>Missing &lt;canvas&gt; support. Please try a newer web browser.";
            }

            /*
             * The "contenteditable" attribute on a canvas element NOTICEABLY slows down canvas drawing on
             * Safari as soon as you give the canvas focus (ie, click away from the canvas, and drawing speeds
             * up; click on the canvas, and drawing slows down).  So the "transparent textarea hack" that we
             * once employed as only a work-around for Android devices is now our default.
             *
             *      canvas.setAttribute("contenteditable", "true");
             *
             * HACK: A canvas style of "auto" provides for excellent responsive canvas scaling in EVERY browser
             * except IE9/IE10, so I recalculate the appropriate CSS height every time the parent DIV is resized;
             * IE11 works without this hack, so we take advantage of the fact that IE11 doesn't identify as "MSIE".
             *
             * The other reason it's good to keep this particular hack limited to IE9/IE10 is that most other
             * browsers don't actually support an 'onresize' handler on anything but the window object.
             */
            if (WebLib.getUserAgent().indexOf("MSIE") >= 0) {
                element['onresize'] = function(eParent, eChild, cx, cy) {
                    return function onResizeVideo() {
                        eChild.style.height = (((eParent.clientWidth * cy) / cx) | 0) + "px";
                    };
                }(element, canvas, parmsVideo['screenWidth'], parmsVideo['screenHeight']);
                element['onresize']();
            }

            /*
             * The following is a related hack that allows the user to force the screen to use a particular aspect
             * ratio if an 'aspect' attribute or URL parameter is set.  Initially, it's just for testing purposes
             * until we figure out a better UI.  And note that we use our WebLib.addPageEvent() helper function to make
             * sure we don't trample any other 'onresize' handler(s) attached to the window object.
             */
            let aspect = +(parmsVideo['aspect'] || WebLib.getURLParm('aspect'));

            /*
             * No 'aspect' parameter yields NaN, which is falsey, and anything else must satisfy my arbitrary
             * constraints of 0.3 <= aspect <= 3.33, to prevent any useless (or worse, browser-blowing) results.
             */
            if (aspect && aspect >= 0.3 && aspect <= 3.33) {
                WebLib.addPageEvent('resize', function(eParent, eChild, aspectRatio) {
                    return function onResizeWindow() {
                        /*
                         * Since aspectRatio is the target width/height, we have:
                         *
                         *      eParent.clientWidth / eChild.style.height = aspectRatio
                         *
                         * which means that:
                         *
                         *      eChild.style.height = eParent.clientWidth / aspectRatio
                         *
                         * so for example, if aspectRatio is 16:9, or 1.78, and clientWidth = 640,
                         * then the calculated height should approximately 360.
                         */
                        eChild.style.height = ((eParent.clientWidth / aspectRatio)|0) + "px";
                    };
                }(element, canvas, aspect));
                window['onresize']();
            }

            /*
             * HACK: Android-based browsers, like the Silk (Amazon) browser and Chrome for Android, don't honor the
             * "contenteditable" attribute; that is, when the canvas receives focus, they don't activate the on-screen
             * keyboard.  So my fallback is to create a transparent textarea on top of the canvas.
             *
             * The parent DIV must have a style of "position:relative" (alternatively, a class of "pcjs-container"),
             * so that we can position the textarea using absolute coordinates.  Also, we don't want the textarea to be
             * visible, but we must use "opacity:0" instead of "visibility:hidden", because the latter seems to prevent
             * the element from receiving events.  These styling requirements are taken care of in components.css
             * (see references to the "pcjs-video-object" class).
             *
             * UPDATE: Unfortunately, Android keyboards like to compose whole words before transmitting any of the
             * intervening characters; our textarea's keyDown/keyUp event handlers DO receive intervening key events,
             * but their keyCode property is ZERO.  Virtually the only usable key event we receive is the Enter key.
             * Android users will have to use machines that include their own on-screen "soft keyboard", or use an
             * external keyboard.
             *
             * The following attempt to use a password-enabled input field didn't work any better on Android.  You could
             * clearly see the overlaid semi-transparent input field, but none of the input characters were passed along,
             * with the exception of the "Go" (Enter) key.
             *
             *      var input = document.createElement("input");
             *      input.setAttribute("type", "password");
             *      input.setAttribute("style", "position:absolute; left:0; top:0; width:100%; height:100%; opacity:0.5");
             *      element.appendChild(input);
             *
             * See this Chromium issue for more information: https://code.google.com/p/chromium/issues/detail?id=118639
             */
            let textarea;
            if (globals.browser) {
                textarea = document.createElement("textarea");
                /*
                * As noted in keyboard.js, the keyboard on an iOS device tends to pop up with the SHIFT key depressed,
                * which is not the initial keyboard state that the Keyboard component expects, so hopefully turning off
                * these "auto" attributes will help.
                */
                if (WebLib.isUserAgent("iOS")) {
                    textarea.setAttribute("autocapitalize", "off");
                    textarea.setAttribute("autocorrect", "off");
                    textarea.setAttribute("spellcheck", "false");
                    /*
                    * One of the problems on iOS devices is that after a soft-key control is clicked, we need to give
                    * focus back to the above textarea, usually by calling cmp.updateFocus(), but in doing so, iOS may
                    * also "zoom" the page rather jarringly.  While it's a simple matter to completely disable zooming,
                    * by fiddling with the page's viewport, that prevents the user from intentionally zooming.  A bit of
                    * Googling reveals that another way to prevent those jarring unintentional zooms is to simply set the
                    * font-size of the text control to 16px.  So that's what we do.
                    */
                    textarea.style.fontSize = "16px";
                }
                element.appendChild(textarea);
            }

            /*
             * Now we can create the Video object, record it, and wire it up to the associated document elements.
             */
            let video = new VideoX80(parmsVideo, canvas, context, textarea /* || input */, element);

            /*
             * Bind any video-specific controls (eg, the Refresh button). There are no essential controls, however;
             * even the "Refresh" button is just a diagnostic tool, to ensure that the screen contents are up-to-date.
             */
            Component.bindComponentControls(video, element, APPCLASS);
        }
    }
}

VideoX80.COLORS = {
    OVERLAY_TOP:    0,
    OVERLAY_BOTTOM: 1,
    OVERLAY_TOTAL:  2
};

VideoX80.FORMAT = {
    UNKNOWN:        0,
    SI1978:         1,
    VT100:          2
};

VideoX80.FORMATS = {
    "SI1978":       VideoX80.FORMAT.SI1978,
    "VT100":        VideoX80.FORMAT.VT100
};


VideoX80.VT100 = {
    /*
     * The following font IDs are nothing more than all the possible LINEATTR values masked with FONTMASK;
     * also, note that double-high implies double-wide; the VT100 doesn't support a double-high single-wide font.
     */
    FONT: {
        NORML:      0x60,       // normal font (eg, 10x10)
        DWIDE:      0x40,       // double-wide, single-high font (eg, 20x10)
        DHIGH:      0x20,       // technically, this means display only the TOP half of the double-high font (eg, 20x20)
        DHIGH_BOT:  0x00        // technically, this means display only the BOTTOM half of the double-high font (eg, 20x20)
    },
    LINETERM:       0x7F,
    LINEATTR: {
        ADDRMASK:   0x0F,
        ADDRBIAS:   0x10,       // 0x10 == ADDRBIAS_LO, 0x00 = ADDRBIAS_HI
        FONTMASK:   0x60,
        SCROLL:     0x80
    },
    ADDRBIAS_LO:    0x2000,
    ADDRBIAS_HI:    0x4000
};

/*
 * Initialize every Video module on the page.
 */
WebLib.onInit(VideoX80.init);

/**
 * @copyright https://www.pcjs.org/machines/pcx80/modules/v2/serial.js (C) 2012-2025 Jeff Parsons
 */

/**
 * SerialPortX80 class
 *
 * The class property declarations below started as a way of informing the code inspector of the controlBuffer
 * property, which remained undefined until a setBinding() call set it later, but I've since decided that explicitly
 * initializing such properties in the constructor is a better way to go -- even though it's more code -- because
 * JavaScript compilers are supposed to be happier when the underlying object structures aren't constantly changing.
 *
 * Besides, I'm not sure I want to get into documenting every property this way, for this or any/every other class,
 * let alone getting into which ones should be considered private or protected, because PCjs isn't really a library
 * for third-party apps.
 *
 * @class SerialPortX80
 * @property {number} iAdapter
 * @property {number} portBase
 * @property {number} nIRQ
 * @property {Object} controlBuffer is a DOM element bound to the port (for rudimentary output; see transmitByte())
 * @unrestricted
 */
class SerialPortX80 extends Component {
    /**
     * SerialPortX80(parmsSerial)
     *
     * The SerialPortX80 component has the following component-specific (parmsSerial) properties:
     *
     *      adapter: 0 if not defined
     *
     *      binding: name of a control (based on its "binding" attribute) to bind to this port's I/O
     *
     *      tabSize: set to a non-zero number to convert tabs to spaces (applies only to output to
     *      the above binding); default is 0 (no conversion)
     *
     * In the future, we may support 'port' and 'irq' properties that allow the machine to define a
     * non-standard serial port configuration, instead of only our pre-defined 'adapter' configurations.
     *
     * NOTE: Since the XSL file defines 'adapter' as a number, not a string, there's no need to use
     * parseInt(), and as an added benefit, we don't need to worry about whether a hex or decimal format
     * was used.
     *
     * @this {SerialPortX80}
     * @param {Object} parmsSerial
     */
    constructor(parmsSerial)
    {
        super("SerialPort", parmsSerial, MESSAGE.SERIAL);

        this.iAdapter = +parmsSerial['adapter'];

        switch (this.iAdapter) {
        case 0:
            this.portBase = 0;
            this.nIRQ = 2;
            break;
        default:
            Component.warning("Unrecognized serial adapter #" + this.iAdapter);
            return;
        }
        /**
         * consoleBuffer becomes a string that records serial port output if the 'binding' property is set to the
         * reserved name "console".  Nothing is written to the console, however, until a linefeed (0x0A) is output
         * or the string length reaches a threshold (currently, 1024 characters).
         *
         * @type {string|null}
         */
        this.consoleBuffer = null;

        /**
         * controlBuffer is a DOM element bound to the port (currently used for output only; see transmitByte()).
         *
         * @type {Object}
         */
        this.controlBuffer = null;

        /*
         * If controlBuffer is being used AND 'tabSize' is set, then we make an attempt to monitor the characters
         * being echoed via transmitByte(), maintain a logical column position, and convert any tabs into the appropriate
         * number of spaces.
         *
         * charBOL, if nonzero, is a character to automatically output at the beginning of every line.  This probably
         * isn't generally useful; I use it internally to preformat serial output.
         */
        this.tabSize = parmsSerial['tabSize'];
        this.charBOL = parmsSerial['charBOL'];
        this.iLogicalCol = 0;

        /*
         * fAutoXOFF enables some experimental auto-XOFF/XON processing.  It assumes if the VT100 firmware
         * issues an XOFF, receiveByte() should stop accepting more data until the firmware issues an XOFF.
         *
         * The downside is that this doesn't really do anything to stem the flow of incoming data; it just
         * prevents the VT100's internal buffer from overflowing.  TODO: Eliminate the need for this hack
         * and add some *real* flow-control interfaces between connected SerialPort components.
         */
        this.fAutoXOFF = true;
        this.fAutoStop = false;
        this.fNullModem = true;

        let sBinding = parmsSerial['binding'];
        if (sBinding == "console") {
            this.consoleBuffer = "";
        } else {
            /*
             * If the SerialPort wants to bind to a control (eg, "print") in a DIFFERENT component (eg, "Panel"),
             * then it specifies the name of that control with the 'binding' property.  The SerialPort constructor
             * will then call bindExternalControl(), which looks up the control, and then passes it to our own
             * setBinding() handler.
             *
             * For bindExternalControl() to succeed, it also need to know the target component; for now, that's
             * been hard-coded to "Panel", in part because that's one of the few components we can rely upon
             * initializing before we do, but it would be a simple matter to include a component type or ID as part
             * of the 'binding' property as well, if we need more flexibility later.
             *
             * NOTE: If sBinding is not the name of a valid Control Panel DOM element, this call does nothing.
             */
            Component.bindExternalControl(this, sBinding);
        }

        /*
         * No connection until initConnection() is called.
         */
        this.sDataReceived = "";
        this.connection = this.sendData = this.updateStatus = null;

        /*
         * Export all functions required by initConnection().
         */
        this['exports'] = {
            'connect': this.initConnection,
            'receiveData': this.receiveData,
            'receiveStatus': this.receiveStatus
        };
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * @this {SerialPortX80}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea", "canvas")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "buffer")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        let serial = this;

        if (!sHTMLType || sHTMLType == "textarea") {

            this.bindings[sBinding] = this.controlBuffer = control;

            /*
             * By establishing an onkeypress handler here, we make it possible for DOS commands like
             * "CTTY COM1" to more or less work (use "CTTY CON" to restore control to the DOS console).
             */
            control.onkeydown = function onKeyDown(event) {
                /*
                 * This is required in addition to onkeypress, because it's the only way to prevent
                 * BACKSPACE (keyCode 8) from being interpreted by the browser as a "Back" operation;
                 * moreover, not all browsers generate an onkeypress notification for BACKSPACE.
                 *
                 * A related problem exists for Ctrl-key combinations in most Windows-based browsers
                 * (eg, IE, Edge, Chrome for Windows, etc), because keys like Ctrl-C and Ctrl-S have
                 * special meanings (eg, Copy, Save).  To the extent the browser will allow it, we
                 * attempt to disable that default behavior when this control receives an onkeydown
                 * event for one of those keys (probably the only event the browser generates for them).
                 */
                event = event || globals.window.event;
                let keyCode = event.keyCode;
                if (keyCode === 0x08 || event.ctrlKey && keyCode >= 0x41 && keyCode <= 0x5A) {
                    if (event.preventDefault) event.preventDefault();
                    if (keyCode > 0x40) keyCode -= 0x40;
                    serial.receiveByte(keyCode);
                }
                return true;
            };

            control.onkeypress = function onKeyPress(event) {
                /*
                 * Browser-independent keyCode extraction; refer to onKeyPress() and the other key event
                 * handlers in keyboard.js.
                 */
                event = event || globals.window.event;
                let keyCode = event.which || event.keyCode;
                serial.receiveByte(keyCode);
                /*
                 * Since we're going to remove the "readonly" attribute from the <textarea> control
                 * (so that the soft keyboard activates on iOS), instead of calling preventDefault() for
                 * selected keys (eg, the SPACE key, whose default behavior is to scroll the page), we must
                 * now call it for *all* keys, so that the keyCode isn't added to the control immediately,
                 * on top of whatever the machine is echoing back, resulting in double characters.
                 */
                if (event.preventDefault) event.preventDefault();
                return true;
            };

            /*
             * Now that we've added an onkeypress handler that calls preventDefault() for ALL keys, the control
             * itself no longer needs the "readonly" attribute; we primarily need to remove it for iOS browsers,
             * so that the soft keyboard will activate, but it shouldn't hurt to remove the attribute for all browsers.
             */
            control.removeAttribute("readonly");
            return true;
        }

        if (sValue) {
            /*
             * Instead of just having a dedicated "test" control, we now treat any unrecognized control with
             * a "value" attribute as a test control.  The only caveat is that such controls must have binding IDs
             * that do not conflict with predefined controls (which, of course, is the only way you can get here).
             */
            this.bindings[sBinding] = control;

            /*
             * Backslash sequences like \n, \r, and \\ have already been converted to LF, CR and backslash
             * characters, by virtue of the eval() function that all our component parameter strings pass through;
             * eval() treats strings like "source code", so any backslash sequence that JavaScript supports is
             * automatically converted.
             *
             * The complete list of backslash sequences supported by JavaScript:
             *
             *      \0  \'  \"  \\  \n  \r  \v  \t  \b  \f  \uXXXX \xXX
             *                      ^J  ^M  ^K  ^I  ^H  ^L
             *
             * To support any other non-printable 8-bit character, such as ESC, you should use \xXX, where XX
             * is the ASCII code in hex.  For ESC, that would \x1B.
             */
            control.onclick = function onClickTest(event) {
                serial.receiveData(sValue);
                /*
                 * Give focus back to the machine (since clicking the button takes focus away).
                 *
                 *      if (serial.cmp) serial.cmp.updateFocus();
                 *
                 * iOS Usability Improvement: NOT calling updateFocus() keeps the soft keyboard down
                 * (assuming it was already down).
                 */
                return true;
            };
            return true;
        }

        return false;
    }

    /**
     * echoByte(b)
     *
     * @this {SerialPortX80}
     * @param {number} b
     * @returns {boolean} true if echo, false if not
     */
    echoByte(b)
    {
        let fEchoed = false;

        if (this.controlBuffer) {
            if (b == 0x08) {
                this.controlBuffer.value = this.controlBuffer.value.slice(0, -1);
                /*
                 * TODO: Back up the correct number of columns if the character erased was a tab.
                 */
                if (this.iLogicalCol > 0) this.iLogicalCol--;
            }
            else {
                let s = StrLib.toASCIICode(b);
                let nChars = s.length;
                if (b == 0x09) {
                    let tabSize = this.tabSize || 8;
                    nChars = tabSize - (this.iLogicalCol % tabSize);
                    if (this.tabSize) s = StrLib.pad("", -nChars);
                }
                else if (b == 0x0D) {
                    this.iLogicalCol = nChars = 0;
                    s = "\n";
                }
                if (this.charBOL && !this.iLogicalCol && nChars) s = String.fromCharCode(this.charBOL) + s;
                this.controlBuffer.value += s;
                this.controlBuffer.scrollTop = this.controlBuffer.scrollHeight;
                this.iLogicalCol += nChars;
            }
            fEchoed = true;
        }
        else if (this.consoleBuffer != null) {
            if (b == 0x0A || this.consoleBuffer.length >= 1024) {
                this.print(this.consoleBuffer);
                this.consoleBuffer = "";
            }
            if (b != 0x0A) {
                this.consoleBuffer += String.fromCharCode(b);
            }
            fEchoed = true;
        }

        return fEchoed;
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {SerialPortX80}
     * @param {ComputerX80} cmp
     * @param {BusX80} bus
     * @param {CPUStateX80} cpu
     * @param {DebuggerX80} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.cmp = cmp;
        this.bus = bus;
        this.cpu = cpu;
        this.dbg = dbg;

        let serial = this;
        this.timerReceiveNext = this.cpu.addTimer(this.id + ".receive", function() {
            serial.receiveData();
        });
        this.timerTransmitNext = this.cpu.addTimer(this.id + ".transmit", function() {
            serial.transmitData();
        });

        this.chipset = /** @type {ChipSetX80} */ (cmp.getMachineComponent("ChipSet"));

        bus.addPortInputTable(this, SerialPortX80.aPortInput, this.portBase);
        bus.addPortOutputTable(this, SerialPortX80.aPortOutput, this.portBase);

        this.setReady();
    }

    /**
     * initConnection(fNullModem)
     *
     * If a machine 'connection' parameter exists of the form "{sourcePort}->{targetMachine}.{targetPort}",
     * and "{sourcePort}" matches our idComponent, then look for a component with id "{targetMachine}.{targetPort}".
     *
     * If the target component is found, then verify that it has exported functions with the following names:
     *
     *      receiveData(data): called when we have data to transmit; aliased internally to sendData(data)
     *      receiveStatus(pins): called when our control signals have changed; aliased internally to updateStatus(pins)
     *
     * For now, we're not going to worry about communication in the other direction, because when the target component
     * performs its own initConnection(), it will find our receiveData() and receiveStatus() functions, at which point
     * communication in both directions should be established, and the circle of life complete.
     *
     * For added robustness, if the target machine initializes much more slowly than we do, and our connection attempt
     * fails, that's OK, because when it finally initializes, its initConnection() will call our initConnection();
     * if we've already initialized, no harm done.
     *
     * @this {SerialPortX80}
     * @param {boolean} [fNullModem] (caller's null-modem setting, to ensure our settings are in agreement)
     */
    initConnection(fNullModem)
    {
        if (!this.connection) {
            let sConnection = this.cmp.getMachineParm("connection");
            if (sConnection) {
                let asParts = sConnection.split('->');
                if (asParts.length == 2) {
                    let sSourceID = StrLib.trim(asParts[0]);
                    if (sSourceID != this.idComponent) return;  // this connection string is intended for another instance
                    let sTargetID = StrLib.trim(asParts[1]);
                    this.connection = Component.getComponentByID(sTargetID, false);
                    if (this.connection) {
                        let exports = this.connection['exports'];
                        if (exports) {
                            let fnConnect = /** @function */ (exports['connect']);
                            if (fnConnect) fnConnect.call(this.connection, this.fNullModem);
                            this.sendData = exports['receiveData'];
                            if (this.sendData) {
                                this.fNullModem = fNullModem;
                                this.updateStatus = exports['receiveStatus'];
                                this.printf(MESSAGE.STATUS, "Connected %s.%s to %s\n", this.idMachine, sSourceID, sTargetID);
                                return;
                            }
                        }
                    }
                }
                /*
                 * Changed from NOTICE to STATUS because sometimes a connection fails simply because one of us is a laggard.
                 */
                this.printf(MESSAGE.STATUS, "Unable to establish connection: %s\n", sConnection);
            }
        }
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {SerialPortX80}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) {

            /*
             * This is as late as we can currently wait to make our first inter-machine connection attempt;
             * even so, the target machine's initialization process may still be ongoing, so any connection
             * may be not fully resolved until the target machine performs its own initConnection(), which will
             * in turn invoke our initConnection() again.
             */
            this.initConnection(this.fNullModem);

            if (!data || !this.restore) {
                this.reset();
            } else {
                if (!this.restore(data)) return false;
            }
        }
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {SerialPortX80}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
     */
    powerDown(fSave, fShutdown)
    {
        return fSave? this.save() : true;
    }

    /**
     * reset()
     *
     * @this {SerialPortX80}
     */
    reset()
    {
        this.initState();
    }

    /**
     * save()
     *
     * This implements save support for the SerialPortX80 component.
     *
     * @this {SerialPortX80}
     * @returns {Object}
     */
    save()
    {
        let state = new State(this);
        state.set(0, this.saveRegisters());
        return state.data();
    }

    /**
     * restore(data)
     *
     * This implements restore support for the SerialPortX80 component.
     *
     * @this {SerialPortX80}
     * @param {Object} data
     * @returns {boolean} true if successful, false if failure
     */
    restore(data)
    {
        return this.initState(data[0]);
    }

    /**
     * initState(data)
     *
     * @this {SerialPortX80}
     * @param {Array} [data]
     * @returns {boolean} true if successful, false if failure
     */
    initState(data)
    {
        let i = 0;
        if (data === undefined) {
            data = SerialPortX80.UART8251.INIT;
        }
        this.fReady     = data[i++];
        this.bDataIn    = data[i++];
        this.bDataOut   = data[i++];
        this.bStatus    = data[i++];
        this.bMode      = data[i++];
        this.bCommand   = data[i++];
        this.bBaudRates = data[i];
        return true;
    }

    /**
     * saveRegisters()
     *
     * @this {SerialPortX80}
     * @returns {Array}
     */
    saveRegisters()
    {
        let i = 0;
        let data = [];
        data[i++] = this.fReady;
        data[i++] = this.bDataIn;
        data[i++] = this.bDataOut;
        data[i++] = this.bStatus;
        data[i++] = this.bMode;
        data[i++] = this.bCommand;
        data[i]   = this.bBaudRates;
        return data;
    }

    /**
     * getBaudTimeout(maskRate)
     *
     * @this {SerialPortX80}
     * @param {number} maskRate (either SerialPortX80.UART8251.BAUDRATES.RECV_RATE or SerialPortX80.UART8251.BAUDRATES.XMIT_RATE)
     * @returns {number} (number of milliseconds per byte)
     */
    getBaudTimeout(maskRate)
    {
        let indexRate = (this.bBaudRates & maskRate);
        if (!(maskRate & 0xf)) indexRate >>= 4;
        let nBaud = SerialPortX80.UART8251.BAUDTABLE[indexRate];
        let nBits = ((this.bMode & SerialPortX80.UART8251.MODE.DATA_BITS) >> 2) + 6;   // includes an extra +1 for start bit
        if (this.bMode & SerialPortX80.UART8251.MODE.PARITY_ENABLE) nBits++;
        nBits += ((((this.bMode & SerialPortX80.UART8251.MODE.STOP_BITS) >> 6) + 1) >> 1);
        let nBytesPerSecond = nBaud / nBits;
        return (1000 / nBytesPerSecond)|0;
    }

    /**
     * receiveByte(b)
     *
     * @this {SerialPortX80}
     * @param {number} b
     * @returns {boolean}
     */
    receiveByte(b)
    {
        if (MAXDEBUG) this.echoByte(b);
        this.printf("receiveByte(%#04x), status=%#04x\n", b, this.bStatus);
        if (!this.fAutoStop && !(this.bStatus & SerialPortX80.UART8251.STATUS.RECV_FULL)) {
            this.bDataIn = b;
            this.bStatus |= SerialPortX80.UART8251.STATUS.RECV_FULL;
            this.cpu.requestINTR(this.nIRQ);
            return true;
        }
        return false;
    }

    /**
     * receiveData(data)
     *
     * Helper for clocking received data at the expected RECV_RATE.
     *
     * When we're cramming test data down the terminal's throat, that data will typically be in the form
     * of a string.  When we're called by another component, data will typically be a number (ie, byte).  If no
     * data is specified at all, then all we do is "clock" any remaining data into the receiver.
     *
     * @this {SerialPortX80}
     * @param {number|string|undefined} [data]
     * @returns {boolean} true if received, false if not
     */
    receiveData(data)
    {
        if (data != null) {
            if (typeof data != "number") {
                this.sDataReceived = data;
            } else {
                this.sDataReceived += String.fromCharCode(data);
            }
        }
        if (this.sDataReceived) {
            if (this.receiveByte(this.sDataReceived.charCodeAt(0))) {
                this.sDataReceived = this.sDataReceived.substr(1);
            }
            if (this.sDataReceived && this.cpu) {
                this.cpu.setTimer(this.timerReceiveNext, this.getBaudTimeout(SerialPortX80.UART8251.BAUDRATES.RECV_RATE));
            }
        }
        return true;                // for now, return true regardless, since we're buffering everything anyway
    }

    /**
     * receiveStatus(pins)
     *
     * NOTE: Prior to the addition of this interface, the DSR bit was initialized set and remained set for the life
     * of the machine.  It is entirely appropriate that this is the only way the bit can be changed, because it represents
     * an external control signal.
     *
     * @this {SerialPortX80}
     * @param {number} pins
     */
    receiveStatus(pins)
    {
        this.bStatus &= ~SerialPortX80.UART8251.STATUS.DSR;
        if (pins & RS232.DSR.MASK) this.bStatus |= SerialPortX80.UART8251.STATUS.DSR;
    }

    /**
     * transmitByte(b)
     *
     * @this {SerialPortX80}
     * @param {number} b
     * @returns {boolean} true if transmitted, false if not
     */
    transmitByte(b)
    {
        let fTransmitted = false;

        this.printf("transmitByte(%#04x)\n", b);

        if (this.fAutoXOFF) {
            if (b == 0x13) {        // XOFF
                this.fAutoStop = true;
                return false;
            }
            if (b == 0x11) {        // XON
                this.fAutoStop = false;
                return false;
            }
        }

        if (this.sendData && this.sendData.call(this.connection, b)) {
            fTransmitted = true;
        }

        if (this.echoByte(b)) {
            fTransmitted = true;
        }

        return fTransmitted;
    }

    /**
     * transmitData(sData)
     *
     * Helper for clocking transmitted data at the expected XMIT_RATE.
     *
     * When timerTransmitNext fires, we have honored the programmed XMIT_RATE period, so we can
     * set XMIT_READY (and XMIT_EMPTY), which signals the firmware that another byte can be transmitted.
     *
     * The sData parameter is not used when we're called via the timer; it's an optional parameter used by
     * the Keyboard component to deliver data pasted via the clipboard, and is currently only useful when
     * the SerialPort is connected to another machine.  TODO: Define a separate interface for that feature.
     *
     * @this {SerialPortX80}
     * @param {string} [sData]
     * @returns {boolean} true if successful, false if not
     */
    transmitData(sData)
    {
        this.bStatus |= (SerialPortX80.UART8251.STATUS.XMIT_READY | SerialPortX80.UART8251.STATUS.XMIT_EMPTY);
        if (sData) {
            return this.sendData? this.sendData.call(this.connection, sData) : false;
        }
        return true;
    }

    /**
     * isTransmitterReady()
     *
     * Called whenever a ChipSet circuit needs the SerialPortX80 UART's transmitter status.
     *
     * @this {SerialPortX80}
     * @returns {boolean} (true if ready, false if not)
     */
    isTransmitterReady()
    {
        return !!(this.bStatus & SerialPortX80.UART8251.STATUS.XMIT_READY);
    }

    /**
     * inData(port, addrFrom)
     *
     * @this {SerialPortX80}
     * @param {number} port (0x0)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number} simulated port value
     */
    inData(port, addrFrom)
    {
        let b = this.bDataIn;
        this.printIO(port, undefined, addrFrom, "DATA", b);
        this.bStatus &= ~SerialPortX80.UART8251.STATUS.RECV_FULL;
        return b;
    }

    /**
     * inControl(port, addrFrom)
     *
     * @this {SerialPortX80}
     * @param {number} port (0x1)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number} simulated port value
     */
    inControl(port, addrFrom)
    {
        let b = this.bStatus;
        this.printIO(port, undefined, addrFrom, "STATUS", b);
        return b;
    }

    /**
     * outData(port, bOut, addrFrom)
     *
     * @this {SerialPortX80}
     * @param {number} port (0x0)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to write the specified port)
     */
    outData(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "DATA");
        this.bDataOut = bOut;
        this.bStatus &= ~(SerialPortX80.UART8251.STATUS.XMIT_READY | SerialPortX80.UART8251.STATUS.XMIT_EMPTY);
        /*
         * If we're transmitting to a virtual device that has no measurable delay, this code may clear XMIT_READY
         * too quickly:
         *
         *      if (this.transmitByte(bOut)) {
         *          this.bStatus |= (SerialPortX80.UART8251.STATUS.XMIT_READY | SerialPortX80.UART8251.STATUS.XMIT_EMPTY);
         *      }
         *
         * A better solution is to arm a timer based on the XMIT_RATE baud rate, and clear the above bits when that
         * timer fires.  Consequently, we no longer care what transmitByte() reports.
         */
        this.transmitByte(bOut);
        if (this.cpu) {
            this.cpu.setTimer(this.timerTransmitNext, this.getBaudTimeout(SerialPortX80.UART8251.BAUDRATES.XMIT_RATE));
        }
    }

    /**
     * outControl(port, bOut, addrFrom)
     *
     * Writes to the CONTROL port (0x1) are either MODE or COMMAND bytes.  If the device has just
     * been powered or reset, it is in a "not ready" state and is waiting for a MODE byte.  Once it
     * has received that initial byte, the device is marked "ready", and all further bytes are
     * interpreted as COMMAND bytes (until/unless a COMMAND byte with the INTERNAL_RESET bit is set).
     *
     * @this {SerialPortX80}
     * @param {number} port (0x1)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to write the specified port)
     */
    outControl(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "CONTROL");
        if (!this.fReady) {
            this.bMode = bOut;
            this.fReady = true;
        } else {
            /*
             * Whenever DTR or RTS changes, we also want to notify any connected machine, via updateStatus().
             */
            if (this.updateStatus) {
                let delta = (bOut ^ this.bCommand);
                if (delta & (SerialPortX80.UART8251.COMMAND.RTS | SerialPortX80.UART8251.COMMAND.DTR)) {
                    let pins = 0;
                    if (this.fNullModem) {
                        pins |= (bOut & SerialPortX80.UART8251.COMMAND.RTS)? RS232.CTS.MASK : 0;
                        pins |= (bOut & SerialPortX80.UART8251.COMMAND.DTR)? (RS232.DSR.MASK | RS232.CD.MASK): 0;
                    } else {
                        pins |= (bOut & SerialPortX80.UART8251.COMMAND.RTS)? RS232.RTS.MASK : 0;
                        pins |= (bOut & SerialPortX80.UART8251.COMMAND.DTR)? RS232.DTR.MASK : 0;
                    }
                    this.updateStatus.call(this.connection, pins);
                }
            }
            this.bCommand = bOut;
            if (this.bCommand & SerialPortX80.UART8251.COMMAND.INTERNAL_RESET) {
                this.fReady = false;
            }
        }
    }

    /**
     * outBaudRates(port, bOut, addrFrom)
     *
     * @this {SerialPortX80}
     * @param {number} port (0x2)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to write the specified port)
     */
    outBaudRates(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "BAUDRATES");
        this.bBaudRates = bOut;
    }

    /**
     * SerialPortX80.init()
     *
     * This function operates on every HTML element of class "serial", extracting the
     * JSON-encoded parameters for the SerialPortX80 constructor from the element's "data-value"
     * attribute, invoking the constructor to create a SerialPortX80 component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        let aeSerial = Component.getElementsByClass(APPCLASS, "serial");
        for (let iSerial = 0; iSerial < aeSerial.length; iSerial++) {
            let eSerial = aeSerial[iSerial];
            let parmsSerial = Component.getComponentParms(eSerial);
            let serial = new SerialPortX80(parmsSerial);
            Component.bindComponentControls(serial, eSerial, APPCLASS);
        }
    }
}

SerialPortX80.UART8251 = {
    /*
     * Format of MODE byte written to CONTROL port 0x1
     */
    MODE: {
        BAUD_FACTOR:    0x03,       // 00=SYNC, 01=1x, 10=16x, 11=64x
        DATA_BITS:      0x0C,       // 00=5, 01=6, 10=7, 11=8
        PARITY_ENABLE:  0x10,
        EVEN_PARITY:    0x20,
        STOP_BITS:      0xC0,       // 00=invalid, 01=1, 10=1.5, 11=2
        INIT:           0x8E        // 16x baud rate, 8 data bits, no parity, 1.5 stop bits
    },
    /*
     * Format of COMMAND byte written to CONTROL port 0x1
     */
    COMMAND: {
        XMIT_ENABLE:    0x01,
        DTR:            0x02,       // Data Terminal Ready
        RECV_ENABLE:    0x04,
        SEND_BREAK:     0x08,
        ERROR_RESET:    0x10,
        RTS:            0x20,       // Request To Send
        INTERNAL_RESET: 0x40,
        HUNT_MODE:      0x80,
        INIT:           0x27        // XMIT_ENABLE | DTR | RECV_ENABLE | RTS
    },
    /*
     * Format of STATUS byte read from CONTROL port 0x1
     */
    STATUS: {
        XMIT_READY:     0x01,
        RECV_FULL:      0x02,
        XMIT_EMPTY:     0x04,
        PARITY_ERROR:   0x08,
        OVERRUN_ERROR:  0x10,
        FRAMING_ERROR:  0x20,
        BREAK_DETECT:   0x40,
        DSR:            0x80,       // Data Set Ready
        INIT:           0x85        // XMIT_READY | XMIT_EMPTY | DSR
    },
    /*
     * Format of BAUDRATES byte written to port 0x2
     *
     * Each nibble is an index (0x0-0xF) into a set of internal CPU clock divisors that yield the
     * following baud rates:
     *
     *      Index   Divisor     Baud Rate
     *      -----   -------     ---------
     *      0x0      3456       50
     *      0x1      2304       75
     *      0x2      1571       110
     *      0x3      1285       134.5
     *      0x4      1152       150
     *      0x5      864        200
     *      0x6      576        300
     *      0x7      288        600
     *      0x8      144        1200
     *      0x9      96         1800
     *      0xA      86         2000
     *      0xB      72         2400
     *      0xC      48         3600
     *      0xD      36         4800
     *      0xE      18         9600    (default)
     *      0xF      9          19200
     *
     * NOTE: This is a VT100-specific port and baud rate table.
     */
    BAUDRATES: {
        RECV_RATE:      0x0F,
        XMIT_RATE:      0xF0,
        INIT:           0xEE        // default to 9600 (0xE) for both XMIT and RECV
    },
    BAUDTABLE: [
        50, 75, 110, 134.5, 150, 200, 300, 600, 1200, 1800, 2000, 2400, 3600, 4800, 9600, 19200
    ]
};

SerialPortX80.UART8251.INIT = [
    false,
    0,
    0,
    SerialPortX80.UART8251.STATUS.INIT,
    SerialPortX80.UART8251.MODE.INIT,
    SerialPortX80.UART8251.COMMAND.INIT,
    SerialPortX80.UART8251.BAUDRATES.INIT
];

/*
 * Port input notification table
 */
SerialPortX80.aPortInput = {
    0x0: SerialPortX80.prototype.inData,
    0x1: SerialPortX80.prototype.inControl

};

/*
 * Port output notification table
 */
SerialPortX80.aPortOutput = {
    0x0: SerialPortX80.prototype.outData,
    0x1: SerialPortX80.prototype.outControl,
    0x2: SerialPortX80.prototype.outBaudRates
};

/*
 * Initialize every SerialPortX80 module on the page.
 */
WebLib.onInit(SerialPortX80.init);

/**
 * @copyright https://www.pcjs.org/machines/modules/v2/dbglib.js (C) 2012-2025 Jeff Parsons
 */

/** @typedef {{ addr: (number|undefined), fTemporary: (boolean|undefined), sCmd: (string|undefined), aCmds: (Array.<string>|undefined) }} */
let DbgAddr;

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
 * @class DbgLib
 * @unrestricted
 */
class DbgLib extends Component {
    /**
     * DbgLib(parmsDbg)
     *
     * The DbgLib component supports the following optional (parmsDbg) properties:
     *
     *      base: the base to use for most numeric input/output (default is 16)
     *
     * The DbgLib component is a shared component containing a subset of functionality used by
     * the other CPU-specific Debuggers (eg, Debuggerx86).  Over time, the goal is to factor out as
     * much common debugging support as possible from those components into this one.
     *
     * @this {DbgLib}
     * @param {string} type
     * @param {Object} [parmsDbg]
     * @param {number} [bitsMessage] selects message(s) that the component wants to enable (default is 0)
     */
    constructor(type, parmsDbg, bitsMessage)
    {
        super(type, parmsDbg, bitsMessage);

        if (DEBUGGER) {

            /*
             * Default base used to display all values; modified with the "s base" command.
             */
            this.nBase = +parmsDbg['base'] || 16;

            /*
             * Default number of bits of integer precision; it can be overridden by the Debugger
             * but there is no command to adjust it.
             */
            this.nBits = 32;

            this.achGroup = ['{','}'];
            this.achAddress = ['[',']'];

            /*
             * These keep track of instruction activity, but only when tracing or when Debugger checks
             * have been enabled (eg, one or more breakpoints have been set).
             *
             * They are zeroed by the reset() notification handler.  cInstructions is advanced by
             * stepCPU() and checkInstruction() calls.  nCycles is updated by every stepCPU() or stop()
             * call and simply represents the number of cycles performed by the last run of instructions.
             */
            this.nCycles = 0;
            this.cOpcodes = this.cOpcodesStart = 0;

            /*
             * fAssemble is true when "assemble mode" is active, false when not.
             */
            this.fAssemble = false;

            /*
             * This maintains command history.  New commands are inserted at index 0 of the array.
             * When Enter is pressed on an empty input buffer, we default to the command at aPrevCmds[0].
             */
            this.iPrevCmd = -1;
            this.aPrevCmds = [];

            /*
             * aVariables is an object with properties that grow as setVariable() assigns more variables;
             * each property corresponds to one variable, where the property name is the variable name (ie,
             * a string beginning with a non-digit, followed by zero or more symbol characters and/or digits)
             * and the property value is the variable's numeric value.  See doVar() and setVariable() for
             * details.
             *
             * Note that parseValue() parses variables before numbers, so any variable that looks like a
             * unprefixed hex value (eg, "a5" as opposed to "0xa5") will trump the numeric value.  Unprefixed
             * hex values are a convenience of parseValue(), which always calls StrLib.parseInt() with a default
             * base of 16; however, that default be overridden with a variety of explicit prefixes or suffixes
             * (eg, a leading "0o" to indicate octal, a trailing period to indicate decimal, etc.)
             *
             * See StrLib.parseInt() for more details about supported numbers.
             */
            this.aVariables = {};

            /*
             * Array of functions to call when notifyEvent() is called.  Functions are added with onEvent().
             */
            this.afnNotify = [];

        }   // endif DEBUGGER
    }

    /**
     * getRegIndex(sReg, off)
     *
     * NOTE: This must be implemented by the individual debuggers.
     *
     * @this {DbgLib}
     * @param {string} sReg
     * @param {number} [off] optional offset into sReg
     * @returns {number} register index, or -1 if not found
     */
    getRegIndex(sReg, off)
    {
        return -1;
    }

    /**
     * getRegValue(iReg)
     *
     * NOTE: This must be implemented by the individual debuggers.
     *
     * @this {DbgLib}
     * @param {number} iReg
     * @returns {number|undefined}
     */
    getRegValue(iReg)
    {
        return undefined;
    }

    /**
     * parseAddrReference(s, sAddr)
     *
     * Returns the given string with the given address reference replaced with the contents of that address.
     *
     * NOTE: This must be implemented by the individual debuggers.
     *
     * @this {DbgLib}
     * @param {string} s
     * @param {string} sAddr
     * @returns {string}
     */
    parseAddrReference(s, sAddr)
    {
        return s.replace('[' + sAddr + ']', "unimplemented");
    }

    /**
     * getNextCommand()
     *
     * @this {DbgLib}
     * @returns {string}
     */
    getNextCommand()
    {
        let sCmd;
        if (this.iPrevCmd > 0) {
            sCmd = this.aPrevCmds[--this.iPrevCmd];
        } else {
            sCmd = "";
            this.iPrevCmd = -1;
        }
        return sCmd;
    }

    /**
     * getPrevCommand()
     *
     * @this {DbgLib}
     * @returns {string|null}
     */
    getPrevCommand()
    {
        let sCmd = null;
        if (this.iPrevCmd < this.aPrevCmds.length - 1) {
            sCmd = this.aPrevCmds[++this.iPrevCmd];
        }
        return sCmd;
    }

    /**
     * parseCommand(sCmd, fSave, chSep)
     *
     * @this {DbgLib}
     * @param {string|undefined} sCmd
     * @param {boolean} [fSave] is true to save the command, false if not
     * @param {string} [chSep] is the command separator character (default is ';')
     * @returns {Array.<string>}
     */
    parseCommand(sCmd, fSave, chSep)
    {
        if (fSave) {
            if (!sCmd) {
                if (this.fAssemble) {
                    sCmd = "end";
                } else {
                    sCmd = this.aPrevCmds[this.iPrevCmd+1];
                }
            } else {
                if (this.iPrevCmd < 0 && this.aPrevCmds.length) {
                    this.iPrevCmd = 0;
                }
                if (this.iPrevCmd < 0 || sCmd != this.aPrevCmds[this.iPrevCmd]) {
                    this.aPrevCmds.splice(0, 0, sCmd);
                    this.iPrevCmd = 0;
                }
                this.iPrevCmd--;
            }
        }
        let a = [];
        if (sCmd) {
            /*
             * With the introduction of breakpoint commands (ie, quoted command sequences
             * associated with a breakpoint), we can no longer perform simplistic splitting.
             *
             *      a = sCmd.split(chSep || ';');
             *      for (let i = 0; i < a.length; i++) a[i] = StrLib.trim(a[i]);
             *
             * We may now split on semi-colons ONLY if they are outside a quoted sequence.
             *
             * Also, to allow quoted strings *inside* breakpoint commands, we first replace all
             * DOUBLE double-quotes with single quotes.
             */
            sCmd = sCmd.replace(/""/g, "'");

            let iPrev = 0;
            let chQuote = null;
            chSep = chSep || ';';
            /*
             * NOTE: Processing charAt() up to and INCLUDING length is not a typo; we're taking
             * advantage of the fact that charAt() with an invalid index returns an empty string,
             * allowing us to use the same substring() call to capture the final portion of sCmd.
             *
             * In a sense, it allows us to pretend that the string ends with a zero terminator.
             */
            for (let i = 0; i <= sCmd.length; i++) {
                let ch = sCmd.charAt(i);
                if (ch == '"' || ch == "'") {
                    if (!chQuote) {
                        chQuote = ch;
                    } else if (ch == chQuote) {
                        chQuote = null;
                    }
                }
                else if (ch == chSep && !chQuote || !ch) {
                    /*
                     * Recall that substring() accepts starting (inclusive) and ending (exclusive)
                     * indexes, whereas substr() accepts a starting index and a length.  We need the former.
                     */
                    a.push(StrLib.trim(sCmd.substring(iPrev, i)));
                    iPrev = i + 1;
                }
            }
        }
        return a;
    }

    /**
     * evalAND(dst, src)
     *
     * Adapted from /machines/dec/pdp10/modules/v2/cpuops.js:PDP10.AND().
     *
     * Performs the bitwise "and" (AND) of two operands > 32 bits.
     *
     * @this {DbgLib}
     * @param {number} dst
     * @param {number} src
     * @returns {number} (dst & src)
     */
    evalAND(dst, src)
    {
        /*
         * We AND the low 32 bits separately from the higher bits, and then combine them with addition.
         * Since all bits above 32 will be zero, and since 0 AND 0 is 0, no special masking for the higher
         * bits is required.
         *
         * WARNING: When using JavaScript's 32-bit operators with values that could set bit 31 and produce a
         * negative value, it's critical to perform a final right-shift of 0, ensuring that the final result is
         * positive.
         */
        if (this.nBits <= 32) {
            return dst & src;
        }
        /*
         * Negative values don't yield correct results when dividing, so pass them through an unsigned truncate().
         */
        dst = this.truncate(dst, 0, true);
        src = this.truncate(src, 0, true);
        return ((((dst / DbgLib.TWO_POW32)|0) & ((src / DbgLib.TWO_POW32)|0)) * DbgLib.TWO_POW32) + ((dst & src) >>> 0);
    }

    /**
     * evalIOR(dst, src)
     *
     * Adapted from /machines/dec/pdp10/modules/v2/cpuops.js:PDP10.IOR().
     *
     * Performs the logical "inclusive-or" (OR) of two operands > 32 bits.
     *
     * @this {DbgLib}
     * @param {number} dst
     * @param {number} src
     * @returns {number} (dst | src)
     */
    evalIOR(dst, src)
    {
        /*
         * We OR the low 32 bits separately from the higher bits, and then combine them with addition.
         * Since all bits above 32 will be zero, and since 0 OR 0 is 0, no special masking for the higher
         * bits is required.
         *
         * WARNING: When using JavaScript's 32-bit operators with values that could set bit 31 and produce a
         * negative value, it's critical to perform a final right-shift of 0, ensuring that the final result is
         * positive.
         */
        if (this.nBits <= 32) {
            return dst | src;
        }
        /*
         * Negative values don't yield correct results when dividing, so pass them through an unsigned truncate().
         */
        dst = this.truncate(dst, 0, true);
        src = this.truncate(src, 0, true);
        return ((((dst / DbgLib.TWO_POW32)|0) | ((src / DbgLib.TWO_POW32)|0)) * DbgLib.TWO_POW32) + ((dst | src) >>> 0);
    }

    /**
     * evalXOR(dst, src)
     *
     * Adapted from /machines/dec/pdp10/modules/v2/cpuops.js:PDP10.XOR().
     *
     * Performs the logical "exclusive-or" (XOR) of two operands > 32 bits.
     *
     * @this {DbgLib}
     * @param {number} dst
     * @param {number} src
     * @returns {number} (dst ^ src)
     */
    evalXOR(dst, src)
    {
        /*
         * We XOR the low 32 bits separately from the higher bits, and then combine them with addition.
         * Since all bits above 32 will be zero, and since 0 XOR 0 is 0, no special masking for the higher
         * bits is required.
         *
         * WARNING: When using JavaScript's 32-bit operators with values that could set bit 31 and produce a
         * negative value, it's critical to perform a final right-shift of 0, ensuring that the final result is
         * positive.
         */
        if (this.nBits <= 32) {
            return dst ^ src;
        }
        /*
         * Negative values don't yield correct results when dividing, so pass them through an unsigned truncate().
         */
        dst = this.truncate(dst, 0, true);
        src = this.truncate(src, 0, true);
        return ((((dst / DbgLib.TWO_POW32)|0) ^ ((src / DbgLib.TWO_POW32)|0)) * DbgLib.TWO_POW32) + ((dst ^ src) >>> 0);
    }

    /**
     * evalMUL(dst, src)
     *
     * I could have adapted the code from /machines/dec/pdp10/modules/v2/cpuops.js:PDP10.doMUL(), but it was simpler to
     * write this base method and let the PDP-10 Debugger override it with a call to the *actual* doMUL() method.
     *
     * @this {DbgLib}
     * @param {number} dst
     * @param {number} src
     * @returns {number} (dst * src)
     */
    evalMUL(dst, src)
    {
        return dst * src;
    }

    /**
     * truncate(v, nBits, fUnsigned)
     *
     * @this {DbgLib}
     * @param {number} v
     * @param {number} [nBits]
     * @param {boolean} [fUnsigned]
     * @returns {number}
     */
    truncate(v, nBits, fUnsigned)
    {
        let limit, vNew = v;
        nBits = nBits || this.nBits;

        if (fUnsigned) {
            if (nBits == 32) {
                vNew = v >>> 0;
            }
            else if (nBits < 32) {
                vNew = v & ((1 << nBits) - 1);
            }
            else {
                limit = Math.pow(2, nBits);
                if (v < 0 || v >= limit) {
                    vNew = v % limit;
                    if (vNew < 0) vNew += limit;
                }
            }
        }
        else {
            if (nBits <= 32) {
                vNew = (v << (32 - nBits)) >> (32 - nBits);
            }
            else {
                limit = Math.pow(2, nBits - 1);
                if (v >= limit) {
                    vNew = (v % limit);
                    if (((v / limit)|0) & 1) vNew -= limit;
                } else if (v < -limit) {
                    vNew = (v % limit);
                    if ((((-v - 1) / limit) | 0) & 1) {
                        if (vNew) vNew += limit;
                    }
                    else {
                        if (!vNew) vNew -= limit;
                    }
                }
            }
        }
        if (v != vNew) {
            if (MAXDEBUG) this.printf("warning: value %d truncated to %d\n", v, vNew);
            v = vNew;
        }
        return v;
    }

    /**
     * evalOps(aVals, aOps, cOps)
     *
     * Some of our clients want a specific number of bits of integer precision.  If that precision is
     * greater than 32, some of the operations below will fail; for example, JavaScript bitwise operators
     * always truncate the result to 32 bits, so beware when using shift operations.  Similarly, it would
     * be wrong to always "|0" the final result, which is why we rely on truncate() now.
     *
     * Note that JavaScript integer precision is limited to 52 bits.  For example, in Node, if you set a
     * variable to 0x80000001:
     *
     *      foo=0x80000001|0
     *
     * then calculate foo*foo and display the result in binary using "(foo*foo).toString(2)":
     *
     *      '11111111111111111111111111111100000000000000000000000000000000'
     *
     * which is slightly incorrect because it has overflowed JavaScript's floating-point precision.
     *
     * 0x80000001 in decimal is -2147483647, so the product is 4611686014132420609, which is 0x3FFFFFFF00000001.
     *
     * @this {DbgLib}
     * @param {Array.<number>} aVals
     * @param {Array.<string>} aOps
     * @param {number} [cOps] (default is -1 for all)
     * @returns {boolean} true if successful, false if error
     */
    evalOps(aVals, aOps, cOps = -1)
    {
        while (cOps-- && aOps.length) {
            let chOp = aOps.pop();
            if (aVals.length < 2) return false;
            let valNew;
            let val2 = aVals.pop();
            let val1 = aVals.pop();
            switch(chOp) {
            case '*':
                valNew = this.evalMUL(val1, val2);
                break;
            case '/':
                if (!val2) return false;
                valNew = Math.trunc(val1 / val2);
                break;
            case '^/':
                if (!val2) return false;
                valNew = val1 % val2;
                break;
            case '+':
                valNew = val1 + val2;
                break;
            case '-':
                valNew = val1 - val2;
                break;
            case '<<':
                valNew = val1 << val2;
                break;
            case '>>':
                valNew = val1 >> val2;
                break;
            case '>>>':
                valNew = val1 >>> val2;
                break;
            case '<':
                valNew = (val1 < val2? 1 : 0);
                break;
            case '<=':
                valNew = (val1 <= val2? 1 : 0);
                break;
            case '>':
                valNew = (val1 > val2? 1 : 0);
                break;
            case '>=':
                valNew = (val1 >= val2? 1 : 0);
                break;
            case '==':
                valNew = (val1 == val2? 1 : 0);
                break;
            case '!=':
                valNew = (val1 != val2? 1 : 0);
                break;
            case '&':
                valNew = this.evalAND(val1, val2);
                break;
            case '!':           // alias for MACRO-10 to perform a bitwise inclusive-or (OR)
            case '|':
                valNew = this.evalIOR(val1, val2);
                break;
            case '^!':          // since MACRO-10 uses '^' for base overrides, '^!' is used for bitwise exclusive-or (XOR)
                valNew = this.evalXOR(val1, val2);
                break;
            case '&&':
                valNew = (val1 && val2? 1 : 0);
                break;
            case '||':
                valNew = (val1 || val2? 1 : 0);
                break;
            case ',,':
                valNew = this.truncate(val1, 18, true) * Math.pow(2, 18) + this.truncate(val2, 18, true);
                break;
         // case '_':
            case '^_':
                valNew = val1;
                /*
                 * While we always try to avoid assuming any particular number of bits of precision, the 'B' shift
                 * operator (which we've converted to '^_') is unique to the MACRO-10 environment, which imposes the
                 * following restrictions on the shift count.
                 */
                if (chOp == '^_') val2 = 35 - (val2 & 0xff);
                if (val2) {
                    /*
                     * Since binary shifting is a logical (not arithmetic) operation, and since shifting by division only
                     * works properly with positive numbers, we call truncate() to produce an unsigned value.
                     */
                    valNew = this.truncate(valNew, 0, true);
                    if (val2 > 0) {
                        valNew *= Math.pow(2, val2);
                    } else {
                        valNew = Math.trunc(valNew / Math.pow(2, -val2));
                    }
                }
                break;
            default:
                return false;
            }
            aVals.push(this.truncate(valNew));
        }
        return true;
    }

    /**
     * parseArray(asValues, iValue, iLimit, nBase, aUndefined)
     *
     * parseExpression() takes a complete expression and divides it into array elements, where even elements
     * are values (which may be empty if two or more operators appear consecutively) and odd elements are operators.
     *
     * For example, if the original expression was "2*{3+{4/2}}", parseExpression() would call parseArray() with:
     *
     *      0   1   2   3   4   5   6   7   8   9  10  11  12  13  14
     *      -   -   -   -   -   -   -   -   -   -  --  --  --  --  --
     *      2   *       {   3   +       {   4   /   2   }       }
     *
     * This function takes care of recursively processing grouped expressions, by processing subsets of the array,
     * as well as handling certain base overrides (eg, temporarily switching to base-10 for binary shift suffixes).
     *
     * @param {Array.<string>} asValues
     * @param {number} iValue
     * @param {number} iLimit
     * @param {number} nBase
     * @param {Array|undefined} [aUndefined]
     * @returns {number|undefined}
     */
    parseArray(asValues, iValue, iLimit, nBase, aUndefined)
    {
        let value;
        let sValue, sOp;
        let fError = false;
        let nUnary = 0;
        let aVals = [], aOps = [];

        let nBasePrev = this.nBase;
        this.nBase = nBase;

        while (iValue < iLimit) {
            let v;
            sValue = asValues[iValue++].trim();
            sOp = (iValue < iLimit? asValues[iValue++] : "");

            if (sValue) {
                v = this.parseValue(sValue, undefined, aUndefined, nUnary);
            } else {
                if (sOp == '{') {
                    let cOpen = 1;
                    let iStart = iValue;
                    while (iValue < iLimit) {
                        sValue = asValues[iValue++].trim();
                        sOp = (iValue < asValues.length? asValues[iValue++] : "");
                        if (sOp == '{') {
                            cOpen++;
                        } else if (sOp == '}') {
                            if (!--cOpen) break;
                        }
                    }
                    v = this.parseArray(asValues, iStart, iValue-1, this.nBase, aUndefined);
                    if (v != null && nUnary) {
                        v = this.parseUnary(v, nUnary);
                    }
                    sValue = (iValue < iLimit? asValues[iValue++].trim() : "");
                    sOp = (iValue < iLimit? asValues[iValue++] : "");
                }
                else {
                    /*
                     * When parseExpression() calls us, it has collapsed all runs of whitespace into single spaces,
                     * and although it allows single spaces to divide the elements of the expression, a space is neither
                     * a unary nor binary operator.  It's essentially a no-op.  If we encounter it here, then it followed
                     * another operator and is easily ignored (although perhaps it should still trigger a reset of nBase
                     * and nUnary -- TBD).
                     */
                    if (sOp == ' ') {
                        continue;
                    }
                    if (sOp == '^B') {
                        this.nBase = 2;
                        continue;
                    }
                    if (sOp == '^O') {
                        this.nBase = 8;
                        continue;
                    }
                    if (sOp == '^D') {
                        this.nBase = 10;
                        continue;
                    }
                    if (!(nUnary & (0xC0000000|0))) {
                        if (sOp == '+') {
                            continue;
                        }
                        if (sOp == '-') {
                            nUnary = (nUnary << 2) | 1;
                            continue;
                        }
                        if (sOp == '~' || sOp == '^-') {
                            nUnary = (nUnary << 2) | 2;
                            continue;
                        }
                        if (sOp == '^L') {
                            nUnary = (nUnary << 2) | 3;
                            continue;
                        }
                    }
                    fError = true;
                    break;
                }
            }

            if (v === undefined) {
                if (aUndefined) {
                    aUndefined.push(sValue);
                    v = 0;
                } else {
                    fError = true;
                    aUndefined = [];
                    break;
                }
            }

            aVals.push(this.truncate(v));

            /*
             * When parseExpression() calls us, it has collapsed all runs of whitespace into single spaces,
             * and although it allows single spaces to divide the elements of the expression, a space is neither
             * a unary nor binary operator.  It's essentially a no-op.  If we encounter it here, then it followed
             * a value, and since we don't want to misinterpret the next operator as a unary operator, we look
             * ahead and grab the next operator if it's not preceded by a value.
             */
            if (sOp == ' ') {
                if (iValue < asValues.length - 1 && !asValues[iValue]) {
                    iValue++;
                    sOp = asValues[iValue++];
                } else {
                    fError = true;
                    break;
                }
            }

            if (!sOp) break;

            let aBinOp = (this.achGroup[0] == '<'? DbgLib.aDECOpPrecedence : DbgLib.aBinOpPrecedence);
            if (!aBinOp[sOp]) {
                fError = true;
                break;
            }
            if (aOps.length && aBinOp[sOp] <= aBinOp[aOps[aOps.length - 1]]) {
                this.evalOps(aVals, aOps, 1);
            }
            aOps.push(sOp);

            /*
             * The MACRO-10 binary shifting operator assumes a base-10 shift count, regardless of the current
             * base, so we must override the current base to ensure the count is parsed correctly.
             */
            this.nBase = (sOp == '^_')? 10 : nBase;
            nUnary = 0;
        }

        if (fError || !this.evalOps(aVals, aOps) || aVals.length != 1) {
            fError = true;
        }

        if (!fError) {
            value = aVals.pop();

        } else if (!aUndefined) {
            this.printf("parse error (%s)\n", (sValue || sOp));
        }

        this.nBase = nBasePrev;
        return value;
    }

    /**
     * parseASCII(sExp, chDelim, nBits, cchMax)
     *
     * @this {DbgLib}
     * @param {string} sExp
     * @param {string} chDelim
     * @param {number} nBits
     * @param {number} cchMax
     * @returns {string|undefined}
     */
    parseASCII(sExp, chDelim, nBits, cchMax)
    {
        let i;
        while ((i = sExp.indexOf(chDelim)) >= 0) {
            let v = 0;
            let j = i + 1;
            let cch = cchMax;
            while (j < sExp.length) {
                let ch = sExp[j++];
                if (ch == chDelim) {
                    cch = -1;
                    break;
                }
                if (!cch) break;
                cch--;
                let c = ch.charCodeAt(0);
                if (nBits == 7) {
                    c &= 0x7F;
                } else {
                    c = (c - 0x20) & 0x3F;
                }
                v = this.truncate(v * Math.pow(2, nBits) + c, nBits * cchMax, true);
            }
            if (cch >= 0) {
                this.printf("parse error (%s%s%s)\n", chDelim, sExp, chDelim);
                return undefined;
            } else {
                sExp = sExp.substr(0, i) + this.toStrBase(v, -1) + sExp.substr(j);
            }
        }
        return sExp;
    }

    /**
     * parseExpression(sExp, fQuiet)
     *
     * A quick-and-dirty expression parser.  It takes an expression like:
     *
     *      EDX+EDX*4+12345678
     *
     * and builds a value stack in aVals and a "binop" (binary operator) stack in aOps:
     *
     *      aVals       aOps
     *      -----       ----
     *      EDX         +
     *      EDX         *
     *      4           +
     *      ...
     *
     * We pop 1 "binop" from aOps and 2 values from aVals whenever a "binop" of lower priority than its
     * predecessor is encountered, evaluate, and push the result back onto aVals.  Only selected unary
     * operators are supported (eg, negate and complement); no ternary operators like '?:' are supported.
     *
     * fQuiet can be used to pass an array that collects any undefined variables that parseExpression()
     * encounters; the value of an undefined variable is zero.  This mode was added for components that need
     * to support expressions containing "fixups" (ie, values that must be determined later).
     *
     * @this {DbgLib}
     * @param {string|undefined} sExp
     * @param {Array|undefined|boolean} [fQuiet]
     * @returns {number|undefined} numeric value, or undefined if sExp contains any undefined or invalid values
     */
    parseExpression(sExp, fQuiet)
    {
        let value = undefined;
        let fPrint = (fQuiet === false);
        let aUndefined = Array.isArray(fQuiet)? fQuiet : undefined;

        if (sExp) {

            /*
             * The default delimiting characters for grouped expressions are braces; they can be changed by altering
             * achGroup, but when that happens, instead of changing our regular expressions and operator tables,
             * we simply replace all achGroup characters with braces in the given expression.
             *
             * Why not use parentheses for grouped expressions?  Because some debuggers use parseReference() to perform
             * parenthetical value replacements in message strings, and they don't want parentheses taking on a different
             * meaning.  And for some machines, like the PDP-10, the convention is to use parentheses for other things,
             * like indexed addressing, and to use angle brackets for grouped expressions.
             */
            if (this.achGroup[0] != '{') {
                sExp = sExp.split(this.achGroup[0]).join('{').split(this.achGroup[1]).join('}');
            }

            /*
             * Quoted ASCII characters can have a numeric value, too, which must be converted now, to avoid any
             * conflicts with the operators below.
             */
            sExp = this.parseASCII(sExp, '"', 7, 5);    // MACRO-10 packs up to 5 7-bit ASCII codes into a value
            if (!sExp) return value;
            sExp = this.parseASCII(sExp, "'", 6, 6);    // MACRO-10 packs up to 6 6-bit ASCII (SIXBIT) codes into a value
            if (!sExp) return value;

            /*
             * All browsers (including, I believe, IE9 and up) support the following idiosyncrasy of a RegExp split():
             * when the RegExp uses a capturing pattern, the resulting array will include entries for all the pattern
             * matches along with the non-matches.  This effectively means that, in the set of expressions that we
             * support, all even entries in asValues will contain "values" and all odd entries will contain "operators".
             *
             * Although I started listing the operators in the RegExp in "precedential" order, that's not important;
             * what IS important is listing operators that contain shorter operators first.  For example, bitwise
             * shift operators must be listed BEFORE the logical less-than or greater-than operators.  The aBinOp tables
             * (aBinOpPrecedence and aDECOpPrecedence) are what determine precedence, not the RegExp.
             *
             * Also, to better accommodate MACRO-10 syntax, I've replaced the single '^' for XOR with '^!', and I've
             * added '!' as an alias for '|' (bitwise inclusive-or), '^-' as an alias for '~' (one's complement operator),
             * and '_' as a shift operator (+/- values specify a left/right shift, and the count is not limited to 32).
             *
             * 2023 Update: I've removed '_' as a shift operator, because it interferes with symbols that use underscores.
             *
             * And to avoid conflicts with MACRO-10 syntax, I've replaced the original mod operator ('%') with '^/'.
             *
             * The MACRO-10 binary shifting suffix ('B') is a bit more problematic, since a capital B can also appear
             * inside symbols, or inside hex values.  So if the default base is NOT 16, then I pre-scan for that suffix
             * and replace all non-symbolic occurrences with an internal shift operator ('^_').
             *
             * Note that StrLib.parseInt(), which parseValue() relies on, supports both the MACRO-10 base prefix overrides
             * and the binary shifting suffix ('B'), but since that suffix can also be a bracketed expression, we have to
             * support it here as well.
             *
             * MACRO-10 supports only a subset of all the PCjs operators; for example, MACRO-10 doesn't support any of
             * the boolean logical/compare operators.  But unless we run into conflicts, I prefer sticking with this
             * common set of operators.
             *
             * All whitespace in the expression is collapsed to single spaces, and space has been added to the list
             * of "operators", but its sole function is as a separator, not as an operator.  parseArray() will ignore
             * single spaces as long as they are preceded and/or followed by a "real" operator.  It would be dangerous
             * to remove spaces entirely, because if an operator-less expression like "A B" was passed in, we would want
             * that to generate an error; if we converted it to "AB", evaluation might inadvertently succeed.
             */
            let regExp = /({|}|\|\||&&|\||\^!|\^B|\^O|\^D|\^L|\^-|~|\^_|&|!=|!|==|>=|>>>|>>|>|<=|<<|<|-|\+|\^\/|\/|\*|,,| )/;
            if (this.nBase != 16) {
                sExp = sExp.replace(/(^|[^A-Z0-9$%.])([0-9]+)B/, "$1$2^_").replace(/\s+/g, ' ');
            }
            let asValues = sExp.split(regExp);
            value = this.parseArray(asValues, 0, asValues.length, this.nBase, aUndefined);
            if (value !== undefined && fPrint) {
                this.printValue(null, value);
            }
        }
        return value;
    }

    /**
     * parseReference(s)
     *
     * Returns the given string with any "{expression}" sequences replaced with the value of the expression,
     * and any "[address]" references replaced with the contents of the address.  Expressions are parsed BEFORE
     * addresses.
     *
     * @this {DbgLib}
     * @param {string} s
     * @returns {string|undefined}
     */
    parseReference(s)
    {
        let a;
        let chOpen = this.achGroup[0];
        let chClose = this.achGroup[1];
        let chEscape = (chOpen == '(' || chOpen == '{' || chOpen == '[')? '\\' : '';
        let chInnerEscape = (chOpen == '['? '\\' : '');
        let reSubExp = new RegExp(chEscape + chOpen + "([^" + chInnerEscape + chOpen + chInnerEscape + chClose + "]+)" + chEscape + chClose);
        while ((a = s.match(reSubExp))) {
            let value = this.parseExpression(a[1]);
            if (value === undefined) return undefined;
            let sSearch = chOpen + a[1] + chClose;
            let sReplace = value != null? this.toStrBase(value) : "undefined";
            /*
             * Note that by default, the String replace() method only replaces the FIRST occurrence,
             * and there MIGHT be more than one occurrence of the expression we just parsed, so we could
             * do this instead:
             *
             *      s = s.split(sSearch).join(sReplace);
             *
             * However, that's knd of an expensive (slow) solution, and it's not strictly necessary, since
             * any additional identical expressions will be picked up on a subsequent iteration through this loop.
             */
            s = s.replace(sSearch, sReplace);
        }
        if (this.achAddress.length) {
            chOpen = this.achAddress[0];
            chClose = this.achAddress[1];
            chEscape = (chOpen == '(' || chOpen == '{' || chOpen == '[')? '\\' : '';
            chInnerEscape = (chOpen == '['? '\\' : '');
            reSubExp = new RegExp(chEscape + chOpen + "([^" + chInnerEscape + chOpen + chInnerEscape + chClose + "]+)" + chEscape + chClose);
            while ((a = s.match(reSubExp))) {
                s = this.parseAddrReference(s, a[1]);
            }
        }
        return this.parseSysVars(s);
    }

    /**
     * parseSysVars(s)
     *
     * Returns the given string with any recognized "$var" replaced with its value; eg:
     *
     *      $ops: the number of opcodes executed since the last time it was displayed (or reset)
     *
     * @this {DbgLib}
     * @param {string} s
     * @returns {string}
     */
    parseSysVars(s)
    {
        let a;
        while ((a = s.match(/\$([a-z]+)/i))) {
            let v = null;
            switch(a[1].toLowerCase()) {
            case "ops":
                v = this.cOpcodes - this.cOpcodesStart;
                break;
            }
            if (v == null) break;
            s = s.replace(a[0], v.toString());
        }
        return s;
    }

    /**
     * parseUnary(value, nUnary)
     *
     * nUnary is actually a small "stack" of unary operations encoded in successive pairs of bits.
     * As parseExpression() encounters each unary operator, nUnary is shifted left 2 bits, and the
     * new unary operator is encoded in bits 0 and 1 (0b00 is none, 0b01 is negate, 0b10 is complement,
     * and 0b11 is reserved).  Here, we process the bits in reverse order (hence the stack-like nature),
     * ensuring that we process the unary operators associated with this value right-to-left.
     *
     * Since bitwise operators see only 32 bits, more than 16 unary operators cannot be supported
     * using this method.  We'll let parseExpression() worry about that; if it ever happens in practice,
     * then we'll have to switch to a more "expensive" approach (eg, an actual array of unary operators).
     *
     * @this {DbgLib}
     * @param {number} value
     * @param {number} nUnary
     * @returns {number}
     */
    parseUnary(value, nUnary)
    {
        while (nUnary) {
            let bit;
            switch(nUnary & 0o3) {
            case 1:
                value = -this.truncate(value);
                break;
            case 2:
                value = this.evalXOR(value, -1);        // this is easier than adding an evalNOT()...
                break;
            case 3:
                bit = 35;                               // simple left-to-right zero-bit-counting loop...
                while (bit >= 0 && !this.evalAND(value, Math.pow(2, bit))) bit--;
                value = 35 - bit;
                break;
            }
            nUnary >>>= 2;
        }
        return value;
    }

    /**
     * parseValue(sValue, sName, fQuiet, nUnary)
     *
     * @this {DbgLib}
     * @param {string} [sValue]
     * @param {string} [sName] is the name of the value, if any
     * @param {Array|boolean} [fQuiet]
     * @param {number} [nUnary] (0 for none, 1 for negate, 2 for complement, 3 for leading zeros)
     * @returns {number|undefined} numeric value, or undefined if sValue is either undefined or invalid
     */
    parseValue(sValue, sName, fQuiet, nUnary = 0)
    {
        let value;
        let aUndefined = Array.isArray(fQuiet)? fQuiet : undefined;

        if (sValue != undefined) {
            let iReg = this.getRegIndex(sValue);
            if (iReg >= 0) {
                value = this.getRegValue(iReg);
            } else {
                value = this.getVariable(sValue);
                if (value != undefined) {
                    let sUndefined = this.getVariableFixup(sValue);
                    if (sUndefined) {
                        if (aUndefined) {
                            aUndefined.push(sUndefined);
                        } else {
                            let valueUndefined = this.parseExpression(sUndefined, fQuiet);
                            if (valueUndefined !== undefined) {
                                value += valueUndefined;
                            } else {
                                if (!fQuiet) {
                                    this.printf("undefined %s: %s (%s)\n", (sName || "value"), sValue, sUndefined);
                                }
                                value = undefined;
                            }
                        }
                    }
                } else {
                    /*
                     * A feature of MACRO-10 is that any single-digit number is automatically interpreted as base-10.
                     */
                    value = StrLib.parseInt(sValue, sValue.length > 1 || this.nBase > 10? this.nBase : 10);
                }
            }
            if (value != undefined) {
                value = this.truncate(this.parseUnary(value, nUnary));
            } else {
                if (!fQuiet) {
                    this.printf("invalid %s: %s\n", (sName || "value"), sValue);
                }
            }
        } else {
            if (!fQuiet) {
                this.printf("missing %s\n", (sName || "value"));
            }
        }
        return value;
    }

    /**
     * printValue(sVar, value)
     *
     * @this {DbgLib}
     * @param {string|null|*} sVar
     * @param {number|undefined} value
     * @returns {boolean} true if value defined, false if not
     */
    printValue(sVar, value)
    {
        let sValue;
        let fDefined = false;
        if (value !== undefined) {
            fDefined = true;
            if (this.nBase == 8) {
                sValue = this.toStrBase(value, this.nBits, 8, 1) + "  " + value + '.';
            } else {
                sValue = this.toStrBase(value, this.nBits, 16, 1) + "  " + this.toStrBase(value, this.nBits, 8, 1) + "  " + this.toStrBase(value, this.nBits, 2, this.nBits <= 32? 8 : 6) + "  " + value + '.';
            }
            if (value >= 0x20 && value < 0x7F) {
                sValue += " '" + String.fromCharCode(value) + "'";
            }
        }
        sVar = (sVar != null? (sVar + ": ") : "");
        this.printf("%s%s\n", sVar, sValue);
        return fDefined;
    }

    /**
     * resetVariables()
     *
     * @this {DbgLib}
     * @returns {Object}
     */
    resetVariables()
    {
        let a = this.aVariables;
        this.aVariables = {};
        return a;
    }

    /**
     * restoreVariables(a)
     *
     * @this {DbgLib}
     * @param {Object} a (from previous resetVariables() call)
     */
    restoreVariables(a)
    {
        this.aVariables = a;
    }

    /**
     * printVariable(sVar)
     *
     * @this {DbgLib}
     * @param {string} [sVar]
     * @returns {boolean} true if all value(s) defined, false if not
     */
    printVariable(sVar)
    {
        let cVariables = 0;
        if (this.aVariables) {
            if (sVar) {
                return this.printValue(sVar, this.aVariables[sVar] && this.aVariables[sVar].value);
            }
            let aVars = Object.keys(this.aVariables);
            aVars.sort();
            for (let i = 0; i < aVars.length; i++) {
                this.printValue(aVars[i], this.aVariables[aVars[i]].value);
                cVariables++;
            }
        }
        return cVariables > 0;
    }

    /**
     * delVariable(sVar)
     *
     * @this {DbgLib}
     * @param {string} sVar
     */
    delVariable(sVar)
    {
        delete this.aVariables[sVar];
    }

    /**
     * getVariable(sVar)
     *
     * @this {DbgLib}
     * @param {string} sVar
     * @returns {number|undefined}
     */
    getVariable(sVar)
    {
        if (this.aVariables[sVar]) {
            return this.aVariables[sVar].value;
        }
        sVar = sVar.substr(0, 6);
        return this.aVariables[sVar] && this.aVariables[sVar].value;
    }

    /**
     * getVariableFixup(sVar)
     *
     * @this {DbgLib}
     * @param {string} sVar
     * @returns {string|undefined}
     */
    getVariableFixup(sVar)
    {
        return this.aVariables[sVar] && this.aVariables[sVar].sUndefined;
    }

    /**
     * isVariable(sVar)
     *
     * @this {DbgLib}
     * @param {string} sVar
     * @returns {boolean}
     */
    isVariable(sVar)
    {
        return this.aVariables[sVar] !== undefined;
    }

    /**
     * setVariable(sVar, value, sUndefined)
     *
     * @this {DbgLib}
     * @param {string} sVar
     * @param {number} value
     * @param {string|undefined} [sUndefined]
     */
    setVariable(sVar, value, sUndefined)
    {
        this.aVariables[sVar] = {value, sUndefined};
    }

    /**
     * toStrBase(n, nBits, nBase, nGrouping)
     *
     * Use this instead of Str's toOct()/toDec()/toHex() to convert numbers to the Debugger's default base.
     *
     * @this {DbgLib}
     * @param {number|null|undefined} n
     * @param {number} [nBits] (-1 to strip leading zeros, 0 to allow a variable number of digits)
     * @param {number} [nBase]
     * @param {number} [nGrouping] (if nBase is 2, this is a grouping; otherwise, it's a prefix condition)
     * @returns {string}
     */
    toStrBase(n, nBits = 0, nBase = 0, nGrouping = 0)
    {
        let s;
        switch(nBase || this.nBase) {
        case 2:
            s = StrLib.toBin(n, nBits > 0? nBits : 0, nGrouping);
            break;
        case 8:
            s = StrLib.toOct(n, nBits > 0? ((nBits + 2)/3)|0 : 0, !!nGrouping);
            break;
        case 10:
            /*
             * The multiplier is actually Math.log(2)/Math.log(10), but an approximation is more than adequate.
             */
            s = StrLib.toDec(n, nBits > 0? Math.ceil(nBits * 0.3) : 0);
            break;
        case 16:
        default:
            s = StrLib.toHex(n, nBits > 0? ((nBits + 3) >> 2) : 0, !!nGrouping);
            break;
        }
        return (nBits < 0? StrLib.stripLeadingZeros(s) : s);
    }

    /**
     * onEvent(fnNotify)
     *
     * @param {function()} fnNotify
     */
    onEvent(fnNotify)
    {
        this.afnNotify.push(fnNotify);
    }

    /**
     * notifyEvent(nEvent, dataEvent)
     *
     * @param {number} nEvent (see DbgLib.EVENTS)
     * @param {number} [dataEvent] (optional data for event)
     */
    notifyEvent(nEvent, dataEvent)
    {
        for (let i = 0; i < this.afnNotify.length; i++) {
            this.afnNotify[i](nEvent, dataEvent);
        }
    }
}

if (DEBUGGER) {

    /*
     * These are our operator precedence tables.  Operators toward the bottom (with higher values) have
     * higher precedence.  aBinOpPrecedence was our original table; we had to add aDECOpPrecedence because
     * the precedence of operators in DEC's MACRO-10 expressions differ.  Having separate tables also allows
     * us to remove operators that shouldn't be supported, but unless some operator creates a problem,
     * I prefer to keep as much commonality between the tables as possible.
     *
     * Missing from these tables are the (limited) set of unary operators we support (negate and complement),
     * since this is only a BINARY operator precedence, not a general-purpose precedence table.  Assume that
     * all unary operators take precedence over all binary operators.
     */
    DbgLib.aBinOpPrecedence = {
        '||':   5,      // logical OR
        '&&':   6,      // logical AND
        '!':    7,      // bitwise OR (conflicts with logical NOT, but we never supported that)
        '|':    7,      // bitwise OR
        '^!':   8,      // bitwise XOR (added by MACRO-10 sometime between the 1972 and 1978 versions)
        '&':    9,      // bitwise AND
        '!=':   10,     // inequality
        '==':   10,     // equality
        '>=':   11,     // greater than or equal to
        '>':    11,     // greater than
        '<=':   11,     // less than or equal to
        '<':    11,     // less than
        '>>>':  12,     // unsigned bitwise right shift
        '>>':   12,     // bitwise right shift
        '<<':   12,     // bitwise left shift
        '-':    13,     // subtraction
        '+':    13,     // addition
        '^/':   14,     // remainder
        '/':    14,     // division
        '*':    14,     // multiplication
    //  '_':    19,     // MACRO-10 shift operator
        '^_':   19,     // MACRO-10 internal shift operator (converted from 'B' suffix form that MACRO-10 uses)
        '{':    20,     // open grouped expression (converted from achGroup[0])
        '}':    20      // close grouped expression (converted from achGroup[1])
    };
    DbgLib.aDECOpPrecedence = {
        ',,':   1,      // high-word,,low-word
        '||':   5,      // logical OR
        '&&':   6,      // logical AND
        '!=':   10,     // inequality
        '==':   10,     // equality
        '>=':   11,     // greater than or equal to
        '>':    11,     // greater than
        '<=':   11,     // less than or equal to
        '<':    11,     // less than
        '>>>':  12,     // unsigned bitwise right shift
        '>>':   12,     // bitwise right shift
        '<<':   12,     // bitwise left shift
        '-':    13,     // subtraction
        '+':    13,     // addition
        '^/':   14,     // remainder
        '/':    14,     // division
        '*':    14,     // multiplication
        '!':    15,     // bitwise OR (conflicts with logical NOT, but we never supported that)
        '|':    15,     // bitwise OR
        '^!':   15,     // bitwise XOR (added by MACRO-10 sometime between the 1972 and 1978 versions)
        '&':    15,     // bitwise AND
    //  '_':    19,     // MACRO-10 shift operator
        '^_':   19,     // MACRO-10 internal shift operator (converted from 'B' suffix form that MACRO-10 uses)
        '{':    20,     // open grouped expression (converted from achGroup[0])
        '}':    20      // close grouped expression (converted from achGroup[1])
    };

    /*
     * Assorted constants
     */
    DbgLib.TWO_POW32 = Math.pow(2, 32);

}   // endif DEBUGGER

DbgLib.EVENTS = {
    EXIT:       0,
    ENTER:      1,
    READY:      2,
};

/**
 * @copyright https://www.pcjs.org/machines/pcx80/modules/v2/debugger.js (C) 2012-2025 Jeff Parsons
 */

/** @typedef {{ addr: (number|undefined), fTemporary: (boolean|undefined), sCmd: (string|undefined), aCmds: (Array.<string>|undefined) }} */
let DbgAddrX80;

/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @class DebuggerX80
 * @unrestricted
 */
class DebuggerX80 extends DbgLib {
    /**
     * DebuggerX80(parmsDbg)
     *
     * The DebuggerX80 component supports the following optional (parmsDbg) properties:
     *
     *      commands: string containing zero or more commands, separated by ';'
     *
     *      messages: string containing zero or more message categories to enable;
     *      multiple categories must be separated by ',' or ';'.  Parsed by messageInit().
     *
     * The DebuggerX80 component is an optional component that implements a variety of user
     * commands for controlling the CPU, dumping and editing memory, etc.
     *
     * @this {DebuggerX80}
     * @param {Object} parmsDbg
     */
    constructor(parmsDbg)
    {
        super("Debugger", parmsDbg, -1);

        if (DEBUGGER) {

            this.style = DebuggerX80.STYLE_8080;

            /*
             * Most commands that require an address call parseAddr(), which defaults to dbgAddrNextCode
             * or dbgAddrNextData when no address has been given.  doDump() and doUnassemble(), in turn,
             * update dbgAddrNextData and dbgAddrNextCode, respectively, when they're done.
             *
             * For TEMPORARY breakpoint addresses, we set fTemporary to true, so that they can be automatically
             * cleared when they're hit.
             */
            this.dbgAddrNextCode = this.newAddr();
            this.dbgAddrNextData = this.newAddr();
            this.dbgAddrAssemble = this.newAddr();

            /*
             * aSymbolTable is an array of SymbolTable objects, one per ROM or other chunk of address space,
             * where each object contains the following properties:
             *
             *      sModule
             *      addr (physical address, if any; eg, symbols for a ROM)
             *      len
             *      aSymbols
             *      aOffsets
             *
             * See addSymbols() for more details, since that's how callers add sets of symbols to the table.
             */
            this.aSymbolTable = [];

            /*
             * clearBreakpoints() initializes the breakpoints lists: aBreakExec is a list of addresses
             * to halt on whenever attempting to execute an instruction at the corresponding address,
             * and aBreakRead and aBreakWrite are lists of addresses to halt on whenever a read or write,
             * respectively, occurs at the corresponding address.
             *
             * NOTE: Curiously, after upgrading the Google Closure Compiler from v20141215 to v20150609,
             * the resulting compiled code would crash in clearBreakpoints(), because the (renamed) aBreakRead
             * property was already defined.  To eliminate whatever was confusing the Closure Compiler, I've
             * explicitly initialized all the properties that clearBreakpoints() (re)initializes.
             */
            this.aBreakExec = this.aBreakRead = this.aBreakWrite = [];
            this.clearBreakpoints();

            /*
             * The new "bn" command allows you to specify a number of instructions to execute and then stop;
             * "bn 0" disables any outstanding count.
             */
            this.nBreakIns = 0;

            /*
             * Execution history is allocated by historyInit() whenever checksEnabled() conditions change.
             * Execution history is updated whenever the CPU calls checkInstruction(), which will happen
             * only when checksEnabled() returns true (eg, whenever one or more breakpoints have been set).
             * This ensures that, by default, the CPU runs as fast as possible.
             */
            this.historyInit();

            /*
             * Initialize DebuggerX80 message support
             */
            this.afnDumpers = {};
            this.messageInit(parmsDbg['messages']);

            this.sInitCommands = parmsDbg['commands'];

            /*
             * Make it easier to access Debugger commands from an external REPL, like the WebStorm "live" console
             * window; eg:
             *
             *      pcX80('r')
             *      pcX80('dw 0:0')
             *      pcX80('h')
             *      ...
             */
            let dbg = this;
            if (globals.window[APPCLASS] === undefined) {
                globals.window[APPCLASS] = function(s) { return dbg.doCommands(s); };
            }

        }   // endif DEBUGGER
    }

    /**
     * initBus(bus, cpu, dbg)
     *
     * @this {DebuggerX80}
     * @param {ComputerX80} cmp
     * @param {BusX80} bus
     * @param {CPUStateX80} cpu
     * @param {DebuggerX80} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.bus = bus;
        this.cpu = cpu;
        this.cmp = cmp;

        /*
         * Re-initialize Debugger message support if necessary
         */
        let sMessages = cmp.getMachineParm('messages');
        if (sMessages) this.messageInit(sMessages);

        this.aaOpDescs = DebuggerX80.aaOpDescs;

        this.messageDump(MESSAGE.BUS,  function onDumpBus(asArgs) { dbg.dumpBus(asArgs); });

        this.setReady();
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * @this {DebuggerX80}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea", "canvas")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "debugInput")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        let dbg = this;
        switch (sBinding) {

        case "debugInput":
            this.bindings[sBinding] = control;
            this.controlDebug = /** @type {HTMLInputElement} */ (control);
            /*
             * For halted machines, this is fine, but for auto-start machines, it can be annoying.
             *
             *      control.focus();
             */
            control.onkeydown = function onKeyDownDebugInput(event) {
                let sCmd;
                if (event.keyCode == Keys.KEYCODE.CR) {
                    sCmd = dbg.controlDebug.value;
                    dbg.controlDebug.value = "";
                    dbg.doCommands(sCmd, true);
                }
                else if (event.keyCode == Keys.KEYCODE.ESC) {
                    dbg.controlDebug.value = sCmd = "";
                }
                else {
                    if (event.keyCode == Keys.KEYCODE.UP) {
                        sCmd = dbg.getPrevCommand();
                    }
                    else if (event.keyCode == Keys.KEYCODE.DOWN) {
                        sCmd = dbg.getNextCommand();
                    }
                    if (sCmd != null) {
                        let cch = sCmd.length;
                        dbg.controlDebug.value = sCmd;
                        dbg.controlDebug.setSelectionRange(cch, cch);
                    }
                }
                if (sCmd != null && event.preventDefault) event.preventDefault();
            };
            return true;

        case "debugEnter":
            this.bindings[sBinding] = control;
            WebLib.onClickRepeat(
                control,
                500, 100,
                function onClickDebugEnter(fRepeat) {
                    if (dbg.controlDebug) {
                        let sCmds = dbg.controlDebug.value;
                        dbg.controlDebug.value = "";
                        dbg.doCommands(sCmds, true);
                        return true;
                    }
                    dbg.printf(MESSAGE.DEBUG + MESSAGE.LOG, "no debugger input buffer\n");
                    return false;
                }
            );
            return true;

        case "step":
            this.bindings[sBinding] = control;
            WebLib.onClickRepeat(
                control,
                500, 100,
                function onClickStep(fRepeat) {
                    let fCompleted = false;
                    if (!dbg.isBusy(true)) {
                        dbg.setBusy(true);
                        fCompleted = dbg.stepCPU(fRepeat? 1 : 0);
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
     * updateFocus()
     *
     * @this {DebuggerX80}
     */
    updateFocus()
    {
        if (this.controlDebug) this.controlDebug.focus();
    }

    /**
     * getAddr(dbgAddr, fWrite, nb)
     *
     * @this {DebuggerX80}
     * @param {DbgAddrX80|null|undefined} dbgAddr
     * @param {boolean} [fWrite]
     * @param {number} [nb] number of bytes to check (1 or 2); default is 1
     * @returns {number} is the corresponding linear address, or CPUDefX80.ADDR_INVALID
     */
    getAddr(dbgAddr, fWrite, nb)
    {
        let addr = dbgAddr && dbgAddr.addr;
        if (addr == null) {
            addr = CPUDefX80.ADDR_INVALID;
        }
        return addr;
    }

    /**
     * getByte(dbgAddr, inc)
     *
     * We must route all our memory requests through the CPU now, in case paging is enabled.
     *
     * @this {DebuggerX80}
     * @param {DbgAddrX80} dbgAddr
     * @param {number} [inc]
     * @returns {number}
     */
    getByte(dbgAddr, inc)
    {
        let b = 0xff;
        let addr = this.getAddr(dbgAddr, false, 1);
        if (addr !== CPUDefX80.ADDR_INVALID) {
            b = this.bus.getByteDirect(addr);
            if (inc) this.incAddr(dbgAddr, inc);
        }
        return b;
    }

    /**
     * getWord(dbgAddr, fAdvance)
     *
     * @this {DebuggerX80}
     * @param {DbgAddrX80} dbgAddr
     * @param {boolean} [fAdvance]
     * @returns {number}
     */
    getWord(dbgAddr, fAdvance)
    {
        return this.getShort(dbgAddr, fAdvance? 2 : 0);
    }

    /**
     * getShort(dbgAddr, inc)
     *
     * @this {DebuggerX80}
     * @param {DbgAddrX80} dbgAddr
     * @param {number} [inc]
     * @returns {number}
     */
    getShort(dbgAddr, inc)
    {
        let w = 0xffff;
        let addr = this.getAddr(dbgAddr, false, 2);
        if (addr !== CPUDefX80.ADDR_INVALID) {
            w = this.bus.getShortDirect(addr);
            if (inc) this.incAddr(dbgAddr, inc);
        }
        return w;
    }

    /**
     * setByte(dbgAddr, b, inc)
     *
     * @this {DebuggerX80}
     * @param {DbgAddrX80} dbgAddr
     * @param {number} b
     * @param {number} [inc]
     */
    setByte(dbgAddr, b, inc)
    {
        let addr = this.getAddr(dbgAddr, true, 1);
        if (addr !== CPUDefX80.ADDR_INVALID) {
            this.bus.setByteDirect(addr, b);
            if (inc) this.incAddr(dbgAddr, inc);
            this.cpu.updateCPU(true);           // we set fForce to true in case video memory was the target
        }
    }

    /**
     * setShort(dbgAddr, w, inc)
     *
     * @this {DebuggerX80}
     * @param {DbgAddrX80} dbgAddr
     * @param {number} w
     * @param {number} [inc]
     */
    setShort(dbgAddr, w, inc)
    {
        let addr = this.getAddr(dbgAddr, true, 2);
        if (addr !== CPUDefX80.ADDR_INVALID) {
            this.bus.setShortDirect(addr, w);
            if (inc) this.incAddr(dbgAddr, inc);
            this.cpu.updateCPU(true);           // we set fForce to true in case video memory was the target
        }
    }

    /**
     * newAddr(addr)
     *
     * Returns a NEW DbgAddrX80 object, initialized with specified values and/or defaults.
     *
     * @this {DebuggerX80}
     * @param {number} [addr]
     * @returns {DbgAddrX80}
     */
    newAddr(addr)
    {
        return {addr: addr, fTemporary: false};
    }

    /**
     * setAddr(dbgAddr, addr)
     *
     * Updates an EXISTING DbgAddrX80 object, initialized with specified values and/or defaults.
     *
     * @this {DebuggerX80}
     * @param {DbgAddrX80} dbgAddr
     * @param {number} addr
     * @returns {DbgAddrX80}
     */
    setAddr(dbgAddr, addr)
    {
        dbgAddr.addr = addr;
        dbgAddr.fTemporary = false;
        return dbgAddr;
    }

    /**
     * packAddr(dbgAddr)
     *
     * Packs a DbgAddrX80 object into an Array suitable for saving in a machine state object.
     *
     * @this {DebuggerX80}
     * @param {DbgAddrX80} dbgAddr
     * @returns {Array}
     */
    packAddr(dbgAddr)
    {
        return [dbgAddr.addr, dbgAddr.fTemporary];
    }

    /**
     * unpackAddr(aAddr)
     *
     * Unpacks a DbgAddrX80 object from an Array created by packAddr() and restored from a saved machine state.
     *
     * @this {DebuggerX80}
     * @param {Array} aAddr
     * @returns {DbgAddrX80}
     */
    unpackAddr(aAddr)
    {
        return {addr: aAddr[0], fTemporary: aAddr[1]};
    }

    /**
     * parseAddr(sAddr, fCode, fNoChecks)
     *
     * Address evaluation and validation (eg, range checks) are no longer performed at this stage.  That's
     * done later, by getAddr(), which returns CPUDefX80.ADDR_INVALID for invalid segments, out-of-range offsets,
     * etc.  The Debugger's low-level get/set memory functions verify all getAddr() results, but even if an
     * invalid address is passed through to the Bus memory interfaces, the address will simply be masked with
     * BusX80.nBusLimit; in the case of CPUDefX80.ADDR_INVALID, that will generally refer to the top of the physical
     * address space.
     *
     * @this {DebuggerX80}
     * @param {string|undefined} sAddr
     * @param {boolean} [fCode] (true if target is code, false if target is data)
     * @param {boolean} [fNoChecks] (true when setting breakpoints that may not be valid now, but will be later)
     * @returns {DbgAddrX80|null|undefined}
     */
    parseAddr(sAddr, fCode, fNoChecks)
    {
        let dbgAddr;
        let dbgAddrNext = (fCode? this.dbgAddrNextCode : this.dbgAddrNextData);
        let addr = dbgAddrNext.addr;
        if (sAddr !== undefined) {
            sAddr = this.parseReference(sAddr) || sAddr;
            dbgAddr = this.findSymbolAddr(sAddr);
            if (dbgAddr) return dbgAddr;
            addr = this.parseExpression(sAddr);
        }
        if (addr != null) {
            dbgAddr = this.newAddr(addr);
        }
        return dbgAddr;
    }

    /**
     * parseAddrOptions(dbdAddr, sOptions)
     *
     * @this {DebuggerX80}
     * @param {DbgAddrX80} dbgAddr
     * @param {string} [sOptions]
     */
    parseAddrOptions(dbgAddr, sOptions)
    {
        if (sOptions) {
            let a = sOptions.match(/(['"])(.*?)\1/);
            if (a) {
                dbgAddr.aCmds = this.parseCommand(dbgAddr.sCmd = a[2]);
            }
        }
    }

    /**
     * incAddr(dbgAddr, inc)
     *
     * @this {DebuggerX80}
     * @param {DbgAddrX80} dbgAddr
     * @param {number} [inc] contains value to increment dbgAddr by (default is 1)
     */
    incAddr(dbgAddr, inc)
    {
        if (dbgAddr.addr != null) {
            dbgAddr.addr += (inc || 1);
        }
    }

    /**
     * toHexOffset(off)
     *
     * @this {DebuggerX80}
     * @param {number|null|undefined} [off]
     * @returns {string} the hex representation of off
     */
    toHexOffset(off)
    {
        return StrLib.toHex(off, 4);
    }

    /**
     * toHexAddr(dbgAddr)
     *
     * @this {DebuggerX80}
     * @param {DbgAddrX80} dbgAddr
     * @returns {string} the hex representation of the address
     */
    toHexAddr(dbgAddr)
    {
        return this.toHexOffset(dbgAddr.addr);
    }

    /**
     * getSZ(dbgAddr, cchMax)
     *
     * Gets zero-terminated (aka "ASCIIZ") string from dbgAddr.  It also stops at the first '$', in case this is
     * a '$'-terminated string -- mainly because I'm lazy and didn't feel like writing a separate get() function.
     * Yes, a zero-terminated string containing a '$' will be prematurely terminated, and no, I don't care.
     *
     * @this {DebuggerX80}
     * @param {DbgAddrX80} dbgAddr
     * @param {number} [cchMax] (default is 256)
     * @returns {string} (and dbgAddr advanced past the terminating zero)
     */
    getSZ(dbgAddr, cchMax)
    {
        let s = "";
        cchMax = cchMax || 256;
        while (s.length < cchMax) {
            let b = this.getByte(dbgAddr, 1);
            if (!b || b == 0x24 || b >= 127) break;
            s += (b >= 32? String.fromCharCode(b) : '.');
        }
        return s;
    }

    /**
     * dumpBlocks(aBlocks, sAddr)
     *
     * @this {DebuggerX80}
     * @param {Array} aBlocks
     * @param {string} [sAddr] (optional block address)
     */
    dumpBlocks(aBlocks, sAddr)
    {
        let addr = 0, i = 0, n = aBlocks.length;

        if (sAddr) {
            addr = this.getAddr(this.parseAddr(sAddr));
            if (addr === CPUDefX80.ADDR_INVALID) {
                this.printf("invalid address: %s\n", sAddr);
                return;
            }
            i = addr >>> this.bus.nBlockShift;
            n = 1;
        }

        this.printf("blockid   physical   blockaddr   used    size    type\n");
        this.printf("--------  ---------  ----------  ------  ------  ----\n");

        let typePrev = -1, cPrev = 0;
        while (n--) {
            let block = aBlocks[i];
            if (block.type == typePrev) {
                if (!cPrev++) this.printf("...\n");
            } else {
                typePrev = block.type;
                let sType = MemoryX80.TYPE.NAMES[typePrev];
                if (block) {
                    this.printf("%x  %%%x  %%%%%x  %#06x  %#06x  %s\n", block.id, i << this.bus.nBlockShift, block.addr, block.used, block.size, sType);
                }
                if (typePrev != MemoryX80.TYPE.NONE) typePrev = -1;
                cPrev = 0;
            }
            addr += this.bus.nBlockSize;
            i++;
        }
    }

    /**
     * dumpBus(asArgs)
     *
     * Dumps Bus allocations.
     *
     * @this {DebuggerX80}
     * @param {Array.<string>} asArgs (asArgs[0] is an optional block address)
     */
    dumpBus(asArgs)
    {
        this.dumpBlocks(this.bus.aMemBlocks, asArgs[0]);
    }

    /**
     * dumpHistory(sPrev, sLines)
     *
     * If sLines is not a number, it can be a instruction filter.  However, for the moment, the only
     * supported filter is "call", which filters the history buffer for all CALL and RET instructions
     * from the specified previous point forward.
     *
     * @this {DebuggerX80}
     * @param {string} [sPrev] is a (decimal) number of instructions to rewind to (default is 10)
     * @param {string} [sLines] is a (decimal) number of instructions to print (default is, again, 10)
     */
    dumpHistory(sPrev, sLines)
    {
        let sMore = "";
        let cHistory = 0;
        let iHistory = this.iOpcodeHistory;
        let aHistory = this.aOpcodeHistory;

        if (aHistory.length) {
            let nPrev = +sPrev || this.nextHistory;
            let nLines = +sLines || 10;

            if (isNaN(nPrev)) {
                nPrev = nLines;
            } else {
                sMore = "more ";
            }

            if (nPrev > aHistory.length) {
                this.printf("note: only %d available\n", aHistory.length);
                nPrev = aHistory.length;
            }

            iHistory -= nPrev;
            if (iHistory < 0) {
                /*
                 * If the dbgAddr of the last aHistory element contains a valid selector, wrap around.
                 */
                if (aHistory[aHistory.length - 1].addr == null) {
                    nPrev = iHistory + nPrev;
                    iHistory = 0;
                } else {
                    iHistory += aHistory.length;
                }
            }

            let aFilters = [];
            if (sLines == "call") {
                nLines = 100000;
                aFilters = ["CALL"];
            }

            if (sPrev !== undefined) {
                this.printf("%d instructions earlier:\n", nPrev);
            }

            /*
             * TODO: The following is necessary to prevent dumpHistory() from causing additional (or worse, recursive)
             * faults due to segmented addresses that are no longer valid, but the only alternative is to dramatically
             * increase the amount of memory used to store instruction history (eg, storing copies of all the instruction
             * bytes alongside the execution addresses).
             *
             * For now, we're living dangerously, so that our history dumps actually work.
             *
             *      this.nSuppressBreaks++;
             *
             * If you re-enable this protection, be sure to re-enable the decrement below, too.
             */
            let sDump = "";
            while (nLines > 0 && iHistory != this.iOpcodeHistory) {

                let dbgAddr = aHistory[iHistory++];
                if (dbgAddr.addr == null) break;

                /*
                 * We must create a new dbgAddr from the address in aHistory, because dbgAddr was
                 * a reference, not a copy, and we don't want getInstruction() modifying the original.
                 */
                let dbgAddrNew = this.newAddr(dbgAddr.addr);

                let sComment = "history";
                let nSequence = nPrev--;
                if (MAXDEBUG && dbgAddr.cycleCount != null) {
                    sComment = "cycles";
                    nSequence = dbgAddr.cycleCount;
                }

                let sInstruction = this.getInstruction(dbgAddrNew, sComment, nSequence);

                if (!aFilters.length || sInstruction.indexOf(aFilters[0]) >= 0) {
                    sDump += sInstruction + "\n";
                }

                /*
                 * If there were OPERAND or ADDRESS overrides on the previous instruction, getInstruction()
                 * will have automatically disassembled additional bytes, so skip additional history entries.
                 */
                if (dbgAddrNew.cOverrides) {
                    iHistory += dbgAddrNew.cOverrides; nLines -= dbgAddrNew.cOverrides; nPrev -= dbgAddrNew.cOverrides;
                }

                if (iHistory >= aHistory.length) iHistory = 0;
                this.nextHistory = nPrev;
                cHistory++;
                nLines--;
            }
            if (sDump) this.printf("%s\n", sDump);
            /*
             * See comments above.
             *
             *      this.nSuppressBreaks--;
             */
        }

        if (!cHistory) {
            this.printf("no %shistory available\n", sMore);
            this.nextHistory = undefined;
        }
    }

    /**
     * messageInit(sEnable)
     *
     * @this {DebuggerX80}
     * @param {string|undefined} sEnable contains zero or more message categories to enable, separated by ','
     */
    messageInit(sEnable)
    {
        this.dbg = this;
        this.bitsMessage = this.bitsWarning = MESSAGE.WARNING;
        this.sMessagePrev = null;
        this.aMessageBuffer = [];
        /*
         * Internally, we use "key" instead of "keys", since the latter is a method on JavasScript objects,
         * but externally, we allow the user to specify "keys"; "kbd" is also allowed as shorthand for "keyboard".
         */
        let aEnable = this.parseCommand(sEnable.replace("keys","key").replace("kbd","keyboard"), false, ',');
        if (aEnable.length) {
            for (let m in MESSAGE.NAMES) {
                if (UsrLib.indexOf(aEnable, m) >= 0) {
                    this.bitsMessage |= MESSAGE.NAMES[m];
                    this.printf("%s messages enabled\n", m);
                }
            }
        }
    }

    /**
     * messageDump(bitMessage, fnDumper)
     *
     * @this {DebuggerX80}
     * @param {number} bitMessage is one Messages category flag
     * @param {function(Array.<string>)} fnDumper is a function the Debugger can use to dump data for that category
     * @returns {boolean} true if successfully registered, false if not
     */
    messageDump(bitMessage, fnDumper)
    {
        for (let m in MESSAGE.NAMES) {
            if (bitMessage == MESSAGE.NAMES[m]) {
                this.afnDumpers[m] = fnDumper;
                return true;
            }
        }
        return false;
    }

    /**
     * getRegIndex(sReg, off)
     *
     * @this {DebuggerX80}
     * @param {string} sReg
     * @param {number} [off] optional offset into sReg
     * @returns {number} register index, or -1 if not found
     */
    getRegIndex(sReg, off)
    {
        let i;
        sReg = sReg.toUpperCase();
        if (off == null) {
            i = UsrLib.indexOf(DebuggerX80.REGS, sReg);
        } else {
            i = UsrLib.indexOf(DebuggerX80.REGS, sReg.substr(off, 2));
            if (i < 0) i = UsrLib.indexOf(DebuggerX80.REGS, sReg.substr(off, 1));
        }
        return i;
    }

    /**
     * getRegString(iReg)
     *
     * @this {DebuggerX80}
     * @param {number} iReg
     * @returns {string}
     */
    getRegString(iReg)
    {
        let cch = 0;
        let n = this.getRegValue(iReg);
        if (n !== undefined) {
            switch(iReg) {
            case DebuggerX80.REG_A:
            case DebuggerX80.REG_B:
            case DebuggerX80.REG_C:
            case DebuggerX80.REG_D:
            case DebuggerX80.REG_E:
            case DebuggerX80.REG_H:
            case DebuggerX80.REG_L:
            case DebuggerX80.REG_M:
                cch = 2;
                break;
            case DebuggerX80.REG_BC:
            case DebuggerX80.REG_DE:
            case DebuggerX80.REG_HL:
            case DebuggerX80.REG_SP:
            case DebuggerX80.REG_PC:
            case DebuggerX80.REG_PS:
            case DebuggerX80.REG_PSW:
                cch = 4;
                break;
            }
        }
        return cch? StrLib.toHex(n, cch) : "??";
    }

    /**
     * getRegValue(iReg)
     *
     * @this {DebuggerX80}
     * @param {number} iReg
     * @returns {number|undefined}
     */
    getRegValue(iReg)
    {
        let n;
        if (iReg >= 0) {
            let cpu = this.cpu;
            switch(iReg) {
            case DebuggerX80.REG_A:
                n = cpu.regA;
                break;
            case DebuggerX80.REG_B:
                n = cpu.regB;
                break;
            case DebuggerX80.REG_C:
                n = cpu.regC;
                break;
            case DebuggerX80.REG_BC:
                n = cpu.getBC();
                break;
            case DebuggerX80.REG_D:
                n = cpu.regD;
                break;
            case DebuggerX80.REG_E:
                n = cpu.regE;
                break;
            case DebuggerX80.REG_DE:
                n = cpu.getDE();
                break;
            case DebuggerX80.REG_H:
                n = cpu.regH;
                break;
            case DebuggerX80.REG_L:
                n = cpu.regL;
                break;
            case DebuggerX80.REG_HL:
                n = cpu.getHL();
                break;
            case DebuggerX80.REG_M:
                n = cpu.getByte(cpu.getHL());
                break;
            case DebuggerX80.REG_SP:
                n = cpu.getSP();
                break;
            case DebuggerX80.REG_PC:
                n = cpu.getPC();
                break;
            case DebuggerX80.REG_PS:
                n = cpu.getPS();
                break;
            case DebuggerX80.REG_PSW:
                n = cpu.getPSW();
                break;
            default:
                break;
            }
        }
        return n;
    }

    /**
     * replaceRegs(s)
     *
     * @this {DebuggerX80}
     * @param {string} s
     * @returns {string}
     */
    replaceRegs(s)
    {
        /*
         * Replace any references first; this means that register references inside the reference
         * do NOT need to be prefixed with '@'.
         */
        s = this.parseReference(s) || s;

        /*
         * Replace every @XX (or @XXX), where XX (or XXX) is a register, with the register's value.
         */
        let i = 0;
        let b, sChar, sAddr, dbgAddr, sReplace;
        while ((i = s.indexOf('@', i)) >= 0) {
            let iReg = this.getRegIndex(s, i + 1);
            if (iReg >= 0) {
                s = s.substr(0, i) + this.getRegString(iReg) + s.substr(i + 1 + DebuggerX80.REGS[iReg].length);
            }
            i++;
        }
        /*
         * Replace every #XX, where XX is a hex byte value, with the corresponding ASCII character (if printable).
         */
        i = 0;
        while ((i = s.indexOf('#', i)) >= 0) {
            sChar = s.substr(i+1, 2);
            b = StrLib.parseInt(sChar, 16);
            if (b != null && b >= 32 && b < 127) {
                sReplace = sChar + " '" + String.fromCharCode(b) + "'";
                s = s.replace('#' + sChar, sReplace);
                i += sReplace.length;
                continue;
            }
            i++;
        }
        /*
         * Replace every $XXXX:XXXX, where XXXX:XXXX is a segmented address, with the zero-terminated string at that address.
         */
        i = 0;
        while ((i = s.indexOf('$', i)) >= 0) {
            sAddr = s.substr(i+1, 9);
            dbgAddr = this.parseAddr(sAddr);
            if (dbgAddr) {
                sReplace = sAddr + ' "' + this.getSZ(dbgAddr) + '"';
                s = s.replace('$' + sAddr, sReplace);
                i += sReplace.length;
                continue;
            }
            i++;
        }
        /*
         * Replace every ^XXXX:XXXX, where XXXX:XXXX is a segmented address, with the FCB filename stored at that address.
         */
        i = 0;
        while ((i = s.indexOf('^', i)) >= 0) {
            sAddr = s.substr(i+1, 9);
            dbgAddr = this.parseAddr(sAddr);
            if (dbgAddr) {
                this.incAddr(dbgAddr);
                sReplace = sAddr + ' "' + this.getSZ(dbgAddr, 11) + '"';
                s = s.replace('^' + sAddr, sReplace);
                i += sReplace.length;
                continue;
            }
            i++;
        }
        return s;
    }

    /**
     * message(sMessage, bitsMessage)
     *
     * When we are called, any filtering of bitsMessage (either the caller's implied message bit(s) or any
     * explicitly provided message bits) has already been performed, so the focus here is dealing with other
     * message bits that imply actions (eg, ADDRESS to append the current CPU address to the message, BUFFER
     * to buffer the message instead of displaying it, HALT to also stop the CPU).
     *
     * @this {DebuggerX80}
     * @param {string} sMessage
     * @param {number} [bitsMessage]
     */
    message(sMessage, bitsMessage)
    {
        if ((bitsMessage & MESSAGE.ADDR) && this.cpu) {
            let sAddress = " @" + this.toHexAddr(this.newAddr(this.cpu.getPC()));
            sMessage = sMessage.replace(/(\n?)$/, sAddress);
        }

        if (this.bitsMessage & MESSAGE.BUFFER) {
            this.aMessageBuffer.push(sMessage);
            return;
        }

        if (this.sMessagePrev && sMessage == this.sMessagePrev) return;
        this.sMessagePrev = sMessage;

        if (this.bitsMessage & MESSAGE.HALT) {
            sMessage = sMessage.replace(/(\n?)$/, " (cpu halted)$1");
            this.stopCPU();
        }

        this.print(sMessage, bitsMessage); // + " (" + this.cpu.getCycles() + " cycles)"

        /*
         * We have no idea what the frequency of print() calls might be; all we know is that they easily
         * screw up the CPU's careful assumptions about cycles per burst.  So we call yieldCPU() after every
         * message, to effectively end the current burst and start fresh.
         *
         * TODO: See CPUx80.calcStartTime() for a discussion of why we might want to call yieldCPU() *before*
         * we display the message.
         */
        if (this.cpu) this.cpu.yieldCPU();
    }

    /**
     * messageIO(component, port, bOut, addrFrom, name, bIn, bitsMessage)
     *
     * Most (if not all) port handlers should provide a name for their respective ports, so if no name is provided,
     * we assume this is an unknown port, and display a message by default.
     *
     * @this {DebuggerX80}
     * @param {Component} component
     * @param {number} port
     * @param {number|null} bOut if an output operation
     * @param {number|null} [addrFrom]
     * @param {string|null} [name] of the port, if any
     * @param {number|null} [bIn] is the input value, if known, on an input operation
     * @param {number} [bitsMessage] is one or more Messages category flag(s)
     */
    messageIO(component, port, bOut, addrFrom, name, bIn, bitsMessage)
    {
        bitsMessage |= MESSAGE.PORT;
        if (name == null || (this.bitsMessage & bitsMessage) == bitsMessage) {
            this.printf("%s.%s(%#06x,%s=%#04x): %#04x @%#06x\n", component.idComponent, bOut != null? "outPort" : "inPort", port, name || "unknown", bOut, bIn, addrFrom);
        }
    }

    /**
     * init()
     *
     * @this {DebuggerX80}
     */
    init()
    {
        this.printf("Type ? for help with PCx80 Debugger commands\n");
        this.updateStatus();
        if (this.sInitCommands) {
            let sCmds = this.sInitCommands;
            this.sInitCommands = null;
            this.doCommands(sCmds);
        }
    }

    /**
     * historyInit(fQuiet)
     *
     * This function is intended to be called by the constructor, reset(), addBreakpoint(), findBreakpoint()
     * and any other function that changes the checksEnabled() criteria used to decide whether checkInstruction()
     * should be called.
     *
     * That is, if the history arrays need to be allocated and haven't already been allocated, then allocate them,
     * and if the arrays are no longer needed, then deallocate them.
     *
     * @this {DebuggerX80}
     * @param {boolean} [fQuiet]
     */
    historyInit(fQuiet)
    {
        let i;
        if (!this.checksEnabled()) {
            if (this.aOpcodeHistory && this.aOpcodeHistory.length && !fQuiet) {
                this.printf("instruction history buffer freed\n");
            }
            this.iOpcodeHistory = 0;
            this.aOpcodeHistory = [];
            this.aaOpcodeCounts = [];
            return;
        }
        if (!this.aOpcodeHistory || !this.aOpcodeHistory.length) {
            this.aOpcodeHistory = new Array(DebuggerX80.HISTORY_LIMIT);
            for (i = 0; i < this.aOpcodeHistory.length; i++) {
                /*
                 * Preallocate dummy Addr (Array) objects in every history slot, so that
                 * checkInstruction() doesn't need to call newAddr() on every slot update.
                 */
                this.aOpcodeHistory[i] = this.newAddr();
            }
            this.iOpcodeHistory = 0;
            if (!fQuiet) {
                this.printf("instruction history buffer allocated\n");
            }
        }
        if (!this.aaOpcodeCounts || !this.aaOpcodeCounts.length) {
            this.aaOpcodeCounts = new Array(256);
            for (i = 0; i < this.aaOpcodeCounts.length; i++) {
                this.aaOpcodeCounts[i] = [i, 0];
            }
        }
    }

    /**
     * runCPU(fUpdateFocus)
     *
     * @this {DebuggerX80}
     * @param {boolean} [fUpdateFocus] is true to update focus
     * @returns {boolean} true if run request successful, false if not
     */
    runCPU(fUpdateFocus)
    {
        if (!this.isCPUAvail()) return false;
        this.cpu.runCPU(fUpdateFocus);
        return true;
    }

    /**
     * stepCPU(nCycles, fRegs, fUpdateCPU)
     *
     * @this {DebuggerX80}
     * @param {number} nCycles (0 for one instruction without checking breakpoints)
     * @param {boolean} [fRegs] is true to display registers after step (default is false)
     * @param {boolean} [fUpdateCPU] is false to disable calls to updateCPU() (default is true)
     * @returns {boolean}
     */
    stepCPU(nCycles, fRegs, fUpdateCPU)
    {
        if (!this.isCPUAvail()) return false;

        this.nCycles = 0;

        if (!nCycles) {
            /*
             * When single-stepping, the CPU won't call checkInstruction(), which is good for
             * avoiding breakpoints, but bad for instruction data collection if checks are enabled.
             * So we call checkInstruction() ourselves.
             */
            if (this.checksEnabled()) this.checkInstruction(this.cpu.getPC(), 0);
        }
        try {
            let nCyclesStep = this.cpu.stepCPU(nCycles);
            if (nCyclesStep > 0) {
                this.nCycles += nCyclesStep;
                this.cpu.addCycles(nCyclesStep, true);
                this.cpu.updateChecksum(nCyclesStep);
                this.cOpcodes++;
            }
        }
        catch(exception) {
            if (typeof exception != "number") {
                let e = exception;
                this.nCycles = 0;
                this.cpu.setError(e.stack || e.message);
            }
        }

        /*
         * Because we called cpu.stepCPU() and not cpu.runCPU(), we must nudge the cpu's update code,
         * and then update our own state.  Normally, the only time fUpdateCPU will be false is when doTrace()
         * is calling us in a loop, in which case it will perform its own updateCPU() when it's done.
         */
        if (fUpdateCPU !== false) this.cpu.updateCPU();

        this.updateStatus(fRegs || false);
        return (this.nCycles > 0);
    }

    /**
     * stopCPU()
     *
     * @this {DebuggerX80}
     * @param {boolean} [fComplete]
     */
    stopCPU(fComplete)
    {
        if (this.cpu) this.cpu.stopCPU(fComplete);
    }

    /**
     * updateStatus(fRegs)
     *
     * @this {DebuggerX80}
     * @param {boolean} [fRegs] (default is true)
     */
    updateStatus(fRegs)
    {
        if (fRegs === undefined) fRegs = true;

        this.dbgAddrNextCode = this.newAddr(this.cpu.getPC());
        /*
         * this.nStep used to be a simple boolean, but now it's 0 (or undefined)
         * if inactive, 1 if stepping over an instruction without a register dump, or 2
         * if stepping over an instruction with a register dump.
         */
        if (!fRegs || this.nStep == 1) {
            this.doUnassemble();
        } else {
            this.doRegisters();
        }
    }

    /**
     * isCPUAvail()
     *
     * Make sure the CPU is ready (finished initializing), not busy (already running), and not in an error state.
     *
     * @this {DebuggerX80}
     * @returns {boolean}
     */
    isCPUAvail()
    {
        if (!this.cpu || !this.cpu.isReady() || !this.cpu.isPowered() || this.cpu.isBusy()) {
            return false;
        }
        return !this.cpu.isError();
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {DebuggerX80}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) {
            /*
             * Because Debugger save/restore support is somewhat limited (and didn't always exist),
             * we deviate from the typical save/restore design pattern: instead of reset OR restore,
             * we always reset and then perform a (potentially limited) restore.
             */
            this.reset(true);

            // this.printf("%s\n", data? "resuming" : "powering up");

            if (data && this.restore) {
                if (!this.restore(data)) return false;
            }
        }
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {DebuggerX80}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean}
     */
    powerDown(fSave, fShutdown)
    {
        if (fShutdown) this.printf("%s\n", fSave? "suspending" : "shutting down");
        return fSave? this.save() : true;
    }

    /**
     * reset(fQuiet)
     *
     * This is a notification handler, called by the Computer, to inform us of a reset.
     *
     * @this {DebuggerX80}
     * @param {boolean} fQuiet (true only when called from our own powerUp handler)
     */
    reset(fQuiet)
    {
        this.historyInit();
        this.cOpcodes = this.cOpcodesStart = 0;
        this.sMessagePrev = null;
        this.nCycles = 0;
        this.dbgAddrNextCode = this.newAddr(this.cpu.getPC());
        /*
         * fRunning is set by start() and cleared by stop().  In addition, we clear
         * it here, so that if the CPU is reset while running, we can prevent stop()
         * from unnecessarily dumping the CPU state.
         */
        this.flags.running = false;
        this.clearTempBreakpoint();
        if (!fQuiet) this.updateStatus();
    }

    /**
     * save()
     *
     * This implements (very rudimentary) save support for the Debugger component.
     *
     * @this {DebuggerX80}
     * @returns {Object}
     */
    save()
    {
        let state = new State(this);
        state.set(0, this.packAddr(this.dbgAddrNextCode));
        state.set(1, this.packAddr(this.dbgAddrAssemble));
        state.set(2, [this.aPrevCmds, this.fAssemble, this.bitsMessage]);
        state.set(3, this.aSymbolTable);
        return state.data();
    }

    /**
     * restore(data)
     *
     * This implements (very rudimentary) restore support for the Debugger component.
     *
     * @this {DebuggerX80}
     * @param {Object} data
     * @returns {boolean} true if successful, false if failure
     */
    restore(data)
    {
        let i = 0;
        if (data[2] !== undefined) {
            this.dbgAddrNextCode = this.unpackAddr(data[i++]);
            this.dbgAddrAssemble = this.unpackAddr(data[i++]);
            this.aPrevCmds = data[i][0];
            if (typeof this.aPrevCmds == "string") this.aPrevCmds = [this.aPrevCmds];
            this.fAssemble = data[i][1];
            this.bitsMessage |= data[i][2];     // keep our current message bits set, and simply "add" any extra bits defined by the saved state
        }
        if (data[3]) this.aSymbolTable = data[3];
        return true;
    }

    /**
     * start(ms, nCycles)
     *
     * This is a notification handler, called by the Computer, to inform us the CPU has started.
     *
     * @this {DebuggerX80}
     * @param {number} ms
     * @param {number} nCycles
     */
    start(ms, nCycles)
    {
        if (!this.nStep) this.printf("running\n");
        this.flags.running = true;
        this.msStart = ms;
        this.nCyclesStart = nCycles;
    }

    /**
     * stop(ms, nCycles)
     *
     * This is a notification handler, called by the Computer, to inform us the CPU has now stopped.
     *
     * @this {DebuggerX80}
     * @param {number} ms
     * @param {number} nCycles
     */
    stop(ms, nCycles)
    {
        if (this.flags.running) {
            this.flags.running = false;
            this.nCycles = nCycles - this.nCyclesStart;
            if (!this.nStep) {
                let sStopped = "stopped";
                if (this.nCycles) {
                    let msTotal = ms - this.msStart;
                    let nCyclesPerSecond = (msTotal > 0? Math.round(this.nCycles * 1000 / msTotal) : 0);
                    sStopped += " (";
                    if (this.checksEnabled()) {
                        sStopped += this.cOpcodes + " opcodes, ";
                        /*
                         * $ops displays progress by calculating cOpcodes - cOpcodesStart, so before
                         * zeroing cOpcodes, we should subtract cOpcodes from cOpcodesStart (since we're
                         * effectively subtracting cOpcodes from cOpcodes as well).
                         */
                        this.cOpcodesStart -= this.cOpcodes;
                        this.cOpcodes = 0;
                    }
                    sStopped += this.nCycles + " cycles, " + msTotal + " ms, " + nCyclesPerSecond + " hz)";
                } else {
                    if (this.messageEnabled(MESSAGE.HALT)) {
                        /*
                         * It's possible the user is trying to 'g' past a fault that was blocked by helpCheckFault()
                         * for the Debugger's benefit; if so, it will continue to be blocked, so try displaying a helpful
                         * message (another helpful tip would be to simply turn off the "halt" message category).
                         */
                        sStopped += " (use the 't' command to execute blocked faults)";
                    }
                }
                this.printf("%s\n", sStopped);
            }
            this.updateStatus(true);
            this.updateFocus();
            this.clearTempBreakpoint(this.cpu.getPC());
        }
    }

    /**
     * checksEnabled(fRelease)
     *
     * This "check" function is called by the CPU; we indicate whether or not every instruction needs to be checked.
     *
     * Originally, this returned true even when there were only read and/or write breakpoints, but those breakpoints
     * no longer require the intervention of checkInstruction(); the Bus component automatically swaps in/out appropriate
     * "checked" Memory access functions to deal with those breakpoints in the corresponding Memory blocks.  So I've
     * simplified the test below.
     *
     * @this {DebuggerX80}
     * @param {boolean} [fRelease] is true for release criteria only; default is false (any criteria)
     * @returns {boolean} true if every instruction needs to pass through checkInstruction(), false if not
     */
    checksEnabled(fRelease)
    {
        return ((DEBUG && !fRelease)? true : (this.aBreakExec.length > 1 || !!this.nBreakIns));
    }

    /**
     * checkInstruction(addr, nState)
     *
     * This "check" function is called by the CPU to inform us about the next instruction to be executed,
     * giving us an opportunity to look for "exec" breakpoints and update opcode frequencies and instruction history.
     *
     * @this {DebuggerX80}
     * @param {number} addr
     * @param {number} nState is < 0 if stepping, 0 if starting, or > 0 if running
     * @returns {boolean} true if breakpoint hit, false if not
     */
    checkInstruction(addr, nState)
    {
        let cpu = this.cpu;

        if (nState > 0) {
            if (this.nBreakIns && !--this.nBreakIns) {
                return true;
            }
            if (this.checkBreakpoint(addr, 1, this.aBreakExec)) {
                return true;
            }
        }

        /*
         * The rest of the instruction tracking logic can only be performed if historyInit() has allocated the
         * necessary data structures.  Note that there is no explicit UI for enabling/disabling history, other than
         * adding/removing breakpoints, simply because it's breakpoints that trigger the call to checkInstruction();
         * well, OK, and a few other things now, like enabling MESSAGE.INT messages.
         */
        if (nState >= 0 && this.aaOpcodeCounts.length) {
            this.cOpcodes++;
            let bOpcode = this.bus.getByteDirect(addr);
            if (bOpcode != null) {
                this.aaOpcodeCounts[bOpcode][1]++;
                let dbgAddr = this.aOpcodeHistory[this.iOpcodeHistory];
                this.setAddr(dbgAddr, cpu.getPC());
                if (DEBUG) dbgAddr.cycleCount = cpu.getCycles();
                if (++this.iOpcodeHistory == this.aOpcodeHistory.length) this.iOpcodeHistory = 0;
            }
        }
        return false;
    }

    /**
     * checkMemoryRead(addr, nb)
     *
     * This "check" function is called by a Memory block to inform us that a memory read occurred, giving us an
     * opportunity to track the read if we want, and look for a matching "read" breakpoint, if any.
     *
     * In the "old days", it would be an error for this call to fail to find a matching Debugger breakpoint, but now
     * Memory blocks have no idea whether the Debugger or the machine's Debug register(s) triggered this "checked" read.
     *
     * If we return true, we "trump" the machine's Debug register(s); false allows normal Debug register processing.
     *
     * @this {DebuggerX80}
     * @param {number} addr
     * @param {number} [nb] (# of bytes; default is 1)
     * @returns {boolean} true if breakpoint hit, false if not
     */
    checkMemoryRead(addr, nb)
    {
        if (this.checkBreakpoint(addr, nb || 1, this.aBreakRead)) {
            this.stopCPU(true);
            return true;
        }
        return false;
    }

    /**
     * checkMemoryWrite(addr, nb)
     *
     * This "check" function is called by a Memory block to inform us that a memory write occurred, giving us an
     * opportunity to track the write if we want, and look for a matching "write" breakpoint, if any.
     *
     * In the "old days", it would be an error for this call to fail to find a matching Debugger breakpoint, but now
     * Memory blocks have no idea whether the Debugger or the machine's Debug register(s) triggered this "checked" write.
     *
     * If we return true, we "trump" the machine's Debug register(s); false allows normal Debug register processing.
     *
     * @this {DebuggerX80}
     * @param {number} addr
     * @param {number} [nb] (# of bytes; default is 1)
     * @returns {boolean} true if breakpoint hit, false if not
     */
    checkMemoryWrite(addr, nb)
    {
        if (this.checkBreakpoint(addr, nb || 1, this.aBreakWrite)) {
            this.stopCPU(true);
            return true;
        }
        return false;
    }

    /**
     * checkPortInput(port, size, data)
     *
     * This "check" function is called by the Bus component to inform us that port input occurred.
     *
     * @this {DebuggerX80}
     * @param {number} port
     * @param {number} size
     * @param {number} data
     * @returns {boolean} true if breakpoint hit, false if not
     */
    checkPortInput(port, size, data)
    {
        /*
         * We trust that the Bus component won't call us unless we told it to, so we halt unconditionally
         */
        this.printf("break on input from port %#06x: %x\n", port, data);
        this.stopCPU(true);
        return true;
    }

    /**
     * checkPortOutput(port, size, data)
     *
     * This "check" function is called by the Bus component to inform us that port output occurred.
     *
     * @this {DebuggerX80}
     * @param {number} port
     * @param {number} size
     * @param {number} data
     * @returns {boolean} true if breakpoint hit, false if not
     */
    checkPortOutput(port, size, data)
    {
        /*
         * We trust that the Bus component won't call us unless we told it to, so we halt unconditionally
         */
        this.printf("break on output to port %#06x: %x\n", port, data);
        this.stopCPU(true);
        return true;
    }

    /**
     * clearBreakpoints()
     *
     * @this {DebuggerX80}
     */
    clearBreakpoints()
    {
        let i, dbgAddr;
        this.aBreakExec = ["bp"];
        if (this.aBreakRead !== undefined) {
            for (i = 1; i < this.aBreakRead.length; i++) {
                dbgAddr = this.aBreakRead[i];
                this.bus.removeMemBreak(this.getAddr(dbgAddr), false);
            }
        }
        this.aBreakRead = ["br"];
        if (this.aBreakWrite !== undefined) {
            for (i = 1; i < this.aBreakWrite.length; i++) {
                dbgAddr = this.aBreakWrite[i];
                this.bus.removeMemBreak(this.getAddr(dbgAddr), true);
            }
        }
        this.aBreakWrite = ["bw"];
        /*
         * nSuppressBreaks ensures we can't get into an infinite loop where a breakpoint lookup requires
         * reading a segment descriptor via getSegment(), and that triggers more memory reads, which triggers
         * more breakpoint checks.
         */
        this.nSuppressBreaks = 0;
    }

    /**
     * addBreakpoint(aBreak, dbgAddr, fTemporary)
     *
     * In case you haven't already figured this out, all our breakpoint commands use the address
     * to identify a breakpoint, not an incrementally assigned breakpoint index like other debuggers;
     * see doBreak() for details.
     *
     * This has a few implications, one being that you CANNOT set more than one kind of breakpoint
     * on a single address.  In practice, that's rarely a problem, because you can almost always set
     * a different breakpoint on a neighboring address.
     *
     * Also, there is one exception to the "one address, one breakpoint" rule, and that involves
     * temporary breakpoints (ie, one-time execution breakpoints that either a "p" or "g" command
     * may create to step over a chunk of code).  Those breakpoints automatically clear themselves,
     * so there usually isn't any need to refer to them using breakpoint commands.
     *
     * TODO: Consider supporting the more "traditional" breakpoint index syntax; the current
     * address-based syntax was implemented solely for expediency and consistency.  At the same time,
     * also consider a more WDEB386-like syntax, where "br" is used to set a variety of access-specific
     * breakpoints, using modifiers like "r1", "r2", "w1", "w2, etc.
     *
     * @this {DebuggerX80}
     * @param {Array} aBreak
     * @param {DbgAddrX80} dbgAddr
     * @param {boolean} [fTemporary]
     * @returns {boolean} true if breakpoint added, false if already exists
     */
    addBreakpoint(aBreak, dbgAddr, fTemporary)
    {
        let fSuccess = true;

        // this.nSuppressBreaks++;

        /*
         * Instead of complaining that a breakpoint already exists (as we used to do), we now
         * allow breakpoints to be re-set; this makes it easier to update any commands that may
         * be associated with the breakpoint.
         *
         * The only exception: we DO allow a temporary breakpoint at an address where there may
         * already be a breakpoint, so that you can easily step ("p" or "g") over such addresses.
         */
        if (!fTemporary) {
            this.findBreakpoint(aBreak, dbgAddr, true, false, true);
        }

        if (aBreak != this.aBreakExec) {
            let addr = this.getAddr(dbgAddr);
            if (addr === CPUDefX80.ADDR_INVALID) {
                this.printf("invalid address: %s\n", this.toHexAddr(dbgAddr));
                fSuccess = false;
            } else {
                this.bus.addMemBreak(addr, aBreak == this.aBreakWrite);
            }
        }

        if (fSuccess) {
            aBreak.push(dbgAddr);
            if (fTemporary) {
                dbgAddr.fTemporary = true;
            }
            else {
                this.printBreakpoint(aBreak, aBreak.length-1, "set");
                this.historyInit();
            }
        }

        // this.nSuppressBreaks--;

        return fSuccess;
    }

    /**
     * findBreakpoint(aBreak, dbgAddr, fRemove, fTemporary, fQuiet)
     *
     * @this {DebuggerX80}
     * @param {Array} aBreak
     * @param {DbgAddrX80} dbgAddr
     * @param {boolean} [fRemove]
     * @param {boolean} [fTemporary]
     * @param {boolean} [fQuiet]
     * @returns {boolean} true if found, false if not
     */
    findBreakpoint(aBreak, dbgAddr, fRemove, fTemporary, fQuiet)
    {
        let fFound = false;
        let addr = this.getAddr(dbgAddr);
        for (let i = 1; i < aBreak.length; i++) {
            let dbgAddrBreak = aBreak[i];
            if (addr == this.getAddr(dbgAddrBreak)) {
                if (!fTemporary || dbgAddrBreak.fTemporary) {
                    fFound = true;
                    if (fRemove) {
                        if (!dbgAddrBreak.fTemporary && !fQuiet) {
                            this.printBreakpoint(aBreak, i, "cleared");
                        }
                        aBreak.splice(i, 1);
                        if (aBreak != this.aBreakExec) {
                            this.bus.removeMemBreak(addr, aBreak == this.aBreakWrite);
                        }
                        /*
                         * We'll mirror the logic in addBreakpoint() and leave the history buffer alone if this
                         * was a temporary breakpoint.
                         */
                        if (!dbgAddrBreak.fTemporary) {
                            this.historyInit();
                        }
                        break;
                    }
                    if (!fQuiet) this.printBreakpoint(aBreak, i, "exists");
                    break;
                }
            }
        }
        return fFound;
    }

    /**
     * listBreakpoints(aBreak)
     *
     * @this {DebuggerX80}
     * @param {Array} aBreak
     * @returns {number} of breakpoints listed, 0 if none
     */
    listBreakpoints(aBreak)
    {
        for (let i = 1; i < aBreak.length; i++) {
            this.printBreakpoint(aBreak, i);
        }
        return aBreak.length - 1;
    }

    /**
     * printBreakpoint(aBreak, i, sAction)
     *
     * @this {DebuggerX80}
     * @param {Array} aBreak
     * @param {number} i
     * @param {string} [sAction]
     */
    printBreakpoint(aBreak, i, sAction)
    {
        let dbgAddr = aBreak[i];
        this.printf("%s %s%s\n", aBreak[0], this.toHexAddr(dbgAddr), (sAction? (' ' + sAction) : (dbgAddr.sCmd? (' "' + dbgAddr.sCmd + '"') : '')));
    }

    /**
     * setTempBreakpoint(dbgAddr)
     *
     * @this {DebuggerX80}
     * @param {DbgAddrX80} dbgAddr of new temp breakpoint
     */
    setTempBreakpoint(dbgAddr)
    {
        this.addBreakpoint(this.aBreakExec, dbgAddr, true);
    }

    /**
     * clearTempBreakpoint(addr)
     *
     * @this {DebuggerX80}
     * @param {number|undefined} [addr] clear all temp breakpoints if no address specified
     */
    clearTempBreakpoint(addr)
    {
        if (addr !== undefined) {
            this.checkBreakpoint(addr, 1, this.aBreakExec, true);
            this.nStep = 0;
        } else {
            for (let i = 1; i < this.aBreakExec.length; i++) {
                let dbgAddrBreak = this.aBreakExec[i];
                if (dbgAddrBreak.fTemporary) {
                    if (!this.findBreakpoint(this.aBreakExec, dbgAddrBreak, true, true)) break;
                    i = 0;
                }
            }
        }
    }

    /**
     * checkBreakpoint(addr, nb, aBreak, fTemporary)
     *
     * @this {DebuggerX80}
     * @param {number} addr
     * @param {number} nb (# of bytes)
     * @param {Array} aBreak
     * @param {boolean} [fTemporary]
     * @returns {boolean} true if breakpoint has been hit, false if not
     */
    checkBreakpoint(addr, nb, aBreak, fTemporary)
    {
        /*
         * Time to check for execution breakpoints; note that this should be done BEFORE updating frequency
         * or history data (see checkInstruction), since we might not actually execute the current instruction.
         */
        let fBreak = false;

        if (!this.nSuppressBreaks++) {

            for (let i = 1; !fBreak && i < aBreak.length; i++) {

                let dbgAddrBreak = aBreak[i];

                if (fTemporary && !dbgAddrBreak.fTemporary) continue;

                /*
                 * We used to calculate the linear address of the breakpoint at the time the
                 * breakpoint was added, so that a breakpoint set in one mode (eg, in real-mode)
                 * would still work as intended if the mode changed later (eg, to protected-mode).
                 *
                 * However, that created difficulties setting protected-mode breakpoints in segments
                 * that might not be defined yet, or that could move in physical memory.
                 *
                 * If you want to create a real-mode breakpoint that will break regardless of mode,
                 * use the physical address of the real-mode memory location instead.
                 */
                let addrBreak = this.getAddr(dbgAddrBreak);
                for (let n = 0; n < nb; n++) {
                    if (addr + n == addrBreak) {
                        let a;
                        fBreak = true;
                        if (dbgAddrBreak.fTemporary) {
                            this.findBreakpoint(aBreak, dbgAddrBreak, true, true);
                            fTemporary = true;
                        }
                        if ((a = dbgAddrBreak.aCmds)) {
                            /*
                             * When one or more commands are attached to a breakpoint, we don't halt by default.
                             * Instead, we set fBreak to true only if, at the completion of all the commands, the
                             * CPU is halted; in other words, you should include "h" as one of the breakpoint commands
                             * if you want the breakpoint to stop execution.
                             *
                             * Another useful command is "if", which will return false if the expression is false,
                             * at which point we'll jump ahead to the next "else" command, and if there isn't an "else",
                             * we abort.
                             */
                            fBreak = false;
                            for (let j = 0; j < a.length; j++) {
                                if (!this.doCommand(a[j], true)) {
                                    if (a[j].indexOf("if")) {
                                        fBreak = true;          // the failed command wasn't "if", so abort
                                        break;
                                    }
                                    let k = j + 1;
                                    for (; k < a.length; k++) {
                                        if (!a[k].indexOf("else")) break;
                                        j++;
                                    }
                                    if (k == a.length) {        // couldn't find an "else" after the "if", so abort
                                        fBreak = true;
                                        break;
                                    }
                                    /*
                                     * If we're still here, we'll execute the "else" command (which is just a no-op),
                                     * followed by any remaining commands.
                                     */
                                }
                            }
                            if (!this.cpu.isRunning()) fBreak = true;
                        }
                        if (fBreak) {
                            if (!fTemporary) this.printBreakpoint(aBreak, i, "hit");
                            break;
                        }
                    }
                }
            }
        }

        this.nSuppressBreaks--;

        return fBreak;
    }

    /**
     * getInstruction(dbgAddr, sComment, nSequence)
     *
     * @this {DebuggerX80}
     * @param {DbgAddrX80} dbgAddr
     * @param {string} [sComment] is an associated comment
     * @param {number|null} [nSequence] is an associated sequence number, undefined if none
     * @returns {string} (and dbgAddr is updated to the next instruction)
     */
    getInstruction(dbgAddr, sComment, nSequence)
    {
        let dbgAddrIns = this.newAddr(dbgAddr.addr);

        let bOpcode = this.getByte(dbgAddr, 1);

        let asOpcodes = this.style != DebuggerX80.STYLE_8086? DebuggerX80.INS_NAMES : DebuggerX80.INS_NAMES_8086;
        let aOpDesc = this.aaOpDescs[bOpcode];
        let iIns = aOpDesc[0];

        let sOperands = "";
        let sOpcode = asOpcodes[iIns];
        let cOperands = aOpDesc.length - 1;
        let typeSizeDefault = DebuggerX80.TYPE_NONE, type;

        for (let iOperand = 1; iOperand <= cOperands; iOperand++) {

            let disp, off, cch;
            let sOperand = "";

            type = aOpDesc[iOperand];
            if (type === undefined) continue;
            if ((type & DebuggerX80.TYPE_OPT) && this.style == DebuggerX80.STYLE_8080) continue;

            let typeMode = type & DebuggerX80.TYPE_MODE;
            if (!typeMode) continue;

            let typeSize = type & DebuggerX80.TYPE_SIZE;
            if (!typeSize) {
                type |= typeSizeDefault;
            } else {
                typeSizeDefault = typeSize;
            }

            let typeOther = type & DebuggerX80.TYPE_OTHER;
            if (!typeOther) {
                type |= (iOperand == 1? DebuggerX80.TYPE_OUT : DebuggerX80.TYPE_IN);
            }

            if (typeMode & DebuggerX80.TYPE_IMM) {
                sOperand = this.getImmOperand(type, dbgAddr);
            }
            else if (typeMode & DebuggerX80.TYPE_REG) {
                sOperand = this.getRegOperand((type & DebuggerX80.TYPE_IREG) >> 8, type, dbgAddr);
            }
            else if (typeMode & DebuggerX80.TYPE_INT) {
                sOperand = ((bOpcode >> 3) & 0x7).toString();
            }

            if (!sOperand || !sOperand.length) {
                sOperands = "INVALID";
                break;
            }
            if (sOperands.length > 0) sOperands += ',';
            sOperands += (sOperand || "???");
        }

        let sBytes = "";
        let sLine = this.toHexAddr(dbgAddrIns) + ' ';
        if (dbgAddrIns.addr !== CPUDefX80.ADDR_INVALID && dbgAddr.addr !== CPUDefX80.ADDR_INVALID) {
            do {
                sBytes += StrLib.toHex(this.getByte(dbgAddrIns, 1), 2);
                if (dbgAddrIns.addr == null) break;
            } while (dbgAddrIns.addr != dbgAddr.addr);
        }

        sLine += StrLib.pad(sBytes, -10);
        sLine += (type & DebuggerX80.TYPE_UNDOC)? '*' : ' ';
        sLine += StrLib.pad(sOpcode, -7);
        if (sOperands) sLine += ' ' + sOperands;

        if (sComment) {
            sLine = StrLib.pad(sLine, -40) + ';' + sComment;
            if (!this.cpu.flags.checksum) {
                sLine += (nSequence != null? '=' + nSequence.toString() : "");
            } else {
                let nCycles = this.cpu.getCycles();
                sLine += "cycles=" + nCycles.toString() + " cs=" + StrLib.toHex(this.cpu.nChecksum);
            }
        }
        return sLine;
    }

    /**
     * getImmOperand(type, dbgAddr)
     *
     * @this {DebuggerX80}
     * @param {number} type
     * @param {DbgAddrX80} dbgAddr
     * @returns {string} operand
     */
    getImmOperand(type, dbgAddr)
    {
        let sOperand = ' ';
        let typeSize = type & DebuggerX80.TYPE_SIZE;

        switch (typeSize) {
        case DebuggerX80.TYPE_BYTE:
            sOperand = StrLib.toHex(this.getByte(dbgAddr, 1), 2);
            break;
        case DebuggerX80.TYPE_SBYTE:
            sOperand = StrLib.toHex((this.getByte(dbgAddr, 1) << 24) >> 24, 4);
            break;
        case DebuggerX80.TYPE_WORD:
            sOperand = StrLib.toHex(this.getShort(dbgAddr, 2), 4);
            break;
        default:
            return "imm(" + StrLib.toHexWord(type) + ')';
        }
        if (this.style == DebuggerX80.STYLE_8086 && (type & DebuggerX80.TYPE_MEM)) {
            sOperand = '[' + sOperand + ']';
        } else if (!(type & DebuggerX80.TYPE_REG)) {
            sOperand = (this.style == DebuggerX80.STYLE_8080? '$' : "0x") + sOperand;
        }
        return sOperand;
    }

    /**
     * getRegOperand(iReg, type, dbgAddr)
     *
     * @this {DebuggerX80}
     * @param {number} iReg
     * @param {number} type
     * @param {DbgAddrX80} dbgAddr
     * @returns {string} operand
     */
    getRegOperand(iReg, type, dbgAddr)
    {
        /*
         * Although this breaks with 8080 assembler conventions, I'm going to experiment with some different
         * mnemonics; specifically, "[HL]" instead of "M".  This is also more in keeping with how getImmOperand()
         * displays memory references (ie, by enclosing them in brackets).
         */
        let sOperand = DebuggerX80.REGS[iReg];
        if (this.style == DebuggerX80.STYLE_8086 && (type & DebuggerX80.TYPE_MEM)) {
            if (iReg == DebuggerX80.REG_M) {
                sOperand = "HL";
            }
            sOperand = '[' + sOperand + ']';
        }
        return sOperand;
    }

    /**
     * parseInstruction(sOp, sOperand, addr)
     *
     * TODO: Unimplemented.  See parseInstruction() in /machines/osi/c1p/modules/v2/debugger.js for a working implementation.
     *
     * @this {DebuggerX80}
     * @param {string} sOp
     * @param {string|undefined} sOperand
     * @param {DbgAddrX80} dbgAddr of memory where this instruction is being assembled
     * @returns {Array.<number>} of opcode bytes; if the instruction can't be parsed, the array will be empty
     */
    parseInstruction(sOp, sOperand, dbgAddr)
    {
        let aOpBytes = [];
        this.printf("not supported yet\n");
        return aOpBytes;
    }

    /**
     * getFlagOutput(sFlag)
     *
     * @this {DebuggerX80}
     * @param {string} sFlag
     * @returns {string} value of flag
     */
    getFlagOutput(sFlag)
    {
        let b;
        switch (sFlag) {
        case "IF":
            b = this.cpu.getIF();
            break;
        case "SF":
            b = this.cpu.getSF();
            break;
        case "ZF":
            b = this.cpu.getZF();
            break;
        case "AF":
            b = this.cpu.getAF();
            break;
        case "PF":
            b = this.cpu.getPF();
            break;
        case "CF":
            b = this.cpu.getCF();
            break;
        default:
            b = 0;
            break;
        }
        return sFlag.charAt(0) + (b? '1' : '0') + ' ';
    }

    /**
     * getRegOutput(iReg)
     *
     * @this {DebuggerX80}
     * @param {number} iReg
     * @returns {string}
     */
    getRegOutput(iReg)
    {
        let sReg = DebuggerX80.REGS[iReg];
        return sReg + '=' + this.getRegString(iReg) + ' ';
    }

    /**
     * getRegDump()
     *
     * Sample 8080 register dump:
     *
     *      A=00 BC=0000 DE=0000 HL=0000 SP=0000 I0 S0 Z0 A0 P0 C0
     *      0000 00         NOP
     *
     * @this {DebuggerX80}
     * @returns {string}
     */
    getRegDump()
    {
        let s;
        s = this.getRegOutput(DebuggerX80.REG_A) +
            this.getRegOutput(DebuggerX80.REG_BC) +
            this.getRegOutput(DebuggerX80.REG_DE) +
            this.getRegOutput(DebuggerX80.REG_HL) +
            this.getRegOutput(DebuggerX80.REG_SP) +
            this.getFlagOutput("IF") + this.getFlagOutput("SF") + this.getFlagOutput("ZF") +
            this.getFlagOutput("AF") + this.getFlagOutput("PF") + this.getFlagOutput("CF");
        return s;
    }

    /**
     * comparePairs(p1, p2)
     *
     * @this {DebuggerX80}
     * @param {number|string|Array|Object} p1
     * @param {number|string|Array|Object} p2
     * @returns {number}
     */
    comparePairs(p1, p2)
    {
        return p1[0] > p2[0]? 1 : p1[0] < p2[0]? -1 : 0;
    }

    /**
     * addSymbols(sModule, addr, len, aSymbols)
     *
     * As fileimage.js (formerly filedump.js, which was formerly convrom.php) explains, aSymbols is a JSON-encoded object
     * whose properties consist of all the symbols (in upper-case), and the values of those properties are objects containing
     * any or all of the following properties:
     *
     *      'v': the value of an absolute (unsized) value
     *      'b': either 1, 2, 4 or undefined if an unsized value
     *      's': either a hard-coded segment or undefined
     *      'o': the offset of the symbol within the associated address space
     *      'l': the original-case version of the symbol, present only if it wasn't originally upper-case
     *      'a': annotation for the specified offset; eg, the original assembly language, with optional comment
     *
     * To that list of properties, we also add:
     *
     *      'p': the physical address (calculated whenever both 's' and 'o' properties are defined)
     *
     * Note that values for any 'v', 'b', 's' and 'o' properties are unquoted decimal values, and the values
     * for any 'l' or 'a' properties are quoted strings. Also, if double-quotes were used in any of the original
     * annotation ('a') values, they will have been converted to two single-quotes, so we're responsible for
     * converting them back to individual double-quotes.
     *
     * For example:
     *      {
     *          'HF_PORT': {
     *              'v':800
     *          },
     *          'HDISK_INT': {
     *              'b':4, 's':0, 'o':52
     *          },
     *          'ORG_VECTOR': {
     *              'b':4, 's':0, 'o':76
     *          },
     *          'CMD_BLOCK': {
     *              'b':1, 's':64, 'o':66
     *          },
     *          'DISK_SETUP': {
     *              'o':3
     *          },
     *          '.40': {
     *              'o':40, 'a':"MOV AX,WORD PTR ORG_VECTOR ;GET DISKETTE VECTOR"
     *          }
     *      }
     *
     * If a symbol only has an offset, then that offset value can be assigned to the symbol property directly:
     *
     *          'DISK_SETUP': 3
     *
     * The last property is an example of an "anonymous" entry, for offsets where there is no associated symbol.
     * Such entries are identified by a period followed by a unique number (usually the offset of the entry), and
     * they usually only contain offset ('o') and annotation ('a') properties.  I could eliminate the leading
     * period, but it offers a very convenient way of quickly discriminating among genuine vs. anonymous symbols.
     *
     * We add all these entries to our internal symbol table, which is an array of 4-element arrays, each of which
     * look like:
     *
     *      [addr, len, aSymbols, aOffsets]
     *
     * There are two basic symbol operations: findSymbol(), which takes an address and finds the symbol, if any,
     * at that address, and findSymbolAddr(), which takes a string and attempts to match it to a non-anonymous
     * symbol with a matching offset ('o') property.
     *
     * To implement findSymbol() efficiently, addSymbols() creates an array of [offset, sSymbol] pairs
     * (aOffsets), one pair for each symbol that corresponds to an offset within the specified address space.
     *
     * We guarantee the elements of aOffsets are in offset order, because we build it using binaryInsert();
     * it's quite likely that the MAP file already ordered all its symbols in offset order, but since they're
     * hand-edited files, we can't assume that, and we need to ensure that findSymbol()'s binarySearch() operates
     * properly.
     *
     * @this {DebuggerX80}
     * @param {string|null} sModule
     * @param {number|null} addr (physical address where the symbols are located, if the memory is physical; eg, ROM)
     * @param {number} len (the size of the region, in bytes)
     * @param {Object} aSymbols (collection of symbols in this group; the format of this collection is described below)
     */
    addSymbols(sModule, addr, len, aSymbols)
    {
        let dbgAddr = {};
        let aOffsets = [];
        for (let sSymbol in aSymbols) {
            let symbol = aSymbols[sSymbol];
            if (typeof symbol == "number") {
                aSymbols[sSymbol] = symbol = {'o': symbol};
            }
            let offSymbol = symbol['o'];
            let sAnnotation = symbol['a'];
            if (offSymbol !== undefined) {
                UsrLib.binaryInsert(aOffsets, [offSymbol >>> 0, sSymbol], this.comparePairs);
            }
            if (sAnnotation) symbol['a'] = sAnnotation.replace(/''/g, "\"");
        }
        let symbolTable = {
            sModule: sModule,
            addr: addr,
            len: len,
            aSymbols: aSymbols,
            aOffsets: aOffsets
        };
        this.aSymbolTable.push(symbolTable);
    }

    /**
     * dumpSymbols()
     *
     * TODO: Add "numerical" and "alphabetical" dump options. This is simply dumping them in whatever
     * order they appeared in the original MAP file.
     *
     * @this {DebuggerX80}
     */
    dumpSymbols()
    {
        for (let iTable = 0; iTable < this.aSymbolTable.length; iTable++) {
            let symbolTable = this.aSymbolTable[iTable];
            for (let sSymbol in symbolTable.aSymbols) {
                if (sSymbol.charAt(0) == '.') continue;
                let symbol = symbolTable.aSymbols[sSymbol];
                let offSymbol = symbol['o'];
                if (offSymbol === undefined) continue;
                let sSymbolOrig = symbolTable.aSymbols[sSymbol]['l'];
                if (sSymbolOrig) sSymbol = sSymbolOrig;
                this.printf("%s %s\n", this.toHexOffset(offSymbol), sSymbol);
            }
        }
    }

    /**
     * findSymbol(dbgAddr, fNearest)
     *
     * Search aSymbolTable for dbgAddr, and return an Array for the corresponding symbol (empty if not found).
     *
     * If fNearest is true, and no exact match was found, then the Array returned will contain TWO sets of
     * entries: [0]-[3] will refer to closest preceding symbol, and [4]-[7] will refer to the closest subsequent symbol.
     *
     * @this {DebuggerX80}
     * @param {DbgAddrX80} dbgAddr
     * @param {boolean} [fNearest]
     * @returns {Array} where [0] == symbol name, [1] == symbol value, [2] == any annotation, and [3] == any associated comment
     */
    findSymbol(dbgAddr, fNearest)
    {
        let aSymbol = [];
        let addrSymbol = this.getAddr(dbgAddr) >>> 0;
        for (let iTable = 0; iTable < this.aSymbolTable.length; iTable++) {
            let symbolTable = this.aSymbolTable[iTable];
            let addr = symbolTable.addr >>> 0;
            let len = symbolTable.len;
            if (addrSymbol >= addr && addrSymbol < addr + len) {
                let offSymbol = addrSymbol - addr;
                let result = UsrLib.binarySearch(symbolTable.aOffsets, [offSymbol], this.comparePairs);
                if (result >= 0) {
                    this.returnSymbol(iTable, result, aSymbol);
                }
                else if (fNearest) {
                    result = ~result;
                    this.returnSymbol(iTable, result-1, aSymbol);
                    this.returnSymbol(iTable, result, aSymbol);
                }
                break;
            }
        }
        return aSymbol;
    }

    /**
     * findSymbolAddr(sSymbol)
     *
     * Search aSymbolTable for sSymbol, and if found, return a dbgAddr (same as parseAddr())
     *
     * @this {DebuggerX80}
     * @param {string} sSymbol
     * @returns {DbgAddrX80|undefined}
     */
    findSymbolAddr(sSymbol)
    {
        let dbgAddr;
        if (sSymbol.match(/^[a-z_][a-z0-9_]*$/i)) {
            let sUpperCase = sSymbol.toUpperCase();
            for (let iTable = 0; iTable < this.aSymbolTable.length; iTable++) {
                let symbolTable = this.aSymbolTable[iTable];
                let symbol = symbolTable.aSymbols[sUpperCase];
                if (symbol !== undefined) {
                    let offSymbol = symbol['o'];
                    if (offSymbol !== undefined) {
                        /*
                         * We assume that every ROM is ORG'ed at 0x0000, and therefore unless the symbol has an
                         * explicitly-defined segment, we return the segment associated with the entire group; for
                         * a ROM, that segment is normally "addrROM >>> 4".  Down the road, we may want/need to
                         * support a special symbol entry (eg, ".ORG") that defines an alternate origin.
                         */
                        dbgAddr = this.newAddr(offSymbol);
                    }
                    /*
                     * The symbol matched, but it wasn't for an address (no 'o' offset), and there's no point
                     * looking any farther, since each symbol appears only once, so we indicate it's an unknown symbol.
                     */
                    break;
                }
            }
        }
        return dbgAddr;
    }

    /**
     * returnSymbol(iTable, iOffset, aSymbol)
     *
     * Helper function for findSymbol().
     *
     * @param {number} iTable
     * @param {number} iOffset
     * @param {Array} aSymbol is updated with the specified symbol, if it exists
     */
    returnSymbol(iTable, iOffset, aSymbol)
    {
        let symbol = {};
        let aOffsets = this.aSymbolTable[iTable].aOffsets;
        let offset = 0, sSymbol = null;
        if (iOffset >= 0 && iOffset < aOffsets.length) {
            offset = aOffsets[iOffset][0];
            sSymbol = aOffsets[iOffset][1];
        }
        if (sSymbol) {
            symbol = this.aSymbolTable[iTable].aSymbols[sSymbol];
            sSymbol = (sSymbol.charAt(0) == '.'? null : (symbol['l'] || sSymbol));
        }
        aSymbol.push(sSymbol);
        aSymbol.push(offset);
        aSymbol.push(symbol['a']);
        aSymbol.push(symbol['c']);
    }

    /**
     * doHelp()
     *
     * @this {DebuggerX80}
     */
    doHelp()
    {
        let s = "commands:";
        for (let sCommand in DebuggerX80.COMMANDS) {
            s += '\n' + StrLib.pad(sCommand, -9) + DebuggerX80.COMMANDS[sCommand];
        }
        if (!this.checksEnabled()) s += "\nnote: frequency/history disabled if no exec breakpoints";
        this.printf("%s\n", s);
    }

    /**
     * doAssemble(asArgs)
     *
     * This always receives the complete argument array, where the order of the arguments is:
     *
     *      [0]: the assemble command (assumed to be "a")
     *      [1]: the target address (eg, "200")
     *      [2]: the operation code, aka instruction name (eg, "adc")
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
     * of automatic target address advancement (see dbgAddrAssemble).
     *
     * NOTE: As the previous example implies, you can even assemble new instructions into ROM address space;
     * as our setByte() function explains, the ROM write-notification handlers only refuse writes from the CPU.
     *
     * @this {DebuggerX80}
     * @param {Array.<string>} asArgs is the complete argument array, beginning with the "a" command in asArgs[0]
     */
    doAssemble(asArgs)
    {
        let dbgAddr = this.parseAddr(asArgs[1], true);
        if (!dbgAddr) return;

        this.dbgAddrAssemble = dbgAddr;
        if (asArgs[2] === undefined) {
            this.printf("begin assemble at %s\n", this.toHexAddr(dbgAddr));
            this.fAssemble = true;
            this.cpu.updateCPU();
            return;
        }

        let aOpBytes = this.parseInstruction(asArgs[2], asArgs[3], dbgAddr);
        if (aOpBytes.length) {
            for (let i = 0; i < aOpBytes.length; i++) {
                this.setByte(dbgAddr, aOpBytes[i], 1);
            }
            /*
             * Since getInstruction() also updates the specified address, dbgAddrAssemble is automatically advanced.
             */
            this.printf("%s\n", this.getInstruction(this.dbgAddrAssemble));
        }
    }

    /**
     * doBreak(sCmd, sAddr, sOptions)
     *
     * As the "help" output below indicates, the following breakpoint commands are supported:
     *
     *      bp [a]  set exec breakpoint on linear addr [a]
     *      br [a]  set read breakpoint on linear addr [a]
     *      bw [a]  set write breakpoint on linear addr [a]
     *      bc [a]  clear breakpoint on linear addr [a] (use "*" for all breakpoints)
     *      bl      list breakpoints
     *
     * to which we have recently added the following I/O breakpoint commands:
     *
     *      bi [p]  toggle input breakpoint on port [p] (use "*" for all input ports)
     *      bo [p]  toggle output breakpoint on port [p] (use "*" for all output ports)
     *
     * These two new commands operate as toggles so that if "*" is used to trap all input (or output),
     * you can also use these commands to NOT trap specific ports.
     *
     *      bn [n]  break after [n] instructions
     *
     * TODO: Update the "bl" command to include any/all I/O breakpoints, and the "bc" command to
     * clear them.  Because "bi" and "bo" commands are piggy-backing on Bus functions, those breakpoints
     * are currently outside the realm of what the "bl" and "bc" commands are aware of.
     *
     * @this {DebuggerX80}
     * @param {string} sCmd
     * @param {string|undefined} [sAddr]
     * @param {string} [sOptions] (the rest of the breakpoint command-line)
     */
    doBreak(sCmd, sAddr, sOptions)
    {
        if (sAddr == '?') {
            this.printf("breakpoint commands:\n");
            this.printf("\tbi [p]\ttoggle break on input port [p]\n");
            this.printf("\tbo [p]\ttoggle break on output port [p]\n");
            this.printf("\tbp [a]\tset exec breakpoint at addr [a]\n");
            this.printf("\tbr [a]\tset read breakpoint at addr [a]\n");
            this.printf("\tbw [a]\tset write breakpoint at addr [a]\n");
            this.printf("\tbc [a]\tclear breakpoint at addr [a]\n");
            this.printf("\tbl\tlist all breakpoints\n");
            this.printf("\tbn [n]\tbreak after [n] instruction(s)\n");
            return;
        }

        let sParm = sCmd.charAt(1);
        if (sParm == 'l') {
            let cBreaks = 0;
            cBreaks += this.listBreakpoints(this.aBreakExec);
            cBreaks += this.listBreakpoints(this.aBreakRead);
            cBreaks += this.listBreakpoints(this.aBreakWrite);
            if (!cBreaks) this.printf("no breakpoints\n");
            return;
        }

        if (sParm == 'n') {
            this.nBreakIns = this.parseValue(sAddr);
            this.printf("break after %d instruction(s)\n", this.nBreakIns);
            return;
        }

        if (sAddr === undefined) {
            this.printf("missing breakpoint address\n");
            return;
        }

        let dbgAddr = this.newAddr();
        if (sAddr != '*') {
            dbgAddr = this.parseAddr(sAddr, true, true);
            if (!dbgAddr) return;
        }

        sAddr = StrLib.toHexWord(dbgAddr.addr);

        if (sParm == 'c') {
            if (dbgAddr.addr == null) {
                this.clearBreakpoints();
                this.printf("all breakpoints cleared\n");
                return;
            }
            if (this.findBreakpoint(this.aBreakExec, dbgAddr, true)) return;
            if (this.findBreakpoint(this.aBreakRead, dbgAddr, true)) return;
            if (this.findBreakpoint(this.aBreakWrite, dbgAddr, true)) return;
            this.printf("breakpoint missing: %s\n", this.toHexAddr(dbgAddr));
            return;
        }

        if (sParm == 'i') {
            this.printf("breakpoint %s: port %s (input)\n", (this.bus.addPortInputBreak(dbgAddr.addr)? "enabled" : "cleared"), sAddr);
            return;
        }

        if (sParm == 'o') {
            this.printf("breakpoint %s: port %s (output)\n", (this.bus.addPortOutputBreak(dbgAddr.addr)? "enabled" : "cleared"), sAddr);
            return;
        }

        if (dbgAddr.addr == null) return;

        this.parseAddrOptions(dbgAddr, sOptions);

        if (sParm == 'p') {
            this.addBreakpoint(this.aBreakExec, dbgAddr);
            return;
        }
        if (sParm == 'r') {
            this.addBreakpoint(this.aBreakRead, dbgAddr);
            return;
        }
        if (sParm == 'w') {
            this.addBreakpoint(this.aBreakWrite, dbgAddr);
            return;
        }
        this.printf("unknown breakpoint command: %s\n", sParm);
    }

    /**
     * doClear(sCmd)
     *
     * @this {DebuggerX80}
     * @param {string} [sCmd] (eg, "cls" or "clear")
     */
    doClear(sCmd)
    {
        this.cmp.clearPanel();
    }

    /**
     * doDump(asArgs)
     *
     * The length parameter is interpreted as a number of bytes, in hex, which we convert to the appropriate number
     * of lines, because we always display whole lines.  If the length is omitted/undefined, it defaults to 0x80 (128.)
     * bytes, which normally translates to 8 lines.
     *
     * @this {DebuggerX80}
     * @param {Array.<string>} asArgs (formerly sCmd, [sAddr], [sLen] and [sBytes])
     */
    doDump(asArgs)
    {
        let m;
        let sCmd = asArgs[0];
        let sAddr = asArgs[1];
        let sLen = asArgs[2];
        let sBytes = asArgs[3];

        if (sAddr == '?') {
            let sDumpers = "";
            for (m in MESSAGE.NAMES) {
                if (this.afnDumpers[m]) {
                    if (sDumpers) sDumpers += ',';
                    sDumpers = sDumpers + m;
                }
            }
            sDumpers += ",state,symbols";
            this.printf("dump memory commands:\n");
            this.printf("\tdb [a] [#]    dump # bytes at address a\n");
            this.printf("\tdw [a] [#]    dump # words at address a\n");
            this.printf("\tdd [a] [#]    dump # dwords at address a\n");
            this.printf("\tdh [#] [#]    dump # instructions from history\n");
            if (sDumpers.length) this.printf("dump extension commands:\n\t%s\n", sDumpers);
            return;
        }

        if (sAddr == "state") {
            let sState = this.cmp.powerOff(true);
            if (sLen == "console") {
                /*
                 * Console buffers are notoriously small, and even the following code, which breaks the
                 * data into parts (eg, "d state console 1", "d state console 2", etc) just isn't that helpful.
                 *
                 *      var nPart = +sBytes;
                 *      if (nPart) sState = sState.substr(1000000 * (nPart-1), 1000000);
                 *
                 * So, the best way to capture a large machine state is to use the new "Save Machine" link
                 * that downloads a machine's entire state.  Alternatively, run your own local server and use
                 * server-side storage.  Take a look at the "Save" binding in computer.js, which binds an HTML
                 * control to the computer.powerOff() and computer.saveServerState() functions.
                 */
                console.log(sState);
            } else {
                this.doClear();
                if (sState) this.printf("%s\n", sState);
            }
            return;
        }

        if (sAddr == "symbols") {
            this.dumpSymbols();
            return;
        }

        if (sCmd == "d") {
            for (m in MESSAGE.NAMES) {
                if (asArgs[1] == m) {
                    let fnDumper = this.afnDumpers[m];
                    if (fnDumper) {
                        asArgs.shift();
                        asArgs.shift();
                        fnDumper(asArgs);
                    } else {
                        this.printf("no dump registered for %s\n", sAddr);
                    }
                    return;
                }
            }
            if (!sAddr) sCmd = this.sCmdDumpPrev || "db";
        } else {
            this.sCmdDumpPrev = sCmd;
        }

        if (sCmd == "dh") {
            this.dumpHistory(sAddr, sLen);
            return;
        }

        let dbgAddr = this.parseAddr(sAddr);
        if (!dbgAddr) return;

        let len = 0;                            // 0 is not a default; it triggers the appropriate default below
        if (sLen) {
            if (sLen.charAt(0) == 'l') {
                sLen = sLen.substr(1) || sBytes;
            }
            len = this.parseValue(sLen) >>> 0;  // negative lengths not allowed
            if (len > 0x10000) len = 0x10000;   // prevent bad user (or variable) input from producing excessive output
        }

        let sDump = "";
        let size = (sCmd == "dd"? 4 : (sCmd == "dw"? 2 : 1));
        let cb = (size * len) || 128;
        let cLines = ((cb + 15) >> 4) || 1;

        while (cLines-- && cb > 0) {
            let data = 0, iByte = 0, i;
            let sData = "", sChars = "";
            sAddr = this.toHexAddr(dbgAddr);
            for (i = 16; i > 0 && cb > 0; i--) {
                let b = this.getByte(dbgAddr, 1);
                data |= (b << (iByte++ << 3));
                if (iByte == size) {
                    sData += StrLib.toHex(data, size * 2);
                    sData += (size == 1? (i == 9? '-' : ' ') : "  ");
                    data = iByte = 0;
                }
                sChars += (b >= 32 && b < 127? String.fromCharCode(b) : '.');
                cb--;
            }
            if (sDump) sDump += '\n';
            sDump += sAddr + "  " + sData + ((i == 0)? (' ' + sChars) : "");
        }

        if (sDump) this.printf("%s\n", sDump);
        this.dbgAddrNextData = dbgAddr;
    }

    /**
     * doEdit(asArgs)
     *
     * @this {DebuggerX80}
     * @param {Array.<string>} asArgs
     */
    doEdit(asArgs)
    {
        let size = 1;
        let mask = 0xff;
        let fnGet = this.getByte;
        let fnSet = this.setByte;
        if (asArgs[0] == "ew") {
            size = 2;
            mask = 0xffff;
            fnGet = this.getShort;
            fnSet = this.setShort;
        }
        let cch = size << 1;

        let sAddr = asArgs[1];
        if (sAddr == null) {
            this.printf("edit memory commands:\n");
            this.printf("\teb [a] [...]  edit bytes at address a\n");
            this.printf("\tew [a] [...]  edit words at address a\n");
            return;
        }

        let dbgAddr = this.parseAddr(sAddr);
        if (!dbgAddr) return;

        for (let i = 2; i < asArgs.length; i++) {
            let vNew = this.parseExpression(asArgs[i]);
            if (vNew === undefined) {
                this.printf("unrecognized value: %s\n", asArgs[i]);
                break;
            }
            if (vNew & ~mask) {
                this.printf("warning: %x exceeds %s-byte value\n", vNew, size);
            }
            let vOld = fnGet.call(this, dbgAddr);
            this.printf("changing %s from %#0*2x to %#0*2x\n", this.toHexAddr(dbgAddr), cch, vOld, cch, vNew);
            fnSet.call(this, dbgAddr, vNew, size);
        }
    }

    /**
     * doFreqs(sParm)
     *
     * @this {DebuggerX80}
     * @param {string|undefined} sParm
     */
    doFreqs(sParm)
    {
        if (sParm == '?') {
            this.printf("frequency commands:\n");
            this.printf("\tclear\tclear all frequency counts\n");
            return;
        }
        let cData = 0;
        if (this.aaOpcodeCounts) {
            if (sParm == "clear") {
                for (let i = 0; i < this.aaOpcodeCounts.length; i++) {
                    this.aaOpcodeCounts[i] = [i, 0];
                }
                this.printf("frequency data cleared\n");
                cData++;
            }
            else if (sParm !== undefined) {
                this.printf("unknown frequency command: %s\n", sParm);
                cData++;
            }
            else {
                let aaSortedOpcodeCounts = this.aaOpcodeCounts.slice();
                aaSortedOpcodeCounts.sort(function(p, q) {
                    return q[1] - p[1];
                });
                let asOpcodes = this.style != DebuggerX80.STYLE_8086? DebuggerX80.INS_NAMES : DebuggerX80.INS_NAMES_8086;
                for (let i = 0; i < aaSortedOpcodeCounts.length; i++) {
                    let bOpcode = aaSortedOpcodeCounts[i][0];
                    let cFreq = aaSortedOpcodeCounts[i][1];
                    if (cFreq) {
                        this.printf("%s (%#04x): %d times\n", (asOpcodes[this.aaOpDescs[bOpcode][0]] + "  ").substr(0, 5), bOpcode, cFreq);
                        cData++;
                    }
                }
            }
        }
        if (!cData) {
            this.printf("no frequency data available\n");
        }
    }

    /**
     * doHalt(fQuiet)
     *
     * @this {DebuggerX80}
     * @param {boolean} [fQuiet]
     */
    doHalt(fQuiet)
    {
        let sMsg;
        if (this.flags.running) {
            sMsg = "halting";
            this.stopCPU();
        } else {
            if (this.isBusy(true)) return;
            sMsg = "already halted";
        }
        if (!fQuiet) this.printf("%s\n", sMsg);
    }

    /**
     * doIf(sCmd, fQuiet)
     *
     * NOTE: Don't forget that the default base for all numeric constants is 16 (hex), so when you evaluate
     * an expression like "a==10", it will compare the value of the variable "a" to 0x10; use a trailing period
     * (eg, "10.") if you really intend decimal.
     *
     * Also, if no variable named "a" exists, "a" will evaluate to 0x0A, so the expression "a==10" becomes
     * "0x0A==0x10" (false), whereas the expression "a==10." becomes "0x0A==0x0A" (true).
     *
     * @this {DebuggerX80}
     * @param {string} sCmd
     * @param {boolean} [fQuiet]
     * @returns {boolean} true if expression is non-zero, false if zero (or undefined due to a parse error)
     */
    doIf(sCmd, fQuiet)
    {
        sCmd = StrLib.trim(sCmd);
        if (!this.parseExpression(sCmd)) {
            if (!fQuiet) this.printf("false: %s\n", sCmd);
            return false;
        }
        if (!fQuiet) this.printf("true: %s\n", sCmd);
        return true;
    }

    /**
     * doInfo(asArgs)
     *
     * @this {DebuggerX80}
     * @param {Array.<string>} asArgs
     * @returns {boolean} true only if the instruction info command ("n") is supported
     */
    doInfo(asArgs)
    {
        this.printf(MESSAGE.DEBUG, "msPerYield: %d\nnCyclesPerYield: %d\n", this.cpu.msPerYield, this.cpu.nCyclesPerYield);
        return DEBUG;
    }

    /**
     * doInput(sPort)
     *
     * Simulate a 1-byte port input operation.
     *
     * @this {DebuggerX80}
     * @param {string|undefined} sPort
     */
    doInput(sPort)
    {
        if (!sPort || sPort == '?') {
            this.printf("input commands:\n");
            this.printf("\ti [p]\tread port [p]\n");
            /*
             * TODO: Regarding this warning, consider adding an "unchecked" version of
             * bus.checkPortInputNotify(), since all Debugger memory accesses are unchecked, too.
             *
             * All port I/O handlers ARE aware when the Debugger is calling (addrFrom is undefined),
             * but changing them all to be non-destructive would take time, and situations where you
             * actually want to affect the hardware state are just as likely as not....
             */
            this.printf("warning: port accesses can affect hardware state\n");
            return;
        }
        let port = this.parseValue(sPort);
        if (port !== undefined) {
            let bIn = this.bus.checkPortInputNotify(port, 1);
            this.printf("%#06x: %#04x\n", port, bIn);
        }
    }

    /**
     * doInt(sLevel)
     *
     * @this {DebuggerX80}
     * @param {string} sLevel
     * @returns {boolean} true if success, false if error
     */
    doInt(sLevel)
    {
        if (!this.cpu.getIF()) {
            this.printf("interrupts disabled (use rif=1 to enable)\n");
            return false;
        }
        let nLevel = this.parseExpression(sLevel);
        if (nLevel == null) return false;
        this.printf("requesting interrupt level %d\n", nLevel);
        this.cpu.requestINTR(nLevel);
        return true;
    }

    /**
     * doVar(sCmd)
     *
     * The command must be of the form "{variable} = [{expression}]", where expression may contain constants,
     * operators, registers, symbols, other variables, or nothing at all; in the latter case, the variable, if
     * any, is deleted.
     *
     * Other supported shorthand: "var" with no parameters prints the values of all variables, and "var {variable}"
     * prints the value of the specified variable.
     *
     * @this {DebuggerX80}
     * @param {string} sCmd
     * @returns {boolean} true if valid "var" assignment, false if not
     */
    doVar(sCmd)
    {
        let a = sCmd.match(/^\s*([A-Z_]?[A-Z0-9_]*)\s*(=?)\s*(.*)$/i);
        if (a) {
            if (!a[1]) {
                if (!this.printVariable()) this.printf("no variables\n");
                return true;    // it's not considered an error to print an empty list of variables
            }
            if (!a[2]) {
                return this.printVariable(a[1]);
            }
            if (!a[3]) {
                this.delVariable(a[1]);
                return true;    // it's not considered an error to delete a variable that didn't exist
            }
            let v = this.parseExpression(a[3]);
            if (v !== undefined) {
                this.setVariable(a[1], v);
                return true;
            }
            return false;
        }
        this.printf("invalid assignment: %s\n", sCmd);
        return false;
    }

    /**
     * doList(sAddr, fPrint)
     *
     * @this {DebuggerX80}
     * @param {string} sAddr
     * @param {boolean} [fPrint]
     * @returns {string|null}
     */
    doList(sAddr, fPrint)
    {
        let sSymbol = null;

        let dbgAddr = this.parseAddr(sAddr, true);
        if (dbgAddr) {
            let addr = this.getAddr(dbgAddr);
            let aSymbol = this.findSymbol(dbgAddr, true);
            if (aSymbol.length) {
                let nDelta, sDelta, s;
                if (aSymbol[0]) {
                    sDelta = "";
                    nDelta = dbgAddr.addr - aSymbol[1];
                    if (nDelta) sDelta = " + " + StrLib.toHexWord(nDelta);
                    s = aSymbol[0] + " (" + this.toHexOffset(aSymbol[1]) + ')' + sDelta;
                    if (fPrint) this.printf("%s\n", s);
                    sSymbol = s;
                }
                if (aSymbol.length > 4 && aSymbol[4]) {
                    sDelta = "";
                    nDelta = aSymbol[5] - dbgAddr.addr;
                    if (nDelta) sDelta = " - " + StrLib.toHexWord(nDelta);
                    s = aSymbol[4] + " (" + this.toHexOffset(aSymbol[5]) + ')' + sDelta;
                    if (fPrint) this.printf("%s\n", s);
                    if (!sSymbol) sSymbol = s;
                }
            } else {
                if (fPrint) this.printf("no symbols\n");
            }
        }
        return sSymbol;
    }

    /**
     * doMessages(asArgs)
     *
     * TODO: This function is identical (or should be) to the PCx86 version of doMessages(); we should factor this out
     * (and probably others) into the DbgLib class.
     *
     * @this {DebuggerX80}
     * @param {Array.<string>} asArgs
     */
    doMessages(asArgs)
    {
        let m;
        let fCriteria = null;
        let sCategory = asArgs[1];
        if (sCategory == '?') sCategory = undefined;

        if (sCategory !== undefined) {
            let bitsMessage = 0;
            if (sCategory == "all") {
                bitsMessage = MESSAGE.ALL - MESSAGE.HALT - MESSAGE.BUFFER;
                sCategory = null;
            } else if (sCategory == "on") {
                fCriteria = true;
                sCategory = null;
            } else if (sCategory == "off") {
                fCriteria = false;
                sCategory = null;
            } else {
                for (m in MESSAGE.NAMES) {
                    if (sCategory == m) {
                        bitsMessage = MESSAGE.NAMES[m];
                        fCriteria = Component.testBits(this.bitsMessage, bitsMessage);
                        break;
                    }
                }
                if (!bitsMessage) {
                    this.printf("unknown message category: %s\n", sCategory);
                    return;
                }
            }
            if (bitsMessage) {
                if (asArgs[2] == "on") {
                    this.bitsMessage = Component.setBits(this.bitsMessage, bitsMessage);
                    fCriteria = true;
                }
                else if (asArgs[2] == "off") {
                    this.bitsMessage = Component.clearBits(this.bitsMessage, bitsMessage);
                    fCriteria = false;
                    if (bitsMessage == MESSAGE.BUFFER) {
                        this.printf("%s\n", this.aMessageBuffer.join(""));
                        this.aMessageBuffer = [];
                    }
                }
            }
        }

        /*
         * Display those message categories that match the current criteria (on or off)
         */
        let n = 0;
        let sCategories = "";
        for (m in MESSAGE.NAMES) {
            if (!sCategory || sCategory == m) {
                let bitsMessage = MESSAGE.NAMES[m];
                let fEnabled = Component.testBits(this.bitsMessage, bitsMessage);
                if (fCriteria !== null && fCriteria != fEnabled) continue;
                if (sCategories) sCategories += ',';
                if (!(++n % 10)) sCategories += "\n\t";
                sCategories += m;
            }
        }

        if (sCategory === undefined) {
            this.printf("message commands:\n\tm [category] [on|off]\tturn categories on/off\n");
        }

        this.printf("%s%s\n", (fCriteria !== null? (fCriteria? "messages on:  " : "messages off: ") : "message categories:\n\t"), (sCategories || "none"));

        this.historyInit();     // call this just in case MESSAGE.INT was turned on
    }

    /**
     * doOptions(asArgs)
     *
     * @this {DebuggerX80}
     * @param {Array.<string>} asArgs
     */
    doOptions(asArgs)
    {
        switch (asArgs[1]) {
        case "8080":
            this.style = DebuggerX80.STYLE_8080;
            break;

        case "8086":
            this.style = DebuggerX80.STYLE_8086;
            break;

        case "cs":
            let nCycles;
            if (asArgs[3] !== undefined) nCycles = +asArgs[3];          // warning: decimal instead of hex conversion
            switch (asArgs[2]) {
                case "int":
                    this.cpu.nCyclesChecksumInterval = nCycles;
                    break;
                case "start":
                    this.cpu.nCyclesChecksumStart = nCycles;
                    break;
                case "stop":
                    this.cpu.nCyclesChecksumStop = nCycles;
                    break;
                default:
                    this.printf("unknown cs option\n");
                    return;
            }
            if (nCycles !== undefined) {
                this.cpu.resetChecksum();
            }
            this.printf("checksums %s\n", (this.cpu.flags.checksum? "enabled" : "disabled"));
            return;

        case "sp":
            if (asArgs[2] !== undefined) {
                if (!this.cpu.setSpeed(+asArgs[2])) {
                    this.printf("warning: using 1x multiplier, previous target not reached\n");
                }
            }
            this.printf("target speed: %s (%dx)\n", this.cpu.getSpeedTarget(), this.cpu.getSpeed());
            return;

        case "?":
            this.printf("debugger options:\n");
            this.printf("\tX80\t\tselect 8080-style mnemonics\n");
            this.printf("\t8086\t\tselect 8086-style mnemonics\n");
            this.printf("\tcs int #\tset checksum cycle interval to #\n");
            this.printf("\tcs start #\tset checksum cycle start count to #\n");
            this.printf("\tcs stop #\tset checksum cycle stop count to #\n");
            this.printf("\tsp #\t\tset speed multiplier to #\n");
            break;

        default:
            if (asArgs[1]) {
                this.printf("unknown option: %s\n", asArgs[1]);
                return;
            }
            break;
        }
        this.printf("%s-style mnemonics enabled\n", this.style);
    }

    /**
     * doOutput(sPort, sByte)
     *
     * Simulate a 1-byte port output operation.
     *
     * @this {DebuggerX80}
     * @param {string|undefined} sPort
     * @param {string|undefined} sByte (string representation of 1 byte)
     */
    doOutput(sPort, sByte)
    {
        if (!sPort || sPort == '?') {
            this.printf("output commands:\n");
            this.printf("\to [p] [b]\twrite byte [b] to port [p]\n");
            /*
             * TODO: Regarding this warning, consider adding an "unchecked" version of
             * bus.checkPortOutputNotify(), since all Debugger memory accesses are unchecked, too.
             *
             * All port I/O handlers ARE aware when the Debugger is calling (addrFrom is undefined),
             * but changing them all to be non-destructive would take time, and situations where you
             * actually want to affect the hardware state are just as likely as not....
             */
            this.printf("warning: port accesses can affect hardware state\n");
            return;
        }
        let port = this.parseValue(sPort, "port #");
        let bOut = this.parseValue(sByte);
        if (port !== undefined && bOut !== undefined) {
            this.bus.checkPortOutputNotify(port, 1, bOut);
            this.printf("%#06x: %#04x\n", port, bOut);
        }
    }

    /**
     * doRegisters(asArgs, fInstruction)
     *
     * @this {DebuggerX80}
     * @param {Array.<string>} [asArgs]
     * @param {boolean} [fInstruction] (true to include the current instruction; default is true)
     */
    doRegisters(asArgs, fInstruction)
    {
        if (asArgs && asArgs[1] == '?') {
            this.printf("register commands:\n");
            this.printf("\tr\tdump registers\n");
            this.printf("\trx [#]\tset flag or register x to [#]\n");
            return;
        }

        let cpu = this.cpu;
        if (fInstruction == null) fInstruction = true;

        if (asArgs != null && asArgs.length > 1) {
            let sReg = asArgs[1];
            let sValue = null;
            let i = sReg.indexOf('=');
            if (i > 0) {
                sValue = sReg.substr(i + 1);
                sReg = sReg.substr(0, i);
            }
            else if (asArgs.length > 2) {
                sValue = asArgs[2];
            }
            else {
                this.printf("missing value for %s\n", asArgs[1]);
                return;
            }

            let w = this.parseExpression(sValue);
            if (w === undefined) return;

            let sRegMatch = sReg.toUpperCase();
            switch (sRegMatch) {
            case "A":
                cpu.regA = w & 0xff;
                break;
            case "B":
                cpu.regB = w & 0xff;
                break;
            case "BC":
                cpu.regB = ((w >> 8) & 0xff);
                /* falls through */
            case "C":
                cpu.regC = w & 0xff;
                break;
            case "D":
                cpu.regD = w & 0xff;
                break;
            case "DE":
                cpu.regD = ((w >> 8) & 0xff);
                /* falls through */
            case "E":
                cpu.regE = w & 0xff;
                break;
            case "H":
                cpu.regH = w & 0xff;
                break;
            case "HL":
                cpu.regH = ((w >> 8) & 0xff);
                /* falls through */
            case "L":
                cpu.regL = w & 0xff;
                break;
            case "SP":
                cpu.setSP(w);
                break;
            case "PC":
                cpu.setPC(w);
                this.dbgAddrNextCode = this.newAddr(cpu.getPC());
                break;
            case "PS":
                cpu.setPS(w);
                break;
            case "PSW":
                cpu.setPSW(w);
                break;
            case "CF":
                if (w) cpu.setCF(); else cpu.clearCF();
                break;
            case "PF":
                if (w) cpu.setPF(); else cpu.clearPF();
                break;
            case "AF":
                if (w) cpu.setAF(); else cpu.clearAF();
                break;
            case "ZF":
                if (w) cpu.setZF(); else cpu.clearZF();
                break;
            case "SF":
                if (w) cpu.setSF(); else cpu.clearSF();
                break;
            case "IF":
                if (w) cpu.setIF(); else cpu.clearIF();
                break;
            default:
                this.printf("unknown register: %s\n", sReg);
                return;
            }
            cpu.updateCPU();
            this.printf("updated registers:\n");
        }

        this.printf("%s\n", this.getRegDump());

        if (fInstruction) {
            this.dbgAddrNextCode = this.newAddr(cpu.getPC());
            this.doUnassemble(this.toHexAddr(this.dbgAddrNextCode));
        }
    }

    /**
     * doRun(sCmd, sAddr, sOptions, fQuiet)
     *
     * @this {DebuggerX80}
     * @param {string} sCmd
     * @param {string|undefined} [sAddr]
     * @param {string} [sOptions] (the rest of the breakpoint command-line)
     * @param {boolean} [fQuiet]
     */
    doRun(sCmd, sAddr, sOptions, fQuiet)
    {
        if (sCmd == "gt") {
            this.fIgnoreNextCheckFault = true;
        }
        if (sAddr !== undefined) {
            let dbgAddr = this.parseAddr(sAddr, true);
            if (!dbgAddr) return;
            this.parseAddrOptions(dbgAddr, sOptions);
            this.setTempBreakpoint(dbgAddr);
        }
        if (!this.runCPU(true)) {
            if (!fQuiet) this.printf("cpu busy or unavailable, run command ignored\n");
        }
    }

    /**
     * doPrint(sCmd)
     *
     * NOTE: If the string to print is a quoted string, then we run it through replaceRegs(), so that
     * you can take advantage of all the special replacement options used for software interrupt logging.
     *
     * @this {DebuggerX80}
     * @param {string} sCmd
     */
    doPrint(sCmd)
    {
        sCmd = StrLib.trim(sCmd);
        let a = sCmd.match(/^(['"])(.*?)\1$/);
        if (!a) {
            this.parseExpression(sCmd, false);
        } else {
            this.printf("%s\n", this.replaceRegs(a[2]));
        }
    }

    /**
     * doStep(sCmd)
     *
     * @this {DebuggerX80}
     * @param {string} [sCmd] "p" or "pr"
     */
    doStep(sCmd)
    {
        let fCallStep = true;
        let fRegs = (sCmd == "pr"? 1 : 0);
        /*
         * Set up the value for this.nStep (ie, 1 or 2) depending on whether the user wants
         * a subsequent register dump ("pr") or not ("p").
         */
        let nStep = 1 + fRegs;
        if (!this.nStep) {
            let dbgAddr = this.newAddr(this.cpu.getPC());
            let bOpcode = this.getByte(dbgAddr);

            switch (bOpcode) {
            case CPUDefX80.OPCODE.CALL:
                if (fCallStep) {
                    this.nStep = nStep;
                    this.incAddr(dbgAddr, 3);
                }
                break;
            default:
                break;
            }

            if (this.nStep) {
                this.setTempBreakpoint(dbgAddr);
                if (!this.runCPU()) {
                    if (this.cmp) this.cmp.updateFocus();
                    this.nStep = 0;
                }
                /*
                 * A successful run will ultimately call stop(), which will in turn call clearTempBreakpoint(),
                 * which will clear nStep, so there's your assurance that nStep will be reset.  Now we may have
                 * stopped for reasons unrelated to the temporary breakpoint, but that's OK.
                 */
            } else {
                this.doTrace(fRegs? "tr" : "t");
            }
        } else {
            this.printf("step in progress\n");
        }
    }

    /**
     * getCall(dbgAddr)
     *
     * Given a possible return address (typically from the stack), look for a matching CALL (or INT) that
     * immediately precedes that address.
     *
     * @this {DebuggerX80}
     * @param {DbgAddrX80} dbgAddr
     * @returns {string|null} CALL instruction at or near dbgAddr, or null if none
     */
    getCall(dbgAddr)
    {
        let sCall = null;
        let addr = dbgAddr.addr;
        let addrOrig = addr;
        for (let n = 1; n <= 6 && !!addr; n++) {
            if (n > 2) {
                dbgAddr.addr = addr;
                let s = this.getInstruction(dbgAddr);
                if (s.indexOf("CALL") >= 0) {
                    /*
                     * Verify that the length of this CALL (or INT), when added to the address of the CALL (or INT),
                     * matches the original return address.  We do this by getting the string index of the opcode bytes,
                     * subtracting that from the string index of the next space, and dividing that difference by two,
                     * to yield the length of the CALL (or INT) instruction, in bytes.
                     */
                    let i = s.indexOf(' ');
                    let j = s.indexOf(' ', i+1);
                    if (addr + (j - i - 1)/2 == addrOrig) {
                        sCall = s;
                        break;
                    }
                }
            }
            addr--;
        }
        dbgAddr.addr = addrOrig;
        return sCall;
    }

    /**
     * doStackTrace(sCmd, sAddr)
     *
     * Use "k" for a normal stack trace and "ks" for a stack trace with symbolic info.
     *
     * @this {DebuggerX80}
     * @param {string} [sCmd]
     * @param {string} [sAddr] (not used yet)
     */
    doStackTrace(sCmd, sAddr)
    {
        if (sAddr == '?') {
            this.printf("stack trace commands:\n");
            this.printf("\tk\tshow frame addresses\n");
            this.printf("\tks\tshow symbol information\n");
            return;
        }

        let nFrames = 10, cFrames = 0;
        let dbgAddrCall = this.newAddr();
        let dbgAddrStack = this.newAddr(this.cpu.getSP());
        this.printf("stack trace for %s\n", this.toHexAddr(dbgAddrStack));

        while (cFrames < nFrames) {
            let sCall = null, sCallPrev = null, cTests = 256;
            while ((dbgAddrStack.addr >>> 0) < 0x10000) {
                dbgAddrCall.addr = this.getWord(dbgAddrStack, true);
                /*
                 * Because we're using the auto-increment feature of getWord(), and because that will automatically
                 * wrap the offset around the end of the segment, we must also check the addr property to detect the wrap.
                 */
                if (dbgAddrStack.addr == null || !cTests--) break;
                sCall = this.getCall(dbgAddrCall);
                if (sCall) break;
            }
            /*
             * The sCallPrev check eliminates duplicate sequential calls, which are usually (but not always)
             * indicative of a false positive, in which case the previous call is probably bogus as well, but
             * at least we won't duplicate that mistake.  Of course, there are always exceptions, recursion
             * being one of them, but it's rare that we're debugging recursive code.
             */
            if (!sCall || sCall == sCallPrev) break;
            let sSymbol = null;
            if (sCmd == "ks") {
                let a = sCall.match(/[0-9A-F]+$/);
                if (a) sSymbol = this.doList(a[0]);
            }
            sCall = StrLib.pad(sCall, -50) + "  ;" + (sSymbol || "stack=" + this.toHexAddr(dbgAddrStack)); // + " return=" + this.toHexAddr(dbgAddrCall));
            this.printf("%s\n", sCall);
            sCallPrev = sCall;
            cFrames++;
        }
        if (!cFrames) this.printf("no return addresses found\n");
    }

    /**
     * doTrace(sCmd, sCount)
     *
     * The "t" and "tr" commands interpret the count as a number of instructions, and since
     * we call the Debugger's stepCPU() for each iteration, a single instruction includes
     * any/all prefixes; the CPU's stepCPU() treats prefixes as discrete operations.  The only
     * difference between "t" and "tr": the former displays only the next instruction, while
     * the latter also displays the (updated) registers.
     *
     * The "tc" command interprets the count as a number of cycles rather than instructions,
     * allowing you to quickly execute large chunks of instructions with a single command; it
     * doesn't display anything until the the chunk has finished.
     *
     * However, generally a more useful command is "bn", which allows you to break after some
     * number of instructions have been executed (as opposed to some number of cycles).
     *
     * @this {DebuggerX80}
     * @param {string} [sCmd] ("t", "tc", or "tr")
     * @param {string} [sCount] # of instructions to step
     */
    doTrace(sCmd, sCount)
    {
        let dbg = this;
        let fRegs = (sCmd != "t");
        let nCount = this.parseValue(sCount, undefined, true) || 1;
        let nCycles = (nCount == 1? 0 : 1);
        if (sCmd == "tc") {
            nCycles = nCount;
            nCount = 1;
        }
        WebLib.onCountRepeat(
            nCount,
            function onCountStep() {
                return dbg.setBusy(true) && dbg.stepCPU(nCycles, fRegs, false);
            },
            function onCountStepComplete() {
                /*
                 * We explicitly called stepCPU() with fUpdateCPU === false, because repeatedly
                 * calling updateCPU() can be very slow, especially when fDisplayLiveRegs is true,
                 * so once the repeat count has been exhausted, we must perform a final updateCPU().
                 */
                dbg.cpu.updateCPU();
                dbg.setBusy(false);
            }
        );
    }

    /**
     * doUnassemble(sAddr, sAddrEnd, n)
     *
     * @this {DebuggerX80}
     * @param {string} [sAddr]
     * @param {string} [sAddrEnd]
     * @param {number} [n]
     */
    doUnassemble(sAddr, sAddrEnd, n)
    {
        let dbgAddr = this.parseAddr(sAddr, true);
        if (!dbgAddr) return;

        if (n === undefined) n = 1;

        let cb = 0x100;
        if (sAddrEnd !== undefined) {

            let dbgAddrEnd = this.parseAddr(sAddrEnd, true);
            if (!dbgAddrEnd || dbgAddrEnd.addr < dbgAddr.addr) return;

            cb = dbgAddrEnd.addr - dbgAddr.addr;
            if (!DEBUG && cb > 0x100) {
                /*
                 * Limiting the amount of disassembled code to 256 bytes in non-DEBUG builds is partly to
                 * prevent the user from wedging the browser by dumping too many lines, but also a recognition
                 * that, in non-DEBUG builds, this.printf() keeps print output buffer truncated to 8Kb anyway.
                 */
                this.printf("range too large\n");
                return;
            }
            n = -1;
        }

        let cLines = 0;
        let sInstruction;

        while (cb > 0 && n--) {

            let nSequence = (this.isBusy(false) || this.nStep)? this.nCycles : null;
            let sComment = (nSequence != null? "cycles" : null);
            let aSymbol = this.findSymbol(dbgAddr);

            let addr = dbgAddr.addr;    // we snap dbgAddr.addr *after* calling findSymbol(), which re-evaluates it

            if (aSymbol[0] && n) {
                if (!cLines && n || aSymbol[0].indexOf('+') < 0) {
                    let sLabel = aSymbol[0] + ':';
                    if (aSymbol[2]) sLabel += ' ' + aSymbol[2];
                    this.printf("%s\n", sLabel);
                }
            }

            if (aSymbol[3]) {
                sComment = aSymbol[3];
                nSequence = null;
            }

            sInstruction = this.getInstruction(dbgAddr, sComment, nSequence);

            this.printf("%s\n", sInstruction);
            this.dbgAddrNextCode = dbgAddr;
            cb -= dbgAddr.addr - addr;
            cLines++;
        }
    }

    /**
     * parseCommand(sCmd, fSave, chSep)
     *
     * @this {DebuggerX80}
     * @param {string|undefined} sCmd
     * @param {boolean} [fSave] is true to save the command, false if not
     * @param {string} [chSep] is the command separator character (default is ';')
     * @returns {Array.<string>}
     */
    parseCommand(sCmd, fSave, chSep)
    {
        if (fSave) {
            if (!sCmd) {
                if (this.fAssemble) {
                    sCmd = "end";
                } else {
                    sCmd = this.aPrevCmds[this.iPrevCmd+1];
                }
            } else {
                if (this.iPrevCmd < 0 && this.aPrevCmds.length) {
                    this.iPrevCmd = 0;
                }
                if (this.iPrevCmd < 0 || sCmd != this.aPrevCmds[this.iPrevCmd]) {
                    this.aPrevCmds.splice(0, 0, sCmd);
                    this.iPrevCmd = 0;
                }
                this.iPrevCmd--;
            }
        }
        let a = [];
        if (sCmd) {
            /*
             * With the introduction of breakpoint commands (ie, quoted command sequences
             * associated with a breakpoint), we can no longer perform simplistic splitting.
             *
             *      a = sCmd.split(chSep || ';');
             *      for (let i = 0; i < a.length; i++) a[i] = str.trim(a[i]);
             *
             * We may now split on semi-colons ONLY if they are outside a quoted sequence.
             *
             * Also, to allow quoted strings *inside* breakpoint commands, we first replace all
             * DOUBLE double-quotes with single quotes.
             */
            sCmd = sCmd.toLowerCase().replace(/""/g, "'");

            let iPrev = 0;
            let chQuote = null;
            chSep = chSep || ';';
            /*
             * NOTE: Processing charAt() up to and INCLUDING length is not a typo; we're taking
             * advantage of the fact that charAt() with an invalid index returns an empty string,
             * allowing us to use the same substring() call to capture the final portion of sCmd.
             *
             * In a sense, it allows us to pretend that the string ends with a zero terminator.
             */
            for (let i = 0; i <= sCmd.length; i++) {
                let ch = sCmd.charAt(i);
                if (ch == '"' || ch == "'") {
                    if (!chQuote) {
                        chQuote = ch;
                    } else if (ch == chQuote) {
                        chQuote = null;
                    }
                }
                else if (ch == chSep && !chQuote || !ch) {
                    /*
                     * Recall that substring() accepts starting (inclusive) and ending (exclusive)
                     * indexes, whereas substr() accepts a starting index and a length.  We need the former.
                     */
                    a.push(StrLib.trim(sCmd.substring(iPrev, i)));
                    iPrev = i + 1;
                }
            }
        }
        return a;
    }

    /**
     * shiftArgs(asArgs)
     *
     * Used with any command (eg, "r") that allows but doesn't require whitespace between command and first argument.
     *
     * @this {DebuggerX80}
     * @param {Array.<string>} asArgs
     * @returns {Array.<string>}
     */
    shiftArgs(asArgs)
    {
        if (asArgs && asArgs.length) {
            let s0 = asArgs[0];
            let ch0 = s0.charAt(0);
            for (let i = 1; i < s0.length; i++) {
                let ch = s0.charAt(i);
                if (ch0 == '?' || ch0 == 'r' || ch < 'a' || ch > 'z') {
                    asArgs[0] = s0.substr(i);
                    asArgs.unshift(s0.substr(0, i));
                    break;
                }
            }
        }
        return asArgs;
    }

    /**
     * doCommand(sCmd, fQuiet)
     *
     * @this {DebuggerX80}
     * @param {string} sCmd
     * @param {boolean} [fQuiet]
     * @returns {boolean} true if command processed, false if unrecognized
     */
    doCommand(sCmd, fQuiet)
    {
        let result = true;

        try {
            if (!sCmd.length || sCmd == "end") {
                if (this.fAssemble) {
                    this.printf("ended assemble at %s\n", this.toHexAddr(this.dbgAddrAssemble));
                    this.dbgAddrNextCode = this.dbgAddrAssemble;
                    this.fAssemble = false;
                }
                sCmd = "";
            }
            else if (!fQuiet) {
                let sPrompt = ">> ";
                this.printf("%s%s\n", sPrompt, sCmd);
            }

            let ch = sCmd.charAt(0);
            if (ch == '"' || ch == "'") return true;

            /*
             * Zap the previous message buffer to ensure the new command's output is not tossed out as a repeat.
             */
            this.sMessagePrev = null;

            /*
             * I've relaxed the !isBusy() requirement, to maximize our ability to issue Debugger commands externally.
             */
            if (this.isReady() /* && !this.isBusy(true) */ && sCmd.length > 0) {

                if (this.fAssemble) {
                    sCmd = "a " + this.toHexAddr(this.dbgAddrAssemble) + ' ' + sCmd;
                }

                let asArgs = this.shiftArgs(sCmd.replace(/ +/g, ' ').split(' '));

                switch (asArgs[0].charAt(0)) {
                case 'a':
                    this.doAssemble(asArgs);
                    break;
                case 'b':
                    this.doBreak(asArgs[0], asArgs[1], sCmd);
                    break;
                case 'c':
                    this.doClear(asArgs[0]);
                    break;
                case 'd':
                    if (!COMPILED && sCmd == "debug") {
                        globals.window.DEBUG = true;
                        this.printf("DEBUG checks on\n");
                        break;
                    }
                    this.doDump(asArgs);
                    break;
                case 'e':
                    if (asArgs[0] == "else") break;
                    this.doEdit(asArgs);
                    break;
                case 'f':
                    this.doFreqs(asArgs[1]);
                    break;
                case 'g':
                    this.doRun(asArgs[0], asArgs[1], sCmd, fQuiet);
                    break;
                case 'h':
                    this.doHalt(fQuiet);
                    break;
                case 'i':
                    if (asArgs[0] == "if") {
                        if (!this.doIf(sCmd.substr(2), fQuiet)) {
                            result = false;
                        }
                        break;
                    }
                    if (asArgs[0] == "int") {
                        if (!this.doInt(asArgs[1])) {
                            result = false;
                        }
                        break;
                    }
                    this.doInput(asArgs[1]);
                    break;
                case 'k':
                    this.doStackTrace(asArgs[0], asArgs[1]);
                    break;
                case 'l':
                    if (asArgs[0] == "ln") {
                        this.doList(asArgs[1], true);
                        break;
                    }
                    break;
                case 'm':
                    this.doMessages(asArgs);
                    break;
                case 'o':
                    this.doOutput(asArgs[1], asArgs[2]);
                    break;
                case 'p':
                    if (asArgs[0] == "print") {
                        this.doPrint(sCmd.substr(5));
                        break;
                    }
                    this.doStep(asArgs[0]);
                    break;
                case 'r':
                    if (sCmd == "reset") {
                        if (this.cmp) this.cmp.reset();
                        break;
                    }
                    this.doRegisters(asArgs);
                    break;
                case 's':
                    this.doOptions(asArgs);
                    break;
                case 't':
                    this.doTrace(asArgs[0], asArgs[1]);
                    break;
                case 'u':
                    this.doUnassemble(asArgs[1], asArgs[2], 8);
                    break;
                case 'v':
                    if (asArgs[0] == "var") {
                        if (!this.doVar(sCmd.substr(3))) {
                            result = false;
                        }
                        break;
                    }
                    this.printf("%s version %s (%s%s%s)\n", (APPNAME || "PCx80"), APPVERSION, this.cpu.model, (COMPILED? ",RELEASE" : (DEBUG? ",DEBUG" : ",NODEBUG")), (TYPEDARRAYS? ",TYPEDARRAYS" : (BYTEARRAYS? ",BYTEARRAYS" : ",LONGARRAYS")));
                    this.printf("%s\n", WebLib.getUserAgent());
                    break;
                case '?':
                    if (asArgs[1]) {
                        this.doPrint(sCmd.substr(1));
                        break;
                    }
                    this.doHelp();
                    break;
                case 'n':
                    if (!COMPILED && sCmd == "nodebug") {
                        globals.window.DEBUG = false;
                        this.printf("DEBUG checks off\n");
                        break;
                    }
                    if (this.doInfo(asArgs)) break;
                    /* falls through */
                default:
                    this.printf("unknown command: %s\n", sCmd);
                    result = false;
                    break;
                }
            }
        } catch(e) {
            this.printf("debugger error: %s\n", (e.stack || e.message));
            result = false;
        }
        return result;
    }

    /**
     * doCommands(sCmds, fSave)
     *
     * @this {DebuggerX80}
     * @param {string} sCmds
     * @param {boolean} [fSave]
     * @returns {boolean} true if all commands processed, false if not
     */
    doCommands(sCmds, fSave)
    {
        let a = this.parseCommand(sCmds, fSave);
        for (let s in a) {
            if (!this.doCommand(a[+s])) return false;
        }
        return true;
    }

    /**
     * DebuggerX80.init()
     *
     * This function operates on every HTML element of class "debugger", extracting the
     * JSON-encoded parameters for the Debugger constructor from the element's "data-value"
     * attribute, invoking the constructor to create a Debugger component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        let aeDbg = Component.getElementsByClass(APPCLASS, "debugger");
        for (let iDbg = 0; iDbg < aeDbg.length; iDbg++) {
            let eDbg = aeDbg[iDbg];
            let parmsDbg = Component.getComponentParms(eDbg);
            let dbg = new DebuggerX80(parmsDbg);
            Component.bindComponentControls(dbg, eDbg, APPCLASS);
        }
    }
}

if (DEBUGGER) {

    /*
     * NOTE: Every DebuggerX80 property from here to the first prototype function definition (initBus()) is
     * considered a "class constant"; most of them use our "all-caps" convention (and all of them SHOULD, but
     * that wouldn't help us catch any bugs).
     *
     * Technically, all of them should ALSO be preceded by a "@const" annotation, but that's a lot of work and it
     * really clutters the code.  I wish the Closure Compiler had a way to annotate every definition with a given
     * section with a single annotation....
     *
     * Bugs can slip through the cracks without those annotations; for example, I unthinkingly redefined TYPE_SIZE
     * at one point, and if all the definitions had been preceded by an "@const", that mistake would have been
     * caught at compile-time.
     */

    DebuggerX80.COMMANDS = {
        '?':        "help/print",
        'a [#]':    "assemble",             // TODO: Implement this command someday
        'b [#]':    "breakpoint",           // multiple variations (use b? to list them)
        'c':        "clear output",
        'd [#]':    "dump memory",          // additional syntax: d [#] [l#], where l# is a number of bytes to dump
        'e [#]':    "edit memory",
        'f':        "frequencies",
        'g [#]':    "go [to #]",
        'h':        "halt",
        'i [#]':    "input port #",
        'if':       "eval expression",
        'int [#]':  "request interrupt",
        'k':        "stack trace",
        "ln":       "list nearest symbol(s)",
        'm':        "messages",
        'o [#]':    "output port #",
        'p':        "step over",            // other variations: pr (step and dump registers)
        'print':    "print expression",
        'r':        "dump/set registers",
        'reset':    "reset machine",
        's':        "set options",
        't [#]':    "trace",                // other variations: tr (trace and dump registers)
        'u [#]':    "unassemble",
        'v':        "print version",
        'var':      "assign variable"
    };

    DebuggerX80.STYLE_8080 = 8080;
    DebuggerX80.STYLE_8086 = 8086;

    /*
     * CPU instruction ordinals
     */
    DebuggerX80.INS = {
        NONE:   0,  ACI:    1,  ADC:    2,  ADD:    3,  ADI:    4,  ANA:    5,  ANI:    6,  CALL:   7,
        CC:     8,  CM:     9,  CNC:   10,  CNZ:   11,  CP:    12,  CPE:   13,  CPO:   14,  CZ:    15,
        CMA:   16,  CMC:   17,  CMP:   18,  CPI:   19,  DAA:   20,  DAD:   21,  DCR:   22,  DCX:   23,
        DI:    24,  EI:    25,  HLT:   26,  IN:    27,  INR:   28,  INX:   29,  JMP:   30,  JC:    31,
        JM:    32,  JNC:   33,  JNZ:   34,  JP:    35,  JPE:   36,  JPO:   37,  JZ:    38,  LDA:   39,
        LDAX:  40,  LHLD:  41,  LXI:   42,  MOV:   43,  MVI:   44,  NOP:   45,  ORA:   46,  ORI:   47,
        OUT:   48,  PCHL:  49,  POP:   50,  PUSH:  51,  RAL:   52,  RAR:   53,  RET:   54,  RC:    55,
        RM:    56,  RNC:   57,  RNZ:   58,  RP:    59,  RPE:   60,  RPO:   61,  RZ:    62,  RLC:   63,
        RRC:   64,  RST:   65,  SBB:   66,  SBI:   67,  SHLD:  68,  SPHL:  69,  STA:   70,  STAX:  71,
        STC:   72,  SUB:   73,  SUI:   74,  XCHG:  75,  XRA:   76,  XRI:   77,  XTHL:  78
    };

    /*
     * CPU instruction names (mnemonics), indexed by CPU instruction ordinal (above)
     *
     * If you change the default style, using the "s" command (eg, "s 8086"), then the 8086 table
     * will be used instead.  TODO: Add a "s z80" command for Z80-style mnemonics.
     */
    DebuggerX80.INS_NAMES = [
        "NONE",     "ACI",      "ADC",      "ADD",      "ADI",      "ANA",      "ANI",      "CALL",
        "CC",       "CM",       "CNC",      "CNZ",      "CP",       "CPE",      "CPO",      "CZ",
        "CMA",      "CMC",      "CMP",      "CPI",      "DAA",      "DAD",      "DCR",      "DCX",
        "DI",       "EI",       "HLT",      "IN",       "INR",      "INX",      "JMP",      "JC",
        "JM",       "JNC",      "JNZ",      "JP",       "JPE",      "JPO",      "JZ",       "LDA",
        "LDAX",     "LHLD",     "LXI",      "MOV",      "MVI",      "NOP",      "ORA",      "ORI",
        "OUT",      "PCHL",     "POP",      "PUSH",     "RAL",      "RAR",      "RET",      "RC",
        "RM",       "RNC",      "RNZ",      "RP",       "RPE",      "RPO",      "RZ",       "RLC",
        "RRC",      "RST",      "SBB",      "SBI",      "SHLD",     "SPHL",     "STA",      "STAX",
        "STC",      "SUB",      "SUI",      "XCHG",     "XRA",      "XRI",      "XTHL"
    ];

    DebuggerX80.INS_NAMES_8086 = [
        "NONE",     "ADC",      "ADC",      "ADD",      "ADD",      "AND",      "AND",      "CALL",
        "CALLC",    "CALLS",    "CALLNC",   "CALLNZ",   "CALLNS",   "CALLP",    "CALLNP",   "CALLZ",
        "NOT",      "CMC",      "CMP",      "CMP",      "DAA",      "ADD",      "DEC",      "DEC",
        "CLI",      "STI",      "HLT",      "IN",       "INC",      "INC",      "JMP",      "JC",
        "JS",       "JNC",      "JNZ",      "JNS",      "JP",       "JNP",      "JZ",       "MOV",
        "MOV",      "MOV",      "MOV",      "MOV",      "MOV",      "NOP",      "OR",       "OR",
        "OUT",      "JMP",      "POP",      "PUSH",     "RCL",      "RCR",      "RET",      "RETC",
        "RETS",     "RETNC",    "RETNZ",    "RETNS",    "RETP",     "RETNP",    "RETZ",     "ROL",
        "ROR",      "RST",      "SBB",      "SBB",      "MOV",      "MOV",      "MOV",      "MOV",
        "STC",      "SUB",      "SUB",      "XCHG",     "XOR",      "XOR",      "XCHG"
    ];

    DebuggerX80.REG_B      = 0x00;
    DebuggerX80.REG_C      = 0x01;
    DebuggerX80.REG_D      = 0x02;
    DebuggerX80.REG_E      = 0x03;
    DebuggerX80.REG_H      = 0x04;
    DebuggerX80.REG_L      = 0x05;
    DebuggerX80.REG_M      = 0x06;
    DebuggerX80.REG_A      = 0x07;
    DebuggerX80.REG_BC     = 0x08;
    DebuggerX80.REG_DE     = 0x09;
    DebuggerX80.REG_HL     = 0x0A;
    DebuggerX80.REG_SP     = 0x0B;
    DebuggerX80.REG_PC     = 0x0C;
    DebuggerX80.REG_PS     = 0x0D;
    DebuggerX80.REG_PSW    = 0x0E;         // aka AF if Z80-style mnemonics

    /*
     * NOTE: "PS" is the complete processor status, which includes bits like the Interrupt flag (IF),
     * which is NOT the same as "PSW", which is the low 8 bits of "PS" combined with "A" in the high byte.
     */
    DebuggerX80.REGS = [
        "B", "C", "D", "E", "H", "L", "M", "A", "BC", "DE", "HL", "SP", "PC", "PS", "PSW"
    ];

    /*
     * Operand type descriptor masks and definitions
     */
    DebuggerX80.TYPE_SIZE  = 0x000F;       // size field
    DebuggerX80.TYPE_MODE  = 0x00F0;       // mode field
    DebuggerX80.TYPE_IREG  = 0x0F00;       // implied register field
    DebuggerX80.TYPE_OTHER = 0xF000;       // "other" field

    /*
     * TYPE_SIZE values
     */
    DebuggerX80.TYPE_NONE  = 0x0000;       // (all other TYPE fields ignored)
    DebuggerX80.TYPE_BYTE  = 0x0001;       // byte, regardless of operand size
    DebuggerX80.TYPE_SBYTE = 0x0002;       // byte sign-extended to word
    DebuggerX80.TYPE_WORD  = 0x0003;       // word (16-bit value)

    /*
     * TYPE_MODE values
     */
    DebuggerX80.TYPE_REG   = 0x0010;       // register
    DebuggerX80.TYPE_IMM   = 0x0020;       // immediate data
    DebuggerX80.TYPE_ADDR  = 0x0033;       // immediate (word) address
    DebuggerX80.TYPE_MEM   = 0x0040;       // memory reference
    DebuggerX80.TYPE_INT   = 0x0080;       // interrupt level encoded in instruction (bits 3-5)

    /*
     * TYPE_IREG values, based on the REG_* constants.
     *
     * Note that TYPE_M isn't really a register, just an alternative form of TYPE_HL | TYPE_MEM.
     */
    DebuggerX80.TYPE_A     = (DebuggerX80.REG_A  << 8 | DebuggerX80.TYPE_REG | DebuggerX80.TYPE_BYTE);
    DebuggerX80.TYPE_B     = (DebuggerX80.REG_B  << 8 | DebuggerX80.TYPE_REG | DebuggerX80.TYPE_BYTE);
    DebuggerX80.TYPE_C     = (DebuggerX80.REG_C  << 8 | DebuggerX80.TYPE_REG | DebuggerX80.TYPE_BYTE);
    DebuggerX80.TYPE_D     = (DebuggerX80.REG_D  << 8 | DebuggerX80.TYPE_REG | DebuggerX80.TYPE_BYTE);
    DebuggerX80.TYPE_E     = (DebuggerX80.REG_E  << 8 | DebuggerX80.TYPE_REG | DebuggerX80.TYPE_BYTE);
    DebuggerX80.TYPE_H     = (DebuggerX80.REG_H  << 8 | DebuggerX80.TYPE_REG | DebuggerX80.TYPE_BYTE);
    DebuggerX80.TYPE_L     = (DebuggerX80.REG_L  << 8 | DebuggerX80.TYPE_REG | DebuggerX80.TYPE_BYTE);
    DebuggerX80.TYPE_M     = (DebuggerX80.REG_M  << 8 | DebuggerX80.TYPE_REG | DebuggerX80.TYPE_BYTE | DebuggerX80.TYPE_MEM);
    DebuggerX80.TYPE_BC    = (DebuggerX80.REG_BC << 8 | DebuggerX80.TYPE_REG | DebuggerX80.TYPE_WORD);
    DebuggerX80.TYPE_DE    = (DebuggerX80.REG_DE << 8 | DebuggerX80.TYPE_REG | DebuggerX80.TYPE_WORD);
    DebuggerX80.TYPE_HL    = (DebuggerX80.REG_HL << 8 | DebuggerX80.TYPE_REG | DebuggerX80.TYPE_WORD);
    DebuggerX80.TYPE_SP    = (DebuggerX80.REG_SP << 8 | DebuggerX80.TYPE_REG | DebuggerX80.TYPE_WORD);
    DebuggerX80.TYPE_PC    = (DebuggerX80.REG_PC << 8 | DebuggerX80.TYPE_REG | DebuggerX80.TYPE_WORD);
    DebuggerX80.TYPE_PSW   = (DebuggerX80.REG_PSW<< 8 | DebuggerX80.TYPE_REG | DebuggerX80.TYPE_WORD);

    /*
     * TYPE_OTHER bit definitions
     */
    DebuggerX80.TYPE_IN    = 0x1000;       // operand is input
    DebuggerX80.TYPE_OUT   = 0x2000;       // operand is output
    DebuggerX80.TYPE_BOTH  = (DebuggerX80.TYPE_IN | DebuggerX80.TYPE_OUT);
    DebuggerX80.TYPE_OPT   = 0x4000;       // optional operand (ie, normally omitted in 8080 assembly language)
    DebuggerX80.TYPE_UNDOC = 0x8000;       // opcode is an undocumented alternative encoding

    /*
     * The aaOpDescs array is indexed by opcode, and each element is a sub-array (aOpDesc) that describes
     * the corresponding opcode. The sub-elements are as follows:
     *
     *      [0]: {number} of the opcode name (see INS.*)
     *      [1]: {number} containing the destination operand descriptor bit(s), if any
     *      [2]: {number} containing the source operand descriptor bit(s), if any
     *      [3]: {number} containing the occasional third operand descriptor bit(s), if any
     *
     * These sub-elements are all optional. If [0] is not present, the opcode is undefined; if [1] is not
     * present (or contains zero), the opcode has no (or only implied) operands; if [2] is not present, the
     * opcode has only a single operand.  And so on.
     *
     * Additional default rules:
     *
     *      1) If no TYPE_OTHER bits are specified for the first (destination) operand, TYPE_OUT is assumed;
     *      2) If no TYPE_OTHER bits are specified for the second (source) operand, TYPE_IN is assumed;
     *      3) If no size is specified for the second operand, the size is assumed to match the first operand.
     */
    DebuggerX80.aaOpDescs = [
    /* 0x00 */  [DebuggerX80.INS.NOP],
    /* 0x01 */  [DebuggerX80.INS.LXI,   DebuggerX80.TYPE_BC,    DebuggerX80.TYPE_IMM],
    /* 0x02 */  [DebuggerX80.INS.STAX,  DebuggerX80.TYPE_BC   | DebuggerX80.TYPE_MEM, DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT],
    /* 0x03 */  [DebuggerX80.INS.INX,   DebuggerX80.TYPE_BC],
    /* 0x04 */  [DebuggerX80.INS.INR,   DebuggerX80.TYPE_B],
    /* 0x05 */  [DebuggerX80.INS.DCR,   DebuggerX80.TYPE_B],
    /* 0x06 */  [DebuggerX80.INS.MVI,   DebuggerX80.TYPE_B,     DebuggerX80.TYPE_IMM],
    /* 0x07 */  [DebuggerX80.INS.RLC],
    /* 0x08 */  [DebuggerX80.INS.NOP,   DebuggerX80.TYPE_UNDOC],
    /* 0x09 */  [DebuggerX80.INS.DAD,   DebuggerX80.TYPE_HL   | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_BC],
    /* 0x0A */  [DebuggerX80.INS.LDAX,  DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_BC   | DebuggerX80.TYPE_MEM],
    /* 0x0B */  [DebuggerX80.INS.DCX,   DebuggerX80.TYPE_BC],
    /* 0x0C */  [DebuggerX80.INS.INR,   DebuggerX80.TYPE_C],
    /* 0x0D */  [DebuggerX80.INS.DCR,   DebuggerX80.TYPE_C],
    /* 0x0E */  [DebuggerX80.INS.MVI,   DebuggerX80.TYPE_C,     DebuggerX80.TYPE_IMM],
    /* 0x0F */  [DebuggerX80.INS.RRC],
    /* 0x10 */  [DebuggerX80.INS.NOP,   DebuggerX80.TYPE_UNDOC],
    /* 0x11 */  [DebuggerX80.INS.LXI,   DebuggerX80.TYPE_DE,    DebuggerX80.TYPE_IMM],
    /* 0x12 */  [DebuggerX80.INS.STAX,  DebuggerX80.TYPE_DE   | DebuggerX80.TYPE_MEM, DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT],
    /* 0x13 */  [DebuggerX80.INS.INX,   DebuggerX80.TYPE_DE],
    /* 0x14 */  [DebuggerX80.INS.INR,   DebuggerX80.TYPE_D],
    /* 0x15 */  [DebuggerX80.INS.DCR,   DebuggerX80.TYPE_D],
    /* 0x16 */  [DebuggerX80.INS.MVI,   DebuggerX80.TYPE_D,     DebuggerX80.TYPE_IMM],
    /* 0x17 */  [DebuggerX80.INS.RAL],
    /* 0x18 */  [DebuggerX80.INS.NOP,   DebuggerX80.TYPE_UNDOC],
    /* 0x19 */  [DebuggerX80.INS.DAD,   DebuggerX80.TYPE_HL   | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_DE],
    /* 0x1A */  [DebuggerX80.INS.LDAX,  DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_DE   | DebuggerX80.TYPE_MEM],
    /* 0x1B */  [DebuggerX80.INS.DCX,   DebuggerX80.TYPE_DE],
    /* 0x1C */  [DebuggerX80.INS.INR,   DebuggerX80.TYPE_E],
    /* 0x1D */  [DebuggerX80.INS.DCR,   DebuggerX80.TYPE_E],
    /* 0x1E */  [DebuggerX80.INS.MVI,   DebuggerX80.TYPE_E,     DebuggerX80.TYPE_IMM],
    /* 0x1F */  [DebuggerX80.INS.RAR],
    /* 0x20 */  [DebuggerX80.INS.NOP,   DebuggerX80.TYPE_UNDOC],
    /* 0x21 */  [DebuggerX80.INS.LXI,   DebuggerX80.TYPE_HL,    DebuggerX80.TYPE_IMM],
    /* 0x22 */  [DebuggerX80.INS.SHLD,  DebuggerX80.TYPE_ADDR | DebuggerX80.TYPE_MEM, DebuggerX80.TYPE_HL   | DebuggerX80.TYPE_OPT],
    /* 0x23 */  [DebuggerX80.INS.INX,   DebuggerX80.TYPE_HL],
    /* 0x24 */  [DebuggerX80.INS.INR,   DebuggerX80.TYPE_H],
    /* 0x25 */  [DebuggerX80.INS.DCR,   DebuggerX80.TYPE_H],
    /* 0x26 */  [DebuggerX80.INS.MVI,   DebuggerX80.TYPE_H,     DebuggerX80.TYPE_IMM],
    /* 0x27 */  [DebuggerX80.INS.DAA],
    /* 0x28 */  [DebuggerX80.INS.NOP,   DebuggerX80.TYPE_UNDOC],
    /* 0x29 */  [DebuggerX80.INS.DAD,   DebuggerX80.TYPE_HL   | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_HL],
    /* 0x2A */  [DebuggerX80.INS.LHLD,  DebuggerX80.TYPE_HL   | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_ADDR | DebuggerX80.TYPE_MEM],
    /* 0x2B */  [DebuggerX80.INS.DCX,   DebuggerX80.TYPE_HL],
    /* 0x2C */  [DebuggerX80.INS.INR,   DebuggerX80.TYPE_L],
    /* 0x2D */  [DebuggerX80.INS.DCR,   DebuggerX80.TYPE_L],
    /* 0x2E */  [DebuggerX80.INS.MVI,   DebuggerX80.TYPE_L,     DebuggerX80.TYPE_IMM],
    /* 0x2F */  [DebuggerX80.INS.CMA,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT],
    /* 0x30 */  [DebuggerX80.INS.NOP,   DebuggerX80.TYPE_UNDOC],
    /* 0x31 */  [DebuggerX80.INS.LXI,   DebuggerX80.TYPE_SP,    DebuggerX80.TYPE_IMM],
    /* 0x32 */  [DebuggerX80.INS.STA,   DebuggerX80.TYPE_ADDR | DebuggerX80.TYPE_MEM, DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT],
    /* 0x33 */  [DebuggerX80.INS.INX,   DebuggerX80.TYPE_SP],
    /* 0x34 */  [DebuggerX80.INS.INR,   DebuggerX80.TYPE_M],
    /* 0x35 */  [DebuggerX80.INS.DCR,   DebuggerX80.TYPE_M],
    /* 0x36 */  [DebuggerX80.INS.MVI,   DebuggerX80.TYPE_M,     DebuggerX80.TYPE_IMM],
    /* 0x37 */  [DebuggerX80.INS.STC],
    /* 0x38 */  [DebuggerX80.INS.NOP,   DebuggerX80.TYPE_UNDOC],
    /* 0x39 */  [DebuggerX80.INS.DAD,   DebuggerX80.TYPE_HL   | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_SP],
    /* 0x3A */  [DebuggerX80.INS.LDA,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_ADDR | DebuggerX80.TYPE_MEM],
    /* 0x3B */  [DebuggerX80.INS.DCX,   DebuggerX80.TYPE_SP],
    /* 0x3C */  [DebuggerX80.INS.INR,   DebuggerX80.TYPE_A],
    /* 0x3D */  [DebuggerX80.INS.DCR,   DebuggerX80.TYPE_A],
    /* 0x3E */  [DebuggerX80.INS.MVI,   DebuggerX80.TYPE_A,     DebuggerX80.TYPE_IMM],
    /* 0x3F */  [DebuggerX80.INS.CMC],
    /* 0x40 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_B,     DebuggerX80.TYPE_B],
    /* 0x41 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_B,     DebuggerX80.TYPE_C],
    /* 0x42 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_B,     DebuggerX80.TYPE_D],
    /* 0x43 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_B,     DebuggerX80.TYPE_E],
    /* 0x44 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_B,     DebuggerX80.TYPE_H],
    /* 0x45 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_B,     DebuggerX80.TYPE_L],
    /* 0x46 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_B,     DebuggerX80.TYPE_M],
    /* 0x47 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_B,     DebuggerX80.TYPE_A],
    /* 0x48 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_C,     DebuggerX80.TYPE_B],
    /* 0x49 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_C,     DebuggerX80.TYPE_C],
    /* 0x4A */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_C,     DebuggerX80.TYPE_D],
    /* 0x4B */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_C,     DebuggerX80.TYPE_E],
    /* 0x4C */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_C,     DebuggerX80.TYPE_H],
    /* 0x4D */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_C,     DebuggerX80.TYPE_L],
    /* 0x4E */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_C,     DebuggerX80.TYPE_M],
    /* 0x4F */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_C,     DebuggerX80.TYPE_A],
    /* 0x50 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_D,     DebuggerX80.TYPE_B],
    /* 0x51 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_D,     DebuggerX80.TYPE_C],
    /* 0x52 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_D,     DebuggerX80.TYPE_D],
    /* 0x53 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_D,     DebuggerX80.TYPE_E],
    /* 0x54 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_D,     DebuggerX80.TYPE_H],
    /* 0x55 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_D,     DebuggerX80.TYPE_L],
    /* 0x56 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_D,     DebuggerX80.TYPE_M],
    /* 0x57 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_D,     DebuggerX80.TYPE_A],
    /* 0x58 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_E,     DebuggerX80.TYPE_B],
    /* 0x59 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_E,     DebuggerX80.TYPE_C],
    /* 0x5A */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_E,     DebuggerX80.TYPE_D],
    /* 0x5B */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_E,     DebuggerX80.TYPE_E],
    /* 0x5C */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_E,     DebuggerX80.TYPE_H],
    /* 0x5D */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_E,     DebuggerX80.TYPE_L],
    /* 0x5E */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_E,     DebuggerX80.TYPE_M],
    /* 0x5F */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_E,     DebuggerX80.TYPE_A],
    /* 0x60 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_H,     DebuggerX80.TYPE_B],
    /* 0x61 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_H,     DebuggerX80.TYPE_C],
    /* 0x62 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_H,     DebuggerX80.TYPE_D],
    /* 0x63 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_H,     DebuggerX80.TYPE_E],
    /* 0x64 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_H,     DebuggerX80.TYPE_H],
    /* 0x65 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_H,     DebuggerX80.TYPE_L],
    /* 0x66 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_H,     DebuggerX80.TYPE_M],
    /* 0x67 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_H,     DebuggerX80.TYPE_A],
    /* 0x68 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_L,     DebuggerX80.TYPE_B],
    /* 0x69 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_L,     DebuggerX80.TYPE_C],
    /* 0x6A */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_L,     DebuggerX80.TYPE_D],
    /* 0x6B */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_L,     DebuggerX80.TYPE_E],
    /* 0x6C */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_L,     DebuggerX80.TYPE_H],
    /* 0x6D */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_L,     DebuggerX80.TYPE_L],
    /* 0x6E */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_L,     DebuggerX80.TYPE_M],
    /* 0x6F */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_L,     DebuggerX80.TYPE_A],
    /* 0x70 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_M,     DebuggerX80.TYPE_B],
    /* 0x71 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_M,     DebuggerX80.TYPE_C],
    /* 0x72 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_M,     DebuggerX80.TYPE_D],
    /* 0x73 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_M,     DebuggerX80.TYPE_E],
    /* 0x74 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_M,     DebuggerX80.TYPE_H],
    /* 0x75 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_M,     DebuggerX80.TYPE_L],
    /* 0x76 */  [DebuggerX80.INS.HLT],
    /* 0x77 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_M,     DebuggerX80.TYPE_A],
    /* 0x78 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_A,     DebuggerX80.TYPE_B],
    /* 0x79 */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_A,     DebuggerX80.TYPE_C],
    /* 0x7A */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_A,     DebuggerX80.TYPE_D],
    /* 0x7B */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_A,     DebuggerX80.TYPE_E],
    /* 0x7C */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_A,     DebuggerX80.TYPE_H],
    /* 0x7D */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_A,     DebuggerX80.TYPE_L],
    /* 0x7E */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_A,     DebuggerX80.TYPE_M],
    /* 0x7F */  [DebuggerX80.INS.MOV,   DebuggerX80.TYPE_A,     DebuggerX80.TYPE_A],
    /* 0x80 */  [DebuggerX80.INS.ADD,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_B],
    /* 0x81 */  [DebuggerX80.INS.ADD,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_C],
    /* 0x82 */  [DebuggerX80.INS.ADD,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_D],
    /* 0x83 */  [DebuggerX80.INS.ADD,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_E],
    /* 0x84 */  [DebuggerX80.INS.ADD,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_H],
    /* 0x85 */  [DebuggerX80.INS.ADD,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_L],
    /* 0x86 */  [DebuggerX80.INS.ADD,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_M],
    /* 0x87 */  [DebuggerX80.INS.ADD,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_A],
    /* 0x88 */  [DebuggerX80.INS.ADC,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_B],
    /* 0x89 */  [DebuggerX80.INS.ADC,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_C],
    /* 0x8A */  [DebuggerX80.INS.ADC,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_D],
    /* 0x8B */  [DebuggerX80.INS.ADC,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_E],
    /* 0x8C */  [DebuggerX80.INS.ADC,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_H],
    /* 0x8D */  [DebuggerX80.INS.ADC,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_L],
    /* 0x8E */  [DebuggerX80.INS.ADC,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_M],
    /* 0x8F */  [DebuggerX80.INS.ADC,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_A],
    /* 0x90 */  [DebuggerX80.INS.SUB,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_B],
    /* 0x91 */  [DebuggerX80.INS.SUB,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_C],
    /* 0x92 */  [DebuggerX80.INS.SUB,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_D],
    /* 0x93 */  [DebuggerX80.INS.SUB,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_E],
    /* 0x94 */  [DebuggerX80.INS.SUB,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_H],
    /* 0x95 */  [DebuggerX80.INS.SUB,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_L],
    /* 0x96 */  [DebuggerX80.INS.SUB,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_M],
    /* 0x97 */  [DebuggerX80.INS.SUB,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_A],
    /* 0x98 */  [DebuggerX80.INS.SBB,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_B],
    /* 0x99 */  [DebuggerX80.INS.SBB,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_C],
    /* 0x9A */  [DebuggerX80.INS.SBB,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_D],
    /* 0x9B */  [DebuggerX80.INS.SBB,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_E],
    /* 0x9C */  [DebuggerX80.INS.SBB,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_H],
    /* 0x9D */  [DebuggerX80.INS.SBB,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_L],
    /* 0x9E */  [DebuggerX80.INS.SBB,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_M],
    /* 0x9F */  [DebuggerX80.INS.SBB,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_A],
    /* 0xA0 */  [DebuggerX80.INS.ANA,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_B],
    /* 0xA1 */  [DebuggerX80.INS.ANA,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_C],
    /* 0xA2 */  [DebuggerX80.INS.ANA,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_D],
    /* 0xA3 */  [DebuggerX80.INS.ANA,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_E],
    /* 0xA4 */  [DebuggerX80.INS.ANA,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_H],
    /* 0xA5 */  [DebuggerX80.INS.ANA,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_L],
    /* 0xA6 */  [DebuggerX80.INS.ANA,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_M],
    /* 0xA7 */  [DebuggerX80.INS.ANA,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_A],
    /* 0xA8 */  [DebuggerX80.INS.XRA,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_B],
    /* 0xA9 */  [DebuggerX80.INS.XRA,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_C],
    /* 0xAA */  [DebuggerX80.INS.XRA,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_D],
    /* 0xAB */  [DebuggerX80.INS.XRA,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_E],
    /* 0xAC */  [DebuggerX80.INS.XRA,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_H],
    /* 0xAD */  [DebuggerX80.INS.XRA,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_L],
    /* 0xAE */  [DebuggerX80.INS.XRA,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_M],
    /* 0xAF */  [DebuggerX80.INS.XRA,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_A],
    /* 0xB0 */  [DebuggerX80.INS.ORA,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_B],
    /* 0xB1 */  [DebuggerX80.INS.ORA,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_C],
    /* 0xB2 */  [DebuggerX80.INS.ORA,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_D],
    /* 0xB3 */  [DebuggerX80.INS.ORA,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_E],
    /* 0xB4 */  [DebuggerX80.INS.ORA,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_H],
    /* 0xB5 */  [DebuggerX80.INS.ORA,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_L],
    /* 0xB6 */  [DebuggerX80.INS.ORA,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_M],
    /* 0xB7 */  [DebuggerX80.INS.ORA,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_A],
    /* 0xB8 */  [DebuggerX80.INS.CMP,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_B],
    /* 0xB9 */  [DebuggerX80.INS.CMP,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_C],
    /* 0xBA */  [DebuggerX80.INS.CMP,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_D],
    /* 0xBB */  [DebuggerX80.INS.CMP,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_E],
    /* 0xBC */  [DebuggerX80.INS.CMP,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_H],
    /* 0xBD */  [DebuggerX80.INS.CMP,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_L],
    /* 0xBE */  [DebuggerX80.INS.CMP,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_M],
    /* 0xBF */  [DebuggerX80.INS.CMP,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_A],
    /* 0xC0 */  [DebuggerX80.INS.RNZ],
    /* 0xC1 */  [DebuggerX80.INS.POP,   DebuggerX80.TYPE_BC],
    /* 0xC2 */  [DebuggerX80.INS.JNZ,   DebuggerX80.TYPE_ADDR],
    /* 0xC3 */  [DebuggerX80.INS.JMP,   DebuggerX80.TYPE_ADDR],
    /* 0xC4 */  [DebuggerX80.INS.CNZ,   DebuggerX80.TYPE_ADDR],
    /* 0xC5 */  [DebuggerX80.INS.PUSH,  DebuggerX80.TYPE_BC],
    /* 0xC6 */  [DebuggerX80.INS.ADI,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_IMM | DebuggerX80.TYPE_BYTE],
    /* 0xC7 */  [DebuggerX80.INS.RST,   DebuggerX80.TYPE_INT],
    /* 0xC8 */  [DebuggerX80.INS.RZ],
    /* 0xC9 */  [DebuggerX80.INS.RET],
    /* 0xCA */  [DebuggerX80.INS.JZ,    DebuggerX80.TYPE_ADDR],
    /* 0xCB */  [DebuggerX80.INS.JMP,   DebuggerX80.TYPE_ADDR | DebuggerX80.TYPE_UNDOC],
    /* 0xCC */  [DebuggerX80.INS.CZ,    DebuggerX80.TYPE_ADDR],
    /* 0xCD */  [DebuggerX80.INS.CALL,  DebuggerX80.TYPE_ADDR],
    /* 0xCE */  [DebuggerX80.INS.ACI,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_IMM | DebuggerX80.TYPE_BYTE],
    /* 0xCF */  [DebuggerX80.INS.RST,   DebuggerX80.TYPE_INT],
    /* 0xD0 */  [DebuggerX80.INS.RNC],
    /* 0xD1 */  [DebuggerX80.INS.POP,   DebuggerX80.TYPE_DE],
    /* 0xD2 */  [DebuggerX80.INS.JNC,   DebuggerX80.TYPE_ADDR],
    /* 0xD3 */  [DebuggerX80.INS.OUT,   DebuggerX80.TYPE_IMM  | DebuggerX80.TYPE_BYTE,DebuggerX80.TYPE_A   | DebuggerX80.TYPE_OPT],
    /* 0xD4 */  [DebuggerX80.INS.CNC,   DebuggerX80.TYPE_ADDR],
    /* 0xD5 */  [DebuggerX80.INS.PUSH,  DebuggerX80.TYPE_DE],
    /* 0xD6 */  [DebuggerX80.INS.SUI,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_IMM | DebuggerX80.TYPE_BYTE],
    /* 0xD7 */  [DebuggerX80.INS.RST,   DebuggerX80.TYPE_INT],
    /* 0xD8 */  [DebuggerX80.INS.RC],
    /* 0xD9 */  [DebuggerX80.INS.RET,   DebuggerX80.TYPE_UNDOC],
    /* 0xDA */  [DebuggerX80.INS.JC,    DebuggerX80.TYPE_ADDR],
    /* 0xDB */  [DebuggerX80.INS.IN,    DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_IMM | DebuggerX80.TYPE_BYTE],
    /* 0xDC */  [DebuggerX80.INS.CC,    DebuggerX80.TYPE_ADDR],
    /* 0xDD */  [DebuggerX80.INS.CALL,  DebuggerX80.TYPE_ADDR | DebuggerX80.TYPE_UNDOC],
    /* 0xDE */  [DebuggerX80.INS.SBI,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_IMM | DebuggerX80.TYPE_BYTE],
    /* 0xDF */  [DebuggerX80.INS.RST,   DebuggerX80.TYPE_INT],
    /* 0xE0 */  [DebuggerX80.INS.RPO],
    /* 0xE1 */  [DebuggerX80.INS.POP,   DebuggerX80.TYPE_HL],
    /* 0xE2 */  [DebuggerX80.INS.JPO,   DebuggerX80.TYPE_ADDR],
    /* 0xE3 */  [DebuggerX80.INS.XTHL,  DebuggerX80.TYPE_SP   | DebuggerX80.TYPE_MEM| DebuggerX80.TYPE_OPT,  DebuggerX80.TYPE_HL | DebuggerX80.TYPE_OPT],
    /* 0xE4 */  [DebuggerX80.INS.CPO,   DebuggerX80.TYPE_ADDR],
    /* 0xE5 */  [DebuggerX80.INS.PUSH,  DebuggerX80.TYPE_HL],
    /* 0xE6 */  [DebuggerX80.INS.ANI,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_IMM | DebuggerX80.TYPE_BYTE],
    /* 0xE7 */  [DebuggerX80.INS.RST,   DebuggerX80.TYPE_INT],
    /* 0xE8 */  [DebuggerX80.INS.RPE],
    /* 0xE9 */  [DebuggerX80.INS.PCHL,  DebuggerX80.TYPE_HL],
    /* 0xEA */  [DebuggerX80.INS.JPE,   DebuggerX80.TYPE_ADDR],
    /* 0xEB */  [DebuggerX80.INS.XCHG,  DebuggerX80.TYPE_HL   | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_DE  | DebuggerX80.TYPE_OPT],
    /* 0xEC */  [DebuggerX80.INS.CPE,   DebuggerX80.TYPE_ADDR],
    /* 0xED */  [DebuggerX80.INS.CALL,  DebuggerX80.TYPE_ADDR | DebuggerX80.TYPE_UNDOC],
    /* 0xEE */  [DebuggerX80.INS.XRI,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_IMM | DebuggerX80.TYPE_BYTE],
    /* 0xEF */  [DebuggerX80.INS.RST,   DebuggerX80.TYPE_INT],
    /* 0xF0 */  [DebuggerX80.INS.RP],
    /* 0xF1 */  [DebuggerX80.INS.POP,   DebuggerX80.TYPE_PSW],
    /* 0xF2 */  [DebuggerX80.INS.JP,    DebuggerX80.TYPE_ADDR],
    /* 0xF3 */  [DebuggerX80.INS.DI],
    /* 0xF4 */  [DebuggerX80.INS.CP,    DebuggerX80.TYPE_ADDR],
    /* 0xF5 */  [DebuggerX80.INS.PUSH,  DebuggerX80.TYPE_PSW],
    /* 0xF6 */  [DebuggerX80.INS.ORI,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_IMM | DebuggerX80.TYPE_BYTE],
    /* 0xF7 */  [DebuggerX80.INS.RST,   DebuggerX80.TYPE_INT],
    /* 0xF8 */  [DebuggerX80.INS.RM],
    /* 0xF9 */  [DebuggerX80.INS.SPHL,  DebuggerX80.TYPE_SP   | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_HL  | DebuggerX80.TYPE_OPT],
    /* 0xFA */  [DebuggerX80.INS.JM,    DebuggerX80.TYPE_ADDR],
    /* 0xFB */  [DebuggerX80.INS.EI],
    /* 0xFC */  [DebuggerX80.INS.CM,    DebuggerX80.TYPE_ADDR],
    /* 0xFD */  [DebuggerX80.INS.CALL,  DebuggerX80.TYPE_ADDR | DebuggerX80.TYPE_UNDOC],
    /* 0xFE */  [DebuggerX80.INS.CPI,   DebuggerX80.TYPE_A    | DebuggerX80.TYPE_OPT, DebuggerX80.TYPE_IMM | DebuggerX80.TYPE_BYTE],
    /* 0xFF */  [DebuggerX80.INS.RST,   DebuggerX80.TYPE_INT]
    ];

    DebuggerX80.HISTORY_LIMIT = DEBUG? 100000 : 1000;

    /*
     * Initialize every Debugger module on the page (as IF there's ever going to be more than one ;-))
     */
    WebLib.onInit(DebuggerX80.init);

}   // endif DEBUGGER

/**
 * @copyright https://www.pcjs.org/machines/pcx80/modules/v2/computer.js (C) 2012-2025 Jeff Parsons
 */

/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @class ComputerX80
 * @unrestricted
 */
class ComputerX80 extends Component {
    /**
     * ComputerX80(parmsComputer, parmsMachine, fSuspended)
     *
     * The ComputerX80 component has no required (parmsComputer) properties, but it does
     * support the following:
     *
     *      autoPower: true to automatically power the computer (default), false to wait;
     *      false is honored only if a "power" button binding exists.
     *
     *      busWidth: number of memory address lines (address bits) on the computer's "bus";
     *      20 is the minimum (and the default), which implies 8086/8088 real-mode addressing,
     *      while 24 is required for 80286 protected-mode addressing.  This value is passed
     *      directly through to the Bus component; see that component for more details.
     *
     *      resume: one of the ComputerX80.RESUME constants, which are as follows:
     *          '0' if resume disabled (default)
     *          '1' if enabled without prompting
     *          '2' if enabled with prompting
     *          '3' if enabled with prompting and auto-delete
     *          or a string containing the path of a predefined JSON-encoded state
     *
     *      state: the path to JSON-encoded state file (see details regarding 'state' below)
     *
     * The parmsMachine object, if provided, may contain any of:
     *
     *      autoMount: if set, this should override any 'autoMount' property in the FDC's
     *      parmsFDC object.
     *
     *      autoPower: if set, this should override any 'autoPower' property in the ComputerX80's
     *      parmsComputer object.
     *
     *      messages: if set, this should override any 'messages' property in the Debugger's
     *      parmsDbg object.
     *
     *      state: if set, this should override any 'state' property in the ComputerX80's
     *      parmsComputer object.
     *
     *      url: the location of the machine XML file
     *
     * If a predefined state is supplied AND it's successfully loaded, then resume behavior
     * defaults to '1' (ie, resume enabled without prompting).
     *
     * This component insures that all components are ready before "powering" them.
     *
     * Different components become ready at different times, and initialization order (ie,
     * the order the scripts are combined on the page) only partially determines readiness.
     * This is because components like ROM and Video must finish loading their resource files
     * before they are ready.  Other components become ready after we call their initBus()
     * function, because they have a Bus or CPU dependency, such as access to memory management
     * functions.  And other components, like CPU and Panel, are ready as soon as their
     * constructor finishes.
     *
     * Once a component has indicated it's ready, we call its powerUp() notification
     * function (if it has one--it's optional).  We call the CPU's powerUp() function last,
     * so that the CPU is assured that all other components are ready and "powered".
     *
     * @this {ComputerX80}
     * @param {Object} parmsComputer
     * @param {Object} [parmsMachine]
     * @param {boolean} [fSuspended]
     */
    constructor(parmsComputer, parmsMachine, fSuspended)
    {
        super("Computer", parmsComputer, MESSAGE.COMPUTER);

        this.flags.powered = false;

        this.setMachineParms(parmsMachine);

        this.fAutoPower = this.getMachineParm('autoPower', parmsComputer);

        /*
         * nPowerChange is 0 while the power state is stable, 1 while power is transitioning
         * to "on", and -1 while power is transitioning to "off".
         */
        this.nPowerChange = 0;

        /*
         * TODO: Deprecate 'buswidth' (it should have always used camelCase)
         */
        this.nBusWidth = parmsComputer['busWidth'] || parmsComputer['buswidth'];

        this.resume = ComputerX80.RESUME_NONE;
        this.sStateData = null;
        this.fStateData = false;            // remembers if sStateData was loaded
        this.fServerState = false;

        this.url = this.getMachineParm('url') || "";

        /*
         * Generate a random number x (where 0 <= x < 1), add 0.1 so that it's guaranteed to be
         * non-zero, convert to base 36, and chop off the leading digit and "decimal" point.
         */
        this.sMachineID = (Math.random() + 0.1).toString(36).substr(2,12);
        this.sUserID = this.queryUserID();

        /*
         * Find the appropriate CPU (and Debugger and Control Panel, if any)
         *
         * CLOSURE COMPILER TIP: To override the type of a right-hand expression (as we need to do here,
         * where we know getComponentByType() will only return an CPUState object or null), wrap the expression
         * in parentheses.  I never knew this until I stumbled across it in "Closure: The Definitive Guide".
         */
        this.cpu = /** @type {CPUStateX80} */ (Component.getComponentByType("CPU", this.id));
        if (!this.cpu) {
            Component.error("Unable to find CPU component");
            return;
        }
        this.dbg = /** @type {DebuggerX80} */ (Component.getComponentByType("Debugger", this.id));

        /*
         * Enumerate all Video components for future updateVideo() calls.
         */
        this.aVideo = [];
        for (let video = false; (video = this.getMachineComponent("Video", video));) {
            this.aVideo.push(video);
        }

        /*
         * Initialize the Bus component
         */
        this.bus = new BusX80({'id': this.idMachine + '.bus', 'busWidth': this.nBusWidth}, this.cpu, this.dbg);

        /*
         * Iterate through all the components and connect them to the Control Panel, if any
         */
        let iComponent, component;
        let aComponents = Component.getComponents(this.id);

        this.panel = /** @type {PanelX80} */ (Component.getComponentByType("Panel", this.id));
        this.controlPrint = this.panel && this.panel.bindings['print'];

        if (this.controlPrint) {
            for (iComponent = 0; iComponent < aComponents.length; iComponent++) {
                component = aComponents[iComponent];
                /*
                 * I can think of many "cleaner" ways for the Control Panel component to pass its
                 * print() override on to all the other components, but it's just too darn convenient
                 * to slam these overrides into the components directly.
                 */
                component.print = this.panel.print;
            }
        }

        this.printf(MESSAGE.NONE, "%s v%s\n%s\n%s\n", APPNAME, APPVERSION, COPYRIGHT, LICENSE);

        if (MAXDEBUG) this.printf(MESSAGE.DEBUG, "TYPEDARRAYS: %s\n", TYPEDARRAYS);

        /*
         * Iterate through all the components again and call their initBus() handler, if any
         */
        for (iComponent = 0; iComponent < aComponents.length; iComponent++) {
            component = aComponents[iComponent];
            if (component.initBus) component.initBus(this, this.bus, this.cpu, this.dbg);
        }

        let sStatePath = null;
        let sResume = this.getMachineParm('resume', parmsComputer);
        if (sResume !== undefined) {
            /*
             * Decide whether the 'resume' property is a number or the path of a state file to resume.
             */
            if (sResume.length > 1) {
                sStatePath = this.sResumePath = sResume;
            } else {
                this.resume = parseInt(sResume, 10);
            }
        }

        /*
         * The Computer 'state' property allows a state file to be specified independent of the 'resume' feature;
         * previously, you could only use 'resume' to load a state file -- which we still support, but loading a state
         * file that way prevents the machine's state from being saved, since we always resume from the 'resume' file.
         *
         * The other wrinkle is on the restore side: we need to IGNORE the 'state' property if a saved state now exists.
         * So we have to peek at localStorage, and unfortunately, the only way to "peek" is to actually load the data,
         * but we're not ready to use it yet, so powerUp() has been changed to use any existing stateComputer that we've
         * already loaded.
         *
         * However, there's now a wrinkle to the wrinkle: if a 'state' parameter has been passed via the URL, then that
         * OVERRIDES everything; it overrides any 'state' Computer parameter AND it disables resume of any saved state in
         * localStorage (in other words, it prevents fAllowResume from being true, and forcing resume off).
         */
        let fAllowResume = false;
        let sState = this.getMachineParm('state');
        if (!sState) {
            fAllowResume = true;
            sState = parmsComputer['state'];
        }

        if (sState) {
            sStatePath = this.sStatePath = sState;
            if (!fAllowResume) {
                this.fServerState = true;
                this.resume = ComputerX80.RESUME_NONE;
            }
            if (this.resume) {
                this.stateComputer = new State(this, APPVERSION);
                if (this.stateComputer.load()) {
                    sStatePath = null;
                } else {
                    delete this.stateComputer;
                }
            }
        }

        /*
         * If sStatePath is set, we must use it.  But if there's no sStatePath AND resume is set,
         * then we have the option of resuming from a server-side state, assuming a valid USERID.
         */
        if (!sStatePath && this.resume) {
            sStatePath = this.getServerStatePath();
            if (sStatePath) this.fServerState = true;
        }

        if (!sStatePath) {
            this.setReady();
        } else {
            let cmp = this;
            WebLib.getResource(/** @type {string} */ (sStatePath), null, true, function(sURL, sResource, nErrorCode) {
                cmp.doneLoad(sURL, sResource, nErrorCode);
            });
        }

        if (!this.bindings["power"]) this.fAutoPower = true;

        /*
         * Power on the computer, giving every component the opportunity to reset or restore itself.
         */
        if (!fSuspended && this.fAutoPower) this.wait(this.powerOn);
    }

    /**
     * clearPanel()
     *
     * @this {ComputerX80}
     */
    clearPanel()
    {
        if (this.controlPrint) {
            this.controlPrint.value = "";
        }
    }

    /**
     * getMachineID()
     *
     * @this {ComputerX80}
     * @returns {string}
     */
    getMachineID()
    {
        return this.sMachineID;
    }

    /**
     * setMachineParms(parmsMachine)
     *
     * If no explicit machine parms were provided, then we check for 'parms' in the bundled resources (if any).
     *
     * @this {ComputerX80}
     * @param {Object} [parmsMachine]
     */
    setMachineParms(parmsMachine)
    {
        if (!parmsMachine) {
            let sParms;
            let resources = globals.window['resources'];
            if (typeof resources == 'object' && (sParms = resources['parms'])) {
                try {
                    parmsMachine = /** @type {Object} */ (eval("(" + sParms + ")"));
                } catch(e) {
                    Component.error(e.message + " (" + sParms + ")");
                }
            }
        }
        this.parmsMachine = parmsMachine;
    }

    /**
     * getMachineParm(sParm, parmsComponent)
     *
     * If the machine parameter doesn't exist, we check for a matching component parameter (if parmsComponent is provided),
     * and failing that, we check the bundled resources (if any).
     *
     * At the moment, the only bundled resource request we expect to encounter is 'state'; if it exists, then we return
     * 'state' back to the caller (ie, the name of the resource), so that the caller will then attempt to load the 'state'
     * resource to obtain the actual state.
     *
     * @this {ComputerX80}
     * @param {string} sParm
     * @param {Object} [parmsComponent]
     * @returns {string|undefined}
     */
    getMachineParm(sParm, parmsComponent)
    {
        /*
         * When using getURLParm(), the check is allowed be a bit looser, because URL parameters are
         * user-supplied, whereas most other parameters are developer-supplied.  Granted, a developer
         * may also be sloppy and neglect to use correct case (eg, 'automount' instead of 'autoMount'),
         * but there are limits to my paranoia.
         */
        let resources = globals.window['resources'];
        let sParmLC = sParm.toLowerCase();
        let value = WebLib.getURLParm(sParm) || WebLib.getURLParm(sParmLC);

        if (value === undefined && this.parmsMachine) {
            value = this.parmsMachine[sParm];
        }
        if (value === undefined && parmsComponent) {
            value = parmsComponent[sParm];
        }
        if (value === undefined && typeof resources == 'object' && resources[sParm]) {
            value = sParm;
        }
        return value;
    }

    /**
     * saveMachineParms()
     *
     * @this {ComputerX80}
     * @returns {string|null}
     */
    saveMachineParms()
    {
        return this.parmsMachine? JSON.stringify(this.parmsMachine) : null;
    }

    /**
     * getUserID()
     *
     * @this {ComputerX80}
     * @returns {string}
     */
    getUserID()
    {
        return this.sUserID || "";
    }

    /**
     * doneLoad(sURL, sStateData, nErrorCode)
     *
     * @this {ComputerX80}
     * @param {string} sURL
     * @param {string} sStateData
     * @param {number} nErrorCode
     */
    doneLoad(sURL, sStateData, nErrorCode)
    {
        if (!nErrorCode) {
            this.sStateData = sStateData;
            this.fStateData = true;
            this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "loaded state file %s\n", sURL.replace(this.sUserID || "xxx", "xxx"));
        } else {
            this.sResumePath = null;
            this.fServerState = false;
            this.printf(MESSAGE.NOTICE, "Unable to load machine state from server (error %d%s)\n", nErrorCode, (sStateData? ': ' + StrLib.trim(sStateData) : ''));
        }
        this.setReady();
    }

    /**
     * wait(fn, parms)
     *
     * wait() waits until every component is ready (including ourselves, the last component we check), then calls the
     * specified Computer method.
     *
     * TODO: The Closure Compiler makes it difficult for us to define a function type for "fn" that works in all cases;
     * sometimes we want to pass a function that takes only a "number", and other times we want to pass a function that
     * takes only an "Array" (the type will mirror that of the "parms" parameter).  However, the Closure Compiler insists
     * that both functions must be declared as accepting both types of parameters.  So once again, we must use an untyped
     * function declaration, instead of something stricter like:
     *
     *      param {function(this:Computer, (number|Array|undefined)): undefined} fn
     *
     * @this {ComputerX80}
     * @param {function(...)} fn
     * @param {number|Array} [parms] optional parameters
     */
    wait(fn, parms)
    {
        let computer = this;
        let aComponents = Component.getComponents(this.id);
        for (let iComponent = 0; iComponent <= aComponents.length; iComponent++) {
            let component = (iComponent < aComponents.length ? aComponents[iComponent] : this);
            if (!component.isReady()) {
                component.isReady(function onComponentReady() {
                    computer.wait(fn, parms);
                });
                return;
            }
        }
        this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "wait(ready)\n");
        fn.call(this, parms);
    }

    /**
     * validateState(stateComputer)
     *
     * NOTE: We clear() stateValidate only when there's no stateComputer.
     *
     * @this {ComputerX80}
     * @param {State|null} [stateComputer]
     * @returns {boolean} true if state passes validation, false if not
     */
    validateState(stateComputer)
    {
        let fValid = true;
        let stateValidate = new State(this, APPVERSION, ComputerX80.STATE_VALIDATE);
        if (stateValidate.load() && stateValidate.parse()) {
            let sTimestampValidate = stateValidate.get(ComputerX80.STATE_TIMESTAMP);
            let sTimestampComputer = stateComputer? stateComputer.get(ComputerX80.STATE_TIMESTAMP) : "unknown";
            if (sTimestampValidate != sTimestampComputer) {
                this.printf(MESSAGE.NOTICE, "Machine state may be out-of-date\n(%s vs. %s)\nCheck your browser's local storage limits\n", sTimestampValidate, sTimestampComputer);
                fValid = false;
                if (!stateComputer) stateValidate.clear();
            } else {
                this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "last state: %s (validate: %s)\n", sTimestampComputer, sTimestampValidate);
            }
        }
        return fValid;
    }

    /**
     * powerOn(resume)
     *
     * Power every component "up", applying any previously available state information.
     *
     * @this {ComputerX80}
     * @param {number} [resume] is a valid RESUME value; default is this.resume
     */
    powerOn(resume)
    {
        if (resume === undefined) {
            resume = this.resume || (this.sStateData? ComputerX80.RESUME_AUTO : ComputerX80.RESUME_NONE);
        }

        this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "powerOn(%s)\n", (resume == ComputerX80.RESUME_REPOWER ? "repower" : (resume ? "resume" : "")));

        if (this.nPowerChange) {
            return;
        }
        this.nPowerChange++;

        let fRepower = false;
        let fRestore = false;
        this.fRestoreError = false;
        let stateComputer = this.stateComputer || new State(this, APPVERSION);

        if (resume == ComputerX80.RESUME_REPOWER) {
            fRepower = true;
        }
        else if (resume > ComputerX80.RESUME_NONE) {
            if (stateComputer.load(this.sStateData)) {
                /*
                 * Since we're resuming something (either a predefined state or a state from localStorage), let's
                 * create a "failsafe" checkpoint in localStorage, and destroy it at the end of a successful powerOn().
                 * Which means, of course, that if a previous "failsafe" checkpoint already exists, something bad
                 * may have happened the last time around.
                 */
                this.stateFailSafe = new State(this, APPVERSION, ComputerX80.STATE_FAILSAFE);
                if (this.stateFailSafe.load()) {
                    this.powerReport(stateComputer);
                    /*
                     * We already know resume is something other than RESUME_NONE, so we'll go ahead and bump it
                     * all the way to RESUME_PROMPT, so that the user will be prompted, and if the user declines to
                     * restore, the state will be removed.
                     */
                    resume = ComputerX80.RESUME_PROMPT;
                    /*
                     * To ensure that the set() below succeeds, we need to call unload(), otherwise it may fail
                     * with a "read only" error (eg, "TypeError: Cannot assign to read only property 'timestamp'").
                     */
                    this.stateFailSafe.unload();
                }

                this.stateFailSafe.set(ComputerX80.STATE_TIMESTAMP, UsrLib.getTimestamp());
                this.stateFailSafe.store();

                let fValidate = this.resume && !this.fServerState;
                if (resume == ComputerX80.RESUME_AUTO || Component.confirmUser("Click OK to restore the previous " + APPNAME + " machine state, or CANCEL to reset the machine.")) {
                    fRestore = stateComputer.parse();
                    if (fRestore) {
                        let sCode = /** @type {string} */ (stateComputer.get(UserAPI.RES.CODE));
                        let sData = /** @type {string} */ (stateComputer.get(UserAPI.RES.DATA));
                        if (sCode) {
                            if (sCode == UserAPI.CODE.OK) {
                                stateComputer.load(sData);
                            } else {
                                /*
                                 * A missing (or not yet created) state file is no cause for alarm, but other errors might be
                                 */
                                if (sCode == UserAPI.CODE.FAIL && sData != UserAPI.FAIL.NOSTATE) {
                                    this.printf(MESSAGE.NOTICE, "Error: %s\n", sData);
                                    if (sData == UserAPI.FAIL.VERIFY) this.resetUserID();
                                } else {
                                    this.printf("%s: %s\n", sCode, sData);
                                }
                                /*
                                 * Try falling back to the state that we should have saved in localStorage, as a backup to the
                                 * server-side state.
                                 */
                                stateComputer.unload();     // discard the invalid server-side state first
                                if (stateComputer.load()) {
                                    fRestore = stateComputer.parse();
                                    fValidate = true;
                                } else {
                                    fRestore = false;       // hmmm, there was nothing in localStorage either
                                }
                            }
                        }
                    }
                    /*
                     * If the load/parse was successful, and it was from localStorage (not sStateData),
                     * then we should to try verify that localStorage snapshot is current.  One reason it may
                     * NOT be current is if localStorage was full and we got a quota error during the last
                     * powerOff().
                     */
                    if (fValidate) this.validateState(fRestore? stateComputer : null);
                } else {
                    /*
                     * RESUME_PROMPT indicates we should delete the state if they clicked Cancel to confirm() above.
                     */
                    if (resume == ComputerX80.RESUME_PROMPT) stateComputer.clear();
                }
            } else {
                /*
                 * If there's no state, then there should also be no validation timestamp; if there is, then once again,
                 * we're probably dealing with a quota error.
                 */
                this.validateState();
            }
            delete this.sStateData;
            delete this.stateComputer;
        }

        /*
         * Start powering all components, including any data they may need to restore their state;
         * we restore power to the CPU last.
         */
        let aComponents = Component.getComponents(this.id);
        for (let iComponent = 0; iComponent < aComponents.length; iComponent++) {
            let component = aComponents[iComponent];
            if (component !== this && component != this.cpu) {
                fRestore = this.powerRestore(component, stateComputer, fRepower, fRestore);
            }
        }

        /*
         * Assuming this is not a repower, we must perform another wait, because some components may
         * have marked themselves as "not ready" again (eg, the FDC component, if the restore forced it
         * to mount one or more additional disk images).
         */
        let aParms = [stateComputer, resume, fRestore];

        if (resume != ComputerX80.RESUME_REPOWER) {
            this.wait(this.donePowerOn, aParms);
            return;
        }
        this.donePowerOn(aParms);
    }

    /**
     * powerRestore(component, stateComputer, fRepower, fRestore)
     *
     * @this {ComputerX80}
     * @param {Component} component
     * @param {State} stateComputer
     * @param {boolean} fRepower
     * @param {boolean} fRestore
     * @returns {boolean} true if restore should continue, false if not
     */
    powerRestore(component, stateComputer, fRepower, fRestore)
    {
        if (!component.flags.powered) {

            component.flags.powered = true;

            if (component.powerUp) {

                let data = null;
                if (fRestore) {
                    data = stateComputer.get(component.id);
                    if (!data) {
                        /*
                         * This is a hack that makes it possible for a machine whose ID has been
                         * supplemented with a hyphenated numeric suffix to find object IDs in states
                         * created from a machine without such a suffix.
                         *
                         * For example, if a state file was created from a machine with ID "ibm5160"
                         * but the current machine is "ibm5160-1", this attempts a second lookup with
                         * "ibm5160", enabling us to find objects that match the original machine ID
                         * (eg, "ibm5160.romEGA").
                         *
                         * See /devices/pcx86/machine/5160/ega/640kb/array/ for examples of this.
                         */
                        data = stateComputer.get(component.id.replace(/-[0-9]+\./i, '.'));
                    }
                }

                /*
                 * State.get() will return whatever was originally passed to State.set() (eg, an
                 * Object or a string), but components are supposed to store only Objects, so if a
                 * string comes back, something went wrong.  By explicitly eliminating "string" data,
                 * the Closure Compiler stops complaining that we might be passing strings to our
                 * powerUp() functions (even though we know we're not).
                 *
                 * TODO: Determine if there's some way to coerce the Closure Compiler into treating
                 * data as Object or null, without having to include this runtime check.  An assert
                 * would be a good idea, but this is overkill.
                 */
                if (typeof data === "string") data = null;

                /*
                 * If computer is null, this is simply a repower notification, which most components
                 * don't do anything with.  Exceptions include: CPU (since it may be halted) and Video
                 * (since its screen may be "turned off").
                 */
                if (!component.powerUp(data, fRepower) && data) {

                    Component.error("Unable to restore state for " + component.type);
                    /*
                     * If this is a resume error for a machine that also has a predefined state
                     * AND we're not restoring from that state, then throw away the current state,
                     * prevent any new state from being created, and then force a reload, which will
                     * hopefully restore us to the functioning predefined state.
                     *
                     * TODO: Considering doing this in ALL cases, not just in situations where a
                     * 'state' exists but we're not actually resuming from it.
                     */
                    if (this.sStatePath && !this.fStateData) {
                        stateComputer.clear();
                        this.resume = ComputerX80.RESUME_NONE;
                        WebLib.reloadPage();
                    } else {
                        /*
                         * In all other cases, we set fRestoreError, which should trigger a call to
                         * powerReport() and then delete the offending state.
                         */
                        this.fRestoreError = true;
                    }
                    /*
                     * Any failure triggers an automatic to call powerUp() again, without any state,
                     * in the hopes that the component can recover by performing a reset.
                     */
                    component.powerUp(null);
                    /*
                     * We also disable the rest of the restore operation, because it's not clear
                     * the remaining state information can be trusted;  the machine is already in an
                     * inconsistent state, so we're not likely to make things worse, and the only
                     * alternative (starting over and performing a state-less reset) isn't likely to make
                     * the user any happier.  But, we'll see... we need some experience with the code.
                     */
                    fRestore = false;
                }
            }

            if (!fRepower && component.comment) {
                let asComments = component.comment.split("|");
                for (let i = 0; i < asComments.length; i++) {
                    component.printf(MESSAGE.STATUS, "%s\n", asComments[i]);
                }
            }
        }
        return fRestore;
    }

    /**
     * donePowerOn(aParms)
     *
     * This is nothing more than a continuation of powerOn(), giving us the option of calling wait() one more time.
     *
     * @this {ComputerX80}
     * @param {Array} aParms containing [stateComputer, resume, fRestore]
     */
    donePowerOn(aParms)
    {
        let stateComputer = aParms[0];
        let fRepower = (aParms[1] < 0);
        let fRestore = aParms[2];

        this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "donePowerOn(%s)\n", this.flags.powered? "redundant" : "");

        this.fInitialized = true;
        this.flags.powered = true;
        let controlPower = this.bindings["power"];
        if (controlPower) controlPower.textContent = "Shutdown";

        /*
         * Once we get to this point, we're guaranteed that all components are ready, so it's safe to power the CPU;
         * the CPU should begin executing immediately, unless a debugger is attached.
         */
        if (this.cpu) {
            /*
             * TODO: Do we not care about the return value here? (ie, is checking fRestoreError sufficient)?
             */
            this.powerRestore(this.cpu, stateComputer, fRepower, fRestore);
            this.cpu.autoStart();
        }

        /*
         * If the state was bad, offer to report it and then delete it.  Deleting may be moot, since invariably a new
         * state will be created on powerOff() before the next powerOn(), but it seems like good paranoia all the same.
         */
        if (this.fRestoreError) {
            this.powerReport(stateComputer);
            stateComputer.clear();
        }

        if (!fRepower && this.stateFailSafe) {
            this.stateFailSafe.clear();
            delete this.stateFailSafe;
        }

        this.nPowerChange = 0;
    }

    /**
     * checkPower()
     *
     * @this {ComputerX80}
     * @returns {boolean} true if the computer is fully powered, false otherwise
     */
    checkPower()
    {
        if (this.flags.powered) return true;

        let component = null, iComponent;
        let aComponents = Component.getComponents(this.id);
        for (iComponent = 0; iComponent < aComponents.length; iComponent++) {
            component = aComponents[iComponent];
            if (component !== this && !component.flags.ready) break;
        }
        if (iComponent == aComponents.length) {
            for (iComponent = 0; iComponent < aComponents.length; iComponent++) {
                component = aComponents[iComponent];
                if (component !== this && !component.flags.powered) break;
            }
        }
        if (iComponent == aComponents.length) component = this;
        let s = "The " + component.type + " component (" + component.id + ") is not " + (!component.flags.ready? "ready yet" + (component.fnReady? " (waiting for notification)" : "") : "powered yet") + ".";
        Component.alertUser(s);
        return false;
    }

    /**
     * powerReport(stateComputer)
     *
     * @this {ComputerX80}
     * @param {State} stateComputer
     */
    powerReport(stateComputer)
    {
        //
        // This is all we can realistically do for now.
        //
        WebLib.onError("There may be a problem with your " + APPNAME + " machine.");
        //
        // if (Component.confirmUser("There may be a problem with your " + APPNAME + " machine.\n\nTo help us diagnose it, click OK to send this " + APPNAME + " machine state to " + SITEURL + ".")) {
        //     WebLib.sendReport(APPNAME, APPVERSION, this.url, this.getUserID(), ReportAPI.TYPE.BUG, stateComputer.toString());
        // }
        //
    }

    /**
     * powerOff(fSave, fShutdown)
     *
     * Power every component "down" and optionally save the machine state.
     *
     * There's one scenario that powerOff() isn't currently able to deal with very effectively: what to do when
     * the user switches away while it's still being restored, causing Disk getResource() calls to fail.  The
     * Disk component calls notify() when that happens -- see Disk.mount() -- but the FDC and HDC controllers don't
     * notify *us* of those problems, so Computer assumes that the restore was completely successful, when in fact
     * it was only partially successful.
     *
     * Then we immediately arrive here to perform a save, following that incomplete restore.  It would be wrong to
     * deal with that incomplete restore by setting fRestoreError, because we don't want to trigger a powerReport()
     * and the deletion of the previous state, because the state itself was presumably OK.  Unfortunately, the new
     * state we now save will no longer include manually mounted disk images whose remounts were interrupted, so future
     * restores won't remount them either.
     *
     * We could perhaps solve this by having the Disk component notify us in those situations, set a new flag
     * (fRestoreIncomplete?), and set fSave to false if that's ever set.  Be careful though: when fSave is false,
     * that means MORE than not saving; it also means deleting any previous state, which is NOT what you'd want to
     * do in a "fRestoreIncomplete" situation.  Also, we have to worry about Disk operations that fail for other reasons,
     * making sure those failures don't interfere with the save process in the same way.
     *
     * As it stands, the worst that happens is any manually mounted disk images might have to be manually remounted,
     * which doesn't seem like a huge problem.
     *
     * @this {ComputerX80}
     * @param {boolean} [fSave] is true to request a saved state
     * @param {boolean} [fShutdown] is true if the machine is being shut down
     * @returns {string|null} string representing the saved state (or null if error)
     */
    powerOff(fSave, fShutdown)
    {
        let data;
        let sState = "none";

        this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "powerOff(%s%s)\n", (fSave ? "save" : "nosave"), (fShutdown ? ",shutdown" : ""));

        if (this.nPowerChange) {
            return null;
        }
        this.nPowerChange--;

        let stateComputer = new State(this, APPVERSION);
        let stateValidate = new State(this, APPVERSION, ComputerX80.STATE_VALIDATE);

        let sTimestamp = UsrLib.getTimestamp();
        stateValidate.set(ComputerX80.STATE_TIMESTAMP, sTimestamp);
        stateComputer.set(ComputerX80.STATE_TIMESTAMP, sTimestamp);
        stateComputer.set(ComputerX80.STATE_VERSION, APPVERSION);
        stateComputer.set(ComputerX80.STATE_HOSTURL, WebLib.getHostURL());
        stateComputer.set(ComputerX80.STATE_BROWSER, WebLib.getUserAgent());

        /*
         * Always power the CPU "down" first, just to help insure it doesn't ask other components to do anything
         * after they're no longer ready.
         */
        if (this.cpu && this.cpu.powerDown) {
            if (fShutdown) this.cpu.stopCPU();
            data = this.cpu.powerDown(fSave, fShutdown);
            if (typeof data === "object") stateComputer.set(this.cpu.id, data);
            if (fShutdown) {
                this.cpu.flags.powered = false;
                if (data === false) sState = null;
            }
        }

        let aComponents = Component.getComponents(this.id);
        for (let iComponent = 0; iComponent < aComponents.length; iComponent++) {
            let component = aComponents[iComponent];
            if (component.flags.powered) {
                if (component.powerDown) {
                    data = component.powerDown(fSave, fShutdown);
                    if (typeof data === "object") stateComputer.set(component.id, data);
                }
                if (fShutdown) {
                    component.flags.powered = false;
                    if (data === false) sState = null;
                }
            }
        }

        if (sState) {
            if (fShutdown) {
                let fClear = false;
                let fClearAll = false;
                if (fSave) {
                    if (this.sUserID) {
                        this.saveServerState(this.sUserID, stateComputer.toString());
                    }
                    if (!stateValidate.store() || !stateComputer.store()) {
                        sState = null;
                        /*
                         * New behavior as of v1.13.2:  if it appears that localStorage is full, we blow it ALL away.
                         * Dedicated server-side storage is the only way we'll ever be able to reliably preserve a
                         * particular machine's state.  Historically, attempting to limp along with whatever localStorage
                         * is left just generates the same useless and annoying warnings over and over.
                         */
                        fClear = fClearAll = true;
                    }
                }
                else {
                    /*
                     * I used to ALWAYS clear (ie, delete) any associated computer state, but now I do this only if the
                     * current machine is "resumable", because there are situations where I have two configurations
                     * for the same machine -- one resumable and one not -- and I don't want the latter throwing away the
                     * state of the former.
                     *
                     * So this code is here now strictly for callers to delete the state of a "resumable" machine, not as
                     * some paranoid clean-up operation.
                     *
                     * An undocumented feature of this operation is that if your configuration uses the special 'resume="3"'
                     * value, and you click the "Reset" button, and then you click OK to reset the everything, this will
                     * actually reset EVERYTHING (ie, all localStorage for ALL configs will be reclaimed).
                     */
                    if (this.resume) {
                        fClear = true;
                        fClearAll = (this.resume == ComputerX80.RESUME_DELETE);
                    }
                }
                if (fClear) {
                    stateComputer.clear(fClearAll);
                }
            } else {
                sState = stateComputer.toString();
            }
        }

        if (fShutdown) {
            this.flags.powered = false;
            let controlPower = this.bindings["power"];
            if (controlPower) controlPower.textContent = "Power";
        }

        this.nPowerChange = 0;

        return sState;
    }

    /**
     * reset()
     *
     * Notify all (other) components with a reset() method that the Computer is being reset.
     *
     * NOTE: We'd like to reset the Bus first (due to the importance of the A20 line), but since we
     * allocated the Bus object ourselves, after all the other components were allocated, it ends
     * up near the end of Component's list of components.  Hence the special case for this.bus below.
     *
     * @this {ComputerX80}
     */
    reset()
    {
        if (this.bus && this.bus.reset) {
            /*
             * TODO: Why does WebStorm think that this.bus.type is undefined? The base class (Component)
             * constructor defines it.
             */
            this.printf("Resetting %s\n", this.bus.type);
            this.bus.reset();
        }
        let aComponents = Component.getComponents(this.id);
        for (let iComponent = 0; iComponent < aComponents.length; iComponent++) {
            let component = aComponents[iComponent];
            if (component !== this && component !== this.bus && component.reset) {
                this.printf("Resetting %s\n", component.type);
                component.reset();
            }
        }
    }

    /**
     * start(ms, nCycles)
     *
     * Notify all (other) components with a start() method that the CPU has started.
     *
     * Note that we're called by runCPU(), which is why we exclude the CPU component,
     * as well as ourselves.
     *
     * @this {ComputerX80}
     * @param {number} ms
     * @param {number} nCycles
     */
    start(ms, nCycles)
    {
        let aComponents = Component.getComponents(this.id);
        for (let iComponent = 0; iComponent < aComponents.length; iComponent++) {
            let component = aComponents[iComponent];
            if (component.type == "CPU" || component === this) continue;
            if (component.start) {
                component.start(ms, nCycles);
            }
        }
    }

    /**
     * stop(ms, nCycles)
     *
     * Notify all (other) components with a stop() method that the CPU has stopped.
     *
     * Note that we're called by runCPU(), which is why we exclude the CPU component,
     * as well as ourselves.
     *
     * @this {ComputerX80}
     * @param {number} ms
     * @param {number} nCycles
     */
    stop(ms, nCycles)
    {
        let aComponents = Component.getComponents(this.id);
        for (let iComponent = 0; iComponent < aComponents.length; iComponent++) {
            let component = aComponents[iComponent];
            if (component.type == "CPU" || component === this) continue;
            if (component.stop) {
                component.stop(ms, nCycles);
            }
        }
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * @this {ComputerX80}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea", "canvas")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "reset")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        let computer = this;

        switch (sBinding) {
        case "power":
            this.bindings[sBinding] = control;
            control.onclick = function onClickPower() {
                computer.onPower();
            };
            return true;

        case "reset":
            this.bindings[sBinding] = control;
            control.onclick = function onClickReset() {
                computer.onReset();
            };
            return true;

        /*
         * Technically, this binding should now be called "saveState", to clearly distinguish it from
         * the "Save Machine" control that's normally bound to the savePC() function in save.js.  Saving
         * an entire machine includes everything needed to start/restore the machine; eg, the machine
         * XML configuration file(s) *and* the JSON-encoded machine state.
         */
        case "save":
            /*
             * Since this feature depends on the server supporting the PCjs User API (see userapi.js),
             * and since pcjs.org is no longer running a Node web server, we disable the feature for that
             * particular host.
             */
            if (StrLib.endsWith(WebLib.getHostName(), "pcjs.org")) {
                this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "Remote user API not available\n");
                /*
                 * We could also simply hide the control; eg:
                 *
                 *      control.style.display = "none";
                 *
                 * but removing the control altogether seems better.
                 */
                control.parentNode.removeChild(/** @type {Node} */ (control));
                return false;
            }
            this.bindings[sBinding] = control;
            control.onclick = function onClickSave() {
                let sUserID = computer.queryUserID(true);
                if (sUserID) {
                    /*
                     * I modified the test to include a check for sStatePath so that I could save new states
                     * for machines with existing states; otherwise, I'd have no (easy) way of capturing and
                     * updating their state.  Making the machine (even temporarily) resumable would have been
                     * one work-around, but it's not appropriate for some machines, as their state is simply
                     * too large (for localStorage anyway, which is the default storage solution).
                     */
                    let fSave = !!(computer.resume && !computer.sResumePath || computer.sStatePath);
                    let sState = computer.powerOff(fSave);
                    if (fSave) {
                        computer.saveServerState(sUserID, sState);
                    } else {
                        computer.printf(MESSAGE.NOTICE, "Resume disabled, machine state not saved\n");
                    }
                }
                /*
                 * This seemed like a handy alternative, but it turned out to be a no-go, at least for large states:
                 *
                 *      var sState = computer.powerOff(true);
                 *      if (sState) {
                 *          sState = "data:text/json;charset=utf-8," + encodeURIComponent(sState);
                 *          globals.window.open(sState);
                 *      }
                 *
                 * Perhaps if I embedded the data in a link on the current page instead; eg:
                 *
                 *      $('<a href="' + sState + '" download="state.json">Download</a>').appendTo('#container');
                 */
            };
            return true;

        default:
            break;
        }
        return false;
    }

    /**
     * resetUserID()
     */
    resetUserID()
    {
        WebLib.setLocalStorageItem(ComputerX80.STATE_USERID, "");
        this.sUserID = null;
    }

    /**
     * queryUserID(fPrompt)
     *
     * @param {boolean} [fPrompt]
     * @returns {string|null|undefined}
     */
    queryUserID(fPrompt)
    {
        let sUserID = this.sUserID;
        if (!sUserID) {
            sUserID = WebLib.getLocalStorageItem(ComputerX80.STATE_USERID);
            if (sUserID !== undefined) {
                if (!sUserID && fPrompt) {
                    /*
                     * NOTE: Warning the user here that "Save" operations are not currently supported by pcjs.org is
                     * merely a precaution, because ordinarily, setBinding() should have already determined if we are
                     * running from pcjs.org and disabled any "Save" button.
                     */
                    sUserID = Component.promptUser("Saving machine states on the pcjs.org server is currently unsupported.\n\nIf you're running your own server, enter your user ID below.");
                    if (sUserID) {
                        sUserID = this.verifyUserID(sUserID);
                        if (!sUserID) this.printf(MESSAGE.NOTICE, "The user ID is invalid.\n");
                    }
                }
            } else if (fPrompt) {
                this.printf(MESSAGE.NOTICE, "Browser local storage is not available\n");
            }
        }
        return sUserID;
    }

    /**
     * verifyUserID(sUserID)
     *
     * @this {ComputerX80}
     * @param {string} sUserID
     * @returns {string} validated user ID, or null if error
     */
    verifyUserID(sUserID)
    {
        this.sUserID = null;
        let fMessages = DEBUG && this.messageEnabled();
        if (fMessages) this.printf("verifyUserID(%s)\n", sUserID);
        let sRequest = WebLib.getHostOrigin() + UserAPI.ENDPOINT + '?' + UserAPI.QUERY.REQ + '=' + UserAPI.REQ.VERIFY + '&' + UserAPI.QUERY.USER + '=' + sUserID;
        let response = WebLib.getResource(sRequest);
        let nErrorCode = response[0];
        let sResponse = response[1];
        if (!nErrorCode && sResponse) {
            try {
                response = eval("(" + sResponse + ")");
                if (response.code && response.code == UserAPI.CODE.OK) {
                    WebLib.setLocalStorageItem(ComputerX80.STATE_USERID, response.data);
                    if (fMessages) this.printf("%s updated: %s\n", ComputerX80.STATE_USERID, response.data);
                    this.sUserID = response.data;
                } else {
                    if (fMessages) this.printf("%s: %s\n", response.code, response.data);
                }
            } catch (e) {
                Component.error(e.message + " (" + sResponse + ")");
            }
        } else {
            if (fMessages) this.printf("invalid response (error %d)\n", nErrorCode);
        }
        return this.sUserID;
    }

    /**
     * getServerStatePath()
     *
     * @this {ComputerX80}
     * @returns {string|null} sStatePath (null if no localStorage or no USERID stored in localStorage)
     */
    getServerStatePath()
    {
        let sStatePath = null;
        if (this.sUserID) {
            this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "%s for load: %s\n", ComputerX80.STATE_USERID, this.sUserID);
            sStatePath = WebLib.getHostOrigin() + UserAPI.ENDPOINT + '?' + UserAPI.QUERY.REQ + '=' + UserAPI.REQ.LOAD + '&' + UserAPI.QUERY.USER + '=' + this.sUserID + '&' + UserAPI.QUERY.STATE + '=' + State.getKey(this, APPVERSION);
        } else {
            this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "%s unavailable\n", ComputerX80.STATE_USERID);
        }
        return sStatePath;
    }

    /**
     * saveServerState(sUserID, sState)
     *
     * @param {string} sUserID
     * @param {string|null} sState
     */
    saveServerState(sUserID, sState)
    {
        /*
         * We must pass fSync == true, because (as I understand it) browsers will blow off any async
         * requests when a page is being closed.  Since our request is synchronous, storeServerState()
         * should also return a result, but there's not much we can do with it, since browsers ALSO
         * tend to blow off alerts() and the like when closing down.
         */
        if (sState) {
            this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "size of server state: %d bytes\n", sState.length);
            let response = this.storeServerState(sUserID, sState, true);
            if (response && response[UserAPI.RES.CODE] == UserAPI.CODE.OK) {
                this.printf(MESSAGE.NOTICE, "Machine state saved to server\n");
            } else if (sState) {
                let sError = (response && response[UserAPI.RES.DATA]) || UserAPI.FAIL.BADSTORE;
                if (response[UserAPI.RES.CODE] == UserAPI.CODE.FAIL) {
                    sError = "Error: " + sError;
                } else {
                    sError = "Error " + response[UserAPI.RES.CODE] + ": " + sError;
                }
                this.printf(MESSAGE.NOTICE, "%s\n", sError);
                this.resetUserID();
            }
        } else {
            this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "no state to store\n");
        }
    }

    /**
     * storeServerState(sUserID, sState, fSync)
     *
     * @this {ComputerX80}
     * @param {string} sUserID
     * @param {string} sState
     * @param {boolean} [fSync] is true if we're powering down and should perform a synchronous request (default is async)
     * @returns {*} server response if fSync is true and a response was received; otherwise null
     */
    storeServerState(sUserID, sState, fSync)
    {
        this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "%s for store: %s\n", ComputerX80.STATE_USERID, sUserID);
        /*
         * TODO: Determine whether or not any browsers cancel our request if we're called during a browser "shutdown" event,
         * and whether or not it matters if we do an async request (currently, we're not, to try to ensure the request goes through).
         */
        let dataPost = {};
        dataPost[UserAPI.QUERY.REQ] = UserAPI.REQ.STORE;
        dataPost[UserAPI.QUERY.USER] = sUserID;
        dataPost[UserAPI.QUERY.STATE] = State.getKey(this, APPVERSION);
        dataPost[UserAPI.QUERY.DATA] = sState;
        let sRequest = WebLib.getHostOrigin() + UserAPI.ENDPOINT;
        if (!fSync) {
            WebLib.getResource(sRequest, dataPost, true);
        } else {
            let response = WebLib.getResource(sRequest, dataPost);
            let sResponse = response[0];
            if (response[1]) {
                if (sResponse) {
                    let i = sResponse.indexOf('\n');
                    if (i > 0) sResponse = sResponse.substr(0, i);
                    if (!sResponse.indexOf("Error: ")) sResponse = sResponse.substr(7);
                }
                sResponse = '{"' + UserAPI.RES.CODE + '":' + response[1] + ',"' + UserAPI.RES.DATA + '":"' + sResponse + '"}';
            }
            this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "%s\n", sResponse);
            return JSON.parse(sResponse);
        }
        return null;
    }

    /**
     * onPower()
     *
     * This handles UI requests to toggle the computer's power (eg, see the "power" button binding).
     *
     * @this {ComputerX80}
     */
    onPower()
    {
        if (!this.nPowerChange) {
            if (!this.flags.powered) {
                this.wait(this.powerOn);
            } else {
                this.powerOff(false, true);
            }
        }
    }

    /**
     * onReset()
     *
     * This handles UI requests to reset the computer's state (eg, see the "reset" button binding).
     *
     * @this {ComputerX80}
     */
    onReset()
    {
        /*
         * I'm going to start with the presumption that it makes little sense for an "unpowered" computer to be "reset";
         * ditto if the power state is currently being changed.
         */
        if (!this.flags.powered || this.nPowerChange) return;

        /*
         * If this is a "resumable" machine (and it's not using a predefined state), then we overload the reset
         * operation to offer an explicit "save or discard" option first.  This is currently the only UI we offer to
         * discard a machine's state, including any disk changes.  The traditional "reset" operation is still available
         * for non-resumable machines.
         *
         * TODO: Break this behavior out into a separate "discard" operation, in case the designer of the machine really
         * wants to clutter the UI with confusing options. ;-)
         */
        if (this.resume && !this.sResumePath) {
            /*
             * I used to bypass the prompt if this.resume == ComputerX80.RESUME_AUTO, setting fSave to true automatically,
             * but that gives the user no means of resetting a resumable machine that contains errors in its resume state.
             */
            let fSave = (/* this.resume == ComputerX80.RESUME_AUTO || */ Component.confirmUser("Click OK to save changes to this " + APPNAME + " machine.\n\nWARNING: If you CANCEL, all disk changes will be discarded."));
            this.powerOff(fSave, true);
            /*
             * Forcing the page to reload is an expedient option, but ugly. It's preferable to call powerOn()
             * and rely on all the components to reset themselves to their default state.  The components with
             * the greatest burden here are FDC and HDC, which must rely on the fReload flag to determine whether
             * or not to unload/reload all their original auto-mounted disk images.
             *
             * However, if we started with a predefined state (ie, sStatePath is set), we take this shortcut, because
             * we don't (yet) have code in place to gracefully reload the initial state (requires calling getResource()
             * again); alternatively, we could avoid throwing that state away, but it seems better to save the memory.
             *
             * TODO: Make this more graceful, so that we can stop using the reloadPage() sledgehammer.
             */
            if (!fSave && this.sStatePath) {
                WebLib.reloadPage();
                return;
            }
            if (!fSave) this.fReload = true;
            this.powerOn(ComputerX80.RESUME_NONE);
            this.fReload = false;
        } else {
            this.reset();
            if (this.cpu) this.cpu.autoStart();
        }
    }

    /**
     * getMachineComponent(sType, componentPrev)
     *
     * @this {ComputerX80}
     * @param {string} sType
     * @param {Component|boolean|null} [componentPrev] of previously returned component, if any
     * @returns {Component|null}
     */
    getMachineComponent(sType, componentPrev = null)
    {
        let componentLast = componentPrev;
        let aComponents = Component.getComponents(this.id);
        for (let iComponent = 0; iComponent < aComponents.length; iComponent++) {
            let component = aComponents[iComponent];
            if (componentPrev) {
                if (componentPrev == component) componentPrev = null;
                continue;
            }
            if (component.type == sType) return component;
        }
        if (!componentLast && DEBUG && componentPrev !== false) {
            this.printf(MESSAGE.WARNING, "Machine component type \"%s\" not found\n", sType);
        }
        return null;
    }

    /**
     * updateFocus(fScroll)
     *
     * NOTE: When soft keyboard buttons call us to return focus to the machine (and away from the button),
     * the browser's default behavior is to scroll the element into view, which can be annoying, especially on iOS,
     * where the display is more constrained, so we no longer do it by default (fScroll must be true).
     *
     * @this {ComputerX80}
     * @param {boolean} [fScroll] (true if you really want the control scrolled into view)
     */
    updateFocus(fScroll)
    {
        if (this.aVideo.length) {
            /*
             * This seems to be recommended work-around to prevent the browser from scrolling the focused element
             * into view.  The CPU is not a visual component, so when the CPU wants to set focus, the primary intent
             * is to ensure that keyboard input is fielded properly.
             */
            let x = 0, y = 0;
            if (!fScroll && globals.browser) {
                x = globals.window.scrollX;
                y = globals.window.scrollY;
            }

            /*
             * TODO: We need a mechanism to determine the "active" display, instead of hard-coding this to aVideo[0].
             */
            this.aVideo[0].setFocus();

            if (!fScroll && globals.window.scrollTo) {
                globals.window.scrollTo(x, y);
            }
        }
    }

    /**
     * updateStatus(fForce)
     *
     * If any DOM controls were bound to the CPU, then we need to call its updateStatus() handler; if there are no
     * such bindings, then cpu.updateStatus() does nothing.
     *
     * Similarly, if there's a Panel, then we need to call its updateStatus() handler, in case it created its own canvas
     * and implemented its own register display (eg, dumpRegisters()); if not, then panel.updateStatus() also does nothing.
     *
     * In practice, there will *either* be a Panel with a custom canvas *or* a set of DOM controls bound to the CPU *or*
     * neither.  In theory, there could be BOTH, but that would be unusual.
     *
     * TODO: Consider alternate approaches to these largely register-oriented display updates.  Ordinarily, we like to
     * separate logic from presentation, and currently the CPUState contains both, since it's the component that intimately
     * knows the names, number, sizes, etc, of all the active registers.  The Panel component is the logical candidate,
     * but Panel is an optional component; generally, only machines that include Debugger also include Panel.
     *
     * @this {ComputerX80}
     * @param {boolean} [fForce] (true will display registers even if the CPU is running and "live" registers are not enabled)
      */
    updateStatus(fForce)
    {
        /*
         * fForce is generally set to true whenever the CPU is transitioning to/from a running state, in which case
         * cpu.updateStatus() will definitely want to hide/show register contents; however, at other times, when the
         * CPU is running, constantly updating the DOM controls too frequently can adversely impact overall performance.
         *
         * So fForce serves as a hint to help cpu.updateStatus() make a more informed decision.  panel.updateStatus()
         * currently doesn't care, on the theory that canvas updates should be significantly faster than DOM updates,
         * but we still pass fForce on.
         */
        if (this.cpu) this.cpu.updateStatus(fForce);
        if (this.panel) this.panel.updateStatus(fForce);
    }

    /**
     * updateVideo(fForced)
     *
     * Any high-frequency updates should be performed here (avoid updating DOM elements).
     *
     * @this {ComputerX80}
     * @param {boolean} [fForced]
     */
    updateVideo(fForced)
    {
        for (let i = 0; i < this.aVideo.length; i++) {
            this.aVideo[i].updateScreen(fForced);
        }
    }

    /**
     * ComputerX80.init()
     *
     * For every machine represented by an HTML element of class "pcX80-machine", this function
     * locates the HTML element of class "computer", extracting the JSON-encoded parameters for the
     * Computer constructor from the element's "data-value" attribute, invoking the constructor to
     * create a Computer component, and then binding any associated HTML controls to the new component.
     */
    static init()
    {
        let aeMachines = Component.getElementsByClass(APPCLASS, "machine");

        for (let iMachine = 0; iMachine < aeMachines.length; iMachine++) {

            let eMachine = aeMachines[iMachine];
            let parmsMachine = Component.getComponentParms(eMachine);

            let aeComputers = Component.getElementsByClass(APPCLASS, "computer", eMachine);

            for (let iComputer = 0; iComputer < aeComputers.length; iComputer++) {

                let eComputer = aeComputers[iComputer];
                let parmsComputer = Component.getComponentParms(eComputer);

                /*
                 * We set fSuspended in the Computer constructor because we want to "power up" the
                 * computer ourselves, after any/all bindings are in place.
                 */
                let computer = new ComputerX80(parmsComputer, parmsMachine, true);

                computer.printf(MESSAGE.DEBUG + MESSAGE.LOG, "onInit(%b)\n", computer.flags.powered);

                /*
                 * Bind any "power", "reset" and "save" buttons.  An "erase" button was also considered,
                 * but "reset" now provides a way to force the machine to start from scratch again, so "erase"
                 * may be redundant now.
                 */
                Component.bindComponentControls(computer, eComputer, APPCLASS);

                /*
                 * Power on the computer, giving every component the opportunity to reset or restore itself.
                 */
                if (computer.fAutoPower) computer.wait(computer.powerOn);
            }
        }
    }

    /**
     * ComputerX80.show()
     *
     * When exit() is using an "onbeforeunload" handler, this "onpageshow" handler allows us to repower everything,
     * without either resetting or restoring.  We call powerOn() with a special resume value (RESUME_REPOWER) if the
     * computer is already marked as "ready", meaning the browser didn't change anything.  This "repower" process
     * should be very quick, essentially just marking all components as powered again (so that, for example, the Video
     * component will start drawing again) and firing the CPU up again.
     */
    static show()
    {
        let aeComputers = Component.getElementsByClass(APPCLASS, "computer");
        for (let iComputer = 0; iComputer < aeComputers.length; iComputer++) {
            let eComputer = aeComputers[iComputer];
            let parmsComputer = Component.getComponentParms(eComputer);
            let computer = /** @type {ComputerX80} */ (Component.getComponentByType("Computer", parmsComputer['id']));
            if (computer) {
                computer.flags.unloading = false;
                computer.printf(MESSAGE.DEBUG + MESSAGE.LOG, "show(%b,%b)\n", computer.fInitialized, computer.flags.powered);
                /*
                 * Note that the FIRST 'pageshow' event, and therefore the first show() callback, occurs
                 * AFTER the the initial 'load' event, and at that point in time, fInitialized will not be set yet.
                 * So, practically speaking, the first show() callback isn't all that useful.
                 */
                if (computer.fInitialized && !computer.flags.powered) {
                    /**
                     * Repower the computer, notifying every component to continue running as-is.
                     */
                    computer.powerOn(ComputerX80.RESUME_REPOWER);
                }
            }
        }
    }

    /**
     * ComputerX80.exit()
     *
     * The Computer is currently the only component that uses an "exit" handler, which web.onExit() defines as
     * either an "unload" or "onbeforeunload" handler.  This gives us the opportunity to save the machine state,
     * using our powerOff() function, before the page goes away.
     *
     * It's worth noting that "onbeforeunload" offers one nice feature when used instead of "onload": the entire
     * page (and therefore this entire application) is retained in its current state by the browser (well, some
     * browsers), so that if you go to a new URL, either by entering a new URL in the same window/tab, or by pressing
     * the FORWARD button, and then you press the BACK button, the page is immediately restored to its previous state.
     *
     * In fact, that's how some browsers operate whether you have an "onbeforeunload" handler or not; in other words,
     * an "onbeforeunload" handler doesn't change the page retention behavior of the browser.  By contrast, the mere
     * presence of an "onunload" handler generally causes a browser to throw the page away once the handler returns.
     *
     * However, in order to safely use "onbeforeunload", we must add yet another handler ("onpageshow") to repower
     * everything, without either resetting or restoring.  Hence, the ComputerX80.show() function, which calls powerOn()
     * with a special resume value (RESUME_REPOWER) if the computer is already marked as "ready", meaning the browser
     * didn't change anything.  This "repower" process should be very quick, essentially just marking all components as
     * powered again (so that, for example, the Video component will start drawing again) and firing the CPU up again.
     *
     * Reportedly, some browsers (eg, Opera) don't support "onbeforeunload", in which case Component will have to use
     * "unload" instead.  But even when the page must be rebuilt from scratch, the combination of browser cache and
     * localStorage means the simulation should be restored and become operational almost immediately.
     */
    static exit()
    {
        let aeComputers = Component.getElementsByClass(APPCLASS, "computer");
        for (let iComputer = 0; iComputer < aeComputers.length; iComputer++) {
            let eComputer = aeComputers[iComputer];
            let parmsComputer = Component.getComponentParms(eComputer);
            let computer = /** @type {ComputerX80} */ (Component.getComponentByType("Computer", parmsComputer['id']));
            if (computer) {
                /*
                 * Added a new flag that Component functions (eg, notice()) should check before alerting the user.
                 */
                computer.flags.unloading = true;
                computer.printf(MESSAGE.DEBUG + MESSAGE.LOG, "onExit(%b)\n", computer.flags.powered);
                if (computer.flags.powered) {
                    /**
                     * Power off the computer, giving every component an opportunity to save its state,
                     * but only if 'resume' has been set AND there is no valid resume path (because if a valid resume
                     * path exists, we'll always load our state from there, and not from whatever we save here).
                     */
                    computer.powerOff(!!(computer.resume && !computer.sResumePath), true);
                }
            }
        }
    }
}

ComputerX80.STATE_FAILSAFE  = "failsafe";
ComputerX80.STATE_VALIDATE  = "validate";
ComputerX80.STATE_TIMESTAMP = "timestamp";
ComputerX80.STATE_VERSION   = "version";
ComputerX80.STATE_HOSTURL   = "url";
ComputerX80.STATE_BROWSER   = "browser";
ComputerX80.STATE_USERID    = "user";

/*
 * The following constants define all the resume options.  Negative values (eg, RESUME_REPOWER) are for
 * internal use only, and RESUME_DELETE is not documented (it provides a way of deleting ALL saved states
 * whenever a resume is declined).  As a result, the only "end-user" values are 0, 1 and 2.
 */
ComputerX80.RESUME_REPOWER  = -1;  // resume without changing any state (for internal use only)
ComputerX80.RESUME_NONE     =  0;  // default (no resume)
ComputerX80.RESUME_AUTO     =  1;  // automatically save/restore state
ComputerX80.RESUME_PROMPT   =  2;  // automatically save but conditionally restore (WARNING: if restore is declined, any state is discarded)
ComputerX80.RESUME_DELETE   =  3;  // same as RESUME_PROMPT but discards ALL machines states whenever ANY machine restore is declined (undocumented)

/*
 * Initialize every Computer on the page.
 */
WebLib.onInit(ComputerX80.init);
WebLib.onShow(ComputerX80.show);
WebLib.onExit(ComputerX80.exit);

/**
 * @copyright https://www.pcjs.org/machines/modules/v2/state.js (C) 2012-2025 Jeff Parsons
 */

/**
 * @class State
 * @unrestricted
 */
class State {
    /**
     * State(component, sVersion, sSuffix)
     *
     * State objects are used by components to save/restore their state.
     *
     * During a save operation, components add data to a State object via set(), and then return
     * the resulting data using data().
     *
     * During a restore operation, the Computer component passes the results of each data() call
     * back to the originating component.
     *
     * WARNING: Since State objects are low-level objects that have no UI requirements, they do not
     * inherit from the Component class, so you should only use class methods of Component, such as
     * Component.assert() (or Debugger methods if the Debugger is available).
     *
     * NOTE: 1.01 is the first version to provide limited save/restore support using localStorage.
     * From that point on, care must be taken to insure that any new version that's incompatible with
     * previous localStorage data be released with a version number that is at least 1 greater,
     * since we're tagging the localStorage data with the integer portion of the version string.
     *
     * @param {Component} component
     * @param {string} [sVersion] is used to append a major version number to the key
     * @param {string} [sSuffix] is used to append any additional suffixes to the key
     */
    constructor(component, sVersion, sSuffix)
    {
        this.id = component.id;
        this.dbg = component.dbg;
        this.json = "";
        this.state = {};
        this.fLoaded = this.fParsed = false;
        this.key = State.getKey(component, sVersion, sSuffix);
        this.unload(component.parms);
    }

    /**
     * set(id, data)
     *
     * @this {State}
     * @param {number|string} id
     * @param {Object|string} data
     */
    set(id, data)
    {
        try {
            this.state[id] = data;
        } catch(e) {
            Component.printf(MESSAGE.ERROR, e.message);
        }
    }

    /**
     * get(id)
     *
     * @this {State}
     * @param {number|string} id
     * @returns {Object|string|null}
     */
    get(id)
    {
        return this.state[id] || null;
    }

    /**
     * data()
     *
     * @this {State}
     * @returns {Object}
     */
    data()
    {
        return this.state;
    }

    /**
     * load(json)
     *
     * WARNING: Make sure you follow this call with either a call to parse() or unload(),
     * because any stringified data that we've loaded isn't usable until it's been parsed.
     *
     * @this {State}
     * @param {string|null} [json]
     * @returns {boolean} true if state exists in localStorage, false if not
     */
    load(json)
    {
        if (json) {
            this.json = json;
            this.fLoaded = true;
            this.fParsed = false;
            return true;
        }
        if (this.fLoaded) {
            /*
             * This is assumed to be a redundant load().
             */
            return true;
        }
        if (WebLib.hasLocalStorage()) {
            let s = WebLib.getLocalStorageItem(this.key);
            if (s) {
                this.json = s;
                this.fLoaded = true;
                Component.printf(MESSAGE.DEBUG, "localStorage(%s): %d bytes loaded\n", this.key, s.length);
                return true;
            }
        }
        return false;
    }

    /**
     * parse()
     *
     * This completes the load() operation, by parsing what was loaded, on the assumption there
     * might be some benefit to deferring parsing until we've given the user a chance to confirm.
     * Otherwise, load() could have just as easily done this, too.
     *
     * @this {State}
     * @returns {boolean} true if successful, false if error
     */
    parse()
    {
        let fSuccess = true;
        if (!this.fParsed) {
            try {
                this.state = JSON.parse(this.json);
                this.fParsed = true;
            } catch (e) {
                Component.error(e.message || e);
                fSuccess = false;
            }
        }
        return fSuccess;
    }

    /**
     * store()
     *
     * @this {State}
     * @returns {boolean} true if successful, false if error
     */
    store()
    {
        let fSuccess = true;
        if (WebLib.hasLocalStorage()) {
            let s = JSON.stringify(this.state);
            if (WebLib.setLocalStorageItem(this.key, s)) {
                Component.printf(MESSAGE.DEBUG, "localStorage(%s): %d bytes stored\n", this.key, s.length);
            } else {
                /*
                 * WARNING: Because browsers tend to disable all alerts() during an "unload" operation,
                 * it's unlikely anyone will ever see the "quota" errors that occur at this point.  Need to
                 * think of some way to notify the user that there's a problem, and offer a way of cleaning
                 * up old states.
                 */
                Component.printf(MESSAGE.ERROR, "Unable to store %d bytes in browser local storage\n", s.length);
                fSuccess = false;
            }
        }
        return fSuccess;
    }

    /**
     * toString()
     *
     * @this {State}
     * @returns {string} JSON-encoded state
     */
    toString()
    {
        return this.state? JSON.stringify(this.state) : this.json;
    }

    /**
     * unload(parms)
     *
     * This discards any data saved via set() or loaded via load(), creating an empty State object.
     * Note that you have to follow this call with an explicit call to store() if you want to remove
     * the state from localStorage as well.
     *
     * @this {State}
     * @param {Object} [parms]
     */
    unload(parms)
    {
        this.json = "";
        this.state = {};
        this.fLoaded = this.fParsed = false;
        if (parms) this.set("parms", parms);
    }

    /**
     * clear(fAll)
     *
     * This unloads the current state, and then clears ALL localStorage for the current machine,
     * independent of version, to reduce the chance of orphaned states wasting part of our limited allocation.
     *
     * @this {State}
     * @param {boolean} [fAll] true to unconditionally clear ALL localStorage for the current domain
     */
    clear(fAll)
    {
        this.unload();
        let aKeys = WebLib.getLocalStorageKeys();
        for (let i = 0; i < aKeys.length; i++) {
            let sKey = aKeys[i];
            if (sKey && (fAll || sKey.substr(0, this.key.length) == this.key)) {
                WebLib.removeLocalStorageItem(sKey);
                Component.printf(MESSAGE.DEBUG, "localStorage(%s) removed\n", sKey);
                aKeys.splice(i, 1);
                i = 0;
            }
        }
    }

    /**
     * State.getKey(component, sVersion, sSuffix)
     *
     * This encapsulates the key generation code.
     *
     * @param {Component} component
     * @param {string} [sVersion] is used to append a major version number to the key
     * @param {string} [sSuffix] is used to append any additional suffixes to the key
     * @returns {string} key
     */
    static getKey(component, sVersion, sSuffix)
    {
        let key = component.id;
        if (sVersion) {
            let i = sVersion.indexOf('.');
            if (i > 0) key += ".v" + sVersion.substr(0, i);
        }
        if (sSuffix) {
            key += "." + sSuffix;
        }
        return key;
    }

    /**
     * State.compress(aSrc)
     *
     * @param {Array.<number>|null} aSrc
     * @returns {Array.<number>|null} is either the original array (aSrc), or a smaller array of "count, value" pairs (aComp)
     */
    static compress(aSrc)
    {
        if (aSrc) {
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
            if (aComp.length < aSrc.length) return aComp;
        }
        return aSrc;
    }

    /**
     * State.decompress(aComp)
     *
     * @param {Array.<number>} aComp
     * @param {number} [nLength] (expected length of decompressed data)
     * @returns {Array.<number>}
     */
    static decompress(aComp, nLength)
    {
        let iDst = 0;
        let aDst = nLength? new Array(nLength) : [];
        let iComp = 0;
        while (iComp < aComp.length - 1) {
            let c = aComp[iComp++];
            let n = aComp[iComp++];
            while (c--) aDst[iDst++] = n;
        }

        return aDst;
    }

    /**
     * State.compressEvenOdd(aSrc)
     *
     * This is a very simple variation on compress() that compresses all the EVEN elements of aSrc first,
     * followed by all the ODD elements.  This tends to work better on EGA video memory, because when odd/even
     * addressing is enabled (eg, for text modes), the DWORD values tend to alternate, which is the worst case
     * for compress(), but the best case for compressEvenOdd().
     *
     * One wrinkle we support: if the first element is uninitialized, then we assume the entire array is undefined,
     * and return an empty compressed array.  Conversely, decompressEvenOdd() will take an empty compressed array
     * and return an uninitialized array.
     *
     * @param {Array.<number>|null} aSrc
     * @returns {Array.<number>|null} is either the original array (aSrc), or a smaller array of "count, value" pairs (aComp)
     */
    static compressEvenOdd(aSrc)
    {
        if (aSrc) {
            let iComp = 0, aComp = [];
            if (aSrc[0] !== undefined) {
                for (let off = 0; off < 2; off++) {
                    let iSrc = off;
                    while (iSrc < aSrc.length) {
                        let n = aSrc[iSrc];
                        let iCompare = iSrc + 2;
                        while (iCompare < aSrc.length && aSrc[iCompare] === n) iCompare += 2;
                        aComp[iComp++] = (iCompare - iSrc) >> 1;
                        aComp[iComp++] = n;
                        iSrc = iCompare;
                    }
                }
            }
            if (aComp.length < aSrc.length) return aComp;
        }
        return aSrc;
    }

    /**
     * State.decompressEvenOdd(aComp, nLength)
     *
     * This is the counterpart to compressEvenOdd().  Note that because there's nothing in the compressed sequence
     * that differentiates a compress() sequence from a compressEvenOdd() sequence, you simply have to be consistent:
     * if you used even/odd compression, then you must use even/odd decompression.
     *
     * @param {Array.<number>} aComp
     * @param {number} nLength is expected length of decompressed data
     * @returns {Array.<number>}
     */
    static decompressEvenOdd(aComp, nLength)
    {
        let iDst = 0;
        let aDst = new Array(nLength);
        let iComp = 0;
        while (iComp < aComp.length - 1) {
            let c = aComp[iComp++];
            let n = aComp[iComp++];
            while (c--) {
                aDst[iDst] = n;
                iDst += 2;
            }
            /*
             * The output of a "count,value" pair will never exceed the end of the output array, so as soon as we reach it
             * the first time, we know it's time to switch to ODD elements, and as soon as we reach it again, we should be
             * done.
             */

            if (iDst == nLength) iDst = 1;
        }

        return aDst;
    }
}

/**
 * @copyright https://www.pcjs.org/machines/modules/v2/embed.js (C) 2012-2025 Jeff Parsons
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
 * notification events at the start of the embedding process (WebLib.enablePageEvents(false)) and
 * re-enable them at the end (WebLib.enablePageEvents(true)).
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
    WebLib.getResource(sXMLFile, null, fAsync, doneLoadXML);
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
         * The best I can do at this stage (assuming WebLib.getResource() didn't drop any error information on the floor)
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
        WebLib.getResource(sRefFile, null, fAsync, doneReadXML);
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
 * @returns {boolean} true if successful, false if error
 */
function embedMachine(sAppName, sAppClass, idMachine, sXMLFile, sXSLFile, sParms, sClass)
{
    let eMachine, eWarning, fSuccess = true;

    cAsyncMachines++;
    Component.addMachine(idMachine);

    let doneMachine = function() {

        if (!--cAsyncMachines) {
            if (fAsync) WebLib.enablePageEvents(true);
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

    if (WebLib.getURLParm('debugger') == "true" && sXMLFile.indexOf("/debugger") < 0) {
        sXMLFile = sXMLFile.replace("/machine.xml", "/debugger/machine.xml");
    }

    let displayError = function(sURL, sError) {
        if (typeof sError == "string") {
            if (sError.indexOf("<!DOCTYPE html>") >= 0) {
                let match = sError.match(/<title>(?:PCjs: |)(.*?)<\/title>/);
                if (match) sError = match[1];
            }
        }
        Component.printf(MESSAGE.ERROR, "%s\n", sError);
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
            let aeWarning = (eMachine && Component.getElementsByClass("machine-warning", "", eMachine));
            eWarning = (aeWarning && aeWarning[0]) || eMachine;
        }
        if (eWarning) eWarning.innerHTML = StrLib.escapeHTML(sMessage);
    };

    try {
        eMachine = document.getElementById(idMachine);
        if (eMachine) {

            /*
             * If we have a 'css' resource, add it to the page first.
             */
            let css;
            let resources = globals.window['resources'];
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
 * @returns {boolean} true if successful, false if error
 */
function embedC1P(idMachine, sXMLFile, sXSLFile, sParms, sClass)
{
    if (fAsync) WebLib.enablePageEvents(false);
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
 * @returns {boolean} true if successful, false if error
 */
function embedPCx86(idMachine, sXMLFile, sXSLFile, sParms, sClass)
{
    if (fAsync) WebLib.enablePageEvents(false);
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
 * @returns {boolean} true if successful, false if error
 */
function embedPCx80(idMachine, sXMLFile, sXSLFile, sParms, sClass)
{
    if (fAsync) WebLib.enablePageEvents(false);
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
 * @returns {boolean} true if successful, false if error
 */
function embedPDP10(idMachine, sXMLFile, sXSLFile, sParms, sClass)
{
    if (fAsync) WebLib.enablePageEvents(false);
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
 * @returns {boolean} true if successful, false if error
 */
function embedPDP11(idMachine, sXMLFile, sXSLFile, sParms, sClass)
{
    if (fAsync) WebLib.enablePageEvents(false);
    return embedMachine("PDPjs", "dec/pdp11", idMachine, sXMLFile, sXSLFile, sParms, sClass);
}

/**
 * findMachineComponent(idMachine, sType)
 *
 * @param {string} idMachine
 * @param {string} sType
 * @returns {Component|null}
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
 * @returns {boolean}
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

globals.window['embedC1P']    = embedC1P;
globals.window['embedPC']     = embedPCx86;     // WARNING: embedPC() deprecated as of v1.23.0
globals.window['embedPCx86']  = embedPCx86;
globals.window['embedPCx80']  = embedPCx80;
globals.window['embedPDP10']  = embedPDP10;
globals.window['embedPDP11']  = embedPDP11;
globals.window['commandMachine'] = commandMachine;

globals.window['enableEvents'] = WebLib.enablePageEvents;
globals.window['sendEvent']    = WebLib.doPageEvent;

