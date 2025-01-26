/**
 * @fileoverview Defines PCx86 messages
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import MESSAGE from "../../../modules/v2/message.js";

MESSAGE.CPU         = 0x00000002;
MESSAGE.BUS         = 0x00000004;
MESSAGE.MEM         = 0x00000008;
MESSAGE.PORT        = 0x00000010;
MESSAGE.NVR         = 0x00000020;
MESSAGE.CHIPSET     = 0x00000040;
MESSAGE.KBD         = 0x00000080;
MESSAGE.KEY         = 0x00000100;
MESSAGE.VIDEO       = 0x00000200;
MESSAGE.FDC         = 0x00000400;
MESSAGE.DISK        = 0x00000800;
MESSAGE.SERIAL      = 0x00001000;
MESSAGE.SPEAKER     = 0x00002000;
MESSAGE.COMPUTER    = 0x00004000;

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
MESSAGE.NAMES["bus"]        = MESSAGE.BUS;
MESSAGE.NAMES["mem"]        = MESSAGE.MEM;
MESSAGE.NAMES["port"]       = MESSAGE.PORT;
MESSAGE.NAMES["nvr"]        = MESSAGE.NVR;
MESSAGE.NAMES["chipset"]    = MESSAGE.CHIPSET;
MESSAGE.NAMES["kbd"]        = MESSAGE.KBD;
MESSAGE.NAMES["key"]        = MESSAGE.KEY;
MESSAGE.NAMES["video"]      = MESSAGE.VIDEO;
MESSAGE.NAMES["fdc"]        = MESSAGE.FDC;
MESSAGE.NAMES["disk"]       = MESSAGE.DISK;
MESSAGE.NAMES["serial"]     = MESSAGE.SERIAL;
MESSAGE.NAMES["speaker"]    = MESSAGE.SPEAKER;
MESSAGE.NAMES["computer"]   = MESSAGE.COMPUTER;

export default MESSAGE;
