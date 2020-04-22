/**
 * @fileoverview Standard library functions
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2020 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import StdIO from "../../machines/modules/stdio.js";

export default class StdLib {
    /**
     * StdLib()
     *
     * @this {StdLib}
     */
    constructor()
    {
        this.argc = 0;
        this.argv = {};
        this.stdio = new StdIO();
        this.argv[this.argc++] = process.argv[1];
        let i = 2;
        while (i < process.argv.length) {
            let j, sSep;
            let sArg = process.argv[i++];
            this.argv[this.argc++] = sArg;
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
                    this.argv[this.argc++] = sValue = process.argv[i++];
                }
                if (this.argv[sArg] === undefined) {
                    this.argv[sArg] = sValue;
                }
                else {
                    if (typeof this.argv[sArg] == "string") {
                        this.argv[sArg] = [this.argv[sArg]];
                    }
                    this.argv[sArg].push(sValue);
                }
            }
            else if (!sArg.indexOf("-")) {
                for (j = 1; j < sArg.length; j++) {
                    let ch = sArg.charAt(j);
                    if (this.argv[ch] === undefined) {
                        this.argv[ch] = true;
                    }
                }
            }
        }
    }

    /**
     * getArgs()
     *
     * @this {StdLib}
     * @returns {{argc:number, argv:{}}}
     */
    getArgs()
    {
        return {argc: this.argc, argv: this.argv};
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
