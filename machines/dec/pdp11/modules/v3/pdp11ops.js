/**
 * @fileoverview PDP-11 Opcode Handlers and Helper Functions
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * Portions adapted from the JavaScript PDP 11/70 Emulator written by Paul Nankervis
 * <paulnank@hotmail.com> at <http://skn.noip.me/pdp11/pdp11.html> with permission.
 */

import PDP11 from "./pdp11.js";
import CPU from "../../../../modules/v3/cpu.js";

/**
 * @class PDP11Ops
 * @unrestricted
 */
export default class PDP11Ops extends CPU {
    /**
     * PDP11Ops(idMachine, idDevice, config)
     *
     * Decoding starts near the bottom of this file, in op1120() and op1140().  Obviously, there are
     * MANY more PDP-11 models than the 11/20 and 11/40, but for the broad model categories that PDPjs
     * supports (ie, MODEL_1120, MODEL_1140, MODEL_1145, and MODEL_1170), the biggest differences are
     * between MODEL_1120 and MODEL_1140, so decoding is divided into those two categories, and all
     * other differences are handled inside the opcode handlers.
     *
     * The basic decoding approach is to dispatch on the top 4 bits of the opcode, and if further
     * decoding is required, the dispatched function will dispatch on the next 4 bits, and so on
     * (although some of the intermediate levels dispatch only on 2 bits, which could also be handled
     * with a switch statement).
     *
     * Eventually, every opcode should end up either in an opXXX() function or opUndefined().  For
     * opcodes that perform a simple read or write operation, the entire operation is handled by
     * the opXXX() function.  For opcodes that perform a more extensive read/modify/write operation
     * (also known as an update operation), those opXXX() functions usually rely on a corresponding
     * fnXXX() helper function.
     *
     * For example, opADD() passes the helper function fnADD() to the appropriate update method.  This
     * allows the update method to perform the entire read/modify/write operation, because the modify
     * step is performed internally, via the fnXXX() helper function.
     *
     * For the handful of instructions in the 1140 tables that actually exist only on the 11/45 and
     * 11/70 (ie, MFPD, MTPD, and SPL), those opcode handlers perform their own model checks.  That's
     * simpler than creating additional tables, and seems fine for instructions that are not commonly
     * executed.
     *
     * @this {PDP11Ops}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);
    }

    /**
     * fnADD(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src
     * @param {number} dst
     * @returns {number} (dst + src)
     */
    static fnADD(src, dst)
    {
        let result = dst + src;
        this.updateAddFlags(result, src, dst);
        return result & 0xffff;
    }

    /**
     * fnADDB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src
     * @param {number} dst
     * @returns {number} (dst + src)
     */
    static fnADDB(src, dst)
    {
        let result = dst + src;
        this.updateAddFlags(result << 8, src << 8, dst << 8);
        return result & 0xff;
    }

    /**
     * fnASL(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ignored)
     * @param {number} dst
     * @returns {number} (dst << 1)
     */
    static fnASL(src, dst)
    {
        let result = dst << 1;
        this.updateShiftFlags(result);
        return result & 0xffff;
    }

    /**
     * fnASLB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ignored)
     * @param {number} dst
     * @returns {number} (dst << 1)
     */
    static fnASLB(src, dst)
    {
        let result = dst << 1;
        this.updateShiftFlags(result << 8);
        return result & 0xff;
    }

    /**
     * fnASR(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ignored)
     * @param {number} dst
     * @returns {number} (dst >> 1)
     */
    static fnASR(src, dst)
    {
        let result = (dst & 0x8000) | (dst >> 1) | (dst << 16);
        this.updateShiftFlags(result);
        return result & 0xffff;
    }

    /**
     * fnASRB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ignored)
     * @param {number} dst
     * @returns {number} (dst >> 1)
     */
    static fnASRB(src, dst)
    {
        let result = (dst & 0x80) | (dst >> 1) | (dst << 8);
        this.updateShiftFlags(result << 8);
        return result & 0xff;
    }

    /**
     * fnBIC(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src
     * @param {number} dst
     * @returns {number} (~src & dst)
     */
    static fnBIC(src, dst)
    {
        let result = dst & ~src;
        this.updateNZVFlags(result);
        return result;
    }

    /**
     * fnBICB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src
     * @param {number} dst
     * @returns {number} (~src & dst)
     */
    static fnBICB(src, dst)
    {
        let result = dst & ~src;
        this.updateNZVFlags(result << 8);
        return result;
    }

    /**
     * fnBIS(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src
     * @param {number} dst
     * @returns {number} (dst | src)
     */
    static fnBIS(src, dst)
    {
        let result = dst | src;
        this.updateNZVFlags(result);
        return result;
    }

    /**
     * fnBISB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src
     * @param {number} dst
     * @returns {number} (dst | src)
     */
    static fnBISB(src, dst)
    {
        let result = dst | src;
        this.updateNZVFlags(result << 8);
        return result;
    }

    /**
     * fnCOM(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ignored)
     * @param {number} dst
     * @returns {number} (~dst)
     */
    static fnCOM(src, dst)
    {
        let result = ~dst | 0x10000;
        this.updateAllFlags(result);
        return result & 0xffff;
    }

    /**
     * fnCOMB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ignored)
     * @param {number} dst
     * @returns {number} (~dst)
     */
    static fnCOMB(src, dst)
    {
        let result = ~dst | 0x100;
        this.updateAllFlags(result << 8);
        return result & 0xff;
    }

    /**
     * fnDEC(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ie, 1)
     * @param {number} dst
     * @returns {number} (dst - src)
     */
    static fnDEC(src, dst)
    {
        let result = dst - src;
        this.updateDecFlags(result, dst);
        return result & 0xffff;
    }

    /**
     * fnDECB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ie, 1)
     * @param {number} dst
     * @returns {number} (dst - src)
     */
    static fnDECB(src, dst)
    {
        let result = dst - src;
        this.updateDecFlags(result << 8, dst << 8);
        return result & 0xff;
    }

    /**
     * fnINC(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ie, 1)
     * @param {number} dst
     * @returns {number} (dst + src)
     */
    static fnINC(src, dst)
    {
        let result = dst + src;
        this.updateIncFlags(result, dst);
        return result & 0xffff;
    }

    /**
     * fnINCB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ie, 1)
     * @param {number} dst
     * @returns {number} (dst + src)
     */
    static fnINCB(src, dst)
    {
        let result = dst + src;
        this.updateIncFlags(result << 8, dst << 8);
        return result & 0xff;
    }

    /**
     * fnNEG(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ignored)
     * @param {number} dst
     * @returns {number} (-dst)
     */
    static fnNEG(src, dst)
    {
        let result = -dst;
        /**
         * If the sign bit of both dst and result are set, the original value must have been 0x8000, triggering overflow.
         */
        this.updateAllFlags(result, result & dst & 0x8000);
        return result & 0xffff;
    }

    /**
     * fnNEGB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ignored)
     * @param {number} dst
     * @returns {number} (-dst)
     */
    static fnNEGB(src, dst)
    {
        let result = -dst;
        /**
         * If the sign bit of both dst and result are set, the original value must have been 0x80, which triggers overflow.
         */
        this.updateAllFlags(result << 8, (result & dst & 0x80) << 8);
        return result & 0xff;
    }

    /**
     * fnROL(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ignored)
     * @param {number} dst
     * @returns {number} (dst >> 1)
     */
    static fnROL(src, dst)
    {
        let result = (dst << 1) | ((this.flagC >> 16) & 1);
        this.updateShiftFlags(result);
        return result & 0xffff;
    }

    /**
     * fnROLB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ignored)
     * @param {number} dst
     * @returns {number} (dst >> 1)
     */
    static fnROLB(src, dst)
    {
        let result = (dst << 1) | ((this.flagC >> 16) & 1);
        this.updateShiftFlags(result << 8);
        return result & 0xff;
    }

    /**
     * fnROR(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ignored)
     * @param {number} dst
     * @returns {number} (dst >> 1)
     */
    static fnROR(src, dst)
    {
        let result = (((this.flagC & 0x10000) | dst) >> 1) | (dst << 16);
        this.updateShiftFlags(result);
        return result & 0xffff;
    }

    /**
     * fnRORB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ignored)
     * @param {number} dst
     * @returns {number} (dst >> 1)
     */
    static fnRORB(src, dst)
    {
        let result = ((((this.flagC & 0x10000) >> 8) | dst) >> 1) | (dst << 8);
        this.updateShiftFlags(result << 8);
        return result & 0xff;
    }

    /**
     * fnSUB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src
     * @param {number} dst
     * @returns {number} (dst - src)
     */
    static fnSUB(src, dst)
    {
        let result = dst - src;
        this.updateSubFlags(result, src, dst);
        return result & 0xffff;
    }

    /**
     * fnSUBB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src
     * @param {number} dst
     * @returns {number} (dst - src)
     */
    static fnSUBB(src, dst)
    {
        let result = dst - src;
        this.updateSubFlags(result << 8, src << 8, dst << 8);
        return result & 0xff;
    }

    /**
     * fnSWAB(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src (ignored)
     * @param {number} dst
     * @returns {number} (dst with bytes swapped)
     */
    static fnSWAB(src, dst)
    {
        let result = (dst << 8) | (dst >> 8);
        /**
         * N and Z are based on the low byte of the result, which is the same as the high byte of dst.
         */
        this.updateNZVCFlags(dst & 0xff00);
        return result & 0xffff;
    }

    /**
     * fnXOR(src, dst)
     *
     * @this {PDP11Ops}
     * @param {number} src
     * @param {number} dst
     * @returns {number} (dst ^ src)
     */
    static fnXOR(src, dst)
    {
        let result = dst ^ src;
        this.updateNZVFlags(result);
        return result & 0xffff;
    }

    /**
     * opADC(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opADC(opcode)
    {
        this.updateDstWord(opcode, this.getCF()? 1 : 0, PDP11Ops.fnADD);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opADCB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opADCB(opcode)
    {
        this.updateDstByte(opcode, this.getCF()? 1 : 0, PDP11Ops.fnADDB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opADD(opcode)
     *
     * From the PDP-11/20 Processor HandBook (1971), p. 61:
     *
     *     Add src,dst (06SSDD)
     *
     *     Operation:
     *          (dst) = (src) + (dst)
     *
     *     Condition Codes:
     *          N: set if result < 0; cleared otherwise
     *          Z: set if result = 0; cleared otherwise
     *          V: set if there was arithmetic overflow as a result of the operation, that is both operands
     *             were of the same sign and the result was of the opposite sign; cleared otherwise
     *          C: set if there was a carry from the most significant bit of the result; cleared otherwise
     *
     *     Description:
     *          Adds the source operand to the destination operand and stores the result at the destination address.
     *          The original contents of the destination are lost. The contents of the source are not affected.
     *          Two's complement addition is performed.
     *
     *     Examples:
     *          Add to register:            ADD 20,R0
     *          Add to memory:              ADD R1,XXX
     *          Add register to register:   ADD R1,R2
     *          Add memory to memory:       ADD @#17750,XXX
     *
     *          XXX is a programmer-defined mnemonic for a memory location.
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opADD(opcode)
    {
        this.updateDstWord(opcode, this.readSrcWord(opcode), PDP11Ops.fnADD);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) + (this.srcReg && this.dstReg >= 6? 1 : 0) : (this.srcMode? (3 + 2) : (2 + 1)) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opASH(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opASH(opcode)
    {
        let src = this.readDstWord(opcode);
        let reg = (opcode >> 6) & 7;
        let result = this.regsGen[reg];
        if (result & 0x8000) result |= 0xffff0000;
        this.flagC = this.flagV = 0;
        src &= 0x3F;
        if (src & 0x20) {
            src = 64 - src;         // shift right
            if (src > 16) src = 16;
            this.flagC = result << (17 - src);
            result = result >> src;
        } else if (src) {
            if (src > 16) {         // shift left
                this.flagV = result;
                result = 0;
            } else {
                result = result << src;
                this.flagC = result;
                let dst = (result >> 15) & 0xffff;  // check successive sign bits
                if (dst && dst !== 0xffff) this.flagV = 0x8000;
            }
        }
        this.regsGen[reg] = result & 0xffff;
        this.flagN = this.flagZ = result;
        this.nCyclesRemain -= (this.dstMode? (5 + 1) : (6 + 1)) + src;
    }

    /**
     * opASHC(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opASHC(opcode)
    {
        let src = this.readDstWord(opcode);
        let reg = (opcode >> 6) & 7;
        let dst = (this.regsGen[reg] << 16) | this.regsGen[reg | 1];
        let result;
        this.flagC = this.flagV = 0;
        src &= 0x3F;
        if (src & 0x20) {
            src = 64 - src;         // shift right
            if (src > 32) src = 32;
            result = dst >> (src - 1);
            this.flagC = result << 16;
            result >>= 1;
            if (dst & 0x80000000) result |= 0xffffffff << (32 - src);
        } else {
            if (src) {              // shift left
                result = dst << (src - 1);
                this.flagC = result >> 15;
                result <<= 1;
                if (src > 32) src = 32;
                dst = dst >> (32 - src);
                if (dst) {
                    dst |= (0xffffffff << src) & 0xffffffff;
                    if (dst !== 0xffffffff) this.flagV = 0x8000;
                }
            } else {
                result = dst;
            }
        }
        this.regsGen[reg] = (result >> 16) & 0xffff;
        this.regsGen[reg | 1] = result & 0xffff;
        this.flagN = result >> 16;
        this.flagZ = result >> 16 | result;
        this.nCyclesRemain -= (this.dstMode? (5 + 1) : (6 + 1)) + src;
    }

    /**
     * opASL(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opASL(opcode)
    {
        this.updateDstWord(opcode, 0, PDP11Ops.fnASL);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opASLB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opASLB(opcode)
    {
        this.updateDstByte(opcode, 0, PDP11Ops.fnASLB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opASR(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opASR(opcode)
    {
        this.updateDstWord(opcode, 0, PDP11Ops.fnASR);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opASRB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opASRB(opcode)
    {
        this.updateDstByte(opcode, 0, PDP11Ops.fnASRB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) + (this.dstAddr & 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opBCC(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBCC(opcode)
    {
        this.branch(opcode, !this.getCF());
    }

    /**
     * opBCS(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBCS(opcode)
    {
        this.branch(opcode, this.getCF());
    }

    /**
     * opBIC(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBIC(opcode)
    {
        this.updateDstWord(opcode, this.readSrcWord(opcode), PDP11Ops.fnBIC);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) + (this.srcReg && this.dstReg >= 6? 1 : 0) : (this.srcMode? (3 + 2) : (2 + 1)) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opBICB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBICB(opcode)
    {
        this.updateDstByte(opcode, this.readSrcByte(opcode), PDP11Ops.fnBICB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) + (this.srcReg && this.dstReg >= 6? 1 : 0) : (this.srcMode? (3 + 2) : (2 + 1)) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opBIS(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBIS(opcode)
    {
        this.updateDstWord(opcode, this.readSrcWord(opcode), PDP11Ops.fnBIS);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) + (this.srcReg && this.dstReg >= 6? 1 : 0) : (this.srcMode? (3 + 2) : (2 + 1)) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opBISB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBISB(opcode)
    {
        this.updateDstByte(opcode, this.readSrcByte(opcode), PDP11Ops.fnBISB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) + (this.srcReg && this.dstReg >= 6? 1 : 0) : (this.srcMode? (3 + 2) : (2 + 1)) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opBIT(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBIT(opcode)
    {
        let src = this.readSrcWord(opcode);
        let dst = this.readDstWord(opcode);
        this.updateNZVFlags((src < 0? this.regsGen[-src-1] : src) & dst);
        this.nCyclesRemain -= (this.dstMode? (3 + 1) + (this.srcReg && this.dstReg >= 6? 1 : 0) : (this.srcMode? (3 + 1) : (2 + 1)) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opBITB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBITB(opcode)
    {
        let src = this.readSrcByte(opcode);
        let dst = this.readDstByte(opcode);
        this.updateNZVFlags(((src < 0? (this.regsGen[-src-1] & 0xff) : src) & dst) << 8);
        this.nCyclesRemain -= (this.dstMode? (3 + 1) + (this.srcReg && this.dstReg >= 6? 1 : 0) : (this.srcMode? (3 + 1) : (2 + 1)) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opBEQ(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBEQ(opcode)
    {
        this.branch(opcode, this.getZF());
    }

    /**
     * opBGE(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBGE(opcode)
    {
        this.branch(opcode, !this.getNF() == !this.getVF());
    }

    /**
     * opBGT(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBGT(opcode)
    {
        this.branch(opcode, !this.getZF() && (!this.getNF() == !this.getVF()));
    }

    /**
     * opBHI(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBHI(opcode)
    {
        this.branch(opcode, !this.getCF() && !this.getZF());
    }

    /**
     * opBLE(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBLE(opcode)
    {
        this.branch(opcode, this.getZF() || (!this.getNF() != !this.getVF()));
    }

    /**
     * opBLOS(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBLOS(opcode)
    {
        this.branch(opcode, this.getCF() || this.getZF());
    }

    /**
     * opBLT(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBLT(opcode)
    {
        this.branch(opcode, !this.getNF() != !this.getVF());
    }

    /**
     * opBMI(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBMI(opcode)
    {
        this.branch(opcode, this.getNF());
    }

    /**
     * opBNE(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBNE(opcode)
    {
        this.branch(opcode, !this.getZF());
    }

    /**
     * opBPL(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBPL(opcode)
    {
        this.branch(opcode, !this.getNF());
    }

    /**
     * opBPT(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBPT(opcode)
    {
        this.trap(PDP11.TRAP.BPT, 0, PDP11.REASON.OPCODE);
    }

    /**
     * opBR(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBR(opcode)
    {
        this.branch(opcode, true);
    }

    /**
     * opBVC(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBVC(opcode)
    {
        this.branch(opcode, !this.getVF());
    }

    /**
     * opBVS(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opBVS(opcode)
    {
        this.branch(opcode, this.getVF());
    }

    /**
     * opCLR(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opCLR(opcode)
    {
        this.writeDstWord(opcode, 0, this.updateAllFlags);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opCLRB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opCLRB(opcode)
    {
        this.writeDstByte(opcode, 0, PDP11.WRITE.BYTE, this.updateAllFlags);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opCLC(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opCLC(opcode)
    {
        this.clearCF();
        this.nCyclesRemain -= (4 + 1);
    }

    /**
     * opCLN(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opCLN(opcode)
    {
        this.clearNF();
        this.nCyclesRemain -= (4 + 1);
    }

    /**
     * opCLV(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opCLV(opcode)
    {
        this.clearVF();
        this.nCyclesRemain -= (4 + 1);
    }

    /**
     * opCLZ(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opCLZ(opcode)
    {
        this.clearZF();
        this.nCyclesRemain -= (4 + 1);
    }

    /**
     * opCLx(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opCLx(opcode)
    {
        if (opcode & 0x1) this.clearCF();
        if (opcode & 0x2) this.clearVF();
        if (opcode & 0x4) this.clearZF();
        if (opcode & 0x8) this.clearNF();
        /**
         * TODO: Review whether this class of undocumented instructions really has a constant cycle time.
         */
        this.nCyclesRemain -= (4 + 1);
    }

    /**
     * opCMP(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opCMP(opcode)
    {
        let src = this.readSrcWord(opcode);
        let dst = this.readDstWord(opcode);
        let result = (src = (src < 0? this.regsGen[-src-1] : src)) - dst;
        /**
         * NOTE: CMP calculates (src - dst) rather than (dst - src), so src and dst updateSubFlags() parms must be reversed.
         */
        this.updateSubFlags(result, dst, src);
        this.nCyclesRemain -= (this.dstMode? (3 + 1) + (this.srcReg && this.dstReg >= 6? 1 : 0) : (this.srcMode? (3 + 1) : (2 + 1)) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opCMPB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opCMPB(opcode)
    {
        let src = this.readSrcByte(opcode);
        let dst = this.readDstByte(opcode);
        let result = (src = (src < 0? (this.regsGen[-src-1] & 0xff): src) << 8) - (dst <<= 8);
        /**
         * NOTE: CMP calculates (src - dst) rather than (dst - src), so src and dst updateSubFlags() parms must be reversed.
         */
        this.updateSubFlags(result, dst, src);
        this.nCyclesRemain -= (this.dstMode? (3 + 1) + (this.srcReg && this.dstReg >= 6? 1 : 0) : (this.srcMode? (3 + 1) : (2 + 1)) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opCOM(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opCOM(opcode)
    {
        this.updateDstWord(opcode, 0, PDP11Ops.fnCOM);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opCOMB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opCOMB(opcode)
    {
        this.updateDstByte(opcode, 0, PDP11Ops.fnCOMB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opDEC(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opDEC(opcode)
    {
        this.updateDstWord(opcode, 1, PDP11Ops.fnDEC);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opDECB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opDECB(opcode)
    {
        this.updateDstByte(opcode, 1, PDP11Ops.fnDECB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opDIV(opcode)
     *
     * The instruction "DIV SRC,Rn" determines SRC using the DSTMODE portion of the opcode and Rn using
     * the SRCMODE portion; Rn can only be a register (and it should be an EVEN-numbered register, lest you
     * get unexpected results).  The dividend (DST) is then calculated as:
     *
     *      DST = (regs[Rn] << 16) | (regs[Rn|1])
     *
     * DST is divided by SRC, and the quotient is stored in regs[Rn] and the remainder in regs[Rn|1].
     *
     * For example:
     *
     *      DIV     R4,R0
     *
     * where R4 = 006400 and R0,R1 = 000000,015000 will result in R0,R1 = 000002,000000.
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opDIV(opcode)
    {
        /**
         * TODO: Review and determine if flag updates can be encapsulated in an updateDivFlags() function.
         */
       let src = this.readDstWord(opcode);
        if (!src) {
            this.flagN = 0;         // NZVC
            this.flagZ = 0;
            this.flagV = 0x8000;
            this.flagC = 0x10000;   // divide by zero
            this.nCyclesRemain -= (6 + 1);
        } else {
            let reg = (opcode >> 6) & 7;
            let dst = (this.regsGen[reg] << 16) | this.regsGen[reg | 1];
            this.flagC = this.flagV = 0;
            if (src & 0x8000) src |= ~0xffff;
            let result = ~~(dst / src);
            if (result >= -32768 && result <= 32767) {
                this.regsGen[reg] = result & 0xffff;
                this.regsGen[reg | 1] = (dst - (result * src)) & 0xffff;
                this.flagZ = (result >> 16) | result;
                this.flagN = result >> 16;
            } else {
                this.flagV = 0x8000;                                // overflow - following are indeterminate
                this.flagZ = (result >> 15) | result;               // dodgy
                this.flagN = dst >> 16;                             // just as dodgy
                if (src === -1 && this.regsGen[reg] === 0xfffe) {
                    this.regsGen[reg] = this.regsGen[reg | 1] = 1;  // etc
                }
            }
            this.nCyclesRemain -= (52 + 1);                           // 52 is the average of the shortest and longest times
        }
    }

    /**
     * opEMT(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opEMT(opcode)
    {
        this.trap(PDP11.TRAP.EMT, 0, PDP11.REASON.OPCODE);
        this.nCyclesRemain -= (22 + 3 - 5);
    }

    /**
     * opHALT(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opHALT(opcode)
    {
        if (this.regPSW & PDP11.PSW.CMODE) {
            this.regErr |= PDP11.CPUERR.BADHALT;
            this.trap(PDP11.TRAP.BUS, 0, PDP11.REASON.HALT);
        } else {
            if (this.panel) {
                /**
                 * The PDP-11/20 Handbook (1971) says that HALT does the following:
                 *
                 *      Causes the processor operation to cease. The console is given control of the bus.
                 *      The console data lights display the contents of RO; the console address lights display
                 *      the address after the halt instruction. Transfers on the UNIBUS are terminated immediately.
                 *      The PC points to the next instruction to be executed. Pressing the continue key on the
                 *      console causes processor operation to resume. No INIT signal is given.
                 *
                 * However, the PDP-11/70 Handbook (1979) suggests some slight differences:
                 *
                 *      Causes the processor operation to cease. The console is given control of the processor.
                 *      The data lights display the contents of the PC (which is the address of the HALT instruction
                 *      plus 2). Transfers on the UNIBUS are terminated immediately. Pressing the continue key on
                 *      the console causes processor operation to resume.
                 *
                 * Given that the 11/70 doesn't saying anything about displaying R0 on a HALT, and also given that
                 * the 11/70 CPU EXERCISER diagnostic writes a value to the Console Switch/Display Register immediately
                 * before HALT'ing, I'm going to assume that updating the data display with R0 is unique to the 11/20.
                 *
                 * Also, I'm a little suspicious of the 11/70 comment that the "data lights display the contents of
                 * the PC," since previous models display the PC on the ADDRESS lights, not the DATA lights.  And as
                 * I already explained, doing anything to the data lights at this point would undo what the 11/70
                 * diagnostics do.
                 */
                if (this.model == PDP11.MODEL_1120) {
                    this.panel.setData(this.regsGen[0], true);
                }
            }
            if (!this.dbg) {
                /**
                 * This will leave the PC exactly where it's supposed to be: at the address of the HALT + 2.
                 */
                this.time.stop();
            } else {
                /**
                 * When the Debugger is present, this call will rewind PC by 2 so that the HALT instruction is
                 * displayed, making it clear why the processor stopped; the user could also use the "dh" command
                 * to dump the Debugger's instruction history buffer to see why it stopped, assuming the history
                 * buffer is enabled, but that's more work.
                 *
                 * Because rewinding is not normal CPU behavior, attempting to Run again (or use the Debugger's
                 * "g" command) would cause an immediate HALT again -- except that checkInstruction() checks for that
                 * precise condition, so if the CPU starts on a HALT, checkInstruction() will skip over it.
                 */
                this.dbg.stopCPU("halt");
            }
        }
        this.nCyclesRemain -= 7;
    }

    /**
     * opINC(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opINC(opcode)
    {
        this.updateDstWord(opcode, 1, PDP11Ops.fnINC);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opINCB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opINCB(opcode)
    {
        this.updateDstByte(opcode, 1, PDP11Ops.fnINCB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opIOT(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opIOT(opcode)
    {
        this.trap(PDP11.TRAP.IOT, 0, PDP11.REASON.OPCODE);
        this.nCyclesRemain -= (22 + 3 - 5);
    }

    /**
     * opJMP(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opJMP(opcode)
    {
        /**
         * Since JMP and JSR opcodes have their own unique timings for the various dst modes,
         * we snapshot nCyclesRemain before decoding the mode and use that to update nCyclesRemain.
         */
        this.nCyclesSnapped = this.nCyclesRemain;
        this.setPC(this.readDstAddr(opcode));
        this.nCyclesRemain = this.nCyclesSnapped - PDP11Ops.JMP_CYCLES[this.dstMode];
    }

    /**
     * opJSR(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opJSR(opcode)
    {
        /**
         * Since JMP and JSR opcodes have their own unique timings for the various dst modes,
         * we snapshot nCyclesRemain before decoding the mode and use that to update nCyclesRemain.
         */
        this.nCyclesSnapped = this.nCyclesRemain;
        let addr = this.readDstAddr(opcode);
        /**
         * As per the WARNING in readSrcWord(), reading the SRC register AFTER decoding the DST operand
         * is entirely appropriate.
         */
        let reg = (opcode >> PDP11.SRCMODE.SHIFT) & PDP11.OPREG.MASK;
        this.pushWord(this.regsGen[reg]);
        this.regsGen[reg] = this.getPC();
        this.setPC(addr);
        this.nCyclesRemain = this.nCyclesSnapped - PDP11Ops.JSR_CYCLES[this.dstMode];
    }

    /**
     * opMARK(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opMARK(opcode)
    {
        let addr = (this.getPC() + ((opcode & 0x3F) << 1)) & 0xffff;
        let src = this.readWord(addr | this.addrDSpace);
        this.setPC(this.regsGen[5]);
        this.setSP(addr + 2);
        this.regsGen[5] = src;
        this.nCyclesRemain -= (6 + 2);
    }

    /**
     * opMFPD(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opMFPD(opcode)
    {
        let data = this.readWordFromPrevSpace(opcode, PDP11.ACCESS.DSPACE);
        this.updateNZVFlags(data);
        this.pushWord(data);
        this.nCyclesRemain -= (10 + 1);
    }

    /**
     * opMFPI(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opMFPI(opcode)
    {
        let data = this.readWordFromPrevSpace(opcode, PDP11.ACCESS.ISPACE);
        this.updateNZVFlags(data);
        this.pushWord(data);
        this.nCyclesRemain -= (10 + 1);
    }

    /**
     * opMFPS(opcode)
     *
     *      1067XX  MFPS - Move Byte From PSW
     *
     *      The 8-bit contents of the PS are moved to the effective destination.  If destination is mode 0,
     *      PS bit 7 is sign extended through the upper byte of the register.  The destination operand is treated
     *      as a byte address.  11/34A only.
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opMFPS(opcode)
    {
        PDP11Ops.opUndefined.call(this, opcode);
    }

    /**
     * opMFPT(opcode)
     *
     *      000007  MFPT - Move From Processor Type
     *
     *      Loads R0 with a value indicating the processor type.
     *
     *      R0  Hardware
     *       1  PDP-11/44
     *       3  PDP-11/24 (should be 2)
     *       3  PDP-11/23
     *       4  SBC-11/21
     *       5  All J11 chips including 11/73, 11/83, 11/93
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opMFPT(opcode)
    {
        PDP11Ops.opUndefined.call(this, opcode);
    }

    /**
     * opMOV(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opMOV(opcode)
    {
        /**
         * Since MOV opcodes have their own unique timings for the various dst modes,
         * we snapshot nCyclesRemain after decoding the src mode and use that to update nCyclesRemain.
         */
        let data = this.readSrcWord(opcode);
        this.nCyclesSnapped = this.nCyclesRemain;
        this.writeDstWord(opcode, data, this.updateNZVFlags);
        this.nCyclesRemain = this.nCyclesSnapped - PDP11Ops.MOV_CYCLES[(this.srcMode? 8 : 0) + this.dstMode] + (this.dstReg == 7 && !this.dstMode? 2 : 0);
    }

    /**
     * opMOVB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opMOVB(opcode)
    {
        let data = this.readSrcByte(opcode);
        this.writeDstByte(opcode, data, PDP11.WRITE.SBYTE, this.updateNZVFlags);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) + (this.srcReg && this.dstReg >= 6? 1 : 0) : (this.srcMode? (3 + 2) : (2 + 1)) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opMTPD(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opMTPD(opcode)
    {
        /**
         * Since MTPD and MTPI opcodes have their own unique timings for the various dst modes,
         * we snapshot nCyclesRemain before decoding the mode and use that to update nCyclesRemain.
         */
        let data = this.popWord();
        this.nCyclesSnapped = this.nCyclesRemain;
        this.updateNZVFlags(data);
        this.writeWordToPrevSpace(opcode, PDP11.ACCESS.DSPACE, data);
        this.nCyclesRemain = this.nCyclesSnapped - PDP11Ops.MTP_CYCLES[this.dstMode];
    }

    /**
     * opMTPI(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opMTPI(opcode)
    {
        /**
         * Since MTPD and MTPI opcodes have their own unique timings for the various dst modes,
         * we snapshot nCyclesRemain before decoding the mode and use that to update nCyclesRemain.
         */
        let data = this.popWord();
        this.nCyclesSnapped = this.nCyclesRemain;
        this.updateNZVFlags(data);
        this.writeWordToPrevSpace(opcode, PDP11.ACCESS.ISPACE, data);
        this.nCyclesRemain = this.nCyclesSnapped - PDP11Ops.MTP_CYCLES[this.dstMode];
    }

    /**
     * opMTPS(opcode)
     *
     *      1064XX  MTPS - Move Byte To PSW
     *
     *      The 8 bits of the effective operand replace the current contents of the PS <0:7>.  The source operand
     *      address is treated as a byte address.  Note that PS bit 4 cannot be set with this instruction.  The
     *      src operand remains unchanged.  11/34A only.
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opMTPS(opcode)
    {
        PDP11Ops.opUndefined.call(this, opcode);
    }

    /**
     * opMUL(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opMUL(opcode)
    {
        let src = this.readDstWord(opcode);
        let reg = (opcode >> 6) & 7;
        let dst = this.regsGen[reg];
        let result = ((src << 16) >> 16) * ((dst << 16) >> 16);
        this.regsGen[reg] = (result >> 16) & 0xffff;
        this.regsGen[reg | 1] = result & 0xffff;
        this.updateMulFlags(result|0);
        this.nCyclesRemain -= (22 + 1);
    }

    /**
     * opNEG(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opNEG(opcode)
    {
        this.updateDstWord(opcode, 0, PDP11Ops.fnNEG);
        this.nCyclesRemain -= (this.dstMode? (10 + 1) : (5 + 1));
    }

    /**
     * opNEGB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opNEGB(opcode)
    {
        this.updateDstByte(opcode, 0, PDP11Ops.fnNEGB);
        this.nCyclesRemain -= (this.dstMode? (10 + 1) : (5 + 1));
    }

    /**
     * opNOP(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opNOP(opcode)
    {
        this.nCyclesRemain -= (4 + 1);        // TODO: Review (this is just a guess based on CLC)
    }

    /**
     * opRESET(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opRESET(opcode)
    {
        if (!(this.regPSW & PDP11.PSW.CMODE)) {
            this.resetCPU();

            if (this.panel) {
                /**
                 * The PDP-11/70 XXDP test "EKBBF0" reports the following, with PANEL messages on ("m panel on"):
                 *
                 *      CNSW.writeWord(177570,000101) @033502
                 *      CNSW.readWord(177570): 000000 @032114
                 *      LOOK AT THE CONSOLE LIGHTS
                 *      THE DATA LIGHTS SHOULD READ 166667
                 *      THE ADDRESS LIGHTS SHOULD READ  CNSW.readWord(177570): 000000 @032150
                 *      032236
                 *      CHANGE SWITCH 7 TO CONTINUE
                 *      CNSW.readWord(177570): 000000 @032236
                 *      stopped (31518011 instructions, 358048873 cycles, 58644 ms, 6105465 hz)
                 *      R0=166667 R1=002362 R2=000000 R3=000000 R4=000000 R5=026642
                 *      SP=001074 PC=032236 PS=000344 SR=00000000 T0 N0 Z1 V0 C0
                 *      032236: 032737 000200 177570   BIT   #200,@#177570
                 *      >> tr
                 *      CNSW.readWord(177570): 000000 @032236 (cpu halted)
                 *      R0=166667 R1=002362 R2=000000 R3=000000 R4=000000 R5=026642
                 *      SP=001074 PC=032244 PS=000344 SR=00000000 T0 N0 Z1 V0 C0
                 *      032244: 001773                 BEQ   032234                 ;cycles=0
                 *      >> tr
                 *      R0=166667 R1=002362 R2=000000 R3=000000 R4=000000 R5=026642
                 *      SP=001074 PC=032234 PS=000344 SR=00000000 T0 N0 Z1 V0 C0
                 *      032234: 000005                 RESET                        ;cycles=5
                 *
                 * It's a little hard to see why the DATA lights should read 166667, since the PANEL messages indicate
                 * that the last CNSW.writeWord(177570) was for 000101, not 166667.  So I'm guessing that the RESET
                 * instruction is supposed to propagate R0 to the console's DISPLAY register.
                 *
                 * This is similar to what we do for the HALT instruction (but only if this.model == PDP11.MODEL_1120).
                 * These Console features do not seem to be very well documented, assuming they exist.
                 *
                 * UPDATE: This behavior appears to be confirmed by remarks in the PDP-11/20 Processor Handbook (1971),
                 * p. 141:
                 *
                 *      HALT - displays processor register R0 when bus control is transferred to console during a HALT
                 *      instruction.
                 *
                 *      RESET - displays register R0 for during [duration?] of RESET (70 msec).
                 *
                 * I haven't found similar remarks in the PDP-11/70 Processor Handbooks, so I'm not sure if that's an
                 * oversight or if 11/70 panels are slightly different in this regard.  It's also not clear what they meant
                 * by "for duration of RESET".  Is something supposed to happen to the DATA lights after the RESET is done?
                 */
                this.panel.setData(this.regsGen[0], true);
            }
        }
        this.nCyclesRemain -= 667;            // TODO: Review (but it's definitely a big number)
    }

    /**
     * opROL(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opROL(opcode)
    {
        this.updateDstWord(opcode, 0, PDP11Ops.fnROL);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opROLB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opROLB(opcode)
    {
        this.updateDstByte(opcode, 0, PDP11Ops.fnROLB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opROR(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opROR(opcode)
    {
        this.updateDstWord(opcode, 0, PDP11Ops.fnROR);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opRORB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opRORB(opcode)
    {
        this.updateDstByte(opcode, 0, PDP11Ops.fnRORB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) + (this.dstAddr & 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opRTI(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opRTI(opcode)
    {
        this.trapReturn();
        /**
         * Unlike RTT, RTI permits an immediate trace, which we resolve by propagating PSW.TF to OPFLAG.TRAP_TF
         * (which, as written below, requires that both flags have the same bit value; see defines.js).
         *
         * NOTE: This RTI trace behavior is NEW for machines that have both RTI and RTT.  Early models didn't have RTT,
         * so the old RTI behaved exactly like the new RTT.  Which is why the 11/20 jump table below calls opRTT() instead
         * of opRTI() for RTI.
         */
        this.opFlags |= (this.regPSW & PDP11.PSW.TF);
        this.nCyclesRemain -= (10 + 3);
    }

    /**
     * opRTS(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opRTS(opcode)
    {
        if (opcode & 0x08) {
            PDP11Ops.opUndefined.call(this, opcode);
            return;
        }
        let src = this.popWord();
        let reg = opcode & PDP11.OPREG.MASK;
        /**
         * When the popular "RTS PC" form is used, we might as well eliminate the useless setting of PC...
         */
        if (reg == PDP11.REG.PC) {
            this.setPC(src);
        } else {
            this.setPC(this.regsGen[reg]);
            this.regsGen[reg] = src;
        }
        this.nCyclesRemain -= (7 + 2);
    }

    /**
     * opRTT(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opRTT(opcode)
    {
        this.trapReturn();
        this.nCyclesRemain -= (10 + 3);
    }

    /**
     * opSBC(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opSBC(opcode)
    {
        this.updateDstWord(opcode, this.getCF()? 1 : 0, PDP11Ops.fnSUB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opSBCB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opSBCB(opcode)
    {
        this.updateDstByte(opcode, this.getCF()? 1 : 0, PDP11Ops.fnSUBB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opSEC(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opSEC(opcode)
    {
        this.setCF();
        this.nCyclesRemain -= (4 + 1);
    }

    /**
     * opSEN(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opSEN(opcode)
    {
        this.setNF();
        this.nCyclesRemain -= (4 + 1);
    }

    /**
     * opSEV(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opSEV(opcode)
    {
        this.setVF();
        this.nCyclesRemain -= (4 + 1);
    }

    /**
     * opSEZ(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opSEZ(opcode)
    {
        this.setZF();
        this.nCyclesRemain -= (4 + 1);
    }

    /**
     * opSEx(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opSEx(opcode)
    {
        if (opcode & 0x1) this.setCF();
        if (opcode & 0x2) this.setVF();
        if (opcode & 0x4) this.setZF();
        if (opcode & 0x8) this.setNF();
        /**
         * TODO: Review whether this class of undocumented instructions really has a constant cycle time.
         */
        this.nCyclesRemain -= (4 + 1);
    }

    /**
     * opSOB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode (077Rnn)
     */
    static opSOB(opcode)
    {
        let reg = (opcode & PDP11.SRCMODE.REG) >> PDP11.SRCMODE.SHIFT;
        if ((this.regsGen[reg] = ((this.regsGen[reg] - 1) & 0xffff))) {
            this.setPC(this.getPC() - ((opcode & PDP11.DSTMODE.MASK) << 1));
            this.nCyclesRemain += 1;          // unlike normal branches, taking this branch is actually 1 cycle faster
        }
        this.nCyclesRemain -= (5 + 1);
    }

    /**
     * opSPL(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opSPL(opcode)
    {
        if (!(opcode & 0x08) || this.model < PDP11.MODEL_1145) {
            PDP11Ops.opUndefined.call(this, opcode);
            return;
        }
        if (!(this.regPSW & PDP11.PSW.CMODE)) {
            this.regPSW = (this.regPSW & ~PDP11.PSW.PRI) | ((opcode & 0x7) << PDP11.PSW.SHIFT.PRI);
            this.opFlags |= PDP11.OPFLAG.IRQ_DELAY;
            this.opFlags &= ~PDP11.OPFLAG.IRQ;
        }
        this.nCyclesRemain -= (4 + 1);
    }

    /**
     * opSUB(opcode)
     *
     * From the PDP-11/20 Processor HandBook (1971), p. 62:
     *
     *     Subtract src,dst (16SSDD)
     *
     *     Operation:
     *          (dst) = (dst) - (src) [in detail, (dst) + ~(src) + 1 (dst)]
     *
     *     Condition Codes:
     *          N: set if result < 0; cleared otherwise
     *          Z: set if result = 0; cleared otherwise
     *          V: set if there was arithmetic overflow as a result of the operation, that is if operands were of
     *             opposite signs and the sign of the source was the same as the sign of the result; cleared otherwise
     *          C: cleared if there was a carry from the most significant bit of the result; set otherwise
     *
     *     Description:
     *          Subtracts the source operand from the destination operand and leaves the result at the destination address.
     *          The original contents of the destination are lost. The contents of the source are not affected.
     *          In double-precision arithmetic the C-bit, when set, indicates a "borrow".
     *
     *     Example:
     *                  SUB R1,R2
     *
     *              BEFORE          AFTER
     *          (R1) = 011111   (R2) = 012345
     *          (R1) = 011111   (R2) = 001234
     *
     *              NZVC            NZVC
     *              1111            0001
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opSUB(opcode)
    {
        this.updateDstWord(opcode, this.readSrcWord(opcode), PDP11Ops.fnSUB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) + (this.srcReg && this.dstReg >= 6? 1 : 0) : (this.srcMode? (3 + 2) : (2 + 1)) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opSWAB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opSWAB(opcode)
    {
        this.updateDstWord(opcode, 0, PDP11Ops.fnSWAB);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opSXT(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opSXT(opcode)
    {
        this.writeDstWord(opcode, this.getNF()? 0xffff : 0, this.updateNZVFlags);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opTRAP(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opTRAP(opcode)
    {
        this.trap(PDP11.TRAP.TRAP, 0, PDP11.REASON.OPCODE);
    }

    /**
     * opTST(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opTST(opcode)
    {
        let result = this.readDstWord(opcode);
        this.assert(!(result & ~0xffff));   // assert that C flag will be clear
        this.updateAllFlags(result);
        this.nCyclesRemain -= (this.dstMode? (3 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opTSTB(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opTSTB(opcode)
    {
        let result = this.readDstByte(opcode);
        this.assert(!(result & ~0xff));     // assert that C flag will be clear
        this.updateAllFlags(result << 8);
        this.nCyclesRemain -= (this.dstMode? (3 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opWAIT(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opWAIT(opcode)
    {
        /**
         * The original PDP-11 emulation code would actually stop emulating instructions now, relying on assorted
         * setTimeout() callbacks, setInterval() callbacks, device XHR (XMLHttpRequest) callbacks, etc, to eventually
         * call interrupt(), which would then transition the CPU out of its "wait" state and kickstart emulate() again.
         *
         * That approach isn't compatible with PCjs emulators, which prefer to rely on the simulated CPU clock to
         * drive all simulated device updates.  This means components should call the CPU's setTimer() function, which
         * invokes the provided callback when the number of CPU cycles that correspond to the requested number of
         * milliseconds have elapsed.  This also gives us the ability to scale device response times as needed if the
         * user decides to crank up CPU speed, and to freeze them along with the CPU whenever the user halts the machine.
         *
         * However, the PCjs approach requires the CPU to continue running.  One simple solution to this dilemma:
         *
         *      1) opWAIT() sets a new opFlags bit (OPFLAG.WAIT)
         *      2) Rewind the PC back to the WAIT instruction
         *      3) Whenever stepCPU() detects OPFLAG.WAIT, call checkInterrupts()
         *      4) If checkInterrupts() detects an interrupt, advance PC past the WAIT and then dispatch the interrupt
         *
         * Technically, the PC is already exactly where it's supposed to be, so why are we wasting time with steps
         * 2 and 4?  It's largely for the Debugger's sake, so that as long as execution is "blocked" by a WAIT, that's
         * what you'll see in the Debugger.  I could make those steps conditioned on the presence of the Debugger,
         * but I feel it's better to keep all code paths the same.
         *
         * NOTE: It's almost always a bad idea to add more checks to the inner stepCPU() loop, because every additional
         * check can have a measurable (negative) impact on performance.  Which is why it's important to use opFlags bits
         * whenever possible, since we can test for multiple (up to 32) exceptional conditions with a single check.
         *
         * We also used to update the machine's display(s) whenever transitioning to the WAIT state.  However, that
         * caused this instruction to generate enormous overhead, and it's no longer necessary, since we now rely on
         * a timer (the PDP-11's own KW11 60Hz Line Clock timer, to be precise) to generate periodic display updates.
         *
         *      if (!(this.opFlags & PDP11.OPFLAG.WAIT) && this.cmp) this.cmp.updateDisplays();
         *
         * Finally, it's been noted several places online that the WAIT instruction puts the contents of R0 into the
         * Front Panel's "DATA PATH" (and possibly even directly into the "DISPLAY REGISTER", making the DATASEL switch
         * setting irrelevant).  I can't find any supporting DEC documentation regarding this, but for now, we'll go
         * with popular lore and propagate R0 to the panel's "active" data register.
         */
        if (this.panel) {
            this.panel.setAddr(this.regsGen[7], true);
            this.panel.setData(this.regsGen[0], true);
        }
        this.opFlags |= PDP11.OPFLAG.WAIT;
        this.advancePC(-2);
        this.nCyclesRemain -= 3;
    }

    /**
     * opXOR(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opXOR(opcode)
    {
        let reg = (opcode >> PDP11.SRCMODE.SHIFT) & PDP11.OPREG.MASK;
        this.updateDstWord(opcode, this.regsGen[reg + this.offRegSrc], PDP11Ops.fnXOR);
        this.nCyclesRemain -= (this.dstMode? (8 + 1) : (2 + 1) + (this.dstReg == 7? 2 : 0));
    }

    /**
     * opUndefined(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static opUndefined(opcode)
    {
        if (this.dbg) {
            this.dbg.stopCPU("undefined opcode: %n\n", opcode);
        }
        this.trap(PDP11.TRAP.RESERVED, 0, PDP11.REASON.OPCODE);
    }

    /**
     * op1120(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op1120(opcode)
    {
        PDP11Ops.aOpXnnn_1120[opcode >> 12].call(this, opcode);
    }

    /**
     * op0Xnn_1120(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op0Xnn_1120(opcode)
    {
        PDP11Ops.aOp0Xnn_1120[(opcode >> 8) & 0xf].call(this, opcode);
    }

    /**
     * op0AXn_1120(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op0AXn_1120(opcode)
    {
        PDP11Ops.aOp0AXn_1120[(opcode >> 6) & 0x3].call(this, opcode);
    }

    /**
     * op0BXn_1120(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op0BXn_1120(opcode)
    {
        PDP11Ops.aOp0BXn_1120[(opcode >> 6) & 0x3].call(this, opcode);
    }

    /**
     * op0CXn_1120(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op0CXn_1120(opcode)
    {
        PDP11Ops.aOp0CXn_1120[(opcode >> 6) & 0x3].call(this, opcode);
    }

    /**
     * op00Xn_1120(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op00Xn_1120(opcode)
    {
        PDP11Ops.aOp00Xn_1120[(opcode >> 4) & 0xf].call(this, opcode);
    }

    /**
     * op00AX_1120(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op00AX_1120(opcode)
    {
        PDP11Ops.aOp00AX_1120[opcode & 0xf].call(this, opcode);
    }

    /**
     * op00BX_1120(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op00BX_1120(opcode)
    {
        PDP11Ops.aOp00BX_1120[opcode & 0xf].call(this, opcode);
    }

    /**
     * op000X_1120(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op000X_1120(opcode)
    {
        PDP11Ops.aOp000X_1120[opcode & 0xf].call(this, opcode);
    }

    /**
     * op8Xnn_1120(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op8Xnn_1120(opcode)
    {
        PDP11Ops.aOp8Xnn_1120[(opcode >> 8) & 0xf].call(this, opcode);
    }

    /**
     * op8AXn_1120(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op8AXn_1120(opcode)
    {
        PDP11Ops.aOp8AXn_1120[(opcode >> 6) & 0x3].call(this, opcode);
    }

    /**
     * op8BXn_1120(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op8BXn_1120(opcode)
    {
        PDP11Ops.aOp8BXn_1120[(opcode >> 6) & 0x3].call(this, opcode);
    }

    /**
     * op8CXn_1120(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op8CXn_1120(opcode)
    {
        PDP11Ops.aOp8CXn_1120[(opcode >> 6) & 0x3].call(this, opcode);
    }

    /**
     * op1140(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op1140(opcode)
    {
        PDP11Ops.aOpXnnn_1140[opcode >> 12].call(this, opcode);
    }

    /**
     * op0Xnn_1140(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op0Xnn_1140(opcode)
    {
        PDP11Ops.aOp0Xnn_1140[(opcode >> 8) & 0xf].call(this, opcode);
    }

    /**
     * op0DXn_1140(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op0DXn_1140(opcode)
    {
        PDP11Ops.aOp0DXn_1140[(opcode >> 6) & 0x3].call(this, opcode);
    }

    /**
     * op00Xn_1140(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op00Xn_1140(opcode)
    {
        PDP11Ops.aOp00Xn_1140[(opcode >> 4) & 0xf].call(this, opcode);
    }

    /**
     * op000X_1140(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op000X_1140(opcode)
    {
        PDP11Ops.aOp000X_1140[opcode & 0xf].call(this, opcode);
    }

    /**
     * op7Xnn_1140(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op7Xnn_1140(opcode)
    {
        PDP11Ops.aOp7Xnn_1140[(opcode >> 8) & 0xf].call(this, opcode);
    }

    /**
     * op8Xnn_1140(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op8Xnn_1140(opcode)
    {
        PDP11Ops.aOp8Xnn_1140[(opcode >> 8) & 0xf].call(this, opcode);
    }

    /**
     * op8DXn_1140(opcode)
     *
     * @this {PDP11Ops}
     * @param {number} opcode
     */
    static op8DXn_1140(opcode)
    {
        if (this.model < PDP11.MODEL_1145) {
            PDP11Ops.opUndefined.call(this, opcode);
            return;
        }
        PDP11Ops.aOp8DXn_1140[(opcode >> 6) & 0x3].call(this, opcode);
    }
}

PDP11Ops.JMP_CYCLES = [
    0, 6 + 1, 6 + 1, 8 + 2, 6 + 1, 9 + 2, 7 + 2, 10 + 3
];

PDP11Ops.JSR_CYCLES = [
    0, 13 + 1, 13 + 1, 15 + 2, 13 + 1, 16 + 2, 14 + 2, 17 + 3
];

PDP11Ops.MOV_CYCLES = [
    2 + 1, 8 + 1, 8 + 1, 11 + 2, 9 + 1, 12 + 2, 10 + 2, 13 + 3,
    3 + 1, 8 + 1, 8 + 1, 11 + 2, 9 + 1, 12 + 2, 11 + 2, 14 + 3
];

PDP11Ops.MTP_CYCLES = [
    6 + 1, 11 + 2, 11 + 2, 14 + 3, 12 + 2, 15 + 3, 14 + 3, 17 + 4
];

PDP11Ops.aOpXnnn_1120 = [
    PDP11Ops.op0Xnn_1120,       // 0x0nnn
    PDP11Ops.opMOV,             // 0x1nnn   01SSDD          11/20+  2.3
    PDP11Ops.opCMP,             // 0x2nnn   02SSDD          11/20+  2.3*
    PDP11Ops.opBIT,             // 0x3nnn   03SSDD          11/20+  2.9*
    PDP11Ops.opBIC,             // 0x4nnn   04SSDD          11/20+  2.9
    PDP11Ops.opBIS,             // 0x5nnn   05SSDD          11/20+  2.3
    PDP11Ops.opADD,             // 0x6nnn   06SSDD          11/20+  2.3
    PDP11Ops.opUndefined,       // 0x7nnn
    PDP11Ops.op8Xnn_1120,       // 0x8nnn
    PDP11Ops.opMOVB,            // 0x9nnn   11SSDD          11/20+  2.3
    PDP11Ops.opCMPB,            // 0xAnnn   12SSDD          11/20+  2.3
    PDP11Ops.opBITB,            // 0xBnnn   13SSDD          11/20+  2.9
    PDP11Ops.opBICB,            // 0xCnnn   14SSDD          11/20+  2.9
    PDP11Ops.opBISB,            // 0xDnnn   15SSDD          11/20+  2.3
    PDP11Ops.opSUB,             // 0xEnnn   16SSDD          11/20+  2.3
    PDP11Ops.opUndefined        // 0xFnnn
];

PDP11Ops.aOp0Xnn_1120 = [
    PDP11Ops.op00Xn_1120,       // 0x00nn
    PDP11Ops.opBR,              // 0x01nn   0004XX          11/20+  2.6
    PDP11Ops.opBNE,             // 0x02nn   0010XX          11/20+  2.6**
    PDP11Ops.opBEQ,             // 0x03nn   0014XX          11/20+  2.6**
    PDP11Ops.opBGE,             // 0x04nn   0020XX          11/20+  2.6**
    PDP11Ops.opBLT,             // 0x05nn   0024XX          11/20+  2.6**
    PDP11Ops.opBGT,             // 0x06nn   0030XX          11/20+  2.6**
    PDP11Ops.opBLE,             // 0x07nn   0034XX          11/20+  2.6**
    PDP11Ops.opJSR,             // 0x08nn   004RDD          11/20+  4.4
    PDP11Ops.opJSR,             // 0x09nn   004RDD          11/20+  4.4
    PDP11Ops.op0AXn_1120,       // 0x0Ann
    PDP11Ops.op0BXn_1120,       // 0x0Bnn
    PDP11Ops.op0CXn_1120,       // 0x0Cnn
    PDP11Ops.opUndefined,       // 0x0Dnn
    PDP11Ops.opUndefined,       // 0x0Enn
    PDP11Ops.opUndefined        // 0x0Fnn
];

PDP11Ops.aOp0AXn_1120 = [
    PDP11Ops.opCLR,             // 0x0A0n   0050DD          11/20+  2.3
    PDP11Ops.opCOM,             // 0x0A4n   0051DD          11/20+  2.3
    PDP11Ops.opINC,             // 0x0A8n   0052DD          11/20+  2.3
    PDP11Ops.opDEC              // 0x0ACn   0053DD          11/20+  2.3
];

PDP11Ops.aOp0BXn_1120 = [
    PDP11Ops.opNEG,             // 0x0B0n   0054DD          11/20+  2.3
    PDP11Ops.opADC,             // 0x0B4n   0055DD          11/20+  2.3
    PDP11Ops.opSBC,             // 0x0B8n   0056DD          11/20+  2.3
    PDP11Ops.opTST              // 0x0BCn   0057DD          11/20+  2.3*
];

PDP11Ops.aOp0CXn_1120 = [
    PDP11Ops.opROR,             // 0x0C0n   0060DD          11/20+  2.3*
    PDP11Ops.opROL,             // 0x0C4n   0061DD          11/20+  2.3*
    PDP11Ops.opASR,             // 0x0C8n   0062DD          11/20+  2.3*
    PDP11Ops.opASL              // 0x0CCn   0063DD          11/20+  2.3*
];

PDP11Ops.aOp00Xn_1120 = [
    PDP11Ops.op000X_1120,       // 0x000n   000000-000017
    PDP11Ops.opUndefined,       // 0x001n   000020-000037
    PDP11Ops.opUndefined,       // 0x002n   000040-000057
    PDP11Ops.opUndefined,       // 0x003n   000060-000077
    PDP11Ops.opJMP,             // 0x004n   0001DD          11/20+  1.2
    PDP11Ops.opJMP,             // 0x005n   0001DD          11/20+  1.2
    PDP11Ops.opJMP,             // 0x006n   0001DD          11/20+  1.2
    PDP11Ops.opJMP,             // 0x007n   0001DD          11/20+  1.2
    PDP11Ops.opRTS,             // 0x008n   00020R          11/20+  3.5 (opRTS() will also confirm that bit 3 is clear)
    PDP11Ops.opUndefined,       // 0x009n   00023N
    PDP11Ops.op00AX_1120,       // 0x00An   000240-000257
    PDP11Ops.op00BX_1120,       // 0x00Bn   000260-000277
    PDP11Ops.opSWAB,            // 0x00Cn   0003DD          11/20+  2.3
    PDP11Ops.opSWAB,            // 0x00Dn   0003DD          11/20+  2.3
    PDP11Ops.opSWAB,            // 0x00En   0003DD          11/20+  2.3
    PDP11Ops.opSWAB             // 0x00Fn   0003DD          11/20+  2.3
];

PDP11Ops.aOp000X_1120 = [
    PDP11Ops.opHALT,            // 0x0000   000000          11/20+  1.8
    PDP11Ops.opWAIT,            // 0x0001   000001          11/20+  1.8
    PDP11Ops.opRTT,             // 0x0002   000002          11/20+  4.8 (this is really RTI, but on the 11/20, it behaves like RTT)
    PDP11Ops.opBPT,             // 0x0003
    PDP11Ops.opIOT,             // 0x0004   000004          11/20+  9.3
    PDP11Ops.opRESET,           // 0x0005   000005          11/20+  20ms
    PDP11Ops.opUndefined,       // 0x0006
    PDP11Ops.opUndefined,       // 0x0007
    PDP11Ops.opUndefined,       // 0x0008
    PDP11Ops.opUndefined,       // 0x0009
    PDP11Ops.opUndefined,       // 0x000A
    PDP11Ops.opUndefined,       // 0x000B
    PDP11Ops.opUndefined,       // 0x000C
    PDP11Ops.opUndefined,       // 0x000D
    PDP11Ops.opUndefined,       // 0x000E
    PDP11Ops.opUndefined        // 0x000F
];

PDP11Ops.aOp00AX_1120 = [
    PDP11Ops.opNOP,             // 0x00A0   000240          11/20+  1.5
    PDP11Ops.opCLC,             // 0x00A1   000241          11/20+  1.5
    PDP11Ops.opCLV,             // 0x00A2   000242          11/20+  1.5
    PDP11Ops.opCLx,             // 0x00A3   000243          11/20+  1.5
    PDP11Ops.opCLZ,             // 0x00A4   000244          11/20+  1.5
    PDP11Ops.opCLx,             // 0x00A5   000245          11/20+  1.5
    PDP11Ops.opCLx,             // 0x00A6   000246          11/20+  1.5
    PDP11Ops.opCLx,             // 0x00A7   000247          11/20+  1.5
    PDP11Ops.opCLN,             // 0x00A8   000250          11/20+  1.5
    PDP11Ops.opCLx,             // 0x00A9   000251          11/20+  1.5
    PDP11Ops.opCLx,             // 0x00AA   000252          11/20+  1.5
    PDP11Ops.opCLx,             // 0x00AB   000253          11/20+  1.5
    PDP11Ops.opCLx,             // 0x00AC   000254          11/20+  1.5
    PDP11Ops.opCLx,             // 0x00AD   000255          11/20+  1.5
    PDP11Ops.opCLx,             // 0x00AE   000256          11/20+  1.5
    PDP11Ops.opCLx              // 0x00AF   000257          11/20+  1.5
];

PDP11Ops.aOp00BX_1120 = [
    PDP11Ops.opNOP,             // 0x00B0   000260          11/20+  1.5
    PDP11Ops.opSEC,             // 0x00B1   000261          11/20+  1.5
    PDP11Ops.opSEV,             // 0x00B2   000262          11/20+  1.5
    PDP11Ops.opSEx,             // 0x00B3   000263          11/20+  1.5
    PDP11Ops.opSEZ,             // 0x00B4   000264          11/20+  1.5
    PDP11Ops.opSEx,             // 0x00B5   000265          11/20+  1.5
    PDP11Ops.opSEx,             // 0x00B6   000266          11/20+  1.5
    PDP11Ops.opSEx,             // 0x00B7   000267          11/20+  1.5
    PDP11Ops.opSEN,             // 0x00B8   000270          11/20+  1.5
    PDP11Ops.opSEx,             // 0x00B9   000271          11/20+  1.5
    PDP11Ops.opSEx,             // 0x00BA   000272          11/20+  1.5
    PDP11Ops.opSEx,             // 0x00BB   000273          11/20+  1.5
    PDP11Ops.opSEx,             // 0x00BC   000274          11/20+  1.5
    PDP11Ops.opSEx,             // 0x00BD   000275          11/20+  1.5
    PDP11Ops.opSEx,             // 0x00BE   000276          11/20+  1.5
    PDP11Ops.opSEx              // 0x00BF   000277          11/20+  1.5
];

PDP11Ops.aOp8Xnn_1120 = [
    PDP11Ops.opBPL,             // 0x80nn   1000XX          11/20+  2.6**
    PDP11Ops.opBMI,             // 0x81nn   1004XX          11/20+  2.6**
    PDP11Ops.opBHI,             // 0x82nn   1010XX          11/20+  2.6**
    PDP11Ops.opBLOS,            // 0x83nn   1014XX          11/20+  2.6**
    PDP11Ops.opBVC,             // 0x84nn   1020XX          11/20+  2.6**
    PDP11Ops.opBVS,             // 0x85nn   1024XX          11/20+  2.6**
    PDP11Ops.opBCC,             // 0x86nn   1030XX          11/20+  2.6**
    PDP11Ops.opBCS,             // 0x87nn   1034XX          11/20+  2.6**
    PDP11Ops.opEMT,             // 0x88nn   104000-104377   11/20+  9.3
    PDP11Ops.opTRAP,            // 0x89nn   104400-104777   11/20+  9.3
    PDP11Ops.op8AXn_1120,       // 0x8Ann
    PDP11Ops.op8BXn_1120,       // 0x8Bnn
    PDP11Ops.op8CXn_1120,       // 0x8Cnn
    PDP11Ops.opUndefined,       // 0x8Dnn
    PDP11Ops.opUndefined,       // 0x8Enn
    PDP11Ops.opUndefined        // 0x8Fnn
];

PDP11Ops.aOp8AXn_1120 = [
    PDP11Ops.opCLRB,            // 0x8A0n   1050DD          11/20+  2.3
    PDP11Ops.opCOMB,            // 0x8A4n   1051DD          11/20+  2.3
    PDP11Ops.opINCB,            // 0x8A8n   1052DD          11/20+  2.3
    PDP11Ops.opDECB             // 0x8ACn   1053DD          11/20+  2.3
];

PDP11Ops.aOp8BXn_1120 = [
    PDP11Ops.opNEGB,            // 0x8B0n   1054DD          11/20+  2.3
    PDP11Ops.opADCB,            // 0x8B4n   1055DD          11/20+  2.3
    PDP11Ops.opSBCB,            // 0x8B8n   1056DD          11/20+  2.3
    PDP11Ops.opTSTB             // 0x8BCn   1057DD          11/20+  2.3*
];

PDP11Ops.aOp8CXn_1120 = [
    PDP11Ops.opRORB,            // 0x8C0n   1060DD          11/20+  2.3*
    PDP11Ops.opROLB,            // 0x8C4n   1061DD          11/20+  2.3*
    PDP11Ops.opASRB,            // 0x8C8n   1062DD          11/20+  2.3*
    PDP11Ops.opASLB             // 0x8CCn   1063DD          11/20+  2.3*
];

PDP11Ops.aOpXnnn_1140 = [
    PDP11Ops.op0Xnn_1140,       // 0x0nnn
    PDP11Ops.opMOV,             // 0x1nnn   01SSDD          11/20+  2.3
    PDP11Ops.opCMP,             // 0x2nnn   02SSDD          11/20+  2.3*
    PDP11Ops.opBIT,             // 0x3nnn   03SSDD          11/20+  2.9*
    PDP11Ops.opBIC,             // 0x4nnn   04SSDD          11/20+  2.9
    PDP11Ops.opBIS,             // 0x5nnn   05SSDD          11/20+  2.3
    PDP11Ops.opADD,             // 0x6nnn   06SSDD          11/20+  2.3
    PDP11Ops.op7Xnn_1140,       // 0x7nnn
    PDP11Ops.op8Xnn_1140,       // 0x8nnn
    PDP11Ops.opMOVB,            // 0x9nnn   11SSDD          11/20+  2.3
    PDP11Ops.opCMPB,            // 0xAnnn   12SSDD          11/20+  2.3
    PDP11Ops.opBITB,            // 0xBnnn   13SSDD          11/20+  2.9
    PDP11Ops.opBICB,            // 0xCnnn   14SSDD          11/20+  2.9
    PDP11Ops.opBISB,            // 0xDnnn   15SSDD          11/20+  2.3
    PDP11Ops.opSUB,             // 0xEnnn   16SSDD          11/20+  2.3
    PDP11Ops.opUndefined        // 0xFnnn
];

PDP11Ops.aOp0Xnn_1140 = [
    PDP11Ops.op00Xn_1140,       // 0x00nn
    PDP11Ops.opBR,              // 0x01nn   0004XX          11/20+  2.6
    PDP11Ops.opBNE,             // 0x02nn   0010XX          11/20+  2.6**
    PDP11Ops.opBEQ,             // 0x03nn   0014XX          11/20+  2.6**
    PDP11Ops.opBGE,             // 0x04nn   0020XX          11/20+  2.6**
    PDP11Ops.opBLT,             // 0x05nn   0024XX          11/20+  2.6**
    PDP11Ops.opBGT,             // 0x06nn   0030XX          11/20+  2.6**
    PDP11Ops.opBLE,             // 0x07nn   0034XX          11/20+  2.6**
    PDP11Ops.opJSR,             // 0x08nn   004RDD          11/20+  4.4
    PDP11Ops.opJSR,             // 0x09nn   004RDD          11/20+  4.4
    PDP11Ops.op0AXn_1120,       // 0x0Ann
    PDP11Ops.op0BXn_1120,       // 0x0Bnn
    PDP11Ops.op0CXn_1120,       // 0x0Cnn
    PDP11Ops.op0DXn_1140,       // 0x0Dnn
    PDP11Ops.opUndefined,       // 0x0Enn
    PDP11Ops.opUndefined        // 0x0Fnn
];

PDP11Ops.aOp0DXn_1140 = [
    PDP11Ops.opMARK,            // 0x0D0n                   11/40+          LEIS
    PDP11Ops.opMFPI,            // 0x0D4n                   11/40+
    PDP11Ops.opMTPI,            // 0x0D8n                   11/40+
    PDP11Ops.opSXT              // 0x0DCn                   11/40+          LEIS
];

PDP11Ops.aOp00Xn_1140 = [
    PDP11Ops.op000X_1140,       // 0x000n   000000-000017
    PDP11Ops.opUndefined,       // 0x001n   000020-000037
    PDP11Ops.opUndefined,       // 0x002n   000040-000057
    PDP11Ops.opUndefined,       // 0x003n   000060-000077
    PDP11Ops.opJMP,             // 0x004n   0001DD          11/20+  1.2
    PDP11Ops.opJMP,             // 0x005n   0001DD          11/20+  1.2
    PDP11Ops.opJMP,             // 0x006n   0001DD          11/20+  1.2
    PDP11Ops.opJMP,             // 0x007n   0001DD          11/20+  1.2
    PDP11Ops.opRTS,             // 0x008n   00020R          11/20+  3.5 (opRTS() will also confirm that bit 3 is clear)
    PDP11Ops.opSPL,             // 0x009n   00023N          11/45+      (opSPL() will also confirm that bit 3 is set)
    PDP11Ops.op00AX_1120,       // 0x00An   000240-000257
    PDP11Ops.op00BX_1120,       // 0x00Bn   000260-000277
    PDP11Ops.opSWAB,            // 0x00Cn   0003DD          11/20+  2.3
    PDP11Ops.opSWAB,            // 0x00Dn   0003DD          11/20+  2.3
    PDP11Ops.opSWAB,            // 0x00En   0003DD          11/20+  2.3
    PDP11Ops.opSWAB             // 0x00Fn   0003DD          11/20+  2.3
];

PDP11Ops.aOp000X_1140 = [
    PDP11Ops.opHALT,            // 0x0000   000000          11/20+  1.8
    PDP11Ops.opWAIT,            // 0x0001   000001          11/20+  1.8
    PDP11Ops.opRTI,             // 0x0002   000002          11/20+  4.8
    PDP11Ops.opBPT,             // 0x0003   000003
    PDP11Ops.opIOT,             // 0x0004   000004          11/20+  9.3
    PDP11Ops.opRESET,           // 0x0005   000005          11/20+  20ms
    PDP11Ops.opRTT,             // 0x0006   000006          11/40+          LEIS
    PDP11Ops.opMFPT,            // 0x0007   000007          11/44+
    PDP11Ops.opUndefined,       // 0x0008
    PDP11Ops.opUndefined,       // 0x0009
    PDP11Ops.opUndefined,       // 0x000A
    PDP11Ops.opUndefined,       // 0x000B
    PDP11Ops.opUndefined,       // 0x000C
    PDP11Ops.opUndefined,       // 0x000D
    PDP11Ops.opUndefined,       // 0x000E
    PDP11Ops.opUndefined        // 0x000F
];

PDP11Ops.aOp7Xnn_1140 = [
    PDP11Ops.opMUL,             // 0x70nn                   11/40+          EIS
    PDP11Ops.opMUL,             // 0x71nn                   11/40+          EIS
    PDP11Ops.opDIV,             // 0x72nn                   11/40+          EIS
    PDP11Ops.opDIV,             // 0x73nn                   11/40+          EIS
    PDP11Ops.opASH,             // 0x74nn                   11/40+          EIS
    PDP11Ops.opASH,             // 0x75nn                   11/40+          EIS
    PDP11Ops.opASHC,            // 0x76nn                   11/40+          EIS
    PDP11Ops.opASHC,            // 0x77nn                   11/40+          EIS
    PDP11Ops.opXOR,             // 0x78nn                   11/40+          LEIS
    PDP11Ops.opXOR,             // 0x79nn                   11/40+          LEIS
    PDP11Ops.opUndefined,       // 0x7Ann
    PDP11Ops.opUndefined,       // 0x7Bnn
    PDP11Ops.opUndefined,       // 0x7Cnn
    PDP11Ops.opUndefined,       // 0x7Dnn
    PDP11Ops.opSOB,             // 0x7Enn                   11/40+          LEIS
    PDP11Ops.opSOB              // 0x7Fnn                   11/40+          LEIS
];

PDP11Ops.aOp8Xnn_1140 = [
    PDP11Ops.opBPL,             // 0x80nn   1000XX          11/20+  2.6**
    PDP11Ops.opBMI,             // 0x81nn   1004XX          11/20+  2.6**
    PDP11Ops.opBHI,             // 0x82nn   1010XX          11/20+  2.6**
    PDP11Ops.opBLOS,            // 0x83nn   1014XX          11/20+  2.6**
    PDP11Ops.opBVC,             // 0x84nn   1020XX          11/20+  2.6**
    PDP11Ops.opBVS,             // 0x85nn   1024XX          11/20+  2.6**
    PDP11Ops.opBCC,             // 0x86nn   1030XX          11/20+  2.6**
    PDP11Ops.opBCS,             // 0x87nn   1034XX          11/20+  2.6**
    PDP11Ops.opEMT,             // 0x88nn   104000-104377   11/20+  9.3
    PDP11Ops.opTRAP,            // 0x89nn   104400-104777   11/20+  9.3
    PDP11Ops.op8AXn_1120,       // 0x8Ann   1050XX
    PDP11Ops.op8BXn_1120,       // 0x8Bnn   1054XX
    PDP11Ops.op8CXn_1120,       // 0x8Cnn   1060XX
    PDP11Ops.op8DXn_1140,       // 0x8Dnn   106400-106777
    PDP11Ops.opUndefined,       // 0x8Enn   1070XX
    PDP11Ops.opUndefined        // 0x8Fnn   1074XX
];

PDP11Ops.aOp8DXn_1140 = [
    PDP11Ops.opMTPS,            // 0x8D0n   1064XX          11/34A only
    PDP11Ops.opMFPD,            // 0x8D4n   1065XX          11/45+
    PDP11Ops.opMTPD,            // 0x8D8n   1066XX          11/45+
    PDP11Ops.opMFPS             // 0x8DCn   1067XX          11/34A only
];
