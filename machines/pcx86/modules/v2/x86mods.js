/**
 * @fileoverview Implements PCx86 ModRegRM decoders
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import X86 from "./x86.js";
import StrLib from "../../../modules/v2/strlib.js";
import { BACKTRACK } from "./defines.js";

/**
 * Before 80386 support was added to PCx86, the approach to decoding ModRegRM bytes (which I usually
 * just call ModRM bytes) used one generated function per ModRM value.  This was optimal for 16-bit processors,
 * because the functions were small, and it was maximally efficient, turning the entire ModRM decoding operation
 * into one table lookup and function call.
 *
 * However, that approach didn't scale well for 32-bit processors, which had extended ModRM capabilities in both
 * the addressing mode dimension and the operand size dimension.  So I've rewritten ModRM decoding as 18 functions.
 * The first 9 are for 16-bit addressing modes, and the second 9 are for 32-bit addressing modes.  Within each
 * group of 9, there are 3 for 8-bit operands, 3 for 16-bit operands, and 3 for 32-bit operands.  And each group of 3
 * contains functions for register-source, memory-source, and group-source.
 *
 * Each of the 18 functions must do additional work to examine the ModRM bits, which makes decoding slightly slower,
 * but it's not really noticeable, and the speed difference didn't justify the additional generated code.  So one much
 * smaller file (x86mods.js) replaces a host of older files (x86modb.js, x86modw.js, x86modb16.js, x86modw16.js,
 * x86modb32.js, x86modw32.js, and x86modsib.js).
 *
 * You can dig up the older files from the repository if you're curious, or you can run /tools/misc/x86gen.js to
 * get a sense of what they contained (x86gen.js created most of the code, but it still had to be massaged afterward).
 */

/**
 * modRegByte16(fn)
 *
 * @this {CPUx86}
 * @param {function(number,number)} fn (dst,src)
 */
X86.modRegByte16 = function(fn)
{
    let dst, src;
    let bModRM = (this.bModRM = this.getIPByte()) & 0xC7;

    switch(bModRM) {
    case 0x00:
        src = this.getEAByteData(this.regEBX + this.regESI);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndex;
        break;
    case 0x01:
        src = this.getEAByteData(this.regEBX + this.regEDI);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexExtra;
        break;
    case 0x02:
        src = this.getEAByteStack(this.regEBP + this.regESI);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexExtra;
        break;
    case 0x03:
        src = this.getEAByteStack(this.regEBP + this.regEDI);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndex;
        break;
    case 0x04:
        src = this.getEAByteData(this.regESI);
        this.nStepCycles -= this.cycleCounts.nEACyclesBase;
        break;
    case 0x05:
        src = this.getEAByteData(this.regEDI);
        this.nStepCycles -= this.cycleCounts.nEACyclesBase;
        break;
    case 0x06:
        src = this.getEAByteData(this.getIPAddr());
        this.nStepCycles -= this.cycleCounts.nEACyclesDisp;
        break;
    case 0x07:
        src = this.getEAByteData(this.regEBX);
        this.nStepCycles -= this.cycleCounts.nEACyclesBase;
        break;
    case 0x40:
        src = this.getEAByteData(this.regEBX + this.regESI + this.getIPDisp());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDisp;
        break;
    case 0x41:
        src = this.getEAByteData(this.regEBX + this.regEDI + this.getIPDisp());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDispExtra;
        break;
    case 0x42:
        src = this.getEAByteStack(this.regEBP + this.regESI + this.getIPDisp());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDispExtra;
        break;
    case 0x43:
        src = this.getEAByteStack(this.regEBP + this.regEDI + this.getIPDisp());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDisp;
        break;
    case 0x44:
        src = this.getEAByteData(this.regESI + this.getIPDisp());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0x45:
        src = this.getEAByteData(this.regEDI + this.getIPDisp());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0x46:
        src = this.getEAByteStack(this.regEBP + this.getIPDisp());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0x47:
        src = this.getEAByteData(this.regEBX + this.getIPDisp());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0x80:
        src = this.getEAByteData(this.regEBX + this.regESI + this.getIPAddr());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDisp;
        break;
    case 0x81:
        src = this.getEAByteData(this.regEBX + this.regEDI + this.getIPAddr());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDispExtra;
        break;
    case 0x82:
        src = this.getEAByteStack(this.regEBP + this.regESI + this.getIPAddr());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDispExtra;
        break;
    case 0x83:
        src = this.getEAByteStack(this.regEBP + this.regEDI + this.getIPAddr());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDisp;
        break;
    case 0x84:
        src = this.getEAByteData(this.regESI + this.getIPAddr());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0x85:
        src = this.getEAByteData(this.regEDI + this.getIPAddr());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0x86:
        src = this.getEAByteStack(this.regEBP + this.getIPAddr());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0x87:
        src = this.getEAByteData(this.regEBX + this.getIPAddr());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0xC0:
        src = this.regEAX & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiAL;
        break;
    case 0xC1:
        src = this.regECX & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiCL;
        break;
    case 0xC2:
        src = this.regEDX & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiDL;
        break;
    case 0xC3:
        src = this.regEBX & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiBL;
        break;
    case 0xC4:
        src = (this.regEAX >> 8) & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiAH;
        break;
    case 0xC5:
        src = (this.regECX >> 8) & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiCH;
        break;
    case 0xC6:
        src = (this.regEDX >> 8) & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiDH;
        break;
    case 0xC7:
        src = (this.regEBX >> 8) & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiBH;
        break;
    default:
        src = 0;
        this.assert(false, "modRegByte16(): unrecognized modrm byte " + StrLib.toHexByte(bModRM));
        break;
    }

    let reg = (this.bModRM >> 3) & 0x7;

    switch(reg) {
    case 0x0:
        dst = this.regEAX & 0xff;
        break;
    case 0x1:
        dst = this.regECX & 0xff;
        break;
    case 0x2:
        dst = this.regEDX & 0xff;
        break;
    case 0x3:
        dst = this.regEBX & 0xff;
        break;
    case 0x4:
        dst = (this.regEAX >> 8) & 0xff;
        break;
    case 0x5:
        dst = (this.regECX >> 8) & 0xff;
        break;
    case 0x6:
        dst = (this.regEDX >> 8) & 0xff;
        break;
    case 0x7:
        dst = (this.regEBX >> 8) & 0xff;
        break;
    default:
        dst = 0;
        break;
    }

    let b = fn.call(this, dst, src);

    switch(reg) {
    case 0x0:
        this.regEAX = (this.regEAX & ~0xff) | b;
        if (BACKTRACK) this.backTrack.btiAL = this.backTrack.btiEALo;
        break;
    case 0x1:
        this.regECX = (this.regECX & ~0xff) | b;
        if (BACKTRACK) this.backTrack.btiCL = this.backTrack.btiEALo;
        break;
    case 0x2:
        this.regEDX = (this.regEDX & ~0xff) | b;
        if (BACKTRACK) this.backTrack.btiDL = this.backTrack.btiEALo;
        break;
    case 0x3:
        this.regEBX = (this.regEBX & ~0xff) | b;
        if (BACKTRACK) this.backTrack.btiBL = this.backTrack.btiEALo;
        break;
    case 0x4:
        this.regEAX = (this.regEAX & ~0xff00) | (b << 8);
        if (BACKTRACK) this.backTrack.btiAH = this.backTrack.btiEALo;
        break;
    case 0x5:
        this.regECX = (this.regECX & ~0xff00) | (b << 8);
        if (BACKTRACK) this.backTrack.btiCH = this.backTrack.btiEALo;
        break;
    case 0x6:
        this.regEDX = (this.regEDX & ~0xff00) | (b << 8);
        if (BACKTRACK) this.backTrack.btiDH = this.backTrack.btiEALo;
        break;
    case 0x7:
        this.regEBX = (this.regEBX & ~0xff00) | (b << 8);
        if (BACKTRACK) this.backTrack.btiBH = this.backTrack.btiEALo;
        break;
    }
};

/**
 * modMemByte16(fn)
 *
 * @this {CPUx86}
 * @param {function(number,number)} fn (dst,src)
 */
X86.modMemByte16 = function(fn)
{
    let dst, src;
    let bModRM = (this.bModRM = this.getIPByte()) & 0xC7;

    switch(bModRM) {
    case 0x00:
        dst = this.getEAByteData(this.regEBX + this.regESI);
        this.regEAWrite = this.regEA;
        break;
    case 0x01:
        dst = this.getEAByteData(this.regEBX + this.regEDI);
        this.regEAWrite = this.regEA;
        break;
    case 0x02:
        dst = this.getEAByteStack(this.regEBP + this.regESI);
        this.regEAWrite = this.regEA;
        break;
    case 0x03:
        dst = this.getEAByteStack(this.regEBP + this.regEDI);
        this.regEAWrite = this.regEA;
        break;
    case 0x04:
        dst = this.getEAByteData(this.regESI);
        this.regEAWrite = this.regEA;
        break;
    case 0x05:
        dst = this.getEAByteData(this.regEDI);
        this.regEAWrite = this.regEA;
        break;
    case 0x06:
        dst = this.getEAByteData(this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x07:
        dst = this.getEAByteData(this.regEBX);
        this.regEAWrite = this.regEA;
        break;
    case 0x40:
        dst = this.getEAByteData(this.regEBX + this.regESI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x41:
        dst = this.getEAByteData(this.regEBX + this.regEDI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x42:
        dst = this.getEAByteStack(this.regEBP + this.regESI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x43:
        dst = this.getEAByteStack(this.regEBP + this.regEDI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x44:
        dst = this.getEAByteData(this.regESI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x45:
        dst = this.getEAByteData(this.regEDI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x46:
        dst = this.getEAByteStack(this.regEBP + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x47:
        dst = this.getEAByteData(this.regEBX + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x80:
        dst = this.getEAByteData(this.regEBX + this.regESI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x81:
        dst = this.getEAByteData(this.regEBX + this.regEDI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x82:
        dst = this.getEAByteStack(this.regEBP + this.regESI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x83:
        dst = this.getEAByteStack(this.regEBP + this.regEDI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x84:
        dst = this.getEAByteData(this.regESI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x85:
        dst = this.getEAByteData(this.regEDI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x86:
        dst = this.getEAByteStack(this.regEBP + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x87:
        dst = this.getEAByteData(this.regEBX + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0xC0:
        dst = this.regEAX & 0xff;
        break;
    case 0xC1:
        dst = this.regECX & 0xff;
        break;
    case 0xC2:
        dst = this.regEDX & 0xff;
        break;
    case 0xC3:
        dst = this.regEBX & 0xff;
        break;
    case 0xC4:
        dst = (this.regEAX >> 8) & 0xff;
        break;
    case 0xC5:
        dst = (this.regECX >> 8) & 0xff;
        break;
    case 0xC6:
        dst = (this.regEDX >> 8) & 0xff;
        break;
    case 0xC7:
        dst = (this.regEBX >> 8) & 0xff;
        break;
    default:
        dst = 0;
        this.assert(false, "modMemByte16(): unrecognized modrm byte " + StrLib.toHexByte(bModRM));
        break;
    }

    let reg = (this.bModRM >> 3) & 0x7;

    switch(reg) {
    case 0x0:
        src = this.regEAX & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiAL;
        break;
    case 0x1:
        src = this.regECX & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiCL;
        break;
    case 0x2:
        src = this.regEDX & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiDL;
        break;
    case 0x3:
        src = this.regEBX & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiBL;
        break;
    case 0x4:
        src = (this.regEAX >> 8) & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiAH;
        break;
    case 0x5:
        src = (this.regECX >> 8) & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiCH;
        break;
    case 0x6:
        src = (this.regEDX >> 8) & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiDH;
        break;
    case 0x7:
        src = (this.regEBX >> 8) & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiBH;
        break;
    default:
        src = 0;
        break;
    }

    let b = fn.call(this, dst, src);

    switch(bModRM) {
    case 0x00:
    case 0x03:
        this.setEAByte(b);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndex;
        break;
    case 0x01:
    case 0x02:
        this.setEAByte(b);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexExtra;
        break;
    case 0x04:
    case 0x05:
    case 0x07:
        this.setEAByte(b);
        this.nStepCycles -= this.cycleCounts.nEACyclesBase;
        break;
    case 0x06:
        this.setEAByte(b);
        this.nStepCycles -= this.cycleCounts.nEACyclesDisp;
        break;
    case 0x40:
    case 0x43:
    case 0x80:
    case 0x83:
        this.setEAByte(b);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDisp;
        break;
    case 0x41:
    case 0x42:
    case 0x81:
    case 0x82:
        this.setEAByte(b);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDispExtra;
        break;
    case 0x44:
    case 0x45:
    case 0x46:
    case 0x47:
    case 0x84:
    case 0x85:
    case 0x86:
    case 0x87:
        this.setEAByte(b);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0xC0:
        this.regEAX = (this.regEAX & ~0xff) | b;
        if (BACKTRACK) this.backTrack.btiAL = this.backTrack.btiEALo;
        break;
    case 0xC1:
        this.regECX = (this.regECX & ~0xff) | b;
        if (BACKTRACK) this.backTrack.btiCL = this.backTrack.btiEALo;
        break;
    case 0xC2:
        this.regEDX = (this.regEDX & ~0xff) | b;
        if (BACKTRACK) this.backTrack.btiDL = this.backTrack.btiEALo;
        break;
    case 0xC3:
        this.regEBX = (this.regEBX & ~0xff) | b;
        if (BACKTRACK) this.backTrack.btiBL = this.backTrack.btiEALo;
        break;
    case 0xC4:
        this.regEAX = (this.regEAX & ~0xff00) | (b << 8);
        if (BACKTRACK) this.backTrack.btiAH = this.backTrack.btiEALo;
        break;
    case 0xC5:
        this.regECX = (this.regECX & ~0xff00) | (b << 8);
        if (BACKTRACK) this.backTrack.btiCH = this.backTrack.btiEALo;
        break;
    case 0xC6:
        this.regEDX = (this.regEDX & ~0xff00) | (b << 8);
        if (BACKTRACK) this.backTrack.btiDH = this.backTrack.btiEALo;
        break;
    case 0xC7:
        this.regEBX = (this.regEBX & ~0xff00) | (b << 8);
        if (BACKTRACK) this.backTrack.btiBH = this.backTrack.btiEALo;
        break;
    default:
        this.assert(false, "modMemByte16(): unrecognized modrm byte " + StrLib.toHexByte(bModRM));
        break;
    }
};

/**
 * modGrpByte16(afnGrp, fnSrc)
 *
 * @this {CPUx86}
 * @param {Array.<function(number,number)>} afnGrp
 * @param {function()} fnSrc
 */
X86.modGrpByte16 = function(afnGrp, fnSrc)
{
    let dst;
    let bModRM = (this.bModRM = this.getIPByte()) & 0xC7;

    switch(bModRM) {
    case 0x00:
        dst = this.getEAByteData(this.regEBX + this.regESI);
        this.regEAWrite = this.regEA;
        break;
    case 0x01:
        dst = this.getEAByteData(this.regEBX + this.regEDI);
        this.regEAWrite = this.regEA;
        break;
    case 0x02:
        dst = this.getEAByteStack(this.regEBP + this.regESI);
        this.regEAWrite = this.regEA;
        break;
    case 0x03:
        dst = this.getEAByteStack(this.regEBP + this.regEDI);
        this.regEAWrite = this.regEA;
        break;
    case 0x04:
        dst = this.getEAByteData(this.regESI);
        this.regEAWrite = this.regEA;
        break;
    case 0x05:
        dst = this.getEAByteData(this.regEDI);
        this.regEAWrite = this.regEA;
        break;
    case 0x06:
        dst = this.getEAByteData(this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x07:
        dst = this.getEAByteData(this.regEBX);
        this.regEAWrite = this.regEA;
        break;
    case 0x40:
        dst = this.getEAByteData(this.regEBX + this.regESI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x41:
        dst = this.getEAByteData(this.regEBX + this.regEDI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x42:
        dst = this.getEAByteStack(this.regEBP + this.regESI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x43:
        dst = this.getEAByteStack(this.regEBP + this.regEDI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x44:
        dst = this.getEAByteData(this.regESI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x45:
        dst = this.getEAByteData(this.regEDI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x46:
        dst = this.getEAByteStack(this.regEBP + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x47:
        dst = this.getEAByteData(this.regEBX + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x80:
        dst = this.getEAByteData(this.regEBX + this.regESI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x81:
        dst = this.getEAByteData(this.regEBX + this.regEDI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x82:
        dst = this.getEAByteStack(this.regEBP + this.regESI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x83:
        dst = this.getEAByteStack(this.regEBP + this.regEDI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x84:
        dst = this.getEAByteData(this.regESI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x85:
        dst = this.getEAByteData(this.regEDI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x86:
        dst = this.getEAByteStack(this.regEBP + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x87:
        dst = this.getEAByteData(this.regEBX + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0xC0:
        dst = this.regEAX & 0xff;
        break;
    case 0xC1:
        dst = this.regECX & 0xff;
        break;
    case 0xC2:
        dst = this.regEDX & 0xff;
        break;
    case 0xC3:
        dst = this.regEBX & 0xff;
        break;
    case 0xC4:
        dst = (this.regEAX >> 8) & 0xff;
        break;
    case 0xC5:
        dst = (this.regECX >> 8) & 0xff;
        break;
    case 0xC6:
        dst = (this.regEDX >> 8) & 0xff;
        break;
    case 0xC7:
        dst = (this.regEBX >> 8) & 0xff;
        break;
    default:
        dst = 0;
        this.assert(false, "modGrpByte16(): unrecognized modrm byte " + StrLib.toHexByte(bModRM));
        break;
    }

    let reg = (this.bModRM >> 3) & 0x7;

    let b = afnGrp[reg].call(this, dst, fnSrc.call(this));

    switch(bModRM) {
    case 0x00:
    case 0x03:
        this.setEAByte(b);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndex;
        break;
    case 0x01:
    case 0x02:
        this.setEAByte(b);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexExtra;
        break;
    case 0x04:
    case 0x05:
    case 0x07:
        this.setEAByte(b);
        this.nStepCycles -= this.cycleCounts.nEACyclesBase;
        break;
    case 0x06:
        this.setEAByte(b);
        this.nStepCycles -= this.cycleCounts.nEACyclesDisp;
        break;
    case 0x40:
    case 0x43:
    case 0x80:
    case 0x83:
        this.setEAByte(b);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDisp;
        break;
    case 0x41:
    case 0x42:
    case 0x81:
    case 0x82:
        this.setEAByte(b);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDispExtra;
        break;
    case 0x44:
    case 0x45:
    case 0x46:
    case 0x47:
    case 0x84:
    case 0x85:
    case 0x86:
    case 0x87:
        this.setEAByte(b);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0xC0:
        this.regEAX = (this.regEAX & ~0xff) | b;
        break;
    case 0xC1:
        this.regECX = (this.regECX & ~0xff) | b;
        break;
    case 0xC2:
        this.regEDX = (this.regEDX & ~0xff) | b;
        break;
    case 0xC3:
        this.regEBX = (this.regEBX & ~0xff) | b;
        break;
    case 0xC4:
        this.regEAX = (this.regEAX & ~0xff00) | (b << 8);
        break;
    case 0xC5:
        this.regECX = (this.regECX & ~0xff00) | (b << 8);
        break;
    case 0xC6:
        this.regEDX = (this.regEDX & ~0xff00) | (b << 8);
        break;
    case 0xC7:
        this.regEBX = (this.regEBX & ~0xff00) | (b << 8);
        break;
    }
};

/**
 * modRegShort16(fn)
 *
 * @this {CPUx86}
 * @param {function(number,number)} fn (dst,src)
 */
X86.modRegShort16 = function(fn)
{
    let dst, src;
    let bModRM = (this.bModRM = this.getIPByte()) & 0xC7;

    switch(bModRM) {
    case 0x00:
        src = this.getEAShortData(this.regEBX + this.regESI);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndex;
        break;
    case 0x01:
        src = this.getEAShortData(this.regEBX + this.regEDI);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexExtra;
        break;
    case 0x02:
        src = this.getEAShortStack(this.regEBP + this.regESI);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexExtra;
        break;
    case 0x03:
        src = this.getEAShortStack(this.regEBP + this.regEDI);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndex;
        break;
    case 0x04:
        src = this.getEAShortData(this.regESI);
        this.nStepCycles -= this.cycleCounts.nEACyclesBase;
        break;
    case 0x05:
        src = this.getEAShortData(this.regEDI);
        this.nStepCycles -= this.cycleCounts.nEACyclesBase;
        break;
    case 0x06:
        src = this.getEAShortData(this.getIPAddr());
        this.nStepCycles -= this.cycleCounts.nEACyclesDisp;
        break;
    case 0x07:
        src = this.getEAShortData(this.regEBX);
        this.nStepCycles -= this.cycleCounts.nEACyclesBase;
        break;
    case 0x40:
        src = this.getEAShortData(this.regEBX + this.regESI + this.getIPDisp());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDisp;
        break;
    case 0x41:
        src = this.getEAShortData(this.regEBX + this.regEDI + this.getIPDisp());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDispExtra;
        break;
    case 0x42:
        src = this.getEAShortStack(this.regEBP + this.regESI + this.getIPDisp());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDispExtra;
        break;
    case 0x43:
        src = this.getEAShortStack(this.regEBP + this.regEDI + this.getIPDisp());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDisp;
        break;
    case 0x44:
        src = this.getEAShortData(this.regESI + this.getIPDisp());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0x45:
        src = this.getEAShortData(this.regEDI + this.getIPDisp());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0x46:
        src = this.getEAShortStack(this.regEBP + this.getIPDisp());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0x47:
        src = this.getEAShortData(this.regEBX + this.getIPDisp());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0x80:
        src = this.getEAShortData(this.regEBX + this.regESI + this.getIPAddr());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDisp;
        break;
    case 0x81:
        src = this.getEAShortData(this.regEBX + this.regEDI + this.getIPAddr());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDispExtra;
        break;
    case 0x82:
        src = this.getEAShortStack(this.regEBP + this.regESI + this.getIPAddr());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDispExtra;
        break;
    case 0x83:
        src = this.getEAShortStack(this.regEBP + this.regEDI + this.getIPAddr());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDisp;
        break;
    case 0x84:
        src = this.getEAShortData(this.regESI + this.getIPAddr());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0x85:
        src = this.getEAShortData(this.regEDI + this.getIPAddr());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0x86:
        src = this.getEAShortStack(this.regEBP + this.getIPAddr());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0x87:
        src = this.getEAShortData(this.regEBX + this.getIPAddr());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0xC0:
        src = this.regEAX & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiAL; this.backTrack.btiEAHi = this.backTrack.btiAH;
        }
        break;
    case 0xC1:
        src = this.regECX & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiCL; this.backTrack.btiEAHi = this.backTrack.btiCH;
        }
        break;
    case 0xC2:
        src = this.regEDX & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiDL; this.backTrack.btiEAHi = this.backTrack.btiDH;
        }
        break;
    case 0xC3:
        src = this.regEBX & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiBL; this.backTrack.btiEAHi = this.backTrack.btiBH;
        }
        break;
    case 0xC4:
        src = this.getSP() & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = X86.BTINFO.SP_LO; this.backTrack.btiEAHi = X86.BTINFO.SP_HI;
        }
        break;
    case 0xC5:
        src = this.regEBP & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiBPLo; this.backTrack.btiEAHi = this.backTrack.btiBPHi;
        }
        break;
    case 0xC6:
        src = this.regESI & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiSILo; this.backTrack.btiEAHi = this.backTrack.btiSIHi;
        }
        break;
    case 0xC7:
        src = this.regEDI & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiDILo; this.backTrack.btiEAHi = this.backTrack.btiDIHi;
        }
        break;
    default:
        src = 0;
        this.assert(false, "modRegShort16(): unrecognized modrm byte " + StrLib.toHexByte(bModRM));
        break;
    }

    let reg = (this.bModRM >> 3) & 0x7;

    switch(reg) {
    case 0x0:
        dst = this.regEAX & 0xffff;
        break;
    case 0x1:
        dst = this.regECX & 0xffff;
        break;
    case 0x2:
        dst = this.regEDX & 0xffff;
        break;
    case 0x3:
        dst = this.regEBX & 0xffff;
        break;
    case 0x4:
        dst = this.getSP() & 0xffff;
        break;
    case 0x5:
        dst = this.regEBP & 0xffff;
        break;
    case 0x6:
        dst = this.regESI & 0xffff;
        break;
    case 0x7:
        dst = this.regEDI & 0xffff;
        break;
    default:
        dst = 0;
        break;
    }

    let w = fn.call(this, dst, src);
    this.assert(!(w & ~0xffff), "modRegShort16(): result out of range: " + StrLib.toHexLong(w));

    switch(reg) {
    case 0x0:
        this.regEAX = (this.regEAX & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiAL = this.backTrack.btiEALo; this.backTrack.btiAH = this.backTrack.btiEAHi;
        }
        break;
    case 0x1:
        this.regECX = (this.regECX & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiCL = this.backTrack.btiEALo; this.backTrack.btiCH = this.backTrack.btiEAHi;
        }
        break;
    case 0x2:
        this.regEDX = (this.regEDX & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiDL = this.backTrack.btiEALo; this.backTrack.btiDH = this.backTrack.btiEAHi;
        }
        break;
    case 0x3:
        this.regEBX = (this.regEBX & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiBL = this.backTrack.btiEALo; this.backTrack.btiBH = this.backTrack.btiEAHi;
        }
        break;
    case 0x4:
        this.setSP((this.getSP() & ~0xffff) | w);
        break;
    case 0x5:
        this.regEBP = (this.regEBP & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiBPLo = this.backTrack.btiEALo; this.backTrack.btiBPHi = this.backTrack.btiEAHi;
        }
        break;
    case 0x6:
        this.regESI = (this.regESI & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiSILo = this.backTrack.btiEALo; this.backTrack.btiSIHi = this.backTrack.btiEAHi;
        }
        break;
    case 0x7:
        this.regEDI = (this.regEDI & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiDILo = this.backTrack.btiEALo; this.backTrack.btiDIHi = this.backTrack.btiEAHi;
        }
        break;
    }
};

/**
 * modMemShort16(fn)
 *
 * @this {CPUx86}
 * @param {function(number,number)} fn (dst,src)
 */
X86.modMemShort16 = function(fn)
{
    let dst, src;
    let bModRM = (this.bModRM = this.getIPByte()) & 0xC7;

    switch(bModRM) {
    case 0x00:
        dst = this.getEAShortData(this.regEBX + this.regESI);
        this.regEAWrite = this.regEA;
        break;
    case 0x01:
        dst = this.getEAShortData(this.regEBX + this.regEDI);
        this.regEAWrite = this.regEA;
        break;
    case 0x02:
        dst = this.getEAShortStack(this.regEBP + this.regESI);
        this.regEAWrite = this.regEA;
        break;
    case 0x03:
        dst = this.getEAShortStack(this.regEBP + this.regEDI);
        this.regEAWrite = this.regEA;
        break;
    case 0x04:
        dst = this.getEAShortData(this.regESI);
        this.regEAWrite = this.regEA;
        break;
    case 0x05:
        dst = this.getEAShortData(this.regEDI);
        this.regEAWrite = this.regEA;
        break;
    case 0x06:
        dst = this.getEAShortData(this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x07:
        dst = this.getEAShortData(this.regEBX);
        this.regEAWrite = this.regEA;
        break;
    case 0x40:
        dst = this.getEAShortData(this.regEBX + this.regESI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x41:
        dst = this.getEAShortData(this.regEBX + this.regEDI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x42:
        dst = this.getEAShortStack(this.regEBP + this.regESI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x43:
        dst = this.getEAShortStack(this.regEBP + this.regEDI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x44:
        dst = this.getEAShortData(this.regESI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x45:
        dst = this.getEAShortData(this.regEDI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x46:
        dst = this.getEAShortStack(this.regEBP + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x47:
        dst = this.getEAShortData(this.regEBX + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x80:
        dst = this.getEAShortData(this.regEBX + this.regESI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x81:
        dst = this.getEAShortData(this.regEBX + this.regEDI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x82:
        dst = this.getEAShortStack(this.regEBP + this.regESI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x83:
        dst = this.getEAShortStack(this.regEBP + this.regEDI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x84:
        dst = this.getEAShortData(this.regESI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x85:
        dst = this.getEAShortData(this.regEDI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x86:
        dst = this.getEAShortStack(this.regEBP + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x87:
        dst = this.getEAShortData(this.regEBX + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0xC0:
        dst = this.regEAX & 0xffff;
        break;
    case 0xC1:
        dst = this.regECX & 0xffff;
        break;
    case 0xC2:
        dst = this.regEDX & 0xffff;
        break;
    case 0xC3:
        dst = this.regEBX & 0xffff;
        break;
    case 0xC4:
        dst = this.getSP() & 0xffff;
        break;
    case 0xC5:
        dst = this.regEBP & 0xffff;
        break;
    case 0xC6:
        dst = this.regESI & 0xffff;
        break;
    case 0xC7:
        dst = this.regEDI & 0xffff;
        break;
    default:
        dst = 0;
        this.assert(false, "modMemShort16(): unrecognized modrm byte " + StrLib.toHexByte(bModRM));
        break;
    }

    let reg = (this.bModRM >> 3) & 0x7;

    switch(reg) {
    case 0x0:
        src = this.regEAX & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiAL; this.backTrack.btiEAHi = this.backTrack.btiAH;
        }
        break;
    case 0x1:
        src = this.regECX & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiCL; this.backTrack.btiEAHi = this.backTrack.btiCH;
        }
        break;
    case 0x2:
        src = this.regEDX & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiDL; this.backTrack.btiEAHi = this.backTrack.btiDH;
        }
        break;
    case 0x3:
        src = this.regEBX & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiBL; this.backTrack.btiEAHi = this.backTrack.btiBH;
        }
        break;
    case 0x4:
        src = this.getSP() & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = X86.BTINFO.SP_LO; this.backTrack.btiEAHi = X86.BTINFO.SP_HI;
        }
        break;
    case 0x5:
        src = this.regEBP & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiBPLo; this.backTrack.btiEAHi = this.backTrack.btiBPHi;
        }
        break;
    case 0x6:
        src = this.regESI & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiSILo; this.backTrack.btiEAHi = this.backTrack.btiSIHi;
        }
        break;
    case 0x7:
        src = this.regEDI & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiDILo; this.backTrack.btiEAHi = this.backTrack.btiDIHi;
        }
        break;
    default:
        src = 0;
        break;
    }

    let w = fn.call(this, dst, src);
    this.assert(!(w & ~0xffff), "modMemShort16(): result out of range: " + StrLib.toHexLong(w));

    switch(bModRM) {
    case 0x00:
    case 0x03:
        this.setEAShort(w);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndex;
        break;
    case 0x01:
    case 0x02:
        this.setEAShort(w);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexExtra;
        break;
    case 0x04:
    case 0x05:
    case 0x07:
        this.setEAShort(w);
        this.nStepCycles -= this.cycleCounts.nEACyclesBase;
        break;
    case 0x06:
        this.setEAShort(w);
        this.nStepCycles -= this.cycleCounts.nEACyclesDisp;
        break;
    case 0x40:
    case 0x43:
    case 0x80:
    case 0x83:
        this.setEAShort(w);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDisp;
        break;
    case 0x41:
    case 0x42:
    case 0x81:
    case 0x82:
        this.setEAShort(w);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDispExtra;
        break;
    case 0x44:
    case 0x45:
    case 0x46:
    case 0x47:
    case 0x84:
    case 0x85:
    case 0x86:
    case 0x87:
        this.setEAShort(w);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0xC0:
        this.regEAX = (this.regEAX & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiAL = this.backTrack.btiEALo; this.backTrack.btiAH = this.backTrack.btiEAHi;
        }
        break;
    case 0xC1:
        this.regECX = (this.regECX & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiCL = this.backTrack.btiEALo; this.backTrack.btiCH = this.backTrack.btiEAHi;
        }
        break;
    case 0xC2:
        this.regEDX = (this.regEDX & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiDL = this.backTrack.btiEALo; this.backTrack.btiDH = this.backTrack.btiEAHi;
        }
        break;
    case 0xC3:
        this.regEBX = (this.regEBX & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiBL = this.backTrack.btiEALo; this.backTrack.btiBH = this.backTrack.btiEAHi;
        }
        break;
    case 0xC4:
        this.setSP((this.getSP() & ~0xffff) | w);
        break;
    case 0xC5:
        this.regEBP = (this.regEBP & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiBPLo = this.backTrack.btiEALo; this.backTrack.btiBPHi = this.backTrack.btiEAHi;
        }
        break;
    case 0xC6:
        this.regESI = (this.regESI & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiSILo = this.backTrack.btiEALo; this.backTrack.btiSIHi = this.backTrack.btiEAHi;
        }
        break;
    case 0xC7:
        this.regEDI = (this.regEDI & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiDILo = this.backTrack.btiEALo; this.backTrack.btiDIHi = this.backTrack.btiEAHi;
        }
        break;
    default:
        this.assert(false, "modMemShort16(): unrecognized modrm byte " + StrLib.toHexByte(bModRM));
        break;
    }
};

/**
 * modGrpShort16(afnGrp, fnSrc)
 *
 * @this {CPUx86}
 * @param {Array.<function(number,number)>} afnGrp
 * @param {function()} fnSrc
 */
X86.modGrpShort16 = function(afnGrp, fnSrc)
{
    let dst;
    let bModRM = (this.bModRM = this.getIPByte()) & 0xC7;

    switch(bModRM) {
    case 0x00:
        dst = this.getEAShortData(this.regEBX + this.regESI);
        this.regEAWrite = this.regEA;
        break;
    case 0x01:
        dst = this.getEAShortData(this.regEBX + this.regEDI);
        this.regEAWrite = this.regEA;
        break;
    case 0x02:
        dst = this.getEAShortStack(this.regEBP + this.regESI);
        this.regEAWrite = this.regEA;
        break;
    case 0x03:
        dst = this.getEAShortStack(this.regEBP + this.regEDI);
        this.regEAWrite = this.regEA;
        break;
    case 0x04:
        dst = this.getEAShortData(this.regESI);
        this.regEAWrite = this.regEA;
        break;
    case 0x05:
        dst = this.getEAShortData(this.regEDI);
        this.regEAWrite = this.regEA;
        break;
    case 0x06:
        dst = this.getEAShortData(this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x07:
        dst = this.getEAShortData(this.regEBX);
        this.regEAWrite = this.regEA;
        break;
    case 0x40:
        dst = this.getEAShortData(this.regEBX + this.regESI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x41:
        dst = this.getEAShortData(this.regEBX + this.regEDI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x42:
        dst = this.getEAShortStack(this.regEBP + this.regESI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x43:
        dst = this.getEAShortStack(this.regEBP + this.regEDI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x44:
        dst = this.getEAShortData(this.regESI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x45:
        dst = this.getEAShortData(this.regEDI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x46:
        dst = this.getEAShortStack(this.regEBP + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x47:
        dst = this.getEAShortData(this.regEBX + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x80:
        dst = this.getEAShortData(this.regEBX + this.regESI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x81:
        dst = this.getEAShortData(this.regEBX + this.regEDI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x82:
        dst = this.getEAShortStack(this.regEBP + this.regESI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x83:
        dst = this.getEAShortStack(this.regEBP + this.regEDI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x84:
        dst = this.getEAShortData(this.regESI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x85:
        dst = this.getEAShortData(this.regEDI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x86:
        dst = this.getEAShortStack(this.regEBP + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x87:
        dst = this.getEAShortData(this.regEBX + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0xC0:
        dst = this.regEAX & 0xffff;
        break;
    case 0xC1:
        dst = this.regECX & 0xffff;
        break;
    case 0xC2:
        dst = this.regEDX & 0xffff;
        break;
    case 0xC3:
        dst = this.regEBX & 0xffff;
        break;
    case 0xC4:
        dst = this.getSP() & 0xffff;
        break;
    case 0xC5:
        dst = this.regEBP & 0xffff;
        break;
    case 0xC6:
        dst = this.regESI & 0xffff;
        break;
    case 0xC7:
        dst = this.regEDI & 0xffff;
        break;
    default:
        dst = 0;
        this.assert(false, "modGrpShort16(): unrecognized modrm byte " + StrLib.toHexByte(bModRM));
        break;
    }

    let reg = (this.bModRM >> 3) & 0x7;
    let w = afnGrp[reg].call(this, dst, fnSrc.call(this));
    this.assert(!(w & ~0xffff), "modGrpShort16(): result out of range: " + StrLib.toHexLong(w));

    switch(bModRM) {
    case 0x00:
    case 0x03:
        this.setEAShort(w);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndex;
        break;
    case 0x01:
    case 0x02:
        this.setEAShort(w);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexExtra;
        break;
    case 0x04:
    case 0x05:
    case 0x07:
        this.setEAShort(w);
        this.nStepCycles -= this.cycleCounts.nEACyclesBase;
        break;
    case 0x06:
        this.setEAShort(w);
        this.nStepCycles -= this.cycleCounts.nEACyclesDisp;
        break;
    case 0x40:
    case 0x43:
    case 0x80:
    case 0x83:
        this.setEAShort(w);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDisp;
        break;
    case 0x41:
    case 0x42:
    case 0x81:
    case 0x82:
        this.setEAShort(w);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDispExtra;
        break;
    case 0x44:
    case 0x45:
    case 0x46:
    case 0x47:
    case 0x84:
    case 0x85:
    case 0x86:
    case 0x87:
        this.setEAShort(w);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0xC0:
        this.regEAX = (this.regEAX & ~0xffff) | w;
        break;
    case 0xC1:
        this.regECX = (this.regECX & ~0xffff) | w;
        break;
    case 0xC2:
        this.regEDX = (this.regEDX & ~0xffff) | w;
        break;
    case 0xC3:
        this.regEBX = (this.regEBX & ~0xffff) | w;
        break;
    case 0xC4:
        this.setSP((this.getSP() & ~0xffff) | w);
        break;
    case 0xC5:
        this.regEBP = (this.regEBP & ~0xffff) | w;
        break;
    case 0xC6:
        this.regESI = (this.regESI & ~0xffff) | w;
        break;
    case 0xC7:
        this.regEDI = (this.regEDI & ~0xffff) | w;
        break;
    }
};

/**
 * modRegLong16(fn)
 *
 * @this {CPUx86}
 * @param {function(number,number)} fn (dst,src)
 */
X86.modRegLong16 = function(fn)
{
    let dst, src;
    let bModRM = (this.bModRM = this.getIPByte()) & 0xC7;

    switch(bModRM) {
    case 0x00:
        src = this.getEALongData(this.regEBX + this.regESI);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndex;
        break;
    case 0x01:
        src = this.getEALongData(this.regEBX + this.regEDI);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexExtra;
        break;
    case 0x02:
        src = this.getEALongStack(this.regEBP + this.regESI);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexExtra;
        break;
    case 0x03:
        src = this.getEALongStack(this.regEBP + this.regEDI);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndex;
        break;
    case 0x04:
        src = this.getEALongData(this.regESI);
        this.nStepCycles -= this.cycleCounts.nEACyclesBase;
        break;
    case 0x05:
        src = this.getEALongData(this.regEDI);
        this.nStepCycles -= this.cycleCounts.nEACyclesBase;
        break;
    case 0x06:
        src = this.getEALongData(this.getIPAddr());
        this.nStepCycles -= this.cycleCounts.nEACyclesDisp;
        break;
    case 0x07:
        src = this.getEALongData(this.regEBX);
        this.nStepCycles -= this.cycleCounts.nEACyclesBase;
        break;
    case 0x40:
        src = this.getEALongData(this.regEBX + this.regESI + this.getIPDisp());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDisp;
        break;
    case 0x41:
        src = this.getEALongData(this.regEBX + this.regEDI + this.getIPDisp());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDispExtra;
        break;
    case 0x42:
        src = this.getEALongStack(this.regEBP + this.regESI + this.getIPDisp());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDispExtra;
        break;
    case 0x43:
        src = this.getEALongStack(this.regEBP + this.regEDI + this.getIPDisp());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDisp;
        break;
    case 0x44:
        src = this.getEALongData(this.regESI + this.getIPDisp());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0x45:
        src = this.getEALongData(this.regEDI + this.getIPDisp());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0x46:
        src = this.getEALongStack(this.regEBP + this.getIPDisp());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0x47:
        src = this.getEALongData(this.regEBX + this.getIPDisp());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0x80:
        src = this.getEALongData(this.regEBX + this.regESI + this.getIPAddr());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDisp;
        break;
    case 0x81:
        src = this.getEALongData(this.regEBX + this.regEDI + this.getIPAddr());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDispExtra;
        break;
    case 0x82:
        src = this.getEALongStack(this.regEBP + this.regESI + this.getIPAddr());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDispExtra;
        break;
    case 0x83:
        src = this.getEALongStack(this.regEBP + this.regEDI + this.getIPAddr());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDisp;
        break;
    case 0x84:
        src = this.getEALongData(this.regESI + this.getIPAddr());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0x85:
        src = this.getEALongData(this.regEDI + this.getIPAddr());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0x86:
        src = this.getEALongStack(this.regEBP + this.getIPAddr());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0x87:
        src = this.getEALongData(this.regEBX + this.getIPAddr());
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0xC0:
        src = this.regEAX;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiAL; this.backTrack.btiEAHi = this.backTrack.btiAH;
        }
        break;
    case 0xC1:
        src = this.regECX;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiCL; this.backTrack.btiEAHi = this.backTrack.btiCH;
        }
        break;
    case 0xC2:
        src = this.regEDX;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiDL; this.backTrack.btiEAHi = this.backTrack.btiDH;
        }
        break;
    case 0xC3:
        src = this.regEBX;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiBL; this.backTrack.btiEAHi = this.backTrack.btiBH;
        }
        break;
    case 0xC4:
        src = this.getSP();
        if (BACKTRACK) {
            this.backTrack.btiEALo = X86.BTINFO.SP_LO; this.backTrack.btiEAHi = X86.BTINFO.SP_HI;
        }
        break;
    case 0xC5:
        src = this.regEBP;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiBPLo; this.backTrack.btiEAHi = this.backTrack.btiBPHi;
        }
        break;
    case 0xC6:
        src = this.regESI;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiSILo; this.backTrack.btiEAHi = this.backTrack.btiSIHi;
        }
        break;
    case 0xC7:
        src = this.regEDI;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiDILo; this.backTrack.btiEAHi = this.backTrack.btiDIHi;
        }
        break;
    default:
        src = 0;
        this.assert(false, "modRegLong16(): unrecognized modrm byte " + StrLib.toHexByte(bModRM));
        break;
    }

    let reg = (this.bModRM >> 3) & 0x7;

    switch(reg) {
    case 0x0:
        dst = this.regEAX;
        break;
    case 0x1:
        dst = this.regECX;
        break;
    case 0x2:
        dst = this.regEDX;
        break;
    case 0x3:
        dst = this.regEBX;
        break;
    case 0x4:
        dst = this.getSP();
        break;
    case 0x5:
        dst = this.regEBP;
        break;
    case 0x6:
        dst = this.regESI;
        break;
    case 0x7:
        dst = this.regEDI;
        break;
    default:
        dst = 0;
        break;
    }

    let l = fn.call(this, dst, src);

    switch(reg) {
    case 0x0:
        this.regEAX = l;
        if (BACKTRACK) {
            this.backTrack.btiAL = this.backTrack.btiEALo; this.backTrack.btiAH = this.backTrack.btiEAHi;
        }
        break;
    case 0x1:
        this.regECX = l;
        if (BACKTRACK) {
            this.backTrack.btiCL = this.backTrack.btiEALo; this.backTrack.btiCH = this.backTrack.btiEAHi;
        }
        break;
    case 0x2:
        this.regEDX = l;
        if (BACKTRACK) {
            this.backTrack.btiDL = this.backTrack.btiEALo; this.backTrack.btiDH = this.backTrack.btiEAHi;
        }
        break;
    case 0x3:
        this.regEBX = l;
        if (BACKTRACK) {
            this.backTrack.btiBL = this.backTrack.btiEALo; this.backTrack.btiBH = this.backTrack.btiEAHi;
        }
        break;
    case 0x4:
        this.setSP(l);
        break;
    case 0x5:
        this.regEBP = l;
        if (BACKTRACK) {
            this.backTrack.btiBPLo = this.backTrack.btiEALo; this.backTrack.btiBPHi = this.backTrack.btiEAHi;
        }
        break;
    case 0x6:
        this.regESI = l;
        if (BACKTRACK) {
            this.backTrack.btiSILo = this.backTrack.btiEALo; this.backTrack.btiSIHi = this.backTrack.btiEAHi;
        }
        break;
    case 0x7:
        this.regEDI = l;
        if (BACKTRACK) {
            this.backTrack.btiDILo = this.backTrack.btiEALo; this.backTrack.btiDIHi = this.backTrack.btiEAHi;
        }
        break;
    }
};

/**
 * modMemLong16(fn)
 *
 * @this {CPUx86}
 * @param {function(number,number)} fn (dst,src)
 */
X86.modMemLong16 = function(fn)
{
    let dst, src;
    let bModRM = (this.bModRM = this.getIPByte()) & 0xC7;

    switch(bModRM) {
    case 0x00:
        dst = this.getEALongData(this.regEBX + this.regESI);
        this.regEAWrite = this.regEA;
        break;
    case 0x01:
        dst = this.getEALongData(this.regEBX + this.regEDI);
        this.regEAWrite = this.regEA;
        break;
    case 0x02:
        dst = this.getEALongStack(this.regEBP + this.regESI);
        this.regEAWrite = this.regEA;
        break;
    case 0x03:
        dst = this.getEALongStack(this.regEBP + this.regEDI);
        this.regEAWrite = this.regEA;
        break;
    case 0x04:
        dst = this.getEALongData(this.regESI);
        this.regEAWrite = this.regEA;
        break;
    case 0x05:
        dst = this.getEALongData(this.regEDI);
        this.regEAWrite = this.regEA;
        break;
    case 0x06:
        dst = this.getEALongData(this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x07:
        dst = this.getEALongData(this.regEBX);
        this.regEAWrite = this.regEA;
        break;
    case 0x40:
        dst = this.getEALongData(this.regEBX + this.regESI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x41:
        dst = this.getEALongData(this.regEBX + this.regEDI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x42:
        dst = this.getEALongStack(this.regEBP + this.regESI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x43:
        dst = this.getEALongStack(this.regEBP + this.regEDI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x44:
        dst = this.getEALongData(this.regESI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x45:
        dst = this.getEALongData(this.regEDI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x46:
        dst = this.getEALongStack(this.regEBP + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x47:
        dst = this.getEALongData(this.regEBX + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x80:
        dst = this.getEALongData(this.regEBX + this.regESI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x81:
        dst = this.getEALongData(this.regEBX + this.regEDI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x82:
        dst = this.getEALongStack(this.regEBP + this.regESI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x83:
        dst = this.getEALongStack(this.regEBP + this.regEDI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x84:
        dst = this.getEALongData(this.regESI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x85:
        dst = this.getEALongData(this.regEDI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x86:
        dst = this.getEALongStack(this.regEBP + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x87:
        dst = this.getEALongData(this.regEBX + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0xC0:
        dst = this.regEAX;
        break;
    case 0xC1:
        dst = this.regECX;
        break;
    case 0xC2:
        dst = this.regEDX;
        break;
    case 0xC3:
        dst = this.regEBX;
        break;
    case 0xC4:
        dst = this.getSP();
        break;
    case 0xC5:
        dst = this.regEBP;
        break;
    case 0xC6:
        dst = this.regESI;
        break;
    case 0xC7:
        dst = this.regEDI;
        break;
    default:
        dst = 0;
        this.assert(false, "modMemLong16(): unrecognized modrm byte " + StrLib.toHexByte(bModRM));
        break;
    }

    let reg = (this.bModRM >> 3) & 0x7;

    switch(reg) {
    case 0x0:
        src = this.regEAX;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiAL; this.backTrack.btiEAHi = this.backTrack.btiAH;
        }
        break;
    case 0x1:
        src = this.regECX;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiCL; this.backTrack.btiEAHi = this.backTrack.btiCH;
        }
        break;
    case 0x2:
        src = this.regEDX;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiDL; this.backTrack.btiEAHi = this.backTrack.btiDH;
        }
        break;
    case 0x3:
        src = this.regEBX;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiBL; this.backTrack.btiEAHi = this.backTrack.btiBH;
        }
        break;
    case 0x4:
        src = this.getSP();
        if (BACKTRACK) {
            this.backTrack.btiEALo = X86.BTINFO.SP_LO; this.backTrack.btiEAHi = X86.BTINFO.SP_HI;
        }
        break;
    case 0x5:
        src = this.regEBP;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiBPLo; this.backTrack.btiEAHi = this.backTrack.btiBPHi;
        }
        break;
    case 0x6:
        src = this.regESI;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiSILo; this.backTrack.btiEAHi = this.backTrack.btiSIHi;
        }
        break;
    case 0x7:
        src = this.regEDI;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiDILo; this.backTrack.btiEAHi = this.backTrack.btiDIHi;
        }
        break;
    default:
        src = 0;
        break;
    }

    let l = fn.call(this, dst, src);

    switch(bModRM) {
    case 0x00:
    case 0x03:
        this.setEALong(l);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndex;
        break;
    case 0x01:
    case 0x02:
        this.setEALong(l);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexExtra;
        break;
    case 0x04:
    case 0x05:
    case 0x07:
        this.setEALong(l);
        this.nStepCycles -= this.cycleCounts.nEACyclesBase;
        break;
    case 0x06:
        this.setEALong(l);
        this.nStepCycles -= this.cycleCounts.nEACyclesDisp;
        break;
    case 0x40:
    case 0x43:
    case 0x80:
    case 0x83:
        this.setEALong(l);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDisp;
        break;
    case 0x41:
    case 0x42:
    case 0x81:
    case 0x82:
        this.setEALong(l);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDispExtra;
        break;
    case 0x44:
    case 0x45:
    case 0x46:
    case 0x47:
    case 0x84:
    case 0x85:
    case 0x86:
    case 0x87:
        this.setEALong(l);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0xC0:
        this.regEAX = l;
        if (BACKTRACK) {
            this.backTrack.btiAL = this.backTrack.btiEALo; this.backTrack.btiAH = this.backTrack.btiEAHi;
        }
        break;
    case 0xC1:
        this.regECX = l;
        if (BACKTRACK) {
            this.backTrack.btiCL = this.backTrack.btiEALo; this.backTrack.btiCH = this.backTrack.btiEAHi;
        }
        break;
    case 0xC2:
        this.regEDX = l;
        if (BACKTRACK) {
            this.backTrack.btiDL = this.backTrack.btiEALo; this.backTrack.btiDH = this.backTrack.btiEAHi;
        }
        break;
    case 0xC3:
        this.regEBX = l;
        if (BACKTRACK) {
            this.backTrack.btiBL = this.backTrack.btiEALo; this.backTrack.btiBH = this.backTrack.btiEAHi;
        }
        break;
    case 0xC4:
        this.setSP(l);
        break;
    case 0xC5:
        this.regEBP = l;
        if (BACKTRACK) {
            this.backTrack.btiBPLo = this.backTrack.btiEALo; this.backTrack.btiBPHi = this.backTrack.btiEAHi;
        }
        break;
    case 0xC6:
        this.regESI = l;
        if (BACKTRACK) {
            this.backTrack.btiSILo = this.backTrack.btiEALo; this.backTrack.btiSIHi = this.backTrack.btiEAHi;
        }
        break;
    case 0xC7:
        this.regEDI = l;
        if (BACKTRACK) {
            this.backTrack.btiDILo = this.backTrack.btiEALo; this.backTrack.btiDIHi = this.backTrack.btiEAHi;
        }
        break;
    default:
        this.assert(false, "modMemLong16(): unrecognized modrm byte " + StrLib.toHexByte(bModRM));
        break;
    }
};

/**
 * modGrpLong16(afnGrp, fnSrc)
 *
 * @this {CPUx86}
 * @param {Array.<function(number,number)>} afnGrp
 * @param {function()} fnSrc
 */
X86.modGrpLong16 = function(afnGrp, fnSrc)
{
    let dst;
    let bModRM = (this.bModRM = this.getIPByte()) & 0xC7;

    switch(bModRM) {
    case 0x00:
        dst = this.getEALongData(this.regEBX + this.regESI);
        this.regEAWrite = this.regEA;
        break;
    case 0x01:
        dst = this.getEALongData(this.regEBX + this.regEDI);
        this.regEAWrite = this.regEA;
        break;
    case 0x02:
        dst = this.getEALongStack(this.regEBP + this.regESI);
        this.regEAWrite = this.regEA;
        break;
    case 0x03:
        dst = this.getEALongStack(this.regEBP + this.regEDI);
        this.regEAWrite = this.regEA;
        break;
    case 0x04:
        dst = this.getEALongData(this.regESI);
        this.regEAWrite = this.regEA;
        break;
    case 0x05:
        dst = this.getEALongData(this.regEDI);
        this.regEAWrite = this.regEA;
        break;
    case 0x06:
        dst = this.getEALongData(this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x07:
        dst = this.getEALongData(this.regEBX);
        this.regEAWrite = this.regEA;
        break;
    case 0x40:
        dst = this.getEALongData(this.regEBX + this.regESI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x41:
        dst = this.getEALongData(this.regEBX + this.regEDI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x42:
        dst = this.getEALongStack(this.regEBP + this.regESI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x43:
        dst = this.getEALongStack(this.regEBP + this.regEDI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x44:
        dst = this.getEALongData(this.regESI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x45:
        dst = this.getEALongData(this.regEDI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x46:
        dst = this.getEALongStack(this.regEBP + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x47:
        dst = this.getEALongData(this.regEBX + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x80:
        dst = this.getEALongData(this.regEBX + this.regESI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x81:
        dst = this.getEALongData(this.regEBX + this.regEDI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x82:
        dst = this.getEALongStack(this.regEBP + this.regESI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x83:
        dst = this.getEALongStack(this.regEBP + this.regEDI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x84:
        dst = this.getEALongData(this.regESI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x85:
        dst = this.getEALongData(this.regEDI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x86:
        dst = this.getEALongStack(this.regEBP + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x87:
        dst = this.getEALongData(this.regEBX + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0xC0:
        dst = this.regEAX;
        break;
    case 0xC1:
        dst = this.regECX;
        break;
    case 0xC2:
        dst = this.regEDX;
        break;
    case 0xC3:
        dst = this.regEBX;
        break;
    case 0xC4:
        dst = this.getSP();
        break;
    case 0xC5:
        dst = this.regEBP;
        break;
    case 0xC6:
        dst = this.regESI;
        break;
    case 0xC7:
        dst = this.regEDI;
        break;
    default:
        this.assert(false, "modGrpLong16(): unrecognized modrm byte " + StrLib.toHexByte(bModRM));
        break;
    }

    let reg = (this.bModRM >> 3) & 0x7;

    let l = afnGrp[reg].call(this, dst, fnSrc.call(this));

    switch(bModRM) {
    case 0x00:
    case 0x03:
        this.setEALong(l);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndex;
        break;
    case 0x01:
    case 0x02:
        this.setEALong(l);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexExtra;
        break;
    case 0x04:
    case 0x05:
    case 0x07:
        this.setEALong(l);
        this.nStepCycles -= this.cycleCounts.nEACyclesBase;
        break;
    case 0x06:
        this.setEALong(l);
        this.nStepCycles -= this.cycleCounts.nEACyclesDisp;
        break;
    case 0x40:
    case 0x43:
    case 0x80:
    case 0x83:
        this.setEALong(l);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDisp;
        break;
    case 0x41:
    case 0x42:
    case 0x81:
    case 0x82:
        this.setEALong(l);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseIndexDispExtra;
        break;
    case 0x44:
    case 0x45:
    case 0x46:
    case 0x47:
    case 0x84:
    case 0x85:
    case 0x86:
    case 0x87:
        this.setEALong(l);
        this.nStepCycles -= this.cycleCounts.nEACyclesBaseDisp;
        break;
    case 0xC0:
        this.regEAX = l;
        break;
    case 0xC1:
        this.regECX = l;
        break;
    case 0xC2:
        this.regEDX = l;
        break;
    case 0xC3:
        this.regEBX = l;
        break;
    case 0xC4:
        this.setSP(l);
        break;
    case 0xC5:
        this.regEBP = l;
        break;
    case 0xC6:
        this.regESI = l;
        break;
    case 0xC7:
        this.regEDI = l;
        break;
    }
};

/**
 * modRegByte32(fn)
 *
 * @this {CPUx86}
 * @param {function(number,number)} fn (dst,src)
 */
X86.modRegByte32 = function(fn)
{
    let dst, src;
    let bModRM = (this.bModRM = this.getIPByte()) & 0xC7;

    switch(bModRM) {
    case 0x00:
        src = this.getEAByteData(this.regEAX);
        break;
    case 0x01:
        src = this.getEAByteData(this.regECX);
        break;
    case 0x02:
        src = this.getEAByteData(this.regEDX);
        break;
    case 0x03:
        src = this.getEAByteData(this.regEBX);
        break;
    case 0x04:
        src = this.getEAByteData(X86.modSIB.call(this, 0));
        break;
    case 0x05:
        src = this.getEAByteData(this.getIPAddr());
        break;
    case 0x06:
        src = this.getEAByteData(this.regESI);
        break;
    case 0x07:
        src = this.getEAByteData(this.regEDI);
        break;
    case 0x40:
        src = this.getEAByteData(this.regEAX + this.getIPDisp());
        break;
    case 0x41:
        src = this.getEAByteData(this.regECX + this.getIPDisp());
        break;
    case 0x42:
        src = this.getEAByteData(this.regEDX + this.getIPDisp());
        break;
    case 0x43:
        src = this.getEAByteData(this.regEBX + this.getIPDisp());
        break;
    case 0x44:
        src = this.getEAByteData(X86.modSIB.call(this, 1) + this.getIPDisp());
        break;
    case 0x45:
        src = this.getEAByteStack(this.regEBP + this.getIPDisp());
        break;
    case 0x46:
        src = this.getEAByteData(this.regESI + this.getIPDisp());
        break;
    case 0x47:
        src = this.getEAByteData(this.regEDI + this.getIPDisp());
        break;
    case 0x80:
        src = this.getEAByteData(this.regEAX + this.getIPAddr());
        break;
    case 0x81:
        src = this.getEAByteData(this.regECX + this.getIPAddr());
        break;
    case 0x82:
        src = this.getEAByteData(this.regEDX + this.getIPAddr());
        break;
    case 0x83:
        src = this.getEAByteData(this.regEBX + this.getIPAddr());
        break;
    case 0x84:
        src = this.getEAByteData(X86.modSIB.call(this, 2) + this.getIPAddr());
        break;
    case 0x85:
        src = this.getEAByteStack(this.regEBP + this.getIPAddr());
        break;
    case 0x86:
        src = this.getEAByteData(this.regESI + this.getIPAddr());
        break;
    case 0x87:
        src = this.getEAByteData(this.regEDI + this.getIPAddr());
        break;
    case 0xC0:
        src = this.regEAX & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiAL;
        break;
    case 0xC1:
        src = this.regECX & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiCL;
        break;
    case 0xC2:
        src = this.regEDX & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiDL;
        break;
    case 0xC3:
        src = this.regEBX & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiBL;
        break;
    case 0xC4:
        src = (this.regEAX >> 8) & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiAH;
        break;
    case 0xC5:
        src = (this.regECX >> 8) & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiCH;
        break;
    case 0xC6:
        src = (this.regEDX >> 8) & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiDH;
        break;
    case 0xC7:
        src = (this.regEBX >> 8) & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiBH;
        break;
    default:
        src = 0;
        this.assert(false, "modRegByte32(): unrecognized modrm byte " + StrLib.toHexByte(bModRM));
        break;
    }

    let reg = (this.bModRM >> 3) & 0x7;

    switch(reg) {
    case 0x0:
        dst = this.regEAX & 0xff;
        break;
    case 0x1:
        dst = this.regECX & 0xff;
        break;
    case 0x2:
        dst = this.regEDX & 0xff;
        break;
    case 0x3:
        dst = this.regEBX & 0xff;
        break;
    case 0x4:
        dst = (this.regEAX >> 8) & 0xff;
        break;
    case 0x5:
        dst = (this.regECX >> 8) & 0xff;
        break;
    case 0x6:
        dst = (this.regEDX >> 8) & 0xff;
        break;
    case 0x7:
        dst = (this.regEBX >> 8) & 0xff;
        break;
    default:
        dst = 0;
        break;
    }

    let b = fn.call(this, dst, src);

    switch(reg) {
    case 0x0:
        this.regEAX = (this.regEAX & ~0xff) | b;
        if (BACKTRACK) this.backTrack.btiAL = this.backTrack.btiEALo;
        break;
    case 0x1:
        this.regECX = (this.regECX & ~0xff) | b;
        if (BACKTRACK) this.backTrack.btiCL = this.backTrack.btiEALo;
        break;
    case 0x2:
        this.regEDX = (this.regEDX & ~0xff) | b;
        if (BACKTRACK) this.backTrack.btiDL = this.backTrack.btiEALo;
        break;
    case 0x3:
        this.regEBX = (this.regEBX & ~0xff) | b;
        if (BACKTRACK) this.backTrack.btiBL = this.backTrack.btiEALo;
        break;
    case 0x4:
        this.regEAX = (this.regEAX & ~0xff00) | (b << 8);
        if (BACKTRACK) this.backTrack.btiAH = this.backTrack.btiEALo;
        break;
    case 0x5:
        this.regECX = (this.regECX & ~0xff00) | (b << 8);
        if (BACKTRACK) this.backTrack.btiCH = this.backTrack.btiEALo;
        break;
    case 0x6:
        this.regEDX = (this.regEDX & ~0xff00) | (b << 8);
        if (BACKTRACK) this.backTrack.btiDH = this.backTrack.btiEALo;
        break;
    case 0x7:
        this.regEBX = (this.regEBX & ~0xff00) | (b << 8);
        if (BACKTRACK) this.backTrack.btiBH = this.backTrack.btiEALo;
        break;
    }
};

/**
 * modMemByte32(fn)
 *
 * @this {CPUx86}
 * @param {function(number,number)} fn (dst,src)
 */
X86.modMemByte32 = function(fn)
{
    let dst, src;
    let bModRM = (this.bModRM = this.getIPByte()) & 0xC7;

    switch(bModRM) {
    case 0x00:
        dst = this.getEAByteData(this.regEAX);
        this.regEAWrite = this.regEA;
        break;
    case 0x01:
        dst = this.getEAByteData(this.regECX);
        this.regEAWrite = this.regEA;
        break;
    case 0x02:
        dst = this.getEAByteData(this.regEDX);
        this.regEAWrite = this.regEA;
        break;
    case 0x03:
        dst = this.getEAByteData(this.regEBX);
        this.regEAWrite = this.regEA;
        break;
    case 0x04:
        dst = this.getEAByteData(X86.modSIB.call(this, 0));
        this.regEAWrite = this.regEA;
        break;
    case 0x05:
        dst = this.getEAByteData(this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x06:
        dst = this.getEAByteData(this.regESI);
        this.regEAWrite = this.regEA;
        break;
    case 0x07:
        dst = this.getEAByteData(this.regEDI);
        this.regEAWrite = this.regEA;
        break;
    case 0x40:
        dst = this.getEAByteData(this.regEAX + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x41:
        dst = this.getEAByteData(this.regECX + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x42:
        dst = this.getEAByteData(this.regEDX + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x43:
        dst = this.getEAByteData(this.regEBX + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x44:
        dst = this.getEAByteData(X86.modSIB.call(this, 1) + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x45:
        dst = this.getEAByteStack(this.regEBP + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x46:
        dst = this.getEAByteData(this.regESI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x47:
        dst = this.getEAByteData(this.regEDI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x80:
        dst = this.getEAByteData(this.regEAX + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x81:
        dst = this.getEAByteData(this.regECX + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x82:
        dst = this.getEAByteData(this.regEDX + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x83:
        dst = this.getEAByteData(this.regEBX + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x84:
        dst = this.getEAByteData(X86.modSIB.call(this, 2) + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x85:
        dst = this.getEAByteStack(this.regEBP + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x86:
        dst = this.getEAByteData(this.regESI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x87:
        dst = this.getEAByteData(this.regEDI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0xC0:
        dst = this.regEAX & 0xff;
        break;
    case 0xC1:
        dst = this.regECX & 0xff;
        break;
    case 0xC2:
        dst = this.regEDX & 0xff;
        break;
    case 0xC3:
        dst = this.regEBX & 0xff;
        break;
    case 0xC4:
        dst = (this.regEAX >> 8) & 0xff;
        break;
    case 0xC5:
        dst = (this.regECX >> 8) & 0xff;
        break;
    case 0xC6:
        dst = (this.regEDX >> 8) & 0xff;
        break;
    case 0xC7:
        dst = (this.regEBX >> 8) & 0xff;
        break;
    default:
        dst = 0;
        this.assert(false, "modMemByte32(): unrecognized modrm byte " + StrLib.toHexByte(bModRM));
        break;
    }

    let reg = (this.bModRM >> 3) & 0x7;

    switch(reg) {
    case 0x0:
        src = this.regEAX & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiAL;
        break;
    case 0x1:
        src = this.regECX & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiCL;
        break;
    case 0x2:
        src = this.regEDX & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiDL;
        break;
    case 0x3:
        src = this.regEBX & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiBL;
        break;
    case 0x4:
        src = (this.regEAX >> 8) & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiAH;
        break;
    case 0x5:
        src = (this.regECX >> 8) & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiCH;
        break;
    case 0x6:
        src = (this.regEDX >> 8) & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiDH;
        break;
    case 0x7:
        src = (this.regEBX >> 8) & 0xff;
        if (BACKTRACK) this.backTrack.btiEALo = this.backTrack.btiBH;
        break;
    default:
        src = 0;
        break;
    }

    let b = fn.call(this, dst, src);

    switch(bModRM) {
    case 0xC0:
        this.regEAX = (this.regEAX & ~0xff) | b;
        if (BACKTRACK) this.backTrack.btiAL = this.backTrack.btiEALo;
        break;
    case 0xC1:
        this.regECX = (this.regECX & ~0xff) | b;
        if (BACKTRACK) this.backTrack.btiCL = this.backTrack.btiEALo;
        break;
    case 0xC2:
        this.regEDX = (this.regEDX & ~0xff) | b;
        if (BACKTRACK) this.backTrack.btiDL = this.backTrack.btiEALo;
        break;
    case 0xC3:
        this.regEBX = (this.regEBX & ~0xff) | b;
        if (BACKTRACK) this.backTrack.btiBL = this.backTrack.btiEALo;
        break;
    case 0xC4:
        this.regEAX = (this.regEAX & ~0xff00) | (b << 8);
        if (BACKTRACK) this.backTrack.btiAH = this.backTrack.btiEALo;
        break;
    case 0xC5:
        this.regECX = (this.regECX & ~0xff00) | (b << 8);
        if (BACKTRACK) this.backTrack.btiCH = this.backTrack.btiEALo;
        break;
    case 0xC6:
        this.regEDX = (this.regEDX & ~0xff00) | (b << 8);
        if (BACKTRACK) this.backTrack.btiDH = this.backTrack.btiEALo;
        break;
    case 0xC7:
        this.regEBX = (this.regEBX & ~0xff00) | (b << 8);
        if (BACKTRACK) this.backTrack.btiBH = this.backTrack.btiEALo;
        break;
    default:
        this.setEAByte(b);
        break;
    }
};

/**
 * modGrpByte32(afnGrp, fnSrc)
 *
 * @this {CPUx86}
 * @param {Array.<function(number,number)>} afnGrp
 * @param {function()} fnSrc
 */
X86.modGrpByte32 = function(afnGrp, fnSrc)
{
    let dst;
    let bModRM = (this.bModRM = this.getIPByte()) & 0xC7;

    switch(bModRM) {
    case 0x00:
        dst = this.getEAByteData(this.regEAX);
        this.regEAWrite = this.regEA;
        break;
    case 0x01:
        dst = this.getEAByteData(this.regECX);
        this.regEAWrite = this.regEA;
        break;
    case 0x02:
        dst = this.getEAByteData(this.regEDX);
        this.regEAWrite = this.regEA;
        break;
    case 0x03:
        dst = this.getEAByteData(this.regEBX);
        this.regEAWrite = this.regEA;
        break;
    case 0x04:
        dst = this.getEAByteData(X86.modSIB.call(this, 0));
        this.regEAWrite = this.regEA;
        break;
    case 0x05:
        dst = this.getEAByteData(this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x06:
        dst = this.getEAByteData(this.regESI);
        this.regEAWrite = this.regEA;
        break;
    case 0x07:
        dst = this.getEAByteData(this.regEDI);
        this.regEAWrite = this.regEA;
        break;
    case 0x40:
        dst = this.getEAByteData(this.regEAX + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x41:
        dst = this.getEAByteData(this.regECX + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x42:
        dst = this.getEAByteData(this.regEDX + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x43:
        dst = this.getEAByteData(this.regEBX + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x44:
        dst = this.getEAByteData(X86.modSIB.call(this, 1) + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x45:
        dst = this.getEAByteStack(this.regEBP + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x46:
        dst = this.getEAByteData(this.regESI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x47:
        dst = this.getEAByteData(this.regEDI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x80:
        dst = this.getEAByteData(this.regEAX + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x81:
        dst = this.getEAByteData(this.regECX + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x82:
        dst = this.getEAByteData(this.regEDX + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x83:
        dst = this.getEAByteData(this.regEBX + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x84:
        dst = this.getEAByteData(X86.modSIB.call(this, 2) + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x85:
        dst = this.getEAByteStack(this.regEBP + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x86:
        dst = this.getEAByteData(this.regESI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x87:
        dst = this.getEAByteData(this.regEDI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0xC0:
        dst = this.regEAX & 0xff;
        break;
    case 0xC1:
        dst = this.regECX & 0xff;
        break;
    case 0xC2:
        dst = this.regEDX & 0xff;
        break;
    case 0xC3:
        dst = this.regEBX & 0xff;
        break;
    case 0xC4:
        dst = (this.regEAX >> 8) & 0xff;
        break;
    case 0xC5:
        dst = (this.regECX >> 8) & 0xff;
        break;
    case 0xC6:
        dst = (this.regEDX >> 8) & 0xff;
        break;
    case 0xC7:
        dst = (this.regEBX >> 8) & 0xff;
        break;
    default:
        dst = 0;
        this.assert(false, "modGrpByte32(): unrecognized modrm byte " + StrLib.toHexByte(bModRM));
        break;
    }

    let reg = (this.bModRM >> 3) & 0x7;

    let b = afnGrp[reg].call(this, dst, fnSrc.call(this));

    switch(bModRM) {
    case 0xC0:
        this.regEAX = (this.regEAX & ~0xff) | b;
        break;
    case 0xC1:
        this.regECX = (this.regECX & ~0xff) | b;
        break;
    case 0xC2:
        this.regEDX = (this.regEDX & ~0xff) | b;
        break;
    case 0xC3:
        this.regEBX = (this.regEBX & ~0xff) | b;
        break;
    case 0xC4:
        this.regEAX = (this.regEAX & ~0xff00) | (b << 8);
        break;
    case 0xC5:
        this.regECX = (this.regECX & ~0xff00) | (b << 8);
        break;
    case 0xC6:
        this.regEDX = (this.regEDX & ~0xff00) | (b << 8);
        break;
    case 0xC7:
        this.regEBX = (this.regEBX & ~0xff00) | (b << 8);
        break;
    default:
        this.setEAByte(b);
        break;
    }
};

/**
 * modRegShort32(fn)
 *
 * @this {CPUx86}
 * @param {function(number,number)} fn (dst,src)
 */
X86.modRegShort32 = function(fn)
{
    let dst, src;
    let bModRM = (this.bModRM = this.getIPByte()) & 0xC7;

    switch(bModRM) {
    case 0x00:
        src = this.getEAShortData(this.regEAX);
        break;
    case 0x01:
        src = this.getEAShortData(this.regECX);
        break;
    case 0x02:
        src = this.getEAShortData(this.regEDX);
        break;
    case 0x03:
        src = this.getEAShortData(this.regEBX);
        break;
    case 0x04:
        src = this.getEAShortData(X86.modSIB.call(this, 0));
        break;
    case 0x05:
        src = this.getEAShortData(this.getIPAddr());
        break;
    case 0x06:
        src = this.getEAShortData(this.regESI);
        break;
    case 0x07:
        src = this.getEAShortData(this.regEDI);
        break;
    case 0x40:
        src = this.getEAShortData(this.regEAX + this.getIPDisp());
        break;
    case 0x41:
        src = this.getEAShortData(this.regECX + this.getIPDisp());
        break;
    case 0x42:
        src = this.getEAShortData(this.regEDX + this.getIPDisp());
        break;
    case 0x43:
        src = this.getEAShortData(this.regEBX + this.getIPDisp());
        break;
    case 0x44:
        src = this.getEAShortData(X86.modSIB.call(this, 1) + this.getIPDisp());
        break;
    case 0x45:
        src = this.getEAShortStack(this.regEBP + this.getIPDisp());
        break;
    case 0x46:
        src = this.getEAShortData(this.regESI + this.getIPDisp());
        break;
    case 0x47:
        src = this.getEAShortData(this.regEDI + this.getIPDisp());
        break;
    case 0x80:
        src = this.getEAShortData(this.regEAX + this.getIPAddr());
        break;
    case 0x81:
        src = this.getEAShortData(this.regECX + this.getIPAddr());
        break;
    case 0x82:
        src = this.getEAShortData(this.regEDX + this.getIPAddr());
        break;
    case 0x83:
        src = this.getEAShortData(this.regEBX + this.getIPAddr());
        break;
    case 0x84:
        src = this.getEAShortData(X86.modSIB.call(this, 2) + this.getIPAddr());
        break;
    case 0x85:
        src = this.getEAShortStack(this.regEBP + this.getIPAddr());
        break;
    case 0x86:
        src = this.getEAShortData(this.regESI + this.getIPAddr());
        break;
    case 0x87:
        src = this.getEAShortData(this.regEDI + this.getIPAddr());
        break;
    case 0xC0:
        src = this.regEAX & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiAL; this.backTrack.btiEAHi = this.backTrack.btiAH;
        }
        break;
    case 0xC1:
        src = this.regECX & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiCL; this.backTrack.btiEAHi = this.backTrack.btiCH;
        }
        break;
    case 0xC2:
        src = this.regEDX & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiDL; this.backTrack.btiEAHi = this.backTrack.btiDH;
        }
        break;
    case 0xC3:
        src = this.regEBX & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiBL; this.backTrack.btiEAHi = this.backTrack.btiBH;
        }
        break;
    case 0xC4:
        src = this.getSP() & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = X86.BTINFO.SP_LO; this.backTrack.btiEAHi = X86.BTINFO.SP_HI;
        }
        break;
    case 0xC5:
        src = this.regEBP & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiBPLo; this.backTrack.btiEAHi = this.backTrack.btiBPHi;
        }
        break;
    case 0xC6:
        src = this.regESI & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiSILo; this.backTrack.btiEAHi = this.backTrack.btiSIHi;
        }
        break;
    case 0xC7:
        src = this.regEDI & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiDILo; this.backTrack.btiEAHi = this.backTrack.btiDIHi;
        }
        break;
    default:
        src = 0;
        this.assert(false, "modRegShort32(): unrecognized modrm byte " + StrLib.toHexByte(bModRM));
        break;
    }

    let reg = (this.bModRM >> 3) & 0x7;

    switch(reg) {
    case 0x0:
        dst = this.regEAX & 0xffff;
        break;
    case 0x1:
        dst = this.regECX & 0xffff;
        break;
    case 0x2:
        dst = this.regEDX & 0xffff;
        break;
    case 0x3:
        dst = this.regEBX & 0xffff;
        break;
    case 0x4:
        dst = this.getSP() & 0xffff;
        break;
    case 0x5:
        dst = this.regEBP & 0xffff;
        break;
    case 0x6:
        dst = this.regESI & 0xffff;
        break;
    case 0x7:
        dst = this.regEDI & 0xffff;
        break;
    default:
        dst = 0;
        break;
    }

    let w = fn.call(this, dst, src);
    this.assert(!(w & ~0xffff), "modRegShort32(): result out of range: " + StrLib.toHexLong(w));

    switch(reg) {
    case 0x0:
        this.regEAX = (this.regEAX & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiAL = this.backTrack.btiEALo; this.backTrack.btiAH = this.backTrack.btiEAHi;
        }
        break;
    case 0x1:
        this.regECX = (this.regECX & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiCL = this.backTrack.btiEALo; this.backTrack.btiCH = this.backTrack.btiEAHi;
        }
        break;
    case 0x2:
        this.regEDX = (this.regEDX & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiDL = this.backTrack.btiEALo; this.backTrack.btiDH = this.backTrack.btiEAHi;
        }
        break;
    case 0x3:
        this.regEBX = (this.regEBX & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiBL = this.backTrack.btiEALo; this.backTrack.btiBH = this.backTrack.btiEAHi;
        }
        break;
    case 0x4:
        this.setSP((this.getSP() & ~0xffff) | w);
        break;
    case 0x5:
        this.regEBP = (this.regEBP & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiBPLo = this.backTrack.btiEALo; this.backTrack.btiBPHi = this.backTrack.btiEAHi;
        }
        break;
    case 0x6:
        this.regESI = (this.regESI & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiSILo = this.backTrack.btiEALo; this.backTrack.btiSIHi = this.backTrack.btiEAHi;
        }
        break;
    case 0x7:
        this.regEDI = (this.regEDI & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiDILo = this.backTrack.btiEALo; this.backTrack.btiDIHi = this.backTrack.btiEAHi;
        }
        break;
    }
};

/**
 * modMemShort32(fn)
 *
 * @this {CPUx86}
 * @param {function(number,number)} fn (dst,src)
 */
X86.modMemShort32 = function(fn)
{
    let dst, src;
    let bModRM = (this.bModRM = this.getIPByte()) & 0xC7;

    switch(bModRM) {
    case 0x00:
        dst = this.getEAShortData(this.regEAX);
        this.regEAWrite = this.regEA;
        break;
    case 0x01:
        dst = this.getEAShortData(this.regECX);
        this.regEAWrite = this.regEA;
        break;
    case 0x02:
        dst = this.getEAShortData(this.regEDX);
        this.regEAWrite = this.regEA;
        break;
    case 0x03:
        dst = this.getEAShortData(this.regEBX);
        this.regEAWrite = this.regEA;
        break;
    case 0x04:
        dst = this.getEAShortData(X86.modSIB.call(this, 0));
        this.regEAWrite = this.regEA;
        break;
    case 0x05:
        dst = this.getEAShortData(this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x06:
        dst = this.getEAShortData(this.regESI);
        this.regEAWrite = this.regEA;
        break;
    case 0x07:
        dst = this.getEAShortData(this.regEDI);
        this.regEAWrite = this.regEA;
        break;
    case 0x40:
        dst = this.getEAShortData(this.regEAX + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x41:
        dst = this.getEAShortData(this.regECX + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x42:
        dst = this.getEAShortData(this.regEDX + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x43:
        dst = this.getEAShortData(this.regEBX + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x44:
        dst = this.getEAShortData(X86.modSIB.call(this, 1) + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x45:
        dst = this.getEAShortStack(this.regEBP + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x46:
        dst = this.getEAShortData(this.regESI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x47:
        dst = this.getEAShortData(this.regEDI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x80:
        dst = this.getEAShortData(this.regEAX + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x81:
        dst = this.getEAShortData(this.regECX + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x82:
        dst = this.getEAShortData(this.regEDX + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x83:
        dst = this.getEAShortData(this.regEBX + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x84:
        dst = this.getEAShortData(X86.modSIB.call(this, 2) + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x85:
        dst = this.getEAShortStack(this.regEBP + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x86:
        dst = this.getEAShortData(this.regESI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x87:
        dst = this.getEAShortData(this.regEDI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0xC0:
        dst = this.regEAX & 0xffff;
        break;
    case 0xC1:
        dst = this.regECX & 0xffff;
        break;
    case 0xC2:
        dst = this.regEDX & 0xffff;
        break;
    case 0xC3:
        dst = this.regEBX & 0xffff;
        break;
    case 0xC4:
        dst = this.getSP() & 0xffff;
        break;
    case 0xC5:
        dst = this.regEBP & 0xffff;
        break;
    case 0xC6:
        dst = this.regESI & 0xffff;
        break;
    case 0xC7:
        dst = this.regEDI & 0xffff;
        break;
    default:
        dst = 0;
        this.assert(false, "modMemShort32(): unrecognized modrm byte " + StrLib.toHexByte(bModRM));
        break;
    }

    let reg = (this.bModRM >> 3) & 0x7;

    switch(reg) {
    case 0x0:
        src = this.regEAX & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiAL; this.backTrack.btiEAHi = this.backTrack.btiAH;
        }
        break;
    case 0x1:
        src = this.regECX & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiCL; this.backTrack.btiEAHi = this.backTrack.btiCH;
        }
        break;
    case 0x2:
        src = this.regEDX & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiDL; this.backTrack.btiEAHi = this.backTrack.btiDH;
        }
        break;
    case 0x3:
        src = this.regEBX & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiBL; this.backTrack.btiEAHi = this.backTrack.btiBH;
        }
        break;
    case 0x4:
        src = this.getSP() & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = X86.BTINFO.SP_LO; this.backTrack.btiEAHi = X86.BTINFO.SP_HI;
        }
        break;
    case 0x5:
        src = this.regEBP & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiBPLo; this.backTrack.btiEAHi = this.backTrack.btiBPHi;
        }
        break;
    case 0x6:
        src = this.regESI & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiSILo; this.backTrack.btiEAHi = this.backTrack.btiSIHi;
        }
        break;
    case 0x7:
        src = this.regEDI & 0xffff;
        if (BACKTRACK) {
            this.backTrack.btiEALo = this.backTrack.btiDILo; this.backTrack.btiEAHi = this.backTrack.btiDIHi;
        }
        break;
    default:
        src = 0;
        break;
    }

    let w = fn.call(this, dst, src);
    this.assert(!(w & ~0xffff), "modMemShort32(): result out of range: " + StrLib.toHexLong(w));

    switch(bModRM) {
    case 0xC0:
        this.regEAX = (this.regEAX & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiAL = this.backTrack.btiEALo; this.backTrack.btiAH = this.backTrack.btiEAHi;
        }
        break;
    case 0xC1:
        this.regECX = (this.regECX & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiCL = this.backTrack.btiEALo; this.backTrack.btiCH = this.backTrack.btiEAHi;
        }
        break;
    case 0xC2:
        this.regEDX = (this.regEDX & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiDL = this.backTrack.btiEALo; this.backTrack.btiDH = this.backTrack.btiEAHi;
        }
        break;
    case 0xC3:
        this.regEBX = (this.regEBX & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiBL = this.backTrack.btiEALo; this.backTrack.btiBH = this.backTrack.btiEAHi;
        }
        break;
    case 0xC4:
        this.setSP((this.getSP() & ~0xffff) | w);
        break;
    case 0xC5:
        this.regEBP = (this.regEBP & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiBPLo = this.backTrack.btiEALo; this.backTrack.btiBPHi = this.backTrack.btiEAHi;
        }
        break;
    case 0xC6:
        this.regESI = (this.regESI & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiSILo = this.backTrack.btiEALo; this.backTrack.btiSIHi = this.backTrack.btiEAHi;
        }
        break;
    case 0xC7:
        this.regEDI = (this.regEDI & ~0xffff) | w;
        if (BACKTRACK) {
            this.backTrack.btiDILo = this.backTrack.btiEALo; this.backTrack.btiDIHi = this.backTrack.btiEAHi;
        }
        break;
    default:
        this.setEAShort(w);
        break;
    }
};

/**
 * modGrpShort32(afnGrp, fnSrc)
 *
 * @this {CPUx86}
 * @param {Array.<function(number,number)>} afnGrp
 * @param {function()} fnSrc
 */
X86.modGrpShort32 = function(afnGrp, fnSrc)
{
    let dst;
    let bModRM = (this.bModRM = this.getIPByte()) & 0xC7;

    switch(bModRM) {
    case 0x00:
        dst = this.getEAShortData(this.regEAX);
        this.regEAWrite = this.regEA;
        break;
    case 0x01:
        dst = this.getEAShortData(this.regECX);
        this.regEAWrite = this.regEA;
        break;
    case 0x02:
        dst = this.getEAShortData(this.regEDX);
        this.regEAWrite = this.regEA;
        break;
    case 0x03:
        dst = this.getEAShortData(this.regEBX);
        this.regEAWrite = this.regEA;
        break;
    case 0x04:
        dst = this.getEAShortData(X86.modSIB.call(this, 0));
        this.regEAWrite = this.regEA;
        break;
    case 0x05:
        dst = this.getEAShortData(this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x06:
        dst = this.getEAShortData(this.regESI);
        this.regEAWrite = this.regEA;
        break;
    case 0x07:
        dst = this.getEAShortData(this.regEDI);
        this.regEAWrite = this.regEA;
        break;
    case 0x40:
        dst = this.getEAShortData(this.regEAX + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x41:
        dst = this.getEAShortData(this.regECX + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x42:
        dst = this.getEAShortData(this.regEDX + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x43:
        dst = this.getEAShortData(this.regEBX + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x44:
        dst = this.getEAShortData(X86.modSIB.call(this, 1) + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x45:
        dst = this.getEAShortStack(this.regEBP + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x46:
        dst = this.getEAShortData(this.regESI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x47:
        dst = this.getEAShortData(this.regEDI + this.getIPDisp());
        this.regEAWrite = this.regEA;
        break;
    case 0x80:
        dst = this.getEAShortData(this.regEAX + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x81:
        dst = this.getEAShortData(this.regECX + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x82:
        dst = this.getEAShortData(this.regEDX + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x83:
        dst = this.getEAShortData(this.regEBX + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x84:
        dst = this.getEAShortData(X86.modSIB.call(this, 2) + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x85:
        dst = this.getEAShortStack(this.regEBP + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x86:
        dst = this.getEAShortData(this.regESI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0x87:
        dst = this.getEAShortData(this.regEDI + this.getIPAddr());
        this.regEAWrite = this.regEA;
        break;
    case 0xC0:
        dst = this.regEAX & 0xffff;
        break;
    case 0xC1:
        dst = this.regECX & 0xffff;
        break;
    case 0xC2:
        dst = this.regEDX & 0xffff;
        break;
    case 0xC3:
        dst = this.regEBX & 0xffff;
        break;
    case 0xC4:
        dst = this.getSP() & 0xffff;
        break;
    case 0xC5:
        dst = this.regEBP & 0xffff;
        break;
    case 0xC6:
        dst = this.regESI & 0xffff;
        break;
    case 0xC7:
        dst = this.regEDI & 0xffff;
        break;
    default:
        dst = 0;
        this.assert(false, "modGrpShort32(): unrecognized modrm byte " + StrLib.toHexByte(bModRM));
        break;
    }

    let reg = (this.bModRM >> 3) & 0x7;

    let w = afnGrp[reg].call(this, dst, fnSrc.call(this));
    this.assert(!(w & ~0xffff), "modGrpShort32(): result out of range: " + StrLib.toHexLong(w));

    switch(bModRM) {
    case 0xC0:
        this.regEAX = (this.regEAX & ~0xffff) | w;
        break;
    case 0xC1:
        this.regECX = (this.regECX & ~0xffff) | w;
        break;
    case 0xC2:
        this.regEDX = (this.regEDX & ~0xffff) | w;
        break;
    case 0xC3:
        this.regEBX = (this.regEBX & ~0xffff) | w;
        break;
    case 0xC4:
        this.setSP((this.getSP() & ~0xffff) | w);
        break;
    case 0xC5:
        this.regEBP = (this.regEBP & ~0xffff) | w;
        break;
    case 0xC6:
        this.regESI = (this.regESI & ~0xffff) | w;
        break;
    case 0xC7:
        this.regEDI = (this.regEDI & ~0xffff) | w;
        break;
    default:
        this.setEAShort(w);
        break;
    }
};

/**
 * modRegLong32(fn)
 *
 * @this {CPUx86}
 * @param {function(number,number)} fn (dst,src)
 */
X86.modRegLong32 = function(fn)
{
    let dst, src, l;
    let bModRM = this.bModRM = this.getIPByte();

    switch(bModRM & 0xC7) {
    case 0x00:
        src = this.getEALongData(this.regEAX);
        break;
    case 0x01:
        src = this.getEALongData(this.regECX);
        break;
    case 0x02:
        src = this.getEALongData(this.regEDX);
        break;
    case 0x03:
        src = this.getEALongData(this.regEBX);
        break;
    case 0x04:
        src = this.getEALongData(X86.modSIB.call(this, 0));
        break;
    case 0x05:
        src = this.getEALongData(this.getIPAddr());
        break;
    case 0x06:
        src = this.getEALongData(this.regESI);
        break;
    case 0x07:
        src = this.getEALongData(this.regEDI);
        break;
    case 0x40:
        src = this.getEALongData(this.regEAX + this.getIPDisp());
        break;
    case 0x41:
        src = this.getEALongData(this.regECX + this.getIPDisp());
        break;
    case 0x42:
        src = this.getEALongData(this.regEDX + this.getIPDisp());
        break;
    case 0x43:
        src = this.getEALongData(this.regEBX + this.getIPDisp());
        break;
    case 0x44:
        src = this.getEALongData(X86.modSIB.call(this, 1) + this.getIPDisp());
        break;
    case 0x45:
        src = this.getEALongStack(this.regEBP + this.getIPDisp());
        break;
    case 0x46:
        src = this.getEALongData(this.regESI + this.getIPDisp());
        break;
    case 0x47:
        src = this.getEALongData(this.regEDI + this.getIPDisp());
        break;
    case 0x80:
        src = this.getEALongData(this.regEAX + this.getIPAddr());
        break;
    case 0x81:
        src = this.getEALongData(this.regECX + this.getIPAddr());
        break;
    case 0x82:
        src = this.getEALongData(this.regEDX + this.getIPAddr());
        break;
    case 0x83:
        src = this.getEALongData(this.regEBX + this.getIPAddr());
        break;
    case 0x84:
        src = this.getEALongData(X86.modSIB.call(this, 2) + this.getIPAddr());
        break;
    case 0x85:
        src = this.getEALongStack(this.regEBP + this.getIPAddr());
        break;
    case 0x86:
        src = this.getEALongData(this.regESI + this.getIPAddr());
        break;
    case 0x87:
        src = this.getEALongData(this.regEDI + this.getIPAddr());
        break;
    case 0xC0:
        src = this.regEAX;
        if (BACKTRACK) {this.backTrack.btiEALo = this.backTrack.btiAL; this.backTrack.btiEAHi = this.backTrack.btiAH;}
        break;
    case 0xC1:
        src = this.regECX;
        if (BACKTRACK) {this.backTrack.btiEALo = this.backTrack.btiCL; this.backTrack.btiEAHi = this.backTrack.btiCH;}
        break;
    case 0xC2:
        src = this.regEDX;
        if (BACKTRACK) {this.backTrack.btiEALo = this.backTrack.btiDL; this.backTrack.btiEAHi = this.backTrack.btiDH;}
        break;
    case 0xC3:
        src = this.regEBX;
        if (BACKTRACK) {this.backTrack.btiEALo = this.backTrack.btiBL; this.backTrack.btiEAHi = this.backTrack.btiBH;}
        break;
    case 0xC4:
        src = this.getSP();
        if (BACKTRACK) {this.backTrack.btiEALo = X86.BTINFO.SP_LO; this.backTrack.btiEAHi = X86.BTINFO.SP_HI;}
        break;
    case 0xC5:
        src = this.regEBP;
        if (BACKTRACK) {this.backTrack.btiEALo = this.backTrack.btiBPLo; this.backTrack.btiEAHi = this.backTrack.btiBPHi;}
        break;
    case 0xC6:
        src = this.regESI;
        if (BACKTRACK) {this.backTrack.btiEALo = this.backTrack.btiSILo; this.backTrack.btiEAHi = this.backTrack.btiSIHi;}
        break;
    case 0xC7:
        src = this.regEDI;
        if (BACKTRACK) {this.backTrack.btiEALo = this.backTrack.btiDILo; this.backTrack.btiEAHi = this.backTrack.btiDIHi;}
        break;
    }

    switch((bModRM >> 3) & 0x7) {
    case 0x0:
        dst = this.regEAX;
        l = fn.call(this, dst, src);
        this.regEAX = l;
        if (BACKTRACK) {this.backTrack.btiAL = this.backTrack.btiEALo; this.backTrack.btiAH = this.backTrack.btiEAHi;}
        break;
    case 0x1:
        dst = this.regECX;
        l = fn.call(this, dst, src);
        this.regECX = l;
        if (BACKTRACK) {this.backTrack.btiCL = this.backTrack.btiEALo; this.backTrack.btiCH = this.backTrack.btiEAHi;}
        break;
    case 0x2:
        dst = this.regEDX;
        l = fn.call(this, dst, src);
        this.regEDX = l;
        if (BACKTRACK) {this.backTrack.btiDL = this.backTrack.btiEALo; this.backTrack.btiDH = this.backTrack.btiEAHi;}
        break;
    case 0x3:
        dst = this.regEBX;
        l = fn.call(this, dst, src);
        this.regEBX = l;
        if (BACKTRACK) {this.backTrack.btiBL = this.backTrack.btiEALo; this.backTrack.btiBH = this.backTrack.btiEAHi;}
        break;
    case 0x4:
        dst = this.getSP();
        l = fn.call(this, dst, src);
        this.setSP(l);
        break;
    case 0x5:
        dst = this.regEBP;
        l = fn.call(this, dst, src);
        this.regEBP = l;
        if (BACKTRACK) {this.backTrack.btiBPLo = this.backTrack.btiEALo; this.backTrack.btiBPHi = this.backTrack.btiEAHi;}
        break;
    case 0x6:
        dst = this.regESI;
        l = fn.call(this, dst, src);
        this.regESI = l;
        if (BACKTRACK) {this.backTrack.btiSILo = this.backTrack.btiEALo; this.backTrack.btiSIHi = this.backTrack.btiEAHi;}
        break;
    case 0x7:
        dst = this.regEDI;
        l = fn.call(this, dst, src);
        this.regEDI = l;
        if (BACKTRACK) {this.backTrack.btiDILo = this.backTrack.btiEALo; this.backTrack.btiDIHi = this.backTrack.btiEAHi;}
        break;
    }
};

/**
 * modMemLong32(fn)
 *
 * @this {CPUx86}
 * @param {function(number,number)} fn (dst,src)
 */
X86.modMemLong32 = function(fn)
{
    let dst, src;
    let bModRM = this.bModRM = this.getIPByte();

    switch(bModRM & 0xC7) {
    case 0x00:
        dst = this.getEALongDataWrite(this.regEAX);
        break;
    case 0x01:
        dst = this.getEALongDataWrite(this.regECX);
        break;
    case 0x02:
        dst = this.getEALongDataWrite(this.regEDX);
        break;
    case 0x03:
        dst = this.getEALongDataWrite(this.regEBX);
        break;
    case 0x04:
        dst = this.getEALongDataWrite(X86.modSIB.call(this, 0));
        break;
    case 0x05:
        dst = this.getEALongDataWrite(this.getIPAddr());
        break;
    case 0x06:
        dst = this.getEALongDataWrite(this.regESI);
        break;
    case 0x07:
        dst = this.getEALongDataWrite(this.regEDI);
        break;
    case 0x40:
        dst = this.getEALongDataWrite(this.regEAX + this.getIPDisp());
        break;
    case 0x41:
        dst = this.getEALongDataWrite(this.regECX + this.getIPDisp());
        break;
    case 0x42:
        dst = this.getEALongDataWrite(this.regEDX + this.getIPDisp());
        break;
    case 0x43:
        dst = this.getEALongDataWrite(this.regEBX + this.getIPDisp());
        break;
    case 0x44:
        dst = this.getEALongDataWrite(X86.modSIB.call(this, 1) + this.getIPDisp());
        break;
    case 0x45:
        dst = this.getEALongStackWrite(this.regEBP + this.getIPDisp());
        break;
    case 0x46:
        dst = this.getEALongDataWrite(this.regESI + this.getIPDisp());
        break;
    case 0x47:
        dst = this.getEALongDataWrite(this.regEDI + this.getIPDisp());
        break;
    case 0x80:
        dst = this.getEALongDataWrite(this.regEAX + this.getIPAddr());
        break;
    case 0x81:
        dst = this.getEALongDataWrite(this.regECX + this.getIPAddr());
        break;
    case 0x82:
        dst = this.getEALongDataWrite(this.regEDX + this.getIPAddr());
        break;
    case 0x83:
        dst = this.getEALongDataWrite(this.regEBX + this.getIPAddr());
        break;
    case 0x84:
        dst = this.getEALongDataWrite(X86.modSIB.call(this, 2) + this.getIPAddr());
        break;
    case 0x85:
        dst = this.getEALongStackWrite(this.regEBP + this.getIPAddr());
        break;
    case 0x86:
        dst = this.getEALongDataWrite(this.regESI + this.getIPAddr());
        break;
    case 0x87:
        dst = this.getEALongDataWrite(this.regEDI + this.getIPAddr());
        break;
    case 0xC0:
        dst = this.regEAX;
        break;
    case 0xC1:
        dst = this.regECX;
        break;
    case 0xC2:
        dst = this.regEDX;
        break;
    case 0xC3:
        dst = this.regEBX;
        break;
    case 0xC4:
        dst = this.getSP();
        break;
    case 0xC5:
        dst = this.regEBP;
        break;
    case 0xC6:
        dst = this.regESI;
        break;
    case 0xC7:
        dst = this.regEDI;
        break;
    }

    switch((bModRM >> 3) & 0x7) {
    case 0x0:
        src = this.regEAX;
        if (BACKTRACK) {this.backTrack.btiEALo = this.backTrack.btiAL; this.backTrack.btiEAHi = this.backTrack.btiAH;}
        break;
    case 0x1:
        src = this.regECX;
        if (BACKTRACK) {this.backTrack.btiEALo = this.backTrack.btiCL; this.backTrack.btiEAHi = this.backTrack.btiCH;}
        break;
    case 0x2:
        src = this.regEDX;
        if (BACKTRACK) {this.backTrack.btiEALo = this.backTrack.btiDL; this.backTrack.btiEAHi = this.backTrack.btiDH;}
        break;
    case 0x3:
        src = this.regEBX;
        if (BACKTRACK) {this.backTrack.btiEALo = this.backTrack.btiBL; this.backTrack.btiEAHi = this.backTrack.btiBH;}
        break;
    case 0x4:
        src = this.getSP();
        if (BACKTRACK) {this.backTrack.btiEALo = X86.BTINFO.SP_LO; this.backTrack.btiEAHi = X86.BTINFO.SP_HI;}
        break;
    case 0x5:
        src = this.regEBP;
        if (BACKTRACK) {this.backTrack.btiEALo = this.backTrack.btiBPLo; this.backTrack.btiEAHi = this.backTrack.btiBPHi;}
        break;
    case 0x6:
        src = this.regESI;
        if (BACKTRACK) {this.backTrack.btiEALo = this.backTrack.btiSILo; this.backTrack.btiEAHi = this.backTrack.btiSIHi;}
        break;
    case 0x7:
        src = this.regEDI;
        if (BACKTRACK) {this.backTrack.btiEALo = this.backTrack.btiDILo; this.backTrack.btiEAHi = this.backTrack.btiDIHi;}
        break;
    }

    let l = fn.call(this, dst, src);

    switch(bModRM & 0xC7) {
    case 0xC0:
        this.regEAX = l;
        if (BACKTRACK) {this.backTrack.btiAL = this.backTrack.btiEALo; this.backTrack.btiAH = this.backTrack.btiEAHi;}
        break;
    case 0xC1:
        this.regECX = l;
        if (BACKTRACK) {this.backTrack.btiCL = this.backTrack.btiEALo; this.backTrack.btiCH = this.backTrack.btiEAHi;}
        break;
    case 0xC2:
        this.regEDX = l;
        if (BACKTRACK) {this.backTrack.btiDL = this.backTrack.btiEALo; this.backTrack.btiDH = this.backTrack.btiEAHi;}
        break;
    case 0xC3:
        this.regEBX = l;
        if (BACKTRACK) {this.backTrack.btiBL = this.backTrack.btiEALo; this.backTrack.btiBH = this.backTrack.btiEAHi;}
        break;
    case 0xC4:
        this.setSP(l);
        break;
    case 0xC5:
        this.regEBP = l;
        if (BACKTRACK) {this.backTrack.btiBPLo = this.backTrack.btiEALo; this.backTrack.btiBPHi = this.backTrack.btiEAHi;}
        break;
    case 0xC6:
        this.regESI = l;
        if (BACKTRACK) {this.backTrack.btiSILo = this.backTrack.btiEALo; this.backTrack.btiSIHi = this.backTrack.btiEAHi;}
        break;
    case 0xC7:
        this.regEDI = l;
        if (BACKTRACK) {this.backTrack.btiDILo = this.backTrack.btiEALo; this.backTrack.btiDIHi = this.backTrack.btiEAHi;}
        break;
    default:
        this.setEALong(l);
        break;
    }
};

/**
 * modGrpLong32(afnGrp, fnSrc)
 *
 * @this {CPUx86}
 * @param {Array.<function(number,number)>} afnGrp
 * @param {function()} fnSrc
 */
X86.modGrpLong32 = function(afnGrp, fnSrc)
{
    let dst;
    let bModRM = this.bModRM = this.getIPByte();

    switch(bModRM & 0xC7) {
    case 0x00:
        dst = this.getEALongDataWrite(this.regEAX);
        break;
    case 0x01:
        dst = this.getEALongDataWrite(this.regECX);
        break;
    case 0x02:
        dst = this.getEALongDataWrite(this.regEDX);
        break;
    case 0x03:
        dst = this.getEALongDataWrite(this.regEBX);
        break;
    case 0x04:
        dst = this.getEALongDataWrite(X86.modSIB.call(this, 0));
        break;
    case 0x05:
        dst = this.getEALongDataWrite(this.getIPAddr());
        break;
    case 0x06:
        dst = this.getEALongDataWrite(this.regESI);
        break;
    case 0x07:
        dst = this.getEALongDataWrite(this.regEDI);
        break;
    case 0x40:
        dst = this.getEALongDataWrite(this.regEAX + this.getIPDisp());
        break;
    case 0x41:
        dst = this.getEALongDataWrite(this.regECX + this.getIPDisp());
        break;
    case 0x42:
        dst = this.getEALongDataWrite(this.regEDX + this.getIPDisp());
        break;
    case 0x43:
        dst = this.getEALongDataWrite(this.regEBX + this.getIPDisp());
        break;
    case 0x44:
        dst = this.getEALongDataWrite(X86.modSIB.call(this, 1) + this.getIPDisp());
        break;
    case 0x45:
        dst = this.getEALongStackWrite(this.regEBP + this.getIPDisp());
        break;
    case 0x46:
        dst = this.getEALongDataWrite(this.regESI + this.getIPDisp());
        break;
    case 0x47:
        dst = this.getEALongDataWrite(this.regEDI + this.getIPDisp());
        break;
    case 0x80:
        dst = this.getEALongDataWrite(this.regEAX + this.getIPAddr());
        break;
    case 0x81:
        dst = this.getEALongDataWrite(this.regECX + this.getIPAddr());
        break;
    case 0x82:
        dst = this.getEALongDataWrite(this.regEDX + this.getIPAddr());
        break;
    case 0x83:
        dst = this.getEALongDataWrite(this.regEBX + this.getIPAddr());
        break;
    case 0x84:
        dst = this.getEALongDataWrite(X86.modSIB.call(this, 2) + this.getIPAddr());
        break;
    case 0x85:
        dst = this.getEALongStackWrite(this.regEBP + this.getIPAddr());
        break;
    case 0x86:
        dst = this.getEALongDataWrite(this.regESI + this.getIPAddr());
        break;
    case 0x87:
        dst = this.getEALongDataWrite(this.regEDI + this.getIPAddr());
        break;
    case 0xC0:
        dst = this.regEAX;
        break;
    case 0xC1:
        dst = this.regECX;
        break;
    case 0xC2:
        dst = this.regEDX;
        break;
    case 0xC3:
        dst = this.regEBX;
        break;
    case 0xC4:
        dst = this.getSP();
        break;
    case 0xC5:
        dst = this.regEBP;
        break;
    case 0xC6:
        dst = this.regESI;
        break;
    case 0xC7:
        dst = this.regEDI;
        break;
    }

    let l = afnGrp[(bModRM >> 3) & 0x7].call(this, dst, fnSrc.call(this));

    switch(bModRM & 0xC7) {
    case 0xC0:
        this.regEAX = l;
        break;
    case 0xC1:
        this.regECX = l;
        break;
    case 0xC2:
        this.regEDX = l;
        break;
    case 0xC3:
        this.regEBX = l;
        break;
    case 0xC4:
        this.setSP(l);
        break;
    case 0xC5:
        this.regEBP = l;
        break;
    case 0xC6:
        this.regESI = l;
        break;
    case 0xC7:
        this.regEDI = l;
        break;
    default:
        this.setEALong(l);
        break;
    }
};

/**
 * modSIB(mod)
 *
 * @this {CPUx86}
 * @param {number} mod
 * @returns {number}
 */
X86.modSIB = function(mod)
{
    let bSIB = this.getIPByte();
    let scale = bSIB >> 6, index, base;

    switch((bSIB >> 3) & 0x7) {
    case 0:
        index = this.regEAX;
        break;
    case 1:
        index = this.regECX;
        break;
    case 2:
        index = this.regEDX;
        break;
    case 3:
        index = this.regEBX;
        break;
    case 4:
        index = 0;
        break;
    case 5:
        index = this.regEBP;
        break;
    case 6:
        index = this.regESI;
        break;
    case 7:
        index = this.regEDI;
        break;
    }

    switch(bSIB & 0x07) {
    case 0:
        base = this.regEAX;
        break;
    case 1:
        base = this.regECX;
        break;
    case 2:
        base = this.regEDX;
        break;
    case 3:
        base = this.regEBX;
        break;
    case 4:
        base = this.getSP();
        this.segData = this.segStack;
        break;
    case 5:
        if (mod) {
            base = this.regEBP;
            this.segData = this.segStack;
        } else {
            base = this.getIPAddr();
        }
        break;
    case 6:
        base = this.regESI;
        break;
    case 7:
        base = this.regEDI;
        break;
    }

    return ((index << scale) + base)|0;
};
