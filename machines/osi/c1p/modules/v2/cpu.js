/**
 * @fileoverview This file implements the C1Pjs 6502 CPU component
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
 * @class C1PCPU
 * @unrestricted
 */
export default class C1PCPU extends Component {
    /**
     * C1PCPU(parmsCPU)
     *
     * The C1PCPU object has one component-specific initialization property:
     *
     *      autoStart: true to automatically start, false to not, or null (default)
     *      to make the autoStart decision based on whether or not a Debugger is
     *      installed (if there's no Debugger AND no "Run" button, then auto-start,
     *      otherwise don't)
     *
     * It is hard-coded to simulate a 6502 microprocessor, but it also contains
     * hooks into other components for communication with the outside world (eg,
     * Panel and Debugger components). This is a logical simulation, not a physical
     * simulation, and performance is important, so we take lots of liberties; any
     * idiosyncrasies of actual 6502 hardware may not be simulated here, unless it
     * affects the accuracy of the simulation when running actual 6502 software.
     *
     * @this {C1PCPU}
     * @param {Object} parmsCPU
     */
    constructor(parmsCPU)
    {
        super("C1PCPU", parmsCPU);

        this.clearRegs();
        this.flags.powered = false;
        this.flags.running = false;
        var s = WebLib.getURLParm('autoStart');
        if (s == "true" || s == "false") {
            this.fAutoStart = JSON.parse(s);
        } else {
            this.fAutoStart = parmsCPU['autoStart'];
        }

        /*
         * speed is a number from 0 to 2, where 0 means run as close to 1Mhz as possible,
         * 1 means run at the fastest safe speed, and 2 means run at maximum speed.
         *
         * It's updated via the setSpeed() function, which the Debugger's "option" command
         * uses to adjust the virtual speed (eg, "o slow", "o fast").  There may also
         * be a button present to control the speed as well (using the "setSpeed" binding).
         */
        this.SPEED_SLOW = 0;        // see this.mhzSlow
        this.SPEED_FAST = 1;        // see this.mhzFast
        this.SPEED_MAX  = 2;
        this.speed = this.SPEED_SLOW;
        this.nCyclesPerSecond = 1000000;

        /*
         * Additional values that control the overall speed of the simulated hardware,
         * and the frequency at which various updates should occur.  There are no UI
         * mechanisms for tweaking these values (yet).
         *
         * NOTE: Use of the term "second" below refers to a virtual CPU second, consisting of
         * 1 million simulated cycles.  The values below are used to divide those 1 million
         * cycles into intervals of "work", and as long we are limiting the simulation to 1Mhz
         * per ACTUAL second, then 1 virtual second == 1 real second.
         *
         * However, if the setSpeed() function is used to lift the 1Mhz limit, then 1 virtual
         * second may become much shorter, which is why you may briefly notice the video and/or
         * status (control panel) updates occurring more frequently. To compensate, calcCycles()
         * will automatically scale these values if a recent speed recalculation reveals that
         * we're running significantly faster than 1Mhz.
         */
        this.nYieldsPerSecond = 30;
        this.nVideoUpdatesPerSecond = 30;
        this.nStatusUpdatesPerSecond = 5;
        this.mhzSlow = 1;
        this.mhzFast = 8;
        this.aSpeeds = ["Slow", "Fast", "Max"];
        this.aSpeedDescs = ["(" + this.mhzSlow + "Mhz)", "(up to " + this.mhzFast + "Mhz)", "(unlimited)"];

        /*
         * Lists of notification handlers: aReadNotify and aWriteNotify are lists (ie, Arrays)
         * of 4-element sub-arrays that, in turn, contain:
         *
         *      [0]: starting address of memory range to monitor
         *      [1]: ending address of memory range to monitor (inclusive)
         *      [2]: registered component
         *      [3]: registered function to call for every read/write from/to memory in that range
         *
         * The virtual Serial Port and virtual Keyboard components use these handlers to trap
         * references to their respective memory-based "ports".  Also, the ROM component uses it
         * to "repair" any writes to its address range, since memory is one big array, and arrays
         * don't support "write-only" regions.
         *
         * NOTE: the Video component does NOT use notification handlers, because video memory
         * is written (and occasionally read) far too frequently for that to be efficient.  We
         * just let the CPU pound on it like any other chunk of memory, and then make periodic
         * calls directly to the Video component to refresh all portions of the video buffer
         * that have changed since the last refresh. See displayVideo() for more details.
         *
         * WARNING: Write notifications currently do not catch STACK writes (ie, BRK, JSR, PHA and
         * PHP instructions), because I simply haven't added the necessary code.  Besides, JSR is
         * one of the most-executed instructions, so I'd rather not slow it down. Note that this
         * STACK write limitation affects both the CPU's write-notification handlers AND the Debugger's
         * write breakpoints.
         */
        this.aReadNotify = [];
        this.aWriteNotify = [];

        /*
         * To speed up the processing of read and write notification handlers, we keep track of
         * lower and upper address bounds for each set.  These variables maintain those bounds.
         * They are initialized to values outside the accessible range of addresses.
         */
        this.addrReadLower = 0x10000;
        this.addrReadUpper = 0x0;
        this.addrWriteLower = 0x10000;
        this.addrWriteUpper = 0x0;

        /*
         * Processor status register (P) flag masks
         */
        this.BIT_PN = 0x80;     // N = sign
        this.BIT_PV = 0x40;     // V = overflow
        this.BIT_PB = 0x10;     // B = break
        this.BIT_PD = 0x08;     // D = decimal
        this.BIT_PI = 0x04;     // I = interrupt
        this.BIT_PZ = 0x02;     // Z = zero
        this.BIT_PC = 0x01;     // C = carry

     // this.VECTOR_NMI     = 0xfffa;
        this.VECTOR_RESET   = 0xfffc;
     // this.VECTOR_IRQ     = 0xfffe;

        /*
         * Popular opcodes
         */
        this.OP_JSR         = 0x20;

        /*
         * opSim operation codes
         */
        this.OP_SIM         = 0x02;
        this.SIMOP_HLT      = 0x00;
        this.SIMOP_MSG      = 0x01;

        /*
         * This 256-entry array of opcode functions is at the heart of the CPU engine: step(n).
         *
         * It might be worth trying a switch() statement instead, to see how the performance compares,
         * but I suspect that will vary quite a bit across JavaScript engines; for now, I'm putting my
         * money on array lookup.
         */
        this.aOpcodeFuncs = [
            this.opBRK,         // 0x00
            this.opORAindx,     // 0x01
            this.opSim,         // 0x02
            this.opUndefined,   // 0x03
            this.opUndefined,   // 0x04
            this.opORAzp,       // 0x05
            this.opASLzp,       // 0x06
            this.opUndefined,   // 0x07
            this.opPHP,         // 0x08
            this.opORAimm,      // 0x09
            this.opASLacc,      // 0x0a
            this.opUndefined,   // 0x0b
            this.opUndefined,   // 0x0c
            this.opORAabs,      // 0x0d
            this.opASLabs,      // 0x0e
            this.opUndefined,   // 0x0f
            this.opBPL,         // 0x10
            this.opORAindy,     // 0x11
            this.opUndefined,   // 0x12
            this.opUndefined,   // 0x13
            this.opUndefined,   // 0x14
            this.opORAzpx,      // 0x15
            this.opASLzpx,      // 0x16
            this.opUndefined,   // 0x17
            this.opCLC,         // 0x18
            this.opORAabsy,     // 0x19
            this.opUndefined,   // 0x1a
            this.opUndefined,   // 0x1b
            this.opUndefined,   // 0x1c
            this.opORAabsx,     // 0x1d
            this.opASLabsx,     // 0x1e
            this.opUndefined,   // 0x1f
            this.opJSRabs,      // 0x20
            this.opANDindx,     // 0x21
            this.opUndefined,   // 0x22
            this.opUndefined,   // 0x23
            this.opBITzp,       // 0x24
            this.opANDzp,       // 0x25
            this.opROLzp,       // 0x26
            this.opUndefined,   // 0x27
            this.opPLP,         // 0x28
            this.opANDimm,      // 0x29
            this.opROLacc,      // 0x2a
            this.opUndefined,   // 0x2b
            this.opBITabs,      // 0x2c
            this.opANDabs,      // 0x2d
            this.opROLabs,      // 0x2e
            this.opUndefined,   // 0x2f
            this.opBMI,         // 0x30
            this.opANDindy,     // 0x31
            this.opUndefined,   // 0x32
            this.opUndefined,   // 0x33
            this.opUndefined,   // 0x34
            this.opANDzpx,      // 0x35
            this.opROLzpx,      // 0x36
            this.opUndefined,   // 0x37
            this.opSEC,         // 0x38
            this.opANDabsy,     // 0x39
            this.opUndefined,   // 0x3a
            this.opUndefined,   // 0x3b
            this.opUndefined,   // 0x3c
            this.opANDabsx,     // 0x3d
            this.opROLabsx,     // 0x3e
            this.opUndefined,   // 0x3f
            this.opRTI,         // 0x40
            this.opEORindx,     // 0x41
            this.opUndefined,   // 0x42
            this.opUndefined,   // 0x43
            this.opUndefined,   // 0x44
            this.opEORzp,       // 0x45
            this.opLSRzp,       // 0x46
            this.opUndefined,   // 0x47
            this.opPHA,         // 0x48
            this.opEORimm,      // 0x49
            this.opLSRacc,      // 0x4a
            this.opUndefined,   // 0x4b
            this.opJMPimm16,    // 0x4c
            this.opEORabs,      // 0x4d
            this.opLSRabs,      // 0x4e
            this.opUndefined,   // 0x4f
            this.opBVC,         // 0x50
            this.opEORindy,     // 0x51
            this.opUndefined,   // 0x52
            this.opUndefined,   // 0x53
            this.opUndefined,   // 0x54
            this.opEORzpx,      // 0x55
            this.opLSRzpx,      // 0x56
            this.opUndefined,   // 0x57
            this.opCLI,         // 0x58
            this.opEORabsy,     // 0x59
            this.opUndefined,   // 0x5a
            this.opUndefined,   // 0x5b
            this.opUndefined,   // 0x5c
            this.opEORabsx,     // 0x5d
            this.opLSRabsx,     // 0x5e
            this.opUndefined,   // 0x5f
            this.opRTS,         // 0x60
            this.opADCindx,     // 0x61
            this.opUndefined,   // 0x62
            this.opUndefined,   // 0x63
            this.opUndefined,   // 0x64
            this.opADCzp,       // 0x65
            this.opRORzp,       // 0x66
            this.opUndefined,   // 0x67
            this.opPLA,         // 0x68
            this.opADCimm,      // 0x69
            this.opRORacc,      // 0x6a
            this.opUndefined,   // 0x6b
            this.opJMPabs16,    // 0x6c
            this.opADCabs,      // 0x6d
            this.opRORabs,      // 0x6e
            this.opUndefined,   // 0x6f
            this.opBVS,         // 0x70
            this.opADCindy,     // 0x71
            this.opUndefined,   // 0x72
            this.opUndefined,   // 0x73
            this.opUndefined,   // 0x74
            this.opADCzpx,      // 0x75
            this.opRORzpx,      // 0x76
            this.opUndefined,   // 0x77
            this.opSEI,         // 0x78
            this.opADCabsy,     // 0x79
            this.opUndefined,   // 0x7a
            this.opUndefined,   // 0x7b
            this.opUndefined,   // 0x7c
            this.opADCabsx,     // 0x7d
            this.opRORabsx,     // 0x7e
            this.opUndefined,   // 0x7f
            this.opUndefined,   // 0x80
            this.opSTAindx,     // 0x81
            this.opUndefined,   // 0x82
            this.opUndefined,   // 0x83
            this.opSTYzp,       // 0x84
            this.opSTAzp,       // 0x85
            this.opSTXzp,       // 0x86
            this.opUndefined,   // 0x87
            this.opDEY,         // 0x88
            this.opUndefined,   // 0x89
            this.opTXA,         // 0x8a
            this.opUndefined,   // 0x8b
            this.opSTYabs,      // 0x8c
            this.opSTAabs,      // 0x8d
            this.opSTXabs,      // 0x8e
            this.opUndefined,   // 0x8f
            this.opBCC,         // 0x90
            this.opSTAindy,     // 0x91
            this.opUndefined,   // 0x92
            this.opUndefined,   // 0x93
            this.opSTYzpx,      // 0x94
            this.opSTAzpx,      // 0x95
            this.opSTXzpy,      // 0x96
            this.opUndefined,   // 0x97
            this.opTYA,         // 0x98
            this.opSTAabsy,     // 0x99
            this.opTXS,         // 0x9a
            this.opUndefined,   // 0x9b
            this.opUndefined,   // 0x9c
            this.opSTAabsx,     // 0x9d
            this.opUndefined,   // 0x9e
            this.opUndefined,   // 0x9f
            this.opLDYimm,      // 0xa0
            this.opLDAindx,     // 0xa1
            this.opLDXimm,      // 0xa2
            this.opUndefined,   // 0xa3
            this.opLDYzp,       // 0xa4
            this.opLDAzp,       // 0xa5
            this.opLDXzp,       // 0xa6
            this.opUndefined,   // 0xa7
            this.opTAY,         // 0xa8
            this.opLDAimm,      // 0xa9
            this.opTAX,         // 0xaa
            this.opUndefined,   // 0xab
            this.opLDYabs,      // 0xac
            this.opLDAabs,      // 0xad
            this.opLDXabs,      // 0xae
            this.opUndefined,   // 0xaf
            this.opBCS,         // 0xb0
            this.opLDAindy,     // 0xb1
            this.opUndefined,   // 0xb2
            this.opUndefined,   // 0xb3
            this.opLDYzpx,      // 0xb4
            this.opLDAzpx,      // 0xb5
            this.opLDXzpy,      // 0xb6
            this.opUndefined,   // 0xb7
            this.opCLV,         // 0xb8
            this.opLDAabsy,     // 0xb9
            this.opTSX,         // 0xba
            this.opUndefined,   // 0xbb
            this.opLDYabsx,     // 0xbc
            this.opLDAabsx,     // 0xbd
            this.opLDXabsy,     // 0xbe
            this.opUndefined,   // 0xbf
            this.opCPYimm,      // 0xc0
            this.opCMPindx,     // 0xc1
            this.opUndefined,   // 0xc2
            this.opUndefined,   // 0xc3
            this.opCPYzp,       // 0xc4
            this.opCMPzp,       // 0xc5
            this.opDECzp,       // 0xc6
            this.opUndefined,   // 0xc7
            this.opINY,         // 0xc8
            this.opCMPimm,      // 0xc9
            this.opDEX,         // 0xca
            this.opUndefined,   // 0xcb
            this.opCPYabs,      // 0xcc
            this.opCMPabs,      // 0xcd
            this.opDECabs,      // 0xce
            this.opUndefined,   // 0xcf
            this.opBNE,         // 0xd0
            this.opCMPindy,     // 0xd1
            this.opUndefined,   // 0xd2
            this.opUndefined,   // 0xd3
            this.opUndefined,   // 0xd4
            this.opCMPzpx,      // 0xd5
            this.opDECzpx,      // 0xd6
            this.opUndefined,   // 0xd7
            this.opCLD,         // 0xd8
            this.opCMPabsy,     // 0xd9
            this.opUndefined,   // 0xda
            this.opUndefined,   // 0xdb
            this.opUndefined,   // 0xdc
            this.opCMPabsx,     // 0xdd
            this.opDECabsx,     // 0xde
            this.opUndefined,   // 0xdf
            this.opCPXimm,      // 0xe0
            this.opSBCindx,     // 0xe1
            this.opUndefined,   // 0xe2
            this.opUndefined,   // 0xe3
            this.opCPXzp,       // 0xe4
            this.opSBCzp,       // 0xe5
            this.opINCzp,       // 0xe6
            this.opUndefined,   // 0xe7
            this.opINX,         // 0xe8
            this.opSBCimm,      // 0xe9
            this.opNOP,         // 0xea
            this.opUndefined,   // 0xeb
            this.opCPXabs,      // 0xec
            this.opSBCabs,      // 0xed
            this.opINCabs,      // 0xee
            this.opUndefined,   // 0xef
            this.opBEQ,         // 0xf0
            this.opSBCindy,     // 0xf1
            this.opUndefined,   // 0xf2
            this.opUndefined,   // 0xf3
            this.opUndefined,   // 0xf4
            this.opSBCzpx,      // 0xf5
            this.opINCzpx,      // 0xf6
            this.opUndefined,   // 0xf7
            this.opSED,         // 0xf8
            this.opSBCabsy,     // 0xf9
            this.opUndefined,   // 0xfa
            this.opUndefined,   // 0xfb
            this.opUndefined,   // 0xfc
            this.opSBCabsx,     // 0xfd
            this.opINCabsx,     // 0xfe
            this.opUndefined    // 0xff
        ];
        /*
         * This is a 256-byte array of cycle counts, indexed by opcode.
         * Obviously, true cycle counts are a bit more complicated, but this
         * gets us most of the way to an authentic-feeling simulation.
         *
         * NOTE: BCD functions now account for an extra cycle, and branches
         * now account for an extra cycle whenever the branch is taken.
         * However, branches still don't add an extra cycle whenever the branch
         * crosses a page boundary.
         *
         * The other gaping hole in our cycle-counting is accounting for all
         * page-boundary penalties.  Ideally, that's just a matter of checking
         * MODE_ABSX, MODE_ABSY, and MODE_INDY instructions for EA straddling
         * a page boundary--but is it more complicated than that? What if the
         * criteria is not the final EA, but whether the pre-indexing and
         * post-indexing EAs are in different pages? I also need to confirm
         * whether any other situations merit checking (eg, when a 2 or 3-byte
         * instruction straddles a page boundary).
         */
        this.aOpcodeCycles = [
            7,6,0,0,0,3,5,0,3,2,2,0,0,4,6,0,
            2,5,0,0,0,4,6,0,2,4,0,0,0,4,7,0,
            3,6,0,0,3,3,5,0,4,2,2,0,4,4,6,0,
            2,5,0,0,0,4,6,0,2,4,0,0,0,4,7,0,
            6,6,0,0,0,3,5,0,3,2,2,0,3,4,6,0,
            2,5,0,0,0,4,6,0,2,4,0,0,0,4,7,0,
            6,6,0,0,0,3,5,0,4,2,2,0,5,4,6,0,
            2,5,0,0,0,4,6,0,2,4,0,0,0,4,7,0,
            0,6,0,0,3,3,3,0,2,0,2,0,4,4,4,0,
            2,5,0,0,4,4,4,0,2,4,2,0,0,4,0,0,
            2,6,2,0,3,3,3,0,2,2,2,0,4,4,4,0,
            2,5,0,0,4,4,4,0,2,4,2,0,4,4,4,0,
            2,6,0,0,3,3,5,0,2,2,2,0,4,4,6,0,
            2,5,0,0,0,4,6,0,2,4,0,0,0,4,7,0,
            2,6,0,0,3,3,5,0,2,2,2,0,4,4,6,0,
            2,5,0,0,0,4,6,0,2,4,0,0,0,4,7,0
        ];
    }

    /**
     * reset(fPowerOn)
     *
     * Note that we follow the same model here as other selected reset() handlers; for example, Video.reset()
     * accepts an fPowerOn parameter to govern what's initially displayed on the video screen.
     *
     * @this {C1PCPU}
     * @param {boolean|undefined} fPowerOn is true for the initial reset, so that if the Debugger isn't
     * loaded, we can elect to start running.  Under any other circumstances (such as whenever Computer.reset()
     * is called), "auto-run" is not a good idea, and can actually introduce bugs (eg, multiple run() timers).
     */
    reset(fPowerOn)
    {
        if (this.flags.running) {
            this.halt();
        }
        this.clearRegs();
        this.regPC = this.getWord(this.VECTOR_RESET);
        this.clearError();              // clear any fatal error/exception
        /*
         * If there's a Debugger, notify Debugger.reset(); otherwise, start running
         */
        if (DEBUGGER && this.dbg) {
            this.dbg.reset();
        }
        else if (fPowerOn) {
            if (this.fAutoStart === true || this.fAutoStart === null && (!DEBUGGER || !this.dbg) && this.bindings["run"] === undefined) {
                this.run();             // start running automatically on the initial power-up, assuming there's no Debugger
            }
        }
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * @this {C1PCPU}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "run")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        var fBound = false;
        switch(sBinding) {
            case "run":
                this.bindings[sBinding] = control;
                control.onclick = function(cpu) {
                    return function() {
                        if (!cpu.flags.running) {
                            cpu.run();
                        } else {
                            cpu.halt();
                        }
                    };
                }(this);
                fBound = true;
                break;
            case "A": case "X": case "Y": case "S": case "PC":
            case "C": case "Z": case "I": case "D": case "B": case "V": case "N":
            case "speed":
                this.bindings[sBinding] = control;
                fBound = true;
                break;
            case "setSpeed":
                this.bindings[sBinding] = control;
                control.onclick = function(cpu) {
                    return function() {
                        var speed = (cpu.speed >= cpu.SPEED_MAX? cpu.SPEED_SLOW : cpu.speed+1);
                        cpu.setSpeed(speed, true);
                    };
                }(this);
                fBound = true;
                break;
            default:
                break;
        }
        return fBound;
    }

    /**
     * setBuffer(abMemory, start, end)
     *
     * @this {C1PCPU}
     * @param {Array} abMemory
     * @param {number} start
     * @param {number} end
     */
    setBuffer(abMemory, start, end)
    {
        this.abMem = abMemory;
        this.offMem = start;
        this.cbMem = end - start + 1;
        this.offLimit = this.offMem + this.cbMem;
        if (this.offMem) {
            /*
             * It's not that we couldn't support an address buffer that starts at a non-zero offset;
             * we simply have lots of code (eg, all the opcode handlers) that assumes offMem is zero,
             * and therefore that abMem can be indexed by any of the CPU registers without adding offMem.
             * All that code would have to be changed (at a slight performance penalty) if we couldn't
             * make this assumption.
             */
            Component.error("unsupported CPU address buffer offset (" + this.offMem + ")");
            return;
        }
        this.setReady();
    }

    /**
     * setPower(fOn, cmp)
     *
     * @this {C1PCPU}
     * @param {boolean} fOn
     * @param {C1PComputer} cmp
     */
    setPower(fOn, cmp)
    {
        if (fOn && !this.flags.powered) {
            this.cmp = cmp;
            /*
             * Attach the Debugger, if any, to the CPU, so that the CPU can periodically
             * notify it as needed (when the CPU starts, stops, and executes instructions)
             */
            if (DEBUGGER) {
                this.dbg = cmp.getComponentByType("debugger");
                if (this.dbg) {
                    this.dbg.init();
                }
            }
            /*
             * Attach the Video device to the CPU, so that the CPU can periodically update
             * the video display via displayVideo(), as cycles permit.
             */
            var video = cmp.getComponentByType("video");
            if (video) {
                this.displayVideo = function(v) {
                    return function() {
                        v.updateScreen();
                    };
                }(video);
                this.setFocus = function(v) {
                    return function() {
                        v.setFocus();
                    };
                }(video);
            }
            this.flags.powered = true;
            this.reset(true);
            this.update();
        }
    }

    /**
     * addReadNotify(start, end, component, fn)
     *
     * Add a memory read-notification handler to the CPU's list of such handlers.
     *
     * @this {C1PCPU}
     * @param {number} start address
     * @param {number} end address
     * @param {Component} component
     * @param {function(number,number)} fn is called with the EA and PC values at the time of the write
     */
    addReadNotify(start, end, component, fn)
    {
        if (this.findNotify(this.aReadNotify, start, end, component, fn) < 0) {
            if (this.addrReadLower > start) {
                this.addrReadLower = start;
            }
            if (this.addrReadUpper < end) {
                this.addrReadUpper = end;
            }
            this.aReadNotify.push([start, end, component, fn]);
            if (DEBUG) {
                this.printf(MESSAGE.LOG, "addReadNotify(%#06x,%#06x,%s): new read range: %#06x-%#06x\n", start, end, component.id, this.addrReadLower, this.addrReadUpper);
            }
        }
    }

    /**
     * checkReadNotify(addrRead, addrFrom)
     *
     * @this {C1PCPU}
     * @param {number} addrRead is the EA value at the time of the read
     * @param {number} [addrFrom] is the PC value at the time of the read;
     * this will be undefined for read notifications triggered by assorted Debugger commands,
     * so all handlers should be prepared for that as well.
     */
    checkReadNotify(addrRead, addrFrom)
    {
        for (var i=0; i < this.aReadNotify.length; i++) {
            if (addrRead >= this.aReadNotify[i][0] && addrRead <= this.aReadNotify[i][1]) {
                this.aReadNotify[i][3].call(this.aReadNotify[i][2], addrRead, addrFrom);
            }
        }
    }

    /**
     * removeReadNotify(start, end, component, fn)
     *
     * Remove a memory read-notification handler from the CPU's list of such handlers.
     *
     * @this {C1PCPU}
     * @param {number} start address
     * @param {number} end address
     * @param {Component} component
     * @param {function(number,number)} fn of previously added handler
     * @returns {boolean} true if remove was successful, false if the handler was not found
     */
    removeReadNotify(start, end, component, fn)
    {
        var aBounds = this.removeNotify(this.aReadNotify, start, end, component, fn);
        if (aBounds.length == 4) {
            this.addrReadLower = aBounds[2];
            this.addrReadUpper = aBounds[3];
            if (DEBUG) {
                this.printf(MESSAGE.LOG, "removeReadNotify(%#06x,%#06x,%s): new read range: %#06x-%#06x\n", start, end, component.id, this.addrReadLower, this.addrReadUpper);
            }
            return true;
        }
        return false;
    }

    /**
     * addWriteNotify(start, end, component, fn)
     *
     * Add a memory write-notification handler to the CPU's list of such handlers.
     *
     * @this {C1PCPU}
     * @param {number} start address
     * @param {number} end address
     * @param {Component} component
     * @param {function(number,number)} fn is called with the EA and PC values at the time of the write
     */
    addWriteNotify(start, end, component, fn)
    {
        if (this.findNotify(this.aWriteNotify, start, end, component, fn) < 0) {
            if (this.addrWriteLower > start) {
                this.addrWriteLower = start;
            }
            if (this.addrWriteUpper < end) {
                this.addrWriteUpper = end;
            }
            this.aWriteNotify.push([start, end, component, fn]);
            if (DEBUG) {
                this.printf(MESSAGE.LOG, "addWriteNotify(%#06x,%#06x,%s): new write range: %#06x-%#06x\n", start, end, component.id, this.addrWriteLower, this.addrWriteUpper);
            }
        }
    }

    /**
     * checkWriteNotify(addrWrite, addrFrom)
     *
     * @this {C1PCPU}
     * @param {number} addrWrite is the EA value at the time of the write
     * @param {number} [addrFrom] is the PC value at the time of the write;
     * this will be undefined for write notifications triggered by assorted Debugger commands,
     * so all handlers should be prepared for that as well.
     */
    checkWriteNotify(addrWrite, addrFrom)
    {
        for (var i=0; i < this.aWriteNotify.length; i++) {
            if (addrWrite >= this.aWriteNotify[i][0] && addrWrite <= this.aWriteNotify[i][1]) {
                this.aWriteNotify[i][3].call(this.aWriteNotify[i][2], addrWrite, addrFrom);
            }
        }
    }

    /**
     * removeWriteNotify(start, end, component, fn)
     *
     * Remove a memory write-notification handler from the CPU's list of such handlers.
     *
     * @this {C1PCPU}
     * @param {number} start address
     * @param {number} end address
     * @param {Component} component
     * @param {function(number,number)} fn of previously added handler
     * @returns {boolean} true if remove was successful, false if the handler was not found
     */
    removeWriteNotify(start, end, component, fn)
    {
        var aBounds = this.removeNotify(this.aWriteNotify, start, end, component, fn);
        if (aBounds.length == 4) {
            this.addrWriteLower = aBounds[2];
            this.addrWriteUpper = aBounds[3];
            if (DEBUG) {
                this.printf(MESSAGE.LOG, "removeWriteNotify(%#06x,%#06x,%s): new write range: %#06x-%#06x\n", start, end, component.id, this.addrWriteLower, this.addrWriteUpper);
            }
            return true;
        }
        return false;
    }

    /**
     * findNotify(aNotify, start, end, component, fn)
     *
     * Find a memory notification handler from the given array of handlers
     *
     * @this {C1PCPU}
     * @param {Array} aNotify array of handlers
     * @param {number} start address
     * @param {number} end address
     * @param {Component} component
     * @param {function(number,number)} fn of previously added handler
     * @returns {number} index of the matching handler, or -1 if not found
     */
    findNotify(aNotify, start, end, component, fn)
    {
        for (var i=0; i < aNotify.length; i++) {
            if (aNotify[i][0] == start && aNotify[i][1] == end && aNotify[i][2] == component && aNotify[i][3] == fn) {
                return i;
            }
        }
        return -1;
    }

    /**
     * removeNotify(aNotify, start, end, component, fn)
     *
     * Remove a memory notification handler from the given array of handlers
     *
     * @this {C1PCPU}
     * @param {Array} aNotify array of handlers
     * @param {number} start address
     * @param {number} end address
     * @param {Component} component
     * @param {function(number,number)} fn of previously added handler
     * @returns {Array} bounds of previous handler ([0] and [1]) and new lower and upper address bounds ([2] and [3])
     */
    removeNotify(aNotify, start, end, component, fn)
    {
        var aBounds = [];
        var i = this.findNotify(aNotify, start, end, component, fn);
        if (i >= 0) {
            aBounds.push(aNotify[i][0]);
            aBounds.push(aNotify[i][1]);
            aNotify.splice(i, 1);
            var addrLower = 0x10000, addrUpper = 0x0;
            for (i=0; i < aNotify.length; i++) {
                if (addrLower > aNotify[i][0]) {
                    addrLower = aNotify[i][0];
                }
                if (addrUpper < aNotify[i][1]) {
                    addrUpper = aNotify[i][1];
                }
            }
            aBounds.push(addrLower);
            aBounds.push(addrUpper);
        }
        return aBounds;
    }

    /**
     * setSpeed(speed, fOnClick)
     *
     * @this {C1PCPU}
     * @param {number} [speed] is one of: 0 (slow), 1 (fast) or 2 (maximum)
     * @param {boolean} [fOnClick] is true if called from a click handler that might have stolen focus
     * @desc Whenever the speed is changed, the running cycle count and corresponding start time must be reset,
     * so that the next effective speed calculation obtains sensible results.  In fact, when run() initially calls
     * setSpeed() with no parameters, that's all this function does (it doesn't change the current speed setting).
     */
    setSpeed(speed, fOnClick)
    {
        if (speed !== undefined) {
            this.speed = speed;
            if (this.bindings["setSpeed"]) {
                this.bindings["setSpeed"].innerHTML = this.aSpeeds[speed >= 2? 0 : speed+1];
            }
            this.printf("running at %s speed %s\n", this.aSpeeds[speed].toLowerCase(), this.aSpeedDescs[speed]);
            if (fOnClick) this.setFocus();
        }
        this.nRunCycles = 0;
        this.msRunStart = Component.getTime();
        this.calcCycles();
    }

    /**
     * calcSpeed(nCycles, msElapsed)
     *
     * @this {C1PCPU}
     * @param {number} nCycles
     * @param {number} msElapsed
     */
    calcSpeed(nCycles, msElapsed)
    {
        if (msElapsed) {
            this.mhz = Math.round(nCycles / ( msElapsed * 100)) / 10;
            if (msElapsed >= 86400000) {
                this.setSpeed();        // reset all our counters once per day so that we never have to worry about overflow
            }
        }
    }

    /**
     * displayVideo()
     *
     * @this {C1PCPU}
     */
    displayVideo()
    {
        // Nothing to do until setPower() installs a replacement function
    }

    /**
     * setFocus()
     *
     * @this {C1PCPU}
     */
    setFocus()
    {
        // Nothing to do until setPower() installs a replacement function
    }

    /**
     * displayReg(sReg, vReg, len)
     *
     * @this {C1PCPU}
     * @param {string} sReg
     * @param {number} vReg
     * @param {number} [len]
     */
    displayReg(sReg, vReg, len)
    {
        if (this.bindings[sReg] !== undefined) {
            if (len === undefined) len = 1;
            var s = "0000" + vReg.toString(16);
            this.bindings[sReg].innerHTML = s.slice(s.length-len).toUpperCase();
        }
    }

    /**
     * displayStatus()
     *
     * @this {C1PCPU}
     */
    displayStatus()
    {
        this.displayReg("A", this.regA, 2);
        this.displayReg("X", this.regX, 2);
        this.displayReg("Y", this.regY, 2);
        var regP = this.getRegP();
        this.displayReg("C", (regP & this.BIT_PC)? 1 : 0);
        this.displayReg("Z", (regP & this.BIT_PZ)? 1 : 0);
        this.displayReg("I", (regP & this.BIT_PI)? 1 : 0);
        this.displayReg("D", (regP & this.BIT_PD)? 1 : 0);
        this.displayReg("B", (regP & this.BIT_PB)? 1 : 0);
        this.displayReg("V", (regP & this.BIT_PV)? 1 : 0);
        this.displayReg("N", (regP & this.BIT_PN)? 1 : 0);
        this.displayReg("S", this.regS, 4);
        this.displayReg("PC", this.regPC, 4);
        if (this.bindings["speed"] && this.mhz) {
            this.bindings["speed"].innerHTML = this.mhz.toFixed(1) + "Mhz";
        }
    }

    /**
     * isRunning()
     *
     * @this {C1PCPU}
     * @returns {boolean}
     */
    isRunning()
    {
        return this.flags.running;
    }

    /**
     * calcCycles(fRecalc)
     *
     * Calculate the number of cycles to process for each "burst" of CPU activity.  The size of a burst
     * is driven by the following values:
     *
     *      nYieldsPerSecond (eg, 30)
     *      nVideoUpdatesPerSecond (eg, 30)
     *      nStatusUpdatesPerSecond (eg, 5)
     *
     * The largest of the above values forces the size of the burst to its smallest value.  Let's say that
     * largest value is 30.  Assuming nCyclesPerSecond is 1,000,000, that results in bursts of 33,333 cycles.
     *
     * At the end of each burst, we subtract burst cycles from yield, video, and status cycle "threshold"
     * counters. Whenever the "next yield" cycle counter goes to (or below) zero, we compare elapsed time
     * to the time we expected the virtual hardware to take (eg, 1000ms/50 or 20ms), and if we still have time
     * remaining, we sleep the remaining time (or 0ms if there's no remaining time), and then restart run().
     *
     * Similarly, whenever the "next video update" cycle counter goes to (or below) zero, we call displayVideo(),
     * and whenever the "next status update" cycle counter goes to (or below) zero, we call displayStatus().
     *
     * @this {C1PCPU}
     * @param {boolean} [fRecalc] is true if the caller wants to recalculate thresholds based on the
     * most recent mhz calculation (see calcSpeed)
     */
    calcCycles(fRecalc)
    {
        /*
         * Calculate the most cycles we're allowed to execute in a single "burst"
         */
        var nMostUpdatesPerSecond = this.nYieldsPerSecond;
        if (nMostUpdatesPerSecond < this.nVideoUpdatesPerSecond) nMostUpdatesPerSecond = this.nVideoUpdatesPerSecond;
        if (nMostUpdatesPerSecond < this.nStatusUpdatesPerSecond) nMostUpdatesPerSecond = this.nStatusUpdatesPerSecond;

        /*
         * Calculate "per" values for the yield, video update, and status update cycle counters
         */
        var vMultiplier = 1;
        if (fRecalc && this.speed > this.SPEED_SLOW && this.mhz) vMultiplier = this.mhz;
        if (vMultiplier > this.mhzFast && this.speed < this.SPEED_MAX) vMultiplier = this.mhzFast;

        this.msPerYield = Math.round(1000/this.nYieldsPerSecond);
        this.nCyclesPerBurst = Math.floor(this.nCyclesPerSecond / nMostUpdatesPerSecond * vMultiplier);
        this.nCyclesPerYield = Math.floor(this.nCyclesPerSecond / this.nYieldsPerSecond * vMultiplier);
        this.nCyclesPerVideoUpdate = Math.floor(this.nCyclesPerSecond / this.nVideoUpdatesPerSecond * vMultiplier);
        this.nCyclesPerStatusUpdate = Math.floor(this.nCyclesPerSecond / this.nStatusUpdatesPerSecond * vMultiplier);

        /*
         * And initialize "next" yield, video update, and status update cycle "threshold" counters to those "per" values
         */
        if (!fRecalc) {
            this.nCyclesNextYield = this.nCyclesPerYield;
            this.nCyclesNextVideoUpdate = this.nCyclesPerVideoUpdate;
            this.nCyclesNextStatusUpdate = this.nCyclesPerStatusUpdate;
        }
        this.nRecalcCycles = 0;
    }

    /**
     * calcStartTime()
     *
     * @this {C1PCPU}
     */
    calcStartTime()
    {
        if (this.nRecalcCycles >= this.nCyclesPerSecond) {
            this.calcCycles(true);
        }
        this.nCyclesThisRun = 0;
        this.msStartThisRun = Component.getTime();
    }

    /**
     * calcRemainingTime()
     *
     * @this {C1PCPU}
     * @returns {number}
     */
    calcRemainingTime()
    {
        var msCurrent = Component.getTime();
        var msYield = this.msPerYield;

        if (this.nCyclesThisRun) {
            /*
             * Normally, we would assume we executed a full quota of work over msPerYield, but since the CPU
             * now has the option of calling yieldCPU(), that might not be true.  If nCyclesThisRun is correct, then
             * the ratio of nCyclesThisRun/nCyclesPerYield should represent the percentage of work we performed,
             * and so applying that percentage to msPerYield should give us a better estimate of work vs. time.
             */
            msYield = Math.round(msYield * this.nCyclesThisRun / this.nCyclesPerYield);
            // if (msYield < this.msPerYield) this.printf("scaling msPerYield (%d) to msYield (%d)\n", this.msPerYield, msYield);
        }

        var msElapsedThisRun = msCurrent - this.msStartThisRun;
        var msRemainsThisRun = msYield - msElapsedThisRun;

        /*
         * We could pass only "this run" results to calcSpeed():
         *
         *      nCycles = this.nCyclesThisRun;
         *      msElapsed = msElapsedThisRun;
         *
         * but it seems preferable to use longer time periods and hopefully get a more accurate speed.
         *
         * Also, if msRemainsThisRun >= 0 && this.speed == this.SPEED_SLOW, we could pass these results instead:
         *
         *      nCycles = this.nCyclesThisRun;
         *      msElapsed = this.msPerYield;
         *
         * to insure that we display a smooth, constant 1Mhz.  But the displayed speed seems pretty steady as-is.
         */
        var nCycles = this.nRunCycles;
        var msElapsed = msCurrent - this.msRunStart;

        if (DEBUG && msRemainsThisRun < 0 && this.speed == this.SPEED_FAST) {
            this.printf("warning: updates @%dms (prefer %dms)\n", msElapsedThisRun, Math.round(msYield));
        }

        this.calcSpeed(nCycles, msElapsed);

        if (msRemainsThisRun < 0) {
            /*
             * This is an easy case: it's taking more than 1 second to simulate 1Mhz,
             * so all we can do is yield for as little time as possible (ie, 0ms) and hope the
             * simulation is at least usable.
             */
            msRemainsThisRun = 0;
        }
        else {
            if (this.speed == this.SPEED_FAST) {
                /*
                 * This case requires us to artificially limit the CPU speed.  calcSpeed()
                 * already cranks up the number of cycles we process per burst, in proportion
                 * to the effective mhz, so there isn't much to do here except sleep for
                 * whatever time is in msRemainsThisRun.
                 *
                 * The artificial limit was chosen largely because it's not currently possible
                 * for the keyboard component to inject keys fast enough to avoid duplicate
                 * keystrokes at higher speeds. Perhaps with future improvements to the keyboard
                 * component, this limit can be lifted.
                 */
                if (this.mhz <= this.mhzFast) {
                    msRemainsThisRun = 0;
                }
            }
            else
            if (this.speed == this.SPEED_MAX) {
                /*
                 * This is also an easy case: yield for as little time as possible (ie, 0ms), to execute
                 * the maximum number of cycles per second.
                 */
                msRemainsThisRun = 0;
            }
        }

        /*
         * Last but not least, update nRecalcCycles, so that when run() starts up again and calls calcStartTime(),
         * it'll be ready to decide if calcCycles() should be called again.
         */
        this.nRecalcCycles += this.nCyclesThisRun;

        return msRemainsThisRun;
    }

    /**
     * run()
     *
     * @this {C1PCPU}
     */
    run()
    {
        if (!this.setBusy(true)) {
            this.update();
            if (this.cmp) this.cmp.stop(this.msRunStart, this.nRunCycles);
            return;
        }
        if (!this.flags.running) {
            /*
             *  setSpeed() without a speed parameter leaves the selected speed in place, but also resets the
             *  cycle counter and timestamp for the current series of run() calls, calculates the maximum number
             *  of cycles for each burst based on the last known effective CPU speed, and resets the nRecalcCycles
             *  threshold counter.
             */
            this.setSpeed();
            if (this.cmp) this.cmp.start();
            this.flags.running = true;
            if (this.bindings["run"]) this.bindings["run"].innerHTML = "Halt";
            this.setFocus();
        }
        /*
         *  calcStartTime() initializes the cycle counter and timestamp for this run() invocation, and optionally
         *  recalculates the the maximum number of cycles for each burst if the nRecalcCycles threshold has been reached.
         */
        this.calcStartTime();
        try {
            do {
                /*
                 * NOTE: nCyclesPerBurst is how many cycles we WANT to run each iteration of step(), but that just
                 * initializes nBurstCycles, which (after subtracting any remaining nStepCycles) is how many cycles
                 * we ACTUALLY ran.
                 */
                this.step(this.nCyclesPerBurst);
                /*
                 * nCyclesThisRun is increased by nBurstCycles, plus any additional cycles step() processed after
                 * its cycle count had reached zero (and conversely, minus any cycles that it still had yet to process);
                 * ditto for nRunCycles, which is the cycle count since the CPU first started running.
                 */
                var nCycles = this.nBurstCycles - this.nStepCycles;
                this.nRunCycles += nCycles;
                this.nCyclesThisRun += nCycles;
                /*
                 * These step() cycle variables must be zeroed now, so that getCycles() always returns a valid cycle count.
                 */
                this.nBurstCycles = this.nStepCycles = 0;

                this.nCyclesNextVideoUpdate -= this.nCyclesPerBurst;
                if (this.nCyclesNextVideoUpdate <= 0) {
                    this.nCyclesNextVideoUpdate += this.nCyclesPerVideoUpdate;
                    this.displayVideo();
                }

                this.nCyclesNextStatusUpdate -= this.nCyclesPerBurst;
                if (this.nCyclesNextStatusUpdate <= 0) {
                    this.nCyclesNextStatusUpdate += this.nCyclesPerStatusUpdate;
                    this.displayStatus();
                }

                this.nCyclesNextYield -= this.nCyclesPerBurst;
                if (this.nCyclesNextYield <= 0) {
                    this.nCyclesNextYield += this.nCyclesPerYield;
                    break;
                }
            } while (this.flags.running);
        }
        catch (e) {
            this.halt();
            this.update();
            this.setBusy(false);
            this.setError(e.stack || e.message);
            return;
        }
        setTimeout(function(cpu) { return function() {cpu.run();}; }(this), this.calcRemainingTime());
    }

    /**
     * step(nMinCycles)
     *
     * @this {C1PCPU}
     * @param {number} nMinCycles (0 implies a single-step, and therefore breakpoints should be ignored)
     * @returns {boolean|undefined} undefined indicates that the last instruction was not executed (eg,
     * we hit an execution breakpoint), false implies a post-execution condition was triggered (eg, a write
     * breakpoint), and true indicates successful completion of all requested cycles.
     */
    step(nMinCycles)
    {
        /*
         * The Debugger uses fCompleted to determine if the instruction completed (true) or was interrupted
         * by a breakpoint or some other exceptional condition (false). NOTE: this does NOT include thrown
         * exceptions, which step() expects the caller to catch using its own exception handler.
         *
         * The CPU relies on the use of halt() rather than fCompleted, because the CPU never single-steps
         * (ie, nMinCycles is always some large number), whereas the Debugger does.  And conversely, when the
         * Debugger is single-stepping (even when performing multiple single-steps), fRunning is never set,
         * so halt() would have no effect as far as the Debugger is concerned.
         */
        var fCompleted = true;

        /*
         * fDebugCheck is true if we need to "check" every instruction with the Debugger.  The Debugger will
         * call cpu.step(n) with n == 0 if it's executing only ONE instruction (ie, the user just clicked the
         * "Step" button, or they've issued a "t" or "t1" command).  Otherwise, it will call with n == 1
         * (ie, the user is holding the "Step" button, or they've issued a "t#" command where # > 1).
         *
         * In the first case, we want to ignore (ie, "step over") any breakpoints; otherwise, the Debugger has
         * no easy way of moving past a breakpoint (other than clearing it, of course).  In the second case,
         * we want to honor any breakpoints, which in turn will set fCompleted to false and signal the Debugger
         * to stop.
         *
         * Note that as a practical matter, both 0 and 1 are otherwise treated the same when it comes to the
         * minimum number of cycles to run: one and only one instruction will execute, since every instruction
         * consumes at least 1 cycle.
         */
        this.regEA = this.regEAWrite = -1;
        var fDebugCheck = (DEBUGGER && nMinCycles && this.dbg && this.dbg.checksEnabled());

        /*
         * We move the minimum cycle count to nStepCycles (the number of cycles left to run), so that other
         * methods have the ability to force that number to zero (eg, halt()), and thus we don't have to check
         * some other criteria just to determine whether we should continue running or not.
         */
        this.nBurstCycles = this.nStepCycles = nMinCycles;
        do {
            var bOpCode = this.abMem[this.regPC];

            if (fDebugCheck && !this.dbg.checkInstruction(this.regPC, bOpCode)) {
                fCompleted = undefined;
                this.halt();
                break;
            }

            this.regPC++;
            this.aOpcodeFuncs[bOpCode].call(this);

            /*
             * Assert that all register contents remain within their respective ranges.
             */
            this.assert(!(this.regA & ~0xff) && !(this.regX & ~0xff) && !(this.regY & ~0xff) && !(this.regS & ~0x1ff), "register out of bounds");

            /*
             * WARNING: By making the following read-or-write test exclusive, we're not going to catch
             * those situations where an instruction does BOTH. For example, JSR pushes the old PC
             * (which, if we were tracking STACK writes, would set regEAWrite) and then fetches a new PC
             * (which should set regEA).  However, that's a situation which, except for a peculiar
             * combination of read and write breakpoints set by the Debugger, is one we simply don't care
             * about.  Moreover, none of our opcode handlers currently set BOTH regEA and regEAWrite,
             * so it would be completely pointless to check both conditions here.
             *
             * Since READS are FAR more common than WRITES, we check the common case first.  If the
             * day comes that we implement opcode functions that set both regEA AND regEAWrite, then we'll
             * want to remove the "else" below and stop making the read and write tests exclusive.
             * If we don't, then some of those rare/unusual writes will either get missed or delayed.
             *
             * It's also worth mentioning here that not all instructions READ or WRITE (eg, INX, INY and
             * others that are completely flag or register-bound).  It's a bit ironic that those instructions,
             * which are typically the fastest, have to perform both the READ and WRITE tests below.  But
             * on the plus side, both tests will fail, so they'll still get out of here faster than any of
             * the other instructions.
             */
            if (this.regEA >= 0) {
                /*
                 * Serial emulation requires a read notification handler, and the keyboard may eventually
                 * want one, too.
                 */
                if (this.regEA >= this.addrReadLower && this.regEA <= this.addrReadUpper) {
                    this.checkReadNotify(this.regEA, this.regPC);
                }
                if (fDebugCheck && !this.dbg.checkMemoryRead(this.regEA)) {
                    fCompleted = false;
                    this.halt();
                    break;
                }
                this.regEA = -1;
            }
            else if (this.regEAWrite >= 0) {
                /*
                 * We process the write notification handlers before the write breakpoint handlers,
                 * because we don't want to leave any ROM (read-only memory) writes in place before we
                 * (potentially) give up control.  Undoing every write to ROM address space is an essential
                 * part of simulating the "read-only" behavior of ROM.
                 *
                 * Obviously, there are other write notification handlers as well (like the keyboard's),
                 * which may sometimes do things we'd prefer to intercept first, but let's keep things simple.
                 */
                if (this.regEAWrite >= this.addrWriteLower && this.regEAWrite <= this.addrWriteUpper) {
                    this.checkWriteNotify(this.regEAWrite, this.regPC);
                }
                if (fDebugCheck && !this.dbg.checkMemoryWrite(this.regEAWrite, this.abMem[this.regEAWrite])) {
                    fCompleted = false;
                    this.halt();
                    break;
                }
                this.regEAWrite = -1;
            }

            this.nStepCycles -= this.aOpcodeCycles[bOpCode];

        } while (this.nStepCycles > 0);

        return fCompleted;
    }

    /**
     * yieldCPU()
     *
     * yieldCPU() is similar to halt() with regard to how it resets various cycle countdown values,
     * but the CPU remains in a "running" state.
     *
     * @this {C1PCPU}
     */
    yieldCPU()
    {
        this.nCyclesNextYield = 0;          // this will break us out of run(), once we break out of step()
        this.nBurstCycles -= this.nStepCycles;
        this.nStepCycles = 0;               // this will break us out of step()
    }

    /**
     * halt()
     *
     * halt() is similar to yieldCPU(), but it doesn't need to zero nCyclesNextYield to break out of run();
     * it simply needs to clear fRunning.
     *
     * @this {C1PCPU}
     */
    halt()
    {
        this.isBusy(true);
        this.nBurstCycles -= this.nStepCycles;
        this.nStepCycles = 0;
        if (this.flags.running) {
            this.flags.running = false;
            if (this.bindings["run"]) this.bindings["run"].innerHTML = "Run";
        }
    }

    /**
     * update()
     *
     * This used to be performed at the end of every step(), but run() -- which relies upon step() -- needed to have
     * more control over when these updates are performed.  However, for other callers of step(), such as the Debugger,
     * the combination of step() + update() provides the old behavior.
     *
     * @this {C1PCPU}
     */
    update()
    {
        this.displayVideo();
        this.displayStatus();
    }

    /**
     * getCycles()
     *
     * getCycles() returns the number of cycles executed so far.  Note that we can be called after
     * a run() OR during a run(), perhaps from a handler triggered during the current run's step(),
     * so nRunCycles must always be adjusted by number of cycles step() was asked to run (nBurstCycles),
     * less the number of cycles it has yet to run (nStepCycles).
     *
     * nRunCycles is reset whenever the CPU is halted or the CPU speed is changed, so returning 0 when the
     * CPU is stopped seems perfectly reasonable.  As a result, components that rely on getCycles() returning a
     * steadily increasing number should also be prepared for a reset at any time (eg, the Keyboard's
     * updateMemory() function).
     *
     * @this {C1PCPU}
     * @returns {number}
     */
    getCycles()
    {
        return (this.flags.running? this.nRunCycles + this.nBurstCycles - this.nStepCycles : 0);
    }

    /**
     * getByte(addr)
     *
     * @this {C1PCPU}
     * @param {number} addr
     * @returns {number}
     *
     * Unlike the Debugger versions of these functions, these presume that addr is always valid,
     * since it's internally generated, not user-supplied. Of course, we could still have internal
     * bugs, so asserts are included, but they are present in DEBUG code only (automatically
     * removed from RELEASE code).
     *
     * Moreover, it's unlikely we'll use this function much (unless performance becomes secondary
     * to code size), since all the opCode functions should perform their own fetches, for obvious
     * performance reasons.
     */
    getByte(addr)
    {
        this.assert((addr >= this.offMem && addr < this.offLimit), "invalid address: %#06X", addr);
        var b = this.abMem[addr];
        this.assert(!(b & ~0xff), "invalid byte (%#04X) at address %#06X", b, addr);
        return b;
    }

    /**
     * getWord(addr)
     *
     * @this {C1PCPU}
     * @param {number} addr
     * @returns {number}
     */
    getWord(addr)
    {
        this.assert((addr >= this.offMem && addr < this.offLimit), "invalid address: %#06X", addr);
        var w = this.abMem[addr] | (this.abMem[addr+1] << 8);
        this.assert(!(w & ~0xffff), "invalid word (%#06X) at address %#06X", w, addr);
        return w;
    }

    /**
     * setByte(addr, b)
     *
     * @this {C1PCPU}
     * @param {number} addr
     * @param {number} b
     */
    setByte(addr, b)
    {
        this.assert((addr >= this.offMem && addr < this.offLimit), "invalid address: %#06X", addr);
        this.assert(!(b & ~0xff), "invalid byte (%#04X) at address %#06X", b, addr);
        this.abMem[addr] = b;
    }

    /**
     * getRegP()
     *
     * @this {C1PCPU}
     * @returns {number}
     */
    getRegP()
    {
        /*
         *  // C = LAZY_C;
         *  this.regP = ((this.regP & 0xfe) | ((((this.regRC & 0x0100)))? 0x01 : 0));
         *  // Z = LAZY_Z;
         *  this.regP = ((this.regP & 0xfd) | ((((this.regRZ & 0xff) == 0))? 0x02 : 0));
         *  // V = LAZY_V;
         *  this.regP = ((this.regP & 0xbf) | (((((((this.regRV & 0xff) ^ this.regRU) ^ (this.regRV >> 1)) & 0x80) != 0))? 0x40 : 0));
         *  // N = LAZY_N;
         *  this.regP = ((this.regP & 0x7f) | ((((this.regRN & 0x80)))? 0x80 : 0));
         */
        var regP = ((this.regRC & 0x0100)? 0x01 : 0x00);
        regP |= (!(this.regRZ & 0xff)? 0x02 : 0x00);
        regP |= (((((this.regRV & 0xff) ^ this.regRU) ^ (this.regRV >> 1)) & 0x80)? 0x40 : 0x00);
        regP |= ((this.regRN & 0x80)? 0x80 : 0x00);
        return (this.regP & 0x3C) | regP;
    }

    /**
     * clearC()
     *
     * Clear the C flag
     *
     * @this {C1PCPU}
     */
    clearC()
    {
        this.regRC = 0x00;
    }

    /**
     * setC()
     *
     * Set the C flag
     *
     * @this {C1PCPU}
     */
    setC()
    {
        this.regRC = 0x100;
    }

    /**
     * clearN()
     *
     * Clear the N bit
     *
     * @this {C1PCPU}
     */
    clearN()
    {
        this.regRN = 0x00;
    }

    /**
     * setN()
     *
     * Set the N bit
     *
     * @this {C1PCPU}
     */
    setN()
    {
        this.regRN = 0x80;
    }

    /**
     * clearV()
     *
     * Clear the V bit
     *
     * @this {C1PCPU}
     */
    clearV()
    {
        this.regRV = 0x00; this.regRU = 0x00;
    }

    /**
     * setV()
     *
     * Set the V bit
     *
     * @this {C1PCPU}
     */
    setV()
    {
        this.regRV = 0x00; this.regRU = 0x80;
    }

    /**
     * clearZ()
     *
     * Clear the Z bit
     *
     * @this {C1PCPU}
     */
    clearZ()
    {
        this.regRZ = 0x01;
    }

    /**
     * setZ()
     *
     * Set the Z bit
     *
     * @this {C1PCPU}
     */
    setZ()
    {
        this.regRZ = 0x00;
    }

    /**
     * setBCD()
     *
     * Set the BCD bit and install the BCD opcode handlers
     *
     * @this {C1PCPU}
     */
    setBCD()
    {
        this.regP |= 0x08;
        this.aOpcodeFuncs[0x61] = this.opADCindxBCD;
        this.aOpcodeFuncs[0x65] = this.opADCzpBCD;
        this.aOpcodeFuncs[0x69] = this.opADCimmBCD;
        this.aOpcodeFuncs[0x6d] = this.opADCabsBCD;
        this.aOpcodeFuncs[0x71] = this.opADCindyBCD;
        this.aOpcodeFuncs[0x75] = this.opADCzpxBCD;
        this.aOpcodeFuncs[0x79] = this.opADCabsyBCD;
        this.aOpcodeFuncs[0x7d] = this.opADCabsxBCD;
        this.aOpcodeFuncs[0xe1] = this.opSBCindxBCD;
        this.aOpcodeFuncs[0xe5] = this.opSBCzpBCD;
        this.aOpcodeFuncs[0xe9] = this.opSBCimmBCD;
        this.aOpcodeFuncs[0xed] = this.opSBCabsBCD;
        this.aOpcodeFuncs[0xf1] = this.opSBCindyBCD;
        this.aOpcodeFuncs[0xf5] = this.opSBCzpxBCD;
        this.aOpcodeFuncs[0xf9] = this.opSBCabsyBCD;
        this.aOpcodeFuncs[0xfd] = this.opSBCabsxBCD;
    }

    /**
     * clearBCD()
     *
     * Clear the BCD bit and remove the BCD opcode handlers
     *
     * @this {C1PCPU}
     */
    clearBCD()
    {
        this.regP &= ~0x08;
        this.aOpcodeFuncs[0x61] = this.opADCindx;
        this.aOpcodeFuncs[0x65] = this.opADCzp;
        this.aOpcodeFuncs[0x69] = this.opADCimm;
        this.aOpcodeFuncs[0x6d] = this.opADCabs;
        this.aOpcodeFuncs[0x71] = this.opADCindy;
        this.aOpcodeFuncs[0x75] = this.opADCzpx;
        this.aOpcodeFuncs[0x79] = this.opADCabsy;
        this.aOpcodeFuncs[0x7d] = this.opADCabsx;
        this.aOpcodeFuncs[0xe1] = this.opSBCindx;
        this.aOpcodeFuncs[0xe5] = this.opSBCzp;
        this.aOpcodeFuncs[0xe9] = this.opSBCimm;
        this.aOpcodeFuncs[0xed] = this.opSBCabs;
        this.aOpcodeFuncs[0xf1] = this.opSBCindy;
        this.aOpcodeFuncs[0xf5] = this.opSBCzpx;
        this.aOpcodeFuncs[0xf9] = this.opSBCabsy;
        this.aOpcodeFuncs[0xfd] = this.opSBCabsx;
    }

    /**
     * addBCD(reg, mem)
     *
     * Refer to http://www.6502.org/tutorials/decimal_mode.html for 6502-specific details.
     * Refer to http://homepage.cs.uiowa.edu/~jones/bcd/bcd.html for optimization tips.
     *
     * @this {C1PCPU}
     * @param {number} reg
     * @param {number} mem
     * @returns {number}
     */
    addBCD(reg, mem)
    {
        var carry = ((this.regRC & 0x0100)? 1 : 0);

        /*
         * First add the low nibbles.
         */
        var r = (reg & 0x0f) + (mem & 0x0f) + carry;

        /*
         * Adjust the result. NOTE: The extra AND'ing and ADD'ing isn't necessary if we want to
         * assume that ONLY valid BCD digits will be added, but we probably shouldn't assume that.
         * NOTE: We use an OR instead of an ADD at the end because it's logically equivalent and faster.
         */
        if (r >= 0x0A) r = ((r + 0x06) & 0x0f) | 0x10;

        /*
         * Now add the high nibbles.
         */
        r += (reg & 0xf0) + (mem & 0xf0);

        /*
         * Before we do the next adjust, it seems that N and V are dependent on this intermediate
         * result (however, the meaning of N and V in BCD mode is not well documented).
         */
        this.regRU = reg ^ mem; this.regRV = r;
        this.regRN = (r & 0xff);

        /*
         * Final adjustment.
         */
        if (r >= 0xA0) r += 0x60;
        /*
         * NOTE: If the intermediate result was 0x1A0 or more, then adding 0x60 would yield a result
         * of 0x200 or more, but because the rest of the simulator tests regRC for 0x100, rather than
         * comparing regRC for values >= 0x100, we'll miss the fact that there was a carry, unless we
         * scale any value in the 0x200-0x2ff range down to 0x100-0x1ff.  We then assert that the
         * resulting value is within the proper range.
         */
        if (r >= 0x200) r -= 0x100;
        this.assert((r & 0x1ff) == r, "BCD addition overflow");

        /*
         * In BCD mode, the C flag reflects the decimal result, but the Z flag reflects binary addition.
         */
        this.regRC = r;
        this.regRZ = ((reg + mem + carry) & 0xff);

        /*
         * Account for an extra cycle in BCD mode as well.
         */
        this.nStepCycles--;

        return r & 0xff;
    }

    /**
     * subBCD(reg, mem)
     *
     * Refer to http://www.6502.org/tutorials/decimal_mode.html for 6502-specific details.
     * Refer to http://homepage.cs.uiowa.edu/~jones/bcd/bcd.html for optimization tips.
     *
     * @this {C1PCPU}
     * @param {number} reg
     * @param {number} mem
     * @returns {number}
     */
    subBCD(reg, mem)
    {
        var notcarry = ((this.regRC & 0x0100)? 0 : 1);

        /*
         * First subtract the low nibbles.
         */
        var r = (reg & 0x0f) - (mem & 0x0f) - notcarry;

        /*
         * Adjust the result. NOTE: The extra AND'ing and SUB'ing isn't necessary if we want to
         * assume that ONLY valid BCD digits will be added, but we probably shouldn't assume that.
         */
        if (r < 0x00) r = ((r - 0x06) & 0x0f) - 0x10;

        /*
         * Now subtract the high nibbles.
         */
        r += (reg & 0xf0) - (mem & 0xf0);

        /*
         * Final adjustment.
         */
        if (r < 0x00) r -= 0x60;

        /*
         * In BCD mode, the Z -- and C, N and V -- flags are all set as if binary subtraction was performed.
         */
        // RC = (A - ML - !LAZY_C); SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = (this.regRC = (reg - mem - notcarry)) & 0xff;
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = reg ^ mem; this.regRV = this.regRC;
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;

        /*
         * Account for an extra cycle in BCD mode as well.
         */
        this.nStepCycles--;

        return r & 0xff;
    }

    /**
     * clearRegs()
     *
     * @this {C1PCPU}
     */
    clearRegs()
    {
        this.regA = 0;
        this.regX = 0;
        this.regY = 0;
        this.regS = 0x100;
        this.regP = 0;
        this.regRN = 0;
        this.regRZ = 0;
        this.regRU = 0;
        this.regRV = 0;
        this.regRC = 0;
        this.regPC = 0;
        this.regEA = -1;
        this.regEAWrite = -1;
        this.mhz = 0;
        this.nRunCycles = this.nBurstCycles = this.nStepCycles = 0;
    }

    /**
     * @this {C1PCPU}
     */
    opBRK()
    {   // opcode 0x00
        // PC++;
        this.regPC++;
        // STACK(S--) = PCH;
        this.abMem[this.regS--] = (this.regPC >> 8);
        this.regS |= 0x100;
        // STACK(S--) = PCL;
        this.abMem[this.regS--] = (this.regPC & 0xff);
        this.regS |= 0x100;
        // B = 1;
        this.regP |= 0x10;
        // C = LAZY_C; Z = LAZY_Z; V = LAZY_V; N = LAZY_N;
        this.regP = this.getRegP();
        // STACK(S--) = P;
        this.abMem[this.regS--] = this.regP;
        this.regS |= 0x100;
        // B = 0;
        this.regP &= 0xef;
        // EA = 0xFFFE;
        this.regEA = 0xFFFE;
        // PC = M;
        this.regPC = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8));
    }

    /**
     * @this {C1PCPU}
     */
    opORAindx()
    {   // opcode 0x01
        // EA = WORD((BYTE(PC++)+X) & 0xff);
        this.regEA = ((this.abMem[this.regPC++]) + this.regX) & 0xff;
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8));
        // A = A | ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA |= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opORAzp()
    {   // opcode 0x05
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // A = A | ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA |= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opASLzp()
    {   // opcode 0x06
        // EA = BYTE(PC++);
        this.regEAWrite = this.abMem[this.regPC++];
        // RC = ML << 1;
        this.regRC = this.abMem[this.regEAWrite] << 1;
        // ML = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = (this.regRC & 0xff);
    }

    /**
     * @this {C1PCPU}
     */
    opPHP()
    {   // opcode 0x08
        this.regP = this.getRegP();
        // STACK(S--) = P;
        this.abMem[this.regS--] = this.regP;
        this.regS |= 0x100;
    }

    /**
     * @this {C1PCPU}
     */
    opORAimm()
    {   // opcode 0x09
        // EA = PC++;
        this.regEA = this.regPC++;
        // A = A | ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA |= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opASLacc()
    {   // opcode 0x0a
        // RC = A << 1;
        this.regRC = this.regA << 1;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
    }

    /**
     * @this {C1PCPU}
     */
    opORAabs()
    {   // opcode 0x0d
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // A = A | ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA |= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opASLabs()
    {   // opcode 0x0e
        // EA = WORD(PC); PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // RC = ML << 1;
        this.regRC = this.abMem[this.regEAWrite] << 1;
        // ML = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = (this.regRC & 0xff);
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opBPL()
    {   // opcode 0x10
        // PC = PC + (LAZY_N == 0? SBYTE(PC) : 0) + 1;
        this.regPC += (!(this.regRN & 0x80)? (this.nStepCycles--,((this.abMem[this.regPC] << 24) >> 24)) : 0) + 1;
    }

    /**
     * @this {C1PCPU}
     */
    opORAindy()
    {   // opcode 0x11
        // EA = WORD(BYTE(PC++))+Y;
        this.regEA = (this.abMem[this.regPC++]);
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8)) + this.regY;
        // A = A | ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA |= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opORAzpx()
    {   // opcode 0x15
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEA = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // A = A | ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA |= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opASLzpx()
    {   // opcode 0x16
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEAWrite = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // RC = ML << 1;
        this.regRC = this.abMem[this.regEAWrite] << 1;
        // ML = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = (this.regRC & 0xff);
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opCLC()
    {   // opcode 0x18
        // SET_LAZY_C(0);
        this.regRC = 0x00;
    }

    /**
     * @this {C1PCPU}
     */
    opORAabsy()
    {   // opcode 0x19
        // EA = WORD(PC)+Y; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regY;
        // A = A | ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = this.regA |= this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opORAabsx()
    {   // opcode 0x1d
        // EA = WORD(PC)+X; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // A = A | ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = this.regA |= this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opASLabsx()
    {   // opcode 0x1e
        // EA = WORD(PC)+X; PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // RC = ML << 1;
        this.regRC = this.abMem[this.regEAWrite] << 1;
        // ML = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = (this.regRC & 0xff);
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opJSRabs()
    {   // opcode 0x20
        // EA = PC; PC += 1;
        this.regEA = this.regPC++;
        // STACK(S--) = PCH;
        this.abMem[this.regS--] = (this.regPC >> 8);
        this.regS |= 0x100;
        // STACK(S--) = PCL;
        this.abMem[this.regS--] = (this.regPC & 0xff);
        this.regS |= 0x100;
        // PC = M;
        this.regPC = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8));
    }

    /**
     * @this {C1PCPU}
     */
    opANDindx()
    {   // opcode 0x21
        // EA = WORD((BYTE(PC++)+X) & 0xff);
        this.regEA = ((this.abMem[this.regPC++]) + this.regX) & 0xff;
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8));
        // A = A & ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA &= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opBITzp()
    {   // opcode 0x24
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // SET_LAZY_Z((A & ML) == 0);
        this.regRZ = (this.regA & this.abMem[this.regEA]);
        // SET_LAZY_N(ML7);
        this.regRN = ((this.regRN & 0x7f) | (this.abMem[this.regEA] & 0x80));
        // SET_LAZY_V(ML6);
        this.regRV = 0; this.regRU = ((this.abMem[this.regEA] & 0x40)? 0x80 : 0x00);
    }

    /**
     * @this {C1PCPU}
     */
    opANDzp()
    {   // opcode 0x25
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // A = A & ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA &= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opROLzp()
    {   // opcode 0x26
        // EA = BYTE(PC++);
        this.regEAWrite = this.abMem[this.regPC++];
        // RCL = ML;
        this.regRC = ((this.regRC & 0xff00) | this.abMem[this.regEAWrite]);
        // RC = RC << 1;
        this.regRC <<= 1;
        // RCL0 = RCH1;
        this.regRC = ((this.regRC & 0xfffe) | (((this.regRC & 0x0200))? 0x0001 : 0));
        // ML = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = (this.regRC & 0xff);
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opPLP()
    {   // opcode 0x28
        // P = STACK(++S);
        this.regS = ((this.regS+1) & 0xff) | 0x100;
        this.regP = this.abMem[this.regS];
        // SET_LAZY_C(C);
        this.regRC = ((this.regP & 0x01)? 0x0100 : 0);
        // SET_LAZY_Z(Z);
        this.regRZ = (!(this.regP & 0x02)? 0x01 : 0);
        // SET_LAZY_N(N);
        this.regRN = (this.regP & 0x80);
        // SET_LAZY_V(V);
        this.regRV = 0; this.regRU = ((this.regP & 0x40)? 0x80 : 0x00);
    }

    /**
     * @this {C1PCPU}
     */
    opANDimm()
    {   // opcode 0x29
        // EA = PC++;
        this.regEA = this.regPC++;
        // A = A & ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA &= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opROLacc()
    {   // opcode 0x2a
        // RCL =  A;
        this.regRC = ((this.regRC & 0xff00) | this.regA);
        // RC = RC << 1;
        this.regRC <<= 1;
        // RCL0 = RCH1;
        this.regRC = ((this.regRC & 0xfffe) | ((this.regRC & 0x0200)? 0x0001 : 0));
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
    }

    /**
     * @this {C1PCPU}
     */
    opBITabs()
    {   // opcode 0x2c
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // SET_LAZY_Z((A & ML) == 0);
        this.regRZ = (this.regA & this.abMem[this.regEA]);
        // SET_LAZY_N(ML7);
        this.regRN = ((this.regRN & 0x7f) | (this.abMem[this.regEA] & 0x80));
        // SET_LAZY_V(ML6);
        this.regRV = 0; this.regRU = ((this.abMem[this.regEA] & 0x40)? 0x80 : 0x00);
    }

    /**
     * @this {C1PCPU}
     */
    opANDabs()
    {   // opcode 0x2d
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // A = A & ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA &= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opROLabs()
    {   // opcode 0x2e
        // EA = WORD(PC); PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // RCL = ML;
        this.regRC = ((this.regRC & 0xff00) | this.abMem[this.regEAWrite]);
        // RC = RC << 1;
        this.regRC <<= 1;
        // RCL0 = RCH1;
        this.regRC = ((this.regRC & 0xfffe) | (((this.regRC & 0x0200))? 0x0001 : 0));
        // ML = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = (this.regRC & 0xff);
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opBMI()
    {   // opcode 0x30
        // PC = PC + (LAZY_N != 0? SBYTE(PC) : 0) + 1;
        this.regPC += ((this.regRN & 0x80)? (this.nStepCycles--,((this.abMem[this.regPC] << 24) >> 24)) : 0) + 1;
    }

    /**
     * @this {C1PCPU}
     */
    opANDindy()
    {   // opcode 0x31
        // EA = WORD(BYTE(PC++))+Y;
        this.regEA = (this.abMem[this.regPC++]);
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8)) + this.regY;
        // A = A & ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA &= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opANDzpx()
    {   // opcode 0x35
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEA = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // A = A & ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA &= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opROLzpx()
    {   // opcode 0x36
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEAWrite = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // RCL = ML;
        this.regRC = ((this.regRC & 0xff00) | this.abMem[this.regEAWrite]);
        // RC = RC << 1;
        this.regRC <<= 1;
        // RCL0 = RCH1;
        this.regRC = ((this.regRC & 0xfffe) | (((this.regRC & 0x0200))? 0x0001 : 0));
        // ML = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = (this.regRC & 0xff);
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opSEC()
    {   // opcode 0x38
        // SET_LAZY_C(1);
        this.regRC = 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opANDabsy()
    {   // opcode 0x39
        // EA = WORD(PC)+Y; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regY;
        // A = A & ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA &= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opANDabsx()
    {   // opcode 0x3d
        // EA = WORD(PC)+X; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // A = A & ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA &= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opROLabsx()
    {   // opcode 0x3e
        // EA = WORD(PC)+X; PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // RCL = ML;
        this.regRC = ((this.regRC & 0xff00) | this.abMem[this.regEAWrite]);
        // RC = RC << 1;
        this.regRC <<= 1;
        // RCL0 = RCH1;
        this.regRC = ((this.regRC & 0xfffe) | (((this.regRC & 0x0200))? 0x0001 : 0));
        // ML = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = (this.regRC & 0xff);
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opRTI()
    {   // opcode 0x40
        // P = STACK(++S);
        this.regS = ((this.regS+1) & 0xff) | 0x100;
        this.regP = this.abMem[this.regS];
        // SET_LAZY_C(C);
        this.regRC = ((this.regP & 0x01)? 0x0100 : 0);
        // SET_LAZY_Z(Z);
        this.regRZ = (!(this.regP & 0x02)? 0x01 : 0);
        // SET_LAZY_N(N);
        this.regRN = (this.regP & 0x80);
        // SET_LAZY_V(V);
        this.regRV = 0; this.regRU = ((this.regP & 0x40)? 0x80 : 0x00);
        // PCL = STACK(++S);
        // PCH = STACK(++S);
        this.regS = ((this.regS+2) & 0xff) | 0x100;
        this.regPC = (this.abMem[(this.regS-1) | 0x100]) | (this.abMem[this.regS] << 8);
    }

    /**
     * @this {C1PCPU}
     */
    opEORindx()
    {   // opcode 0x41
        // EA = WORD((BYTE(PC++)+X) & 0xff);
        this.regEA = ((this.abMem[this.regPC++]) + this.regX) & 0xff;
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8));
        // A = A ^ ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA ^= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opEORzp()
    {   // opcode 0x45
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // A = A ^ ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA ^= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opLSRzp()
    {   // opcode 0x46
        // EA = BYTE(PC++);
        this.regEAWrite = this.abMem[this.regPC++];
        // SET_LAZY_C(ML0);
        this.regRC = ((this.regRC & 0xfeff) | ((this.abMem[this.regEAWrite] & 0x01)? 0x0100 : 0));
        // ML = RCL = ML >> 1;
        this.abMem[this.regEAWrite] = ((this.regRC = ((this.regRC & 0xff00) | (this.abMem[this.regEAWrite] >> 1))) & 0xff);
        // SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = (this.regRC & 0xff);
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opPHA()
    {   // opcode 0x48
        // STACK(S--) = A;
        this.abMem[this.regS--] = this.regA;
        this.regS |= 0x100;
    }

    /**
     * @this {C1PCPU}
     */
    opEORimm()
    {   // opcode 0x49
        // EA = PC++;
        this.regEA = this.regPC++;
        // A = A ^ ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA ^= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opLSRacc()
    {   // opcode 0x4a
        // SET_LAZY_C( A0);
        this.regRC = ((this.regRC & 0xfeff) | ((this.regA & 0x01)? 0x0100 : 0));
        // A = RCL =  A >> 1;
        this.regA = ((this.regRC = ((this.regRC & 0xff00) | (this.regA >> 1))) & 0xff);
        // SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = (this.regRC & 0xff);
    }

    /**
     * @this {C1PCPU}
     */
    opJMPimm16()
    {   // opcode 0x4c
        // EA = PC;
        this.regEA = this.regPC;
        // PC += 2;
        // this.regPC += 2;
        // PC = M;
        this.regPC = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8));
    }

    /**
     * @this {C1PCPU}
     */
    opEORabs()
    {   // opcode 0x4d
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // A = A ^ ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA ^= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opLSRabs()
    {   // opcode 0x4e
        // EA = WORD(PC); PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // SET_LAZY_C(ML0);
        this.regRC = ((this.regRC & 0xfeff) | ((this.abMem[this.regEAWrite] & 0x01)? 0x0100 : 0));
        // ML = RCL = ML >> 1;
        this.abMem[this.regEAWrite] = ((this.regRC = ((this.regRC & 0xff00) | (this.abMem[this.regEAWrite] >> 1))) & 0xff);
        // SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = (this.regRC & 0xff);
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opBVC()
    {   // opcode 0x50
        // PC = PC + (LAZY_V == 0? SBYTE(PC) : 0) + 1;
        this.regPC += (!((((this.regRV & 0xff) ^ this.regRU) ^ (this.regRV >> 1)) & 0x80)? (this.nStepCycles--,((this.abMem[this.regPC] << 24) >> 24)) : 0) + 1;
    }

    /**
     * @this {C1PCPU}
     */
    opEORindy()
    {   // opcode 0x51
        // EA = WORD(BYTE(PC++))+Y;
        this.regEA = this.abMem[this.regPC++];
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8)) + this.regY;
        // A = A ^ ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA ^= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opEORzpx()
    {   // opcode 0x55
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEA = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // A = A ^ ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA ^= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opLSRzpx()
    {   // opcode 0x56
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEAWrite = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // SET_LAZY_C(ML0);
        this.regRC = ((this.regRC & 0xfeff) | ((this.abMem[this.regEAWrite] & 0x01)? 0x0100 : 0));
        // ML = RCL = ML >> 1;
        this.abMem[this.regEAWrite] = ((this.regRC = ((this.regRC & 0xff00) | (this.abMem[this.regEAWrite] >> 1))) & 0xff);
        // SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = (this.regRC & 0xff);
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opCLI()
    {   // opcode 0x58
        // I = 0;
        this.regP &= 0xfb;
    }

    /**
     * @this {C1PCPU}
     */
    opEORabsy()
    {   // opcode 0x59
        // EA = WORD(PC)+Y; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regY;
        // A = A ^ ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = (this.regA ^= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opEORabsx()
    {   // opcode 0x5d
        // EA = WORD(PC)+X; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // A = A ^ ML; SET_LAZY_NZ(A)
        this.regRN = this.regRZ = (this.regA ^= this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opLSRabsx()
    {   // opcode 0x5e
        // EA = WORD(PC)+X; PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // SET_LAZY_C(ML0);
        this.regRC = ((this.regRC & 0xfeff) | ((this.abMem[this.regEAWrite] & 0x01)? 0x0100 : 0));
        // ML = RCL = ML >> 1;
        this.abMem[this.regEAWrite] = ((this.regRC = ((this.regRC & 0xff00) | (this.abMem[this.regEAWrite] >> 1))) & 0xff);
        // SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = (this.regRC & 0xff);
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opRTS()
    {   // opcode 0x60
        // PCL = STACK(++S);
        // PCH = STACK(++S);
        // PC++;
        this.regS = ((this.regS+2) & 0xff) | 0x100;
        this.regPC = (((this.abMem[(this.regS-1) | 0x100])) | ((this.abMem[this.regS]) << 8)) + 1;
    }

    /**
     * @this {C1PCPU}
     */
    opADCindx()
    {   // opcode 0x61
        // EA = WORD((BYTE(PC++)+X) & 0xff);
        this.regEA = ((this.abMem[this.regPC++]) + this.regX) & 0xff;
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8));
        // RC = (A + ML + LAZY_C);
        this.regRC = (this.regA + this.abMem[this.regEA] + ((this.regRC & 0x0100)? 1 : 0));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
    }

    /**
     * @this {C1PCPU}
     */
    opADCindxBCD()
    {   // opcode 0x61
        // EA = WORD((BYTE(PC++)+X) & 0xff);
        this.regEA = ((this.abMem[this.regPC++]) + this.regX) & 0xff;
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8));
        // A = this.addBCD(A,ML);
        this.regA = this.addBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opADCzp()
    {   // opcode 0x65
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // RC = (A + ML + LAZY_C);
        this.regRC = (this.regA + this.abMem[this.regEA] + ((this.regRC & 0x0100)? 1 : 0));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
    }

    /**
     * @this {C1PCPU}
     */
    opADCzpBCD()
    {   // opcode 0x65
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // A = this.addBCD(A,ML);
        this.regA = this.addBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opRORzp()
    {   // opcode 0x66
        // EA = BYTE(PC++);
        this.regEAWrite = this.abMem[this.regPC++];
        // RCL = ML;
        this.regRC = ((this.regRC & 0xff00) | this.abMem[this.regEAWrite]);
        // RCH1 = RCL0;
        this.regRC = ((this.regRC & 0xfdff) | ((this.regRC & 0x0001)? 0x0200 : 0));
        // RC = RC >> 1;
        this.regRC >>= 1;
        // ML = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = (this.regRC & 0xff);
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opPLA()
    {   // opcode 0x68
        // A = STACK(++S); SET_LAZY_NZ(A);
        this.regS = ((this.regS+1) & 0xff) | 0x100;
        this.regRN = this.regRZ = this.regA = this.abMem[this.regS];
    }

    /**
     * @this {C1PCPU}
     */
    opADCimm()
    {   // opcode 0x69
        // EA = PC++;
        this.regEA = this.regPC++;
        // RC = (A + ML + LAZY_C);
        this.regRC = (this.regA + this.abMem[this.regEA] + ((this.regRC & 0x0100)? 1 : 0));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
    }

    /**
     * @this {C1PCPU}
     */
    opADCimmBCD()
    {   // opcode 0x69
        // EA = PC++;
        this.regEA = this.regPC++;
        // A = this.addBCD(A,ML);
        this.regA = this.addBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opRORacc()
    {   // opcode 0x6a
        // RCL =  A;
        this.regRC = ((this.regRC & 0xff00) | this.regA);
        // RCH1 = RCL0;
        this.regRC = ((this.regRC & 0xfdff) | ((this.regRC & 0x0001)? 0x0200 : 0));
        // RC = RC >> 1;
        this.regRC >>= 1;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
    }

    /**
     * @this {C1PCPU}
     *
     * NOTE from Wikipedia: "The 6502's memory indirect jump instruction, JMP (<address>), is partially broken.
     * If <address> is hex xxFF (i.e., any word ending in FF), the processor will not jump to the address stored in xxFF and xxFF+1 as expected,
     * but rather the one defined by xxFF and xx00. This defect continued through the entire NMOS line, but was corrected in the CMOS derivatives."
     */
    opJMPabs16()
    {   // opcode 0x6c
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // PC = M;
        this.regPC = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8));
    }

    /**
     * @this {C1PCPU}
     */
    opADCabs()
    {   // opcode 0x6d
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // RC = (A + ML + LAZY_C);
        this.regRC =(this.regA + this.abMem[this.regEA] + ((this.regRC & 0x0100)? 1 : 0));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
    }

    /**
     * @this {C1PCPU}
     */
    opADCabsBCD()
    {   // opcode 0x6d
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // A = this.addBCD(A,ML);
        this.regA = this.addBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opRORabs()
    {   // opcode 0x6e
        // EA = WORD(PC); PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // RCL = ML;
        this.regRC = ((this.regRC & 0xff00) | this.abMem[this.regEAWrite]);
        // RCH1 = RCL0;
        this.regRC = ((this.regRC & 0xfdff) | ((this.regRC & 0x0001)? 0x0200 : 0));
        // RC = RC >> 1;
        this.regRC >>= 1;
        // ML = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = (this.regRC & 0xff);
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opBVS()
    {   // opcode 0x70
        // PC = PC + (LAZY_V != 0? SBYTE(PC) : 0) + 1;
        this.regPC += (((((this.regRV & 0xff) ^ this.regRU) ^ (this.regRV >> 1)) & 0x80)? (this.nStepCycles--,((this.abMem[this.regPC] << 24) >> 24)) : 0) + 1;
    }

    /**
     * @this {C1PCPU}
     */
    opADCindy()
    {   // opcode 0x71
        // EA = WORD(BYTE(PC++))+Y;
        this.regEA = (this.abMem[this.regPC++]);
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8)) + this.regY;
        // RC = (A + ML + LAZY_C);
        this.regRC = (this.regA + this.abMem[this.regEA] + ((this.regRC & 0x0100)? 1 : 0));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
    }

    /**
     * @this {C1PCPU}
     */
    opADCindyBCD()
    {   // opcode 0x71
        // EA = WORD(BYTE(PC++))+Y;
        this.regEA = (this.abMem[this.regPC++]);
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8)) + this.regY;
        // A = this.addBCD(A,ML);
        this.regA = this.addBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opADCzpx()
    {   // opcode 0x75
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEA = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // RC = (A + ML + LAZY_C);
        this.regRC = (this.regA + this.abMem[this.regEA] + ((this.regRC & 0x0100)? 1 : 0));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
    }

    /**
     * @this {C1PCPU}
     */
    opADCzpxBCD()
    {   // opcode 0x75
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEA = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // A = this.addBCD(A,ML);
        this.regA = this.addBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opRORzpx()
    {   // opcode 0x76
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEAWrite = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // RCL = ML;
        this.regRC = ((this.regRC & 0xff00) | this.abMem[this.regEAWrite]);
        // RCH1 = RCL0;
        this.regRC = ((this.regRC & 0xfdff) | ((this.regRC & 0x0001)? 0x0200 : 0));
        // RC = RC >> 1;
        this.regRC >>= 1;
        // ML = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = (this.regRC & 0xff);
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opSEI()
    {   // opcode 0x78
        // I = 1;
        this.regP |= 0x04;
    }

    /**
     * @this {C1PCPU}
     */
    opADCabsy()
    {   // opcode 0x79
        // EA = WORD(PC)+Y; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regY;
        // RC = (A + ML + LAZY_C);
        this.regRC = (this.regA + this.abMem[this.regEA] + ((this.regRC & 0x0100)? 1 : 0));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
    }

    /**
     * @this {C1PCPU}
     */
    opADCabsyBCD()
    {   // opcode 0x79
        // EA = WORD(PC)+Y; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regY;
        // A = this.addBCD(A,ML);
        this.regA = this.addBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opADCabsx()
    {   // opcode 0x7d
        // EA = WORD(PC)+X; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // RC = (A + ML + LAZY_C);
        this.regRC = (this.regA + this.abMem[this.regEA] + ((this.regRC & 0x0100)? 1 : 0));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
    }

    /**
     * @this {C1PCPU}
     */
    opADCabsxBCD()
    {   // opcode 0x7d
        // EA = WORD(PC)+X; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // A = this.addBCD(A,ML);
        this.regA = this.addBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opRORabsx()
    {   // opcode 0x7e
        // EA = WORD(PC)+X; PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // RCL = ML;
        this.regRC = ((this.regRC & 0xff00) | this.abMem[this.regEAWrite]);
        // RCH1 = RCL0;
        this.regRC = ((this.regRC & 0xfdff) | ((this.regRC & 0x0001)? 0x0200 : 0));
        // RC = RC >> 1;
        this.regRC >>= 1;
        // ML = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = (this.regRC & 0xff);
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opSTAindx()
    {   // opcode 0x81
        // EA = WORD((BYTE(PC++)+X) & 0xff);
        this.regEAWrite = ((this.abMem[this.regPC++]) + this.regX) & 0xff;
        this.regEAWrite = (this.abMem[this.regEAWrite] | (this.abMem[this.regEAWrite+1] << 8));
        // ML = A;
        this.abMem[this.regEAWrite] = this.regA;
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opSTYzp()
    {   // opcode 0x84
        // EA = BYTE(PC++);
        this.regEAWrite = this.abMem[this.regPC++];
        // ML = Y;
        this.abMem[this.regEAWrite] = this.regY;
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opSTAzp()
    {   // opcode 0x85
        // EA = BYTE(PC++);
        this.regEAWrite = this.abMem[this.regPC++];
        // ML = A;
        this.abMem[this.regEAWrite] = this.regA;
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opSTXzp()
    {   // opcode 0x86
        // EA = BYTE(PC++);
        this.regEAWrite = this.abMem[this.regPC++];
        // ML = X;
        this.abMem[this.regEAWrite] = this.regX;
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opDEY()
    {   // opcode 0x88
        // Y = ((Y - 1) & 0xff);
        this.regY = ((this.regY - 1) & 0xff);
        // SET_LAZY_NZ(Y);
        this.regRN = this.regRZ = (this.regY);
    }

    /**
     * @this {C1PCPU}
     */
    opTXA()
    {   // opcode 0x8a
        // A = X; SET_LAZY_NZ(X);
        this.regRN = this.regRZ = this.regA = this.regX;
    }

    /**
     * @this {C1PCPU}
     */
    opSTYabs()
    {   // opcode 0x8c
        // EA = WORD(PC); PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // ML = Y;
        this.abMem[this.regEAWrite] = this.regY;
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opSTAabs()
    {   // opcode 0x8d
        // EA = WORD(PC); PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // ML = A;
        this.abMem[this.regEAWrite] = this.regA;
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opSTXabs()
    {   // opcode 0x8e
        // EA = WORD(PC); PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // ML = X;
        this.abMem[this.regEAWrite] = this.regX;
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opBCC()
    {   // opcode 0x90
        // PC = PC + (LAZY_C == 0? SBYTE(PC) : 0) + 1;
        this.regPC += (!(this.regRC & 0x0100)? (this.nStepCycles--,((this.abMem[this.regPC] << 24) >> 24)) : 0) + 1;
    }

    /**
     * @this {C1PCPU}
     */
    opSTAindy()
    {   // opcode 0x91
        // EA = WORD(BYTE(PC++))+Y;
        this.regEAWrite = (this.abMem[this.regPC++]);
        this.regEAWrite = (this.abMem[this.regEAWrite] | (this.abMem[this.regEAWrite+1] << 8)) + this.regY;
        // ML = A;
        this.abMem[this.regEAWrite] = this.regA;
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opSTYzpx()
    {   // opcode 0x94
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEAWrite = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // ML = Y;
        this.abMem[this.regEAWrite] = this.regY;
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opSTAzpx()
    {   // opcode 0x95
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEAWrite = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // ML = A;
        this.abMem[this.regEAWrite] = this.regA;
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opSTXzpy()
    {   // opcode 0x96
        // EA = (BYTE(PC++)+Y) & 0xff;
        this.regEAWrite = (this.abMem[this.regPC++]+this.regY) & 0xff;
        // ML = X;
        this.abMem[this.regEAWrite] = this.regX;
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opTYA()
    {   // opcode 0x98
        // A = Y; SET_LAZY_NZ(Y);
        this.regRN = this.regRZ = this.regA = this.regY;
    }

    /**
     * @this {C1PCPU}
     */
    opSTAabsy()
    {   // opcode 0x99
        // EA = WORD(PC)+Y; PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regY;
        // ML = A;
        this.abMem[this.regEAWrite] = this.regA;
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opTXS()
    {   // opcode 0x9a
        // S = X;
        this.regS = this.regX | 0x100;
    }

    /**
     * @this {C1PCPU}
     */
    opSTAabsx()
    {   // opcode 0x9d
        // EA = WORD(PC)+X; PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // ML = A;
        this.abMem[this.regEAWrite] = this.regA;
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opLDYimm()
    {   // opcode 0xa0
        // EA = PC++;
        this.regEA = this.regPC++;
        // Y = ML; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.regY = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opLDAindx()
    {   // opcode 0xa1
        // EA = WORD((BYTE(PC++)+X) & 0xff);
        this.regEA = ((this.abMem[this.regPC++]) + this.regX) & 0xff;
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8));
        // A = ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = this.regA = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opLDXimm()
    {   // opcode 0xa2
        // EA = PC++;
        this.regEA = this.regPC++;
        // X = ML; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.regX = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opLDYzp()
    {   // opcode 0xa4
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // Y = ML; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.regY = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opLDAzp()
    {   // opcode 0xa5
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // A = ML; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.regA = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opLDXzp()
    {   // opcode 0xa6
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // X = ML; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.regX = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opTAY()
    {   // opcode 0xa8
        // Y = A; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = this.regY = this.regA;
    }

    /**
     * @this {C1PCPU}
     */
    opLDAimm()
    {   // opcode 0xa9
        // EA = PC++;
        this.regEA = this.regPC++;
        // A = ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = this.regA = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opTAX()
    {   // opcode 0xaa
        // X = A; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = this.regX = this.regA;
    }

    /**
     * @this {C1PCPU}
     */
    opLDYabs()
    {   // opcode 0xac
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // Y = ML; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.regY = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opLDAabs()
    {   // opcode 0xad
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // A = ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = this.regA = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opLDXabs()
    {   // opcode 0xae
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // X = ML; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.regX = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opBCS()
    {   // opcode 0xb0
        // PC = PC + (LAZY_C != 0? SBYTE(PC) : 0) + 1;
        this.regPC += ((this.regRC & 0x0100)? (this.nStepCycles--,((this.abMem[this.regPC] << 24) >> 24)) : 0) + 1;
    }

    /**
     * @this {C1PCPU}
     */
    opLDAindy()
    {   // opcode 0xb1
        // EA = WORD(BYTE(PC++))+Y;
        this.regEA = (this.abMem[this.regPC++]);
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8)) + this.regY;
        // A = ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = this.regA = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opLDYzpx()
    {   // opcode 0xb4
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEA = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // Y = ML; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.regY = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opLDAzpx()
    {   // opcode 0xb5
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEA = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // A = ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = this.regA = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opLDXzpy()
    {   // opcode 0xb6
        // EA = (BYTE(PC++)+Y) & 0xff;
        this.regEA = (this.abMem[this.regPC++]+this.regY) & 0xff;
        // X = ML; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.regX = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opCLV()
    {   // opcode 0xb8
        // SET_LAZY_V(0);
        this.regRV = 0; this.regRU = 0;
    }

    /**
     * @this {C1PCPU}
     */
    opLDAabsy()
    {   // opcode 0xb9
        // EA = WORD(PC)+Y; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regY;
        // A = ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = this.regA = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opTSX()
    {   // opcode 0xba
        // X = S; SET_LAZY_NZ(S);
        this.regRN = this.regRZ = this.regX = this.regS & 0xff;
    }

    /**
     * @this {C1PCPU}
     */
    opLDYabsx()
    {   // opcode 0xbc
        // EA = WORD(PC)+X; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // Y = ML; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.regY = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opLDAabsx()
    {   // opcode 0xbd
        // EA = WORD(PC)+X; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // A = ML; SET_LAZY_NZ(A);
        this.regRN = this.regRZ = this.regA = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opLDXabsy()
    {   // opcode 0xbe
        // EA = WORD(PC)+Y; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regY;
        // X = ML; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.regX = this.abMem[this.regEA];
    }

    /**
     * @this {C1PCPU}
     */
    opCPYimm()
    {   // opcode 0xc0
        // EA = PC++;
        this.regEA = this.regPC++;
        // RC = Y - ML;
        this.regRC = this.regY - this.abMem[this.regEA];
        // SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = (this.regRC);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opCMPindx()
    {   // opcode 0xc1
        // EA = WORD((BYTE(PC++)+X) & 0xff);
        this.regEA = ((this.abMem[this.regPC++]) + this.regX) & 0xff;
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8));
        // RC = A - ML; SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = this.regRC = (this.regA - this.abMem[this.regEA]);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opCPYzp()
    {   // opcode 0xc4
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // RC = Y - ML;
        this.regRC = this.regY - this.abMem[this.regEA];
        // SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = (this.regRC);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opCMPzp()
    {   // opcode 0xc5
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // RC = A - ML; SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = this.regRC = (this.regA - this.abMem[this.regEA]);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opDECzp()
    {   // opcode 0xc6
        // EA = BYTE(PC++);
        this.regEAWrite = this.abMem[this.regPC++];
        // ML = ML - 1; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = ((this.abMem[this.regEAWrite] - 1) & 0xff);
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opINY()
    {   // opcode 0xc8
        // Y = ((Y + 1) & 0xff);
        this.regY = ((this.regY + 1) & 0xff);
        // SET_LAZY_NZ(Y);
        this.regRN = this.regRZ = (this.regY);
    }

    /**
     * @this {C1PCPU}
     */
    opCMPimm()
    {   // opcode 0xc9
        // EA = PC++;
        this.regEA = this.regPC++;
        // RC = A - ML; SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = this.regRC = (this.regA - this.abMem[this.regEA]);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opDEX()
    {   // opcode 0xca
        // X = ((X - 1) & 0xff); SET_LAZY_NZ(X);
        this.regRN = this.regRZ = this.regX = ((this.regX - 1) & 0xff);
    }

    /**
     * @this {C1PCPU}
     */
    opCPYabs()
    {   // opcode 0xcc
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // RC = Y - ML; SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = this.regRC = this.regY - this.abMem[this.regEA];
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opCMPabs()
    {   // opcode 0xcd
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // RC = A - ML; SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = this.regRC = (this.regA - this.abMem[this.regEA]);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opDECabs()
    {   // opcode 0xce
        // EA = WORD(PC); PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // ML = ML - 1; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = ((this.abMem[this.regEAWrite] - 1) & 0xff);
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opBNE()
    {   // opcode 0xd0
        // PC = PC + (LAZY_Z == 0? SBYTE(PC) : 0) + 1;
        this.regPC += ((this.regRZ & 0xff)? (this.nStepCycles--,((this.abMem[this.regPC] << 24) >> 24)) : 0) + 1;
    }

    /**
     * @this {C1PCPU}
     */
    opCMPindy()
    {   // opcode 0xd1
        // EA = WORD(BYTE(PC++))+Y;
        this.regEA = (this.abMem[this.regPC++]);
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8)) + this.regY;
        // RC = A - ML; SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = this.regRC = (this.regA - this.abMem[this.regEA]);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opCMPzpx()
    {   // opcode 0xd5
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEA = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // RC = A - ML; SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = this.regRC = (this.regA - this.abMem[this.regEA]);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opDECzpx()
    {   // opcode 0xd6
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEAWrite = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // ML = ML - 1; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = ((this.abMem[this.regEAWrite] - 1) & 0xff);
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opCLD()
    {   // opcode 0xd8
        // D = 0;
        this.clearBCD();
    }

    /**
     * @this {C1PCPU}
     */
    opCMPabsy()
    {   // opcode 0xd9
        // EA = WORD(PC)+Y; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regY;
        // RC = A - ML; SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = this.regRC = (this.regA - this.abMem[this.regEA]);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opCMPabsx()
    {   // opcode 0xdd
        // EA = WORD(PC)+X; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // RC = A - ML; SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = this.regRC = (this.regA - this.abMem[this.regEA]);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opDECabsx()
    {   // opcode 0xde
        // EA = WORD(PC)+X; PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // ML = ML - 1; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = ((this.abMem[this.regEAWrite] - 1) & 0xff);
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opCPXimm()
    {   // opcode 0xe0
        // EA = PC++;
        this.regEA = this.regPC++;
        // RC = X - ML;
        this.regRC = this.regX - this.abMem[this.regEA];
        // SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = (this.regRC);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opSBCindx()
    {   // opcode 0xe1
        // EA = WORD((BYTE(PC++)+X) & 0xff);
        this.regEA = ((this.abMem[this.regPC++]) + this.regX) & 0xff;
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8));
        // RC = (A - ML - !LAZY_C);
        this.regRC = (this.regA - this.abMem[this.regEA] - ((this.regRC & 0x0100)? 0 : 1));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opSBCindxBCD()
    {   // opcode 0xe1
        // EA = WORD((BYTE(PC++)+X) & 0xff);
        this.regEA = ((this.abMem[this.regPC++]) + this.regX) & 0xff;
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8));
        // A = this.subBCD(A,ML);
        this.regA = this.subBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opCPXzp()
    {   // opcode 0xe4
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // RC = X - ML;
        this.regRC = this.regX - this.abMem[this.regEA];
        // SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = (this.regRC);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opSBCzp()
    {   // opcode 0xe5
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // RC = (A - ML - !LAZY_C);
        this.regRC = (this.regA - this.abMem[this.regEA] - ((this.regRC & 0x0100)? 0 : 1));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opSBCzpBCD()
    {   // opcode 0xe5
        // EA = BYTE(PC++);
        this.regEA = this.abMem[this.regPC++];
        // A = this.subBCD(A,ML);
        this.regA = this.subBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opINCzp()
    {   // opcode 0xe6
        // EA = BYTE(PC++);
        this.regEAWrite = this.abMem[this.regPC++];
        // ML = ML + 1; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = ((this.abMem[this.regEAWrite] + 1) & 0xff);
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opINX()
    {   // opcode 0xe8
        // X = ((X + 1) & 0xff);
        this.regX = ((this.regX + 1) & 0xff);
        // SET_LAZY_NZ(X);
        this.regRN = this.regRZ = (this.regX);
    }

    /**
     * @this {C1PCPU}
     */
    opSBCimm()
    {   // opcode 0xe9
        // EA = PC++;
        this.regEA = this.regPC++;
        // RC = (A - ML - !LAZY_C);
        this.regRC = (this.regA - this.abMem[this.regEA] - ((this.regRC & 0x0100)? 0 : 1));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opSBCimmBCD()
    {   // opcode 0xe9
        // EA = PC++;
        this.regEA = this.regPC++;
        // A = this.subBCD(A,ML);
        this.regA = this.subBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opNOP()
    {   // opcode 0xea
        //
    }

    /**
     * @this {C1PCPU}
     */
    opCPXabs()
    {   // opcode 0xec
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // RC = X - ML; SET_LAZY_NZ(RC);
        this.regRN = this.regRZ = this.regRC = this.regX - this.abMem[this.regEA];
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opSBCabs()
    {   // opcode 0xed
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // RC = (A - ML - !LAZY_C);
        this.regRC = (this.regA - this.abMem[this.regEA] - ((this.regRC & 0x0100)? 0 : 1));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opSBCabsBCD()
    {   // opcode 0xed
        // EA = WORD(PC); PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // A = this.subBCD(A,ML);
        this.regA = this.subBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opINCabs()
    {   // opcode 0xee
        // EA = WORD(PC); PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
        // ML = ML + 1; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = ((this.abMem[this.regEAWrite] + 1) & 0xff);
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opBEQ()
    {   // opcode 0xf0
        // PC = PC + (LAZY_Z == 1? SBYTE(PC) : 0) + 1;
        this.regPC += (!(this.regRZ & 0xff)? (this.nStepCycles--,((this.abMem[this.regPC] << 24) >> 24)) : 0) + 1;
    }

    /**
     * @this {C1PCPU}
     */
    opSBCindy()
    {   // opcode 0xf1
        // EA = WORD(BYTE(PC++))+Y;
        this.regEA = (this.abMem[this.regPC++]);
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8)) + this.regY;
        // RC = (A - ML - !LAZY_C);
        this.regRC = (this.regA - this.abMem[this.regEA] - ((this.regRC & 0x0100)? 0 : 1));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opSBCindyBCD()
    {   // opcode 0xf1
        // EA = WORD(BYTE(PC++))+Y;
        this.regEA = (this.abMem[this.regPC++]);
        this.regEA = (this.abMem[this.regEA] | (this.abMem[this.regEA+1] << 8)) + this.regY;
        // A = this.subBCD(A,ML);
        this.regA = this.subBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opSBCzpx()
    {   // opcode 0xf5
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEA = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // RC = (A - ML - !LAZY_C);
        this.regRC = (this.regA - this.abMem[this.regEA] - ((this.regRC & 0x0100)? 0 : 1));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opSBCzpxBCD()
    {   // opcode 0xf5
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEA = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // A = this.subBCD(A,ML);
        this.regA = this.subBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opINCzpx()
    {   // opcode 0xf6
        // EA = (BYTE(PC++)+X) & 0xff;
        this.regEAWrite = (this.abMem[this.regPC++]+this.regX) & 0xff;
        // ML = ML + 1; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = ((this.abMem[this.regEAWrite] + 1) & 0xff);
        // W = 1;
        // NOTE: Consider alternatives for tracking zero-page writes (eg, regEAWriteZP)
    }

    /**
     * @this {C1PCPU}
     */
    opSED()
    {   // opcode 0xf8
        // D = 1;
        this.setBCD();
    }

    /**
     * @this {C1PCPU}
     */
    opSBCabsy()
    {   // opcode 0xf9
        // EA = WORD(PC)+Y; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regY;
        // RC = (A - ML - !LAZY_C);
        this.regRC = (this.regA - this.abMem[this.regEA] - ((this.regRC & 0x0100)? 0 : 1));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opSBCabsyBCD()
    {   // opcode 0xf9
        // EA = WORD(PC)+Y; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regY;
        // A = this.subBCD(A,ML);
        this.regA = this.subBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opSBCabsx()
    {   // opcode 0xfd
        // EA = WORD(PC)+X; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // RC = (A - ML - !LAZY_C);
        this.regRC = (this.regA - this.abMem[this.regEA] - ((this.regRC & 0x0100)? 0 : 1));
        // SET_LAZY_OV(A,ML,RC);
        this.regRU = this.regA ^ this.abMem[this.regEA]; this.regRV = this.regRC;
        // A = RCL; SET_LAZY_NZ(RCL);
        this.regRN = this.regRZ = this.regA = (this.regRC & 0xff);
        // SET_LAZY_C(!LAZY_C);
        this.regRC ^= 0x0100;
    }

    /**
     * @this {C1PCPU}
     */
    opSBCabsxBCD()
    {   // opcode 0xfd
        // EA = WORD(PC)+X; PC += 2;
        this.regEA = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // A = this.subBCD(A,ML);
        this.regA = this.subBCD(this.regA, this.abMem[this.regEA]);
    }

    /**
     * @this {C1PCPU}
     */
    opINCabsx()
    {   // opcode 0xfe
        // EA = WORD(PC)+X; PC += 2;
        this.regEAWrite = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8)) + this.regX;
        // ML = ML + 1; SET_LAZY_NZ(ML);
        this.regRN = this.regRZ = this.abMem[this.regEAWrite] = ((this.abMem[this.regEAWrite] + 1) & 0xff);
        // W = 1;
    }

    /**
     * @this {C1PCPU}
     */
    opSim()
    {
        var addr;
        var bSimOp = this.abMem[this.regPC++];
        switch(bSimOp) {

            case this.SIMOP_HLT:
                this.printf("HALT\n");
                this.halt();
                break;

            case this.SIMOP_MSG:
                addr = this.regPC;                  // currently we're using "inline" strings
                // addr = (this.abMem[this.regPC++] | (this.abMem[this.regPC++] << 8));
                var s = "";
                while (addr < this.abMem.length) {
                    var b = this.abMem[addr++];
                    if (!b) break;
                    s += String.fromCharCode(b);
                }
                this.regPC = addr;                  // update regPC as long as we're doing "inline" strings
                /*
                 * Before simply printing the string, what kinds of handy substitutions should we provide?
                 *
                 *      eg: %A for this.regA, %X for this.regX, etc
                 */
                s = s.replace(/%A/g, StrLib.toHex(this.regA, 2)).replace(/%X/g, StrLib.toHex(this.regX, 2)).replace(/%Y/g, StrLib.toHex(this.regY, 2));
                this.printf("%s\n", s);
                /*
                 * To make printing "smoother", let's force a yield
                 */
                this.yieldCPU();
                break;

            default:
                this.regPC -= 2;
                this.printf("undefined opSim: %#04x at %#06x\n", bSimOp, this.regPC);
                this.halt();
        }
    }

    /**
     * @this {C1PCPU}
     */
    opUndefined()
    {
        var b = this.abMem[--this.regPC];
        this.printf("undefined opcode: %#04x at %#06x\n", b, this.regPC);
        this.halt();
    }

    /**
     * C1PCPU.init()
     *
     * This function operates on every HTML element of class "cpu", extracting the
     * JSON-encoded parameters for the C1PCPU constructor from the element's "data-value"
     * attribute, invoking the constructor to create a C1PCPU component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        var aeCPUs = Component.getElementsByClass(APPCLASS, "cpu");
        for (var iCPU=0; iCPU < aeCPUs.length; iCPU++) {
            var eCPU = aeCPUs[iCPU];
            var parmsCPU = Component.getComponentParms(eCPU);
            var cpu = new C1PCPU(parmsCPU);
            Component.bindComponentControls(cpu, eCPU, APPCLASS);
        }
    }
}

/*
 * Macro reference (from my original 1998 C source code, preserved in the comments below):
 *
 *      #define BYTE(a)  (abMem[(a) & 0xffff])
 *      #define WORD(a)  (*(word *)&BYTE(a))
 *      #define SBYTE(a) ((int)(char)BYTE(a))
 *      #define STACK(a) BYTE(((a) & 0xff)+0x100)
 *      #define M WORD(EA)
 *      #define ML BYTE(EA+0)
 *      #define MH BYTE(EA+1)
 *      #define A (aRegs[0].value)  // 8 bits
 *      #define X (aRegs[1].value)  // 8 bits
 *      #define Y (aRegs[2].value)  // 8 bits
 *      #define S (aRegs[3].value)  // 8 bits
 *      #define P (aRegs[4].value)  // 8 bits
 *      #define RN (aRegs[5].value) // 8 bits
 *      #define RZ (aRegs[6].value) // 8 bits
 *      #define RU (aRegs[7].value) // 8 bits
 *      #define RV (aRegs[8].value) // 16 bits
 *      #define RC (aRegs[9].value) // 16 bits
 *      #define EA (aRegs[10].value)// 16 bits
 *      #define LA (aRegs[11].value)// 16 bits
 *      #define PC (aRegs[12].value)// 16 bits
 *      #define EF (aRegs[13].value)// 8 bits
 *      #define C P0
 *      #define Z P1
 *      #define I P2
 *      #define D P3
 *      #define B P4
 *      #define V P6
 *      #define N P7
 *      #define W EF0
 *      #define LAZY_C (RCH0)
 *      #define SET_LAZY_C(b) (RCH0 = (b))
 *      #define LAZY_N (RN7)
 *      #define SET_LAZY_N(b) (RN7 = (b))
 *      #define SET_LAZY_NZ(v) (RN = RZ = (v))
 *      #define LAZY_Z ((byte)RZ == 0)
 *      #define SET_LAZY_Z(b) (RZ = !(b))
 *      #define LAZY_V ((((RVL ^ RU) ^ (RV >> 1)) & 0x80) != 0)
 *      #define SET_LAZY_V(b) (RV = 0, RU = ((b)? 0x80 : 0x00))
 *      #define SET_LAZY_OV(a,b,r) (RU = (a) ^ (b), RV = (r))
 */

/*
 * Initialize every CPU module on the page (as IF there's ever going to be more than one ;-))
 */
WebLib.onInit(C1PCPU.init);
