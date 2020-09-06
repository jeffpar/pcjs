/**
 * @fileoverview Basic definitions
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2020 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

/**
 * COMMAND is the default name of the global command handler we will define, to provide
 * the same convenient access to all the WebIO COMMAND handlers that the Debugger enjoys.
 *
 * @define {string}
 */
const COMMAND = "command";

/**
 * COMPILED is false by default; overridden with true in the Closure Compiler release.
 *
 * @define {boolean}
 */
const COMPILED = false;

/**
 * DEBUG is true by default, enabling assertions and other runtime checks; overridden with false
 * in the Closure Compiler release, which generally results in the removal of any DEBUG code.  Our
 * gulpfile, however, takes the extra precaution of physically removing all "assert" method calls
 * from the concatenated file that is generated for the Closure Compiler.
 *
 * @define {boolean}
 */
const DEBUG = true;

/**
 * FACTORY is "PCjsMachine" by default; overridden with the machine's "factory" string in machines.json
 * to ensure unique factories.
 *
 * @define {string}
 */
const FACTORY = "PCjsMachine";

/**
 * MAXDEBUG is false by default; overridden with false in the Closure Compiler release.  Set it to
 * true to manually to enable any hyper-aggressive DEBUG checks.
 *
 * @define {boolean}
 */
const MAXDEBUG = false;

/**
 * VERSION is the current PCjs Project release number, updated somewhat arbitrarily and usually only
 * after significant changes.  It will be overriden the machine's "version" string in machines.json.
 *
 * @define {string}
 */
const VERSION = "2.04";

/**
 * REPOSITORY is the primary location (eg, URL) where all PCjs-related resources can be found; it is not
 * intended to refer to any specific type of container (such as a Git repository).
 *
 * @define {string}
 */
const REPOSITORY = "pcjs.org";

const COPYRIGHT = "Copyright © 2012-2020 Jeff Parsons <Jeff@pcjs.org>";

/**
 * @class {Defs}
 */
export default class Defs {}
export { COMPILED };

Defs.COMMAND    = COMMAND;
Defs.COMPILED   = COMPILED;
Defs.COPYRIGHT  = COPYRIGHT;
Defs.DEBUG      = DEBUG;
Defs.FACTORY    = FACTORY;
Defs.MAXDEBUG   = MAXDEBUG;
Defs.REPOSITORY = REPOSITORY;
Defs.VERSION    = VERSION;

/*
 * The following globals CANNOT be overridden.
 *
 * LITTLE_ENDIAN is true if the browser's ArrayBuffer storage is little-endian.  If LITTLE_ENDIAN matches
 * the endian-ness of a machine being emulated, then that machine can use ArrayBuffers for Memory buffers as-is.
 */
Defs.LITTLE_ENDIAN = function() {
    let buffer = new ArrayBuffer(2);
    new DataView(buffer).setUint16(0, 256, true);
    return new Uint16Array(buffer)[0] === 256;
}();

/*
 * List of standard message groups.  The messages properties defines the set of active message
 * groups, and their names are defined by MESSAGE_NAMES.  See the Device class for more message
 * group definitions.
 *
 * NOTE: To support more than 32 message groups, be sure to use "+", not "|", when concatenating.
 */
Defs.MESSAGE = {
    ALL:        0xffffffffffff,
    NONE:       0x000000000000,
    DEFAULT:    0x000000000000,
    BUFFER:     0x800000000000,
};

/*
 * RS-232 DB-25 Pin Definitions, mapped to bits 1-25 in a 32-bit status value.
 *
 * Serial devices in PCjs machines are considered DTE (Data Terminal Equipment), which means they should be "virtually"
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
Defs.RS232 = {
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

Defs.CLASSES = {};
Defs.CLASSES["Defs"] = Defs;
