/**
 * @fileoverview Defines message categories
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import CommonMessages from "../../../modules/v2/messages.js";

const Messages = { ...CommonMessages };
Messages.Categories = { ...CommonMessages.Categories };

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
Messages.Categories["cpu"]      = Messages.CPU;
Messages.Categories["bus"]      = Messages.BUS;
Messages.Categories["mem"]      = Messages.MEM;
Messages.Categories["port"]     = Messages.PORT;
Messages.Categories["nvr"]      = Messages.NVR;
Messages.Categories["chipset"]  = Messages.CHIPSET;
Messages.Categories["keyboard"] = Messages.KEYBOARD; // "kbd" is also allowed as shorthand for "keyboard"; see doMessages()
Messages.Categories["key"]      = Messages.KEYS;     // using "key" instead of "keys", since the latter is a method on JavasScript objects
Messages.Categories["video"]    = Messages.VIDEO;
Messages.Categories["fdc"]      = Messages.FDC;
Messages.Categories["disk"]     = Messages.DISK;
Messages.Categories["serial"]   = Messages.SERIAL;
Messages.Categories["speaker"]  = Messages.SPEAKER;
Messages.Categories["computer"] = Messages.COMPUTER;

export default Messages;
