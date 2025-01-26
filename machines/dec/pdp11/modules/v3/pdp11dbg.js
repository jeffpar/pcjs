/**
 * @fileoverview Debugger for PDP-11 CPUs
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import PDP11 from "./pdp11.js";
import Debugger from "../../../../modules/v3/debugger.js";

/**
 * Debugger for PDP-11 CPUs
 *
 * @class PDP11Dbg
 * @unrestricted
 */
export default class PDP11Dbg extends Debugger {
    /**
     * PDP11Dbg(idMachine, idDevice, config)
     *
     * @this {PDP11Dbg}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);
        this.opTable = PDP11Dbg.OPTABLE;
        this.aOpReserved = [];
        if (this.cpu.model < PDP11.MODEL_1140) {
            this.aOpReserved = this.aOpReserved.concat(PDP11Dbg.OP1140);
        }
        if (this.cpu.model < PDP11.MODEL_1145) {
            this.aOpReserved = this.aOpReserved.concat(PDP11Dbg.OP1145);
        }
        this.maxOpcodeLength = 6;
    }

    /**
     * unassemble(address, opcodes, annotation)
     *
     * Overrides Debugger's default unassemble() function with one that understands PDP-11 instructions.
     *
     * @this {PDP11Dbg}
     * @param {Address} address (advanced by the number of processed opcodes)
     * @param {Array.<number>} opcodes (each processed opcode is shifted out, reducing the size of the array)
     * @param {string} [annotation] (optional string to append to the final result)
     * @returns {string}
     */
    unassemble(address, opcodes, annotation)
    {
        let sAddr = this.dumpAddress(address), sWords = "";
        let sLabel = this.getSymbolName(address, Debugger.SYMBOL.LABEL);
        let sComment = this.getSymbolName(address, Debugger.SYMBOL.COMMENT);

        /**
         * toBaseWord(word)
         *
         * @param {number} word
         * @returns {string}
         */
        let toBaseWord = (word) => this.toBase(word, 0, 16, "");

        /**
         * getNextWord()
         *
         * @returns {number}
         */
        let getNextWord = () => {
            let word = opcodes.shift() | (opcodes.shift() << 8);
            sWords += toBaseWord(word) + ' ';
            this.addAddress(address, 2);
            return word;
        };

        /**
         * getOperand(opcode, type)
         *
         * If getOperand() returns an Array rather than a string, then the first element is the original
         * operand, and the second element is a comment containing additional information (eg, the target)
         * of the operand.
         *
         * @param {number} opcode
         * @param {number} type
         * @returns {string|Array.<string>}
         */
        let getOperand = (opcode, type) => {
            /**
             * Take care of OP_OTHER opcodes first; then all we'll have to worry about
             * next are OP_SRC or OP_DST opcodes.
             */
            let sOperand = "";
            let disp;
            let addr;
            let typeOther = type & PDP11Dbg.OP_OTHER;
            if (typeOther == PDP11Dbg.OP_BRANCH) {
                disp = ((opcode & 0xff) << 24) >> 23;
                addr = (address.off + disp) & 0xffff;
                sOperand = toBaseWord(addr);
            }
            else if (typeOther == PDP11Dbg.OP_DSTOFF) {
                disp = (opcode & 0x3f) << 1;
                addr = (address.off - disp) & 0xffff;
                sOperand = toBaseWord(addr);
            }
            else if (typeOther == PDP11Dbg.OP_DSTNUM3) {
                disp = (opcode & 0x07);
                sOperand = this.toBase(disp, 0, 3, "");
            }
            else if (typeOther == PDP11Dbg.OP_DSTNUM6) {
                disp = (opcode & 0x3f);
                sOperand = this.toBase(disp, 0, 6, "");
            }
            else if (typeOther == PDP11Dbg.OP_DSTNUM8) {
                disp = (opcode & 0xff);
                sOperand = this.toBase(disp, 0, 8, "");
            }
            else {
                /**
                 * Isolate all OP_SRC or OP_DST bits from opcode in the mode variable.
                 */
                let mode = opcode & type;

                /**
                 * Convert OP_SRC bits into OP_DST bits, since they use the same format.
                 */
                if (type & PDP11Dbg.OP_SRC) {
                    mode >>= 6;
                    type >>= 6;
                }
                if (type & PDP11Dbg.OP_DST) {
                    let wIndex;
                    let sTarget = null;
                    let reg = mode & PDP11Dbg.OP_DSTREG;
                    /**
                     * Note that opcodes that specify only REG bits in the type mask (ie, no MOD bits)
                     * will automatically default to OPMODE_REG below.
                     */
                    switch((mode & PDP11Dbg.OP_DSTMODE)) {

                    case PDP11.OPMODE.REG:                  // 0x0: REGISTER
                        sOperand = getRegName(reg);
                        break;

                    case PDP11.OPMODE.REGD:                 // 0x1: REGISTER DEFERRED
                        sOperand = '@' + getRegName(reg);
                        sTarget = getTarget(this.cpu.regsGen[reg]);
                        break;

                    case PDP11.OPMODE.POSTINC:              // 0x2: POST-INCREMENT
                        if (reg < 7) {
                            sOperand = '(' + getRegName(reg) + ")+";
                        } else {
                            /**
                             * When using R7 (aka PC), POST-INCREMENT is known as IMMEDIATE
                             */
                            wIndex = getNextWord();
                            sOperand = '#' + toBaseWord(wIndex);
                        }
                        break;

                    case PDP11.OPMODE.POSTINCD:             // 0x3: POST-INCREMENT DEFERRED
                        if (reg < 7) {
                            sOperand = "@(" + getRegName(reg) + ")+";
                        } else {
                            /**
                             * When using R7 (aka PC), POST-INCREMENT DEFERRED is known as ABSOLUTE
                             */
                            wIndex = getNextWord();
                            sOperand = "@#" + toBaseWord(wIndex);
                            sTarget = getTarget(wIndex);
                        }
                        break;

                    case PDP11.OPMODE.PREDEC:               // 0x4: PRE-DECREMENT
                        sOperand = "-(" + getRegName(reg) + ")";
                        break;

                    case PDP11.OPMODE.PREDECD:              // 0x5: PRE-DECREMENT DEFERRED
                        sOperand = "@-(" + getRegName(reg) + ")";
                        break;

                    case PDP11.OPMODE.INDEX:                // 0x6: INDEX
                        wIndex = getNextWord();
                        sOperand = toBaseWord(wIndex) + '(' + getRegName(reg) + ')';
                        if (reg == 7) {
                            /**
                             * When using R7 (aka PC), INDEX is known as RELATIVE.  However, instead of displaying
                             * such an instruction like this:
                             *
                             *  016156: 010167 001300          MOV   R1,1300(PC)            ; @017462
                             *
                             * with the effective address display to the far right, let's display it like this instead:
                             *
                             *  016156: 010167 001300          MOV   R1,017462
                             *
                             * because you can still clearly see PC-relative offset (eg, 001300) as part of the disassembly.
                             *
                             *      sOperand = [sOperand, toBaseWord((wIndex + address.off) & 0xffff)];
                             */
                            sOperand = toBaseWord(wIndex = (wIndex + address.off) & 0xffff);
                            sTarget = getTarget(wIndex);
                        }
                        break;

                    case PDP11.OPMODE.INDEXD:               // 0x7: INDEX DEFERRED
                        wIndex = getNextWord();
                        sOperand = '@' + toBaseWord(wIndex) + '(' + getRegName(reg) + ')';
                        if (reg == 7) {
                            /**
                             * When using R7 (aka PC), INDEX DEFERRED is known as RELATIVE DEFERRED.  And for the same
                             * reasons articulated above, we now display the effective address inline.
                             *
                             *      sOperand = [sOperand, toBaseWord((wIndex + address.off) & 0xffff)];
                             */
                            sOperand = '@' + toBaseWord(wIndex = (wIndex + address.off) & 0xffff);
                            sTarget = getTarget(this.cpu.readWordSafe(wIndex));
                        }
                        break;

                    default:
                        this.assert(false);
                        break;
                    }

                    if (sTarget) sOperand = [sOperand, sTarget];
                }
                else {
                    this.assert(false);
                }
            }
            return sOperand;
        };

        /**
         * getRegName(iReg)
         *
         * @param {number} iReg (normally 0-7)
         * @returns {string}
         */
        let getRegName = (iReg) => PDP11Dbg.REGNAMES[iReg] || "?";

        /**
         * getTarget(addr)
         *
         * @param {number} addr
         * @returns {string|null}
         */
        let getTarget = (addr) => {
            let a = this.cpu.getAddrInfo(addr);
            let addrPhysical = a[0];
            // if (addrPhysical >= this.cpu.addrIOPage && addrPhysical < this.bus.addrIOPage) {
            //     addrPhysical = (addrPhysical - this.cpu.addrIOPage) + this.bus.addrIOPage;
            // }
            return null; // TODO: this.bus.getAddrInfo(addrPhysical);
        };

        let opcode = getNextWord();
        let opDesc, opNames = PDP11Dbg.OPNAMES;

        for (let mask in this.opTable) {
            let opMasks = this.opTable[mask];
            opDesc = opMasks[opcode & mask];
            if (opDesc) break;
        }

        if (!opDesc) opDesc = PDP11Dbg.OPNONE;

        let opNum = opDesc[0];
        if (this.aOpReserved.indexOf(opNum) >= 0) {
            opDesc = PDP11Dbg.OPNONE;
            opNum = opDesc[0];
        }

        let sOpcode = opNames[opNum];
        let sOperands = "", sTarget = "";
        let cOperands = opDesc.length - 1;
        if (!opNum && !cOperands) sOperands = toBaseWord(opcode);

        for (let iOperand = 1; iOperand <= cOperands; iOperand++) {

            let type = opDesc[iOperand];
            if (type == undefined) continue;

            let sOperand = getOperand(opcode, type);

            if (!sOperand || !sOperand.length) {
                sOperands = "INVALID";
                break;
            }

            /**
             * If getOperand() returns an Array rather than a string, then the first element is the original
             * operand, and the second element contains additional information (eg, the target) of the operand.
             */
            if (typeof sOperand != "string") {
                sTarget = sOperand[1];
                sOperand = sOperand[0];
            }

            if (sOperands.length > 0) sOperands += ',';
            sOperands += (sOperand || "???");
        }

        let result = this.sprintf("%s %-21s %-7s %s", sAddr, sWords, sOpcode, sOperands);
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
 * CPU opcode IDs
 *
 * Not listed: BLO (same as BCS) and BHIS (same as BCC).
 */
PDP11Dbg.OPS = {
    NONE:   0,      ADC:    1,      ADCB:   2,      ADD:    3,      ASL:    4,      ASLB:   5,      ASR:    6,      ASRB:   7,
    BCC:    8,      BCS:    9,      BEQ:    10,     BGE:    11,     BGT:    12,     BHI:    13,     BIC:    14,     BICB:   15,
    BIS:    16,     BISB:   17,     BIT:    18,     BITB:   19,     BLE:    20,     BLOS:   21,     BLT:    22,     BMI:    23,
    BNE:    24,     BPL:    25,     BPT:    26,     BR:     27,     BVC:    28,     BVS:    29,     CCC:    30,     CLC:    31,
    CLCN:   32,     CLCV:   33,     CLCVN:  34,     CLCVZ:  35,     CLCZ:   36,     CLCZN:  37,     CLN:    38,     CLR:    39,
    CLRB:   40,     CLV:    41,     CLVN:   42,     CLVZ:   43,     CLVZN:  44,     CLZ:    45,     CLZN:   46,     CMP:    47,
    CMPB:   48,     COM:    49,     COMB:   50,     DEC:    51,     DECB:   52,     INC:    53,     INCB:   54,     HALT:   55,
    JMP:    56,     JSR:    57,     MARK:   58,     MFPD:   59,     MFPI:   60,     MFPS:   61,     MOV:    62,     MOVB:   63,
    MTPD:   64,     MTPI:   65,     MTPS:   66,     NEG:    67,     NEGB:   68,     NOP:    69,     RESET:  70,     ROL:    71,
    ROLB:   72,     ROR:    73,     RORB:   74,     RTI:    75,     RTS:    76,     SBC:    77,     SBCB:   78,     SCC:    79,
    SEC:    80,     SECN:   81,     SECV:   82,     SECVN:  83,     SECVZ:  84,     SECZ:   85,     SECZN:  86,     SEN:    87,
    SEV:    88,     SEVN:   89,     SEVZ:   90,     SEVZN:  91,     SEZ:    92,     SEZN:   93,     SUB:    94,     SWAB:   95,
    SXT:    96,     TST:    97,     TSTB:   98,     WAIT:   99,     MUL:    100,    DIV:    101,    ASH:    102,    ASHC:   103,
    XOR:    104,    SOB:    105,    EMT:    106,    TRAP:   107,    SPL:    108,    IOT:    109,    RTT:    110,    MFPT:   111
};
/**
 * CPU opcode names, indexed by CPU opcode ordinal (above)
 */
PDP11Dbg.OPNAMES = [
    ".WORD",        "ADC",          "ADCB",         "ADD",          "ASL",          "ASLB",         "ASR",          "ASRB",
    "BCC",          "BCS",          "BEQ",          "BGE",          "BGT",          "BHI",          "BIC",          "BICB",
    "BIS",          "BISB",         "BIT",          "BITB",         "BLE",          "BLOS",         "BLT",          "BMI",
    "BNE",          "BPL",          "BPT",          "BR",           "BVC",          "BVS",          "CCC",          "CLC",
    "CLCN",         "CLCV",         "CLCVN",        "CLCVZ",        "CLCZ",         "CLCZN",        "CLN",          "CLR",
    "CLRB",         "CLV",          "CLVN",         "CLVZ",         "CLVZN",        "CLZ",          "CLZN",         "CMP",
    "CMPB",         "COM",          "COMB",         "DEC",          "DECB",         "INC",          "INCB",         "HALT",
    "JMP",          "JSR",          "MARK",         "MFPD",         "MFPI",         "MFPS",         "MOV",          "MOVB",
    "MTPD",         "MTPI",         "MTPS",         "NEG",          "NEGB",         "NOP",          "RESET",        "ROL",
    "ROLB",         "ROR",          "RORB",         "RTI",          "RTS",          "SBC",          "SBCB",         "SCC",
    "SEC",          "SECN",         "SECV",         "SECVN",        "SECVZ",        "SECZ",         "SECZN",        "SEN",
    "SEV",          "SEVN",         "SEVZ",         "SEVZN",        "SEZ",          "SEZN",         "SUB",          "SWAB",
    "SXT",          "TST",          "TSTB",         "WAIT",         "MUL",          "DIV",          "ASH",          "ASHC",
    "XOR",          "SOB",          "EMT",          "TRAP",         "SPL",          "IOT",          "RTT",          "MFPT"
];
/**
 * Register numbers 0-7 are reserved for cpu.regsGen, 8-15 are reserved for cpu.regsAlt, and 16-19 for cpu.regsAltStack.
 */
PDP11Dbg.REG_PS        = 20;
PDP11Dbg.REG_PI        = 21;
PDP11Dbg.REG_ER        = 22;
PDP11Dbg.REG_SL        = 23;
PDP11Dbg.REG_M0        = 24;
PDP11Dbg.REG_M1        = 25;
PDP11Dbg.REG_M2        = 26;
PDP11Dbg.REG_M3        = 27;
PDP11Dbg.REG_AR        = 28;           // ADDRESS register; see Panel's getAR() and setAR()
PDP11Dbg.REG_DR        = 29;           // DISPLAY/DATA register; see Panel's getDR() and setDR()
PDP11Dbg.REG_SR        = 30;           // SWITCH register; see Panel's getSR() and setSR()
PDP11Dbg.REGS = {
    "SP":   6,
    "PC":   7,
    "PS":   PDP11Dbg.REG_PS,
    "PI":   PDP11Dbg.REG_PI,
    "ER":   PDP11Dbg.REG_ER,
    "SL":   PDP11Dbg.REG_SL,
    "M0":   PDP11Dbg.REG_M0,
    "M1":   PDP11Dbg.REG_M1,
    "M2":   PDP11Dbg.REG_M2,
    "M3":   PDP11Dbg.REG_M3,
    "AR":   PDP11Dbg.REG_AR,
    "DR":   PDP11Dbg.REG_DR,
    "SR":   PDP11Dbg.REG_SR
};
PDP11Dbg.REGNAMES = [
    "R0", "R1", "R2", "R3", "R4", "R5", "SP", "PC",
    "A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7",
    "S0", "S1", "S2", "S3",
    "PS", "PI", "ER", "SL", "M0", "M1", "M2", "M3",
    "AR", "DR", "SR"
];
PDP11Dbg.MODES = ["KI","KD","SI","SD","??","??","UI","UD"];
/**
 * Operand type masks; anything that's not covered by OP_SRC or OP_DST must be a OP_OTHER value.
 */
PDP11Dbg.OP_DSTREG   = PDP11.OPREG.MASK;
PDP11Dbg.OP_DSTMODE  = PDP11.OPMODE.MASK;
PDP11Dbg.OP_DST      = (PDP11Dbg.OP_DSTMODE | PDP11Dbg.OP_DSTREG);
PDP11Dbg.OP_SRCREG   = PDP11.OPREG.MASK << 6;
PDP11Dbg.OP_SRCMODE  = PDP11.OPMODE.MASK << 6;
PDP11Dbg.OP_SRC      = (PDP11Dbg.OP_SRCMODE | PDP11Dbg.OP_SRCREG);
PDP11Dbg.OP_BRANCH   = 0x1000;
PDP11Dbg.OP_DSTOFF   = 0x2000;
PDP11Dbg.OP_DSTNUM3  = 0x3000;       // DST 3-bit number (ie, just the DSTREG field)
PDP11Dbg.OP_DSTNUM6  = 0x6000;       // DST 6-bit number (ie, both the DSTREG and DSTMODE fields)
PDP11Dbg.OP_DSTNUM8  = 0x8000;       // DST 8-bit number
PDP11Dbg.OP_OTHER    = 0xF000;
/**
 * The OPTABLE contains opcode masks, and each mask refers to table of possible values, and each
 * value refers to an array that contains:
 *
 *      [0]: {number} of the opcode name (see OP.*)
 *      [1]: {number} containing the first operand type bit(s), if any
 *      [2]: {number} containing the second operand type bit(s), if any
 *
 * Note that, by convention, opcodes that require two operands list the SRC operand first and DST operand
 * second (ie, the OPPOSITE of the Intel convention).
 *
 * Also note that, for some of the newer PDP-11 opcodes (eg, MUL, DIV, ASH, ASHC), the location of the
 * opcode's SRC and DST bits are reversed.  This is why, for example, you'll see the MUL instruction defined
 * below as having OP_DST for the first operand and OP_SRCREG for the second operand.  This does NOT mean
 * that the opcode's destination operand is being listed first, but rather that the bits describing the source
 * operand are in the opcode's OP_DST field.
 */
PDP11Dbg.OPTABLE = {
    0xF000: {
        0x1000: [PDP11Dbg.OPS.MOV,     PDP11Dbg.OP_SRC,         PDP11Dbg.OP_DST],        // 01SSDD
        0x2000: [PDP11Dbg.OPS.CMP,     PDP11Dbg.OP_SRC,         PDP11Dbg.OP_DST],        // 02SSDD
        0x3000: [PDP11Dbg.OPS.BIT,     PDP11Dbg.OP_SRC,         PDP11Dbg.OP_DST],        // 03SSDD
        0x4000: [PDP11Dbg.OPS.BIC,     PDP11Dbg.OP_SRC,         PDP11Dbg.OP_DST],        // 04SSDD
        0x5000: [PDP11Dbg.OPS.BIS,     PDP11Dbg.OP_SRC,         PDP11Dbg.OP_DST],        // 05SSDD
        0x6000: [PDP11Dbg.OPS.ADD,     PDP11Dbg.OP_SRC,         PDP11Dbg.OP_DST],        // 06SSDD
        0x9000: [PDP11Dbg.OPS.MOVB,    PDP11Dbg.OP_SRC,         PDP11Dbg.OP_DST],        // 11SSDD
        0xA000: [PDP11Dbg.OPS.CMPB,    PDP11Dbg.OP_SRC,         PDP11Dbg.OP_DST],        // 12SSDD
        0xB000: [PDP11Dbg.OPS.BITB,    PDP11Dbg.OP_SRC,         PDP11Dbg.OP_DST],        // 13SSDD
        0xC000: [PDP11Dbg.OPS.BICB,    PDP11Dbg.OP_SRC,         PDP11Dbg.OP_DST],        // 14SSDD
        0xD000: [PDP11Dbg.OPS.BISB,    PDP11Dbg.OP_SRC,         PDP11Dbg.OP_DST],        // 15SSDD
        0xE000: [PDP11Dbg.OPS.SUB,     PDP11Dbg.OP_SRC,         PDP11Dbg.OP_DST]         // 16SSDD
    },
    0xFE00: {
        0x0800: [PDP11Dbg.OPS.JSR,     PDP11Dbg.OP_SRCREG,      PDP11Dbg.OP_DST],        // 004RDD
        0x7000: [PDP11Dbg.OPS.MUL,     PDP11Dbg.OP_DST,         PDP11Dbg.OP_SRCREG],     // 070RSS
        0x7200: [PDP11Dbg.OPS.DIV,     PDP11Dbg.OP_DST,         PDP11Dbg.OP_SRCREG],     // 071RSS
        0x7400: [PDP11Dbg.OPS.ASH,     PDP11Dbg.OP_DST,         PDP11Dbg.OP_SRCREG],     // 072RSS
        0x7600: [PDP11Dbg.OPS.ASHC,    PDP11Dbg.OP_DST,         PDP11Dbg.OP_SRCREG],     // 073RSS
        0x7800: [PDP11Dbg.OPS.XOR,     PDP11Dbg.OP_SRCREG,      PDP11Dbg.OP_DST],        // 074RDD
        0x7E00: [PDP11Dbg.OPS.SOB,     PDP11Dbg.OP_SRCREG,      PDP11Dbg.OP_DSTOFF]      // 077Rnn
    },
    0xFF00: {
        0x0100: [PDP11Dbg.OPS.BR,      PDP11Dbg.OP_BRANCH],
        0x0200: [PDP11Dbg.OPS.BNE,     PDP11Dbg.OP_BRANCH],
        0x0300: [PDP11Dbg.OPS.BEQ,     PDP11Dbg.OP_BRANCH],
        0x0400: [PDP11Dbg.OPS.BGE,     PDP11Dbg.OP_BRANCH],
        0x0500: [PDP11Dbg.OPS.BLT,     PDP11Dbg.OP_BRANCH],
        0x0600: [PDP11Dbg.OPS.BGT,     PDP11Dbg.OP_BRANCH],
        0x0700: [PDP11Dbg.OPS.BLE,     PDP11Dbg.OP_BRANCH],
        0x8000: [PDP11Dbg.OPS.BPL,     PDP11Dbg.OP_BRANCH],
        0x8100: [PDP11Dbg.OPS.BMI,     PDP11Dbg.OP_BRANCH],
        0x8200: [PDP11Dbg.OPS.BHI,     PDP11Dbg.OP_BRANCH],
        0x8300: [PDP11Dbg.OPS.BLOS,    PDP11Dbg.OP_BRANCH],
        0x8400: [PDP11Dbg.OPS.BVC,     PDP11Dbg.OP_BRANCH],
        0x8500: [PDP11Dbg.OPS.BVS,     PDP11Dbg.OP_BRANCH],
        0x8600: [PDP11Dbg.OPS.BCC,     PDP11Dbg.OP_BRANCH],
        0x8700: [PDP11Dbg.OPS.BCS,     PDP11Dbg.OP_BRANCH],
        0x8800: [PDP11Dbg.OPS.EMT,     PDP11Dbg.OP_DSTNUM8],      // 104000..104377
        0x8900: [PDP11Dbg.OPS.TRAP,    PDP11Dbg.OP_DSTNUM8]       // 104400..104777
    },
    0xFFC0: {
        0x0040: [PDP11Dbg.OPS.JMP,     PDP11Dbg.OP_DST],          // 0001DD
        0x00C0: [PDP11Dbg.OPS.SWAB,    PDP11Dbg.OP_DST],          // 0003DD
        0x0A00: [PDP11Dbg.OPS.CLR,     PDP11Dbg.OP_DST],          // 0050DD
        0x0A40: [PDP11Dbg.OPS.COM,     PDP11Dbg.OP_DST],          // 0051DD
        0x0A80: [PDP11Dbg.OPS.INC,     PDP11Dbg.OP_DST],          // 0052DD
        0x0AC0: [PDP11Dbg.OPS.DEC,     PDP11Dbg.OP_DST],          // 0053DD
        0x0B00: [PDP11Dbg.OPS.NEG,     PDP11Dbg.OP_DST],          // 0054DD
        0x0B40: [PDP11Dbg.OPS.ADC,     PDP11Dbg.OP_DST],          // 0055DD
        0x0B80: [PDP11Dbg.OPS.SBC,     PDP11Dbg.OP_DST],          // 0056DD
        0x0BC0: [PDP11Dbg.OPS.TST,     PDP11Dbg.OP_DST],          // 0057DD
        0x0C00: [PDP11Dbg.OPS.ROR,     PDP11Dbg.OP_DST],          // 0060DD
        0x0C40: [PDP11Dbg.OPS.ROL,     PDP11Dbg.OP_DST],          // 0061DD
        0x0C80: [PDP11Dbg.OPS.ASR,     PDP11Dbg.OP_DST],          // 0062DD
        0x0CC0: [PDP11Dbg.OPS.ASL,     PDP11Dbg.OP_DST],          // 0063DD
        0x0D00: [PDP11Dbg.OPS.MARK,    PDP11Dbg.OP_DSTNUM6],      // 0064nn
        0x0D40: [PDP11Dbg.OPS.MFPI,    PDP11Dbg.OP_DST],          // 0065SS
        0x0D80: [PDP11Dbg.OPS.MTPI,    PDP11Dbg.OP_DST],          // 0066DD
        0x0DC0: [PDP11Dbg.OPS.SXT,     PDP11Dbg.OP_DST],          // 0067DD
        0x8A00: [PDP11Dbg.OPS.CLRB,    PDP11Dbg.OP_DST],          // 1050DD
        0x8A40: [PDP11Dbg.OPS.COMB,    PDP11Dbg.OP_DST],          // 1051DD
        0x8A80: [PDP11Dbg.OPS.INCB,    PDP11Dbg.OP_DST],          // 1052DD
        0x8AC0: [PDP11Dbg.OPS.DECB,    PDP11Dbg.OP_DST],          // 1053DD
        0x8B00: [PDP11Dbg.OPS.NEGB,    PDP11Dbg.OP_DST],          // 1054DD
        0x8B40: [PDP11Dbg.OPS.ADCB,    PDP11Dbg.OP_DST],          // 1055DD
        0x8B80: [PDP11Dbg.OPS.SBCB,    PDP11Dbg.OP_DST],          // 1056DD
        0x8BC0: [PDP11Dbg.OPS.TSTB,    PDP11Dbg.OP_DST],          // 1057DD
        0x8C00: [PDP11Dbg.OPS.RORB,    PDP11Dbg.OP_DST],          // 1060DD
        0x8C40: [PDP11Dbg.OPS.ROLB,    PDP11Dbg.OP_DST],          // 1061DD
        0x8C80: [PDP11Dbg.OPS.ASRB,    PDP11Dbg.OP_DST],          // 1062DD
        0x8CC0: [PDP11Dbg.OPS.ASLB,    PDP11Dbg.OP_DST],          // 1063DD
        0x8D00: [PDP11Dbg.OPS.MTPS,    PDP11Dbg.OP_DST],          // 1064SS (only on LSI-11)
        0x8D40: [PDP11Dbg.OPS.MFPD,    PDP11Dbg.OP_DST],          // 1065DD (same as MFPI if no separate instruction/data spaces)
        0x8D80: [PDP11Dbg.OPS.MTPD,    PDP11Dbg.OP_DST],          // 1066DD (same as MTPI if no separate instruction/data spaces)
        0x8DC0: [PDP11Dbg.OPS.MFPS,    PDP11Dbg.OP_DST]           // 1067SS (only on LSI-11)
    },
    0xFFF8: {
        0x0080: [PDP11Dbg.OPS.RTS,     PDP11Dbg.OP_DSTREG],       // 00020R
        0x0098: [PDP11Dbg.OPS.SPL,     PDP11Dbg.OP_DSTNUM3]       // 00023N
    },
    0xFFFF: {
        0x0000: [PDP11Dbg.OPS.HALT],                                   // 000000
        0x0001: [PDP11Dbg.OPS.WAIT],                                   // 000001
        0x0002: [PDP11Dbg.OPS.RTI],                                    // 000002
        0x0003: [PDP11Dbg.OPS.BPT],                                    // 000003
        0x0004: [PDP11Dbg.OPS.IOT],                                    // 000004
        0x0005: [PDP11Dbg.OPS.RESET],                                  // 000005
        0x0006: [PDP11Dbg.OPS.RTT],                                    // 000006
        0x0007: [PDP11Dbg.OPS.MFPT],                                   // 000007 (only on PDP-11/44 & KB11-EM?)
        0x00A0: [PDP11Dbg.OPS.NOP],
        0x00A1: [PDP11Dbg.OPS.CLC],
        0x00A2: [PDP11Dbg.OPS.CLV],
        0x00A3: [PDP11Dbg.OPS.CLCV],
        0x00A4: [PDP11Dbg.OPS.CLZ],
        0x00A5: [PDP11Dbg.OPS.CLCZ],
        0x00A6: [PDP11Dbg.OPS.CLVZ],
        0x00A7: [PDP11Dbg.OPS.CLCVZ],
        0x00A8: [PDP11Dbg.OPS.CLN],
        0x00A9: [PDP11Dbg.OPS.CLCN],
        0x00AA: [PDP11Dbg.OPS.CLVN],
        0x00AB: [PDP11Dbg.OPS.CLCVN],
        0x00AC: [PDP11Dbg.OPS.CLZN],
        0x00AD: [PDP11Dbg.OPS.CLCZN],
        0x00AE: [PDP11Dbg.OPS.CLVZN],
        0x00AF: [PDP11Dbg.OPS.CCC],                                    // aka CLCVZN
        0x00B0: [PDP11Dbg.OPS.NOP],
        0x00B1: [PDP11Dbg.OPS.SEC],
        0x00B2: [PDP11Dbg.OPS.SEV],
        0x00B3: [PDP11Dbg.OPS.SECV],
        0x00B4: [PDP11Dbg.OPS.SEZ],
        0x00B5: [PDP11Dbg.OPS.SECZ],
        0x00B6: [PDP11Dbg.OPS.SEVZ],
        0x00B7: [PDP11Dbg.OPS.SECVZ],
        0x00B8: [PDP11Dbg.OPS.SEN],
        0x00B9: [PDP11Dbg.OPS.SECN],
        0x00BA: [PDP11Dbg.OPS.SEVN],
        0x00BB: [PDP11Dbg.OPS.SECVN],
        0x00BC: [PDP11Dbg.OPS.SEZN],
        0x00BD: [PDP11Dbg.OPS.SECZN],
        0x00BE: [PDP11Dbg.OPS.SEVZN],
        0x00BF: [PDP11Dbg.OPS.SCC]                                     // aka SECVZN
    }
};
PDP11Dbg.OPNONE = [PDP11Dbg.OPS.NONE];
/**
 * Table of opcodes added to the 11/40 and newer
 */
PDP11Dbg.OP1140 = [
    PDP11Dbg.OPS.MARK,
    PDP11Dbg.OPS.MFPI,
    PDP11Dbg.OPS.MTPI,
    PDP11Dbg.OPS.SXT,
    PDP11Dbg.OPS.RTT,
    PDP11Dbg.OPS.MUL,
    PDP11Dbg.OPS.DIV,
    PDP11Dbg.OPS.ASH,
    PDP11Dbg.OPS.ASHC,
    PDP11Dbg.OPS.XOR,
    PDP11Dbg.OPS.SOB
];
/**
 * Table of opcodes added to the 11/45 and newer
 */
PDP11Dbg.OP1145 = [
    PDP11Dbg.OPS.SPL,
    PDP11Dbg.OPS.MFPD,
    PDP11Dbg.OPS.MTPD
];

PDP11Dbg.CLASSES["PDP11Dbg"] = PDP11Dbg;
