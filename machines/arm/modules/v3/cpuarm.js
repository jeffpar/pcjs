/**
 * @fileoverview ARM Emulator (ARMv4T, with optional ARMv5T extensions)
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2026 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import CPU      from "../../../modules/v3/cpu.js";
import Debugger from "../../../modules/v3/debugger.js";
import MESSAGE  from "../../../modules/v3/message.js";

/**
 * @typedef {Config} CPUARMConfig
 * @property {string} busMemory
 * @property {number} [addrReset] (default is 0)
 * @property {number} [arch] (4 for ARMv4T, 5 for ARMv5T; default is 4)
 * @property {number} [cpuid] (CP15 ID register; default is 0x54029252, the TI ARM925T)
 * @property {number} [cacheType] (CP15 cache type register; default is 0x05109149)
 */

/**
 * ARM Emulator
 *
 * This emulates an ARM9-class core: the ARMv4T instruction set (ARM and Thumb), all seven processor modes with
 * their banked registers, and the CP15 system coprocessor, including the MMU (sections, large/small/tiny pages,
 * domains, and access permissions) and FCSE process ID.  The default configuration matches the TI ARM925T used in
 * the OMAP1510 (eg, the Palm Tungsten T).
 *
 * If the 'arch' config property is 5, the ARMv5T additions are enabled as well: BLX, CLZ, BKPT, and interworking
 * loads of the PC (LDR, LDM, and POP).  The ARMv5TE "enhanced DSP" instructions are NOT implemented.
 *
 * Implementation notes:
 *
 *  1)  All registers are maintained as signed 32-bit integers (in an Int32Array).  regs[15] is NOT the address of
 *      the next instruction; it's refreshed at the start of every instruction with the value that the instruction
 *      would see if it read R15 (ie, the instruction's address + 8 in ARM state, + 4 in Thumb state).  The address
 *      of the next instruction is regPC, and all changes to the PC are made there.
 *
 *  2)  The N and Z flags are stored "lazily" (flagN is any value with the appropriate sign bit, and flagZ is any
 *      value that is zero if Z is set), while C and V are always 0 or 1.  The rest of the CPSR is stored as cpsrIF
 *      (the I and F bits), fThumb (the T bit), and mode (the 5 mode bits).  Use getCPSR() to assemble all of them.
 *
 *  3)  Only little-endian operation is supported (the B bit in the CP15 control register is ignored), as are the
 *      A (alignment fault) bit and all cache and write buffer operations.
 *
 *  4)  Data and prefetch aborts are implemented by throwing CPUARM.ABORT, which is caught by execute().  Instructions
 *      are written so that no register is modified until all of the instruction's memory accesses have succeeded,
 *      which gives us the "base restored" abort model of the ARM9TDMI.
 *
 *  5)  Cycle counts are approximate: every instruction costs one cycle, and a few (eg, loads, multiplies, and block
 *      transfers) cost a little more.
 *
 * @class CPUARM
 * @unrestricted
 * @property {Bus} busMemory
 * @property {Input} inputDevice
 * @property {Int32Array} regs
 */
export default class CPUARM extends CPU
{
    /**
     * CPUARM(idMachine, idDevice, config)
     *
     * @this {CPUARM}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        /**
         * Get access to the Bus that provides access to physical memory.
         */
        this.busMemory = /** @type {Bus} */ (this.findDevice(this.config['busMemory']));

        /**
         * Get access to the Input device, so we can call setFocus() as needed.
         */
        this.inputDevice = /** @type {Input} */ (this.findDeviceByClass("Input", false));

        this.fV5 = (this.config['arch'] || 4) >= 5;
        this.cp15ID = (this.config['cpuid'] || 0x54029252)|0;
        this.cp15CacheType = (this.config['cacheType'] || 0x05109149)|0;

        /**
         * Initialize the CPU.
         */
        this.initCPU();
    }

    /**
     * execute(nCycles)
     *
     * Called from startClock() to execute a series of instructions.
     *
     * The try/catch lives here, outside of executeOpcodes(), so that it doesn't interfere with the optimization
     * of that function; the only exception we expect is CPUARM.ABORT, which is thrown by the memory functions when
     * the MMU detects a fault.
     *
     * @this {CPUARM}
     * @param {number} nCycles
     */
    execute(nCycles)
    {
        this.nCyclesRemain = nCycles;

        while (this.nCyclesRemain > 0) {
            if (this.fHalted) {
                /**
                 * A halted CPU (see "wait for interrupt" in writeCP15()) is restarted by any interrupt request,
                 * whether or not that interrupt is currently masked.
                 */
                if (!this.intLines) {
                    this.nCyclesRemain = 0;
                    break;
                }
                this.fHalted = false;
            }
            try {
                this.executeOpcodes();
            } catch(err) {
                if (err !== CPUARM.ABORT) throw err;
                this.processAbort();
            }
        }
    }

    /**
     * startClock(nCycles)
     *
     * Overrides the CPU's startClock(), so that once a burst is complete, getClock() no longer reports the cycles
     * from that burst (see CPU68K's startClock() for details).
     *
     * @this {CPUARM}
     * @param {number} [nCycles] (default is 0 to single-step)
     * @returns {number} (number of cycles actually "clocked")
     */
    startClock(nCycles = 0)
    {
        let nCyclesClocked = super.startClock(nCycles);
        this.nCyclesStart = this.nCyclesRemain = 0;
        return nCyclesClocked;
    }

    /**
     * executeOpcodes()
     *
     * This is the heart of the CPU: it fetches and executes instructions until nCyclesRemain is exhausted.
     *
     * @this {CPUARM}
     */
    executeOpcodes()
    {
        let regs = this.regs;

        while (this.nCyclesRemain > 0) {

            if (this.intPending) this.processInterrupt();

            let op, pc = this.regPCLast = this.regPC;

            this.nCyclesRemain--;

            if (this.fThumb) {
                op = this.fetchWord(pc);
                this.regPC = (pc + 2)|0;
                regs[15] = pc + 4;
                this.execThumb(op);
                continue;
            }

            op = this.fetchLong(pc);
            this.regPC = (pc + 4)|0;
            regs[15] = pc + 8;

            let cond = op >>> 28;
            if (cond != 0xe) {
                if (cond == 0xf) {
                    /**
                     * On ARMv4, the "never" condition is exactly that (well, technically, it's UNPREDICTABLE).
                     * On ARMv5, it's used to encode unconditional instructions, the only one of which we support
                     * is BLX (with an immediate target).
                     */
                    if (this.fV5) {
                        if ((op & 0x0e000000) == 0x0a000000) {
                            regs[14] = this.regPC;
                            this.regPC = (regs[15] + ((op << 8) >> 6) + ((op >>> 23) & 2))|0;
                            this.fThumb = true;
                        } else {
                            this.opUndefined(op);
                        }
                    }
                    continue;
                }
                if (!this.testCond(cond)) continue;
            }
            this.execARM(op);
        }
    }

    /**
     * testCond(cond)
     *
     * @this {CPUARM}
     * @param {number} cond (0x0-0xd)
     * @returns {boolean}
     */
    testCond(cond)
    {
        switch (cond) {
        case 0x0:               // EQ
            return this.flagZ == 0;
        case 0x1:               // NE
            return this.flagZ != 0;
        case 0x2:               // CS (aka HS)
            return this.flagC != 0;
        case 0x3:               // CC (aka LO)
            return this.flagC == 0;
        case 0x4:               // MI
            return this.flagN < 0;
        case 0x5:               // PL
            return this.flagN >= 0;
        case 0x6:               // VS
            return this.flagV != 0;
        case 0x7:               // VC
            return this.flagV == 0;
        case 0x8:               // HI
            return this.flagC != 0 && this.flagZ != 0;
        case 0x9:               // LS
            return this.flagC == 0 || this.flagZ == 0;
        case 0xa:               // GE
            return (this.flagN < 0) == (this.flagV != 0);
        case 0xb:               // LT
            return (this.flagN < 0) != (this.flagV != 0);
        case 0xc:               // GT
            return this.flagZ != 0 && (this.flagN < 0) == (this.flagV != 0);
        case 0xd:               // LE
            return this.flagZ == 0 || (this.flagN < 0) != (this.flagV != 0);
        }
        return true;
    }

    /**
     * execARM(op)
     *
     * Executes one ARM instruction, whose condition has already been tested.
     *
     * @this {CPUARM}
     * @param {number} op
     */
    execARM(op)
    {
        let regs = this.regs;

        switch ((op >>> 25) & 0x7) {

        case 0x0:
            if ((op & 0x90) == 0x90) {
                /**
                 * Bits 7 and 4 are both set, which isn't a valid shift encoding, so this is the home of the
                 * multiplies, swaps, and halfword/signed loads and stores.
                 */
                if (op & 0x60) {
                    this.opLoadStoreHalf(op);
                }
                else if (!(op & 0x0fc00000)) {
                    this.opMultiply(op);
                }
                else if ((op & 0x0f800000) == 0x00800000) {
                    this.opMultiplyLong(op);
                }
                else if ((op & 0x0fb00f00) == 0x01000000) {
                    this.opSwap(op);
                }
                else {
                    this.opUndefined(op);
                }
                break;
            }
            if ((op & 0x01900000) == 0x01000000) {
                /**
                 * These are the TST, TEQ, CMP, and CMN encodings without the S bit, which are used instead for
                 * MRS, MSR, BX, and (on ARMv5) BLX, CLZ, and BKPT.
                 */
                this.opControl(op);
                break;
            }
            this.opDataProc(op);
            break;

        case 0x1:
            if ((op & 0x01900000) == 0x01000000) {
                if (op & 0x00200000) {
                    let imm = op & 0xff, rot = (op >>> 7) & 0x1e;
                    if (rot) imm = (imm >>> rot) | (imm << (32 - rot));
                    this.opMSR(op, imm);
                } else {
                    this.opUndefined(op);
                }
                break;
            }
            this.opDataProc(op);
            break;

        case 0x2:
            this.opLoadStore(op);
            break;

        case 0x3:
            if (op & 0x10) {
                this.opUndefined(op);
                break;
            }
            this.opLoadStore(op);
            break;

        case 0x4:
            this.opLoadStoreMultiple(op);
            break;

        case 0x5:
            if (op & 0x01000000) regs[14] = this.regPC;
            this.regPC = (regs[15] + ((op << 8) >> 6))|0;
            this.nCyclesRemain -= 2;
            break;

        case 0x6:
            /**
             * Coprocessor loads and stores (LDC and STC); we have no coprocessors that use them.
             */
            this.opUndefined(op);
            break;

        case 0x7:
            if (op & 0x01000000) {
                this.enterException(CPUARM.VECTOR.SWI, CPUARM.MODE.SVC, this.regPC);
            } else {
                this.opCoprocessor(op);
            }
            break;
        }
    }

    /**
     * opDataProc(op)
     *
     * Executes the 16 data processing instructions, with either an immediate or (shifted) register operand.
     *
     * @this {CPUARM}
     * @param {number} op
     */
    opDataProc(op)
    {
        let regs = this.regs;
        let rn = (op >>> 16) & 0xf, rd = (op >>> 12) & 0xf;
        let a = regs[rn], b, c = this.flagC, n, res;

        if (op & 0x02000000) {
            b = op & 0xff;
            n = (op >>> 7) & 0x1e;
            if (n) {
                b = (b >>> n) | (b << (32 - n));
                c = b >>> 31;
            }
        }
        else {
            let rm = op & 0xf;
            b = regs[rm];
            if (op & 0x10) {
                /**
                 * When the shift count comes from a register, the instruction takes an extra cycle, so any
                 * use of R15 sees the instruction's address + 12 instead of + 8.
                 */
                if (rm == 15) b = (b + 4)|0;
                if (rn == 15) a = (a + 4)|0;
                b = this.shiftByReg((op >>> 5) & 0x3, b, regs[(op >>> 8) & 0xf] & 0xff);
                c = this.shiftC;
                this.nCyclesRemain--;
            }
            else {
                n = (op >>> 7) & 0x1f;
                switch ((op >>> 5) & 0x3) {
                case 0x0:                               // LSL
                    if (n) {
                        c = (b >>> (32 - n)) & 1;
                        b <<= n;
                    }
                    break;
                case 0x1:                               // LSR (where #0 means #32)
                    if (n) {
                        c = (b >>> (n - 1)) & 1;
                        b >>>= n;
                    } else {
                        c = b >>> 31;
                        b = 0;
                    }
                    break;
                case 0x2:                               // ASR (where #0 means #32)
                    if (n) {
                        c = (b >> (n - 1)) & 1;
                        b >>= n;
                    } else {
                        c = b >>> 31;
                        b >>= 31;
                    }
                    break;
                case 0x3:                               // ROR (where #0 means RRX)
                    if (n) {
                        c = (b >>> (n - 1)) & 1;
                        b = (b >>> n) | (b << (32 - n));
                    } else {
                        c = b & 1;
                        b = (b >>> 1) | (this.flagC << 31);
                    }
                    break;
                }
            }
        }

        /**
         * If the S bit is set and the destination is R15, then the flags are unaffected by the operation;
         * instead, the entire CPSR is restored from the current mode's SPSR (ie, it's an exception return).
         */
        let fFlags = (op & 0x00100000) && rd != 15;

        switch ((op >>> 21) & 0xf) {
        case 0x0:                                       // AND
            res = a & b;
            if (fFlags) {
                this.flagN = this.flagZ = res;
                this.flagC = c;
            }
            break;
        case 0x1:                                       // EOR
            res = a ^ b;
            if (fFlags) {
                this.flagN = this.flagZ = res;
                this.flagC = c;
            }
            break;
        case 0x2:                                       // SUB
            res = this.sub(a, b, 1, fFlags);
            break;
        case 0x3:                                       // RSB
            res = this.sub(b, a, 1, fFlags);
            break;
        case 0x4:                                       // ADD
            res = this.add(a, b, 0, fFlags);
            break;
        case 0x5:                                       // ADC
            res = this.add(a, b, this.flagC, fFlags);
            break;
        case 0x6:                                       // SBC
            res = this.sub(a, b, this.flagC, fFlags);
            break;
        case 0x7:                                       // RSC
            res = this.sub(b, a, this.flagC, fFlags);
            break;
        case 0x8:                                       // TST
            this.flagN = this.flagZ = a & b;
            this.flagC = c;
            return;
        case 0x9:                                       // TEQ
            this.flagN = this.flagZ = a ^ b;
            this.flagC = c;
            return;
        case 0xa:                                       // CMP
            this.sub(a, b, 1, true);
            return;
        case 0xb:                                       // CMN
            this.add(a, b, 0, true);
            return;
        case 0xc:                                       // ORR
            res = a | b;
            if (fFlags) {
                this.flagN = this.flagZ = res;
                this.flagC = c;
            }
            break;
        case 0xd:                                       // MOV
            res = b|0;
            if (fFlags) {
                this.flagN = this.flagZ = res;
                this.flagC = c;
            }
            break;
        case 0xe:                                       // BIC
            res = a & ~b;
            if (fFlags) {
                this.flagN = this.flagZ = res;
                this.flagC = c;
            }
            break;
        default:                                        // MVN
            res = ~b;
            if (fFlags) {
                this.flagN = this.flagZ = res;
                this.flagC = c;
            }
            break;
        }

        if (rd != 15) {
            regs[rd] = res;
        } else {
            if (op & 0x00100000) this.restoreCPSR();
            this.setPC(res);
        }
    }

    /**
     * shiftByReg(type, b, n)
     *
     * Performs a shift where the shift count came from the low byte of a register; unlike immediate shift
     * counts, a count of zero really means zero, and counts of 32 or more are possible.
     *
     * The shifter's carry out is returned in shiftC.
     *
     * @this {CPUARM}
     * @param {number} type (0 for LSL, 1 for LSR, 2 for ASR, 3 for ROR)
     * @param {number} b
     * @param {number} n (0-255)
     * @returns {number}
     */
    shiftByReg(type, b, n)
    {
        let c = this.flagC;
        if (n) {
            switch (type) {
            case 0x0:                                   // LSL
                if (n < 32) {
                    c = (b >>> (32 - n)) & 1;
                    b <<= n;
                } else {
                    c = (n == 32)? (b & 1) : 0;
                    b = 0;
                }
                break;
            case 0x1:                                   // LSR
                if (n < 32) {
                    c = (b >>> (n - 1)) & 1;
                    b >>>= n;
                } else {
                    c = (n == 32)? (b >>> 31) : 0;
                    b = 0;
                }
                break;
            case 0x2:                                   // ASR
                if (n < 32) {
                    c = (b >> (n - 1)) & 1;
                    b >>= n;
                } else {
                    c = b >>> 31;
                    b >>= 31;
                }
                break;
            default:                                    // ROR
                n &= 0x1f;
                if (n) {
                    c = (b >>> (n - 1)) & 1;
                    b = (b >>> n) | (b << (32 - n));
                } else {
                    c = b >>> 31;
                }
                break;
            }
        }
        this.shiftC = c;
        return b|0;
    }

    /**
     * add(a, b, c, fFlags)
     *
     * @this {CPUARM}
     * @param {number} a
     * @param {number} b
     * @param {number} c (carry in: 0 or 1)
     * @param {boolean|number} fFlags (true to update NZCV)
     * @returns {number} (a + b + c)
     */
    add(a, b, c, fFlags)
    {
        let res = (a + b + c)|0;
        if (fFlags) {
            this.flagN = this.flagZ = res;
            if (c) {
                this.flagC = ((res >>> 0) <= (a >>> 0))? 1 : 0;
            } else {
                this.flagC = ((res >>> 0) < (a >>> 0))? 1 : 0;
            }
            this.flagV = ((a ^ res) & (b ^ res)) >>> 31;
        }
        return res;
    }

    /**
     * sub(a, b, c, fFlags)
     *
     * Note that ARM's carry flag after a subtraction is the inverse of a borrow (ie, it's set if no borrow).
     *
     * @this {CPUARM}
     * @param {number} a
     * @param {number} b
     * @param {number} c (carry in: 1 for a normal subtraction, 0 to subtract one more)
     * @param {boolean|number} fFlags (true to update NZCV)
     * @returns {number} (a - b - !c)
     */
    sub(a, b, c, fFlags)
    {
        let res = (a - b - (1 - c))|0;
        if (fFlags) {
            this.flagN = this.flagZ = res;
            if (c) {
                this.flagC = ((a >>> 0) >= (b >>> 0))? 1 : 0;
            } else {
                this.flagC = ((a >>> 0) > (b >>> 0))? 1 : 0;
            }
            this.flagV = ((a ^ b) & (a ^ res)) >>> 31;
        }
        return res;
    }

    /**
     * opMultiply(op)
     *
     * Executes MUL and MLA.  When S is set, C is "meaningless" on ARMv4 (and unchanged on ARMv5); we leave it alone.
     *
     * @this {CPUARM}
     * @param {number} op
     */
    opMultiply(op)
    {
        let regs = this.regs;
        let res = Math.imul(regs[op & 0xf], regs[(op >>> 8) & 0xf]);
        if (op & 0x00200000) res = (res + regs[(op >>> 12) & 0xf])|0;
        if (op & 0x00100000) this.flagN = this.flagZ = res;
        regs[(op >>> 16) & 0xf] = res;
        this.nCyclesRemain -= 2;
    }

    /**
     * opMultiplyLong(op)
     *
     * Executes UMULL, UMLAL, SMULL, and SMLAL.
     *
     * @this {CPUARM}
     * @param {number} op
     */
    opMultiplyLong(op)
    {
        let regs = this.regs;
        let rdHi = (op >>> 16) & 0xf, rdLo = (op >>> 12) & 0xf;
        let a = regs[op & 0xf], b = regs[(op >>> 8) & 0xf];
        /**
         * Start with an unsigned 32x32 multiply, performed with 16-bit pieces so that every intermediate
         * result can be represented exactly.
         */
        let a0 = a & 0xffff;
        let a1 = a >>> 16, b0 = b & 0xffff, b1 = b >>> 16;
        let p00 = a0 * b0;
        let mid = a0 * b1 + a1 * b0 + Math.floor(p00 / 0x10000);
        let lo = ((mid & 0xffff) << 16) | (p00 & 0xffff);
        let hi = (a1 * b1 + Math.floor(mid / 0x10000))|0;
        if (op & 0x00400000) {
            /**
             * Convert the unsigned product to a signed product.
             */
            if (a < 0) hi = (hi - b)|0;
            if (b < 0) hi = (hi - a)|0;
        }
        if (op & 0x00200000) {
            let sum = (lo >>> 0) + (regs[rdLo] >>> 0);
            lo = sum|0;
            hi = (hi + regs[rdHi] + (sum > 0xffffffff? 1 : 0))|0;
        }
        if (op & 0x00100000) {
            this.flagN = hi;
            this.flagZ = hi | lo;
        }
        regs[rdLo] = lo;
        regs[rdHi] = hi;
        this.nCyclesRemain -= 3;
    }

    /**
     * opSwap(op)
     *
     * Executes SWP and SWPB.
     *
     * @this {CPUARM}
     * @param {number} op
     */
    opSwap(op)
    {
        let regs = this.regs, data;
        let addr = regs[(op >>> 16) & 0xf];
        if (op & 0x00400000) {
            data = this.readByte(addr);
            this.writeByte(addr, regs[op & 0xf] & 0xff);
        } else {
            data = this.loadLong(addr);
            this.writeLong(addr, regs[op & 0xf]);
        }
        regs[(op >>> 12) & 0xf] = data;
        this.nCyclesRemain -= 3;
    }

    /**
     * opControl(op)
     *
     * Executes MRS, MSR (with a register operand), and BX, along with BLX, CLZ, and BKPT on ARMv5.
     *
     * @this {CPUARM}
     * @param {number} op
     */
    opControl(op)
    {
        let regs = this.regs;

        if ((op & 0x0fbf0fff) == 0x010f0000) {          // MRS
            regs[(op >>> 12) & 0xf] = (op & 0x00400000)? this.getSPSR() : this.getCPSR();
        }
        else if ((op & 0x0fb0fff0) == 0x0120f000) {     // MSR
            this.opMSR(op, regs[op & 0xf]);
        }
        else if ((op & 0x0ffffff0) == 0x012fff10) {     // BX
            this.setPCInterworking(regs[op & 0xf]);
        }
        else if (this.fV5 && (op & 0x0ffffff0) == 0x012fff30) {         // BLX
            let addr = regs[op & 0xf];
            regs[14] = this.regPC;
            this.setPCInterworking(addr);
        }
        else if (this.fV5 && (op & 0x0fff0ff0) == 0x016f0f10) {         // CLZ
            regs[(op >>> 12) & 0xf] = Math.clz32(regs[op & 0xf]);
        }
        else if (this.fV5 && (op & 0x0ff000f0) == 0x01200070) {         // BKPT
            this.enterException(CPUARM.VECTOR.PABT, CPUARM.MODE.ABT, this.regPCLast + 4);
        }
        else {
            this.opUndefined(op);
        }
    }

    /**
     * opMSR(op, value)
     *
     * Updates the fields of the CPSR (or SPSR) selected by the field mask in bits 16-19 of the instruction.
     *
     * User mode can update only the flags, and no mode can use MSR to change the T bit.
     *
     * @this {CPUARM}
     * @param {number} op
     * @param {number} value
     */
    opMSR(op, value)
    {
        let mask = 0;
        if (op & 0x00010000) mask |= 0x000000ff;
        if (op & 0x00020000) mask |= 0x0000ff00;
        if (op & 0x00040000) mask |= 0x00ff0000;
        if (op & 0x00080000) mask |= 0xff000000;
        if (op & 0x00400000) {
            let iBank = CPUARM.BANKS[this.mode & 0xf];
            if (iBank) {
                mask &= CPUARM.PSR.MASK;
                this.bankSPSR[iBank] = (this.bankSPSR[iBank] & ~mask) | (value & mask);
            }
        } else {
            mask &= (this.mode == CPUARM.MODE.USR? CPUARM.PSR.NZCV : (CPUARM.PSR.MASK & ~CPUARM.PSR.T));
            this.setCPSR((this.getCPSR() & ~mask) | (value & mask));
        }
    }

    /**
     * opLoadStore(op)
     *
     * Executes LDR, LDRB, STR, and STRB (including the "T" forms, which use User mode permissions).
     *
     * @this {CPUARM}
     * @param {number} op
     */
    opLoadStore(op)
    {
        let regs = this.regs;
        let rn = (op >>> 16) & 0xf, rd = (op >>> 12) & 0xf;
        let offset, data;

        if (op & 0x02000000) {
            let n = (op >>> 7) & 0x1f;
            offset = regs[op & 0xf];
            switch ((op >>> 5) & 0x3) {
            case 0x0:
                offset <<= n;
                break;
            case 0x1:
                offset = n? (offset >>> n) : 0;
                break;
            case 0x2:
                offset = n? (offset >> n) : (offset >> 31);
                break;
            case 0x3:
                offset = n? ((offset >>> n) | (offset << (32 - n))) : ((offset >>> 1) | (this.flagC << 31));
                break;
            }
        } else {
            offset = op & 0xfff;
        }
        if (!(op & 0x00800000)) offset = -offset;

        let base = regs[rn];
        let addrNew = (base + offset)|0;
        let addr = (op & 0x01000000)? addrNew : base;
        /**
         * Post-indexed addressing always writes back; with the W bit also set, it's LDRT or STRT.
         */
        let fWriteBack = !(op & 0x01000000) || (op & 0x00200000);
        let fUser = (op & 0x01200000) == 0x00200000;

        if (fUser) {
            this.accRead = CPUARM.ACCESS.USER_READ;
            this.accWrite = CPUARM.ACCESS.USER_WRITE;
        }

        if (op & 0x00100000) {
            data = (op & 0x00400000)? this.readByte(addr) : this.loadLong(addr);
            if (fUser) this.updateAccess();
            if (fWriteBack) regs[rn] = addrNew;
            if (rd != 15) {
                regs[rd] = data;
            } else if (this.fV5) {
                this.setPCInterworking(data);
            } else {
                this.setPC(data);
            }
            this.nCyclesRemain -= 2;
        }
        else {
            data = regs[rd];
            if (rd == 15) data = (data + 4)|0;          // a stored PC is the instruction's address + 12
            if (op & 0x00400000) {
                this.writeByte(addr, data & 0xff);
            } else {
                this.writeLong(addr, data);
            }
            if (fUser) this.updateAccess();
            if (fWriteBack) regs[rn] = addrNew;
            this.nCyclesRemain--;
        }
    }

    /**
     * opLoadStoreHalf(op)
     *
     * Executes LDRH, LDRSB, LDRSH, and STRH.
     *
     * @this {CPUARM}
     * @param {number} op
     */
    opLoadStoreHalf(op)
    {
        let regs = this.regs;
        let rn = (op >>> 16) & 0xf, rd = (op >>> 12) & 0xf;
        let type = (op >>> 5) & 0x3;
        let offset = (op & 0x00400000)? (((op >>> 4) & 0xf0) | (op & 0xf)) : regs[op & 0xf];
        if (!(op & 0x00800000)) offset = -offset;

        let base = regs[rn];
        let addrNew = (base + offset)|0;
        let addr = (op & 0x01000000)? addrNew : base;
        let fWriteBack = !(op & 0x01000000) || (op & 0x00200000);

        if (op & 0x00100000) {
            let data;
            if (type == 0x1) {
                data = this.readWord(addr);
            } else if (type == 0x2) {
                data = (this.readByte(addr) << 24) >> 24;
            } else {
                data = (this.readWord(addr) << 16) >> 16;
            }
            if (fWriteBack) regs[rn] = addrNew;
            if (rd != 15) regs[rd] = data; else this.setPC(data);
            this.nCyclesRemain -= 2;
        }
        else if (type == 0x1) {
            let data = regs[rd];
            if (rd == 15) data = (data + 4)|0;
            this.writeWord(addr, data & 0xffff);
            if (fWriteBack) regs[rn] = addrNew;
            this.nCyclesRemain--;
        }
        else {
            /**
             * These are LDRD and STRD on ARMv5TE, which we don't support.
             */
            this.opUndefined(op);
        }
    }

    /**
     * opLoadStoreMultiple(op)
     *
     * Executes LDM and STM, in all four addressing modes; the lowest-numbered register is always transferred
     * to/from the lowest address.
     *
     * If the S bit is set, then either the User mode registers are transferred instead of the current mode's
     * registers, or (for an LDM that includes R15) the CPSR is restored from the SPSR.
     *
     * @this {CPUARM}
     * @param {number} op
     */
    opLoadStoreMultiple(op)
    {
        let regs = this.regs;
        let rn = (op >>> 16) & 0xf, list = op & 0xffff;
        let n = CPUARM.BITS[list & 0xff] + CPUARM.BITS[list >>> 8];
        let base = regs[rn], baseNew, addr;

        if (!n) return;                                 // UNPREDICTABLE

        if (op & 0x00800000) {
            baseNew = (base + (n << 2))|0;
            addr = (op & 0x01000000)? base + 4 : base;
        } else {
            baseNew = (base - (n << 2))|0;
            addr = (op & 0x01000000)? baseNew : baseNew + 4;
        }
        addr &= ~0x3;

        let fS = op & 0x00400000, fWriteBack = op & 0x00200000;
        let fUserBank = fS && !((op & 0x00100000) && (list & 0x8000)) && CPUARM.BANKS[this.mode & 0xf] != 0;

        if (op & 0x00100000) {
            /**
             * Read all the values first, so that if any read aborts, no register has been changed.
             */
            let tmp = this.tmpRegs;
            for (let i = 0; i < 16; i++) {
                if (list & (1 << i)) {
                    tmp[i] = this.readLong(addr);
                    addr += 4;
                }
            }
            if (fWriteBack && !(list & (1 << rn))) regs[rn] = baseNew;
            for (let i = 0; i < 15; i++) {
                if (list & (1 << i)) {
                    if (fUserBank) {
                        this.setUserReg(i, tmp[i]);
                    } else {
                        regs[i] = tmp[i];
                    }
                }
            }
            if (list & 0x8000) {
                if (fS) {
                    this.restoreCPSR();
                    this.setPC(tmp[15]);
                } else if (this.fV5) {
                    this.setPCInterworking(tmp[15]);
                } else {
                    this.setPC(tmp[15]);
                }
            }
        }
        else {
            let fFirst = true;
            for (let i = 0; i < 16; i++) {
                if (list & (1 << i)) {
                    let data = fUserBank? this.getUserReg(i) : regs[i];
                    if (i == 15) {
                        data = (data + 4)|0;
                    } else if (i == rn && fWriteBack && !fFirst) {
                        /**
                         * If the base register is in the list, the original base is stored only if it's the
                         * first register in the list; otherwise, the updated base is stored.
                         */
                        data = baseNew;
                    }
                    this.writeLong(addr, data);
                    addr += 4;
                    fFirst = false;
                }
            }
            if (fWriteBack) regs[rn] = baseNew;
        }
        this.nCyclesRemain -= n;
    }

    /**
     * opCoprocessor(op)
     *
     * Executes MRC and MCR for the system control coprocessor (CP15), which is the only coprocessor we have;
     * everything else (including any use of CP15 from User mode) is an undefined instruction.
     *
     * @this {CPUARM}
     * @param {number} op
     */
    opCoprocessor(op)
    {
        if (((op >>> 8) & 0xf) != 15 || !(op & 0x10) || this.mode == CPUARM.MODE.USR) {
            this.opUndefined(op);
            return;
        }
        let regs = this.regs;
        let crn = (op >>> 16) & 0xf, rd = (op >>> 12) & 0xf, crm = op & 0xf;
        let opc1 = (op >>> 21) & 0x7, opc2 = (op >>> 5) & 0x7;
        if (op & 0x00100000) {
            let value = this.readCP15(crn, crm, opc1, opc2);
            if (rd != 15) {
                regs[rd] = value;
            } else {
                this.setFlags(value);
            }
        } else {
            let value = regs[rd];
            if (rd == 15) value = (value + 4)|0;
            this.writeCP15(crn, crm, opc1, opc2, value);
        }
    }

    /**
     * opUndefined(op)
     *
     * @this {CPUARM}
     * @param {number} op
     */
    opUndefined(op)
    {
        if (this.hooks) {
            let hook = this.hooks.get(this.regPCLast);
            if (hook && op == CPUARM.OP_HOOK) {
                /**
                 * This isn't really an undefined instruction; it's one of our hooks (see setHook()).  Unless the
                 * hook function returns false, we now execute the instruction that the hook replaced.
                 */
                if (hook.func() !== false) this.execARM(hook.op);
                return;
            }
        }
        this.printf(MESSAGE.CPU, "undefined instruction at %#010x: %#x\n", this.regPCLast, op);
        this.enterException(CPUARM.VECTOR.UND, CPUARM.MODE.UND, this.regPC);
    }

    /**
     * setHook(addr, func)
     *
     * Arranges for a function to be called whenever the ARM (not Thumb) instruction at the given virtual address
     * is about to be executed, by replacing the instruction with an undefined instruction (which works on ROM, too).
     * The function can change any of the registers, and unless it returns false, the original instruction is then
     * executed.  The address must be mapped when the hook is set and when it is cleared.
     *
     * This exists so that a machine can call into its own software at well-defined points (eg, to install an
     * application); it is NOT a general-purpose breakpoint mechanism, because the modified instruction is visible
     * to the machine's software.
     *
     * @this {CPUARM}
     * @param {number} addr (virtual address of an ARM instruction)
     * @param {function():(boolean|undefined)|null} func (null to remove the hook)
     * @returns {boolean} (true if successful)
     */
    setHook(addr, func)
    {
        addr |= 0;
        let bus = this.busMemory, hook = this.hooks && this.hooks.get(addr);
        let addrPhysical = this.translateDebug(addr);
        if (addrPhysical == undefined) return false;
        let poke = (op) => {
            for (let i = 0; i < 4; i++) bus.writeDirect((addrPhysical + i) & bus.addrLimit, (op >>> (i << 3)) & 0xff);
        };
        if (hook) {
            poke(hook.op);
            this.hooks.delete(addr);
        }
        if (func) {
            let op = 0;
            for (let i = 0; i < 4; i++) op |= bus.readDirect((addrPhysical + i) & bus.addrLimit) << (i << 3);
            if (!this.hooks) this.hooks = new Map();
            this.hooks.set(addr, {op, func});
            poke(CPUARM.OP_HOOK);
        }
        return true;
    }

    /**
     * execThumb(op)
     *
     * Executes one Thumb instruction.
     *
     * @this {CPUARM}
     * @param {number} op (16-bit)
     */
    execThumb(op)
    {
        let regs = this.regs;
        let rd, a, b, n, addr, list;

        switch (op >> 11) {

        case 0x00:                                      // LSL Rd,Rs,#imm5
            b = regs[(op >> 3) & 0x7];
            n = (op >> 6) & 0x1f;
            if (n) {
                this.flagC = (b >>> (32 - n)) & 1;
                b <<= n;
            }
            regs[op & 0x7] = this.flagN = this.flagZ = b;
            break;

        case 0x01:                                      // LSR Rd,Rs,#imm5
            b = regs[(op >> 3) & 0x7];
            n = (op >> 6) & 0x1f;
            if (n) {
                this.flagC = (b >>> (n - 1)) & 1;
                b >>>= n;
            } else {
                this.flagC = b >>> 31;
                b = 0;
            }
            regs[op & 0x7] = this.flagN = this.flagZ = b;
            break;

        case 0x02:                                      // ASR Rd,Rs,#imm5
            b = regs[(op >> 3) & 0x7];
            n = (op >> 6) & 0x1f;
            if (n) {
                this.flagC = (b >> (n - 1)) & 1;
                b >>= n;
            } else {
                this.flagC = b >>> 31;
                b >>= 31;
            }
            regs[op & 0x7] = this.flagN = this.flagZ = b;
            break;

        case 0x03:                                      // ADD/SUB Rd,Rs,Rn (or #imm3)
            a = regs[(op >> 3) & 0x7];
            b = (op >> 6) & 0x7;
            if (!(op & 0x0400)) b = regs[b];
            regs[op & 0x7] = (op & 0x0200)? this.sub(a, b, 1, true) : this.add(a, b, 0, true);
            break;

        case 0x04:                                      // MOV Rd,#imm8
            regs[(op >> 8) & 0x7] = this.flagN = this.flagZ = op & 0xff;
            break;

        case 0x05:                                      // CMP Rd,#imm8
            this.sub(regs[(op >> 8) & 0x7], op & 0xff, 1, true);
            break;

        case 0x06:                                      // ADD Rd,#imm8
            rd = (op >> 8) & 0x7;
            regs[rd] = this.add(regs[rd], op & 0xff, 0, true);
            break;

        case 0x07:                                      // SUB Rd,#imm8
            rd = (op >> 8) & 0x7;
            regs[rd] = this.sub(regs[rd], op & 0xff, 1, true);
            break;

        case 0x08:
            if (!(op & 0x0400)) {
                this.opThumbALU(op);
                break;
            }
            /**
             * These are the only (non-stack) instructions that can access the "high" registers (R8-R15).
             */
            rd = (op & 0x7) | ((op >> 4) & 0x8);
            b = regs[(op >> 3) & 0xf];
            switch ((op >> 8) & 0x3) {
            case 0x0:                                   // ADD Rd,Rs
                a = (regs[rd] + b)|0;
                if (rd != 15) regs[rd] = a; else this.setPC(a);
                break;
            case 0x1:                                   // CMP Rd,Rs
                this.sub(regs[rd], b, 1, true);
                break;
            case 0x2:                                   // MOV Rd,Rs
                if (rd != 15) regs[rd] = b; else this.setPC(b);
                break;
            case 0x3:                                   // BX Rs (or BLX Rs on ARMv5)
                if (op & 0x80) {
                    if (!this.fV5) {
                        this.opUndefined(op);
                        break;
                    }
                    regs[14] = this.regPC | 1;
                }
                this.setPCInterworking(b);
                break;
            }
            break;

        case 0x09:                                      // LDR Rd,[PC,#imm8*4]
            regs[(op >> 8) & 0x7] = this.readLong(((regs[15] & ~0x3) + ((op & 0xff) << 2))|0);
            this.nCyclesRemain -= 2;
            break;

        case 0x0a:
        case 0x0b:
            addr = (regs[(op >> 3) & 0x7] + regs[(op >> 6) & 0x7])|0;
            rd = op & 0x7;
            switch ((op >> 9) & 0x7) {
            case 0x0:                                   // STR Rd,[Rb,Ro]
                this.writeLong(addr, regs[rd]);
                break;
            case 0x1:                                   // STRH Rd,[Rb,Ro]
                this.writeWord(addr, regs[rd] & 0xffff);
                break;
            case 0x2:                                   // STRB Rd,[Rb,Ro]
                this.writeByte(addr, regs[rd] & 0xff);
                break;
            case 0x3:                                   // LDRSB Rd,[Rb,Ro]
                regs[rd] = (this.readByte(addr) << 24) >> 24;
                break;
            case 0x4:                                   // LDR Rd,[Rb,Ro]
                regs[rd] = this.loadLong(addr);
                break;
            case 0x5:                                   // LDRH Rd,[Rb,Ro]
                regs[rd] = this.readWord(addr);
                break;
            case 0x6:                                   // LDRB Rd,[Rb,Ro]
                regs[rd] = this.readByte(addr);
                break;
            case 0x7:                                   // LDRSH Rd,[Rb,Ro]
                regs[rd] = (this.readWord(addr) << 16) >> 16;
                break;
            }
            this.nCyclesRemain--;
            break;

        case 0x0c:                                      // STR Rd,[Rb,#imm5*4]
            this.writeLong((regs[(op >> 3) & 0x7] + ((op >> 4) & 0x7c))|0, regs[op & 0x7]);
            this.nCyclesRemain--;
            break;

        case 0x0d:                                      // LDR Rd,[Rb,#imm5*4]
            regs[op & 0x7] = this.loadLong((regs[(op >> 3) & 0x7] + ((op >> 4) & 0x7c))|0);
            this.nCyclesRemain -= 2;
            break;

        case 0x0e:                                      // STRB Rd,[Rb,#imm5]
            this.writeByte((regs[(op >> 3) & 0x7] + ((op >> 6) & 0x1f))|0, regs[op & 0x7] & 0xff);
            this.nCyclesRemain--;
            break;

        case 0x0f:                                      // LDRB Rd,[Rb,#imm5]
            regs[op & 0x7] = this.readByte((regs[(op >> 3) & 0x7] + ((op >> 6) & 0x1f))|0);
            this.nCyclesRemain -= 2;
            break;

        case 0x10:                                      // STRH Rd,[Rb,#imm5*2]
            this.writeWord((regs[(op >> 3) & 0x7] + ((op >> 5) & 0x3e))|0, regs[op & 0x7] & 0xffff);
            this.nCyclesRemain--;
            break;

        case 0x11:                                      // LDRH Rd,[Rb,#imm5*2]
            regs[op & 0x7] = this.readWord((regs[(op >> 3) & 0x7] + ((op >> 5) & 0x3e))|0);
            this.nCyclesRemain -= 2;
            break;

        case 0x12:                                      // STR Rd,[SP,#imm8*4]
            this.writeLong((regs[13] + ((op & 0xff) << 2))|0, regs[(op >> 8) & 0x7]);
            this.nCyclesRemain--;
            break;

        case 0x13:                                      // LDR Rd,[SP,#imm8*4]
            regs[(op >> 8) & 0x7] = this.loadLong((regs[13] + ((op & 0xff) << 2))|0);
            this.nCyclesRemain -= 2;
            break;

        case 0x14:                                      // ADD Rd,PC,#imm8*4
            regs[(op >> 8) & 0x7] = (regs[15] & ~0x3) + ((op & 0xff) << 2);
            break;

        case 0x15:                                      // ADD Rd,SP,#imm8*4
            regs[(op >> 8) & 0x7] = regs[13] + ((op & 0xff) << 2);
            break;

        case 0x16:
        case 0x17:
            if ((op & 0xff00) == 0xb000) {              // ADD SP,#imm7*4 (or SUB SP,#imm7*4)
                n = (op & 0x7f) << 2;
                regs[13] += (op & 0x80)? -n : n;
            }
            else if ((op & 0xfe00) == 0xb400) {         // PUSH {Rlist[,LR]}
                list = op & 0xff;
                n = CPUARM.BITS[list] + ((op >> 8) & 1);
                a = (regs[13] - (n << 2))|0;
                addr = a & ~0x3;
                for (let i = 0; i < 8; i++) {
                    if (list & (1 << i)) {
                        this.writeLong(addr, regs[i]);
                        addr += 4;
                    }
                }
                if (op & 0x0100) this.writeLong(addr, regs[14]);
                regs[13] = a;
                this.nCyclesRemain -= n;
            }
            else if ((op & 0xfe00) == 0xbc00) {         // POP {Rlist[,PC]}
                let tmp = this.tmpRegs;
                list = op & 0xff;
                n = CPUARM.BITS[list] + ((op >> 8) & 1);
                addr = regs[13] & ~0x3;
                for (let i = 0; i < 8; i++) {
                    if (list & (1 << i)) {
                        tmp[i] = this.readLong(addr);
                        addr += 4;
                    }
                }
                if (op & 0x0100) tmp[15] = this.readLong(addr);
                for (let i = 0; i < 8; i++) {
                    if (list & (1 << i)) regs[i] = tmp[i];
                }
                regs[13] += n << 2;
                if (op & 0x0100) {
                    if (this.fV5) {
                        this.setPCInterworking(tmp[15]);
                    } else {
                        this.setPC(tmp[15]);
                    }
                }
                this.nCyclesRemain -= n;
            }
            else if (this.fV5 && (op & 0xff00) == 0xbe00) {             // BKPT
                this.enterException(CPUARM.VECTOR.PABT, CPUARM.MODE.ABT, this.regPCLast + 4);
            }
            else {
                this.opUndefined(op);
            }
            break;

        case 0x18:                                      // STMIA Rb!,{Rlist}
            rd = (op >> 8) & 0x7;
            list = op & 0xff;
            if (!list) break;                           // UNPREDICTABLE
            n = CPUARM.BITS[list];
            a = regs[rd];
            addr = a & ~0x3;
            b = (a + (n << 2))|0;
            for (let i = 0, fFirst = true; i < 8; i++) {
                if (list & (1 << i)) {
                    this.writeLong(addr, (i == rd && !fFirst)? b : regs[i]);
                    addr += 4;
                    fFirst = false;
                }
            }
            regs[rd] = b;
            this.nCyclesRemain -= n;
            break;

        case 0x19: {                                    // LDMIA Rb!,{Rlist}
            let tmp = this.tmpRegs;
            rd = (op >> 8) & 0x7;
            list = op & 0xff;
            if (!list) break;                           // UNPREDICTABLE
            n = CPUARM.BITS[list];
            a = regs[rd];
            addr = a & ~0x3;
            for (let i = 0; i < 8; i++) {
                if (list & (1 << i)) {
                    tmp[i] = this.readLong(addr);
                    addr += 4;
                }
            }
            if (!(list & (1 << rd))) regs[rd] = a + (n << 2);
            for (let i = 0; i < 8; i++) {
                if (list & (1 << i)) regs[i] = tmp[i];
            }
            this.nCyclesRemain -= n;
            break;
        }

        case 0x1a:
        case 0x1b:
            n = (op >> 8) & 0xf;
            if (n == 0xf) {                             // SWI
                this.enterException(CPUARM.VECTOR.SWI, CPUARM.MODE.SVC, this.regPC);
            }
            else if (n == 0xe) {
                this.opUndefined(op);
            }
            else if (this.testCond(n)) {                // Bcc
                this.regPC = (regs[15] + ((op << 24) >> 23))|0;
                this.nCyclesRemain -= 2;
            }
            break;

        case 0x1c:                                      // B
            this.regPC = (regs[15] + ((op << 21) >> 20))|0;
            this.nCyclesRemain -= 2;
            break;

        case 0x1d:                                      // BLX (second half; ARMv5 only)
            if (!this.fV5 || (op & 1)) {
                this.opUndefined(op);
                break;
            }
            a = this.regPC | 1;
            this.regPC = (regs[14] + ((op & 0x7ff) << 1)) & ~0x3;
            regs[14] = a;
            this.fThumb = false;
            this.nCyclesRemain -= 2;
            break;

        case 0x1e:                                      // BL (first half)
            regs[14] = regs[15] + ((op << 21) >> 9);
            break;

        case 0x1f:                                      // BL (second half)
            a = this.regPC | 1;
            this.regPC = (regs[14] + ((op & 0x7ff) << 1)) & ~0x1;
            regs[14] = a;
            this.nCyclesRemain -= 2;
            break;
        }
    }

    /**
     * opThumbALU(op)
     *
     * Executes the 16 Thumb "ALU" instructions, all of which update the flags.
     *
     * @this {CPUARM}
     * @param {number} op
     */
    opThumbALU(op)
    {
        let regs = this.regs;
        let rd = op & 0x7, a = regs[rd], b = regs[(op >> 3) & 0x7], res;

        switch ((op >> 6) & 0xf) {
        case 0x0:                                       // AND
            regs[rd] = this.flagN = this.flagZ = a & b;
            break;
        case 0x1:                                       // EOR
            regs[rd] = this.flagN = this.flagZ = a ^ b;
            break;
        case 0x2:                                       // LSL
        case 0x3:                                       // LSR
        case 0x4:                                       // ASR
            res = this.shiftByReg(((op >> 6) & 0xf) - 2, a, b & 0xff);
            this.flagC = this.shiftC;
            regs[rd] = this.flagN = this.flagZ = res;
            this.nCyclesRemain--;
            break;
        case 0x5:                                       // ADC
            regs[rd] = this.add(a, b, this.flagC, true);
            break;
        case 0x6:                                       // SBC
            regs[rd] = this.sub(a, b, this.flagC, true);
            break;
        case 0x7:                                       // ROR
            res = this.shiftByReg(3, a, b & 0xff);
            this.flagC = this.shiftC;
            regs[rd] = this.flagN = this.flagZ = res;
            this.nCyclesRemain--;
            break;
        case 0x8:                                       // TST
            this.flagN = this.flagZ = a & b;
            break;
        case 0x9:                                       // NEG
            regs[rd] = this.sub(0, b, 1, true);
            break;
        case 0xa:                                       // CMP
            this.sub(a, b, 1, true);
            break;
        case 0xb:                                       // CMN
            this.add(a, b, 0, true);
            break;
        case 0xc:                                       // ORR
            regs[rd] = this.flagN = this.flagZ = a | b;
            break;
        case 0xd:                                       // MUL
            regs[rd] = this.flagN = this.flagZ = Math.imul(a, b);
            this.nCyclesRemain -= 2;
            break;
        case 0xe:                                       // BIC
            regs[rd] = this.flagN = this.flagZ = a & ~b;
            break;
        case 0xf:                                       // MVN
            regs[rd] = this.flagN = this.flagZ = ~b;
            break;
        }
    }

    /**
     * setPC(addr)
     *
     * Sets the address of the next instruction, without changing state (ie, the low bits are simply ignored).
     *
     * @this {CPUARM}
     * @param {number} addr
     */
    setPC(addr)
    {
        this.regPC = addr & (this.fThumb? ~0x1 : ~0x3);
        this.nCyclesRemain -= 2;
    }

    /**
     * setPCInterworking(addr)
     *
     * Sets the address of the next instruction and selects ARM or Thumb state, based on bit 0 of the address.
     *
     * @this {CPUARM}
     * @param {number} addr
     */
    setPCInterworking(addr)
    {
        this.fThumb = !!(addr & 0x1);
        this.regPC = addr & (this.fThumb? ~0x1 : ~0x3);
        this.nCyclesRemain -= 2;
    }

    /**
     * getCPSR()
     *
     * @this {CPUARM}
     * @returns {number}
     */
    getCPSR()
    {
        return (this.flagN < 0? CPUARM.PSR.N : 0) | (this.flagZ == 0? CPUARM.PSR.Z : 0) | (this.flagC << 29) | (this.flagV << 28) | this.cpsrIF | (this.fThumb? CPUARM.PSR.T : 0) | this.mode;
    }

    /**
     * setCPSR(value)
     *
     * @this {CPUARM}
     * @param {number} value
     */
    setCPSR(value)
    {
        this.setFlags(value);
        this.fThumb = !!(value & CPUARM.PSR.T);
        this.cpsrIF = value & (CPUARM.PSR.I | CPUARM.PSR.F);
        this.setMode(value & CPUARM.PSR.MODE);
        this.intPending = this.intLines & ~this.cpsrIF;
    }

    /**
     * setFlags(value)
     *
     * @this {CPUARM}
     * @param {number} value (only the NZCV bits are used)
     */
    setFlags(value)
    {
        this.flagN = value|0;
        this.flagZ = (value & CPUARM.PSR.Z)? 0 : 1;
        this.flagC = (value >>> 29) & 1;
        this.flagV = (value >>> 28) & 1;
    }

    /**
     * getSPSR()
     *
     * User and System modes have no SPSR; reading it is UNPREDICTABLE, so we return the CPSR.
     *
     * @this {CPUARM}
     * @returns {number}
     */
    getSPSR()
    {
        let iBank = CPUARM.BANKS[this.mode & 0xf];
        return iBank? this.bankSPSR[iBank] : this.getCPSR();
    }

    /**
     * restoreCPSR()
     *
     * Copies the current mode's SPSR to the CPSR, which is how exception handlers return.
     *
     * @this {CPUARM}
     */
    restoreCPSR()
    {
        let iBank = CPUARM.BANKS[this.mode & 0xf];
        if (iBank) this.setCPSR(this.bankSPSR[iBank]);
    }

    /**
     * setMode(mode)
     *
     * Switches to a new processor mode, swapping all the registers that are "banked" for the old and new modes:
     * R13 and R14 for every mode except System (which shares User's), and R8-R12 as well for FIQ mode.
     *
     * @this {CPUARM}
     * @param {number} mode
     */
    setMode(mode)
    {
        let regs = this.regs;
        let iBankOld = CPUARM.BANKS[this.mode & 0xf], iBankNew = CPUARM.BANKS[mode & 0xf];
        if (iBankOld != iBankNew) {
            this.bankSP[iBankOld] = regs[13];
            this.bankLR[iBankOld] = regs[14];
            regs[13] = this.bankSP[iBankNew];
            regs[14] = this.bankLR[iBankNew];
            if (iBankOld == CPUARM.BANK.FIQ) {
                for (let i = 0; i < 5; i++) {
                    this.bankFIQ[i] = regs[8 + i];
                    regs[8 + i] = this.bankUSR[i];
                }
            }
            else if (iBankNew == CPUARM.BANK.FIQ) {
                for (let i = 0; i < 5; i++) {
                    this.bankUSR[i] = regs[8 + i];
                    regs[8 + i] = this.bankFIQ[i];
                }
            }
        }
        this.mode = mode;
        this.updateAccess();
    }

    /**
     * updateAccess()
     *
     * Selects the access permissions that the MMU must check, based on the current mode.
     *
     * @this {CPUARM}
     */
    updateAccess()
    {
        if (this.mode == CPUARM.MODE.USR) {
            this.accRead = CPUARM.ACCESS.USER_READ;
            this.accWrite = CPUARM.ACCESS.USER_WRITE;
        } else {
            this.accRead = CPUARM.ACCESS.PRIV_READ;
            this.accWrite = CPUARM.ACCESS.PRIV_WRITE;
        }
    }

    /**
     * getUserReg(i)
     *
     * Returns a User mode register, regardless of the current mode.
     *
     * @this {CPUARM}
     * @param {number} i (0-15)
     * @returns {number}
     */
    getUserReg(i)
    {
        let iBank = CPUARM.BANKS[this.mode & 0xf];
        if (iBank) {
            if (i == 13) return this.bankSP[0];
            if (i == 14) return this.bankLR[0];
            if (iBank == CPUARM.BANK.FIQ && i >= 8 && i < 13) return this.bankUSR[i - 8];
        }
        return this.regs[i];
    }

    /**
     * setUserReg(i, value)
     *
     * Sets a User mode register, regardless of the current mode.
     *
     * @this {CPUARM}
     * @param {number} i (0-14)
     * @param {number} value
     */
    setUserReg(i, value)
    {
        let iBank = CPUARM.BANKS[this.mode & 0xf];
        if (iBank) {
            if (i == 13) {
                this.bankSP[0] = value;
                return;
            }
            if (i == 14) {
                this.bankLR[0] = value;
                return;
            }
            if (iBank == CPUARM.BANK.FIQ && i >= 8 && i < 13) {
                this.bankUSR[i - 8] = value;
                return;
            }
        }
        this.regs[i] = value;
    }

    /**
     * enterException(vector, mode, addrReturn, fFIQ)
     *
     * Every exception does the same things: switches to the exception's mode, saves the old CPSR in that mode's
     * SPSR, sets that mode's R14 to the appropriate return address, forces ARM state, disables IRQs (and FIQs,
     * for a reset or FIQ), and jumps to the exception's vector.
     *
     * @this {CPUARM}
     * @param {number} vector (see CPUARM.VECTOR)
     * @param {number} mode (see CPUARM.MODE)
     * @param {number} addrReturn (new value for R14)
     * @param {boolean} [fFIQ] (true to disable FIQs as well)
     */
    enterException(vector, mode, addrReturn, fFIQ)
    {
        let cpsr = this.getCPSR();
        this.setMode(mode);
        this.bankSPSR[CPUARM.BANKS[mode & 0xf]] = cpsr;
        this.regs[14] = addrReturn;
        this.fThumb = false;
        this.cpsrIF |= CPUARM.PSR.I | (fFIQ? CPUARM.PSR.F : 0);
        this.intPending = this.intLines & ~this.cpsrIF;
        this.regPC = ((this.cp15Control & CPUARM.CP15.CTL_V)? 0xffff0000 : 0) | vector;
        this.nCyclesRemain -= 2;
    }

    /**
     * processAbort()
     *
     * Called by execute() whenever a memory function has thrown CPUARM.ABORT.
     *
     * A prefetch abort returns to the aborted instruction with "SUBS PC,R14,#4", and a data abort returns
     * to it with "SUBS PC,R14,#8", regardless of whether the instruction was an ARM or Thumb instruction.
     *
     * @this {CPUARM}
     */
    processAbort()
    {
        if (this.fAbortFetch) {
            this.enterException(CPUARM.VECTOR.PABT, CPUARM.MODE.ABT, this.regPCLast + 4);
        } else {
            this.enterException(CPUARM.VECTOR.DABT, CPUARM.MODE.ABT, this.regPCLast + 8);
        }
    }

    /**
     * processInterrupt()
     *
     * Called by executeOpcodes() whenever there's an unmasked interrupt request.  In both ARM and Thumb states,
     * interrupt handlers return with "SUBS PC,R14,#4".
     *
     * @this {CPUARM}
     */
    processInterrupt()
    {
        if (this.intPending & CPUARM.PSR.F) {
            this.enterException(CPUARM.VECTOR.FIQ, CPUARM.MODE.FIQ, this.regPC + 4, true);
        } else {
            this.enterException(CPUARM.VECTOR.IRQ, CPUARM.MODE.IRQ, this.regPC + 4);
        }
    }

    /**
     * setIRQ(fAssert)
     *
     * Called by the machine's interrupt controller to assert (or deassert) the CPU's IRQ input.
     *
     * @this {CPUARM}
     * @param {boolean} fAssert
     */
    setIRQ(fAssert)
    {
        if (fAssert) {
            this.intLines |= CPUARM.PSR.I;
        } else {
            this.intLines &= ~CPUARM.PSR.I;
        }
        this.intPending = this.intLines & ~this.cpsrIF;
    }

    /**
     * setFIQ(fAssert)
     *
     * Called by the machine's interrupt controller to assert (or deassert) the CPU's FIQ input.
     *
     * @this {CPUARM}
     * @param {boolean} fAssert
     */
    setFIQ(fAssert)
    {
        if (fAssert) {
            this.intLines |= CPUARM.PSR.F;
        } else {
            this.intLines &= ~CPUARM.PSR.F;
        }
        this.intPending = this.intLines & ~this.cpsrIF;
    }

    /**
     * halt()
     *
     * Stops the CPU until the next interrupt request; this is also called by devices that have their own way
     * of idling the CPU (eg, the OMAP's clock controller).
     *
     * @this {CPUARM}
     */
    halt()
    {
        this.fHalted = true;
        this.nCyclesRemain = 0;
    }

    /**
     * readCP15(crn, crm, opc1, opc2)
     *
     * @this {CPUARM}
     * @param {number} crn
     * @param {number} crm
     * @param {number} opc1
     * @param {number} opc2
     * @returns {number}
     */
    readCP15(crn, crm, opc1, opc2)
    {
        switch (crn) {
        case 0:
            return (opc2 == 1)? this.cp15CacheType : this.cp15ID;
        case 1:
            return this.cp15Control;
        case 2:
            return this.cp15TTB;
        case 3:
            return this.cp15DACR;
        case 5:
            return this.cp15FSR;
        case 6:
            return this.cp15FAR;
        case 13:
            return this.cp15PID;
        case 15:
            return this.cp15Misc[(crm << 3) | opc2] || 0;
        }
        return 0;
    }

    /**
     * writeCP15(crn, crm, opc1, opc2, value)
     *
     * @this {CPUARM}
     * @param {number} crn
     * @param {number} crm
     * @param {number} opc1
     * @param {number} opc2
     * @param {number} value
     */
    writeCP15(crn, crm, opc1, opc2, value)
    {
        switch (crn) {
        case 1:
            this.cp15Control = (value & CPUARM.CP15.CTL_MASK) | CPUARM.CP15.CTL_ONES;
            this.fMMU = !!(value & CPUARM.CP15.CTL_M);
            this.flushTLB();
            break;
        case 2:
            this.cp15TTB = value;
            this.flushTLB();
            break;
        case 3:
            this.cp15DACR = value;
            this.flushTLB();
            break;
        case 5:
            this.cp15FSR = value;
            break;
        case 6:
            this.cp15FAR = value;
            break;
        case 7:
            /**
             * All the cache operations are no-ops, since we don't emulate the caches, which leaves only
             * "wait for interrupt".
             */
            if (crm == 0 && opc2 == 4) this.halt();
            break;
        case 8:
            this.flushTLB();
            break;
        case 13:
            this.cp15PID = value & 0xfe000000;
            this.flushTLB();
            break;
        case 15:
            this.cp15Misc[(crm << 3) | opc2] = value;
            break;
        }
    }

    /**
     * flushTLB()
     *
     * @this {CPUARM}
     */
    flushTLB()
    {
        this.tlbTag.fill(-1);
    }

    /**
     * translate(addr, acc, fFetch)
     *
     * Translates a virtual address to a physical address.  This is called only when the MMU is enabled.
     *
     * Our TLB is direct-mapped, with a granularity of 1K (the smallest MMU page and subpage size), and each
     * entry records all four of a page's access permissions, so that entries remain valid across mode changes.
     *
     * @this {CPUARM}
     * @param {number} addr
     * @param {number} acc (one of the CPUARM.ACCESS bits)
     * @param {boolean} [fFetch] (true if this is an instruction fetch)
     * @returns {number}
     */
    translate(addr, acc, fFetch)
    {
        /**
         * The Fast Context Switch Extension relocates the low 32Mb of virtual memory using the process ID.
         */
        if (!(addr & 0xfe000000)) addr |= this.cp15PID;

        let vpn = addr >>> 10, i = vpn & CPUARM.TLB_MASK;
        if (this.tlbTag[i] === vpn && (this.tlbAccess[i] & acc)) {
            return this.tlbPhys[i] | (addr & 0x3ff);
        }

        let status = this.walk(addr);
        if (!status && !(this.walkAccess & acc)) {
            status = this.walkPage? CPUARM.FAULT.PAGE_PERMISSION : CPUARM.FAULT.SECTION_PERMISSION;
        }
        if (status) {
            /**
             * On ARMv4 and ARMv5, the fault status and address registers are updated only for data aborts.
             */
            if (!fFetch) {
                this.cp15FSR = (this.walkDomain << 4) | status;
                this.cp15FAR = addr;
            }
            this.fAbortFetch = !!fFetch;
            throw CPUARM.ABORT;
        }

        this.tlbTag[i] = vpn;
        this.tlbPhys[i] = this.walkPhys & ~0x3ff;
        this.tlbAccess[i] = this.walkAccess;
        return this.walkPhys;
    }

    /**
     * walk(addr)
     *
     * Walks the page tables for a virtual address.  If successful, zero is returned, along with walkPhys (the
     * physical address) and walkAccess (the set of permitted accesses); otherwise, a fault status is returned.
     * walkDomain and walkPage (true if the address was mapped by a page rather than a section) are always set.
     *
     * @this {CPUARM}
     * @param {number} addr
     * @returns {number} (0 if successful, otherwise one of CPUARM.FAULT)
     */
    walk(addr)
    {
        let bus = this.busMemory;
        let desc = bus.readQuad((this.cp15TTB & 0xffffc000) | ((addr >>> 18) & 0x3ffc));
        let ap, domain = (desc >>> 5) & 0xf;

        this.walkDomain = domain;
        this.walkPage = false;

        switch (desc & 0x3) {
        case 0x0:
            this.walkDomain = 0;
            return CPUARM.FAULT.SECTION_TRANSLATION;

        case 0x2:                                       // section (1Mb)
            this.walkPhys = (desc & 0xfff00000) | (addr & 0x000fffff);
            ap = (desc >>> 10) & 0x3;
            break;

        default: {
            let fCoarse = (desc & 0x3) == 0x1;
            this.walkPage = true;
            if (fCoarse) {                              // coarse page table (256 entries, each mapping 4K)
                desc = bus.readQuad((desc & 0xfffffc00) | ((addr >>> 10) & 0x3fc));
            } else {                                    // fine page table (1024 entries, each mapping 1K)
                desc = bus.readQuad((desc & 0xfffff000) | ((addr >>> 8) & 0xffc));
            }
            switch (desc & 0x3) {
            case 0x0:
                return CPUARM.FAULT.PAGE_TRANSLATION;
            case 0x1:                                   // large page (64K, with four 16K subpages)
                this.walkPhys = (desc & 0xffff0000) | (addr & 0x0000ffff);
                ap = (desc >>> (4 + ((addr >>> 13) & 0x6))) & 0x3;
                break;
            case 0x2:                                   // small page (4K, with four 1K subpages)
                this.walkPhys = (desc & 0xfffff000) | (addr & 0x00000fff);
                ap = (desc >>> (4 + ((addr >>> 9) & 0x6))) & 0x3;
                break;
            default:                                    // tiny page (1K)
                /**
                 * Tiny pages are valid only in fine page tables; in a coarse page table, they're UNPREDICTABLE,
                 * so we do what QEMU does and treat them as unmapped.
                 */
                if (fCoarse) return CPUARM.FAULT.PAGE_TRANSLATION;
                this.walkPhys = (desc & 0xfffffc00) | (addr & 0x000003ff);
                ap = (desc >>> 4) & 0x3;
                break;
            }
            break;
        }
        }

        switch ((this.cp15DACR >>> (domain << 1)) & 0x3) {
        case 0x1:                                       // client: accesses are checked against the AP bits
            if (ap) {
                this.walkAccess = CPUARM.AP_ACCESS[ap];
            } else {
                /**
                 * When AP is zero, access is determined by the S and R bits of the control register.
                 */
                switch (this.cp15Control & (CPUARM.CP15.CTL_S | CPUARM.CP15.CTL_R)) {
                case CPUARM.CP15.CTL_S:
                    this.walkAccess = CPUARM.ACCESS.PRIV_READ;
                    break;
                case CPUARM.CP15.CTL_R:
                    this.walkAccess = CPUARM.ACCESS.PRIV_READ | CPUARM.ACCESS.USER_READ;
                    break;
                default:
                    this.walkAccess = 0;
                    break;
                }
            }
            break;
        case 0x3:                                       // manager: accesses are not checked
            this.walkAccess = CPUARM.ACCESS.ALL;
            break;
        default:
            return this.walkPage? CPUARM.FAULT.PAGE_DOMAIN : CPUARM.FAULT.SECTION_DOMAIN;
        }
        return 0;
    }

    /**
     * translateDebug(addr)
     *
     * Used by the Debugger to translate a virtual address without checking permissions or generating faults.
     *
     * @this {CPUARM}
     * @param {number} addr
     * @returns {number|undefined} (physical address, or undefined if the address isn't mapped)
     */
    translateDebug(addr)
    {
        if (!this.fMMU) return addr;
        if (!(addr & 0xfe000000)) addr |= this.cp15PID;
        let status = this.walk(addr);
        if (status == CPUARM.FAULT.SECTION_TRANSLATION || status == CPUARM.FAULT.PAGE_TRANSLATION) return undefined;
        return this.walkPhys;
    }

    /**
     * fetchWord(addr)
     *
     * @this {CPUARM}
     * @param {number} addr
     * @returns {number} (16-bit Thumb instruction)
     */
    fetchWord(addr)
    {
        if (this.fMMU) addr = this.translate(addr, this.accRead, true);
        return this.busMemory.readPair(addr);
    }

    /**
     * fetchLong(addr)
     *
     * @this {CPUARM}
     * @param {number} addr
     * @returns {number} (32-bit ARM instruction)
     */
    fetchLong(addr)
    {
        if (this.fMMU) addr = this.translate(addr, this.accRead, true);
        return this.busMemory.readQuad(addr)|0;
    }

    /**
     * readByte(addr)
     *
     * @this {CPUARM}
     * @param {number} addr
     * @returns {number} (0-255)
     */
    readByte(addr)
    {
        if (this.fMMU) addr = this.translate(addr, this.accRead);
        return this.busMemory.readData(addr);
    }

    /**
     * readWord(addr)
     *
     * @this {CPUARM}
     * @param {number} addr (the low bit is ignored, but it's preserved in the fault address if the access aborts)
     * @returns {number} (0-65535)
     */
    readWord(addr)
    {
        if (this.fMMU) addr = this.translate(addr, this.accRead);
        return this.busMemory.readPair(addr & ~0x1);
    }

    /**
     * readLong(addr)
     *
     * @this {CPUARM}
     * @param {number} addr (the low 2 bits are ignored, but they're preserved in the fault address if the access aborts)
     * @returns {number}
     */
    readLong(addr)
    {
        if (this.fMMU) addr = this.translate(addr, this.accRead);
        return this.busMemory.readQuad(addr & ~0x3)|0;
    }

    /**
     * loadLong(addr)
     *
     * Reads a long the way LDR does: if the address isn't long-aligned, the aligned long containing the
     * address is read and then rotated, so that the addressed byte ends up in the low byte of the result.
     *
     * @this {CPUARM}
     * @param {number} addr
     * @returns {number}
     */
    loadLong(addr)
    {
        let data = this.readLong(addr);
        let n = (addr & 0x3) << 3;
        return n? ((data >>> n) | (data << (32 - n))) : data;
    }

    /**
     * writeByte(addr, b)
     *
     * @this {CPUARM}
     * @param {number} addr
     * @param {number} b (0-255)
     */
    writeByte(addr, b)
    {
        if (this.fMMU) addr = this.translate(addr, this.accWrite);
        this.busMemory.writeData(addr, b);
    }

    /**
     * writeWord(addr, w)
     *
     * @this {CPUARM}
     * @param {number} addr (the low bit is ignored, but it's preserved in the fault address if the access aborts)
     * @param {number} w (0-65535)
     */
    writeWord(addr, w)
    {
        if (this.fMMU) addr = this.translate(addr, this.accWrite);
        this.busMemory.writePair(addr & ~0x1, w);
    }

    /**
     * writeLong(addr, l)
     *
     * @this {CPUARM}
     * @param {number} addr (the low 2 bits are ignored, but they're preserved in the fault address if the access aborts)
     * @param {number} l
     */
    writeLong(addr, l)
    {
        if (this.fMMU) addr = this.translate(addr, this.accWrite);
        this.busMemory.writeQuad(addr & ~0x3, l);
    }

    /**
     * initCPU()
     *
     * Initializes the CPU's state.
     *
     * @this {CPUARM}
     */
    initCPU()
    {
        this.regs = new Int32Array(16);
        this.tmpRegs = new Int32Array(16);              // used by the "load multiple" instructions
        this.bankSP = new Int32Array(CPUARM.BANK.TOTAL);
        this.bankLR = new Int32Array(CPUARM.BANK.TOTAL);
        this.bankSPSR = new Int32Array(CPUARM.BANK.TOTAL);
        this.bankUSR = new Int32Array(5);               // R8-R12 for every mode except FIQ (valid only in FIQ mode)
        this.bankFIQ = new Int32Array(5);               // R8-R12 for FIQ mode (valid only in non-FIQ modes)
        this.tlbTag = new Int32Array(CPUARM.TLB_SIZE);
        this.tlbPhys = new Int32Array(CPUARM.TLB_SIZE);
        this.tlbAccess = new Uint8Array(CPUARM.TLB_SIZE);
        this.intLines = 0;                              // interrupt inputs (using the PSR.I and PSR.F bits)
        this.hooks = null;                              // hooked instructions, by address (see setHook())
        this.fRestored = false;
        this.resetRegs();

        for (let i = 0; i < 16; i++) {
            if (i < 15) {
                this.defineRegister("R" + i, () => this.regs[i], (value) => this.regs[i] = value);
            } else {
                this.defineRegister("R" + i, () => this.regPC, (value) => this.regPC = value|0);
            }
        }
        this.defineRegisterAlias("R13", "SP");
        this.defineRegisterAlias("R14", "LR");
        this.defineRegister("CPSR", () => this.getCPSR(), (value) => this.setCPSR(value));
        this.defineRegister("SPSR", () => this.getSPSR(), (value) => {
            let iBank = CPUARM.BANKS[this.mode & 0xf];
            if (iBank) this.bankSPSR[iBank] = value;
        });
        this.defineRegister("N", () => (this.flagN < 0? 1 : 0), (value) => this.flagN = value? -1 : 0);
        this.defineRegister("Z", () => (this.flagZ == 0? 1 : 0), (value) => this.flagZ = value? 0 : 1);
        this.defineRegister("C", () => this.flagC, (value) => this.flagC = value? 1 : 0);
        this.defineRegister("V", () => this.flagV, (value) => this.flagV = value? 1 : 0);
        this.defineRegister("T", () => (this.fThumb? 1 : 0), (value) => this.fThumb = !!value);
        this.defineRegister(Debugger.REGISTER.PC, () => this.regPC, (value) => this.regPC = value|0);
    }

    /**
     * resetRegs()
     *
     * Simulates an ARM reset, which enters Supervisor mode with interrupts disabled, turns the MMU off,
     * and starts executing at the reset vector.
     *
     * @this {CPUARM}
     */
    resetRegs()
    {
        this.regs.fill(0);
        this.bankSP.fill(0);
        this.bankLR.fill(0);
        this.bankSPSR.fill(0);
        this.bankUSR.fill(0);
        this.bankFIQ.fill(0);
        this.flagN = this.flagC = this.flagV = 0;
        this.flagZ = 1;
        this.shiftC = 0;
        this.fThumb = false;
        this.cpsrIF = CPUARM.PSR.I | CPUARM.PSR.F;
        this.mode = CPUARM.MODE.SVC;
        this.updateAccess();
        this.cp15Control = CPUARM.CP15.CTL_ONES;
        this.cp15TTB = this.cp15DACR = this.cp15FSR = this.cp15FAR = this.cp15PID = 0;
        this.cp15Misc = {};
        this.fMMU = false;
        this.flushTLB();
        this.walkPhys = this.walkAccess = this.walkDomain = 0;
        this.walkPage = this.fAbortFetch = false;
        this.fHalted = false;
        this.intPending = 0;
        this.regPC = this.regPCLast = this.addrReset;
        this.nCyclesRemain = 0;
    }

    /**
     * loadState(stateCPU)
     *
     * If any saved values don't match (possibly overridden), abandon the given state and return false.
     *
     * @this {CPUARM}
     * @param {Array} stateCPU
     * @returns {boolean}
     */
    loadState(stateCPU)
    {
        if (!stateCPU || !stateCPU.length) {
            this.printf("invalid saved state\n");
            return false;
        }
        let idDevice = stateCPU.shift();
        let version = stateCPU.shift();
        if (idDevice != this.idDevice || (version|0) !== (+CPUARM.VERSION|0)) {
            this.printf("CPU state mismatch (%s %3.2f)\n", idDevice, version);
            return false;
        }
        try {
            this.regs.set(stateCPU.shift());
            this.regPC = stateCPU.shift();
            this.bankSP.set(stateCPU.shift());
            this.bankLR.set(stateCPU.shift());
            this.bankSPSR.set(stateCPU.shift());
            this.bankUSR.set(stateCPU.shift());
            this.bankFIQ.set(stateCPU.shift());
            /**
             * The registers we just loaded are already those of the saved mode, so we must set the mode
             * BEFORE calling setCPSR(), to prevent it from trying to switch register banks.
             */
            let cpsr = stateCPU.shift();
            this.mode = cpsr & CPUARM.PSR.MODE;
            this.setCPSR(cpsr);
            this.cp15Control = stateCPU.shift();
            this.cp15TTB = stateCPU.shift();
            this.cp15DACR = stateCPU.shift();
            this.cp15FSR = stateCPU.shift();
            this.cp15FAR = stateCPU.shift();
            this.cp15PID = stateCPU.shift();
            this.cp15Misc = stateCPU.shift();
            this.fHalted = stateCPU.shift();
            this.fMMU = !!(this.cp15Control & CPUARM.CP15.CTL_M);
            this.flushTLB();
            this.fRestored = true;
        } catch(err) {
            this.printf("CPU state error: %s\n", err.message);
            return false;
        }
        return true;
    }

    /**
     * saveState(stateCPU)
     *
     * @this {CPUARM}
     * @param {Array} stateCPU
     */
    saveState(stateCPU)
    {
        stateCPU.push(this.idDevice);
        stateCPU.push(+CPUARM.VERSION);
        stateCPU.push(Array.from(this.regs));
        stateCPU.push(this.regPC);
        stateCPU.push(Array.from(this.bankSP));
        stateCPU.push(Array.from(this.bankLR));
        stateCPU.push(Array.from(this.bankSPSR));
        stateCPU.push(Array.from(this.bankUSR));
        stateCPU.push(Array.from(this.bankFIQ));
        stateCPU.push(this.getCPSR());
        stateCPU.push(this.cp15Control);
        stateCPU.push(this.cp15TTB);
        stateCPU.push(this.cp15DACR);
        stateCPU.push(this.cp15FSR);
        stateCPU.push(this.cp15FAR);
        stateCPU.push(this.cp15PID);
        stateCPU.push(this.cp15Misc);
        stateCPU.push(this.fHalted);
    }

    /**
     * onLoad(state)
     *
     * Automatically called by the Machine device if the machine's 'autoSave' property is true.
     *
     * @this {CPUARM}
     * @param {Array} state
     * @returns {boolean}
     */
    onLoad(state)
    {
        if (state) {
            let stateCPU = state[0];
            if (this.loadState(stateCPU)) {
                state.shift();
                return true;
            }
        }
        return false;
    }

    /**
     * onPower(on)
     *
     * Called by the Machine device to provide notification of a power event.
     *
     * @this {CPUARM}
     * @param {boolean} on (true to power on, false to power off)
     */
    onPower(on)
    {
        if (on) {
            this.time.start();
            if (this.inputDevice) this.inputDevice.setFocus();
        } else {
            this.time.stop();
        }
    }

    /**
     * onReset()
     *
     * Called by the Machine device to provide notification of a reset event.
     *
     * @this {CPUARM}
     */
    onReset()
    {
        this.printf("reset\n");
        this.resetRegs();
        if (!this.time.isRunning()) this.print(this.toString());
    }

    /**
     * onSave(state)
     *
     * Automatically called by the Machine device before all other devices have been powered down (eg, during
     * a page unload event).
     *
     * @this {CPUARM}
     * @param {Array} state
     */
    onSave(state)
    {
        let stateCPU = [];
        this.saveState(stateCPU);
        state.push(stateCPU);
    }

    /**
     * onUpdate(fTransition)
     *
     * @this {CPUARM}
     * @param {boolean} [fTransition]
     */
    onUpdate(fTransition)
    {
        // TODO: Decide what bindings we want to support, and update them as appropriate.
    }

    /**
     * toInstruction(addr, opcode)
     *
     * Returns a string representation of the specified instruction.
     *
     * @this {CPUARM}
     * @param {number} addr
     * @param {number|undefined} [opcode]
     * @returns {string}
     */
    toInstruction(addr, opcode)
    {
        return this.dbg && this.dbg.dumpInstruction(addr, 1) || "";
    }

    /**
     * toString()
     *
     * Returns a string representation of the current CPU state; eg:
     *
     *      R0=00000000 R1=00000000 R2=00000000 R3=00000000
     *      R4=00000000 R5=00000000 R6=00000000 R7=00000000
     *      R8=00000000 R9=00000000 R10=00000000 R11=00000000
     *      R12=00000000 SP=00000000 LR=00000000 PC=00000000
     *      CPSR=000000d3 SPSR=00000000 nzcvIFt SVC
     *      00000000: ea000006  B        0x00000020
     *
     * @this {CPUARM}
     * @returns {string}
     */
    toString()
    {
        let regs = this.regs;
        return this.sprintf("R0=%08x R1=%08x R2=%08x R3=%08x\nR4=%08x R5=%08x R6=%08x R7=%08x\nR8=%08x R9=%08x R10=%08x R11=%08x\nR12=%08x SP=%08x LR=%08x PC=%08x\nCPSR=%08x SPSR=%08x %s %s\n%s",
            regs[0], regs[1], regs[2], regs[3], regs[4], regs[5], regs[6], regs[7],
            regs[8], regs[9], regs[10], regs[11], regs[12], regs[13], regs[14], this.regPC,
            this.getCPSR(), this.getSPSR(), this.getFlagString(), CPUARM.MODE_NAMES[this.mode & 0xf] || "???", this.toInstruction(this.regPC));
    }

    /**
     * getFlagString()
     *
     * Returns the CPSR flags as a string, with each set flag in upper-case (eg, "nZCvIFt").
     *
     * @this {CPUARM}
     * @returns {string}
     */
    getFlagString()
    {
        return (this.flagN < 0? 'N' : 'n') + (this.flagZ == 0? 'Z' : 'z') + (this.flagC? 'C' : 'c') + (this.flagV? 'V' : 'v') +
               ((this.cpsrIF & CPUARM.PSR.I)? 'I' : 'i') + ((this.cpsrIF & CPUARM.PSR.F)? 'F' : 'f') + (this.fThumb? 'T' : 't');
    }
}

/**
 * Program Status Register (CPSR and SPSR) bits
 */
CPUARM.PSR = {
    N:      0x80000000|0,
    Z:      0x40000000,
    C:      0x20000000,
    V:      0x10000000,
    NZCV:   0xf0000000|0,
    I:      0x00000080,         // IRQs disabled
    F:      0x00000040,         // FIQs disabled
    T:      0x00000020,         // Thumb state
    MODE:   0x0000001f,
    MASK:   0xf00000ff|0        // all the PSR bits that exist on ARMv4T (and ARMv5T)
};

/**
 * Processor modes (the low 5 bits of the CPSR)
 */
CPUARM.MODE = {
    USR:    0x10,
    FIQ:    0x11,
    IRQ:    0x12,
    SVC:    0x13,
    ABT:    0x17,
    UND:    0x1b,
    SYS:    0x1f
};

CPUARM.MODE_NAMES = ["USR", "FIQ", "IRQ", "SVC", null, null, null, "ABT", null, null, null, "UND", null, null, null, "SYS"];

/**
 * Register banks: every mode other than User and System has its own R13, R14, and SPSR.
 */
CPUARM.BANK = {
    USR:    0,
    FIQ:    1,
    IRQ:    2,
    SVC:    3,
    ABT:    4,
    UND:    5,
    TOTAL:  6
};

/**
 * Converts the low 4 bits of a mode to a register bank (invalid modes are treated like User mode).
 */
CPUARM.BANKS = [0, 1, 2, 3, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 0];

/**
 * Exception vectors (relative to 0x00000000, or 0xffff0000 if the V bit of the control register is set)
 */
CPUARM.VECTOR = {
    RESET:  0x00,
    UND:    0x04,
    SWI:    0x08,
    PABT:   0x0c,
    DABT:   0x10,
    IRQ:    0x18,
    FIQ:    0x1c
};

/**
 * System control coprocessor (CP15) control register bits
 */
CPUARM.CP15 = {
    CTL_M:      0x0001,         // MMU enable
    CTL_A:      0x0002,         // alignment fault enable (not supported)
    CTL_C:      0x0004,         // data cache enable
    CTL_W:      0x0008,         // write buffer enable
    CTL_ONES:   0x0070,         // these bits always read as ones
    CTL_B:      0x0080,         // big-endian (not supported)
    CTL_S:      0x0100,         // system protection
    CTL_R:      0x0200,         // ROM protection
    CTL_I:      0x1000,         // instruction cache enable
    CTL_V:      0x2000,         // high exception vectors
    CTL_MASK:   0x338f
};

/**
 * MMU access types (a page's permissions are recorded as a combination of these)
 */
CPUARM.ACCESS = {
    PRIV_READ:  0x1,
    PRIV_WRITE: 0x2,
    USER_READ:  0x4,
    USER_WRITE: 0x8,
    ALL:        0xf
};

/**
 * Converts AP bits to a set of accesses (except for AP 0, which depends on the S and R control bits).
 */
CPUARM.AP_ACCESS = [0x0, 0x3, 0x7, 0xf];

/**
 * MMU fault status values (see the FSR)
 */
CPUARM.FAULT = {
    SECTION_TRANSLATION:    0x5,
    PAGE_TRANSLATION:       0x7,
    SECTION_DOMAIN:         0x9,
    PAGE_DOMAIN:            0xb,
    SECTION_PERMISSION:     0xd,
    PAGE_PERMISSION:        0xf
};

CPUARM.TLB_SIZE = 4096;
CPUARM.TLB_MASK = CPUARM.TLB_SIZE - 1;

/**
 * Number of bits set in every 8-bit value (used by the "multiple" instructions)
 */
CPUARM.BITS = new Uint8Array(256);
for (let i = 1; i < 256; i++) CPUARM.BITS[i] = CPUARM.BITS[i >> 1] + (i & 1);

/**
 * The (undefined) instruction that setHook() uses to mark a hooked instruction
 */
CPUARM.OP_HOOK = 0xe7f0c0f5|0;

/**
 * The object we throw to abort an instruction (see execute())
 */
CPUARM.ABORT = {exception: "ARM"};

CPUARM.CLASSES["CPUARM"] = CPUARM;
