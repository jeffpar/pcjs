/**
 * @copyright https://www.pcjs.org/machines/modules/v3/defines.js (C) 2012-2026 Jeff Parsons
 */

/**
 * @class Defines
 */
class Defines {
    /**
     * Defines()
     *
     * We preemptively define idDevice here; it's actually initialized by the Device constructor,
     * but StdIO needs to inspect it.
     *
     * @this {Defines}
     */
    constructor()
    {
        this.idDevice = "";
    }

    /**
     * setDebug(debug)
     *
     * @this {Defines}
     * @param {boolean} debug
     */
    static setDebug(debug)
    {
        Defines.DEBUG = debug;
    }
}

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
const VERSION = "3.00";

/**
 * REPOSITORY is the primary location (eg, URL) where all PCjs-related resources can be found; it is not
 * intended to refer to any specific type of container (such as a Git repository).
 *
 * @define {string}
 */
const REPOSITORY = "pcjs.org";

const COPYRIGHT = "Copyright © 2012-2026 Jeff Parsons <Jeff@pcjs.org>";

/**
 * The following globals CANNOT be overridden.
 *
 * LITTLE_ENDIAN is true if the browser's ArrayBuffer storage is little-endian.  If LITTLE_ENDIAN matches
 * the endian-ness of a machine being emulated, then that machine can use ArrayBuffers for Memory buffers as-is.
 */
const LITTLE_ENDIAN = function() {
    let buffer = new ArrayBuffer(2);
    new DataView(buffer).setUint16(0, 256, true);
    return new Uint16Array(buffer)[0] === 256;
}();

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

Defines.COMMAND         = COMMAND;
Defines.COMPILED        = COMPILED;
Defines.COPYRIGHT       = COPYRIGHT;
Defines.DEBUG           = DEBUG;
Defines.FACTORY         = FACTORY;
Defines.LITTLE_ENDIAN   = LITTLE_ENDIAN;
Defines.MAXDEBUG        = MAXDEBUG;
Defines.REPOSITORY      = REPOSITORY;
Defines.RS232           = RS232;
Defines.VERSION         = VERSION;

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

Defines.globals = globals;
Defines.process = globals.process;

/**
 * Machines is a global object whose properties are machine IDs and whose values are arrays of Devices.
 *
 * @type {Object}
 */
Defines.Machines = globals.pcjs['machines'];

/**
 * Components is maintained for backward-compatibility with older PCjs machines, to facilitate machine connections.
 *
 * @type {Array}
 */
Defines.Components = globals.pcjs['components'];

Defines.CLASSES = {};
Defines.CLASSES["Defines"] = Defines;


/**
 * @copyright https://www.pcjs.org/machines/modules/v3/message.js (C) 2012-2026 Jeff Parsons
 */

/**
 * List of standard message groups.  The messages properties defines the set of active message
 * groups, and their names are defined by MESSAGE_NAMES.  See the Device class for more message
 * group definitions.
 *
 * NOTE: To support more than 32 message groups, be sure to use "+", not "|", when concatenating.
 */
const MESSAGE = {
    ALL:        0xffffffffffff,
    NONE:       0x000000000000,
    DEFAULT:    0x000000000000,
    ADDR:       0x000000000001,     // this is a special bit (bit 0) used to append address info to messages
    BUS:        0x000000000002,
    FAULT:      0x000000000004,
    MEMORY:     0x000000000008,
    PORTS:      0x000000000010,
    CHIPS:      0x000000000020,
    KBD:        0x000000000040,
    SERIAL:     0x000000000080,
    MISC:       0x000000000100,
    CPU:        0x000000000200,
    INT:        0x000000000400,
    MMU:        0x000000000800,
    TRAP:       0x000000001000,
    VIDEO:      0x000000002000,     // used with video hardware messages (see video.js)
    MONITOR:    0x000000004000,     // used with video monitor messages (see monitor.js)
    SCREEN:     0x000000008000,     // used with screen-related messages (also monitor.js)
    FILE:       0x000000010000,
    DISK:       0x000000020000,
    TIME:       0x000000040000,
    TIMER:      0x000000080000,
    EVENT:      0x000000100000,
    INPUT:      0x000000200000,
    KEY:        0x000000400000,
    MOUSE:      0x000000800000,
    TOUCH:      0x000001000000,
    CUSTOM:     0x000010000000,     // custom device messages should start here
    LOG:        0x001000000000,
    STATUS:     0x002000000000,
    NOTICE:     0x004000000000,
    INFO:       0x004000000000,     // treat this the same as NOTICE (for now)
    WARNING:    0x008000000000,
    ERROR:      0x010000000000,
    ALERTS:     0x01c000000000,
    DEBUG:      0x020000000000,
    PROGRESS:   0x040000000000,
    SCRIPT:     0x080000000000,
    TYPES:      0x0ff000000000,
    HALT:       0x400000000000,
    BUFFER:     0x800000000000
};

/**
 * NOTE: The first name is automatically omitted from global "on" and "off" operations.
 */
MESSAGE.NAMES = {
    "all":      MESSAGE.ALL,
    "addr":     MESSAGE.ADDR,
    "bus":      MESSAGE.BUS,
    "fault":    MESSAGE.FAULT,
    "memory":   MESSAGE.MEMORY,
    "ports":    MESSAGE.PORTS,
    "chips":    MESSAGE.CHIPS,
    "kbd":      MESSAGE.KBD,
    "serial":   MESSAGE.SERIAL,
    "misc":     MESSAGE.MISC,
    "cpu":      MESSAGE.CPU,
    "mmu":      MESSAGE.MMU,
    "int":      MESSAGE.INT,
    "trap":     MESSAGE.TRAP,
    "video":    MESSAGE.VIDEO,
    "monitor":  MESSAGE.MONITOR,
    "screen":   MESSAGE.SCREEN,
    "disk":     MESSAGE.DISK,
    "file":     MESSAGE.FILE,
    "time":     MESSAGE.TIME,
    "timer":    MESSAGE.TIMER,
    "event":    MESSAGE.EVENT,
    "input":    MESSAGE.INPUT,
    "key":      MESSAGE.KEY,
    "mouse":    MESSAGE.MOUSE,
    "touch":    MESSAGE.TOUCH,
    "info":     MESSAGE.INFO,
    "warn":     MESSAGE.WARNING,
    "error":    MESSAGE.ERROR,
    "halt":     MESSAGE.HALT,
    "buffer":   MESSAGE.BUFFER
};


/**
 * @copyright https://www.pcjs.org/machines/modules/v2/format.js (C) 2012-2026 Jeff Parsons
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
 * @copyright https://www.pcjs.org/machines/modules/v3/stdlib.js (C) 2012-2026 Jeff Parsons
 */

/**
 * @class StdLib
 * @unrestricted
 */
class StdLib extends Defines {
    /**
     * Strangely, the Closure Compiler automatically knows the type when it's defined outside the class; eg:
     *
     *      StdLib.TWO_POW32 = Math.pow(2, 32);
     *
     * but when it's defined as a class constant, it's considered untyped (ie, "*") unless we explicitly type it.
     *
     * @type {number}
     */
    static TWO_POW32 = Math.pow(2, 32);

    /**
     * StdLib()
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
     * This file is called "stdlib.js" since the C runtime library file "stdlib.h" has a few similar
     * functions (eg, atoi()).  However, the similarity is very tenuous; at the end of the day, this
     * is just library of utility functions.
     *
     * @this {StdLib}
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
     * @this {StdLib}
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
     * @this {StdLib}
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
     * @this {StdLib}
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
     * @this {StdLib}
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
     * @this {StdLib}
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
     * @this {StdLib}
     * @param {number} num
     * @param {number} bits
     * @returns {number} (num & ~bits)
     */
    clearBits(num, bits)
    {
        let shift = StdLib.TWO_POW32;
        let numHi = (num / shift)|0;
        let bitsHi = (bits / shift)|0;
        return (num & ~bits) + (numHi & ~bitsHi) * shift;
    }

    /**
     * setBits(num, bits)
     *
     * Function for setting bits in numbers with more than 32 bits.
     *
     * @this {StdLib}
     * @param {number} num
     * @param {number} bits
     * @returns {number} (num | bits)
     */
    setBits(num, bits)
    {
        let shift = StdLib.TWO_POW32;
        let numHi = (num / shift)|0;
        let bitsHi = (bits / shift)|0;
        return (num | bits) + (numHi | bitsHi) * shift;
    }

    /**
     * testBits(num, bits)
     *
     * Function for testing bits in numbers with more than 32 bits.
     *
     * @this {StdLib}
     * @param {number} num
     * @param {number} bits
     * @returns {boolean} (true IFF num & bits == bits)
     */
    testBits(num, bits)
    {
        let shift = StdLib.TWO_POW32;
        let numHi = (num / shift)|0;
        let bitsHi = (bits / shift)|0;
        return ((num & bits) == (bits|0) && (numHi & bitsHi) == bitsHi);
    }

    /**
     * compress(aSrc)
     *
     * Compresses an array of numbers.
     *
     * @this {StdLib}
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
        /**
         * If compression didn't help, return the source array, but make sure it's a plain Array, not a typed array
         * (eg, Uint8Array), because typed arrays are not serialized as arrays by JSON.stringify().
         */
        if (aComp.length >= aSrc.length) return Array.isArray(aSrc)? aSrc : Array.from(aSrc);
        return aComp;
    }

    /**
     * decompress(aComp, length)
     *
     * Decompresses an array of numbers.
     *
     * @this {StdLib}
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

StdLib.CLASSES["StdLib"] = StdLib;

/**
 * @copyright https://www.pcjs.org/machines/modules/v3/stdio.js (C) 2012-2026 Jeff Parsons
 */

/**
 * @class StdIO
 */
class StdIO extends StdLib {
    /**
     * StdIO()
     *
     * Summary of functions:
     *
     *      flush()
     *      getBaseName()
     *      print()
     *      printf()
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
        this.format = new Format();
        this.addFormatType = this.format.addFormatType.bind(this.format);
        this.sprintf = this.format.sprintf.bind(this.format);
        this.isDate = Format.isDate;
        this.parseDate = Format.parseDate;
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
     * print(s, fBuffer)
     *
     * @this {StdIO}
     * @param {string} s
     * @param {boolean} [fBuffer] (true to always buffer; otherwise, only buffer the last partial line)
     * @returns {number}
     */
    print(s, fBuffer)
    {
        let length = s.length;
        let eol = s.lastIndexOf('\n');
        if (!fBuffer) {
            if (this.idDevice == "node") {
                StdIO.process.stdout.write(s);
                s = "";
            } else {
                if (eol >= 0) {
                    console.log(StdIO.PrintBuffer + s.slice(0, eol));
                    StdIO.PrintBuffer = "";
                    s = s.slice(eol + 1);
                }
                StdIO.PrintTime = null;
            }
        } else {
            if (eol >= 0) {
                let now = Date.now();
                if (!StdIO.PrintTime) StdIO.PrintTime = now;
                s = ((now - StdIO.PrintTime) / 1000).toFixed(3) + ": " + s;
                length = s.length;
            }
        }
        StdIO.PrintBuffer += s;
        return length;
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
     * toHex(n)
     *
     * This is a helper function mainly intended for use in a debugging console, allowing you to display numbers
     * as hex by evaluating the expression "this.toHex(n)".
     *
     * With a C runtime, you might use "itoa(n, buffer, 16)", which would be in "stdlib" instead of "stdio", and
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

StdIO.CLASSES["StdIO"] = StdIO;

/**
 * @copyright https://www.pcjs.org/machines/modules/v3/webio.js (C) 2012-2026 Jeff Parsons
 */

/** @typedef {{ name: string, path: string }} */
let Media;

/** @typedef {{ class: (string|undefined), bindings: (Object|undefined), version: (number|undefined), overrides: (Array.<string>|undefined) }} */
let Config;

/**
 * @class WebIO
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
     * addBinding(binding, element, onEvent)
     *
     * @this {WebIO}
     * @param {string} binding
     * @param {Element} element
     * @param {function(Event, (boolean|undefined))} [onEvent]
     */
    addBinding(binding, element, onEvent)
    {
        let webIO = this;

        this.bindings[binding] = element;

        switch(binding) {

        case WebIO.BINDING.CLEAR:
            element.onclick = () => this.clear();
            break;

        case WebIO.BINDING.PRINT:
            this.disableAuto(element);
            /**
             * An onKeyDown handler has been added to this element to intercept special (non-printable) keys,
             * such as UP and DOWN arrow keys, which are used to implement a simple command history/recall feature.
             */
            element.addEventListener(
                'keydown',
                function onKeyDown(event) {
                    webIO.onCommandEvent(event, true, onEvent);
                }
            );
            /**
             * One purpose of the onKeyPress handler for this element is to stop event propagation, so that if
             * the element has been explicitly given focus, any key presses won't be picked up by the Input device
             * (which, as that device's constructor explains, is monitoring key presses for the entire document).
             *
             * The other purpose is to support the entry of commands and pass them on to parseCommands().
             */
            element.addEventListener(
                'keypress',
                function onKeyPress(event) {
                    webIO.onCommandEvent(event, undefined, onEvent);
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
            this.printf("%s\n", s);
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
     * downloadFile(sData, sFileName, sType)
     *
     * @this {WebIO}
     * @param {string} sData
     * @param {string} sFileName
     * @param {string} [sType]
     * @returns {boolean} true if download initiated, false if not
     */
    downloadFile(sData, sFileName, sType = "application/octet-stream")
    {
        if (window && window.document && typeof Blob == 'function' && typeof URL != 'undefined' && URL.createObjectURL) {
            let link = window.document.createElement('a');
            if (typeof link.download == 'string') {
                let sURL = URL.createObjectURL(new Blob([sData], {type: sType}));
                link.href = sURL;
                link.download = sFileName;
                window.document.body.appendChild(link);
                link.click();
                window.document.body.removeChild(link);
                setTimeout(function() { URL.revokeObjectURL(sURL); }, 1000);
                return true;
            }
        }
        return false;
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
     * @returns {string}
     */
    static getHost()
    {
        return (window? window.location.host : "localhost");
    }

    /**
     * getHostName()
     *
     * @returns {string}
     */
    static getHostName()
    {
        return (window? window.location.hostname : WebIO.getHost());
    }

    /**
     * getHostOrigin()
     *
     * @returns {string}
     */
    static getHostOrigin()
    {
        return (window? window.location.origin : WebIO.getHost());
    }

    /**
     * getHostPath()
     *
     * @returns {string|null}
     */
    static getHostPath()
    {
        return (window? window.location.pathname : null);
    }

    /**
     * getHostProtocol()
     *
     * @returns {string}
     */
    static getHostProtocol()
    {
        return (window? window.location.protocol : "file:");
    }

    /**
     * getHostURL()
     *
     * @returns {string|null}
     */
    static getHostURL()
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
            if (xmlHTTP.status == 200 || !xmlHTTP.status && sResource.length && WebIO.getHostProtocol() == "file:") {
                // if (MAXDEBUG) WebLib.printf("xmlHTTP.onreadystatechange(%s): returned %d bytes\n", url, sResource.length);
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
     * @param {string} [sParms] (optional string containing the parameter portion of a URL (ie, after the '?'))
     * @returns {Object} (containing properties for each parameter found)
     */
    static getURLParms(sParms)
    {
        let parms = WebIO.URLParms;
        if (!parms) {
            parms = {};
            if (window) {
                if (!sParms) {
                    /**
                     * Note that window.location.href returns the entire URL, whereas window.location.search
                     * returns only parameters, if any (starting with the '?', which we skip over with a slice() call).
                     */
                    sParms = window.location.search.slice(1);
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
                    this.printf("%s\n", err.message);
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
                    this.printf("%s\n", err.message);
                }
            }
        }
        return state;
    }

    /**
     * onCommandEvent(event, down, onEvent)
     *
     * @this {WebIO}
     * @param {Event} event
     * @param {boolean} [down] (true if keydown, false if keyup, undefined if keypress)
     * @param {function(Event, (boolean|undefined))} [onEvent]
     */
    onCommandEvent(event, down, onEvent)
    {
        event = event || window.event;
        let keyCode = event.which || event.keyCode;
        if (onEvent) {
            if (onEvent(event, down)) {
                event.preventDefault();
                return;
            }
        }
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
                    if (result) this.printf("%s\n", result.replace(/\n$/, ""));
                }
            }
        }
    }

    /**
     * onPageEvent(sEvent, fn)
     *
     * @this {WebIO}
     * @param {string} sEvent
     * @param {function()} fn
     */
    onPageEvent(sEvent, fn)
    {
        if (window) {
            window.addEventListener(sEvent, fn);
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
                        aTokens = Object.keys(MESSAGE.NAMES);
                    }
                    for (let i = iToken; i < aTokens.length; i++) {
                        token = aTokens[i];
                        message = MESSAGE.NAMES[token];
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
                    if (this.isMessageOn(MESSAGE.BUFFER)) {
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
            fBuffer = this.isMessageOn(MESSAGE.BUFFER);
        }
        if (!fBuffer) {
            let element = this.findBinding(WebIO.BINDING.PRINT, true);
            if (element) {
                let insert = element.selectionStart;
                let parts = s.split(/([\n\r\b])/);
                for (let i = 0; i < parts.length; i++) {
                    let s = parts[i];
                    if (!s) continue;
                    if (s == '\b' || s == '\r') {
                        while (insert > 0) {
                            let chPrev = element.value.slice(insert - 1, insert);
                            if (chPrev == '\n') break;
                            insert--;
                            if (s == '\b') break;
                        }
                    }
                    else if (s == '\n') {
                        let chInsert = "";
                        while (insert < element.value.length) {
                            chInsert = element.value[insert];
                            insert++;
                            if (chInsert == '\n') break;
                        }
                        if (chInsert != '\n') {
                            element.value += "\r\n";
                            insert = element.value.length;
                        }
                    } else {
                        /*
                         * The default behavior here is "overwrite" as opposed to "insert", thanks to the
                         * "insert + s.length" of the second slice(), so if you want a textarea to operate
                         * in "insert" mode, we'll have to add some mechanism to enable that.
                         */
                        element.value = element.value.slice(0, insert) + s + element.value.slice(insert + s.length);
                        insert += s.length;
                    }
                }
                /**
                 * Strangely, setSelectionRange() won't remain in effect unless the element also has focus.
                 */
                element.focus();
                element.setSelectionRange(insert, insert);
                /**
                 * Prevent the <textarea> from getting too large; otherwise, printing becomes slower and slower.
                 */
                if (!WebIO.DEBUG && element.value.length >= 8192) {
                    let excess = (element.value.length - 8192) + 4096;
                    element.value = element.value.slice(excess);
                }
                element.scrollTop = element.scrollHeight;
                /**
                 * Safari required this, to keep the caret at the end; Chrome and Firefox, not so much.  Go figure.
                 *
                 * However, if I did this in Safari on iPadOS WHILE the app was full-screen, Safari canceled full-screen
                 * mode.  Argh.  And if printf() was called during the full-screen mode change, setSelectionRange() could
                 * trigger the iPad's soft keyboard, even if the machine did not require it (eg, Space Invaders).
                 *
                 * So this Safari-specific hack was performed ONLY on non-iOS devices.  But now I avoid the hack entirely,
                 * because otherwise it would ruin all the code I've since added above to carefully simulate backspace (\b)
                 * and carriage return (\r) characters.
                 *
                 *      if (!this.isUserAgent("iOS")) {
                 *          element.setSelectionRange(element.value.length, element.value.length);
                 *      }
                 */
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
            if (this.testBits(messages, MESSAGE.ERROR)) {
                format = "error: " + format;
            }
            if (this.testBits(messages, MESSAGE.WARNING)) {
                format = "warning: " + format;
            }
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
                this.printf("%s\n", err.message);
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
            flush = (this.testBits(this.machine.messages, MESSAGE.BUFFER) && this.testBits(messages, MESSAGE.BUFFER));
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
    [WebIO.KEYCODE.UP]:     "Up",
    [WebIO.KEYCODE.DOWN]:   "Down",
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
 * @copyright https://www.pcjs.org/machines/modules/v3/device.js (C) 2012-2026 Jeff Parsons
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
 * @class Device
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
            let parms = WebIO.getURLParms();
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
                    this.printf("overriding %s property '%s' with %s\n", this.idDevice, prop, s);
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
     * Overridden by other devices (eg, Debugger) to receive notifications of messages, along with the messages bits.
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
            if (this.machine.messages & MESSAGE.ADDR) {
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

Device.CLASSES["Device"] = Device;

/**
 * @copyright https://www.pcjs.org/machines/modules/v3/input.js (C) 2012-2026 Jeff Parsons
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
 * @class Input
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

        this.messages = MESSAGE.INPUT;
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
            input.printf(MESSAGE.KEY + MESSAGE.EVENT, "%s.onKey%s(%d): %5.2f (%s)\n", activeElement.id || activeElement.nodeName, type, code, (Date.now() / 1000) % 60, used != undefined? (used? "used" : "unused") : "ignored");
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
                    input.printf(MESSAGE.KEY + MESSAGE.EVENT, "onBlur(%s)\n", event.target.id || event.target.nodeName);
                }
            );
            element.addEventListener(
                'focus',
                function onFocus(event) {
                    input.printf(MESSAGE.KEY + MESSAGE.EVENT, "onFocus(%s)\n", event.target.id || event.target.nodeName);
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
            this.printf(MESSAGE.KEY + MESSAGE.INPUT, "addActiveKey(keyNum=%d,autoRelease=%b)\n", keyNum, autoRelease);
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
            this.printf(MESSAGE.KEY + MESSAGE.INPUT, "removeActiveKey(keyNum=%d,duration=%dms,autoRelease=%b)\n", keyNum, msDuration, activeKey.autoRelease);
            this.aActiveKeys.splice(i, 1);
        } else {
            this.printf(MESSAGE.KEY + MESSAGE.INPUT, "removeActiveKey(keyNum=%d): up without down?\n", keyNum);
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
            this.printf("unrecognized action: %d\n", action);
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
            this.printf(MESSAGE.INPUT, 'setFocus("%s")\n', focusElement.id || focusElement.nodeName);
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
 * used by /modules/pcx86/modules/v2/keyboard.js, since it's only important that we have a set of unique
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
 * @copyright https://www.pcjs.org/machines/modules/v3/led.js (C) 2012-2026 Jeff Parsons
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
 * @class LED
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
                this.drawGridSegment(segments[i], col, row);
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
 * @copyright https://www.pcjs.org/machines/modules/v3/monitor.js (C) 2012-2026 Jeff Parsons
 */

/** @typedef {{ monitorWidth: number, monitorHeight: number }} */
let MonitorConfig;

/**
 * @class Monitor
 * @unrestricted
 * @property {MonitorConfig} config
 */
class Monitor extends Device {
    /**
     * Monitor(idMachine, idDevice, config)
     *
     * The Monitor component manages the container representing the machine's display device.  The most
     * important config properties include:
     *
     *      monitorWidth: width of the monitor canvas, in pixels
     *      monitorHeight: height of the monitor canvas, in pixels
     *      monitorColor: background color of the monitor canvas (default is black)
     *      monitorRotate: the amount of counter-clockwise monitor rotation required (eg, -90 or 270)
     *      aspectRatio (eg, 1.33)
     *
     * NOTE: I originally wanted to call this the Screen device, but alas, the browser world has co-opted that
     * name, so I had to settle for Monitor instead (I had also considered Display, but that seemed too generic).
     *
     * Monitor is probably a better choice anyway, because that allows us to clearly differentiate between the
     * "host display" (which involves the browser's page, document, window, or screen, depending on the context)
     * and the "guest display", which I now try to consistently refer to as the Monitor.
     *
     * There are still terms of art that can muddy the waters; for example, many video devices support the concept
     * of "off-screen memory", and sure, I could call that "off-monitor memory", but let's not get carried away.
     *
     * @this {Monitor}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {ROMConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        let sProp, sEvent;
        let monitor = this;

        this.touchType = this.config['touchType'];
        this.diagnostics = this.config['diagnostics'];

        this.cxMonitor = this.config['monitorWidth'] || 640;
        this.cyMonitor = this.config['monitorHeight'] || 480;

        this.monitor = this.bindings[Monitor.BINDING.MONITOR];
        if (this.monitor) {
            /**
             * Making sure the monitor had a "tabindex" attribute seemed like a nice way of ensuring we
             * had a single focusable surface that we could pass to our Input device, but that would be too
             * simple.  Safari once again bites us in the butt, just like it did when we tried to add the
             * "contenteditable" attribute to the canvas: painting slows to a crawl.
             *
             *      this.monitor.setAttribute("tabindex", "0");
             */
        } else {
            throw new Error("unable to find binding: " + Monitor.BINDING.MONITOR);
        }
        this.container = this.findBinding(Monitor.BINDING.CONTAINER) || this.monitor;

        /**
         * Create the Monitor canvas if we weren't given a predefined canvas; we'll assume that an existing
         * canvas is already contained within the monitor.
         */
        let canvas = this.bindings[Monitor.BINDING.SURFACE];
        if (!canvas) {
            canvas = document.createElement("canvas");
            let id = this.getBindingID(Monitor.BINDING.SURFACE);
            if (id) {
                this.bindings[id] = canvas;
                canvas.setAttribute("id", id);
            }
            canvas.setAttribute("class", "pcjs-surface");
            canvas.setAttribute("width", this.config['monitorWidth']);
            canvas.setAttribute("height", this.config['monitorHeight']);
            canvas.style.backgroundColor = this.config['monitorColor'] || "black";
            this.monitor.appendChild(canvas);
        }
        this.canvasMonitor = canvas;

        /**
         * The "contenteditable" attribute on a canvas is a simple way of creating a display surface that can
         * also receive focus and generate input events.  Unfortunately, in Safari, that attribute NOTICEABLY
         * slows down canvas operations whenever it has focus.  All you have to do is click away from the canvas,
         * and drawing speeds up, then click back on the canvas, and drawing slows down.  So we now rely on a
         * "transparent textarea" solution (see below).
         *
         *      canvas.setAttribute("contenteditable", "true");
         */

        let context = canvas.getContext("2d");
        this.contextMonitor = context;

        /**
         * HACK: A canvas style of "auto" provides for excellent responsive canvas scaling in EVERY browser
         * except IE9/IE10, so I recalculate the appropriate CSS height every time the parent div is resized;
         * IE11 works without this hack, so we take advantage of the fact that IE11 doesn't identify as "MSIE".
         *
         * The other reason it's good to keep this particular hack limited to IE9/IE10 is that most other
         * browsers don't actually support an 'resize' handler on anything but the window object.
         */
        if (this.isUserAgent("MSIE")) {
            this.monitor['onresize'] = function(parentElement, childElement, cx, cy) {
                return function onResizeScreen() {
                    childElement.style.height = (((parentElement.clientWidth * cy) / cx) | 0) + "px";
                };
            }(this.monitor, canvas, this.config['monitorWidth'], this.config['monitorHeight']);
            this.monitor['onresize']();
        }

        /**
         * The following is a related hack that allows the user to force the monitor to use a particular aspect
         * ratio if an 'aspect' attribute or URL parameter is set.  Initially, it's just for testing purposes
         * until we figure out a better UI.  And note that we use our onPageEvent() helper function to make sure
         * we don't trample any other 'resize' handler(s) attached to the window object.
         */
        let aspect = +(this.config['aspect'] || WebIO.getURLParms()['aspect']);

        /**
         * No 'aspect' parameter yields NaN, which is falsey, and anything else must satisfy my arbitrary
         * constraints of 0.3 <= aspect <= 3.33, to prevent any useless (or worse, browser-blowing) results.
         */
        if (aspect && aspect >= 0.3 && aspect <= 3.33) {
            this.onPageEvent('resize', function(parentElement, childElement, aspectRatio) {
                return function onResizeWindow() {
                    /**
                     * Since aspectRatio is the target width/height, we have:
                     *
                     *      parentElement.clientWidth / childElement.style.height = aspectRatio
                     *
                     * which means that:
                     *
                     *      childElement.style.height = parentElement.clientWidth / aspectRatio
                     *
                     * so for example, if aspectRatio is 16:9, or 1.78, and clientWidth = 640,
                     * then the calculated height should approximately 360.
                     */
                    childElement.style.height = ((parentElement.clientWidth / aspectRatio)|0) + "px";
                };
            }(this.monitor, canvas, aspect));
            window['onresize']();
        }

        /**
         * Here's the gross code to handle full-screen support across all supported browsers.  Most of the crud is
         * now buried inside findProperty(), which checks for all the browser prefix variations (eg, "moz", "webkit")
         * and deals with certain property name variations, like 'Fullscreen' (new) vs 'FullScreen' (old).
         */
        this.machine.isFullScreen = false;
        this.fullScreen = this.fullScreenStyle = false;
        let button = this.bindings[Monitor.BINDING.FULLSCREEN];
        if (button) {
            sProp = this.findProperty(this.container, 'requestFullscreen');
            if (sProp) {
                this.container.doFullScreen = this.container[sProp];
                this.fullScreen = true;
                this.fullScreenStyle = document.fullscreenEnabled || this.isUserAgent("Edge/");
                sEvent = this.findProperty(document, 'on', 'fullscreenchange');
                if (sEvent) {
                    let sFullScreen = this.findProperty(document, 'fullscreenElement');
                    document.addEventListener(sEvent, function onFullScreenChange() {
                        monitor.onFullScreen(document[sFullScreen] != null);
                    }, false);
                }
                sEvent = this.findProperty(document, 'on', 'fullscreenerror');
                if (sEvent) {
                    document.addEventListener(sEvent, function onFullScreenError() {
                        monitor.onFullScreen();
                    }, false);
                }
            } else {
                this.printf("Full-screen API not available\n");
                button.parentNode.removeChild(/** @type {Node} */ (button));
            }
        }

        /**
         * The 'touchType' config property can be set to true for machines that require a full keyboard.  If set,
         * we create a transparent textarea "overlay" on top of the canvas and provide it to the Input device
         * via addSurface(), making it easy for the user to activate the on-screen keyboard for touch-type devices.
         *
         * The parent div must have a style of "position:relative", so that we can position the textarea using
         * "position:absolute" with "top" and "left" coordinates of zero.  And we don't want the textarea to be
         * visible, but we must use "opacity:0" instead of "visibility:hidden", because the latter seems to
         * prevent the element from receiving events.
         *
         * All these styling requirements are resolved by using CSS class "pcjs-surface" for the parent div and
         * CSS class "pcjs-overlay" for the textarea.
         *
         * Having the textarea can serve other useful purposes as well, such as providing a place for us to echo
         * diagnostic messages, and it solves the Safari performance problem I observed (see above).  Unfortunately,
         * it creates new challenges, too.  For example, textareas can cause certain key combinations, like "Alt-E",
         * to be withheld as part of the browser's support for multi-key character composition.  So I may have to
         * alter which element on the page gets focus depending on the platform or other factors.
         *
         * Why do we ALSO create an overlay if fullScreen support is requested ONLY on non-iOS devices?  Because
         * we generally always need a surface for capturing keyboard events on desktop devices, whereas you're
         * supposed to use 'touchType' if you really need keyboard events on iOS devices (ie, we don't want the
         * iPhone or iPad soft keyboard popping up unnecessarily).
         */
        let textarea;
        if (this.touchType || this.diagnostics || this.fullScreen && !this.isUserAgent("iOS")) {
            textarea = document.createElement("textarea");
            let id = this.getBindingID(Monitor.BINDING.OVERLAY);
            if (id) {
                this.bindings[id] = textarea;
                textarea.setAttribute("id", id);
            }
            textarea.setAttribute("class", "pcjs-overlay");
            /**
             * The soft keyboard on an iOS device tends to pop up with the SHIFT key depressed, which is not the
             * initial keyboard state we prefer, so hopefully turning off these "auto" attributes will help.
             */
            if (this.isUserAgent("iOS")) {
                this.disableAuto(textarea);
                /**
                 * One of the problems on iOS devices is that after a soft-key control is clicked, we need to give
                 * focus back to the above textarea, usually by calling cmp.updateFocus(), but in doing so, iOS may
                 * also "zoom" the page rather jarringly.  While it's a simple matter to completely disable zooming,
                 * by fiddling with the page's viewport, that prevents the user from intentionally zooming.  A bit of
                 * Googling reveals that another way to prevent those jarring unintentional zooms is to simply set the
                 * font-size of the text control to 16px.  So that's what we do.
                 */
                textarea.style.fontSize = "16px";
            }
            this.monitor.appendChild(textarea);
        }

        /**
         * If there's an Input device, make sure it is associated with our default input surface.
         */
        this.input = /** @type {Input} */ (this.findDeviceByClass("Input", false));
        if (this.input) {
            this.input.addSurface(textarea || this.monitor, this.findBinding(this.config['focusBinding'], true));
        }

        /**
         * These variables are here in case we want/need to add support for borders later...
         */
        this.xMonitorOffset = this.yMonitorOffset = 0;
        this.cxMonitorOffset = this.cxMonitor;
        this.cyMonitorOffset = this.cyMonitor;

        /**
         * Support for disabling (or, less commonly, enabling) image smoothing, which all browsers
         * seem to support now (well, OK, I still have to test the latest MS Edge browser), despite
         * it still being labelled "experimental technology".  Let's hope the browsers standardize
         * on this.  I see other options emerging, like the CSS property "image-rendering: pixelated"
         * that's apparently been added to Chrome.  Sigh.
         */
        let fSmoothing = this.config['smoothing'];
        let sSmoothing = WebIO.getURLParms()['smoothing'];
        if (sSmoothing) fSmoothing = (sSmoothing == "true");
        this.fSmoothing = fSmoothing;
        this.sSmoothing = this.findProperty(context, 'imageSmoothingEnabled');

        this.rotateMonitor = this.config['monitorRotate'];
        if (this.rotateMonitor) {
            this.rotateMonitor = this.rotateMonitor % 360;
            if (this.rotateMonitor > 0) this.rotateMonitor -= 360;
            /**
             * TODO: Consider also disallowing any rotateMonitor value if bufferRotate was already set; setting
             * both is most likely a mistake, but who knows, maybe someone wants to use both for 180-degree rotation?
             */
            if (this.rotateMonitor != -90) {
                this.printf("unsupported monitor rotation: %d\n", this.rotateMonitor);
                this.rotateMonitor = 0;
            } else {
                context.translate(0, this.cyMonitor);
                context.rotate((this.rotateMonitor * Math.PI)/180);
                context.scale(this.cyMonitor/this.cxMonitor, this.cxMonitor/this.cyMonitor);
            }
        }
    }

    /**
     * addBinding(binding, element)
     *
     * @this {Monitor}
     * @param {string} binding
     * @param {Element} element
     */
    addBinding(binding, element)
    {
        let monitor = this;

        switch(binding) {
        case Monitor.BINDING.FULLSCREEN:
            element.onclick = function onClickFullScreen() {
                /**
                 * I've encountered situations in Safari on iPadOS where full-screen mode was cancelled without
                 * notification via onFullScreen() (eg, diagnostic printf() calls that used to inadvertently change
                 * focus), so we'd mistakenly think we were still full-screen.
                 *
                 * print() attempts to avoid focus changes on "iOS" devices now, but the following sanity check
                 * still seems worthwhile.
                 */
                monitor.machine.isFullScreen = (window.outerHeight - window.innerHeight <= 1);
                if (!monitor.machine.isFullScreen) {
                    monitor.doFullScreen();
                } else {
                    if (Monitor.DEBUG) monitor.printf(MESSAGE.MONITOR, "onClickFullScreen(): already full-screen?\n");
                }
            };
            break;
        }
        super.addBinding(binding, element);
    }

    /**
     * blankMonitor()
     *
     * @this {Monitor}
     */
    blankMonitor()
    {
        if (this.contextMonitor) {
            this.contextMonitor.fillStyle = "black";
            this.contextMonitor.fillRect(0, 0, this.canvasMonitor.width, this.canvasMonitor.height);
        }
    }

    /**
     * doFullScreen()
     *
     * @this {Monitor}
     * @returns {boolean} true if request successful, false if not (eg, failed OR not supported)
     */
    doFullScreen()
    {
        let fSuccess = false;
        if (Monitor.DEBUG) this.printf(MESSAGE.MONITOR, "doFullScreen()\n");
        if (this.container && this.container.doFullScreen) {
            /**
             * Styling the container with a width of "100%" and a height of "auto" works great when the aspect ratio
             * of our virtual monitor is at least roughly equivalent to the physical screen's aspect ratio, but now that
             * we support virtual VGA monitors with an aspect ratio of 1.33, that's very much out of step with modern
             * wide-screen monitors, which usually have an aspect ratio of 1.6 or greater.
             *
             * And unfortunately, none of the browsers I've tested appear to make any attempt to scale our container to
             * the physical screen's dimensions, so the bottom of our monitor gets clipped.  To prevent that, I reduce
             * the width from 100% to whatever percentage will accommodate the entire height of the virtual monitor.
             *
             * NOTE: Mozilla recommends both a width and a height of "100%", but all my tests suggest that using "auto"
             * for height works equally well, so I'm sticking with it, because "auto" is also consistent with how I've
             * implemented a responsive canvas when the browser window is being resized.
             */
            let sWidth = "100%";
            let sHeight = "auto";
            if (screen && screen.width && screen.height) {
                let aspectPhys = screen.width / screen.height;
                let aspectVirt = this.cxMonitor / this.cyMonitor;
                if (aspectPhys > aspectVirt) {
                    sWidth = Math.round(aspectVirt / aspectPhys * 100) + '%';
                }
                // TODO: We may need to someday consider the case of a physical screen with an aspect ratio < 1.0....
            }
            if (!this.fullScreenStyle) {
                this.container.style.width = sWidth;
                this.container.style.height = sHeight;
            } else {
                /**
                 * Sadly, the above code doesn't work for Firefox (nor for Chrome, as of Chrome 75 or so), because as
                 * http://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode explains:
                 *
                 *      'It's worth noting a key difference here between the Gecko and WebKit implementations at this time:
                 *      Gecko automatically adds CSS rules to the element to stretch it to fill the screen: "width: 100%; height: 100%".
                 *
                 * Which would be OK if Gecko did that BEFORE we're called, but apparently it does that AFTER, effectively
                 * overwriting our careful calculations.  So we style the inner element (canvasMonitor) instead, which
                 * requires even more work to ensure that the canvas is properly centered.  FYI, this solution is consistent
                 * with Mozilla's recommendation for working around their automatic CSS rules:
                 *
                 *      '[I]f you're trying to emulate WebKit's behavior on Gecko, you need to place the element you want
                 *      to present inside another element, which you'll make fullscreen instead, and use CSS rules to adjust
                 *      the inner element to match the appearance you want.'
                 */
                this.canvasMonitor.style.width = sWidth;
                this.canvasMonitor.style.height = sHeight;
                this.canvasMonitor.style.display = "block";
                this.canvasMonitor.style.margin = "auto";
            }
            this.prevBackgroundColor = this.container.style.backgroundColor;
            this.container.style.backgroundColor = "black";
            this.container.doFullScreen();
            if (this.input) this.input.setAltFocus(true);
            fSuccess = true;
        }
        return fSuccess;
    }

    /**
     * onFullScreen(fFullScreen)
     *
     * @this {Monitor}
     * @param {boolean} [fFullScreen] (undefined if there was a full-screen error)
     */
    onFullScreen(fFullScreen)
    {
        this.machine.isFullScreen = true;
        if (!fFullScreen) {
            if (this.container) {
                if (!this.fullScreenStyle) {
                    this.container.style.width = this.container.style.height = "";
                } else {
                    this.canvasMonitor.style.width = this.canvasMonitor.style.height = "";
                }
                if (this.prevBackgroundColor) this.container.style.backgroundColor = this.prevBackgroundColor;
            }
            this.machine.isFullScreen = false;
        }
        if (this.input && !fFullScreen) this.input.setAltFocus(false);
        if (Monitor.DEBUG) this.printf(MESSAGE.MONITOR, "onFullScreen(%b)\n", fFullScreen);
    }

    /**
     * onPower(on)
     *
     * Called by the Machine device to provide notification of a power event.
     *
     * @this {Monitor}
     * @param {boolean} on (true to power on, false to power off)
     */
    onPower(on)
    {
        if (on) {
            this.initCache();
            this.updateScreen();
        } else {
            this.blankMonitor();
        }
    }

    /**
     * onReset()
     *
     * Called by the Machine device to provide notification of a reset event.
     *
     * @this {Monitor}
     */
    onReset()
    {
        this.blankMonitor();
    }
}

Monitor.BINDING = {
    CONTAINER:  "container",
    SURFACE:    "surface",
    MONITOR:    "monitor",
    OVERLAY:    "overlay",
    FULLSCREEN: "fullScreen",
};

Monitor.CLASSES["Monitor"] = Monitor;

/**
 * @copyright https://www.pcjs.org/machines/modules/v3/time.js (C) 2012-2026 Jeff Parsons
 */

/** @typedef {{ id: string, callBack: function(), msAuto: number, nCyclesLeft: number }} */
let Timer;

/** @typedef {{ cyclesMinimum: (number|undefined), cyclesMaximum: (number|undefined), cyclesPerSecond: (number|undefined), updatesPerSecond: (number|undefined), timeLock: (boolean|undefined) }} */
let TimeConfig;

/**
 * @class Time
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
            this.printf(MESSAGE.TIME, "calcSpeed(%d cycles, %5.3fms): %5.3fMhz\n", nCycles, msElapsed, mhz);
            if (msFrame > this.msFrameDefault) {
                if (this.nTargetMultiplier > 1) {
                    /**
                     * Alternatively, we could call setSpeed(this.nTargetMultiplier >> 1) at this point, but the
                     * advantages of quietly reducing the target multiplier here are: 1) it will still slow us down,
                     * and 2) allow the next attempt to increase speed via setSpeed() to detect that we didn't
                     * reach 90% of our original target and revert back to the base multiplier.
                     */
                    this.nTargetMultiplier >>= 1;
                    this.printf(MESSAGE.WARNING, "frame time (%5.3fms) exceeded maximum (%5.3fms), target multiplier now %d\n", msFrame, this.msFrameDefault, this.nTargetMultiplier);
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
        this.printf(MESSAGE.TIME, "nCyclesDepositPerFrame(%5.3f) = nCyclesPerSecond(%d) / nDivisor(%5.3f) / nFramesPerSecond(%d)\n", this.nCyclesDepositPerFrame, nCyclesPerSecond, nDivisor, this.nFramesPerSecond);
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
                this.printf(MESSAGE.TIME, "warning: cycle count dropped below zero: %f\n", nCycles);
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
        this.printf(MESSAGE.TIME, "getSpeedCurrent(%5.3fhz)\n", this.mhzCurrent * 1000000);
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
            this.printf("not powered\n");
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
                this.printf("already running\n");
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
            this.printf("%s\n", err.message);
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
         * (eg, the browser window moved off-screen, the window is being actively resized, the user switched
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
                this.printf(MESSAGE.WARNING, "browser throttling detected, compensating by %5.3fms\n", msDeltaRun);
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
        this.msStartRun = this.msEndRun = this.msFrame = 0;
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
            this.printf(this.fRunning? "started with %s target\n" : "stopped\n", this.getSpeedTarget());
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
 * @copyright https://www.pcjs.org/machines/modules/v3/bus.js (C) 2012-2026 Jeff Parsons
 */

/** @typedef {{ type: string, addrWidth: number, dataWidth: number, blockSize: (number|undefined), littleEndian: (boolean|undefined) }} */
let BusConfig;

/**
 * @class Bus
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
                this.dbg.printf(MESSAGE.FAULT, "bus fault (%d) at %n\n", reason, addr);
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
            this.writePair(addr, (value >> this.pairWidth) & this.pairLimit);
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
 * @copyright https://www.pcjs.org/machines/modules/v3/memory.js (C) 2012-2026 Jeff Parsons
 */

/** @typedef {{ addr: (number|undefined), size: number, type: (number|undefined), littleEndian: (boolean|undefined), values: (Array.<number>|string|undefined) }} */
let MemoryConfig;

/**
 * @class Memory
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
        this.buffer = this.dataView = null;
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

        this.writeValuePairBE(offset, (value >> this.pairWidth) & this.pairLimit);
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

        this.writePair(offset, (value >> this.pairWidth) & this.pairLimit);
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
            return true;
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
 * @copyright https://www.pcjs.org/machines/modules/v3/ram.js (C) 2012-2026 Jeff Parsons
 */

/** @typedef {{ addr: number, size: number, type: (number|undefined) }} */
let RAMConfig;

/**
 * @class RAM
 * @unrestricted
 * @property {RAMConfig} config
 * @property {number} addr
 * @property {number} size
 * @property {number} type
 * @property {Array.<number>} values
 */
class RAM extends Memory {
    /**
     * RAM(idMachine, idDevice, config)
     *
     * Sample config:
     *
     *      "ram": {
     *        "class": "RAM",
     *        "addr": 8192,
     *        "size": 1024,
     *        "bus": "busMemory"
     *      }
     *
     * @this {RAM}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {RAMConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        config['type'] = Memory.TYPE.NONE;
        super(idMachine, idDevice, config);
        this.bus.addBlocks(this.config['addr'], this.config['size'], Memory.TYPE.READWRITE);
        this.whenReady(this.onReset.bind(this));
    }
}

RAM.CLASSES["RAM"] = RAM;

/**
 * @copyright https://www.pcjs.org/machines/modules/v3/rom.js (C) 2012-2026 Jeff Parsons
 */

/** @typedef {{ addr: number, size: number, values: Array.<number>, file: string, reference: string, chipID: string, revision: (number|undefined), colorROM: (string|undefined), backgroundColorROM: (string|undefined) }} */
let ROMConfig;

/**
 * @class ROM
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
 * @copyright https://www.pcjs.org/machines/modules/v3/cpu.js (C) 2012-2026 Jeff Parsons
 */

/** @typedef {{ addrReset: number }} */
let CPUConfig;

/**
 * @class CPU
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
        this.printf("%s\n", err.message);
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
 * @copyright https://www.pcjs.org/machines/modules/v3/debugger.js (C) 2012-2026 Jeff Parsons
 */

/** @typedef {{ defaultRadix: (number|undefined) }} */
let DebuggerConfig;

/** @typedef {{ off: number, seg: number, type: number, disabled: (boolean|undefined) }} */
let Address;

/** @typedef {{ address: Address, type: number, name: string }} */
let SymbolObj;

 /** @typedef {{ device: Device, name: string, desc: string, func: function() }} */
let Dumper;

/**
 * Debugger Services
 *
 * @class Debugger
 * @unrestricted
 * @property {Array.<Array.<Address>>} aaBreakAddress
 */
class Debugger extends Device {

    static COMMANDS = [
        "b?\t\tbreak commands",
        "d?\t\tdump commands",
        "e[o] [addr] ...\tedit memory/ports",
        "g    [addr]\trun (to addr)",
        "h\t\thalt",
        "p    [expr]\tparse expression",
        "r?   [value]\tdisplay/set registers",
        "s?\t\tset commands",
        "save [file]\tsave machine state",
        "t[r] [n]\tstep (n instructions)",
        "u    [addr] [n]\tunassemble (at addr)"
    ];

    static BREAK_COMMANDS = [
        "bc [n|*]\tclear break address",
        "bd [n|*]\tdisable break address",
        "be [n|*]\tenable break address",
        "bl [n]\t\tlist break addresses",
        "bi [addr]\tbreak on input",
        "bo [addr]\tbreak on output",
        "br [addr]\tbreak on read",
        "bw [addr]\tbreak on write",
        "bm [on|off]\tbreak on message",
        "bn [count]\tbreak on instruction count"
    ];

    static DUMP_COMMANDS = [
        "db  [addr]\tdump bytes (8 bits)",
        "dw  [addr]\tdump words (16 bits)",
        "dd  [addr]\tdump dwords (32 bits)",
        "di  [addr]\tdump input ports",
        "d*y [addr]\tdump values in binary",
        "dh  [n] [l]\tdump instruction history buffer",
        "ds\t\tdump machine state"
    ];

    static SET_COMMANDS = [
        "sh [on|off]\tset instruction history",
        "sp [n]\t\tset speed multiplier",
        "ss\t\tset debugger style"
    ];

    static ADDRESS = {
        VIRTUAL:    0x01,           // if seg is -1, this indicates if the address is physical (clear) or virtual (set)
        PHYSICAL:   0x00,
        PROTECTED:  0x02,           // if seg is NOT -1, this indicates if the address is real (clear) or protected (set)
        REAL:       0x00
    };

    /**
     * The required characteristics of these assigned values are as follows: all even values must be read
     * operations and all odd values must be write operations; all busMemory operations must come before all
     * busIO operations; and INPUT must be the first busIO operation.
     */
    static BREAKTYPE = {
        READ:       0,
        WRITE:      1,
        INPUT:      2,
        OUTPUT:     3
    };

    static BREAKCMD = {
        [Debugger.BREAKTYPE.READ]:     "br",
        [Debugger.BREAKTYPE.WRITE]:    "bw",
        [Debugger.BREAKTYPE.INPUT]:    "bi",
        [Debugger.BREAKTYPE.OUTPUT]:   "bo"
    };

    /**
     * Predefined "virtual registers" that we expect the CPU to support.
     */
    static REGISTER = {
        PC:         "PC"            // the CPU's program counter
    };

    static SYMBOL = {
        BYTE:       1,
        PAIR:       2,
        QUAD:       4,
        LABEL:      5,
        COMMENT:    6,
        VALUE:      7
    };

    static SYMBOL_TYPES = {
        "=":        Debugger.SYMBOL.VALUE,
        "1":        Debugger.SYMBOL.BYTE,
        "2":        Debugger.SYMBOL.PAIR,
        "4":        Debugger.SYMBOL.QUAD,
        "@":        Debugger.SYMBOL.LABEL,
        ";":        Debugger.SYMBOL.COMMENT
    };

    static HISTORY_LIMIT = 100000;

    /**
     * These are our operator precedence tables.  Operators toward the bottom (with higher values) have
     * higher precedence.  BINOP_PRECEDENCE was our original table; we had to add DECOP_PRECEDENCE because
     * the precedence of operators in DEC's MACRO-10 expressions differ.  Having separate tables also allows
     * us to remove operators that shouldn't be supported, but unless some operator creates a problem,
     * I prefer to keep as much commonality between the tables as possible.
     *
     * Missing from these tables are the (limited) set of unary operators we support (negate and complement),
     * since this is only a BINARY operator precedence, not a general-purpose precedence table.  Assume that
     * all unary operators take precedence over all binary operators.
     */
    static BINOP_PRECEDENCE = {
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
        '_':    19,     // MACRO-10 shift operator
        '^_':   19,     // MACRO-10 internal shift operator (converted from 'B' suffix form that MACRO-10 uses)
        '{':    20,     // open grouped expression (converted from achGroup[0])
        '}':    20      // close grouped expression (converted from achGroup[1])
    };

    static DECOP_PRECEDENCE = {
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
        '_':    19,     // MACRO-10 shift operator
        '^_':   19,     // MACRO-10 internal shift operator (converted from 'B' suffix form that MACRO-10 uses)
        '{':    20,     // open grouped expression (converted from achGroup[0])
        '}':    20      // close grouped expression (converted from achGroup[1])
    };

    /**
     * Debugger(idMachine, idDevice, config)
     *
     * @this {Debugger}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {DebuggerConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        config['class'] = "Debugger";
        super(idMachine, idDevice, config);

        /**
         * Default radix (base).  This is used by our own functions (eg, parseExpression()),
         * but not by those we inherited (eg, parseInt()), which still use base 10 by default;
         * however, you can always coerce values to any base in any of those functions with
         * a prefix (eg, "0x" for hex) or suffix (eg, "." for decimal).
         */
        this.nDefaultRadix = this.config['defaultRadix'] || 16;

        /**
         * Default endian (0 = little, 1 = big).
         */
        this.nDefaultEndian = 0;                // TODO: Use it or lose it

        /**
         * Default maximum instruction (opcode) length, overridden by the CPU-specific debugger.
         */
        this.maxOpcodeLength = 1;

        /**
         * Default parsing parameters, sub-expression and address delimiters.
         */
        this.nASCIIBits = 8;                    // change to 7 for MACRO-10 compatibility
        this.achGroup = ['(',')'];
        this.achAddress = ['[',']'];

        /**
         * Add a new format type ('a') that understands Address objects, where width represents
         * the size of the address in bits, and uses the Debugger's default radix.
         *
         * TODO: Consider adding a 'bits' property to the Address object (or a Bus property so that
         * the appropriate addrWidth can be identified), in order to avoid the extra sprintf() width
         * parameter, allowing the use of "%a" instead of "%*a".
         *
         * TODO: Determine if it's worth getting rid of the separate dumpAddress() function.
         */
        this.addFormatType('a',
            /**
             * @param {string} type
             * @param {string} flags
             * @param {number} width
             * @param {number} precision
             * @param {Address} address
             * @returns {string}
             */
            (type, flags, width, precision, address) => this.toBase(address.off, this.nDefaultRadix, width)
        );

        /**
         * Add a new format type ('n') for numbers, where width represents the size of the value in bits,
         * and uses the Debugger's default radix.
         */
        this.addFormatType('n',
            /**
             * @param {string} type
             * @param {string} flags
             * @param {number} width
             * @param {number} precision
             * @param {number} value
             * @returns {string}
             */
            (type, flags, width, precision, value) => this.toBase(value, this.nDefaultRadix, width, flags.indexOf('#') < 0? "" : undefined)
        );

        /**
         * This controls how we stop the CPU on a break condition.  If fExceptionOnBreak is true, we'll
         * throw an exception, which the CPU will catch and halt; however, the downside of that approach
         * is that, in some cases, it may leave the CPU in an inconsistent state.  It's generally safer to
         * leave fExceptionOnBreak false, which will simply stop the clock, allowing the current instruction
         * to finish executing.
         */
        this.fExceptionOnBreak = false;

        /**
         * If greater than zero, decremented on every instruction until it hits zero, then CPU is stopped.
         */
        this.counterBreak = 0;

        /**
         * If set to MESSAGE.ALL, then we break on all messages.  It can be set to a subset of message bits,
         * but there is currently no UI for that.
         */
        this.messagesBreak = MESSAGE.NONE;

        /**
         * variables is an object with properties that grow as setVariable() assigns more variables;
         * each property corresponds to one variable, where the property name is the variable name (ie,
         * a string beginning with a non-digit, followed by zero or more symbol characters and/or digits)
         * and the property value is the variable's numeric value.
         *
         * Note that parseValue() parses variables before numbers, so any variable that looks like a
         * unprefixed hex value (eg, "a5" as opposed to "0xa5") will trump the numeric value.  Unprefixed
         * hex values are a convenience of parseValue(), which always calls parseInt() with a default
         * base of 16; however, that default be overridden with a variety of explicit prefixes or suffixes
         * (eg, a leading "0o" to indicate octal, a trailing period to indicate decimal, etc.)
         *
         * See parseInt() for more details about supported numbers.
         */
        this.variables = {};

        /**
         * Arrays of Symbol objects, one sorted by name and the other sorted by value; see addSymbols().
         */
        this.symbolsByName = [];
        this.symbolsByValue = [];

        /**
         * Get access to the CPU, so that in part so we can connect to all its registers; the Debugger has
         * no registers of its own, so we simply replace our registers with the CPU's.
         */
        this.cpu = /** @type {CPU} */ (this.findDeviceByClass("CPU"));
        this.registers = this.cpu.connectDebugger(this);

        /**
         * Get access to the Input device, so that we can switch focus whenever we start the machine.
         */
        this.input = /** @type {Input} */ (this.findDeviceByClass("Input", false));

        /**
         * Get access to the Bus devices, so we have access to the I/O and memory address spaces.
         * To minimize configuration redundancy, we rely on the CPU's configuration to get the Bus device IDs.
         */
        let idBus = this.cpu.config['busMemory'] || this.config['busMemory'];
        if (idBus) {
            this.busMemory = /** @type {Bus} */ (this.findDevice(idBus));
            idBus = this.cpu.config['busIO'] || this.config['busIO'];
            if (idBus) {
                this.busIO = /** @type {Bus} */ (this.findDevice(idBus, false));
            }
            if (!this.busIO) this.busIO = this.busMemory;
        } else {
            this.busMemory = this.busIO = /** @type {Bus} */ (this.findDeviceByClass('Bus'));
        }

        this.nDefaultBits = this.busMemory.addrWidth;
        this.addrMask = (Math.pow(2, this.nDefaultBits) - 1)|0;

        /**
         * Since we want to be able to clear/disable/enable/list break addresses by index number, we maintain
         * an array (aBreakIndexes) that maps index numbers to address array entries.  The mapping values are
         * a combination of BREAKTYPE (high byte) and break address entry (low byte).
         */
        this.cBreaks = 0;
        this.cBreakIgnore = 0;  // incremented and decremented around internal reads and writes
        this.aaBreakAddress = [];
        for (let type in Debugger.BREAKTYPE) {
            this.aaBreakAddress[Debugger.BREAKTYPE[type]] = [];
        }
        this.aBreakBuses = [];
        this.aBreakBuses[Debugger.BREAKTYPE.READ] = this.busMemory;
        this.aBreakBuses[Debugger.BREAKTYPE.WRITE] = this.busMemory;
        this.aBreakBuses[Debugger.BREAKTYPE.INPUT] = this.busIO;
        this.aBreakBuses[Debugger.BREAKTYPE.OUTPUT] = this.busIO;
        this.aBreakChecks = [];
        this.aBreakChecks[Debugger.BREAKTYPE.READ] = this.checkRead.bind(this);
        this.aBreakChecks[Debugger.BREAKTYPE.WRITE] = this.checkWrite.bind(this);
        this.aBreakChecks[Debugger.BREAKTYPE.INPUT] = this.checkInput.bind(this);
        this.aBreakChecks[Debugger.BREAKTYPE.OUTPUT] = this.checkOutput.bind(this);
        this.aBreakIndexes = [];
        this.fStepQuietly = undefined;          // when stepping, this informs onUpdate() how "quiet" to be
        this.tempBreak = null;                  // temporary auto-cleared break address managed by setTemp() and clearTemp()
        this.cInstructions = 0;                 // instruction counter (updated only if history is enabled)

        /**
         * Get access to the Time device, so we can stop and start time as needed.
         */
        this.time = /** @type {Time} */ (this.findDeviceByClass("Time"));
        this.time.addUpdate(this);
        this.cTransitions = 0;

        /**
         * Initialize additional properties required for our onCommand() handler, including
         * support for dump extensions (which we use ourselves to implement the "d state" command).
         */
        this.aDumpers = [];                     // array of dump extensions (aka "Dumpers")
        this.sDumpPrev = "";                    // remembers the previous "dump" command invoked
        this.addDumper(this, "state", "dump machine state", this.dumpState);

        this.addressCode = this.newAddress();
        this.addressData = this.newAddress();
        this.historyForced = false;
        this.historyNext = 0;
        this.historyBuffer = [];
        this.addHandler(Debugger.HANDLER.COMMAND, this.onCommand.bind(this));

        let commands = /** @type {string} */ (this.getMachineConfig("commands"));
        if (commands) this.parseCommands(commands);
    }

    /**
     * addDumper(device, name, desc, func)
     *
     * @this {Debugger}
     * @param {Device} device
     * @param {string} name
     * @param {string} desc
     * @param {function(Array.<number>)} func
     */
    addDumper(device, name, desc, func)
    {
        this.aDumpers.push({device, name, desc, func});
    }

    /**
     * checkDumper(option, values)
     *
     * @this {Debugger}
     * @param {string} option
     * @param {Array.<number>} values
     * @returns {string|undefined}
     */
    checkDumper(option, values)
    {
        let result;
        for (let i = 0; i < this.aDumpers.length; i++) {
            let dumper = this.aDumpers[i];
            if (dumper.name == option) {
                result = dumper.func.call(dumper.device, values);
                break;
            }
        }
        return result;
    }

    /**
     * addSymbol(address, type, name)
     *
     * @this {Debugger}
     * @param {Address} address
     * @param {number} type (see Debugger.SYMBOL_TYPE values)
     * @param {string} name
     */
    addSymbol(address, type, name)
    {
        let symbol = {address, type, name};
        this.binaryInsert(this.symbolsByName, symbol, this.compareSymbolNames);
        this.binaryInsert(this.symbolsByValue, symbol, this.compareSymbolValues);
    }

    /**
     * addSymbols(aSymbols)
     *
     * This currently supports only symbol arrays, which consist of [address,type,name] triplets; eg:
     *
     *      "0320","=","HF_PORT",
     *      "0000:0034","4","HDISK_INT",
     *      "0040:0042","1","CMD_BLOCK",
     *      "0003","@","DISK_SETUP",
     *      "0000:004C","4","ORG_VECTOR",
     *      "0028",";","GET DISKETTE VECTOR"
     *
     * There are two basic symbol operations: findSymbolByValue(), which takes an address and finds the symbol,
     * if any, at that address, and findSymbolByName(), which takes a string and attempts to match it to an address.
     *
     * @this {Debugger}
     * @param {Array|undefined} aSymbols
     */
    addSymbols(aSymbols)
    {
        if (aSymbols && aSymbols.length) {
            for (let iSymbol = 0; iSymbol < aSymbols.length-2; iSymbol += 3) {
                let address = this.parseAddress(aSymbols[iSymbol]);
                if (!address) continue;     // ignore symbols with bad addresses
                let type = Debugger.SYMBOL_TYPES[aSymbols[iSymbol+1]];

                if (!type) continue;        // ignore symbols with unrecognized types
                let name = aSymbols[iSymbol+2];
                this.addSymbol(address, type, name);
            }
        }
    }

    /**
     * binaryInsert(a, v, fnCompare)
     *
     * If element v already exists in array a, the array is unchanged (we don't allow duplicates); otherwise, the
     * element is inserted into the array at the appropriate index.
     *
     * @this {Debugger}
     * @param {Array} a is an array
     * @param {Object} v is the value to insert
     * @param {function(SymbolObj,SymbolObj):number} [fnCompare]
     */
    binaryInsert(a, v, fnCompare)
    {
        let index = this.binarySearch(a, v, fnCompare);
        if (index < 0) {
            a.splice(-(index + 1), 0, v);
        }
    }

    /**
     * binarySearch(a, v, fnCompare)
     *
     * @this {Debugger}
     * @param {Array} a is an array
     * @param {Object} v
     * @param {function(SymbolObj,SymbolObj):number} [fnCompare]
     * @returns {number} the index of matching entry if non-negative, otherwise the index of the insertion point
     */
    binarySearch(a, v, fnCompare)
    {
        let left = 0;
        let right = a.length;
        let found = 0;
        if (fnCompare === undefined) {
            fnCompare = function(a, b) { return a > b? 1 : a < b? -1 : 0; };
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
        return found? left : ~left;
    }

    /**
     * compareSymbolNames(symbol1, symbol2)
     *
     * @this {Debugger}
     * @param {SymbolObj} symbol1
     * @param {SymbolObj} symbol2
     * @returns {number}
     */
    compareSymbolNames(symbol1, symbol2)
    {
        return symbol1.name > symbol2.name? 1 : symbol1.name < symbol2.name? -1 : 0;
    }

    /**
     * compareSymbolValues(symbol1, symbol2)
     *
     * @this {Debugger}
     * @param {SymbolObj} symbol1
     * @param {SymbolObj} symbol2
     * @returns {number}
     */
    compareSymbolValues(symbol1, symbol2)
    {
        return symbol1.address.off > symbol2.address.off? 1 : symbol1.address.off < symbol2.address.off? -1 : 0;
    }

    /**
     * findSymbolByName(name)
     *
     * Search symbolsByName for name and return the corresponding symbol (undefined if not found).
     *
     * @this {Debugger}
     * @param {string} name
     * @returns {number} the index of matching entry if non-negative, otherwise the index of the insertion point
     */
    findSymbolByName(name)
    {
        let symbol = {address: null, type: 0, name};
        return this.binarySearch(this.symbolsByName, symbol, this.compareSymbolNames);
    }

    /**
     * findSymbolByValue(address)
     *
     * Search symbolsByValue for address and return the corresponding symbol (undefined if not found).
     *
     * @this {Debugger}
     * @param {Address} address
     * @returns {number} the index of matching entry if non-negative, otherwise the index of the insertion point
     */
    findSymbolByValue(address)
    {
        let symbol = {address, type: 0, name: undefined};
        return this.binarySearch(this.symbolsByValue, symbol, this.compareSymbolValues);
    }

    /**
     * getSymbol(name)
     *
     * @this {Debugger}
     * @param {string} name
     * @returns {number|undefined}
     */
    getSymbol(name)
    {
        let value;
        let i = this.findSymbolByName(name);
        if (i >= 0) {
            let symbol = this.symbolsByName[i];
            value = symbol.address.off;
        }
        return value;
    }

    /**
     * getSymbolName(address, type)
     *
     * @this {Debugger}
     * @param {Address} address
     * @param {number} [type]
     * @returns {string|undefined}
     */
    getSymbolName(address, type)
    {
        let name;
        let i = this.findSymbolByValue(address);
        if (i >= 0) {
            let symbol = this.symbolsByValue[i];
            if (!type || symbol.type == type) {
                name = symbol.name;
            }
        }
        return name;
    }

    /**
     * delVariable(name)
     *
     * @this {Debugger}
     * @param {string} name
     */
    delVariable(name)
    {
        delete this.variables[name];
    }

    /**
     * getVariable(name)
     *
     * @this {Debugger}
     * @param {string} name
     * @returns {number|undefined}
     */
    getVariable(name)
    {
        if (this.variables[name]) {
            return this.variables[name].value;
        }
        name = name.substr(0, 6);
        return this.variables[name] && this.variables[name].value;
    }

    /**
     * getVariableFixup(name)
     *
     * @this {Debugger}
     * @param {string} name
     * @returns {string|undefined}
     */
    getVariableFixup(name)
    {
        return this.variables[name] && this.variables[name].sUndefined;
    }

    /**
     * isVariable(name)
     *
     * @this {Debugger}
     * @param {string} name
     * @returns {boolean}
     */
    isVariable(name)
    {
        return this.variables[name] !== undefined;
    }

    /**
     * resetVariables()
     *
     * @this {Debugger}
     * @returns {Object}
     */
    resetVariables()
    {
        let a = this.variables;
        this.variables = {};
        return a;
    }

    /**
     * restoreVariables(a)
     *
     * @this {Debugger}
     * @param {Object} a (from previous resetVariables() call)
     */
    restoreVariables(a)
    {
        this.variables = a;
    }

    /**
     * setVariable(name, value, sUndefined)
     *
     * @this {Debugger}
     * @param {string} name
     * @param {number} value
     * @param {string|undefined} [sUndefined]
     */
    setVariable(name, value, sUndefined)
    {
        this.variables[name] = {value, sUndefined};
    }

    /**
     * addAddress(address, offset, bus)
     *
     * All this function currently supports are physical (Bus) addresses, but that will change.
     *
     * @this {Debugger}
     * @param {Address} address
     * @param {number} offset
     * @param {Bus} [bus] (default is busMemory)
     * @returns {Address}
     */
    addAddress(address, offset, bus = this.busMemory)
    {
        address.off = (address.off + offset) & bus.addrLimit;
        return address;
    }

    /**
     * makeAddress(address)
     *
     * All this function currently supports are physical (Bus) addresses, but that will change.
     *
     * @this {Debugger}
     * @param {Address|number} address
     * @returns {Address}
     */
    makeAddress(address)
    {
        return typeof address == "number"? this.newAddress(address) : address;
    }

    /**
     * newAddress(address)
     *
     * All this function currently supports are physical (Bus) addresses, but that will change.
     *
     * @this {Debugger}
     * @param {Address|number} [address]
     * @returns {Address}
     */
    newAddress(address = 0)
    {
        let seg = -1, type = Debugger.ADDRESS.PHYSICAL;
        if (typeof address == "number") return {off: address, seg, type};
        return {off: address.off, seg: address.seg, type: address.type};
    }

    /**
     * parseAddress(sAddress, aUndefined)
     *
     * @this {Debugger}
     * @param {string} sAddress
     * @param {Array} [aUndefined]
     * @returns {Address|undefined|null} (undefined if no address supplied, null if a parsing error occurred)
     */
    parseAddress(sAddress, aUndefined)
    {
        let address;
        if (sAddress) {
            address = this.newAddress();
            let iAddr = 0;
            let ch = sAddress.charAt(iAddr);

            switch(ch) {
            case '&':
                iAddr++;
                break;
            case '#':
                iAddr++;
                address.type = Debugger.ADDRESS.PROTECTED;
                break;
            case '%':
                iAddr++;
                ch = sAddress.charAt(iAddr);
                if (ch == '%') {
                    iAddr++;
                } else {
                    address.type = Debugger.ADDRESS.VIRTUAL;
                }
                break;
            }

            let iColon = sAddress.indexOf(':', iAddr);
            if (iColon >= 0) {
                let seg = this.parseExpression(sAddress.substring(iAddr, iColon), aUndefined);
                if (seg == undefined) {
                    address = null;
                } else {
                    address.seg = seg;
                    iAddr = iColon + 1;
                }
            }
            if (address) {
                let off = this.parseExpression(sAddress.substring(iAddr), aUndefined);
                if (off == undefined) {
                    address = null;
                } else {
                    address.off = off & this.addrMask;
                }
            }
        }
        return address;
    }

    /**
     * readAddress(address, advance, bus)
     *
     * All this function currently supports are physical (Bus) addresses, but that will change.
     *
     * @this {Debugger}
     * @param {Address} address
     * @param {number} [advance] (amount to advance address after read, if any)
     * @param {Bus} [bus] (default is busMemory)
     * @returns {number|undefined}
     */
    readAddress(address, advance, bus = this.busMemory)
    {
        this.cBreakIgnore++;
        let value = bus.readDirect(address.off);
        if (advance) this.addAddress(address, advance, bus);
        this.cBreakIgnore--;
        return value;
    }

    /**
     * writeAddress(address, value, bus)
     *
     * All this function currently supports are physical (Bus) addresses, but that will change.
     *
     * @this {Debugger}
     * @param {Address} address
     * @param {number} value
     * @param {Bus} [bus] (default is busMemory)
     */
    writeAddress(address, value, bus = this.busMemory)
    {
        this.cBreakIgnore++;
        bus.writeDirect(address.off, value);
        this.cBreakIgnore--;
    }

    /**
     * setAddress(address, addr)
     *
     * All this function currently supports are physical (Bus) addresses, but that will change.
     *
     * @this {Debugger}
     * @param {Address} address
     * @param {number} addr
     */
    setAddress(address, addr)
    {
        address.off = addr;
    }

    /**
     * evalAND(dst, src)
     *
     * Adapted from /machines/dec/pdp10/modules/v2/cpuops.js:PDP10.AND().
     *
     * Performs the bitwise "and" (AND) of two operands > 32 bits.
     *
     * @this {Debugger}
     * @param {number} dst
     * @param {number} src
     * @returns {number} (dst & src)
     */
    evalAND(dst, src)
    {
        /**
         * We AND the low 32 bits separately from the higher bits, and then combine them with addition.
         * Since all bits above 32 will be zero, and since 0 AND 0 is 0, no special masking for the higher
         * bits is required.
         *
         * WARNING: When using JavaScript's 32-bit operators with values that could set bit 31 and produce a
         * negative value, it's critical to perform a final right-shift of 0, ensuring that the final result is
         * positive.
         */
        if (this.nDefaultBits <= 32) {
            return dst & src;
        }
        /**
         * Negative values don't yield correct results when dividing, so pass them through an unsigned truncate().
         */
        dst = this.truncate(dst, 0, true);
        src = this.truncate(src, 0, true);
        return ((((dst / Debugger.TWO_POW32)|0) & ((src / Debugger.TWO_POW32)|0)) * Debugger.TWO_POW32) + ((dst & src) >>> 0);
    }

    /**
     * evalMUL(dst, src)
     *
     * I could have adapted the code from /machines/dec/pdp10/modules/v2/cpuops.js:PDP10.doMUL(), but it was simpler to
     * write this base method and let the PDP-10 Debugger override it with a call to the *actual* doMUL() method.
     *
     * @this {Debugger}
     * @param {number} dst
     * @param {number} src
     * @returns {number} (dst * src)
     */
    evalMUL(dst, src)
    {
        return dst * src;
    }

    /**
     * evalIOR(dst, src)
     *
     * Adapted from /machines/dec/pdp10/modules/v2/cpuops.js:PDP10.IOR().
     *
     * Performs the logical "inclusive-or" (OR) of two operands > 32 bits.
     *
     * @this {Debugger}
     * @param {number} dst
     * @param {number} src
     * @returns {number} (dst | src)
     */
    evalIOR(dst, src)
    {
        /**
         * We OR the low 32 bits separately from the higher bits, and then combine them with addition.
         * Since all bits above 32 will be zero, and since 0 OR 0 is 0, no special masking for the higher
         * bits is required.
         *
         * WARNING: When using JavaScript's 32-bit operators with values that could set bit 31 and produce a
         * negative value, it's critical to perform a final right-shift of 0, ensuring that the final result is
         * positive.
         */
        if (this.nDefaultBits <= 32) {
            return dst | src;
        }
        /**
         * Negative values don't yield correct results when dividing, so pass them through an unsigned truncate().
         */
        dst = this.truncate(dst, 0, true);
        src = this.truncate(src, 0, true);
        return ((((dst / Debugger.TWO_POW32)|0) | ((src / Debugger.TWO_POW32)|0)) * Debugger.TWO_POW32) + ((dst | src) >>> 0);
    }

    /**
     * evalXOR(dst, src)
     *
     * Adapted from /machines/dec/pdp10/modules/v2/cpuops.js:PDP10.XOR().
     *
     * Performs the logical "exclusive-or" (XOR) of two operands > 32 bits.
     *
     * @this {Debugger}
     * @param {number} dst
     * @param {number} src
     * @returns {number} (dst ^ src)
     */
    evalXOR(dst, src)
    {
        /**
         * We XOR the low 32 bits separately from the higher bits, and then combine them with addition.
         * Since all bits above 32 will be zero, and since 0 XOR 0 is 0, no special masking for the higher
         * bits is required.
         *
         * WARNING: When using JavaScript's 32-bit operators with values that could set bit 31 and produce a
         * negative value, it's critical to perform a final right-shift of 0, ensuring that the final result is
         * positive.
         */
        if (this.nDefaultBits <= 32) {
            return dst ^ src;
        }
        /**
         * Negative values don't yield correct results when dividing, so pass them through an unsigned truncate().
         */
        dst = this.truncate(dst, 0, true);
        src = this.truncate(src, 0, true);
        return ((((dst / Debugger.TWO_POW32)|0) ^ ((src / Debugger.TWO_POW32)|0)) * Debugger.TWO_POW32) + ((dst ^ src) >>> 0);
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
     * @this {Debugger}
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
            case '_':
            case '^_':
                valNew = val1;
                /**
                 * While we always try to avoid assuming any particular number of bits of precision, the 'B' shift
                 * operator (which we've converted to '^_') is unique to the MACRO-10 environment, which imposes the
                 * following restrictions on the shift count.
                 */
                if (chOp == '^_') val2 = 35 - (val2 & 0xff);
                if (val2) {
                    /**
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
     * @this {Debugger}
     * @param {Array.<string>} asValues
     * @param {number} iValue
     * @param {number} iLimit
     * @param {number} nBase
     * @param {Array} [aUndefined]
     * @returns {number|undefined}
     */
    parseArray(asValues, iValue, iLimit, nBase, aUndefined)
    {
        let value;
        let sValue, sOp;
        let fError = false;
        let unary = 0;
        let aVals = [], aOps = [];

        let nBasePrev = this.nDefaultRadix;
        this.nDefaultRadix = nBase;

        while (iValue < iLimit) {
            let v;
            sValue = asValues[iValue++].trim();
            sOp = (iValue < iLimit? asValues[iValue++] : "");

            if (sValue) {
                v = this.parseValue(sValue, undefined, aUndefined, unary);
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
                    v = this.parseArray(asValues, iStart, iValue-1, this.nDefaultRadix, aUndefined);
                    if (v != null && unary) {
                        v = this.parseUnary(v, unary);
                    }
                    sValue = (iValue < iLimit? asValues[iValue++].trim() : "");
                    sOp = (iValue < iLimit? asValues[iValue++] : "");
                }
                else {
                    /**
                     * When parseExpression() calls us, it has collapsed all runs of whitespace into single spaces,
                     * and although it allows single spaces to divide the elements of the expression, a space is neither
                     * a unary nor binary operator.  It's essentially a no-op.  If we encounter it here, then it followed
                     * another operator and is easily ignored (although perhaps it should still trigger a reset of nBase
                     * and unary -- TBD).
                     */
                    if (sOp == ' ') {
                        continue;
                    }
                    if (sOp == '^B') {
                        this.nDefaultRadix = 2;
                        continue;
                    }
                    if (sOp == '^O') {
                        this.nDefaultRadix = 8;
                        continue;
                    }
                    if (sOp == '^D') {
                        this.nDefaultRadix = 10;
                        continue;
                    }
                    if (!(unary & (0xC0000000|0))) {
                        if (sOp == '+') {
                            continue;
                        }
                        if (sOp == '-') {
                            unary = (unary << 2) | 1;
                            continue;
                        }
                        if (sOp == '~' || sOp == '^-') {
                            unary = (unary << 2) | 2;
                            continue;
                        }
                        if (sOp == '^L') {
                            unary = (unary << 2) | 3;
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
                    // aUndefined = [];
                    break;
                }
            }

            aVals.push(this.truncate(v));

            /**
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

            let aBinOp = (this.achGroup[0] == '<'? Debugger.DECOP_PRECEDENCE : Debugger.BINOP_PRECEDENCE);
            if (!aBinOp[sOp]) {
                fError = true;
                break;
            }
            if (aOps.length && aBinOp[sOp] <= aBinOp[aOps[aOps.length - 1]]) {
                this.evalOps(aVals, aOps, 1);
            }
            aOps.push(sOp);

            /**
             * The MACRO-10 binary shifting operator assumes a base-10 shift count, regardless of the current
             * base, so we must override the current base to ensure the count is parsed correctly.
             */
            this.nDefaultRadix = (sOp == '^_')? 10 : nBase;
            unary = 0;
        }

        if (fError || !this.evalOps(aVals, aOps) || aVals.length != 1) {
            fError = true;
        }

        if (!fError) {
            value = aVals.pop();

        } else if (!aUndefined) {
            this.printf("parse error (%s)\n", (sValue || sOp));
        }

        this.nDefaultRadix = nBasePrev;
        return value;
    }

    /**
     * parseASCII(expr, chDelim, nBits)
     *
     * @this {Debugger}
     * @param {string} expr
     * @param {string} chDelim
     * @param {number} nBits (number of bits to store for each ASCII character)
     * @returns {string|undefined}
     */
    parseASCII(expr, chDelim, nBits)
    {
        let i;
        let cchMax = (this.nDefaultBits / nBits)|0;
        while ((i = expr.indexOf(chDelim)) >= 0) {
            let v = 0;
            let j = i + 1;
            let cch = cchMax;
            while (j < expr.length) {
                let ch = expr[j++];
                if (ch == chDelim) {
                    cch = -1;
                    break;
                }
                if (!cch) break;
                cch--;
                let c = ch.charCodeAt(0);
                if (nBits == 6) {
                    c -= 0x20;
                }
                c &= ((1 << nBits) - 1);
                v = this.truncate(v * Math.pow(2, nBits) + c, nBits * cchMax, true);
            }
            if (cch >= 0) {
                this.printf("parse error (%c%s%c)\n", chDelim, expr, chDelim);
                return undefined;
            } else {
                expr = expr.substr(0, i) + this.toBase(v) + expr.substr(j);
            }
        }
        return expr;
    }

    /**
     * parseExpression(expr, aUndefined)
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
     * aUndefined can be used to pass an array that collects any undefined variables that parseExpression()
     * encounters; the value of an undefined variable is zero.  This mode was added for components that need
     * to support expressions containing "fixups" (ie, values that must be determined later).
     *
     * @this {Debugger}
     * @param {string|undefined} expr
     * @param {Array} [aUndefined] (collects any undefined variables)
     * @returns {number|undefined} numeric value, or undefined if expr contains any undefined or invalid values
     */
    parseExpression(expr, aUndefined)
    {
        let value;
        if (expr) {
            /**
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
                expr = expr.split(this.achGroup[0]).join('{').split(this.achGroup[1]).join('}');
            }

            /**
             * Quoted ASCII characters can have a numeric value, too, which must be converted now, to avoid any
             * conflicts with the operators below.
             *
             * NOTE: MACRO-10 packs up to 5 7-bit ASCII codes from a double-quoted value, and up to 6 6-bit ASCII
             * (SIXBIT) codes from a single-quoted value.
             */
            expr = this.parseASCII(expr, '"', this.nASCIIBits);
            if (!expr) return value;
            expr = this.parseASCII(expr, "'", 6);
            if (!expr) return value;

            /**
             * All browsers (including, I believe, IE9 and up) support the following idiosyncrasy of a RegExp split():
             * when the RegExp uses a capturing pattern, the resulting array will include entries for all the pattern
             * matches along with the non-matches.  This effectively means that, in the set of expressions that we
             * support, all even entries in asValues will contain "values" and all odd entries will contain "operators".
             *
             * Although I started listing the operators in the RegExp in "precedential" order, that's not important;
             * what IS important is listing operators that contain shorter operators first.  For example, bitwise
             * shift operators must be listed BEFORE the logical less-than or greater-than operators.  The aBinOp tables
             * (BINOP_PRECEDENCE and DECOP_PRECEDENCE) are what determine precedence, not the RegExp.
             *
             * Also, to better accommodate MACRO-10 syntax, I've replaced the single '^' for XOR with '^!', and I've
             * added '!' as an alias for '|' (bitwise inclusive-or), '^-' as an alias for '~' (one's complement operator),
             * and '_' as a shift operator (+/- values specify a left/right shift, and the count is not limited to 32).
             *
             * And to avoid conflicts with MACRO-10 syntax, I've replaced the original mod operator ('%') with '^/'.
             *
             * The MACRO-10 binary shifting suffix ('B') is a bit more problematic, since a capital B can also appear
             * inside symbols, or inside hex values.  So if the default base is NOT 16, then I pre-scan for that suffix
             * and replace all non-symbolic occurrences with an internal shift operator ('^_').
             *
             * Note that parseInt(), which parseValue() relies on, supports both the MACRO-10 base prefix overrides
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
            let regExp = /({|}|\|\||&&|\||\^!|\^B|\^O|\^D|\^L|\^-|~|\^_|_|&|!=|!|==|>=|>>>|>>|>|<=|<<|<|-|\+|\^\/|\/|\*|,,| )/;
            if (this.nDefaultRadix != 16) {
                expr = expr.replace(/(^|[^A-Z0-9$%.])([0-9]+)B/, "$1$2^_").replace(/\s+/g, ' ');
            }
            let asValues = expr.split(regExp);
            value = this.parseArray(asValues, 0, asValues.length, this.nDefaultRadix, aUndefined);
        }
        return value;
    }

    /**
     * parseUnary(value, unary)
     *
     * unary is actually a small "stack" of unary operations encoded in successive pairs of bits.
     * As parseExpression() encounters each unary operator, unary is shifted left 2 bits, and the
     * new unary operator is encoded in bits 0 and 1 (0b00 is none, 0b01 is negate, 0b10 is complement,
     * and 0b11 is reserved).  Here, we process the bits in reverse order (hence the stack-like nature),
     * ensuring that we process the unary operators associated with this value right-to-left.
     *
     * Since bitwise operators see only 32 bits, more than 16 unary operators cannot be supported
     * using this method.  We'll let parseExpression() worry about that; if it ever happens in practice,
     * then we'll have to switch to a more "expensive" approach (eg, an actual array of unary operators).
     *
     * @this {Debugger}
     * @param {number} value
     * @param {number} unary
     * @returns {number}
     */
    parseUnary(value, unary)
    {
        while (unary) {
            let bit;
            switch(unary & 0o3) {
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
            unary >>>= 2;
        }
        return value;
    }

    /**
     * parseValue(sValue, sName, aUndefined, unary)
     *
     * @this {Debugger}
     * @param {string} [sValue]
     * @param {string} [sName] is the name of the value, if any
     * @param {Array} [aUndefined]
     * @param {number} [unary] (0 for none, 1 for negate, 2 for complement, 3 for leading zeros)
     * @returns {number|undefined} numeric value, or undefined if sValue is either undefined or invalid
     */
    parseValue(sValue, sName, aUndefined, unary = 0)
    {
        let value;
        if (sValue != undefined) {
            value = this.getRegister(sValue.toUpperCase());
            if (value == undefined) {
                value = this.getSymbol(sValue);
                if (value == undefined) {
                    value = this.getVariable(sValue);
                    if (value == undefined) {
                        /**
                         * A feature of MACRO-10 is that any single-digit number is automatically interpreted as base-10.
                         */
                        value = this.parseInt(sValue, sValue.length > 1 || this.nDefaultRadix > 10? this.nDefaultRadix : 10);
                    } else {
                        let sUndefined = this.getVariableFixup(sValue);
                        if (sUndefined) {
                            if (aUndefined) {
                                aUndefined.push(sUndefined);
                            } else {
                                let valueUndefined = this.parseExpression(sUndefined, aUndefined);
                                if (valueUndefined !== undefined) {
                                    value += valueUndefined;
                                } else {
                                    if (Debugger.MAXDEBUG) this.printf("undefined %s: %s (%s)\n", (sName || "value"), sValue, sUndefined);
                                    value = undefined;
                                }
                            }
                        }
                    }
                }
            }
            if (value != undefined) {
                value = this.truncate(this.parseUnary(value, unary));
            } else {
                if (Debugger.MAXDEBUG) this.printf("invalid %s: %s\n", (sName || "value"), sValue);
            }
        } else {
            if (Debugger.MAXDEBUG) this.printf("missing %s\n", (sName || "value"));
        }
        return value;
    }

    /**
     * truncate(v, nBits, fUnsigned)
     *
     * @this {Debugger}
     * @param {number} v
     * @param {number} [nBits]
     * @param {boolean} [fUnsigned]
     * @returns {number}
     */
    truncate(v, nBits, fUnsigned)
    {
        let limit, vNew = v;
        nBits = nBits || this.nDefaultBits;

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
            if (Debugger.MAXDEBUG) this.printf("warning: value %d truncated to %d\n", v, vNew);
            v = vNew;
        }
        return v;
    }

    /**
     * addBreakAddress(address, aBreakAddress)
     *
     * @this {Debugger}
     * @param {Address} address
     * @param {Array} aBreakAddress
     * @returns {number} (>= 0 if added, < 0 if not)
     */
    addBreakAddress(address, aBreakAddress)
    {
        let entry = this.findBreakEntry(address, aBreakAddress);
        if (entry >= 0) {
            entry = -(entry + 1);
        } else {
            for (entry = 0; entry < aBreakAddress.length; entry++) {
                if (aBreakAddress[entry] == undefined) break;
            }
            aBreakAddress[entry] = address;
        }
        return entry;
    }

    /**
     * addBreakIndex(type, entry)
     *
     * @this {Debugger}
     * @param {number} type
     * @param {number} entry
     * @returns {number} (new index)
     */
    addBreakIndex(type, entry)
    {
        let index;
        for (index = 0; index < this.aBreakIndexes.length; index++) {
            if (this.aBreakIndexes[index] == undefined) break;
        }
        this.aBreakIndexes[index] = (type << 8) | entry;
        return index;
    }

    /**
     * clearBreak(index)
     *
     * @this {Debugger}
     * @param {number} index
     * @returns {string}
     */
    clearBreak(index)
    {
        if (index < -1) {
            return this.enumBreak(this.clearBreak);
        }
        let isEmpty = function(aBreaks) {
            for (let i = 0; i < aBreaks.length; i++) {
                if (aBreaks[i] != undefined) return false;
            }
            return true;
        };
        let result = "";
        if (index >= 0) {
            let mapping = this.aBreakIndexes[index];
            if (mapping != undefined) {
                let type = mapping >> 8;
                let entry = mapping & 0xff;
                let bus = this.aBreakBuses[type];
                if (!bus) {
                    result = "invalid bus";
                } else {
                    let success;
                    let aBreakAddress = this.aaBreakAddress[type];
                    let address = aBreakAddress[entry];

                    if (!(type & 1)) {
                        success = bus.untrapRead(address.off, this.aBreakChecks[type]);
                    } else {
                        success = bus.untrapWrite(address.off, this.aBreakChecks[type]);
                    }
                    if (success) {
                        aBreakAddress[entry] = undefined;
                        this.aBreakIndexes[index] = undefined;
                        if (isEmpty(aBreakAddress)) {
                            aBreakAddress.length = 0;
                            if (isEmpty(this.aBreakIndexes)) {
                                this.aBreakIndexes.length = 0;
                            }
                        }
                        result = this.sprintf("%2d: %s %*a cleared\n", index, Debugger.BREAKCMD[type], bus.addrWidth, address);
                        if (!--this.cBreaks) {
                            if (!this.historyForced) result += this.enableHistory(false);
                        }

                    } else {
                        result = this.sprintf("invalid break address: %*a\n", bus.addrWidth, address);
                    }
                }
            } else {
                result = this.sprintf("invalid break index: %d\n", index);
            }
        } else {
            result = "missing break index\n";
        }
        return result;
    }

    /**
     * clearTemp(addr)
     *
     * Clears the current temporary break address if it matches the specified physical address.
     *
     * @this {Debugger}
     * @param {number} [addr]
     */
    clearTemp(addr)
    {
        if (this.tempBreak) {                   // if there's a previous temp break address
            if (addr == undefined || this.tempBreak.off == addr) {
                let index = this.findBreak(this.tempBreak);
                if (index >= 0) {               // and it wasn't already cleared via other means
                    this.clearBreak(index);     // then clear it now
                }
                this.tempBreak = null;
            }
        }
    }

    /**
     * enableBreak(index, enable)
     *
     * @this {Debugger}
     * @param {number} index
     * @param {boolean} [enable]
     * @returns {string}
     */
    enableBreak(index, enable = false)
    {
        if (index < -1) {
            return this.enumBreak(this.enableBreak, enable);
        }
        let result = "";
        if (index >= 0) {
            let mapping = this.aBreakIndexes[index];
            if (mapping != undefined) {
                let success = true;
                let type = mapping >> 8;
                let entry = mapping & 0xff;
                let aBreakAddress = this.aaBreakAddress[type];
                let address = aBreakAddress[entry];
                if (address != undefined) {
                    let action = enable? "enabled" : "disabled";
                    let bus = this.aBreakBuses[type];
                    if (!address.disabled == !enable) {
                        address.disabled = !enable;
                        result = this.sprintf("%2d: %s %*a %s\n", index, Debugger.BREAKCMD[type], bus.addrWidth, address, action);
                    } else {
                        result = this.sprintf("%2d: %s %*a already %s\n", index, Debugger.BREAKCMD[type], bus.addrWidth, address, action);
                    }
                } else {
                    result = this.sprintf("no break address at index: %d\n", index);

                }
            } else {
                result = this.sprintf("invalid break index: %d\n", index);
            }
        } else {
            result = "missing break index\n";
        }
        return result;
    }

    /**
     * enumBreak(func, option)
     *
     * @param {function(number,(boolean|undefined))} func
     * @param {boolean} [option]
     * @returns {string}
     */
    enumBreak(func, option)
    {
        let result = "";
        for (let index = 0; index < this.aBreakIndexes.length; index++) {
            if (this.aBreakIndexes[index] == undefined) continue;
            result += func.call(this, index, option);
        }
        if (!result) result = "no break addresses found";
        return result;
    }

    /**
     * findBreak(address, type)
     *
     * @this {Debugger}
     * @param {Address} address
     * @param {number} [type] (default is BREAKTYPE.READ)
     * @returns {number} (index of break address, -1 if not found)
     */
    findBreak(address, type = Debugger.BREAKTYPE.READ)
    {
        let index = -1;
        let entry = this.findBreakEntry(address, this.aaBreakAddress[type]);
        if (entry >= 0) {
            for (let i = 0; i < this.aBreakIndexes.length; i++) {
                let mapping = this.aBreakIndexes[i];
                if (mapping != undefined && type == (mapping >> 8) && entry == (mapping & 0xff)) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }

    /**
     * findBreakAddr(addr, type)
     *
     * @this {Debugger}
     * @param {number} addr
     * @param {number} [type] (default is BREAKTYPE.READ)
     * @returns {Address|undefined} (matching break Address, undefined if not found)
     */
    findBreakAddr(addr, type = Debugger.BREAKTYPE.READ)
    {
        let aBreakAddress = this.aaBreakAddress[type];
        for (let i = 0; i < aBreakAddress.length; i++) {
            let address = aBreakAddress[i];
            if (address.off == addr) return address;
        }
        return undefined;
    }

    /**
     * findBreakEntry(address, aBreakAddress)
     *
     * @this {Debugger}
     * @param {Address} address
     * @param {Array} aBreakAddress
     * @returns {number} (matching break Address entry, -1 if not found)
     */
    findBreakEntry(address, aBreakAddress)
    {
        for (let i = 0; i < aBreakAddress.length; i++) {
            if (aBreakAddress[i].off == address.off) return i;
        }
        return -1;
    }

    /**
     * listBreak(fCommands)
     *
     * @this {Debugger}
     * @param {boolean} [fCommands] (true to generate a list of break commands for saveState())
     * @returns {string}
     */
    listBreak(fCommands = false)
    {
        let result = "";
        for (let index = 0; index < this.aBreakIndexes.length; index++) {
            let mapping = this.aBreakIndexes[index];
            if (mapping == undefined) continue;
            let type = mapping >> 8;
            let entry = mapping & 0xff;
            let address = this.aaBreakAddress[type][entry];
            let bus = this.aBreakBuses[type];
            let command = this.sprintf("%s %*a", Debugger.BREAKCMD[type], bus.addrWidth, address);
            if (fCommands) {
                if (result) result += ';';
                result += command;
                if (address.disabled) result += ";bd " + index;
            } else {
                result += this.sprintf("%2d: %s %s\n", index, command, address.disabled? "disabled" : "enabled");
            }
        }
        if (!result) {
            if (!fCommands) result = "no break addresses found\n";
        }
        return result;
    }

    /**
     * setBreak(address, type)
     *
     * @this {Debugger}
     * @param {Address} [address]
     * @param {number} [type] (default is BREAKTYPE.READ)
     * @returns {string}
     */
    setBreak(address, type = Debugger.BREAKTYPE.READ)
    {
        let result = "";
        if (address) {
            let success;
            let bus = this.aBreakBuses[type];
            if (!bus) {
                result = "invalid bus";
            } else {
                let entry = this.addBreakAddress(address, this.aaBreakAddress[type]);
                if (entry >= 0) {
                    if (!(type & 1)) {
                        success = bus.trapRead(address.off, this.aBreakChecks[type]);
                    } else {
                        success = bus.trapWrite(address.off, this.aBreakChecks[type]);
                    }
                    if (success) {
                        let index = this.addBreakIndex(type, entry);
                        result = this.sprintf("%2d: %s %*a set\n", index, Debugger.BREAKCMD[type], bus.addrWidth, address);
                        if (!this.cBreaks++) {
                            if (!this.historyBuffer.length) result += this.enableHistory(true);
                        }
                    } else {
                        result = this.sprintf("invalid break address: %*a\n", bus.addrWidth, address);
                        this.aaBreakAddress[type][entry] = undefined;
                    }
                } else {
                    result = this.sprintf("%s %*a already set\n", Debugger.BREAKCMD[type], bus.addrWidth, address);
                }
            }
        } else {
            result = "missing break address\n";
        }
        return result;
    }

    /**
     * setBreakCounter(n)
     *
     * Set number of instructions to execute before breaking.
     *
     * @this {Debugger}
     * @param {number} n (-1 if no number was supplied, so just display current counter)
     * @returns {string}
     */
    setBreakCounter(n)
    {
        let result = "";
        if (n >= 0) this.counterBreak = n;
        result += "instruction break count: " + (this.counterBreak > 0? this.counterBreak : "disabled") + "\n";
        if (n > 0) {
            /**
             * It doesn't hurt to always call enableHistory(), but avoiding the call minimizes unnecessary messages.
             */
            if (!this.historyBuffer.length) result += this.enableHistory(true);
            this.historyForced = true;
        }
        return result;
    }

    /**
     * setBreakMessage(option)
     *
     * Set message(s) to break on when we are notified of being printed.
     *
     * @this {Debugger}
     * @param {string} option
     * @returns {string}
     */
    setBreakMessage(option)
    {
        let result;
        if (option) {
            let on = this.parseBoolean(option);
            if (on != undefined) {
                this.messagesBreak = on? MESSAGE.ALL : MESSAGE.NONE;
            } else {
                result = this.sprintf("unrecognized message option: %s\n", option);
            }
        }
        if (!result) {
            result = this.sprintf("break on message: %b\n", !!this.messagesBreak);
        }
        return result;
    }

    /**
     * setTemp(address)
     *
     * @this {Debugger}
     * @param {Address} address
     */
    setTemp(address)
    {
        this.tempBreak = address;
    }

    /**
     * checkInput(base, offset, value)
     *
     * @this {Debugger}
     * @param {number|undefined} base
     * @param {number} offset
     * @param {number} value
     */
    checkInput(base, offset, value)
    {
        if (this.cBreakIgnore) return;
        if (base == undefined) {
            this.stopCPU("break on unknown input %#0x: %#0x", offset, value);
        } else {
            let addr = base + offset;
            let address = this.findBreakAddr(addr, Debugger.BREAKTYPE.INPUT);
            if (address && !address.disabled) {
                this.stopCPU("break on input %*a: %#0x", this.busIO.addrWidth, address, value);
            }
        }
    }

    /**
     * checkOutput(base, offset, value)
     *
     * @this {Debugger}
     * @param {number|undefined} base
     * @param {number} offset
     * @param {number} value
     */
    checkOutput(base, offset, value)
    {
        if (this.cBreakIgnore) return;
        if (base == undefined) {
            this.stopCPU("break on unknown output %#0x: %#0x", offset, value);
        } else {
            let addr = base + offset;
            let address = this.findBreakAddr(addr, Debugger.BREAKTYPE.OUTPUT);
            if (address && !address.disabled) {
                this.stopCPU("break on output %*a: %#0x", this.busIO.addrWidth, address, value);
            }
        }
    }

    /**
     * checkRead(base, offset, value)
     *
     * If historyBuffer has been allocated, then we need to record all instruction fetches, which we
     * distinguish as reads where the physical address matches cpu.regPCLast.
     *
     * TODO: Additional logic will be required for machines where the logical PC differs from the physical
     * address (eg, machines with segmentation or paging enabled), but that's an issue for another day.
     *
     * @this {Debugger}
     * @param {number|undefined} base
     * @param {number} offset
     * @param {number} value
     */
    checkRead(base, offset, value)
    {
        if (this.cBreakIgnore) return;
        if (base == undefined) {
            this.stopCPU("break on unknown read %#0x: %#0x", offset, value);
        } else {
            let addr = base + offset;
            if (this.historyBuffer.length) {
                if (addr == this.cpu.regPCLast) {
                    this.cInstructions++;
                    if (this.counterBreak > 0) {
                        if (!--this.counterBreak) {
                            this.stopCPU("break on instruction count");
                        }
                    }
                    this.historyBuffer[this.historyNext++] = addr;
                    if (this.historyNext == this.historyBuffer.length) this.historyNext = 0;
                }
            }
            let address = this.findBreakAddr(addr, Debugger.BREAKTYPE.READ);
            if (address && !address.disabled) {
                this.stopCPU("break on read %*a: %#0x", this.busMemory.addrWidth, address, value);
                this.clearTemp(addr);
            }
        }
    }

    /**
     * checkWrite(base, offset, value)
     *
     * @this {Debugger}
     * @param {number|undefined} base
     * @param {number} offset
     * @param {number} value
     */
    checkWrite(base, offset, value)
    {
        if (this.cBreakIgnore) return;
        if (base == undefined) {
            this.stopCPU("break on unknown write %#0x: %#0x", offset, value);
        } else {
            let addr = base + offset;
            let address = this.findBreakAddr(addr, Debugger.BREAKTYPE.WRITE);
            if (address && !address.disabled) {
                this.stopCPU("break on write %*a: %#0x", this.busMemory.addrWidth, address, value);
            }
        }
    }

    /**
     * checkVirtualRead(addrVirtual, length)
     *
     * @this {Debugger}
     * @param {number} addrVirtual
     * @param {number} length
     */
    checkVirtualRead(addrVirtual, length)
    {
    }

    /**
     * checkVirtualWrite(addrVirtual, length)
     *
     * @this {Debugger}
     * @param {number} addrVirtual
     * @param {number} length
     */
    checkVirtualWrite(addrVirtual, length)
    {
    }

    /**
     * stopCPU(message, ...args)
     *
     * @this {Debugger}
     * @param {string} message
     * @param {...} [args]
     */
    stopCPU(message, ...args)
    {
        message = this.sprintf(message, ...args);
        if (this.time.isRunning() && this.fExceptionOnBreak) {
            /**
             * We don't print the message in this case, because the CPU's exception handler already
             * does that; it has to be prepared for any kind of exception, not just those that we throw.
             */
            throw new Error(message);
        }
        this.printf("%s\n", message);
        this.time.stop();
    }

    /**
     * dumpAddress(address, bus)
     *
     * All this function currently supports are physical (Bus) addresses, but that will change.
     *
     * @this {Debugger}
     * @param {Address} address
     * @param {Bus} [bus] (default is busMemory)
     * @returns {string}
     */
    dumpAddress(address, bus = this.busMemory)
    {
        return this.toBase(address.off, this.nDefaultRadix, bus.addrWidth, "");
    }

    /**
     * dumpHistory(index)
     *
     * The index parameter is interpreted as the number of instructions to rewind; if you also
     * specify a length, then that limits the number of instructions to display from the index point.
     *
     * @this {Debugger}
     * @param {number} index
     * @param {number} [length]
     * @returns {string}
     */
    dumpHistory(index, length = 10)
    {
        let result = "";
        if (this.historyBuffer.length) {
            let address, opcodes = [];
            if (length > this.historyBuffer.length) {
                length = this.historyBuffer.length;
            }
            if (index < 0) index = length;
            let i = this.historyNext - index;
            if (i < 0) i += this.historyBuffer.length;
            while (i >= 0 && i < this.historyBuffer.length && length > 0) {
                let addr = this.historyBuffer[i++];
                if (addr == undefined) break;
                if (i == this.historyBuffer.length) i = 0;
                if (address) {
                    address.off = addr;
                } else {
                    address = this.newAddress(addr);
                }
                for (let j = 0; j < this.maxOpcodeLength; j++) {
                    opcodes[j] = this.readAddress(address, 1);
                }
                this.addAddress(address, -opcodes.length);
                result += this.unassemble(address, opcodes, this.sprintf("[%6d]", index--));
                length--;
            }
        }
        return result || "no history";
    }

    /**
     * dumpInstruction(address, length)
     *
     * @this {Debugger}
     * @param {Address|number} address
     * @param {number} length
     * @returns {string}
     */
    dumpInstruction(address, length)
    {
        let opcodes = [], result = "";
        address = this.makeAddress(address);
        while (length--) {
            this.addAddress(address, opcodes.length);
            while (opcodes.length < this.maxOpcodeLength) {
                opcodes.push(this.readAddress(address, 1));
            }
            this.addAddress(address, -opcodes.length);
            result += this.unassemble(address, opcodes);
        }
        return result;
    }

    /**
     * dumpMemory(address, bits, length, format, ioBus)
     *
     * @this {Debugger}
     * @param {Address} [address] (default is addressData; advanced by the length of the dump)
     * @param {number} [bits] (default size is the memory bus data width; e.g., 8 bits)
     * @param {number} [length] (default length of dump is 128 values)
     * @param {string} [format] (formatting options; only 'y' for binary output is currently supported)
     * @param {boolean} [useIO] (true for busIO; default is busMemory)
     * @returns {string}
     */
    dumpMemory(address, bits, length, format, useIO)
    {
        let result = "";
        let bus = useIO? this.busIO : this.busMemory;
        if (!bits) bits = bus.dataWidth;
        let size = bits >> 3;
        if (!length) length = 128;
        let fASCII = false, cchBinary = 0;
        let cLines = ((length + 15) >> 4) || 1;
        let cbLine = (size == 4? 16 : this.nDefaultRadix);
        if (format == 'y') {
            cbLine = size;
            cLines = length;
            cchBinary = size * 8;
        }
        if (!address) address = this.addressData;
        while (cLines-- && length > 0) {
            let data = 0, iByte = 0, i;
            let sData = "", sChars = "";
            let sAddress = this.dumpAddress(address, bus);
            for (i = cbLine; i > 0 && length > 0; i--) {
                let b = this.readAddress(address, 1, bus);
                if (bus.littleEndian === false) {
                    data = ((data << 8) | b) >>> 0;
                    iByte++;
                } else {
                    data |= (b << (iByte++ << 3));
                }
                if (iByte == size) {
                    sData += this.toBase(data, 0, bits, "");
                    sData += (size == 1? (i == 9? '-' : ' ') : " ");
                    if (cchBinary) sChars += this.toBase(data, 2, bits, "");
                    data = iByte = 0;
                }
                if (!cchBinary) sChars += (b >= 32 && b < 127? String.fromCharCode(b) : (fASCII? '' : '.'));
                length--;
            }
            if (result) result += '\n';
            if (fASCII) {
                result += sChars;
            } else {
                result += sAddress + "  " + sData + " " + sChars;
            }
        }
        this.addressData = address;
        return result;
    }

    /**
     * dumpState()
     *
     * Simulate what the Machine class does to obtain the current state of the entire machine.
     *
     * @this {Debugger}
     * @returns {string}
     */
    dumpState()
    {
        let state = [];
        this.enumDevices(function enumDevice(device) {
            if (device.onSave) device.onSave(state);
            return true;
        });
        return JSON.stringify(state, null, 2);
    }

    /**
     * editMemory(address, values, useIO)
     *
     * @this {Debugger}
     * @param {Address|undefined} address
     * @param {Array.<number>} values
     * @param {boolean} [useIO] (true for busIO; default is busMemory)
     * @returns {string}
     */
    editMemory(address, values, useIO)
    {
        let count = 0, result = "";
        let bus = useIO? this.busIO : this.busMemory;
        for (let i = 0; address != undefined && i < values.length; i++) {
            let prev = this.readAddress(address, 0, bus);
            if (prev == undefined) break;
            this.writeAddress(address, values[i], bus);
            result += this.sprintf("%*a: %#*n changed to %#*n\n", this.busMemory.addrWidth, address, this.busMemory.dataWidth, prev, this.busMemory.dataWidth, values[i]);
            this.addAddress(address, 1, bus);
            count++;
        }
        if (!count) result += this.sprintf("%d locations updated\n", count);
        this.time.update();
        return result;
    }

    /**
     * enableHistory(enable)
     *
     * History refers to instruction execution history, which means we want to trap every read where
     * the requested address is the first byte of an instruction.  So if history is being enabled, we
     * preallocate an array to record every such physical address.
     *
     * The upside to this approach is that no special hooks are required inside the CPU, since we are
     * simply leveraging the Bus' ability to use different read handlers for all ROM and RAM blocks.
     *
     * @this {Debugger}
     * @param {boolean} [enable] (if undefined, then we simply return the current history status)
     * @returns {string}
     */
    enableHistory(enable)
    {
        let result = "";
        if (enable != undefined) {
            if (enable == !this.historyBuffer.length) {
                let cBlocks = 0;
                cBlocks += this.busMemory.enumBlocks(Memory.TYPE.READABLE, (block) => {
                    if (enable) {
                        this.busMemory.trapRead(block.addr, this.aBreakChecks[Debugger.BREAKTYPE.READ]);
                    } else {
                        this.busMemory.untrapRead(block.addr, this.aBreakChecks[Debugger.BREAKTYPE.READ]);
                    }
                });
                if (cBlocks) {
                    if (enable) {
                        this.historyNext = 0;
                        this.historyBuffer = new Array(Debugger.HISTORY_LIMIT);
                    } else {
                        this.historyBuffer = [];
                    }
                }
            }
        }
        result += this.sprintf("instruction history %s\n", this.historyBuffer.length? "enabled" : "disabled");
        return result;
    }

    /**
     * loadState(state)
     *
     * @this {Debugger}
     * @param {Array} state
     * @returns {boolean}
     */
    loadState(state)
    {
        let idDevice = state.shift();
        if (this.idDevice == idDevice) {
            this.parseCommands(state.shift());
            this.machine.messages = state.shift();
            return true;
        }
        return false;
    }

    /**
     * notifyMessage(messages)
     *
     * Provides the Debugger with a notification whenever a message is being printed, along with the messages bits;
     * if any of those bits are set in messagesBreak, we break (ie, we stop the CPU).
     *
     * @this {Debugger}
     * @param {number} messages
     */
    notifyMessage(messages)
    {
        if (this.testBits(this.messagesBreak, messages)) {
            this.stopCPU("break on message");
            return;
        }
        /**
         * This is an effort to help keep the browser responsive when lots of messages are being generated.
         */
        this.time.yield();
    }

    /**
     * onCommand(aTokens)
     *
     * Processes basic debugger commands.
     *
     * @this {Debugger}
     * @param {Array.<string>} aTokens ([0] contains the entire command line; [1] and up contain tokens from the command)
     * @returns {string|undefined}
     */
    onCommand(aTokens)
    {
        let cmd = aTokens[1], option = aTokens[2], values = [], aUndefined = [];
        let expr, name, index, address, bits, length, enable, useIO = false, result = "";

        this.fStepQuietly = undefined;

        if (cmd == "save") {
            return this.saveMachine(option);
        }

        if (option == '*') {
            index = -2;
        } else {
            index = this.parseInt(option);
            if (index == undefined) index = -1;
            address = this.parseAddress(option, aUndefined);
            if (address === null) return undefined;
        }

        length = 0;
        if (aTokens[3]) {
            length = this.parseInt(aTokens[3].substr(aTokens[3][0] == 'l'? 1 : 0)) || 8;
        }
        for (let i = 3; i < aTokens.length; i++) values.push(this.parseInt(aTokens[i], 16));

        if (cmd == 'd') {
            let dump = this.checkDumper(option, values);
            if (dump != undefined) return dump;
            cmd = this.sDumpPrev || cmd;
        }

        /**
         * We refrain from reporting potentially undefined symbols until after we've checked for dump extensions.
         */
        if (cmd[0] != 's' && aUndefined.length) {
            return "unrecognized symbol(s): " + aUndefined;
        }

        switch(cmd[0]) {
        case 'b':
            if (cmd[1] == 'c') {
                result = this.clearBreak(index);
            } else if (cmd[1] == 'd') {
                result = this.enableBreak(index);
            } else if (cmd[1] == 'e') {
                result = this.enableBreak(index, true);
            } else if (cmd[1] == 'i') {
                result = this.setBreak(address, Debugger.BREAKTYPE.INPUT);
            } else if (cmd[1] == 'l') {
                result = this.listBreak();
            } else if (cmd[1] == 'm') {
                result = this.setBreakMessage(option);
            } else if (cmd[1] == 'n') {
                result = this.setBreakCounter(index);
            } else if (cmd[1] == 'o') {
                result = this.setBreak(address, Debugger.BREAKTYPE.OUTPUT);
            } else if (cmd[1] == 'r') {
                result = this.setBreak(address, Debugger.BREAKTYPE.READ);
            } else if (cmd[1] == 'w') {
                result = this.setBreak(address, Debugger.BREAKTYPE.WRITE);
            } else if (cmd[1] == '?') {
                result = "break commands:\n";
                Debugger.BREAK_COMMANDS.forEach((cmd) => {result += cmd + '\n';});
                break;
            } else if (cmd[1]) {
                result = undefined;
            }
            break;

        case 'd':
            this.sDumpPrev = cmd;
            if (cmd[1] == 'b' || !cmd[1]) {
                bits = 8;
            } else if (cmd[1] == 'w') {
                bits = 16;
            } else if (cmd[1] == 'd') {
                bits = 32;
            } else if (cmd[1] == 'i') {
                if (!this.busIO) {
                    result = "invalid bus";
                    break;
                }
                bits = this.busIO.dataWidth;
                length = length || 1;
                useIO = true;
            } else if (cmd[1] == 'h') {
                this.sDumpPrev = "";
                result = this.dumpHistory(index, length);
                break;
            } else if (cmd[1] == '?') {
                this.sDumpPrev = "";
                result = "dump commands:\n";
                Debugger.DUMP_COMMANDS.forEach((cmd) => {result += cmd + '\n';});
                if (this.aDumpers.length) {
                    result += "dump extensions:\n";
                    for (let i = 0; i < this.aDumpers.length; i++) {
                        let dumper = this.aDumpers[i];
                        result += this.sprintf("d   %-12s%s\n", dumper.name, dumper.desc);
                    }
                }
                break;
            } else {
                this.sDumpPrev = "";
                result = undefined;
                break;
            }
            result = this.dumpMemory(address, bits, length, cmd[2], useIO);
            break;

        case 'e':
            if (cmd[1] == 'o') {
                if (!this.busIO) {
                    result = "invalid bus";
                    break;
                }
                useIO = true;
            } else if (cmd[1]) {
                result = undefined;
                break;
            }
            result = this.editMemory(address, values, useIO);
            break;

        case 'g':
            if (this.time.start()) {
                if (address != undefined) {
                    this.clearTemp();
                    result = this.setBreak(address);
                    if (result.indexOf(':') != 2) break;
                    this.setTemp(address);
                    result = "";
                }
                break;
            }
            result = "already started\n";
            break;

        case 'h':
            if (!this.time.stop()) result = "already stopped\n";
            break;

        case 'p':
            aTokens.shift();
            aTokens.shift();
            expr = aTokens.join(' ');
            result += this.sprintf("%s = %s\n", expr, this.toBase(this.parseExpression(expr)));
            break;

        case 'r':
            name = cmd.substr(1).toUpperCase();
            if (name) {
                if (this.cpu.getRegister(name) == undefined) {
                    result += this.sprintf("unrecognized register: %s\n", name);
                    break;
                }
                if (address != undefined) this.cpu.setRegister(name, address.off);
            }
            this.setAddress(this.addressCode, this.cpu.regPC);
            result += this.cpu.toString();
            break;

        case 's':
            enable = this.parseBoolean(option);
            if (cmd[1] == 'h') {
                /**
                 * Don't let the user turn off history if any breaks (which may depend on history) are still set.
                 */
                if (this.cBreaks || this.counterBreak > 0) {
                    enable = undefined;     // this ensures enableHistory() will simply return the status, not change it.
                }
                result = this.enableHistory(enable);
                if (enable != undefined) this.historyForced = enable;
            } else if (cmd[1] == 'p') {
                if (index > 0) {
                    this.time.setSpeed(index);
                    result = "target speed:  " + this.time.getSpeedTarget();
                } else {
                    result = "current speed: " + this.time.getSpeedCurrent();
                }
            } else if (cmd[1] == 's' && this.styles) {
                index = this.styles.indexOf(option);
                if (index >= 0) this.style = this.styles[index];
                result = "style: " + this.style;
            } else if (cmd[1] == '?') {
                result = "set commands:\n";
                Debugger.SET_COMMANDS.forEach((cmd) => {result += cmd + '\n';});
                break;
            } else {
                result = undefined;
            }
            break;

        case 't':
            length = this.parseInt(option, 10) || 1;
            this.fStepQuietly = true;
            if (cmd[1]) {
                if (cmd[1] != 'r') {
                    result = undefined;
                    break;
                }
                this.fStepQuietly = false;
            }
            this.time.onStep(length);
            break;

        case 'u':
            if (cmd[1]) {
                result = undefined;
                break;
            }
            if (!length) length = 8;
            if (!address) address = this.addressCode;
            result += this.dumpInstruction(address, length);
            this.addressCode = address;
            break;

        case '?':
            result = "debugger commands:\n";
            Debugger.COMMANDS.forEach((cmd) => {result += cmd + '\n';});
            break;

        default:
            result = undefined;
            break;
        }

        if (result == undefined && aTokens[0]) {
            result = "unrecognized command '" + aTokens[0] + "' (try '?')\n";
        }

        return result;
    }

    /**
     * onLoad(state)
     *
     * Automatically called by the Machine device if the machine's 'autoSave' property is true.
     *
     * @this {Debugger}
     * @param {Array} state
     * @returns {boolean}
     */
    onLoad(state)
    {
        if (state) {
            let stateDbg = state[0];
            if (this.loadState(stateDbg)) {
                state.shift();
                return true;
            }
        }
        return false;
    }

    /**
     * onSave(state)
     *
     * Automatically called by the Machine device before all other devices have been powered down (eg, during
     * a page unload event).
     *
     * @this {Debugger}
     * @param {Array} state
     */
    onSave(state)
    {
        let stateDbg = [];
        this.saveState(stateDbg);
        state.push(stateDbg);
        this.cTransitions = 0;
    }

    /**
     * onUpdate(fTransition)
     *
     * @this {Debugger}
     * @param {boolean} [fTransition]
     */
    onUpdate(fTransition)
    {
        if (fTransition) {
            if (this.time.isRunning()) {
                this.restoreFocus();
            } else {
                if (this.fStepQuietly) {
                    this.print(this.dumpInstruction(this.cpu.regPC, 1));
                } else {
                    if (this.cInstructions) {
                        this.cpu.printf("%d instructions executed\n", this.cInstructions);
                        this.cInstructions = 0;
                    }
                    this.cpu.print(this.cpu.toString());
                    if (this.fStepQuietly == undefined) this.setFocus();
                }
            }
            this.cTransitions++;
        }
    }

    /**
     * saveMachine(sFileName)
     *
     * Saves the state of the entire machine (the same state the Machine saves in localStorage) as a JSON file,
     * which can then be used as the initial state of another machine (eg, via a 'state' property in the page's
     * machine Front Matter).  If the browser doesn't support downloads, the JSON is simply returned instead.
     *
     * @this {Debugger}
     * @param {string} [sFileName] (default is the machine ID with a ".json" extension)
     * @returns {string}
     */
    saveMachine(sFileName)
    {
        /**
         * Our own onSave() handler resets cTransitions (since it's normally called when the page is being unloaded),
         * so we preserve it here.
         */
        let cTransitions = this.cTransitions;
        let sState = JSON.stringify(this.machine.saveState());
        this.cTransitions = cTransitions;
        if (!sFileName) sFileName = this.idMachine;
        if (sFileName.indexOf('.') < 0) sFileName += ".json";
        if (this.downloadFile(sState, sFileName, "application/json")) {
            return this.sprintf("saved %d bytes to %s\n", sState.length, sFileName);
        }
        return sState + "\n";
    }

    /**
     * saveState(stateDbg)
     *
     * @this {Debugger}
     * @param {Array} stateDbg
     */
    saveState(stateDbg)
    {
        stateDbg.push(this.idDevice);
        stateDbg.push(this.listBreak(true));
        stateDbg.push(this.machine.messages);
    }

    /**
     * restoreFocus()
     *
     * We don't want to "rip" focus from the user if this is the first transition (ie, the page containing
     * the machine has just finished loading); we use a transition count as a simple way of achieving that.
     *
     * @this {Debugger}
     */
    restoreFocus()
    {
        if (this.cTransitions && this.input) this.input.setFocus();
    }

    /**
     * setFocus()
     *
     * @this {Debugger}
     */
    setFocus()
    {
        if (this.cTransitions) {
            let element = this.findBinding(Debugger.BINDING.PRINT, true);
            if (element) element.focus();
        }
    }

    /**
     * unassemble(address, opcodes, annotation)
     *
     * Returns a string representation of the selected instruction.  Since all processor-specific code
     * should be in the overriding function, all we can do here is display the address and an opcode.
     *
     * @this {Debugger}
     * @param {Address} address (advanced by the number of processed opcodes)
     * @param {Array.<number>} opcodes (each processed opcode is shifted out, reducing the size of the array)
     * @param {string} [annotation] (optional string to append to the final result)
     * @returns {string}
     */
    unassemble(address, opcodes, annotation)
    {
        let getNextOp = () => {
            let op = opcodes.shift();
            this.addAddress(address, 1);
            return op;
        };
        let sAddress = this.dumpAddress(address);
        return this.sprintf("%s %02x       unsupported       ; %s\n", sAddress, getNextOp(), annotation || "");
    }
}

// Debugger.CLASSES["Debugger"] = Debugger;

/**
 * @copyright https://www.pcjs.org/machines/motorola/68k/modules/v3/cpu68k.js (C) 2012-2026 Jeff Parsons
 */

/* eslint-disable no-labels */
/* eslint-disable no-extra-label */


/** @typedef {{ busMemory: string, addrReset: (number|undefined) }} */
let CPU68KConfig;

/** @typedef {{ checkInterrupts: function(boolean):boolean }} */
let HWRegs;

/**
 * 68K Emulator
 *
 * All registers (and all data values flowing through the EAMode classes) are maintained as signed 32-bit integers,
 * just like the original Java implementation, and all byte and word memory reads are sign-extended, again like Java's
 * GetByte() and GetWord().  Memory addresses are masked to 25 bits (see CPU68K.ADDR_MASK), which reproduces the 32Mb
 * address space replication that the original Java implementation (and the PalmOS ROMs it supported) relied upon.
 *
 * @class CPU68K
 * @unrestricted
 * @property {Bus} busMemory
 * @property {Input} inputDevice
 * @property {HWRegs|null} hwregs
 */
class CPU68K extends CPU
{
    /**
     * CPU68K(idMachine, idDevice, config)
     *
     * @this {CPU68K}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        /**
         * Get access to the Bus that provides access to physical memory.
         */
        this.busMemory = /** @type {Bus} */ (this.findDevice(this.config['busMemory']));

        /**
         * Get access to the Input device, so we can call setFocus() as needed.
         */
        this.inputDevice = /** @type {Input} */ (this.findDeviceByClass("Input", false));

        /**
         * The hardware register device (eg, PilotIO) that manages interrupts will connect itself via setHWRegs().
         */
        this.hwregs = null;

        /**
         * Initialize the CPU.
         */
        this.initCPU();
    }

    /**
     * execute(nCycles)
     *
     * Called from startClock() to execute a series of instructions.
     *
     * Executes the specified "burst" of instructions.  This code exists outside of the startClock() function
     * to ensure that its try/catch exception handler doesn't interfere with the optimization of this tight loop.
     *
     * In the original Java implementation, CPUThread.run() was responsible for calling ExecuteOpcodes() repeatedly,
     * checking for interrupts (CPU_CHECKINTS), and processing any exception that GenerateException() recorded before
     * throwing a Java exception (iPendingException).  Here, all of that is managed by this function.
     *
     * One difference: when the 68K executes a STOP instruction, the Java implementation would sleep briefly and then
     * resume execution after the STOP; here, the CPU remains stopped (simply consuming cycles) until an interrupt
     * is acknowledged, which is how the real hardware behaves.
     *
     * @this {CPU68K}
     * @param {number} nCycles
     */
    execute(nCycles)
    {
        this.nCyclesRemain = nCycles;

        while (this.nCyclesRemain > 0) {
            if (this.fCPU & (CPU68K.CPU_CHECKINTS | CPU68K.CPU_STOPPED)) {
                if ((this.fCPU & CPU68K.CPU_CHECKINTS) && this.hwregs && this.time.isRunning()) {
                    if (this.hwregs.checkInterrupts(true)) {
                        this.addCycles(44);
                    }
                }
                if ((this.fCPU & CPU68K.CPU_STOPPED) && (this.injection || this.aInjections.length)) {
                    this.checkInjections();
                }
                if (this.fCPU & CPU68K.CPU_STOPPED) {
                    this.nCyclesRemain = 0;
                    break;
                }
            }
            try {
                this.executeOpcodes();
            } catch(err) {
                if (err !== CPU68K.EXCEPTION_THROWN) throw err;
                this.processException();
            }
            if (this.fCPU & CPU68K.CPU_BREAKPOINT) {
                this.fCPU &= ~CPU68K.CPU_BREAKPOINT;
                break;
            }
        }
    }

    /**
     * startClock(nCycles)
     *
     * Overrides the CPU's startClock(), so that once a burst is complete, getClock() no longer reports the cycles
     * from that burst; otherwise, any device calling Time's getCycles() between bursts (eg, from a timer callback)
     * would see those cycles counted twice, since Time has already added them to its own cycle count.
     *
     * @this {CPU68K}
     * @param {number} [nCycles] (default is 0 to single-step)
     * @returns {number} (number of cycles actually "clocked")
     */
    startClock(nCycles = 0)
    {
        let nCyclesClocked = super.startClock(nCycles);
        this.nCyclesStart = this.nCyclesRemain = 0;
        return nCyclesClocked;
    }

    /**
     * executeOpcodes()
     *
     * This is the heart of the CPU, ported from ExecuteOpcodes() in CPUOps.java.  It executes instructions until
     * nCyclesRemain is exhausted or some condition in CPU_BREAKFLAGS occurs (eg, STOP or a change in interrupt state).
     *
     * @this {CPU68K}
     */
    executeOpcodes()
    {
        let aEAModes = this.aEAModes;
        let dataNew, dataTmp, cBits, cRegs, fCond;
        let op1, op2, reg, ss, rrr, nnn, eaModeSrc, eaModeDst, iModeSrc, iModeDst, iMask;

        while (this.nCyclesRemain > 0) {

            let nCyclesCur = this.nCyclesRemain;    // make sure the next opcode generates a non-zero cycle count

            this.regPCLast = this.regPC;        // update current opcode address
            op1 = this.getPCWord();             // get next instruction (don't forget this can be a signed integer if the opcode is a signed word)

            ss = 0;                             // (ssBYTE << 6)
            nnn = op1 & 0x7;
            rrr = (op1 >> 9) & 0x7;

    stage1: switch ((op1 >> 12) & 0xf) {

            case 0x0:
                //  case 0x0000:   ori      [00000000sswwwnnn, format ????????sswwwnnn, p.258]
                //  case 0x003c:   ori      [0000000000111100, format none,             p.260]
                //  case 0x007c:   ori      [0000000001111100, format none,             p.482]
                //  case 0x0100:   btst     [0000rrr100yyynnn, format ??????????yyynnn, p.166]
                //  case 0x0108:   movep    [0000rrr100001nnn, format none,             p.236]
                //  case 0x0140:   bchg     [0000rrr101bbbnnn, format ??????????bbbnnn, p.132]
                //  case 0x0148:   movep    [0000rrr101001nnn, format none,             p.236]
                //  case 0x0180:   bclr     [0000rrr110bbbnnn, format ??????????bbbnnn, p.135]
                //  case 0x0188:   movep    [0000rrr110001nnn, format none,             p.236]
                //  case 0x01c0:   bset     [0000rrr111bbbnnn, format ??????????bbbnnn, p.161]
                //  case 0x01c8:   movep    [0000rrr111001nnn, format none,             p.236]
                //  case 0x0200:   andi     [00000010sswwwnnn, format ????????sswwwnnn, p.123]
                //  case 0x023c:   andi     [0000001000111100, format none,             p.125]
                //  case 0x027c:   andi     [0000001001111100, format none,             p.457]
                //  case 0x0400:   subi     [00000100sswwwnnn, format ????????sswwwnnn, p.284]
                //  case 0x0600:   addi     [00000110sswwwnnn, format ????????sswwwnnn, p.114]
                //  case 0x0800:   btst     [0000100000zzznnn, format ??????????zzznnn, p.166]
                //  case 0x0840:   bchg     [0000100001bbbnnn, format ??????????bbbnnn, p.132]
                //  case 0x0880:   bclr     [0000100010bbbnnn, format ??????????bbbnnn, p.135]
                //  case 0x08c0:   bset     [0000100011bbbnnn, format ??????????bbbnnn, p.161]
                //  case 0x0a00:   eori     [00001010sswwwnnn, format ????????sswwwnnn, p.207]
                //  case 0x0a3c:   eori     [0000101000111100, format none,             p.209]
                //  case 0x0a7c:   eori     [0000101001111100, format none,             p.465]
                //  case 0x0c00:   cmpi     [00001100sswwwnnn, format ????????sswwwnnn, p.184]

                iModeSrc = CPU68K.EAMODEINDEX_DREG_LONG;

                switch ((op1 >> 8) & 0xf) {

                case 0x0:
                    //  case 0x0000:   ori      [....0000sswwwnnn, format ????????sswwwnnn, p.258]
                    //  case 0x003c:   ori      [....000000111100, format none,             p.260]
                    //  case 0x007c:   ori      [....000001111100, format none,             p.482]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_IMMEDIATE];
                    this.dataSrc = eaModeSrc.getEAData(0);
                    if ((op1 & 0x3f) != 0x3c) {
                        if (op1 == 0 && this.dataSrc == 0) {
                            // BUGBUG: This isn't really an illegal instruction, but it probably
                            // wouldn't be found under normal circumstances, so let's help ourselves
                            // out by flagging it as an illegal instruction for now.... -JP
                            this.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
                        }
                        eaModeDst = aEAModes[this.abModes407[op1 & 0xff]];
                        this.dataDst = eaModeDst.getEAData(nnn);
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst | this.dataSrc);
                        this.addCycles(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD);
                    }
                    else if ((op1 & 0x00c0) == 0x0000) {
                        this.setORFlagsCCR(this.dataSrc);
                        this.addCycles(20);
                    }
                    else if ((op1 & 0x00c0) == 0x0040) {
                        this.setORFlagsSR(this.dataSrc);
                        this.addCycles(20);
                    }
                    else {
                        this.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
                    }
                    break stage1;

                case 0x2:
                    //  case 0x0200:   andi     [....0010sswwwnnn, format ????????sswwwnnn, p.123]
                    //  case 0x023c:   andi     [....001000111100, format none,             p.125]
                    //  case 0x027c:   andi     [....001001111100, format none,             p.457]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_IMMEDIATE];
                    this.dataSrc = eaModeSrc.getEAData(0);
                    if ((op1 & 0x3f) != 0x3c) {
                        eaModeDst = aEAModes[this.abModes407[op1 & 0xff]];
                        this.dataDst = eaModeDst.getEAData(nnn);
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst & this.dataSrc);
                        this.addCycles(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD - eaModeDst.cycle2Dl);
                    }
                    else if ((op1 & 0x00c0) == 0x0000) {
                        this.setANDFlagsCCR(this.dataSrc);
                        this.addCycles(20);
                    }
                    else if ((op1 & 0x00c0) == 0x0040) {
                        this.setANDFlagsSR(this.dataSrc);
                        this.addCycles(20);
                    }
                    else {
                        this.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
                    }
                    break stage1;

                case 0x4:
                    //  case 0x0400:   subi     [....0100sswwwnnn, format ????????sswwwnnn, p.284]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_IMMEDIATE];
                    this.dataSrc = eaModeSrc.getEAData(0);
                    eaModeDst = aEAModes[this.abModes407[op1 & 0xff]];
                    this.dataDst = eaModeDst.getEAData(nnn);
                    eaModeDst.setDataFlags(this.dataDst - this.dataSrc);
                    this.addCycles(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD);
                    break stage1;

                case 0x6:
                    //  case 0x0600:   addi     [....0110sswwwnnn, format ????????sswwwnnn, p.114]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_IMMEDIATE];
                    this.dataSrc = eaModeSrc.getEAData(0);
                    eaModeDst = aEAModes[this.abModes407[op1 & 0xff]];
                    this.dataDst = eaModeDst.getEAData(nnn);
                    eaModeDst.setDataFlagsForAdd(this.dataDst + this.dataSrc);
                    this.addCycles(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD);
                    break stage1;

                case 0x8:
                    //  case 0x0800:   btst     [....100000zzznnn, format ??????????zzznnn, p.166]
                    //  case 0x0840:   bchg     [....100001bbbnnn, format ??????????bbbnnn, p.132]
                    //  case 0x0880:   bclr     [....100010bbbnnn, format ??????????bbbnnn, p.135]
                    //  case 0x08c0:   bset     [....100011bbbnnn, format ??????????bbbnnn, p.161]
                    iModeSrc = CPU68K.EAMODEINDEX_IMMEDIATE_WORD;
                    rrr = 0;
                    break;

                case 0xa:
                    //  case 0x0a00:   eori     [....1010sswwwnnn, format ????????sswwwnnn, p.207]
                    //  case 0x0a3c:   eori     [....101000111100, format none,             p.209]
                    //  case 0x0a7c:   eori     [....101001111100, format none,             p.465]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_IMMEDIATE];
                    this.dataSrc = eaModeSrc.getEAData(0);
                    if ((op1 & 0x3f) != 0x3c) {
                        eaModeDst = aEAModes[this.abModes407[op1 & 0xff]];
                        this.dataDst = eaModeDst.getEAData(nnn);
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst ^ this.dataSrc);
                        this.addCycles(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD);
                    }
                    else if ((op1 & 0x00c0) == 0x0000) {
                        this.setEORFlagsCCR(this.dataSrc);
                        this.addCycles(20);
                    }
                    else if ((op1 & 0x00c0) == 0x0040) {
                        this.setEORFlagsSR(this.dataSrc);
                        this.addCycles(20);
                    }
                    else {
                        this.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
                    }
                    break stage1;

                case 0xc:
                    //  case 0x0c00:   cmpi     [....1100sswwwnnn, format ????????sswwwnnn, p.184]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_IMMEDIATE];
                    this.dataSrc = eaModeSrc.getEAData(0);
                    eaModeDst = aEAModes[this.abModes407[op1 & 0xff]];
                    this.dataDst = eaModeDst.getEAData(nnn);
                    eaModeDst.updateFlagsExceptX(this.dataDst - this.dataSrc);
                    this.addCycles(4 + eaModeDst.cycle2Dl);
                    break stage1;

                case 0xe:
                    this.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
                    break stage1;

                case 0x1:
                    //  case 0x0100:   btst     [....rrr100yyynnn, format ??????????yyynnn, p.166]
                    //  case 0x0108:   movep    [....rrr100001nnn, format none,             p.236]
                    //  case 0x0140:   bchg     [....rrr101bbbnnn, format ??????????bbbnnn, p.132]
                    //  case 0x0148:   movep    [....rrr101001nnn, format none,             p.236]
                    //  case 0x0180:   bclr     [....rrr110bbbnnn, format ??????????bbbnnn, p.135]
                    //  case 0x0188:   movep    [....rrr110001nnn, format none,             p.236]
                    //  case 0x01c0:   bset     [....rrr111bbbnnn, format ??????????bbbnnn, p.161]
                    //  case 0x01c8:   movep    [....rrr111001nnn, format none,             p.236]
                    rrr = 0;
                    break;
                case 0x3:
                    rrr = 1;
                    break;
                case 0x5:
                    rrr = 2;
                    break;
                case 0x7:
                    rrr = 3;
                    break;
                case 0x9:
                    rrr = 4;
                    break;
                case 0xb:
                    rrr = 5;
                    break;
                case 0xd:
                    rrr = 6;
                    break;
                case 0xf:
                    rrr = 7;
                    break;
                }

                if ((op1 & 0x0038) == 0x0008) {
                    //  case 0x0108:   movep    [....rrr100001nnn, format none, p.236]
                    //  case 0x0148:   movep    [....rrr101001nnn, format none, p.236]
                    //  case 0x0188:   movep    [....rrr110001nnn, format none, p.236]
                    //  case 0x01c8:   movep    [....rrr111001nnn, format none, p.236]
                    //  The Java implementation didn't support MOVEP, but it's simple enough: transfer every
                    //  other byte, starting at (d16,An), between memory and the specified data register.
                    reg = (this.regA[nnn] + this.getPCWord())|0;
                    cRegs = (op1 & 0x40)? 4 : 2;
                    if (op1 & 0x80) {
                        for (let i = (cRegs - 1) * 8; i >= 0; i -= 8, reg += 2) {
                            this.setByte(reg, this.regD[rrr] >> i);
                        }
                    } else {
                        dataNew = 0;
                        for (let i = 0; i < cRegs; i++, reg += 2) {
                            dataNew = (dataNew << 8) | (this.getByte(reg) & 0xff);
                        }
                        this.regD[rrr] = (cRegs == 4)? dataNew : (this.regD[rrr] & ~0xffff) | dataNew;
                    }
                    this.addCycles(8 + cRegs * 4);
                }
                else {
                    //  case 0x0100:   btst     [....rrr100yyynnn, format ??????????yyynnn, p.166]
                    //  case 0x0140:   bchg     [....rrr101bbbnnn, format ??????????bbbnnn, p.132]
                    //  case 0x0180:   bclr     [....rrr110bbbnnn, format ??????????bbbnnn, p.135]
                    //  case 0x01c0:   bset     [....rrr111bbbnnn, format ??????????bbbnnn, p.161]
                    eaModeSrc = aEAModes[iModeSrc];
                    this.dataSrc = eaModeSrc.getEAData(rrr);
                    if ((op1 & 0x0038) == 0x0000) {
                        this.dataSrc = (1 << (this.dataSrc & 31));
                        eaModeDst = this.eaModeDRegLong;        // aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                        this.dataDst = eaModeDst.getEAData(nnn);
                    }
                    else {
                        this.dataSrc = (1 << (this.dataSrc & 7));
                        if ((op1 & 0x00c0) == 0) {
                            //
                            // BTST is the only bit operation that permits an immediate destination, and only when the
                            // bit number is in a register (the Java implementation didn't permit it at all).
                            //
                            eaModeDst = aEAModes[(iModeSrc == CPU68K.EAMODEINDEX_DREG_LONG? this.abModes400 : this.abModes401)[op1 & 0x3f]];  // +(ssBYTE << 6)
                        } else {
                            eaModeDst = aEAModes[this.abModes407[op1 & 0x3f]];  // +(ssBYTE << 6)
                        }
                        this.dataDst = eaModeDst.getEAData(nnn);
                    }
                    switch ((op1 >> 6) & 0x3) {
                    case 0:
                        //  case 0x0800:   btst     [....100000zzznnn, format ??????????zzznnn, p.166]
                        this.flagZNew = this.dataDst & this.dataSrc;
                        this.addCycles(4 + (iModeSrc == CPU68K.EAMODEINDEX_DREG_LONG? 0 : 4) + eaModeDst.cycle2l);
                        break;
                    case 1:
                        //  case 0x0840:   bchg     [....100001bbbnnn, format ??????????bbbnnn, p.132]
                        eaModeDst.setData(this.dataDst ^ this.dataSrc);
                        this.flagZNew = this.dataDst & this.dataSrc;
                        this.addCycles(8 + (iModeSrc == CPU68K.EAMODEINDEX_DREG_LONG? 0 : 4));
                        break;

                    case 2:
                        //  case 0x0880:   bclr     [....100010bbbnnn, format ??????????bbbnnn, p.135]
                        eaModeDst.setData(this.dataDst & ~this.dataSrc);
                        this.flagZNew = this.dataDst & this.dataSrc;
                        this.addCycles(8 + (iModeSrc == CPU68K.EAMODEINDEX_DREG_LONG? 0 : 4) + eaModeDst.cycle2l);
                        break;

                    case 3:
                        //  case 0x08c0:   bset     [....100011bbbnnn, format ??????????bbbnnn, p.161]
                        eaModeDst.setData(this.dataDst | this.dataSrc);
                        this.flagZNew = this.dataDst & this.dataSrc;
                        this.addCycles(8 + (iModeSrc == CPU68K.EAMODEINDEX_DREG_LONG? 0 : 4));
                        break;
                    }
                }
                break stage1;

            case 0x2:
                ss += 0x40;     // fall through...

            case 0x3:
                ss += 0x40;     // fall through...

            case 0x1:
                //  case 0x1000:   move     [00ssrrrwwwmmmnnn, format ??ssrrrwwwmmmnnn, p.221]
                //  case 0x1040:   movea    [00ssrrr001mmmnnn, format ??ss??????mmmnnn, p.224]
                eaModeSrc = aEAModes[this.abModes000[ss + (op1 & 0x3f)]];
                this.dataSrc = eaModeSrc.getEAData(nnn);
                if ((op1 & 0x01c0) != 0x0040) {
                    //  case 0x1000:   move     [00ssrrrwwwmmmnnn, format ??ssrrrwwwmmmnnn, p.221]
                    eaModeDst = aEAModes[this.abModesMove[ss + ((op1 >> 6) & 0x3f)]];
                    eaModeDst.setEADataFlagsZNClearCV(rrr, this.dataSrc);
                    this.addCycles(4);
                }
                else {
                    //  case 0x1040:   movea    [00ssrrr001mmmnnn, format ??ss??????mmmnnn, p.224]
                    this.regA[rrr] = this.dataSrc;
                    this.addCycles(4);
                }
                break stage1;

            case 0x4:
                //  case 0x4000:   negx     [01000000sswwwnnn, format ????????sswwwnnn, p.250]
                //  case 0x40c0:   move     [0100000011wwwnnn, format ??????????wwwnnn, p.230]
                //  case 0x4180:   chk      [0100rrr110xxxnnn, format ??????????xxxnnn, p.174]
                //  case 0x41c0:   lea      [0100rrr111pppnnn, format ??????????pppnnn, p.215]
                //  case 0x4200:   clr      [01000010sswwwnnn, format ????????sswwwnnn, p.178]
                //  case 0x42c0:   move     [0100001011wwwnnn, format ??????????wwwnnn, p.226]
                //  case 0x4400:   neg      [01000100sswwwnnn, format ????????sswwwnnn, p.248]
                //  case 0x44c0:   move     [0100010011xxxnnn, format ??????????xxxnnn, p.228]
                //  case 0x4600:   not      [01000110sswwwnnn, format ????????sswwwnnn, p.253]
                //  case 0x46c0:   move     [0100011011xxxnnn, format ??????????xxxnnn, p.474]
                //  case 0x4800:   nbcd     [0100100000wwwnnn, format ??????????wwwnnn, p.246]
                //  case 0x4840:   pea      [0100100001pppnnn, format ??????????pppnnn, p.264]
                //  case 0x4840:   swap     [0100100001000nnn, format none,             p.290]
                //  case 0x4880:   ext      [0100100010000nnn, format none,             p.211]
                //  case 0x4880:   movem    [010010001kuuunnn, format ?????????kuuunnn, p.233]
                //  case 0x48c0:   ext      [0100100011000nnn, format none,             p.211]
                //  case 0x49c0:   ext      [0100100111000nnn, format none,             p.211]
                //  case 0x4a00:   tst      [01001010ssmmmnnn, format ????????ssmmmnnn, p.297]
                //  case 0x4ac0:   tas      [0100101011wwwnnn, format ??????????wwwnnn, p.291]
                //  case 0x4afc:   illegal  [0100101011111100, format none,             p.212]
                //  case 0x4c80:   movem    [010011001ktttnnn, format ?????????ktttnnn, p.233]
                //  case 0x4e40:   trap     [010011100100vvvv, format none,             p.293]
                //  case 0x4e50:   link     [0100111001010nnn, format none,             p.216]
                //  case 0x4e58:   unlk     [0100111001011nnn, format none,             p.299]
                //  case 0x4e60:   move     [0100111001100nnn, format none,             p.476]
                //  case 0x4e68:   move     [0100111001101nnn, format none,             p.476]
                //  case 0x4e70:   reset    [0100111001110000, format none,             p.538]
                //  case 0x4e71:   nop      [0100111001110001, format none,             p.253]
                //  case 0x4e72:   stop     [0100111001110010, format none,             p.540]
                //  case 0x4e73:   rte      [0100111001110011, format none,             p.539]
                //  case 0x4e75:   rts      [0100111001110101, format none,             p.274]
                //  case 0x4e76:   trapv    [0100111001110110, format none,             p.296]
                //  case 0x4e77:   rtr      [0100111001110111, format none,             p.273]
                //  case 0x4e80:   jsr      [0100111010pppnnn, format ??????????pppnnn, p.214]
                //  case 0x4ec0:   jmp      [0100111011pppnnn, format ??????????pppnnn, p.213]

                switch ((op1 >> 8) & 0xf) {

                case 0x0:
                    if ((op1 & 0x00c0) != 0x00c0) {
                        //  case 0x4000:   negx     [....0000sswwwnnn, format ????????sswwwnnn, p.250]
                        // I have to code this up to make it look like we're modifying a
                        // source rather than a destination, because even though the effective
                        // address should be considered the "destination", we are subtracting from zero,
                        // not from the destination.
                        this.dataDst = 0;
                        eaModeDst = aEAModes[this.abModes407[op1 & 0xff]];
                        this.dataSrc = eaModeDst.getEAData(nnn);
                        eaModeDst.setData(this.subX(eaModeDst.width, this.dataDst, this.dataSrc));
                        this.addCycles(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD - eaModeDst.cycle2ADl);
                    }
                    else {              // MOVE SR,%s
                        //  case 0x40c0:   move     [....000011wwwnnn, format ??????????wwwnnn, p.230]
                        eaModeDst = aEAModes[this.abModes407[(op1 & 0x3f)+0x40]];    // +(ssWORD << 6)
                        eaModeDst.setEAData(nnn, this.getFlags());
                        this.addCycles(8 - eaModeDst.cycle2ADI);
                    }
                    break stage1;

                case 0x2:
                    if ((op1 & 0x00c0) != 0x00c0) {
                        //  case 0x4200:   clr      [....0010sswwwnnn, format ????????sswwwnnn, p.178]
                        eaModeDst = aEAModes[this.abModes407[op1 & 0xff]];
                      //this.dataDst = eaModeDst.getEAData(nnn);         // technically, we're supposed to read the data from EA first,
                        eaModeDst.setEADataFlagsZNClearCV(nnn, 0);  // even though all we're going to do is immediately overwrite it -JP
                        this.addCycles(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD - eaModeDst.cycle2ADl);
                    }
                    else {              // MOVE CCR,%s
                        //  case 0x42c0:   move     [....001011wwwnnn, format ??????????wwwnnn, p.226]
                        eaModeDst = aEAModes[this.abModes407[(op1 & 0x3f)+0x40]];    // +(ssWORD << 6)
                        eaModeDst.setEAData(nnn, this.getFlags() & CPU68K.FLAGS_CCR);
                        this.addCycles(8 - eaModeDst.cycle2ADI);   // BUGBUG: Need to confirm this is the same as "MOVE SR,%s" -JP
                    }
                    break stage1;

                case 0x4:
                    if ((op1 & 0x00c0) != 0x00c0) {
                        //  case 0x4400:   neg      [....0100sswwwnnn, format ????????sswwwnnn, p.248]
                        // I have to code this up to make it look like we're modifying a
                        // source rather than a destination, because even though the effective
                        // address should be considered the "destination", we are subtracting from zero,
                        // not from the destination.
                        this.dataDst = 0;
                        eaModeDst = aEAModes[this.abModes407[op1 & 0xff]];
                        this.dataSrc = eaModeDst.getEAData(nnn);
                        eaModeDst.setDataFlags(-this.dataSrc);
                        this.addCycles(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD - eaModeDst.cycle2ADl);
                    }
                    else {              // MOVE %s,CCR
                        //  case 0x44c0:   move     [....010011xxxnnn, format ??????????xxxnnn, p.228]
                        eaModeSrc = aEAModes[this.abModes400[(op1 & 0x3f)+0x40]];    // +(ssWORD << 6)
                        this.setFlagsCCR(eaModeSrc.getEAData(nnn));
                        this.addCycles(12);
                    }
                    break stage1;

                case 0x6:
                    if ((op1 & 0x00c0) != 0x00c0) {
                        //  case 0x4600:   not      [....0110sswwwnnn, format ????????sswwwnnn, p.253]
                        eaModeDst = aEAModes[this.abModes407[op1 & 0xff]];
                        this.dataDst = eaModeDst.getEAData(nnn);
                        eaModeDst.setDataFlagsZNClearCV(~this.dataDst);
                        this.addCycles(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD - eaModeDst.cycle2ADl);
                    }
                    else {              // MOVE %s,SR
                        //  case 0x46c0:   move     [....011011xxxnnn, format ??????????xxxnnn, p.474]
                        if ((this.flags & CPU68K.FLAGS_SU) == 0) {
                            this.genException(CPU68K.EXCEPTION_PRIVILEGE_VIOLATION);
                        }
                        eaModeSrc = aEAModes[this.abModes400[(op1 & 0x3f)+0x40]];    // +(ssWORD << 6)
                        this.setFlagsSR(eaModeSrc.getEAData(nnn));
                        this.addCycles(12);
                    }
                    break stage1;

                case 0x8:
                    //  case 0x4800:   nbcd     [....100000wwwnnn, format ??????????wwwnnn, p.246]
                    //  case 0x4840:   pea      [....100001pppnnn, format ??????????pppnnn, p.264]
                    //  case 0x4840:   swap     [....100001000nnn, format none,             p.290]
                    //  case 0x4880:   ext      [....100010000nnn, format none,             p.211]
                    //  case 0x4880:   movem    [....10001kuuunnn, format ?????????kuuunnn, p.233]
                    //  case 0x48c0:   ext      [....100011000nnn, format none,             p.211]
                    switch ((op1 >> 6) & 0x3) {
                    case 0x0:
                        //  case 0x4800:   nbcd     [........00wwwnnn, format ??????????wwwnnn, p.246]
                        eaModeDst = aEAModes[this.abModes407[op1 & 0x3f]];           // +(ssBYTE << 6)
                        this.dataDst = 0;
                        this.dataSrc = eaModeDst.getEAData(nnn) & 0xff;
                        eaModeDst.setData(this.negBCD(this.dataSrc));
                        this.addCycles(8 - eaModeDst.cycle2ADI);
                        break stage1;

                    case 0x1:
                        if ((op1 & 0x0038) == 0) {
                            //  case 0x4840:   swap     [........01000nnn, format none, p.290]
                            eaModeDst = this.eaModeDRegLong;    // aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                            this.dataDst = eaModeDst.getEAData(nnn);
                            eaModeDst.setDataFlagsZNClearCV((this.dataDst >>> 16) | ((this.dataDst & 0xffff) << 16));
                            this.addCycles(4);
                        }
                        else {
                            //  case 0x4840:   pea      [........01pppnnn, format ??????????pppnnn, p.264]
                            eaModeSrc = aEAModes[this.abModesD81[(op1 & 0x3f)+0x80]];// +(ssLONG << 6)
                            this.dataSrc = eaModeSrc.getEA(nnn);
                            this.pushLong(this.dataSrc);        // aEAModes[CPU68K.EAMODEINDEX_AREG_PUSHLONG].setEAData(7, this.dataSrc);
                            this.addCycles(4);                  // BUGBUG: approximate -JP
                        }
                        break stage1;

                    case 0x2:
                        if ((op1 & 0x0038) == 0) {
                            //  case 0x4880:   ext      [........10000nnn, format none, p.211]
                            eaModeDst = aEAModes[CPU68K.EAMODEINDEX_DREG_WORD];
                            this.dataDst = eaModeDst.getEAData(nnn);
                            eaModeDst.setDataFlagsZNClearCV(this.dataDst << 24 >> 24);
                            this.addCycles(4);
                            break stage1;
                        }
                        /* falls through (BUGBUG: verify) */

                    case 0x3:
                        if ((op1 & 0x0038) == 0) {
                            //  case 0x4880:   ext      [........10000nnn, format none, p.211]
                            eaModeDst = this.eaModeDRegLong;    // aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                            this.dataDst = eaModeDst.getEAData(nnn);
                            eaModeDst.setDataFlagsZNClearCV(this.dataDst << 16 >> 16);
                            this.addCycles(4);
                            break stage1;
                        }
                        /* falls through (BUGBUG: verify) */
                    }

                    //  case 0x4880:   movem    [........1kuuunnn, format ?????????kuuunnn, p.233]
                    //  NOTES: 1) This is a register-to-memory operation
                    //         2) For pre-decrement, the order of storing is A7 to A0, then D7 to D0 (bit 0 to bit 15)
                    //         3) For all other modes, the order of storing is D0 to D7, then A0 to A7 (bit 0 to bit 15)
                    //         4) Any register used in pre-decrement mode is stored before being decremented
                    iModeSrc = this.getPCWord();
                    eaModeDst = aEAModes[this.abModesD07[(op1 - 0x40) & 0xff]];
                    cRegs = 0;
                    reg = this.regA[nnn];
                    eaModeDst.getEA(nnn);
                    iMask = 0x1;
                    if ((op1 & 0x38) == 0x20) {
                        //
                        // Pre-decrement (NOTE: If the address register used in pre-decrement mode is also
                        // one of the source operands, the 68000 writes the register's initial value, not its
                        // decremented value, hence it's important that we call setEAData(a[i]) instead of
                        // getEA() followed by setData(a[i]) -JP)
                        //
                        for (let i = 7; i >= 0; i--, iMask <<= 1) {
                            if ((iModeSrc & iMask) != 0) {
                                if (cRegs++ != 0) eaModeDst.advanceEA(nnn);
                                eaModeDst.setData(i == nnn? reg : this.regA[i]);
                            }
                        }
                        for (let i = 7; i >= 0; i--, iMask <<= 1) {
                            if ((iModeSrc & iMask) != 0) {
                                if (cRegs++ != 0) eaModeDst.advanceEA(nnn);
                                eaModeDst.setData(this.regD[i]);
                            }
                        }
                        if (cRegs == 0) this.regA[nnn] = reg;
                    }
                    else {
                        // All other modes
                        for (let i = 0; i <= 7; i++, iMask <<= 1) {
                            if ((iModeSrc & iMask) != 0) {
                                if (cRegs++ != 0) eaModeDst.advanceEA(nnn);
                                eaModeDst.setData(this.regD[i]);
                            }
                        }
                        for (let i = 0; i <= 7; i++, iMask <<= 1) {
                            if ((iModeSrc & iMask) != 0) {
                                if (cRegs++ != 0) eaModeDst.advanceEA(nnn);
                                eaModeDst.setData(this.regA[i]);
                            }
                        }
                    }
                    this.addCycles((4+eaModeDst.cycle4l)*cRegs);
                    break stage1;

                case 0xa:
                    if ((op1 & 0xc0) != 0xc0) {
                        //  case 0x4a00:   tst      [........ssmmmnnn, format ????????ssmmmnnn, p.297]
                        eaModeDst = aEAModes[this.abModes000[op1 & 0xff]];
                        eaModeDst.updateFlagsZNClearCV(eaModeDst.getEAData(nnn));
                        this.addCycles(4);
                    }
                    else if ((op1 & 0x3f) != 0x3c) {
                        //  case 0x4ac0:   tas      [........11wwwnnn, format ??????????wwwnnn, p.291]
                        eaModeDst = aEAModes[this.abModes407[op1 & 0x3f]];           // +(ssBYTE << 6)
                        this.dataDst = eaModeDst.getEAData(nnn);
                        eaModeDst.updateFlagsZNClearCV(this.dataDst);
                        eaModeDst.setData(this.dataDst | 0x80);
                        this.addCycles(14 - eaModeDst.cycle2ADI*5);
                    }
                    else {
                        //  case 0x4afc:   illegal  [........11111100, format none, p.212]
                        this.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
                    }
                    break stage1;

                case 0xc:
                    //  case 0x4c80:   movem    [....11001ktttnnn, format ?????????ktttnnn, p.233]
                    //  NOTES: 1) This is a memory-to-register operation
                    //         2) For all modes, the order of storing is D0 to D7, then A0 to A7 (bit 0 to bit 15)
                    //         3) Any register used in post-increment mode is not affected by the value loaded for it (if any)
                    iModeDst = this.getPCWord();
                    iModeSrc = op1 & 0x38;
                    eaModeSrc = aEAModes[this.abModesC81[(op1 - 0x40) & 0xff]];
                    cRegs = 0;
                    reg = this.regA[nnn];
                    eaModeSrc.getEA(nnn);
                    iMask = 0x1;
                    for (let i = 0; i <= 7; i++, iMask <<= 1) {
                        if ((iModeDst & iMask) != 0) {
                            if (cRegs++ != 0) eaModeSrc.advanceEA(nnn);
                            this.regD[i] = eaModeSrc.getData();
                        }
                    }
                    for (let i = 0; i <= 7; i++, iMask <<= 1) {
                        if ((iModeDst & iMask) != 0) {
                            if (cRegs++ != 0) eaModeSrc.advanceEA(nnn);
                            op2 = eaModeSrc.getData();
                            if (iModeSrc != 0x18 || i != nnn) { // if mode is "A[i]+" and i == nnn, then we must not set A[i]
                                this.regA[i] = op2;
                            }
                        }
                    }
                    if (cRegs == 0) this.regA[nnn] = reg;
                    this.addCycles(4 + (4+eaModeSrc.cycle4l)*cRegs);
                    break stage1;

                case 0xe:
                    switch ((op1 >> 4) & 0xf) {
                    case 0x4:
                        //  case 0x4e40:   trap     [........0100vvvv, format none, p.293]
                        if (this.dbg) {                         // see if the debugger wants us to break
                            if (this.dbg.break(this.regPCLast, true)) {
                                this.regPC = this.regPCLast;
                                this.fCPU |= CPU68K.CPU_BREAKPOINT;
                                return;
                            }
                        }
                        this.regPCTrap = this.regPCLast;        // keep track the last trap encountered
                        this.callException((op1 & 0xf) + 0x20);
                        this.addCycles(34);
                        break stage1;

                    case 0x5:
                        if ((op1 & 0x8) == 0) {
                            //  case 0x4e50:   link     [........01010nnn, format none, p.216]
                            op2 = this.getPCWord();             // aEAModes[CPU68K.EAMODEINDEX_IMMEDIATE_WORD].getEAData(0);
                            this.pushLong(nnn == 7? this.regA[7] - 4 : this.regA[nnn]);   // "LINK A7" pushes the decremented A7
                            this.regA[nnn] = this.regA[7];
                            this.regA[7] = (this.regA[7] + op2)|0;
                            this.addCycles(16);
                        }
                        else {
                            //  case 0x4e58:   unlk     [........01011nnn, format none, p.299]
                            op2 = this.regA[7];         // this is strictly for MarkDataAccess's benefit (see below)
                            this.regA[7] = this.regA[nnn];
                            this.regA[nnn] = this.popLong();
                            this.addCycles(12);
                            if (this.dbg && this.dbg.markDataAccess) {
                                //
                                // Mark the entire frame just removed as "uninitialized", to
                                // help catch more errors.  There are other places where it might
                                // be nice to do this as well, like after we've returned to the
                                // caller and he's removed his args from the stack with an "ADD #xxx,A7",
                                // but we don't want to slow things down *too* much.... -JP
                                //
                                this.dbg.markDataAccess(op2, this.regA[7]-op2, CPU68K.DATAACCESS_UNINIT);
                            }
                        }
                        break stage1;

                    case 0x6:
                        //  case 0x4e60:   move     [........01100nnn, format none, p.476]
                        //  case 0x4e68:   move     [........01101nnn, format none, p.476]
                        if ((this.flags & CPU68K.FLAGS_SU) == 0) {
                            this.genException(CPU68K.EXCEPTION_PRIVILEGE_VIOLATION);
                            break stage1;
                        }
                        if ((op1 & 0x8) == 0) {
                            this.regUSP = this.regA[nnn];
                        }
                        else {
                            this.regA[nnn] = this.regUSP;
                        }
                        this.addCycles(4);
                        break stage1;

                    case 0x7:
                        switch (op1 & 0xf) {
                        case 0x0:
                            //  case 0x4e70:   reset    [........01110000, format none, p.538]
                            //  The RESET instruction asserts the RESET line for external devices only; the CPU
                            //  itself is unaffected, and we have no external devices that care, so this is a no-op.
                            if ((this.flags & CPU68K.FLAGS_SU) == 0) {
                                this.genException(CPU68K.EXCEPTION_PRIVILEGE_VIOLATION);
                            }
                            this.addCycles(132);
                            break stage1;

                        case 0x1:
                            //  case 0x4e71:   nop      [........01110001, format none, p.253]
                            this.addCycles(4);
                            break stage1;

                        case 0x2:
                            //  case 0x4e72:   stop     [........01110010, format none, p.540]
                            if ((this.flags & CPU68K.FLAGS_SU) == 0) {
                                this.genException(CPU68K.EXCEPTION_PRIVILEGE_VIOLATION);
                                break stage1;
                            }
                            op2 = this.getPCWord() & 0xffff;
                            // Check for OP_STOP_TRACE, OP_STOP_FREEZE, OP_STOP_INJECT
                            if (op2 < (CPU68K.OP_STOP_TRACE & 0xffff)) {
                                this.setFlagsSR(op2);
                            }
                            else {
                                //
                                // The definition of both OP_STOP_FREEZE and OP_STOP_INJECT is to reset
                                // the stack to PC, and then pop the next 'long' into PC.  This effectively
                                // "returns" us from a call injected by ScriptVarFunc.Call().
                                //
                                if (this.injection) {
                                    this.injection.result = {d0: this.regD[0], a0: this.regA[0]};
                                }
                                this.regA[7] = this.regPC;
                                this.regPC = this.popLong();
                                //
                                // OP_STOP_FREEZE also means that since the CPU was frozen at the time of
                                // the injection, that we should re-freeze the CPU now.  We're not really allowed
                                // to set CPU_FREEZE ourselves (that bit is "owned" by CPUThread), but setting
                                // CPU_FREEZEONSTOP should be good enough, since we're also setting CPU_STOPPED....
                                //
                                if (op2 == (CPU68K.OP_STOP_TRACE & 0xffff)) {
                                    this.fCPU |= CPU68K.CPU_TRACEONSTOP;
                                }
                                else if (op2 == (CPU68K.OP_STOP_FREEZE & 0xffff)) {
                                    this.fCPU |= CPU68K.CPU_FREEZEONSTOP;
                                }
                            }
                            this.fCPU |= CPU68K.CPU_STOPPED;
                            this.addCycles(4);
                            break stage1;

                        case 0x3:
                            //  case 0x4e73:   rte      [........01110011, format none, p.539]
                            this.returnFromException();
                            this.addCycles(20);
                            break stage1;

                        case 0x5:
                            //  case 0x4e75:   rts      [........01110101, format none, p.274]
                            this.regPC = this.popLong();        // aEAModes[CPU68K.EAMODEINDEX_AREG_POPLONG].getEAData(7);
                            this.addCycles(16);
                            break stage1;

                        case 0x6:
                            //  case 0x4e76:   trapv    [........01110110, format none, p.296]
                            if (this.getFlagV() != 0) {
                                this.genException(CPU68K.EXCEPTION_TRAPV_OVERFLOW);
                                this.addCycles(34);
                                break stage1;
                            }
                            this.addCycles(4);
                            break stage1;

                        case 0x7:
                            //  case 0x4e77:   rtr      [........01110111, format none, p.273]
                            this.setFlagsCCR(aEAModes[CPU68K.EAMODEINDEX_AREG_INCWORD].getEAData(7));
                            this.regPC = this.popLong();                // aEAModes[CPU68K.EAMODEINDEX_AREG_POPLONG].getEAData(7);
                            this.addCycles(20);
                            break stage1;

                        case 0x8:
                        case 0x9:
                        case 0xa:
                        case 0xb:
                        case 0xc:
                        case 0xd:
                        case 0xe:
                        case 0xf:
                            break;              // end up at this.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION)
                        }
                        /* falls through (BUGBUG: verify) */

                    case 0x8:
                    case 0x9:
                    case 0xa:
                    case 0xb:
                        //  case 0x4e80:   jsr      [........10pppnnn, format ??????????pppnnn, p.214]
                        eaModeSrc = aEAModes[this.abModesD81[(op1 & 0x3f)+0x80]];    // +(ssLONG << 6)
                        this.dataSrc = eaModeSrc.getEA(nnn);
                        this.pushLong(this.regPC);              // aEAModes[CPU68K.EAMODEINDEX_AREG_PUSHLONG].setEAData(7, this.regPC);
                        this.regPC = this.dataSrc;
                        this.addCycles(6);                      // BUGBUG: approximate -JP
                        break stage1;

                    case 0xc:
                    case 0xd:
                    case 0xe:
                    case 0xf:
                        //  case 0x4ec0:   jmp      [........11pppnnn, format ??????????pppnnn, p.213]
                        eaModeSrc = aEAModes[this.abModesD81[(op1 & 0x3f)+0x80]];    // +(ssLONG << 6)
                        this.regPC = eaModeSrc.getEA(nnn);
                        break stage1;
                    }
                    this.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
                    break stage1;

                case 0x1:
                    //  case 0x4180:   chk      [....rrr110xxxnnn, format ??????????xxxnnn, p.174]
                    //  case 0x41c0:   lea      [....rrr111pppnnn, format ??????????pppnnn, p.215]
                    rrr = 0;
                    break;
                case 0x3:
                    rrr = 1;
                    break;
                case 0x5:
                    rrr = 2;
                    break;
                case 0x7:
                    rrr = 3;
                    break;
                case 0x9:
                    if ((op1 & 0x00f8) == 0x00c0) {
                        //  case 0x49c0:   ext      [....100111000nnn, format none, p.211]
                        eaModeDst = this.eaModeDRegLong;        // aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                        this.dataDst = eaModeDst.getEAData(nnn);
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst << 24 >> 24);
                        this.addCycles(4);
                        break stage1;
                    }
                    rrr = 4;
                    break;
                case 0xb:
                    rrr = 5;
                    break;
                case 0xd:
                    rrr = 6;
                    break;
                case 0xf:
                    rrr = 7;
                    break;
                }

                if ((op1 & 0x00c0) == 0x0080) {
                    //  case 0x4180:   chk      [....rrr110xxxnnn, format ??????????xxxnnn, p.174]
                    eaModeSrc = aEAModes[this.abModes400[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    this.dataDst = this.regD[rrr] << 16 >> 16;
                    this.setFlagZ(this.dataDst == 0? 1 : 0);      // Z, V and C are officially undefined, but this
                    this.setFlagV(0);                               // is what real hardware does
                    this.setFlagC(0);
                    if (this.dataDst < 0) {
                        this.setFlagN(-1);
                        this.genException(CPU68K.EXCEPTION_CHK_INSTRUCTION);
                        this.addCycles(40);
                    }
                    else if (this.dataDst > this.dataSrc) {
                        this.setFlagN(0);
                        this.genException(CPU68K.EXCEPTION_CHK_INSTRUCTION);
                        this.addCycles(40);
                    }
                    else {
                        this.addCycles(10);
                    }
                }
                else {
                    //  case 0x41c0:   lea      [....rrr111pppnnn, format ??????????pppnnn, p.215]
                    eaModeSrc = aEAModes[this.abModesD81[(op1 & 0x3f)+0x80]];        // +(ssLONG << 6)
                    this.regA[rrr] = eaModeSrc.getEA(nnn);
                }
                break stage1;

            case 0x5:
                //  case 0x5000:   addq     [0101qqq0ssvvvnnn, format ????????ssvvvnnn, p.116]
                //  case 0x50c0:   scc      [0101cccc11wwwnnn, format ????cccc??wwwnnn, p.277]
                //  case 0x50c8:   dbcc     [0101cccc11001nnn, format ????cccc????????, p.195]
                //  case 0x5100:   subq     [0101qqq1ssvvvnnn, format ????????ssvvvnnn, p.286]
                if ((op1 & 0x00c0) != 0x00c0) {
                    this.dataSrc = CPU68K.aByteQuick[rrr];
                    iModeDst = op1 & 0xf8;
                    if (iModeDst == 0x48 || iModeDst == 0x88) { // EAMODEINDEX_AREG_WORD or EAMODEINDEX_AREG_LONG
                        if ((op1 & 0x0100) == 0x0000) {         // affects entire A register and does not affect flags
                            this.regA[nnn] = (this.regA[nnn] + this.dataSrc)|0;
                            this.addCycles(8);                  // BUGBUG: For word accesses, table 8.5 says this is only 4 cycles (but only for ADDQ, not SUBQ) -JP
                        }
                        else {
                            this.regA[nnn] = (this.regA[nnn] - this.dataSrc)|0;
                            this.addCycles(8);
                        }
                        break stage1;
                    }
                    eaModeDst = aEAModes[this.abModes007[op1 & 0xff]];
                    this.dataDst = eaModeDst.getEAData(nnn);
                    if ((op1 & 0x0100) == 0x0000) {
                        //  case 0x5000:   addq     [0101qqq0ssvvvnnn, format ????????ssvvvnnn, p.116]
                        eaModeDst.setDataFlagsForAdd(this.dataDst + this.dataSrc);
                        this.addCycles(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD);
                    }
                    else {
                        //  case 0x5100:   subq     [0101qqq1ssvvvnnn, format ????????ssvvvnnn. p.286]
                        eaModeDst.setDataFlags(this.dataDst - this.dataSrc);
                        this.addCycles(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD + eaModeDst.cycle4Aw);
                    }
                }
                else {
                    if ((op1 & 0x0038) != 0x0008) {
                        //  case 0x50c0:   scc      [0101cccc11wwwnnn, format ????cccc??wwwnnn, p.277]
                        eaModeDst = aEAModes[this.abModes407[op1 & 0x3f]];           // +(ssBYTE << 6)
                        eaModeDst.getEA(nnn);
                        op2 = 0;                // prevent "used before initialization" warning
                        switch ((op1 >> 8) & 0xf) {
                        case 0x0:               // ST
                            op2 = -1;
                            break;
                        case 0x1:               // SF
                            op2 = 0;
                            break;
                        case 0x2:               // SHI
                            op2 = this.getFlagHI();
                            break;
                        case 0x3:               // SLS
                            op2 = ~this.getFlagHI();
                            break;
                        case 0x4:               // SCC
                            op2 = ~this.getFlagC();
                            break;
                        case 0x5:               // SCS
                            op2 = this.getFlagC();
                            break;
                        case 0x6:               // SNE
                            op2 = ~this.getFlagZ();
                            break;
                        case 0x7:               // SEQ
                            op2 = this.getFlagZ();
                            break;
                        case 0x8:               // SVC
                            op2 = ~this.getFlagV();
                            break;
                        case 0x9:               // SVS
                            op2 = this.getFlagV();
                            break;
                        case 0xa:               // SPL
                            op2 = ~this.getFlagN();
                            break;
                        case 0xb:               // SMI
                            op2 = this.getFlagN();
                            break;
                        case 0xc:               // SGE
                            op2 = this.getFlagGE();
                            break;
                        case 0xd:               // SLT
                            op2 = this.getFlagLT();
                            break;
                        case 0xe:               // SGT
                            op2 = this.getFlagGT();
                            break;
                        case 0xf:               // SLE
                            op2 = this.getFlagLE();
                            break;
                        }
                        eaModeDst.setData(op2);
                        this.addCycles(8 - eaModeDst.cycle2ADI - (op2 == 0? eaModeDst.cycle2ADI : 0));
                        break stage1;
                    }
                    else {
                        //  case 0x50c8:   dbcc     [0101cccc11001nnn, format ????cccc????????, p.195]
                        let fCond = -1;
                        switch ((op1 >> 8) & 0xf) {
                        case 0x0:               // BUGBUG: Valid? -JP
                          //fCond = -1;
                            break;
                        case 0x1:               // DBRA
                            fCond = 0;
                            break;
                        case 0x2:               // DBHI
                            fCond = this.getFlagHI();
                            break;
                        case 0x3:               // DBLS
                            fCond = this.getFlagHI()+1;
                            break;
                        case 0x4:               // DBCC
                            fCond = this.getFlagC()+1;
                            break;
                        case 0x5:               // DBCS
                            fCond = this.getFlagC();
                            break;
                        case 0x6:               // DBNE
                            fCond = this.getFlagZ()+1;
                            break;
                        case 0x7:               // DBEQ
                            fCond = this.getFlagZ();
                            break;
                        case 0x8:               // DBVC
                            fCond = this.getFlagV()+1;
                            break;
                        case 0x9:               // DBVS
                            fCond = this.getFlagV();
                            break;
                        case 0xa:               // DBPL
                            fCond = this.getFlagN()+1;
                            break;
                        case 0xb:               // DBMI
                            fCond = this.getFlagN();
                            break;
                        case 0xc:               // DBGE
                            fCond = this.getFlagGE();
                            break;
                        case 0xd:               // DBLT
                            fCond = this.getFlagLT();
                            break;
                        case 0xe:               // DBGT
                            fCond = this.getFlagGT();
                            break;
                        case 0xf:               // DBLE
                            fCond = this.getFlagLE();
                            break;
                        }
                        this.dataSrc = this.getPCWord() - 2;    // aEAModes[CPU68K.EAMODEINDEX_IMMEDIATE_WORD].GetEAData(0) - 2;
                        if (fCond == 0) {
                            //
                            // The DBcc instructions are hard-coded to decrement ONLY the low-order
                            // 16 bits of the data register, so we need both of the following lines, not
                            // simply "this.dataDst = --d[nnn]"...
                            //
                            this.dataDst = (this.regD[nnn] << 16 >> 16) - 1;
                            this.regD[nnn] = (this.regD[nnn] & ~0xffff) | (this.dataDst & 0xffff);

                            if (this.dataDst != -1) {
                                this.regPC = (this.regPC + this.dataSrc)|0;
                                this.addCycles(10);
                            }
                            else {
                                this.addCycles(14);
                            }
                        }
                        else {
                            this.addCycles(12);
                        }
                        break stage1;
                    }
                }
                break;

            case 0x6:
                //  case 0x6000:   bcc      [0110ccccdddddddd, format ????ccccdddddddd, p.130]
                //  case 0x6100:   bsr      [01100001dddddddd, format none,             p.164]
                fCond = -1;
                this.dataSrc = op1 << 24 >> 24;
                op2 = 0;
                if (this.dataSrc == 0) {
                    this.dataSrc = this.getPCWord() - 2;        // aEAModes[CPU68K.EAMODEINDEX_IMMEDIATE_WORD].GetEAData(0) - 2;
                    op2 = 4;
                }

                switch ((op1 >> 8) & 0xf) {
                case 0x0:               // BRA
                  //fCond = -1;
                    break;
                case 0x1:               // BSR
                    this.pushLong(this.regPC);                  // aEAModes[CPU68K.EAMODEINDEX_AREG_PUSHLONG].setEAData(7, this.regPC);
                    this.regPC = (this.regPC + this.dataSrc)|0;
                    this.addCycles(18);
                    break stage1;
                case 0x2:               // BHI
                    fCond = this.getFlagHI();
                    break;
                case 0x3:               // BLS
                    fCond = this.getFlagHI()+1;
                    break;
                case 0x4:               // BCC
                    fCond = this.getFlagC()+1;
                    break;
                case 0x5:               // BCS
                    fCond = this.getFlagC();
                    break;
                case 0x6:               // BNE
                    fCond = this.getFlagZ()+1;
                    break;
                case 0x7:               // BEQ
                    fCond = this.getFlagZ();
                    break;
                case 0x8:               // BVC
                    fCond = this.getFlagV()+1;
                    break;
                case 0x9:               // BVS
                    fCond = this.getFlagV();
                    break;
                case 0xa:               // BPL
                    fCond = this.getFlagN()+1;
                    break;
                case 0xb:               // BMI
                    fCond = this.getFlagN();
                    break;
                case 0xc:               // BGE
                    fCond = this.getFlagGE();
                    break;
                case 0xd:               // BLT
                    fCond = this.getFlagLT();
                    break;
                case 0xe:               // BGT
                    fCond = this.getFlagGT();
                    break;
                case 0xf:               // BLE
                    fCond = this.getFlagLE();
                    break;
                }
                if (fCond != 0) {
                    this.regPC = (this.regPC + this.dataSrc)|0;
                    this.addCycles(10);
                }
                else {
                    this.addCycles(8 + op2);
                }
                break stage1;

            case 0x7:
                //  case 0x7000:   moveq    [0111rrr0dddddddd, format none, p.239]
                this.eaModeDRegLong.setEADataFlagsZNClearCV(rrr, op1 << 24 >> 24);
                this.addCycles(4);
                break stage1;

            case 0x8:
                //  case 0x8100:   sbcd     [1000rrr10000knnn, format ????rrr?bbkkknnn, p.275]
                //  case 0x80c0:   divu     [1000rrr011xxxnnn, format ??????????xxxnnn, p.201]
                //  case 0x81c0:   divs     [1000rrr111xxxnnn, format ??????????xxxnnn, p.197]
                //  case 0x8000:   or       [1000rrr0ssxxxnnn, format ????????ssxxxnnn, p.255]
                //  case 0x8100:   or       [1000rrr1ssuuunnn, format ????????ssuuunnn, p.255]
                if ((op1 & 0x01f0) == 0x0100) {
                    //  case 0x8100:   sbcd     [1000rrr10000knnn, format ????rrr?bbkkknnn, p.275]
                    eaModeSrc = aEAModes[this.abModesAddSubX[(op1 >> 3) & 0x1]];     // 0 or 1 (both ssBYTE)
                    this.dataSrc = eaModeSrc.getEAData(nnn) & 0xff;
                    eaModeDst = eaModeSrc;
                    this.dataDst = eaModeDst.getEAData(rrr) & 0xff;
                    eaModeDst.setData(this.subBCD(this.dataDst, this.dataSrc));
                    if ((op1 & 0x8) == 0) {
                        this.addCycles(6);
                    }
                    break stage1;
                }
                if ((op1 & 0x01c0) == 0x00c0) {
                    //  case 0x80c0:   divu     [1000rrr011xxxnnn, format ??????????xxxnnn, p.201]
                    eaModeSrc = aEAModes[this.abModes400[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                    this.dataSrc = eaModeSrc.getEAData(nnn) & 0xffff;
                    if (this.dataSrc == 0) {
                        this.setFlagsCCR(this.getFlags() & CPU68K.FLAGS_EXTEND);
                        this.genException(CPU68K.EXCEPTION_INT_DIVIDE_BY_ZERO);
                        this.addCycles(38);
                    }
                    else {
                        eaModeDst = this.eaModeDRegLong;        // this.aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                        this.dataDst = eaModeDst.getEAData(rrr);
                        dataTmp = this.dataDst >>> 0;           // make dividend unsigned
                        dataNew = (dataTmp / this.dataSrc)|0;
                        dataTmp = (dataTmp % this.dataSrc)|0;
                        if ((dataNew & 0xffff0000) != 0) {
                            this.setDivOverflow();
                        }
                        else {                                  // flags are based on quotient (dataNew), not the quotient+remainder combo
                            eaModeDst.setData((dataNew & 0xffff) | (dataTmp << 16));
                            eaModeDst.updateFlagsZNClearCV(dataNew << 16 >> 16);
                        }
                        this.addCycles(140);
                    }
                    break stage1;
                }
                if ((op1 & 0x01c0) == 0x01c0) {
                    //  case 0x81c0:   divs     [1000rrr111xxxnnn, format ??????????xxxnnn, p.197]
                    eaModeSrc = aEAModes[this.abModes400[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    if (this.dataSrc == 0) {
                        this.setFlagsCCR(this.getFlags() & CPU68K.FLAGS_EXTEND);
                        this.genException(CPU68K.EXCEPTION_INT_DIVIDE_BY_ZERO);
                        this.addCycles(38);
                    }
                    else {
                        eaModeDst = this.eaModeDRegLong;        // this.aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                        this.dataDst = eaModeDst.getEAData(rrr);
                        dataNew = Math.trunc(this.dataDst / this.dataSrc);
                        dataTmp = (this.dataDst % this.dataSrc)|0;
                        if (dataNew < -0x8000 || dataNew > 0x7fff) {
                            this.setDivOverflow();
                        } else {                                // flags are based on quotient (dataNew), not the quotient+remainder combo
                            eaModeDst.setData((dataNew & 0xffff) | (dataTmp << 16));
                            eaModeDst.updateFlagsZNClearCV(dataNew);
                        }
                        this.addCycles(158);
                    }
                    break stage1;
                }
                if ((op1 & 0x0100) == 0x0000) { // EA is src
                    //  case 0x8000:   or       [1000rrr0ssxxxnnn, format ????????ssxxxnnn, p.255]
                    eaModeSrc = aEAModes[this.abModes400[op1 & 0xff]];
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    eaModeDst = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    this.dataDst = eaModeDst.getEAData(rrr);
                    eaModeDst.setDataFlagsZNClearCV(this.dataDst | this.dataSrc);
                    this.addCycles(4 + eaModeSrc.cycle2l + eaModeSrc.cycle2ADI);
                }
                else {                          // EA is dst
                    //  case 0x8100:   or       [1000rrr1ssuuunnn, format ????????ssuuunnn, p.255]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    this.dataSrc = eaModeSrc.getEAData(rrr);
                    eaModeDst = aEAModes[this.abModesC07[op1 & 0xff]];
                    this.dataDst = eaModeDst.getEAData(nnn);
                    eaModeDst.setDataFlagsZNClearCV(this.dataDst | this.dataSrc);
                    this.addCycles(8 + eaModeDst.cycle4l);
                }
                break stage1;

            case 0x9:
                //  case 0x9000:   suba     [1001rrrk11mmmnnn, format ???????kssmmmnnn, p.282]
                //  case 0x9000:   sub      [1001rrr0ssmmmnnn, format ????????ssmmmnnn, p.279]
                //  case 0x9100:   sub      [1001rrr1ssuuunnn, format ????????ssuuunnn, p.279]
                //  case 0x9100:   subx     [1001rrr1ss00knnn, format ????rrr?sskkknnn, p.288]
                if ((op1 & 0x00c0) == 0x00c0) {
                    //  case 0x9000:   suba     [1001rrrk11mmmnnn, format ???????kssmmmnnn, p.282]
                    eaModeSrc = aEAModes[this.abModes000[(((op1 >> 2) & 0x40) + 0x40) | (op1 & 0x3f)]];
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    this.regA[rrr] = (this.regA[rrr] - this.dataSrc)|0;
                    this.addCycles(8 - eaModeSrc.cycle2l + eaModeSrc.cycle2ADI);
                    break stage1;
                }
                if ((op1 & 0x0100) == 0) {      // EA is src
                    //  case 0x9000:   sub      [1001rrr0ssmmmnnn, format ????????ssmmmnnn, p.279]
                    eaModeSrc = aEAModes[this.abModes000[op1 & 0xff]];
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    eaModeDst = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    this.dataDst = eaModeDst.getEAData(rrr);
                    eaModeDst.setDataFlags(this.dataDst - this.dataSrc);
                    this.addCycles(4 + eaModeSrc.cycle2l + eaModeSrc.cycle2ADI);
                    break stage1;
                }
                if ((op1 & 0x0030) != 0) {      // EA is dst
                    //  case 0x9100:   sub      [1001rrr1ssuuunnn, format ????????ssuuunnn, p.279]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    this.dataSrc = eaModeSrc.getEAData(rrr);
                    eaModeDst = aEAModes[this.abModesC07[op1 & 0xff]];
                    this.dataDst = eaModeDst.getEAData(nnn);
                    eaModeDst.setDataFlags(this.dataDst - this.dataSrc);
                    this.addCycles(8 + eaModeDst.cycle4l);
                }
                else {
                    //  case 0x9100:   subx     [1001rrr1ss00knnn, format ????rrr?sskkknnn, p.288]
                    eaModeSrc = aEAModes[this.abModesAddSubX[((op1 >> 5) & 0x6) | ((op1 >> 3) & 0x1)]];
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    eaModeDst = eaModeSrc;
                    this.dataDst = eaModeDst.getEAData(rrr);
                    eaModeDst.setData(this.subX(eaModeDst.width, this.dataDst, this.dataSrc));
                    if ((op1 & 0x8) == 0) {
                        this.addCycles(4 + eaModeDst.cycle4l);
                    }
                }
                break stage1;

            case 0xa:
                this.genException(CPU68K.EXCEPTION_LINE_A);
                break;

            case 0xb:
                //  case 0xb000:   cmpa     [1011rrrk11mmmnnn, format ???????kssmmmnnn, p.182]
                //  case 0xb000:   cmp      [1011rrr0ssmmmnnn, format ????????ssmmmnnn, p.180]
                //  case 0xb100:   eor      [1011rrr1sswwwnnn, format ????????sswwwnnn, p.205]
                //  case 0xb108:   cmpm     [1011xxx1ss001yyy, format ????????ss??????, p.186]
                if ((op1 & 0x00c0) == 0x00c0) {
                    //  case 0xb000:   cmpa     [1011rrrk11mmmnnn, format ???????kssmmmnnn, p.182]
                    eaModeSrc = aEAModes[this.abModes000[(((op1 >> 2) & 0x40) + 0x40) | (op1 & 0x3f)]];
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    eaModeDst = aEAModes[CPU68K.EAMODEINDEX_AREG_LONG];
                    this.dataDst = eaModeDst.getEAData(rrr);
                    eaModeDst.updateFlagsExceptX(this.dataDst - this.dataSrc);
                    this.addCycles(6);
                    break stage1;
                }
                if ((op1 & 0x0100) == 0) {      // EA is src
                    //  case 0xb000:   cmp      [1011rrr0ssmmmnnn, format ????????ssmmmnnn, p.180]
                    eaModeSrc = aEAModes[this.abModes000[op1 & 0xff]];
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    eaModeDst = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    this.dataDst = eaModeDst.getEAData(rrr);
                    eaModeDst.updateFlagsExceptX(this.dataDst - this.dataSrc);
                    this.addCycles(4 + eaModeSrc.cycle2l);
                    break stage1;
                }
                if ((op1 & 0x0038) != 0x08) {
                    //  case 0xb100:   eor      [1011rrr1sswwwnnn, format ????????sswwwnnn, p.205]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    this.dataSrc = eaModeSrc.getEAData(rrr);
                    eaModeDst = aEAModes[this.abModes407[op1 & 0xff]];
                    this.dataDst = eaModeDst.getEAData(nnn);
                    eaModeDst.setDataFlagsZNClearCV(this.dataDst ^ this.dataSrc);
                    this.addCycles(8 + eaModeDst.cycle4l - eaModeDst.cycle4AD);
                }
                else {
                    //  case 0xb108:   cmpm     [1011xxx1ss001yyy, format ????????ss??????, p.186]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_AREG_INCBYTE];
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    eaModeDst = eaModeSrc;
                    this.dataDst = eaModeDst.getEAData(rrr);
                    eaModeDst.updateFlagsExceptX(this.dataDst - this.dataSrc);
                    // Cycles needs no adjustment -- CMPM should be covered by EA cycles
                }
                break stage1;

            case 0xc:
                //  case 0xc000:   and      [1100rrr0ssxxxnnn, format ????????ssxxxnnn, p.120]
                //  case 0xc0c0:   mulu     [1100rrr011xxxnnn, format ??????????xxxnnn, p.243]
                //  case 0xc100:   abcd     [1100rrr10000knnn, format ????rrr?bbkkknnn, p.107]
                //  case 0xc100:   and      [1100rrr1ssuuunnn, format ????????ssuuunnn, p.120]
                //  case 0xc1c0:   muls     [1100rrr111xxxnnn, format ??????????xxxnnn, p.240]
                op2 = (op1 >> 6) & 0x7;

                switch(op2) {
                case 0x0:
                case 0x1:
                case 0x2:                       // EA is src
                    //  case 0xc000:   and      [1100rrr0ssxxxnnn, format ????????ssxxxnnn, p.120]
                    eaModeSrc = aEAModes[this.abModes400[op1 & 0xff]];
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    eaModeDst = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    this.dataDst = eaModeDst.getEAData(rrr);
                    eaModeDst.setDataFlagsZNClearCV(this.dataDst & this.dataSrc);
                    this.addCycles(4 + eaModeSrc.cycle2l + eaModeSrc.cycle2ADI);
                    break stage1;

                case 0x3:
                    //  case 0xc0c0:   mulu     [1100rrr011xxxnnn, format ??????????xxxnnn, p.243]
                    eaModeSrc = aEAModes[this.abModes400[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                    this.dataSrc = eaModeSrc.getEAData(nnn) & 0xffff;
                    eaModeDst = this.eaModeDRegLong;            // this.aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                    this.dataDst = eaModeDst.getEAData(rrr) & 0xffff;
                    eaModeDst.setDataFlagsZNClearCV(this.dataDst * this.dataSrc);
                    this.addCycles(70);        // BUGBUG: worst-case timing -JP
                    break stage1;

                case 0x4:
                case 0x5:
                case 0x6:                       // EA is dst
                    //  case 0xc100:   and      [1100rrr1ssuuunnn, format ????????ssuuunnn, p.120]
                    if ((op1 & 0x0030) != 0) {
                        eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                        this.dataSrc = eaModeSrc.getEAData(rrr);
                        eaModeDst = aEAModes[this.abModesC07[op1 & 0xff]];
                        this.dataDst = eaModeDst.getEAData(nnn);
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst & this.dataSrc);
                        this.addCycles(8 + eaModeDst.cycle4l);
                        break stage1;
                    }

                    switch(op2) {
                    case 0x4:
                        //  case 0xc100:   abcd     [1100rrr10000knnn, format ????rrr?bbkkknnn, p.107]
                        eaModeSrc = aEAModes[this.abModesAddSubX[(op1 >> 3) & 0x1]]; // 0 or 1 (both ssBYTE)
                        this.dataSrc = eaModeSrc.getEAData(nnn) & 0xff;
                        eaModeDst = eaModeSrc;
                        this.dataDst = eaModeDst.getEAData(rrr) & 0xff;
                        eaModeDst.setData(this.addBCD(this.dataDst, this.dataSrc));
                        if ((op1 & 0x8) == 0) {
                            this.addCycles(6);
                        }
                        break stage1;

                    case 0x5:
                        if ((op1 & 0x8) == 0) { // EXG Drrr,Dnnn
                            //  case 0xc140:   exg      [1100rrr101000nnn, format ????rrr??????nnn, p.210]
                            op2 = this.regD[rrr];
                            this.regD[rrr] = this.regD[nnn];
                            this.regD[nnn] = op2;
                        }
                        else {                  // EXG Arrr,Annn
                            //  case 0xc148:   exg      [1100rrr101001nnn, format ????rrr??????nnn, p.210]
                            op2 = this.regA[rrr];
                            this.regA[rrr] = this.regA[nnn];
                            this.regA[nnn] = op2;
                        }
                        this.addCycles(6);
                        break stage1;

                    case 0x6:
                        if ((op1 & 0x8) != 0) { // EXG Drrr,Annn
                            //  case 0xc188:   exg      [1100rrr110001nnn, format ????rrr??????nnn, p.210]
                            op2 = this.regD[rrr];
                            this.regD[rrr] = this.regA[nnn];
                            this.regA[nnn] = op2;
                            this.addCycles(6);
                            break stage1;
                        }
                    }
                    break;      // If we're still here, must be an invalid opcode

                case 0x7:
                    //  case 0xc1c0:   muls     [1100rrr111xxxnnn, format ??????????xxxnnn, p.240]
                    eaModeSrc = aEAModes[this.abModes400[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    eaModeDst = this.eaModeDRegLong;            // this.aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                    this.dataDst = eaModeDst.getEAData(rrr) << 16 >> 16;
                    eaModeDst.setDataFlagsZNClearCV(this.dataDst * this.dataSrc);
                    this.addCycles(70);        // BUGBUG: worst-case timing -JP
                    break stage1;
                }

                this.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
                break;

            case 0xd:
                //  case 0xd000:   adda     [1101rrrk11mmmnnn, format ???????kssmmmnnn, p.112]
                //  case 0xd000:   add      [1101rrr0ssmmmnnn, format ????????ssmmmnnn, p.109]
                //  case 0xd100:   add      [1101rrr1ssuuunnn, format ????????ssuuunnn, p.109]
                //  case 0xd100:   addx     [1101rrr1ss00knnn, format ????rrr?sskkknnn, p.118]
                if ((op1 & 0x00c0) == 0x00c0) {
                    //  case 0xd000:   adda     [1101rrrk11mmmnnn, format ???????kssmmmnnn, p.112]
                    eaModeSrc = aEAModes[this.abModes000[(((op1 >> 2) & 0x40) + 0x40) | (op1 & 0x3f)]];
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    this.regA[rrr] = (this.regA[rrr] + this.dataSrc)|0;     // entire destination updated regardless of operand size
                    this.addCycles(8 - eaModeSrc.cycle2l + eaModeSrc.cycle2ADI);
                    break stage1;
                }
                if ((op1 & 0x0100) == 0) {      // EA is src
                    //  case 0xd000:   add      [1101rrr0ssmmmnnn, format ????????ssmmmnnn, p.109]
                    eaModeSrc = aEAModes[this.abModes000[op1 & 0xff]];
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    eaModeDst = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    this.dataDst = eaModeDst.getEAData(rrr);
                    eaModeDst.setDataFlagsForAdd(this.dataDst + this.dataSrc);
                    this.addCycles(4 + eaModeSrc.cycle2l + eaModeSrc.cycle2ADI);
                    break stage1;
                }
                if ((op1 & 0x0030) != 0) {      // EA is dst
                    //  case 0xd100:   add      [1101rrr1ssuuunnn, format ????????ssuuunnn, p.109]
                    eaModeSrc = aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    this.dataSrc = eaModeSrc.getEAData(rrr);
                    eaModeDst = aEAModes[this.abModesC07[op1 & 0xff]];
                    this.dataDst = eaModeDst.getEAData(nnn);
                    eaModeDst.setDataFlagsForAdd(this.dataDst + this.dataSrc);
                    this.addCycles(8 + eaModeDst.cycle4l);
                }
                else {
                    //  case 0xd100:   addx     [1101rrr1ss00knnn, format ????rrr?sskkknnn, p.118]
                    eaModeSrc = aEAModes[this.abModesAddSubX[((op1 >> 5) & 0x6) | ((op1 >> 3) & 0x1)]];
                    this.dataSrc = eaModeSrc.getEAData(nnn);
                    eaModeDst = eaModeSrc;
                    this.dataDst = eaModeDst.getEAData(rrr);
                    eaModeDst.setData(this.addX(eaModeDst.width, this.dataDst, this.dataSrc));
                    if ((op1 & 0x8) == 0) {
                        this.addCycles(4 + eaModeDst.cycle4l);
                    }
                }
                break stage1;

            case 0xe:
                //  case 0xe000:   asr      [1110000011uuunnn, format ??????????uuunnn, p.126]
                //  case 0xe000:   asr      [1110rrr0ssk00nnn, format ????rrr?ssk??nnn, p.126]
                //  case 0xe008:   lsr      [1110rrr0ssk01nnn, format ????rrr?ssk??nnn, p.218]
                //  case 0xe010:   roxr     [1110rrr0ssk10nnn, format ????rrr?ssk??nnn, p.268]
                //  case 0xe018:   ror      [1110rrr0ssk11nnn, format ????rrr?ssk??nnn, p.265]
                //  case 0xe100:   asl      [1110rrr1ssk00nnn, format ????rrr?ssk??nnn, p.126]
                //  case 0xe100:   asl      [1110000111uuunnn, format ??????????uuunnn, p.126]
                //  case 0xe108:   lsl      [1110rrr1ssk01nnn, format ????rrr?ssk??nnn, p.218]
                //  case 0xe110:   roxl     [1110rrr1ssk10nnn, format ????rrr?ssk??nnn, p.268]
                //  case 0xe118:   rol      [1110rrr1ssk11nnn, format ????rrr?ssk??nnn, p.265]
                //  case 0xe200:   lsr      [1110001011uuunnn, format ??????????uuunnn, p.218]
                //  case 0xe300:   lsl      [1110001111uuunnn, format ??????????uuunnn, p.218]
                //  case 0xe400:   roxr     [1110010011uuunnn, format ??????????uuunnn, p.268]
                //  case 0xe500:   roxl     [1110010111uuunnn, format ??????????uuunnn, p.268]
                //  case 0xe600:   ror      [1110011011uuunnn, format ??????????uuunnn, p.265]
                //  case 0xe700:   rol      [1110011111uuunnn, format ??????????uuunnn, p.265]
                if ((op1 & 0x00c0) != 0x00c0) {
                    cBits = ((op1 & 0x20) == 0)? CPU68K.aByteQuick[rrr] : (this.regD[rrr] & 0x3f);
                    op2 = ((op1 >> 2) & 0x6) | ((op1 >> 8) & 0x1);
                    eaModeDst = aEAModes[CPU68K.EAMODEINDEX_DREG_BYTE + ((op1 >> 6) & 0x3)];
                }
                else {
                    cBits = 1;
                    op2 = op1 >> 8;
                    eaModeDst = aEAModes[this.abModesC07[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                }
                this.dataDst = eaModeDst.getEAData(nnn);
                this.addCycles(8 + eaModeDst.cycle2ADl + (eaModeDst.cycle2ADI-1)*cBits);

                switch (op2 & 0x7) {
                //
                // NOTE: The Java implementation handled shift counts >= the operand width by first shifting one bit
                // and then reducing the count to width-1, which produced incorrect results and/or flags in a number
                // of cases (eg, counts larger than the width); the following code handles all those cases explicitly.
                //
                case 0x0:
                    //  case 0xe000:   asr      [....000011uuunnn, format ??????????uuunnn, p.126]
                    //  case 0xe000:   asr      [....rrr0ssk00nnn, format ????rrr?ssk??nnn, p.126]
                    if (cBits == 0) {
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst);
                    } else if (cBits >= eaModeDst.width) {
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst >> 31);
                        this.setFlagCX(cBits == eaModeDst.width? (this.dataDst >>> 31) : 0);
                    } else {
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst >> cBits);
                        this.setFlagCX((this.dataDst >> (cBits-1)) & 0x1);
                    }
                    break stage1;

                case 0x1:
                    //  case 0xe100:   asl      [....000111uuunnn, format ??????????uuunnn, p.126]
                    //  case 0xe100:   asl      [....rrr1ssk00nnn, format ????rrr?ssk??nnn, p.126]
                    if (cBits == 0) {
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst);
                        break stage1;
                    }
                    //
                    // V is set if the most significant bit changes at any time during the shift operation, which means
                    // that if the top cBits+1 bits of the operand are not all the same (or for large counts, if the
                    // operand is non-zero), V must be set.
                    //
                    if (cBits >= eaModeDst.width) {
                        dataTmp = this.dataDst & eaModeDst.mask;
                        eaModeDst.setDataFlagsZNClearCV(0);
                        this.setFlagCX(cBits == eaModeDst.width? (this.dataDst & 0x1) : 0);
                    } else {
                        dataNew = (eaModeDst.mask << (eaModeDst.width-cBits-1)) & eaModeDst.mask;
                        dataTmp = this.dataDst & dataNew;
                        dataTmp = (dataTmp != dataNew && dataTmp != 0)? 1 : 0;
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst << cBits);
                        this.setFlagCX((this.dataDst >> (eaModeDst.width-cBits)) & 0x1);
                    }
                    if (dataTmp != 0) this.setFlagV(-1);
                    break stage1;

                case 0x2:
                    //  case 0xe200:   lsr      [....001011uuunnn, format ??????????uuunnn, p.218]
                    //  case 0xe008:   lsr      [....rrr0ssk01nnn, format ????rrr?ssk??nnn, p.218]
                    this.dataDst &= eaModeDst.mask;
                    if (cBits == 0) {
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst);
                    } else if (cBits >= eaModeDst.width) {
                        eaModeDst.setDataFlagsZNClearCV(0);
                        this.setFlagCX(cBits == eaModeDst.width? (this.dataDst >>> (eaModeDst.width-1)) & 0x1 : 0);
                    } else {
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst >>> cBits);
                        this.setFlagCX((this.dataDst >>> (cBits-1)) & 0x1);
                    }
                    break stage1;

                case 0x3:
                    //  case 0xe300:   lsl      [....001111uuunnn, format ??????????uuunnn, p.218]
                    //  case 0xe108:   lsl      [....rrr1ssk01nnn, format ????rrr?ssk??nnn, p.218]
                    if (cBits == 0) {
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst);
                    } else if (cBits >= eaModeDst.width) {
                        eaModeDst.setDataFlagsZNClearCV(0);
                        this.setFlagCX(cBits == eaModeDst.width? (this.dataDst & 0x1) : 0);
                    } else {
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst << cBits);
                        this.setFlagCX((this.dataDst >> (eaModeDst.width-cBits)) & 0x1);
                    }
                    break stage1;

                case 0x4:
                    //  case 0xe400:   roxr     [....010011uuunnn, format ??????????uuunnn, p.268]
                    //  case 0xe010:   roxr     [....rrr0ssk10nnn, format ????rrr?ssk??nnn, p.268]
                    this.dataDst &= eaModeDst.mask;
                    while (cBits-- != 0) {              // BUGBUG: should eliminate method calls inside loop -JP
                        dataNew = (this.dataDst >>> 1) | (this.getFlagX() & eaModeDst.sign);
                        this.setFlagX(this.dataDst & 0x1);
                        this.dataDst = dataNew;
                    }
                    eaModeDst.setDataFlagsZNClearCV(this.dataDst);
                    this.setFlagC(this.getFlagX());
                    break stage1;

                case 0x5:
                    //  case 0xe500:   roxl     [....010111uuunnn, format ??????????uuunnn, p.268]
                    //  case 0xe110:   roxl     [....rrr1ssk10nnn, format ????rrr?ssk??nnn, p.268]
                    while (cBits-- != 0) {              // BUGBUG: should eliminate method calls inside loop -JP
                        dataNew = (this.dataDst << 1) | (this.getFlagX() & 0x1);
                        this.setFlagX(this.dataDst & eaModeDst.sign);
                        this.dataDst = dataNew;
                    }
                    eaModeDst.setDataFlagsZNClearCV(this.dataDst);
                    this.setFlagC(this.getFlagX());
                    break stage1;

                case 0x6:
                    //  case 0xe600:   ror      [....011011uuunnn, format ??????????uuunnn, p.265]
                    //  case 0xe018:   ror      [....rrr0ssk11nnn, format ????rrr?ssk??nnn, p.265]
                    if (cBits == 0) {
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst);
                        break stage1;
                    }
                    this.dataDst &= eaModeDst.mask;
                    while (cBits-- != 0) {              // BUGBUG: should eliminate method calls inside loop -JP
                        dataNew = (this.dataDst >>> 1) | ((this.dataDst & 0x1) << (eaModeDst.width-1));
                        this.setFlagC(this.dataDst & 0x1);
                        this.dataDst = dataNew;
                    }
                    eaModeDst.setDataFlagsZNClearV(this.dataDst);
                    break stage1;

                case 0x7:
                    //  case 0xe700:   rol      [....011111uuunnn, format ??????????uuunnn, p.265]
                    //  case 0xe118:   rol      [....rrr1ssk11nnn, format ????rrr?ssk??nnn, p.265]
                    if (cBits == 0) {
                        eaModeDst.setDataFlagsZNClearCV(this.dataDst);
                        break stage1;
                    }
                    while (cBits-- != 0) {              // BUGBUG: should eliminate method calls inside loop -JP
                        dataNew = (this.dataDst << 1) | ((this.dataDst & eaModeDst.sign) >>> (eaModeDst.width-1));
                        this.setFlagC(this.dataDst & eaModeDst.sign);
                        this.dataDst = dataNew;
                    }
                    eaModeDst.setDataFlagsZNClearV(this.dataDst);
                    break stage1;
                }
                break;

            case 0xf:
                if (this.dbg && (op1 & CPU68K.OP_MYBREAKPOINT_MASK) == CPU68K.OP_MYBREAKPOINT) {
                    if (this.dbg.break(this.regPCLast, true)) { // see if the debugger wants us to break
                        this.regPC = this.regPCLast;
                        this.fCPU |= CPU68K.CPU_BREAKPOINT;
                        return;
                    }
                }
                this.genException(CPU68K.EXCEPTION_LINE_F);
                break;

            }   // End stage1

            //
            // The Java implementation (in DEBUG builds) treated any instruction that failed to generate a cycle count
            // as unsupported; we simply ensure that every instruction consumes at least some cycles.
            //
            if (nCyclesCur == this.nCyclesRemain) {
                this.addCycles(4);
            }

            if ((this.fCPU & CPU68K.CPU_BREAKFLAGS) != 0) {
                break;
            }
        }

        // Note that we've added CPU_BREAKPOINT to the list of flags that can kick us out of the execution loop.
        // That's because the breakpoint and TRAP instructions, which still return immediately because the desired
        // instruction has not actually been executed yet, are no longer the only reasons CPU_BREAKPOINT can be set.
        //
        // Data read/write breakpoints can now trigger CPU_BREAKPOINT condition as well (see MarkDataAccess() in
        // the Debugger).  We can't stop the instruction from executing, because not all emulated instruction are
        // "restartable" (eg, instructions that do pre-decrement or post-increment), so we have to let it finish and
        // then wind out of ExecuteOpcodes() normally, here at the bottom....
    }

    /**
     * initCPU()
     *
     * Initializes the CPU's state.
     *
     * @this {CPU68K}
     */
    initCPU()
    {
        this.initRegs();
        this.initEAModes();
        for (let i = 0; i < 8; i++) {
            this.defineRegister("A" + i, () => this.regA[i], (value) => this.regA[i] = value|0);
            this.defineRegister("D" + i, () => this.regD[i], (value) => this.regD[i] = value|0);
        }
        this.defineRegister("SP", () => this.regA[7], (value) => this.regA[7] = value|0);
        this.defineRegister("SR", () => this.getFlags(), (value) => this.setFlagsSR(value));
        this.defineRegister("SSP", () => (this.flags & CPU68K.FLAGS_SU)? this.regA[7] : this.regSSP, (value) => {
            if (this.flags & CPU68K.FLAGS_SU) this.regA[7] = value|0; else this.regSSP = value|0;
        });
        this.defineRegister("USP", () => (this.flags & CPU68K.FLAGS_SU)? this.regUSP : this.regA[7], (value) => {
            if (this.flags & CPU68K.FLAGS_SU) this.regUSP = value|0; else this.regA[7] = value|0;
        });
        this.defineRegister("C",  () => (this.getFlagC()? 1 : 0), (value) => this.setFlagC(value));
        this.defineRegister("V",  () => (this.getFlagV()? 1 : 0), (value) => this.setFlagV(value));
        this.defineRegister("Z",  () => (this.getFlagZ()? 1 : 0), (value) => this.setFlagZ(value));
        this.defineRegister("N",  () => (this.getFlagN()? 1 : 0), (value) => this.setFlagN(value));
        this.defineRegister("X",  () => (this.getFlagX()? 1 : 0), (value) => this.setFlagX(value));
        this.defineRegister(Debugger.REGISTER.PC, () => this.regPC, (value) => this.regPC = value|0);
    }

    /**
     * InitEAModes()
     *
     * @this {CPU68K}
     */
    initEAModes()
    {
        let i = 0;
        this.aEAModes = new Array(CPU68K.ssMAX * CPU68K.mmmMAX + 1);    // +1 for EAMODEINDEX_IMMEDIATE_ILLEGAL

        this.aEAModes[i++] = new EAModeDRegByte(this);                  // must match EAMODEINDEX_DREG_BYTE
        this.aEAModes[i++] = new EAModeDRegWord(this);                  // must match EAMODEINDEX_DREG_WORD
        this.aEAModes[i++] = this.eaModeDRegLong = new EAModeDRegLong(this);

        this.aEAModes[i++] = new EAModeIllegal(this);                   // must match EAMODEINDEX_ILLEGAL
        this.aEAModes[i++] = new EAModeARegWord(this);                  // must match EAMODEINDEX_AREG_WORD
        this.aEAModes[i++] = new EAModeARegLong(this);                  // must match EAMODEINDEX_AREG_LONG

        this.aEAModes[i++] = new EAModeAValByte(this);
        this.aEAModes[i++] = new EAModeAValWord(this);
        this.aEAModes[i++] = new EAModeAValLong(this);

        this.aEAModes[i++] = new EAModeAValIncByte(this);               // must match EAMODEINDEX_AREG_INCBYTE
        this.aEAModes[i++] = new EAModeAValIncWord(this);               // must match EAMODEINDEX_AREG_INCWORD
        this.aEAModes[i++] = new EAModeAValIncLong(this);               // must match EAMODEINDEX_AREG_INCLONG

        this.aEAModes[i++] = new EAModeAValDecByte(this);               // must match EAMODEINDEX_AREG_DECBYTE
        this.aEAModes[i++] = new EAModeAValDecWord(this);               // must match EAMODEINDEX_AREG_DECWORD
        this.aEAModes[i++] = new EAModeAValDecLong(this);               // must match EAMODEINDEX_AREG_DECLONG

        this.aEAModes[i++] = new EAModeAValDispByte(this);
        this.aEAModes[i++] = new EAModeAValDispWord(this);
        this.aEAModes[i++] = new EAModeAValDispLong(this);

        this.aEAModes[i++] = new EAModeAValIndexByte(this);
        this.aEAModes[i++] = new EAModeAValIndexWord(this);
        this.aEAModes[i++] = new EAModeAValIndexLong(this);

        this.aEAModes[i++] = new EAModeAbs16Byte(this);
        this.aEAModes[i++] = new EAModeAbs16Word(this);
        this.aEAModes[i++] = new EAModeAbs16Long(this);

        this.aEAModes[i++] = new EAModeAbs32Byte(this);
        this.aEAModes[i++] = new EAModeAbs32Word(this);
        this.aEAModes[i++] = new EAModeAbs32Long(this);

        this.aEAModes[i++] = new EAModePCValDispByte(this);
        this.aEAModes[i++] = new EAModePCValDispWord(this);
        this.aEAModes[i++] = new EAModePCValDispLong(this);

        this.aEAModes[i++] = new EAModePCValIndexByte(this);
        this.aEAModes[i++] = new EAModePCValIndexWord(this);
        this.aEAModes[i++] = new EAModePCValIndexLong(this);

        this.aEAModes[i++] = new EAModeImmediateByte(this);             // must match EAMODEINDEX_IMMEDIATE_BYTE
        this.aEAModes[i++] = new EAModeImmediateWord(this);             // must match EAMODEINDEX_IMMEDIATE_WORD
        this.aEAModes[i++] = new EAModeImmediateLong(this);             // must match EAMODEINDEX_IMMEDIATE_LONG
        this.aEAModes[i++] = new EAModeIllegal(this);                   // must match EAMODEINDEX_IMMEDIATE_ILLEGAL

        /**
         * The EA mode index arrays are (for the most part) designed to convert an 8-bit mode encoding
         * into an index that allows us to quickly obtain the correct EAMode object from the aEAModes array.
         */
        this.abModes000 = new Array(256);
        this.initEAModeIndexArray(this.abModes000, 0x000);

        this.abModes007 = new Array(256);
        this.initEAModeIndexArray(this.abModes007, 0x007);

        this.abModes400 = new Array(256);
        this.initEAModeIndexArray(this.abModes400, 0x400);

        this.abModes401 = new Array(256);
        this.initEAModeIndexArray(this.abModes401, 0x401);

        this.abModes407 = new Array(256);
        this.initEAModeIndexArray(this.abModes407, 0x407);

        this.abModesC07 = new Array(256);
        this.initEAModeIndexArray(this.abModesC07, 0xC07);

        this.abModesC81 = new Array(256);
        this.initEAModeIndexArray(this.abModesC81, 0xC81);

        this.abModesD07 = new Array(256);
        this.initEAModeIndexArray(this.abModesD07, 0xD07);

        this.abModesD81 = new Array(256);
        this.initEAModeIndexArray(this.abModesD81, 0xD81);

        this.abModesMove = new Array(256);
        this.initEAModeIndexArrayInverted(this.abModesMove, 0x400);

        this.abModesAddSubX = new Array(6);
        this.abModesAddSubX[0] = CPU68K.EAMODEINDEX_DREG_BYTE;
        this.abModesAddSubX[1] = CPU68K.EAMODEINDEX_AREG_DECBYTE;
        this.abModesAddSubX[2] = CPU68K.EAMODEINDEX_DREG_WORD;
        this.abModesAddSubX[3] = CPU68K.EAMODEINDEX_AREG_DECWORD;
        this.abModesAddSubX[4] = CPU68K.EAMODEINDEX_DREG_LONG;
        this.abModesAddSubX[5] = CPU68K.EAMODEINDEX_AREG_DECLONG;
    }

    /**
     * initEAModeIndexArray(abModes, maskIllegal)
     *
     * The EA mode index arrays are (for the most part) designed to convert an 8-bit mode encoding
     * into an index that allows us to quickly obtain the correct EAMode object from the aEAModes array
     * that CPUModes.InitModes() creates.  In fact, it is that function which calls US.
     *
     * @this {CPU68K}
     * @param {Array.<number>} abModes
     * @param {number} maskIllegal
     */
    initEAModeIndexArray(abModes, maskIllegal)
    {
        let i = 0;
        for (let ss = 0; ss < CPU68K.ssMAX && i < abModes.length; ss++) {
            let mmm, nnn;
            for (mmm = 0; mmm < 7; mmm++) {
                for (nnn = 0; nnn < 8; nnn++) {
                    if ((maskIllegal & (0x800 >> mmm)) != 0) {
                        abModes[i++] = CPU68K.EAMODEINDEX_ILLEGAL;
                    }
                    else {
                        abModes[i++] = mmm * CPU68K.ssMAX + ss;

                    }
                }
            }
            for (nnn = 0; nnn < 5; nnn++) {
                if ((maskIllegal & (0x10 >> nnn)) != 0) {
                    abModes[i++] = CPU68K.EAMODEINDEX_ILLEGAL;
                }
                else {
                    abModes[i++] = (mmm + nnn) * CPU68K.ssMAX + ss;

                }
            }
            for (; nnn < 8; nnn++) {
                abModes[i++] = CPU68K.EAMODEINDEX_ILLEGAL;
            }
        }
        //
        // Any remaining entries correspond to an invalid size (ie, ss == 3), so make sure they are illegal, too.
        //
        while (i < abModes.length) {
            abModes[i++] = CPU68K.EAMODEINDEX_ILLEGAL;
        }
    }

    /**
     * initEAModeIndexArrayInverted(abModes, maskIllegal)
     *
     * The EA mode index arrays are (for the most part) designed to convert an 8-bit mode encoding
     * into an index that allows us to quickly obtain the correct EAMode object from the aEAModes array
     * that initModes() creates.  In fact, it is that function which calls US.
     *
     * @this {CPU68K}
     * @param {Array.<number>} abModes
     * @param {number} maskIllegal
     */
    initEAModeIndexArrayInverted(abModes, maskIllegal)
    {
        let i = 0;
        for (let ss = 0; ss < CPU68K.ssMAX && i < abModes.length; ss++) {
            let rrr, www;
            for (rrr = 0; rrr < 8; rrr++) {
                for (www = 0; www < 7; www++) {
                    if ((maskIllegal & (0x800 >> www)) != 0) {
                        abModes[i++] = CPU68K.EAMODEINDEX_ILLEGAL;
                    }
                    else {
                        abModes[i++] = www * CPU68K.ssMAX + ss;

                    }
                }
                if (rrr >= 5) {
                    abModes[i++] = CPU68K.EAMODEINDEX_ILLEGAL;
                }
                else if ((maskIllegal & (0x10 >> rrr)) != 0) {
                    abModes[i++] = CPU68K.EAMODEINDEX_ILLEGAL;
                }
                else {
                    abModes[i++] = (www +rrr) * CPU68K.ssMAX + ss;

                }
            }
        }
        while (i < abModes.length) {
            abModes[i++] = CPU68K.EAMODEINDEX_ILLEGAL;
        }
    }

    /**
     * loadState(stateCPU)
     *
     * If any saved values don't match (possibly overridden), abandon the given state and return false.
     *
     * @this {CPU68K}
     * @param {Array} stateCPU
     * @returns {boolean}
     */
    loadState(stateCPU)
    {
        if (!stateCPU || !stateCPU.length) {
            this.printf("invalid saved state\n");
            return false;
        }
        let idDevice = stateCPU.shift();
        let version = stateCPU.shift();
        if (idDevice != this.idDevice || (version|0) !== (+CPU68K.VERSION|0)) {
            this.printf("CPU state mismatch (%s %3.2f)\n", idDevice, version);
            return false;
        }
        try {
            this.regA = stateCPU.shift();
            this.regD = stateCPU.shift();
            this.regPC = stateCPU.shift();
            this.regSSP = stateCPU.shift();
            this.regUSP = stateCPU.shift();
            this.flags = stateCPU.shift();
            this.setFlagsCCR(this.flags);
            this.fCPU = stateCPU.shift();
            this.fRestored = true;
        } catch(err) {
            this.printf("CPU state error: %s\n", err.message);
            return false;
        }
        return true;
    }

    /**
     * saveState(stateCPU)
     *
     * @this {CPU68K}
     * @param {Array} stateCPU
     */
    saveState(stateCPU)
    {
        stateCPU.push(this.idDevice);
        stateCPU.push(+CPU68K.VERSION);
        stateCPU.push(this.regA);
        stateCPU.push(this.regD);
        stateCPU.push(this.regPC);
        stateCPU.push(this.regSSP);
        stateCPU.push(this.regUSP);
        stateCPU.push(this.getFlags());
        stateCPU.push(this.fCPU & (CPU68K.CPU_STOPPED | CPU68K.CPU_CHECKINTS));
    }

    /**
     * onLoad(state)
     *
     * Automatically called by the Machine device if the machine's 'autoSave' property is true.
     *
     * @this {CPU68K}
     * @param {Array} state
     * @returns {boolean}
     */
    onLoad(state)
    {
        if (state) {
            let stateCPU = state[0];
            if (this.loadState(stateCPU)) {
                state.shift();
                return true;
            }
        }
        return false;
    }

    /**
     * onPower(on)
     *
     * Called by the Machine device to provide notification of a power event.
     *
     * @this {CPU68K}
     * @param {boolean} on (true to power on, false to power off)
     */
    onPower(on)
    {
        if (on) {
            /**
             * If the ROM wasn't loaded yet when initRegs() called resetRegs() (eg, the ROM's values are in a separate
             * file), the reset vectors weren't available, so if no saved state was restored either, reset again.
             */
            if (!this.fRestored) {
                this.resetRegs();
                this.fRestored = true;
            }
            this.time.start();
            if (this.inputDevice) this.inputDevice.setFocus();
        } else {
            this.time.stop();
        }
    }

    /**
     * onReset()
     *
     * Called by the Machine device to provide notification of a reset event.
     *
     * @this {CPU68K}
     */
    onReset()
    {
        this.printf("reset\n");
        this.resetRegs();
        if (!this.time.isRunning()) this.print(this.toString());
    }

    /**
     * onSave(state)
     *
     * Automatically called by the Machine device before all other devices have been powered down (eg, during
     * a page unload event).
     *
     * @this {CPU68K}
     * @param {Array} state
     */
    onSave(state)
    {
        let stateCPU = [];
        this.saveState(stateCPU);
        state.push(stateCPU);
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
     * @this {CPU68K}
     * @param {boolean} [fTransition]
     */
    onUpdate(fTransition)
    {
        // TODO: Decide what bindings we want to support, and update them as appropriate.
    }

    /**
     * resetFlags(flagsNew)
     *
     * @this {CPU68K}
     * @param {number} flagsNew
     */
    resetFlags(flagsNew)
    {
        this.setFlagsSR(flagsNew);
        this.fCPU &= ~CPU68K.CPU_RESETFLAGS;
    }

    /**
     * getFlags()
     *
     * This function wants to perform unsigned 32-bit comparisons, and like Java, JavaScript does
     * not have an unsigned data type; however, unlike Java, JavaScript has an unsigned right-shift (>>>)
     * operator, which like all JavaScript bit-wise operators, also truncates the result to 32 bits.
     *
     * So the seemingly useless ">>> 0" operation is actually quite useful here.  Another option would be
     * to "mod" the values with 2^32 (eg, "flag % Math.pow(2,32)"), but that seems slower.
     *
     * @this {CPU68K}
     */
    getFlags()
    {
        let flagsNew = this.flags & ~(CPU68K.FLAGS_EXTEND | CPU68K.FLAGS_NEGATIVE | CPU68K.FLAGS_ZERO | CPU68K.FLAGS_OVERFLOW | CPU68K.FLAGS_CARRY);

        // The following code is deliberate in-lining of the individual getFlag* functions, for performance

        if (this.flagZNew == 0) {
            flagsNew |= CPU68K.FLAGS_ZERO;
        }

        if (this.flagNNew < 0) {
            flagsNew |= CPU68K.FLAGS_NEGATIVE;
        }

        if ((this.flagCSrc >>> 0) > (this.flagCDst >>> 0)) {
            flagsNew |= CPU68K.FLAGS_CARRY;
        }

        if ((this.flagXSrc >>> 0) > (this.flagXDst >>> 0)) {
            flagsNew |= CPU68K.FLAGS_EXTEND;
        }

        if ((this.flagVNew < 0) != (this.flagVDst < 0) && (this.flagVSrc < 0) != (this.flagVDst < 0)) {
            flagsNew |= CPU68K.FLAGS_OVERFLOW;
        }

        // BUGBUG: No one should be depending on getFlags() propagating the arithmetic states to the CCR bits.
        // The main motivation for NOT propagating is that the debugger calls getFlags(), and we don't want the
        // debugger to have any side-effects (even supposedly innocuous ones). -JP
        //
        // return flags = flagsNew;

        return flagsNew;
    }

    /**
     * getFlagC()
     *
     * This function wants to perform an unsigned 32-bit comparison, and like Java, JavaScript does
     * not have an unsigned data type; however, unlike Java, JavaScript has an unsigned right-shift (>>>)
     * operator, which like all JavaScript bit-wise operators, also truncates the result to 32 bits.
     *
     * So the seemingly useless ">>> 0" operation is actually quite useful here.  Another option would be
     * to "mod" the values with 2^32 (eg, "flag % Math.pow(2,32)"), but that seems slower.
     *
     * @this {CPU68K}
     * @returns {number}
     */
     getFlagC()
     {
         //
         // This needs to be an unsigned comparison, but unfortunately, Java doesn't
         // have unsigned data types.  The easiest thing to do is promote our variables to
         // 64-bit longs, and then mask them to 32 bits, insuring that we are comparing
         // positive values.
         //
         // NOTE: the 'L' appended to each 0xffffffff mask is essential, since otherwise
         // the masks would be treated as signed integers, and automatic promotion to longs
         // would turn them into 0xffffffffffffffff instead of 0x00000000ffffffff.
         //
         // return (((long)flagCSrc & 0xffffffffL) > ((long)flagCDst & 0xffffffffL))? -1 : 0;
         //
         return ((this.flagCSrc >>> 0) > (this.flagCDst >>> 0))? -1 : 0;
     }

    /**
     * getFlagV()
     *
     * @this {CPU68K}
     * @returns {number}
     */
     getFlagV()
     {
         return ((this.flagVNew < 0) != (this.flagVDst < 0) && (this.flagVSrc < 0) != (this.flagVDst < 0))? -1 : 0;
     }

    /**
     * getFlagZ()
     *
     * @this {CPU68K}
     * @returns {number}
     */
    getFlagZ()
    {
        return (this.flagZNew == 0)? -1 : 0;
    }

    /**
     * getFlagN()
     *
     * @this {CPU68K}
     * @returns {number}
     */
    getFlagN()
    {
        return (this.flagNNew < 0)? -1 : 0;
    }

    /**
     * getFlagX()
     *
     * This function wants to perform an unsigned 32-bit comparison, and like Java, JavaScript does
     * not have an unsigned data type; however, unlike Java, JavaScript has an unsigned right-shift (>>>)
     * operator, which like all JavaScript bit-wise operators, also truncates the result to 32 bits.
     *
     * So the seemingly useless ">>> 0" operation is actually quite useful here.  Another option would be
     * to "mod" the values with 2^32 (eg, "flag % Math.pow(2,32)"), but that seems slower.
     *
     * @this {CPU68K}
     * @returns {number}
     */
    getFlagX()
    {
        //
        // This needs to be an unsigned comparison, but unfortunately, Java doesn't
        // have unsigned data types.  The easiest thing to do is promote our variables to
        // 64-bit longs, and then mask them to 32 bits, insuring that we are comparing
        // positive values.
        //
        // NOTE: the 'L' appended to each 0xffffffff mask is essential, since otherwise
        // the masks would be treated as signed integers, and automatic promotion to longs
        // would turn them into 0xffffffffffffffff instead of 0x00000000ffffffff.
        //
        // return (((long)flagXSrc & 0xffffffffL) > ((long)flagXDst & 0xffffffffL))? -1 : 0;
        //
        return ((this.flagXSrc >>> 0) > (this.flagXDst >>> 0))? -1 : 0;
    }

    /**
     * getFlagHI()
     *
     * This function wants to perform an unsigned 32-bit comparison, and like Java, JavaScript does
     * not have an unsigned data type; however, unlike Java, JavaScript has an unsigned right-shift (>>>)
     * operator, which like all JavaScript bit-wise operators, also truncates the result to 32 bits.
     *
     * So the seemingly useless ">>> 0" operation is actually quite useful here.  Another option would be
     * to "mod" the values with 2^32 (eg, "flag % Math.pow(2,32)"), but that seems slower.
     *
     * @this {CPU68K}
     * @returns {number}
     */
    getFlagHI()
    {
        return (/* getFlagC() == 0 */ (this.flagCSrc >>> 0) <= (this.flagCDst >>> 0) && /* getFlagZ() == 0 */ this.flagZNew != 0)? -1 : 0;
    }

    /**
     * getFlagGE()
     *
     * @this {CPU68K}
     * @returns {number}
     */
    getFlagGE()
    {
        let N = this.getFlagN() != 0;
        let V = this.getFlagV() != 0;
        return (N && V || !N && !V)? -1 : 0;
    }

    /**
     * getFlagLT()
     *
     * @this {CPU68K}
     * @returns {number}
     */
    getFlagLT()
    {
        let N = this.getFlagN() != 0;
        let V = this.getFlagV() != 0;
        return (N && !V || !N && V)? -1 : 0;
    }

    /**
     * getFlagGT()
     *
     * @this {CPU68K}
     * @returns {number}
     */
    getFlagGT()
    {
        let Z = this.getFlagZ() != 0;
        let N = this.getFlagN() != 0;
        let V = this.getFlagV() != 0;
        return (N && V && !Z || !N && !V && !Z)? -1 : 0;
    }

    /**
     * getFlagLE()
     *
     * @this {CPU68K}
     * @returns {number}
     */
    getFlagLE()
    {
        let Z = this.getFlagZ() != 0;
        let N = this.getFlagN() != 0;
        let V = this.getFlagV() != 0;
        return (Z || N && !V || !N && V)? -1 : 0;
    }

    /**
     * getFlagIPM()
     *
     * @this {CPU68K}
     * @returns {number}
     */
    getFlagIPM()
    {
        return (this.flags & CPU68K.FLAGS_IPM) >> CPU68K.FLAGS_IPM_SHIFT;
    }

    /**
     * setFlagsCCR(flags)
     *
     * Formerly setFlags(byte flags), setFlagsCCR() effectively sets the low byte of SR.
     *
     * @this {CPU68K}
     * @param {number} flags
     */
    setFlagsCCR(flags)
    {
        this.flagNNew = 0;
        this.flagCSrc = this.flagCDst = 0;
        this.flagVNew = this.flagVDst = 0;
        this.flagXSrc = this.flagXDst = 0;
        this.flagZNew = this.flagZTmp = 0;

        if ((flags & CPU68K.FLAGS_ZERO) == 0) {
            this.flagZNew = -1;
        }

        if ((flags & CPU68K.FLAGS_NEGATIVE) != 0) {
            this.flagNNew = -1;
        }

        if ((flags & CPU68K.FLAGS_CARRY) != 0) {
            this.flagCSrc = -1;
        }

        if ((flags & CPU68K.FLAGS_EXTEND) != 0) {
            this.flagXSrc = -1;
        }

        if ((flags & CPU68K.FLAGS_OVERFLOW) != 0) {
            this.flagVNew = this.flagVSrc = -1;
        }
    }

    /**
     * setFlagsSR(flags)
     *
     * Formerly setFlags(int flags), setFlagsSR() sets both the high and low (CCR) bytes of SR.
     *
     * Unlike the Java implementation, we also switch stacks whenever the supervisor bit changes, so that A7
     * is always the active stack pointer, and the inactive stack pointer is maintained in either regSSP or regUSP.
     *
     * @this {CPU68K}
     * @param {number} flags
     */
    setFlagsSR(flags)
    {
        flags &= CPU68K.FLAGS_MASK;

        // Before we blow away the original flag bits, let's see if the interrupt level
        // is dropping; if so, we'll want to set CPU_CHECKINTS....
        if ((flags & CPU68K.FLAGS_IPM) < (this.flags & CPU68K.FLAGS_IPM)) {
            this.fCPU |= CPU68K.CPU_CHECKINTS;
        }

        if ((flags ^ this.flags) & CPU68K.FLAGS_SU) {
            if (flags & CPU68K.FLAGS_SU) {
                this.regUSP = this.regA[7];
                this.regA[7] = this.regSSP;
            } else {
                this.regSSP = this.regA[7];
                this.regA[7] = this.regUSP;
            }
        }

        // Clear everything outside the CCR bits.
        this.flags &= CPU68K.FLAGS_CCR;

        // We probably don't need to carefully exclude the caller's CCR bits at this step,
        // since the CCR bits are always computed dynamically, but let's avoid any confusion.
        this.flags |= (flags & ~CPU68K.FLAGS_CCR);

        this.setFlagsCCR(flags);
    }

    /**
     * setFlagC(c)
     *
     * @this {CPU68K}
     * @param {number} c
     */
     setFlagC(c)
     {
         this.flagCSrc = this.flagCDst = 0;
         if (c != 0) {
             this.flagCSrc = -1;
         }
     }

    /**
     * setFlagV(v)
     *
     * @this {CPU68K}
     * @param {number} v
     */
    setFlagV(v)
    {
        this.flagVNew = this.flagVDst = 0;
        if (v != 0) {
            this.flagVNew = this.flagVSrc = -1;
        }
    }

    /**
     * setFlagZ(z)
     *
     * @this {CPU68K}
     * @param {number} z
     */
    setFlagZ(z)
    {
        this.flagZNew = (z == 0)? -1 : 0;
    }

    /**
     * setFlagN(n)
     *
     * @this {CPU68K}
     * @param {number} n
     */
    setFlagN(n)
    {
        this.flagNNew = (n != 0)? -1 : 0;
    }

    /**
     * setFlagX(x)
     *
     * @this {CPU68K}
     * @param {number} x
     */
    setFlagX(x)
    {
        this.flagXSrc = this.flagXDst = 0;
        if (x != 0) {
            this.flagXSrc = -1;
        }
    }

    /**
     * setFlagCX(c)
     *
     * @this {CPU68K}
     * @param {number} c
     */
    setFlagCX(c)
    {
        this.flagCSrc = this.flagCDst = 0;
        this.flagXSrc = this.flagXDst = 0;
        if (c != 0) {
            this.flagCSrc = this.flagXSrc = -1;
        }
    }

    /**
     * setORFlagsCCR(b)
     *
     * @this {CPU68K}
     * @param {number} b
     */
    setORFlagsCCR(b)                    // used to OR flags into CCR
    {
        this.setFlagsCCR(this.getFlags() | b);
    }

    /**
     * setORFlagsSR(s)
     *
     * @this {CPU68K}
     * @param {number} s
     */
    setORFlagsSR(s)                     // used to OR flags into SR (PRIVILEGED)
    {
        if ((this.flags & CPU68K.FLAGS_SU) == 0) {
            this.genException(CPU68K.EXCEPTION_PRIVILEGE_VIOLATION);
            return;
        }
        this.setFlagsSR(this.getFlags() | s);
    }

    /**
     * setANDFlagsCCR(b)
     *
     * @this {CPU68K}
     * @param {number} b
     */
    setANDFlagsCCR(b)                   // used to AND flags out of CCR
    {
        this.setFlagsCCR(this.getFlags() & b);
    }

    /**
     * setANDFlagsSR(s)
     *
     * @this {CPU68K}
     * @param {number} s
     */
    setANDFlagsSR(s)                    // used to AND flags out of SR (PRIVILEGED)
    {
        if ((this.flags & CPU68K.FLAGS_SU) == 0) {
            this.genException(CPU68K.EXCEPTION_PRIVILEGE_VIOLATION);
            return;
        }
        this.setFlagsSR(this.getFlags() & s);
    }

    /**
     * setEORFlagsCCR(b)
     *
     * @this {CPU68K}
     * @param {number} b
     */
    setEORFlagsCCR(b)                   // used to EOR flags in CCR
    {
        this.setFlagsCCR(this.getFlags() ^ b);
    }

    /**
     * setEORFlagsSR(s)
     *
     * @this {CPU68K}
     * @param {number} s
     */
    setEORFlagsSR(s)                    // used to EOR flags in SR (PRIVILEGED)
    {
        if ((this.flags & CPU68K.FLAGS_SU) == 0) {
            this.genException(CPU68K.EXCEPTION_PRIVILEGE_VIOLATION);
            return;
        }
        this.setFlagsSR(this.getFlags() ^ s);
    }

    /**
     * setFlagIPM(iLevel)
     *
     * @this {CPU68K}
     * @param {number} iLevel
     */
    setFlagIPM(iLevel)
    {
        this.flags &= ~CPU68K.FLAGS_IPM;
        this.flags |= (iLevel << CPU68K.FLAGS_IPM_SHIFT);
    }

    /**
     * initRegs()
     *
     * @this {CPU68K}
     */
    initRegs()
    {
        this.fCPU = 0;
        this.flags = 0;
        this.regPC = 0;                 // program counter
        this.regPCLast = 0;             // program counter for the previous instruction
        this.regPCTrap = 0;             // program counter for the last TRAP executed
        this.regSSP = 0;                // supervisor stack pointer (when in user mode)
        this.regUSP = 0;                // user stack pointer (when in supervisor mode)
        this.regD = [0,0,0,0,0,0,0,0];  // data registers
        this.regA = [0,0,0,0,0,0,0,0];  // address registers (regA[7] is always the active stack pointer)
        this.dataSrc = this.dataDst = 0;// internal data operands (exposed to the EAMode classes)
        this.flagNNew = this.flagZNew = this.flagZTmp = 0;
        this.flagCSrc = this.flagCDst = this.flagXSrc = this.flagXDst = 0;
        this.flagVSrc = this.flagVDst = this.flagVNew = 0;
        this.nCyclesRemain = 0;
        this.aInjections = [];          // queue of calls waiting to be injected (see injectTrap())
        this.injection = null;          // the injected call (if any) currently in progress
        this.addrVectors = this.config['resetVectors'];
        this.resetRegs();
    }

    /**
     * resetRegs()
     *
     * Simulates a 68K reset, which (in addition to resetting SR) loads SSP and PC from the reset vectors.
     *
     * On a real 68000, the reset vectors are at address 0, but on a DragonBall (as on many other 68K systems),
     * the boot ROM is temporarily decoded at that address, so we allow the config to specify where to find them
     * ('resetVectors'); if not specified, we fall back to the CPU's 'addrReset' setting for the initial PC.
     *
     * @this {CPU68K}
     */
    resetRegs()
    {
        for (let i = 0; i < this.regD.length; i++) {
            this.regD[i] = 0;
        }
        for (let i = 0; i < this.regA.length; i++) {
            this.regA[i] = 0;
        }
        this.regSSP = this.regUSP = 0;
        this.flags = CPU68K.FLAGS_SU;
        this.resetFlags(CPU68K.FLAGS_SU | CPU68K.FLAGS_IPM);
        this.regPC = this.addrReset;
        if (this.addrVectors != undefined) {
            this.regA[7] = this.getLong(this.addrVectors);
            this.regPC = this.getLong(this.addrVectors + 4);
        }
        this.regPCLast = this.regPC;
        this.nStep = 0;                 // instruction step counter
        this.iPendingException = CPU68K.EXCEPTION_NONE;
        this.addrPendingException = 0;  // set to exception-specific address, if any (eg, EA from EXCEPTION_ADDRESS_ERROR)
        this.abortInjections();
    }

    /**
     * setHWRegs(hwregs)
     *
     * Called by the device responsible for interrupt management (eg, PilotIO), so that we can call its
     * checkInterrupts() function whenever CPU_CHECKINTS has been set.
     *
     * @this {CPU68K}
     * @param {HWRegs} hwregs
     */
    setHWRegs(hwregs)
    {
        this.hwregs = hwregs;
    }

    /**
     * injectTrap(iTrap, aParms, done)
     *
     * Queues a "TRAP #15" call (eg, a PalmOS API) to be injected the next time the CPU is stopped (ie, idling on
     * a STOP instruction), which is the same approach that the original Java implementation used to make API calls
     * on behalf of scripts (see ScriptVarFunc.Call() and CPUThread.CheckStopEvents()).
     *
     * The call is made by pushing the following onto the stack: the address of the next instruction to execute (ie,
     * the instruction following the STOP), an OP_STOP_INJECT instruction, and a "TRAP #15" instruction with the given
     * selector, followed by all the parameters (in reverse order).  The PC is then set to the stacked TRAP instruction.
     * When the trap returns, the stacked OP_STOP_INJECT instruction restores the stack and PC and stops the CPU again,
     * at which point checkInjections() reports the results and issues the next queued call, if any.
     *
     * @this {CPU68K}
     * @param {number} iTrap (the API selector that follows the "TRAP #15" instruction)
     * @param {Array.<Array.<number>>} aParms (array of [value, size] pairs, where size is 2 or 4)
     * @param {function((Object|null))} done (called with {d0, a0} when the call returns, or null if aborted)
     */
    injectTrap(iTrap, aParms, done)
    {
        this.aInjections.push({iTrap, aParms, done});
    }

    /**
     * checkInjections()
     *
     * Called by execute() whenever the CPU is stopped and an injected call is either queued or in progress.
     *
     * @this {CPU68K}
     */
    checkInjections()
    {
        let injection = this.injection;
        if (injection) {
            if (!injection.result) return;
            this.injection = null;
            this.fCPU &= ~CPU68K.CPU_INJECTING;
            injection.done(injection.result);
        }
        injection = this.aInjections.shift();
        if (injection) {
            if ((this.getWord(this.regPC - 4) & 0xffff) != CPU68K.OP_STOP || !(this.flags & CPU68K.FLAGS_SU)) {
                this.printf("unable to inject %#06x at %#010x\n", injection.iTrap, this.regPC);
                injection.done(null);
                return;
            }
            this.pushLong(this.regPC);
            this.pushLong(CPU68K.OP_STOP_INJECT);
            this.pushLong((CPU68K.OP_TRAP_0xF << 16) | (injection.iTrap & 0xffff));
            let addrCall = this.regA[7];
            for (let i = injection.aParms.length - 1; i >= 0; i--) {
                let [value, size] = injection.aParms[i];
                if (size == 4) {
                    this.pushLong(value);
                } else {
                    this.pushWord(value);
                }
            }
            this.regPC = addrCall;
            this.fCPU &= ~CPU68K.CPU_STOPPED;
            this.fCPU |= CPU68K.CPU_INJECTING;
            this.injection = injection;
        }
    }

    /**
     * abortInjections()
     *
     * @this {CPU68K}
     */
    abortInjections()
    {
        let aInjections = this.aInjections;
        if (this.injection) aInjections.unshift(this.injection);
        this.aInjections = [];
        this.injection = null;
        this.fCPU &= ~CPU68K.CPU_INJECTING;
        for (let injection of aInjections) injection.done(null);
    }

    /**
     * addCycles(nCycles)
     *
     * @this {CPU68K}
     * @param {number} nCycles
     */
    addCycles(nCycles)
    {
        this.nCyclesRemain -= nCycles;
    }

    /**
     * callException(iVector, addrReturn)
     *
     * Now that we have access to all essential CPU components (flags, registers and memory),
     * we can implement CPU exception handling.  See the EXCEPTION_* definitions for a complete list
     * of supported exceptions.
     *
     * @this {CPU68K}
     * @param {number} iVector
     * @param {number} [addrReturn] (default is the current PC)
     */
    callException(iVector, addrReturn = this.regPC)
    {
        let handler = this.getLong(CPU68K.EVT_BASE + iVector*4);

        if (handler == 0) {
            this.printf("exception %#04x at %#010x: invalid handler\n", iVector, this.regPCLast);
            this.time.stop();
        }

        let flags = this.getFlags();
        if ((this.flags & CPU68K.FLAGS_SU) == 0) {
            this.regUSP = this.regA[7];
            this.regA[7] = this.regSSP;
        }
        this.flags |= CPU68K.FLAGS_SU;          // indicates we're in supervisor mode now
        this.flags &= ~CPU68K.FLAGS_T1;         // the trace bit is also supposed to be cleared
        this.fCPU &= ~CPU68K.CPU_STOPPED;       // and any exception (eg, an interrupt) also terminates a STOP
        this.pushLong(addrReturn);
        this.pushWord(flags);
        this.regPC = handler;

        //
        //  BUGBUG: EXCEPTION_ACCESS_FAULT isn't being generated anywhere (I assume it should occur when an address
        //  outside valid ranges is encountered), and even EXCEPTION_ADDRESS_ERROR is only being generated in DEBUG builds,
        //  by MarkDataAccess_Debug().  Don't forget to call the "GenerateException(iVector, addr)" form whenever these
        //  particular exceptions are being generated. -JP
        //
        if (iVector == CPU68K.EXCEPTION_ACCESS_FAULT || iVector == CPU68K.EXCEPTION_ADDRESS_ERROR) {
            //
            //  BUGBUG: This is documented as "instruction register", but I'm not sure what that means; perhaps the
            //  16-bit instruction that triggered the exception?  Documentation is weak, but I didn't look too hard yet. -JP
            //
            this.pushWord(0);
            this.pushLong(this.addrPendingException);
            //
            //  BUGBUG: This is documented as "R/W" (bit 4), where Write=0 and Read=1, "I/N" (bit 3),
            //  where Instruction=0 and Not=1, and "Function Code" (bits 2-0), but the 68K Programmer's Reference Manual doesn't
            //  document. -JP
            //
            this.pushWord(0);
        }
    }

    /**
     * returnFromException()
     *
     * @this {CPU68K}
     */
    returnFromException()
    {
        if ((this.flags & CPU68K.FLAGS_SU) == 0) {
            this.genException(CPU68K.EXCEPTION_PRIVILEGE_VIOLATION);
        }
        let flags = this.popWord();
        this.regPC = this.popLong();
        this.setFlagsSR(flags);
    }

    /**
     * genException(iVector, sMessage)
     *
     * Record the emulated exception and then throw EXCEPTION_THROWN to force control to immediately return to
     * execute(), which will then call processException().  This is how the Java implementation (GenerateException)
     * aborted the current instruction as well.
     *
     * Internal "informational" exceptions use negative vector numbers; they don't have to interrupt the CPU.
     *
     * @this {CPU68K}
     * @param {number} iVector
     * @param {string} [sMessage]
     */
    genException(iVector, sMessage)
    {
        if (iVector < 0) {
            if (sMessage) this.printf(MESSAGE.CPU, "%s\n", sMessage);
            return;
        }
        this.iPendingException = iVector;
        this.sPendingException = sMessage;
        throw CPU68K.EXCEPTION_THROWN;
    }

    /**
     * processException()
     *
     * Called by execute() whenever genException() has thrown EXCEPTION_THROWN.
     *
     * The Java implementation always reset the PC to the beginning of the faulting instruction before calling
     * the exception handler, which is correct for most exceptions (eg, illegal instructions and privilege violations),
     * but for divide-by-zero, CHK, and TRAPV, the 68000 stacks the address of the NEXT instruction, so we do too.
     *
     * Exception vectors >= 0x100 are internal errors, which stop the machine.
     *
     * @this {CPU68K}
     */
    processException()
    {
        let iVector = this.iPendingException;
        this.iPendingException = CPU68K.EXCEPTION_NONE;
        if (iVector >= 0x100) {
            this.regPC = this.regPCLast;
            this.printf("%#010x: %s\n", this.regPCLast, this.sPendingException || this.sprintf("internal exception %#x", iVector));
            this.nCyclesRemain = 0;
            this.time.stop();
            return;
        }
        let addrReturn = this.regPCLast;
        if (iVector == CPU68K.EXCEPTION_INT_DIVIDE_BY_ZERO || iVector == CPU68K.EXCEPTION_CHK_INSTRUCTION || iVector == CPU68K.EXCEPTION_TRAPV_OVERFLOW) {
            addrReturn = this.regPC;
        }
        this.callException(iVector, addrReturn);
        this.addCycles(34);
    }

    /**
     * addX(width, dst, src)
     *
     * Performs an extended addition (dst + src + X) for ADDX, computing all the flags explicitly.
     *
     * The Java implementation folded X into the source operand and then relied on the normal "lazy" flag
     * calculations, which lost the carry whenever the adjusted source operand overflowed (eg, 0xff + X).
     *
     * Note that, as with all the extended operations, Z is cleared if the result is non-zero, unchanged otherwise.
     *
     * @this {CPU68K}
     * @param {number} width (8, 16, or 32)
     * @param {number} dst
     * @param {number} src
     * @returns {number}
     */
    addX(width, dst, src)
    {
        let res = (dst + src + (this.getFlagX()? 1 : 0))|0;
        let shift = 32 - width;
        let s = src << shift, d = dst << shift, r = res << shift;
        this.setFlagCX(((s & d) | (~r & d) | (s & ~r)) < 0? -1 : 0);
        this.setFlagV(((s & d & ~r) | (~s & ~d & r)) < 0? -1 : 0);
        if (r) this.flagZNew = r;
        this.flagNNew = r;
        return res;
    }

    /**
     * subX(width, dst, src)
     *
     * Performs an extended subtraction (dst - src - X) for SUBX and NEGX, computing all the flags explicitly.
     *
     * @this {CPU68K}
     * @param {number} width (8, 16, or 32)
     * @param {number} dst
     * @param {number} src
     * @returns {number}
     */
    subX(width, dst, src)
    {
        let res = (dst - src - (this.getFlagX()? 1 : 0))|0;
        let shift = 32 - width;
        let s = src << shift, d = dst << shift, r = res << shift;
        this.setFlagCX(((s & ~d) | (r & ~d) | (s & r)) < 0? -1 : 0);
        this.setFlagV(((~s & d & ~r) | (s & ~d & r)) < 0? -1 : 0);
        if (r) this.flagZNew = r;
        this.flagNNew = r;
        return res;
    }

    /**
     * addBCD(dst, src)
     *
     * Performs a BCD addition (dst + src + X), updating flags X, C, Z, N and V (N and V are officially undefined,
     * but we emulate the behavior of real hardware).
     *
     * @this {CPU68K}
     * @param {number} dst (byte)
     * @param {number} src (byte)
     * @returns {number} (byte)
     */
    addBCD(dst, src)
    {
        let res = (src & 0x0f) + (dst & 0x0f) + (this.getFlagX()? 1 : 0);
        let corf = (res > 9)? 6 : 0;
        res += (src & 0xf0) + (dst & 0xf0);
        let v = ~res;
        res += corf;
        let c = (res > 0x9f);
        if (c) res -= 0xa0;
        this.setBCDFlags(res, c, v & res);
        return res & 0xff;
    }

    /**
     * subBCD(dst, src)
     *
     * Performs a BCD subtraction (dst - src - X), updating flags X, C, Z, N and V (N and V are officially undefined,
     * but we emulate the behavior of real hardware).
     *
     * @this {CPU68K}
     * @param {number} dst (byte)
     * @param {number} src (byte)
     * @returns {number} (byte)
     */
    subBCD(dst, src)
    {
        let res = (dst & 0x0f) - (src & 0x0f) - (this.getFlagX()? 1 : 0);
        let corf = ((res >>> 0) > 0xf)? 6 : 0;
        res += (dst & 0xf0) - (src & 0xf0);
        let v = res, c = false;
        if ((res >>> 0) > 0xff) {
            res += 0xa0;
            c = true;
        } else if (res < corf) {
            c = true;
        }
        res = (res - corf) & 0xff;
        this.setBCDFlags(res, c, v & ~res);
        return res;
    }

    /**
     * negBCD(src)
     *
     * Performs a BCD negation (0 - src - X), updating flags X, C, Z, N and V (N and V are officially undefined,
     * but we emulate the behavior of real hardware).
     *
     * @this {CPU68K}
     * @param {number} src (byte)
     * @returns {number} (byte)
     */
    negBCD(src)
    {
        let res = (-src - (this.getFlagX()? 1 : 0))|0;
        if (res) {
            let v = res;
            if (((res | src) & 0x0f) == 0) res = (res & 0xf0) + 6;
            res = (res + 0x9a) & 0xff;
            this.setBCDFlags(res, true, v & ~res);
        } else {
            this.setFlagCX(0);
            this.setFlagV(0);
            this.flagNNew = 0;
        }
        return res;
    }

    /**
     * setBCDFlags(res, c, v)
     *
     * @this {CPU68K}
     * @param {number} res
     * @param {boolean} c
     * @param {number} v (bit 7 is the new V flag)
     */
    setBCDFlags(res, c, v)
    {
        this.setFlagCX(c? -1 : 0);
        if (res & 0xff) this.flagZNew = -1;     // Z is cleared if the result is non-zero, unchanged otherwise
        this.flagNNew = res << 24 >> 24;
        this.setFlagV(v & 0x80);
    }

    /**
     * setDivOverflow()
     *
     * On a 68000, a division overflow sets V and clears C; N and Z are officially undefined, but real hardware
     * leaves them unchanged.
     *
     * @this {CPU68K}
     */
    setDivOverflow()
    {
        this.setFlagV(-1);
        this.setFlagC(0);
    }

    /**
     * getByte(addr)
     *
     * Like the Java implementation, all reads are sign-extended.
     *
     * @this {CPU68K}
     * @param {number} addr is a linear address
     * @returns {number} byte (8-bit) value at that address (sign-extended)
     */
    getByte(addr)
    {
        return this.busMemory.readData(addr & CPU68K.ADDR_MASK) << 24 >> 24;
    }

    /**
     * getWord(addr)
     *
     * @this {CPU68K}
     * @param {number} addr is a linear address
     * @returns {number} word (16-bit) value at that address (sign-extended)
     */
    getWord(addr)
    {
        return this.busMemory.readPair(addr & CPU68K.ADDR_MASK) << 16 >> 16;
    }

    /**
     * getLong(addr)
     *
     * @this {CPU68K}
     * @param {number} addr is a linear address
     * @returns {number} long (32-bit) value at that address (signed)
     */
    getLong(addr)
    {
        return this.busMemory.readQuad(addr & CPU68K.ADDR_MASK)|0;
    }

    /**
     * setByte(addr, b)
     *
     * @this {CPU68K}
     * @param {number} addr is a linear address
     * @param {number} b is the byte (8-bit) value to write (which we truncate to 8 bits to be safe)
     */
    setByte(addr, b)
    {
        this.busMemory.writeData(addr & CPU68K.ADDR_MASK, b & 0xff);
    }

    /**
     * setWord(addr, w)
     *
     * @this {CPU68K}
     * @param {number} addr is a linear address
     * @param {number} w is the word (16-bit) value to write (which we truncate to 16 bits to be safe)
     */
    setWord(addr, w)
    {
        this.busMemory.writePair(addr & CPU68K.ADDR_MASK, w & 0xffff);
    }

    /**
     * setLong(addr, l)
     *
     * @this {CPU68K}
     * @param {number} addr is a linear address
     * @param {number} l is the long (32-bit) value to write
     */
    setLong(addr, l)
    {
        this.busMemory.writeQuad(addr & CPU68K.ADDR_MASK, l|0);
    }

    /**
     * getPCByte()
     *
     * @this {CPU68K}
     * @returns {number} byte at the current PC; PC advanced by 1
     */
    getPCByte()
    {
        let b = this.getByte(this.regPC);
        this.regPC = (this.regPC + 1)|0;
        return b;
    }

    /**
     * getPCWord()
     *
     * @this {CPU68K}
     * @returns {number} word at the current PC (sign-extended); PC advanced by 2
     */
    getPCWord()
    {
        let w = this.getWord(this.regPC);
        this.regPC = (this.regPC + 2)|0;
        return w;
    }

    /**
     * getPCLong()
     *
     * @this {CPU68K}
     * @returns {number} long at the current PC; PC advanced by 4
     */
    getPCLong()
    {
        let l = this.getLong(this.regPC);
        this.regPC = (this.regPC + 4)|0;
        return l;
    }

    /**
     * popWord()
     *
     * Pop one word from the default stack.
     *
     * @this {CPU68K}
     * @returns {number}
     */
    popWord()
    {
        let w = this.getWord(this.regA[7]);
        this.regA[7] = (this.regA[7] + 2)|0;
        return w;
    }

    /**
     * pushWord(data)
     *
     * Push one word onto the default stack.
     *
     * @this {CPU68K}
     * @param {number} data
     */
    pushWord(data)
    {
        this.regA[7] = (this.regA[7] - 2)|0;
        this.setWord(this.regA[7], data);
    }

    /**
     * popLong()
     *
     * Pop one long from the default stack.
     *
     * @this {CPU68K}
     * @returns {number}
     */
    popLong()
    {
        let l = this.getLong(this.regA[7]);
        this.regA[7] = (this.regA[7] + 4)|0;
        return l;
    }

    /**
     * pushLong(data)
     *
     * Push one long onto the default stack.
     *
     * @this {CPU68K}
     * @param {number} data
     */
    pushLong(data)
    {
        this.regA[7] = (this.regA[7] - 4)|0;
        this.setLong(this.regA[7], data);
    }

    /**
     * toInstruction(addr, opcode)
     *
     * Returns a string representation of the specified instruction.
     *
     * @this {CPU68K}
     * @param {number} addr
     * @param {number|undefined} [opcode]
     * @returns {string}
     */
    toInstruction(addr, opcode)
    {
        return this.dbg && this.dbg.dumpInstruction(addr, 1) || "";
    }

    /**
     * toString()
     *
     * Returns a string representation of the current CPU state.  For example, my original 68K Java emulator displayed:
     *
     *      D0=00002604 D1=000008fc D2=00000000 D3=00005e56
     *      D4=10c4b47e D5=00000000 D6=10c6e44c D7=00000001
     *      A0=fffff000 A1=10c068b6 A2=fffff000 A3=000071e0
     *      A4=00007abc A5=0000551e A6=000074b8 A7=000074a4 SR=2000 IC=1358690
     *      10c07148: 4e75            RTS                                             ;xnzvc
     *
     * @this {CPU68K}
     * @returns {string}
     */
    toString()
    {
        return this.sprintf("D0=%08x D1=%08x D2=%08x D3=%08x\nD4=%08x D5=%08x D6=%08x D7=%08x\nA0=%08x A1=%08x A2=%08x A3=%08x\nA4=%08x A5=%08x A6=%08x A7=%08x SR=%04x %s\n%s",
            this.regD[0], this.regD[1], this.regD[2], this.regD[3], this.regD[4], this.regD[5], this.regD[6], this.regD[7],
            this.regA[0], this.regA[1], this.regA[2], this.regA[3], this.regA[4], this.regA[5], this.regA[6], this.regA[7],
            this.getFlags(), this.getFlagString(), this.toInstruction(this.regPC));
    }

    /**
     * getFlagString()
     *
     * Returns the CCR flags in the same format my original Java debugger used (eg, "xnZvc").
     *
     * @this {CPU68K}
     * @returns {string}
     */
    getFlagString()
    {
        return (this.getFlagX()? 'X' : 'x') + (this.getFlagN()? 'N' : 'n') + (this.getFlagZ()? 'Z' : 'z') + (this.getFlagV()? 'V' : 'v') + (this.getFlagC()? 'C' : 'c');
    }
}

/**
 * Definitions ported from CPUDefs.java
 *
 * Exception vector assignments (see p.631)
 */
CPU68K.EXCEPTION_NONE                  = 0x00;  // vector 0 contains reset SSP, vector 1 contains reset PC
CPU68K.EXCEPTION_ACCESS_FAULT          = 0x02;  // aka "Bus Error"
CPU68K.EXCEPTION_ADDRESS_ERROR         = 0x03;
CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION   = 0x04;
CPU68K.EXCEPTION_INT_DIVIDE_BY_ZERO    = 0x05;
CPU68K.EXCEPTION_CHK_INSTRUCTION       = 0x06;
CPU68K.EXCEPTION_TRAPV_OVERFLOW        = 0x07;
CPU68K.EXCEPTION_PRIVILEGE_VIOLATION   = 0x08;
CPU68K.EXCEPTION_TRACE                 = 0x09;
CPU68K.EXCEPTION_LINE_A                = 0x0a;  // aka "Line 1010 Emulator"
CPU68K.EXCEPTION_LINE_F                = 0x0b;  // aka "Line 1111 Emulator"
CPU68K.EXCEPTION_UNINITIALIZED_IVR     = 0x0f;  // where interrupts go when the IVR hasn't been initialized yet

CPU68K.EXCEPTION_TRAP_0xF              = 0x2f;  // TRAP 0xf uses vector 0x2f (ie, TRAP n uses vector 0x2n)

CPU68K.TRAP_0xF_PALMOS_API             = 0xa000;// PalmOS encodes API numbers in the word following the OP_TRAP_0xF instruction, starting with this value

/**
 * Exception vector numbers < 0 are used for internal "warning exceptions" and can be ignored
 */
CPU68K.EXCEPTION_INVALID_CODE          = -1;
CPU68K.EXCEPTION_INVALID_DATA          = -2;
CPU68K.EXCEPTION_UNIMPLEMENTED_CODE    = -3;
CPU68K.EXCEPTION_UNINITIALIZED_DATA    = -4;

/**
 * Exception vector numbers >= 256 are used for internal "error exceptions" (eg, assertion failures) and cannot be ignored
 */
CPU68K.EXCEPTION_UNSUPP_INSTRUCTION    = 0x100; // unsupported instruction
CPU68K.EXCEPTION_INVALID_HANDLER       = 0x101; // exception handler is invalid (eg, corrupt vector contents)

/**
 * This is the object that genException() throws (and execute() catches) after recording the pending exception.
 */
CPU68K.EXCEPTION_THROWN                = {exception: "68K"};

/**
 * Used with Debugger's markDataAccess(), if supported.
 */
CPU68K.DATAACCESS_UNINIT               = 3;

/**
 * Opcodes that we have special checks for in various places...
 */
CPU68K.OP_TRAP                         = 0x4e40;
CPU68K.OP_TRAP_MASK                    = 0xfff0;
CPU68K.OP_TRAP_0xF                     = 0x4e4f;// vectors via EXCEPTION_TRAP_0xF
CPU68K.OP_TRAP_0xF_MASK                = 0xffff;
CPU68K.OP_LINK                         = 0x4e50;
CPU68K.OP_LINK_MASK                    = 0xfff8;
CPU68K.OP_STOP                         = 0x4e72;
CPU68K.OP_STOP_TRACE                   = 0x4e72fffd;
CPU68K.OP_STOP_FREEZE                  = 0x4e72fffe;
CPU68K.OP_STOP_INJECT                  = 0x4e72ffff;
CPU68K.OP_RTE                          = 0x4e73;
CPU68K.OP_RTS                          = 0x4e75;
CPU68K.OP_JSR                          = 0x4e80;
CPU68K.OP_JSR_MASK                     = 0xffc0;
CPU68K.OP_JSR_PC_REL                   = 0x4eba;
CPU68K.OP_JSR_PC_REL_INDEX             = 0x4ebb;
CPU68K.OP_JMP_PC_REL                   = 0x4efa;
CPU68K.OP_JMP_PC_REL_INDEX             = 0x4efb;
CPU68K.OP_BSR                          = 0x6100;
CPU68K.OP_BSR_MASK                     = 0xff00;
CPU68K.OP_MYBREAKPOINT                 = 0xf003;// my "unofficial" breakpoint instruction
CPU68K.OP_MYBREAKPOINT_MASK            = 0xffff;// mask needed only because opcode happens to be a signed value

/**
 * Descriptions of known memory locations/limits.  See CPUMem for a description of the entire
 * memory map.  Suffice to say here that we only provide for (at most) 32Mb unique addresses, because
 * CPUMem masks the top 7 bits from all effective addresses.  In other words, all unique memory
 * locations must be unique in the low 25 bits.  Also note that those locations are effectively
 * replicated 128 times throughout the entire 4Gb (32-bit) address space.  RAM_LIMIT is set to the
 * largest power-of-two RAM size (0x800000 or 8Mb) that fits within that unique address space (32Mb)
 * AND still leaves enough room for a ROM (typically starting around 0x10c00000, equivalent to 0xc00000
 * after masking, or 12Mb).
 *
 * RAM must also be mirrored at offset 0x10000000.  The exact extent and behavior (eg, write-protection)
 * of the mirrored region is TBD, until we have a better understanding of the hardware.  The fact that
 * we're masking the top two hex digits from all effective addresses provides sufficiently compatible
 * mirroring for now.
 */
CPU68K.EVT_BASE                = 0x00000000;
CPU68K.EVT_SIZE                = 4*256;
CPU68K.RAM_BASE                = 0x00000000;
CPU68K.RAM_LIMIT               = 0x00800000;    // 8Mb
CPU68K.RAM_MIRROR              = 0x10000000;
CPU68K.ADDR_MASK               = 0x01ffffff;    // all addresses are masked to 25 bits (32Mb)

/**
 * CPU states
 *
 * CPU_STARTED is set by CPUThread.Start(), and cleared by the CPU thread itself (inside CPUThread.run())
 * in response to seeing CPU_KILLED (at which time the CPU thread clears CPU_KILLED as well).  CPUThread.Stop()
 * only has work to do if CPU_STARTED is set.  CPUThread.Thaw() automatically calls CPUThread.Start() to
 * insure the CPU has been started.  Start() and Thaw(), as well as Resume(), along with Stop() and Freeze(),
 * are all synchronized.
 *
 * CPU_RUNNING is set by the CPU thread immediately before executing any opcodes (before ExecuteOpcodes()).
 * After it has finished executing some number of opcodes, it calls WaitResume(), which then clears
 * CPU_RUNNING.  WaitResume() then wakes up anyone who's blocked in Freeze(), Halt() or WaitStep(), as
 * they wait for their blocking request to be honored.  Freeze(), Halt(), WaitStep() and WaitResume() are
 * all synchronized.  WaitResume() returns and allows the CPU to continue running once it has been unblocked
 * or killed.
 *
 * NOTE: CPU_RUNNING is an internal state, used to detect when the CPU has acknowledged a pending freeze or
 * suspend or halt.  For example, if the CPU encounters a "STOP", CPU_RUNNING will be cleared, but only temporarily,
 * so use IsHalted() to accurately determine the CPU's "run state".
 *
 * CPU_FROZEN, CPU_SUSPENDED, CPU_STOPPED, and CPU_TRACING have similar effects (ie, to block CPU execution) but
 * are necessarily independent.  The CPU_SUSPENDED state may change as the needs of the device change (eg, it may
 * be set when a "STOP" instruction is encountered, and it may be cleared when a simulated hardware interrupt
 * fires), and the debugger is not allowed to modify that state.  On the other hand, CPU_TRACING is specifically
 * for the debugger alone to modify.  Unlike other debuggers that must use the hardware's trace flag, our
 * debugger prefers to not interfere with the hardware, making it possible even to debug software trace handlers.
 * As for CPU_FROZEN, that happens when the CPU needs to be stopped externally, such as when the device is being
 * powered down, memory is being reinitialized, calls are being injected, or possibly if/when we decide to replace
 * selected OS functions with native functions that must block the CPU until the native function is done.
 *
 * NOTE: CPU_SUSPENDED is not currently used with "STOP" instructions, largely because we aren't using an
 * external event (eg, separate thread) to drive our virtual timer hardware.  Instead, we are depending on
 * the CPU to execute instructions regularly, and then we're using the instruction count to simulate a
 * virtual cycle count that in turn drives the virtual timer(s).  That means the CPU thread can only yield/sleep
 * briefly on "STOP" instructions, otherwise the timer(s) would never advance.
 *
 * Also, it's easy to be confused about why we need CPU_TRACING *and* CPU_STEPPING *and* a stepping count.
 * Here's why: the debugger can't use CPU_SUSPENDED to stop the CPU because that would interfere with the
 * device's simulated suspend state (well, IF we were using CPU_SUSPENDED on "STOP" instructions that is),
 * so CPU_TRACING serves the same purpose, exclusively for the debugger.  Second, yes, a stepping count is the
 * only other thing the debugger would need to implement single-stepping, but that would require any code
 * monitoring changes in the CPU's state to check TWO variables;  by changing one more bit (CPU_STEPPING)
 * whenever the debugger also changes the stepping count, the state change can be detected more simply.
 *
 * Finally, why is CPU_WATCHALL also separate?  Because instruction watching is yet another state completely
 * independent of whether or not the device is suspended (eg, powered down, dozing, or whatever) and also
 * independent of whether or not the debugger is currently single-stepping, running free until a breakpoint, etc.
 */

CPU68K.CPU_NONE             = 0x00000000;
CPU68K.CPU_STARTED          = 0x00000001;   // CPU thread created
CPU68K.CPU_RUNNING          = 0x00000002;   // CPU thread executing opcodes
CPU68K.CPU_WAITING          = 0x00000004;   // CPU thread waiting (to be unfrozen, unsuspended or untraced)
CPU68K.CPU_KILLED           = 0x00000008;   // CPU thread needs to be shut down
CPU68K.CPU_FROZEN           = 0x00000010;   // block execution until unfrozen (asynchronous)
CPU68K.CPU_SUSPENDED        = 0x00000020;   // block execution until resumed (synchronous)
CPU68K.CPU_TRACING          = 0x00000040;   // used by debugger to block execution (independent of CPU_FROZEN and CPU_SUSPENDED)
CPU68K.CPU_STEPPING         = 0x00000080;   // used by debugger to single-step instruction(s) until step count goes to zero
CPU68K.CPU_STOPPED          = 0x00000100;   // this is how we currently implement STOP (instead of CPU_SUSPENDED)
CPU68K.CPU_WATCHHW          = 0x00000200;   // used by debugger to watch hardware accesses
CPU68K.CPU_WATCHALL         = 0x00000400;   // used by debugger to single-step and display every instruction
CPU68K.CPU_BREAKPOINT       = 0x00000800;   // ExecuteOpcodes detected one of the debugger's breakpoints
CPU68K.CPU_EXCEPTION        = 0x00001000;   // CPUThread.run() caught an exception
CPU68K.CPU_CHECKINTS        = 0x00002000;   // some condition has changed warranting interrupt check
CPU68K.CPU_CHECKLCD         = 0x00004000;   // some condition has changed warranting LCD screen check
CPU68K.CPU_TRACEONSTOP      = 0x00008000;   // auto-trace the CPU on STOP
CPU68K.CPU_FREEZEONSTOP     = 0x00010000;   // auto-freeze the CPU on STOP
CPU68K.CPU_INJECTING        = 0x00020000;   // in the process of injecting a call
CPU68K.CPU_PAGING           = 0x00040000;   // in the process of demand-paging some memory
CPU68K.CPU_MEMINIT          = 0x10000000;   // memory subsystem initialized (CPUMem.InitMem has been called)
CPU68K.CPU_VALID            = 0x20000000;   // CPU loaded from valid server

CPU68K.CPU_RESETFLAGS       = (CPU68K.CPU_STOPPED | CPU68K.CPU_WATCHHW | CPU68K.CPU_WATCHALL | CPU68K.CPU_BREAKPOINT | CPU68K.CPU_EXCEPTION | CPU68K.CPU_CHECKINTS | CPU68K.CPU_CHECKLCD | CPU68K.CPU_TRACEONSTOP | CPU68K.CPU_FREEZEONSTOP | CPU68K.CPU_INJECTING);
CPU68K.CPU_BREAKFLAGS       = (CPU68K.CPU_KILLED | CPU68K.CPU_FROZEN | CPU68K.CPU_SUSPENDED | CPU68K.CPU_STOPPED | CPU68K.CPU_TRACING | CPU68K.CPU_BREAKPOINT | CPU68K.CPU_CHECKINTS | CPU68K.CPU_CHECKLCD);

CPU68K.aByteInc         = [1, 1, 1, 1, 1, 1, 1, 2];
CPU68K.aByteQuick       = [8, 1, 2, 3, 4, 5, 6, 7];

CPU68K.ssBYTE           = 0;
CPU68K.ssWORD           = 1;
CPU68K.ssLONG           = 2;
CPU68K.ssMAX            = 3;

CPU68K.mmmDREG          = 0;
CPU68K.mmmAREG          = 1;
CPU68K.mmmAVAL          = 2;
CPU68K.mmmAVALINC       = 3;
CPU68K.mmmAVALDEC       = 4;
CPU68K.mmmAVALDISP      = 5;
CPU68K.mmmAVALINDEX     = 6;
CPU68K.mmmABS16         = 7;
CPU68K.mmmABS32         = 8;
CPU68K.mmmPCVALDISP     = 9;
CPU68K.mmmPCVALINDEX    = 10;
CPU68K.mmmIMMEDIATE     = 11;
CPU68K.mmmMAX           = 12;

CPU68K.EAMODEINDEX_DREG                 = 0;
CPU68K.EAMODEINDEX_DREG_BYTE            = 0;
CPU68K.EAMODEINDEX_DREG_WORD            = 1;
CPU68K.EAMODEINDEX_DREG_LONG            = 2;
CPU68K.EAMODEINDEX_ILLEGAL              = 3;
CPU68K.EAMODEINDEX_AREG_WORD            = 4;
CPU68K.EAMODEINDEX_AREG_LONG            = 5;
CPU68K.EAMODEINDEX_AREG_INCBYTE         = 9;
CPU68K.EAMODEINDEX_AREG_INCWORD         = 10;
CPU68K.EAMODEINDEX_AREG_INCLONG         = 11;
CPU68K.EAMODEINDEX_AREG_DECBYTE         = 12;
CPU68K.EAMODEINDEX_AREG_DECWORD         = 13;
CPU68K.EAMODEINDEX_AREG_DECLONG         = 14;
CPU68K.EAMODEINDEX_IMMEDIATE            = 33;
CPU68K.EAMODEINDEX_IMMEDIATE_BYTE       = 33;
CPU68K.EAMODEINDEX_IMMEDIATE_WORD       = 34;
CPU68K.EAMODEINDEX_IMMEDIATE_LONG       = 35;
CPU68K.EAMODEINDEX_IMMEDIATE_ILLEGAL    = 36;

/**
 * Definitions ported from CPUFlags.java
 */
CPU68K.FLAGS_CARRY        = 0x0001;
CPU68K.FLAGS_OVERFLOW     = 0x0002;
CPU68K.FLAGS_ZERO         = 0x0004;
CPU68K.FLAGS_NEGATIVE     = 0x0008;
CPU68K.FLAGS_EXTEND       = 0x0010;
CPU68K.FLAGS_CCR          = 0x001f;
CPU68K.FLAGS_RESERVED1    = 0x00e0;
CPU68K.FLAGS_IPM          = 0x0700;             // Interrupt Priority Mask
CPU68K.FLAGS_IPM_SHIFT    = 8;
CPU68K.FLAGS_RESERVED2    = 0x0800;
CPU68K.FLAGS_MI           = 0x1000;             // (always 0 on 68000)
CPU68K.FLAGS_SU           = 0x2000;             // 1 == supervisor mode
CPU68K.FLAGS_T0           = 0x4000;             // (always 0 on 68000)
CPU68K.FLAGS_T1           = 0x8000;             // 1 == trace on any instruction
CPU68K.FLAGS_MASK         = 0xa71f;             // all the SR bits that actually exist on a 68000

CPU68K.CLASSES["CPU68K"] = CPU68K;

/**
 * @copyright https://www.pcjs.org/machines/motorola/68k/modules/v3/dbg68k.js (C) 2012-2026 Jeff Parsons
 */

/* eslint-disable no-labels */
/* eslint-disable no-extra-label */


/**
 * 68K Debugger
 *
 * @class Dbg68K
 * @unrestricted
 */
class Dbg68K extends Debugger {
    /**
     * Dbg68K(idMachine, idDevice, config)
     *
     * @this {Dbg68K}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);
        this.maxOpcodeLength = 6;

        /**
         * Machine-specific code (eg, PilotIO) can supply a function that converts the selector word following
         * a "TRAP #15" instruction into a name (see setTrapHandler()).
         */
        this.getTrapName = null;

        let i = 0;
        this.aEAModes = [];
        this.aEAModes[i++] = new DbgModeDRegByte(this);         // must match EAMODEINDEX_DREG_BYTE
        this.aEAModes[i++] = new DbgModeDRegWord(this);         // must match EAMODEINDEX_DREG_WORD
        this.aEAModes[i++] = new DbgModeDRegLong(this);         // must match EAMODEINDEX_DREG_LONG

        this.aEAModes[i++] = new DbgModeIllegal(this);          // must match EAMODEINDEX_ILLEGAL
        this.aEAModes[i++] = new DbgModeARegWord(this);         // must match EAMODEINDEX_AREG_WORD
        this.aEAModes[i++] = new DbgModeARegLong(this);         // must match EAMODEINDEX_AREG_LONG

        this.aEAModes[i++] = new DbgModeAValByte(this);
        this.aEAModes[i++] = new DbgModeAValWord(this);
        this.aEAModes[i++] = new DbgModeAValLong(this);

        this.aEAModes[i++] = new DbgModeAValIncByte(this);      // must match EAMODEINDEX_AREG_INCBYTE
        this.aEAModes[i++] = new DbgModeAValIncWord(this);      // must match EAMODEINDEX_AREG_INCWORD
        this.aEAModes[i++] = new DbgModeAValIncLong(this);      // must match EAMODEINDEX_AREG_INCLONG

        this.aEAModes[i++] = new DbgModeAValDecByte(this);      // must match EAMODEINDEX_AREG_DECBYTE
        this.aEAModes[i++] = new DbgModeAValDecWord(this);      // must match EAMODEINDEX_AREG_DECWORD
        this.aEAModes[i++] = new DbgModeAValDecLong(this);      // must match EAMODEINDEX_AREG_DECLONG

        this.aEAModes[i++] = new DbgModeAValDispByte(this);
        this.aEAModes[i++] = new DbgModeAValDispWord(this);
        this.aEAModes[i++] = new DbgModeAValDispLong(this);

        this.aEAModes[i++] = new DbgModeAValIndexByte(this);
        this.aEAModes[i++] = new DbgModeAValIndexWord(this);
        this.aEAModes[i++] = new DbgModeAValIndexLong(this);

        this.aEAModes[i++] = new DbgModeAbs16Byte(this);
        this.aEAModes[i++] = new DbgModeAbs16Word(this);
        this.aEAModes[i++] = new DbgModeAbs16Long(this);

        this.aEAModes[i++] = new DbgModeAbs32Byte(this);
        this.aEAModes[i++] = new DbgModeAbs32Word(this);
        this.aEAModes[i++] = new DbgModeAbs32Long(this);

        this.aEAModes[i++] = new DbgModePCValDispByte(this);
        this.aEAModes[i++] = new DbgModePCValDispWord(this);
        this.aEAModes[i++] = new DbgModePCValDispLong(this);

        this.aEAModes[i++] = new DbgModePCValIndexByte(this);
        this.aEAModes[i++] = new DbgModePCValIndexWord(this);
        this.aEAModes[i++] = new DbgModePCValIndexLong(this);

        this.aEAModes[i++] = new DbgModeImmediateByte(this);    // must match EAMODEINDEX_IMMEDIATE_BYTE
        this.aEAModes[i++] = new DbgModeImmediateWord(this);    // must match EAMODEINDEX_IMMEDIATE_WORD
        this.aEAModes[i++] = new DbgModeImmediateLong(this);    // must match EAMODEINDEX_IMMEDIATE_LONG
        this.aEAModes[i++] = new DbgModeIllegal(this);          // must match EAMODEINDEX_IMMEDIATE_ILLEGAL
    }

    /**
     * setTrapHandler(func)
     *
     * @this {Dbg68K}
     * @param {function(number):string} func
     */
    setTrapHandler(func)
    {
        this.getTrapName = func;
    }

    /**
     * break(addr, fArmed)
     *
     * @this {Dbg68K}
     * @param {number} addr
     * @param {boolean} fArmed
     * @returns {boolean}
     */
    break(addr, fArmed)
    {
        return false;       // TODO
    }

    /**
     * markDataAccess(addr, length, iAccess)
     *
     * @this {Dbg68K}
     * @param {number} addr
     * @param {number} length
     * @param {number} iAccess
     */
    markDataAccess(addr, length, iAccess)
    {
        // TODO
    }

    /**
     * unassemble(address, opcodes, annotation)
     *
     * Overrides Debugger's default unassemble() function with one that understands 68K instructions.
     *
     * @this {Dbg68K}
     * @param {Address} address (advanced by the number of processed opcodes)
     * @param {Array.<number>} opcodes (each processed opcode is shifted out, reducing the size of the array)
     * @param {string} [annotation] (optional string to append to the final result)
     * @returns {string}
     */
    unassemble(address, opcodes, annotation)
    {
        let addr = address.off;
        let sBytes = null, sOp = null, sSrc = null, sDst = null;
        let op1 = 0, op2, ss, rrr, nnn, iMask, iModeSrc, iModeDst;
        let fError = false, fDispEA = false;
        let eaModeSrc = null, eaModeDst = null;

        try {

            this.curPC = addr;                          // use specified addr instead of cpu.pc
            op1 = this.getWord(this.curPC);             // get next instruction (don't forget this can be a signed integer if the opcode is a signed word)
            this.curPC += 2;

            ss = CPU68K.ssBYTE;
            nnn = op1 & 0x7;
            rrr = (op1 >> 9) & 0x7;

    stage1: switch ((op1 >> 12) & 0xf) {

            case 0x0:
                //  case 0x0000:   ori      [00000000sswwwnnn, format ????????sswwwnnn]
                //  case 0x003c:   ori      [0000000000111100, format none]
                //  case 0x007c:   ori      [0000000001111100, format none]
                //  case 0x0100:   btst     [0000rrr100yyynnn, format ??????????yyynnn]
                //  case 0x0108:   movep    [0000rrr100001nnn, format none]
                //  case 0x0140:   bchg     [0000rrr101bbbnnn, format ??????????bbbnnn]
                //  case 0x0148:   movep    [0000rrr101001nnn, format none]
                //  case 0x0180:   bclr     [0000rrr110bbbnnn, format ??????????bbbnnn]
                //  case 0x0188:   movep    [0000rrr110001nnn, format none]
                //  case 0x01c0:   bset     [0000rrr111bbbnnn, format ??????????bbbnnn]
                //  case 0x01c8:   movep    [0000rrr111001nnn, format none]
                //  case 0x0200:   andi     [00000010sswwwnnn, format ????????sswwwnnn]
                //  case 0x023c:   andi     [0000001000111100, format none]
                //  case 0x027c:   andi     [0000001001111100, format none]
                //  case 0x0400:   subi     [00000100sswwwnnn, format ????????sswwwnnn]
                //  case 0x0600:   addi     [00000110sswwwnnn, format ????????sswwwnnn]
                //  case 0x0800:   btst     [0000100000zzznnn, format ??????????zzznnn]
                //  case 0x0840:   bchg     [0000100001bbbnnn, format ??????????bbbnnn]
                //  case 0x0880:   bclr     [0000100010bbbnnn, format ??????????bbbnnn]
                //  case 0x08c0:   bset     [0000100011bbbnnn, format ??????????bbbnnn]
                //  case 0x0a00:   eori     [00001010sswwwnnn, format ????????sswwwnnn]
                //  case 0x0a3c:   eori     [0000101000111100, format none]
                //  case 0x0a7c:   eori     [0000101001111100, format none]
                //  case 0x0c00:   cmpi     [00001100sswwwnnn, format ????????sswwwnnn]

                iModeSrc = CPU68K.EAMODEINDEX_DREG_LONG;

                switch ((op1 >> 8) & 0xf) {

                case 0x0:
                    //  case 0x0000:   ori      [....0000sswwwnnn, format ????????sswwwnnn]
                    //  case 0x003c:   ori      [....000000111100, format none]
                    //  case 0x007c:   ori      [....000001111100, format none]
                    sOp = "ORI";
                    eaModeSrc = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_IMMEDIATE];
                    sSrc = eaModeSrc.getString(0);
                    if ((op1 & 0x3f) != 0x3c) {
                        eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0xff]];
                        sDst = eaModeDst.getString(nnn);
                    }
                    else if ((op1 & 0x00c0) == 0x0000) {
                        sDst = "CCR";
                    } else if ((op1 & 0x00c0) == 0x0040) {
                        sDst = "SR";
                    }
                    break stage1;

                case 0x2:
                    //  case 0x0200:   andi     [....0010sswwwnnn, format ????????sswwwnnn]
                    //  case 0x023c:   andi     [....001000111100, format none]
                    //  case 0x027c:   andi     [....001001111100, format none]
                    sOp = "ANDI";
                    eaModeSrc = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_IMMEDIATE];
                    sSrc = eaModeSrc.getString(0);
                    if ((op1 & 0x3f) != 0x3c) {
                        eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0xff]];
                        sDst = eaModeDst.getString(nnn);
                    }
                    else if ((op1 & 0x00c0) == 0x0000) {
                        sDst = "CCR";
                    } else if ((op1 & 0x00c0) == 0x0040) {
                        sDst = "SR";
                    }
                    break stage1;

                case 0x4:
                    //  case 0x0400:   subi     [....0100sswwwnnn, format ????????sswwwnnn]
                    sOp = "SUBI";
                    eaModeSrc = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_IMMEDIATE];
                    sSrc = eaModeSrc.getString(0);
                    eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0xff]];
                    sDst = eaModeDst.getString(nnn);
                    break stage1;

                case 0x6:
                    //  case 0x0600:   addi     [....0110sswwwnnn, format ????????sswwwnnn]
                    sOp = "ADDI";
                    eaModeSrc = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_IMMEDIATE];
                    sSrc = eaModeSrc.getString(0);
                    eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0xff]];
                    sDst = eaModeDst.getString(nnn);
                    break stage1;

                case 0x8:
                    //  case 0x0800:   btst     [....100000zzznnn, format ??????????zzznnn]
                    //  case 0x0840:   bchg     [....100001bbbnnn, format ??????????bbbnnn]
                    //  case 0x0880:   bclr     [....100010bbbnnn, format ??????????bbbnnn]
                    //  case 0x08c0:   bset     [....100011bbbnnn, format ??????????bbbnnn]
                    iModeSrc = CPU68K.EAMODEINDEX_IMMEDIATE_WORD;
                    rrr = 0;
                    break;

                case 0xa:
                    //  case 0x0a00:   eori     [....1010sswwwnnn, format ????????sswwwnnn]
                    //  case 0x0a3c:   eori     [....101000111100, format none]
                    //  case 0x0a7c:   eori     [....101001111100, format none]
                    sOp = "EORI";
                    eaModeSrc = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_IMMEDIATE];
                    sSrc = eaModeSrc.getString(0);
                    if ((op1 & 0x3f) != 0x3c) {
                        eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0xff]];
                        sDst = eaModeDst.getString(nnn);
                    }
                    else if ((op1 & 0x00c0) == 0x0000) {
                        sDst = "CCR";
                    }
                    else if ((op1 & 0x00c0) == 0x0040) {
                        sDst = "SR";
                    }
                    break stage1;

                case 0xc:
                    //  case 0x0c00:   cmpi     [....1100sswwwnnn, format ????????sswwwnnn]
                    sOp = "CMPI";
                    eaModeSrc = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_IMMEDIATE];
                    sSrc = eaModeSrc.getString(0);
                    eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0xff]];
                    sDst = eaModeDst.getString(nnn);
                    break stage1;

                case 0xe:                   // undefined
                    break stage1;

                case 0x1:
                    //  case 0x0100:   btst     [....rrr100yyynnn, format ??????????yyynnn]
                    //  case 0x0108:   movep    [....rrr100001nnn, format none]
                    //  case 0x0140:   bchg     [....rrr101bbbnnn, format ??????????bbbnnn]
                    //  case 0x0148:   movep    [....rrr101001nnn, format none]
                    //  case 0x0180:   bclr     [....rrr110bbbnnn, format ??????????bbbnnn]
                    //  case 0x0188:   movep    [....rrr110001nnn, format none]
                    //  case 0x01c0:   bset     [....rrr111bbbnnn, format ??????????bbbnnn]
                    //  case 0x01c8:   movep    [....rrr111001nnn, format none]
                    rrr = 0;
                    break;
                case 0x3:
                    rrr = 1;
                    break;
                case 0x5:
                    rrr = 2;
                    break;
                case 0x7:
                    rrr = 3;
                    break;
                case 0x9:
                    rrr = 4;
                    break;
                case 0xb:
                    rrr = 5;
                    break;
                case 0xd:
                    rrr = 6;
                    break;
                case 0xf:
                    rrr = 7;
                    break;
                }

                if ((op1 & 0x0038) == 0x0008) {
                    //  case 0x0108:   movep    [....rrr100001nnn, format none]
                    //  case 0x0148:   movep    [....rrr101001nnn, format none]
                    //  case 0x0188:   movep    [....rrr110001nnn, format none]
                    //  case 0x01c8:   movep    [....rrr111001nnn, format none]
                    sOp = "MOVEP";  sSrc = "???";
                }
                else {
                    //  case 0x0100:   btst     [....rrr100yyynnn, format ??????????yyynnn]
                    //  case 0x0140:   bchg     [....rrr101bbbnnn, format ??????????bbbnnn]
                    //  case 0x0180:   bclr     [....rrr110bbbnnn, format ??????????bbbnnn]
                    //  case 0x01c0:   bset     [....rrr111bbbnnn, format ??????????bbbnnn]

                    eaModeSrc = this.aEAModes[iModeSrc];
                    sSrc = eaModeSrc.getString(rrr);
                    if ((op1 & 0x0038) == 0x0000) {
                        //dataSrc = (1 << (dataSrc & 31));
                        eaModeDst = this.aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                        sDst = eaModeDst.getString(nnn);
                    }
                    else {
                        //dataSrc = (1 << (dataSrc & 7));
                        if ((op1 & 0x00c0) == 0) {
                            eaModeDst = this.aEAModes[this.cpu.abModes401[op1 & 0x3f]];
                        } else {
                            eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0x3f]];
                        }
                        sDst = eaModeDst.getString(nnn);
                    }
                    switch ((op1 >> 6) & 0x3) {
                    case 0:
                        //  case 0x0800:   btst     [....100000zzznnn, format ??????????zzznnn]
                        sOp = "BTST";
                        break;
                    case 1:
                        //  case 0x0840:   bchg     [....100001bbbnnn, format ??????????bbbnnn]
                        sOp = "BCHG";
                        break;

                    case 2:
                        //  case 0x0880:   bclr     [....100010bbbnnn, format ??????????bbbnnn]
                        sOp = "BCLR";
                        break;

                    case 3:
                        //  case 0x08c0:   bset     [....100011bbbnnn, format ??????????bbbnnn]
                        sOp = "BSET";
                        break;
                    }
                }
                break stage1;

            case 0x2:
                ss++;   // fall through...

            case 0x3:
                ss++;   // fall through...

            case 0x1:
                //  case 0x1000:   move     [00ssrrrwwwmmmnnn, format ??ssrrrwwwmmmnnn]
                //  case 0x1040:   movea    [00ssrrr001mmmnnn, format ??ss??????mmmnnn]
                ss <<= 6;
                if ((op1 & 0x01c0) != 0x0040) {
                    //  case 0x1000:   move     [00ssrrrwwwmmmnnn, format ??ssrrrwwwmmmnnn]
                    sOp = "MOVE";
                    eaModeSrc = this.aEAModes[this.cpu.abModes000[ss + (op1 & 0x3f)]];
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = this.aEAModes[this.cpu.abModesMove[ss + ((op1 >> 6) & 0x3f)]];
                    sDst = eaModeDst.getString(rrr);
                }
                else {
                    //  case 0x1040:   movea    [00ssrrr001mmmnnn, format ??ss??????mmmnnn]
                    sOp = "MOVEA";
                    eaModeSrc = this.aEAModes[this.cpu.abModes000[ss + (op1 & 0x3f)]];
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = this.aEAModes[CPU68K.EAMODEINDEX_AREG_LONG];
                    sDst = eaModeDst.getString(rrr);
                }
                break stage1;

            case 0x4:
                //  case 0x4000:   negx     [01000000sswwwnnn, format ????????sswwwnnn]
                //  case 0x40c0:   move     [0100000011wwwnnn, format ??????????wwwnnn]
                //  case 0x4180:   chk      [0100rrr110xxxnnn, format ??????????xxxnnn, p.174]
                //  case 0x41c0:   lea      [0100rrr111pppnnn, format ??????????pppnnn, p.215]
                //  case 0x4200:   clr      [01000010sswwwnnn, format ????????sswwwnnn]
                //  case 0x42c0:   move     [0100001011wwwnnn, format ??????????wwwnnn]
                //  case 0x4400:   neg      [01000100sswwwnnn, format ????????sswwwnnn]
                //  case 0x44c0:   move     [0100010011xxxnnn, format ??????????xxxnnn]
                //  case 0x4600:   not      [01000110sswwwnnn, format ????????sswwwnnn]
                //  case 0x46c0:   move     [0100011011xxxnnn, format ??????????xxxnnn]
                //  case 0x4800:   nbcd     [0100100000wwwnnn, format ??????????wwwnnn]
                //  case 0x4840:   pea      [0100100001pppnnn, format ??????????pppnnn]
                //  case 0x4840:   swap     [0100100001000nnn, format none]
                //  case 0x4880:   ext      [0100100010000nnn, format none]
                //  case 0x4880:   movem    [010010001kuuunnn, format ?????????kuuunnn, p.233]
                //  case 0x48c0:   ext      [0100100011000nnn, format none]
                //  case 0x49c0:   ext      [0100100111000nnn, format none]
                //  case 0x4a00:   tst      [01001010ssmmmnnn, format ????????ssmmmnnn]
                //  case 0x4ac0:   tas      [0100101011wwwnnn, format ??????????wwwnnn]
                //  case 0x4afc:   illegal  [0100101011111100, format none]
                //  case 0x4c80:   movem    [010011001ktttnnn, format ?????????ktttnnn, p.233]
                //  case 0x4e40:   trap     [010011100100vvvv, format none]
                //  case 0x4e50:   link     [0100111001010nnn, format none]
                //  case 0x4e58:   unlk     [0100111001011nnn, format none]
                //  case 0x4e60:   move     [0100111001100nnn, format none]
                //  case 0x4e68:   move     [0100111001101nnn, format none]
                //  case 0x4e70:   reset    [0100111001110000, format none]
                //  case 0x4e71:   nop      [0100111001110001, format none]
                //  case 0x4e72:   stop     [0100111001110010, format none]
                //  case 0x4e73:   rte      [0100111001110011, format none]
                //  case 0x4e75:   rts      [0100111001110101, format none]
                //  case 0x4e76:   trapv    [0100111001110110, format none]
                //  case 0x4e77:   rtr      [0100111001110111, format none]
                //  case 0x4e80:   jsr      [0100111010pppnnn, format ??????????pppnnn]
                //  case 0x4ec0:   jmp      [0100111011pppnnn, format ??????????pppnnn]

                switch ((op1 >> 8) & 0xf) {

                case 0x0:
                    if ((op1 & 0x00c0) != 0x00c0) {
                        //  case 0x4000:   negx     [....0000sswwwnnn, format ????????sswwwnnn]
                        // I have to code this up to make it look like we're modifying a
                        // source rather than a destination, because even though the effective
                        // address should be considered the "destination", we are subtracting from zero,
                        // not from the destination.
                        sOp = "NEGX";
                        eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0xff]];
                        sSrc = eaModeDst.getString(nnn); // - GetFlagX();
                    }
                    else {                  // MOVE SR,%s
                        //  case 0x40c0:   move     [....000011wwwnnn, format ??????????wwwnnn]
                        sOp = "MOVE";  sSrc = "SR";
                        eaModeDst = this.aEAModes[this.cpu.abModes407[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                        sDst = eaModeDst.getString(nnn);
                    }
                    break stage1;

                case 0x2:
                    if ((op1 & 0x00c0) != 0x00c0) {
                        //  case 0x4200:   clr      [....0010sswwwnnn, format ????????sswwwnnn]
                        sOp = "CLR";
                        eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0xff]];
                        sDst = eaModeDst.getString(nnn);
                    }
                    else {                  // MOVE CCR,%s
                        //  case 0x42c0:   move     [....001011wwwnnn, format ??????????wwwnnn]
                        sOp = "MOVE";  sSrc = "CCR";
                        eaModeDst = this.aEAModes[this.cpu.abModes407[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                        sDst = eaModeDst.getString(nnn);
                    }
                    break stage1;

                case 0x4:
                    if ((op1 & 0x00c0) != 0x00c0) {
                        //  case 0x4400:   neg      [....0100sswwwnnn, format ????????sswwwnnn]
                        // I have to code this up to make it look like we're modifying a
                        // source rather than a destination, because even though the effective
                        // address should be considered the "destination", we are subtracting from zero,
                        // not from the destination.
                        sOp = "NEG";
                        eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0xff]];
                        sSrc = eaModeDst.getString(nnn);
                    }
                    else {                  // MOVE %s,CCR
                        //  case 0x44c0:   move     [....010011xxxnnn, format ??????????xxxnnn]
                        sOp = "MOVE";  sDst = "CCR";
                        eaModeSrc = this.aEAModes[this.cpu.abModes400[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                        sSrc = eaModeSrc.getString(nnn);
                    }
                    break stage1;

                case 0x6:
                    if ((op1 & 0x00c0) != 0x00c0) {
                        //  case 0x4600:   not      [....0110sswwwnnn, format ????????sswwwnnn]
                        sOp = "NOT";
                        eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0xff]];
                        sDst = eaModeDst.getString(nnn);
                    }
                    else {                  // MOVE %s,SR
                        //  case 0x46c0:   move     [....011011xxxnnn, format ??????????xxxnnn]
                        sOp = "MOVE";  sDst = "SR";
                        eaModeSrc = this.aEAModes[this.cpu.abModes400[(op1 & 0x3f)+0x40]];        // +(ssWORD << 6)
                        sSrc = eaModeSrc.getString(nnn);
                    }
                    break stage1;

                case 0x8:
                    //  case 0x4800:   nbcd     [....100000wwwnnn, format ??????????wwwnnn]
                    //  case 0x4840:   pea      [....100001pppnnn, format ??????????pppnnn]
                    //  case 0x4840:   swap     [....100001000nnn, format none]
                    //  case 0x4880:   ext      [....100010000nnn, format none]
                    //  case 0x4880:   movem    [....10001kuuunnn, format ?????????kuuunnn, p.233]
                    //  case 0x48c0:   ext      [....100011000nnn, format none]
                    switch ((op1 >> 6) & 0x3) {
                    case 0x0:
                        //  case 0x4800:   nbcd     [........00wwwnnn, format ??????????wwwnnn]
                        sOp = "NBCD";  sSrc = "???";
                        break stage1;

                    case 0x1:
                        if ((op1 & 0x0038) == 0) {
                            //  case 0x4840:   swap     [........01000nnn, format none]
                            sOp = "SWAP";
                            eaModeDst = this.aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                            sDst = eaModeDst.getString(nnn);
                        }
                        else {
                            //  case 0x4840:   pea      [........01pppnnn, format ??????????pppnnn, p.264]
                            sOp = "PEA";
                            eaModeSrc = this.aEAModes[this.cpu.abModesD81[(op1 & 0x3f)+0x80]];    // +(ssLONG << 6)
                            sSrc = eaModeSrc.getString(nnn);
                            if (sSrc.endsWith(".l")) {
                                sSrc = sSrc.substring(0, sSrc.length-2);
                            }
                        }
                        break stage1;

                    case 0x2:
                        if ((op1 & 0x0038) == 0) {
                            //  case 0x4880:   ext      [........10000nnn, format none]
                            sOp = "EXT";
                            eaModeDst = this.aEAModes[CPU68K.EAMODEINDEX_DREG_WORD];
                            sDst = eaModeDst.getString(nnn);
                            break stage1;
                        }
                        /* falls through (BUGBUG: verify) */

                    case 0x3:
                        if ((op1 & 0x0038) == 0) {
                            //  case 0x4880:   ext      [........10000nnn, format none]
                            sOp = "EXT";
                            eaModeDst = this.aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                            sDst = eaModeDst.getString(nnn);
                            break stage1;
                        }
                    }
                    //  case 0x4880:   movem    [........1kuuunnn, format ?????????kuuunnn, p.233]
                    //  NOTES: 1) This is a register-to-memory operation
                    //         2) For pre-decrement, the order of storing is A7 to A0, then D7 to D0 (bit 0 to bit 15)
                    //         3) For all other modes, the order of storing is D0 to D7, then A0 to A7 (bit 0 to bit 15)
                    //         4) Any register used in pre-decrement mode is stored before being decremented
                    sOp = "MOVEM";
                    iModeSrc = this.getWord(this.curPC);
                    this.curPC += 2;
                    sSrc = "{";
                    if ((op1 & 0x38) == 0x20) {
                        // Pre-decrement
                        iMask = 0x1;
                        for (let i = 7; i >= 0; i--, iMask <<= 1) {
                            if ((iModeSrc & iMask) != 0) {
                                if (sSrc.length > 1) sSrc = sSrc + ",";
                                sSrc = sSrc + "A" + i;
                            }
                        }
                        for (let i = 7; i >= 0; i--, iMask <<= 1) {
                            if ((iModeSrc & iMask) != 0) {
                                if (sSrc.length > 1) sSrc = sSrc + ",";
                                sSrc = sSrc + "D" + i;
                            }
                        }
                    }
                    else {
                        // All other modes
                        iMask = 0x1;
                        for (let i = 0; i <= 7; i++, iMask <<= 1) {
                            if ((iModeSrc & iMask) != 0) {
                                if (sSrc.length > 1) sSrc = sSrc + ",";
                                sSrc = sSrc + "D" + i;
                            }
                        }
                        for (let i = 0; i <= 7; i++, iMask <<= 1) {
                            if ((iModeSrc & iMask) != 0) {
                                if (sSrc.length > 1) sSrc = sSrc + ",";
                                sSrc = sSrc + "A" + i;
                            }
                        }
                    }
                    sSrc = sSrc + "}";
                    sDst = this.aEAModes[this.cpu.abModesD07[(op1 - 0x40) & 0xff]].getString(nnn);
                    break stage1;

                case 0xa:
                    if ((op1 & 0xc0) != 0xc0) {
                        //  case 0x4a00:   tst      [........ssmmmnnn, format ????????ssmmmnnn]
                        sOp = "TST";
                        eaModeDst = this.aEAModes[this.cpu.abModes000[op1 & 0xff]];
                        sDst = eaModeDst.getString(nnn);
                    }
                    else if ((op1 & 0x3f) != 0x3c) {
                        //  case 0x4ac0:   tas      [........11wwwnnn, format ??????????wwwnnn]
                        sOp = "TAS";
                        eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0x3f]];               // +(ssBYTE << 6)
                        sDst = eaModeDst.getString(nnn);
                    }
                    else {
                        //  case 0x4afc:   illegal  [........11111100, format none]
                        sOp = "ILLEGAL";
                    }
                    break stage1;

                case 0xc:
                    //  case 0x4c80:   movem    [....11001ktttnnn, format ?????????ktttnnn, p.233]
                    //  NOTES: 1) This is a memory-to-register operation
                    //         2) For all modes, the order of storing is D0 to D7, then A0 to A7 (bit 0 to bit 15)
                    //         3) Any register used in post-increment mode is not affected by the value loaded for it (if any)
                    sOp = "MOVEM";
                    iModeDst = this.getWord(this.curPC);
                    this.curPC += 2;
                    sSrc = this.aEAModes[this.cpu.abModesC81[(op1 - 0x40) & 0xff]].getString(nnn);
                    sDst = "{";
                    iMask = 0x1;
                    for (let i = 0; i <= 7; i++, iMask <<= 1) {
                        if ((iModeDst & iMask) != 0) {
                            if (sDst.length > 1) sDst = sDst + ",";
                            sDst = sDst + "D" + i;
                        }
                    }
                    for (let i = 0; i <= 7; i++, iMask <<= 1) {
                        if ((iModeDst & iMask) != 0) {
                            if (sDst.length > 1) sDst = sDst + ",";
                            sDst = sDst + "A" + i;
                        }
                    }
                    sDst = sDst + "}";
                    break stage1;

                case 0xe:
                    switch ((op1 >> 4) & 0xf) {
                    case 0x4:
                        //  case 0x4e40:   trap     [........0100vvvv, format none]
                        sOp = "TRAP";
                        op2 = (op1 & 0xf);
                        if (op2 != 0xf) {
                            sSrc = this.sprintf("%x", op2);
                        } else {
                            op2 = this.getWord(this.curPC);
                            this.curPC += 2;
                            sSrc = this.getTrapName? this.getTrapName(op2) : this.sprintf("#%x,%#06x", 0xf, op2 & 0xffff);
                        }
                        break stage1;

                    case 0x5:
                        if ((op1 & 0x8) == 0) {
                            //  case 0x4e50:   link     [........01010nnn, format none, p.216]
                            sOp = "LINK";
                            sSrc = "A" + nnn;
                            sDst = this.aEAModes[CPU68K.EAMODEINDEX_IMMEDIATE_WORD].getString(0);
                        }
                        else {
                            //  case 0x4e58:   unlk     [........01011nnn, format none]
                            sOp = "UNLK";
                            sSrc = "A" + nnn;
                        }
                        break stage1;

                    case 0x6:
                        //  case 0x4e60:   move     [........01100nnn, format none]
                        //  case 0x4e68:   move     [........01101nnn, format none]
                        sOp = "MOVE";
                        if ((op1 & 0x8) == 0) {
                            sSrc = "A" + nnn;
                            sDst = "USP";
                        }
                        else {
                            sSrc = "USP";
                            sDst = "A" + nnn;
                        }
                        break stage1;

                    case 0x7:
                        switch (op1 & 0xf) {
                        case 0x0:
                            //  case 0x4e70:   reset    [........01110000, format none]
                            sOp = "RESET";
                            break stage1;

                        case 0x1:
                            //  case 0x4e71:   nop      [........01110001, format none]
                            sOp = "NOP";
                            break stage1;

                        case 0x2:
                            //  case 0x4e72:   stop     [........01110010, format none]
                            sOp = "STOP";
                            sSrc = this.getImmediateHexString(this.getWord(this.curPC) & 0xffff);
                            this.curPC += 2;
                            break stage1;

                        case 0x3:
                            //  case 0x4e73:   rte      [........01110011, format none]
                            sOp = "RTE";
                            break stage1;

                        case 0x5:
                            //  case 0x4e75:   rts      [........01110101, format none]
                            sOp = "RTS";
                            break stage1;

                        case 0x6:
                            //  case 0x4e76:   trapv    [........01110110, format none]
                            sOp = "TRAPV";
                            break stage1;

                        case 0x7:
                            //  case 0x4e77:   rtr      [........01110111, format none]
                            sOp = "RTR";
                            break stage1;
                        }
                        /* falls through (BUGBUG: verify) */

                    case 0x8:
                    case 0x9:
                    case 0xa:
                    case 0xb:
                        //  case 0x4e80:   jsr      [........10pppnnn, format ??????????pppnnn, p.214]
                        sOp = "JSR";
                        eaModeSrc = this.aEAModes[this.cpu.abModesD81[(op1 & 0x3f)+0x80]];        // +(ssLONG << 6)
                        sSrc = eaModeSrc.getString(nnn);
                        if (sSrc.endsWith(".l")) {
                            sSrc = sSrc.substring(0, sSrc.length-2);
                        }
                        break stage1;

                    case 0xc:
                    case 0xd:
                    case 0xe:
                    case 0xf:
                        //  case 0x4ec0:   jmp      [........11pppnnn, format ??????????pppnnn, p.213]
                        sOp = "JMP";
                        eaModeSrc = this.aEAModes[this.cpu.abModesD81[(op1 & 0x3f)+0x80]];        // +(ssLONG << 6)
                        sSrc = eaModeSrc.getString(nnn);
                        if (sSrc.endsWith(".l")) {
                            sSrc = sSrc.substring(0, sSrc.length-2);
                        }
                        break stage1;
                    }
                    break stage1;

                case 0x1:
                    //  case 0x4180:   chk      [....rrr110xxxnnn, format ??????????xxxnnn, p.174]
                    //  case 0x41c0:   lea      [....rrr111pppnnn, format ??????????pppnnn, p.215]
                    rrr = 0;
                    break;
                case 0x3:
                    rrr = 1;
                    break;
                case 0x5:
                    rrr = 2;
                    break;
                case 0x7:
                    rrr = 3;
                    break;
                case 0x9:
                    if ((op1 & 0x00f8) == 0x00c0) {
                        //  case 0x49c0:   ext      [....100111000nnn, format none]
                        sOp = "EXT";
                        eaModeDst = this.aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                        sDst = eaModeDst.getString(nnn);
                        break stage1;
                    }
                    rrr = 4;
                    break;
                case 0xb:
                    rrr = 5;
                    break;
                case 0xd:
                    rrr = 6;
                    break;
                case 0xf:
                    rrr = 7;
                    break;
                }

                if ((op1 & 0x00c0) == 0x0080) {
                    //  case 0x4180:   chk      [....rrr110xxxnnn, format ??????????xxxnnn, p.174]
                    sOp = "CHK";
                    eaModeSrc = this.aEAModes[this.cpu.abModes400[(op1 & 0x3f)+0x40]];            // +(ssWORD << 6)
                    sSrc = eaModeSrc.getString(nnn);
                    if (sSrc.endsWith(".w")) {
                        sSrc = sSrc.substring(0, sSrc.length-2);
                    }
                    sDst = "D" + rrr;
                }
                else {
                    //  case 0x41c0:   lea      [....rrr111pppnnn, format ??????????pppnnn, p.215]
                    sOp = "LEA";
                    eaModeSrc = this.aEAModes[this.cpu.abModesD81[(op1 & 0x3f)+0x80]];            // +(ssLONG << 6)
                    sSrc = eaModeSrc.getString(nnn);
                    if (sSrc.endsWith(".l")) {
                        sSrc = sSrc.substring(0, sSrc.length-2);
                    }
                    sDst = "A" + rrr;
                }
                break stage1;

            case 0x5:
                //  case 0x5000:   addq     [0101qqq0ssvvvnnn, format ????????ssvvvnnn]
                //  case 0x50c0:   scc      [0101cccc11wwwnnn, format ????cccc??wwwnnn]
                //  case 0x50c8:   dbcc     [0101cccc11001nnn, format ????cccc????????]
                //  case 0x5100:   subq     [0101qqq1ssvvvnnn, format ????????ssvvvnnn]
                if ((op1 & 0x00c0) != 0x00c0) {
                    sSrc = "#" + (CPU68K.aByteQuick[rrr]);
                    eaModeDst = this.aEAModes[this.cpu.abModes007[op1 & 0xff]];
                    sDst = eaModeDst.getString(nnn);
                    if ((op1 & 0x0100) == 0x0000) {
                        //  case 0x5000:   addq     [0101qqq0ssvvvnnn, format ????????ssvvvnnn]
                        sOp = "ADDQ";
                    }
                    else {
                        //  case 0x5100:   subq     [0101qqq1ssvvvnnn, format ????????ssvvvnnn]
                        sOp = "SUBQ";
                    }
                    break stage1;
                }
                else {
                    if ((op1 & 0x0038) != 0x0008) {
                        //  case 0x50c0:   scc      [0101cccc11wwwnnn, format ????cccc??wwwnnn]
                        eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0x3f]];               // +(ssBYTE << 6)
                        sDst = eaModeDst.getString(nnn);
                        switch ((op1 >> 8) & 0xf) {
                        case 0x0:               // ST
                            sOp = "ST";
                            break stage1;
                        case 0x1:               // SF
                            sOp = "SF";
                            break stage1;
                        case 0x2:               // SHI
                            sOp = "SHI";
                            break stage1;
                        case 0x3:               // SLS
                            sOp = "SLS";
                            break stage1;
                        case 0x4:               // SCC
                            sOp = "SCC";
                            break stage1;
                        case 0x5:               // SCS
                            sOp = "SCS";
                            break stage1;
                        case 0x6:               // SNE
                            sOp = "SNE";
                            break stage1;
                        case 0x7:               // SEQ
                            sOp = "SEQ";
                            break stage1;
                        case 0x8:               // SVC
                            sOp = "SVC";
                            break stage1;
                        case 0x9:               // SVS
                            sOp = "SVS";
                            break stage1;
                        case 0xa:               // SPL
                            sOp = "SPL";
                            break stage1;
                        case 0xb:               // SMI
                            sOp = "SMI";
                            break stage1;
                        case 0xc:               // SGE
                            sOp = "SGE";
                            break stage1;
                        case 0xd:               // SLT
                            sOp = "SLT";
                            break stage1;
                        case 0xe:               // SGT
                            sOp = "SGT";
                            break stage1;
                        case 0xf:               // SLE
                            sOp = "SLE";
                            break stage1;
                        }
                    }
                    else {
                        //  case 0x50c8:   dbcc     [0101cccc11001nnn, format ????cccc????????]
                        switch ((op1 >> 8) & 0xf) {
                        case 0x0:               // DBT
                            sOp = "DBT";
                            break;
                        case 0x1:               // DBRA/DBF
                            sOp = "DBRA";
                            break;
                        case 0x2:               // DBHI
                            sOp = "DBHI";
                            break;
                        case 0x3:               // DBLS
                            sOp = "DBLS";
                            break;
                        case 0x4:               // DBCC
                            sOp = "DBCC";
                            break;
                        case 0x5:               // DBCS
                            sOp = "DBCS";
                            break;
                        case 0x6:               // DBNE
                            sOp = "DBNE";
                            break;
                        case 0x7:               // DBEQ
                            sOp = "DBEQ";
                            break;
                        case 0x8:               // DBVC
                            sOp = "DBVC";
                            break;
                        case 0x9:               // DBVS
                            sOp = "DBVS";
                            break;
                        case 0xa:               // DBPL
                            sOp = "DBPL";
                            break;
                        case 0xb:               // DBMI
                            sOp = "DBMI";
                            break;
                        case 0xc:               // DBGE
                            sOp = "DBGE";
                            break;
                        case 0xd:               // DBLT
                            sOp = "DBLT";
                            break;
                        case 0xe:               // DBGT
                            sOp = "DBGT";
                            break;
                        case 0xf:               // DBLE
                            sOp = "DBLE";
                            break;
                        }
                        sSrc = "D" + (nnn);
                        sDst = this.sprintf("%x", this.curPC + this.getWord(this.curPC));
                        this.curPC += 2;
                        break stage1;
                    }
                }
                break;

            case 0x6:
                //  case 0x6000:   bcc      [0110ccccdddddddd, format ????ccccdddddddd]
                //  case 0x6100:   bsr      [01100001dddddddd, format none]
                switch ((op1 >> 8) & 0xf) {
                case 0x0:               // BRA
                    sOp = "BRA";
                    break;
                case 0x1:               // BSR
                    sOp = "BSR";
                    break;
                case 0x2:               // BHI
                    sOp = "BHI";
                    break;
                case 0x3:               // BLS
                    sOp = "BLS";
                    break;
                case 0x4:               // BCC
                    sOp = "BCC";
                    break;
                case 0x5:               // BCS
                    sOp = "BCS";
                    break;
                case 0x6:               // BNE
                    sOp = "BNE";
                    break;
                case 0x7:               // BEQ
                    sOp = "BEQ";
                    break;
                case 0x8:               // BVC
                    sOp = "BVC";
                    break;
                case 0x9:               // BVS
                    sOp = "BVS";
                    break;
                case 0xa:               // BPL
                    sOp = "BPL";
                    break;
                case 0xb:               // BMI
                    sOp = "BMI";
                    break;
                case 0xc:               // BGE
                    sOp = "BGE";
                    break;
                case 0xd:               // BLT
                    sOp = "BLT";
                    break;
                case 0xe:               // BGT
                    sOp = "BGT";
                    break;
                case 0xf:               // BLE
                    sOp = "BLE";
                    break;
                }
                if (op1 & 0xff) {
                    sSrc = this.sprintf("%x", this.curPC + (op1 << 24 >> 24));
                } else {
                    sSrc = this.sprintf("%x", this.curPC + this.getWord(this.curPC));
                    this.curPC += 2;
                }
                break stage1;

            case 0x7:
                //  case 0x7000:   moveq    [0111rrr0dddddddd, format none]
                sOp = "MOVEQ";
                sSrc = "#" + (op1 << 24 >> 24);
                sDst = this.aEAModes[CPU68K.EAMODEINDEX_DREG_LONG].getString(rrr);
                break stage1;

            case 0x8:
                //  case 0x8100:   sbcd     [1000rrr10000knnn, format ????rrr?bbkkknnn, p.275]
                //  case 0x80c0:   divu     [1000rrr011xxxnnn, format ??????????xxxnnn, p.201]
                //  case 0x81c0:   divs     [1000rrr111xxxnnn, format ??????????xxxnnn, p.197]
                //  case 0x8000:   or       [1000rrr0ssxxxnnn, format ????????ssxxxnnn, p.255]
                //  case 0x8100:   or       [1000rrr1ssuuunnn, format ????????ssuuunnn, p.255]
                if ((op1 & 0x01f0) == 0x0100) {
                    //  case 0x8100:   sbcd     [1000rrr10000knnn, format ????rrr?bbkkknnn, p.275]
                    sOp = "SBCD";  sSrc = "???";
                    break stage1;
                }
                if ((op1 & 0x01c0) == 0x00c0) {
                    //  case 0x80c0:   divu     [1000rrr011xxxnnn, format ??????????xxxnnn, p.201]
                    sOp = "DIVU";
                    eaModeSrc = this.aEAModes[this.cpu.abModes400[(op1 & 0x3f)+0x40]];            // +(ssWORD << 6)
                    sSrc = eaModeSrc.getString(nnn); // & 0xffff;
                    eaModeDst = this.aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                    sDst = eaModeDst.getString(rrr);
                    break stage1;
                }
                if ((op1 & 0x01c0) == 0x01c0) {
                    //  case 0x81c0:   divs     [1000rrr111xxxnnn, format ??????????xxxnnn, p.197]
                    sOp = "DIVS";
                    eaModeSrc = this.aEAModes[this.cpu.abModes400[(op1 & 0x3f)+0x40]];            // +(ssWORD << 6)
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = this.aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                    sDst = eaModeDst.getString(rrr);
                    break stage1;
                }
                if ((op1 & 0x0100) == 0x0000) { // EA is src
                    //  case 0x8000:   or       [1000rrr0ssxxxnnn, format ????????ssxxxnnn, p.255]
                    sOp = "OR";
                    eaModeSrc = this.aEAModes[this.cpu.abModes400[op1 & 0xff]];
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    sDst = eaModeDst.getString(rrr);
                }
                else {                          // EA is dst
                    //  case 0x8100:   or       [1000rrr1ssuuunnn, format ????????ssuuunnn, p.255]
                    sOp = "OR";
                    eaModeSrc = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    sSrc = eaModeSrc.getString(rrr);
                    eaModeDst = this.aEAModes[this.cpu.abModesC07[op1 & 0xff]];
                    sDst = eaModeDst.getString(nnn);
                }
                break stage1;

            case 0x9:
                //  case 0x9000:   suba     [1001rrrk11mmmnnn, format ???????kssmmmnnn, p.282]
                //  case 0x9000:   sub      [1001rrr0ssmmmnnn, format ????????ssmmmnnn, p.279]
                //  case 0x9100:   sub      [1001rrr1ssuuunnn, format ????????ssuuunnn, p.279]
                //  case 0x9100:   subx     [1001rrr1ss00knnn, format ????rrr?sskkknnn, p.288]
                if ((op1 & 0x00c0) == 0x00c0) {
                    //  case 0x9000:   suba     [1001rrrk11mmmnnn, format ???????kssmmmnnn, p.282]
                    sOp = "SUBA";
                    eaModeSrc = this.aEAModes[this.cpu.abModes000[(((op1 >> 2) & 0x40) + 0x40) | (op1 & 0x3f)]];
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = this.aEAModes[((op1 >> 8) & 0x1) + CPU68K.EAMODEINDEX_AREG_WORD];
                    sDst = eaModeDst.getString(rrr);
                    break stage1;
                }
                if ((op1 & 0x0100) == 0) {      // EA is src
                    //  case 0x9000:   sub      [1001rrr0ssmmmnnn, format ????????ssmmmnnn, p.279]
                    sOp = "SUB";
                    eaModeSrc = this.aEAModes[this.cpu.abModes000[op1 & 0xff]];
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    sDst = eaModeDst.getString(rrr);
                    break stage1;
                }
                if ((op1 & 0x0030) != 0) {      // EA is dst
                    //  case 0x9100:   sub      [1001rrr1ssuuunnn, format ????????ssuuunnn, p.279]
                    sOp = "SUB";
                    eaModeSrc = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    sSrc = eaModeSrc.getString(rrr);
                    eaModeDst = this.aEAModes[this.cpu.abModesC07[op1 & 0xff]];
                    sDst = eaModeDst.getString(nnn);
                }
                else {
                    //  case 0x9100:   subx     [1001rrr1ss00knnn, format ????rrr?sskkknnn, p.288]
                    sOp = "SUBX";
                    eaModeSrc = this.aEAModes[this.cpu.abModesAddSubX[((op1 >> 5) & 0x6) | ((op1 >> 3) & 0x1)]];
                    sSrc = eaModeSrc.getString(nnn); // - GetFlagX();
                    eaModeDst = eaModeSrc;
                    sDst = eaModeDst.getString(rrr);
                }
                break stage1;

            case 0xa:                       // undefined
                break;

            case 0xb:
                //  case 0xb000:   cmpa     [1011rrrk11mmmnnn, format ???????kssmmmnnn, p.182]
                //  case 0xb000:   cmp      [1011rrr0ssmmmnnn, format ????????ssmmmnnn, p.180]
                //  case 0xb100:   eor      [1011rrr1sswwwnnn, format ????????sswwwnnn, p.205]
                //  case 0xb108:   cmpm     [1011xxx1ss001yyy, format ????????ss??????, p.186]
                if ((op1 & 0x00c0) == 0x00c0) {
                    //  case 0xb000:   cmpa     [1011rrrk11mmmnnn, format ???????kssmmmnnn, p.182]
                    sOp = "CMPA";
                    eaModeSrc = this.aEAModes[this.cpu.abModes000[(((op1 >> 2) & 0x40) + 0x40) | (op1 & 0x3f)]];
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = this.aEAModes[((op1 >> 8) & 0x1) + CPU68K.EAMODEINDEX_AREG_WORD];
                    sDst = eaModeDst.getString(rrr);
                    break stage1;
                }
                if ((op1 & 0x0100) == 0) {      // EA is src
                    //  case 0xb000:   cmp      [1011rrr0ssmmmnnn, format ????????ssmmmnnn, p.180]
                    sOp = "CMP";
                    eaModeSrc = this.aEAModes[this.cpu.abModes000[op1 & 0xff]];
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    sDst = eaModeDst.getString(rrr);
                    break stage1;
                }
                if ((op1 & 0x0038) != 0x08) {
                    //  case 0xb100:   eor      [1011rrr1sswwwnnn, format ????????sswwwnnn, p.205]
                    sOp = "EOR";
                    eaModeSrc = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    sSrc = eaModeSrc.getString(rrr);
                    eaModeDst = this.aEAModes[this.cpu.abModes407[op1 & 0xff]];
                    sDst = eaModeDst.getString(nnn);
                }
                else {
                    //  case 0xb108:   cmpm     [1011xxx1ss001yyy, format ????????ss??????, p.186]
                    sOp = "CMPM";
                    eaModeSrc = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_AREG_INCBYTE];
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = eaModeSrc;
                    sDst = eaModeDst.getString(rrr);
                }
                break stage1;

            case 0xc:
                //  case 0xc000:   and      [1100rrr0ssxxxnnn, format ????????ssxxxnnn]
                //  case 0xc0c0:   mulu     [1100rrr011xxxnnn, format ??????????xxxnnn]
                //  case 0xc100:   abcd     [1100rrr10000knnn, format ????rrr?bbkkknnn]
                //  case 0xc100:   and      [1100rrr1ssuuunnn, format ????????ssuuunnn]
                //  case 0xc1c0:   muls     [1100rrr111xxxnnn, format ??????????xxxnnn]
                op2 = (op1 >> 6) & 0x7;

                switch(op2) {
                case 0x0:
                case 0x1:
                case 0x2:                       // EA is src
                    //  case 0xc000:   and      [1100rrr0ssxxxnnn, format ????????ssxxxnnn, p.120]
                    sOp = "AND";
                    eaModeSrc = this.aEAModes[this.cpu.abModes400[op1 & 0xff]];
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    sDst = eaModeDst.getString(rrr);
                    break stage1;

                case 0x3:
                    //  case 0xc0c0:   mulu     [1100rrr011xxxnnn, format ??????????xxxnnn, p.243]
                    sOp = "MULU";
                    eaModeSrc = this.aEAModes[this.cpu.abModes400[(op1 & 0x3f)+0x40]];            // +(ssWORD << 6)
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = this.aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                    sDst = eaModeDst.getString(rrr);
                    break stage1;

                case 0x4:
                case 0x5:
                case 0x6:                       // EA is dst
                    //  case 0xc100:   and      [1100rrr1ssuuunnn, format ????????ssuuunnn, p.120]
                    if ((op1 & 0x0030) != 0) {
                        sOp = "AND";
                        eaModeSrc = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                        sSrc = eaModeSrc.getString(rrr);
                        eaModeDst = this.aEAModes[this.cpu.abModesC07[op1 & 0xff]];
                        sDst = eaModeDst.getString(nnn);
                        break stage1;
                    }

                    switch(op2) {
                    case 0x4:
                        //  case 0xc100:   abcd     [1100rrr10000knnn, format ????rrr?bbkkknnn, p.107]
                        sOp = "ABCD";
                        eaModeSrc = this.aEAModes[this.cpu.abModesAddSubX[(op1 >> 3) & 0x1]];     // 0 or 1 (both ssBYTE)
                        sSrc = eaModeSrc.getString(nnn);
                        eaModeDst = eaModeSrc;
                        sDst = eaModeDst.getString(rrr);
                        break stage1;

                    case 0x5:
                        if ((op1 & 0x8) == 0) { // EXG Drrr,Dnnn
                            //  case 0xc140:   exg      [1100rrr101000nnn, format ????rrr??????nnn, p.210]
                            sOp = "EXG";
                            sSrc = "D" + rrr;
                            sDst = "D" + nnn;
                        }
                        else {                  // EXG Arrr,Annn
                            //  case 0xc148:   exg      [1100rrr101001nnn, format ????rrr??????nnn, p.210]
                            sOp = "EXG";
                            sSrc = "A" + rrr;
                            sDst = "A" + nnn;
                        }
                        break stage1;

                    case 0x6:
                        if ((op1 & 0x8) != 0) { // EXG Drrr,Annn
                            //  case 0xc188:   exg      [1100rrr110001nnn, format ????rrr??????nnn, p.210]
                            sOp = "EXG";
                            sSrc = "D" + rrr;
                            sDst = "A" + nnn;
                            break stage1;
                        }
                    }
                    break;      // If we're still here, must be an invalid opcode

                case 0x7:
                    //  case 0xc1c0:   muls     [1100rrr111xxxnnn, format ??????????xxxnnn, p.240]
                    sOp = "MULS";
                    eaModeSrc = this.aEAModes[this.cpu.abModes400[(op1 & 0x3f)+0x40]];            // +(ssWORD << 6)
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = this.aEAModes[CPU68K.EAMODEINDEX_DREG_LONG];
                    sDst = eaModeDst.getString(rrr);
                    break stage1;
                }
                break;

            case 0xd:
                //  case 0xd000:   adda     [1101rrrk11mmmnnn, format ???????kssmmmnnn, p.112]
                //  case 0xd000:   add      [1101rrr0ssmmmnnn, format ????????ssmmmnnn, p.109]
                //  case 0xd100:   add      [1101rrr1ssuuunnn, format ????????ssuuunnn, p.109]
                //  case 0xd100:   addx     [1101rrr1ss00knnn, format ????rrr?sskkknnn, p.118]
                if ((op1 & 0x00c0) == 0x00c0) {
                    //  case 0xd000:   adda     [1101rrrk11mmmnnn, format ???????kssmmmnnn, p.112]
                    sOp = "ADDA";
                    eaModeSrc = this.aEAModes[this.cpu.abModes000[(((op1 >> 2) & 0x40) + 0x40) | (op1 & 0x3f)]];
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = this.aEAModes[((op1 >> 8) & 0x1) + CPU68K.EAMODEINDEX_AREG_WORD];
                    sDst = eaModeDst.getString(rrr);
                    break stage1;
                }
                if ((op1 & 0x0100) == 0) {      // EA is src
                    //  case 0xd000:   add      [1101rrr0ssmmmnnn, format ????????ssmmmnnn, p.109]
                    sOp = "ADD";
                    eaModeSrc = this.aEAModes[this.cpu.abModes000[op1 & 0xff]];
                    sSrc = eaModeSrc.getString(nnn);
                    eaModeDst = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    sDst = eaModeDst.getString(rrr);
                    break stage1;
                }
                if ((op1 & 0x0030) != 0) {      // EA is dst
                    //  case 0xd100:   add      [1101rrr1ssuuunnn, format ????????ssuuunnn, p.109]
                    sOp = "ADD";
                    eaModeSrc = this.aEAModes[((op1 >> 6) & 0x3) + CPU68K.EAMODEINDEX_DREG];
                    sSrc = eaModeSrc.getString(rrr);
                    eaModeDst = this.aEAModes[this.cpu.abModesC07[op1 & 0xff]];
                    sDst = eaModeDst.getString(nnn);
                }
                else {
                    //  case 0xd100:   addx     [1101rrr1ss00knnn, format ????rrr?sskkknnn, p.118]
                    sOp = "ADDX";
                    eaModeSrc = this.aEAModes[this.cpu.abModesAddSubX[((op1 >> 5) & 0x6) | ((op1 >> 3) & 0x1)]];
                    sSrc = eaModeSrc.getString(nnn); // - GetFlagX();
                    eaModeDst = eaModeSrc;
                    sDst = eaModeDst.getString(rrr);
                }
                break stage1;

            case 0xe:
                //  case 0xe000:   asr      [1110000011uuunnn, format ??????????uuunnn, p.126]
                //  case 0xe000:   asr      [1110rrr0ssk00nnn, format ????rrr?ssk??nnn, p.126]
                //  case 0xe008:   lsr      [1110rrr0ssk01nnn, format ????rrr?ssk??nnn, p.218]
                //  case 0xe010:   roxr     [1110rrr0ssk10nnn, format ????rrr?ssk??nnn, p.268]
                //  case 0xe018:   ror      [1110rrr0ssk11nnn, format ????rrr?ssk??nnn, p.265]
                //  case 0xe100:   asl      [1110rrr1ssk00nnn, format ????rrr?ssk??nnn, p.126]
                //  case 0xe100:   asl      [1110000111uuunnn, format ??????????uuunnn, p.126]
                //  case 0xe108:   lsl      [1110rrr1ssk01nnn, format ????rrr?ssk??nnn, p.218]
                //  case 0xe110:   roxl     [1110rrr1ssk10nnn, format ????rrr?ssk??nnn, p.268]
                //  case 0xe118:   rol      [1110rrr1ssk11nnn, format ????rrr?ssk??nnn, p.265]
                //  case 0xe200:   lsr      [1110001011uuunnn, format ??????????uuunnn, p.218]
                //  case 0xe300:   lsl      [1110001111uuunnn, format ??????????uuunnn, p.218]
                //  case 0xe400:   roxr     [1110010011uuunnn, format ??????????uuunnn, p.268]
                //  case 0xe500:   roxl     [1110010111uuunnn, format ??????????uuunnn, p.268]
                //  case 0xe600:   ror      [1110011011uuunnn, format ??????????uuunnn, p.265]
                //  case 0xe700:   rol      [1110011111uuunnn, format ??????????uuunnn, p.265]
                if ((op1 & 0x00c0) != 0x00c0) {
                    sSrc = ((op1 & 0x20) == 0)? ("#" + CPU68K.aByteQuick[rrr]) : ("D" + rrr);
                    op2 = ((op1 >> 2) & 0x6) | ((op1 >> 8) & 0x1);
                    eaModeDst = this.aEAModes[CPU68K.EAMODEINDEX_DREG_BYTE + ((op1 >> 6) & 0x3)];
                }
                else {
                    sSrc = "1";
                    op2 = op1 >> 8;
                    eaModeDst = this.aEAModes[this.cpu.abModesC07[(op1 & 0x3f)+0x40]];            // +(ssWORD << 6)
                }
                sDst = eaModeDst.getString(nnn);
                switch (op2 & 0x7) {
                case 0x0:
                    //  case 0xe000:   asr      [....000011uuunnn, format ??????????uuunnn, p.126]
                    //  case 0xe000:   asr      [....rrr0ssk00nnn, format ????rrr?ssk??nnn, p.126]
                    sOp = "ASR";
                    break stage1;

                case 0x1:
                    //  case 0xe100:   asl      [....000111uuunnn, format ??????????uuunnn, p.126]
                    //  case 0xe100:   asl      [....rrr1ssk00nnn, format ????rrr?ssk??nnn, p.126]
                    sOp = "ASL";
                    break stage1;

                case 0x2:
                    //  case 0xe200:   lsr      [....001011uuunnn, format ??????????uuunnn, p.218]
                    //  case 0xe008:   lsr      [....rrr0ssk01nnn, format ????rrr?ssk??nnn, p.218]
                    sOp = "LSR";
                    break stage1;

                case 0x3:
                    //  case 0xe300:   lsl      [....001111uuunnn, format ??????????uuunnn, p.218]
                    //  case 0xe108:   lsl      [....rrr1ssk01nnn, format ????rrr?ssk??nnn, p.218]
                    sOp = "LSL";
                    break stage1;

                case 0x4:
                    //  case 0xe400:   roxr     [....010011uuunnn, format ??????????uuunnn, p.268]
                    //  case 0xe010:   roxr     [....rrr0ssk10nnn, format ????rrr?ssk??nnn, p.268]
                    sOp = "ROXR";
                    break stage1;

                case 0x5:
                    //  case 0xe500:   roxl     [....010111uuunnn, format ??????????uuunnn, p.268]
                    //  case 0xe110:   roxl     [....rrr1ssk10nnn, format ????rrr?ssk??nnn, p.268]
                    sOp = "ROXL";
                    break stage1;

                case 0x6:
                    //  case 0xe600:   ror      [....011011uuunnn, format ??????????uuunnn, p.265]
                    //  case 0xe018:   ror      [....rrr0ssk11nnn, format ????rrr?ssk??nnn, p.265]
                    sOp = "ROR";
                    break stage1;

                case 0x7:
                    //  case 0xe700:   rol      [....011111uuunnn, format ??????????uuunnn, p.265]
                    //  case 0xe118:   rol      [....rrr1ssk11nnn, format ????rrr?ssk??nnn, p.265]
                    sOp = "ROL";
                    break stage1;
                }
                break;

            case 0xf:                       // undefined
                break;

            }   // End stage1

            if (sOp == null) {
                sOp = "???";
            }

            if (sSrc != null && sDst != null) {
                // If there are both src and dst operands, collapse any common ".b", ".w" or ".l" suffixes
                // into a single suffix on the opcode instead.  Also do the collapse if the src operand is an
                // immediate value (ie, prefixed with '#') or register list (ie, prefixed with '{').  And then
                // finally collapse both operands into a a single src operand, separated by commas, to further
                // simplify the code that follows.
                let iSrc = sSrc.length;
                let iDst = sDst.length;
                if (iSrc >= 2 && iDst >= 2) {
                    if (sSrc.charAt(iSrc-2) == '.' && sDst.charAt(iDst-2) == '.' && sSrc.charAt(iSrc-1) == sDst.charAt(iDst-1)) {
                        iSrc -= 2;
                        iDst -= 2;
                        sOp = sOp + sSrc.substring(iSrc);
                        sSrc = sSrc.substring(0,iSrc);
                        sDst = sDst.substring(0,iDst);
                    }
                    else if ((sSrc.charAt(0) == '#' || sSrc.charAt(0) == '{') && sDst.charAt(iDst-2) == '.') {
                        iDst -= 2;
                        sOp = sOp + sDst.substring(iDst);
                        sDst = sDst.substring(0,iDst);
                    }
                    else if (sSrc.charAt(iSrc-2) == '.' && sDst.charAt(0) == '{') {
                        iSrc -= 2;
                        sOp = sOp + sSrc.substring(iSrc);
                        sSrc = sSrc.substring(0,iSrc);
                    }
                }
                sSrc = sSrc + "," + sDst;
            }
            else {
                if (sSrc == null) {
                    sSrc = sDst;
                }
                if (sSrc != null) {
                    let iSrc = sSrc.length;
                    if (iSrc >= 2 && sSrc.charAt(iSrc-2) == '.') {
                        iSrc -= 2;
                        sOp = sOp + sSrc.substring(iSrc);
                        sSrc = sSrc.substring(0,iSrc);
                    }
                }
            }

            // Prefix the opcode mnemonic with the code words (up to 3 of them)

            sBytes = "";
            for (let i = 0; i < 6; i += 2) {
                if (((addr + i) >>> 1) >= (this.curPC >>> 1)) break;
                sBytes = sBytes + this.sprintf("%04x", this.getWord(addr+i) & 0xffff) + " ";
            }

        }
        catch (e) {sBytes = "error"; fError = true;}

        if (fError) {
            try {
                // See if we're currently *inside* an API call...
                if (addr == this.getLong(CPU68K.EXCEPTION_TRAP_0xF * 4)) {
                    sBytes = null;
                    sOp = "INSIDE";
                    try {
                        let addrPC = this.getLong(this.cpu.regA[7]+2)-4;
                        // Could check "this.getWord(addrPC) == 0x4e4f" too,
                        // to make sure it's really a TRAP 0x0F instruction....
                        sSrc = this.getTrapName? this.getTrapName(this.getWord(addrPC+2)) : "API";
                    }
                    catch (e) {
                        sSrc = "???";
                    }
                }
            }
            catch (e) {}
        }

        let addrCodeDump = this.curPC;

        if (sSrc != null && (fDispEA || op1 == CPU68K.OP_JMP_PC_REL || op1 == CPU68K.OP_JSR_PC_REL)) {

            // BUGBUG: This breaks down when both src and dst modes are the same,
            // because we might be using the same "eaMode" object for both operands, hence
            // its "ea" value for the src might have been overwritten by the value for the dst
            // (since normally the dst is decoded after the src).

            // Hopefully, this is not a problem anywhere in the emulator, as the normal operation
            // of the CPU is to extract the src data from the src ea before processing the dst,
            // but it can definitely affect the debugger, and it's something to be on the lookout
            // for in the emulator as well.  -JP

            let eaMode = eaModeSrc;
            if (eaMode == null || eaMode.sPrefix.startsWith("#")) {
                eaMode = eaModeDst;
            }
            if (eaMode != null && !eaMode.sPrefix.startsWith("#")) {

                // Check "eaMode.ea" for belonging to a debugger symbol group
                sSrc = sSrc + "  [" + eaMode.sPrefix/* + GetAddressSymbol(eaMode.ea, -1) */;

                if (sOp != "LEA" && sOp != "PEA" && sOp != "JMP" && sOp != "JSR") {
                    try {
                        sSrc = sSrc + "=" + this.sprintf("%x", eaMode.getData());
                    }
                    catch(e) {
                        sSrc = sSrc + "=???";
                    }
                }
                sSrc = sSrc + "]";
            }
        }
        this.addAddress(address, Math.max(this.curPC - addr, 2));
        opcodes.length = 0;
        return this.sprintf("%08x: %-15s %-8s %s", addr, sBytes, sOp, sSrc || "").trimEnd() + (annotation || "") + "\n";
    }

    /**
     * dumpAddress(address, bus)
     *
     * Overrides the Debugger's dumpAddress(), because our 25-bit addresses look better with 8 hex digits.
     *
     * @this {Dbg68K}
     * @param {Address} address
     * @param {Bus} [bus] (default is busMemory)
     * @returns {string}
     */
    dumpAddress(address, bus = this.busMemory)
    {
        return this.toBase(address.off, this.nDefaultRadix, 32, "");
    }

    /**
     * readAddress(address, advance, bus)
     *
     * Overrides the Debugger's readAddress(), because addresses obtained from the CPU (eg, regPC) have not
     * been masked to the width of the bus yet (see CPU68K.ADDR_MASK).
     *
     * @this {Dbg68K}
     * @param {Address} address
     * @param {number} [advance] (amount to advance address after read, if any)
     * @param {Bus} [bus] (default is busMemory)
     * @returns {number|undefined}
     */
    readAddress(address, advance, bus = this.busMemory)
    {
        this.cBreakIgnore++;
        let value = bus.readDirect(address.off & bus.addrLimit);
        if (advance) this.addAddress(address, advance, bus);
        this.cBreakIgnore--;
        return value;
    }

    /**
     * writeAddress(address, value, bus)
     *
     * @this {Dbg68K}
     * @param {Address} address
     * @param {number} value
     * @param {Bus} [bus] (default is busMemory)
     */
    writeAddress(address, value, bus = this.busMemory)
    {
        this.cBreakIgnore++;
        bus.writeDirect(address.off & bus.addrLimit, value);
        this.cBreakIgnore--;
    }

    /**
     * getByte(addr)
     *
     * The disassembler uses these functions (instead of the CPU's) to read memory without side-effects
     * (eg, reading hardware registers) and without triggering any breakpoints.
     *
     * @this {Dbg68K}
     * @param {number} addr
     * @returns {number} (sign-extended byte)
     */
    getByte(addr)
    {
        return this.busMemory.readDirect(addr & CPU68K.ADDR_MASK) << 24 >> 24;
    }

    /**
     * getWord(addr)
     *
     * @this {Dbg68K}
     * @param {number} addr
     * @returns {number} (sign-extended word)
     */
    getWord(addr)
    {
        return (this.getByte(addr) << 8) | (this.getByte(addr + 1) & 0xff);
    }

    /**
     * getLong(addr)
     *
     * @this {Dbg68K}
     * @param {number} addr
     * @returns {number}
     */
    getLong(addr)
    {
        return (this.getWord(addr) << 16) | (this.getWord(addr + 2) & 0xffff);
    }

    /**
     * getSignedHexString(i)
     *
     * Convert value to signed hex string (since the unsigned value should already appear in the disassembly)
     *
     * @this {Dbg68K}
     * @param {number} i
     * @returns {string}
     */
    getSignedHexString(i)
    {
        let s = i.toString(16);         // use toString() instead of sprintf() for signed conversion
        if (s.charAt(0) != '-') {
            return "0x" + s;
        } else {
            return "-0x" + s.substring(1);
        }
    }

    /**
     * getImmediateHexString(i)
     *
     * Convert immediate value to signed hex string (since the unsigned value should already appear in the disassembly)
     *
     * @this {Dbg68K}
     * @param {number} i
     * @returns {string}
     */
    getImmediateHexString(i)
    {
        return '#' + this.getSignedHexString(i);
    }

    /**
     * getIndexAddr(base)
     *
     * @this {Dbg68K}
     * @param {number} base
     * @returns {number}
     */
    getIndexAddr(base)
    {
        let addr = this.getWord(this.curPC);
        let i = (addr & 0x7000) >> 12, bAddr = addr << 24 >> 24;
        if ((addr & 0x0800) != 0) {
            if ((addr & 0x8000) != 0) {
                return base + this.cpu.regA[i] + bAddr;
            } else {
                return base + this.cpu.regD[i] + bAddr;
            }
        }
        else {
            if ((addr & 0x8000) != 0) {
                return base + (this.cpu.regA[i] << 16 >> 16) + bAddr;
            } else {
                return base + (this.cpu.regD[i] << 16 >> 16) + bAddr;
            }
        }
    }

    /**
     * getIndexAddrString(nnn)
     *
     * @this {Dbg68K}
     * @param {number} nnn
     * @returns {string}
     */
    getIndexAddrString(nnn)
    {
        let addr = this.getWord(this.curPC);
        this.curPC += 2;
        let i = (addr >> 12) & 0x7, bAddr = addr << 24 >> 24;
        return "(" + (bAddr != 0? this.getSignedHexString(bAddr) + "," : "") +
                ((nnn < 0)? "PC" : ("A" + nnn)) +
                ((addr & 0x8000) != 0? ",A":",D") + i + ((addr & 0x0800) != 0? ".l":".w") + ")";
    }
}

/**
 * All DbgMode subclasses must implement the following abstract methods:
 *
 *  getString: get effective address (ea) string
 *  getData: get data at effective address
 */

/* eslint-disable require-jsdoc */

class DbgMode
{
    /**
     * DbgMode(dbg, sPrefix)
     *
     * @this {DbgMode}
     * @param {Dbg68K} dbg
     * @param {string} [sPrefix]
     */
    constructor(dbg, sPrefix)
    {
        this.dbg = dbg;
        this.sPrefix = sPrefix || "";
        this.cpu = dbg.cpu;
        this.ea = 0;
    }

    /**
     * getString(nnn)
     *
     * @this {DbgMode}
     * @param {number} nnn
     * @returns {string}
     */
    getString(nnn)
    {
        return "";
    }

    /**
     * getData()
     *
     * @this {DbgMode}
     * @returns {number}
     */
    getData(nnn)
    {
        return 0;
    }
}

class DbgModeIllegal extends DbgMode
{
    getString(nnn) {
        return "???";
    }

    getData() {
        return 0;
    }
}

class DbgModeDRegByte extends DbgMode {
    constructor(dbg) {
        super(dbg, "D");
    }

    getString(nnn) {
        this.ea = nnn;
        return this.sPrefix + this.ea + ".b";
    }

    getData() {
        return this.cpu.regD[this.ea] & 0xff;
    }
}

class DbgModeDRegWord extends DbgMode {
    constructor(dbg) {
        super(dbg, "D");
    }

    getString(nnn) {
        this.ea = nnn;
        return this.sPrefix + this.ea + ".w";
    }

    getData() {
        return this.cpu.regD[this.ea] & 0xffff;
    }
}

class DbgModeDRegLong extends DbgMode {
    constructor(dbg) {
        super(dbg, "D");
    }

    getString(nnn) {
        this.ea = nnn;
        return this.sPrefix + this.ea + ".l";
    }

    getData() {
        return this.cpu.regD[this.ea];
    }
}

class DbgModeARegWord extends DbgMode {
    constructor(dbg) {
        super(dbg, "A");
    }

    getString(nnn) {
        this.ea = nnn;
        return this.sPrefix + this.ea + ".w";
    }

    getData() {
        return this.cpu.regA[this.ea] & 0xffff;
    }
}

class DbgModeARegLong extends DbgMode {
    constructor(dbg) {
        super(dbg, "A");
    }

    getString(nnn) {
        this.ea = nnn;
        return this.sPrefix + this.ea + ".l";
    }

    getData() {
        return this.cpu.regA[this.ea];
    }
}

class DbgModeAValByte extends DbgMode {
    getString(nnn) {
        this.ea = this.cpu.regA[nnn];
        return "(A" + nnn + ").b";
    }

    getData() {
        return this.dbg.getByte(this.ea) & 0xff;
    }
}

class DbgModeAValWord extends DbgMode {
    getString(nnn) {
        this.ea = this.cpu.regA[nnn];
        return "(A" + nnn + ").w";
    }

    getData() {
        return this.dbg.getWord(this.ea) & 0xffff;
    }
}

class DbgModeAValLong extends DbgMode {
    getString(nnn) {
        this.ea = this.cpu.regA[nnn];
        return "(A" + nnn + ").l";
    }

    getData() {
        return this.dbg.getLong(this.ea);
    }
}

class DbgModeAValIncByte extends DbgMode {
    getString(nnn) {
        this.ea = this.cpu.regA[nnn];
        return "(A" + nnn + ")+.b";
    }

    getData() {
        return this.dbg.getByte(this.ea) & 0xff;
    }
}

class DbgModeAValIncWord extends DbgMode {
    getString(nnn) {
        this.ea = this.cpu.regA[nnn];
        return "(A" + nnn + ")+.w";
    }

    getData() {
        return this.dbg.getWord(this.ea) & 0xffff;
    }
}

class DbgModeAValIncLong extends DbgMode {
    getString(nnn) {
        this.ea = this.cpu.regA[nnn];
        return "(A" + nnn + ")+.l";
    }

    getData() {
        return this.dbg.getLong(this.ea);
    }
}

class DbgModeAValDecByte extends DbgMode {
    getString(nnn) {
        this.ea = this.cpu.regA[nnn] - CPU68K.aByteInc[nnn];
        return "-(A" + nnn + ").b";
    }

    getData() {
        return this.dbg.getByte(this.ea) & 0xff;
    }
}

class DbgModeAValDecWord extends DbgMode {
    getString(nnn) {
        this.ea = this.cpu.regA[nnn] - 2;
        return "-(A" + nnn + ").w";
    }

    getData() {
        return this.dbg.getWord(this.ea) & 0xffff;
    }
}

class DbgModeAValDecLong extends DbgMode {
    getString(nnn) {
        this.ea = this.cpu.regA[nnn] - 4;
        return "-(A" + nnn + ").l";
    }

    getData() {
        return this.dbg.getLong(this.ea);
    }
}

class DbgModeAValDispByte extends DbgMode {
    getString(nnn) {
        let i = this.dbg.getWord(this.dbg.curPC);
        this.dbg.curPC += 2;
        this.ea = this.cpu.regA[nnn] + i;
        return (i != 0? this.dbg.getSignedHexString(i) : "") + "(A" + nnn + ").b";
    }

    getData() {
        return this.dbg.getByte(this.ea) & 0xff;
    }
}

class DbgModeAValDispWord extends DbgMode {
    getString(nnn) {
        let i = this.dbg.getWord(this.dbg.curPC);
        this.dbg.curPC += 2;
        this.ea = this.cpu.regA[nnn] + i;
        return (i != 0? this.dbg.getSignedHexString(i) : "") + "(A" + nnn + ").w";
    }

    getData() {
        return this.dbg.getWord(this.ea) & 0xffff;
    }
}

class DbgModeAValDispLong extends DbgMode {
    getString(nnn) {
        let i = this.dbg.getWord(this.dbg.curPC);
        this.dbg.curPC += 2;
        this.ea = this.cpu.regA[nnn] + i;
        return (i != 0? this.dbg.getSignedHexString(i) : "") + "(A" + nnn + ").l";
    }

    getData() {
        return this.dbg.getLong(this.ea);
    }
}

class DbgModeAValIndexByte extends DbgMode {
    getString(nnn) {
        this.ea = this.dbg.getIndexAddr(this.cpu.regA[nnn]);
        return this.dbg.getIndexAddrString(nnn) + ".b";
    }

    getData() {
        return this.dbg.getByte(this.ea) & 0xff;
    }
}

class DbgModeAValIndexWord extends DbgMode {
    getString(nnn) {
        this.ea = this.dbg.getIndexAddr(this.cpu.regA[nnn]);
        return this.dbg.getIndexAddrString(nnn) + ".w";
    }

    getData() {
        return this.dbg.getWord(this.ea) & 0xffff;
    }
}

class DbgModeAValIndexLong extends DbgMode {
    getString(nnn) {
        this.ea = this.dbg.getIndexAddr(this.cpu.regA[nnn]);
        return this.dbg.getIndexAddrString(nnn) + ".l";
    }

    getData() {
        return this.dbg.getLong(this.ea);
    }
}

class DbgModeAbs16Byte extends DbgMode {
    getString(nnn) {
        this.ea = this.dbg.getWord(this.dbg.curPC);
        this.dbg.curPC += 2;
        return this.dbg.sprintf("(%x).b", this.ea);
    }

    getData() {
        return this.dbg.getByte(this.ea) & 0xff;
    }
}

class DbgModeAbs16Word extends DbgMode {
    getString(nnn) {
        this.ea = this.dbg.getWord(this.dbg.curPC);
        this.dbg.curPC += 2;
        return this.dbg.sprintf("(%x).w", this.ea);
    }

    getData() {
        return this.dbg.getWord(this.ea) & 0xffff;
    }
}

class DbgModeAbs16Long extends DbgMode {
    getString(nnn) {
        this.ea = this.dbg.getWord(this.dbg.curPC);
        this.dbg.curPC += 2;
        return this.dbg.sprintf("(%x).l", this.ea);
    }

    getData() {
        return this.dbg.getLong(this.ea);
    }
}

class DbgModeAbs32Byte extends DbgMode {
    getString(nnn) {
        this.ea = this.dbg.getLong(this.dbg.curPC);
        this.dbg.curPC += 4;
        return this.dbg.sprintf("(%x).b", this.ea);
    }

    getData() {
        return this.dbg.getByte(this.ea) & 0xff;
    }
}

class DbgModeAbs32Word extends DbgMode {
    getString(nnn) {
        this.ea = this.dbg.getLong(this.dbg.curPC);
        this.dbg.curPC += 4;
        return this.dbg.sprintf("(%x).w", this.ea);
    }

    getData() {
        return this.dbg.getWord(this.ea) & 0xffff;
    }
}

class DbgModeAbs32Long extends DbgMode {
    getString(nnn) {
        this.ea = this.dbg.getLong(this.dbg.curPC);
        this.dbg.curPC += 4;
        return this.dbg.sprintf("(%x).l", this.ea);
    }

    getData() {
        return this.dbg.getLong(this.ea);
    }
}

class DbgModePCValDispByte extends DbgMode {
    getString(nnn) {
        let i = this.dbg.getWord(this.dbg.curPC);
        this.ea = this.dbg.curPC + i;
        this.dbg.curPC += 2;
        return (i? this.dbg.getSignedHexString(i) : "") + "(PC).b";
    }

    getData() {
        return this.dbg.getByte(this.ea) & 0xff;
    }
}

class DbgModePCValDispWord extends DbgMode {
    getString(nnn) {
        let i = this.dbg.getWord(this.dbg.curPC);
        this.ea = this.dbg.curPC + i;
        this.dbg.curPC += 2;
        return (i? this.dbg.getSignedHexString(i) : "") + "(PC).w";
    }

    getData() {
        return this.dbg.getWord(this.ea) & 0xffff;
    }
}

class DbgModePCValDispLong extends DbgMode {
    getString(nnn) {
        let i = this.dbg.getWord(this.dbg.curPC);
        this.ea = this.dbg.curPC + i;
        this.dbg.curPC += 2;
        return (i? this.dbg.getSignedHexString(i) : "") + "(PC).l";
    }

    getData() {
        return this.dbg.getLong(this.ea);
    }
}

class DbgModePCValIndexByte extends DbgMode {
    getString(nnn) {
        this.ea = this.dbg.getIndexAddr(this.dbg.curPC);
        return this.dbg.getIndexAddrString(-1) + ".b";
    }

    getData() {
        return this.dbg.getByte(this.ea) & 0xff;
    }
}
class DbgModePCValIndexWord extends DbgMode {
    getString(nnn) {
        this.ea = this.dbg.getIndexAddr(this.dbg.curPC);
        return this.dbg.getIndexAddrString(-1) + ".w";
    }

    getData() {
        return this.dbg.getWord(this.ea) & 0xffff;
    }
}
class DbgModePCValIndexLong extends DbgMode {
    getString(nnn) {
        this.ea = this.dbg.getIndexAddr(this.dbg.curPC);
        return this.dbg.getIndexAddrString(-1) + ".l";
    }

    getData() {
        return this.dbg.getLong(this.ea);
    }
}

class DbgModeImmediateByte extends DbgMode {
    constructor(dbg) {
        super(dbg, "#");
    }

    getString(nnn) {
        this.ea = this.dbg.curPC + 1;
        this.dbg.curPC += 2;
        return this.dbg.getImmediateHexString(this.dbg.getByte(this.ea));     // + ".b";
    }

    getData() {
        return this.dbg.getByte(this.ea) & 0xff;
    }
}

class DbgModeImmediateWord extends DbgMode {
    constructor(dbg) {
        super(dbg, "#");
    }

    getString(nnn) {
        this.ea = this.dbg.curPC;
        this.dbg.curPC += 2;
        return this.dbg.getImmediateHexString(this.dbg.getWord(this.ea));     // + ".w";
    }

    getData() {
        return this.dbg.getWord(this.ea) & 0xffff;
    }
}

class DbgModeImmediateLong extends DbgMode {
    constructor(dbg) {
        super(dbg, "#");
    }

    getString(nnn) {
        this.ea = this.dbg.curPC;
        this.dbg.curPC += 4;
        return this.dbg.getImmediateHexString(this.dbg.getLong(this.ea));     // + ".l";
    }

    getData() {
        return this.dbg.getLong(this.ea);
    }
}

/**
 * Definitions ported from DebuggerInterface.java
 */
Dbg68K.MEMTYPE_ROM         = 0;
Dbg68K.MEMTYPE_DEVICE      = 1;
Dbg68K.MEMTYPE_CODE        = 2;
Dbg68K.MEMTYPE_DATA        = 3;

Dbg68K.DATAACCESS_NONE     = 0;
Dbg68K.DATAACCESS_READ     = 1;
Dbg68K.DATAACCESS_WRITE    = 2;
Dbg68K.DATAACCESS_UNINIT   = 3;

Dbg68K.CLASSES["Dbg68K"] = Dbg68K;

/**
 * @copyright https://www.pcjs.org/machines/motorola/68k/modules/v3/eamodes.js (C) 2012-2026 Jeff Parsons
 */

/**
 * All EAMode subclasses must implement the following abstract methods:
 *
 *  getEA: calculate and set an effective address (ea)
 *  getData: get data from the effective address (ea)
 *  setData: set data at the effective address (ea)
 *  updateFlagZ: update Z flag
 *  updateFlagV: update V flag (WARNING: updateFlagZ must be called first)
 *
 * The EAMode class already provides wrappers for combining the above methods into frequently-used operations
 * (eg, getEAData() instead of getEA() + getData()).
 */
class EAMode
{
    /**
     * EAMode(cpu, mask, sign, width, type)
     *
     * @this {EAMode}
     * @param {CPU68K} cpu
     * @param {number} mask
     * @param {number} sign
     * @param {number} width
     * @param {number} type
     */
    constructor(cpu, mask, sign, width, type)
    {
        this.cpu = cpu;
        this.ea = 0;
        this.mask = mask;
        this.sign = sign;
        this.width = width;
        this.cycle2l = type * 2;
        this.cycle4l = type * 4;
        this.cycle2ADI = this.cycle2Dl = this.cycle4Aw = this.cycle4AD = this.cycle2ADl = this.cycle4ADl = 0;
    }

    /**
     * getEA(nnn)
     *
     * @this {EAMode}
     * @param {number} nnn
     * @returns {number}
     */
    getEA(nnn) {
        return this.ea = nnn;
    }

    /**
     * getData()
     *
     * @this {EAMode}
     * @returns {number}
     */
    getData() {
        return 0;
    }

    /**
     * setData(data)
     *
     * @this {EAMode}
     * @param {number} data
     */
     setData(data) {
     }

    /**
     * updateFlagZ(data)
     *
     * @this {EAMode}
     * @param {number} data
     */
    updateFlagZ(data) {
    }

    /**
     * updateFlagV()
     *
     * @this {EAMode}
     */
    updateFlagV() {
    }

    /**
     * advanceEA(nnn)
     *
     * @this {EAMode}
     * @param {number} nnn
     */
    advanceEA(nnn)
    {
        let nCycles = this.cpu.nCyclesRemain;
        this.getEA(nnn);
        this.cpu.nCyclesRemain = nCycles;
    }

    /**
     * getEAData(nnn)
     *
     * @this {EAMode}
     * @param {number} nnn
     * @returns {number}
     */
    getEAData(nnn)
    {
        this.getEA(nnn);
        return this.getData();
    }

    /**
     * setEAData(nnn, data)
     *
     * @this {EAMode}
     * @param {number} nnn
     * @param {number} data
     */
    setEAData(nnn, data)
    {
        this.getEA(nnn);
        this.setData(data);
    }

    /**
     * updateFlagsZNClearCV(data)
     *
     * @this {EAMode}
     * @param {number} data
     */
    updateFlagsZNClearCV(data)
    {
        this.updateFlagZ(data);
        this.cpu.flagNNew = this.cpu.flagZNew;
        this.cpu.flagVNew = this.cpu.flagVDst = 0;
        this.cpu.flagCSrc = this.cpu.flagCDst = 0;
    }

    /**
     * setDataFlagsZNClearV(data)
     *
     * @this {EAMode}
     * @param {number} data
     */
    setDataFlagsZNClearV(data)
    {
        this.setData(data);
        this.updateFlagZ(data);
        this.cpu.flagNNew = this.cpu.flagZNew;
        this.cpu.flagVDst = 0;
        this.cpu.flagVNew = 0;
    }

    /**
     * setDataFlagsZNClearCV(data)
     *
     * @this {EAMode}
     * @param {number} data
     */
    setDataFlagsZNClearCV(data)
    {
        this.setData(data);
        this.updateFlagZ(data);
        this.cpu.flagNNew = this.cpu.flagZNew;
        this.cpu.flagVNew = this.cpu.flagVDst = 0;
        this.cpu.flagCSrc = this.cpu.flagCDst = 0;
    }

    /**
     * setDataFlagsExceptXClearCV(data)
     *
     * @this {EAMode}
     * @param {number} data
     */
    setDataFlagsExceptXClearCV(data)
    {
        this.setData(data);
        this.updateFlagZ(data);
        this.cpu.flagNNew = this.cpu.flagZNew;
        this.cpu.flagVNew = this.cpu.flagVDst = 0;
        this.cpu.flagCSrc = this.cpu.flagCDst = 0;
    }

    /**
     * setEADataFlagsZNClearCV(nnn, data)
     *
     * @this {EAMode}
     * @param {number} nnn
     * @param {number} data
     */
    setEADataFlagsZNClearCV(nnn, data)
    {
        this.getEA(nnn);
        this.setData(data);
        this.updateFlagZ(data);
        this.cpu.flagNNew = this.cpu.flagZNew;
        this.cpu.flagVNew = this.cpu.flagVDst = 0;
        this.cpu.flagCSrc = this.cpu.flagCDst = 0;
    }

    // The rest of the Flags functions require that both dataSrc and dataDst be set first

    /**
     * updateFlags(data)
     *
     * @this {EAMode}
     * @param {number} data
     */
    updateFlags(data)
    {
        this.updateFlagZ(data);
        this.cpu.flagNNew = this.cpu.flagZNew;
        this.updateFlagV();
        this.cpu.flagCSrc = this.cpu.flagXSrc = this.cpu.flagVSrc;
        this.cpu.flagCDst = this.cpu.flagXDst = this.cpu.flagVDst;
    }

    /**
     * updateFlagsExceptX(data)
     *
     * @this {EAMode}
     * @param {number} data
     */
    updateFlagsExceptX(data)
    {
        this.updateFlagZ(data);
        this.cpu.flagNNew = this.cpu.flagZNew;
        this.updateFlagV();
        this.cpu.flagCSrc = this.cpu.flagVSrc;
        this.cpu.flagCDst = this.cpu.flagVDst;
    }

    /**
     * setDataFlags(data)
     *
     * @this {EAMode}
     * @param {number} data
     */
    setDataFlags(data)
    {
        this.setData(data);
        this.updateFlags(data);
    }

    /**
     * setDataFlagsForAdd(data)
     *
     * @this {EAMode}
     * @param {number} data
     */
    setDataFlagsForAdd(data)
    {
        this.setData(data);
        this.updateFlags(data);
        this.cpu.flagVSrc = ~this.cpu.flagVSrc;
        this.cpu.flagCDst = this.cpu.flagXDst = ~this.cpu.flagCDst;
    }

    /**
     * getIndexAddr(base)
     *
     * @this {EAMode}
     * @param {number} base
     * @returns {number}
     */
    getIndexAddr(base)
    {
        let addr = this.cpu.getPCWord();
        let i = (addr & 0x7000) >> 12;

        if ((addr & 0x0800) != 0) {
            if ((addr & 0x8000) != 0) {
                return (base + this.cpu.regA[i] + (addr << 24 >> 24))|0;
            }
            else {
                return (base + this.cpu.regD[i] + (addr << 24 >> 24))|0;
            }
        }
        else {
            if ((addr & 0x8000) != 0) {
                return (base + (this.cpu.regA[i] << 16 >> 16) + (addr << 24 >> 24))|0;
            }
            else {
                return (base + (this.cpu.regD[i] << 16 >> 16) + (addr << 24 >> 24))|0;
            }
        }
    }

}

class EAModeIllegal extends EAMode {
    constructor(cpu) {
        super(cpu, 0, 0, 0, 0);
    }

    getEA(nnn) {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
        return 0;
    }

    getData() {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
        return 0;
    }

    setData(data) {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
    }

    updateFlagZ(data) {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
    }

    updateFlagV() {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
    }
}

class EAModeDRegByte extends EAMode {
    constructor(cpu) {
        super(cpu, 0xff, 0x80, 8, 0);
        this.cycle2ADI = 2;
        this.cycle4AD = 4;
    }

    getData() {
        return this.cpu.regD[this.ea] << 24 >> 24;
    }

    getEAData(nnn) {                            // overrides default method, for speed
        return this.cpu.regD[this.ea = nnn] << 24 >> 24;
    }

    setData(data) {
        this.cpu.regD[this.ea] = (this.cpu.regD[this.ea] & ~0xff) | (data & 0xff);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 24 >> 24;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst|0;
        this.cpu.flagVSrc = this.cpu.dataSrc|0;
    }

    setEADataFlagsZNClearCV(nnn, data) {        // overrides default method, for speed
        this.ea = nnn;
        this.cpu.regD[this.ea] = (this.cpu.regD[this.ea] & ~0xff) | (data & 0xff);
        this.cpu.flagZNew = data << 24 >> 24;
        this.cpu.flagNNew = this.cpu.flagZNew;
        this.cpu.flagVNew = this.cpu.flagVDst = 0;
        this.cpu.flagCSrc = this.cpu.flagCDst = 0;
    }
}
class EAModeDRegWord extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffff, 0x8000, 16, 0);
        this.cycle2ADI = 2;
        this.cycle4AD = 4;
    }

    getData() {
        return this.cpu.regD[this.ea] << 16 >> 16;
    }

    getEAData(nnn) {                            // overrides default method, for speed
        return this.cpu.regD[this.ea = nnn] << 16 >> 16;
    }

    setData(data) {
        this.cpu.regD[this.ea] = (this.cpu.regD[this.ea] & ~0xffff) | (data & 0xffff);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 16 >> 16;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 16 >> 16;
        this.cpu.flagVSrc = this.cpu.dataSrc << 16 >> 16;
    }

    setEADataFlagsZNClearCV(nnn, data) {        // overrides default method, for speed
        this.ea = nnn;
        this.cpu.regD[this.ea] = (this.cpu.regD[this.ea] & ~0xffff) | (data & 0xffff);
        this.cpu.flagZNew = data << 16 >> 16;
        this.cpu.flagNNew = this.cpu.flagZNew;
        this.cpu.flagVNew = this.cpu.flagVDst = 0;
        this.cpu.flagCSrc = this.cpu.flagCDst = 0;
    }
}
class EAModeDRegLong extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffffffff, 0x80000000, 32, 1);
        this.cycle2Dl = this.cycle2ADI = this.cycle2ADl = 2;
        this.cycle4AD = this.cycle4ADl = 4;
    }

    getData() {
        return this.cpu.regD[this.ea];
    }

    getEAData(nnn) {                            // overrides default method, for speed
        return this.cpu.regD[this.ea = nnn];
    }

    setData(data) {
        this.cpu.regD[this.ea] = data|0;
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data|0;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst|0;
        this.cpu.flagVSrc = this.cpu.dataSrc|0;
    }

    setEADataFlagsZNClearCV(nnn, data) {        // overrides default method, for speed
        this.ea = nnn;
        this.cpu.regD[this.ea] = data|0;
        this.cpu.flagZNew = data|0;
        this.cpu.flagNNew = this.cpu.flagZNew;
        this.cpu.flagVNew = this.cpu.flagVDst = 0;
        this.cpu.flagCSrc = this.cpu.flagCDst = 0;
    }
}

class EAModeARegWord extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffff, 0x8000, 16, 0);
        this.cycle2ADI = 2;
        this.cycle4Aw = this.cycle4AD = 4;
    }

    getData() {
        return this.cpu.regA[this.ea] << 16 >> 16;
    }

    setData(data) {
        this.cpu.regA[this.ea] = data|0;        // NOTE: the entire A register is always updated, and byte operations are illegal
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 16 >> 16;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 16 >> 16;
        this.cpu.flagVSrc = this.cpu.dataSrc << 16 >> 16;
    }
}
class EAModeARegLong extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffffffff, 0x80000000, 32, 1);
        this.cycle2ADI = this.cycle2ADl = 2;
        this.cycle4AD = this.cycle4ADl = 4;
    }

    getData() {
        return this.cpu.regA[this.ea];
    }

    setData(data) {
        this.cpu.regA[this.ea] = data|0;
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data|0;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst|0;
        this.cpu.flagVSrc = this.cpu.dataSrc|0;
    }

    setEAData(nnn, data) {                      // overrides default method, for speed
        this.cpu.regA[this.ea = nnn] = data|0;
    }
}

class EAModeAValByte extends EAMode {
    constructor(cpu) {
        super(cpu, 0xff, 0x80, 8, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(4);
        return this.ea = this.cpu.regA[nnn];
    }

    advanceEA(nnn) {
        this.ea = (this.ea + 1)|0;
    }

    getData() {
        return this.cpu.getByte(this.ea);
    }

    setData(data) {
        this.cpu.setByte(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 24 >> 24;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 24 >> 24;
        this.cpu.flagVSrc = this.cpu.dataSrc << 24 >> 24;
    }
}
class EAModeAValWord extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffff, 0x8000, 16, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(4);
        return this.ea = this.cpu.regA[nnn];
    }

    advanceEA(nnn) {
        this.ea = (this.ea + 2)|0;
    }

    getData() {
        return this.cpu.getWord(this.ea);
    }

    setData(data) {
        this.cpu.setWord(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 16 >> 16;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 16 >> 16;
        this.cpu.flagVSrc = this.cpu.dataSrc << 16 >> 16;
    }
}
class EAModeAValLong extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffffffff, 0x80000000, 32, 1);
    }

    getEA(nnn) {
        this.cpu.addCycles(8);
        return this.ea = this.cpu.regA[nnn];
    }

    advanceEA(nnn) {
        this.ea = (this.ea + 4)|0;
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }

    setData(data) {
        this.cpu.setLong(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data|0;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst|0;
        this.cpu.flagVSrc = this.cpu.dataSrc|0;
    }
}

class EAModeAValIncByte extends EAMode {
    constructor(cpu) {
        super(cpu, 0xff, 0x80, 8, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(4);
        this.ea = this.cpu.regA[nnn];
        this.cpu.regA[nnn] = (this.cpu.regA[nnn] + CPU68K.aByteInc[nnn])|0;
        return this.ea;
    }

    getData() {
        return this.cpu.getByte(this.ea);
    }

    setData(data) {
        this.cpu.setByte(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 24 >> 24;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 24 >> 24;
        this.cpu.flagVSrc = this.cpu.dataSrc << 24 >> 24;
    }
}

class EAModeAValIncWord extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffff, 0x8000, 16, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(4);
        this.ea = this.cpu.regA[nnn];
        this.cpu.regA[nnn] = (this.cpu.regA[nnn] + 2)|0;
        return this.ea;
    }

    getData() {
        return this.cpu.getWord(this.ea);
    }

    setData(data) {
        this.cpu.setWord(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 16 >> 16;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 16 >> 16;
        this.cpu.flagVSrc = this.cpu.dataSrc << 16 >> 16;
    }
}
class EAModeAValIncLong extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffffffff, 0x80000000, 32, 1);
    }

    getEA(nnn) {
        this.cpu.addCycles(8);
        this.ea = this.cpu.regA[nnn];
        this.cpu.regA[nnn] = (this.cpu.regA[nnn] + 4)|0;
        return this.ea;
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }

    setData(data) {
        this.cpu.setLong(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data|0;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst|0;
        this.cpu.flagVSrc = this.cpu.dataSrc|0;
    }
}

class EAModeAValDecByte extends EAMode {
    constructor(cpu) {
        super(cpu, 0xff, 0x80, 8, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(4);                  // BUGBUG: 6 if source operand (allocate separate EAMode instances for source and dest operands?) -JP
        this.cpu.regA[nnn] = (this.cpu.regA[nnn] - CPU68K.aByteInc[nnn])|0;
        return this.ea = this.cpu.regA[nnn];
    }

    getData() {
        return this.cpu.getByte(this.ea);
    }

    setData(data) {
        this.cpu.setByte(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 24 >> 24;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 24 >> 24;
        this.cpu.flagVSrc = this.cpu.dataSrc << 24 >> 24;
    }
}

class EAModeAValDecWord extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffff, 0x8000, 16, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(4);                  // BUGBUG: 6 if source operand (allocate separate EAMode instances for source and dest operands?) -JP
        this.cpu.regA[nnn] = (this.cpu.regA[nnn] - 2)|0;
        return this.ea = this.cpu.regA[nnn];
    }

    getData() {
        return this.cpu.getWord(this.ea);
    }

    setData(data) {
        this.cpu.setWord(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 16 >> 16;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 16 >> 16;
        this.cpu.flagVSrc = this.cpu.dataSrc << 16 >> 16;
    }
}

class EAModeAValDecLong extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffffffff, 0x80000000, 32, 1);
    }

    getEA(nnn) {
        this.cpu.addCycles(8);                  // BUGBUG: 10 if source operand (allocate separate EAMode instances for source and dest operands?) -JP
        this.cpu.regA[nnn] = (this.cpu.regA[nnn] - 4)|0;
        return this.ea = this.cpu.regA[nnn];
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }

    setData(data) {
        this.cpu.setLong(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data|0;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst|0;
        this.cpu.flagVSrc = this.cpu.dataSrc|0;
    }
}

class EAModeAValDispByte extends EAMode {
    constructor(cpu) {
        super(cpu, 0xff, 0x80, 8, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(8);
        return this.ea = (this.cpu.regA[nnn] + this.cpu.getPCWord())|0;
    }

    advanceEA(nnn) {
        this.ea = (this.ea + 1)|0;
    }

    getData() {
        return this.cpu.getByte(this.ea);
    }

    setData(data) {
        this.cpu.setByte(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 24 >> 24;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 24 >> 24;
        this.cpu.flagVSrc = this.cpu.dataSrc << 24 >> 24;
    }
}

class EAModeAValDispWord extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffff, 0x8000, 16, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(8);
        return this.ea = (this.cpu.regA[nnn] + this.cpu.getPCWord())|0;
    }

    advanceEA(nnn) {
        this.ea = (this.ea + 2)|0;
    }

    getData() {
        return this.cpu.getWord(this.ea);
    }

    setData(data) {
        this.cpu.setWord(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 16 >> 16;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 16 >> 16;
        this.cpu.flagVSrc = this.cpu.dataSrc << 16 >> 16;
    }
}

class EAModeAValDispLong extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffffffff, 0x80000000, 32, 1);
    }

    getEA(nnn) {
        this.cpu.addCycles(12);
        return this.ea = (this.cpu.regA[nnn] + this.cpu.getPCWord())|0;
    }

    advanceEA(nnn) {
        this.ea = (this.ea + 4)|0;
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }

    setData(data) {
        this.cpu.setLong(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data|0;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst|0;
        this.cpu.flagVSrc = this.cpu.dataSrc|0;
    }
}

class EAModeAValIndexByte extends EAMode {
    constructor(cpu) {
        super(cpu, 0xff, 0x80, 8, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(10);
        return this.ea = this.getIndexAddr(this.cpu.regA[nnn]);
    }

    advanceEA(nnn) {
        this.ea = (this.ea + 1)|0;
    }

    getData() {
        return this.cpu.getByte(this.ea);
    }

    setData(data) {
        this.cpu.setByte(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 24 >> 24;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 24 >> 24;
        this.cpu.flagVSrc = this.cpu.dataSrc << 24 >> 24;
    }
}

class EAModeAValIndexWord extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffff, 0x8000, 16, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(10);
        return this.ea = this.getIndexAddr(this.cpu.regA[nnn]);
    }

    advanceEA(nnn) {
        this.ea = (this.ea + 2)|0;
    }

    getData() {
        return this.cpu.getWord(this.ea);
    }

    setData(data) {
        this.cpu.setWord(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 16 >> 16;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 16 >> 16;
        this.cpu.flagVSrc = this.cpu.dataSrc << 16 >> 16;
    }
}

class EAModeAValIndexLong extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffffffff, 0x80000000, 32, 1);
    }

    getEA(nnn) {
        this.cpu.addCycles(14);
        return this.ea = this.getIndexAddr(this.cpu.regA[nnn]);
    }

    advanceEA(nnn) {
        this.ea = (this.ea + 4)|0;
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }

    setData(data) {
        this.cpu.setLong(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data|0;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst|0;
        this.cpu.flagVSrc = this.cpu.dataSrc|0;
    }
}

class EAModeAbs16Byte extends EAMode {
    constructor(cpu) {
        super(cpu, 0xff, 0x80, 8, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(8);
        return this.ea = this.cpu.getPCWord();
    }

    advanceEA(nnn) {
        this.ea = (this.ea + 1)|0;
    }

    getData() {
        return this.cpu.getByte(this.ea);
    }

    setData(data) {
        this.cpu.setByte(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 24 >> 24;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 24 >> 24;
        this.cpu.flagVSrc = this.cpu.dataSrc << 24 >> 24;
    }
}
class EAModeAbs16Word extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffff, 0x8000, 16, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(8);
        return this.ea = this.cpu.getPCWord();
    }

    advanceEA(nnn) {
        this.ea = (this.ea + 2)|0;
    }

    getData() {
        return this.cpu.getWord(this.ea);
    }

    setData(data) {
        this.cpu.setWord(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 16 >> 16;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 16 >> 16;
        this.cpu.flagVSrc = this.cpu.dataSrc << 16 >> 16;
    }
}

class EAModeAbs16Long extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffffffff, 0x80000000, 32, 1);
    }

    getEA(nnn) {
        this.cpu.addCycles(12);
        return this.ea = this.cpu.getPCWord();
    }

    advanceEA(nnn) {
        this.ea = (this.ea + 4)|0;
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }

    setData(data) {
        this.cpu.setLong(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data|0;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst|0;
        this.cpu.flagVSrc = this.cpu.dataSrc|0;
    }
}

class EAModeAbs32Byte extends EAMode {
    constructor(cpu) {
        super(cpu, 0xff, 0x80, 8, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(12);
        return this.ea = this.cpu.getPCLong();
    }

    advanceEA(nnn) {
        this.ea = (this.ea + 1)|0;
    }

    getData() {
        return this.cpu.getByte(this.ea);
    }

    setData(data) {
        this.cpu.setByte(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 24 >> 24;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 24 >> 24;
        this.cpu.flagVSrc = this.cpu.dataSrc << 24 >> 24;
    }
}
class EAModeAbs32Word extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffff, 0x8000, 16, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(12);
        return this.ea = this.cpu.getPCLong();
    }

    advanceEA(nnn) {
        this.ea = (this.ea + 2)|0;
    }

    getData() {
        return this.cpu.getWord(this.ea);
    }

    setData(data) {
        this.cpu.setWord(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 16 >> 16;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 16 >> 16;
        this.cpu.flagVSrc = this.cpu.dataSrc << 16 >> 16;
    }
}

class EAModeAbs32Long extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffffffff, 0x80000000, 32, 1);
    }

    getEA(nnn) {
        this.cpu.addCycles(16);
        return this.ea = this.cpu.getPCLong();
    }

    advanceEA(nnn) {
        this.ea = (this.ea + 4)|0;
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }

    setData(data) {
        this.cpu.setLong(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data|0;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst|0;
        this.cpu.flagVSrc = this.cpu.dataSrc|0;
    }
}

class EAModePCValDispByte extends EAMode {
    constructor(cpu) {
        super(cpu, 0xff, 0x80, 8, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(8);
        return this.ea = (this.cpu.regPC + this.cpu.getPCWord())|0;
    }

    advanceEA(nnn) {
        this.ea = (this.ea + 1)|0;
    }

    getData() {
        return this.cpu.getByte(this.ea);
    }

    setData(data) {
        this.cpu.setByte(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 24 >> 24;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 24 >> 24;
        this.cpu.flagVSrc = this.cpu.dataSrc << 24 >> 24;
    }
}

class EAModePCValDispWord extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffff, 0x8000, 16, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(8);
        return this.ea = (this.cpu.regPC + this.cpu.getPCWord())|0;
    }

    advanceEA(nnn) {
        this.ea = (this.ea + 2)|0;
    }

    getData() {
        return this.cpu.getWord(this.ea);
    }

    setData(data) {
        this.cpu.setWord(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 16 >> 16;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 16 >> 16;
        this.cpu.flagVSrc = this.cpu.dataSrc << 16 >> 16;
    }
}

class EAModePCValDispLong extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffffffff, 0x80000000, 32, 1);
    }

    getEA(nnn) {
        this.cpu.addCycles(12);
        return this.ea = (this.cpu.regPC + this.cpu.getPCWord())|0;
    }

    advanceEA(nnn) {
        this.ea = (this.ea + 4)|0;
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }

    setData(data) {
        this.cpu.setLong(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data|0;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst|0;
        this.cpu.flagVSrc = this.cpu.dataSrc|0;
    }
}

class EAModePCValIndexByte extends EAMode {
    constructor(cpu) {
        super(cpu, 0xff, 0x80, 8, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(10);
        return this.ea = this.getIndexAddr(this.cpu.regPC);
    }

    advanceEA(nnn) {
        this.ea = (this.ea + 1)|0;
    }

    getData() {
        return this.cpu.getByte(this.ea);
    }

    setData(data) {
        this.cpu.setByte(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 24 >> 24;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 24 >> 24;
        this.cpu.flagVSrc = this.cpu.dataSrc << 24 >> 24;
    }
}

class EAModePCValIndexWord extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffff, 0x8000, 16, 0);
    }

    getEA(nnn) {
        this.cpu.addCycles(10);
        return this.ea = this.getIndexAddr(this.cpu.regPC);
    }

    advanceEA(nnn) {
        this.ea = (this.ea + 2)|0;
    }

    getData() {
        return this.cpu.getWord(this.ea);
    }

    setData(data) {
        this.cpu.setWord(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data << 16 >> 16;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst << 16 >> 16;
        this.cpu.flagVSrc = this.cpu.dataSrc << 16 >> 16;
    }
}

class EAModePCValIndexLong extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffffffff, 0x80000000, 32, 1);
    }

    getEA(nnn) {
        this.cpu.addCycles(14);
        return this.ea = this.getIndexAddr(this.cpu.regPC);
    }

    advanceEA(nnn) {
        this.ea = (this.ea + 4)|0;
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }

    setData(data) {
        this.cpu.setLong(this.ea, data);
    }

    updateFlagZ(data) {
        this.cpu.flagZNew = data|0;
    }

    updateFlagV() {
        this.cpu.flagVNew = this.cpu.flagZNew;
        this.cpu.flagVDst = this.cpu.dataDst|0;
        this.cpu.flagVSrc = this.cpu.dataSrc|0;
    }
}

class EAModeImmediateByte extends EAMode {
    constructor(cpu) {
        super(cpu, 0xff, 0x80, 8, 0);
        this.cycle2ADI = 2;
    }

    getEA(nnn) {
        this.cpu.addCycles(4);
        this.ea = this.cpu.regPC+1;
        this.cpu.regPC = (this.cpu.regPC + 2)|0;
        return this.ea;
    }

    getData() {
        return this.cpu.getByte(this.ea);
    }

    getEAData(nnn) {                            // overrides default method, for speed
        this.cpu.addCycles(4);
        this.ea = this.cpu.regPC+1;
        return this.cpu.getPCWord() << 24 >> 24;
    }

    setData(data) {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
    }

    updateFlagZ(data) {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
    }

    updateFlagV() {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
    }
}

class EAModeImmediateWord extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffff, 0x8000, 16, 0);
        this.cycle2ADI = 2;
    }

    getEA(nnn) {
        this.cpu.addCycles(4);
        this.ea = this.cpu.regPC;
        this.cpu.regPC = (this.cpu.regPC + 2)|0;
        return this.ea;
    }

    getData() {
        return this.cpu.getWord(this.ea);
    }

    getEAData(nnn) {                            // overrides default method, for speed
        this.cpu.addCycles(4);
        this.ea = this.cpu.regPC;
        return this.cpu.getPCWord();
    }

    setData(data) {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
    }

    updateFlagZ(data) {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
    }

    updateFlagV() {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
    }
}

class EAModeImmediateLong extends EAMode {
    constructor(cpu) {
        super(cpu, 0xffffffff, 0x80000000, 32, 1);
        this.cycle2ADI = 2;
    }

    getEA(nnn) {
        this.cpu.addCycles(8);
        this.ea = this.cpu.regPC;
        this.cpu.regPC = (this.cpu.regPC + 4)|0;
        return this.ea;
    }

    getData() {
        return this.cpu.getLong(this.ea);
    }

    getEAData(nnn) {                            // overrides default method, for speed
        this.cpu.addCycles(8);
        this.ea = this.cpu.regPC;
        return this.cpu.getPCLong();
    }

    setData(data) {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
    }

    updateFlagZ(data) {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
    }

    updateFlagV() {
        this.cpu.genException(CPU68K.EXCEPTION_ILLEGAL_INSTRUCTION);
    }
}

/**
 * @copyright https://www.pcjs.org/machines/palm/pilot/modules/v3/palmos.js (C) 2012-2026 Jeff Parsons
 */

/**
 * @class PalmOS
 * @unrestricted
 *
 * This is a port of the PalmOSTypes.java API table, which describes PalmOS system traps (ie, the API selectors that
 * follow every "TRAP #15" instruction).  Each description begins with the name of the API, optionally followed by
 * a parameter list and return type, which the original Java ScriptManager used to make API calls on behalf of scripts.
 */
class PalmOS {
    /**
     * getAPIName(iTrap)
     *
     * @param {number} iTrap (ie, the API selector following a TRAP #15 instruction)
     * @returns {string} API name (or the selector in hex, if unknown)
     */
    static getAPIName(iTrap)
    {
        let s = PalmOS.getAPIDesc(iTrap);
        if (s) {
            let i = s.indexOf('(');
            if (i >= 0) s = s.substring(0, i);
        }
        return s || "0x" + (iTrap & 0xffff).toString(16);
    }

    /**
     * getAPIDesc(iTrap)
     *
     * @param {number} iTrap
     * @returns {string|null} API description, or null if none
     */
    static getAPIDesc(iTrap)
    {
        let iAPI = (iTrap & 0xffff) - PalmOS.TRAP_API_BASE;
        return (iAPI >= 0 && iAPI < PalmOS.API_DESCS.length)? PalmOS.API_DESCS[iAPI] : null;
    }

    /**
     * getAPITrap(sName)
     *
     * @param {string} sName (eg, "DmFindDatabase")
     * @returns {number} API selector (eg, 0xa045), or -1 if unknown
     */
    static getAPITrap(sName)
    {
        for (let iAPI = 0; iAPI < PalmOS.API_DESCS.length; iAPI++) {
            let s = PalmOS.API_DESCS[iAPI];
            if (s.startsWith(sName) && (s.length == sName.length || s[sName.length] == '(')) {
                return PalmOS.TRAP_API_BASE + iAPI;
            }
        }
        return -1;
    }
}

/**
 * PalmOS encodes API numbers in the word following the "TRAP #15" instruction, starting with this value.
 */
PalmOS.TRAP_API_BASE = 0xa000;

PalmOS.API_DESCS = [
    "MemInit",                               // 0x000
    "MemInitHeapTable",                      // 0x001
    "MemStoreInit",                          // 0x002
    "MemCardFormat",                         // 0x003
    "MemCardInfo(cardNo:uw,cardName:psz32,manufName:psz32,version:puw,crDate:pui,romSize:pui,ramSize:pui,freeBytes:pui):Err:uw", // 0x004  // http://www.doublebit.com/mirrors/palmos_com/dev/tech/docs/palmos/MemoryManager.html#924915
    "MemStoreInfo",                          // 0x005
    "MemStoreSetInfo",                       // 0x006
    "MemNumHeaps",                           // 0x007
    "MemNumRAMHeaps",                        // 0x008
    "MemHeapID",                             // 0x009
    "MemHeapPtr",                            // 0x00a
    "MemHeapFreeBytes",                      // 0x00b
    "MemHeapSize",                           // 0x00c
    "MemHeapFlags",                          // 0x00d
    "MemHeapCompact",                        // 0x00e
    "MemHeapInit",                           // 0x00f
    "MemHeapFreeByOwnerID",                  // 0x010
    "MemChunkNew",                           // 0x011
    "MemChunkFree(p:p):Err:uw",              // 0x012  // http://www.doublebit.com/mirrors/palmos_com/dev/tech/docs/palmos/MemoryManager.html#925616
    "MemPtrNew(size:ui):p",                  // 0x013  // http://www.doublebit.com/mirrors/palmos_com/dev/tech/docs/palmos/MemoryManager.html#925646
    "MemPtrRecoverHandle",                   // 0x014
    "MemPtrFlags",                           // 0x015
    "MemPtrSize",                            // 0x016
    "MemPtrOwner",                           // 0x017
    "MemPtrHeapID",                          // 0x018
    "MemPtrCardNo",                          // 0x019
    "MemPtrToLocalID",                       // 0x01a
    "MemPtrSetOwner",                        // 0x01b
    "MemPtrResize",                          // 0x01c
    "MemPtrResetLock",                       // 0x01d
    "MemHandleNew",                          // 0x01e
    "MemHandleLockCount",                    // 0x01f
    "MemHandleToLocalID",                    // 0x020
    "MemHandleLock",                         // 0x021
    "MemHandleUnlock",                       // 0x022
    "MemLocalIDToGlobal",                    // 0x023
    "MemLocalIDKind",                        // 0x024
    "MemLocalIDToPtr",                       // 0x025
    "MemMove",                               // 0x026
    "MemSet",                                // 0x027
    "MemStoreSearch",                        // 0x028
    "MemPtrDataStorage",                     // 0x029
    "MemKernelInit",                         // 0x02a
    "MemHandleFree",                         // 0x02b
    "MemHandleFlags",                        // 0x02c
    "MemHandleSize",                         // 0x02d
    "MemHandleOwner",                        // 0x02e
    "MemHandleHeapID",                       // 0x02f
    "MemHandleDataStorage",                  // 0x030
    "MemHandleCardNo",                       // 0x031
    "MemHandleSetOwner",                     // 0x032
    "MemHandleResize",                       // 0x033
    "MemHandleResetLock",                    // 0x034
    "MemPtrUnlock",                          // 0x035
    "MemLocalIDToLockedPtr",                 // 0x036
    "MemSetDebugMode",                       // 0x037
    "MemHeapScramble",                       // 0x038
    "MemHeapCheck",                          // 0x039
    "MemNumCards",                           // 0x03a
    "MemDebugMode",                          // 0x03b
    "MemSemaphoreReserve",                   // 0x03c
    "MemSemaphoreRelease",                   // 0x03d
    "MemHeapDynamic",                        // 0x03e
    "MemNVParams",                           // 0x03f
    "DmInit",                                // 0x040
    "DmCreateDatabase",                      // 0x041
    "DmDeleteDatabase(cardNo:uw,dbID:ui):Err:uw", // 0x042  // http://www.doublebit.com/mirrors/palmos_com/dev/tech/docs/palmos/DataAndResourceManager.html#988040
    "DmNumDatabases",                        // 0x043
    "DmGetDatabase",                         // 0x044
    "DmFindDatabase(cardNo:uw,name:psz):LocalID:ui", // 0x045  // http://www.doublebit.com/mirrors/palmos_com/dev/tech/docs/palmos/DataAndResourceManager.html#925838
    "DmDatabaseInfo",                        // 0x046
    "DmSetDatabaseInfo",                     // 0x047
    "DmDatabaseSize",                        // 0x048
    "DmOpenDatabase",                        // 0x049
    "DmCloseDatabase",                       // 0x04a
    "DmNextOpenDatabase",                    // 0x04b
    "DmOpenDatabaseInfo",                    // 0x04c
    "DmResetRecordStates",                   // 0x04d
    "DmGetLastErr",                          // 0x04e
    "DmNumRecords",                          // 0x04f
    "DmRecordInfo",                          // 0x050
    "DmSetRecordInfo",                       // 0x051
    "DmAttachRecord",                        // 0x052
    "DmDetachRecord",                        // 0x053
    "DmMoveRecord",                          // 0x054
    "DmNewRecord",                           // 0x055
    "DmRemoveRecord",                        // 0x056
    "DmDeleteRecord",                        // 0x057
    "DmArchiveRecord",                       // 0x058
    "DmNewHandle",                           // 0x059
    "DmRemoveSecretRecords",                 // 0x05a
    "DmQueryRecord",                         // 0x05b
    "DmGetRecord",                           // 0x05c
    "DmResizeRecord",                        // 0x05d
    "DmReleaseRecord",                       // 0x05e
    "DmGetResource",                         // 0x05f
    "DmGet1Resource",                        // 0x060
    "DmReleaseResource",                     // 0x061
    "DmResizeResource",                      // 0x062
    "DmNextOpenResDatabase",                 // 0x063
    "DmFindResourceType",                    // 0x064
    "DmFindResource",                        // 0x065
    "DmSearchResource",                      // 0x066
    "DmNumResources",                        // 0x067
    "DmResourceInfo",                        // 0x068
    "DmSetResourceInfo",                     // 0x069
    "DmAttachResource",                      // 0x06a
    "DmDetachResource",                      // 0x06b
    "DmNewResource",                         // 0x06c
    "DmRemoveResource",                      // 0x06d
    "DmGetResourceIndex",                    // 0x06e
    "DmQuickSort",                           // 0x06f
    "DmQueryNextInCategory",                 // 0x070
    "DmNumRecordsInCategory",                // 0x071
    "DmPositionInCategory",                  // 0x072
    "DmSeekRecordInCategory",                // 0x073
    "DmMoveCategory",                        // 0x074
    "DmOpenDatabaseByTypeCreator",           // 0x075
    "DmWrite",                               // 0x076
    "DmStrCopy",                             // 0x077
    "DmGetNextDatabaseByTypeCreator",        // 0x078
    "DmWriteCheck",                          // 0x079
    "DmMoveOpenDBContext",                   // 0x07a
    "DmFindRecordByID",                      // 0x07b
    "DmGetAppInfoID",                        // 0x07c
    "DmFindSortPositionV10",                 // 0x07d
    "DmSet",                                 // 0x07e
    "DmCreateDatabaseFromImage(buffer:p):Err:uw", // 0x07f  // http://www.doublebit.com/mirrors/palmos_com/dev/tech/docs/palmos/DataAndResourceManager.html#925506
    "DbgSrcMessage",                         // 0x080
    "DbgMessage",                            // 0x081
    "DbgGetMessage",                         // 0x082
    "DbgCommSettings",                       // 0x083
    "ErrDisplayFileLineMsg",                 // 0x084
    "ErrSetJump",                            // 0x085
    "ErrLongJump",                           // 0x086
    "ErrThrow",                              // 0x087
    "ErrExceptionList",                      // 0x088
    "SysBroadcastActionCode",                // 0x089
    "SysUnimplemented",                      // 0x08a
    "SysColdBoot",                           // 0x08b
    "SysReset",                              // 0x08c
    "SysDoze",                               // 0x08d
    "SysAppLaunch",                          // 0x08e
    "SysAppStartup",                         // 0x08f
    "SysAppExit",                            // 0x090
    "SysSetA5",                              // 0x091
    "SysSetTrapAddress",                     // 0x092
    "SysGetTrapAddress",                     // 0x093
    "SysTranslateKernelErr",                 // 0x094
    "SysSemaphoreCreate",                    // 0x095
    "SysSemaphoreDelete",                    // 0x096
    "SysSemaphoreWait",                      // 0x097
    "SysSemaphoreSignal",                    // 0x098
    "SysTimerCreate",                        // 0x099
    "SysTimerWrite",                         // 0x09a
    "SysTaskCreate",                         // 0x09b
    "SysTaskDelete",                         // 0x09c
    "SysTaskTrigger",                        // 0x09d
    "SysTaskID",                             // 0x09e
    "SysTaskUserInfoPtr",                    // 0x09f
    "SysTaskDelay",                          // 0x0a0
    "SysTaskSetTermProc",                    // 0x0a1
    "SysUILaunch",                           // 0x0a2
    "SysNewOwnerID",                         // 0x0a3
    "SysSemaphoreSet",                       // 0x0a4
    "SysDisableInts",                        // 0x0a5
    "SysRestoreStatus",                      // 0x0a6
    "SysUIAppSwitch(cardNo:uw,dbID:ui,cmd:uw,cmdPBP:p):Err:uw", // 0x0a7  // http://www.doublebit.com/mirrors/palmos_com/dev/tech/docs/palmos/SystemManager.html#925699
    "SysCurAppInfoP",                        // 0x0a8
    "SysHandleEvent",                        // 0x0a9
    "SysInit",                               // 0x0aa
    "SysQSort",                              // 0x0ab
    "SysCurAppDatabase",                     // 0x0ac
    "SysFatalAlert",                         // 0x0ad
    "SysResSemaphoreCreate",                 // 0x0ae
    "SysResSemaphoreDelete",                 // 0x0af
    "SysResSemaphoreReserve",                // 0x0b0
    "SysResSemaphoreRelease",                // 0x0b1
    "SysSleep",                              // 0x0b2
    "SysKeyboardDialogV10",                  // 0x0b3
    "SysAppLauncherDialog",                  // 0x0b4
    "SysSetPerformance",                     // 0x0b5
    "SysBatteryInfo",                        // 0x0b6
    "SysLibInstall",                         // 0x0b7
    "SysLibRemove",                          // 0x0b8
    "SysLibTblEntry",                        // 0x0b9
    "SysLibFind",                            // 0x0ba
    "SysBatteryDialog",                      // 0x0bb
    "SysCopyStringResource",                 // 0x0bc
    "SysKernelInfo",                         // 0x0bd
    "SysLaunchConsole",                      // 0x0be
    "SysTimerDelete",                        // 0x0bf
    "SysSetAutoOffTime",                     // 0x0c0
    "SysFormPointerArrayToStrings",          // 0x0c1
    "SysRandom",                             // 0x0c2
    "SysTaskSwitching",                      // 0x0c3
    "SysTimerRead",                          // 0x0c4
    "StrCopy",                               // 0x0c5
    "StrCat",                                // 0x0c6
    "StrLen",                                // 0x0c7
    "StrCompare",                            // 0x0c8
    "StrIToA",                               // 0x0c9
    "StrCaselessCompare",                    // 0x0ca
    "StrIToH",                               // 0x0cb
    "StrChr",                                // 0x0cc
    "StrStr",                                // 0x0cd
    "StrAToI",                               // 0x0ce
    "StrToLower",                            // 0x0cf
    "SerReceiveISP",                         // 0x0d0
    "SlkOpen",                               // 0x0d1
    "SlkClose",                              // 0x0d2
    "SlkOpenSocket",                         // 0x0d3
    "SlkCloseSocket",                        // 0x0d4
    "SlkSocketRefNum",                       // 0x0d5
    "SlkSocketSetTimeout",                   // 0x0d6
    "SlkFlushSocket",                        // 0x0d7
    "SlkSetSocketListener",                  // 0x0d8
    "SlkSendPacket",                         // 0x0d9
    "SlkReceivePacket",                      // 0x0da
    "SlkSysPktDefaultResponse",              // 0x0db
    "SlkProcessRPC",                         // 0x0dc
    "ConPutS",                               // 0x0dd
    "ConGetS",                               // 0x0de
    "FplInit",                               // 0x0df
    "FplFree",                               // 0x0e0
    "FplFToA",                               // 0x0e1
    "FplAToF",                               // 0x0e2
    "FplBase10Info",                         // 0x0e3
    "FplLongToFloat",                        // 0x0e4
    "FplFloatToLong",                        // 0x0e5
    "FplFloatToULong",                       // 0x0e6
    "FplMul",                                // 0x0e7
    "FplAdd",                                // 0x0e8
    "FplSub",                                // 0x0e9
    "FplDiv",                                // 0x0ea
    "ScrInit",                               // 0x0eb
    "ScrCopyRectangle",                      // 0x0ec
    "ScrDrawChars",                          // 0x0ed
    "ScrLineRoutine",                        // 0x0ee
    "ScrRectangleRoutine",                   // 0x0ef
    "ScrScreenInfo",                         // 0x0f0
    "ScrDrawNotify",                         // 0x0f1
    "ScrSendUpdateArea",                     // 0x0f2
    "ScrCompressScanLine",                   // 0x0f3
    "ScrDeCompressScanLine",                 // 0x0f4
    "TimGetSeconds",                         // 0x0f5
    "TimSetSeconds",                         // 0x0f6
    "TimGetTicks",                           // 0x0f7
    "TimInit",                               // 0x0f8
    "TimSetAlarm",                           // 0x0f9
    "TimGetAlarm",                           // 0x0fa
    "TimHandleInterrupt",                    // 0x0fb
    "TimSecondsToDateTime",                  // 0x0fc
    "TimDateTimeToSeconds",                  // 0x0fd
    "TimAdjust",                             // 0x0fe
    "TimSleep",                              // 0x0ff
    "TimWake",                               // 0x100
    "CategoryCreateListV10",                 // 0x101
    "CategoryFreeListV10",                   // 0x102
    "CategoryFind",                          // 0x103
    "CategoryGetName",                       // 0x104
    "CategoryEditV10",                       // 0x105
    "CategorySelectV10",                     // 0x106
    "CategoryGetNext",                       // 0x107
    "CategorySetTriggerLabel",               // 0x108
    "CategoryTruncateName",                  // 0x109
    "ClipboardAddItem",                      // 0x10a
    "ClipboardCheckIfItemExist",             // 0x10b
    "ClipboardGetItem",                      // 0x10c
    "CtlDrawControl",                        // 0x10d
    "CtlEraseControl",                       // 0x10e
    "CtlHideControl",                        // 0x10f
    "CtlShowControl",                        // 0x110
    "CtlGetValue",                           // 0x111
    "CtlSetValue",                           // 0x112
    "CtlGetLabel",                           // 0x113
    "CtlSetLabel",                           // 0x114
    "CtlHandleEvent",                        // 0x115
    "CtlHitControl",                         // 0x116
    "CtlSetEnabled",                         // 0x117
    "CtlSetUsable",                          // 0x118
    "CtlEnabled",                            // 0x119
    "EvtInitialize",                         // 0x11a
    "EvtAddEventToQueue",                    // 0x11b
    "EvtCopyEvent",                          // 0x11c
    "EvtGetEvent",                           // 0x11d
    "EvtGetPen",                             // 0x11e
    "EvtSysInit",                            // 0x11f
    "EvtGetSysEvent",                        // 0x120
    "EvtProcessSoftKeyStroke",               // 0x121
    "EvtGetPenBtnList",                      // 0x122
    "EvtSetPenQueuePtr",                     // 0x123
    "EvtPenQueueSize",                       // 0x124
    "EvtFlushPenQueue",                      // 0x125
    "EvtEnqueuePenPoint",                    // 0x126
    "EvtDequeuePenStrokeInfo",               // 0x127
    "EvtDequeuePenPoint",                    // 0x128
    "EvtFlushNextPenStroke",                 // 0x129
    "EvtSetKeyQueuePtr",                     // 0x12a
    "EvtKeyQueueSize",                       // 0x12b
    "EvtFlushKeyQueue",                      // 0x12c
    "EvtEnqueueKey",                         // 0x12d
    "EvtDequeueKeyEvent",                    // 0x12e
    "EvtWakeup",                             // 0x12f
    "EvtResetAutoOffTimer",                  // 0x130
    "EvtKeyQueueEmpty",                      // 0x131
    "EvtEnableGraffiti",                     // 0x132
    "FldCopy",                               // 0x133
    "FldCut",                                // 0x134
    "FldDrawField",                          // 0x135
    "FldEraseField",                         // 0x136
    "FldFreeMemory",                         // 0x137
    "FldGetBounds",                          // 0x138
    "FldGetTextPtr",                         // 0x139
    "FldGetSelection",                       // 0x13a
    "FldHandleEvent",                        // 0x13b
    "FldPaste",                              // 0x13c
    "FldRecalculateField",                   // 0x13d
    "FldSetBounds",                          // 0x13e
    "FldSetText",                            // 0x13f
    "FldGetFont",                            // 0x140
    "FldSetFont",                            // 0x141
    "FldSetSelection",                       // 0x142
    "FldGrabFocus",                          // 0x143
    "FldReleaseFocus",                       // 0x144
    "FldGetInsPtPosition",                   // 0x145
    "FldSetInsPtPosition",                   // 0x146
    "FldSetScrollPosition",                  // 0x147
    "FldGetScrollPosition",                  // 0x148
    "FldGetTextHeight",                      // 0x149
    "FldGetTextAllocatedSize",               // 0x14a
    "FldGetTextLength",                      // 0x14b
    "FldScrollField",                        // 0x14c
    "FldScrollable",                         // 0x14d
    "FldGetVisibleLines",                    // 0x14e
    "FldGetAttributes",                      // 0x14f
    "FldSetAttributes",                      // 0x150
    "FldSendChangeNotification",             // 0x151
    "FldCalcFieldHeight",                    // 0x152
    "FldGetTextHandle",                      // 0x153
    "FldCompactText",                        // 0x154
    "FldDirty",                              // 0x155
    "FldWordWrap",                           // 0x156
    "FldSetTextAllocatedSize",               // 0x157
    "FldSetTextHandle",                      // 0x158
    "FldSetTextPtr",                         // 0x159
    "FldGetMaxChars",                        // 0x15a
    "FldSetMaxChars",                        // 0x15b
    "FldSetUsable",                          // 0x15c
    "FldInsert",                             // 0x15d
    "FldDelete",                             // 0x15e
    "FldUndo",                               // 0x15f
    "FldSetDirty",                           // 0x160
    "FldSendHeightChangeNotification",       // 0x161
    "FldMakeFullyVisible",                   // 0x162
    "FntGetFont",                            // 0x163
    "FntSetFont",                            // 0x164
    "FntGetFontPtr",                         // 0x165
    "FntBaseLine",                           // 0x166
    "FntCharHeight",                         // 0x167
    "FntLineHeight",                         // 0x168
    "FntAverageCharWidth",                   // 0x169
    "FntCharWidth",                          // 0x16a
    "FntCharsWidth",                         // 0x16b
    "FntDescenderHeight",                    // 0x16c
    "FntCharsInWidth",                       // 0x16d
    "FntLineWidth",                          // 0x16e
    "FrmInitForm",                           // 0x16f
    "FrmDeleteForm",                         // 0x170
    "FrmDrawForm",                           // 0x171
    "FrmEraseForm",                          // 0x172
    "FrmGetActiveForm",                      // 0x173
    "FrmSetActiveForm",                      // 0x174
    "FrmGetActiveFormID",                    // 0x175
    "FrmGetUserModifiedState",               // 0x176
    "FrmSetNotUserModified",                 // 0x177
    "FrmGetFocus",                           // 0x178
    "FrmSetFocus",                           // 0x179
    "FrmHandleEvent",                        // 0x17a
    "FrmGetFormBounds",                      // 0x17b
    "FrmGetWindowHandle",                    // 0x17c
    "FrmGetFormId",                          // 0x17d
    "FrmGetFormPtr",                         // 0x17e
    "FrmGetNumberOfObjects",                 // 0x17f
    "FrmGetObjectIndex",                     // 0x180
    "FrmGetObjectId",                        // 0x181
    "FrmGetObjectType",                      // 0x182
    "FrmGetObjectPtr",                       // 0x183
    "FrmHideObject",                         // 0x184
    "FrmShowObject",                         // 0x185
    "FrmGetObjectPosition",                  // 0x186
    "FrmSetObjectPosition",                  // 0x187
    "FrmGetControlValue",                    // 0x188
    "FrmSetControlValue",                    // 0x189
    "FrmGetControlGroupSelection",           // 0x18a
    "FrmSetControlGroupSelection",           // 0x18b
    "FrmCopyLabel",                          // 0x18c
    "FrmSetLabel",                           // 0x18d
    "FrmGetLabel",                           // 0x18e
    "FrmSetCategoryLabel",                   // 0x18f
    "FrmGetTitle",                           // 0x190
    "FrmSetTitle",                           // 0x191
    "FrmAlert",                              // 0x192
    "FrmDoDialog",                           // 0x193
    "FrmCustomAlert",                        // 0x194
    "FrmHelp",                               // 0x195
    "FrmUpdateScrollers",                    // 0x196
    "FrmGetFirstForm",                       // 0x197
    "FrmVisible",                            // 0x198
    "FrmGetObjectBounds",                    // 0x199
    "FrmCopyTitle",                          // 0x19a
    "FrmGotoForm",                           // 0x19b
    "FrmPopupForm",                          // 0x19c
    "FrmUpdateForm",                         // 0x19d
    "FrmReturnToForm",                       // 0x19e
    "FrmSetEventHandler",                    // 0x19f
    "FrmDispatchEvent",                      // 0x1a0
    "FrmCloseAllForms",                      // 0x1a1
    "FrmSaveAllForms",                       // 0x1a2
    "FrmGetGadgetData",                      // 0x1a3
    "FrmSetGadgetData",                      // 0x1a4
    "FrmSetCategoryTrigger",                 // 0x1a5
    "UIInitialize",                          // 0x1a6
    "UIReset",                               // 0x1a7
    "InsPtInitialize",                       // 0x1a8
    "InsPtSetLocation",                      // 0x1a9
    "InsPtGetLocation",                      // 0x1aa
    "InsPtEnable",                           // 0x1ab
    "InsPtEnabled",                          // 0x1ac
    "InsPtSetHeight",                        // 0x1ad
    "InsPtGetHeight",                        // 0x1ae
    "InsPtCheckBlink",                       // 0x1af
    "LstSetDrawFunction",                    // 0x1b0
    "LstDrawList",                           // 0x1b1
    "LstEraseList",                          // 0x1b2
    "LstGetSelection",                       // 0x1b3
    "LstGetSelectionText",                   // 0x1b4
    "LstHandleEvent",                        // 0x1b5
    "LstSetHeight",                          // 0x1b6
    "LstSetSelection",                       // 0x1b7
    "LstSetListChoices",                     // 0x1b8
    "LstMakeItemVisible",                    // 0x1b9
    "LstGetNumberOfItems",                   // 0x1ba
    "LstPopupList",                          // 0x1bb
    "LstSetPosition",                        // 0x1bc
    "MenuInit",                              // 0x1bd
    "MenuDispose",                           // 0x1be
    "MenuHandleEvent",                       // 0x1bf
    "MenuDrawMenu",                          // 0x1c0
    "MenuEraseStatus",                       // 0x1c1
    "MenuGetActiveMenu",                     // 0x1c2
    "MenuSetActiveMenu",                     // 0x1c3
    "RctSetRectangle",                       // 0x1c4
    "RctCopyRectangle",                      // 0x1c5
    "RctInsetRectangle",                     // 0x1c6
    "RctOffsetRectangle",                    // 0x1c7
    "RctPtInRectangle",                      // 0x1c8
    "RctGetIntersection",                    // 0x1c9
    "TblDrawTable",                          // 0x1ca
    "TblEraseTable",                         // 0x1cb
    "TblHandleEvent",                        // 0x1cc
    "TblGetItemBounds",                      // 0x1cd
    "TblSelectItem",                         // 0x1ce
    "TblGetItemInt",                         // 0x1cf
    "TblSetItemInt",                         // 0x1d0
    "TblSetItemStyle",                       // 0x1d1
    "TblUnhighlightSelection",               // 0x1d2
    "TblSetRowUsable",                       // 0x1d3
    "TblGetNumberOfRows",                    // 0x1d4
    "TblSetCustomDrawProcedure",             // 0x1d5
    "TblSetRowSelectable",                   // 0x1d6
    "TblRowSelectable",                      // 0x1d7
    "TblSetLoadDataProcedure",               // 0x1d8
    "TblSetSaveDataProcedure",               // 0x1d9
    "TblGetBounds",                          // 0x1da
    "TblSetRowHeight",                       // 0x1db
    "TblGetColumnWidth",                     // 0x1dc
    "TblGetRowID",                           // 0x1dd
    "TblSetRowID",                           // 0x1de
    "TblMarkRowInvalid",                     // 0x1df
    "TblMarkTableInvalid",                   // 0x1e0
    "TblGetSelection",                       // 0x1e1
    "TblInsertRow",                          // 0x1e2
    "TblRemoveRow",                          // 0x1e3
    "TblRowInvalid",                         // 0x1e4
    "TblRedrawTable",                        // 0x1e5
    "TblRowUsable",                          // 0x1e6
    "TblReleaseFocus",                       // 0x1e7
    "TblEditing",                            // 0x1e8
    "TblGetCurrentField",                    // 0x1e9
    "TblSetColumnUsable",                    // 0x1ea
    "TblGetRowHeight",                       // 0x1eb
    "TblSetColumnWidth",                     // 0x1ec
    "TblGrabFocus",                          // 0x1ed
    "TblSetItemPtr",                         // 0x1ee
    "TblFindRowID",                          // 0x1ef
    "TblGetLastUsableRow",                   // 0x1f0
    "TblGetColumnSpacing",                   // 0x1f1
    "TblFindRowData",                        // 0x1f2
    "TblGetRowData",                         // 0x1f3
    "TblSetRowData",                         // 0x1f4
    "TblSetColumnSpacing",                   // 0x1f5
    "WinCreateWindow",                       // 0x1f6
    "WinCreateOffscreenWindow",              // 0x1f7
    "WinDeleteWindow",                       // 0x1f8
    "WinInitializeWindow",                   // 0x1f9
    "WinAddWindow",                          // 0x1fa
    "WinRemoveWindow",                       // 0x1fb
    "WinSetActiveWindow",                    // 0x1fc
    "WinSetDrawWindow",                      // 0x1fd
    "WinGetDrawWindow",                      // 0x1fe
    "WinGetActiveWindow",                    // 0x1ff
    "WinGetDisplayWindow",                   // 0x200
    "WinGetFirstWindow",                     // 0x201
    "WinEnableWindow",                       // 0x202
    "WinDisableWindow",                      // 0x203
    "WinGetWindowFrameRect",                 // 0x204
    "WinDrawWindowFrame",                    // 0x205
    "WinEraseWindow",                        // 0x206
    "WinSaveBits",                           // 0x207
    "WinRestoreBits",                        // 0x208
    "WinCopyRectangle",                      // 0x209
    "WinScrollRectangle",                    // 0x20a
    "WinGetDisplayExtent",                   // 0x20b
    "WinGetWindowExtent",                    // 0x20c
    "WinDisplayToWindowPt",                  // 0x20d
    "WinWindowToDisplayPt",                  // 0x20e
    "WinGetClip",                            // 0x20f
    "WinSetClip",                            // 0x210
    "WinResetClip",                          // 0x211
    "WinClipRectangle",                      // 0x212
    "WinDrawLine",                           // 0x213
    "WinDrawGrayLine",                       // 0x214
    "WinEraseLine",                          // 0x215
    "WinInvertLine",                         // 0x216
    "WinFillLine",                           // 0x217
    "WinDrawRectangle",                      // 0x218
    "WinEraseRectangle",                     // 0x219
    "WinInvertRectangle",                    // 0x21a
    "WinDrawRectangleFrame",                 // 0x21b
    "WinDrawGrayRectangleFrame",             // 0x21c
    "WinEraseRectangleFrame",                // 0x21d
    "WinInvertRectangleFrame",               // 0x21e
    "WinGetFramesRectangle",                 // 0x21f
    "WinDrawChars",                          // 0x220
    "WinEraseChars",                         // 0x221
    "WinInvertChars",                        // 0x222
    "WinGetPattern",                         // 0x223
    "WinSetPattern",                         // 0x224
    "WinSetUnderlineMode",                   // 0x225
    "WinDrawBitmap",                         // 0x226
    "WinModal",                              // 0x227
    "WinGetWindowBounds",                    // 0x228
    "WinFillRectangle",                      // 0x229
    "WinDrawInvertedChars",                  // 0x22a
    "PrefOpenPreferenceDBV10",               // 0x22b
    "PrefGetPreferences",                    // 0x22c
    "PrefSetPreferences",                    // 0x22d
    "PrefGetAppPreferencesV10",              // 0x22e
    "PrefSetAppPreferencesV10",              // 0x22f
    "SndInit",                               // 0x230
    "SndSetDefaultVolume",                   // 0x231
    "SndGetDefaultVolume",                   // 0x232
    "SndDoCmd",                              // 0x233
    "SndPlaySystemSound",                    // 0x234
    "AlmInit",                               // 0x235
    "AlmCancelAll",                          // 0x236
    "AlmAlarmCallback",                      // 0x237
    "AlmSetAlarm",                           // 0x238
    "AlmGetAlarm",                           // 0x239
    "AlmDisplayAlarm",                       // 0x23a
    "AlmEnableNotification",                 // 0x23b
    "HwrGetRAMMapping",                      // 0x23c
    "HwrMemWritable",                        // 0x23d
    "HwrMemReadable",                        // 0x23e
    "HwrDoze",                               // 0x23f
    "HwrSleep",                              // 0x240
    "HwrWake",                               // 0x241
    "HwrSetSystemClock",                     // 0x242
    "HwrSetCPUDutyCycle",                    // 0x243
    "HwrLCDInit",                            // 0x244
    "HwrLCDSleep",                           // 0x245
    "HwrTimerInit",                          // 0x246
    "HwrCursor",                             // 0x247
    "HwrBatteryLevel",                       // 0x248
    "HwrDelay",                              // 0x249
    "HwrEnableDataWrites",                   // 0x24a
    "HwrDisableDataWrites",                  // 0x24b
    "HwrLCDBaseAddr",                        // 0x24c
    "HwrLCDDrawBitmap",                      // 0x24d
    "HwrTimerSleep",                         // 0x24e
    "HwrTimerWake",                          // 0x24f
    "HwrLCDWake",                            // 0x250
    "HwrIRQ1Handler",                        // 0x251
    "HwrIRQ2Handler",                        // 0x252
    "HwrIRQ3Handler",                        // 0x253
    "HwrIRQ4Handler",                        // 0x254
    "HwrIRQ5Handler",                        // 0x255
    "HwrIRQ6Handler",                        // 0x256
    "HwrDockSignals",                        // 0x257
    "HwrPluggedIn",                          // 0x258
    "Crc16CalcBlock",                        // 0x259
    "SelectDayV10",                          // 0x25a
    "SelectTime",                            // 0x25b
    "DayDrawDaySelector",                    // 0x25c
    "DayHandleEvent",                        // 0x25d
    "DayDrawDays",                           // 0x25e
    "DayOfWeek",                             // 0x25f
    "DaysInMonth",                           // 0x260
    "DayOfMonth",                            // 0x261
    "DateDaysToDate",                        // 0x262
    "DateToDays",                            // 0x263
    "DateAdjust",                            // 0x264
    "DateSecondsToDate",                     // 0x265
    "DateToAscii",                           // 0x266
    "DateToDOWDMFormat",                     // 0x267
    "TimeToAscii",                           // 0x268
    "Find",                                  // 0x269
    "FindStrInStr",                          // 0x26a
    "FindSaveMatch",                         // 0x26b
    "FindGetLineBounds",                     // 0x26c
    "FindDrawHeader",                        // 0x26d
    "PenOpen",                               // 0x26e
    "PenClose",                              // 0x26f
    "PenGetRawPen",                          // 0x270
    "PenCalibrate",                          // 0x271
    "PenRawToScreen",                        // 0x272
    "PenScreenToRaw",                        // 0x273
    "PenResetCalibration",                   // 0x274
    "PenSleep",                              // 0x275
    "PenWake",                               // 0x276
    "ResLoadForm",                           // 0x277
    "ResLoadMenu",                           // 0x278
    "FtrInit",                               // 0x279
    "FtrUnregister",                         // 0x27a
    "FtrGet",                                // 0x27b
    "FtrSet",                                // 0x27c
    "FtrGetByIndex",                         // 0x27d
    "GrfInit",                               // 0x27e
    "GrfFree",                               // 0x27f
    "GrfGetState",                           // 0x280
    "GrfSetState",                           // 0x281
    "GrfFlushPoints",                        // 0x282
    "GrfAddPoint",                           // 0x283
    "GrfInitState",                          // 0x284
    "GrfCleanState",                         // 0x285
    "GrfMatch",                              // 0x286
    "GrfGetMacro",                           // 0x287
    "GrfFilterPoints",                       // 0x288
    "GrfGetNumPoints",                       // 0x289
    "GrfGetPoint",                           // 0x28a
    "GrfFindBranch",                         // 0x28b
    "GrfMatchGlyph",                         // 0x28c
    "GrfGetGlyphMapping",                    // 0x28d
    "GrfGetMacroName",                       // 0x28e
    "GrfDeleteMacro",                        // 0x28f
    "GrfAddMacro",                           // 0x290
    "GrfGetAndExpandMacro",                  // 0x291
    "GrfProcessStroke",                      // 0x292
    "GrfFieldChange",                        // 0x293
    "GetCharSortValue",                      // 0x294
    "GetCharAttr",                           // 0x295
    "GetCharCaselessValue",                  // 0x296
    "PwdExists",                             // 0x297
    "PwdVerify",                             // 0x298
    "PwdSet",                                // 0x299
    "PwdRemove",                             // 0x29a
    "GsiInitialize",                         // 0x29b
    "GsiSetLocation",                        // 0x29c
    "GsiEnable",                             // 0x29d
    "GsiEnabled",                            // 0x29e
    "GsiSetShiftState",                      // 0x29f
    "KeyInit",                               // 0x2a0
    "KeyHandleInterrupt",                    // 0x2a1
    "KeyCurrentState",                       // 0x2a2
    "KeyResetDoubleTap",                     // 0x2a3
    "KeyRates",                              // 0x2a4
    "KeySleep",                              // 0x2a5
    "KeyWake",                               // 0x2a6
    "DlkControl",                            // 0x2a7
    "DlkStartServer",                        // 0x2a8
    "DlkGetSyncInfo",                        // 0x2a9
    "DlkSetLogEntry",                        // 0x2aa
    null,                                    // 0x2ab
    "SysLibLoad",                            // 0x2ac
    null,                                    // 0x2ad
    null,                                    // 0x2ae
    "AbtShowAbout",                          // 0x2af
    "MdmDial",                               // 0x2b0
    "MdmHangUp",                             // 0x2b1
    "DmSearchRecord",                        // 0x2b2
    "SysInsertionSort",                      // 0x2b3
    "DmInsertionSort",                       // 0x2b4
    "LstSetTopItem",                         // 0x2b5
    //
    // PalmOS 2.0 and higher:
    //
    "SclSetScrollBar",                       // 0x2b6
    "SclDrawScrollBar",                      // 0x2b7
    "SclHandleEvent",                        // 0x2b8
    "SysMailboxCreate",                      // 0x2b9
    "SysMailboxDelete",                      // 0x2ba
    "SysMailboxFlush",                       // 0x2bb
    "SysMailboxSend",                        // 0x2bc
    "SysMailboxWait",                        // 0x2bd
    "SysTaskWait",                           // 0x2be
    "SysTaskWake",                           // 0x2bf
    "SysTaskWaitClr",                        // 0x2c0
    "SysTaskSuspend",                        // 0x2c1
    "SysTaskResume",                         // 0x2c2
    "CategoryCreateList",                    // 0x2c3
    "CategoryFreeList",                      // 0x2c4
    "CategoryEdit",                          // 0x2c5
    "CategorySelect",                        // 0x2c6
    "DmDeleteCategory",                      // 0x2c7
    "SysEvGroupCreate",                      // 0x2c8
    "SysEvGroupSignal",                      // 0x2c9
    "SysEvGroupRead",                        // 0x2ca
    "SysEvGroupWait",                        // 0x2cb
    "EvtEventAvail",                         // 0x2cc
    "EvtSysEventAvail",                      // 0x2cd
    "StrNCopy",                              // 0x2ce
    "KeySetMask",                            // 0x2cf
    "SelectDay",                             // 0x2d0
    "PrefGetPreference",                     // 0x2d1
    "PrefSetPreference",                     // 0x2d2
    "PrefGetAppPreferences",                 // 0x2d3
    "PrefSetAppPreferences",                 // 0x2d4
    "FrmPointInTitle",                       // 0x2d5
    "StrNCat",                               // 0x2d6
    "MemCmp",                                // 0x2d7
    "TblSetColumnEditIndicator",             // 0x2d8
    "FntWordWrap",                           // 0x2d9
    "FldGetScrollValues",                    // 0x2da
    "SysCreateDataBaseList",                 // 0x2db
    "SysCreatePanelList",                    // 0x2dc
    "DlkDispatchRequest",                    // 0x2dd
    "StrPrintF",                             // 0x2de
    "StrVPrintF",                            // 0x2df
    "PrefOpenPreferenceDB",                  // 0x2e0
    "SysGraffitiReferenceDialog",            // 0x2e1
    "SysKeyboardDialog",                     // 0x2e2
    "FntWordWrapReverseNLines",              // 0x2e3
    "FntGetScrollValues",                    // 0x2e4
    "TblSetRowStaticHeight",                 // 0x2e5
    "TblHasScrollBar",                       // 0x2e6
    "SclGetScrollBar",                       // 0x2e7
    "FldGetNumberOfBlankLines",              // 0x2e8
    "SysTicksPerSecond",                     // 0x2e9
    "HwrBacklight",                          // 0x2ea
    "DmDatabaseProtect",                     // 0x2eb
    "TblSetBounds",                          // 0x2ec
    "StrNCompare",                           // 0x2ed
    "StrNCaselessCompare",                   // 0x2ee
    "PhoneNumberLookup",                     // 0x2ef
    "FrmSetMenu",                            // 0x2f0
    "EncDigestMD5",                          // 0x2f1
    "DmFindSortPosition",                    // 0x2f2
    "SysBinarySearch",                       // 0x2f3
    "SysErrString",                          // 0x2f4
    "SysStringByIndex",                      // 0x2f5
    "EvtAddUniqueEventToQueue",              // 0x2f6
    "StrLocalizeNumber",                     // 0x2f7
    "StrDelocalizeNumber",                   // 0x2f8
    "LocGetNumberSeparators",                // 0x2f9
    "MenuSetActiveMenuRscID",                // 0x2fa
    "LstScrollList",                         // 0x2fb
    "CategoryInitialize",                    // 0x2fc
    "EncDigestMD4",                          // 0x2fd
    "EncDES",                                // 0x2fe
    "LstGetVisibleItems",                    // 0x2ff
    "WinSetWindowBounds",                    // 0x300
    "CategorySetName",                       // 0x301
    "FldSetInsertionPoint",                  // 0x302
    "FrmSetObjectBounds",                    // 0x303
    "WinSetColors",                          // 0x304
    "FlpDispatch",                           // 0x305
    "FlpEmDispatch",                         // 0x306
    //
    // PalmOS 3.0 and higher:
    //
    "ExgInit",                               // 0x307
    "ExgConnect",                            // 0x308
    "ExgPut",                                // 0x309
    "ExgGet",                                // 0x30a
    "ExgAccept",                             // 0x30b
    "ExgDisconnect",                         // 0x30c
    "ExgSend",                               // 0x30d
    "ExgReceive",                            // 0x30e
    "ExgRegisterData",                       // 0x30f
    "ExgNotifyReceive",                      // 0x310
    "ExgControl",                            // 0x311
    "PrgStartDialogV31",                     // 0x312  /* Updated in v3.2 */
    "PrgStopDialog",                         // 0x313
    "PrgUpdateDialog",                       // 0x314
    "PrgHandleEvent",                        // 0x315
    "ImcReadFieldNoSemicolon",               // 0x316
    "ImcReadFieldQuotablePrintable",         // 0x317
    "ImcReadPropertyParameter",              // 0x318
    "ImcSkipAllPropertyParameters",          // 0x319
    "ImcReadWhiteSpace",                     // 0x31a
    "ImcWriteQuotedPrintable",               // 0x31b
    "ImcWriteNoSemicolon",                   // 0x31c
    "ImcStringIsAscii",                      // 0x31d
    "TblGetItemFont",                        // 0x31e
    "TblSetItemFont",                        // 0x31f
    "FontSelect",                            // 0x320
    "FntDefineFont",                         // 0x321
    "CategoryEdit",                          // 0x322
    "SysGetOSVersionString",                 // 0x323
    "SysBatteryInfo",                        // 0x324
    "SysUIBusy",                             // 0x325
    "WinValidateHandle",                     // 0x326
    "FrmValidatePtr",                        // 0x327
    "CtlValidatePointer",                    // 0x328
    "WinMoveWindowAddr",                     // 0x329
    "FrmAddSpaceForObject",                  // 0x32a
    "FrmNewForm",                            // 0x32b
    "CtlNewControl",                         // 0x32c
    "FldNewField",                           // 0x32d
    "LstNewList",                            // 0x32e
    "FrmNewLabel",                           // 0x32f
    "FrmNewBitmap",                          // 0x330
    "FrmNewGadget",                          // 0x331
    "FileOpen",                              // 0x332
    "FileClose",                             // 0x333
    "FileDelete",                            // 0x334
    "FileReadLow",                           // 0x335
    "FileWrite",                             // 0x336
    "FileSeek",                              // 0x337
    "FileTell",                              // 0x338
    "FileTruncate",                          // 0x339
    "FileControl",                           // 0x33a
    "FrmActiveState",                        // 0x33b
    "SysGetAppInfo",                         // 0x33c
    "SysGetStackInfo",                       // 0x33d
    "WinScreenMode",                         // 0x33e  /* was sysTrapScrDisplayMode */
    "HwrLCDGetDepthV33",                     // 0x33f  /* This trap obsoleted for OS 3.5 and later */
    "HwrGetROMToken",                        // 0x340
    "DbgControl",                            // 0x341
    "ExgDBRead",                             // 0x342
    "ExgDBWrite",                            // 0x343
    "HostControl",                           // 0x344  /* Renamed from sysTrapSysGremlins, functionality generalized */
    "FrmRemoveObject",                       // 0x345
    "SysReserved1",                          // 0x346  /* "Reserved" trap in Palm OS 3.0 and later trap table */
    "SysReserved2",                          // 0x347  /* "Reserved" trap in Palm OS 3.0 and later trap table */
    "SysReserved3",                          // 0x348  /* "Reserved" trap in Palm OS 3.0 and later trap table */
    "OEMDispatch",                           // 0x349  /* OEM trap in Palm OS 3.0 and later trap table (formerly sysTrapSysReserved4) */
    //
    // PalmOS 3.1 and higher:
    //
    "HwrLCDContrastV33",                     // 0x34a  /* This trap obsoleted for OS 3.5 and later */
    "SysLCDContrast",                        // 0x34b
    "UIContrastAdjust",                      // 0x34c  /* Renamed from sysTrapContrastAdjust */
    "HwrDockStatus",                         // 0x34d
    "FntWidthToOffset",                      // 0x34e
    "SelectOneTime",                         // 0x34f
    "WinDrawChar",                           // 0x350
    "WinDrawTruncChars",                     // 0x351
    "SysNotifyInit",                         // 0x352  /* Notification Manager traps */
    "SysNotifyRegister",                     // 0x353
    "SysNotifyUnregister",                   // 0x354
    "SysNotifyBroadcast",                    // 0x355
    "SysNotifyBroadcastDeferred",            // 0x356
    "SysNotifyDatabaseAdded",                // 0x357
    "SysNotifyDatabaseRemoved",              // 0x358
    "SysWantEvent",                          // 0x359
    "FtrPtrNew",                             // 0x35a
    "FtrPtrFree",                            // 0x35b
    "FtrPtrResize",                          // 0x35c
    "SysReserved5",                          // 0x35d  /* "Reserved" trap in Palm OS 3.1 and later trap table */
    //
    // PalmOS 3.2 and 3.3 and higher:
    //
    "HwrNVPrefSet",                          // 0x35e  /* mapped to FlashParmsWrite */
    "HwrNVPrefGet",                          // 0x35f  /* mapped to FlashParmsRead */
    "FlashInit",                             // 0x360
    "FlashCompress",                         // 0x361
    "FlashErase",                            // 0x362
    "FlashProgram",                          // 0x363
    "AlmTimeChange",                         // 0x364
    "ErrAlertCustom",                        // 0x365
    "PrgStartDialog",                        // 0x366  /* New version of sysTrapPrgStartDialogV31 */
    "SerialDispatch",                        // 0x367
    "HwrBattery",                            // 0x368
    "DmGetDatabaseLockState",                // 0x369
    "CncGetProfileList",                     // 0x36a
    "CncGetProfileInfo",                     // 0x36b
    "CncAddProfile",                         // 0x36c
    "CncDeleteProfile",                      // 0x36d
    "SndPlaySmfResource",                    // 0x36e
    "MemPtrDataStorage",                     // 0x36f  /* Never actually installed until now. */
    "ClipboardAppendItem",                   // 0x370
    "WiCmdV32",                              // 0x371  /* Code moved to INetLib; trap obsolete */
    //
    // PalmOS 3.5 and higher:
    //
    "HwrDisplayAttributes",                  // 0x372
    "HwrDisplayDoze",                        // 0x373
    "HwrDisplayPalette",                     // 0x374
    "BltFindIndexes",                        // 0x375
    "BmpGetBits",                            // 0x376  /* was BltGetBitsAddr */
    "BltCopyRectangle",                      // 0x377
    "BltDrawChars",                          // 0x378
    "BltLineRoutine",                        // 0x379
    "BltRectangleRoutine",                   // 0x37a
    "ScrCompress",                           // 0x37b
    "ScrDecompress",                         // 0x37c
    "SysLCDBrightness",                      // 0x37d
    "WinPaintChar",                          // 0x37e
    "WinPaintChars",                         // 0x37f
    "WinPaintBitmap",                        // 0x380
    "WinGetPixel",                           // 0x381
    "WinPaintPixel",                         // 0x382
    "WinDrawPixel",                          // 0x383
    "WinErasePixel",                         // 0x384
    "WinInvertPixel",                        // 0x385
    "WinPaintPixels",                        // 0x386
    "WinPaintLines",                         // 0x387
    "WinPaintLine",                          // 0x388
    "WinPaintRectangle",                     // 0x389
    "WinPaintRectangleFrame",                // 0x38a
    "WinPaintPolygon",                       // 0x38b
    "WinDrawPolygon",                        // 0x38c
    "WinErasePolygon",                       // 0x38d
    "WinInvertPolygon",                      // 0x38e
    "WinFillPolygon",                        // 0x38f
    "WinPaintArc",                           // 0x390
    "WinDrawArc",                            // 0x391
    "WinEraseArc",                           // 0x392
    "WinInvertArc",                          // 0x393
    "WinFillArc",                            // 0x394
    "WinPushDrawState",                      // 0x395
    "WinPopDrawState",                       // 0x396
    "WinSetDrawMode",                        // 0x397
    "WinSetForeColor",                       // 0x398
    "WinSetBackColor",                       // 0x399
    "WinSetTextColor",                       // 0x39a
    "WinGetPatternType",                     // 0x39b
    "WinSetPatternType",                     // 0x39c
    "WinPalette",                            // 0x39d
    "WinRGBToIndex",                         // 0x39e
    "WinIndexToRGB",                         // 0x39f
    "WinScreenLock",                         // 0x3a0
    "WinScreenUnlock",                       // 0x3a1
    "WinGetBitmap",                          // 0x3a2
    "UIColorInit",                           // 0x3a3
    "UIColorGetTableEntryIndex",             // 0x3a4
    "UIColorGetTableEntryRGB",               // 0x3a5
    "UIColorSetTableEntry",                  // 0x3a6
    "UIColorPushTable",                      // 0x3a7
    "UIColorPopTable",                       // 0x3a8
    "CtlNewGraphicControl",                  // 0x3a9
    "TblGetItemPtr",                         // 0x3aa
    "UIBrightnessAdjust",                    // 0x3ab
    "UIPickColor",                           // 0x3ac
    "EvtSetAutoOffTimer",                    // 0x3ad
    "TsmDispatch",                           // 0x3ae
    "OmDispatch",                            // 0x3af
    "DmOpenDBNoOverlay",                     // 0x3b0
    "DmOpenDBWithLocale",                    // 0x3b1
    "ResLoadConstant",                       // 0x3b2
    "HwrPreDebugInit",                       // 0x3b3
    "HwrResetNMI",                           // 0x3b4
    "HwrResetPWM",                           // 0x3b5
    "KeyBootKeys",                           // 0x3b6
    "DbgSerDrvOpen",                         // 0x3b7
    "DbgSerDrvClose",                        // 0x3b8
    "DbgSerDrvControl",                      // 0x3b9
    "DbgSerDrvStatus",                       // 0x3ba
    "DbgSerDrvWriteChar",                    // 0x3bb
    "DbgSerDrvReadChar",                     // 0x3bc
    "HwrPostDebugInit",                      // 0x3bd
    "HwrIdentifyFeatures",                   // 0x3be
    "HwrModelSpecificInit",                  // 0x3bf
    "HwrModelInitStage2",                    // 0x3c0
    "HwrInterruptsInit",                     // 0x3c1
    "HwrSoundOn",                            // 0x3c2
    "HwrSoundOff",                           // 0x3c3
    "SysKernelClockTick",                    // 0x3c4
    "MenuEraseMenu",                         // 0x3c5
    "SelectTime",                            // 0x3c6
    "MenuCmdBarAddButton",                   // 0x3c7
    "MenuCmdBarGetButtonData",               // 0x3c8
    "MenuCmdBarDisplay",                     // 0x3c9
    "HwrGetSilkscreenID",                    // 0x3ca
    "EvtGetSilkscreenAreaList",              // 0x3cb
    "SysFatalAlertInit",                     // 0x3cc
    "DateTemplateToAscii",                   // 0x3cd
    "SecVerifyPW",                           // 0x3ce
    "SecSelectViewStatus",                   // 0x3cf
    "TblSetColumnMasked",                    // 0x3d0
    "TblSetRowMasked",                       // 0x3d1
    "TblRowMasked",                          // 0x3d2
    "FrmCustomResponseAlert",                // 0x3d3
    "FrmNewGsi",                             // 0x3d4
    "MenuShowItem",                          // 0x3d5
    "MenuHideItem",                          // 0x3d6
    "MenuAddItem",                           // 0x3d7
    "FrmSetGadgetHandler",                   // 0x3d8
    "CtlSetGraphics",                        // 0x3d9
    "CtlGetSliderValues",                    // 0x3da
    "CtlSetSliderValues",                    // 0x3db
    "CtlNewSliderControl",                   // 0x3dc
    "BmpCreate",                             // 0x3dd
    "BmpDelete",                             // 0x3de
    "BmpCompress",                           // 0x3df
    "BmpGetColortable",                      // 0x3e0
    "BmpSize",                               // 0x3e1
    "BmpBitsSize",                           // 0x3e2
    "BmpColortableSize",                     // 0x3e3
    "WinCreateBitmapWindow",                 // 0x3e4
    "EvtSetNullEventTick",                   // 0x3e5
    "ExgDoDialog",                           // 0x3e6
    "SysUICleanup",                          // 0x3e7
];

/**
 * @copyright https://www.pcjs.org/machines/palm/pilot/modules/v3/ioregs.js (C) 2012-2026 Jeff Parsons
 */

/** @typedef {{ addr: (number|undefined), size: number, type: (number|undefined), penRegion: Array.<number>, penHeight: number, buttonRegions: Object }} */
let PilotIOConfig;

/**
 * @class PilotIO
 * @unrestricted
 * @property {PilotIOConfig} config
 *
 * This is a port of HWDragonBall.java and HWLCDDragonBall.java, which emulate the MC68328 ("DragonBall")
 * hardware registers, including the interrupt controller, timers, I/O ports, SPI master (which the Pilot
 * uses to read the digitizer), RTC, and the LCD controller.
 *
 * In the original Java implementation, all hardware register values were maintained in a bank of memory
 * allocated along with the hardware address range, with special handling for frequently accessed registers
 * (eg, the timers).  We do the same thing here, using our own big-endian shadow of the register space
 * (see getByteEx() and friends, which correspond to the CPUMem GetByteEx() family of functions).
 */
class PilotIO extends Memory {
    /**
     * PilotIO(idMachine, idDevice, config)
     *
     * @this {PilotIO}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {PilotIOConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        config['type'] = Memory.TYPE.READWRITE;
        config['addr'] = PilotIO.DBREGS_BASE & CPU68K.ADDR_MASK;
        config['size'] = PilotIO.DBREGS_SIZE;
        super(idMachine, idDevice, config);

        this.cpu = /** @type {CPU68K} */ (this.findDeviceByClass("CPU"));
        this.time = /** @type {Time} */ (this.findDeviceByClass("Time"));
        this.input = /** @type {Input} */ (this.findDeviceByClass("Input", false));
        this.video = null;          // the PilotVideo device will connect itself via setVideo()

        /**
         * Allocate our own big-endian register shadow, and then replace the default Memory interfaces with
         * our own, so that all byte, word, and long accesses are routed to the appropriate register handlers.
         */
        this.abRegs = new Uint8Array(PilotIO.DBREGS_SIZE);
        this.dvRegs = new DataView(this.abRegs.buffer);
        this.readData = this.getByte;
        this.readPair = this.getWord;
        this.readQuad = this.getLong;
        this.writeData = this.setByte;
        this.writePair = this.setWord;
        this.writeQuad = this.setLong;
        this.bus.addBlocks(this.config['addr'], this.size, Memory.TYPE.READWRITE, this);

        /**
         * Create "guard blocks" (dummy blocks that read as zero and ignore writes) immediately after RAM,
         * and at the ROM's address + 2Mb (if the ROM is smaller than that), just like CPUMem.InitMem() did, as a
         * simple way of making code that scans for memory (or for additional ROMs) see the "right" thing.
         */
        let ram = /** @type {Memory} */ (this.findDeviceByClass("RAM", false));
        if (ram) this.addGuardBlock(ram.config['addr'] + ram.config['size']);
        let rom = /** @type {Memory} */ (this.findDeviceByClass("ROM", false));
        if (rom && rom.config['addr'] == (0x10c00000 & CPU68K.ADDR_MASK) && rom.config['size'] <= 0x00200000) {
            this.addGuardBlock(rom.config['addr'] + 0x00200000);
        }

        /**
         * These are the hardware registers that we maintain internally, for the sake of performance and
         * convenience, as well as other hardware state that has no corresponding register.
         */
        this.awTMR1 = new Array(PilotIO.TMR_REGS);
        this.awTMR2 = new Array(PilotIO.TMR_REGS);
        this.xPenCurrent = this.yPenCurrent = 0;    // current pen position
        this.fPenDown = this.fPenUpPending = false; // keeps track of whether the pen is currently down
        this.fPenRead = false;                      // keeps track of whether the last pen position change has been read yet
        this.bPDDataEdge = 0;                       // keeps track of button interrupt transitions
        this.msRTCDelta = 0;                        // the delta between the device's time and the "real world" time
        this.nCyclesTimers = 0;                     // CPU cycle count when the timers were last updated
        this.nCyclesTMR1 = this.nCyclesTMR2 = 0;    // cycles not yet converted into timer ticks

        /**
         * The original Pilot uses the MC68328 ("DragonBall"), whereas later devices (eg, the Palm IIIc) use the
         * MC68EZ328 ("DragonBall EZ"), which has a mostly compatible (but simplified) set of registers; the most
         * important differences are a single timer (at the same address as TMR1, but using the TMR2 interrupt bit),
         * different interrupt levels, and different chip select registers.
         */
        this.fEZ = (this.config['chip'] == PilotIO.CHIP.EZ);
        this.abIMRLvl = this.fEZ? PilotIO.abIMRLvlEZ : PilotIO.abIMRLvl;
        this.lTMR1Bit = this.fEZ? PilotIO.IMR_TMR : PilotIO.IMR_TMR1;

        this.cpu.setHWRegs(this);
        this.timerTMR = this.time.addTimer(this.idDevice + ".timer", this.onTimer.bind(this));

        /**
         * Hook up the pen and the buttons.  The input surface (eg, an image of the Pilot) reports positions
         * via our onPen() handler, and keyboard/surface button events arrive via onButton().
         */
        let region = this.config['penRegion'] || [0, 0, PilotIO.DEF_SCREEN_WIDTH, PilotIO.DEF_SCREEN_HEIGHT];
        this.xPenRegion = region[0];
        this.yPenRegion = region[1];
        this.cxPenRegion = region[2];
        this.cyPenRegion = region[3];
        this.cyDigitizer = this.config['penHeight'] || PilotIO.DEF_SCREEN_HEIGHT;
        this.buttonRegions = this.config['buttonRegions'] || {};
        this.idButtonActive = null;
        if (this.input) {
            this.input.addInput(this.onPen.bind(this));
            for (let id in PilotIO.BUTTONS) {
                this.input.addListener(Input.TYPE.IDMAP, id, this.onButton.bind(this));
            }
        }

        /**
         * Support for loading PalmOS applications (see loadApp()), which needs a range of otherwise unused
         * addresses for temporary memory blocks; like CPUMem.InitTempBanks(), we use the range starting one block
         * past the end of RAM (since a guard block occupies the block immediately after RAM).
         */
        this.addrTemp = (ram? ram.config['addr'] + ram.config['size'] : 0) + this.bus.blockSize;
        this.addrTempLimit = rom? rom.config['addr'] : PilotIO.TEMP_LIMIT;
        this.aTempBlocks = [];
        this.aTempBlocksPrev = [];
        this.sAppLoading = null;
        this.addHandler(PilotIO.HANDLER.COMMAND, this.onCommand.bind(this));

        /**
         * On EZ-based devices, the digitizer is read using an A/D converter (see exchangeADC()), and these ranges
         * determine which A/D values correspond to the left/right and top/bottom edges of the digitizer.
         */
        this.aADCRangeX = this.config['adcRangeX'] || PilotIO.ADC_RANGE_X;

        /**
         * On EZ-based devices, the buttons are arranged in a matrix (see getKeyColumns()), so the 'keyMatrix' config
         * property maps each button ID to its matrix bit number (eg, row 2, column 0 is bit 8).
         */
        this.aKeyMatrix = [];
        let keyMatrix = this.config['keyMatrix'] || {};
        for (let id in PilotIO.BUTTONS) {
            this.aKeyMatrix[PilotIO.BUTTONS[id]] = keyMatrix[id] != undefined? keyMatrix[id] : PilotIO.BUTTONS[id];
        }
        this.aADCRangeY = this.config['adcRangeY'] || PilotIO.ADC_RANGE_Y;

        this.onReset();
    }

    /**
     * onCommand(aTokens)
     *
     * Processes commands that we support (eg, "load [url]"), returning undefined for all other commands, so that
     * other command handlers (eg, the Debugger's) have a chance to process them.
     *
     * @this {PilotIO}
     * @param {Array.<string>} aTokens ([0] contains the entire command, [1] the first token, and so on)
     * @returns {string|undefined}
     */
    onCommand(aTokens)
    {
        let result;
        if (aTokens[1] == "load") {
            result = this.loadApp(aTokens[2]);
        }
        return result;
    }

    /**
     * loadApp(url)
     *
     * Loads a PalmOS database (eg, a PRC file) and installs it, and if it's an application, launches it, using the
     * same sequence of API calls that the original Java implementation's web pages used (see LoadDB() in apps.htm):
     *
     *      LocalID=DmFindDatabase(0, p)
     *      if (LocalID) DmDeleteDatabase(0, LocalID)
     *      DmCreateDatabaseFromImage(p)
     *      LocalID=DmFindDatabase(0, p)
     *      if (LocalID) SysUIAppSwitch(0, LocalID, 0, 0)
     *
     * where p is the address of the database image, which conveniently begins with the database name.
     *
     * A relative URL (eg, "demos/Daleks.prc") is resolved relative to the machine's page, whether or not the page's
     * URL ends with a slash (eg, "/machines/palm/pilot" is treated the same as "/machines/palm/pilot/").
     *
     * @this {PilotIO}
     * @param {string} [url]
     * @returns {string}
     */
    loadApp(url)
    {
        if (!url) return "usage: load [url]\n";
        if (this.sAppLoading) return this.sprintf("still loading %s\n", this.sAppLoading);
        let base = window.location.origin + window.location.pathname;
        if (!base.endsWith('/') && base.lastIndexOf('.') < base.lastIndexOf('/')) base += '/';
        let sURL = new URL(url, base).href;
        this.sAppLoading = sURL;
        fetch(sURL).then((response) => {
            if (!response.ok) throw new Error(this.sprintf("%d %s", response.status, response.statusText));
            return response.arrayBuffer();
        }).then((buffer) => {
            this.installApp(sURL, new Uint8Array(buffer));
        }).catch((err) => {
            this.printf("unable to load %s: %s\n", sURL, err.message);
            this.sAppLoading = null;
        });
        return this.sprintf("loading %s\n", sURL);
    }

    /**
     * installApp(url, ab)
     *
     * @this {PilotIO}
     * @param {string} url
     * @param {Uint8Array} ab (contents of a PalmOS database image)
     */
    installApp(url, ab)
    {
        let sName = "", sType = "";
        if (ab.length >= PilotIO.DBHDR_SIZE) {
            for (let i = 0; i < PilotIO.DBHDR_NAME_LEN && ab[i]; i++) sName += String.fromCharCode(ab[i]);
            for (let i = 0; i < 4; i++) sType += String.fromCharCode(ab[PilotIO.DBHDR_TYPE + i]);
        }
        if (!sName) {
            this.printf("%s is not a PalmOS database\n", url);
            this.sAppLoading = null;
            return;
        }
        let addr = this.allocTempBlocks(ab);
        if (!addr) {
            this.printf("not enough memory for %s\n", url);
            this.sAppLoading = null;
            return;
        }
        let cpu = this.cpu;
        let trap = (sName) => PalmOS.getAPITrap(sName);
        let done = (sError) => {
            this.freeTempBlocks();
            this.sAppLoading = null;
            if (sError) {
                this.printf("unable to install %s: %s\n", sName, sError);
                return;
            }
            this.printf("installed %s\n", sName);
            if (this.input) this.input.setFocus();
        };
        let findDatabase = (next) => {
            cpu.injectTrap(trap("DmFindDatabase"), [[0, 2], [addr, 4]], (result) => {
                if (!result) done("call aborted"); else next(result.d0);
            });
        };
        this.printf("installing %s (%d bytes)\n", sName, ab.length);
        findDatabase((dbID) => {
            if (dbID) cpu.injectTrap(trap("DmDeleteDatabase"), [[0, 2], [dbID, 4]], (result) => {
                if (!result) done("call aborted");
            });
            cpu.injectTrap(trap("DmCreateDatabaseFromImage"), [[addr, 4]], (result) => {
                if (!result) {
                    done("call aborted");
                    return;
                }
                let err = result.d0 & 0xffff;
                findDatabase((dbID) => {
                    if (!dbID) {
                        done(this.sprintf("error %#06x", err));
                        return;
                    }
                    if (sType != "appl") {
                        done("");
                        return;
                    }
                    cpu.injectTrap(trap("SysUIAppSwitch"), [[0, 2], [dbID, 4], [0, 2], [0, 4]], (result) => {
                        done(result? "" : "call aborted");
                    });
                });
            });
        });
    }

    /**
     * allocTempBlocks(ab)
     *
     * Maps enough temporary memory blocks at addrTemp to hold the given data, preceded by a fake PalmOS chunk header
     * (like CPUMem.InitTempBanks()), since the data is passed to PalmOS APIs as if it were allocated from a heap.
     *
     * Temporary blocks have no saveState() or loadState() handlers, so they are never saved as part of the Bus state.
     *
     * @this {PilotIO}
     * @param {Uint8Array} ab
     * @returns {number} (address of data, or 0 if error)
     */
    allocTempBlocks(ab)
    {
        let cpu = this.cpu, bus = this.bus;
        let cbHeader = (cpu.getWord(PilotIO.ROM_BASE + PilotIO.ROMHDR_HDRVER) == 1? 6 : 8);
        let cbActual = (cbHeader + ab.length + 1) & ~0x1;
        let nBlocks = Math.ceil(cbActual / bus.blockSize);
        if (this.aTempBlocksPrev.length || this.addrTemp + nBlocks * bus.blockSize > this.addrTempLimit) {
            return 0;
        }
        for (let i = 0; i < nBlocks; i++) {
            let block = this.aTempBlocks[i];
            if (!block) {
                block = new Memory(this.idMachine, this.idDevice + "[TEMP:" + i + "]", {"type": Memory.TYPE.READWRITE, "size": bus.blockSize, "bus": bus.idDevice});
                block.saveState = block.loadState = /** @type {?} */ (null);
                this.aTempBlocks[i] = block;
            }
            this.aTempBlocksPrev.push(bus.setBlock(this.addrTemp + i * bus.blockSize, block));
        }
        let addr = this.addrTemp;
        if (cbHeader == 6) {
            cpu.setWord(addr, cbActual);
            cpu.setByte(addr + 2, 0xf2);
            cpu.setByte(addr + 3, cbActual - cbHeader - ab.length);
        } else {
            cpu.setByte(addr, cbActual - cbHeader - ab.length);
            cpu.setByte(addr + 1, cbActual >> 16);
            cpu.setWord(addr + 2, cbActual);
            cpu.setByte(addr + 4, 0xf2);
        }
        addr += cbHeader;
        bus.initBlocks(addr, ab.length, ab);
        return addr;
    }

    /**
     * freeTempBlocks()
     *
     * @this {PilotIO}
     */
    freeTempBlocks()
    {
        for (let i = 0; i < this.aTempBlocksPrev.length; i++) {
            this.bus.setBlock(this.addrTemp + i * this.bus.blockSize, this.aTempBlocksPrev[i]);
        }
        this.aTempBlocksPrev = [];
    }

    /**
     * addGuardBlock(addr)
     *
     * @this {PilotIO}
     * @param {number} addr
     */
    addGuardBlock(addr)
    {
        let guard = new Memory(this.idMachine, this.idDevice + "[GUARD:" + this.toBase(addr, 16, 32, "") + "]", {"type": Memory.TYPE.NONE, "size": this.bus.blockSize, "bus": this.bus.idDevice});
        guard.readData = guard.readPair = guard.readQuad = function readGuard() { return 0; };
        this.bus.addBlocks(addr & CPU68K.ADDR_MASK, this.bus.blockSize, Memory.TYPE.NONE, guard);
    }

    /**
     * setVideo(video)
     *
     * Called by the PilotVideo device, so that we can notify it of LCD state changes (see resetScreen()).
     *
     * @this {PilotIO}
     * @param {Object} video
     */
    setVideo(video)
    {
        this.video = video;
    }

    /**
     * loadState(state)
     *
     * Memory and I/O register states are managed by the Bus onLoad() handler, which calls our loadState() handler.
     *
     * @this {PilotIO}
     * @param {Array|undefined} state
     * @returns {boolean}
     */
    loadState(state)
    {
        if (state) {
            let idDevice = state.shift();
            if (this.idDevice == idDevice) {
                try {
                    let abRegs = this.decompress(state.shift(), this.abRegs.length);
                    for (let i = 0; i < abRegs.length; i++) this.abRegs[i] = abRegs[i];
                    this.awTMR1 = state.shift();
                    this.awTMR2 = state.shift();
                    this.bPDDataEdge = state.shift();
                    this.msRTCDelta = state.shift();
                    this.nCyclesTimers = this.time.getCycles();
                    this.nCyclesTMR1 = this.nCyclesTMR2 = 0;
                    this.scheduleTimers();
                    this.resetScreen();
                    return true;
                } catch(err) {
                    this.printf("PilotIO state error: %s\n", err.message);
                }
            }
        }
        return false;
    }

    /**
     * saveState(state)
     *
     * Memory and I/O register states are managed by the Bus onSave() handler, which calls our saveState() handler.
     *
     * @this {PilotIO}
     * @param {Array} state
     */
    saveState(state)
    {
        this.updateTimers();
        state.push(this.idDevice);
        state.push(this.compress(this.abRegs));
        state.push(this.awTMR1);
        state.push(this.awTMR2);
        state.push(this.bPDDataEdge);
        state.push(this.msRTCDelta);
    }

    /**
     * onPower(on)
     *
     * Called by the Machine device to provide notification of a power event.  This is also a good time to get
     * access to the Debugger, if any, and give it the ability to display PalmOS API names.
     *
     * @this {PilotIO}
     * @param {boolean} on (true to power on, false to power off)
     */
    onPower(on)
    {
        if (this.dbg === undefined) {
            this.dbg = /** @type {Dbg68K} */ (this.findDeviceByClass("Debugger", false));
            if (this.dbg && this.dbg.setTrapHandler) this.dbg.setTrapHandler(PalmOS.getAPIName);
        }
    }

    /**
     * onReset()
     *
     * Called by the Machine device to provide notification of a reset event.  This is the equivalent of
     * HWDragonBall.Init() and HWLCDDragonBall.Init(), which initialize all the registers that are defined to
     * have non-zero starting values.
     *
     * @this {PilotIO}
     */
    onReset()
    {
        this.abRegs.fill(0);
        let regsInit = this.fEZ? PilotIO.regsInitEZ : PilotIO.regsInit;
        for (let offset in regsInit.ab) {
            this.setByteEx(+offset, regsInit.ab[offset]);
        }
        for (let offset in regsInit.aw) {
            this.setWordEx(+offset, regsInit.aw[offset]);
        }
        for (let offset in regsInit.al) {
            this.setLongEx(+offset, regsInit.al[offset]);
        }
        if (!this.fEZ) {
            for (let offset = PilotIO.DBREG_CSA0; offset <= PilotIO.DBREG_CSD3; offset += 4) {
                this.setLongEx(offset, PilotIO.CHIP_SELECT_DEFAULT);
            }
        }
        this.awTMR1.fill(0);
        this.awTMR2.fill(0);
        this.awTMR1[PilotIO.TCMP] = this.awTMR2[PilotIO.TCMP] = 0xFFFF;
        this.nCyclesTimers = this.time.getCycles();
        this.nCyclesTMR1 = this.nCyclesTMR2 = 0;
        this.fPenDown = this.fPenUpPending = this.fPenRead = false;
        this.bADCShift = this.nADCBits = this.bADCControl = 0;
        this.bPDDataEdge = this.wKeyBits = 0;
        this.msRTCDelta = 0;
        this.resetScreen();
    }

    /**
     * onButton(id, down)
     *
     * Input notifications for the Pilot's hardware buttons (eg, via keyboard).
     *
     * @this {PilotIO}
     * @param {string} id
     * @param {boolean} down
     */
    onButton(id, down)
    {
        let iBit = PilotIO.BUTTONS[id];
        if (iBit != undefined) {
            this.printf(MESSAGE.INPUT, "onButton(%s,%b)\n", id, down);
            this.updateButton(iBit, down);
        }
    }

    /**
     * onPen(col, row)
     *
     * Input notifications from the input surface (we configure the surface so that col and row are simply
     * the surface's own pixel coordinates).  Coordinates within the pen region are converted to digitizer
     * coordinates, which are the same as LCD coordinates, extended below the LCD to cover the silk-screen area;
     * coordinates within a button region are converted to button presses.  A col and row of -1 indicate that
     * the pen (or mouse button) was released.
     *
     * @this {PilotIO}
     * @param {number} col
     * @param {number} row
     */
    onPen(col, row)
    {
        if (col < 0 || row < 0) {
            if (this.idButtonActive) {
                this.onButton(this.idButtonActive, false);
                this.idButtonActive = null;
            }
            if (this.fPenDown) {
                this.updatePen(this.xPenCurrent, this.yPenCurrent, false);
            }
            return;
        }
        let x = Math.floor((col - this.xPenRegion) * PilotIO.DEF_SCREEN_WIDTH / this.cxPenRegion);
        let y = Math.floor((row - this.yPenRegion) * PilotIO.DEF_SCREEN_HEIGHT / this.cyPenRegion);
        if (x >= 0 && x < PilotIO.DEF_SCREEN_WIDTH && y >= 0 && y < this.cyDigitizer) {
            if (!this.idButtonActive) this.updatePen(x, y, true);
            return;
        }
        if (!this.fPenDown && !this.idButtonActive) {
            for (let id in this.buttonRegions) {
                let r = this.buttonRegions[id];
                if (col >= r[0] && col < r[0] + r[2] && row >= r[1] && row < r[1] + r[3]) {
                    this.idButtonActive = id;
                    this.onButton(id, true);
                    break;
                }
            }
        }
    }

    /**
     * onTimer()
     *
     * Called by the Time device whenever our timer fires, which we schedule for the next timer "compare" event.
     *
     * @this {PilotIO}
     */
    onTimer()
    {
        this.updateTimers();
        this.scheduleTimers();
    }

    /**
     * getByteEx(offset)
     *
     * Get one byte from the register shadow (the equivalent of CPUMem.GetByteEx()).
     *
     * @this {PilotIO}
     * @param {number} offset
     * @returns {number}
     */
    getByteEx(offset)
    {
        return this.abRegs[offset];
    }

    /**
     * getWordEx(offset)
     *
     * @this {PilotIO}
     * @param {number} offset
     * @returns {number}
     */
    getWordEx(offset)
    {
        return this.dvRegs.getUint16(offset);
    }

    /**
     * getLongEx(offset)
     *
     * @this {PilotIO}
     * @param {number} offset
     * @returns {number}
     */
    getLongEx(offset)
    {
        return this.dvRegs.getInt32(offset);
    }

    /**
     * setByteEx(offset, data)
     *
     * Set one byte in the register shadow (the equivalent of CPUMem.SetByteEx()).
     *
     * @this {PilotIO}
     * @param {number} offset
     * @param {number} data
     */
    setByteEx(offset, data)
    {
        this.abRegs[offset] = data;
    }

    /**
     * setWordEx(offset, data)
     *
     * @this {PilotIO}
     * @param {number} offset
     * @param {number} data
     */
    setWordEx(offset, data)
    {
        this.dvRegs.setUint16(offset, data & 0xffff);
    }

    /**
     * setLongEx(offset, data)
     *
     * @this {PilotIO}
     * @param {number} offset
     * @param {number} data
     */
    setLongEx(offset, data)
    {
        this.dvRegs.setInt32(offset, data|0);
    }

    /**
     * readDirect(offset)
     *
     * Overrides the Memory interface used by the Debugger, so that it can examine registers without side-effects.
     *
     * @this {PilotIO}
     * @param {number} offset
     * @returns {number}
     */
    readDirect(offset)
    {
        return this.getByteEx(offset);
    }

    /**
     * writeDirect(offset, data)
     *
     * Overrides the Memory interface used by the Debugger, so that it can modify registers without side-effects.
     *
     * @this {PilotIO}
     * @param {number} offset
     * @param {number} data
     */
    writeDirect(offset, data)
    {
        this.setByteEx(offset, data);
    }

    /**
     * isLCDReg(offset)
     *
     * @this {PilotIO}
     * @param {number} offset
     * @returns {boolean} (true if the offset is within the LCD controller register set)
     */
    isLCDReg(offset)
    {
        return offset >= PilotIO.LCDREGS_OFFSET && offset < PilotIO.LCDREGS_OFFSET + PilotIO.LCDREGS_SIZE;
    }

    /**
     * getByte(offset)
     *
     * Get one byte from the register set.
     *
     * @this {PilotIO}
     * @param {number} offset
     * @returns {number}
     */
    getByte(offset)
    {
        let data = this.getByteEx(offset);
        if (!this.isLCDReg(offset)) {
            switch(offset) {
            case PilotIO.DBREG_PCDATA:
                if (this.fEZ) break;
                //
                // I don't know the details of the Port C Data register (PCDATA), but I do know that in PalmOS 3.3,
                // in a routine called PrvLowBatteryShutdownNow, if it doesn't see bit 4 (value 0x10) set in PCDATA,
                // then it wants to go to sleep (ie, TRAP HwrSleep).  Let's avoid that for now.  ;-) -JP
                //
                data |= 0x10;
                this.setByteEx(offset, data);
                break;
            case PilotIO.DBREG_PFDATA:
                if (!this.fEZ) break;
                //
                // When the Palm IIIc's PalmOS 3.5 ROM wakes the display, it turns on the LCD power (bit 5 of PFDATA)
                // and then waits for bit 0 of PFDATA to go high, so if bit 0 is an input, we make it follow bit 5.
                //
                if (!(this.getByteEx(PilotIO.DBREG_PFDIR) & 0x01)) {
                    data = (data & ~0x01) | ((data >> 5) & 0x01);
                }
                break;
            case PilotIO.DBREG_PDDATA:
                if (!this.fEZ) break;
                //
                // Similarly, in the Palm IIIc's PalmOS 3.5 ROM, PrvLowBatteryShutdownNow puts the device to sleep if
                // it doesn't see bit 7 (value 0x80) set in PDDATA, so we report that the battery is fine.  Bits 0-3
                // report the state of the key matrix columns (see getKeyColumns()).
                //
                data = (data & 0x70) | 0x80 | this.getKeyColumns(this.getByteEx(PilotIO.DBREG_PCDIR) & ~this.getByteEx(PilotIO.DBREG_PCDATA));
                break;
            }
        }
        this.printf(MESSAGE.PORTS, "getByte(%#06x): %#04x\n", offset, data);
        return data;
    }

    /**
     * getWord(offset)
     *
     * Get one word from the register set.
     *
     * @this {PilotIO}
     * @param {number} offset
     * @returns {number}
     */
    getWord(offset)
    {
        let data = this.getWordEx(offset);
        if (!this.isLCDReg(offset)) {
            switch(offset) {
            case PilotIO.DBREG_PLLFSR:
                data ^= PilotIO.PLLFSR_CLK32;
                this.setWordEx(offset, data);
                break;

            case PilotIO.DBREG_TCTL1:
            case PilotIO.DBREG_TPRER1:
            case PilotIO.DBREG_TCMP1:
            case PilotIO.DBREG_TCR1:
            case PilotIO.DBREG_TCN1:
                this.updateTimers();
                data = this.awTMR1[(offset - PilotIO.DBREG_TCTL1) >> 1];
                break;

            case PilotIO.DBREG_TSTAT1:
                this.updateTimers();
                data = this.awTMR1[PilotIO.TSTAT];
                this.awTMR1[PilotIO.TSTAT_LASTREAD] |= data;
                break;

            case PilotIO.DBREG_TCTL2:
            case PilotIO.DBREG_TPRER2:
            case PilotIO.DBREG_TCMP2:
            case PilotIO.DBREG_TCR2:
            case PilotIO.DBREG_TCN2:
                this.updateTimers();
                data = this.awTMR2[(offset - PilotIO.DBREG_TCTL2) >> 1];
                break;

            case PilotIO.DBREG_TSTAT2:
                this.updateTimers();
                data = this.awTMR2[PilotIO.TSTAT];
                this.awTMR2[PilotIO.TSTAT_LASTREAD] |= data;
                break;

            case PilotIO.DBREG_SPIMDATA:
                if (this.fPenUpPending) {
                    this.fPenUpPending = false;
                    this.updateInterrupts(PilotIO.IMR_PEN, 0, false);
                }
                break;

            case PilotIO.DBREG_SPIMCONT:
                if (data & PilotIO.SPIMCONT_XCH) {
                    //
                    // BUGBUG: The 3.5 ROM gets stuck in PrvSetBacklightController if we don't clear this bit;
                    // we really need to understand how this controller works, and only clear SPIMCONT_XCH as appropriate -JP
                    //
                    data &= ~PilotIO.SPIMCONT_XCH;
                    this.setWordEx(offset, data);
                }
                break;
            }
        }
        this.printf(MESSAGE.PORTS, "getWord(%#06x): %#06x\n", offset, data);
        return data;
    }

    /**
     * getLong(offset)
     *
     * Get one long from the register set.
     *
     * @this {PilotIO}
     * @param {number} offset
     * @returns {number}
     */
    getLong(offset)
    {
        let data = this.getLongEx(offset);
        if (!this.isLCDReg(offset)) {
            switch(offset) {
            case PilotIO.DBREG_RHMSR: {
                let date = new Date(Date.now() + this.msRTCDelta);
                data = (date.getHours() << PilotIO.RHMSR_HOURS_SHIFT) | (date.getMinutes() << PilotIO.RHMSR_MINUTES_SHIFT) | (date.getSeconds() << PilotIO.RHMSR_SECONDS_SHIFT);
                this.setLongEx(offset, data);       // shadow it
                break;
            }
            }
        }
        this.printf(MESSAGE.PORTS, "getLong(%#06x): %#010x\n", offset, data);
        return data;
    }

    /**
     * setByte(offset, data)
     *
     * Set one byte in the register set.
     *
     * @this {PilotIO}
     * @param {number} offset
     * @param {number} data
     */
    setByte(offset, data)
    {
        let bPrev = this.getByteEx(offset);
        this.printf(MESSAGE.PORTS, "setByte(%#06x,%#04x)\n", offset, data);

        if (this.isLCDReg(offset)) {
            this.setByteEx(offset, data);
            if (offset - PilotIO.LCDREGS_OFFSET == PilotIO.LCDREG_CKCON) {
                if ((bPrev & PilotIO.CKCON_LCDON) != (data & PilotIO.CKCON_LCDON)) {
                    this.resetScreen();
                }
            }
            return;
        }

        switch (offset) {
        case PilotIO.DBREG_PDDATA:
            //
            // Writes to Port D Data clear the corresponding edge-triggered button interrupts (on the MC68EZ328 too,
            // where this is the only way to clear edge-triggered INT0-3 interrupts), and on the MC68328, since that
            // data must not propagate to PDDATA, we return now.
            //
            this.bPDDataEdge &= ~data;
            this.updateButtonInterrupts();
            if (this.fEZ) break;
            return;
        }

        this.setByteEx(offset, data);

        switch (offset) {
        case PilotIO.DBREG_IMR:
        case PilotIO.DBREG_IMR+1:
        case PilotIO.DBREG_IMR+2:
        case PilotIO.DBREG_IMR+3:
            this.updateInterrupts(0, 0, false);
            break;

        case PilotIO.DBREG_PDIRQEN:
            this.updateButtonInterrupts();
            break;

        case PilotIO.DBREG_PDIRQEDGE:
            if (this.fEZ) {
                //
                // If any INT0-3 pins become edge-sensitive while active (eg, when KeyWake re-enables edge-sensitive
                // key interrupts while the key that woke the device is still down), the edge detector sees an edge.
                // PalmOS relies on that, so that KeyHandleInterrupt can "swallow" the key press that woke the device.
                //
                let bRows = this.getByteEx(PilotIO.DBREG_PCDIR) & ~this.getByteEx(PilotIO.DBREG_PCDATA);
                this.bPDDataEdge |= (data & ~bPrev) & this.getKeyColumns(bRows);
                this.updateButtonInterrupts();
            }
            break;

        case PilotIO.DBREG_PCDIR:
        case PilotIO.DBREG_PCDATA:
        case PilotIO.DBREG_PDKBEN:
            if (this.fEZ) this.updateButtonInterrupts();
            break;

        case PilotIO.DBREG_PFDATA:
            if ((bPrev & PilotIO.PFDATA_LCDENABLE) != (data & PilotIO.PFDATA_LCDENABLE)) {
                this.resetScreen();
            }
            break;
        }
    }

    /**
     * setWord(offset, data)
     *
     * Set one word in the register set.
     *
     * @this {PilotIO}
     * @param {number} offset
     * @param {number} data
     */
    setWord(offset, data)
    {
        this.printf(MESSAGE.PORTS, "setWord(%#06x,%#06x)\n", offset, data);

        if (this.isLCDReg(offset)) {
            this.setWordEx(offset, data);
            return;
        }

        switch(offset) {
        case PilotIO.DBREG_IMR:
        case PilotIO.DBREG_IMR+2:
            this.setWordEx(offset, data);
            this.updateInterrupts(0, 0, false);
            return;             // return, memory already updated

        case PilotIO.DBREG_ISR:
            this.clearEdgeInterrupts(data << 16);
            return;             // return, memory already updated

        case PilotIO.DBREG_ISR+2:
            return;             // no writable bits we have to pay attention to in ISR+2

        case PilotIO.DBREG_TCTL1:
        case PilotIO.DBREG_TPRER1:
        case PilotIO.DBREG_TCMP1:
            this.updateTimers();
            this.awTMR1[(offset - PilotIO.DBREG_TCTL1) >> 1] = data & 0xffff;
            this.scheduleTimers();
            break;              // break and shadow the change in memory

        case PilotIO.DBREG_TCR1:
        case PilotIO.DBREG_TCN1:
            data = this.awTMR1[(offset - PilotIO.DBREG_TCTL1) >> 1];
            break;              // these timer registers are read-only

        case PilotIO.DBREG_TSTAT1:
            data = this.awTMR1[PilotIO.TSTAT] & (data | ~this.awTMR1[PilotIO.TSTAT_LASTREAD]);
            this.awTMR1[PilotIO.TSTAT_LASTREAD] = 0;
            if (!(data & PilotIO.TSTAT_COMP)) this.updateInterrupts(this.lTMR1Bit, 0, false);
            this.awTMR1[PilotIO.TSTAT] = data & 0xffff;
            break;              // break and shadow the change in memory

        case PilotIO.DBREG_TCTL2:
        case PilotIO.DBREG_TPRER2:
        case PilotIO.DBREG_TCMP2:
            this.updateTimers();
            this.awTMR2[(offset - PilotIO.DBREG_TCTL2) >> 1] = data & 0xffff;
            this.scheduleTimers();
            break;              // break and shadow the change in memory

        case PilotIO.DBREG_TCR2:
        case PilotIO.DBREG_TCN2:
            data = this.awTMR2[(offset - PilotIO.DBREG_TCTL2) >> 1];
            break;              // these timer registers are read-only

        case PilotIO.DBREG_TSTAT2:
            data = this.awTMR2[PilotIO.TSTAT] & (data | ~this.awTMR2[PilotIO.TSTAT_LASTREAD]);
            this.awTMR2[PilotIO.TSTAT_LASTREAD] = 0;
            if (!(data & PilotIO.TSTAT_COMP)) this.updateInterrupts(PilotIO.IMR_TMR2, 0, false);
            this.awTMR2[PilotIO.TSTAT] = data & 0xffff;
            break;              // break and shadow the change in memory

        case PilotIO.DBREG_SPIMCONT:
            if (this.fEZ) {
                if (data & PilotIO.SPIMCONT_XCH) {
                    data = (data & ~PilotIO.SPIMCONT_XCH) | PilotIO.SPIMCONT_SPIMIRQ;
                    this.setWordEx(PilotIO.DBREG_SPIMDATA, this.exchangeADC(this.getWordEx(PilotIO.DBREG_SPIMDATA), (data & PilotIO.SPIMCONT_BITCOUNT) + 1));
                }
                break;
            }
            if ((data & PilotIO.SPIMCONT_XCH) && (data & PilotIO.SPIMCONT_IRQEN)) {
                //
                // The caller is wanting to exchange data, so set SPIMIRQ to indicate exchange complete
                // (data will be deposited in SPIMDATA); Port F Data apparently specifies the type of data requested.
                //
                data |= PilotIO.SPIMCONT_SPIMIRQ;
                data &= ~PilotIO.SPIMCONT_XCH;
                let spimdata = -1;
                switch (this.getByteEx(PilotIO.DBREG_PFDATA) & 0x0F) {
                case 0x6:
                    spimdata = (0xff - this.xPenCurrent) * 2;
                    this.fPenRead = true;
                    break;
                case 0x9:
                    spimdata = (0xff - this.yPenCurrent) * 2;
                    this.fPenRead = true;
                    break;
                }
                if (spimdata >= 0) this.setWordEx(PilotIO.DBREG_SPIMDATA, spimdata);
            }
            break;
        }

        this.setWordEx(offset, data);
    }

    /**
     * exchangeADC(dataOut, nBits)
     *
     * On EZ-based devices (eg, the Palm IIIc), the digitizer and battery voltage are read using a Burr-Brown ADS7843
     * A/D converter attached to the SPI master.  PalmOS (see the HAL routine at 0x10c76c70 in the Palm IIIc ROM)
     * sends an 8-bit control byte (as a 7-bit exchange followed by a 1-bit exchange), and then performs a 16-bit
     * exchange to read the 12-bit result, which it shifts right 3 bits.
     *
     * The control byte contains a start bit (bit 7), a channel select (bits 6-4), a mode bit (bit 3), a
     * single-ended/differential bit (bit 2), and power-down bits (bits 1-0).
     *
     * @this {PilotIO}
     * @param {number} dataOut (data being shifted out to the ADC)
     * @param {number} nBits (number of bits being exchanged)
     * @returns {number} (data shifted in from the ADC)
     */
    exchangeADC(dataOut, nBits)
    {
        let dataIn = 0;
        if (nBits >= 16) {
            let value = 0;
            switch((this.bADCControl >> 4) & 0x7) {
            case PilotIO.ADC_CHANNEL_X:
                value = this.getADCValue(this.xPenCurrent, PilotIO.DEF_SCREEN_WIDTH, this.aADCRangeX);
                this.fPenRead = true;
                break;
            case PilotIO.ADC_CHANNEL_Y:
                value = this.getADCValue(this.yPenCurrent, this.cyDigitizer, this.aADCRangeY);
                this.fPenRead = true;
                break;
            case PilotIO.ADC_CHANNEL_BATTERY:
                value = PilotIO.ADC_BATTERY_GOOD;
                break;
            }
            dataIn = (value << 3) & 0xffff;
            this.nADCBits = 0;
        } else {
            this.bADCShift = ((this.bADCShift << nBits) | (dataOut & ((1 << nBits) - 1))) & 0xff;
            this.nADCBits += nBits;
            if (this.nADCBits >= 8) {
                this.bADCControl = this.bADCShift;
                this.nADCBits = 0;
            }
        }
        this.printf(MESSAGE.PORTS, "exchangeADC(%#06x,%d): control=%#04x data=%#06x\n", dataOut, nBits, this.bADCControl, dataIn);
        return dataIn;
    }

    /**
     * getADCValue(pos, size, range)
     *
     * Converts a pen coordinate into a 12-bit A/D converter value, by linearly mapping the coordinate range
     * (0 to size) onto the given range of A/D values (which may be decreasing, to indicate an inverted axis).
     *
     * @this {PilotIO}
     * @param {number} pos
     * @param {number} size
     * @param {Array.<number>} range (eg, [0, 0xfff])
     * @returns {number}
     */
    getADCValue(pos, size, range)
    {
        return Math.round(range[0] + (range[1] - range[0]) * pos / size) & 0xfff;
    }

    /**
     * setLong(offset, data)
     *
     * Set one long in the register set.
     *
     * @this {PilotIO}
     * @param {number} offset
     * @param {number} data
     */
    setLong(offset, data)
    {
        this.printf(MESSAGE.PORTS, "setLong(%#06x,%#010x)\n", offset, data);

        if (this.isLCDReg(offset)) {
            this.setLongEx(offset, data);
            return;
        }

        switch(offset) {
        case PilotIO.DBREG_IMR:
            this.setLongEx(offset, data);
            this.updateInterrupts(0, 0, false);
            return;             // return, memory already updated

        case PilotIO.DBREG_ISR:
            this.clearEdgeInterrupts(data);
            return;             // return, memory already updated

        case PilotIO.DBREG_RHMSR: {
            let date = new Date(Date.now() + this.msRTCDelta);
            date.setHours((data & PilotIO.RHMSR_HOURS) >> PilotIO.RHMSR_HOURS_SHIFT, (data & PilotIO.RHMSR_MINUTES) >> PilotIO.RHMSR_MINUTES_SHIFT, (data & PilotIO.RHMSR_SECONDS) >> PilotIO.RHMSR_SECONDS_SHIFT);
            this.msRTCDelta = date.getTime() - Date.now();
            break;
        }
        }

        this.setLongEx(offset, data);
    }

    /**
     * clearEdgeInterrupts(lData)
     *
     * Writing ones to ISR bits corresponding to edge-triggered interrupts clears them.
     *
     * @this {PilotIO}
     * @param {number} lData (the bits written to ISR)
     */
    clearEdgeInterrupts(lData)
    {
        let wICR = this.getWordEx(PilotIO.DBREG_ICR);
        let lIPR = this.getLongEx(PilotIO.DBREG_IPR);
        let lIPRNew = lIPR;
        if ((wICR & PilotIO.ICR_ET1) && (lData & PilotIO.IMR_IRQ1)) lIPRNew &= ~PilotIO.IMR_IRQ1;
        if ((wICR & PilotIO.ICR_ET2) && (lData & PilotIO.IMR_IRQ2)) lIPRNew &= ~PilotIO.IMR_IRQ2;
        if ((wICR & PilotIO.ICR_ET3) && (lData & PilotIO.IMR_IRQ3)) lIPRNew &= ~PilotIO.IMR_IRQ3;
        if ((wICR & PilotIO.ICR_ET6) && (lData & PilotIO.IMR_IRQ6)) lIPRNew &= ~PilotIO.IMR_IRQ6;
        if (lData & PilotIO.IMR_IRQ7) lIPRNew &= ~PilotIO.IMR_IRQ7;
        if (lIPRNew != lIPR) {
            this.setLongEx(PilotIO.DBREG_IPR, lIPRNew);
            this.updateInterrupts(0, 0, false);
        }
    }

    /**
     * updateButton(iBit, fDown)
     *
     * The Port D Data register contains bits that map to the hardware button interrupt lines (see PilotIO.BUTTONS).
     *
     * @this {PilotIO}
     * @param {number} iBit
     * @param {boolean} fDown
     */
    updateButton(iBit, fDown)
    {
        if (this.fEZ) {
            let iKey = this.aKeyMatrix[iBit];
            if (iKey == undefined || iKey < 0) return;
            let wKeyBits = this.wKeyBits;
            this.wKeyBits = fDown? (wKeyBits | (1 << iKey)) : (wKeyBits & ~(1 << iKey));
            //
            // An edge is latched only if the key's column (ie, the corresponding INT0-3 pin) is edge-sensitive.
            //
            let bCol = 1 << (iKey & 0x3);
            if (fDown && wKeyBits != this.wKeyBits && (this.getByteEx(PilotIO.DBREG_PDIRQEDGE) & bCol)) {
                this.bPDDataEdge |= bCol;
            }
            this.updateButtonInterrupts();
            return;
        }
        let bMask = 1 << iBit;
        let bPDData = this.getByteEx(PilotIO.DBREG_PDDATA);
        let bPDDataOrig = bPDData;
        if (fDown) {
            bPDData |= bMask;
        } else {
            bPDData &= ~bMask;
        }
        if (bPDData != bPDDataOrig) {
            this.bPDDataEdge |= bMask;
            this.setByteEx(PilotIO.DBREG_PDDATA, bPDData);
            this.updateButtonInterrupts();
        }
    }

    /**
     * updateButtonInterrupts()
     *
     * @this {PilotIO}
     */
    updateButtonInterrupts()
    {
        if (this.fEZ) {
            //
            // On the MC68EZ328, Port D bits 0-3 are INT0-3, which are presented to the interrupt controller only if
            // enabled in PDIRQEN, and which are either level-sensitive or (if enabled in PDIRQEDGE) edge-sensitive.
            //
            let bIQEN = this.getByteEx(PilotIO.DBREG_PDIRQEN) & 0xf;
            let bIQEG = this.getByteEx(PilotIO.DBREG_PDIRQEDGE) & 0xf;
            let bInts = ((this.getKeyColumns(PilotIO.KEY_ROWS) & ~bIQEG) | (this.bPDDataEdge & bIQEG)) & bIQEN;
            //
            // In addition, the keyboard (KB) interrupt is a level-sensitive interrupt that's asserted whenever any of the
            // Port D pins enabled in PDKBEN is low; PalmOS uses it to wake from sleep (see KeySleep in the Palm IIIc ROM),
            // after driving the rows of the key matrix low.
            //
            let bRows = this.getByteEx(PilotIO.DBREG_PCDIR) & ~this.getByteEx(PilotIO.DBREG_PCDATA);
            let lKB = (this.getKeyColumns(bRows) & this.getByteEx(PilotIO.DBREG_PDKBEN) & 0xf)? PilotIO.IMR_KBD : 0;
            this.updateInterrupts((bInts << 8) | lKB, PilotIO.IMR_INT0 | PilotIO.IMR_INT1 | PilotIO.IMR_INT2 | PilotIO.IMR_INT3 | PilotIO.IMR_KBD, true);
            return;
        }
        let bPDData = this.getByteEx(PilotIO.DBREG_PDDATA);
        let bPDIRQEdge = this.getByteEx(PilotIO.DBREG_PDIRQEDGE);
        let bPDIRQEn = this.getByteEx(PilotIO.DBREG_PDIRQEN);
        let lMask = PilotIO.IMR_INT0 | PilotIO.IMR_INT1 | PilotIO.IMR_INT2 | PilotIO.IMR_INT3 | PilotIO.IMR_INT4 | PilotIO.IMR_INT5 | PilotIO.IMR_INT6 | PilotIO.IMR_INT7;
        this.updateInterrupts(((this.bPDDataEdge & bPDIRQEdge) | (bPDData & ~bPDIRQEdge) & bPDIRQEn) << 8, lMask, true);
    }

    /**
     * getKeyColumns(bRows)
     *
     * On EZ-based devices (eg, the Palm IIIc), the hardware buttons are arranged in a matrix, where each row is
     * selected by driving one of Port C bits 0-2 low, and the columns are read from Port D bits 0-3 (which are
     * inverted by PDPOL, so pressed keys read as 1).  The keys in row N are recorded in bits (N*4) through (N*4)+3 of
     * wKeyBits, and the device's 'keyMatrix' config property determines which bit each button corresponds to.
     *
     * @this {PilotIO}
     * @param {number} bRows (bits 0-2 indicate which rows are selected)
     * @returns {number} (bits 0-3 indicate which columns contain a pressed key in the selected rows)
     */
    getKeyColumns(bRows)
    {
        let bCols = 0;
        for (let iRow = 0; iRow < 3; iRow++) {
            if (bRows & (1 << iRow)) bCols |= (this.wKeyBits >> (iRow * 4)) & 0xf;
        }
        return bCols;
    }

    /**
     * updatePen(x, y, fDown)
     *
     * @this {PilotIO}
     * @param {number} x
     * @param {number} y
     * @param {boolean} fDown
     */
    updatePen(x, y, fDown)
    {
        this.xPenCurrent = x;
        this.yPenCurrent = y;
        if (!this.fPenDown && fDown) {
            this.fPenDown = true;
            this.updateInterrupts(PilotIO.IMR_PEN, 0, true);
        }
        else if (this.fPenDown && !fDown) {
            this.fPenDown = false;
            //
            // In an attempt to avoid missing pen activity due to the emulator being unexpectedly busy, I don't
            // clear IPR_PEN if fPenRead is false.  I wait until the emulator has started reading pen data and clear
            // the interrupt at THAT time.
            //
            if (!this.fPenRead) {
                this.fPenUpPending = true;
            } else {
                //
                // BUGBUG: I suspect we should really be clearing PEN interrupts when the handler updates the IPR instead.
                // The problem with clearing them here is that the emulator could miss the transition altogether, and I seriously
                // doubt the real hardware clears the interrupt status on a "pen up" condition - but maybe it does.... -JP
                //
                this.updateInterrupts(PilotIO.IMR_PEN, 0, false);
            }
        }
        this.fPenRead = false;
    }

    /**
     * updateTimers()
     *
     * Update the high-frequency timers, by advancing them by the number of CPU cycles that have elapsed since
     * the last update.  The Java implementation estimated the number of elapsed cycles, using a combination of
     * opcode counts and elapsed real-world time, whereas we have an accurate CPU cycle count.
     *
     * @this {PilotIO}
     */
    updateTimers()
    {
        let nCycles = this.time.getCycles();
        let nCyclesAdd = nCycles - this.nCyclesTimers;
        this.nCyclesTimers = nCycles;
        if (nCyclesAdd > 0) {
            this.nCyclesTMR1 = this.updateTimer(this.awTMR1, this.nCyclesTMR1 + nCyclesAdd, this.lTMR1Bit);
            this.nCyclesTMR2 = this.updateTimer(this.awTMR2, this.nCyclesTMR2 + nCyclesAdd, PilotIO.IMR_TMR2);
        }
    }

    /**
     * getTimerDivisor(awTMR)
     *
     * Returns the number of CPU cycles per timer tick, or 0 if the timer isn't counting.
     *
     * The Java implementation always assumed that the input clock was the system clock; we also support
     * the system clock divided by 16 and the 32Khz clock.
     *
     * @this {PilotIO}
     * @param {Array.<number>} awTMR
     * @returns {number}
     */
    getTimerDivisor(awTMR)
    {
        let nDivisor = 0;
        if (awTMR[PilotIO.TCTL] & PilotIO.TCTL_TEN) {
            switch(awTMR[PilotIO.TCTL] & PilotIO.TCTL_CLKSOURCE) {
            case PilotIO.CLKSOURCE_SYSTEMCLOCK:
                nDivisor = 1;
                break;
            case PilotIO.CLKSOURCE_SYSTEMCLOCKDIV16:
                nDivisor = 16;
                break;
            case PilotIO.CLKSOURCE_32OR38KHZ:
            case PilotIO.CLKSOURCE_32OR38KHZ + 0x2:
            case PilotIO.CLKSOURCE_32OR38KHZ + 0x4:
            case PilotIO.CLKSOURCE_32OR38KHZ + 0x6:
                nDivisor = this.time.nCyclesPerSecond / 32768;
                break;
            }
            nDivisor *= (awTMR[PilotIO.TPRER] & PilotIO.TPRER_PRESCALER) + 1;
        }
        return nDivisor;
    }

    /**
     * updateTimer(awTMR, nCycles, lBit)
     *
     * Update the specified high-frequency timer, by converting the number of cycles accumulated since the
     * last call into timer ticks.
     *
     * @this {PilotIO}
     * @param {Array.<number>} awTMR
     * @param {number} nCycles
     * @param {number} lBit
     * @returns {number} (number of cycles not yet converted into ticks)
     */
    updateTimer(awTMR, nCycles, lBit)
    {
        let nDivisor = this.getTimerDivisor(awTMR);
        if (!nDivisor) return 0;
        let nTicks = Math.floor(nCycles / nDivisor);
        nCycles -= nTicks * nDivisor;
        if (nTicks) {
            let tcn = awTMR[PilotIO.TCN];
            let tcmp = awTMR[PilotIO.TCMP];
            let fCompare = false;
            if (!(awTMR[PilotIO.TCTL] & PilotIO.TCTL_FRR)) {
                //
                // In "restart" mode, the counter is reset to zero (and resumes counting) on every "compare event".
                //
                tcn += nTicks;
                if (tcn >= tcmp) {
                    fCompare = true;
                    tcn = tcmp? (tcn - tcmp) % tcmp : 0;
                }
            } else {
                //
                // In "free run" mode, the counter simply wraps around, and a "compare event" occurs whenever it passes TCMP.
                //
                let ticksToCompare = ((tcmp - tcn) & 0xffff) || 0x10000;
                if (nTicks >= ticksToCompare) fCompare = true;
                tcn = (tcn + nTicks) & 0xffff;
            }
            awTMR[PilotIO.TCN] = tcn;
            if (fCompare) {
                awTMR[PilotIO.TSTAT] |= PilotIO.TSTAT_COMP;
                if (awTMR[PilotIO.TCTL] & PilotIO.TCTL_IRQEN) {
                    this.updateInterrupts(lBit, 0, true);
                }
            }
        }
        return nCycles;
    }

    /**
     * scheduleTimers()
     *
     * Arm our Time timer to fire at the next timer "compare" event, so that timer interrupts are generated on time.
     *
     * @this {PilotIO}
     */
    scheduleTimers()
    {
        let nCyclesNext = -1;
        let awTMRs = [this.awTMR1, this.awTMR2];
        let anCycles = [this.nCyclesTMR1, this.nCyclesTMR2];
        for (let i = 0; i < awTMRs.length; i++) {
            let awTMR = awTMRs[i];
            let nDivisor = this.getTimerDivisor(awTMR);
            if (nDivisor && (awTMR[PilotIO.TCTL] & PilotIO.TCTL_IRQEN)) {
                let tcn = awTMR[PilotIO.TCN], tcmp = awTMR[PilotIO.TCMP];
                let nTicks = (awTMR[PilotIO.TCTL] & PilotIO.TCTL_FRR)? (((tcmp - tcn) & 0xffff) || 0x10000) : Math.max(tcmp - tcn, 1);
                let nCycles = Math.max(nTicks * nDivisor - anCycles[i], 1);
                if (nCyclesNext < 0 || nCycles < nCyclesNext) nCyclesNext = nCycles;
            }
        }
        if (nCyclesNext > 0) {
            this.time.setTimer(this.timerTMR, nCyclesNext / this.time.getCyclesPerMS(1), true);
        }
    }

    /**
     * updateInterrupts(lBits, lMask, fSet)
     *
     * Update the Interrupt Pending Register (IPR), and then propagate any pending interrupts that are NOT
     * masked to the Interrupt Status Register (ISR).  If this results in a change in the ISR, then we need
     * to tell the CPU to take a look, and see if the flags will allow an interrupt to occur.
     *
     * @this {PilotIO}
     * @param {number} lBits
     * @param {number} lMask
     * @param {boolean} fSet
     */
    updateInterrupts(lBits, lMask, fSet)
    {
        // Get the current IPR and compute a new IPR
        let lIPR = this.getLongEx(PilotIO.DBREG_IPR);
        let lIPRNew = fSet? ((lIPR & ~lMask) | lBits) : ((lIPR & ~lMask) & ~lBits);

        // Get the current IMR and compute a new ISR, using the new IPR
        let lIMR = this.getLongEx(PilotIO.DBREG_IMR);
        let lISR = this.getLongEx(PilotIO.DBREG_ISR);
        let lISRNew = lIPRNew & ~lIMR;

        // If the new IPR differs from the current IPR, update it
        if (lIPR != lIPRNew) {
            this.setLongEx(PilotIO.DBREG_IPR, lIPRNew);
        }

        // If the new ISR differs from the current ISR, update it, and indicate that interrupt status has changed
        if (lISR != lISRNew) {
            this.setLongEx(PilotIO.DBREG_ISR, lISRNew);
            if (lISRNew) {
                this.cpu.fCPU |= CPU68K.CPU_CHECKINTS;
            }
        }
    }

    /**
     * checkInterrupts(fInitiate)
     *
     * Called from the CPU whenever it notices CPU_CHECKINTS has been set.  Our job is to determine if an interrupt
     * is currently being asserted, and whether or not it is greater than the CPU's current IPM (Interrupt Priority Mask).
     *
     * @this {PilotIO}
     * @param {boolean} fInitiate
     * @returns {boolean} (true if an interrupt is ready to initiate, or has been if fInitiate is true)
     */
    checkInterrupts(fInitiate)
    {
        let cpu = this.cpu;

        //
        // BUGBUG: The following code is a hack to prevent simulating interrupts when the current stack is
        // dangerously close to the current task's interrupt stack.
        //
        // I've noticed that when booting PalmOS 3.3, the hardware interrupt service routine at 0x10c7cba2 loads
        // A0 from 0x11e (let's call location 0x11e the "current task pointer"), and then switches to a new
        // stack (let's call it the current task's "interrupt stack"), whose address is stored at A0+0x10.  In the
        // case of PalmOS 3.3, the current (first?) task is usually 0xe7fe, its application stack is usually 0xedf6
        // (set by 0x10c7c804), and its interrupt stack is usually 0xeafe.  Notice that the amount of room between
        // the stacks is surprisingly small: 0x2f8.  Set a breakpoint at 0x10c87a32, and when you hit it, set another
        // breakpoint at 0x10c7c7a2 -- at this second location, you will eventually see the stack (A7) drop as low
        // as 0xeb12.  At that instant, the stack is too low to allow an interrupt to occur, because the first thing the
        // interrupt service routine at 0x10c7cba2 will do is save a bunch of client registers, thereby overflowing
        // the application stack and overwriting the interrupt stack.  0x10c7c7a2 is not an arbitrary address
        // either: it's the very next instruction after the IPM (Interrupt Priority Mask) in the CPU's flags has
        // been reset to zero, clearing the way for any pending interrupt to be acknowledged.
        //
        // I've repro'ed the same thing in Palm's own emulator.  All the stacks are 0x16 bytes higher, but their
        // relative positions are identical, so the only reason their emulator (and presumably real devices) don't
        // crash is fortuitous timing with respect to TMR2.  Even if I'm simulating timer interrupts at a slightly
        // different/incorrect rate, PalmOS clearly has a window where their application stack is too small.
        //
        if (cpu.regA[7] <= 0xeb12+0x14 && cpu.regA[7] > 0xeafe) {
            return false;
        }

        if (cpu.fCPU & CPU68K.CPU_CHECKINTS) {
            let iLvlHighest = 0;
            let lISR = this.getLongEx(PilotIO.DBREG_ISR);
            for (let iBit = 0, lMask = 1; lISR && iBit < this.abIMRLvl.length; iBit++, lMask <<= 1) {
                if (lISR & lMask) {
                    if (iLvlHighest < this.abIMRLvl[iBit]) {
                        iLvlHighest = this.abIMRLvl[iBit];
                    }
                    lISR &= ~lMask;
                }
            }
            if (iLvlHighest > cpu.getFlagIPM()) {
                if (fInitiate) {
                    let iVector = (this.getByteEx(PilotIO.DBREG_IVR) & 0xff) + iLvlHighest;
                    this.printf(MESSAGE.INT, "interrupt level %d (vector %#04x)\n", iLvlHighest, iVector);
                    cpu.callException(iVector);
                    cpu.setFlagIPM(iLvlHighest);    // we can't change the IPM until callException() had a chance to save the current IPM on the stack
                    cpu.fCPU &= ~CPU68K.CPU_CHECKINTS;
                }
                return true;
            }
            cpu.fCPU &= ~CPU68K.CPU_CHECKINTS;
        }
        return false;
    }

    /**
     * getLCDStatus()
     *
     * Return true if the LCD controller is enabled and the LCD is on.
     *
     * @this {PilotIO}
     * @returns {boolean}
     */
    getLCDStatus()
    {
        if (!(this.getByteEx(PilotIO.DBREG_PFDATA) & PilotIO.PFDATA_LCDENABLE)) {
            return false;
        }
        if (!(this.getByteEx(PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_CKCON) & PilotIO.CKCON_LCDON)) {
            return false;
        }
        return true;
    }

    /**
     * getBufferWidth()
     *
     * Return width of screen buffer (in terms of words).
     *
     * @this {PilotIO}
     * @returns {number}
     */
    getBufferWidth()
    {
        let cWords = this.getByteEx(PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_LBAR);
        if (cWords & 0x1) {
            cWords++;           // BUGBUG: Why is this sometimes 9 instead of 10 for standard 1BPP operation? -JP
        }
        return cWords;
    }

    /**
     * getBufferStride()
     *
     * Return number of bytes per scanline.
     *
     * @this {PilotIO}
     * @returns {number}
     */
    getBufferStride()
    {
        return this.getBufferWidth() * 2;
    }

    /**
     * getBPP()
     *
     * If we assume the physical screen width is a constant, then the LBAR register (which describes the number
     * of WORDS required for each scanline) can simply be multiplied by 16 (to yield the number of BITS required
     * for each scanline) and then divided by the width (to yield bits-per-pixel).
     *
     * @this {PilotIO}
     * @returns {number} (1 or 2, since DragonBall LCD controllers support only 1BPP and 2BPP)
     */
    getBPP()
    {
        let cBPP = ((this.getBufferWidth() * 16) / PilotIO.DEF_SCREEN_WIDTH)|0;
        return cBPP <= 1? 1 : 2;
    }

    /**
     * getBufferAddress()
     *
     * Return address of screen buffer.
     *
     * @this {PilotIO}
     * @returns {number}
     */
    getBufferAddress()
    {
        return this.getLongEx(PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_SSA);
    }

    /**
     * getGrayPalette()
     *
     * Return the 16-bit Gray Palette Mapping Register (GPMR), where bits 8-11, 12-15, 0-3, and 4-7 describe the
     * intensity of 2-bit pixel values 00, 01, 10, and 11.
     *
     * @this {PilotIO}
     * @returns {number}
     */
    getGrayPalette()
    {
        return this.getWordEx(PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_GPMR);
    }

    /**
     * resetScreen()
     *
     * Notify the video device (if any) that the LCD state has changed (the equivalent of Device.ResetScreen()).
     *
     * @this {PilotIO}
     */
    resetScreen()
    {
        if (this.video) this.video.resetScreen();
    }
}

/**
 * Button IDs (as used by the Input device's map) and their corresponding Port D Data register bits.
 *
 * NOTE: The Java implementation also defined BUTTON_BACKLIGHT as a pseudo-button, to logically separate the
 * backlight function of the power button from its on/off function.
 */
PilotIO.BUTTONS = {
    "power":    0,
    "up":       1,
    "down":     2,
    "datebook": 3,
    "address":  4,
    "todolist": 5,
    "memopad":  6
};

/**
 * ROM header definitions (see CPUMem.java)
 */
PilotIO.ROM_BASE            = 0x10c00000;
PilotIO.ROMHDR_HDRVER       = 0x000c;       // eg, 0x0001 (PalmOS 1.0), which implies 6-byte heap chunk headers

/**
 * PalmOS database header definitions (see pdb_file_format.txt)
 */
PilotIO.DBHDR_NAME_LEN      = 32;           // the database name is a null-terminated string at offset 0
PilotIO.DBHDR_TYPE          = 0x3c;         // eg, "appl"
PilotIO.DBHDR_SIZE          = 0x4e;         // size of the header, up to (but not including) the record list

/**
 * Temporary blocks (see allocTempBlocks()) must not extend beyond this address (or the ROM, if any).
 */
PilotIO.TEMP_LIMIT          = 0x00400000;

/**
 * List of supported DragonBall h/w registers (see p.24 of MC68328 User's Manual 12/9/97)
 */
PilotIO.DBREGS_BASE         = 0xfffff000;
PilotIO.DBREGS_SIZE         = 0x00001000;
PilotIO.DBREGS_LIMIT        = PilotIO.DBREGS_BASE + PilotIO.DBREGS_SIZE;

/**
 * System Control Register
 */
PilotIO.DBREG_SCR           = 0x000;

/**
 * Mask Revision Register
 */
PilotIO.DBREG_MRR           = 0x004;
PilotIO.DBREG_IDR           = 0x004;        // MC68EZ328 Silicon ID Register (chip ID, mask ID, and software ID)
PilotIO.EZ_CHIPID                   = 0x45;
PilotIO.EZ_MASKID                   = 0x01;

/**
 * Chip Select Base Registers
 */
PilotIO.DBREG_GRPBASEA      = 0x100;
PilotIO.DBREG_GRPBASEB      = 0x102;
PilotIO.DBREG_GRPBASEC      = 0x104;
PilotIO.DBREG_GRPBASED      = 0x106;

/**
 * Chip Select A Mask Registers
 */
PilotIO.DBREG_GRPMASKA      = 0x108;
PilotIO.DBREG_GRPMASKB      = 0x10A;
PilotIO.DBREG_GRPMASKC      = 0x10C;
PilotIO.DBREG_GRPMASKD      = 0x10E;

/**
 * Group Chip Select Option Registers
 */
PilotIO.DBREG_CSA0          = 0x110;
PilotIO.DBREG_CSA1          = 0x114;
PilotIO.DBREG_CSA2          = 0x118;
PilotIO.DBREG_CSA3          = 0x11C;
PilotIO.DBREG_CSB0          = 0x120;
PilotIO.DBREG_CSB1          = 0x124;
PilotIO.DBREG_CSB2          = 0x128;
PilotIO.DBREG_CSB3          = 0x12C;
PilotIO.DBREG_CSC0          = 0x130;
PilotIO.DBREG_CSC1          = 0x134;
PilotIO.DBREG_CSC2          = 0x138;
PilotIO.DBREG_CSC3          = 0x13C;
PilotIO.DBREG_CSD0          = 0x140;
PilotIO.DBREG_CSD1          = 0x144;
PilotIO.DBREG_CSD2          = 0x148;
PilotIO.DBREG_CSD3          = 0x14C;

PilotIO.CHIP_SELECT_DEFAULT = 0x00010006;

/**
 * PLL (Phase-Locked Loop Clock Generator) Control Register (16-bit)
 *
 * To put the CPU in "sleep mode", the simplest approach is to wait until PLLFSR_CLK32 in DBREG_PLLFSR goes high,
 * and then shut down the PLL by setting PLLCR_DISPLL in DBREG_PLLCR.  Any interrupt specified as a "wake up" interrupt
 * in DBREG_IWR can take the CPU out of "sleep mode" (true even if the interrupt is masked).  For example:
 *
 *      lea     #$fff202,A1     ; point to the Freq Sel reg.
 *      lea     #$fff200,A0     ; point to the Ctrl reg.
 *  l1: move.w  (A1),D0         ; sync to rising CLK32 edge
 *      bpl.w   l1              ; wait for CLK32 to go high
 *      bset    #3,(A0)         ; disable PLL
 *      stop    #$2000          ; stop fetching and wait for any IRQ
 *
 * It's also good practice to disable CLKO before sleeping and re-enabling after wake-up (but I'm not sure if this
 * is a software recommendation or a hardware-only issue).  There's also the potential for an external device to try to power
 * itself from the DragonBall's output pins, in which case it may be best to insure the pin(s) are in the "low state"
 * (which again may be a hardware-only issue).
 */
PilotIO.DBREG_PLLCR         = 0x200;
PilotIO.PLLCR_DISPLL                = 0x0008;       // disables PLL if set (to put the CPU in "sleep mode")
PilotIO.PLLCR_CLKEN                 = 0x0010;       // enables CLKO pin if set
PilotIO.PLLCR_SYSCLK                = 0x0700;       // sets system clock to VCO/(2^(SYSCLK+1)), or to VCO if SYSCLK >= 4
PilotIO.PLLCR_PIXCLK                = 0x3800;       // sets LCD pixel clock to VCO/(2^(PIXCLK+1)), or to VCO if PIXCLK >= 4

/**
 * PLL (Phase-Locked Loop Clock Generator) Frequency Select Register (16-bit)
 *
 * On a Pilot, PLLFSR's default value of 0x0123 is used, which means that P is 35 and Q is 1.  P and Q and used to form
 * what's called the "PLL Divisor", using the following formula:  14*(P+1) + Q+1.  So the default PLL Divisor is 506.
 * When choosing other divisors, Q must range from 1 to 14, and P must be greater than Q (which also means that not
 * all divisor values below 225 are possible).
 *
 * The PLL Divisor is used to generate the master frequency, aka system clock.  Assuming a 32.768Khz crystal, multiply that
 * by 506 to get a master frequency of 16.580608Mhz.  DragonBall documentation says 506 was chosen since it can generate standard
 * baud frequencies with an error of only 0.05% (they say an "accuracy of 0.05%" but I think they misspoke :-)).
 */
PilotIO.DBREG_PLLFSR        = 0x202;
PilotIO.PLLFSR_PCOUNT               = 0x00FF;       // P counter
PilotIO.PLLFSR_QCOUNT               = 0x0F00;       // Q counter
PilotIO.PLLFSR_PROT                 = 0x4000;       // protects P and Q counters from additional writes
PilotIO.PLLFSR_CLK32                = 0x8000;       // current state of the CLK32 signal (BUGBUG: we just toggle it -JP)

/**
 * Power Control Register (8-bit, but could also be accessed as a word at 0x206, where bits 8-15 are reserved)
 */
PilotIO.DBREG_PCTLR         = 0x207;
PilotIO.PCTLR_WIDTH                 = 0x1f;         // # of 1/31 the clock is bursted
PilotIO.PCTLR_STOP                  = 0x40;         // immediately enters power-saving mode ("doze mode")
PilotIO.PCTLR_PCEN                  = 0x80;         // enables power controller (disabled by interrupts)

/**
 * Interrupt Vector Register (8-bit)
 */
PilotIO.DBREG_IVR           = 0x300;

/**
 * Interrupt levels (7 is highest priority, 1 is lowest).  The interrupt vector
 * number for an interrupt is formed by the low 3 bits of the level and the high 5 bits
 * of the IVR (the low 3 bits of the IVR are always zero).  If an interrupt occurs
 * before the IVR has been programmed, vector number 0xf is generated by default.
 * The vector number is then multiplied by 4 to form the corresponding vector address (ie,
 * there is no vector base register (VBR); the 68000's vector base is hard-coded to zero).
 */
PilotIO.INTLVL_IRQ7             = 7;
PilotIO.INTLVL_SPIS             = 6;        // Serial Peripheral Interface Slave
PilotIO.INTLVL_TMR1             = 6;
PilotIO.INTLVL_IRQ6             = 6;
PilotIO.INTLVL_PEN              = 5;
PilotIO.INTLVL_SPIM             = 4;        // Serial Peripheral Interface Master
PilotIO.INTLVL_TMR2             = 4;
PilotIO.INTLVL_UART             = 4;
PilotIO.INTLVL_WDT              = 4;        // Watchdog Timer
PilotIO.INTLVL_RTC              = 4;
PilotIO.INTLVL_KBD              = 4;
PilotIO.INTLVL_PWM              = 4;
PilotIO.INTLVL_INT              = 4;
PilotIO.INTLVL_IRQ3             = 3;
PilotIO.INTLVL_IRQ2             = 2;
PilotIO.INTLVL_IRQ1             = 1;

PilotIO.abIMRLvl = [4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 2, 3, 6, 5, 6, 6, 7];

/**
 * Interrupt levels for each IMR/ISR/IPR bit on the MC68EZ328 (see section 6 of the MC68EZ328 User's Manual)
 */
PilotIO.abIMRLvlEZ = [4, 6, 4, 4, 4, 0, 4, 6, 4, 4, 4, 4, 0, 0, 0, 0, 1, 2, 3, 6, 5, 0, 4, 7];

/**
 * Supported DragonBall chips (see the 'chip' property of the PilotIO config)
 */
PilotIO.CHIP = {
    DB:     "MC68328",
    EZ:     "MC68EZ328"
};

/**
 * Interrupt Control Register (16-bit)
 */
PilotIO.DBREG_ICR           = 0x302;
PilotIO.ICR_ET6                     = 0x0100;
PilotIO.ICR_ET3                     = 0x0200;
PilotIO.ICR_ET2                     = 0x0400;
PilotIO.ICR_ET1                     = 0x0800;

/**
 * Interrupt Mask Register (32-bit)
 */
PilotIO.DBREG_IMR           = 0x304;
PilotIO.IMR_SPIM                    = 0x00000001;
PilotIO.IMR_TMR2                    = 0x00000002;
PilotIO.IMR_UART                    = 0x00000004;
PilotIO.IMR_WDT                     = 0x00000008;
PilotIO.IMR_RTC                     = 0x00000010;
PilotIO.IMR_KBD                     = 0x00000040;
PilotIO.IMR_PWM                     = 0x00000080;
PilotIO.IMR_INT0                    = 0x00000100;
PilotIO.IMR_INT1                    = 0x00000200;
PilotIO.IMR_INT2                    = 0x00000400;
PilotIO.IMR_INT3                    = 0x00000800;
PilotIO.IMR_INT4                    = 0x00001000;
PilotIO.IMR_INT5                    = 0x00002000;
PilotIO.IMR_INT6                    = 0x00004000;
PilotIO.IMR_INT7                    = 0x00008000;
PilotIO.IMR_IRQ1                    = 0x00010000;
PilotIO.IMR_IRQ2                    = 0x00020000;
PilotIO.IMR_IRQ3                    = 0x00040000;
PilotIO.IMR_IRQ6                    = 0x00080000;
PilotIO.IMR_PEN                     = 0x00100000;
PilotIO.IMR_SPIS                    = 0x00200000;
PilotIO.IMR_TMR1                    = 0x00400000;
PilotIO.IMR_TMR                     = 0x00000002;   // the MC68EZ328's only timer uses the same bit as TMR2
PilotIO.IMR_IRQ7                    = 0x00800000;

PilotIO.DBREG_IWR           = 0x308;        // Interrupt Wakeup Enable Register (32-bit)
PilotIO.DBREG_ISR           = 0x30C;        // Interrupt Status Register (32-bit)
PilotIO.DBREG_IPR           = 0x310;        // Interrupt Pending Register (32-bit)

/**
 * Port registers (all 8-bit)
 */
PilotIO.DBREG_PADIR         = 0x400;
PilotIO.DBREG_PADATA        = 0x401;
PilotIO.DBREG_PASEL         = 0x403;
PilotIO.DBREG_PBDIR         = 0x408;
PilotIO.DBREG_PBDATA        = 0x409;
PilotIO.DBREG_PBSEL         = 0x40B;
PilotIO.DBREG_PCDIR         = 0x410;

/**
 * I don't know the details of the Port C Data register (PCDATA), but I do know that in PalmOS 3.3,
 * in a routine called PrvLowBatteryShutdownNow, if it doesn't see bit 4 (value 0x10) set in PCDATA,
 * then it wants to go to sleep (ie, TRAP HwrSleep).  Let's avoid that for now.  ;-) -JP
 */
PilotIO.DBREG_PCDATA        = 0x411;
PilotIO.DBREG_PCSEL         = 0x413;

/**
 * The Port D Data register contains bits that map to the hardware button interrupt lines:
 *      Bit 0:  DeviceInterface.BUTTON_POWER
 *      Bit 1:  DeviceInterface.BUTTON_UP
 *      Bit 2:  DeviceInterface.BUTTON_DOWN
 *      Bit 3:  DeviceInterface.BUTTON_DATEBOOK
 *      Bit 4:  DeviceInterface.BUTTON_ADDRESS
 *      Bit 5:  DeviceInterface.BUTTON_TODOLIST
 *      Bit 6:  DeviceInterface.BUTTON_MEMOPAD
 *      Bit 7:  Undefined
 */
PilotIO.DBREG_PDDIR         = 0x418;
PilotIO.DBREG_PDDATA        = 0x419;
PilotIO.DBREG_PDPUEN        = 0x41A;
PilotIO.DBREG_PDPOL         = 0x41C;
PilotIO.DBREG_PDIRQEN       = 0x41D;
PilotIO.DBREG_PDKBEN        = 0x41E;        // MC68EZ328 Port D Keyboard Enable Register
PilotIO.DBREG_PDIRQEDGE     = 0x41F;
PilotIO.DBREG_PEDIR         = 0x420;
PilotIO.DBREG_PEDATA        = 0x421;
PilotIO.DBREG_PEPUEN        = 0x422;
PilotIO.DBREG_PESEL         = 0x423;
PilotIO.DBREG_PFDIR         = 0x428;

/**
 * The Port F Data register contains bits that control the LCD display.  The most important one is bit 4 (0x10).
 */
PilotIO.DBREG_PFDATA        = 0x429;
PilotIO.PFDATA_LCDENABLE            = 0x10;
PilotIO.DBREG_PFPUEN        = 0x42A;
PilotIO.DBREG_PFSEL         = 0x42B;
PilotIO.DBREG_PGDIR         = 0x430;
PilotIO.DBREG_PGDATA        = 0x431;
PilotIO.DBREG_PGPUEN        = 0x432;
PilotIO.DBREG_PGSEL         = 0x433;
PilotIO.DBREG_PJDIR         = 0x438;
PilotIO.DBREG_PJDATA        = 0x439;
PilotIO.DBREG_PJSEL         = 0x43B;
PilotIO.DBREG_PKDIR         = 0x440;
PilotIO.DBREG_PKDATA        = 0x441;
PilotIO.DBREG_PKPUEN        = 0x442;
PilotIO.DBREG_PKSEL         = 0x443;
PilotIO.DBREG_PMDIR         = 0x448;
PilotIO.DBREG_PMDATA        = 0x449;
PilotIO.DBREG_PMPUEN        = 0x44A;
PilotIO.DBREG_PMSEL         = 0x44B;

PilotIO.DBREG_PWMC          = 0x500;        // PWM Control Register
PilotIO.DBREG_PWMP          = 0x502;        // PWM Period Register
PilotIO.DBREG_PWMW          = 0x504;        // PWM Width Register
PilotIO.DBREG_PWMCNT        = 0x506;        // PWM Counter Register

PilotIO.DBREG_TCTL1         = 0x600;        // Timer Unit 1 Control Register (TMR1, 16-bit)
PilotIO.TCTL                    = 0;
PilotIO.TCTL_TEN                    = 0x0001;       // timer enable
PilotIO.TCTL_CLKSOURCE              = 0x000E;       // clock source
PilotIO.CLKSOURCE_STOPCOUNT         =    0x0;
PilotIO.CLKSOURCE_SYSTEMCLOCK       =    0x2;       // input clock = system clock
PilotIO.CLKSOURCE_SYSTEMCLOCKDIV16  =    0x4;       // input clock = system clock / 16
PilotIO.CLKSOURCE_TINPIN            =    0x6;
PilotIO.CLKSOURCE_32OR38KHZ         =    0x8;
PilotIO.TCTL_IRQEN                  = 0x0010;       // reference event interrupt enable
PilotIO.TCTL_OM                     = 0x0020;       // output mode
PilotIO.TCTL_CAPTUREEDGE            = 0x00C0;       // capture edge
PilotIO.TCTL_FRR                    = 0x0100;       // free run/restart

PilotIO.DBREG_TPRER1        = 0x602;        // Timer Unit 1 Prescaler Register (16-bit)
PilotIO.TPRER                   = 1;        // the value TPRER_PRESCALER+1 is used to divide the input clock
PilotIO.TPRER_PRESCALER             = 0x00FF;

PilotIO.DBREG_TCMP1         = 0x604;        // Timer Unit 1 Compare Register (16-bit)
PilotIO.TCMP                    = 2;

PilotIO.DBREG_TCR1          = 0x606;        // Timer Unit 1 Capture Register (16-bit, R/O)
PilotIO.TCR                     = 3;

PilotIO.DBREG_TCN1          = 0x608;        // Timer Unit 1 Counter Register (16-bit, R/O)
PilotIO.TCN                     = 4;

PilotIO.DBREG_TSTAT1        = 0x60A;        // Timer Unit 1 Status Register (16-bit)
PilotIO.TSTAT                   = 5;
PilotIO.TSTAT_COMP                  = 0x0001;       // compare event
PilotIO.TSTAT_CAPT                  = 0x0002;       // capture event

PilotIO.TSTAT_LASTREAD          = 6;        // this isn't a real register, just something we maintain internally
PilotIO.TMR_REGS                = 7;        // total # of TMR registers

PilotIO.DBREG_TCTL2         = 0x60C;        // Timer Unit 2 Control Register (TMR2, 16-bit)
PilotIO.DBREG_TPRER2        = 0x60E;        // Timer Unit 2 Prescaler Register (16-bit)

/**
 * On a Pilot, TCMP2 is set to 0xD7E4, or 55268.  Since TCTL2 sets the input clock to the system clock,
 * and TPRER2 is set to 2 (which divides the input clock by 3), 100 interrupts per second are generated
 * (16580608 / 3 / 55268).
 */
PilotIO.DBREG_TCMP2         = 0x610;        // Timer Unit 2 Compare Register (16-bit)
PilotIO.DBREG_TCR2          = 0x612;        // Timer Unit 2 Capture Register (16-bit, R/O)
PilotIO.DBREG_TCN2          = 0x614;        // Timer Unit 2 Counter Register (16-bit, R/O)
PilotIO.DBREG_TSTAT2        = 0x616;        // Timer Unit 2 Status Register (16-bit)
PilotIO.DBREG_WCSR          = 0x618;        // Watchdog Control and Status Register
PilotIO.DBREG_WRR           = 0x61A;        // Watchdog Compare Register
PilotIO.DBREG_WCN           = 0x61C;        // Watchdog Counter Register

PilotIO.DBREG_SPISR         = 0x700;        // SPIS (Serial Peripheral Interface Slave) Register (16-bit)

PilotIO.DBREG_SPIMDATA      = 0x800;        // SPIM (Serial Peripheral Interface Master) Data Register (16-bit)
PilotIO.DBREG_SPIMCONT      = 0x802;        // SPIM (Serial Peripheral Interface Master) Control/Status Register (16-bit)
PilotIO.SPIMCONT_BITCOUNT           = 0x000F;   // number of bits to exchange, minus 1
PilotIO.SPIMCONT_POL                = 0x0010;       // polarity
PilotIO.SPIMCONT_PHA                = 0x0020;       // phase
PilotIO.SPIMCONT_IRQEN              = 0x0040;       // interrupt request enable
PilotIO.SPIMCONT_SPIMIRQ            = 0x0080;
PilotIO.SPIMCONT_XCH                = 0x0100;
PilotIO.SPIMCONT_SPIMEN             = 0x0200;       // SPI master enable
PilotIO.SPIMCONT_DATARATE           = 0xE000;

/**
 * Burr-Brown ADS7843 channel selections (see exchangeADC())
 */
PilotIO.KEY_ROWS                    = 0x07;     // Port C bits that select key matrix rows on EZ-based devices
PilotIO.ADC_CHANNEL_Y               = 1;
PilotIO.ADC_CHANNEL_BATTERY         = 2;
PilotIO.ADC_CHANNEL_X               = 5;
PilotIO.ADC_BATTERY_GOOD            = 0xc80;
PilotIO.ADC_RANGE_X                 = [0xfff, 0];
PilotIO.ADC_RANGE_Y                 = [0xfff, 0];

PilotIO.DBREG_USTCNT        = 0x900;        // UART Status/Control Register
PilotIO.DBREG_UBAUD         = 0x902;        // UART Baud Control Register
PilotIO.DBREG_URX           = 0x904;        // UART RX Register
PilotIO.DBREG_UTX           = 0x906;        // UART TX Register
PilotIO.DBREG_UMISC         = 0x908;        // UART Misc Register

/**
 * List of supported DragonBall LCD Controller registers (the LCDREG_* offsets are relative to LCDREGS_BASE)
 */
PilotIO.LCDREGS_BASE        = 0xfffffa00;
PilotIO.LCDREGS_SIZE        = 0x00000034;
PilotIO.LCDREGS_LIMIT       = PilotIO.LCDREGS_BASE + PilotIO.LCDREGS_SIZE;
PilotIO.LCDREGS_OFFSET      = PilotIO.LCDREGS_BASE - PilotIO.DBREGS_BASE;

PilotIO.LCDREG_SSA          = 0x00;         // LCD Screen Starting Address Register (LSSA, 32-bit)
PilotIO.LCDREG_VPW          = 0x05;         // LCD Virtual Page Width Register (LVPW, 8-bit, normally set to 10, units are words)
PilotIO.LCDREG_XMAX         = 0x08;         // LCD Screen Width Register (LXMAX, 16-bit)
PilotIO.LCDREG_YMAX         = 0x0A;         // LCD Screen Height Register (LYMAX, 16-bit)
PilotIO.LCDREG_CXP          = 0x18;         // LCD Cursor X Position Register (LCXP, 16-bit)
PilotIO.LCDREG_CYP          = 0x1A;         // LCD Cursor Y Position Register (LCYP, 16-bit)
PilotIO.LCDREG_CWCH         = 0x1C;         // LCD Cursor Width & Height Register (LCWCH, 16-bit)
PilotIO.LCDREG_BLKC         = 0x1F;         // LCD Blink Control Register (LBLKC, 8-bit)
PilotIO.LCDREG_PICF         = 0x20;         // LCD Panel Interface Configuration Register (LPICF, 8-bit)
                                            //  (bit 0 normally clear for 1-bit mode, set for 2-bit mode)
PilotIO.LCDREG_POLCF        = 0x21;         // LCD Polarity Configuration Register (LPOLCF, 8-bit)
PilotIO.LCDREG_ACDRC        = 0x23;         // ACD (M) Rate Control Register (LACDRC, 8-bit)
PilotIO.LCDREG_PXCD         = 0x25;         // LCD Pixel Clock Divider Register (LPXCD, 8-bit)
PilotIO.LCDREG_CKCON        = 0x27;         // LCD Clocking Control Register (LCKCON, 8-bit)
PilotIO.CKCON_LCDON               = 0x80;   // bit 7 enables LCD controller if set, disables if clear
PilotIO.LCDREG_LBAR         = 0x29;         // LCD Last Buffer Address Register (LLBAR, 8-bit, normally same as VPW)
PilotIO.LCDREG_OTCR         = 0x2B;         // LCD Octet Terminal Count Register (LOTCR, 8-bit)
PilotIO.LCDREG_POSR         = 0x2D;         // LCD Panning Offset Register (LPOSR, 8-bit)
PilotIO.LCDREG_FRCM         = 0x31;         // LCD Frame-Rate Modulation Control Register (LFRCM, 8-bit)
PilotIO.LCDREG_GPMR         = 0x32;         // LCD Gray Palette Mapping Register (LGPMR, 16-bit)

PilotIO.DEF_SCREEN_WIDTH    = 160;
PilotIO.DEF_SCREEN_HEIGHT   = 160;

PilotIO.DBREG_RHMSR         = 0xB00;        // RTC Hours Minutes Seconds Register (32-bit)
PilotIO.RHMSR_HOURS                 = 0x1f000000;
PilotIO.RHMSR_HOURS_SHIFT           = 24;
PilotIO.RHMSR_MINUTES               = 0x003f0000;
PilotIO.RHMSR_MINUTES_SHIFT         = 16;
PilotIO.RHMSR_SECONDS               = 0x0000003f;
PilotIO.RHMSR_SECONDS_SHIFT         = 0;
PilotIO.DBREG_RALARM        = 0xB04;        // RTC Alarm Register
PilotIO.DBREG_RCTL          = 0xB0C;        // RTC Control Register
PilotIO.DBREG_RISR          = 0xB0E;        // RTC Interrupt Status Register
PilotIO.DBREG_RIENR         = 0xB10;        // RTC Interrupt Enable Register
PilotIO.DBREG_RSTPWCH       = 0xB12;        // RTC Stopwatch Register

PilotIO.regsInit = {};
PilotIO.regsInit.ab = {
    [PilotIO.DBREG_PCTLR]:    0x1F,
    [PilotIO.DBREG_PDPUEN]:   0xFF,
    [PilotIO.DBREG_PEPUEN]:   0x80,
    [PilotIO.DBREG_PESEL]:    0x80,
    [PilotIO.DBREG_PFPUEN]:   0xFF,
    [PilotIO.DBREG_PFSEL]:    0xFF,
    [PilotIO.DBREG_PGPUEN]:   0xFF,
    [PilotIO.DBREG_PGSEL]:    0xFF,
    [PilotIO.DBREG_PKPUEN]:   0x3F,
    [PilotIO.DBREG_PKSEL]:    0x3F,
    [PilotIO.DBREG_PMPUEN]:   0xFF,
    [PilotIO.DBREG_PMSEL]:    0x02
};

PilotIO.regsInit.aw = {
    [PilotIO.DBREG_PLLCR]:    0x2400,
    [PilotIO.DBREG_PLLFSR]:   0x0123,         // sets Q counter to 0x1, P counter to 0x23
    [PilotIO.DBREG_TCMP1]:    0xFFFF,
    [PilotIO.DBREG_TCMP2]:    0xFFFF,
    [PilotIO.DBREG_WCSR]:     0x0001,
    [PilotIO.DBREG_WRR]:      0xFFFF,
    [PilotIO.DBREG_UBAUD]:    0x003F
};

PilotIO.regsInit.al = {
    [PilotIO.DBREG_IMR]:      0x00FFFFFF,
    [PilotIO.DBREG_IWR]:      0x00FFFFFF
};

Object.assign(PilotIO.regsInit.ab, {
    [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_VPW]:    (PilotIO.DEF_SCREEN_WIDTH/8)/2,
    [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_BLKC]:   0x7F,
    [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_CKCON]:  0x40,         // LCD controller initially disabled
    [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_LBAR]:   (PilotIO.DEF_SCREEN_WIDTH/8)/2,   // we initialize this to 10, they seem to prefer 9, hmmm
    [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_OTCR]:   0x3F,
    [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_FRCM]:   0xB9
});

Object.assign(PilotIO.regsInit.aw, {
    [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_XMAX]:   0x03FF,
    [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_YMAX]:   0x01FF,
    [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_CWCH]:   0x0101,
    [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_GPMR]:   0x1073
});

/**
 * MC68EZ328 register reset values (see Table 1-3 of the MC68EZ328 User's Manual)
 */
PilotIO.regsInitEZ = {
    ab: {
        [PilotIO.DBREG_SCR]:      0x1C,
        [PilotIO.DBREG_IDR]:      PilotIO.EZ_CHIPID,
        [PilotIO.DBREG_IDR+1]:    PilotIO.EZ_MASKID,
        [PilotIO.DBREG_PCTLR]:    0x1F,
        [0x402]:                  0xFF,     // PAPUEN
        [0x40A]:                  0xFF,     // PBPUEN
        [0x40B]:                  0xFF,     // PBSEL
        [0x412]:                  0xFF,     // PCPDEN
        [0x413]:                  0xFF,     // PCSEL
        [PilotIO.DBREG_PDPUEN]:   0xFF,
        [0x41B]:                  0xF0,     // PDSEL
        [0x422]:                  0xFF,     // PEPUEN
        [PilotIO.DBREG_PESEL]:    0xFF,
        [0x42A]:                  0xFF,     // PFPUEN
        [PilotIO.DBREG_PGPUEN]:   0x3D,
        [PilotIO.DBREG_PGSEL]:    0x08,
        [0x504]:                  0xFE,     // PWMP
        [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_VPW]:    0xFF,
        [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_BLKC]:   0x7F,
        [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_CKCON]:  0x40,
        [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_LBAR]:   0xFF,     // LRRA on the EZ
        [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_FRCM]:   0xB9,
        [PilotIO.LCDREGS_OFFSET + 0x33]:                  0x84      // LGPMR is 8-bit on the EZ
    },
    aw: {
        [0x110]:                  0x00E0,   // CSA
        [0x116]:                  0x0200,   // CSD
        [0x118]:                  0x0060,   // EMUCS
        [PilotIO.DBREG_PLLCR]:    0x2430,
        [PilotIO.DBREG_PLLFSR]:   0x0123,
        [PilotIO.DBREG_TCMP1]:    0xFFFF,
        [PilotIO.DBREG_PWMC]:     0x0020,
        [PilotIO.DBREG_UBAUD]:    0x003F,
        [0xB0A]:                  0x0001,   // WATCHDOG
        [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_XMAX]:   0x03FF,
        [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_YMAX]:   0x01FF,
        [PilotIO.LCDREGS_OFFSET + PilotIO.LCDREG_CWCH]:   0x0101
    },
    al: {
        [PilotIO.DBREG_IMR]:      0x00FFFFFF
    }
};

PilotIO.CLASSES["PilotIO"] = PilotIO;

/**
 * @copyright https://www.pcjs.org/machines/palm/pilot/modules/v3/sed1375.js (C) 2012-2026 Jeff Parsons
 */

/** @typedef {{ addr: (number|undefined), size: number, type: (number|undefined) }} */
let SED1375Config;

/**
 * @class SED1375
 * @unrestricted
 * @property {SED1375Config} config
 *
 * This is a port of HWLCDEpson1375.java, with improvements based on the S1D13705 (aka SED1375) Hardware
 * Functional Specification (see /machines/palm/pilot/webarchive/epson_com/x27aa001.pdf).
 *
 * On a Palm IIIc, the controller's 80K display buffer begins at 0x1f000000, and its 32 registers begin at offset
 * 0x1ffe0.  We add the display buffer to the bus as ordinary RAM, and then we add one block of our own at the top
 * of the controller's address range, where the registers reside.
 *
 * To support different LCD controllers, the PilotVideo device asks its LCD controller (either this device or
 * PilotIO) for the following information: getLCDStatus(), getBufferAddress(), getBufferStride(), getBPP(), and
 * optionally getPalette().
 */
class SED1375 extends Memory {
    /**
     * SED1375(idMachine, idDevice, config)
     *
     * @this {SED1375}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {SED1375Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        let addrBase = (config['addr'] != undefined? config['addr'] : SED1375.VRAM_BASE) & CPU68K.ADDR_MASK;
        config['type'] = Memory.TYPE.READWRITE;
        config['addr'] = addrBase + SED1375.REGS_OFFSET - (SED1375.REGS_OFFSET % 0x1000);
        config['size'] = 0x1000;
        super(idMachine, idDevice, config);

        this.addrVRAM = addrBase;
        this.offRegs = SED1375.REGS_OFFSET % 0x1000;
        this.abRegs = new Uint8Array(SED1375.REGS_SIZE);
        this.aPalette = new Array(SED1375.MAX_COLORS);
        this.abLUT = new Uint8Array(3);
        this.video = null;

        this.readData = this.getByte;
        this.writeData = this.setByte;
        this.readPair = (offset) => (this.getByte(offset) << 8) | this.getByte(offset + 1);
        this.writePair = (offset, data) => { this.setByte(offset, data >> 8); this.setByte(offset + 1, data); };
        this.readQuad = (offset) => (this.readPair(offset) << 16) | this.readPair(offset + 2);
        this.writeQuad = (offset, data) => { this.writePair(offset, data >>> 16); this.writePair(offset + 2, data & 0xffff); };

        this.bus.addBlocks(this.addrVRAM, SED1375.VRAM_SIZE, Memory.TYPE.READWRITE);
        this.bus.addBlocks(this.config['addr'], this.size, Memory.TYPE.READWRITE, this);

        this.onReset();
    }

    /**
     * setVideo(video)
     *
     * Called by the PilotVideo device, so that we can notify it of LCD state changes.
     *
     * @this {SED1375}
     * @param {Object} video
     */
    setVideo(video)
    {
        this.video = video;
    }

    /**
     * onReset()
     *
     * All registers are reset to zero, except the (read-only) Revision Code register.
     *
     * @this {SED1375}
     */
    onReset()
    {
        this.abRegs.fill(0);
        this.abRegs[SED1375.REG.REVCODE] = SED1375.REVCODE;
        for (let i = 0; i < this.aPalette.length; i++) {
            this.aPalette[i] = [0, 0, 0];
        }
        this.iLUTColor = 0;
        this.resetScreen();
    }

    /**
     * loadState(state)
     *
     * Memory and I/O register states are managed by the Bus onLoad() handler, which calls our loadState() handler.
     *
     * @this {SED1375}
     * @param {Array|undefined} state
     * @returns {boolean}
     */
    loadState(state)
    {
        if (state && state.length >= 3) {
            let abRegs = state.shift(), aPalette = state.shift();
            this.iLUTColor = state.shift();
            if (abRegs && abRegs.length == this.abRegs.length && aPalette && aPalette.length == this.aPalette.length) {
                this.abRegs.set(abRegs);
                this.aPalette = aPalette;
                this.resetScreen();
                return true;
            }
        }
        return false;
    }

    /**
     * saveState(state)
     *
     * @this {SED1375}
     * @param {Array} state
     */
    saveState(state)
    {
        state.push(Array.from(this.abRegs));
        state.push(this.aPalette);
        state.push(this.iLUTColor);
    }

    /**
     * getByte(offset)
     *
     * @this {SED1375}
     * @param {number} offset (within our block)
     * @returns {number}
     */
    getByte(offset)
    {
        let reg = offset - this.offRegs;
        if (reg < 0 || reg >= SED1375.REGS_SIZE) return 0;
        let data = this.abRegs[reg];
        switch(reg) {
        case SED1375.REG.VNDP:
            //
            // Routines like PrvUpdateCLUT wait for the "Vertical Non-Display" status bit, so we toggle it on every read.
            //
            this.abRegs[reg] ^= SED1375.VNDP_STATUS;
            break;
        case SED1375.REG.LUTDATA:
            data = (this.aPalette[this.abRegs[SED1375.REG.LUTADDR]][this.iLUTColor] & 0xf0);
            this.advanceLUT();
            break;
        }
        this.printf(MESSAGE.VIDEO, "SED1375.getByte(%#04x): %#04x\n", reg, data);
        return data;
    }

    /**
     * setByte(offset, data)
     *
     * @this {SED1375}
     * @param {number} offset (within our block)
     * @param {number} data
     */
    setByte(offset, data)
    {
        let reg = offset - this.offRegs;
        if (reg < 0 || reg >= SED1375.REGS_SIZE) return;
        data &= 0xff;
        this.printf(MESSAGE.VIDEO, "SED1375.setByte(%#04x,%#04x)\n", reg, data);
        switch(reg) {
        case SED1375.REG.REVCODE:
            return;                 // read-only
        case SED1375.REG.VNDP:
            data = (data & ~SED1375.VNDP_STATUS) | (this.abRegs[reg] & SED1375.VNDP_STATUS);
            break;
        case SED1375.REG.LUTADDR:
            this.iLUTColor = 0;     // writing the LUT address register always selects the red component first
            break;
        case SED1375.REG.LUTDATA:
            //
            // Each LUT entry has 4 bits per component, which are written to bits 7-4; once the blue component of
            // an entry has been written, the entire entry is updated.  The 4-bit components are replicated in the
            // low nibble when converted to 8-bit RGB values.
            //
            this.abLUT[this.iLUTColor] = data & 0xf0;
            if (this.iLUTColor == 2) {
                let iEntry = this.abRegs[SED1375.REG.LUTADDR];
                this.aPalette[iEntry] = [this.abLUT[0], this.abLUT[1], this.abLUT[2]];
                if (this.video) this.video.initCache();
            }
            this.advanceLUT();
            return;
        }
        let dataPrev = this.abRegs[reg];
        this.abRegs[reg] = data;
        if (dataPrev != data && SED1375.SCREEN_REGS.indexOf(reg) >= 0) {
            this.resetScreen();
        }
    }

    /**
     * advanceLUT()
     *
     * Every access to the LUT data register advances to the next component (red, green, blue) of the current
     * entry, and after blue, to the red component of the next entry.
     *
     * @this {SED1375}
     */
    advanceLUT()
    {
        if (++this.iLUTColor > 2) {
            this.iLUTColor = 0;
            this.abRegs[SED1375.REG.LUTADDR] = (this.abRegs[SED1375.REG.LUTADDR] + 1) & 0xff;
        }
    }

    /**
     * getLCDStatus()
     *
     * The display is on if the controller is in "Normal Operation" (not Power Save) mode and the display isn't blanked.
     *
     * @this {SED1375}
     * @returns {boolean}
     */
    getLCDStatus()
    {
        if ((this.abRegs[SED1375.REG.MODE2] & SED1375.MODE2_POWERSAVE) != SED1375.MODE2_POWERSAVE) return false;
        if (this.abRegs[SED1375.REG.MODE1] & SED1375.MODE1_BLANK) return false;
        return true;
    }

    /**
     * getBPP()
     *
     * @this {SED1375}
     * @returns {number} (1, 2, 4 or 8)
     */
    getBPP()
    {
        return 1 << ((this.abRegs[SED1375.REG.MODE1] & SED1375.MODE1_BPP) >> SED1375.MODE1_BPP_SHIFT);
    }

    /**
     * getBufferAddress()
     *
     * In landscape mode, the Screen 1 Start Address registers contain a word address.
     *
     * @this {SED1375}
     * @returns {number}
     */
    getBufferAddress()
    {
        let wAddr = this.abRegs[SED1375.REG.S1ADDRLO] | (this.abRegs[SED1375.REG.S1ADDRHI] << 8);
        return this.addrVRAM + wAddr * 2;
    }

    /**
     * getBufferStride()
     *
     * Returns the number of bytes per scanline, which is the panel width (in pixels) times the bits-per-pixel,
     * divided by 8, plus the Memory Address Offset (which is in words).
     *
     * @this {SED1375}
     * @returns {number}
     */
    getBufferStride()
    {
        let cxPanel = ((this.abRegs[SED1375.REG.HPS] & 0x7f) + 1) * 8;
        return ((cxPanel * this.getBPP()) >> 3) + this.abRegs[SED1375.REG.MAOFF] * 2;
    }

    /**
     * getPalette()
     *
     * Returns an array of RGB values for every pixel value at the current color depth.  Monochrome (passive) panels
     * use only the green LUT, and the Software Video Invert bit inverts the data after the LUT.
     *
     * @this {SED1375}
     * @returns {Array.<Array.<number>>}
     */
    getPalette()
    {
        let aColors = [];
        let nColors = 1 << this.getBPP();
        let fMono = !(this.abRegs[SED1375.REG.MODE0] & (SED1375.MODE0_TFT | SED1375.MODE0_COLOR));
        let fInvert = !!(this.abRegs[SED1375.REG.MODE1] & SED1375.MODE1_INVERT);
        for (let i = 0; i < nColors; i++) {
            let rgb = this.aPalette[i];
            let r = rgb[0] | (rgb[0] >> 4), g = rgb[1] | (rgb[1] >> 4), b = rgb[2] | (rgb[2] >> 4);
            if (fMono) r = b = g;
            if (fInvert) {
                r = 0xff - r; g = 0xff - g; b = 0xff - b;
            }
            aColors.push([r, g, b]);
        }
        return aColors;
    }

    /**
     * resetScreen()
     *
     * Notify the video device (if any) that the LCD state has changed.
     *
     * @this {SED1375}
     */
    resetScreen()
    {
        if (this.video) this.video.resetScreen();
    }
}

SED1375.VRAM_BASE           = 0x1f000000;
SED1375.VRAM_SIZE           = 0x00014000;   // 80K display buffer
SED1375.REGS_OFFSET         = 0x0001ffe0;
SED1375.REGS_SIZE           = 0x20;
SED1375.MAX_COLORS          = 256;
SED1375.REVCODE             = 0x24;         // product code 001001b, revision code 00b

SED1375.REG = {
    REVCODE:    0x00,       // Revision Code Register (read-only)
    MODE0:      0x01,       // Mode Register 0
    MODE1:      0x02,       // Mode Register 1
    MODE2:      0x03,       // Mode Register 2
    HPS:        0x04,       // Horizontal Panel Size Register ((width / 8) - 1)
    VPSLO:      0x05,       // Vertical Panel Size Register (LSB) (height - 1)
    VPSHI:      0x06,       // Vertical Panel Size Register (MSB)
    FPLSP:      0x07,       // FPLINE Start Position
    HNDP:       0x08,       // Horizontal Non-Display Period
    FPFSP:      0x09,       // FPFRAME Start Position
    VNDP:       0x0a,       // Vertical Non-Display Period
    MODRATE:    0x0b,       // MOD Rate Register
    S1ADDRLO:   0x0c,       // Screen 1 Start Address Register (LSB)
    S1ADDRHI:   0x0d,       // Screen 1 Start Address Register (MSB)
    S2ADDRLO:   0x0e,       // Screen 2 Start Address Register (LSB)
    S2ADDRHI:   0x0f,       // Screen 2 Start Address Register (MSB)
    S1ADDRBIT:  0x10,       // Screen Start Address Overflow Register
    MAOFF:      0x11,       // Memory Address Offset Register (in words)
    S1VSLO:     0x12,       // Screen 1 Vertical Size Register (LSB)
    S1VSHI:     0x13,       // Screen 1 Vertical Size Register (MSB)
    LUTADDR:    0x15,       // Look-Up Table Address Register
    LUTDATA:    0x17,       // Look-Up Table Data Register
    GPIOCONF:   0x18,       // GPIO Configuration Control Register
    GPIOSTAT:   0x19,       // GPIO Status/Control Register
    SCRATCH:    0x1a,       // Scratch Pad Register
    SWIVEL:     0x1b,       // SwivelView Mode Register
    LBCR:       0x1c        // Line Byte Count Register (SwivelView mode only)
};

SED1375.MODE0_TFT           = 0x80;         // TFT (active) panel if set, STN (passive) if clear
SED1375.MODE0_DUAL          = 0x40;
SED1375.MODE0_COLOR         = 0x20;         // color (passive) panel if set, monochrome if clear
SED1375.MODE1_BPP           = 0xc0;         // 00=1BPP, 01=2BPP, 10=4BPP, 11=8BPP
SED1375.MODE1_BPP_SHIFT     = 6;
SED1375.MODE1_BLANK         = 0x08;         // display blank
SED1375.MODE1_INVERT        = 0x01;         // software video invert
SED1375.MODE2_POWERSAVE     = 0x03;         // 00=Software Power Save, 11=Normal Operation
SED1375.VNDP_STATUS         = 0x80;         // set during the vertical non-display period

/**
 * Changes to any of these registers require the video device to recompute the screen characteristics.
 */
SED1375.SCREEN_REGS = [
    SED1375.REG.MODE0, SED1375.REG.MODE1, SED1375.REG.MODE2, SED1375.REG.HPS,
    SED1375.REG.S1ADDRLO, SED1375.REG.S1ADDRHI, SED1375.REG.MAOFF
];

SED1375.CLASSES["SED1375"] = SED1375;

/**
 * @copyright https://www.pcjs.org/machines/palm/pilot/modules/v3/video.js (C) 2012-2026 Jeff Parsons
 */

/** @typedef {{ bus: string, bufferWidth: number, bufferHeight: number, pixelColor: (string|undefined), refreshRate: (number|undefined) }} */
let PilotVideoConfig;

/**
 * @class PilotVideo
 * @unrestricted
 * @property {PilotVideoConfig} config
 *
 * This is a port of DeviceScreen.java, which displays the contents of the LCD frame buffer, whose location
 * and format are determined by the DragonBall LCD controller registers (see PilotIO).
 */
class PilotVideo extends Monitor {
    /**
     * PilotVideo(idMachine, idDevice, config)
     *
     * The PilotVideo component can be configured with the following config properties:
     *
     *      bufferWidth: the width of the LCD, in pixels (eg, 160)
     *      bufferHeight: the height of the LCD, in pixels (eg, 160)
     *      monitorColor: the color of the LCD background (ie, a pixel with a value of zero)
     *      pixelColor: the color of an LCD pixel at maximum intensity
     *      refreshRate: how many times updateMonitor() should be performed per second (eg, 60)
     *
     * Unlike the frame buffers of most other machines, the location of the Pilot's frame buffer is programmable
     * (and is normally located in RAM), so we have no fixed buffer address.
     *
     * @this {PilotVideo}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {ROMConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        this.cxScreen = this.config['bufferWidth'] || 160;
        this.cyScreen = this.config['bufferHeight'] || 160;
        this.rateRefresh = this.config['refreshRate'] || 60;

        this.busMemory = /** @type {Bus} */ (this.findDevice(this.config['bus']));
        this.time = /** @type {Time} */ (this.findDeviceByClass("Time"));
        this.io = /** @type {PilotIO} */ (this.findDeviceByClass("PilotIO"));

        /**
         * The LCD controller (eg, SED1375) is optional; if none is specified, the DragonBall's own LCD controller
         * (ie, PilotIO) is used.  Either way, the LCD controller must provide getLCDStatus(), getBufferAddress(),
         * getBufferStride(), getBPP(), and optionally getPalette() (otherwise, the gray palette below is used).
         */
        this.lcd = this.config['lcd']? /** @type {Object} */ (this.findDevice(this.config['lcd'])) : this.io;

        /**
         * fEnabled records whether or not the machine has powered us; for the LCD to display anything, it must
         * be enabled AND the LCD hardware must be enabled (see resetScreen()).
         */
        this.fEnabled = false;
        this.fLCDOn = false;
        this.cBPP = 1;
        this.aCache = null;
        this.fCacheValid = false;

        this.imageBuffer = this.contextMonitor.createImageData(this.cxScreen, this.cyScreen);
        this.canvasBuffer = document.createElement("canvas");
        this.canvasBuffer.width = this.cxScreen;
        this.canvasBuffer.height = this.cyScreen;
        this.contextBuffer = this.canvasBuffer.getContext("2d");

        /**
         * Since there's always a large disparity between the size of the LCD and the size of the monitor,
         * we disable image smoothing by default, unless the config (or URL) explicitly enables it.
         */
        if (this.sSmoothing) {
            this.contextMonitor[this.sSmoothing] = (this.fSmoothing == null? false : this.fSmoothing);
        }

        this.rgbBackground = this.parseColor(this.config['monitorColor'], [0x77, 0x8b, 0x76]);
        this.rgbPixel = this.parseColor(this.config['pixelColor'], [0x2e, 0x3a, 0x44]);
        this.initColors();

        this.timerUpdateNext = this.time.addTimer(this.idDevice, this.updateMonitor.bind(this));
        this.time.addUpdate(this);
        this.time.setTimer(this.timerUpdateNext, this.getRefreshTime());

        this.io.setVideo(this);
        if (this.lcd != this.io) this.lcd.setVideo(this);
        this.blankMonitor();
    }

    /**
     * parseColor(sColor, rgbDefault)
     *
     * @this {PilotVideo}
     * @param {string|undefined} sColor (eg, "#778b76")
     * @param {Array.<number>} rgbDefault
     * @returns {Array.<number>}
     */
    parseColor(sColor, rgbDefault)
    {
        let match = sColor && sColor.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
        if (match) {
            return [parseInt(match[1], 16), parseInt(match[2], 16), parseInt(match[3], 16)];
        }
        return rgbDefault;
    }

    /**
     * initColors()
     *
     * Creates an array of 16 colors, ranging from the LCD background color (intensity 0) to the pixel color
     * (intensity 15).  1BPP pixels use only the first and last colors, while 2BPP pixels are mapped through
     * the LCD controller's gray palette (see getPixelColors()).
     *
     * The Java implementation created a 256-color palette, but that was just to work around problems with
     * 4-bit color models in older JDKs.
     *
     * @this {PilotVideo}
     */
    initColors()
    {
        this.aRGB = new Array(16);
        for (let i = 0; i < this.aRGB.length; i++) {
            let rgb = [0, 0, 0, 0xff];
            for (let j = 0; j < 3; j++) {
                rgb[j] = Math.round(this.rgbBackground[j] + (this.rgbPixel[j] - this.rgbBackground[j]) * i / 15);
            }
            this.aRGB[i] = rgb;
        }
    }

    /**
     * getPixelColors()
     *
     * Returns an array of RGB values for each possible pixel value at the current color depth.
     *
     * For 2BPP modes, the 16-bit GPMR (Gray Palette Mapping Register) describes the intensity of pixels 00, 01, 10,
     * and 11 in bits 8-11, 12-15, 0-3, and 4-7, respectively; intensities range from 0 to 7.
     *
     * @this {PilotVideo}
     * @returns {Array.<Array.<number>>}
     */
    getPixelColors()
    {
        if (this.lcd.getPalette) return this.lcd.getPalette();
        let aColors = [];
        if (this.cBPP == 2) {
            let gpmr = this.io.getGrayPalette();
            let anShifts = [8, 12, 0, 4];
            for (let i = 0; i < 4; i++) {
                let level = Math.min((gpmr >> anShifts[i]) & 0xf, 7);
                aColors.push(this.aRGB[Math.round(level * 15 / 7)]);
            }
        } else {
            let nColors = 1 << this.cBPP;
            for (let i = 0; i < nColors; i++) {
                aColors.push(this.aRGB[Math.round(i * 15 / (nColors - 1))]);
            }
        }
        return aColors;
    }

    /**
     * blankMonitor()
     *
     * Overrides the Monitor's blankMonitor(), because a blank LCD isn't black.
     *
     * @this {PilotVideo}
     */
    blankMonitor()
    {
        if (this.contextMonitor) {
            let rgb = this.rgbBackground;
            this.contextMonitor.fillStyle = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
            this.contextMonitor.fillRect(0, 0, this.canvasMonitor.width, this.canvasMonitor.height);
        }
    }

    /**
     * getRefreshTime()
     *
     * @this {PilotVideo}
     * @returns {number} (number of milliseconds per refresh)
     */
    getRefreshTime()
    {
        return 1000 / this.rateRefresh;
    }

    /**
     * initCache()
     *
     * Invalidates our copy of the frame buffer, forcing the next updateScreen() to redraw everything.
     *
     * @this {PilotVideo}
     */
    initCache()
    {
        this.fCacheValid = false;
    }

    /**
     * onPower(on)
     *
     * Called by the Machine device to provide notification of a power event (the equivalent of DeviceScreen.Enable()).
     *
     * @this {PilotVideo}
     * @param {boolean} on (true to power on, false to power off)
     */
    onPower(on)
    {
        if (this.fEnabled != on) {
            this.fEnabled = on;
            this.resetScreen();
        }
    }

    /**
     * onReset()
     *
     * Called by the Machine device to provide notification of a reset event.
     *
     * @this {PilotVideo}
     */
    onReset()
    {
        this.resetScreen();
    }

    /**
     * onUpdate(fTransition)
     *
     * This is our obligatory update() function, which every device with visual components should have.
     *
     * For the video device, our sole function is making sure the screen display is up-to-date.  However, calling
     * updateScreen() is a bad idea if the machine is running, because we already have a timer to take care of
     * that.  But we can also be called when the machine is NOT running (eg, the Debugger may be stepping through
     * some code, or editing the frame buffer directly, or something else).  Since we have no way of knowing, we
     * must force an update.
     *
     * @this {PilotVideo}
     * @param {boolean} [fTransition]
     */
    onUpdate(fTransition)
    {
        if (!this.time.isRunning()) this.updateScreen();
    }

    /**
     * resetScreen()
     *
     * Recompute screen characteristics, and then enable or disable the screen, and refresh as appropriate
     * (the equivalent of DeviceScreen.Reset()).  This is called whenever the LCD hardware state changes, and
     * whenever power is applied or removed.
     *
     * @this {PilotVideo}
     */
    resetScreen()
    {
        this.fLCDOn = this.fEnabled && this.lcd.getLCDStatus();
        if (!this.fLCDOn) {
            this.printf(MESSAGE.VIDEO, "LCD off\n");
            this.blankMonitor();
            return;
        }
        this.cBPP = this.lcd.getBPP();
        this.printf(MESSAGE.VIDEO, "LCD on: %d BPP at %#010x\n", this.cBPP, this.lcd.getBufferAddress());
        this.initCache();
        this.updateScreen();
    }

    /**
     * updateMonitor()
     *
     * Our periodic "refresh" timer callback.
     *
     * @this {PilotVideo}
     */
    updateMonitor()
    {
        this.time.setTimer(this.timerUpdateNext, this.getRefreshTime());
        this.updateScreen();
    }

    /**
     * updateScreen()
     *
     * Check the screen buffer for changes, and then refresh the monitor (the equivalent of DeviceScreen.CheckBuffer()).
     *
     * Every byte of the frame buffer is compared to the byte in our cache, and any differences are propagated to
     * imageBuffer, while also updating the dirty rectangle; then only the dirty portion of imageBuffer is copied
     * to canvasBuffer, which is then drawn onto the monitor.
     *
     * @this {PilotVideo}
     */
    updateScreen()
    {
        if (!this.fLCDOn) return;

        let addrBuffer = this.lcd.getBufferAddress();
        let cbRow = this.lcd.getBufferStride();
        let cbBuffer = cbRow * this.cyScreen;
        if (!this.aCache || this.aCache.length != cbBuffer || this.cBPPCache != this.cBPP) {
            this.cBPPCache = this.cBPP;
            this.aCache = new Uint8Array(cbBuffer);
            this.fCacheValid = false;
        }

        let nPixelsPerByte = 8 / this.cBPP;
        let nMask = (1 << this.cBPP) - 1;
        let aColors = this.getPixelColors();
        let data = this.imageBuffer.data;
        let xDirty = this.cxScreen, xMaxDirty = 0, yDirty = this.cyScreen, yMaxDirty = 0;

        for (let y = 0, off = 0; y < this.cyScreen; y++) {
            for (let x = 0, offRow = off; x < this.cxScreen; x += nPixelsPerByte, offRow++) {
                let b = this.busMemory.readData((addrBuffer + offRow) & CPU68K.ADDR_MASK);
                if (this.fCacheValid && b === this.aCache[offRow]) continue;
                this.aCache[offRow] = b;
                for (let i = 0, nShift = 8 - this.cBPP; i < nPixelsPerByte; i++, nShift -= this.cBPP) {
                    let rgb = aColors[(b >> nShift) & nMask];
                    let index = ((y * this.cxScreen) + x + i) * 4;
                    data[index] = rgb[0];
                    data[index+1] = rgb[1];
                    data[index+2] = rgb[2];
                    data[index+3] = 0xff;
                }
                if (x < xDirty) xDirty = x;
                if (x + nPixelsPerByte > xMaxDirty) xMaxDirty = x + nPixelsPerByte;
                if (y < yDirty) yDirty = y;
                if (y >= yMaxDirty) yMaxDirty = y + 1;
            }
            off += cbRow;
        }
        this.fCacheValid = true;

        if (xDirty < xMaxDirty) {
            this.contextBuffer.putImageData(this.imageBuffer, 0, 0, xDirty, yDirty, xMaxDirty - xDirty, yMaxDirty - yDirty);
            /**
             * As originally noted in /machines/pcx86/modules/v2/video.js, I would prefer to draw only the dirty portion
             * of canvasBuffer, but there usually isn't a 1-1 pixel mapping between canvasBuffer and contextMonitor, so
             * if we draw interior rectangles, we can end up with subpixel artifacts along the edges of those rectangles.
             */
            this.contextMonitor.drawImage(this.canvasBuffer, 0, 0, this.canvasBuffer.width, this.canvasBuffer.height, 0, 0, this.cxMonitor, this.cyMonitor);
        }
    }
}

PilotVideo.CLASSES["PilotVideo"] = PilotVideo;

/**
 * @copyright https://www.pcjs.org/machines/modules/v3/machine.js (C) 2012-2026 Jeff Parsons
 */

/**
 * @class Machine
 * @unrestricted
 * @property {CPU} cpu
 * @property {string} sConfigFile
 * @property {boolean} fConfigLoaded
 * @property {boolean} fPageLoaded
 * @property {string|null|undefined} sStateInit
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
        this.sStateInit = undefined;    // contents of the machine's initial state file, if any (see initDevices())
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
        this.messages = Device.DEBUG? MESSAGE.WARNING : MESSAGE.DEFAULT;

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
            /**
             * If the machine has an initial state file (eg, a 'state' property in the page's machine Front Matter),
             * make sure we have it before initializing any devices; sStateInit is undefined until the request is made,
             * null while the request is pending, and a string (empty if the request failed) when it's complete.
             */
            let sStateFile = this.config['state'];
            if (sStateFile && typeof this.sStateInit != "string") {
                if (this.sStateInit === undefined) {
                    let machine = this;
                    this.sStateInit = null;
                    this.getResource(sStateFile, function onLoadState(sURL, sResource, readyState, nErrorCode) {
                        if (readyState == 4) {
                            machine.sStateInit = "";
                            if (!nErrorCode && sResource) {
                                try {
                                    JSON.parse(sResource);
                                    machine.sStateInit = sResource;
                                } catch(err) {
                                    machine.printf("error parsing state file %s: %s\n", sURL, err.message);
                                }
                            } else {
                                machine.printf("error (%d) loading state file: %s\n", nErrorCode, sURL);
                            }
                            machine.initDevices();
                        }
                    });
                }
                return;
            }
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
            /**
             * Any state saved in localStorage takes precedence over the machine's initial state file (if any).
             */
            let state = this.fAutoSave? this.loadLocalStorage() : null;
            if (!state && this.sStateInit) {
                state = JSON.parse(this.sStateInit);
                this.printf("Initial state: %s\n", this.config['state']);
            }
            if (state) {
                this.loadState(state);
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
                 * Machine object within the config using the name of the config file itself, or failing that,
                 * the config's only Machine object, and if that succeeds, then we'll rename the Machine object
                 * within the config using the actual ID (preserving its position within the config).
                 */
                let id = this.getBaseName(this.sConfigFile, true);
                config = this.deviceConfigs[id];
                if (!config) {
                    let ids = Object.keys(this.deviceConfigs).filter((idConfig) => this.deviceConfigs[idConfig]['class'] == "Machine");
                    if (ids.length == 1) {
                        id = ids[0];
                        config = this.deviceConfigs[id];
                    }
                }
                if (!config) {
                    throw new Error("configuration missing machine ID");
                }
                let configs = {};
                for (let idConfig in this.deviceConfigs) {
                    configs[idConfig == id? this.idMachine : idConfig] = this.deviceConfigs[idConfig];
                }
                this.deviceConfigs = configs;
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
            this.printf("machine '%s' initialization error: %s\n", this.idMachine, sError);
        }
    }

    /**
     * loadState(state)
     *
     * Calls the onLoad() handler of every device, stopping at the first device unable to restore its state.
     *
     * @this {Machine}
     * @param {Array|null} state
     * @returns {boolean}
     */
    loadState(state)
    {
        let success = true;
        this.enumDevices(function onDeviceLoad(device) {
            if (device.onLoad) {
                if (!device.onLoad(state)) {
                    device.printf('unable to restore state for device "%s"\n', device.idDevice);
                    success = false;
                    return false;
                }
            }
            return true;
        });
        return success;
    }

    /**
     * saveState()
     *
     * Calls the onSave() handler of every device, returning the combined state of the machine.
     *
     * @this {Machine}
     * @returns {Array}
     */
    saveState()
    {
        let state = [];
        this.enumDevices(function onDeviceSave(device) {
            if (device.onSave) {
                device.onSave(state);
            }
            return true;
        });
        return state;
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
            if (on) this.printf("power on\n");
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
            if (!on) this.printf("power off\n");
        }
    }

    /**
     * onReset()
     *
     * If the machine has an initial state file, then after all devices have been reset, that state is restored,
     * so that the machine reverts to its initial state rather than its default state.
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
            this.printf("reset\n");
            if (this.sStateInit) {
                if (this.loadState(JSON.parse(this.sStateInit))) {
                    this.printf("Initial state restored: %s\n", this.config['state']);
                }
            }
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
            this.saveLocalStorage(this.saveState());
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
