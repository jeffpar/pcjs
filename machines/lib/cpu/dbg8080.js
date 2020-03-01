/**
 * @fileoverview Debugger for the 8080 CPU
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2020 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

"use strict";

/**
 * Debugger for the 8080 CPU
 *
 * @class {Dbg8080}
 * @unrestricted
 */
class Dbg8080 extends Debugger {
    /**
     * Dbg8080(idMachine, idDevice, config)
     *
     * @this {Dbg8080}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);
        this.styles = [Dbg8080.STYLE_8080, Dbg8080.STYLE_8086];
        this.style = Dbg8080.STYLE_8086;
        this.maxOpcodeLength = 3;
    }

    /**
     * unassemble(address, opcodes, annotation)
     *
     * Overrides Debugger's default unassemble() function with one that understands 8080 instructions.
     *
     * @this {Dbg8080}
     * @param {Address} address (advanced by the number of processed opcodes)
     * @param {Array.<number>} opcodes (each processed opcode is shifted out, reducing the size of the array)
     * @param {string} [annotation] (optional string to append to the final result)
     * @returns {string}
     */
    unassemble(address, opcodes, annotation)
    {
        let sAddr = this.dumpAddress(address), sBytes = "";
        let sLabel = this.getSymbolName(address, Debugger.SYMBOL.LABEL);
        let sComment = this.getSymbolName(address, Debugger.SYMBOL.COMMENT);

        /**
         * getNextByte()
         *
         * @returns {number}
         */
        let getNextByte = () => {
            let byte = opcodes.shift();
            sBytes += this.toBase(byte, 16, 8, "");
            this.addAddress(address, 1);
            return byte;
        };

        /**
         * getNextWord()
         *
         * @returns {number}
         */
        let getNextWord = () => getNextByte() | (getNextByte() << 8);

        /**
         * getImmOperand(type)
         *
         * @param {number} type
         * @returns {string} operand
         */
        let getImmOperand = (type) => {
            let sOperand = ' ';
            let typeSize = type & Dbg8080.TYPE_SIZE;
            switch (typeSize) {
            case Dbg8080.TYPE_BYTE:
                sOperand = this.toBase(getNextByte(), 16, 8, "");
                break;
            case Dbg8080.TYPE_SBYTE:
                sOperand = this.toBase((getNextWord() << 24) >> 24, 16, 16, "");
                break;
            case Dbg8080.TYPE_WORD:
                sOperand = this.toBase(getNextWord(), 16, 16, "");
                break;
            default:
                return "imm(" + this.toBase(type, 16, 16, "") + ')';
            }
            if (this.style == Dbg8080.STYLE_8086 && (type & Dbg8080.TYPE_MEM)) {
                sOperand = '[' + sOperand + ']';
            } else if (!(type & Dbg8080.TYPE_REG)) {
                sOperand = (this.style == Dbg8080.STYLE_8080? '$' : "0x") + sOperand;
            }
            return sOperand;
        };

        /**
         * getRegOperand(iReg, type)
         *
         * @param {number} iReg
         * @param {number} type
         * @returns {string} operand
         */
        let getRegOperand = (iReg, type) => {
            /*
             * Although this breaks with 8080 assembler conventions, I'm going to experiment with some different
             * mnemonics; specifically, "[HL]" instead of "M".  This is also more in keeping with how getImmOperand()
             * displays memory references (ie, by enclosing them in brackets).
             */
            let sOperand = Dbg8080.REGS[iReg];
            if (this.style == Dbg8080.STYLE_8086 && (type & Dbg8080.TYPE_MEM)) {
                if (iReg == Dbg8080.REG_M) {
                    sOperand = "HL";
                }
                sOperand = '[' + sOperand + ']';
            }
            return sOperand;
        };

        let opcode = getNextByte();

        let asOpcodes = this.style != Dbg8080.STYLE_8086? Dbg8080.INS_NAMES : Dbg8080.INS_NAMES_8086;
        let aOpDesc = Dbg8080.aaOpDescs[opcode];
        let opNum = aOpDesc[0];

        let sOperands = "";
        let sOpcode = asOpcodes[opNum];
        let cOperands = aOpDesc.length - 1;
        let typeSizeDefault = Dbg8080.TYPE_NONE, type;

        for (let iOperand = 1; iOperand <= cOperands; iOperand++) {

            let sOperand = "";

            type = aOpDesc[iOperand];
            if (type === undefined) continue;
            if ((type & Dbg8080.TYPE_OPT) && this.style == Dbg8080.STYLE_8080) continue;

            let typeMode = type & Dbg8080.TYPE_MODE;
            if (!typeMode) continue;

            let typeSize = type & Dbg8080.TYPE_SIZE;
            if (!typeSize) {
                type |= typeSizeDefault;
            } else {
                typeSizeDefault = typeSize;
            }

            let typeOther = type & Dbg8080.TYPE_OTHER;
            if (!typeOther) {
                type |= (iOperand == 1? Dbg8080.TYPE_OUT : Dbg8080.TYPE_IN);
            }

            if (typeMode & Dbg8080.TYPE_IMM) {
                sOperand = getImmOperand(type);
            }
            else if (typeMode & Dbg8080.TYPE_REG) {
                sOperand = getRegOperand((type & Dbg8080.TYPE_IREG) >> 8, type);
            }
            else if (typeMode & Dbg8080.TYPE_INT) {
                sOperand = ((opcode >> 3) & 0x7).toString();
            }

            if (!sOperand || !sOperand.length) {
                sOperands = "INVALID";
                break;
            }
            if (sOperands.length > 0) sOperands += ',';
            sOperands += (sOperand || "???");
        }

        let result = this.sprintf("%s %-7s%s %-7s %s", sAddr, sBytes, (type & Dbg8080.TYPE_UNDOC)? '*' : ' ', sOpcode, sOperands);
        if (!annotation) {
            if (sComment) annotation = sComment;
        } else {
            if (sComment) annotation += " " + sComment;
        }
        if (annotation) result = this.sprintf("%-32s; %s", result, annotation);
        if (sLabel) result = sLabel + ":\n" + result;
        return result + "\n";
    }
}

Dbg8080.STYLE_8080 = "8080";
Dbg8080.STYLE_8086 = "8086";

/*
 * CPU instruction ordinals
 */
Dbg8080.INS = {
    NONE:   0,  ACI:    1,  ADC:    2,  ADD:    3,  ADI:    4,  ANA:    5,  ANI:    6,  CALL:   7,
    CC:     8,  CM:     9,  CNC:   10,  CNZ:   11,  CP:    12,  CPE:   13,  CPO:   14,  CZ:    15,
    CMA:   16,  CMC:   17,  CMP:   18,  CPI:   19,  DAA:   20,  DAD:   21,  DCR:   22,  DCX:   23,
    DI:    24,  EI:    25,  HLT:   26,  IN:    27,  INR:   28,  INX:   29,  JMP:   30,  JC:    31,
    JM:    32,  JNC:   33,  JNZ:   34,  JP:    35,  JPE:   36,  JPO:   37,  JZ:    38,  LDA:   39,
    LDAX:  40,  LHLD:  41,  LXI:   42,  MOV:   43,  MVI:   44,  NOP:   45,  ORA:   46,  ORI:   47,
    OUT:   48,  PCHL:  49,  POP:   50,  PUSH:  51,  RAL:   52,  RAR:   53,  RET:   54,  RC:    55,
    RM:    56,  RNC:   57,  RNZ:   58,  RP:    59,  RPE:   60,  RPO:   61,  RZ:    62,  RLC:   63,
    RRC:   64,  RST:   65,  SBB:   66,  SBI:   67,  SHLD:  68,  SPHL:  69,  STA:   70,  STAX:  71,
    STC:   72,  SUB:   73,  SUI:   74,  XCHG:  75,  XRA:   76,  XRI:   77,  XTHL:  78
};

/*
 * CPU instruction names (mnemonics), indexed by CPU instruction ordinal (above)
 *
 * If you change the default style, using the "s" command (eg, "s 8086"), then the 8086 table
 * will be used instead.  TODO: Add a "s z80" command for Z80-style mnemonics.
 */
Dbg8080.INS_NAMES = [
    "NONE",     "ACI",      "ADC",      "ADD",      "ADI",      "ANA",      "ANI",      "CALL",
    "CC",       "CM",       "CNC",      "CNZ",      "CP",       "CPE",      "CPO",      "CZ",
    "CMA",      "CMC",      "CMP",      "CPI",      "DAA",      "DAD",      "DCR",      "DCX",
    "DI",       "EI",       "HLT",      "IN",       "INR",      "INX",      "JMP",      "JC",
    "JM",       "JNC",      "JNZ",      "JP",       "JPE",      "JPO",      "JZ",       "LDA",
    "LDAX",     "LHLD",     "LXI",      "MOV",      "MVI",      "NOP",      "ORA",      "ORI",
    "OUT",      "PCHL",     "POP",      "PUSH",     "RAL",      "RAR",      "RET",      "RC",
    "RM",       "RNC",      "RNZ",      "RP",       "RPE",      "RPO",      "RZ",       "RLC",
    "RRC",      "RST",      "SBB",      "SBI",      "SHLD",     "SPHL",     "STA",      "STAX",
    "STC",      "SUB",      "SUI",      "XCHG",     "XRA",      "XRI",      "XTHL"
];

Dbg8080.INS_NAMES_8086 = [
    "NONE",     "ADC",      "ADC",      "ADD",      "ADD",      "AND",      "AND",      "CALL",
    "CALLC",    "CALLS",    "CALLNC",   "CALLNZ",   "CALLNS",   "CALLP",    "CALLNP",   "CALLZ",
    "NOT",      "CMC",      "CMP",      "CMP",      "DAA",      "ADD",      "DEC",      "DEC",
    "CLI",      "STI",      "HLT",      "IN",       "INC",      "INC",      "JMP",      "JC",
    "JS",       "JNC",      "JNZ",      "JNS",      "JP",       "JNP",      "JZ",       "MOV",
    "MOV",      "MOV",      "MOV",      "MOV",      "MOV",      "NOP",      "OR",       "OR",
    "OUT",      "JMP",      "POP",      "PUSH",     "RCL",      "RCR",      "RET",      "RETC",
    "RETS",     "RETNC",    "RETNZ",    "RETNS",    "RETP",     "RETNP",    "RETZ",     "ROL",
    "ROR",      "RST",      "SBB",      "SBB",      "MOV",      "MOV",      "MOV",      "MOV",
    "STC",      "SUB",      "SUB",      "XCHG",     "XOR",      "XOR",      "XCHG"
];

Dbg8080.REG_B      = 0x00;
Dbg8080.REG_C      = 0x01;
Dbg8080.REG_D      = 0x02;
Dbg8080.REG_E      = 0x03;
Dbg8080.REG_H      = 0x04;
Dbg8080.REG_L      = 0x05;
Dbg8080.REG_M      = 0x06;
Dbg8080.REG_A      = 0x07;
Dbg8080.REG_BC     = 0x08;
Dbg8080.REG_DE     = 0x09;
Dbg8080.REG_HL     = 0x0A;
Dbg8080.REG_SP     = 0x0B;
Dbg8080.REG_PC     = 0x0C;
Dbg8080.REG_PS     = 0x0D;
Dbg8080.REG_PSW    = 0x0E;      // aka AF if Z80-style mnemonics

/*
 * NOTE: "PS" is the complete processor status, which includes bits like the Interrupt flag (IF),
 * which is NOT the same as "PSW", which is the low 8 bits of "PS" combined with "A" in the high byte.
 */
Dbg8080.REGS = [
    "B", "C", "D", "E", "H", "L", "M", "A", "BC", "DE", "HL", "SP", "PC", "PS", "PSW"
];

/*
 * Operand type descriptor masks and definitions
 */
Dbg8080.TYPE_SIZE  = 0x000F;    // size field
Dbg8080.TYPE_MODE  = 0x00F0;    // mode field
Dbg8080.TYPE_IREG  = 0x0F00;    // implied register field
Dbg8080.TYPE_OTHER = 0xF000;    // "other" field

/*
 * TYPE_SIZE values
 */
Dbg8080.TYPE_NONE  = 0x0000;    // (all other TYPE fields ignored)
Dbg8080.TYPE_BYTE  = 0x0001;    // byte, regardless of operand size
Dbg8080.TYPE_SBYTE = 0x0002;    // byte sign-extended to word
Dbg8080.TYPE_WORD  = 0x0003;    // word (16-bit value)

/*
 * TYPE_MODE values
 */
Dbg8080.TYPE_REG   = 0x0010;    // register
Dbg8080.TYPE_IMM   = 0x0020;    // immediate data
Dbg8080.TYPE_ADDR  = 0x0033;    // immediate (word) address
Dbg8080.TYPE_MEM   = 0x0040;    // memory reference
Dbg8080.TYPE_INT   = 0x0080;    // interrupt level encoded in instruction (bits 3-5)

/*
 * TYPE_IREG values, based on the REG_* constants.
 *
 * Note that TYPE_M isn't really a register, just an alternative form of TYPE_HL | TYPE_MEM.
 */
Dbg8080.TYPE_A     = (Dbg8080.REG_A  << 8 | Dbg8080.TYPE_REG | Dbg8080.TYPE_BYTE);
Dbg8080.TYPE_B     = (Dbg8080.REG_B  << 8 | Dbg8080.TYPE_REG | Dbg8080.TYPE_BYTE);
Dbg8080.TYPE_C     = (Dbg8080.REG_C  << 8 | Dbg8080.TYPE_REG | Dbg8080.TYPE_BYTE);
Dbg8080.TYPE_D     = (Dbg8080.REG_D  << 8 | Dbg8080.TYPE_REG | Dbg8080.TYPE_BYTE);
Dbg8080.TYPE_E     = (Dbg8080.REG_E  << 8 | Dbg8080.TYPE_REG | Dbg8080.TYPE_BYTE);
Dbg8080.TYPE_H     = (Dbg8080.REG_H  << 8 | Dbg8080.TYPE_REG | Dbg8080.TYPE_BYTE);
Dbg8080.TYPE_L     = (Dbg8080.REG_L  << 8 | Dbg8080.TYPE_REG | Dbg8080.TYPE_BYTE);
Dbg8080.TYPE_M     = (Dbg8080.REG_M  << 8 | Dbg8080.TYPE_REG | Dbg8080.TYPE_BYTE | Dbg8080.TYPE_MEM);
Dbg8080.TYPE_BC    = (Dbg8080.REG_BC << 8 | Dbg8080.TYPE_REG | Dbg8080.TYPE_WORD);
Dbg8080.TYPE_DE    = (Dbg8080.REG_DE << 8 | Dbg8080.TYPE_REG | Dbg8080.TYPE_WORD);
Dbg8080.TYPE_HL    = (Dbg8080.REG_HL << 8 | Dbg8080.TYPE_REG | Dbg8080.TYPE_WORD);
Dbg8080.TYPE_SP    = (Dbg8080.REG_SP << 8 | Dbg8080.TYPE_REG | Dbg8080.TYPE_WORD);
Dbg8080.TYPE_PC    = (Dbg8080.REG_PC << 8 | Dbg8080.TYPE_REG | Dbg8080.TYPE_WORD);
Dbg8080.TYPE_PSW   = (Dbg8080.REG_PSW<< 8 | Dbg8080.TYPE_REG | Dbg8080.TYPE_WORD);

/*
 * TYPE_OTHER bit definitions
 */
Dbg8080.TYPE_IN    = 0x1000;    // operand is input
Dbg8080.TYPE_OUT   = 0x2000;    // operand is output
Dbg8080.TYPE_BOTH  = (Dbg8080.TYPE_IN | Dbg8080.TYPE_OUT);
Dbg8080.TYPE_OPT   = 0x4000;    // optional operand (ie, normally omitted in 8080 assembly language)
Dbg8080.TYPE_UNDOC = 0x8000;    // opcode is an undocumented alternative encoding

/*
 * The aaOpDescs array is indexed by opcode, and each element is a sub-array (aOpDesc) that describes
 * the corresponding opcode. The sub-elements are as follows:
 *
 *      [0]: {number} of the opcode name (see INS.*)
 *      [1]: {number} containing the destination operand descriptor bit(s), if any
 *      [2]: {number} containing the source operand descriptor bit(s), if any
 *      [3]: {number} containing the occasional third operand descriptor bit(s), if any
 *
 * These sub-elements are all optional. If [0] is not present, the opcode is undefined; if [1] is not
 * present (or contains zero), the opcode has no (or only implied) operands; if [2] is not present, the
 * opcode has only a single operand.  And so on.
 *
 * Additional default rules:
 *
 *      1) If no TYPE_OTHER bits are specified for the first (destination) operand, TYPE_OUT is assumed;
 *      2) If no TYPE_OTHER bits are specified for the second (source) operand, TYPE_IN is assumed;
 *      3) If no size is specified for the second operand, the size is assumed to match the first operand.
 */
Dbg8080.aaOpDescs = [
/* 0x00 */  [Dbg8080.INS.NOP],
/* 0x01 */  [Dbg8080.INS.LXI,   Dbg8080.TYPE_BC,    Dbg8080.TYPE_IMM],
/* 0x02 */  [Dbg8080.INS.STAX,  Dbg8080.TYPE_BC   | Dbg8080.TYPE_MEM, Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT],
/* 0x03 */  [Dbg8080.INS.INX,   Dbg8080.TYPE_BC],
/* 0x04 */  [Dbg8080.INS.INR,   Dbg8080.TYPE_B],
/* 0x05 */  [Dbg8080.INS.DCR,   Dbg8080.TYPE_B],
/* 0x06 */  [Dbg8080.INS.MVI,   Dbg8080.TYPE_B,     Dbg8080.TYPE_IMM],
/* 0x07 */  [Dbg8080.INS.RLC],
/* 0x08 */  [Dbg8080.INS.NOP,   Dbg8080.TYPE_UNDOC],
/* 0x09 */  [Dbg8080.INS.DAD,   Dbg8080.TYPE_HL   | Dbg8080.TYPE_OPT, Dbg8080.TYPE_BC],
/* 0x0A */  [Dbg8080.INS.LDAX,  Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_BC   | Dbg8080.TYPE_MEM],
/* 0x0B */  [Dbg8080.INS.DCX,   Dbg8080.TYPE_BC],
/* 0x0C */  [Dbg8080.INS.INR,   Dbg8080.TYPE_C],
/* 0x0D */  [Dbg8080.INS.DCR,   Dbg8080.TYPE_C],
/* 0x0E */  [Dbg8080.INS.MVI,   Dbg8080.TYPE_C,     Dbg8080.TYPE_IMM],
/* 0x0F */  [Dbg8080.INS.RRC],
/* 0x10 */  [Dbg8080.INS.NOP,   Dbg8080.TYPE_UNDOC],
/* 0x11 */  [Dbg8080.INS.LXI,   Dbg8080.TYPE_DE,    Dbg8080.TYPE_IMM],
/* 0x12 */  [Dbg8080.INS.STAX,  Dbg8080.TYPE_DE   | Dbg8080.TYPE_MEM, Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT],
/* 0x13 */  [Dbg8080.INS.INX,   Dbg8080.TYPE_DE],
/* 0x14 */  [Dbg8080.INS.INR,   Dbg8080.TYPE_D],
/* 0x15 */  [Dbg8080.INS.DCR,   Dbg8080.TYPE_D],
/* 0x16 */  [Dbg8080.INS.MVI,   Dbg8080.TYPE_D,     Dbg8080.TYPE_IMM],
/* 0x17 */  [Dbg8080.INS.RAL],
/* 0x18 */  [Dbg8080.INS.NOP,   Dbg8080.TYPE_UNDOC],
/* 0x19 */  [Dbg8080.INS.DAD,   Dbg8080.TYPE_HL   | Dbg8080.TYPE_OPT, Dbg8080.TYPE_DE],
/* 0x1A */  [Dbg8080.INS.LDAX,  Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_DE   | Dbg8080.TYPE_MEM],
/* 0x1B */  [Dbg8080.INS.DCX,   Dbg8080.TYPE_DE],
/* 0x1C */  [Dbg8080.INS.INR,   Dbg8080.TYPE_E],
/* 0x1D */  [Dbg8080.INS.DCR,   Dbg8080.TYPE_E],
/* 0x1E */  [Dbg8080.INS.MVI,   Dbg8080.TYPE_E,     Dbg8080.TYPE_IMM],
/* 0x1F */  [Dbg8080.INS.RAR],
/* 0x20 */  [Dbg8080.INS.NOP,   Dbg8080.TYPE_UNDOC],
/* 0x21 */  [Dbg8080.INS.LXI,   Dbg8080.TYPE_HL,    Dbg8080.TYPE_IMM],
/* 0x22 */  [Dbg8080.INS.SHLD,  Dbg8080.TYPE_ADDR | Dbg8080.TYPE_MEM, Dbg8080.TYPE_HL   | Dbg8080.TYPE_OPT],
/* 0x23 */  [Dbg8080.INS.INX,   Dbg8080.TYPE_HL],
/* 0x24 */  [Dbg8080.INS.INR,   Dbg8080.TYPE_H],
/* 0x25 */  [Dbg8080.INS.DCR,   Dbg8080.TYPE_H],
/* 0x26 */  [Dbg8080.INS.MVI,   Dbg8080.TYPE_H,     Dbg8080.TYPE_IMM],
/* 0x27 */  [Dbg8080.INS.DAA],
/* 0x28 */  [Dbg8080.INS.NOP,   Dbg8080.TYPE_UNDOC],
/* 0x29 */  [Dbg8080.INS.DAD,   Dbg8080.TYPE_HL   | Dbg8080.TYPE_OPT, Dbg8080.TYPE_HL],
/* 0x2A */  [Dbg8080.INS.LHLD,  Dbg8080.TYPE_HL   | Dbg8080.TYPE_OPT, Dbg8080.TYPE_ADDR | Dbg8080.TYPE_MEM],
/* 0x2B */  [Dbg8080.INS.DCX,   Dbg8080.TYPE_HL],
/* 0x2C */  [Dbg8080.INS.INR,   Dbg8080.TYPE_L],
/* 0x2D */  [Dbg8080.INS.DCR,   Dbg8080.TYPE_L],
/* 0x2E */  [Dbg8080.INS.MVI,   Dbg8080.TYPE_L,     Dbg8080.TYPE_IMM],
/* 0x2F */  [Dbg8080.INS.CMA,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT],
/* 0x30 */  [Dbg8080.INS.NOP,   Dbg8080.TYPE_UNDOC],
/* 0x31 */  [Dbg8080.INS.LXI,   Dbg8080.TYPE_SP,    Dbg8080.TYPE_IMM],
/* 0x32 */  [Dbg8080.INS.STA,   Dbg8080.TYPE_ADDR | Dbg8080.TYPE_MEM, Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT],
/* 0x33 */  [Dbg8080.INS.INX,   Dbg8080.TYPE_SP],
/* 0x34 */  [Dbg8080.INS.INR,   Dbg8080.TYPE_M],
/* 0x35 */  [Dbg8080.INS.DCR,   Dbg8080.TYPE_M],
/* 0x36 */  [Dbg8080.INS.MVI,   Dbg8080.TYPE_M,     Dbg8080.TYPE_IMM],
/* 0x37 */  [Dbg8080.INS.STC],
/* 0x38 */  [Dbg8080.INS.NOP,   Dbg8080.TYPE_UNDOC],
/* 0x39 */  [Dbg8080.INS.DAD,   Dbg8080.TYPE_HL   | Dbg8080.TYPE_OPT, Dbg8080.TYPE_SP],
/* 0x3A */  [Dbg8080.INS.LDA,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_ADDR | Dbg8080.TYPE_MEM],
/* 0x3B */  [Dbg8080.INS.DCX,   Dbg8080.TYPE_SP],
/* 0x3C */  [Dbg8080.INS.INR,   Dbg8080.TYPE_A],
/* 0x3D */  [Dbg8080.INS.DCR,   Dbg8080.TYPE_A],
/* 0x3E */  [Dbg8080.INS.MVI,   Dbg8080.TYPE_A,     Dbg8080.TYPE_IMM],
/* 0x3F */  [Dbg8080.INS.CMC],
/* 0x40 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_B,     Dbg8080.TYPE_B],
/* 0x41 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_B,     Dbg8080.TYPE_C],
/* 0x42 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_B,     Dbg8080.TYPE_D],
/* 0x43 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_B,     Dbg8080.TYPE_E],
/* 0x44 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_B,     Dbg8080.TYPE_H],
/* 0x45 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_B,     Dbg8080.TYPE_L],
/* 0x46 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_B,     Dbg8080.TYPE_M],
/* 0x47 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_B,     Dbg8080.TYPE_A],
/* 0x48 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_C,     Dbg8080.TYPE_B],
/* 0x49 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_C,     Dbg8080.TYPE_C],
/* 0x4A */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_C,     Dbg8080.TYPE_D],
/* 0x4B */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_C,     Dbg8080.TYPE_E],
/* 0x4C */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_C,     Dbg8080.TYPE_H],
/* 0x4D */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_C,     Dbg8080.TYPE_L],
/* 0x4E */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_C,     Dbg8080.TYPE_M],
/* 0x4F */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_C,     Dbg8080.TYPE_A],
/* 0x50 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_D,     Dbg8080.TYPE_B],
/* 0x51 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_D,     Dbg8080.TYPE_C],
/* 0x52 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_D,     Dbg8080.TYPE_D],
/* 0x53 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_D,     Dbg8080.TYPE_E],
/* 0x54 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_D,     Dbg8080.TYPE_H],
/* 0x55 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_D,     Dbg8080.TYPE_L],
/* 0x56 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_D,     Dbg8080.TYPE_M],
/* 0x57 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_D,     Dbg8080.TYPE_A],
/* 0x58 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_E,     Dbg8080.TYPE_B],
/* 0x59 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_E,     Dbg8080.TYPE_C],
/* 0x5A */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_E,     Dbg8080.TYPE_D],
/* 0x5B */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_E,     Dbg8080.TYPE_E],
/* 0x5C */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_E,     Dbg8080.TYPE_H],
/* 0x5D */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_E,     Dbg8080.TYPE_L],
/* 0x5E */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_E,     Dbg8080.TYPE_M],
/* 0x5F */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_E,     Dbg8080.TYPE_A],
/* 0x60 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_H,     Dbg8080.TYPE_B],
/* 0x61 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_H,     Dbg8080.TYPE_C],
/* 0x62 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_H,     Dbg8080.TYPE_D],
/* 0x63 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_H,     Dbg8080.TYPE_E],
/* 0x64 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_H,     Dbg8080.TYPE_H],
/* 0x65 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_H,     Dbg8080.TYPE_L],
/* 0x66 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_H,     Dbg8080.TYPE_M],
/* 0x67 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_H,     Dbg8080.TYPE_A],
/* 0x68 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_L,     Dbg8080.TYPE_B],
/* 0x69 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_L,     Dbg8080.TYPE_C],
/* 0x6A */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_L,     Dbg8080.TYPE_D],
/* 0x6B */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_L,     Dbg8080.TYPE_E],
/* 0x6C */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_L,     Dbg8080.TYPE_H],
/* 0x6D */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_L,     Dbg8080.TYPE_L],
/* 0x6E */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_L,     Dbg8080.TYPE_M],
/* 0x6F */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_L,     Dbg8080.TYPE_A],
/* 0x70 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_M,     Dbg8080.TYPE_B],
/* 0x71 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_M,     Dbg8080.TYPE_C],
/* 0x72 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_M,     Dbg8080.TYPE_D],
/* 0x73 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_M,     Dbg8080.TYPE_E],
/* 0x74 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_M,     Dbg8080.TYPE_H],
/* 0x75 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_M,     Dbg8080.TYPE_L],
/* 0x76 */  [Dbg8080.INS.HLT],
/* 0x77 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_M,     Dbg8080.TYPE_A],
/* 0x78 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_A,     Dbg8080.TYPE_B],
/* 0x79 */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_A,     Dbg8080.TYPE_C],
/* 0x7A */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_A,     Dbg8080.TYPE_D],
/* 0x7B */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_A,     Dbg8080.TYPE_E],
/* 0x7C */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_A,     Dbg8080.TYPE_H],
/* 0x7D */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_A,     Dbg8080.TYPE_L],
/* 0x7E */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_A,     Dbg8080.TYPE_M],
/* 0x7F */  [Dbg8080.INS.MOV,   Dbg8080.TYPE_A,     Dbg8080.TYPE_A],
/* 0x80 */  [Dbg8080.INS.ADD,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_B],
/* 0x81 */  [Dbg8080.INS.ADD,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_C],
/* 0x82 */  [Dbg8080.INS.ADD,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_D],
/* 0x83 */  [Dbg8080.INS.ADD,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_E],
/* 0x84 */  [Dbg8080.INS.ADD,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_H],
/* 0x85 */  [Dbg8080.INS.ADD,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_L],
/* 0x86 */  [Dbg8080.INS.ADD,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_M],
/* 0x87 */  [Dbg8080.INS.ADD,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_A],
/* 0x88 */  [Dbg8080.INS.ADC,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_B],
/* 0x89 */  [Dbg8080.INS.ADC,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_C],
/* 0x8A */  [Dbg8080.INS.ADC,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_D],
/* 0x8B */  [Dbg8080.INS.ADC,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_E],
/* 0x8C */  [Dbg8080.INS.ADC,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_H],
/* 0x8D */  [Dbg8080.INS.ADC,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_L],
/* 0x8E */  [Dbg8080.INS.ADC,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_M],
/* 0x8F */  [Dbg8080.INS.ADC,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_A],
/* 0x90 */  [Dbg8080.INS.SUB,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_B],
/* 0x91 */  [Dbg8080.INS.SUB,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_C],
/* 0x92 */  [Dbg8080.INS.SUB,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_D],
/* 0x93 */  [Dbg8080.INS.SUB,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_E],
/* 0x94 */  [Dbg8080.INS.SUB,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_H],
/* 0x95 */  [Dbg8080.INS.SUB,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_L],
/* 0x96 */  [Dbg8080.INS.SUB,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_M],
/* 0x97 */  [Dbg8080.INS.SUB,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_A],
/* 0x98 */  [Dbg8080.INS.SBB,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_B],
/* 0x99 */  [Dbg8080.INS.SBB,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_C],
/* 0x9A */  [Dbg8080.INS.SBB,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_D],
/* 0x9B */  [Dbg8080.INS.SBB,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_E],
/* 0x9C */  [Dbg8080.INS.SBB,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_H],
/* 0x9D */  [Dbg8080.INS.SBB,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_L],
/* 0x9E */  [Dbg8080.INS.SBB,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_M],
/* 0x9F */  [Dbg8080.INS.SBB,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_A],
/* 0xA0 */  [Dbg8080.INS.ANA,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_B],
/* 0xA1 */  [Dbg8080.INS.ANA,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_C],
/* 0xA2 */  [Dbg8080.INS.ANA,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_D],
/* 0xA3 */  [Dbg8080.INS.ANA,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_E],
/* 0xA4 */  [Dbg8080.INS.ANA,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_H],
/* 0xA5 */  [Dbg8080.INS.ANA,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_L],
/* 0xA6 */  [Dbg8080.INS.ANA,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_M],
/* 0xA7 */  [Dbg8080.INS.ANA,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_A],
/* 0xA8 */  [Dbg8080.INS.XRA,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_B],
/* 0xA9 */  [Dbg8080.INS.XRA,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_C],
/* 0xAA */  [Dbg8080.INS.XRA,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_D],
/* 0xAB */  [Dbg8080.INS.XRA,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_E],
/* 0xAC */  [Dbg8080.INS.XRA,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_H],
/* 0xAD */  [Dbg8080.INS.XRA,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_L],
/* 0xAE */  [Dbg8080.INS.XRA,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_M],
/* 0xAF */  [Dbg8080.INS.XRA,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_A],
/* 0xB0 */  [Dbg8080.INS.ORA,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_B],
/* 0xB1 */  [Dbg8080.INS.ORA,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_C],
/* 0xB2 */  [Dbg8080.INS.ORA,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_D],
/* 0xB3 */  [Dbg8080.INS.ORA,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_E],
/* 0xB4 */  [Dbg8080.INS.ORA,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_H],
/* 0xB5 */  [Dbg8080.INS.ORA,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_L],
/* 0xB6 */  [Dbg8080.INS.ORA,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_M],
/* 0xB7 */  [Dbg8080.INS.ORA,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_A],
/* 0xB8 */  [Dbg8080.INS.CMP,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_B],
/* 0xB9 */  [Dbg8080.INS.CMP,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_C],
/* 0xBA */  [Dbg8080.INS.CMP,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_D],
/* 0xBB */  [Dbg8080.INS.CMP,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_E],
/* 0xBC */  [Dbg8080.INS.CMP,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_H],
/* 0xBD */  [Dbg8080.INS.CMP,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_L],
/* 0xBE */  [Dbg8080.INS.CMP,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_M],
/* 0xBF */  [Dbg8080.INS.CMP,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_A],
/* 0xC0 */  [Dbg8080.INS.RNZ],
/* 0xC1 */  [Dbg8080.INS.POP,   Dbg8080.TYPE_BC],
/* 0xC2 */  [Dbg8080.INS.JNZ,   Dbg8080.TYPE_ADDR],
/* 0xC3 */  [Dbg8080.INS.JMP,   Dbg8080.TYPE_ADDR],
/* 0xC4 */  [Dbg8080.INS.CNZ,   Dbg8080.TYPE_ADDR],
/* 0xC5 */  [Dbg8080.INS.PUSH,  Dbg8080.TYPE_BC],
/* 0xC6 */  [Dbg8080.INS.ADI,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_IMM | Dbg8080.TYPE_BYTE],
/* 0xC7 */  [Dbg8080.INS.RST,   Dbg8080.TYPE_INT],
/* 0xC8 */  [Dbg8080.INS.RZ],
/* 0xC9 */  [Dbg8080.INS.RET],
/* 0xCA */  [Dbg8080.INS.JZ,    Dbg8080.TYPE_ADDR],
/* 0xCB */  [Dbg8080.INS.JMP,   Dbg8080.TYPE_ADDR | Dbg8080.TYPE_UNDOC],
/* 0xCC */  [Dbg8080.INS.CZ,    Dbg8080.TYPE_ADDR],
/* 0xCD */  [Dbg8080.INS.CALL,  Dbg8080.TYPE_ADDR],
/* 0xCE */  [Dbg8080.INS.ACI,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_IMM | Dbg8080.TYPE_BYTE],
/* 0xCF */  [Dbg8080.INS.RST,   Dbg8080.TYPE_INT],
/* 0xD0 */  [Dbg8080.INS.RNC],
/* 0xD1 */  [Dbg8080.INS.POP,   Dbg8080.TYPE_DE],
/* 0xD2 */  [Dbg8080.INS.JNC,   Dbg8080.TYPE_ADDR],
/* 0xD3 */  [Dbg8080.INS.OUT,   Dbg8080.TYPE_IMM  | Dbg8080.TYPE_BYTE,Dbg8080.TYPE_A   | Dbg8080.TYPE_OPT],
/* 0xD4 */  [Dbg8080.INS.CNC,   Dbg8080.TYPE_ADDR],
/* 0xD5 */  [Dbg8080.INS.PUSH,  Dbg8080.TYPE_DE],
/* 0xD6 */  [Dbg8080.INS.SUI,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_IMM | Dbg8080.TYPE_BYTE],
/* 0xD7 */  [Dbg8080.INS.RST,   Dbg8080.TYPE_INT],
/* 0xD8 */  [Dbg8080.INS.RC],
/* 0xD9 */  [Dbg8080.INS.RET,   Dbg8080.TYPE_UNDOC],
/* 0xDA */  [Dbg8080.INS.JC,    Dbg8080.TYPE_ADDR],
/* 0xDB */  [Dbg8080.INS.IN,    Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_IMM | Dbg8080.TYPE_BYTE],
/* 0xDC */  [Dbg8080.INS.CC,    Dbg8080.TYPE_ADDR],
/* 0xDD */  [Dbg8080.INS.CALL,  Dbg8080.TYPE_ADDR | Dbg8080.TYPE_UNDOC],
/* 0xDE */  [Dbg8080.INS.SBI,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_IMM | Dbg8080.TYPE_BYTE],
/* 0xDF */  [Dbg8080.INS.RST,   Dbg8080.TYPE_INT],
/* 0xE0 */  [Dbg8080.INS.RPO],
/* 0xE1 */  [Dbg8080.INS.POP,   Dbg8080.TYPE_HL],
/* 0xE2 */  [Dbg8080.INS.JPO,   Dbg8080.TYPE_ADDR],
/* 0xE3 */  [Dbg8080.INS.XTHL,  Dbg8080.TYPE_SP   | Dbg8080.TYPE_MEM| Dbg8080.TYPE_OPT,  Dbg8080.TYPE_HL | Dbg8080.TYPE_OPT],
/* 0xE4 */  [Dbg8080.INS.CPO,   Dbg8080.TYPE_ADDR],
/* 0xE5 */  [Dbg8080.INS.PUSH,  Dbg8080.TYPE_HL],
/* 0xE6 */  [Dbg8080.INS.ANI,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_IMM | Dbg8080.TYPE_BYTE],
/* 0xE7 */  [Dbg8080.INS.RST,   Dbg8080.TYPE_INT],
/* 0xE8 */  [Dbg8080.INS.RPE],
/* 0xE9 */  [Dbg8080.INS.PCHL,  Dbg8080.TYPE_HL],
/* 0xEA */  [Dbg8080.INS.JPE,   Dbg8080.TYPE_ADDR],
/* 0xEB */  [Dbg8080.INS.XCHG,  Dbg8080.TYPE_HL   | Dbg8080.TYPE_OPT, Dbg8080.TYPE_DE  | Dbg8080.TYPE_OPT],
/* 0xEC */  [Dbg8080.INS.CPE,   Dbg8080.TYPE_ADDR],
/* 0xED */  [Dbg8080.INS.CALL,  Dbg8080.TYPE_ADDR | Dbg8080.TYPE_UNDOC],
/* 0xEE */  [Dbg8080.INS.XRI,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_IMM | Dbg8080.TYPE_BYTE],
/* 0xEF */  [Dbg8080.INS.RST,   Dbg8080.TYPE_INT],
/* 0xF0 */  [Dbg8080.INS.RP],
/* 0xF1 */  [Dbg8080.INS.POP,   Dbg8080.TYPE_PSW],
/* 0xF2 */  [Dbg8080.INS.JP,    Dbg8080.TYPE_ADDR],
/* 0xF3 */  [Dbg8080.INS.DI],
/* 0xF4 */  [Dbg8080.INS.CP,    Dbg8080.TYPE_ADDR],
/* 0xF5 */  [Dbg8080.INS.PUSH,  Dbg8080.TYPE_PSW],
/* 0xF6 */  [Dbg8080.INS.ORI,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_IMM | Dbg8080.TYPE_BYTE],
/* 0xF7 */  [Dbg8080.INS.RST,   Dbg8080.TYPE_INT],
/* 0xF8 */  [Dbg8080.INS.RM],
/* 0xF9 */  [Dbg8080.INS.SPHL,  Dbg8080.TYPE_SP   | Dbg8080.TYPE_OPT, Dbg8080.TYPE_HL  | Dbg8080.TYPE_OPT],
/* 0xFA */  [Dbg8080.INS.JM,    Dbg8080.TYPE_ADDR],
/* 0xFB */  [Dbg8080.INS.EI],
/* 0xFC */  [Dbg8080.INS.CM,    Dbg8080.TYPE_ADDR],
/* 0xFD */  [Dbg8080.INS.CALL,  Dbg8080.TYPE_ADDR | Dbg8080.TYPE_UNDOC],
/* 0xFE */  [Dbg8080.INS.CPI,   Dbg8080.TYPE_A    | Dbg8080.TYPE_OPT, Dbg8080.TYPE_IMM | Dbg8080.TYPE_BYTE],
/* 0xFF */  [Dbg8080.INS.RST,   Dbg8080.TYPE_INT]
];

Defs.CLASSES["Dbg8080"] = Dbg8080;
