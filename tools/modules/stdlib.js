/**
 * @fileoverview Standard library functions
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2020 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import StdIO from "../../machines/modules/stdio.js";

/**
 * @class StdLib
 * @property {number} argc
 * @property {Array.<string>} argv
 */
export default class StdLib {
    /**
     * StdLib()
     *
     * @this {StdLib}
     */
    constructor()
    {
        this.stdio = new StdIO();
        [this.argc, this.argv] = this.parseArgs(process.argv);
    }

    /**
     * getArgs(s)
     *
     * @this {StdLib}
     * @param {string} [s]
     * @returns {Array} [argc, argv]
     */
    getArgs(s)
    {
        if (s) {
            let args = s.split(' ');
            return this.parseArgs(args, 0);
        }
        return [this.argc, this.argv];
    }

    /**
     * parseArgs(args)
     *
     * Any argument prefaced with "--option" is saved in the argv array with key "option".
     * If there are multiple "option" arguments, the argv entry becomes an array.  Only arguments
     * not prefaced with "--option" are pushed onto the argv array; those arguments can only be
     * and can be accessed with numeric keys.
     *
     * @this {StdLib}
     * @param {Array.<string>} [args]
     * @param {number} [start]
     * @returns {Array} [argc, argv]
     */
    parseArgs(args, start = 1)
    {
        let argc = 0;
        let argv = [];
        if (start) argv.push(args[start++]);
        let i = start;
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
                else if (i < args.length && args[i][0] != '-') {
                    sValue = args[i++];
                }
                if (!argv.hasOwnProperty(sArg)) {
                    argv[sArg] = sValue;
                }
                else {
                    if (!Array.isArray(argv[sArg])) {
                        argv[sArg] = [argv[sArg]];
                    }
                    argv[sArg].push(sValue);
                }
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
            argv.push(sArg);
        }
        argc = argv.length;
        return [argc, argv];
    }

    /**
     * printf(format, ...args)
     *
     * @this {StdLib}
     * @param {string} format
     * @param {...} args
     */
    printf(format, ...args)
    {
        process.stdout.write(this.stdio.sprintf(format, ...args));
    }
}
