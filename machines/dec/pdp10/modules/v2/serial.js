/**
 * @fileoverview Implements the PDP-10 SerialPort component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import MESSAGE from "./message.js";
import Component from "../../../../modules/v2/component.js";
import Keys from "../../../../modules/v2/keys.js";
import State from "../../../../modules/v2/state.js";
import StrLib from "../../../../modules/v2/strlib.js";
import WebLib from "../../../../modules/v2/weblib.js";
import { APPCLASS, MAXDEBUG } from "./defines.js";

/**
 * Since the Closure Compiler treats ES6 classes as @struct rather than @dict by default,
 * it deters us from defining named properties on our components; eg:
 *
 *      this['exports'] = {...}
 *
 * results in an error:
 *
 *      Cannot do '[]' access on a struct
 *
 * So, in order to define 'exports', we must override the @struct assumption by annotating
 * the class as @unrestricted (or @dict).  Note that this must be done both here and in the
 * Component class, because otherwise the Compiler won't allow us to *reference* the named
 * property either.
 *
 * TODO: Consider marking ALL our classes unrestricted, because otherwise it forces us to
 * define every single property the class uses in its constructor, which results in a fair
 * bit of redundant initialization, since many properties aren't (and don't need to be) fully
 * initialized until the appropriate init(), reset(), restore(), etc. function is called.
 *
 * The upside, however, may be that since the structure of the class is completely defined by
 * the constructor, JavaScript engines may be able to optimize and run more efficiently.
 *
 * @class SerialPortPDP10
 * @unrestricted
 */
export default class SerialPortPDP10 extends Component {
    /**
     * SerialPortPDP10(parmsSerial)
     *
     * The SerialPort component has the following component-specific (parmsSerial) properties:
     *
     *      adapter: adapter number; 0 if not defined (the PCx86 SerialPort component uses this
     *      value to set the device's internal COM number, which in turn determines other properties,
     *      such as I/O ports and IRQ; for the PDP-10, this currently has no defined use)
     *
     *      binding: name of a control (based on its "binding" attribute) to bind to this port's I/O
     *
     *      tabSize: set to a non-zero number to convert tabs to spaces (applies only to output to
     *      the above binding); default is 0 (no conversion)
     *
     *      upperCase: if true, all received input is upper-cased; it is normally the responsibility
     *      of the sending device to ensure this, but sometimes it's more convenient to enforce
     *      on the receiving end.
     *
     * @param {Object} parmsSerial
     */
    constructor(parmsSerial)
    {
        super("SerialPort", parmsSerial, MESSAGE.SERIAL);

        this.iAdapter = +parmsSerial['adapter'];
        this.fUpperCase = parmsSerial['upperCase'];
        if (typeof this.fUpperCase == "string") this.fUpperCase = (this.fUpperCase == "true");
        /**
         * consoleBuffer becomes a string that records serial port output if the 'binding' property is set to the
         * reserved name "console".  Nothing is written to the console, however, until a linefeed (0x0A) is output
         * or the string length reaches a threshold (currently, 1024 characters).
         *
         * @type {string|null}
         */
        this.consoleBuffer = null;

        /**
         * controlBuffer is a DOM element bound to the port (currently used for output only; see transmitByte()).
         *
         * Example: CTTY COM2
         *
         * The CTTY DOS command redirects all CON I/O to the specified serial port (eg, COM2), which it assumes is
         * connected to a serial terminal, and therefore anything it *transmits* via COM2 will be displayed by the
         * terminal.  It further assumes that anything typed on such a terminal is NOT displayed, so as DOS *receives*
         * serial input, DOS *transmits* the appropriate characters back to the terminal via COM2.
         *
         * As a result, controlBuffer only needs to be updated by the transmitByte() function.
         *
         * @type {Object}
         */
        this.controlBuffer = null;

        /*
         * If controlBuffer is being used AND 'tabSize' is set, then we make an attempt to monitor the characters
         * being echoed via transmitByte(), maintain a logical column position, and convert any tabs into the appropriate
         * number of spaces.
         *
         * charBOL, if nonzero, is a character to automatically output at the beginning of every line.  This probably
         * isn't generally useful; I use it internally to preformat serial output.
         */
        this.tabSize = +parmsSerial['tabSize'];
        this.charBOL = +parmsSerial['charBOL'];
        this.iLogicalCol = 0;
        this.fNullModem = true;

        this.abReceive = [];

        var sBinding = parmsSerial['binding'];
        if (sBinding == "console") {
            this.consoleBuffer = "";
        } else {
            /*
             * If the SerialPort wants to bind to a control (eg, "print") in a DIFFERENT component (eg, "Panel"),
             * then it specifies the name of that control with the 'binding' property.  The SerialPort constructor
             * will then call bindExternalControl(), which looks up the control, and then passes it to our own
             * setBinding() handler.
             *
             * For bindExternalControl() to succeed, it also need to know the target component; for now, that's
             * been hard-coded to "Panel", in part because that's one of the few components we can rely upon
             * initializing before we do, but it would be a simple matter to include a component type or ID as part
             * of the 'binding' property as well, if we need more flexibility later.
             *
             * NOTE: If sBinding is not the name of a valid Control Panel DOM element, this call does nothing.
             */
            Component.bindExternalControl(this, sBinding);
        }

        /*
         * No connection until initConnection() is called.
         */
        this.sDataReceived = "";
        this.connection = this.sendData = this.updateStatus = null;

        /*
         * Export all functions required by initConnection().
         */
        this['exports'] = {
            'connect': this.initConnection,
            'receiveData': this.receiveData,
            'receiveStatus': this.receiveStatus,
            'setConnection': this.setConnection
        };
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * @this {SerialPortPDP10}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "textarea", "register", "flag", "rled", etc)
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "buffer")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        if (!sHTMLType || sHTMLType == "textarea") {

            var serial = this;
            this.bindings[sBinding] = this.controlBuffer = control;

            /*
             * An onkeydown handler is required for certain keys that browsers tend to consume themselves;
             * for example, BACKSPACE is often defined as going back to the previous web page, and certain
             * CTRL keys are often used for browser shortcuts (usually on Windows-based browsers).
             *
             * NOTE: We don't bother with a keyUp handler, because for the most part, we're only intercepting
             * keys that require special treatment; in general, we're content with keyPress events.
             */
            control.onkeydown = function onKeyDown(event) {
                event = event || window.event;
                var bASCII = 0;
                var keyCode = event.keyCode;
                /*
                 * Perform the same remapping of BACKSPACE and DELETE that our VT100 emulation performs,
                 * for PCjs-wide consistency; see the KEYMAP table in /machines/pcx80/modules/v2/keyboard.js for
                 * the rationale.  Ditto for ALT-DELETE; see onKeyDown() in /machines/pcx80/modules/v2/keyboard.js
                 * for details.
                 *
                 * NOTE: keyDown (and keyUp) events supply us with KEYCODE values, which are NOT the same as
                 * ASCII values, which is why we are comparing with KEYCODE values but assigning ASCII values,
                 * because receiveData() requires ASCII values.
                 */
                if (keyCode == Keys.KEYCODE.BS) {
                    bASCII = event.altKey? Keys.ASCII.CTRL_H : Keys.ASCII.DEL;
                }
                else if (keyCode == Keys.KEYCODE.DEL) {
                    bASCII = Keys.ASCII.CTRL_H;
                }
                else if (event.ctrlKey && keyCode >= Keys.ASCII.A && keyCode <= Keys.ASCII.Z) {
                    bASCII = keyCode - (Keys.ASCII.A - Keys.ASCII.CTRL_A);
                }
                if (bASCII) {
                    if (event.preventDefault) event.preventDefault();
                    serial.receiveData(bASCII);
                }
                return true;
            };

            control.onkeypress = function onKeyPress(event) {
                /*
                 * NOTE: Unlike keyDown events, keyPress events generally supply us with ASCII values,
                 * despite the fact that, as above, they come to us via the keyCode property.  Yes, it's
                 * brilliant (or rather, the opposite of brilliant), but that's life.
                 */
                event = event || window.event;
                /*
                 * Not sure why COMMAND-key combinations are coming through here (on Safari at least),
                 * but in any case, let's make sure we don't act on them.
                 */
                if (!event.metaKey) {
                    var bASCII = event.which || event.keyCode;
                    /*
                     * Perform the same remapping of ALT-ENTER (to LINE-FEED) that our VT100 emulation performs,
                     * for PCjs-wide consistency; see onKeyDown() in /machines/pcx80/modules/v2/keyboard.js for details.
                     */
                    if (event.altKey) {
                        if (bASCII == Keys.ASCII.CTRL_M) {
                            bASCII = Keys.ASCII.CTRL_J;
                        }
                    }
                    serial.receiveData(bASCII);
                    /*
                     * Since we're going to remove the "readonly" attribute from the <textarea> control
                     * (so that the soft keyboard activates on iOS), instead of calling preventDefault() for
                     * selected keys (eg, the SPACE key, whose default behavior is to scroll the page), we must
                     * now call it for *all* keys, so that the keyCode isn't added to the control immediately,
                     * on top of whatever the machine is echoing back, resulting in double characters.
                     */
                    if (event.preventDefault) event.preventDefault();
                }
                return true;
            };

            control.onpaste = function onKeyPress(event) {
                if (event.stopPropagation) event.stopPropagation();
                if (event.preventDefault) event.preventDefault();
                var clipboardData = event.clipboardData || window.clipboardData;
                if (clipboardData) {
                    /*
                     * NOTE: Multiple lines of pasted text will (at least on macOS) contain LFs instead of CRs;
                     * this is dealt with in receiveData() whenever it receives a string of characters.
                     */
                    serial.receiveData(clipboardData.getData('Text'));
                }
            };

            /*
             * Now that we've added an onkeypress handler that calls preventDefault() for ALL keys, the control
             * itself no longer needs the "readonly" attribute; we primarily need to remove it for iOS browsers,
             * so that the soft keyboard will activate, but it shouldn't hurt to remove the attribute for all browsers.
             */
            control.removeAttribute("readonly");

            return true;
        }
        return false;
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {SerialPortPDP10}
     * @param {ComputerPDP10} cmp
     * @param {BusPDP10} bus
     * @param {CPUStatePDP10} cpu
     * @param {DebuggerPDP10} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.cmp = cmp;
        this.bus = bus;
        this.cpu = cpu;
        this.dbg = dbg;

        this.setReady();
    }

    /**
     * initConnection(fNullModem)
     *
     * If a machine 'connection' parameter exists of the form "{sourcePort}->{targetMachine}.{targetPort}",
     * and "{sourcePort}" matches our idComponent, then look for a component with id "{targetMachine}.{targetPort}".
     *
     * If the target component is found, then verify that it has exported functions with the following names:
     *
     *      receiveData(data): called when we have data to transmit; aliased internally to sendData(data)
     *      receiveStatus(pins): called when our control signals have changed; aliased internally to updateStatus(pins)
     *
     * For now, we're not going to worry about communication in the other direction, because when the target component
     * performs its own initConnection(), it will find our receiveData() and receiveStatus() functions, at which point
     * communication in both directions should be established, and the circle of life complete.
     *
     * For added robustness, if the target machine initializes much more slowly than we do, and our connection attempt
     * fails, that's OK, because when it finally initializes, its initConnection() will call our initConnection();
     * if we've already initialized, no harm done.
     *
     * @this {SerialPortPDP10}
     * @param {boolean} [fNullModem] (caller's null-modem setting, to ensure our settings are in agreement)
     */
    initConnection(fNullModem)
    {
        if (!this.connection) {
            var sConnection = this.cmp.getMachineParm("connection");
            if (sConnection) {
                var asParts = sConnection.split('->');
                if (asParts.length == 2) {
                    var sSourceID = StrLib.trim(asParts[0]);
                    if (sSourceID != this.idComponent) return;  // this connection string is intended for another instance
                    var sTargetID = StrLib.trim(asParts[1]);
                    this.connection = Component.getComponentByID(sTargetID);
                    if (this.connection) {
                        var exports = this.connection['exports'];
                        if (exports) {
                            var fnConnect = exports['connect'];
                            if (fnConnect) fnConnect.call(this.connection, this.fNullModem);
                            this.sendData = exports['receiveData'];
                            if (this.sendData) {
                                this.fNullModem = fNullModem;
                                this.updateStatus = exports['receiveStatus'];
                                this.printf(MESSAGE.STATUS, "Connected %s.%s to %s\n", this.idMachine, sSourceID, sTargetID);
                                return;
                            }
                        }
                    }
                }
                /*
                 * Changed from NOTICE to STATUS because sometimes a connection fails simply because one of us is a laggard.
                 */
                this.printf(MESSAGE.STATUS, "Unable to establish connection: %s\n", sConnection);
            }
        }
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {SerialPortPDP10}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) {

            /*
             * This is as late as we can currently wait to make our first inter-machine connection attempt;
             * even so, the target machine's initialization process may still be ongoing, so any connection
             * may be not fully resolved until the target machine performs its own initConnection(), which will
             * in turn invoke our initConnection() again.
             */
            this.initConnection(this.fNullModem);

            if (!data) {
                this.reset();
            } else {
                if (!this.restore(data)) return false;
            }
        }
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {SerialPortPDP10}
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
     * @this {SerialPortPDP10}
     */
    reset()
    {
        this.initState();
    }

    /**
     * save()
     *
     * This implements save support for the SerialPort component.
     *
     * @this {SerialPortPDP10}
     * @returns {Object}
     */
    save()
    {
        var state = new State(this);
        state.set(0, this.saveRegisters());
        return state.data();
    }

    /**
     * restore(data)
     *
     * This implements restore support for the SerialPort component.
     *
     * @this {SerialPortPDP10}
     * @param {Object} data
     * @returns {boolean} true if successful, false if failure
     */
    restore(data)
    {
        return this.initState(data[0]);
    }

    /**
     * initState(a)
     *
     * @this {SerialPortPDP10}
     * @param {Array} [a]
     * @returns {boolean} true if successful, false if failure
     */
    initState(a)
    {
        return true;
    }

    /**
     * saveRegisters()
     *
     * Basically, the inverse of initState().
     *
     * @this {SerialPortPDP10}
     * @returns {Array}
     */
    saveRegisters()
    {
        return [];
    }

    /**
     * receiveData(data)
     *
     * This replaces the old sendRBR() function, which expected an Array of bytes.  We still support that,
     * but in order to support connections with other SerialPort components (ie, the PCx80 SerialPort), we
     * have added support for numbers and strings as well.
     *
     * @this {SerialPortPDP10}
     * @param {number|string|Array} data
     * @returns {boolean} true if received, false if not
     */
    receiveData(data)
    {
        if (typeof data == "number") {
            this.abReceive.push(data);
        }
        else if (typeof data == "string") {
            var bASCII = 0, bASCIIPrev;
            for (var i = 0; i < data.length; i++) {
                bASCIIPrev = bASCII;
                bASCII = data.charCodeAt(i);
                /*
                 * NOTE: Multiple lines of pasted text will (at least on macOS) contain LFs instead of CRs;
                 * we convert them to CRs below.  Windows may do something different, but in the worst case,
                 * even if we receive CR/LF pairs, this code should keep the CRs and lose the LFs.
                 */
                if (bASCII == StrLib.ASCII.LF) {
                    if (bASCIIPrev == StrLib.ASCII.CR) continue;
                    bASCII = StrLib.ASCII.CR;
                }
                this.abReceive.push(bASCII);
            }
        }
        else {
            this.abReceive = this.abReceive.concat(data);
        }

        return true;                // for now, return true regardless, since we're buffering everything anyway
    }

    /**
     * receiveByte()
     *
     * @this {SerialPortPDP10}
     * @returns {number} (0x00-0xff if byte available, -1 if not)
     */
    receiveByte()
    {
        var b = -1;
        if (this.abReceive.length) {
            /*
             * Here, as elsewhere (eg, the PC11 component), even if I trusted all incoming data
             * to be byte values (which I don't), there's also the risk that it could be signed data
             * (eg, -128 to 127, instead of 0 to 255).  Both risks are good reasons to always mask
             * the data assigned to RBUF with 0xff.
             */
            b = this.abReceive.shift() & 0xff;
            this.printf("receiveByte(%#04x)\n", b);
            if (this.fUpperCase) {
                /*
                 * Automatically transform lower-case ASCII codes to upper-case; fUpperCase should
                 * only be set when a terminal or some sort of pseudo-display is being used and we don't
                 * trust it to have its CAPS-LOCK setting correct.
                 */
                if (b >= 0x61 && b < 0x7A) b -= 0x20;
            }
        }
        return b;
    }

    /**
     * receiveStatus(pins)
     *
     * @this {SerialPortPDP10}
     * @param {number} pins
     */
    receiveStatus(pins)
    {
    }

    /**
     * setConnection(component, fn)
     *
     * @this {SerialPortPDP10}
     * @param {Object|null} component
     * @param {function(number)} fn
     * @returns {boolean}
     */
    setConnection(component, fn)
    {
        if (!this.connection) {
            this.connection = component;
            this.sendData = fn;
            return true;
        }
        return false;
    }

    /**
     * transmitByte(b)
     *
     * @this {SerialPortPDP10}
     * @param {number} b
     * @returns {boolean} true if transmitted, false if not
     */
    transmitByte(b)
    {
        var fTransmitted = false;

        if (MAXDEBUG) this.printf("transmitByte(%#04x)\n", b);

        if (this.sendData) {
            if (this.sendData.call(this.connection, b)) {
                fTransmitted = true;
            }
        }

        /*
         * TODO: Why do DEC diagnostics like to output bytes with bit 7 set?
         */
        b &= 0x7F;
        if (this.controlBuffer) {
            if (b == 0x0D) {
                this.iLogicalCol = 0;
            }
            else if (b == 0x08) {
                this.controlBuffer.value = this.controlBuffer.value.slice(0, -1);
                /*
                 * TODO: Back up the correct number of columns if the character erased was a tab.
                 */
                if (this.iLogicalCol > 0) this.iLogicalCol--;
            }
            else if (b) {
                /*
                 * RT-11 outputs lots of NULL characters, at least after a "D 56=5015" (0x0A0D) command has
                 * been issued, hence the "if (b)" check above.
                 *
                 * TODO: Also consider a check for Keys.ASCII.CTRL_C, because by default, RT-11 outputs "raw"
                 * CTRL_C characters, which we capture below and render as <ETX>.  RT-11 does this for other keys
                 * as well, such as CTRL_K (<VT>) and CTRL_L (<FF>).
                 */
                var s = StrLib.toASCIICode(b); // formerly: String.fromCharCode(b);
                var nChars = s.length;      // formerly: (b >= 0x20? 1 : 0);
                if (b < 0x20 && nChars == 1) nChars = 0;
                if (b == 0x09) {
                    var tabSize = this.tabSize || 8;
                    nChars = tabSize - (this.iLogicalCol % tabSize);
                    if (this.tabSize) s = StrLib.pad("", -nChars);
                }
                if (this.charBOL && !this.iLogicalCol && nChars) s = String.fromCharCode(this.charBOL) + s;
                this.controlBuffer.value += s;
                this.controlBuffer.scrollTop = this.controlBuffer.scrollHeight;
                this.iLogicalCol += nChars;
            }
            fTransmitted = true;
        }
        else if (this.consoleBuffer != null) {
            if (b == 0x0A || this.consoleBuffer.length >= 1024) {
                this.print(this.consoleBuffer);
                this.consoleBuffer = "";
            }
            if (b != 0x0A) {
                this.consoleBuffer += String.fromCharCode(b);
            }
            fTransmitted = true;
        }

        return fTransmitted;
    }

    /**
     * SerialPortPDP10.init()
     *
     * This function operates on every HTML element of class "serial", extracting the
     * JSON-encoded parameters for the SerialPort constructor from the element's "data-value"
     * attribute, invoking the constructor to create a SerialPort component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        var aeSerial = Component.getElementsByClass(APPCLASS, "serial");
        for (var iSerial = 0; iSerial < aeSerial.length; iSerial++) {
            var eSerial = aeSerial[iSerial];
            var parmsSerial = Component.getComponentParms(eSerial);
            var serial = new SerialPortPDP10(parmsSerial);
            Component.bindComponentControls(serial, eSerial, APPCLASS);
        }
    }
}

/*
 * Initialize every SerialPort module on the page.
 */
WebLib.onInit(SerialPortPDP10.init);
