/**
 * @fileoverview Implements PCx86 0x0F two-byte opcode handlers
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import X86 from "./x86.js";
import { DEBUG, DEBUGGER, I386 } from "./defines.js";

/**
 * op=0x0F,0x00 (GRP6 mem/reg)
 *
 * @this {CPUx86}
 */
X86.opGRP6 = function()
{
    let bModRM = this.peekIPByte();
    if ((bModRM & 0x38) < 0x10) {   // possible reg values: 0x00, 0x08, 0x10, 0x18, 0x20, 0x28, 0x30, 0x38
        this.opFlags |= X86.OPFLAG.NOREAD;
    }
    this.decodeModGrpWord.call(this, this.aOpGrp6, X86.helpSRCNone);
};

/**
 * op=0x0F,0x01 (GRP7 mem/reg)
 *
 * @this {CPUx86}
 */
X86.opGRP7 = function()
{
    let bModRM = this.peekIPByte();
    if (!(bModRM & 0x10)) {
        this.opFlags |= X86.OPFLAG.NOREAD;
    }
    this.decodeModGrpWord.call(this, X86.aOpGrp7, X86.helpSRCNone);
};

/**
 * opLAR()
 *
 * op=0x0F,0x02 (LAR reg,mem/reg)
 *
 * @this {CPUx86}
 */
X86.opLAR = function()
{
    /**
     * TODO: Consider swapping out this function whenever setProtMode() changes the mode to real-mode or V86-mode.
     */
    if (!(this.regCR0 & X86.CR0.MSW.PE) || I386 && (this.regPS & X86.PS.VM)) {
        X86.opInvalid.call(this);
        return;
    }
    this.decodeModRegWord.call(this, X86.fnLAR);
};

/**
 * opLSL()
 *
 * op=0x0F,0x03 (LSL reg,mem/reg)
 *
 * @this {CPUx86}
 */
X86.opLSL = function()
{
    /**
     * TODO: Consider swapping out this function whenever setProtMode() changes the mode to real-mode or V86-mode.
     */
    if (!(this.regCR0 & X86.CR0.MSW.PE) || I386 && (this.regPS & X86.PS.VM)) {
        X86.opInvalid.call(this);
        return;
    }
    this.decodeModRegWord.call(this, X86.fnLSL);
};

/**
 * opLOADALL286()
 *
 * op=0x0F,0x05 (LOADALL)
 *
 * From the "Undocumented iAPX 286 Test Instruction" document at http://www.pcjs.org/pubs/pc/reference/intel/80286/loadall/:
 *
 *  Physical Address (Hex)        Associated CPU Register
 *          800-805                        None
 *          806-807                        MSW
 *          808-815                        None
 *          816-817                        TR
 *          818-819                        Flag word
 *          81A-81B                        IP
 *          81C-81D                        LDT
 *          81E-81F                        DS
 *          820-821                        SS
 *          822-823                        CS
 *          824-825                        ES
 *          826-827                        DI
 *          828-829                        SI
 *          82A-82B                        BP
 *          82C-82D                        SP
 *          82E-82F                        BX
 *          830-831                        DX
 *          832-833                        CX
 *          834-835                        AX
 *          836-83B                        ES descriptor cache
 *          83C-841                        CS descriptor cache
 *          842-847                        SS descriptor cache
 *          848-84D                        DS descriptor cache
 *          84E-853                        GDTR
 *          854-859                        LDT descriptor cache
 *          85A-85F                        IDTR
 *          860-865                        TSS descriptor cache
 *
 * @this {CPUx86}
 */
X86.opLOADALL286 = function()
{
    if (this.nCPL) {
        /**
         * To use LOADALL, CPL must be zero.
         */
        X86.helpFault.call(this, X86.EXCEPTION.GP_FAULT, 0, 0, true);
        return;
    }
    this.setMSW(this.getShort(0x806));
    this.regEDI = this.getShort(0x826);
    this.regESI = this.getShort(0x828);
    this.regEBP = this.getShort(0x82A);
    this.regEBX = this.getShort(0x82E);
    this.regEDX = this.getShort(0x830);
    this.regECX = this.getShort(0x832);
    this.regEAX = this.getShort(0x834);
    this.segES.loadDesc6(0x836, this.getShort(0x824));
    this.segCS.loadDesc6(0x83C, this.getShort(0x822));
    this.segSS.loadDesc6(0x842, this.getShort(0x820));
    this.segDS.loadDesc6(0x848, this.getShort(0x81E));
    /**
     * Unlike LOADALL386, there's no requirement for calling setPS() before loading segment registers;
     * in fact, since we're not passing a CPL to setPS(), it may be preferable to have CS (and perhaps SS)
     * already loaded, so that setPS() can query the CPL.  TODO: Verify that CPL is set correctly.
     */
    this.setPS(this.getShort(0x818));
    /**
     * It's important to call setIP() and setSP() *after* the segCS and segSS loads, so that the CPU's
     * linear IP and SP registers (regLIP and regLSP) will be updated properly.  Ordinarily that would be
     * taken care of by simply using the CPU's setCS() and setSS() functions, but those functions call the
     * default descriptor load() functions, and obviously here we must use loadDesc6() instead.
     */
    this.setIP(this.getShort(0x81A));
    this.setSP(this.getShort(0x82C));
    /**
     * The bytes at 0x851 and 0x85D "should be zeroes", as per the "Undocumented iAPX 286 Test Instruction"
     * document, but the LOADALL issued by RAMDRIVE in PC-DOS 7.0 contains 0xFF in both of those bytes, resulting
     * in very large addrGDT and addrIDT values.  Obviously, we can't have that, so we load only the low byte
     * of the second word for both of those registers.
     */
    this.addrGDT = this.getShort(0x84E) | (this.getByte(0x850) << 16);
    this.addrGDTLimit = this.addrGDT + this.getShort(0x852);
    this.addrIDT = this.getShort(0x85A) | (this.getByte(0x85C) << 16);
    this.addrIDTLimit = this.addrIDT + this.getShort(0x85E);
    this.segLDT.loadDesc6(0x854, this.getShort(0x81C));
    this.segTSS.loadDesc6(0x860, this.getShort(0x816));

    /**
     * Oddly, the above Intel document gives two contradictory cycle counts for LOADALL: 190 and 195.
     * I'm going with 195, since both the PC Magazine Programmer's Technical Reference and Robert Collins
     * (http://www.rcollins.org/articles/loadall/tspec_a3_doc.html) agree.
     */
    this.nStepCycles -= 195;

    /**
     * TODO: LOADALL operation still needs to be verified in protected mode....
     */
    if (DEBUG && DEBUGGER && (this.regCR0 & X86.CR0.MSW.PE)) this.stopCPU();
};

/**
 * opCLTS()
 *
 * op=0x0F,0x06 (CLTS)
 *
 * @this {CPUx86}
 */
X86.opCLTS = function()
{
    /**
     * NOTE: The following code shouldn't need to also test X86.PS.VM, because V86-mode is CPL 3.
     */
    if (this.nCPL) {
        X86.helpFault.call(this, X86.EXCEPTION.GP_FAULT, 0);
        return;
    }
    this.regCR0 &= ~X86.CR0.MSW.TS;
    this.nStepCycles -= 2;
};

/**
 * opLOADALL386()
 *
 * op=0x0F,0x07 (LOADALL ES:[EDI])
 *
 * Excerpt from Intel Internal Correspondence on "386 LOADALL Instruction" (undated), available as part of the
 * PCjs Project at http://www.pcjs.org/pubs/pc/reference/intel/80386/loadall/
 *
 *      1.5. 386 LOADALL Memory Format
 *
 *      The following tables define the LOADALL memory format. The LOADALL instruction uses a 512-byte block of
 *      memory, where the lowest addressed byte is given in ES:[(E)DI]. The area above offset CC hex is used for
 *      processor dependent registers (temporaries, invisible registers). These are loaded into the processor,
 *      but will not affect normal program execution. All values in the memory area are read from a four byte field,
 *      to keep the memory format DWORD aligned, but it is possible to locate memory area at a non-aligned address.
 *      In this case, the execution time of LOADALL will DOUBLE For this reason, the memory dump area should always
 *      be DWORD aligned.
 *
 *         Offset         Register
 *         ------         --------
 *          0x00            CR0
 *          0x04            EFLAGS
 *          0x08            EIP
 *          0x0C            EDI
 *          0x10            ESI
 *          0x14            EBP
 *          0x18            ESP
 *          0x1C            EBX
 *          0x20            EDX
 *          0x24            ECX
 *          0x28            EAX
 *          0x2C            DR6
 *          0x30            DR7
 *          0x34            TSSR(TSSSelector-Word)
 *          0x38            LDTR(LDTSelector-Word)
 *          0x3C            GS
 *          0x40            FS
 *          0x44            DS
 *          0x48            SS
 *          0x4C            CS
 *          0x50            ES
 *          0x54            TSS(AR)
 *          0x58            TSS(BASE)
 *          0x5C            TSS(LIMIT)
 *          0x60            IDT(AR)
 *          0x64            IDT(BASE)
 *          0x68            IDT(LIMIT)
 *          0x6C            GDT(AR)
 *          0x70            GDT(BASE)
 *          0x74            GDT(LIMIT)
 *          0x78            LDT(AR)
 *          0x7C            LDT(BASE)
 *          0x80            LDT(LIMIT)
 *          0x84            GS(AR)
 *          0x88            GS(BASE)
 *          0x8C            GS(LIMIT)
 *          0x90            FS(AR)
 *          0x94            FS(BASE)
 *          0x98            FS(LIMIT)
 *          0x9C            DS(AR)
 *          0xA0            DS(BASE)
 *          0xA4            DS(LIMIT)
 *          0xA8            SS(AR)
 *          0xAC            SS(BASE)
 *          0xB0            SS(LIMIT)
 *          0xB4            CS(AR)
 *          0xB8            CS(BASE)
 *          0xBC            CS(LIMIT)
 *          0xC0            ES(AR)
 *          0xC4            ES(BASE)
 *          0xC8            ES(LIMIT)
 *
 *      Each descriptor entry consists of 3 pieces:
 *
 *          AR
 *          BASE
 *          LIMIT
 *
 *      The AR part has the same format as the second dword of a segment descriptor except that only the AR byte
 *      (bits 8-15) and the G and B/D bits (bits 23 and 22) are used. All other bits in the AR field are ignored.
 *      The BASE and LIMIT parts contain full 32-bit values, fully expanded and unscrambled from the 386 descriptor.
 *      In particular, the LIMIT field loaded for a page granular segment gives a byte granular limit, so should
 *      contain the page limit*4096 plus 4095.
 *
 * @this {CPUx86}
 */
X86.opLOADALL386 = function()
{
    if (this.nCPL) {
        /**
         * To use LOADALL, CPL must be zero.
         */
        X86.helpFault.call(this, X86.EXCEPTION.GP_FAULT, 0, 0, true);
        return;
    }
    let addr = this.segES.checkRead(this.regEDI & this.maskAddr, 0xCC);
    if (addr !== X86.ADDR_INVALID) {
        X86.helpLoadCR0.call(this, this.getLong(addr));
        /**
         * We need to call setPS() before loading any segment registers, because if the Virtual 8086 Mode (VM)
         * bit is set in EFLAGS, the segment registers need to know that.
         */
        let accSS = this.getLong(addr + 0xA8);
        let cpl = (accSS & X86.DESC.ACC.DPL.MASK) >> X86.DESC.ACC.DPL.SHIFT;
        this.setPS(this.getLong(addr + 0x04), cpl);
        /**
         * TODO: We have no use for the GDT(AR) at offset 0x6C or the IDT(AR) at offset 0x60, because
         * we don't manage them as segment registers.  Should we?
         */
        this.addrGDT = this.getLong(addr + 0x70);
        this.addrGDTLimit = this.addrGDT + this.getLong(addr + 0x74);
        this.addrIDT = this.getLong(addr + 0x64);
        this.addrIDTLimit = this.addrIDT + this.getLong(addr + 0x68);
        this.segLDT.loadDesc(this.getLong(addr + 0x38), this.getLong(addr + 0x78), this.getLong(addr + 0x7C), this.getLong(addr + 0x80));
        this.segTSS.loadDesc(this.getLong(addr + 0x34), this.getLong(addr + 0x54), this.getLong(addr + 0x58), this.getLong(addr + 0x5C));
        this.regEDI = this.getLong(addr + 0x0C);
        this.regESI = this.getLong(addr + 0x10);
        this.regEBP = this.getLong(addr + 0x14);
        this.regEBX = this.getLong(addr + 0x1C);
        this.regEDX = this.getLong(addr + 0x20);
        this.regECX = this.getLong(addr + 0x24);
        this.regEAX = this.getLong(addr + 0x28);
        this.segGS.loadDesc(this.getLong(addr + 0x3C), this.getLong(addr + 0x84), this.getLong(addr + 0x88), this.getLong(addr + 0x8C));
        this.segFS.loadDesc(this.getLong(addr + 0x40), this.getLong(addr + 0x90), this.getLong(addr + 0x94), this.getLong(addr + 0x98));
        this.segDS.loadDesc(this.getLong(addr + 0x44), this.getLong(addr + 0x9C), this.getLong(addr + 0xA0), this.getLong(addr + 0xA4));
        this.segSS.loadDesc(this.getLong(addr + 0x48), accSS,                     this.getLong(addr + 0xAC), this.getLong(addr + 0xB0));
        this.segCS.loadDesc(this.getLong(addr + 0x4C), this.getLong(addr + 0xB4), this.getLong(addr + 0xB8), this.getLong(addr + 0xBC));
        this.segES.loadDesc(this.getLong(addr + 0x50), this.getLong(addr + 0xC0), this.getLong(addr + 0xC4), this.getLong(addr + 0xC8));
        /**
         * It's important to call setIP() and setSP() *after* the segCS and segSS loads, so that the CPU's
         * linear IP and SP registers (regLIP and regLSP) will be updated properly.  Ordinarily that would be
         * taken care of by simply using the CPU's setCS() and setSS() functions, but those functions call the
         * default descriptor load() functions, and obviously here we must use loadDesc() instead.
         */
        this.setIP(this.getLong(addr + 0x08));
        this.setSP(this.getLong(addr + 0x18));
        /**
         * TODO: We need to factor out the code that updates DR6 and DR7 from X86.opMOVdr(), so that we can
         * more easily update DR6 and DR7 (which we're simply ignoring for now).
         */
    }

    /**
     * According to Robert Collins (http://www.rcollins.org/articles/loadall/tspec_a3_doc.html), the 80386 LOADALL
     * takes 122 cycles.  Also, according the above-mentioned Intel document, if the memory buffer is not DWORD aligned,
     * execution time will DOUBLE.
     */
    this.nStepCycles -= (122 << ((addr & 0x3)? 1 : 0));
};

/**
 * opMOVrc()
 *
 * op=0x0F,0x20 (MOV reg,ctlreg)
 *
 * NOTE: Since this instruction uses only 32-bit general-purpose registers, our ModRM decoders
 * are going to be more hindrance than help, so we fully decode and execute the instruction ourselves.
 *
 * From PCMag_Prog_TechRef, p.476: "The 80386 executes the MOV to/from control registers (CRn) regardless
 * of the setting of the MOD field.  The MOD field should be set to 11, but an early 80386 documentation
 * error indicated that the MOD field value was a don't care.  Early versions of the 80486 detect
 * a MOD != 11 as an illegal opcode.  This was changed in later versions to ignore the value of MOD.
 * Assemblers that generate MOD != 11 for these instructions will fail on some 80486s."
 *
 * And in fact, the COMPAQ DeskPro 386 ROM BIOS executes this instruction with MOD set to 00, so we have
 * to ignore it.
 *
 * @this {CPUx86}
 */
X86.opMOVrc = function()
{
    /**
     * NOTE: The following code shouldn't need to also test X86.PS.VM, because V86-mode is CPL 3.
     */
    if (this.nCPL) {
        /**
         * You're not allowed to read control registers if the current privilege level is not zero.
         */
        X86.helpFault.call(this, X86.EXCEPTION.GP_FAULT, 0);
        return;
    }

    let reg;
    let bModRM = this.getIPByte();
    switch((bModRM & 0x38) >> 3) {
    case 0x0:
        reg = this.regCR0;
        break;
    case 0x2:
        reg = this.regCR2;
        break;
    case 0x3:
        reg = this.regCR3;
        break;
    default:
        X86.opUndefined.call(this);
        return;
    }

    this.setReg(bModRM & 0x7, reg);

    this.nStepCycles -= 6;

    /**
     * TODO: Implement BACKTRACK for this instruction (although Control registers are not likely to be a conduit for interesting data).
     */
};

/**
 * opMOVrd()
 *
 * op=0x0F,0x21 (MOV reg,dbgreg)
 *
 * NOTE: Since this instruction uses only 32-bit general-purpose registers, our ModRM decoders
 * are going to be more hindrance than help, so we fully decode and execute the instruction ourselves.
 *
 * @this {CPUx86}
 */
X86.opMOVrd = function()
{
    /**
     * NOTE: The following code shouldn't need to also test X86.PS.VM, because V86-mode is CPL 3.
     */
    if (this.nCPL) {
        /**
         * You're not allowed to read control registers if the current privilege level is not zero.
         */
        X86.helpFault.call(this, X86.EXCEPTION.GP_FAULT, 0);
        return;
    }

    let bModRM = this.getIPByte();
    let iSrc = (bModRM & 0x38) >> 3;

    if (iSrc == 4 || iSrc == 5) {
        X86.opUndefined.call(this);
        return;
    }

    this.setReg(bModRM & 0x7, this.regDR[iSrc]);

    this.nStepCycles -= 22;

    /**
     * TODO: Implement BACKTRACK for this instruction (although Debug registers are not likely to be a conduit for interesting data).
     */
};

/**
 * opMOVcr()
 *
 * op=0x0F,0x22 (MOV ctlreg,reg)
 *
 * NOTE: Since this instruction uses only 32-bit general-purpose registers, our ModRM decoders
 * are going to be more hindrance than help, so we fully decode and execute the instruction ourselves.
 *
 * From PCMag_Prog_TechRef, p.476: "The 80386 executes the MOV to/from control registers (CRn) regardless
 * of the setting of the MOD field.  The MOD field should be set to 11, but an early 80386 documentation
 * error indicated that the MOD field value was a don't care.  Early versions of the 80486 detect
 * a MOD != 11 as an illegal opcode.  This was changed in later versions to ignore the value of MOD.
 * Assemblers that generate MOD != 11 for these instructions will fail on some 80486s."
 *
 * And in fact, the COMPAQ DeskPro 386 ROM BIOS executes this instruction with MOD set to 00, so we have
 * to ignore it.
 *
 * @this {CPUx86}
 */
X86.opMOVcr = function()
{
    /**
     * NOTE: The following code shouldn't need to also test X86.PS.VM, because V86-mode is CPL 3.
     */
    if (this.nCPL) {
        /**
         * You're not allowed to write control registers if the current privilege level is not zero.
         */
        X86.helpFault.call(this, X86.EXCEPTION.GP_FAULT, 0);
        return;
    }

    let bModRM = this.getIPByte();
    let reg = this.getReg(bModRM & 0x7);

    switch((bModRM & 0x38) >> 3) {
    case 0x0:
        X86.helpLoadCR0.call(this, reg);
        this.nStepCycles -= 10;
        break;
    case 0x2:
        this.regCR2 = reg;
        this.nStepCycles -= 4;
        break;
    case 0x3:
        X86.helpLoadCR3.call(this, reg);
        this.nStepCycles -= 5;
        break;
    default:
        X86.opUndefined.call(this);
        return;
    }

    /**
     * TODO: Implement BACKTRACK for this instruction (although Control registers are not likely to be a conduit for interesting data).
     */
};

/**
 * opMOVdr()
 *
 * op=0x0F,0x23 (MOV dbgreg,reg)
 *
 * NOTE: Since this instruction uses only 32-bit general-purpose registers, our ModRM decoders
 * are going to be more hindrance than help, so we fully decode and execute the instruction ourselves.
 *
 * @this {CPUx86}
 */
X86.opMOVdr = function()
{
    /**
     * NOTE: The following code shouldn't need to also test X86.PS.VM, because V86-mode is CPL 3.
     */
    if (this.nCPL) {
        /**
         * You're not allowed to write control registers if the current privilege level is not zero.
         */
        X86.helpFault.call(this, X86.EXCEPTION.GP_FAULT, 0);
        return;
    }

    let bModRM = this.getIPByte();
    let iDst = (bModRM & 0x38) >> 3;

    if (iDst == 4 || iDst == 5) {
        X86.opUndefined.call(this);
        return;
    }

    let regDR = this.getReg(bModRM & 0x7);

    if (regDR != this.regDR[iDst]) {
        this.checkDebugRegisters(false);
        this.regDR[iDst] = regDR;
        this.checkDebugRegisters(true);
    }

    this.nStepCycles -= (iDst < 4? 22 : 14);

    /**
     * TODO: Implement BACKTRACK for this instruction (although Debug registers are not likely to be a conduit for interesting data).
     */
};

/**
 * opMOVrt()
 *
 * op=0x0F,0x24 (MOV reg,tstreg)
 *
 * NOTE: Since this instruction uses only 32-bit general-purpose registers, our ModRM decoders
 * are going to be more hindrance than help, so we fully decode and execute the instruction ourselves.
 *
 * @this {CPUx86}
 */
X86.opMOVrt = function()
{
    /**
     * NOTE: The following code shouldn't need to also test X86.PS.VM, because V86-mode is CPL 3.
     */
    if (this.nCPL) {
        /**
         * You're not allowed to read control registers if the current privilege level is not zero.
         */
        X86.helpFault.call(this, X86.EXCEPTION.GP_FAULT, 0);
        return;
    }

    let bModRM = this.getIPByte();
    let iSrc = (bModRM & 0x38) >> 3;

    /**
     * Only TR6 and TR7 are defined, and only for the 80386 and 80486.  From the PC Magazine Prog. TechRef, p.64:
     *
     *  "The 80386 provides two 32-bit test registers, TR6 and TR7, as a mechanism for programmers to verify proper
     *   operation of the Translation Lookaside Buffer (TLB) when power is applied to the chip. The TLB is a cache used
     *   internally by the 80386 to translate linear addresses to physical addresses."
     */
    if (iSrc < 6) {
        X86.opUndefined.call(this);
        return;
    }

    this.setReg(bModRM & 0x7, this.regTR[iSrc]);
    this.nStepCycles -= 12;

    /**
     * TODO: Implement BACKTRACK for this instruction (although Test registers are not likely to be a conduit for interesting data).
     */
};

/**
 * opMOVtr()
 *
 * op=0x0F,0x26 (MOV tstreg,reg)
 *
 * NOTE: Since this instruction uses only 32-bit general-purpose registers, our ModRM decoders
 * are going to be more hindrance than help, so we fully decode and execute the instruction ourselves.
 *
 * @this {CPUx86}
 */
X86.opMOVtr = function()
{
    /**
     * NOTE: The following code shouldn't need to also test X86.PS.VM, because V86-mode is CPL 3.
     */
    if (this.nCPL) {
        /**
         * You're not allowed to write control registers if the current privilege level is not zero.
         */
        X86.helpFault.call(this, X86.EXCEPTION.GP_FAULT, 0);
        return;
    }

    let bModRM = this.getIPByte();
    let iDst = (bModRM & 0x38) >> 3;

    /**
     * Only TR6 and TR7 are defined, and only for the 80386 and 80486.  From the PC Magazine Prog. TechRef, p.64:
     *
     *  "The 80386 provides two 32-bit test registers, TR6 and TR7, as a mechanism for programmers to verify proper
     *   operation of the Translation Lookaside Buffer (TLB) when power is applied to the chip. The TLB is a cache used
     *   internally by the 80386 to translate linear addresses to physical addresses."
     */
    if (iDst < 6) {
        X86.opUndefined.call(this);
        return;
    }

    /**
     * TODO: Do something useful with the Test registers.
     */
    this.regTR[iDst] = this.getReg(bModRM & 0x7);

    this.nStepCycles -= 12;

    /**
     * TODO: Implement BACKTRACK for this instruction (although Test registers are not likely to be a conduit for interesting data).
     */
};

/**
 * NOTE: The following 16 new conditional jumps actually rely on the OPERAND override setting
 * for determining whether a signed 16-bit or 32-bit displacement will be fetched, even though
 * the ADDRESS override might seem more intuitive.  Think of them as instructions that are loading
 * a new operand into IP/EIP.
 *
 * Also, in 16-bit code, even though a signed rel16 value would seem to imply a range of -32768
 * to +32767, any location within a 64Kb code segment outside that range can be reached by choosing
 * a displacement in the opposite direction, causing the 16-bit value in EIP to underflow or overflow;
 * any underflow or overflow doesn't matter, because only the low 16 bits of EIP are updated when a
 * 16-bit OPERAND size is in effect.
 *
 * In fact, for 16-bit jumps, it's simpler to always think of rel16 as an UNSIGNED value added to
 * the current EIP, where the result is then truncated to a 16-bit value.  This is why we don't have
 * to sign-extend rel16 before adding it to the current EIP.
 */

/**
 * opJOw()
 *
 * op=0x0F,0x80 (JO rel16/rel32)
 *
 * @this {CPUx86}
 */
X86.opJOw = function()
{
    let disp = this.getIPWord();
    if (this.getOF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * opJNOw()
 *
 * op=0x0F,0x81 (JNO rel16/rel32)
 *
 * @this {CPUx86}
 */
X86.opJNOw = function()
{
    let disp = this.getIPWord();
    if (!this.getOF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * opJCw()
 *
 * op=0x0F,0x82 (JC rel16/rel32)
 *
 * @this {CPUx86}
 */
X86.opJCw = function()
{
    let disp = this.getIPWord();
    if (this.getCF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * opJNCw()
 *
 * op=0x0F,0x83 (JNC rel16/rel32)
 *
 * @this {CPUx86}
 */
X86.opJNCw = function()
{
    let disp = this.getIPWord();
    if (!this.getCF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * opJZw()
 *
 * op=0x0F,0x84 (JZ rel16/rel32)
 *
 * @this {CPUx86}
 */
X86.opJZw = function()
{
    let disp = this.getIPWord();
    if (this.getZF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * opJNZw()
 *
 * op=0x0F,0x85 (JNZ rel16/rel32)
 *
 * @this {CPUx86}
 */
X86.opJNZw = function()
{
    let disp = this.getIPWord();
    if (!this.getZF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * opJBEw()
 *
 * op=0x0F,0x86 (JBE rel16/rel32)
 *
 * @this {CPUx86}
 */
X86.opJBEw = function()
{
    let disp = this.getIPWord();
    if (this.getCF() || this.getZF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * opJNBEw()
 *
 * op=0x0F,0x87 (JNBE rel16/rel32)
 *
 * @this {CPUx86}
 */
X86.opJNBEw = function()
{
    let disp = this.getIPWord();
    if (!this.getCF() && !this.getZF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * opJSw()
 *
 * op=0x0F,0x88 (JS rel16/rel32)
 *
 * @this {CPUx86}
 */
X86.opJSw = function()
{
    let disp = this.getIPWord();
    if (this.getSF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * opJNSw()
 *
 * op=0x0F,0x89 (JNS rel16/rel32)
 *
 * @this {CPUx86}
 */
X86.opJNSw = function()
{
    let disp = this.getIPWord();
    if (!this.getSF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * opJPw()
 *
 * op=0x0F,0x8A (JP rel16/rel32)
 *
 * @this {CPUx86}
 */
X86.opJPw = function()
{
    let disp = this.getIPWord();
    if (this.getPF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * opJNPw()
 *
 * op=0x0F,0x8B (JNP rel16/rel32)
 *
 * @this {CPUx86}
 */
X86.opJNPw = function()
{
    let disp = this.getIPWord();
    if (!this.getPF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * opJLw()
 *
 * op=0x0F,0x8C (JL rel16/rel32)
 *
 * @this {CPUx86}
 */
X86.opJLw = function()
{
    let disp = this.getIPWord();
    if (!this.getSF() != !this.getOF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * opJNLw()
 *
 * op=0x0F,0x8D (JNL rel16/rel32)
 *
 * @this {CPUx86}
 */
X86.opJNLw = function()
{
    let disp = this.getIPWord();
    if (!this.getSF() == !this.getOF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * opJLEw()
 *
 * op=0x0F,0x8E (JLE rel16/rel32)
 *
 * @this {CPUx86}
 */
X86.opJLEw = function()
{
    let disp = this.getIPWord();
    if (this.getZF() || !this.getSF() != !this.getOF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * opJNLEw()
 *
 * op=0x0F,0x8F (JNLE rel16/rel32)
 *
 * @this {CPUx86}
 */
X86.opJNLEw = function()
{
    let disp = this.getIPWord();
    if (!this.getZF() && !this.getSF() == !this.getOF()) {
        this.setIP(this.getIP() + disp);
        this.nStepCycles -= this.cycleCounts.nOpCyclesJmpC;
        return;
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesJmpCFall;
};

/**
 * opSETO()
 *
 * op=0x0F,0x90 (SETO b)
 *
 * @this {CPUx86}
 */
X86.opSETO = function()
{
    X86.helpSETcc.call(this, X86.fnSETO);
};

/**
 * opSETNO()
 *
 * op=0x0F,0x91 (SETNO b)
 *
 * @this {CPUx86}
 */
X86.opSETNO = function()
{
    X86.helpSETcc.call(this, X86.fnSETO);
};

/**
 * opSETC()
 *
 * op=0x0F,0x92 (SETC b)
 *
 * @this {CPUx86}
 */
X86.opSETC = function()
{
    X86.helpSETcc.call(this, X86.fnSETC);
};

/**
 * opSETNC()
 *
 * op=0x0F,0x93 (SETNC b)
 *
 * @this {CPUx86}
 */
X86.opSETNC = function()
{
    X86.helpSETcc.call(this, X86.fnSETNC);
};

/**
 * opSETZ()
 *
 * op=0x0F,0x94 (SETZ b)
 *
 * @this {CPUx86}
 */
X86.opSETZ = function()
{
    X86.helpSETcc.call(this, X86.fnSETZ);
};

/**
 * opSETNZ()
 *
 * op=0x0F,0x95 (SETNZ b)
 *
 * @this {CPUx86}
 */
X86.opSETNZ = function()
{
    X86.helpSETcc.call(this, X86.fnSETNZ);
};

/**
 * opSETBE()
 *
 * op=0x0F,0x96 (SETBE b)
 *
 * @this {CPUx86}
 */
X86.opSETBE = function()
{
    X86.helpSETcc.call(this, X86.fnSETBE);
};

/**
 * opSETNBE()
 *
 * op=0x0F,0x97 (SETNBE b)
 *
 * @this {CPUx86}
 */
X86.opSETNBE = function()
{
    X86.helpSETcc.call(this, X86.fnSETNBE);
};

/**
 * opSETS()
 *
 * op=0x0F,0x98 (SETS b)
 *
 * @this {CPUx86}
 */
X86.opSETS = function()
{
    X86.helpSETcc.call(this, X86.fnSETS);
};

/**
 * opSETNS()
 *
 * op=0x0F,0x99 (SETNS b)
 *
 * @this {CPUx86}
 */
X86.opSETNS = function()
{
    X86.helpSETcc.call(this, X86.fnSETNS);
};

/**
 * opSETP()
 *
 * op=0x0F,0x9A (SETP b)
 *
 * @this {CPUx86}
 */
X86.opSETP = function()
{
    X86.helpSETcc.call(this, X86.fnSETP);
};

/**
 * opSETNP()
 *
 * op=0x0F,0x9B (SETNP b)
 *
 * @this {CPUx86}
 */
X86.opSETNP = function()
{
    X86.helpSETcc.call(this, X86.fnSETNP);
};

/**
 * opSETL()
 *
 * op=0x0F,0x9C (SETL b)
 *
 * @this {CPUx86}
 */
X86.opSETL = function()
{
    X86.helpSETcc.call(this, X86.fnSETL);
};

/**
 * opSETNL()
 *
 * op=0x0F,0x9D (SETNL b)
 *
 * @this {CPUx86}
 */
X86.opSETNL = function()
{
    X86.helpSETcc.call(this, X86.fnSETNL);
};

/**
 * opSETLE()
 *
 * op=0x0F,0x9E (SETLE b)
 *
 * @this {CPUx86}
 */
X86.opSETLE = function()
{
    X86.helpSETcc.call(this, X86.fnSETLE);
};

/**
 * opSETNLE()
 *
 * op=0x0F,0x9F (SETNLE b)
 *
 * @this {CPUx86}
 */
X86.opSETNLE = function()
{
    X86.helpSETcc.call(this, X86.fnSETNLE);
};

/**
 * opPUSHFS()
 *
 * op=0x0F,0xA0 (PUSH FS)
 *
 * @this {CPUx86}
 */
X86.opPUSHFS = function()
{
    /**
     * When the OPERAND size is 32 bits, the 80386 will decrement the stack pointer by 4, write the selector
     * into the 2 lower bytes, and leave the 2 upper bytes untouched; to properly emulate that, we must use the
     * more generic pushData() instead of pushWord().
     */
    if (!I386) {
        this.pushWord(this.segFS.sel);
    } else {
        this.pushData(this.segFS.sel, this.sizeData, 2);
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesPushSeg;
};

/**
 * opPOPFS()
 *
 * op=0x0F,0xA1 (POP FS)
 *
 * @this {CPUx86}
 */
X86.opPOPFS = function()
{
    /**
     * Any operation that modifies the stack before loading a new segment must snapshot regLSP first.
     */
    this.opLSP = this.regLSP;
    this.setFS(this.popWord());
    this.nStepCycles -= this.cycleCounts.nOpCyclesPopReg;
    this.opLSP = X86.ADDR_INVALID;
};

/**
 * opBT()
 *
 * op=0x0F,0xA3 (BT mem/reg,reg)
 *
 * @this {CPUx86}
 */
X86.opBT = function()
{
    this.decodeModMemWord.call(this, X86.fnBTMem);
    if (this.regEA !== X86.ADDR_INVALID) this.nStepCycles -= 6;
};

/**
 * opSHLDn()
 *
 * op=0x0F,0xA4 (SHLD mem/reg,reg,imm8)
 *
 * @this {CPUx86}
 */
X86.opSHLDn = function()
{
    this.decodeModMemWord.call(this, this.sizeData == 2? X86.fnSHLDwi : X86.fnSHLDdi);
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? 3 : 7);
};

/**
 * opSHLDcl()
 *
 * op=0x0F,0xA5 (SHLD mem/reg,reg,CL)
 *
 * @this {CPUx86}
 */
X86.opSHLDcl = function()
{
    this.decodeModMemWord.call(this, this.sizeData == 2? X86.fnSHLDwCL : X86.fnSHLDdCL);
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? 3 : 7);
};

/**
 * opXBTS()
 *
 * op=0x0F,0xA6 (XBTS reg,mem/reg,[E]AX,CL)
 *
 * @this {CPUx86}
 */
X86.opXBTS = function()
{
    this.decodeModRegWord.call(this, X86.fnXBTS);
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? 6 : 13);
};

/**
 * opIBTS()
 *
 * op=0x0F,0xA7 (IBTS mem/reg,[E]AX,CL,reg)
 *
 * @this {CPUx86}
 */
X86.opIBTS = function()
{
    this.decodeModMemWord.call(this, X86.fnIBTS);
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? 12 : 19);
};

/**
 * opPUSHGS()
 *
 * op=0x0F,0xA8 (PUSH GS)
 *
 * @this {CPUx86}
 */
X86.opPUSHGS = function()
{
    /**
     * When the OPERAND size is 32 bits, the 80386 will decrement the stack pointer by 4, write the selector
     * into the 2 lower bytes, and leave the 2 upper bytes untouched; to properly emulate that, we must use the
     * more generic pushData() instead of pushWord().
     */
    if (!I386) {
        this.pushWord(this.segGS.sel);
    } else {
        this.pushData(this.segGS.sel, this.sizeData, 2);
    }
    this.nStepCycles -= this.cycleCounts.nOpCyclesPushSeg;
};

/**
 * opPOPGS()
 *
 * op=0x0F,0xA9 (POP GS)
 *
 * @this {CPUx86}
 */
X86.opPOPGS = function()
{
    /**
     * Any operation that modifies the stack before loading a new segment must snapshot regLSP first.
     */
    this.opLSP = this.regLSP;
    this.setGS(this.popWord());
    this.nStepCycles -= this.cycleCounts.nOpCyclesPopReg;
    this.opLSP = X86.ADDR_INVALID;
};

/**
 * opBTS()
 *
 * op=0x0F,0xAB (BTC mem/reg,reg)
 *
 * @this {CPUx86}
 */
X86.opBTS = function()
{
    this.decodeModMemWord.call(this, X86.fnBTSMem);
    if (this.regEA !== X86.ADDR_INVALID) this.nStepCycles -= 5;
};

/**
 * opSHRDn()
 *
 * op=0x0F,0xAC (SHRD mem/reg,reg,imm8)
 *
 * @this {CPUx86}
 */
X86.opSHRDn = function()
{
    this.decodeModMemWord.call(this, this.sizeData == 2? X86.fnSHRDwi : X86.fnSHRDdi);
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? 3 : 7);
};

/**
 * opSHRDcl()
 *
 * op=0x0F,0xAD (SHRD mem/reg,reg,CL)
 *
 * @this {CPUx86}
 */
X86.opSHRDcl = function()
{
    this.decodeModMemWord.call(this, this.sizeData == 2? X86.fnSHRDwCL : X86.fnSHRDdCL);
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? 3 : 7);
};

/**
 * opIMUL()
 *
 * op=0x0F,0xAF (IMUL reg,mem/reg) (80386 and up)
 *
 * @this {CPUx86}
 */
X86.opIMUL = function()
{
    this.decodeModRegWord.call(this, this.sizeData == 2? X86.fnIMULrw : X86.fnIMULrd);
};

/**
 * opLSS()
 *
 * op=0x0F,0xB2 (LSS reg,word)
 *
 * This is like a "MOV reg,rm" operation, but it also loads SS from the next word.
 *
 * @this {CPUx86}
 */
X86.opLSS = function()
{
    this.decodeModRegWord.call(this, X86.fnLSS);
};

/**
 * opBTR()
 *
 * op=0x0F,0xB3 (BTC mem/reg,reg) (80386 and up)
 *
 * @this {CPUx86}
 */
X86.opBTR = function()
{
    this.decodeModMemWord.call(this, X86.fnBTRMem);
    if (this.regEA !== X86.ADDR_INVALID) this.nStepCycles -= 5;
};

/**
 * opLFS()
 *
 * op=0x0F,0xB4 (LFS reg,word)
 *
 * This is like a "MOV reg,rm" operation, but it also loads FS from the next word.
 *
 * @this {CPUx86}
 */
X86.opLFS = function()
{
    this.decodeModRegWord.call(this, X86.fnLFS);
};

/**
 * opLGS()
 *
 * op=0x0F,0xB5 (LGS reg,word)
 *
 * This is like a "MOV reg,rm" operation, but it also loads GS from the next word.
 *
 * @this {CPUx86}
 */
X86.opLGS = function()
{
    this.decodeModRegWord.call(this, X86.fnLGS);
};

/**
 * opMOVZXb()
 *
 * op=0x0F,0xB6 (MOVZX reg,byte)
 *
 * @this {CPUx86}
 */
X86.opMOVZXb = function()
{
    this.decodeModRegByte.call(this, X86.fnMOVXb);
    let reg = (this.bModRM >> 3) & 0x7;
    switch(reg) {
    case 0x0:
        this.regEAX = (this.regEAX & ~this.maskData) | (this.regEAX & 0xff);
        break;
    case 0x1:
        this.regECX = (this.regECX & ~this.maskData) | (this.regECX & 0xff);
        break;
    case 0x2:
        this.regEDX = (this.regEDX & ~this.maskData) | (this.regEDX & 0xff);
        break;
    case 0x3:
        this.regEBX = (this.regEBX & ~this.maskData) | (this.regEBX & 0xff);
        break;
    case 0x4:
        this.regESP = (this.regESP & ~this.maskData) | ((this.regEAX >> 8) & 0xff);
        this.regEAX = this.regXX;
        break;
    case 0x5:
        this.regEBP = (this.regEBP & ~this.maskData) | ((this.regECX >> 8) & 0xff);
        this.regECX = this.regXX;
        break;
    case 0x6:
        this.regESI = (this.regESI & ~this.maskData) | ((this.regEDX >> 8) & 0xff);
        this.regEDX = this.regXX;
        break;
    case 0x7:
        this.regEDI = (this.regEDI & ~this.maskData) | ((this.regEBX >> 8) & 0xff);
        this.regEBX = this.regXX;
        break;
    }
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? 3 : 6);
};

/**
 * opMOVZXw()
 *
 * op=0x0F,0xB7 (MOVZX reg,word)
 *
 * @this {CPUx86}
 */
X86.opMOVZXw = function()
{
    this.setDataSize(2);
    this.decodeModRegWord.call(this, X86.fnMOVXw);
    switch((this.bModRM >> 3) & 0x7) {
    case 0x0:
        this.regEAX = (this.regEAX & 0xffff);
        break;
    case 0x1:
        this.regECX = (this.regECX & 0xffff);
        break;
    case 0x2:
        this.regEDX = (this.regEDX & 0xffff);
        break;
    case 0x3:
        this.regEBX = (this.regEBX & 0xffff);
        break;
    case 0x4:
        this.regESP = (this.regESP & 0xffff);
        break;
    case 0x5:
        this.regEBP = (this.regEBP & 0xffff);
        break;
    case 0x6:
        this.regESI = (this.regESI & 0xffff);
        break;
    case 0x7:
        this.regEDI = (this.regEDI & 0xffff);
        break;
    }
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? 3 : 6);
};

/**
 * op=0x0F,0xBA (GRP8 mem/reg) (80386 and up)
 *
 * @this {CPUx86}
 */
X86.opGRP8 = function()
{
    this.decodeModGrpWord.call(this, X86.aOpGrp8, this.getIPByte);
};

/**
 * opBTC()
 *
 * op=0x0F,0xBB (BTC mem/reg,reg)
 *
 * @this {CPUx86}
 */
X86.opBTC = function()
{
    this.decodeModMemWord.call(this, X86.fnBTCMem);
    if (this.regEA !== X86.ADDR_INVALID) this.nStepCycles -= 5;
};

/**
 * opBSF()
 *
 * op=0x0F,0xBC (BSF reg,mem/reg)
 *
 * @this {CPUx86}
 */
X86.opBSF = function()
{
    this.decodeModRegWord.call(this, X86.fnBSF);
};

/**
 * opBSR()
 *
 * op=0x0F,0xBD (BSR reg,mem/reg)
 *
 * @this {CPUx86}
 */
X86.opBSR = function()
{
    this.decodeModRegWord.call(this, X86.fnBSR);
};

/**
 * opMOVSXb()
 *
 * op=0x0F,0xBE (MOVSX reg,byte)
 *
 * @this {CPUx86}
 */
X86.opMOVSXb = function()
{
    this.decodeModRegByte.call(this, X86.fnMOVXb);
    let reg = (this.bModRM >> 3) & 0x7;
    switch(reg) {
    case 0x0:
        this.regEAX = (this.regEAX & ~this.maskData) | ((((this.regEAX & 0xff) << 24) >> 24) & this.maskData);
        break;
    case 0x1:
        this.regECX = (this.regECX & ~this.maskData) | ((((this.regECX & 0xff) << 24) >> 24) & this.maskData);
        break;
    case 0x2:
        this.regEDX = (this.regEDX & ~this.maskData) | ((((this.regEDX & 0xff) << 24) >> 24) & this.maskData);
        break;
    case 0x3:
        this.regEBX = (this.regEBX & ~this.maskData) | ((((this.regEBX & 0xff) << 24) >> 24) & this.maskData);
        break;
    case 0x4:
        this.regESP = (this.regESP & ~this.maskData) | (((this.regEAX << 16) >> 24) & this.maskData);
        this.regEAX = this.regXX;
        break;
    case 0x5:
        this.regEBP = (this.regEBP & ~this.maskData) | (((this.regECX << 16) >> 24) & this.maskData);
        this.regECX = this.regXX;
        break;
    case 0x6:
        this.regESI = (this.regESI & ~this.maskData) | (((this.regEDX << 16) >> 24) & this.maskData);
        this.regEDX = this.regXX;
        break;
    case 0x7:
        this.regEDI = (this.regEDI & ~this.maskData) | (((this.regEBX << 16) >> 24) & this.maskData);
        this.regEBX = this.regXX;
        break;
    }
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? 3 : 6);
};

/**
 * opMOVSXw()
 *
 * op=0x0F,0xBF (MOVSX reg,word)
 *
 * @this {CPUx86}
 */
X86.opMOVSXw = function()
{
    this.setDataSize(2);
    this.decodeModRegWord.call(this, X86.fnMOVXw);
    switch((this.bModRM >> 3) & 0x7) {
    case 0x0:
        this.regEAX = ((this.regEAX << 16) >> 16);
        break;
    case 0x1:
        this.regECX = ((this.regECX << 16) >> 16);
        break;
    case 0x2:
        this.regEDX = ((this.regEDX << 16) >> 16);
        break;
    case 0x3:
        this.regEBX = ((this.regEBX << 16) >> 16);
        break;
    case 0x4:
        this.regESP = ((this.regESP << 16) >> 16);
        break;
    case 0x5:
        this.regEBP = ((this.regEBP << 16) >> 16);
        break;
    case 0x6:
        this.regESI = ((this.regESI << 16) >> 16);
        break;
    case 0x7:
        this.regEDI = ((this.regEDI << 16) >> 16);
        break;
    }
    this.nStepCycles -= (this.regEA === X86.ADDR_INVALID? 3 : 6);
};

X86.aOps0F = new Array(256);

X86.aOps0F[0x00] = X86.opGRP6;
X86.aOps0F[0x01] = X86.opGRP7;
X86.aOps0F[0x02] = X86.opLAR;
X86.aOps0F[0x03] = X86.opLSL;
X86.aOps0F[0x05] = X86.opLOADALL286;
X86.aOps0F[0x06] = X86.opCLTS;

/**
 * On all processors (except the 8086/8088, of course), X86.OPCODE.UD2 (0x0F,0x0B), aka "UD2", is an
 * instruction guaranteed to raise a #UD (Invalid Opcode) exception (INT 0x06) on all post-8086 processors.
 */
X86.aOps0F[0x0B] = X86.opInvalid;

/**
 * The following 0x0F opcodes are of no consequence to us, since they were all introduced post-80386;
 * 0x0F,0xA6 and 0x0F,0xA7 were introduced on some 80486 processors (and then deprecated), while 0x0F,0xB0
 * and 0x0F,0xB1 were introduced on 80586 (aka Pentium) processors.
 *
 *      CMPXCHG r/m8,reg8           ; 0F B0 /r          [PENT]
 *      CMPXCHG r/m16,reg16         ; o16 0F B1 /r      [PENT]
 *      CMPXCHG r/m32,reg32         ; o32 0F B1 /r      [PENT]
 *      CMPXCHG486 r/m8,reg8        ; 0F A6 /r          [486,UNDOC]
 *      CMPXCHG486 r/m16,reg16      ; o16 0F A7 /r      [486,UNDOC]
 *      CMPXCHG486 r/m32,reg32      ; o32 0F A7 /r      [486,UNDOC]
 *
 * So why are we even mentioning them here? Only because some software (eg, Windows 3.00) attempts to execute
 * 0x0F,0xA6, so we need to explicitly mark it as invalid.  TODO: Purely out of curiosity, I would like to
 * eventually learn *why* Windows 3.00 does this; is it hoping to use the CMPXCHG486 opcode, or is it performing
 * a CPU/stepping check to detect/work-around some errata, or....?
 */
X86.aOps0F[0xA6] = X86.opInvalid;

/**
 * When Windows 95 Setup initializes in protected-mode, it sets a DPMI exception handler for UD_FAULT and
 * then attempts to generate that exception with undefined opcode 0x0F,0xFF.  Apparently, whoever wrote that code
 * didn't get the Intel memo regarding the preferred invalid opcode (0x0F,0x0B, aka UD2), or perhaps Intel hadn't
 * written that memo yet -- although if that's the case, then Intel should have followed Microsoft's lead and
 * selected 0x0F,0xFF instead of 0x0F,0x0B.
 *
 * In any case, this means we need to explicitly set the handler for that opcode to opInvalid(), too.
 */
X86.aOps0F[0xFF] = X86.opInvalid;

/**
 * NOTE: Any other opcode slots NOT explicitly initialized above with either a dedicated function OR opInvalid()
 * will be set to opUndefined() when initProcessor() finalizes the opcode tables.  If the processor is an 80386,
 * initProcessor() will also incorporate all the handlers listed below in aOps0F386.
 *
 * A call to opUndefined() implies something serious has occurred that merits our attention (eg, perhaps someone
 * is using an undocumented opcode that we haven't implemented yet), whereas a call to opInvalid() may or may not.
 */

if (I386) {
    X86.aOps0F386 = [];
    X86.aOps0F386[0x05] = X86.opInvalid;        // the 80286 LOADALL opcode (LOADALL286) is invalid on the 80386
    X86.aOps0F386[0x07] = X86.opLOADALL386;
    X86.aOps0F386[0x10] = X86.opMOVmb;          // see the undocumented [UMOV](/docs/x86/ops/UMOV/) instruction
    X86.aOps0F386[0x11] = X86.opMOVmw;          // see the undocumented [UMOV](/docs/x86/ops/UMOV/) instruction
    X86.aOps0F386[0x12] = X86.opMOVrb;          // see the undocumented [UMOV](/docs/x86/ops/UMOV/) instruction
    X86.aOps0F386[0x13] = X86.opMOVrw;          // see the undocumented [UMOV](/docs/x86/ops/UMOV/) instruction
    X86.aOps0F386[0x20] = X86.opMOVrc;
    X86.aOps0F386[0x21] = X86.opMOVrd;
    X86.aOps0F386[0x22] = X86.opMOVcr;
    X86.aOps0F386[0x23] = X86.opMOVdr;
    X86.aOps0F386[0x24] = X86.opMOVrt;
    X86.aOps0F386[0x26] = X86.opMOVtr;
    X86.aOps0F386[0x80] = X86.opJOw;
    X86.aOps0F386[0x81] = X86.opJNOw;
    X86.aOps0F386[0x82] = X86.opJCw;
    X86.aOps0F386[0x83] = X86.opJNCw;
    X86.aOps0F386[0x84] = X86.opJZw;
    X86.aOps0F386[0x85] = X86.opJNZw;
    X86.aOps0F386[0x86] = X86.opJBEw;
    X86.aOps0F386[0x87] = X86.opJNBEw;
    X86.aOps0F386[0x88] = X86.opJSw;
    X86.aOps0F386[0x89] = X86.opJNSw;
    X86.aOps0F386[0x8A] = X86.opJPw;
    X86.aOps0F386[0x8B] = X86.opJNPw;
    X86.aOps0F386[0x8C] = X86.opJLw;
    X86.aOps0F386[0x8D] = X86.opJNLw;
    X86.aOps0F386[0x8E] = X86.opJLEw;
    X86.aOps0F386[0x8F] = X86.opJNLEw;
    X86.aOps0F386[0x90] = X86.opSETO;
    X86.aOps0F386[0x91] = X86.opSETNO;
    X86.aOps0F386[0x92] = X86.opSETC;
    X86.aOps0F386[0x93] = X86.opSETNC;
    X86.aOps0F386[0x94] = X86.opSETZ;
    X86.aOps0F386[0x95] = X86.opSETNZ;
    X86.aOps0F386[0x96] = X86.opSETBE;
    X86.aOps0F386[0x97] = X86.opSETNBE;
    X86.aOps0F386[0x98] = X86.opSETS;
    X86.aOps0F386[0x99] = X86.opSETNS;
    X86.aOps0F386[0x9A] = X86.opSETP;
    X86.aOps0F386[0x9B] = X86.opSETNP;
    X86.aOps0F386[0x9C] = X86.opSETL;
    X86.aOps0F386[0x9D] = X86.opSETNL;
    X86.aOps0F386[0x9E] = X86.opSETLE;
    X86.aOps0F386[0x9F] = X86.opSETNLE;
    X86.aOps0F386[0xA0] = X86.opPUSHFS;
    X86.aOps0F386[0xA1] = X86.opPOPFS;
    X86.aOps0F386[0xA3] = X86.opBT;
    X86.aOps0F386[0xA4] = X86.opSHLDn;
    X86.aOps0F386[0xA5] = X86.opSHLDcl;
    X86.aOps0F386[0xA8] = X86.opPUSHGS;
    X86.aOps0F386[0xA9] = X86.opPOPGS;
    X86.aOps0F386[0xAB] = X86.opBTS;
    X86.aOps0F386[0xAC] = X86.opSHRDn;
    X86.aOps0F386[0xAD] = X86.opSHRDcl;
    X86.aOps0F386[0xAF] = X86.opIMUL;
    X86.aOps0F386[0xB2] = X86.opLSS;
    X86.aOps0F386[0xB3] = X86.opBTR;
    X86.aOps0F386[0xB4] = X86.opLFS;
    X86.aOps0F386[0xB5] = X86.opLGS;
    X86.aOps0F386[0xB6] = X86.opMOVZXb;
    X86.aOps0F386[0xB7] = X86.opMOVZXw;
    X86.aOps0F386[0xBA] = X86.opGRP8;
    X86.aOps0F386[0xBB] = X86.opBTC;
    X86.aOps0F386[0xBC] = X86.opBSF;
    X86.aOps0F386[0xBD] = X86.opBSR;
    X86.aOps0F386[0xBE] = X86.opMOVSXb;
    X86.aOps0F386[0xBF] = X86.opMOVSXw;
}

/**
 * These instruction groups are not as orthogonal as the original 8086/8088 groups (Grp1 through Grp4); some of
 * the instructions in Grp6 and Grp7 only read their dst operand (eg, LLDT), which means the ModRM helper function
 * must insure that setEAWord() is disabled, while others only write their dst operand (eg, SLDT), which means that
 * getEAWord() should be disabled *prior* to calling the ModRM helper function.  This latter case requires that
 * we decode the reg field of the ModRM byte before dispatching.
 */
X86.aOpGrp6Prot = [
    X86.fnSLDT,             X86.fnSTR,              X86.fnLLDT,             X86.fnLTR,              // 0x0F,0x00(reg=0x0-0x3)
    X86.fnVERR,             X86.fnVERW,             X86.fnGRPUndefined,     X86.fnGRPUndefined      // 0x0F,0x00(reg=0x4-0x7)
];

X86.aOpGrp6Real = [
    X86.fnGRPInvalid,       X86.fnGRPInvalid,       X86.fnGRPInvalid,       X86.fnGRPInvalid,       // 0x0F,0x00(reg=0x0-0x3)
    X86.fnGRPInvalid,       X86.fnGRPInvalid,       X86.fnGRPUndefined,     X86.fnGRPUndefined      // 0x0F,0x00(reg=0x4-0x7)
];

/**
 * Unlike Grp6, Grp7 and Grp8 do not require separate real-mode and protected-mode dispatch tables, because
 * all Grp7 and Grp8 instructions are valid in both modes.
 */
X86.aOpGrp7 = [
    X86.fnSGDT,             X86.fnSIDT,             X86.fnLGDT,             X86.fnLIDT,             // 0x0F,0x01(reg=0x0-0x3)
    X86.fnSMSW,             X86.fnGRPUndefined,     X86.fnLMSW,             X86.fnGRPUndefined      // 0x0F,0x01(reg=0x4-0x7)
];

X86.aOpGrp8 = [
    X86.fnGRPUndefined,     X86.fnGRPUndefined,     X86.fnGRPUndefined,     X86.fnGRPUndefined,     // 0x0F,0xBA(reg=0x0-0x3)
    X86.fnBT,               X86.fnBTS,              X86.fnBTR,              X86.fnBTC               // 0x0F,0xBA(reg=0x4-0x7)
];
