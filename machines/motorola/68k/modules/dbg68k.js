/**
 * @fileoverview Debugger for 68K CPUs
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2022 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Debugger from "../../../modules/debugger.js";

/**
 * Debugger for 68K CPUs
 *
 * @class {Dbg68K}
 * @unrestricted
 */
export default class Dbg68K extends Debugger {
    /**
     * Dbg68K(idMachine, idDevice, config)
     *
     * @this {Dbg68K}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);
        this.styles = [Dbg68K.STYLE_8080, Dbg68K.STYLE_8086];
        this.style = Dbg68K.STYLE_8086;
        this.maxOpcodeLength = 3;
    }

    /**
     * break(addr, fArmed)
     *
     * @this {Dbg68K}
     * @param {number} addr
     * @param {boolean} fArmed
     * @returns {boolean}
     */
    break(addr, fArmed)
    {
        return false;       // TODO
    }

    /**
     * markDataAccess(addr, length, iAccess)
     *
     * @this {Dbg68K}
     * @param {number} addr
     * @param {number} length
     * @param {number} iAccess
     */
    markDataAccess(addr, length, iAccess)
    {
        // TODO
    }

    /**
     * unassemble(address, opcodes, annotation)
     *
     * Overrides Debugger's default unassemble() function with one that understands 8080 instructions.
     *
     * @this {Dbg68K}
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
            let typeSize = type & Dbg68K.TYPE_SIZE;
            switch (typeSize) {
            case Dbg68K.TYPE_BYTE:
                sOperand = this.toBase(getNextByte(), 16, 8, "");
                break;
            case Dbg68K.TYPE_SBYTE:
                sOperand = this.toBase((getNextWord() << 24) >> 24, 16, 16, "");
                break;
            case Dbg68K.TYPE_WORD:
                sOperand = this.toBase(getNextWord(), 16, 16, "");
                break;
            default:
                return "imm(" + this.toBase(type, 16, 16, "") + ')';
            }
            if (this.style == Dbg68K.STYLE_8086 && (type & Dbg68K.TYPE_MEM)) {
                sOperand = '[' + sOperand + ']';
            } else if (!(type & Dbg68K.TYPE_REG)) {
                sOperand = (this.style == Dbg68K.STYLE_8080? '$' : "0x") + sOperand;
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
            let sOperand = Dbg68K.REGS[iReg];
            if (this.style == Dbg68K.STYLE_8086 && (type & Dbg68K.TYPE_MEM)) {
                if (iReg == Dbg68K.REG_M) {
                    sOperand = "HL";
                }
                sOperand = '[' + sOperand + ']';
            }
            return sOperand;
        };

        let opcode = getNextByte();

        let asOpcodes = this.style != Dbg68K.STYLE_8086? Dbg68K.INS_NAMES : Dbg68K.INS_NAMES_8086;
        let aOpDesc = Dbg68K.aaOpDescs[opcode];
        let opNum = aOpDesc[0];

        let sOperands = "";
        let sOpcode = asOpcodes[opNum];
        let cOperands = aOpDesc.length - 1;
        let typeSizeDefault = Dbg68K.TYPE_NONE, type;

        for (let iOperand = 1; iOperand <= cOperands; iOperand++) {

            let sOperand = "";

            type = aOpDesc[iOperand];
            if (type === undefined) continue;
            if ((type & Dbg68K.TYPE_OPT) && this.style == Dbg68K.STYLE_8080) continue;

            let typeMode = type & Dbg68K.TYPE_MODE;
            if (!typeMode) continue;

            let typeSize = type & Dbg68K.TYPE_SIZE;
            if (!typeSize) {
                type |= typeSizeDefault;
            } else {
                typeSizeDefault = typeSize;
            }

            let typeOther = type & Dbg68K.TYPE_OTHER;
            if (!typeOther) {
                type |= (iOperand == 1? Dbg68K.TYPE_OUT : Dbg68K.TYPE_IN);
            }

            if (typeMode & Dbg68K.TYPE_IMM) {
                sOperand = getImmOperand(type);
            }
            else if (typeMode & Dbg68K.TYPE_REG) {
                sOperand = getRegOperand((type & Dbg68K.TYPE_IREG) >> 8, type);
            }
            else if (typeMode & Dbg68K.TYPE_INT) {
                sOperand = ((opcode >> 3) & 0x7).toString();
            }

            if (!sOperand || !sOperand.length) {
                sOperands = "INVALID";
                break;
            }
            if (sOperands.length > 0) sOperands += ',';
            sOperands += (sOperand || "???");
        }

        let result = this.sprintf("%s %-7s%s %-7s %s", sAddr, sBytes, (type & Dbg68K.TYPE_UNDOC)? '*' : ' ', sOpcode, sOperands);
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

/**
 * Definitions ported from DebuggerInterface.java
 */
Dbg68K.MEMTYPE_ROM         = 0;
Dbg68K.MEMTYPE_DEVICE      = 1;
Dbg68K.MEMTYPE_CODE        = 2;
Dbg68K.MEMTYPE_DATA        = 3;

Dbg68K.DATAACCESS_NONE     = 0;
Dbg68K.DATAACCESS_READ     = 1;
Dbg68K.DATAACCESS_WRITE    = 2;
Dbg68K.DATAACCESS_UNINIT   = 3;


Dbg68K.STYLE_8080 = "8080";
Dbg68K.STYLE_8086 = "8086";

/*
 * CPU instruction ordinals
 */
Dbg68K.INS = {
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
Dbg68K.INS_NAMES = [
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

Dbg68K.INS_NAMES_8086 = [
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

Dbg68K.REG_B      = 0x00;
Dbg68K.REG_C      = 0x01;
Dbg68K.REG_D      = 0x02;
Dbg68K.REG_E      = 0x03;
Dbg68K.REG_H      = 0x04;
Dbg68K.REG_L      = 0x05;
Dbg68K.REG_M      = 0x06;
Dbg68K.REG_A      = 0x07;
Dbg68K.REG_BC     = 0x08;
Dbg68K.REG_DE     = 0x09;
Dbg68K.REG_HL     = 0x0A;
Dbg68K.REG_SP     = 0x0B;
Dbg68K.REG_PC     = 0x0C;
Dbg68K.REG_PS     = 0x0D;
Dbg68K.REG_PSW    = 0x0E;      // aka AF if Z80-style mnemonics

/*
 * NOTE: "PS" is the complete processor status, which includes bits like the Interrupt flag (IF),
 * which is NOT the same as "PSW", which is the low 8 bits of "PS" combined with "A" in the high byte.
 */
Dbg68K.REGS = [
    "B", "C", "D", "E", "H", "L", "M", "A", "BC", "DE", "HL", "SP", "PC", "PS", "PSW"
];

/*
 * Operand type descriptor masks and definitions
 */
Dbg68K.TYPE_SIZE  = 0x000F;    // size field
Dbg68K.TYPE_MODE  = 0x00F0;    // mode field
Dbg68K.TYPE_IREG  = 0x0F00;    // implied register field
Dbg68K.TYPE_OTHER = 0xF000;    // "other" field

/*
 * TYPE_SIZE values
 */
Dbg68K.TYPE_NONE  = 0x0000;    // (all other TYPE fields ignored)
Dbg68K.TYPE_BYTE  = 0x0001;    // byte, regardless of operand size
Dbg68K.TYPE_SBYTE = 0x0002;    // byte sign-extended to word
Dbg68K.TYPE_WORD  = 0x0003;    // word (16-bit value)

/*
 * TYPE_MODE values
 */
Dbg68K.TYPE_REG   = 0x0010;    // register
Dbg68K.TYPE_IMM   = 0x0020;    // immediate data
Dbg68K.TYPE_ADDR  = 0x0033;    // immediate (word) address
Dbg68K.TYPE_MEM   = 0x0040;    // memory reference
Dbg68K.TYPE_INT   = 0x0080;    // interrupt level encoded in instruction (bits 3-5)

/*
 * TYPE_IREG values, based on the REG_* constants.
 *
 * Note that TYPE_M isn't really a register, just an alternative form of TYPE_HL | TYPE_MEM.
 */
Dbg68K.TYPE_A     = (Dbg68K.REG_A  << 8 | Dbg68K.TYPE_REG | Dbg68K.TYPE_BYTE);
Dbg68K.TYPE_B     = (Dbg68K.REG_B  << 8 | Dbg68K.TYPE_REG | Dbg68K.TYPE_BYTE);
Dbg68K.TYPE_C     = (Dbg68K.REG_C  << 8 | Dbg68K.TYPE_REG | Dbg68K.TYPE_BYTE);
Dbg68K.TYPE_D     = (Dbg68K.REG_D  << 8 | Dbg68K.TYPE_REG | Dbg68K.TYPE_BYTE);
Dbg68K.TYPE_E     = (Dbg68K.REG_E  << 8 | Dbg68K.TYPE_REG | Dbg68K.TYPE_BYTE);
Dbg68K.TYPE_H     = (Dbg68K.REG_H  << 8 | Dbg68K.TYPE_REG | Dbg68K.TYPE_BYTE);
Dbg68K.TYPE_L     = (Dbg68K.REG_L  << 8 | Dbg68K.TYPE_REG | Dbg68K.TYPE_BYTE);
Dbg68K.TYPE_M     = (Dbg68K.REG_M  << 8 | Dbg68K.TYPE_REG | Dbg68K.TYPE_BYTE | Dbg68K.TYPE_MEM);
Dbg68K.TYPE_BC    = (Dbg68K.REG_BC << 8 | Dbg68K.TYPE_REG | Dbg68K.TYPE_WORD);
Dbg68K.TYPE_DE    = (Dbg68K.REG_DE << 8 | Dbg68K.TYPE_REG | Dbg68K.TYPE_WORD);
Dbg68K.TYPE_HL    = (Dbg68K.REG_HL << 8 | Dbg68K.TYPE_REG | Dbg68K.TYPE_WORD);
Dbg68K.TYPE_SP    = (Dbg68K.REG_SP << 8 | Dbg68K.TYPE_REG | Dbg68K.TYPE_WORD);
Dbg68K.TYPE_PC    = (Dbg68K.REG_PC << 8 | Dbg68K.TYPE_REG | Dbg68K.TYPE_WORD);
Dbg68K.TYPE_PSW   = (Dbg68K.REG_PSW<< 8 | Dbg68K.TYPE_REG | Dbg68K.TYPE_WORD);

/*
 * TYPE_OTHER bit definitions
 */
Dbg68K.TYPE_IN    = 0x1000;    // operand is input
Dbg68K.TYPE_OUT   = 0x2000;    // operand is output
Dbg68K.TYPE_BOTH  = (Dbg68K.TYPE_IN | Dbg68K.TYPE_OUT);
Dbg68K.TYPE_OPT   = 0x4000;    // optional operand (ie, normally omitted in 8080 assembly language)
Dbg68K.TYPE_UNDOC = 0x8000;    // opcode is an undocumented alternative encoding

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
Dbg68K.aaOpDescs = [
/* 0x00 */  [Dbg68K.INS.NOP],
/* 0x01 */  [Dbg68K.INS.LXI,   Dbg68K.TYPE_BC,    Dbg68K.TYPE_IMM],
/* 0x02 */  [Dbg68K.INS.STAX,  Dbg68K.TYPE_BC   | Dbg68K.TYPE_MEM, Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT],
/* 0x03 */  [Dbg68K.INS.INX,   Dbg68K.TYPE_BC],
/* 0x04 */  [Dbg68K.INS.INR,   Dbg68K.TYPE_B],
/* 0x05 */  [Dbg68K.INS.DCR,   Dbg68K.TYPE_B],
/* 0x06 */  [Dbg68K.INS.MVI,   Dbg68K.TYPE_B,     Dbg68K.TYPE_IMM],
/* 0x07 */  [Dbg68K.INS.RLC],
/* 0x08 */  [Dbg68K.INS.NOP,   Dbg68K.TYPE_UNDOC],
/* 0x09 */  [Dbg68K.INS.DAD,   Dbg68K.TYPE_HL   | Dbg68K.TYPE_OPT, Dbg68K.TYPE_BC],
/* 0x0A */  [Dbg68K.INS.LDAX,  Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_BC   | Dbg68K.TYPE_MEM],
/* 0x0B */  [Dbg68K.INS.DCX,   Dbg68K.TYPE_BC],
/* 0x0C */  [Dbg68K.INS.INR,   Dbg68K.TYPE_C],
/* 0x0D */  [Dbg68K.INS.DCR,   Dbg68K.TYPE_C],
/* 0x0E */  [Dbg68K.INS.MVI,   Dbg68K.TYPE_C,     Dbg68K.TYPE_IMM],
/* 0x0F */  [Dbg68K.INS.RRC],
/* 0x10 */  [Dbg68K.INS.NOP,   Dbg68K.TYPE_UNDOC],
/* 0x11 */  [Dbg68K.INS.LXI,   Dbg68K.TYPE_DE,    Dbg68K.TYPE_IMM],
/* 0x12 */  [Dbg68K.INS.STAX,  Dbg68K.TYPE_DE   | Dbg68K.TYPE_MEM, Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT],
/* 0x13 */  [Dbg68K.INS.INX,   Dbg68K.TYPE_DE],
/* 0x14 */  [Dbg68K.INS.INR,   Dbg68K.TYPE_D],
/* 0x15 */  [Dbg68K.INS.DCR,   Dbg68K.TYPE_D],
/* 0x16 */  [Dbg68K.INS.MVI,   Dbg68K.TYPE_D,     Dbg68K.TYPE_IMM],
/* 0x17 */  [Dbg68K.INS.RAL],
/* 0x18 */  [Dbg68K.INS.NOP,   Dbg68K.TYPE_UNDOC],
/* 0x19 */  [Dbg68K.INS.DAD,   Dbg68K.TYPE_HL   | Dbg68K.TYPE_OPT, Dbg68K.TYPE_DE],
/* 0x1A */  [Dbg68K.INS.LDAX,  Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_DE   | Dbg68K.TYPE_MEM],
/* 0x1B */  [Dbg68K.INS.DCX,   Dbg68K.TYPE_DE],
/* 0x1C */  [Dbg68K.INS.INR,   Dbg68K.TYPE_E],
/* 0x1D */  [Dbg68K.INS.DCR,   Dbg68K.TYPE_E],
/* 0x1E */  [Dbg68K.INS.MVI,   Dbg68K.TYPE_E,     Dbg68K.TYPE_IMM],
/* 0x1F */  [Dbg68K.INS.RAR],
/* 0x20 */  [Dbg68K.INS.NOP,   Dbg68K.TYPE_UNDOC],
/* 0x21 */  [Dbg68K.INS.LXI,   Dbg68K.TYPE_HL,    Dbg68K.TYPE_IMM],
/* 0x22 */  [Dbg68K.INS.SHLD,  Dbg68K.TYPE_ADDR | Dbg68K.TYPE_MEM, Dbg68K.TYPE_HL   | Dbg68K.TYPE_OPT],
/* 0x23 */  [Dbg68K.INS.INX,   Dbg68K.TYPE_HL],
/* 0x24 */  [Dbg68K.INS.INR,   Dbg68K.TYPE_H],
/* 0x25 */  [Dbg68K.INS.DCR,   Dbg68K.TYPE_H],
/* 0x26 */  [Dbg68K.INS.MVI,   Dbg68K.TYPE_H,     Dbg68K.TYPE_IMM],
/* 0x27 */  [Dbg68K.INS.DAA],
/* 0x28 */  [Dbg68K.INS.NOP,   Dbg68K.TYPE_UNDOC],
/* 0x29 */  [Dbg68K.INS.DAD,   Dbg68K.TYPE_HL   | Dbg68K.TYPE_OPT, Dbg68K.TYPE_HL],
/* 0x2A */  [Dbg68K.INS.LHLD,  Dbg68K.TYPE_HL   | Dbg68K.TYPE_OPT, Dbg68K.TYPE_ADDR | Dbg68K.TYPE_MEM],
/* 0x2B */  [Dbg68K.INS.DCX,   Dbg68K.TYPE_HL],
/* 0x2C */  [Dbg68K.INS.INR,   Dbg68K.TYPE_L],
/* 0x2D */  [Dbg68K.INS.DCR,   Dbg68K.TYPE_L],
/* 0x2E */  [Dbg68K.INS.MVI,   Dbg68K.TYPE_L,     Dbg68K.TYPE_IMM],
/* 0x2F */  [Dbg68K.INS.CMA,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT],
/* 0x30 */  [Dbg68K.INS.NOP,   Dbg68K.TYPE_UNDOC],
/* 0x31 */  [Dbg68K.INS.LXI,   Dbg68K.TYPE_SP,    Dbg68K.TYPE_IMM],
/* 0x32 */  [Dbg68K.INS.STA,   Dbg68K.TYPE_ADDR | Dbg68K.TYPE_MEM, Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT],
/* 0x33 */  [Dbg68K.INS.INX,   Dbg68K.TYPE_SP],
/* 0x34 */  [Dbg68K.INS.INR,   Dbg68K.TYPE_M],
/* 0x35 */  [Dbg68K.INS.DCR,   Dbg68K.TYPE_M],
/* 0x36 */  [Dbg68K.INS.MVI,   Dbg68K.TYPE_M,     Dbg68K.TYPE_IMM],
/* 0x37 */  [Dbg68K.INS.STC],
/* 0x38 */  [Dbg68K.INS.NOP,   Dbg68K.TYPE_UNDOC],
/* 0x39 */  [Dbg68K.INS.DAD,   Dbg68K.TYPE_HL   | Dbg68K.TYPE_OPT, Dbg68K.TYPE_SP],
/* 0x3A */  [Dbg68K.INS.LDA,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_ADDR | Dbg68K.TYPE_MEM],
/* 0x3B */  [Dbg68K.INS.DCX,   Dbg68K.TYPE_SP],
/* 0x3C */  [Dbg68K.INS.INR,   Dbg68K.TYPE_A],
/* 0x3D */  [Dbg68K.INS.DCR,   Dbg68K.TYPE_A],
/* 0x3E */  [Dbg68K.INS.MVI,   Dbg68K.TYPE_A,     Dbg68K.TYPE_IMM],
/* 0x3F */  [Dbg68K.INS.CMC],
/* 0x40 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_B,     Dbg68K.TYPE_B],
/* 0x41 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_B,     Dbg68K.TYPE_C],
/* 0x42 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_B,     Dbg68K.TYPE_D],
/* 0x43 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_B,     Dbg68K.TYPE_E],
/* 0x44 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_B,     Dbg68K.TYPE_H],
/* 0x45 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_B,     Dbg68K.TYPE_L],
/* 0x46 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_B,     Dbg68K.TYPE_M],
/* 0x47 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_B,     Dbg68K.TYPE_A],
/* 0x48 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_C,     Dbg68K.TYPE_B],
/* 0x49 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_C,     Dbg68K.TYPE_C],
/* 0x4A */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_C,     Dbg68K.TYPE_D],
/* 0x4B */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_C,     Dbg68K.TYPE_E],
/* 0x4C */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_C,     Dbg68K.TYPE_H],
/* 0x4D */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_C,     Dbg68K.TYPE_L],
/* 0x4E */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_C,     Dbg68K.TYPE_M],
/* 0x4F */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_C,     Dbg68K.TYPE_A],
/* 0x50 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_D,     Dbg68K.TYPE_B],
/* 0x51 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_D,     Dbg68K.TYPE_C],
/* 0x52 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_D,     Dbg68K.TYPE_D],
/* 0x53 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_D,     Dbg68K.TYPE_E],
/* 0x54 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_D,     Dbg68K.TYPE_H],
/* 0x55 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_D,     Dbg68K.TYPE_L],
/* 0x56 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_D,     Dbg68K.TYPE_M],
/* 0x57 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_D,     Dbg68K.TYPE_A],
/* 0x58 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_E,     Dbg68K.TYPE_B],
/* 0x59 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_E,     Dbg68K.TYPE_C],
/* 0x5A */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_E,     Dbg68K.TYPE_D],
/* 0x5B */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_E,     Dbg68K.TYPE_E],
/* 0x5C */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_E,     Dbg68K.TYPE_H],
/* 0x5D */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_E,     Dbg68K.TYPE_L],
/* 0x5E */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_E,     Dbg68K.TYPE_M],
/* 0x5F */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_E,     Dbg68K.TYPE_A],
/* 0x60 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_H,     Dbg68K.TYPE_B],
/* 0x61 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_H,     Dbg68K.TYPE_C],
/* 0x62 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_H,     Dbg68K.TYPE_D],
/* 0x63 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_H,     Dbg68K.TYPE_E],
/* 0x64 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_H,     Dbg68K.TYPE_H],
/* 0x65 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_H,     Dbg68K.TYPE_L],
/* 0x66 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_H,     Dbg68K.TYPE_M],
/* 0x67 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_H,     Dbg68K.TYPE_A],
/* 0x68 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_L,     Dbg68K.TYPE_B],
/* 0x69 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_L,     Dbg68K.TYPE_C],
/* 0x6A */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_L,     Dbg68K.TYPE_D],
/* 0x6B */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_L,     Dbg68K.TYPE_E],
/* 0x6C */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_L,     Dbg68K.TYPE_H],
/* 0x6D */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_L,     Dbg68K.TYPE_L],
/* 0x6E */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_L,     Dbg68K.TYPE_M],
/* 0x6F */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_L,     Dbg68K.TYPE_A],
/* 0x70 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_M,     Dbg68K.TYPE_B],
/* 0x71 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_M,     Dbg68K.TYPE_C],
/* 0x72 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_M,     Dbg68K.TYPE_D],
/* 0x73 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_M,     Dbg68K.TYPE_E],
/* 0x74 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_M,     Dbg68K.TYPE_H],
/* 0x75 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_M,     Dbg68K.TYPE_L],
/* 0x76 */  [Dbg68K.INS.HLT],
/* 0x77 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_M,     Dbg68K.TYPE_A],
/* 0x78 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_A,     Dbg68K.TYPE_B],
/* 0x79 */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_A,     Dbg68K.TYPE_C],
/* 0x7A */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_A,     Dbg68K.TYPE_D],
/* 0x7B */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_A,     Dbg68K.TYPE_E],
/* 0x7C */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_A,     Dbg68K.TYPE_H],
/* 0x7D */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_A,     Dbg68K.TYPE_L],
/* 0x7E */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_A,     Dbg68K.TYPE_M],
/* 0x7F */  [Dbg68K.INS.MOV,   Dbg68K.TYPE_A,     Dbg68K.TYPE_A],
/* 0x80 */  [Dbg68K.INS.ADD,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_B],
/* 0x81 */  [Dbg68K.INS.ADD,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_C],
/* 0x82 */  [Dbg68K.INS.ADD,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_D],
/* 0x83 */  [Dbg68K.INS.ADD,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_E],
/* 0x84 */  [Dbg68K.INS.ADD,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_H],
/* 0x85 */  [Dbg68K.INS.ADD,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_L],
/* 0x86 */  [Dbg68K.INS.ADD,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_M],
/* 0x87 */  [Dbg68K.INS.ADD,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_A],
/* 0x88 */  [Dbg68K.INS.ADC,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_B],
/* 0x89 */  [Dbg68K.INS.ADC,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_C],
/* 0x8A */  [Dbg68K.INS.ADC,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_D],
/* 0x8B */  [Dbg68K.INS.ADC,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_E],
/* 0x8C */  [Dbg68K.INS.ADC,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_H],
/* 0x8D */  [Dbg68K.INS.ADC,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_L],
/* 0x8E */  [Dbg68K.INS.ADC,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_M],
/* 0x8F */  [Dbg68K.INS.ADC,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_A],
/* 0x90 */  [Dbg68K.INS.SUB,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_B],
/* 0x91 */  [Dbg68K.INS.SUB,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_C],
/* 0x92 */  [Dbg68K.INS.SUB,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_D],
/* 0x93 */  [Dbg68K.INS.SUB,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_E],
/* 0x94 */  [Dbg68K.INS.SUB,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_H],
/* 0x95 */  [Dbg68K.INS.SUB,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_L],
/* 0x96 */  [Dbg68K.INS.SUB,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_M],
/* 0x97 */  [Dbg68K.INS.SUB,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_A],
/* 0x98 */  [Dbg68K.INS.SBB,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_B],
/* 0x99 */  [Dbg68K.INS.SBB,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_C],
/* 0x9A */  [Dbg68K.INS.SBB,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_D],
/* 0x9B */  [Dbg68K.INS.SBB,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_E],
/* 0x9C */  [Dbg68K.INS.SBB,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_H],
/* 0x9D */  [Dbg68K.INS.SBB,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_L],
/* 0x9E */  [Dbg68K.INS.SBB,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_M],
/* 0x9F */  [Dbg68K.INS.SBB,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_A],
/* 0xA0 */  [Dbg68K.INS.ANA,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_B],
/* 0xA1 */  [Dbg68K.INS.ANA,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_C],
/* 0xA2 */  [Dbg68K.INS.ANA,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_D],
/* 0xA3 */  [Dbg68K.INS.ANA,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_E],
/* 0xA4 */  [Dbg68K.INS.ANA,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_H],
/* 0xA5 */  [Dbg68K.INS.ANA,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_L],
/* 0xA6 */  [Dbg68K.INS.ANA,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_M],
/* 0xA7 */  [Dbg68K.INS.ANA,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_A],
/* 0xA8 */  [Dbg68K.INS.XRA,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_B],
/* 0xA9 */  [Dbg68K.INS.XRA,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_C],
/* 0xAA */  [Dbg68K.INS.XRA,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_D],
/* 0xAB */  [Dbg68K.INS.XRA,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_E],
/* 0xAC */  [Dbg68K.INS.XRA,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_H],
/* 0xAD */  [Dbg68K.INS.XRA,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_L],
/* 0xAE */  [Dbg68K.INS.XRA,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_M],
/* 0xAF */  [Dbg68K.INS.XRA,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_A],
/* 0xB0 */  [Dbg68K.INS.ORA,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_B],
/* 0xB1 */  [Dbg68K.INS.ORA,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_C],
/* 0xB2 */  [Dbg68K.INS.ORA,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_D],
/* 0xB3 */  [Dbg68K.INS.ORA,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_E],
/* 0xB4 */  [Dbg68K.INS.ORA,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_H],
/* 0xB5 */  [Dbg68K.INS.ORA,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_L],
/* 0xB6 */  [Dbg68K.INS.ORA,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_M],
/* 0xB7 */  [Dbg68K.INS.ORA,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_A],
/* 0xB8 */  [Dbg68K.INS.CMP,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_B],
/* 0xB9 */  [Dbg68K.INS.CMP,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_C],
/* 0xBA */  [Dbg68K.INS.CMP,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_D],
/* 0xBB */  [Dbg68K.INS.CMP,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_E],
/* 0xBC */  [Dbg68K.INS.CMP,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_H],
/* 0xBD */  [Dbg68K.INS.CMP,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_L],
/* 0xBE */  [Dbg68K.INS.CMP,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_M],
/* 0xBF */  [Dbg68K.INS.CMP,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_A],
/* 0xC0 */  [Dbg68K.INS.RNZ],
/* 0xC1 */  [Dbg68K.INS.POP,   Dbg68K.TYPE_BC],
/* 0xC2 */  [Dbg68K.INS.JNZ,   Dbg68K.TYPE_ADDR],
/* 0xC3 */  [Dbg68K.INS.JMP,   Dbg68K.TYPE_ADDR],
/* 0xC4 */  [Dbg68K.INS.CNZ,   Dbg68K.TYPE_ADDR],
/* 0xC5 */  [Dbg68K.INS.PUSH,  Dbg68K.TYPE_BC],
/* 0xC6 */  [Dbg68K.INS.ADI,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_IMM | Dbg68K.TYPE_BYTE],
/* 0xC7 */  [Dbg68K.INS.RST,   Dbg68K.TYPE_INT],
/* 0xC8 */  [Dbg68K.INS.RZ],
/* 0xC9 */  [Dbg68K.INS.RET],
/* 0xCA */  [Dbg68K.INS.JZ,    Dbg68K.TYPE_ADDR],
/* 0xCB */  [Dbg68K.INS.JMP,   Dbg68K.TYPE_ADDR | Dbg68K.TYPE_UNDOC],
/* 0xCC */  [Dbg68K.INS.CZ,    Dbg68K.TYPE_ADDR],
/* 0xCD */  [Dbg68K.INS.CALL,  Dbg68K.TYPE_ADDR],
/* 0xCE */  [Dbg68K.INS.ACI,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_IMM | Dbg68K.TYPE_BYTE],
/* 0xCF */  [Dbg68K.INS.RST,   Dbg68K.TYPE_INT],
/* 0xD0 */  [Dbg68K.INS.RNC],
/* 0xD1 */  [Dbg68K.INS.POP,   Dbg68K.TYPE_DE],
/* 0xD2 */  [Dbg68K.INS.JNC,   Dbg68K.TYPE_ADDR],
/* 0xD3 */  [Dbg68K.INS.OUT,   Dbg68K.TYPE_IMM  | Dbg68K.TYPE_BYTE,Dbg68K.TYPE_A   | Dbg68K.TYPE_OPT],
/* 0xD4 */  [Dbg68K.INS.CNC,   Dbg68K.TYPE_ADDR],
/* 0xD5 */  [Dbg68K.INS.PUSH,  Dbg68K.TYPE_DE],
/* 0xD6 */  [Dbg68K.INS.SUI,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_IMM | Dbg68K.TYPE_BYTE],
/* 0xD7 */  [Dbg68K.INS.RST,   Dbg68K.TYPE_INT],
/* 0xD8 */  [Dbg68K.INS.RC],
/* 0xD9 */  [Dbg68K.INS.RET,   Dbg68K.TYPE_UNDOC],
/* 0xDA */  [Dbg68K.INS.JC,    Dbg68K.TYPE_ADDR],
/* 0xDB */  [Dbg68K.INS.IN,    Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_IMM | Dbg68K.TYPE_BYTE],
/* 0xDC */  [Dbg68K.INS.CC,    Dbg68K.TYPE_ADDR],
/* 0xDD */  [Dbg68K.INS.CALL,  Dbg68K.TYPE_ADDR | Dbg68K.TYPE_UNDOC],
/* 0xDE */  [Dbg68K.INS.SBI,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_IMM | Dbg68K.TYPE_BYTE],
/* 0xDF */  [Dbg68K.INS.RST,   Dbg68K.TYPE_INT],
/* 0xE0 */  [Dbg68K.INS.RPO],
/* 0xE1 */  [Dbg68K.INS.POP,   Dbg68K.TYPE_HL],
/* 0xE2 */  [Dbg68K.INS.JPO,   Dbg68K.TYPE_ADDR],
/* 0xE3 */  [Dbg68K.INS.XTHL,  Dbg68K.TYPE_SP   | Dbg68K.TYPE_MEM| Dbg68K.TYPE_OPT,  Dbg68K.TYPE_HL | Dbg68K.TYPE_OPT],
/* 0xE4 */  [Dbg68K.INS.CPO,   Dbg68K.TYPE_ADDR],
/* 0xE5 */  [Dbg68K.INS.PUSH,  Dbg68K.TYPE_HL],
/* 0xE6 */  [Dbg68K.INS.ANI,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_IMM | Dbg68K.TYPE_BYTE],
/* 0xE7 */  [Dbg68K.INS.RST,   Dbg68K.TYPE_INT],
/* 0xE8 */  [Dbg68K.INS.RPE],
/* 0xE9 */  [Dbg68K.INS.PCHL,  Dbg68K.TYPE_HL],
/* 0xEA */  [Dbg68K.INS.JPE,   Dbg68K.TYPE_ADDR],
/* 0xEB */  [Dbg68K.INS.XCHG,  Dbg68K.TYPE_HL   | Dbg68K.TYPE_OPT, Dbg68K.TYPE_DE  | Dbg68K.TYPE_OPT],
/* 0xEC */  [Dbg68K.INS.CPE,   Dbg68K.TYPE_ADDR],
/* 0xED */  [Dbg68K.INS.CALL,  Dbg68K.TYPE_ADDR | Dbg68K.TYPE_UNDOC],
/* 0xEE */  [Dbg68K.INS.XRI,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_IMM | Dbg68K.TYPE_BYTE],
/* 0xEF */  [Dbg68K.INS.RST,   Dbg68K.TYPE_INT],
/* 0xF0 */  [Dbg68K.INS.RP],
/* 0xF1 */  [Dbg68K.INS.POP,   Dbg68K.TYPE_PSW],
/* 0xF2 */  [Dbg68K.INS.JP,    Dbg68K.TYPE_ADDR],
/* 0xF3 */  [Dbg68K.INS.DI],
/* 0xF4 */  [Dbg68K.INS.CP,    Dbg68K.TYPE_ADDR],
/* 0xF5 */  [Dbg68K.INS.PUSH,  Dbg68K.TYPE_PSW],
/* 0xF6 */  [Dbg68K.INS.ORI,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_IMM | Dbg68K.TYPE_BYTE],
/* 0xF7 */  [Dbg68K.INS.RST,   Dbg68K.TYPE_INT],
/* 0xF8 */  [Dbg68K.INS.RM],
/* 0xF9 */  [Dbg68K.INS.SPHL,  Dbg68K.TYPE_SP   | Dbg68K.TYPE_OPT, Dbg68K.TYPE_HL  | Dbg68K.TYPE_OPT],
/* 0xFA */  [Dbg68K.INS.JM,    Dbg68K.TYPE_ADDR],
/* 0xFB */  [Dbg68K.INS.EI],
/* 0xFC */  [Dbg68K.INS.CM,    Dbg68K.TYPE_ADDR],
/* 0xFD */  [Dbg68K.INS.CALL,  Dbg68K.TYPE_ADDR | Dbg68K.TYPE_UNDOC],
/* 0xFE */  [Dbg68K.INS.CPI,   Dbg68K.TYPE_A    | Dbg68K.TYPE_OPT, Dbg68K.TYPE_IMM | Dbg68K.TYPE_BYTE],
/* 0xFF */  [Dbg68K.INS.RST,   Dbg68K.TYPE_INT]
];

Dbg68K.CLASSES["Dbg68K"] = Dbg68K;
