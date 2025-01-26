/**
 * @fileoverview Defines browser keyboard constants
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

const Keys = {
    /*
     * Keys and/or key combinations that generate common ASCII codes.
     *
     * NOTE: If you're looking for a general-purpose ASCII code table, see StrLib.ASCII in strlib.js;
     * if something's missing, that's probably the more appropriate table to add it to.
     *
     * TODO: The Closure Compiler doesn't inline all references to these values, at least those with
     * quoted property names, which is why I've 'unquoted' as many of them as possible.  One solution
     * would be to add mnemonics for all of them, not just the non-printable ones (eg, SPACE instead
     * of ' ', AMP instead of '&', etc.)
     */
    ASCII: {
          BREAK:  0, CTRL_A:  1, CTRL_B:  2, CTRL_C:  3, CTRL_D:  4, CTRL_E:  5, CTRL_F:  6, CTRL_G:  7,
         CTRL_H:  8, CTRL_I:  9, CTRL_J: 10, CTRL_K: 11, CTRL_L: 12, CTRL_M: 13, CTRL_N: 14, CTRL_O: 15,
         CTRL_P: 16, CTRL_Q: 17, CTRL_R: 18, CTRL_S: 19, CTRL_T: 20, CTRL_U: 21, CTRL_V: 22, CTRL_W: 23,
         CTRL_X: 24, CTRL_Y: 25, CTRL_Z: 26, ESC:    27,
            ' ': 32,    '!': 33,    '"': 34,    '#': 35,    '$': 36,    '%': 37,    '&': 38,    "'": 39,
            '(': 40,    ')': 41,    '*': 42,    '+': 43,    ',': 44,    '-': 45,    '.': 46,    '/': 47,
            '0': 48,    '1': 49,    '2': 50,    '3': 51,    '4': 52,    '5': 53,    '6': 54,    '7': 55,
            '8': 56,    '9': 57,    ':': 58,    ';': 59,    '<': 60,    '=': 61,    '>': 62,    '?': 63,
            '@': 64,     A:  65,     B:  66,     C:  67,     D:  68,     E:  69,     F:  70,     G:  71,
             H:  72,     I:  73,     J:  74,     K:  75,     L:  76,     M:  77,     N:  78,     O:  79,
             P:  80,     Q:  81,     R:  82,     S:  83,     T:  84,     U:  85,     V:  86,     W:  87,
             X:  88,     Y:  89,     Z:  90,    '[': 91,    '\\':92,    ']': 93,    '^': 94,    '_': 95,
            '`': 96,     a:  97,     b:  98,     c:  99,     d: 100,     e: 101,     f: 102,     g: 103,
             h:  104,    i: 105,     j: 106,     k: 107,     l: 108,     m: 109,     n: 110,     o: 111,
             p:  112,    q: 113,     r: 114,     s: 115,     t: 116,     u: 117,     v: 118,     w: 119,
             x:  120,    y: 121,     z: 122,    '{':123,    '|':124,    '}':125,    '~':126,   DEL: 127
    },
    /*
     * Browser keyCodes we must pay particular attention to.  For the most part, these are non-alphanumeric
     * or function keys, some which may require special treatment (eg, preventDefault() if returning false on
     * the initial keyDown event is insufficient).
     *
     * keyCodes for most common ASCII keys can simply use the appropriate ASCII code above.
     *
     * Most of these represent non-ASCII keys (eg, the LEFT arrow key), yet for some reason, browsers defined
     * them using ASCII codes (eg, the LEFT arrow key uses the ASCII code for '%' or 37).
     */
    KEYCODE: {
        /* 0x08 */ BS:          8,          // BACKSPACE        (ASCII.CTRL_H)
        /* 0x09 */ TAB:         9,          // TAB              (ASCII.CTRL_I)
        /* 0x0A */ LF:          10,         // LINE-FEED        (ASCII.CTRL_J) (Some Windows-based browsers used to generate this via CTRL-ENTER)
        /* 0x0D */ CR:          13,         // CARRIAGE RETURN  (ASCII.CTRL_M)
        /* 0x10 */ SHIFT:       16,
        /* 0x11 */ CTRL:        17,
        /* 0x12 */ ALT:         18,
        /* 0x13 */ PAUSE:       19,         // PAUSE/BREAK
        /* 0x14 */ CAPS_LOCK:   20,
        /* 0x1B */ ESC:         27,
        /* 0x20 */ SPACE:       32,
        /* 0x21 */ PGUP:        33,
        /* 0x22 */ PGDN:        34,
        /* 0x23 */ END:         35,
        /* 0x24 */ HOME:        36,
        /* 0x25 */ LEFT:        37,
        /* 0x26 */ UP:          38,
        /* 0x27 */ RIGHT:       39,
        /* 0x27 */ FF_QUOTE:    39,
        /* 0x28 */ DOWN:        40,
        /* 0x2C */ FF_COMMA:    44,
        /* 0x2C */ PRTSC:       44,
        /* 0x2D */ INS:         45,
        /* 0x2E */ DEL:         46,
        /* 0x2E */ FF_PERIOD:   46,
        /* 0x2F */ FF_SLASH:    47,
        /* 0x30 */ ZERO:        48,
        /* 0x31 */ ONE:         49,
        /* 0x32 */ TWO:         50,
        /* 0x33 */ THREE:       51,
        /* 0x34 */ FOUR:        52,
        /* 0x35 */ FIVE:        53,
        /* 0x36 */ SIX:         54,
        /* 0x37 */ SEVEN:       55,
        /* 0x38 */ EIGHT:       56,
        /* 0x39 */ NINE:        57,
        /* 0x3B */ FF_SEMI:     59,
        /* 0x3D */ FF_EQUALS:   61,
        /* 0x5B */ CMD:         91,         // aka WIN
        /* 0x5B */ FF_LBRACK:   91,
        /* 0x5C */ FF_BSLASH:   92,
        /* 0x5D */ RCMD:        93,         // aka MENU
        /* 0x5D */ FF_RBRACK:   93,
        /* 0x60 */ NUM_0:       96,
        /* 0x60 */ NUM_INS:     96,
        /* 0x60 */ FF_BQUOTE:   96,
        /* 0x61 */ NUM_1:       97,
        /* 0x61 */ NUM_END:     97,
        /* 0x62 */ NUM_2:       98,
        /* 0x62 */ NUM_DOWN:    98,
        /* 0x63 */ NUM_3:       99,
        /* 0x63 */ NUM_PGDN:    99,
        /* 0x64 */ NUM_4:       100,
        /* 0x64 */ NUM_LEFT:    100,
        /* 0x65 */ NUM_5:       101,
        /* 0x65 */ NUM_CENTER:  101,
        /* 0x66 */ NUM_6:       102,
        /* 0x66 */ NUM_RIGHT:   102,
        /* 0x67 */ NUM_7:       103,
        /* 0x67 */ NUM_HOME:    103,
        /* 0x68 */ NUM_8:       104,
        /* 0x68 */ NUM_UP:      104,
        /* 0x69 */ NUM_9:       105,
        /* 0x69 */ NUM_PGUP:    105,
        /* 0x6A */ NUM_MUL:     106,
        /* 0x6B */ NUM_ADD:     107,
        /* 0x6D */ NUM_SUB:     109,
        /* 0x6E */ NUM_DEL:     110,        // aka PERIOD
        /* 0x6F */ NUM_DIV:     111,
        /* 0x70 */ F1:          112,
        /* 0x71 */ F2:          113,
        /* 0x72 */ F3:          114,
        /* 0x73 */ F4:          115,
        /* 0x74 */ F5:          116,
        /* 0x75 */ F6:          117,
        /* 0x76 */ F7:          118,
        /* 0x77 */ F8:          119,
        /* 0x78 */ F9:          120,
        /* 0x79 */ F10:         121,
        /* 0x7A */ F11:         122,
        /* 0x7B */ F12:         123,
        /* 0x90 */ NUM_LOCK:    144,
        /* 0x91 */ SCROLL_LOCK: 145,
        /* 0xAD */ FF_DASH:     173,
        /* 0xBA */ SEMI:        186,        // Firefox:  59 (FF_SEMI)
        /* 0xBB */ EQUALS:      187,        // Firefox:  61 (FF_EQUALS)
        /* 0xBC */ COMMA:       188,
        /* 0xBD */ DASH:        189,        // Firefox: 173 (FF_DASH)
        /* 0xBE */ PERIOD:      190,
        /* 0xBF */ SLASH:       191,
        /* 0xC0 */ BQUOTE:      192,
        /* 0xDB */ LBRACK:      219,
        /* 0xDC */ BSLASH:      220,
        /* 0xDD */ RBRACK:      221,
        /* 0xDE */ QUOTE:       222,
        /* 0xE0 */ FF_CMD:      224,        // Firefox only (used for both CMD and RCMD)
        //
        // The following biases use what I'll call Decimal Coded Binary or DCB (the opposite of BCD),
        // where the thousands digit is used to store the sum of "binary" digits 1 and/or 2 and/or 4.
        //
        // Technically, that makes it DCO (Decimal Coded Octal), but then again, BCD should have really
        // been called HCD (Hexadecimal Coded Decimal), so if "they" can take liberties, so can I.
        //
        // ONDOWN is a bias we add to browser keyCodes that we want to handle on "down" rather than on "press".
        //
        ONDOWN:                 1000,
        //
        // ONRIGHT is a bias we add to browser keyCodes that need to check for a "right" location (default is "left")
        //
        ONRIGHT:                2000,
        //
        // FAKE is a bias we add to signal these are fake keyCodes corresponding to internal keystroke combinations.
        // The actual values are for internal use only and merely need to be unique and used consistently.
        //
        FAKE:                   4000
    },
    /*
     * The set of values that a browser may store in the 'location' property of a keyboard event object
     * which we also support.
     */
    LOCATION: {
        LEFT:                   1,
        RIGHT:                  2,
        NUMPAD:                 3
    }
};

/*
 * Table to map new browser keyboard event "code" property values to their old KEYCODE values.
 */
Keys.CODEKEY = {
    "Comma":            Keys.KEYCODE.COMMA,
    "Period":           Keys.KEYCODE.PERIOD,
    "Semicolon":        Keys.KEYCODE.SEMI,
    "Quote":            Keys.KEYCODE.QUOTE,
    "BracketLeft":      Keys.KEYCODE.LBRACK,
    "BracketRight":     Keys.KEYCODE.RBRACK,
    "Backquote":        Keys.KEYCODE.BQUOTE,
    "Backslash":        Keys.KEYCODE.BSLASH,
    "Minus":            Keys.KEYCODE.DASH,
    "Equal":            Keys.KEYCODE.EQUALS,
    "AltLeft":          Keys.KEYCODE.ALT,
    "AltRight":         Keys.KEYCODE.ALT,
    "CapsLock":         Keys.KEYCODE.CAPS_LOCK,
    "ControlLeft":      Keys.KEYCODE.CTRL,
    "ControlRight":     Keys.KEYCODE.CTRL,
    "OSLeft":           Keys.KEYCODE.CMD,
    "OSRight":          Keys.KEYCODE.RCMD,
    "ShiftLeft":        Keys.KEYCODE.SHIFT,
    "ShiftRight":       Keys.KEYCODE.SHIFT,
    "Enter":            Keys.KEYCODE.CR,
    "Space":            Keys.KEYCODE.SPACE,
    "Tab":              Keys.KEYCODE.TAB,
    "Delete":           Keys.KEYCODE.DEL,
    "End":              Keys.KEYCODE.END,
    "Home":             Keys.KEYCODE.HOME,
    "Insert":           Keys.KEYCODE.INS,
    "PageDown":         Keys.KEYCODE.PGDN,
    "PageUp":           Keys.KEYCODE.PGUP,
    "ArrowDown":        Keys.KEYCODE.DOWN,
    "ArrowLeft":        Keys.KEYCODE.LEFT,
    "ArrowRight":       Keys.KEYCODE.RIGHT,
    "ArrowUp":          Keys.KEYCODE.UP,
    "Escape":           Keys.KEYCODE.ESC,
    "PrintScreen":      Keys.KEYCODE.PRTSC,
    "ScrollLock":       Keys.KEYCODE.SCROLL_LOCK,
    "Pause":            Keys.KEYCODE.PAUSE,
    "F1":               Keys.KEYCODE.F1,
    "F2":               Keys.KEYCODE.F2,
    "F3":               Keys.KEYCODE.F3,
    "F4":               Keys.KEYCODE.F4,
    "F5":               Keys.KEYCODE.F5,
    "F6":               Keys.KEYCODE.F6,
    "F7":               Keys.KEYCODE.F7,
    "F8":               Keys.KEYCODE.F8,
    "F9":               Keys.KEYCODE.F9,
    "F10":              Keys.KEYCODE.F10,
    "F11":              Keys.KEYCODE.F11,
    "F12":              Keys.KEYCODE.F12,
    "NumLock":          Keys.KEYCODE.NUM_LOCK,
    "Numpad0":          Keys.KEYCODE.NUM_0,
    "Numpad1":          Keys.KEYCODE.NUM_1,
    "Numpad2":          Keys.KEYCODE.NUM_2,
    "Numpad3":          Keys.KEYCODE.NUM_3,
    "Numpad4":          Keys.KEYCODE.NUM_4,
    "Numpad5":          Keys.KEYCODE.NUM_5,
    "Numpad6":          Keys.KEYCODE.NUM_6,
    "Numpad7":          Keys.KEYCODE.NUM_7,
    "Numpad8":          Keys.KEYCODE.NUM_8,
    "Numpad9":          Keys.KEYCODE.NUM_9,
    "NumpadAdd":        Keys.KEYCODE.NUM_ADD,
    "NumpadSubtract":   Keys.KEYCODE.NUM_SUB,
    "NumpadMultiply":   Keys.KEYCODE.NUM_MUL,
    "NumpadDivide":     Keys.KEYCODE.NUM_DIV,
    "NumpadDecimal":    Keys.KEYCODE.NUM_DEL,
    "NumpadEnter":      Keys.KEYCODE.NUM_CR
};

/*
 * Check the event object's 'location' property for a non-zero value for the following ONRIGHT keys.
 */
Keys.KEYCODE.NUM_CR = Keys.KEYCODE.CR + Keys.KEYCODE.ONRIGHT;


/*
 * Maps Firefox keyCodes to their more common keyCode counterparts; a number of entries in this table
 * are no longer valid (if indeed they ever were), so they've been commented out.  It's likely that I
 * simply extended this table to resolve additional differences in other browsers (ie, Opera), but without
 * browser-specific checks, it's not safe to perform all the mappings shown below.
 */
Keys.FF_KEYCODES = {};
Keys.FF_KEYCODES[Keys.KEYCODE.FF_SEMI]   = Keys.KEYCODE.SEMI;           //  59 -> 186
Keys.FF_KEYCODES[Keys.KEYCODE.FF_EQUALS] = Keys.KEYCODE.EQUALS;         //  61 -> 187
Keys.FF_KEYCODES[Keys.KEYCODE.FF_DASH]   = Keys.KEYCODE.DASH;           // 173 -> 189
Keys.FF_KEYCODES[Keys.KEYCODE.FF_CMD]    = Keys.KEYCODE.CMD;            // 224 -> 91
// Keys.FF_KEYCODES[Keys.KEYCODE.FF_COMMA]  = Keys.KEYCODE.COMMA;       //  44 -> 188
// Keys.FF_KEYCODES[Keys.KEYCODE.FF_PERIOD] = Keys.KEYCODE.PERIOD;      //  46 -> 190
// Keys.FF_KEYCODES[Keys.KEYCODE.FF_SLASH]  = Keys.KEYCODE.SLASH;       //  47 -> 191
// Keys.FF_KEYCODES[Keys.KEYCODE.FF_BQUOTE] = Keys.KEYCODE.BQUOTE;      //  96 -> 192
// Keys.FF_KEYCODES[Keys.KEYCODE.FF_LBRACK  = Keys.KEYCODE.LBRACK;      //  91 -> 219
// Keys.FF_KEYCODES[Keys.KEYCODE.FF_BSLASH] = Keys.KEYCODE.BSLASH;      //  92 -> 220
// Keys.FF_KEYCODES[Keys.KEYCODE.FF_RBRACK] = Keys.KEYCODE.RBRACK;      //  93 -> 221
// Keys.FF_KEYCODES[Keys.KEYCODE.FF_QUOTE]  = Keys.KEYCODE.QUOTE;       //  39 -> 222

/*
 * Maps non-ASCII keyCodes to their ASCII counterparts
 */
Keys.NONASCII_KEYCODES = {};
Keys.NONASCII_KEYCODES[Keys.KEYCODE.FF_DASH] = Keys.ASCII['-'];         // 173 -> 45
Keys.NONASCII_KEYCODES[Keys.KEYCODE.SEMI]    = Keys.ASCII[';'];         // 186 -> 59
Keys.NONASCII_KEYCODES[Keys.KEYCODE.EQUALS]  = Keys.ASCII['='];         // 187 -> 61
Keys.NONASCII_KEYCODES[Keys.KEYCODE.DASH]    = Keys.ASCII['-'];         // 189 -> 45
Keys.NONASCII_KEYCODES[Keys.KEYCODE.COMMA]   = Keys.ASCII[','];         // 188 -> 44
Keys.NONASCII_KEYCODES[Keys.KEYCODE.PERIOD]  = Keys.ASCII['.'];         // 190 -> 46
Keys.NONASCII_KEYCODES[Keys.KEYCODE.SLASH]   = Keys.ASCII['/'];         // 191 -> 47
Keys.NONASCII_KEYCODES[Keys.KEYCODE.BQUOTE]  = Keys.ASCII['`'];         // 192 -> 96
Keys.NONASCII_KEYCODES[Keys.KEYCODE.LBRACK]  = Keys.ASCII['['];         // 219 -> 91
Keys.NONASCII_KEYCODES[Keys.KEYCODE.BSLASH]  = Keys.ASCII['\\'];        // 220 -> 92
Keys.NONASCII_KEYCODES[Keys.KEYCODE.RBRACK]  = Keys.ASCII[']'];         // 221 -> 93
Keys.NONASCII_KEYCODES[Keys.KEYCODE.QUOTE]   = Keys.ASCII["'"];         // 222 -> 39

/*
 * Maps unshifted keyCodes to their shifted counterparts; to be used when a shift-key is down.
 * Alphabetic characters are handled in code, since they must also take CAPS_LOCK into consideration.
 */
Keys.SHIFTED_KEYCODES = {};
Keys.SHIFTED_KEYCODES[Keys.ASCII['1']]     = Keys.ASCII['!'];
Keys.SHIFTED_KEYCODES[Keys.ASCII['2']]     = Keys.ASCII['@'];
Keys.SHIFTED_KEYCODES[Keys.ASCII['3']]     = Keys.ASCII['#'];
Keys.SHIFTED_KEYCODES[Keys.ASCII['4']]     = Keys.ASCII['$'];
Keys.SHIFTED_KEYCODES[Keys.ASCII['5']]     = Keys.ASCII['%'];
Keys.SHIFTED_KEYCODES[Keys.ASCII['6']]     = Keys.ASCII['^'];
Keys.SHIFTED_KEYCODES[Keys.ASCII['7']]     = Keys.ASCII['&'];
Keys.SHIFTED_KEYCODES[Keys.ASCII['8']]     = Keys.ASCII['*'];
Keys.SHIFTED_KEYCODES[Keys.ASCII['9']]     = Keys.ASCII['('];
Keys.SHIFTED_KEYCODES[Keys.ASCII['0']]     = Keys.ASCII[')'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.SEMI]   = Keys.ASCII[':'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.EQUALS] = Keys.ASCII['+'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.COMMA]  = Keys.ASCII['<'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.DASH]   = Keys.ASCII['_'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.PERIOD] = Keys.ASCII['>'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.SLASH]  = Keys.ASCII['?'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.BQUOTE] = Keys.ASCII['~'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.LBRACK] = Keys.ASCII['{'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.BSLASH] = Keys.ASCII['|'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.RBRACK] = Keys.ASCII['}'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.QUOTE]  = Keys.ASCII['"'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.FF_DASH]   = Keys.ASCII['_'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.FF_EQUALS] = Keys.ASCII['+'];
Keys.SHIFTED_KEYCODES[Keys.KEYCODE.FF_SEMI]   = Keys.ASCII[':'];

export default Keys;
