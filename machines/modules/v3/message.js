/**
 * @fileoverview Message definitions
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

/**
 * List of standard message groups.  The messages properties defines the set of active message
 * groups, and their names are defined by MESSAGE_NAMES.  See the Device class for more message
 * group definitions.
 *
 * NOTE: To support more than 32 message groups, be sure to use "+", not "|", when concatenating.
 */
const MESSAGE = {
    ALL:        0xffffffffffff,
    NONE:       0x000000000000,
    DEFAULT:    0x000000000000,
    ADDR:       0x000000000001,     // this is a special bit (bit 0) used to append address info to messages
    BUS:        0x000000000002,
    FAULT:      0x000000000004,
    MEMORY:     0x000000000008,
    PORTS:      0x000000000010,
    CHIPS:      0x000000000020,
    KBD:        0x000000000040,
    SERIAL:     0x000000000080,
    MISC:       0x000000000100,
    CPU:        0x000000000200,
    INT:        0x000000000400,
    MMU:        0x000000000800,
    TRAP:       0x000000001000,
    VIDEO:      0x000000002000,     // used with video hardware messages (see video.js)
    MONITOR:    0x000000004000,     // used with video monitor messages (see monitor.js)
    SCREEN:     0x000000008000,     // used with screen-related messages (also monitor.js)
    FILE:       0x000000010000,
    DISK:       0x000000020000,
    TIME:       0x000000040000,
    TIMER:      0x000000080000,
    EVENT:      0x000000100000,
    INPUT:      0x000000200000,
    KEY:        0x000000400000,
    MOUSE:      0x000000800000,
    TOUCH:      0x000001000000,
    CUSTOM:     0x000010000000,     // custom device messages should start here
    LOG:        0x001000000000,
    STATUS:     0x002000000000,
    NOTICE:     0x004000000000,
    INFO:       0x004000000000,     // treat this the same as NOTICE (for now)
    WARNING:    0x008000000000,
    ERROR:      0x010000000000,
    ALERTS:     0x01c000000000,
    DEBUG:      0x020000000000,
    PROGRESS:   0x040000000000,
    SCRIPT:     0x080000000000,
    TYPES:      0x0ff000000000,
    HALT:       0x400000000000,
    BUFFER:     0x800000000000
};

/**
 * NOTE: The first name is automatically omitted from global "on" and "off" operations.
 */
MESSAGE.NAMES = {
    "all":      MESSAGE.ALL,
    "addr":     MESSAGE.ADDR,
    "bus":      MESSAGE.BUS,
    "fault":    MESSAGE.FAULT,
    "memory":   MESSAGE.MEMORY,
    "ports":    MESSAGE.PORTS,
    "chips":    MESSAGE.CHIPS,
    "kbd":      MESSAGE.KBD,
    "serial":   MESSAGE.SERIAL,
    "misc":     MESSAGE.MISC,
    "cpu":      MESSAGE.CPU,
    "mmu":      MESSAGE.MMU,
    "int":      MESSAGE.INT,
    "trap":     MESSAGE.TRAP,
    "video":    MESSAGE.VIDEO,
    "monitor":  MESSAGE.MONITOR,
    "screen":   MESSAGE.SCREEN,
    "disk":     MESSAGE.DISK,
    "file":     MESSAGE.FILE,
    "time":     MESSAGE.TIME,
    "timer":    MESSAGE.TIMER,
    "event":    MESSAGE.EVENT,
    "input":    MESSAGE.INPUT,
    "key":      MESSAGE.KEY,
    "mouse":    MESSAGE.MOUSE,
    "touch":    MESSAGE.TOUCH,
    "info":     MESSAGE.INFO,
    "warn":     MESSAGE.WARNING,
    "error":    MESSAGE.ERROR,
    "halt":     MESSAGE.HALT,
    "buffer":   MESSAGE.BUFFER
};

export default MESSAGE;
