/**
 * @fileoverview Implements VT100 keyboard hardware
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Device  from "../../../../modules/v3/device.js";
import Input   from "../../../../modules/v3/input.js";
import LED     from "../../../../modules/v3/led.js";
import MESSAGE from "../../../../modules/v3/message.js";

/**
 * @typedef {Config} VT100KeyboardConfig
 * @property {number} model
 */

/**
 * @class VT100Keyboard
 * @unrestricted
 * @property {VT100KeyboardConfig} config
 */
export default class VT100Keyboard extends Device {
    /**
     * VT100Keyboard(idMachine, idDevice, config)
     *
     * @this {VT100Keyboard}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {VT100KeyboardConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        this.time = /** @type {Time} */ (this.findDeviceByClass("Time"));
        this.ports = /** @type {Ports} */ (this.findDeviceByClass("Ports"));
        this.ports.addIOTable(this, VT100Keyboard.IOTABLE);

        /*
         * Whereas VT100Keyboard.LEDS maps bits to LED ID, this.leds maps bits to the actual LED devices.
         */
        this.leds = {};
        for (let bit in VT100Keyboard.LEDS) {
            this.leds[bit] = /** @type {LED} */ (this.findDevice(VT100Keyboard.LEDS[bit], false));
        }

        this.input = /** @type {Input} */ (this.findDeviceByClass("Input"));
        this.input.addKeyMap(this, VT100Keyboard.KEYMAP, VT100Keyboard.CLICKMAP);

        this.ledCaps = this.findDevice("ledCaps");
        if (this.ledCaps) {
            this.input.addListener(Input.TYPE.KEYCODE, Device.KEYCODE.CAPS_LOCK, this.onCapsLock.bind(this));
        }
        this.onReset();
    }

    /**
     * loadState(state)
     *
     * Memory and Ports states are managed by the Bus onLoad() handler, which calls our loadState() handler.
     *
     * @this {VT100Keyboard}
     * @param {Array} state
     * @returns {boolean}
     */
    loadState(state)
    {
        let idDevice = state.shift();
        if (this.idDevice == idDevice) {
            this.bStatus = state.shift();
            this.bAddress = state.shift();
            this.fUARTBusy = state.shift();
            this.nUARTSnap = state.shift();
            return true;
        }
        return false;
    }

    /**
     * saveState(state)
     *
     * Memory and Ports states are managed by the Bus onSave() handler, which calls our saveState() handler.
     *
     * @this {VT100Keyboard}
     * @param {Array} state
     */
    saveState(state)
    {
        state.push(this.idDevice);
        state.push(this.bStatus);
        state.push(this.bAddress);
        state.push(this.fUARTBusy);
        state.push(this.nUARTSnap);
    }

    /**
     * onCapsLock(id, on)
     *
     * @this {VT100Keyboard}
     * @param {number} id
     * @param {boolean} on
     */
    onCapsLock(id, on)
    {
        this.ledCaps.setLEDState(0, 0, on? LED.STATE.ON : LED.STATE.OFF);
    }

    /**
     * onPower(on)
     *
     * Called by the Machine device to provide notification of a power event.
     *
     * @this {VT100Keyboard}
     * @param {boolean} on
     */
    onPower(on)
    {
        if (!this.cpu) {
            this.cpu = /** @type {CPUx80} */ (this.findDeviceByClass("CPU"));
        }
        this.updateLEDs(on? this.bStatus : undefined);
    }

    /**
     * onReset()
     *
     * Called by the Machine device to provide notification of a reset event.
     *
     * @this {VT100Keyboard}
     */
    onReset()
    {
        this.bStatus = VT100Keyboard.STATUS.INIT;
        this.bAddress = VT100Keyboard.ADDRESS.INIT;
        this.fUARTBusy = false;
        this.nUARTSnap = 0;
        this.iKeyNext = -1;
        this.updateLEDs();
    }

    /**
     * isTransmitterReady()
     *
     * Called whenever the VT100 Chips device needs the VT100Keyboard UART transmitter status.
     *
     * From p. 4-32 of the VT100 Technical Manual (July 1982):
     *
     *      The operating clock for the keyboard interface comes from an address line in the video processor (LBA4).
     *      This signal has an average period of 7.945 microseconds. Each data byte is transmitted with one start bit
     *      and one stop bit, and each bit lasts 16 clock periods. The total time for each data byte is 160 times 7.945
     *      or 1.27 milliseconds. Each time the Transmit Buffer Empty flag on the terminal's UART gets set (when the
     *      current byte is being transmitted), the microprocessor loads another byte into the transmit buffer. In this
     *      way, the stream of status bytes to the keyboard is continuous.
     *
     * We used to always return true (after all, what's wrong with an infinitely fast UART?), but unfortunately,
     * the VT100 firmware relies on the UART's slow transmission speed to drive cursor blink rate.  We have several
     * options:
     *
     *      1) Snapshot the CPU cycle count each time a byte is transmitted (see outVT100UARTStatus()) and then every
     *      time this is polled, see if the cycle count has exceeded the snapshot value by the necessary threshold;
     *      if we assume 361.69ns per CPU cycle, there are 22 CPU cycles for every 1 LBA4 cycle, and since transmission
     *      time is supposed to last for 160 LBA4 cycles, the threshold is 22*160 CPU cycles, or 3520 cycles.
     *
     *      2) Set a CPU timer using the new setTimer() interface, which can be passed the number of milliseconds to
     *      wait before firing (in this case, roughly 1.27ms).
     *
     *      3) Call the Chips device getLBA(4) function for the state of the simulated LBA4, and count 160 LBA4
     *      transitions; however, that would be the worst solution, because there's no guarantee that the firmware's
     *      UART polling will occur regularly and/or frequently enough for us to catch every LBA4 transition.
     *
     * I'm going with solution #1 because it's less overhead.
     *
     * @this {VT100Keyboard}
     * @returns {boolean} (true if ready, false if not)
     */
    isTransmitterReady()
    {
        if (this.fUARTBusy) {
            if (this.time.getCycles() >= this.nUARTSnap) {
                this.fUARTBusy = false;
            }
        }
        return !this.fUARTBusy;
    }

    /**
     * inUARTAddress(port)
     *
     * We take our cue from iKeyNext.  If it's -1 (default), we simply return the last value latched
     * in bAddress.  Otherwise, we call getActiveKey() to request the next mapped key value, latch it,
     * and increment iKeyNext.  Failing that, we latch ADDRESS.KEYLAST and reset iKeyNext to -1.
     *
     * @this {VT100Keyboard}
     * @param {number} port (0x82)
     * @returns {number} simulated port value
     */
    inUARTAddress(port)
    {
        let value = this.bAddress;
        if (this.iKeyNext >= 0) {
            let value = this.input.getActiveKey(this.iKeyNext);
            if (value >= 0) {
                this.iKeyNext++;
                if (value & 0x80) {
                    /*
                     * TODO: This code is supposed to be accompanied by a SHIFT key; make sure that it is.
                     */
                    value &= 0x7F;
                }
            } else {
                this.iKeyNext = -1;
                value = VT100Keyboard.ADDRESS.KEYLAST;
            }
            this.bAddress = value;
            this.cpu.requestINTR(1);
        }
        this.printf(MESSAGE.KBD + MESSAGE.PORTS, "inUARTAddress(%#04x): %#04x\n", port, value);
        return value;
    }

    /**
     * outUARTStatus(port, value)
     *
     * @this {VT100Keyboard}
     * @param {number} port (0x82)
     * @param {number} value
     */
    outUARTStatus(port, value)
    {
        this.printf(MESSAGE.KBD + MESSAGE.PORTS, "outUARTStatus(%#04x): %#04x\n", port, value);
        this.updateLEDs(value, this.bStatus);
        this.bStatus = value;
        this.fUARTBusy = true;
        /*
         * Set nUARTSnap to the number of cycles required before clearing fUARTBusy; see isTransmitterReady().
         *
         * NOTE: getCyclesPerMS(1.2731488) should work out to 3520 cycles for a CPU clocked at 361.69ns per cycle,
         * which is roughly 2.76Mhz.  We could just hard-code 3520 instead of calling getCyclesPerMS(), but this helps
         * maintain a reasonable blink rate for the cursor even when the user cranks up the CPU speed.
         */
        this.nUARTSnap = this.time.getCycles() + this.time.getCyclesPerMS(1.2731488);
        if (value & VT100Keyboard.STATUS.START) {
            this.iKeyNext = 0;
            this.cpu.requestINTR(1);
        }
    }

    /**
     * updateLEDs(value, previous)
     *
     * @this {VT100Keyboard}
     * @param {number} [value] (if not provided, all LEDS are turned off)
     * @param {number} [previous] (if not provided, all LEDs are updated)
     */
    updateLEDs(value, previous)
    {
        for (let id in this.leds) {
            let led = this.leds[id];
            if (!led) continue;
            let bit = +id, on, changed = 1, redraw = 1;
            if (value != undefined) {
                if (!(bit & (bit - 1))) {       // if a single bit is set, this will be zero
                    on = value & bit;           // and "on" will be true if that single bit is set
                } else {
                    bit = ~bit & 0xff;          // otherwise, we assume that a single bit is clear
                    on = !(value & bit);        // so "on" will be true if that same single bit is clear
                }
                if (previous != undefined) {
                    changed = (value ^ previous) & bit;
                    redraw = 0;
                }
            }
            if (changed) {                      // call setLEDState() only if the bit changed
                led.setLEDState(0, 0, on? LED.STATE.ON : LED.STATE.OFF);
                if (redraw) led.drawBuffer();
            }
        }
    }
}

/*
 * Reading port 0x82 returns a key address from the VT100 keyboard's UART data output.
 *
 * Every time a keyboard scan is initiated (by setting the START bit of the status byte),
 * our internal address index (iKeyNext) is set to zero, and an interrupt is generated for
 * each entry in the aKeysActive array, along with a final interrupt for KEYLAST.
 */
VT100Keyboard.ADDRESS = {
    PORT:       0x82,
    INIT:       0x7F,
    KEYLAST:    0x7F                // special end-of-scan key address (all valid key addresses are < KEYLAST)
};

/*
 * Writing port 0x82 updates the VT100's keyboard status byte via the keyboard's UART data input.
 */
VT100Keyboard.STATUS = {
    PORT:       0x82,               // write-only
    LED4:       0x01,
    LED3:       0x02,
    LED2:       0x04,
    LED1:       0x08,
    LOCKED:     0x10,
    LOCAL:      0x20,
    LEDS:       0x3F,               // all LEDs
    START:      0x40,               // set to initiate a scan
    /*
     * From p. 4-38 of the VT100 Technical Manual (July 1982):
     *
     *      A bit (CLICK) in the keyboard status word controls the bell....  When a single status word contains
     *      the bell bit, flip-flop E3 toggles and turns on E1, generating a click. If the bell bit is set for
     *      many words in succession, the UART latch holds the data output constant..., allowing the circuit to
     *      produce an 800 hertz tone. Bell is generated by setting the bell bit for 0.25 seconds.  Each cycle of
     *      the tone is at a reduced amplitude compared with the single keyclick....  The overall effect of the
     *      tone burst on the ear is that of a beep.
     */
    CLICK:      0x80,
    INIT:       0x00
};

/*
 * Definitions of all VT100 keys (7-bit values representing key positions on the VT100).  We call these
 * VT100 key values KEYNUMs, to avoid confusion with browser KEYCODEs.  They are be used in a subsequent
 * KEYMAP table.
 */
VT100Keyboard.KEYNUM = {
    DEL:        0x03,
    P:          0x05,
    O:          0x06,
    Y:          0x07,
    T:          0x08,
    W:          0x09,
    Q:          0x0A,
    RIGHT:      0x10,
    RBRACK:     0x14,
    LBRACK:     0x15,
    I:          0x16,
    U:          0x17,
    R:          0x18,
    E:          0x19,
    ONE:        0x1A,
    LEFT:       0x20,
    DOWN:       0x22,
    BREAK:      0x23,   // aka BREAK
    BQUOTE:     0x24,
    DASH:       0x25,
    NINE:       0x26,
    SEVEN:      0x27,
    FOUR:       0x28,
    THREE:      0x29,
    ESC:        0x2A,
    UP:         0x30,
    F3:         0x31,   // aka PF3
    F1:         0x32,   // aka PF1
    BS:         0x33,
    EQUALS:     0x34,
    ZERO:       0x35,
    EIGHT:      0x36,
    SIX:        0x37,
    FIVE:       0x38,
    TWO:        0x39,
    TAB:        0x3A,
    NUM_7:      0x40,
    F4:         0x41,   // aka PF4
    F2:         0x42,   // aka PF2
    NUM_0:      0x43,
    LF:         0x44,   // aka LINE-FEED
    BSLASH:     0x45,
    L:          0x46,
    K:          0x47,
    G:          0x48,
    F:          0x49,
    A:          0x4A,
    NUM_8:      0x50,
    NUM_CR:     0x51,
    NUM_2:      0x52,
    NUM_1:      0x53,
    QUOTE:      0x55,
    SEMI:       0x56,
    J:          0x57,
    H:          0x58,
    D:          0x59,
    S:          0x5A,
    NUM_DEL:    0x60,   // aka KEYPAD PERIOD
    NUM_COMMA:  0x61,   // aka KEYPAD COMMA
    NUM_5:      0x62,
    NUM_4:      0x63,
    CR:         0x64,   // TODO: Figure out why the Technical Manual lists CR at both 0x04 and 0x64
    PERIOD:     0x65,
    COMMA:      0x66,
    N:          0x67,
    B:          0x68,
    X:          0x69,
    NO_SCROLL:  0x6A,   // aka NO-SCROLL
    NUM_9:      0x70,
    NUM_3:      0x71,
    NUM_6:      0x72,
    NUM_SUB:    0x73,   // aka KEYPAD MINUS
    SLASH:      0x75,
    M:          0x76,
    SPACE:      0x77,
    V:          0x78,
    C:          0x79,
    Z:          0x7A,
    SETUP:      0x7B,   // aka SET-UP
    CTRL:       0x7C,
    SHIFT:      0x7D,   // either shift key (doesn't matter)
    CAPS_LOCK:  0x7E
};

/*
 * Virtual KEYCODE definitions.
 *
 * A virtual keyCode is one that is (hopefully) outside the range of all browser keyCodes.  Each refers
 * to a key (or key combination) that has no analog on a modern keyboard and/or that we want to associate
 * with an on-screen control.
 *
 * A good example is the VT100 SET-UP key, which has no counterpart on a modern keyboard.
 */
VT100Keyboard.KEYCODE = {
    SETUP:      Device.KEYCODE.VIRTUAL + 1,
    LF:         Device.KEYCODE.VIRTUAL + 2,
    BREAK:      Device.KEYCODE.VIRTUAL + 3,
    CTRL_C:     Device.KEYCODE.VIRTUAL + 4
};

/*
 * KEYMAP maps a browser keyCode (or virtual keyCode) to a VT100 KEYNUM.
 *
 * NOTE: The VT100 keyboard has both BACKSPACE and DELETE keys, whereas modern keyboards generally only
 * have DELETE.  And sadly, when you press DELETE, your modern keyboard and/or modern browser is reporting
 * it as keyCode 8: the code for BACKSPACE, aka CTRL-H.  You have to press a modified DELETE key to get
 * the actual DELETE keyCode of 127.
 *
 * We resolve this below by mapping KEYCODE.BS (8) to VT100 KEYNUM.DEL (0x03) and KEYCODE.DEL (127)
 * to VT100 KEYNUM.BS (0x33).  So, DELETE is BACKSPACE and BACKSPACE is DELETE.  Fortunately, this
 * confusion is all internal, because your physical key is (or should be) labeled DELETE, so the fact that
 * the browser is converting it to BACKSPACE and that we're converting BACKSPACE back into DELETE is
 * something most people don't need to worry their heads about.
 */
VT100Keyboard.KEYMAP = {
    [Device.KEYCODE.BS]:            VT100Keyboard.KEYNUM.DEL,
    [Device.KEYCODE.P]:             VT100Keyboard.KEYNUM.P,
    [Device.KEYCODE.O]:             VT100Keyboard.KEYNUM.O,
    [Device.KEYCODE.Y]:             VT100Keyboard.KEYNUM.Y,
    [Device.KEYCODE.T]:             VT100Keyboard.KEYNUM.T,
    [Device.KEYCODE.W]:             VT100Keyboard.KEYNUM.W,
    [Device.KEYCODE.Q]:             VT100Keyboard.KEYNUM.Q,
    [Device.KEYCODE.RIGHT]:         VT100Keyboard.KEYNUM.RIGHT,
    [Device.KEYCODE.RBRACK]:        VT100Keyboard.KEYNUM.RBRACK,
    [Device.KEYCODE.LBRACK]:        VT100Keyboard.KEYNUM.LBRACK,
    [Device.KEYCODE.I]:             VT100Keyboard.KEYNUM.I,
    [Device.KEYCODE.U]:             VT100Keyboard.KEYNUM.U,
    [Device.KEYCODE.R]:             VT100Keyboard.KEYNUM.R,
    [Device.KEYCODE.E]:             VT100Keyboard.KEYNUM.E,
    [Device.KEYCODE.ONE]:           VT100Keyboard.KEYNUM.ONE,
    [Device.KEYCODE.LEFT]:          VT100Keyboard.KEYNUM.LEFT,
    [Device.KEYCODE.DOWN]:          VT100Keyboard.KEYNUM.DOWN,
    [Device.KEYCODE.F6]:            VT100Keyboard.KEYNUM.BREAK,         // no natural mapping
    [VT100Keyboard.KEYCODE.BREAK]:  VT100Keyboard.KEYNUM.BREAK,         // NOTE: virtual keyCode mapping
    [Device.KEYCODE.BQUOTE]:        VT100Keyboard.KEYNUM.BQUOTE,
    [Device.KEYCODE.DASH]:          VT100Keyboard.KEYNUM.DASH,
    [Device.KEYCODE.NINE]:          VT100Keyboard.KEYNUM.NINE,
    [Device.KEYCODE.SEVEN]:         VT100Keyboard.KEYNUM.SEVEN,
    [Device.KEYCODE.FOUR]:          VT100Keyboard.KEYNUM.FOUR,
    [Device.KEYCODE.THREE]:         VT100Keyboard.KEYNUM.THREE,
    [Device.KEYCODE.ESC]:           VT100Keyboard.KEYNUM.ESC,
    [Device.KEYCODE.UP]:            VT100Keyboard.KEYNUM.UP,
    [Device.KEYCODE.F3]:            VT100Keyboard.KEYNUM.F3,
    [Device.KEYCODE.F1]:            VT100Keyboard.KEYNUM.F1,
    [Device.KEYCODE.DEL]:           VT100Keyboard.KEYNUM.BS,
    [Device.KEYCODE.EQUALS]:        VT100Keyboard.KEYNUM.EQUALS,
    [Device.KEYCODE.ZERO]:          VT100Keyboard.KEYNUM.ZERO,
    [Device.KEYCODE.EIGHT]:         VT100Keyboard.KEYNUM.EIGHT,
    [Device.KEYCODE.SIX]:           VT100Keyboard.KEYNUM.SIX,
    [Device.KEYCODE.FIVE]:          VT100Keyboard.KEYNUM.FIVE,
    [Device.KEYCODE.TWO]:           VT100Keyboard.KEYNUM.TWO,
    [Device.KEYCODE.TAB]:           VT100Keyboard.KEYNUM.TAB,
    [Device.KEYCODE.NUM_7]:         VT100Keyboard.KEYNUM.NUM_7,
    [Device.KEYCODE.F4]:            VT100Keyboard.KEYNUM.F4,
    [Device.KEYCODE.F2]:            VT100Keyboard.KEYNUM.F2,
    [Device.KEYCODE.NUM_0]:         VT100Keyboard.KEYNUM.NUM_0,
    [Device.KEYCODE.F7]:            VT100Keyboard.KEYNUM.LF,            // no natural mapping
    [VT100Keyboard.KEYCODE.LF]:     VT100Keyboard.KEYNUM.LF,            // NOTE: virtual keyCode mapping
    [Device.KEYCODE.BSLASH]:        VT100Keyboard.KEYNUM.BSLASH,
    [Device.KEYCODE.L]:             VT100Keyboard.KEYNUM.L,
    [Device.KEYCODE.K]:             VT100Keyboard.KEYNUM.K,
    [Device.KEYCODE.G]:             VT100Keyboard.KEYNUM.G,
    [Device.KEYCODE.F]:             VT100Keyboard.KEYNUM.F,
    [Device.KEYCODE.A]:             VT100Keyboard.KEYNUM.A,
    [Device.KEYCODE.NUM_8]:         VT100Keyboard.KEYNUM.NUM_8,
    [Device.KEYCODE.CR]:            VT100Keyboard.KEYNUM.NUM_CR,
    [Device.KEYCODE.NUM_2]:         VT100Keyboard.KEYNUM.NUM_2,
    [Device.KEYCODE.NUM_1]:         VT100Keyboard.KEYNUM.NUM_1,
    [Device.KEYCODE.QUOTE]:         VT100Keyboard.KEYNUM.QUOTE,
    [Device.KEYCODE.SEMI]:          VT100Keyboard.KEYNUM.SEMI,
    [Device.KEYCODE.J]:             VT100Keyboard.KEYNUM.J,
    [Device.KEYCODE.H]:             VT100Keyboard.KEYNUM.H,
    [Device.KEYCODE.D]:             VT100Keyboard.KEYNUM.D,
    [Device.KEYCODE.S]:             VT100Keyboard.KEYNUM.S,
    [Device.KEYCODE.NUM_DEL]:       VT100Keyboard.KEYNUM.NUM_DEL,
    [Device.KEYCODE.F5]:            VT100Keyboard.KEYNUM.NUM_COMMA,     // no natural mapping (TODO: Add virtual keyCode mapping as well?)
    [Device.KEYCODE.NUM_5]:         VT100Keyboard.KEYNUM.NUM_5,
    [Device.KEYCODE.NUM_4]:         VT100Keyboard.KEYNUM.NUM_4,
    [Device.KEYCODE.CR]:            VT100Keyboard.KEYNUM.CR,
    [Device.KEYCODE.PERIOD]:        VT100Keyboard.KEYNUM.PERIOD,
    [Device.KEYCODE.COMMA]:         VT100Keyboard.KEYNUM.COMMA,
    [Device.KEYCODE.N]:             VT100Keyboard.KEYNUM.N,
    [Device.KEYCODE.B]:             VT100Keyboard.KEYNUM.B,
    [Device.KEYCODE.X]:             VT100Keyboard.KEYNUM.X,
    [Device.KEYCODE.F8]:            VT100Keyboard.KEYNUM.NO_SCROLL,     // no natural mapping (TODO: Add virtual keyCode mapping as well?)
    [Device.KEYCODE.NUM_9]:         VT100Keyboard.KEYNUM.NUM_9,
    [Device.KEYCODE.NUM_3]:         VT100Keyboard.KEYNUM.NUM_3,
    [Device.KEYCODE.NUM_6]:         VT100Keyboard.KEYNUM.NUM_6,
    [Device.KEYCODE.NUM_SUB]:       VT100Keyboard.KEYNUM.NUM_SUB,
    [Device.KEYCODE.SLASH]:         VT100Keyboard.KEYNUM.SLASH,
    [Device.KEYCODE.M]:             VT100Keyboard.KEYNUM.M,
    [Device.KEYCODE.SPACE]:         VT100Keyboard.KEYNUM.SPACE,
    [Device.KEYCODE.V]:             VT100Keyboard.KEYNUM.V,
    [Device.KEYCODE.C]:             VT100Keyboard.KEYNUM.C,
    [Device.KEYCODE.Z]:             VT100Keyboard.KEYNUM.Z,
    [Device.KEYCODE.F9]:            VT100Keyboard.KEYNUM.SETUP,         // no natural mapping
    [VT100Keyboard.KEYCODE.SETUP]:  VT100Keyboard.KEYNUM.SETUP,         // NOTE: virtual keyCode mapping
    [Device.KEYCODE.CTRL]:          VT100Keyboard.KEYNUM.CTRL,
    [Device.KEYCODE.SHIFT]:         VT100Keyboard.KEYNUM.SHIFT,
    [Device.KEYCODE.CAPS_LOCK]:     VT100Keyboard.KEYNUM.CAPS_LOCK,
    /*
     * Mappings can also be to an array of multiple keyNum combinations, such as:
     */
    [VT100Keyboard.KEYCODE.CTRL_C]: [VT100Keyboard.KEYNUM.CTRL, VT100Keyboard.KEYNUM.C]
};

/*
 * CLICKMAP maps a binding ID to any of: browser (WebIO) keyCode, virtual (VT100Keyboard) keyCode, or array of keyCode modifier plus keyCode.
 */
VT100Keyboard.CLICKMAP = {
    "keySetup":                     VT100Keyboard.KEYCODE.SETUP,        // NOTE: virtual keyCode mapping
    "keyLineFeed":                  VT100Keyboard.KEYCODE.LF,           // NOTE: virtual keyCode mapping
    "keyTab":                       Device.KEYCODE.TAB,
    "keyEsc":                       Device.KEYCODE.ESC,
    "keyBreak":                     VT100Keyboard.KEYCODE.BREAK,        // NOTE: virtual keyCode mapping
    "keyCtrl":                      Device.KEYCODE.CTRL,
    "keyCtrlC":                     VT100Keyboard.KEYCODE.CTRL_C,       // NOTE: virtual keyCode mapping
    "keyCtrlLock":                 [Device.KEYCODE.LOCK, Device.KEYCODE.CTRL],
    "keyShiftLock":                [Device.KEYCODE.LOCK, Device.KEYCODE.SHIFT],
    "keyCapsLock":                  Device.KEYCODE.CAPS_LOCK
};

VT100Keyboard.LEDS = {
    [VT100Keyboard.STATUS.LED4]:            "led4",
    [VT100Keyboard.STATUS.LED3]:            "led3",
    [VT100Keyboard.STATUS.LED2]:            "led2",
    [VT100Keyboard.STATUS.LED1]:            "led1",
    [VT100Keyboard.STATUS.LOCKED]:          "ledLocked",
    [VT100Keyboard.STATUS.LOCAL]:           "ledLocal",
    [~VT100Keyboard.STATUS.LOCAL & 0xff]:   "ledOnline"                 // NOTE: ledOnline is the inverse of ledLocal; updateLEDs() understands inverted masks
};

VT100Keyboard.IOTABLE = {
    0x82:   [VT100Keyboard.prototype.inUARTAddress, VT100Keyboard.prototype.outUARTStatus]
};

VT100Keyboard.CLASSES["VT100Keyboard"] = VT100Keyboard;
