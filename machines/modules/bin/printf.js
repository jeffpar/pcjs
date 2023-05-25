#!/usr/bin/env node
/**
 * @fileoverview Test the sprintf() function
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

"use strict";

import repl from "repl";
import Str from "../v2/strlib.js";

/**
 * printf(format, ...args)
 *
 * @param {string} format
 * @param {...} args
 * @returns {boolean}
 */
function printf(format, ...args)
{
    console.log("printf(" + format + "): \"" + Str.sprintf(format, ...args) + "\"");
    return true;
}

/**
 * onCommand(cmd, context, filename, callback)
 *
 * @param {string} cmd
 * @param {Object} context
 * @param {string} filename
 * @param {function(Object|null, Object)} [callback]
 */
var onCommand = function (cmd, context, filename, callback)
{
    var result = false;
    var args = cmd.trim().split(',');
    result = printf(...args);
    if (callback) callback(null, result);
};

let t = 3;
let n = 0x1234;
let pi = 3.14159;
printf("%8.2f %.3f", pi);
printf("%d %6d %6.3d", t);
printf("'%d' '%6d' '%6.3d' '%6.9d'", n);

repl.start({
    prompt: "printf> ",
    input: process.stdin,
    output: process.stdout,
    eval: onCommand
});
