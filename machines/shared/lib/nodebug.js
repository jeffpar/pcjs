/**
 * @fileoverview Compile-time definitions for non-DEBUG configurations
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2020 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

"use strict";

/*
 * In the compiled case, we rely on the Closure Compiler to override DEBUG, setting it to false,
 * so that all DEBUG-only code will be removed by the compiler.
 *
 * However, when we're in "development mode" and want to run uncompiled code without any DEBUG-only
 * code, we must arrange for this additional file (nodebug.js) to be loaded immediately after defines.js,
 * which will then set DEBUG to false at runtime.
 */
DEBUG = false;
