/**
 * @fileoverview Defines PCx86 message categories
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Messages from "../../../modules/v2/messages.js";

/*
 * PCx86 machine message flags.
 *
 * NOTE: Because this machine defines more than 32 message categories, some of these message flags
 * exceed 32 bits, so when concatenating, be sure to use "+", not "|".
 */
Messages.CPU         = 0x000000000002;
Messages.SEG         = 0x000000000004;
Messages.DESC        = 0x000000000008;
Messages.TSS         = 0x000000000010;
Messages.PORT        = 0x000000000020;
Messages.IOPM        = 0x000000000040;
Messages.NMI         = 0x000000000080;
Messages.TRAP        = 0x000000000100;
Messages.FAULT       = 0x000000000200;
Messages.INT         = 0x000000000400;
Messages.IRQ         = 0x000000000800;
Messages.BUS         = 0x000000001000;
Messages.MEM         = 0x000000002000;
Messages.DMA         = 0x000000004000;
Messages.FDC         = 0x000000008000;
Messages.HDC         = 0x000000010000;
Messages.DISK        = 0x000000020000;
Messages.PIC         = 0x000000040000;
Messages.TIMER       = 0x000000080000;
Messages.CMOS        = 0x000000100000;
Messages.RTC         = 0x000000200000;
Messages.C8042       = 0x000000400000;
Messages.KBD         = 0x000000800000;
Messages.PARALLEL    = 0x000001000000;
Messages.SERIAL      = 0x000002000000;
Messages.MOUSE       = 0x000004000000;
Messages.SPEAKER     = 0x000008000000;
Messages.CHIPSET     = 0x000010000000;
Messages.VIDEO       = 0x000020000000;
Messages.COMPUTER    = 0x000040000000;
Messages.DATA        = 0x000080000000;
Messages.DOS         = 0x000100000000;
Messages.EVENT       = 0x000200000000;
Messages.KEY         = 0x000400000000;

Messages.CATEGORIES['cpu']       = Messages.CPU;
Messages.CATEGORIES['seg']       = Messages.SEG;
Messages.CATEGORIES['desc']      = Messages.DESC;
Messages.CATEGORIES['port']      = Messages.PORT;
Messages.CATEGORIES['tss']       = Messages.TSS;
Messages.CATEGORIES['iopm']      = Messages.IOPM;
Messages.CATEGORIES['int']       = Messages.INT;
Messages.CATEGORIES['nmi']       = Messages.NMI;
Messages.CATEGORIES['fault']     = Messages.FAULT;
Messages.CATEGORIES['trap']      = Messages.TRAP;
Messages.CATEGORIES['bus']       = Messages.BUS;
Messages.CATEGORIES['irq']       = Messages.IRQ;
Messages.CATEGORIES['mem']       = Messages.MEM;
Messages.CATEGORIES['dma']       = Messages.DMA;
Messages.CATEGORIES['fdc']       = Messages.FDC;
Messages.CATEGORIES['hdc']       = Messages.HDC;
Messages.CATEGORIES['disk']      = Messages.DISK;
Messages.CATEGORIES['pic']       = Messages.PIC;
Messages.CATEGORIES['timer']     = Messages.TIMER;
Messages.CATEGORIES['cmos']      = Messages.CMOS;
Messages.CATEGORIES['rtc']       = Messages.RTC;
Messages.CATEGORIES['8042']      = Messages.C8042;
Messages.CATEGORIES['kbd']       = Messages.KBD;
Messages.CATEGORIES['parallel']  = Messages.PARALLEL;
Messages.CATEGORIES['serial']    = Messages.SERIAL;
Messages.CATEGORIES['mouse']     = Messages.MOUSE;
Messages.CATEGORIES['speaker']   = Messages.SPEAKER;
Messages.CATEGORIES['chipset']   = Messages.CHIPSET;
Messages.CATEGORIES['video']     = Messages.VIDEO;
Messages.CATEGORIES['computer']  = Messages.COMPUTER;
Messages.CATEGORIES['dos']       = Messages.DOS;
Messages.CATEGORIES['data']      = Messages.DATA;
Messages.CATEGORIES['event']     = Messages.EVENT;
Messages.CATEGORIES['key']       = Messages.KEY;

export default Messages;
