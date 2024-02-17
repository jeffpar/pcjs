/**
 * @fileoverview Implements the PCx86 Keyboard component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import ChipSet from "./chipset.js";
import Interrupts from "./interrupts.js";
import MESSAGE from "./message.js";
import ROMx86 from "./rom.js";
import Component from "../../../modules/v2/component.js";
import Keys from "../../../modules/v2/keys.js";
import State from "../../../modules/v2/state.js";
import StrLib from "../../../modules/v2/strlib.js";
import WebLib from "../../../modules/v2/weblib.js";
import { APPCLASS, COMPILED, DEBUG, DESKPRO386, MAXDEBUG } from "./defines.js";

/**
 * @class Keyboardx86
 * @unrestricted (allows the class to define properties, both dot and named, outside of the constructor)
 */
export default class Keyboardx86 extends Component {

    /**
     * Supported keyboard models (the first entry is the default if the specified model isn't recognized)
     */
    static MODELS = ["US83", "US84", "US101"];

    /**
     * Commands that can be sent to the Keyboard via the 8042; see receiveCmd()
     *
     * Aside from the commands listed below, 0xEF-0xF2 and 0xF7-0xFD are expressly documented as NOPs; ie:
     *
     *      These commands are reserved and are effectively no-operation or NOP. The system does not use these codes.
     *      If sent, the keyboard will acknowledge the command and continue in its prior scanning state. No other
     *      operation will occur.
     *
     * However, IBM's documentation is silent with regard to 0x00-0xEC.  It's likely that most if not all of those
     * commands are NOPs as well.
     *
     * @enum {number}
     */
    static CMD = {
        /**
         * RESET (0xFF)
         *
         * The system issues a RESET command to start a program reset and a keyboard internal self-test. The keyboard
         * acknowledges the command with an 'acknowledge' signal (ACK) and ensures the system accepts the ACK before
         * executing the command. The system signals acceptance of the ACK by raising the clock and data for a minimum
         * of 500 microseconds. The keyboard is disabled from the time it receives the RESET command until the ACK is
         * accepted or until another command overrides the previous one. Following acceptance of the ACK, the keyboard
         * begins the reset operation, which is similar to a power-on reset. The keyboard clears the output buffer and
         * sets up default values for typematic and delay rates.
         */
        RESET:      0xFF,

        /**
         * RESEND (0xFE)
         *
         * The system can send this command when it detects an error in any transmission from the keyboard. It can be
         * sent only after a keyboard transmission and before the system enables the interface to allow the next keyboard
         * output. Upon receipt of RESEND, the keyboard sends the previous output again unless the previous output was
         * RESEND. In this case, the keyboard will resend the last byte before the RESEND command.
         */
        RESEND:     0xFE,

        /**
         * SET DEFAULT (0xF6)
         *
         * The SET DEFAULT command resets all conditions to the power-on default state. The keyboard responds with ACK,
         * clears its output buffer, sets default conditions, and continues scanning (only if the keyboard was previously
         * enabled).
         */
        DEF_ON:     0xF6,

        /**
         * DEFAULT DISABLE (0xF5)
         *
         * This command is similar to SET DEFAULT, except the keyboard stops scanning and awaits further instructions.
         */
        DEF_OFF:    0xF5,

        /**
         * ENABLE (0xF4)
         *
         * Upon receipt of this command, the keyboard responds with ACK, clears its output buffer, and starts scanning.
         */
        ENABLE:     0xF4,

        /**
         * SET TYPEMATIC RATE/DELAY (0xF3)
         *
         * The system issues this command, followed by a parameter, to change the typematic rate and delay. The typematic
         * rate and delay parameters are determined by the value of the byte following the command. Bits 6 and 5 serve as
         * the delay parameter and bits 4,3,2, 1, and 0 (the least-significant bit) are the rate parameter. Bit 7, the
         * most-significant bit, is always 0. The delay is equal to 1 plus the binary value of bits 6 and 5 multiplied by
         * 250 milliseconds ±20%.
         */
        SET_RATE:   0xF3,

        /**
         * ECHO (0xEE)
         *
         * ECHO is a diagnostic aid. When the keyboard receives this command, it issues a 0xEE response and continues
         * scanning if the keyboard was previously enabled.
         */
        ECHO:       0xEE,

        /**
         * SET/RESET MODE INDICATORS (0xED)
         *
         * Three mode indicators on the keyboard are accessible to the system. The keyboard activates or deactivates
         * these indicators when it receives a valid command from the system. They can be activated or deactivated in
         * any combination.
         *
         * The system remembers the previous state of an indicator so that its setting does not change when a command
         * sequence is issued to change the state of another indicator.
         *
         * A SET/RESET MODE INDICATORS command consists of 2 bytes. The first is the command byte and has the following
         * bit setup:
         *
         *      11101101 - 0xED
         *
         * The second byte is an option byte. It has a list of the indicators to be acted upon. The bit assignments for
         * this option byte are as follows:
         *
         *      Bit         Indicator
         *      ---         ---------
         *       0          Scroll Lock Indicator
         *       1          Num Lock Indicator
         *       2          Caps Lock Indicator
         *      3-7         Reserved (must be 0's)
         *
         * NOTE: Bit 7 is the most-significant bit; bit 0 is the least-significant.
         *
         * The keyboard will respond to the set/reset mode indicators command with an ACK, discontinue scanning, and wait
         * for the option byte. The keyboard will respond to the option byte with an ACK, set the indicators, and continue
         * scanning if the keyboard was previously enabled. If another command is received in place of the option byte,
         * execution of the function of the SET/RESET MODE INDICATORS command is stopped with no change to the indicator
         * states, and the new command is processed. Then scanning is resumed.
         */
        SET_LEDS:   0xED
    };

    /**
     * Command responses returned to the Keyboard via the 8042; see receiveCmd()
     *
     * @enum {number}
     */
    static CMDRES = {
        /**
         * OVERRUN (0x00)
         *
         * An overrun character is placed in position 17 of the keyboard buffer, overlaying the last code if the
         * buffer becomes full. The code is sent to the system as an overrun when it reaches the top of the buffer.
         */
        OVERRUN:    0x00,

        LOAD_TEST:  0x65,   // undocumented "LOAD MANUFACTURING TEST REQUEST" response code

        /**
         * BAT Completion Code (0xAA)
         *
         * Following satisfactory completion of the BAT, the keyboard sends 0xAA. 0xFC (or any other code)
         * means the keyboard microprocessor check failed.
         */
        BAT_OK:     0xAA,

        /**
         * ECHO Response (0xEE)
         *
         * This is sent in response to an ECHO command (also 0xEE) from the system.
         */
        ECHO:       0xEE,

        /**
         * BREAK CODE PREFIX (0xF0)
         *
         * This code is sent as the first byte of a 2-byte sequence to indicate the release of a key.
         */
        BREAK_PREF: 0xF0,

        /**
         * ACK (0xFA)
         *
         * The keyboard issues an ACK response to any valid input other than an ECHO or RESEND command.
         * If the keyboard is interrupted while sending ACK, it will discard ACK and accept and respond
         * to the new command.
         */
        ACK:        0xFA,

        /**
         * BASIC ASSURANCE TEST FAILURE (0xFC)
         */
        BAT_FAIL:   0xFC,   // TODO: Verify this response code (is this just for older 83-key keyboards?)

        /**
         * DIAGNOSTIC FAILURE (0xFD)
         *
         * The keyboard periodically tests the sense amplifier and sends a diagnostic failure code if it detects
         * any problems. If a failure occurs during BAT, the keyboard stops scanning and waits for a system command
         * or power-down to restart. If a failure is reported after scanning is enabled, scanning continues.
         */
        DIAG_FAIL:  0xFD,

        /**
         * RESEND (0xFE)
         *
         * The keyboard issues a RESEND command following receipt of an invalid input, or any input with incorrect parity.
         * If the system sends nothing to the keyboard, no response is required.
         */
        RESEND:     0xFE,

        BUFF_FULL:  0xFF    // TODO: Verify this response code (is this just for older 83-key keyboards?)
    };

    static LIMIT = {
        MAX_SCANCODES: 20   // TODO: Verify this limit for newer keyboards (84-key and up)
    };

    static INJECTION = {
        NONE:       0,
        ON_START:   1,
        ON_INPUT:   2
    };

    static SIMCODE = {
        BS:               Keys.KEYCODE.BS          + Keys.KEYCODE.ONDOWN,
        TAB:              Keys.KEYCODE.TAB         + Keys.KEYCODE.ONDOWN,
        SHIFT:            Keys.KEYCODE.SHIFT       + Keys.KEYCODE.ONDOWN,
        RSHIFT:           Keys.KEYCODE.SHIFT       + Keys.KEYCODE.ONDOWN + Keys.KEYCODE.ONRIGHT,
        CTRL:             Keys.KEYCODE.CTRL        + Keys.KEYCODE.ONDOWN,
        ALT:              Keys.KEYCODE.ALT         + Keys.KEYCODE.ONDOWN,
        RALT:             Keys.KEYCODE.ALT         + Keys.KEYCODE.ONDOWN + Keys.KEYCODE.ONRIGHT,
        CAPS_LOCK:        Keys.KEYCODE.CAPS_LOCK   + Keys.KEYCODE.ONDOWN,
        ESC:              Keys.KEYCODE.ESC         + Keys.KEYCODE.ONDOWN,
        /**
         * It seems that a recent change to Safari on iOS (first noticed in iOS 9.1) treats SPACE
         * differently now, at least with regard to <textarea> controls, and possibly only readonly
         * or hidden controls, like the hidden <textarea> we overlay on the Video <canvas> element.
         *
         * Whatever the exact criteria are, Safari on iOS now performs SPACE's default behavior
         * after the onkeydown event but before the onkeypress event.  So we must now process SPACE
         * as an ONDOWN key, so that we can call preventDefault() and properly simulate the key at
         * the time the key goes down.
         */
        SPACE:            Keys.KEYCODE.SPACE       + Keys.KEYCODE.ONDOWN,
        F1:               Keys.KEYCODE.F1          + Keys.KEYCODE.ONDOWN,
        F2:               Keys.KEYCODE.F2          + Keys.KEYCODE.ONDOWN,
        F3:               Keys.KEYCODE.F3          + Keys.KEYCODE.ONDOWN,
        F4:               Keys.KEYCODE.F4          + Keys.KEYCODE.ONDOWN,
        F5:               Keys.KEYCODE.F5          + Keys.KEYCODE.ONDOWN,
        F6:               Keys.KEYCODE.F6          + Keys.KEYCODE.ONDOWN,
        F7:               Keys.KEYCODE.F7          + Keys.KEYCODE.ONDOWN,
        F8:               Keys.KEYCODE.F8          + Keys.KEYCODE.ONDOWN,
        F9:               Keys.KEYCODE.F9          + Keys.KEYCODE.ONDOWN,
        F10:              Keys.KEYCODE.F10         + Keys.KEYCODE.ONDOWN,
        F11:              Keys.KEYCODE.F11         + Keys.KEYCODE.ONDOWN,
        F12:              Keys.KEYCODE.F12         + Keys.KEYCODE.ONDOWN,
        NUM_LOCK:         Keys.KEYCODE.NUM_LOCK    + Keys.KEYCODE.ONDOWN,
        SCROLL_LOCK:      Keys.KEYCODE.SCROLL_LOCK + Keys.KEYCODE.ONDOWN,
        PRTSC:            Keys.KEYCODE.PRTSC       + Keys.KEYCODE.ONDOWN,
        HOME:             Keys.KEYCODE.HOME        + Keys.KEYCODE.ONDOWN,
        UP:               Keys.KEYCODE.UP          + Keys.KEYCODE.ONDOWN,
        PGUP:             Keys.KEYCODE.PGUP        + Keys.KEYCODE.ONDOWN,
        LEFT:             Keys.KEYCODE.LEFT        + Keys.KEYCODE.ONDOWN,
        NUM_INS:          Keys.KEYCODE.NUM_INS     + Keys.KEYCODE.ONDOWN,
        NUM_END:          Keys.KEYCODE.NUM_END     + Keys.KEYCODE.ONDOWN,
        NUM_DOWN:         Keys.KEYCODE.NUM_DOWN    + Keys.KEYCODE.ONDOWN,
        NUM_PGDN:         Keys.KEYCODE.NUM_PGDN    + Keys.KEYCODE.ONDOWN,
        NUM_LEFT:         Keys.KEYCODE.NUM_LEFT    + Keys.KEYCODE.ONDOWN,
        NUM_CENTER:       Keys.KEYCODE.NUM_CENTER  + Keys.KEYCODE.ONDOWN,
        NUM_RIGHT:        Keys.KEYCODE.NUM_RIGHT   + Keys.KEYCODE.ONDOWN,
        NUM_HOME:         Keys.KEYCODE.NUM_HOME    + Keys.KEYCODE.ONDOWN,
        NUM_UP:           Keys.KEYCODE.NUM_UP      + Keys.KEYCODE.ONDOWN,
        NUM_PGUP:         Keys.KEYCODE.NUM_PGUP    + Keys.KEYCODE.ONDOWN,
        NUM_ADD:          Keys.KEYCODE.NUM_ADD     + Keys.KEYCODE.ONDOWN,
        NUM_SUB:          Keys.KEYCODE.NUM_SUB     + Keys.KEYCODE.ONDOWN,
        NUM_DEL:          Keys.KEYCODE.NUM_DEL     + Keys.KEYCODE.ONDOWN,
        RIGHT:            Keys.KEYCODE.RIGHT       + Keys.KEYCODE.ONDOWN,
        END:              Keys.KEYCODE.END         + Keys.KEYCODE.ONDOWN,
        DOWN:             Keys.KEYCODE.DOWN        + Keys.KEYCODE.ONDOWN,
        PGDN:             Keys.KEYCODE.PGDN        + Keys.KEYCODE.ONDOWN,
        INS:              Keys.KEYCODE.INS         + Keys.KEYCODE.ONDOWN,
        DEL:              Keys.KEYCODE.DEL         + Keys.KEYCODE.ONDOWN,
        CMD:              Keys.KEYCODE.CMD         + Keys.KEYCODE.ONDOWN,
        RCMD:             Keys.KEYCODE.RCMD        + Keys.KEYCODE.ONDOWN,
        FF_CMD:           Keys.KEYCODE.FF_CMD      + Keys.KEYCODE.ONDOWN,
        CTRL_A:           Keys.ASCII.CTRL_A        + Keys.KEYCODE.FAKE,
        CTRL_B:           Keys.ASCII.CTRL_B        + Keys.KEYCODE.FAKE,
        CTRL_C:           Keys.ASCII.CTRL_C        + Keys.KEYCODE.FAKE,
        CTRL_D:           Keys.ASCII.CTRL_D        + Keys.KEYCODE.FAKE,
        CTRL_E:           Keys.ASCII.CTRL_E        + Keys.KEYCODE.FAKE,
        CTRL_F:           Keys.ASCII.CTRL_F        + Keys.KEYCODE.FAKE,
        CTRL_G:           Keys.ASCII.CTRL_G        + Keys.KEYCODE.FAKE,
        CTRL_H:           Keys.ASCII.CTRL_H        + Keys.KEYCODE.FAKE,
        CTRL_I:           Keys.ASCII.CTRL_I        + Keys.KEYCODE.FAKE,
        CTRL_J:           Keys.ASCII.CTRL_J        + Keys.KEYCODE.FAKE,
        CTRL_K:           Keys.ASCII.CTRL_K        + Keys.KEYCODE.FAKE,
        CTRL_L:           Keys.ASCII.CTRL_L        + Keys.KEYCODE.FAKE,
        CTRL_M:           Keys.ASCII.CTRL_M        + Keys.KEYCODE.FAKE,
        CTRL_N:           Keys.ASCII.CTRL_N        + Keys.KEYCODE.FAKE,
        CTRL_O:           Keys.ASCII.CTRL_O        + Keys.KEYCODE.FAKE,
        CTRL_P:           Keys.ASCII.CTRL_P        + Keys.KEYCODE.FAKE,
        CTRL_Q:           Keys.ASCII.CTRL_Q        + Keys.KEYCODE.FAKE,
        CTRL_R:           Keys.ASCII.CTRL_R        + Keys.KEYCODE.FAKE,
        CTRL_S:           Keys.ASCII.CTRL_S        + Keys.KEYCODE.FAKE,
        CTRL_T:           Keys.ASCII.CTRL_T        + Keys.KEYCODE.FAKE,
        CTRL_U:           Keys.ASCII.CTRL_U        + Keys.KEYCODE.FAKE,
        CTRL_V:           Keys.ASCII.CTRL_V        + Keys.KEYCODE.FAKE,
        CTRL_W:           Keys.ASCII.CTRL_W        + Keys.KEYCODE.FAKE,
        CTRL_X:           Keys.ASCII.CTRL_X        + Keys.KEYCODE.FAKE,
        CTRL_Y:           Keys.ASCII.CTRL_Y        + Keys.KEYCODE.FAKE,
        CTRL_Z:           Keys.ASCII.CTRL_Z        + Keys.KEYCODE.FAKE,
        SYS_REQ:          Keys.KEYCODE.ESC         + Keys.KEYCODE.FAKE,
        CTRL_PAUSE:       Keys.KEYCODE.NUM_LOCK    + Keys.KEYCODE.FAKE,
        CTRL_BREAK:       Keys.KEYCODE.SCROLL_LOCK + Keys.KEYCODE.FAKE,
        CTRL_ALT_DEL:     Keys.KEYCODE.DEL         + Keys.KEYCODE.FAKE,
        CTRL_ALT_INS:     Keys.KEYCODE.INS         + Keys.KEYCODE.FAKE,
        CTRL_ALT_ADD:     Keys.KEYCODE.NUM_ADD     + Keys.KEYCODE.FAKE,
        CTRL_ALT_SUB:     Keys.KEYCODE.NUM_SUB     + Keys.KEYCODE.FAKE,
        CTRL_ALT_ENTER:   Keys.KEYCODE.NUM_CR      + Keys.KEYCODE.FAKE,
        CTRL_ALT_SYS_REQ: Keys.KEYCODE.PRTSC       + Keys.KEYCODE.FAKE,
        SHIFT_TAB:        Keys.KEYCODE.TAB         + Keys.KEYCODE.FAKE
    };

    /**
     * Scan code constants
     */
    static SCANCODE = {
        /* 0x01 */ ESC:         1,
        /* 0x02 */ ONE:         2,
        /* 0x03 */ TWO:         3,
        /* 0x04 */ THREE:       4,
        /* 0x05 */ FOUR:        5,
        /* 0x06 */ FIVE:        6,
        /* 0x07 */ SIX:         7,
        /* 0x08 */ SEVEN:       8,
        /* 0x09 */ EIGHT:       9,
        /* 0x0A */ NINE:        10,
        /* 0x0B */ ZERO:        11,
        /* 0x0C */ DASH:        12,
        /* 0x0D */ EQUALS:      13,
        /* 0x0E */ BS:          14,
        /* 0x0F */ TAB:         15,
        /* 0x10 */ Q:           16,
        /* 0x11 */ W:           17,
        /* 0x12 */ E:           18,
        /* 0x13 */ R:           19,
        /* 0x14 */ T:           20,
        /* 0x15 */ Y:           21,
        /* 0x16 */ U:           22,
        /* 0x17 */ I:           23,
        /* 0x18 */ O:           24,
        /* 0x19 */ P:           25,
        /* 0x1A */ LBRACK:      26,
        /* 0x1B */ RBRACK:      27,
        /* 0x1C */ ENTER:       28,
        /* 0x1D */ CTRL:        29,
        /* 0x1E */ A:           30,
        /* 0x1F */ S:           31,
        /* 0x20 */ D:           32,
        /* 0x21 */ F:           33,
        /* 0x22 */ G:           34,
        /* 0x23 */ H:           35,
        /* 0x24 */ J:           36,
        /* 0x25 */ K:           37,
        /* 0x26 */ L:           38,
        /* 0x27 */ SEMI:        39,
        /* 0x28 */ QUOTE:       40,
        /* 0x29 */ BQUOTE:      41,
        /* 0x2A */ SHIFT:       42,
        /* 0x2B */ BSLASH:      43,
        /* 0x2C */ Z:           44,
        /* 0x2D */ X:           45,
        /* 0x2E */ C:           46,
        /* 0x2F */ V:           47,
        /* 0x30 */ B:           48,
        /* 0x31 */ N:           49,
        /* 0x32 */ M:           50,
        /* 0x33 */ COMMA:       51,
        /* 0x34 */ PERIOD:      52,
        /* 0x35 */ SLASH:       53,
        /* 0x36 */ RSHIFT:      54,
        /* 0x37 */ PRTSC:       55,         // unshifted '*'; becomes dedicated 'Print Screen' key on 101-key keyboards
        /* 0x38 */ ALT:         56,
        /* 0x39 */ SPACE:       57,
        /* 0x3A */ CAPS_LOCK:   58,
        /* 0x3B */ F1:          59,
        /* 0x3C */ F2:          60,
        /* 0x3D */ F3:          61,
        /* 0x3E */ F4:          62,
        /* 0x3F */ F5:          63,
        /* 0x40 */ F6:          64,
        /* 0x41 */ F7:          65,
        /* 0x42 */ F8:          66,
        /* 0x43 */ F9:          67,
        /* 0x44 */ F10:         68,
        /* 0x45 */ NUM_LOCK:    69,
        /* 0x46 */ SCROLL_LOCK: 70,
        /* 0x47 */ NUM_HOME:    71,
        /* 0x48 */ NUM_UP:      72,
        /* 0x49 */ NUM_PGUP:    73,
        /* 0x4A */ NUM_SUB:     74,
        /* 0x4B */ NUM_LEFT:    75,
        /* 0x4C */ NUM_CENTER:  76,
        /* 0x4D */ NUM_RIGHT:   77,
        /* 0x4E */ NUM_ADD:     78,
        /* 0x4F */ NUM_END:     79,
        /* 0x50 */ NUM_DOWN:    80,
        /* 0x51 */ NUM_PGDN:    81,
        /* 0x52 */ NUM_INS:     82,
        /* 0x53 */ NUM_DEL:     83,
        /* 0x54 */ SYS_REQ:     84,         // 84-key keyboard only (simulated with 'alt'+'prtsc' on 101-key keyboards)
        /* 0x54 */ PAUSE:       84,         // 101-key keyboard only
        /* 0x57 */ F11:         87,
        /* 0x58 */ F12:         88,
        /* 0x5B */ WIN:         91,         // aka CMD
        /* 0x5C */ RWIN:        92,
        /* 0x5D */ MENU:        93,         // aka CMD + ONRIGHT
        /* 0x7F */ MAKE:        127,
        /* 0x80 */ BREAK:       128,
        /* 0xE0 */ EXTEND1:     224,
        /* 0xE1 */ EXTEND2:     225
    };

    /**
     * These internal "shift key" states are used to indicate BOTH the physical shift-key states (in bitsState)
     * and the simulated shift-key states (in bitsStateSim).  The LOCK keys are problematic in both cases: the
     * browsers give us no way to query the LOCK key states, so we can only infer them, and because they are "soft"
     * locks, the machine's notion of their state is subject to change at any time as well.  Granted, the IBM PC
     * ROM BIOS will store its LOCK states in the ROM BIOS Data Area (@0040:0017), but that's just a BIOS convention.
     *
     * Also, because this is purely for internal use, don't make the mistake of thinking that these bits have any
     * connection to the ROM BIOS bits @0040:0017 (they don't).  We emulate hardware, not ROMs.
     *
     * TODO: Consider taking notice of the ROM BIOS Data Area state anyway, even though I'd rather remain ROM-agnostic;
     * at the very least, it would help us keep our LOCK LEDs in sync with the machine's LOCK states.  However, the LED
     * issue will be largely moot (at least for MODEL_5170 machines) once we add support for PC AT keyboard LED commands.
     *
     * Note that right-hand state bits are equal to the left-hand bits shifted right 1 bit; makes sense, "right"? ;-)
     *
     * @enum {number}
     */
    static STATE = {
        RSHIFT:         0x0001,
        SHIFT:          0x0002,
        SHIFTS:         0x0003,
        RCTRL:          0x0004,             // 101-key keyboard only
        CTRL:           0x0008,
        CTRLS:          0x000C,
        RALT:           0x0010,             // 101-key keyboard only
        ALT:            0x0020,
        ALTS:           0x0030,
        RCMD:           0x0040,             // 101-key keyboard only
        CMD:            0x0080,             // 101-key keyboard only
        CMDS:           0x00C0,
        ALL_RIGHT:      0x0055,             // RSHIFT | RCTRL | RALT | RCMD
        ALL_MODIFIERS:  0x00FF,             // SHIFT | RSHIFT | CTRL | RCTRL | ALT | RALT | CMD | RCMD
        INSERT:         0x0100,             // TODO: Placeholder (we currently have no notion of any "insert" states)
        CAPS_LOCK:      0x0200,
        NUM_LOCK:       0x0400,
        SCROLL_LOCK:    0x0800,
        ALL_LOCKS:      0x0E00              // CAPS_LOCK | NUM_LOCK | SCROLL_LOCK
    };

    /**
     * Maps KEYCODES of modifier keys to their corresponding (default) STATES bit above.
     */
    static MODIFIERS = {
        [Keyboardx86.SIMCODE.RSHIFT]:      Keyboardx86.STATE.RSHIFT,
        [Keyboardx86.SIMCODE.SHIFT]:       Keyboardx86.STATE.SHIFT,
        [Keyboardx86.SIMCODE.CTRL]:        Keyboardx86.STATE.CTRL,
        [Keyboardx86.SIMCODE.ALT]:         Keyboardx86.STATE.ALT,
        [Keyboardx86.SIMCODE.RALT]:        Keyboardx86.STATE.ALT,
        [Keyboardx86.SIMCODE.CMD]:         Keyboardx86.STATE.CMD,
        [Keyboardx86.SIMCODE.RCMD]:        Keyboardx86.STATE.RCMD,
        [Keyboardx86.SIMCODE.FF_CMD]:      Keyboardx86.STATE.CMD
    };

    /**
     * Maps KEYCODES of all modifier and lock keys to their corresponding (default) STATES bit above.
     */
    static KEYSTATES = {
        [Keyboardx86.SIMCODE.RSHIFT]:      Keyboardx86.STATE.RSHIFT,
        [Keyboardx86.SIMCODE.SHIFT]:       Keyboardx86.STATE.SHIFT,
        [Keyboardx86.SIMCODE.CTRL]:        Keyboardx86.STATE.CTRL,
        [Keyboardx86.SIMCODE.ALT]:         Keyboardx86.STATE.ALT,
        [Keyboardx86.SIMCODE.RALT]:        Keyboardx86.STATE.ALT,
        [Keyboardx86.SIMCODE.CMD]:         Keyboardx86.STATE.CMD,
        [Keyboardx86.SIMCODE.RCMD]:        Keyboardx86.STATE.RCMD,
        [Keyboardx86.SIMCODE.FF_CMD]:      Keyboardx86.STATE.CMD,
        [Keyboardx86.SIMCODE.CAPS_LOCK]:   Keyboardx86.STATE.CAPS_LOCK,
        [Keyboardx86.SIMCODE.NUM_LOCK]:    Keyboardx86.STATE.NUM_LOCK,
        [Keyboardx86.SIMCODE.SCROLL_LOCK]: Keyboardx86.STATE.SCROLL_LOCK
    };

    /**
     * Maps CLICKCODE (string) to SIMCODE (number).
     *
     * NOTE: Unlike SOFTCODES, CLICKCODES are upper-case and use underscores instead of dashes, so that this
     * and other components can reference them using "dot" property syntax; using upper-case merely adheres to
     * our convention for constants.  setBinding() will automatically convert any incoming CLICKCODE bindings
     * that use lower-case and dashes to upper-case and underscores before performing property lookup.
     */
    static CLICKCODES = {
        'TAB':              Keyboardx86.SIMCODE.TAB,
        'ESC':              Keyboardx86.SIMCODE.ESC,
        'F1':               Keyboardx86.SIMCODE.F1,
        'F2':               Keyboardx86.SIMCODE.F2,
        'F3':               Keyboardx86.SIMCODE.F3,
        'F4':               Keyboardx86.SIMCODE.F4,
        'F5':               Keyboardx86.SIMCODE.F5,
        'F6':               Keyboardx86.SIMCODE.F6,
        'F7':               Keyboardx86.SIMCODE.F7,
        'F8':               Keyboardx86.SIMCODE.F8,
        'F9':               Keyboardx86.SIMCODE.F9,
        'F10':              Keyboardx86.SIMCODE.F10,
        'LEFT':             Keyboardx86.SIMCODE.LEFT,
        'UP':               Keyboardx86.SIMCODE.UP,
        'RIGHT':            Keyboardx86.SIMCODE.RIGHT,
        'DOWN':             Keyboardx86.SIMCODE.DOWN,
        'NUM_HOME':         Keyboardx86.SIMCODE.HOME,
        'NUM_END':          Keyboardx86.SIMCODE.END,
        'NUM_PGUP':         Keyboardx86.SIMCODE.PGUP,
        'NUM_PGDN':         Keyboardx86.SIMCODE.PGDN,
        'ALT':              Keyboardx86.SIMCODE.ALT,
        'SYS_REQ':          Keyboardx86.SIMCODE.SYS_REQ,
        /**
         * These bindings are for convenience (common key combinations that can be bound to a single control)
         */
        'CTRL_C':           Keyboardx86.SIMCODE.CTRL_C,
        'CTRL_PAUSE':       Keyboardx86.SIMCODE.CTRL_PAUSE,
        'CTRL_BREAK':       Keyboardx86.SIMCODE.CTRL_BREAK,
        'CTRL_ALT_DEL':     Keyboardx86.SIMCODE.CTRL_ALT_DEL,
        'CTRL_ALT_INS':     Keyboardx86.SIMCODE.CTRL_ALT_INS,
        'CTRL_ALT_ADD':     Keyboardx86.SIMCODE.CTRL_ALT_ADD,
        'CTRL_ALT_SUB':     Keyboardx86.SIMCODE.CTRL_ALT_SUB,
        'CTRL_ALT_ENTER':   Keyboardx86.SIMCODE.CTRL_ALT_ENTER,
        'CTRL_ALT_SYS_REQ': Keyboardx86.SIMCODE.CTRL_ALT_SYS_REQ,
        'SHIFT_TAB':        Keyboardx86.SIMCODE.SHIFT_TAB
    };

    /**
     * Maps SOFTCODE (string) to SIMCODE (number) -- which may be the same as KEYCODE for ASCII keys.
     *
     * We define identifiers for all possible keys, based on their primary (unshifted) character or function.
     * This also serves as a definition of all supported keys, making it possible to create full-featured
     * "soft keyboards".
     *
     * One exception to the (unshifted) rule above is 'prtsc': on the original IBM 83-key and 84-key keyboards,
     * its primary (unshifted) character was '*', but on 101-key keyboards, it became a separate key ('prtsc',
     * now labeled "Print Screen"), as did the num-pad '*' ('num-mul'), so 'prtsc' seems worthy of an exception
     * to the rule.
     *
     * On 83-key and 84-key keyboards, 'ctrl'+'num-lock' triggered a "pause" operation and 'ctrl'+'scroll-lock'
     * triggered a "break" operation.
     *
     * On 101-key keyboards, IBM decided to move both those special operations to a new 'pause' ("Pause/Break")
     * key, near the new dedicated 'prtsc' ("Print Screen/SysRq") key -- and to drop the "e" from "Sys Req".
     * Those keys behave as follows:
     *
     *      When 'pause' is pressed alone, it generates 0xe1 0x1d 0x45 0xe1 0x9d 0xc5 on make (nothing on break),
     *      which essentially simulates the make-and-break of the 'ctrl' and 'num-lock' keys (ignoring the 0xe1),
     *      triggering a "pause" operation.
     *
     *      When 'pause' is pressed with 'ctrl', it generates 0xe0 0x46 0xe0 0xc6 on make (nothing on break) and
     *      does not repeat, which essentially simulates the make-and-break of 'scroll-lock', which, in conjunction
     *      with the separate make-and-break of 'ctrl', triggers a "break" operation.
     *
     *      When 'prtsc' is pressed alone, it generates 0xe0 0x2a 0xe0 0x37, simulating the make of both 'shift'
     *      and 'prtsc'; when pressed with 'shift' or 'ctrl', it generates only 0xe0 0x37; and when pressed with
     *      'alt', it generates only 0x54 (to simulate 'sys-req').
     *
     * TODO: Implement the above behaviors, whenever we get around to actually supporting 101-key keyboards.
     *
     * All key identifiers must be quotable using single-quotes, because that's how components.xsl will encode them
     * *inside* the "data-value" attribute of the corresponding HTML control.  Which, in turn, is why the single-quote
     * key is defined as 'quote' rather than "'".  Similarly, if there was unshifted "double-quote" key, it could
     * not be called '"', because components.xsl quotes the *entire* "data-value" attribute using double-quotes.
     *
     * The (commented) numbering of keys below is purely for my own reference.  Two keys are deliberately numbered 84,
     * reflecting the fact that the 'sys-req' key was added to the 84-key keyboard but later dropped from the 101-key
     * keyboard (as a stand-alone key, that is).
     *
     * With the introduction of the PC AT and the 84-key keyboard, IBM developed a new key numbering scheme and
     * key code generation; the 8042 keyboard controller would then convert those key codes into the PC scan codes
     * defined by the older 83-key keyboard.  That's a layer of complexity we currently bypass; instead, we continue
     * to convert browser key codes directly into PC scan codes, which is what our 8042 controller implementation
     * assumes we're doing.
     */
    static SOFTCODES = {
        /*  1 */    'esc':          Keyboardx86.SIMCODE.ESC,
        /*  2 */    '1':            Keys.ASCII['1'],
        /*  3 */    '2':            Keys.ASCII['2'],
        /*  4 */    '3':            Keys.ASCII['3'],
        /*  5 */    '4':            Keys.ASCII['4'],
        /*  6 */    '5':            Keys.ASCII['5'],
        /*  7 */    '6':            Keys.ASCII['6'],
        /*  8 */    '7':            Keys.ASCII['7'],
        /*  9 */    '8':            Keys.ASCII['8'],
        /* 10 */    '9':            Keys.ASCII['9'],
        /* 11 */    '0':            Keys.ASCII['0'],
        /* 12 */    '-':            Keys.ASCII['-'],
        /* 13 */    '=':            Keys.ASCII['='],
        /* 43 */    'bslash':       Keys.ASCII['\\'],               // listed before 'bs' so that injectKeys() doesn't mismatch
        /* 14 */    'bs':           Keyboardx86.SIMCODE.BS,
        /* 15 */    'tab':          Keyboardx86.SIMCODE.TAB,
        /* 16 */    'q':            Keys.ASCII.q,
        /* 17 */    'w':            Keys.ASCII.w,
        /* 18 */    'e':            Keys.ASCII.e,
        /* 19 */    'r':            Keys.ASCII.r,
        /* 20 */    't':            Keys.ASCII.t,
        /* 21 */    'y':            Keys.ASCII.y,
        /* 22 */    'u':            Keys.ASCII.u,
        /* 23 */    'i':            Keys.ASCII.i,
        /* 24 */    'o':            Keys.ASCII.o,
        /* 25 */    'p':            Keys.ASCII.p,
        /* 26 */    '[':            Keys.ASCII['['],
        /* 27 */    ']':            Keys.ASCII[']'],
        /* 28 */    'enter':        Keys.KEYCODE.CR,
        /* 29 */    'ctrl':         Keyboardx86.SIMCODE.CTRL,
        /* 30 */    'a':            Keys.ASCII.a,
        /* 31 */    's':            Keys.ASCII.s,
        /* 32 */    'd':            Keys.ASCII.d,
        /* 33 */    'f':            Keys.ASCII.f,
        /* 34 */    'g':            Keys.ASCII.g,
        /* 35 */    'h':            Keys.ASCII.h,
        /* 36 */    'j':            Keys.ASCII.j,
        /* 37 */    'k':            Keys.ASCII.k,
        /* 38 */    'l':            Keys.ASCII.l,
        /* 39 */    ';':            Keys.ASCII[';'],
        /* 40 */    'quote':        Keys.ASCII["'"],                // formerly "squote"
        /* 41 */    '`':            Keys.ASCII['`'],                // formerly "bquote"
        /* 42 */    'shift':        Keyboardx86.SIMCODE.SHIFT,           // formerly "lshift"
        /* 43 */    '\\':           Keys.ASCII['\\'],               // formerly "bslash"
        /* 44 */    'z':            Keys.ASCII.z,
        /* 45 */    'x':            Keys.ASCII.x,
        /* 46 */    'c':            Keys.ASCII.c,
        /* 47 */    'v':            Keys.ASCII.v,
        /* 48 */    'b':            Keys.ASCII.b,
        /* 49 */    'n':            Keys.ASCII.n,
        /* 50 */    'm':            Keys.ASCII.m,
        /* 51 */    ',':            Keys.ASCII[','],
        /* 52 */    '.':            Keys.ASCII['.'],
        /* 53 */    '/':            Keys.ASCII['/'],
        /* 54 */    'right-shift':  Keyboardx86.SIMCODE.RSHIFT,        // formerly "rshift"
        /* 55 */    'prtsc':        Keyboardx86.SIMCODE.PRTSC,         // unshifted '*'; becomes dedicated 'Print Screen' key on 101-key keyboards
        /* 56 */    'alt':          Keyboardx86.SIMCODE.ALT,
        /* 57 */    'space':        Keyboardx86.SIMCODE.SPACE,
        /* 58 */    'caps-lock':    Keyboardx86.SIMCODE.CAPS_LOCK,
        /* 68 */    'f10':          Keyboardx86.SIMCODE.F10,           // listed before 'f1' so that injectKeys() doesn't mismatch
        /* 59 */    'f1':           Keyboardx86.SIMCODE.F1,
        /* 60 */    'f2':           Keyboardx86.SIMCODE.F2,
        /* 61 */    'f3':           Keyboardx86.SIMCODE.F3,
        /* 62 */    'f4':           Keyboardx86.SIMCODE.F4,
        /* 63 */    'f5':           Keyboardx86.SIMCODE.F5,
        /* 64 */    'f6':           Keyboardx86.SIMCODE.F6,
        /* 65 */    'f7':           Keyboardx86.SIMCODE.F7,
        /* 66 */    'f8':           Keyboardx86.SIMCODE.F8,
        /* 67 */    'f9':           Keyboardx86.SIMCODE.F9,
        /* 69 */    'num-lock':     Keyboardx86.SIMCODE.NUM_LOCK,
        /* 70 */    'scroll-lock':  Keyboardx86.SIMCODE.SCROLL_LOCK,   // TODO: 0xe046 on 101-key keyboards?

        /**
         * Yes, distinguishing keys 71 through 83 with the 'num-' prefix seems like overkill, but it was
         * intended to be future-proofing, for the day when we might eventually add support for 101-key keyboards,
         * because they have their own dedicated non-numeric-keypad versions of these keys (in other words, they
         * account for most of the bloat on the 101-key keyboard, a trend that more modern keyboards have gradually
         * been reversing).
         *
         * To offset 'num-' prefix overkill, injectKeys() allows SOFTCODES to be used with or without the prefix,
         * on the theory that key injection users won't really care precisely which version of the key is used.
         */

        /* 71 */    'num-home':     Keyboardx86.SIMCODE.HOME,          // formerly "home"
        /* 72 */    'num-up':       Keyboardx86.SIMCODE.UP,            // formerly "up-arrow"
        /* 73 */    'num-pgup':     Keyboardx86.SIMCODE.PGUP,          // formerly "page-up"
        /* 74 */    'num-sub':      Keyboardx86.SIMCODE.NUM_SUB,       // formerly "num-minus"
        /* 75 */    'num-left':     Keyboardx86.SIMCODE.LEFT,          // formerly "left-arrow"
        /* 76 */    'num-center':   Keyboardx86.SIMCODE.NUM_CENTER,    // formerly "center"
        /* 77 */    'num-right':    Keyboardx86.SIMCODE.RIGHT,         // formerly "right-arrow"
        /* 78 */    'num-add':      Keyboardx86.SIMCODE.NUM_ADD,       // formerly "num-plus"
        /* 79 */    'num-end':      Keyboardx86.SIMCODE.END,           // formerly "end"
        /* 80 */    'num-down':     Keyboardx86.SIMCODE.DOWN,          // formerly "down-arrow"
        /* 81 */    'num-pgdn':     Keyboardx86.SIMCODE.PGDN,          // formerly "page-down"
        /* 82 */    'num-ins':      Keyboardx86.SIMCODE.INS,           // formerly "ins"
        /* 83 */    'num-del':      Keyboardx86.SIMCODE.DEL,           // formerly "del"
        /* 84 */    'sys-req':      Keyboardx86.SIMCODE.SYS_REQ        // 84-key keyboard only (simulated with 'alt'+'prtsc' on 101-key keyboards)

        /**
         * If I ever add 101-key keyboard support (and it's not clear that I will), then the following entries
         * will have to be converted to SIMCODE indexes, and each SIMCODE index will need an entry in the SIMCODES
         * table that defines the appropriate SCANCODE(S); as this component has evolved, SOFTCODES are no longer
         * mapped directly to SCANCODES.
         */

    //  /* 84 */    'pause':        Keyboardx86.SCANCODE.PAUSE,        // 101-key keyboard only
    //  /* 85 */    'f11':          Keyboardx86.SCANCODE.F11,
    //  /* 86 */    'f12':          Keyboardx86.SCANCODE.F12,
    //  /* 87 */    'num-enter':    Keyboardx86.SCANCODE.EXTEND1 | (Keyboardx86.SCANCODE.ENTER << 8),
    //  /* 88 */    'right-ctrl':   Keyboardx86.SCANCODE.EXTEND1 | (Keyboardx86.SCANCODE.CTRL << 8),
    //  /* 89 */    'num-div':      Keyboardx86.SCANCODE.EXTEND1 | (Keyboardx86.SCANCODE.SLASH << 8),
    //  /* 90 */    'num-mul':      Keyboardx86.SCANCODE.EXTEND1 | (Keyboardx86.SCANCODE.PRTSC << 8),
    //  /* 91 */    'right-alt':    Keyboardx86.SCANCODE.EXTEND1 | (Keyboardx86.SCANCODE.ALT << 8),
    //  /* 92 */    'home':         Keyboardx86.SCANCODE.EXTEND1 | (Keyboardx86.SCANCODE.NUM_HOME << 8),
    //  /* 93 */    'up':           Keyboardx86.SCANCODE.EXTEND1 | (Keyboardx86.SCANCODE.NUM_UP << 8),
    //  /* 94 */    'pgup':         Keyboardx86.SCANCODE.EXTEND1 | (Keyboardx86.SCANCODE.NUM_PGUP << 8),
    //  /* 95 */    'left':         Keyboardx86.SCANCODE.EXTEND1 | (Keyboardx86.SCANCODE.NUM_LEFT << 8),
    //  /* 96 */    'right':        Keyboardx86.SCANCODE.EXTEND1 | (Keyboardx86.SCANCODE.NUM_RIGHT << 8),
    //  /* 97 */    'end':          Keyboardx86.SCANCODE.EXTEND1 | (Keyboardx86.SCANCODE.NUM_END << 8),
    //  /* 98 */    'down':         Keyboardx86.SCANCODE.EXTEND1 | (Keyboardx86.SCANCODE.NUM_DOWN << 8),
    //  /* 99 */    'pgdn':         Keyboardx86.SCANCODE.EXTEND1 | (Keyboardx86.SCANCODE.NUM_PGDN << 8),
    //  /*100 */    'ins':          Keyboardx86.SCANCODE.EXTEND1 | (Keyboardx86.SCANCODE.NUM_INS << 8),
    //  /*101 */    'del':          Keyboardx86.SCANCODE.EXTEND1 | (Keyboardx86.SCANCODE.NUM_DEL << 8),

    //  /*102 */    'win':          Keyboardx86.SCANCODE.EXTEND1 | (Keyboardx86.SCANCODE.WIN << 8),
    //  /*103 */    'right-win':    Keyboardx86.SCANCODE.EXTEND1 | (Keyboardx86.SCANCODE.RWIN << 8),
    //  /*104 */    'menu':         Keyboardx86.SCANCODE.EXTEND1 | (Keyboardx86.SCANCODE.MENU << 8)
    };

    /**
     * Maps "soft-key" definitions (above) of shift/modifier keys to their corresponding (default) STATES bit.
     */
    static LEDSTATES = {
        'caps-lock':    Keyboardx86.STATE.CAPS_LOCK,
        'num-lock':     Keyboardx86.STATE.NUM_LOCK,
        'scroll-lock':  Keyboardx86.STATE.SCROLL_LOCK
    };

    /**
     * Maps SIMCODE (number) to SCANCODE (number(s)).
     *
     * This array is used by simulateKey() to lookup a given SIMCODE and convert it to a SCANCODE
     * (lower byte), plus any required shift key SCANCODES (upper bytes).
     *
     * Using keyCodes from keyPress events proved to be more robust than using keyCodes from keyDown and
     * keyUp events, in part because of differences in the way browsers generate the keyDown and keyUp events.
     * For example, Safari on iOS devices will not generate up/down events for shift keys, and for other keys,
     * the up/down events are usually generated after the actual press is complete, and in rapid succession.
     *
     * The other problem (which is more of a problem with keyboards like the C1P than any IBM keyboards) is
     * that the shift/modifier state for a character on the "source" keyboard may not match the shift/modifier
     * state for the same character on the "target" keyboard.  And since this code is inherited from C1Pjs,
     * we've inherited the same solution: simulateKey() has the ability to "undo" any states in bitsState
     * that conflict with the state(s) required for the character in question.
     */
    static SIMCODES = {
        [Keyboardx86.SIMCODE.ESC]:          Keyboardx86.SCANCODE.ESC,
        [Keys.ASCII['1']]:                  Keyboardx86.SCANCODE.ONE,
        [Keys.ASCII['!']]:                  Keyboardx86.SCANCODE.ONE    | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII['2']]:                  Keyboardx86.SCANCODE.TWO,
        [Keys.ASCII['@']]:                  Keyboardx86.SCANCODE.TWO    | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII['3']]:                  Keyboardx86.SCANCODE.THREE,
        [Keys.ASCII['#']]:                  Keyboardx86.SCANCODE.THREE  | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII['4']]:                  Keyboardx86.SCANCODE.FOUR,
        [Keys.ASCII['$']]:                  Keyboardx86.SCANCODE.FOUR   | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII['5']]:                  Keyboardx86.SCANCODE.FIVE,
        [Keys.ASCII['%']]:                  Keyboardx86.SCANCODE.FIVE   | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII['6']]:                  Keyboardx86.SCANCODE.SIX,
        [Keys.ASCII['^']]:                  Keyboardx86.SCANCODE.SIX    | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII['7']]:                  Keyboardx86.SCANCODE.SEVEN,
        [Keys.ASCII['&']]:                  Keyboardx86.SCANCODE.SEVEN  | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII['8']]:                  Keyboardx86.SCANCODE.EIGHT,
        [Keys.ASCII['*']]:                  Keyboardx86.SCANCODE.EIGHT  | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII['9']]:                  Keyboardx86.SCANCODE.NINE,
        [Keys.ASCII['(']]:                  Keyboardx86.SCANCODE.NINE   | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII['0']]:                  Keyboardx86.SCANCODE.ZERO,
        [Keys.ASCII[')']]:                  Keyboardx86.SCANCODE.ZERO   | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII['-']]:                  Keyboardx86.SCANCODE.DASH,
        [Keys.ASCII['_']]:                  Keyboardx86.SCANCODE.DASH   | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII['=']]:                  Keyboardx86.SCANCODE.EQUALS,
        [Keys.ASCII['+']]:                  Keyboardx86.SCANCODE.EQUALS | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keyboardx86.SIMCODE.BS]:           Keyboardx86.SCANCODE.BS,
        [Keyboardx86.SIMCODE.TAB]:          Keyboardx86.SCANCODE.TAB,
        [Keys.ASCII.q]:                     Keyboardx86.SCANCODE.Q,
        [Keys.ASCII.Q]:                     Keyboardx86.SCANCODE.Q      | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII.w]:                     Keyboardx86.SCANCODE.W,
        [Keys.ASCII.W]:                     Keyboardx86.SCANCODE.W      | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII.e]:                     Keyboardx86.SCANCODE.E,
        [Keys.ASCII.E]:                     Keyboardx86.SCANCODE.E      | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII.r]:                     Keyboardx86.SCANCODE.R,
        [Keys.ASCII.R]:                     Keyboardx86.SCANCODE.R      | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII.t]:                     Keyboardx86.SCANCODE.T,
        [Keys.ASCII.T]:                     Keyboardx86.SCANCODE.T      | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII.y]:                     Keyboardx86.SCANCODE.Y,
        [Keys.ASCII.Y]:                     Keyboardx86.SCANCODE.Y      | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII.u]:                     Keyboardx86.SCANCODE.U,
        [Keys.ASCII.U]:                     Keyboardx86.SCANCODE.U      | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII.i]:                     Keyboardx86.SCANCODE.I,
        [Keys.ASCII.I]:                     Keyboardx86.SCANCODE.I      | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII.o]:                     Keyboardx86.SCANCODE.O,
        [Keys.ASCII.O]:                     Keyboardx86.SCANCODE.O      | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII.p]:                     Keyboardx86.SCANCODE.P,
        [Keys.ASCII.P]:                     Keyboardx86.SCANCODE.P      | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII['[']]:                  Keyboardx86.SCANCODE.LBRACK,
        [Keys.ASCII['{']]:                  Keyboardx86.SCANCODE.LBRACK | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII[']']]:                  Keyboardx86.SCANCODE.RBRACK,
        [Keys.ASCII['}']]:                  Keyboardx86.SCANCODE.RBRACK | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.KEYCODE.CR]:                  Keyboardx86.SCANCODE.ENTER,
        [Keyboardx86.SIMCODE.CTRL]:         Keyboardx86.SCANCODE.CTRL,
        [Keys.ASCII.a]:                     Keyboardx86.SCANCODE.A,
        [Keys.ASCII.A]:                     Keyboardx86.SCANCODE.A      | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII.s]:                     Keyboardx86.SCANCODE.S,
        [Keys.ASCII.S]:                     Keyboardx86.SCANCODE.S      | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII.d]:                     Keyboardx86.SCANCODE.D,
        [Keys.ASCII.D]:                     Keyboardx86.SCANCODE.D      | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII.f]:                     Keyboardx86.SCANCODE.F,
        [Keys.ASCII.F]:                     Keyboardx86.SCANCODE.F      | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII.g]:                     Keyboardx86.SCANCODE.G,
        [Keys.ASCII.G]:                     Keyboardx86.SCANCODE.G      | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII.h]:                     Keyboardx86.SCANCODE.H,
        [Keys.ASCII.H]:                     Keyboardx86.SCANCODE.H      | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII.j]:                     Keyboardx86.SCANCODE.J,
        [Keys.ASCII.J]:                     Keyboardx86.SCANCODE.J      | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII.k]:                     Keyboardx86.SCANCODE.K,
        [Keys.ASCII.K]:                     Keyboardx86.SCANCODE.K      | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII.l]:                     Keyboardx86.SCANCODE.L,
        [Keys.ASCII.L]:                     Keyboardx86.SCANCODE.L      | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII[';']]:                  Keyboardx86.SCANCODE.SEMI,
        [Keys.ASCII[':']]:                  Keyboardx86.SCANCODE.SEMI   | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII["'"]]:                  Keyboardx86.SCANCODE.QUOTE,
        [Keys.ASCII['"']]:                  Keyboardx86.SCANCODE.QUOTE  | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII['`']]:                  Keyboardx86.SCANCODE.BQUOTE,
        [Keys.ASCII['~']]:                  Keyboardx86.SCANCODE.BQUOTE | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keyboardx86.SIMCODE.SHIFT]:        Keyboardx86.SCANCODE.SHIFT,
        [Keys.ASCII['\\']]:                 Keyboardx86.SCANCODE.BSLASH,
        [Keys.ASCII['|']]:                  Keyboardx86.SCANCODE.BSLASH | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII.z]:                     Keyboardx86.SCANCODE.Z,
        [Keys.ASCII.Z]:                     Keyboardx86.SCANCODE.Z      | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII.x]:                     Keyboardx86.SCANCODE.X,
        [Keys.ASCII.X]:                     Keyboardx86.SCANCODE.X      | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII.c]:                     Keyboardx86.SCANCODE.C,
        [Keys.ASCII.C]:                     Keyboardx86.SCANCODE.C      | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII.v]:                     Keyboardx86.SCANCODE.V,
        [Keys.ASCII.V]:                     Keyboardx86.SCANCODE.V      | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII.b]:                     Keyboardx86.SCANCODE.B,
        [Keys.ASCII.B]:                     Keyboardx86.SCANCODE.B      | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII.n]:                     Keyboardx86.SCANCODE.N,
        [Keys.ASCII.N]:                     Keyboardx86.SCANCODE.N      | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII.m]:                     Keyboardx86.SCANCODE.M,
        [Keys.ASCII.M]:                     Keyboardx86.SCANCODE.M      | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII[',']]:                  Keyboardx86.SCANCODE.COMMA,
        [Keys.ASCII['<']]:                  Keyboardx86.SCANCODE.COMMA  | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII['.']]:                  Keyboardx86.SCANCODE.PERIOD,
        [Keys.ASCII['>']]:                  Keyboardx86.SCANCODE.PERIOD | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keys.ASCII['/']]:                  Keyboardx86.SCANCODE.SLASH,
        [Keys.ASCII['?']]:                  Keyboardx86.SCANCODE.SLASH  | (Keyboardx86.SCANCODE.SHIFT << 8),
        [Keyboardx86.SIMCODE.RSHIFT]:       Keyboardx86.SCANCODE.RSHIFT,
        [Keyboardx86.SIMCODE.PRTSC]:        Keyboardx86.SCANCODE.PRTSC,
        [Keyboardx86.SIMCODE.ALT]:          Keyboardx86.SCANCODE.ALT,
        [Keyboardx86.SIMCODE.RALT]:         Keyboardx86.SCANCODE.ALT,
        [Keyboardx86.SIMCODE.SPACE]:        Keyboardx86.SCANCODE.SPACE,
        [Keyboardx86.SIMCODE.CAPS_LOCK]:    Keyboardx86.SCANCODE.CAPS_LOCK,
        [Keyboardx86.SIMCODE.F1]:           Keyboardx86.SCANCODE.F1,
        [Keyboardx86.SIMCODE.F2]:           Keyboardx86.SCANCODE.F2,
        [Keyboardx86.SIMCODE.F3]:           Keyboardx86.SCANCODE.F3,
        [Keyboardx86.SIMCODE.F4]:           Keyboardx86.SCANCODE.F4,
        [Keyboardx86.SIMCODE.F5]:           Keyboardx86.SCANCODE.F5,
        [Keyboardx86.SIMCODE.F6]:           Keyboardx86.SCANCODE.F6,
        [Keyboardx86.SIMCODE.F7]:           Keyboardx86.SCANCODE.F7,
        [Keyboardx86.SIMCODE.F8]:           Keyboardx86.SCANCODE.F8,
        [Keyboardx86.SIMCODE.F9]:           Keyboardx86.SCANCODE.F9,
        [Keyboardx86.SIMCODE.F10]:          Keyboardx86.SCANCODE.F10,
        [Keyboardx86.SIMCODE.NUM_LOCK]:     Keyboardx86.SCANCODE.NUM_LOCK,
        [Keyboardx86.SIMCODE.SCROLL_LOCK]:  Keyboardx86.SCANCODE.SCROLL_LOCK,
        [Keyboardx86.SIMCODE.HOME]:         Keyboardx86.SCANCODE.NUM_HOME,
        [Keyboardx86.SIMCODE.NUM_HOME]:     Keyboardx86.SCANCODE.NUM_HOME,
        [Keyboardx86.SIMCODE.UP]:           Keyboardx86.SCANCODE.NUM_UP,
        [Keyboardx86.SIMCODE.NUM_UP]:       Keyboardx86.SCANCODE.NUM_UP,
        [Keyboardx86.SIMCODE.PGUP]:         Keyboardx86.SCANCODE.NUM_PGUP,
        [Keyboardx86.SIMCODE.NUM_PGUP]:     Keyboardx86.SCANCODE.NUM_PGUP,
        [Keyboardx86.SIMCODE.LEFT]:         Keyboardx86.SCANCODE.NUM_LEFT,
        [Keyboardx86.SIMCODE.NUM_LEFT]:     Keyboardx86.SCANCODE.NUM_LEFT,
        [Keyboardx86.SIMCODE.NUM_CENTER]:   Keyboardx86.SCANCODE.NUM_CENTER,
        [Keyboardx86.SIMCODE.RIGHT]:        Keyboardx86.SCANCODE.NUM_RIGHT,
        [Keyboardx86.SIMCODE.NUM_RIGHT]:    Keyboardx86.SCANCODE.NUM_RIGHT,
        [Keyboardx86.SIMCODE.END]:          Keyboardx86.SCANCODE.NUM_END,
        [Keyboardx86.SIMCODE.NUM_END]:      Keyboardx86.SCANCODE.NUM_END,
        [Keyboardx86.SIMCODE.DOWN]:         Keyboardx86.SCANCODE.NUM_DOWN,
        [Keyboardx86.SIMCODE.NUM_DOWN]:     Keyboardx86.SCANCODE.NUM_DOWN,
        [Keyboardx86.SIMCODE.PGDN]:         Keyboardx86.SCANCODE.NUM_PGDN,
        [Keyboardx86.SIMCODE.NUM_PGDN]:     Keyboardx86.SCANCODE.NUM_PGDN,
        [Keyboardx86.SIMCODE.INS]:          Keyboardx86.SCANCODE.NUM_INS,
        [Keyboardx86.SIMCODE.NUM_INS]:      Keyboardx86.SCANCODE.NUM_INS,
        [Keyboardx86.SIMCODE.NUM_ADD]:      Keyboardx86.SCANCODE.NUM_ADD,
        [Keyboardx86.SIMCODE.NUM_SUB]:      Keyboardx86.SCANCODE.NUM_SUB,
        [Keyboardx86.SIMCODE.DEL]:          Keyboardx86.SCANCODE.NUM_DEL,
        [Keyboardx86.SIMCODE.NUM_DEL]:      Keyboardx86.SCANCODE.NUM_DEL,

        /**
         * The next 6 entries are for keys that existed only on 101-key keyboards (well, except for SYS_REQ,
         * which also existed on the 84-key keyboard), which ALSO means that these keys essentially did not exist
         * for a MODEL_5150 or MODEL_5160 machine, because those machines could use only 83-key keyboards.  Remember
         * that IBM machines and IBM keyboards are our reference point here, so while there were undoubtedly 5150/5160
         * clones that could use newer keyboards, as well as 3rd-party keyboards that could work with older machines,
         * support for non-IBM configurations is left for another day.
         *
         * TODO: The only relevance of newer keyboards to older machines is the fact that you're probably using a newer
         * keyboard with your browser, which raises the question of what to do with newer keys that older machines
         * wouldn't understand.  I don't attempt to filter out any of the entries below based on machine model, but that
         * would seem like a wise thing to do.
         *
         * TODO: Add entries for 'num-mul', 'num-div', 'num-enter', the stand-alone arrow keys, etc, AND at the same time,
         * make sure that keys with multi-byte sequences (eg, 0xe0 0x1c) work properly.
         */
        [Keyboardx86.SIMCODE.SYS_REQ]:      Keyboardx86.SCANCODE.SYS_REQ,
        [Keyboardx86.SIMCODE.F11]:          Keyboardx86.SCANCODE.F11,
        [Keyboardx86.SIMCODE.F12]:          Keyboardx86.SCANCODE.F12,
        [Keyboardx86.SIMCODE.CMD]:          Keyboardx86.SCANCODE.WIN,
        [Keyboardx86.SIMCODE.RCMD]:         Keyboardx86.SCANCODE.MENU,
        [Keyboardx86.SIMCODE.FF_CMD]:       Keyboardx86.SCANCODE.WIN,

        [Keyboardx86.SIMCODE.SHIFT_TAB]:    Keyboardx86.SCANCODE.TAB | (Keyboardx86.SCANCODE.SHIFT << 8),

        [Keyboardx86.SIMCODE.CTRL_A]:       Keyboardx86.SCANCODE.A           | (Keyboardx86.SCANCODE.CTRL << 8),
        [Keyboardx86.SIMCODE.CTRL_B]:       Keyboardx86.SCANCODE.B           | (Keyboardx86.SCANCODE.CTRL << 8),
        [Keyboardx86.SIMCODE.CTRL_C]:       Keyboardx86.SCANCODE.C           | (Keyboardx86.SCANCODE.CTRL << 8),
        [Keyboardx86.SIMCODE.CTRL_D]:       Keyboardx86.SCANCODE.D           | (Keyboardx86.SCANCODE.CTRL << 8),
        [Keyboardx86.SIMCODE.CTRL_E]:       Keyboardx86.SCANCODE.E           | (Keyboardx86.SCANCODE.CTRL << 8),
        [Keyboardx86.SIMCODE.CTRL_F]:       Keyboardx86.SCANCODE.F           | (Keyboardx86.SCANCODE.CTRL << 8),
        [Keyboardx86.SIMCODE.CTRL_G]:       Keyboardx86.SCANCODE.G           | (Keyboardx86.SCANCODE.CTRL << 8),
        [Keyboardx86.SIMCODE.CTRL_H]:       Keyboardx86.SCANCODE.H           | (Keyboardx86.SCANCODE.CTRL << 8),
        [Keyboardx86.SIMCODE.CTRL_I]:       Keyboardx86.SCANCODE.I           | (Keyboardx86.SCANCODE.CTRL << 8),
        [Keyboardx86.SIMCODE.CTRL_J]:       Keyboardx86.SCANCODE.J           | (Keyboardx86.SCANCODE.CTRL << 8),
        [Keyboardx86.SIMCODE.CTRL_K]:       Keyboardx86.SCANCODE.K           | (Keyboardx86.SCANCODE.CTRL << 8),
        [Keyboardx86.SIMCODE.CTRL_L]:       Keyboardx86.SCANCODE.L           | (Keyboardx86.SCANCODE.CTRL << 8),
        [Keyboardx86.SIMCODE.CTRL_M]:       Keyboardx86.SCANCODE.M           | (Keyboardx86.SCANCODE.CTRL << 8),
        [Keyboardx86.SIMCODE.CTRL_N]:       Keyboardx86.SCANCODE.N           | (Keyboardx86.SCANCODE.CTRL << 8),
        [Keyboardx86.SIMCODE.CTRL_O]:       Keyboardx86.SCANCODE.O           | (Keyboardx86.SCANCODE.CTRL << 8),
        [Keyboardx86.SIMCODE.CTRL_P]:       Keyboardx86.SCANCODE.P           | (Keyboardx86.SCANCODE.CTRL << 8),
        [Keyboardx86.SIMCODE.CTRL_Q]:       Keyboardx86.SCANCODE.Q           | (Keyboardx86.SCANCODE.CTRL << 8),
        [Keyboardx86.SIMCODE.CTRL_R]:       Keyboardx86.SCANCODE.R           | (Keyboardx86.SCANCODE.CTRL << 8),
        [Keyboardx86.SIMCODE.CTRL_S]:       Keyboardx86.SCANCODE.S           | (Keyboardx86.SCANCODE.CTRL << 8),
        [Keyboardx86.SIMCODE.CTRL_T]:       Keyboardx86.SCANCODE.T           | (Keyboardx86.SCANCODE.CTRL << 8),
        [Keyboardx86.SIMCODE.CTRL_U]:       Keyboardx86.SCANCODE.U           | (Keyboardx86.SCANCODE.CTRL << 8),
        [Keyboardx86.SIMCODE.CTRL_V]:       Keyboardx86.SCANCODE.V           | (Keyboardx86.SCANCODE.CTRL << 8),
        [Keyboardx86.SIMCODE.CTRL_W]:       Keyboardx86.SCANCODE.W           | (Keyboardx86.SCANCODE.CTRL << 8),
        [Keyboardx86.SIMCODE.CTRL_X]:       Keyboardx86.SCANCODE.X           | (Keyboardx86.SCANCODE.CTRL << 8),
        [Keyboardx86.SIMCODE.CTRL_Y]:       Keyboardx86.SCANCODE.Y           | (Keyboardx86.SCANCODE.CTRL << 8),
        [Keyboardx86.SIMCODE.CTRL_Z]:       Keyboardx86.SCANCODE.Z           | (Keyboardx86.SCANCODE.CTRL << 8),
        [Keyboardx86.SIMCODE.CTRL_BREAK]:   Keyboardx86.SCANCODE.SCROLL_LOCK | (Keyboardx86.SCANCODE.CTRL << 8),

        [Keyboardx86.SIMCODE.CTRL_ALT_DEL]:     Keyboardx86.SCANCODE.NUM_DEL | (Keyboardx86.SCANCODE.CTRL << 8) | (Keyboardx86.SCANCODE.ALT << 16),
        [Keyboardx86.SIMCODE.CTRL_ALT_INS]:     Keyboardx86.SCANCODE.NUM_INS | (Keyboardx86.SCANCODE.CTRL << 8) | (Keyboardx86.SCANCODE.ALT << 16),
        [Keyboardx86.SIMCODE.CTRL_ALT_ADD]:     Keyboardx86.SCANCODE.NUM_ADD | (Keyboardx86.SCANCODE.CTRL << 8) | (Keyboardx86.SCANCODE.ALT << 16),
        [Keyboardx86.SIMCODE.CTRL_ALT_SUB]:     Keyboardx86.SCANCODE.NUM_SUB | (Keyboardx86.SCANCODE.CTRL << 8) | (Keyboardx86.SCANCODE.ALT << 16),
        [Keyboardx86.SIMCODE.CTRL_ALT_ENTER]:   Keyboardx86.SCANCODE.ENTER   | (Keyboardx86.SCANCODE.CTRL << 8) | (Keyboardx86.SCANCODE.ALT << 16),
        [Keyboardx86.SIMCODE.CTRL_ALT_SYS_REQ]: Keyboardx86.SCANCODE.SYS_REQ | (Keyboardx86.SCANCODE.CTRL << 8) | (Keyboardx86.SCANCODE.ALT << 16)
    };

    /**
     * Keyboardx86(parmsKbd)
     *
     * The Keyboard component can be configured with the following (parmsKbd) properties:
     *
     *      model: keyboard model string, which must match one of the values listed in Keyboardx86.MODELS:
     *
     *          "US83" (default)
     *          "US84"
     *          "US101" (not fully supported yet)
     *
     *      autoType: string of keys to automatically inject when the machine is ready (undefined if none)
     *
     *      softKeys: boolean set to true to enable the machine's soft keyboard, if any (default is false)
     *
     * Its main purpose is to receive binding requests for various keyboard events, and to use those events
     * to simulate the PC's keyboard hardware.
     *
     * TODO: Consider finishing 101-key keyboard support, even though that's sort of a "PS/2" thing, and I'm not
     * really interested in taking PCjs into the PS/2 line (that's also why we still support only serial mice, not
     * "PS/2" mice).  In addition, all keyboards *after* the original PC 83-key keyboard supported their own unique
     * scan code sets, which the 8042 controller would then convert to PC-compatible scan codes.  That's probably
     * more important to implement, because that feature was introduced with the 84-key keyboard on the PC AT.
     *
     * @this {Keyboardx86}
     * @param {Object} parmsKbd
     */
    constructor(parmsKbd)
    {
        super("Keyboard", parmsKbd, MESSAGE.KBD);

        this.setModel(parmsKbd['model']);

        this.fMobile = WebLib.isMobile("!iPad");
        this.printf("mobile keyboard support: %b\n", this.fMobile);

        /**
         * This flag (formerly fMSIE, for all versions of Microsoft Internet Explorer, up to and including v11)
         * has been updated to reflect the Microsoft Windows *platform* rather than the *browser*, because it appears
         * that all Windows-based browsers (at least now, as of 2018) have the same behavior with respect to "lock"
         * keys: keys like CAPS-LOCK generate both UP and DOWN events on every press.  On other platforms (eg, macOS),
         * those keys generate only a DOWN event when "locking" and only an UP event when "unlocking".
         */
        this.fMSWindows = WebLib.isUserAgent("Windows");

        /**
         * This is count of the number of "soft keyboard" keys present.  At the moment, its only
         * purpose is to signal findBinding() whether to waste any time looking for SOFTCODE matches.
         */
        this.cSoftCodes = 0;
        this.fSoftKeyboard = parmsKbd['softKeys'];
        this.controlSoftKeyboard = null;
        this.controlTextKeyboard = null;

        /**
         * Updated by onFocusChange()
         */
        this.fHasFocus = true;

        /**
         * This can be used to delay ALT key generation (ie, until some other key in conjunction with the
         * ALT is pressed as well); however, it is currently off by default, because there are apps (eg, the
         * MS-DOS Manager) that don't deal well the rapid back-to-back ALT+key generation that this work-around
         * necessitates.
         */
        this.fDelayALT = false;

        /**
         * This is true whenever the physical Escape key is disabled (eg, by pointer locking code),
         * giving us the opportunity to map a different physical key to machine's virtual Escape key.
         */
        this.fEscapeDisabled = false;

        /**
         * This is set whenever we notice a discrepancy between our internal CAPS_LOCK state and its
         * apparent state; we check whenever aKeysActive has been emptied.
         */
        this.fToggleCapsLock = false;

        /**
         * New unified approach to key event processing: When we process a key on the "down" event,
         * we check the aKeysActive array: if the key is already active, do nothing; otherwise, insert
         * it into the table, generate the "make" scan code(s), and set a timeout for "repeat" if it's
         * a repeatable key (most are).
         *
         * Similarly, when a key goes "up", if it's already not active, do nothing; otherwise, generate
         * the "break" scan code(s), cancel any pending timeout, and remove it from the active key table.
         *
         * If a "press" event is received, then if the key is already active, remove it and (re)insert
         * it at the head of the table, generate the "make" scan code(s), set nRepeat to -1, and set a
         * timeout for "break".
         *
         * This requires an aKeysActive array that keeps track of the status of every active key; only the
         * first entry in the array is allowed to repeat.  Each entry is a key object with the following
         * properties:
         *
         *      simCode:    our simulated keyCode from onKeyActive or onKeyPress
         *      bitsState:  snapshot of the current bitsState when the key is added (currently not used)
         *      fDown:      next state to simulate (true for down, false for up)
         *      nRepeat:    > 0 if timer should generate more "make" scan code(s), -1 for "break" scan code(s)
         *      timer:      timer for next key operation, if any
         *
         * Keys are inserted at the head of aKeysActive, using splice(0, 0, key), but not before zeroing
         * nRepeat of any repeating key that already occupies the head (index 0), so that at most only one
         * key (ie, the most recent) will ever be in a repeating state.
         *
         * IBM PC keyboard repeat behavior: when pressing CTRL, then C, and then releasing CTRL while still
         * holding C, the repeated CTRL_C characters turn into 'c' characters.  We emulate that behavior.
         * However, when pressing C, then CTRL, all repeating stops: not a single CTRL_C is generated, and
         * even if the CTRL is released before the C, no more more 'c' characters are generated either.
         * We do NOT fully emulate that behavior -- we DO stop the repeating, but we also generate one CTRL_C.
         * More investigation is required, because I need to confirm whether the IBM keyboard automatically
         * "breaks" all non-shift keys before it "makes" the CTRL.
         */
        this.aKeysActive = [];

        /**
         * msTransmit was originally 10ms, but I was getting some warning "beeps" in this machine:
         *
         *      /devices/pcx86/machine/5170/ega/2048kb/rev3/debugger/machine.xml
         *
         * while typing very fast, so I bumped it to 15ms. Then the COMPAQ Portable BIOS required another bump to 25ms.
         */
        this.msTransmit      = 25;          // minimum number of milliseconds between data transmissions
        this.msAutoRepeat    = 500;
        this.msNextRepeat    = 100;
        this.msAutoRelease   = 50;
        this.msInjectDefault = 100;         // number of milliseconds between injected keystrokes
        this.msInjectDelay   = 0;           // set by the initial injectKeys() call
        this.msDoubleClick   = 250;         // used by mousedown/mouseup handlers to soft-lock modifier keys
        this.cKeysPressed    = 0;           // count of keys pressed since the last time it was reset
        this.softCodeKeys    = Object.keys(Keyboardx86.SOFTCODES);

        /**
         * Remove all single-character SOFTCODE keys from the softCodeKeys array, because those SOFTCODES
         * are not supported by injectKeys(); they can be specified normally using their single-character identity.
         */
        for (let i = 0; i < this.softCodeKeys.length; i++) {
            if (this.softCodeKeys[i].length < 2) {
                this.softCodeKeys.splice(i, 1);
                i--;
            }
        }

        /**
         * autoType records the machine's specified autoType sequence, if any, and when injectInit() is called
         * with the appropriate INJECTION signal, injectInit() pass autoType to injectKeys().
         */
        this.autoType = parmsKbd['autoType'];
        this.fDOSReady = false;
        this.fnDOSReady = this.fnInjectReady = null;
        this.nInjection = Keyboardx86.INJECTION.ON_INPUT;

        /**
         * HACK: We set fAllDown to false to ignore all down/up events for keys not explicitly marked as ONDOWN;
         * even though that prevents those keys from being repeated properly (ie, at the simulation's repeat rate
         * rather than the browser's repeat rate), it's the safest thing to do when dealing with international keyboards,
         * because our mapping tables are designed for US keyboards, and testing all the permutations of international
         * keyboards and web browsers is more work than I can take on right now.  TODO: Dig into this some day.
         */
        this.fAllDown = false;

        this['exports'] = {
            'type':         this.injectKeys,
            'wait':         this.waitReady
        };

        this.setReady();
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * @this {Keyboardx86}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea", "canvas")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "esc")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        let kbd = this;
        let className;
        let id = sHTMLType + '-' + sBinding, sCode;
        let controlText = /** @type {HTMLTextAreaElement} */ (control);

        if (this.bindings[id] === undefined) {
            switch (sBinding) {
            case "keys":
            case "keyboard":
                try {
                    let controlSoftKeyboard = document.getElementById(this.idMachine + ".soft-keyboard" + (this.fMobile? "-mobile" : ""));
                    if (!controlSoftKeyboard) {
                        /**
                         * TODO: Fix this rather fragile code, which depends on the current structure of the given xxxx-softkeys.xml
                         */
                        controlSoftKeyboard = control.parentElement.parentElement.nextElementSibling;
                        className = controlSoftKeyboard.className;
                        if (this.fMobile != (className.indexOf('mobile') >= 0)) {
                            controlSoftKeyboard = controlSoftKeyboard.nextElementSibling;
                        }
                    }
                    if (controlSoftKeyboard) {
                        this.controlSoftKeyboard = controlSoftKeyboard;
                        if (this.fSoftKeyboard != null) {
                            this.enableSoftKeyboard(this.fSoftKeyboard);
                        } else {
                            let style = getComputedStyle(controlSoftKeyboard);
                            this.fSoftKeyboard = (style.display != "none");
                        }
                        control.onclick = function onToggleKeyboard(event) {
                            kbd.enableSoftKeyboard(!kbd.fSoftKeyboard);
                        };
                        /**
                         * This is added simply to prevent the page from "zooming" around if you accidentally touch between the keys.
                         */
                        if ('ontouchstart' in window) {
                            controlSoftKeyboard.ontouchstart = function onTouchKeyboard(event) {
                                event.preventDefault();
                            };
                        }
                    }
                } catch(err) {}
                return true;

            case "screen":
                /**
                 * This is a special binding that the Video component uses to effectively bind its screen to the
                 * entire keyboard; eg:
                 *
                 *      this.kbd.setBinding(this.inputTextArea? "textarea" : "canvas", "screen", this.inputScreen);
                 *
                 * Recording the binding ID prevents multiple controls (or components) from attempting to erroneously
                 * bind a control to the same ID, but in the case of a "dual display" configuration, we actually want
                 * to allow BOTH video components to call setBinding() for "screen", so that it doesn't matter which
                 * display the user gives focus to.
                 *
                 *      this.bindings[id] = control;
                 */
                if (sHTMLType == "textarea" && !WebLib.isUserAgent("iPhone")) {
                    this.controlTextKeyboard = controlText;
                    this.controlTextKeyboard.addEventListener(
                        'copy',
                        function onKeyCopy(event) {
                            kbd.onCopy(event);
                        }
                    );
                    this.controlTextKeyboard.addEventListener(
                        'cut',
                        function onKeyCut(event) {
                            kbd.onCut(event);
                        }
                    );
                    this.controlTextKeyboard.addEventListener(
                        'paste',
                        function onKeyPaste(event) {
                            kbd.onPaste(event);
                        }
                    );
                }
                controlText.onkeydown = function onKeyDown(event) {
                    return kbd.onKeyActive(event, true);
                };
                controlText.onkeypress = function onKeyPress(event) {
                    return kbd.onKeyPress(event);
                };
                controlText.onkeyup = function onKeyUp(event) {
                    return kbd.onKeyActive(event, false);
                };
                return true;

            case "caps-lock":
                if (sHTMLType == 'led') {
                    this.bindings[id] = control;
                    control.onclick = function onClickCapsLock(event) {
                        kbd.updateFocus(event);
                        return kbd.toggleCapsLock();
                    };
                    return true;
                }
                /* falls through */

            case "num-lock":
                if (sHTMLType == 'led') {
                    this.bindings[id] = control;
                    control.onclick = function onClickNumLock(event) {
                        kbd.updateFocus(event);
                        return kbd.toggleNumLock();
                    };
                    return true;
                }
                /* falls through */

            case "scroll-lock":
                if (sHTMLType == 'led') {
                    this.bindings[id] = control;
                    control.onclick = function onClickScrollLock(event) {
                        kbd.updateFocus(event);
                        return kbd.toggleScrollLock();
                    };
                    return true;
                }
                /* falls through */

            default:
                /**
                 * Maintain support for older button codes; eg, map button code "ctrl-c" to CLICKCODE "CTRL_C"
                 */
                sCode = sBinding.toUpperCase().replace(/-/g, '_');
                if (Keyboardx86.CLICKCODES[sCode] !== undefined && sHTMLType == "button") {
                    this.bindings[id] = controlText;
                    if (MAXDEBUG) this.printf(MESSAGE.LOG, "binding click-code '%s'\n", sCode);
                    controlText.onclick = function(kbd, sKey, simCode) {
                        return function onKeyboardBindingClick(event) {
                            kbd.printf(MESSAGE.EVENT + MESSAGE.KEY, "%s clicked\n", sKey);
                            kbd.updateFocus(event);
                            kbd.sInjectBuffer = "";                 // key events should stop any injection currently in progress
                            kbd.updateShiftState(simCode, true);    // future-proofing if/when any LOCK keys are added to CLICKCODES
                            kbd.addActiveKey(simCode, true);
                        };
                    }(this, sCode, Keyboardx86.CLICKCODES[sCode]);
                    return true;
                }
                else if (Keyboardx86.SOFTCODES[sBinding] !== undefined) {
                    /**
                     * TODO: Fix this rather fragile code, which depends on the current structure of the given xxxx-softkeys.xml
                     */
                    className = control.parentElement.parentElement.className;
                    if (className && this.fMobile != (className.indexOf('mobile') >= 0)) {
                        break;
                    }
                    this.cSoftCodes++;
                    this.bindings[id] = controlText;
                    if (MAXDEBUG) this.printf(MESSAGE.LOG, "binding soft-code '%s'\n", sBinding);
                    let msLastEvent = 0, nClickState = 0;
                    let fStateKey = (Keyboardx86.KEYSTATES[Keyboardx86.SOFTCODES[sBinding]] <= Keyboardx86.STATE.ALL_MODIFIERS);
                    let fnDown = function(kbd, sKey, simCode) {
                        return function onKeyboardBindingDown(event) {
                            let msDelta = event.timeStamp - msLastEvent;
                            nClickState = (nClickState && msDelta < kbd.msDoubleClick? (nClickState << 1) : 1);
                            msLastEvent = event.timeStamp;
                            event.preventDefault();                 // preventDefault() is necessary to avoid "zooming" when you type rapidly
                            kbd.sInjectBuffer = "";                 // key events should stop any injection currently in progress
                            kbd.addActiveKey(simCode);
                        };
                    }(this, sBinding, Keyboardx86.SOFTCODES[sBinding]);
                    let fnUp = function(kbd, sKey, simCode) {
                        return function onKeyboardBindingUp(event) {
                            if (nClickState) {
                                let msDelta = event.timeStamp - msLastEvent;
                                nClickState = (fStateKey && msDelta < kbd.msDoubleClick? (nClickState << 1) : 0);
                                msLastEvent = event.timeStamp;
                                if (nClickState < 8) {
                                    kbd.removeActiveKey(simCode);
                                } else {
                                    if (MAXDEBUG) this.printf(MESSAGE.LOG, "soft-locking '%s'\n", sBinding);
                                    nClickState = 0;
                                }
                            }
                        };
                    }(this, sBinding, Keyboardx86.SOFTCODES[sBinding]);
                    if ('ontouchstart' in window) {
                        controlText.ontouchstart = fnDown;
                        controlText.ontouchend = fnUp;
                    } else {
                        controlText.onmousedown = fnDown;
                        controlText.onmouseup = controlText.onmouseout = fnUp;
                    }
                    return true;
                }
                else if (sValue) {
                    /**
                     * Instead of just having a dedicated "test" control, we now treat any unrecognized control with
                     * a "value" attribute as a test control.  The only caveat is that such controls must have binding IDs
                     * that do not conflict with predefined controls (which, of course, is the only way you can get here).
                     */
                    this.bindings[id] = control;
                    control.onclick = function onClickTest(event) {
                        kbd.updateFocus(event);
                        return kbd.injectKeys(sValue);
                    };
                    return true;
                }
                break;
            }
        }
        return false;
    }

    /**
     * updateFocus(event)
     *
     * Keyboard control event focus helper.
     *
     * @this {Keyboardx86}
     * @param {Object} event
     */
    updateFocus(event)
    {
        event.preventDefault();     // preventDefault() is necessary for the updateFocus() call to work
        if (!this.fSoftKeyboard && this.cmp) this.cmp.updateFocus();
    }

    /**
     * findBinding(simCode, sType, fDown)
     *
     * TODO: This function is woefully inefficient, because the SOFTCODES table is designed for converting
     * soft key presses into SIMCODES, whereas this function is doing the reverse: looking for the soft key,
     * if any, that corresponds to a SIMCODE, simply so we can provide visual feedback of keys activated
     * by other means (eg, real keyboard events, button clicks that generate key sequences like CTRL-ALT-DEL,
     * etc).
     *
     * To minimize this function's cost, we would want to dynamically create a reverse-lookup table after
     * all the setBinding() calls for the soft keys have been established; note that the reverse-lookup table
     * would contain MORE entries than the SOFTCODES table, because there are multiple simCodes that correspond
     * to a given soft key (eg, '1' and '!' both map to the same soft key).
     *
     * @this {Keyboardx86}
     * @param {number} simCode
     * @param {string} sType is the type of control (eg, "button" or "key")
     * @param {boolean} [fDown] is true if the key is going down, false if up, or undefined if unchanged
     * @returns {Object} is the HTML control DOM object (eg, HTMLButtonElement), or undefined if no such control exists
     */
    findBinding(simCode, sType, fDown)
    {
        let control;
        if (this.cSoftCodes && this.fSoftKeyboard) {
            for (let code in Keys.SHIFTED_KEYCODES) {
                if (simCode == Keys.SHIFTED_KEYCODES[code]) {
                    simCode = +code;
                    code = Keys.NONASCII_KEYCODES[code];
                    if (code) simCode = +code;
                    break;
                }
            }
            /**
             * TODO: Create a table that maps these SIMCODEs to the corresponding entries in the SOFTCODES table;
             * these SIMCODEs can be generated by CLICKCODEs or by the special key remapping HACKs in onKeyActive().
             */
            if (simCode == Keyboardx86.SIMCODE.CTRL_PAUSE) {
                simCode = Keyboardx86.SIMCODE.NUM_LOCK;
            }
            else if (simCode == Keyboardx86.SIMCODE.CTRL_BREAK) {
                simCode = Keyboardx86.SIMCODE.SCROLL_LOCK;
            }
            else if (simCode == Keyboardx86.SIMCODE.CTRL_ALT_DEL) {
                simCode = Keyboardx86.SIMCODE.DEL;
            }
            else if (simCode == Keyboardx86.SIMCODE.CTRL_ALT_INS) {
                simCode = Keyboardx86.SIMCODE.INS;
            }
            else if (simCode == Keyboardx86.SIMCODE.CTRL_ALT_ADD) {
                simCode = Keyboardx86.SIMCODE.NUM_ADD;
            }
            else if (simCode == Keyboardx86.SIMCODE.CTRL_ALT_SUB) {
                simCode = Keyboardx86.SIMCODE.NUM_SUB;
            }
            else if (simCode == Keyboardx86.SIMCODE.CTRL_ALT_SYS_REQ) {
                simCode = Keyboardx86.SIMCODE.SYS_REQ;
            }
            for (let sBinding in Keyboardx86.SOFTCODES) {
                if (Keyboardx86.SOFTCODES[sBinding] == simCode || Keyboardx86.SOFTCODES[sBinding] == this.toUpperKey(simCode)) {
                    let id = sType + '-' + sBinding;
                    control = this.bindings[id];
                    if (control && fDown !== undefined) {
                        this.setSoftKeyState(control, fDown);
                    }
                    break;
                }
            }
        }
        return control;
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {Keyboardx86}
     * @param {Computer} cmp
     * @param {Busx86} bus
     * @param {CPUx86} cpu
     * @param {Debuggerx86} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.cmp = cmp;
        this.bus = bus;
        this.cpu = cpu;
        this.dbg = dbg;

        let kbd = this;
        this.timerInject = this.cpu.addTimer(this.id + ".inject", function injectKeysTimer() {
            kbd.injectKeys();
        });

        this.timerTransmit = this.cpu.addTimer(this.id + ".transmit", function transmitDataTimer() {
            kbd.transmitData();
        });

        this.chipset = cmp.getMachineComponent("ChipSet");
        this.autoType = cmp.getMachineParm('autoType') || this.autoType;

        let softKeys = cmp.getMachineParm('softKeys');
        if (softKeys) this.enableSoftKeyboard(softKeys != "false");

        this.video = cmp.getMachineComponent("Video");
        cpu.addIntNotify(Interrupts.DOS, this.intDOS.bind(this));
    }

    /**
     * start()
     *
     * Notification from the Computer that it's starting.
     *
     * We take advantage of the fact that this notification occurs AFTER the Computer component has disabled the
     * textarea overlay for diagnostic purposes; we must partially "re-enable" it in order for the browser to send
     * us "paste" events.  In particular, while setting lineHeight to zero was a good way to ensure the textarea
     * was completely invisible (as well as disabling any blinking cursor/caret whenever the textarea had focus),
     * it turns out that lineHeight must NOT be zero to allow paste events.  Obvious, eh?  We can only hope that the
     * textarea still remains invisible in all browsers, largely by virtue of its opacity having been set to zero
     * when diagnostic display was disabled.  In addition, we must select all the diagnostic text still residing
     * in the textarea so that we'll receive "copy" events.
     *
     * I tried setting lineHeight on-demand (eg, inside an "oncontextmenu" event handler), but that was too late,
     * at least for the first time you right-clicked.  And that wouldn't have helped with paste events triggered by
     * keyboard shortcut (eg, Cmd+V), or with machines where mouse events were being captured as well.
     *
     * @this {Keyboardx86}
     */
    start()
    {
        if (this.controlTextKeyboard) {
            this.controlTextKeyboard.style.lineHeight = "normal";
            this.controlTextKeyboard.focus();
            this.controlTextKeyboard.select();
        }
        this.injectInit(Keyboardx86.INJECTION.ON_START);
    }

    /**
     * intDOS()
     *
     * Monitors selected DOS interrupts for signals to initialize 'autoType' injection.
     *
     * @this {Keyboardx86}
     * @param {number} addr
     * @returns {boolean} true to proceed with the INT 0x21 software interrupt, false to skip
     */
    intDOS(addr)
    {
        let AH = (this.cpu.regEAX >> 8) & 0xff;
        this.fDOSReady = false;
        if (AH == 0x0A) {
            this.fDOSReady = true;
            if (this.fnDOSReady) {
                this.fnDOSReady();
                this.fnDOSReady = null;
            } else {
                this.injectInit(Keyboardx86.INJECTION.ON_INPUT);
            }
        }
        return true;
    }

    /**
     * notifyEscape(fDisabled, fAllDown)
     *
     * When ESC is used by the browser to disable pointer lock, this gives us the option of mapping a different key to ESC.
     *
     * @this {Keyboardx86}
     * @param {boolean} fDisabled
     * @param {boolean} [fAllDown] (an experimental option to re-enable processing of all onkeydown/onkeyup events)
     */
    notifyEscape(fDisabled, fAllDown)
    {
        this.fEscapeDisabled = fDisabled;
        if (fAllDown !== undefined) this.fAllDown = fAllDown;
    }

    /**
     * resetDevice()
     *
     * @this {Keyboardx86}
     */
    resetDevice()
    {
        /**
         * TODO: There's more to reset, like LED indicators, default type rate, and emptying the scan code buffer.
         */
        this.printf(MESSAGE.KBD + MESSAGE.PORT, "keyboard reset\n");
        this.abBuffer = [];
        this.setResponse(Keyboardx86.CMDRES.BAT_OK);
    }

    /**
     * setModel(sModel)
     *
     * This breaks a model string (eg, "US83") into two parts: modelCountry (eg, "US") and modelKeys (eg, 83).
     * If the model string isn't recognized, we use Keyboardx86.MODELS[0] (ie, the first entry in the model array).
     *
     * @this {Keyboardx86}
     * @param {string|undefined} sModel
     */
    setModel(sModel)
    {
        let iModel = 0;
        this.model = null;
        if (typeof sModel == "string") {
            this.model = sModel.toUpperCase();
            iModel = Keyboardx86.MODELS.indexOf(this.model);
            if (iModel < 0) iModel = 0;
        }
        sModel = Keyboardx86.MODELS[iModel];
        if (sModel) {
            this.modelCountry = sModel.substr(0, 2);
            this.modelKeys = parseInt(sModel.substr(2), 10);
        }
    }

    /**
     * checkBuffer(b)
     *
     * This is the ChipSet's interface to let us know it's ready.
     *
     * @this {Keyboardx86}
     * @param {number} [b] (set to the data, if any, that the ChipSet just delivered)
     */
    checkBuffer(b)
    {
        let fReady = false;
        if (b) {
            /**
             * The following hack is for the 5170 ROM BIOS keyboard diagnostic, which expects the keyboard
             * to report BAT_OK immediately after the ACK from a RESET command.  The BAT_OK response should already
             * be in the keyboard's buffer; we just need to give it a little nudge.
             */
            if (b == Keyboardx86.CMDRES.ACK) {
                fReady = true;
            }
            if (this.cpu) {
                this.cpu.setTimer(this.timerTransmit, this.msTransmit, true);
            }
        }
        this.transmitData(fReady);
    }

    /**
     * flushBuffer()
     *
     * This is the ChipSet's interface to flush any buffered keyboard data.
     *
     * @this {Keyboardx86}
     */
    flushBuffer()
    {
        this.abBuffer = [];
        if (!COMPILED) this.printf("keyboard data flushed\n");
    }

    /**
     * receiveCmd(bCmd)
     *
     * This is the ChipSet's interface for controlling "Model M" keyboards (ie, those used with MODEL_5170
     * machines).  Commands are delivered through the ChipSet's 8042 Keyboard Controller.
     *
     * @this {Keyboardx86}
     * @param {number} bCmd should be one of the Keyboardx86.CMD.* command codes (Model M keyboards only)
     * @returns {number} response should be one of the Keyboardx86.CMDRES.* response codes, or -1 if unrecognized
     */
    receiveCmd(bCmd)
    {
        let b = -1;

        if (!COMPILED) this.printf("receiveCmd(%#04X)\n", this.bCmdPending || bCmd);

        switch(this.bCmdPending || bCmd) {

        case Keyboardx86.CMD.RESET:              // 0xFF
            b = Keyboardx86.CMDRES.ACK;
            this.resetDevice();
            break;

        case Keyboardx86.CMD.SET_RATE:           // 0xF3
            if (this.bCmdPending) {
                this.setRate(bCmd);
                bCmd = 0;
            }
            this.setResponse(Keyboardx86.CMDRES.ACK);
            this.bCmdPending = bCmd;
            break;

        case Keyboardx86.CMD.SET_LEDS:           // 0xED
            if (this.bCmdPending) {
                this.setLEDs(bCmd);
                bCmd = 0;
            }
            this.setResponse(Keyboardx86.CMDRES.ACK);
            this.bCmdPending = bCmd;
            break;

        default:
            if (!COMPILED) this.printf("receiveCmd(): unrecognized command\n");
            break;
        }

        return b;
    }

    /**
     * setEnabled(fData, fClock)
     *
     * This is the ChipSet's interface for toggling keyboard "data" and "clock" lines.
     *
     * For MODEL_5150 and MODEL_5160 machines, this function is called from the ChipSet's PPI_B
     * output handler.  For MODEL_5170 machines, this function is called when selected CMD
     * "data bytes" have been written.
     *
     * @this {Keyboardx86}
     * @param {boolean} fData is true if the keyboard simulated data line should be enabled
     * @param {boolean} fClock is true if the keyboard's simulated clock line should be enabled
     * @returns {boolean} true if keyboard was re-enabled, false if not (or no change)
     */
    setEnabled(fData, fClock)
    {
        let fReset = false;
        if (this.fClock !== fClock) {
            if (!COMPILED) this.printf(MESSAGE.KBD + MESSAGE.PORT, "keyboard clock line changing to %b\n", fClock);
            /**
             * Toggling the clock line low and then high signals a "reset", which we acknowledge once the
             * data line is high as well.
             */
            this.fClock = this.fResetOnEnable = fClock;
        }
        if (this.fData !== fData) {
            if (!COMPILED) this.printf(MESSAGE.KBD + MESSAGE.PORT, "keyboard data line changing to %b\n", fData);
            this.fData = fData;
            if (fData && !this.fResetOnEnable) {
                this.transmitData(true);
            }
        }
        if (this.fData && this.fResetOnEnable) {
            this.resetDevice();
            this.fResetOnEnable = false;
            fReset = true;
        }
        return fReset;
    }

    /**
     * setLEDs(b)
     *
     * This processes the option byte received after a SET_LEDS command byte.
     *
     * @this {Keyboardx86}
     * @param {number} b
     */
    setLEDs(b)
    {
        this.bLEDs = b;             // TODO: Implement
    }

    /**
     * setRate(b)
     *
     * This processes the rate parameter byte received after a SET_RATE command byte.
     *
     * @this {Keyboardx86}
     * @param {number} b
     */
    setRate(b)
    {
        this.bRate = b;             // TODO: Implement
    }

    /**
     * setResponse(b)
     *
     * @this {Keyboardx86}
     * @param {number} b
     */
    setResponse(b)
    {
        if (this.chipset) {
            this.abBuffer.unshift(b);
            if (!COMPILED) this.printf("keyboard response %#04X buffered\n", b);
            this.transmitData();
        }
    }

    /**
     * transmitData(fReady)
     *
     * This manages communication with the ChipSet's receiveKbdData() interface.
     *
     * @this {Keyboardx86}
     * @param {boolean} [fReady]
     */
    transmitData(fReady)
    {
        if (this.chipset) {
            if (fReady || !this.cpu.isTimerSet(this.timerTransmit)) {
                /**
                 * The original IBM PC BIOS performs a "stuck key" test by resetting the keyboard
                 * (by toggling the CLOCK line), then checking for a BAT_OK response (0xAA), and then
                 * clocking in the next byte (by toggling the DATA line); if that next byte isn't 0x00,
                 * then the BIOS reports a "301" error, along with "AA" if we failed to properly flush
                 * the BAT_OK response.
                 */
                let b = this.abBuffer.length? this.abBuffer[0] : 0;
                if (this.chipset.receiveKbdData(b)) {
                    if (!COMPILED) this.printf("keyboard data %#04X delivered\n", b);
                    this.abBuffer.shift();
                }
                if (b) this.cpu.setTimer(this.timerTransmit, this.msTransmit);
            }
        }
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {Keyboardx86}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) {
            /**
             * TODO: Save/restore support for Keyboard is the barest minimum.  In fact, originally, I wasn't
             * saving/restoring anything, and that was OK, but if we don't at least re-initialize fClock/fData,
             * we can get a spurious reset following a restore.  In an ideal world, we might choose to save/restore
             * abBuffer as well, but realistically, I think it's going to be safer to always start with an
             * empty buffer--and who's going to notice anyway?
             *
             * So, like Debugger, we deviate from the typical save/restore pattern: instead of reset OR restore,
             * we always reset and then perform a (very limited) restore.
             */
            this.reset();
            if (data && this.restore) {
                if (!this.restore(data)) return false;
            }
        }
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {Keyboardx86}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
     */
    powerDown(fSave, fShutdown)
    {
        return fSave? this.save() : true;
    }

    /**
     * reset()
     *
     * @this {Keyboardx86}
     */
    reset()
    {
        /**
         * If no keyboard model was specified, our initial setModel() call will select the "US83" keyboard as the
         * default, but now that the ChipSet is initialized, we can pick a better default, based on the ChipSet model.
         */
        if (!this.model && this.chipset) {
            switch(this.chipset.model) {
            case ChipSet.MODEL_5150:
            case ChipSet.MODEL_5160:
                this.setModel(Keyboardx86.MODELS[0]);
                break;
            case ChipSet.MODEL_5170:
            default:
                this.setModel(Keyboardx86.MODELS[1]);
                break;
            }
        }
        this.initState();
    }

    /**
     * save()
     *
     * This implements save support for the Keyboard component.
     *
     * @this {Keyboardx86}
     * @returns {Object}
     */
    save()
    {
        let state = new State(this);
        state.set(0, this.saveState());
        return state.data();
    }

    /**
     * restore(data)
     *
     * This implements restore support for the Keyboard component.
     *
     * @this {Keyboardx86}
     * @param {Object} data
     * @returns {boolean} true if successful, false if failure
     */
    restore(data)
    {
        return this.initState(data[0]);
    }

    /**
     * initState(data)
     *
     * @this {Keyboardx86}
     * @param {Array} [data]
     * @returns {boolean} true if successful, false if failure
     */
    initState(data)
    {
        if (!data) {
            data = [false, false, Keyboardx86.INJECTION.ON_INPUT];
        } else {
            /**
             * If there is a predefined state for this machine, then the assumption is that any injection
             * sequence can be injected as soon as the machine starts.  Any other kind of state must disable
             * injection, because injection depends on the machine being in a known state.
             */
            data[2] = this.cmp.sStatePath? Keyboardx86.INJECTION.ON_START : (data[2] || Keyboardx86.INJECTION.NONE);
        }

        let i = 0;
        this.fClock = data[i++];
        this.fData = data[i++];
        this.nInjection = data[i++];
        this.sInjectBuffer = data[i++] || "";
        this.msInjectDelay = data[i] || this.msInjectDefault;

        this.bCmdPending = 0;       // when non-zero, a command is pending (eg, SET_LED or SET_RATE)

        /**
         * The current (assumed) physical (and simulated) modifier/lock key states, along with a set
         * of (fake) modifier key states maintained by simulateKey() to keep track of faked modifiers.
         *
         * TODO: Determine how (or whether) we can query the browser's initial shift/lock key states.
         */
        this.bitsState = this.bitsStateSim = this.bitsStateFake = 0;

        /**
         * New scan codes are "pushed" onto abBuffer and then "shifted" off.
         */
        this.abBuffer = [];

        return true;
    }

    /**
     * saveState()
     *
     * @this {Keyboardx86}
     * @returns {Array}
     */
    saveState()
    {
        let data = [], i = 0;
        data[i++] = this.fClock;
        data[i++] = this.fData;
        data[i++] = this.nInjection;
        data[i++] = this.sInjectBuffer;
        data[i] = this.msInjectDelay;
        return data;
    }

    /**
     * enableSoftKeyboard(fEnable)
     *
     * In addition to enabling or disabling our own soft keyboard (if any), this also attempts to disable or enable
     * (as appropriate) the textarea control (if any) that machines use to trigger a touch device's built-in keyboard.
     *
     * @this {Keyboardx86}
     * @param {boolean} fEnable
     */
    enableSoftKeyboard(fEnable)
    {
        if (this.controlSoftKeyboard) {
            if (!fEnable) {
                this.controlSoftKeyboard.style.display = "none";
                if (this.controlTextKeyboard) {
                    this.controlTextKeyboard.readOnly = false;
                }
            } else {
                this.controlSoftKeyboard.style.display = "block";
                if (this.controlTextKeyboard) {
                    this.controlTextKeyboard.readOnly = true;
                }
            }
        }
        this.fSoftKeyboard = fEnable;
    }

    /**
     * setSoftKeyState(control, f)
     *
     * @this {Keyboardx86}
     * @param {HTMLElement} control is an HTML control DOM object
     * @param {boolean} f is true if the key represented by e should be "on", false if "off"
     */
    setSoftKeyState(control, f)
    {
        control.style.color = (f? "#ffffff" : "#000000");
        control.style.backgroundColor = (f? "#000000" : "#ffffff");
    }

    /**
     * addScanCode(bScan)
     *
     * @this {Keyboardx86}
     * @param {number} bScan
     */
    addScanCode(bScan)
    {
        /**
         * Prepare for the possibility that our reset() function may not have been called yet.
         *
         * TODO: Determine whether we need to reset() the Keyboard sooner (ie, in the constructor),
         * or if we need to protect other methods from prematurely accessing certain Keyboard structures,
         * as a result of calls from any of the key event handlers established by setBinding().
         */
        if (this.abBuffer) {
            if (this.abBuffer.length < Keyboardx86.LIMIT.MAX_SCANCODES) {
                if (DESKPRO386) {
                    if (this.chipset && this.chipset.model == ChipSet.MODEL_COMPAQ_DESKPRO386) {
                        /**
                         * COMPAQ keyclick support is being disabled because we are currently unable to properly
                         * simulate the keyclick sound, due to the way the COMPAQ DeskPro 386 ROM rapidly toggles
                         * the speaker bit.  And there isn't really a better time to disable it, because the
                         * COMPAQ_KEYCLICK byte is set by IBMBIO.COM initialization code in COMPAQ MS-DOS, if the
                         * machine model byte is FC (indicating PC AT):
                         *
                         *      &0070:2EF7 2E               CS:
                         *      &0070:2EF8 803E442DFC       CMP      [2D44],FC
                         *      &0070:2EFD 750C             JNZ      2F0B (IBMBIO.COM+0x3174)
                         *      &0070:2EFF 26               ES:
                         *      &0070:2F00 C606160401       MOV      [0416],01
                         */
                        if (!this.cpu.isProtMode()) {
                            this.bus.setByteDirect(ROMx86.BIOS.COMPAQ_KEYCLICK, 0);
                        }
                    }
                }
                this.abBuffer.push(bScan);
                if (!COMPILED) this.printf("keyboard data %#04X buffered\n", bScan);
                this.transmitData();
                return;
            }
            if (this.abBuffer.length == Keyboardx86.LIMIT.MAX_SCANCODES) {
                this.abBuffer.push(Keyboardx86.CMDRES.BUFF_FULL);
            }
            this.printf("keyboard buffer overflow\n");
        }
    }

    /**
     * injectInit(nCondition)
     *
     * @this {Keyboardx86}
     * @param {number} nCondition
     */
    injectInit(nCondition)
    {
        if (this.nInjection == nCondition) {
            this.nInjection = Keyboardx86.INJECTION.NONE;
            if (this.autoType) this.injectKeys(this.autoType);
        }
    }

    /**
     * injectKeys(sKeys, msDelay)
     *
     * @this {Keyboardx86}
     * @param {string} [sKeys] (keys listed in SOFTCODES must be prefixed with '$')
     * @param {number} [msDelay] is an optional injection delay (default is msInjectDefault)
     * @returns {boolean}
     */
    injectKeys(sKeys, msDelay = this.msInjectDefault)
    {
        if (sKeys) {
            let sInjectBuffer = this.parseKeys(sKeys);
            if (sInjectBuffer) {
                this.nInjection = Keyboardx86.INJECTION.NONE;
                this.sInjectBuffer = sInjectBuffer;
                if (DEBUG) this.printf("injectKeys(\"%s\")\n", this.sInjectBuffer.split("\n").join("\\n"));
                this.msInjectDelay = msDelay || 0;
                this.injectKeys();
                return true;
            }
            return false;
        }
        /**
         * Any delay of one second or more ($10 and up) is automatically reverted to the default.
         */
        if (this.msInjectDelay >= 1000) {
            this.msInjectDelay = this.msInjectDefault;
        }
        let simCode = 0;
        while (this.sInjectBuffer.length > 0 && !simCode) {
            let ch = this.sInjectBuffer.charAt(0);
            if (ch == '$') {
                /**
                 * $<number> pauses injection by the specified number of tenths of a second; eg,
                 * $5 pauses for 1/2 second.  $0 reverts the default injection delay (eg, 100ms).
                 * Also, you may end the number with a period if you need to avoid an injected digit
                 * being misinterpreted as part of the delay (eg, $5.1) pauses for 1/2 second and
                 * then injects "1").
                 */
                let digits = this.sInjectBuffer.match(/^\$([0-9]+)\.?/);
                if (digits) {
                    this.msInjectDelay = (+digits[1] * 100) || this.msInjectDefault;
                    this.sInjectBuffer = this.sInjectBuffer.substr(digits[0].length);
                    break;
                }
                /**
                 * Yes, this code is slow and gross, but it's simple, and key injection doesn't have
                 * to be that fast anyway.  The added check for SOFTCODES that have omitted the 'num-'
                 * prefix adds to the slowness, but it's a nice convenience, allowing you to specify
                 * non-ASCII keys like 'num-right' or 'num-up' more succinctly as  "$right" or "$up".
                 */
                for (let i = 0; i < this.softCodeKeys.length; i++) {
                    let name = this.softCodeKeys[i];
                    if (this.sInjectBuffer.indexOf(name) == 1) {
                        simCode = Keyboardx86.SOFTCODES[name];
                        this.sInjectBuffer = this.sInjectBuffer.substr(name.length + 1);
                        break;
                    }
                    let shortName = (name.indexOf('num-') == 0? name.substr(4) : "");
                    if (shortName && this.sInjectBuffer.indexOf(shortName) == 1) {
                        simCode = Keyboardx86.SOFTCODES[name];
                        this.sInjectBuffer = this.sInjectBuffer.substr(shortName.length + 1);
                        break;
                    }
                }
            }
            if (simCode) break;
            this.sInjectBuffer = this.sInjectBuffer.substr(1);
            let charCode = ch.charCodeAt(0);
            /**
             * charCodes 0x01-0x1A correspond to key combinations CTRL-A through CTRL-Z, unless they
             * are \t, \n, or \r, which are reserved for TAB, LINE-FEED, and RETURN, respectively, so if
             * you need to simulate CTRL-I, CTRL-J, or CTRL-M, those must be specified using \x1C, \x1D,
             * or \x1E, respectively.  Also, since PCs have no dedicated LINE-FEED key, and since \n is
             * often used instead of \r, we map LINE-FEED (LF) to RETURN (CR) below.
             */
            if (charCode <= Keys.ASCII.CTRL_Z) {
                simCode = charCode;
                /**
                 * I could require all callers to supply CRs instead of LFs, but this is friendlier; besides,
                 * PCs don't have a dedicated LINE-FEED key, so the LF charCode is somewhat meaningless.
                 */
                if (charCode == 0x0A) simCode = 0x0D;
                if (charCode != Keys.ASCII.CTRL_I && charCode != Keys.ASCII.CTRL_J && charCode != Keys.ASCII.CTRL_M) {
                    simCode += Keys.KEYCODE.FAKE;
                }
            }
            else if (charCode == 0x1C) {
                simCode = Keys.ASCII.CTRL_I + Keys.KEYCODE.FAKE;
            }
            else if (charCode == 0x1D) {
                simCode = Keys.ASCII.CTRL_J + Keys.KEYCODE.FAKE;
            }
            else if (charCode == 0x1E) {
                simCode = Keys.ASCII.CTRL_M + Keys.KEYCODE.FAKE;
            }
            else if (charCode == 0x1F) {
                simCode = Keys.ASCII['$'];
            }
            else if (charCode <= 0x7F) {
                simCode = charCode;
            }
        }

        if (simCode) {
            let fPress = (Keyboardx86.MODIFIERS[simCode] === undefined);
            this.addActiveKey(simCode, fPress);
            if (fPress) this.clearActiveKeys(true);
        }

        if (!this.sInjectBuffer.length) {
            if (this.fnInjectReady) {
                this.fnInjectReady();
                this.fnInjectReady = null;
            }
        } else {
            this.cpu.setTimer(this.timerInject, this.msInjectDelay);
        }
        return true;
    }

    /**
     * parseKeys(sKeys)
     *
     * The following special "macro" sequences are recognized:
     *
     *      $date:  converted to MM-DD-YYYY
     *      $time:  converted to HH:MM
     *
     * In addition, property keys in the SOFTCODES tables can be prefixed with "$" if you want to specify
     * a key by its SOFTCODE; eg:
     *
     *      $f1:    the F1 function key
     *      $alt:   the ALT key
     *
     * Not all SOFTCODES are allowed; for example, SOFTCODES that begin with a digit or other non-alpha symbol,
     * or that contain only one letter, because those SOFTCODES can already be specified as-is, WITHOUT a leading
     * "$".  Also, all we replace here are the "macro" sequences, leaving any prefixed SOFTCODES in place so that
     * injectKeys() can convert them on the fly.
     *
     * If you want any of those sequences to be typed as-is, then you must specify two "$" (eg, "$$date").
     * Pairs of dollar signs will be automatically converted to single dollar signs, and single dollar signs
     * will be used as-is, provided they don't precede any of the above "macro" or SOFTCODE sequences.
     *
     * WARNING: the JavaScript replace() function ALWAYS interprets "$" specially in replacement strings,
     * even when the search string is NOT a RegExp; specifically:
     *
     *      $$  Inserts a "$"
     *      $&  Inserts the matched substring
     *      $`  Inserts the portion of the string that precedes the matched substring
     *      $'  Inserts the portion of the string that follows the matched substring
     *      $n  Where n is a positive integer less than 100, inserts the nth parenthesized sub-match string,
     *          provided the first argument was a RegExp object
     *
     * Since we build machine definitions on a page from a potentially indeterminate number of string replace()
     * operations, multiple dollar signs could eventually get reduced to a single dollar sign BEFORE we get here.
     *
     * To compensate, I've changed a few replace() methods, like MarkOut's convertMDMachineLinks() and HTMLOut's
     * addFilesToHTML(), from the conventional string replace() to my own StrLib.replace(), and for situations like the
     * embed.js parseXML() function, which needs to use a RegExp-style replace(), I've added a preliminary
     * replace(/\$/g, "$$$$") to the replacement string.
     *
     * Unfortunately, this is something that will be extremely difficult to prevent from breaking down the road.
     * So, heads up to future me....
     *
     * @this {Keyboardx86}
     * @param {string|undefined} sKeys
     * @returns {string|undefined}
     */
    parseKeys(sKeys)
    {
        if (sKeys) {
            let date = new Date();
            let match, reSpecial = /(?:^|[^$])\$([a-z0-9][a-z0-9-]+)/g;
            while ((match = reSpecial.exec(sKeys))) {
                let sReplace = "";
                if (reSpecial.lastIndex) reSpecial.lastIndex--;
                switch (match[1]) {
                case 'date':
                    sReplace = StrLib.sprintf("%M-%02D-%04Y", date);
                    break;
                case 'time':
                    sReplace = StrLib.sprintf("%H:%02N:%02S", date);
                    break;
                default:
                    continue;
                }
                sKeys = sKeys.replace('$' + match[1], sReplace);
            }
            /**
             * Any lingering "$$" sequences are now converted to a special code (\x1F) that injectKeys() knows about.
             */
            sKeys = sKeys.replace(/\$\$/g, '\x1F');
        }
        return sKeys;
    }

    /**
     * waitReady(fnCallReady, sOption)
     *
     * @this {Keyboardx86}
     * @param {function()|null} fnCallReady
     * @param {string} [sOption]
     * @returns {boolean} false if wait required, true otherwise
     */
    waitReady(fnCallReady, sOption)
    {
        let fReady = false;

        switch(sOption) {
        case "DOS":
            if (this.fDOSReady) {
                fReady = true;
            } else {
                this.fnDOSReady = fnCallReady;
            }
            break;

        default:
            if (!this.sInjectBuffer.length) {
                fReady = true;
            } else {
                this.fnInjectReady = fnCallReady;
            }
            break;
        }
        return fReady;
    }

    /**
     * setLED(control, f)
     *
     * @this {Keyboardx86}
     * @param {HTMLElement} control is an HTML control DOM object
     * @param {boolean} f is true if the LED represented by control should be "on", false if "off"
     */
    setLED(control, f)
    {
        /**
         * TODO: Add support for user-definable LED colors
         */
        control.style.backgroundColor = (f? "#00ff00" : "#000000");
    }

    /**
     * updateLEDs(bitState)
     *
     * Updates any and all shift-related LEDs with the corresponding state in bitsStateSim.
     *
     * @this {Keyboardx86}
     * @param {number} [bitState] is the bit in bitsStateSim that may have changed, if known; undefined if not
     */
    updateLEDs(bitState)
    {
        let control;
        for (let sBinding in Keyboardx86.LEDSTATES) {
            let id = "led-" + sBinding;
            let bitLED = Keyboardx86.LEDSTATES[sBinding];
            if ((!bitState || bitState == bitLED) && (control = this.bindings[id])) {
                this.setLED(control, !!(this.bitsStateSim & bitLED));
            }
        }
    }

    /**
     * toggleCapsLock()
     *
     * @this {Keyboardx86}
     */
    toggleCapsLock()
    {
        this.addActiveKey(Keyboardx86.SIMCODE.CAPS_LOCK, true);
    }

    /**
     * toggleNumLock()
     *
     * @this {Keyboardx86}
     */
    toggleNumLock()
    {
        this.addActiveKey(Keyboardx86.SIMCODE.NUM_LOCK, true);
    }

    /**
     * toggleScrollLock()
     *
     * @this {Keyboardx86}
     */
    toggleScrollLock()
    {
        this.addActiveKey(Keyboardx86.SIMCODE.SCROLL_LOCK, true);
    }

    /**
     * updateShiftState(simCode, fSim, fDown)
     *
     * For non-locking shift keys, this function is straightforward: when fDown is true, the corresponding bitState
     * is set, and when fDown is false, it's cleared.  However, for LOCK keys, fDown true means toggle, and fDown false
     * means no change.
     *
     * @this {Keyboardx86}
     * @param {number} simCode (includes any ONDOWN and/or ONRIGHT modifiers)
     * @param {boolean} [fSim] is true to update simulated state only
     * @param {boolean|null} [fDown] is true for down, false for up, undefined for toggle
     * @returns {number} 0 if not a shift key, 1 if shift key down, -1 if shift key up
     */
    updateShiftState(simCode, fSim, fDown)
    {
        let result = 0;
        if (Keyboardx86.SIMCODES[simCode]) {
            let fRight = (Math.floor(simCode / 1000) & 2);
            let bitState = Keyboardx86.KEYSTATES[simCode] || 0;
            if (bitState) {
                if (fRight && !(bitState & Keyboardx86.STATE.ALL_RIGHT)) {
                    bitState >>= 1;
                }
                if (bitState & Keyboardx86.STATE.ALL_LOCKS) {
                    if (fDown === false) return -1;
                    fDown = null;
                }
                if (fDown == null) {        // ie, null or undefined
                    fDown = !((fSim? this.bitsStateSim : this.bitsState) & bitState);
                }
                else if (!fDown && !fSim) {
                    /**
                     * In current webkit browsers, pressing and then releasing both left and right shift keys together
                     * (or both ALT keys, or both CMD/Windows keys, or presumably both CTRL keys) results in 4 events,
                     * as you would expect, but 3 of the 4 are "down" events; only the last of the 4 is an "up" event.
                     *
                     * Perhaps this is a browser accessibility feature (ie, deliberately suppressing the "up" event
                     * of one of the shift keys to implement a "sticky shift mode"?), but in any case, to maintain our
                     * internal consistency, if this is an "up" event and the shift state bit is any of ALL_MODIFIERS,
                     * then we set it to ALL_MODIFIERS, so that we'll automatically clear ALL shift states.
                     *
                     * TODO: The only downside to this work-around is that the simulation will still think a shift key is
                     * down.  So in effect, we have enabled a "sticky shift mode" inside the simulation, whether or not that
                     * was the browser's intent.  To fix that, we would have to identify the shift key that never went up
                     * and simulate the "up".  That's more work than I think the problem merits.  The user just needs to tap
                     * a single shift key to get out that mode.
                     */
                    if (bitState & Keyboardx86.STATE.ALL_MODIFIERS) bitState = Keyboardx86.STATE.ALL_MODIFIERS;
                }
                if (!fSim) {
                    this.bitsState &= ~bitState;
                    if (fDown) this.bitsState |= bitState;
                } else {
                    /**
                     * This next line reflects the fact that we don't want to modify any simulated LOCK states if a simulated
                     * shift state (ie, CTRL, ALT, SHIFT, etc) is also active.  For example, CTRL-NUM-LOCK is a special sequence
                     * (Pause) that isn't supposed to alter the NUM-LOCK state; similarly, CTRL-SCROLL-LOCK (aka Ctrl-Break)
                     * isn't supposed to alter the SCROLL-LOCK state.
                     */
                    if (!(this.bitsStateSim & Keyboardx86.STATE.ALL_MODIFIERS) || !(bitState & Keyboardx86.STATE.ALL_LOCKS)) {
                        this.bitsStateSim &= ~bitState;
                        if (fDown) this.bitsStateSim |= bitState;
                        this.updateLEDs(bitState);
                    }
                }
                result = fDown? 1 : -1;
            }
        }
        return result;
    }

    /**
     * addActiveKey(simCode, fPress)
     *
     * @this {Keyboardx86}
     * @param {number} simCode
     * @param {boolean} [fPress]
     * @returns {boolean} true if added, false if not (eg, not recognized, already added, etc)
     */
    addActiveKey(simCode, fPress)
    {
        let wCode = Keyboardx86.SIMCODES[simCode] || Keyboardx86.SIMCODES[simCode += Keys.KEYCODE.ONDOWN];

        if (!wCode) {
            if (!COMPILED) this.printf(MESSAGE.KBD + MESSAGE.KEY, "addActiveKey(%d,%s): unrecognized\n", simCode, (fPress? "press" : "down"));
            return false;
        }

        /**
         * Ignore all active keys if the CPU is not running.
         */
        if (!this.cpu || !this.cpu.isRunning()) return false;

        /**
         * If this simCode is in the KEYSTATE table, then stop all repeating.
         */
        if (Keyboardx86.KEYSTATES[simCode] && this.aKeysActive.length) {
            if (this.aKeysActive[0].nRepeat > 0) this.aKeysActive[0].nRepeat = 0;
        }

        let i, key;
        for (i = 0; i < this.aKeysActive.length; i++) {
            key = this.aKeysActive[i];
            if (key.simCode == simCode) {
                /**
                 * This key is already active, so if this a "down" request (or a "press" for a key we already
                 * processed as a "down"), ignore it.
                 */
                if (!fPress || key.nRepeat >= 0) {
                    i = -1;
                    break;
                }
                if (i > 0) {
                    if (this.aKeysActive[0].nRepeat > 0) this.aKeysActive[0].nRepeat = 0;
                    this.aKeysActive.splice(i, 1);
                }
                break;
            }
        }

        if (!COMPILED) this.printf(MESSAGE.KBD + MESSAGE.KEY, "addActiveKey(%d,%s): %s\n", simCode, (fPress? "press" : "down"), (i < 0? "already active" : (i == this.aKeysActive.length? "adding" : "updating")));

        if (i < 0) return false;

        if (i == this.aKeysActive.length) {
            key = {simCode};                            // create a new Key object
            // key.bitsState = this.bitsState;          // not needed unless we revive checkActiveKeyShift()
            this.findBinding(simCode, "key", true);
            i++;
        }

        if (i > 0) {
            this.aKeysActive.splice(0, 0, key);         // aka aKeysActive.unshift(key)
        }

        key.fDown = true;
        key.nRepeat = (fPress? -1: (Keyboardx86.KEYSTATES[simCode]? 0 : 1));

        this.updateActiveKey(key);
        return true;
    }

    /**
     * checkActiveKey()
     *
     * @this {Keyboardx86}
     * @returns {number} simCode of active key, 0 if none
     */
    checkActiveKey()
    {
        return this.aKeysActive.length? this.aKeysActive[0].simCode : 0;
    }

    /**
     * isAlphaKey(code)
     *
     * @this {Keyboardx86}
     * @param {number} code
     * @returns {boolean} true if alpha key, false if not
     */
    isAlphaKey(code)
    {
        return (code >= Keys.ASCII.A && code <= Keys.ASCII.Z || code >= Keys.ASCII.a && code <= Keys.ASCII.z);
    }

    /**
     * toUpperKey(code)
     *
     * @this {Keyboardx86}
     * @param {number} code
     * @returns {number}
     */
    toUpperKey(code)
    {
        if (code >= Keys.ASCII.a && code <= Keys.ASCII.z) {
            code -= (Keys.ASCII.a - Keys.ASCII.A);
        }
        return code;
    }

    /**
     * clearActiveKeys(fModifiers)
     *
     * Force all active keys to "deactivate" (or, optionally, just any modifiers)
     *
     * @this {Keyboardx86}
     * @param {boolean} [fModifiers] (true to clear modifier keys only; default is ALL keys)
     */
    clearActiveKeys(fModifiers)
    {
        for (let i = 0; i < this.aKeysActive.length; i++) {
            let key = this.aKeysActive[i];
            if (fModifiers && !Keyboardx86.MODIFIERS[key.simCode]) continue;
            if (this.removeActiveKey(key.simCode)) i--;
        }
    }

    /**
     * removeActiveKey(simCode, fFlush)
     *
     * @param {number} simCode
     * @param {boolean} [fFlush] is true whenever the key must be removed, independent of other factors
     * @returns {boolean} true if successfully removed, false if not
     */
    removeActiveKey(simCode, fFlush)
    {
        if (!Keyboardx86.SIMCODES[simCode]) {
            if (!COMPILED) this.printf(MESSAGE.KBD + MESSAGE.KEY, "removeActiveKey(%d): unrecognized\n", simCode);
            return false;
        }

        /**
         * Ignore all active keys if the CPU is not running.
         */
        if (!fFlush && (!this.cpu || !this.cpu.isRunning())) return false;

        let fRemoved = false;
        for (let i = 0; i < this.aKeysActive.length; i++) {
            let key = this.aKeysActive[i];
            if (key.simCode == simCode || key.simCode == Keys.SHIFTED_KEYCODES[simCode]) {
                this.aKeysActive.splice(i, 1);
                if (key.timer) clearTimeout(key.timer);
                if (key.fDown && !fFlush) this.simulateKey(key.simCode, false);
                this.findBinding(simCode, "key", false);
                fRemoved = true;
                break;
            }
        }

        if (!COMPILED && !fFlush) {
            this.printf(MESSAGE.KBD + MESSAGE.KEY, "removeActiveKey(%d): %s\n", simCode, (fRemoved? "removed" : "not active"));
        }

        if (!this.aKeysActive.length && this.fToggleCapsLock) {
            if (!COMPILED) this.printf(MESSAGE.KBD + MESSAGE.KEY, "removeActiveKey(): inverting caps-lock now\n");
            this.updateShiftState(Keyboardx86.SIMCODE.CAPS_LOCK);
            this.fToggleCapsLock = false;
        }
        return fRemoved;
    }

    /**
     * updateActiveKey(key, msTimer)
     *
     * When called by addActiveKey(), msTimer is undefined; that's used only when we're called by our own timeout handler.
     *
     * @param {Object} key
     * @param {number} [msTimer]
     */
    updateActiveKey(key, msTimer)
    {
        /**
         * All active keys are automatically removed once the CPU stops running.
         */
        if (!this.cpu || !this.cpu.isRunning()) {
            this.removeActiveKey(key.simCode, true);
            return;
        }

        if (!COMPILED) {
            this.printf(MESSAGE.KBD + MESSAGE.KEY, "updateActiveKey(%d,%dms): %b\n", key.simCode, msTimer, key.fDown);
        }

        if (msTimer && key.nRepeat < 0) {
            key.fDown = false;
        }

        if (!this.simulateKey(key.simCode, key.fDown) || !key.nRepeat) {
            /**
             * Why isn't there a simple return here? In order to set breakpoints on two different return conditions, of course!
             */
            if (!msTimer) {
                return;
            }
            return;
        }

        let ms;
        if (key.nRepeat < 0) {
            if (!key.fDown) {
                this.removeActiveKey(key.simCode);
                return;
            }
            ms = this.msAutoRelease;
        }
        else {
            ms = (key.nRepeat++ == 1? this.msAutoRepeat : this.msNextRepeat);
        }

        if (key.timer) {
            clearTimeout(key.timer);
        }

        key.timer = setTimeout(function(kbd) {
            return function onUpdateActiveKey() {
                kbd.updateActiveKey(key, ms);
            };
        }(this), ms);
    }

    /**
     * getSimCode(keyCode)
     *
     * @this {Keyboardx86}
     * @param {number} keyCode
     * @param {boolean} fShifted
     * @returns {number} simCode
     */
    getSimCode(keyCode, fShifted)
    {
        let code;
        let simCode = keyCode;

        if (keyCode >= Keys.ASCII.A && keyCode <= Keys.ASCII.Z) {
            if (!(this.bitsState & (Keyboardx86.STATE.SHIFT | Keyboardx86.STATE.RSHIFT | Keyboardx86.STATE.CAPS_LOCK)) == fShifted) {
                simCode = keyCode + (Keys.ASCII.a - Keys.ASCII.A);
            }
        }
        else if (keyCode >= Keys.ASCII.a && keyCode <= Keys.ASCII.z) {
            if (!!(this.bitsState & (Keyboardx86.STATE.SHIFT | Keyboardx86.STATE.RSHIFT | Keyboardx86.STATE.CAPS_LOCK)) == fShifted) {
                simCode = keyCode - (Keys.ASCII.a - Keys.ASCII.A);
            }
        }
        else if (!!(this.bitsState & (Keyboardx86.STATE.SHIFT | Keyboardx86.STATE.RSHIFT)) == fShifted) {
            if ((code = Keys.SHIFTED_KEYCODES[keyCode])) {
                simCode = code;
            }
        }
        else {
            if ((code = Keys.NONASCII_KEYCODES[keyCode])) {
                simCode = code;
            }
        }
        return simCode;
    }

    /**
     * onFocusChange(fFocus)
     *
     * @this {Keyboardx86}
     * @param {boolean} fFocus is true if gaining focus, false if losing it
     */
    onFocusChange(fFocus)
    {
        if (!COMPILED && this.fHasFocus != fFocus) {
            this.printf(MESSAGE.EVENT, "onFocusChange(%b)\n", fFocus);
        }
        this.fHasFocus = fFocus;
        /**
         * Since we can't be sure of any shift states after losing focus, we clear them all.
         */
        if (!fFocus) {
            this.bitsState &= ~Keyboardx86.STATE.ALL_MODIFIERS;
            this.clearActiveKeys();
        }
    }

    /**
     * onKeyActive(event, fDown)
     *
     * @this {Keyboardx86}
     * @param {Object} event
     * @param {boolean} fDown is true for a keyDown event, false for a keyUp event
     * @returns {boolean} true to pass the event along, false to consume it
     */
    onKeyActive(event, fDown)
    {
        let fPass = true;
        let fPress = false;
        let fIgnore = false;
        let keyCode = event.keyCode;

        /**
         * HACK for the Apple Magic Keyboard connected to an iPad: iPadOS inexplicably generates CTRL-ENTER (or CTRL-J)
         * whenever CTRL-C is pressed, so we attempt to undo that behavior -- at the loss of a genuine CTRL-ENTER, sadly.
         *
         * NOTE: isUserAgent struggles to detect iPadOS because Apple insists on pretending that it be indistinguishable
         * from desktop systems, so be aware that this hack may stop working at some undefined point.
         */
        if (WebLib.isUserAgent("iOS") && (this.bitsState & Keyboardx86.STATE.CTRL)) {
            if (keyCode == Keys.KEYCODE.CR) {
                keyCode = Keys.ASCII.C;
            }
        }

        /**
         * We used to be able to capture keystrokes like "Alt-E" by simply checking keyCode for "ALT" (18) and "E" (69),
         * but browsers keep pulling the rug out from under such simple assumptions.  A number of "Alt-Key" combinations
         * have now apparently been repurposed for other things (like IMEs), so what was once simple is now more complicated.
         * One would think that new features could be added using new properties that are used only by new code, but browsers
         * (eg, Chrome) can't resist shoving their new features down the throats of EXISTING code, too.
         *
         * And even with this remapping logic, creating a seamless experience for the underlying machine is still a
         * challenge, because for a key like "Alt-E", the browser insists on processing the NEXT key differently; it still
         * gets delivered, but whereas before a normal key would have been delivered with a keypress event, it's now delivered
         * with a keydown event.  Sigh.
         *
         * And lest one think this might be a platform-specific issue, Firefox handles "Alt-E" just like any other "Alt-Key"
         * combination; Chrome and Safari do not.
         */
        if (keyCode == 229 && event.code) {
            let code = event.code;
            if (code.indexOf("Key") == 0) {
                keyCode = code.charCodeAt(3);
            } else if (code.indexOf("Digit") == 0) {
                keyCode = code.charCodeAt(5);
            } else {
                keyCode = Keys.CODEKEY[code] || 0;
            }
            this.printf(MESSAGE.EVENT + MESSAGE.KEY, "onKeyActive(%d): remapped using event code '%s'\n", keyCode, code);
        }

        if (!this.cmp.notifyKbdEvent(event, fDown)) {
            return false;
        }

        if (fDown) {
            this.cKeysPressed++;
            this.sInjectBuffer = "";                    // actual key DOWN (not UP) events should also stop any injection in progress
            /**
             * Unless the key happens to be ESC, ANY user input at all now cancels injection.
             */
            if (keyCode != 27) this.nInjection = Keyboardx86.INJECTION.NONE;
        }

        Component.processScript(this.idMachine);        // and any script, too

        /**
         * Although it would be nice to pay attention ONLY to these "up" and "down" events, and ignore "press"
         * events, iOS devices force us to process "press" events, because they don't give us shift-key events,
         * so we have to infer the shift state from the character code in the "press" event.
         *
         * So, to seamlessly blend "up" and "down" events with "press" events, we must convert any keyCodes we
         * receive here to a compatibly shifted simCode.
         */
        let simCode = this.getSimCode(keyCode, true);

        if (this.fEscapeDisabled && simCode == Keys.ASCII['`']) {
            keyCode = simCode = Keys.KEYCODE.ESC;
        }

        if (Keyboardx86.SIMCODES[keyCode + Keys.KEYCODE.ONDOWN]) {

            simCode += Keys.KEYCODE.ONDOWN;
            if (event.location == Keys.LOCATION.RIGHT) {
                simCode += Keys.KEYCODE.ONRIGHT;
            }

            let nShiftState = this.updateShiftState(simCode, false, fDown);
            if (nShiftState) {

                if (keyCode == Keys.KEYCODE.CAPS_LOCK || keyCode == Keys.KEYCODE.NUM_LOCK || keyCode == Keys.KEYCODE.SCROLL_LOCK) {
                    /**
                     * FYI, "lock" keys generate a DOWN event ONLY when getting locked and an UP event ONLY
                     * when getting unlocked--which is a little odd, since the key did go UP and DOWN each time.
                     *
                     * We must treat each event like a "down", and also as a "press", so that addActiveKey() will
                     * automatically generate both the "make" and "break".
                     *
                     * Of course, there have to be exceptions, most notably both Microsoft Internet Explorer and Edge
                     * (and, apparently, pretty much any other browser running on the Windows platform), which send both
                     * UP and DOWN events on every press, so there's no need for this trickery.
                     */
                    if (!this.fMSWindows) {
                        fDown = fPress = true;
                    }
                }

                /**
                 * HACK for Windows (as the host operating system): the ALT key is often used with key combinations
                 * not meant for our machine (eg, Alt-Tab to switch to a different window, or simply tapping the ALT
                 * key by itself to switch focus to the browser's menubar).  And sadly, browsers are quite happy to
                 * give us the DOWN event for the ALT key, but not an UP event, leaving our machine with the impression
                 * that the ALT key is still down, which the user user has no easy way to detect OR correct.
                 *
                 * So we still record the ALT state in bitsState as best we can, and clear it whenever we lose focus
                 * in onFocusChange(), but we no longer pass through DOWN events to our machine.  Instead, we now
                 * check bitsState prior to simulating any other key, and if the ALT bit is set, we simulate an
                 * active ALT key first; you'll find that check at the end of both onKeyActive() and onKeyPress().
                 *
                 * NOTE: Even though this is a hack intended largely for browsers running on Windows, I'm implementing
                 * it for all platforms, for consistency.
                 */
                if (this.fDelayALT && keyCode == Keys.KEYCODE.ALT) {
                    if (fDown) {
                        /**
                         * One exception to this hack is the "Sidekick" exception: if the CTRL key is also down,
                         * we'll still simulate ALT immediately, for those users who press CTRL and then ALT to pop up
                         * Sidekick (as opposed to pressing ALT and then CTRL, which should also work, regardless).
                         */
                        if (!(this.bitsState & Keyboardx86.STATE.CTRL)) fIgnore = true;
                        /**
                         * Reset cKeysPressed so that we can detect the mere "tapping" of the ALT key, which some PCjs
                         * demos depend on (eg, Multi-tasking MS-DOS 4.0).
                         */
                        this.cKeysPressed = 0;
                    }
                    else {
                        if (!this.cKeysPressed) {
                            /**
                             * Since cKeysPressed is zero, the assumption here is that the ALT key (and the Alt key ALONE)
                             * was just tapped, so as long the ALT key was not already "soft-locked" (based on bitsStateSim),
                             * we will transform this "up" event into a "fake press" event.
                             */
                            if (!(this.bitsStateSim & (Keyboardx86.STATE.ALT | Keyboardx86.STATE.RALT))) {
                                fDown = fPress = true;
                            }
                        }
                    }
                }

                /**
                 * As a safeguard, whenever the CMD key goes up, clear all active keys, because there appear to be
                 * cases where we don't always get notification of a CMD key's companion key going up (this probably
                 * overlaps with most if not all situations where we also lose focus).
                 */
                if (!fDown && (keyCode == Keys.KEYCODE.CMD || keyCode == Keys.KEYCODE.RCMD)) {
                    this.clearActiveKeys();
                }
            }
            else {
                /**
                 * Here we have all the non-shift keys in the ONDOWN category; eg, BS, TAB, ESC, UP, DOWN, LEFT, RIGHT,
                 * and many more.
                 *
                 * For various reasons (some of which are discussed below), we don't want to pass these on (ie, we want
                 * to suppress their "press" event), which means we must perform all key simulation on the "up" and "down"
                 * events.
                 *
                 * Regarding BS: I never want the browser to act on BS, since it does double-duty as the BACK button,
                 * leaving the current page.
                 *
                 * Regarding TAB: If I don't consume TAB on the "down" event, then that's all I'll see, because the browser
                 * acts on it by giving focus to the next control.
                 *
                 * Regarding ESC: This key generates "down" and "up" events (LOTS of "down" events for that matter), but no
                 * "press" event.
                 */

                /**
                 * HACKs for mapping CTRL-BACKSPACE and CTRL-ALT-BACKSPACE to CTRL-BREAK and CTRL-ALT-DEL, respectively.
                 */
                if (keyCode == Keys.KEYCODE.BS && (this.bitsState & (Keyboardx86.STATE.CTRL|Keyboardx86.STATE.ALT)) == Keyboardx86.STATE.CTRL) {
                    simCode = Keyboardx86.SIMCODE.CTRL_BREAK;
                }
                if (keyCode == Keys.KEYCODE.BS && (this.bitsState & (Keyboardx86.STATE.CTRL|Keyboardx86.STATE.ALT)) == (Keyboardx86.STATE.CTRL|Keyboardx86.STATE.ALT)) {
                    simCode = Keyboardx86.SIMCODE.CTRL_ALT_DEL;
                }

                /**
                 * There are a number of other common key sequences that interfere with our machines; for example,
                 * the up/down arrows have a "default" behavior of scrolling the web page up and down, which is
                 * definitely NOT a behavior we want.  Since we mark those keys as ONDOWN, we'll catch them all here.
                 */
                fPass = false;
            }
        }
        else {
            /**
             * HACKs for mapping assorted CTRL-ALT sequences involving "normal" keys (eg, PERIOD, EQUALS, and DASH).
             */
            if ((this.bitsState & (Keyboardx86.STATE.CTRL|Keyboardx86.STATE.ALT)) == (Keyboardx86.STATE.CTRL|Keyboardx86.STATE.ALT)) {
                if (keyCode == Keys.KEYCODE.PERIOD) {
                    simCode = Keyboardx86.SIMCODE.CTRL_ALT_DEL;    // in case your operating system won't let you type CTRL-ALT-BACKSPACE either
                }
                if (keyCode == Keys.KEYCODE.EQUALS) {
                    simCode = Keyboardx86.SIMCODE.CTRL_ALT_ADD;    // in case your keyboard doesn't have a numeric keypad '+'
                }
                else if (keyCode == Keys.KEYCODE.DASH) {
                    simCode = Keyboardx86.SIMCODE.CTRL_ALT_SUB;    // in case your keyboard doesn't have a numeric keypad '-'
                }
            }

            /**
             * When I have defined system-wide CTRL-key sequences to perform common editing operations (eg, CTRL_W
             * and CTRL_Z to scroll pages of text), the browser likes to act on those operations, so let's set fPass
             * to false to prevent that.
             *
             * Also, we don't want to set fIgnore in such cases, because the browser may not give us a press event for
             * these CTRL-key sequences, so we can't risk ignoring them.
             */
            if (Keyboardx86.SIMCODES[simCode] && (this.bitsState & (Keyboardx86.STATE.CTRLS | Keyboardx86.STATE.ALTS))) {
                fPass = false;
            }

            /**
             * Don't simulate any key not explicitly marked ONDOWN, as well as any key sequence with the CMD key held.
             */
            if (!this.fAllDown && fPass && fDown || (this.bitsState & Keyboardx86.STATE.CMDS)) {
                fIgnore = true;
            }
        }

        if (!fPass) {
            event.preventDefault();
        }

        this.printf(MESSAGE.EVENT + MESSAGE.KEY, "onKeyActive(%d): %b%s\n", keyCode, fDown, (fIgnore? ",ignore" : (fPass? "" : ",consume")));

        /**
         * Mobile (eg, iOS) keyboards don't fully support onkeydown/onkeyup events; for example, they usually
         * don't generate ANY events when a shift key is pressed, and even for normal keys, they seem to generate
         * rapid (ie, fake) "up" and "down" events around "press" events, probably more to satisfy compatibility
         * issues rather than making a serious effort to indicate when a key ACTUALLY went down or up.
         */
        if (!fIgnore && (!this.fMobile || !fPass)) {
            if (fDown) {
                /**
                 * This is the companion code to the onKeyActive() hack for Windows that suppresses DOWN events
                 * for ALT keys: if we're about to activate another key and we believe that an ALT key is still down,
                 * we fake an ALT activation first.
                 */
                if (this.fDelayALT && (this.bitsState & Keyboardx86.STATE.ALTS)) {
                    let simCodeAlt = Keyboardx86.SIMCODE.ALT;
                    this.printf(MESSAGE.EVENT, "onKeyActive(%d): simulating ALT down\n", simCodeAlt);
                    this.addActiveKey(simCodeAlt);
                }
                this.addActiveKey(simCode, fPress);
            } else {
                if (!this.removeActiveKey(simCode)) {
                    let code = this.getSimCode(keyCode, false);
                    if (code != simCode) this.removeActiveKey(code);
                }
            }
        }

        return fPass;
    }

    /**
     * onKeyPress(event)
     *
     * @this {Keyboardx86}
     * @param {Object} event
     * @returns {boolean} true to pass the event along, false to consume it
     */
    onKeyPress(event)
    {
        event = event || window.event;
        let keyCode = event.which || event.keyCode;

        if (!this.cmp.notifyKbdEvent(event)) {
            return false;
        }

        this.cKeysPressed++;
        this.sInjectBuffer = "";        // actual key PRESS events should stop any injection currently in progress

        if (this.fAllDown) {
            let simCode = this.checkActiveKey();
            if (simCode && this.isAlphaKey(simCode) && this.isAlphaKey(keyCode) && simCode != keyCode) {
                if (!COMPILED) this.printf(MESSAGE.EVENT + MESSAGE.KEY, "onKeyPress(%d) out of sync with %d, invert caps-lock\n", keyCode, simCode);
                this.fToggleCapsLock = true;
                keyCode = simCode;
            }
        }

        let fPass = !Keyboardx86.SIMCODES[keyCode] || !!(this.bitsState & Keyboardx86.STATE.CMD);

        this.printf(MESSAGE.EVENT + MESSAGE.KEY, "onKeyPress(%d): %b\n", keyCode, fPass);

        if (!fPass) {
            /**
             * This is the companion code to the onKeyActive() hack for Windows that suppresses DOWN events
             * for ALT keys: if we're about to activate another key and we believe that an ALT key is still down,
             * we fake an ALT activation first.
             */
            if (this.fDelayALT && (this.bitsState & Keyboardx86.STATE.ALTS)) {
                let simCodeAlt = Keyboardx86.SIMCODE.ALT;
                this.printf(MESSAGE.EVENT, "onKeyPress(%d): simulating ALT down\n", simCodeAlt);
                this.addActiveKey(simCodeAlt);
            }
            this.addActiveKey(keyCode, true);
        }

        return fPass;
    }

    /**
     * onCopy(event)
     *
     * You may have noticed in the Keyboard start() handler that I force all the diagnostic text still residing
     * in the hidden textarea to be selected; if we don't, the browser will think there's nothing to copy, so it won't
     * deliver any "copy" events.  However, that's NOT the text we actually want to copy; we want to copy is whatever
     * is currently displayed on screen.  Hence this handler's job is to override the default "copy" behavior, and
     * instead call the Video component's getTextData() function for the text to be deposited on the clipboard.
     *
     * @this {Keyboardx86}
     * @param {Object} event
     */
    onCopy(event)
    {
        if (event.stopPropagation) event.stopPropagation();
        if (event.preventDefault) event.preventDefault();
        var clipboardData = event.clipboardData || window.clipboardData;
        if (clipboardData && this.video) {
            clipboardData.setData("text/plain", this.video.getTextData());
        }
    }

    /**
     * onCut(event)
     *
     * I don't actually care about Cut operations, just Copy and Paste; HOWEVER, you may have noticed in the
     * Keyboard start() handler that I force all the diagnostic text still residing in the hidden textarea to be
     * selected, so that we will receive "copy" events -- and, by extension, "cut" events, even though as I said
     * we don't care about them.  Unfortunately, we MUST care about them, because if we allow all that selected
     * text to actually be cut, it will be removed, nothing will remain selected or selectable, and so "copy"
     * events will no longer be delivered.
     *
     * So the main purpose of this function is to simply prevent any text from being cut.  And since we might as
     * well deliver something as part of the Cut operation, we deliver all the diagnostic text, which is available
     * in "this.controlTextKeyboard.value".  I could deliver the same exact text that onCopy() delivers, but where's
     * the fun in that?
     *
     * @this {Keyboardx86}
     * @param {Object} event
     */
    onCut(event)
    {
        if (event.stopPropagation) event.stopPropagation();
        if (event.preventDefault) event.preventDefault();
        var clipboardData = event.clipboardData || window.clipboardData;
        if (clipboardData) {
            clipboardData.setData("text/plain", this.controlTextKeyboard.value);
        }
    }

    /**
     * onPaste(event)
     *
     * @this {Keyboardx86}
     * @param {Object} event
     */
    onPaste(event)
    {
        if (event.stopPropagation) event.stopPropagation();
        if (event.preventDefault) event.preventDefault();
        var clipboardData = event.clipboardData || window.clipboardData;
        if (clipboardData) {
            let s = clipboardData.getData("text/plain");
            /**
             * We replace every '$' with '$$' to ensure there's no misinterpretation of a character sequence as one
             * of our special macro/key/delay sequences; see parseKeys() for a list.  The assumption here is that,
             * normally, the user will want pasted text injected exactly as-is.  But, there are always exceptions,
             * so if the pasted data ends with a '$', we will strip that trailing '$' and leave the rest of the string
             * as-is, allowing any special macros/keys/delays defined with '$' to pass through.
             *
             * And last but not least, an exception to the exception: if you need the pasted data to be treated as-is
             * AND to end with a '$', use TWO '$' at the end.
             */
            let end = s.slice(-1);
            if (end == '$') {
                s = s.slice(0, -1);
                if (s.slice(-1) == '$') end = '';
            }
            if (end != '$') {
                s = s.replace(/\$/g, '$$$$');   // remember, replace() treats '$' special; '$$' is really just one '$'
            }
            /**
             * Since the text on the clipboard may contain CR+LF line endings, and since injectKeys() maps both CR
             * and LF to the Enter key, and since we don't want TWO carriage returns at the end of every injected line,
             * we must transform every CR+LF into a single CR (it could be an LF as well; injectKeys() doesn't care
             * which you use).
             */
            this.injectKeys(s.replace(/\r\n/g, '\r'));
        }
    }

    /**
     * simulateKey(simCode, fDown)
     *
     * @this {Keyboardx86}
     * @param {number} simCode
     * @param {boolean} fDown
     * @returns {boolean} true if successfully simulated, false if unrecognized/unsupported key
     */
    simulateKey(simCode, fDown)
    {
        let fSimulated = false;

        this.updateShiftState(simCode, true, fDown);

        let wCode = Keyboardx86.SIMCODES[simCode] || Keyboardx86.SIMCODES[simCode + Keys.KEYCODE.ONDOWN];

        if (wCode !== undefined) {

            let abScanCodes = [];
            let bCode = wCode & 0xff;

            /**
             * TODO: Update the following restrictions to address 84-key and 101-key keyboard limitations.
             */
            if (bCode > 83 && this.modelKeys == 83) {
                return false;
            }

            abScanCodes.push(bCode | (fDown? 0 : Keyboardx86.SCANCODE.BREAK));

            let fAlpha = (simCode >= Keys.ASCII.A && simCode <= Keys.ASCII.Z || simCode >= Keys.ASCII.a && simCode <= Keys.ASCII.z);

            while ((wCode >>>= 8)) {
                let bScan = wCode & 0xff;
                /**
                 * TODO: The handling of SIMCODE entries with "extended" codes still needs to be tested, and
                 * moreover, if any of them need to perform any shift-state modifications, those modifications
                 * may need to be encoded differently.
                 */
                if (bCode == Keyboardx86.SCANCODE.EXTEND1 || bCode == Keyboardx86.SCANCODE.EXTEND2) {
                    abScanCodes.push(bCode | (fDown? 0 : Keyboardx86.SCANCODE.BREAK));
                    continue;
                }
                let bitsFake = 0;
                if (bScan == Keyboardx86.SCANCODE.SHIFT) {
                    if (!(this.bitsStateSim & (Keyboardx86.STATE.SHIFT | Keyboardx86.STATE.RSHIFT))) {
                        if (!(this.bitsStateSim & Keyboardx86.STATE.CAPS_LOCK) || !fAlpha) {
                            bitsFake |= Keyboardx86.STATE.SHIFT;
                        }
                    }
                }
                else if (bScan == Keyboardx86.SCANCODE.CTRL) {
                    if (!(this.bitsStateSim & (Keyboardx86.STATE.CTRL | Keyboardx86.STATE.RCTRL))) {
                        bitsFake |= Keyboardx86.STATE.CTRL;
                    }
                }
                else if (bScan == Keyboardx86.SCANCODE.ALT) {
                    if (!(this.bitsStateSim & (Keyboardx86.STATE.ALT | Keyboardx86.STATE.RALT))) {
                        bitsFake |= Keyboardx86.STATE.ALT;
                    }
                }
                else {
                    abScanCodes.push(bCode | (fDown? 0 : Keyboardx86.SCANCODE.BREAK));
                }
                /**
                 * If we have to fake a modifier key (eg, because some caller wants to simulate a modified key
                 * for which the modifier is not currently down), then if the modified key is going DOWN, make a
                 * note that the modifier is being faked, and if the modified key is going UP, make sure that
                 * the modifier was actually faked before "unfaking" it.
                 *
                 * Otherwise, the BIOS may complain (ie, beep) if it sees an UP event for a modifier key that it
                 * thinks is already up.  For example, if you press SHIFT, then press '?', then release SHIFT, then
                 * release '?', since we didn't have to fake a SHIFT when pressing '?', we should also avoid faking
                 * it when releasing '?'.
                 */
                if (bitsFake) {
                    if (fDown) {
                        this.bitsStateFake |= bitsFake;
                    } else if (this.bitsStateFake & bitsFake) {
                        this.bitsStateFake &= ~bitsFake;
                    } else {
                        bitsFake = 0;
                    }
                }
                if (bitsFake) {
                    if (fDown) {
                        abScanCodes.unshift(bScan);
                    } else {
                        abScanCodes.push(bScan | Keyboardx86.SCANCODE.BREAK);
                    }
                }
            }

            for (let i = 0; i < abScanCodes.length; i++) {
                this.addScanCode(abScanCodes[i]);
            }

            fSimulated = true;
        }

        if (!COMPILED) this.printf(MESSAGE.KBD + MESSAGE.KEY, "simulateKey(%d,%b): %b\n", simCode, fDown, fSimulated);

        return fSimulated;
    }

    /**
     * checkActiveKeyShift()
     *
     * @this {Keyboardx86}
     * @returns {number|null} bitsState for active key, null if none
     *
     checkActiveKeyShift()
     {
         return this.aKeysActive.length? this.aKeysActive[0].bitsState : null;
     }
     */

    /**
     * Keyboardx86.init()
     *
     * This function operates on every HTML element of class "keyboard", extracting the
     * JSON-encoded parameters for the Keyboard constructor from the element's "data-value"
     * attribute, invoking the constructor to create a Keyboard component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        let aeKbd = Component.getElementsByClass(APPCLASS, "keyboard");
        for (let iKbd = 0; iKbd < aeKbd.length; iKbd++) {
            let eKbd = aeKbd[iKbd];
            let parmsKbd = Component.getComponentParms(eKbd);
            let kbd = new Keyboardx86(parmsKbd);
            Component.bindComponentControls(kbd, eKbd, APPCLASS);
        }
    }
}

/**
 * Initialize every Keyboard module on the page.
 */
WebLib.onInit(Keyboardx86.init);
