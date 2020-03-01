/**
 * @fileoverview Process-related helper functions
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2020 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

"use strict";

class Proc {
    /**
     * getArgs()
     *
     * Processes command-line arguments.  Arguments may be introduced by either
     * a double-hyphen (--) or a long dash (—), and argument values, if any, must be
     * separated by an "=" without any intervening whitespace.  Arguments without
     * an explicit value default to true, and any argument appearing more than once
     * is automatically converted to an Array.
     *
     * Single-hyphen (-) arguments are allowed as well; they are treated as a series
     * of single-character arguments, each set to true, and any of these arguments
     * appearing more than once is discarded.
     *
     * @return {{argc:number, argv:{}}}
     */
    static getArgs()
    {
        let argc = 0;
        let argv = {};
        argv[argc++] = process.argv[1];
        for (let i = 2; i < process.argv.length; i++) {
            let j, sSep;
            let sArg = process.argv[i];
            argv[argc++] = sArg;
            if (!sArg.indexOf(sSep = "--") || !sArg.indexOf(sSep = "—")) {
                sArg = sArg.substr(sSep.length);
                let sValue = true;
                j = sArg.indexOf("=");
                if (j > 0) {
                    sValue = sArg.substr(j + 1);
                    sArg = sArg.substr(0, j);
                    sValue = (sValue == "true") ? true : ((sValue == "false") ? false : sValue);
                }
                if (argv[sArg] === undefined) {
                    argc++;
                    argv[sArg] = sValue;
                } else {
                    // console.log("too many '" + sArg + "' arguments");
                    if (typeof argv[sArg] == "string") {
                        argv[sArg] = [argv[sArg]];
                    }
                    argv[sArg].push(sValue);
                }
            } else if (!sArg.indexOf("-")) {
                for (j = 1; j < sArg.length; j++) {
                    let ch = sArg.charAt(j);
                    if (argv[ch] === undefined) {
                        argv[ch] = true;
                        argc++;
                    }
                }
            }
        }
        return {argc: argc, argv: argv};
    }
}

if (typeof module !== "undefined") module.exports = Proc;
