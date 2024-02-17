/**
 * @fileoverview Simulates the instructions of an x96 CPU
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import CPU from "../../../modules/v3/cpu.js";

/**
 * CPUx86
 *
 * @class CPUx86
 * @unrestricted
 */
export default class CPUx86 extends CPU {
    /**
     * CPUx86(idMachine, idDevice, config)
     *
     * Defines the basic elements of the x86 CPU.
     *
     * @this {CPUx86}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);
    }
}

/**
 * CPU model numbers (supported)
 */
CPUx86.MODEL_8086 =      8086;
CPUx86.MODEL_8088 =      8088;
CPUx86.MODEL_80186 =     80186;
CPUx86.MODEL_80188 =     80188;
CPUx86.MODEL_80286 =     80286;
CPUx86.MODEL_80386 =     80386;

/**
 * 80386 CPU stepping identifiers (supported)
 */
CPUx86.STEPPING_80386_A0 =  (80386+0xA0);       // we have very little information about this stepping...
CPUx86.STEPPING_80386_A1 =  (80386+0xA1);       // we know much more about the A1 stepping (see /blog/2015/02/23/README.md)
CPUx86.STEPPING_80386_B0 =  (80386+0xB0);       // for now, the only B0 difference in PCx86 is support for XBTS and IBTS
CPUx86.STEPPING_80386_B1 =  (80386+0xB1);       // our implementation of the B1 stepping also includes the infamous 32-bit multiplication bug
CPUx86.STEPPING_80386_B2 =  (80386+0xB2);       // this is an imaginary stepping that simply means "B1 without the 32-bit multiplication bug" (ie, a B1 with the "double sigma" stamp)
CPUx86.STEPPING_80386_C0 =  (80386+0xC0);       // this presumably fixed lots of B1 issues, but it seems to have been quickly superseded by the D0
CPUx86.STEPPING_80386_D0 =  (80386+0xD0);       // we don't have any detailed information (eg, errata) for these later steppings
CPUx86.STEPPING_80386_D1 =  (80386+0xD1);
CPUx86.STEPPING_80386_D2 =  (80386+0xD2);

/**
 * This constant is used to mark points in the code where the address (either physical or
 * linear) being returned is invalid and should not be used.
 *
 * This value is also used to indicate non-existent EA address calculations, which are usually
 * detected with "regEA === ADDR_INVALID" and "regEAWrite === ADDR_INVALID" tests.  Which means
 * that, technically, we should not use any signed 32-bit value, such as -1 (0xffffffff), since
 * that could also be a valid address on a 32-bit CPU.  So we also leave open the possibility of
 * using a non-numeric value such undefined or null, which is why all ADDR_INVALID tests should
 * use strict equality operators.
 *
 * WARNING: Like many of the properties defined here, ADDR_INVALID is a common constant, which the
 * Closure Compiler will happily inline (with or without @const annotations; in fact, I've yet to
 * see a @const annotation EVER improve automatic inlining).  However, if you don't make ABSOLUTELY
 * certain that this file is included BEFORE the first reference to any of these properties, that
 * automatic inlining will no longer occur.
 */
CPUx86.ADDR_INVALID =  0x100000000;

/**
 * Processor Exception Interrupts
 *
 * Of the following exceptions, all are designed to be restartable, except for 0x08 and 0x09 (and 0x0D
 * after an attempt to write to a read-only segment).
 *
 * Error codes are pushed onto the stack for 0x08 (always 0) and 0x0A through 0x0E.
 *
 * Priority: Instruction exception, TRAP, NMI, Processor Extension Segment Overrun, and finally INTR.
 *
 * All exceptions can also occur in real-mode, except where noted.  A GP_FAULT in real-mode can be triggered
 * by "any memory reference instruction that attempts to reference [a] 16-bit word at offset 0xFFFF".
 *
 * Interrupts beyond 0x10 (up through 0x1F) are reserved for future exceptions.
 *
 * Implementation Detail: For any opcode we know must generate a UD_FAULT interrupt, we invoke opInvalid(),
 * NOT opUndefined().  UD_FAULT is for INVALID opcodes, Intel's choice of term "undefined" notwithstanding.
 *
 * We reserve the term "undefined" for opcodes that require more investigation, and we invoke opUndefined()
 * ONLY until an opcode's behavior has finally been defined, at which point it becomes either valid or invalid.
 * The term "illegal" seems completely superfluous; we don't need a third way of describing invalid opcodes.
 *
 * The term "undocumented" should be limited to operations that are valid but Intel simply never documented.
 */
CPUx86.EXCEPTION = {
    DE_EXC:     0x00,   // Divide Error Exception                   (#DE: fault, no error code)
    DB_EXC:     0x01,   // Debug (aka Single Step Trap) Exception   (#DB: fault or trap)
    NMI:        0x02,   // Non-Maskable Interrupt
    BP_TRAP:    0x03,   // Breakpoint Exception                     (#BP: trap)
    OF_TRAP:    0x04,   // INTO Overflow Exception                  (#OF: trap)
    BR_FAULT:   0x05,   // BOUND Error Exception                    (#BR: fault, no error code)
    UD_FAULT:   0x06,   // Invalid (aka Undefined/Illegal) Opcode   (#UD: fault, no error code)
    NM_FAULT:   0x07,   // No Math Unit Available; see ESC or WAIT  (#NM: fault, no error code)
    DF_FAULT:   0x08,   // Double Fault; see LIDT                   (#DF: fault, with error code)
    MP_FAULT:   0x09,   // Math Unit Protection Fault; see ESC      (#MP: fault, no error code)
    TS_FAULT:   0x0A,   // Invalid Task State Segment Fault         (#TS: fault, with error code; protected-mode only)
    NP_FAULT:   0x0B,   // Not Present Fault                        (#NP: fault, with error code; protected-mode only)
    SS_FAULT:   0x0C,   // Stack Fault                              (#SS: fault, with error code; protected-mode only)
    GP_FAULT:   0x0D,   // General Protection Fault                 (#GP: fault, with error code)
    PF_FAULT:   0x0E,   // Page Fault                               (#PF: fault, with error code)
    MF_FAULT:   0x10    // Math Fault; see ESC or WAIT              (#MF: fault, no error code)
};

/**
 * Processor Status flag definitions (stored in regPS)
 */
CPUx86.PS = {
    CF:     0x0001,     // bit 0: Carry flag
    BIT1:   0x0002,     // bit 1: reserved, always set
    PF:     0x0004,     // bit 2: Parity flag
    BIT3:   0x0008,     // bit 3: reserved, always clear
    AF:     0x0010,     // bit 4: Auxiliary Carry flag (aka Arithmetic flag)
    BIT5:   0x0020,     // bit 5: reserved, always clear
    ZF:     0x0040,     // bit 6: Zero flag
    SF:     0x0080,     // bit 7: Sign flag
    TF:     0x0100,     // bit 8: Trap flag
    IF:     0x0200,     // bit 9: Interrupt flag
    DF:     0x0400,     // bit 10: Direction flag
    OF:     0x0800,     // bit 11: Overflow flag
    IOPL: {
     MASK:  0x3000,     // bits 12-13: I/O Privilege Level (always set on 8086/80186; clear on 80286 reset)
     SHIFT: 12
    },
    NT:     0x4000,     // bit 14: Nested Task flag (always set on 8086/80186; clear on 80286 reset)
    BIT15:  0x8000,     // bit 15: reserved (always set on 8086/80186; clear otherwise)
    RF:    0x10000,     // bit 16: Resume Flag (temporarily disables debug exceptions; 80386 only)
    VM:    0x20000      // bit 17: Virtual 8086 Mode (80386 only)
};

CPUx86.CR0 = {
    /**
     * Machine Status Word (MSW) bit definitions
     */
    MSW: {
        PE:     0x0001, // protected-mode enabled
        MP:     0x0002, // monitor processor extension (ie, coprocessor)
        EM:     0x0004, // emulate processor extension
        TS:     0x0008, // task switch indicator
        ON:     0xFFF0, // on the 80286, these bits are always on (TODO: Verify)
        MASK:   0xFFFF  // these are the only (MSW) bits that the 80286 can access (within CR0)
    },
    ET: 0x00000010,     // coprocessor type (80287 or 80387); always 1 on post-80386 CPUs
    ON: 0x7FFFFFE0,     // CR0 bits that are always on
    PG: 0x80000000|0,   // 0: paging disabled
};

CPUx86.DR7 = {          // Debug Control Register
    L0:     0x00000001,
    G0:     0x00000002,
    L1:     0x00000004,
    G1:     0x00000008,
    L2:     0x00000010,
    G2:     0x00000020,
    L3:     0x00000040,
    G3:     0x00000080,
    ENABLE: 0x000000FF,
    LE:     0x00000100,
    GE:     0x00000200,
    RW0:    0x00030000, // 00: exec-only  01: write-only  10: undefined  11: read/write-only
    LEN0:   0x000C0000, // 00: one-byte,  01: two-byte,   10: undefined  11: four-byte
    RW1:    0x00300000, // 00: exec-only  01: write-only  10: undefined  11: read/write-only
    LEN1:   0x00C00000, // 00: one-byte,  01: two-byte,   10: undefined  11: four-byte
    RW2:    0x03000000, // 00: exec-only  01: write-only  10: undefined  11: read/write-only
    LEN2:   0x0C000000, // 00: one-byte,  01: two-byte,   10: undefined  11: four-byte
    RW3:    0x30000000, // 00: exec-only  01: write-only  10: undefined  11: read/write-only
    LEN3:   0xC0000000|0// 00: one-byte,  01: two-byte,   10: undefined  11: four-byte
};

CPUx86.DR6 = {          // Debug Status Register
    B0:     0x00000001,
    B1:     0x00000002,
    B2:     0x00000004,
    B3:     0x00000008,
    BD:     0x00002000, // set if the next instruction will read or write one of the eight debug registers and ICE-386 is also using them
    BS:     0x00004000, // set if the debug handler is entered due to the TF (trap flag) bit set in the EFLAGS register
    BT:     0x00008000  // set before entering the DEBUG handler if a task switch has occurred and the T-bit of the new TSS is set
};

CPUx86.SEL = {
    RPL:    0x0003,     // requested privilege level (0-3)
    LDT:    0x0004,     // table indicator (0: GDT, 1: LDT)
    MASK:   0xFFF8      // table offset
};

CPUx86.DESC = {         // Descriptor Table Entry
    LIMIT: {            // LIMIT bits 0-15 (or OFFSET if this is an INTERRUPT or TRAP gate)
        OFFSET:     0x0
    },
    BASE: {             // BASE bits 0-15 (or SELECTOR if this is a TASK, INTERRUPT or TRAP gate)
        OFFSET:     0x2
    },
    ACC: {              // bit definitions for the access word (offset 0x4)
        OFFSET:     0x4,
        BASE1623:                       0x00FF,     // (not used if this a TASK, INTERRUPT or TRAP gate; bits 0-5 are parm count for CALL gates)
        TYPE: {
            OFFSET: 0x5,
            MASK:                       0x1F00,
            SEG:                        0x1000,
            NONSEG:                     0x0F00,
            /**
             * The following bits apply only when SEG is set
             */
            CODE:                       0x0800,     // set for CODE, clear for DATA
            ACCESSED:                   0x0100,     // set if accessed, clear if not accessed
            READABLE:                   0x0200,     // CODE: set if readable, clear if exec-only
            WRITABLE:                   0x0200,     // DATA: set if writable, clear if read-only
            CONFORMING:                 0x0400,     // CODE: set if conforming, clear if not
            EXPDOWN:                    0x0400,     // DATA: set if expand-down, clear if not
            /**
             * Assorted bits that apply only within NONSEG values
             */
            TSS_BUSY:                   0x0200,
            NONSEG_386:                 0x0800,     // 80386 and up
            /**
             * The following are all the possible (valid) types (well, except for the variations
             * of DATA and CODE where the ACCESSED bit (0x0100) may also be set)
             */
            TSS286:                     0x0100,
            LDT:                        0x0200,
            TSS286_BUSY:                0x0300,
            GATE_CALL:                  0x0400,
            GATE_TASK:                  0x0500,
            GATE286_INT:                0x0600,
            GATE286_TRAP:               0x0700,
            TSS386:                     0x0900,     // 80386 and up
            TSS386_BUSY:                0x0B00,     // 80386 and up
            GATE386_CALL:               0x0C00,     // 80386 and up
            GATE386_INT:                0x0E00,     // 80386 and up
            GATE386_TRAP:               0x0F00,     // 80386 and up
            CODE_OR_DATA:               0x1E00,
            DATA_READONLY:              0x1000,
            DATA_WRITABLE:              0x1200,
            DATA_EXPDOWN:               0x1400,
            DATA_EXPDOWN_WRITABLE:      0x1600,
            CODE_EXECONLY:              0x1800,
            CODE_READABLE:              0x1A00,
            CODE_CONFORMING:            0x1C00,
            CODE_CONFORMING_READABLE:   0x1E00
        },
        DPL: {
            MASK:                       0x6000,
            SHIFT:                      13
        },
        PRESENT:                        0x8000,
        INVALID:    0   // use CPUx86.DESC.ACC.INVALID for invalid ACC values
    },
    EXT: {              // descriptor extension word (reserved on the 80286; "must be zero")
        OFFSET:     0x6,
        LIMIT1619:                      0x000F,
        AVAIL:                          0x0010,     // NOTE: set in various descriptors in OS/2
        /**
         * The BIG bit is known as the D bit for code segments; when set, all addresses and operands
         * in that code segment are assumed to be 32-bit.
         *
         * The BIG bit is known as the B bit for data segments; when set, it indicates: 1) all pushes,
         * pops, calls and returns use ESP instead of SP, and 2) the upper bound of an expand-down segment
         * is 0xffffffff instead of 0xffff.
         */
        BIG:                            0x0040,     // clear if default operand/address size is 16-bit, set if 32-bit
        LIMITPAGES:                     0x0080,     // clear if limit granularity is bytes, set if limit granularity is 4Kb pages
        BASE2431:                       0xFF00
    },
    INVALID: 0          // use CPUx86.DESC.INVALID for invalid DESC values
};

CPUx86.LADDR = {        // linear address
    PDE: {              // index of page directory entry
        MASK:   0xFFC00000|0,
        SHIFT:  20      // (addr & DIR.MASK) >>> DIR.SHIFT yields a page directory offset (ie, index * 4)
    },
    PTE: {              // index of page table entry
        MASK:   0x003FF000,
        SHIFT:  10      // (addr & PAGE.MASK) >>> PAGE.SHIFT yields a page table offset (ie, index * 4)
    },
    OFFSET:     0x00000FFF
};

CPUx86.PTE = {
    FRAME:      0xFFFFF000|0,
    DIRTY:      0x00000040,         // page has been modified
    ACCESSED:   0x00000020,         // page has been accessed
    USER:       0x00000004,         // set for user level (CPL 3), clear for supervisor level (CPL 0-2)
    READWRITE:  0x00000002,         // set for read/write, clear for read-only (affects CPL 3 only)
    PRESENT:    0x00000001          // set for present page, clear for not-present page
};

CPUx86.TSS286 = {
    PREV_TSS:   0x00,
    CPL0_SP:    0x02,   // start of values altered by task switches
    CPL0_SS:    0x04,
    CPL1_SP:    0x06,
    CPL1_SS:    0x08,
    CPL2_SP:    0x0A,
    CPL2_SS:    0x0C,
    TASK_IP:    0x0E,
    TASK_PS:    0x10,
    TASK_AX:    0x12,
    TASK_CX:    0x14,
    TASK_DX:    0x16,
    TASK_BX:    0x18,
    TASK_SP:    0x1A,
    TASK_BP:    0x1C,
    TASK_SI:    0x1E,
    TASK_DI:    0x20,
    TASK_ES:    0x22,
    TASK_CS:    0x24,
    TASK_SS:    0x26,
    TASK_DS:    0x28,   // end of values altered by task switches
    TASK_LDT:   0x2A
};

CPUx86.TSS386 = {
    PREV_TSS:   0x00,
    CPL0_ESP:   0x04,   // start of values altered by task switches
    CPL0_SS:    0x08,
    CPL1_ESP:   0x0c,
    CPL1_SS:    0x10,
    CPL2_ESP:   0x14,
    CPL2_SS:    0x18,
    TASK_CR3:   0x1C,   // (not in TSS286)
    TASK_EIP:   0x20,
    TASK_PS:    0x24,
    TASK_EAX:   0x28,
    TASK_ECX:   0x2C,
    TASK_EDX:   0x30,
    TASK_EBX:   0x34,
    TASK_ESP:   0x38,
    TASK_EBP:   0x3C,
    TASK_ESI:   0x40,
    TASK_EDI:   0x44,
    TASK_ES:    0x48,
    TASK_CS:    0x4C,
    TASK_SS:    0x50,
    TASK_DS:    0x54,
    TASK_FS:    0x58,   // (not in TSS286)
    TASK_GS:    0x5C,   // (not in TSS286) end of values altered by task switches
    TASK_LDT:   0x60,
    TASK_IOPM:  0x64    // (not in TSS286)
};

CPUx86.ERRCODE = {
    EXT:        0x0001,
    IDT:        0x0002,
    LDT:        0x0004,
    SELMASK:    0xFFFC
};

CPUx86.RESULT = {
    /**
     * Flags were originally computed using 16-bit result registers:
     *
     *      CF: resultZeroCarry & resultSize (ie, 0x100 or 0x10000)
     *      PF: resultParitySign & 0xff
     *      AF: (resultParitySign ^ resultAuxOverflow) & 0x0010
     *      ZF: resultZeroCarry & (resultSize - 1)
     *      SF: resultParitySign & (resultSize >> 1)
     *      OF: (resultParitySign ^ resultAuxOverflow ^ (resultParitySign >> 1)) & (resultSize >> 1)
     *
     * I386 support requires that we now rely on 32-bit result registers:
     *
     *      resultDst, resultSrc, resultArith, resultLogic and resultType
     *
     * and flags are now computed as follows:
     *
     *      CF: ((resultDst ^ ((resultDst ^ resultSrc) & (resultSrc ^ resultArith))) & resultType)
     *      PF: (resultLogic & 0xff)
     *      AF: ((resultArith ^ (resultDst ^ resultSrc)) & 0x0010)
     *      ZF: (resultLogic & ((resultType - 1) | resultType))
     *      SF: (resultLogic & resultType)
     *      OF: (((resultDst ^ resultArith) & (resultSrc ^ resultArith)) & resultType)
     *
     * where resultType contains both a size, which must be one of BYTE (0x80), WORD (0x8000),
     * or DWORD (0x80000000), along with bits for each of the arithmetic and/or logical flags that
     * are currently "cached" in the result registers (eg, CPUx86.RESULT.CF for carry, CPUx86.RESULT.OF
     * for overflow, etc).
     *
     * WARNING: Do not confuse these RESULT flag definitions with the PS flag definitions.  RESULT
     * flags are used only as "cached" flag indicators, packed into bits 0-5 of resultType; they do
     * not match the actual flag bit definitions within the Processor Status (PS) register.
     *
     * Arithmetic operations should call:
     *
     *      setArithResult(dst, src, value, type)
     * eg:
     *      setArithResult(dst, src, dst+src, CPUx86.RESULT.BYTE | CPUx86.RESULT.ALL)
     *
     * and logical operations should call:
     *
     *      setLogicResult(value, type [, carry [, overflow]])
     *
     * Since most logical operations clear both CF and OF, most calls to setLogicResult() can omit the
     * last two optional parameters.
     *
     * The type parameter of these methods indicates both the size of the result (BYTE, WORD or DWORD)
     * and which of the flags should now be considered "cached" by the result registers.  If the previous
     * resultType specifies any flags not present in the new type parameter, then those flags are
     * calculated and written to the appropriate regPS bit(s) *before* the result registers are updated.
     *
     * Arithmetic operations are assumed to represent an "added" result; if a "subtracted" result is
     * provided instead (eg, from CMP, DEC, SUB, etc), then setArithResult() must include a 5th parameter
     * (fSubtract); eg:
     *
     *      setArithResult(dst, src, dst-src, CPUx86.RESULT.BYTE | CPUx86.RESULT.ALL, true)
     *
     * TODO: Consider separating setArithResult() into two functions: setAddResult() and setSubResult().
     */
    BYTE:       0x80,       // result is byte value
    WORD:       0x8000,     // result is word value
    DWORD:      0x80000000|0,
    TYPE:       0x80008080|0,
    CF:         0x01,       // carry flag is cached
    PF:         0x02,       // parity flag is cached
    AF:         0x04,       // aux carry flag is cached
    ZF:         0x08,       // zero flag is cached
    SF:         0x10,       // sign flag is cached
    OF:         0x20,       // overflow flag is cached
    ALL:        0x3F,       // all result flags are cached
    LOGIC:      0x1A,       // all logical flags are cached; see setLogicResult()
    NOTCF:      0x3E        // all result flags EXCEPT carry are cached
};

/**
 * Bit values for opFlags, which are all reset to zero prior to each instruction
 */
CPUx86.OPFLAG = {
    NOREAD:     0x0001,     // disable memory reads for the remainder of the current instruction
    NOWRITE:    0x0002,     // disable memory writes for the remainder of the current instruction
    NOINTR:     0x0004,     // a segreg has been set, or a prefix, or an STI (delay INTR acknowledgement)
    WRAP:       0x0008,     // a segment wrap-around has occurred (relevant to 8086/8088 only)
    SEG:        0x0010,     // segment override
    LOCK:       0x0020,     // lock prefix
    REPZ:       0x0040,     // repeat while Z (NOTE: this value MUST match PS.ZF; see opCMPSb/opCMPSw/opSCASb/opSCASw)
    REPNZ:      0x0080,     // repeat while NZ
    REPEAT:     0x0100,     // an instruction is being repeated (ie, some iteration AFTER the first)
    PUSHSP:     0x0200,     // the SP register is potentially being referenced by a PUSH SP opcode, adjustment may be required
    DATASIZE:   0x0400,     // data size override
    ADDRSIZE:   0x0800,     // address size override
    FAULT:      0x1000,     // a fault occurred during the current instruction
    DBEXC:      0x2000,     // a DB_EXC exception occurred during the current instruction
    REPSEG:     0x4000      // an instruction is being repeated with a segment prefix (used for 8086/8088 "feature" simulation)
};

/**
 * Bit values for intFlags
 */
CPUx86.INTFLAG = {
    NONE:       0x00,
    INTR:       0x01,       // h/w interrupt requested
    TRAP:       0x02,       // trap (INT 0x01) requested
    HALT:       0x04,       // halt (HLT) requested
    DMA:        0x08,       // async DMA operation in progress
    DEBUGGER:   0x10        // debugger checks enabled
};

/**
 * Common opcodes (and/or any opcodes we need to refer to explicitly)
 */
CPUx86.OPCODE = {
    ES:         0x26,       // opES()
    CS:         0x2E,       // opCS()
    SS:         0x36,       // opSS()
    DS:         0x3E,       // opDS()
    PUSHSP:     0x54,       // opPUSHSP()
    PUSHA:      0x60,       // opPUSHA()    (80186 and up)
    POPA:       0x61,       // opPOPA()     (80186 and up)
    BOUND:      0x62,       // opBOUND()    (80186 and up)
    ARPL:       0x63,       // opARPL()     (80286 and up)
    FS:         0x64,       // opFS()       (80386 and up)
    GS:         0x65,       // opGS()       (80386 and up)
    OS:         0x66,       // opOS()       (80386 and up)
    AS:         0x67,       // opAS()       (80386 and up)
    PUSHN:      0x68,       // opPUSHn()    (80186 and up)
    IMULN:      0x69,       // opIMULn()    (80186 and up)
    PUSH8:      0x6A,       // opPUSH8()    (80186 and up)
    IMUL8:      0x6B,       // opIMUL8()    (80186 and up)
    INSB:       0x6C,       // opINSb()     (80186 and up)
    INSW:       0x6D,       // opINSw()     (80186 and up)
    OUTSB:      0x6E,       // opOUTSb()    (80186 and up)
    OUTSW:      0x6F,       // opOUTSw()    (80186 and up)
    ENTER:      0xC8,       // opENTER()    (80186 and up)
    LEAVE:      0xC9,       // opLEAVE()    (80186 and up)
    CALLF:      0x9A,       // opCALLF()
    MOVSB:      0xA4,       // opMOVSb()
    MOVSW:      0xA5,       // opMOVSw()
    CMPSB:      0xA6,       // opCMPSb()
    CMPSW:      0xA7,       // opCMPSw()
    STOSB:      0xAA,       // opSTOSb()
    STOSW:      0xAB,       // opSTOSw()
    LODSB:      0xAC,       // opLODSb()
    LODSW:      0xAD,       // opLODSw()
    SCASB:      0xAE,       // opSCASb()
    SCASW:      0xAF,       // opSCASw()
    INT3:       0xCC,       // opINT3()
    INTN:       0xCD,       // opINTn()
    INTO:       0xCE,       // opINTO()
    IRET:       0xCF,       // opIRET()
    ESC0:       0xD8,       // opESC0()
    ESC1:       0xD9,       // opESC1()
    ESC2:       0xDA,       // opESC2()
    ESC3:       0xDB,       // opESC3()
    ESC4:       0xDC,       // opESC4()
    ESC5:       0xDD,       // opESC5()
    ESC6:       0xDE,       // opESC6()
    ESC7:       0xDF,       // opESC7()
    LOOPNZ:     0xE0,       // opLOOPNZ()
    LOOPZ:      0xE1,       // opLOOPZ()
    LOOP:       0xE2,       // opLOOP()
    CALL:       0xE8,       // opCALL()
    JMP:        0xE9,       // opJMP()      (2-byte displacement)
    JMPF:       0xEA,       // opJMPF()
    JMPS:       0xEB,       // opJMPs()     (1-byte displacement)
    LOCK:       0xF0,       // opLOCK()
    INT1:       0xF1,       // opINT1()
    REPNZ:      0xF2,       // opREPNZ()
    REPZ:       0xF3,       // opREPZ()
    CLI:        0xFA,       // opCLI()
    STI:        0xFB,       // opSTI()
    CLD:        0xFC,       // opCLD()
    STD:        0xFD,       // opSTD()
    GRP4W:      0xFF,
    CALLW:      0x10FF,     // GRP4W: fnCALLw()
    CALLFDW:    0x18FF,     // GRP4W: fnCALLFdw()
    CALLMASK:   0x38FF,     // mask 2-byte GRP4W opcodes with this before comparing to CALLW or CALLFDW
    UD2:        0x0B0F      // UD2 (invalid opcode "guaranteed" to generate UD_FAULT on all post-8086 processors)
};

/**
 * Floating Point Unit (FPU), aka Numeric Data Processor (NDP), aka Numeric Processor Extension (NPX), aka Coprocessor definitions
 */
CPUx86.FPU = {
    MODEL_8087:     8087,
    MODEL_80287:    80287,
    MODEL_80287XL:  80387,  // internally, the 80287XL was an 80387SX, so generally, we treat this as MODEL_80387
    MODEL_80387:    80387,
    CONTROL: {              // FPU Control Word
        IM:     0x0001,     // bit 0: Invalid Operation Mask
        DM:     0x0002,     // bit 1: Denormalized Operand Mask
        ZM:     0x0004,     // bit 2: Zero Divide Mask
        OM:     0x0008,     // bit 3: Overflow Mask
        UM:     0x0010,     // bit 4: Underflow Mask
        PM:     0x0020,     // bit 5: Precision Mask
        EXC:    0x003F,     // all of the above exceptions
        IEM:    0x0080,     // bit 7: Interrupt Enable Mask (0 enables interrupts, 1 masks them; 8087 only)
        PC:     0x0300,     // bits 8-9: Precision Control
        RC: {               // bits 10-11: Rounding Control
          NEAR: 0x0000,
          DOWN: 0x0400,
          UP:   0x0800,
          CHOP: 0x0C00,
          MASK: 0x0C00
        },
        IC:     0x1000,     // bit 12: Infinity Control (0 for Projective, 1 for Affine)
        UNUSED: 0xE040,     // bits 6,13-15: unused
        INIT:   0x03BF      // CPUx86.FPU.CONTROL.IM | CPUx86.FPU.CONTROL.DM | CPUx86.FPU.CONTROL.ZM | CPUx86.FPU.CONTROL.OM | CPUx86.FPU.CONTROL.UM | CPUx86.FPU.CONTROL.PM | CPUx86.FPU.CONTROL.IEM | CPUx86.FPU.CONTROL.PC
    },
    STATUS: {               // FPU Status Word
        IE:     0x0001,     // bit 0: Invalid Operation
        DE:     0x0002,     // bit 1: Denormalized Operand
        ZE:     0x0004,     // bit 2: Zero Divide
        OE:     0x0008,     // bit 3: Overflow
        UE:     0x0010,     // bit 4: Underflow
        PE:     0x0020,     // bit 5: Precision
        SF:     0x0040,     // bit 6: Stack Fault (80387 and later; triggers an Invalid Operation exception)
        EXC:    0x007F,     // all of the above exceptions
        ES:     0x0080,     // bit 7: Error/Exception Status/Summary (Interrupt Request on 8087)
        C0:     0x0100,     // bit 8: Condition Code 0
        C1:     0x0200,     // bit 9: Condition Code 1
        C2:     0x0400,     // bit 10: Condition Code 2
        ST:     0x3800,     // bits 11-13: Stack Top
        ST_SHIFT: 11,
        C3:     0x4000,     // bit 14: Condition Code 3
        CC:     0x4700,     // all condition code bits
        BUSY:   0x8000      // bit 15: Busy
    },
    TAGS: {
        VALID:  0x0,
        ZERO:   0x1,
        SPECIAL:0x2,
        EMPTY:  0x3,
        MASK:   0x3
    }
    /**
        C3 C2 C1 C0     Condition Code (CC) values following an Examine
        0  0  0  0      Valid, positive unnormalized (+Unnormal)
        0  0  0  1      Invalid, positive, exponent=0 (+NaN)
        0  0  1  0      Valid, negative, unnormalized (-Unnormal)
        0  0  1  1      Invalid, negative, exponent=0 (-NaN)
        0  1  0  0      Valid, positive, normalized (+Normal)
        0  1  0  1      Infinity, positive (+Infinity)
        0  1  1  0      Valid, negative, normalized (-Normal)
        0  1  1  1      Infinity, negative (-Infinity)
        1  0  0  0      Zero, positive (+0)
        1  0  0  1      Empty
        1  0  1  0      Zero, negative (-0)
        1  0  1  1      Empty
        1  1  0  0      Invalid, positive, exponent=0 (+Denormal)
        1  1  0  1      Empty
        1  1  1  0      Invalid, negative, exponent=0 (-Denormal)
        1  1  1  1      Empty
                        Condition Code (CC) values following an FCOM or FTST
        0  0  ?  0      ST > source operand (FCOM); ST > 0 (FTST)
        0  0  ?  1      ST < source operand (FCOM); ST < 0 (FTST)
        1  0  ?  0      ST = source operand (FCOM); ST = 0 (FTST)
        1  1  ?  1      ST is not comparable
                        Condition Code (CC) values following a Remainder
        Q1 0  Q0 Q2     Complete reduction (he three low bits of the quotient stored in C0, C3, and C1)
        ?  1  ?  ?      Incomplete reduction
     */
};

CPUx86.CYCLES_8088 = {
    nWordCyclePenalty:          4,      // NOTE: accurate for the 8088/80188 only (on the 8086/80186, it applies to odd addresses only)
    nEACyclesBase:              5,      // base or index only (BX, BP, SI or DI)
    nEACyclesDisp:              6,      // displacement only
    nEACyclesBaseIndex:         7,      // base + index (BP+DI and BX+SI)
    nEACyclesBaseIndexExtra:    8,      // base + index (BP+SI and BX+DI require an extra cycle)
    nEACyclesBaseDisp:          9,      // base or index + displacement
    nEACyclesBaseIndexDisp:     11,     // base + index + displacement (BP+DI+n and BX+SI+n)
    nEACyclesBaseIndexDispExtra:12,     // base + index + displacement (BP+SI+n and BX+DI+n require an extra cycle)
    nOpCyclesAAA:               4,      // AAA, AAS, DAA, DAS, TEST acc,imm
    nOpCyclesAAD:               60,
    nOpCyclesAAM:               83,
    nOpCyclesArithRR:           3,      // ADC, ADD, AND, OR, SBB, SUB, XOR and CMP reg,reg cycle time
    nOpCyclesArithRM:           9,      // ADC, ADD, AND, OR, SBB, SUB, and XOR reg,mem (and CMP mem,reg) cycle time
    nOpCyclesArithMR:           16,     // ADC, ADD, AND, OR, SBB, SUB, and XOR mem,reg cycle time
    nOpCyclesArithMID:          1,      // ADC, ADD, AND, OR, SBB, SUB, XOR and CMP mem,imm cycle delta
    nOpCyclesCall:              19,
    nOpCyclesCallF:             28,
    nOpCyclesCallWR:            16,
    nOpCyclesCallWM:            21,
    nOpCyclesCallDM:            37,
    nOpCyclesCLI:               2,
    nOpCyclesCompareRM:         9,      // CMP reg,mem cycle time (same as nOpCyclesArithRM on an 8086 but not on a 80286)
    nOpCyclesCWD:               5,
    nOpCyclesBound:             33,     // N/A if 8086/8088, 33-35 if 80186/80188 (TODO: Determine what the range means for an 80186/80188)
    nOpCyclesInP:               10,
    nOpCyclesInDX:              8,
    nOpCyclesIncR:              3,      // INC reg, DEC reg
    nOpCyclesIncM:              15,     // INC mem, DEC mem
    nOpCyclesInt:               51,
    nOpCyclesInt3D:             1,
    nOpCyclesIntOD:             2,
    nOpCyclesIntOFall:          4,
    nOpCyclesIRet:              32,
    nOpCyclesJmp:               15,
    nOpCyclesJmpF:              15,
    nOpCyclesJmpC:              16,
    nOpCyclesJmpCFall:          4,
    nOpCyclesJmpWR:             11,
    nOpCyclesJmpWM:             18,
    nOpCyclesJmpDM:             24,
    nOpCyclesLAHF:              4,      // LAHF, SAHF, MOV reg,imm
    nOpCyclesLEA:               2,
    nOpCyclesLS:                16,     // LDS, LES
    nOpCyclesLoop:              17,     // LOOP, LOOPNZ
    nOpCyclesLoopZ:             18,     // LOOPZ, JCXZ
    nOpCyclesLoopNZ:            19,     // LOOPNZ
    nOpCyclesLoopFall:          5,      // LOOP
    nOpCyclesLoopZFall:         6,      // LOOPZ, JCXZ
    nOpCyclesMovRR:             2,
    nOpCyclesMovRM:             8,
    nOpCyclesMovMR:             9,
    nOpCyclesMovRI:             10,
    nOpCyclesMovMI:             10,
    nOpCyclesMovAM:             10,
    nOpCyclesMovMA:             10,
    nOpCyclesDivBR:             80,     // range of 80-90
    nOpCyclesDivWR:             124,    // range of 144-162 (lowered to produce a Norton SI performance index of 1.0)
    nOpCyclesDivBM:             86,     // range of 86-96
    nOpCyclesDivWM:             134,    // range of 154-172 (lowered to produce a Norton SI performance index of 1.0)
    nOpCyclesIDivBR:            101,    // range of 101-112
    nOpCyclesIDivWR:            145,    // range of 165-184 (lowered to produce a Norton SI performance index of 1.0)
    nOpCyclesIDivBM:            107,    // range of 107-118
    nOpCyclesIDivWM:            151,    // range of 171-190 (lowered to produce a Norton SI performance index of 1.0)
    nOpCyclesMulBR:             70,     // range of 70-77
    nOpCyclesMulWR:             93,     // range of 113-118 (lowered to produce a Norton SI performance index of 1.0)
    nOpCyclesMulBM:             76,     // range of 76-83
    nOpCyclesMulWM:             104,    // range of 124-139 (lowered to produce a Norton SI performance index of 1.0)
    nOpCyclesIMulBR:            80,     // range of 80-98
    nOpCyclesIMulWR:            108,    // range of 128-154 (lowered to produce a Norton SI performance index of 1.0)
    nOpCyclesIMulBM:            86,     // range of 86-104
    nOpCyclesIMulWM:            114,    // range of 134-160 (lowered to produce a Norton SI performance index of 1.0)
    nOpCyclesNegR:              3,      // NEG reg, NOT reg
    nOpCyclesNegM:              16,     // NEG mem, NOT mem
    nOpCyclesOutP:              10,
    nOpCyclesOutDX:             8,
    nOpCyclesPopAll:            51,     // N/A if 8086/8088, 51 if 80186, 83 if 80188 (TODO: Verify)
    nOpCyclesPopReg:            8,
    nOpCyclesPopMem:            17,
    nOpCyclesPushAll:           36,     // N/A if 8086/8088, 36 if 80186, 68 if 80188 (TODO: Verify)
    nOpCyclesPushReg:           11,     // NOTE: "The 8086 Book" claims this is 10, but it's an outlier....
    nOpCyclesPushMem:           16,
    nOpCyclesPushSeg:           10,
    nOpCyclesPrefix:            2,
    nOpCyclesCmpS:              18,
    nOpCyclesCmpSr0:            9-2,    // reduced by nOpCyclesPrefix
    nOpCyclesCmpSrn:            17-2,   // reduced by nOpCyclesPrefix
    nOpCyclesLodS:              12,
    nOpCyclesLodSr0:            9-2,    // reduced by nOpCyclesPrefix
    nOpCyclesLodSrn:            13-2,   // reduced by nOpCyclesPrefix
    nOpCyclesMovS:              18,
    nOpCyclesMovSr0:            9-2,    // reduced by nOpCyclesPrefix
    nOpCyclesMovSrn:            17-2,   // reduced by nOpCyclesPrefix
    nOpCyclesScaS:              15,
    nOpCyclesScaSr0:            9-2,    // reduced by nOpCyclesPrefix
    nOpCyclesScaSrn:            15-2,   // reduced by nOpCyclesPrefix
    nOpCyclesStoS:              11,
    nOpCyclesStoSr0:            9-2,    // reduced by nOpCyclesPrefix
    nOpCyclesStoSrn:            10-2,   // reduced by nOpCyclesPrefix
    nOpCyclesRet:               8,
    nOpCyclesRetn:              12,
    nOpCyclesRetF:              18,
    nOpCyclesRetFn:             17,
    nOpCyclesShift1M:           15,     // ROL/ROR/RCL/RCR/SHL/SHR/SAR reg,1
    nOpCyclesShiftCR:           8,      // ROL/ROR/RCL/RCR/SHL/SHR/SAR reg,CL
    nOpCyclesShiftCM:           20,     // ROL/ROR/RCL/RCR/SHL/SHR/SAR mem,CL
    nOpCyclesShiftCS:           2,      // this is the left-shift value used to convert the count to the cycle cost
    nOpCyclesTestRR:            3,
    nOpCyclesTestRM:            9,
    nOpCyclesTestRI:            5,
    nOpCyclesTestMI:            11,
    nOpCyclesXchgRR:            4,
    nOpCyclesXchgRM:            17,
    nOpCyclesXLAT:              11
};

CPUx86.CYCLES_80286 = {
    nWordCyclePenalty:          0,
    nEACyclesBase:              0,
    nEACyclesDisp:              0,
    nEACyclesBaseIndex:         0,
    nEACyclesBaseIndexExtra:    0,
    nEACyclesBaseDisp:          0,
    nEACyclesBaseIndexDisp:     1,
    nEACyclesBaseIndexDispExtra:1,
    nOpCyclesAAA:               3,
    nOpCyclesAAD:               14,
    nOpCyclesAAM:               16,
    nOpCyclesArithRR:           2,
    nOpCyclesArithRM:           7,
    nOpCyclesArithMR:           7,
    nOpCyclesArithMID:          0,
    nOpCyclesCall:              7,      // on the 80286, this ALSO includes the number of bytes in the target instruction
    nOpCyclesCallF:             13,     // on the 80286, this ALSO includes the number of bytes in the target instruction
    nOpCyclesCallWR:            7,      // on the 80286, this ALSO includes the number of bytes in the target instruction
    nOpCyclesCallWM:            11,     // on the 80286, this ALSO includes the number of bytes in the target instruction
    nOpCyclesCallDM:            16,     // on the 80286, this ALSO includes the number of bytes in the target instruction
    nOpCyclesCLI:               3,
    nOpCyclesCompareRM:         6,
    nOpCyclesCWD:               2,
    nOpCyclesBound:             13,
    nOpCyclesInP:               5,
    nOpCyclesInDX:              5,
    nOpCyclesIncR:              2,
    nOpCyclesIncM:              7,
    nOpCyclesInt:               23,     // on the 80286, this ALSO includes the number of bytes in the target instruction
    nOpCyclesInt3D:             0,
    nOpCyclesIntOD:             1,
    nOpCyclesIntOFall:          3,
    nOpCyclesIRet:              17,     // on the 80286, this ALSO includes the number of bytes in the target instruction
    nOpCyclesJmp:               7,      // on the 80286, this ALSO includes the number of bytes in the target instruction
    nOpCyclesJmpF:              11,     // on the 80286, this ALSO includes the number of bytes in the target instruction
    nOpCyclesJmpC:              7,      // on the 80286, this ALSO includes the number of bytes in the target instruction
    nOpCyclesJmpCFall:          3,
    nOpCyclesJmpWR:             7,      // on the 80286, this ALSO includes the number of bytes in the target instruction
    nOpCyclesJmpWM:             11,     // on the 80286, this ALSO includes the number of bytes in the target instruction
    nOpCyclesJmpDM:             15,     // on the 80286, this ALSO includes the number of bytes in the target instruction
    nOpCyclesLAHF:              2,
    nOpCyclesLEA:               3,
    nOpCyclesLS:                7,
    nOpCyclesLoop:              8,      // on the 80286, this ALSO includes the number of bytes in the target instruction
    nOpCyclesLoopZ:             8,      // on the 80286, this ALSO includes the number of bytes in the target instruction
    nOpCyclesLoopNZ:            8,      // on the 80286, this ALSO includes the number of bytes in the target instruction
    nOpCyclesLoopFall:          4,
    nOpCyclesLoopZFall:         4,
    nOpCyclesMovRR:             2,      // this is actually the same as the 8086...
    nOpCyclesMovRM:             3,
    nOpCyclesMovMR:             5,
    nOpCyclesMovRI:             2,
    nOpCyclesMovMI:             3,
    nOpCyclesMovAM:             5,      // this is actually slower than the MOD/RM form of MOV AX,mem (see nOpCyclesMovRM)
    nOpCyclesMovMA:             3,
    nOpCyclesDivBR:             14,
    nOpCyclesDivWR:             22,
    nOpCyclesDivBM:             17,
    nOpCyclesDivWM:             25,
    nOpCyclesIDivBR:            17,
    nOpCyclesIDivWR:            25,
    nOpCyclesIDivBM:            20,
    nOpCyclesIDivWM:            28,
    nOpCyclesMulBR:             13,
    nOpCyclesMulWR:             21,
    nOpCyclesMulBM:             16,
    nOpCyclesMulWM:             24,
    nOpCyclesIMulBR:            13,
    nOpCyclesIMulWR:            21,
    nOpCyclesIMulBM:            16,
    nOpCyclesIMulWM:            24,
    nOpCyclesNegR:              2,
    nOpCyclesNegM:              7,
    nOpCyclesOutP:              5,
    nOpCyclesOutDX:             5,
    nOpCyclesPopAll:            19,
    nOpCyclesPopReg:            5,
    nOpCyclesPopMem:            5,
    nOpCyclesPushAll:           17,
    nOpCyclesPushReg:           3,
    nOpCyclesPushMem:           5,
    nOpCyclesPushSeg:           3,
    nOpCyclesPrefix:            0,
    nOpCyclesCmpS:              8,
    nOpCyclesCmpSr0:            5,
    nOpCyclesCmpSrn:            9,
    nOpCyclesLodS:              5,
    nOpCyclesLodSr0:            5,
    nOpCyclesLodSrn:            4,
    nOpCyclesMovS:              5,
    nOpCyclesMovSr0:            5,
    nOpCyclesMovSrn:            4,
    nOpCyclesScaS:              7,
    nOpCyclesScaSr0:            5,
    nOpCyclesScaSrn:            8,
    nOpCyclesStoS:              3,
    nOpCyclesStoSr0:            4,
    nOpCyclesStoSrn:            3,
    nOpCyclesRet:               11,     // on the 80286, this ALSO includes the number of bytes in the target instruction
    nOpCyclesRetn:              11,     // on the 80286, this ALSO includes the number of bytes in the target instruction
    nOpCyclesRetF:              15,     // on the 80286, this ALSO includes the number of bytes in the target instruction
    nOpCyclesRetFn:             15,     // on the 80286, this ALSO includes the number of bytes in the target instruction
    nOpCyclesShift1M:           7,
    nOpCyclesShiftCR:           5,
    nOpCyclesShiftCM:           8,
    nOpCyclesShiftCS:           0,
    nOpCyclesTestRR:            2,
    nOpCyclesTestRM:            6,
    nOpCyclesTestRI:            3,
    nOpCyclesTestMI:            6,
    nOpCyclesXchgRR:            3,
    nOpCyclesXchgRM:            5,
    nOpCyclesXLAT:              5
};

/**
 * TODO: All 80386 cycle counts are based on 80286 counts until I have time to hand-generate an 80386-specific table;
 * the values below are used by selected 32-bit opcode handlers only.
 */
CPUx86.CYCLES_80386 = {
    nEACyclesBase:              0,
    nEACyclesDisp:              0,
    nEACyclesBaseIndex:         0,
    nEACyclesBaseIndexExtra:    0,
    nEACyclesBaseDisp:          0,
    nEACyclesBaseIndexDisp:     1,
    nEACyclesBaseIndexDispExtra:1
};

/**
 * These PS flags are always stored directly in regPS for the 8086/8088, hence the
 * "direct" designation; other processors must adjust these bits accordingly.  The final
 * adjusted value is stored in PS_DIRECT (ie, 80286 and up also include PS.IOPL.MASK and
 * PS.NT in PS_DIRECT).
 */
CPUx86.PS_DIRECT_8086 = (CPUx86.PS.TF | CPUx86.PS.IF | CPUx86.PS.DF);

/**
 * These are the default "always set" PS bits for the 8086/8088; other processors must
 * adjust these bits accordingly.  The final adjusted value is stored in PS_SET.
 */
CPUx86.PS_SET_8086 = (CPUx86.PS.BIT1 | CPUx86.PS.IOPL.MASK | CPUx86.PS.NT | CPUx86.PS.BIT15);

/**
 * These PS arithmetic and logical flags may be "cached" across several result registers;
 * whether or not they're currently cached depends on the RESULT bits in resultType.
 */
CPUx86.PS_CACHED = (CPUx86.PS.CF | CPUx86.PS.PF | CPUx86.PS.AF | CPUx86.PS.ZF | CPUx86.PS.SF | CPUx86.PS.OF);

/**
 * PS_SAHF is a subset of the arithmetic flags, and refers only to those flags that the
 * SAHF and LAHF "8080 legacy" opcodes affect.
 */
CPUx86.PS_SAHF = (CPUx86.PS.CF | CPUx86.PS.PF | CPUx86.PS.AF | CPUx86.PS.ZF | CPUx86.PS.SF);

/**
 * Before we zero opFlags, we first see if any of the following PREFIX bits were set.  If any were set,
 * they are OR'ed into opPrefixes; otherwise, opPrefixes is zeroed as well.  This gives prefix-conscious
 * instructions like LODS, MOVS, STOS, CMPS, etc, a way of determining which prefixes, if any, immediately
 * preceded them.
 */
CPUx86.OPFLAG_PREFIXES = (CPUx86.OPFLAG.SEG | CPUx86.OPFLAG.LOCK | CPUx86.OPFLAG.REPZ | CPUx86.OPFLAG.REPNZ | CPUx86.OPFLAG.DATASIZE | CPUx86.OPFLAG.ADDRSIZE);

CPUx86.CLASSES["CPUx86"] = CPUx86;
