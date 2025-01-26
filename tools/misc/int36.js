#!/usr/bin/env node
/**
 * @fileoverview Test the Int36 class
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import repl from "repl";
import Int36 from "../../machines/modules/v2/int36.js";
import { DEBUG } from "../../machines/modules/v2/defines.js";

var i36Reg = new Int36();

/**
 * dumpInt36(i36)
 *
 * @param {Int36} i36
 * @returns {string}
 */
function dumpInt36(i36)
{
    return i36.toString() + " [" + i36.toString(8, true) + "]";
}

/**
 * test(sCmd, fREPL)
 *
 * @param {string} sCmd
 * @param {boolean} [fREPL]
 * @returns {*}
 */
function test(sCmd, fREPL)
{
    var aTokens = sCmd.split(' ');

    var sOp = aTokens[0];
    var sNum1 = aTokens[1] && aTokens[1].replace(/,/g, '');
    var sNum2 = aTokens[2];
    if (!sNum2) {
        sNum2 = sNum1;
        sNum1 = undefined;
    }

    var i36Op = new Int36(+sNum2, +sNum1);

    if (sNum2 != null) console.log(sOp + " " + dumpInt36(i36Op));

    switch(sOp) {
    case "get":
        break;

    case "set":
        i36Reg = new Int36(i36Op);
        break;

    case "ext":
        i36Reg.extend(i36Op);
        break;

    case "red":
        i36Reg.reduce(i36Op);
        break;

    case "add":
        i36Reg.add(i36Op);
        break;

    case "sub":
        i36Reg.sub(i36Op);
        break;

    case "mul":
        i36Reg.mul(i36Op);
        break;

    case "div":
        i36Reg.div(i36Op);
        break;

    case "ash":
        i36Reg.ash(i36Op);
        break;

    case "lsh":
        i36Reg.lsh(i36Op);
        break;

    case "rot":
        i36Reg.rot(i36Op);
        break;

    default:
        console.log("unrecognized command: " + sCmd);
        return false;
    }

    console.log("  = " + dumpInt36(i36Reg));

    return true;
}

/**
 * onCommand(cmd, context, filename, callback)
 *
 * @param {string} cmd
 * @param {Object} context
 * @param {string} filename
 * @param {function(Object|null, Object)} callback
 */
var onCommand = function (cmd, context, filename, callback)
{
    var result = false;
    var match = cmd.match(/^\(?\s*([\S\s]*?)\s*\)?$/);
    if (match && match[1]) result = test(match[1], true);
    callback(null, result);
};

test("set -34,359,738,368");
test("sub 1");
test("add 1");
test("add 0");

for (let i = 0; i <= 12; i++) {
    test("set 34,000,000,000");
    test("mul " + Math.pow(8, i));
}

for (let i = 0; i <= 12; i++) {
    test("set -34,000,000,000");
    test("mul " + Math.pow(8, i));
}

test("set 100");
test("div 3");

test("set 4001");
test("div -5");

test("set 0o037777777777 0o777777777777");
test("set 0o047777777777 0o777777777777");
test("set 0o057777777777 0o777777777777");
test("set 0o067777777777 0o777777777777");
test("set 0o077777777777 0o777777777777");
test("set 0o177777777777 0o777777777777");
test("set 0o277777777777 0o777777777777");
test("set 0o377777777777 0o777777777777");
test("set 0o477777777777 0o777777777777");
test("set 0o577777777777 0o777777777777");
test("set 0o677777777777 0o777777777777");
test("set 0o777777777777 0o777777777777");

test("set 0o112233445566");
test("lsh 3");
test("lsh -3");
test("rot 6");
test("rot -6");
test("set 0o112233445566 0o123456123456");
test("rot 18");
test("ash -3");

test("set 0o377777777777 0o377777777777");
test("ash 0");      // this is a no-op, but it's useful for setting the magnitude to 70-bit
for (let i = 0; i <= 70; i++) {
    test("ash -1");
}
test("set 0 1");
for (let i = 0; i <= 70; i++) {
    test("ash 1");
}

repl.start({
    prompt: "int36> ",
    input: process.stdin,
    output: process.stdout,
    eval: onCommand
});
