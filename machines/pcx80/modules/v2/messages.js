/**
 * @fileoverview Defines message categories
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Messages from "../../../modules/v2/messages.js";

Messages.CPU        = 0x00000002;
Messages.BUS        = 0x00000004;
Messages.MEM        = 0x00000008;
Messages.PORT       = 0x00000010;
Messages.NVR        = 0x00000020;
Messages.CHIPSET    = 0x00000040;
Messages.KEYBOARD   = 0x00000080;
Messages.KEYS       = 0x00000100;
Messages.VIDEO      = 0x00000200;
Messages.FDC        = 0x00000400;
Messages.DISK       = 0x00000800;
Messages.SERIAL     = 0x00001000;
Messages.SPEAKER    = 0x00002000;
Messages.COMPUTER   = 0x00004000;

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
Messages.CATEGORIES["cpu"]      = Messages.CPU;
Messages.CATEGORIES["bus"]      = Messages.BUS;
Messages.CATEGORIES["mem"]      = Messages.MEM;
Messages.CATEGORIES["port"]     = Messages.PORT;
Messages.CATEGORIES["nvr"]      = Messages.NVR;
Messages.CATEGORIES["chipset"]  = Messages.CHIPSET;
Messages.CATEGORIES["keyboard"] = Messages.KEYBOARD; // "kbd" is also allowed as shorthand for "keyboard"; see doMessages()
Messages.CATEGORIES["key"]      = Messages.KEYS;     // using "key" instead of "keys", since the latter is a method on JavasScript objects
Messages.CATEGORIES["video"]    = Messages.VIDEO;
Messages.CATEGORIES["fdc"]      = Messages.FDC;
Messages.CATEGORIES["disk"]     = Messages.DISK;
Messages.CATEGORIES["serial"]   = Messages.SERIAL;
Messages.CATEGORIES["speaker"]  = Messages.SPEAKER;
Messages.CATEGORIES["computer"] = Messages.COMPUTER;

export default Messages;
