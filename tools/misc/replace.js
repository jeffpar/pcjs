#!/usr/bin/env node
/**
 * @fileoverview PCjs command-line string replacement tool
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs         from "fs";
import PCJSLib    from "../modules/pcjslib.js";
import Device     from "../../machines/modules/v3/device.js";

let device = new Device("node");
let printf = device.printf.bind(device);
let sprintf = device.sprintf.bind(device);

/**
 * getArg(s, delimiter)
 *
 * Returns the first delimiter-separated argument from the given string, along with the remainder of the string.
 *
 * @param {string} s
 * @param {string} delimiter
 * @returns {Array}
 */
function getArg(s, delimiter)
{
    let r = "";
    let inStr = "", inEsc = false, inParens = 0;
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        if (inEsc) {
            inEsc = false;
            continue;
        }
        if (ch == '\\') {
            inEsc = true;
            continue;
        }
        if (ch == '"' || ch == "'") {
            if (!inStr) {
                inStr = ch;
            } else if (inStr == ch) {
                inStr = "";
            }
            continue;
        }
        if (!inStr) {
            if (ch == '(') {
                inParens++;
                continue;
            }
            if (ch == ')') {
                inParens--;
                continue;
            }
        }
        if (!inStr && !inParens && ch == delimiter) {
            r = s.slice(i+1);
            s = s.slice(0, i);
            break;
        }
    }
    return [s.trim(), r.trim()];
}

/**
 * splitArgs(s, delimiter)
 *
 * Calls getArg() until the entire string is exhausted, and then returns the results in an array.
 *
 * @param {string} s
 * @param {string} delimiter
 * @returns {Array}
 */
function splitArgs(s, delimiter)
{
    let args = [];
    if (delimiter == '+') {
        s = s.replace(/\+\+/g, "__");
    }
    while (s) {
        let [arg, r] = getArg(s, delimiter);
        args.push(arg.replace(/__/g, "++"));
        s = r;
    }
    return args;
}

/**
 * replaceArgs(sArgs)
 *
 * @param {string} sArgs
 * @returns {Array} [sFormat, sList]
 */
function replaceArgs(sArgs)
{
    let sFormat = "", sList = "";
    let aArgs = splitArgs(sArgs, '+');
    let addArg = function(fmt, arg) {
        sFormat += fmt;
        if (sList) sList += ", ";
        sList += arg;
    };
    for (let j = 0; j < aArgs.length; j++) {
        let arg = aArgs[j];
        if (arg[0] == '"' && arg[arg.length-1] == '"' || arg[0] == "'" && arg[arg.length-1] == "'") {
            sFormat += arg.slice(1, -1).replace(/"/g, '\\"');
        } else {
            let fmt = "", warning = false;
            if ((arg.match(/^([A-Za-z]+\.|)(a|ch|s|as)[^a-z]?/) ||
                arg.startsWith("String.") || arg.indexOf(".toStr") > 0 ||
                arg.indexOf(".pad") > 0 || arg.indexOf(".toHexAddr") > 0 || arg.indexOf("erCase()") > 0 ||
                arg.indexOf(".join") > 0 || arg.indexOf(".getSpeedTarget") > 0 || arg.indexOf(".model") > 0) && !arg.endsWith(".length")) {
                fmt = "%s";
            }
            else if (arg.match(/^([A-Za-z]+\.|)(c|i|ms|n)[^a-z]?/) ||
                     arg.match(/\s(-|\+)\s/) || arg.indexOf("getCycles") > 0 ||
                     arg.startsWith("Math.") || arg.endsWith(".length") || arg.startsWith("percent") ||
                     arg.indexOf("Disk.SECTOR") >= 0) {
                fmt = "%d";
            }
            else if (arg.match(/^date/)) {
                fmt = "%T";
            }
            else if (arg.match(/['"]/)) {
                fmt = "%s";
            } else {
                let funMatch = arg.match(/^Str\.(toOct|toHex)(Byte|Word|Long|)\((.*)\)$/);
                if (funMatch) {
                    fmt = funMatch[1] == "toOct"? "%o" : "%x";
                    let funArgs = splitArgs(funMatch[3], ',');
                    arg = funArgs[0];
                    if (funArgs[1]) {
                        let prefix = "";
                        let digits = +funArgs[1];
                        if (isNaN(digits)) {
                            digits = "*";
                            arg = funArgs[1] + ", " + arg;
                        }
                        if (funArgs[2] == "true") {
                            prefix = "#";
                            digits += 2;
                        }
                        fmt = fmt[0] + prefix + '0' + digits + fmt[1];
                    } else if (funMatch[2]) {
                        let digits = funMatch[2] == "Byte"? 2 : (funMatch[2] == "Word"? 4 : 8);
                        fmt = fmt[0] + "#" + '0' + (digits + 2) + fmt[1];
                    }
                }
            }
            if (!fmt) {
                fmt = "%s";
                warning = true;
            }
            if (warning) {
                printf("warning: unknown argument type for %s, assuming %s\n", arg, fmt);
            }
            addArg(fmt, arg);
        }
    }
    return [sFormat, sList];
}

const PRINTLN_TYPES = {
    "Component.PRINT.PROGRESS": "Messages.PROGRESS",
};

/**
 * replaceText(sText, sType, verbose)
 *
 * @param {string} sText
 * @param {string} sType
 * @param {boolean} [verbose]
 * @returns {string} (updated text)
 */
function replaceText(sText, sType, verbose)
{
    let sTextNew = "";
    let iTextLast = 0;
    if (sType == "notice") {
        let matches = sText.matchAll(/\.notice\((.*?)\);/g);
        for (let match of matches) {
            let sNew = match[0];
            if (match[1]) {
                /*
                 * Technically (albeit infrequently), notice() can specify a "print only" flag for the second argument
                 * and an ID for the third argument.
                 */
                let args = splitArgs(match[1], ',');
                let [sFormat, sList] = replaceArgs(args[0]);
                if (sFormat) {
                    sFormat = "\"" + sFormat + "\\n\"";
                    for (let i = 1; i < args.length; i++) {
                        printf("unsupported notice args[%d]: %s\n", i, args[i]);
                    }
                    sNew = ".printf(Messages.NOTICE, " + sFormat + (sList? ", " + sList : "") + ");";
                    if (verbose) {
                        printf("replacing '%s'\n     with '%s\n\n", match[0], sNew);
                    }
                } else {
                    printf("unable to replace: '%s'\n", match[0]);
                }
            }
            sTextNew += sText.slice(iTextLast, match.index);
            sTextNew += sNew;
            iTextLast = match.index + match[0].length;
        }
        sTextNew += sText.slice(iTextLast);
    }
    else if (sType == "println") {
        let matches = sText.matchAll(/\.println\((.*?)\);/g);
        for (let match of matches) {
            let sNew = match[0];
            if (match[1]) {
                /*
                 * Technically (albeit infrequently), println() can specify a message type for the second argument
                 * and an ID for the third argument.
                 */
                let args = splitArgs(match[1], ',');
                let [sFormat, sList] = replaceArgs(args[0]);
                if (sFormat) {
                    sFormat = "\"" + sFormat + "\\n\"";
                    if (args[1]) {
                        let sType = PRINTLN_TYPES[args[1]];
                        if (sType) {
                            sFormat = sType + ", " + sFormat;
                        } else {
                            printf("unrecognized println type: %s\n", args[1]);
                        }
                    }
                    if (args[2]) {
                        printf("unsupported println ID: %s\n", args[2]);
                    }
                    if (args[3]) {
                        printf("unsupported println argument(s): %s\n", args[3]);
                    }
                    sNew = ".printf(" + sFormat + (sList? ", " + sList : "") + ");";
                    if (verbose) {
                        printf("replacing '%s'\n     with '%s\n\n", match[0], sNew);
                    }
                } else {
                    printf("unable to replace: '%s'\n", match[0]);
                }
            }
            sTextNew += sText.slice(iTextLast, match.index);
            sTextNew += sNew;
            iTextLast = match.index + match[0].length;
        }
        sTextNew += sText.slice(iTextLast);
    }
    else if (sType == "printMessage") {
        /*
         * Example:
         *
         *      if (irq.message && this.messageEnabled(irq.message | MessagesPDP10.INT)) {
         *          this.printMessage("clearIRQ(vector=" + Str.toOct(irq.vector) + ",priority=" + irq.priority + ")", true, true);
         *      }
         *
         * Result:
         *
         *      if (irq.message) {
         *          this.printf(irq.message + MessagesPDP10.INT + MessagesPDP10.ADDRESS, "clearIRQ(vector=%o,priority=%d\n", irq.vector, irq.priority);
         *      }
         *
         * Notes: We can eliminate the first "true" parameter because it's just signalling that messageEnabled() was already
         * called, and we can eliminate the second "true" parameter by adding MessagePDP10.ADDRESS to the message number.
         */
        let matches = sText.matchAll(/if \((.*? && |)\S+?\.messageEnabled\((.*?)\)\)\s*(\{\s*|)(\S+?)\.printMessage\((.*?)\);(\s*\}|)/g);
        for (let match of matches) {
            let sNew = match[0];
            let args = splitArgs(match[5], ',');
            let [sFormat, sList] = replaceArgs(args[0]);
            let sMessages = match[2].replace(/\s*\|\s*/g, " + ");
            let messageMatch = sMessages.match(/(Messages[^.]*)\./);
            let messageClass = messageMatch && messageMatch[1] || "Messages";
            if (sFormat) {
                if (args[2] == "true") {
                    if (sMessages) sMessages += " + ";
                    sMessages += messageClass + ".ADDRESS";
                }
                if (args[1] && args[1] != "true") {
                    printf("warning: unexpected value (%s) for printMessage parameter 2\n", args[1]);
                }
                sFormat = (sMessages? sMessages + ", " : "") + "\"" + sFormat + "\\n\"";
                if (!match[1]) {
                    /*
                     * We can remove the "if" completely...
                     */
                    sNew = match[4] + ".printf(" + sFormat + (sList? ", " + sList : "") + ");";
                } else {
                    /*
                     * We can remove the "if" partially...
                     */
                    let sCondition = match[1].replace(/ && $/, "");
                    sNew = "if (" + sCondition + ") " + match[3] + match[4] + ".printf(" + sFormat + (sList? ", " + sList : "") + ");" + match[6];
                }
                if (verbose) {
                    printf("replacing '%s'\n     with '%s'\n\n", match[0], sNew);
                }
            } else {
                printf("unable to replace: '%s'\n", match[0]);
            }
            sTextNew += sText.slice(iTextLast, match.index);
            sTextNew += sNew;
            iTextLast = match.index + match[0].length;
        }
        sTextNew += sText.slice(iTextLast);
        /*
         * Round 2: printMessage() calls OUTSIDE of messageEnabled() IF blocks...
         */
        sText = sTextNew;
        sTextNew = "";
        iTextLast = 0;
        matches = sText.matchAll(/(\S+?)\.printMessage\((.*?)\);/g);
        for (let match of matches) {
            let sNew = match[0];
            let args = splitArgs(match[2], ',');
            let [sFormat, sList] = replaceArgs(args[0]);
            let sMessages = args[1] && args[1].replace(/\s*\|\s*/g, " + ") || "";
            let messageMatch = sMessages.match(/(Messages[^.]*)\./);
            let messageClass = messageMatch && messageMatch[1] || "Messages";
            if (sFormat) {
                if (args[1] == "true" && !sMessages) {
                    sMessages = messageClass + ".DEFAULT";
                }
                if (args[2] == "true") {
                    if (sMessages) sMessages += " + ";
                    sMessages += messageClass + ".ADDRESS";
                }
                sFormat = (sMessages? sMessages + ", " : "") + "\"" + sFormat + "\\n\"";
                sNew = match[1] + ".printf(" + sFormat + (sList? ", " + sList : "") + ");";
                if (verbose) {
                    printf("replacing '%s'\n     with '%s'\n\n", match[0], sNew);
                }
            } else {
                printf("unable to replace: '%s'\n", match[0]);
            }
            sTextNew += sText.slice(iTextLast, match.index);
            sTextNew += sNew;
            iTextLast = match.index + match[0].length;
        }
        sTextNew += sText.slice(iTextLast);
    }
    else {
        printf("unknown replacement type: %s\n", sType);
    }
    return sTextNew;
}

/**
 * main(argc, argv)
 *
 * @param {number} argc
 * @param {Array} argv
 */
function main(argc, argv)
{
    let argv0 = argv[0].split(' ');
    let options = argv0.slice(1).join(' ');

    Device.DEBUG = !!argv['debug'];

    printf("replace v%s\n%s\n%s\n", Device.VERSION, Device.COPYRIGHT, (options? sprintf("options: %s\n", options) : ""));

    if (!argv[1]) {
        printf("missing filename\n");
    } else {
        let sText = fs.readFileSync(argv[1], "utf8");
        let sTextNew = replaceText(sText, argv[2], argv['verbose']);
        if (sTextNew != sText) {
            if (argv['overwrite']) {
                printf("%s has changed\n", argv[1]);
                fs.writeFileSync(argv[1], sTextNew, "utf8");
            } else {
                printf("%s has changes, use --overwrite to update\n", argv[1]);
            }
        } else {
            printf("no changes\n");
        }
    }
}

main(...PCJSLib.getArgs());
