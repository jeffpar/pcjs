/**
 * @fileoverview Provides printf() and sprintf() functionality for Node apps
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import strlib from "./strlib.js";

let sprintf = strlib.sprintf;

/**
 * printf(format, ...args)
 *
 * @param {string} format
 * @param {...} args
 */
export default function printf(format, ...args)
{
    process.stdout.write(sprintf(format, ...args));
}

export { printf, sprintf };
