#!/usr/bin/env node
/**
 * @fileoverview Tests for the PCjs ARM emulator (CPUARM) and debugger (DbgARM)
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2026 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * Usage: node testarm.js [--qemu] [--verbose] [--seed=N] [--dasm]
 *
 * There are three sets of tests:
 *
 *  1) Unit tests, which load hand-assembled instructions into a bare CPUARM device and check the results.  These
 *     cover behavior that can't be compared with QEMU (eg, interrupts, and things QEMU does differently).
 *
 *  2) Disassembler tests, which compare the output of DbgARM's disassemblers to a list of known instructions.
 *
 *  3) The CPU test program (cputest.s, plus thousands of randomly generated instruction tests), which is assembled
 *     with clang, run on the CPUARM device, and compared to the output from QEMU's ARM925T (cputest.txt).  If clang
 *     isn't installed, this set of tests is skipped.
 *
 * Use --qemu to run the test program on QEMU as well, and update cputest.txt with its output; this is required
 * whenever cputest.s (or the random test generator) is changed.  Use --verbose with --qemu to make every random
 * test report all of its results instead of just a hash, which makes mismatches much easier to diagnose (in that
 * case, cputest.txt is not updated).  Use --dasm to disassemble the test program instead of running it.
 */

import fs from "fs";
import os from "os";
import path from "path";
import { execFileSync, spawn } from "child_process";
import { fileURLToPath } from "url";
import { linkObject } from "./elf.js";

/**
 * The machine modules expect to be running in a browser, but the few that we need get by with just this.
 */
globalThis.window = globalThis;

const dirTests = path.dirname(fileURLToPath(import.meta.url));
const dirModules = path.join(dirTests, "../../modules/v3/");
const { default: Device } = await import(dirModules + "device.js");
const { default: Time }   = await import(dirModules + "time.js");
const { default: Bus }    = await import(dirModules + "bus.js");
const { default: RAM }    = await import(dirModules + "ram.js");
const { default: CPUARM } = await import("../modules/v3/cpuarm.js");
const { default: DbgARM } = await import("../modules/v3/dbgarm.js");

const RAM_BASE  = 0x10000000;           // where the OMAP's SDRAM lives
const RAM_SIZE  = 0x02000000;
const LOAD_ADDR = 0x10010000;           // where QEMU loads a "kernel"
const UART_ADDR = 0xfffb0000;           // OMAP UART1

let args = process.argv.slice(2);
let fQEMU = args.includes("--qemu"), fVerbose = args.includes("--verbose"), fDasm = args.includes("--dasm");
let seed = +(args.find((arg) => arg.startsWith("--seed=")) || "--seed=1").slice(7);
let nFailures = 0;

/**
 * Machine
 *
 * A minimal machine: a clock, a 32-bit bus, 32Mb of RAM, a UART that simply collects output, and a CPU.
 */
class Machine {
    /**
     * @param {string} id
     * @param {number} [arch] (4 or 5)
     */
    constructor(id, arch = 4)
    {
        this.machine = new Device(id, id, {"class": "Machine"});
        this.time = new Time(id, "clock", {"class": "Time", "cyclesPerSecond": 144000000});
        this.bus = new Bus(id, "bus", {"class": "Bus", "type": "static", "addrWidth": 32, "dataWidth": 8, "blockSize": 4096, "littleEndian": true});
        this.ram = new RAM(id, "ram", {"class": "RAM", "addr": RAM_BASE, "size": RAM_SIZE, "bus": "bus"});
        this.uart = new RAM(id, "uart", {"class": "RAM", "addr": UART_ADDR, "size": 4096, "bus": "bus"});
        this.cpu = new CPUARM(id, "cpu", {"class": "CPUARM", "busMemory": "bus", "arch": arch});
        this.dbg = new DbgARM(id, "debugger", {"class": "DbgARM"});
        this.output = "";
        this.bus.trapWrite(UART_ADDR|0, (base, offset, value) => {
            if (!offset) this.output += String.fromCharCode(value);
        });
    }

    /**
     * Resets the CPU and loads a series of ARM instructions (or data) into memory.
     *
     * @param {number} addr
     * @param {Array.<number>} longs
     */
    load(addr, longs)
    {
        this.cpu.resetRegs();
        this.cpu.setIRQ(false);
        this.cpu.setFIQ(false);
        this.cpu.regPC = addr;
        for (let l of longs) {
            this.bus.writeQuad(addr, l|0);
            addr += 4;
        }
    }

    /**
     * Like load(), but for a series of Thumb instructions; the CPU is switched to Thumb state.
     *
     * @param {number} addr
     * @param {Array.<number>} words
     */
    loadThumb(addr, words)
    {
        this.load(addr, []);
        this.cpu.fThumb = true;
        for (let w of words) {
            this.bus.writePair(addr, w);
            addr += 2;
        }
    }

    /**
     * Executes a number of instructions, by running 1-cycle bursts (every instruction costs at least one cycle).
     *
     * @param {number} [n]
     */
    step(n = 1)
    {
        while (n-- > 0) this.cpu.execute(1);
    }
}

/**
 * check(name, actual, expected)
 *
 * @param {string} name
 * @param {*} actual
 * @param {*} expected
 */
function check(name, actual, expected)
{
    if (typeof actual == "number") actual >>>= 0;
    if (typeof expected == "number") expected >>>= 0;
    if (actual !== expected) {
        let toString = (v) => (typeof v == "number"? "0x" + v.toString(16) : JSON.stringify(v));
        console.log("FAILED: %s: expected %s, actual %s", name, toString(expected), toString(actual));
        nFailures++;
    }
}

/**
 * runUnitTests()
 */
function runUnitTests()
{
    let m = new Machine("arm4"), cpu = m.cpu, regs = cpu.regs, bus = m.bus;
    let A = RAM_BASE + 0x1000, D = RAM_BASE + 0x2000;
    let MODE = CPUARM.MODE, PSR = CPUARM.PSR;

    /**
     * Reset state
     */
    m.load(A, []);
    check("reset CPSR", cpu.getCPSR(), 0xd3);
    check("reset control", cpu.readCP15(1, 0, 0, 0), 0x70);
    check("CPU ID", cpu.readCP15(0, 0, 0, 0), 0x54029252);

    /**
     * An unaligned LDR rotates the aligned long, and an unaligned STR is simply aligned.
     */
    m.load(A, [0xe5910000, 0xe5812004]);                // LDR R0,[R1]; STR R2,[R1,#4]
    bus.writeQuad(D, 0x44332211);
    regs[1] = D + 1;
    regs[2] = 0xaabbccdd;
    m.step(2);
    check("unaligned LDR", regs[0], 0x11443322);
    check("unaligned STR", bus.readQuad(D + 4), 0xaabbccdd);

    m.load(A, [0xe5910000]);
    bus.writeQuad(D, 0x44332211);
    regs[1] = D + 3;
    m.step();
    check("unaligned LDR (3)", regs[0], 0x33221144);

    /**
     * A stored PC is the address of the instruction + 12, in both STR and STM.
     */
    m.load(A, [0xe581f000, 0xe8818001]);                // STR PC,[R1]; STMIA R1,{R0,PC}
    regs[1] = D;
    m.step();
    check("STR PC", bus.readQuad(D), A + 12);
    m.step();
    check("STM PC", bus.readQuad(D + 4), A + 4 + 12);

    /**
     * STM with the base register in the list (but not first) stores the updated base.
     */
    m.load(A, [0xe8a10003, 0xe8a00003]);                // STMIA R1!,{R0,R1}; STMIA R0!,{R0,R1}
    regs[0] = 0x1234;
    regs[1] = D;
    m.step();
    check("STM base second", bus.readQuad(D + 4), D + 8);
    check("STM base second (writeback)", regs[1], D + 8);
    regs[0] = D;
    m.step();
    check("STM base first", bus.readQuad(D), D);

    /**
     * R15 as an operand is the address of the instruction + 8 (or + 12, when there's a register-specified shift).
     */
    m.load(A, [0xe1a0000f, 0xe08f1002, 0xe1a0231f]);    // MOV R0,PC; ADD R1,PC,R2; MOV R2,PC,LSL R3
    m.step(3);
    check("MOV R0,PC", regs[0], A + 8);
    check("ADD R1,PC,R2", regs[1], A + 4 + 8);
    check("MOV R2,PC,LSL R3", regs[2], A + 8 + 12);

    /**
     * Interrupts: IRQ, FIQ, priority, masking, and the return address in both ARM and Thumb states.
     *
     * Note that step() also executes whatever is at the vector, which (since there's no memory there) reads
     * as 0xffffffff, a "never" instruction.
     */
    m.load(A, [0xe1a00000, 0xe1a00000]);                // NOP; NOP
    cpu.setCPSR(MODE.SYS | PSR.C);
    regs[13] = 0x1111;
    cpu.setIRQ(true);
    m.step();
    check("IRQ mode", cpu.getCPSR(), MODE.IRQ | PSR.I | PSR.C);
    check("IRQ SPSR", cpu.getSPSR(), MODE.SYS | PSR.C);
    check("IRQ LR", regs[14], A + 4);
    check("IRQ PC", cpu.regPC, 0x18 + 4);
    check("IRQ SP is banked", regs[13], 0);
    cpu.setFIQ(true);
    m.step();
    check("FIQ mode", cpu.getCPSR(), MODE.FIQ | PSR.I | PSR.F | PSR.C);
    check("FIQ SPSR", cpu.getSPSR(), MODE.IRQ | PSR.I | PSR.C);
    check("FIQ LR", regs[14], 0x1c + 4);
    check("FIQ PC", cpu.regPC, 0x1c + 4);

    m.load(A, [0xe1a00000, 0xe1a00000]);
    cpu.setCPSR(MODE.USR);
    cpu.setIRQ(true);
    cpu.setFIQ(true);
    m.step();
    check("FIQ has priority", cpu.getCPSR(), MODE.FIQ | PSR.I | PSR.F);
    check("FIQ LR (2)", regs[14], A + 4);

    m.load(A, [0xe1a00000, 0xe321f013, 0xe1a00000]);    // NOP; MSR CPSR_c,#0x13; NOP
    cpu.setIRQ(true);
    m.step(2);
    check("masked IRQ", cpu.regPC, A + 8);
    m.step();
    check("unmasked IRQ", cpu.getCPSR() & 0xff, MODE.IRQ | PSR.I);
    check("unmasked IRQ LR", regs[14], A + 8 + 4);
    cpu.setIRQ(false);

    m.loadThumb(A, [0x46c0, 0x46c0]);                   // NOP; NOP
    cpu.setCPSR(MODE.USR | PSR.T);
    m.step();
    cpu.setIRQ(true);
    m.step();
    check("Thumb IRQ mode", cpu.getCPSR(), MODE.IRQ | PSR.I);
    check("Thumb IRQ SPSR", cpu.getSPSR(), MODE.USR | PSR.T);
    check("Thumb IRQ LR", regs[14], A + 2 + 4);

    /**
     * Returning from an interrupt (SUBS PC,LR,#4) to Thumb state.
     */
    m.load(A, [0xe25ef004]);
    cpu.setCPSR(MODE.IRQ | PSR.I);
    cpu.bankSPSR[CPUARM.BANK.IRQ] = MODE.USR | PSR.T | PSR.N;
    regs[14] = D + 2 + 4;
    m.step();
    check("return to Thumb", cpu.getCPSR(), MODE.USR | PSR.T | PSR.N);
    check("return to Thumb PC", cpu.regPC, D + 2);

    /**
     * Wait for interrupt: the CPU halts, consuming all the cycles it's given, until an interrupt is requested
     * (even if that interrupt is masked).
     */
    m.load(A, [0xee070f90, 0xe2800001, 0xe2800001]);    // MCR p15,0,R0,c7,c0,4; ADD R0,R0,#1; ADD R0,R0,#1
    m.step();
    check("halted", cpu.fHalted, true);
    cpu.execute(1000);
    check("still halted", cpu.regPC, A + 4);
    check("halted cycles", cpu.nCyclesRemain, 0);
    cpu.setIRQ(true);
    m.step();
    check("resumed", regs[0], 1);
    check("resumed (masked)", cpu.getCPSR(), 0xd3);
    cpu.setIRQ(false);

    /**
     * High vectors
     */
    m.load(A, [0xee010f10, 0xef000000]);                // MCR p15,0,R0,c1,c0,0; SWI 0
    regs[0] = 0x2000;
    m.step(2);
    check("high vectors", cpu.regPC, 0xffff0008);
    check("high vectors LR", regs[14], A + 8);

    /**
     * ARMv5 instructions are undefined on ARMv4T.
     */
    m.load(A, [0xe16f0f11]);                            // CLZ R0,R1
    m.step();
    check("CLZ on ARMv4", cpu.getCPSR() & 0x1f, MODE.UND);
    check("CLZ on ARMv4 PC", cpu.regPC, 0x04);
    check("CLZ on ARMv4 LR", regs[14], A + 4);
    m.load(A, [0xfa000000, 0xe1a00000]);                // BLX (immediate) is a NOP ("never")
    m.step(2);
    check("NV on ARMv4", cpu.regPC, A + 8);

    /**
     * Banked registers survive a round trip through every mode.
     */
    m.load(A, []);
    let modes = [MODE.USR, MODE.FIQ, MODE.IRQ, MODE.SVC, MODE.ABT, MODE.UND];
    for (let mode of modes) {
        cpu.setCPSR(mode);
        for (let i = 8; i < 15; i++) regs[i] = (mode << 8) | i;
    }
    for (let mode of modes.concat(MODE.SYS)) {
        cpu.setCPSR(mode);
        let modeLow = (mode == MODE.FIQ)? MODE.FIQ : MODE.UND;          // R8-R12 were last set in Undefined mode
        let modeHigh = (mode == MODE.SYS)? MODE.USR : mode;
        check("banked R8 in mode " + mode, regs[8], (modeLow << 8) | 8);
        check("banked R12 in mode " + mode, regs[12], (modeLow << 8) | 12);
        check("banked R13 in mode " + mode, regs[13], (modeHigh << 8) | 13);
        check("banked R14 in mode " + mode, regs[14], (modeHigh << 8) | 14);
        check("user R13 from mode " + mode, cpu.getUserReg(13), (MODE.USR << 8) | 13);
        check("user R8 from mode " + mode, cpu.getUserReg(8), (MODE.UND << 8) | 8);
    }

    /**
     * Saved state
     */
    m.load(A, [0xe1a00000]);
    cpu.setCPSR(MODE.FIQ | PSR.V);
    regs[9] = 0x99;
    cpu.bankSPSR[CPUARM.BANK.FIQ] = MODE.USR | PSR.C;
    cpu.setCPSR(MODE.ABT | PSR.Z | PSR.F);
    regs[13] = 0x1313;
    cpu.writeCP15(2, 0, 0, 0, 0x10600000);
    let state = [];
    cpu.saveState(state);
    state = JSON.parse(JSON.stringify(state));
    cpu.resetRegs();
    check("loadState", cpu.loadState(state), true);
    check("restored CPSR", cpu.getCPSR(), MODE.ABT | PSR.Z | PSR.F);
    check("restored SP", regs[13], 0x1313);
    check("restored TTB", cpu.cp15TTB, 0x10600000);
    check("restored PC", cpu.regPC, A);
    cpu.setCPSR(MODE.FIQ);
    check("restored FIQ R9", regs[9], 0x99);
    check("restored FIQ SPSR", cpu.getSPSR(), MODE.USR | PSR.C);

    /**
     * The Debugger's view of the CPU
     */
    m.load(A, [0xe59f0010]);
    check("toString", cpu.toString().split("\n").slice(4).join("\n"),
        "CPSR=000000d3 SPSR=00000000 nzcvIFt SVC\n10001000: e59f0010   LDR      R0,[PC,#0x10]  ; [10001018]=00000000\n");
    check("register R15", cpu.getRegister("R15"), A);
    check("register SP", cpu.setRegister("SP", 0x1234) && regs[13], 0x1234);

    /**
     * ARMv5T
     */
    m = new Machine("arm5", 5);
    cpu = m.cpu;
    regs = cpu.regs;
    bus = m.bus;

    m.load(A, [0xe16f0f11, 0xe16f2f13]);                // CLZ R0,R1; CLZ R2,R3
    regs[1] = 0x00010000;
    m.step(2);
    check("CLZ", regs[0], 15);
    check("CLZ (0)", regs[2], 32);

    m.load(A, [0xe12fff31]);                            // BLX R1
    regs[1] = D + 1;
    m.step();
    check("BLX R1", cpu.regPC, D);
    check("BLX R1 state", cpu.fThumb, true);
    check("BLX R1 LR", regs[14], A + 4);

    m.load(A, [0xfb000010]);                            // BLX (immediate, with H set)
    m.step();
    check("BLX imm", cpu.regPC, A + 8 + 0x40 + 2);
    check("BLX imm state", cpu.fThumb, true);
    check("BLX imm LR", regs[14], A + 4);

    m.load(A, [0xe591f000]);                            // LDR PC,[R1]
    bus.writeQuad(D, D + 0x101);
    regs[1] = D;
    m.step();
    check("LDR PC", cpu.regPC, D + 0x100);
    check("LDR PC state", cpu.fThumb, true);

    m.load(A, [0xe8bd8000]);                            // LDMIA SP!,{PC}
    regs[13] = D;
    m.step();
    check("LDM PC", cpu.regPC, D + 0x100);
    check("LDM PC state", cpu.fThumb, true);

    m.load(A, [0xe1200070]);                            // BKPT
    m.step();
    check("BKPT", cpu.getCPSR() & 0x1f, MODE.ABT);
    check("BKPT PC", cpu.regPC, 0x0c);
    check("BKPT LR", regs[14], A + 4);

    m.loadThumb(A, [0xbd00]);                           // POP {PC}
    bus.writeQuad(D, D + 0x100);
    regs[13] = D;
    m.step();
    check("POP PC", cpu.regPC, D + 0x100);
    check("POP PC state", cpu.fThumb, false);

    m.loadThumb(A, [0x4788]);                           // BLX R1
    regs[1] = D;
    m.step();
    check("Thumb BLX R1", cpu.regPC, D);
    check("Thumb BLX R1 state", cpu.fThumb, false);
    check("Thumb BLX R1 LR", regs[14], A + 3);

    m.loadThumb(A, [0xf000, 0xe802]);                   // BLX (to ARM)
    m.step(2);
    check("Thumb BLX", cpu.regPC, A + 8);
    check("Thumb BLX state", cpu.fThumb, false);
    check("Thumb BLX LR", regs[14], A + 5);
}

/**
 * runDisassemblerTests()
 *
 * The expected results follow our own conventions (upper-case, and the original "divided" syntax for Thumb
 * instructions), so they can't be compared to another disassembler's output automatically.
 */
function runDisassemblerTests()
{
    let aTests = [
        [0xe0910182, "ADDS     R0,R1,R2,LSL #3"],
        [0x03a01001, "MOVEQ    R1,#0x1"],
        [0xe3e00000, "MVN      R0,#0x0"],
        [0xe1a00000, "MOV      R0,R0"],
        [0xe1b02061, "MOVS     R2,R1,RRX"],
        [0xe1a02041, "MOV      R2,R1,ASR #32"],
        [0xe1a02351, "MOV      R2,R1,ASR R3"],
        [0xe15c0003, "CMP      R12,R3"],
        [0xe3100102, "TST      R0,#0x80000000"],
        [0xe28f0008, "ADD      R0,PC,#0x8  ; =0x00001010"],
        [0xe24f0010, "SUB      R0,PC,#0x10  ; =0x00000ff8"],
        [0xe0000291, "MUL      R0,R1,R2"],
        [0xe0303291, "MLAS     R0,R1,R2,R3"],
        [0xe0810392, "UMULL    R0,R1,R2,R3"],
        [0xe0f10392, "SMLALS   R0,R1,R2,R3"],
        [0xe1010092, "SWP      R0,R2,[R1]"],
        [0xe1410092, "SWPB     R0,R2,[R1]"],
        [0xe10f0000, "MRS      R0,CPSR"],
        [0xe14f0000, "MRS      R0,SPSR"],
        [0xe129f000, "MSR      CPSR_fc,R0"],
        [0xe328f20f, "MSR      CPSR_f,#0xf0000000"],
        [0xe169f001, "MSR      SPSR_fc,R1"],
        [0xe12fff1e, "BX       LR"],
        [0xe59f0008, "LDR      R0,[PC,#0x8]", 0x1010],
        [0xe5910000, "LDR      R0,[R1]"],
        [0xe5310004, "LDR      R0,[R1,#-0x4]!"],
        [0xe4910004, "LDR      R0,[R1],#0x4"],
        [0xe7910102, "LDR      R0,[R1,R2,LSL #2]"],
        [0xe6110002, "LDR      R0,[R1],-R2"],
        [0xe5c10003, "STRB     R0,[R1,#0x3]"],
        [0xe4b10000, "LDRT     R0,[R1]"],
        [0xe4e10000, "STRBT    R0,[R1]"],
        [0xe1d100b2, "LDRH     R0,[R1,#0x2]"],
        [0xe19100d2, "LDRSB    R0,[R1,R2]"],
        [0xe15100f2, "LDRSH    R0,[R1,#-0x2]"],
        [0xe0c100b2, "STRH     R0,[R1],#0x2"],
        [0xe8bd8010, "LDMIA    SP!,{R4,PC}"],
        [0xe92d4ff0, "STMDB    SP!,{R4-R11,LR}"],
        [0xe8d96000, "LDMIA    R9,{SP,LR}^"],
        [0xe9810003, "STMIB    R1,{R0,R1}"],
        [0xea000002, "B        0x00001010"],
        [0x1bfffffe, "BLNE     0x00001000"],
        [0xef000123, "SWI      #0x123"],
        [0xee110f10, "MRC      p15,0,R0,c1,c0,0"],
        [0xee070f90, "MCR      p15,0,R0,c7,c0,4"],
        [0xe7f000f0, "DCD      0xe7f000f0"],
        [0xe16f0f11, "DCD      0xe16f0f11"],
        [0xe16f0f11, "CLZ      R0,R1", undefined, 5],
        [0xe12fff31, "BLX      R1", undefined, 5],
        [0xfb000010, "BLX      0x0000104a", undefined, 5],
        [0xe1200070, "BKPT     #0x0", undefined, 5]
    ];
    for (let [op, expected, addrData, arch] of aTests) {
        let result = DbgARM.disasmARM(op|0, 0x1000, arch == 5);
        check("disasmARM(" + (op >>> 0).toString(16) + ")", (result[0].padEnd(8) + " " + result[1]).trimEnd(), expected);
        check("disasmARM(" + (op >>> 0).toString(16) + ") data", result[3], addrData);
    }

    aTests = [
        [0x00c8, "LSL      R0,R1,#0x3"],
        [0x0808, "LSR      R0,R1,#0x0"],
        [0x1008, "ASR      R0,R1,#0x0"],
        [0x1888, "ADD      R0,R1,R2"],
        [0x1e48, "SUB      R0,R1,#0x1"],
        [0x20ff, "MOV      R0,#0xff"],
        [0x2910, "CMP      R1,#0x10"],
        [0x3201, "ADD      R2,#0x1"],
        [0x3b01, "SUB      R3,#0x1"],
        [0x4008, "AND      R0,R1"],
        [0x4248, "NEG      R0,R1"],
        [0x4348, "MUL      R0,R1"],
        [0x43c8, "MVN      R0,R1"],
        [0x4440, "ADD      R0,R8"],
        [0x4580, "CMP      R8,R0"],
        [0x46c0, "MOV      R8,R8"],
        [0x4687, "MOV      PC,R0"],
        [0x4770, "BX       LR"],
        [0x4778, "BX       PC"],
        [0x4788, "DCW      0x4788"],
        [0x4788, "BLX      R1", undefined, 5],
        [0x4801, "LDR      R0,[PC,#0x4]", 0x1008],
        [0x5088, "STR      R0,[R1,R2]"],
        [0x5e88, "LDRSH    R0,[R1,R2]"],
        [0x5688, "LDRSB    R0,[R1,R2]"],
        [0x6048, "STR      R0,[R1,#0x4]"],
        [0x6808, "LDR      R0,[R1]"],
        [0x7048, "STRB     R0,[R1,#0x1]"],
        [0x8848, "LDRH     R0,[R1,#0x2]"],
        [0x9001, "STR      R0,[SP,#0x4]"],
        [0x9800, "LDR      R0,[SP]"],
        [0xa001, "ADD      R0,PC,#0x4  ; =0x00001008"],
        [0xa801, "ADD      R0,SP,#0x4"],
        [0xb004, "ADD      SP,#0x10"],
        [0xb084, "SUB      SP,#0x10"],
        [0xb510, "PUSH     {R4,LR}"],
        [0xbdf0, "POP      {R4-R7,PC}"],
        [0xbe00, "DCW      0xbe00"],
        [0xc103, "STMIA    R1!,{R0,R1}"],
        [0xc90c, "LDMIA    R1!,{R2,R3}"],
        [0xd001, "BEQ      0x00001006"],
        [0xdbfe, "BLT      0x00001000"],
        [0xde00, "DCW      0xde00"],
        [0xdf42, "SWI      #0x42"],
        [0xe7fe, "B        0x00001000"],
        [0xf000, "BL       0x00001008", undefined, 4, 0xf802],
        [0xf7ff, "BL       0x00000ffc", undefined, 4, 0xfffc],
        [0xf000, "BLX      0x00001008", undefined, 5, 0xe802],
        [0xf802, "BL       LR+0x4"]
    ];
    for (let [op, expected, addrData, arch, opNext] of aTests) {
        let result = DbgARM.disasmThumb(op, 0x1000, opNext, arch == 5);
        check("disasmThumb(" + op.toString(16) + ")", (result[0].padEnd(8) + " " + result[1]).trimEnd(), expected);
        check("disasmThumb(" + op.toString(16) + ") data", result[3], addrData);
        check("disasmThumb(" + op.toString(16) + ") length", result[2], opNext? 4 : 2);
    }
}

/**
 * generateRandomTests()
 *
 * Generates the assembly code for all the random instruction tests.
 *
 * Every test loads R0-R7 and the flags with a mix of random and "interesting" values, executes one randomly
 * generated instruction, and then calls "report" to print a hash of R0-R7, the flags, and the scratch buffer.
 *
 * For instructions that access memory, R6 is always the base register, and it points to the middle of the
 * scratch buffer; if there's an index register, it's R7, which is loaded with a small value.  Unaligned word
 * and halfword accesses are never generated (QEMU doesn't treat them the way real ARM9 hardware does).
 *
 * @returns {string}
 */
function generateRandomTests()
{
    /**
     * A small, fast, seedable random number generator ("mulberry32"), so that the tests are reproducible.
     */
    let state = seed >>> 0;
    let random = () => {
        state = (state + 0x6d2b79f5) >>> 0;
        let t = state;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return (t ^ (t >>> 14)) >>> 0;
    };
    let rand = (n) => random() % n;
    let pick = (a) => a[rand(a.length)];
    let aInteresting = [0, 1, 2, 31, 32, 33, 255, 256, 0x7fffffff, 0x80000000, 0x80000001, 0xffffffff, 0xfffffffe, 0x0000ffff, 0xffff0000, 0x55555555];
    let value = () => {
        switch (rand(4)) {
        case 0:
            return pick(aInteresting);
        case 1:
            return rand(41);
        default:
            return random();
        }
    };
    let cond = () => (rand(10) < 7? 0xe : rand(14));
    let hex = (n) => "0x" + (n >>> 0).toString(16);
    let list = () => {
        let bits;
        do {
            bits = rand(256) & ~0x40;
        } while (!bits);
        return bits;
    };

    let s = "random:\n", nTests = 0;

    /**
     * addTest(op, fThumb, index)
     *
     * @param {number} op (the instruction to test)
     * @param {boolean} [fThumb]
     * @param {number} [index] (value for R7, if the instruction uses R6 and R7 to address memory)
     */
    let addTest = (op, fThumb, index) => {
        let fMemory = (index != undefined);
        let values = [];
        for (let i = 0; i < 8; i++) values.push(hex(value()));
        if (fMemory) values[7] = hex(index);
        s += "\tadr\tr12, 1f\n\tldmia\tr12, {r0-r7}\n\tldr\tr12, [r12, #32]\n\tmsr\tcpsr_f, r12\n\tb\t2f\n";
        s += "1:\t.word\t" + values.join(", ") + ", " + hex(rand(16) << 28) + "\n2:";
        if (fMemory) s += "\tadd\tr6, r9, #0x140\n";
        if (!fThumb) {
            s += "\t.word\t" + hex(op) + "\n";
        } else {
            s += "\tadd\tr12, pc, #1\n\tbx\tr12\n\t.thumb\n\t.short\t" + hex(op) + "\n\tnop\n\tbx\tpc\n\tnop\n\t.arm\n";
        }
        s += "\tbl\treport\n";
        if (fVerbose) {
            s += "\tstmia\tr9, {r0-r7}\n\tmov\tr4, #0\n3:\tldr\tr0, [r9, r4]\n\tbl\tputhex\n\tadd\tr4, r4, #4\n\tcmp\tr4, #32\n\tbne\t3b\n";
            s += "\tmov\tr0, #" + nTests + " & 0xff\n\torr\tr0, r0, #" + nTests + " & 0xff00\n\tbl\tputhex\n";
        }
        nTests++;
    };

    /**
     * ARM data processing instructions, with every kind of operand
     */
    for (let i = 0; i < 3000; i++) {
        let opcode = rand(16), fS = rand(2);
        if (opcode >= 8 && opcode <= 11) fS = 1;
        let rn = rand(8), rd = rand(8);
        /**
         * Unused register fields "should be zero"; real hardware ignores them, but QEMU doesn't.
         */
        if (opcode >= 8 && opcode <= 11) rd = 0;
        if (opcode == 13 || opcode == 15) rn = 0;
        let op = (cond() << 28) | (opcode << 21) | (fS << 20) | (rn << 16) | (rd << 12);
        switch (rand(3)) {
        case 0:
            op |= 0x02000000 | (rand(16) << 8) | rand(256);
            break;
        case 1:
            op |= ((rand(4)? rand(32) : 0) << 7) | (rand(4) << 5) | rand(8);
            break;
        case 2:
            op |= (rand(8) << 8) | (rand(4) << 5) | 0x10 | rand(8);
            break;
        }
        addTest(op);
    }

    /**
     * ARM multiplies
     */
    for (let i = 0; i < 500; i++) {
        let op = (cond() << 28) | (rand(4) << 20) | 0x90 | (rand(8) << 8) | rand(8), rd = rand(8), rn = rand(8);
        if (rand(2)) {
            while (rn == rd) rn = rand(8);
            op |= 0x00800000 | (rand(2) << 22);
        } else if (!(op & 0x00200000)) {
            rn = 0;
        }
        addTest(op | (rd << 16) | (rn << 12));
    }

    /**
     * ARM loads and stores (words and unsigned bytes), swaps, halfword and signed loads and stores, and block transfers
     */
    for (let i = 0; i < 1500; i++) {
        let op = (cond() << 28) | (rand(2) << 24) | (rand(2) << 23) | (rand(2) << 21) | (6 << 16), index = 0;
        let fLoad = rand(2), fByte = rand(2), type = fLoad? rand(3) + 1 : 1, offset;
        switch (rand(8)) {
        case 0:
        case 1:
            op |= 0x04000000 | (fByte << 22) | (fLoad << 20) | (rand(6) << 12) | (fByte? rand(61) : rand(16) << 2);
            break;
        case 2:
        case 3:
            index = rand(16);
            op |= 0x06000000 | (fByte << 22) | (fLoad << 20) | (rand(6) << 12) | ((fByte? rand(3) : 2) << 7) | 7;
            break;
        case 4:
            offset = (type == 2)? rand(61) : rand(31) << 1;
            op |= 0x00400090 | (fLoad << 20) | (rand(6) << 12) | (type << 5) | ((offset & 0xf0) << 4) | (offset & 0xf);
            break;
        case 5:
            index = (type == 2)? rand(31) : rand(16) << 1;
            op |= 0x00000090 | (fLoad << 20) | (rand(6) << 12) | (type << 5) | 7;
            break;
        case 6:
            op = (op & 0xf0000000) | 0x01060090 | (fByte << 22) | (rand(6) << 12) | rand(6);
            break;
        case 7:
            op |= 0x08000000 | (fLoad << 20) | list();
            break;
        }
        addTest(op, false, index);
    }

    /**
     * Thumb shifts, adds and subtracts, immediate operations, and ALU operations
     */
    for (let i = 0; i < 2000; i++) {
        let op;
        switch (rand(4)) {
        case 0:
            op = (rand(3) << 11) | ((rand(4)? rand(32) : 0) << 6) | (rand(8) << 3) | rand(8);
            break;
        case 1:
            op = 0x1800 | (rand(4) << 9) | (rand(8) << 6) | (rand(8) << 3) | rand(8);
            break;
        case 2:
            op = 0x2000 | (rand(4) << 11) | (rand(8) << 8) | rand(256);
            break;
        case 3:
            op = 0x4000 | (rand(16) << 6) | (rand(8) << 3) | rand(8);
            break;
        }
        addTest(op, true);
    }

    /**
     * Thumb loads and stores
     */
    for (let i = 0; i < 800; i++) {
        let op, index = 0, fLoad = rand(2), fByte = rand(2);
        switch (rand(4)) {
        case 0:
            index = rand(16) << 2;
            op = 0x5000 | (rand(8) << 9) | (7 << 6) | (6 << 3) | rand(6);
            break;
        case 1:
            op = 0x6000 | (fByte << 12) | (fLoad << 11) | (rand(fByte? 32 : 16) << 6) | (6 << 3) | rand(6);
            break;
        case 2:
            op = 0x8000 | (fLoad << 11) | (rand(31) << 6) | (6 << 3) | rand(6);
            break;
        case 3:
            op = 0xc000 | (fLoad << 11) | (6 << 8) | list();
            break;
        }
        addTest(op, true, index);
    }

    s += "\tmov\tr0, #'D'\n\tstrb\tr0, [r8]\n\tmov\tr0, #'O'\n\tstrb\tr0, [r8]\n\tmov\tr0, #'N'\n\tstrb\tr0, [r8]\n";
    s += "\tmov\tr0, #'E'\n\tstrb\tr0, [r8]\n\tmov\tr0, #10\n\tstrb\tr0, [r8]\n3:\tb\t3b\n";
    console.log("generated %d random instruction tests (seed %d)", nTests, seed);
    return s;
}

/**
 * buildTestProgram()
 *
 * @returns {Buffer|null} (the test program, or null if clang isn't available)
 */
function buildTestProgram()
{
    let dirTemp = fs.mkdtempSync(path.join(os.tmpdir(), "testarm-"));
    let fileSource = path.join(dirTemp, "cputest.s"), fileObject = path.join(dirTemp, "cputest.o");
    try {
        fs.writeFileSync(fileSource, fs.readFileSync(path.join(dirTests, "cputest.s"), "utf8") + generateRandomTests());
        try {
            execFileSync("clang", ["--target=armv4t-none-eabi", "-c", fileSource, "-o", fileObject], {stdio: ["ignore", "inherit", "inherit"]});
        } catch(err) {
            if (err.code != "ENOENT") throw err;
            return null;
        }
        return linkObject(fs.readFileSync(fileObject), LOAD_ADDR);
    } finally {
        fs.rmSync(dirTemp, {recursive: true, force: true});
    }
}

/**
 * runQEMU(image)
 *
 * @param {Buffer} image
 * @returns {Promise<string>} (everything the test program wrote to the UART)
 */
function runQEMU(image)
{
    return new Promise((resolve, reject) => {
        let dirTemp = fs.mkdtempSync(path.join(os.tmpdir(), "testarm-"));
        let fileImage = path.join(dirTemp, "cputest.bin");
        fs.writeFileSync(fileImage, image);
        let output = "", done = false, timer;
        let qemu = spawn("qemu-system-arm", ["-M", "sx1", "-kernel", fileImage, "-display", "none", "-serial", "stdio", "-monitor", "none"], {stdio: ["ignore", "pipe", "inherit"]});
        let finish = (err) => {
            if (done) return;
            done = true;
            clearTimeout(timer);
            qemu.kill();
            fs.rmSync(dirTemp, {recursive: true, force: true});
            if (err) reject(err); else resolve(output.replace(/\r/g, ""));
        };
        timer = setTimeout(() => finish(), 60000);
        qemu.stdout.on("data", (data) => {
            output += data.toString("latin1");
            if (output.endsWith("DONE\n") || output.endsWith("DONE\r\n")) finish();
        });
        qemu.on("error", finish);
        qemu.on("exit", () => finish());
    });
}

/**
 * loadImage(m, image)
 *
 * @param {Machine} m
 * @param {Buffer} image
 */
function loadImage(m, image)
{
    for (let i = 0; i < image.length; i++) {
        m.bus.writeData(LOAD_ADDR + i, image[i]);
    }
    m.cpu.regPC = LOAD_ADDR;
}

/**
 * runPCjs(image)
 *
 * @param {Buffer} image
 * @returns {string} (everything the test program wrote to the UART)
 */
function runPCjs(image)
{
    let m = new Machine("armtest"), cpu = m.cpu;
    loadImage(m, image);
    let nCycles = 0, msStart = Date.now();
    while (!m.output.endsWith("DONE\n") && nCycles < 500000000) {
        cpu.execute(100000);
        nCycles += 100000;
    }
    let ms = Date.now() - msStart;
    console.log("executed %d cycles in %dms (%d MHz)", nCycles, ms, Math.round(nCycles / (ms || 1) / 1000));
    return m.output;
}

/**
 * disassemble(image)
 *
 * Disassembles the hand-written portion of the test program (as ARM code), which is a convenient way to compare
 * the output of DbgARM to that of another disassembler.
 *
 * @param {Buffer} image
 */
function disassemble(image)
{
    let m = new Machine("armdasm");
    loadImage(m, image);
    let address = m.dbg.newAddress(LOAD_ADDR), s = "";
    let offRandom = image.indexOf(Buffer.from("ff009ce8", "hex")) - 4;      // the first random test
    while (address.off < LOAD_ADDR + (offRandom < 0? image.length : offRandom)) {
        s += m.dbg.unassemble(address, []);
    }
    process.stdout.write(s);
}

/**
 * Run all the tests.
 */
runUnitTests();
console.log("unit tests complete");
runDisassemblerTests();
console.log("disassembler tests complete");

let image = buildTestProgram();
if (!image) {
    console.log("clang not found; skipping the CPU test program");
} else if (fDasm) {
    disassemble(image);
} else {
    let fileExpected = path.join(dirTests, "cputest.txt"), expected;
    if (fQEMU) {
        expected = await runQEMU(image);
        if (!expected.endsWith("DONE\n")) {
            console.log("FAILED: the test program didn't run to completion on QEMU");
            nFailures++;
        }
        if (!fVerbose && seed == 1) fs.writeFileSync(fileExpected, expected);
    } else {
        expected = fs.readFileSync(fileExpected, "utf8");
    }
    let actual = runPCjs(image);
    let aExpected = expected.split("\n"), aActual = actual.split("\n"), nMismatches = 0;
    for (let i = 0; i < Math.max(aExpected.length, aActual.length); i++) {
        if (aExpected[i] !== aActual[i]) {
            if (nMismatches++ < 10) console.log("FAILED: line %d: expected %s, actual %s", i + 1, aExpected[i], aActual[i]);
        }
    }
    if (nMismatches) {
        console.log("%d of %d lines of test program output didn't match", nMismatches, aExpected.length);
        nFailures += nMismatches;
    } else {
        console.log("test program output matched (%d lines)", aExpected.length);
    }
}

console.log(nFailures? "FAILED (" + nFailures + ")" : "PASSED");
process.exit(nFailures? 1 : 0);
