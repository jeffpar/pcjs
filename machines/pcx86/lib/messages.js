/**
 * @fileoverview Defines PCx86 message categories
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2020 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

"use strict";

/*
 * Machine message flags.
 *
 * NOTE: Because this machine defines more than 32 message categories, some of these message flags
 * exceed 32 bits, so when concatenating, be sure to use "+", not "|".
 */
var Messages = {
    NONE:       0x000000000000,
    DEFAULT:    0x000000000000,
    ADDRESS:    0x000000000001,
    CPU:        0x000000000002,
    SEG:        0x000000000004,
    DESC:       0x000000000008,
    TSS:        0x000000000010,
    PORT:       0x000000000020,
    IOPM:       0x000000000040,
    NMI:        0x000000000080,
    TRAP:       0x000000000100,
    FAULT:      0x000000000200,
    INT:        0x000000000400,
    IRQ:        0x000000000800,
    BUS:        0x000000001000,
    MEM:        0x000000002000,
    DMA:        0x000000004000,
    FDC:        0x000000008000,
    HDC:        0x000000010000,
    DISK:       0x000000020000,
    PIC:        0x000000040000,
    TIMER:      0x000000080000,
    CMOS:       0x000000100000,
    RTC:        0x000000200000,
    C8042:      0x000000400000,
    KBD:        0x000000800000,
    PARALLEL:   0x000001000000,
    SERIAL:     0x000002000000,
    MOUSE:      0x000004000000,
    SPEAKER:    0x000008000000,
    CHIPSET:    0x000010000000,
    VIDEO:      0x000020000000,
    COMPUTER:   0x000040000000,
    DATA:       0x000080000000,
    DOS:        0x000100000000,
    EVENT:      0x000200000000,
    KEY:        0x000400000000,
    WARN:       0x100000000000,
    HALT:       0x200000000000,
    BUFFER:     0x400000000000,
    ALL:        0xffffffffffff
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
Messages.CATEGORIES = {
    "cpu":      Messages.CPU,
    "seg":      Messages.SEG,
    "desc":     Messages.DESC,
    "port":     Messages.PORT,
    "tss":      Messages.TSS,
    "iopm":     Messages.IOPM,
    "int":      Messages.INT,
    "nmi":      Messages.NMI,
    "fault":    Messages.FAULT,
    "trap":     Messages.TRAP,
    "bus":      Messages.BUS,
    "irq":      Messages.IRQ,
    "mem":      Messages.MEM,
    "dma":      Messages.DMA,
    "fdc":      Messages.FDC,
    "hdc":      Messages.HDC,
    "disk":     Messages.DISK,
    "pic":      Messages.PIC,
    "timer":    Messages.TIMER,
    "cmos":     Messages.CMOS,
    "rtc":      Messages.RTC,
    "8042":     Messages.C8042,
    "kbd":      Messages.KBD,
    "parallel": Messages.PARALLEL,
    "serial":   Messages.SERIAL,
    "mouse":    Messages.MOUSE,
    "speaker":  Messages.SPEAKER,
    "chipset":  Messages.CHIPSET,
    "video":    Messages.VIDEO,
    "computer": Messages.COMPUTER,
    "dos":      Messages.DOS,
    "data":     Messages.DATA,
    "event":    Messages.EVENT,
    "key":      Messages.KEY,
    "warn":     Messages.WARN,
    /*
     * Now we turn to message actions rather than message types; for example, setting "halt"
     * on or off doesn't enable "halt" messages, but rather halts the CPU on any message above.
     *
     * Similarly, "m buffer on" turns on message buffering, deferring the display of all messages
     * until "m buffer off" is issued.
     */
    "halt":     Messages.HALT,
    "buffer":   Messages.BUFFER
};

if (typeof module !== "undefined") module.exports = Messages;
