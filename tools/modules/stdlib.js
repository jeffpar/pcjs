/**
 * @fileoverview Standard library functions
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2020 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

export default class StdLib {
    /**
     * getArgs()
     *
     * Processes command-line arguments.  Arguments may be introduced by either
     * a double-hyphen (--) or a long dash (—), and argument values, if any, may
     * either be separated by an "=" without any intervening whitespace or as the
     * next argument.  Arguments without an explicit value default to false, and
     * any argument appearing more than once is automatically converted to an Array.
     *
     * Single-hyphen (-) arguments are allowed as well; they are treated as a series
     * of single-character arguments, each set to true, and any of these arguments
     * appearing more than once is discarded.
     *
     * @returns {{argc:number, argv:{}}}
     */
    static getArgs()
    {
        let argc = 0;
        let argv = {};
        argv[argc++] = process.argv[1];
        let i = 2;
        while (i < process.argv.length) {
            let j, sSep;
            let sArg = process.argv[i++];
            argv[argc++] = sArg;
            if (!sArg.indexOf(sSep = "--") || !sArg.indexOf(sSep = "—")) {
                sArg = sArg.substr(sSep.length);
                let sValue = false;
                j = sArg.indexOf("=");
                if (j > 0) {
                    sValue = sArg.substr(j + 1);
                    sArg = sArg.substr(0, j);
                    sValue = (sValue == "true") ? true : ((sValue == "false") ? false : sValue);
                }
                else if (i < process.argv.length) {
                    argv[argc++] = sValue = process.argv[i++];
                }
                if (argv[sArg] === undefined) {
                    argv[sArg] = sValue;
                }
                else {
                    if (typeof argv[sArg] == "string") {
                        argv[sArg] = [argv[sArg]];
                    }
                    argv[sArg].push(sValue);
                }
            }
            else if (!sArg.indexOf("-")) {
                for (j = 1; j < sArg.length; j++) {
                    let ch = sArg.charAt(j);
                    if (argv[ch] === undefined) {
                        argv[ch] = true;
                    }
                }
            }
        }
        return {argc: argc, argv: argv};
    }
}

StdLib.args = StdLib.getArgs();
