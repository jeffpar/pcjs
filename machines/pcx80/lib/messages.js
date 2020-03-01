/**
 * @fileoverview Defines message categories
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2020 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

"use strict";

var MessagesX80 = {
    NONE:       0x00000000,
    DEFAULT:    0x00000000,
    ADDRESS:    0x00000001,
    CPU:        0x00000002,
    BUS:        0x00000004,
    MEM:        0x00000008,
    PORT:       0x00000010,
    NVR:        0x00000020,
    CHIPSET:    0x00000040,
    KEYBOARD:   0x00000080,
    KEYS:       0x00000100,
    VIDEO:      0x00000200,
    FDC:        0x00000400,
    DISK:       0x00000800,
    SERIAL:     0x00001000,
    SPEAKER:    0x00002000,
    COMPUTER:   0x00004000,
    WARN:       0x10000000,
    HALT:       0x20000000,
    BUFFER:     0x40000000,
    ALL:        0xffffffff|0
};

/*
 * Message categories supported by the messageEnabled() function and other assorted message
 * functions. Each category has a corresponding bit value that can be combined (ie, OR'ed) as
 * needed.  The Debugger's message command ("m") is used to turn message categories on and off,
 * like so:
 *
 *      m port on
 *      m port off
 *      ...
 *
 * NOTE: The order of these categories can be rearranged, alphabetized, etc, as desired; just be
 * aware that changing the bit values could break saved Debugger states (not a huge concern, just
 * something to be aware of).
 */
MessagesX80.CATEGORIES = {
    "cpu":      MessagesX80.CPU,
    "bus":      MessagesX80.BUS,
    "mem":      MessagesX80.MEM,
    "port":     MessagesX80.PORT,
    "nvr":      MessagesX80.NVR,
    "chipset":  MessagesX80.CHIPSET,
    "keyboard": MessagesX80.KEYBOARD,  // "kbd" is also allowed as shorthand for "keyboard"; see doMessages()
    "key":      MessagesX80.KEYS,      // using "key" instead of "keys", since the latter is a method on JavasScript objects
    "video":    MessagesX80.VIDEO,
    "fdc":      MessagesX80.FDC,
    "disk":     MessagesX80.DISK,
    "serial":   MessagesX80.SERIAL,
    "speaker":  MessagesX80.SPEAKER,
    "computer": MessagesX80.COMPUTER,
    "warn":     MessagesX80.WARN,
    /*
     * Now we turn to message actions rather than message types; for example, setting "halt"
     * on or off doesn't enable "halt" messages, but rather halts the CPU on any message above.
     *
     * Similarly, "m buffer on" turns on message buffering, deferring the display of all messages
     * until "m buffer off" is issued.
     */
    "halt":     MessagesX80.HALT,
    "buffer":   MessagesX80.BUFFER
};

if (typeof module !== "undefined") module.exports = MessagesX80;
