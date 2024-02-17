/**
 * @fileoverview Defines PCx86 messages
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import MESSAGE from "../../../modules/v2/message.js";

/**
 * PCx86 machine message flags.
 *
 * NOTE: Because this machine defines more than 32 message categories, some of these message flags
 * exceed 32 bits, so when concatenating, be sure to use "+", not "|".
 */
MESSAGE.CPU         = 0x000000000002;
MESSAGE.SEG         = 0x000000000004;
MESSAGE.DESC        = 0x000000000008;
MESSAGE.TSS         = 0x000000000010;
MESSAGE.PORT        = 0x000000000020;
MESSAGE.IOPM        = 0x000000000040;
MESSAGE.NMI         = 0x000000000080;
MESSAGE.TRAP        = 0x000000000100;
MESSAGE.FAULT       = 0x000000000200;
MESSAGE.INT         = 0x000000000400;
MESSAGE.IRQ         = 0x000000000800;
MESSAGE.BUS         = 0x000000001000;
MESSAGE.MEM         = 0x000000002000;
MESSAGE.DMA         = 0x000000004000;
MESSAGE.FDC         = 0x000000008000;
MESSAGE.HDC         = 0x000000010000;
MESSAGE.DISK        = 0x000000020000;
MESSAGE.PIC         = 0x000000040000;
MESSAGE.TIMER       = 0x000000080000;
MESSAGE.CMOS        = 0x000000100000;
MESSAGE.RTC         = 0x000000200000;
MESSAGE.C8042       = 0x000000400000;
MESSAGE.KBD         = 0x000000800000;
MESSAGE.PARALLEL    = 0x000001000000;
MESSAGE.SERIAL      = 0x000002000000;
MESSAGE.MOUSE       = 0x000004000000;
MESSAGE.SPEAKER     = 0x000008000000;
MESSAGE.CHIPSET     = 0x000010000000;
MESSAGE.VIDEO       = 0x000020000000;
MESSAGE.COMPUTER    = 0x000040000000;
MESSAGE.DATA        = 0x000080000000;
MESSAGE.DOS         = 0x000100000000;
MESSAGE.EVENT       = 0x000200000000;
MESSAGE.KEY         = 0x000400000000;
MESSAGE.RESERVED    = 0xfff000000000;

MESSAGE.NAMES['cpu']        = MESSAGE.CPU;
MESSAGE.NAMES['seg']        = MESSAGE.SEG;
MESSAGE.NAMES['desc']       = MESSAGE.DESC;
MESSAGE.NAMES['port']       = MESSAGE.PORT;
MESSAGE.NAMES['tss']        = MESSAGE.TSS;
MESSAGE.NAMES['iopm']       = MESSAGE.IOPM;
MESSAGE.NAMES['int']        = MESSAGE.INT;
MESSAGE.NAMES['nmi']        = MESSAGE.NMI;
MESSAGE.NAMES['fault']      = MESSAGE.FAULT;
MESSAGE.NAMES['trap']       = MESSAGE.TRAP;
MESSAGE.NAMES['bus']        = MESSAGE.BUS;
MESSAGE.NAMES['irq']        = MESSAGE.IRQ;
MESSAGE.NAMES['mem']        = MESSAGE.MEM;
MESSAGE.NAMES['dma']        = MESSAGE.DMA;
MESSAGE.NAMES['fdc']        = MESSAGE.FDC;
MESSAGE.NAMES['hdc']        = MESSAGE.HDC;
MESSAGE.NAMES['disk']       = MESSAGE.DISK;
MESSAGE.NAMES['pic']        = MESSAGE.PIC;
MESSAGE.NAMES['timer']      = MESSAGE.TIMER;
MESSAGE.NAMES['cmos']       = MESSAGE.CMOS;
MESSAGE.NAMES['rtc']        = MESSAGE.RTC;
MESSAGE.NAMES['8042']       = MESSAGE.C8042;
MESSAGE.NAMES['kbd']        = MESSAGE.KBD;
MESSAGE.NAMES['parallel']   = MESSAGE.PARALLEL;
MESSAGE.NAMES['serial']     = MESSAGE.SERIAL;
MESSAGE.NAMES['mouse']      = MESSAGE.MOUSE;
MESSAGE.NAMES['speaker']    = MESSAGE.SPEAKER;
MESSAGE.NAMES['chipset']    = MESSAGE.CHIPSET;
MESSAGE.NAMES['video']      = MESSAGE.VIDEO;
MESSAGE.NAMES['computer']   = MESSAGE.COMPUTER;
MESSAGE.NAMES['dos']        = MESSAGE.DOS;
MESSAGE.NAMES['data']       = MESSAGE.DATA;
MESSAGE.NAMES['event']      = MESSAGE.EVENT;
MESSAGE.NAMES['key']        = MESSAGE.KEY;

export default MESSAGE;
