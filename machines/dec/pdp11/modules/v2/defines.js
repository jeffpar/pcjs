/**
 * @fileoverview PDP-11 compile-time definitions
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * Portions adapted from the JavaScript PDP 11/70 Emulator written by Paul Nankervis
 * <paulnank@hotmail.com> at <http://skn.noip.me/pdp11/pdp11.html> with permission.
 */

import { APPVERSION, COMPILED, COPYRIGHT, CSSCLASS, DEBUG, DEBUGGER, LICENSE, MAXDEBUG, PRIVATE, RS232, SITEURL, globals } from "../../../../modules/v2/defines.js";

/**
 * @define {string}
 */
const APPCLASS = "pdp11";       // this @define is the default application class (eg, "pcx86", "c1pjs")

/**
 * APPNAME is used more for display purposes than anything else now.  APPCLASS is what matters in terms
 * of folder and file names, CSS styles, etc.
 *
 * @define {string}
 */
const APPNAME = "PDPjs";        // this @define is the default application name (eg, "PCx86", "C1Pjs")

/**
 * BYTEARRAYS is a Closure Compiler compile-time option that allocates an Array of numbers for every Memory block,
 * where each a number represents ONE byte; very wasteful, but potentially slightly faster.
 *
 * See the Memory component for details.
 *
 * @define {boolean}
 */
const BYTEARRAYS = false;

/**
 * MEMFAULT forces the Memory interfaces to signal a CPU fault when a word is accessed using an odd (unaligned) address.
 *
 * Since PDPjs inherited its Bus component from PCx86, it included support for both aligned and unaligned word accesses
 * by default.  However, the PDP-11 adds a wrinkle: when an odd address is used to access a memory word, a BUS trap
 * must be generated.  Note that odd IOPAGE word accesses are fine; this only affects the Memory component.
 *
 * When the MMU is enabled, these checks may also be performed at a higher level, eliminating the need for them at the
 * physical memory level.
 */
const MEMFAULT = true;

/**
 * TYPEDARRAYS enables use of typed arrays for Memory blocks.  This used to be a compile-time-only option, but I've
 * added Memory access functions for typed arrays (see MemoryPDP11.afnTypedArray), so support can be enabled dynamically now.
 *
 * See the Memory component for details.
 */
const TYPEDARRAYS = true; // (typeof ArrayBuffer !== 'undefined');

/**
 * WORDBUS turns off support for unaligned memory words.  Whereas MEMFAULT necessarily slows down memory word accesses
 * slightly, WORDBUS is able to speed them up slightly, by assuming that all word accesses (which didn't fault) must be
 * aligned.  This affects all word accesses, even IOPAGE accesses, because it also eliminates cross-block boundary checks.
 *
 * Don't worry that the source code looks MORE complicated rather than LESS with the additional MEMFAULT and WORDBUS checks,
 * because the Closure Compiler eliminates those checks and throws away the (unreachable) code blocks that deal with unaligned
 * accesses.
 */
const WORDBUS = true;

const PDP11 = {
    /*
     * CPU model numbers (supported)
     *
     * The 11/20 includes the 11/10, which is not identified separately because there was
     * nothing functionally different about it.
     *
     * The 11/40 added the MODE bits to the PSW (but only KERNEL=00 and USER=11) and 18-bit
     * addressing via an MMU; there was still only one register set.
     *
     * The 11/45 added REGSET bit to the PSW (to support a second register set), SUPER=01
     * mode to the existing KERNEL=00 and USER=11 modes, separate I/D spaces, and other MMU
     * extensions (eg, MMR1 and MMR3).
     *
     * The 11/70 added 22-bit addressing and corresponding extensions to the MMU.
     */
    MODEL_1120: 1120,
    MODEL_1140: 1140,
    MODEL_1145: 1145,
    MODEL_1170: 1170,

    /*
     * This constant is used to mark points in the code where the physical address being returned
     * is invalid and should not be used.
     *
     * In a 32-bit CPU, -1 (ie, 0xffffffff) could actually be a valid address, so consider changing
     * ADDR_INVALID to NaN or null (which is also why all ADDR_INVALID tests should use strict equality
     * operators).
     *
     * The main reason I'm NOT using NaN or null now is my concern that, by mixing non-numbers
     * (specifically, values outside the range of signed 32-bit integers), performance may suffer.
     *
     * WARNING: Like many of the properties defined here, ADDR_INVALID is a common constant, which the
     * Closure Compiler will happily inline (with or without @const annotations; in fact, I've yet to
     * see a @const annotation EVER improve automatic inlining).  However, if you don't make ABSOLUTELY
     * certain that this file is included BEFORE the first reference to any of these properties, that
     * automatic inlining will no longer occur.
     */
    ADDR_INVALID:   -1,
    /*
     * Processor modes
     */
    MODE: {
        KERNEL:     0x0,        // 11/40 and higher
        SUPER:      0x1,        // 11/45 and higher
        UNUSED:     0x2,
        USER:       0x3,        // 11/40 and higher
        MASK:       0x3
    },
    /*
     * Processor Status Word (stored in regPSW) at 177776
     */
    PSW: {
        CF:         0x0001,     // bit  0     (000001)  Carry Flag
        VF:         0x0002,     // bit  1     (000002)  Overflow Flag (aka OF on Intel processors)
        ZF:         0x0004,     // bit  2     (000004)  Zero Flag
        NF:         0x0008,     // bit  3     (000010)  Negative Flag (aka SF -- Sign Flag -- on Intel processors)
        TF:         0x0010,     // bit  4     (000020)  Trap Flag
        PRI:        0x00E0,     // bits 5-7   (000340)  Priority
        UNUSED:     0x0700,     // bits 8-10  (003400)  UNUSED
        /*
         * The REGSET bit (and the alternate register set stored in regsAlt) came into existence
         * with the 11/45; (ie, they were not present on the 11/10, 11/20, or 11/40).
         */
        REGSET:     0x0800,     // bit  11    (004000)  Register Set
        /*
         * The MODE bits came into existence with the 11/40 (eg, not present on the 11/10 or 11/20).
         */
        PMODE:      0x3000,     // bits 12-13 (030000)  Prev Mode (see PDP11.MODE)
        CMODE:      0xC000,     // bits 14-15 (140000)  Curr Mode (see PDP11.MODE)
        SHIFT: {
            CF:     0,
            VF:     1,
            ZF:     2,
            NF:     3,
            TF:     4,
            PRI:    5,
            PMODE:  12,
            CMODE:  14
        }
    },
    /*
     * Program Interrupt Register (stored in regPIR) at 177772
     *
     * The PIA bits at 5-7 are designed to align with PRI bits 5-7 in the PSW.
     */
    PIR: {
        BITS:       0xFE00,     // bits 9-15 correspond to interrupt requests 1-7
        PIA:        0x00EE,     // the PIA bits contain two copies of the corresponding interrupt request priority
        PIA_INC:    0x0022,     // both sets of PIA bits can be incremented with this constant
        SHIFT: {
            BITS:   9
        }
    },
    /*
     * PDP-11 trap vectors
     */
    TRAP: {
        UNDEFINED:  0x00,       // 000  (reserved)
        BUS:        0x04,       // 004  unaligned address, non-existent memory, illegal instruction, etc
        RESERVED:   0x08,       // 010  reserved instructions
        BPT:        0x0C,       // 014  BPT: breakpoint trap (trace)
        IOT:        0x10,       // 020  IOT: input/output trap
        PF:         0x14,       // 024  power fail
        EMT:        0x18,       // 030  EMT: emulator trap
        TRAP:       0x1C,       // 034  TRAP instruction
        PIRQ:       0xA0,       // 240  PIRQ: program interrupt request
        MMU:        0xA8        // 250  MMU: aborts and traps
    },
    /*
     * PDP-11 trap reasons; the reason may also be a non-negative address indicating a BUS memory error
     * (unaligned address or non-existent memory).  Any reason >= RED (which includes BUS memory errors) generate
     * immediate (thrown) traps, as they are considered ABORTs; the rest generate synchronous traps.
     */
    REASON: {
        PANIC:      -1,         // immediate halt (internal error)
        ABORT:      -2,         // immediate MMU fault
        ILLEGAL:    -3,         // immediate invalid opcode (BUS)
        RED:        -4,         // immediate stack overflow fault (BUS)
        YELLOW:     -5,         // deferred stack overflow fault (BUS)
        FAULT:      -6,         // deferred MMU fault
        TRACE:      -7,         // deferred TF fault (BPT)
        HALT:       -8,         // illegal HALT (BUS)
        OPCODE:     -9,         // opcode-generated trap (eg, BPT, EMT, IOT, TRAP, or RESERVED opcode)
        INTERRUPT:  -10,        // device-generated trap (vector is device-specific)
    },
    REASONS: [
        "UNKNOWN",
        "PANIC",
        "ABORT",
        "ILLEGAL",
        "RED",
        "YELLOW",
        "FAULT",
        "TRACE",
        "HALT",
        "OPCODE",
        "INTERRUPT"
    ],
    /*
     * Assorted common opcodes
     */
    OPCODE: {
        HALT:       0x0000,
        WAIT:       0x0001,
        BPT:        0x0003,
        IOT:        0x0004,
        JSR_OP:     0x0800,
        JSR_MASK:   0xFE00,
        SOB_OP:     0x7E00,
        SOB_MASK:   0xFE00,
        EMT_OP:     0x8800,
        EMT_MASK:   0xFF00,
        TRAP_OP:    0x8900,
        TRAP_MASK:  0xFF00,
        INVALID:    0xFFFF      // far from the only invalid opcode, just a KNOWN invalid opcode
    },
    /*
     * Internal operation state flags
     */
    OPFLAG: {
        IRQ_DELAY:  0x0001,     // incremented until it becomes IRQ (set by SPL and traps)
        IRQ:        0x0002,     // time to call checkInterrupts()
        IRQ_MASK:   0x0003,
        DEBUGGER:   0x0004,     // set if the Debugger wants to perform checks
        WAIT:       0x0008,     // WAIT operation in progress
        PRESERVE:   0x000F,     // OPFLAG bits to preserve prior to the next instruction
        TRAP_TF:    0x0010,     // aka PDP11.PSW.TF (WARNING: do not change this bit, or you will likely break opRTI())
        TRAP_SP:    0x0020,     // set for a deferred BUS trap (due to a "yellow" stack overflow condition)
        TRAP_MMU:   0x0040,
        TRAP_MASK:  0x0070,
        TRAP_LAST:  0x0080,     // set if last operation was a trap (see trapLast for the vector, and trapReason for the reason)
        TRAP_RED:   0x0100,     // set whenever a RED trap occurs, used to catch double RED traps (time to PANIC)
    },
    /*
     * Opcode reg (opcode bits 2-0)
     */
    OPREG: {
        MASK:       0x07
    },
    /*
     * Opcode modes (opcode bits 5-3)
     */
    OPMODE: {
        REG:        0x00,       // REGISTER                 (register is operand)
        REGD:       0x08,       // REGISTER DEFERRED        (register is address of operand)
        POSTINC:    0x10,       // AUTO-INCREMENT           (register is address of operand, register incremented)
        POSTINCD:   0x18,       // AUTO-INCREMENT DEFERRED  (register is address of address of operand, register incremented)
        PREDEC:     0x20,       // AUTO-DECREMENT           (register decremented, register is address of operand)
        PREDECD:    0x28,       // AUTO-DECREMENT DEFERRED  (register decremented, register is address of address of operand)
        INDEX:      0x30,       // INDEX                    (register + next word is address of operand)
        INDEXD:     0x38,       // INDEX DEFERRED           (register + next word is address of address of operand)
        MASK:       0x38,
        SHIFT:      3
    },
    DSTMODE: {
        REG:        0x0007,
        MODE:       0x0038,
        MASK:       0x003F,
        SHIFT:      0
    },
    SRCMODE: {
        REG:        0x01C0,
        MODE:       0x0E00,
        MASK:       0x0FC0,
        SHIFT:      6
    },
    REG: {
        SP:         6,
        PC:         7,
    },
    /*
     * Internal memory access flags
     */
    ACCESS: {
        WORD:       0x00,
        BYTE:       0x01,
        READ:       0x02,
        WRITE:      0x04,
        UPDATE:     0x06,
        VIRT:       0x08,       // getVirtualByMode() leaves bit 17 clear if this is set (otherwise the caller would have to clear it again)
        ISPACE:     0x00000,
        DSPACE:     0x10000     // getVirtualByMode() sets bit 17 in any 16-bit virtual address that refers to D space (as opposed to I space)
    },
    /*
     * Internal flags passed to writeDstByte()
     *
     * The BYTE and SBYTE values have been chosen so that they can be used directly as masks.
     */
    WRITE: {
        BYTE:       0xff,        // write byte normally
        SBYTE:      0xffff       // sign-extend byte to word
    },
    CPUERR: {                   // 177766
        RED:        0x0004,     // 000004 red zone stack limit
        YELLOW:     0x0008,     // 000010 yellow zone stack limit
        TIMEOUT:    0x0010,     // 000020 UNIBUS timeout error
        NOMEMORY:   0x0020,     // 000040 non-existent memory error
        ODDADDR:    0x0040,     // 000100 odd word address error (as in non-even, not strange)
        BADHALT:    0x0080      // 000200 HALT attempted in USER or SUPER modes
    },
    MMR0: {                     // 177572
        ENABLED:    0x0001,     // 000001 address relocation enabled
        PAGE_NUM:   0x000E,     // 000016 page number of last fault
        PAGE_D:     0x0010,     // 000020 last fault occurred in D space (11/45 and 11/70)
        PAGE:       0x001E,     // 000176 (all of the PAGE bits)
        MODE:       0x0060,     // 000140 processor mode as of last fault
        COMPLETED:  0x0080,     // 000200 last instruction completed (R/O) (11/70)
        MAINT:      0x0100,     // 000400 only destination mode references will be relocated
        MMU_TRAPS:  0x0200,     // 001000 enable MMU traps (11/70)
        UNUSED:     0x0C00,     // 006000
        TRAP_MMU:   0x1000,     // 010000 trap: MMU (11/70)
        ABORT_RO:   0x2000,     // 020000 abort: read-only
        ABORT_PL:   0x4000,     // 040000 abort: page length
        ABORT_NR:   0x8000,     // 100000 abort: non-resident
        ABORT:      0xE000,     // 160000 (all of the ABORT bits)
        UPDATE:     0xF0FE,     // Includes all of: ABORT, TRAP, COMPLETED, MODE, and PAGE bits
        SHIFT: {
            PAGE:   1,
            MODE:   5
        }
    },
    MMR1: {                     // 177574: general purpose auto-inc/auto-dec register (11/45 and 11/70)
        REG1_NUM:   0x0007,     //
        REG1_DELTA: 0x00F8,     //
        REG2_NUM:   0x0700,     //
        REG2_DELTA: 0xF800      //
    },
    MMR2: {                     // 177576: virtual program counter register
    },
    MMR3: {                     // 172516: mapping register (11/45 and 11/70)
        USER_D:     0x0001,     // (000001)
        SUPER_D:    0x0002,     // (000002)
        KERNEL_D:   0x0004,     // (000004)
        MMU_22BIT:  0x0010,     // (000020)
        UNIBUS_MAP: 0x0020      // (000040) UNIBUS map relocation enabled
    },
    PDR: {
        ACF: {
            NR:     0x0,        // non-resident, abort all accesses
            RO1:    0x1,        // read-only, abort on write attempt, memory management trap on read (11/70)
            RO:     0x2,        // read-only, abort on write attempt
            U1:     0x3,        // unused, abort all accesses--reserved for future use
            RW1:    0x4,        // read/write, memory management trap upon completion of a read or write
            RW2:    0x5,        // read/write, memory management trap upon completion of a write (11/70)
            RW:     0x6,        // read/write, no system trap/abort action
            U2:     0x7,        // unused, abort all accesses--reserved for future use
            MASK:   0x7
        },
        ED:         0x0008,     // expansion direction (if set, the page expands downward from block number 127)
        UNUSED:     0x0030,
        MODIFIED:   0x0040,     // page has been written (bit cleared when either PDR or PAR is written)
        ACCESSED:   0x0080,     // page has been accessed (bit cleared when either PDR or PAR is written) (11/70)
        PLF:        0x7F00,     // page length field
        BC:         0x8000      // bypass cache (11/44 only)
    },
    /*
     * Assorted special (UNIBUS) addresses
     *
     * Within the PDP-11/45's 18-bit address space, of the 0x40000 possible addresses (256Kb), the top 0x2000
     * (8Kb) is called the IOPAGE and is reserved for CPU and I/O registers.  The IOPAGE spans 0x3E000-0x3FFFF.
     *
     * Within the PDP-11/70's 22-bit address space, of the 0x400000 possible addresses (4Mb), the top 0x20000
     * (256Kb) is mapped to the UNIBUS (not physical memory), and as before, the top 0x2000 (8Kb) of that is
     * mapped to the IOPAGE.
     *
     * To map 18-bit UNIBUS addresses to 22-bit physical addresses, the 11/70 uses a UNIBUS relocation map.
     * It consists of 31 double-word registers that each hold a 22-bit base address.  When UNIBUS relocation
     * is enabled, the top 5 bits of an address select one of the 31 mapping registers, and the bottom 13 bits
     * are then added to the contents of the selected mapping register.
     *
     * ES6 ALERT: By using octal constants, I'm finally dipping my toe into ES6 (aka ECMAScript 2015) waters.
     * You'll even see a few binary constants below, too.  If you're loading this raw source code into your browser,
     * then by now (2016) you're almost certainly using an ES6-aware browser.  Production sites should be using code
     * compiled by Google's Closure Compiler, which we configure to produce code that's backward-compatible with ES5
     * (for example, all binary, octal, and hex constants are converted to decimal values).
     *
     * For more details: https://github.com/google/closure-compiler/wiki/ECMAScript6
     */
    UNIBUS: {       //16-bit       18-bit     22-bit         Hex    Description
        UNIMAP:     0o170200,   //                                  UNIBUS Mapping Registers (0-31) 64 words (ends at 0o170372)
        SIPDR0:     0o172200,   //                                  Supervisor I Page Descriptor Register 0
        SIPDR1:     0o172202,   //                                  Supervisor I Page Descriptor Register 1
        SIPDR2:     0o172204,   //                                  Supervisor I Page Descriptor Register 2
        SIPDR3:     0o172206,   //                                  Supervisor I Page Descriptor Register 3
        SIPDR4:     0o172210,   //                                  Supervisor I Page Descriptor Register 4
        SIPDR5:     0o172212,   //                                  Supervisor I Page Descriptor Register 5
        SIPDR6:     0o172214,   //                                  Supervisor I Page Descriptor Register 6
        SIPDR7:     0o172216,   //                                  Supervisor I Page Descriptor Register 7
        SDPDR0:     0o172220,   //                                  Supervisor D Page Descriptor Register 0
        SDPDR1:     0o172222,   //                                  Supervisor D Page Descriptor Register 1
        SDPDR2:     0o172224,   //                                  Supervisor D Page Descriptor Register 2
        SDPDR3:     0o172226,   //                                  Supervisor D Page Descriptor Register 3
        SDPDR4:     0o172230,   //                                  Supervisor D Page Descriptor Register 4
        SDPDR5:     0o172232,   //                                  Supervisor D Page Descriptor Register 5
        SDPDR6:     0o172234,   //                                  Supervisor D Page Descriptor Register 6
        SDPDR7:     0o172236,   //                                  Supervisor D Page Descriptor Register 7
        SIPAR0:     0o172240,   //                                  Supervisor I Page Address Register 0
        SIPAR1:     0o172242,   //                                  Supervisor I Page Address Register 1
        SIPAR2:     0o172244,   //                                  Supervisor I Page Address Register 2
        SIPAR3:     0o172246,   //                                  Supervisor I Page Address Register 3
        SIPAR4:     0o172250,   //                                  Supervisor I Page Address Register 4
        SIPAR5:     0o172252,   //                                  Supervisor I Page Address Register 5
        SIPAR6:     0o172254,   //                                  Supervisor I Page Address Register 6
        SIPAR7:     0o172256,   //                                  Supervisor I Page Address Register 7
        SDPAR0:     0o172260,   //                                  Supervisor D Page Address Register 0
        SDPAR1:     0o172262,   //                                  Supervisor D Page Address Register 1
        SDPAR2:     0o172264,   //                                  Supervisor D Page Address Register 2
        SDPAR3:     0o172266,   //                                  Supervisor D Page Address Register 3
        SDPAR4:     0o172270,   //                                  Supervisor D Page Address Register 4
        SDPAR5:     0o172272,   //                                  Supervisor D Page Address Register 5
        SDPAR6:     0o172274,   //                                  Supervisor D Page Address Register 6
        SDPAR7:     0o172276,   //                                  Supervisor D Page Address Register 7
        KIPDR0:     0o172300,   //                                  Kernel I Page Descriptor Register 0
        KIPDR1:     0o172302,   //                                  Kernel I Page Descriptor Register 1
        KIPDR2:     0o172304,   //                                  Kernel I Page Descriptor Register 2
        KIPDR3:     0o172306,   //                                  Kernel I Page Descriptor Register 3
        KIPDR4:     0o172310,   //                                  Kernel I Page Descriptor Register 4
        KIPDR5:     0o172312,   //                                  Kernel I Page Descriptor Register 5
        KIPDR6:     0o172314,   //                                  Kernel I Page Descriptor Register 6
        KIPDR7:     0o172316,   //                                  Kernel I Page Descriptor Register 7
        KDPDR0:     0o172320,   //                                  Kernel D Page Descriptor Register 0
        KDPDR1:     0o172322,   //                                  Kernel D Page Descriptor Register 1
        KDPDR2:     0o172324,   //                                  Kernel D Page Descriptor Register 2
        KDPDR3:     0o172326,   //                                  Kernel D Page Descriptor Register 3
        KDPDR4:     0o172330,   //                                  Kernel D Page Descriptor Register 4
        KDPDR5:     0o172332,   //                                  Kernel D Page Descriptor Register 5
        KDPDR6:     0o172334,   //                                  Kernel D Page Descriptor Register 6
        KDPDR7:     0o172336,   //                                  Kernel D Page Descriptor Register 7
        KIPAR0:     0o172340,   //                                  Kernel I Page Address Register 0
        KIPAR1:     0o172342,   //                                  Kernel I Page Address Register 1
        KIPAR2:     0o172344,   //                                  Kernel I Page Address Register 2
        KIPAR3:     0o172346,   //                                  Kernel I Page Address Register 3
        KIPAR4:     0o172350,   //                                  Kernel I Page Address Register 4
        KIPAR5:     0o172352,   //                                  Kernel I Page Address Register 5
        KIPAR6:     0o172354,   //                                  Kernel I Page Address Register 6
        KIPAR7:     0o172356,   //                                  Kernel I Page Address Register 7
        KDPAR0:     0o172360,   //                                  Kernel D Page Address Register 0
        KDPAR1:     0o172362,   //                                  Kernel D Page Address Register 1
        KDPAR2:     0o172364,   //                                  Kernel D Page Address Register 2
        KDPAR3:     0o172366,   //                                  Kernel D Page Address Register 3
        KDPAR4:     0o172370,   //                                  Kernel D Page Address Register 4
        KDPAR5:     0o172372,   //                                  Kernel D Page Address Register 5
        KDPAR6:     0o172374,   //                                  Kernel D Page Address Register 6
        KDPAR7:     0o172376,   //                                  Kernel D Page Address Register 7
        MMR3:       0o172516,   // 772516   17772516
        RLCS:       0o174400,   //                                  RL11 Control Status Register
        RLBA:       0o174402,   //                                  RL11 Bus Address Register
        RLDA:       0o174404,   //                                  RL11 Disk Address Register
        RLMP:       0o174406,   //                                  RL11 Multi-Purpose Register
        RLBE:       0o174410,   //                                  RL11 Bus (Address) Extension Register (RLV12 controller only)
        DL11:       0o176500,   //                                  DL11 Additional Register Range (ends at 0o176676)
        RXCS:       0o177170,   //                                  RX11 Command and Status Register
        RXDB:       0o177172,   //                                  RX11 Data Buffer Register
        RKDS:       0o177400,   //                                  RK11 Drive Status Register
        RKER:       0o177402,   //                                  RK11 Error Register
        RKCS:       0o177404,   //                                  RK11 Control Status Register
        RKWC:       0o177406,   //                                  RK11 Word Count Register
        RKBA:       0o177410,   //                                  RK11 Bus Address Register
        RKDA:       0o177412,   //                                  RK11 Disk Address Register
        RKUN:       0o177414,   //                                  RK11 UNUSED (just to make it clear we didn't forget something)
        RKDB:       0o177416,   //                                  RK11 Data Buffer Register
        LKS:        0o177546,   //                                  KW11-L Clock Status
        PRS:        0o177550,   //                                  PC11 (and PR11) Reader Status Register
        PRB:        0o177552,   //                                  PC11 (and PR11) Reader Buffer Register
        PPS:        0o177554,   //                                  PC11 Punch Status Register
        PPB:        0o177556,   //                                  PC11 Punch Buffer Register
        RCSR:       0o177560,   //                                  DL11 Receiver Status Register
        RBUF:       0o177562,   //                                  DL11 Receiver Data Buffer Register
        XCSR:       0o177564,   //                                  DL11 Transmitter Status Register
        XBUF:       0o177566,   //                                  DL11 Transmitter Data Buffer Register
        CNSW:       0o177570,   //                                  Console (Front Panel) Switch/Display Register
        MMR0:       0o177572,   // 777572   17777572
        MMR1:       0o177574,   // 777574   17777574
        MMR2:       0o177576,   // 777576   17777576
        UIPDR0:     0o177600,   //                                  User I Page Descriptor Register 0
        UIPDR1:     0o177602,   //                                  User I Page Descriptor Register 1
        UIPDR2:     0o177604,   //                                  User I Page Descriptor Register 2
        UIPDR3:     0o177606,   //                                  User I Page Descriptor Register 3
        UIPDR4:     0o177610,   //                                  User I Page Descriptor Register 4
        UIPDR5:     0o177612,   //                                  User I Page Descriptor Register 5
        UIPDR6:     0o177614,   //                                  User I Page Descriptor Register 6
        UIPDR7:     0o177616,   //                                  User I Page Descriptor Register 7
        UDPDR0:     0o177620,   //                                  User D Page Descriptor Register 0
        UDPDR1:     0o177622,   //                                  User D Page Descriptor Register 1
        UDPDR2:     0o177624,   //                                  User D Page Descriptor Register 2
        UDPDR3:     0o177626,   //                                  User D Page Descriptor Register 3
        UDPDR4:     0o177630,   //                                  User D Page Descriptor Register 4
        UDPDR5:     0o177632,   //                                  User D Page Descriptor Register 5
        UDPDR6:     0o177634,   //                                  User D Page Descriptor Register 6
        UDPDR7:     0o177636,   //                                  User D Page Descriptor Register 7
        UIPAR0:     0o177640,   //                                  User I Page Address Register 0
        UIPAR1:     0o177642,   //                                  User I Page Address Register 1
        UIPAR2:     0o177644,   //                                  User I Page Address Register 2
        UIPAR3:     0o177646,   //                                  User I Page Address Register 3
        UIPAR4:     0o177650,   //                                  User I Page Address Register 4
        UIPAR5:     0o177652,   //                                  User I Page Address Register 5
        UIPAR6:     0o177654,   //                                  User I Page Address Register 6
        UIPAR7:     0o177656,   //                                  User I Page Address Register 7
        UDPAR0:     0o177660,   //                                  User D Page Address Register 0
        UDPAR1:     0o177662,   //                                  User D Page Address Register 1
        UDPAR2:     0o177664,   //                                  User D Page Address Register 2
        UDPAR3:     0o177666,   //                                  User D Page Address Register 3
        UDPAR4:     0o177670,   //                                  User D Page Address Register 4
        UDPAR5:     0o177672,   //                                  User D Page Address Register 5
        UDPAR6:     0o177674,   //                                  User D Page Address Register 6
        UDPAR7:     0o177676,   //                                  User D Page Address Register 7
        R0SET0:     0o177700,   //
        R1SET0:     0o177701,   //
        R2SET0:     0o177702,   //
        R3SET0:     0o177703,   //
        R4SET0:     0o177704,   //
        R5SET0:     0o177705,   //
        R6KERNEL:   0o177706,   //
        R7KERNEL:   0o177707,   //
        R0SET1:     0o177710,   //
        R1SET1:     0o177711,   //
        R2SET1:     0o177712,   //
        R3SET1:     0o177713,   //
        R4SET1:     0o177714,   //
        R5SET1:     0o177715,   //
        R6SUPER:    0o177716,   //
        R6USER:     0o177717,   //
        /*
         * This next group of registers is largely ignored; all accesses are routed to regsControl[],
         * and therefore are managed as a block of 8 "CTRL" registers.
         */
        CTRL:       0o177740,
        LAERR:      0o177740,   //                                  Low Address Error                           (11/70 only)
        HAERR:      0o177742,   //                                  High Address Error                          (11/70 only)
        MEMERR:     0o177744,   //                                  Memory System Error                         (11/70 only)
        CACHEC:     0o177746,   //                                  Cache Control                               (11/70 only)
        MAINT:      0o177750,   //                                  Maintenance                                 (11/70 only)
        HITMISS:    0o177752,   //                                  Hit/Miss                                    (11/70 only)
        UNDEF1:     0o177754,   //
        UNDEF2:     0o177756,   //
        LSIZE:      0o177760,   //                                  Lower Size Register (last 64-byte block #)  (11/70 only)
        HSIZE:      0o177762,   //                                  Upper Size Register (always zero)           (11/70 only)
        SYSID:      0o177764,   //                                  System ID Register                          (11/70 only)
        CPUERR:     0o177766,   //                                  CPU error                                   (11/70 only)
        MB:         0o177770,   //                                  Microprogram break                          (11/70 only)
        PIR:        0o177772,   //                                  Program Interrupt Request
        SL:         0o177774,   //                                  Stack Limit Register
        PSW:        0o177776    // 777776   17777776    0x3FFFFE    Processor Status Word
    },
    DL11: {                     // Serial Line Interface (program compatible with the KL11 for control of console teleprinters)
        PRI:        4,
        RVEC:       0o060,
        XVEC:       0o064,
        RCSR: {                 // 177560: DL11 Receiver Status Register
            RE:     0x0001,     // Reader Enable (W/O)
            DTR:    0x0002,     // Data Terminal Ready (R/W)
            RTS:    0x0004,     // Request To Send (R/W)
            STD:    0x0008,     // Secondary Transmitted Data (R/W)
            DIE:    0x0020,     // Dataset Interrupt Enable (R/W)
            RIE:    0x0040,     // Receiver Interrupt Enable (R/W)
            RD:     0x0080,     // Receiver Done (R/O)
            SRD:    0x0400,     // Secondary Received Data (R/O)
            RA:     0x0800,     // Receiver Active (R/O)
            CD:     0x1000,     // Carrier Detect (R/O)
            CTS:    0x2000,     // Clear To Send (R/O)
            RI:     0x4000,     // Ring Indicator (R/O)
            DSC:    0x8000,     // Dataset Status Change (R/O)
            RMASK:  0xFFFE,     // bits readable (TODO: All I know for sure is that bit 0 is NOT readable; see readRCSR())
            WMASK:  0x006F,     // bits writable
            RS232:  0x0006,     // bits affecting RS-232 status updates
            BAUD:   9600
        },
        RBUF: {                 // 177562: DL11 Receiver Data Buffer Register
            DATA:   0x00ff,     // Received Data (R/O)
            PARITY: 0x1000,     // Received Data Parity (R/O)
            FE:     0x2000,     // Framing Error (R/O)
            OE:     0x4000,     // Overrun Error (R/O)
            ERROR:  0x8000      // Error (R/O)
        },
        XCSR: {                 // 177564: DL11 Transmitter Status Register
            BREAK:  0x0001,     // BREAK (R/W)
            MAINT:  0x0004,     // Maintenance (R/W)
            TIE:    0x0040,     // Transmitter Interrupt Enable (R/W)
            READY:  0x0080,     // Transmitter Ready (R/O)
            RMASK:  0x00C5,
            WMASK:  0x0045,
            BAUD:   9600
        },
        XBUF: {                 // 177566: DL11 Transmitter Data Buffer Register
            DATA:   0x00FF      // Transmitted Data (W/O) (TODO: Determine why pdp11.js effectively defined this as 0x7F)
        }
    },
    KW11: {                     // KW11-L Line Time Clock (60Hz; well, OK, or 50Hz, if you're in the UK, I suppose...)
        PRI:        6,
        VEC:        0o100,
        DELAY:      0,
        LKS: {                  // 177546: KW11-L Clock Status
            IE:     0x0040,     // Interrupt Enable
            MON:    0x0080,     // Monitor
            MASK:   0x00C0      // these are the only bits that can read or written
        }
    },
    PC11: {                     // High Speed Reader & Punch (PR11 is a Reader-only unit)
        PRI:        4,          // NOTE: reader has precedence over punch
        RVEC:       0o070,      // reader vector
        PVEC:       0o074,      // punch vector
        PRS: {                  // 177550: PC11 (and PR11) Reader Status Register
            RE:     0x0001,     // (000001) Reader Enable (W/O)
            IE:     0x0040,     // (000100) Reader Interrupt Enable (allows the DONE and ERROR bits to trigger an interrupt)
            DONE:   0x0080,     // (000200) Done (R/O)
            BUSY:   0x0800,     // (004000) Busy (R/O)
            ERROR:  0x8000,     // (100000) Error (R/O)
            CLEAR:  0x08C0,     // (004300) bits cleared on INIT
            RMASK:  0xFFFE,     // (177776) bits readable (TODO: All I know for sure is that bit 0 is NOT readable; see readPRS())
            WMASK:  0x0041,     // (000101) bits writable
            BAUD:   3600
        },
        PRB: {                  // 177552: PC11 (and PR11) Reader Buffer Register
            MASK:   0x00FF      // Data
        },
        PPS: {                  // 177554: PC11 Punch Status Register
            IE:     0x0040,     // Interrupt Enable
            RDY:    0x0080,     // Ready
            ERROR:  0x8000,     // Error (eg, no tape in punch, or punch has no power)
            WMASK:  0x0040,     // bits writable
            BAUD:   600
        },
        PPB: {                  // 177556: PC11 Punch Buffer Register
            MASK:   0x00FF      // Data
        }
    },
    RK11: {                     // RK11 Disk Controller
        PRI:        5,
        VEC:        0o220,
        DRIVES:     8,          // maximum of 8 drives
        RKDS: {                 // 177400: Drive Status Register
            SC:     0x000F,     // (000017) Sector Counter
            SCESA:  0x0010,     // (000020) Sector Counter Equals Sector Address
            WPS:    0x0020,     // (000040) Write Protected Status (set if write-protected)
            RRDY:   0x0040,     // (000100) Read/Write/Seek Ready
            DRDY:   0x0080,     // (000200) Drive Ready
            SOK:    0x0100,     // (000400) Sector Counter OK
            SIN:    0x0200,     // (001000) Seek Incomplete
            DRU:    0x0400,     // (002000) Drive Unsafe
            RK05:   0x0800,     // (004000) RK05 is the selected disk drive (always set)
            DPL:    0x1000,     // (010000) Drive Power Low
            ID:     0xE000,     // (160000) Drive ID (logical drive number of an interrupting drive)
            SHIFT: {
                ID:     13
            }
        },
        RKER: {                 // 177402: Error Register
            WCE:    0x0001,     // Write Check Error
            CSE:    0x0002,     // Checksum Error
            SE:     0x0003,     // Soft Error bits (cleared at the start of a new function)
            UNUSED: 0x001C,     // unused (returns zero)
            NXS:    0x0020,     // Non-Existent Sector
            NXC:    0x0040,     // Non-Existent Cylinder
            NXD:    0x0080,     // Non-Existent Disk
            TE:     0x0100,     // Timing Error
            DLT:    0x0200,     // Date Late
            NXM:    0x0400,     // Non-Existent Memory
            PGE:    0x0800,     // Programming Error
            SKE:    0x1000,     // Seek Error
            WLO:    0x2000,     // Write Lock-Out Violation
            OVR:    0x4000,     // Overrun
            DRE:    0x8000,     // Drive Error
            HE:     0x7FE0      // Hard Error bits (cleared only by Bus RESET or RK11 CRESET function)
        },
        RKCS: {                 // 177404: Control Status Register
            GO:     0x0001,     // (000001) Go (W/O)
            FUNC:   0x000E,     // (000016) Function Code (F2,F1,F0) (R/W)
            MEX:    0x0030,     // (000060) Memory Extension (R/W)
            IE:     0x0040,     // (000100) Interrupt Enable (R/W)
            CRDY:   0x0080,     // (000200) Controller Ready (R/O)
            SSE:    0x0100,     // (000400) Stop on Soft Error (R/W)
            EXB:    0x0200,     // (001000) Extra Bit (R/W)
            FMT:    0x0400,     // (002000) Format (R/W)
            IBA:    0x0800,     // (004000) Inhibit RKBA Increment (R/W)
            SCP:    0x2000,     // (020000) Search Complete (R/O)
            HE:     0x4000,     // (040000) Hard Error (R/O)
            ERR:    0x8000,     // (100000) Composite Error (R/O) (set when any RKER bit is set)
            UNUSED: 0x1200,     // (011000) unused
            RMASK:  0xEFFE,     // (167776) bits readable
            WMASK:  0x0F7F,     // (007577) bits writable
            SHIFT: {
                FUNC:   1,
                MEX:    4
            }
        },
        RKDA: {                 // 177412: Disk Address Register
            SA:     0x000F,     // (000017) Sector Address
            HS:     0x0010,     // (000020) Head Select (aka SUR: clear for upper disk head, set for lower)
            CA:     0x1FE0,     // (017740) Cylinder Address (aka CYL ADDR)
            DS:     0xE000,     // (160000) Drive Select (aka DR SEL)
            SHIFT: {
                HS:     4,
                CA:     5,
                DS:     13
            }
        },
        FUNC: {
            CRESET: 0b0000,     // (00) Controller Reset
            WRITE:  0b0010,     // (02) Write
            READ:   0b0100,     // (04) Read
            WCHK:   0b0110,     // (06) Write Check
            SEEK:   0b1000,     // (10) Seek
            RCHK:   0b1010,     // (12) Read Check
            DRESET: 0b1100,     // (14) Drive Reset
            WLOCK:  0b1110      // (16) Write Lock
        }
    },
    RL11: {                     // RL11 Disk Controller
        PRI:        5,
        VEC:        0o160,
        DRIVES:     4,          // maximum of 4 drives
        PREFIX:     "DY",
        RLCS: {                 // 174400: Control Status Register
            DRDY:   0x0001,     // (000001) Drive Ready (R/O)
            FUNC:   0x000E,     // (000016) Function Code (F2,F1,F0) (R/W)
            BAE:    0x0030,     // (000060) Bus Address Extension bits (BA17,BA16) (R/W)
            IE:     0x0040,     // (000100) Interrupt Enable (R/W)
            CRDY:   0x0080,     // (000200) Controller Ready (R/W)
            DS:     0x0300,     // (001400) Drive Select (DS1,DS0) (R/W)
            ERRC:   0x3C00,     // (036000) Error Code (R/O)
            DE:     0x4000,     // (040000) Drive Error (R/O)
            ERR:    0x8000,     // (100000) Composite Error (R/O)
            CLEAR:  0x3F7E,     // (037576) bits cleared on INIT (bits 1-6 and 8-13 are cleared)
            SET:    0x0080,     // (000200) bits set on INIT (bit 7 is set)
            RMASK:  0xFFFF,     // (177777) no write-only bits
            WMASK:  0x03FE,     // (001776) bits writable
            SHIFT: {
                FUNC:   1,
                BAE:    4,
                DS:     8
            }
        },
        RLBA: {                 // 174402: Bus Address Register
            WMASK:  0xFFFE      // bit 0 is effectively not writable (always zero)
        },
        /*
         * This register has 3 formats: one for Seek, another for Read/Write, and a third for Get Status
         */
        RLDA: {                 // 174404: Disk Address Register
            SEEK_CMD:   0x0001, // Seek: bit 0 must be set, bits 1 and 3 must be clear
            SEEK_DIR:   0x0004, // Direction (clear to move heads away from spindle (lower cylinder), set to move to higher cylinder)
            SEEK_HS:    0x0010, // Head Select (clear to select upper head, set to select lower head)
            SEEK_CAD:   0xFF80, // Cylinder Address Difference
            RW_SA:      0x003F, // Sector Address
            RW_HS:      0x0040, // Head Select
            RW_CA:      0xFF80, // Cylinder Address (RL01 has 256 cylinders, RL02 has 512)
            GS_CMD:     0x0003, // Get Status: bit 0 must be set, bit 1 set, and bits 2 and 4-7 clear (bits 8-15 unused)
            GS_RST:     0x0008, // Reset (when set, clears error register before sending status word to controller)
            SHIFT: {
                RW_HS:  6,
                RW_CA:  7
            }
        },
        /*
         * This register has 3 formats: one for Read Header, another for Read/Write, and a third for Get Status
         */
        RLMP: {                 // 177406: Multi-Purpose Register
            GS_ST: {            // Major State Code (of the drive)
                LOADC:  0x0,    // Load Cartridge
                SPINUP: 0x1,    // Spin-Up
                BRUSHC: 0x2,    // Brush Cycle
                LOADH:  0x3,    // Load Heads
                SEEK:   0x4,    // Seek
                LOCKON: 0x5,    // Lock On
                UNLOADH:0x6,    // Unload Heads
                SPINDN: 0x7     // Spin-Down
            },
            GS_BH:      0x0008, // Brushes Home
            GS_HO:      0x0010, // Heads Out
            GS_CO:      0x0020, // Cover Open (or dust cover is not in place)
            GS_HS:      0x0040, // Head Selected (0 for upper head, 1 for lower head)
            GS_DT:      0x0080, // Drive Type (0 for RL01, 1 for RL02)
            GS_DSE:     0x0100, // Drive Select Error
            GS_VC:      0x0200, // Volume Check (Set during transition from a head load state to a head-on-track state; cleared by execution of a Get Status command with Bit 3 asserted)
            GS_WGE:     0x0400, // Write Gate Error
            GS_SPE:     0x0800, // Spin Error
            GS_SKTO:    0x1000, // Seek Time-Out
            GS_WL:      0x2000, // Write Lock
            GS_CHE:     0x4000, // Current Head Error
            GS_WDE:     0x8000  // Write Data Error
        },
        RLBE: {                 // 174410: Bus (Address) Extension Register
            MASK:   0x003F      // bits 5-0 correspond to bus address bits 21-16
        },
        ERRC: {                 // NOTE: These error codes are pre-shifted to read/write directly from/to RLCS.ERRC
            OPI:    0x0400,     // Operation Incomplete
            DCRC:   0x0800,     // Read Data CRC
            WCE:    0x0800,     // Write Check Error
            HCRC:   0x0C00,     // Header CRC
            DLT:    0x1000,     // Data Late
            HNF:    0x1400,     // Header Not Found
            NXM:    0x2000,     // Non-Existent Memory
            MPE:    0x2400      // Memory Parity Error (RLV12 only)
        },
        FUNC: {                 // NOTE: These function codes are pre-shifted to read/write directly from/to RLCS.FUNC
            NOP:    0b0000,     // (00) No-Op
            WCHK:   0b0010,     // (02) Write Check
            STATUS: 0b0100,     // (04) Get Status
            SEEK:   0b0110,     // (06) Seek
            RHDR:   0b1000,     // (10) Read Header
            WDATA:  0b1010,     // (12) Write Data
            RDATA:  0b1100,     // (14) Read Data
            RDNC:   0b1110      // (16) Read Data without Header Check
        }
    },
    RX11: {                     // RX11 Disk Controller
        PRI:        5,
        VEC:        0o264,
        DRIVES:     2,          // maximum of 2 drives
        PREFIX:     "DX",
        RXCS: {                 // 177170: Command and Status Register
            GO:     0x0001,     // (000001) Go (W/O)
            FUNC:   0x000E,     // (000016) Function Code (F2,F1,F0) (W/O)
            UNIT:   0x0010,     // (000020) Unit Select (W/O)
            DONE:   0x0020,     // (000040) Done (R/O)
            IE:     0x0040,     // (000100) Interrupt Enable (R/W, cleared on INIT)
            TR:     0x0080,     // (000200) Transfer Request (R/O)
            INIT:   0x4000,     // (040000) RX11 Initialize (W/O)
            ERR:    0x8000,     // (100000) Error (R/O, cleared on INIT or command)
            UNUSED: 0x3F00,     // (037400) unused
            RMASK:  0x80E0,     // (100340) bits readable
            WMASK:  0x405F      // (040137) bits writable
        },
        RXDB: {                 // 177172: Data Buffer Register
        },
        RXTA: {
            MASK:   0x007F
        },
        RXSA: {
            MASK:   0x001F
        },
        RXES: {
            /*
             * The DRDY bit is only valid when retrieved via a Read Status function or at completion of Initialize when it indicates
             * status of drive O.  It is asserted if the unit currently selected exists, is properly supplied with power, has a diskette
             * installed correctly, has its door closed, and has a diskette up to speed.
             *
             * If the Error bit was set in the RXCS but Error bits are not set in the RXES, then specific error conditions can be accessed via
             * a Read Error Register function.
             */
            CRC:    0x0001,     // CRC error (RXES is moved to the RXDB, and Error and Done are asserted)
            PARITY: 0x0002,     // parity error (RXES is moved to the RXDB, and Error and Done are asserted)
            ID:     0x0004,     // Initialize Done (following a programmable or UNIBUS initialization, or a power failure)
            DEL:    0x0040,     // Deleted Data Detected
            DRDY:   0x0080      // Drive Ready
        },
        FUNC: {                 // NOTE: These function codes are pre-shifted to read/write directly from/to RXCS.FUNC
            FILL:   0b0000,     // Fill Buffer
            EMPTY:  0b0010,     // Empty Buffer
            WRITE:  0b0100,     // Write Sector
            READ:   0b0110,     // Read Sector
            UNUSED: 0b1000,     // UNUSED
            RDSTAT: 0b1010,     // Read Status
            WRDEL:  0b1100,     // Write Deleted Data Sector
            RDERR:  0b1110      // Read Error Register
        },
        ERROR: {
            HOME0:      0o0010, // Drive 0 failed to see home on Initialize
            HOME1:      0o0020, // Drive 1 failed to see home on Initialize
            BAD_HOME:   0o0030, // Found home when stepping out 10 tracks for INIT
            NO_TRACK:   0o0040, // Tried to access a track greater than 77
            FOUND_HOME: 0o0050, // Home was found before desired track was reached
            SELF_DIAG:  0o0060, // Self-diagnostic error
            NO_SECTOR:  0o0070, // Desired sector could not be found after looking at 52 headers (2 revolutions)
            NO_SEP:     0o0110, // More than 40us and no SEP clock seen
            NO_PREAM:   0o0120, // A preamble could not be found
            NO_IOMARK:  0o0130, // Preamble found but no I/O mark found within allowable time span
            CRC_HEADER: 0o0140, // CRC error on what we thought was a header
            BAD_TRACK:  0o0150, // The header track address of a good header does not compare with the desired track
            NO_ID:      0o0160, // Too many tries for an IDAM (identifies header)
            NO_DATA:    0o0170, // Data AM not found in allotted time
            CRC_DATA:   0o0200, // CRC error on reading the sector from the disk (No code appears in the ERREG).
            BAD_PARITY: 0o0210  // All parity errors
        }
    },
    VECTORS: {
        0o060:  "DL11R",
        0o064:  "DL11X",
        0o070:  "PC11R",
        0o074:  "PC11X",
        0o100:  "KW11",
        0o160:  "RL11",
        0o220:  "RK11",
        0o264:  "RX11"
    }
};

PDP11.RX11.RX01 = [
    "DX",
    77,  1, 26, 128,            // disk geometry (CHSN: cylinders, heads, sectors/track, and bytes/sector)
    1,   0,  0, 128,            // boot code location (cylinder, head, sector index (NOT sector number), and number of bytes)
    0                           // default drive status
];

PDP11.RK11.RK05 = [
    "RK",
    203, 2, 12, 512,            // disk geometry (CHSN: cylinders, heads, sectors/track, and bytes/sector)
    0,   0,  0, 512,            // boot code location (cylinder, head, sector index (NOT sector number), and number of bytes)
    PDP11.RK11.RKDS.RK05 | PDP11.RK11.RKDS.SOK | PDP11.RK11.RKDS.RRDY
];

PDP11.RL11.RL02K = [
    "RL",
    512, 2, 40, 256,            // disk geometry (CHSN: cylinders, heads, sectors/track, and bytes/sector)
    0,   0,  0, 256,            // boot code location (cylinder, head, sector index (NOT sector number), and number of bytes)
    PDP11.RL11.RLMP.GS_ST.LOCKON | PDP11.RL11.RLMP.GS_BH | PDP11.RL11.RLMP.GS_HO
];

PDP11.ACCESS.READ_WORD   = PDP11.ACCESS.WORD | PDP11.ACCESS.READ;       // formerly READ_MODE (2)
PDP11.ACCESS.READ_BYTE   = PDP11.ACCESS.BYTE | PDP11.ACCESS.READ;       // formerly READ_MODE (2) | BYTE_MODE (1)
PDP11.ACCESS.WRITE_WORD  = PDP11.ACCESS.WORD | PDP11.ACCESS.WRITE;      // formerly WRITE_MODE (4)
PDP11.ACCESS.WRITE_BYTE  = PDP11.ACCESS.BYTE | PDP11.ACCESS.WRITE;      // formerly WRITE_MODE (4) | BYTE_MODE (1)
PDP11.ACCESS.UPDATE_WORD = PDP11.ACCESS.WORD | PDP11.ACCESS.UPDATE;     // formerly MODIFY_WORD (2 | 4)
PDP11.ACCESS.UPDATE_BYTE = PDP11.ACCESS.BYTE | PDP11.ACCESS.UPDATE;     // formerly MODIFY_BYTE (1 | 2 | 4)

/*
 * PSW arithmetic flags are NOT stored directly into the PSW register; they are maintained across separate flag registers.
 */
PDP11.PSW.FLAGS         = (PDP11.PSW.NF | PDP11.PSW.ZF | PDP11.PSW.VF | PDP11.PSW.CF);

export { APPCLASS, APPNAME, APPVERSION, BYTEARRAYS, COMPILED, COPYRIGHT, CSSCLASS, DEBUG, DEBUGGER, LICENSE, MAXDEBUG, MEMFAULT, PDP11, PRIVATE, RS232, SITEURL, TYPEDARRAYS, WORDBUS, globals };
