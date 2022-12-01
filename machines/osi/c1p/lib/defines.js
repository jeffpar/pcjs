/**
 * @fileoverview C1Pjs-specific compile-time definitions
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

"use strict";

/**
 * @define {string}
 */
var APPCLASS = "c1p";           // this @define is the default application class (eg, "pcx86", "c1p")

/**
 * @define {string}
 */
var APPNAME = "C1Pjs";          // this @define is the default application name (eg, "PCx86", "C1Pjs")

/**
 * @define {boolean}
 *
 * WARNING: DEBUGGER needs to accurately reflect whether or not the Debugger component is (or will be) loaded.
 * In the compiled case, we rely on the Closure Compiler to override DEBUGGER as appropriate.  When it's *false*,
 * nearly all of debugger.js will be conditionally removed by the compiler, reducing it to little more than a
 * "type skeleton", which also solves some type-related warnings we would otherwise have if we tried to remove
 * debugger.js from the compilation process altogether.
 *
 * However, when we're in "development mode" and running uncompiled code in debugger-less configurations,
 * I would like to skip loading debugger.js altogether.  When doing that, we must ALSO arrange for an additional file
 * (nodebugger.js) to be loaded immediately after this file, which *explicitly* overrides DEBUGGER with *false*.
 */
var DEBUGGER = true;            // this @define is overridden by the Closure Compiler to remove Debugger-related support

/*
 * Combine all the shared globals and machine-specific globals into one machine-specific global object,
 * which all machine components should start using; eg: "if (C1PJS.DEBUG) ..." instead of "if (DEBUG) ...".
 */
var C1PJS = {
    APPCLASS:    APPCLASS,
    APPNAME:     APPNAME,
    APPVERSION:  APPVERSION,    // shared
    COMPILED:    COMPILED,      // shared
    CSSCLASS:    CSSCLASS,      // shared
    DEBUG:       DEBUG,         // shared
    DEBUGGER:    DEBUGGER,
    MAXDEBUG:    MAXDEBUG,      // shared
    PRIVATE:     PRIVATE,       // shared
    SITEURL:     SITEURL        // shared
};
