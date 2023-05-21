/**
 * @fileoverview Defines PDP-10 message categories
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

const MessagesPDP10 = {
    NONE:       0x00000000,
    DEFAULT:    0x00000000,
    ADDRESS:    0x00000001,
    CPU:        0x00000002,
    TRAP:       0x00000004,
    FAULT:      0x00000008,
    INT:        0x00000010,
    BUS:        0x00000020,
    MEMORY:     0x00000040,
    MMU:        0x00000080,
    ROM:        0x00000100,
    DEVICE:     0x00000200,
    PANEL:      0x00000400,
    KEYBOARD:   0x00000800,
    KEYS:       0x00001000,
    PAPER:      0x00002000,
    READ:       0x00004000,
    WRITE:      0x00008000,
    SERIAL:     0x00010000,
    TIMER:      0x00020000,
    SPEAKER:    0x00040000,
    COMPUTER:   0x00080000,
    LOG:        0x00100000,
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
MessagesPDP10.CATEGORIES = {
    "cpu":      MessagesPDP10.CPU,
    "trap":     MessagesPDP10.TRAP,
    "fault":    MessagesPDP10.FAULT,
    "int":      MessagesPDP10.INT,
    "bus":      MessagesPDP10.BUS,
    "memory":   MessagesPDP10.MEMORY,
    "mmu":      MessagesPDP10.MMU,
    "rom":      MessagesPDP10.ROM,
    "device":   MessagesPDP10.DEVICE,
    "panel":    MessagesPDP10.PANEL,
    "keyboard": MessagesPDP10.KEYBOARD, // "kbd" is also allowed as shorthand for "keyboard"; see doMessages()
    "key":      MessagesPDP10.KEYS,     // using "key" instead of "keys", since the latter is a method on JavasScript objects
    "paper":    MessagesPDP10.PAPER,
    "read":     MessagesPDP10.READ,
    "write":    MessagesPDP10.WRITE,
    "serial":   MessagesPDP10.SERIAL,
    "timer":    MessagesPDP10.TIMER,
    "speaker":  MessagesPDP10.SPEAKER,
    "computer": MessagesPDP10.COMPUTER,
    "log":      MessagesPDP10.LOG,
    "warn":     MessagesPDP10.WARN,
    /*
     * Now we turn to message actions rather than message types; for example, setting "halt"
     * on or off doesn't enable "halt" messages, but rather halts the CPU on any message above.
     *
     * Similarly, "m buffer on" turns on message buffering, deferring the display of all messages
     * until "m buffer off" is issued.
     */
    "halt":     MessagesPDP10.HALT,
    "buffer":   MessagesPDP10.BUFFER
};

export default MessagesPDP10;
