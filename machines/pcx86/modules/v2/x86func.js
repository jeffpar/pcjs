/**
 * @fileoverview Implements PCx86 opcode workers
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import X86 from "./x86.js";
import { DEBUG, I386, MAXDEBUG } from "./defines.js";

/**
 * fnADCb(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnADCb = function(dst, src)
{
    let b = (dst + src + this.getCarry())|0;
    this.setArithResult(dst, src, b, X86.RESULT.BYTE | X86.RESULT.ALL);
    this.nStepCycles -= (this.regEAWrite === X86.ADDR_INVALID? (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesArithRR : this.cycleCounts.nOpCyclesArithRM) : this.cycleCounts.nOpCyclesArithMR);
    return b & 0xff;
};

/**
 * fnADCw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnADCw = function(dst, src)
{
    let w = (dst + src + this.getCarry())|0;
    this.setArithResult(dst, src, w, this.typeData | X86.RESULT.ALL);
    this.nStepCycles -= (this.regEAWrite === X86.ADDR_INVALID? (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesArithRR : this.cycleCounts.nOpCyclesArithRM) : this.cycleCounts.nOpCyclesArithMR);
    return w & this.maskData;
};

/**
 * fnADDb(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnADDb = function(dst, src)
{
    let b = (dst + src)|0;
    this.setArithResult(dst, src, b, X86.RESULT.BYTE | X86.RESULT.ALL);
    this.nStepCycles -= (this.regEAWrite === X86.ADDR_INVALID? (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesArithRR : this.cycleCounts.nOpCyclesArithRM) : this.cycleCounts.nOpCyclesArithMR);
    return b & 0xff;
};

/**
 * fnADDw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnADDw = function(dst, src)
{
    let w = (dst + src)|0;
    this.setArithResult(dst, src, w, this.typeData | X86.RESULT.ALL);
    this.nStepCycles -= (this.regEAWrite === X86.ADDR_INVALID? (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesArithRR : this.cycleCounts.nOpCyclesArithRM) : this.cycleCounts.nOpCyclesArithMR);
    return w & this.maskData;
};

/**
 * fnANDb(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnANDb = function(dst, src)
{
    let b = dst & src;
    this.setLogicResult(b, X86.RESULT.BYTE);
    this.nStepCycles -= (this.regEAWrite === X86.ADDR_INVALID? (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesArithRR : this.cycleCounts.nOpCyclesArithRM) : this.cycleCounts.nOpCyclesArithMR);
    return b;
};

/**
 * fnANDw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnANDw = function(dst, src)
{
    this.nStepCycles -= (this.regEAWrite === X86.ADDR_INVALID? (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesArithRR : this.cycleCounts.nOpCyclesArithRM) : this.cycleCounts.nOpCyclesArithMR);
    return this.setLogicResult(dst & src, this.typeData) & this.maskData;
};

/**
 * fnARPL(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnARPL = function(dst, src)
{
    this.nStepCycles -= (10 + (this.regEA === X86.ADDR_INVALID? 0 : 1));
    if ((dst & X86.SEL.RPL) < (src & X86.SEL.RPL)) {
        dst = (dst & ~X86.SEL.RPL) | (src & X86.SEL.RPL);
        this.setZF();
        return dst;
    }
    this.clearZF();
    return dst;
};

/**
 * fnBOUND(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnBOUND = function(dst, src)
{
    if (this.regEA === X86.ADDR_INVALID) {
        /**
         * Generate UD_FAULT (INT 0x06: Invalid Opcode) if src is not a memory operand.
         */
        X86.opInvalid.call(this);
        return dst;
    }
    /**
     * Note that BOUND performs signed comparisons, so we must transform all arguments into signed values.
     */
    let wIndex = dst;
    let wLower = this.getWord(this.regEA);
    let wUpper = this.getWord(this.regEA + this.sizeData);
    if (this.sizeData == 2) {
        wIndex = (dst << 16) >> 16;
        wLower = (wLower << 16) >> 16;
        wUpper = (wUpper << 16) >> 16;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesBound;
    if (wIndex < wLower || wIndex > wUpper) {
        /**
         * The INT 0x05 handler must be called with CS:IP pointing to the BOUND instruction.
         *
         * TODO: Determine the cycle cost when a BOUND exception is triggered, over and above nCyclesBound,
         * and then call X86.helpFault(X86.EXCEPTION.BR_FAULT, null, nCycles).
         */
        X86.helpFault.call(this, X86.EXCEPTION.BR_FAULT);
    }
    this.opFlags |= X86.OPFLAG.NOWRITE;
    return dst;
};

/**
 * fnBSF(dst, src)
 *
 * Scan src starting at bit 0.  If a set bit is found, the bit index is stored in dst and ZF is cleared;
 * otherwise, ZF is set and dst is unchanged.
 *
 * NOTES: Early versions of the 80386 manuals misstated how ZF was set/cleared.  Also, Intel insists that
 * dst is undefined whenever ZF is set, but in fact, the 80386 leaves dst unchanged when that happens;
 * unfortunately, some early 80486s would always modify dst, so it is unsafe to rely on dst when ZF is set.
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnBSF = function(dst, src)
{
    let n = 0;
    if (!src) {
        this.setZF();
    } else {
        this.clearZF();
        let bit = 0x1;
        while (bit & this.maskData) {
            if (src & bit) {
                dst = n;
                break;
            }
            bit <<= 1;
            n++;                // TODO: Determine if n should be incremented before the bailout for an accurate cycle count
        }
    }
    this.nStepCycles -= 11 + n * 3;
    return dst;
};

/**
 * fnBSR(dst, src)
 *
 * Scan src starting from the highest bit.  If a set bit is found, the bit index is stored in dst and ZF is
 * cleared; otherwise, ZF is set and dst is unchanged.
 *
 * NOTES: Early versions of the 80386 manuals misstated how ZF was set/cleared.  Also, Intel insists that
 * dst is undefined whenever ZF is set, but in fact, the 80386 leaves dst unchanged when that happens;
 * unfortunately, some early 80486s would always modify dst, so it is unsafe to rely on dst when ZF is set.
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnBSR = function(dst, src)
{
    let n = 0;
    if (!src) {
        this.setZF();
    } else {
        this.clearZF();
        let i = (this.sizeData == 2? 15 : 31), bit = 1 << i;
        while (bit) {
            if (src & bit) {
                dst = i;
                break;
            }
            bit >>>= 1;
            n++; i--;           // TODO: Determine if n should be incremented before the bailout for an accurate cycle count
        }

    }
    this.nStepCycles -= 11 + n * 3;
    return dst;
};

/**
 * fnBT(dst, src)
 *
 * In this form of BT, src is an immediate operand (OR dst is register operand); immediate operands
 * are supposed to be masked with either 0xf or 0x1f for 16-bit or 32-bit operands, respectively.
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnBT = function(dst, src)
{
    let bit = 1 << (src & (this.sizeData == 2? 0xf : 0x1f));
    if (dst & bit) this.setCF(); else this.clearCF();
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? 3 : 6);
    this.opFlags |= X86.OPFLAG.NOWRITE;
    return dst;
};

/**
 * fnBTC(dst, src)
 *
 * In this form of BTC, src is an immediate operand (OR dst is register operand); immediate operands
 * are supposed to be masked with either 0xf or 0x1f for 16-bit or 32-bit operands, respectively.
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnBTC = function(dst, src)
{
    let bit = 1 << (src & (this.sizeData == 2? 0xf : 0x1f));
    if (dst & bit) this.setCF(); else this.clearCF();
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? 6 : 8);
    return dst ^ bit;
};

/**
 * fnBTR(dst, src)
 *
 * In this form of BTR, src is an immediate operand (OR dst is register operand); immediate operands
 * are supposed to be masked with either 0xf or 0x1f for 16-bit or 32-bit operands, respectively.
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnBTR = function(dst, src)
{
    let bit = 1 << (src & (this.sizeData == 2? 0xf : 0x1f));
    if (dst & bit) this.setCF(); else this.clearCF();
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? 6 : 8);
    return dst & ~bit;
};

/**
 * fnBTS(dst, src)
 *
 * In this form of BTS, src is an immediate operand (OR dst is register operand); immediate operands
 * are supposed to be masked with either 0xf or 0x1f for 16-bit or 32-bit operands, respectively.
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnBTS = function(dst, src)
{
    let bit = 1 << (src & (this.sizeData == 2? 0xf : 0x1f));
    if (dst & bit) this.setCF(); else this.clearCF();
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? 6 : 8);
    return dst | bit;
};

/**
 * fnBTMem(dst, src)
 *
 * In this form of BT, src is a register operand, which is NOT truncated if dst is a memory operand;
 * however, if dst is also a register operand, then we defer to the simpler function, fnBT().
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnBTMem = function(dst, src)
{
    if (this.regEA === X86.ADDR_INVALID) {
        return X86.fnBT.call(this, dst, src);
    }
    /**
     * TODO: Consider a worker function that performs the following block of code for: BT, BTC, BTR, and BTS.
     * It's somewhat inconvenient, because it needs to provide two results: an updated src AND an updated dst.
     *
     * src is usually positive BUT can also be negative (as the IA32 spec says: "The offset operand then selects
     * a bit position within the range −231 to 231 − 1 for a register offset and 0 to 31 for an immediate offset.")
     */
    let max = this.sizeData << 3;
    if (src >= max || src < -max) {
        /**
         * Now we need to divide src by 16 or 32, according to the OPERAND size, which means shifting it right
         * by either 4 or 5 bits.  That gives us a short or long INDEX, which we then multiply by the OPERAND size
         * to obtain to the corresponding short or long OFFSET that we must add to the original EA offset.
         */
        let i = src >> (this.sizeData == 2? 4 : 5);
        dst = this.getEAWord(this.segEA, this.offEA + i * this.sizeData);
    }
    /**
     * Now we convert src from a bit index to a bit mask.
     */
    src = 1 << (src & (this.sizeData == 2? 0xf : 0x1f));
    if (dst & src) this.setCF(); else this.clearCF();

    this.nStepCycles -= 6;
    this.opFlags |= X86.OPFLAG.NOWRITE;
    return dst;
};

/**
 * fnBTCMem(dst, src)
 *
 * In this form of BTC, src is a register operand, which is NOT truncated if dst is a memory operand;
 * however, if dst is also a register operand, then we defer to the simpler function, fnBTC().
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnBTCMem = function(dst, src)
{
    if (this.regEA === X86.ADDR_INVALID) {
        return X86.fnBTC.call(this, dst, src);
    }
    /**
     * src is usually positive BUT can also be negative (as the IA32 spec says: "The offset operand then selects
     * a bit position within the range −231 to 231 − 1 for a register offset and 0 to 31 for an immediate offset.")
     */
    let max = this.sizeData << 3;
    if (src >= max || src < -max) {
        /**
         * Now we need to divide src by 16 or 32, according to the OPERAND size, which means shifting it right
         * by either 4 or 5 bits.  That gives us a short or long INDEX, which we then multiply by the OPERAND size
         * to obtain to the corresponding short or long OFFSET that we must add to the original EA offset.
         */
        let i = src >> (this.sizeData == 2? 4 : 5);
        dst = this.getEAWord(this.segEA, this.offEA + i * this.sizeData);
    }
    /**
     * Now we convert src from a bit index to a bit mask.
     */
    src = 1 << (src & (this.sizeData == 2? 0xf : 0x1f));
    if (dst & src) this.setCF(); else this.clearCF();

    this.nStepCycles -= 8;
    return dst ^ src;
};

/**
 * fnBTRMem(dst, src)
 *
 * In this form of BTR, src is a register operand, which is NOT truncated if dst is a memory operand;
 * however, if dst is also a register operand, then we defer to the simpler function, fnBTR().
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnBTRMem = function(dst, src)
{
    if (this.regEA === X86.ADDR_INVALID) {
        return X86.fnBTR.call(this, dst, src);
    }
    /**
     * src is usually positive BUT can also be negative (as the IA32 spec says: "The offset operand then selects
     * a bit position within the range −231 to 231 − 1 for a register offset and 0 to 31 for an immediate offset.")
     */
    let max = this.sizeData << 3;
    if (src >= max || src < -max) {
        /**
         * Now we need to divide src by 16 or 32, according to the OPERAND size, which means shifting it right
         * by either 4 or 5 bits.  That gives us a short or long INDEX, which we then multiply by the OPERAND size
         * to obtain to the corresponding short or long OFFSET that we must add to the original EA offset.
         */
        let i = src >> (this.sizeData == 2? 4 : 5);
        dst = this.getEAWord(this.segEA, this.offEA + i * this.sizeData);
    }
    /**
     * Now we convert src from a bit index to a bit mask.
     */
    src = 1 << (src & (this.sizeData == 2? 0xf : 0x1f));
    if (dst & src) this.setCF(); else this.clearCF();

    this.nStepCycles -= 8;
    return dst & ~src;
};

/**
 * fnBTSMem(dst, src)
 *
 * In this form of BTS, src is a register operand, which is NOT truncated if dst is a memory operand;
 * however, if dst is also a register operand, then we defer to the simpler function, fnBTS().
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnBTSMem = function(dst, src)
{
    if (this.regEA === X86.ADDR_INVALID) {
        return X86.fnBTS.call(this, dst, src);
    }
    /**
     * src is usually positive BUT can also be negative (as the IA32 spec says: "The offset operand then selects
     * a bit position within the range −231 to 231 − 1 for a register offset and 0 to 31 for an immediate offset.")
     */
    let max = this.sizeData << 3;
    if (src >= max || src < -max) {
        /**
         * Now we need to divide src by 16 or 32, according to the OPERAND size, which means shifting it right
         * by either 4 or 5 bits.  That gives us a short or long INDEX, which we then multiply by the OPERAND size
         * to obtain to the corresponding short or long OFFSET that we must add to the original EA offset.
         */
        let i = src >> (this.sizeData == 2? 4 : 5);
        dst = this.getEAWord(this.segEA, this.offEA + i * this.sizeData);
    }
    /**
     * Now we convert src from a bit index to a bit mask.
     */
    src = 1 << (src & (this.sizeData == 2? 0xf : 0x1f));
    if (dst & src) this.setCF(); else this.clearCF();

    this.nStepCycles -= 8;
    return dst | src;
};

/**
 * fnCALLw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null)
 * @returns {number}
 */
X86.fnCALLw = function(dst, src)
{
    this.pushWord(this.getIP());
    this.setIP(dst);
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesCallWR : this.cycleCounts.nOpCyclesCallWM);
    this.opFlags |= X86.OPFLAG.NOWRITE;
    return dst;
};

/**
 * fnCALLFdw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null)
 * @returns {number}
 */
X86.fnCALLFdw = function(dst, src)
{
    if (this.regEA === X86.ADDR_INVALID) {
        return X86.fnGRPUndefined.call(this, dst, src);
    }
    /**
     * Originally, we would snapshot regLSP into opLSP because helpCALLF() could trigger a segment fault,
     * but additionally, the stack segment could trigger either a segment fault or a page fault; indeed,
     * any operation that performs multiple stack modifications must take this precaution and snapshot regLSP.
     */
    this.opLSP = this.regLSP;

    X86.helpCALLF.call(this, dst, this.getShort(this.regEA + this.sizeData));
    this.nStepCycles -= this.cycleCounts.nOpCyclesCallDM;
    this.opFlags |= X86.OPFLAG.NOWRITE;

    this.opLSP = X86.ADDR_INVALID;
    return dst;
};

/**
 * fnCMPb(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number} dst unchanged
 */
X86.fnCMPb = function(dst, src)
{
    let b = (dst - src)|0;
    this.setArithResult(dst, src, b, X86.RESULT.BYTE | X86.RESULT.ALL, true);
    this.nStepCycles -= (this.regEAWrite === X86.ADDR_INVALID? (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesArithRR : this.cycleCounts.nOpCyclesCompareRM) : this.cycleCounts.nOpCyclesArithRM);
    this.opFlags |= X86.OPFLAG.NOWRITE;
    return dst;
};

/**
 * fnCMPw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number} dst unchanged
 */
X86.fnCMPw = function(dst, src)
{
    let w = (dst - src)|0;
    this.setArithResult(dst, src, w, this.typeData | X86.RESULT.ALL, true);
    this.nStepCycles -= (this.regEAWrite === X86.ADDR_INVALID? (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesArithRR : this.cycleCounts.nOpCyclesCompareRM) : this.cycleCounts.nOpCyclesArithRM);
    this.opFlags |= X86.OPFLAG.NOWRITE;
    return dst;
};

/**
 * fnDECb(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null)
 * @returns {number}
 */
X86.fnDECb = function(dst, src)
{
    let b = (dst - 1)|0;
    this.setArithResult(dst, 1, b, X86.RESULT.BYTE | X86.RESULT.NOTCF, true);
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesIncR : this.cycleCounts.nOpCyclesIncM);
    return b & 0xff;
};

/**
 * fnDECw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null)
 * @returns {number}
 */
X86.fnDECw = function(dst, src)
{
    let w = (dst - 1)|0;
    this.setArithResult(dst, 1, w, this.typeData | X86.RESULT.NOTCF, true);
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesIncR : this.cycleCounts.nOpCyclesIncM);
    return w & this.maskData;
};

/**
 * fnDIVb(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst (the divisor)
 * @param {number} src (null; AX is the implied src)
 * @returns {number} (we return dst unchanged, since it's actually AX that's modified)
 */
X86.fnDIVb = function(dst, src)
{
    /**
     * Detect zero divisor
     */
    if (!dst) {
        X86.helpDIVOverflow.call(this);
        return dst;
    }

    /**
     * Detect too-small divisor (quotient overflow)
     */
    let result = ((src = this.regEAX & 0xffff) / dst);
    if (result > 0xff) {
        X86.helpDIVOverflow.call(this);
        return dst;
    }

    this.regMDLo = (result & 0xff) | (((src % dst) & 0xff) << 8);
    this.fMDSet = true;

    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesDivBR : this.cycleCounts.nOpCyclesDivBM);
    this.opFlags |= X86.OPFLAG.NOWRITE;
    return dst;
};

/**
 * fnDIVw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst (the divisor)
 * @param {number} src (null; DX:AX or EDX:EAX is the implied src)
 * @returns {number} (we return dst unchanged, since it's actually DX:AX that's modified)
 */
X86.fnDIVw = function(dst, src)
{
    if (this.sizeData == 2) {
        /**
         * Detect zero divisor
         */
        if (!dst) {
            X86.helpDIVOverflow.call(this);
            return dst;
        }
        /**
         * Detect too-small divisor (quotient overflow)
         *
         * WARNING: We CANNOT simply do "src = (this.regEDX << 16) | this.regEAX", because if bit 15 of DX
         * is set, JavaScript will create a negative 32-bit number.  So we instead use non-bitwise operators
         * to force JavaScript to create a floating-point value that won't suffer from 32-bit-math side-effects.
         */
        src = (this.regEDX & 0xffff) * 0x10000 + (this.regEAX & 0xffff);
        let result = (src / dst);
        if (result >= 0x10000) {
            X86.helpDIVOverflow.call(this);
            return dst;
        }
        this.regMDLo = (result & 0xffff);
        this.regMDHi = (src % dst) & 0xffff;
    }
    else {
        if (!X86.helpDIV32.call(this, this.regEAX, this.regEDX, dst)) {
            X86.helpDIVOverflow.call(this);
            return dst;
        }
        this.regMDLo |= 0;
        this.regMDHi |= 0;
    }

    this.fMDSet = true;

    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesDivWR : this.cycleCounts.nOpCyclesDivWM);
    this.opFlags |= X86.OPFLAG.NOWRITE;
    return dst;
};

/**
 * fnESC(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number} dst unchanged
 */
X86.fnESC = function(dst, src)
{
    if (this.fpuActive) {
        this.fpuActive.opFPU(this.bOpcode, this.bModRM, dst, src);
    }
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? 2 : 8);
    return dst;
};

/**
 * fnGRPFault(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnGRPFault = function(dst, src)
{
    /**
     * This should NEVER be called on 8086/8088 CPUs, and yet we preset some of the handlers in aOpGrpPOPw,
     * aOpGrp4b, and aOpGrp4w to call it.  initProcessor() DOES patch aOpGrp4b[0x07] and aOpGrp4w[0x07] to
     * fnGRPInvalid, but that's it.
     *
     * However, given the infrequency of this call, it's simpler to continue presetting all the handlers in
     * aOpGrpPOPw to their post-8086 default, and deal with the appropriate 8086 behavior here (which for now,
     * is to call fnGRPUndefined instead).
     */
    if (this.model < X86.MODEL_80186) {
        return X86.fnGRPUndefined.call(this, dst, src);
    }
    X86.helpFault.call(this, X86.EXCEPTION.GP_FAULT, 0);
    return dst;
};

/**
 * fnGRPInvalid(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnGRPInvalid = function(dst, src)
{
    X86.opInvalid.call(this);
    return dst;
};

/**
 * fnGRPUndefined(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnGRPUndefined = function(dst, src)
{
    X86.opUndefined.call(this);
    return dst;
};

/**
 * fnIDIVb(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst (the divisor)
 * @param {number} src (null; AX is the implied src)
 * @returns {number} (we return dst unchanged, since it's actually AX that's modified)
 */
X86.fnIDIVb = function(dst, src)
{
    /**
     * Detect zero divisor
     */
    if (!dst) {
        X86.helpDIVOverflow.call(this);
        return dst;
    }

    /**
     * Detect too-small divisor (quotient overflow)
     */
    let div = ((dst << 24) >> 24);
    let result = ((src = (this.regEAX << 16) >> 16) / div)|0;

    /**
     * Note the following difference, from "AP-186: Introduction to the 80186 Microprocessor, March 1983":
     *
     *      "The 8086 will cause a divide error whenever the absolute value of the quotient is greater then 7FFFH
     *      (for word operations) or if the absolute value of the quotient is greater than 7FH (for byte operations).
     *      The 80186 has expanded the range of negative numbers allowed as a quotient by 1 to include 8000H and 80H.
     *      These numbers represent the most negative numbers representable using 2's complement arithmetic (equaling
     *      -32768 and -128 in decimal, respectively)."
     */
    if (result != ((result << 24) >> 24) || this.model <= X86.MODEL_8088 && result == -128) {
        X86.helpDIVOverflow.call(this);
        return dst;
    }

    this.regMDLo = (result & 0xff) | (((src % div) & 0xff) << 8);
    this.fMDSet = true;

    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesIDivBR : this.cycleCounts.nOpCyclesIDivBM);
    this.opFlags |= X86.OPFLAG.NOWRITE;
    return dst;
};

/**
 * fnIDIVw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst (the divisor)
 * @param {number} src (null; DX:AX or EDX:EAX is the implied src)
 * @returns {number} (we return dst unchanged, since it's actually DX:AX that's modified)
 */
X86.fnIDIVw = function(dst, src)
{
    if (this.sizeData == 2) {
        /**
         * Detect zero divisor
         */
        if (!dst) {
            X86.helpDIVOverflow.call(this);
            return dst;
        }

        /**
         * Detect too-small divisor (quotient overflow)
         */
        let div = ((dst << 16) >> 16);
        let result = ((src = (this.regEDX << 16) | (this.regEAX & 0xffff)) / div)|0;

        /**
         * Note the following difference, from "AP-186: Introduction to the 80186 Microprocessor, March 1983":
         *
         *      "The 8086 will cause a divide error whenever the absolute value of the quotient is greater then 7FFFH
         *      (for word operations) or if the absolute value of the quotient is greater than 7FH (for byte operations).
         *      The 80186 has expanded the range of negative numbers allowed as a quotient by 1 to include 8000H and 80H.
         *      These numbers represent the most negative numbers representable using 2's complement arithmetic (equaling
         *      -32768 and -128 in decimal, respectively)."
         */
        if (result != ((result << 16) >> 16) || this.model <= X86.MODEL_8088 && result == -32768) {
            X86.helpDIVOverflow.call(this);
            return dst;
        }

        this.regMDLo = (result & 0xffff);
        this.regMDHi = (src % div) & 0xffff;
    }
    else {
        if (!X86.helpIDIV32.call(this, this.regEAX, this.regEDX, dst)) {
            X86.helpDIVOverflow.call(this);
            return dst;
        }
        this.regMDLo |= 0;
        this.regMDHi |= 0;
    }

    this.fMDSet = true;

    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesIDivWR : this.cycleCounts.nOpCyclesIDivWM);
    this.opFlags |= X86.OPFLAG.NOWRITE;
    return dst;
};

/**
 * fnIMUL8(dst, src)
 *
 * 80286_and_80287_Programmers_Reference_Manual_1987.pdf, p.B-44 (p.254) notes that:
 *
 *      "The low 16 bits of the product of a 16-bit signed multiply are the same as those of an
 *      unsigned multiply. The three operand IMUL instruction can be used for unsigned operands as well."
 *
 * However, we still sign-extend the operands before multiplying, making it easier to range-check the result.
 *
 * (80186/80188 and up)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnIMUL8 = function(dst, src)
{
    /**
     * NOTE: getIPDisp() already sign-extends the dst parameter, so fnIMULrw() needlessly sign-extends it again;
     * a small price to pay for a common function.
     */
    let result = X86.fnIMULrw.call(this, this.getIPDisp(), src);

    /**
     * NOTE: The above function already accounted for the 80386 cycle count, so we are simply accounting for the
     * increased time on an 80286; the 80186/80188 have even larger values, but we'll worry about that another day.
     */
    if (this.model < X86.MODEL_80386) this.nStepCycles -= 12;
    return result;
};

/**
 * fnIMULn(dst, src)
 *
 * 80286_and_80287_Programmers_Reference_Manual_1987.pdf, p.B-44 (p.254) notes that:
 *
 *      "The low 16 bits of the product of a 16-bit signed multiply are the same as those of an
 *      unsigned multiply. The three operand IMUL instruction can be used for unsigned operands as well."
 *
 * However, we still sign-extend the operands before multiplying, making it easier to range-check the result.
 *
 * (80186/80188 and up)
 *
 * @this {CPUx86}
 * @param {number} dst (not used)
 * @param {number} src
 * @returns {number}
 */
X86.fnIMULn = function(dst, src)
{
    let result;
    dst = this.getIPWord();

    if (this.sizeData == 2) {
        result = X86.fnIMULrw.call(this, dst, src);
    } else {
        result = X86.fnIMULrd.call(this, dst, src);
    }

    /**
     * NOTE: The above functions already accounted for 80386 cycle counts, so we are simply accounting for the
     * increased time on an 80286; the 80186/80188 have even larger values, but we'll worry about that another day.
     */
    if (this.model < X86.MODEL_80386) this.nStepCycles -= 12;
    return result;
};

/**
 * fnIMUL32(dst, src)
 *
 * This sets regMDHi:regMDLo to the 64-bit result of dst * src, both of which are treated as signed.
 *
 * @this {CPUx86}
 * @param {number} dst (any 32-bit number, treated as signed)
 * @param {number} src (any 32-bit number, treated as signed)
 */
X86.fnIMUL32 = function(dst, src)
{
    let fNeg = false;
    if (src < 0) {
        src = -src|0;
        fNeg = !fNeg;
    }
    if (dst < 0) {
        dst = -dst|0;
        fNeg = !fNeg;
    }
    X86.fnMUL32.call(this, dst, src);
    if (fNeg) {
        this.regMDLo = (~this.regMDLo + 1)|0;
        this.regMDHi = (~this.regMDHi + (this.regMDLo? 0 : 1))|0;
    }
};

/**
 * fnIMULb(dst, src)
 *
 * This 16-bit multiplication must indicate when the upper 8 bits are simply a sign-extension of the
 * lower 8 bits (carry clear) and when the upper 8 bits contain significant bits (carry set).  The latter
 * will occur whenever a positive result is > 127 (0x007f) and whenever a negative result is < -128
 * (0xff80).
 *
 * Example 1: 16 * 4 = 64 (0x0040): carry is clear
 * Example 2: 16 * 8 = 128 (0x0080): carry is set (the sign bit no longer fits in the lower 8 bits)
 * Example 3: 16 * -8 (0xf8) = -128 (0xff80): carry is clear (the sign bit *still* fits in the lower 8 bits)
 * Example 4: 16 * -16 (0xf0) = -256 (0xff00): carry is set (the sign bit no longer fits in the lower 8 bits)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null; AL is the implied src)
 * @returns {number} (we return dst unchanged, since it's actually AX that's modified)
 */
X86.fnIMULb = function(dst, src)
{
    let result = (((this.regEAX << 24) >> 24) * ((dst << 24) >> 24))|0;
    this.regMDLo = result & 0xffff;
    if (result > 127 || result < -128) {
        this.setCF(); this.setOF();
    } else {
        this.clearCF(); this.clearOF();
    }
    if (this.model <= X86.MODEL_8088) {
        this.clearZF();         // differentiate ourselves from a NEC V20
    }
    this.fMDSet = true;
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesIMulBR : this.cycleCounts.nOpCyclesIMulBM);
    this.opFlags |= X86.OPFLAG.NOWRITE;
    return dst;
};

/**
 * fnIMULw(dst, src)
 *
 * regMDHi:regMDLo = dst * regEAX
 *
 * This 32-bit multiplication must indicate when the upper 16 bits are simply a sign-extension of the
 * lower 16 bits (carry clear) and when the upper 16 bits contain significant bits (carry set).  The latter
 * will occur whenever a positive result is > 32767 (0x00007fff) and whenever a negative result is < -32768
 * (0xffff8000).
 *
 * Example 1: 256 * 64 = 16384 (0x00004000): carry is clear
 * Example 2: 256 * 128 = 32768 (0x00008000): carry is set (the sign bit no longer fits in the lower 16 bits)
 * Example 3: 256 * -128 (0xff80) = -32768 (0xffff8000): carry is clear (the sign bit *still* fits in the lower 16 bits)
 * Example 4: 256 * -256 (0xff00) = -65536 (0xffff0000): carry is set (the sign bit no longer fits in the lower 16 bits)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null; AX or EAX is the implied src)
 * @returns {number} (we return dst unchanged, since it's actually DX:AX or EDX:EAX that's modified)
 */
X86.fnIMULw = function(dst, src)
{
    let fOverflow;
    if (this.sizeData == 2) {
        src = this.regEAX & 0xffff;
        let result = (((src << 16) >> 16) * ((dst << 16) >> 16))|0;
        this.regMDLo = result & 0xffff;
        this.regMDHi = (result >> 16) & 0xffff;
        fOverflow = (result > 32767 || result < -32768);
    } else {
        X86.fnIMUL32.call(this, dst, this.regEAX);
        fOverflow = (this.regMDHi != (this.regMDLo >> 31));
    }
    if (fOverflow) {
        this.setCF(); this.setOF();
    } else {
        this.clearCF(); this.clearOF();
    }
    if (this.model <= X86.MODEL_8088) {
        this.clearZF();         // differentiate ourselves from a NEC V20
    }
    this.fMDSet = true;
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesIMulWR : this.cycleCounts.nOpCyclesIMulWM);
    this.opFlags |= X86.OPFLAG.NOWRITE;
    return dst;
};

/**
 * fnIMULrw(dst, src)
 *
 * This function exists for 16-bit IMUL instructions that produce a 16-bit result instead of a 32-bit result
 * (and don't implicitly use the accumulator).
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnIMULrw = function(dst, src)
{
    /**
     * Unlike fnIMULrd() below, we can use normal JavaScript multiplication, because there's no danger of
     * overflowing the floating-point result and losing accuracy in the bottom 16 bits.
     */
    let result = (((dst << 16) >> 16) * ((src << 16) >> 16))|0;
    if (result > 32767 || result < -32768) {
        this.setCF(); this.setOF();
    } else {
        this.clearCF(); this.clearOF();
    }
    result &= 0xffff;
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? 9 : 12);
    return result;
};

/**
 * fnIMULrd(dst, src)
 *
 * This function exists for 32-bit IMUL instructions that produce a 32-bit result instead of a 64-bit result
 * (and don't implicitly use the accumulator).
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnIMULrd = function(dst, src)
{
    /**
     * The following code works, but I've stopped using it because it produces different results from an actual CPU
     * when overflow occurs; the bottom 32 bits of the result are still supposed to be accurate.
     *
     * And unfortunately, we cannot achieve that level of compatibility using normal JavaScript multiplication,
     * because the result may be too large to fit in a JavaScript floating-point variable, which means we could lose
     * accuracy in the bottom 32 bits, which would defeat what we're trying to achieve here.  So we must use the
     * slower fnIMUL32() function.
     *
     *      let result = dst * src;
     *      if (result > 2147483647 || result < -2147483648) {
     *          this.setCF(); this.setOF();
     *      } else {
     *          this.clearCF(); this.clearOF();
     *      }
     *      result |= 0;
     */
    X86.fnIMUL32.call(this, dst, src);
    let fOverflow = (this.regMDHi != (this.regMDLo >> 31));
    if (fOverflow) {
        this.setCF(); this.setOF();
    } else {
        this.clearCF(); this.clearOF();
    }
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? 9 : 12);
    return this.regMDLo;
};

/**
 * fnINCb(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null)
 * @returns {number}
 */
X86.fnINCb = function(dst, src)
{
    let b = (dst + 1)|0;
    this.setArithResult(dst, 1, b, X86.RESULT.BYTE | X86.RESULT.NOTCF);
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesIncR : this.cycleCounts.nOpCyclesIncM);
    return b & 0xff;
};

/**
 * fnINCw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null)
 * @returns {number}
 */
X86.fnINCw = function(dst, src)
{
    let w = (dst + 1)|0;
    this.setArithResult(dst, 1, w, this.typeData | X86.RESULT.NOTCF);
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesIncR : this.cycleCounts.nOpCyclesIncM);
    return w & this.maskData;
};

/**
 * fnJMPw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null)
 * @returns {number}
 */
X86.fnJMPw = function(dst, src)
{
    this.setIP(dst);
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesJmpWR : this.cycleCounts.nOpCyclesJmpWM);
    this.opFlags |= X86.OPFLAG.NOWRITE;
    return dst;
};

/**
 * fnJMPFdw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null)
 * @returns {number}
 */
X86.fnJMPFdw = function(dst, src)
{
    if (this.regEA === X86.ADDR_INVALID) {
        return X86.fnGRPUndefined.call(this, dst, src);
    }
    this.setCSIP(dst, this.getShort(this.regEA + this.sizeData));
    if (MAXDEBUG && this.cIntReturn) this.checkIntReturn(this.regLIP);
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpDM;
    this.opFlags |= X86.OPFLAG.NOWRITE;
    return dst;
};

/**
 * fnLAR(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnLAR = function(dst, src)
{
    this.nStepCycles -= (14 + (this.regEA === X86.ADDR_INVALID? 0 : 2));
    /**
     * Currently, segVER.load() will return an error only if the selector is beyond the bounds of the
     * descriptor table or the descriptor is not for a segment.
     *
     * TODO: This instruction's 80286 documentation does not discuss conforming code segments; determine
     * if we need a special check for them.
     */
    this.clearZF();
    if (this.segVER.load(src) !== X86.ADDR_INVALID) {
        if (this.segVER.dpl >= this.nCPL && this.segVER.dpl >= (src & X86.SEL.RPL)) {
            this.setZF();
            dst = this.segVER.acc & ~X86.DESC.ACC.BASE1623;
            if (this.sizeData > 2) {
                dst |= ((this.segVER.ext & ~X86.DESC.EXT.BASE2431) << 16);
            }
        }
    }
    return dst;
};

/**
 * fnLDS(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnLDS = function(dst, src)
{
    if (this.regEA === X86.ADDR_INVALID) {
        X86.opUndefined.call(this);
        return dst;
    }
    this.setDS(this.getShort(this.regEA + this.sizeData));
    this.nStepCycles -= this.cycleCounts.nOpCyclesLS;
    return src;
};

/**
 * fnLEA(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnLEA = function(dst, src)
{
    /**
     * This code was disabled when X86.ADDR_INVALID was -1, because otherwise a perfectly valid instruction
     * like "LEA ECX,[EAX-1]" would fail when EAX was zero; now that X86.ADDR_INVALID is defined as a number
     * outside the 32-bit range (ie, 0x100000000), it can be re-enabled.
     */
    if (this.regEA === X86.ADDR_INVALID) {
        /**
         * TODO: After reading http://www.os2museum.com/wp/undocumented-8086-opcodes/, it seems that this
         * form of LEA (eg, "LEA AX,DX") simply returns the last calculated EA.  Since we always reset regEA
         * at the start of a new instruction, we would need to preserve the previous EA if we want to mimic
         * that (undocumented) behavior.
         *
         * And for completeness, we would have to extend EA tracking beyond the usual ModRM instructions
         * (eg, XLAT, instructions that modify the stack pointer, and string instructions).  Anything else?
         */
        X86.opUndefined.call(this);
        return dst;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesLEA;
    /**
     * To properly deal with instructions such as:
     *
     *      #0467:10F8 678D0480         LEA      AX,[EAX+EAX*4]
     *      #0467:10FC 678D0441         LEA      AX,[ECX+EAX*2]
     *
     * which may calculate values that exceed 16 bits, we must mask the result to the appropriate size.
     */
    return this.regEA & this.maskData;
};

/**
 * fnLES(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnLES = function(dst, src)
{
    if (this.regEA === X86.ADDR_INVALID) {
        X86.opUndefined.call(this);
        return dst;
    }
    this.setES(this.getShort(this.regEA + this.sizeData));
    this.nStepCycles -= this.cycleCounts.nOpCyclesLS;
    return src;
};

/**
 * fnLFS(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnLFS = function(dst, src)
{
    if (this.regEA === X86.ADDR_INVALID) {
        X86.opUndefined.call(this);
        return dst;
    }
    this.setFS(this.getShort(this.regEA + this.sizeData));
    this.nStepCycles -= this.cycleCounts.nOpCyclesLS;
    return src;
};

/**
 * fnLGDT(dst, src)
 *
 * op=0x0F,0x01,reg=0x2 (GRP7:LGDT)
 *
 * The 80286 LGDT instruction assumes a 40-bit operand: a 16-bit limit followed by a 24-bit base address;
 * the ModRM decoder has already supplied the first word of the operand (in dst), which corresponds to
 * the limit, so we must fetch the remaining bits ourselves.
 *
 * The 80386 LGDT instruction assumes a 48-bit operand: a 16-bit limit followed by a 32-bit base address,
 * but it ignores the last 8 bits of the base address if the OPERAND size is 16 bits; we interpret that to
 * mean that the 24-bit base address should be zero-extended to 32 bits.
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null)
 * @returns {number}
 */
X86.fnLGDT = function(dst, src)
{
    /**
     * TODO: Consider swapping out this function whenever setProtMode() changes the mode to V86-mode.
     */
    if (this.regEA === X86.ADDR_INVALID || I386 && (this.regPS & X86.PS.VM)) {
        X86.opInvalid.call(this);
    } else {
        /**
         * Hopefully it won't hurt to always fetch a 32-bit base address (even on an 80286), which we then
         * mask appropriately.
         */
        this.addrGDT = this.getLong(this.regEA + 2) & (this.maskData | (this.maskData << 8));
        /**
         * An idiosyncrasy of our ModRM decoders is that, if the OPERAND size is 32 bits, then it will have
         * fetched a 32-bit dst operand; we mask off those extra bits now.
         */
        dst &= 0xffff;
        this.addrGDTLimit = this.addrGDT + dst;
        this.opFlags |= X86.OPFLAG.NOWRITE;
        this.nStepCycles -= 11;
    }
    return dst;
};

/**
 * fnLGS(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnLGS = function(dst, src)
{
    if (this.regEA === X86.ADDR_INVALID) {
        X86.opUndefined.call(this);
        return dst;
    }
    this.setGS(this.getShort(this.regEA + this.sizeData));
    this.nStepCycles -= this.cycleCounts.nOpCyclesLS;
    return src;
};

/**
 * fnLIDT(dst, src)
 *
 * op=0x0F,0x01,reg=0x3 (GRP7:LIDT)
 *
 * The 80286 LIDT instruction assumes a 40-bit operand: a 16-bit limit followed by a 24-bit base address;
 * the ModRM decoder has already supplied the first word of the operand (in dst), which corresponds to
 * the limit, so we must fetch the remaining bits ourselves.
 *
 * The 80386 LIDT instruction assumes a 48-bit operand: a 16-bit limit followed by a 32-bit base address,
 * but it ignores the last 8 bits of the base address if the OPERAND size is 16 bits; we interpret that to
 * mean that the 24-bit base address should be zero-extended to 32 bits.
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null)
 * @returns {number}
 */
X86.fnLIDT = function(dst, src)
{
    /**
     * TODO: Consider swapping out this function whenever setProtMode() changes the mode to V86-mode.
     */
    if (this.regEA === X86.ADDR_INVALID || I386 && (this.regPS & X86.PS.VM)) {
        X86.opInvalid.call(this);
    } else {
        /**
         * Hopefully it won't hurt to always fetch a 32-bit base address (even on an 80286), which we then
         * mask appropriately.
         */
        this.addrIDT = this.getLong(this.regEA + 2) & (this.maskData | (this.maskData << 8));
        /**
         * An idiosyncrasy of our ModRM decoders is that, if the OPERAND size is 32 bits, then it will have
         * fetched a 32-bit dst operand; we mask off those extra bits now.
         */
        dst &= 0xffff;
        this.addrIDTLimit = this.addrIDT + dst;
        this.opFlags |= X86.OPFLAG.NOWRITE;
        this.nStepCycles -= 12;
    }
    return dst;
};

/**
 * fnLLDT(dst, src)
 *
 * op=0x0F,0x00,reg=0x2 (GRP6:LLDT)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null)
 * @returns {number}
 */
X86.fnLLDT = function(dst, src)
{
    this.opFlags |= X86.OPFLAG.NOWRITE;
    this.segLDT.load(dst);
    this.nStepCycles -= (17 + (this.regEA === X86.ADDR_INVALID? 0 : 2));
    return dst;
};

/**
 * fnLMSW(dst, src)
 *
 * op=0x0F,0x01,reg=0x6 (GRP7:LMSW)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null)
 * @returns {number}
 */
X86.fnLMSW = function(dst, src)
{
    /**
     * TODO: Consider swapping out this function whenever setProtMode() changes the mode to V86-mode.
     */
    if (I386 && (this.regPS & X86.PS.VM)) {
        X86.opInvalid.call(this);
    } else {
        this.setMSW(dst);
        this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? 3 : 6);
        this.opFlags |= X86.OPFLAG.NOWRITE;
    }
    return dst;
};

/**
 * fnLSL(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (the selector)
 * @returns {number}
 */
X86.fnLSL = function(dst, src)
{
    /**
     * TODO: Is this an invalid operation if regEAWrite is set?  dst is required to be a register.
     */
    this.nStepCycles -= (14 + (this.regEA === X86.ADDR_INVALID? 0 : 2));
    /**
     * Currently, segVER.load() will return an error only if the selector is beyond the bounds of the
     * descriptor table or the descriptor is not for a segment.
     *
     * TODO: LSL is explicitly documented as ALSO requiring a non-null selector, so we check X86.SEL.MASK;
     * are there any other instructions that were, um, less explicit but also require a non-null selector?
     */
    if ((src & X86.SEL.MASK) && this.segVER.load(src) !== X86.ADDR_INVALID) {
        let fConforming = ((this.segVER.acc & X86.DESC.ACC.TYPE.CODE_CONFORMING) == X86.DESC.ACC.TYPE.CODE_CONFORMING);
        if ((fConforming || this.segVER.dpl >= this.nCPL) && this.segVER.dpl >= (src & X86.SEL.RPL)) {
            this.setZF();
            return this.segVER.limit;
        }
    }
    this.clearZF();
    return dst;
};

/**
 * fnLSS(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnLSS = function(dst, src)
{
    if (this.regEA === X86.ADDR_INVALID) {
        X86.opUndefined.call(this);
        return dst;
    }
    this.setSS(this.getShort(this.regEA + this.sizeData));
    this.nStepCycles -= this.cycleCounts.nOpCyclesLS;
    return src;
};

/**
 * fnLTR(dst, src)
 *
 * op=0x0F,0x00,reg=0x3 (GRP6:LTR)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null)
 * @returns {number}
 */
X86.fnLTR = function(dst, src)
{
    this.opFlags |= X86.OPFLAG.NOWRITE;
    if (this.segTSS.load(dst) !== X86.ADDR_INVALID) {
        this.setShort(this.segTSS.addrDesc + X86.DESC.ACC.OFFSET, this.segTSS.acc |= X86.DESC.ACC.TYPE.TSS_BUSY);
        this.segTSS.type |= X86.DESC.ACC.TYPE.TSS_BUSY;
    }
    this.nStepCycles -= (17 + (this.regEA === X86.ADDR_INVALID? 0 : 2));
    return dst;
};

/**
 * fnMOV(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst (current value, ignored)
 * @param {number} src (new value)
 * @returns {number} dst (updated value, from src)
 */
X86.fnMOV = function(dst, src)
{
    this.nStepCycles -= (this.regEAWrite === X86.ADDR_INVALID? (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesMovRR : this.cycleCounts.nOpCyclesMovRM) : this.cycleCounts.nOpCyclesMovMR);
    return src;
};

/**
 * fnMOVXb(dst, src)
 *
 * Helper for opMOVSXb() and opMOVZXb() (which also take care of updating nStepCycles, so we don't have to)
 *
 * @this {CPUx86}
 * @param {number} dst (current value, ignored)
 * @param {number} src (new value)
 * @returns {number} dst (updated value, from src)
 */
X86.fnMOVXb = function(dst, src)
{
    /**
     * The ModRegByte handlers update the registers in the 1st column, but we need to update those in the 2nd column.
     *
     *      000:    AL      ->      000:    AX
     *      001:    CL      ->      001:    CX
     *      010:    DL      ->      010:    DX
     *      011:    BL      ->      011:    BX
     *      100:    AH      ->      100:    SP
     *      101:    CH      ->      101:    BP
     *      110:    DH      ->      110:    SI
     *      111:    BH      ->      111:    DI
     */
    let reg = (this.bModRM >> 3) & 0x7;

    switch(reg) {
    case 0x4:
        this.regXX = this.regEAX;
        break;
    case 0x5:
        this.regXX = this.regECX;
        break;
    case 0x6:
        this.regXX = this.regEDX;
        break;
    case 0x7:
        this.regXX = this.regEBX;
        break;
    }
    return src;
};

/**
 * fnMOVXw(dst, src)
 *
 * Helper for opMOVSXw() and opMOVZXw() (which also take care of updating nStepCycles, so we don't have to)
 *
 * @this {CPUx86}
 * @param {number} dst (current value, ignored)
 * @param {number} src (new value)
 * @returns {number} dst (updated value, from src)
 */
X86.fnMOVXw = function(dst, src)
{
    return src;
};

/**
 * fnMOVn(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst (current value, ignored)
 * @param {number} src (new value)
 * @returns {number} dst (updated value, from src)
 */
X86.fnMOVn = function(dst, src)
{
    this.nStepCycles -= (this.regEAWrite === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesMovRI : this.cycleCounts.nOpCyclesMovMI);
    return src;
};

/**
 * fnMOVsrw(dst, src)
 *
 * This helper saves the contents of the general-purpose register that will be overwritten, so that the caller
 * can restore it after moving the updated value to the correct segment register.
 *
 * @this {CPUx86}
 * @param {number} dst (current value, ignored)
 * @param {number} src (new value)
 * @returns {number} dst (updated value, from src)
 */
X86.fnMOVsrw = function(dst, src)
{
    let reg = (this.bModRM >> 3) & 0x7;

    switch(reg) {
    case 0x0:
        this.regXX = this.regEAX;
        break;
    case 0x2:
        this.regXX = this.regEDX;
        break;
    case 0x3:
        this.regXX = this.regEBX;
        break;
    default:
        if (this.model == X86.MODEL_80286 || this.model == X86.MODEL_80386 && reg != 0x4 && reg != 0x5) {
            X86.opInvalid.call(this);
            break;
        }
        switch(reg) {
        case 0x1:           // MOV to CS is undocumented on 8086/8088/80186/80188, and invalid on 80286 and up
            this.regXX = this.regECX;
            break;
        case 0x4:           // this form of MOV to ES is undocumented on 8086/8088/80186/80188, invalid on 80286, and uses FS starting with 80386
            this.regXX = this.getSP();
            break;
        case 0x5:           // this form of MOV to CS is undocumented on 8086/8088/80186/80188, invalid on 80286, and uses GS starting with 80386
            this.regXX = this.regEBP;
            break;
        case 0x6:           // this form of MOV to SS is undocumented on 8086/8088/80186/80188, invalid on 80286 and up
            this.regXX = this.regESI;
            break;
        case 0x7:           // this form of MOV to DS is undocumented on 8086/8088/80186/80188, invalid on 80286 and up
            this.regXX = this.regEDI;
            break;
        default:
            break;
        }
        break;
    }
    /**
     * We could just return src, but nStepCycles needs to be updated, too.
     */
    return X86.fnMOV.call(this, dst, src);
};

/**
 * fnMOVwsr(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst (current value, ignored)
 * @param {number} src (new value)
 * @returns {number} dst
 */
X86.fnMOVwsr = function(dst, src)
{
    let reg = (this.bModRM >> 3) & 0x7;

    switch (reg) {
    case 0x0:
        src = this.segES.sel;
        break;
    case 0x1:
        src = this.segCS.sel;
        break;
    case 0x2:
        src = this.segSS.sel;
        break;
    case 0x3:
        src = this.segDS.sel;
        break;
    case 0x4:
        if (I386 && this.model >= X86.MODEL_80386) {
            src = this.segFS.sel;
            break;
        }
        X86.opInvalid.call(this);
        src = dst;
        break;
    case 0x5:
        if (I386 && this.model >= X86.MODEL_80386) {
            src = this.segGS.sel;
            break;
        }
        /* falls through */
    default:
        X86.opInvalid.call(this);
        src = dst;
        break;
    }

    /**
     * When a 32-bit OPERAND size is in effect, segment register writes via opMOVwsr() must write 32 bits
     * (zero-extended) if the destination is a register, but only 16 bits if the destination is memory,
     * hence the setDataSize(2) below.
     *
     * The only other caller, opMOVrc(), is not affected, because it writes only to register destinations.
     */
    if (this.regEAWrite !== X86.ADDR_INVALID) {
        this.setDataSize(2);
    }
    /**
     * We could just return src, but nStepCycles needs to be updated, too.
     */
    return X86.fnMOV.call(this, dst, src);
};

/**
 * fnMULb(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null)
 * @returns {number} (we return dst unchanged, since it's actually AX that's modified)
 */
X86.fnMULb = function(dst, src)
{
    this.regMDLo = ((this.regEAX & 0xff) * dst) & 0xffff;
    if (this.regMDLo & 0xff00) {
        this.setCF(); this.setOF();
    } else {
        this.clearCF(); this.clearOF();
    }
    if (this.model <= X86.MODEL_8088) {
        this.clearZF();         // differentiate ourselves from a NEC V20
    }
    this.fMDSet = true;
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesMulBR : this.cycleCounts.nOpCyclesMulBM);
    this.opFlags |= X86.OPFLAG.NOWRITE;
    return dst;
};

/**
 * fnMUL32(dst, src)
 *
 * This sets regMDHi:regMDLo to the 64-bit result of dst * src, both of which are treated as unsigned.
 *
 * The algorithm is based on the traditional "by hand" multiplication method, by treating the two inputs
 * (dst and src) as two 2-digit numbers, where each digit is a base-65536 digit.
 *
 * @this {CPUx86}
 * @param {number} dst (any 32-bit number, treated as unsigned)
 * @param {number} src (any 32-bit number, treated as unsigned)
 */
X86.fnMUL32 = function(dst, src)
{
    if (!(dst & ~0xffff) && !(src & ~0xffff)) {
        this.regMDLo = (dst * src)|0;
        this.regMDHi = 0;
    }
    else {
        let srcLo = src & 0xffff;
        let srcHi = src >>> 16;
        let dstLo = dst & 0xffff;
        let dstHi = dst >>> 16;

        let mul00 = srcLo * dstLo;
        let mul16 = ((mul00 >>> 16) + (srcHi * dstLo));
        let mul32 = mul16 >>> 16;
        mul16 = ((mul16 & 0xffff) + (srcLo * dstHi));
        mul32 += ((mul16 >>> 16) + (srcHi * dstHi));

        this.regMDLo = (mul16 << 16) | (mul00 & 0xffff);
        this.regMDHi = mul32|0;
    }
};

/**
 * fnMULw(dst, src)
 *
 * regMDHi:regMDLo = dst * regEAX
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null; AX or EAX is the implied src)
 * @returns {number} (we return dst unchanged, since it's actually DX:AX that's modified)
 */
X86.fnMULw = function(dst, src)
{
    if (this.sizeData == 2) {
        src = this.regEAX & 0xffff;
        let result = (src * dst)|0;
        this.regMDLo = result & 0xffff;
        this.regMDHi = (result >> 16) & 0xffff;
    } else {
        X86.fnMUL32.call(this, dst, this.regEAX);
        if (this.stepping == X86.STEPPING_80386_B1) {
            if (this.regEAX == 0x0417A000 && dst == 0x00000081) {
                /**
                 * Normally, the result should be 0x20FE7A000 (ie, regMDHi should be 0x2).
                 * I'm not sure what a typical B1 stepping failure looked like, so I'll set regMDHi to 0.
                 *
                 * If you want a B1 stepping without this 32-bit multiplication flaw, select the B2 stepping.
                 */
                this.assert(this.regMDLo == 0x0FE7A000 && this.regMDHi == 0x00000002);
                this.regMDHi = 0;
            }
        }
    }

    if (this.regMDHi) {
        this.setCF(); this.setOF();
    } else {
        this.clearCF(); this.clearOF();
    }
    if (this.model <= X86.MODEL_8088) {
        this.clearZF();         // differentiate ourselves from a NEC V20
    }
    this.fMDSet = true;
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesMulWR : this.cycleCounts.nOpCyclesMulWM);
    this.opFlags |= X86.OPFLAG.NOWRITE;
    return dst;
};

/**
 * fnNEGb(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null)
 * @returns {number}
 */
X86.fnNEGb = function(dst, src)
{
    let b = (-dst)|0;
    this.setArithResult(0, dst, b, X86.RESULT.BYTE | X86.RESULT.ALL, true);
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesNegR : this.cycleCounts.nOpCyclesNegM);
    return b & 0xff;
};

/**
 * fnNEGw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null)
 * @returns {number}
 */
X86.fnNEGw = function(dst, src)
{
    let w = (-dst)|0;
    this.setArithResult(0, dst, w, this.typeData | X86.RESULT.ALL, true);
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesNegR : this.cycleCounts.nOpCyclesNegM);
    return w & this.maskData;
};

/**
 * fnNOTb(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null)
 * @returns {number}
 */
X86.fnNOTb = function(dst, src)
{
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesNegR : this.cycleCounts.nOpCyclesNegM);
    return dst ^ 0xff;
};

/**
 * fnNOTw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null)
 * @returns {number}
 */
X86.fnNOTw = function(dst, src)
{
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesNegR : this.cycleCounts.nOpCyclesNegM);
    return dst ^ this.maskData;
};

/**
 * fnORb(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnORb = function(dst, src)
{
    this.nStepCycles -= (this.regEAWrite === X86.ADDR_INVALID? (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesArithRR : this.cycleCounts.nOpCyclesArithRM) : this.cycleCounts.nOpCyclesArithMR);
    return this.setLogicResult(dst | src, X86.RESULT.BYTE);
};

/**
 * fnORw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnORw = function(dst, src)
{
    this.nStepCycles -= (this.regEAWrite === X86.ADDR_INVALID? (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesArithRR : this.cycleCounts.nOpCyclesArithRM) : this.cycleCounts.nOpCyclesArithMR);
    return this.setLogicResult(dst | src, this.typeData) & this.maskData;
};

/**
 * fnPOPw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst (current value, ignored)
 * @param {number} src (new value)
 * @returns {number} dst (updated value, from src)
 */
X86.fnPOPw = function(dst, src)
{
    this.nStepCycles -= (this.regEAWrite === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesPopReg : this.cycleCounts.nOpCyclesPopMem);
    return src;
};

/**
 * fnPUSHw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null)
 * @returns {number}
 */
X86.fnPUSHw = function(dst, src)
{
    let w = dst;
    if (this.opFlags & X86.OPFLAG.PUSHSP) {
        /**
         * This is the one case where must actually modify dst, so that the ModRM function will
         * not put a stale value back into the SP register.
         */
        dst = (dst - 2) & 0xffff;
        /**
         * And on the 8086/8088, the value we just calculated also happens to be the value that must
         * be pushed.
         */
        if (this.model < X86.MODEL_80286) w = dst;
    }
    this.pushWord(w);
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesPushReg : this.cycleCounts.nOpCyclesPushMem);
    /**
     * The PUSH is the only write that needs to occur; dst was the source operand and does not need to be rewritten.
     */
    this.opFlags |= X86.OPFLAG.NOWRITE;
    return dst;
};

/**
 * fnRCLb(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (1 or CL)
 * @returns {number}
 */
X86.fnRCLb = function(dst, src)
{
    let result = dst;
    let count = src & this.nShiftCountMask;
    if (count) {
        let carry = this.getCarry();
        count %= 9;
        if (!count) {
            carry <<= 7;
        } else {
            result = ((dst << count) | (carry << (count - 1)) | (dst >> (9 - count))) & 0xff;
            carry = dst << (count - 1);
        }
        this.setRotateResult(result, carry, X86.RESULT.BYTE);
    }
    return result;
};

/**
 * fnRCLw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (1 or CL)
 * @returns {number}
 */
X86.fnRCLw = function(dst, src)
{
    let result = dst;
    let count = src & this.nShiftCountMask;
    if (count) {
        let carry = this.getCarry();
        count %= 17;
        if (!count) {
            carry <<= 15;
        } else {
            result = ((dst << count) | (carry << (count - 1)) | (dst >> (17 - count))) & 0xffff;
            carry = dst << (count - 1);
        }
        this.setRotateResult(result, carry, X86.RESULT.WORD);
    }
    return result;
};

/**
 * fnRCLd(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (1 or CL)
 * @returns {number}
 */
X86.fnRCLd = function(dst, src)
{
    let result = dst;
    let count = src & this.nShiftCountMask;     // this 32-bit-only function could mask with 0x1f directly
    if (count) {
        let carry = this.getCarry();
        /**
         * JavaScript Alert: much like a post-8086 Intel CPU, JavaScript shift counts are mod 32,
         * so "dst >>> 32" is equivalent to "dst >>> 0", which doesn't shift any bits at all.  To
         * compensate, we shift one bit less than the maximum, and then shift one bit farther.
         */
        result = (dst << count) | (carry << (count - 1)) | ((dst >>> (32 - count)) >>> 1);
        carry = dst << (count - 1);
        this.setRotateResult(result, carry, X86.RESULT.DWORD);
    }
    return result;
};

/**
 * fnRCRb(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (1 or CL)
 * @returns {number}
 */
X86.fnRCRb = function(dst, src)
{
    let result = dst;
    let count = src & this.nShiftCountMask;
    if (count) {
        let carry = this.getCarry();
        count %= 9;
        if (!count) {
            carry <<= 7;
        } else {
            result = ((dst >> count) | (carry << (8 - count)) | (dst << (9 - count))) & 0xff;
            carry = dst << (8 - count);
        }
        this.setRotateResult(result, carry, X86.RESULT.BYTE);
    }
    return result;
};

/**
 * fnRCRw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (1 or CL)
 * @returns {number}
 */
X86.fnRCRw = function(dst, src)
{
    let result = dst;
    let count = src & this.nShiftCountMask;
    if (count) {
        let carry = this.getCarry();
        count %= 17;
        if (!count) {
            carry <<= 15;
        } else {
            result = ((dst >> count) | (carry << (16 - count)) | (dst << (17 - count))) & 0xffff;
            carry = dst << (16 - count);
        }
        this.setRotateResult(result, carry, X86.RESULT.WORD);
    }
    return result;
};

/**
 * fnRCRd(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (1 or CL)
 * @returns {number}
 */
X86.fnRCRd = function(dst, src)
{
    let result = dst;
    let count = src & this.nShiftCountMask;     // this 32-bit-only function could mask with 0x1f directly
    if (count) {
        let carry = this.getCarry();
        /**
         * JavaScript Alert: much like a post-8086 Intel CPU, JavaScript shift counts are mod 32,
         * so "dst << 32" is equivalent to "dst << 0", which doesn't shift any bits at all.  To
         * compensate, we shift one bit less than the maximum, and then shift one bit farther.
         */
        result = (dst >>> count) | (carry << (32 - count)) | ((dst << (32 - count)) << 1);
        carry = dst << (32 - count);
        this.setRotateResult(result, carry, X86.RESULT.DWORD);
    }
    return result;
};

/**
 * fnROLb(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (1 or CL)
 * @returns {number}
 */
X86.fnROLb = function(dst, src)
{
    let result = dst;
    let count = src & this.nShiftCountMask;
    if (count) {
        let carry;
        count &= 0x7;
        if (!count) {
            carry = dst << 7;
        } else {
            carry = dst << (count - 1);
            result = ((dst << count) | (dst >> (8 - count))) & 0xff;
        }
        this.setRotateResult(result, carry, X86.RESULT.BYTE);
    }
    return result;
};

/**
 * fnROLw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (1 or CL)
 * @returns {number}
 */
X86.fnROLw = function(dst, src)
{
    let result = dst;
    let count = src & this.nShiftCountMask;
    if (count) {
        let carry;
        count &= 0xf;
        if (!count) {
            carry = dst << 15;
        } else {
            carry = dst << (count - 1);
            result = ((dst << count) | (dst >> (16 - count))) & 0xffff;
        }
        this.setRotateResult(result, carry, X86.RESULT.WORD);
    }
    return result;
};

/**
 * fnROLd(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (1 or CL)
 * @returns {number}
 */
X86.fnROLd = function(dst, src)
{
    let result = dst;
    let count = src & this.nShiftCountMask;
    if (count) {
        let carry = dst << (count - 1);
        result = (dst << count) | (dst >>> (32 - count));
        this.setRotateResult(result, carry, X86.RESULT.DWORD);
    }
    return result;
};

/**
 * fnRORb(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (1 or CL)
 * @returns {number}
 */
X86.fnRORb = function(dst, src)
{
    let result = dst;
    let count = src & this.nShiftCountMask;
    if (count) {
        let carry;
        count &= 0x7;
        if (!count) {
            carry = dst;
        } else {
            carry = dst << (8 - count);
            result = ((dst >>> count) | carry) & 0xff;
        }
        this.setRotateResult(result, carry, X86.RESULT.BYTE);
    }
    return result;
};

/**
 * fnRORw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (1 or CL)
 * @returns {number}
 */
X86.fnRORw = function(dst, src)
{
    let result = dst;
    let count = src & this.nShiftCountMask;
    if (count) {
        let carry;
        count &= 0xf;
        if (!count) {
            carry = dst;
        } else {
            carry = dst << (16 - count);
            result = ((dst >>> count) | carry) & 0xffff;
        }
        this.setRotateResult(result, carry, X86.RESULT.WORD);
    }
    return result;
};

/**
 * fnRORd(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (1 or CL)
 * @returns {number}
 */
X86.fnRORd = function(dst, src)
{
    let result = dst;
    let count = src & this.nShiftCountMask;
    if (count) {
        let carry = dst << (32 - count);
        result = (dst >>> count) | carry;
        this.setRotateResult(result, carry, X86.RESULT.DWORD);
    }
    return result;
};

/**
 * fnSARb(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (1 or CL, or an immediate byte for 80186/80188 and up)
 * @returns {number}
 */
X86.fnSARb = function(dst, src)
{
    let count = src & this.nShiftCountMask;
    if (count) {
        if (count > 9) count = 9;
        let carry = ((dst << 24) >> 24) >> (count - 1);
        dst = (carry >> 1) & 0xff;
        this.setLogicResult(dst, X86.RESULT.BYTE, carry & 0x1);
    }
    return dst;
};

/**
 * fnSARw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (1 or CL, or an immediate byte for 80186/80188 and up)
 * @returns {number}
 */
X86.fnSARw = function(dst, src)
{
    let count = src & this.nShiftCountMask;
    if (count) {
        if (count > 17) count = 17;
        let carry = ((dst << 16) >> 16) >> (count - 1);
        dst = (carry >> 1) & 0xffff;
        this.setLogicResult(dst, X86.RESULT.WORD, carry & 0x1);
    }
    return dst;
};

/**
 * fnSARd(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (1 or CL, or an immediate byte for 80186/80188 and up)
 * @returns {number}
 */
X86.fnSARd = function(dst, src)
{
    let count = src & this.nShiftCountMask;
    if (count) {
        let carry = dst >> (count - 1);
        dst = (carry >> 1);
        this.setLogicResult(dst, X86.RESULT.DWORD, carry & 0x1);
    }
    return dst;
};

/**
 * fnSBBb(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnSBBb = function(dst, src)
{
    let b = (dst - src - this.getCarry())|0;
    this.setArithResult(dst, src, b, X86.RESULT.BYTE | X86.RESULT.ALL, true);
    this.nStepCycles -= (this.regEAWrite === X86.ADDR_INVALID? (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesArithRR : this.cycleCounts.nOpCyclesArithRM) : this.cycleCounts.nOpCyclesArithMR);
    return b & 0xff;
};

/**
 * fnSBBw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnSBBw = function(dst, src)
{
    let w = (dst - src - this.getCarry())|0;
    this.setArithResult(dst, src, w, this.typeData | X86.RESULT.ALL, true);
    this.nStepCycles -= (this.regEAWrite === X86.ADDR_INVALID? (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesArithRR : this.cycleCounts.nOpCyclesArithRM) : this.cycleCounts.nOpCyclesArithMR);
    return w & this.maskData;
};

/**
 * fnSETO(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst (ignored)
 * @param {number} src (ignored)
 * @returns {number}
 */
X86.fnSETO = function(dst, src)
{
    return (this.getOF()? 1 : 0);
};

/**
 * fnSETNO(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst (ignored)
 * @param {number} src (ignored)
 * @returns {number}
 */
X86.fnSETNO = function(dst, src)
{
    return (this.getOF()? 0 : 1);
};

/**
 * fnSETC(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst (ignored)
 * @param {number} src (ignored)
 * @returns {number}
 */
X86.fnSETC = function(dst, src)
{
    return (this.getCF()? 1 : 0);
};

/**
 * fnSETNC(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst (ignored)
 * @param {number} src (ignored)
 * @returns {number}
 */
X86.fnSETNC = function(dst, src)
{
    return (this.getCF()? 0 : 1);
};

/**
 * fnSETZ(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst (ignored)
 * @param {number} src (ignored)
 * @returns {number}
 */
X86.fnSETZ = function(dst, src)
{
    return (this.getZF()? 1 : 0);
};

/**
 * fnSETNZ(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst (ignored)
 * @param {number} src (ignored)
 * @returns {number}
 */
X86.fnSETNZ = function(dst, src)
{
    return (this.getZF()? 0 : 1);
};

/**
 * fnSETBE(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst (ignored)
 * @param {number} src (ignored)
 * @returns {number}
 */
X86.fnSETBE = function(dst, src)
{
    return (this.getCF() || this.getZF()? 1 : 0);
};

/**
 * fnSETNBE(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst (ignored)
 * @param {number} src (ignored)
 * @returns {number}
 */
X86.fnSETNBE = function(dst, src)
{
    return (this.getCF() || this.getZF()? 0 : 1);
};

/**
 * fnSETS(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst (ignored)
 * @param {number} src (ignored)
 * @returns {number}
 */
X86.fnSETS = function(dst, src)
{
    return (this.getSF()? 1 : 0);
};

/**
 * fnSETNS(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst (ignored)
 * @param {number} src (ignored)
 * @returns {number}
 */
X86.fnSETNS = function(dst, src)
{
    return (this.getSF()? 0 : 1);
};

/**
 * fnSETP(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst (ignored)
 * @param {number} src (ignored)
 * @returns {number}
 */
X86.fnSETP = function(dst, src)
{
    return (this.getPF()? 1 : 0);
};

/**
 * fnSETNP(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst (ignored)
 * @param {number} src (ignored)
 * @returns {number}
 */
X86.fnSETNP = function(dst, src)
{
    return (this.getPF()? 0 : 1);
};

/**
 * fnSETL(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst (ignored)
 * @param {number} src (ignored)
 * @returns {number}
 */
X86.fnSETL = function(dst, src)
{
    return (!this.getSF() != !this.getOF()? 1 : 0);
};

/**
 * fnSETNL(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst (ignored)
 * @param {number} src (ignored)
 * @returns {number}
 */
X86.fnSETNL = function(dst, src)
{
    return (!this.getSF() != !this.getOF()? 0 : 1);
};

/**
 * fnSETLE(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst (ignored)
 * @param {number} src (ignored)
 * @returns {number}
 */
X86.fnSETLE = function(dst, src)
{
    return (this.getZF() || !this.getSF() != !this.getOF()? 1 : 0);
};

/**
 * fnSETNLE(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst (ignored)
 * @param {number} src (ignored)
 * @returns {number}
 */
X86.fnSETNLE = function(dst, src)
{
    return (this.getZF() || !this.getSF() != !this.getOF()? 0 : 1);
};

/**
 * fnSGDT(dst, src)
 *
 * op=0x0F,0x01,reg=0x0 (GRP7:SGDT)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null)
 * @returns {number}
 */
X86.fnSGDT = function(dst, src)
{
    if (this.regEA === X86.ADDR_INVALID) {
        X86.opInvalid.call(this);
    } else {
        /**
         * We don't need to set the first word of the operand, because the ModRM group decoder that calls us
         * does that automatically with the value we return (dst).
         */
        dst = this.addrGDTLimit - this.addrGDT;
        this.assert(!(dst & ~0xffff));

        let addr = this.addrGDT;
        if (this.model == X86.MODEL_80286) {
            /**
             * We previously left the 6th byte of the target operand "undefined".  But it turns out we have to set
             * it to *something*, because there's processor detection in PC-DOS 7.0 (at least in the SETUP portion)
             * that looks like this:
             *
             *      145E:4B84 9C            PUSHF
             *      145E:4B85 55            PUSH     BP
             *      145E:4B86 8BEC          MOV      BP,SP
             *      145E:4B88 B80000        MOV      AX,0000
             *      145E:4B8B 50            PUSH     AX
             *      145E:4B8C 9D            POPF
             *      145E:4B8D 9C            PUSHF
             *      145E:4B8E 58            POP      AX
             *      145E:4B8F 2500F0        AND      AX,F000
             *      145E:4B92 3D00F0        CMP      AX,F000
             *      145E:4B95 7511          JNZ      4BA8
             *      145E:4BA8 C8060000      ENTER    0006,00
             *      145E:4BAC 0F0146FA      SGDT     [BP-06]
             *      145E:4BB0 807EFFFF      CMP      [BP-01],FF
             *      145E:4BB4 C9            LEAVE
             *      145E:4BB5 BA8603        MOV      DX,0386
             *      145E:4BB8 7503          JNZ      4BBD
             *      145E:4BBA BA8602        MOV      DX,0286
             *      145E:4BBD 89163004      MOV      [0430],DX
             *      145E:4BC1 5D            POP      BP
             *      145E:4BC2 9D            POPF
             *      145E:4BC3 CB            RETF
             *
             * This code is expecting SGDT on an 80286 to set the 6th "undefined" byte to 0xFF, so that's what we do.
             */
            addr |= (0xff000000|0);
        }
        else if (this.model >= X86.MODEL_80386) {
            /**
             * The 80386 added another wrinkle: Intel's documentation claimed that the 6th byte is either set to zero
             * or the high byte of the BASE field, depending on the OPERAND size; from the "INTEL 80386 PROGRAMMER'S
             * REFERENCE MANUAL 1986":
             *
             *      The LIMIT field of the [GDTR or IDTR] register is assigned to the first word at the effective address.
             *      If the operand-size attribute is 32 bits, the next three bytes are assigned the BASE field of the
             *      register, and the fourth byte is written with zero. The last byte is undefined. Otherwise, if the
             *      operand-size attribute is 16 bits, the next 4 bytes are assigned the 32-bit BASE field of the register.
             *
             * However, Intel obviously meant the reverse (ie, that the BASE field is truncated when using a 16-bit
             * OPERAND size, not when using a 32-bit OPERAND size).
             */
            if (this.sizeData == 2) {
                /**
                 * Thanks to Michal Necasek, we now know that the: "386 in reality does not pay attention to the operand
                 * size (despite Intel's claims to the contrary). In fact Windows 3.11/Win32s relies on it -- at least in
                 * some configurations, it will execute SGDT in 16-bit code and will crash if all 6 bytes aren't stored."
                 *
                 * Based on the above information, we no longer mask the 6th byte on the 80386 when the OPERAND size is 2.
                 *
                 *      addr &= 0x00ffffff;
                 */
            } else {
                /**
                 * When the OPERAND size is 4, our ModRM group decoder will call setLong(dst) rather than setShort(dst);
                 * we could fix that by calling setDataSize(2), but it seems safer/simpler to set the high bits (16-31)
                 * of dst to match the low bits (0-15) of addr, so that the caller will harmlessly rewrite what we are
                 * already writing with the setLong() below.
                 */
                dst |= (addr << 16);
            }
        }
        this.setLong(this.regEA + 2, addr);
        this.nStepCycles -= 11;
    }
    return dst;
};

/**
 * fnSHLb(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (1 or CL, or an immediate byte for 80186/80188 and up)
 * @returns {number}
 */
X86.fnSHLb = function(dst, src)
{
    let result = dst;
    let count = src & this.nShiftCountMask;
    if (count) {
        let carry = 0;
        if (count > 8) {
            result = 0;
        } else {
            carry = dst << (count - 1);
            result = (carry << 1) & 0xff;
        }
        this.setLogicResult(result, X86.RESULT.BYTE, carry & X86.RESULT.BYTE, (result ^ carry) & X86.RESULT.BYTE);
    }
    return result;
};

/**
 * fnSHLw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (1 or CL, or an immediate byte for 80186/80188 and up)
 * @returns {number}
 */
X86.fnSHLw = function(dst, src)
{
    let result = dst;
    let count = src & this.nShiftCountMask;
    if (count) {
        let carry = 0;
        if (count > 16) {
            result = 0;
        } else {
            carry = dst << (count - 1);
            result = (carry << 1) & 0xffff;
        }
        this.setLogicResult(result, X86.RESULT.WORD, carry & X86.RESULT.WORD, (result ^ carry) & X86.RESULT.WORD);
    }
    return result;
};

/**
 * fnSHLd(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (1 or CL, or an immediate byte for 80186/80188 and up)
 * @returns {number}
 */
X86.fnSHLd = function(dst, src)
{
    let result = dst;
    let count = src & this.nShiftCountMask;     // this 32-bit-only function could mask with 0x1f directly
    if (count) {
        let carry = dst << (count - 1);
        result = (carry << 1);
        this.setLogicResult(result, X86.RESULT.DWORD, carry & X86.RESULT.DWORD, (result ^ carry) & X86.RESULT.DWORD);
    }
    return result;
};

/**
 * fnSHLDwi(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnSHLDwi = function(dst, src)
{
    return X86.helpSHLDw.call(this, dst, src, this.getIPByte());
};

/**
 * fnSHLDdi(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnSHLDdi = function(dst, src)
{
    return X86.helpSHLDd.call(this, dst, src, this.getIPByte());
};

/**
 * fnSHLDwCL(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnSHLDwCL = function(dst, src)
{
    return X86.helpSHLDw.call(this, dst, src, this.regECX & 0x1f);
};

/**
 * fnSHLDdCL(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnSHLDdCL = function(dst, src)
{
    return X86.helpSHLDd.call(this, dst, src, this.regECX & 0x1f);
};

/**
 * fnSHRb(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (1 or CL, or an immediate byte for 80186/80188 and up)
 * @returns {number}
 */
X86.fnSHRb = function(dst, src)
{
    let count = src & this.nShiftCountMask;
    if (count) {
        let carry = (count > 8? 0 : (dst >>> (count - 1)));
        dst = (carry >>> 1) & 0xff;
        this.setLogicResult(dst, X86.RESULT.BYTE, carry & 0x1, dst & X86.RESULT.BYTE);
    }
    return dst;
};

/**
 * fnSHRw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (1 or CL, or an immediate byte for 80186/80188 and up)
 * @returns {number}
 */
X86.fnSHRw = function(dst, src)
{
    let count = src & this.nShiftCountMask;
    if (count) {
        let carry = (count > 16? 0 : (dst >>> (count - 1)));
        dst = (carry >>> 1) & 0xffff;
        this.setLogicResult(dst, X86.RESULT.WORD, carry & 0x1, dst & X86.RESULT.WORD);
    }
    return dst;
};

/**
 * fnSHRd(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (1 or CL, or an immediate byte for 80186/80188 and up)
 * @returns {number}
 */
X86.fnSHRd = function(dst, src)
{
    let count = src & this.nShiftCountMask;
    if (count) {
        let carry = (dst >>> (count - 1));
        dst = (carry >>> 1);
        this.setLogicResult(dst, X86.RESULT.DWORD, carry & 0x1, dst & X86.RESULT.DWORD);
    }
    return dst;
};

/**
 * fnSHRDwi(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnSHRDwi = function(dst, src)
{
    return X86.helpSHRDw.call(this, dst, src, this.getIPByte());
};

/**
 * fnSHRDdi(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnSHRDdi = function(dst, src)
{
    return X86.helpSHRDd.call(this, dst, src, this.getIPByte());
};

/**
 * fnSHRDwCL(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnSHRDwCL = function(dst, src)
{
    return X86.helpSHRDw.call(this, dst, src, this.regECX & 0x1f);
};

/**
 * fnSHRDdCL(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnSHRDdCL = function(dst, src)
{
    return X86.helpSHRDd.call(this, dst, src, this.regECX & 0x1f);
};

/**
 * fnSIDT(dst, src)
 *
 * op=0x0F,0x01,reg=0x1 (GRP7:SIDT)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null)
 * @returns {number}
 */
X86.fnSIDT = function(dst, src)
{
    if (this.regEA === X86.ADDR_INVALID) {
        X86.opInvalid.call(this);
    } else {
        /**
         * We don't need to set the first word of the operand, because the ModRM group decoder that calls us
         * does that automatically with the value we return (dst).
         */
        dst = this.addrIDTLimit - this.addrIDT;
        this.assert(!(dst & ~0xffff));
        /**
         * As with SGDT, the 6th byte is technically "undefined" on an 80286, but we now set it to 0xFF, for the
         * same reasons discussed in SGDT (above).
         */
        let addr = this.addrIDT;
        if (this.model == X86.MODEL_80286) {
            addr |= (0xff000000|0);
        }
        else if (this.model >= X86.MODEL_80386) {
            if (this.sizeData == 2) {
                /**
                 * Based on the SGDT information above, we no longer mask the 6th byte when the OPERAND size is 2.
                 *
                 *      addr &= 0x00ffffff;
                 */
            } else {
                dst |= (addr << 16);
            }
        }
        this.setLong(this.regEA + 2, addr);
        this.nStepCycles -= 12;
    }
    return dst;
};

/**
 * fnSLDT(dst, src)
 *
 * op=0x0F,0x00,reg=0x0 (GRP6:SLDT)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null)
 * @returns {number}
 */
X86.fnSLDT = function(dst, src)
{
    this.nStepCycles -= (2 + (this.regEA === X86.ADDR_INVALID? 0 : 1));
    return this.segLDT.sel;
};

/**
 * fnSMSW(dst, src)
 *
 * TODO: I've seen a claim that SMSW can be used with an operand size override to obtain the entire CR0.
 * I don't dispute that, so I allow it (ie, if an override is present, then maskData will be 0xffffffff),
 * but it should still be confirmed on real hardware at some point.  Note that this differs from LMSW,
 * which is REQUIRED to mask the source operand.
 *
 * op=0x0F,0x01,reg=0x4 (GRP7:SMSW)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null)
 * @returns {number}
 */
X86.fnSMSW = function(dst, src)
{
    this.nStepCycles -= (2 + (this.regEA === X86.ADDR_INVALID? 0 : 1));
    return this.regCR0 & this.maskData;
};

/**
 * fnSTR(dst, src)
 *
 * op=0x0F,0x00,reg=0x1 (GRP6:STR)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null)
 * @returns {number}
 */
X86.fnSTR = function(dst, src)
{
    this.nStepCycles -= (2 + (this.regEA === X86.ADDR_INVALID? 0 : 1));
    return this.segTSS.sel;
};

/**
 * fnSUBb(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnSUBb = function(dst, src)
{
    let b = (dst - src)|0;
    this.setArithResult(dst, src, b, X86.RESULT.BYTE | X86.RESULT.ALL, true);
    this.nStepCycles -= (this.regEAWrite === X86.ADDR_INVALID? (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesArithRR : this.cycleCounts.nOpCyclesArithRM) : this.cycleCounts.nOpCyclesArithMR);
    return b & 0xff;
};

/**
 * fnSUBw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnSUBw = function(dst, src)
{
    let w = (dst - src)|0;
    this.setArithResult(dst, src, w, this.typeData | X86.RESULT.ALL, true);
    this.nStepCycles -= (this.regEAWrite === X86.ADDR_INVALID? (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesArithRR : this.cycleCounts.nOpCyclesArithRM) : this.cycleCounts.nOpCyclesArithMR);
    return w & this.maskData;
};

/**
 * fnTESTib(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null; we have to supply the source ourselves)
 * @returns {number}
 */
X86.fnTESTib = function(dst, src)
{
    src = this.getIPByte();
    this.setLogicResult(dst & src, X86.RESULT.BYTE);
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesTestRI : this.cycleCounts.nOpCyclesTestMI);
    this.opFlags |= X86.OPFLAG.NOWRITE;
    return dst;
};

/**
 * fnTESTiw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null; we have to supply the source ourselves)
 * @returns {number}
 */
X86.fnTESTiw = function(dst, src)
{
    src = this.getIPWord();
    this.setLogicResult(dst & src, this.typeData);
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesTestRI : this.cycleCounts.nOpCyclesTestMI);
    this.opFlags |= X86.OPFLAG.NOWRITE;
    return dst;
};

/**
 * fnTESTb(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnTESTb = function(dst, src)
{
    this.setLogicResult(dst & src, X86.RESULT.BYTE);
    this.nStepCycles -= (this.regEAWrite === X86.ADDR_INVALID? (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesTestRR : this.cycleCounts.nOpCyclesTestRM) : this.cycleCounts.nOpCyclesTestRM);
    this.opFlags |= X86.OPFLAG.NOWRITE;
    return dst;
};

/**
 * fnTESTw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnTESTw = function(dst, src)
{
    this.setLogicResult(dst & src, this.typeData);
    this.nStepCycles -= (this.regEAWrite === X86.ADDR_INVALID? (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesTestRR : this.cycleCounts.nOpCyclesTestRM) : this.cycleCounts.nOpCyclesTestRM);
    this.opFlags |= X86.OPFLAG.NOWRITE;
    return dst;
};

/**
 * fnVERR(dst, src)
 *
 * op=0x0F,0x00,reg=0x4 (GRP6:VERR)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null)
 * @returns {number}
 */
X86.fnVERR = function(dst, src)
{
    this.opFlags |= X86.OPFLAG.NOWRITE;
    /**
     * Currently, segVER.load() will return an error only if the selector is beyond the bounds of the
     * descriptor table or the descriptor is not for a segment.
     */
    this.nStepCycles -= (14 + (this.regEA === X86.ADDR_INVALID? 0 : 2));
    if (this.segVER.load(dst) !== X86.ADDR_INVALID) {
        /**
         * Verify that this is a readable segment; that is, of these four combinations (code+readable,
         * code+nonreadable, data+writable, date+nonwritable), make sure we're not the second combination.
         */
        if ((this.segVER.acc & (X86.DESC.ACC.TYPE.READABLE | X86.DESC.ACC.TYPE.CODE)) != X86.DESC.ACC.TYPE.CODE) {
            /**
             * For VERR, if the code segment is readable and conforming, the descriptor privilege level
             * (DPL) can be any value.
             *
             * Otherwise, DPL must be greater than or equal to (have less or the same privilege as) both the
             * current privilege level and the selector's RPL.
             */
            if (this.segVER.dpl >= this.nCPL && this.segVER.dpl >= (dst & X86.SEL.RPL) ||
                (this.segVER.acc & X86.DESC.ACC.TYPE.CODE_CONFORMING) == X86.DESC.ACC.TYPE.CODE_CONFORMING) {
                this.setZF();
                return dst;
            }
        }
    }
    this.clearZF();
    if (DEBUG && (this.sizeData > 2 || this.sizeAddr > 2)) this.stopCPU();
    return dst;
};

/**
 * fnVERW(dst, src)
 *
 * op=0x0F,0x00,reg=0x5 (GRP6:VERW)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src (null)
 * @returns {number}
 */
X86.fnVERW = function(dst, src)
{
    this.opFlags |= X86.OPFLAG.NOWRITE;
    /**
     * Currently, segVER.load() will return an error only if the selector is beyond the bounds of the
     * descriptor table or the descriptor is not for a segment.
     */
    this.nStepCycles -= (14 + (this.regEA === X86.ADDR_INVALID? 0 : 2));
    if (this.segVER.load(dst) !== X86.ADDR_INVALID) {
        /**
         * Verify that this is a writable data segment
         */
        if ((this.segVER.acc & (X86.DESC.ACC.TYPE.WRITABLE | X86.DESC.ACC.TYPE.CODE)) == X86.DESC.ACC.TYPE.WRITABLE) {
            /**
             * DPL must be greater than or equal to (have less or the same privilege as) both the current
             * privilege level and the selector's RPL.
             */
            if (this.segVER.dpl >= this.nCPL && this.segVER.dpl >= (dst & X86.SEL.RPL)) {
                this.setZF();
                return dst;
            }
        }
    }
    this.clearZF();
    if (DEBUG && (this.sizeData > 2 || this.sizeAddr > 2)) this.stopCPU();
    return dst;
};

/**
 * fnIBTS(dst, src)
 *
 * As best I can determine, this function copies the specified bits from src (starting at bit 0 for CL
 * bits) to dst (starting at bit offset in AX).  For register operands, that's simple enough.
 *
 * TODO: If dst refers to a memory location, then the bit index may refer to higher memory locations, just
 * like the BT/BTC/BTR/BTS instructions.  For an instruction that no one was really able to use, except
 * as a CPU stepping discriminator, that doesn't seem worth the effort.
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnIBTS = function(dst, src)
{
    let shift = (this.regEAX & this.maskData);
    let mask = ((1 << (this.regECX & 0x1f)) - 1);
    return (dst & ~(mask << shift)) | ((src & mask) << shift);
};

/**
 * fnXBTS(dst, src)
 *
 * As best I can determine, this function copies the specified bits from src (starting at the bit offset
 * in AX, for the bit length in CL) to dst (starting at bit 0).  For register operands, that's simple enough.
 *
 * TODO: If src refers to a memory location, then the bit index may refer to higher memory locations, just
 * like the BT/BTC/BTR/BTS instructions.  For an instruction that no one was really able to use, except
 * as a CPU stepping discriminator, that doesn't seem worth the effort.
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnXBTS = function(dst, src)
{
    /**
     * Shift src right by the bit offset in [E]AX, then apply a mask equal to the number of bits in CL,
     * then mask the resulting bit string with the current OPERAND size.
     */
    return ((src >> (this.regEAX & this.maskData)) & ((1 << (this.regECX & 0x1f)) - 1)) & this.maskData;
};

/**
 * fnXCHGrb(dst, src)
 *
 * If an instruction like "XCHG AL,AH" was a traditional "op dst,src" instruction, dst would contain AL,
 * src would contain AH, and we would return src, which the caller would then store in AL, and we'd be done.
 *
 * However, that's only half of what XCHG does, so THIS function must perform the other half; in the previous
 * example, that means storing the original AL (dst) into AH (src).
 *
 * BACKTRACK support is incomplete without also passing bti values as parameters, because the caller will
 * store btiAH in btiAL, but the original btiAL will be lost.  Similarly, if src is a memory operand, the
 * caller will store btiEALo in btiAL, but again, the original btiAL will be lost.
 *
 * BACKTRACK support for memory operands could be fixed by decoding the dst register in order to determine the
 * corresponding bti and then temporarily storing it in btiEALo around the setEAByte() call below.  Register-only
 * XCHGs would require a more extensive hack.  For now, I'm going to live with one-way BACKTRACK support here.
 *
 * TODO: Implement full BACKTRACK support for XCHG instructions.
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnXCHGrb = function(dst, src)
{
    if (this.regEA === X86.ADDR_INVALID) {
        /**
         * Decode which register was src
         */
        this.assert(!(dst & ~0xff));            // confirm that dst contains only 8 bits
        switch (this.bModRM & 0x7) {
        case 0x0:       // AL
            this.regEAX = (this.regEAX & ~0xff) | dst;
            break;
        case 0x1:       // CL
            this.regECX = (this.regECX & ~0xff) | dst;
            break;
        case 0x2:       // DL
            this.regEDX = (this.regEDX & ~0xff) | dst;
            break;
        case 0x3:       // BL
            this.regEBX = (this.regEBX & ~0xff) | dst;
            break;
        case 0x4:       // AH
            this.regEAX = (this.regEAX & ~0xff00) | (dst << 8);
            break;
        case 0x5:       // CH
            this.regECX = (this.regECX & ~0xff00) | (dst << 8);
            break;
        case 0x6:       // DH
            this.regEDX = (this.regEDX & ~0xff00) | (dst << 8);
            break;
        case 0x7:       // BH
            this.regEBX = (this.regEBX & ~0xff00) | (dst << 8);
            break;
        default:
            break;      // there IS no other case, but JavaScript inspections don't know that
        }
        this.nStepCycles -= this.cycleCounts.nOpCyclesXchgRR;
    } else {
        /**
         * This is a case where the ModRM decoder that's calling us didn't know it should have set regEAWrite,
         * so we compensate by updating regEAWrite.  However, setEAWord() has since been changed to revalidate
         * the write using segEA:offEA, so updating regEAWrite here isn't strictly necessary.
         */
        this.regEAWrite = this.regEA;
        this.setEAByte(dst);
        this.nStepCycles -= this.cycleCounts.nOpCyclesXchgRM;
    }
    return src;
};

/**
 * fnXCHGrw(dst, src)
 *
 * If an instruction like "XCHG AX,DX" was a traditional "op dst,src" instruction, dst would contain AX,
 * src would contain DX, and we would return src, which the caller would then store in AX, and we'd be done.
 *
 * However, that's only half of what XCHG does, so THIS function must perform the other half; in the previous
 * example, that means storing the original AX (dst) into DX (src).
 *
 * TODO: Implement full BACKTRACK support for XCHG instructions (see fnXCHGrb comments).
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnXCHGrw = function(dst, src)
{
    if (this.regEA === X86.ADDR_INVALID) {
        /**
         * Decode which register was src
         */
        this.assert(!(dst & ~this.maskData));   // confirm that dst contains only 16 or 32 bits
        switch (this.bModRM & 0x7) {
        case 0x0:       // [E]AX
            this.regEAX = (this.regEAX & ~this.maskData) | dst;
            break;
        case 0x1:       // [E]CX
            this.regECX = (this.regECX & ~this.maskData) | dst;
            break;
        case 0x2:       // [E]DX
            this.regEDX = (this.regEDX & ~this.maskData) | dst;
            break;
        case 0x3:       // [E]BX
            this.regEBX = (this.regEBX & ~this.maskData) | dst;
            break;
        case 0x4:       // [E]SP
            this.setSP((this.getSP() & ~this.maskData) | dst);
            break;
        case 0x5:       // [E]BP
            this.regEBP = (this.regEBX & ~this.maskData) | dst;
            break;
        case 0x6:       // [E]SI
            this.regESI = (this.regESI & ~this.maskData) | dst;
            break;
        case 0x7:       // [E]DI
            this.regEDI = (this.regEDI & ~this.maskData) | dst;
            break;
        default:
            break;      // there IS no other case, but JavaScript inspections don't know that
        }
        this.nStepCycles -= this.cycleCounts.nOpCyclesXchgRR;
    } else {
        /**
         * This is a case where the ModRM decoder that's calling us didn't know it should have set regEAWrite,
         * so we compensate by updating regEAWrite.  However, setEAWord() has since been changed to revalidate
         * the write using segEA:offEA, so updating regEAWrite here isn't strictly necessary.
         */
        this.regEAWrite = this.regEA;
        this.setEAWord(dst);
        this.nStepCycles -= this.cycleCounts.nOpCyclesXchgRM;
    }
    return src;
};

/**
 * fnXORb(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnXORb = function(dst, src)
{
    let b = dst ^ src;
    this.setLogicResult(b, X86.RESULT.BYTE);
    this.nStepCycles -= (this.regEAWrite === X86.ADDR_INVALID? (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesArithRR : this.cycleCounts.nOpCyclesArithRM) : this.cycleCounts.nOpCyclesArithMR);
    return b;
};

/**
 * fnXORw(dst, src)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @returns {number}
 */
X86.fnXORw = function(dst, src)
{
    this.nStepCycles -= (this.regEAWrite === X86.ADDR_INVALID? (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesArithRR : this.cycleCounts.nOpCyclesArithRM) : this.cycleCounts.nOpCyclesArithMR);
    return this.setLogicResult(dst ^ src, this.typeData) & this.maskData;
};
