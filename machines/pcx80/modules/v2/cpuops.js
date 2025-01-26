/**
 * @fileoverview Implements PCx80 opcode handlers
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import CPUDefX80 from "./cpudef.js";
import MESSAGE from "./message.js";
import { DEBUGGER } from "./defines.js";

/**
 * op=0x00 (NOP)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opNOP = function()
{
    this.nStepCycles -= 4;
};

/**
 * op=0x01 (LXI B,d16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opLXIB = function()
{
    this.setBC(this.getPCWord());
    this.nStepCycles -= 10;
};

/**
 * op=0x02 (STAX B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSTAXB = function()
{
    this.setByte(this.getBC(), this.regA);
    this.nStepCycles -= 7;
};

/**
 * op=0x03 (INX B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opINXB = function()
{
    this.setBC(this.getBC() + 1);
    this.nStepCycles -= 5;
};

/**
 * op=0x04 (INR B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opINRB = function()
{
    this.regB = this.incByte(this.regB);
    this.nStepCycles -= 5;
};

/**
 * op=0x05 (DCR B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDCRB = function()
{
    this.regB = this.decByte(this.regB);
    this.nStepCycles -= 5;
};

/**
 * op=0x06 (MVI B,d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMVIB = function()
{
    this.regB = this.getPCByte();
    this.nStepCycles -= 7;
};

/**
 * op=0x07 (RLC)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRLC = function()
{
    let carry = this.regA << 1;
    this.regA = (carry & 0xff) | (carry >> 8);
    this.updateCF(carry & 0x100);
    this.nStepCycles -= 4;
};

/**
 * op=0x09 (DAD B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDADB = function()
{
    let w;
    this.setHL(w = this.getHL() + this.getBC());
    this.updateCF((w >> 8) & 0x100);
    this.nStepCycles -= 10;
};

/**
 * op=0x0A (LDAX B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opLDAXB = function()
{
    this.regA = this.getByte(this.getBC());
    this.nStepCycles -= 7;
};

/**
 * op=0x0B (DCX B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDCXB = function()
{
    this.setBC(this.getBC() - 1);
    this.nStepCycles -= 5;
};

/**
 * op=0x0C (INR C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opINRC = function()
{
    this.regC = this.incByte(this.regC);
    this.nStepCycles -= 5;
};

/**
 * op=0x0D (DCR C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDCRC = function()
{
    this.regC = this.decByte(this.regC);
    this.nStepCycles -= 5;
};

/**
 * op=0x0E (MVI C,d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMVIC = function()
{
    this.regC = this.getPCByte();
    this.nStepCycles -= 7;
};

/**
 * op=0x0F (RRC)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRRC = function()
{
    let carry = (this.regA << 8) & 0x100;
    this.regA = (carry | this.regA) >> 1;
    this.updateCF(carry);
    this.nStepCycles -= 4;
};

/**
 * op=0x11 (LXI D,d16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opLXID = function()
{
    this.setDE(this.getPCWord());
    this.nStepCycles -= 10;
};

/**
 * op=0x12 (STAX D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSTAXD = function()
{
    this.setByte(this.getDE(), this.regA);
    this.nStepCycles -= 7;
};

/**
 * op=0x13 (INX D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opINXD = function()
{
    this.setDE(this.getDE() + 1);
    this.nStepCycles -= 5;
};

/**
 * op=0x14 (INR D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opINRD = function()
{
    this.regD = this.incByte(this.regD);
    this.nStepCycles -= 5;
};

/**
 * op=0x15 (DCR D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDCRD = function()
{
    this.regD = this.decByte(this.regD);
    this.nStepCycles -= 5;
};

/**
 * op=0x16 (MVI D,d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMVID = function()
{
    this.regD = this.getPCByte();
    this.nStepCycles -= 7;
};

/**
 * op=0x17 (RAL)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRAL = function()
{
    let carry = this.regA << 1;
    this.regA = (carry & 0xff) | this.getCF();
    this.updateCF(carry & 0x100);
    this.nStepCycles -= 4;
};

/**
 * op=0x19 (DAD D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDADD = function()
{
    let w;
    this.setHL(w = this.getHL() + this.getDE());
    this.updateCF((w >> 8) & 0x100);
    this.nStepCycles -= 10;
};

/**
 * op=0x1A (LDAX D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opLDAXD = function()
{
    this.regA = this.getByte(this.getDE());
    this.nStepCycles -= 7;
};

/**
 * op=0x1B (DCX D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDCXD = function()
{
    this.setDE(this.getDE() - 1);
    this.nStepCycles -= 5;
};

/**
 * op=0x1C (INR E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opINRE = function()
{
    this.regE = this.incByte(this.regE);
    this.nStepCycles -= 5;
};

/**
 * op=0x1D (DCR E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDCRE = function()
{
    this.regE = this.decByte(this.regE);
    this.nStepCycles -= 5;
};

/**
 * op=0x1E (MVI E,d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMVIE = function()
{
    this.regE = this.getPCByte();
    this.nStepCycles -= 7;
};

/**
 * op=0x1F (RAR)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRAR = function()
{
    let carry = (this.regA << 8);
    this.regA = ((this.getCF() << 8) | this.regA) >> 1;
    this.updateCF(carry & 0x100);
    this.nStepCycles -= 4;
};

/**
 * op=0x21 (LXI H,d16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opLXIH = function()
{
    this.setHL(this.getPCWord());
    this.nStepCycles -= 10;
};

/**
 * op=0x22 (SHLD a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSHLD = function()
{
    this.setWord(this.getPCWord(), this.getHL());
    this.nStepCycles -= 16;
};

/**
 * op=0x23 (INX H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opINXH = function()
{
    this.setHL(this.getHL() + 1);
    this.nStepCycles -= 5;
};

/**
 * op=0x24 (INR H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opINRH = function()
{
    this.regH = this.incByte(this.regH);
    this.nStepCycles -= 5;
};

/**
 * op=0x25 (DCR H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDCRH = function()
{
    this.regH = this.decByte(this.regH);
    this.nStepCycles -= 5;
};

/**
 * op=0x26 (MVI H,d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMVIH = function()
{
    this.regH = this.getPCByte();
    this.nStepCycles -= 7;
};

/**
 * op=0x27 (DAA)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDAA = function()
{
    let src = 0;
    let CF = this.getCF();
    let AF = this.getAF();
    if (AF || (this.regA & 0x0F) > 9) {
        src |= 0x06;
    }
    if (CF || this.regA >= 0x9A) {
        src |= 0x60;
        CF = CPUDefX80.PS.CF;
    }
    this.regA = this.addByte(src);
    this.updateCF(CF? 0x100 : 0);
    this.nStepCycles -= 4;
};

/**
 * op=0x29 (DAD H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDADH = function()
{
    let w;
    this.setHL(w = this.getHL() + this.getHL());
    this.updateCF((w >> 8) & 0x100);
    this.nStepCycles -= 10;
};

/**
 * op=0x2A (LHLD a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opLHLD = function()
{
    this.setHL(this.getWord(this.getPCWord()));
    this.nStepCycles -= 16;
};

/**
 * op=0x2B (DCX H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDCXH = function()
{
    this.setHL(this.getHL() - 1);
    this.nStepCycles -= 5;
};

/**
 * op=0x2C (INR L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opINRL = function()
{
    this.regL = this.incByte(this.regL);
    this.nStepCycles -= 5;
};

/**
 * op=0x2D (DCR L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDCRL = function()
{
    this.regL = this.decByte(this.regL);
    this.nStepCycles -= 5;
};

/**
 * op=0x2E (MVI L,d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMVIL = function()
{
    this.regL = this.getPCByte();
    this.nStepCycles -= 7;
};

/**
 * op=0x2F (CMA)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCMA = function()
{
    this.regA = ~this.regA & 0xff;
    this.nStepCycles -= 4;
};

/**
 * op=0x31 (LXI SP,d16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opLXISP = function()
{
    this.setSP(this.getPCWord());
    this.nStepCycles -= 10;
};

/**
 * op=0x32 (STA a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSTA = function()
{
    this.setByte(this.getPCWord(), this.regA);
    this.nStepCycles -= 13;
};

/**
 * op=0x33 (INX SP)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opINXSP = function()
{
    this.setSP(this.getSP() + 1);
    this.nStepCycles -= 5;
};

/**
 * op=0x34 (INR M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opINRM = function()
{
    let addr = this.getHL();
    this.setByte(addr, this.incByte(this.getByte(addr)));
    this.nStepCycles -= 10;
};

/**
 * op=0x35 (DCR M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDCRM = function()
{
    let addr = this.getHL();
    this.setByte(addr, this.decByte(this.getByte(addr)));
    this.nStepCycles -= 10;
};

/**
 * op=0x36 (MVI M,d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMVIM = function()
{
    this.setByte(this.getHL(), this.getPCByte());
    this.nStepCycles -= 10;
};

/**
 * op=0x37 (STC)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSTC = function()
{
    this.setCF();
    this.nStepCycles -= 4;
};

/**
 * op=0x39 (DAD SP)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDADSP = function()
{
    let w;
    this.setHL(w = this.getHL() + this.getSP());
    this.updateCF((w >> 8) & 0x100);
    this.nStepCycles -= 10;
};

/**
 * op=0x3A (LDA a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opLDA = function()
{
    this.regA = this.getByte(this.getPCWord());
    this.nStepCycles -= 13;
};

/**
 * op=0x3B (DCX SP)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDCXSP = function()
{
    this.setSP(this.getSP() - 1);
    this.nStepCycles -= 5;
};

/**
 * op=0x3C (INR A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opINRA = function()
{
    this.regA = this.incByte(this.regA);
    this.nStepCycles -= 5;
};

/**
 * op=0x3D (DCR A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDCRA = function()
{
    this.regA = this.decByte(this.regA);
    this.nStepCycles -= 5;
};

/**
 * op=0x3E (MVI A,d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMVIA = function()
{
    this.regA = this.getPCByte();
    this.nStepCycles -= 7;
};

/**
 * op=0x3F (CMC)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCMC = function()
{
    this.updateCF(this.getCF()? 0 : 0x100);
    this.nStepCycles -= 4;
};

/**
 * op=0x40 (MOV B,B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVBB = function()
{
    this.nStepCycles -= 5;
};

/**
 * op=0x41 (MOV B,C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVBC = function()
{
    this.regB = this.regC;
    this.nStepCycles -= 5;
};

/**
 * op=0x42 (MOV B,D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVBD = function()
{
    this.regB = this.regD;
    this.nStepCycles -= 5;
};

/**
 * op=0x43 (MOV B,E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVBE = function()
{
    this.regB = this.regE;
    this.nStepCycles -= 5;
};

/**
 * op=0x44 (MOV B,H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVBH = function()
{
    this.regB = this.regH;
    this.nStepCycles -= 5;
};

/**
 * op=0x45 (MOV B,L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVBL = function()
{
    this.regB = this.regL;
    this.nStepCycles -= 5;
};

/**
 * op=0x46 (MOV B,M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVBM = function()
{
    this.regB = this.getByte(this.getHL());
    this.nStepCycles -= 7;
};

/**
 * op=0x47 (MOV B,A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVBA = function()
{
    this.regB = this.regA;
    this.nStepCycles -= 5;
};

/**
 * op=0x48 (MOV C,B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVCB = function()
{
    this.regC = this.regB;
    this.nStepCycles -= 5;
};

/**
 * op=0x49 (MOV C,C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVCC = function()
{
    this.nStepCycles -= 5;
};

/**
 * op=0x4A (MOV C,D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVCD = function()
{
    this.regC = this.regD;
    this.nStepCycles -= 5;
};

/**
 * op=0x4B (MOV C,E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVCE = function()
{
    this.regC = this.regE;
    this.nStepCycles -= 5;
};

/**
 * op=0x4C (MOV C,H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVCH = function()
{
    this.regC = this.regH;
    this.nStepCycles -= 5;
};

/**
 * op=0x4D (MOV C,L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVCL = function()
{
    this.regC = this.regL;
    this.nStepCycles -= 5;
};

/**
 * op=0x4E (MOV C,M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVCM = function()
{
    this.regC = this.getByte(this.getHL());
    this.nStepCycles -= 7;
};

/**
 * op=0x4F (MOV C,A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVCA = function()
{
    this.regC = this.regA;
    this.nStepCycles -= 5;
};

/**
 * op=0x50 (MOV D,B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVDB = function()
{
    this.regD = this.regB;
    this.nStepCycles -= 5;
};

/**
 * op=0x51 (MOV D,C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVDC = function()
{
    this.regD = this.regC;
    this.nStepCycles -= 5;
};

/**
 * op=0x52 (MOV D,D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVDD = function()
{
    this.nStepCycles -= 5;
};

/**
 * op=0x53 (MOV D,E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVDE = function()
{
    this.regD = this.regE;
    this.nStepCycles -= 5;
};

/**
 * op=0x54 (MOV D,H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVDH = function()
{
    this.regD = this.regH;
    this.nStepCycles -= 5;
};

/**
 * op=0x55 (MOV D,L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVDL = function()
{
    this.regD = this.regL;
    this.nStepCycles -= 5;
};

/**
 * op=0x56 (MOV D,M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVDM = function()
{
    this.regD = this.getByte(this.getHL());
    this.nStepCycles -= 7;
};

/**
 * op=0x57 (MOV D,A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVDA = function()
{
    this.regD = this.regA;
    this.nStepCycles -= 5;
};

/**
 * op=0x58 (MOV E,B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVEB = function()
{
    this.regE = this.regB;
    this.nStepCycles -= 5;
};

/**
 * op=0x59 (MOV E,C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVEC = function()
{
    this.regE = this.regC;
    this.nStepCycles -= 5;
};

/**
 * op=0x5A (MOV E,D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVED = function()
{
    this.regE = this.regD;
    this.nStepCycles -= 5;
};

/**
 * op=0x5B (MOV E,E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVEE = function()
{
    this.nStepCycles -= 5;
};

/**
 * op=0x5C (MOV E,H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVEH = function()
{
    this.regE = this.regH;
    this.nStepCycles -= 5;
};

/**
 * op=0x5D (MOV E,L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVEL = function()
{
    this.regE = this.regL;
    this.nStepCycles -= 5;
};

/**
 * op=0x5E (MOV E,M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVEM = function()
{
    this.regE = this.getByte(this.getHL());
    this.nStepCycles -= 7;
};

/**
 * op=0x5F (MOV E,A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVEA = function()
{
    this.regE = this.regA;
    this.nStepCycles -= 5;
};

/**
 * op=0x60 (MOV H,B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVHB = function()
{
    this.regH = this.regB;
    this.nStepCycles -= 5;
};

/**
 * op=0x61 (MOV H,C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVHC = function()
{
    this.regH = this.regC;
    this.nStepCycles -= 5;
};

/**
 * op=0x62 (MOV H,D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVHD = function()
{
    this.regH = this.regD;
    this.nStepCycles -= 5;
};

/**
 * op=0x63 (MOV H,E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVHE = function()
{
    this.regH = this.regE;
    this.nStepCycles -= 5;
};

/**
 * op=0x64 (MOV H,H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVHH = function()
{
    this.nStepCycles -= 5;
};

/**
 * op=0x65 (MOV H,L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVHL = function()
{
    this.regH = this.regL;
    this.nStepCycles -= 5;
};

/**
 * op=0x66 (MOV H,M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVHM = function()
{
    this.regH = this.getByte(this.getHL());
    this.nStepCycles -= 7;
};

/**
 * op=0x67 (MOV H,A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVHA = function()
{
    this.regH = this.regA;
    this.nStepCycles -= 5;
};

/**
 * op=0x68 (MOV L,B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVLB = function()
{
    this.regL = this.regB;
    this.nStepCycles -= 5;
};

/**
 * op=0x69 (MOV L,C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVLC = function()
{
    this.regL = this.regC;
    this.nStepCycles -= 5;
};

/**
 * op=0x6A (MOV L,D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVLD = function()
{
    this.regL = this.regD;
    this.nStepCycles -= 5;
};

/**
 * op=0x6B (MOV L,E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVLE = function()
{
    this.regL = this.regE;
    this.nStepCycles -= 5;
};

/**
 * op=0x6C (MOV L,H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVLH = function()
{
    this.regL = this.regH;
    this.nStepCycles -= 5;
};

/**
 * op=0x6D (MOV L,L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVLL = function()
{
    this.nStepCycles -= 5;
};

/**
 * op=0x6E (MOV L,M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVLM = function()
{
    this.regL = this.getByte(this.getHL());
    this.nStepCycles -= 7;
};

/**
 * op=0x6F (MOV L,A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVLA = function()
{
    this.regL = this.regA;
    this.nStepCycles -= 5;
};

/**
 * op=0x70 (MOV M,B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVMB = function()
{
    this.setByte(this.getHL(), this.regB);
    this.nStepCycles -= 7;
};

/**
 * op=0x71 (MOV M,C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVMC = function()
{
    this.setByte(this.getHL(), this.regC);
    this.nStepCycles -= 7;
};

/**
 * op=0x72 (MOV M,D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVMD = function()
{
    this.setByte(this.getHL(), this.regD);
    this.nStepCycles -= 7;
};

/**
 * op=0x73 (MOV M,E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVME = function()
{
    this.setByte(this.getHL(), this.regE);
    this.nStepCycles -= 7;
};

/**
 * op=0x74 (MOV M,H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVMH = function()
{
    this.setByte(this.getHL(), this.regH);
    this.nStepCycles -= 7;
};

/**
 * op=0x75 (MOV M,L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVML = function()
{
    this.setByte(this.getHL(), this.regL);
    this.nStepCycles -= 7;
};

/**
 * op=0x76 (HLT)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opHLT = function()
{
    let addr = this.getPC() - 1;

    /*
     * If any HLT check functions are installed, call them, and if any of them return true, then
     * immediately stop HLT processing.
     */
    if (this.afnHalt.length) {
        for (let i = 0; i < this.afnHalt.length; i++) {
            if (this.afnHalt[i](addr)) return;
        }
    }

    this.nStepCycles -= 7;

    /*
     * The CPU is never REALLY halted by a HLT instruction; instead, we call requestHALT(), which
     * signals to stepCPU() that it should end the current burst AND that it should not execute any
     * more instructions until checkINTR() indicates a hardware interrupt has been requested.
     */
    this.requestHALT();

    /*
     * If a Debugger is present and the HALT message category is enabled, then we REALLY halt the CPU,
     * on the theory that whoever's using the Debugger would like to see HLTs.
     */
    if (DEBUGGER && this.dbg && this.messageEnabled(MESSAGE.HALT)) {
        this.setPC(addr);               // this is purely for the Debugger's benefit, to show the HLT
        this.dbg.stopCPU();
        return;
    }

    /*
     * We also REALLY halt the machine if interrupts have been disabled, since that means it's dead
     * in the water (we have no NMI generation mechanism at the moment).
     */
    if (!this.getIF()) {
        if (DEBUGGER && this.dbg) this.setPC(addr);
        this.stopCPU();
    }
};

/**
 * op=0x77 (MOV M,A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVMA = function()
{
    this.setByte(this.getHL(), this.regA);
    this.nStepCycles -= 7;
};

/**
 * op=0x78 (MOV A,B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVAB = function()
{
    this.regA = this.regB;
    this.nStepCycles -= 5;
};

/**
 * op=0x79 (MOV A,C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVAC = function()
{
    this.regA = this.regC;
    this.nStepCycles -= 5;
};

/**
 * op=0x7A (MOV A,D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVAD = function()
{
    this.regA = this.regD;
    this.nStepCycles -= 5;
};

/**
 * op=0x7B (MOV A,E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVAE = function()
{
    this.regA = this.regE;
    this.nStepCycles -= 5;
};

/**
 * op=0x7C (MOV A,H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVAH = function()
{
    this.regA = this.regH;
    this.nStepCycles -= 5;
};

/**
 * op=0x7D (MOV A,L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVAL = function()
{
    this.regA = this.regL;
    this.nStepCycles -= 5;
};

/**
 * op=0x7E (MOV A,M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVAM = function()
{
    this.regA = this.getByte(this.getHL());
    this.nStepCycles -= 7;
};

/**
 * op=0x7F (MOV A,A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opMOVAA = function()
{
    this.nStepCycles -= 5;
};

/**
 * op=0x80 (ADD B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADDB = function()
{
    this.regA = this.addByte(this.regB);
    this.nStepCycles -= 4;
};

/**
 * op=0x81 (ADD C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADDC = function()
{
    this.regA = this.addByte(this.regC);
    this.nStepCycles -= 4;
};

/**
 * op=0x82 (ADD D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADDD = function()
{
    this.regA = this.addByte(this.regD);
    this.nStepCycles -= 4;
};

/**
 * op=0x83 (ADD E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADDE = function()
{
    this.regA = this.addByte(this.regE);
    this.nStepCycles -= 4;
};

/**
 * op=0x84 (ADD H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADDH = function()
{
    this.regA = this.addByte(this.regH);
    this.nStepCycles -= 4;
};

/**
 * op=0x85 (ADD L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADDL = function()
{
    this.regA = this.addByte(this.regL);
    this.nStepCycles -= 4;
};

/**
 * op=0x86 (ADD M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADDM = function()
{
    this.regA = this.addByte(this.getByte(this.getHL()));
    this.nStepCycles -= 7;
};

/**
 * op=0x87 (ADD A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADDA = function()
{
    this.regA = this.addByte(this.regA);
    this.nStepCycles -= 4;
};

/**
 * op=0x88 (ADC B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADCB = function()
{
    this.regA = this.addByteCarry(this.regB);
    this.nStepCycles -= 4;
};

/**
 * op=0x89 (ADC C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADCC = function()
{
    this.regA = this.addByteCarry(this.regC);
    this.nStepCycles -= 4;
};

/**
 * op=0x8A (ADC D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADCD = function()
{
    this.regA = this.addByteCarry(this.regD);
    this.nStepCycles -= 4;
};

/**
 * op=0x8B (ADC E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADCE = function()
{
    this.regA = this.addByteCarry(this.regE);
    this.nStepCycles -= 4;
};

/**
 * op=0x8C (ADC H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADCH = function()
{
    this.regA = this.addByteCarry(this.regH);
    this.nStepCycles -= 4;
};

/**
 * op=0x8D (ADC L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADCL = function()
{
    this.regA = this.addByteCarry(this.regL);
    this.nStepCycles -= 4;
};

/**
 * op=0x8E (ADC M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADCM = function()
{
    this.regA = this.addByteCarry(this.getByte(this.getHL()));
    this.nStepCycles -= 7;
};

/**
 * op=0x8F (ADC A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADCA = function()
{
    this.regA = this.addByteCarry(this.regA);
    this.nStepCycles -= 4;
};

/**
 * op=0x90 (SUB B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSUBB = function()
{
    this.regA = this.subByte(this.regB);
    this.nStepCycles -= 4;
};

/**
 * op=0x91 (SUB C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSUBC = function()
{
    this.regA = this.subByte(this.regC);
    this.nStepCycles -= 4;
};

/**
 * op=0x92 (SUB D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSUBD = function()
{
    this.regA = this.subByte(this.regD);
    this.nStepCycles -= 4;
};

/**
 * op=0x93 (SUB E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSUBE = function()
{
    this.regA = this.subByte(this.regE);
    this.nStepCycles -= 4;
};

/**
 * op=0x94 (SUB H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSUBH = function()
{
    this.regA = this.subByte(this.regH);
    this.nStepCycles -= 4;
};

/**
 * op=0x95 (SUB L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSUBL = function()
{
    this.regA = this.subByte(this.regL);
    this.nStepCycles -= 4;
};

/**
 * op=0x96 (SUB M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSUBM = function()
{
    this.regA = this.subByte(this.getByte(this.getHL()));
    this.nStepCycles -= 7;
};

/**
 * op=0x97 (SUB A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSUBA = function()
{
    this.regA = this.subByte(this.regA);
    this.nStepCycles -= 4;
};

/**
 * op=0x98 (SBB B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSBBB = function()
{
    this.regA = this.subByteBorrow(this.regB);
    this.nStepCycles -= 4;
};

/**
 * op=0x99 (SBB C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSBBC = function()
{
    this.regA = this.subByteBorrow(this.regC);
    this.nStepCycles -= 4;
};

/**
 * op=0x9A (SBB D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSBBD = function()
{
    this.regA = this.subByteBorrow(this.regD);
    this.nStepCycles -= 4;
};

/**
 * op=0x9B (SBB E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSBBE = function()
{
    this.regA = this.subByteBorrow(this.regE);
    this.nStepCycles -= 4;
};

/**
 * op=0x9C (SBB H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSBBH = function()
{
    this.regA = this.subByteBorrow(this.regH);
    this.nStepCycles -= 4;
};

/**
 * op=0x9D (SBB L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSBBL = function()
{
    this.regA = this.subByteBorrow(this.regL);
    this.nStepCycles -= 4;
};

/**
 * op=0x9E (SBB M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSBBM = function()
{
    this.regA = this.subByteBorrow(this.getByte(this.getHL()));
    this.nStepCycles -= 7;
};

/**
 * op=0x9F (SBB A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSBBA = function()
{
    this.regA = this.subByteBorrow(this.regA);
    this.nStepCycles -= 4;
};

/**
 * op=0xA0 (ANA B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opANAB = function()
{
    this.regA = this.andByte(this.regB);
    this.nStepCycles -= 4;
};

/**
 * op=0xA1 (ANA C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opANAC = function()
{
    this.regA = this.andByte(this.regC);
    this.nStepCycles -= 4;
};

/**
 * op=0xA2 (ANA D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opANAD = function()
{
    this.regA = this.andByte(this.regD);
    this.nStepCycles -= 4;
};

/**
 * op=0xA3 (ANA E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opANAE = function()
{
    this.regA = this.andByte(this.regE);
    this.nStepCycles -= 4;
};

/**
 * op=0xA4 (ANA H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opANAH = function()
{
    this.regA = this.andByte(this.regH);
    this.nStepCycles -= 4;
};

/**
 * op=0xA5 (ANA L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opANAL = function()
{
    this.regA = this.andByte(this.regL);
    this.nStepCycles -= 4;
};

/**
 * op=0xA6 (ANA M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opANAM = function()
{
    this.regA = this.andByte(this.getByte(this.getHL()));
    this.nStepCycles -= 7;
};

/**
 * op=0xA7 (ANA A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opANAA = function()
{
    this.regA = this.andByte(this.regA);
    this.nStepCycles -= 4;
};

/**
 * op=0xA8 (XRA B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opXRAB = function()
{
    this.regA = this.xorByte(this.regB);
    this.nStepCycles -= 4;
};

/**
 * op=0xA9 (XRA C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opXRAC = function()
{
    this.regA = this.xorByte(this.regC);
    this.nStepCycles -= 4;
};

/**
 * op=0xAA (XRA D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opXRAD = function()
{
    this.regA = this.xorByte(this.regD);
    this.nStepCycles -= 4;
};

/**
 * op=0xAB (XRA E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opXRAE = function()
{
    this.regA = this.xorByte(this.regE);
    this.nStepCycles -= 4;
};

/**
 * op=0xAC (XRA H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opXRAH = function()
{
    this.regA = this.xorByte(this.regH);
    this.nStepCycles -= 4;
};

/**
 * op=0xAD (XRA L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opXRAL = function()
{
    this.regA = this.xorByte(this.regL);
    this.nStepCycles -= 4;
};

/**
 * op=0xAE (XRA M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opXRAM = function()
{
    this.regA = this.xorByte(this.getByte(this.getHL()));
    this.nStepCycles -= 7;
};

/**
 * op=0xAF (XRA A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opXRAA = function()
{
    this.regA = this.xorByte(this.regA);
    this.nStepCycles -= 4;
};

/**
 * op=0xB0 (ORA B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opORAB = function()
{
    this.regA = this.orByte(this.regB);
    this.nStepCycles -= 4;
};

/**
 * op=0xB1 (ORA C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opORAC = function()
{
    this.regA = this.orByte(this.regC);
    this.nStepCycles -= 4;
};

/**
 * op=0xB2 (ORA D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opORAD = function()
{
    this.regA = this.orByte(this.regD);
    this.nStepCycles -= 4;
};

/**
 * op=0xB3 (ORA E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opORAE = function()
{
    this.regA = this.orByte(this.regE);
    this.nStepCycles -= 4;
};

/**
 * op=0xB4 (ORA H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opORAH = function()
{
    this.regA = this.orByte(this.regH);
    this.nStepCycles -= 4;
};

/**
 * op=0xB5 (ORA L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opORAL = function()
{
    this.regA = this.orByte(this.regL);
    this.nStepCycles -= 4;
};

/**
 * op=0xB6 (ORA M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opORAM = function()
{
    this.regA = this.orByte(this.getByte(this.getHL()));
    this.nStepCycles -= 7;
};

/**
 * op=0xB7 (ORA A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opORAA = function()
{
    this.regA = this.orByte(this.regA);
    this.nStepCycles -= 4;
};

/**
 * op=0xB8 (CMP B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCMPB = function()
{
    this.subByte(this.regB);
    this.nStepCycles -= 4;
};

/**
 * op=0xB9 (CMP C)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCMPC = function()
{
    this.subByte(this.regC);
    this.nStepCycles -= 4;
};

/**
 * op=0xBA (CMP D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCMPD = function()
{
    this.subByte(this.regD);
    this.nStepCycles -= 4;
};

/**
 * op=0xBB (CMP E)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCMPE = function()
{
    this.subByte(this.regE);
    this.nStepCycles -= 4;
};

/**
 * op=0xBC (CMP H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCMPH = function()
{
    this.subByte(this.regH);
    this.nStepCycles -= 4;
};

/**
 * op=0xBD (CMP L)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCMPL = function()
{
    this.subByte(this.regL);
    this.nStepCycles -= 4;
};

/**
 * op=0xBE (CMP M)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCMPM = function()
{
    this.subByte(this.getByte(this.getHL()));
    this.nStepCycles -= 7;
};

/**
 * op=0xBF (CMP A)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCMPA = function()
{
    this.subByte(this.regA);
    this.nStepCycles -= 4;
};

/**
 * op=0xC0 (RNZ)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRNZ = function()
{
    if (!this.getZF()) {
        this.setPC(this.popWord());
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 5;
};

/**
 * op=0xC1 (POP B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opPOPB = function()
{
    this.setBC(this.popWord());
    this.nStepCycles -= 10;
};

/**
 * op=0xC2 (JNZ a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opJNZ = function()
{
    let w = this.getPCWord();
    if (!this.getZF()) this.setPC(w);
    this.nStepCycles -= 10;
};

/**
 * op=0xC3 (JMP a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opJMP = function()
{
    this.setPC(this.getPCWord());
    this.nStepCycles -= 10;
};

/**
 * op=0xC4 (CNZ a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCNZ = function()
{
    let w = this.getPCWord();
    if (!this.getZF()) {
        this.pushWord(this.getPC());
        this.setPC(w);
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 11;
};

/**
 * op=0xC5 (PUSH B)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opPUSHB = function()
{
    this.pushWord(this.getBC());
    this.nStepCycles -= 11;
};

/**
 * op=0xC6 (ADI d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opADI = function()
{
    this.regA = this.addByte(this.getPCByte());
    this.nStepCycles -= 7;
};

/**
 * op=0xC7 (RST 0)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRST0 = function()
{
    this.pushWord(this.getPC());
    this.setPC(0);
    this.nStepCycles -= 11;
};

/**
 * op=0xC8 (RZ)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRZ = function()
{
    if (this.getZF()) {
        this.setPC(this.popWord());
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 5;
};

/**
 * op=0xC9 (RET)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRET = function()
{
    this.setPC(this.popWord());
    this.nStepCycles -= 10;
};

/**
 * op=0xCA (JZ a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opJZ = function()
{
    let w = this.getPCWord();
    if (this.getZF()) this.setPC(w);
    this.nStepCycles -= 10;
};

/**
 * op=0xCC (CZ a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCZ = function()
{
    let w = this.getPCWord();
    if (this.getZF()) {
        this.pushWord(this.getPC());
        this.setPC(w);
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 11;
};

/**
 * op=0xCD (CALL a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCALL = function()
{
    let w = this.getPCWord();
    this.pushWord(this.getPC());
    this.setPC(w);
    this.nStepCycles -= 17;
};

/**
 * op=0xCE (ACI d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opACI = function()
{
    this.regA = this.addByteCarry(this.getPCByte());
    this.nStepCycles -= 7;
};

/**
 * op=0xCF (RST 1)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRST1 = function()
{
    this.pushWord(this.getPC());
    this.setPC(0x08);
    this.nStepCycles -= 11;
};

/**
 * op=0xD0 (RNC)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRNC = function()
{
    if (!this.getCF()) {
        this.setPC(this.popWord());
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 5;
};

/**
 * op=0xD1 (POP D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opPOPD = function()
{
    this.setDE(this.popWord());
    this.nStepCycles -= 10;
};

/**
 * op=0xD2 (JNC a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opJNC = function()
{
    let w = this.getPCWord();
    if (!this.getCF()) this.setPC(w);
    this.nStepCycles -= 10;
};

/**
 * op=0xD3 (OUT d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opOUT = function()
{
    let port = this.getPCByte();
    this.bus.checkPortOutputNotify(port, 1, this.regA, this.offPC(-2));
    this.nStepCycles -= 10;
};

/**
 * op=0xD4 (CNC a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCNC = function()
{
    let w = this.getPCWord();
    if (!this.getCF()) {
        this.pushWord(this.getPC());
        this.setPC(w);
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 11;
};

/**
 * op=0xD5 (PUSH D)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opPUSHD = function()
{
    this.pushWord(this.getDE());
    this.nStepCycles -= 11;
};

/**
 * op=0xD6 (SUI d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSUI = function()
{
    this.regA = this.subByte(this.getPCByte());
    this.nStepCycles -= 7;
};

/**
 * op=0xD7 (RST 2)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRST2 = function()
{
    this.pushWord(this.getPC());
    this.setPC(0x10);
    this.nStepCycles -= 11;
};

/**
 * op=0xD8 (RC)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRC = function()
{
    if (this.getCF()) {
        this.setPC(this.popWord());
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 5;
};

/**
 * op=0xDA (JC a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opJC = function()
{
    let w = this.getPCWord();
    if (this.getCF()) this.setPC(w);
    this.nStepCycles -= 10;
};

/**
 * op=0xDB (IN d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opIN = function()
{
    let port = this.getPCByte();
    this.regA = this.bus.checkPortInputNotify(port, 1, this.offPC(-2)) & 0xff;
    this.nStepCycles -= 10;
};

/**
 * op=0xDC (CC a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCC = function()
{
    let w = this.getPCWord();
    if (this.getCF()) {
        this.pushWord(this.getPC());
        this.setPC(w);
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 11;
};

/**
 * op=0xDE (SBI d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSBI = function()
{
    this.regA = this.subByteBorrow(this.getPCByte());
    this.nStepCycles -= 7;
};

/**
 * op=0xDF (RST 3)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRST3 = function()
{
    this.pushWord(this.getPC());
    this.setPC(0x18);
    this.nStepCycles -= 11;
};

/**
 * op=0xE0 (RPO)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRPO = function()
{
    if (!this.getPF()) {
        this.setPC(this.popWord());
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 5;
};

/**
 * op=0xE1 (POP H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opPOPH = function()
{
    this.setHL(this.popWord());
    this.nStepCycles -= 10;
};

/**
 * op=0xE2 (JPO a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opJPO = function()
{
    let w = this.getPCWord();
    if (!this.getPF()) this.setPC(w);
    this.nStepCycles -= 10;
};

/**
 * op=0xE3 (XTHL)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opXTHL = function()
{
    let w = this.popWord();
    this.pushWord(this.getHL());
    this.setHL(w);
    this.nStepCycles -= 18;
};

/**
 * op=0xE4 (CPO a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCPO = function()
{
    let w = this.getPCWord();
    if (!this.getPF()) {
        this.pushWord(this.getPC());
        this.setPC(w);
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 11;
};

/**
 * op=0xE5 (PUSH H)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opPUSHH = function()
{
    this.pushWord(this.getHL());
    this.nStepCycles -= 11;
};

/**
 * op=0xE6 (ANI d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opANI = function()
{
    this.regA = this.andByte(this.getPCByte());
    this.nStepCycles -= 7;
};

/**
 * op=0xE7 (RST 4)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRST4 = function()
{
    this.pushWord(this.getPC());
    this.setPC(0x20);
    this.nStepCycles -= 11;
};

/**
 * op=0xE8 (RPE)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRPE = function()
{
    if (this.getPF()) {
        this.setPC(this.popWord());
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 5;
};

/**
 * op=0xE9 (PCHL)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opPCHL = function()
{
    this.setPC(this.getHL());
    this.nStepCycles -= 5;
};

/**
 * op=0xEA (JPE a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opJPE = function()
{
    let w = this.getPCWord();
    if (this.getPF()) this.setPC(w);
    this.nStepCycles -= 10;
};

/**
 * op=0xEB (XCHG)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opXCHG = function()
{
    let w = this.getHL();
    this.setHL(this.getDE());
    this.setDE(w);
    this.nStepCycles -= 5;
};

/**
 * op=0xEC (CPE a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCPE = function()
{
    let w = this.getPCWord();
    if (this.getPF()) {
        this.pushWord(this.getPC());
        this.setPC(w);
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 11;
};

/**
 * op=0xEE (XRI d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opXRI = function()
{
    this.regA = this.xorByte(this.getPCByte());
    this.nStepCycles -= 7;
};

/**
 * op=0xEF (RST 5)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRST5 = function()
{
    this.pushWord(this.getPC());
    this.setPC(0x28);
    this.nStepCycles -= 11;
};

/**
 * op=0xF0 (RP)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRP = function()
{
    if (!this.getSF()) {
        this.setPC(this.popWord());
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 5;
};

/**
 * op=0xF1 (POP PSW)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opPOPSW = function()
{
    this.setPSW(this.popWord());
    this.nStepCycles -= 10;
};

/**
 * op=0xF2 (JP a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opJP = function()
{
    let w = this.getPCWord();
    if (!this.getSF()) this.setPC(w);
    this.nStepCycles -= 10;
};

/**
 * op=0xF3 (DI)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opDI = function()
{
    this.clearIF();
    this.nStepCycles -= 4;
};

/**
 * op=0xF4 (CP a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCP = function()
{
    let w = this.getPCWord();
    if (!this.getSF()) {
        this.pushWord(this.getPC());
        this.setPC(w);
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 11;
};

/**
 * op=0xF5 (PUSH PSW)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opPUPSW = function()
{
    this.pushWord(this.getPSW());
    this.nStepCycles -= 11;
};

/**
 * op=0xF6 (ORI d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opORI = function()
{
    this.regA = this.orByte(this.getPCByte());
    this.nStepCycles -= 7;
};

/**
 * op=0xF7 (RST 6)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRST6 = function()
{
    this.pushWord(this.getPC());
    this.setPC(0x30);
    this.nStepCycles -= 11;
};

/**
 * op=0xF8 (RM)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRM = function()
{
    if (this.getSF()) {
        this.setPC(this.popWord());
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 5;
};

/**
 * op=0xF9 (SPHL)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opSPHL = function()
{
    this.setSP(this.getHL());
    this.nStepCycles -= 5;
};

/**
 * op=0xFA (JM a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opJM = function()
{
    let w = this.getPCWord();
    if (this.getSF()) this.setPC(w);
    this.nStepCycles -= 10;
};

/**
 * op=0xFB (EI)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opEI = function()
{
    this.setIF();
    this.nStepCycles -= 4;
    this.checkINTR();
};

/**
 * op=0xFC (CM a16)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCM = function()
{
    let w = this.getPCWord();
    if (this.getSF()) {
        this.pushWord(this.getPC());
        this.setPC(w);
        this.nStepCycles -= 6;
    }
    this.nStepCycles -= 11;
};

/**
 * op=0xFE (CPI d8)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opCPI = function()
{
    this.subByte(this.getPCByte());
    this.nStepCycles -= 7;
};

/**
 * op=0xFF (RST 7)
 *
 * @this {CPUStateX80}
 */
CPUDefX80.opRST7 = function()
{
    this.pushWord(this.getPC());
    this.setPC(0x38);
    this.nStepCycles -= 11;
};

/*
 * This 256-entry array of opcode functions is at the heart of the CPU engine: stepCPU(n).
 *
 * It might be worth trying a switch() statement instead, to see how the performance compares,
 * but I suspect that would vary quite a bit across JavaScript engines; for now, I'm putting my
 * money on array lookup.
 */
CPUDefX80.aOpsX80 = [
    /* 0x00-0x03 */ CPUDefX80.opNOP,   CPUDefX80.opLXIB,  CPUDefX80.opSTAXB, CPUDefX80.opINXB,
    /* 0x04-0x07 */ CPUDefX80.opINRB,  CPUDefX80.opDCRB,  CPUDefX80.opMVIB,  CPUDefX80.opRLC,
    /* 0x08-0x0B */ CPUDefX80.opNOP,   CPUDefX80.opDADB,  CPUDefX80.opLDAXB, CPUDefX80.opDCXB,
    /* 0x0C-0x0F */ CPUDefX80.opINRC,  CPUDefX80.opDCRC,  CPUDefX80.opMVIC,  CPUDefX80.opRRC,
    /* 0x10-0x13 */ CPUDefX80.opNOP,   CPUDefX80.opLXID,  CPUDefX80.opSTAXD, CPUDefX80.opINXD,
    /* 0x14-0x17 */ CPUDefX80.opINRD,  CPUDefX80.opDCRD,  CPUDefX80.opMVID,  CPUDefX80.opRAL,
    /* 0x18-0x1B */ CPUDefX80.opNOP,   CPUDefX80.opDADD,  CPUDefX80.opLDAXD, CPUDefX80.opDCXD,
    /* 0x1C-0x1F */ CPUDefX80.opINRE,  CPUDefX80.opDCRE,  CPUDefX80.opMVIE,  CPUDefX80.opRAR,
    /* 0x20-0x23 */ CPUDefX80.opNOP,   CPUDefX80.opLXIH,  CPUDefX80.opSHLD,  CPUDefX80.opINXH,
    /* 0x24-0x27 */ CPUDefX80.opINRH,  CPUDefX80.opDCRH,  CPUDefX80.opMVIH,  CPUDefX80.opDAA,
    /* 0x28-0x2B */ CPUDefX80.opNOP,   CPUDefX80.opDADH,  CPUDefX80.opLHLD,  CPUDefX80.opDCXH,
    /* 0x2C-0x2F */ CPUDefX80.opINRL,  CPUDefX80.opDCRL,  CPUDefX80.opMVIL,  CPUDefX80.opCMA,
    /* 0x30-0x33 */ CPUDefX80.opNOP,   CPUDefX80.opLXISP, CPUDefX80.opSTA,   CPUDefX80.opINXSP,
    /* 0x34-0x37 */ CPUDefX80.opINRM,  CPUDefX80.opDCRM,  CPUDefX80.opMVIM,  CPUDefX80.opSTC,
    /* 0x38-0x3B */ CPUDefX80.opNOP,   CPUDefX80.opDADSP, CPUDefX80.opLDA,   CPUDefX80.opDCXSP,
    /* 0x3C-0x3F */ CPUDefX80.opINRA,  CPUDefX80.opDCRA,  CPUDefX80.opMVIA,  CPUDefX80.opCMC,
    /* 0x40-0x43 */ CPUDefX80.opMOVBB, CPUDefX80.opMOVBC, CPUDefX80.opMOVBD, CPUDefX80.opMOVBE,
    /* 0x44-0x47 */ CPUDefX80.opMOVBH, CPUDefX80.opMOVBL, CPUDefX80.opMOVBM, CPUDefX80.opMOVBA,
    /* 0x48-0x4B */ CPUDefX80.opMOVCB, CPUDefX80.opMOVCC, CPUDefX80.opMOVCD, CPUDefX80.opMOVCE,
    /* 0x4C-0x4F */ CPUDefX80.opMOVCH, CPUDefX80.opMOVCL, CPUDefX80.opMOVCM, CPUDefX80.opMOVCA,
    /* 0x50-0x53 */ CPUDefX80.opMOVDB, CPUDefX80.opMOVDC, CPUDefX80.opMOVDD, CPUDefX80.opMOVDE,
    /* 0x54-0x57 */ CPUDefX80.opMOVDH, CPUDefX80.opMOVDL, CPUDefX80.opMOVDM, CPUDefX80.opMOVDA,
    /* 0x58-0x5B */ CPUDefX80.opMOVEB, CPUDefX80.opMOVEC, CPUDefX80.opMOVED, CPUDefX80.opMOVEE,
    /* 0x5C-0x5F */ CPUDefX80.opMOVEH, CPUDefX80.opMOVEL, CPUDefX80.opMOVEM, CPUDefX80.opMOVEA,
    /* 0x60-0x63 */ CPUDefX80.opMOVHB, CPUDefX80.opMOVHC, CPUDefX80.opMOVHD, CPUDefX80.opMOVHE,
    /* 0x64-0x67 */ CPUDefX80.opMOVHH, CPUDefX80.opMOVHL, CPUDefX80.opMOVHM, CPUDefX80.opMOVHA,
    /* 0x68-0x6B */ CPUDefX80.opMOVLB, CPUDefX80.opMOVLC, CPUDefX80.opMOVLD, CPUDefX80.opMOVLE,
    /* 0x6C-0x6F */ CPUDefX80.opMOVLH, CPUDefX80.opMOVLL, CPUDefX80.opMOVLM, CPUDefX80.opMOVLA,
    /* 0x70-0x73 */ CPUDefX80.opMOVMB, CPUDefX80.opMOVMC, CPUDefX80.opMOVMD, CPUDefX80.opMOVME,
    /* 0x74-0x77 */ CPUDefX80.opMOVMH, CPUDefX80.opMOVML, CPUDefX80.opHLT,   CPUDefX80.opMOVMA,
    /* 0x78-0x7B */ CPUDefX80.opMOVAB, CPUDefX80.opMOVAC, CPUDefX80.opMOVAD, CPUDefX80.opMOVAE,
    /* 0x7C-0x7F */ CPUDefX80.opMOVAH, CPUDefX80.opMOVAL, CPUDefX80.opMOVAM, CPUDefX80.opMOVAA,
    /* 0x80-0x83 */ CPUDefX80.opADDB,  CPUDefX80.opADDC,  CPUDefX80.opADDD,  CPUDefX80.opADDE,
    /* 0x84-0x87 */ CPUDefX80.opADDH,  CPUDefX80.opADDL,  CPUDefX80.opADDM,  CPUDefX80.opADDA,
    /* 0x88-0x8B */ CPUDefX80.opADCB,  CPUDefX80.opADCC,  CPUDefX80.opADCD,  CPUDefX80.opADCE,
    /* 0x8C-0x8F */ CPUDefX80.opADCH,  CPUDefX80.opADCL,  CPUDefX80.opADCM,  CPUDefX80.opADCA,
    /* 0x90-0x93 */ CPUDefX80.opSUBB,  CPUDefX80.opSUBC,  CPUDefX80.opSUBD,  CPUDefX80.opSUBE,
    /* 0x94-0x97 */ CPUDefX80.opSUBH,  CPUDefX80.opSUBL,  CPUDefX80.opSUBM,  CPUDefX80.opSUBA,
    /* 0x98-0x9B */ CPUDefX80.opSBBB,  CPUDefX80.opSBBC,  CPUDefX80.opSBBD,  CPUDefX80.opSBBE,
    /* 0x9C-0x9F */ CPUDefX80.opSBBH,  CPUDefX80.opSBBL,  CPUDefX80.opSBBM,  CPUDefX80.opSBBA,
    /* 0xA0-0xA3 */ CPUDefX80.opANAB,  CPUDefX80.opANAC,  CPUDefX80.opANAD,  CPUDefX80.opANAE,
    /* 0xA4-0xA7 */ CPUDefX80.opANAH,  CPUDefX80.opANAL,  CPUDefX80.opANAM,  CPUDefX80.opANAA,
    /* 0xA8-0xAB */ CPUDefX80.opXRAB,  CPUDefX80.opXRAC,  CPUDefX80.opXRAD,  CPUDefX80.opXRAE,
    /* 0xAC-0xAF */ CPUDefX80.opXRAH,  CPUDefX80.opXRAL,  CPUDefX80.opXRAM,  CPUDefX80.opXRAA,
    /* 0xB0-0xB3 */ CPUDefX80.opORAB,  CPUDefX80.opORAC,  CPUDefX80.opORAD,  CPUDefX80.opORAE,
    /* 0xB4-0xB7 */ CPUDefX80.opORAH,  CPUDefX80.opORAL,  CPUDefX80.opORAM,  CPUDefX80.opORAA,
    /* 0xB8-0xBB */ CPUDefX80.opCMPB,  CPUDefX80.opCMPC,  CPUDefX80.opCMPD,  CPUDefX80.opCMPE,
    /* 0xBC-0xBF */ CPUDefX80.opCMPH,  CPUDefX80.opCMPL,  CPUDefX80.opCMPM,  CPUDefX80.opCMPA,
    /* 0xC0-0xC3 */ CPUDefX80.opRNZ,   CPUDefX80.opPOPB,  CPUDefX80.opJNZ,   CPUDefX80.opJMP,
    /* 0xC4-0xC7 */ CPUDefX80.opCNZ,   CPUDefX80.opPUSHB, CPUDefX80.opADI,   CPUDefX80.opRST0,
    /* 0xC8-0xCB */ CPUDefX80.opRZ,    CPUDefX80.opRET,   CPUDefX80.opJZ,    CPUDefX80.opJMP,
    /* 0xCC-0xCF */ CPUDefX80.opCZ,    CPUDefX80.opCALL,  CPUDefX80.opACI,   CPUDefX80.opRST1,
    /* 0xD0-0xD3 */ CPUDefX80.opRNC,   CPUDefX80.opPOPD,  CPUDefX80.opJNC,   CPUDefX80.opOUT,
    /* 0xD4-0xD7 */ CPUDefX80.opCNC,   CPUDefX80.opPUSHD, CPUDefX80.opSUI,   CPUDefX80.opRST2,
    /* 0xD8-0xDB */ CPUDefX80.opRC,    CPUDefX80.opRET,   CPUDefX80.opJC,    CPUDefX80.opIN,
    /* 0xDC-0xDF */ CPUDefX80.opCC,    CPUDefX80.opCALL,  CPUDefX80.opSBI,   CPUDefX80.opRST3,
    /* 0xE0-0xE3 */ CPUDefX80.opRPO,   CPUDefX80.opPOPH,  CPUDefX80.opJPO,   CPUDefX80.opXTHL,
    /* 0xE4-0xE7 */ CPUDefX80.opCPO,   CPUDefX80.opPUSHH, CPUDefX80.opANI,   CPUDefX80.opRST4,
    /* 0xE8-0xEB */ CPUDefX80.opRPE,   CPUDefX80.opPCHL,  CPUDefX80.opJPE,   CPUDefX80.opXCHG,
    /* 0xEC-0xEF */ CPUDefX80.opCPE,   CPUDefX80.opCALL,  CPUDefX80.opXRI,   CPUDefX80.opRST5,
    /* 0xF0-0xF3 */ CPUDefX80.opRP,    CPUDefX80.opPOPSW, CPUDefX80.opJP,    CPUDefX80.opDI,
    /* 0xF4-0xF7 */ CPUDefX80.opCP,    CPUDefX80.opPUPSW, CPUDefX80.opORI,   CPUDefX80.opRST6,
    /* 0xF8-0xFB */ CPUDefX80.opRM,    CPUDefX80.opSPHL,  CPUDefX80.opJM,    CPUDefX80.opEI,
    /* 0xFC-0xFF */ CPUDefX80.opCM,    CPUDefX80.opCALL,  CPUDefX80.opCPI,   CPUDefX80.opRST7
];
