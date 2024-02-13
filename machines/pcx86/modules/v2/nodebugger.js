/**
 * @fileoverview PCx86 Global Definitions for Debugger-less configurations
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import { globals } from "./defines.js";

/**
 * WARNING: DEBUGGER needs to accurately reflect whether or not the Debugger component is (or will be) loaded.
 * In the compiled case, we rely on the Closure Compiler to override DEBUGGER as appropriate.  When it's *false*,
 * nearly all of debugger.js will be conditionally removed by the compiler, reducing it to little more than a
 * "type skeleton", which also solves some type-related warnings we would otherwise have if we tried to remove
 * debugger.js from the compilation process altogether.
 *
 * However, when we're in "development mode" and running uncompiled code in debugger-less configurations,
 * I would still like to skip loading debugger.js altogether.  To do that, we must arrange for this additional file,
 * nodebugger.js, to be loaded immediately after defines.js, explicitly overriding the previously defined value
 * of DEBUGGER with *false*.
 *
 * Additionally, we must update any globals that depend on DEBUGGER (currently, BACKTRACK and SYMBOLS).
 *
 * NOTE: Unlike the runtime tweaks of globals in /machines/pcx86/modules/v2/defines.js and /machines/modules/v2/weblib.js
 * (see the calls to WebLib.getURLParm()), we *could* modify those globals directly, because this file is not compiled by the
 * Closure Compiler (it is dynamically added to pages by the Node web server only as needed); however, in order to avoid
 * linting errors, we again use the "window" syntax.
 */

globals.window['DEBUGGER'] = globals.window['BACKTRACK'] = globals.window['SYMBOLS'] = false;
