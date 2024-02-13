/**
 * @fileoverview Implements the PCx86 Mouse component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import MESSAGE from "./message.js";
import SerialPort from "./serial.js";
import Component from "../../../modules/v2/component.js";
import State from "../../../modules/v2/state.js";
import WebLib from "../../../modules/v2/weblib.js";
import { APPCLASS, DEBUGGER, RS232 } from "./defines.js";

/**
 * @class Mouse
 * @unrestricted (allows the class to define properties, both dot and named, outside of the constructor)
 */
export default class Mouse extends Component {

    static INTERFACE = {
        BUS:    "bus",
        INPORT: "inport",
        SERIAL: "serial"
    };

    static BUTTON = {
        LEFT:   0,
        RIGHT:  2
    };

    /**
     * The Microsoft Bus Mouse supported only one base address: 0x23C.
     *
     * NOTE: Windows v1.01 probes ports 0x23D and 0x23F immediately prior to probing COM2 (and then COM1)
     * for a serial mouse.
     */
    static BUS = {
        DATA: {                     // Mouse Data Register
            PORT:   0x23C
        },
        TPPI: {                     // 8255 (PPI) Test Register
            PORT:   0x23D
        },
        CTRL: {                     // Mouse Control Register
            PORT:   0x23E
        },
        CPPI: {                     // 8255 (PPI) Control Register
            PORT:   0x23F
        }
    };

    /**
     * The retail Microsoft InPort card supported two base addresses, 0x23C and 0x238, through the primary and
     * secondary jumpers, respectively.  However, OEMs may have had InPorts on other base addresses.
     *
     * Here's a typical InPort Mouse detection sequence:
     *
     *      S = IN(Mouse.INPORT.ID.PORT)
     *      ...
     *      VERIFY THAT S EQUALS Mouse.INPORT.ID.CHIP
     *      T = IN(Mouse.INPORT.ID.PORT)
     *      ...
     *      VERIFY ADDITIONAL PAIRS OF READS RETURN MATCHING S AND T VALUES
     *
     * Here's a typical InPort Mouse interrupt sequence:
     *
     *      OUT(Mouse.INPORT.ADDR.PORT, Mouse.INPORT.ADDR.MODE)
     *      OUT(Mouse.INPORT.DATA.PORT, IN(Mouse.INPORT.DATA.PORT) | Mouse.INPORT.DATA.MODE.HOLD)
     *      ...
     *      OUT(Mouse.INPORT.ADDR.PORT, Mouse.INPORT.ADDR.X)
     *      X = IN(Mouse.INPORT.DATA.PORT)
     *      OUT(Mouse.INPORT.ADDR.PORT, Mouse.INPORT.ADDR.Y)
     *      Y = IN(Mouse.INPORT.DATA.PORT)
     *      OUT(Mouse.INPORT.ADDR.PORT, Mouse.INPORT.ADDR.STATUS)
     *      B = IN(Mouse.INPORT.DATA.PORT) & (Mouse.INPORT.DATA.STATUS.B1 | Mouse.INPORT.DATA.STATUS.B2 | Mouse.INPORT.DATA.STATUS.B3)
     *      ...
     *      OUT(Mouse.INPORT.ADDR.PORT, Mouse.INPORT.ADDR.MODE)
     *      OUT(Mouse.INPORT.DATA.PORT, IN(Mouse.INPORT.DATA.PORT) & ~Mouse.INPORT.DATA.MODE.HOLD)
     */
    static INPORT = {
        ADDR: {
            PORT:       0x23C,
            STATUS:     0x00,       // InPort Status Register
            X:          0x01,       // InPort X Movement Register
            Y:          0x02,       // InPort Y Movement Register
            ISTAT:      0x05,       // InPort Interface Status Register
            ICTRL:      0x06,       // InPort Interface Control Register
            MODE:       0x07        // InPort Mode Register
        },
        DATA: {
            /**
             * The internal register read or written via this port is determined by the value written to ADDR.PORT
             */
            PORT:       0x23D,
            STATUS:     {           // InPort Status Register (0)
                B3:     0x01,       // Status button 3
                B2:     0x02,       // Status button 2
                B1:     0x04,       // Status button 1
                DB3:    0x08,       // Delta button 3
                DB2:    0x10,       // Delta button 2
                DB1:    0x20,       // Delta button 1
                MOVE:   0x40,       // Movement
                PACKET: 0x80        // Packet complete
            },
            MODE: {                 // InPort Mode Register (7)
                HOLD:   0x20        // hold the status for reading
            }
        },
        ID: {
            /**
             * The initial read returns the Chip ID; alternate reads return a byte containing the InPort revision number
             * in the low nibble and the InPort version number in the high nibble.
             */
            PORT:       0x23E,
            CHIP:       0xDE        // InPort Chip ID
        },
        TEST: {
            PORT:       0x23F
        }
    };

    /**
     * From http://paulbourke.net/dataformats/serialmouse:
     *
     *      The old MicroSoft serial mouse, while no longer in general use, can be employed to provide a low cost input device,
     *      for example, coupling the internal mechanism to other moving objects. The serial protocol for the mouse is:
     *
     *          1200 baud, 7 bit, 1 stop bit, no parity.
     *
     *      The pinout of the connector follows the standard serial interface, as shown below:
     *
     *          Pin     Abbr    Description
     *          1       DCD     Data Carrier Detect
     *          2       RD      Receive Data            [serial data from mouse to host]
     *          3       TD      Transmit Data
     *          4       DTR     Data Terminal Ready     [used to provide positive voltage to mouse, plus reset/detection]
     *          5       SG      Signal Ground
     *          6       DSR     Data Set Ready
     *          7       RTS     Request To Send         [used to provide positive voltage to mouse]
     *          8       CTS     Clear To Send
     *          9       RI      Ring
     *
     *      Every time the mouse changes state (moved or button pressed) a three byte "packet" is sent to the serial interface.
     *      For reasons known only to the engineers, the data is arranged as follows, most notably the two high order bits for the
     *      x and y coordinates share the first byte with the button status.
     *
     *                      D6  D5  D4  D3  D2  D1  D0
     *          1st byte    1   LB  RB  Y7  Y6  X7  X6
     *          2nd byte    0   X5  X4  X3  X2  X1  X0
     *          3rd byte    0   Y5  Y4  Y3  Y2  Y1  Y0
     *
     *      where:
     *
     *          LB is the state of the left button, 1 = pressed, 0 = released.
     *          RB is the state of the right button, 1 = pressed, 0 = released
     *          X0-7 is movement of the mouse in the X direction since the last packet. Positive movement is toward the right.
     *          Y0-7 is movement of the mouse in the Y direction since the last packet. Positive movement is back, toward the user.
     *
     * From http://www.kryslix.com/nsfaq/Q.12.html:
     *
     *      The Microsoft serial mouse is the most popular 2-button mouse. It is supported by all major operating systems.
     *      The maximum tracking rate for a Microsoft mouse is 40 reports/second * 127 counts per report, in other words, 5080 counts
     *      per second. The most common range for mice is is 100 to 400 CPI (counts per inch) but can be up to 1000 CPI. A 100 CPI mouse
     *      can discriminate motion up to 50.8 inches/second while a 400 CPI mouse can only discriminate motion up to 12.7 inches/second.
     *
     *          9-pin  25-pin    Line    Comments
     *          shell  1         GND
     *          3      2         TD      Serial data from host to mouse (only for power)
     *          2      3         RD      Serial data from mouse to host
     *          7      4         RTS     Positive voltage to mouse
     *          8      5         CTS
     *          6      6         DSR
     *          5      7         SGND
     *          4      20        DTR     Positive voltage to mouse and reset/detection
     *
     *      To function correctly, both the RTS and DTR lines must be positive. DTR/DSR and RTS/CTS must NOT be shorted.
     *      RTS may be toggled negative for at least 100ms to reset the mouse. (After a cold boot, the RTS line is usually negative.
     *      This provides an automatic toggle when RTS is brought positive). When DTR is toggled the mouse should send a single byte
     *      (0x4D, ASCII 'M').
     *
     *      Serial data parameters: 1200bps, 7 data bits, 1 stop bit
     *
     *      Data is sent in 3 byte packets for each event (a button is pressed or released, or the mouse moves):
     *
     *                  D7  D6  D5  D4  D3  D2  D1  D0
     *          Byte 1  X   1   LB  RB  Y7  Y6  X7  X6
     *          Byte 2  X   0   X5  X4  X3  X2  X1  X0
     *          Byte 3  X   0   Y5  Y4  Y3  Y2  Y1  Y0
     *
     *      LB is the state of the left button (1 means down).
     *      RB is the state of the right button (1 means down).
     *      X7-X0 movement in X direction since last packet (signed byte).
     *      Y7-Y0 movement in Y direction since last packet (signed byte).
     *      The high order bit of each byte (D7) is ignored. Bit D6 indicates the start of an event, which allows the software to
     *      synchronize with the mouse.
     */
    static SERIAL = {
        ID:     0x4D
    };

    /**
     * Mouse(parmsMouse)
     *
     * The Mouse component has the following component-specific (parmsMouse) properties:
     *
     *      adapter: 1 (primary) or 2 (secondary); 0 if not defined
     *
     *      binding: name of a corresponding device component (implies type="serial")
     *
     *      scaleMouse: a floating-point number used to scale incoming mouse coordinates; the default is 0.5
     *
     *      serial: the ID of a corresponding serial component (used in lieu of type="serial" and binding="ID")
     *
     *      type: one of "bus", "inport", or "serial"; the default is "serial" if serial or binding properties are set
     *
     * The first version of this component supported ONLY emulation of the original Microsoft serial mouse,
     * so a valid SerialPort component ID using the 'serial' property was required.  Now, using the 'type' property,
     * it's possible to enable support for other types of mouse hardware (eg, 'bus' for the original Microsoft
     * Bus Mouse interface or 'inport' for the Microsoft InPort Mouse interface).  The 'adapter' property is used
     * only when the selected type supports different configurations (eg, primary vs. secondary InPort adapters).
     *
     * If the 'type' property is set to "serial" (or 'type' is not set and either the original 'serial' property
     * or the new 'binding' property is set), then serial communication will be established with the specified
     * SerialPort component, requesting access to the corresponding serial component ID.  If the SerialPort component
     * is not installed and/or the specified serial component ID is not present, a configuration error will be reported.
     *
     * To recap, the following machine XML syntax is still supported:
     *
     *      <mouse serial="com2"/>
     *
     * but going forward, you should stop using the serial attribute and use syntax like this instead:
     *
     *      <mouse type="serial" binding="com2"/>
     *
     * @this {Mouse}
     * @param {Object} parmsMouse
     */
    constructor(parmsMouse)
    {
        super("Mouse", parmsMouse, MESSAGE.MOUSE);

        this.iAdapter = parmsMouse['adapter'] || 0;
        this.idDevice = parmsMouse['serial'] || parmsMouse['binding'];
        this.sType = parmsMouse['type'] || (this.idDevice? Mouse.INTERFACE.SERIAL : Mouse.INTERFACE.BUS);
        this.typeDevice = (this.sType == Mouse.INTERFACE.SERIAL? "SerialPort" : null);
        this.componentDevice = null;

        this.scale = parmsMouse['scaleMouse'];
        this.setActive(false);
        this.fActive = this.fCaptured = this.fLocked = false;

        /**
         * Initially, no video devices, and therefore no screens, are attached.  initBus() will update aVideo,
         * and powerUp() will update aScreens.
         */
        this.aVideo = [];
        this.aScreens = [];
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {Mouse}
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
        this.scale = cmp.getMachineParm('scaleMouse') || this.scale;
        /**
         * Enumerate all the Video components that we may need to interact with.
         */
        for (let video = null; (video = cmp.getMachineComponent("Video", video));) {
            this.aVideo.push(video);
        }
        if (this.sType == Mouse.INTERFACE.BUS) {
            bus.addPortInputTable(this, Mouse.aBusInput, Mouse.BUS.DATA.PORT);
            bus.addPortOutputTable(this, Mouse.aBusOutput, Mouse.BUS.DATA.PORT);
        }
        this.setReady();
    }

    /**
     * isActive()
     *
     * @this {Mouse}
     * @returns {boolean} true if active, false if not
     */
    isActive()
    {
        return this.fActive && (this.cpu? this.cpu.isRunning() : false);
    }

    /**
     * setActive(fActive)
     *
     * @this {Mouse}
     * @param {boolean} fActive is true if active, false if not
     */
    setActive(fActive)
    {
        this.fActive = fActive;
        /**
         * It's currently not possible to automatically lock the pointer outside the context of a user action
         * (eg, a button or screen click), so this code is for naught.
         *
         *      if (this.aVideo.length) this.aVideo[0].notifyPointerActive(fActive);
         *
         * We now rely on similar code in clickMouse().
         */
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {Mouse}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) {
            if (!data || !this.restore) {
                this.reset();
            } else {
                if (!this.restore(data)) return false;
            }
            if (this.typeDevice && !this.componentDevice) {
                let componentDevice = null;
                while ((componentDevice = this.cmp.getMachineComponent(this.typeDevice, componentDevice))) {
                    if (componentDevice.bindMouse) {
                        this.componentDevice = componentDevice.bindMouse(this.idDevice, this, this.receiveStatus);
                        if (this.componentDevice) {
                            /**
                             * It's possible that the SerialPort we've just attached to might want to bring us "up to speed"
                             * on the device's state, which is why I envisioned a subsequent syncMouse() call.  And you would
                             * want to do that as a separate call, not as part of bindMouse(), because componentDevice
                             * isn't set until bindMouse() returns.
                             *
                             * However, syncMouse() seems unnecessary, given that SerialPort initializes its MCR to an "inactive"
                             * state, and even when restoring a previous state, if we've done our job properly, both SerialPort
                             * and Mouse should be restored in sync, making any explicit attempt at sync'ing unnecessary (or so I hope).
                             *
                             *      this.componentDevice.syncMouse();
                             */
                            break;
                        }
                    }
                }
                if (this.componentDevice) {
                    this.aScreens = [];     // ensure the screen array is empty before (re)filling it
                    for (let i = 0; i < this.aVideo.length; i++) {
                        let screen = this.aVideo[i].getScreen(this);
                        if (screen) this.aScreens.push(screen);
                    }
                } else {
                    Component.warning(this.id + ": " + this.typeDevice + " " + this.idDevice + " unavailable");
                }
            }
            if (this.fActive) {
                this.captureAll();
            } else {
                this.releaseAll();
            }
        }
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {Mouse}
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
     * @this {Mouse}
     */
    reset()
    {
        this.initState();
    }

    /**
     * save()
     *
     * This implements save support for the Mouse component.
     *
     * @this {Mouse}
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
     * This implements restore support for the Mouse component.
     *
     * @this {Mouse}
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
     * @this {Mouse}
     * @param {Array} [data]
     * @returns {boolean} true if successful, false if failure
     */
    initState(data)
    {
        let i = 0;
        if (data === undefined) data = [false, -1, -1, 0, 0, false, false, 0];
        this.setActive(data[i++]);
        this.xMouse = data[i++];
        this.yMouse = data[i++];
        this.xDelta = data[i++];
        this.yDelta = data[i++];
        this.fButton1 = data[i++];      // FYI, we consider button1 to be the LEFT button
        this.fButton2 = data[i++];      // FYI, we consider button2 to be the RIGHT button
        this.pins = data[i];
        /**
         * Convert old UART "MCR" data to new RS-232 "pins" data, in case we're loading an old state;
         * detection and conversion relies on the fact that the MCR bits don't overlap with any RS-232 bits.
         */
        if (this.pins & (SerialPort.MCR.DTR | SerialPort.MCR.RTS)) {
            this.pins = ((this.pins & SerialPort.MCR.DTR)? RS232.DTR.MASK : 0) | ((this.pins & SerialPort.MCR.RTS)? RS232.RTS.MASK : 0);
        }
        return true;
    }

    /**
     * saveState()
     *
     * @this {Mouse}
     * @returns {Array}
     */
    saveState()
    {
        let i = 0;
        let data = [];
        data[i++] = this.fActive;
        data[i++] = this.xMouse;
        data[i++] = this.yMouse;
        data[i++] = this.xDelta;
        data[i++] = this.yDelta;
        data[i++] = this.fButton1;
        data[i++] = this.fButton2;
        data[i] = this.pins;
        return data;
    }

    /**
     * notifyPointerLocked()
     *
     * @this {Mouse}
     * @param {boolean} fLocked
     */
    notifyPointerLocked(fLocked)
    {
        this.fLocked = fLocked;
    }

    /**
     * captureAll()
     *
     * @this {Mouse}
     */
    captureAll()
    {
        if (!this.fCaptured) {
            for (let i = 0; i < this.aScreens.length; i++) {
                if (this.captureMouse(this.aScreens[i])) this.fCaptured = true;
            }
        }
    }

    /**
     * releaseAll()
     *
     * @this {Mouse}
     */
    releaseAll()
    {
        if (this.fCaptured) {
            for (let i = 0; i < this.aScreens.length; i++) {
                if (this.releaseMouse(this.aScreens[i])) this.fCaptured = false;
            }
        }
    }

    /**
     * captureMouse(control)
     *
     * NOTE: addEventListener() wasn't supported in Internet Explorer until IE9, but that's OK, because
     * IE9 is the oldest IE we support anyway (since versions prior to IE9 lack the necessary HTML5 support).
     *
     * @this {Mouse}
     * @param {HTMLElement} control from the HTML DOM (eg, the control for the simulated screen)
     * @returns {boolean} true if event handlers were actually added, false if not
     */
    captureMouse(control)
    {
        if (control) {
            let mouse = this;
            control.addEventListener(
                'mousemove',
                function onMouseMove(event) {
                    mouse.processMouseEvent(event);
                },
                false               // we'll specify false for the 'useCapture' parameter for now...
            );
            control.addEventListener(
                'mousedown',
                function onMouseDown(event) {
                    mouse.processMouseEvent(event, true);
                },
                false               // we'll specify false for the 'useCapture' parameter for now...
            );
            control.addEventListener(
                'mouseup',
                function onMouseUp(event) {
                    mouse.processMouseEvent(event, false);
                },
                false               // we'll specify false for the 'useCapture' parameter for now...
            );
            /**
             * None of these tricks seemed to work for IE10, so I'm giving up hiding the browser's mouse pointer in IE for now.
             *
             *      control['style']['cursor'] = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjbQg61aAAAADUlEQVQYV2P4//8/IwAI/QL/+TZZdwAAAABJRU5ErkJggg=='), url('/versions/images/current/blank.cur'), none";
             *
             * Setting the cursor style to "none" may not be a standard, but it works in Safari, Firefox and Chrome, so that's pretty
             * good for a non-standard!
             *
             * TODO: The reference to '/versions/images/current/blank.cur' is also problematic for anyone who might want
             * to run this app from a different server, so think about that as well.
             */
            control['style']['cursor'] = "none";
            return true;
        }
        return false;
    }

    /**
     * releaseMouse(control)
     *
     * TODO: Use removeEventListener() to clean up our handlers; since I'm currently using anonymous functions,
     * and since I'm not seeing any compelling reason to remove the handlers once they've been established, it's
     * less code to leave them in place.
     *
     * @this {Mouse}
     * @param {HTMLElement} control from the HTML DOM
     * @returns {boolean} true if event handlers were actually released, false if not
     */
    releaseMouse(control)
    {
        if (control) {
            control['style']['cursor'] = "auto";
        }
        return false;
    }

    /**
     * processMouseEvent(event, fDown)
     *
     * @this {Mouse}
     * @param {Object} event object from a 'mousemove', 'mousedown' or 'mouseup' event (ie, a MouseEvent object)
     * @param {boolean} [fDown] (undefined if neither a down nor up event)
     */
    processMouseEvent(event, fDown)
    {
        if (fDown !== undefined) {
            if (this.fLocked === false) {
                /**
                 * If there's no support for automatic pointer locking in the Video component, notifyPointerActive()
                 * will return false, and we will set fLocked to null, ensuring that we never attempt this again.
                 */
                if (!this.aVideo.length || !this.aVideo[0].notifyPointerActive(true)) {
                    this.fLocked = null;
                }
            }
            this.clickMouse(event.button, fDown);
        } else {
            /**
             * All we really care about are deltas.  We record screenX and screenY (as xMouse and yMouse)
             * merely to calculate xDelta and yDelta.
             */
            let xDelta;
            let yDelta;
            if (this.xMouse < 0 || this.yMouse < 0) {
                this.xMouse = event.screenX;
                this.yMouse = event.screenY;
            }
            if (this.fLocked) {
                xDelta = event['movementX'] || event['mozMovementX'] || event['webkitMovementX'] || 0;
                yDelta = event['movementY'] || event['mozMovementY'] || event['webkitMovementY'] || 0;
            } else {
                xDelta = event.screenX - this.xMouse;
                yDelta = event.screenY - this.yMouse;
            }
            this.xMouse = event.screenX;
            this.yMouse = event.screenY;
            this.moveMouse(xDelta, yDelta, this.xMouse, this.yMouse);
        }
    }

    /**
     * clickMouse(iButton, fDown)
     *
     * @this {Mouse}
     * @param {number} iButton is Mouse.BUTTON.LEFT (0) for fButton1, Mouse.BUTTON.RIGHT (2) for fButton2
     * @param {boolean} fDown
     */
    clickMouse(iButton, fDown)
    {
        if (this.isActive()) {
            let sDiag = DEBUGGER? ("mouse button" + iButton + ' ' + (fDown? "dn" : "up")) : null;
            switch (iButton) {
            case Mouse.BUTTON.LEFT:
                if (this.fButton1 != fDown) {
                    this.fButton1 = fDown;
                    this.sendPacket(sDiag);
                    return;
                }
                break;
            case Mouse.BUTTON.RIGHT:
                if (this.fButton2 != fDown) {
                    this.fButton2 = fDown;
                    this.sendPacket(sDiag);
                    return;
                }
                break;
            default:
                break;
            }
            this.printf("%s: ignored\n", sDiag);
        }
    }

    /**
     * moveMouse(xDelta, yDelta, xDiag, yDiag)
     *
     * @this {Mouse}
     * @param {number} xDelta
     * @param {number} yDelta
     * @param {number} [xDiag]
     * @param {number} [yDiag]
     */
    moveMouse(xDelta, yDelta, xDiag, yDiag)
    {
        if (this.isActive()) {
            /**
             * I would prefer to simply say "Math.round(xDelta * this.scale)", but JavaScript's round() function
             * rounds negative numbers toward +infinity if the fraction is exactly 0.5.  All positive numbers are
             * rounded correctly, so we convert the value to positive and restore its sign afterward.  Additionally,
             * if the scaling factor turns a non-zero value into zero, we restore the value to its smallest legal
             * non-zero value (thanks to Math.sign() again).  This ensures that the tiniest movement of the physical
             * mouse always results in at least the tiniest movement of the virtual mouse.
             */
            let xScaled = (Math.round(Math.abs(xDelta) * this.scale) * Math.sign(xDelta)) || Math.sign(xDelta);
            let yScaled = (Math.round(Math.abs(yDelta) * this.scale) * Math.sign(yDelta)) || Math.sign(yDelta);
            if (xScaled || yScaled) {
                this.printf(MESSAGE.MOUSE, "moveMouse(%s,%s)\n", xScaled, yScaled);
                /**
                 * As sendPacket() indicates, any x and y coordinates we supply are for diagnostic purposes only.
                 * sendPacket() only cares about the xDelta and yDelta properties we provide above, which it then zeroes
                 * on completion.
                 */
                this.xDelta = xScaled;
                this.yDelta = yScaled;
                this.sendPacket(null, xDiag, yDiag);
            }
        }
    }

    /**
     * sendPacket(sDiag, xDiag, yDiag)
     *
     * If we're called, something changed.
     *
     * Let's review the 3-byte packet format:
     *
     *              D7  D6  D5  D4  D3  D2  D1  D0
     *      Byte 1  X   1   LB  RB  Y7  Y6  X7  X6
     *      Byte 2  X   0   X5  X4  X3  X2  X1  X0
     *      Byte 3  X   0   Y5  Y4  Y3  Y2  Y1  Y0
     *
     * @this {Mouse}
     * @param {string|null|*} [sDiag] diagnostic message
     * @param {number} [xDiag] original x-coordinate (optional; for diagnostic use only)
     * @param {number} [yDiag] original y-coordinate (optional; for diagnostic use only)
     */
    sendPacket(sDiag, xDiag, yDiag)
    {
        let b1 = 0x40 | (this.fButton1? 0x20 : 0) | (this.fButton2? 0x10 : 0) | ((this.yDelta & 0xC0) >> 4) | ((this.xDelta & 0xC0) >> 6);
        let b2 = this.xDelta & 0x3F;
        let b3 = this.yDelta & 0x3F;
        this.printf(MESSAGE.SERIAL + MESSAGE.ADDR, "%s%sserial packet [%#04x,%#04x,%#04x]\n", (sDiag? (sDiag + ": ") : ""), (yDiag !== undefined? ("mouse (" + xDiag + "," + yDiag + "): ") : ""), b1, b2, b3);
        this.componentDevice.receiveData([b1, b2, b3]);
        this.xDelta = this.yDelta = 0;
    }

    /**
     * receiveStatus(pins)
     *
     * The SerialPort notifies us whenever SerialPort.MCR.DTR or SerialPort.MCR.RTS changes.
     *
     * During normal serial mouse operation, both RTS and DTR must be "positive".
     *
     * Setting RTS "negative" for 100ms resets the mouse.  Toggling DTR requests an identification byte (SERIAL.ID).
     *
     * NOTES: The above 3rd-party information notwithstanding, I've observed that Windows v1.01 initially writes 0x01
     * to the MCR (DTR on, RTS off), spins in a loop that reads the RBR (probably to avoid a bogus identification byte
     * sitting in the RBR), and then writes 0x0B to the MCR (DTR on, RTS on).  This last step is consistent with making
     * the mouse "active", but it is NOT consistent with "toggling DTR", so I conclude that a reset is ALSO sufficient
     * for sending the identification byte.  Right or wrong, this gets the ball rolling for Windows v1.01.
     *
     * @this {Mouse}
     * @param {number} pins
     */
    receiveStatus(pins)
    {
        let fActive = ((pins & (RS232.DTR.MASK | RS232.RTS.MASK)) == (RS232.DTR.MASK | RS232.RTS.MASK));
        if (fActive) {
            if (!this.fActive) {
                let fIdentify = false;
                if (!(this.pins & RS232.RTS.MASK)) {
                    this.reset();
                    this.printf("serial mouse reset\n");
                    fIdentify = true;
                }
                if (!(this.pins & RS232.DTR.MASK)) {
                    this.printf("serial mouse ID requested\n");
                    fIdentify = true;
                }
                if (fIdentify) {
                    /**
                     * HEADS UP: Everything I'd read about the (original) Microsoft Serial Mouse "reset" protocol says
                     * that the device sends a single byte (0x4D aka 'M').  It's not surprising to think that newer mice
                     * might send additional bytes, but you would think that newer mouse drivers (eg, MOUSE.COM v8.20)
                     * would always be able to deal with mice that sent only one byte.
                     *
                     * You would be wrong.  On an INT 0x33 reset, the v8.20 driver looks for an 'M', then it waits for
                     * another byte (0x42 aka 'B').  If it doesn't receive a 'B', it will accept another 'M'.  But if it
                     * receives something else (or nothing at all), it will spend a long time waiting for it, and then
                     * return an error.
                     *
                     * It's entirely possible that I've done something wrong and inadvertently "tricked" MOUSE.COM into
                     * using the wrong detection logic.  But given the other problems I've seen in MOUSE.COM v8.20, including
                     * its failure to properly terminate-and-stay-resident when its initial INT 0x33 reset returns an error,
                     * I'm not in the mood to give it the benefit of the doubt.
                     *
                     * So, anyway, I solve the terminate-and-stay-resident bug in MOUSE.COM v8.20 by feeding it *two* SERIAL.ID
                     * bytes on a reset.  This doesn't seem to adversely affect serial mouse emulation for Windows 1.01, so
                     * I'm calling this good enough for now.
                     */
                    this.componentDevice.receiveData([Mouse.SERIAL.ID, Mouse.SERIAL.ID], true);
                    this.printf("serial mouse ID sent\n");
                }
                this.captureAll();
                this.setActive(fActive);
            }
        } else {
            if (this.fActive) {
                /**
                 * Although this would seem nice (ie, for the Windows v1.01 mouse driver to turn RTS off when its mouse
                 * driver shuts down and Windows exits, since it DID turn RTS on), that doesn't appear to actually happen.
                 * At the very least, Windows will have (re)masked the serial port's IRQ, so what does it matter?  Not much,
                 * I just would have preferred that fActive properly reflect whether we should continue dispatching mouse
                 * events, displaying MOUSE messages, etc.
                 *
                 * We could ask the ChipSet component to notify the SerialPort component whenever its IRQ is masked/unmasked,
                 * and then have the SerialPort pass that notification on to us, but I'm assuming that in the real world,
                 * a mouse device that's still powered may still send event data to the serial port, and if there was software
                 * polling the serial port, it might expect to see that data.  Unlikely, but not impossible.
                 */
                this.printf("serial mouse inactive\n");
                this.releaseAll();
                this.setActive(fActive);
            }
        }
        this.pins = pins;
    }

    /**
     * inBusData(port, addrFrom)
     *
     * @this {Mouse}
     * @param {number} port (eg, 0x23C)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number} simulated port value
     */
    inBusData(port, addrFrom)
    {
        let b = 0;
        this.printIO(port, undefined, addrFrom, "DATA", b);
        return b;
    }

    /**
     * inBusTPPI(port, addrFrom)
     *
     * @this {Mouse}
     * @param {number} port (eg, 0x23D)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number} simulated port value
     */
    inBusTPPI(port, addrFrom)
    {
        let b = 0;
        this.printIO(port, undefined, addrFrom, "TPPI", b);
        return b;
    }

    /**
     * inBusCtrl(port, addrFrom)
     *
     * @this {Mouse}
     * @param {number} port (eg, 0x23E)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number} simulated port value
     */
    inBusCtrl(port, addrFrom)
    {
        let b = 0;
        this.printIO(port, undefined, addrFrom, "CTRL", b);
        return b;
    }

    /**
     * inBusCPPI(port, addrFrom)
     *
     * @this {Mouse}
     * @param {number} port (eg, 0x23F)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number} simulated port value
     */
    inBusCPPI(port, addrFrom)
    {
        let b = 0;
        this.printIO(port, undefined, addrFrom, "CPPI", b);
        return b;
    }

    /**
     * outBusData(port, bOut, addrFrom)
     *
     * @this {Mouse}
     * @param {number} port (eg, 0x23C)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to write the specified port)
     */
    outBusData(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "DATA");
    }

    /**
     * outBusTPPI(port, bOut, addrFrom)
     *
     * @this {Mouse}
     * @param {number} port (eg, 0x23D)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to write the specified port)
     */
    outBusTPPI(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "TPPI");
    }

    /**
     * outBusCtrl(port, bOut, addrFrom)
     *
     * @this {Mouse}
     * @param {number} port (eg, 0x23E)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to write the specified port)
     */
    outBusCtrl(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "CTRL");
    }

    /**
     * outBusCPPI(port, bOut, addrFrom)
     *
     * @this {Mouse}
     * @param {number} port (eg, 0x23F)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to write the specified port)
     */
    outBusCPPI(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "CPPI");
    }

    /**
     * Mouse.init()
     *
     * This function operates on every HTML element of class "mouse", extracting the
     * JSON-encoded parameters for the Mouse constructor from the element's "data-value"
     * attribute, invoking the constructor to create a Mouse component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        let aeMouse = Component.getElementsByClass(APPCLASS, "mouse");
        for (let iMouse = 0; iMouse < aeMouse.length; iMouse++) {
            let eMouse = aeMouse[iMouse];
            let parmsMouse = Component.getComponentParms(eMouse);
            let mouse = new Mouse(parmsMouse);
            Component.bindComponentControls(mouse, eMouse, APPCLASS);
        }
    }
}

Mouse.aBusInput = {
    0x0:    Mouse.prototype.inBusData,
    0x1:    Mouse.prototype.inBusTPPI,
    0x2:    Mouse.prototype.inBusCtrl,
    0x3:    Mouse.prototype.inBusCPPI
};

Mouse.aBusOutput = {
    0x0:    Mouse.prototype.outBusData,
    0x1:    Mouse.prototype.outBusTPPI,
    0x2:    Mouse.prototype.outBusCtrl,
    0x3:    Mouse.prototype.outBusCPPI
};

/**
 * Initialize every Mouse module on the page.
 */
WebLib.onInit(Mouse.init);
