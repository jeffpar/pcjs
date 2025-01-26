/**
 * @fileoverview PCx80 compile-time definitions
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import { APPVERSION, COMPILED, COPYRIGHT, CSSCLASS, DEBUG, DEBUGGER, LICENSE, MAXDEBUG, PRIVATE, RS232, SITEURL, globals } from "../../../modules/v2/defines.js";

/**
 * @define {string}
 */
const APPCLASS = "pcx80";          // this @define is the default application class (eg, "pcx86", "c1p")

/**
 * @define {string}
 */
const APPNAME = "PCx80";          // this @define is the default application name (eg, "PCx86", "C1Pjs")

/**
 * @define {boolean}
 *
 * BYTEARRAYS is a Closure Compiler compile-time option that allocates an Array of numbers for every Memory block,
 * where each a number represents ONE byte; very wasteful, but potentially slightly faster.
 *
 * See the Memory component for details.
 */
const BYTEARRAYS = false;

/**
 * TYPEDARRAYS enables use of typed arrays for Memory blocks.  This used to be a compile-time-only option, but I've
 * added Memory access functions for typed arrays (see MemoryX80.afnTypedArray), so support can be enabled dynamically now.
 *
 * See the Memory component for details.
 */
const TYPEDARRAYS = true; // (typeof ArrayBuffer !== 'undefined');

export { APPCLASS, APPNAME, APPVERSION, BYTEARRAYS, COMPILED, COPYRIGHT, CSSCLASS, DEBUG, DEBUGGER, LICENSE, MAXDEBUG, PRIVATE, RS232, SITEURL, TYPEDARRAYS, globals };
