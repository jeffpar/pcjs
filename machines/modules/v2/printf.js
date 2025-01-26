/**
 * @fileoverview Provides platform-independent printf() and sprintf() functionality
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import strlib from "./strlib.js";
import { globals } from "./defines.js";

let sprintf = strlib.sprintf;

/**
 * printf(format, ...args)
 *
 * @param {string} format
 * @param {...} args
 */
export default function printf(format, ...args)
{
    if (globals.process.stdout) {
        process.stdout.write(sprintf(format, ...args));
    } else {
        console.log(sprintf(format, ...args));
    }
}

export { printf, sprintf };
