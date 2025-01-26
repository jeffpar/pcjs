/**
 * @fileoverview Debugger for the 8080 CPU
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Debugger from "../../../modules/v3/debugger.js";

/**
 * Debugger for the 8080 CPU
 *
 * @class Dbgx80
 * @unrestricted
 */
export default class Dbgx80 extends Debugger {
    /**
     * Dbgx80(idMachine, idDevice, config)
     *
     * @this {Dbgx80}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);
        this.styles = [Dbgx80.STYLE_8080, Dbgx80.STYLE_8086];
        this.style = Dbgx80.STYLE_8086;
        this.maxOpcodeLength = 3;
    }

    /**
     * unassemble(address, opcodes, annotation)
     *
     * Overrides Debugger's default unassemble() function with one that understands 8080 instructions.
     *
     * @this {Dbgx80}
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
            let typeSize = type & Dbgx80.TYPE_SIZE;
            switch (typeSize) {
            case Dbgx80.TYPE_BYTE:
                sOperand = this.toBase(getNextByte(), 16, 8, "");
                break;
            case Dbgx80.TYPE_SBYTE:
                sOperand = this.toBase((getNextWord() << 24) >> 24, 16, 16, "");
                break;
            case Dbgx80.TYPE_WORD:
                sOperand = this.toBase(getNextWord(), 16, 16, "");
                break;
            default:
                return "imm(" + this.toBase(type, 16, 16, "") + ')';
            }
            if (this.style == Dbgx80.STYLE_8086 && (type & Dbgx80.TYPE_MEM)) {
                sOperand = '[' + sOperand + ']';
            } else if (!(type & Dbgx80.TYPE_REG)) {
                sOperand = (this.style == Dbgx80.STYLE_8080? '$' : "0x") + sOperand;
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
            /**
             * Although this breaks with 8080 assembler conventions, I'm going to experiment with some different
             * mnemonics; specifically, "[HL]" instead of "M".  This is also more in keeping with how getImmOperand()
             * displays memory references (ie, by enclosing them in brackets).
             */
            let sOperand = Dbgx80.REGS[iReg];
            if (this.style == Dbgx80.STYLE_8086 && (type & Dbgx80.TYPE_MEM)) {
                if (iReg == Dbgx80.REG_M) {
                    sOperand = "HL";
                }
                sOperand = '[' + sOperand + ']';
            }
            return sOperand;
        };

        let opcode = getNextByte();

        let asOpcodes = this.style != Dbgx80.STYLE_8086? Dbgx80.INS_NAMES : Dbgx80.INS_NAMES_8086;
        let aOpDesc = Dbgx80.aaOpDescs[opcode];
        let opNum = aOpDesc[0];

        let sOperands = "";
        let sOpcode = asOpcodes[opNum];
        let cOperands = aOpDesc.length - 1;
        let typeSizeDefault = Dbgx80.TYPE_NONE, type;

        for (let iOperand = 1; iOperand <= cOperands; iOperand++) {

            let sOperand = "";

            type = aOpDesc[iOperand];
            if (type === undefined) continue;
            if ((type & Dbgx80.TYPE_OPT) && this.style == Dbgx80.STYLE_8080) continue;

            let typeMode = type & Dbgx80.TYPE_MODE;
            if (!typeMode) continue;

            let typeSize = type & Dbgx80.TYPE_SIZE;
            if (!typeSize) {
                type |= typeSizeDefault;
            } else {
                typeSizeDefault = typeSize;
            }

            let typeOther = type & Dbgx80.TYPE_OTHER;
            if (!typeOther) {
                type |= (iOperand == 1? Dbgx80.TYPE_OUT : Dbgx80.TYPE_IN);
            }

            if (typeMode & Dbgx80.TYPE_IMM) {
                sOperand = getImmOperand(type);
            }
            else if (typeMode & Dbgx80.TYPE_REG) {
                sOperand = getRegOperand((type & Dbgx80.TYPE_IREG) >> 8, type);
            }
            else if (typeMode & Dbgx80.TYPE_INT) {
                sOperand = ((opcode >> 3) & 0x7).toString();
            }

            if (!sOperand || !sOperand.length) {
                sOperands = "INVALID";
                break;
            }
            if (sOperands.length > 0) sOperands += ',';
            sOperands += (sOperand || "???");
        }

        let result = this.sprintf("%s %-7s%s %-7s %s", sAddr, sBytes, (type & Dbgx80.TYPE_UNDOC)? '*' : ' ', sOpcode, sOperands);
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

Dbgx80.STYLE_8080 = "8080";
Dbgx80.STYLE_8086 = "8086";

/**
 * CPU instruction ordinals
 */
Dbgx80.INS = {
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

/**
 * CPU instruction names (mnemonics), indexed by CPU instruction ordinal (above)
 *
 * If you change the default style, using the "s" command (eg, "s 8086"), then the 8086 table
 * will be used instead.  TODO: Add a "s z80" command for Z80-style mnemonics.
 */
Dbgx80.INS_NAMES = [
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

Dbgx80.INS_NAMES_8086 = [
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

Dbgx80.REG_B      = 0x00;
Dbgx80.REG_C      = 0x01;
Dbgx80.REG_D      = 0x02;
Dbgx80.REG_E      = 0x03;
Dbgx80.REG_H      = 0x04;
Dbgx80.REG_L      = 0x05;
Dbgx80.REG_M      = 0x06;
Dbgx80.REG_A      = 0x07;
Dbgx80.REG_BC     = 0x08;
Dbgx80.REG_DE     = 0x09;
Dbgx80.REG_HL     = 0x0A;
Dbgx80.REG_SP     = 0x0B;
Dbgx80.REG_PC     = 0x0C;
Dbgx80.REG_PS     = 0x0D;
Dbgx80.REG_PSW    = 0x0E;      // aka AF if Z80-style mnemonics

/**
 * NOTE: "PS" is the complete processor status, which includes bits like the Interrupt flag (IF),
 * which is NOT the same as "PSW", which is the low 8 bits of "PS" combined with "A" in the high byte.
 */
Dbgx80.REGS = [
    "B", "C", "D", "E", "H", "L", "M", "A", "BC", "DE", "HL", "SP", "PC", "PS", "PSW"
];

/**
 * Operand type descriptor masks and definitions
 */
Dbgx80.TYPE_SIZE  = 0x000F;    // size field
Dbgx80.TYPE_MODE  = 0x00F0;    // mode field
Dbgx80.TYPE_IREG  = 0x0F00;    // implied register field
Dbgx80.TYPE_OTHER = 0xF000;    // "other" field

/**
 * TYPE_SIZE values
 */
Dbgx80.TYPE_NONE  = 0x0000;    // (all other TYPE fields ignored)
Dbgx80.TYPE_BYTE  = 0x0001;    // byte, regardless of operand size
Dbgx80.TYPE_SBYTE = 0x0002;    // byte sign-extended to word
Dbgx80.TYPE_WORD  = 0x0003;    // word (16-bit value)

/**
 * TYPE_MODE values
 */
Dbgx80.TYPE_REG   = 0x0010;    // register
Dbgx80.TYPE_IMM   = 0x0020;    // immediate data
Dbgx80.TYPE_ADDR  = 0x0033;    // immediate (word) address
Dbgx80.TYPE_MEM   = 0x0040;    // memory reference
Dbgx80.TYPE_INT   = 0x0080;    // interrupt level encoded in instruction (bits 3-5)

/**
 * TYPE_IREG values, based on the REG_* constants.
 *
 * Note that TYPE_M isn't really a register, just an alternative form of TYPE_HL | TYPE_MEM.
 */
Dbgx80.TYPE_A     = (Dbgx80.REG_A  << 8 | Dbgx80.TYPE_REG | Dbgx80.TYPE_BYTE);
Dbgx80.TYPE_B     = (Dbgx80.REG_B  << 8 | Dbgx80.TYPE_REG | Dbgx80.TYPE_BYTE);
Dbgx80.TYPE_C     = (Dbgx80.REG_C  << 8 | Dbgx80.TYPE_REG | Dbgx80.TYPE_BYTE);
Dbgx80.TYPE_D     = (Dbgx80.REG_D  << 8 | Dbgx80.TYPE_REG | Dbgx80.TYPE_BYTE);
Dbgx80.TYPE_E     = (Dbgx80.REG_E  << 8 | Dbgx80.TYPE_REG | Dbgx80.TYPE_BYTE);
Dbgx80.TYPE_H     = (Dbgx80.REG_H  << 8 | Dbgx80.TYPE_REG | Dbgx80.TYPE_BYTE);
Dbgx80.TYPE_L     = (Dbgx80.REG_L  << 8 | Dbgx80.TYPE_REG | Dbgx80.TYPE_BYTE);
Dbgx80.TYPE_M     = (Dbgx80.REG_M  << 8 | Dbgx80.TYPE_REG | Dbgx80.TYPE_BYTE | Dbgx80.TYPE_MEM);
Dbgx80.TYPE_BC    = (Dbgx80.REG_BC << 8 | Dbgx80.TYPE_REG | Dbgx80.TYPE_WORD);
Dbgx80.TYPE_DE    = (Dbgx80.REG_DE << 8 | Dbgx80.TYPE_REG | Dbgx80.TYPE_WORD);
Dbgx80.TYPE_HL    = (Dbgx80.REG_HL << 8 | Dbgx80.TYPE_REG | Dbgx80.TYPE_WORD);
Dbgx80.TYPE_SP    = (Dbgx80.REG_SP << 8 | Dbgx80.TYPE_REG | Dbgx80.TYPE_WORD);
Dbgx80.TYPE_PC    = (Dbgx80.REG_PC << 8 | Dbgx80.TYPE_REG | Dbgx80.TYPE_WORD);
Dbgx80.TYPE_PSW   = (Dbgx80.REG_PSW<< 8 | Dbgx80.TYPE_REG | Dbgx80.TYPE_WORD);

/**
 * TYPE_OTHER bit definitions
 */
Dbgx80.TYPE_IN    = 0x1000;    // operand is input
Dbgx80.TYPE_OUT   = 0x2000;    // operand is output
Dbgx80.TYPE_BOTH  = (Dbgx80.TYPE_IN | Dbgx80.TYPE_OUT);
Dbgx80.TYPE_OPT   = 0x4000;    // optional operand (ie, normally omitted in 8080 assembly language)
Dbgx80.TYPE_UNDOC = 0x8000;    // opcode is an undocumented alternative encoding

/**
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
Dbgx80.aaOpDescs = [
/* 0x00 */  [Dbgx80.INS.NOP],
/* 0x01 */  [Dbgx80.INS.LXI,   Dbgx80.TYPE_BC,    Dbgx80.TYPE_IMM],
/* 0x02 */  [Dbgx80.INS.STAX,  Dbgx80.TYPE_BC   | Dbgx80.TYPE_MEM, Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT],
/* 0x03 */  [Dbgx80.INS.INX,   Dbgx80.TYPE_BC],
/* 0x04 */  [Dbgx80.INS.INR,   Dbgx80.TYPE_B],
/* 0x05 */  [Dbgx80.INS.DCR,   Dbgx80.TYPE_B],
/* 0x06 */  [Dbgx80.INS.MVI,   Dbgx80.TYPE_B,     Dbgx80.TYPE_IMM],
/* 0x07 */  [Dbgx80.INS.RLC],
/* 0x08 */  [Dbgx80.INS.NOP,   Dbgx80.TYPE_UNDOC],
/* 0x09 */  [Dbgx80.INS.DAD,   Dbgx80.TYPE_HL   | Dbgx80.TYPE_OPT, Dbgx80.TYPE_BC],
/* 0x0A */  [Dbgx80.INS.LDAX,  Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_BC   | Dbgx80.TYPE_MEM],
/* 0x0B */  [Dbgx80.INS.DCX,   Dbgx80.TYPE_BC],
/* 0x0C */  [Dbgx80.INS.INR,   Dbgx80.TYPE_C],
/* 0x0D */  [Dbgx80.INS.DCR,   Dbgx80.TYPE_C],
/* 0x0E */  [Dbgx80.INS.MVI,   Dbgx80.TYPE_C,     Dbgx80.TYPE_IMM],
/* 0x0F */  [Dbgx80.INS.RRC],
/* 0x10 */  [Dbgx80.INS.NOP,   Dbgx80.TYPE_UNDOC],
/* 0x11 */  [Dbgx80.INS.LXI,   Dbgx80.TYPE_DE,    Dbgx80.TYPE_IMM],
/* 0x12 */  [Dbgx80.INS.STAX,  Dbgx80.TYPE_DE   | Dbgx80.TYPE_MEM, Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT],
/* 0x13 */  [Dbgx80.INS.INX,   Dbgx80.TYPE_DE],
/* 0x14 */  [Dbgx80.INS.INR,   Dbgx80.TYPE_D],
/* 0x15 */  [Dbgx80.INS.DCR,   Dbgx80.TYPE_D],
/* 0x16 */  [Dbgx80.INS.MVI,   Dbgx80.TYPE_D,     Dbgx80.TYPE_IMM],
/* 0x17 */  [Dbgx80.INS.RAL],
/* 0x18 */  [Dbgx80.INS.NOP,   Dbgx80.TYPE_UNDOC],
/* 0x19 */  [Dbgx80.INS.DAD,   Dbgx80.TYPE_HL   | Dbgx80.TYPE_OPT, Dbgx80.TYPE_DE],
/* 0x1A */  [Dbgx80.INS.LDAX,  Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_DE   | Dbgx80.TYPE_MEM],
/* 0x1B */  [Dbgx80.INS.DCX,   Dbgx80.TYPE_DE],
/* 0x1C */  [Dbgx80.INS.INR,   Dbgx80.TYPE_E],
/* 0x1D */  [Dbgx80.INS.DCR,   Dbgx80.TYPE_E],
/* 0x1E */  [Dbgx80.INS.MVI,   Dbgx80.TYPE_E,     Dbgx80.TYPE_IMM],
/* 0x1F */  [Dbgx80.INS.RAR],
/* 0x20 */  [Dbgx80.INS.NOP,   Dbgx80.TYPE_UNDOC],
/* 0x21 */  [Dbgx80.INS.LXI,   Dbgx80.TYPE_HL,    Dbgx80.TYPE_IMM],
/* 0x22 */  [Dbgx80.INS.SHLD,  Dbgx80.TYPE_ADDR | Dbgx80.TYPE_MEM, Dbgx80.TYPE_HL   | Dbgx80.TYPE_OPT],
/* 0x23 */  [Dbgx80.INS.INX,   Dbgx80.TYPE_HL],
/* 0x24 */  [Dbgx80.INS.INR,   Dbgx80.TYPE_H],
/* 0x25 */  [Dbgx80.INS.DCR,   Dbgx80.TYPE_H],
/* 0x26 */  [Dbgx80.INS.MVI,   Dbgx80.TYPE_H,     Dbgx80.TYPE_IMM],
/* 0x27 */  [Dbgx80.INS.DAA],
/* 0x28 */  [Dbgx80.INS.NOP,   Dbgx80.TYPE_UNDOC],
/* 0x29 */  [Dbgx80.INS.DAD,   Dbgx80.TYPE_HL   | Dbgx80.TYPE_OPT, Dbgx80.TYPE_HL],
/* 0x2A */  [Dbgx80.INS.LHLD,  Dbgx80.TYPE_HL   | Dbgx80.TYPE_OPT, Dbgx80.TYPE_ADDR | Dbgx80.TYPE_MEM],
/* 0x2B */  [Dbgx80.INS.DCX,   Dbgx80.TYPE_HL],
/* 0x2C */  [Dbgx80.INS.INR,   Dbgx80.TYPE_L],
/* 0x2D */  [Dbgx80.INS.DCR,   Dbgx80.TYPE_L],
/* 0x2E */  [Dbgx80.INS.MVI,   Dbgx80.TYPE_L,     Dbgx80.TYPE_IMM],
/* 0x2F */  [Dbgx80.INS.CMA,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT],
/* 0x30 */  [Dbgx80.INS.NOP,   Dbgx80.TYPE_UNDOC],
/* 0x31 */  [Dbgx80.INS.LXI,   Dbgx80.TYPE_SP,    Dbgx80.TYPE_IMM],
/* 0x32 */  [Dbgx80.INS.STA,   Dbgx80.TYPE_ADDR | Dbgx80.TYPE_MEM, Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT],
/* 0x33 */  [Dbgx80.INS.INX,   Dbgx80.TYPE_SP],
/* 0x34 */  [Dbgx80.INS.INR,   Dbgx80.TYPE_M],
/* 0x35 */  [Dbgx80.INS.DCR,   Dbgx80.TYPE_M],
/* 0x36 */  [Dbgx80.INS.MVI,   Dbgx80.TYPE_M,     Dbgx80.TYPE_IMM],
/* 0x37 */  [Dbgx80.INS.STC],
/* 0x38 */  [Dbgx80.INS.NOP,   Dbgx80.TYPE_UNDOC],
/* 0x39 */  [Dbgx80.INS.DAD,   Dbgx80.TYPE_HL   | Dbgx80.TYPE_OPT, Dbgx80.TYPE_SP],
/* 0x3A */  [Dbgx80.INS.LDA,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_ADDR | Dbgx80.TYPE_MEM],
/* 0x3B */  [Dbgx80.INS.DCX,   Dbgx80.TYPE_SP],
/* 0x3C */  [Dbgx80.INS.INR,   Dbgx80.TYPE_A],
/* 0x3D */  [Dbgx80.INS.DCR,   Dbgx80.TYPE_A],
/* 0x3E */  [Dbgx80.INS.MVI,   Dbgx80.TYPE_A,     Dbgx80.TYPE_IMM],
/* 0x3F */  [Dbgx80.INS.CMC],
/* 0x40 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_B,     Dbgx80.TYPE_B],
/* 0x41 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_B,     Dbgx80.TYPE_C],
/* 0x42 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_B,     Dbgx80.TYPE_D],
/* 0x43 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_B,     Dbgx80.TYPE_E],
/* 0x44 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_B,     Dbgx80.TYPE_H],
/* 0x45 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_B,     Dbgx80.TYPE_L],
/* 0x46 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_B,     Dbgx80.TYPE_M],
/* 0x47 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_B,     Dbgx80.TYPE_A],
/* 0x48 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_C,     Dbgx80.TYPE_B],
/* 0x49 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_C,     Dbgx80.TYPE_C],
/* 0x4A */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_C,     Dbgx80.TYPE_D],
/* 0x4B */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_C,     Dbgx80.TYPE_E],
/* 0x4C */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_C,     Dbgx80.TYPE_H],
/* 0x4D */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_C,     Dbgx80.TYPE_L],
/* 0x4E */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_C,     Dbgx80.TYPE_M],
/* 0x4F */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_C,     Dbgx80.TYPE_A],
/* 0x50 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_D,     Dbgx80.TYPE_B],
/* 0x51 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_D,     Dbgx80.TYPE_C],
/* 0x52 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_D,     Dbgx80.TYPE_D],
/* 0x53 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_D,     Dbgx80.TYPE_E],
/* 0x54 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_D,     Dbgx80.TYPE_H],
/* 0x55 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_D,     Dbgx80.TYPE_L],
/* 0x56 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_D,     Dbgx80.TYPE_M],
/* 0x57 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_D,     Dbgx80.TYPE_A],
/* 0x58 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_E,     Dbgx80.TYPE_B],
/* 0x59 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_E,     Dbgx80.TYPE_C],
/* 0x5A */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_E,     Dbgx80.TYPE_D],
/* 0x5B */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_E,     Dbgx80.TYPE_E],
/* 0x5C */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_E,     Dbgx80.TYPE_H],
/* 0x5D */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_E,     Dbgx80.TYPE_L],
/* 0x5E */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_E,     Dbgx80.TYPE_M],
/* 0x5F */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_E,     Dbgx80.TYPE_A],
/* 0x60 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_H,     Dbgx80.TYPE_B],
/* 0x61 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_H,     Dbgx80.TYPE_C],
/* 0x62 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_H,     Dbgx80.TYPE_D],
/* 0x63 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_H,     Dbgx80.TYPE_E],
/* 0x64 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_H,     Dbgx80.TYPE_H],
/* 0x65 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_H,     Dbgx80.TYPE_L],
/* 0x66 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_H,     Dbgx80.TYPE_M],
/* 0x67 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_H,     Dbgx80.TYPE_A],
/* 0x68 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_L,     Dbgx80.TYPE_B],
/* 0x69 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_L,     Dbgx80.TYPE_C],
/* 0x6A */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_L,     Dbgx80.TYPE_D],
/* 0x6B */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_L,     Dbgx80.TYPE_E],
/* 0x6C */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_L,     Dbgx80.TYPE_H],
/* 0x6D */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_L,     Dbgx80.TYPE_L],
/* 0x6E */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_L,     Dbgx80.TYPE_M],
/* 0x6F */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_L,     Dbgx80.TYPE_A],
/* 0x70 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_M,     Dbgx80.TYPE_B],
/* 0x71 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_M,     Dbgx80.TYPE_C],
/* 0x72 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_M,     Dbgx80.TYPE_D],
/* 0x73 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_M,     Dbgx80.TYPE_E],
/* 0x74 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_M,     Dbgx80.TYPE_H],
/* 0x75 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_M,     Dbgx80.TYPE_L],
/* 0x76 */  [Dbgx80.INS.HLT],
/* 0x77 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_M,     Dbgx80.TYPE_A],
/* 0x78 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_A,     Dbgx80.TYPE_B],
/* 0x79 */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_A,     Dbgx80.TYPE_C],
/* 0x7A */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_A,     Dbgx80.TYPE_D],
/* 0x7B */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_A,     Dbgx80.TYPE_E],
/* 0x7C */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_A,     Dbgx80.TYPE_H],
/* 0x7D */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_A,     Dbgx80.TYPE_L],
/* 0x7E */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_A,     Dbgx80.TYPE_M],
/* 0x7F */  [Dbgx80.INS.MOV,   Dbgx80.TYPE_A,     Dbgx80.TYPE_A],
/* 0x80 */  [Dbgx80.INS.ADD,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_B],
/* 0x81 */  [Dbgx80.INS.ADD,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_C],
/* 0x82 */  [Dbgx80.INS.ADD,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_D],
/* 0x83 */  [Dbgx80.INS.ADD,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_E],
/* 0x84 */  [Dbgx80.INS.ADD,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_H],
/* 0x85 */  [Dbgx80.INS.ADD,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_L],
/* 0x86 */  [Dbgx80.INS.ADD,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_M],
/* 0x87 */  [Dbgx80.INS.ADD,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_A],
/* 0x88 */  [Dbgx80.INS.ADC,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_B],
/* 0x89 */  [Dbgx80.INS.ADC,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_C],
/* 0x8A */  [Dbgx80.INS.ADC,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_D],
/* 0x8B */  [Dbgx80.INS.ADC,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_E],
/* 0x8C */  [Dbgx80.INS.ADC,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_H],
/* 0x8D */  [Dbgx80.INS.ADC,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_L],
/* 0x8E */  [Dbgx80.INS.ADC,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_M],
/* 0x8F */  [Dbgx80.INS.ADC,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_A],
/* 0x90 */  [Dbgx80.INS.SUB,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_B],
/* 0x91 */  [Dbgx80.INS.SUB,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_C],
/* 0x92 */  [Dbgx80.INS.SUB,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_D],
/* 0x93 */  [Dbgx80.INS.SUB,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_E],
/* 0x94 */  [Dbgx80.INS.SUB,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_H],
/* 0x95 */  [Dbgx80.INS.SUB,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_L],
/* 0x96 */  [Dbgx80.INS.SUB,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_M],
/* 0x97 */  [Dbgx80.INS.SUB,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_A],
/* 0x98 */  [Dbgx80.INS.SBB,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_B],
/* 0x99 */  [Dbgx80.INS.SBB,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_C],
/* 0x9A */  [Dbgx80.INS.SBB,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_D],
/* 0x9B */  [Dbgx80.INS.SBB,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_E],
/* 0x9C */  [Dbgx80.INS.SBB,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_H],
/* 0x9D */  [Dbgx80.INS.SBB,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_L],
/* 0x9E */  [Dbgx80.INS.SBB,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_M],
/* 0x9F */  [Dbgx80.INS.SBB,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_A],
/* 0xA0 */  [Dbgx80.INS.ANA,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_B],
/* 0xA1 */  [Dbgx80.INS.ANA,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_C],
/* 0xA2 */  [Dbgx80.INS.ANA,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_D],
/* 0xA3 */  [Dbgx80.INS.ANA,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_E],
/* 0xA4 */  [Dbgx80.INS.ANA,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_H],
/* 0xA5 */  [Dbgx80.INS.ANA,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_L],
/* 0xA6 */  [Dbgx80.INS.ANA,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_M],
/* 0xA7 */  [Dbgx80.INS.ANA,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_A],
/* 0xA8 */  [Dbgx80.INS.XRA,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_B],
/* 0xA9 */  [Dbgx80.INS.XRA,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_C],
/* 0xAA */  [Dbgx80.INS.XRA,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_D],
/* 0xAB */  [Dbgx80.INS.XRA,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_E],
/* 0xAC */  [Dbgx80.INS.XRA,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_H],
/* 0xAD */  [Dbgx80.INS.XRA,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_L],
/* 0xAE */  [Dbgx80.INS.XRA,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_M],
/* 0xAF */  [Dbgx80.INS.XRA,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_A],
/* 0xB0 */  [Dbgx80.INS.ORA,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_B],
/* 0xB1 */  [Dbgx80.INS.ORA,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_C],
/* 0xB2 */  [Dbgx80.INS.ORA,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_D],
/* 0xB3 */  [Dbgx80.INS.ORA,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_E],
/* 0xB4 */  [Dbgx80.INS.ORA,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_H],
/* 0xB5 */  [Dbgx80.INS.ORA,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_L],
/* 0xB6 */  [Dbgx80.INS.ORA,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_M],
/* 0xB7 */  [Dbgx80.INS.ORA,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_A],
/* 0xB8 */  [Dbgx80.INS.CMP,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_B],
/* 0xB9 */  [Dbgx80.INS.CMP,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_C],
/* 0xBA */  [Dbgx80.INS.CMP,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_D],
/* 0xBB */  [Dbgx80.INS.CMP,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_E],
/* 0xBC */  [Dbgx80.INS.CMP,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_H],
/* 0xBD */  [Dbgx80.INS.CMP,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_L],
/* 0xBE */  [Dbgx80.INS.CMP,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_M],
/* 0xBF */  [Dbgx80.INS.CMP,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_A],
/* 0xC0 */  [Dbgx80.INS.RNZ],
/* 0xC1 */  [Dbgx80.INS.POP,   Dbgx80.TYPE_BC],
/* 0xC2 */  [Dbgx80.INS.JNZ,   Dbgx80.TYPE_ADDR],
/* 0xC3 */  [Dbgx80.INS.JMP,   Dbgx80.TYPE_ADDR],
/* 0xC4 */  [Dbgx80.INS.CNZ,   Dbgx80.TYPE_ADDR],
/* 0xC5 */  [Dbgx80.INS.PUSH,  Dbgx80.TYPE_BC],
/* 0xC6 */  [Dbgx80.INS.ADI,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_IMM | Dbgx80.TYPE_BYTE],
/* 0xC7 */  [Dbgx80.INS.RST,   Dbgx80.TYPE_INT],
/* 0xC8 */  [Dbgx80.INS.RZ],
/* 0xC9 */  [Dbgx80.INS.RET],
/* 0xCA */  [Dbgx80.INS.JZ,    Dbgx80.TYPE_ADDR],
/* 0xCB */  [Dbgx80.INS.JMP,   Dbgx80.TYPE_ADDR | Dbgx80.TYPE_UNDOC],
/* 0xCC */  [Dbgx80.INS.CZ,    Dbgx80.TYPE_ADDR],
/* 0xCD */  [Dbgx80.INS.CALL,  Dbgx80.TYPE_ADDR],
/* 0xCE */  [Dbgx80.INS.ACI,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_IMM | Dbgx80.TYPE_BYTE],
/* 0xCF */  [Dbgx80.INS.RST,   Dbgx80.TYPE_INT],
/* 0xD0 */  [Dbgx80.INS.RNC],
/* 0xD1 */  [Dbgx80.INS.POP,   Dbgx80.TYPE_DE],
/* 0xD2 */  [Dbgx80.INS.JNC,   Dbgx80.TYPE_ADDR],
/* 0xD3 */  [Dbgx80.INS.OUT,   Dbgx80.TYPE_IMM  | Dbgx80.TYPE_BYTE,Dbgx80.TYPE_A   | Dbgx80.TYPE_OPT],
/* 0xD4 */  [Dbgx80.INS.CNC,   Dbgx80.TYPE_ADDR],
/* 0xD5 */  [Dbgx80.INS.PUSH,  Dbgx80.TYPE_DE],
/* 0xD6 */  [Dbgx80.INS.SUI,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_IMM | Dbgx80.TYPE_BYTE],
/* 0xD7 */  [Dbgx80.INS.RST,   Dbgx80.TYPE_INT],
/* 0xD8 */  [Dbgx80.INS.RC],
/* 0xD9 */  [Dbgx80.INS.RET,   Dbgx80.TYPE_UNDOC],
/* 0xDA */  [Dbgx80.INS.JC,    Dbgx80.TYPE_ADDR],
/* 0xDB */  [Dbgx80.INS.IN,    Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_IMM | Dbgx80.TYPE_BYTE],
/* 0xDC */  [Dbgx80.INS.CC,    Dbgx80.TYPE_ADDR],
/* 0xDD */  [Dbgx80.INS.CALL,  Dbgx80.TYPE_ADDR | Dbgx80.TYPE_UNDOC],
/* 0xDE */  [Dbgx80.INS.SBI,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_IMM | Dbgx80.TYPE_BYTE],
/* 0xDF */  [Dbgx80.INS.RST,   Dbgx80.TYPE_INT],
/* 0xE0 */  [Dbgx80.INS.RPO],
/* 0xE1 */  [Dbgx80.INS.POP,   Dbgx80.TYPE_HL],
/* 0xE2 */  [Dbgx80.INS.JPO,   Dbgx80.TYPE_ADDR],
/* 0xE3 */  [Dbgx80.INS.XTHL,  Dbgx80.TYPE_SP   | Dbgx80.TYPE_MEM| Dbgx80.TYPE_OPT,  Dbgx80.TYPE_HL | Dbgx80.TYPE_OPT],
/* 0xE4 */  [Dbgx80.INS.CPO,   Dbgx80.TYPE_ADDR],
/* 0xE5 */  [Dbgx80.INS.PUSH,  Dbgx80.TYPE_HL],
/* 0xE6 */  [Dbgx80.INS.ANI,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_IMM | Dbgx80.TYPE_BYTE],
/* 0xE7 */  [Dbgx80.INS.RST,   Dbgx80.TYPE_INT],
/* 0xE8 */  [Dbgx80.INS.RPE],
/* 0xE9 */  [Dbgx80.INS.PCHL,  Dbgx80.TYPE_HL],
/* 0xEA */  [Dbgx80.INS.JPE,   Dbgx80.TYPE_ADDR],
/* 0xEB */  [Dbgx80.INS.XCHG,  Dbgx80.TYPE_HL   | Dbgx80.TYPE_OPT, Dbgx80.TYPE_DE  | Dbgx80.TYPE_OPT],
/* 0xEC */  [Dbgx80.INS.CPE,   Dbgx80.TYPE_ADDR],
/* 0xED */  [Dbgx80.INS.CALL,  Dbgx80.TYPE_ADDR | Dbgx80.TYPE_UNDOC],
/* 0xEE */  [Dbgx80.INS.XRI,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_IMM | Dbgx80.TYPE_BYTE],
/* 0xEF */  [Dbgx80.INS.RST,   Dbgx80.TYPE_INT],
/* 0xF0 */  [Dbgx80.INS.RP],
/* 0xF1 */  [Dbgx80.INS.POP,   Dbgx80.TYPE_PSW],
/* 0xF2 */  [Dbgx80.INS.JP,    Dbgx80.TYPE_ADDR],
/* 0xF3 */  [Dbgx80.INS.DI],
/* 0xF4 */  [Dbgx80.INS.CP,    Dbgx80.TYPE_ADDR],
/* 0xF5 */  [Dbgx80.INS.PUSH,  Dbgx80.TYPE_PSW],
/* 0xF6 */  [Dbgx80.INS.ORI,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_IMM | Dbgx80.TYPE_BYTE],
/* 0xF7 */  [Dbgx80.INS.RST,   Dbgx80.TYPE_INT],
/* 0xF8 */  [Dbgx80.INS.RM],
/* 0xF9 */  [Dbgx80.INS.SPHL,  Dbgx80.TYPE_SP   | Dbgx80.TYPE_OPT, Dbgx80.TYPE_HL  | Dbgx80.TYPE_OPT],
/* 0xFA */  [Dbgx80.INS.JM,    Dbgx80.TYPE_ADDR],
/* 0xFB */  [Dbgx80.INS.EI],
/* 0xFC */  [Dbgx80.INS.CM,    Dbgx80.TYPE_ADDR],
/* 0xFD */  [Dbgx80.INS.CALL,  Dbgx80.TYPE_ADDR | Dbgx80.TYPE_UNDOC],
/* 0xFE */  [Dbgx80.INS.CPI,   Dbgx80.TYPE_A    | Dbgx80.TYPE_OPT, Dbgx80.TYPE_IMM | Dbgx80.TYPE_BYTE],
/* 0xFF */  [Dbgx80.INS.RST,   Dbgx80.TYPE_INT]
];

Dbgx80.CLASSES["Dbgx80"] = Dbgx80;
