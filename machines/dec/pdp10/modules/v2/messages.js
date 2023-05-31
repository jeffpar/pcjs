/**
 * @fileoverview Defines PDP-10 message categories
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import CommonMessages from "../../../../modules/v1/messages.js";

const Messages = { ...CommonMessages };
Messages.Categories = { ...CommonMessages.Categories };

Messages.CPU        = 0x00000002;
Messages.TRAP       = 0x00000004;
Messages.FAULT      = 0x00000008;
Messages.INT        = 0x00000010;
Messages.BUS        = 0x00000020;
Messages.MEMORY     = 0x00000040;
Messages.MMU        = 0x00000080;
Messages.ROM        = 0x00000100;
Messages.DEVICE     = 0x00000200;
Messages.PANEL      = 0x00000400;
Messages.KEYBOARD   = 0x00000800;
Messages.KEYS       = 0x00001000;
Messages.PAPER      = 0x00002000;
Messages.READ       = 0x00004000;
Messages.WRITE      = 0x00008000;
Messages.SERIAL     = 0x00010000;
Messages.TIMER      = 0x00020000;
Messages.SPEAKER    = 0x00040000;
Messages.COMPUTER   = 0x00080000;

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
Messages.Categories["cpu"]      = Messages.CPU;
Messages.Categories["trap"]     = Messages.TRAP;
Messages.Categories["fault"]    = Messages.FAULT;
Messages.Categories["int"]      = Messages.INT;
Messages.Categories["bus"]      = Messages.BUS;
Messages.Categories["memory"]   = Messages.MEMORY;
Messages.Categories["mmu"]      = Messages.MMU;
Messages.Categories["rom"]      = Messages.ROM;
Messages.Categories["device"]   = Messages.DEVICE;
Messages.Categories["panel"]    = Messages.PANEL;
Messages.Categories["keyboard"] = Messages.KEYBOARD;       // "kbd" is also allowed as shorthand for "keyboard"; see doMessages()
Messages.Categories["key"]      = Messages.KEYS;           // using "key" instead of "keys", since the latter is a method on JavasScript objects
Messages.Categories["paper"]    = Messages.PAPER;
Messages.Categories["read"]     = Messages.READ;
Messages.Categories["write"]    = Messages.WRITE;
Messages.Categories["serial"]   = Messages.SERIAL;
Messages.Categories["timer"]    = Messages.TIMER;
Messages.Categories["speaker"]  = Messages.SPEAKER;
Messages.Categories["computer"] = Messages.COMPUTER;

export default Messages;
