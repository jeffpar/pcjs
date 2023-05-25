/**
 * @fileoverview Defines PCjs message categories
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

/*
 * Standard machine message flags.
 *
 * NOTE: Because this machine defines more than 32 message categories, some of these message flags
 * exceed 32 bits, so when concatenating, be sure to use "+", not "|".
 */
const Messages = {
    NONE:       0x000000000000,
    DEFAULT:    0x000000000000,
    ADDRESS:    0x000000000001,
    LOG:        0x001000000000,         // to replace component.log()
    STATUS:     0x002000000000,         // to replace component.status()
    NOTICE:     0x004000000000,         // to replace Component.PRINT.NOTICE
    WARNING:    0x008000000000,         // to replace Component.PRINT.WARNING
    ERROR:      0x010000000000,         // to replace Component.PRINT.ERROR
    DEBUG:      0x020000000000,         // to replace Component.PRINT.DEBUG
    PROGRESS:   0x040000000000,         // to replace Component.PRINT.PROGRESS
    SCRIPT:     0x080000000000,         // to replace Component.PRINT.SCRIPT
    TYPES:      0x0ff000000000,         // all the above message types; only one (at most) of these should be set
    HALT:       0x400000000000,
    BUFFER:     0x800000000000,
    ALL:        0x000ffffffffe
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
    "warn":     Messages.WARNING,
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

export default Messages;
