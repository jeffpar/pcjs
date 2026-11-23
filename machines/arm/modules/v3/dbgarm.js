/**
 * @fileoverview ARM Debugger
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2026 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Debugger from "../../../modules/v3/debugger.js";

/**
 * ARM Debugger
 *
 * The disassemblers are static functions (disasmARM() and disasmThumb()) that don't depend on any machine state,
 * so they can be used (and tested) independently of the Debugger.
 *
 * Since ARM and Thumb instructions can't be distinguished by inspection, unassemble() treats any odd address as
 * the address of a Thumb instruction (the same convention that BX uses); for an even address, it assumes the
 * instruction is whatever kind of instruction the CPU is currently executing.
 *
 * All Debugger addresses are virtual addresses, which are translated using the CPU's current page tables.
 *
 * @class DbgARM
 * @unrestricted
 */
export default class DbgARM extends Debugger {
    /**
     * DbgARM(idMachine, idDevice, config)
     *
     * @this {DbgARM}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);
        this.maxOpcodeLength = 4;
    }

    /**
     * unassemble(address, opcodes, annotation)
     *
     * Overrides Debugger's default unassemble() function with one that understands ARM and Thumb instructions.
     *
     * @this {DbgARM}
     * @param {Address} address (advanced by the number of processed opcodes)
     * @param {Array.<number>} opcodes (each processed opcode is shifted out, reducing the size of the array)
     * @param {string} [annotation] (optional string to append to the final result)
     * @returns {string}
     */
    unassemble(address, opcodes, annotation)
    {
        let fThumb = !!(address.off & 0x1) || this.cpu.fThumb;
        let addr = address.off & ~0x1;
        let cb, sBytes, result;

        if (fThumb) {
            let op = this.getWord(addr), opNext = this.getWord(addr + 2);
            result = DbgARM.disasmThumb(op, addr, opNext, this.cpu.fV5);
            cb = result[2] || 2;
            sBytes = this.sprintf("%04x", op) + (cb > 2? this.sprintf(" %04x", opNext) : "");
        } else {
            addr &= ~0x3;
            let op = this.getLong(addr);
            result = DbgARM.disasmARM(op, addr, this.cpu.fV5);
            cb = 4;
            sBytes = this.sprintf("%08x", op);
        }

        /**
         * If the instruction contains a PC-relative memory reference, show the contents of that memory.
         */
        let sOperands = result[1];
        if (result[3] != undefined) {
            sOperands += this.sprintf("  ; [%08x]=%08x", result[3], this.getLong(result[3]));
        }

        this.addAddress(address, cb);
        opcodes.length = 0;
        return this.sprintf("%08x: %-9s  %-8s %s", addr, sBytes, result[0], sOperands).trimEnd() + (annotation || "") + "\n";
    }

    /**
     * dumpAddress(address, bus)
     *
     * @this {DbgARM}
     * @param {Address} address
     * @param {Bus} [bus] (default is busMemory)
     * @returns {string}
     */
    dumpAddress(address, bus = this.busMemory)
    {
        return this.toBase(address.off, this.nDefaultRadix, 32, "");
    }

    /**
     * readAddress(address, advance, bus)
     *
     * Overrides the Debugger's readAddress(), because our addresses are virtual addresses.
     *
     * @this {DbgARM}
     * @param {Address} address
     * @param {number} [advance] (amount to advance address after read, if any)
     * @param {Bus} [bus] (default is busMemory)
     * @returns {number|undefined}
     */
    readAddress(address, advance, bus = this.busMemory)
    {
        this.cBreakIgnore++;
        let value;
        let addr = (bus == this.busMemory)? this.cpu.translateDebug(address.off) : address.off;
        if (addr != undefined) value = bus.readDirect(addr & bus.addrLimit);
        if (advance) this.addAddress(address, advance, bus);
        this.cBreakIgnore--;
        return value;
    }

    /**
     * writeAddress(address, value, bus)
     *
     * @this {DbgARM}
     * @param {Address} address
     * @param {number} value
     * @param {Bus} [bus] (default is busMemory)
     */
    writeAddress(address, value, bus = this.busMemory)
    {
        this.cBreakIgnore++;
        let addr = (bus == this.busMemory)? this.cpu.translateDebug(address.off) : address.off;
        if (addr != undefined) bus.writeDirect(addr & bus.addrLimit, value);
        this.cBreakIgnore--;
    }

    /**
     * getByte(addr)
     *
     * The disassembler uses these functions (instead of the CPU's) to read memory without side-effects
     * (eg, reading hardware registers) and without triggering any breakpoints or faults.
     *
     * @this {DbgARM}
     * @param {number} addr (virtual address)
     * @returns {number} (0-255, or 0 if the address isn't mapped)
     */
    getByte(addr)
    {
        this.cBreakIgnore++;
        let b = 0;
        addr = this.cpu.translateDebug(addr);
        if (addr != undefined) b = this.busMemory.readDirect(addr & this.busMemory.addrLimit) & 0xff;
        this.cBreakIgnore--;
        return b;
    }

    /**
     * getWord(addr)
     *
     * @this {DbgARM}
     * @param {number} addr
     * @returns {number} (0-65535)
     */
    getWord(addr)
    {
        return this.getByte(addr) | (this.getByte(addr + 1) << 8);
    }

    /**
     * getLong(addr)
     *
     * @this {DbgARM}
     * @param {number} addr
     * @returns {number}
     */
    getLong(addr)
    {
        return this.getWord(addr) | (this.getWord(addr + 2) << 16);
    }

    /**
     * disasmARM(op, addr, fV5)
     *
     * @param {number} op (32-bit ARM instruction)
     * @param {number} addr (address of the instruction)
     * @param {boolean} [fV5] (true to include ARMv5T instructions)
     * @returns {Array} ([mnemonic, operands, length, address of any PC-relative data])
     */
    static disasmARM(op, addr = 0, fV5 = false)
    {
        let reg = DbgARM.REGS, hex = (n, cch = 0) => DbgARM.hex(n, cch);
        let cond = op >>> 28, sCond = DbgARM.CONDS[cond];
        let rn = (op >>> 16) & 0xf, rd = (op >>> 12) & 0xf, rs = (op >>> 8) & 0xf, rm = op & 0xf;
        let sOp, sOperands = "", addrData;

        let unknown = () => ["DCD", hex(op >>> 0, 8), 4];

        if (cond == 0xf) {
            if (fV5 && (op & 0x0e000000) == 0x0a000000) {
                return ["BLX", hex((addr + 8 + ((op << 8) >> 6) + ((op >>> 23) & 2)) >>> 0, 8), 4];
            }
            return unknown();
        }

        switch ((op >>> 25) & 0x7) {

        case 0x0:
            if ((op & 0x90) == 0x90) {
                if (op & 0x60) {
                    let type = (op >>> 5) & 0x3;
                    if (op & 0x00100000) {
                        sOp = ["", "LDRH", "LDRSB", "LDRSH"][type];
                    } else {
                        if (type != 1) return unknown();
                        sOp = "STRH";
                    }
                    let sSign = (op & 0x00800000)? "" : "-";
                    let sOffset;
                    if (op & 0x00400000) {
                        let offset = ((op >>> 4) & 0xf0) | (op & 0xf);
                        sOffset = (offset || sSign)? "#" + sSign + hex(offset) : "";
                        if (rn == 15 && (op & 0x01000000)) addrData = (addr + 8 + (sSign? -offset : offset)) >>> 0;
                    } else {
                        sOffset = sSign + reg[rm];
                    }
                    return [sOp + sCond, reg[rd] + "," + DbgARM.address(reg[rn], sOffset, op), 4, addrData];
                }
                if (!(op & 0x0fc00000)) {
                    sOp = ((op & 0x00200000)? "MLA" : "MUL") + ((op & 0x00100000)? "S" : "") + sCond;
                    sOperands = reg[rn] + "," + reg[rm] + "," + reg[rs] + ((op & 0x00200000)? "," + reg[rd] : "");
                    return [sOp, sOperands, 4];
                }
                if ((op & 0x0f800000) == 0x00800000) {
                    sOp = ["UMULL", "UMLAL", "SMULL", "SMLAL"][(op >>> 21) & 0x3] + ((op & 0x00100000)? "S" : "") + sCond;
                    return [sOp, reg[rd] + "," + reg[rn] + "," + reg[rm] + "," + reg[rs], 4];
                }
                if ((op & 0x0fb00f00) == 0x01000000) {
                    return [((op & 0x00400000)? "SWPB" : "SWP") + sCond, reg[rd] + "," + reg[rm] + ",[" + reg[rn] + "]", 4];
                }
                return unknown();
            }
            if ((op & 0x01900000) == 0x01000000) {
                if ((op & 0x0fbf0fff) == 0x010f0000) {
                    return ["MRS" + sCond, reg[rd] + "," + ((op & 0x00400000)? "SPSR" : "CPSR"), 4];
                }
                if ((op & 0x0fb0fff0) == 0x0120f000) {
                    return ["MSR" + sCond, DbgARM.psr(op) + "," + reg[rm], 4];
                }
                if ((op & 0x0ffffff0) == 0x012fff10) {
                    return ["BX" + sCond, reg[rm], 4];
                }
                if (fV5) {
                    if ((op & 0x0ffffff0) == 0x012fff30) {
                        return ["BLX" + sCond, reg[rm], 4];
                    }
                    if ((op & 0x0fff0ff0) == 0x016f0f10) {
                        return ["CLZ" + sCond, reg[rd] + "," + reg[rm], 4];
                    }
                    if ((op & 0x0ff000f0) == 0x01200070) {
                        return ["BKPT", "#" + hex(((op >>> 4) & 0xfff0) | (op & 0xf)), 4];
                    }
                }
                return unknown();
            }
            /* falls through */

        case 0x1: {
            let opcode = (op >>> 21) & 0xf, sOperand;
            if (op & 0x02000000) {
                if ((op & 0x01900000) == 0x01000000) {
                    if (!(op & 0x00200000)) return unknown();
                    let imm = op & 0xff, rot = (op >>> 7) & 0x1e;
                    if (rot) imm = (imm >>> rot) | (imm << (32 - rot));
                    return ["MSR" + sCond, DbgARM.psr(op) + ",#" + hex(imm >>> 0), 4];
                }
                let imm = op & 0xff, rot = (op >>> 7) & 0x1e;
                if (rot) imm = (imm >>> rot) | (imm << (32 - rot));
                sOperand = "#" + hex(imm >>> 0);
                /**
                 * ADD and SUB with the PC as the base and an immediate offset are how ADR is assembled.
                 */
                if (rn == 15 && (opcode == 0x2 || opcode == 0x4)) {
                    sOperand += "  ; =" + hex((addr + 8 + (opcode == 0x4? imm : -imm)) >>> 0, 8);
                }
            } else {
                sOperand = reg[rm] + DbgARM.shift(op);
            }
            sOp = DbgARM.DATAOPS[opcode];
            if (opcode >= 0x8 && opcode <= 0xb) {
                sOperands = reg[rn] + "," + sOperand;
            } else {
                if (op & 0x00100000) sOp += "S";
                if (opcode == 0xd || opcode == 0xf) {
                    sOperands = reg[rd] + "," + sOperand;
                } else {
                    sOperands = reg[rd] + "," + reg[rn] + "," + sOperand;
                }
            }
            return [sOp + sCond, sOperands, 4];
        }

        case 0x3:
            if (op & 0x10) return unknown();
            /* falls through */

        case 0x2: {
            let sSign = (op & 0x00800000)? "" : "-";
            let sOffset;
            if (op & 0x02000000) {
                sOffset = sSign + reg[rm] + DbgARM.shift(op);
            } else {
                let offset = op & 0xfff;
                sOffset = (offset || sSign)? "#" + sSign + hex(offset) : "";
                if (rn == 15 && (op & 0x01000000) && !(op & 0x00400000)) addrData = (addr + 8 + (sSign? -offset : offset)) >>> 0;
            }
            sOp = ((op & 0x00100000)? "LDR" : "STR") + ((op & 0x00400000)? "B" : "") + ((op & 0x01200000) == 0x00200000? "T" : "") + sCond;
            return [sOp, reg[rd] + "," + DbgARM.address(reg[rn], sOffset, op), 4, addrData];
        }

        case 0x4:
            sOp = ((op & 0x00100000)? "LDM" : "STM") + ((op & 0x00800000)? "I" : "D") + ((op & 0x01000000)? "B" : "A") + sCond;
            sOperands = reg[rn] + ((op & 0x00200000)? "!" : "") + "," + DbgARM.list(op & 0xffff) + ((op & 0x00400000)? "^" : "");
            return [sOp, sOperands, 4];

        case 0x5:
            return [((op & 0x01000000)? "BL" : "B") + sCond, hex((addr + 8 + ((op << 8) >> 6)) >>> 0, 8), 4];

        case 0x6:
            sOp = ((op & 0x00100000)? "LDC" : "STC") + ((op & 0x00400000)? "L" : "") + sCond;
            sOperands = "p" + rs + ",c" + rd + "," + DbgARM.address(reg[rn], "#" + ((op & 0x00800000)? "" : "-") + hex((op & 0xff) << 2), op);
            return [sOp, sOperands, 4];

        default:
            if (op & 0x01000000) {
                return ["SWI" + sCond, "#" + hex(op & 0x00ffffff), 4];
            }
            if (op & 0x10) {
                sOp = ((op & 0x00100000)? "MRC" : "MCR") + sCond;
                sOperands = "p" + rs + "," + ((op >>> 21) & 0x7) + "," + reg[rd] + ",c" + rn + ",c" + rm + "," + ((op >>> 5) & 0x7);
            } else {
                sOp = "CDP" + sCond;
                sOperands = "p" + rs + "," + ((op >>> 20) & 0xf) + ",c" + rd + ",c" + rn + ",c" + rm + "," + ((op >>> 5) & 0x7);
            }
            return [sOp, sOperands, 4];
        }
    }

    /**
     * disasmThumb(op, addr, opNext, fV5)
     *
     * @param {number} op (16-bit Thumb instruction)
     * @param {number} addr (address of the instruction)
     * @param {number} [opNext] (the next 16-bit instruction, which is needed to display BL as one instruction)
     * @param {boolean} [fV5] (true to include ARMv5T instructions)
     * @returns {Array} ([mnemonic, operands, length, address of any PC-relative data])
     */
    static disasmThumb(op, addr = 0, opNext = 0, fV5 = false)
    {
        let reg = DbgARM.REGS, hex = (n, cch = 0) => DbgARM.hex(n, cch);
        let rd = op & 0x7, rs = (op >> 3) & 0x7, r8 = (op >> 8) & 0x7;
        let imm5 = (op >> 6) & 0x1f, imm8 = op & 0xff;
        let sOp, list, addrData;

        let unknown = () => ["DCW", hex(op, 4), 2];

        switch (op >> 11) {

        case 0x00:
        case 0x01:
        case 0x02:
            return [["LSL", "LSR", "ASR"][op >> 11], reg[rd] + "," + reg[rs] + ",#" + hex(imm5), 2];

        case 0x03:
            return [(op & 0x0200)? "SUB" : "ADD", reg[rd] + "," + reg[rs] + "," + ((op & 0x0400)? "#" + hex((op >> 6) & 0x7) : reg[(op >> 6) & 0x7]), 2];

        case 0x04:
        case 0x05:
        case 0x06:
        case 0x07:
            return [["MOV", "CMP", "ADD", "SUB"][(op >> 11) & 0x3], reg[r8] + ",#" + hex(imm8), 2];

        case 0x08:
            if (!(op & 0x0400)) {
                return [DbgARM.THUMBOPS[(op >> 6) & 0xf], reg[rd] + "," + reg[rs], 2];
            }
            rd |= (op >> 4) & 0x8;
            rs = (op >> 3) & 0xf;
            switch ((op >> 8) & 0x3) {
            case 0x0:
                return ["ADD", reg[rd] + "," + reg[rs], 2];
            case 0x1:
                return ["CMP", reg[rd] + "," + reg[rs], 2];
            case 0x2:
                return ["MOV", reg[rd] + "," + reg[rs], 2];
            default:
                if (op & 0x80) {
                    if (!fV5) return unknown();
                    return ["BLX", reg[rs], 2];
                }
                return ["BX", reg[rs], 2];
            }

        case 0x09:
            addrData = (((addr + 4) & ~0x3) + (imm8 << 2)) >>> 0;
            return ["LDR", reg[r8] + ",[PC,#" + hex(imm8 << 2) + "]", 2, addrData];

        case 0x0a:
        case 0x0b:
            sOp = ["STR", "STRH", "STRB", "LDRSB", "LDR", "LDRH", "LDRB", "LDRSH"][(op >> 9) & 0x7];
            return [sOp, reg[rd] + ",[" + reg[rs] + "," + reg[(op >> 6) & 0x7] + "]", 2];

        case 0x0c:
        case 0x0d:
            return [(op & 0x0800)? "LDR" : "STR", reg[rd] + ",[" + reg[rs] + (imm5? ",#" + hex(imm5 << 2) : "") + "]", 2];

        case 0x0e:
        case 0x0f:
            return [(op & 0x0800)? "LDRB" : "STRB", reg[rd] + ",[" + reg[rs] + (imm5? ",#" + hex(imm5) : "") + "]", 2];

        case 0x10:
        case 0x11:
            return [(op & 0x0800)? "LDRH" : "STRH", reg[rd] + ",[" + reg[rs] + (imm5? ",#" + hex(imm5 << 1) : "") + "]", 2];

        case 0x12:
        case 0x13:
            return [(op & 0x0800)? "LDR" : "STR", reg[r8] + ",[SP" + (imm8? ",#" + hex(imm8 << 2) : "") + "]", 2];

        case 0x14:
            return ["ADD", reg[r8] + ",PC,#" + hex(imm8 << 2) + "  ; =" + hex((((addr + 4) & ~0x3) + (imm8 << 2)) >>> 0, 8), 2];

        case 0x15:
            return ["ADD", reg[r8] + ",SP,#" + hex(imm8 << 2), 2];

        case 0x16:
        case 0x17:
            if ((op & 0xff00) == 0xb000) {
                return [(op & 0x80)? "SUB" : "ADD", "SP,#" + hex((op & 0x7f) << 2), 2];
            }
            if ((op & 0xfe00) == 0xb400) {
                list = imm8 | ((op & 0x0100)? 0x4000 : 0);
                return ["PUSH", DbgARM.list(list), 2];
            }
            if ((op & 0xfe00) == 0xbc00) {
                list = imm8 | ((op & 0x0100)? 0x8000 : 0);
                return ["POP", DbgARM.list(list), 2];
            }
            if (fV5 && (op & 0xff00) == 0xbe00) {
                return ["BKPT", "#" + hex(imm8), 2];
            }
            return unknown();

        case 0x18:
        case 0x19:
            return [(op & 0x0800)? "LDMIA" : "STMIA", reg[r8] + "!," + DbgARM.list(imm8), 2];

        case 0x1a:
        case 0x1b: {
            let cond = (op >> 8) & 0xf;
            if (cond == 0xf) return ["SWI", "#" + hex(imm8), 2];
            if (cond == 0xe) return unknown();
            return ["B" + DbgARM.CONDS[cond], hex((addr + 4 + ((op << 24) >> 23)) >>> 0, 8), 2];
        }

        case 0x1c:
            return ["B", hex((addr + 4 + ((op << 21) >> 20)) >>> 0, 8), 2];

        case 0x1e:
            /**
             * BL is a pair of instructions, which we display as a single 4-byte instruction if we can.
             */
            if ((opNext >> 11) == 0x1f || fV5 && (opNext >> 11) == 0x1d && !(opNext & 1)) {
                let target = (addr + 4 + ((op << 21) >> 9) + ((opNext & 0x7ff) << 1));
                if ((opNext >> 11) == 0x1d) {
                    return ["BLX", hex((target & ~0x3) >>> 0, 8), 4];
                }
                return ["BL", hex(target >>> 0, 8), 4];
            }
            return ["BL", "LR=PC+" + hex(((op << 21) >> 9) >>> 0), 2];

        case 0x1f:
            return ["BL", "LR+" + hex((op & 0x7ff) << 1), 2];

        default:        // 0x1d
            if (fV5 && !(op & 1)) return ["BLX", "LR+" + hex((op & 0x7ff) << 1), 2];
            return unknown();
        }
    }

    /**
     * hex(n, cch)
     *
     * @param {number} n (non-negative)
     * @param {number} [cch] (minimum number of digits)
     * @returns {string}
     */
    static hex(n, cch = 0)
    {
        return "0x" + n.toString(16).padStart(cch, "0");
    }

    /**
     * shift(op)
     *
     * Returns the shift applied to the Rm operand of an ARM instruction, if any (eg, ",LSL #3").
     *
     * @param {number} op
     * @returns {string}
     */
    static shift(op)
    {
        let type = (op >>> 5) & 0x3;
        if (op & 0x10) {
            return "," + DbgARM.SHIFTS[type] + " " + DbgARM.REGS[(op >>> 8) & 0xf];
        }
        let n = (op >>> 7) & 0x1f;
        if (!n) {
            if (type == 0) return "";
            if (type == 3) return ",RRX";
            n = 32;
        }
        return "," + DbgARM.SHIFTS[type] + " #" + n;
    }

    /**
     * address(sBase, sOffset, op)
     *
     * Returns an ARM addressing mode (eg, "[R1,#0x4]!"), based on the P and W bits of the instruction.
     *
     * @param {string} sBase
     * @param {string} sOffset
     * @param {number} op
     * @returns {string}
     */
    static address(sBase, sOffset, op)
    {
        if (op & 0x01000000) {
            return "[" + sBase + (sOffset? "," + sOffset : "") + "]" + ((op & 0x00200000)? "!" : "");
        }
        return "[" + sBase + "]" + (sOffset? "," + sOffset : "");
    }

    /**
     * list(bits)
     *
     * Returns a register list (eg, "{R0-R3,LR}").
     *
     * @param {number} bits (bit 0 for R0, etc)
     * @returns {string}
     */
    static list(bits)
    {
        let s = "";
        for (let i = 0; i < 16; i++) {
            if (!(bits & (1 << i))) continue;
            let j = i;
            /**
             * Collapse runs of general-purpose registers (but not SP, LR, or PC) into ranges.
             */
            while (j < 12 && (bits & (1 << (j + 1)))) j++;
            if (s) s += ",";
            s += DbgARM.REGS[i];
            if (j > i) {
                s += (j > i + 1? "-" : ",") + DbgARM.REGS[j];
                i = j;
            }
        }
        return "{" + s + "}";
    }

    /**
     * psr(op)
     *
     * Returns the PSR operand of an MSR instruction (eg, "CPSR_fc").
     *
     * @param {number} op
     * @returns {string}
     */
    static psr(op)
    {
        return ((op & 0x00400000)? "SPSR_" : "CPSR_") + ((op & 0x00080000)? "f" : "") + ((op & 0x00040000)? "s" : "") + ((op & 0x00020000)? "x" : "") + ((op & 0x00010000)? "c" : "");
    }
}

DbgARM.REGS = ["R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R10", "R11", "R12", "SP", "LR", "PC"];
DbgARM.CONDS = ["EQ", "NE", "CS", "CC", "MI", "PL", "VS", "VC", "HI", "LS", "GE", "LT", "GT", "LE", "", "NV"];
DbgARM.SHIFTS = ["LSL", "LSR", "ASR", "ROR"];
DbgARM.DATAOPS = ["AND", "EOR", "SUB", "RSB", "ADD", "ADC", "SBC", "RSC", "TST", "TEQ", "CMP", "CMN", "ORR", "MOV", "BIC", "MVN"];
DbgARM.THUMBOPS = ["AND", "EOR", "LSL", "LSR", "ASR", "ADC", "SBC", "ROR", "TST", "NEG", "CMP", "CMN", "ORR", "MUL", "BIC", "MVN"];

DbgARM.CLASSES["DbgARM"] = DbgARM;
