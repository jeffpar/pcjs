/**
 * @fileoverview PCx86 Global Definitions
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import WebLib from "../../../modules/v2/weblib.js";
import { APPVERSION, COMPILED, COPYRIGHT, CSSCLASS, DEBUG, DEBUGGER, LICENSE, MAXDEBUG, PRIVATE, RS232, SITEURL, globals } from "../../../modules/v2/defines.js";

/**
 * @define {string}
 */
const APPCLASS = "pcx86";               // this @define is the default application class (eg, "pcx86", "c1pjs")

/**
 * @define {string}
 */
const APPNAME = "PCx86";                // this @define is the default application name (eg, "PCx86", "C1Pjs")

/**
 * BACKTRACK enables backtracking: a mechanism that allows us to tag every byte of incoming data and follow the
 * flow of that data.
 *
 * It is enabled only if DEBUG is set (implying an un-COMPILED build) and the DEBUGGER is enabled (since it's
 * really only of use to someone using the built-in debugger).
 *
 * TODO: BACKTRACK support may need to be disabled until we have a chance to investigate the problem discussed in
 * Bus.addBackTrackObject(); BACKTRACK support also needs to be updated for the 80386 at some point.
 *
 * @define {boolean}
 */
var BACKTRACK = /* DEBUG && DEBUGGER */ false;

/**
 * BUGS_8086 enables support for known 8086 bugs.  It's turned off by default, because 1) it adds overhead, and
 * 2) it's hard to imagine any software actually being dependent on any of the bugs covered by this (eg, the failure
 * to inhibit hardware interrupts following SS segment loads).
 *
 * This does NOT enable what must be regarded as 8086 "features", such as failing to properly restart string
 * instructions with multiple prefixes after a hardware interrupt, which we simulate regardless, because some software
 * (eg, Central Point Software's PC Tools) uses that to differentiate processors (eg, the Intel 8088 from the NEC V20).
 *
 * @define {boolean}
 */
const BUGS_8086 = false;

/**
 * BYTEARRAYS is a Closure Compiler compile-time option that allocates an Array of numbers for every Memory block,
 * where each a number represents ONE byte; very wasteful, but potentially slightly faster.
 *
 * See the Memory component for details.
 *
 * @define {boolean}
 */
const BYTEARRAYS = false;

/**
 * I386 enables 80386 support.  My preference continues to be one "binary" that supports all implemented CPUs, but
 * I'm providing this to enable a slimmed-down binary, at least until 80386 support is actually finished; at the
 * moment, there's just a lot of scaffolding that bloats the compiled version without adding any real functionality.
 *
 * @define {boolean}
 */
const I386 = true;

/**
 * DESKPRO386 enables COMPAQ DeskPro 386 support.  Requires I386 support as well (duh).
 *
 * @define {boolean}
 */
const DESKPRO386 = I386;

/**
 * PAGEBLOCKS enables 80386 paging support with assistance from the Bus component.  This affects how the Bus component
 * defines physical memory parameters for a 32-bit bus.  With the 8086 and 80286 processors, the Bus component was free
 * to choose any block size for physical memory allocations that made sense for the bus width (eg, 4Kb blocks for a
 * 20-bit bus, or 16Kb blocks for a 24-bit bus).
 *
 * However, for the 80386 processor, it makes more sense to choose a block size that matches the page size (ie, 4Kb),
 * because then we have the option of altering the address-to-memory mapping for any block to match whatever page table
 * mapping is in effect for that address, if any, without requiring another layer of address translation.
 *
 * @define {boolean}
 */
const PAGEBLOCKS = I386;

/**
 * PREFETCH enables the use of a prefetch queue.  As of v1.20.0, PREFETCH support has been updated and retested,
 * but as currently implemented, it does not yield as much improvement as I'd hoped when paging is enabled, so PREFETCH
 * is still off by default.
 *
 * @define {boolean}
 */
const PREFETCH = false;

/**
 * SYMBOLS enables automatic symbol generation from known DLL, EXE and VXD file formats.  It's currently
 * enabled whenever DEBUGGER support is enabled.
 *
 * @define {boolean}
 */
var SYMBOLS = DEBUGGER;

/**
 * TYPEDARRAYS enables use of typed arrays for Memory blocks.  This used to be a compile-time-only option, but I've
 * added Memory access functions for typed arrays (see Memoryx86.afnTypedArray), so support can be enabled dynamically now.
 *
 * See the Memory component for details.
 *
 * @define {boolean}
 */
const TYPEDARRAYS = true; // (typeof ArrayBuffer !== 'undefined');

/**
 * If this is DEBUG (eg, un-COMPILED) code, then allow the user to override BACKTRACK with a "backtrack=false" embedded in
 * the URL; note that the Closure Compiler won't let us alter the BACKTRACK variable, because it's defined as a @define, which
 * implies @const as well, so we must resort to modifying it indirectly, using the global window object.
 *
 * TODO: Consider yet another embedXXX() parameter that would also allow BACKTRACK to be turned off on a page-by-page basis.
 *
 * Deal with WebLib.getURLParm("debug") in /machines/modules/v2/weblib.js at the same time.
 */

if (DEBUG) {
    let backTrack = WebLib.getURLParm("backtrack");
    if (backTrack == "false") {
        globals.window['BACKTRACK'] = false;
    }
}

export { APPCLASS, APPNAME, APPVERSION, BACKTRACK, BUGS_8086, BYTEARRAYS, COMPILED, COPYRIGHT, CSSCLASS, DEBUG, DEBUGGER, DESKPRO386, I386, LICENSE, MAXDEBUG, PAGEBLOCKS, PREFETCH, PRIVATE, RS232, SITEURL, SYMBOLS, TYPEDARRAYS, globals };
