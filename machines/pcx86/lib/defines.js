/**
 * @fileoverview PCx86-specific compile-time definitions
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

"use strict";

if (typeof module !== "undefined") {
    var Web         = require("../../shared/lib/weblib");
}

/**
 * @define {string}
 */
var APPCLASS = "pcx86";         // this @define is the default application class (eg, "pcx86", "c1pjs")

/**
 * @define {string}
 */
var APPNAME = "PCx86";          // this @define is the default application name (eg, "PCx86", "C1Pjs")

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

/**
 * @define {boolean}
 *
 * PREFETCH enables the use of a prefetch queue.  As of v1.20.0, PREFETCH support has been updated and retested,
 * but as currently implemented, it does not yield as much improvement as I'd hoped when paging is enabled, so PREFETCH
 * is still off by default.
 */
var PREFETCH = false;

/**
 * @define {boolean}
 *
 * BYTEARRAYS is a Closure Compiler compile-time option that allocates an Array of numbers for every Memory block,
 * where each a number represents ONE byte; very wasteful, but potentially slightly faster.
 *
 * See the Memory component for details.
 */
var BYTEARRAYS = false;

/**
 * TYPEDARRAYS enables use of typed arrays for Memory blocks.  This used to be a compile-time-only option, but I've
 * added Memory access functions for typed arrays (see MemoryX86.afnTypedArray), so support can be enabled dynamically now.
 *
 * See the Memory component for details.
 */
var TYPEDARRAYS = (typeof ArrayBuffer !== 'undefined');

/**
 * @define {boolean}
 *
 * BACKTRACK enables backtracking: a mechanism that allows us to tag every byte of incoming data and follow the
 * flow of that data.
 *
 * It is enabled only if DEBUG is set (implying an un-COMPILED build) and the DEBUGGER is enabled (since it's
 * really only of use to someone using the built-in debugger).
 *
 * TODO: BACKTRACK support may need to be disabled until we have a chance to investigate the problem discussed in
 * Bus.addBackTrackObject(); BACKTRACK support also needs to be updated for the 80386 at some point.
 */
var BACKTRACK = DEBUG && DEBUGGER;

/**
 * @define {boolean}
 *
 * SYMBOLS enables automatic symbol generation from known DLL, EXE and VXD file formats.  It's currently
 * enabled whenever DEBUGGER support is enabled.
 */
var SYMBOLS = DEBUGGER;

/**
 * @define {boolean}
 *
 * BUGS_8086 enables support for known 8086 bugs.  It's turned off by default, because 1) it adds overhead, and
 * 2) it's hard to imagine any software actually being dependent on any of the bugs covered by this (eg, the failure
 * to inhibit hardware interrupts following SS segment loads).
 *
 * This does NOT enable what must be regarded as 8086 "features", such as failing to properly restart string
 * instructions with multiple prefixes after a hardware interrupt, which we simulate regardless, because some software
 * (eg, Central Point Software's PC Tools) uses that to differentiate processors (eg, the Intel 8088 from the NEC V20).
 */
var BUGS_8086 = false;

/**
 * @define {boolean}
 *
 * I386 enables 80386 support.  My preference continues to be one "binary" that supports all implemented CPUs, but
 * I'm providing this to enable a slimmed-down binary, at least until 80386 support is actually finished; at the
 * moment, there's just a lot of scaffolding that bloats the compiled version without adding any real functionality.
 */
var I386 = true;

/**
 * @define {boolean}
 *
 * DESKPRO386 enables COMPAQ DeskPro 386 support.  Requires I386 support as well (duh).
 */
var DESKPRO386 = I386;

/**
 * @define {boolean}
 *
 * PAGEBLOCKS enables 80386 paging support with assistance from the Bus component.  This affects how the Bus component
 * defines physical memory parameters for a 32-bit bus.  With the 8086 and 80286 processors, the Bus component was free
 * to choose any block size for physical memory allocations that made sense for the bus width (eg, 4Kb blocks for a
 * 20-bit bus, or 16Kb blocks for a 24-bit bus).
 *
 * However, for the 80386 processor, it makes more sense to choose a block size that matches the page size (ie, 4Kb),
 * because then we have the option of altering the address-to-memory mapping for any block to match whatever page table
 * mapping is in effect for that address, if any, without requiring another layer of address translation.
 */
var PAGEBLOCKS = I386;

/*
 * If this is DEBUG (eg, un-COMPILED) code, then allow the user to override BACKTRACK with a "backtrack=false" embedded in
 * the URL; note that the Closure Compiler won't let us alter the BACKTRACK variable, because it's defined as a @define, which
 * implies @const as well, so we must resort to modifying it indirectly, using the global window object.
 *
 * TODO: Consider yet another embedXXX() parameter that would also allow BACKTRACK to be turned off on a page-by-page basis.
 *
 * Deal with Web.getURLParm("debug") in /modules/shared/lib/weblib.js at the same time.
 */
if (DEBUG && window) {
    let sBackTrack = Web.getURLParm("backtrack");
    if (sBackTrack == "false") {
        window['BACKTRACK'] = false;
    }
}

/*
 * Combine all the shared globals and machine-specific globals into one machine-specific global object,
 * which all machine components should start using; eg: "if (PCx86.DEBUG) ..." instead of "if (DEBUG) ...".
 */
var PCx86 = {
    APPCLASS:    APPCLASS,
    APPNAME:     APPNAME,
    APPVERSION:  APPVERSION,    // shared
    BACKTRACK:   BACKTRACK,
    BUGS_8086:   BUGS_8086,
    BYTEARRAYS:  BYTEARRAYS,
    COMPILED:    COMPILED,      // shared
    CSSCLASS:    CSSCLASS,      // shared
    DEBUG:       DEBUG,         // shared
    DEBUGGER:    DEBUGGER,
    DESKPRO386:  DESKPRO386,
    I386:        I386,
    MAXDEBUG:    MAXDEBUG,      // shared
    PAGEBLOCKS:  PAGEBLOCKS,
    PREFETCH:    PREFETCH,
    PRIVATE:     PRIVATE,       // shared
    TYPEDARRAYS: TYPEDARRAYS,
    SITEURL:     SITEURL,       // shared
    SYMBOLS:     SYMBOLS
};

if (typeof module !== "undefined") {
    global.APPCLASS    = APPCLASS;
    global.APPNAME     = APPNAME;
    global.DEBUGGER    = DEBUGGER;
    global.PREFETCH    = PREFETCH;
    global.BYTEARRAYS  = BYTEARRAYS;
    global.TYPEDARRAYS = TYPEDARRAYS;
    global.BACKTRACK   = BACKTRACK;
    global.SYMBOLS     = SYMBOLS;
    global.BUGS_8086   = BUGS_8086;
    global.I386        = I386;
    global.DESKPRO386  = DESKPRO386;
    global.PAGEBLOCKS  = PAGEBLOCKS;
    global.PCx86       = PCx86;

    module.exports = PCx86;
}
