/**
 * @fileoverview PCjs Global Definitions
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

/**
 * @define {string}
 */
const APPVERSION = "2.xx";              // this @define is overridden with the version in machines.json

/**
 * COMPILED is false by default; overridden with true in the Closure Compiler release.
 *
 * @define {boolean}
 */
const COMPILED = false;                 // this @define is overridden by the Closure Compiler

/**
 * @define {string}
 */
const COPYRIGHT = "Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>";

/**
 * @define {string}
 */
const CSSCLASS = "pcjs";

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
 * WARNING: DEBUGGER needs to accurately reflect whether or not the Debugger component is (or will be) loaded.
 * In the compiled case, we rely on the Closure Compiler to override DEBUGGER as appropriate.  When it's *false*,
 * nearly all of debugger.js will be conditionally removed by the compiler, reducing it to little more than a
 * "type skeleton", which also solves some type-related warnings we would otherwise have if we tried to remove
 * debugger.js from the compilation process altogether.
 *
 * However, when we're in "development mode" and running uncompiled code in debugger-less configurations,
 * I would like to skip loading debugger.js altogether.  When doing that, we must ALSO arrange for an additional file
 * (nodebugger.js) to be loaded immediately after this file, which *explicitly* overrides DEBUGGER with *false*.
 *
 * @define {boolean}
 */
var DEBUGGER = true;

/**
 * @define {string}
 */
const LICENSE = "License: MIT <https://www.pcjs.org/LICENSE.txt>";

/**
 * MAXDEBUG can be set to true to enable MAXDEBUG-only code (ie, hyper-aggressive DEBUG checks that should only be
 * enabled in special cases); it always overridden with false in the Closure Compiler release.
 *
 * @define {boolean}
 */
const MAXDEBUG = false;

/**
 * PRIVATE can be set to true to enable PRIVATE-only code (ie, code that should never be enabled in a public release);
 * it always overridden with false in the Closure Compiler release.
 *
 * @define {boolean}
 */
const PRIVATE = false;

/*
 * RS-232 DB-25 Pin Definitions, mapped to bits 1-25 in a 32-bit status value.
 *
 * SerialPorts in PCjs machines are considered DTE (Data Terminal Equipment), which means they should be "virtually"
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

/**
 * SITEURL is the URL of the web server; it is replaced by the Closure Compiler (eg, "https://www.pcjs.org")
 *
 * @define {string}
 */
const SITEURL = "http://localhost:8088";

/**
 * LOCALDISKS is intended to reflect the webserver's operating mode.  Normally, we assume that all web
 * resources should be accessed remotely, but if the webserver is running in "developer" mode, then the
 * webserver should indicate that fact by setting the global variable 'LOCALDISKS' to true on any pages
 * with embedded machines.
 *
 * @define {boolean}
 */
var LOCALDISKS = false;

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

globals.window['LOCALDISKS'] = LOCALDISKS;

export { APPVERSION, COMPILED, COPYRIGHT, CSSCLASS, DEBUG, DEBUGGER, LICENSE, LOCALDISKS, MAXDEBUG, PRIVATE, RS232, SITEURL, globals };
