/**
 * @copyright https://www.pcjs.org/machines/modules/v3/defines.js (C) 2012-2025 Jeff Parsons
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

const COPYRIGHT = "Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>";

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
 * @copyright https://www.pcjs.org/machines/modules/v3/message.js (C) 2012-2025 Jeff Parsons
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
 * @copyright https://www.pcjs.org/machines/modules/v3/stdlib.js (C) 2012-2025 Jeff Parsons
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
        if (aComp.length >= aSrc.length) return aSrc;
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
 * @copyright https://www.pcjs.org/machines/modules/v3/stdio.js (C) 2012-2025 Jeff Parsons
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
 * @copyright https://www.pcjs.org/machines/modules/v3/webio.js (C) 2012-2025 Jeff Parsons
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
 * @copyright https://www.pcjs.org/machines/modules/v3/device.js (C) 2012-2025 Jeff Parsons
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
 * @copyright https://www.pcjs.org/machines/modules/v3/input.js (C) 2012-2025 Jeff Parsons
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
 * @copyright https://www.pcjs.org/machines/modules/v3/led.js (C) 2012-2025 Jeff Parsons
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
 * @copyright https://www.pcjs.org/machines/modules/v3/time.js (C) 2012-2025 Jeff Parsons
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
 * @copyright https://www.pcjs.org/machines/modules/v3/bus.js (C) 2012-2025 Jeff Parsons
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
 * @copyright https://www.pcjs.org/machines/modules/v3/memory.js (C) 2012-2025 Jeff Parsons
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
 * @copyright https://www.pcjs.org/machines/modules/v3/ports.js (C) 2012-2025 Jeff Parsons
 */

/** @typedef {{ addr: (number|undefined), size: number }} */
let PortsConfig;

/**
 * @class Ports
 * @unrestricted
 * @property {PortsConfig} config
 * @property {number} addr
 * @property {number} size
 * @property {number} type
 * @property {Array.<function(number)>} aInData
 * @property {Array.<function(number,number)>} aOutData
 * @property {Array.<function(number,boolean)>} aInPair
 * @property {Array.<function(number,number)>} aOutPair
 */
class Ports extends Memory {
    /**
     * Ports(idMachine, idDevice, config)
     *
     * @this {Ports}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {PortsConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);
        this.aInData = [];
        this.aOutData = [];
        this.aInPair = [];
        this.aOutPair = [];
        /**
         * Some machines instantiate a Ports device through their configuration, which must include an 'addr';
         * it's also possible that a device may dynamically allocate a Ports device and add it to the Bus itself
         * (eg, the PDP11 IOPage).
         */
        if (this.config['addr'] != undefined) {
            this.bus.addBlocks(this.config['addr'], this.config['size'], Memory.TYPE.NONE, this);
        }
    }

    /**
     * addIOHandlers(device, portLo, portHi, inData, outData, inPair, outPair)
     *
     * @this {Ports}
     * @param {Device} device
     * @param {number} portLo
     * @param {number} portHi
     * @param {function(number)|null} [inData]
     * @param {function(number,number)|null} [outData]
     * @param {function(number,boolean)|null} [inPair]
     * @param {function(number,number)|null} [outPair]
     */
    addIOHandlers(device, portLo, portHi, inData, outData, inPair, outPair)
    {
        let port, success;
        for (port = portLo; port <= portHi; port++) {
            success = false;
            if (inData) {
                if (this.aInData[port]) break;
                this.aInData[port] = inData.bind(device);
            }
            if (outData) {
                if (this.aOutData[port]) break;
                this.aOutData[port] = outData.bind(device);
            }
            if (inPair) {
                if (this.aInPair[port]) break;
                this.aInPair[port] = inPair.bind(device);
            }
            if (outPair) {
                if (this.aOutPair[port]) break;
                this.aOutPair[port] = outPair.bind(device);
            }
            success = true;
        }
        if (!success) {
            throw new Error(this.sprintf("handler for port %#0x already exists", port));
        }
    }

    /**
     * addIOTable(device, table, portBase)
     *
     * @this {Ports}
     * @param {Device} device
     * @param {Object} table
     * @param {number} [portBase]
     */
    addIOTable(device, table, portBase = 0)
    {
        for (let port in table) {
            let handlers = table[port];
            this.addIOHandlers(device, +port + portBase, +port + portBase, handlers[0], handlers[1], handlers[2], handlers[3]);
        }
    }

    /**
     * readNone(offset)
     *
     * This overrides the default readNone() function, which is the default handler for all I/O ports.
     *
     * @this {Ports}
     * @param {number} offset
     * @returns {number}
     */
    readNone(offset)
    {
        let func, port = this.addr + offset, value, read;
        if ((func = this.aInData[port])) {
            value = func(port);
            read = true;
        }
        else if ((func = this.aInPair[port])) {
            if (!(port & 0x1)) {
                value = func(port) & this.dataLimit;
                read = true;
            } else {
                value = func(port & ~0x1) >> this.dataWidth;
                read = true;
            }
        }
        else if (port & 0x1) {
            port &= ~0x1;
            if ((func = this.aInPair[port])) {
                value = func(port) >> this.dataWidth;
                read = true;
            }
            else if ((func = this.aInData[port])) {
                value = func(port);
                read = true;
            }
        }
        if (!read) {
            this.bus.fault(port, 0);
            this.printf(MESSAGE.PORTS + MESSAGE.MISC, "readNone(%#04x): unknown port\n", port);
            value = super.readNone(offset);
        }
        return value;
    }

    /**
     * writeNone(offset, value)
     *
     * This overrides the default writeNone() function, which is the default handler for all I/O ports.
     *
     * @this {Ports}
     * @param {number} offset
     * @param {number} value
     */
    writeNone(offset, value)
    {
        let func, port = this.addr + offset, written;
        if ((func = this.aOutData[port])) {
            func(port, value);
            written = true;
        }
        else if ((func = this.aOutPair[port])) {
            /**
             * If an outPair() handler exists, call the inPair() handler first to get the original data
             * (with preWrite set to true) and call outPair() with the new data inserted into the original data.
             */
            let data = this.aInPair[port]? this.aInPair[port](port, true) : 0;
            if (!(port & 0x1)) {
                func(port, (data & ~this.dataLimit) | value);
                written = true;
            } else {
                func(port, (data & this.dataLimit) | (value << this.dataWidth));
                written = true;
            }
        }
        else if (port & 0x1) {
            port &= ~0x1;
            if ((func = this.aOutPair[port])) {
                let data = this.aInPair[port]? this.aInPair[port](port, true) : 0;
                func(port, (data & this.dataLimit) | (value << this.dataWidth));
                written = true;
            }
            else if ((func = this.aOutData[port])) {
                func(port, value);
                written = true;
            }
        }
        if (!written) {
            this.bus.fault(port, 1);
            this.printf(MESSAGE.PORTS + MESSAGE.MISC, "writeNone(%#04x,%#04x): unknown port\n", port, value);
            super.writeNone(offset, value);
        }
    }
}

Ports.CLASSES["Ports"] = Ports;

/**
 * @copyright https://www.pcjs.org/machines/modules/v3/ram.js (C) 2012-2025 Jeff Parsons
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
 * @copyright https://www.pcjs.org/machines/modules/v3/rom.js (C) 2012-2025 Jeff Parsons
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
 * @copyright https://www.pcjs.org/machines/modules/v3/cpu.js (C) 2012-2025 Jeff Parsons
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
 * @copyright https://www.pcjs.org/machines/modules/v3/debugger.js (C) 2012-2025 Jeff Parsons
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
    stopCPU(message, args)
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
                data |= (b << (iByte++ << 3));
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
 * @copyright https://www.pcjs.org/machines/dec/pdp11/modules/v3/pdp11ops.js (C) 2012-2025 Jeff Parsons
 */

/**
 * @class PDP11Ops
 * @unrestricted
 */
class PDP11Ops extends CPU {
    /**
     * PDP11Ops(idMachine, idDevice, config)
     *
     * Decoding starts near the bottom of this file, in op1120() and op1140().  Obviously, there are
     * MANY more PDP-11 models than the 11/20 and 11/40, but for the broad model categories that PDPjs
     * supports (ie, MODEL_1120, MODEL_1140, MODEL_1145, and MODEL_1170), the biggest differences are
     * between MODEL_1120 and MODEL_1140, so decoding is divided into those two categories, and all
     * other differences are handled inside the opcode handlers.
     *
     * The basic decoding approach is to dispatch on the top 4 bits of the opcode, and if further
     * decoding is required, the dispatched function will dispatch on the next 4 bits, and so on
     * (although some of the intermediate levels dispatch only on 2 bits, which could also be handled
     * with a switch statement).
     *
     * Eventually, every opcode should end up either in an opXXX() function or opUndefined().  For
     * opcodes that perform a simple read or write operation, the entire operation is handled by
     * the opXXX() function.  For opcodes that perform a more extensive read/modify/write operation
     * (also known as an update operation), those opXXX() functions usually rely on a corresponding
     * fnXXX() helper function.
     *
     * For example, opADD() passes the helper function fnADD() to the appropriate update method.  This
     * allows the update method to perform the entire read/modify/write operation, because the modify
     * step is performed internally, via the fnXXX() helper function.
     *
     * For the handful of instructions in the 1140 tables that actually exist only on the 11/45 and
     * 11/70 (ie, MFPD, MTPD, and SPL), those opcode handlers perform their own model checks.  That's
     * simpler than creating additional tables, and seems fine for instructions that are not commonly
     * executed.
     *
     * @this {PDP11Ops}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);
    }

    /**
     * fnADD(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src
     * @param {number} dst
     * @returns {number} (dst + src)
     */
    static fnADD(src, dst)
    {
        let result = dst + src;
        this.updateAddFlags(result, src, dst);
        return result & 0xffff;
    }

    /**
     * fnADDB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src
     * @param {number} dst
     * @returns {number} (dst + src)
     */
    static fnADDB(src, dst)
    {
        let result = dst + src;
        this.updateAddFlags(result << 8, src << 8, dst << 8);
        return result & 0xff;
    }

    /**
     * fnASL(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ignored)
     * @param {number} dst
     * @returns {number} (dst << 1)
     */
    static fnASL(src, dst)
    {
        let result = dst << 1;
        this.updateShiftFlags(result);
        return result & 0xffff;
    }

    /**
     * fnASLB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ignored)
     * @param {number} dst
     * @returns {number} (dst << 1)
     */
    static fnASLB(src, dst)
    {
        let result = dst << 1;
        this.updateShiftFlags(result << 8);
        return result & 0xff;
    }

    /**
     * fnASR(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ignored)
     * @param {number} dst
     * @returns {number} (dst >> 1)
     */
    static fnASR(src, dst)
    {
        let result = (dst & 0x8000) | (dst >> 1) | (dst << 16);
        this.updateShiftFlags(result);
        return result & 0xffff;
    }

    /**
     * fnASRB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ignored)
     * @param {number} dst
     * @returns {number} (dst >> 1)
     */
    static fnASRB(src, dst)
    {
        let result = (dst & 0x80) | (dst >> 1) | (dst << 8);
        this.updateShiftFlags(result << 8);
        return result & 0xff;
    }

    /**
     * fnBIC(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src
     * @param {number} dst
     * @returns {number} (~src & dst)
     */
    static fnBIC(src, dst)
    {
        let result = dst & ~src;
        this.updateNZVFlags(result);
        return result;
    }

    /**
     * fnBICB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src
     * @param {number} dst
     * @returns {number} (~src & dst)
     */
    static fnBICB(src, dst)
    {
        let result = dst & ~src;
        this.updateNZVFlags(result << 8);
        return result;
    }

    /**
     * fnBIS(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src
     * @param {number} dst
     * @returns {number} (dst | src)
     */
    static fnBIS(src, dst)
    {
        let result = dst | src;
        this.updateNZVFlags(result);
        return result;
    }

    /**
     * fnBISB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src
     * @param {number} dst
     * @returns {number} (dst | src)
     */
    static fnBISB(src, dst)
    {
        let result = dst | src;
        this.updateNZVFlags(result << 8);
        return result;
    }

    /**
     * fnCOM(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ignored)
     * @param {number} dst
     * @returns {number} (~dst)
     */
    static fnCOM(src, dst)
    {
        let result = ~dst | 0x10000;
        this.updateAllFlags(result);
        return result & 0xffff;
    }

    /**
     * fnCOMB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ignored)
     * @param {number} dst
     * @returns {number} (~dst)
     */
    static fnCOMB(src, dst)
    {
        let result = ~dst | 0x100;
        this.updateAllFlags(result << 8);
        return result & 0xff;
    }

    /**
     * fnDEC(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ie, 1)
     * @param {number} dst
     * @returns {number} (dst - src)
     */
    static fnDEC(src, dst)
    {
        let result = dst - src;
        this.updateDecFlags(result, dst);
        return result & 0xffff;
    }

    /**
     * fnDECB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ie, 1)
     * @param {number} dst
     * @returns {number} (dst - src)
     */
    static fnDECB(src, dst)
    {
        let result = dst - src;
        this.updateDecFlags(result << 8, dst << 8);
        return result & 0xff;
    }

    /**
     * fnINC(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ie, 1)
     * @param {number} dst
     * @returns {number} (dst + src)
     */
    static fnINC(src, dst)
    {
        let result = dst + src;
        this.updateIncFlags(result, dst);
        return result & 0xffff;
    }

    /**
     * fnINCB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ie, 1)
     * @param {number} dst
     * @returns {number} (dst + src)
     */
    static fnINCB(src, dst)
    {
        let result = dst + src;
        this.updateIncFlags(result << 8, dst << 8);
        return result & 0xff;
    }

    /**
     * fnNEG(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ignored)
     * @param {number} dst
     * @returns {number} (-dst)
     */
    static fnNEG(src, dst)
    {
        let result = -dst;
        /**
         * If the sign bit of both dst and result are set, the original value must have been 0x8000, triggering overflow.
         */
        this.updateAllFlags(result, result & dst & 0x8000);
        return result & 0xffff;
    }

    /**
     * fnNEGB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ignored)
     * @param {number} dst
     * @returns {number} (-dst)
     */
    static fnNEGB(src, dst)
    {
        let result = -dst;
        /**
         * If the sign bit of both dst and result are set, the original value must have been 0x80, which triggers overflow.
         */
        this.updateAllFlags(result << 8, (result & dst & 0x80) << 8);
        return result & 0xff;
    }

    /**
     * fnROL(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ignored)
     * @param {number} dst
     * @returns {number} (dst >> 1)
     */
    static fnROL(src, dst)
    {
        let result = (dst << 1) | ((this.flagC >> 16) & 1);
        this.updateShiftFlags(result);
        return result & 0xffff;
    }

    /**
     * fnROLB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ignored)
     * @param {number} dst
     * @returns {number} (dst >> 1)
     */
    static fnROLB(src, dst)
    {
        let result = (dst << 1) | ((this.flagC >> 16) & 1);
        this.updateShiftFlags(result << 8);
        return result & 0xff;
    }

    /**
     * fnROR(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ignored)
     * @param {number} dst
     * @returns {number} (dst >> 1)
     */
    static fnROR(src, dst)
    {
        let result = (((this.flagC & 0x10000) | dst) >> 1) | (dst << 16);
        this.updateShiftFlags(result);
        return result & 0xffff;
    }

    /**
     * fnRORB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ignored)
     * @param {number} dst
     * @returns {number} (dst >> 1)
     */
    static fnRORB(src, dst)
    {
        let result = ((((this.flagC & 0x10000) >> 8) | dst) >> 1) | (dst << 8);
        this.updateShiftFlags(result << 8);
        return result & 0xff;
    }

    /**
     * fnSUB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src
     * @param {number} dst
     * @returns {number} (dst - src)
     */
    static fnSUB(src, dst)
    {
        let result = dst - src;
        this.updateSubFlags(result, src, dst);
        return result & 0xffff;
    }

    /**
     * fnSUBB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src
     * @param {number} dst
     * @returns {number} (dst - src)
     */
    static fnSUBB(src, dst)
    {
        let result = dst - src;
        this.updateSubFlags(result << 8, src << 8, dst << 8);
        return result & 0xff;
    }

    /**
     * fnSWAB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ignored)
     * @param {number} dst
     * @returns {number} (dst with bytes swapped)
     */
    static fnSWAB(src, dst)
    {
        let result = (dst << 8) | (dst >> 8);
        /**
         * N and Z are based on the low byte of the result, which is the same as the high byte of dst.
         */
        this.updateNZVCFlags(dst & 0xff00);
        return result & 0xffff;
    }

    /**
     * fnXOR(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src
     * @param {number} dst
     * @returns {number} (dst ^ src)
     */
    static fnXOR(src, dst)
    {
        let result = dst ^ src;
        this.updateNZVFlags(result);
        return result & 0xffff;
    }

    /**
     * opADC(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opADC(opcode)
    {
        this.updateDstWord(opcode, this.getCF()? 1 : 0, PDP11Ops.fnADD);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opADCB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opADCB(opcode)
    {
        this.updateDstByte(opcode, this.getCF()? 1 : 0, PDP11Ops.fnADDB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opADD(opcode)
     *
     * From the PDP-11/20 Processor HandBook (1971), p. 61:
     *
     *     Add src,dst (06SSDD)
     *
     *     Operation:
     *          (dst) = (src) + (dst)
     *
     *     Condition Codes:
     *          N: set if result < 0; cleared otherwise
     *          Z: set if result = 0; cleared otherwise
     *          V: set if there was arithmetic overflow as a result of the operation, that is both operands
     *             were of the same sign and the result was of the opposite sign; cleared otherwise
     *          C: set if there was a carry from the most significant bit of the result; cleared otherwise
     *
     *     Description:
     *          Adds the source operand to the destination operand and stores the result at the destination address.
     *          The original contents of the destination are lost. The contents of the source are not affected.
     *          Two's complement addition is performed.
     *
     *     Examples:
     *          Add to register:            ADD 20,R0
     *          Add to memory:              ADD R1,XXX
     *          Add register to register:   ADD R1,R2
     *          Add memory to memory:       ADD @#17750,XXX
     *
     *          XXX is a programmer-defined mnemonic for a memory location.
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opADD(opcode)
    {
        this.updateDstWord(opcode, this.readSrcWord(opcode), PDP11Ops.fnADD);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) + (this.srcReg && this.dstReg >= 6? 1 : 0) : (this.srcMode? (3 + 2) : (2 + 1)) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opASH(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opASH(opcode)
    {
        let src = this.readDstWord(opcode);
        let reg = (opcode >> 6) & 7;
        let result = this.regsGen[reg];
        if (result & 0x8000) result |= 0xffff0000;
        this.flagC = this.flagV = 0;
        src &= 0x3F;
        if (src & 0x20) {
            src = 64 - src;         // shift right
            if (src > 16) src = 16;
            this.flagC = result << (17 - src);
            result = result >> src;
        } else if (src) {
            if (src > 16) {         // shift left
                this.flagV = result;
                result = 0;
            } else {
                result = result << src;
                this.flagC = result;
                let dst = (result >> 15) & 0xffff;  // check successive sign bits
                if (dst && dst !== 0xffff) this.flagV = 0x8000;
            }
        }
        this.regsGen[reg] = result & 0xffff;
        this.flagN = this.flagZ = result;
        this.nCyclesRemain -= (this.dstMode? (5 + 1) : (6 + 1)) + src;
    }

    /**
     * opASHC(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opASHC(opcode)
    {
        let src = this.readDstWord(opcode);
        let reg = (opcode >> 6) & 7;
        let dst = (this.regsGen[reg] << 16) | this.regsGen[reg | 1];
        let result;
        this.flagC = this.flagV = 0;
        src &= 0x3F;
        if (src & 0x20) {
            src = 64 - src;         // shift right
            if (src > 32) src = 32;
            result = dst >> (src - 1);
            this.flagC = result << 16;
            result >>= 1;
            if (dst & 0x80000000) result |= 0xffffffff << (32 - src);
        } else {
            if (src) {              // shift left
                result = dst << (src - 1);
                this.flagC = result >> 15;
                result <<= 1;
                if (src > 32) src = 32;
                dst = dst >> (32 - src);
                if (dst) {
                    dst |= (0xffffffff << src) & 0xffffffff;
                    if (dst !== 0xffffffff) this.flagV = 0x8000;
                }
            } else {
                result = dst;
            }
        }
        this.regsGen[reg] = (result >> 16) & 0xffff;
        this.regsGen[reg | 1] = result & 0xffff;
        this.flagN = result >> 16;
        this.flagZ = result >> 16 | result;
        this.nCyclesRemain -= (this.dstMode? (5 + 1) : (6 + 1)) + src;
    }

    /**
     * opASL(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opASL(opcode)
    {
        this.updateDstWord(opcode, 0, PDP11Ops.fnASL);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opASLB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opASLB(opcode)
    {
        this.updateDstByte(opcode, 0, PDP11Ops.fnASLB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opASR(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opASR(opcode)
    {
        this.updateDstWord(opcode, 0, PDP11Ops.fnASR);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opASRB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opASRB(opcode)
    {
        this.updateDstByte(opcode, 0, PDP11Ops.fnASRB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) + (this.dstAddr & 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opBCC(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBCC(opcode)
    {
        this.branch(opcode, !this.getCF());
    }

    /**
     * opBCS(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBCS(opcode)
    {
        this.branch(opcode, this.getCF());
    }

    /**
     * opBIC(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBIC(opcode)
    {
        this.updateDstWord(opcode, this.readSrcWord(opcode), PDP11Ops.fnBIC);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) + (this.srcReg && this.dstReg >= 6? 1 : 0) : (this.srcMode? (3 + 2) : (2 + 1)) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opBICB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBICB(opcode)
    {
        this.updateDstByte(opcode, this.readSrcByte(opcode), PDP11Ops.fnBICB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) + (this.srcReg && this.dstReg >= 6? 1 : 0) : (this.srcMode? (3 + 2) : (2 + 1)) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opBIS(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBIS(opcode)
    {
        this.updateDstWord(opcode, this.readSrcWord(opcode), PDP11Ops.fnBIS);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) + (this.srcReg && this.dstReg >= 6? 1 : 0) : (this.srcMode? (3 + 2) : (2 + 1)) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opBISB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBISB(opcode)
    {
        this.updateDstByte(opcode, this.readSrcByte(opcode), PDP11Ops.fnBISB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) + (this.srcReg && this.dstReg >= 6? 1 : 0) : (this.srcMode? (3 + 2) : (2 + 1)) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opBIT(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBIT(opcode)
    {
        let src = this.readSrcWord(opcode);
        let dst = this.readDstWord(opcode);
        this.updateNZVFlags((src < 0? this.regsGen[-src-1] : src) & dst);
        this.nCyclesRemain -= (this.dstMode? (3 + 1) + (this.srcReg && this.dstReg >= 6? 1 : 0) : (this.srcMode? (3 + 1) : (2 + 1)) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opBITB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBITB(opcode)
    {
        let src = this.readSrcByte(opcode);
        let dst = this.readDstByte(opcode);
        this.updateNZVFlags(((src < 0? (this.regsGen[-src-1] & 0xff) : src) & dst) << 8);
        this.nCyclesRemain -= (this.dstMode? (3 + 1) + (this.srcReg && this.dstReg >= 6? 1 : 0) : (this.srcMode? (3 + 1) : (2 + 1)) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opBEQ(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBEQ(opcode)
    {
        this.branch(opcode, this.getZF());
    }

    /**
     * opBGE(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBGE(opcode)
    {
        this.branch(opcode, !this.getNF() == !this.getVF());
    }

    /**
     * opBGT(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBGT(opcode)
    {
        this.branch(opcode, !this.getZF() && (!this.getNF() == !this.getVF()));
    }

    /**
     * opBHI(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBHI(opcode)
    {
        this.branch(opcode, !this.getCF() && !this.getZF());
    }

    /**
     * opBLE(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBLE(opcode)
    {
        this.branch(opcode, this.getZF() || (!this.getNF() != !this.getVF()));
    }

    /**
     * opBLOS(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBLOS(opcode)
    {
        this.branch(opcode, this.getCF() || this.getZF());
    }

    /**
     * opBLT(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBLT(opcode)
    {
        this.branch(opcode, !this.getNF() != !this.getVF());
    }

    /**
     * opBMI(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBMI(opcode)
    {
        this.branch(opcode, this.getNF());
    }

    /**
     * opBNE(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBNE(opcode)
    {
        this.branch(opcode, !this.getZF());
    }

    /**
     * opBPL(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBPL(opcode)
    {
        this.branch(opcode, !this.getNF());
    }

    /**
     * opBPT(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBPT(opcode)
    {
        this.trap(PDP11.TRAP.BPT, 0, PDP11.REASON.OPCODE);
    }

    /**
     * opBR(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBR(opcode)
    {
        this.branch(opcode, true);
    }

    /**
     * opBVC(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBVC(opcode)
    {
        this.branch(opcode, !this.getVF());
    }

    /**
     * opBVS(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBVS(opcode)
    {
        this.branch(opcode, this.getVF());
    }

    /**
     * opCLR(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opCLR(opcode)
    {
        this.writeDstWord(opcode, 0, this.updateAllFlags);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opCLRB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opCLRB(opcode)
    {
        this.writeDstByte(opcode, 0, PDP11.WRITE.BYTE, this.updateAllFlags);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opCLC(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opCLC(opcode)
    {
        this.clearCF();
        this.nCyclesRemain -= (4 + 1);
    }

    /**
     * opCLN(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opCLN(opcode)
    {
        this.clearNF();
        this.nCyclesRemain -= (4 + 1);
    }

    /**
     * opCLV(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opCLV(opcode)
    {
        this.clearVF();
        this.nCyclesRemain -= (4 + 1);
    }

    /**
     * opCLZ(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opCLZ(opcode)
    {
        this.clearZF();
        this.nCyclesRemain -= (4 + 1);
    }

    /**
     * opCLx(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opCLx(opcode)
    {
        if (opcode & 0x1) this.clearCF();
        if (opcode & 0x2) this.clearVF();
        if (opcode & 0x4) this.clearZF();
        if (opcode & 0x8) this.clearNF();
        /**
         * TODO: Review whether this class of undocumented instructions really has a constant cycle time.
         */
        this.nCyclesRemain -= (4 + 1);
    }

    /**
     * opCMP(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opCMP(opcode)
    {
        let src = this.readSrcWord(opcode);
        let dst = this.readDstWord(opcode);
        let result = (src = (src < 0? this.regsGen[-src-1] : src)) - dst;
        /**
         * NOTE: CMP calculates (src - dst) rather than (dst - src), so src and dst updateSubFlags() parms must be reversed.
         */
        this.updateSubFlags(result, dst, src);
        this.nCyclesRemain -= (this.dstMode? (3 + 1) + (this.srcReg && this.dstReg >= 6? 1 : 0) : (this.srcMode? (3 + 1) : (2 + 1)) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opCMPB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opCMPB(opcode)
    {
        let src = this.readSrcByte(opcode);
        let dst = this.readDstByte(opcode);
        let result = (src = (src < 0? (this.regsGen[-src-1] & 0xff): src) << 8) - (dst <<= 8);
        /**
         * NOTE: CMP calculates (src - dst) rather than (dst - src), so src and dst updateSubFlags() parms must be reversed.
         */
        this.updateSubFlags(result, dst, src);
        this.nCyclesRemain -= (this.dstMode? (3 + 1) + (this.srcReg && this.dstReg >= 6? 1 : 0) : (this.srcMode? (3 + 1) : (2 + 1)) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opCOM(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opCOM(opcode)
    {
        this.updateDstWord(opcode, 0, PDP11Ops.fnCOM);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opCOMB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opCOMB(opcode)
    {
        this.updateDstByte(opcode, 0, PDP11Ops.fnCOMB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opDEC(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opDEC(opcode)
    {
        this.updateDstWord(opcode, 1, PDP11Ops.fnDEC);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opDECB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opDECB(opcode)
    {
        this.updateDstByte(opcode, 1, PDP11Ops.fnDECB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opDIV(opcode)
     *
     * The instruction "DIV SRC,Rn" determines SRC using the DSTMODE portion of the opcode and Rn using
     * the SRCMODE portion; Rn can only be a register (and it should be an EVEN-numbered register, lest you
     * get unexpected results).  The dividend (DST) is then calculated as:
     *
     *      DST = (regs[Rn] << 16) | (regs[Rn|1])
     *
     * DST is divided by SRC, and the quotient is stored in regs[Rn] and the remainder in regs[Rn|1].
     *
     * For example:
     *
     *      DIV     R4,R0
     *
     * where R4 = 006400 and R0,R1 = 000000,015000 will result in R0,R1 = 000002,000000.
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opDIV(opcode)
    {
        /**
         * TODO: Review and determine if flag updates can be encapsulated in an updateDivFlags() function.
         */
       let src = this.readDstWord(opcode);
        if (!src) {
            this.flagN = 0;         // NZVC
            this.flagZ = 0;
            this.flagV = 0x8000;
            this.flagC = 0x10000;   // divide by zero
            this.nCyclesRemain -= (6 + 1);
        } else {
            let reg = (opcode >> 6) & 7;
            let dst = (this.regsGen[reg] << 16) | this.regsGen[reg | 1];
            this.flagC = this.flagV = 0;
            if (src & 0x8000) src |= ~0xffff;
            let result = ~~(dst / src);
            if (result >= -32768 && result <= 32767) {
                this.regsGen[reg] = result & 0xffff;
                this.regsGen[reg | 1] = (dst - (result * src)) & 0xffff;
                this.flagZ = (result >> 16) | result;
                this.flagN = result >> 16;
            } else {
                this.flagV = 0x8000;                                // overflow - following are indeterminate
                this.flagZ = (result >> 15) | result;               // dodgy
                this.flagN = dst >> 16;                             // just as dodgy
                if (src === -1 && this.regsGen[reg] === 0xfffe) {
                    this.regsGen[reg] = this.regsGen[reg | 1] = 1;  // etc
                }
            }
            this.nCyclesRemain -= (52 + 1);                           // 52 is the average of the shortest and longest times
        }
    }

    /**
     * opEMT(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opEMT(opcode)
    {
        this.trap(PDP11.TRAP.EMT, 0, PDP11.REASON.OPCODE);
        this.nCyclesRemain -= (22 + 3 - 5);
    }

    /**
     * opHALT(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opHALT(opcode)
    {
        if (this.regPSW & PDP11.PSW.CMODE) {
            this.regErr |= PDP11.CPUERR.BADHALT;
            this.trap(PDP11.TRAP.BUS, 0, PDP11.REASON.HALT);
        } else {
            if (this.panel) {
                /**
                 * The PDP-11/20 Handbook (1971) says that HALT does the following:
                 *
                 *      Causes the processor operation to cease. The console is given control of the bus.
                 *      The console data lights display the contents of RO; the console address lights display
                 *      the address after the halt instruction. Transfers on the UNIBUS are terminated immediately.
                 *      The PC points to the next instruction to be executed. Pressing the continue key on the
                 *      console causes processor operation to resume. No INIT signal is given.
                 *
                 * However, the PDP-11/70 Handbook (1979) suggests some slight differences:
                 *
                 *      Causes the processor operation to cease. The console is given control of the processor.
                 *      The data lights display the contents of the PC (which is the address of the HALT instruction
                 *      plus 2). Transfers on the UNIBUS are terminated immediately. Pressing the continue key on
                 *      the console causes processor operation to resume.
                 *
                 * Given that the 11/70 doesn't saying anything about displaying R0 on a HALT, and also given that
                 * the 11/70 CPU EXERCISER diagnostic writes a value to the Console Switch/Display Register immediately
                 * before HALT'ing, I'm going to assume that updating the data display with R0 is unique to the 11/20.
                 *
                 * Also, I'm a little suspicious of the 11/70 comment that the "data lights display the contents of
                 * the PC," since previous models display the PC on the ADDRESS lights, not the DATA lights.  And as
                 * I already explained, doing anything to the data lights at this point would undo what the 11/70
                 * diagnostics do.
                 */
                if (this.model == PDP11.MODEL_1120) {
                    this.panel.setData(this.regsGen[0], true);
                }
            }
            if (!this.dbg) {
                /**
                 * This will leave the PC exactly where it's supposed to be: at the address of the HALT + 2.
                 */
                this.time.stop();
            } else {
                /**
                 * When the Debugger is present, this call will rewind PC by 2 so that the HALT instruction is
                 * displayed, making it clear why the processor stopped; the user could also use the "dh" command
                 * to dump the Debugger's instruction history buffer to see why it stopped, assuming the history
                 * buffer is enabled, but that's more work.
                 *
                 * Because rewinding is not normal CPU behavior, attempting to Run again (or use the Debugger's
                 * "g" command) would cause an immediate HALT again -- except that checkInstruction() checks for that
                 * precise condition, so if the CPU starts on a HALT, checkInstruction() will skip over it.
                 */
                this.dbg.stopCPU("halt");
            }
        }
        this.nCyclesRemain -= 7;
    }

    /**
     * opINC(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opINC(opcode)
    {
        this.updateDstWord(opcode, 1, PDP11Ops.fnINC);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opINCB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opINCB(opcode)
    {
        this.updateDstByte(opcode, 1, PDP11Ops.fnINCB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opIOT(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opIOT(opcode)
    {
        this.trap(PDP11.TRAP.IOT, 0, PDP11.REASON.OPCODE);
        this.nCyclesRemain -= (22 + 3 - 5);
    }

    /**
     * opJMP(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opJMP(opcode)
    {
        /**
         * Since JMP and JSR opcodes have their own unique timings for the various dst modes,
         * we snapshot nCyclesRemain before decoding the mode and use that to update nCyclesRemain.
         */
        this.nCyclesSnapped = this.nCyclesRemain;
        this.setPC(this.readDstAddr(opcode));
        this.nCyclesRemain = this.nCyclesSnapped - PDP11Ops.JMP_CYCLES[this.dstMode];
    }

    /**
     * opJSR(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opJSR(opcode)
    {
        /**
         * Since JMP and JSR opcodes have their own unique timings for the various dst modes,
         * we snapshot nCyclesRemain before decoding the mode and use that to update nCyclesRemain.
         */
        this.nCyclesSnapped = this.nCyclesRemain;
        let addr = this.readDstAddr(opcode);
        /**
         * As per the WARNING in readSrcWord(), reading the SRC register AFTER decoding the DST operand
         * is entirely appropriate.
         */
        let reg = (opcode >> PDP11.SRCMODE.SHIFT) & PDP11.OPREG.MASK;
        this.pushWord(this.regsGen[reg]);
        this.regsGen[reg] = this.getPC();
        this.setPC(addr);
        this.nCyclesRemain = this.nCyclesSnapped - PDP11Ops.JSR_CYCLES[this.dstMode];
    }

    /**
     * opMARK(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opMARK(opcode)
    {
        let addr = (this.getPC() + ((opcode & 0x3F) << 1)) & 0xffff;
        let src = this.readWord(addr | this.addrDSpace);
        this.setPC(this.regsGen[5]);
        this.setSP(addr + 2);
        this.regsGen[5] = src;
        this.nCyclesRemain -= (6 + 2);
    }

    /**
     * opMFPD(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opMFPD(opcode)
    {
        let data = this.readWordFromPrevSpace(opcode, PDP11.ACCESS.DSPACE);
        this.updateNZVFlags(data);
        this.pushWord(data);
        this.nCyclesRemain -= (10 + 1);
    }

    /**
     * opMFPI(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opMFPI(opcode)
    {
        let data = this.readWordFromPrevSpace(opcode, PDP11.ACCESS.ISPACE);
        this.updateNZVFlags(data);
        this.pushWord(data);
        this.nCyclesRemain -= (10 + 1);
    }

    /**
     * opMFPS(opcode)
     *
     *      1067XX  MFPS - Move Byte From PSW
     *
     *      The 8-bit contents of the PS are moved to the effective destination.  If destination is mode 0,
     *      PS bit 7 is sign extended through the upper byte of the register.  The destination operand is treated
     *      as a byte address.  11/34A only.
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opMFPS(opcode)
    {
        PDP11Ops.opUndefined.call(this, opcode);
    }

    /**
     * opMFPT(opcode)
     *
     *      000007  MFPT - Move From Processor Type
     *
     *      Loads R0 with a value indicating the processor type.
     *
     *      R0  Hardware
     *       1  PDP-11/44
     *       3  PDP-11/24 (should be 2)
     *       3  PDP-11/23
     *       4  SBC-11/21
     *       5  All J11 chips including 11/73, 11/83, 11/93
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opMFPT(opcode)
    {
        PDP11Ops.opUndefined.call(this, opcode);
    }

    /**
     * opMOV(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opMOV(opcode)
    {
        /**
         * Since MOV opcodes have their own unique timings for the various dst modes,
         * we snapshot nCyclesRemain after decoding the src mode and use that to update nCyclesRemain.
         */
        let data = this.readSrcWord(opcode);
        this.nCyclesSnapped = this.nCyclesRemain;
        this.writeDstWord(opcode, data, this.updateNZVFlags);
        this.nCyclesRemain = this.nCyclesSnapped - PDP11Ops.MOV_CYCLES[(this.srcMode? 8 : 0) + this.dstMode] + (this.dstReg == 7 && !this.dstMode? 2 : 0);
    }

    /**
     * opMOVB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opMOVB(opcode)
    {
        let data = this.readSrcByte(opcode);
        this.writeDstByte(opcode, data, PDP11.WRITE.SBYTE, this.updateNZVFlags);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) + (this.srcReg && this.dstReg >= 6? 1 : 0) : (this.srcMode? (3 + 2) : (2 + 1)) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opMTPD(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opMTPD(opcode)
    {
        /**
         * Since MTPD and MTPI opcodes have their own unique timings for the various dst modes,
         * we snapshot nCyclesRemain before decoding the mode and use that to update nCyclesRemain.
         */
        let data = this.popWord();
        this.nCyclesSnapped = this.nCyclesRemain;
        this.updateNZVFlags(data);
        this.writeWordToPrevSpace(opcode, PDP11.ACCESS.DSPACE, data);
        this.nCyclesRemain = this.nCyclesSnapped - PDP11Ops.MTP_CYCLES[this.dstMode];
    }

    /**
     * opMTPI(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opMTPI(opcode)
    {
        /**
         * Since MTPD and MTPI opcodes have their own unique timings for the various dst modes,
         * we snapshot nCyclesRemain before decoding the mode and use that to update nCyclesRemain.
         */
        let data = this.popWord();
        this.nCyclesSnapped = this.nCyclesRemain;
        this.updateNZVFlags(data);
        this.writeWordToPrevSpace(opcode, PDP11.ACCESS.ISPACE, data);
        this.nCyclesRemain = this.nCyclesSnapped - PDP11Ops.MTP_CYCLES[this.dstMode];
    }

    /**
     * opMTPS(opcode)
     *
     *      1064XX  MTPS - Move Byte To PSW
     *
     *      The 8 bits of the effective operand replace the current contents of the PS <0:7>.  The source operand
     *      address is treated as a byte address.  Note that PS bit 4 cannot be set with this instruction.  The
     *      src operand remains unchanged.  11/34A only.
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opMTPS(opcode)
    {
        PDP11Ops.opUndefined.call(this, opcode);
    }

    /**
     * opMUL(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opMUL(opcode)
    {
        let src = this.readDstWord(opcode);
        let reg = (opcode >> 6) & 7;
        let dst = this.regsGen[reg];
        let result = ((src << 16) >> 16) * ((dst << 16) >> 16);
        this.regsGen[reg] = (result >> 16) & 0xffff;
        this.regsGen[reg | 1] = result & 0xffff;
        this.updateMulFlags(result|0);
        this.nCyclesRemain -= (22 + 1);
    }

    /**
     * opNEG(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opNEG(opcode)
    {
        this.updateDstWord(opcode, 0, PDP11Ops.fnNEG);
        this.nCyclesRemain -= (this.dstMode? (10 + 1) : (5 + 1));
    }

    /**
     * opNEGB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opNEGB(opcode)
    {
        this.updateDstByte(opcode, 0, PDP11Ops.fnNEGB);
        this.nCyclesRemain -= (this.dstMode? (10 + 1) : (5 + 1));
    }

    /**
     * opNOP(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opNOP(opcode)
    {
        this.nCyclesRemain -= (4 + 1);        // TODO: Review (this is just a guess based on CLC)
    }

    /**
     * opRESET(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opRESET(opcode)
    {
        if (!(this.regPSW & PDP11.PSW.CMODE)) {
            this.resetCPU();

            if (this.panel) {
                /**
                 * The PDP-11/70 XXDP test "EKBBF0" reports the following, with PANEL messages on ("m panel on"):
                 *
                 *      CNSW.writeWord(177570,000101) @033502
                 *      CNSW.readWord(177570): 000000 @032114
                 *      LOOK AT THE CONSOLE LIGHTS
                 *      THE DATA LIGHTS SHOULD READ 166667
                 *      THE ADDRESS LIGHTS SHOULD READ  CNSW.readWord(177570): 000000 @032150
                 *      032236
                 *      CHANGE SWITCH 7 TO CONTINUE
                 *      CNSW.readWord(177570): 000000 @032236
                 *      stopped (31518011 instructions, 358048873 cycles, 58644 ms, 6105465 hz)
                 *      R0=166667 R1=002362 R2=000000 R3=000000 R4=000000 R5=026642
                 *      SP=001074 PC=032236 PS=000344 SR=00000000 T0 N0 Z1 V0 C0
                 *      032236: 032737 000200 177570   BIT   #200,@#177570
                 *      >> tr
                 *      CNSW.readWord(177570): 000000 @032236 (cpu halted)
                 *      R0=166667 R1=002362 R2=000000 R3=000000 R4=000000 R5=026642
                 *      SP=001074 PC=032244 PS=000344 SR=00000000 T0 N0 Z1 V0 C0
                 *      032244: 001773                 BEQ   032234                 ;cycles=0
                 *      >> tr
                 *      R0=166667 R1=002362 R2=000000 R3=000000 R4=000000 R5=026642
                 *      SP=001074 PC=032234 PS=000344 SR=00000000 T0 N0 Z1 V0 C0
                 *      032234: 000005                 RESET                        ;cycles=5
                 *
                 * It's a little hard to see why the DATA lights should read 166667, since the PANEL messages indicate
                 * that the last CNSW.writeWord(177570) was for 000101, not 166667.  So I'm guessing that the RESET
                 * instruction is supposed to propagate R0 to the console's DISPLAY register.
                 *
                 * This is similar to what we do for the HALT instruction (but only if this.model == PDP11.MODEL_1120).
                 * These Console features do not seem to be very well documented, assuming they exist.
                 *
                 * UPDATE: This behavior appears to be confirmed by remarks in the PDP-11/20 Processor Handbook (1971),
                 * p. 141:
                 *
                 *      HALT - displays processor register R0 when bus control is transferred to console during a HALT
                 *      instruction.
                 *
                 *      RESET - displays register R0 for during [duration?] of RESET (70 msec).
                 *
                 * I haven't found similar remarks in the PDP-11/70 Processor Handbooks, so I'm not sure if that's an
                 * oversight or if 11/70 panels are slightly different in this regard.  It's also not clear what they meant
                 * by "for duration of RESET".  Is something supposed to happen to the DATA lights after the RESET is done?
                 */
                this.panel.setData(this.regsGen[0], true);
            }
        }
        this.nCyclesRemain -= 667;            // TODO: Review (but it's definitely a big number)
    }

    /**
     * opROL(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opROL(opcode)
    {
        this.updateDstWord(opcode, 0, PDP11Ops.fnROL);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opROLB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opROLB(opcode)
    {
        this.updateDstByte(opcode, 0, PDP11Ops.fnROLB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opROR(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opROR(opcode)
    {
        this.updateDstWord(opcode, 0, PDP11Ops.fnROR);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opRORB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opRORB(opcode)
    {
        this.updateDstByte(opcode, 0, PDP11Ops.fnRORB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) + (this.dstAddr & 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opRTI(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opRTI(opcode)
    {
        this.trapReturn();
        /**
         * Unlike RTT, RTI permits an immediate trace, which we resolve by propagating PSW.TF to OPFLAG.TRAP_TF
         * (which, as written below, requires that both flags have the same bit value; see defines.js).
         *
         * NOTE: This RTI trace behavior is NEW for machines that have both RTI and RTT.  Early models didn't have RTT,
         * so the old RTI behaved exactly like the new RTT.  Which is why the 11/20 jump table below calls opRTT() instead
         * of opRTI() for RTI.
         */
        this.opFlags |= (this.regPSW & PDP11.PSW.TF);
        this.nCyclesRemain -= (10 + 3);
    }

    /**
     * opRTS(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opRTS(opcode)
    {
        if (opcode & 0x08) {
            PDP11Ops.opUndefined.call(this, opcode);
            return;
        }
        let src = this.popWord();
        let reg = opcode & PDP11.OPREG.MASK;
        /**
         * When the popular "RTS PC" form is used, we might as well eliminate the useless setting of PC...
         */
        if (reg == PDP11.REG.PC) {
            this.setPC(src);
        } else {
            this.setPC(this.regsGen[reg]);
            this.regsGen[reg] = src;
        }
        this.nCyclesRemain -= (7 + 2);
    }

    /**
     * opRTT(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opRTT(opcode)
    {
        this.trapReturn();
        this.nCyclesRemain -= (10 + 3);
    }

    /**
     * opSBC(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opSBC(opcode)
    {
        this.updateDstWord(opcode, this.getCF()? 1 : 0, PDP11Ops.fnSUB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opSBCB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opSBCB(opcode)
    {
        this.updateDstByte(opcode, this.getCF()? 1 : 0, PDP11Ops.fnSUBB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opSEC(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opSEC(opcode)
    {
        this.setCF();
        this.nCyclesRemain -= (4 + 1);
    }

    /**
     * opSEN(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opSEN(opcode)
    {
        this.setNF();
        this.nCyclesRemain -= (4 + 1);
    }

    /**
     * opSEV(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opSEV(opcode)
    {
        this.setVF();
        this.nCyclesRemain -= (4 + 1);
    }

    /**
     * opSEZ(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opSEZ(opcode)
    {
        this.setZF();
        this.nCyclesRemain -= (4 + 1);
    }

    /**
     * opSEx(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opSEx(opcode)
    {
        if (opcode & 0x1) this.setCF();
        if (opcode & 0x2) this.setVF();
        if (opcode & 0x4) this.setZF();
        if (opcode & 0x8) this.setNF();
        /**
         * TODO: Review whether this class of undocumented instructions really has a constant cycle time.
         */
        this.nCyclesRemain -= (4 + 1);
    }

    /**
     * opSOB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode (077Rnn)
     */
    static opSOB(opcode)
    {
        let reg = (opcode & PDP11.SRCMODE.REG) >> PDP11.SRCMODE.SHIFT;
        if ((this.regsGen[reg] = ((this.regsGen[reg] - 1) & 0xffff))) {
            this.setPC(this.getPC() - ((opcode & PDP11.DSTMODE.MASK) << 1));
            this.nCyclesRemain += 1;          // unlike normal branches, taking this branch is actually 1 cycle faster
        }
        this.nCyclesRemain -= (5 + 1);
    }

    /**
     * opSPL(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opSPL(opcode)
    {
        if (!(opcode & 0x08) || this.model < PDP11.MODEL_1145) {
            PDP11Ops.opUndefined.call(this, opcode);
            return;
        }
        if (!(this.regPSW & PDP11.PSW.CMODE)) {
            this.regPSW = (this.regPSW & ~PDP11.PSW.PRI) | ((opcode & 0x7) << PDP11.PSW.SHIFT.PRI);
            this.opFlags |= PDP11.OPFLAG.IRQ_DELAY;
            this.opFlags &= ~PDP11.OPFLAG.IRQ;
        }
        this.nCyclesRemain -= (4 + 1);
    }

    /**
     * opSUB(opcode)
     *
     * From the PDP-11/20 Processor HandBook (1971), p. 62:
     *
     *     Subtract src,dst (16SSDD)
     *
     *     Operation:
     *          (dst) = (dst) - (src) [in detail, (dst) + ~(src) + 1 (dst)]
     *
     *     Condition Codes:
     *          N: set if result < 0; cleared otherwise
     *          Z: set if result = 0; cleared otherwise
     *          V: set if there was arithmetic overflow as a result of the operation, that is if operands were of
     *             opposite signs and the sign of the source was the same as the sign of the result; cleared otherwise
     *          C: cleared if there was a carry from the most significant bit of the result; set otherwise
     *
     *     Description:
     *          Subtracts the source operand from the destination operand and leaves the result at the destination address.
     *          The original contents of the destination are lost. The contents of the source are not affected.
     *          In double-precision arithmetic the C-bit, when set, indicates a "borrow".
     *
     *     Example:
     *                  SUB R1,R2
     *
     *              BEFORE          AFTER
     *          (R1) = 011111   (R2) = 012345
     *          (R1) = 011111   (R2) = 001234
     *
     *              NZVC            NZVC
     *              1111            0001
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opSUB(opcode)
    {
        this.updateDstWord(opcode, this.readSrcWord(opcode), PDP11Ops.fnSUB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) + (this.srcReg && this.dstReg >= 6? 1 : 0) : (this.srcMode? (3 + 2) : (2 + 1)) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opSWAB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opSWAB(opcode)
    {
        this.updateDstWord(opcode, 0, PDP11Ops.fnSWAB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opSXT(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opSXT(opcode)
    {
        this.writeDstWord(opcode, this.getNF()? 0xffff : 0, this.updateNZVFlags);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opTRAP(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opTRAP(opcode)
    {
        this.trap(PDP11.TRAP.TRAP, 0, PDP11.REASON.OPCODE);
    }

    /**
     * opTST(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opTST(opcode)
    {
        let result = this.readDstWord(opcode);

        this.updateAllFlags(result);
        this.nCyclesRemain -= (this.dstMode? (3 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opTSTB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opTSTB(opcode)
    {
        let result = this.readDstByte(opcode);

        this.updateAllFlags(result << 8);
        this.nCyclesRemain -= (this.dstMode? (3 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opWAIT(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opWAIT(opcode)
    {
        /**
         * The original PDP-11 emulation code would actually stop emulating instructions now, relying on assorted
         * setTimeout() callbacks, setInterval() callbacks, device XHR (XMLHttpRequest) callbacks, etc, to eventually
         * call interrupt(), which would then transition the CPU out of its "wait" state and kickstart emulate() again.
         *
         * That approach isn't compatible with PCjs emulators, which prefer to rely on the simulated CPU clock to
         * drive all simulated device updates.  This means components should call the CPU's setTimer() function, which
         * invokes the provided callback when the number of CPU cycles that correspond to the requested number of
         * milliseconds have elapsed.  This also gives us the ability to scale device response times as needed if the
         * user decides to crank up CPU speed, and to freeze them along with the CPU whenever the user halts the machine.
         *
         * However, the PCjs approach requires the CPU to continue running.  One simple solution to this dilemma:
         *
         *      1) opWAIT() sets a new opFlags bit (OPFLAG.WAIT)
         *      2) Rewind the PC back to the WAIT instruction
         *      3) Whenever stepCPU() detects OPFLAG.WAIT, call checkInterrupts()
         *      4) If checkInterrupts() detects an interrupt, advance PC past the WAIT and then dispatch the interrupt
         *
         * Technically, the PC is already exactly where it's supposed to be, so why are we wasting time with steps
         * 2 and 4?  It's largely for the Debugger's sake, so that as long as execution is "blocked" by a WAIT, that's
         * what you'll see in the Debugger.  I could make those steps conditioned on the presence of the Debugger,
         * but I feel it's better to keep all code paths the same.
         *
         * NOTE: It's almost always a bad idea to add more checks to the inner stepCPU() loop, because every additional
         * check can have a measurable (negative) impact on performance.  Which is why it's important to use opFlags bits
         * whenever possible, since we can test for multiple (up to 32) exceptional conditions with a single check.
         *
         * We also used to update the machine's display(s) whenever transitioning to the WAIT state.  However, that
         * caused this instruction to generate enormous overhead, and it's no longer necessary, since we now rely on
         * a timer (the PDP-11's own KW11 60Hz Line Clock timer, to be precise) to generate periodic display updates.
         *
         *      if (!(this.opFlags & PDP11.OPFLAG.WAIT) && this.cmp) this.cmp.updateDisplays();
         *
         * Finally, it's been noted several places online that the WAIT instruction puts the contents of R0 into the
         * Front Panel's "DATA PATH" (and possibly even directly into the "DISPLAY REGISTER", making the DATASEL switch
         * setting irrelevant).  I can't find any supporting DEC documentation regarding this, but for now, we'll go
         * with popular lore and propagate R0 to the panel's "active" data register.
         */
        if (this.panel) {
            this.panel.setAddr(this.regsGen[7], true);
            this.panel.setData(this.regsGen[0], true);
        }
        this.opFlags |= PDP11.OPFLAG.WAIT;
        this.advancePC(-2);
        this.nCyclesRemain -= 3;
    }

    /**
     * opXOR(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opXOR(opcode)
    {
        let reg = (opcode >> PDP11.SRCMODE.SHIFT) & PDP11.OPREG.MASK;
        this.updateDstWord(opcode, this.regsGen[reg + this.offRegSrc], PDP11Ops.fnXOR);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opUndefined(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opUndefined(opcode)
    {
        if (this.dbg) {
            this.dbg.stopCPU("undefined opcode: %n\n", opcode);
        }
        this.trap(PDP11.TRAP.RESERVED, 0, PDP11.REASON.OPCODE);
    }

    /**
     * op1120(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op1120(opcode)
    {
        PDP11Ops.aOpXnnn_1120[opcode >> 12].call(this, opcode);
    }

    /**
     * op0Xnn_1120(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op0Xnn_1120(opcode)
    {
        PDP11Ops.aOp0Xnn_1120[(opcode >> 8) & 0xf].call(this, opcode);
    }

    /**
     * op0AXn_1120(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op0AXn_1120(opcode)
    {
        PDP11Ops.aOp0AXn_1120[(opcode >> 6) & 0x3].call(this, opcode);
    }

    /**
     * op0BXn_1120(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op0BXn_1120(opcode)
    {
        PDP11Ops.aOp0BXn_1120[(opcode >> 6) & 0x3].call(this, opcode);
    }

    /**
     * op0CXn_1120(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op0CXn_1120(opcode)
    {
        PDP11Ops.aOp0CXn_1120[(opcode >> 6) & 0x3].call(this, opcode);
    }

    /**
     * op00Xn_1120(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op00Xn_1120(opcode)
    {
        PDP11Ops.aOp00Xn_1120[(opcode >> 4) & 0xf].call(this, opcode);
    }

    /**
     * op00AX_1120(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op00AX_1120(opcode)
    {
        PDP11Ops.aOp00AX_1120[opcode & 0xf].call(this, opcode);
    }

    /**
     * op00BX_1120(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op00BX_1120(opcode)
    {
        PDP11Ops.aOp00BX_1120[opcode & 0xf].call(this, opcode);
    }

    /**
     * op000X_1120(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op000X_1120(opcode)
    {
        PDP11Ops.aOp000X_1120[opcode & 0xf].call(this, opcode);
    }

    /**
     * op8Xnn_1120(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op8Xnn_1120(opcode)
    {
        PDP11Ops.aOp8Xnn_1120[(opcode >> 8) & 0xf].call(this, opcode);
    }

    /**
     * op8AXn_1120(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op8AXn_1120(opcode)
    {
        PDP11Ops.aOp8AXn_1120[(opcode >> 6) & 0x3].call(this, opcode);
    }

    /**
     * op8BXn_1120(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op8BXn_1120(opcode)
    {
        PDP11Ops.aOp8BXn_1120[(opcode >> 6) & 0x3].call(this, opcode);
    }

    /**
     * op8CXn_1120(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op8CXn_1120(opcode)
    {
        PDP11Ops.aOp8CXn_1120[(opcode >> 6) & 0x3].call(this, opcode);
    }

    /**
     * op1140(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op1140(opcode)
    {
        PDP11Ops.aOpXnnn_1140[opcode >> 12].call(this, opcode);
    }

    /**
     * op0Xnn_1140(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op0Xnn_1140(opcode)
    {
        PDP11Ops.aOp0Xnn_1140[(opcode >> 8) & 0xf].call(this, opcode);
    }

    /**
     * op0DXn_1140(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op0DXn_1140(opcode)
    {
        PDP11Ops.aOp0DXn_1140[(opcode >> 6) & 0x3].call(this, opcode);
    }

    /**
     * op00Xn_1140(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op00Xn_1140(opcode)
    {
        PDP11Ops.aOp00Xn_1140[(opcode >> 4) & 0xf].call(this, opcode);
    }

    /**
     * op000X_1140(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op000X_1140(opcode)
    {
        PDP11Ops.aOp000X_1140[opcode & 0xf].call(this, opcode);
    }

    /**
     * op7Xnn_1140(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op7Xnn_1140(opcode)
    {
        PDP11Ops.aOp7Xnn_1140[(opcode >> 8) & 0xf].call(this, opcode);
    }

    /**
     * op8Xnn_1140(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op8Xnn_1140(opcode)
    {
        PDP11Ops.aOp8Xnn_1140[(opcode >> 8) & 0xf].call(this, opcode);
    }

    /**
     * op8DXn_1140(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op8DXn_1140(opcode)
    {
        if (this.model < PDP11.MODEL_1145) {
            PDP11Ops.opUndefined.call(this, opcode);
            return;
        }
        PDP11Ops.aOp8DXn_1140[(opcode >> 6) & 0x3].call(this, opcode);
    }
}

PDP11Ops.JMP_CYCLES = [
    0, 6 + 1, 6 + 1, 8 + 2, 6 + 1, 9 + 2, 7 + 2, 10 + 3
];

PDP11Ops.JSR_CYCLES = [
    0, 13 + 1, 13 + 1, 15 + 2, 13 + 1, 16 + 2, 14 + 2, 17 + 3
];

PDP11Ops.MOV_CYCLES = [
    2 + 1, 8 + 1, 8 + 1, 11 + 2, 9 + 1, 12 + 2, 10 + 2, 13 + 3,
    3 + 1, 8 + 1, 8 + 1, 11 + 2, 9 + 1, 12 + 2, 11 + 2, 14 + 3
];

PDP11Ops.MTP_CYCLES = [
    6 + 1, 11 + 2, 11 + 2, 14 + 3, 12 + 2, 15 + 3, 14 + 3, 17 + 4
];

PDP11Ops.aOpXnnn_1120 = [
    PDP11Ops.op0Xnn_1120,       // 0x0nnn
    PDP11Ops.opMOV,             // 0x1nnn   01SSDD          11/20+  2.3
    PDP11Ops.opCMP,             // 0x2nnn   02SSDD          11/20+  2.3*
    PDP11Ops.opBIT,             // 0x3nnn   03SSDD          11/20+  2.9*
    PDP11Ops.opBIC,             // 0x4nnn   04SSDD          11/20+  2.9
    PDP11Ops.opBIS,             // 0x5nnn   05SSDD          11/20+  2.3
    PDP11Ops.opADD,             // 0x6nnn   06SSDD          11/20+  2.3
    PDP11Ops.opUndefined,       // 0x7nnn
    PDP11Ops.op8Xnn_1120,       // 0x8nnn
    PDP11Ops.opMOVB,            // 0x9nnn   11SSDD          11/20+  2.3
    PDP11Ops.opCMPB,            // 0xAnnn   12SSDD          11/20+  2.3
    PDP11Ops.opBITB,            // 0xBnnn   13SSDD          11/20+  2.9
    PDP11Ops.opBICB,            // 0xCnnn   14SSDD          11/20+  2.9
    PDP11Ops.opBISB,            // 0xDnnn   15SSDD          11/20+  2.3
    PDP11Ops.opSUB,             // 0xEnnn   16SSDD          11/20+  2.3
    PDP11Ops.opUndefined        // 0xFnnn
];

PDP11Ops.aOp0Xnn_1120 = [
    PDP11Ops.op00Xn_1120,       // 0x00nn
    PDP11Ops.opBR,              // 0x01nn   0004XX          11/20+  2.6
    PDP11Ops.opBNE,             // 0x02nn   0010XX          11/20+  2.6**
    PDP11Ops.opBEQ,             // 0x03nn   0014XX          11/20+  2.6**
    PDP11Ops.opBGE,             // 0x04nn   0020XX          11/20+  2.6**
    PDP11Ops.opBLT,             // 0x05nn   0024XX          11/20+  2.6**
    PDP11Ops.opBGT,             // 0x06nn   0030XX          11/20+  2.6**
    PDP11Ops.opBLE,             // 0x07nn   0034XX          11/20+  2.6**
    PDP11Ops.opJSR,             // 0x08nn   004RDD          11/20+  4.4
    PDP11Ops.opJSR,             // 0x09nn   004RDD          11/20+  4.4
    PDP11Ops.op0AXn_1120,       // 0x0Ann
    PDP11Ops.op0BXn_1120,       // 0x0Bnn
    PDP11Ops.op0CXn_1120,       // 0x0Cnn
    PDP11Ops.opUndefined,       // 0x0Dnn
    PDP11Ops.opUndefined,       // 0x0Enn
    PDP11Ops.opUndefined        // 0x0Fnn
];

PDP11Ops.aOp0AXn_1120 = [
    PDP11Ops.opCLR,             // 0x0A0n   0050DD          11/20+  2.3
    PDP11Ops.opCOM,             // 0x0A4n   0051DD          11/20+  2.3
    PDP11Ops.opINC,             // 0x0A8n   0052DD          11/20+  2.3
    PDP11Ops.opDEC              // 0x0ACn   0053DD          11/20+  2.3
];

PDP11Ops.aOp0BXn_1120 = [
    PDP11Ops.opNEG,             // 0x0B0n   0054DD          11/20+  2.3
    PDP11Ops.opADC,             // 0x0B4n   0055DD          11/20+  2.3
    PDP11Ops.opSBC,             // 0x0B8n   0056DD          11/20+  2.3
    PDP11Ops.opTST              // 0x0BCn   0057DD          11/20+  2.3*
];

PDP11Ops.aOp0CXn_1120 = [
    PDP11Ops.opROR,             // 0x0C0n   0060DD          11/20+  2.3*
    PDP11Ops.opROL,             // 0x0C4n   0061DD          11/20+  2.3*
    PDP11Ops.opASR,             // 0x0C8n   0062DD          11/20+  2.3*
    PDP11Ops.opASL              // 0x0CCn   0063DD          11/20+  2.3*
];

PDP11Ops.aOp00Xn_1120 = [
    PDP11Ops.op000X_1120,       // 0x000n   000000-000017
    PDP11Ops.opUndefined,       // 0x001n   000020-000037
    PDP11Ops.opUndefined,       // 0x002n   000040-000057
    PDP11Ops.opUndefined,       // 0x003n   000060-000077
    PDP11Ops.opJMP,             // 0x004n   0001DD          11/20+  1.2
    PDP11Ops.opJMP,             // 0x005n   0001DD          11/20+  1.2
    PDP11Ops.opJMP,             // 0x006n   0001DD          11/20+  1.2
    PDP11Ops.opJMP,             // 0x007n   0001DD          11/20+  1.2
    PDP11Ops.opRTS,             // 0x008n   00020R          11/20+  3.5 (opRTS() will also confirm that bit 3 is clear)
    PDP11Ops.opUndefined,       // 0x009n   00023N
    PDP11Ops.op00AX_1120,       // 0x00An   000240-000257
    PDP11Ops.op00BX_1120,       // 0x00Bn   000260-000277
    PDP11Ops.opSWAB,            // 0x00Cn   0003DD          11/20+  2.3
    PDP11Ops.opSWAB,            // 0x00Dn   0003DD          11/20+  2.3
    PDP11Ops.opSWAB,            // 0x00En   0003DD          11/20+  2.3
    PDP11Ops.opSWAB             // 0x00Fn   0003DD          11/20+  2.3
];

PDP11Ops.aOp000X_1120 = [
    PDP11Ops.opHALT,            // 0x0000   000000          11/20+  1.8
    PDP11Ops.opWAIT,            // 0x0001   000001          11/20+  1.8
    PDP11Ops.opRTT,             // 0x0002   000002          11/20+  4.8 (this is really RTI, but on the 11/20, it behaves like RTT)
    PDP11Ops.opBPT,             // 0x0003
    PDP11Ops.opIOT,             // 0x0004   000004          11/20+  9.3
    PDP11Ops.opRESET,           // 0x0005   000005          11/20+  20ms
    PDP11Ops.opUndefined,       // 0x0006
    PDP11Ops.opUndefined,       // 0x0007
    PDP11Ops.opUndefined,       // 0x0008
    PDP11Ops.opUndefined,       // 0x0009
    PDP11Ops.opUndefined,       // 0x000A
    PDP11Ops.opUndefined,       // 0x000B
    PDP11Ops.opUndefined,       // 0x000C
    PDP11Ops.opUndefined,       // 0x000D
    PDP11Ops.opUndefined,       // 0x000E
    PDP11Ops.opUndefined        // 0x000F
];

PDP11Ops.aOp00AX_1120 = [
    PDP11Ops.opNOP,             // 0x00A0   000240          11/20+  1.5
    PDP11Ops.opCLC,             // 0x00A1   000241          11/20+  1.5
    PDP11Ops.opCLV,             // 0x00A2   000242          11/20+  1.5
    PDP11Ops.opCLx,             // 0x00A3   000243          11/20+  1.5
    PDP11Ops.opCLZ,             // 0x00A4   000244          11/20+  1.5
    PDP11Ops.opCLx,             // 0x00A5   000245          11/20+  1.5
    PDP11Ops.opCLx,             // 0x00A6   000246          11/20+  1.5
    PDP11Ops.opCLx,             // 0x00A7   000247          11/20+  1.5
    PDP11Ops.opCLN,             // 0x00A8   000250          11/20+  1.5
    PDP11Ops.opCLx,             // 0x00A9   000251          11/20+  1.5
    PDP11Ops.opCLx,             // 0x00AA   000252          11/20+  1.5
    PDP11Ops.opCLx,             // 0x00AB   000253          11/20+  1.5
    PDP11Ops.opCLx,             // 0x00AC   000254          11/20+  1.5
    PDP11Ops.opCLx,             // 0x00AD   000255          11/20+  1.5
    PDP11Ops.opCLx,             // 0x00AE   000256          11/20+  1.5
    PDP11Ops.opCLx              // 0x00AF   000257          11/20+  1.5
];

PDP11Ops.aOp00BX_1120 = [
    PDP11Ops.opNOP,             // 0x00B0   000260          11/20+  1.5
    PDP11Ops.opSEC,             // 0x00B1   000261          11/20+  1.5
    PDP11Ops.opSEV,             // 0x00B2   000262          11/20+  1.5
    PDP11Ops.opSEx,             // 0x00B3   000263          11/20+  1.5
    PDP11Ops.opSEZ,             // 0x00B4   000264          11/20+  1.5
    PDP11Ops.opSEx,             // 0x00B5   000265          11/20+  1.5
    PDP11Ops.opSEx,             // 0x00B6   000266          11/20+  1.5
    PDP11Ops.opSEx,             // 0x00B7   000267          11/20+  1.5
    PDP11Ops.opSEN,             // 0x00B8   000270          11/20+  1.5
    PDP11Ops.opSEx,             // 0x00B9   000271          11/20+  1.5
    PDP11Ops.opSEx,             // 0x00BA   000272          11/20+  1.5
    PDP11Ops.opSEx,             // 0x00BB   000273          11/20+  1.5
    PDP11Ops.opSEx,             // 0x00BC   000274          11/20+  1.5
    PDP11Ops.opSEx,             // 0x00BD   000275          11/20+  1.5
    PDP11Ops.opSEx,             // 0x00BE   000276          11/20+  1.5
    PDP11Ops.opSEx              // 0x00BF   000277          11/20+  1.5
];

PDP11Ops.aOp8Xnn_1120 = [
    PDP11Ops.opBPL,             // 0x80nn   1000XX          11/20+  2.6**
    PDP11Ops.opBMI,             // 0x81nn   1004XX          11/20+  2.6**
    PDP11Ops.opBHI,             // 0x82nn   1010XX          11/20+  2.6**
    PDP11Ops.opBLOS,            // 0x83nn   1014XX          11/20+  2.6**
    PDP11Ops.opBVC,             // 0x84nn   1020XX          11/20+  2.6**
    PDP11Ops.opBVS,             // 0x85nn   1024XX          11/20+  2.6**
    PDP11Ops.opBCC,             // 0x86nn   1030XX          11/20+  2.6**
    PDP11Ops.opBCS,             // 0x87nn   1034XX          11/20+  2.6**
    PDP11Ops.opEMT,             // 0x88nn   104000-104377   11/20+  9.3
    PDP11Ops.opTRAP,            // 0x89nn   104400-104777   11/20+  9.3
    PDP11Ops.op8AXn_1120,       // 0x8Ann
    PDP11Ops.op8BXn_1120,       // 0x8Bnn
    PDP11Ops.op8CXn_1120,       // 0x8Cnn
    PDP11Ops.opUndefined,       // 0x8Dnn
    PDP11Ops.opUndefined,       // 0x8Enn
    PDP11Ops.opUndefined        // 0x8Fnn
];

PDP11Ops.aOp8AXn_1120 = [
    PDP11Ops.opCLRB,            // 0x8A0n   1050DD          11/20+  2.3
    PDP11Ops.opCOMB,            // 0x8A4n   1051DD          11/20+  2.3
    PDP11Ops.opINCB,            // 0x8A8n   1052DD          11/20+  2.3
    PDP11Ops.opDECB             // 0x8ACn   1053DD          11/20+  2.3
];

PDP11Ops.aOp8BXn_1120 = [
    PDP11Ops.opNEGB,            // 0x8B0n   1054DD          11/20+  2.3
    PDP11Ops.opADCB,            // 0x8B4n   1055DD          11/20+  2.3
    PDP11Ops.opSBCB,            // 0x8B8n   1056DD          11/20+  2.3
    PDP11Ops.opTSTB             // 0x8BCn   1057DD          11/20+  2.3*
];

PDP11Ops.aOp8CXn_1120 = [
    PDP11Ops.opRORB,            // 0x8C0n   1060DD          11/20+  2.3*
    PDP11Ops.opROLB,            // 0x8C4n   1061DD          11/20+  2.3*
    PDP11Ops.opASRB,            // 0x8C8n   1062DD          11/20+  2.3*
    PDP11Ops.opASLB             // 0x8CCn   1063DD          11/20+  2.3*
];

PDP11Ops.aOpXnnn_1140 = [
    PDP11Ops.op0Xnn_1140,       // 0x0nnn
    PDP11Ops.opMOV,             // 0x1nnn   01SSDD          11/20+  2.3
    PDP11Ops.opCMP,             // 0x2nnn   02SSDD          11/20+  2.3*
    PDP11Ops.opBIT,             // 0x3nnn   03SSDD          11/20+  2.9*
    PDP11Ops.opBIC,             // 0x4nnn   04SSDD          11/20+  2.9
    PDP11Ops.opBIS,             // 0x5nnn   05SSDD          11/20+  2.3
    PDP11Ops.opADD,             // 0x6nnn   06SSDD          11/20+  2.3
    PDP11Ops.op7Xnn_1140,       // 0x7nnn
    PDP11Ops.op8Xnn_1140,       // 0x8nnn
    PDP11Ops.opMOVB,            // 0x9nnn   11SSDD          11/20+  2.3
    PDP11Ops.opCMPB,            // 0xAnnn   12SSDD          11/20+  2.3
    PDP11Ops.opBITB,            // 0xBnnn   13SSDD          11/20+  2.9
    PDP11Ops.opBICB,            // 0xCnnn   14SSDD          11/20+  2.9
    PDP11Ops.opBISB,            // 0xDnnn   15SSDD          11/20+  2.3
    PDP11Ops.opSUB,             // 0xEnnn   16SSDD          11/20+  2.3
    PDP11Ops.opUndefined        // 0xFnnn
];

PDP11Ops.aOp0Xnn_1140 = [
    PDP11Ops.op00Xn_1140,       // 0x00nn
    PDP11Ops.opBR,              // 0x01nn   0004XX          11/20+  2.6
    PDP11Ops.opBNE,             // 0x02nn   0010XX          11/20+  2.6**
    PDP11Ops.opBEQ,             // 0x03nn   0014XX          11/20+  2.6**
    PDP11Ops.opBGE,             // 0x04nn   0020XX          11/20+  2.6**
    PDP11Ops.opBLT,             // 0x05nn   0024XX          11/20+  2.6**
    PDP11Ops.opBGT,             // 0x06nn   0030XX          11/20+  2.6**
    PDP11Ops.opBLE,             // 0x07nn   0034XX          11/20+  2.6**
    PDP11Ops.opJSR,             // 0x08nn   004RDD          11/20+  4.4
    PDP11Ops.opJSR,             // 0x09nn   004RDD          11/20+  4.4
    PDP11Ops.op0AXn_1120,       // 0x0Ann
    PDP11Ops.op0BXn_1120,       // 0x0Bnn
    PDP11Ops.op0CXn_1120,       // 0x0Cnn
    PDP11Ops.op0DXn_1140,       // 0x0Dnn
    PDP11Ops.opUndefined,       // 0x0Enn
    PDP11Ops.opUndefined        // 0x0Fnn
];

PDP11Ops.aOp0DXn_1140 = [
    PDP11Ops.opMARK,            // 0x0D0n                   11/40+          LEIS
    PDP11Ops.opMFPI,            // 0x0D4n                   11/40+
    PDP11Ops.opMTPI,            // 0x0D8n                   11/40+
    PDP11Ops.opSXT              // 0x0DCn                   11/40+          LEIS
];

PDP11Ops.aOp00Xn_1140 = [
    PDP11Ops.op000X_1140,       // 0x000n   000000-000017
    PDP11Ops.opUndefined,       // 0x001n   000020-000037
    PDP11Ops.opUndefined,       // 0x002n   000040-000057
    PDP11Ops.opUndefined,       // 0x003n   000060-000077
    PDP11Ops.opJMP,             // 0x004n   0001DD          11/20+  1.2
    PDP11Ops.opJMP,             // 0x005n   0001DD          11/20+  1.2
    PDP11Ops.opJMP,             // 0x006n   0001DD          11/20+  1.2
    PDP11Ops.opJMP,             // 0x007n   0001DD          11/20+  1.2
    PDP11Ops.opRTS,             // 0x008n   00020R          11/20+  3.5 (opRTS() will also confirm that bit 3 is clear)
    PDP11Ops.opSPL,             // 0x009n   00023N          11/45+      (opSPL() will also confirm that bit 3 is set)
    PDP11Ops.op00AX_1120,       // 0x00An   000240-000257
    PDP11Ops.op00BX_1120,       // 0x00Bn   000260-000277
    PDP11Ops.opSWAB,            // 0x00Cn   0003DD          11/20+  2.3
    PDP11Ops.opSWAB,            // 0x00Dn   0003DD          11/20+  2.3
    PDP11Ops.opSWAB,            // 0x00En   0003DD          11/20+  2.3
    PDP11Ops.opSWAB             // 0x00Fn   0003DD          11/20+  2.3
];

PDP11Ops.aOp000X_1140 = [
    PDP11Ops.opHALT,            // 0x0000   000000          11/20+  1.8
    PDP11Ops.opWAIT,            // 0x0001   000001          11/20+  1.8
    PDP11Ops.opRTI,             // 0x0002   000002          11/20+  4.8
    PDP11Ops.opBPT,             // 0x0003   000003
    PDP11Ops.opIOT,             // 0x0004   000004          11/20+  9.3
    PDP11Ops.opRESET,           // 0x0005   000005          11/20+  20ms
    PDP11Ops.opRTT,             // 0x0006   000006          11/40+          LEIS
    PDP11Ops.opMFPT,            // 0x0007   000007          11/44+
    PDP11Ops.opUndefined,       // 0x0008
    PDP11Ops.opUndefined,       // 0x0009
    PDP11Ops.opUndefined,       // 0x000A
    PDP11Ops.opUndefined,       // 0x000B
    PDP11Ops.opUndefined,       // 0x000C
    PDP11Ops.opUndefined,       // 0x000D
    PDP11Ops.opUndefined,       // 0x000E
    PDP11Ops.opUndefined        // 0x000F
];

PDP11Ops.aOp7Xnn_1140 = [
    PDP11Ops.opMUL,             // 0x70nn                   11/40+          EIS
    PDP11Ops.opMUL,             // 0x71nn                   11/40+          EIS
    PDP11Ops.opDIV,             // 0x72nn                   11/40+          EIS
    PDP11Ops.opDIV,             // 0x73nn                   11/40+          EIS
    PDP11Ops.opASH,             // 0x74nn                   11/40+          EIS
    PDP11Ops.opASH,             // 0x75nn                   11/40+          EIS
    PDP11Ops.opASHC,            // 0x76nn                   11/40+          EIS
    PDP11Ops.opASHC,            // 0x77nn                   11/40+          EIS
    PDP11Ops.opXOR,             // 0x78nn                   11/40+          LEIS
    PDP11Ops.opXOR,             // 0x79nn                   11/40+          LEIS
    PDP11Ops.opUndefined,       // 0x7Ann
    PDP11Ops.opUndefined,       // 0x7Bnn
    PDP11Ops.opUndefined,       // 0x7Cnn
    PDP11Ops.opUndefined,       // 0x7Dnn
    PDP11Ops.opSOB,             // 0x7Enn                   11/40+          LEIS
    PDP11Ops.opSOB              // 0x7Fnn                   11/40+          LEIS
];

PDP11Ops.aOp8Xnn_1140 = [
    PDP11Ops.opBPL,             // 0x80nn   1000XX          11/20+  2.6**
    PDP11Ops.opBMI,             // 0x81nn   1004XX          11/20+  2.6**
    PDP11Ops.opBHI,             // 0x82nn   1010XX          11/20+  2.6**
    PDP11Ops.opBLOS,            // 0x83nn   1014XX          11/20+  2.6**
    PDP11Ops.opBVC,             // 0x84nn   1020XX          11/20+  2.6**
    PDP11Ops.opBVS,             // 0x85nn   1024XX          11/20+  2.6**
    PDP11Ops.opBCC,             // 0x86nn   1030XX          11/20+  2.6**
    PDP11Ops.opBCS,             // 0x87nn   1034XX          11/20+  2.6**
    PDP11Ops.opEMT,             // 0x88nn   104000-104377   11/20+  9.3
    PDP11Ops.opTRAP,            // 0x89nn   104400-104777   11/20+  9.3
    PDP11Ops.op8AXn_1120,       // 0x8Ann   1050XX
    PDP11Ops.op8BXn_1120,       // 0x8Bnn   1054XX
    PDP11Ops.op8CXn_1120,       // 0x8Cnn   1060XX
    PDP11Ops.op8DXn_1140,       // 0x8Dnn   106400-106777
    PDP11Ops.opUndefined,       // 0x8Enn   1070XX
    PDP11Ops.opUndefined        // 0x8Fnn   1074XX
];

PDP11Ops.aOp8DXn_1140 = [
    PDP11Ops.opMTPS,            // 0x8D0n   1064XX          11/34A only
    PDP11Ops.opMFPD,            // 0x8D4n   1065XX          11/45+
    PDP11Ops.opMTPD,            // 0x8D8n   1066XX          11/45+
    PDP11Ops.opMFPS             // 0x8DCn   1067XX          11/34A only
];

/**
 * @copyright https://www.pcjs.org/machines/dec/pdp11/modules/v3/pdp11.js (C) 2012-2025 Jeff Parsons
 */

/**
 * Overview of Device Interrupt Support
 *
 * Originally, the CPU maintained a queue of requested interrupts.  Entries in this queue recorded a device's
 * priority, vector, and delay (ie, a number of instructions to execute before dispatching the interrupt).  This
 * queue would constantly grow and shrink as requests were issued and dispatched, and as long as there was something
 * in the queue, the CPU was constantly examining it.
 *
 * Now we are trying something more efficient.  First, for devices that require delays (like the SerialPort's receiver
 * and transmitter buffer registers, which are supposed to "clock" the data in and out at a specific baud rate), the
 * CPU offers timer services that will "fire" a callback after a specified delay, which are much more efficient than
 * requiring the CPU to dive into an interrupt queue and decrement delay counts on every instruction.
 *
 * Second, devices that generate interrupts will allocate an IRQ object during initialization; we will no longer
 * be creating and destroying interrupt event objects and inserting/deleting them in a constantly changing queue.
 * Each IRQ contains properties that never change (eg, the vector and priority), along with a "next" pointer that's
 * only used when the IRQ is active.
 *
 * When a device decides it's time to interrupt (either at the end of some I/O operation or when a timer has fired),
 * it will simply set the IRQ, which basically means that the IRQ will be linked onto a list of active IRQs, in
 * priority order, so that when the CPU is ready to acknowledge interrupts, it need only check the top of the active
 * IRQ list.
 */

/** @typedef {{ vector: number, priority: number, message: number, next: (IRQ|null) }} */
let IRQ;

/**
 * Emulation of the PDP-11 CPU
 *
 * @class PDP11
 * @unrestricted
 * @property {Bus} bus
 * @property {Input} input
 */
class PDP11 extends PDP11Ops {
    /**
     * PDP11(idMachine, idDevice, config)
     *
     * The PDP11 class supports the following config properties:
     *
     *      model: a number (eg, 1170) that should match one of the PDP11.MODEL_* values
     *      addrReset: reset address (default is 0)
     *
     * After looking over the timings of PDP-11/70 instructions, nearly all of them appear
     * to be multiples of 150ns.  So that's what we'll consider a cycle.  How many 150ns are
     * in one second?  Approximately 6666667.  So by way of comparison to other PCjs machines,
     * that makes the PDP-11 (or at least the PDP-11/70) look like a 6.67Mhz machine.
     *
     * I've started with the PDP-11/70, since that's what Paul Nankervis started with.  When
     * I go back and add support for earlier PDP-11 models (primarily by neutering functions
     * that didn't exist), I will no doubt have to tweak some instruction cycle counts, too.
     *
     * Examples of operations that take 1 extra cycle (150ns): single and double operand byte
     * instructions with an odd address (except MOV/MTPI/MTPD/JMP/JRS), ADD/SUB/BIC/BIS/MOVB/CMP/BIT
     * instructions with src of R1-R7 and dst of R6-R7, RORB/ASRB with an odd address, and each
     * shift of ASH/ASHC.  As you can see, the rules are not simple.
     *
     * We're not simulating cache hardware, but our timings should be optimistic and assume 100%
     * cache hits; for cache hits, each read cycle is 300ns.  As for write cycles, they are always
     * 750ns.  My initial take on DEC's timings is that they are including the write time as part
     * of the total EF (execute/fetch) time.  So, for instructions that write to memory, it looks
     * like we'll normally need to add 5 cycles (750/150) to the instruction's base time, but
     * we'll need to keep an eye out for exceptions.
     *
     * @this {PDP11}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        this.model = +this.config['model'] || PDP11.MODEL_1170;
        this.addrReset = +this.config['addrReset'] || 0;

        /**
         * Get access to the Bus device and create an IOPage block for it.  We assume that the bus
         * has been defined with an 8K blockSize and an 8-bit dataWidth, because our buses are defined
         * in terms of their MINIMUM data size, not their maximum.  All read/write operations must be
         * some multiple of that minimum (usually 1, 2, or 4), hence the readData()/writeData(),
         * readPair()/writePair(), and readQuad()/writeQuad() bus interfaces.
         */
        this.bus = /** @type {Bus} */ (this.findDeviceByClass("Bus"));
        this.bus.setFaultHandler(this.fault.bind(this));
        this.blockIOPage = /** @type {IOPage} */ (this.findDeviceByClass("IOPage"));
        this.panel = /** @type {Device} */ (this.findDeviceByClass("Panel", false));

        /**
         * We also need some IOPage bookkeeping variables, such as the current IOPage address
         * and the previous block (if any) at that address.
         */
        this.addrIOPage = 0;
        this.blockIOPagePrev = null;

        /**
         * Get access to the Input device, so we can call setFocus() as needed.
         */
        this.input = /** @type {Input} */ (this.findDeviceByClass("Input", false));

        /**
         * Initialize processor operation to match the requested model.
         *
         * offRegSrc is a bias added to the register index calculated in readSrcWord() and readSrcByte(),
         * and by default has no effect on the register index, UNLESS this is a PDP-11/20, in which case the
         * bias is changed to 8 and we return one of the negative values you see above.  Those negative values
         * act as signals to writeDstWord() and writeDstByte(), effectively delaying evaluation of the register
         * until then.
         */
        this.offRegSrc = 0;
        this.maskRegSrcByte = 0xff;

        if (this.model <= PDP11.MODEL_1120) {
            this.opDecode = PDP11.op1120.bind(this);
            this.checkStackLimit = this.checkStackLimit1120;
            this.offRegSrc = 8;
            this.maskRegSrcByte = -1;
            this.pswUsed = ~(PDP11.PSW.UNUSED | PDP11.PSW.REGSET | PDP11.PSW.PMODE | PDP11.PSW.CMODE) & 0xffff;
            this.pswRegSet = 0;
        } else {
            this.opDecode = PDP11.op1140.bind(this);
            this.checkStackLimit = this.checkStackLimit1140;
            /**
             * The alternate register set (REGSET) doesn't exist on the 11/20 or 11/40; it's available on the 11/45 and 11/70.
             * Ditto for separate I/D spaces, SUPER mode, and the instructions MFPD, MTPD, and SPL.
             */
            this.pswUsed = ~(PDP11.PSW.UNUSED | (this.model <= PDP11.MODEL_1140? PDP11.PSW.REGSET : 0)) & 0xffff;
            this.pswRegSet = (this.model > PDP11.MODEL_1140? PDP11.PSW.REGSET : 0);
        }

        this.nDisableTraps = 0;
        this.trapVector = this.trapReason = 0;

        /** @type {IRQ|null} */
        this.irqNext = null;            // the head of the active IRQ list, in priority order

        /** @type {Array.<IRQ>} */
        this.aIRQs = [];                // list of all IRQs, active or not (to be used for auto-configuration)

        this.srcMode = this.srcReg = 0;
        this.dstMode = this.dstReg = this.dstAddr = 0;
        this.nReadBreaks = this.nWriteBreaks = 0;

        /**
         * We can now initialize the CPU.
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
     * @this {PDP11}
     * @param {number} nCycles
     */
    execute(nCycles)
    {
    }

    /**
     * initCPU()
     *
     * Initializes the CPU's state.
     *
     * @this {PDP11}
     */
    initCPU()
    {
        /**
         * TODO: Verify the initial state of all PDP-11 flags and registers (are they well-documented?)
         */
        let f = 0xffff;
        this.flagC = 0x10000;       // PSW C bit
        this.flagV  = 0x8000;       // PSW V bit
        this.flagZ  = f;            // PSW Z bit        (TODO: Why do we clear instead of set Z, like other flags?)
        this.flagN  = 0x8000;       // PSW N bit
        this.regPSW = 0x000f;       // PSW other bits   (TODO: What's the point of setting the flag bits here, too?)

        this.regsGen = [            // General R0-R7
            0, 0, 0, 0, 0, 0, 0, this.addrReset, -1, -2, -3, -4, -5, -6, -7, -8
        ];
        this.regsAlt = [            // Alternate R0-R5
            0, 0, 0, 0, 0, 0
        ];
        this.regsAltStack = [       // Alternate R6 stack pointers (KERNEL, SUPER, UNUSED, USER)
            0, 0, 0, 0
        ];
        this.regsPAR = [            // memory management PAR registers by mode
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],   // KERNEL (8 KIPAR regs followed by 8 KDPAR regs)
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],   // SUPER  (8 SIPDR regs followed by 8 SDPDR regs)
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],   // mode 2 (not used)
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]    // USER   (8 UIPDR regs followed by 8 UDPDR regs)
        ];
        this.regsPDR = [            // memory management PDR registers by mode
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],   // KERNEL (8 KIPDR regs followed by 8 KDPDR regs)
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],   // SUPER  (8 SIPDR regs followed by 8 SDPDR regs)
            [f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f],   // mode 2 (not used)
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]    // USER   (8 UIPDR regs followed by 8 UDPDR regs)
        ];
        this.regsUNIMap = [         // 32 UNIBUS map registers
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ];
        this.regsControl = [        // various control registers (177740-177756) we don't really care about
            0, 0, 0, 0, 0, 0, 0, 0
        ];

        this.pswMode = 0;           // current memory management mode (see PDP11.MODE.KERNEL | SUPER | UNUSED | USER)
        this.pswTrap = -1;
        this.regMBR = 0;

        /**
         * opFlags contains various conditions that stepCPU() needs to be aware of.
         */
        this.opFlags = 0;

        /**
         * srcMode and srcReg are set by SRCMODE decodes, and dstMode and dstReg are set for DSTMODE decodes,
         * indicating to the opcode handlers the mode(s) and register(s) used as part of the current opcode, so
         * that they can calculate the correct number of cycles.  dstAddr is set for byte operations that also
         * need to know the effective address for their cycle calculation.
         */
        this.srcMode = this.srcReg = 0;
        this.dstMode = this.dstReg = this.dstAddr = 0;

        this.initMMU();

        for (let i = 0; i <= 7; i++) {
            this.defineRegister("R"+i, () => this.regsGen[i], (value) => this.regsGen[i] = value & 0xffff);
        }
        this.defineRegisterAlias("R6", "SP");
        this.defineRegisterAlias("R7", Debugger.REGISTER.PC);
        this.defineRegister("CF", () => (this.getCF()? 1 : 0), (value) => {value? this.setCF() : this.clearCF();});
        this.defineRegister("NF", () => (this.getNF()? 1 : 0), (value) => {value? this.setNF() : this.clearNF();});
        this.defineRegister("VF", () => (this.getVF()? 1 : 0), (value) => {value? this.setVF() : this.clearVF();});
        this.defineRegister("ZF", () => (this.getZF()? 1 : 0), (value) => {value? this.setZF() : this.clearZF();});
        this.defineRegister("PS", () => this.getPSW(), (value) => this.setPSW(value));
        this.defineRegister("PI", () => this.getPIR(), (value) => this.setPIR(value));
        this.defineRegister("ER", () => this.regErr);
        this.defineRegister("SL", () => this.getSLR(), (value) => this.setSLR(value));
        this.defineRegister("M0", () => this.getMMR0(), (value) => this.setMMR0(value));
        this.defineRegister("M1", () => this.getMMR1());
        this.defineRegister("M2", () => this.getMMR2());
        this.defineRegister("M3", () => this.getMMR3(), (value) => this.setMMR3(value));
        // if (this.panel) {
        //     this.defineRegister("AR", () => this.panel.getAR(), (value) => this.panel.setAR(value));
        //     this.defineRegister("DR", () => this.panel.getDR(), (value) => this.panel.setDR(value));
        //     this.defineRegister("SR", () => this.panel.getSR(), (value) => this.panel.setSR(value));
        // }
    }

    /**
     * initMMU()
     *
     * Reset all registers required as part of a RESET instruction.
     *
     * TODO: Do we ever need to automatically clear regErr, or is it cleared manually?
     *
     * @this {PDP11}
     */
    initMMU()
    {
        this.regMMR0 = 0;           // 177572
        this.regMMR1 = 0;           // 177574
        this.regMMR2 = 0;           // 177576
        this.regMMR3 = 0;           // 172516
        this.regErr = 0;            // 177766
        this.regPIR = 0;            // 177772
        this.regSLR = 0xff;         // 177774
        this.mmuEnable = 0;         // MMU enabled for PDP11.ACCESS.READ or PDP11.ACCESS.WRITE
        this.mmuLastMode = 0;
        this.mmuLastPage = 0;
        this.mmuMask = 0x3ffff;
        this.mapMMR3 = [4,2,0,1];   // map from mode to MMR3 I/D bit

        /**
         * This is queried and displayed by the Panel when it's not displaying its own ADDRESS register
         * (which takes precedence when, for example, you've manually halted the CPU and are independently
         * examining the contents of other addresses).
         *
         * We initialize it to whatever the current PC is, because according to paulnank's pdp11.js: "Reset
         * displays next instruction address" and initMMU() is called on a RESET.
         */
        this.addrLast = this.regsGen[7];

        /**
         * This stores the PC in the lower 16 bits, and any auto-incs or auto-decs from the last opcode in the
         * upper 16 bits;  the lower 16 bits are used to update MMR2, and the upper 16 bits are used to update MMR1.
         * The upper bits are automatically zeroed at the start of every operation when the PC is copied to opLast.
         */
        this.opLast = 0;
        this.resetIRQs();
        this.setMemoryAccess();
        this.addrInvalid = this.bus.getMemoryLimit(Memory.TYPE.READWRITE);
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
     * @this {PDP11}
     * @param {boolean} [fTransition]
     */
    onUpdate(fTransition)
    {
        // TODO: Decide what bindings we want to support, and update them as appropriate.
    }

    /**
     * getMMR0()
     *
     * NOTE: It's OK to bypass this function if you're only interested in bits that always stored directly in MMR0.
     *
     * 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 MMR0
     * nonr leng read trap unus unus ena mnt cmp  -mode- i/d  --page--   enable
     *
     * @this {PDP11}
     * @returns {number}
     */
    getMMR0()
    {
        let data = this.regMMR0;
        if (!(data & PDP11.MMR0.ABORT)) {
            data = (data & ~(PDP11.MMR0.UNUSED | PDP11.MMR0.PAGE | PDP11.MMR0.MODE)) | (this.mmuLastMode << 5) | (this.mmuLastPage << 1);
        }
        return data;
    }

    /**
     * setMMR0()
     *
     * @this {PDP11}
     * @param {number} newMMR0
     */
    setMMR0(newMMR0)
    {
        newMMR0 &= ~PDP11.MMR0.UNUSED;

        if (this.regMMR0 != newMMR0) {
            if (newMMR0 & PDP11.MMR0.ABORT) {
                /**
                 * If updates to MMR0[1-7], MMR1, and MMR2 are being shut off (ie, MMR0.ABORT bits are transitioning
                 * from clear to set), then do one final sync with their real-time counterparts in opLast.
                 */
                if (!(this.regMMR0 & PDP11.MMR0.ABORT)) {
                    this.regMMR1 = (this.opLast >> 16) & 0xffff;
                    this.regMMR2 = this.opLast & 0xffff;
                }
            }
            /**
             * NOTE: We are not protecting the read-only state of the COMPLETED bit here; that's handled by writeMMR0().
             */
            this.regMMR0 = newMMR0;
            this.mmuLastMode = (newMMR0 & PDP11.MMR0.MODE) >> PDP11.MMR0.SHIFT.MODE;
            this.mmuLastPage = (newMMR0 & PDP11.MMR0.PAGE) >> PDP11.MMR0.SHIFT.PAGE;
            let mmuEnable = 0;
            if (newMMR0 & (PDP11.MMR0.ENABLED | PDP11.MMR0.MAINT)) {
                mmuEnable = PDP11.ACCESS.WRITE;
                if (newMMR0 & PDP11.MMR0.ENABLED) mmuEnable |= PDP11.ACCESS.READ;
            }
            if (this.mmuEnable != mmuEnable) {
                this.mmuEnable = mmuEnable;
                this.setMemoryAccess();
            }
        }
    }

    /**
     * getMMR1()
     *
     * @this {PDP11}
     * @returns {number}
     */
    getMMR1()
    {
        /**
         * If updates to MMR1 have not been shut off (ie, MMR0.ABORT bits are clear), then we are allowed
         * to sync MMR1 with its real-time counterpart in opLast.
         *
         * UPDATE: Apparently, I was mistaken that this register would only be updated when the MMR0 ENABLED
         * bit was set.
         *
         *      if ((this.regMMR0 & (PDP11.MMR0.ABORT | PDP11.MMR0.ENABLED)) == PDP11.MMR0.ENABLED)
         */
        if (!(this.regMMR0 & PDP11.MMR0.ABORT)) {
            this.regMMR1 = (this.opLast >> 16) & 0xffff;
        }
        let result = this.regMMR1;
        if (result & 0xff00) {
            result = ((result << 8) | (result >> 8)) & 0xffff;
        }
        return result;
    }

    /**
     * getMMR2()
     *
     * @this {PDP11}
     * @returns {number}
     */
    getMMR2()
    {
        /**
         * If updates to MMR2 have not been shut off (ie, MMR0.ABORT bits are clear), then we are allowed
         * to sync MMR2 with its real-time counterpart in opLast.
         *
         * UPDATE: Apparently, I was mistaken that this register would only be updated when the MMR0 ENABLED
         * bit was set.
         *
         *      if ((this.regMMR0 & (PDP11.MMR0.ABORT | PDP11.MMR0.ENABLED)) == PDP11.MMR0.ENABLED)
         */
        if (!(this.regMMR0 & PDP11.MMR0.ABORT)) {
            this.regMMR2 = this.opLast & 0xffff;
        }
        return this.regMMR2;
    }

    /**
     * getMMR3()
     *
     * @this {PDP11}
     * @returns {number}
     */
    getMMR3()
    {
        return this.regMMR3;
    }

    /**
     * setMMR3()
     *
     * @this {PDP11}
     * @param {number} newMMR3
     */
    setMMR3(newMMR3)
    {
        /**
         * Don't allow non-11/70 models to use 22-bit addressing or the UNIBUS map.
         */
        if (this.model < PDP11.MODEL_1170) {
            newMMR3 &= ~(PDP11.MMR3.MMU_22BIT | PDP11.MMR3.UNIBUS_MAP);
        }
        if (this.regMMR3 != newMMR3) {
            this.regMMR3 = newMMR3;
            this.mmuMask = (newMMR3 & PDP11.MMR3.MMU_22BIT)? PDP11.MASK_22BIT : PDP11.MASK_18BIT;
            this.setMemoryAccess();
        }
    }

    /**
     * setReset(addr, fStart, bUnit, addrStack)
     *
     * @this {PDP11}
     * @param {number} addr
     * @param {boolean} [fStart] (true if a "startable" image was just loaded, false if not)
     * @param {number} [bUnit] (boot unit #)
     * @param {number} [addrStack]
     */
    setReset(addr, fStart, bUnit, addrStack)
    {
        this.addrReset = addr;

        this.setPC(addr);
        this.setPSW(0);
        this.resetCPU();

        if (fStart) {
            this.regsGen[0] = bUnit || 0;
            for (let i = 1; i <= 5; i++) this.regsGen[i] = 0;
            this.regsGen[6] = addrStack || 0o2000;
            // if (!this.flags.powered) {
            //     this.flags.autoStart = true;
            // }
            // else if (!this.flags.running) {
            //     this.startCPU();
            // }
        }
        else {
            // if (this.dbg && this.flags.powered) {
            //     /*
            //      * TODO: Review the decision to always stop the CPU if the Debugger is loaded.  Note that
            //      * when stopCPU() stops a running CPU, the Debugger gets notified, so no need to notify it again.
            //      *
            //      * TODO: There are more serious problems to deal with if another component is slamming a new PC down
            //      * the CPU's throat (presumably while also dropping some new code into RAM) while the CPU is running;
            //      * we should probably force a complete reset, but for now, it's up to the user to hit the reset button
            //      * themselves.
            //      */
            //     if (!this.stopCPU() && !this.cmp.flags.reset) {
            //         this.dbg.updateStatus();
            //         this.cmp.updateDisplays(-1);
            //     }
            // }
            // else if (fStart === false) {
            //     this.stopCPU();
            // }
        }
        // if (!this.isRunning() && this.panel) this.panel.stop();
    }

    /**
     * getMMUState()
     *
     * Returns bit 0 set if 22-bit, bit 1 set if 18-bit, or bit 2 set if 16-bit; used by the Panel component.
     *
     * @this {PDP11}
     * @returns {number}
     */
    getMMUState()
    {
        return this.mmuEnable? ((this.regMMR3 & PDP11.MMR3.MMU_22BIT)? 1 : 2) : 4;
    }

    /**
     * resetCPU()
     *
     * @this {PDP11}
     */
    resetCPU()
    {
        // TODO: Make sure all devices get reset notifications, and the IOPage address is reset.
        this.initMMU();
    }

    /**
     * setMemoryAccess()
     *
     * Define handlers and DSPACE setting appropriate for the current MMU mode, in order to eliminate
     * unnecessary calls to mapVirtualToPhysical().
     *
     * @this {PDP11}
     */
    setMemoryAccess()
    {
        if (this.blockIOPagePrev) {
            this.bus.setBlock(this.addrIOPage, this.blockIOPagePrev);
        }
        if (!this.mmuEnable) {
            this.addrDSpace = 0;
            this.addrIOPage = PDP11.IOPAGE_16BIT;
            this.getAddr = this.getPhysicalAddrByMode;
            this.readWord = this.readWordFromPhysical;
            this.writeWord = this.writeWordToPhysical;
        } else {
            this.addrDSpace = PDP11.ACCESS.DSPACE;
            this.addrIOPage = (this.regMMR3 & PDP11.MMR3.MMU_22BIT)? PDP11.IOPAGE_22BIT : PDP11.IOPAGE_18BIT;
            this.getAddr = this.getVirtualAddrByMode;
            this.readWord = this.nReadBreaks? this.readWordFromVirtualChecked : this.readWordFromVirtual;
            this.writeWord = this.nWriteBreaks? this.writeWordToVirtualChecked : this.writeWordToVirtual;
        }
        this.blockIOPagePrev = this.bus.setBlock(this.addrIOPage, this.blockIOPage);
    }

    /**
     * loadState(stateCPU)
     *
     * If any saved values don't match (possibly overridden), abandon the given state and return false.
     *
     * @this {PDP11}
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
        if (idDevice != this.idDevice || (version|0) !== (+PDP11.VERSION|0)) {
            this.printf("CPU state mismatch (%s %3.2f)\n", idDevice, version);
            return false;
        }
        try {
            this.regsGen = stateCPU.shift();
            this.regsAlt = stateCPU.shift();
            this.regsAltStack = stateCPU.shift();
            this.regsPAR = stateCPU.shift();
            this.regsPDR = stateCPU.shift();
            this.regsUNIMap = stateCPU.shift();
            this.regsControl = stateCPU.shift();
            this.regErr = stateCPU.shift();
            this.regMBR = stateCPU.shift();
            this.regPIR = stateCPU.shift();
            this.regSLR = stateCPU.shift();
            this.mmuLastMode = stateCPU.shift();
            this.mmuLastPage = stateCPU.shift();
            this.addrLast = stateCPU.shift();
            this.opFlags = stateCPU.shift();
            this.opLast = stateCPU.shift();
            this.pswTrap = stateCPU.shift();
            this.trapReason = stateCPU.shift();
            this.trapVector = stateCPU.shift();
            this.addrReset = stateCPU.shift();
            this.setPSW(stateCPU.shift());
            this.setMMR0(stateCPU.shift());
            this.regMMR1 = stateCPU.shift();
            this.regMMR2 = stateCPU.shift();
            this.setMMR3(stateCPU.shift());
            this.restoreIRQs(stateCPU.shift());
            // this.restoreTimers(stateCPU.shift());
        } catch(err) {
            this.printf("CPU state error: %s\n", err.message);
            return false;
        }
        return true;
    }

    /**
     * saveState(stateCPU)
     *
     * @this {PDP11}
     * @param {Array} stateCPU
     */
    saveState(stateCPU)
    {
        stateCPU.push(this.idDevice);
        stateCPU.push(+PDP11.VERSION);
        stateCPU.push(this.regsGen);
        stateCPU.push(this.regsAlt);
        stateCPU.push(this.regsAltStack);
        stateCPU.push(this.regsPAR);
        stateCPU.push(this.regsPDR);
        stateCPU.push(this.regsUNIMap);
        stateCPU.push(this.regsControl);
        stateCPU.push(this.regErr);
        stateCPU.push(this.regMBR);
        stateCPU.push(this.regPIR);
        stateCPU.push(this.regSLR);
        stateCPU.push(this.mmuLastMode);
        stateCPU.push(this.mmuLastPage);
        stateCPU.push(this.addrLast);
        stateCPU.push(this.opFlags);
        stateCPU.push(this.opLast);
        stateCPU.push(this.pswTrap);
        stateCPU.push(this.trapReason);
        stateCPU.push(this.trapVector);
        stateCPU.push(this.addrReset);
        stateCPU.push(this.getPSW());
        stateCPU.push(this.getMMR0());
        stateCPU.push(this.getMMR1());
        stateCPU.push(this.getMMR2());
        stateCPU.push(this.getMMR3());
        stateCPU.push(this.saveIRQs());
        // stateCPU.push(this.saveTimers());
    }

    /**
     * clearCF()
     *
     * @this {PDP11}
     */
    clearCF()
    {
        this.flagC = 0;
    }

    /**
     * getCF()
     *
     * @this {PDP11}
     * @returns {number} 0 or PDP11.PSW.CF
     */
    getCF()
    {
        return (this.flagC & 0x10000)? PDP11.PSW.CF: 0;
    }

    /**
     * setCF()
     *
     * @this {PDP11}
     */
    setCF()
    {
        this.flagC = 0x10000;
    }

    /**
     * clearVF()
     *
     * @this {PDP11}
     */
    clearVF()
    {
        this.flagV = 0;
    }

    /**
     * getVF()
     *
     * @this {PDP11}
     * @returns {number} 0 or PDP11.PSW.VF
     */
    getVF()
    {
        return (this.flagV & 0x8000)? PDP11.PSW.VF: 0;
    }

    /**
     * setVF()
     *
     * @this {PDP11}
     */
    setVF()
    {
        this.flagV = 0x8000;
    }

    /**
     * clearZF()
     *
     * @this {PDP11}
     */
    clearZF()
    {
        this.flagZ = 1;
    }

    /**
     * getZF()
     *
     * @this {PDP11}
     * @returns {number} 0 or PDP11.PSW.ZF
     */
    getZF()
    {
        return (this.flagZ & 0xffff)? 0 : PDP11.PSW.ZF;
    }

    /**
     * setZF()
     *
     * @this {PDP11}
     */
    setZF()
    {
        this.flagZ = 0;
    }

    /**
     * clearNF()
     *
     * @this {PDP11}
     */
    clearNF()
    {
        this.flagN = 0;
    }

    /**
     * getNF()
     *
     * @this {PDP11}
     * @returns {number} 0 or PDP11.PSW.NF
     */
    getNF()
    {
        return (this.flagN & 0x8000)? PDP11.PSW.NF : 0;
    }

    /**
     * setNF()
     *
     * @this {PDP11}
     */
    setNF()
    {
        this.flagN = 0x8000;
    }

    /**
     * getOpcode()
     *
     * @this {PDP11}
     * @returns {number}
     */
    getOpcode()
    {
        let pc = this.opLast = this.regsGen[PDP11.REG.PC];
        /**
         * If PC is unaligned, a BUS trap will be generated, and because it will generate an
         * exception, the next line (the equivalent of advancePC(2)) will not be executed, ensuring that
         * original unaligned PC will be pushed onto the stack by trap().
         */
        let opcode = this.readWord(pc);
        this.regsGen[PDP11.REG.PC] = (pc + 2) & 0xffff;
        return opcode;
    }

    /**
     * advancePC(off)
     *
     * NOTE: This function is nothing more than a convenience, and we fully expect it to be inlined at runtime.
     *
     * @this {PDP11}
     * @param {number} off
     * @returns {number} (original PC)
     */
    advancePC(off)
    {
        let pc = this.regsGen[PDP11.REG.PC];
        this.regsGen[PDP11.REG.PC] = (pc + off) & 0xffff;
        return pc;
    }

    /**
     * branch(opcode)
     *
     * @this {PDP11}
     * @param {number} opcode
     * @param {boolean|number} condition
     */
    branch(opcode, condition)
    {
        if (condition) {
            let off = ((opcode << 24) >> 23);
            if (PDP11.DEBUG && this.dbg && off == -2) {
                this.dbg.stopCPU("branch to self");
            }
            this.setPC(this.getPC() + off);
            this.nStepCycles -= 2;
        }
        this.nStepCycles -= (2 + 1);
    }

    /**
     * getPC()
     *
     * NOTE: This function is nothing more than a convenience, and we fully expect it to be inlined at runtime.
     *
     * @this {PDP11}
     * @returns {number}
     */
    getPC()
    {
        return this.regsGen[PDP11.REG.PC];
    }

    /**
     * getLastAddr()
     *
     * @this {PDP11}
     * @returns {number}
     */
    getLastAddr()
    {
        return this.addrLast;
    }

    /**
     * getLastPC()
     *
     * @this {PDP11}
     * @returns {number}
     */
    getLastPC()
    {
        return this.opLast & 0xffff;
    }

    /**
     * setPC()
     *
     * NOTE: Unlike other PCjs emulators, such as PCx86, where all PC updates MUST go through the setPC()
     * function, this function is nothing more than a convenience, because in the PDP-11, the PC can be loaded
     * like any other general register.  We fully expect this function to be inlined at runtime.
     *
     * @this {PDP11}
     * @param {number} addr
     */
    setPC(addr)
    {
        this.regsGen[PDP11.REG.PC] = addr & 0xffff;
    }

    /**
     * getSP()
     *
     * NOTE: This function is nothing more than a convenience, and we fully expect it to be inlined at runtime.
     *
     * @this {PDP11}
     * @returns {number}
     */
    getSP()
    {
        return this.regsGen[PDP11.REG.SP];
    }

    /**
     * setSP()
     *
     * NOTE: Unlike other PCjs emulators, such as PCx86, where all SP updates MUST go through the setSP()
     * function, this function is nothing more than a convenience, because in the PDP-11, the PC can be loaded
     * like any other general register.  We fully expect this function to be inlined at runtime.
     *
     * @this {PDP11}
     * @param {number} addr
     */
    setSP(addr)
    {
        this.regsGen[PDP11.REG.SP] = addr & 0xffff;
    }

    /**
     * addIRQ(vector, priority, message)
     *
     * @this {PDP11}
     * @param {number} vector (-1 for floating vector)
     * @param {number} priority
     * @param {number} [message]
     * @returns {IRQ}
     */
    addIRQ(vector, priority, message)
    {
        let irq = {vector: vector, priority: priority, message: message || 0, name: PDP11.VECTORS[vector], next: null};
        this.aIRQs.push(irq);
        return irq;
    }

    /**
     * insertIRQ(irq)
     *
     * @this {PDP11}
     * @param {IRQ} irq
     */
    insertIRQ(irq)
    {
        if (irq != this.irqNext) {
            let irqPrev = this.irqNext;
            if (!irqPrev || irqPrev.priority <= irq.priority) {
                irq.next = irqPrev;
                this.irqNext = irq;
            } else {
                do {
                    let irqNext = irqPrev.next;
                    if (!irqNext || irqNext.priority <= irq.priority) {
                        irq.next = irqNext;
                        irqPrev.next = irq;
                        break;
                    }
                    irqPrev = irqNext;
                } while (irqPrev);
            }
        }
        /**
         * See the writeXCSR() function for an explanation of why signalling an IRQ hardware interrupt
         * should be done using IRQ_DELAY rather than setting IRQ directly.
         */
        this.opFlags |= PDP11.OPFLAG.IRQ_DELAY;
    }

    /**
     * removeIRQ(irq)
     *
     * @this {PDP11}
     * @param {IRQ} irq
     */
    removeIRQ(irq)
    {
        let irqPrev = this.irqNext;
        if (irqPrev == irq) {
            this.irqNext = irq.next;
        } else {
            while (irqPrev) {
                let irqNext = irqPrev.next;
                if (irqNext == irq) {
                    irqPrev.next = irqNext.next;
                    break;
                }
                irqPrev = irqNext;
            }
        }
        /**
         * We could also set irq.next to null now, but strictly speaking, that shouldn't be necessary.
         *
         * Last but not least, if there's still an IRQ on the active IRQ list, we need to make sure IRQ_DELAY
         * is still set.
         */
        if (this.irqNext) {
            this.opFlags |= PDP11.OPFLAG.IRQ_DELAY;
        }
    }

    /**
     * setIRQ(irq)
     *
     * @this {PDP11}
     * @param {IRQ|null} irq
     */
    setIRQ(irq)
    {
        if (irq) {
            this.insertIRQ(irq);
            this.printf(MESSAGE.INT + irq.message, "setIRQ(vector=%o,priority=%d)\n", irq.vector, irq.priority + ")");
        }
    }

    /**
     * clearIRQ(irq)
     *
     * @this {PDP11}
     * @param {IRQ|null} irq
     */
    clearIRQ(irq)
    {
        if (irq) {
            this.removeIRQ(irq);
            this.printf(MESSAGE.INT + irq.message, "clearIRQ(vector=%o,priority=%d)\n", irq.vector, irq.priority + ")");
        }
    }

    /**
     * findIRQ(vector)
     *
     * @this {PDP11}
     * @param {number} vector
     * @returns {IRQ|null}
     */
    findIRQ(vector)
    {
        for (let i = 0; i < this.aIRQs.length; i++) {
            let irq = this.aIRQs[i];
            if (irq.vector === vector) return irq;
        }
        return null;
    }

    /**
     * checkIRQs(priority)
     *
     * @this {PDP11}
     * @param {number} priority
     * @returns {IRQ|null}
     */
    checkIRQs(priority)
    {
        return (this.irqNext && this.irqNext.priority > priority)? this.irqNext : null;
    }

    /**
     * resetIRQs(priority)
     *
     * @this {PDP11}
     */
    resetIRQs()
    {
        this.irqNext = null;
    }

    /**
     * saveIRQs()
     *
     * @this {PDP11}
     * @returns {Array.<number>}
     */
    saveIRQs()
    {
        let aIRQVectors = [];
        let irq = this.irqNext;
        while (irq) {
            aIRQVectors.push(irq.vector);
            irq = irq.next;
        }
        return aIRQVectors;
    }

    /**
     * restoreIRQs(aIRQVectors)
     *
     * @this {PDP11}
     * @param {Array.<number>} aIRQVectors
     */
    restoreIRQs(aIRQVectors)
    {
        for (let i = aIRQVectors.length - 1; i >= 0; i--) {
            let irq = this.findIRQ(aIRQVectors[i]);

            if (irq) {
                irq.next = this.irqNext;
                this.irqNext = irq;
            }
        }
    }

    /**
     * checkInterrupts()
     *
     * @this {PDP11}
     * @returns {boolean} true if an interrupt was dispatched, false if not
     */
    checkInterrupts()
    {
        let fInterrupt = false;

        if (this.opFlags & PDP11.OPFLAG.IRQ) {

            let vector = PDP11.TRAP.PIRQ;
            let priority = (this.regPIR & PDP11.PSW.PRI) >> PDP11.PSW.SHIFT.PRI;

            let irq = this.checkIRQs(priority);
            if (irq) {
                vector = irq.vector;
                priority = irq.priority;
            }

            if (this.dispatchInterrupt(vector, priority)) {
                if (irq) this.removeIRQ(irq);
                fInterrupt = true;
            }

            if (!this.irqNext && !this.regPIR) {
                this.opFlags &= ~PDP11.OPFLAG.IRQ;
            }
        }
        else if (this.opFlags & PDP11.OPFLAG.IRQ_DELAY) {
            /**
             * We know that IRQ (bit 2) is clear, so since IRQ_DELAY (bit 0) is set, incrementing opFlags
             * will eventually transform IRQ_DELAY into IRQ, without affecting any other (higher) bits.
             */
            this.opFlags++;
        }
        return fInterrupt;
    }

    /**
     * dispatchInterrupt(vector, priority)
     *
     * TODO: The process of dispatching an interrupt MUST cost some cycles; either trap() needs to assess
     * that cost, or we do.
     *
     * @this {PDP11}
     * @param {number} vector
     * @param {number} priority
     * @returns {boolean} (true if dispatched, false if not)
     */
    dispatchInterrupt(vector, priority)
    {
        let priorityCPU = (this.regPSW & PDP11.PSW.PRI) >> PDP11.PSW.SHIFT.PRI;
        if (priority > priorityCPU) {
            if (this.opFlags & PDP11.OPFLAG.WAIT) {
                this.advancePC(2);
                this.opFlags &= ~PDP11.OPFLAG.WAIT;
            }
            this.trap(vector, 0, PDP11.REASON.INTERRUPT);
            return true;
        }
        return false;
    }

    /**
     * checkTraps()
     *
     * NOTE: The following code processes these "deferred" traps in priority order.  Unfortunately, that
     * order seems to have changed since the 11/20.  For reference, here's the priority list for the 11/20:
     *
     *      1. Bus Errors
     *      2. Instruction Traps
     *      3. Trace Trap
     *      4. Stack Overflow Trap
     *      5. Power Failure Trap
     *
     * and for the 11/70:
     *
     *      1. HALT (Instruction, Switch, or Command)
     *      2. MMU Faults
     *      3. Parity Errors
     *      4. Bus Errors (including stack overflow traps?)
     *      5. Floating Point Traps
     *      6. TRAP Instruction
     *      7. TRACE Trap
     *      8. OVFL Trap
     *      9. Power Fail Trap
     *     10. Console Bus Request (Front Panel Operation)
     *     11. PIR 7, BR 7, PIR 6, BR 6, PIR 5, BR 5, PIR 4, BR 4, PIR 3, BR 3, PIR 2, PIR 1
     *     12. WAIT Loop
     *
     * TODO: Determine 1) if the 11/20 Handbook was wrong, or 2) if the 11/70 really has different priorities.
     *
     * Also, as the PDP-11/20 Handbook (1971), p.100, notes:
     *
     *      If a bus error is caused by the trap process handling instruction traps, trace traps, stack overflow
     *      traps, or a previous bus error, the processor is halted.
     *
     *      If a stack overflow is caused by the trap process in handling bus errors, instruction traps, or trace traps,
     *      the process is completed and then the stack overflow trap is sprung.
     *
     * TODO: Based on the above notes, we should probably be halting the CPU when a bus error occurs during a trap.
     *
     * @this {PDP11}
     * @returns {boolean} (true if dispatched, false if not)
     */
    checkTraps()
    {
        if (this.opFlags & PDP11.OPFLAG.TRAP_MMU) {
            this.trap(PDP11.TRAP.MMU, PDP11.OPFLAG.TRAP_MMU, PDP11.REASON.FAULT);
            return true;
        }
        if (this.opFlags & PDP11.OPFLAG.TRAP_SP) {
            this.trap(PDP11.TRAP.BUS, PDP11.OPFLAG.TRAP_SP, PDP11.REASON.YELLOW);
            return true;
        }
        if (this.opFlags & PDP11.OPFLAG.TRAP_TF) {
            this.trap(PDP11.TRAP.BPT, PDP11.OPFLAG.TRAP_TF, PDP11.REASON.TRACE);
            return true;
        }
        return false;
    }

    /**
     * isWaiting()
     *
     * @this {PDP11}
     * @returns {boolean} (true if OPFLAG.WAIT is set, false otherwise)
     */
    isWaiting()
    {
        return !!(this.opFlags & PDP11.OPFLAG.WAIT);
    }

    /**
     * getPSW()
     *
     * @this {PDP11}
     * @returns {number}
     */
    getPSW()
    {
        let mask = PDP11.PSW.CMODE | PDP11.PSW.PMODE | PDP11.PSW.REGSET | PDP11.PSW.PRI | PDP11.PSW.TF;
        return this.regPSW = (this.regPSW & mask) | this.getNF() | this.getZF() | this.getVF() | this.getCF();
    }

    /**
     * setPSW(newPSW)
     *
     * This updates the CPU Processor Status Word.  The PSW should generally be written through
     * this routine so that changes can be tracked properly, for example the correct register set,
     * the current memory management mode, etc.  An exception is SPL which writes the priority directly.
     * Note that that N, Z, V, and C flags are actually stored separately for performance reasons.
     *
     * PSW    15 14 13 12 11 10  9  8  7  6  5  4  3  2  1  0
     *        CMODE PMODE RS -------- PRIORITY  T  N  Z  V  C
     *
     * @this {PDP11}
     * @param {number} newPSW
     */
    setPSW(newPSW)
    {
        newPSW &= this.pswUsed;
        this.flagN = newPSW << 12;
        this.flagZ = (~newPSW) & 4;
        this.flagV = newPSW << 14;
        this.flagC = newPSW << 16;
        if ((newPSW ^ this.regPSW) & this.pswRegSet) {
            /**
             * Swap register sets
             */
            for (let i = this.regsAlt.length; --i >= 0;) {
                let tmp = this.regsGen[i];
                this.regsGen[i] = this.regsAlt[i];
                this.regsAlt[i] = tmp;
            }
        }
        this.pswMode = (newPSW >> PDP11.PSW.SHIFT.CMODE) & PDP11.MODE.MASK;
        let oldMode = (this.regPSW >> PDP11.PSW.SHIFT.CMODE) & PDP11.MODE.MASK;
        if (this.pswMode != oldMode) {
            /**
             * Swap stack pointers
             */
            this.regsAltStack[oldMode] = this.regsGen[6];
            this.regsGen[6] = this.regsAltStack[this.pswMode];
        }
        this.regPSW = newPSW;

        /**
         * Trigger a call to checkInterrupts(), just in case.  If there's an active IRQ, then setting
         * OPFLAG.IRQ is a no-brainer, but even if not, we set IRQ_DELAY in case the priority was lowered
         * enough to permit a programmed interrupt (via regPIR).
         */
        this.opFlags &= ~PDP11.OPFLAG.IRQ;
        this.opFlags |= (this.irqNext? PDP11.OPFLAG.IRQ : PDP11.OPFLAG.IRQ_DELAY);
    }

    /**
     * getSLR()
     *
     * @this {PDP11}
     * @returns {number}
     */
    getSLR()
    {
        return this.regSLR & 0xff00;
    }

    /**
     * setSLR(newSL)
     *
     * @this {PDP11}
     * @param {number} newSLR
     */
    setSLR(newSLR)
    {
        this.regSLR = newSLR | 0xff;
    }

    /**
     * getPIR()
     *
     * @this {PDP11}
     * @returns {number}
     */
    getPIR()
    {
        return this.regPIR;
    }

    /**
     * setPIR(newPIR)
     *
     * @this {PDP11}
     * @param {number} newPIR
     */
    setPIR(newPIR)
    {
        newPIR &= PDP11.PIR.BITS;
        if (newPIR) {
            let bits = newPIR >> PDP11.PIR.SHIFT.BITS;
            do {
                newPIR += PDP11.PIR.PIA_INC;
            } while ((bits >>= 1));
            this.opFlags |= PDP11.OPFLAG.IRQ_DELAY;
        }
        this.regPIR = newPIR;
    }

    /**
     * updateNZVFlags(result)
     *
     * NOTE: Only N and Z are updated based on the result; V is zeroed, C is unchanged.
     *
     * @this {PDP11}
     * @param {number} result
     */
    updateNZVFlags(result)
    {
        this.flagN = this.flagZ = result;
        this.flagV = 0;
    }

    /**
     * updateNZVCFlags(result)
     *
     * NOTE: Only N and Z are updated based on the result; both V and C are simply zeroed.
     *
     * @this {PDP11}
     * @param {number} result
     */
    updateNZVCFlags(result)
    {
        this.flagN = this.flagZ = result;
        this.flagV = this.flagC = 0;
    }

    /**
     * updateAllFlags(result, overflow)
     *
     * NOTE: The V flag is simply zeroed, unless a specific value is provided (eg, by NEG).
     *
     * @this {PDP11}
     * @param {number} result
     * @param {number} [overflow]
     */
    updateAllFlags(result, overflow)
    {
        this.flagN = this.flagZ = this.flagC = result;
        this.flagV = overflow || 0;
    }

    /**
     * updateAddFlags(result, src, dst)
     *
     * @this {PDP11}
     * @param {number} result (dst + src)
     * @param {number} src
     * @param {number} dst
     */
    updateAddFlags(result, src, dst)
    {
        this.flagN = this.flagZ = this.flagC = result;
        this.flagV = (src ^ result) & (dst ^ result);
    }

    /**
     * updateDecFlags(result, dst)
     *
     * NOTE: We could have used updateSubFlags() if not for the fact that the C flag must be preserved.
     *
     * @this {PDP11}
     * @param {number} result (dst - src, where src is an implied 1)
     * @param {number} dst
     */
    updateDecFlags(result, dst)
    {
        this.flagN = this.flagZ = result;
        /**
         * Because src is always 1 (with a zero sign bit), it can be optimized out of this calculation.
         */
        this.flagV = (/* src ^ */ dst) & (dst ^ result);
    }

    /**
     * updateIncFlags(result, dst)
     *
     * NOTE: We could have used updateAddFlags() if not for the fact that the C flag must be preserved.
     *
     * @this {PDP11}
     * @param {number} result (dst + src, where src is an implied 1)
     * @param {number} dst
     */
    updateIncFlags(result, dst)
    {
        this.flagN = this.flagZ = result;
        /**
         * Because src is always 1 (with a zero sign bit), it can be optimized out of this calculation.
         */
        this.flagV = (/* src ^ */ result) & (dst ^ result);
    }

    /**
     * updateMulFlags(result)
     *
     * @this {PDP11}
     * @param {number} result
     */
    updateMulFlags(result)
    {
        this.flagN = result >> 16;
        this.flagZ = this.flagN | result;
        this.flagV = 0;
        this.flagC = (result < -32768 || result > 32767)? 0x10000 : 0;
    }

    /**
     * updateShiftFlags(result)
     *
     * @this {PDP11}
     * @param {number} result
     */
    updateShiftFlags(result)
    {
        this.flagN = this.flagZ = this.flagC = result;
        this.flagV = this.flagN ^ (this.flagC >> 1);
    }

    /**
     * updateSubFlags(result, src, dst)
     *
     * NOTE: CMP operations calculate (src - dst) rather than (dst - src), so when they call updateSubFlags(),
     * they must reverse the order of the src and dst parameters.
     *
     * @this {PDP11}
     * @param {number} result (dst - src)
     * @param {number} src
     * @param {number} dst
     */
    updateSubFlags(result, src, dst)
    {
        this.flagN = this.flagZ = this.flagC = result;
        this.flagV = (src ^ dst) & (dst ^ result);
    }

    /**
     * fault(addr, reason)
     *
     * @this {PDP11}
     * @param {number} addr
     * @param {number} [reason]
     */
    fault(addr, reason)
    {
        if (reason <= 3) this.cpu.regErr |= PDP11.CPUERR.TIMEOUT;
        this.trap(PDP11.TRAP.BUS, 0, addr);
    }

    /**
     * trap(vector, flag, reason)
     *
     * trap() handles all the trap/abort functions.  It reads the trap vector from kernel
     * D space, changes mode to reflect the new PSW and PC, and then pushes the old PSW and
     * PC onto the new mode stack.
     *
     * @this {PDP11}
     * @param {number} vector
     * @param {number} flag
     * @param {number} [reason] (for diagnostic purposes only)
     */
    trap(vector, flag, reason)
    {
        this.printf(MESSAGE.TRAP, "trap to vector %o (%o: %s)\n", vector, reason, reason < 0? PDP11.REASONS[-reason] : "BUS ERROR");

        if (this.nDisableTraps) return;

        if (this.pswTrap < 0) {
            this.pswTrap = this.getPSW();
        } else if (!this.pswMode) {
            reason = PDP11.REASON.RED;      // double-fault (nested trap) forces a RED condition
        }

        if (reason == PDP11.REASON.RED) {
            if (this.opFlags & PDP11.OPFLAG.TRAP_RED) {
                reason = PDP11.REASON.PANIC;
            }
            this.opFlags |= PDP11.OPFLAG.TRAP_RED;
            /**
             * The next two lines used to be deferred until after the setPSW() below, but
             * I'm not seeing any dependencies on these registers, so I'm consolidating the code.
             */
            this.regErr |= PDP11.CPUERR.RED;
            this.regsGen[6] = vector = 4;
        }

        if (reason != PDP11.REASON.PANIC) {
            /**
             * NOTE: Pre-setting the auto-dec values for MMR1 to 0xF6F6 is a work-around for an "EKBEE1"
             * diagnostic (PC 056710), which tests what happens when a misaligned read triggers a BUS trap,
             * and that trap then triggers an MMU trap during the first pushWord() below.
             *
             * One would think it would be fine to zero those bits by setting opLast to vector alone,
             * and then letting each of the pushWord() calls below shift their own 0xF6 auto-dec value into
             * opLast.  When the first pushWord() triggers an MMU trap, we obviously won't get to the second
             * pushWord(), yet the diagnostic expects TWO auto-decs to be recorded.  I'm puzzled why the
             * hardware apparently indicates TWO auto-decs, if SP wasn't actually decremented twice, but who
             * am I to judge.
             */
            this.opLast = vector | 0xf6f60000;

            /**
             * Read from kernel D space
             */
            this.pswMode = 0;
            let newPC = this.readWord(vector | this.addrDSpace);
            let newPSW = this.readWord(((vector + 2) & 0xffff) | this.addrDSpace);

            /**
             * Set new PSW with previous mode
             */
            this.setPSW((newPSW & ~PDP11.PSW.PMODE) | ((this.pswTrap >> 2) & PDP11.PSW.PMODE));

            this.pushWord(this.pswTrap);
            this.pushWord(this.regsGen[7]);
            this.setPC(newPC);
        }

        /**
         * TODO: Determine the appropriate number of cycles for traps; all I've done for now is move the
         * cycle charge from opTrap() to here, and reduced the amount the other opcode handlers that call
         * trap() charge by a corresponding amount (5).
         */
        this.nStepCycles -= (4 + 1);

        /**
         * DEC's "TRAP TEST" (MAINDEC-11-D0NA-PB) triggers a RESERVED trap with an invalid opcode and the
         * stack deliberately set too low, and expects the stack overflow trap to be "sprung" immediately
         * afterward, so we only want to "lose interest" in the TRAP flag(s) that were set on entry, not ALL
         * of them.
         *
         *      this.opFlags &= ~PDP11.OPFLAG.TRAP_MASK;    // lose interest in traps after an abort
         *
         * Well, OK, we're also supposed to "lose interest" in the TF flag, too; otherwise, DEC tests fail.
         *
         * Finally, setPSW() likes to always set IRQ, to force a check of hardware interrupts prior to
         * the next instruction, just in case the PSW priority was lowered.  However, there are "TRAP TEST"
         * tests like this one:
         *
         *      005640: 012706 007700          MOV   #7700,SP
         *      005644: 012767 000340 172124   MOV   #340,177776
         *      005652: 012767 000100 171704   MOV   #100,177564
         *      005660: 012767 005712 172146   MOV   #5712,000034   ; set TRAP vector (its PSW is already zero)
         *      005666: 012767 005714 172170   MOV   #5714,000064   ; set hardware interrupt vector (its PSW is already zero)
         *      005674: 012767 005716 172116   MOV   #5716,000020   ; set IOT vector
         *      005702: 012767 000340 172112   MOV   #340,000022    ; set IOT PSW
         *      005710: 104400                 TRAP  000
         *      005712: 000004                 IOT
         *      005714: 000000                 HALT
         *
         * where, after "TRAP 000" has executed, a hardware interrupt will be acknowledged, and instead of
         * executing the IOT, we'll execute the HALT and fail the test.  We avoid that by relying on the same
         * trick that the SPL instruction uses: setting IRQ_DELAY instead of IRQ, which effectively delays
         * IRQ detection for one instruction, which is just long enough to allow the diagnostic to pass.
         */
        this.opFlags &= ~(flag | PDP11.OPFLAG.TRAP_TF | PDP11.OPFLAG.IRQ_MASK);
        this.opFlags |= PDP11.OPFLAG.IRQ_DELAY | PDP11.OPFLAG.TRAP_LAST;

        this.pswTrap = -1;                                  // reset flag that we have a trap within a trap

        /**
         * These next properties (in conjunction with setting PDP11.OPFLAG.TRAP_LAST) are purely an aid for the Debugger;
         * see getTrapStatus().
         */
        this.trapReason = reason;
        this.trapVector = vector;

        if (reason == PDP11.REASON.PANIC) {
            this.time.stop();
        }
        if (reason >= PDP11.REASON.RED) throw vector;
    }

    /**
     * trapReturn()
     *
     * @this {PDP11}
     */
    trapReturn()
    {
        /**
         * This code used to defer updating regsGen[6] (SP) until after BOTH words had been popped, which seems
         * safer, but if we're going to do pushes in trap(), then I see no reason to avoid doing pops in trapReturn().
         */
        let addr = this.popWord();
        let newPSW = this.popWord();
        if (this.regPSW & PDP11.PSW.CMODE) {
            /**
             * Keep SPL and allow lower only for modes and register set.
             *
             * TODO: Review, because it seems a bit odd to only CLEAR the PRI bits in the new PSW, and then to OR in
             * CMODE, PMODE, and REGSET bits from the current PSW.
             */
            newPSW = (newPSW & ~PDP11.PSW.PRI) | (this.regPSW & (PDP11.PSW.PRI | PDP11.PSW.REGSET | PDP11.PSW.PMODE | PDP11.PSW.CMODE));
        }
        this.setPC(addr);
        this.setPSW(newPSW);
        this.opFlags &= ~PDP11.OPFLAG.TRAP_TF;
    }

    /**
     * getTrapStatus()
     *
     * @this {PDP11}
     * @returns {number}
     */
    getTrapStatus()
    {
        return (this.opFlags & PDP11.OPFLAG.TRAP_LAST)? (this.trapVector | this.trapReason << 8) : 0;
    }

    /**
     * mapUnibus(addr)
     *
     * Used to convert 18-bit addresses to 22-bit addresses.  Since mapUnibus() only looks at the low 18 bits of addr,
     * there's no need to mask addr first.  Note that if bits 13-17 are all set, then the 18-bit address points to the
     * top 8Kb of its 256Kb range, and mapUnibus() will return addr unchanged, since it should already be pointing to
     * the top 8Kb of the 4Mb 22-bit range.
     *
     * Also, when bits 18-21 of addr are ALL set (which callers check using addr >= BusPDP11.UNIBUS_22BIT aka 0x3C0000),
     * then we have a 22-bit address pointing to the top 256Kb range, so if the UNIBUS relocation map is enabled, we again
     * pass the lower 18 bits of that address through the map.
     *
     * From the PDP-11/70 Handbook:
     *
     *      On the 11/44 and 11/70, there are a total of 31 mapping registers for address relocation.  Each register is
     *      composed of a double 16-bit PDP-11 word (in consecutive locations) that holds the 22-bit base address.  These
     *      registers have UNIBUS addresses in the range 770200 to 770372.
     *
     *      If the UNIBUS map relocation is not enabled, an incoming 18-bit UNIBUS address has 4 leading zeroes added for
     *      referencing a 22-bit physical address. The lower 18 bits are the same. No relocation is performed.
     *
     *      If UNIBUS map relocation is enabled, the five high order bits of the UNIBUS address are used to select one of the
     *      31 mapping registers.  The low-order 13 bits of the incoming address are used as an offset from the base address
     *      contained in the 22-bit mapping register.  To form the physical address, the 13 low-order bits of the UNIBUS
     *      address are added to 22 bits of the selected mapping register to produce the 22-bit physical address.  The lowest
     *      order bit of all mapping registers is always a zero, since relocation is always on word boundaries.
     *
     * Sadly, because these mappings occur at a word-granular level, we can't implement the mappings by simply shuffling
     * the underlying block around in the Bus component; it would be much more efficient if we could.  That's how we move
     * the IOPage in response to addressing changes.
     *
     * @this {PDP11}
     * @param {number} addr
     * @returns {number}
     */
    mapUnibus(addr)
    {
        let idx = (addr >> 13) & 0x1F;
        if (idx < 31) {
            if (this.regMMR3 & PDP11.MMR3.UNIBUS_MAP) {
                /**
                 * The UNIBUS map relocation is enabled
                 */
                addr = (this.regsUNIMap[idx] + (addr & 0x1FFF)) & PDP11.MASK_22BIT;
                /**
                 * TODO: Review this assertion.
                 *
                 *
                 */
            } else {
                /**
                 * Since UNIBUS map relocation is NOT enabled, then as explained above:
                 *
                 *      If the UNIBUS map relocation is not enabled, an incoming 18-bit UNIBUS address has 4 leading zeroes added for
                 *      referencing a 22-bit physical address. The lower 18 bits are the same. No relocation is performed.
                 */
                addr &= ~PDP11.UNIBUS_22BIT;
            }
        }
        return addr;
    }

    /**
     * getAddrInfo(addr, fPhysical)
     *
     * @this {PDP11}
     * @param {number} addr
     * @param {boolean} [fPhysical]
     * @returns {Array}
     */
    getAddrInfo(addr, fPhysical)
    {
        let a = [];
        let addrPhysical;

        if (fPhysical) {
            addrPhysical = this.mapUnibus(addr);
            let idx = (addr >> 13) & 0x1F;
            a.push(addrPhysical);
            a.push(idx);
            if (this.regMMR3 & PDP11.MMR3.UNIBUS_MAP) {
                a.push(this.regsUNIMap[idx]);
                a.push(addr & 0x1FFF);
            }
        }
        else if (!this.mmuEnable) {
            addrPhysical = addr & 0xffff;
            if (addrPhysical >= PDP11.IOPAGE_16BIT) addrPhysical |= this.addrIOPage;
            a.push(addrPhysical);
        }
        else {
            let mode = this.pswMode << 1;
            let page = addr >> 13;
            if (page > 7) mode |= 1;
            if (!(this.regMMR3 & this.mapMMR3[this.pswMode])) page &= 7;
            let pdr = this.regsPDR[this.pswMode][page];
            let off = addr & 0x1fff;
            let paf = (this.regsPAR[this.pswMode][page] << 6);
            addrPhysical = (paf + off) & this.mmuMask;
            if (addrPhysical >= PDP11.UNIBUS_22BIT) addrPhysical = this.mapUnibus(addrPhysical);
            a.push(addrPhysical);   // a[0]
            a.push(off);            // a[1]
            a.push(mode);           // a[2] (0=KI, 1=KD, 2=SI, 3=SD, 4=??, 5=??, 6=UI, 7=UD)
            a.push(page & 7);       // a[3]
            a.push(paf);            // a[4]
            a.push(this.mmuMask);   // a[5]
        }
        return a;
    }

    /**
     * mapVirtualToPhysical(addrVirtual, access)
     *
     * mapVirtualToPhysical() does memory management.  It converts a 17-bit I/D virtual address to a
     * 22-bit physical address.  A real PDP 11/70 memory management unit can be enabled separately for
     * read and write for diagnostic purposes.  This is handled here by having an enable mask (mmuEnable)
     * which is tested against the operation access mask (access).  If there is no match, then the virtual
     * address is simply mapped as a 16 bit physical address with the upper page going to the IO address
     * space.  Significant access mask values used are PDP11.ACCESS.READ and PDP11.ACCESS.WRITE.
     *
     * When doing mapping, pswMode is used to decide what address space is to be used (0 = kernel,
     * 1 = supervisor, 2 = illegal, 3 = user).  Normally, pswMode is set by the setPSW() function, but
     * there are exceptions for instructions which move data between address spaces (MFPD, MFPI, MTPD,
     * and MTPI) and trap().  These will modify pswMode outside of setPSW() and then restore it again if
     * all worked.  If however something happens to cause a trap then no restore is done as setPSW()
     * will have been invoked as part of the trap, which will resynchronize pswMode.
     *
     * A PDP-11/70 is different from other PDP-11s in that the highest 18 bit space (017000000 & above)
     * maps directly to UNIBUS space - including low memory. This doesn't appear to be particularly useful
     * as it restricts maximum system memory - although it does appear to allow software testing of the
     * UNIBUS map.  This feature also appears to confuse some OSes which test consecutive memory locations
     * to find maximum memory -- and on a full memory system find themselves accessing low memory again at
     * high addresses.
     *
     * Construction of a Physical Address
     * ----------------------------------
     *
     *      Virtual Addr (VA)                                  12 11 10  9  8  7  6  5  4  3  2  1  0
     *    + Page Addr Field (PAF)   15 14 13 12 11 10  9  8  7  6  5  4  3  2  1  0
     *                              -----------------------------------------------------------------
     *    = Physical Addr (PA)      21 20 19 18 17 16 15 14 13 12 11 10  9  8  7  6  5  4  3  2  1  0
     *
     * The Page Address Field (PAF) comes from a Page Address Register (PAR) that is selected by Virtual
     * Address (VA) bits 15-13.  You can see from the above alignments that the VA contributes to the low
     * 13 bits, providing an 8Kb range.
     *
     * VA bits 0-5 pass directly through to the PA; those are also called the DIB (Displacement in Block) bits.
     * VA bits 6-12 are added to the low 7 bits of the PAF and are also called the BN (Block Number) bits.
     *
     * You can also think of the entire PAF as a block number, where each block is 64 bytes.  This is consistent
     * with the LSIZE register at 177760, which is supposed to contain the block number of the last 64-byte block
     * of memory installed.
     *
     * Note that if a PAR is initialized to zero, successively adding 0200 (0x80) to the PAR will advance the
     * base physical address to the next 8Kb page.
     *
     * @this {PDP11}
     * @param {number} addrVirtual
     * @param {number} access
     * @returns {number}
     */
    mapVirtualToPhysical(addrVirtual, access)
    {
        let page, pdr, addr;

        /**
         * This can happen when the MAINT bit of MMR0 is set but not the ENABLED bit.
         */
        if (!(access & this.mmuEnable)) {
            addr = addrVirtual & 0xffff;
            if (addr >= PDP11.IOPAGE_16BIT) addr |= this.addrIOPage;
            return addr;
        }

        page = addrVirtual >> 13;
        if (!(this.regMMR3 & this.mapMMR3[this.pswMode])) page &= 7;
        pdr = this.regsPDR[this.pswMode][page];
        addr = ((this.regsPAR[this.pswMode][page] << 6) + (addrVirtual & 0x1fff)) & this.mmuMask;

        if (addr >= PDP11.UNIBUS_22BIT) addr = this.mapUnibus(addr);

        if (this.nDisableTraps) return addr;

        /**
         * TEST #122 ("KT BEND") in the "EKBEE1" diagnostic (PC 076060) triggers a NOMEMORY error using
         * this instruction:
         *
         *      076170: 005037 140100          CLR   @#140100
         *
         * It also triggers an ODDADDR error using this instruction:
         *
         *      076356: 005037 140001          CLR   @#140001
         *
         * paulnank: So it turns out that the memory management unit that does odd address and non-existent
         * memory trapping: who knew? :-)  I thought these would have been handled at access time.
         *
         * jeffpar: We're assuming, at least, that the MMU does its "NEXM" (NOMEMORY) non-existent memory test
         * very simplistically, by range-checking the address against something like the memory SIZE registers,
         * because otherwise the MMU would have to wait for a bus time-out: something so prohibitively expensive
         * that the MMU could not afford to do it.  I rely on addrInvalid, which is derived from the same Bus
         * getMemoryLimit() service that the SIZE registers (177760--177762) use to derive their value.
         */
        if (addr >= this.addrInvalid && addr < this.addrIOPage) {
            this.regErr |= PDP11.CPUERR.NOMEMORY;
            this.trap(PDP11.TRAP.BUS, 0, addr);
        }
        else if ((addr & 0x1) && !(access & PDP11.ACCESS.BYTE)) {
            this.regErr |= PDP11.CPUERR.ODDADDR;
            this.trap(PDP11.TRAP.BUS, 0, addr);
        }

        let newMMR0 = 0;
        switch (pdr & PDP11.PDR.ACF.MASK) {

        case PDP11.PDR.ACF.RO1:     // 0x1: read-only, abort on write attempt, memory management trap on read (11/70 only)
            newMMR0 = PDP11.MMR0.TRAP_MMU;
            /* falls through */

        case PDP11.PDR.ACF.RO:      // 0x2: read-only, abort on write attempt
            pdr |= PDP11.PDR.ACCESSED;
            if (access & PDP11.ACCESS.WRITE) {
                newMMR0 = PDP11.MMR0.ABORT_RO;
            }
            break;

        case PDP11.PDR.ACF.RW1:     // 0x4: read/write, memory management trap upon completion of a read or write
            newMMR0 = PDP11.MMR0.TRAP_MMU;
            /* falls through */

        case PDP11.PDR.ACF.RW2:     // 0x5: read/write, memory management trap upon completion of a write (11/70 only)
            if (access & PDP11.ACCESS.WRITE) {
                newMMR0 = PDP11.MMR0.TRAP_MMU;
            }
            /* falls through */

        case PDP11.PDR.ACF.RW:      // 0x6: read/write, no system trap/abort action
            pdr |= ((access & PDP11.ACCESS.WRITE) ? (PDP11.PDR.ACCESSED | PDP11.PDR.MODIFIED) : PDP11.PDR.ACCESSED);
            break;

        default:                    // 0x0 (non-resident, abort all accesses) or 0x3 or 0x7 (unused, abort all accesses)
            newMMR0 = PDP11.MMR0.ABORT_NR;
            break;
        }

        if ((pdr & (PDP11.PDR.PLF | PDP11.PDR.ED)) != PDP11.PDR.PLF) {      // skip checking most common case (hopefully)
            /**
             * The Page Descriptor Register (PDR) Page Length Field (PLF) is a 7-bit block number, where a block
             * is 64 bytes.  Since the bit 0 of the block number is located at bit 8 of the PDR, we shift the PDR
             * right 2 bits and then clear the bottom 6 bits by masking it with 0x1FC0.
             */
            if (pdr & PDP11.PDR.ED) {
                if (pdr & PDP11.PDR.PLF) {
                    if ((addrVirtual & 0x1FC0) < ((pdr >> 2) & 0x1FC0)) {
                        newMMR0 |= PDP11.MMR0.ABORT_PL;
                    }
                }
            } else {
                if ((addrVirtual & 0x1FC0) > ((pdr >> 2) & 0x1FC0)) {
                    newMMR0 |= PDP11.MMR0.ABORT_PL;
                }
            }
        }

        /**
         * Aborts and traps: log FIRST trap and MOST RECENT abort
         */
        this.regsPDR[this.pswMode][page] = pdr;
        if (addr != ((PDP11.IOPAGE_22BIT | PDP11.UNIBUS.MMR0) & this.mmuMask) || this.pswMode) {
            this.mmuLastMode = this.pswMode;
            this.mmuLastPage = page;
        }

        if (newMMR0) {
            if (newMMR0 & PDP11.MMR0.ABORT) {
                if (this.pswTrap >= 0) {
                    newMMR0 |= PDP11.MMR0.COMPLETED;
                }
                if (!(this.regMMR0 & PDP11.MMR0.ABORT)) {
                    newMMR0 |= (this.regMMR0 & PDP11.MMR0.TRAP_MMU) | (this.mmuLastMode << 5) | (this.mmuLastPage << 1);

                    this.setMMR0((this.regMMR0 & ~PDP11.MMR0.UPDATE) | (newMMR0 & PDP11.MMR0.UPDATE));
                }
                /**
                 * NOTE: In unusual circumstances, if regMMR0 already indicated an ABORT condition above,
                 * we run the risk of infinitely looping; eg, we call trap(), which calls mapVirtualToPhysical()
                 * on the trap vector, which faults again, etc.
                 *
                 * TODO: Determine what a real PDP-11 does in that situation; in our case, trap() deals with it
                 * by checking an internal OPFLAG (TRAP_RED) and turning the next trap into a PANIC, triggering an
                 * immediate HALT.
                 */
                this.trap(PDP11.TRAP.MMU, PDP11.OPFLAG.TRAP_MMU, PDP11.REASON.ABORT);
            }
            if (!(this.regMMR0 & (PDP11.MMR0.ABORT | PDP11.MMR0.TRAP_MMU))) {
                /**
                 * TODO: Review the code below, because the address range seems over-inclusive.
                 */
                if (addr < ((PDP11.IOPAGE_22BIT | PDP11.UNIBUS.SIPDR0) & this.mmuMask) ||
                    addr > ((PDP11.IOPAGE_22BIT | PDP11.UNIBUS.UDPAR7 | 0x1) & this.mmuMask)) {
                    this.regMMR0 |= PDP11.MMR0.TRAP_MMU;
                    if (this.regMMR0 & PDP11.MMR0.MMU_TRAPS) this.opFlags |= PDP11.OPFLAG.TRAP_MMU;
                }
            }
        }
        return addr;
    }

    /**
     * popWord()
     *
     * @this {PDP11}
     * @returns {number}
     */
    popWord()
    {
        let result = this.readWord(this.regsGen[6] | this.addrDSpace);
        this.regsGen[6] = (this.regsGen[6] + 2) & 0xffff;
        return result;
    }

    /**
     * pushWord(data)
     *
     * @this {PDP11}
     * @param {number} data
     */
    pushWord(data)
    {
        let addrVirtual = (this.regsGen[6] - 2) & 0xffff;
        this.regsGen[6] = addrVirtual;              // BSD needs SP updated before any fault :-(
        this.opLast = (this.opLast & 0xffff) | ((this.opLast & ~0xffff) << 8) | (0x00f6 << 16);
        if (!(this.opFlags & PDP11.OPFLAG.TRAP_RED)) this.checkStackLimit(PDP11.ACCESS.WRITE_WORD, -2, addrVirtual);
        this.writeWord(addrVirtual, data);
    }

    /**
     * getAddrByMode(mode, reg, access)
     *
     * getAddrByMode() maps a six bit operand to a 17 bit I/D virtual address space.
     *
     * Instruction operands are six bits in length - three bits for the mode and three
     * for the register. The 17th I/D bit in the resulting virtual address represents
     * whether the reference is to Instruction space or Data space - which depends on
     * combination of the mode and whether the register is the Program Counter (R7).
     *
     * The eight modes are:-
     *      0   R           no valid virtual address
     *      1   (R)         operand from I/D depending if R = 7
     *      2   (R)+        operand from I/D depending if R = 7
     *      3   @(R)+       address from I/D depending if R = 7 and operand from D space
     *      4   -(R)        operand from I/D depending if R = 7
     *      5   @-(R)       address from I/D depending if R = 7 and operand from D space
     *      6   x(R)        x from I space but operand from D space
     *      7   @x(R)       x from I space but address and operand from D space
     *
     * Also need to keep MMR1 updated as this stores which registers have been
     * incremented and decremented so that the OS can reset and restart an instruction
     * if a page fault occurs.
     *
     * Stack Overflow Traps
     * --------------------
     * On the PDP-11/20, stack overflow traps occur when an address below 400 is referenced
     * by SP in either mode 4 (auto-decrement) or 5 (auto-decrement deferred).  The instruction
     * is allowed to complete before the trap is issued.  NOTE: This information comes
     * directly from the PDP-11/20 Handbook (1971), but the 11/20 diagnostics apparently only
     * test mode 4, not mode 5, because when I later removed stack limit checks for mode 5 on
     * the 11/70, none of the 11/20 tests complained.
     *
     * TODO: Find some independent confirmation as to whether ANY PDP-11 models check for
     * stack overflow on mode 5 (auto-decrement deferred); if they do, then further tweaks to
     * checkStackLimit functions may be required.
     *
     * On the PDP-11/70, the stack limit register (177774) allows a variable boundary for the
     * kernel stack.
     *
     * @this {PDP11}
     * @param {number} mode
     * @param {number} reg
     * @param {number} access
     * @returns {number}
     */
    getAddrByMode(mode, reg, access)
    {
        let addrVirtual, step;
        let addrDSpace = (access & PDP11.ACCESS.VIRT)? 0 : this.addrDSpace;

        /**
         * Modes that need to auto-increment or auto-decrement will break, in order to perform
         * the update; others will return an address immediately.
         */
        switch (mode) {
        /**
         * Mode 0: Registers don't have a virtual address, so trap.
         *
         * NOTE: Most instruction code paths never call getAddrByMode() when the mode is zero;
         * JMP and JSR instructions are exceptions, but that's OK, because those are documented as
         * ILLEGAL instructions which produce a BUS trap (as opposed to UNDEFINED instructions
         * that cause a RESERVED trap).
         */
        case 0:
            this.trap(PDP11.TRAP.BUS, 0, PDP11.REASON.ILLEGAL);
            return 0;

        /**
         * Mode 1: (R)
         */
        case 1:
            if (reg == 6) this.checkStackLimit(access, 0, this.regsGen[6]);
            this.nStepCycles -= (2 + 1);
            return (reg == 7? this.regsGen[reg] : (this.regsGen[reg] | addrDSpace));

        /**
         * Mode 2: (R)+
         */
        case 2:
            step = 2;
            addrVirtual = this.regsGen[reg];
            if (reg == 6) this.checkStackLimit(access, step, addrVirtual);
            if (reg != 7) {
                addrVirtual |= addrDSpace;
                if (reg < 6 && (access & PDP11.ACCESS.BYTE)) step = 1;
            }
            this.nStepCycles -= (2 + 1);
            break;

        /**
         * Mode 3: @(R)+
         */
        case 3:
            step = 2;
            addrVirtual = this.regsGen[reg];
            if (reg != 7) addrVirtual |= addrDSpace;
            addrVirtual = this.readWord(addrVirtual);
            addrVirtual |= addrDSpace;
            this.nStepCycles -= (5 + 2);
            break;

        /**
         * Mode 4: -(R)
         */
        case 4:
            step = -2;
            if (reg < 6 && (access & PDP11.ACCESS.BYTE)) step = -1;
            addrVirtual = (this.regsGen[reg] + step) & 0xffff;
            if (reg == 6) this.checkStackLimit(access, step, addrVirtual);
            if (reg != 7) addrVirtual |= addrDSpace;
            this.nStepCycles -= (3 + 1);
            break;

        /**
         * Mode 5: @-(R)
         */
        case 5:
            step = -2;
            addrVirtual = (this.regsGen[reg] - 2) & 0xffff;
            if (reg != 7) addrVirtual |= addrDSpace;
            addrVirtual = this.readWord(addrVirtual) | addrDSpace;
            this.nStepCycles -= (6 + 2);
            break;

        /**
         * Mode 6: d(R)
         */
        case 6:
            addrVirtual = this.readWord(this.advancePC(2));
            addrVirtual = (addrVirtual + this.regsGen[reg]) & 0xffff;
            if (reg == 6) this.checkStackLimit(access, 0, addrVirtual);
            this.nStepCycles -= (4 + 2);
            return addrVirtual | addrDSpace;

        /**
         * Mode 7: @d(R)
         */
        case 7:
            addrVirtual = this.readWord(this.advancePC(2));
            addrVirtual = (addrVirtual + this.regsGen[reg]) & 0xffff;
            addrVirtual = this.readWord(addrVirtual | this.addrDSpace);
            this.nStepCycles -= (7 + 3);
            return addrVirtual | addrDSpace;
        }

        this.regsGen[reg] = (this.regsGen[reg] + step) & 0xffff;
        this.opLast = (this.opLast & 0xffff) | ((this.opLast & ~0xffff) << 8) | ((((step << 3) & 0xf8) | reg) << 16);

        return addrVirtual;
    }

    /**
     * checkStackLimit1120(access, step, addr)
     *
     * @this {PDP11}
     * @param {number} access
     * @param {number} step
     * @param {number} addr
     */
    checkStackLimit1120(access, step, addr)
    {
        /**
         * NOTE: DEC's "TRAP TEST" (MAINDEC-11-D0NA-PB) expects "TST -(SP)" to trap when SP is 150,
         * so we ignore the access parameter.  Also, strangely, it does NOT expect this instruction
         * to trap:
         *
         *      R0=006302 R1=000000 R2=000000 R3=000000 R4=000000 R5=000776
         *      SP=000000 PC=006346 PS=000344 IR=000000 SL=000377 T0 N0 Z1 V0 C0
         *      006346: 112667 171426          MOVB  (SP)+,000000
         *
         * so if the step parameter is positive, we let it go.
         */
        if (!this.pswMode && step <= 0 && addr <= this.regSLR) {
            /**
             * On older machines (eg, the PDP-11/20), there is no "YELLOW" and "RED" distinction, and the
             * instruction is always allowed to complete, so the trap must always be issued in this fashion.
             */
            this.opFlags |= PDP11.OPFLAG.TRAP_SP;
        }
    }

    /**
     * checkStackLimit1140(access, step, addr)
     *
     * @this {PDP11}
     * @param {number} access
     * @param {number} step
     * @param {number} addr
     */
    checkStackLimit1140(access, step, addr)
    {
        if (!this.pswMode) {
            /**
             * NOTE: The 11/70 CPU Instruction Exerciser does NOT expect reads to trigger a stack overflow,
             * so we check the access parameter.
             *
             * Moreover, TEST 40 of diagnostic EKBBF0 executes this instruction:
             *
             *      R0=177777 R1=032435 R2=152110 R3=000024 R4=153352 R5=001164
             *      SP=177776 PC=020632 PS=000350 IR=000000 SL=000377 T0 N1 Z0 V0 C0
             *      020632: 005016                 CLR   @SP                    ;cycles=7
             *
             * expecting a RED stack overflow trap.  Yes, using *any* addresses in the IOPage for the stack isn't
             * a good idea, but who said it was illegal?  For now, we're going to restrict overflows to the highest
             * address tested by the diagnostic (0xFFFE, aka the PSW), by making that address negative.
             */
            if (addr >= 0xFFFE) addr |= ~0xFFFF;
            if ((access & PDP11.ACCESS.WRITE) && addr <= this.regSLR) {
                /**
                 * regSLR can never fall below 0xFF, so this subtraction can never go negative, so this comparison
                 * is always safe.
                 */
                if (addr <= this.regSLR - 32) {
                    this.trap(PDP11.TRAP.BUS, 0, PDP11.REASON.RED);
                } else {
                    this.regErr |= PDP11.CPUERR.YELLOW;
                    this.opFlags |= PDP11.OPFLAG.TRAP_SP;
                }
            }
        }
    }

    /**
     * readByteSafe(addr)
     *
     * This interface is expressly for the Debugger, to access virtual memory without faulting.
     *
     * @this {PDP11}
     * @param {number} addr
     * @returns {number}
     */
    readByteSafe(addr)
    {
        this.nDisableTraps++;
        let b = this.bus.readData(this.mapVirtualToPhysical(addr, PDP11.ACCESS.READ_BYTE));
        this.nDisableTraps--;
        return b;
    }

    /**
     * readWordSafe(addr)
     *
     * This interface is expressly for the Debugger, to access virtual memory without faulting.
     *
     * @this {PDP11}
     * @param {number} addr
     * @returns {number}
     */
    readWordSafe(addr)
    {
        this.nDisableTraps++;
        let w = this.bus.readPair(this.mapVirtualToPhysical(addr, PDP11.ACCESS.READ_WORD));
        this.nDisableTraps--;
        return w;
    }

    /**
     * writeByteSafe(addr, data)
     *
     * This interface is expressly for the Debugger, to access virtual memory without faulting.
     *
     * @this {PDP11}
     * @param {number} addr
     * @param {number} data
     */
    writeByteSafe(addr, data)
    {
        this.nDisableTraps++;
        this.bus.writeData(this.mapVirtualToPhysical(addr, PDP11.ACCESS.WRITE_BYTE), data);
        this.nDisableTraps--;
    }

    /**
     * writeWordSafe(addr, data)
     *
     * This interface is expressly for the Debugger, to access virtual memory without faulting.
     *
     * @this {PDP11}
     * @param {number} addr
     * @param {number} data
     */
    writeWordSafe(addr, data)
    {
        this.nDisableTraps++;
        this.bus.writePair(this.mapVirtualToPhysical(addr, PDP11.ACCESS.WRITE_WORD), data);
        this.nDisableTraps--;
    }

    /**
     * addMemBreak(addr, fWrite)
     *
     * @this {PDP11}
     * @param {number} addr
     * @param {boolean} fWrite is true for a memory write breakpoint, false for a memory read breakpoint
     */
    addMemBreak(addr, fWrite)
    {
        let nBreaks = fWrite? this.nWriteBreaks++ : this.nReadBreaks++;

        if (!nBreaks) this.setMemoryAccess();
    }

    /**
     * removeMemBreak(addr, fWrite)
     *
     * @this {PDP11}
     * @param {number} addr
     * @param {boolean} fWrite is true for a memory write breakpoint, false for a memory read breakpoint
     */
    removeMemBreak(addr, fWrite)
    {
        let nBreaks = fWrite? --this.nWriteBreaks : --this.nReadBreaks;

        if (!nBreaks) this.setMemoryAccess();
    }

    /**
     * getPhysicalAddrByMode(mode, reg, access)
     *
     * This is a handler set up by setMemoryAccess().  All calls should go through getAddr().
     *
     * @this {PDP11}
     * @param {number} mode
     * @param {number} reg
     * @param {number} access
     * @returns {number}
     */
    getPhysicalAddrByMode(mode, reg, access)
    {
        return this.getAddrByMode(mode, reg, access);
    }

    /**
     * getVirtualAddrByMode(mode, reg, access)
     *
     * This is a handler set up by setMemoryAccess().  All calls should go through getAddr().
     *
     * @this {PDP11}
     * @param {number} mode
     * @param {number} reg
     * @param {number} access
     * @returns {number}
     */
    getVirtualAddrByMode(mode, reg, access)
    {
        return this.mapVirtualToPhysical(this.getAddrByMode(mode, reg, access), access);
    }

    /**
     * readWordFromPhysical(addr)
     *
     * This is a handler set up by setMemoryAccess().  All calls should go through readWord().
     *
     * @this {PDP11}
     * @param {number} addr
     * @returns {number}
     */
    readWordFromPhysical(addr)
    {
        return this.bus.readPair(this.addrLast = addr);
    }

    /**
     * readWordFromVirtual(addrVirtual)
     *
     * This is a handler set up by setMemoryAccess().  All calls should go through readWord().
     *
     * @this {PDP11}
     * @param {number} addrVirtual (input address is 17 bit (I&D))
     * @returns {number}
     */
    readWordFromVirtual(addrVirtual)
    {
        return this.bus.readPair(this.addrLast = this.mapVirtualToPhysical(addrVirtual, PDP11.ACCESS.READ_WORD));
    }

    /**
     * readWordFromVirtualChecked(addrVirtual)
     *
     * This is a handler set up by setMemoryAccess().  All calls should go through readWord().
     *
     * @this {PDP11}
     * @param {number} addrVirtual (input address is 17 bit (I&D))
     * @returns {number}
     */
    readWordFromVirtualChecked(addrVirtual)
    {
        if (this.dbg) {
            this.dbg.checkVirtualRead(addrVirtual, 2);
        }
        return this.readWordFromVirtual(addrVirtual);
    }

    /**
     * writeWordToPhysical(addr, data)
     *
     * This is a handler set up by setMemoryAccess().  All calls should go through writeWord().
     *
     * @this {PDP11}
     * @param {number} addr
     * @param {number} data
     */
    writeWordToPhysical(addr, data)
    {
        this.bus.writePair(this.addrLast = addr, data);
    }

    /**
     * writeWordToVirtual(addrVirtual, data)
     *
     * This is a handler set up by setMemoryAccess().  All calls should go through writeWord().
     *
     * @this {PDP11}
     * @param {number} addrVirtual (input address is 17 bit (I&D))
     * @param {number} data
     */
    writeWordToVirtual(addrVirtual, data)
    {
        this.bus.writePair(this.addrLast = this.mapVirtualToPhysical(addrVirtual, PDP11.ACCESS.WRITE_WORD), data);
    }

    /**
     * writeWordToVirtualChecked(addrVirtual, data)
     *
     * This is a handler set up by setMemoryAccess().  All calls should go through writeWord().
     *
     * @this {PDP11}
     * @param {number} addrVirtual (input address is 17 bit (I&D))
     * @param {number} data
     */
    writeWordToVirtualChecked(addrVirtual, data)
    {
        if (this.dbg) {
            this.dbg.checkVirtualWrite(addrVirtual, 2);
        }
        this.writeWordToVirtual(addrVirtual, data);
    }

    /**
     * readWordFromPrevSpace(opcode, access)
     *
     * @this {PDP11}
     * @param {number} opcode
     * @param {number} access (really just PDP11.ACCESS.DSPACE or PDP11.ACCESS.ISPACE)
     * @returns {number}
     */
    readWordFromPrevSpace(opcode, access)
    {
        let data;
        let reg = this.dstReg = opcode & PDP11.OPREG.MASK;
        let mode = this.dstMode = (opcode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;
        if (!mode) {
            if (reg != 6 || ((this.regPSW >> 2) & PDP11.PSW.PMODE) === (this.regPSW & PDP11.PSW.PMODE)) {
                data = this.regsGen[reg];
            } else {
                data = this.regsAltStack[(this.regPSW >> 12) & 3];
            }
        } else {
            let addr = this.getAddrByMode(mode, reg, PDP11.ACCESS.READ_WORD);
            if (!(access & PDP11.ACCESS.DSPACE)) {
                if ((this.regPSW & 0xf000) !== 0xf000) addr &= 0xffff;
            }
            this.pswMode = (this.regPSW >> 12) & 3;
            data = this.readWord(addr | (access & this.addrDSpace));
            this.pswMode = (this.regPSW >> 14) & 3;
        }
        return data;
    }

    /**
     * writeWordToPrevSpace(opcode, access, data)
     *
     * @this {PDP11}
     * @param {number} opcode
     * @param {number} access (really just PDP11.ACCESS.DSPACE or PDP11.ACCESS.ISPACE)
     * @param {number} data
     */
    writeWordToPrevSpace(opcode, access, data)
    {
        this.opLast = (this.opLast & 0xffff) | (0x0016 << 16);
        let reg = this.dstReg = opcode & PDP11.OPREG.MASK;
        let mode = this.dstMode = (opcode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;
        if (!mode) {
            if (reg != 6 || ((this.regPSW >> 2) & PDP11.PSW.PMODE) === (this.regPSW & PDP11.PSW.PMODE)) {
                this.regsGen[reg] = data;
            } else {
                this.regsAltStack[(this.regPSW >> 12) & 3] = data;
            }
        } else {
            let addr = this.getAddrByMode(mode, reg, PDP11.ACCESS.WRITE_WORD);
            if (!(access & PDP11.ACCESS.DSPACE)) addr &= 0xffff;
            /**
             * TODO: Consider replacing the following code with writeWord(), by adding optional pswMode
             * parameters for each of the discrete mapVirtualToPhysical() and writePair() operations, because
             * as it stands, this is the only remaining call to mapVirtualToPhysical() outside of our
             * setMemoryAccess() handlers.
             */
            this.pswMode = (this.regPSW >> 12) & 3;
            addr = this.mapVirtualToPhysical(addr | (access & PDP11.ACCESS.DSPACE), PDP11.ACCESS.WRITE);
            this.pswMode = (this.regPSW >> 14) & 3;
            this.bus.writePair(addr, data);
        }
    }

    /**
     * readSrcByte(opcode)
     *
     * WARNING: If the SRC operand is a register, offRegSrc ensures we return a negative register number
     * rather than the register value, because on the PDP-11/20, the final value of the register must be
     * resolved AFTER the DST operand has been decoded and any pre-decrement or post-increment operations
     * affecting the SRC register have been completed.  See readSrcWord() for more details.
     *
     * @this {PDP11}
     * @param {number} opcode
     * @returns {number}
     */
    readSrcByte(opcode)
    {
        let result;
        opcode >>= PDP11.SRCMODE.SHIFT;
        let reg = this.srcReg = opcode & PDP11.OPREG.MASK;
        let mode = this.srcMode = (opcode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;
        if (!mode) {
            result = this.regsGen[reg + this.offRegSrc] & this.maskRegSrcByte;
        } else {
            result = this.bus.readData(this.getAddr(mode, reg, PDP11.ACCESS.READ_BYTE));
        }
        return result;
    }

    /**
     * readSrcWord(opcode)
     *
     * WARNING: If the SRC operand is a register, offRegSrc ensures we return a negative register number
     * rather than the register value, because on the PDP-11/20, the final value of the register must be
     * resolved AFTER the DST operand has been decoded and any pre-decrement or post-increment operations
     * affecting the SRC register have been completed.
     *
     * Here's an example from DEC's "TRAP TEST" (MAINDEC-11-D0NA-PB):
     *
     *      007200: 012700 006340          MOV   #6340,R0
     *      007204: 010020                 MOV   R0,(R0)+
     *      007206: 026727 177126 006342   CMP   006340,#6342
     *      007214: 001401                 BEQ   007220
     *      007216: 000000                 HALT
     *
     * If this function returned the value of R0 for the SRC operand of "MOV R0,(R0)+", then the operation
     * would write 6340 to the destination, rather than 6342.
     *
     * Most callers don't need to worry about this, because if they pass the result from readSrcWord() directly
     * to writeDstWord() or updateDstWord(), those functions will take care of converting any negative register
     * number back into the current register value.  The exceptions are opcodes that don't modify the DST operand
     * (BIT, BITB, CMP, and CMPB); those opcode handlers must deal with negative register numbers themselves.
     *
     * @this {PDP11}
     * @param {number} opcode
     * @returns {number}
     */
    readSrcWord(opcode)
    {
        let result;
        opcode >>= PDP11.SRCMODE.SHIFT;
        let reg = this.srcReg = opcode & PDP11.OPREG.MASK;
        let mode = this.srcMode = (opcode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;
        if (!mode) {
            result = this.regsGen[reg + this.offRegSrc];
        } else {
            result = this.bus.readPair(this.getAddr(mode, reg, PDP11.ACCESS.READ_WORD));
        }
        return result;
    }

    /**
     * readDstAddr(opcode)
     *
     * @this {PDP11}
     * @param {number} opcode
     * @returns {number}
     */
    readDstAddr(opcode)
    {
        let reg = this.dstReg = opcode & PDP11.OPREG.MASK;
        let mode = this.dstMode = (opcode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;
        return this.getAddrByMode(mode, reg, PDP11.ACCESS.VIRT);
    }

    /**
     * readDstByte(opcode)
     *
     * @this {PDP11}
     * @param {number} opcode
     * @returns {number}
     */
    readDstByte(opcode)
    {
        let result;
        let reg = this.dstReg = opcode & PDP11.OPREG.MASK;
        let mode = this.dstMode = (opcode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;
        if (!mode) {
            result = this.regsGen[reg] & 0xff;
        } else {
            result = this.bus.readData(this.getAddr(mode, reg, PDP11.ACCESS.READ_BYTE));
        }
        return result;
    }

    /**
     * readDstWord(opcode)
     *
     * @this {PDP11}
     * @param {number} opcode
     * @returns {number}
     */
    readDstWord(opcode)
    {
        let result;
        let reg = this.dstReg = opcode & PDP11.OPREG.MASK;
        let mode = this.dstMode = (opcode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;
        if (!mode) {
            result = this.regsGen[reg];
        } else {
            result = this.bus.readPair(this.getAddr(mode, reg, PDP11.ACCESS.READ_WORD));
        }
        return result;
    }

    /**
     * updateDstByte(opcode, data, fnOp)
     *
     * Used whenever the DST operand (as described by opcode) needs to be read before writing.
     *
     * @this {PDP11}
     * @param {number} opcode
     * @param {number} data
     * @param {function(number,number)} fnOp
     */
    updateDstByte(opcode, data, fnOp)
    {
        let reg = this.dstReg = opcode & PDP11.OPREG.MASK;
        let mode = this.dstMode = (opcode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;
        if (!mode) {
            let dst = this.regsGen[reg];
            data = (data < 0? (this.regsGen[-data-1] & 0xff) : data);
            this.regsGen[reg] = (dst & 0xff00) | fnOp.call(this, data, dst & 0xff);
        } else {
            let addr = this.dstAddr = this.getAddr(mode, reg, PDP11.ACCESS.UPDATE_BYTE);
            data = (data < 0? (this.regsGen[-data-1] & 0xff) : data);
            this.bus.writeData(addr, fnOp.call(this, data, this.bus.readData(addr)));
            if (addr & 1) this.nStepCycles--;
        }
    }

    /**
     * updateDstWord(opcode, data, fnOp)
     *
     * Used whenever the DST operand (as described by opcode) needs to be read before writing.
     *
     * @this {PDP11}
     * @param {number} opcode
     * @param {number} data
     * @param {function(number,number)} fnOp
     */
    updateDstWord(opcode, data, fnOp)
    {
        let reg = this.dstReg = opcode & PDP11.OPREG.MASK;
        let mode = this.dstMode = (opcode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;



        if (!mode) {
            this.regsGen[reg] = fnOp.call(this, data < 0? this.regsGen[-data-1] : data, this.regsGen[reg]);
        } else {
            let addr = this.getAddr(mode, reg, PDP11.ACCESS.UPDATE_WORD);
            this.bus.writePair(addr, fnOp.call(this, data < 0? this.regsGen[-data-1] : data, this.bus.readPair(addr)));
        }
    }

    /**
     * writeDstByte(opcode, data, writeFlags, fnFlags)
     *
     * Used whenever the DST operand (as described by opcode) does NOT need to be read before writing.
     *
     * @this {PDP11}
     * @param {number} opcode
     * @param {number} data
     * @param {number} writeFlags (WRITE.BYTE aka 0xff, or WRITE.SBYTE aka 0xffff)
     * @param {function(number)} fnFlags
     */
    writeDstByte(opcode, data, writeFlags, fnFlags)
    {

        let reg = this.dstReg = opcode & PDP11.OPREG.MASK;
        let mode = this.dstMode = (opcode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;
        if (!mode) {
            if (!data) {
                /**
                 * Potentially worthless optimization (but it looks good on "paper").
                 */
                this.regsGen[reg] &= ~writeFlags;
            } else {
                /**
                 * Potentially worthwhile optimization: skipping the sign-extending data shifts
                 * if writeFlags is WRITE.BYTE (but that requires an extra test and separate code paths).
                 */
                data = (data < 0? (this.regsGen[-data-1] & 0xff): data);
                this.regsGen[reg] = (this.regsGen[reg] & ~writeFlags) | (((data << 24) >> 24) & writeFlags);
            }
            fnFlags.call(this, data << 8);
        } else {
            let addr = this.getAddr(mode, reg, PDP11.ACCESS.WRITE_BYTE);
            fnFlags.call(this, (data = data < 0? (this.regsGen[-data-1] & 0xff) : data) << 8);
            this.bus.writeData(addr, data);
            if (addr & 1) this.nStepCycles--;
        }
    }

    /**
     * writeDstWord(opcode, data, fnFlags)
     *
     * Used whenever the DST operand (as described by opcode) does NOT need to be read before writing.
     *
     * @this {PDP11}
     * @param {number} opcode
     * @param {number} data
     * @param {function(number)} fnFlags
     */
    writeDstWord(opcode, data, fnFlags)
    {
        let reg = this.dstReg = opcode & PDP11.OPREG.MASK;
        let mode = this.dstMode = (opcode & PDP11.OPMODE.MASK) >> PDP11.OPMODE.SHIFT;



        if (!mode) {
            this.regsGen[reg] = (data = data < 0? this.regsGen[-data-1] : data);
            fnFlags.call(this, data);
        } else {
            let addr = this.getAddr(mode, reg, PDP11.ACCESS.WRITE_WORD);
            fnFlags.call(this, (data = data < 0? this.regsGen[-data-1] : data));
            this.bus.writePair(addr, data);
        }
    }

    /**
     * toInstruction(addr, opcode)
     *
     * Returns a string representation of the specified instruction.
     *
     * @this {PDP11}
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
     * Returns a string representation of the current CPU state.
     *
     * @this {PDP11}
     * @returns {string}
     */
    toString()
    {
        let s = "";
        if (this.dbg) {
            let regs = [
                "R0", "R1", "R2", "R3", "R4", "R5", "",
                "SP", "PC", "PS", "PI", "SL", "NF", "ZF", "VF", "CF", "",
                "M0", "M1", "M2", "M3", "ER", "",
                "SR", "AR", "DR"
            ];
            for (let i = 0; i < regs.length; i++) {
                let reg = regs[i];
                if (!reg) {
                    s += '\n';
                    continue;
                }
                let bits = 16;
                if (reg[1] == 'F') bits = 1;
                let value = this.getRegister(reg);
                /**
                 * We must call the Debugger's sprintf() instead of our own in order to use its custom formatters (eg, %n).
                 */
                if (value != undefined) s += this.dbg.sprintf("%s=%*n ", reg, bits, value);
            }
        }
        return s;
    }
}

/**
 * CPU model numbers (supported)
 *
 * The 11/20 includes the 11/10, which is not identified separately because there was
 * nothing functionally different about it.
 *
 * The 11/40 added the MODE bits to the PSW (but only KERNEL=00 and USER=11) and 18-bit
 * addressing via an MMU; there was still only one register set.
 *
 * The 11/45 added REGSET bit to the PSW (to support a second register set), SUPER=01
 * mode to the existing KERNEL=00 and USER=11 modes, separate I/D spaces, and other MMU
 * extensions (eg, MMR1 and MMR3).
 *
 * The 11/70 added 22-bit addressing and corresponding extensions to the MMU.
 */
PDP11.MODEL_1120 = 1120;
PDP11.MODEL_1140 = 1140;
PDP11.MODEL_1145 = 1145;
PDP11.MODEL_1170 = 1170;

/**
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
PDP11.ADDR_INVALID = -1;

/**
 * Processor modes
 */
PDP11.MODE = {
    KERNEL:     0x0,            // 11/40 and higher
    SUPER:      0x1,            // 11/45 and higher
    UNUSED:     0x2,
    USER:       0x3,            // 11/40 and higher
    MASK:       0x3
};

/**
 * Processor Status Word (stored in regPSW) at 177776
 */
PDP11.PSW = {
    CF:         0x0001,         // bit  0     (000001)  Carry Flag
    VF:         0x0002,         // bit  1     (000002)  Overflow Flag (aka OF on Intel processors)
    ZF:         0x0004,         // bit  2     (000004)  Zero Flag
    NF:         0x0008,         // bit  3     (000010)  Negative Flag (aka SF -- Sign Flag -- on Intel processors)
    TF:         0x0010,         // bit  4     (000020)  Trap Flag
    PRI:        0x00E0,         // bits 5-7   (000340)  Priority
    UNUSED:     0x0700,         // bits 8-10  (003400)  UNUSED
    /**
     * The REGSET bit (and the alternate register set stored in regsAlt) came into existence
     * with the 11/45; (ie, they were not present on the 11/10, 11/20, or 11/40).
     */
    REGSET:     0x0800,         // bit  11    (004000)  Register Set
    /**
     * The MODE bits came into existence with the 11/40 (eg, not present on the 11/10 or 11/20).
     */
    PMODE:      0x3000,         // bits 12-13 (030000)  Prev Mode (see PDP11.MODE)
    CMODE:      0xC000,         // bits 14-15 (140000)  Curr Mode (see PDP11.MODE)
    SHIFT: {
        CF:     0,
        VF:     1,
        ZF:     2,
        NF:     3,
        TF:     4,
        PRI:    5,
        PMODE:  12,
        CMODE:  14
    }
};

/**
 * Program Interrupt Register (stored in regPIR) at 177772
 *
 * The PIA bits at 5-7 are designed to align with PRI bits 5-7 in the PSW.
 */
PDP11.PIR = {
    BITS:       0xFE00,         // bits 9-15 correspond to interrupt requests 1-7
    PIA:        0x00EE,         // the PIA bits contain two copies of the corresponding interrupt request priority
    PIA_INC:    0x0022,         // both sets of PIA bits can be incremented with this constant
    SHIFT: {
        BITS:   9
    }
};

/**
 * PDP-11 trap vectors
 */
PDP11.TRAP = {
    UNDEFINED:  0x00,           // 000  (reserved)
    BUS:        0x04,           // 004  unaligned address, non-existent memory, illegal instruction, etc
    RESERVED:   0x08,           // 010  reserved instructions
    BPT:        0x0C,           // 014  BPT: breakpoint trap (trace)
    IOT:        0x10,           // 020  IOT: input/output trap
    PF:         0x14,           // 024  power fail
    EMT:        0x18,           // 030  EMT: emulator trap
    TRAP:       0x1C,           // 034  TRAP instruction
    PIRQ:       0xA0,           // 240  PIRQ: program interrupt request
    MMU:        0xA8            // 250  MMU: aborts and traps
};

/**
 * PDP-11 trap reasons; the reason may also be a non-negative address indicating a BUS memory error
 * (unaligned address or non-existent memory).  Any reason >= RED (which includes BUS memory errors) generate
 * immediate (thrown) traps, as they are considered ABORTs; the rest generate synchronous traps.
 */
PDP11.REASON = {
    PANIC:      -1,             // immediate halt (internal error)
    ABORT:      -2,             // immediate MMU fault
    ILLEGAL:    -3,             // immediate invalid opcode (BUS)
    RED:        -4,             // immediate stack overflow fault (BUS)
    YELLOW:     -5,             // deferred stack overflow fault (BUS)
    FAULT:      -6,             // deferred MMU fault
    TRACE:      -7,             // deferred TF fault (BPT)
    HALT:       -8,             // illegal HALT (BUS)
    OPCODE:     -9,             // opcode-generated trap (eg, BPT, EMT, IOT, TRAP, or RESERVED opcode)
    INTERRUPT:  -10,            // device-generated trap (vector is device-specific)
};

PDP11.REASONS = [
    "UNKNOWN",
    "PANIC",
    "ABORT",
    "ILLEGAL",
    "RED",
    "YELLOW",
    "FAULT",
    "TRACE",
    "HALT",
    "OPCODE",
    "INTERRUPT"
];

/**
 * Assorted common opcodes
 */
PDP11.OPCODE = {
    HALT:       0x0000,
    WAIT:       0x0001,
    BPT:        0x0003,
    IOT:        0x0004,
    JSR_OP:     0x0800,
    JSR_MASK:   0xFE00,
    SOB_OP:     0x7E00,
    SOB_MASK:   0xFE00,
    EMT_OP:     0x8800,
    EMT_MASK:   0xFF00,
    TRAP_OP:    0x8900,
    TRAP_MASK:  0xFF00,
    INVALID:    0xFFFF          // far from the only invalid opcode, just a KNOWN invalid opcode
};

/**
 * Internal operation state flags
 */
PDP11.OPFLAG = {
    IRQ_DELAY:  0x0001,         // incremented until it becomes IRQ (set by SPL and traps)
    IRQ:        0x0002,         // time to call checkInterrupts()
    IRQ_MASK:   0x0003,
    DEBUGGER:   0x0004,         // set if the Debugger wants to perform checks
    WAIT:       0x0008,         // WAIT operation in progress
    PRESERVE:   0x000F,         // OPFLAG bits to preserve prior to the next instruction
    TRAP_TF:    0x0010,         // aka PDP11.PSW.TF (WARNING: do not change this bit, or you will likely break opRTI())
    TRAP_SP:    0x0020,         // set for a deferred BUS trap (due to a "yellow" stack overflow condition)
    TRAP_MMU:   0x0040,
    TRAP_MASK:  0x0070,
    TRAP_LAST:  0x0080,         // set if last operation was a trap (see trapLast for the vector, and trapReason for the reason)
    TRAP_RED:   0x0100,         // set whenever a RED trap occurs, used to catch double RED traps (time to PANIC)
};

/**
 * Opcode reg (opcode bits 2-0)
 */
PDP11.OPREG = {
    MASK:       0x07
};

    /**
     * Opcode modes (opcode bits 5-3)
     */
PDP11.OPMODE = {
    REG:        0x00,           // REGISTER                 (register is operand)
    REGD:       0x08,           // REGISTER DEFERRED        (register is address of operand)
    POSTINC:    0x10,           // AUTO-INCREMENT           (register is address of operand, register incremented)
    POSTINCD:   0x18,           // AUTO-INCREMENT DEFERRED  (register is address of address of operand, register incremented)
    PREDEC:     0x20,           // AUTO-DECREMENT           (register decremented, register is address of operand)
    PREDECD:    0x28,           // AUTO-DECREMENT DEFERRED  (register decremented, register is address of address of operand)
    INDEX:      0x30,           // INDEX                    (register + next word is address of operand)
    INDEXD:     0x38,           // INDEX DEFERRED           (register + next word is address of address of operand)
    MASK:       0x38,
    SHIFT:      3
};

PDP11.DSTMODE = {
    REG:        0x0007,
    MODE:       0x0038,
    MASK:       0x003F,
    SHIFT:      0
};

PDP11.SRCMODE = {
    REG:        0x01C0,
    MODE:       0x0E00,
    MASK:       0x0FC0,
    SHIFT:      6
};

PDP11.REG = {
    SP:         6,
    PC:         7,
};

/**
 * Internal memory access flags
 */
PDP11.ACCESS = {
    WORD:       0x00,
    BYTE:       0x01,
    READ:       0x02,
    WRITE:      0x04,
    UPDATE:     0x06,
    VIRT:       0x08,           // getVirtualByMode() leaves bit 17 clear if this is set (otherwise the caller would have to clear it again)
    ISPACE:     0x00000,
    DSPACE:     0x10000         // getVirtualByMode() sets bit 17 in any 16-bit virtual address that refers to D space (as opposed to I space)
};

/**
 * Internal flags passed to writeDstByte()
 *
 * The BYTE and SBYTE values have been chosen so that they can be used directly as masks.
 */
PDP11.WRITE = {
    BYTE:       0xff,           // write byte normally
    SBYTE:      0xffff          // sign-extend byte to word
};

PDP11.CPUERR = {                // 177766
    RED:        0x0004,         // 000004 red zone stack limit
    YELLOW:     0x0008,         // 000010 yellow zone stack limit
    TIMEOUT:    0x0010,         // 000020 UNIBUS timeout error
    NOMEMORY:   0x0020,         // 000040 non-existent memory error
    ODDADDR:    0x0040,         // 000100 odd word address error (as in non-even, not strange)
    BADHALT:    0x0080          // 000200 HALT attempted in USER or SUPER modes
};

PDP11.MMR0 = {                  // 177572
    ENABLED:    0x0001,         // 000001 address relocation enabled
    PAGE_NUM:   0x000E,         // 000016 page number of last fault
    PAGE_D:     0x0010,         // 000020 last fault occurred in D space (11/45 and 11/70)
    PAGE:       0x001E,         // 000176 (all of the PAGE bits)
    MODE:       0x0060,         // 000140 processor mode as of last fault
    COMPLETED:  0x0080,         // 000200 last instruction completed (R/O) (11/70)
    MAINT:      0x0100,         // 000400 only destination mode references will be relocated
    MMU_TRAPS:  0x0200,         // 001000 enable MMU traps (11/70)
    UNUSED:     0x0C00,         // 006000
    TRAP_MMU:   0x1000,         // 010000 trap: MMU (11/70)
    ABORT_RO:   0x2000,         // 020000 abort: read-only
    ABORT_PL:   0x4000,         // 040000 abort: page length
    ABORT_NR:   0x8000,         // 100000 abort: non-resident
    ABORT:      0xE000,         // 160000 (all of the ABORT bits)
    UPDATE:     0xF0FE,         // Includes all of: ABORT, TRAP, COMPLETED, MODE, and PAGE bits
    SHIFT: {
        PAGE:   1,
        MODE:   5
    }
};

PDP11.MMR1 = {                  // 177574: general purpose auto-inc/auto-dec register (11/45 and 11/70)
    REG1_NUM:   0x0007,         //
    REG1_DELTA: 0x00F8,         //
    REG2_NUM:   0x0700,         //
    REG2_DELTA: 0xF800          //
};

PDP11.MMR2 = {                  // 177576: virtual program counter register
};

PDP11.MMR3 = {                  // 172516: mapping register (11/45 and 11/70)
    USER_D:     0x0001,         // (000001)
    SUPER_D:    0x0002,         // (000002)
    KERNEL_D:   0x0004,         // (000004)
    MMU_22BIT:  0x0010,         // (000020)
    UNIBUS_MAP: 0x0020          // (000040) UNIBUS map relocation enabled
};

PDP11.PDR = {
    ACF: {
        NR:     0x0,            // non-resident, abort all accesses
        RO1:    0x1,            // read-only, abort on write attempt, memory management trap on read (11/70)
        RO:     0x2,            // read-only, abort on write attempt
        U1:     0x3,            // unused, abort all accesses--reserved for future use
        RW1:    0x4,            // read/write, memory management trap upon completion of a read or write
        RW2:    0x5,            // read/write, memory management trap upon completion of a write (11/70)
        RW:     0x6,            // read/write, no system trap/abort action
        U2:     0x7,            // unused, abort all accesses--reserved for future use
        MASK:   0x7
    },
    ED:         0x0008,         // expansion direction (if set, the page expands downward from block number 127)
    UNUSED:     0x0030,
    MODIFIED:   0x0040,         // page has been written (bit cleared when either PDR or PAR is written)
    ACCESSED:   0x0080,         // page has been accessed (bit cleared when either PDR or PAR is written) (11/70)
    PLF:        0x7F00,         // page length field
    BC:         0x8000          // bypass cache (11/44 only)
};

/**
 * Assorted special (UNIBUS) addresses
 *
 * Within the PDP-11/45's 18-bit address space, of the 0x40000 possible addresses (256Kb), the top 0x2000
 * (8Kb) is called the IOPage and is reserved for CPU and I/O registers.  The IOPage spans 0x3E000-0x3FFFF.
 *
 * Within the PDP-11/70's 22-bit address space, of the 0x400000 possible addresses (4Mb), the top 0x20000
 * (256Kb) is mapped to the UNIBUS (not physical memory), and as before, the top 0x2000 (8Kb) of that is
 * mapped to the IOPage.
 *
 * To map 18-bit UNIBUS addresses to 22-bit physical addresses, the 11/70 uses a UNIBUS relocation map.
 * It consists of 31 double-word registers that each hold a 22-bit base address.  When UNIBUS relocation
 * is enabled, the top 5 bits of an address select one of the 31 mapping registers, and the bottom 13 bits
 * are then added to the contents of the selected mapping register.
 *
 * ES6 ALERT: By using octal constants, I'm finally dipping my toe into ES6 (aka ECMAScript 2015) waters.
 * You'll even see a few binary constants below, too.  If you're loading this raw source code into your browser,
 * then by now (2016) you're almost certainly using an ES6-aware browser.  Production sites should be using code
 * compiled by Google's Closure Compiler, which we configure to produce code that's backward-compatible with ES5
 * (for example, all binary, octal, and hex constants are converted to decimal values).
 *
 * For more details: https://github.com/google/closure-compiler/wiki/ECMAScript6
 */
PDP11.UNIBUS = {                // 16-bit     18-bit      22-bit    Description
    UNIMAP:     0o170200,       //                                  UNIBUS Mapping Registers (0-31) 64 words (ends at 0o170372)
    SIPDR0:     0o172200,       //                                  Supervisor I Page Descriptor Register 0
    SIPDR1:     0o172202,       //                                  Supervisor I Page Descriptor Register 1
    SIPDR2:     0o172204,       //                                  Supervisor I Page Descriptor Register 2
    SIPDR3:     0o172206,       //                                  Supervisor I Page Descriptor Register 3
    SIPDR4:     0o172210,       //                                  Supervisor I Page Descriptor Register 4
    SIPDR5:     0o172212,       //                                  Supervisor I Page Descriptor Register 5
    SIPDR6:     0o172214,       //                                  Supervisor I Page Descriptor Register 6
    SIPDR7:     0o172216,       //                                  Supervisor I Page Descriptor Register 7
    SDPDR0:     0o172220,       //                                  Supervisor D Page Descriptor Register 0
    SDPDR1:     0o172222,       //                                  Supervisor D Page Descriptor Register 1
    SDPDR2:     0o172224,       //                                  Supervisor D Page Descriptor Register 2
    SDPDR3:     0o172226,       //                                  Supervisor D Page Descriptor Register 3
    SDPDR4:     0o172230,       //                                  Supervisor D Page Descriptor Register 4
    SDPDR5:     0o172232,       //                                  Supervisor D Page Descriptor Register 5
    SDPDR6:     0o172234,       //                                  Supervisor D Page Descriptor Register 6
    SDPDR7:     0o172236,       //                                  Supervisor D Page Descriptor Register 7
    SIPAR0:     0o172240,       //                                  Supervisor I Page Address Register 0
    SIPAR1:     0o172242,       //                                  Supervisor I Page Address Register 1
    SIPAR2:     0o172244,       //                                  Supervisor I Page Address Register 2
    SIPAR3:     0o172246,       //                                  Supervisor I Page Address Register 3
    SIPAR4:     0o172250,       //                                  Supervisor I Page Address Register 4
    SIPAR5:     0o172252,       //                                  Supervisor I Page Address Register 5
    SIPAR6:     0o172254,       //                                  Supervisor I Page Address Register 6
    SIPAR7:     0o172256,       //                                  Supervisor I Page Address Register 7
    SDPAR0:     0o172260,       //                                  Supervisor D Page Address Register 0
    SDPAR1:     0o172262,       //                                  Supervisor D Page Address Register 1
    SDPAR2:     0o172264,       //                                  Supervisor D Page Address Register 2
    SDPAR3:     0o172266,       //                                  Supervisor D Page Address Register 3
    SDPAR4:     0o172270,       //                                  Supervisor D Page Address Register 4
    SDPAR5:     0o172272,       //                                  Supervisor D Page Address Register 5
    SDPAR6:     0o172274,       //                                  Supervisor D Page Address Register 6
    SDPAR7:     0o172276,       //                                  Supervisor D Page Address Register 7
    KIPDR0:     0o172300,       //                                  Kernel I Page Descriptor Register 0
    KIPDR1:     0o172302,       //                                  Kernel I Page Descriptor Register 1
    KIPDR2:     0o172304,       //                                  Kernel I Page Descriptor Register 2
    KIPDR3:     0o172306,       //                                  Kernel I Page Descriptor Register 3
    KIPDR4:     0o172310,       //                                  Kernel I Page Descriptor Register 4
    KIPDR5:     0o172312,       //                                  Kernel I Page Descriptor Register 5
    KIPDR6:     0o172314,       //                                  Kernel I Page Descriptor Register 6
    KIPDR7:     0o172316,       //                                  Kernel I Page Descriptor Register 7
    KDPDR0:     0o172320,       //                                  Kernel D Page Descriptor Register 0
    KDPDR1:     0o172322,       //                                  Kernel D Page Descriptor Register 1
    KDPDR2:     0o172324,       //                                  Kernel D Page Descriptor Register 2
    KDPDR3:     0o172326,       //                                  Kernel D Page Descriptor Register 3
    KDPDR4:     0o172330,       //                                  Kernel D Page Descriptor Register 4
    KDPDR5:     0o172332,       //                                  Kernel D Page Descriptor Register 5
    KDPDR6:     0o172334,       //                                  Kernel D Page Descriptor Register 6
    KDPDR7:     0o172336,       //                                  Kernel D Page Descriptor Register 7
    KIPAR0:     0o172340,       //                                  Kernel I Page Address Register 0
    KIPAR1:     0o172342,       //                                  Kernel I Page Address Register 1
    KIPAR2:     0o172344,       //                                  Kernel I Page Address Register 2
    KIPAR3:     0o172346,       //                                  Kernel I Page Address Register 3
    KIPAR4:     0o172350,       //                                  Kernel I Page Address Register 4
    KIPAR5:     0o172352,       //                                  Kernel I Page Address Register 5
    KIPAR6:     0o172354,       //                                  Kernel I Page Address Register 6
    KIPAR7:     0o172356,       //                                  Kernel I Page Address Register 7
    KDPAR0:     0o172360,       //                                  Kernel D Page Address Register 0
    KDPAR1:     0o172362,       //                                  Kernel D Page Address Register 1
    KDPAR2:     0o172364,       //                                  Kernel D Page Address Register 2
    KDPAR3:     0o172366,       //                                  Kernel D Page Address Register 3
    KDPAR4:     0o172370,       //                                  Kernel D Page Address Register 4
    KDPAR5:     0o172372,       //                                  Kernel D Page Address Register 5
    KDPAR6:     0o172374,       //                                  Kernel D Page Address Register 6
    KDPAR7:     0o172376,       //                                  Kernel D Page Address Register 7
    MMR3:       0o172516,       // 772516   17772516
    RLCS:       0o174400,       //                                  RL11 Control Status Register
    RLBA:       0o174402,       //                                  RL11 Bus Address Register
    RLDA:       0o174404,       //                                  RL11 Disk Address Register
    RLMP:       0o174406,       //                                  RL11 Multi-Purpose Register
    RLBE:       0o174410,       //                                  RL11 Bus (Address) Extension Register (RLV12 controller only)
    DL11:       0o176500,       //                                  DL11 Additional Register Range (ends at 0o176676)
    RXCS:       0o177170,       //                                  RX11 Command and Status Register
    RXDB:       0o177172,       //                                  RX11 Data Buffer Register
    RKDS:       0o177400,       //                                  RK11 Drive Status Register
    RKER:       0o177402,       //                                  RK11 Error Register
    RKCS:       0o177404,       //                                  RK11 Control Status Register
    RKWC:       0o177406,       //                                  RK11 Word Count Register
    RKBA:       0o177410,       //                                  RK11 Bus Address Register
    RKDA:       0o177412,       //                                  RK11 Disk Address Register
    RKUN:       0o177414,       //                                  RK11 UNUSED (just to make it clear we didn't forget something)
    RKDB:       0o177416,       //                                  RK11 Data Buffer Register
    LKS:        0o177546,       //                                  KW11-L Clock Status
    PRS:        0o177550,       //                                  PC11 (and PR11) Reader Status Register
    PRB:        0o177552,       //                                  PC11 (and PR11) Reader Buffer Register
    PPS:        0o177554,       //                                  PC11 Punch Status Register
    PPB:        0o177556,       //                                  PC11 Punch Buffer Register
    RCSR:       0o177560,       //                                  DL11 Receiver Status Register
    RBUF:       0o177562,       //                                  DL11 Receiver Data Buffer Register
    XCSR:       0o177564,       //                                  DL11 Transmitter Status Register
    XBUF:       0o177566,       //                                  DL11 Transmitter Data Buffer Register
    CNSW:       0o177570,       //                                  Console (Front Panel) Switch/Display Register
    MMR0:       0o177572,       // 777572   17777572
    MMR1:       0o177574,       // 777574   17777574
    MMR2:       0o177576,       // 777576   17777576
    UIPDR0:     0o177600,       //                                  User I Page Descriptor Register 0
    UIPDR1:     0o177602,       //                                  User I Page Descriptor Register 1
    UIPDR2:     0o177604,       //                                  User I Page Descriptor Register 2
    UIPDR3:     0o177606,       //                                  User I Page Descriptor Register 3
    UIPDR4:     0o177610,       //                                  User I Page Descriptor Register 4
    UIPDR5:     0o177612,       //                                  User I Page Descriptor Register 5
    UIPDR6:     0o177614,       //                                  User I Page Descriptor Register 6
    UIPDR7:     0o177616,       //                                  User I Page Descriptor Register 7
    UDPDR0:     0o177620,       //                                  User D Page Descriptor Register 0
    UDPDR1:     0o177622,       //                                  User D Page Descriptor Register 1
    UDPDR2:     0o177624,       //                                  User D Page Descriptor Register 2
    UDPDR3:     0o177626,       //                                  User D Page Descriptor Register 3
    UDPDR4:     0o177630,       //                                  User D Page Descriptor Register 4
    UDPDR5:     0o177632,       //                                  User D Page Descriptor Register 5
    UDPDR6:     0o177634,       //                                  User D Page Descriptor Register 6
    UDPDR7:     0o177636,       //                                  User D Page Descriptor Register 7
    UIPAR0:     0o177640,       //                                  User I Page Address Register 0
    UIPAR1:     0o177642,       //                                  User I Page Address Register 1
    UIPAR2:     0o177644,       //                                  User I Page Address Register 2
    UIPAR3:     0o177646,       //                                  User I Page Address Register 3
    UIPAR4:     0o177650,       //                                  User I Page Address Register 4
    UIPAR5:     0o177652,       //                                  User I Page Address Register 5
    UIPAR6:     0o177654,       //                                  User I Page Address Register 6
    UIPAR7:     0o177656,       //                                  User I Page Address Register 7
    UDPAR0:     0o177660,       //                                  User D Page Address Register 0
    UDPAR1:     0o177662,       //                                  User D Page Address Register 1
    UDPAR2:     0o177664,       //                                  User D Page Address Register 2
    UDPAR3:     0o177666,       //                                  User D Page Address Register 3
    UDPAR4:     0o177670,       //                                  User D Page Address Register 4
    UDPAR5:     0o177672,       //                                  User D Page Address Register 5
    UDPAR6:     0o177674,       //                                  User D Page Address Register 6
    UDPAR7:     0o177676,       //                                  User D Page Address Register 7
    R0SET0:     0o177700,       //
    R1SET0:     0o177701,       //
    R2SET0:     0o177702,       //
    R3SET0:     0o177703,       //
    R4SET0:     0o177704,       //
    R5SET0:     0o177705,       //
    R6KERNEL:   0o177706,       //
    R7KERNEL:   0o177707,       //
    R0SET1:     0o177710,       //
    R1SET1:     0o177711,       //
    R2SET1:     0o177712,       //
    R3SET1:     0o177713,       //
    R4SET1:     0o177714,       //
    R5SET1:     0o177715,       //
    R6SUPER:    0o177716,       //
    R6USER:     0o177717,       //
    /**
     * This next group of registers is largely ignored; all accesses are routed to regsControl[],
     * and therefore are managed as a block of 8 "CTRL" registers.
     */
    CTRL:       0o177740,
    LAERR:      0o177740,       //                                  Low Address Error                           (11/70 only)
    HAERR:      0o177742,       //                                  High Address Error                          (11/70 only)
    MEMERR:     0o177744,       //                                  Memory System Error                         (11/70 only)
    CACHEC:     0o177746,       //                                  Cache Control                               (11/70 only)
    MAINT:      0o177750,       //                                  Maintenance                                 (11/70 only)
    HITMISS:    0o177752,       //                                  Hit/Miss                                    (11/70 only)
    UNDEF1:     0o177754,       //
    UNDEF2:     0o177756,       //
    LSIZE:      0o177760,       //                                  Lower Size Register (last 64-byte block #)  (11/70 only)
    HSIZE:      0o177762,       //                                  Upper Size Register (always zero)           (11/70 only)
    SYSID:      0o177764,       //                                  System ID Register                          (11/70 only)
    CPUERR:     0o177766,       //                                  CPU error                                   (11/70 only)
    MB:         0o177770,       //                                  Microprogram break                          (11/70 only)
    PIR:        0o177772,       //                                  Program Interrupt Request
    SL:         0o177774,       //                                  Stack Limit Register
    PSW:        0o177776        // 777776   17777776    0x3FFFFE    Processor Status Word
};

PDP11.DL11 = {                  // Serial Line Interface (program compatible with the KL11 for control of console teleprinters)
    PRI:        4,
    RVEC:       0o060,
    XVEC:       0o064,
    RCSR: {                     // 177560: DL11 Receiver Status Register
        RE:     0x0001,         // Reader Enable (W/O)
        DTR:    0x0002,         // Data Terminal Ready (R/W)
        RTS:    0x0004,         // Request To Send (R/W)
        STD:    0x0008,         // Secondary Transmitted Data (R/W)
        DIE:    0x0020,         // Dataset Interrupt Enable (R/W)
        RIE:    0x0040,         // Receiver Interrupt Enable (R/W)
        RD:     0x0080,         // Receiver Done (R/O)
        SRD:    0x0400,         // Secondary Received Data (R/O)
        RA:     0x0800,         // Receiver Active (R/O)
        CD:     0x1000,         // Carrier Detect (R/O)
        CTS:    0x2000,         // Clear To Send (R/O)
        RI:     0x4000,         // Ring Indicator (R/O)
        DSC:    0x8000,         // Dataset Status Change (R/O)
        RMASK:  0xFFFE,         // bits readable (TODO: All I know for sure is that bit 0 is NOT readable; see readRCSR())
        WMASK:  0x006F,         // bits writable
        RS232:  0x0006,         // bits affecting RS-232 status updates
        BAUD:   9600
    },
    RBUF: {                     // 177562: DL11 Receiver Data Buffer Register
        DATA:   0x00ff,         // Received Data (R/O)
        PARITY: 0x1000,         // Received Data Parity (R/O)
        FE:     0x2000,         // Framing Error (R/O)
        OE:     0x4000,         // Overrun Error (R/O)
        ERROR:  0x8000          // Error (R/O)
    },
    XCSR: {                     // 177564: DL11 Transmitter Status Register
        BREAK:  0x0001,         // BREAK (R/W)
        MAINT:  0x0004,         // Maintenance (R/W)
        TIE:    0x0040,         // Transmitter Interrupt Enable (R/W)
        READY:  0x0080,         // Transmitter Ready (R/O)
        RMASK:  0x00C5,
        WMASK:  0x0045,
        BAUD:   9600
    },
    XBUF: {                     // 177566: DL11 Transmitter Data Buffer Register
        DATA:   0x00FF          // Transmitted Data (W/O) (TODO: Determine why pdp11.js effectively defined this as 0x7F)
    }
};

PDP11.KW11 = {                  // KW11-L Line Time Clock (60Hz; well, OK, or 50Hz, if you're in the UK, I suppose...)
    PRI:        6,
    VEC:        0o100,
    DELAY:      0,
    LKS: {                      // 177546: KW11-L Clock Status
        IE:     0x0040,         // Interrupt Enable
        MON:    0x0080,         // Monitor
        MASK:   0x00C0          // these are the only bits that can read or written
    }
};

PDP11.PC11 = {                  // High Speed Reader & Punch (PR11 is a Reader-only unit)
    PRI:        4,              // NOTE: reader has precedence over punch
    RVEC:       0o070,          // reader vector
    PVEC:       0o074,          // punch vector
    PRS: {                      // 177550: PC11 (and PR11) Reader Status Register
        RE:     0x0001,         // (000001) Reader Enable (W/O)
        IE:     0x0040,         // (000100) Reader Interrupt Enable (allows the DONE and ERROR bits to trigger an interrupt)
        DONE:   0x0080,         // (000200) Done (R/O)
        BUSY:   0x0800,         // (004000) Busy (R/O)
        ERROR:  0x8000,         // (100000) Error (R/O)
        CLEAR:  0x08C0,         // (004300) bits cleared on INIT
        RMASK:  0xFFFE,         // (177776) bits readable (TODO: All I know for sure is that bit 0 is NOT readable; see readPRS())
        WMASK:  0x0041,         // (000101) bits writable
        BAUD:   3600
    },
    PRB: {                      // 177552: PC11 (and PR11) Reader Buffer Register
        MASK:   0x00FF          // Data
    },
    PPS: {                      // 177554: PC11 Punch Status Register
        IE:     0x0040,         // Interrupt Enable
        RDY:    0x0080,         // Ready
        ERROR:  0x8000,         // Error (eg, no tape in punch, or punch has no power)
        WMASK:  0x0040,         // bits writable
        BAUD:   600
    },
    PPB: {                      // 177556: PC11 Punch Buffer Register
        MASK:   0x00FF          // Data
    }
};

PDP11.RK11 = {                  // RK11 Disk Controller
    PRI:        5,
    VEC:        0o220,
    DRIVES:     8,              // maximum of 8 drives
    RKDS: {                     // 177400: Drive Status Register
        SC:     0x000F,         // (000017) Sector Counter
        SCESA:  0x0010,         // (000020) Sector Counter Equals Sector Address
        WPS:    0x0020,         // (000040) Write Protected Status (set if write-protected)
        RRDY:   0x0040,         // (000100) Read/Write/Seek Ready
        DRDY:   0x0080,         // (000200) Drive Ready
        SOK:    0x0100,         // (000400) Sector Counter OK
        SIN:    0x0200,         // (001000) Seek Incomplete
        DRU:    0x0400,         // (002000) Drive Unsafe
        RK05:   0x0800,         // (004000) RK05 is the selected disk drive (always set)
        DPL:    0x1000,         // (010000) Drive Power Low
        ID:     0xE000,         // (160000) Drive ID (logical drive number of an interrupting drive)
        SHIFT: {
            ID:     13
        }
    },
    RKER: {                     // 177402: Error Register
        WCE:    0x0001,         // Write Check Error
        CSE:    0x0002,         // Checksum Error
        SE:     0x0003,         // Soft Error bits (cleared at the start of a new function)
        UNUSED: 0x001C,         // unused (returns zero)
        NXS:    0x0020,         // Non-Existent Sector
        NXC:    0x0040,         // Non-Existent Cylinder
        NXD:    0x0080,         // Non-Existent Disk
        TE:     0x0100,         // Timing Error
        DLT:    0x0200,         // Date Late
        NXM:    0x0400,         // Non-Existent Memory
        PGE:    0x0800,         // Programming Error
        SKE:    0x1000,         // Seek Error
        WLO:    0x2000,         // Write Lock-Out Violation
        OVR:    0x4000,         // Overrun
        DRE:    0x8000,         // Drive Error
        HE:     0x7FE0          // Hard Error bits (cleared only by Bus RESET or RK11 CRESET function)
    },
    RKCS: {                     // 177404: Control Status Register
        GO:     0x0001,         // (000001) Go (W/O)
        FUNC:   0x000E,         // (000016) Function Code (F2,F1,F0) (R/W)
        MEX:    0x0030,         // (000060) Memory Extension (R/W)
        IE:     0x0040,         // (000100) Interrupt Enable (R/W)
        CRDY:   0x0080,         // (000200) Controller Ready (R/O)
        SSE:    0x0100,         // (000400) Stop on Soft Error (R/W)
        EXB:    0x0200,         // (001000) Extra Bit (R/W)
        FMT:    0x0400,         // (002000) Format (R/W)
        IBA:    0x0800,         // (004000) Inhibit RKBA Increment (R/W)
        SCP:    0x2000,         // (020000) Search Complete (R/O)
        HE:     0x4000,         // (040000) Hard Error (R/O)
        ERR:    0x8000,         // (100000) Composite Error (R/O) (set when any RKER bit is set)
        UNUSED: 0x1200,         // (011000) unused
        RMASK:  0xEFFE,         // (167776) bits readable
        WMASK:  0x0F7F,         // (007577) bits writable
        SHIFT: {
            FUNC:   1,
            MEX:    4
        }
    },
    RKDA: {                     // 177412: Disk Address Register
        SA:     0x000F,         // (000017) Sector Address
        HS:     0x0010,         // (000020) Head Select (aka SUR: clear for upper disk head, set for lower)
        CA:     0x1FE0,         // (017740) Cylinder Address (aka CYL ADDR)
        DS:     0xE000,         // (160000) Drive Select (aka DR SEL)
        SHIFT: {
            HS:     4,
            CA:     5,
            DS:     13
        }
    },
    FUNC: {
        CRESET: 0b0000,         // (00) Controller Reset
        WRITE:  0b0010,         // (02) Write
        READ:   0b0100,         // (04) Read
        WCHK:   0b0110,         // (06) Write Check
        SEEK:   0b1000,         // (10) Seek
        RCHK:   0b1010,         // (12) Read Check
        DRESET: 0b1100,         // (14) Drive Reset
        WLOCK:  0b1110          // (16) Write Lock
    }
};

PDP11.RL11 = {                  // RL11 Disk Controller
    PRI:        5,
    VEC:        0o160,
    DRIVES:     4,              // maximum of 4 drives
    PREFIX:     "DY",
    RLCS: {                     // 174400: Control Status Register
        DRDY:   0x0001,         // (000001) Drive Ready (R/O)
        FUNC:   0x000E,         // (000016) Function Code (F2,F1,F0) (R/W)
        BAE:    0x0030,         // (000060) Bus Address Extension bits (BA17,BA16) (R/W)
        IE:     0x0040,         // (000100) Interrupt Enable (R/W)
        CRDY:   0x0080,         // (000200) Controller Ready (R/W)
        DS:     0x0300,         // (001400) Drive Select (DS1,DS0) (R/W)
        ERRC:   0x3C00,         // (036000) Error Code (R/O)
        DE:     0x4000,         // (040000) Drive Error (R/O)
        ERR:    0x8000,         // (100000) Composite Error (R/O)
        CLEAR:  0x3F7E,         // (037576) bits cleared on INIT (bits 1-6 and 8-13 are cleared)
        SET:    0x0080,         // (000200) bits set on INIT (bit 7 is set)
        RMASK:  0xFFFF,         // (177777) no write-only bits
        WMASK:  0x03FE,         // (001776) bits writable
        SHIFT: {
            FUNC:   1,
            BAE:    4,
            DS:     8
        }
    },
    RLBA: {                     // 174402: Bus Address Register
        WMASK:  0xFFFE          // bit 0 is effectively not writable (always zero)
    },
    /**
     * This register has 3 formats: one for Seek, another for Read/Write, and a third for Get Status
     */
    RLDA: {                     // 174404: Disk Address Register
        SEEK_CMD:   0x0001,     // Seek: bit 0 must be set, bits 1 and 3 must be clear
        SEEK_DIR:   0x0004,     // Direction (clear to move heads away from spindle (lower cylinder), set to move to higher cylinder)
        SEEK_HS:    0x0010,     // Head Select (clear to select upper head, set to select lower head)
        SEEK_CAD:   0xFF80,     // Cylinder Address Difference
        RW_SA:      0x003F,     // Sector Address
        RW_HS:      0x0040,     // Head Select
        RW_CA:      0xFF80,     // Cylinder Address (RL01 has 256 cylinders, RL02 has 512)
        GS_CMD:     0x0003,     // Get Status: bit 0 must be set, bit 1 set, and bits 2 and 4-7 clear (bits 8-15 unused)
        GS_RST:     0x0008,     // Reset (when set, clears error register before sending status word to controller)
        SHIFT: {
            RW_HS:  6,
            RW_CA:  7
        }
    },
    /**
     * This register has 3 formats: one for Read Header, another for Read/Write, and a third for Get Status
     */
    RLMP: {                     // 177406: Multi-Purpose Register
        GS_ST: {                // Major State Code (of the drive)
            LOADC:  0x0,        // Load Cartridge
            SPINUP: 0x1,        // Spin-Up
            BRUSHC: 0x2,        // Brush Cycle
            LOADH:  0x3,        // Load Heads
            SEEK:   0x4,        // Seek
            LOCKON: 0x5,        // Lock On
            UNLOADH:0x6,        // Unload Heads
            SPINDN: 0x7         // Spin-Down
        },
        GS_BH:      0x0008,     // Brushes Home
        GS_HO:      0x0010,     // Heads Out
        GS_CO:      0x0020,     // Cover Open (or dust cover is not in place)
        GS_HS:      0x0040,     // Head Selected (0 for upper head, 1 for lower head)
        GS_DT:      0x0080,     // Drive Type (0 for RL01, 1 for RL02)
        GS_DSE:     0x0100,     // Drive Select Error
        GS_VC:      0x0200,     // Volume Check (Set during transition from a head load state to a head-on-track state; cleared by execution of a Get Status command with Bit 3 asserted)
        GS_WGE:     0x0400,     // Write Gate Error
        GS_SPE:     0x0800,     // Spin Error
        GS_SKTO:    0x1000,     // Seek Time-Out
        GS_WL:      0x2000,     // Write Lock
        GS_CHE:     0x4000,     // Current Head Error
        GS_WDE:     0x8000      // Write Data Error
    },
    RLBE: {                     // 174410: Bus (Address) Extension Register
        MASK:   0x003F          // bits 5-0 correspond to bus address bits 21-16
    },
    ERRC: {                     // NOTE: These error codes are pre-shifted to read/write directly from/to RLCS.ERRC
        OPI:    0x0400,         // Operation Incomplete
        DCRC:   0x0800,         // Read Data CRC
        WCE:    0x0800,         // Write Check Error
        HCRC:   0x0C00,         // Header CRC
        DLT:    0x1000,         // Data Late
        HNF:    0x1400,         // Header Not Found
        NXM:    0x2000,         // Non-Existent Memory
        MPE:    0x2400          // Memory Parity Error (RLV12 only)
    },
    FUNC: {                     // NOTE: These function codes are pre-shifted to read/write directly from/to RLCS.FUNC
        NOP:    0b0000,         // (00) No-Op
        WCHK:   0b0010,         // (02) Write Check
        STATUS: 0b0100,         // (04) Get Status
        SEEK:   0b0110,         // (06) Seek
        RHDR:   0b1000,         // (10) Read Header
        WDATA:  0b1010,         // (12) Write Data
        RDATA:  0b1100,         // (14) Read Data
        RDNC:   0b1110          // (16) Read Data without Header Check
    }
};

PDP11.RX11 = {                  // RX11 Disk Controller
    PRI:        5,
    VEC:        0o264,
    DRIVES:     2,              // maximum of 2 drives
    PREFIX:     "DX",
    RXCS: {                     // 177170: Command and Status Register
        GO:     0x0001,         // (000001) Go (W/O)
        FUNC:   0x000E,         // (000016) Function Code (F2,F1,F0) (W/O)
        UNIT:   0x0010,         // (000020) Unit Select (W/O)
        DONE:   0x0020,         // (000040) Done (R/O)
        IE:     0x0040,         // (000100) Interrupt Enable (R/W, cleared on INIT)
        TR:     0x0080,         // (000200) Transfer Request (R/O)
        INIT:   0x4000,         // (040000) RX11 Initialize (W/O)
        ERR:    0x8000,         // (100000) Error (R/O, cleared on INIT or command)
        UNUSED: 0x3F00,         // (037400) unused
        RMASK:  0x80E0,         // (100340) bits readable
        WMASK:  0x405F          // (040137) bits writable
    },
    RXDB: {                     // 177172: Data Buffer Register
    },
    RXTA: {
        MASK:   0x007F
    },
    RXSA: {
        MASK:   0x001F
    },
    RXES: {
        /**
         * The DRDY bit is only valid when retrieved via a Read Status function or at completion of Initialize when it indicates
         * status of drive O.  It is asserted if the unit currently selected exists, is properly supplied with power, has a diskette
         * installed correctly, has its door closed, and has a diskette up to speed.
         *
         * If the Error bit was set in the RXCS but Error bits are not set in the RXES, then specific error conditions can be accessed via
         * a Read Error Register function.
         */
        CRC:    0x0001,         // CRC error (RXES is moved to the RXDB, and Error and Done are asserted)
        PARITY: 0x0002,         // parity error (RXES is moved to the RXDB, and Error and Done are asserted)
        ID:     0x0004,         // Initialize Done (following a programmable or UNIBUS initialization, or a power failure)
        DEL:    0x0040,         // Deleted Data Detected
        DRDY:   0x0080          // Drive Ready
    },
    FUNC: {                     // NOTE: These function codes are pre-shifted to read/write directly from/to RXCS.FUNC
        FILL:   0b0000,         // Fill Buffer
        EMPTY:  0b0010,         // Empty Buffer
        WRITE:  0b0100,         // Write Sector
        READ:   0b0110,         // Read Sector
        UNUSED: 0b1000,         // UNUSED
        RDSTAT: 0b1010,         // Read Status
        WRDEL:  0b1100,         // Write Deleted Data Sector
        RDERR:  0b1110          // Read Error Register
    },
    ERROR: {
        HOME0:      0o0010,     // Drive 0 failed to see home on Initialize
        HOME1:      0o0020,     // Drive 1 failed to see home on Initialize
        BAD_HOME:   0o0030,     // Found home when stepping out 10 tracks for INIT
        NO_TRACK:   0o0040,     // Tried to access a track greater than 77
        FOUND_HOME: 0o0050,     // Home was found before desired track was reached
        SELF_DIAG:  0o0060,     // Self-diagnostic error
        NO_SECTOR:  0o0070,     // Desired sector could not be found after looking at 52 headers (2 revolutions)
        NO_SEP:     0o0110,     // More than 40us and no SEP clock seen
        NO_PREAM:   0o0120,     // A preamble could not be found
        NO_IOMARK:  0o0130,     // Preamble found but no I/O mark found within allowable time span
        CRC_HEADER: 0o0140,     // CRC error on what we thought was a header
        BAD_TRACK:  0o0150,     // The header track address of a good header does not compare with the desired track
        NO_ID:      0o0160,     // Too many tries for an IDAM (identifies header)
        NO_DATA:    0o0170,     // Data AM not found in allotted time
        CRC_DATA:   0o0200,     // CRC error on reading the sector from the disk (No code appears in the ERREG).
        BAD_PARITY: 0o0210      // All parity errors
    }
};

PDP11.VECTORS = {
    0o060:  "DL11R",
    0o064:  "DL11X",
    0o070:  "PC11R",
    0o074:  "PC11X",
    0o100:  "KW11",
    0o160:  "RL11",
    0o220:  "RK11",
    0o264:  "RX11"
};

PDP11.RX11.RX01 = [
    "DX",
    77,  1, 26, 128,            // disk geometry (CHSN: cylinders, heads, sectors/track, and bytes/sector)
    1,   0,  0, 128,            // boot code location (cylinder, head, sector index (NOT sector number), and number of bytes)
    0                           // default drive status
];

PDP11.RK11.RK05 = [
    "RK",
    203, 2, 12, 512,            // disk geometry (CHSN: cylinders, heads, sectors/track, and bytes/sector)
    0,   0,  0, 512,            // boot code location (cylinder, head, sector index (NOT sector number), and number of bytes)
    PDP11.RK11.RKDS.RK05 | PDP11.RK11.RKDS.SOK | PDP11.RK11.RKDS.RRDY
];

PDP11.RL11.RL02K = [
    "RL",
    512, 2, 40, 256,            // disk geometry (CHSN: cylinders, heads, sectors/track, and bytes/sector)
    0,   0,  0, 256,            // boot code location (cylinder, head, sector index (NOT sector number), and number of bytes)
    PDP11.RL11.RLMP.GS_ST.LOCKON | PDP11.RL11.RLMP.GS_BH | PDP11.RL11.RLMP.GS_HO
];

PDP11.ACCESS.READ_WORD   = PDP11.ACCESS.WORD | PDP11.ACCESS.READ;       // formerly READ_MODE (2)
PDP11.ACCESS.READ_BYTE   = PDP11.ACCESS.BYTE | PDP11.ACCESS.READ;       // formerly READ_MODE (2) | BYTE_MODE (1)
PDP11.ACCESS.WRITE_WORD  = PDP11.ACCESS.WORD | PDP11.ACCESS.WRITE;      // formerly WRITE_MODE (4)
PDP11.ACCESS.WRITE_BYTE  = PDP11.ACCESS.BYTE | PDP11.ACCESS.WRITE;      // formerly WRITE_MODE (4) | BYTE_MODE (1)
PDP11.ACCESS.UPDATE_WORD = PDP11.ACCESS.WORD | PDP11.ACCESS.UPDATE;     // formerly MODIFY_WORD (2 | 4)
PDP11.ACCESS.UPDATE_BYTE = PDP11.ACCESS.BYTE | PDP11.ACCESS.UPDATE;     // formerly MODIFY_BYTE (1 | 2 | 4)

/**
 * PSW arithmetic flags are NOT stored directly into the PSW register; they are maintained across separate flag registers.
 */
PDP11.PSW.FLAGS         = (PDP11.PSW.NF | PDP11.PSW.ZF | PDP11.PSW.VF | PDP11.PSW.CF);

PDP11.IOPAGE_16BIT      = 0x00E000;     // 000160000                    // eg, PDP-11/20
PDP11.IOPAGE_18BIT      = 0x03E000;     // 000760000                    // eg, PDP-11/45
PDP11.IOPAGE_22BIT      = 0x3FE000;     // 017760000                    // eg, PDP-11/70
PDP11.IOPAGE_LENGTH     = 0x002000;                                     // ie, 8Kb
PDP11.IOPAGE_MASK       = PDP11.IOPAGE_LENGTH - 1;

PDP11.MASK_18BIT        = 0x03FFFF;     // 000777777

PDP11.UNIBUS_22BIT      = 0x3C0000;     // 017000000
PDP11.MASK_22BIT        = 0x3FFFFF;     // 017777777

PDP11.CLASSES["PDP11"] = PDP11;

/**
 * @copyright https://www.pcjs.org/machines/dec/pdp11/modules/v3/pdp11dbg.js (C) 2012-2025 Jeff Parsons
 */

/**
 * Debugger for PDP-11 CPUs
 *
 * @class PDP11Dbg
 * @unrestricted
 */
class PDP11Dbg extends Debugger {
    /**
     * PDP11Dbg(idMachine, idDevice, config)
     *
     * @this {PDP11Dbg}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);
        this.opTable = PDP11Dbg.OPTABLE;
        this.aOpReserved = [];
        if (this.cpu.model < PDP11.MODEL_1140) {
            this.aOpReserved = this.aOpReserved.concat(PDP11Dbg.OP1140);
        }
        if (this.cpu.model < PDP11.MODEL_1145) {
            this.aOpReserved = this.aOpReserved.concat(PDP11Dbg.OP1145);
        }
        this.maxOpcodeLength = 6;
    }

    /**
     * unassemble(address, opcodes, annotation)
     *
     * Overrides Debugger's default unassemble() function with one that understands PDP-11 instructions.
     *
     * @this {PDP11Dbg}
     * @param {Address} address (advanced by the number of processed opcodes)
     * @param {Array.<number>} opcodes (each processed opcode is shifted out, reducing the size of the array)
     * @param {string} [annotation] (optional string to append to the final result)
     * @returns {string}
     */
    unassemble(address, opcodes, annotation)
    {
        let sAddr = this.dumpAddress(address), sWords = "";
        let sLabel = this.getSymbolName(address, Debugger.SYMBOL.LABEL);
        let sComment = this.getSymbolName(address, Debugger.SYMBOL.COMMENT);

        /**
         * toBaseWord(word)
         *
         * @param {number} word
         * @returns {string}
         */
        let toBaseWord = (word) => this.toBase(word, 0, 16, "");

        /**
         * getNextWord()
         *
         * @returns {number}
         */
        let getNextWord = () => {
            let word = opcodes.shift() | (opcodes.shift() << 8);
            sWords += toBaseWord(word) + ' ';
            this.addAddress(address, 2);
            return word;
        };

        /**
         * getOperand(opcode, type)
         *
         * If getOperand() returns an Array rather than a string, then the first element is the original
         * operand, and the second element is a comment containing additional information (eg, the target)
         * of the operand.
         *
         * @param {number} opcode
         * @param {number} type
         * @returns {string|Array.<string>}
         */
        let getOperand = (opcode, type) => {
            /**
             * Take care of OP_OTHER opcodes first; then all we'll have to worry about
             * next are OP_SRC or OP_DST opcodes.
             */
            let sOperand = "";
            let disp;
            let addr;
            let typeOther = type & PDP11Dbg.OP_OTHER;
            if (typeOther == PDP11Dbg.OP_BRANCH) {
                disp = ((opcode & 0xff) << 24) >> 23;
                addr = (address.off + disp) & 0xffff;
                sOperand = toBaseWord(addr);
            }
            else if (typeOther == PDP11Dbg.OP_DSTOFF) {
                disp = (opcode & 0x3f) << 1;
                addr = (address.off - disp) & 0xffff;
                sOperand = toBaseWord(addr);
            }
            else if (typeOther == PDP11Dbg.OP_DSTNUM3) {
                disp = (opcode & 0x07);
                sOperand = this.toBase(disp, 0, 3, "");
            }
            else if (typeOther == PDP11Dbg.OP_DSTNUM6) {
                disp = (opcode & 0x3f);
                sOperand = this.toBase(disp, 0, 6, "");
            }
            else if (typeOther == PDP11Dbg.OP_DSTNUM8) {
                disp = (opcode & 0xff);
                sOperand = this.toBase(disp, 0, 8, "");
            }
            else {
                /**
                 * Isolate all OP_SRC or OP_DST bits from opcode in the mode variable.
                 */
                let mode = opcode & type;

                /**
                 * Convert OP_SRC bits into OP_DST bits, since they use the same format.
                 */
                if (type & PDP11Dbg.OP_SRC) {
                    mode >>= 6;
                    type >>= 6;
                }
                if (type & PDP11Dbg.OP_DST) {
                    let wIndex;
                    let sTarget = null;
                    let reg = mode & PDP11Dbg.OP_DSTREG;
                    /**
                     * Note that opcodes that specify only REG bits in the type mask (ie, no MOD bits)
                     * will automatically default to OPMODE_REG below.
                     */
                    switch((mode & PDP11Dbg.OP_DSTMODE)) {

                    case PDP11.OPMODE.REG:                  // 0x0: REGISTER
                        sOperand = getRegName(reg);
                        break;

                    case PDP11.OPMODE.REGD:                 // 0x1: REGISTER DEFERRED
                        sOperand = '@' + getRegName(reg);
                        sTarget = getTarget(this.cpu.regsGen[reg]);
                        break;

                    case PDP11.OPMODE.POSTINC:              // 0x2: POST-INCREMENT
                        if (reg < 7) {
                            sOperand = '(' + getRegName(reg) + ")+";
                        } else {
                            /**
                             * When using R7 (aka PC), POST-INCREMENT is known as IMMEDIATE
                             */
                            wIndex = getNextWord();
                            sOperand = '#' + toBaseWord(wIndex);
                        }
                        break;

                    case PDP11.OPMODE.POSTINCD:             // 0x3: POST-INCREMENT DEFERRED
                        if (reg < 7) {
                            sOperand = "@(" + getRegName(reg) + ")+";
                        } else {
                            /**
                             * When using R7 (aka PC), POST-INCREMENT DEFERRED is known as ABSOLUTE
                             */
                            wIndex = getNextWord();
                            sOperand = "@#" + toBaseWord(wIndex);
                            sTarget = getTarget(wIndex);
                        }
                        break;

                    case PDP11.OPMODE.PREDEC:               // 0x4: PRE-DECREMENT
                        sOperand = "-(" + getRegName(reg) + ")";
                        break;

                    case PDP11.OPMODE.PREDECD:              // 0x5: PRE-DECREMENT DEFERRED
                        sOperand = "@-(" + getRegName(reg) + ")";
                        break;

                    case PDP11.OPMODE.INDEX:                // 0x6: INDEX
                        wIndex = getNextWord();
                        sOperand = toBaseWord(wIndex) + '(' + getRegName(reg) + ')';
                        if (reg == 7) {
                            /**
                             * When using R7 (aka PC), INDEX is known as RELATIVE.  However, instead of displaying
                             * such an instruction like this:
                             *
                             *  016156: 010167 001300          MOV   R1,1300(PC)            ; @017462
                             *
                             * with the effective address display to the far right, let's display it like this instead:
                             *
                             *  016156: 010167 001300          MOV   R1,017462
                             *
                             * because you can still clearly see PC-relative offset (eg, 001300) as part of the disassembly.
                             *
                             *      sOperand = [sOperand, toBaseWord((wIndex + address.off) & 0xffff)];
                             */
                            sOperand = toBaseWord(wIndex = (wIndex + address.off) & 0xffff);
                            sTarget = getTarget(wIndex);
                        }
                        break;

                    case PDP11.OPMODE.INDEXD:               // 0x7: INDEX DEFERRED
                        wIndex = getNextWord();
                        sOperand = '@' + toBaseWord(wIndex) + '(' + getRegName(reg) + ')';
                        if (reg == 7) {
                            /**
                             * When using R7 (aka PC), INDEX DEFERRED is known as RELATIVE DEFERRED.  And for the same
                             * reasons articulated above, we now display the effective address inline.
                             *
                             *      sOperand = [sOperand, toBaseWord((wIndex + address.off) & 0xffff)];
                             */
                            sOperand = '@' + toBaseWord(wIndex = (wIndex + address.off) & 0xffff);
                            sTarget = getTarget(this.cpu.readWordSafe(wIndex));
                        }
                        break;

                    default:

                        break;
                    }

                    if (sTarget) sOperand = [sOperand, sTarget];
                }
                else {

                }
            }
            return sOperand;
        };

        /**
         * getRegName(iReg)
         *
         * @param {number} iReg (normally 0-7)
         * @returns {string}
         */
        let getRegName = (iReg) => PDP11Dbg.REGNAMES[iReg] || "?";

        /**
         * getTarget(addr)
         *
         * @param {number} addr
         * @returns {string|null}
         */
        let getTarget = (addr) => {
            let a = this.cpu.getAddrInfo(addr);
            let addrPhysical = a[0];
            // if (addrPhysical >= this.cpu.addrIOPage && addrPhysical < this.bus.addrIOPage) {
            //     addrPhysical = (addrPhysical - this.cpu.addrIOPage) + this.bus.addrIOPage;
            // }
            return null; // TODO: this.bus.getAddrInfo(addrPhysical);
        };

        let opcode = getNextWord();
        let opDesc, opNames = PDP11Dbg.OPNAMES;

        for (let mask in this.opTable) {
            let opMasks = this.opTable[mask];
            opDesc = opMasks[opcode & mask];
            if (opDesc) break;
        }

        if (!opDesc) opDesc = PDP11Dbg.OPNONE;

        let opNum = opDesc[0];
        if (this.aOpReserved.indexOf(opNum) >= 0) {
            opDesc = PDP11Dbg.OPNONE;
            opNum = opDesc[0];
        }

        let sOpcode = opNames[opNum];
        let sOperands = "", sTarget = "";
        let cOperands = opDesc.length - 1;
        if (!opNum && !cOperands) sOperands = toBaseWord(opcode);

        for (let iOperand = 1; iOperand <= cOperands; iOperand++) {

            let type = opDesc[iOperand];
            if (type == undefined) continue;

            let sOperand = getOperand(opcode, type);

            if (!sOperand || !sOperand.length) {
                sOperands = "INVALID";
                break;
            }

            /**
             * If getOperand() returns an Array rather than a string, then the first element is the original
             * operand, and the second element contains additional information (eg, the target) of the operand.
             */
            if (typeof sOperand != "string") {
                sTarget = sOperand[1];
                sOperand = sOperand[0];
            }

            if (sOperands.length > 0) sOperands += ',';
            sOperands += (sOperand || "???");
        }

        let result = this.sprintf("%s %-21s %-7s %s", sAddr, sWords, sOpcode, sOperands);
        if (!annotation) {
            if (sComment) annotation = sComment;
        } else {
            if (sComment) annotation += " " + sComment;
        }
        if (annotation) result = this.sprintf("%-32s; %s", result, annotation);
        if (sLabel) result = sLabel + ":\n" + result;
        return result + "\n";
    }
}

/**
 * CPU opcode IDs
 *
 * Not listed: BLO (same as BCS) and BHIS (same as BCC).
 */
PDP11Dbg.OPS = {
    NONE:   0,      ADC:    1,      ADCB:   2,      ADD:    3,      ASL:    4,      ASLB:   5,      ASR:    6,      ASRB:   7,
    BCC:    8,      BCS:    9,      BEQ:    10,     BGE:    11,     BGT:    12,     BHI:    13,     BIC:    14,     BICB:   15,
    BIS:    16,     BISB:   17,     BIT:    18,     BITB:   19,     BLE:    20,     BLOS:   21,     BLT:    22,     BMI:    23,
    BNE:    24,     BPL:    25,     BPT:    26,     BR:     27,     BVC:    28,     BVS:    29,     CCC:    30,     CLC:    31,
    CLCN:   32,     CLCV:   33,     CLCVN:  34,     CLCVZ:  35,     CLCZ:   36,     CLCZN:  37,     CLN:    38,     CLR:    39,
    CLRB:   40,     CLV:    41,     CLVN:   42,     CLVZ:   43,     CLVZN:  44,     CLZ:    45,     CLZN:   46,     CMP:    47,
    CMPB:   48,     COM:    49,     COMB:   50,     DEC:    51,     DECB:   52,     INC:    53,     INCB:   54,     HALT:   55,
    JMP:    56,     JSR:    57,     MARK:   58,     MFPD:   59,     MFPI:   60,     MFPS:   61,     MOV:    62,     MOVB:   63,
    MTPD:   64,     MTPI:   65,     MTPS:   66,     NEG:    67,     NEGB:   68,     NOP:    69,     RESET:  70,     ROL:    71,
    ROLB:   72,     ROR:    73,     RORB:   74,     RTI:    75,     RTS:    76,     SBC:    77,     SBCB:   78,     SCC:    79,
    SEC:    80,     SECN:   81,     SECV:   82,     SECVN:  83,     SECVZ:  84,     SECZ:   85,     SECZN:  86,     SEN:    87,
    SEV:    88,     SEVN:   89,     SEVZ:   90,     SEVZN:  91,     SEZ:    92,     SEZN:   93,     SUB:    94,     SWAB:   95,
    SXT:    96,     TST:    97,     TSTB:   98,     WAIT:   99,     MUL:    100,    DIV:    101,    ASH:    102,    ASHC:   103,
    XOR:    104,    SOB:    105,    EMT:    106,    TRAP:   107,    SPL:    108,    IOT:    109,    RTT:    110,    MFPT:   111
};
/**
 * CPU opcode names, indexed by CPU opcode ordinal (above)
 */
PDP11Dbg.OPNAMES = [
    ".WORD",        "ADC",          "ADCB",         "ADD",          "ASL",          "ASLB",         "ASR",          "ASRB",
    "BCC",          "BCS",          "BEQ",          "BGE",          "BGT",          "BHI",          "BIC",          "BICB",
    "BIS",          "BISB",         "BIT",          "BITB",         "BLE",          "BLOS",         "BLT",          "BMI",
    "BNE",          "BPL",          "BPT",          "BR",           "BVC",          "BVS",          "CCC",          "CLC",
    "CLCN",         "CLCV",         "CLCVN",        "CLCVZ",        "CLCZ",         "CLCZN",        "CLN",          "CLR",
    "CLRB",         "CLV",          "CLVN",         "CLVZ",         "CLVZN",        "CLZ",          "CLZN",         "CMP",
    "CMPB",         "COM",          "COMB",         "DEC",          "DECB",         "INC",          "INCB",         "HALT",
    "JMP",          "JSR",          "MARK",         "MFPD",         "MFPI",         "MFPS",         "MOV",          "MOVB",
    "MTPD",         "MTPI",         "MTPS",         "NEG",          "NEGB",         "NOP",          "RESET",        "ROL",
    "ROLB",         "ROR",          "RORB",         "RTI",          "RTS",          "SBC",          "SBCB",         "SCC",
    "SEC",          "SECN",         "SECV",         "SECVN",        "SECVZ",        "SECZ",         "SECZN",        "SEN",
    "SEV",          "SEVN",         "SEVZ",         "SEVZN",        "SEZ",          "SEZN",         "SUB",          "SWAB",
    "SXT",          "TST",          "TSTB",         "WAIT",         "MUL",          "DIV",          "ASH",          "ASHC",
    "XOR",          "SOB",          "EMT",          "TRAP",         "SPL",          "IOT",          "RTT",          "MFPT"
];
/**
 * Register numbers 0-7 are reserved for cpu.regsGen, 8-15 are reserved for cpu.regsAlt, and 16-19 for cpu.regsAltStack.
 */
PDP11Dbg.REG_PS        = 20;
PDP11Dbg.REG_PI        = 21;
PDP11Dbg.REG_ER        = 22;
PDP11Dbg.REG_SL        = 23;
PDP11Dbg.REG_M0        = 24;
PDP11Dbg.REG_M1        = 25;
PDP11Dbg.REG_M2        = 26;
PDP11Dbg.REG_M3        = 27;
PDP11Dbg.REG_AR        = 28;           // ADDRESS register; see Panel's getAR() and setAR()
PDP11Dbg.REG_DR        = 29;           // DISPLAY/DATA register; see Panel's getDR() and setDR()
PDP11Dbg.REG_SR        = 30;           // SWITCH register; see Panel's getSR() and setSR()
PDP11Dbg.REGS = {
    "SP":   6,
    "PC":   7,
    "PS":   PDP11Dbg.REG_PS,
    "PI":   PDP11Dbg.REG_PI,
    "ER":   PDP11Dbg.REG_ER,
    "SL":   PDP11Dbg.REG_SL,
    "M0":   PDP11Dbg.REG_M0,
    "M1":   PDP11Dbg.REG_M1,
    "M2":   PDP11Dbg.REG_M2,
    "M3":   PDP11Dbg.REG_M3,
    "AR":   PDP11Dbg.REG_AR,
    "DR":   PDP11Dbg.REG_DR,
    "SR":   PDP11Dbg.REG_SR
};
PDP11Dbg.REGNAMES = [
    "R0", "R1", "R2", "R3", "R4", "R5", "SP", "PC",
    "A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7",
    "S0", "S1", "S2", "S3",
    "PS", "PI", "ER", "SL", "M0", "M1", "M2", "M3",
    "AR", "DR", "SR"
];
PDP11Dbg.MODES = ["KI","KD","SI","SD","??","??","UI","UD"];
/**
 * Operand type masks; anything that's not covered by OP_SRC or OP_DST must be a OP_OTHER value.
 */
PDP11Dbg.OP_DSTREG   = PDP11.OPREG.MASK;
PDP11Dbg.OP_DSTMODE  = PDP11.OPMODE.MASK;
PDP11Dbg.OP_DST      = (PDP11Dbg.OP_DSTMODE | PDP11Dbg.OP_DSTREG);
PDP11Dbg.OP_SRCREG   = PDP11.OPREG.MASK << 6;
PDP11Dbg.OP_SRCMODE  = PDP11.OPMODE.MASK << 6;
PDP11Dbg.OP_SRC      = (PDP11Dbg.OP_SRCMODE | PDP11Dbg.OP_SRCREG);
PDP11Dbg.OP_BRANCH   = 0x1000;
PDP11Dbg.OP_DSTOFF   = 0x2000;
PDP11Dbg.OP_DSTNUM3  = 0x3000;       // DST 3-bit number (ie, just the DSTREG field)
PDP11Dbg.OP_DSTNUM6  = 0x6000;       // DST 6-bit number (ie, both the DSTREG and DSTMODE fields)
PDP11Dbg.OP_DSTNUM8  = 0x8000;       // DST 8-bit number
PDP11Dbg.OP_OTHER    = 0xF000;
/**
 * The OPTABLE contains opcode masks, and each mask refers to table of possible values, and each
 * value refers to an array that contains:
 *
 *      [0]: {number} of the opcode name (see OP.*)
 *      [1]: {number} containing the first operand type bit(s), if any
 *      [2]: {number} containing the second operand type bit(s), if any
 *
 * Note that, by convention, opcodes that require two operands list the SRC operand first and DST operand
 * second (ie, the OPPOSITE of the Intel convention).
 *
 * Also note that, for some of the newer PDP-11 opcodes (eg, MUL, DIV, ASH, ASHC), the location of the
 * opcode's SRC and DST bits are reversed.  This is why, for example, you'll see the MUL instruction defined
 * below as having OP_DST for the first operand and OP_SRCREG for the second operand.  This does NOT mean
 * that the opcode's destination operand is being listed first, but rather that the bits describing the source
 * operand are in the opcode's OP_DST field.
 */
PDP11Dbg.OPTABLE = {
    0xF000: {
        0x1000: [PDP11Dbg.OPS.MOV,     PDP11Dbg.OP_SRC,         PDP11Dbg.OP_DST],        // 01SSDD
        0x2000: [PDP11Dbg.OPS.CMP,     PDP11Dbg.OP_SRC,         PDP11Dbg.OP_DST],        // 02SSDD
        0x3000: [PDP11Dbg.OPS.BIT,     PDP11Dbg.OP_SRC,         PDP11Dbg.OP_DST],        // 03SSDD
        0x4000: [PDP11Dbg.OPS.BIC,     PDP11Dbg.OP_SRC,         PDP11Dbg.OP_DST],        // 04SSDD
        0x5000: [PDP11Dbg.OPS.BIS,     PDP11Dbg.OP_SRC,         PDP11Dbg.OP_DST],        // 05SSDD
        0x6000: [PDP11Dbg.OPS.ADD,     PDP11Dbg.OP_SRC,         PDP11Dbg.OP_DST],        // 06SSDD
        0x9000: [PDP11Dbg.OPS.MOVB,    PDP11Dbg.OP_SRC,         PDP11Dbg.OP_DST],        // 11SSDD
        0xA000: [PDP11Dbg.OPS.CMPB,    PDP11Dbg.OP_SRC,         PDP11Dbg.OP_DST],        // 12SSDD
        0xB000: [PDP11Dbg.OPS.BITB,    PDP11Dbg.OP_SRC,         PDP11Dbg.OP_DST],        // 13SSDD
        0xC000: [PDP11Dbg.OPS.BICB,    PDP11Dbg.OP_SRC,         PDP11Dbg.OP_DST],        // 14SSDD
        0xD000: [PDP11Dbg.OPS.BISB,    PDP11Dbg.OP_SRC,         PDP11Dbg.OP_DST],        // 15SSDD
        0xE000: [PDP11Dbg.OPS.SUB,     PDP11Dbg.OP_SRC,         PDP11Dbg.OP_DST]         // 16SSDD
    },
    0xFE00: {
        0x0800: [PDP11Dbg.OPS.JSR,     PDP11Dbg.OP_SRCREG,      PDP11Dbg.OP_DST],        // 004RDD
        0x7000: [PDP11Dbg.OPS.MUL,     PDP11Dbg.OP_DST,         PDP11Dbg.OP_SRCREG],     // 070RSS
        0x7200: [PDP11Dbg.OPS.DIV,     PDP11Dbg.OP_DST,         PDP11Dbg.OP_SRCREG],     // 071RSS
        0x7400: [PDP11Dbg.OPS.ASH,     PDP11Dbg.OP_DST,         PDP11Dbg.OP_SRCREG],     // 072RSS
        0x7600: [PDP11Dbg.OPS.ASHC,    PDP11Dbg.OP_DST,         PDP11Dbg.OP_SRCREG],     // 073RSS
        0x7800: [PDP11Dbg.OPS.XOR,     PDP11Dbg.OP_SRCREG,      PDP11Dbg.OP_DST],        // 074RDD
        0x7E00: [PDP11Dbg.OPS.SOB,     PDP11Dbg.OP_SRCREG,      PDP11Dbg.OP_DSTOFF]      // 077Rnn
    },
    0xFF00: {
        0x0100: [PDP11Dbg.OPS.BR,      PDP11Dbg.OP_BRANCH],
        0x0200: [PDP11Dbg.OPS.BNE,     PDP11Dbg.OP_BRANCH],
        0x0300: [PDP11Dbg.OPS.BEQ,     PDP11Dbg.OP_BRANCH],
        0x0400: [PDP11Dbg.OPS.BGE,     PDP11Dbg.OP_BRANCH],
        0x0500: [PDP11Dbg.OPS.BLT,     PDP11Dbg.OP_BRANCH],
        0x0600: [PDP11Dbg.OPS.BGT,     PDP11Dbg.OP_BRANCH],
        0x0700: [PDP11Dbg.OPS.BLE,     PDP11Dbg.OP_BRANCH],
        0x8000: [PDP11Dbg.OPS.BPL,     PDP11Dbg.OP_BRANCH],
        0x8100: [PDP11Dbg.OPS.BMI,     PDP11Dbg.OP_BRANCH],
        0x8200: [PDP11Dbg.OPS.BHI,     PDP11Dbg.OP_BRANCH],
        0x8300: [PDP11Dbg.OPS.BLOS,    PDP11Dbg.OP_BRANCH],
        0x8400: [PDP11Dbg.OPS.BVC,     PDP11Dbg.OP_BRANCH],
        0x8500: [PDP11Dbg.OPS.BVS,     PDP11Dbg.OP_BRANCH],
        0x8600: [PDP11Dbg.OPS.BCC,     PDP11Dbg.OP_BRANCH],
        0x8700: [PDP11Dbg.OPS.BCS,     PDP11Dbg.OP_BRANCH],
        0x8800: [PDP11Dbg.OPS.EMT,     PDP11Dbg.OP_DSTNUM8],      // 104000..104377
        0x8900: [PDP11Dbg.OPS.TRAP,    PDP11Dbg.OP_DSTNUM8]       // 104400..104777
    },
    0xFFC0: {
        0x0040: [PDP11Dbg.OPS.JMP,     PDP11Dbg.OP_DST],          // 0001DD
        0x00C0: [PDP11Dbg.OPS.SWAB,    PDP11Dbg.OP_DST],          // 0003DD
        0x0A00: [PDP11Dbg.OPS.CLR,     PDP11Dbg.OP_DST],          // 0050DD
        0x0A40: [PDP11Dbg.OPS.COM,     PDP11Dbg.OP_DST],          // 0051DD
        0x0A80: [PDP11Dbg.OPS.INC,     PDP11Dbg.OP_DST],          // 0052DD
        0x0AC0: [PDP11Dbg.OPS.DEC,     PDP11Dbg.OP_DST],          // 0053DD
        0x0B00: [PDP11Dbg.OPS.NEG,     PDP11Dbg.OP_DST],          // 0054DD
        0x0B40: [PDP11Dbg.OPS.ADC,     PDP11Dbg.OP_DST],          // 0055DD
        0x0B80: [PDP11Dbg.OPS.SBC,     PDP11Dbg.OP_DST],          // 0056DD
        0x0BC0: [PDP11Dbg.OPS.TST,     PDP11Dbg.OP_DST],          // 0057DD
        0x0C00: [PDP11Dbg.OPS.ROR,     PDP11Dbg.OP_DST],          // 0060DD
        0x0C40: [PDP11Dbg.OPS.ROL,     PDP11Dbg.OP_DST],          // 0061DD
        0x0C80: [PDP11Dbg.OPS.ASR,     PDP11Dbg.OP_DST],          // 0062DD
        0x0CC0: [PDP11Dbg.OPS.ASL,     PDP11Dbg.OP_DST],          // 0063DD
        0x0D00: [PDP11Dbg.OPS.MARK,    PDP11Dbg.OP_DSTNUM6],      // 0064nn
        0x0D40: [PDP11Dbg.OPS.MFPI,    PDP11Dbg.OP_DST],          // 0065SS
        0x0D80: [PDP11Dbg.OPS.MTPI,    PDP11Dbg.OP_DST],          // 0066DD
        0x0DC0: [PDP11Dbg.OPS.SXT,     PDP11Dbg.OP_DST],          // 0067DD
        0x8A00: [PDP11Dbg.OPS.CLRB,    PDP11Dbg.OP_DST],          // 1050DD
        0x8A40: [PDP11Dbg.OPS.COMB,    PDP11Dbg.OP_DST],          // 1051DD
        0x8A80: [PDP11Dbg.OPS.INCB,    PDP11Dbg.OP_DST],          // 1052DD
        0x8AC0: [PDP11Dbg.OPS.DECB,    PDP11Dbg.OP_DST],          // 1053DD
        0x8B00: [PDP11Dbg.OPS.NEGB,    PDP11Dbg.OP_DST],          // 1054DD
        0x8B40: [PDP11Dbg.OPS.ADCB,    PDP11Dbg.OP_DST],          // 1055DD
        0x8B80: [PDP11Dbg.OPS.SBCB,    PDP11Dbg.OP_DST],          // 1056DD
        0x8BC0: [PDP11Dbg.OPS.TSTB,    PDP11Dbg.OP_DST],          // 1057DD
        0x8C00: [PDP11Dbg.OPS.RORB,    PDP11Dbg.OP_DST],          // 1060DD
        0x8C40: [PDP11Dbg.OPS.ROLB,    PDP11Dbg.OP_DST],          // 1061DD
        0x8C80: [PDP11Dbg.OPS.ASRB,    PDP11Dbg.OP_DST],          // 1062DD
        0x8CC0: [PDP11Dbg.OPS.ASLB,    PDP11Dbg.OP_DST],          // 1063DD
        0x8D00: [PDP11Dbg.OPS.MTPS,    PDP11Dbg.OP_DST],          // 1064SS (only on LSI-11)
        0x8D40: [PDP11Dbg.OPS.MFPD,    PDP11Dbg.OP_DST],          // 1065DD (same as MFPI if no separate instruction/data spaces)
        0x8D80: [PDP11Dbg.OPS.MTPD,    PDP11Dbg.OP_DST],          // 1066DD (same as MTPI if no separate instruction/data spaces)
        0x8DC0: [PDP11Dbg.OPS.MFPS,    PDP11Dbg.OP_DST]           // 1067SS (only on LSI-11)
    },
    0xFFF8: {
        0x0080: [PDP11Dbg.OPS.RTS,     PDP11Dbg.OP_DSTREG],       // 00020R
        0x0098: [PDP11Dbg.OPS.SPL,     PDP11Dbg.OP_DSTNUM3]       // 00023N
    },
    0xFFFF: {
        0x0000: [PDP11Dbg.OPS.HALT],                                   // 000000
        0x0001: [PDP11Dbg.OPS.WAIT],                                   // 000001
        0x0002: [PDP11Dbg.OPS.RTI],                                    // 000002
        0x0003: [PDP11Dbg.OPS.BPT],                                    // 000003
        0x0004: [PDP11Dbg.OPS.IOT],                                    // 000004
        0x0005: [PDP11Dbg.OPS.RESET],                                  // 000005
        0x0006: [PDP11Dbg.OPS.RTT],                                    // 000006
        0x0007: [PDP11Dbg.OPS.MFPT],                                   // 000007 (only on PDP-11/44 & KB11-EM?)
        0x00A0: [PDP11Dbg.OPS.NOP],
        0x00A1: [PDP11Dbg.OPS.CLC],
        0x00A2: [PDP11Dbg.OPS.CLV],
        0x00A3: [PDP11Dbg.OPS.CLCV],
        0x00A4: [PDP11Dbg.OPS.CLZ],
        0x00A5: [PDP11Dbg.OPS.CLCZ],
        0x00A6: [PDP11Dbg.OPS.CLVZ],
        0x00A7: [PDP11Dbg.OPS.CLCVZ],
        0x00A8: [PDP11Dbg.OPS.CLN],
        0x00A9: [PDP11Dbg.OPS.CLCN],
        0x00AA: [PDP11Dbg.OPS.CLVN],
        0x00AB: [PDP11Dbg.OPS.CLCVN],
        0x00AC: [PDP11Dbg.OPS.CLZN],
        0x00AD: [PDP11Dbg.OPS.CLCZN],
        0x00AE: [PDP11Dbg.OPS.CLVZN],
        0x00AF: [PDP11Dbg.OPS.CCC],                                    // aka CLCVZN
        0x00B0: [PDP11Dbg.OPS.NOP],
        0x00B1: [PDP11Dbg.OPS.SEC],
        0x00B2: [PDP11Dbg.OPS.SEV],
        0x00B3: [PDP11Dbg.OPS.SECV],
        0x00B4: [PDP11Dbg.OPS.SEZ],
        0x00B5: [PDP11Dbg.OPS.SECZ],
        0x00B6: [PDP11Dbg.OPS.SEVZ],
        0x00B7: [PDP11Dbg.OPS.SECVZ],
        0x00B8: [PDP11Dbg.OPS.SEN],
        0x00B9: [PDP11Dbg.OPS.SECN],
        0x00BA: [PDP11Dbg.OPS.SEVN],
        0x00BB: [PDP11Dbg.OPS.SECVN],
        0x00BC: [PDP11Dbg.OPS.SEZN],
        0x00BD: [PDP11Dbg.OPS.SECZN],
        0x00BE: [PDP11Dbg.OPS.SEVZN],
        0x00BF: [PDP11Dbg.OPS.SCC]                                     // aka SECVZN
    }
};
PDP11Dbg.OPNONE = [PDP11Dbg.OPS.NONE];
/**
 * Table of opcodes added to the 11/40 and newer
 */
PDP11Dbg.OP1140 = [
    PDP11Dbg.OPS.MARK,
    PDP11Dbg.OPS.MFPI,
    PDP11Dbg.OPS.MTPI,
    PDP11Dbg.OPS.SXT,
    PDP11Dbg.OPS.RTT,
    PDP11Dbg.OPS.MUL,
    PDP11Dbg.OPS.DIV,
    PDP11Dbg.OPS.ASH,
    PDP11Dbg.OPS.ASHC,
    PDP11Dbg.OPS.XOR,
    PDP11Dbg.OPS.SOB
];
/**
 * Table of opcodes added to the 11/45 and newer
 */
PDP11Dbg.OP1145 = [
    PDP11Dbg.OPS.SPL,
    PDP11Dbg.OPS.MFPD,
    PDP11Dbg.OPS.MTPD
];

PDP11Dbg.CLASSES["PDP11Dbg"] = PDP11Dbg;

/**
 * @copyright https://www.pcjs.org/machines/dec/pdp11/modules/v3/iopage.js (C) 2012-2025 Jeff Parsons
 */

/**
 * @class IOPage
 * @unrestricted
 */
class IOPage extends Ports {
    /**
     * IOPage(idMachine, idDevice, config)
     *
     * @this {IOPage}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {PortsConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);
        for (let port in IOPage.IOTABLE) {
            let handlers = IOPage.IOTABLE[port];
            port = +port;
            let inData = handlers[0];
            let outData = handlers[1];
            let inPair = handlers[2];
            let outPair = handlers[3];
            /**
             * When handlers are being registered for these BYTE-granular UNIBUS addresses,
             * we must install fallback handlers for all BYTE accesses.
             */
            if (port >= PDP11.UNIBUS.R0SET0 && port <= PDP11.UNIBUS.R6USER) {
                if (!inData && inPair) {
                    inData = function(readPair) {
                        return function(port) {
                            return readPair(port) & 0xff;
                        };
                    }(inPair);
                }
                if (!outData && outPair) {
                    outData = function(writePair) {
                        return function(port, value) {
                            return writePair(port, value);
                        };
                    }(outPair);
                }
            }
            this.addIOHandlers(this, port, port, inData, outData, inPair, outPair);
        }
        this.onReset();
    }

    /**
     * onPower()
     *
     * Called by the Machine device to provide notification of a power event.
     *
     * @this {IOPage}
     */
    onPower()
    {
        if (this.cpu === undefined) {
            this.cpu = /** @type {CPU} */ (this.findDeviceByClass("Debugger"));
        }
    }

    /**
     * loadState(state)
     *
     * Memory and Ports states are managed by the Bus onLoad() handler, which calls our loadState() handler.
     *
     * @this {IOPage}
     * @param {Array|undefined} state
     * @returns {boolean}
     */
    loadState(state)
    {
        if (state) {
            let idDevice = state.shift();
            if (this.idDevice == idDevice) {
                return true;
            }
        }
        return false;
    }

    /**
     * saveState(state)
     *
     * Memory and Ports states are managed by the Bus onSave() handler, which calls our saveState() handler.
     *
     * @this {IOPage}
     * @param {Array} state
     */
    saveState(state)
    {
        state.push(this.idDevice);
    }

    /**
     * readUNIMAP(port)
     *
     * NOTE: The UNIBUS map ("UNIMAP") is 32 registers spread across 64 words, so we first calculate the word index.
     *
     * @this {IOPage}
     * @param {number} port (eg, PDP11.UNIBUS.UNIMAP)
     * @returns {number}
     */
    readUNIMAP(port)
    {
        let word = (port >> 1) & 0x3f, reg = word >> 1;
        let value = this.cpu.regsUNIMap[reg];
        return (word & 1)? (value >> 16) : (value & 0xffff);
    }

    /**
     * writeUNIMAP(port, value)
     *
     * NOTE: The UNIBUS map ("UNIMAP") is 32 registers spread across 64 words, so we first calculate the word index.
     *
     * @this {IOPage}
     * @param {number} port (eg, PDP11.UNIBUS.UNIMAP)
     * @param {number} value
     */
    writeUNIMAP(port, value)
    {
        let word = (port >> 1) & 0x3f, reg = word >> 1;
        if (word & 1) {
            this.cpu.regsUNIMap[reg] = (this.cpu.regsUNIMap[reg] & 0xffff) | ((value & 0x003f) << 16);
        } else {
            this.cpu.regsUNIMap[reg] = (this.cpu.regsUNIMap[reg] & ~0xffff) | (value & 0xfffe);
        }
    }
}

IOPage.IOTABLE = {
    [PDP11.UNIBUS.UNIMAP]:  /* 170200 */    [null, null, IOPage.prototype.readUNIMAP,  IOPage.prototype.writeUNIMAP,  "UNIMAP",   64, PDP11.MODEL_1170],
 // [PDP11.UNIBUS.SIPDR0]:  /* 172200 */    [null, null, IOPage.prototype.readSIPDR,   IOPage.prototype.writeSIPDR,   "SIPDR",    8,  PDP11.MODEL_1145, MESSAGE.MMU],
 // [PDP11.UNIBUS.SDPDR0]:  /* 172220 */    [null, null, IOPage.prototype.readSDPDR,   IOPage.prototype.writeSDPDR,   "SDPDR",    8,  PDP11.MODEL_1145, MESSAGE.MMU],
 // [PDP11.UNIBUS.SIPAR0]:  /* 172240 */    [null, null, IOPage.prototype.readSIPAR,   IOPage.prototype.writeSIPAR,   "SIPAR",    8,  PDP11.MODEL_1145, MESSAGE.MMU],
 // [PDP11.UNIBUS.SDPAR0]:  /* 172260 */    [null, null, IOPage.prototype.readSDPAR,   IOPage.prototype.writeSDPAR,   "SDPAR",    8,  PDP11.MODEL_1145, MESSAGE.MMU],
 // [PDP11.UNIBUS.KIPDR0]:  /* 172300 */    [null, null, IOPage.prototype.readKIPDR,   IOPage.prototype.writeKIPDR,   "KIPDR",    8,  PDP11.MODEL_1140, MESSAGE.MMU],
 // [PDP11.UNIBUS.KDPDR0]:  /* 172320 */    [null, null, IOPage.prototype.readKDPDR,   IOPage.prototype.writeKDPDR,   "KDPDR",    8,  PDP11.MODEL_1145, MESSAGE.MMU],
 // [PDP11.UNIBUS.KIPAR0]:  /* 172340 */    [null, null, IOPage.prototype.readKIPAR,   IOPage.prototype.writeKIPAR,   "KIPAR",    8,  PDP11.MODEL_1140, MESSAGE.MMU],
 // [PDP11.UNIBUS.KDPAR0]:  /* 172360 */    [null, null, IOPage.prototype.readKDPAR,   IOPage.prototype.writeKDPAR,   "KDPAR",    8,  PDP11.MODEL_1145, MESSAGE.MMU],
 // [PDP11.UNIBUS.MMR3]:    /* 172516 */    [null, null, IOPage.prototype.readMMR3,    IOPage.prototype.writeMMR3,    "MMR3",     1,  PDP11.MODEL_1145, MESSAGE.MMU],
 // [PDP11.UNIBUS.LKS]:     /* 177546 */    [null, null, IOPage.prototype.readLKS,     IOPage.prototype.writeLKS,     "LKS"],
 // [PDP11.UNIBUS.MMR0]:    /* 177572 */    [null, null, IOPage.prototype.readMMR0,    IOPage.prototype.writeMMR0,    "MMR0",     1,  PDP11.MODEL_1140, MESSAGE.MMU],
 // [PDP11.UNIBUS.MMR1]:    /* 177574 */    [null, null, IOPage.prototype.readMMR1,    IOPage.prototype.writeIgnored, "MMR1",     1,  PDP11.MODEL_1145, MESSAGE.MMU],
 // [PDP11.UNIBUS.MMR2]:    /* 177576 */    [null, null, IOPage.prototype.readMMR2,    IOPage.prototype.writeIgnored, "MMR2",     1,  PDP11.MODEL_1140, MESSAGE.MMU],
 // [PDP11.UNIBUS.UIPDR0]:  /* 177600 */    [null, null, IOPage.prototype.readUIPDR,   IOPage.prototype.writeUIPDR,   "UIPDR",    8,  PDP11.MODEL_1140, MESSAGE.MMU],
 // [PDP11.UNIBUS.UDPDR0]:  /* 177620 */    [null, null, IOPage.prototype.readUDPDR,   IOPage.prototype.writeUDPDR,   "UDPDR",    8,  PDP11.MODEL_1145, MESSAGE.MMU],
 // [PDP11.UNIBUS.UIPAR0]:  /* 177640 */    [null, null, IOPage.prototype.readUIPAR,   IOPage.prototype.writeUIPAR,   "UIPAR",    8,  PDP11.MODEL_1140, MESSAGE.MMU],
 // [PDP11.UNIBUS.UDPAR0]:  /* 177660 */    [null, null, IOPage.prototype.readUDPAR,   IOPage.prototype.writeUDPAR,   "UDPAR",    8,  PDP11.MODEL_1145, MESSAGE.MMU],
 // [PDP11.UNIBUS.R0SET0]:  /* 177700 */    [null, null, IOPage.prototype.readRSET0,   IOPage.prototype.writeRSET0,   "R0SET0"],
 // [PDP11.UNIBUS.R1SET0]:  /* 177701 */    [null, null, IOPage.prototype.readRSET0,   IOPage.prototype.writeRSET0,   "R1SET0"],
 // [PDP11.UNIBUS.R2SET0]:  /* 177702 */    [null, null, IOPage.prototype.readRSET0,   IOPage.prototype.writeRSET0,   "R2SET0"],
 // [PDP11.UNIBUS.R3SET0]:  /* 177703 */    [null, null, IOPage.prototype.readRSET0,   IOPage.prototype.writeRSET0,   "R3SET0"],
 // [PDP11.UNIBUS.R4SET0]:  /* 177704 */    [null, null, IOPage.prototype.readRSET0,   IOPage.prototype.writeRSET0,   "R4SET0"],
 // [PDP11.UNIBUS.R5SET0]:  /* 177705 */    [null, null, IOPage.prototype.readRSET0,   IOPage.prototype.writeRSET0,   "R5SET0"],
 // [PDP11.UNIBUS.R6KERNEL]:/* 177706 */    [null, null, IOPage.prototype.readR6KERNEL,IOPage.prototype.writeR6KERNEL,"R6KERNEL"],
 // [PDP11.UNIBUS.R7KERNEL]:/* 177707 */    [null, null, IOPage.prototype.readR7KERNEL,IOPage.prototype.writeR7KERNEL,"R7KERNEL"],
 // [PDP11.UNIBUS.R0SET1]:  /* 177710 */    [null, null, IOPage.prototype.readRSET1,   IOPage.prototype.writeRSET1,   "R0SET1",   1,  PDP11.MODEL_1145],
 // [PDP11.UNIBUS.R1SET1]:  /* 177711 */    [null, null, IOPage.prototype.readRSET1,   IOPage.prototype.writeRSET1,   "R1SET1",   1,  PDP11.MODEL_1145],
 // [PDP11.UNIBUS.R2SET1]:  /* 177712 */    [null, null, IOPage.prototype.readRSET1,   IOPage.prototype.writeRSET1,   "R2SET1",   1,  PDP11.MODEL_1145],
 // [PDP11.UNIBUS.R3SET1]:  /* 177713 */    [null, null, IOPage.prototype.readRSET1,   IOPage.prototype.writeRSET1,   "R3SET1",   1,  PDP11.MODEL_1145],
 // [PDP11.UNIBUS.R4SET1]:  /* 177714 */    [null, null, IOPage.prototype.readRSET1,   IOPage.prototype.writeRSET1,   "R4SET1",   1,  PDP11.MODEL_1145],
 // [PDP11.UNIBUS.R5SET1]:  /* 177715 */    [null, null, IOPage.prototype.readRSET1,   IOPage.prototype.writeRSET1,   "R5SET1",   1,  PDP11.MODEL_1145],
 // [PDP11.UNIBUS.R6SUPER]: /* 177716 */    [null, null, IOPage.prototype.readR6SUPER, IOPage.prototype.writeR6SUPER, "R6SUPER",  1,  PDP11.MODEL_1145],
 // [PDP11.UNIBUS.R6USER]:  /* 177717 */    [null, null, IOPage.prototype.readR6USER,  IOPage.prototype.writeR6USER,  "R6USER",   1,  PDP11.MODEL_1145],
 // [PDP11.UNIBUS.CTRL]:    /* 177740 */    [null, null, IOPage.prototype.readCTRL,    IOPage.prototype.writeCTRL,    "CTRL",     8,  PDP11.MODEL_1170],
 // [PDP11.UNIBUS.LSIZE]:   /* 177760 */    [null, null, IOPage.prototype.readSIZE,    IOPage.prototype.writeSIZE,    "LSIZE",    1,  PDP11.MODEL_1170],
 // [PDP11.UNIBUS.HSIZE]:   /* 177762 */    [null, null, IOPage.prototype.readSIZE,    IOPage.prototype.writeSIZE,    "HSIZE",    1,  PDP11.MODEL_1170],
 // [PDP11.UNIBUS.SYSID]:   /* 177764 */    [null, null, IOPage.prototype.readSYSID,   IOPage.prototype.writeSYSID,   "SYSID",    1,  PDP11.MODEL_1170],
 // [PDP11.UNIBUS.CPUERR]:  /* 177766 */    [null, null, IOPage.prototype.readCPUERR,  IOPage.prototype.writeCPUERR,  "ERR",      1,  PDP11.MODEL_1170],
 // [PDP11.UNIBUS.MB]:      /* 177770 */    [null, null, IOPage.prototype.readMBR,     IOPage.prototype.writeMBR,     "MBR",      1,  PDP11.MODEL_1170],
 // [PDP11.UNIBUS.PIR]:     /* 177772 */    [null, null, IOPage.prototype.readPIR,     IOPage.prototype.writePIR,     "PIR"],
 // [PDP11.UNIBUS.SL]:      /* 177774 */    [null, null, IOPage.prototype.readSLR,     IOPage.prototype.writeSLR,     "SLR"],
 // [PDP11.UNIBUS.PSW]:     /* 177776 */    [null, null, IOPage.prototype.readPSW,     IOPage.prototype.writePSW,     "PSW"]
};

IOPage.CLASSES["IOPage"] = IOPage;

/**
 * @copyright https://www.pcjs.org/machines/dec/pdp11/modules/v3/dl11.js (C) 2012-2025 Jeff Parsons
 */

MESSAGE.DL11            = 0x000010000000;
MESSAGE.NAMES["dl11"]   = MESSAGE.DL11;

/**
 * @class DL11
 * @unrestricted
 */
class DL11 extends Device {
    /**
     * DL11(idMachine, idDevice, config)
     *
     * @this {DL11}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        this.nBaudReceive = +this.config['baudReceive'] || PDP11.DL11.RCSR.BAUD;
        this.nBaudTransmit = +this.config['baudTransmit'] || PDP11.DL11.XCSR.BAUD;

        this.time = /** @type {Time} */ (this.findDeviceByClass("Time"));
        this.timerReceiveNext = this.time.addTimer(this.idDevice + ".receive", this.receiveData.bind(this));
        this.timerTransmitNext = this.time.addTimer(this.idDevice + ".transmit", this.transmitData.bind(this));

        this.ports = /** @type {Ports} */ (this.findDeviceByClass("IOPage"));
        this.ports.addIOTable(this, DL11.IOTABLE);

        /**
         * No connection until initConnection() is called.
         */
        this.sDataReceived = "";
        this.connection = this.sendData = this.updateStatus = null;

        /**
         * Export all functions required by initConnection().
         */
        this['exports'] = {
            'connect': this.initConnection,
            'receiveData': this.receiveData,
            'receiveStatus': this.receiveStatus,
            'setConnection': this.setConnection
        };

        this.onReset();
    }

    /**
     * initConnection(fNullModem)
     *
     * If a machine 'connection' parameter exists of the form "{sourcePort}->{targetMachine}.{targetPort}",
     * and "{sourcePort}" matches our idDevice, then look for a component with id "{targetMachine}.{targetPort}".
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
     * @this {DL11}
     * @param {boolean} [fNullModem] (caller's null-modem setting, to ensure our settings are in agreement)
     */
    initConnection(fNullModem)
    {
        if (!this.connection) {
            let sConnection = this.getMachineConfig("connection");
            if (sConnection) {
                let asParts = sConnection.split('->');
                if (asParts.length == 2) {
                    let sSourceID = asParts[0].trim();
                    if (sSourceID != this.idDevice) return;     // this connection string is intended for another instance
                    let sTargetID = asParts[1].trim();
                    this.connection = this.findDevice(sTargetID);
                    if (this.connection) {
                        let exports = this.connection['exports'];
                        if (exports) {
                            let fnConnect = /** @function */ (exports['connect']);
                            if (fnConnect) fnConnect.call(this.connection, this.fNullModem);
                            this.sendData = exports['receiveData'];
                            if (this.sendData) {
                                this.fNullModem = fNullModem;
                                this.updateStatus = exports['receiveStatus'];
                                this.printf("Connected %s.%s to %s\n", this.idMachine, sSourceID, sTargetID);
                                return;
                            }
                        }
                    }
                }
                this.printf("Unable to establish connection: %s\n", sConnection);
            }
        }
    }

    /**
     * loadState(state)
     *
     * Memory and Ports states are managed by the Bus onLoad() handler, which calls our loadState() handler.
     *
     * @this {DL11}
     * @param {Array} state
     * @returns {boolean}
     */
    loadState(state)
    {
        let idDevice = state.shift();
        if (this.idDevice == idDevice) {
            this.regRBUF    = state.shift();
            this.regRCSR    = state.shift();
            this.regXCSR    = state.shift();
            this.abReceive  = state.shift();
            return true;
        }
        return false;
    }

    /**
     * saveState(state)
     *
     * Memory and Ports states are managed by the Bus onSave() handler, which calls our saveState() handler.
     *
     * @this {DL11}
     * @param {Array} state
     */
    saveState(state)
    {
        state.push(this.idDevice);
        state.push(this.regRBUF);
        state.push(this.regRCSR);
        state.push(this.regXCSR);
        state.push(this.abReceive);
    }

    /**
     * onPower(on)
     *
     * Called by the Machine device to provide notification of a power event.
     *
     * @this {DL11}
     * @param {boolean} on (true to power on, false to power off)
     */
    onPower(on)
    {
        if (!this.cpu) {
            this.cpu = /** @type {PDP11} */ (this.findDeviceByClass("CPU"));
            this.irqReceiver = this.cpu.addIRQ(this.iAdapter? -1 : PDP11.DL11.RVEC, PDP11.DL11.PRI, MESSAGE.SERIAL);
            this.irqTransmitter = this.cpu.addIRQ(this.iAdapter? -1 : PDP11.DL11.XVEC, PDP11.DL11.PRI, MESSAGE.SERIAL);
        }
    }

    /**
     * onReset()
     *
     * Called by the Machine device to provide notification of a reset event.
     *
     * @this {DL11}
     */
    onReset()
    {
        this.regRBUF = 0;
        this.regRCSR = PDP11.DL11.RCSR.CTS;
        this.regXCSR = PDP11.DL11.XCSR.READY;
        this.abReceive = [];
    }

    /**
     * getBaudTimeout(nBaud)
     *
     * Based on the selected baud rate (nBaud), convert that rate into a millisecond delay.
     *
     * @this {DL11}
     * @param {number} nBaud
     * @returns {number} (number of milliseconds per byte)
     */
    getBaudTimeout(nBaud)
    {
        /**
         * TODO: Do a better job computing this, based on actual numbers of start, stop and parity bits,
         * instead of hard-coding the total number of bits per byte to 10.
         */
        let nBytesPerSecond = Math.round(nBaud / 10);
        return 1000 / nBytesPerSecond;
    }

    /**
     * receiveByte(b)
     *
     * @this {DL11}
     * @param {number} b
     * @returns {boolean}
     */
    receiveByte(b)
    {
        this.printf(MESSAGE.SERIAL, "receiveByte(%#04x)\n", b);
        if (!this.fAutoStop) {
            this.regRBUF = b;
            if (!(this.regRCSR & PDP11.DL11.RCSR.RD)) {
                this.regRCSR |= PDP11.DL11.RCSR.RD;
            } else {
                this.regRBUF |= PDP11.DL11.RBUF.OE | PDP11.DL11.RBUF.ERROR;
            }
            if (this.regRCSR & PDP11.DL11.RCSR.RIE) {
                this.cpu.setIRQ(this.irqReceiver);
            }
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
     * @this {DL11}
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
            if (this.sDataReceived) {
                this.time.setTimer(this.timerReceiveNext, this.getBaudTimeout(this.nBaudReceive));
            }
        }
        return true;                // for now, return true regardless, since we're buffering everything anyway
    }

    /**
     * receiveStatus(pins)
     *
     * @this {DL11}
     * @param {number} pins
     */
    receiveStatus(pins)
    {
        let oldRCSR = this.regRCSR;
        this.regRCSR &= ~(PDP11.DL11.RCSR.CTS | PDP11.DL11.RCSR.CD);
        if (pins & DL11.RS232.CTS.MASK) {
            this.regRCSR |= PDP11.DL11.RCSR.CTS;
        }
        if (pins & DL11.RS232.CD.MASK) {
            this.regRCSR |= PDP11.DL11.RCSR.CD;
        }
        if (oldRCSR != this.regRCSR) {
            this.regRCSR |= PDP11.DL11.RCSR.DSC;
            if (this.regRCSR & PDP11.DL11.RCSR.DIE) {
                this.cpu.setIRQ(this.irqReceiver);
            }
        }
    }

    /**
     * setConnection(device, func)
     *
     * @this {DL11}
     * @param {Device|null} device
     * @param {function(number)} func
     * @returns {boolean}
     */
    setConnection(device, func)
    {
        if (!this.connection) {
            this.connection = device;
            this.sendData = func;
            return true;
        }
        return false;
    }

    /**
     * transmitByte(b)
     *
     * @this {DL11}
     * @param {number} b
     * @returns {boolean} true if transmitted, false if not
     */
    transmitByte(b)
    {
        let fTransmitted = false;
        this.printf(MESSAGE.SERIAL, "transmitByte(%#04x)\n", b);
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
        /**
         * NOTE: When debugging issues involving the SerialPort, such as debugging code between a pair of
         * transmitted bytes, you can pass 0 instead of getBaudTimeout() to setTimer() to minimize the amount
         * of time spent waiting for XCSR.READY to be set again.
         */
        this.cpu.setTimer(this.timerTransmitNext, this.getBaudTimeout(this.nBaudTransmit));
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
     * the DL11 is connected to another machine.  TODO: Define a separate interface for that feature.
     *
     * @this {DL11}
     * @param {string} [sData]
     * @returns {boolean} true if successful, false if not
     */
    transmitData(sData)
    {
        let success = true;
        this.regXCSR |= PDP11.DL11.XCSR.READY;
        if (this.regXCSR & PDP11.DL11.XCSR.TIE) {
            this.cpu.setIRQ(this.irqTransmitter);
        }
        if (sData) {
            success = this.sendData? this.sendData.call(this.connection, sData) : false;
        }
        return success;
    }

    /**
     * readRCSR(addr)
     *
     * @this {DL11}
     * @param {number} addr (eg, PDP11.UNIBUS.RCSR or 177560)
     * @returns {number}
     */
    readRCSR(addr)
    {
        let data = this.regRCSR & PDP11.DL11.RCSR.RMASK;
        this.regRCSR &= ~PDP11.DL11.RCSR.DSC;
        return data;
    }

    /**
     * writeRCSR(data, addr)
     *
     * @this {DL11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.RCSR or 177560)
     */
    writeRCSR(data, addr)
    {
        let delta = (data ^ this.regRCSR);
        this.regRCSR = (this.regRCSR & ~PDP11.DL11.RCSR.WMASK) | (data & PDP11.DL11.RCSR.WMASK);
        /**
         * Whenever DTR or RTS changes, we also want to notify any connected machine, via updateStatus().
         */
        if (this.updateStatus) {
            if (delta & PDP11.DL11.RCSR.RS232) {
                let pins = 0;
                if (this.fNullModem) {
                    pins |= (data & PDP11.DL11.RCSR.RTS)? DL11.RS232.CTS.MASK : 0;
                    pins |= (data & PDP11.DL11.RCSR.DTR)? (DL11.RS232.DSR.MASK | DL11.RS232.CD.MASK): 0;
                } else {
                    pins |= (data & PDP11.DL11.RCSR.RTS)? DL11.RS232.RTS.MASK : 0;
                    pins |= (data & PDP11.DL11.RCSR.DTR)? DL11.RS232.DTR.MASK : 0;
                }
                this.updateStatus.call(this.connection, pins);
            }
        }
    }

    /**
     * readRBUF(addr)
     *
     * @this {DL11}
     * @param {number} addr (eg, PDP11.UNIBUS.RBUF or 177562)
     * @returns {number}
     */
    readRBUF(addr)
    {
        this.regRCSR &= ~PDP11.DL11.RCSR.RD;
        return this.regRBUF;
    }

    /**
     * writeRBUF(data, addr)
     *
     * @this {DL11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.RBUF or 177562)
     */
    writeRBUF(data, addr)
    {
    }

    /**
     * readXCSR(addr)
     *
     * @this {DL11}
     * @param {number} addr (eg, PDP11.UNIBUS.XCSR or 177564)
     * @returns {number}
     */
    readXCSR(addr)
    {
        return this.regXCSR;
    }

    /**
     * writeXCSR(data, addr)
     *
     * @this {DL11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.XCSR or 177564)
     */
    writeXCSR(data, addr)
    {
        /**
         * If the device is READY, and TIE is being set, then request a hardware interrupt.
         *
         * Conversely, if TIE is being cleared, remove the request; this resolves a problem within
         * MAINDEC TEST 15, where the Transmitter Interrupt Enable (TIE) bit is cleared, set, and cleared
         * in rapid succession, with the expectation that NO interrupt will be generated.  Note that
         * this fix also requires a complementary change in setIRQ(), to request hardware interrupts with
         * IRQ_DELAY rather than IRQ.
         */
        if (this.regXCSR & PDP11.DL11.XCSR.READY) {
            if (data & PDP11.DL11.XCSR.TIE) {
                this.cpu.setIRQ(this.irqTransmitter);
            } else {
                this.cpu.clearIRQ(this.irqTransmitter);
            }
        }
        this.regXCSR = (this.regXCSR & ~PDP11.DL11.XCSR.WMASK) | (data & PDP11.DL11.XCSR.WMASK);
    }

    /**
     * readXBUF(addr)
     *
     * @this {DL11}
     * @param {number} addr (eg, PDP11.UNIBUS.XBUF or 177566)
     * @returns {number}
     */
    readXBUF(addr)
    {
        return 0;
    }

    /**
     * writeXBUF(data, addr)
     *
     * @this {DL11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.XBUF or 177566)
     */
    writeXBUF(data, addr)
    {
        this.transmitByte(data & PDP11.DL11.XBUF.DATA);
        this.regXCSR &= ~PDP11.DL11.XCSR.READY;
    }
}

DL11.IOTABLE = {
    [PDP11.UNIBUS.RCSR]:    /* 177560 */    [null, null, DL11.prototype.readRCSR,   DL11.prototype.writeRCSR,   "RCSR"],
    [PDP11.UNIBUS.RBUF]:    /* 177562 */    [null, null, DL11.prototype.readRBUF,   DL11.prototype.writeRBUF,   "RBUF"],
    [PDP11.UNIBUS.XCSR]:    /* 177564 */    [null, null, DL11.prototype.readXCSR,   DL11.prototype.writeXCSR,   "XCSR"],
    [PDP11.UNIBUS.XBUF]:    /* 177566 */    [null, null, DL11.prototype.readXBUF,   DL11.prototype.writeXBUF,   "XBUF"]
};

DL11.CLASSES["DL11"] = DL11;

/**
 * @copyright https://www.pcjs.org/machines/dec/pdp11/modules/v3/pc11.js (C) 2012-2025 Jeff Parsons
 */

MESSAGE.PC11            = 0x000020000000;
MESSAGE.NAMES["pc11"]   = MESSAGE.PC11;

/**
 * The PC11 component has the following configuration properties:
 *
 *      name: PC11 device name; "PTR" if not specified.
 *
 *      autoLoad: the name, if any, of a paper tape image to automatically load at startup
 *      (only the "load" operation is supported; if you want to "read" a tape image directly
 *      into RAM at startup, you must ask the RAM device to do that).
 *
 *      baudReceive: the default number of bits/second that the device should receive data at;
 *      0 means use the device default (PDP11.PC11.PRS.BAUD).
 *
 *      baudTransmit: the default number of bits/second that the device should transmit data at;
 *      0 means use the device default (PDP11.PC11.PPS.BAUD); TODO: currently ignored, since punch
 *      support isn't implemented yet.
 *
 *      library: the name, if any, of a media library containing PC11 tape images.
 *
 * @typedef {Config} PC11Config
 * @property {string} name
 * @property {Media|string} autoLoad
 * @property {number} baudReceive
 * @property {number} [baudTransmit]
 * @property {Array.<Media>|string} library
 * @property {Media|null} mediaLoaded
 */

/**
 * @class PC11
 * @unrestricted
 */
class PC11 extends Device {
    /**
     * PC11(idMachine, idDevice, config)
     *
     * @this {PC11}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        this.name = this.config['name'] || "PTR";
        this.autoLoad = this.getMachineConfig('autoLoad') || "";
        this.baudReceive = +this.config['baudReceive'] || PDP11.PC11.PRS.BAUD;
        this.library = this.config['library'] || [];
        this.mediaLoaded = null;
        /**
         * Support for local tape images is currently limited to desktop browsers with FileReader support;
         * when this flag is set, setBinding() allows local tape bindings and informs initBus() to update the
         * LIST_TAPES binding accordingly.
         */
        this.fLocalTapes = (window && 'FileReader' in window);

        this.bus = /** @type {Bus} */ (this.findDeviceByClass("Bus"));
        this.time = /** @type {Time} */ (this.findDeviceByClass("Time"));
        this.timerReader = this.time.addTimer(this.idDevice + ".reader", this.advanceReader.bind(this));
        this.input = /** @type {Input} */ (this.findDeviceByClass("Input"));

        this.fLoading = false;
        this.irqReader = null;

        this.regPRS = 0;                        // PRS register
        this.regPRB = 0;                        // PRB register
        this.regPPS = PDP11.PC11.PPS.ERROR;     // PPS register (TODO: Stop signaling error once punch is implemented)
        this.regPPB = 0;                        // PPB register
        this.iTapeData = 0;                     // buffer index
        this.aTapeData = [];                    // buffer for the PRB register
        this.sSource = PC11.SOURCE.NONE;
        this.nTarget = PC11.TARGET.NONE;
        this.nLastPercent = -1;                 // ensure the first displayProgress() displays something

        this.ports = /** @type {Ports} */ (this.findDeviceByClass("IOPage"));
        this.ports.addIOTable(this, PC11.IOTABLE);

        if (!this.getMedia(this.library, this.parseLibrary.bind(this))) {
            this.setReady(false);
        }
    }

    /**
     * addBinding(binding, element)
     *
     * v1 machines relied on setBinding(sHTMLType, sBinding, control, sValue); v2 machines use an addBinding() override.

     * @this {PC11}
     * @param {string} binding
     * @param {Element} element
     */
    addBinding(binding, element)
    {
        let pc11 = this;
        let elementInput;
        let nTarget = PC11.TARGET.NONE;

        switch (binding) {
        /**
         * "readTape" operation must do pretty much everything that the "loadTape" does, but whereas the load
         * operation records the bytes in aTapeData, the read operation stuffs them directly into the machine's memory;
         * the former sets nTarget to TARGET.READER, while the latter sets it to TARGET.MEMORY.
         */
        case "readTape":
            nTarget = PC11.TARGET.MEMORY;
            /* falls through */

        case "loadTape":
            if (!nTarget) nTarget = PC11.TARGET.READER;
            element.onclick = function onClickReadTape(event) {
                let elementTapes = pc11.bindings[PC11.BINDING.LIST_TAPES];
                if (elementTapes) {
                    let media = pc11.library[elementTapes.selectedIndex];
                    if (media) pc11.loadMedia(media, nTarget);
                }
            };
            break;

        case "mountTape":
            elementInput = /** @type {Object} */ (element);
            if (!this.fLocalTapes) {
                this.printf("Local tape support not available\n");
                /**
                 * We could also simply hide the element; eg:
                 *
                 *      elementInput.style.display = "none";
                 *
                 * but removing the element altogether seems better.
                 */
                elementInput.parentNode.removeChild(/** @type {Node} */ (elementInput));
                break;
            }

            /**
             * Enable "Mount" button only if a file is actually selected
             */
            elementInput.addEventListener('change', function() {
                let fieldset = elementInput.children[0];
                let files = fieldset.children[0].files;
                let submit = fieldset.children[1];
                submit.disabled = !files.length;
            });

            elementInput.onsubmit = function(event) {
                let file = event.currentTarget[1].files[0];
                if (file) {
                    /**
                     * TODO: Provide a way to mount tapes into MEMORY as well as READER.
                     */
                    pc11.loadMedia({"name": this.getBaseName(file.name, true), "path": file.name}, PC11.TARGET.READER, file);
                }
                /**
                 * Prevent reloading of web page after form submission
                 */
                return false;
            };
            break;
        }
        super.addBinding(binding, element);
    }

    /**
     * onSelect(event)
     *
     * @this {PC11}
     * @param {Event} event
     */
    onSelect(event)
    {
        let elementDesc = this.bindings[PC11.BINDING.DESC_TAPE];
        let elementSelect = this.bindings[PC11.BINDING.LIST_TAPES];
        let elementOption = elementSelect.options[elementSelect.selectedIndex];
        if (elementDesc && elementOption) {
            let dataValue = {};
            let sValue = elementOption.getAttribute("data-value");
            if (sValue) {
                try {
                    dataValue = eval("(" + sValue + ")");
                } catch (err) {
                    this.printf("PC11 option error: %s", err.message);
                }
            }
            let sHTML = dataValue['desc'];
            if (sHTML === undefined) sHTML = "";
            let sHRef = dataValue['href'];
            if (sHRef !== undefined) sHTML = "<a href=\"" + sHRef + "\" target=\"_blank\">" + sHTML + "</a>";
            elementDesc.innerHTML = sHTML;
        }
    }

    /**
     * loadState(state)
     *
     * Memory and Ports states are managed by the Bus onLoad() handler, which calls our loadState() handler.
     *
     * @this {PC11}
     * @param {Array} state
     * @returns {boolean}
     */
    loadState(state)
    {
        let idDevice = state.shift();
        if (this.idDevice == idDevice) {
            return true;
        }
        return false;
    }

    /**
     * saveState(state)
     *
     * Memory and Ports states are managed by the Bus onSave() handler, which calls our saveState() handler.
     *
     * @this {PC11}
     * @param {Array} state
     */
    saveState(state)
    {
        state.push(this.idDevice);
    }

    /**
     * onPower(on)
     *
     * Called by the Machine device to provide notification of a power event.
     *
     * @this {PC11}
     * @param {boolean} on (true to power on, false to power off)
     */
    onPower(on)
    {
        if (!this.cpu) {
            this.cpu = /** @type {PDP11} */ (this.findDeviceByClass("CPU"));
            this.irqReader = this.cpu.addIRQ(PDP11.PC11.RVEC, PDP11.PC11.PRI, MESSAGE.PC11);
        }
    }

    /**
     * onReset()
     *
     * Called by the Machine device to provide notification of a reset event.
     *
     * TODO: Consider making our reset() handler ALSO restore the original loaded tape, in much the same
     * way the RAM component now restores the original predefined memory or tape image after resetting the RAM.
     *
     * @this {PC11}
     */
    onReset()
    {
        this.regPRS &= ~PDP11.PC11.PRS.CLEAR;
        this.regPRB = 0;
    }

    /**
     * loadMedia(media, nTarget, file)
     *
     * @this {PC11}
     * @param {Media} media
     * @param {number} nTarget
     * @param {File} [file] is set if there's an associated File object
     * @returns {boolean} true if load completed (successfully or not), false if queued
     */
    loadMedia(media, nTarget, file)
    {
        let name = media['name'];
        let path = media['path'];

        this.printf(MESSAGE.PC11, 'load("%s","%s")\n', name, path);

        if (!path) {
            this.unloadMedia(false);
            return true;
        }

        if (path == PC11.SOURCE.LOCAL) {
            this.alert('Use "Choose File" and "Mount" to select and load a local tape.');
            return true;
        }

        /**
         * If the special PC11.SOURCE.REMOTE path is selected, then we want to prompt the user for a URL.
         * Oh, and make sure we pass an empty string as the 2nd parameter to prompt(), so that IE won't display
         * "undefined" -- because after all, undefined and "undefined" are EXACTLY the same thing, right?
         *
         * TODO: This is literally all I've done to support remote tape images. There's probably more
         * I should do, like dynamically updating LIST_TAPES to include new entries, and adding new entries
         * to the save/restore data.
         */
        if (path == PC11.SOURCE.REMOTE) {
            path = window.prompt("Enter the URL of a remote tape image.", "") || "";
            if (!path) return false;
            name = this.getBaseName(path);
            this.printf('Attempting to load %s as "%s"', path, name);
            this.sSource = PC11.SOURCE.REMOTE;
        }
        else {
            this.sSource = path;
        }

        this.nTarget = nTarget;

        if (file) {
            let pc11 = this;
            let reader = new FileReader();
            reader.onload = function doneRead() {
                pc11.finishMedia(media, reader.result);
            };
            reader.readAsArrayBuffer(file);
            return false;
        }

        if (!media['values'] && !this.getMedia(media['path'], this.parseMedia.bind(this))) {
            return false;
        }

        this.parseMedia(media);
        return true;
    }

    /**
     * finishMedia(media, buffer)
     *
     * @this {PC11}
     * @param {Media} media
     * @param {?} buffer (we KNOW this is an ArrayBuffer, but we can't seem to convince the Closure Compiler)
     */
    finishMedia(media, buffer)
    {
        if (buffer) {
            media['values'] = new Uint8Array(buffer, 0, buffer.byteLength);
            this.parseMedia(media);
            this.sSource = PC11.SOURCE.LOCAL;
        }
        this.fLoading = false;
        this.displayTape();
    }

    /**
     * displayTape()
     *
     * @this {PC11}
     */
    displayTape()
    {
        if (this.mediaLoaded) {
            let listTapes = this.bindings[PC11.BINDING.LIST_TAPES];
            if (listTapes && listTapes.options) {
                let i;
                for (i = 0; i < listTapes.options.length; i++) {
                    if (listTapes.options[i].value == this.mediaLoaded['path']) {
                        if (listTapes.selectedIndex != i) {
                            listTapes.selectedIndex = i;
                        }
                        break;
                    }
                }
                if (i == listTapes.options.length) listTapes.selectedIndex = 0;
            }
        }
    }

    /**
     * displayProgress(nPercent)
     *
     * @this {PC11}
     * @param {number} nPercent
     */
    displayProgress(nPercent)
    {
        nPercent |= 0;
        if (nPercent !== this.nLastPercent) {
            let element = this.bindings[PC11.BINDING.READ_PROGRESS];
            if (element) {
                let aElements = element.getElementsByClassName(PC11.CSSCLASS.PROGRESS_BAR);
                let progressBar = aElements && aElements[0];
                if (progressBar && progressBar.style) {
                    progressBar.style.width = nPercent + "%";
                }
            }
            this.nLastPercent = nPercent;
        }
    }

    /**
     * parseLibrary(media)
     *
     * @this {PC11}
     * @param {*} media
     */
    parseLibrary(media)
    {
        this.library = /** @type {Array.<Media>} */ (media || []);
        this.input.bindSelect(this, PC11.BINDING.LIST_TAPES, this.library, this.onSelect.bind(this));

        this.input.addSelect(this, PC11.BINDING.LIST_TAPES, "None", PC11.SOURCE.NONE, true);
        if (this.fLocalTapes) this.input.addSelect(this, PC11.BINDING.LIST_TAPES, "Local Tape", PC11.SOURCE.LOCAL);
        this.input.addSelect(this, PC11.BINDING.LIST_TAPES, "Remote Tape", PC11.SOURCE.REMOTE);
        this.setReady(true);

        /**
         * Now that the media library, if any, is loaded, look up the autoLoad media, if any.
         */
        let i = -1;
        if (this.autoLoad) {
            if (typeof this.autoLoad == "string") {
                for (i = 0; i < this.library.length; i++) {
                    let item = this.library[i];
                    if (typeof item == "object" && item['name'] == this.autoLoad) {
                        this.autoLoad = item;
                        break;
                    }
                }
                if (i == this.library.length) {
                    this.alert("Unable to find %s media: %s", this.idDevice, this.autoLoad);
                    this.autoLoad = "";
                }
            }
        }
        if (this.autoLoad) {
            /**
             * TODO: Provide a way to autoLoad tapes into MEMORY as well as READER.
             */
            if (!this.loadMedia(/** @type {Media} */ (this.autoLoad), PC11.TARGET.READER)) {
                this.setReady(false);
            }
        } else {
            /**
             * This likely happened because there was no autoLoad setting (or it was overridden with an empty value),
             * so just make sure the current selection is set to "None".
             */
            this.displayTape();
        }
    }

    /**
     * parseMedia(media)
     *
     * @this {PC11}
     * @param {*} media
     */
    parseMedia(media)
    {
        let name = media['name'];
        let aBytes = media['values'];
        let addrLoad = media['addrLoad'];
        let addrExec = media['addrExec'];

        this.mediaLoaded = media;
        this.setReady(true);

        if (this.nTarget == PC11.TARGET.MEMORY) {
            /**
             * Use parseTape() service to do our dirty work.  If the load succeeds, then depending on whether there
             * was also exec address, either the CPU will be stopped or the PC wil be reset.
             *
             * NOTE: Some tapes are not in the Absolute Loader format, so if the JSON-encoded tape resource file
             * we downloaded didn't ALSO include a load address, the load will fail.
             *
             * For example, the "Absolute Loader" tape is NOT itself in the Absolute Loader format.  You just have
             * to know that in order to load that tape, you must first load the appropriate "Bootstrap Loader" (which
             * DOES include its own hard-coded load address), load the "Absolute Loader" tape, and then run the
             * "Bootstrap Loader".
             */
            if (!this.parseTape(aBytes, addrLoad, addrExec, null, false)) {
                /**
                 * This doesn't seem to serve any purpose, other than to be annoying, because perhaps you accidentally
                 * clicked "Read" instead of "Load"....
                 *
                 *      this.mediaLoaded = null;
                 *      this.sSource = PC11.SOURCE.NONE;
                 *      this.nTarget = PC11.TARGET.NONE;
                 */
                this.alert('No valid memory address for tape "%s"', name);
                return;
            }
            this.printf('Read tape "%s"', name);
            return;
        }

        this.iTapeData = 0;
        this.aTapeData = aBytes;
        this.regPRS &= ~PDP11.PC11.PRS.ERROR;

        this.printf('Loaded tape "%s" (%d bytes)', name, aBytes.length);
        this.displayProgress(0);
    }

    /**
     * parseTape(aBytes, addrLoad, addrExec, addrInit, fStart)
     *
     * If the array contains a PAPER tape image in the "Absolute Format," load it as specified
     * by the format; otherwise, load it as-is using the address(es) supplied.
     *
     * @this {PC11}
     * @param {Array|Uint8Array} aBytes
     * @param {number|null} [addrLoad]
     * @param {number|null} [addrExec] (this CAN override any starting address INSIDE the image)
     * @param {number|null} [addrInit]
     * @param {boolean} [fStart]
     * @returns {boolean} (true if loaded, false if not)
     */
    parseTape(aBytes, addrLoad, addrExec, addrInit, fStart)
    {
        let fStop = false;
        let fLoaded = false;
        /**
         * Data on tapes in the "Absolute Format" is organized into blocks; each block begins with
         * a 6-byte header:
         *
         *      2-byte signature (0x0001)
         *      2-byte block length (N + 6, because it includes the 6-byte header)
         *      2-byte load address
         *
         * followed by N data bytes.  If N is zero, then the 2-byte load address is the exec address,
         * unless the address is odd (usually 1).  DEC's Absolute Loader jumps to the exec address
         * in former case, halts in the latter.
         *
         * All values are stored "little endian" (low byte followed by high byte), just like the
         * PDP-11's memory architecture.
         *
         * After the data bytes, there is a single checksum byte.  The 8-bit sum of all the bytes in
         * the block (including the header bytes and checksum byte) should be zero.
         *
         * ANOMALIES: Tape files don't always begin with a signature word, so I allow any number of
         * leading zeros before the first signature.  Tape files don't always end cleanly either, so as
         * soon as I see an invalid signature, I break out of the loop without signalling an error, as
         * long as at least ONE block was successfully processed.  In fact, it's possible that as
         * soon as a block with ZERO data bytes is encountered, processing is supposed to stop, but
         * I haven't examined enough tapes (or the Absolute Loader code) to know for sure.
         */
        if (addrLoad == null) {
            let off = 0, fError = false;
            while (off < aBytes.length - 1) {
                let w = (aBytes[off] & 0xff) | ((aBytes[off+1] & 0xff) << 8);
                if (!w) {           // ignore pairs of leading zeros
                    off += 2;
                    continue;
                }
                if (!(w & 0xff)) {  // as well as single bytes of zero
                    off++;
                    continue;
                }
                let offBlock = off;
                if (w != 0x0001) {
                    this.printf(MESSAGE.PC11, "invalid signature (%#06x) at offset %#06x\n", w, offBlock);
                    break;
                }
                if (off + 6 >= aBytes.length) {
                    this.printf(MESSAGE.PC11, "invalid block at offset %#06x\n", offBlock);
                    break;
                }
                off += 2;
                let checksum = w;
                let len = (aBytes[off++] & 0xff) | ((aBytes[off++] & 0xff) << 8);
                let addr = (aBytes[off++] & 0xff) | ((aBytes[off++] & 0xff) << 8);
                checksum += (len & 0xff) + (len >> 8) + (addr & 0xff) + (addr >> 8);
                let offData = off, cbData = len -= 6;
                while (len > 0 && off < aBytes.length) {
                    checksum += aBytes[off++] & 0xff;
                    len--;
                }
                if (len != 0 || off >= aBytes.length) {
                    this.printf(MESSAGE.PC11, "insufficient data for block at offset %#06x\n", offBlock);
                    break;
                }
                checksum += aBytes[off++] & 0xff;
                if (checksum & 0xff) {
                    this.printf(MESSAGE.PC11, "invalid checksum (%#04x) for block at offset %#06x\n", checksum, offBlock);
                    break;
                }
                if (!cbData) {
                    if (addr & 0x1) {
                        fStop = true;
                    } else {
                        if (addrExec == null) addrExec = addr;
                    }
                    if (addrExec != null) this.printf(MESSAGE.PC11, "starting address: %#06x\n", addrExec);
                } else {
                    this.printf(MESSAGE.PC11, "loading %#06x bytes at %#06x-%#06x\n", cbData, addr, addr + cbData);
                    while (cbData--) {
                        this.bus.writeDirect(addr++, aBytes[offData++] & 0xff);
                    }
                }
                fLoaded = true;
            }
        }
        if (!fLoaded) {
            if (addrLoad == null) addrLoad = addrInit;
            if (addrLoad != null) {
                for (let i = 0; i < aBytes.length; i++) {
                    this.bus.writeDirect(addrLoad + i, aBytes[i]);
                }
                fLoaded = true;
            }
        }
        if (fLoaded) {
            /**
             * Set the start address to whatever the caller provided, or failing that, whatever start
             * address was specified inside the image.
             *
             * For example, the diagnostic "MAINDEC-11-D0AA-PB" doesn't include a start address inside the
             * image, but we know that the directions for that diagnostic say to "Start and Restart at 200",
             * so we have manually inserted an "exec":128 in the JSON containing the image.
             */
            if (addrExec == null || fStop) {
                this.time.stop();
                fStart = false;
            }
            if (addrExec != null) {
                this.cpu.setReset(addrExec, fStart);
            }
        }
        return fLoaded;
    }

    /**
     * unloadMedia(fLoading)
     *
     * @this {PC11}
     * @param {boolean} [fLoading]
     */
    unloadMedia(fLoading)
    {
        if (this.mediaLoaded || fLoading === false) {
            this.mediaLoaded = null;
            /**
             * Avoid any unnecessary hysteresis regarding the display if this unload is merely a prelude to another load.
             */
            if (!fLoading) {
                if (this.nTarget) this.printf(this.nTarget == PC11.TARGET.READER? "tape detached" : "tape unloaded");
                this.sSource = PC11.SOURCE.NONE;
                this.nTarget = PC11.TARGET.NONE;
                this.displayTape();
            }
        }
    }

    /**
     * getBaudTimeout(nBaud)
     *
     * Based on the selected baud rate (nBaud), convert that rate into a millisecond delay.
     *
     * @this {PC11}
     * @param {number} nBaud
     * @returns {number} (number of milliseconds per byte)
     */
    getBaudTimeout(nBaud)
    {
        /**
         * TODO: Do a better job computing this, based on actual numbers of start, stop and parity bits,
         * instead of hard-coding the total number of bits per byte to 10.
         */
        let nBytesPerSecond = Math.round(nBaud / 10);
        return 1000 / nBytesPerSecond;
    }

    /**
     * advanceReader()
     *
     * If the reader is enabled (RE is set) and there is no exceptional condition (ie, ERROR is set),
     * and if the buffer register is empty (DONE is clear), then if we have more data in our internal buffer,
     * store it in the buffer register, and optionally trigger an interrupt if device interrupts are enabled.
     *
     * @this {PC11}
     */
    advanceReader()
    {
        if ((this.regPRS & (PDP11.PC11.PRS.RE | PDP11.PC11.PRS.ERROR)) == PDP11.PC11.PRS.RE) {
            if (!(this.regPRS & PDP11.PC11.PRS.DONE)) {
                if (this.iTapeData < this.aTapeData.length) {
                    /**
                     * Here, as elsewhere (eg, the DL11 component), even if I trusted all incoming data
                     * to be byte values (which I don't), there's also the risk that it could be signed data
                     * (eg, -128 to 127, instead of 0 to 255).  Both risks are good reasons to always mask
                     * the data assigned to PRB with 0xff.
                     */
                    this.regPRB = this.aTapeData[this.iTapeData] & 0xff;
                    this.printf(MESSAGE.PC11, "%s.advanceReader(%d): %#02x\n", this.idDevice, this.iTapeData, this.regPRB);
                    this.iTapeData++;
                    this.displayProgress(this.iTapeData / this.aTapeData.length * 100);
                }
                else {
                    this.regPRS |= PDP11.PC11.PRS.ERROR;
                }
                this.regPRS |= PDP11.PC11.PRS.DONE;
                this.regPRS &= ~PDP11.PC11.PRS.BUSY;
                if (this.regPRS & PDP11.PC11.PRS.IE) {
                    this.cpu.setIRQ(this.irqReader);
                }
            }
        }
    }

    /**
     * readPRS(addr)
     *
     * NOTE: We use the PRS RMASK to honor the "write-only" behavior of bit 0, the reader enable bit (RE), because
     * DEC's tiny Bootstrap Loader (/software/dec/pdp11/boot/bootstrap/BOOTSTRAP-16KB.lst) repeatedly enables the reader using
     * the INC instruction, which causes the PRS to be read, incremented, and written, so if bit 0 isn't always read
     * as zero, the INC instruction would clear RE instead of setting it.
     *
     * @this {PC11}
     * @param {number} addr (eg, PDP11.UNIBUS.PRS or 177550)
     * @returns {number}
     */
    readPRS(addr)
    {
        return this.regPRS & PDP11.PC11.PRS.RMASK;     // RMASK honors the "write-only" nature of the RE bit by returning zero on reads
    }

    /**
     * writePRS(data, addr)
     *
     * @this {PC11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.PRS or 177550)
     */
    writePRS(data, addr)
    {
        if (data & PDP11.PC11.PRS.RE) {
            /**
             * From the 1976 Peripherals Handbook, p. 4-378:
             *
             *      Set [RE] to allow the Reader to fetch one character. The setting of this bit clears Done,
             *      sets Busy, and clears the Reader Buffer (PRB). Operation of this bit is disabled if Error = 1;
             *      attempting to set it when Error = 1 will cause an immediate interrupt if Interrupt Enable = 1.
             */
            if (this.regPRS & PDP11.PC11.PRS.ERROR) {
                data &= ~PDP11.PC11.PRS.RE;
                if (this.regPRS & PDP11.PC11.PRS.IE) {
                    this.cpu.setIRQ(this.irqReader);
                }
            } else {
                this.regPRS &= ~PDP11.PC11.PRS.DONE;
                this.regPRS |= PDP11.PC11.PRS.BUSY;
                this.regPRB = 0;
                /**
                 * The PC11, by virtue of its "high speed", is supposed to deliver characters at 300 CPS, so
                 * that's the rate we'll choose as well (ie, 1000ms / 300).  As an aside, the original "low speed"
                 * version of the reader ran at 10 CPS.
                 */
                this.time.setTimer(this.timerReader, this.getBaudTimeout(this.baudReceive));
            }
        }
        this.regPRS = (this.regPRS & ~PDP11.PC11.PRS.WMASK) | (data & PDP11.PC11.PRS.WMASK);
    }

    /**
     * readPRB(addr)
     *
     * @this {PC11}
     * @param {number} addr (eg, PDP11.UNIBUS.PRB or 177552)
     * @returns {number}
     */
    readPRB(addr)
    {
        /**
         * I'm guessing that the DONE and BUSY bits always remain more-or-less inverses of each other.  They definitely
         * start out that way when writePRS() sets the reader enable (RE) bit, and so that's how we treat them elsewhere, too.
         */
        this.regPRS &= ~PDP11.PC11.PRS.DONE;
        this.regPRS |= PDP11.PC11.PRS.BUSY;
        return this.regPRB;
    }

    /**
     * writePRB(data, addr)
     *
     * @this {PC11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.PRB or 177552)
     */
    writePRB(data, addr)
    {
    }

    /**
     * readPPS(addr)
     *
     * @this {PC11}
     * @param {number} addr (eg, PDP11.UNIBUS.PPS or 177554)
     * @returns {number}
     */
    readPPS(addr)
    {
        return this.regPPS;
    }

    /**
     * writePPS(data, addr)
     *
     * NOTE: This was originally added ONLY because when RT-11 v4.0 copies from device "PC:" (the paper tape reader),
     * it executes the following code:
     *
     *      016010: 005037 177550          CLR   @#177550               ;history=2 PRS
     *      016014: 005037 177554          CLR   @#177554               ;history=1
     *
     * and as you can see, without this PPS handler, a TRAP to 4 would normally occur.  I guess since we claim to be
     * a PC11, that makes sense.  But what about PDP-11 machines with only a PR11 (ie, a reader-only unit)?
     *
     * @this {PC11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.PPS or 177554)
     */
    writePPS(data, addr)
    {
        this.regPPS = (this.regPPS & ~PDP11.PC11.PPS.WMASK) | (data & PDP11.PC11.PPS.WMASK);
    }

    /**
     * readPPB(addr)
     *
     * @this {PC11}
     * @param {number} addr (eg, PDP11.UNIBUS.PPB or 177556)
     * @returns {number}
     */
    readPPB(addr)
    {
        return this.regPPB;
    }

    /**
     * writePPB(data, addr)
     *
     * @this {PC11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.PPB or 177556)
     */
    writePPB(data, addr)
    {
        this.regPPB = (data & PDP11.PC11.PPB.MASK);
    }
}

/**
 * There's nothing super special about these values, except that NONE should be falsey and the others should not.
 */
PC11.SOURCE = {
    NONE:   "",
    LOCAL:  "?",
    REMOTE: "??"
};

PC11.TARGET = {
    NONE:   0,
    READER: 1,
    MEMORY: 2
};

PC11.BINDING = {
    LIST_TAPES:     "listTapes",
    DESC_TAPE:      "descTape",
    READ_PROGRESS:  "readProgress"
};

PC11.CSSCLASS = {
    PROGRESS_BAR:   "progressBar"
};

PC11.IOTABLE = {
    [PDP11.UNIBUS.PRS]:     /* 177550 */    [null, null, PC11.prototype.readPRS,    PC11.prototype.writePRS,    "PRS"],
    [PDP11.UNIBUS.PRB]:     /* 177552 */    [null, null, PC11.prototype.readPRB,    PC11.prototype.writePRB,    "PRB"],
    [PDP11.UNIBUS.PPS]:     /* 177554 */    [null, null, PC11.prototype.readPPS,    PC11.prototype.writePPS,    "PPS"],
    [PDP11.UNIBUS.PPB]:     /* 177556 */    [null, null, PC11.prototype.readPPB,    PC11.prototype.writePPB,    "PPB"]
};

PC11.CLASSES["PC11"] = PC11;

/**
 * @copyright https://www.pcjs.org/machines/modules/v3/machine.js (C) 2012-2025 Jeff Parsons
 */

/**
 * @class Machine
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
            this.printf("machine '%s' initialization error: %s\n", this.idMachine, sError);
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
