/**
 * @fileoverview Implements the PCx86 ParallelPort component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import ChipSet from "./chipset.js";
import MESSAGE from "./message.js";
import Component from "../../../modules/v2/component.js";
import State from "../../../modules/v2/state.js";
import StrLib from "../../../modules/v2/strlib.js";
import WebLib from "../../../modules/v2/weblib.js";
import { APPCLASS, COMPILED, DESKPRO386, MAXDEBUG } from "./defines.js";

/**
 * NOTE: This class declaration started as a way of informing the code inspector of the controlBuffer property,
 * which remained undefined until a setBinding() call set it later, but I've since decided that explicitly
 * initializing such properties in the constructor is a better way to go -- even though it's more code -- because
 * JavaScript compilers are supposed to be happier when the underlying object structures aren't constantly changing.
 *
 * Besides, I'm not sure I want to get into documenting every property this way, for this or any/every other class,
 * let alone getting into which ones should be considered private or protected, because PCjs isn't really a library
 * for third-party apps.
 *
 * @class ParallelPort
 * @property {number} iAdapter
 * @property {number} portBase
 * @property {number} nIRQ
 * @property {Object} controlBuffer is a DOM element bound to the port (for rudimentary output; see transmitByte())
 * @unrestricted (allows the class to define properties, both dot and named, outside of the constructor)
 */
export default class ParallelPort extends Component {
    /**
     * The "Data Register" is an input/output register at offset 0 from portBase.  The bit-to-pin mappings are:
     *
     *      Bit     Pin
     *      ---     ---
     *       0       2              // 0x01 (DATA 1)
     *       1       3              // 0x02 (DATA 2)
     *       2       4              // 0x04 (DATA 3)
     *       3       5              // 0x08 (DATA 4)
     *       4       6              // 0x10 (DATA 5)
     *       5       7              // 0x20 (DATA 6)
     *       6       8              // 0x40 (DATA 7)
     *       7       9              // 0x80 (DATA 8)
     */
    static DATA = {                 // (read/write)
        REG:        0
    };

    /**
     * The "Status Register" is an input register at offset 1 from portBase.  The bit-to-pin mappings are:
     *
     *      Bit     Pin
     *      ---     ---
     *       0       -              // 0x01 (always set on MDA printer port)
     *       1       -              // 0x02 (always set on MDA printer port)
     *       2       -              // 0x04 (always set on MDA printer port)
     *       3       !15            // 0x08 (Error)
     *       4       13             // 0x10 (Select)
     *       5       12             // 0x20 (Out of Paper)
     *       6       !10            // 0x40 (Acknowledged)
     *       7       11             // 0x80 (Busy; eg, printer off-line or operation in progress)
     */
    static STATUS = {               // (read)
        REG:        1,
        ALWAYS_SET: 0x07,           // (always set on MDA printer port)
        NERR:       0x08,           // when this bit is clear, I/O error (inverted by the ROM BIOS INT 17h Status function)
        SELECT:     0x10,           // when this bit is set, printer selected
        PAPER:      0x20,           // when this bit is set, out of paper
        NACK:       0x40,           // when this bit is clear, data acknowledged (and optionally, interrupt requested; inverted by the ROM BIOS INT 17h Status function)
        NBUSY:      0x80            // when this bit is clear, printer busy (TODO: Is this really inverted? https://www.seasip.info/VintagePC/mda.htm doesn't show it that way; perhaps it's simply that the signal from the printer is typically inverted)
    };

    /**
     * The "Control Register" is an input/output register at offset 2 from portBase.  The bit-to-pin mappings are:
     *
     *      Bit     Pin
     *      ---     ---
     *       0       !1             // 0x01 (read input data)
     *       1      !14             // 0x02 (automatically feed paper one line)
     *       2       16             // 0x04
     *       3      !17             // 0x08
     *
     * Additionally, bit 4 is the IRQ ENABLE bit, which allows interrupts when pin 10 transitions high to low.
     */
    static CONTROL = {              // (read/write)
        REG:        2,
        NSTROBE:    0x01,           // !Strobe
        NAUTOFEED:  0x02,           // !Auto feed
        INIT:       0x04,           // Initialize printer
        NSELECT:    0x08,           // !Select input
        IRQ_ENABLE: 0x10,           // set to enable interrupts (when printer clears NACK)
        ALWAYS_SET: 0xE0            // (always set on MDA printer port when reading)
    };

    static {
        /**
         * Port input notification table
         */
        ParallelPort.aPortInput = {
            0x0: ParallelPort.prototype.inData,
            0x1: ParallelPort.prototype.inStatus,
            0x2: ParallelPort.prototype.inControl
        };

        /**
         * Port output notification table
         */
        ParallelPort.aPortOutput = {
            0x0: ParallelPort.prototype.outData,
            0x2: ParallelPort.prototype.outControl
        };
    }

    /**
     * ParallelPort(parmsParallel)
     *
     * The ParallelPort component has the following component-specific (parmsParallel) properties:
     *
     *      adapter: 1 (port 0x3BC), 2 (port 0x378), or 3 (port 0x278); 0 if not defined
     *
     *      binding: name of a control (based on its "binding" attribute) to bind to this port's I/O
     *
     * In the future, we may support 'port' and 'irq' properties that allow the machine to define a
     * non-standard parallel port configuration, instead of only our pre-defined 'adapter' configurations.
     *
     * NOTE: Since the XSL file defines 'adapter' as a number, not a string, there's no need to use
     * parseInt(), and as an added benefit, we don't need to worry about whether a hex or decimal format
     * was used.
     *
     * DOS typically names the Primary adapter "LPT1" and the Secondary adapter "LPT2", but I prefer
     * to stick to adapter numbers, since not all operating systems follow those naming conventions.
     *
     * @this {ParallelPort}
     * @param {Object} parmsParallel
     */
    constructor(parmsParallel)
    {
        super("ParallelPort", parmsParallel, MESSAGE.PARALLEL);

        this.iAdapter = parmsParallel['adapter'];

        switch (this.iAdapter) {
        case 1:
            this.portBase = 0x3BC;
            this.nIRQ = ChipSet.IRQ.LPT1;
            break;
        case 2:
            this.portBase = 0x378;
            this.nIRQ = ChipSet.IRQ.LPT1;
            break;
        case 3:
            this.portBase = 0x278;
            this.nIRQ = ChipSet.IRQ.LPT2;
            break;
        default:
            Component.warning("Unrecognized parallel adapter #" + this.iAdapter);
            return;
        }
        /**
         * consoleBuffer becomes a string that records parallel port output if the 'binding' property is set to the
         * reserved name "console".  Nothing is written to the console, however, until a linefeed (0x0A) is output
         * or the string length reaches a threshold (currently, 1024 characters).
         *
         * @type {string|null}
         */
        this.consoleBuffer = null;

        /**
         * controlBuffer is a DOM element bound to the port (currently used for output only; see transmitByte()).
         *
         * @type {Object}
         */
        this.controlBuffer = null;

        let sBinding = parmsParallel['binding'];
        if (sBinding == "console") {
            this.consoleBuffer = "";
        } else {
            /**
             * If the ParallelPort wants to bind to a control (eg, "print") in a DIFFERENT component (eg, "Panel"),
             * then it specifies the name of that control with the 'binding' property.  The ParallelPort constructor
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
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * @this {ParallelPort}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea", "canvas")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "buffer")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        if (!sHTMLType || sHTMLType == "textarea") {
            this.bindings[sBinding] = this.controlBuffer = control;
            return true;
        }
        return false;
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {ParallelPort}
     * @param {Computer} cmp
     * @param {Busx86} bus
     * @param {CPUx86} cpu
     * @param {Debuggerx86} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.bus = bus;
        this.cpu = cpu;
        this.dbg = dbg;
        this.chipset = cmp.getMachineComponent("ChipSet");
        bus.addPortInputTable(this, ParallelPort.aPortInput, this.portBase);
        bus.addPortOutputTable(this, ParallelPort.aPortOutput, this.portBase);
        this.setReady();
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {ParallelPort}
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
        }
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {ParallelPort}
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
     * @this {ParallelPort}
     */
    reset()
    {
        this.initState();
    }

    /**
     * save()
     *
     * This implements save support for the ParallelPort component.
     *
     * @this {ParallelPort}
     * @returns {Object}
     */
    save()
    {
        let state = new State(this);
        state.set(0, this.saveRegisters());
        return state.data();
    }

    /**
     * restore(data)
     *
     * This implements restore support for the ParallelPort component.
     *
     * @this {ParallelPort}
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
     * @this {ParallelPort}
     * @param {Array} [data]
     * @returns {boolean} true if successful, false if failure
     */
    initState(data)
    {
        let i = 0;
        if (data === undefined) {
            data = [0, ParallelPort.STATUS.NERR | ParallelPort.STATUS.ALWAYS_SET, ParallelPort.CONTROL.ALWAYS_SET];
        }
        this.bData = data[i++];
        this.bStatus = data[i++];
        this.bControl = data[i];
        return true;
    }

    /**
     * saveRegisters()
     *
     * @this {ParallelPort}
     * @returns {Array}
     */
    saveRegisters()
    {
        let i = 0;
        let data = [];
        data[i++] = this.bData;
        data[i++] = this.bStatus;
        data[i]   = this.bControl;
        return data;
    }

    /**
     * inData(port, addrFrom)
     *
     * @this {ParallelPort}
     * @param {number} port (0x3BC, 0x378, or 0x278)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number} simulated port value
     */
    inData(port, addrFrom)
    {
        let b = this.bData;
        this.printIO(port, undefined, addrFrom, "DATA", b);
        return b;
    }

    /**
     * inStatus(port, addrFrom)
     *
     * @this {ParallelPort}
     * @param {number} port (0x3BD, 0x379, or 0x279)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number} simulated port value
     */
    inStatus(port, addrFrom)
    {
        let b = this.bStatus;
        this.bStatus |= (ParallelPort.STATUS.NACK | ParallelPort.STATUS.NBUSY);
        this.printIO(port, undefined, addrFrom, "STAT", b);
        this.updateIRR();
        return b;
    }

    /**
     * inControl(port, addrFrom)
     *
     * @this {ParallelPort}
     * @param {number} port (0x3BE, 0x37A, or 0x27A)
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to read the specified port)
     * @returns {number} simulated port value
     */
    inControl(port, addrFrom)
    {
        let b = this.bControl;
        this.printIO(port, undefined, addrFrom, "CTRL", b);
        return b;
    }

    /**
     * outData(port, bOut, addrFrom)
     *
     * @this {ParallelPort}
     * @param {number} port (0x3BC, 0x378, or 0x278)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to write the specified port)
     */
    outData(port, bOut, addrFrom)
    {
        let parallel = this;
        this.printIO(port, bOut, addrFrom, "DATA");
        this.bData = bOut;
        this.cpu.nonCPU(function() {
            if (parallel.transmitByte(bOut)) {
                parallel.bStatus |= ParallelPort.STATUS.NERR;
                parallel.bStatus &= ~(ParallelPort.STATUS.NACK | ParallelPort.STATUS.NBUSY);
                return true;
            }
            return false;
        });
        this.updateIRR();
    }

    /**
     * outControl(port, bOut, addrFrom)
     *
     * @this {ParallelPort}
     * @param {number} port (0x3BE, 0x37A, or 0x27A)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined whenever the Debugger tries to write the specified port)
     */
    outControl(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "CTRL");
        this.bControl = bOut | ParallelPort.CONTROL.ALWAYS_SET;
        this.updateIRR();
    }

    /**
     * updateIRR()
     *
     * @this {ParallelPort}
     */
    updateIRR()
    {
        if (this.chipset && this.nIRQ) {
            if ((this.bControl & ParallelPort.CONTROL.IRQ_ENABLE) && !(this.bStatus & ParallelPort.STATUS.NACK)) {
                this.chipset.setIRR(this.nIRQ);
            } else {
                this.chipset.clearIRR(this.nIRQ);
            }
        }
    }

    /**
     * transmitByte(b)
     *
     * @this {ParallelPort}
     * @param {number} b
     * @returns {boolean} true if transmitted, false if not
     */
    transmitByte(b)
    {
        let fTransmitted = false;

        this.printf("transmitByte(%#04x)\n", b);

        if (this.controlBuffer) {
            if (b == 0x0D) {
                // this.iLogicalCol = 0;
            }
            else if (b == 0x08) {
                this.controlBuffer.value = this.controlBuffer.value.slice(0, -1);
            }
            else {
                /**
                 * If we assume that the printer being used was the original IBM 80 CPS Matrix Printer,
                 * characters 0x80-0x9F mirror control codes 0x00-0x1F, and characters 0xA0-0xDF are various
                 * block shapes, sort of in the spirit of the line-drawing characters 0xC0-0xDF defined by
                 * IBM Code Page 437, but, no, completely different.  And apparently, characters 0xE0-0xFF
                 * printed nothing at all (see Table 11 on page 2-78 of the original IBM PC 5150 TechRef).
                 *
                 * The only control character we care about is LINE-FEED; for all other control characters,
                 * we'll display the ASCII mnemonic, to make it clear what the software intended.  And as for
                 * any block characters, we'll print an asterisk and call it good, for now.  Beyond that,
                 * we'll just print spaces.
                 */
                if (b >= 0x80) {
                    if (b < 0xA0) {
                        b -= 0x80;
                    } else if (b < 0xE0) {
                        b = 0x2A;       // ASCII code for an asterisk
                    } else {
                        b = 0x20;       // ASCII code for a space
                    }
                }
                this.controlBuffer.value += StrLib.toASCIICode(b);
                this.controlBuffer.scrollTop = this.controlBuffer.scrollHeight;
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
     * ParallelPort.init()
     *
     * This function operates on every HTML element of class "parallel", extracting the
     * JSON-encoded parameters for the ParallelPort constructor from the element's "data-value"
     * attribute, invoking the constructor to create a ParallelPort component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        let aeParallel = Component.getElementsByClass(APPCLASS, "parallel");
        for (let iParallel = 0; iParallel < aeParallel.length; iParallel++) {
            let eParallel = aeParallel[iParallel];
            let parmsParallel = Component.getComponentParms(eParallel);
            let parallel = new ParallelPort(parmsParallel);
            Component.bindComponentControls(parallel, eParallel, APPCLASS);
        }
    }
}

/**
 * Initialize every ParallelPort module on the page.
 */
WebLib.onInit(ParallelPort.init);
