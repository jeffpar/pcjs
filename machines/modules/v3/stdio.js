/**
 * @fileoverview Class with stdio-like functions
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import StdLib from "./stdlib.js";
import Format from "../v2/format.js";

/**
 * @class StdIO
 */
export default class StdIO extends StdLib {
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
