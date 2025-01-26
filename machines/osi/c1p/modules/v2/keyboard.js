/**
 * @fileoverview This file implements the C1Pjs Keyboard component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Component from "../../../../modules/v2/component.js";
import MESSAGE from "../../../../modules/v2/message.js";
import StrLib from "../../../../modules/v2/strlib.js";
import WebLib from "../../../../modules/v2/weblib.js";
import { APPCLASS, DEBUG, DEBUGGER } from "./defines.js";

/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @class C1PKeyboard
 * @unrestricted
 */
export default class C1PKeyboard extends Component {
    /**
     * C1PKeyboard(parmsKbd)
     *
     * The Keyboard component can be configured with the following (parmsKbd) properties:
     *
     *      model: model number (one of: 542 or 600; 600 is the default)
     *
     * Its main purpose is to receive binding requests for various keyboard events,
     * and to use those events to simulate the C1P's keyboard hardware; specifically,
     * an OSI model 600 board (NOT the model 542).
     *
     * Keys on the C1P keyboard that differ from modern keyboards, along with their
     * closest modern counterpart:
     *
     *      C1P      PC
     *      ---      --
     *      2"       2@
     *      6&       6^
     *      7'       7&
     *      8(       8*
     *      9)       9(
     *      0        0)
     *      :*       -_
     *      -=       =+
     *      ;+       ;:
     *      LINEFEED CTRL-J
     *      RETURN   ENTER (or CTRL-M)
     *      SHIFT-O  DELETE (or CTRL-H)
     *      SHIFT-N  ^
     *      SHIFT-P  @ (used by the BASIC-IN-ROM to abandon the current line)
     *      SHIFT-L  \
     *      SHIFT-K  [
     *      SHIFT-M  ]
     *      CTRL-C   Same (used by the BASIC-IN-ROM to interrupt RUN and LIST, unless disabled with POKE 530,1)
     *      CTRL-O   Same (used by the BASIC-IN-ROM to suppress output until another CTRL-O is typed)
     *      RUB-OUT  (no mapping chosen for this key yet)
     *      REPEAT   (no mapping chosen for this key yet)
     *
     * Problems with iOS Devices
     * -------------------------
     * The keyboard pops up with the SHIFT key depressed, which is not the initial keyboard state that the C1P expects.
     * I tried to fix that by adding an 'autocapitalize="off"' attribute alongside the 'contenteditable="true"' attribute
     * on the <canvas> element, but apparently Safari v5 honors that only inside certain elements (eg, <input>).  The simplest
     * work-around is to tap the iOS device's SHIFT key before starting to type, but I'd prefer an automatic solution.
     *
     * Another work-around might be to NEVER pass the real CAPS-LOCK state to the virtual machine, and whenever CAPS-LOCK is
     * actually down, automatically "uncapitalize" all letters.
     *
     * However, the current work-around is for keyPressSimulate() to ALWAYS convert all alphabetic charCodes to their
     * lower-case equivalents, and simply let the C1P's own shift-key logic do its thing.  Note that we do this ONLY for
     * iOS devices, so that on all other devices, you can still use special shifted key combinations like SHIFT-O and SHIFT-P;
     * this work-around breaks those key combinations for iOS devices, but that seems like a reasonable trade-off.
     *
     * Simple C1P Virtual Hardware Test
     * --------------------------------
     * Using the following code:
     *
     *      10 POKE 530,1
     *      20 KEY=57088
     *      25 Q=-1
     *      30 POKE KEY,64
     *      40 P=PEEK(KEY)
     *      50 IF P<>Q THEN PRINT P
     *      60 Q=P
     *      70 GOTO 30
     *
     * The value 64 (0x40) should have enabled every row except R6.  Here were the results for keys
     * on row R7:
     *
     *        1   2   3   4   5   6   7
     *      --- --- --- --- --- --- ---
     *      126 190 222 238 246 250 252
     *
     * Sure enough, none of the keys on R6 worked, and all the keys on rows R0-R5 generated the same
     * values as R7. But why were the values read all EVEN instead of ODD (ie, why was bit 0 cleared as
     * well?)  Answer: because 0x40 also enables keys on row R0, where the SHIFT-LOCK key resides,
     * and since the SHIFT-LOCK is normally locked AND also sits in column C0, bit 0 will be clear as well.
     *
     * This explains why the "STAR WARS" game (SAMPLE4.BAS) expected values "126,190,222,238,246,250"
     * for keys 1-6 after POKE'ing 64 into location 57088 (0xdf00), instead of the more typical values
     * "127,191,223,239,247,251."  This also means that anyone who happened to unlock their SHIFT-LOCK
     * would have trouble playing that game.
     *
     * @this {C1PKeyboard}
     * @param {Object} parmsKbd
     */
    constructor(parmsKbd)
    {
        super("C1PKeyboard", parmsKbd);

        this.flags.powered = false;
        this.nDefaultModel = parmsKbd['model'];

        /*
         * keyCodes that I must pay particular attention to
         */
        this.KEYCODE_DELETE     = 0x08;
        this.KEYCODE_TAB        = 0x09;
        this.KEYCODE_LF         = 0x0A;
        this.KEYCODE_CR         = 0x0D;
        this.KEYCODE_SHIFT      = 0x10;                 // I map this to CHARCODE_LSHIFT
        this.KEYCODE_CONTROL    = 0x11;
        this.KEYCODE_ALT        = 0x12;                 // I map this to CHARCODE_RSHIFT (since the C1P keyboard has no ALT key)
        this.KEYCODE_CAPSLOCK   = 0x14;
        this.KEYCODE_ESC        = 0x1B;                 // NOTE: for some reason, this comes in via keyDown/keyUp only, not keyPress
        this.KEYCODE_COMMAND    = 0x5B;

        /*
         * The following charCodes are the same as the corresponding keyCodes
         */
        this.CHARCODE_DELETE    = this.KEYCODE_DELETE;
        this.CHARCODE_LF        = this.KEYCODE_LF;
        this.CHARCODE_CR        = this.KEYCODE_CR;
        this.CHARCODE_ESC       = this.KEYCODE_ESC;

        /*
         * The following charCodes are NOT the same as the corresponding keyCodes, hence the bias (PSEUDO_CHARCODE);
         * I've deliberately chosen a bias that still produces values in the byte range (0x00-0xFF) and will therefore
         * fit into aCharCodeMap, but which shouldn't conflict with any actual, type-able keys.
         */
        this.PSEUDO_CHARCODE    = 0xE0;
        this.CHARCODE_LSHIFT    = this.KEYCODE_SHIFT    + this.PSEUDO_CHARCODE;
        this.CHARCODE_CTRL      = this.KEYCODE_CONTROL  + this.PSEUDO_CHARCODE;
        this.CHARCODE_RSHIFT    = this.KEYCODE_ALT      + this.PSEUDO_CHARCODE;
        this.CHARCODE_SHIFTLOCK = this.KEYCODE_CAPSLOCK + this.PSEUDO_CHARCODE;

        /*
         * Other common character codes, pseudo (like the C1P's "BREAK" key, which has no modern analog) or otherwise
         */
        this.CHARCODE_BREAK     = 0x00 + this.PSEUDO_CHARCODE;
        this.CHARCODE_CTRLC     = 0x03;
        this.CHARCODE_CTRLO     = 0x0F;

        /*
         * These are "shift key" bits I store in bitsShift, and with the exception of BIT_COMMAND (because
         * the C1P doesn't have a COMMAND key), they all match the bit position of the corresponding shift key's
         * column on row 0 (abKbdCols[0]) of the simulated keyboard hardware.
         *
         * NOTE: Whenever shift key bits need to be restored from bitsShift to abKbdCols[0] (eg, when restoring
         * the current shift state at the completion of a simulated key), be sure to mask bitsShift with BITS_SIMULATE
         * before propagating them.
         */
        this.BIT_SHIFTLOCK      = 0x01;
        this.BIT_RSHIFT         = 0x02;
        this.BIT_LSHIFT         = 0x04;
        this.BIT_COMMAND        = 0x08;     // the C1P has no key "wired" to this column, so I can use this bit for COMMAND
        this.BIT_CTRL           = 0x40;
        this.BITS_SIMULATE      = (this.BIT_RSHIFT | this.BIT_LSHIFT | this.BIT_CTRL);

        this.SIMCODE_KEYPRESS   = 0;
        this.SIMCODE_KEYRELEASE = 1;
        this.SIMCODE_KEYEVENT   = 2;
        this.SIMCODE_KEYTIMEOUT = 3;
        this.SIMCODE_AUTOCLEAR  = 4;
        this.aSimCodeDescs = ["keyPress","keyRelease","keyEvent","keyTimeout","autoClear"];

        /*
         * From "OSI C1P Technical Report" p.19 regarding the Model 600 Board:
         *
         *      "By holding down any key, one will first get one character output, and after approximately
         *      a half second delay a repeat rate of approximately 5 characters per second."
         */
        this.nCyclesThreshold   = 8192;     // number of virtual CPU cycles required before aKbdStates is propagated
        this.msReleaseDelay     = 250;      // number of milliseconds before a down key is "forced" up (unless we see it go up)
        this.msReleaseRepeat    = 100;      // number of milliseconds before a held key is "forced" up (assuming auto-repeat)
        this.msInjectDelay      = 300;      // number of milliseconds between injected keystrokes

        this.aButtonCodeMap = {};
        this.aButtonCodeMap['break']  = this.CHARCODE_BREAK;
        this.aButtonCodeMap['esc']    = this.CHARCODE_ESC;
        this.aButtonCodeMap['ctrl-c'] = this.CHARCODE_CTRLC;
        this.aButtonCodeMap['ctrl-o'] = this.CHARCODE_CTRLO;

        /*
         * This array is used by keyEventSimulate() to lookup a given charCode and convert it to the appropriate
         * row/col bit combination that the C1P requires.  I assign each supported charCode a 16-bit value, where
         * the high byte contains the row/col pair (in the high and low nibbles, respectively), and the low byte
         * contains any required shift-key code.
         *
         * For example, an apostrophe (0x27) is an unshifted key on a modern keyboard, but it is a SHIFT-7 on the
         * C1P keyboard, so when I simulate the 7, I must also simulate a SHIFT (I always choose the LEFT shift
         * key -- CHARCODE_LSHIFT -- but that choice is completely arbitrary).
         *
         * Using charCodes (from keyPress events) proved to be more robust than using keyCodes (from keyDown and
         * keyUp events), in part because of differences between the C1P keyboard's layout and modern keyboards,
         * and also because of differences in the way browsers generate the keyDown and keyUp events.  For
         * example, Safari on iOS devices will not generate up/down events for shift keys, and for other keys,
         * the up/down events are usually generated after the actual press is complete, and in rapid succession,
         * which doesn't give the slow C1P virtual machine enough time to detect the key.
         *
         * There are still a few times that I call keyEventSimulate() from keyEvent(), and for those occasions,
         * I create a pseudo-charCode value by adding PSEUDO_CHARCODE (0xE0) to the keyCode value, to avoid any
         * confusion with real charCodes:
         *
         *      CHARCODE_LSHIFT     (originally 0x10, which also looks like CTRL-P, so converted to 0xF0)
         *      CHARCODE_CTRL       (originally 0x11, which also looks like CTRL-Q, so converted to 0xF1)
         *      CHARCODE_RSHIFT     (originally 0x12, which also looks like CTRL-R, so converted to 0xF2)
         *      CHARCODE_SHIFTLOCK  (originally 0x14, which also looks like CTRL-T, so converted to 0xF4)
         *
         * Again, as things currently stand, iOS devices will never generate the above charCodes, so any C1P software
         * that relies detecting on shift-key state changes will not work on those devices.
         *
         * For reference purposes, I've left some parenthetical references to corresponding keyCodes in the comments
         * below.  Relying on keyCodes is problematic, which is why I've tried to eliminate most dependencies on them,
         * but still, they're all you get on keyDown/keyUp events.
         */
        this.aCharCodeMap = [];
        this.aCharCodeMap[0x31] = 0x7700; this.aCharCodeMap[0x21] = 0x7700 + this.CHARCODE_LSHIFT;  // 1 (0x31) ! (0x31)
        this.aCharCodeMap[0x32] = 0x7600; this.aCharCodeMap[0x22] = 0x7600 + this.CHARCODE_LSHIFT;  // 2 (0x32) " (0xDE)
        this.aCharCodeMap[0x33] = 0x7500; this.aCharCodeMap[0x23] = 0x7500 + this.CHARCODE_LSHIFT;  // 3 (0x33) # (0x33)
        this.aCharCodeMap[0x34] = 0x7400; this.aCharCodeMap[0x24] = 0x7400 + this.CHARCODE_LSHIFT;  // 4 (0x34) $ (0x34)
        this.aCharCodeMap[0x35] = 0x7300; this.aCharCodeMap[0x25] = 0x7300 + this.CHARCODE_LSHIFT;  // 5 (0x35) % (0x35)
        this.aCharCodeMap[0x36] = 0x7200; this.aCharCodeMap[0x26] = 0x7200 + this.CHARCODE_LSHIFT;  // 6 (0x36) & (0x37)
        this.aCharCodeMap[0x37] = 0x7100; this.aCharCodeMap[0x27] = 0x7100 + this.CHARCODE_LSHIFT;  // 7 (0x37) ' (0xDE)
        this.aCharCodeMap[0x38] = 0x6700; this.aCharCodeMap[0x28] = 0x6700 + this.CHARCODE_LSHIFT;  // 8 (0x38) ( (0x39)
        this.aCharCodeMap[0x39] = 0x6600; this.aCharCodeMap[0x29] = 0x6600 + this.CHARCODE_LSHIFT;  // 9 (0x39) ) (0x30)
        this.aCharCodeMap[0x30] = 0x6500;   // 0
        this.aCharCodeMap[0x3A] = 0x6400; this.aCharCodeMap[0x2A] = 0x6400 + this.CHARCODE_LSHIFT;  // : (0xBA) * (0x38)
        this.aCharCodeMap[0x2D] = 0x6300; this.aCharCodeMap[0x3D] = 0x6300 + this.CHARCODE_LSHIFT;  // - (0xBD) = (0xBB)
      //this.aCharCodeMap[0x00] = 0x6200;   // RUB-OUT (no mapping chosen for this key yet)
        this.aCharCodeMap[0x2E] = 0x5700; this.aCharCodeMap[0x3E] = 0x5700 + this.CHARCODE_LSHIFT;  // . (0xBE) > (0xBE)
        this.aCharCodeMap[0x6C] = 0x5600; this.aCharCodeMap[0x4C] = 0x5600 + this.CHARCODE_LSHIFT; this.aCharCodeMap[0x5C] = 0x5600 + this.CHARCODE_LSHIFT; // l L \
        this.aCharCodeMap[0x6F] = 0x5500; this.aCharCodeMap[0x4F] = 0x5500 + this.CHARCODE_LSHIFT; this.aCharCodeMap[this.CHARCODE_DELETE] = 0x5500 + this.CHARCODE_LSHIFT; // o O DELETE
        this.aCharCodeMap[this.CHARCODE_LF] = 0x5400;   // LINE-FEED
        this.aCharCodeMap[this.CHARCODE_CR] = 0x5300;   // RETURN
        this.aCharCodeMap[0x77] = 0x4700; this.aCharCodeMap[0x57] = 0x4700 + this.CHARCODE_LSHIFT;  // w W
        this.aCharCodeMap[0x65] = 0x4600; this.aCharCodeMap[0x45] = 0x4600 + this.CHARCODE_LSHIFT;  // e E
        this.aCharCodeMap[0x72] = 0x4500; this.aCharCodeMap[0x52] = 0x4500 + this.CHARCODE_LSHIFT;  // r R
        this.aCharCodeMap[0x74] = 0x4400; this.aCharCodeMap[0x54] = 0x4400 + this.CHARCODE_LSHIFT;  // t T
        this.aCharCodeMap[0x79] = 0x4300; this.aCharCodeMap[0x59] = 0x4300 + this.CHARCODE_LSHIFT;  // y Y
        this.aCharCodeMap[0x75] = 0x4200; this.aCharCodeMap[0x55] = 0x4200 + this.CHARCODE_LSHIFT;  // u U
        this.aCharCodeMap[0x69] = 0x4100; this.aCharCodeMap[0x49] = 0x4100 + this.CHARCODE_LSHIFT;  // i I
        this.aCharCodeMap[0x73] = 0x3700; this.aCharCodeMap[0x53] = 0x3700 + this.CHARCODE_LSHIFT;  // s S
        this.aCharCodeMap[0x64] = 0x3600; this.aCharCodeMap[0x44] = 0x3600 + this.CHARCODE_LSHIFT;  // d D
        this.aCharCodeMap[0x66] = 0x3500; this.aCharCodeMap[0x46] = 0x3500 + this.CHARCODE_LSHIFT;  // f F
        this.aCharCodeMap[0x67] = 0x3400; this.aCharCodeMap[0x47] = 0x3400 + this.CHARCODE_LSHIFT;  // g G
        this.aCharCodeMap[0x68] = 0x3300; this.aCharCodeMap[0x48] = 0x3300 + this.CHARCODE_LSHIFT;  // h H
        this.aCharCodeMap[0x6A] = 0x3200; this.aCharCodeMap[0x4A] = 0x3200 + this.CHARCODE_LSHIFT;  // j J
        this.aCharCodeMap[0x6B] = 0x3100; this.aCharCodeMap[0x4B] = 0x3100 + this.CHARCODE_LSHIFT; this.aCharCodeMap[0x5B] = 0x3100 + this.CHARCODE_LSHIFT; // k K [
        this.aCharCodeMap[0x78] = 0x2700; this.aCharCodeMap[0x58] = 0x2700 + this.CHARCODE_LSHIFT;  // x X
        this.aCharCodeMap[0x63] = 0x2600; this.aCharCodeMap[0x43] = 0x2600 + this.CHARCODE_LSHIFT;  // c C
        this.aCharCodeMap[0x76] = 0x2500; this.aCharCodeMap[0x56] = 0x2500 + this.CHARCODE_LSHIFT;  // v V
        this.aCharCodeMap[0x62] = 0x2400; this.aCharCodeMap[0x42] = 0x2400 + this.CHARCODE_LSHIFT;  // b B
        this.aCharCodeMap[0x6E] = 0x2300; this.aCharCodeMap[0x4E] = 0x2300 + this.CHARCODE_LSHIFT; this.aCharCodeMap[0x5E] = 0x2300 + this.CHARCODE_LSHIFT; // n N ^
        this.aCharCodeMap[0x6D] = 0x2200; this.aCharCodeMap[0x4D] = 0x2200 + this.CHARCODE_LSHIFT; this.aCharCodeMap[0x5D] = 0x2200 + this.CHARCODE_LSHIFT; // m M ]
        this.aCharCodeMap[0x2C] = 0x2100; this.aCharCodeMap[0x3C] = 0x2100 + this.CHARCODE_LSHIFT;  // , (0xBC) < (0xBC)
        this.aCharCodeMap[0x71] = 0x1700; this.aCharCodeMap[0x51] = 0x1700 + this.CHARCODE_LSHIFT;  // q Q
        this.aCharCodeMap[0x61] = 0x1600; this.aCharCodeMap[0x41] = 0x1600 + this.CHARCODE_LSHIFT;  // a A
        this.aCharCodeMap[0x7A] = 0x1500; this.aCharCodeMap[0x5A] = 0x1500 + this.CHARCODE_LSHIFT;  // z Z
        this.aCharCodeMap[0x20] = 0x1400;   // SPACE
        this.aCharCodeMap[0x2F] = 0x1300; this.aCharCodeMap[0x3F] = 0x1300 + this.CHARCODE_LSHIFT;  // / (0xBF) ? (0xBF)
        this.aCharCodeMap[0x3B] = 0x1200; this.aCharCodeMap[0x2B] = 0x1200 + this.CHARCODE_LSHIFT;  // ; (0xBA) + (0xBB)
        this.aCharCodeMap[0x70] = 0x1100; this.aCharCodeMap[0x50] = 0x1100 + this.CHARCODE_LSHIFT; this.aCharCodeMap[0x40] = 0x1100 + this.CHARCODE_LSHIFT; // p P @
      //this.aCharCodeMap[0x00]                     = 0x0700;   // REPEAT (no mapping chosen for this key yet)
        this.aCharCodeMap[this.CHARCODE_CTRL]       = 0x0600;   // CTRL
        this.aCharCodeMap[this.CHARCODE_ESC]        = 0x0500;   // ESC
        this.aCharCodeMap[this.CHARCODE_LSHIFT]     = 0x0200;   // LEFT-SHIFT
        this.aCharCodeMap[this.CHARCODE_RSHIFT]     = 0x0100;   // RIGHT-SHIFT
        this.aCharCodeMap[this.CHARCODE_SHIFTLOCK]  = 0x0000;   // SHIFT-LOCK

        this.reset();
    }

    /**
     * @this {C1PKeyboard}
     */
    reset()
    {
        this.setModel(this.nDefaultModel);

        /*
         * The physical (not virtual) state of various shift keys,
         * with the exception of SHIFT-LOCK, which needs to start in the
         * "locked" position, regardless of the physical CAPS-LOCK state.
         *
         * QUESTION: In JavaScript, how do you query initial key states?
         */
        this.bitsShift = this.BIT_SHIFTLOCK;

        /*
         * Every SET bit of bKbdRows represents an enabled row (this convention
         * is the REVERSE of the C1P hardware, but I prefer it).
         */
        this.bKbdRows = 0x00;

        /*
         * Every SET bit of abKbdCols represents an enabled column; again, this is
         * the REVERSE of the C1P hardware, but I compensate for that difference with
         * a quick XOR in updateMemory().
         *
         * Like bitsShift, this 8x8 array (8 byte values, each with 8 bits) represents
         * the physical state of the keyboard, encoded in C1P format; the C1P won't
         * actually see data this until updateMemory() decides it's time to propagate it.
         */
        this.abKbdCols = [this.BIT_SHIFTLOCK,0x00,0x00,0x00,0x00,0x00,0x00,0x00];

        /*
         * After a new key event has updated abKbdCols, we "push" a copy of that
         * updated keyboard state onto this array. updateMemory() will then "shift"
         * the next copy off, update its own copy (abKbdColsLast), and then propagate
         * that to the C1P's keyboard memory, once the CPU has had enough time to
         * process the previous event (see nCyclesThreshold).
         */
        this.aKbdStates = [];

        /*
         * When a key "down" is simulated on behalf of some charCode, I save
         * the timer object responsible for simulating the key "up" here, so that
         * if I detect the actual key going up sooner, I can cancel the timer and
         * simulate the "up" immediately.  Similarly, if another press for the same
         * key arrives before last one expired (eg, auto-repeat), I need to cancel
         * the previous timer for that key before setting another.
         *
         * NOTE: If this is anything other than an initial reset, then we need to
         * make sure there are no outstanding timers before we blow the array away.
         */
        if (this.aKeyTimers) {
            for (var i in this.aKeyTimers) {
                if (isNaN(+i)) continue; // ignore any non-numeric properties, if any
                if (this.aKeyTimers[i]) clearTimeout(this.aKeyTimers[i]);
            }
        }
        this.aKeyTimers = [];
        this.prevCharDown = 0;
        this.prevKeyDown = 0;

        /*
         * These save the last values written to keyboard memory, so that I can
         * avoid rewriting the memory if the values haven't changed since the last update.
         */
        this.bWriteLast = -1;
        this.abKbdColsLast = this.abKbdCols;

        /*
         * Due to the way the C1P scans its keyboard rows (from R0 up to R7 *or* to the
         * highest row for which a "down" key has just been detected), if we get back-to-back
         * key events for, say, "I" and then "S", the C1P will see only the "S", never the "I",
         * because "I" is on a higher row.
         *
         * That's why we have aKbdStates, which relies on the following CPU activity variables.
         */
        this.nReadsSinceLastEvent = 0;
        this.nWritesSinceLastEvent = 0;
        this.nCyclesSinceLastEvent = 0;

        /*
         * Make sure the auto-injection buffer is empty, too (an injection could have been
         * in progress on any reset after the first).
         */
        this.sInjectBuffer = "";
    }

    /**
     * @this {C1PKeyboard}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "esc", "ctrl-c")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        /*
         * I want to bind to the first caller (ie, the Screen), not subsequent ones (eg, the Panel)
         */
        if (this.bindings[sBinding] === undefined) {
            switch(sBinding) {
            case "keyDown":
                this.bindings[sBinding] = control;
                control.onkeydown = function(kbd) {
                    return function(event) {
                        return kbd.keyEvent(event, true);
                    };
                }(this);
                return true;
            case "keyPress":
                this.bindings[sBinding] = control;
                control.onkeypress = function(kbd) {
                    return function(event) {
                        return kbd.keyPress(event);
                    };
                }(this);
                return true;
            case "keyUp":
                this.bindings[sBinding] = control;
                control.onkeyup = function(kbd) {
                    return function(event) {
                        return kbd.keyEvent(event, false);
                    };
                }(this);
                return true;
            case "break":
                /*
                 * The BREAK key is unusual: it requires us forcing the equivalent of someone pressing
                 * our "Reset" and "Run" buttons.  As things stand, the Computer component is responsible
                 * for end-user "reset" requests, so we can simply arrange to call this.cmp.reset(true).
                 *
                 * NOTE: At the risk of making keyPressSimulate() a bit uglier, I also permit BREAK
                 * there, in case someone wants to "inject" the BREAK key; however, if it's followed by
                 * other injected keys, I'll need to avoid clearing the injection buffer on a reset;
                 * currently, reset() resets everything.
                 */
                this.bindings[sBinding] = control;
                control.onclick = function(kbd) {
                    return function(event) {
                        if (DEBUG) kbd.printf("keyPressSimulate(break)\n");
                        if (kbd.cmp) kbd.cmp.reset(true);
                    };
                }(this);
                return true;
            default:
                if (this.aButtonCodeMap[sBinding] !== undefined) {
                    this.bindings[sBinding] = control;
                    control.onclick = function(kbd, sButton, charCode) {
                        return function(event) {
                            if (DEBUG) kbd.printf("keyPressSimulate(%s)\n", sButton);
                            if (kbd.cpu) kbd.cpu.setFocus();
                            return !kbd.keyPressSimulate(charCode);
                        };
                    }(this, sBinding, this.aButtonCodeMap[sBinding]);
                    return true;
                }
                break;
            }
        }
        return false;
    }

    /**
     * @this {C1PKeyboard}
     * @param {Array} abMemory
     * @param {number} start
     * @param {number} end
     * @param {C1PCPU} cpu
     */
    setBuffer(abMemory, start, end, cpu)
    {
        this.abMem = abMemory;
        this.offKbd = start;
        this.cbKbd = end - start + 1;
        this.offKbdLimit = this.offKbd + this.cbKbd;
        if (cpu) {
            this.cpu = cpu;
            if (DEBUG) cpu.addReadNotify(start, end, this, this.getByte);
            cpu.addWriteNotify(start, end, this, this.setByte);
        }
        this.setReady();
    }

    /**
     * @this {C1PKeyboard}
     * @param {number} nModel
     */
    setModel(nModel)
    {
        this.nModel = nModel;
        /*
         * Default to Model 600 behavior, where the keyboard status lines are inverted
         * (ie, a zero bit indicates a key press).
         */
        this.bInvert = 0xff;
        if (this.nModel != 600) {
            /*
             * No inversion for model 542
             */
            this.bInvert = 0x00;
            this.printf("updated keyboard model: %d\n", this.nModel);
        }
    }

    /**
     * @this {C1PKeyboard}
     * @param {boolean} fOn
     * @param {C1PComputer} cmp
     *
     * We make a note of the Computer component, so that we can invoke its reset() method when our simulated
     * BREAK key is pressed, and we query the Debugger component so that we can use its info() and halt() functions,
     * which we use to buffer information without adversely affecting timing and then dump later using the Debugger's
     * "info" command.
     */
    setPower(fOn, cmp)
    {
        if (fOn && !this.flags.powered) {
            this.flags.powered = true;
            this.cmp = cmp;
            if (DEBUGGER) this.dbg = cmp.getComponentByType("debugger");
        }
    }

    /**
     * @this {C1PKeyboard}
     * @param {boolean} [fReady] is assumed to indicate "ready" unless EXPLICITLY set to false
     */
    setReady(fReady)
    {
        this.iOS = WebLib.isUserAgent("iOS");
        this.fMobile = (this.iOS || WebLib.isUserAgent("Android"));
        if (DEBUGGER && this.dbg && this.dbg.messageEnabled(this.dbg.MESSAGE_KBD)) {
            this.dbg.printf("mobile keyboard support: %b (%s)\n", this.fMobile, window.navigator.userAgent);
        }
        super.setReady();
    }

    /**
     * calcReleaseDelay(fRepeat)
     *
     * This attempts to scale our default "release" delay appropriately for the current CPU speed.
     *
     * Note that if the effective CPU speed exceeds 16Mhz, it becomes very difficult to rely on timer-driven key events
     * (even the shortest available timer delay still gives the CPU too much time, so it thinks that even the briefest key
     * press represents a held key, resulting in multiple keystrokes).  We deal with this by artificially limiting the top
     * speed in the CPU component (the current limit for "fast" mode is 8Mhz; see CPU.mhzFast)
     *
     * @this {C1PKeyboard}
     * @param {boolean} fRepeat is true if a timeout had already been active for the current key
     * @returns {number}
     */
    calcReleaseDelay(fRepeat)
    {
        /*
         * NOTE: This delay affects only the "up" delay, not repeat delay, but it's useful to have an initial
         * "up" delay that's sufficiently large to ensure the native machine's auto-repeat behavior cooperates
         * with the virtual machine's auto-repeat behavior. msReleaseDelay is the initial delay, msReleaseRepeat
         * is the subsequent delay.
         *
         * Unfortunately, with a large initial delay, we need to enable the auto-clear code in the keyEvent()
         * handler, otherwise doing things like pressing ENTER repeatedly will result in sluggish behavior
         * (because you can generally press/release/repress keys faster than they will auto-repeat).
         */
        var msDelay = (fRepeat? this.msReleaseRepeat: this.msReleaseDelay);
        if (this.cpu && this.cpu.mhz) {
            msDelay /= this.cpu.mhz;
        }
        return msDelay;
    }

    /**
     * @this {C1PKeyboard}
     * @param {number} [notCharCode]
     */
    autoClear(notCharCode)
    {
        if (this.prevCharDown && (notCharCode === undefined || notCharCode != this.prevCharDown)) {
            if (DEBUGGER && this.dbg && this.dbg.messageEnabled(this.dbg.MESSAGE_KBD)) {
                this.dbg.printf("autoClear(%#04x)\n", this.prevCharDown);
            }
            Component.assert(this.aKeyTimers[this.prevCharDown]);
            clearTimeout(this.aKeyTimers[this.prevCharDown]);
            this.keyEventSimulate(this.prevCharDown, false, this.SIMCODE_AUTOCLEAR);
        }
    }

    /**
     * @this {C1PKeyboard}
     * @param {string} sKeyCodes
     * @param {number} [msDelay] is an optional injection delay (default is msInjectDelay)
     */
    injectKeys(sKeyCodes, msDelay)
    {
        this.sInjectBuffer = sKeyCodes;
        if (DEBUG) this.printf(MESSAGE.LOG, "injectKeys(%s)\n", this.sInjectBuffer.split("\n").join("\\n"));
        this.injectKeysFromBuffer(msDelay || this.msInjectDelay);
    }

    /**
     * @this {C1PKeyboard}
     * @param {number} msDelay is the delay between injected keys
     */
    injectKeysFromBuffer(msDelay)
    {
        if (this.sInjectBuffer.length > 0) {
            var ch = this.sInjectBuffer.charCodeAt(0);
            /*
             * I could require all callers to supply CRs instead of LFs, but this is friendlier.
             */
            if (ch == 0x0a) {
                ch = 0x0d;
            }
            /*
             * Also, if upper-case characters are being injected, convert them to lower-case, and rely
             * on the virtual SHIFT-LOCK remaining locked for the duration; otherwise, we'd have to simulate
             * SHIFT key presses around every character (or around the entire set of characters) as well.
             *
             * UPDATE: Even though keyPressSimulate() currently has some code to do this automatically now,
             * it's really intended as a work-around for a SHIFT-related problem on iOS devices only, so
             * we can't rely on that in the general case.
             */
            if (ch >= 0x41 && ch <= 0x5A) {
                ch += 0x20;
            }
            this.sInjectBuffer = this.sInjectBuffer.substr(1);
            this.keyPressSimulate(ch);
        }
        if (this.sInjectBuffer.length > 0) {
            setTimeout(function(kbd) { return function() {kbd.injectKeysFromBuffer(msDelay);}; }(this), msDelay);
        }
    }

    /**
     * @this {C1PKeyboard}
     * @param {Object} event
     * @param {boolean} fDown is true if called for a keyDown event, false if called for a keyUp event
     * @returns {boolean} true to pass the event along, false to consume it
     */
    keyEvent(event, fDown)
    {
        var fPass;
        var fAutoClear = !fDown;
        var keyCode = event.keyCode;

        if (fDown) this.prevKeyDown = keyCode;

        if (keyCode == this.CHARCODE_LSHIFT - this.PSEUDO_CHARCODE) {
            this.bitsShift &= ~this.BIT_LSHIFT;
            if (fDown) this.bitsShift |= this.BIT_LSHIFT;
            keyCode += this.PSEUDO_CHARCODE;
            fAutoClear = false;
        }
        else
        if (keyCode == this.CHARCODE_RSHIFT - this.PSEUDO_CHARCODE) {
            this.bitsShift &= ~this.BIT_RSHIFT;
            if (fDown) this.bitsShift |= this.BIT_RSHIFT;
            keyCode += this.PSEUDO_CHARCODE;
            fAutoClear = false;
        }
        else
        if (keyCode == this.CHARCODE_CTRL - this.PSEUDO_CHARCODE) {
            this.bitsShift &= ~this.BIT_CTRL;
            if (fDown) this.bitsShift |= this.BIT_CTRL;
            keyCode += this.PSEUDO_CHARCODE;
            fAutoClear = false;
        }
        else
        if (keyCode == this.CHARCODE_SHIFTLOCK - this.PSEUDO_CHARCODE) {
            /*
             * FYI, this generates a "down" event ONLY when getting locked, and an "up" event ONLY
             * when getting unlocked--which is exactly what I want, even though that may seem a little
             * counter-intuitive (since the key itself actually went down AND up for each event).
             *
             * Moreover, since most people do NOT have CAPS-LOCK enabled, whereas the C1P needs it
             * enabled by default, we invert fDown, so that if the user enables CAPS-LOCK for some
             * reason, we treat is as *disabling* SHIFT-LOCK, and vice versa.
             */
            fDown = !fDown;
            this.bitsShift &= ~this.BIT_SHIFTLOCK;
            if (fDown) this.bitsShift |= this.BIT_SHIFTLOCK;
            keyCode += this.PSEUDO_CHARCODE;
            fAutoClear = false;
        }
        else
        if (keyCode == this.KEYCODE_COMMAND) {
            /*
             * Avoid interfering with useful Browser key commands, like COMMAND-Q, COMMAND-T, etc.
             */
            this.bitsShift &= ~this.BIT_COMMAND;
            if (fDown) this.bitsShift |= this.BIT_COMMAND;
            fAutoClear = false;
            fPass = true;
        }
        else
        if (keyCode == this.KEYCODE_TAB) {
            /*
             * If I don't consume TAB on the "down" event, then that's all I'll see, because the
             * browser will see it and give focus to the next control. But the "down" side is that
             * that no "press" event will be generated.  This puts it in the same category as ESC,
             * which also generates "down" and "up" events (LOTS of "down" events for that matter),
             * but no "press" event.  However, the C1P has no TAB key, so it's safe to completely ignore.
             */
            fPass = fAutoClear = false;
        }
        else
        if (keyCode == this.KEYCODE_ESC || keyCode == this.KEYCODE_DELETE) {
            /*
             * I don't get keyPress events for ESC (why?) and I never want the browser to act on DELETE
             * (which does double-duty as the "Back" button and leaves the current page), so I have to
             * simulate them now.
             *
             * Note that I call the "press" simulate method and NOT the "event" simulate method, because
             * the former takes care of simulating both individual "down" and "up" events.
             */
            if (DEBUG && DEBUGGER && keyCode == this.KEYCODE_ESC && this.dbg) this.dbg.halt();
            fPass = (fDown? !this.keyPressSimulate(keyCode) : false);
        }
        else {
            /*
             * Pass on everything else; I'll take care of this key at the keyPress stage, not the
             * the keyDown or keyUp stage.
             */
            fPass = true;
            /*
             * At this point, I have a difficult choice to make: leave fAutoClear true for any remaining
             * "up" events, so that keys will repeat immediately when released/pressed repeatedly (most
             * noticeable with the Enter key), or set fAutoClear to false to ensure that polling apps have
             * enough time to see every key press.
             *
             * I've decided that the former is more important than the latter, so if polling apps are still
             * missing keystrokes, then perhaps nCyclesThreshold needs to be supplemented in some way.
             *
             *      fAutoClear = false;
             */
        }

        if (fAutoClear) {
            /*
             * When you use a command like COMMAND-T, I see the COMMAND key going down, but not going up,
             * so I think the COMMAND key is still down and ignore all input; to easily get out of that state,
             * I clear our internal BIT_COMMAND whenever I see ANY key go up (well, ALMOST any key; cases
             * above that explicitly clear fAutoClear -- such as the COMMAND key itself -- are exceptions
             * to the rule).
             */
            this.bitsShift &= ~this.BIT_COMMAND;
            /*
             * I don't reliably get keyDown/keyUp events for all keys on all devices, but for those devices that
             * I DO, it seems like a good idea to cancel any pending key "up" simulation on receipt of the actual
             * keyUp event.
             *
             * However, the following code is problematic for Safari on iOS devices, which as noted above, doesn't
             * generate keyDown/keyUp events until after the press operation is complete, and then they are generated
             * in rapid succession, which doesn't give the C1P enough time to detect the key.  So I simply don't do
             * this on iOS devices.
             */
            if (!this.fMobile && keyCode == this.prevKeyDown) this.autoClear();
        }

        if (fPass === undefined) {
            fPass = !this.keyEventSimulate(keyCode, fDown, this.SIMCODE_KEYEVENT);
        }

        if (DEBUGGER && this.dbg && this.dbg.messageEnabled(this.dbg.MESSAGE_KBD)) {
            this.dbg.printf("key%s(%#04x): %s\n", fDown? "Down" : "Up", keyCode, fPass? "pass" : "consume");
        }
        return fPass;
    }

    /**
     * @this {C1PKeyboard}
     * @param {Object} event
     * @returns {boolean} true to pass the event along, false to consume it
     *
     * We've stopped relying on keyPress for keyboard emulation purposes, but it's still handy to hook and monitor
     * when debugging.
     */
    keyPress(event)
    {
        var fPass = true;
        /*
         * Browser-independent charCode extraction...
         */
        event = event || window.event;
        var charCode = event.which || event.keyCode;

        /*
         * Let's stop any injection currently in progress, too
         */
        this.sInjectBuffer = "";

        if (this.bitsShift & this.BIT_COMMAND) {
            this.bitsShift &= ~this.BIT_COMMAND;
        } else {
            fPass = !this.keyPressSimulate(charCode);
        }

        if (DEBUGGER && this.dbg && this.dbg.messageEnabled(this.dbg.MESSAGE_KBD)) {
            this.dbg.printf("keyPress(%#04x): %s\n", charCode, fPass? "pass" : "consume");
        }
        return fPass;
    }

    /**
     * @this {C1PKeyboard}
     * @param {number} charCode
     * @returns {boolean} true if successfully simulated, false if unrecognized/unsupported key
     */
    keyPressSimulate(charCode)
    {
        var fSimulated = false;
        if (charCode == this.CHARCODE_BREAK) {
            /*
             * The BREAK key is not wired up to the keyboard like the other keys are, but we simulate
             * it here, so that it can be injected like any other key.
             */
            if (this.cmp) {
                this.cmp.reset(true);
                fSimulated = true;
            }
        }
        else {
            /*
             * WARNING: The next line is why you cannot use SHIFT-N, SHIFT-O, SHIFT-P, etc. But without it,
             * iOS devices with the annoying "autocapitalization" feature enabled make the keyboard unusable
             * by default.  The trade-off is: either require all iOS users to first tap the shift key to turn
             * "autocapitalization" off, or lose the ability to type any of the special shifted alphabetic keys.
             * I choose the latter, because I have friendlier aliases already defined for those keys (eg,
             * ^, DELETE, and @).
             *
             * Furthermore, by doing this for iOS (and Android) devices ONLY, other platforms retain the ability
             * to use those special key combos.
             */
            if (this.fMobile) {
                if (charCode >= 0x41 && charCode <= 0x5A) {
                    charCode += 0x20;
                }
            }

            /*
             * Auto-clear any previous down key EXCEPT for charCode (because it may be held and repeating).
             */
            this.autoClear(charCode);

            if (this.keyEventSimulate(charCode, true, this.SIMCODE_KEYPRESS)) {
                /*
                 * If CPU speed is unlimited, then we switch to an alternate approach, which is to immediately
                 * queue a "release" event as well.  The problem with the original timer-based approach at high
                 * speeds is that the the CPU may get lucky and execute a LOT of instructions between delivery
                 * of the keyPress event and the "keyTimeout" event. In that case, even enabling keyboard polling
                 * detection in updateMemory() won't entirely help -- although we do that, too -- because JavaScript
                 * events are delivered synchronously, so it may simply take too long for the "keyTimeout" event
                 * to arrive.
                 *
                 * Why don't we ALWAYS do this? Because in the normal case (SPEED_SLOW, and even SPEED_FAST) we want
                 * to faithfully simulate how long a key is held, so that features like auto-repeat work properly.
                 * You'll notice in the SPEED_MAX case, holding a key no longer has any effect; even though multiple
                 * keyPress events WILL arrive, if we simulate a release immediately after each one, then repeat
                 * is defeated.  Also, the keyboard polling detection code in updateMemory() doesn't work well for
                 * all apps.
                 */
                if (this.cpu.speed == this.cpu.SPEED_MAX) {
                    this.keyEventSimulate(charCode, false, this.SIMCODE_KEYRELEASE);
                }
                else {
                    var fRepeat = false;
                    if (this.aKeyTimers[charCode]) {
                        clearTimeout(this.aKeyTimers[charCode]);
                        fRepeat = true;
                    }
                    var msDelay = this.calcReleaseDelay(fRepeat);
                    this.aKeyTimers[this.prevCharDown = charCode] = setTimeout(function(kbd) { return function() {kbd.keyEventSimulate(charCode, false, kbd.SIMCODE_KEYTIMEOUT);}; }(this), msDelay);
                    if (DEBUGGER && this.dbg && this.dbg.messageEnabled(this.dbg.MESSAGE_KBD)) {
                        this.dbg.printf("keyPressSimulate(%#04x): setTimeout()\n", charCode);
                    }
                }
                fSimulated = true;
            }
        }
        if (DEBUGGER && this.dbg && this.dbg.messageEnabled(this.dbg.MESSAGE_KBD)) {
            this.dbg.printf("keyPressSimulate(%#04x): %b\n", charCode, fSimulated);
        }
        return fSimulated;
    }

    /**
     * @this {C1PKeyboard}
     * @param {number} charCode
     * @param {boolean} fDown
     * @param {number} simCode indicates the origin of the event
     * @returns {boolean} true if successfully simulated, false if unrecognized/unsupported key
     */
    keyEventSimulate(charCode, fDown, simCode)
    {
        var fSimulated = false;
        if (!fDown) {
            this.aKeyTimers[charCode] = null;
            if (this.prevCharDown == charCode) this.prevCharDown = 0;
        }
        var bShift = 0;
        var bCode = this.aCharCodeMap[charCode];
        if (bCode === undefined) {
            /*
             * Perhaps we're dealing with a CTRL variation of an alphabetic key; this won't
             * affect non-CTRL-key combos like CR or LF, because they're defined in aCharCodeMap,
             * and this bit of code relieves us from having to explicitly define every CTRL-letter
             * possibility in aCharCodeMap. However, CTRL-anything-else is a different matter.
             */
            if (charCode >= 0x01 && charCode <= 0x1A) {
                charCode += 0x40;
                bShift = this.CHARCODE_CTRL;
            }
            bCode = this.aCharCodeMap[charCode];
        }
        if (bCode !== undefined) {
            var iRow = bCode >> 12;
            var iCol = (bCode >> 8) & 0xf;
            if (!bShift) bShift = bCode & 0xff;
            if (fDown) {
                this.abKbdCols[iRow] |= 1 << iCol;
                if (bShift == this.CHARCODE_CTRL) {
                    this.abKbdCols[0] |= this.BIT_CTRL;
                }
                else if (bShift == this.CHARCODE_LSHIFT) {
                    this.abKbdCols[0] |= this.BIT_LSHIFT;
                }
                else if (bShift == this.CHARCODE_RSHIFT) {
                    this.abKbdCols[0] |= this.BIT_RSHIFT;
                }
                else {
                    this.abKbdCols[0] &= ~this.BITS_SIMULATE;
                }
            }
            else {
                this.abKbdCols[iRow] &= ~(1 << iCol);
                this.abKbdCols[0] &= ~this.BITS_SIMULATE;
                this.abKbdCols[0] |= (this.bitsShift & this.BITS_SIMULATE);
            }
            var fPropagate = (simCode == this.SIMCODE_KEYPRESS && !this.aKbdStates.length);
            this.aKbdStates.push(this.abKbdCols.slice());
            this.updateMemory(fPropagate);
            fSimulated = true;
        }
        if (DEBUG && this.dbg) this.dbg.info("keyEventSimulate(" + StrLib.toHexByte(charCode) + "," + (fDown?"down":"up") + "," + this.aSimCodeDescs[simCode] + "): " + (fSimulated? "true" : "false"));
        return fSimulated;
    }

    /**
     * @this {C1PKeyboard}
     * @param {number} addr
     * @param {number|undefined} addrFrom (not defined whenever the Debugger tries to read the specified addr)
     *
     * NOTE: As long as we rely on the CPU processing a certain number of cycles (nCyclesThreshold) before
     * propagating the next kbd state, and not how many reads and/or writes the CPU has performed, we could
     * eliminate the overhead of this read-notification handler.
     *
     * It's useful for diagnostic purposes, which is why it's still here.
     */
    getByte(addr, addrFrom)
    {
        /*
         * Don't trigger any further hardware emulation (beyond what we've already stored in memory) if
         * the Debugger performed this read (need a special Debugger I/O command if/when you really want to do that).
         */
        if (DEBUG) {
            if (addrFrom !== undefined) {
                this.nReadsSinceLastEvent++;
                if (DEBUG && this.dbg) this.dbg.info("reading kbd " + StrLib.toHexWord(addr) + " @" + this.cpu.getCycles() + " cycles");
            }
        }
    }

    /**
     * @this {C1PKeyboard}
     * @param {number} addr
     * @param {number|undefined} addrFrom (not defined whenever the Debugger tries to write the specified addr)
     *
     * NOTE: Ordinarily, I wouldn't allow Debugger writes (addrFrom === undefined) to interfere with the simulated
     * hardware state, but for now, I find it useful to be able to prod the simulation code directly from the Debugger.
     */
    setByte(addr, addrFrom)
    {
        var b = this.cpu.getByte(addr);
        this.bKbdRows = b ^ this.bInvert;
        this.nWritesSinceLastEvent++;
        this.updateMemory(false, addr, b);
    }

    /**
     * @this {C1PKeyboard}
     * @param {boolean} fPropagate is true to propagate immediately, false to use normal propagation
     * @param {number} [addr] is the memory address to update; default is the entire memory range
     * @param {number} [bWrite] is the value of any immediately preceding write, or undefined if none
     *
     * Update emulated keyboard memory.  By updating the keyboard memory whenever it's written to,
     * as well as whenever a key is pressed or released, I avoid the hit of a read-notification handler.
     * Besides, read-notification handlers are called only AFTER the read has been performed, so it
     * would be too late to update the memory at that point.
     *
     * WARNING: There is a slight risk of an application reading from a different keyboard memory address
     * than it just wrote to.  That would be legal, but very odd, and we save valuable time by not updating
     * every other byte in the entire memory range every time a different keyboard "row" is selected.
     */
    updateMemory(fPropagate, addr, bWrite)
    {
        /*
         * First, we determine if it's time for event propagation...
         */
        var nCycles = this.cpu.getCycles();

        /*
         * Monitoring the C1P's keyboard polling activity is problematic, because not all apps monitor
         * the keyboard in the same way.  It's better to simply wait for a certain amount of CPU activity to
         * occur (nCyclesThreshold); it's more reliable and it scales well, because it's not affected by
         * how many cycles we're executing in real time.  The trick is finding a value for nCyclesThreshold
         * that works well across the board.
         */
        if (!fPropagate) {
            if (this.cpu.speed == this.cpu.SPEED_MAX) {
                fPropagate = (addr !== undefined && this.nWritesSinceLastEvent >= 32);
            }
            else {
                /*
                 * We have to handle the delta being less than zero, in case the user changed the speed, thereby
                 * resetting the cycle count returned by getCycles().
                 */
                var nCycleDelta = nCycles - this.nCyclesSinceLastEvent;
                fPropagate = (nCycleDelta < 0 || nCycleDelta >= this.nCyclesThreshold);
            }
        }

        /*
         * Next, we propagate any buffered state (in abKbdStates) as appropriate
         */
        if (fPropagate) {
            var abKbdCols = this.aKbdStates.shift();
            if (abKbdCols !== undefined) {
                if (DEBUG && this.dbg) this.dbg.info("kbd update @" + nCycles + " cycles, " + this.nWritesSinceLastEvent + " writes");
                this.abKbdColsLast = abKbdCols;
            }
            this.nReadsSinceLastEvent = this.nWritesSinceLastEvent = 0;
            this.nCyclesSinceLastEvent = nCycles;
        }
        /*
         * Then we calculate the value (which may or may not have just been propagated),
         * based on the currently selected keyboard row(s) (bKbdRows).
         */
        var b = 0;
        for (var iRow=0; iRow < 8; iRow++) {
            if (!(this.bKbdRows & (1 << iRow))) {
                continue;
            }
            b |= this.abKbdColsLast[iRow];
        }
        /*
         * Now invert all the bits, since I SET the column bit of an "active" key,
         * whereas the C1P Model 600 keyboard expects "active" column bits to be CLEAR.
         */
        b ^= this.bInvert;

        if (addr !== undefined) {
            this.abMem[addr] = b;
        }
        else {
            addr = this.offKbd;
            if (b != this.bWriteLast) {
                for (var offset=addr; offset < this.offKbdLimit; offset++) {
                    this.abMem[offset] = b;
                }
            }
        }
        this.bWriteLast = b;
        if (DEBUG && this.dbg) this.dbg.info("updating kbd " + StrLib.toHexWord(addr) + " with " + StrLib.toHexByte(b) + (bWrite !== undefined? (" following write " + StrLib.toHexByte(bWrite)) : "") + " @" + nCycles + " cycles");
    }

    /**
     * isShift()
     *
     * @this {C1PKeyboard}
     * @param {number} charCode
     * @returns {boolean}
     *
     isShift(charCode)
     {
         return charCode == this.CHARCODE_LSHIFT || charCode == this.CHARCODE_RSHIFT || charCode == this.CHARCODE_CTRL || charCode == this.CHARCODE_SHIFTLOCK;
     }
     */

    /**
     * C1PKeyboard.init()
     *
     * This function operates on every HTML element of class "keyboard", extracting the
     * JSON-encoded parameters for the C1PKeyboard constructor from the element's "data-value"
     * attribute, invoking the constructor to create a C1PKeyboard component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        var aeKbd = Component.getElementsByClass(APPCLASS, "keyboard");
        for (var iKbd=0; iKbd < aeKbd.length; iKbd++) {
            var eKbd = aeKbd[iKbd];
            var parmsKbd = Component.getComponentParms(eKbd);
            var kbd = new C1PKeyboard(parmsKbd);
            Component.bindComponentControls(kbd, eKbd, APPCLASS);
        }
    }
}

/*
 * Initialize every Keyboard module on the page.
 */
WebLib.onInit(C1PKeyboard.init);
