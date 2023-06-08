/**
 * @fileoverview Defines PCx86 message categories
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import CommonMessages from "../../../modules/v2/messages.js";

const Messages = { ...CommonMessages };
Messages.Categories = { ...CommonMessages.Categories };

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
Messages.RESERVED    = 0xfff000000000;

Messages.Categories['cpu']       = Messages.CPU;
Messages.Categories['seg']       = Messages.SEG;
Messages.Categories['desc']      = Messages.DESC;
Messages.Categories['port']      = Messages.PORT;
Messages.Categories['tss']       = Messages.TSS;
Messages.Categories['iopm']      = Messages.IOPM;
Messages.Categories['int']       = Messages.INT;
Messages.Categories['nmi']       = Messages.NMI;
Messages.Categories['fault']     = Messages.FAULT;
Messages.Categories['trap']      = Messages.TRAP;
Messages.Categories['bus']       = Messages.BUS;
Messages.Categories['irq']       = Messages.IRQ;
Messages.Categories['mem']       = Messages.MEM;
Messages.Categories['dma']       = Messages.DMA;
Messages.Categories['fdc']       = Messages.FDC;
Messages.Categories['hdc']       = Messages.HDC;
Messages.Categories['disk']      = Messages.DISK;
Messages.Categories['pic']       = Messages.PIC;
Messages.Categories['timer']     = Messages.TIMER;
Messages.Categories['cmos']      = Messages.CMOS;
Messages.Categories['rtc']       = Messages.RTC;
Messages.Categories['8042']      = Messages.C8042;
Messages.Categories['kbd']       = Messages.KBD;
Messages.Categories['parallel']  = Messages.PARALLEL;
Messages.Categories['serial']    = Messages.SERIAL;
Messages.Categories['mouse']     = Messages.MOUSE;
Messages.Categories['speaker']   = Messages.SPEAKER;
Messages.Categories['chipset']   = Messages.CHIPSET;
Messages.Categories['video']     = Messages.VIDEO;
Messages.Categories['computer']  = Messages.COMPUTER;
Messages.Categories['dos']       = Messages.DOS;
Messages.Categories['data']      = Messages.DATA;
Messages.Categories['event']     = Messages.EVENT;
Messages.Categories['key']       = Messages.KEY;

export default Messages;
