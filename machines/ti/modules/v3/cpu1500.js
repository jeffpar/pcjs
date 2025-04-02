/**
 * @fileoverview Simulates the instructions of a TMS-150x/TMC-150x CPU
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import CPU    from "../../../modules/v3/cpu.js";
import Device from "../../../modules/v3/device.js";
import LED    from "../../../modules/v3/led.js";
import Format from "../../../modules/v2/format.js";

/**
 * 64-bit Register
 *
 * @class Reg64
 * @unrestricted
 * @property {CPU1500} cpu
 * @property {Array.<number>} digits
 */
class Reg64 extends Device {
    /**
     * Reg64(cpu, id, fInternal)
     *
     * @this {Reg64}
     * @param {CPU1500} cpu
     * @param {string} id
     * @param {boolean} [fInternal]
     */
    constructor(cpu, id, fInternal)
    {
        super(cpu.idMachine, id);
        this.cpu = cpu;
        this.name = id;

        /**
         * Each Reg64 register contains 16 BCD/Hex digits, which we store as 16 independent 4-bit numbers,
         * where [0] is D0, aka DIGIT 0, and [15] is D15, aka DIGIT 15.
         */
        this.digits = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        /**
         * Automatically add direct bindings for this new register and all its digits to the caller's bindings.
         */
        if (!fInternal) {
            let bindings = [];
            let name = "reg" + this.name;
            bindings.push(name);
            cpu.regMap[name] = [this, -1];
            for (let d = 0; d < this.digits.length; d++) {
                name = this.sprintf("reg%s-%02d", this.name, d);
                bindings.push(name);
                cpu.regMap[name] = [this, d];
            }
            cpu.addBindings(bindings);
        }
    }

    /**
     * add(reg, regSrc, range, base)
     *
     * @this {Reg64}
     * @param {Reg64} reg
     * @param {Reg64} regSrc
     * @param {Array.<number>} range
     * @param {number} base
     */
    add(reg, regSrc, range, base)
    {
        let carry = 0;
        for (let i = range[0], j = range[1]; i <= j; i++) {
            this.digits[i] = reg.digits[i] + regSrc.digits[i] + carry;
            carry = 0;
            if (this.digits[i] >= base) {
                this.digits[i] -= base;
                carry = 1;
            }
        }
        if (carry) this.cpu.fCOND = true;
        this.updateR5(range);
    }

    /**
     * get()
     *
     * @this {Reg64}
     * @returns {Array}
     */
    get()
    {
        return this.digits;
    }

    /**
     * init(value, range)
     *
     * @this {Reg64}
     * @param {number} value
     * @param {Array.<number>} range
     * @returns {Reg64}
     */
    init(value, range = [0,15])
    {
        for (let i = 0; i < this.digits.length; i++) {
            this.digits[i] = 0;
        }
        for (let i = range[0], j = range[1]; i <= j; i++) {
            this.digits[i] = value & 0xf;
            value >>>= 4;
        }
        return this;
    }

    /**
     * move(regSrc, range, base)
     *
     * This function has been updated to perform the same "BCD Corrector" logic as add(), per these observations from Claus Buchholz:
     *
     *      "From patent 4,125,867 it sounds like all register transfers go through the ALU, and the "BCD corrector" is part of the ALU.
     *      This quote from column 26 line 25 implies it:
     *
     *          In addition during a store operation the output from one register is applied to the arithmetic unit 40,
     *          the output from the other being inhibited by the STORE signal; thus, the adder does not alter the number being
     *          inputted and outputs the data word back to the other register, thereby storing the contents of one register in both registers.
     *
     *      That quote doesn't mention BCD correction, but other text does. I'm not entirely sure that applies to digit shifts as well
     *      but I wouldn't doubt it."
     *
     * TODO: Determine if shl() and shr() should be updated similarly, and whether this function should update fCOND like add() does
     * (in which case, move() could simply be replaced with a call to add() using an internal zero-constant register).
     *
     * @this {Reg64}
     * @param {Reg64} regSrc
     * @param {Array.<number>} range
     * @param {number} base
     */
    move(regSrc, range, base)
    {
        let carry = 0;
        for (let i = range[0], j = range[1]; i <= j; i++) {
            this.digits[i] = regSrc.digits[i] + carry;
            carry = 0;
            if (this.digits[i] >= base) {
                this.digits[i] -= base;
                carry = 1;
            }
        }
        regSrc.updateR5(range);
    }

    /**
     * set(digits)
     *
     * @this {Reg64}
     * @param {Array} digits
     */
    set(digits)
    {
        if (!digits || digits.length != this.digits.length) return;
        for (let i = 0; i < this.digits.length; i++) this.digits[i] = digits[i];
    }

    /**
     * shl(reg, range)
     *
     * @this {Reg64}
     * @param {Reg64} reg
     * @param {Array.<number>} range
     */
    shl(reg, range)
    {
        let i, j;
        for (i = range[1], j = range[0]; i > j; i--) {
            this.digits[i] = reg.digits[i-1];
        }
        this.digits[i] = 0;
        this.updateR5(range);
    }

    /**
     * shr(reg, range)
     *
     * @this {Reg64}
     * @param {Reg64} reg
     * @param {Array.<number>} range
     */
    shr(reg, range)
    {
        let i, j;
        for (i = range[0], j = range[1]; i < j; i++) {
            this.digits[i] = reg.digits[i+1];
        }
        this.digits[i] = 0;
        this.updateR5(range);
    }

    /**
     * store(reg)
     *
     * STORE is similar to MOVE, but all digits are stored (ie, no mask is involved), and R5 is not affected.
     *
     * @this {Reg64}
     * @param {Reg64} reg
     */
    store(reg)
    {
        for (let i = 0, j = this.digits.length; i < j; i++) {
            this.digits[i] = reg.digits[i];
        }
    }

    /**
     * sub(reg, regSrc, range, base)
     *
     * @this {Reg64}
     * @param {Reg64} reg
     * @param {Reg64} regSrc
     * @param {Array.<number>} range
     * @param {number} base
     */
    sub(reg, regSrc, range, base)
    {
        let carry = 0;
        for (let i = range[0], j = range[1]; i <= j; i++) {
            this.digits[i] = reg.digits[i] - regSrc.digits[i] - carry;
            carry = 0;
            if (this.digits[i] < 0) {
                this.digits[i] += base;
                carry = 1;
            }
        }
        if (carry) this.cpu.fCOND = true;
        this.updateR5(range);
    }

    /**
     * toString(fSpaces)
     *
     * @this {Reg64}
     * @param {boolean} [fSpaces]
     * @returns {string}
     */
    toString(fSpaces = false)
    {
        let s = this.idDevice + '=';
        if (fSpaces && s.length < 3) s += ' ';
        for (let i = this.digits.length - 1; i >= 0; i--) {
            if (fSpaces) {
                s += Format.HexUpperCase[this.digits[i]];
            } else {
                s += Format.HexLowerCase[this.digits[i]] + ((i % 4)? '' : ' ');
            }
        }
        return s;
    }

    /**
     * updateR5(range)
     *
     * @this {Reg64}
     */
    updateR5(range)
    {
        this.cpu.regR5 = this.digits[range[0]];
        this.assert(!(this.cpu.regR5 & ~0xf));
        if (range[0] < range[1]) {
            this.cpu.regR5 |= this.digits[range[0]+1] << 4;
            this.assert(!(this.cpu.regR5 & ~0xff));
        }
    }

    /**
     * xchg(regSrc, range)
     *
     * @this {Reg64}
     * @param {Reg64} regSrc
     * @param {Array.<number>} range
     */
    xchg(regSrc, range)
    {
        for (let i = range[0], j = range[1]; i <= j; i++) {
            let d = this.digits[i];
            this.digits[i] = regSrc.digits[i];
            regSrc.digits[i] = d;
        }
        regSrc.updateR5(range);
    }
}

 /**
  * Since we currently don't use an external debugger, we have to define a dummy Debugger type.
  *
  * @typedef {Object} Debugger
  */

/**
 * TMS-150x Calculator CPU
 *
 * Emulates various TMS ("Texas Mos Standard") and TMC ("Texas Mos Custom") CPUs.  The 'type' property of
 * the config object should contain one of the following strings:
 *
 *      TI-57: "TMS-1501" or "TMC-1501" (or simply "1501")
 *      TI-55: "TMS-1503" or "TMC-1503" (or simply "1503")
 *
 * This CPU contains lots of small discrete devices, most of which will be emulated either within this
 * class or within another small container class in the same file, because most of them are either very simple
 * or have unique quirks, so it's not clear there's much reusability.
 *
 * One exception is the ROM, since ROMs are a very common device with very similar characteristics.  Since
 * the Machine class guarantees that the CPU class is initialized after the ROM class, we can look it up in
 * the constructor.
 *
 * @class CPU1500
 * @unrestricted
 * @property {Array.<Reg64>} regsO (operational registers A-D)
 * @property {Reg64} regA (alias for regsO[0])
 * @property {Reg64} regB (alias for regsO[1])
 * @property {Reg64} regC (alias for regsO[2])
 * @property {Reg64} regD (alias for regsO[3])
 * @property {Array.<Reg64>} regsX (storage registers X0-X7)
 * @property {Array.<Reg64>} regsY (storage registers Y0-Y7)
 * @property {Reg64} regSupp (alternate register used when the destination must be suppressed)
 * @property {Reg64} regTemp (temporary register used to supply constants or other internal values)
 * @property {number} base (10 or 16)
 * @property {boolean} fCOND (true when a carry has been detected)
 * @property {number} regRAB
 * @property {number} regR5 (least significant masked digit(s) from last arithmetic result)
 * @property {number} regPC (program counter: address of next instruction to decode)
 * @property {number} regKey (current key status, propagated to regR5 at appropriate intervals)
 * @property {Array.<number>} stack (3-level address stack; managed by push() and pop())
 * @property {number} nCyclesClocked
 * @property {Input} input
 * @property {LED} led
 * @property {ROM} rom
 * @property {Time} time
 * @property {number} addrPrev
 * @property {number} addrStop
 * @property {Object} breakConditions
 * @property {number} nStringFormat
 * @property {number} type (one of the CPU1500.TYPE values)
 */
export default class CPU1500 extends CPU {
    /**
     * CPU1500(idMachine, idDevice, config)
     *
     * Defines the basic elements of the TMS-150x CPU, as illustrated by U.S. Patent No. 4,125,901, Fig. 3 (p. 4)
     *
     * @this {CPU1500}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        let sType = this.getDefaultString('type', "1501");
        this.type = Number.parseInt(sType.slice(-4), 10);

        this.regMap = {};

        /**
         * Four (4) Operational Registers (A-D)
         */
        this.regsO = new Array(4);
        for (let i = 0; i < 4; i++) {
            this.regsO[i] = new Reg64(this, String.fromCharCode(0x41+i));
        }

        /**
         * Aliases for each of the Operational Registers, since some instructions use hard-coded registers,
         * rather than calculating a register index (0-3).
         */
        this.regA = this.regsO[0];
        this.regB = this.regsO[1];
        this.regC = this.regsO[2];
        this.regD = this.regsO[3];

        /**
         * Eight (8) Storage Registers (X0-X7)
         */
        this.regsX = new Array(8);
        for (let i = 0; i < 8; i++) {
            this.regsX[i] = new Reg64(this, "X" + i);
        }

        /**
         * Eight (8) Storage Registers (Y0-Y7)
         */
        this.regsY = new Array(8);
        for (let i = 0; i < 8; i++) {
            this.regsY[i] = new Reg64(this, "Y" + i);
        }

        this.regSupp = new Reg64(this, "Supp", true);
        this.regTemp = new Reg64(this, "Temp", true);

        this.base = 10;
        this.fCOND = false;

        /**
         * RAB (Register Address Buffer) is a 3-bit register "selectively loadable by the I4-I6 bits of an
         * instruction word" and "also selectively loadable from the three least significant bits of the number
         * stored in R5 register".
         */
        this.regRAB = 0;

        /**
         * R5 is "an eight bit shift register which may be selectively loaded from either the serial output from
         * arithmetic unit" or "may be loaded on lines KR1-3 and KR5-7 via gates from keyboard logic (at which
         * times the MSB of each digit in Register R5 is loaded with a zero via gates according to the keyboard code
         * code indicated in Table II)".
         */
        this.regR5 = 0;

        /**
         * The "Output Register" is twelve bit register, one bit for each digit of the display.  This essentially
         * provides column information for the LED display, while the next register (regScanGen) provides row
         * information.
         *
         * However, this is only necessary if we decide to simulate the internal operation of the Display Decoder
         * and Keyboard Scanner.
         *
         * Refer to patent Fig. 11c (p. 28)
         */
        // this.regOut = 0;

        /**
         * The "Scan Generator Counter" is a 3-bit register.  It is updated once each instruction cycle.
         * It "does not count sequentially, but during eight instruction cycle provides the three bit binary
         * representations of zero through seven."  Here's the sequence from "Reference A" of Fig. 11e:
         *
         *                 DECODE    DISP     KBD
         *      W   V   U     SEG     SEG    SCAN    HOLD
         *      ---------  ------    ----    ----    ----
         *      1   1   1       D       -       -       1
         *      1   1   0       A       D     KS6       1
         *      1   0   1       B       A     KS5       1
         *      0   1   0       C       B     KS2       1
         *      1   0   0       E       C     KS4       1
         *      0   0   0       F       E     KS0       1
         *      0   0   1       G       F     KS1       1
         *      0   1   1       P       G     KS3       0
         *      ---------  ------    ----    ----    ----
         *      1   1   1       D       P     KS7       1
         *      1   1   0       A       D     KS6       1
         *      ...
         *
         * However, this is only necessary if we decide to simulate the internal operation of the Display Decoder
         * and Keyboard Scanner.
         *
         * Refer to patent Fig. 11e (p. 30)
         */
        // this.regScanGen = 0;

        /**
         * The "Segment/Keyboard Scan" is an 8-bit register "arranged as a ring counter for shifting a logical zero
         * to a different stage during each instruction cycle....  [It is] further interconnected with the RESET signal
         * for inserting a logical one into all stages of the counter."  The outputs from the stages are connected to
         * SEG D, followed by SEG A, SEG B, SEG C, SEG E, SEG F, SEG G, and SEG P.
         *
         * However, this is only necessary if we decide to simulate the internal operation of the Display Decoder
         * and Keyboard Scanner.
         *
         * Refer to patent Fig. 11b (p. 27)
         */
        // this.regSegKbdScan = 0xff;

        /**
         * The "State Time Generator" is represented by a 5-bit register that contains values 00000b through 11111b
         * for each of the 32 state times that occur during a single instruction cycle.  And since each "state time"
         * consists of four clock pulses, designated Φ1, P1, Φ2, and P2, we keep track of which pulse we're on, too.
         *
         * However, these are only necessary if we decide to simulate the internal operation of the Display Decoder
         * and Keyboard Scanner.
         *
         * Refer to patent Fig. 11f (p. 31)
         */
        // this.regStateTime = 0;
        // this.regPulseTime = 0;

        /**
         * The "Program Counter" (regPC) is an 11-bit register that automatically increments unless a HOLD signal
         * is applied, effectively locking execution on a single instruction.
         *
         * regPC is a standard register that has already been initialized by the superclass.
         */
        // this.regPC = 0;

        /**
         * regPCLast is a non-standard register that simply snapshots the PC at the start of every
         * instruction; this is useful not only for CPUs that need to support instruction restartability,
         * but also for diagnostic/debugging purposes.
         *
         * regPCLast is a standard register that has already been initialized by the superclass.
         */
        // this.regPCLast = this.regPC;

        /**
         * If non-zero, a key is being pressed.  Bits 0-3 are the row (0-based) and bits 4-7 are the col (1-based).
         */
        this.regKey = 0;

        /**
         * The "Subroutine Stack".  "When an unconditional branch instruction is decoded by branch logic 32b, the
         * CALL signal goes to zero permitting the present ROM address plus one to be loaded into subroutine stack
         * register 33a....  Addresses previously loaded into subroutine stack/registers 33a and 33b are shifted
         * to registers 33b and 33c."
         *
         * We initialize it with "guard values" (-1) to help detect the presence of invalid data, and to catch stack
         * overflow/underflow errors.
         *
         * Refer to patent Fig. 7a (p. 9)
         */
        this.stack = [-1, -1, -1];

        /**
         * Get access to the Input device, so we can add our click functions.
         */
        this.input = /** @type {Input} */ (this.findDevice(this.config['input']));
        this.input.addInput(this.onInput.bind(this));

        /**
         * Get access to the LED device, so we can update its display.
         */
        this.led = /** @type {LED} */ (this.findDevice(this.config['output'], false));

        /**
         * Get access to the Bus device, so we have access to the address space.
         * NOTE: We're kinda breaking the rules about searching for these devices by class,
         * simply because we know that this particular machine has only one Bus and one ROM.
         */
        this.bus = /** @type {Bus} */ (this.findDeviceByClass("Bus"));
        this.rom = /** @type {ROM} */ (this.findDeviceByClass("ROM"));

        /**
         * To add support for indicators like "2nd" and "INV", I use a set of flags to reflect
         * the state of the external indicator.  They are initially undefined and will be updated
         * by updateIndicators() whenever the internal and external states differ.
         */
        this.f2nd = this.fINV = this.angleMode = undefined;

        /**
         * The following set of properties are all debugger-related; see onCommand().
         */
        this.addrPrev = -1;
        this.addrStop = -1;
        this.breakConditions = {};
        this.nStringFormat = CPU1500.SFORMAT.DEFAULT;
        this.addHandler(CPU1500.HANDLER.COMMAND, this.onCommand.bind(this));
    }

    /**
     * checkBreakCondition(c)
     *
     * @this {CPU1500}
     * @param {string} c
     * @returns {boolean}
     */
    checkBreakCondition(c)
    {
        if (this.breakConditions[c]) {
            this.breakConditions[c] = false;
            this.printf("break on %s\n", CPU1500.BREAK[c]);
            this.time.stop();
            return true;
        }
        return false;
    }

    /**
     * clearDisplays()
     *
     * There are certain events (eg, power off, reset) where it is wise to clear all associated displays,
     * such as the LED display, the ROM activity array (if any), and assorted calculator indicators.
     *
     * @this {CPU1500}
     */
    clearDisplays()
    {
        if (this.led) this.led.clearBuffer(true);
        if (this.rom) this.rom.clearArray();
        this.updateIndicators(false);
    }

    /**
     * execute(nCycles)
     *
     * NOTE: TI patents imply that the TI-57 would have a standard cycle time of 0.625us, which translates to
     * 1,600,000 cycles per second.  However, my crude tests with a real device suggest that the TI-57 actually
     * ran at around 40% of that speed, which is why you'll see all my configuration files specifying 650,000
     * cycles per second instead.  But, for purposes of the following discussion, we'll continue to assume a cycle
     * time of 0.625us.
     *
     * Every set of four cycles is designated a "state time".  Within a single state time (2.5us), the four cycles
     * are designated Φ1, P1, Φ2, and P2.  Moreover, one state time is required to transfer 2 bits from a data word
     * register.  Since a data word consists of 16 BCD digits (ie, 64 bits), 32 state times (80us) are required to
     * "clock" all the bits from one register to another.  This total time is referred to as an instruction cycle.
     *
     * Note that some instructions (ie, the DISP instruction) slow the delivery of cycles, such that one state time
     * is 10us instead of 2.5us, and therefore the entire instruction cycle will take 320us instead of 80us.
     *
     * We're currently simulating a full 32 "state times" (128 cycles aka CPU1500.OP_CYCLES) per instruction, since
     * we don't perform discrete simulation of the Display Decoder/Keyboard Scanner circuitry.  See opDISP() for
     * an example of an operation that imposes additional cycle overhead.
     *
     * @this {CPU1500}
     * @param {number} nCycles
     */
    execute(nCycles)
    {
        while (this.nCyclesRemain > 0) {
            if (this.addrStop == this.regPC) {
                this.addrStop = -1;
                this.printf("break\n");
                this.time.stop();
                break;
            }
            let opcode = this.bus.readData(this.regPC);
            let addr = this.regPCLast = this.regPC;
            this.regPC = (addr + 1) & this.bus.addrLimit;
            if (opcode == undefined || !this.decode(opcode, addr)) {
                this.regPC = this.regPCLast;
                this.printf("unimplemented opcode\n");
                this.time.stop();
                break;
            }
            this.nCyclesRemain -= CPU1500.OP_CYCLES;
        }
        if (nCycles <= 0) {
            let cpu = this;
            this.time.doOutside(function clockOutside() {
                cpu.rom.drawArray();
                cpu.print(cpu.toString());
            });
        }
    }

    /**
     * stopClock()
     *
     * @this {CPU1500}
     */
    stopClock()
    {
        this.nCyclesRemain = 0;
    }

    /**
     * getClock()
     *
     * Returns the number of cycles executed so far during the current burst.
     *
     * @this {CPU1500}
     * @returns {number}
     */
    getClock()
    {
        return this.nCyclesStart - this.nCyclesRemain;
    }

    /**
     * decode(opcode, addr)
     *
     * Most operations are performed inline, since this isn't a super complex instruction set, but
     * a few are separated into their own handlers (eg, opDISP).
     *
     * @this {CPU1500}
     * @param {number} opcode (opcode)
     * @param {number} addr (of the opcode)
     * @returns {boolean} (true if opcode successfully decoded, false if unrecognized or unsupported)
     */
    decode(opcode, addr)
    {
        if (opcode & 0x1000) {
            if (opcode & 0x0800) {  // BRC/BRNC
                /**
                 * As TI patent 4078251 states:
                 *
                 *      There being only ten bits in the address for the “branch on condition” instruction, when the
                 *      branch is executed only the ten least significant bits are loaded into the 11 bit address register
                 *      of program counter 32a. The most significant bit in the program counter remains unchanged.
                 */
                if (!!(opcode & 0x0400) == this.fCOND) {
                    this.regPC = (this.regPC & 0x0400) | (opcode & 0x03FF);
                }
            } else {                // CALL
                /**
                 * As TI patent 4078251 states:
                 *
                 *      Since the “branch unconditionally” address contains 11 bits and since the program counter 32a
                 *      contains 11 bits, the “branch unconditionally” instruction can cause the branch anywhere within ROM.
                 */
                this.push(this.regPC);
                this.regPC = opcode & 0x07FF;
            }
            this.fCOND = false;
            return true;
        }

        let range, regSrc, regResult, iOp, base;
        let j, k, l, n, d, b, mask = opcode & CPU1500.IW_MF.MASK;

        switch(mask) {
        case CPU1500.IW_MF.MMSD:    // 0x0000: Mantissa Most Significant Digit (D12)
        case CPU1500.IW_MF.ALL:     // 0x0100: (D0-D15)
        case CPU1500.IW_MF.MANT:    // 0x0200: Mantissa (D2-D12)
        case CPU1500.IW_MF.MAEX:    // 0x0300: Mantissa and Exponent (D0-D12)
        case CPU1500.IW_MF.LLSD:    // 0x0400: Mantissa Least Significant Digit (D2)
        case CPU1500.IW_MF.EXP:     // 0x0500: Exponent (D0-D1)
        case CPU1500.IW_MF.FMAEX:   // 0x0700: Flag and Mantissa and Exponent (D0-D13)
        case CPU1500.IW_MF.D14:     // 0x0800: (D14)
        case CPU1500.IW_MF.FLAG:    // 0x0900: (D13-D15)
        case CPU1500.IW_MF.DIGIT:   // 0x0a00: (D14-D15)
        case CPU1500.IW_MF.D13:     // 0x0d00: (D13)
        case CPU1500.IW_MF.D15:     // 0x0f00: (D15)
            range = CPU1500.RANGE[mask];
            this.assert(range);

            j = (opcode & CPU1500.IW_MF.J_MASK) >> CPU1500.IW_MF.J_SHIFT;
            k = (opcode & CPU1500.IW_MF.K_MASK) >> CPU1500.IW_MF.K_SHIFT;
            l = (opcode & CPU1500.IW_MF.L_MASK) >> CPU1500.IW_MF.L_SHIFT;
            n = (opcode & CPU1500.IW_MF.N_MASK);
            iOp = (n? CPU1500.OP.SUB : CPU1500.OP.ADD);
            base = (opcode >= CPU1500.IW_MF.D14? 16 : this.base);

            switch(k) {
            case 0:
            case 1:
            case 2:
            case 3:
                regSrc = this.regsO[k];
                break;
            case 4:
                regSrc = this.regTemp.init(1, range);
                break;
            case 5:
                iOp = (n? CPU1500.OP.SHR : CPU1500.OP.SHL);
                break;
            case 6:
                regSrc = this.regTemp.init(this.regR5 & 0xf, range);
                break;
            case 7:
                regSrc = this.regTemp.init(this.regR5 & 0xff, range);
                break;
            }

            switch(l) {
            case 0:
                regResult = this.regsO[j];
                break;
            case 1:
                regResult = (k < 4? this.regsO[k] : undefined);
                break;
            case 2:
                regResult = (k < 5? this.regSupp : (k == 5? this.regsO[j] : undefined));
                break;
            case 3:
                if (!n) {
                    this.assert(!j && k < 4);
                    this.regA.xchg(regSrc, range);
                } else {
                    this.assert(k != 5);
                    this.regsO[j].move(regSrc, range, base);
                }
                return true;
            }

            if (!regResult) break;

            switch(iOp) {
            case CPU1500.OP.ADD:
                regResult.add(this.regsO[j], regSrc, range, base);
                break;
            case CPU1500.OP.SUB:
                regResult.sub(this.regsO[j], regSrc, range, base);
                break;
            case CPU1500.OP.SHL:
                regResult.shl(this.regsO[j], range);
                break;
            case CPU1500.OP.SHR:
                regResult.shr(this.regsO[j], range);
                break;
            }
            return true;

        case CPU1500.IW_MF.FF:      // 0x0c00: (used for flag operations)
            j = (opcode & CPU1500.IW_FF.J_MASK) >> CPU1500.IW_FF.J_SHIFT;
            d = (opcode & CPU1500.IW_FF.D_MASK) >> CPU1500.IW_FF.D_SHIFT;
            b = 1 << ((opcode & CPU1500.IW_FF.B_MASK) >> CPU1500.IW_FF.B_SHIFT);
            if (!d) break;
            d += 12;
            /**
             * For the following bit operations (SET, RESET, TEST, and TOGGLE, displayed by toInstruction()
             * as "SET", "CLR", "TST", and "NOT") are rather trivial, so I didn't bother adding Reg64 methods
             * for them (eg, setBit, resetBit, testBit, toggleBit).
             */
            switch(opcode & CPU1500.IW_FF.MASK) {
            case CPU1500.IW_FF.SET:
                this.regsO[j].digits[d] |= b;
                break;
            case CPU1500.IW_FF.RESET:
                this.regsO[j].digits[d] &= ~b;
                break;
            case CPU1500.IW_FF.TEST:
                if (this.regsO[j].digits[d] & b) this.fCOND = true;
                break;
            case CPU1500.IW_FF.TOGGLE:
                this.regsO[j].digits[d] ^= b;
                break;
            }
            return true;

        case CPU1500.IW_MF.PF:      // 0x0e00: (used for misc operations)
            switch(opcode & CPU1500.IW_PF.MASK) {
            case CPU1500.IW_PF.STYA:        // 0x0000: Contents of storage register Y defined by RAB loaded into operational register A (Yn -> A)
                this.regA.store(this.regsY[this.regRAB]);
                break;
            case CPU1500.IW_PF.RABI:        // 0x0001: Bits 4-6 of instruction are stored in RAB
                this.regRAB = (opcode >> 4) & 0x7;
                break;
            case CPU1500.IW_PF.BRR5:        // 0x0002: Branch to R5
                /**
                 * TODO: Determine whether this type of BRANCH should set fCOND to false like other branches do
                 */
                this.regPC = this.regR5;
                break;
            case CPU1500.IW_PF.RET:         // 0x0003: Return
                this.fCOND = false;
                this.regPC = this.pop();
                break;
            case CPU1500.IW_PF.STAX:        // 0x0004: Contents of operational register A loaded into storage register X defined by RAB (A -> Xn)
                this.regsX[this.regRAB].store(this.regA);
                break;
            case CPU1500.IW_PF.STXA:        // 0x0005: Contents of storage register X defined by RAB loaded into operational register A (Xn -> A)
                this.regA.store(this.regsX[this.regRAB]);
                break;
            case CPU1500.IW_PF.STAY:        // 0x0006: Contents of operational register A loaded into storage register Y defined by RAB (A -> Yn)
                this.regsY[this.regRAB].store(this.regA);
                break;
            case CPU1500.IW_PF.DISP:        // 0x0007: registers A and B are output to the Display Decoder and the Keyboard is scanned
                return this.opDISP();
            case CPU1500.IW_PF.BCDS:        // 0x0008: BCD set: enables BCD corrector in arithmetic unit
                this.base = 10;
                break;
            case CPU1500.IW_PF.BCDR:        // 0x0009: BCD reset: disables BCD corrector in arithmetic unit (which then functions as hexadecimal)
                this.base = 16;
                break;
            case CPU1500.IW_PF.RABR5:       // 0x000A: LSD of R5 (3 bits) is stored in RAB
                this.regRAB = this.regR5 & 0x7;
                break;
            default:
                return false;
            }
            return true;

        case CPU1500.IW_MF.RES1:    // 0x0600: (reserved)
        case CPU1500.IW_MF.RES2:    // 0x0b00: (reserved)
        default:
            break;
        }
        return false;
    }

    /**
     * loadState(state)
     *
     * If any saved values don't match (possibly overridden), abandon the given state and return false.
     *
     * @this {CPU1500}
     * @param {Array|Object} state
     * @returns {boolean}
     */
    loadState(state)
    {
        let stateCPU = state['stateCPU'] || state[0];
        if (!stateCPU || !stateCPU.length) {
            this.printf("invalid saved state\n");
            return false;
        }
        let version = stateCPU.shift();
        if ((version|0) !== (+CPU1500.VERSION|0)) {
            this.printf("saved state version mismatch: %3.2f\n", version);
            return false;
        }
        try {
            this.regsO.forEach((reg) => reg.set(stateCPU.shift()));
            this.regsX.forEach((reg) => reg.set(stateCPU.shift()));
            this.regsY.forEach((reg) => reg.set(stateCPU.shift()));
            this.regSupp.set(stateCPU.shift());
            this.regTemp.set(stateCPU.shift());
            this.base = stateCPU.shift();
            this.fCOND = stateCPU.shift();
            this.regRAB = stateCPU.shift();
            this.regR5 = stateCPU.shift();
            this.regPC = stateCPU.shift();
            this.stack = stateCPU.shift();
            this.regKey = stateCPU.shift();
        } catch(err) {
            this.printf("CPU state error: %s\n", err.message);
            return false;
        }
        let stateROM = state['stateROM'] || state[1];
        if (stateROM && this.rom) {
            if (!this.rom.loadState(stateROM)) {
                return false;
            }
        }
        return true;
    }

    /**
     * onCommand(aTokens)
     *
     * Processes commands for our "mini-debugger".
     *
     * @this {CPU1500}
     * @param {Array.<string>} aTokens
     * @returns {string|undefined}
     */
    onCommand(aTokens)
    {
        let result = "";
        let c, condition, count = 0, values = [];
        let s = aTokens[1];
        let addr = Number.parseInt(aTokens[2], 16);
        if (isNaN(addr)) addr = -1;
        let nValues = Number.parseInt(aTokens[3], 10) || 8;

        for (let i = 3; i < aTokens.length; i++) {
            values.push(Number.parseInt(aTokens[i], 16));
        }

        this.nStringFormat = CPU1500.SFORMAT.DEFAULT;

        switch(s[0]) {
        case 'b':
            c = s.substr(1);
            if (c == 'l') {
                for (c in CPU1500.BREAK) {
                    condition = CPU1500.BREAK[c];
                    result += "break on " + condition + " (b" + c + "): " + (this.breakConditions[c] || false) + '\n';
                }
                break;
            }
            condition = CPU1500.BREAK[c];
            if (condition) {
                this.breakConditions[c] = !this.breakConditions[c];
                result = "break on " + condition + " (b" + c + "): " + this.breakConditions[c];
            } else {
                if (c) result = "unrecognized break option '" + c + "'";
            }
            break;

        case 'e':
            for (let i = 0; i < values.length; i++) {
                /**
                 * We use the readDirect() and writeDirect() functions, so that reads won't affect the
                 * ROM LED array (if any) and writes will be allowed (since ROM is normally unwritable).
                 */
                let prev = this.bus.readDirect(addr);
                if (prev == undefined) break;
                this.bus.writeDirect(addr, values[i]);
                result += this.sprintf("%#06x: %#06x changed to %#06x\n", addr, prev, values[i]);
                count++;
                addr++;
            }
            result += this.sprintf("%d locations updated\n", count);
            break;

        case 'g':
            if (this.time.start()) {
                this.addrStop = addr;
            } else {
                result = "already started\n";
            }
            break;

        case 'h':
            if (!this.time.stop()) result = "already stopped\n";
            break;

        case 't':
            if (s[1] == 'c') this.nStringFormat = CPU1500.SFORMAT.COMPACT;
            nValues = Number.parseInt(aTokens[2], 10) || 1;
            this.time.onStep(nValues);
            break;

        case 'r':
            if (s[1] == 'c') this.nStringFormat = CPU1500.SFORMAT.COMPACT;
            this.setRegister(s.substr(1), addr);
            result += this.toString(s[1]);
            break;

        case 'u':
            addr = (addr >= 0? addr : (this.addrPrev >= 0? this.addrPrev : this.regPC));
            while (nValues--) {
                let opcode = this.rom && this.bus.readDirect(addr);
                if (opcode == undefined) break;
                result += this.toInstruction(addr++, opcode);
            }
            this.addrPrev = addr;
            break;

        case '?':
            result = "additional commands:\n";
            CPU1500.COMMANDS.forEach((cmd) => {result += cmd + '\n';});
            break;

        default:
            if (aTokens[0]) {
                result = "unrecognized command '" + aTokens[0] + "' (try '?')\n";
            }
            break;
        }
        return result;
    }

    /**
     * onInput(col, row)
     *
     * Called by the Input device to provide notification of key presses and releases.
     *
     * Converts a logical (col,row), where the top left keyboard position is (0,0), into an 8-bit physical
     * location value, where bits 0-3 are the row (0-based) and bits 4-7 are the col (1-based).  Moreover,
     * if either col or row is negative, then all bits are cleared.
     *
     * @this {CPU1500}
     * @param {number} col
     * @param {number} row
     */
    onInput(col, row)
    {
        let b = 0;
        if (col >= 0 && row >= 0) {
            this.assert(col < 5 && row < 8);
            b = row | ((col + 1) << 4);
        }
        this.regKey = b;
    }

    /**
     * onLoad(state)
     *
     * Automatically called by the Machine device if the machine's 'autoSave' property is true.
     *
     * @this {CPU1500}
     * @param {Array|Object} state
     * @returns {boolean}
     */
    onLoad(state)
    {
        return state && this.loadState(state)? true : false;
    }

    /**
     * onPower(on)
     *
     * Called by the Machine device to provide notification of a power event.
     *
     * @this {CPU1500}
     * @param {boolean} on (true to power on, false to power off)
     */
    onPower(on)
    {
        if (on) {
            this.time.start();
        } else {
            this.time.stop();
            this.clearDisplays();
        }
    }

    /**
     * onReset()
     *
     * Called by the Machine device to provide notification of a reset event.
     *
     * @this {CPU1500}
     */
    onReset()
    {
        this.printf("reset\n");
        this.regPC = 0;
        this.clearDisplays();
        if (!this.time.isRunning()) this.print(this.toString());
    }

    /**
     * onSave(state)
     *
     * Automatically called by the Machine device before all other devices have been powered down (eg, during
     * a page unload event).
     *
     * @this {CPU1500}
     * @param {Array} state
     */
    onSave(state)
    {
        this.saveState(state);
    }

    /**
     * onUpdate(fTransition)
     *
     * Enumerate all bindings and update their values.
     *
     * Called by Time's update() function whenever 1) its YIELDS_PER_UPDATE threshold is reached
     * (default is twice per second), 2) a step() operation has just finished (ie, the device is being
     * single-stepped), and 3) a start() or stop() transition has occurred.
     *
     * @this {CPU1500}
     * @param {boolean} [fTransition]
     */
    onUpdate(fTransition)
    {
        for (let binding in this.bindings) {
            let regMap = this.regMap[binding];
            if (regMap) {
                let sValue;
                let reg = regMap[0];
                let digit = regMap[1];
                if (digit < 0) {
                    sValue = reg.toString();
                } else {
                    sValue = Format.HexUpperCase[reg.digits[digit]];
                }
                this.setBindingText(binding, sValue);
            }
        }
        if (fTransition && !this.time.isRunning()) {
            this.rom.drawArray();
            this.print(this.toString());
        }
    }

    /**
     * opDISP()
     *
     * Handles the DISP opcode.  The following details/tables are from the TI patents:
     *
     *      Register A and Register B are outputted to the display decoder and the keyboard is scanned.
     *      A closed keyboard switch loads K5 and sets condition latch.
     *
     *      Display decoder receives a data representing numerals to be displayed from operational register A.
     *
     *      Display decoder is also responsive to the data from operational register B, which indicates where
     *      the decimal point is to be displayed among the numerals, whether minus signs are to be provided,
     *      and which digits are to be blanked, according to the codes listed in Table III.
     *
     *      TABLE II
     *
     *          Register R5
     *          --------------------------------
     *             7   6   5   4   3   2   1   0
     *           KR8 KR7 KR6 KR5 KR4 KR3 KR2 KR1
     *
     *            K             KS (Keyboard Line Actuated)
     *          -------------------------------------------
     *           001            K1
     *           010            K2
     *           011            K3
     *           100            K4
     *           101            K5
     *
     *            K             KS (Segment Scan Line Actuated)
     *          -----------------------------------------------
     *           000            KS0     (SEG E)
     *           001            KS1     (SEG F)
     *           010            KS2     (SEG B)
     *           011            KS3     (SEG G)
     *           100            KS4     (SEG C)
     *           101            KS5     (SEG A)
     *           110            KS6     (SEG D/D12)
     *
     *      TABLE III
     *
     *          Register B
     *          Control Code    Function
     *          ------------    ------------------------------------------------------------
     *           1XXX           Display digit is blanked in the corresponding digit position
     *           0XX1           Turns on minus sign (Segment G) in corresponding digit position
     *           XX1X           Turns on decimal point and digit specified by register A in corresponding digit position
     *           0XX0           Turns on digit specified by Register A in corresponding digit position
     *
     * @this {CPU1500}
     * @returns {boolean} (true to indicate the opcode was successfully decoded)
     */
    opDISP()
    {
        this.checkBreakCondition('o');

        if (this.led) {
            for (let col = 0, iDigit = 11; iDigit >= 0; col++, iDigit--) {
                let ch;
                if (this.regB.digits[iDigit] & 0x8) {
                    ch = ' ';
                }
                else if (this.regB.digits[iDigit] & 0x1) {
                    ch = '-';
                }
                else {
                    ch = Format.HexUpperCase[this.regA.digits[iDigit]];
                }
                if (this.led.setLEDState(col, 0, ch, (this.regB.digits[iDigit] & 0x2)? LED.FLAGS.PERIOD : 0)) {
                    this.checkBreakCondition('om');
                }
            }
            this.updateIndicators();
        }

        /**
         * The TI patents indicate that DISP operations slow the clock by a factor of 4, and on top of
         * that, the display scan generator uses a HOLD signal to prevent the Program Counter from being
         * incremented while it cycles through all 8 possible segments for all digits, so the total delay
         * imposed by DISP is a factor of 32.  Since every instruction already accounts for OP_CYCLES once,
         * I need to account for it here 31 more times.
         */
        this.nCyclesRemain -= CPU1500.OP_CYCLES * 31;

        if (this.regKey) {
            this.regR5 = this.regKey;
            this.fCOND = true;
            this.checkBreakCondition('i');
        }

        return true;
    }

    /**
     * pop()
     *
     * @this {CPU1500}
     * @returns {number}
     */
    pop()
    {
        /**
         * Normally, you would simply decrement a stack pointer, but that's not how this stack was implemented.
         */
        let addr = this.stack[0];
        let i = 0, j = this.stack.length - 1;
        while (i < j) this.stack[i] = this.stack[++i];
        this.stack[i] = -1;
        this.assert(addr >= 0, "stack underflow");
        return addr;
    }

    /**
     * push(addr)
     *
     * @this {CPU1500}
     * @param {number} addr
     */
    push(addr)
    {
        /**
         * Normally, you would simply increment a stack pointer, but that's not how this stack was implemented.
         */
        let i = this.stack.length - 1;
        /**
         * Apparently, legitimate values are allowed to fall off the end of the stack, so we can't assert overflow.
         *
         *      this.assert(this.stack[i] < 0, "stack overflow");
         */
        while (i > 0) this.stack[i] = this.stack[--i];
        this.stack[0] = addr;
    }

    /**
     * saveState(state)
     *
     * @this {CPU1500}
     * @param {Array} state
     */
    saveState(state)
    {
        let stateCPU = [];
        let stateROM = [];
        stateCPU.push(+CPU1500.VERSION);
        this.regsO.forEach((reg) => stateCPU.push(reg.get()));
        this.regsX.forEach((reg) => stateCPU.push(reg.get()));
        this.regsY.forEach((reg) => stateCPU.push(reg.get()));
        stateCPU.push(this.regSupp.get());
        stateCPU.push(this.regTemp.get());
        stateCPU.push(this.base);
        stateCPU.push(this.fCOND);
        stateCPU.push(this.regRAB);
        stateCPU.push(this.regR5);
        stateCPU.push(this.regPC);
        stateCPU.push(this.stack);
        stateCPU.push(this.regKey);
        if (this.rom) this.rom.saveState(stateROM);
        state.push(stateCPU);
        state.push(stateROM);
    }

    /**
     * setRegister(name, value)
     *
     * TODO: Even though this CPU implementation contains its own "mini-debugger", it should eventually be
     * changed to use the Device register services to define/get/set registers; for now, this override suffices.
     *
     * @this {CPU1500}
     * @param {string} name
     * @param {number} value
     * @returns {boolean}
     */
    setRegister(name, value)
    {
        if (name && value >= 0) {
            switch(name) {
            case "pc":
                this.regPC = value;
                return true;
            default:
                this.printf("unrecognized register: %s\n", name);
                break;
            }
        }
        return false;
    }

    /**
     * toInstruction(addr, opcode, fCompact)
     *
     * Returns a string representation of the specified instruction.
     *
     * The TI-57 patents suggest mnemonics for some of the instructions, but not all, so I've taken
     * some liberties in the interests of clarity and familiarity.  Special-purpose instructions like
     * "BCDS" and "BCDR" are displayed as-is, but for more general-purpose instructions, I've adopted
     * the following format:
     *
     *      operation   destination,input(s)[,mask]
     *
     * Instructions that the patent refers to as "STYA", "STAY", "STXA", and "STAX" are all displayed
     * as "STORE" instructions; eg, instead of "STAX", I use:
     *
     *      STORE       X[RAB],A
     *
     * Instructions that use masks are displayed as either "LOAD", "MOVE", or "XCHG".  If the result
     * of the operation is suppressed, the destination will be displayed as "NUL" instead of a register.
     * And if the inputs are being added, subtracted, shifted left, or shifted right, they will be
     * displayed with "+", "-", "<<", or ">>", respectively.  Finally, the 16-digit mask is displayed,
     * as a series of hex digits rather than the unmemorable names used in the patents (eg, MMSD, FMAEX,
     * etc).  I do use the patent nomenclature internally, just not for display purposes.
     *
     * @this {CPU1500}
     * @param {number} addr
     * @param {number|undefined} [opcode]
     * @param {boolean} [fCompact]
     * @returns {string}
     */
    toInstruction(addr, opcode, fCompact = false)
    {
        let sOp = "???", sOperands = "";

        if (opcode & 0x1000) {
            let v;
            if (opcode & 0x0800) {
                sOp = "BR";
                if (opcode & 0x0400) {
                    sOp += "C";
                } else {
                    sOp += "NC";
                }
                v = (addr & 0x0400) | (opcode & 0x03FF);
            } else {
                sOp = "CALL";
                v = opcode & 0x07FF;
            }
            sOperands = this.sprintf("%#06x", v);
        }
        else if (opcode >= 0) {
            let d, j, k, l, n;
            let mask = opcode & CPU1500.IW_MF.MASK;
            let sMask, sOperator, sDst, sSrc, sStore;

            switch(mask) {
            case CPU1500.IW_MF.MMSD:    // 0x0000: Mantissa Most Significant Digit (D12)
            case CPU1500.IW_MF.ALL:     // 0x0100: (D0-D15)
            case CPU1500.IW_MF.MANT:    // 0x0200: Mantissa (D2-D12)
            case CPU1500.IW_MF.MAEX:    // 0x0300: Mantissa and Exponent (D0-D12)
            case CPU1500.IW_MF.LLSD:    // 0x0400: Mantissa Least Significant Digit (D2)
            case CPU1500.IW_MF.EXP:     // 0x0500: Exponent (D0-D1)
            case CPU1500.IW_MF.FMAEX:   // 0x0700: Flag and Mantissa and Exponent (D0-D13)
            case CPU1500.IW_MF.D14:     // 0x0800: (D14)
            case CPU1500.IW_MF.FLAG:    // 0x0900: (D13-D15)
            case CPU1500.IW_MF.DIGIT:   // 0x0a00: (D14-D15)
            case CPU1500.IW_MF.D13:     // 0x0d00: (D13)
            case CPU1500.IW_MF.D15:     // 0x0f00: (D15)
                sMask = this.toStringMask(mask);
                j = (opcode & CPU1500.IW_MF.J_MASK) >> CPU1500.IW_MF.J_SHIFT;
                k = (opcode & CPU1500.IW_MF.K_MASK) >> CPU1500.IW_MF.K_SHIFT;
                l = (opcode & CPU1500.IW_MF.L_MASK) >> CPU1500.IW_MF.L_SHIFT;
                n = (opcode & CPU1500.IW_MF.N_MASK);

                sOp = "LOAD";
                sOperator = "";
                sDst = "?"; sSrc = "?";

                if (!n) {
                    sOperator = (k == 5? "<<" : "+");
                } else {
                    sOperator = (k == 5? ">>" : "-");
                }

                switch(l) {
                case 0:
                    sDst = CPU1500.OP_INPUTS[j];
                    break;
                case 1:
                    if (k < 4) sDst = CPU1500.OP_INPUTS[k];
                    break;
                case 2:
                    if (k < 5) {
                        sDst = "NUL";                   // "suppressed" operation
                    } else if (k == 5) {
                        sDst = CPU1500.OP_INPUTS[j];
                    }
                    break;
                case 3:
                    if (!n) {
                        sOp = "XCHG";
                        if (!j) sDst = "A";             // j != 0 or k >= 4 is invalid
                        if (k < 4) sSrc = CPU1500.OP_INPUTS[k];
                    } else {
                        sOp = "MOVE";
                        sDst = CPU1500.OP_INPUTS[j];
                        sSrc = CPU1500.OP_INPUTS[k];    // k == 5 is invalid
                    }
                    k = -1;
                    break;
                }

                switch(k) {
                case 0:
                case 1:
                case 2:
                case 3:
                    sSrc = CPU1500.OP_INPUTS[j] + sOperator + CPU1500.OP_INPUTS[k];
                    break;
                case 4:
                case 5:
                    sSrc = CPU1500.OP_INPUTS[j] + sOperator + "1";
                    break;
                case 6:
                    sSrc = CPU1500.OP_INPUTS[j] + sOperator + "R5L";
                    break;
                case 7:
                    sSrc = CPU1500.OP_INPUTS[j] + sOperator + "R5";
                    break;
                }
                sOperands = sDst + "," + sSrc + "," + sMask;
                break;

            case CPU1500.IW_MF.FF:      // 0x0c00: (used for flag operations)
                switch(opcode & CPU1500.IW_FF.MASK) {
                case CPU1500.IW_FF.SET:
                    sOp = "SET";
                    break;
                case CPU1500.IW_FF.RESET:
                    sOp = "CLR";
                    break;
                case CPU1500.IW_FF.TEST:
                    sOp = "TST";
                    break;
                case CPU1500.IW_FF.TOGGLE:
                    sOp = "NOT";
                    break;
                }
                sOperands = this.regsO[(opcode & CPU1500.IW_FF.J_MASK) >> CPU1500.IW_FF.J_SHIFT].name;
                d = ((opcode & CPU1500.IW_FF.D_MASK) >> CPU1500.IW_FF.D_SHIFT);
                sOperands += '[' + (d? (d + 12) : '?') + ':' + ((opcode & CPU1500.IW_FF.B_MASK) >> CPU1500.IW_FF.B_SHIFT) + ']';
                break;

            case CPU1500.IW_MF.PF:      // 0x0e00: (used for misc operations)
                sStore = "STORE";
                switch(opcode & CPU1500.IW_PF.MASK) {
                case CPU1500.IW_PF.STYA:    // 0x0000: Contents of storage register Y defined by RAB loaded into operational register A (Yn -> A)
                    sOp = sStore;
                    sOperands = "A,Y[RAB]";
                    break;
                case CPU1500.IW_PF.RABI:    // 0x0001: Bits 4-6 of instruction are stored in RAB
                    sOp = sStore;
                    sOperands = "RAB," + ((opcode & 0x70) >> 4);
                    break;
                case CPU1500.IW_PF.BRR5:    // 0x0002: Branch to R5
                    sOp = "BR";
                    sOperands = "R5";
                    break;
                case CPU1500.IW_PF.RET:     // 0x0003: Return
                    sOp = "RET";
                    break;
                case CPU1500.IW_PF.STAX:    // 0x0004: Contents of operational register A loaded into storage register X defined by RAB (A -> Xn)
                    sOp = sStore;
                    sOperands = "X[RAB],A";
                    break;
                case CPU1500.IW_PF.STXA:    // 0x0005: Contents of storage register X defined by RAB loaded into operational register A (Xn -> A)
                    sOp = sStore;
                    sOperands = "A,X[RAB]";
                    break;
                case CPU1500.IW_PF.STAY:    // 0x0006: Contents of operational register A loaded into storage register Y defined by RAB (A -> Yn)
                    sOp = sStore;
                    sOperands = "Y[RAB],A";
                    break;
                case CPU1500.IW_PF.DISP:    // 0x0007: registers A and B are output to the Display Decoder and the Keyboard is scanned
                    sOp = "DISP";
                    break;
                case CPU1500.IW_PF.BCDS:    // 0x0008: BCD set: enables BCD corrector in arithmetic unit
                    sOp = "BCDS";
                    break;
                case CPU1500.IW_PF.BCDR:    // 0x0009: BCD reset: disables BCD corrector in arithmetic unit (which then functions as hexadecimal)
                    sOp = "BCDR";
                    break;
                case CPU1500.IW_PF.RABR5:   // 0x000A: LSD of R5 (3 bits) is stored in RAB
                    sOp = sStore;
                    sOperands = "RAB,R5L";
                    break;
                default:
                    break;
                }
                break;

            case CPU1500.IW_MF.RES1:    // 0x0600: (reserved)
            case CPU1500.IW_MF.RES2:    // 0x0b00: (reserved)
            default:
                break;
            }
        }
        return this.sprintf(fCompact? "%03X %04X\n" : "%#06x: %#06x  %-8s%s\n", addr, opcode, sOp, sOperands);
    }

    /**
     * toString(options, regs)
     *
     * @this {CPU1500}
     * @param {string} [options]
     * @param {Array.<Reg64>} [regs]
     * @returns {string}
     */
    toString(options = "", regs = null)
    {
        let s = "";
        if (this.nStringFormat) {
            if (this.rom) {
                s += this.toInstruction(this.regPC, this.bus.readDirect(this.regPC), true);
            }
            s += "  ";
            for (let i = 0, n = this.regsO.length; i < n; i++) {
                s += this.regsO[i].toString() + ' ';
            }
            s += "\n ";
            s += " COND=" + (this.fCOND? 1 : 0);
            s += " BASE=" + this.base;
            s += " R5=" + this.sprintf("%02X", this.regR5);
            s += " RAB=" + this.regRAB + " ST=";
            this.stack.forEach((addr, i) => {s += this.sprintf("%03X ", (addr < 0? 0 : (addr & 0xfff)));});
            return s.trim();
        }
        if (regs) {
            for (let i = 0, n = regs.length >> 1; i < n; i++) {
                s += regs[i].toString(true) + '  ' + regs[i+n].toString(true) + '\n';
            }
            return s;
        }
        s += this.toString(options, this.regsO);
        if (options.indexOf('a') >= 0) {
            s += this.toString(options, this.regsX);
            s += this.toString(options, this.regsY);
        }
        s += "COND=" + (this.fCOND? 1 : 0);
        s += " BASE=" + this.base;
        s += " R5=" + this.sprintf("%#04x", this.regR5);
        s += " RAB=" + this.regRAB + ' ';
        this.stack.forEach((addr, i) => {s += this.sprintf("ST%d=%#06x ", i, addr & 0xffff);});
        if (this.rom) {
            s += '\n' + this.toInstruction(this.regPC, this.bus.readDirect(this.regPC));
        }
        this.addrPrev = this.regPC;
        return s;
    }

    /**
     * toStringMask(mask)
     *
     * @this {CPU1500}
     * @param {number} mask
     * @returns {string}
     */
    toStringMask(mask)
    {
        let s = "";
        let range = CPU1500.RANGE[mask];
        for (let i = 0; i < 16; i++) {
            if (!(i % 4)) s = ' ' + s;
            s = (range? (i >= range[0] && i <= range[1]? 'F' : '0') : '?') + s;
        }
        return s;
    }

    /**
     * updateIndicators(on)
     *
     * I made the following observations while running the TI-57's 1501 ROM:
     *
     *      "2nd"   C[14] bit 3 set
     *      "INV"   B[15] bit 2 set
     *      "Deg"   X4[15] == 0x0
     *      "Rad"   X4[15] == 0x4
     *      "Grad"  X4[15] == 0xC
     *
     * Similarly, for the TI-55's 1503 ROM:
     *
     *      "2nd"   B[15] bit 2 set
     *      "INV"   D[15] bit 3 set
     *      "Deg"   C[15] == 0x0
     *      "Rad"   C[15] == 0x1
     *      "Grad"  C[15] == 0x2
     *
     * If this is the first time any of the indicator properties (ie, f2nd, fINV, or angleMode) have been initialized,
     * we will also propagate the LED display color (this.led.color) to the indicator's color, so that the colors of all
     * the elements overlaid on the display match.
     *
     * NOTE: These indicators are specific to locations chosen by the ROM, not by the CPU's hardware, but since the
     * ROMs are closely tied to their respective CPUs, I'm going to cheat and just check the CPU type.
     *
     * @this {CPU1500}
     * @param {boolean} [on] (default is true, to display all active indicators; set to false to force all indicators off)
     */
    updateIndicators(on = true)
    {
        let element;
        let f2nd = on && (this.type == CPU1500.TYPE.TMS1501? !!(this.regC.digits[14] & 0x8) : !!(this.regB.digits[15] & 0x4));
        if (this.f2nd !== f2nd) {
            if ((element = this.bindings['2nd'])) {
                element.style.opacity = f2nd? "1" : "0";
                if (this.f2nd === undefined && this.led) element.style.color = this.led.color;
            }
            this.f2nd = f2nd;
        }
        let fINV = on && (this.type == CPU1500.TYPE.TMS1501? !!(this.regB.digits[15] & 0x4) : !!(this.regD.digits[15] & 0x8));
        if (this.fINV !== fINV) {
            if ((element = this.bindings['INV'])) {
                element.style.opacity = fINV? "1" : "0";
                if (this.fINV === undefined && this.led) element.style.color = this.led.color;
            }
            this.fINV = fINV;
        }
        let angleBits = (this.type == CPU1500.TYPE.TMS1501? (this.regsX[4].digits[15] >> 2) : (this.regC.digits[15] & 3));
        let angleMode = on? ((!angleBits)? CPU1500.ANGLEMODE.DEGREES : (angleBits == 1)? CPU1500.ANGLEMODE.RADIANS : CPU1500.ANGLEMODE.GRADIENTS) : CPU1500.ANGLEMODE.OFF;
        if (this.angleMode !== angleMode) {
            if ((element = this.bindings['Deg'])) {
                element.style.opacity = (angleMode == CPU1500.ANGLEMODE.DEGREES)? "1" : "0";
                if (this.angleMode === undefined && this.led) element.style.color = this.led.color;
            }
            if ((element = this.bindings['Rad'])) {
                element.style.opacity = (angleMode == CPU1500.ANGLEMODE.RADIANS)? "1" : "0";
                if (this.angleMode === undefined && this.led) element.style.color = this.led.color;
            }
            if ((element = this.bindings['Grad'])) {
                element.style.opacity = (angleMode == CPU1500.ANGLEMODE.GRADIENTS)? "1" : "0";
                if (this.angleMode === undefined && this.led) element.style.color = this.led.color;
            }
            this.angleMode = angleMode;
        }
    }
}

CPU1500.IW_MF = {           // Instruction Word Mask Field
    MASK:   0x0F00,
    MMSD:   0x0000,     // Mantissa Most Significant Digit (D12)
    ALL:    0x0100,     // (D0-D15)
    MANT:   0x0200,     // Mantissa (D2-D12)
    MAEX:   0x0300,     // Mantissa and Exponent (D0-D12)
    LLSD:   0x0400,     // Mantissa Least Significant Digit (D2)
    EXP:    0x0500,     // Exponent (D0-D1)
    RES1:   0x0600,     // (reserved)
    FMAEX:  0x0700,     // Flag and Mantissa and Exponent (D0-D13)
    D14:    0x0800,     // (D14)
    FLAG:   0x0900,     // (D13-D15)
    DIGIT:  0x0A00,     // (D14-D15)
    RES2:   0x0B00,     // (reserved)
    FF:     0x0C00,     // FF used for additional instruction decoding
    D13:    0x0D00,     // (D13)
    PF:     0x0E00,     // PF used for additional instruction decoding
    D15:    0x0F00,     // (D15)
    J_MASK: 0x00C0,
    J_SHIFT:     6,
    K_MASK: 0x0038,
    K_SHIFT:     3,
    L_MASK: 0x0006,
    L_SHIFT:     1,
    N_MASK: 0x0001
};

CPU1500.IW_FF = {           // Instruction Word Flag Field (used when the Mask Field is FF)
    MASK:   0x0003,
    SET:    0x0000,
    RESET:  0x0001,
    TEST:   0x0002,
    TOGGLE: 0x0003,
    J_MASK: 0x00C0,
    J_SHIFT:     6,
    D_MASK: 0x0030,
    D_SHIFT:     4,
    B_MASK: 0x000C,
    B_SHIFT:     2,
};

CPU1500.IW_PF = {           // Instruction Word Misc Field (used when the Mask Field is PF)
    MASK:   0x000F,
    STYA:   0x0000,     // Contents of storage register Y defined by RAB loaded into operational register A (Yn -> A)
    RABI:   0x0001,     // Bits 4-6 of instruction are stored in RAB
    BRR5:   0x0002,     // Branch to R5
    RET:    0x0003,     // Return
    STAX:   0x0004,     // Contents of operational register A loaded into storage register X defined by RAB (A -> Xn)
    STXA:   0x0005,     // Contents of storage register X defined by RAB loaded into operational register A (Xn -> A)
    STAY:   0x0006,     // Contents of operational register A loaded into storage register Y defined by RAB (A -> Yn)
    DISP:   0x0007,     // registers A and B are output to the Display Decoder and the Keyboard is scanned
    BCDS:   0x0008,     // BCD set: enables BCD corrector in arithmetic unit
    BCDR:   0x0009,     // BCD reset: disables BCD corrector in arithmetic unit (which then functions as hexadecimal)
    RABR5:  0x000A,     // LSD of R5 (3 bits) is stored in RAB
    RES1:   0x000B,     // (reserved)
    RES2:   0x000C,     // (reserved)
    RES3:   0x000D,     // (reserved)
    RES4:   0x000E,     // (reserved)
    RES5:   0x000F      // (reserved)
};

CPU1500.RANGE = {
    [CPU1500.IW_MF.MMSD]:  [12,12],         // 0x0000: Mantissa Most Significant Digit (D12)
    [CPU1500.IW_MF.ALL]:   [0,15],          // 0x0100: (D0-D15)
    [CPU1500.IW_MF.MANT]:  [2,12],          // 0x0200: Mantissa (D2-D12)
    [CPU1500.IW_MF.MAEX]:  [0,12],          // 0x0300: Mantissa and Exponent (D0-D12)
    [CPU1500.IW_MF.LLSD]:  [2,2],           // 0x0400: Mantissa Least Significant Digit (D2)
    [CPU1500.IW_MF.EXP]:   [0,1],           // 0x0500: Exponent (D0-D1)
    [CPU1500.IW_MF.FMAEX]: [0,13],          // 0x0700: Flag and Mantissa and Exponent (D0-D13)
    [CPU1500.IW_MF.D14]:   [14,14],         // 0x0800: (D14)
    [CPU1500.IW_MF.FLAG]:  [13,15],         // 0x0900: (D13-D15)
    [CPU1500.IW_MF.DIGIT]: [14,15],         // 0x0a00: (D14-D15)
    [CPU1500.IW_MF.D13]:   [13,13],         // 0x0d00: (D13)
    [CPU1500.IW_MF.D15]:   [15,15],         // 0x0f00: (D15)
};

CPU1500.OP_CYCLES = 128;                    // default number of cycles per instruction

/**
 * Table of operations used by toInstruction() for "masked" operations
 */
CPU1500.OP = {
    ADD:    0,
    SUB:    1,
    SHL:    2,
    SHR:    3,
    XCHG:   4,
    MOVE:   5
};

CPU1500.TYPE = {
    TMS1501:    1501,       // aka TI-57
    TMS1502:    1502,       // aka TI-42 ("MBA")
    TMS1503:    1503        // aka TI-55
};

CPU1500.ANGLEMODE = {
    OFF:        0,
    DEGREES:    1,
    RADIANS:    2,
    GRADIENTS:  3
};

CPU1500.BREAK = {
    'i':    "input",
    'o':    "output",
    'om':   "output modification"
};

CPU1500.SFORMAT = {
    DEFAULT:    0,
    COMPACT:    1
};

/**
 * Table of operational inputs used by toInstruction() for "masked" operations
 */
CPU1500.OP_INPUTS = ["A","B","C","D","1","?","R5L","R5"];

CPU1500.COMMANDS = [
    "b[c]\t\tbreak on condition c",
    "bl\t\tlist break conditions",
    "e [addr] ...\tedit ROM locations",
    "g [addr]\trun (to addr)",
    "h\t\thalt",
    "r[a]\t\tdump (all) registers",
    "t [n]\t\tstep (n instructions)",
    "u [addr] [n]\tunassemble (at addr)"
];

CPU1500.CLASSES["CPU1500"] = CPU1500;
