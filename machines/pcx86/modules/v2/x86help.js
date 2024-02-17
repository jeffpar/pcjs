/**
 * @fileoverview Implements PCx86 opcode helpers
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import MESSAGE from "./message.js";
import X86 from "./x86.js";
import StrLib from "../../../modules/v2/strlib.js";
import { COMPILED, DEBUGGER, I386 } from "./defines.js";

/**
 * helpAdd64(r64Dst, r64Src)
 *
 * Adds r64Src to r64Dst.
 *
 * @param {Array.<number>} r64Dst is a 64-bit value
 * @param {Array.<number>} r64Src is a 64-bit value
 */
X86.helpAdd64 = function(r64Dst, r64Src)
{
    r64Dst[0] += r64Src[0];
    r64Dst[1] += r64Src[1];
    if (r64Dst[0] > 0xffffffff) {
        r64Dst[0] >>>= 0;       // truncate r64Dst[0] to 32 bits AND keep it unsigned
        r64Dst[1]++;
    }
};

/**
 * helpCmp64(r64Dst, r64Src)
 *
 * Compares r64Dst to r64Src, by computing r64Dst - r64Src.
 *
 * @param {Array.<number>} r64Dst is a 64-bit value
 * @param {Array.<number>} r64Src is a 64-bit value
 * @returns {number} > 0 if r64Dst > r64Src, == 0 if r64Dst == r64Src, < 0 if r64Dst < r64Src
 */
X86.helpCmp64 = function(r64Dst, r64Src)
{
    let result = r64Dst[1] - r64Src[1];
    if (!result) result = r64Dst[0] - r64Src[0];
    return result;
};

/**
 * helpSet64(r64Dst, lo, hi)
 *
 * @param {Array.<number>} r64Dst
 * @param {number} lo
 * @param {number} hi
 * @returns {Array.<number>}
 */
X86.helpSet64 = function(r64Dst, lo, hi)
{
    r64Dst[0] = lo >>> 0;
    r64Dst[1] = hi >>> 0;
    return r64Dst;
};

/**
 * helpShr64(r64Dst)
 *
 * Shifts r64Dst right one bit.
 *
 * @param {Array.<number>} r64Dst is a 64-bit value
 */
X86.helpShr64 = function(r64Dst)
{
    r64Dst[0] >>>= 1;
    if (r64Dst[1] & 0x1) {
        r64Dst[0] = (r64Dst[0] | 0x80000000) >>> 0;
    }
    r64Dst[1] >>>= 1;
};

/**
 * helpSub64(r64Dst, r64Src)
 *
 * Subtracts r64Src from r64Dst.
 *
 * @param {Array.<number>} r64Dst is a 64-bit value
 * @param {Array.<number>} r64Src is a 64-bit value
 */
X86.helpSub64 = function(r64Dst, r64Src)
{
    r64Dst[0] -= r64Src[0];
    r64Dst[1] -= r64Src[1];
    if (r64Dst[0] < 0) {
        r64Dst[0] >>>= 0;       // truncate r64Dst[0] to 32 bits AND keep it unsigned
        r64Dst[1]--;
    }
};

/**
 * helpDECreg(w)
 *
 * @this {CPUx86}
 * @param {number} w
 * @returns {number}
 */
X86.helpDECreg = function(w)
{
    let result = (w - 1)|0;
    this.setArithResult(w, 1, result, this.typeData | X86.RESULT.NOTCF, true);
    this.nStepCycles -= 2;                          // the register form of DEC takes 2 cycles on all CPUs
    return (w & ~this.maskData) | (result & this.maskData);
};

/**
 * helpDIV32(dstLo, dstHi, src)
 *
 * This sets regMDLo to dstHi:dstLo / src, and regMDHi to dstHi:dstLo % src; all inputs are treated as unsigned.
 *
 * Refer to: http://lxr.linux.no/linux+v2.6.22/lib/div64.c
 *
 * @this {CPUx86}
 * @param {number} dstLo (low 32-bit portion of dividend)
 * @param {number} dstHi (high 32-bit portion of dividend)
 * @param {number} src (32-bit divisor)
 * @returns {boolean} true if successful, false if overflow (ie, the divisor was either zero or too small)
 */
X86.helpDIV32 = function(dstLo, dstHi, src)
{
    src >>>= 0;

    if (!src || src <= (dstHi >>> 0)) {
        return false;
    }

    let result = 0, bit = 1;

    let r64Div = X86.helpSet64(this.r64Div, src, 0);
    let r64Rem = X86.helpSet64(this.r64Rem, dstLo, dstHi);

    while (X86.helpCmp64(r64Rem, r64Div) > 0) {
        X86.helpAdd64(r64Div, r64Div);
        bit += bit;
    }
    do {
        if (X86.helpCmp64(r64Rem, r64Div) >= 0) {
            X86.helpSub64(r64Rem, r64Div);
            result += bit;
        }
        X86.helpShr64(r64Div);
        bit /= 2;
    } while (bit >= 1);

    this.assert(result <= 0xffffffff && !r64Rem[1]);

    this.regMDLo = result;      // result is the quotient, which callers expect in the low MD register
    this.regMDHi = r64Rem[0];   // r64Rem[0] is the remainder, which callers expect in the high MD register
    return true;
};

/**
 * helpIDIV32(dstLo, dstHi, src)
 *
 * This sets regMDLo to dstHi:dstLo / src, and regMDHi to dstHi:dstLo % src; all inputs are treated as signed.
 *
 * Refer to: http://lxr.linux.no/linux+v2.6.22/lib/div64.c
 *
 * @this {CPUx86}
 * @param {number} dstLo (low 32-bit portion of dividend)
 * @param {number} dstHi (high 32-bit portion of dividend)
 * @param {number} src (32-bit divisor)
 * @returns {boolean} true if successful, false if overflow (ie, the divisor was either zero or too small)
 */
X86.helpIDIV32 = function(dstLo, dstHi, src)
{
    let bNegLo = 0, bNegHi = 0;
    /**
     *      dividend    divisor       quotient    remainder
     *        (dst)      (src)          (lo)         (hi)
     *      --------    -------       --------    ---------
     *         +           +     ->       +           +
     *         +           -     ->       -           +
     *         -           +     ->       -           -
     *         -           -     ->       +           -
     */
    if (src < 0) {
        src = -src|0;
        bNegLo = 1 - bNegLo;
    }
    if (dstHi < 0) {
        dstLo = -dstLo|0;
        dstHi = (~dstHi + (dstLo? 0 : 1))|0;
        bNegHi = 1;
        bNegLo = 1 - bNegLo;
    }
    if (!X86.helpDIV32.call(this, dstLo, dstHi, src) || this.regMDLo > 0x7fffffff+bNegLo || this.regMDHi > 0x7fffffff+bNegHi) {
        return false;
    }
    if (bNegLo) this.regMDLo = -this.regMDLo;
    if (bNegHi) this.regMDHi = -this.regMDHi;
    return true;
};

/**
 * helpINCreg(w)
 *
 * @this {CPUx86}
 * @param {number} w
 * @returns {number}
 */
X86.helpINCreg = function(w)
{
    let result = (w + 1)|0;
    this.setArithResult(w, 1, result, this.typeData | X86.RESULT.NOTCF);
    this.nStepCycles -= 2;                          // the register form of INC takes 2 cycles on all CPUs
    return (w & ~this.maskData) | (result & this.maskData);
};

/**
 * helpLoadCR0(l)
 *
 * This is called by an 80386 control instruction (ie, MOV CR0,reg).
 *
 * @this {CPUx86}
 * @param {number} l
 */
X86.helpLoadCR0 = function(l)
{
    this.regCR0 = l | X86.CR0.ON;
    this.setProtMode();
    if (this.regCR0 & X86.CR0.PG) {
        /**
         * TODO: Determine if setting X86.CR0.PG when already set should really act as a flush;
         * I'm not currently worried about it, because I'm assuming CR0 is not rewritten that often.
         */
        this.enablePageBlocks();
    } else {
        this.disablePageBlocks();
    }
};

/**
 * helpLoadCR3(l)
 *
 * This is called by an 80386 control instruction (ie, MOV CR3,reg) or an 80386 task switch.
 *
 * @this {CPUx86}
 * @param {number} l
 */
X86.helpLoadCR3 = function(l)
{
    this.regCR3 = l;
    /**
     * Normal use of regCR3 involves adding a 0-4K (12-bit) offset to obtain a page directory entry,
     * so let's ensure that the low 12 bits of regCR3 are always zero.
     */
    this.assert(!(this.regCR3 & X86.LADDR.OFFSET));
    this.flushPageBlocks();
};

/**
 * helpSETcc()
 *
 * @this {CPUx86}
 * @param {function(number,number)} fnSet
 */
X86.helpSETcc = function(fnSet)
{
    this.opFlags |= X86.OPFLAG.NOREAD;
    this.decodeModMemByte.call(this, fnSet);
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? 4 : 5);
};

/**
 * helpSHLDw(dst, src, count)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @param {number} count (0-31)
 * @returns {number}
 */
X86.helpSHLDw = function(dst, src, count)
{
    if (count) {
        if (count > 16) {
            dst = src;
            count -= 16;
        }
        let carry = dst << (count - 1);
        dst = ((carry << 1) | (src >>> (16 - count))) & 0xffff;
        this.setLogicResult(dst, X86.RESULT.WORD, carry & X86.RESULT.WORD);
    }
    return dst;
};

/**
 * helpSHLDd(dst, src, count)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @param {number} count
 * @returns {number}
 */
X86.helpSHLDd = function(dst, src, count)
{
    if (count) {
        let carry = dst << (count - 1);
        dst = (carry << 1) | (src >>> (32 - count));
        this.setLogicResult(dst, X86.RESULT.DWORD, carry & X86.RESULT.DWORD);
    }
    return dst;
};

/**
 * helpSHRDw(dst, src, count)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @param {number} count (0-31)
 * @returns {number}
 */
X86.helpSHRDw = function(dst, src, count)
{
    if (count) {
        if (count > 16) {
            dst = src;
            count -= 16;
        }
        let carry = dst >>> (count - 1);
        dst = ((carry >>> 1) | (src << (16 - count))) & 0xffff;
        this.setLogicResult(dst, X86.RESULT.WORD, carry & 0x1);
    }
    return dst;
};

/**
 * helpSHRDd(dst, src, count)
 *
 * @this {CPUx86}
 * @param {number} dst
 * @param {number} src
 * @param {number} count
 * @returns {number}
 */
X86.helpSHRDd = function(dst, src, count)
{
    if (count) {
        let carry = dst >>> (count - 1);
        dst = (carry >>> 1) | (src << (32 - count));
        this.setLogicResult(dst, X86.RESULT.DWORD, carry & 0x1);
    }
    return dst;
};

/**
 * helpSRC1()
 *
 * @this {CPUx86}
 * @returns {number}
 */
X86.helpSRC1 = function()
{
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? 2 : this.cycleCounts.nOpCyclesShift1M);
    return 1;
};

/**
 * helpSRCCL()
 *
 * @this {CPUx86}
 * @returns {number}
 */
X86.helpSRCCL = function()
{
    let count = this.regECX & 0xff;
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesShiftCR : this.cycleCounts.nOpCyclesShiftCM) + (count << this.cycleCounts.nOpCyclesShiftCS);
    return count;
};

/**
 * helpSRCByte()
 *
 * @this {CPUx86}
 * @returns {number}
 */
X86.helpSRCByte = function()
{
    let count = this.getIPByte();
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? this.cycleCounts.nOpCyclesShiftCR : this.cycleCounts.nOpCyclesShiftCM) + (count << this.cycleCounts.nOpCyclesShiftCS);
    return count;
};

/**
 * helpSRCNone()
 *
 * @this {CPUx86}
 * @returns {number|null}
 */
X86.helpSRCNone = function()
{
    return null;
};

/**
 * helpSRCxx()
 *
 * This is used by opPOPmw(), because the actual pop must occur BEFORE the effective address (EA)
 * calculation.  So opPOPmw() does the pop, saves the popped value in regXX, and this passes src function
 * to the EA worker.
 *
 * @this {CPUx86}
 * @returns {number} regXX
 */
X86.helpSRCxx = function()
{
    return this.regXX;
};

/**
 * helpCALLF(off, sel)
 *
 * For protected-mode, this function must attempt to load the new code segment first, because if the new segment
 * requires a change in privilege level, the return address must be pushed on the NEW stack, not the current stack.
 *
 * Also, we rely on a new function, pushData(), instead of pushWord(), to accommodate the outgoing segment size,
 * which may differ from the incoming segment.  For example, when a 32-bit code segment performs a 16:32 call to a
 * 16-bit code segment, we must push 32-bit segment and offset values.
 *
 * TODO: Since setCSIP() already informs the segCS load() function when it's making a call, the load() function
 * could automatically push the old CS and IP values *before* segCS is updated -- which would be a better time to do
 * those pushes AND eliminate the need for pushData().  Unfortunately, load() is also used by loadIDT(), and loadIDT()
 * has different requirements (eg, pushing flags first), so it's not a trivial change.
 *
 * @this {CPUx86}
 * @param {number} off
 * @param {number} sel
 */
X86.helpCALLF = function(off, sel)
{
    /**
     * Since we always push the return address AFTER calling setCSIP(), and since either push could trigger
     * a fault (eg, segment fault, page fault, etc), we must not only snapshot regSS and regLSP, but also regCS,
     * so that helpFault() can always make CALLF restartable.
     */
    this.opCS = this.getCS();
    this.opSS = this.getSS();
    this.opLSP = this.regLSP;
    let oldIP = this.getIP();
    let oldSize = (I386? this.sizeData : 2);
    if (this.setCSIP(off, sel, true) != null) {
        /**
         * When the OPERAND size is 32 bits, the 80386 will decrement the stack pointer by 4, write the selector
         * into the 2 lower bytes, and leave the 2 upper bytes untouched; at least, that's the case for all other
         * segment register writes, so we assume this case is no different.  Hence, the hard-coded size of 2.
         */
        this.pushData(this.opCS, oldSize, 2);
        this.pushData(oldIP, oldSize, oldSize);
    }
    this.opLSP = X86.ADDR_INVALID;
    this.opCS = this.opSS = -1;
};

/**
 * helpINT(nIDT, nError, nBytes, nCycles)
 *
 * NOTE: We no longer use setCSIP(), because it always loads the new CS using segCS.load(), which only knows
 * how to load GDT and LDT descriptors, whereas interrupts must use setCS.loadIDT(), which deals exclusively
 * with IDT descriptors.
 *
 * @this {CPUx86}
 * @param {number} nIDT
 * @param {number|null} [nError]
 * @param {number} [nBytes] (size of opcode, if any)
 * @param {number} [nCycles] (in addition to the default of nOpCyclesInt)
 */
X86.helpINT = function(nIDT, nError, nBytes = 0, nCycles = 0)
{
    /**
     * TODO: We assess the cycle cost up front, because otherwise, if loadIDT() fails, no cost may be assessed.
     */
    this.nStepCycles -= this.cycleCounts.nOpCyclesInt + nCycles;
    let oldPS = this.getPS();
    let oldCS = this.getCS();
    let oldIP = this.getIP();
    /**
     * Support for INT 06h operation checks.  The only operation we consume is the one reserved for breakpoints,
     * and only if our debugger is running.  All these should only occur in DEBUG builds of the underlying operating
     * system (ie, BASIC-DOS), which should clean up after itself.  See https://github.com/jeffpar/basicdos.
     */
    if (nIDT == 0x06 && this.model <= X86.MODEL_8088) {
        let op = this.getSOWord(this.segCS, oldIP-2);
        if (op == 0x06CD) {
            let actual;
            let argA = this.getSOWord(this.segSS, this.regEBP+10) | (this.getSOWord(this.segSS, this.regEBP+12) << 16);
            let argB = this.getSOWord(this.segSS, this.regEBP+6) | (this.getSOWord(this.segSS, this.regEBP+8) << 16);
            let result = this.regEAX | (this.regEDX << 16);
            let remainder = this.regEDI | (this.regESI << 16);
            switch(this.peekIPByte()) {
            case 0xCC:
                if (DEBUGGER && this.dbg && this.flags.running) {
                    this.getIPByte();
                    this.printf("debugger halting on INT 0x06,0xCC\n");
                    this.dbg.stopCPU();
                    return;
                }
                break;
            case 0xFB:
                actual = (argA * argB)|0;
                if (result != actual) {
                    if (!COMPILED) this.printf(MESSAGE.INT, "result %#x for %#x * %#x does not match actual: %#x\n", result, argA, argB, actual);
                }
                break;
            case 0xFC:
                actual = (argA / argB)|0;
                if (result != actual) {
                    if (!COMPILED) this.printf(MESSAGE.INT, "result %#x for %#x / %#x does not match actual: %#x\n", result, argA, argB, actual);
                }
                actual = (argA % argB)|0;
                if (remainder != actual) {
                    if (!COMPILED) this.printf(MESSAGE.INT, "result %#x for %#x % %#x does not match actual: %#x\n", result, argA, argB, actual);
                }
                break;
            }
        }
    }
    if (nIDT == 0x13 && this.model <= X86.MODEL_8088) {
        if (DEBUGGER && this.dbg && this.regEAX == 0x0201 && this.regEBX == 0x7C00 && this.segES.sel == 0) {
            this.setShort(0x52D, 0x4442);       // on 8088 boot up, set a special "BD" boot indicator in low memory
        }
    }
    let addr = this.segCS.loadIDT(nIDT, nBytes);
    if (addr !== X86.ADDR_INVALID) {
        /**
         * TODO: Determine if we should use pushData() instead of pushWord() for oldCS and nError, to deal with
         * the same 32-bit 80386 compatibility issue that helpCALLF(), opPUSHCS(), et al must deal with; namely, that
         * 32-bit segment register writes (and, reportedly, 32-bit error codes) don't modify the upper 16 bits.
         *
         * Also, note that helpCALLF() is using the OPERAND size in effect *before* CS is loaded, whereas here we're
         * using the OPERAND size in effect *after* CS is loaded.  Is that correct?  And does an explicit OPERAND
         * size override on an "INT" instruction have any effect on that behavior?  Is that even allowed?
         */
        this.pushWord(oldPS);
        this.pushWord(oldCS);
        this.pushWord(oldIP);
        if (nError != null) this.pushWord(nError);
        this.nFault = -1;
        this.setLIP(addr);
    }
};

/**
 * helpIRET()
 *
 * @this {CPUx86}
 */
X86.helpIRET = function()
{
    this.opSS = this.getSS();
    this.opLSP = this.regLSP;

    this.nStepCycles -= this.cycleCounts.nOpCyclesIRet;

    if ((this.regCR0 & X86.CR0.MSW.PE) && (this.regPS & (X86.PS.NT | X86.PS.VM)) == X86.PS.NT) {
        let addrNew = this.segTSS.base;
        /**
         * Fortunately, X86.TSS286.PREV_TSS and X86.TSS386.PREV_TSS refer to the same TSS offset.
         * TODO: Update switchTS() to assess a cycle cost; currently, all we assess is what's shown above.
         */
        let sel = this.getShort(addrNew + X86.TSS286.PREV_TSS);
        this.segCS.switchTSS(sel, false);
    }
    else {
        let cpl = this.nCPL;
        let newIP = this.popWord();
        let newCS = this.popWord();
        let newPS = this.popWord();

        if (I386) {
            if (this.regPS & X86.PS.VM) {
                /**
                 * On the 80386, in V86-mode, RF is the only defined EFLAGS bit above bit 15 that may be changed by IRETD.
                 * This is less restrictive than POPFD, which cannot change ANY bits above bit 15; see opPOPF() for details.
                 */
                newPS = (newPS & (0xffff | X86.PS.RF)) | (this.regPS & ~(0xffff | X86.PS.RF));
            }
            else {
                if (newPS & X86.PS.VM) {
                    /**
                     * As noted in loadDesc8(), where the V86-mode frame we're about to pop was originally pushed,
                     * these frames ALWAYS contain 32-bit values, so make sure that sizeData reflects that.
                     */
                    this.assert(!!(this.regCR0 & X86.CR0.MSW.PE) && this.sizeData == 4);
                    /**
                     * We have to assume that a full V86-mode interrupt frame was on the protected-mode stack; namely:
                     *
                     *      low:    EIP
                     *              CS (padded to 32 bits)
                     *              EFLAGS
                     *              ESP
                     *              SS (padded to 32 bits)
                     *              ES (padded to 32 bits)
                     *              DS (padded to 32 bits)
                     *              FS (padded to 32 bits)
                     *      high:   GS (padded to 32 bits)
                     *
                     * We've already popped EIP, CS, and EFLAGS into newIP, newCS and newPS, respectively, so we must now
                     * pop the rest, while we're still in protected-mode, before the switch to V86-mode alters the current
                     * operand size (among other things).
                     */
                    let newSP = this.popWord();
                    let newSS = this.popWord();
                    let newES = this.popWord();
                    let newDS = this.popWord();
                    let newFS = this.popWord();
                    let newGS = this.popWord();
                    this.setProtMode(true, true);       // flip the switch to V86-mode now
                    this.setSS(newSS);
                    this.setSP(newSP);
                    this.setES(newES);
                    this.setDS(newDS);
                    this.setFS(newFS);
                    this.setGS(newGS);
                }
            }
        }

        if (this.setCSIP(newIP, newCS, false) != null) {
            this.setPS(newPS, cpl);
            if (this.cIntReturn) this.checkIntReturn(this.regLIP);
        }
    }

    this.opLSP = X86.ADDR_INVALID;
    this.opSS = -1;
};

/**
 * helpRETF(n)
 *
 * For protected-mode, this function must pop any arguments off the current stack AND whatever stack
 * we may have switched to; setCSIP() returns true if a stack switch occurred, false if not, and null
 * if an error occurred.
 *
 * @this {CPUx86}
 * @param {number} n
 */
X86.helpRETF = function(n)
{
    this.opSS = this.getSS();
    this.opLSP = this.regLSP;

    let newIP = this.popWord();
    let newCS = this.popWord();

    if (n) this.setSP(this.getSP() + n);            // TODO: optimize

    if (this.setCSIP(newIP, newCS, false)) {        // returns true if a stack switch occurred
        /**
         * Fool me once, shame on... whatever.  If setCSIP() indicates a stack switch occurred,
         * make sure we're in protected mode, because automatic stack switches can't occur in real mode.
         */
        this.assert(!!(this.regCR0 & X86.CR0.MSW.PE));

        if (n) this.setSP(this.getSP() + n);        // TODO: optimize

        /**
         * As per Intel documentation: "If any of [the DS or ES] registers refer to segments whose DPL is
         * less than the new CPL (excluding conforming code segments), the segment register is loaded with
         * the null selector."
         *
         * TODO: I'm not clear on whether a conforming code segment must also be marked readable, so I'm playing
         * it safe and using CODE_CONFORMING instead of CODE_CONFORMING_READABLE.  Also, for the record, I've not
         * seen this situation occur yet (eg, in OS/2 1.0).
         */
        X86.zeroSeg.call(this, this.segDS);
        X86.zeroSeg.call(this, this.segES);
        if (I386 && this.model >= X86.MODEL_80386) {
            X86.zeroSeg.call(this, this.segFS);
            X86.zeroSeg.call(this, this.segGS);
        }
    }
    if (n == 2 && this.cIntReturn) this.checkIntReturn(this.regLIP);

    this.opLSP = X86.ADDR_INVALID;
    this.opSS = -1;
};

/**
 * helpDIVOverflow()
 *
 * @this {CPUx86}
 */
X86.helpDIVOverflow = function()
{
    /**
     * Divide error exceptions are traps on the 8086 and faults on later processors.  I question the value of that
     * change, because it implies that someone might actually want to restart a failing divide.  The only reasonable
     * explanation I can see for the change is to enable the exception handler to accurately record the address of
     * the failing divide, which seems like a very minor benefit.  It doesn't change the fact that, on any processor,
     * the exception handler's only reasonable recourse is to unwind execution to a safe point (or terminate the app).
     *
     * TODO: Determine the proper cycle cost.
     */
    if (this.model <= X86.MODEL_8088) {
        X86.helpTrap.call(this, X86.EXCEPTION.DE_EXC, 0, 2);
    } else {
        X86.helpFault.call(this, X86.EXCEPTION.DE_EXC, null, 2);
    }
};

/**
 * helpInterrupt(nIDT, nCycles)
 *
 * Helper to dispatch external interrupts.  nCycles defaults to 11 for the 8086/8088
 * if no alternate value is specified.
 *
 * @this {CPUx86}
 * @param {number} nIDT
 * @param {number} [nCycles] (number of cycles in addition to the default of nOpCyclesInt)
 */
X86.helpInterrupt = function(nIDT, nCycles = 11)
{
    this.nFault = nIDT;
    X86.helpINT.call(this, nIDT, null, 0, nCycles);
};

/**
 * helpTrap(nIDT, nBytes, nCycles)
 *
 * Helper to dispatch traps (ie, exceptions that occur AFTER the instruction, with NO error code)
 *
 * @this {CPUx86}
 * @param {number} nIDT
 * @param {number} [nBytes] (size of opcode, of any)
 * @param {number} [nCycles] (number of cycles in addition to the default of nOpCyclesInt)
 */
X86.helpTrap = function(nIDT, nBytes, nCycles)
{
    this.nFault = -1;
    X86.helpINT.call(this, nIDT, null, nBytes, nCycles);
};

/**
 * helpFault(nFault, nError, nCycles, fHalt)
 *
 * Helper to dispatch faults (ie, exceptions that occur DURING an instruction and MAY generate an error code)
 *
 * @this {CPUx86}
 * @param {number} nFault
 * @param {number|null} [nError] (if omitted, no error code will be pushed)
 * @param {number} [nCycles] cycle count to pass through to helpINT(), if any
 * @param {boolean} [fHalt] (true to halt the CPU, false to not, undefined if "it depends")
 */
X86.helpFault = function(nFault, nError, nCycles, fHalt)
{
    let fDispatch = false;

    if (!this.flags.complete) {
        /**
         * Prior to each new burst of instructions, stepCPU() sets fComplete to true, and the only (normal) way
         * for fComplete to become false is through stopCPU(), which isn't ordinarily called, except by the Debugger.
         */
        this.setLIP(this.opLIP);
    }
    else if (this.model >= X86.MODEL_80186) {

        fDispatch = true;

        if (this.nFault < 0) {
            /**
             * Single-fault (error code is passed through, and the responsible instruction is restartable.
             *
             * TODO: The following opCS/opLIP/opSS/opLSP checks are primarily required for 80386-based machines
             * with paging enabled, because page faults introduce a new set of complex faults that our current
             * segment load "probes" are insufficient to catch.  So as a stop-gap measure, we rely on these four
             * "snapshot" registers to resolve the general instruction restartability problem (for now).
             *
             * If you want to closely examine the underlying causes of these more complex faults, set breakpoints
             * where indicated below, and examine the stack trace.
             */
            if (this.opCS != -1) {
                if (this.opCS !== this.segCS.sel) {
                    /**
                     * HACK: We slam the RPL into this.segCS.cpl to ensure that loading the original CS segment doesn't
                     * fail.  For example, if we faulted in the middle of a ring transition that loaded CS with a higher
                     * privilege (lower CPL) code segment, then our attempt here to reload the lower privilege (higher CPL)
                     * code segment could be viewed as a privilege violation (which it would be outside this context).
                     */
                    this.segCS.cpl = this.opCS & 0x3;           // set breakpoint here to inspect complex faults
                    this.setCS(this.opCS);
                }
                this.opCS = -1;
            }
            if (this.opLIP !== this.regLIP) {
                this.setLIP(this.opLIP);                        // set breakpoint here to inspect complex faults
                this.assert(this.opLIP === this.regLIP);
            }
            if (this.opSS != -1) {
                if (this.opSS !== this.segSS.sel) {
                    this.setSS(this.opSS);                      // set breakpoint here to inspect complex faults
                }
                this.opSS = -1;
            }
            if (this.opLSP !== X86.ADDR_INVALID) {
                if (this.opLSP !== this.regLSP) {               // set breakpoint below to inspect complex faults
                    this.setSP((this.regESP & ~this.segSS.maskAddr) | (this.opLSP - this.segSS.base));
                    this.assert(this.opLSP === this.regLSP);
                }
                this.opLSP = X86.ADDR_INVALID;
            }
        }
        else if (this.nFault != X86.EXCEPTION.DF_FAULT) {
            /**
             * Double-fault (error code is always zero, and the responsible instruction is not restartable).
             */
            nError = 0;
            nFault = X86.EXCEPTION.DF_FAULT;
        }
        else {
            /**
             * This is a triple-fault (usually referred to in Intel literature as a "shutdown", but it's actually a
             * "reset").  There's nothing to "dispatch" in this case, but we still want to let helpCheckFault() see
             * the triple-fault.  However, regardless what helpCheckFault() returns, we must leave via "throw -1",
             * because we need to blow off whatever context triggered the triple-fault; that was less critical when
             * all we dealt with were 80286-based triple-faults (at least the "normal" triple-faults that OS/2 would
             * generate), but for any other unexpected triple-faults, "dispatching" a throw is critical.
             */
            nError = 0;
            nFault = -1;
            fHalt = false;
            this.resetRegs();
        }
    }

    if (X86.helpCheckFault.call(this, nFault, nError, fHalt) || nFault < 0) {
        /**
         * If this is a fault that would normally be dispatched BUT helpCheckFault() wants us to halt,
         * then we throw a bogus fault number (-1), simply to interrupt the current instruction in exactly
         * the same way that a dispatched fault would interrupt it.
         */
        if (fDispatch) throw -1;
    }

    if (fDispatch) {

        this.nFault = nFault;
        X86.helpINT.call(this, nFault, nError, 0, nCycles);

        /**
         * REPeated instructions that rewind regLIP to opLIP used to screw up this dispatch,
         * so now we slip the new regLIP into opLIP, effectively turning their action into a no-op.
         */
        this.opLIP = this.regLIP;

        /**
         * X86.OPFLAG.FAULT flag is used by selected opcodes to provide an early exit, restore register(s),
         * or whatever is needed to help ensure instruction restartability; there is currently no general
         * mechanism for snapping and restoring all registers for any instruction that might fault.
         *
         * X86.EXCEPTION.DB_EXC exceptions set their own special flag, X86.OPFLAG.DBEXC, to prevent redundant
         * DEBUG exceptions, so we don't need to set OPFLAG.FAULT in that case, because a DEBUG exception
         * doesn't actually prevent an instruction from executing (and therefore doesn't need to be restarted).
         */
        if (nFault == X86.EXCEPTION.DB_EXC) {
            this.opFlags |= X86.OPFLAG.DBEXC;
        } else {
            this.assert(nFault >= 0);
            this.opFlags |= X86.OPFLAG.FAULT;
        }

        /**
         * Since this fault is likely being issued in the context of an instruction that hasn't finished
         * executing, if we don't do anything to interrupt that execution (eg, throw a JavaScript exception),
         * then we would need to shut off all further reads/writes for the current instruction.
         *
         * That's easy for any EA-based memory accesses: simply set both the NOREAD and NOWRITE flags.
         * However, there are also direct, non-EA-based memory accesses to consider.  A perfect example is
         * opPUSHA(): if a GP fault occurs on any PUSH other than the last, a subsequent PUSH is likely to
         * cause another fault, which we will misinterpret as a double-fault -- unless the handler for
         * such an opcode checks this.opFlags for X86.OPFLAG.FAULT after each step of the operation.
         *
         *      this.opFlags |= (X86.OPFLAG.NOREAD | X86.OPFLAG.NOWRITE);
         *
         * Fortunately, we now throw an exception that terminates the current instruction, so the above hack
         * should no longer be necessary.
         */
        throw nFault;
    }
};

/**
 * helpPageFault(addr, fPresent, fWrite)
 *
 * Helper to dispatch page faults.
 *
 * @this {CPUx86}
 * @param {number} addr
 * @param {boolean} fPresent
 * @param {boolean} fWrite
 */
X86.helpPageFault = function(addr, fPresent, fWrite)
{
    this.regCR2 = addr;
    let nError = 0;
    if (fPresent) nError |= X86.PTE.PRESENT;
    if (fWrite) nError |= X86.PTE.READWRITE;
    if (this.nCPL == 3) nError |= X86.PTE.USER;
    X86.helpFault.call(this, X86.EXCEPTION.PF_FAULT, nError);
};

/**
 * helpCheckFault(nFault, nError, fHalt)
 *
 * Aside from giving the Debugger an opportunity to report every fault, this also gives us the ability to
 * halt exception processing in tracks: return true to prevent the fault handler from being dispatched.
 *
 * At the moment, the only Debugger control you have over fault interception is setting MESSAGE.FAULT, which
 * will display faults as they occur, and MESSAGE.HALT, which will halt after any Debugger message, including
 * MESSAGE.FAULT.  If you want execution to continue after halting, clear MESSAGE.FAULT and/or MESSAGE.HALT,
 * or single-step over the offending instruction, which will allow the fault to be dispatched.
 *
 * @this {CPUx86}
 * @param {number} nFault
 * @param {number|null} [nError] (if omitted, no error code will be reported)
 * @param {boolean} [fHalt] (true to halt the CPU, false to not, undefined if "it depends")
 * @returns {boolean|undefined} true to block the fault (often desirable when fHalt is true), otherwise dispatch it
 */
X86.helpCheckFault = function(nFault, nError, fHalt)
{
    let bitsMessage = MESSAGE.FAULT;

    let bOpcode = this.probeAddr(this.regLIP);

    /**
     * OS/2 1.0 uses an INT3 (0xCC) opcode in conjunction with an invalid IDT to trigger a triple-fault
     * reset and return to real-mode, and these resets happen quite frequently during boot; for example,
     * OS/2 startup messages are displayed using a series of INT 0x10 BIOS calls for each character, and
     * each series of BIOS calls requires a round-trip mode switch.
     *
     * Since we really only want to halt on "bad" faults, not "good" (ie, intentional) faults, we take
     * advantage of the fact that all 3 faults comprising the triple-fault point to an INT3 (0xCC) opcode,
     * and so whenever we see that opcode, we ignore the caller's fHalt flag, and suppress FAULT messages
     * unless CPU messages are also enabled.
     *
     * When a triple fault shows up, nFault is -1; it displays as 0xff only because we use toHexByte().
     */
    if (bOpcode == X86.OPCODE.INT3 && !this.addrIDTLimit) {
        fHalt = false;
    }

    /**
     * There are a number of V86-mode exceptions we don't need to know about.  For starters, Windows 3.00
     * (and other versions of enhanced-mode Windows) use an ARPL to switch out of V86-mode, so we can ignore
     * those UD_FAULTs.
     *
     * Ditto for software interrupts, which will generate a GP_FAULT when the interrupt number (eg, 0x6D)
     * exceeds the protected-mode IDT's limit (eg, a limit of 0x2FF corresponds to a maximum interrupt number
     * of 0x5F).  Windows doesn't really care if its IDT is too small, because it has to simulate all software
     * interrupts in V86-mode regardless (they generate a GP_FAULT if IOPL < 3, and even when IOPL == 3, only
     * the protected-mode IDT handler gets to run).
     *
     * Ditto for I/O instructions, which may generate a GP_FAULT depending on the IOPL and/or the IOPM.
     */
    if (this.regPS & X86.PS.VM) {
        if (nFault == X86.EXCEPTION.UD_FAULT && bOpcode == X86.OPCODE.ARPL ||
            nFault == X86.EXCEPTION.GP_FAULT && (
                bOpcode == X86.OPCODE.PUSHF || bOpcode == X86.OPCODE.POPF ||
                bOpcode == X86.OPCODE.INTN || bOpcode == X86.OPCODE.IRET ||
                bOpcode >= X86.OPCODE.INB && bOpcode <= X86.OPCODE.OUTW ||
                bOpcode >= X86.OPCODE.INDXB && bOpcode <= X86.OPCODE.OUTDXW ||
                bOpcode == X86.OPCODE.CLI || bOpcode == X86.OPCODE.STI
            )) {
            fHalt = false;
        }
    }
    // else if (DEBUG && nFault == X86.EXCEPTION.GP_FAULT && fHalt === undefined) fHalt = true;

    /**
     * If fHalt has been explicitly set to false, we also take that as a cue to disable fault messages
     * (which you can override by turning on CPU messages).
     */
    if (fHalt === false) {
        bitsMessage |= MESSAGE.CPU;
    }

    /**
     * Similarly, the PC AT ROM BIOS deliberately generates a couple of GP faults as part of the POST
     * (Power-On Self Test); we don't want to ignore those, but we don't want to halt on them either.  We
     * detect those faults by virtue of the LIP being in the range 0x0F0000 to 0x0FFFFF.
     *
     * TODO: Be aware that this test can trigger false positives, such as when a V86-mode ARPL is hit; eg:
     *
     *      &FD82:22F7 6338            ARPL     [BX+SI],DI
     */
    if (this.regLIP >= 0x0F0000 && this.regLIP <= 0x0FFFFF) {
        fHalt = false;
    }

    /**
     * However, the foregoing notwithstanding, if MESSAGE.HALT is enabled along with all the other required
     * MESSAGE bits, then we want to halt regardless.
     */
    if (this.messageEnabled(bitsMessage + MESSAGE.HALT)) {
        fHalt = true;
    }

    if (this.messageEnabled(bitsMessage) || fHalt) {

        let fRunning = this.flags.running;
        let sMessage = "Fault " + StrLib.toHexByte(nFault) + (nError != null? " (" + StrLib.toHexWord(nError) + ")" : "") + " on opcode " + StrLib.toHexByte(bOpcode);
        if (fHalt) {
            if (fRunning) sMessage += " (blocked)";
        }
        if (DEBUGGER && this.dbg) {
            this.printf((fHalt? MESSAGE.PROGRESS : bitsMessage) + MESSAGE.ADDR, "%s\n", sMessage);
            if (fHalt) {
                /**
                 * By setting fHalt to fRunning (which is true while running but false while single-stepping),
                 * this allows a fault to be dispatched when you single-step over a faulting instruction; you can
                 * then continue single-stepping into the fault handler, or start running again.
                 *
                 * Note that we had to capture fRunning before calling printf(), because if MESSAGE.HALT is set,
                 * printf() will have already halted the CPU.
                 */
                fHalt = fRunning;
                this.dbg.stopCPU();
            }
        } else {
            /**
             * If there's no Debugger, then messageEnabled() must have returned false, which means that fHalt must
             * be true.  Which means we should shut the machine down.
             */
            this.assert(fHalt);
            this.printf(MESSAGE.NOTICE, "%s\n", sMessage);
            this.stopCPU();
        }
    }
    return fHalt;
};

/**
 * zeroSeg(seg)
 *
 * Helper to zero a segment register whenever transitioning to a less privileged (numerically higher) level.
 *
 * @this {CPUx86}
 * @param {Segx86} seg
 */
X86.zeroSeg = function(seg)
{
    let acc = seg.acc & X86.DESC.ACC.TYPE.CODE_OR_DATA;
    if (seg.sel & X86.SEL.MASK) {
        if (acc == X86.DESC.ACC.TYPE.CODE_EXECONLY ||           // non-readable code segment (not allowed)
            acc == X86.DESC.ACC.TYPE.CODE_CONFORMING ||         // non-readable code segment (not allowed)
            acc < X86.DESC.ACC.TYPE.CODE_CONFORMING && seg.dpl < this.nCPL && seg.dpl < (seg.sel & X86.SEL.RPL)) {
            seg.load(0);
        }
    }
};
