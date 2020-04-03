/**
 * @fileoverview PCjs compile-time definitions
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2020 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

"use strict";

/**
 * @define {string}
 */
var APPVERSION = "0.00";                // this @define is overridden by the Closure Compiler with the version in machines.json

var XMLVERSION = null;                  // this is set in non-COMPILED builds by embedMachine() if a version number was found in the machine XML

var COPYRIGHT = "Copyright © 2012-2020 Jeff Parsons <Jeff@pcjs.org>";

var LICENSE = "License: MIT <https://www.pcjs.org/LICENSE.txt>";

var CSSCLASS = "pcjs";

/**
 * @define {string}
 */
var SITEURL = "http://localhost:8088";  // this @define is overridden by the Closure Compiler with "https://www.pcjs.org"

/**
 * @define {boolean}
 */
var COMPILED = false;                   // this @define is overridden by the Closure Compiler (to true)

/**
 * @define {boolean}
 */
var DEBUG = true;                       // this @define is overridden by the Closure Compiler (to false) to remove DEBUG-only code

/**
 * @define {boolean}
 */
var MAXDEBUG = false;                   // this @define is overridden by the Closure Compiler (to false) to remove MAXDEBUG-only code

/**
 * @define {boolean}
 */
var PRIVATE = false;                    // this @define is overridden by the Closure Compiler (to false) to enable PRIVATE code

/*
 * RS-232 DB-25 Pin Definitions, mapped to bits 1-25 in a 32-bit status value.
 *
 * SerialPorts in PCjs machines are considered DTE (Data Terminal Equipment), which means they should be "virtually"
 * connected to each other via a null-modem cable, which assumes the following cross-wiring:
 *
 *     G       1  <->  1        G       (Ground)
 *     TD      2  <->  3        RD      (Received Data)
 *     RD      3  <->  2        TD      (Transmitted Data)
 *     RTS     4  <->  5        CTS     (Clear To Send)
 *     CTS     5  <->  4        RTS     (Request To Send)
 *     DSR   6+8  <->  20       DTR     (Data Terminal Ready)
 *     SG      7  <->  7        SG      (Signal Ground)
 *     DTR    20  <->  6+8      DSR     (Data Set Ready + Carrier Detect)
 *     RI     22  <->  22       RI      (Ring Indicator)
 *
 * TODO: Move these definitions to a more appropriate shared file at some point.
 */
var RS232 = {
    RTS: {
        PIN:  4,
        MASK: 0x00000010
    },
    CTS: {
        PIN:  5,
        MASK: 0x00000020
    },
    DSR: {
        PIN:  6,
        MASK: 0x00000040
    },
    CD: {
        PIN:  8,
        MASK: 0x00000100
    },
    DTR: {
        PIN:  20,
        MASK: 0x00100000
    },
    RI: {
        PIN:  22,
        MASK: 0x00400000
    }
};

if (typeof module !== "undefined") {
    global.window       = false;        // provides an alternative "if (typeof window === 'undefined')" (ie, "if (window) ...")
    global.APPVERSION   = APPVERSION;
    global.XMLVERSION   = XMLVERSION;
    global.COPYRIGHT    = COPYRIGHT;
    global.LICENSE      = LICENSE;
    global.CSSCLASS     = CSSCLASS;
    global.SITEURL      = SITEURL;
    global.COMPILED     = COMPILED;
    global.DEBUG        = DEBUG;
    global.MAXDEBUG     = MAXDEBUG;
    global.PRIVATE      = PRIVATE;
    global.RS232        = RS232;
    /*
     * TODO: When we're "required" by Node, should we return anything via module.exports?
     */
}
