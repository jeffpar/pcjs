#!/usr/bin/env node
/**
 * @fileoverview Test the sprintf() function
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import repl from "repl";
import { printf } from "../../machines/modules/v2/printf.js";

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
    args[0] = args[0].trim() + "\n";
    result = printf(...args);
    if (callback) callback(null, result);
};

let t = 3;
let n = 0x1234;
let pi = 3.14159;
printf("%8.2f %.3f\n", pi);
printf("%d %6d %6.3d\n", t);
printf("'%d' '%6d' '%6.3d' '%6.9d'\n", n);

repl.start({
    prompt: "printf> ",
    input: process.stdin,
    output: process.stdout,
    eval: onCommand
});
