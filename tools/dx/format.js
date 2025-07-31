/**
 * @fileoverview Common formatting functions (eg, sprintf)
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * Adapted from https://www.pcjs.org/machines/modules/v2/format.js
 */

/**
 * Define the Formatter function type for addFormatType().
 *
 * @typedef {Function} Formatter
 * @param {string} type
 * @param {string} flags
 * @param {number} width
 * @param {number} precision
 * @param {*} arg
 * @returns {string}
 */

/**
 * @class Format
 * @property {Object.<string,(Formatter|null)>}>} formatters
 */
export default class Format {

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
            date = new Date(Date.UTC(...args));
        }
        return date;
    }

    /**
     * parseArgs(args, options)
     *
     * Any argument value preceded by a double-hyphen or long-dash switch (eg, "--option value") is
     * saved in argv with the switch as the key (eg, argv["option"] == "value").
     *
     * @param {Array.<string>} args
     * @param {object} [options]
     * @returns {Array} [argc, argv, errors]
     */
    static parseArgs(args, options = {})
    {
        let i = 1, j;
        let keys = Object.keys(options);
        let argc = 0, argv = [], errors = [];
        //
        // Do some validation on the options table first (eg, make sure all aliases are unique).
        //
        let usedAliases = {};
        for (j = 0; j < keys.length; j++) {
            let option = options[keys[j]];
            let aliases = option.alias || [];
            if (typeof aliases == "string") {
                aliases = [aliases];
            }
            for (let alias of aliases) {
                if (usedAliases[alias]) {
                    errors.push(`Duplicate alias: ${alias} (see options --${keys[j]} and --${usedAliases[alias]})`);
                }
                usedAliases[alias] = keys[j];
            }
        }
        let match = args[i].match(/([^/]*$)/);
        if (match) {
            args[i] = match[1];
        }
        argv.push(args.slice(i++).join(' '));
        //
        // NOTE: The following code is handy for passing a series of arguments via one argument
        // (eg, from a VSCode launch configuration); however, because it can break command-line parsing,
        // it's performed only if that one and only argument begins with a dash (eg, "-").
        //
        if (args.length == i + 1 && args[i][0] == '-') {
            //
            // Sanitize all the argument(s), by checking each arg for spaces outside of double quotes and
            // splitting those args into sub args, and then checking every arg for beginning and ending quotes
            // and removing them.
            //
            for (j = i; j < args.length; j++) {
                let arg = args[j];
                let inQuotes = false;
                for (let k = 0; k < arg.length; k++) {
                    let ch = arg.charAt(k);
                    if (ch == '"') {
                        inQuotes = !inQuotes;
                    } else if (ch == ' ' && !inQuotes) {
                        args[j] = arg.slice(0, k);
                        args.splice(j + 1, 0, arg.slice(k + 1));
                        break;
                    }
                }
            }
            for (j = i; j < args.length; j++) {
                args[j] = args[j].replace(/^(["'])?(.*?)(\1?)$/, "$2");
            }
        }
        //
        // Function to handle commonalities between single and double-dash options.
        //
        let setArg = function(arg, value, input) {
            let option = options[arg];
            if (value === undefined) {
                errors.push(`Missing value for option: ${input}`);
                return false;
            }
            if (option.type == "number") {
                if (isNaN(+value)) {
                    errors.push(`Invalid number (${value}) for option: ${input}`);
                    return false;
                }
                value = +value;
            }
            if (option.multiple) {
                if (!Array.isArray(argv[arg])) {
                    argv[arg] = [];
                }
                argv[arg].push(value);
            } else {
                argv[arg] = value;
            }
            return true;
        };
        //
        // Process the args against the options table and build the argv table.
        //
        while (i < args.length) {
            let arg = args[i++], sep;
            if (arg.indexOf(sep = "--") == 0 || arg.indexOf(sep = "—") == 0 || arg.indexOf(sep = "-") == 0) {
                arg = arg.slice(sep.length);
                //
                // If the separator is a single dash, then we need to loop over each character
                // in the argument, looking for an option containing the given character as an alias,
                // and process the option accordingly.
                //
                if (sep == "-") {
                    for (j = 0; j < arg.length;) {
                        let ch = arg.charAt(j++);
                        if (ch == " ") {
                            break;
                        }
                        let k = keys.findIndex(key => options[key].alias && options[key].alias.indexOf("-" + ch) >= 0);
                        if (k < 0) {
                            errors.push(`Unknown option: ${sep}${ch}`);
                            continue;
                        }
                        let value;
                        let option = options[keys[k]];
                        if (option.type == "boolean") {
                            value = true;
                        }
                        else {
                            if (j < arg.length) {
                                value = arg.slice(j).trim();
                                arg = "";
                            } else {
                                value = args[i++];
                            }
                        }
                        if (!setArg(keys[k], value, sep + ch)) {
                            break;
                        }
                    }
                    continue;
                }
                //
                // The separator must be a double-dash...
                //
                let value;
                j = arg.indexOf(" ");
                if (j < 0) {
                    j = arg.indexOf("=");
                }
                if (j > 0) {
                    value = arg.slice(j + 1).trim();
                    arg = arg.slice(0, j);
                }
                let option = options[arg];
                if (!option) {
                    errors.push(`Unknown option: ${sep}${arg}`);
                    continue;
                }
                if (option.type == "boolean") {
                    if (value) {
                        args.splice(i, 0, value);
                    }
                    value = true;
                } else {
                    if (!value) {
                        value = args[i];
                        if (!value || value[0] == "-") {
                            errors.push(`Missing value for option: ${sep}${arg}`);
                            continue;
                        }
                        i++;
                    }
                }
                setArg(arg, value, sep + arg);
                continue;
            }
            argv.push(arg);
        }
        //
        // Now determine if all required options have been provided.
        //
        for (j = 0; j < keys.length; j++) {
            let option = options[keys[j]];
            if (option.required && argv[keys[j]] === undefined) {
                errors.push(`Missing required option: --${keys[j]}`);
            }
        }
        argc = argv.length;
        return [argc, argv, errors];
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
                    /**
                     * If you pass a number where a string is expected, we assume you're trying to pluralize
                     * something.
                     */
                    if (typeof arg == "number") {
                        if (arg == 1) {
                            arg = '';
                        } else {
                            arg = 's';
                        }
                    }
                    else {
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
                    /**
                     * We default to '?' if isNaN(); since we always call Math.trunc() for integer args, if the original
                     * arg was undefined, or a string containing a non-number, or anything else that couldn't be converted
                     * to a number, the resulting arg should be NaN.
                     */
                    if (!Number.isNaN(arg)) {
                        d = arg & (radix - 1);
                        /**
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
