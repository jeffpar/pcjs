/**
 * @fileoverview Defines PDP-10 messages
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import MESSAGE from "../../../../modules/v2/message.js";

MESSAGE.CPU         = 0x00000002;
MESSAGE.TRAP        = 0x00000004;
MESSAGE.FAULT       = 0x00000008;
MESSAGE.INT         = 0x00000010;
MESSAGE.BUS         = 0x00000020;
MESSAGE.MEMORY      = 0x00000040;
MESSAGE.MMU         = 0x00000080;
MESSAGE.ROM         = 0x00000100;
MESSAGE.DEVICE      = 0x00000200;
MESSAGE.PANEL       = 0x00000400;
MESSAGE.KEYBOARD    = 0x00000800;
MESSAGE.KEYS        = 0x00001000;
MESSAGE.PAPER       = 0x00002000;
MESSAGE.READ        = 0x00004000;
MESSAGE.WRITE       = 0x00008000;
MESSAGE.SERIAL      = 0x00010000;
MESSAGE.TIMER       = 0x00020000;
MESSAGE.SPEAKER     = 0x00040000;
MESSAGE.COMPUTER    = 0x00080000;

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
MESSAGE.NAMES["cpu"]        = MESSAGE.CPU;
MESSAGE.NAMES["trap"]       = MESSAGE.TRAP;
MESSAGE.NAMES["fault"]      = MESSAGE.FAULT;
MESSAGE.NAMES["int"]        = MESSAGE.INT;
MESSAGE.NAMES["bus"]        = MESSAGE.BUS;
MESSAGE.NAMES["memory"]     = MESSAGE.MEMORY;
MESSAGE.NAMES["mmu"]        = MESSAGE.MMU;
MESSAGE.NAMES["rom"]        = MESSAGE.ROM;
MESSAGE.NAMES["device"]     = MESSAGE.DEVICE;
MESSAGE.NAMES["panel"]      = MESSAGE.PANEL;
MESSAGE.NAMES["keyboard"]   = MESSAGE.KEYBOARD;     // "kbd" is also allowed as shorthand for "keyboard"; see doMessages()
MESSAGE.NAMES["key"]        = MESSAGE.KEYS;         // using "key" instead of "keys", since the latter is a method on JavasScript objects
MESSAGE.NAMES["paper"]      = MESSAGE.PAPER;
MESSAGE.NAMES["read"]       = MESSAGE.READ;
MESSAGE.NAMES["write"]      = MESSAGE.WRITE;
MESSAGE.NAMES["serial"]     = MESSAGE.SERIAL;
MESSAGE.NAMES["timer"]      = MESSAGE.TIMER;
MESSAGE.NAMES["speaker"]    = MESSAGE.SPEAKER;
MESSAGE.NAMES["computer"]   = MESSAGE.COMPUTER;

export default MESSAGE;
