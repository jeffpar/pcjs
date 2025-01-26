#!/usr/bin/env node
/**
 * @fileoverview Test the sprintf() function
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
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

/**
 * main()
 */
function main()
{
    let i64 = 0x12345678abcd;
    printf(" 0x12345678abcd = %d\n", i64);
    printf(" 0x12345678abcd = %#010x\n", i64);

    i64 = -i64;
    printf("-0x12345678abcd = %d\n", i64);
    printf("-0x12345678abcd = %#010x\n", i64);

    let n = 0x1234;
    printf(" 0x1234 = '%d' '%6d' '%-6d' '%06d' '%6.3d' '%6.9d'\n", n);
    printf(" 0x1234 = '%#01x' '%#02x' '%#03x' '%#04x'\n", n);
    printf(" 0x1234 = '%#07x' '0x%07x' '%#7x' '0x%7x'\n", n);

    n = -n;
    printf("-0x1234 = %d\n", n);
    printf("-0x1234 = %#010x\n", n);

    n = 3;
    printf("3       = %d %6d %6.3d\n", n);

    let f = 3.14159;
    printf("3.14159 = %8.2f %.3f\n", f);
}

main();

repl.start({
    prompt: "printf> ",
    input: process.stdin,
    output: process.stdout,
    eval: onCommand
});
