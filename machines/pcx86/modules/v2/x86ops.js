/**
 * @fileoverview Implements PCx86 opcode handlers
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import MESSAGE from "./message.js";
import X86 from "./x86.js";
import StrLib from "../../../modules/v2/strlib.js";
import { BACKTRACK, DEBUG, DEBUGGER, I386 } from "./defines.js";

/**
 * op=0x00 (ADD byte,reg)
 *
 * @this {CPUx86}
 */
X86.opADDmb = function()
{
    this.decodeModMemByte.call(this, X86.fnADDb);
    /**
     * Opcode bytes 0x00 0x00 are sufficiently uncommon that it's more likely we've started
     * executing in the weeds, so if you're in DEBUG mode, we'll print a warning and stop the
     * CPU if a Debugger is available.
     *
     * Notice that we also test fRunning: this allows the Debugger to step over the instruction,
     * because its trace ("t") command doesn't "run" the CPU; it merely "steps" the CPU.
     */
    if (DEBUG && !this.bModRM && this.flags.running) {
        this.printf("suspicious opcode (0x00,0x00)\n");
        if (DEBUGGER && this.dbg) this.dbg.stopCPU();
    }
};

/**
 * op=0x01 (ADD word,reg)
 *
 * @this {CPUx86}
 */
X86.opADDmw = function()
{
    this.decodeModMemWord.call(this, X86.fnADDw);
};

/**
 * op=0x02 (ADD reg,byte)
 *
 * @this {CPUx86}
 */
X86.opADDrb = function()
{
    this.decodeModRegByte.call(this, X86.fnADDb);
};

/**
 * op=0x03 (ADD reg,word)
 *
 * @this {CPUx86}
 */
X86.opADDrw = function()
{
    this.decodeModRegWord.call(this, X86.fnADDw);
};

/**
 * op=0x04 (ADD AL,imm8)
 *
 * @this {CPUx86}
 */
X86.opADDALb = function()
{
    this.regEAX = (this.regEAX & ~0xff) | X86.fnADDb.call(this, this.regEAX & 0xff, this.getIPByte());
    /**
     * NOTE: Whenever the result is "blended" value (eg, of btiAL and btiMem0), a new bti should be
     * allocated to reflect that fact; however, I'm leaving "perfect" BACKTRACK support for another day.
     */
    if (BACKTRACK) this.backTrack.btiAL = this.backTrack.btiMem0;
    this.nStepCycles--;         // in the absence of any EA calculations, we need deduct only one more cycle
};

/**
 * op=0x05 (ADD AX,imm16 or ADD EAX,imm32)
 *
 * @this {CPUx86}
 */
X86.opADDAX = function()
{
    this.regEAX = (this.regEAX & ~this.maskData) | X86.fnADDw.call(this, this.regEAX & this.maskData, this.getIPWord());
    if (BACKTRACK) {
        this.backTrack.btiAL = this.backTrack.btiMem0; this.backTrack.btiAH = this.backTrack.btiMem1;
    }
    this.nStepCycles--;         // in the absence of any EA calculations, we need deduct only one more cycle
};

/**
 * op=0x06 (PUSH ES)
 *
 * @this {CPUx86}
 */
X86.opPUSHES = function()
{
    /**
     * When the OPERAND size is 32 bits, the 80386 will decrement the stack pointer by 4, write the selector
     * into the 2 lower bytes, and leave the 2 upper bytes untouched; to properly emulate that, we must use the
     * more generic pushData() instead of pushWord().
     */
    if (!I386) {
        this.pushWord(this.segES.sel);
    } else {
        this.pushData(this.segES.sel, this.sizeData, 2);
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesPushSeg;
};

/**
 * op=0x07 (POP ES)
 *
 * @this {CPUx86}
 */
X86.opPOPES = function()
{
    /**
     * Any operation that modifies the stack before loading a new segment must snapshot regLSP first.
     */
    this.opLSP = this.regLSP;
    this.setES(this.popWord());
    this.nStepCycles -= this.cycleCounts.nOpCyclesPopReg;
    this.opLSP = X86.ADDR_INVALID;
};

/**
 * op=0x08 (OR byte,reg)
 *
 * @this {CPUx86}
 */
X86.opORmb = function()
{
    this.decodeModMemByte.call(this, X86.fnORb);
};

/**
 * op=0x09 (OR word,reg)
 *
 * @this {CPUx86}
 */
X86.opORmw = function()
{
    this.decodeModMemWord.call(this, X86.fnORw);
};

/**
 * op=0x0A (OR reg,byte)
 *
 * @this {CPUx86}
 */
X86.opORrb = function()
{
    this.decodeModRegByte.call(this, X86.fnORb);
};

/**
 * op=0x0B (OR reg,word)
 *
 * @this {CPUx86}
 */
X86.opORrw = function()
{
    this.decodeModRegWord.call(this, X86.fnORw);
};

/**
 * op=0x0C (OR AL,imm8)
 *
 * @this {CPUx86}
 */
X86.opORALb = function()
{
    this.regEAX = (this.regEAX & ~0xff) | X86.fnORb.call(this, this.regEAX & 0xff, this.getIPByte());
    if (BACKTRACK) this.backTrack.btiAL = this.backTrack.btiMem0;
    this.nStepCycles--;         // in the absence of any EA calculations, we need deduct only one more cycle
};

/**
 * op=0x0D (OR AX,imm16 or OR EAX,imm32)
 *
 * @this {CPUx86}
 */
X86.opORAX = function()
{
    this.regEAX = (this.regEAX & ~this.maskData) | X86.fnORw.call(this, this.regEAX & this.maskData, this.getIPWord());
    if (BACKTRACK) {
        this.backTrack.btiAL = this.backTrack.btiMem0; this.backTrack.btiAH = this.backTrack.btiMem1;
    }
    this.nStepCycles--;         // in the absence of any EA calculations, we need deduct only one more cycle
};

/**
 * op=0x0E (PUSH CS)
 *
 * @this {CPUx86}
 */
X86.opPUSHCS = function()
{
    /**
     * When the OPERAND size is 32 bits, the 80386 will decrement the stack pointer by 4, write the selector
     * into the 2 lower bytes, and leave the 2 upper bytes untouched; to properly emulate that, we must use the
     * more generic pushData() instead of pushWord().
     */
    if (!I386) {
        this.pushWord(this.segCS.sel);
    } else {
        this.pushData(this.segCS.sel, this.sizeData, 2);
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesPushSeg;
};

/**
 * op=0x0F (POP CS) (undocumented on 8086/8088; replaced with opInvalid() on 80186/80188, and op0F() on 80286 and up)
 *
 * @this {CPUx86}
 */
X86.opPOPCS = function()
{
    /**
     * Because this is an 8088-only operation, we don't have to worry about taking a snapshot of regLSP first.
     */
    this.setCS(this.popWord());
    this.nStepCycles -= this.cycleCounts.nOpCyclesPopReg;
};

/**
 * op=0x0F (handler for two-byte opcodes; 80286 and up)
 *
 * @this {CPUx86}
 */
X86.op0F = function()
{
    this.aOps0F[this.getIPByte()].call(this);
};

/**
 * op=0x10 (ADC byte,reg)
 *
 * @this {CPUx86}
 */
X86.opADCmb = function()
{
    this.decodeModMemByte.call(this, X86.fnADCb);
};

/**
 * op=0x11 (ADC word,reg)
 *
 * @this {CPUx86}
 */
X86.opADCmw = function()
{
    this.decodeModMemWord.call(this, X86.fnADCw);
};

/**
 * op=0x12 (ADC reg,byte)
 *
 * @this {CPUx86}
 */
X86.opADCrb = function()
{
    this.decodeModRegByte.call(this, X86.fnADCb);
};

/**
 * op=0x13 (ADC reg,word)
 *
 * @this {CPUx86}
 */
X86.opADCrw = function()
{
    this.decodeModRegWord.call(this, X86.fnADCw);
};

/**
 * op=0x14 (ADC AL,imm8)
 *
 * @this {CPUx86}
 */
X86.opADCALb = function()
{
    this.regEAX = (this.regEAX & ~0xff) | X86.fnADCb.call(this, this.regEAX & 0xff, this.getIPByte());
    if (BACKTRACK) this.backTrack.btiAL = this.backTrack.btiMem0;
    this.nStepCycles--;         // in the absence of any EA calculations, we need deduct only one more cycle
};

/**
 * op=0x15 (ADC AX,imm16 or ADC EAX,imm32)
 *
 * @this {CPUx86}
 */
X86.opADCAX = function()
{
    this.regEAX = (this.regEAX & ~this.maskData) | X86.fnADCw.call(this, this.regEAX & this.maskData, this.getIPWord());
    if (BACKTRACK) {
        this.backTrack.btiAL = this.backTrack.btiMem0; this.backTrack.btiAH = this.backTrack.btiMem1;
    }
    this.nStepCycles--;         // in the absence of any EA calculations, we need deduct only one more cycle
};

/**
 * op=0x16 (PUSH SS)
 *
 * @this {CPUx86}
 */
X86.opPUSHSS = function()
{
    /**
     * When the OPERAND size is 32 bits, the 80386 will decrement the stack pointer by 4, write the selector
     * into the 2 lower bytes, and leave the 2 upper bytes untouched; to properly emulate that, we must use the
     * more generic pushData() instead of pushWord().
     */
    if (!I386) {
        this.pushWord(this.segSS.sel);
    } else {
        this.pushData(this.segSS.sel, this.sizeData, 2);
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesPushSeg;
};

/**
 * op=0x17 (POP SS)
 *
 * @this {CPUx86}
 */
X86.opPOPSS = function()
{
    /**
     * Any operation that modifies the stack before loading a new segment must snapshot regLSP first.
     */
    this.opLSP = this.regLSP;
    this.setSS(this.popWord());
    this.nStepCycles -= this.cycleCounts.nOpCyclesPopReg;
    this.opLSP = X86.ADDR_INVALID;
};

/**
 * op=0x18 (SBB byte,reg)
 *
 * @this {CPUx86}
 */
X86.opSBBmb = function()
{
    this.decodeModMemByte.call(this, X86.fnSBBb);
};

/**
 * op=0x19 (SBB word,reg)
 *
 * @this {CPUx86}
 */
X86.opSBBmw = function()
{
    this.decodeModMemWord.call(this, X86.fnSBBw);
};

/**
 * op=0x1A (SBB reg,byte)
 *
 * @this {CPUx86}
 */
X86.opSBBrb = function()
{
    this.decodeModRegByte.call(this, X86.fnSBBb);
};

/**
 * op=0x1B (SBB reg,word)
 *
 * @this {CPUx86}
 */
X86.opSBBrw = function()
{
    this.decodeModRegWord.call(this, X86.fnSBBw);
};

/**
 * op=0x1C (SBB AL,imm8)
 *
 * @this {CPUx86}
 */
X86.opSBBALb = function()
{
    this.regEAX = (this.regEAX & ~0xff) | X86.fnSBBb.call(this, this.regEAX & 0xff, this.getIPByte());
    if (BACKTRACK) this.backTrack.btiAL = this.backTrack.btiMem0;
    this.nStepCycles--;         // in the absence of any EA calculations, we need deduct only one more cycle
};

/**
 * op=0x1D (SBB AX,imm16 or SBB EAX,imm32)
 *
 * @this {CPUx86}
 */
X86.opSBBAX = function()
{
    this.regEAX = (this.regEAX & ~this.maskData) | X86.fnSBBw.call(this, this.regEAX & this.maskData, this.getIPWord());
    if (BACKTRACK) {
        this.backTrack.btiAL = this.backTrack.btiMem0; this.backTrack.btiAH = this.backTrack.btiMem1;
    }
    this.nStepCycles--;         // in the absence of any EA calculations, we need deduct only one more cycle
};

/**
 * op=0x1E (PUSH DS)
 *
 * @this {CPUx86}
 */
X86.opPUSHDS = function()
{
    /**
     * When the OPERAND size is 32 bits, the 80386 will decrement the stack pointer by 4, write the selector
     * into the 2 lower bytes, and leave the 2 upper bytes untouched; to properly emulate that, we must use the
     * more generic pushData() instead of pushWord().
     */
    if (!I386) {
        this.pushWord(this.segDS.sel);
    } else {
        this.pushData(this.segDS.sel, this.sizeData, 2);
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesPushSeg;
};

/**
 * op=0x1F (POP DS)
 *
 * @this {CPUx86}
 */
X86.opPOPDS = function()
{
    /**
     * Any operation that modifies the stack before loading a new segment must snapshot regLSP first.
     */
    this.opLSP = this.regLSP;
    this.setDS(this.popWord());
    this.nStepCycles -= this.cycleCounts.nOpCyclesPopReg;
    this.opLSP = X86.ADDR_INVALID;
};

/**
 * op=0x20 (AND byte,reg)
 *
 * @this {CPUx86}
 */
X86.opANDmb = function()
{
    this.decodeModMemByte.call(this, X86.fnANDb);
};

/**
 * op=0x21 (AND word,reg)
 *
 * @this {CPUx86}
 */
X86.opANDmw = function()
{
    this.decodeModMemWord.call(this, X86.fnANDw);
};

/**
 * op=0x22 (AND reg,byte)
 *
 * @this {CPUx86}
 */
X86.opANDrb = function()
{
    this.decodeModRegByte.call(this, X86.fnANDb);
};

/**
 * op=0x23 (AND reg,word)
 *
 * @this {CPUx86}
 */
X86.opANDrw = function()
{
    this.decodeModRegWord.call(this, X86.fnANDw);
};

/**
 * op=0x24 (AND AL,imm8)
 *
 * @this {CPUx86}
 */
X86.opANDAL = function()
{
    this.regEAX = (this.regEAX & ~0xff) | X86.fnANDb.call(this, this.regEAX & 0xff, this.getIPByte());
    if (BACKTRACK) this.backTrack.btiAL = this.backTrack.btiMem0;
    this.nStepCycles--;         // in the absence of any EA calculations, we need deduct only one more cycle
};

/**
 * op=0x25 (AND AX,imm16 or AND EAX,imm32)
 *
 * @this {CPUx86}
 */
X86.opANDAX = function()
{
    this.regEAX = (this.regEAX & ~this.maskData) | X86.fnANDw.call(this, this.regEAX & this.maskData, this.getIPWord());
    if (BACKTRACK) {
        this.backTrack.btiAL = this.backTrack.btiMem0; this.backTrack.btiAH = this.backTrack.btiMem1;
    }
    this.nStepCycles--;         // in the absence of any EA calculations, we need deduct only one more cycle
};

/**
 * op=0x26 (ES:)
 *
 * @this {CPUx86}
 */
X86.opES = function()
{
    this.opFlags |= X86.OPFLAG.SEG | X86.OPFLAG.NOINTR;
    this.segData = this.segStack = this.segES;
    this.nStepCycles -= this.cycleCounts.nOpCyclesPrefix;
};

/**
 * op=0x27 (DAA)
 *
 * @this {CPUx86}
 */
X86.opDAA = function()
{
    let AL = this.regEAX & 0xff;
    let AF = this.getAF();
    let CF = this.getCF();
    if ((AL & 0xf) > 9 || AF) {
        AL += 0x6;
        AF = X86.PS.AF;
    } else {
        AF = 0;
    }
    if (AL > 0x9f || CF) {
        AL += 0x60;
        CF = X86.PS.CF;
    } else {
        CF = 0;
    }
    let b = (AL & 0xff);
    this.regEAX = (this.regEAX & ~0xff) | b;
    this.setLogicResult(b, X86.RESULT.BYTE);
    if (CF) this.setCF(); else this.clearCF();
    if (AF) this.setAF(); else this.clearAF();
    this.nStepCycles -= this.cycleCounts.nOpCyclesAAA;          // AAA and DAA have the same cycle times
};

/**
 * op=0x28 (SUB byte,reg)
 *
 * @this {CPUx86}
 */
X86.opSUBmb = function()
{
    this.decodeModMemByte.call(this, X86.fnSUBb);
};

/**
 * op=0x29 (SUB word,reg)
 *
 * @this {CPUx86}
 */
X86.opSUBmw = function()
{
    this.decodeModMemWord.call(this, X86.fnSUBw);
};

/**
 * op=0x2A (SUB reg,byte)
 *
 * @this {CPUx86}
 */
X86.opSUBrb = function()
{
    this.decodeModRegByte.call(this, X86.fnSUBb);
};

/**
 * op=0x2B (SUB reg,word)
 *
 * @this {CPUx86}
 */
X86.opSUBrw = function()
{
    this.decodeModRegWord.call(this, X86.fnSUBw);
};

/**
 * op=0x2C (SUB AL,imm8)
 *
 * @this {CPUx86}
 */
X86.opSUBALb = function()
{
    this.regEAX = (this.regEAX & ~0xff) | X86.fnSUBb.call(this, this.regEAX & 0xff, this.getIPByte());
    if (BACKTRACK) this.backTrack.btiAL = this.backTrack.btiMem0;
    this.nStepCycles--;         // in the absence of any EA calculations, we need deduct only one more cycle
};

/**
 * op=0x2D (SUB AX,imm16 or SUB EAX,imm32)
 *
 * @this {CPUx86}
 */
X86.opSUBAX = function()
{
    this.regEAX = (this.regEAX & ~this.maskData) | X86.fnSUBw.call(this, this.regEAX & this.maskData, this.getIPWord());
    if (BACKTRACK) {
        this.backTrack.btiAL = this.backTrack.btiMem0; this.backTrack.btiAH = this.backTrack.btiMem1;
    }
    this.nStepCycles--;         // in the absence of any EA calculations, we need deduct only one more cycle
};

/**
 * op=0x2E (CS:)
 *
 * @this {CPUx86}
 */
X86.opCS = function()
{
    this.opFlags |= X86.OPFLAG.SEG | X86.OPFLAG.NOINTR;
    this.segData = this.segStack = this.segCS;
    this.nStepCycles -= this.cycleCounts.nOpCyclesPrefix;
};

/**
 * op=0x2F (DAS)
 *
 * @this {CPUx86}
 */
X86.opDAS = function()
{
    let AL = this.regEAX & 0xff;
    let AF = this.getAF();
    let CF = this.getCF();
    if ((AL & 0xf) > 9 || AF) {
        AL -= 0x6;
        AF = X86.PS.AF;
    } else {
        AF = 0;
    }
    if (AL > 0x9f || CF) {
        AL -= 0x60;
        CF = X86.PS.CF;
    } else {
        CF = 0;
    }
    let b = (AL & 0xff);
    this.regEAX = (this.regEAX & ~0xff) | b;
    this.setLogicResult(b, X86.RESULT.BYTE);
    if (CF) this.setCF(); else this.clearCF();
    if (AF) this.setAF(); else this.clearAF();
    this.nStepCycles -= this.cycleCounts.nOpCyclesAAA;          // AAA and DAS have the same cycle times
};

/**
 * op=0x30 (XOR byte,reg)
 *
 * @this {CPUx86}
 */
X86.opXORmb = function()
{
    this.decodeModMemByte.call(this, X86.fnXORb);
};

/**
 * op=0x31 (XOR word,reg)
 *
 * @this {CPUx86}
 */
X86.opXORmw = function()
{
    this.decodeModMemWord.call(this, X86.fnXORw);
};

/**
 * op=0x32 (XOR reg,byte)
 *
 * @this {CPUx86}
 */
X86.opXORrb = function()
{
    this.decodeModRegByte.call(this, X86.fnXORb);
};

/**
 * op=0x33 (XOR reg,word)
 *
 * @this {CPUx86}
 */
X86.opXORrw = function()
{
    this.decodeModRegWord.call(this, X86.fnXORw);
};

/**
 * op=0x34 (XOR AL,imm8)
 *
 * @this {CPUx86}
 */
X86.opXORALb = function()
{
    this.regEAX = (this.regEAX & ~0xff) | X86.fnXORb.call(this, this.regEAX & 0xff, this.getIPByte());
    if (BACKTRACK) this.backTrack.btiAL = this.backTrack.btiMem0;
    this.nStepCycles--;         // in the absence of any EA calculations, we need deduct only one more cycle
};

/**
 * op=0x35 (XOR AX,imm16 or XOR EAX,imm32)
 *
 * @this {CPUx86}
 */
X86.opXORAX = function()
{
    this.regEAX = (this.regEAX & ~this.maskData) | X86.fnXORw.call(this, this.regEAX & this.maskData, this.getIPWord());
    if (BACKTRACK) {
        this.backTrack.btiAL = this.backTrack.btiMem0; this.backTrack.btiAH = this.backTrack.btiMem1;
    }
    this.nStepCycles--;         // in the absence of any EA calculations, we need deduct only one more cycle
};

/**
 * op=0x36 (SS:)
 *
 * @this {CPUx86}
 */
X86.opSS = function()
{
    this.opFlags |= X86.OPFLAG.SEG | X86.OPFLAG.NOINTR;
    this.segData = this.segStack = this.segSS;      // QUESTION: Is there a case where segStack would not already be segSS? (eg, multiple segment overrides?)
    this.nStepCycles -= this.cycleCounts.nOpCyclesPrefix;
};

/**
 * op=0x37 (AAA)
 *
 * @this {CPUx86}
 */
X86.opAAA = function()
{
    let CF, AF;
    let AL = this.regEAX & 0xff;
    let AH = (this.regEAX >> 8) & 0xff;
    if ((AL & 0xf) > 9 || this.getAF()) {
        AL += 6;
        /**
         * Simulate the fact that the 80286 and higher add 6 to AX rather than AL.
         */
        if (this.model >= X86.MODEL_80286 && AL > 0xff) AH++;
        AH++;
        CF = AF = 1;
    } else {
        CF = AF = 0;
    }
    this.regEAX = (this.regEAX & ~0xffff) | (((AH << 8) | AL) & 0xff0f);
    if (CF) this.setCF(); else this.clearCF();
    if (AF) this.setAF(); else this.clearAF();
    this.nStepCycles -= this.cycleCounts.nOpCyclesAAA;
};

/**
 * op=0x38 (CMP byte,reg)
 *
 * @this {CPUx86}
 */
X86.opCMPmb = function()
{
    this.decodeModMemByte.call(this, X86.fnCMPb);
};

/**
 * op=0x39 (CMP word,reg)
 *
 * @this {CPUx86}
 */
X86.opCMPmw = function()
{
    this.decodeModMemWord.call(this, X86.fnCMPw);
};

/**
 * op=0x3A (CMP reg,byte)
 *
 * @this {CPUx86}
 */
X86.opCMPrb = function()
{
    this.decodeModRegByte.call(this, X86.fnCMPb);
};

/**
 * op=0x3B (CMP reg,word)
 *
 * @this {CPUx86}
 */
X86.opCMPrw = function()
{
    this.decodeModRegWord.call(this, X86.fnCMPw);
};

/**
 * op=0x3C (CMP AL,imm8)
 *
 * @this {CPUx86}
 */
X86.opCMPALb = function()
{
    X86.fnCMPb.call(this, this.regEAX & 0xff, this.getIPByte());
    this.nStepCycles--;         // in the absence of any EA calculations, we need deduct only one more cycle
};

/**
 * op=0x3D (CMP AX,imm16 or CMP EAX,imm32)
 *
 * @this {CPUx86}
 */
X86.opCMPAX = function()
{
    X86.fnCMPw.call(this, this.regEAX & this.maskData, this.getIPWord());
    this.nStepCycles--;         // in the absence of any EA calculations, we need deduct only one more cycle
};

/**
 * op=0x3E (DS:)
 *
 * @this {CPUx86}
 */
X86.opDS = function()
{
    this.opFlags |= X86.OPFLAG.SEG | X86.OPFLAG.NOINTR;
    this.segData = this.segStack = this.segDS;      // QUESTION: Is there a case where segData would not already be segDS? (eg, multiple segment overrides?)
    this.nStepCycles -= this.cycleCounts.nOpCyclesPrefix;
};

/**
 * op=0x3D (AAS)
 *
 * @this {CPUx86}
 */
X86.opAAS = function()
{
    let CF, AF;
    let AL = this.regEAX & 0xff;
    let AH = (this.regEAX >> 8) & 0xff;
    if ((AL & 0xf) > 9 || this.getAF()) {
        AL = (AL - 0x6) & 0xf;
        AH = (AH - 1) & 0xff;
        CF = AF = 1;
    } else {
        CF = AF = 0;
    }
    this.regEAX = (this.regEAX & ~0xffff) | ((AH << 8) | AL);
    if (CF) this.setCF(); else this.clearCF();
    if (AF) this.setAF(); else this.clearAF();
    this.nStepCycles -= this.cycleCounts.nOpCyclesAAA;   // AAA and AAS have the same cycle times
};

/**
 * op=0x40 (INC [E]AX)
 *
 * @this {CPUx86}
 */
X86.opINCAX = function()
{
    this.regEAX = X86.helpINCreg.call(this, this.regEAX);
};

/**
 * op=0x41 (INC [E]CX)
 *
 * @this {CPUx86}
 */
X86.opINCCX = function()
{
    this.regECX = X86.helpINCreg.call(this, this.regECX);
};

/**
 * op=0x42 (INC [E]DX)
 *
 * @this {CPUx86}
 */
X86.opINCDX = function()
{
    this.regEDX = X86.helpINCreg.call(this, this.regEDX);
};

/**
 * op=0x43 (INC [E]BX)
 *
 * @this {CPUx86}
 */
X86.opINCBX = function()
{
    this.regEBX = X86.helpINCreg.call(this, this.regEBX);
};

/**
 * op=0x44 (INC [E]SP)
 *
 * @this {CPUx86}
 */
X86.opINCSP = function()
{
    this.setSP(X86.helpINCreg.call(this, this.getSP()));
};

/**
 * op=0x45 (INC [E]BP)
 *
 * @this {CPUx86}
 */
X86.opINCBP = function()
{
    this.regEBP = X86.helpINCreg.call(this, this.regEBP);
};

/**
 * op=0x46 (INC [E]SI)
 *
 * @this {CPUx86}
 */
X86.opINCSI = function()
{
    this.regESI = X86.helpINCreg.call(this, this.regESI);
};

/**
 * op=0x47 (INC [E]DI)
 *
 * @this {CPUx86}
 */
X86.opINCDI = function()
{
    this.regEDI = X86.helpINCreg.call(this, this.regEDI);
};

/**
 * op=0x48 (DEC [E]AX)
 *
 * @this {CPUx86}
 */
X86.opDECAX = function()
{
    this.regEAX = X86.helpDECreg.call(this, this.regEAX);
};

/**
 * op=0x49 (DEC [E]CX)
 *
 * @this {CPUx86}
 */
X86.opDECCX = function()
{
    this.regECX = X86.helpDECreg.call(this, this.regECX);
};

/**
 * op=0x4A (DEC [E]DX)
 *
 * @this {CPUx86}
 */
X86.opDECDX = function()
{
    this.regEDX = X86.helpDECreg.call(this, this.regEDX);
};

/**
 * op=0x4B (DEC [E]BX)
 *
 * @this {CPUx86}
 */
X86.opDECBX = function()
{
    this.regEBX = X86.helpDECreg.call(this, this.regEBX);
};

/**
 * op=0x4C (DEC [E]SP)
 *
 * @this {CPUx86}
 */
X86.opDECSP = function()
{
    this.setSP(X86.helpDECreg.call(this, this.getSP()));
};

/**
 * op=0x4D (DEC [E]BP)
 *
 * @this {CPUx86}
 */
X86.opDECBP = function()
{
    this.regEBP = X86.helpDECreg.call(this, this.regEBP);
};

/**
 * op=0x4E (DEC [E]SI)
 *
 * @this {CPUx86}
 */
X86.opDECSI = function()
{
    this.regESI = X86.helpDECreg.call(this, this.regESI);
};

/**`
 * op=0x4F (DEC [E]DI)
 *
 * @this {CPUx86}
 */
X86.opDECDI = function()
{
    this.regEDI = X86.helpDECreg.call(this, this.regEDI);
};

/**
 * op=0x50 (PUSH [E]AX)
 *
 * @this {CPUx86}
 */
X86.opPUSHAX = function()
{
    if (BACKTRACK) {
        this.backTrack.btiMem0 = this.backTrack.btiAL; this.backTrack.btiMem1 = this.backTrack.btiAH;
    }
    this.pushWord(this.regEAX & this.maskData);
    this.nStepCycles -= this.cycleCounts.nOpCyclesPushReg;
};

/**
 * op=0x51 (PUSH [E]CX)
 *
 * @this {CPUx86}
 */
X86.opPUSHCX = function()
{
    if (BACKTRACK) {
        this.backTrack.btiMem0 = this.backTrack.btiCL; this.backTrack.btiMem1 = this.backTrack.btiCH;
    }
    this.pushWord(this.regECX & this.maskData);
    this.nStepCycles -= this.cycleCounts.nOpCyclesPushReg;
};

/**
 * op=0x52 (PUSH [E]DX)
 *
 * @this {CPUx86}
 */
X86.opPUSHDX = function()
{
    if (BACKTRACK) {
        this.backTrack.btiMem0 = this.backTrack.btiDL; this.backTrack.btiMem1 = this.backTrack.btiDH;
    }
    this.pushWord(this.regEDX & this.maskData);
    this.nStepCycles -= this.cycleCounts.nOpCyclesPushReg;
};

/**
 * op=0x53 (PUSH [E]BX)
 *
 * @this {CPUx86}
 */
X86.opPUSHBX = function()
{
    if (BACKTRACK) {
        this.backTrack.btiMem0 = this.backTrack.btiBL; this.backTrack.btiMem1 = this.backTrack.btiBH;
    }
    this.pushWord(this.regEBX & this.maskData);
    this.nStepCycles -= this.cycleCounts.nOpCyclesPushReg;
};

/**
 * op=0x54 (PUSH SP)
 *
 * NOTE: Having an accurate implementation of "PUSH SP" for the 8086/8088 isn't just a nice idea, it affects real
 * code.  Case in point: early Microsoft C floating-point libraries relied on "PUSH SP" behavior to quickly determine
 * whether an 8088 (and therefore presumably an 8087) or an 80286 (and presumably an 80287) was being used; eg:
 *
 *      &0910:1E82 D93E1709        FSTCW    WORD [0917]
 *      &0910:1E86 CD3D            INT      3D
 *      &0E4E:06D3 50              PUSH     AX
 *      &0E4E:06D4 B83DA2          MOV      AX,A23D
 *      &0E4E:06D7 EB04            JMP      06DD
 *      &0E4E:06DD 55              PUSH     BP
 *      &0E4E:06DE 1E              PUSH     DS
 *      &0E4E:06DF 56              PUSH     SI
 *      &0E4E:06E0 8BEC            MOV      BP,SP
 *      &0E4E:06E2 C57608          LDS      SI,[BP+08]
 *      &0E4E:06E5 4E              DEC      SI
 *      &0E4E:06E6 4E              DEC      SI
 *      &0E4E:06E7 897608          MOV      [BP+08],SI
 *      &0E4E:06EA 2904            SUB      [SI],AX
 *      &0E4E:06EC 53              PUSH     BX
 *      &0E4E:06ED 33DB            XOR      BX,BX
 *      &0E4E:06EF 54              PUSH     SP          ; beginning of processor check
 *      &0E4E:06F0 58              POP      AX
 *      &0E4E:06F1 3BC4            CMP      AX,SP
 *      &0E4E:06F3 7528            JNZ      071D        ; jump if 8086/8088/80186/80188, no jump if 80286 or later
 *      &0E4E:06F5 8B4001          MOV      AX,[BX+SI+01]
 *      &0E4E:06F8 25FB30          AND      AX,30FB
 *      &0E4E:06FB 3DD930          CMP      AX,30D9
 *      &0E4E:06FE 7507            JNZ      0707
 *      &0E4E:0700 8A4002          MOV      AL,[BX+SI+02]
 *      &0E4E:0703 3CF0            CMP      AL,F0
 *      &0E4E:0705 7216            JC       071D
 *      &0E4E:0707 8B4001          MOV      AX,[BX+SI+01]
 *      &0E4E:070A 25FFFE          AND      AX,FEFF
 *      &0E4E:070D 3DDBE2          CMP      AX,E2DB
 *      &0E4E:0710 740B            JZ       071D
 *      &0E4E:0712 8B4001          MOV      AX,[BX+SI+01]
 *      &0E4E:0715 3DDFE0          CMP      AX,E0DF
 *      &0E4E:0718 7403            JZ       071D
 *      &0E4E:071A C60490          MOV      [SI],90
 *      &0E4E:071D 5B              POP      BX
 *      &0E4E:071E 5E              POP      SI
 *      &0E4E:071F 1F              POP      DS
 *      &0E4E:0720 5D              POP      BP
 *      &0E4E:0721 58              POP      AX
 *      &0E4E:0722 CF              IRET
 *
 * @this {CPUx86}
 */
X86.opPUSHSP_8086 = function()
{
    let w = (this.getSP() - 2) & 0xffff;
    this.pushWord(w);
    this.nStepCycles -= this.cycleCounts.nOpCyclesPushReg;
};

/**
 * op=0x54 (PUSH [E]SP)
 *
 * @this {CPUx86}
 */
X86.opPUSHSP = function()
{
    this.pushWord(this.getSP() & this.maskData);
    this.nStepCycles -= this.cycleCounts.nOpCyclesPushReg;
};

/**
 * op=0x55 (PUSH [E]BP)
 *
 * @this {CPUx86}
 */
X86.opPUSHBP = function()
{
    if (BACKTRACK) {
        this.backTrack.btiMem0 = this.backTrack.btiBPLo; this.backTrack.btiMem1 = this.backTrack.btiBPHi;
    }
    this.pushWord(this.regEBP & this.maskData);
    this.nStepCycles -= this.cycleCounts.nOpCyclesPushReg;
};

/**
 * op=0x56 (PUSH [E]SI)
 *
 * @this {CPUx86}
 */
X86.opPUSHSI = function()
{
    if (BACKTRACK) {
        this.backTrack.btiMem0 = this.backTrack.btiSILo; this.backTrack.btiMem1 = this.backTrack.btiSIHi;
    }
    this.pushWord(this.regESI & this.maskData);
    this.nStepCycles -= this.cycleCounts.nOpCyclesPushReg;
};

/**
 * op=0x57 (PUSH [E]DI)
 *
 * @this {CPUx86}
 */
X86.opPUSHDI = function()
{
    if (BACKTRACK) {
        this.backTrack.btiMem0 = this.backTrack.btiDILo; this.backTrack.btiMem1 = this.backTrack.btiDIHi;
    }
    this.pushWord(this.regEDI & this.maskData);
    this.nStepCycles -= this.cycleCounts.nOpCyclesPushReg;
};

/**
 * op=0x58 (POP [E]AX)
 *
 * @this {CPUx86}
 */
X86.opPOPAX = function()
{
    this.regEAX = (this.regEAX & ~this.maskData) | this.popWord();
    if (BACKTRACK) {
        this.backTrack.btiAL = this.backTrack.btiMem0; this.backTrack.btiAH = this.backTrack.btiMem1;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesPopReg;
};

/**
 * op=0x59 (POP [E]CX)
 *
 * @this {CPUx86}
 */
X86.opPOPCX = function()
{
    this.regECX = (this.regECX & ~this.maskData) | this.popWord();
    if (BACKTRACK) {
        this.backTrack.btiCL = this.backTrack.btiMem0; this.backTrack.btiCH = this.backTrack.btiMem1;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesPopReg;
};

/**
 * op=0x5A (POP [E]DX)
 *
 * @this {CPUx86}
 */
X86.opPOPDX = function()
{
    this.regEDX = (this.regEDX & ~this.maskData) | this.popWord();
    if (BACKTRACK) {
        this.backTrack.btiDL = this.backTrack.btiMem0; this.backTrack.btiDH = this.backTrack.btiMem1;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesPopReg;
};

/**
 * op=0x5B (POP [E]BX)
 *
 * @this {CPUx86}
 */
X86.opPOPBX = function()
{
    this.regEBX = (this.regEBX & ~this.maskData) | this.popWord();
    if (BACKTRACK) {
        this.backTrack.btiBL = this.backTrack.btiMem0; this.backTrack.btiBH = this.backTrack.btiMem1;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesPopReg;
};

/**
 * op=0x5C (POP [E]SP)
 *
 * @this {CPUx86}
 */
X86.opPOPSP = function()
{
    this.setSP((this.getSP() & ~this.maskData) | this.popWord());
    this.nStepCycles -= this.cycleCounts.nOpCyclesPopReg;
};

/**
 * op=0x5D (POP [E]BP)
 *
 * @this {CPUx86}
 */
X86.opPOPBP = function()
{
    this.regEBP = (this.regEBP & ~this.maskData) | this.popWord();
    if (BACKTRACK) {
        this.backTrack.btiBPLo = this.backTrack.btiMem0; this.backTrack.btiBPHi = this.backTrack.btiMem1;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesPopReg;
};

/**
 * op=0x5E (POP [E]SI)
 *
 * @this {CPUx86}
 */
X86.opPOPSI = function()
{
    this.regESI = (this.regESI & ~this.maskData) | this.popWord();
    if (BACKTRACK) {
        this.backTrack.btiSILo = this.backTrack.btiMem0; this.backTrack.btiSIHi = this.backTrack.btiMem1;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesPopReg;
};

/**
 * op=0x5F (POP [E]DI)
 *
 * @this {CPUx86}
 */
X86.opPOPDI = function()
{
    this.regEDI = (this.regEDI & ~this.maskData) | this.popWord();
    if (BACKTRACK) {
        this.backTrack.btiDILo = this.backTrack.btiMem0; this.backTrack.btiDIHi = this.backTrack.btiMem1;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesPopReg;
};

/**
 * op=0x60 (PUSHA) (80186/80188 and up)
 *
 * @this {CPUx86}
 */
X86.opPUSHA = function()
{
    /**
     * Any operation that performs multiple stack modifications must snapshot regLSP first.
     */
    this.opLSP = this.regLSP;

    /**
     * TODO: regLSP needs to be pre-bounds-checked against regLSPLimitLow
     */
    let temp = this.getSP() & this.maskData;
    if (BACKTRACK) {
        this.backTrack.btiMem0 = this.backTrack.btiAL; this.backTrack.btiMem1 = this.backTrack.btiAH;
    }
    this.pushWord(this.regEAX & this.maskData);
    if (BACKTRACK) {
        this.backTrack.btiMem0 = this.backTrack.btiCL; this.backTrack.btiMem1 = this.backTrack.btiCH;
    }
    this.pushWord(this.regECX & this.maskData);
    if (BACKTRACK) {
        this.backTrack.btiMem0 = this.backTrack.btiDL; this.backTrack.btiMem1 = this.backTrack.btiDH;
    }
    this.pushWord(this.regEDX & this.maskData);
    if (BACKTRACK) {
        this.backTrack.btiMem0 = this.backTrack.btiBL; this.backTrack.btiMem1 = this.backTrack.btiBH;
    }
    this.pushWord(this.regEBX & this.maskData);
    this.pushWord(temp);
    if (BACKTRACK) {
        this.backTrack.btiMem0 = this.backTrack.btiBPLo; this.backTrack.btiMem1 = this.backTrack.btiBPHi;
    }
    this.pushWord(this.regEBP & this.maskData);
    if (BACKTRACK) {
        this.backTrack.btiMem0 = this.backTrack.btiSILo; this.backTrack.btiMem1 = this.backTrack.btiSIHi;
    }
    this.pushWord(this.regESI & this.maskData);
    if (BACKTRACK) {
        this.backTrack.btiMem0 = this.backTrack.btiDILo; this.backTrack.btiMem1 = this.backTrack.btiDIHi;
    }
    this.pushWord(this.regEDI & this.maskData);
    this.nStepCycles -= this.cycleCounts.nOpCyclesPushAll;

    this.opLSP = X86.ADDR_INVALID;
};

/**
 * op=0x61 (POPA) (80186/80188 and up)
 *
 * @this {CPUx86}
 */
X86.opPOPA = function()
{
    /**
     * Any operation that performs multiple stack modifications must snapshot regLSP first.
     */
    this.opLSP = this.regLSP;

    this.regEDI = (this.regEDI & ~this.maskData) | this.popWord();
    if (BACKTRACK) {
        this.backTrack.btiDILo = this.backTrack.btiMem0; this.backTrack.btiDIHi = this.backTrack.btiMem1;
    }
    this.regESI = (this.regESI & ~this.maskData) | this.popWord();
    if (BACKTRACK) {
        this.backTrack.btiSILo = this.backTrack.btiMem0; this.backTrack.btiSIHi = this.backTrack.btiMem1;
    }
    this.regEBP = (this.regEBP & ~this.maskData) | this.popWord();
    if (BACKTRACK) {
        this.backTrack.btiBPLo = this.backTrack.btiMem0; this.backTrack.btiBPHi = this.backTrack.btiMem1;
    }
    /**
     * TODO: regLSP needs to be pre-bounds-checked against regLSPLimit at the start
     */
    this.setSP(this.getSP() + this.sizeData);
    // this.regLSP += (I386? this.sizeData : 2);
    this.regEBX = (this.regEBX & ~this.maskData) | this.popWord();
    if (BACKTRACK) {
        this.backTrack.btiBL = this.backTrack.btiMem0; this.backTrack.btiBH = this.backTrack.btiMem1;
    }
    this.regEDX = (this.regEDX & ~this.maskData) | this.popWord();
    if (BACKTRACK) {
        this.backTrack.btiDL = this.backTrack.btiMem0; this.backTrack.btiDH = this.backTrack.btiMem1;
    }
    this.regECX = (this.regECX & ~this.maskData) | this.popWord();
    if (BACKTRACK) {
        this.backTrack.btiCL = this.backTrack.btiMem0; this.backTrack.btiCH = this.backTrack.btiMem1;
    }
    this.regEAX = (this.regEAX & ~this.maskData) | this.popWord();
    if (BACKTRACK) {
        this.backTrack.btiAL = this.backTrack.btiMem0; this.backTrack.btiAH = this.backTrack.btiMem1;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesPopAll;

    this.opLSP = X86.ADDR_INVALID;
};

/**
 * op=0x62 (BOUND reg,word) (80186/80188 and up)
 *
 * @this {CPUx86}
 */
X86.opBOUND = function()
{
    this.decodeModRegWord.call(this, X86.fnBOUND);
};

/**
 * op=0x63 (ARPL word,reg) (80286 and up)
 *
 * @this {CPUx86}
 */
X86.opARPL = function()
{
    /**
     * ARPL is one of several protected-mode instructions that are meaningless and not allowed in either real-mode
     * or V86-mode; others include LAR, LSL, VERR and VERW.  More meaningful but potentially harmful protected-mode
     * instructions that ARE allowed in real-mode but NOT in V86-mode include LIDT, LGDT, LMSW, CLTS, HLT, and
     * control register MOV instructions.
     *
     * ARPL is somewhat more noteworthy because enhanced-mode Windows (going back to at least Windows 3.00, and
     * possibly even the earliest versions of Windows/386) selected the ARPL opcode as a controlled means of exiting
     * V86-mode via the UD_FAULT exception.  Windows would use the same ARPL for all controlled exits, using different
     * segment:offset pointers to the ARPL to differentiate them.  ARPL was probably chosen because it could trigger
     * a UD_FAULT with a single byte (0x63); any subsequent address bytes would be irrelevant.
     *
     * Which is WHY we must perform the CPU mode tests below rather than in the fnARPL() worker; otherwise we could
     * generate additional (bogus) faults, based on the address of the first operand.
     *
     * TODO: You may have noticed that setProtMode() already swaps out a 0x0F opcode dispatch table for another based
     * on the mode, because none of the "GRP6" 0x0F opcodes (eg, SLDT, STR, LLDT, LTR, VERR and VERW) are allowed in
     * real-mode, and it was easy to swap all those handlers in/out with a single update.  We've extended that particular
     * swap to include V86-mode as well, but we might want to consider swapping out more opcode handlers in a similar
     * fashion, instead of using these in-line mode tests.
     */
    if (!(this.regCR0 & X86.CR0.MSW.PE) || I386 && (this.regPS & X86.PS.VM)) {
        X86.opInvalid.call(this);
        return;
    }
    this.decodeModMemWord.call(this, X86.fnARPL);
};

/**
 * op=0x64 (FS:)
 *
 * @this {CPUx86}
 */
X86.opFS = function()
{
    this.opFlags |= X86.OPFLAG.SEG | X86.OPFLAG.NOINTR;
    this.segData = this.segStack = this.segFS;
    this.nStepCycles -= this.cycleCounts.nOpCyclesPrefix;
};

/**
 * op=0x65 (GS:)
 *
 * @this {CPUx86}
 */
X86.opGS = function()
{
    this.opFlags |= X86.OPFLAG.SEG | X86.OPFLAG.NOINTR;
    this.segData = this.segStack = this.segGS;
    this.nStepCycles -= this.cycleCounts.nOpCyclesPrefix;
};

/**
 * op=0x66 (OS:) (80386 and up)
 *
 * TODO: Review other effective operand-size criteria, cycle count, etc.
 *
 * @this {CPUx86}
 */
X86.opOS = function()
{
    if (I386) {
        /**
         * See opAS() for a discussion of multiple prefixes, which applies equally to both
         * operand-size and address-size prefixes.
         *
         * The simple fix here is to skip the bulk of the operation if the prefix is redundant.
         */
        this.opFlags |= X86.OPFLAG.DATASIZE;
        if (!(this.opPrefixes & X86.OPFLAG.DATASIZE)) {
            this.sizeData ^= 0x6;               // that which is 2 shall become 4, and vice versa
            this.maskData ^= (0xffff0000|0);    // that which is 0x0000ffff shall become 0xffffffff, and vice versa
            this.updateDataSize();
        }
        this.nStepCycles -= this.cycleCounts.nOpCyclesPrefix;
    }
};

/**
 * op=0x67 (AS:) (80386 and up)
 *
 * TODO: Review other effective address-size criteria, cycle count, etc.
 *
 * @this {CPUx86}
 */
X86.opAS = function()
{
    if (I386) {
        /**
         * Live and learn: multiple address-size prefixes can and do occur on a single instruction,
         * and contrary to my original assumption that the prefixes act independently, they do not.
         * During Windows 95 SETUP, the following instruction is executed:
         *
         *      06AF:1B4D 67672E          CS:
         *      06AF:1B50 FFA25A1B        JMP      [BP+SI+1B5A]
         *
         * which is in fact:
         *
         *      06AF:1B4D 67672E          CS:
         *      06AF:1B50 FFA25A1B0000    JMP      [EDX+00001B5A]
         *
         * The other interesting question is: why/how did this instruction get encoded that way?
         * All I can say is, there were no explicit prefixes in the source (BSG.ASM), so we'll chalk
         * it up to a glitch in MASM.
         *
         * The simple fix here is to skip the bulk of the operation if the prefix is redundant.
         */
        this.opFlags |= X86.OPFLAG.ADDRSIZE;
        if (!(this.opPrefixes & X86.OPFLAG.ADDRSIZE)) {
            this.sizeAddr ^= 0x06;              // that which is 2 shall become 4, and vice versa
            this.maskAddr ^= (0xffff0000|0);    // that which is 0x0000ffff shall become 0xffffffff, and vice versa
            this.updateAddrSize();
        }
        this.nStepCycles -= this.cycleCounts.nOpCyclesPrefix;
    }
};

/**
 * op=0x68 (PUSH imm) (80186/80188 and up)
 *
 * @this {CPUx86}
 */
X86.opPUSHn = function()
{
    this.pushWord(this.getIPWord());
    this.nStepCycles -= this.cycleCounts.nOpCyclesPushReg;
};

/**
 * op=0x69 (IMUL reg,word,imm) (80186/80188 and up)
 *
 * @this {CPUx86}
 */
X86.opIMULn = function()
{
    this.decodeModRegWord.call(this, X86.fnIMULn);
};

/**
 * op=0x6A (PUSH imm8) (80186/80188 and up)
 *
 * @this {CPUx86}
 */
X86.opPUSH8 = function()
{
    if (BACKTRACK) this.backTrack.btiMem1 = 0;
    this.pushWord(this.getIPDisp());
    this.nStepCycles -= this.cycleCounts.nOpCyclesPushReg;
};

/**
 * op=0x6B (IMUL reg,word,imm8) (80186/80188 and up)
 *
 * @this {CPUx86}
 */
X86.opIMUL8 = function()
{
    this.decodeModRegWord.call(this, X86.fnIMUL8);
};

/**
 * op=0x6C (INSB) (80186/80188 and up)
 *
 * NOTE: Segment overrides are ignored for this instruction, so we must use segES instead of segData.
 *
 * @this {CPUx86}
 */
X86.opINSb = function()
{
    let nReps = 1;
    let nDelta = 0;
    let maskAddr = this.maskAddr;

    /**
     * NOTE: 5 + 4n is the cycle time for the 80286; the 80186/80188 has different values: 14 cycles for
     * an unrepeated INS, and 8 + 8n for a repeated INS.  However, accurate cycle times for the 80186/80188 is
     * low priority.
     */
    let nCycles = 5;

    /**
     * The (normal) REP prefix, if used, is REPNZ (0xf2), but either one works....
     */
    if (this.opPrefixes & (X86.OPFLAG.REPZ | X86.OPFLAG.REPNZ)) {
        nReps = this.regECX & maskAddr;
        nDelta = 1;
        if (this.opPrefixes & X86.OPFLAG.REPEAT) nCycles = 4;
    }

    if (nReps--) {
        let port = this.regEDX & 0xffff;
        if (!this.checkIOPM(port, 1, true)) return;
        let b = this.bus.checkPortInputNotify(port, 1, this.regLIP - nDelta - 1);
        this.setSOByte(this.segES, this.regEDI & maskAddr, b);
        /**
         * helpFault() throws exceptions now, so inline checks of X86.OPFLAG.FAULT should no longer be necessary.
         *
         *      if (this.opFlags & X86.OPFLAG.FAULT) return;
         */
        if (BACKTRACK) this.backTrack.btiMem0 = this.backTrack.btiIO;
        this.regEDI = (this.regEDI & ~maskAddr) | ((this.regEDI + ((this.regPS & X86.PS.DF)? -1 : 1)) & maskAddr);
        this.regECX = (this.regECX & ~maskAddr) | ((this.regECX - nDelta) & maskAddr);
        this.nStepCycles -= nCycles;
        if (nReps) this.rewindIP();
    }
};

/**
 * op=0x6D (INSW) (80186/80188 and up)
 *
 * NOTE: Segment overrides are ignored for this instruction, so we must use segDS instead of segData.
 *
 * @this {CPUx86}
 */
X86.opINSw = function()
{
    let nReps = 1;
    let nDelta = 0;
    let maskAddr = this.maskAddr;

    /**
     * NOTE: 5 + 4n is the cycle time for the 80286; the 80186/80188 has different values: 14 cycles for
     * an unrepeated INS, and 8 + 8n for a repeated INS.  However, accurate cycle times for the 80186/80188 is
     * low priority.
     */
    let nCycles = 5;

    /**
     * The (normal) REP prefix, if used, is REPNZ (0xf2), but either one works....
     */
    if (this.opPrefixes & (X86.OPFLAG.REPZ | X86.OPFLAG.REPNZ)) {
        nReps = this.regECX & maskAddr;
        nDelta = 1;
        if (this.opPrefixes & X86.OPFLAG.REPEAT) nCycles = 4;
    }
    if (nReps--) {
        let port = this.regEDX & 0xffff;
        if (!this.checkIOPM(port, this.sizeData, true)) return;
        let w = this.bus.checkPortInputNotify(port, this.sizeData, this.regLIP - nDelta - 1);
        if (BACKTRACK) {
            this.backTrack.btiMem0 = this.backTrack.btiIO;
            this.backTrack.btiMem1 = this.backTrack.btiIO;
        }
        this.setSOWord(this.segES, this.regEDI & maskAddr, w);
        /**
         * helpFault() throws exceptions now, so inline checks of X86.OPFLAG.FAULT should no longer be necessary.
         *
         *      if (this.opFlags & X86.OPFLAG.FAULT) return;
         */
        this.regEDI = (this.regEDI & ~maskAddr) | ((this.regEDI + ((this.regPS & X86.PS.DF)? -this.sizeData : this.sizeData)) & maskAddr);
        this.regECX = (this.regECX & ~maskAddr) | ((this.regECX - nDelta) & maskAddr);
        this.nStepCycles -= nCycles;
        if (nReps) this.rewindIP();
    }
};

/**
 * op=0x6E (OUTSB) (80186/80188 and up)
 *
 * NOTE: Segment overrides are ignored for this instruction, so we must use segDS instead of segData.
 *
 * @this {CPUx86}
 */
X86.opOUTSb = function()
{
    let nReps = 1;
    let nDelta = 0;
    let maskAddr = this.maskAddr;

    /**
     * NOTE: 5 + 4n is the cycle time for the 80286; the 80186/80188 has different values: 14 cycles for
     * an unrepeated INS, and 8 + 8n for a repeated INS.  TODO: Fix this someday.
     */
    let nCycles = 5;

    /**
     * The (normal) REP prefix, if used, is REPNZ (0xf2), but either one works....
     */
    if (this.opPrefixes & (X86.OPFLAG.REPZ | X86.OPFLAG.REPNZ)) {
        nReps = this.regECX & maskAddr;
        nDelta = 1;
        if (this.opPrefixes & X86.OPFLAG.REPEAT) nCycles = 4;
    }
    if (nReps--) {
        let port = this.regEDX & 0xffff;
        if (!this.checkIOPM(port, 1, false)) return;
        let b = this.getSOByte(this.segDS, this.regESI & maskAddr);
        /**
         * helpFault() throws exceptions now, so inline checks of X86.OPFLAG.FAULT should no longer be necessary.
         *
         *      if (this.opFlags & X86.OPFLAG.FAULT) return;
         */
        if (BACKTRACK) this.backTrack.btiIO = this.backTrack.btiMem0;
        this.bus.checkPortOutputNotify(port, 1, b, this.regLIP - nDelta - 1);
        this.regESI = (this.regESI & ~maskAddr) | ((this.regESI + ((this.regPS & X86.PS.DF)? -1 : 1)) & maskAddr);
        this.regECX = (this.regECX & ~maskAddr) | ((this.regECX - nDelta) & maskAddr);
        this.nStepCycles -= nCycles;
        if (nReps) this.rewindIP();
    }
};

/**
 * op=0x6F (OUTSW) (80186/80188 and up)
 *
 * NOTE: Segment overrides are ignored for this instruction, so we must use segDS instead of segData.
 *
 * @this {CPUx86}
 */
X86.opOUTSw = function()
{
    let nReps = 1;
    let nDelta = 0;
    let maskAddr = this.maskAddr;

    /**
     * NOTE: 5 + 4n is the cycle time for the 80286; the 80186/80188 has different values: 14 cycles for
     * an unrepeated INS, and 8 + 8n for a repeated INS.  TODO: Fix this someday.
     */
    let nCycles = 5;

    /**
     * The (normal) REP prefix, if used, is REPNZ (0xf2), but either one works....
     */
    if (this.opPrefixes & (X86.OPFLAG.REPZ | X86.OPFLAG.REPNZ)) {
        nReps = this.regECX & maskAddr;
        nDelta = 1;
        if (this.opPrefixes & X86.OPFLAG.REPEAT) nCycles = 4;
    }
    if (nReps--) {
        let w = this.getSOWord(this.segDS, this.regESI & maskAddr);
        /**
         * helpFault() throws exceptions now, so inline checks of X86.OPFLAG.FAULT should no longer be necessary.
         *
         *      if (this.opFlags & X86.OPFLAG.FAULT) return;
         */
        let port = this.regEDX & 0xffff;
        if (!this.checkIOPM(port, this.sizeData, false)) return;
        if (BACKTRACK) {
            this.backTrack.btiIO = this.backTrack.btiMem0;
            this.backTrack.btiIO = this.backTrack.btiMem1;
        }
        this.bus.checkPortOutputNotify(port, this.sizeData, w, this.regLIP - nDelta - 1);
        this.regESI = (this.regESI & ~maskAddr) | ((this.regESI + ((this.regPS & X86.PS.DF)? -this.sizeData : this.sizeData)) & maskAddr);
        this.regECX = (this.regECX & ~maskAddr) | ((this.regECX - nDelta) & maskAddr);
        this.nStepCycles -= nCycles;
        if (nReps) this.rewindIP();
    }
};

/**
 * op=0x70 (JO disp)
 *
 * @this {CPUx86}
 */
X86.opJO = function()
{
    let disp = this.getIPDisp();
    if (this.getOF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * op=0x71 (JNO disp)
 *
 * @this {CPUx86}
 */
X86.opJNO = function()
{
    let disp = this.getIPDisp();
    if (!this.getOF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * op=0x72 (JC disp, aka JB disp)
 *
 * @this {CPUx86}
 */
X86.opJC = function()
{
    let disp = this.getIPDisp();
    if (this.getCF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * op=0x73 (JNC disp, aka JAE disp)
 *
 * @this {CPUx86}
 */
X86.opJNC = function()
{
    let disp = this.getIPDisp();
    if (!this.getCF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * op=0x74 (JZ disp)
 *
 * @this {CPUx86}
 */
X86.opJZ = function()
{
    let disp = this.getIPDisp();
    if (this.getZF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * op=0x75 (JNZ disp)
 *
 * @this {CPUx86}
 */
X86.opJNZ = function()
{
    let disp = this.getIPDisp();
    if (!this.getZF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * op=0x76 (JBE disp)
 *
 * @this {CPUx86}
 */
X86.opJBE = function()
{
    let disp = this.getIPDisp();
    if (this.getCF() || this.getZF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * op=0x77 (JNBE disp, JA disp)
 *
 * @this {CPUx86}
 */
X86.opJNBE = function()
{
    let disp = this.getIPDisp();
    if (!this.getCF() && !this.getZF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * op=0x78 (JS disp)
 *
 * @this {CPUx86}
 */
X86.opJS = function()
{
    let disp = this.getIPDisp();
    if (this.getSF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * op=0x79 (JNS disp)
 *
 * @this {CPUx86}
 */
X86.opJNS = function()
{
    let disp = this.getIPDisp();
    if (!this.getSF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * op=0x7A (JP disp)
 *
 * @this {CPUx86}
 */
X86.opJP = function()
{
    let disp = this.getIPDisp();
    if (this.getPF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * op=0x7B (JNP disp)
 *
 * @this {CPUx86}
 */
X86.opJNP = function()
{
    let disp = this.getIPDisp();
    if (!this.getPF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * op=0x7C (JL disp)
 *
 * @this {CPUx86}
 */
X86.opJL = function()
{
    let disp = this.getIPDisp();
    if (!this.getSF() != !this.getOF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * op=0x7D (JNL disp, aka JGE disp)
 *
 * @this {CPUx86}
 */
X86.opJNL = function()
{
    let disp = this.getIPDisp();
    if (!this.getSF() == !this.getOF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * op=0x7E (JLE disp)
 *
 * @this {CPUx86}
 */
X86.opJLE = function()
{
    let disp = this.getIPDisp();
    if (this.getZF() || !this.getSF() != !this.getOF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * op=0x7F (JNLE disp, aka JG disp)
 *
 * @this {CPUx86}
 */
X86.opJNLE = function()
{
    let disp = this.getIPDisp();
    if (!this.getZF() && !this.getSF() == !this.getOF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * op=0x80/0x82 (GRP1 byte,imm8)
 *
 * @this {CPUx86}
 */
X86.opGRP1b = function()
{
    this.decodeModGrpByte.call(this, X86.aOpGrp1b, this.getIPByte);
    this.nStepCycles -= (this.regEAWrite === X86.ADDR_INVALID? 1 : this.cycleCounts.nOpCyclesArithMID);
};

/**
 * op=0x81 (GRP1 word,imm)
 *
 * @this {CPUx86}
 */
X86.opGRP1w = function()
{
    this.decodeModGrpWord.call(this, X86.aOpGrp1w, this.getIPWord);
    this.nStepCycles -= (this.regEAWrite === X86.ADDR_INVALID? 1 : this.cycleCounts.nOpCyclesArithMID);
};

/**
 * op=0x83 (GRP1 word,disp)
 *
 * WARNING: This passes getIPDisp() as the fnSrc parameter, which returns a 32-bit signed value,
 * so the worker functions (ie, the functions listed in aOpGrp1w[]) MUST mask their result with maskData,
 * to avoid setting bits beyond the current operand size.
 *
 * @this {CPUx86}
 */
X86.opGRP1sw = function()
{
    this.decodeModGrpWord.call(this, X86.aOpGrp1w, this.getIPDisp);
    this.nStepCycles -= (this.regEAWrite === X86.ADDR_INVALID? 1 : this.cycleCounts.nOpCyclesArithMID);
};

/**
 * op=0x84 (TEST reg,byte)
 *
 * @this {CPUx86}
 */
X86.opTESTrb = function()
{
    this.decodeModMemByte.call(this, X86.fnTESTb);
};

/**
 * op=0x85 (TEST reg,word)
 *
 * @this {CPUx86}
 */
X86.opTESTrw = function()
{
    this.decodeModMemWord.call(this, X86.fnTESTw);
};

/**
 * op=0x86 (XCHG reg,byte)
 *
 * NOTE: The XCHG instruction is unique in that both src and dst are both read and written;
 * see fnXCHGrb() for how we deal with this special case.
 *
 * @this {CPUx86}
 */
X86.opXCHGrb = function()
{
    /**
     * If the second operand is a register, then the ModRegByte decoder must use separate "get" and
     * "set" assignments, otherwise instructions like "XCHG DH,DL" will end up using a stale DL instead of
     * the updated DL.
     *
     * To be clear, a single assignment like this will fail:
     *
     *      opModRegByteF2: function(fn)
     *      {
     *          this.regEDX = (this.regEDX & 0xff) | (fn.call(this, this.regEDX >> 8, this.regEDX & 0xff) << 8);
     *      }
     *
     * which is why all affected decoders now use separate assignments; eg:
     *
     *      opModRegByteF2: function(fn)
     *      {
     *          let b = fn.call(this, this.regEDX >> 8, this.regEDX & 0xff);
     *          this.regEDX = (this.regEDX & 0xff) | (b << 8);
     *      }
     */
    this.decodeModRegByte.call(this, X86.fnXCHGrb);
};

/**
 * op=0x87 (XCHG reg,word)
 *
 * NOTE: The XCHG instruction is unique in that both src and dst are both read and written;
 * see fnXCHGrw() for how we deal with this special case.
 *
 * @this {CPUx86}
 */
X86.opXCHGrw = function()
{
    this.decodeModRegWord.call(this, X86.fnXCHGrw);
};

/**
 * op=0x88 (MOV byte,reg)
 *
 * @this {CPUx86}
 */
X86.opMOVmb = function()
{
    /**
     * Like other MOV operations, the destination does not need to be read, just written.
     */
    this.opFlags |= X86.OPFLAG.NOREAD;
    this.decodeModMemByte.call(this, X86.fnMOV);
};

/**
 * op=0x89 (MOV word,reg)
 *
 * @this {CPUx86}
 */
X86.opMOVmw = function()
{
    /**
     * Like other MOV operations, the destination does not need to be read, just written.
     */
    this.opFlags |= X86.OPFLAG.NOREAD;
    this.decodeModMemWord.call(this, X86.fnMOV);
};

/**
 * op=0x8A (MOV reg,byte)
 *
 * @this {CPUx86}
 */
X86.opMOVrb = function()
{
    this.decodeModRegByte.call(this, X86.fnMOV);
};

/**
 * op=0x8B (MOV reg,word)
 *
 * @this {CPUx86}
 */
X86.opMOVrw = function()
{
    this.decodeModRegWord.call(this, X86.fnMOV);
};

/**
 * op=0x8C (MOV word,sreg)
 *
 * NOTE: Since the ModRM decoders deal only with general-purpose registers, we rely on our helper
 * function (fnMOVwsr) to select the appropriate segment register and replace the decoder's src operand.
 *
 * @this {CPUx86}
 */
X86.opMOVwsr = function()
{
    /**
     * Like other MOV operations, the destination does not need to be read, just written.
     */
    this.opFlags |= X86.OPFLAG.NOREAD;
    this.decodeModMemWord.call(this, X86.fnMOVwsr);
};

/**
 * op=0x8D (LEA reg,word)
 *
 * @this {CPUx86}
 */
X86.opLEA = function()
{
    this.opFlags |= X86.OPFLAG.NOREAD;
    this.segData = this.segStack = this.segNULL;    // we can't have the EA calculation, if any, "polluted" by segment arithmetic
    this.decodeModRegWord.call(this, X86.fnLEA);
};

/**
 * op=0x8E (MOV sreg,word)
 *
 * NOTE: Since the ModRM decoders deal only with general-purpose registers, we rely on our
 * helper function (fnMOVsrw) to make a note of which general-purpose register will be overwritten,
 * so that we can restore it after moving the updated value to the correct segment register.
 *
 * @this {CPUx86}
 */
X86.opMOVsrw = function()
{
    let sel;
    this.decodeModRegWord.call(this, X86.fnMOVsrw);
    switch ((this.bModRM >> 3) & 0x7) {
    case 0x0:
        sel = this.regEAX;
        this.regEAX = this.regXX;
        this.setES(sel);
        break;
    case 0x1:
        sel = this.regECX;
        this.regECX = this.regXX;
        this.setCS(sel);
        break;
    case 0x2:
        sel = this.regEDX;
        this.regEDX = this.regXX;
        this.setSS(sel);
        break;
    case 0x3:
        sel = this.regEBX;
        this.regEBX = this.regXX;
        this.setDS(sel);
        break;
    case 0x4:
        sel = this.getSP();
        this.setSP(this.regXX);
        if (I386 && this.model >= X86.MODEL_80386) {
            this.setFS(sel);
        } else {
            this.setES(sel);
        }
        break;
    case 0x5:
        sel = this.regEBP;
        this.regEBP = this.regXX;
        if (I386 && this.model >= X86.MODEL_80386) {
            this.setGS(sel);
        } else {
            this.setCS(sel);
        }
        break;
    case 0x6:
        sel = this.regESI;
        this.regESI = this.regXX;
        this.setSS(sel);
        break;
    case 0x7:
        sel = this.regEDI;
        this.regEDI = this.regXX;
        this.setDS(sel);
        break;
    }
};

/**
 * op=0x8F (POP word)
 *
 * @this {CPUx86}
 */
X86.opPOPmw = function()
{
    /**
     * Like other MOV operations, the destination does not need to be read, just written.
     */
    this.opFlags |= X86.OPFLAG.NOREAD;

    /**
     * If the word we're about to pop FROM the stack gets popped INTO a not-present page, this
     * instruction will not be restartable unless we snapshot regLSP first.
     */
    this.opLSP = this.regLSP;

    /**
     * A "clever" instruction like this:
     *
     *      #0117:651C 67668F442408    POP      DWORD [ESP+08]
     *
     * pops the DWORD from the top of the stack and places it at ESP+08, where ESP is the value
     * AFTER the pop, not before.  We used to (incorrectly) pass "popWord" as the fnSrc parameter
     * below; we now pop the word first, saving it in regXX, and then pass "helpSRCxx" as fnSrc,
     * which simply returns the contents of regXX.
     *
     * Also, in case you're wondering, fnPUSHw() (in aOpGrp4w) is the complement to this instruction,
     * but it doesn't require a similar work-around, because a push from memory accesses that memory
     * BEFORE the push, which occurs through our normal ModRM processing.
     */
    this.regXX = this.popWord();

    this.decodeModGrpWord.call(this, X86.aOpGrpPOPw, X86.helpSRCxx);

    this.opLSP = X86.ADDR_INVALID;
};

/**
 * op=0x90 (NOP, aka XCHG AX,AX)
 *
 * @this {CPUx86}
 */
X86.opNOP = function()
{
    this.nStepCycles -= 3;                          // this form of XCHG takes 3 cycles on all CPUs
    /**
     * The following exception is not unique to LOCK NOP on the 80386, but it's the only LOCK exception
     * that seems worth worrying about this point.  See opLOCK() for further discussion.
     */
    if (I386 && (this.opPrefixes & X86.OPFLAG.LOCK) && this.model >= X86.MODEL_80386) {
        X86.helpFault.call(this, X86.EXCEPTION.UD_FAULT, 0);
        return;
    }
};

/**
 * op=0x91 (XCHG AX,CX)
 *
 * @this {CPUx86}
 */
X86.opXCHGCX = function()
{
    let temp = this.regEAX;
    this.regEAX = (I386? (this.regEAX & ~this.maskData) | (this.regECX & this.maskData) : this.regECX);
    this.regECX = (I386? (this.regECX & ~this.maskData) | (temp & this.maskData) : temp);
    if (BACKTRACK) {
        temp = this.backTrack.btiAL; this.backTrack.btiAL = this.backTrack.btiCL; this.backTrack.btiCL = temp;
        temp = this.backTrack.btiAH; this.backTrack.btiAH = this.backTrack.btiCH; this.backTrack.btiCH = temp;
    }
    this.nStepCycles -= 3;                          // this form of XCHG takes 3 cycles on all CPUs
};

/**
 * op=0x92 (XCHG AX,DX)
 *
 * @this {CPUx86}
 */
X86.opXCHGDX = function()
{
    let temp = this.regEAX;
    this.regEAX = (I386? (this.regEAX & ~this.maskData) | (this.regEDX & this.maskData) : this.regEDX);
    this.regEDX = (I386? (this.regEDX & ~this.maskData) | (temp & this.maskData) : temp);
    if (BACKTRACK) {
        temp = this.backTrack.btiAL; this.backTrack.btiAL = this.backTrack.btiDL; this.backTrack.btiDL = temp;
        temp = this.backTrack.btiAH; this.backTrack.btiAH = this.backTrack.btiDH; this.backTrack.btiDH = temp;
    }
    this.nStepCycles -= 3;                          // this form of XCHG takes 3 cycles on all CPUs
};

/**
 * op=0x93 (XCHG AX,BX)
 *
 * @this {CPUx86}
 */
X86.opXCHGBX = function()
{
    let temp = this.regEAX;
    this.regEAX = (I386? (this.regEAX & ~this.maskData) | (this.regEBX & this.maskData) : this.regEBX);
    this.regEBX = (I386? (this.regEBX & ~this.maskData) | (temp & this.maskData) : temp);
    if (BACKTRACK) {
        temp = this.backTrack.btiAL; this.backTrack.btiAL = this.backTrack.btiBL; this.backTrack.btiBL = temp;
        temp = this.backTrack.btiAH; this.backTrack.btiAH = this.backTrack.btiBH; this.backTrack.btiBH = temp;
    }
    this.nStepCycles -= 3;                          // this form of XCHG takes 3 cycles on all CPUs
};

/**
 * op=0x94 (XCHG AX,SP)
 *
 * @this {CPUx86}
 */
X86.opXCHGSP = function()
{
    let temp = this.regEAX;
    let regESP = this.getSP();
    this.regEAX = (I386? (this.regEAX & ~this.maskData) | (regESP & this.maskData) : regESP);
    this.setSP((I386? (regESP & ~this.maskData) | (temp & this.maskData) : temp));
    if (BACKTRACK) this.backTrack.btiAL = this.backTrack.btiAH = 0;
    this.nStepCycles -= 3;                          // this form of XCHG takes 3 cycles on all CPUs
};

/**
 * op=0x95 (XCHG AX,BP)
 *
 * @this {CPUx86}
 */
X86.opXCHGBP = function()
{
    let temp = this.regEAX;
    this.regEAX = (I386? (this.regEAX & ~this.maskData) | (this.regEBP & this.maskData) : this.regEBP);
    this.regEBP = (I386? (this.regEBP & ~this.maskData) | (temp & this.maskData) : temp);
    if (BACKTRACK) {
        temp = this.backTrack.btiAL; this.backTrack.btiAL = this.backTrack.btiBPLo; this.backTrack.btiBPLo = temp;
        temp = this.backTrack.btiAH; this.backTrack.btiAH = this.backTrack.btiBPHi; this.backTrack.btiBPHi = temp;
    }
    this.nStepCycles -= 3;                          // this form of XCHG takes 3 cycles on all CPUs
};

/**
 * op=0x96 (XCHG AX,SI)
 *
 * @this {CPUx86}
 */
X86.opXCHGSI = function()
{
    let temp = this.regEAX;
    this.regEAX = (I386? (this.regEAX & ~this.maskData) | (this.regESI & this.maskData) : this.regESI);
    this.regESI = (I386? (this.regESI & ~this.maskData) | (temp & this.maskData) : temp);
    if (BACKTRACK) {
        temp = this.backTrack.btiAL; this.backTrack.btiAL = this.backTrack.btiSILo; this.backTrack.btiSILo = temp;
        temp = this.backTrack.btiAH; this.backTrack.btiAH = this.backTrack.btiSIHi; this.backTrack.btiSIHi = temp;
    }
    this.nStepCycles -= 3;                          // this form of XCHG takes 3 cycles on all CPUs
};

/**
 * op=0x97 (XCHG AX,DI)
 *
 * @this {CPUx86}
 */
X86.opXCHGDI = function()
{
    let temp = this.regEAX;
    this.regEAX = (I386? (this.regEAX & ~this.maskData) | (this.regEDI & this.maskData) : this.regEDI);
    this.regEDI = (I386? (this.regEDI & ~this.maskData) | (temp & this.maskData) : temp);
    if (BACKTRACK) {
        temp = this.backTrack.btiAL; this.backTrack.btiAL = this.backTrack.btiDILo; this.backTrack.btiDILo = temp;
        temp = this.backTrack.btiAH; this.backTrack.btiAH = this.backTrack.btiDIHi; this.backTrack.btiDIHi = temp;
    }
    this.nStepCycles -= 3;                          // this form of XCHG takes 3 cycles on all CPUs
};

/**
 * op=0x98 (CBW/CWDE)
 *
 * NOTE: The 16-bit form (CBW) sign-extends AL into AX, whereas the 32-bit form (CWDE) sign-extends AX into EAX;
 * CWDE is similar to CWD, except that the destination is EAX rather than DX:AX.
 *
 * @this {CPUx86}
 */
X86.opCBW = function()
{
    if (this.sizeData == 2) {   // CBW
        this.regEAX = (this.regEAX & ~0xffff) | (((this.regEAX << 24) >> 24) & 0xffff);
        if (BACKTRACK) this.backTrack.btiAH = this.backTrack.btiAL;
    }
    else {                      // CWDE
        this.regEAX = ((this.regEAX << 16) >> 16);
    }
    this.nStepCycles -= 2;                          // CBW takes 2 cycles on all CPUs through 80286
};

/**
 * op=0x99 (CWD/CDQ)
 *
 * NOTE: The 16-bit form (CWD) sign-extends AX, producing a 32-bit result in DX:AX, while the 32-bit form (CDQ)
 * sign-extends EAX, producing a 64-bit result in EDX:EAX.
 *
 * @this {CPUx86}
 */
X86.opCWD = function()
{
    if (this.sizeData == 2) {   // CWD
        this.regEDX = (this.regEDX & ~0xffff) | ((this.regEAX & 0x8000)? 0xffff : 0);
        if (BACKTRACK) this.backTrack.btiDL = this.backTrack.btiDH = this.backTrack.btiAH;
    }
    else {                      // CDQ
        this.regEDX = (this.regEAX & (0x80000000|0))? -1 : 0;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesCWD;
};

/**
 * op=0x9A (CALL seg:off)
 *
 * @this {CPUx86}
 */
X86.opCALLF = function()
{
    X86.helpCALLF.call(this, this.getIPWord(), this.getIPShort());
    this.nStepCycles -= this.cycleCounts.nOpCyclesCallF;
};

/**
 * op=0x9B (WAIT)
 *
 * @this {CPUx86}
 */
X86.opWAIT = function()
{
    if (!this.fpu || !this.fpu.opWAIT()) {
        this.nStepCycles -= 3;     // FPUx86.opWAIT() is required to charge some number of cycles if it returns true
    }
};

/**
 * op=0x9C (PUSHF/PUSHFD)
 *
 * @this {CPUx86}
 */
X86.opPUSHF = function()
{
    /**
     * TODO: Consider swapping out this function whenever setProtMode() changes the mode to V86-mode.
     */
    let regPS = this.getPS();
    if (I386) {
        if ((regPS & X86.PS.VM) && this.nIOPL < 3) {
            if (DEBUG) this.printf(MESSAGE.ADDR, "PUSHF in v86-mode (IOPL < 3)\n");
            X86.helpFault.call(this, X86.EXCEPTION.GP_FAULT, 0);
            return;
        }
        /**
         * It doesn't matter whether this is PUSHF or PUSHFD: the VM and RF flags are never pushed, so
         * we should always clear them.  NOTE: This contradicts what the "INTEL 80386 PROGRAMMER'S REFERENCE
         * MANUAL 1986" says on page 81 (which we assume is wrong):
         *
         *      SYSTEMS FLAGS (INCLUDING THE IOPL FIELD, AND THE VM, RF, AND IF FLAGS) ARE PUSHED AND ARE
         *      VISIBLE TO APPLICATIONS PROGRAMS. HOWEVER, WHEN AN APPLICATIONS PROGRAM POPS THE FLAGS,
         *      THESE ITEMS ARE NOT CHANGED, REGARDLESS OF THE VALUES POPPED INTO THEM.
         *
         * This does, however, beg the question: how does code running in V86-mode detect that's in V86-mode
         * and not real-mode?  By using the SMSW instruction and checking the PE (protected-mode enabled) bit.
         * The SMSW instruction returns a subset of the CR0 bits, and unlike the MOV reg,CR0 instruction, is
         * allowed in V86-mode.  See fnSMSW() for more information.
         */
        regPS &= ~(X86.PS.VM | X86.PS.RF);
    }
    this.pushWord(regPS);
    this.nStepCycles -= this.cycleCounts.nOpCyclesPushReg;
};

/**
 * op=0x9D (POPF/POPFD)
 *
 * @this {CPUx86}
 */
X86.opPOPF = function()
{
    /**
     * TODO: Consider swapping out this function whenever setProtMode() changes the mode to V86-mode.
     */
    if (I386 && (this.regPS & X86.PS.VM) && this.nIOPL < 3) {
        if (DEBUG) this.printf(MESSAGE.ADDR, "POPF in v86-mode (IOPL < 3)\n");
        X86.helpFault.call(this, X86.EXCEPTION.GP_FAULT, 0);
        return;
    }
    /**
     * Regardless of mode, VM and RF (the only defined EFLAGS bit above bit 15) are never changed by POPFD.
     */
    let newPS = this.popWord();
    if (I386) newPS = (newPS & 0xffff) | (this.regPS & ~0xffff);
    this.setPS(newPS);
    /**
     * NOTE: I'm assuming that neither POPF nor IRET are required to set NOINTR like STI does.
     */
    this.nStepCycles -= this.cycleCounts.nOpCyclesPopReg;
};

/**
 * op=0x9E (SAHF)
 *
 * @this {CPUx86}
 */
X86.opSAHF = function()
{
    /**
     * NOTE: While it make seem more efficient to do this:
     *
     *      this.setPS((this.getPS() & ~X86.PS_SAHF) | ((this.regEAX >> 8) & X86.PS_SAHF));
     *
     * getPS() forces any "cached" flags to be resolved first, and setPS() must do extra work above
     * and beyond setting the arithmetic and logical flags, so on balance, the code below may be more
     * efficient, and may also avoid unexpected side-effects of updating the entire PS register.
     */
    let ah = (this.regEAX >> 8) & 0xff;
    if (ah & X86.PS.CF) this.setCF(); else this.clearCF();
    if (ah & X86.PS.PF) this.setPF(); else this.clearPF();
    if (ah & X86.PS.AF) this.setAF(); else this.clearAF();
    if (ah & X86.PS.ZF) this.setZF(); else this.clearZF();
    if (ah & X86.PS.SF) this.setSF(); else this.clearSF();
    this.nStepCycles -= this.cycleCounts.nOpCyclesLAHF;
    this.assert((this.getPS() & X86.PS_SAHF) == (ah & X86.PS_SAHF));
};

/**
 * op=0x9F (LAHF)
 *
 * @this {CPUx86}
 */
X86.opLAHF = function()
{
    /**
     * Apparently, this simply uses the low 8 bits of PS as-is (ie, we don't need to mask with PS_SAHF).
     */
    this.regEAX = (this.regEAX & ~0xff00) | (this.getPS() & 0xff) << 8;
    this.nStepCycles -= this.cycleCounts.nOpCyclesLAHF;
};

/**
 * op=0xA0 (MOV AL,mem)
 *
 * @this {CPUx86}
 */
X86.opMOVALm = function()
{
    this.regEAX = (this.regEAX & ~0xff) | this.getSOByte(this.segData, this.getIPAddr());
    if (BACKTRACK) this.backTrack.btiAL = this.backTrack.btiMem0;
    this.nStepCycles -= this.cycleCounts.nOpCyclesMovAM;
};

/**
 * op=0xA1 (MOV [E]AX,mem)
 *
 * @this {CPUx86}
 */
X86.opMOVAXm = function()
{
    this.regEAX = (this.regEAX & ~this.maskData) | this.getSOWord(this.segData, this.getIPAddr());
    if (BACKTRACK) {
        this.backTrack.btiAL = this.backTrack.btiMem0; this.backTrack.btiAH = this.backTrack.btiMem1;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesMovAM;
};

/**
 * op=0xA2 (MOV mem,AL)
 *
 * @this {CPUx86}
 */
X86.opMOVmAL = function()
{
    if (BACKTRACK) this.backTrack.btiMem0 = this.backTrack.btiAL;
    /**
     * setSOByte() truncates the value as appropriate
     */
    this.setSOByte(this.segData, this.getIPAddr(), this.regEAX);
    this.nStepCycles -= this.cycleCounts.nOpCyclesMovMA;
};

/**
 * op=0xA3 (MOV mem,AX)
 *
 * @this {CPUx86}
 */
X86.opMOVmAX = function()
{
    if (BACKTRACK) {
        this.backTrack.btiMem0 = this.backTrack.btiAL; this.backTrack.btiMem1 = this.backTrack.btiAH;
    }
    /**
     * setSOWord() truncates the value as appropriate
     */
    this.setSOWord(this.segData, this.getIPAddr(), this.regEAX);
    this.nStepCycles -= this.cycleCounts.nOpCyclesMovMA;
};

/**
 * op=0xA4 (MOVSB)
 *
 * @this {CPUx86}
 */
X86.opMOVSb = function()
{
    let nReps = 1;
    let nDelta = 0;
    let maskAddr = this.maskAddr;

    let nCycles = this.cycleCounts.nOpCyclesMovS;
    if (this.opPrefixes & (X86.OPFLAG.REPZ | X86.OPFLAG.REPNZ)) {
        nReps = this.regECX & maskAddr;
        nDelta = 1;
        nCycles = this.cycleCounts.nOpCyclesMovSrn;
        if (!(this.opPrefixes & X86.OPFLAG.REPEAT)) this.nStepCycles -= this.cycleCounts.nOpCyclesMovSr0;
    }
    if (nReps--) {
        this.setSOByte(this.segES, this.regEDI & maskAddr, this.getSOByte(this.segData, this.regESI & maskAddr));
        /**
         * helpFault() throws exceptions now, so inline checks of X86.OPFLAG.FAULT should no longer be necessary.
         *
         *      if (this.opFlags & X86.OPFLAG.FAULT) return;
         */
        let nInc = ((this.regPS & X86.PS.DF)? -1 : 1);
        this.regESI = (this.regESI & ~maskAddr) | ((this.regESI + nInc) & maskAddr);
        this.regEDI = (this.regEDI & ~maskAddr) | ((this.regEDI + nInc) & maskAddr);
        this.nStepCycles -= nCycles;
        this.regECX = (this.regECX & ~maskAddr) | ((this.regECX - nDelta) & maskAddr);
        if (nReps) this.rewindIP(true);
    }
};

/**
 * op=0xA5 (MOVSW)
 *
 * @this {CPUx86}
 */
X86.opMOVSw = function()
{
    let nReps = 1;
    let nDelta = 0;
    let maskAddr = this.maskAddr;

    let nCycles = this.cycleCounts.nOpCyclesMovS;
    if (this.opPrefixes & (X86.OPFLAG.REPZ | X86.OPFLAG.REPNZ)) {
        nReps = this.regECX & maskAddr;
        nDelta = 1;
        nCycles = this.cycleCounts.nOpCyclesMovSrn;
        if (!(this.opPrefixes & X86.OPFLAG.REPEAT)) this.nStepCycles -= this.cycleCounts.nOpCyclesMovSr0;
    }
    if (nReps--) {
        this.setSOWord(this.segES, this.regEDI & maskAddr, this.getSOWord(this.segData, this.regESI & maskAddr));
        /**
         * helpFault() throws exceptions now, so inline checks of X86.OPFLAG.FAULT should no longer be necessary.
         *
         *      if (this.opFlags & X86.OPFLAG.FAULT) return;
         */
        let nInc = ((this.regPS & X86.PS.DF)? -this.sizeData : this.sizeData);
        this.regESI = (this.regESI & ~maskAddr) | ((this.regESI + nInc) & maskAddr);
        this.regEDI = (this.regEDI & ~maskAddr) | ((this.regEDI + nInc) & maskAddr);
        this.nStepCycles -= nCycles;
        this.regECX = (this.regECX & ~maskAddr) | ((this.regECX - nDelta) & maskAddr);
        if (nReps) this.rewindIP(true);
    }
};

/**
 * op=0xA6 (CMPSB)
 *
 * @this {CPUx86}
 */
X86.opCMPSb = function()
{
    let nReps = 1;
    let nDelta = 0;
    let maskAddr = this.maskAddr;

    let nCycles = this.cycleCounts.nOpCyclesCmpS;
    if (this.opPrefixes & (X86.OPFLAG.REPZ | X86.OPFLAG.REPNZ)) {
        nReps = this.regECX & maskAddr;
        nDelta = 1;
        nCycles = this.cycleCounts.nOpCyclesCmpSrn;
        if (!(this.opPrefixes & X86.OPFLAG.REPEAT)) this.nStepCycles -= this.cycleCounts.nOpCyclesCmpSr0;
    }
    if (nReps--) {
        let bDst = this.getEAByte(this.segData, this.regESI);
        let bSrc = this.getEAByte(this.segES, this.regEDI);
        this.regEAWrite = this.regEA;           // TODO: Is this necessary?
        /**
         * helpFault() throws exceptions now, so inline checks of X86.OPFLAG.FAULT should no longer be necessary.
         *
         *      if (this.opFlags & X86.OPFLAG.FAULT) return;
         */
        X86.fnCMPb.call(this, bDst, bSrc);
        let nInc = ((this.regPS & X86.PS.DF)? -1 : 1);
        this.regESI = (this.regESI & ~maskAddr) | ((this.regESI + nInc) & maskAddr);
        this.regEDI = (this.regEDI & ~maskAddr) | ((this.regEDI + nInc) & maskAddr);
        this.regECX = (this.regECX & ~maskAddr) | ((this.regECX - nDelta) & maskAddr);
        /**
         * NOTE: As long as we're calling fnCMPb(), all our cycle times must be reduced by nOpCyclesArithRM
         */
        this.nStepCycles -= nCycles - this.cycleCounts.nOpCyclesArithRM;
        /**
         * Repetition continues while ZF matches bit 0 of the REP prefix.  getZF() returns 0x40 if ZF is
         * set, and OP_REPZ (which represents the REP prefix whose bit 0 is set) is 0x40 as well, so when those
         * two values are equal, we must continue.
         */
        if (nReps && this.getZF() == (this.opPrefixes & X86.OPFLAG.REPZ)) this.rewindIP(true);
    }
};

/**
 * op=0xA7 (CMPSW)
 *
 * @this {CPUx86}
 */
X86.opCMPSw = function()
{
    let nReps = 1;
    let nDelta = 0;
    let maskAddr = this.maskAddr;

    let nCycles = this.cycleCounts.nOpCyclesCmpS;
    if (this.opPrefixes & (X86.OPFLAG.REPZ | X86.OPFLAG.REPNZ)) {
        nReps = this.regECX & maskAddr;
        nDelta = 1;
        nCycles = this.cycleCounts.nOpCyclesCmpSrn;
        if (!(this.opPrefixes & X86.OPFLAG.REPEAT)) this.nStepCycles -= this.cycleCounts.nOpCyclesCmpSr0;
    }
    if (nReps--) {
        let wDst = this.getEAWord(this.segData, this.regESI & maskAddr);
        let wSrc = this.getEAWord(this.segES, this.regEDI & maskAddr);
        this.regEAWrite = this.regEA;           // TODO: Is this necessary?
        /**
         * helpFault() throws exceptions now, so inline checks of X86.OPFLAG.FAULT should no longer be necessary.
         *
         *      if (this.opFlags & X86.OPFLAG.FAULT) return;
         */
        X86.fnCMPw.call(this, wDst, wSrc);
        let nInc = ((this.regPS & X86.PS.DF)? -this.sizeData : this.sizeData);
        this.regESI = (this.regESI & ~maskAddr) | ((this.regESI + nInc) & maskAddr);
        this.regEDI = (this.regEDI & ~maskAddr) | ((this.regEDI + nInc) & maskAddr);
        this.regECX = (this.regECX & ~maskAddr) | ((this.regECX - nDelta) & maskAddr);
        /**
         * NOTE: As long as we're calling fnCMPw(), all our cycle times must be reduced by nOpCyclesArithRM
         */
        this.nStepCycles -= nCycles - this.cycleCounts.nOpCyclesArithRM;
        /**
         * Repetition continues while ZF matches bit 0 of the REP prefix.  getZF() returns 0x40 if ZF is
         * set, and OP_REPZ (which represents the REP prefix whose bit 0 is set) is 0x40 as well, so when those
         * two values are equal, we must continue.
         */
        if (nReps && this.getZF() == (this.opPrefixes & X86.OPFLAG.REPZ)) this.rewindIP(true);
    }
};

/**
 * op=0xA8 (TEST AL,imm8)
 *
 * @this {CPUx86}
 */
X86.opTESTALb = function()
{
    this.setLogicResult(this.regEAX & this.getIPByte(), X86.RESULT.BYTE);
    this.nStepCycles -= this.cycleCounts.nOpCyclesAAA;
};

/**
 * op=0xA9 (TEST [E]AX,imm)
 *
 * @this {CPUx86}
 */
X86.opTESTAX = function()
{
    this.setLogicResult(this.regEAX & this.getIPWord(), this.typeData);
    this.nStepCycles -= this.cycleCounts.nOpCyclesAAA;
};

/**
 * op=0xAA (STOSB)
 *
 * NOTES: Segment overrides are ignored for this instruction, so we must use segES instead of segData.
 *
 * @this {CPUx86}
 */
X86.opSTOSb = function()
{
    let nReps = 1;
    let nDelta = 0;
    let maskAddr = this.maskAddr;

    let nCycles = this.cycleCounts.nOpCyclesStoS;
    if (this.opPrefixes & (X86.OPFLAG.REPZ | X86.OPFLAG.REPNZ)) {
        nReps = this.regECX & maskAddr;
        nDelta = 1;
        nCycles = this.cycleCounts.nOpCyclesStoSrn;
        if (!(this.opPrefixes & X86.OPFLAG.REPEAT)) this.nStepCycles -= this.cycleCounts.nOpCyclesStoSr0;
    }
    if (nReps--) {
        this.setSOByte(this.segES, this.regEDI & maskAddr, this.regEAX);
        /**
         * helpFault() throws exceptions now, so inline checks of X86.OPFLAG.FAULT should no longer be necessary.
         *
         *      if (this.opFlags & X86.OPFLAG.FAULT) return;
         */
        if (BACKTRACK) this.backTrack.btiMem0 = this.backTrack.btiAL;

        this.regECX = (this.regECX & ~maskAddr) | ((this.regECX - nDelta) & maskAddr);

        /**
         * Implement 80386 B1 Errata #7, to the extent that Windows 95 checked for it.  This test doesn't
         * detect every possible variation (for example, the ADDRESS override on the next instruction, if
         * it exists, may not be the first prefix byte), but it's adequate for our limited purpose.
         *
         * Note that this code alters maskAddr AFTER it's been used to update ECX, because in the case
         * of STOS, the errata reportedly affects only EDI.  The other instructions mentioned in the errata
         * trash different registers, so read the errata carefully.
         *
         * TODO: Extend this errata to STOSW, as well as MOVSB, MOVSW, INSB, and INSW.  Also, verify the
         * extent to which this errata existed on earlier 80386 steppings (I'm currently assuming A0-B1).
         */
        if (this.stepping >= X86.STEPPING_80386_A0 && this.stepping <= X86.STEPPING_80386_B2) {
            if (!(this.opPrefixes & X86.OPFLAG.ADDRSIZE) != (this.getByte(this.regLIP) != X86.OPCODE.AS)) {
                maskAddr ^= (0xffff0000|0);
            }
        }
        this.regEDI = (this.regEDI & ~maskAddr) | ((this.regEDI + ((this.regPS & X86.PS.DF)? -1 : 1)) & maskAddr);

        this.nStepCycles -= nCycles;
        if (nReps) this.rewindIP();
    }
};

/**
 * op=0xAB (STOSW)
 *
 * NOTES: Segment overrides are ignored for this instruction, so we must use segES instead of segData.
 *
 * @this {CPUx86}
 */
X86.opSTOSw = function()
{
    let nReps = 1;
    let nDelta = 0;
    let maskAddr = this.maskAddr;

    let nCycles = this.cycleCounts.nOpCyclesStoS;
    if (this.opPrefixes & (X86.OPFLAG.REPZ | X86.OPFLAG.REPNZ)) {
        nReps = this.regECX & maskAddr;
        nDelta = 1;
        nCycles = this.cycleCounts.nOpCyclesStoSrn;
        if (!(this.opPrefixes & X86.OPFLAG.REPEAT)) this.nStepCycles -= this.cycleCounts.nOpCyclesStoSr0;
    }
    if (nReps--) {
        this.setSOWord(this.segES, this.regEDI & maskAddr, this.regEAX);
        /**
         * helpFault() throws exceptions now, so inline checks of X86.OPFLAG.FAULT should no longer be necessary.
         *
         *      if (this.opFlags & X86.OPFLAG.FAULT) return;
         */
        if (BACKTRACK) {
            this.backTrack.btiMem0 = this.backTrack.btiAL; this.backTrack.btiMem1 = this.backTrack.btiAH;
        }
        this.regEDI = (this.regEDI & ~maskAddr) | ((this.regEDI + ((this.regPS & X86.PS.DF)? -this.sizeData : this.sizeData)) & maskAddr);
        this.regECX = (this.regECX & ~maskAddr) | ((this.regECX - nDelta) & maskAddr);
        this.nStepCycles -= nCycles;
        if (nReps) this.rewindIP();
    }
};

/**
 * op=0xAC (LODSB)
 *
 * @this {CPUx86}
 */
X86.opLODSb = function()
{
    let nReps = 1;
    let nDelta = 0;
    let maskAddr = this.maskAddr;

    let nCycles = this.cycleCounts.nOpCyclesLodS;
    if (this.opPrefixes & (X86.OPFLAG.REPZ | X86.OPFLAG.REPNZ)) {
        nReps = this.regECX & maskAddr;
        nDelta = 1;
        nCycles = this.cycleCounts.nOpCyclesLodSrn;
        if (!(this.opPrefixes & X86.OPFLAG.REPEAT)) this.nStepCycles -= this.cycleCounts.nOpCyclesLodSr0;
    }
    if (nReps--) {
        let b = this.getSOByte(this.segData, this.regESI & maskAddr);
        /**
         * helpFault() throws exceptions now, so inline checks of X86.OPFLAG.FAULT should no longer be necessary.
         *
         *      if (this.opFlags & X86.OPFLAG.FAULT) return;
         */
        this.regEAX = (this.regEAX & ~0xff) | b;
        if (BACKTRACK) this.backTrack.btiAL = this.backTrack.btiMem0;
        this.regESI = (this.regESI & ~maskAddr) | ((this.regESI + ((this.regPS & X86.PS.DF)? -1 : 1)) & maskAddr);
        this.regECX = (this.regECX & ~maskAddr) | ((this.regECX - nDelta) & maskAddr);
        this.nStepCycles -= nCycles;
        if (nReps) this.rewindIP(true);
    }
};

/**
 * op=0xAD (LODSW)
 *
 * @this {CPUx86}
 */
X86.opLODSw = function()
{
    let nReps = 1;
    let nDelta = 0;
    let maskAddr = this.maskAddr;

    let nCycles = this.cycleCounts.nOpCyclesLodS;
    if (this.opPrefixes & (X86.OPFLAG.REPZ | X86.OPFLAG.REPNZ)) {
        nReps = this.regECX & maskAddr;
        nDelta = 1;
        nCycles = this.cycleCounts.nOpCyclesLodSrn;
        if (!(this.opPrefixes & X86.OPFLAG.REPEAT)) this.nStepCycles -= this.cycleCounts.nOpCyclesLodSr0;
    }
    if (nReps--) {
        let w = this.getSOWord(this.segData, this.regESI & maskAddr);
        /**
         * helpFault() throws exceptions now, so inline checks of X86.OPFLAG.FAULT should no longer be necessary.
         *
         *      if (this.opFlags & X86.OPFLAG.FAULT) return;
         */
        this.regEAX = (this.regEAX & ~this.maskData) | w;
        if (BACKTRACK) {
            this.backTrack.btiAL = this.backTrack.btiMem0; this.backTrack.btiAH = this.backTrack.btiMem1;
        }
        this.regESI = (this.regESI & ~maskAddr) | ((this.regESI + ((this.regPS & X86.PS.DF)? -this.sizeData : this.sizeData)) & maskAddr);
        this.regECX = (this.regECX & ~maskAddr) | ((this.regECX - nDelta) & maskAddr);
        this.nStepCycles -= nCycles;
        if (nReps) this.rewindIP(true);
    }
};

/**
 * op=0xAE (SCASB)
 *
 * @this {CPUx86}
 */
X86.opSCASb = function()
{
    let nReps = 1;
    let nDelta = 0;
    let maskAddr = this.maskAddr;

    let nCycles = this.cycleCounts.nOpCyclesScaS;
    if (this.opPrefixes & (X86.OPFLAG.REPZ | X86.OPFLAG.REPNZ)) {
        nReps = this.regECX & maskAddr;
        nDelta = 1;
        nCycles = this.cycleCounts.nOpCyclesScaSrn;
        if (!(this.opPrefixes & X86.OPFLAG.REPEAT)) this.nStepCycles -= this.cycleCounts.nOpCyclesScaSr0;
    }
    if (nReps--) {
        let bDst = this.regEAX & 0xff;
        let bSrc = this.getEAByte(this.segES, this.regEDI);
        this.regEAWrite = this.regEA;           // TODO: Is this necessary?
        X86.fnCMPb.call(this, bDst, bSrc);
        /**
         * helpFault() throws exceptions now, so inline checks of X86.OPFLAG.FAULT should no longer be necessary.
         *
         *      if (this.opFlags & X86.OPFLAG.FAULT) return;
         */
        this.regEDI = (this.regEDI & ~maskAddr) | ((this.regEDI + ((this.regPS & X86.PS.DF)? -1 : 1)) & maskAddr);
        this.regECX = (this.regECX & ~maskAddr) | ((this.regECX - nDelta) & maskAddr);
        /**
         * NOTE: As long as we're calling fnCMPb(), all our cycle times must be reduced by nOpCyclesArithRM
         */
        this.nStepCycles -= nCycles - this.cycleCounts.nOpCyclesArithRM;
        /**
         * Repetition continues while ZF matches bit 0 of the REP prefix.  getZF() returns 0x40 if ZF is
         * set, and OP_REPZ (which represents the REP prefix whose bit 0 is set) is 0x40 as well, so when those
         * two values are equal, we must continue.
         */
        if (nReps && this.getZF() == (this.opPrefixes & X86.OPFLAG.REPZ)) this.rewindIP();
    }
};

/**
 * op=0xAF (SCASW)
 *
 * @this {CPUx86}
 */
X86.opSCASw = function()
{
    let nReps = 1;
    let nDelta = 0;
    let maskAddr = this.maskAddr;

    let nCycles = this.cycleCounts.nOpCyclesScaS;
    if (this.opPrefixes & (X86.OPFLAG.REPZ | X86.OPFLAG.REPNZ)) {
        nReps = this.regECX & maskAddr;
        nDelta = 1;
        nCycles = this.cycleCounts.nOpCyclesScaSrn;
        if (!(this.opPrefixes & X86.OPFLAG.REPEAT)) this.nStepCycles -= this.cycleCounts.nOpCyclesScaSr0;
    }
    if (nReps--) {
        let wDst = this.regEAX & this.maskData;
        let wSrc = this.getEAWord(this.segES, this.regEDI & maskAddr);
        this.regEAWrite = this.regEA;           // TODO: Is this necessary?
        X86.fnCMPw.call(this, wDst, wSrc);
        /**
         * helpFault() throws exceptions now, so inline checks of X86.OPFLAG.FAULT should no longer be necessary.
         *
         *      if (this.opFlags & X86.OPFLAG.FAULT) return;
         */
        this.regEDI = (this.regEDI & ~maskAddr) | ((this.regEDI + ((this.regPS & X86.PS.DF)? -this.sizeData : this.sizeData)) & maskAddr);
        this.regECX = (this.regECX & ~maskAddr) | ((this.regECX - nDelta) & maskAddr);
        /**
         * NOTE: As long as we're calling fnCMPw(), all our cycle times must be reduced by nOpCyclesArithRM
         */
        this.nStepCycles -= nCycles - this.cycleCounts.nOpCyclesArithRM;
        /**
         * Repetition continues while ZF matches bit 0 of the REP prefix.  getZF() returns 0x40 if ZF is
         * set, and OP_REPZ (which represents the REP prefix whose bit 0 is set) is 0x40 as well, so when those
         * two values are equal, we must continue.
         */
        if (nReps && this.getZF() == (this.opPrefixes & X86.OPFLAG.REPZ)) this.rewindIP();
    }
};

/**
 * op=0xB0 (MOV AL,imm8)
 *
 * @this {CPUx86}
 */
X86.opMOVALb = function()
{
    this.regEAX = (this.regEAX & ~0xff) | this.getIPByte();
    if (BACKTRACK) this.backTrack.btiAL = this.backTrack.btiMem0;
    this.nStepCycles -= this.cycleCounts.nOpCyclesLAHF;
};

/**
 * op=0xB1 (MOV CL,imm8)
 *
 * @this {CPUx86}
 */
X86.opMOVCLb = function()
{
    this.regECX = (this.regECX & ~0xff) | this.getIPByte();
    if (BACKTRACK) this.backTrack.btiCL = this.backTrack.btiMem0;
    this.nStepCycles -= this.cycleCounts.nOpCyclesLAHF;
};

/**
 * op=0xB2 (MOV DL,imm8)
 *
 * @this {CPUx86}
 */
X86.opMOVDLb = function()
{
    this.regEDX = (this.regEDX & ~0xff) | this.getIPByte();
    if (BACKTRACK) this.backTrack.btiDL = this.backTrack.btiMem0;
    this.nStepCycles -= this.cycleCounts.nOpCyclesLAHF;
};

/**
 * op=0xB3 (MOV BL,imm8)
 *
 * @this {CPUx86}
 */
X86.opMOVBLb = function()
{
    this.regEBX = (this.regEBX & ~0xff) | this.getIPByte();
    if (BACKTRACK) this.backTrack.btiBL = this.backTrack.btiMem0;
    this.nStepCycles -= this.cycleCounts.nOpCyclesLAHF;
};

/**
 * op=0xB4 (MOV AH,imm8)
 *
 * @this {CPUx86}
 */
X86.opMOVAHb = function()
{
    this.regEAX = (this.regEAX & ~0xff00) | (this.getIPByte() << 8);
    if (BACKTRACK) this.backTrack.btiAH = this.backTrack.btiMem0;
    this.nStepCycles -= this.cycleCounts.nOpCyclesLAHF;
};

/**
 * op=0xB5 (MOV CH,imm8)
 *
 * @this {CPUx86}
 */
X86.opMOVCHb = function()
{
    this.regECX = (this.regECX & ~0xff00) | (this.getIPByte() << 8);
    if (BACKTRACK) this.backTrack.btiCH = this.backTrack.btiMem0;
    this.nStepCycles -= this.cycleCounts.nOpCyclesLAHF;
};

/**
 * op=0xB6 (MOV DH,imm8)
 *
 * @this {CPUx86}
 */
X86.opMOVDHb = function()
{
    this.regEDX = (this.regEDX & ~0xff00) | (this.getIPByte() << 8);
    if (BACKTRACK) this.backTrack.btiDH = this.backTrack.btiMem0;
    this.nStepCycles -= this.cycleCounts.nOpCyclesLAHF;
};

/**
 * op=0xB7 (MOV BH,imm8)
 *
 * @this {CPUx86}
 */
X86.opMOVBHb = function()
{
    this.regEBX = (this.regEBX & ~0xff00) | (this.getIPByte() << 8);
    if (BACKTRACK) this.backTrack.btiBH = this.backTrack.btiMem0;
    this.nStepCycles -= this.cycleCounts.nOpCyclesLAHF;
};

/**
 * op=0xB8 (MOV [E]AX,imm)
 *
 * @this {CPUx86}
 */
X86.opMOVAX = function()
{
    this.regEAX = (this.regEAX & ~this.maskData) | this.getIPWord();
    if (BACKTRACK) {
        this.backTrack.btiAL = this.backTrack.btiMem0; this.backTrack.btiAH = this.backTrack.btiMem1;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesLAHF;
};

/**
 * op=0xB9 (MOV [E]CX,imm)
 *
 * @this {CPUx86}
 */
X86.opMOVCX = function()
{
    this.regECX = (this.regECX & ~this.maskData) | this.getIPWord();
    if (BACKTRACK) {
        this.backTrack.btiCL = this.backTrack.btiMem0; this.backTrack.btiCH = this.backTrack.btiMem1;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesLAHF;
};

/**
 * op=0xBA (MOV [E]DX,imm)
 *
 * @this {CPUx86}
 */
X86.opMOVDX = function()
{
    this.regEDX = (this.regEDX & ~this.maskData) | this.getIPWord();
    if (BACKTRACK) {
        this.backTrack.btiDL = this.backTrack.btiMem0; this.backTrack.btiDH = this.backTrack.btiMem1;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesLAHF;
};

/**
 * op=0xBB (MOV [E]BX,imm)
 *
 * @this {CPUx86}
 */
X86.opMOVBX = function()
{
    this.regEBX = (this.regEBX & ~this.maskData) | this.getIPWord();
    if (BACKTRACK) {
        this.backTrack.btiBL = this.backTrack.btiMem0; this.backTrack.btiBH = this.backTrack.btiMem1;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesLAHF;
};

/**
 * op=0xBC (MOV [E]SP,imm)
 *
 * @this {CPUx86}
 */
X86.opMOVSP = function()
{
    this.setSP((this.getSP() & ~this.maskData) | this.getIPWord());
    this.nStepCycles -= this.cycleCounts.nOpCyclesLAHF;
};

/**
 * op=0xBD (MOV [E]BP,imm)
 *
 * @this {CPUx86}
 */
X86.opMOVBP = function()
{
    this.regEBP = (this.regEBP & ~this.maskData) | this.getIPWord();
    if (BACKTRACK) {
        this.backTrack.btiBPLo = this.backTrack.btiMem0; this.backTrack.btiBPHi = this.backTrack.btiMem1;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesLAHF;
};

/**
 * op=0xBE (MOV [E]SI,imm)
 *
 * @this {CPUx86}
 */
X86.opMOVSI = function()
{
    this.regESI = (this.regESI & ~this.maskData) | this.getIPWord();
    if (BACKTRACK) {
        this.backTrack.btiSILo = this.backTrack.btiMem0; this.backTrack.btiSIHi = this.backTrack.btiMem1;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesLAHF;
};

/**
 * op=0xBF (MOV [E]DI,imm)
 *
 * @this {CPUx86}
 */
X86.opMOVDI = function()
{
    this.regEDI = (this.regEDI & ~this.maskData) | this.getIPWord();
    if (BACKTRACK) {
        this.backTrack.btiDILo = this.backTrack.btiMem0; this.backTrack.btiDIHi = this.backTrack.btiMem1;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesLAHF;
};

/**
 * op=0xC0 (GRP2 byte,imm8) (80186/80188 and up)
 *
 * @this {CPUx86}
 */
X86.opGRP2bn = function()
{
    this.decodeModGrpByte.call(this, X86.aOpGrp2b, X86.helpSRCByte);
};

/**
 * op=0xC1 (GRP2 word,imm) (80186/80188 and up)
 *
 * @this {CPUx86}
 */
X86.opGRP2wn = function()
{
    this.decodeModGrpWord.call(this, this.sizeData == 2? X86.aOpGrp2w : X86.aOpGrp2d, X86.helpSRCByte);
};

/**
 * op=0xC2 (RET n)
 *
 * @this {CPUx86}
 */
X86.opRETn = function()
{
    let n = this.getIPShort();
    let newIP = this.popWord();
    this.setIP(newIP);
    if (n) this.setSP(this.getSP() + n);            // TODO: optimize
    this.nStepCycles -= this.cycleCounts.nOpCyclesRetn;
};

/**
 * op=0xC3 (RET)
 *
 * @this {CPUx86}
 */
X86.opRET = function()
{
    let newIP = this.popWord();
    this.setIP(newIP);
    this.nStepCycles -= this.cycleCounts.nOpCyclesRet;
};

/**
 * op=0xC4 (LES reg,word)
 *
 * This is like a "MOV reg,rm" operation, but it also loads ES from the next word.
 *
 * @this {CPUx86}
 */
X86.opLES = function()
{
    this.decodeModRegWord.call(this, X86.fnLES);
};

/**
 * op=0xC5 (LDS reg,word)
 *
 * This is like a "MOV reg,rm" operation, but it also loads DS from the next word.
 *
 * @this {CPUx86}
 */
X86.opLDS = function()
{
    this.decodeModRegWord.call(this, X86.fnLDS);
};

/**
 * op=0xC6 (MOV byte,imm8)
 *
 * @this {CPUx86}
 */
X86.opMOVb = function()
{
    /**
     * Like other MOV operations, the destination does not need to be read, just written.
     */
    this.opFlags |= X86.OPFLAG.NOREAD;
    this.decodeModGrpByte.call(this, X86.aOpGrpMOVn, this.getIPByte);
};

/**
 * op=0xC7 (MOV word,imm)
 *
 * @this {CPUx86}
 */
X86.opMOVw = function()
{
    /**
     * Like other MOV operations, the destination does not need to be read, just written.
     */
    this.opFlags |= X86.OPFLAG.NOREAD;
    this.decodeModGrpWord.call(this, X86.aOpGrpMOVn, this.getIPWord);
};

/**
 * op=0xC8 (ENTER imm16,imm8) (80186/80188 and up)
 *
 * @this {CPUx86}
 */
X86.opENTER = function()
{
    /**
     * Any operation that performs multiple stack modifications must snapshot regLSP first.
     */
    this.opLSP = this.regLSP;

    let wLocal = this.getIPShort();
    let bLevel = this.getIPByte() & 0x1f;
    /**
     * NOTE: 11 is the minimum cycle time for the 80286; the 80186/80188 has different cycle times: 15, 25 and
     * 22 + 16 * (bLevel - 1) for bLevel 0, 1 and > 1, respectively.  TODO: Fix this someday.
     */
    this.nStepCycles -= 11;
    this.pushWord(this.regEBP);
    let wFrame = this.getSP() & this.maskData;
    if (bLevel > 0) {
        this.nStepCycles -= (bLevel << 2) + (bLevel > 1? 1 : 0);
        while (--bLevel) {
            this.regEBP = (this.regEBP & ~this.maskData) | ((this.regEBP - this.sizeData) & this.maskData);
            this.pushWord(this.getSOWord(this.segSS, this.regEBP & this.maskData));
        }
        this.pushWord(wFrame);
    }
    this.regEBP = (this.regEBP & ~this.maskData) | wFrame;
    this.setSP((this.getSP() & ~this.segSS.maskAddr) | ((this.getSP() - wLocal) & this.segSS.maskAddr));

    this.opLSP = X86.ADDR_INVALID;
};

/**
 * op=0xC9 (LEAVE) (80186/80188 and up)
 *
 * @this {CPUx86}
 */
X86.opLEAVE = function()
{
    /**
     * Any operation that performs multiple stack modifications must snapshot regLSP first.
     */
    this.opLSP = this.regLSP;

    this.setSP((this.getSP() & ~this.segSS.maskAddr) | (this.regEBP & this.segSS.maskAddr));

    this.regEBP = (this.regEBP & ~this.maskData) | (this.popWord() & this.maskData);
    /**
     * NOTE: 5 is the cycle time for the 80286; the 80186/80188 has a cycle time of 8.  TODO: Fix this someday.
     */
    this.nStepCycles -= 5;

    this.opLSP = X86.ADDR_INVALID;
};

/**
 * op=0xCA (RETF n)
 *
 * @this {CPUx86}
 */
X86.opRETFn = function()
{
    X86.helpRETF.call(this, this.getIPShort());
    this.nStepCycles -= this.cycleCounts.nOpCyclesRetFn;
};

/**
 * op=0xCB (RETF)
 *
 * @this {CPUx86}
 */
X86.opRETF = function()
{
    X86.helpRETF.call(this, 0);
    this.nStepCycles -= this.cycleCounts.nOpCyclesRetF;
};

/**
 * op=0xCC (INT 3)
 *
 * @this {CPUx86}
 */
X86.opINT3 = function()
{
    /**
     * TODO: Consider swapping out this function whenever setProtMode() changes the mode to V86-mode.
     */
    if (I386 && (this.regPS & X86.PS.VM) && this.nIOPL < 3) {
        if (DEBUG) this.printf(MESSAGE.ADDR, "INT 0x03 in v86-mode (IOPL < 3)\n");
        X86.helpFault.call(this, X86.EXCEPTION.GP_FAULT, 0);
        return;
    }
    /**
     * Because INT3 is a trap, not a fault, we must use helpTrap() rather than helpFault().  Unfortunately, that
     * means you can't rely on the Debugger logic instead helpFault() to conditionally stop execution on an INT3,
     * so I've changed the Debugger's checkBreakpoint() function to stop execution on INT3 whenever both the
     * INT and HALT message bits are set; a simple "g" command allows you to continue.
     */
    X86.helpTrap.call(this, X86.EXCEPTION.BP_TRAP, 1, this.cycleCounts.nOpCyclesInt3D);
};

/**
 * op=0xCD (INT n)
 *
 * @this {CPUx86}
 */
X86.opINTn = function()
{
    let nInt = this.getIPByte();
    /**
     * TODO: Consider swapping out this function whenever setProtMode() changes the mode to V86-mode.
     */
    if (I386 && (this.regPS & X86.PS.VM) && this.nIOPL < 3) {
        if (DEBUG) this.printf(MESSAGE.ADDR, "INT %#04x in v86-mode (IOPL < 3)\n", nInt);
        X86.helpFault.call(this, X86.EXCEPTION.GP_FAULT, 0);
        return;
    }
    /**
     * checkIntNotify() checks for any notification handlers registered via addIntNotify(), calls them,
     * and returns false ONLY if a notification handler returned false (ie, requesting the interrupt be skipped).
     */
    if (this.checkIntNotify(nInt)) {
        X86.helpTrap.call(this, nInt, 2);
        return;
    }
    this.nStepCycles--;     // we don't need to assess the full cost of nOpCyclesInt, but we need to assess something...
};

/**
 * op=0xCE (INTO: INT 4 if OF set)
 *
 * @this {CPUx86}
 */
X86.opINTO = function()
{
    if (this.getOF()) {
        /**
         * TODO: Consider swapping out this function whenever setProtMode() changes the mode to V86-mode.
         */
        if (I386 && (this.regPS & X86.PS.VM) && this.nIOPL < 3) {
            if (DEBUG) this.printf(MESSAGE.ADDR, "INTO in v86-mode (IOPL < 3)\n");
            X86.helpFault.call(this, X86.EXCEPTION.GP_FAULT, 0);
            return;
        }
        X86.helpTrap.call(this, X86.EXCEPTION.OF_TRAP, 1, this.cycleCounts.nOpCyclesIntOD);
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesIntOFall;
};

/**
 * op=0xCF (IRET)
 *
 * @this {CPUx86}
 */
X86.opIRET = function()
{
    /**
     * TODO: Consider swapping out this function whenever setProtMode() changes the mode to V86-mode.
     */
    if (I386 && (this.regPS & X86.PS.VM) && this.nIOPL < 3) {
        if (DEBUG) this.printf(MESSAGE.ADDR, "IRET in v86-mode (IOPL < 3)\n");
        X86.helpFault.call(this, X86.EXCEPTION.GP_FAULT, 0);
        return;
    }
    this.opFlags |= X86.OPFLAG.IRET;
    X86.helpIRET.call(this);
};

/**
 * op=0xD0 (GRP2 byte,1)
 *
 * @this {CPUx86}
 */
X86.opGRP2b1 = function()
{
    this.decodeModGrpByte.call(this, X86.aOpGrp2b, X86.helpSRC1);
};

/**
 * op=0xD1 (GRP2 word,1)
 *
 * @this {CPUx86}
 */
X86.opGRP2w1 = function()
{
    this.decodeModGrpWord.call(this, this.sizeData == 2? X86.aOpGrp2w : X86.aOpGrp2d, X86.helpSRC1);
};

/**
 * op=0xD2 (GRP2 byte,CL)
 *
 * @this {CPUx86}
 */
X86.opGRP2bCL = function()
{
    this.decodeModGrpByte.call(this, X86.aOpGrp2b, X86.helpSRCCL);
};

/**
 * op=0xD3 (GRP2 word,CL)
 *
 * @this {CPUx86}
 */
X86.opGRP2wCL = function()
{
    this.decodeModGrpWord.call(this, this.sizeData == 2? X86.aOpGrp2w : X86.aOpGrp2d, X86.helpSRCCL);
};

/**
 * op=0xD4 0x0A (AAM)
 *
 * From "The 8086 Book":
 *
 *      1. Divide AL by 0x0A; store the quotient in AH and the remainder in AL
 *      2. Set PF, SF, and ZF based on the AL register (CF, OF, and AF are undefined)
 *
 * From "Undocumented Opcodes" (http://www.rcollins.org/secrets/opcodes/AAM.html):
 *
 *      AAM is shown as a two byte encoding used to divide AL by 10, putting the quotient in AH, and the remainder in AL.
 *      However, AAM is listed in the op code map as a single byte instruction. This leads one to wonder why a two-byte
 *      opcode is listed in the single-byte opcode map. In reality, the second byte is an undocumented operand to AAM.
 *      The operand is the divisor. In its documented incarnation, AAM is encoded as D4 0A. The operand 0A is the divisor.
 *      This divisor can be changed to any value between 0 and FF.
 *
 *      Using AAM in this manner is useful -- as it extends the CPU instruction set to include a DIV IMM8 instruction
 *      that is not available from any other form of the DIV instruction. The extended form of the AAM instruction is also
 *      useful because it sets the flags register according to the results, unlike the DIV or IDIV instruction.
 *
 *      According to Intel documentation, SF, ZF, and PF flags are set according to the result, while OF, AF, and CF
 *      are undefined. However, if AAM were used strictly as documented, then the Sign Flag (SF) could not be set under
 *      any circumstances, since anything divided by 10 will leave a remainder between 0 and 9. Obviously the remainder
 *      could never be between 128 and 255 (or -1 and -128 if you prefer) if used only as documented. Since AAM divides
 *      an 8 bit number by another 8-bit number, a carry or overflow could never occur. Therefore CF and OF always=0.
 *      Intel claims they are undefined, but my observations are consistent with my theory.
 *
 *      Contrary to documentation, AAM will generate exceptions in real mode, protected mode, and V86 mode. AAM can only
 *      generate Exception 0 -- divide by 0.
 *
 *      Finally, in the Pentium User's Manual, this heretofore undocumented form of AMM is described. Intel says:
 *
 *          Note: imm8 has the value of the instruction's second byte. The second byte under normally assembly [sic] of
 *          this instruction will be 0A, however, explicit modification of this byte will result in the operation described
 *          above and may alter results.
 *
 *      This instruction exists in this form on all Intel x86 processors. See the file [AAM.ASM](/docs/x86/ops/AAM/AAM.ASM)
 *      for diagnostics source code for this instruction.
 *
 * @this {CPUx86}
 */
X86.opAAM = function()
{
    let b = this.getIPByte();
    if (!b) {
        X86.helpDIVOverflow.call(this);
        return;
    }
    let AL = this.regEAX & 0xff;
    this.regEAX = (this.regEAX & ~0xffff) | ((AL / b) << 8) | (AL % b);
    /**
     * setLogicResult() is perfect, because it ensures that CF and OF are cleared as well (see above for why).
     */
    this.setLogicResult(this.regEAX, X86.RESULT.BYTE);
    this.nStepCycles -= this.cycleCounts.nOpCyclesAAM;
};

/**
 * op=0xD5 (AAD)
 *
 * From "The 8086 Book":
 *
 *      1. Multiply AH by 0x0A, add AH to AL, and store 0x00 in AH
 *      2. Set PF, SF, and ZF based on the AL register (CF, OF, and AF are undefined)
 *
 * From "Undocumented Opcodes" (http://www.rcollins.org/secrets/opcodes/AAD.html):
 *
 *      This instruction is the multiplication counterpart to AAM. As is the case with AAM, AAD uses the second
 *      byte as an operand. This operand is the multiplicand for AAD. Like AAM, AAD provides a way to execute a MUL
 *      IMM8 that is unavailable through any other means in the CPU.
 *
 *      Unlike MUL, or IMUL, AAD sets all of the CPU status flags according to the result. Intel states that the
 *      Overflow Flag (OF), Auxiliary carry Flag (AF), and Carry Flag (CF) are undefined. This assertion is incorrect.
 *      These flags are fully defined, and are set consistently with respect to any other integer operations.
 *
 *      And again, like AMM, beginning with the Pentium, Intel has finally acknowledged the existence of the second
 *      byte of this instruction as its operand. Intel says:
 *
 *          Note: imm8 has the value of the instruction's second byte. The second byte under normally assembly [sic]
 *          of this instruction will be 0A, however, explicit modification of this byte will result in the operation
 *          described above and may alter results.
 *
 *      This instruction exists in this form on all Intel x86 processors. See the file [AAD.ASM](/docs/x86/ops/AAD/AAD.ASM)
 *      for diagnostics source code for this instruction.
 *
 * TODO: Confirm on real hardware that flags reflect the result of the final addition (ie, that the result of the
 * intermediate multiplication is irrelevant); it also might be nice to confirm that an operand override has no effect.
 *
 * @this {CPUx86}
 */
X86.opAAD = function()
{
    let dst = (this.regEAX & 0xff);
    let src = (((this.regEAX >> 8) & 0xff) * this.getIPByte())|0;
    let result = (dst + src)|0;
    this.regEAX = (this.regEAX & ~0xffff) | (result & 0xff);
    this.setArithResult(dst, src, result, X86.RESULT.BYTE | X86.RESULT.ALL);
    this.nStepCycles -= this.cycleCounts.nOpCyclesAAD;
};

/**
 * op=0xD6 (SALC aka SETALC) (undocumented until Pentium Pro)
 *
 * Sets AL to 0xFF if CF=1, 0x00 otherwise; no flags are affected (similar to SBB AL,AL, but without side-effects)
 *
 * WARNING: I have no idea how many clocks this instruction originally required, so for now, I'm going with a minimum of 2.
 *
 * @this {CPUx86}
 */
X86.opSALC = function()
{
    this.regEAX = (this.regEAX & ~0xff) | (this.getCF()? 0xFF : 0);
    this.nStepCycles -= 2;
};

/**
 * op=0xD7 (XLAT)
 *
 * @this {CPUx86}
 */
X86.opXLAT = function()
{
    /**
     * TODO: Verify whether XLAT wraps its address calculation....
     */
    this.regEAX = (this.regEAX & ~0xff) | this.getEAByte(this.segData, (this.regEBX + (this.regEAX & 0xff)));
    this.nStepCycles -= this.cycleCounts.nOpCyclesXLAT;
};

/**
 * opESC()
 *
 * @this {CPUx86}
 * @param {number} bOpcode
 */
X86.opESC = function(bOpcode)
{
    this.bOpcode = bOpcode;
    this.decodeModRegWord.call(this, X86.fnESC);
};

/**
 * op=0xD8 (ESC0)
 *
 * @this {CPUx86}
 */
X86.opESC0 = function()
{
    X86.opESC.call(this, X86.OPCODE.ESC0);
};

/**
 * op=0xD9 (ESC1)
 *
 * @this {CPUx86}
 */
X86.opESC1 = function()
{
    X86.opESC.call(this, X86.OPCODE.ESC1);
};

/**
 * op=0xDA (ESC2)
 *
 * @this {CPUx86}
 */
X86.opESC2 = function()
{
    X86.opESC.call(this, X86.OPCODE.ESC2);
};

/**
 * op=0xDB (ESC3)
 *
 * @this {CPUx86}
 */
X86.opESC3 = function()
{
    X86.opESC.call(this, X86.OPCODE.ESC3);
};

/**
 * op=0xDC (ESC4)
 *
 * @this {CPUx86}
 */
X86.opESC4 = function()
{
    X86.opESC.call(this, X86.OPCODE.ESC4);
};

/**
 * op=0xDD (ESC5)
 *
 * @this {CPUx86}
 */
X86.opESC5 = function()
{
    X86.opESC.call(this, X86.OPCODE.ESC5);
};

/**
 * op=0xDE (ESC6)
 *
 * @this {CPUx86}
 */
X86.opESC6 = function()
{
    X86.opESC.call(this, X86.OPCODE.ESC6);
};

/**
 * op=0xDF (ESC7)
 *
 * @this {CPUx86}
 */
X86.opESC7 = function()
{
    X86.opESC.call(this, X86.OPCODE.ESC7);
};

/**
 * op=0xE0 (LOOPNZ disp)
 *
 * NOTE: All the instructions in this group (LOOPNZ, LOOPZ, LOOP, and JCXZ) actually
 * rely on the ADDRESS override setting for determining whether CX or ECX will be used,
 * even though it seems counter-intuitive; ditto for the REP prefix.
 *
 * @this {CPUx86}
 */
X86.opLOOPNZ = function()
{
    let disp = this.getIPDisp();
    let n = (this.regECX - 1) & this.maskAddr;
    this.regECX = (this.regECX & ~this.maskAddr) | n;
    if (n && !this.getZF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesLoopNZ;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesLoopFall;
};

/**
 * op=0xE1 (LOOPZ disp)
 *
 * NOTE: All the instructions in this group (LOOPNZ, LOOPZ, LOOP, and JCXZ) actually
 * rely on the ADDRESS override setting for determining whether CX or ECX will be used,
 * even though it seems counter-intuitive; ditto for the REP prefix.
 *
 * @this {CPUx86}
 */
X86.opLOOPZ = function()
{
    let disp = this.getIPDisp();
    let n = (this.regECX - 1) & this.maskAddr;
    this.regECX = (this.regECX & ~this.maskAddr) | n;
    if (n && this.getZF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesLoopZ;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesLoopZFall;
};

/**
 * op=0xE2 (LOOP disp)
 *
 * NOTE: All the instructions in this group (LOOPNZ, LOOPZ, LOOP, and JCXZ) actually
 * rely on the ADDRESS override setting for determining whether CX or ECX will be used,
 * even though it seems counter-intuitive; ditto for the REP prefix.
 *
 * @this {CPUx86}
 */
X86.opLOOP = function()
{
    let disp = this.getIPDisp();
    let n = (this.regECX - 1) & this.maskAddr;
    this.regECX = (this.regECX & ~this.maskAddr) | n;
    if (n) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesLoop;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesLoopFall;
};

/**
 * op=0xE3 (JCXZ/JECXZ disp)
 *
 * NOTE: All the instructions in this group (LOOPNZ, LOOPZ, LOOP, and JCXZ) actually
 * rely on the ADDRESS override setting for determining whether CX or ECX will be used,
 * even though it seems counter-intuitive; ditto for the REP prefix.
 *
 * @this {CPUx86}
 */
X86.opJCXZ = function()
{
    let disp = this.getIPDisp();
    if (!(this.regECX & this.maskAddr)) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesLoopZ;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesLoopZFall;
};

/**
 * op=0xE4 (IN AL,port)
 *
 * @this {CPUx86}
 */
X86.opINb = function()
{
    let port = this.getIPByte();
    if (!this.checkIOPM(port, 1, true)) return;
    this.regEAX = (this.regEAX & ~0xff) | (this.bus.checkPortInputNotify(port, 1, this.regLIP - 2) & 0xff);
    if (BACKTRACK) this.backTrack.btiAL = this.backTrack.btiIO;
    this.nStepCycles -= this.cycleCounts.nOpCyclesInP;
};

/**
 * op=0xE5 (IN AX,port)
 *
 * @this {CPUx86}
 */
X86.opINw = function()
{
    let port = this.getIPByte();
    if (!this.checkIOPM(port, this.sizeData, true)) return;
    this.regEAX = (this.regEAX & ~this.maskData) | (this.bus.checkPortInputNotify(port, this.sizeData, this.regLIP - 2) & this.maskData);
    if (BACKTRACK) {
        this.backTrack.btiAL = this.backTrack.btiIO;
        this.backTrack.btiAH = this.backTrack.btiIO;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesInP;
};

/**
 * op=0xE6 (OUT port,AL)
 *
 * @this {CPUx86}
 */
X86.opOUTb = function()
{
    let port = this.getIPByte();
    if (!this.checkIOPM(port, 1, false)) return;
    this.bus.checkPortOutputNotify(port, 1, this.regEAX & 0xff, this.regLIP - 2);
    this.nStepCycles -= this.cycleCounts.nOpCyclesOutP;
};

/**
 * op=0xE7 (OUT port,AX)
 *
 * @this {CPUx86}
 */
X86.opOUTw = function()
{
    let port = this.getIPByte();
    if (!this.checkIOPM(port, this.sizeData, false)) return;
    this.bus.checkPortOutputNotify(port, this.sizeData, this.regEAX & this.maskData, this.regLIP - 2);
    this.nStepCycles -= this.cycleCounts.nOpCyclesOutP;
};

/**
 * op=0xE8 (CALL disp16)
 *
 * @this {CPUx86}
 */
X86.opCALL = function()
{
    let disp = this.getIPWord();
    let oldIP = this.getIP();
    let newIP = oldIP + disp;
    this.pushWord(oldIP);
    this.setIP(newIP);
    this.nStepCycles -= this.cycleCounts.nOpCyclesCall;
};

/**
 * op=0xE9 (JMP disp16)
 *
 * @this {CPUx86}
 */
X86.opJMP = function()
{
    let disp = this.getIPWord();
    this.setIP(this.getIP() + disp);
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmp;
};

/**
 * op=0xEA (JMP seg:off)
 *
 * @this {CPUx86}
 */
X86.opJMPF = function()
{
    this.setCSIP(this.getIPWord(), this.getIPShort());
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpF;
};

/**
 * op=0xEB (JMP short disp8)
 *
 * @this {CPUx86}
 */
X86.opJMPs = function()
{
    let disp = this.getIPDisp();
    this.setIP(this.getIP() + disp);
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmp;
};

/**
 * op=0xEC (IN AL,dx)
 *
 * @this {CPUx86}
 */
X86.opINDXb = function()
{
    let port = this.regEDX & 0xffff;
    if (!this.checkIOPM(port, 1, true)) return;
    this.regEAX = (this.regEAX & ~0xff) | (this.bus.checkPortInputNotify(port, 1, this.regLIP - 1) & 0xff);
    if (BACKTRACK) this.backTrack.btiAL = this.backTrack.btiIO;
    this.nStepCycles -= this.cycleCounts.nOpCyclesInDX;
};

/**
 * op=0xED (IN AX,dx)
 *
 * @this {CPUx86}
 */
X86.opINDXw = function()
{
    let port = this.regEDX & 0xffff;
    if (!this.checkIOPM(port, this.sizeData, true)) return;
    this.regEAX = (this.regEAX & ~this.maskData) | (this.bus.checkPortInputNotify(port, this.sizeData, this.regLIP - 1) & this.maskData);
    if (BACKTRACK) {
        this.backTrack.btiAL = this.backTrack.btiIO;
        this.backTrack.btiAH = this.backTrack.btiIO;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesInDX;
};

/**
 * op=0xEE (OUT dx,AL)
 *
 * @this {CPUx86}
 */
X86.opOUTDXb = function()
{
    let port = this.regEDX & 0xffff;
    if (!this.checkIOPM(port, 1, false)) return;
    if (BACKTRACK) this.backTrack.btiIO = this.backTrack.btiAL;
    this.bus.checkPortOutputNotify(port, 1, this.regEAX & 0xff, this.regLIP - 1);
    this.nStepCycles -= this.cycleCounts.nOpCyclesOutDX;
};

/**
 * op=0xEF (OUT dx,AX)
 *
 * @this {CPUx86}
 */
X86.opOUTDXw = function()
{
    let port = this.regEDX & 0xffff;
    if (!this.checkIOPM(port, 2, false)) return;
    if (BACKTRACK) {
        this.backTrack.btiIO = this.backTrack.btiAL;
        this.backTrack.btiIO = this.backTrack.btiAH;
    }
    this.bus.checkPortOutputNotify(port, this.sizeData, this.regEAX & this.maskData, this.regLIP - 1);
    this.nStepCycles -= this.cycleCounts.nOpCyclesOutDX;
};

/**
 * op=0xF0 (LOCK:)
 *
 * TODO: For X86.MODEL_80286, we let the 80286 and 80287 Programmers Reference Manual speak for itself:
 *
 *      LOCK (Assert Bus Lock) is a 1-byte prefix code that causes the processor to assert
 *      the bus LOCK signal during execution of the instruction that follows. LOCK does not
 *      affect any flags. LOCK may be used only when CPL <= IOPL. A protection exception
 *      [#GP(0)] will occur if LOCK is used when CPL > IOPL.
 *
 * TODO: For X86.MODEL_80386, there is no mention of triggering a #GP(0) exception when CPL > IOPL.
 * Instead, this prefix is now allowed *only* with the following instructions:
 *
 *      BT, BTS, BTR, BTC, XCHG, ADD, OR, ADC, SBB, AND, SUB, XOR, NOT, NEG, INC, DEC
 *
 * and only when accessing memory.  Any other uses of LOCK are supposed to generate a #UD exception;
 * that includes any register-to-register forms of the above instructions, such as XCHG AX,AX (aka NOP).
 *
 * Emulating all those exception cases would be a lot of work for little if any benefit.  The only, um,
 * exception that I'm making is for NOP (see opNOP), since there are apparently some operating systems
 * that thought relying on LOCK NOP faulting was a clever thing to do.  See https://wiki.osdev.org/System_Calls.
 *
 * MINIX 1.1 performs LOCK NOP, but not to generate a fault, because it predates the 80386; instead, it had
 * something to do with the IBM PC simulator that Andrew Tanenbaum used to test MINIX.  MINIX 1.1 was designed
 * for PC ATs, so either stick with an 80286 machine, or patch the LOCK instruction with a NOP.
 * See https://www.pcjs.org/software/pcx86/sys/unix/minix/1.1/pc-at/.
 *
 * @this {CPUx86}
 */
X86.opLOCK = function()
{
    this.opFlags |= X86.OPFLAG.LOCK | X86.OPFLAG.NOINTR;
    this.nStepCycles -= this.cycleCounts.nOpCyclesPrefix;
};

/**
 * op=0xF1 (INT1; undocumented; 80386 and up)
 *
 * For the 8086/8088, we treat opcode 0xF1 as an alias for LOCK (0xF0).
 *
 * For the 80186 and 80286, and we treat it as undefined.  Starting with the 80386, this opcode is known as INT1
 * or ICEBP, since it effectively performs an INT 0x01 but is normally only performed with an ICE.
 *
 * @this {CPUx86}
 */
X86.opINT1 = function()
{
    /**
     * TODO: Verify this instruction's behavior.
     */
    X86.helpTrap.call(this, X86.EXCEPTION.DB_EXC, 1, this.cycleCounts.nOpCyclesInt3D);
};

/**
 * op=0xF2 (REPNZ:) (repeat CMPS or SCAS until NZ; repeat MOVS, LODS, or STOS unconditionally)
 *
 * @this {CPUx86}
 */
X86.opREPNZ = function()
{
    this.opFlags |= X86.OPFLAG.REPNZ | X86.OPFLAG.NOINTR;
    this.nStepCycles -= this.cycleCounts.nOpCyclesPrefix;
};

/**
 * op=0xF3 (REPZ:) (repeat CMPS or SCAS until Z; repeat MOVS, LODS, or STOS unconditionally)
 *
 * @this {CPUx86}
 */
X86.opREPZ = function()
{
    this.opFlags |= X86.OPFLAG.REPZ | X86.OPFLAG.NOINTR;
    this.nStepCycles -= this.cycleCounts.nOpCyclesPrefix;
};

/**
 * op=0xF4 (HLT)
 *
 * TODO: For X86.MODEL_80286, we let the 80286 and 80287 Programmers Reference Manual speak for itself:
 *
 *      HLT (Halt) causes the processor to suspend processing operations pending an interrupt or a system reset.
 *      This trusted instruction provides an alternative to an endless software loop in situations where a program
 *      must wait for an interrupt. The return address saved after the interrupt will point to the instruction
 *      immediately following HLT.
 *
 *      HLT is a privileged instruction. #GP(O) if the current privilege level is not O.
 *
 * On the 80386, we now throw GP_FAULT when operating in V86 mode, but we still don't check CPL on an 80286.
 *
 * @this {CPUx86}
 */
X86.opHLT = function()
{
    if (I386 && (this.regPS & X86.PS.VM)) {
        X86.helpFault.call(this, X86.EXCEPTION.GP_FAULT, 0);
        return;
    }
    /**
     * The CPU is never REALLY halted by a HLT instruction; instead, by setting X86.INTFLAG.HALT,
     * we are signalling to stepCPU() that it's free to end the current burst AND that it should not
     * execute any more instructions until checkINTR() indicates a hardware interrupt is requested.
     */
    this.intFlags |= X86.INTFLAG.HALT;
    this.nStepCycles -= 2;
    /**
     * If a Debugger is present and both the CPU and HALT message categories are enabled, then we
     * REALLY halt the CPU, on the theory that whoever's using the Debugger would like to see HLTs.
     */
    if (DEBUGGER && this.dbg && this.messageEnabled(MESSAGE.CPU + MESSAGE.HALT)) {
        this.resetIP();         // this is purely for the Debugger's benefit, to show the HLT
        this.dbg.stopCPU();
        return;
    }
    /**
     * We also REALLY halt the machine if interrupts have been disabled, since that means it's dead in
     * the water (yes, we support NMIs, but none of our devices are going to generate an NMI at this point).
     */
    if (!this.getIF()) {
        if (DEBUGGER && this.dbg) this.resetIP();
        this.stopCPU();
    }
};

/**
 * op=0xF5 (CMC)
 *
 * @this {CPUx86}
 */
X86.opCMC = function()
{
    if (this.getCF()) this.clearCF(); else this.setCF();
    this.nStepCycles -= 2;                          // CMC takes 2 cycles on all CPUs
};

/**
 * op=0xF6 (GRP3 byte)
 *
 * The MUL byte instruction is problematic in two cases:
 *
 *      0xF6 0xE0:  MUL AL
 *      0xF6 0xE4:  MUL AH
 *
 * because the OpModGrpByte decoder function will attempt to put the fnMULb() function's
 * return value back into AL or AH, undoing fnMULb's update of AX.  And since fnMULb doesn't
 * know what the target is (only the target's value), it cannot easily work around the problem.
 *
 * A simple, albeit kludgy, solution is for fnMULb to always save its result in a special
 * "register" (eg, regMDLo), which we will then put back into regEAX if it's been updated.
 * This also relieves us from having to decode any part of the ModRM byte, so maybe it's not
 * such a bad work-around after all.
 *
 * Similar issues with IMUL (and DIV and IDIV) are resolved using the same special variable(s).
 *
 * @this {CPUx86}
 */
X86.opGRP3b = function()
{
    this.fMDSet = false;
    this.decodeModGrpByte.call(this, X86.aOpGrp3b, X86.helpSRCNone);
    if (this.fMDSet) this.regEAX = (this.regEAX & ~this.maskData) | (this.regMDLo & this.maskData);
};

/**
 * op=0xF7 (GRP3 word)
 *
 * The MUL word instruction is problematic in two cases:
 *
 *      0xF7 0xE0:  MUL AX
 *      0xF7 0xE2:  MUL DX
 *
 * because the OpModGrpWord decoder function will attempt to put the fnMULw() function's
 * return value back into AX or DX, undoing fnMULw's update of DX:AX.  And since fnMULw doesn't
 * know what the target is (only the target's value), it cannot easily work around the problem.
 *
 * A simple, albeit kludgy, solution is for fnMULw to always save its result in a special
 * "register" (eg, regMDLo/regMDHi), which we will then put back into regEAX/regEDX if it's been
 * updated.  This also relieves us from having to decode any part of the ModRM byte, so maybe
 * it's not such a bad work-around after all.
 *
 * @this {CPUx86}
 */
X86.opGRP3w = function()
{
    this.fMDSet = false;
    this.decodeModGrpWord.call(this, X86.aOpGrp3w, X86.helpSRCNone);
    if (this.fMDSet) {
        this.regEAX = (this.regEAX & ~this.maskData) | (this.regMDLo & this.maskData);
        this.regEDX = (this.regEDX & ~this.maskData) | (this.regMDHi & this.maskData);
    }
};

/**
 * op=0xF8 (CLC)
 *
 * @this {CPUx86}
 */
X86.opCLC = function()
{
    this.clearCF();
    this.nStepCycles -= 2;                              // CLC takes 2 cycles on all CPUs
};

/**
 * op=0xF9 (STC)
 *
 * @this {CPUx86}
 */
X86.opSTC = function()
{
    this.setCF();
    this.nStepCycles -= 2;                              // STC takes 2 cycles on all CPUs
};

/**
 * op=0xFA (CLI)
 *
 * @this {CPUx86}
 */
X86.opCLI = function()
{
    /**
     * The following code should be sufficient for all modes, because in real-mode, CPL is always zero,
     * and in V86-mode, CPL is always 3.
     */
    if (this.nCPL > this.nIOPL) {
        if (DEBUG && (this.regPS & X86.PS.VM)) this.printf(MESSAGE.ADDR, "CLI in v86-mode (IOPL < 3)\n");
        X86.helpFault.call(this, X86.EXCEPTION.GP_FAULT, 0);
        return;
    }
    this.clearIF();
    this.nStepCycles -= this.cycleCounts.nOpCyclesCLI;  // CLI takes LONGER on an 80286
};

/**
 * op=0xFB (STI)
 *
 * @this {CPUx86}
 */
X86.opSTI = function()
{
    /**
     * The following code should be sufficient for all modes, because in real-mode, CPL is always zero,
     * and in V86-mode, CPL is always 3.
     */
    if (this.nCPL > this.nIOPL) {
        if (DEBUG && (this.regPS & X86.PS.VM)) this.printf(MESSAGE.ADDR, "STI in v86-mode (IOPL < 3)\n");
        X86.helpFault.call(this, X86.EXCEPTION.GP_FAULT, 0);
        return;
    }
    this.setIF();
    this.opFlags |= X86.OPFLAG.NOINTR;
    this.nStepCycles -= 2;                              // STI takes 2 cycles on all CPUs
};

/**
 * op=0xFC (CLD)
 *
 * @this {CPUx86}
 */
X86.opCLD = function()
{
    this.clearDF();
    this.nStepCycles -= 2;                              // CLD takes 2 cycles on all CPUs
};

/**
 * op=0xFD (STD)
 *
 * @this {CPUx86}
 */
X86.opSTD = function()
{
    this.setDF();
    this.nStepCycles -= 2;                              // STD takes 2 cycles on all CPUs
};

/**
 * op=0xFE (GRP4 byte)
 *
 * @this {CPUx86}
 */
X86.opGRP4b = function()
{
    this.decodeModGrpByte.call(this, X86.aOpGrp4b, X86.helpSRCNone);
};

/**
 * op=0xFF (GRP4 word)
 *
 * @this {CPUx86}
 */
X86.opGRP4w = function()
{
    this.decodeModGrpWord.call(this, X86.aOpGrp4w, X86.helpSRCNone);
};

/**
 * opInvalid()
 *
 * @this {CPUx86}
 */
X86.opInvalid = function()
{
    X86.helpFault.call(this, X86.EXCEPTION.UD_FAULT);
};

/**
 * opUndefined()
 *
 * @this {CPUx86}
 */
X86.opUndefined = function()
{
    this.setIP(this.opLIP - this.segCS.base);
    this.setError("Undefined opcode " + StrLib.toHexByte(this.getByte(this.regLIP)) + " at " + StrLib.toHexLong(this.regLIP));
    this.stopCPU();
};

/**
 * opTBD()
 *
 * @this {CPUx86}
 */
X86.opTBD = function()
{
    this.setIP(this.opLIP - this.segCS.base);
    this.printf(MESSAGE.NONE, "unimplemented 80386 opcode\n");
    this.stopCPU();
};

/**
 * This 256-entry array of opcode functions is at the heart of the CPU engine: stepCPU(n).
 *
 * It might be worth trying a switch() statement instead, to see how the performance compares,
 * but I suspect that would vary quite a bit across JavaScript engines; for now, I'm putting my
 * money on array lookup.
 */
X86.aOps = [
    X86.opADDmb,            X86.opADDmw,            X86.opADDrb,            X86.opADDrw,        // 0x00-0x03
    X86.opADDALb,           X86.opADDAX,            X86.opPUSHES,           X86.opPOPES,        // 0x04-0x07
    X86.opORmb,             X86.opORmw,             X86.opORrb,             X86.opORrw,         // 0x08-0x0B
    X86.opORALb,            X86.opORAX,             X86.opPUSHCS,           X86.opPOPCS,        // 0x0C-0x0F
    X86.opADCmb,            X86.opADCmw,            X86.opADCrb,            X86.opADCrw,        // 0x10-0x13
    X86.opADCALb,           X86.opADCAX,            X86.opPUSHSS,           X86.opPOPSS,        // 0x14-0x17
    X86.opSBBmb,            X86.opSBBmw,            X86.opSBBrb,            X86.opSBBrw,        // 0x18-0x1B
    X86.opSBBALb,           X86.opSBBAX,            X86.opPUSHDS,           X86.opPOPDS,        // 0x1C-0x1F
    X86.opANDmb,            X86.opANDmw,            X86.opANDrb,            X86.opANDrw,        // 0x20-0x23
    X86.opANDAL,            X86.opANDAX,            X86.opES,               X86.opDAA,          // 0x24-0x27
    X86.opSUBmb,            X86.opSUBmw,            X86.opSUBrb,            X86.opSUBrw,        // 0x28-0x2B
    X86.opSUBALb,           X86.opSUBAX,            X86.opCS,               X86.opDAS,          // 0x2C-0x2F
    X86.opXORmb,            X86.opXORmw,            X86.opXORrb,            X86.opXORrw,        // 0x30-0x33
    X86.opXORALb,           X86.opXORAX,            X86.opSS,               X86.opAAA,          // 0x34-0x37
    X86.opCMPmb,            X86.opCMPmw,            X86.opCMPrb,            X86.opCMPrw,        // 0x38-0x3B
    X86.opCMPALb,           X86.opCMPAX,            X86.opDS,               X86.opAAS,          // 0x3C-0x3F
    X86.opINCAX,            X86.opINCCX,            X86.opINCDX,            X86.opINCBX,        // 0x40-0x43
    X86.opINCSP,            X86.opINCBP,            X86.opINCSI,            X86.opINCDI,        // 0x44-0x47
    X86.opDECAX,            X86.opDECCX,            X86.opDECDX,            X86.opDECBX,        // 0x48-0x4B
    X86.opDECSP,            X86.opDECBP,            X86.opDECSI,            X86.opDECDI,        // 0x4C-0x4F
    X86.opPUSHAX,           X86.opPUSHCX,           X86.opPUSHDX,           X86.opPUSHBX,       // 0x50-0x53
    X86.opPUSHSP_8086,      X86.opPUSHBP,           X86.opPUSHSI,           X86.opPUSHDI,       // 0x54-0x57
    X86.opPOPAX,            X86.opPOPCX,            X86.opPOPDX,            X86.opPOPBX,        // 0x58-0x5B
    X86.opPOPSP,            X86.opPOPBP,            X86.opPOPSI,            X86.opPOPDI,        // 0x5C-0x5F
    /**
     * On an 8086/8088, opcodes 0x60-0x6F are aliases for the conditional jumps 0x70-0x7F.  Sometimes you'll see
     * references to these opcodes (like 0x60) being a "two-byte NOP" and using them differentiate an 8088 from newer
     * CPUs, but they're only a "two-byte NOP" if the second byte is zero, resulting in zero displacement.
     */
    X86.opJO,               X86.opJNO,              X86.opJC,               X86.opJNC,          // 0x60-0x63
    X86.opJZ,               X86.opJNZ,              X86.opJBE,              X86.opJNBE,         // 0x64-0x67
    X86.opJS,               X86.opJNS,              X86.opJP,               X86.opJNP,          // 0x68-0x6B
    X86.opJL,               X86.opJNL,              X86.opJLE,              X86.opJNLE,         // 0x6C-0x6F
    X86.opJO,               X86.opJNO,              X86.opJC,               X86.opJNC,          // 0x70-0x73
    X86.opJZ,               X86.opJNZ,              X86.opJBE,              X86.opJNBE,         // 0x74-0x77
    X86.opJS,               X86.opJNS,              X86.opJP,               X86.opJNP,          // 0x78-0x7B
    X86.opJL,               X86.opJNL,              X86.opJLE,              X86.opJNLE,         // 0x7C-0x7F
    /**
     * On all processors, opcode groups 0x80 and 0x82 perform identically (0x82 opcodes sign-extend their
     * immediate data, but since both 0x80 and 0x82 are byte operations, the sign extension has no effect).
     *
     * WARNING: Intel's "Pentium Processor User's Manual (Volume 3: Architecture and Programming Manual)" refers
     * to opcode 0x82 as a "reserved" instruction, but also cryptically refers to it as "MOVB AL,imm".  This is
     * assumed to be an error in the manual, because as far as I know, 0x82 has always mirrored 0x80.
     */
    X86.opGRP1b,            X86.opGRP1w,            X86.opGRP1b,            X86.opGRP1sw,       // 0x80-0x83
    X86.opTESTrb,           X86.opTESTrw,           X86.opXCHGrb,           X86.opXCHGrw,       // 0x84-0x87
    X86.opMOVmb,            X86.opMOVmw,            X86.opMOVrb,            X86.opMOVrw,        // 0x88-0x8B
    X86.opMOVwsr,           X86.opLEA,              X86.opMOVsrw,           X86.opPOPmw,        // 0x8C-0x8F
    X86.opNOP,              X86.opXCHGCX,           X86.opXCHGDX,           X86.opXCHGBX,       // 0x90-0x93
    X86.opXCHGSP,           X86.opXCHGBP,           X86.opXCHGSI,           X86.opXCHGDI,       // 0x94-0x97
    X86.opCBW,              X86.opCWD,              X86.opCALLF,            X86.opWAIT,         // 0x98-0x9B
    X86.opPUSHF,            X86.opPOPF,             X86.opSAHF,             X86.opLAHF,         // 0x9C-0x9F
    X86.opMOVALm,           X86.opMOVAXm,           X86.opMOVmAL,           X86.opMOVmAX,       // 0xA0-0xA3
    X86.opMOVSb,            X86.opMOVSw,            X86.opCMPSb,            X86.opCMPSw,        // 0xA4-0xA7
    X86.opTESTALb,          X86.opTESTAX,           X86.opSTOSb,            X86.opSTOSw,        // 0xA8-0xAB
    X86.opLODSb,            X86.opLODSw,            X86.opSCASb,            X86.opSCASw,        // 0xAC-0xAF
    X86.opMOVALb,           X86.opMOVCLb,           X86.opMOVDLb,           X86.opMOVBLb,       // 0xB0-0xB3
    X86.opMOVAHb,           X86.opMOVCHb,           X86.opMOVDHb,           X86.opMOVBHb,       // 0xB4-0xB7
    X86.opMOVAX,            X86.opMOVCX,            X86.opMOVDX,            X86.opMOVBX,        // 0xB8-0xBB
    X86.opMOVSP,            X86.opMOVBP,            X86.opMOVSI,            X86.opMOVDI,        // 0xBC-0xBF
    /**
     * On an 8086/8088, opcodes 0xC0 -> 0xC2, 0xC1 -> 0xC3, 0xC8 -> 0xCA and 0xC9 -> 0xCB.
     */
    X86.opRETn,             X86.opRET,              X86.opRETn,             X86.opRET,          // 0xC0-0xC3
    X86.opLES,              X86.opLDS,              X86.opMOVb,             X86.opMOVw,         // 0xC4-0xC7
    X86.opRETFn,            X86.opRETF,             X86.opRETFn,            X86.opRETF,         // 0xC8-0xCB
    X86.opINT3,             X86.opINTn,             X86.opINTO,             X86.opIRET,         // 0xCC-0xCF
    X86.opGRP2b1,           X86.opGRP2w1,           X86.opGRP2bCL,          X86.opGRP2wCL,      // 0xD0-0xD3
    /**
     * Even as of the Pentium, opcode 0xD6 is still marked as "reserved", but it's always been SALC (aka SETALC).
     */
    X86.opAAM,              X86.opAAD,              X86.opSALC,             X86.opXLAT,         // 0xD4-0xD7
    X86.opESC0,             X86.opESC1,             X86.opESC2,             X86.opESC3,         // 0xD8-0xDB
    X86.opESC4,             X86.opESC5,             X86.opESC6,             X86.opESC7,         // 0xDC-0xDF
    X86.opLOOPNZ,           X86.opLOOPZ,            X86.opLOOP,             X86.opJCXZ,         // 0xE0-0xE3
    X86.opINb,              X86.opINw,              X86.opOUTb,             X86.opOUTw,         // 0xE4-0xE7
    X86.opCALL,             X86.opJMP,              X86.opJMPF,             X86.opJMPs,         // 0xE8-0xEB
    X86.opINDXb,            X86.opINDXw,            X86.opOUTDXb,           X86.opOUTDXw,       // 0xEC-0xEF
    /**
     * On an 8086/8088, opcode 0xF1 is believed to be an alias for 0xF0; in any case, it definitely behaves like
     * a prefix on those processors, so we treat it as such.  On the 80186 and 80286, we treat it as opUndefined(),
     * and on the 80386, it becomes opINT1().
     *
     * As of the Pentium, opcode 0xF1 is still marked "reserved".
     */
    X86.opLOCK,             X86.opLOCK,             X86.opREPNZ,            X86.opREPZ,         // 0xF0-0xF3
    X86.opHLT,              X86.opCMC,              X86.opGRP3b,            X86.opGRP3w,        // 0xF4-0xF7
    X86.opCLC,              X86.opSTC,              X86.opCLI,              X86.opSTI,          // 0xF8-0xFB
    X86.opCLD,              X86.opSTD,              X86.opGRP4b,            X86.opGRP4w         // 0xFC-0xFF
];

/**
 * A word (or two) on instruction groups (eg, Grp1, Grp2), which are groups of instructions that
 * use a mod/reg/rm byte, where the reg field of that byte selects a function rather than a register.
 *
 * I start with the groupings used by Intel's "Pentium Processor User's Manual (Volume 3: Architecture
 * and Programming Manual)", but I deviate slightly, mostly by subdividing their groups with letter suffixes:
 *
 *      Opcodes     Intel       PCx86                                               PC Mag TechRef
 *      -------     -----       ----                                                --------------
 *      0x80-0x83   Grp1        Grp1b and Grp1w                                     Group A
 *      0xC0-0xC1   Grp2        Grp2b and Grp2w (opGRP2bn/wn)                       Group B
 *      0xD0-0xD3   Grp2        Grp2b and Grp2w (opGRP2b1/w1 and opGRP2bCL/wCL)     Group B
 *      0xF6-0xF7   Grp3        Grp3b and Grp3w                                     Group C
 *      0xFE        Grp4        Grp4b                                               Group D
 *      0xFF        Grp5        Grp4w                                               Group E
 *      0x0F,0x00   Grp6        Grp6 (SLDT, STR, LLDT, LTR, VERR, VERW)             Group F
 *      0x0F,0x01   Grp7        Grp7 (SGDT, SIDT, LGDT, LIDT, SMSW, LMSW, INVLPG)   Group G
 *      0x0F,0xBA   Grp8        Grp8 (BT, BTS, BTR, BTC)                            Group H
 *      0x0F,0xC7   Grp9        Grp9 (CMPXCH)                                       (N/A, 80486 and up)
 *
 * My only serious deviation is Grp5, which I refer to as Grp4w, because it contains word forms of
 * the INC and DEC instructions found in Grp4b.  Granted, Grp4w also contains versions of the CALL,
 * JMP and PUSH instructions, which are not in Grp4b, but there's nothing in Grp4b that conflicts with
 * Grp4w, so I think my nomenclature makes more sense.  To compensate, I don't use Grp5, so that the
 * remaining group numbers remain in sync with Intel's.
 *
 * To the above list, I've added a few "single-serving" groups: opcode 0x8F uses GrpPOPw, and opcodes 0xC6/0xC7
 * use GrpMOVn.  In both of these groups, the only valid (documented) instruction is where reg=0x0.
 *
 * TODO: Test what happens on real hardware when the reg field is non-zero for opcodes 0x8F and 0xC6/0xC7.
 */
X86.aOpGrp1b = [
    X86.fnADDb,             X86.fnORb,              X86.fnADCb,             X86.fnSBBb,             // 0x80/0x82(reg=0x0-0x3)
    X86.fnANDb,             X86.fnSUBb,             X86.fnXORb,             X86.fnCMPb              // 0x80/0x82(reg=0x4-0x7)
];

X86.aOpGrp1w = [
    X86.fnADDw,             X86.fnORw,              X86.fnADCw,             X86.fnSBBw,             // 0x81/0x83(reg=0x0-0x3)
    X86.fnANDw,             X86.fnSUBw,             X86.fnXORw,             X86.fnCMPw              // 0x81/0x83(reg=0x4-0x7)
];

X86.aOpGrpPOPw = [
    X86.fnPOPw,             X86.fnGRPFault,         X86.fnGRPFault,         X86.fnGRPFault,         // 0x8F(reg=0x0-0x3)
    X86.fnGRPFault,         X86.fnGRPFault,         X86.fnGRPFault,         X86.fnGRPFault          // 0x8F(reg=0x4-0x7)
];

X86.aOpGrpMOVn = [
    X86.fnMOVn,             X86.fnGRPUndefined,     X86.fnGRPUndefined,     X86.fnGRPUndefined,     // 0xC6/0xC7(reg=0x0-0x3)
    X86.fnGRPUndefined,     X86.fnGRPUndefined,     X86.fnGRPUndefined,     X86.fnGRPUndefined      // 0xC6/0xC7(reg=0x4-0x7)
];

X86.aOpGrp2b = [
    X86.fnROLb,             X86.fnRORb,             X86.fnRCLb,             X86.fnRCRb,             // 0xC0/0xD0/0xD2(reg=0x0-0x3)
    X86.fnSHLb,             X86.fnSHRb,             X86.fnGRPUndefined,     X86.fnSARb              // 0xC0/0xD0/0xD2(reg=0x4-0x7)
];

X86.aOpGrp2w = [
    X86.fnROLw,             X86.fnRORw,             X86.fnRCLw,             X86.fnRCRw,             // 0xC1/0xD1/0xD3(reg=0x0-0x3)
    X86.fnSHLw,             X86.fnSHRw,             X86.fnGRPUndefined,     X86.fnSARw              // 0xC1/0xD1/0xD3(reg=0x4-0x7)
];

X86.aOpGrp2d = [
    X86.fnROLd,             X86.fnRORd,             X86.fnRCLd,             X86.fnRCRd,             // 0xC1/0xD1/0xD3(reg=0x0-0x3)
    X86.fnSHLd,             X86.fnSHRd,             X86.fnGRPUndefined,     X86.fnSARd              // 0xC1/0xD1/0xD3(reg=0x4-0x7)
];

X86.aOpGrp3b = [
    X86.fnTESTib,           X86.fnGRPUndefined,     X86.fnNOTb,             X86.fnNEGb,             // 0xF6(reg=0x0-0x3)
    X86.fnMULb,             X86.fnIMULb,            X86.fnDIVb,             X86.fnIDIVb             // 0xF6(reg=0x4-0x7)
];

X86.aOpGrp3w = [
    X86.fnTESTiw,           X86.fnGRPUndefined,     X86.fnNOTw,             X86.fnNEGw,             // 0xF7(reg=0x0-0x3)
    X86.fnMULw,             X86.fnIMULw,            X86.fnDIVw,             X86.fnIDIVw             // 0xF7(reg=0x4-0x7)
];

X86.aOpGrp4b = [
    X86.fnINCb,             X86.fnDECb,             X86.fnGRPUndefined,     X86.fnGRPUndefined,     // 0xFE(reg=0x0-0x3)
    X86.fnGRPUndefined,     X86.fnGRPUndefined,     X86.fnGRPUndefined,     X86.fnGRPUndefined      // 0xFE(reg=0x4-0x7)
];

X86.aOpGrp4w = [
    X86.fnINCw,             X86.fnDECw,             X86.fnCALLw,            X86.fnCALLFdw,          // 0xFF(reg=0x0-0x3)
    X86.fnJMPw,             X86.fnJMPFdw,           X86.fnPUSHw,            X86.fnGRPUndefined      // 0xFF(reg=0x4-0x7)
];
