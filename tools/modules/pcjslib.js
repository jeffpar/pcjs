/**
 * @fileoverview Standard library functions
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

/**
 * @class PCJSLib
 */
export default class PCJSLib
{
    static argc = 0;
    static argv = [];

    /**
     * getArgs(s)
     *
     * @param {string|object} [s]
     * @returns {Array} [argc, argv]
     */
    static getArgs(s)
    {
        if (s) {
            if (typeof s == "string") {
                let args = s.split(' ');
                return PCJSLib.parseArgs(args, 0);
            }
            /*
             * If a map of option aliases is provided, then we copy any aliased options as needed.
             */
            for (let arg in s) {
                if (s.hasOwnProperty(arg)) {
                    if (PCJSLib.argv[arg] !== undefined && PCJSLib.argv[s[arg]] === undefined) {
                        PCJSLib.argv[s[arg]] = PCJSLib.argv[arg];
                    }
                }
            }
        }
        return [PCJSLib.argc, PCJSLib.argv];
    }

    /**
     * parseArgs(args, i)
     *
     * Any argument value preceded by a double-hyphen or long-dash switch (eg, "--option value") is
     * saved in argv with the switch as the key (eg, argv["option"] == "value").
     *
     * If there are multiple arguments preceded by the same double-hyphen switch, then the argv entry
     * becomes an array (eg, argv["option"] == ["value1","value2"]).
     *
     * If a double-hyphen switch is followed by another switch (or by nothing, if it's the last argument),
     * then the value of the switch will be a boolean instead of a string (eg, argv["option"] == true).
     *
     * Single-hyphen switches are different: every character following a single hyphen is transformed into
     * a boolean value (eg, "-abc" produces argv["a"] == true, argv["b"] == true, and argv["c"] == true).
     *
     * Only arguments NOT preceded by (or part of) a switch are pushed onto the argv array; they can be
     * accessed as argv[i], argv[i+1], etc.
     *
     * In addition, when the initial i >= 1, then argv[0] is set to the concatenation of all args, starting
     * with args[i], and the first non-switch argument begins at argv[1].
     *
     * Finally, since argv is an Array, it has a built-in 'length' property, so if you also need to specify
     * a "--length" argument, we must precede the key with a '#' (ie, '#length') to avoid a conflict.
     *
     * @param {Array.<string>} [args]
     * @param {number} [i] (default is 1, because if you're passing process.argv, process.argv[0] is useless)
     * @returns {Array} [argc, argv]
     */
    static parseArgs(args, i = 1)
    {
        let argc = 0;
        let argv = [];
        let lastOp = "";
        if (i) argv.push(args.slice(i++).join(' '));
        while (i < args.length) {
            let j, sSep;
            let sArg = args[i++];
            if (!sArg.indexOf(sSep = "--") || !sArg.indexOf(sSep = "—")) {
                sArg = sArg.substr(sSep.length);
                let sValue = true;
                j = sArg.indexOf("=");
                if (j > 0) {
                    sValue = sArg.substr(j + 1);
                    sArg = sArg.substr(0, j);
                    sValue = (sValue == "true") ? true : ((sValue == "false") ? false : sValue);
                }
                if (typeof sValue == "string") {
                    let quoteMatch = sValue.match(/^(["'])(.*)\1$/);
                    if (quoteMatch) {
                        sValue = quoteMatch[2];
                    }
                }
                if (typeof argv[sArg] == "number") {
                    sArg = '#' + sArg;      // avoid conflict with the built-in 'length' property
                }
                lastOp = (j < 0? sArg : "");
                if (!argv.hasOwnProperty(sArg)) {
                    argv[sArg] = sValue;
                    continue;
                }
                if (typeof sValue == "boolean") {
                    continue;
                }
                if (!Array.isArray(argv[sArg])) {
                    argv[sArg] = [argv[sArg]];
                }
                argv[sArg].push(sValue);
                continue;
            }
            if (!sArg.indexOf("-")) {
                for (j = 1; j < sArg.length; j++) {
                    let ch = sArg.charAt(j);
                    if (argv[ch] === undefined) {
                        argv[ch] = true;
                    }
                }
                continue;
            }
            if (lastOp) {
                if (typeof argv[lastOp] == "boolean") {
                    argv[lastOp] = sArg;
                }
                else {
                    if (!Array.isArray(argv[lastOp])) {
                        argv[lastOp] = [argv[lastOp]];
                    }
                    argv[lastOp].push(sArg);
                }
                lastOp = "";
            }
            argv.push(sArg);
        }
        argc = argv.length;
        return [argc, argv];
    }
}

[PCJSLib.argc, PCJSLib.argv] = PCJSLib.parseArgs(process.argv);
