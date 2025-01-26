/**
 * @fileoverview C1Pjs-specific compile-time definitions
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import { APPVERSION, COMPILED, COPYRIGHT, CSSCLASS, DEBUG, DEBUGGER, LICENSE, MAXDEBUG, PRIVATE, RS232, SITEURL, globals } from "../../../../modules/v2/defines.js";

/**
 * @define {string}
 */
const APPCLASS = "c1p";         // this @define is the default application class (eg, "pcx86", "c1p")

/**
 * @define {string}
 */
const APPNAME = "C1Pjs";        // this @define is the default application name (eg, "PCx86", "C1Pjs")

export { APPCLASS, APPNAME, APPVERSION, COMPILED, COPYRIGHT, CSSCLASS, DEBUG, DEBUGGER, LICENSE, MAXDEBUG, PRIVATE, RS232, SITEURL, globals };
