/**
 * @fileoverview Implements the PCx86 ChipSet component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Interrupts from "./interrupts.js";
import MESSAGE from "./message.js";
import ROMx86 from "./rom.js";
import X86 from "./x86.js";
import Component from "../../../modules/v2/component.js";
import State from "../../../modules/v2/state.js";
import StrLib from "../../../modules/v2/strlib.js";
import UsrLib from "../../../modules/v2/usrlib.js";
import WebLib from "../../../modules/v2/weblib.js";
import { APPCLASS, BACKTRACK, COMPILED, CSSCLASS, DEBUG, DEBUGGER, DESKPRO386, MAXDEBUG, globals } from "./defines.js";

/**
 * @typedef {Object} Timer
 * @property {Array.<number>} countInit
 * @property {Array.<number>} countStart
 * @property {Array.<number>} countCurrent
 * @property {Array.<number>} countLatched
 * @property {number}  bcd          (CTRL.BCD: bit 0)
 * @property {number}  mode         (CTRL.MODE: bits 1-3)
 * @property {number}  rw           (CTRL.RW: bits 4-5)
 * @property {number}  countIndex
 * @property {number}  countBytes
 * @property {boolean} fOUT
 * @property {boolean} fCountLatched
 * @property {boolean} fCounting
 * @property {number}  nCyclesStart
 * @property {number}  bStatus
 * @property {boolean} fStatusLatched
 */

/**
 * @class ChipSet
 * @unrestricted (allows the class to define properties, both dot and named, outside of the constructor)
 */
export default class ChipSet extends Component {
    /**
     * Ports Overview
     * --------------
     *
     * This module provides support for many of the following components (except where a separate component is noted).
     * This list is taken from p.1-8 ("System Unit") of the IBM 5160 (PC XT) Technical Reference Manual (as revised
     * April 1983), only because I didn't see a similar listing in the original 5150 Technical Reference.
     *
     *      Port(s)         Description
     *      -------         -----------
     *      000-00F         DMA Chip 8237A-5                                [see below]
     *      020-021         Interrupt 8259A                                 [see below]
     *      040-043         Timer 8253-5                                    [see below]
     *      060-063         PPI 8255A-5                                     [see below]
     *      080-083         DMA Page Registers                              [see below]
     *          0Ax [1]     NMI Mask Register                               [see below]
     *          0Cx         Reserved
     *          0Ex         Reserved
     *      200-20F         Game Control
     *      210-217         Expansion Unit
     *      220-24F         Reserved
     *      278-27F         Reserved
     *      2F0-2F7         Reserved
     *      2F8-2FF         Asynchronous Communications (Secondary)         [see the SerialPort component]
     *      300-31F         Prototype Card
     *      320-32F         Hard Drive Controller (XTC)                     [see the HDC component]
     *      378-37F         Printer
     *      380-38C [2]     SDLC Communications
     *      380-389 [2]     Binary Synchronous Communications (Secondary)
     *      3A0-3A9         Binary Synchronous Communications (Primary)
     *      3B0-3BF         IBM Monochrome Display/Printer                  [see the Video component]
     *      3C0-3CF         Reserved
     *      3D0-3DF         Color/Graphics (Motorola 6845)                  [see the Video component]
     *      3EO-3E7         Reserved
     *      3FO-3F7         Floppy Drive Controller                         [see the FDC component]
     *      3F8-3FF         Asynchronous Communications (Primary)           [see the SerialPort component]
     *
     * [1] At power-on time, NMI is masked off, perhaps because models 5150 and 5160 also tie coprocessor
     * (FPU) interrupts to NMI.  Suppressing NMI by default seems odd, because that would also suppress memory
     * parity errors.  TODO: Determine whether "power-on time" refers to the initial power-on state of the
     * NMI Mask Register or the state that the BIOS "POST" (Power-On Self-Test) sets.
     *
     * [2] These devices cannot be used together since their port addresses overlap.
     *
     *      MODEL_5170      Description
     *      ----------      -----------
     *          070 [3]     CMOS Address                                    ChipSet.CMOS.ADDR.PORT
     *          071         CMOS Data                                       ChipSet.CMOS.DATA.PORT
     *          0F0         FPU Coprocessor Clear Busy (output 0x00)
     *          0F1         FPU Coprocessor Reset (output 0x00)
     *      1F0-1F7         Hard Drive Controller (ATC)                     [see the HDC component]
     *
     * [3] Port 0x70 doubles as the NMI Mask Register: output a CMOS address with bit 7 clear to enable NMI
     * or with bit 7 set to disable NMI (apparently the inverse of the older NMI Mask Register at port 0xA0).
     * Also, apparently unlike previous models, the MODEL_5170 POST leaves NMI enabled.  And fortunately, the
     * FPU coprocessor interrupt line is no longer tied to NMI (it uses IRQ 13).
     */

    /**
     * Supported model numbers
     *
     * In general, when comparing this.model to "base" model numbers (ie, non-REV numbers), you should use
     * (this.model|0), which truncates the current model number.
     *
     * Note that there were two 5150 motherboard revisions: the "REV A" 16Kb-64Kb motherboard and the
     * "REV B" 64Kb-256Kb motherboard.  There may have been a manufacturing correlation between motherboard
     * revisions ("REV A" and "REV B") and the ROM BIOS revisions shown below, but in general, we can't assume
     * any correlation, because newer ROMs could be installed with either motherboard.
     *
     * I do know that, for "REV A" motherboards, the Apr 1984 5150 TechRef says that "To expand the memory
     * of your system beyond 544K requires your IBM Personal Computer System Unit to have a BIOS ROM module
     * dated 10/27/82 or later."  Which suggests that SW2[5] was not used until the REV3 5150 ROM BIOS.
     *
     * For now, we treat all our MODEL_5150 systems as 16Kb-64Kb motherboards; if you want a 64Kb-256Kb motherboard,
     * then step up to a MODEL_5160 system.  We use a multiplier of 16 for 5150 LOWMEM values, and a multiplier
     * of 64 for 5160 LOWMEM values.
     */
    static MODEL_S100               = 100;      // SCP (Seattle Computer Products) S-100 system
    static MODEL_4860               = 4860;     // PCjr
    static MODEL_5150               = 5150;     // used in reference to the 1st 5150 ROM BIOS, dated Apr 24, 1981
    static MODEL_5150_REV2          = 5150.2;   // used in reference to the 2nd 5150 ROM BIOS, dated Oct 19, 1981
    static MODEL_5150_REV3          = 5150.3;   // used in reference to the 3rd 5150 ROM BIOS, dated Oct 27, 1982
    static MODEL_5150_OTHER         = 5150.9;
    static MODEL_5160               = 5160;     // used in reference to the 1st 5160 ROM BIOS, dated Nov 08, 1982
    static MODEL_5160_REV2          = 5160.2;   // used in reference to the 1st 5160 ROM BIOS, dated Jan 10, 1986
    static MODEL_5160_REV3          = 5160.3;   // used in reference to the 1st 5160 ROM BIOS, dated May 09, 1986
    static MODEL_5160_OTHER         = 5160.9;
    static MODEL_5170               = 5170;     // used in reference to the 1st 5170 ROM BIOS, dated Jan 10, 1984
    static MODEL_5170_REV2          = 5170.2;   // used in reference to the 2nd 5170 ROM BIOS, dated Jun 10, 1985
    static MODEL_5170_REV3          = 5170.3;   // used in reference to the 3rd 5170 ROM BIOS, dated Nov 15, 1985
    static MODEL_5170_OTHER         = 5170.9;

    /**
     * Assorted non-IBM models (we don't put "IBM" in the IBM models, but non-IBM models should include the company name).
     */
    static MODEL_CDP_MPC1600        = 5150.101; // Columbia Data Products MPC 1600 ("Copyright Columbia Data Products 1983, ROM/BIOS Ver 4.34")
    static MODEL_COMPAQ_PORTABLE    = 5150.102; // COMPAQ Portable (COMPAQ's first PC)
    static MODEL_ATT_6300           = 5160.101; // AT&T Personal Computer 6300/Olivetti M24 ("COPYRIGHT (C) OLIVETTI 1984","04/03/86",v1.43)
    static MODEL_ZENITH_Z150        = 5160.150; // Zenith Data Systems Z-150 ("08/11/88 (C)ZDS CORP")
    static MODEL_COMPAQ_DESKPRO386  = 5180;     // COMPAQ DeskPro 386 (COMPAQ's first 80386-based PC); should be > MODEL_5170

    /**
     * Last but not least, a complete list of supported model strings, and corresponding internal model numbers.
     */
    static MODELS = {
        "100":          ChipSet.MODEL_S100,
        "4860":         ChipSet.MODEL_4860,     // IBM PCjr
        "5150":         ChipSet.MODEL_5150,     // IBM PC
        "5160":         ChipSet.MODEL_5160,     // IBM PC XT
        "5170":         ChipSet.MODEL_5170,     // IBM PC AT
        "att6300":      ChipSet.MODEL_ATT_6300,
        "mpc1600":      ChipSet.MODEL_CDP_MPC1600,
        "z150":         ChipSet.MODEL_ZENITH_Z150,
        "compaq":       ChipSet.MODEL_COMPAQ_PORTABLE,
        "other":        ChipSet.MODEL_5150_OTHER,
        "deskpro386":   ChipSet.MODEL_COMPAQ_DESKPRO386
    };

    static CONTROLS = {
        SW1:    "sw1",
        SW2:    "sw2",
        SWDESC: "swdesc"
    };

    /**
     * Values returned by getDIPVideoMonitor()
     */
    static MONITOR = {
        NONE:               0,
        TV:                 1,  // Composite monitor (lower resolution; no support)
        COLOR:              2,  // Color Display (5153)
        MONO:               3,  // Monochrome Display (5151)
        EGACOLOR:           4,  // Enhanced Color Display (5154) in High-Res Mode
        EGAEMULATION:       6,  // Enhanced Color Display (5154) in Emulation Mode
        VGACOLOR:           7   // VGA Color Display
    };

    /**
     * Switches Overview
     * -----------------
     *
     * The conventions used for the sw1 and sw2 strings are that the left-most character represents DIP switch [1],
     * the right-most character represents DIP switch [8], and "1" means the DIP switch is ON and "0" means it is OFF.
     *
     * Internally, we convert the above strings into binary values that the 8255A PPI returns, where DIP switch [1]
     * is bit 0 and DIP switch [8] is bit 7, and 0 indicates the switch is ON and 1 indicates it is OFF.
     *
     * For reference, here's how the SW1 and SW2 switches correspond to the internal 8255A PPI bit values:
     *
     *      SW1[1]    (bit 0)     "0xxxxxxx" (1):  IPL,  "1xxxxxxx" (0):  No IPL
     *      SW1[2]    (bit 1)     reserved on the 5150; OFF (1) if FPU installed in a 5160
     *      SW1[3,4]  (bits 3-2)  "xx11xxxx" (00): 16Kb, "xx01xxxx" (10): 32Kb,  "xx10xxxx" (01): 48Kb,  "xx00xxxx" (11): 64Kb
     *      SW1[5,6]  (bits 5-4)  "xxxx11xx" (00): none, "xxxx01xx" (10): tv,    "xxxx10xx" (01): color, "xxxx00xx" (11): mono
     *      SW1[7,8]  (bits 7-6)  "xxxxxx11" (00): 1 FD, "xxxxxx01" (10): 2 FD,  "xxxxxx10" (01): 3 FD,  "xxxxxx00" (11): 4 FD
     *
     * Note: FD refers to floppy drive, and IPL refers to an "Initial Program Load" floppy drive.
     *
     *      SW2[1-5]    (bits 4-0)  "NNNxxxxx": number of 32Kb blocks of I/O expansion RAM present
     *
     * For example, sw1="01110011" indicates that all SW1 DIP switches are ON, except for SW1[1], SW1[5] and SW1[6],
     * which are OFF.  Internally, the order of these bits must reversed (to 11001110) and then inverted (to 00110001)
     * to yield the value that the 8255A PPI returns.  Reading the final value right-to-left, 00110001 indicates an
     * IPL floppy drive, 1X of RAM (where X is 16Kb on a MODEL_5150 and 64Kb on a MODEL_5160), MDA, and 1 floppy drive.
     *
     * WARNING: It is possible to set SW1 to indicate more memory than the RAM component has been configured to provide.
     * This is a configuration error which will cause the machine to crash after reporting a "201" error code (memory
     * test failure), which is presumably what a real machine would do if it was similarly misconfigured.  Surprisingly,
     * the BIOS forges ahead, setting SP to the top of the memory range indicated by SW1 (via INT 0x12), but the lack of
     * a valid stack causes the system to crash after the next IRET.  The BIOS should have either halted or modified
     * the actual memory size to match the results of the memory test.
     *
     * MODEL 5150 Switches
     * -------------------
     *
     * PPI_SW bits are exposed via PPI.PORT (0x60).
     *
     * MODEL 5160 Switches
     * ------------------------
     *
     * PPI_SW bits 0-3 are exposed via PPI_C.SW if PPI_B.ENABLE_SW_HI is clear; bits 4-7 if PPI_B.ENABLE_SW_HI is set.
     *
     * AT&T 6300 Switches
     * ------------------
     *
     * Based on ATT_PC_6300_Service_Manual.pdf, there are two 8-switch blocks, DIPSW-0 and DIPSW-1, where:
     *
     *      DIPSW-0[1-4] Total RAM
     *      DIPSW-0[5] - ON if 8087 not installed, OFF if installed
     *      DIPSW-0[6] - ON if 8250 ACE serial interface present, OFF if Z-8530 SCC interface present
     *      DIPSW-0[7] - Not used
     *      DIPSW-0[8] - Type of EPROM chip for ROM 1.21 or lower, or presence of RAM in bank 1 for ROM 1.43 or higher
     *
     * and:
     *
     *      DIPSW-1[1] - Floppy Type (ON for 48TPI, OFF for 96TPI)
     *      DIPSW-1[2] - Floppy Speed (ON for slow startup, OFF for fast startup)
     *      DIPSW-1[3] - HDU ROM (ON for indigenous, OFF for external)
     *      DIPSW-1[4] - Not used (ROM 1.21 or lower) or Scroll Speed (ROM 1.43 or higher: ON for fast, OFF for slow)
     *      DIPSW-1[5-6] - Display Type (11=EGA or none, 01=color 40x25, 10=color 80x25, 00=monochrome 80x25)
     *      DIPSW-1[7-8] - Number of Floppy Drives (11=one, 01=two, 10=three, 00=four)
     *
     * For AT&T 6300 ROM 1.43 and up, DIPSW-0 supports the following RAM combinations:
     *
     *      0111xxx1: 128Kb on motherboard
     *      1011xxx0: 256Kb on motherboard
     *      1101xxx0: 256Kb on motherboard, 256Kb on expansion board (512Kb total)
     *      1110xxx1: 512Kb on motherboard
     *      0101xxx0: 256Kb on motherboard, 384Kb on expansion board (640Kb total)
     *      0100xxx0: 640Kb on motherboard (128Kb bank 0, 512Kb bank 1)
     *      0110xxx0: 640Kb on motherboard (512Kb bank 0, 128Kb bank 1)
     *
     * Inspection of the AT&T 6300 Plus ROM BIOS reveals that DIPSW-0[1-8] are obtained from bits 0-7
     * of port 0x66 ("sys_conf_a") and DIPSW-1[1-8] are obtained from bits 0-7 of port 0x67 ("sys_conf_b").
     */
    static PPI_SW = {
        FDRIVE: {
            IPL:            0x01,   // MODEL_5150: IPL ("Initial Program Load") floppy drive attached; MODEL_5160: "Loop on POST"
            ONE:            0x00,   // 1 floppy drive attached (or 0 drives if PPI_SW.FDRIVE_IPL is not set -- MODEL_5150 only)
            TWO:            0x40,   // 2 floppy drives attached
            THREE:          0x80,   // 3 floppy drives attached
            FOUR:           0xC0,   // 4 floppy drives attached
            MASK:           0xC0,
            SHIFT:          6
        },
        FPU:                0x02,   // MODEL_5150: reserved; MODEL_5160: FPU coprocessor installed
        MEMORY: {                   // MODEL_5150: "X" is 16Kb; MODEL_5160: "X" is 64Kb
            X1:             0x00,   // 16Kb or 64Kb
            X2:             0x04,   // 32Kb or 128Kb
            X3:             0x08,   // 48Kb or 192Kb
            X4:             0x0C,   // 64Kb or 256Kb
            MASK:           0x0C,
            SHIFT:          2
        },
        MONITOR: {
            TV:             0x10,
            COLOR:          0x20,
            MONO:           0x30,
            MASK:           0x30,
            SHIFT:          4
        }
    };

    /**
     * Some models have completely different DIP switch implementations from the MODEL_5150, which, being
     * the first IBM PC, was the model that we, um, modeled our DIP switch support on.  So, to support other
     * implementations, we now get and set DIP switch values according to SW_TYPE, and rely on the
     * tables that follow to define which DIP switch(es) correspond to each SW_TYPE.
     *
     * Not every model needs its own tables.  The getDIPSwitches() and setDIPSwitches() functions look first
     * for an *exact* model match, then a "truncated" model match, and failing that, they fall back to the
     * MODEL_5150 switch definitions.
     */
    static SW_TYPE = {
        FLOPNUM:    1,
        FLOPTYPE:   2,
        FPU:        3,
        MONITOR:    4,
        LOWMEM:     5,
        EXPMEM:     6
    };

    static SW_FLOPPY = {
        MASK:       0xC0,
        VALUES: {
            1:      0x00,
            2:      0x40,
            3:      0x80,
            4:      0xC0
        },
        LABEL: "Number of Floppy Drives"
    };

    static SW_FPU = {
        MASK:       0x02,
        VALUES: {
            0:      0x00,       // 0 means an FPU is NOT installed
            1:      0x02        // 1 means an FPU is installed
        },
        LABEL: "FPU"
    };

    static SW_MONITOR = {
        MASK:       0x30,
        VALUES: {
            0:      0x00,
            1:      0x10,
            2:      0x20,
            3:      0x30,
            "none": 0x00,
            "tv":   0x10,       // aka composite
            "color":0x20,
            "cga":  0x20,       // alias for color
            "mda":  0x30,       // alias for mono
            "mono": 0x30,
            "ega":  0x00,
            "vga":  0x00
        },
        LABEL: "Monitor Type"
    };

    static SW_MEMORY = {
        MASK:       0x1F,       // technically, this mask should be 0x0F for ROM revisions prior to 5150_REV3, and 0x1F on 5150_REV3
        VALUES: {
            0:      0x00,
            32:     0x01,
            64:     0x02,
            96:     0x03,
            128:    0x04,
            160:    0x05,
            192:    0x06,
            224:    0x07,
            256:    0x08,
            288:    0x09,
            320:    0x0A,
            352:    0x0B,
            384:    0x0C,
            416:    0x0D,
            448:    0x0E,
            480:    0x0F,
            512:    0x10,
            544:    0x11,
            576:    0x12
            /**
             * Obviously, more bit combinations are possible here (up to 0x1F), but assuming a minimum of 64Kb already on
             * the motherboard, any amount of expansion memory above 576Kb would break the 640Kb barrier.  Yes, if you used
             * only MDA or CGA video cards, you could go as high as 704Kb in a real system.  But in our happy little world,
             * this is where we stop.
             *
             * TODO: A value larger than 0x12 usually comes from a misconfigured machine (ie, it forgot to leave SW2[5] ON).
             * To compensate, when getDIPMemorySize() gets null back from its EXPMEM request, perhaps it should try truncating
             * the DIP switch value.  However, that would introduce a machine-specific hack into a function that's supposed
             * be machine-independent now.
             */
        },
        LABEL: "Expansion Memory (32Kb Increments)"
    };

    static DIPSW = {
        [ChipSet.MODEL_5150]: [
            {
                [ChipSet.SW_TYPE.FLOPNUM]:  ChipSet.SW_FLOPPY,
                /**
                 * Notes on the 8087 Math Coprocessor (FPU)
                 *
                 * The August 1981 Technical Reference Manual lists SW1[2] as "RESERVED" and also says that SW1[2]
                 * "MUST BE ON (RESERVED FOR CO-PROCESSOR)" (p. 2-28), suggesting that the math coprocessor wasn't
                 * quite ready for the initial release of the IBM PC.
                 *
                 * The April 1983 TechRef adds a section on the "IBM Personal Computer Math Coprocessor" (p. 1-33)
                 * and makes it clearer that SW1[2] must be OFF when a math coprocessor is installed, but then it
                 * muddies the waters in a new appendix of switch tables, where it erroneously claims that SW1[2]
                 * must be ON when using a coprocessor (p. G-7).
                 *
                 * The April 1984 TechRef eliminates the confusion by eliminating the appendix (actually, it was
                 * simply corrected and moved to the 1984 Guide to Operations; see p. 5-10).  Early magazine articles
                 * discussing 8087 support also indicated that switch SW1[2] must OFF when a coprocessor is installed.
                 *
                 * While the August 1981 TechRef makes almost no mention of coprocessor support, the April 1984 TechRef
                 * discusses it in a fair bit of detail, including the fact that 8087 exceptions generate an NMI,
                 * despite Intel's warning in their iAPX 86,88 User's Manual, p. S-27, that "[t]he 8087 should not be
                 * tied to the CPU's NMI (non-maskable interrupt) line."
                 */
                [ChipSet.SW_TYPE.FPU]:      ChipSet.SW_FPU,
                [ChipSet.SW_TYPE.MONITOR]:  ChipSet.SW_MONITOR,
                [ChipSet.SW_TYPE.LOWMEM]: {
                    MASK:       0x0C,
                    VALUES: {
                        16:     0x00,
                        32:     0x04,
                        48:     0x08,
                        64:     0x0C
                    },
                    LABEL: "Base Memory (16Kb Increments)"
                }
            },
            {
                [ChipSet.SW_TYPE.EXPMEM]:   ChipSet.SW_MEMORY
            }
        ],
        [ChipSet.MODEL_5160]: [
            {
                [ChipSet.SW_TYPE.FLOPNUM]:  ChipSet.SW_FLOPPY,
                [ChipSet.SW_TYPE.FPU]:      ChipSet.SW_FPU,
                [ChipSet.SW_TYPE.MONITOR]:  ChipSet.SW_MONITOR,
                [ChipSet.SW_TYPE.LOWMEM]: {
                    MASK:       0x0C,
                    VALUES: {
                        64:     0x00,
                        128:    0x04,
                        192:    0x08,
                        256:    0x0C
                    },
                    LABEL: "Base Memory (64Kb Increments)"
                }
            },
            {
                [ChipSet.SW_TYPE.EXPMEM]:   ChipSet.SW_MEMORY
            }
        ],
        [ChipSet.MODEL_ATT_6300]: [
            {
                [ChipSet.SW_TYPE.LOWMEM]: {
                    MASK:       0x8F,
                    VALUES: {
                        128:    0x01,   // "0111xxx1"
                        256:    0x82,   // "1011xxx0"
                        512:    0x08,   // "1110xxx1"
                        640:    0x8D    // "0100xxx0"
                    },
                    LABEL: "Base Memory (128Kb Increments)"
                },
                [ChipSet.SW_TYPE.FPU]: {
                    MASK:       0x10,
                    VALUES: {
                        0:      0x00,
                        1:      0x10
                    },
                    LABEL: "FPU"
                }
            },
            {
                [ChipSet.SW_TYPE.FLOPTYPE]: {
                    MASK:       0x01,
                    VALUES: {
                        0:      0x00,
                        1:      0x01
                    },
                    LABEL: "Floppy Type"
                },
                [ChipSet.SW_TYPE.FLOPNUM]: ChipSet.SW_FLOPPY,
                [ChipSet.SW_TYPE.MONITOR]: ChipSet.SW_MONITOR
            }
        ]
    };

    /**
     *  8237A DMA Controller (DMAC) I/O ports
     *
     *  MODEL_5150 and up uses DMA channel 0 for memory refresh cycles and channel 2 for the FDC.
     *
     *  MODEL_5160 and up uses DMA channel 3 for HDC transfers (XTC only).
     *
     *  DMA0 refers to the original DMA controller found on all models, and DMA1 refers to the additional
     *  controller found on MODEL_5170 and up; channel 4 on DMA1 is used to "cascade" channels 0-3 from DMA0,
     *  so only channels 5-7 are available on DMA1.
     *
     *  For FDC DMA notes, refer to http://wiki.osdev.org/ISA_DMA
     *  For general DMA notes, refer to http://www.freebsd.org/doc/en/books/developers-handbook/dma.html
     *
     *  TODO: Determine why the MODEL_5150 ROM BIOS sets the DMA channel 1 page register (port 0x83) to zero.
     */
    static DMA0 = {
        INDEX:              0,
        PORT: {
            CH0_ADDR:       0x00,   // OUT: starting address        IN: current address
            CH0_COUNT:      0x01,   // OUT: starting word count     IN: remaining word count
            CH1_ADDR:       0x02,   // OUT: starting address        IN: current address
            CH1_COUNT:      0x03,   // OUT: starting word count     IN: remaining word count
            CH2_ADDR:       0x04,   // OUT: starting address        IN: current address
            CH2_COUNT:      0x05,   // OUT: starting word count     IN: remaining word count
            CH3_ADDR:       0x06,   // OUT: starting address        IN: current address
            CH3_COUNT:      0x07,   // OUT: starting word count     IN: remaining word count
            CMD_STATUS:     0x08,   // OUT: command register        IN: status register
            REQUEST:        0x09,
            MASK:           0x0A,
            MODE:           0x0B,
            RESET_FF:       0x0C,   // reset flip-flop
            MASTER_CLEAR:   0x0D,   // OUT: master clear            IN: temporary register
            MASK_CLEAR:     0x0E,   // TODO: Provide handlers
            MASK_ALL:       0x0F,   // TODO: Provide handlers
            CH2_PAGE:       0x81,   // OUT: DMA channel 2 page register
            CH3_PAGE:       0x82,   // OUT: DMA channel 3 page register
            CH1_PAGE:       0x83,   // OUT: DMA channel 1 page register
            CH0_PAGE:       0x87    // OUT: DMA channel 0 page register (unusable; See "The Inside Out" book, p.246)
        }
    };

    static DMA1 = {
        INDEX:              1,
        PORT: {
            CH6_PAGE:       0x89,   // OUT: DMA channel 6 page register (MODEL_5170)
            CH7_PAGE:       0x8A,   // OUT: DMA channel 7 page register (MODEL_5170)
            CH5_PAGE:       0x8B,   // OUT: DMA channel 5 page register (MODEL_5170)
            CH4_PAGE:       0x8F,   // OUT: DMA channel 4 page register (MODEL_5170; unusable; aka "Refresh" page register?)
            CH4_ADDR:       0xC0,   // OUT: starting address        IN: current address
            CH4_COUNT:      0xC2,   // OUT: starting word count     IN: remaining word count
            CH5_ADDR:       0xC4,   // OUT: starting address        IN: current address
            CH5_COUNT:      0xC6,   // OUT: starting word count     IN: remaining word count
            CH6_ADDR:       0xC8,   // OUT: starting address        IN: current address
            CH6_COUNT:      0xCA,   // OUT: starting word count     IN: remaining word count
            CH7_ADDR:       0xCC,   // OUT: starting address        IN: current address
            CH7_COUNT:      0xCE,   // OUT: starting word count     IN: remaining word count
            CMD_STATUS:     0xD0,   // OUT: command register        IN: status register
            REQUEST:        0xD2,
            MASK:           0xD4,
            MODE:           0xD6,
            RESET_FF:       0xD8,   // reset flip-flop
            MASTER_CLEAR:   0xDA,   // master clear
            MASK_CLEAR:     0xDC,   // TODO: Provide handlers
            MASK_ALL:       0xDE    // TODO: Provide handlers
        }
    };

    static DMA_CMD = {
        M2M_ENABLE:         0x01,
        CH0HOLD_ENABLE:     0x02,
        CTRL_DISABLE:       0x04,
        COMP_TIMING:        0x08,
        ROT_PRIORITY:       0x10,
        EXT_WRITE_SEL:      0x20,
        DREQ_ACTIVE_LO:     0x40,
        DACK_ACTIVE_HI:     0x80
    };

    static DMA_STATUS = {
        CH0_TC:             0x01,   // Channel 0 has reached Terminal Count (TC)
        CH1_TC:             0x02,   // Channel 1 has reached Terminal Count (TC)
        CH2_TC:             0x04,   // Channel 2 has reached Terminal Count (TC)
        CH3_TC:             0x08,   // Channel 3 has reached Terminal Count (TC)
        ALL_TC:             0x0f,   // all TC bits are cleared whenever DMA_STATUS is read
        CH0_REQ:            0x10,   // Channel 0 DMA requested
        CH1_REQ:            0x20,   // Channel 1 DMA requested
        CH2_REQ:            0x40,   // Channel 2 DMA requested
        CH3_REQ:            0x80    // Channel 3 DMA requested
    };

    static DMA_MASK = {
        CHANNEL:            0x03,
        CHANNEL_SET:        0x04
    };

    static DMA_MODE = {
        CHANNEL:            0x03,   // bits 0-1 select 1 of 4 possible channels
        TYPE:               0x0C,   // bits 2-3 select 1 of 3 valid (4 possible) transfer types
        TYPE_VERIFY:        0x00,   // pseudo transfer (generates addresses, responds to EOP, but nothing is moved)
        TYPE_WRITE:         0x04,   // write to memory (move data FROM an I/O device; eg, reading a sector from a disk)
        TYPE_READ:          0x08,   // read from memory (move data TO an I/O device; eg, writing a sector to a disk)
        AUTOINIT:           0x10,
        DECREMENT:          0x20,   // clear for INCREMENT
        MODE:               0xC0,   // bits 6-7 select 1 of 4 possible transfer modes
        MODE_DEMAND:        0x00,
        MODE_SINGLE:        0x40,
        MODE_BLOCK:         0x80,
        MODE_CASCADE:       0xC0
    };

    static DMA_REFRESH    = 0x00;   // DMA channel assigned to memory refresh
    static DMA_FDC        = 0x02;   // DMA channel assigned to the Floppy Drive Controller (FDC)
    static DMA_HDC        = 0x03;   // DMA channel assigned to the Hard Drive Controller (HDC; XTC only)

    /**
     * 8259A Programmable Interrupt Controller (PIC) I/O ports
     *
     * Internal registers:
     *
     *      ICW1    Initialization Command Word 1 (sent to port ChipSet.PIC_LO)
     *      ICW2    Initialization Command Word 2 (sent to port ChipSet.PIC_HI)
     *      ICW3    Initialization Command Word 3 (sent to port ChipSet.PIC_HI)
     *      ICW4    Initialization Command Word 4 (sent to port ChipSet.PIC_HI)
     *      IMR     Interrupt Mask Register
     *      IRR     Interrupt Request Register
     *      ISR     Interrupt Service Register
     *      IRLow   (IR having lowest priority; IR+1 will have highest priority; default is 7)
     *
     * Note that ICW2 effectively contains the starting IDT vector number (ie, for IRQ 0),
     * which must be multiplied by 4 to calculate the vector offset, since every vector is 4 bytes long.
     *
     * Also, since the low 3 bits of ICW2 are ignored in 8086/8088 mode (ie, they are effectively
     * treated as zeros), this means that the starting IDT vector can only be a multiple of 8.
     *
     * So, if ICW2 is set to 0x08, the starting vector number (ie, for IRQ 0) will be 0x08, and the
     * 4-byte address for the corresponding ISR will be located at offset 0x20 in the real-mode IDT.
     *
     * ICW4 is typically set to 0x09, indicating 8086 mode, non-automatic EOI, buffered/slave mode.
     *
     * TODO: Determine why the original ROM BIOS chose buffered/slave over buffered/master.
     * Did it simply not matter in pre-AT systems with only one PIC, or am I misreading something?
     *
     * TODO: Consider support for level-triggered PIC interrupts, even though the original IBM PCs
     * (up through MODEL_5170) used only edge-triggered interrupts.
     */
    static PIC0 = {                 // all models: the "master" PIC
        INDEX:              0,
        PORT:               0x20
    };

    static PIC1 = {                 // MODEL_5170 and up: the "slave" PIC
        INDEX:              1,
        PORT:               0xA0
    };

    static PIC_LO = {               // ChipSet.PIC0.PORT+0 or ChipSet.PIC1.PORT+0
        ICW1:               0x10,   // set means ICW1
        ICW1_ICW4:          0x01,   // ICW4 needed (otherwise ICW4 must be sent)
        ICW1_SNGL:          0x02,   // single PIC (and therefore no ICW3; otherwise there is another "cascaded" PIC)
        ICW1_ADI:           0x04,   // call address interval is 4 (otherwise 8; presumably ignored in 8086/8088 mode)
        ICW1_LTIM:          0x08,   // level-triggered interrupt mode (otherwise edge-triggered mode, which is what PCs use)
        OCW2:               0x00,   // bit 3 (PIC_LO.OCW3) and bit 4 (ChipSet.PIC_LO.ICW1) are clear in an OCW2 command byte
        OCW2_IR_LVL:        0x07,
        OCW2_OP_MASK:       0xE0,   // of the following valid OCW2 operations, the first 4 are EOI commands (all have ChipSet.PIC_LO.OCW2_EOI set)
        OCW2_EOI:           0x20,   // non-specific EOI (end-of-interrupt)
        OCW2_EOI_SPEC:      0x60,   // specific EOI
        OCW2_EOI_ROT:       0xA0,   // rotate on non-specific EOI
        OCW2_EOI_ROTSPEC:   0xE0,   // rotate on specific EOI
        OCW2_SET_ROTAUTO:   0x80,   // set rotate in automatic EOI mode
        OCW2_CLR_ROTAUTO:   0x00,   // clear rotate in automatic EOI mode
        OCW2_SET_PRI:       0xC0,   // bits 0-2 specify the lowest priority interrupt
        OCW3:               0x08,   // bit 3 (PIC_LO.OCW3) is set and bit 4 (PIC_LO.ICW1) clear in an OCW3 command byte (bit 7 should be clear, too)
        OCW3_READ_IRR:      0x02,   // read IRR register
        OCW3_READ_ISR:      0x03,   // read ISR register
        OCW3_READ_CMD:      0x03,
        OCW3_POLL_CMD:      0x04,   // poll
        OCW3_SMM_RESET:     0x40,   // special mask mode: reset
        OCW3_SMM_SET:       0x60,   // special mask mode: set
        OCW3_SMM_CMD:       0x60
    };

    static PIC_HI = {               // ChipSet.PIC0.PORT+1 or ChipSet.PIC1.PORT+1
        ICW2_VECTOR:        0xF8,   // starting vector number (bits 0-2 are effectively treated as zeros in 8086/8088 mode)
        ICW4_8086:          0x01,
        ICW4_AUTO_EOI:      0x02,
        ICW4_MASTER:        0x04,
        ICW4_BUFFERED:      0x08,
        ICW4_FULLY_NESTED:  0x10,
        OCW1_IMR:           0xFF
    };

    /**
     * The priorities of IRQs 0-7 are normally high to low, unless the master PIC has been reprogrammed.
     * Also, if a slave PIC is present, the priorities of IRQs 8-15 fall between the priorities of IRQs 1 and 3.
     *
     * As the MODEL_5170 TechRef states:
     *
     *      "Interrupt requests are prioritized, with IRQ9 through IRQ12 and IRQ14 through IRQ15 having the
     *      highest priority (IRQ9 is the highest) and IRQ3 through IRQ7 having the lowest priority (IRQ7 is
     *      the lowest).
     *
     *      Interrupt 13 (IRQ.FPU) is used on the system board and is not available on the I/O channel.
     *      Interrupt 8 (IRQ.RTC) is used for the real-time clock."
     *
     * This priority scheme is a byproduct of IRQ8 through IRQ15 (slave PIC interrupts) being tied to IRQ2 of
     * the master PIC.  As a result, the two other system board interrupts, IRQ0 and IRQ1, continue to have the
     * highest priority, by default.
     */
    static IRQ = {
        TIMER0:             0x00,
        KBD:                0x01,
        VID:                0x02,   // EGA vertical retrace (arrives via IRQ 9 on MODEL_5170)
        SLAVE:              0x02,   // MODEL_5170
        COM2:               0x03,
        COM1:               0x04,
        XTC:                0x05,   // MODEL_5160 uses IRQ 5 for HDC (XTC version)
        LPT2:               0x05,   // MODEL_5170 uses IRQ 5 for LPT2
        FDC:                0x06,
        LPT1:               0x07,
        RTC:                0x08,   // MODEL_5170
        IRQ2:               0x09,   // MODEL_5170
        FPU:                0x0D,   // MODEL_5170
        ATC1:               0x0E,   // MODEL_5170 uses IRQ 14 for primary ATC controller interrupts
        ATC2:               0x0F    // MODEL_5170 *can* use IRQ 15 for secondary ATC controller interrupts
    };

    /**
     * 8253 Programmable Interval Timer (PIT) I/O ports
     *
     * Although technically, a PIT provides 3 "counters" rather than 3 "timers", we have
     * adopted IBM's TechRef nomenclature, which refers to the PIT's counters as TIMER0,
     * TIMER1, and TIMER2.  For machines with a second PIT (eg, the DeskPro 386), we refer
     * to those additional counters as TIMER3, TIMER4, and TIMER5.
     *
     * In addition, if there's a need to refer to a specific PIT, use PIT0 for the first PIT
     * and PIT1 for the second.  This mirrors how we refer to multiple DMA controllers
     * (eg, DMA0 and DMA1) and multiple PICs (eg, PIC0 and PIC1).
     *
     * This differs from COMPAQ's nomenclature, which used "Timer 1" to refer to the first
     * PIT, and "Timer 2" for the second PIT, and then referred to "Counter 0", "Counter 1",
     * and "Counter 2" within each PIT.
     */
    static PIT0 = {
        PORT:               0x40,
        INDEX:              0,
        TIMER0:             0,      // used for time-of-day (prior to MODEL_5170)
        TIMER1:             1,      // used for memory refresh
        TIMER2:             2       // used for speaker tone generation
    };

    static PIT1 = {
        PORT:               0x48,   // MODEL_COMPAQ_DESKPRO386 only
        INDEX:              1,
        TIMER3:             0,      // used for fail-safe clock
        TIMER4:             1,      // N/A
        TIMER5:             2       // used for refresher request extend/speed control
    };

    static PIT_CTRL = {
        PORT1:              0x43,   // write-only control register (use the Read-Back command to get status)
        PORT2:              0x4B,   // write-only control register (use the Read-Back command to get status)
        BCD:                0x01,
        MODE:               0x0E,
        MODE0:              0x00,   // interrupt on Terminal Count (TC)
        MODE1:              0x02,   // programmable one-shot
        MODE2:              0x04,   // rate generator
        MODE3:              0x06,   // square wave generator
        MODE4:              0x08,   // software-triggered strobe
        MODE5:              0x0A,   // hardware-triggered strobe
        RW:                 0x30,
        RW_LATCH:           0x00,
        RW_LSB:             0x10,
        RW_MSB:             0x20,
        RW_BOTH:            0x30,
        SC:                 0xC0,
        SC_CTR0:            0x00,
        SC_CTR1:            0x40,
        SC_CTR2:            0x80,
        SC_BACK:            0xC0,
        SC_SHIFT:           6,
        RB_CTR0:            0x02,
        RB_CTR1:            0x04,
        RB_CTR2:            0x08,
        RB_STATUS:          0x10,   // if this bit is CLEAR, then latch the current status of the selected counter(s)
        RB_COUNTS:          0x20,   // if this bit is CLEAR, then latch the current count(s) of the selected counter(s)
        RB_NULL:            0x40,   // bit set in Read-Back status byte if the counter has not been "fully loaded" yet
        RB_OUT:             0x80    // bit set in Read-Back status byte if fOUT is true
    };

    static TIMER_TICKS_PER_SEC = 1193181;

    /**
     * 8255A Programmable Peripheral Interface (PPI) I/O ports, for Cassette/Speaker/Keyboard/SW1/etc
     *
     * Normally, 0x99 is written to PPI_CTRL.PORT, indicating that PPI.PORT and PPI_C.PORT are INPUT ports
     * and PPI_B.PORT is an OUTPUT port.
     *
     * However, the MODEL_5160 ROM BIOS initially writes 0x89 instead, making PPI.PORT an OUTPUT port.
     * I'm guessing that's just part of some "diagnostic mode", because all it writes to PPI.PORT are a series
     * of "checkpoint" values (ie, 0x01, 0x02, and 0x03) before updating PPI_CTRL.PORT with the usual 0x99.
     */
    static PPI = {                  // this.bPPIA (port 0x60)
        PORT:               0x60    // INPUT: keyboard scan code (PPI_B.CLEAR_KBD must be clear)
    };

    static PPI_B = {                // this.bPPIB (port 0x61)
        PORT:               0x61,   // OUTPUT (although it has to be treated as INPUT, too; the keyboard interrupt handler reads it, OR's PPI_B.CLEAR_KBD, writes it, and then rewrites the original read value)
        CLK_TIMER2:         0x01,   // ALL: set to enable clock to TIMER2
        SPK_TIMER2:         0x02,   // ALL: set to connect output of TIMER2 to speaker (MODEL_5150: clear for cassette)
        ENABLE_SW2:         0x04,   // MODEL_5150: set to enable SW2[1-4] through PPI_C.PORT, clear to enable SW2[5]; MODEL_5160: unused (there is no SW2 switch block on the MODEL_5160 motherboard)
        CASS_MOTOR_OFF:     0x08,   // MODEL_5150: cassette motor off
        ENABLE_SW_HI:       0x08,   // MODEL_5160: clear to read SW1[1-4], set to read SW1[5-8]
        DISABLE_RW_MEM:     0x10,   // ALL: clear to enable RAM parity check, set to disable
        DISABLE_IO_CHK:     0x20,   // ALL: clear to enable I/O channel check, set to disable
        CLK_KBD:            0x40,   // ALL: clear to force keyboard clock low
        CLEAR_KBD:          0x80    // ALL: clear to enable keyboard scan codes (MODEL_5150: set to enable SW1 through PPI.PORT)
    };

    static PPI_C = {                // this.bPPIC (port 0x62)
        PORT:               0x62,   // INPUT (see below)
        KBD_LATCH:          0x01,   // MODEL_4860 only (set if keyboard data latched)
        NO_MODEM:           0x02,   // MODEL_4860 only (set if no Internal Model Card installed)
        NO_DISKETTE:        0x04,   // MODEL_4860 only (set if no Diskette Drive Adapter installed)
        NO_MEMEXP:          0x08,   // MODEL_4860 only (set if no 64Kb Memory Expansion installed)
        SW:                 0x0F,   // MODEL_5150: SW2[1-4] or SW2[5], depending on whether PPI_B.ENABLE_SW2 is set or clear; MODEL_5160: SW1[1-4] or SW1[5-8], depending on whether PPI_B.ENABLE_SW_HI is clear or set
        CASS_DATA_IN:       0x10,   // MODEL_4860 and MODEL_5150
        TIMER2_OUT:         0x20,   // MODEL_4860 and up (timer 2 output)
        KBD_DATA:           0x40,   // MODEL_4860 only: data from either the keyboard cable or the IR receiver
        NO_KBD_CABLE:       0x80,   // MODEL_4860 only: (set if keyboard cable not connected)
        IO_CHANNEL_CHK:     0x40,   // used by NMI handler to detect I/O channel errors
        RW_PARITY_CHK:      0x80    // used by NMI handler to detect R/W memory parity errors
    };

    static PPI_CTRL = {             // this.bPPICtrl (port 0x63)
        PORT:               0x63,   // OUTPUT: initialized to 0x99, defining PPI and PPI_C as INPUT and PPI_B as OUTPUT
        A_IN:               0x10,
        B_IN:               0x02,
        C_IN_LO:            0x01,
        C_IN_HI:            0x08,
        B_MODE:             0x04,
        A_MODE:             0x60
    };

    /**
     * 8041 Keyboard Controller I/O ports (MODEL_ATT_6300)
     *
     * The AT&T 6300 uses an 8041 for its Keyboard Controller, which has the following ports:
     *
     *      Port    Description
     *      ----    -----------
     *      0x60    Keyboard Scan Code (input)
     *      0x61    Keyboard Control Port (output)
     *      0x64    Keyboard Status Port (input)
     *
     * And the Keyboard Control Port (0x61) has the following bit definitions:
     *
     *      0x01    Speaker gate to 8253 (counter 2)
     *      0x02    Speaker data
     *      0x0C    Not used
     *      0x10    RAM Parity (NMI) Enable
     *      0x20    I/O Channel (NMI) Enable
     *      0x40    Keyboard Clock Reset
     *      0x80    Reset Interrupt Pending
     */
    static C8041 = {
        PORT:               0x60
    };

    /**
     * 8042 Keyboard Controller I/O ports (MODEL_5170)
     *
     * On the MODEL_5170, port 0x60 is designated C8042.DATA rather than PPI, although the BIOS also refers to it
     * as "PORT_A: 8042 KEYBOARD SCAN/DIAG OUTPUTS").  This is the 8042's output buffer and should be read only when
     * C8042.STATUS.OUTBUFF_FULL is set.
     *
     * Similarly, port 0x61 is designated C8042.RWREG rather than PPI_B; the BIOS also refers to it as "PORT_B: 8042
     * READ WRITE REGISTER", but it is not otherwise discussed in the MODEL_5170 TechRef's 8042 documentation.
     *
     * There are brief references to bits 0 and 1 (C8042.RWREG.CLK_TIMER2 and C8042.RWREG.SPK_TIMER2), and the BIOS sets
     * bits 2-7 to "DISABLE PARITY CHECKERS" (principally C8042.RWREG.DISABLE_NMI, which are bits 2 and 3); why the BIOS
     * also sets bits 4-7 (or if those bits are even settable) is unclear, since it uses 11111100b rather than defined
     * constants.
     *
     * The bottom line: on a MODEL_5170, port 0x61 is still used for speaker control and parity checking, so we use
     * the same register (bPPIB) but install different I/O handlers.  It's also bi-directional: at one point, the BIOS
     * reads C8042.RWREG.REFRESH_BIT (bit 4) to verify that it's alternating.
     *
     * PPI_C and PPI_CTRL don't seem to be documented or used by the MODEL_5170 BIOS, so I'm assuming they're obsolete.
     *
     * NOTE: For more information on the 8042 Controller, including information on undocumented commands, refer to the
     * documents in /devices/pc/keyboard, as well as the following websites:
     *
     *      http://halicery.com/8042/8042_INTERN_TXT.htm
     *      http://www.os2museum.com/wp/ibm-pcat-8042-keyboard-controller-commands/
     */
    static C8042 = {
        PORT:               0x60,
        DATA: {                     // this.b8042OutBuff (PPI on previous models, still referred to as "PORT A" by the MODEL_5170 BIOS)
            PORT:           0x60,
            CMD: {                  // this.b8042CmdData (C8042.DATA.CMD "data bytes" written to port 0x60, after writing a C8042.CMD byte to port 0x64)
                INT_ENABLE: 0x01,   // generate an interrupt when the controller places data in the output buffer
                SYS_FLAG:   0x04,   // this value is propagated to ChipSet.C8042.STATUS.SYS_FLAG
                NO_INHIBIT: 0x08,   // disable inhibit function
                NO_CLOCK:   0x10,   // disable keyboard by driving "clock" line low
                PC_MODE:    0x20,
                PC_COMPAT:  0x40    // generate IBM PC-compatible scan codes
            },
            SELF_TEST: {            // result of ChipSet.C8042.CMD.SELF_TEST command (0xAA)
                OK:         0x55
            },
            INTF_TEST: {            // result of ChipSet.C8042.CMD.INTF_TEST command (0xAB)
                OK:         0x00,   // no error
                CLOCK_LO:   0x01,   // keyboard clock line stuck low
                CLOCK_HI:   0x02,   // keyboard clock line stuck high
                DATA_LO:    0x03,   // keyboard data line stuck low
                DATA_HI:    0x04    // keyboard data line stuck high
            }
        },
        INPORT: {                   // this.b8042InPort
            COMPAQ_50MHZ:   0x01,   // 50Mhz system clock enabled (0=48Mhz); see COMPAQ 386/25 TechRef p2-106
            UNDEFINED:      0x02,   // undefined
            COMPAQ_NO80387: 0x04,   // 80387 coprocessor NOT installed; see COMPAQ 386/25 TechRef p2-106
            COMPAQ_NOWEITEK:0x08,   // Weitek coprocessor NOT installed; see COMPAQ 386/25 TechRef p2-106
            ENABLE_256KB:   0x10,   // enable 2nd 256Kb of system board RAM
            COMPAQ_HISPEED: 0x10,   // high-speed enabled (0=AUTO, 1=HIGH); see COMPAQ 386/25 TechRef p2-106
            MFG_OFF:        0x20,   // manufacturing jumper not installed
            COMPAQ_DIP5OFF: 0x20,   // system board DIP switch #5 OFF (0=ON); see COMPAQ 386/25 TechRef p2-106
            MONO:           0x40,   // monochrome monitor is primary display
            COMPAQ_NONDUAL: 0x40,   // COMPAQ Dual-Mode monitor NOT installed; see COMPAQ 386/25 TechRef p2-106
            KBD_UNLOCKED:   0x80    // keyboard not inhibited (in COMPAQ parlance: security lock is unlocked)
        },
        OUTPORT: {                  // this.b8042OutPort
            NO_RESET:       0x01,   // set by default
            A20_ON:         0x02,   // set by default
            COMPAQ_SLOWD:   0x08,   // SL0WD* NOT asserted (refer to timer 2, counter 2); see COMPAQ 386/25 TechRef p2-105
            OUTBUFF_FULL:   0x10,   // output buffer full
            INBUFF_EMPTY:   0x20,   // input buffer empty
            KBD_CLOCK:      0x40,   // keyboard clock (output)
            KBD_DATA:       0x80    // keyboard data (output)
        },
        TESTPORT: {                 // generated "on the fly"
            KBD_CLOCK:      0x01,   // keyboard clock (input)
            KBD_DATA:       0x02    // keyboard data (input)
        },
        RWREG: {                    // this.bPPIB (since CLK_TIMER2 and SPK_TIMER2 are in both PPI_B and RWREG)
            PORT:           0x61,
            CLK_TIMER2:     0x01,   // set to enable clock to TIMER2 (R/W)
            SPK_TIMER2:     0x02,   // set to connect output of TIMER2 to speaker (R/W)
            COMPAQ_FSNMI:   0x04,   // set to disable RAM/FS NMI (R/W, DESKPRO386)
            COMPAQ_IONMI:   0x08,   // set to disable IOCHK NMI (R/W, DESKPRO386)
            DISABLE_NMI:    0x0C,   // set to disable IOCHK and RAM/FS NMI, clear to enable (R/W)
            REFRESH_BIT:    0x10,   // 0 if RAM refresh occurring, 1 if RAM not in refresh cycle (R/O)
            OUT_TIMER2:     0x20,   // state of TIMER2 output signal (R/O, DESKPRO386)
            IOCHK_NMI:      0x40,   // IOCHK NMI (R/O); to reset, pulse bit 3 (0x08)
            RAMFS_NMI:      0x80,   // RAM/FS (parity or fail-safe) NMI (R/O); to reset, pulse bit 2 (0x04)
            NMI_ERROR:      0xC0
        },
        CMD: {                      // this.b8042InBuff (on write to port 0x64, interpret this as a CMD)
            PORT:           0x64,
            READ_CMD:       0x20,   // sends the current CMD byte (this.b8042CmdData) to C8042.PORT
            WRITE_CMD:      0x60,   // followed by a command byte written to C8042.PORT (see C8042.DATA.CMD)
            COMPAQ_SLOWD:   0xA3,   // enable system slow down; see COMPAQ 386/25 TechRef p2-111
            COMPAQ_TOGGLE:  0xA4,   // toggle speed-control bit; see COMPAQ 386/25 TechRef p2-111
            COMPAQ_SREAD2:  0xA5,   // special read of "port 2"; see COMPAQ 386/25 TechRef p2-111
            SELF_TEST:      0xAA,   // self-test (C8042.DATA.SELF_TEST.OK is placed in the output buffer if no errors)
            INTF_TEST:      0xAB,   // interface test
            DIAG_DUMP:      0xAC,   // diagnostic dump
            DISABLE_KBD:    0xAD,   // disable keyboard
            ENABLE_KBD:     0xAE,   // enable keyboard
            READ_INPORT:    0xC0,   // read input port and place data in output buffer (use only if output buffer empty)
            READ_OUTPORT:   0xD0,   // read output port and place data in output buffer (use only if output buffer empty)
            WRITE_OUTPORT:  0xD1,   // next byte written to C8042.PORT (port 0x60) is placed in the output port (see C8042.OUTPORT)
            READ_TEST:      0xE0,
            PULSE_OUTPORT:  0xF0    // this is the 1st of 16 commands (0xF0-0xFF) that pulse bits 0-3 of the output port
        },
        STATUS: {                   // this.b8042Status (on read from port 0x64)
            PORT:           0x64,
            OUTBUFF_FULL:   0x01,
            INBUFF_FULL:    0x02,   // set if the controller has received but not yet read data from the input buffer (not normally set)
            SYS_FLAG:       0x04,
            CMD_FLAG:       0x08,   // set on write to C8042.CMD (port 0x64), clear on write to C8042.DATA (port 0x60)
            NO_INHIBIT:     0x10,   // (in COMPAQ parlance: security lock not engaged)
            XMT_TIMEOUT:    0x20,
            RCV_TIMEOUT:    0x40,
            PARITY_ERR:     0x80,   // last byte of data received had EVEN parity (ODD parity is normally expected)
            OUTBUFF_DELAY:  0x100
        }
    };

    /**
     * MC146818A RTC/CMOS Ports (MODEL_5170)
     *
     * Write a CMOS address to ChipSet.CMOS.ADDR.PORT, then read/write data from/to ChipSet.CMOS.DATA.PORT.
     *
     * The ADDR port also controls NMI: write an address with bit 7 clear to enable NMI or set to disable NMI.
     */
    static CMOS = {
        ADDR: {                     // this.bCMOSAddr
            PORT:           0x70,
            RTC_SEC:        0x00,
            RTC_SEC_ALARM:  0x01,
            RTC_MIN:        0x02,
            RTC_MIN_ALARM:  0x03,
            RTC_HOUR:       0x04,
            RTC_HOUR_ALARM: 0x05,
            RTC_WEEK_DAY:   0x06,
            RTC_MONTH_DAY:  0x07,
            RTC_MONTH:      0x08,
            RTC_YEAR:       0x09,   // 2-digit year (eg, 0x82 for 1982 if BCD mode)
            STATUSA:        0x0A,
            STATUSB:        0x0B,
            STATUSC:        0x0C,
            STATUSD:        0x0D,
            DIAG:           0x0E,
            SHUTDOWN:       0x0F,
            FDRIVE:         0x10,
            HDRIVE:         0x12,   // bits 4-7 contain type of drive 0, bits 0-3 contain type of drive 1 (type 0 means none)
            EQUIP:          0x14,
            BASEMEM_LO:     0x15,
            BASEMEM_HI:     0x16,   // the BASEMEM values indicate the total Kb of base memory, up to 0x280 (640Kb)
            EXTMEM_LO:      0x17,
            EXTMEM_HI:      0x18,   // the EXTMEM values indicate the total Kb of extended memory, up to 0x3C00 (15Mb)
            EXTHDRIVE0:     0x19,   // if bits 4-7 of HDRIVE contains 15, then the type of drive 0 is stored here (16-255)
            EXTHDRIVE1:     0x1A,   // if bits 0-3 of HDRIVE contains 15, then the type of drive 1 is stored here (16-255)
            CHKSUM_HI:      0x2E,
            CHKSUM_LO:      0x2F,   // CMOS bytes included in the checksum calculation: 0x10-0x2D
            EXTMEM2_LO:     0x30,
            EXTMEM2_HI:     0x31,
            CENTURY_DATE:   0x32,   // 2-digit century value in BCD (eg, 0x19 for 20th century, 0x20 for 21st century)
            BOOT_INFO:      0x33,   // 0x80 if 128Kb expansion memory installed, 0x40 if Setup Utility wants an initial setup message
            MASK:           0x3F,
            TOTAL:          0x40,
            NMI_DISABLE:    0x80
        },
        DATA: {                     // this.abCMOSData
            PORT:           0x71
        },
        STATUSA: {                  // abCMOSData[ChipSet.CMOS.ADDR.STATUSA]
            UIP:            0x80,   // bit 7: 1 indicates Update-In-Progress, 0 indicates date/time ready to read
            DV:             0x70,   // bits 6-4 (DV2-DV0) are programmed to 010 to select a 32.768Khz time base
            RS:             0x0F    // bits 3-0 (RS3-RS0) are programmed to 0110 to select a 976.562us interrupt rate
        },
        STATUSB: {                  // abCMOSData[ChipSet.CMOS.ADDR.STATUSB]
            SET:            0x80,   // bit 7: 1 to set any/all of the 14 time-bytes
            PIE:            0x40,   // bit 6: 1 for Periodic Interrupt Enable
            AIE:            0x20,   // bit 5: 1 for Alarm Interrupt Enable
            UIE:            0x10,   // bit 4: 1 for Update Interrupt Enable
            SQWE:           0x08,   // bit 3: 1 for Square Wave Enabled (as set by the STATUSA rate selection bits)
            BINARY:         0x04,   // bit 2: 1 for binary Date Mode, 0 for BCD Date Mode
            HOUR24:         0x02,   // bit 1: 1 for 24-hour mode, 0 for 12-hour mode
            DST:            0x01    // bit 0: 1 for Daylight Savings Time enabled
        },
        STATUSC: {                  // abCMOSData[ChipSet.CMOS.ADDR.STATUSC]
            IRQF:           0x80,   // bit 7: 1 indicates one or more of the following bits (PF, AF, UF) are set
            PF:             0x40,   // bit 6: 1 indicates Periodic Interrupt
            AF:             0x20,   // bit 5: 1 indicates Alarm Interrupt
            UF:             0x10,   // bit 4: 1 indicates Update Interrupt
            RESERVED:       0x0F
        },
        STATUSD: {                  // abCMOSData[ChipSet.CMOS.ADDR.STATUSD]
            VRB:            0x80,   // bit 7: 1 indicates Valid RAM Bit (0 implies power was and/or is lost)
            RESERVED:       0x7F
        },
        DIAG: {                     // abCMOSData[ChipSet.CMOS.ADDR.DIAG]
            RTCFAIL:        0x80,   // bit 7: 1 indicates RTC lost power
            CHKSUMFAIL:     0x40,   // bit 6: 1 indicates bad CMOS checksum
            CONFIGFAIL:     0x20,   // bit 5: 1 indicates bad CMOS configuration info
            MEMSIZEFAIL:    0x10,   // bit 4: 1 indicates memory size miscompare
            HDRIVEFAIL:     0x08,   // bit 3: 1 indicates hard drive controller or drive init failure
            TIMEFAIL:       0x04,   // bit 2: 1 indicates time failure
            RESERVED:       0x03
        },
        FDRIVE: {                   // abCMOSData[ChipSet.CMOS.ADDR.FDRIVE]
            D0_MASK:        0xF0,   // Drive 0 type in high nibble
            D1_MASK:        0x0F,   // Drive 1 type in lower nibble
            NONE:           0,      // no drive
            /**
             * There's at least one floppy drive type that IBM didn't bother defining a CMOS drive type for:
             * single-sided drives that were only capable of storing 160Kb (or 180Kb when using 9 sectors/track).
             * So, as you can see in getDIPFloppyDriveType(), we lump all standard diskette capacities <= 360Kb
             * into the FD360 bucket.
             */
            FD360:          1,      // 5.25-inch double-sided double-density (DSDD 48TPI) drive: 40 tracks, 9 sectors/track, 360Kb max
            FD1200:         2,      // 5.25-inch double-sided high-density (DSHD 96TPI) drive: 80 tracks, 15 sectors/track, 1200Kb max
            FD720:          3,      // 3.5-inch drive capable of storing 80 tracks and up to 9 sectors/track, 720Kb max
            FD1440:         4       // 3.5-inch drive capable of storing 80 tracks and up to 18 sectors/track, 1440Kb max
        },
        /**
         * HDRIVE types are defined by table in the HDC component, which uses setCMOSDriveType() to update the CMOS
         */
        HDRIVE: {                   // abCMOSData[ChipSet.CMOS.ADDR.HDRIVE]
            D0_MASK:        0xF0,   // Drive 0 type in high nibble
            D1_MASK:        0x0F    // Drive 1 type in lower nibble
        },
        /**
         * The CMOS equipment flags use the same format as the older PPI equipment flags
         */
        EQUIP: {                    // abCMOSData[ChipSet.CMOS.ADDR.EQUIP]
            MONITOR:        ChipSet.PPI_SW.MONITOR,         // PPI_SW.MONITOR.MASK == 0x30
            FPU:            ChipSet.PPI_SW.FPU,             // PPI_SW.FPU == 0x02
            FDRIVE:         ChipSet.PPI_SW.FDRIVE           // PPI_SW.FDRIVE.IPL == 0x01 and PPI_SW.FDRIVE.MASK = 0xC0
        }
    };

    /**
     * DMA Page Registers
     *
     * The MODEL_5170 TechRef lists 0x80-0x9F as the range for DMA page registers, but that may be a bit
     * overbroad.  There are a total of 8 (7 usable) DMA channels on the MODEL_5170, each of which has the
     * following assigned DMA page registers:
     *
     *      Channel #   Page Reg
     *      ---------   --------
     *          0         0x87
     *          1         0x83
     *          2         0x81
     *          3         0x82
     *          4         0x8F (not usable; the 5170 TechRef refers to this as the "Refresh" page register)
     *          5         0x8B
     *          6         0x89
     *          7         0x8A
     *
     * That leaves 0x80, 0x84, 0x85, 0x86, 0x88, 0x8C, 0x8D and 0x8E unaccounted for in the range 0x80-0x8F.
     * (I'm saving the question of what, if anything, is available in the range 0x90-0x9F for another day.)
     *
     * As for port 0x80, the TechRef says:
     *
     *      "I/O address hex 080 is used as a diagnostic-checkpoint port or register.
     *      This port corresponds to a read/write register in the DMA page register (74LS612)."
     *
     * so I used to have dedicated handlers and storage (bMFGData) for the register at port 0x80, but I've since
     * appended it to abDMAPageSpare, an 8-element array that captures all I/O to the 8 unassigned (aka "spare")
     * DMA page registers.  The 5170 BIOS uses 0x80 as a "checkpoint" register, and the DESKPRO386 uses 0x84 in a
     * similar fashion.  The 5170 also contains "MFG_TST" code that uses other unassigned DMA page registers as
     * scratch registers, which come in handy when RAM hasn't been tested/initialized yet.
     *
     * Here's our mapping of entries in the abDMAPageSpare array to the unassigned ("spare") DMA page registers:
     *
     *      Index #     Page Reg
     *      --------    --------
     *          0         0x84
     *          1         0x85
     *          2         0x86
     *          3         0x88
     *          4         0x8C
     *          5         0x8D
     *          6         0x8E
     *          7         0x80
     *
     * The only reason port 0x80 is out of sequence (ie, at the end of the array, at index 7 instead of index 0) is
     * because it was added the array later, and the entire array gets written to our save/restore data structures, so
     * reordering the elements would be a bad idea.
     */

    /**
     * NMI Mask Register (port 0xA0)
     *
     * On the MODEL_5150 and MODEL_5160, this is a write-only register, and the only valid bit is ENABLE.
     *
     * On the MODEL_4860, this is a read-write register; the following bit definitions apply to writes, whereas
     * reads are defined as merely clearing the PCjr's keyboard NMI latch (which we maintain here in bit 0).
     */
    static NMI = {                  // this.bNMI
        PORT:               0xA0,   //
        ENABLE:             0x80,   // enables NMI
        IRTEST:             0x40,   // enables 8253 timer 2 output into an IR diode on the IR receiver board
        SELCLK1:            0x20,   // selects timer 0 output to be used as CLK input to timer 1
        DISHRQ:             0x10,   // not implemented on the system board; for use with external bus-master devices
        KBD_LATCH:          0x01,   // keyboard latch (we maintain it here for convenience; it gets propagated to PPI_C bit 0)
        RESET:              0x00    // default value on reset (TODO: Is NMI really disabled by default on reset?)
    };

    /**
     * FPU Coprocessor Control Registers (MODEL_5170)
     */
    static FPU = {                  // TODO: Define a variable for this?
        PORT_CLEAR:         0xF0,   // clear the FPU's "busy" state
        PORT_RESET:         0xF1    // reset the FPU
    };

    /**
     * ChipSet(parmsChipSet)
     *
     * The ChipSet component has the following component-specific (parmsChipSet) properties:
     *
     *      model:          eg, "5150", "5160", "5170", "deskpro386" (should be a member of ChipSet.MODELS)
     *      sw1:            8-character binary string representing the SW1 DIP switches (SW1[1-8]); see Switches Overview
     *      sw2:            8-character binary string representing the SW2 DIP switches (SW2[1-8]) (MODEL_5150 only)
     *      sound:          true (or non-zero) to enable sounds (default), false (or 0) to disable; number used as initial volume
     *      scaleTimers:    true to divide timer cycle counts by the CPU's cycle multiplier (default is false)
     *      floppies:       array of floppy drive sizes in Kb (default is "[360, 360]" if no sw1 value provided)
     *      monitor:        none|tv|color|mono|ega|vga (if no sw1 value provided, default is "ega" for 5170, "mono" otherwise)
     *      dateRTC:        optional RTC date/time (in GMT) to use on reset; use the ISO 8601 format; eg: "2014-10-01T08:00:00"
     *
     * TODO: As support for IBM-compatible machines grows, we should refrain from adding new model strings (eg, "att6300")
     * and corresponding model checks, and instead add more ChipSet configuration properties, such as:
     *
     *      portPIT1:       0x48 to enable PIT1 at base port 0x48 (as used by COMPAQ_DESKPRO386); default to undefined
     *      chipKBD:        8041 to select 8041 emulation (eg, for ATT_6300); default to 8255 for MODEL_5150/MODEL_5160, 8042 for MODEL_5170
     *
     * @this {ChipSet}
     * @param {Object} parmsChipSet
     */
    constructor(parmsChipSet)
    {
        super("ChipSet", parmsChipSet, MESSAGE.CHIPSET);

        let model = parmsChipSet['model'];

        /**
         * this.model is a numeric version of the 'model' string; when comparing this.model to standard IBM
         * model numbers, you should generally compare (this.model|0) to the target value, which truncates it.
         */
        if (model && !ChipSet.MODELS[model]) {
            Component.printf(MESSAGE.NOTICE, "Unrecognized ChipSet model: %s\n", model);
        }

        this.model = ChipSet.MODELS[model] || ChipSet.MODEL_5150_OTHER;

        let bSwitches;
        this.aDIPSwitches = [];

        this.aDMAControllerInit = [0, null, null, 0, new Array(4), 0];
        this.aDMAChannelInit = [true, [0,0], [0,0], [0,0], [0,0]];
        this.aPICInit = [0, new Array(4)];
        this.aTimerInit = [[0,0], [0,0], [0,0], [0,0]];

        /**
         * SW1 describes the number of floppy drives, the amount of base memory, the primary monitor type,
         * and (on the MODEL_5160) whether or not a coprocessor is installed.  If no SW1 settings are provided,
         * we look for individual 'floppies' and 'monitor' settings and build a default SW1 value.
         *
         * The defaults below select max memory, monochrome monitor (EGA monitor for MODEL_5170), and two floppies.
         * Don't get too excited about "max memory" either: on a MODEL_5150, the max was 64Kb, and on a MODEL_5160,
         * the max was 256Kb.  However, the RAM component is free to install as much base memory as it likes,
         * overriding the SW1 memory setting.
         *
         * Given that the ROM BIOS is hard-coded to load boot sectors @0000:7C00, the minimum amount of system RAM
         * required to boot is therefore 32Kb.  Whether that's actually enough to run any or all versions of PC-DOS is
         * a separate question.  FYI, with only 16Kb, the ROM BIOS will still try to boot, and fail miserably.
         */
        bSwitches = this.parseDIPSwitches(parmsChipSet[ChipSet.CONTROLS.SW1]);
        this.aDIPSwitches[0] = [bSwitches, bSwitches];

        if (bSwitches == null) {
            this.aFloppyDrives = [360, 360];
            let aFloppyDrives = parmsChipSet['floppies'];
            if (typeof aFloppyDrives == "string") {
                aFloppyDrives = JSON.parse(aFloppyDrives);
            }
            if (aFloppyDrives && aFloppyDrives.length) this.aFloppyDrives = aFloppyDrives;
            this.setDIPSwitches(ChipSet.SW_TYPE.FLOPNUM, this.aFloppyDrives.length);

            let sMonitor = parmsChipSet['monitor'] || (this.model < ChipSet.MODEL_5170? "mono" : "ega");
            this.setDIPSwitches(ChipSet.SW_TYPE.MONITOR, sMonitor);
        }

        /**
         * SW2 describes the number of 32Kb blocks of I/O expansion RAM that's present in the system. The MODEL_5150
         * ROM BIOS only checked/supported the first four switches, so the maximum amount of additional RAM specifiable
         * was 15 * 32Kb, or 480Kb.  So with a 16Kb-64Kb motherboard, the MODEL_5150 ROM BIOS could support a grand
         * total of 544Kb.  With the 64Kb-256Kb motherboard revision, a 5150 could use the first FIVE SW2 switches,
         * allowing for a grand total as high as 640Kb.
         *
         * For MODEL_5160 (PC XT) and up, memory expansion cards had their own switches, and the motherboard
         * SW2 switches for I/O expansion RAM were eliminated.  Instead, the ROM BIOS scans the entire address space
         * (up to 0xA0000) looking for additional memory.  As a result, the only mechanism we provide for adding RAM
         * (above the maximum of 256Kb supported on the motherboard) is the "size" parameter of the RAM component.
         *
         * NOTE: If you use the "size" parameter, you will not be able to dynamically alter the memory configuration;
         * the RAM component will ignore any changes to SW1.
         */
        bSwitches = this.parseDIPSwitches(parmsChipSet[ChipSet.CONTROLS.SW2]);
        this.aDIPSwitches[1] = [bSwitches, bSwitches];

        this.sCellClass = CSSCLASS + "-bitCell";

        this.cDMACs = 0;
        if (this.model >= ChipSet.MODEL_5150) {
            this.cDMACs++;
        }
        if (this.model >= ChipSet.MODEL_5170) {
            this.cDMACs++;
        }

        this.cPICs = 1;
        if (this.model == ChipSet.MODEL_S100 || this.model >= ChipSet.MODEL_5170) {
            this.cPICs++;
        }

        this.fScaleTimers = parmsChipSet['scaleTimers'] || false;
        this.sDateRTC = parmsChipSet['dateRTC'];

        /**
         * Here, I'm finally getting around to trying the WebLib Audio API.  Fortunately, based on what little
         * I know about sound generation, using the API to make the same noises as the IBM PC speaker seems
         * straightforward.
         *
         * To start, we create an audio context, unless the 'sound' parameter has been explicitly set to false
         * or 0; the boolean value true (along with any illegal number) now defaults to 0.5 instead of 1.0.
         */
        this.volumeInit = 0;
        let sound = parmsChipSet['sound'];
        if (sound) {
            this.volumeInit = (typeof sound != "number" || sound < 0 || sound > 1)? 0.5 : sound;
            this.classAudio = this.contextAudio = null;
            this.classAudio = globals.window['AudioContext'] || globals.window['webkitAudioContext'];
            if (this.classAudio) {
                this.contextAudio = new this.classAudio();
            } else {
                if (DEBUG) this.printf(MESSAGE.LOG, "AudioContext not available");
            }
        }
        /**
         * fSpeakerEnabled indicates whether the speaker is *logically* on, whereas fSpeakerOn indicates
         * whether we have ACTUALLY turned the speaker on.  And finally, fUserSound is set to true only after
         * we have have created the audio oscillator in the context of a user event (a requirement for most
         * browsers before they'll actually emit any sound).
         */
        this.fSpeakerEnabled = this.fSpeakerOn = this.fUserSound = false;

        /**
         * I used to defer ChipSet's reset() to powerUp(), which then gave us the option of doing either
         * reset() OR restore(), instead of both.  However, on MODEL_5170 machines, the initial CMOS data
         * needs to be created earlier, so that when other components are initializing their state (eg, when
         * HDC calls setCMOSDriveType() or RAM calls addCMOSMemory()), the CMOS will be ready to take their calls.
         */
        this.reset(true);
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {ChipSet}
     * @param {Computer} cmp
     * @param {Busx86} bus
     * @param {CPUx86} cpu
     * @param {Debuggerx86} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.bus = bus;
        this.cpu = cpu;
        this.dbg = dbg;
        this.cmp = cmp;

        this.fpuActive = null;
        this.setDIPSwitches(ChipSet.SW_TYPE.FPU, this.cmp.fpu? 1 : 0, true);

        this.kbd = cmp.getMachineComponent("Keyboard");

        let sound = cmp.getMachineParm('sound');
        if (sound != null) {
            let volume = +sound || 0;
            this.volumeInit = (sound == "true" || volume < 0 || volume > 1? 0.5 : volume);
        }
        if (!this.volumeInit) this.printf(MESSAGE.NONE, "note: speaker disabled\n");

        /**
         * This divisor is invariant, so we calculate it as soon as we're able to query the CPU's base speed.
         */
        this.nTicksDivisor = (cpu.getBaseCyclesPerSecond() / ChipSet.TIMER_TICKS_PER_SEC);

        let aPortInput = ChipSet.aPortInput;
        let aPortOutput = ChipSet.aPortOutput;
        if (this.model == ChipSet.MODEL_S100) {
            aPortInput = {
                [this.portPIC0+0]: ChipSet.aPortInput[ChipSet.PIC0.PORT+0],
                [this.portPIC0+1]: ChipSet.aPortInput[ChipSet.PIC0.PORT+1],
                [this.portPIC1+0]: ChipSet.aPortInput5170[ChipSet.PIC1.PORT+0],
                [this.portPIC1+1]: ChipSet.aPortInput5170[ChipSet.PIC1.PORT+1]
            };
            aPortOutput = {
                [this.portPIC0+0]: ChipSet.aPortOutput[ChipSet.PIC0.PORT+0],
                [this.portPIC0+1]: ChipSet.aPortOutput[ChipSet.PIC0.PORT+1],
                [this.portPIC1+0]: ChipSet.aPortOutput5170[ChipSet.PIC1.PORT+0],
                [this.portPIC1+1]: ChipSet.aPortOutput5170[ChipSet.PIC1.PORT+1]
            };
        }

        bus.addPortInputTable(this, aPortInput);
        bus.addPortOutputTable(this, aPortOutput);
        if (this.model == ChipSet.MODEL_4860) {
            bus.addPortInputTable(this, ChipSet.aPortInput4860);
            bus.addPortOutputTable(this, ChipSet.aPortOutput4860);
        }
        else if (this.model >= ChipSet.MODEL_5150) {
            bus.addPortInputTable(this, ChipSet.aPortInput51xx);
            bus.addPortOutputTable(this, ChipSet.aPortOutput51xx);
            if (this.model < ChipSet.MODEL_5170) {
                if (this.model == ChipSet.MODEL_ATT_6300) {
                    bus.addPortInputTable(this, ChipSet.aPortInput6300);
                    bus.addPortOutputTable(this, ChipSet.aPortOutput6300);
                } else {
                    bus.addPortInputTable(this, ChipSet.aPortInput5150);
                    bus.addPortOutputTable(this, ChipSet.aPortOutput5150);
                }
            } else {
                bus.addPortInputTable(this, ChipSet.aPortInput5170);
                bus.addPortOutputTable(this, ChipSet.aPortOutput5170);
                if (DESKPRO386 && (this.model|0) == ChipSet.MODEL_COMPAQ_DESKPRO386) {
                    bus.addPortInputTable(this, ChipSet.aPortInputDeskPro386);
                    bus.addPortOutputTable(this, ChipSet.aPortOutputDeskPro386);
                }
            }
        }
        if (DEBUGGER) {
            if (dbg) {
                let chipset = this;
                /**
                 * TODO: Add more "dumpers" (eg, for DMA, RTC, 8042, etc)
                 */
                dbg.messageDump(MESSAGE.PIC, function onDumpPIC() {
                    chipset.dumpPIC();
                });
                dbg.messageDump(MESSAGE.TIMER, function onDumpTimer(asArgs) {
                    chipset.dumpTimer(asArgs);
                });
                if (this.model >= ChipSet.MODEL_5170) {
                    dbg.messageDump(MESSAGE.CMOS, function onDumpCMOS() {
                        chipset.dumpCMOS();
                    });
                }
            }
            cpu.addIntNotify(Interrupts.TIMER, this.intBIOSTimer.bind(this));
        }
        this.setReady();
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * @this {ChipSet}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea", "canvas")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "sw1")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        switch (sBinding) {

        case ChipSet.CONTROLS.SW1:
            this.bindings[sBinding] = control;
            this.addDIPSwitches(0, sBinding);
            return true;

        case ChipSet.CONTROLS.SW2:
            if ((this.model|0) == ChipSet.MODEL_5150 || this.model == ChipSet.MODEL_ATT_6300) {
                this.bindings[sBinding] = control;
                this.addDIPSwitches(1, sBinding);
                return true;
            }
            break;

        case ChipSet.CONTROLS.SWDESC:
            this.bindings[sBinding] = control;
            return true;

        default:
            break;
        }
        return false;
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {ChipSet}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) {
            if (!data) {
                this.reset();
            } else {
                if (!this.restore(data)) return false;
            }
            if (this.cpu) {
                this.fpuActive = this.cpu.fpuActive;
            }
        }
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {ChipSet}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
     */
    powerDown(fSave, fShutdown)
    {
        return fSave? this.save() : true;
    }

    /**
     * reset(fHard)
     *
     * @this {ChipSet}
     * @param {boolean} [fHard] true on the initial reset (not a normal "soft" reset)
     */
    reset(fHard)
    {
        /**
         * We propagate the initial DIP switch values to the current DIP switch values on reset;
         * the user is only allowed to tweak the initial values, which require a reset to take effect.
         */
        let i;
        this.updateDIPSwitches();

        /**
         * If the CPU is reset first, its resetFPU() function call to getDIPCoprocessor() may return
         * stale information, so now that DIP switches have been updated, we call resetFPU() from here as well.
         */
        if (this.cpu) this.cpu.resetFPU();

        /**
         * DMA (Direct Memory Access) Controller initialization
         */
        this.aDMACs = new Array(this.cDMACs);
        for (i = 0; i < this.cDMACs; i++) {
            this.initDMAController(i);
        }

        /**
         * PIC (Programmable Interrupt Controller) initialization
         */
        this.aPICs = new Array(this.cPICs);
        this.portPIC0 = ChipSet.PIC0.PORT;
        this.portPIC1 = ChipSet.PIC1.PORT;
        if (this.model == ChipSet.MODEL_S100) {
            const ports = [0xF0, 0x70, 0xB0, 0x30, 0xD0, 0x50, 0x90, 0x10, 0xE0, 0x60, 0xA0, 0x20, 0xC0, 0x40, 0x80, 0x00];
            this.portPIC0 = ports[this.aDIPSwitches[0][0] & 0xf];
            this.portPIC1 = this.portPIC0 + 2;
        }
        this.initPIC(ChipSet.PIC0.INDEX, this.portPIC0);
        if (this.cPICs > 1) {
            this.initPIC(ChipSet.PIC1.INDEX, this.portPIC1);
        }

        /**
         * PIT (Programmable Interval Timer) initialization
         *
         * Although the DeskPro 386 refers to the timers in the first PIT as "Timer 1, Counter 0",
         * "Timer 1, Counter 1" and "Timer 1, Counter 2", we're sticking with IBM's nomenclature:
         * TIMER0, TIMER1 and TIMER2.  Which means that we refer to the "counters" in the second PIT
         * as TIMER3, TIMER4 and TIMER5; that numbering also matches their indexes in the aTimers array.
         */
        this.bPIT0Ctrl = null;          // tracks writes to port 0x43
        this.bPIT1Ctrl = null;          // tracks writes to port 0x4B (MODEL_COMPAQ_DESKPRO386 only)

        this.aTimers = /** @type {Array.<Timer>} */ (new Array((this.model|0) == ChipSet.MODEL_COMPAQ_DESKPRO386? 6 : 3));
        for (i = 0; i < this.aTimers.length; i++) {
            this.initTimer(i);
        }

        /**
         * PPI and other misc ports
         */
        this.bPPIA = null;              // tracks writes to port 0x60, in case PPI_CTRL.A_IN is not set
        this.bPPIB = null;              // tracks writes to port 0x61, in case PPI_CTRL.B_IN is not set
        this.bPPIC = null;              // tracks writes to port 0x62, in case PPI_CTRL.C_IN_LO or PPI_CTRL.C_IN_HI is not set
        this.bPPICtrl = null;           // tracks writes to port 0x63 (eg, 0x99); read-only
        this.bNMI = ChipSet.NMI.RESET;  // tracks writes to the NMI Mask Register
        this.bKbdData = 0;              // records last byte received via receiveKbdData(); for machines without an 8042 (eg, PC/PC XT/PCjr)

        if (this.model == ChipSet.MODEL_ATT_6300) {
            this.b8041Status = 0;       // similar to b8042Status (but apparently only bits 0 and 1 are used)
        }

        /**
         * ChipSet state introduced by the MODEL_5170
         */
        if (this.model >= ChipSet.MODEL_5170) {
            /**
             * The 8042 input buffer is treated as a "command byte" when written via port 0x64 and as a "data byte"
             * when written via port 0x60.  So, whenever the C8042.CMD.WRITE_CMD "command byte" is written to the input
             * buffer, the subsequent command data byte is saved in b8042CmdData.  Similarly, for C8042.CMD.WRITE_OUTPORT,
             * the subsequent data byte is saved in b8042OutPort.
             *
             * TODO: Consider a UI for the Keyboard INHIBIT switch.  By default, our keyboard is never inhibited
             * (ie, locked).  Also, note that the hardware changes this bit only when new data is sent to b8042OutBuff.
             */
            this.b8042Status = ChipSet.C8042.STATUS.NO_INHIBIT;
            this.b8042InBuff = 0;
            this.b8042CmdData = ChipSet.C8042.DATA.CMD.NO_CLOCK;
            this.b8042OutBuff = 0;

            /**
             * TODO: Provide more control over these 8042 "Input Port" bits (eg, the keyboard lock)
             */
            this.b8042InPort = ChipSet.C8042.INPORT.MFG_OFF | ChipSet.C8042.INPORT.KBD_UNLOCKED;

            if (this.getDIPMemorySize() >= 512) {
                this.b8042InPort |= ChipSet.C8042.INPORT.ENABLE_256KB;
            }

            if (this.getDIPVideoMonitor() == ChipSet.MONITOR.MONO) {
                this.b8042InPort |= ChipSet.C8042.INPORT.MONO;
            }

            if (DESKPRO386 && (this.model|0) == ChipSet.MODEL_COMPAQ_DESKPRO386) {
                this.b8042InPort |= ChipSet.C8042.INPORT.COMPAQ_NO80387 | ChipSet.C8042.INPORT.COMPAQ_NOWEITEK;
            }

            this.b8042OutPort = ChipSet.C8042.OUTPORT.NO_RESET | ChipSet.C8042.OUTPORT.A20_ON;

            this.abDMAPageSpare = new Array(8);

            this.bCMOSAddr = 0;         // NMI is enabled, since the ChipSet.CMOS.ADDR.NMI_DISABLE bit is not set in bCMOSAddr

            /**
             * Now that we call reset() from the ChipSet constructor, enabling other components to update
             * their own CMOS information as needed, we must distinguish between the initial ("hard") reset
             * and any later ("soft") resets (eg, from powerUp() calls), and make sure the latter preserves
             * existing CMOS information.
             */
            if (fHard) {
                this.abCMOSData = new Array(ChipSet.CMOS.ADDR.TOTAL);
            }

            this.initRTCTime(this.sDateRTC);

            /**
             * initCMOSData() will initialize a variety of "legacy" CMOS bytes, but it will NOT overwrite any memory
             * size or hard drive type information that might have been set, via addCMOSMemory() or setCMOSDriveType().
             */
            this.initCMOSData();
        }

        if (DEBUGGER && MAXDEBUG) {
            /**
             * Arrays for interrupt counts (one count per IRQ) and timer data
             */
            this.acInterrupts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            this.acTimersFired = [0, 0, 0];
            this.acTimer0Counts = [];
        }
    }

    /**
     * initRTCTime(sDate)
     *
     * Initialize the RTC portion of the CMOS registers to match the specified date/time (or if none is specified,
     * the current date/time).  The date/time should be expressed in the ISO 8601 format; eg: "2011-10-10T14:48:00".
     *
     * NOTE: There are two approaches we could take here: always store the RTC bytes in binary, and convert them
     * to/from BCD on-demand (ie, as the simulation reads/writes the CMOS RTC registers); or init/update them in the
     * format specified by CMOS.STATUSB.BINARY (1 for binary, 0 for BCD).  Both approaches require BCD conversion
     * functions, but the former seems more efficient, in part because the periodic calls to updateRTCTime() won't
     * require any conversions.
     *
     * We take the same approach with the CMOS.STATUSB.HOUR24 setting: internally, we always operate in 24-hour mode,
     * but externally, we convert the RTC hour values to the 12-hour format as needed.
     *
     * Thus, all I/O to the RTC bytes must be routed through the getRTCByte() and setRTCByte() functions, to ensure
     * that all the necessary on-demand conversions occur.
     *
     * @this {ChipSet}
     * @param {string} [sDate]
     * @returns {number} (programmed number of seconds since midnight)
     */
    initRTCTime(sDate)
    {
        /**
         * NOTE: I've already been burned once by a JavaScript library function that did NOT treat an undefined
         * parameter (ie, a parameter === undefined) the same as an omitted parameter (eg, the async parameter in
         * xmlHTTP.open() in IE), so I'm taking no chances here: if sDate is undefined, then explicitly call Date()
         * with no parameters.
         */
        let date = sDate? new Date(sDate) : new Date();

        /**
         * Example of a valid Date string:
         *
         *      2014-10-01T08:00:00 (interpreted as GMT, resulting in "Wed Oct 01 2014 01:00:00 GMT-0700 (PDT)")
         *
         * Examples of INVALID Date strings:
         *
         *      2014-10-01T08:00:00PST
         *      2014-10-01T08:00:00-0700 (actually, this DOES work in Chrome, but NOT in Safari)
         *
         * In the case of INVALID Date strings, the Date object is invalid, but there's no obvious test for an "invalid"
         * object, so I've adapted the following test from StackOverflow.
         *
         * See http://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript
         */
        if (Object.prototype.toString.call(date) !== "[object Date]" || isNaN(date.getTime())) {
            date = new Date();
            this.printf(MESSAGE.NONE, "CMOS date invalid (%s), using %T\n", sDate, date);
        } else if (sDate) {
            this.printf(MESSAGE.NONE, "CMOS date: %T\n", date);
        }

        let h, m, s;
        this.abCMOSData[ChipSet.CMOS.ADDR.RTC_SEC] = s = date.getSeconds();
        this.abCMOSData[ChipSet.CMOS.ADDR.RTC_SEC_ALARM] = 0;
        this.abCMOSData[ChipSet.CMOS.ADDR.RTC_MIN] = m = date.getMinutes();
        this.abCMOSData[ChipSet.CMOS.ADDR.RTC_MIN_ALARM] = 0;
        this.abCMOSData[ChipSet.CMOS.ADDR.RTC_HOUR] = h = date.getHours();
        this.abCMOSData[ChipSet.CMOS.ADDR.RTC_HOUR_ALARM] = 0;
        this.abCMOSData[ChipSet.CMOS.ADDR.RTC_WEEK_DAY] = date.getDay() + 1;
        this.abCMOSData[ChipSet.CMOS.ADDR.RTC_MONTH_DAY] = date.getDate();
        this.abCMOSData[ChipSet.CMOS.ADDR.RTC_MONTH] = date.getMonth() + 1;
        let nYear = date.getFullYear();
        this.abCMOSData[ChipSet.CMOS.ADDR.RTC_YEAR] = nYear % 100;
        let nCentury = (nYear / 100);
        this.abCMOSData[ChipSet.CMOS.ADDR.CENTURY_DATE] = (nCentury % 10) | ((nCentury / 10) << 4);

        this.abCMOSData[ChipSet.CMOS.ADDR.STATUSA] = 0x26;                          // hard-coded default; refer to ChipSet.CMOS.STATUSA.DV and ChipSet.CMOS.STATUSA.RS
        this.abCMOSData[ChipSet.CMOS.ADDR.STATUSB] = ChipSet.CMOS.STATUSB.HOUR24;   // default to BCD mode (ChipSet.CMOS.STATUSB.BINARY not set)
        this.abCMOSData[ChipSet.CMOS.ADDR.STATUSC] = 0x00;
        this.abCMOSData[ChipSet.CMOS.ADDR.STATUSD] = ChipSet.CMOS.STATUSD.VRB;

        this.nRTCCyclesLastUpdate = this.nRTCCyclesNextUpdate = 0;
        this.nRTCPeriodsPerSecond = this.nRTCCyclesPerPeriod = null;

        /**
         * Return the number of seconds since midnight that have been programmed into the RTC, so that the
         * caller can easily convert that into TIMER_LOW/TIMER_HIGH values for the ROM BIOS data area, if needed.
         */
        return h * 3600 + m * 60 + s;
    }

    /**
     * getRTCByte(iRTC)
     *
     * @param {number} iRTC
     * @returns {number} b
     */
    getRTCByte(iRTC)
    {
        this.assert(iRTC >= 0 && iRTC <= ChipSet.CMOS.ADDR.STATUSD);

        let b = this.abCMOSData[iRTC];

        if (iRTC < ChipSet.CMOS.ADDR.STATUSA) {
            let f12HourValue = false;
            if (iRTC == ChipSet.CMOS.ADDR.RTC_HOUR || iRTC == ChipSet.CMOS.ADDR.RTC_HOUR_ALARM) {
                if (!(this.abCMOSData[ChipSet.CMOS.ADDR.STATUSB] & ChipSet.CMOS.STATUSB.HOUR24)) {
                    if (b < 12) {
                        b = (!b? 12 : b);
                    } else {
                        b -= 12;
                        b = (!b? 0x8c : b + 0x80);
                    }
                    f12HourValue = true;
                }
            }
            if (!(this.abCMOSData[ChipSet.CMOS.ADDR.STATUSB] & ChipSet.CMOS.STATUSB.BINARY)) {
                /**
                 * We're in BCD mode, so we must convert b from BINARY to BCD.  But first:
                 *
                 *      If b is a 12-hour value (ie, we're in 12-hour mode) AND the hour is a PM value
                 *      (ie, in the range 0x81-0x8C), then it must be adjusted to yield 81-92 in BCD.
                 *
                 *      AM hour values (0x01-0x0C) need no adjustment; they naturally convert to 01-12 in BCD.
                 */
                if (f12HourValue && b > 0x80) {
                    b -= (0x81 - 81);
                }
                b = (b % 10) | ((b / 10) << 4);
            }
        } else {
            if (iRTC == ChipSet.CMOS.ADDR.STATUSA) {
                /**
                 * Make sure that the "Update-In-Progress" bit we set in updateRTCTime() doesn't stay set for
                 * more than one read.
                 */
                this.abCMOSData[iRTC] &= ~ChipSet.CMOS.STATUSA.UIP;
            }
        }
        return b;
    }

    /**
     * setRTCByte(iRTC, b)
     *
     * @param {number} iRTC
     * @param {number} b proposed byte to write
     * @returns {number} actual byte to write
     */
    setRTCByte(iRTC, b)
    {
        this.assert(iRTC >= 0 && iRTC <= ChipSet.CMOS.ADDR.STATUSD);

        if (iRTC < ChipSet.CMOS.ADDR.STATUSA) {
            let fBCD = false;
            if (!(this.abCMOSData[ChipSet.CMOS.ADDR.STATUSB] & ChipSet.CMOS.STATUSB.BINARY)) {
                /**
                 * We're in BCD mode, so we must convert b from BCD to BINARY (we assume it's valid
                 * BCD; ie, that both nibbles contain only 0-9, not A-F).
                 */
                b = (b >> 4) * 10 + (b & 0xf);
                fBCD = true;
            }
            if (iRTC == ChipSet.CMOS.ADDR.RTC_HOUR || iRTC == ChipSet.CMOS.ADDR.RTC_HOUR_ALARM) {
                if (fBCD) {
                    /**
                     * If the original BCD hour was 0x81-0x92, then the previous BINARY-to-BCD conversion
                     * transformed it to 0x51-0x5C, so we must add 0x30.
                     */
                    if (b > 23) {
                        this.assert(b >= 0x51 && b <= 0x5c);
                        b += 0x30;
                    }
                }
                if (!(this.abCMOSData[ChipSet.CMOS.ADDR.STATUSB] & ChipSet.CMOS.STATUSB.HOUR24)) {
                    if (b <= 12) {
                        b = (b == 12? 0 : b);
                    } else {
                        b -= (0x80 - 12);
                        b = (b == 24? 12 : b);
                    }
                }
            }
        }
        return b;
    }

    /**
     * calcRTCCyclePeriod()
     *
     * This should be called whenever the timings in STATUSA may have changed.
     *
     * TODO: 1024 is a hard-coded number of periods per second based on the default interrupt rate of 976.562us
     * (ie, 1000000 / 976.562).  Calculate the actual number based on the values programmed in the STATUSA register.
     *
     * @this {ChipSet}
     */
    calcRTCCyclePeriod()
    {
        this.nRTCCyclesLastUpdate = this.cpu.getCycles(this.fScaleTimers);
        this.nRTCPeriodsPerSecond = 1024;
        this.nRTCCyclesPerPeriod = Math.floor(this.cpu.getBaseCyclesPerSecond() / this.nRTCPeriodsPerSecond);
        this.setRTCCycleLimit();
    }

    /**
     * getRTCCycleLimit(nCycles)
     *
     * This is called by the CPU to determine the maximum number of cycles it can process for the current burst.
     *
     * @this {ChipSet}
     * @param {number} nCycles desired
     * @returns {number} maximum number of cycles (<= nCycles)
     */
    getRTCCycleLimit(nCycles)
    {
        if (this.abCMOSData && this.abCMOSData[ChipSet.CMOS.ADDR.STATUSB] & ChipSet.CMOS.STATUSB.PIE) {
            let nCyclesUpdate = this.nRTCCyclesNextUpdate - this.cpu.getCycles(this.fScaleTimers);
            if (nCyclesUpdate > 0) {
                if (nCycles > nCyclesUpdate) {
                    if (DEBUG) this.printf(MESSAGE.RTC, "getRTCCycleLimit(%d): reduced to %d cycles\n", nCycles, nCyclesUpdate);
                    nCycles = nCyclesUpdate;
                } else {
                    if (DEBUG) this.printf(MESSAGE.RTC, "getRTCCycleLimit(%d): already less than %d cycles\n", nCycles, nCyclesUpdate);
                }
            } else {
                if (DEBUG) this.printf(MESSAGE.RTC, "RTC next update has passed by %d cycles\n", nCyclesUpdate);
            }
        }
        return nCycles;
    }

    /**
     * setRTCCycleLimit()
     *
     * This should be called when PIE becomes set in STATUSB (and whenever PF is cleared in STATUSC while PIE is still set).
     *
     * @this {ChipSet}
     */
    setRTCCycleLimit()
    {
        let nCycles = this.nRTCCyclesPerPeriod;
        this.nRTCCyclesNextUpdate = this.cpu.getCycles(this.fScaleTimers) + nCycles;
        if (this.abCMOSData[ChipSet.CMOS.ADDR.STATUSB] & ChipSet.CMOS.STATUSB.PIE) {
            this.cpu.setBurstCycles(nCycles);
        }
    }

    /**
     * updateRTCTime()
     *
     * @this {ChipSet}
     */
    updateRTCTime()
    {
        let nCyclesPerSecond = this.cpu.getBaseCyclesPerSecond();
        let nCyclesUpdate = this.cpu.getCycles(this.fScaleTimers);

        /**
         * We must arrange for the very first calcRTCCyclePeriod() call to occur here, on the very first
         * updateRTCTime() call, because this is the first point we can be guaranteed that CPU cycle counts
         * are initialized (the CPU is the last component to be powered up/restored).
         *
         * TODO: A side-effect of this is that it undermines the save/restore code's preservation of last
         * and next RTC cycle counts, which may affect when the next RTC event is delivered.
         */
        if (this.nRTCCyclesPerPeriod == null) this.calcRTCCyclePeriod();

        /**
         * Step 1: Deal with Periodic Interrupts
         */
        if (nCyclesUpdate >= this.nRTCCyclesNextUpdate) {
            let bPrev = this.abCMOSData[ChipSet.CMOS.ADDR.STATUSC];
            this.abCMOSData[ChipSet.CMOS.ADDR.STATUSC] |= ChipSet.CMOS.STATUSC.PF;
            if (this.abCMOSData[ChipSet.CMOS.ADDR.STATUSB] & ChipSet.CMOS.STATUSB.PIE) {
                /**
                 * When PIE is set, setBurstCycles() should be getting called as needed to ensure
                 * that updateRTCTime() is called more frequently, so let's assert that we don't have
                 * an excess of cycles and thus possibly some missed Periodic Interrupts.
                 */
                if (DEBUG) {
                    if (nCyclesUpdate - this.nRTCCyclesNextUpdate > this.nRTCCyclesPerPeriod) {
                        if (bPrev & ChipSet.CMOS.STATUSC.PF) {
                            this.printf(MESSAGE.RTC, "RTC interrupt handler failed to clear STATUSC\n");
                        } else {
                            this.printf(MESSAGE.RTC, "CPU took too long trigger new RTC periodic interrupt\n");
                        }
                    }
                }
                this.abCMOSData[ChipSet.CMOS.ADDR.STATUSC] |= ChipSet.CMOS.STATUSC.IRQF;
                this.setIRR(ChipSet.IRQ.RTC);
                /**
                 * We could also call setRTCCycleLimit() at this point, but I don't think there's any
                 * benefit until the interrupt had been acknowledged and STATUSC has been read, thereby
                 * clearing the way for another Periodic Interrupt; it seems to me that when STATUSC
                 * is read, that's the more appropriate time to call setRTCCycleLimit().
                 */
            }
            this.nRTCCyclesNextUpdate = nCyclesUpdate + this.nRTCCyclesPerPeriod;
        }

        /**
         * Step 2: Deal with Alarm Interrupts
         */
        if (this.abCMOSData[ChipSet.CMOS.ADDR.RTC_SEC] == this.abCMOSData[ChipSet.CMOS.ADDR.RTC_SEC_ALARM]) {
            if (this.abCMOSData[ChipSet.CMOS.ADDR.RTC_MIN] == this.abCMOSData[ChipSet.CMOS.ADDR.RTC_MIN_ALARM]) {
                if (this.abCMOSData[ChipSet.CMOS.ADDR.RTC_HOUR] == this.abCMOSData[ChipSet.CMOS.ADDR.RTC_HOUR_ALARM]) {
                    this.abCMOSData[ChipSet.CMOS.ADDR.STATUSC] |= ChipSet.CMOS.STATUSC.AF;
                    if (this.abCMOSData[ChipSet.CMOS.ADDR.STATUSB] & ChipSet.CMOS.STATUSB.AIE) {
                        this.abCMOSData[ChipSet.CMOS.ADDR.STATUSC] |= ChipSet.CMOS.STATUSC.IRQF;
                        this.setIRR(ChipSet.IRQ.RTC);
                    }
                }
            }
        }

        /**
         * Step 3: Update the RTC date/time and deal with Update Interrupts
         */
        let nCyclesDelta = nCyclesUpdate - this.nRTCCyclesLastUpdate;
        // DEBUG: this.assert(nCyclesDelta >= 0);
        let nSecondsDelta = Math.floor(nCyclesDelta / nCyclesPerSecond);

        /**
         * We trust that updateRTCTime() is being called as part of updateAllTimers(), and is therefore
         * being called often enough to ensure that nSecondsDelta will never be greater than one.  In fact,
         * it would always be LESS than one if it weren't also for the fact that we plow any "unused" cycles
         * (nCyclesDelta % nCyclesPerSecond) back into nRTCCyclesLastUpdate, so that we will eventually
         * see a one-second delta.
         */
        // DEBUG: this.assert(nSecondsDelta <= 1);

        /**
         * Make sure that CMOS.STATUSB.SET isn't set; if it is, then the once-per-second RTC updates must be
         * disabled so that software can write new RTC date/time values without interference.
         */
        if (nSecondsDelta && !(this.abCMOSData[ChipSet.CMOS.ADDR.STATUSB] & ChipSet.CMOS.STATUSB.SET)) {
            while (nSecondsDelta--) {
                if (++this.abCMOSData[ChipSet.CMOS.ADDR.RTC_SEC] >= 60) {
                    this.abCMOSData[ChipSet.CMOS.ADDR.RTC_SEC] = 0;
                    if (++this.abCMOSData[ChipSet.CMOS.ADDR.RTC_MIN] >= 60) {
                        this.abCMOSData[ChipSet.CMOS.ADDR.RTC_MIN] = 0;
                        if (++this.abCMOSData[ChipSet.CMOS.ADDR.RTC_HOUR] >= 24) {
                            this.abCMOSData[ChipSet.CMOS.ADDR.RTC_HOUR] = 0;
                            this.abCMOSData[ChipSet.CMOS.ADDR.RTC_WEEK_DAY] = (this.abCMOSData[ChipSet.CMOS.ADDR.RTC_WEEK_DAY] % 7) + 1;
                            let nDayMax = UsrLib.getMonthDays(this.abCMOSData[ChipSet.CMOS.ADDR.RTC_MONTH], this.abCMOSData[ChipSet.CMOS.ADDR.RTC_YEAR]);
                            if (++this.abCMOSData[ChipSet.CMOS.ADDR.RTC_MONTH_DAY] > nDayMax) {
                                this.abCMOSData[ChipSet.CMOS.ADDR.RTC_MONTH_DAY] = 1;
                                if (++this.abCMOSData[ChipSet.CMOS.ADDR.RTC_MONTH] > 12) {
                                    this.abCMOSData[ChipSet.CMOS.ADDR.RTC_MONTH] = 1;
                                    this.abCMOSData[ChipSet.CMOS.ADDR.RTC_YEAR] = (this.abCMOSData[ChipSet.CMOS.ADDR.RTC_YEAR] + 1) % 100;
                                }
                            }
                        }
                    }
                }
            }

            /**
             * Obviously, setting the "Update-In-Progress" bit now might seem rather pointless, since we just
             * updated the RTC "atomically" as far as the machine is concerned; however, the bit must be set at
             * at some point, in order to make the MODEL_5170 BIOS ("POST2_RTCUP") happy.
             */
            this.abCMOSData[ChipSet.CMOS.ADDR.STATUSA] |= ChipSet.CMOS.STATUSA.UIP;

            this.abCMOSData[ChipSet.CMOS.ADDR.STATUSC] |= ChipSet.CMOS.STATUSC.UF;
            if (this.abCMOSData[ChipSet.CMOS.ADDR.STATUSB] & ChipSet.CMOS.STATUSB.UIE) {
                this.abCMOSData[ChipSet.CMOS.ADDR.STATUSC] |= ChipSet.CMOS.STATUSC.IRQF;
                this.setIRR(ChipSet.IRQ.RTC);
            }
        }

        this.nRTCCyclesLastUpdate = nCyclesUpdate - (nCyclesDelta % nCyclesPerSecond);
    }

    /**
     * initCMOSData()
     *
     * Initialize all the CMOS configuration bytes in the range 0x0E-0x2F (TODO: Decide what to do about 0x30-0x3F)
     *
     * Note that the MODEL_5170 "SETUP" utility is normally what sets all these bytes, including the checksum, and then
     * the BIOS verifies it, but since we want our machines to pass BIOS verification "out of the box", we go the extra
     * mile here, even though it's not really our responsibility.
     *
     * @this {ChipSet}
     */
    initCMOSData()
    {
        /**
         * On all reset() calls, the RAM component(s) will (re)add their totals, so we have to make sure that
         * the addition always starts with 0.  That also means that ChipSet must always be initialized before RAM.
         */
        let iCMOS;
        for (iCMOS = ChipSet.CMOS.ADDR.BASEMEM_LO; iCMOS <= ChipSet.CMOS.ADDR.EXTMEM_HI; iCMOS++) {
            this.abCMOSData[iCMOS] = 0;
        }

        /**
         * Make sure all the "checksummed" CMOS bytes are initialized (not just the handful we set below) to ensure
         * that the checksum will be valid.
         */
        for (iCMOS = ChipSet.CMOS.ADDR.DIAG; iCMOS < ChipSet.CMOS.ADDR.CHKSUM_HI; iCMOS++) {
            if (this.abCMOSData[iCMOS] === undefined) this.abCMOSData[iCMOS] = 0;
        }

        /**
         * We propagate all compatible "legacy" SW1 bits to the CMOS.EQUIP byte using the old SW masks, but any further
         * access to CMOS.ADDR.EQUIP should use the new CMOS_EQUIP flags (eg, CMOS.EQUIP.FPU, CMOS.EQUIP.MONITOR.CGA80, etc).
         */
        this.abCMOSData[ChipSet.CMOS.ADDR.EQUIP] = this.getDIPLegacyBits(0);
        this.abCMOSData[ChipSet.CMOS.ADDR.FDRIVE] = (this.getDIPFloppyDriveType(0) << 4) | this.getDIPFloppyDriveType(1);

        /**
         * The final step is calculating the CMOS checksum, which we then store into the CMOS as a courtesy, so that the
         * user doesn't get unnecessary CMOS errors.
         */
        this.updateCMOSChecksum();
    }

    /**
     * setCMOSByte(iCMOS, b)
     *
     * This is ONLY for use by components that need to update CMOS configuration bytes to match their internal configuration.
     *
     * @this {ChipSet}
     * @param {number} iCMOS
     * @param {number} b
     * @returns {boolean} true if successful, false if not (eg, CMOS not initialized yet, or no CMOS on this machine)
     */
    setCMOSByte(iCMOS, b)
    {
        if (this.abCMOSData) {
            this.assert(iCMOS >= ChipSet.CMOS.ADDR.FDRIVE && iCMOS < ChipSet.CMOS.ADDR.CHKSUM_HI);
            this.abCMOSData[iCMOS] = b;
            this.updateCMOSChecksum();
            return true;
        }
        return false;
    }

    /**
     * addCMOSMemory(addr, size)
     *
     * For use by the RAM component, to dynamically update the CMOS memory configuration.
     *
     * @this {ChipSet}
     * @param {number} addr (if 0, BASEMEM_LO/BASEMEM_HI is updated; if >= 0x100000, then EXTMEM_LO/EXTMEM_HI is updated)
     * @param {number} size (in bytes; we convert to Kb)
     * @returns {boolean} true if successful, false if not (eg, CMOS not initialized yet, or no CMOS on this machine)
     */
    addCMOSMemory(addr, size)
    {
        if (this.abCMOSData) {
            let iCMOS = (addr < 0x100000? ChipSet.CMOS.ADDR.BASEMEM_LO : ChipSet.CMOS.ADDR.EXTMEM_LO);
            let wKb = this.abCMOSData[iCMOS] | (this.abCMOSData[iCMOS+1] << 8);
            wKb += (size >> 10);
            this.abCMOSData[iCMOS] = wKb & 0xff;
            this.abCMOSData[iCMOS+1] = wKb >> 8;
            this.updateCMOSChecksum();
            return true;
        }
        return false;
    }

    /**
     * setCMOSDriveType(iDrive, bType)
     *
     * For use by the HDC component, to update the CMOS drive configuration to match HDC's internal configuration.
     *
     * TODO: Consider extending this to support FDC drive updates, so that the FDC can specify diskette drive types
     * (ie, FD360 or FD1200) in the same way that HDC does.  However, historically, the ChipSet has been responsible for
     * floppy drive configuration, at least in terms of *number* of drives, through the use of SW1 settings, and we've
     * continued that tradition with the addition of the ChipSet 'floppies' parameter, which allows both the number *and*
     * capacity of drives to be specified with a simple array (eg, [360, 360] for two 360Kb drives).
     *
     * @this {ChipSet}
     * @param {number} iDrive (0 or 1)
     * @param {number} bType (0 for none, 1-14 for original drive type, 16-255 for extended drive type; 15 reserved)
     * @returns {boolean} true if successful, false if not (eg, CMOS not initialized yet, or no CMOS on this machine)
     */
    setCMOSDriveType(iDrive, bType)
    {
        if (this.abCMOSData) {
            let bExt = null, iExt;
            let bOrig = this.abCMOSData[ChipSet.CMOS.ADDR.HDRIVE];
            if (bType > 15) {
                bExt = bType;  bType = 15;
            }
            if (iDrive) {
                bOrig = (bOrig & ChipSet.CMOS.HDRIVE.D0_MASK) | bType;
                iExt = ChipSet.CMOS.ADDR.EXTHDRIVE1;
            } else {
                bOrig = (bOrig & ChipSet.CMOS.HDRIVE.D1_MASK) | (bType << 4);
                iExt = ChipSet.CMOS.ADDR.EXTHDRIVE0;
            }
            this.setCMOSByte(ChipSet.CMOS.ADDR.HDRIVE, bOrig);
            if (bExt != null) this.setCMOSByte(iExt, bExt);
            return true;
        }
        return false;
    }

    /**
     * syncRTCTime()
     *
     * On a normal startup, obviously the ROM will take care of initializing BIOS data area TIMER_LOW/TIMER_HIGH
     * values to match the RTC values.  If we're restoring a machine state, that initialization will be bypassed,
     * but if it was a *full* restore, all values would still be synced.  However, if we've decided to override the
     * machine's date/time with the current date/time, they will be out of sync.
     *
     * In that case, nRTCSeconds will be set, and we must sync the BIOS data area with that value.
     *
     * Moreover, that sync must occur not only after the RAM component has been initialized but also after RAM contents
     * have been restored; otherwise, the sync'ed value will be overwritten.  Since the CPU's restore() function is
     * when RAM finally gets restored, that's where you'll find the call to syncRTCTime().
     *
     * @this {ChipSet}
     */
    syncRTCTime()
    {
        if (this.nRTCSeconds != undefined) {
            /**
             * The 8254 ("PIT") is wired to a clock with a frequency of 1.193182MHz, and the PIT is configured
             * to divide that by 65536, which gives us 18.2065 interrupts ("ticks") per second.
             */
            let ticks = this.nRTCSeconds * 18.2065;
            this.bus.setShort(ROMx86.BIOS.TIMER_LOW, ticks & 0xffff);
            this.bus.setShort(ROMx86.BIOS.TIMER_HIGH, ticks >>> 16);
            this.bus.setByte(ROMx86.BIOS.TIMER_OFL, 0);
            this.nRTCSeconds = undefined;
        }
    }

    /**
     * updateCMOSChecksum()
     *
     * This sums all the CMOS bytes from 0x10-0x2D, creating a 16-bit checksum.  That's a total of 30 (unsigned) 8-bit
     * values which could sum to at most 30*255 or 7650 (0x1DE2).  Since there's no way that can overflow 16 bits, we don't
     * worry about masking it with 0xffff.
     *
     * WARNING: The IBM PC AT TechRef, p.1-53 (p.75) claims that the checksum is on bytes 0x10-0x20, but that's simply wrong.
     *
     * @this {ChipSet}
     */
    updateCMOSChecksum()
    {
        let wChecksum = 0;
        for (let iCMOS = ChipSet.CMOS.ADDR.FDRIVE; iCMOS < ChipSet.CMOS.ADDR.CHKSUM_HI; iCMOS++) {
            wChecksum += this.abCMOSData[iCMOS];
        }
        this.abCMOSData[ChipSet.CMOS.ADDR.CHKSUM_LO] = wChecksum & 0xff;
        this.abCMOSData[ChipSet.CMOS.ADDR.CHKSUM_HI] = wChecksum >> 8;
    }

    /**
     * save()
     *
     * This implements save support for the ChipSet component.
     *
     * @this {ChipSet}
     * @returns {Object}
     */
    save()
    {
        let state = new State(this);
        state.set(0, [this.aDIPSwitches]);
        state.set(1, [this.saveDMAControllers()]);
        state.set(2, [this.savePICs()]);
        state.set(3, [this.bPIT0Ctrl, this.saveTimers(), this.bPIT1Ctrl]);
        state.set(4, [this.bPPIA, this.bPPIB, this.bPPIC, this.bPPICtrl, this.bNMI]);
        if (this.model >= ChipSet.MODEL_5170) {
            state.set(5, [this.b8042Status, this.b8042InBuff, this.b8042CmdData,
                          this.b8042OutBuff, this.b8042InPort, this.b8042OutPort]);
            state.set(6, [this.abDMAPageSpare[7], this.abDMAPageSpare, this.bCMOSAddr, this.abCMOSData, this.nRTCCyclesLastUpdate, this.nRTCCyclesNextUpdate]);
        }
        return state.data();
    }

    /**
     * restore(data)
     *
     * This implements restore support for the ChipSet component.
     *
     * @this {ChipSet}
     * @param {Object} data
     * @returns {boolean} true if successful, false if failure
     */
    restore(data)
    {
        let a, i;
        a = data[0];

        if (Array.isArray(a[0])) {
            this.aDIPSwitches = a[0];
        } else {
            this.aDIPSwitches[0][0] = a[0];
            this.aDIPSwitches[1][0] = a[1] & 0x0F;  // we do honor SW2[5] now, but it was erroneously set on some machines
            this.aDIPSwitches[0][1] = a[2];
            this.aDIPSwitches[1][1] = a[3] & 0x0F;  // we do honor SW2[5] now, but it was erroneously set on some machines
        }
        this.updateDIPSwitches();

        a = data[1];
        for (i = 0; i < this.cDMACs; i++) {
            this.initDMAController(i, a.length == 1? a[0][i] : a);
        }

        a = data[2];
        for (i = 0; i < this.cPICs; i++) {
            this.initPIC(i, i === 0? this.portPIC0 : this.portPIC1, a[0][i]);
        }

        a = data[3];
        this.bPIT0Ctrl = a[0];
        this.bPIT1Ctrl = a[2];
        for (i = 0; i < this.aTimers.length; i++) {
            this.initTimer(i, a[1][i]);
        }

        a = data[4];
        this.bPPIA = a[0];
        this.bPPIB = a[1];
        this.bPPIC = a[2];
        this.bPPICtrl = a[3];
        this.bNMI  = a[4];

        a = data[5];
        if (a) {
            this.assert(this.model >= ChipSet.MODEL_5170);
            this.b8042Status = a[0];
            this.b8042InBuff = a[1];
            this.b8042CmdData = a[2];
            this.b8042OutBuff = a[3];
            this.b8042InPort = a[4];
            this.b8042OutPort = a[5];
        }

        a = data[6];
        if (a) {
            this.assert(this.model >= ChipSet.MODEL_5170);
            this.abDMAPageSpare = a[1];
            this.abDMAPageSpare[7] = a[0];  // formerly bMFGData
            this.bCMOSAddr = a[2];
            this.abCMOSData = a[3];
            this.nRTCCyclesLastUpdate = a[4];
            this.nRTCCyclesNextUpdate = a[5];
            /**
             * TODO: Decide whether restore() should faithfully preserve the RTC date/time that save() saved,
             * or always reinitialize the date/time, or give the user (or the machine configuration) the option.
             *
             * For now, we're always reinitializing the RTC date.  Alternatively, we could selectively update
             * the CMOS bytes above, instead of overwriting them all, in which case this extra call to initRTCTime()
             * could be avoided.
             */
            this.nRTCSeconds = this.initRTCTime();
        }
        return true;
    }

    /**
     * start()
     *
     * Notification from the Computer that it's starting.
     *
     * @this {ChipSet}
     */
    start()
    {
        /**
         * Currently, all we do with this notification is allow the speaker to make noise.
         */
        this.setSpeaker();
    }

    /**
     * stop()
     *
     * Notification from the Computer that it's stopping.
     *
     * @this {ChipSet}
     */
    stop()
    {
        /**
         * Currently, all we do with this notification is prevent the speaker from making noise.
         */
        this.setSpeaker();
    }

    /**
     * initDMAController(iDMAC, aState)
     *
     * @this {ChipSet}
     * @param {number} iDMAC
     * @param {Array} [aState]
     */
    initDMAController(iDMAC, aState)
    {
        let controller = this.aDMACs[iDMAC];
        if (!controller) {
            this.assert(!aState);
            controller = {
                aChannels: new Array(4)
            };
        }
        let a = aState && aState.length >= 5? aState : this.aDMAControllerInit;
        controller.bStatus = a[0];
        controller.bCmd = a[1];
        controller.bReq = a[2];
        controller.bIndex = a[3];
        controller.nChannelBase = iDMAC << 2;
        for (let iChannel = 0; iChannel < controller.aChannels.length; iChannel++) {
            this.initDMAChannel(controller, iChannel, a[4][iChannel]);
        }
        controller.bTemp = a[5] || 0;       // not present in older states
        this.aDMACs[iDMAC] = controller;
    }

    /**
     * initDMAChannel(controller, iChannel, aState)
     *
     * @this {ChipSet}
     * @param {Object} controller
     * @param {number} iChannel
     * @param {Array} [aState]
     */
    initDMAChannel(controller, iChannel, aState)
    {
        let channel = controller.aChannels[iChannel];
        if (!channel) {
            this.assert(!aState);
            channel = {
                addrInit: [0,0],
                countInit: [0,0],
                addrCurrent: [0,0],
                countCurrent: [0,0]
            };
        }
        let a = aState && aState.length == 8? aState : this.aDMAChannelInit;
        channel.masked = a[0];
        channel.addrInit[0] = a[1][0]; channel.addrInit[1] = a[1][1];
        channel.countInit[0] = a[2][0];  channel.countInit[1] = a[2][1];
        channel.addrCurrent[0] = a[3][0]; channel.addrCurrent[1] = a[3][1];
        channel.countCurrent[0] = a[4][0]; channel.countCurrent[1] = a[4][1];
        channel.mode = a[5];
        channel.bPage = a[6];
        // a[7] is deprecated
        channel.controller = controller;
        channel.iChannel = iChannel;
        this.initDMAFunction(channel, a[8], a[9]);
        controller.aChannels[iChannel] = channel;
    }

    /**
     * initDMAFunction(channel)
     *
     * @param {Object} channel
     * @param {Component|string} [component]
     * @param {string} [sFunction]
     * @param {Object} [obj]
     * @returns {*}
     */
    initDMAFunction(channel, component, sFunction, obj)
    {
        if (typeof component == "string") {
            component = Component.getComponentByID(component);
        }
        if (component) {
            channel.done = null;
            channel.sDevice = component.id;
            channel.sFunction = sFunction;
            channel.component = component;
            channel.fnTransfer = component[sFunction];
            channel.obj = obj;
        }
        return channel.fnTransfer;
    }

    /**
     * saveDMAControllers()
     *
     * @this {ChipSet}
     * @returns {Array}
     */
    saveDMAControllers()
    {
        let data = [];
        for (let iDMAC = 0; iDMAC < this.aDMACs; iDMAC++) {
            let controller = this.aDMACs[iDMAC];
            data[iDMAC] = [
                controller.bStatus,
                controller.bCmd,
                controller.bReq,
                controller.bIndex,
                this.saveDMAChannels(controller),
                controller.bTemp
            ];
        }
        return data;
    }

    /**
     * saveDMAChannels(controller)
     *
     * @this {ChipSet}
     * @param {Object} controller
     * @returns {Array}
     */
    saveDMAChannels(controller)
    {
        let data = [];
        for (let iChannel = 0; iChannel < controller.aChannels.length; iChannel++) {
            let channel = controller.aChannels[iChannel];
            data[iChannel] = [
                channel.masked,
                channel.addrInit,
                channel.countInit,
                channel.addrCurrent,
                channel.countCurrent,
                channel.mode,
                channel.bPage,
                channel.sDevice,
                channel.sFunction
            ];
        }
        return data;
    }

    /**
     * initPIC(iPIC, port, aState)
     *
     * @this {ChipSet}
     * @param {number} iPIC
     * @param {number} port
     * @param {Array} [aState]
     */
    initPIC(iPIC, port, aState)
    {
        let pic = this.aPICs[iPIC];
        if (!pic) {
            pic = {
                aICW: [null,null,null,null]
            };
        }
        let a = aState && aState.length == 8? aState : this.aPICInit;
        pic.port = port;
        pic.nIRQBase = iPIC << 3;
        pic.nDelay = a[0];
        pic.aICW[0] = a[1][0]; pic.aICW[1] = a[1][1]; pic.aICW[2] = a[1][2]; pic.aICW[3] = a[1][3];
        pic.nICW = a[2];
        pic.bIMR = a[3];
        pic.bIRR = a[4];
        pic.bISR = a[5];
        pic.bIRLow = a[6];
        pic.bOCW3 = a[7];
        this.aPICs[iPIC] = pic;
    }

    /**
     * savePICs()
     *
     * @this {ChipSet}
     * @returns {Array}
     */
    savePICs()
    {
        let data = [];
        for (let iPIC = 0; iPIC < this.aPICs.length; iPIC++) {
            let pic = this.aPICs[iPIC];
            data[iPIC] = [
                pic.nDelay,
                pic.aICW,
                pic.nICW,
                pic.bIMR,
                pic.bIRR,
                pic.bISR,
                pic.bIRLow,
                pic.bOCW3
            ];
        }
        return data;
    }

    /**
     * initTimer(iTimer, aState)
     *
     * @this {ChipSet}
     * @param {number} iTimer
     * @param {Array} [aState]
     */
    initTimer(iTimer, aState)
    {
        let timer = this.aTimers[iTimer];
        if (!timer) {
            timer = {
                countInit: [0,0],
                countStart: [0,0],
                countCurrent: [0,0],
                countLatched: [0,0]
            };
        }
        let a = aState && aState.length >= 13? aState : this.aTimerInit;
        timer.countInit[0] = a[0][0]; timer.countInit[1] = a[0][1];
        timer.countStart[0] = a[1][0]; timer.countStart[1] = a[1][1];
        timer.countCurrent[0] = a[2][0]; timer.countCurrent[1] = a[2][1];
        timer.countLatched[0] = a[3][0]; timer.countLatched[1] = a[3][1];
        timer.bcd = a[4];
        timer.mode = a[5];
        timer.rw = a[6];
        timer.countIndex = a[7];
        timer.countBytes = a[8];
        timer.fOUT = a[9];
        timer.fCountLatched = a[10];
        timer.fCounting = a[11];
        timer.nCyclesStart = a[12];
        timer.bStatus = a[13] || 0;
        timer.fStatusLatched = a[14] || false;
        this.aTimers[iTimer] = timer;
    }

    /**
     * saveTimers()
     *
     * @this {ChipSet}
     * @returns {Array}
     */
    saveTimers()
    {
        let data = [];
        for (let iTimer = 0; iTimer < this.aTimers.length; iTimer++) {
            let timer = this.aTimers[iTimer];
            data[iTimer] = [
                timer.countInit,
                timer.countStart,
                timer.countCurrent,
                timer.countLatched,
                timer.bcd,
                timer.mode,
                timer.rw,
                timer.countIndex,
                timer.countBytes,
                timer.fOUT,
                timer.fCountLatched,
                timer.fCounting,
                timer.nCyclesStart,
                timer.bStatus,
                timer.fStatusLatched
            ];
        }
        return data;
    }

    /**
     * addDIPSwitches(iDIP, sBinding)
     *
     * @this {ChipSet}
     * @param {number} iDIP (0 or 1)
     * @param {string} sBinding is the name of the control
     */
    addDIPSwitches(iDIP, sBinding)
    {
        let sHTML = "";
        let control = this.bindings[sBinding];
        for (let i = 1; i <= 8; i++) {
            let sCellClasses = this.sCellClass;
            if (!i) sCellClasses += " " + this.sCellClass + "Left";
            let sCellID = sBinding + "-" + i;
            sHTML += "<div id=\"" + sCellID + "\" class=\"" + sCellClasses + "\" data-value=\"0\">" + i + "</div>\n";
        }
        control.innerHTML = sHTML;
        this.updateDIPSwitchControls(iDIP, sBinding, true);
    }

    /**
     * findDIPSwitch(iDIP, iSwitch)
     *
     * @this {ChipSet}
     * @param {number} iDIP
     * @param {number} iSwitch
     * @returns {Object|null} DIPSW switchGroup containing the DIP switch's MASK, VALUES, and LABEL, or null if none
     */
    findDIPSwitch(iDIP, iSwitch)
    {
        let switchDIPs = ChipSet.DIPSW[this.model|0];
        let switchTypes = switchDIPs && switchDIPs[iDIP];
        if (switchTypes) {
            for (let iType in switchTypes) {
                let switchGroup = switchTypes[iType];
                if (switchGroup.MASK & (1 << iSwitch)) {
                    return switchGroup;
                }
            }
        }
        return null;
    }

    /**
     * getDIPLegacyBits(iDIP)
     *
     * @this {ChipSet}
     * @param {number} iDIP
     * @returns {number|undefined}
     */
    getDIPLegacyBits(iDIP)
    {
        let b;
        if (!iDIP) {
            b = 0;
            b |= (this.getDIPVideoMonitor() << ChipSet.PPI_SW.MONITOR.SHIFT) & ChipSet.PPI_SW.MONITOR.MASK;
            b |= (this.getDIPCoprocessor()? ChipSet.PPI_SW.FPU : 0);
            let nDrives = this.getDIPFloppyDrives();
            b |= (nDrives? ((((nDrives - 1) << ChipSet.PPI_SW.FDRIVE.SHIFT) & ChipSet.PPI_SW.FDRIVE.MASK) | ChipSet.PPI_SW.FDRIVE.IPL) : 0);
        }
        return b;
    }

    /**
     * getDIPSwitches(iType, fInit)
     *
     * @this {ChipSet}
     * @param {number} iType
     * @param {boolean} [fInit] is true for initial switch value, current value otherwise
     * @returns {string|null}
     */
    getDIPSwitches(iType, fInit)
    {
        let value = null;
        let switchDIPs = ChipSet.DIPSW[this.model] || ChipSet.DIPSW[this.model|0] || ChipSet.DIPSW[ChipSet.MODEL_5150];
        for (let iDIP = 0; iDIP < switchDIPs.length; iDIP++) {
            let switchTypes = switchDIPs[iDIP];
            if (switchTypes) {
                let switchGroup = switchTypes[iType];
                if (switchGroup) {
                    let bits = this.aDIPSwitches[iDIP][fInit?0:1] & switchGroup.MASK;
                    for (let v in switchGroup.VALUES) {
                        if (switchGroup.VALUES[v] == bits) {
                            value = v;
                            /**
                             * We prefer numeric properties, and all switch definitions must provide them
                             * if their helper functions (eg, getDIPVideoMonitor()) expect numeric properties.
                             */
                            if (typeof +value == 'number') break;
                        }
                    }
                    break;
                }
            }
        }
        return value;
    }

    /**
     * getDIPSwitchRange(iType)
     *
     * @this {ChipSet}
     * @param {number} iType
     * @returns {Array.<number>} [minimum value, maximum value]
     */
    getDIPSwitchRange(iType)
    {
        let values = [-1, -1];          // none of our switches should have negative values
        let switchDIPs = ChipSet.DIPSW[this.model] || ChipSet.DIPSW[this.model|0] || ChipSet.DIPSW[ChipSet.MODEL_5150];
        for (let iDIP = 0; iDIP < switchDIPs.length; iDIP++) {
            let switchTypes = switchDIPs[iDIP];
            if (switchTypes) {
                let switchGroup = switchTypes[iType];
                if (switchGroup) {
                    for (let v in switchGroup.VALUES) {
                        if (values[0] < 0 || values[0] > +v) values[0] = +v;
                        if (values[1] < 0 || values[1] < +v) values[1] = +v;
                    }
                }
            }
        }
        return values;
    }

    /**
     * getDIPCoprocessor(fInit)
     *
     * @this {ChipSet}
     * @param {boolean} [fInit] is true for init switch value(s) only, current value(s) otherwise
     * @returns {number} 1 if installed, 0 if not
     */
    getDIPCoprocessor(fInit)
    {
        return +this.getDIPSwitches(ChipSet.SW_TYPE.FPU, fInit);
    }

    /**
     * getDIPFloppyDrives(fInit)
     *
     * @this {ChipSet}
     * @param {boolean} [fInit] is true for init switch value(s) only, current value(s) otherwise
     * @returns {number} number of floppy drives specified by SW1 (range is 0 to 4)
     */
    getDIPFloppyDrives(fInit)
    {
        return +this.getDIPSwitches(ChipSet.SW_TYPE.FLOPNUM, fInit);
    }

    /**
     * getDIPFloppyDriveType(iDrive)
     *
     * @this {ChipSet}
     * @param {number} iDrive (0-based)
     * @returns {number} one of the ChipSet.CMOS.FDRIVE.FD* values (FD360, FD1200, etc)
     */
    getDIPFloppyDriveType(iDrive)
    {
        if (iDrive < this.getDIPFloppyDrives()) {
            if (!this.aFloppyDrives) {
                return ChipSet.CMOS.FDRIVE.FD360;
            }
            if (iDrive < this.aFloppyDrives.length) {
                switch(this.aFloppyDrives[iDrive]) {
                case 160:
                case 180:
                case 320:
                case 360:
                    return ChipSet.CMOS.FDRIVE.FD360;
                case 720:
                    return ChipSet.CMOS.FDRIVE.FD720;
                case 1200:
                    return ChipSet.CMOS.FDRIVE.FD1200;
                case 1440:
                    return ChipSet.CMOS.FDRIVE.FD1440;
                }
            }
            this.assert(false);  // we should never get here (else something is out of sync)
        }
        return ChipSet.CMOS.FDRIVE.NONE;
    }

    /**
     * getDIPFloppyDriveSize(iDrive)
     *
     * @this {ChipSet}
     * @param {number} iDrive (0-based)
     * @returns {number} capacity of drive in Kb (eg, 360, 1200, 1440, etc), or 0 if none
     */
    getDIPFloppyDriveSize(iDrive)
    {
        if (iDrive < this.getDIPFloppyDrives()) {
            if (!this.aFloppyDrives) {
                return 360;
            }
            if (iDrive < this.aFloppyDrives.length) {
                return this.aFloppyDrives[iDrive];
            }
            this.assert(false);  // we should never get here (else something is out of sync)
        }
        return 0;
    }

    /**
     * getDIPMemorySize(fInit)
     *
     * @this {ChipSet}
     * @param {boolean} [fInit] is true for init switch value(s) only, current value(s) otherwise
     * @returns {number} number of Kb of specified memory (NOT necessarily the same as installed memory; see RAM component)
     */
    getDIPMemorySize(fInit)
    {
        let nKBLow = this.getDIPSwitches(ChipSet.SW_TYPE.LOWMEM, fInit);
        let nKBExp = this.getDIPSwitches(ChipSet.SW_TYPE.EXPMEM, fInit);
        return +nKBLow + +nKBExp;
    }

    /**
     * setDIPMemorySize(nKB)
     *
     * @this {ChipSet}
     * @param {number} nKB
     * @returns {boolean} true if successful, false if out of range
     */
    setDIPMemorySize(nKB)
    {
        let rangeKBLow = this.getDIPSwitchRange(ChipSet.SW_TYPE.LOWMEM);
        if (nKB <= rangeKBLow[1]) {
            if (this.setDIPSwitches(ChipSet.SW_TYPE.LOWMEM, nKB) && this.setDIPSwitches(ChipSet.SW_TYPE.EXPMEM, 0)) {
                return true;
            }
        }
        let rangeKBExp = this.getDIPSwitchRange(ChipSet.SW_TYPE.EXPMEM);
        if (nKB <= rangeKBLow[1] + rangeKBExp[1]) {
            nKB -= rangeKBLow[1];
            if (this.setDIPSwitches(ChipSet.SW_TYPE.LOWMEM, rangeKBLow[1]) && this.setDIPSwitches(ChipSet.SW_TYPE.EXPMEM, nKB)) {
                return true;
            }
        }
        return false;
    }

    /**
     * getDIPVideoMonitor(fInit)
     *
     * @this {ChipSet}
     * @param {boolean} [fInit] is true for init switch value(s) only, current value(s) otherwise
     * @returns {number} one of ChipSet.MONITOR.*
     */
    getDIPVideoMonitor(fInit)
    {
        return +this.getDIPSwitches(ChipSet.SW_TYPE.MONITOR, fInit);
    }

    /**
     * parseDIPSwitches(sBits, bDefault)
     *
     * @this {ChipSet}
     * @param {string} sBits describing switch settings
     * @param {number} [bDefault]
     * @returns {number|undefined}
     */
    parseDIPSwitches(sBits, bDefault)
    {
        let b = bDefault;
        if (sBits) {
            /**
             * NOTE: We can't use parseInt() with a base of 2, because both bit order and bit sense are reversed.
             */
            b = 0;
            let bit = 0x1;
            for (let i = 0; i < sBits.length; i++) {
                if (sBits.charAt(i) == "0") b |= bit;
                bit <<= 1;
            }
        }
        return b;
    }

    /**
     * setDIPSwitches(iType, value, fInit)
     *
     * @this {ChipSet}
     * @param {number} iType
     * @param {*} value
     * @param {boolean} [fInit]
     * @returns {boolean} true if successful, false if unrecognized type and/or value
     */
    setDIPSwitches(iType, value, fInit)
    {
        let switchDIPs = ChipSet.DIPSW[this.model] || ChipSet.DIPSW[this.model|0] || ChipSet.DIPSW[ChipSet.MODEL_5150];
        for (let iDIP = 0; iDIP < switchDIPs.length; iDIP++) {
            let switchTypes = switchDIPs[iDIP];
            if (switchTypes) {
                let switchGroup = switchTypes[iType];
                if (switchGroup) {
                    for (let v in switchGroup.VALUES) {
                        if (v == value) {
                            this.aDIPSwitches[iDIP][fInit?0:1] &= ~switchGroup.MASK;
                            this.aDIPSwitches[iDIP][fInit?0:1] |= switchGroup.VALUES[v];
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }

    /**
     * getDIPSwitchControl(control)
     *
     * @this {ChipSet}
     * @param {HTMLElement} control is an HTML control DOM object
     * @returns {boolean} true if the switch represented by e is "on", false if "off"
     */
    getDIPSwitchControl(control)
    {
        return control.getAttribute("data-value") == "1";
    }

    /**
     * setDIPSwitchControl(control, f)
     *
     * @this {ChipSet}
     * @param {HTMLElement} control is an HTML control DOM object
     * @param {boolean} f is true if the switch represented by control should be "on", false if "off"
     */
    setDIPSwitchControl(control, f)
    {
        control.setAttribute("data-value", f? "1" : "0");
        control.style.color = (f? "#ffffff" : "#000000");
        control.style.backgroundColor = (f? "#000000" : "#ffffff");
    }

    /**
     * toggleDIPSwitchControl(control)
     *
     * @this {ChipSet}
     * @param {HTMLElement} control is an HTML control DOM object
     */
    toggleDIPSwitchControl(control)
    {
        let f = !this.getDIPSwitchControl(control);
        this.setDIPSwitchControl(control, f);
        let sID = control.getAttribute("id");
        let asParts = sID.split("-");
        let b = (0x1 << (+asParts[1] - 1));
        switch (asParts[0]) {
        case ChipSet.CONTROLS.SW1:
            this.aDIPSwitches[0][0] = (this.aDIPSwitches[0][0] & ~b) | (f? 0 : b);
            break;
        case ChipSet.CONTROLS.SW2:
            this.aDIPSwitches[1][0] = (this.aDIPSwitches[1][0] & ~b) | (f? 0 : b);
            break;
        default:
            break;
        }
        this.updateDIPSwitchDescriptions();
    }

    /**
     * updateDIPSwitches()
     *
     * @this {ChipSet}
     */
    updateDIPSwitches()
    {
        this.updateDIPSwitchControls(0, ChipSet.CONTROLS.SW1);
        this.updateDIPSwitchControls(1, ChipSet.CONTROLS.SW2);
        this.updateDIPSwitchDescriptions();
    }

    /**
     * updateDIPSwitchControls(iDIP, sBinding, fInit)
     *
     * @this {ChipSet}
     * @param {number} iDIP (0 or 1)
     * @param {string} sBinding is the name of the control
     * @param {boolean} [fInit]
     */
    updateDIPSwitchControls(iDIP, sBinding, fInit)
    {
        let control = this.bindings[sBinding];
        if (control) {
            let v;
            if (fInit) {
                v = this.aDIPSwitches[iDIP][0];
            } else {
                v = this.aDIPSwitches[iDIP][1] = this.aDIPSwitches[iDIP][0];
            }
            let aeCells = Component.getElementsByClass(this.sCellClass, "", control);
            for (let i = 0; i < aeCells.length; i++) {
                let switchGroup = this.findDIPSwitch(iDIP, i);
                let sLabel = switchGroup && switchGroup.LABEL || "Reserved";
                aeCells[i].setAttribute("title", sLabel);
                this.setDIPSwitchControl(aeCells[i], !(v & (0x1 << i)));
                aeCells[i].onclick = function(chipset, eSwitch) {
                    /**
                     * If we define the onclick handler below as "function(e)" instead of simply "function()", then we will
                     * also receive an Event object; however, IE reportedly requires that we examine a global (window.event)
                     * instead.  If that's true, and if we ever care to get more details about the click event, then define
                     * a local var; eg:
                     *
                     *      let event = window.event || e;
                     */
                    return function onClickSwitch() {
                        chipset.toggleDIPSwitchControl(eSwitch);
                    };
                }(this, aeCells[i]);
            }
        }
    }

    /**
     * updateDIPSwitchDescriptions()
     *
     * @this {ChipSet}
     */
    updateDIPSwitchDescriptions()
    {
        let controlDesc = this.bindings[ChipSet.CONTROLS.SWDESC];
        if (controlDesc != null) {
            let sText = "";
            /**
             * TODO: Monitor type 0 used to be "None" (ie, "No Monitor"), which was correct in a pre-EGA world,
             * but in the post-EGA world, it depends.  We should ask the Video component for a definitive answer.
             */
            let asMonitorTypes = {
                0: "Enhanced Color",
                1: "TV",
                2: "Color",
                3: "Monochrome"
            };
            sText += this.getDIPMemorySize(true) + "K";
            sText += ", " + (+this.getDIPCoprocessor(true)? "" : "No ") + "FPU";
            sText += ", " + asMonitorTypes[this.getDIPVideoMonitor(true)] + " Monitor";
            sText += ", " + this.getDIPFloppyDrives(true) + " Floppy Drives";
            if (this.aDIPSwitches[0][1] != null && this.aDIPSwitches[0][1] != this.aDIPSwitches[0][0] ||
                this.aDIPSwitches[1][1] != null && this.aDIPSwitches[1][1] != this.aDIPSwitches[1][0]) {
                sText += " (Reset required)";
            }
            controlDesc.textContent = sText;
        }
    }

    /**
     * dumpPIC()
     *
     * @this {ChipSet}
     */
    dumpPIC()
    {
        if (DEBUGGER) {
            for (let iPIC = 0; iPIC < this.aPICs.length; iPIC++) {
                let pic = this.aPICs[iPIC];
                let sDump = "PIC" + iPIC + ":";
                for (let i = 0; i < pic.aICW.length; i++) {
                    let b = pic.aICW[i];
                    sDump += " IC" + (i + 1) + '=' + StrLib.toHexByte(b);
                }
                sDump += " IMR=" + StrLib.toHexByte(pic.bIMR) + " IRR=" + StrLib.toHexByte(pic.bIRR) + " ISR=" + StrLib.toHexByte(pic.bISR) + " DELAY=" + pic.nDelay + "\n";
                this.print(sDump);
            }
        }
    }

    /**
     * dumpTimer(asArgs)
     *
     * Use "d timer" to dump all timers, or "d timer n" to dump only timer n.
     *
     * @this {ChipSet}
     * @param {Array.<string>} asArgs
     */
    dumpTimer(asArgs)
    {
        if (DEBUGGER) {
            let sParm = asArgs[0];
            let nTimer = (sParm? +sParm : null);
            for (let iTimer = 0; iTimer < this.aTimers.length; iTimer++) {
                if (nTimer != null && iTimer != nTimer) continue;
                this.updateTimer(iTimer);
                let timer = this.aTimers[iTimer];
                let sDump = "TIMER" + iTimer + ":";
                let count = 0;
                if (timer.countBytes != null) {
                    for (let i = 0; i <= timer.countBytes; i++) {
                        count |= (timer.countCurrent[i] << (i * 8));
                    }
                }
                sDump += " mode=" + (timer.mode >> 1) + " bytes=" + timer.countBytes + " count=" + StrLib.toHexWord(count) + "\n";
                this.print(sDump);
            }
        }
    }

    /**
     * dumpCMOS()
     *
     * @this {ChipSet}
     */
    dumpCMOS()
    {
        if (DEBUGGER) {
            let sDump = "";
            for (let iCMOS = 0; iCMOS < ChipSet.CMOS.ADDR.TOTAL; iCMOS++) {
                let b = (iCMOS <= ChipSet.CMOS.ADDR.STATUSD? this.getRTCByte(iCMOS) : this.abCMOSData[iCMOS]);
                if (sDump) sDump += '\n';
                sDump += "CMOS[" + StrLib.toHexByte(iCMOS) + "]: " + StrLib.toHexByte(b) + "\n";
            }
            this.print(sDump);
        }
    }

    /**
     * inDMAChannelAddr(iDMAC, iChannel, port, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} iDMAC
     * @param {number} iChannel
     * @param {number} port (0x00, 0x02, 0x04, 0x06 for DMAC 0, 0xC0, 0xC4, 0xC8, 0xCC for DMAC 1)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    inDMAChannelAddr(iDMAC, iChannel, port, addrFrom)
    {
        let controller = this.aDMACs[iDMAC];
        let channel = controller.aChannels[iChannel];
        let b = channel.addrCurrent[controller.bIndex];
        if (this.messageEnabled(MESSAGE.DMA + MESSAGE.PORT)) {
            this.printIO(port, undefined, addrFrom, "DMA" + iDMAC + ".CHANNEL" + iChannel + ".ADDR[" + controller.bIndex + "]", b, true);
        }
        controller.bIndex ^= 0x1;
        /**
         * Technically, aTimers[1].fOut is what drives DMA requests for DMA channel 0 (ChipSet.DMA_REFRESH),
         * every 15us, once the BIOS has initialized the channel's "mode" with MODE_SINGLE, INCREMENT, AUTOINIT,
         * and TYPE_READ (0x58) and initialized TIMER1 appropriately.
         *
         * However, we don't need to be that particular.  Simply simulate an ever-increasing address after every
         * read of the full DMA channel 0 address.
         */
        if (!iDMAC && iChannel == ChipSet.DMA_REFRESH && !controller.bIndex) {
            channel.addrCurrent[0]++;
            if (channel.addrCurrent[0] > 0xff) {
                channel.addrCurrent[0] = 0;
                channel.addrCurrent[1]++;
                if (channel.addrCurrent[1] > 0xff) {
                    channel.addrCurrent[1] = 0;
                }
            }
        }
        return b;
    }

    /**
     * outDMAChannelAddr(iDMAC, iChannel, port, bOut, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} iDMAC
     * @param {number} iChannel
     * @param {number} port (0x00, 0x02, 0x04, 0x06 for DMAC 0, 0xC0, 0xC4, 0xC8, 0xCC for DMAC 1)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     */
    outDMAChannelAddr(iDMAC, iChannel, port, bOut, addrFrom)
    {
        let controller = this.aDMACs[iDMAC];
        if (this.messageEnabled(MESSAGE.DMA + MESSAGE.PORT)) {
            this.printIO(port, bOut, addrFrom, "DMA" + iDMAC + ".CHANNEL" + iChannel + ".ADDR[" + controller.bIndex + "]", undefined, true);
        }
        let channel = controller.aChannels[iChannel];
        channel.addrCurrent[controller.bIndex] = channel.addrInit[controller.bIndex] = bOut;
        controller.bIndex ^= 0x1;
    }

    /**
     * inDMAChannelCount(iDMAC, iChannel, port, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} iDMAC
     * @param {number} iChannel
     * @param {number} port (0x01, 0x03, 0x05, 0x07 for DMAC 0, 0xC2, 0xC6, 0xCA, 0xCE for DMAC 1)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    inDMAChannelCount(iDMAC, iChannel, port, addrFrom)
    {
        let controller = this.aDMACs[iDMAC];
        let channel = controller.aChannels[iChannel];
        let b = channel.countCurrent[controller.bIndex];
        if (this.messageEnabled(MESSAGE.DMA + MESSAGE.PORT)) {
            this.printIO(port, undefined, addrFrom, "DMA" + iDMAC + ".CHANNEL" + iChannel + ".COUNT[" + controller.bIndex + "]", b, true);
        }
        controller.bIndex ^= 0x1;
        /**
         * Technically, aTimers[1].fOut is what drives DMA requests for DMA channel 0 (ChipSet.DMA_REFRESH),
         * every 15us, once the BIOS has initialized the channel's "mode" with MODE_SINGLE, INCREMENT, AUTOINIT,
         * and TYPE_READ (0x58) and initialized TIMER1 appropriately.
         *
         * However, we don't need to be that particular.  Simply simulate an ever-decreasing count after every
         * read of the full DMA channel 0 count.
         */
        if (!iDMAC && iChannel == ChipSet.DMA_REFRESH && !controller.bIndex) {
            channel.countCurrent[0]--;
            if (channel.countCurrent[0] < 0) {
                channel.countCurrent[0] = 0xff;
                channel.countCurrent[1]--;
                if (channel.countCurrent[1] < 0) {
                    channel.countCurrent[1] = 0xff;
                    /**
                     * This is the logical point to indicate Terminal Count (TC), but again, there's no need to be
                     * so particular; inDMAStatus() has its own logic for periodically signalling TC.
                     */
                }
            }
        }
        return b;
    }

    /**
     * outDMAChannelCount(iDMAC, iChannel, port, bOut, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} iDMAC
     * @param {number} iChannel (ports 0x01, 0x03, 0x05, 0x07)
     * @param {number} port (0x01, 0x03, 0x05, 0x07 for DMAC 0, 0xC2, 0xC6, 0xCA, 0xCE for DMAC 1)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     */
    outDMAChannelCount(iDMAC, iChannel, port, bOut, addrFrom)
    {
        let controller = this.aDMACs[iDMAC];
        if (this.messageEnabled(MESSAGE.DMA + MESSAGE.PORT)) {
            this.printIO(port, bOut, addrFrom, "DMA" + iDMAC + ".CHANNEL" + iChannel + ".COUNT[" + controller.bIndex + "]", undefined, true);
        }
        let channel = controller.aChannels[iChannel];
        channel.countCurrent[controller.bIndex] = channel.countInit[controller.bIndex] = bOut;
        controller.bIndex ^= 0x1;
    }

    /**
     * inDMAStatus(iDMAC, port, addrFrom)
     *
     * From the 8237A spec:
     *
     * "The Status register is available to be read out of the 8237A by the microprocessor.
     * It contains information about the status of the devices at this point. This information includes
     * which channels have reached Terminal Count (TC) and which channels have pending DMA requests.
     *
     * Bits 0–3 are set every time a TC is reached by that channel or an external EOP is applied.
     * These bits are cleared upon Reset and on each Status Read.
     *
     * Bits 4–7 are set whenever their corresponding channel is requesting service."
     *
     * TRIVIA: This hook wasn't installed when I was testing with the MODEL_5150 ROM BIOS, and it
     * didn't matter, but the MODEL_5160 ROM BIOS checks it several times, including @F000:E156, where
     * it verifies that TIMER1 didn't request service on channel 0.
     *
     * @this {ChipSet}
     * @param {number} iDMAC
     * @param {number} port (0x08 for DMAC 0, 0xD0 for DMAC 1)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    inDMAStatus(iDMAC, port, addrFrom)
    {
        /**
         * HACK: Unlike the MODEL_5150, the MODEL_5160 ROM BIOS checks DMA channel 0 for TC (@F000:E4DF)
         * after running a number of unrelated tests, since enough time would have passed for channel 0 to
         * have reached TC at least once.  So I simply OR in a hard-coded TC bit for channel 0 every time
         * status is read.
         */
        let controller = this.aDMACs[iDMAC];
        let b = controller.bStatus | ChipSet.DMA_STATUS.CH0_TC;
        controller.bStatus &= ~ChipSet.DMA_STATUS.ALL_TC;
        if (this.messageEnabled(MESSAGE.DMA + MESSAGE.PORT)) {
            this.printIO(port, undefined, addrFrom, "DMA" + iDMAC + ".STATUS", b, true);
        }
        return b;
    }

    /**
     * outDMACmd(iDMAC, port, bOut, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} iDMAC
     * @param {number} port (0x08 for DMAC 0, 0xD0 for DMAC 1)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     */
    outDMACmd(iDMAC, port, bOut, addrFrom)
    {
        if (this.messageEnabled(MESSAGE.DMA + MESSAGE.PORT)) {
            this.printIO(port, bOut, addrFrom, "DMA" + iDMAC + ".CMD", undefined, true);
        }
        this.aDMACs[iDMAC].bCmd = bOut;
    }

    /**
     * outDMAReq(iDMAC, port, bOut, addrFrom)
     *
     * From the 8237A spec:
     *
     * "The 8237A can respond to requests for DMA service which are initiated by software as well as by a DREQ.
     * Each channel has a request bit associated with it in the 4-bit Request register. These are non-maskable and subject
     * to prioritization by the Priority Encoder network. Each register bit is set or reset separately under software
     * control or is cleared upon generation of a TC or external EOP. The entire register is cleared by a Reset.
     *
     * To set or reset a bit the software loads the proper form of the data word.... In order to make a software request,
     * the channel must be in Block Mode."
     *
     * @this {ChipSet}
     * @param {number} iDMAC
     * @param {number} port (0x09 for DMAC 0, 0xD2 for DMAC 1)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     */
    outDMAReq(iDMAC, port, bOut, addrFrom)
    {
        let controller = this.aDMACs[iDMAC];
        if (this.messageEnabled(MESSAGE.DMA + MESSAGE.PORT)) {
            this.printIO(port, bOut, addrFrom, "DMA" + iDMAC + ".REQ", undefined, true);
        }
        /**
         * Bits 0-1 contain the channel number
         */
        let iChannel = (bOut & 0x3);
        /**
         * Bit 2 is the request bit (0 to reset, 1 to set), which must be propagated to the corresponding bit (4-7) in the status register
         */
        let iChannelBit = ((bOut & 0x4) << (iChannel + 2));
        controller.bStatus = (controller.bStatus & ~(0x10 << iChannel)) | iChannelBit;
        controller.bReq = bOut;
    }

    /**
     * outDMAMask(iDMAC, port, bOut, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} iDMAC
     * @param {number} port (0x0A for DMAC 0, 0xD4 for DMAC 1)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     */
    outDMAMask(iDMAC, port, bOut, addrFrom)
    {
        let controller = this.aDMACs[iDMAC];
        if (this.messageEnabled(MESSAGE.DMA + MESSAGE.PORT)) {
            this.printIO(port, bOut, addrFrom, "DMA" + iDMAC + ".MASK", undefined, true);
        }
        let iChannel = bOut & ChipSet.DMA_MASK.CHANNEL;
        let channel = controller.aChannels[iChannel];
        channel.masked = !!(bOut & ChipSet.DMA_MASK.CHANNEL_SET);
        if (!channel.masked) this.requestDMA(controller.nChannelBase + iChannel);
    }

    /**
     * outDMAMode(iDMAC, port, bOut, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} iDMAC
     * @param {number} port (0x0B for DMAC 0, 0xD6 for DMAC 1)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     */
    outDMAMode(iDMAC, port, bOut, addrFrom)
    {
        if (this.messageEnabled(MESSAGE.DMA + MESSAGE.PORT)) {
            this.printIO(port, bOut, addrFrom, "DMA" + iDMAC + ".MODE", undefined, true);
        }
        let iChannel = bOut & ChipSet.DMA_MODE.CHANNEL;
        this.aDMACs[iDMAC].aChannels[iChannel].mode = bOut;
    }

    /**
     * outDMAResetFF(iDMAC, port, bOut, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} iDMAC
     * @param {number} port (0x0C for DMAC 0, 0xD8 for DMAC 1)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     *
     * Any write to this port simply resets the controller's "first/last flip-flop", which determines whether
     * the even or odd byte of a DMA address or count register will be accessed next.
     */
    outDMAResetFF(iDMAC, port, bOut, addrFrom)
    {
        if (this.messageEnabled(MESSAGE.DMA + MESSAGE.PORT)) {
            this.printIO(port, bOut, addrFrom, "DMA" + iDMAC + ".RESET_FF", undefined, true);
        }
        this.aDMACs[iDMAC].bIndex = 0;
    }

    /**
     * inDMATemp(iDMAC, port, addrFrom)
     *
     * From the 8237A spec:
     *
     * "The Temporary register is used to hold data during memory-to-memory transfers  Following the
     * completion of the transfers, the last word moved can be read by the microprocessor in the Program Condition.
     * The Temporary register always contains the last byte transferred in the previous memory-to-memory operation,
     * unless cleared by a Reset."
     *
     * TRIVIA: This hook wasn't installed when I was testing with ANY of the IBM ROMs, but it's required
     * by the AT&T 6300 (aka Olivetti M24) ROM.
     *
     * TODO: When support is added for memory-to-memory transfers, bTemp needs to be updated according to spec.
     *
     * @this {ChipSet}
     * @param {number} iDMAC
     * @param {number} port (0x0D for DMAC 0, 0xDA for DMAC 1)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    inDMATemp(iDMAC, port, addrFrom)
    {
        let controller = this.aDMACs[iDMAC];
        let b = controller.bTemp;
        if (this.messageEnabled(MESSAGE.DMA + MESSAGE.PORT)) {
            this.printIO(port, undefined, addrFrom, "DMA" + iDMAC + ".TEMP", b, true);
        }
        return b;
    }

    /**
     * outDMAMasterClear(iDMAC, port, bOut, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} iDMAC
     * @param {number} port (0x0D for DMAC 0, 0xDA for DMAC 1)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     */
    outDMAMasterClear(iDMAC, port, bOut, addrFrom)
    {
        if (this.messageEnabled(MESSAGE.DMA + MESSAGE.PORT)) {
            this.printIO(port, bOut, addrFrom, "DMA" + iDMAC + ".MASTER_CLEAR", undefined, true);
        }
        /**
         * The value written to this port doesn't matter; any write triggers a "master clear" operation
         *
         * TODO: Can't we just call initDMAController(), which would also take care of clearing controller.bStatus?
         */
        let controller = this.aDMACs[iDMAC];
        for (let i = 0; i < controller.aChannels.length; i++) {
            this.initDMAChannel(controller, i);
        }
    }

    /**
     * inDMAPageReg(iDMAC, iChannel, port, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} iDMAC
     * @param {number} iChannel
     * @param {number} port
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    inDMAPageReg(iDMAC, iChannel, port, addrFrom)
    {
        let bIn = this.aDMACs[iDMAC].aChannels[iChannel].bPage;
        if (this.messageEnabled(MESSAGE.DMA + MESSAGE.PORT)) {
            this.printIO(port, undefined, addrFrom, "DMA" + iDMAC + ".CHANNEL" + iChannel + ".PAGE", bIn, true);
        }
        return bIn;
    }

    /**
     * outDMAPageReg(iDMAC, iChannel, port, bOut, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} iDMAC
     * @param {number} iChannel
     * @param {number} port
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     */
    outDMAPageReg(iDMAC, iChannel, port, bOut, addrFrom)
    {
        if (this.messageEnabled(MESSAGE.DMA + MESSAGE.PORT)) {
            this.printIO(port, bOut, addrFrom, "DMA" + iDMAC + ".CHANNEL" + iChannel + ".PAGE", undefined, true);
        }
        this.aDMACs[iDMAC].aChannels[iChannel].bPage = bOut;
    }

    /**
     * inDMAPageSpare(iSpare, port, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} iSpare
     * @param {number} port
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    inDMAPageSpare(iSpare, port, addrFrom)
    {
        let bIn = this.abDMAPageSpare[iSpare];
        if (this.messageEnabled(MESSAGE.DMA + MESSAGE.PORT)) {
            this.printIO(port, undefined, addrFrom, "DMA.SPARE" + iSpare + ".PAGE", bIn, true);
        }
        return bIn;
    }

    /**
     * outDMAPageSpare(iSpare, port, bOut, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} iSpare
     * @param {number} port
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     */
    outDMAPageSpare(iSpare, port, bOut, addrFrom)
    {
        /**
         * TODO: Remove this DEBUG-only DESKPRO386 code once we're done debugging DeskPro 386 ROMs;
         * it enables logging of all DeskPro 386 ROM checkpoint I/O to port 0x84.
         */
        if (this.messageEnabled(MESSAGE.DMA + MESSAGE.PORT) /* || DEBUG && (this.model|0) == ChipSet.MODEL_COMPAQ_DESKPRO386 */) {
            this.printIO(port, bOut, addrFrom, "DMA.SPARE" + iSpare + ".PAGE", undefined, true);
        }
        this.abDMAPageSpare[iSpare] = bOut;
    }

    /**
     * getDMAState(iDMAChannel)
     *
     * @param {number} iDMAChannel
     * @returns {Array} (current transfer address at [0], current count at [1]; may be used by the FDC for bootstrapping tests)
     */
    getDMAState(iDMAChannel)
    {
        let iDMAC = iDMAChannel >> 2;
        let controller = this.aDMACs[iDMAC];

        let iChannel = iDMAChannel & 0x3;
        let channel = controller.aChannels[iChannel];

        return [(channel.bPage << 16) | (channel.addrCurrent[1] << 8) | channel.addrCurrent[0], (channel.countCurrent[1] << 8) | channel.countCurrent[0]];
    }

    /**
     * connectDMA(iDMAChannel, component, sFunction, obj)
     *
     * @param {number} iDMAChannel
     * @param {Component|string} component
     * @param {string} sFunction
     * @param {Object} obj (eg, when the HDC connects, it passes a drive object)
     */
    connectDMA(iDMAChannel, component, sFunction, obj)
    {
        let iDMAC = iDMAChannel >> 2;
        let controller = this.aDMACs[iDMAC];

        let iChannel = iDMAChannel & 0x3;
        let channel = controller.aChannels[iChannel];

        this.initDMAFunction(channel, component, sFunction, obj);
    }

    /**
     * requestDMA(iDMAChannel, done)
     *
     * @this {ChipSet}
     * @param {number} iDMAChannel
     * @param {function(boolean)} [done]
     *
     * For DMA_MODE.TYPE_WRITE transfers, fnTransfer(-1) must return bytes as long as we request them (although it may
     * return -1 if it runs out of bytes prematurely).
     *
     * Similarly, for DMA_MODE.TYPE_READ transfers, fnTransfer(b) must accept bytes as long as we deliver them (although
     * it is certainly free to ignore bytes it no longer wants).
     */
    requestDMA(iDMAChannel, done)
    {
        let iDMAC = iDMAChannel >> 2;
        let controller = this.aDMACs[iDMAC];

        let iChannel = iDMAChannel & 0x3;
        let channel = controller.aChannels[iChannel];

        if (!channel.component || !channel.fnTransfer || !channel.obj) {
            if (DEBUG) this.printf(MESSAGE.DMA + MESSAGE.DATA, "requestDMA(%d): not connected to a component\n", iDMAChannel);
            if (done) done(true);
            return;
        }

        /**
         * We can't simply slam done into channel.done; that would be fine if requestDMA() was called only by functions
         * like HDC.doRead() and HDC.doWrite(), but we're also called whenever a DMA channel is unmasked, and in those cases,
         * we need to preserve whatever handler may have been previously set.
         *
         * However, in an effort to ensure we don't end up with stale done handlers, connectDMA() will reset channel.done.
         */
        if (done) channel.done = done;

        if (channel.masked) {
            if (DEBUG) this.printf(MESSAGE.DMA + MESSAGE.DATA, "requestDMA(%d): channel masked, request queued\n", iDMAChannel);
            return;
        }

        /**
         * Let's try to do async DMA without asking the CPU for help...
         *
         *      this.cpu.setDMA(true);
         */
        this.advanceDMA(channel, true);
    }

    /**
     * advanceDMA(channel, fInit)
     *
     * @this {ChipSet}
     * @param {Object} channel
     * @param {boolean} [fInit]
     */
    advanceDMA(channel, fInit)
    {
        if (fInit) {
            channel.count = (channel.countCurrent[1] << 8) | channel.countCurrent[0];
            channel.type = (channel.mode & ChipSet.DMA_MODE.TYPE);
            channel.fWarning = channel.fError = false;
            if (DEBUG && DEBUGGER) {
                channel.cbDebug = channel.count + 1;
                channel.sAddrDebug = (DEBUG && DEBUGGER? null : undefined);
            }
        }
        /**
         * To support async DMA without requiring help from the CPU (ie, without relying upon cpu.setDMA()), we require that
         * the data transfer functions provide an fAsync parameter to their callbacks; fAsync must be true if the callback was
         * truly asynchronous (ie, it had to wait for a remote I/O request to finish), or false if the data was already available
         * and the callback was performed synchronously.
         *
         * Whenever a callback is issued asynchronously, we will immediately daisy-chain another pair of updateDMA()/advanceDMA()
         * calls, which will either finish the DMA operation if no more remote I/O requests are required, or will queue up another
         * I/O request, which will in turn trigger another async callback.  Thus, the DMA request keeps itself going without
         * requiring any special assistance from the CPU via setDMA().
         */
        let bto = null;
        let chipset = this;
        let fAsyncRequest = false;
        let controller = channel.controller;
        let iDMAChannel = controller.nChannelBase + channel.iChannel;

        while (true) {
            if (channel.count >= 0) {
                let b;
                let addr = (channel.bPage << 16) | (channel.addrCurrent[1] << 8) | channel.addrCurrent[0];
                if (DEBUG && DEBUGGER && channel.sAddrDebug === null) {
                    channel.sAddrDebug = StrLib.toHex(addr >> 4, 4) + ":" + StrLib.toHex(addr & 0xf, 4);
                    if (channel.type != ChipSet.DMA_MODE.TYPE_WRITE && this.messageEnabled(this.messageBitsDMA(iDMAChannel))) {
                        this.printf(MESSAGE.DMA, "advanceDMA(%d) transferring %d bytes from %s\n", iDMAChannel, channel.cbDebug, channel.sAddrDebug);
                        this.dbg.doDump(["db", channel.sAddrDebug, "l" + channel.cbDebug]);
                    }
                }
                if (channel.type == ChipSet.DMA_MODE.TYPE_WRITE) {
                    fAsyncRequest = true;
                    (function advanceDMAWrite(addrCur) {
                        channel.fnTransfer.call(channel.component, channel.obj, -1, function onTransferDMA(b, fAsync, obj, off) {
                            if (b < 0) {
                                if (!channel.fWarning) {
                                    if (DEBUG) chipset.printf(MESSAGE.DMA, "advanceDMAWrite(%d) ran out of data, assuming 0xff\n", iDMAChannel);
                                    channel.fWarning = true;
                                }
                                /**
                                 * TODO: Determine whether to abort, as we do for DMA_MODE.TYPE_READ.
                                 */
                                b = 0xff;
                            }
                            if (!channel.masked && !channel.fError) {
                                chipset.bus.setByte(addrCur, b);
                                /**
                                 * WARNING: Do NOT assume that obj is valid; if the sector data was not found, there will be no obj.
                                 */
                                if (BACKTRACK && obj) {
                                    if (!off && obj.file) {
                                        chipset.printf(MESSAGE.DISK, "loading %s[%#0X] at %%%0X\n", obj.file.path, obj.offFile, addrCur);
                                        /**
                                        if (obj.file.path == "\\SYSBAS.EXE" && obj.offFile == 512) {
                                            chipset.cpu.stopCPU();
                                        }
                                        */
                                    }
                                    bto = chipset.bus.addBackTrackObject(obj, bto, off);
                                    chipset.bus.writeBackTrackObject(addrCur, bto, off);
                                }
                            }
                            fAsyncRequest = fAsync;
                            if (fAsync) {
                                setTimeout(function() {
                                    if (!chipset.updateDMA(channel)) chipset.advanceDMA(channel);
                                }, 0);
                            }
                        });
                    }(addr));
                }
                else if (channel.type == ChipSet.DMA_MODE.TYPE_READ) {
                    /**
                     * TODO: Determine whether we should support async dmaWrite() functions (currently not required)
                     */
                    b = chipset.bus.getByte(addr);
                    if (channel.fnTransfer.call(channel.component, channel.obj, b) < 0) {
                        /**
                         * In this case, I think I have no choice but to terminate the DMA operation in response to a failure,
                         * because the ROM BIOS FDC.REG_DATA.CMD.FORMAT_TRACK command specifies a count that is MUCH too large
                         * (a side-effect of the ROM BIOS using the same "DMA_SETUP" code for reads, writes AND formats).
                         */
                        channel.fError = true;
                    }
                }
                else if (channel.type == ChipSet.DMA_MODE.TYPE_VERIFY) {
                    /**
                     * Originally, we did nothing here and just fell into updateDMA(); however, we actually need to probe for
                     * data even though we're not going to do anything with it, so that any data errors get flagged by the FDC.
                     *
                     * This resolves the copy-protection check on "Life & Death II (Disk 1)", and it should also resolve a
                     * similar problem with COMPAQ DeskPro 386 machines configured with 1.2M drives (where the BIOS would
                     * attempt to verify sector 16 after reading the boot sector from a 15 sector/track diskette and expect
                     * an error in order to confirm the CMOS drive type).  This will make disk type/drive type errors more
                     * common on those machines (eg, loading a 1.44M diskette in a 1.2M drive), but that should just be a more
                     * accurate reflection of historical reality.
                     */
                    (function advanceDMAVerify(addrCur) {
                        channel.fnTransfer.call(channel.component, channel.obj, -1, function onTransferDMA(b, fAsync, obj, off) {
                            if (b < 0) {
                                if (!channel.fWarning) {
                                    if (DEBUG) chipset.printf(MESSAGE.DMA, "advanceDMAVerify(%d) ran out of data\n", iDMAChannel);
                                    channel.fWarning = true;
                                }
                                /**
                                 * TODO: Determine whether to abort, as we do for DMA_MODE.TYPE_READ.
                                 */
                            }
                        });
                    }(addr));
                }
                else {
                    if (DEBUG) this.printf(MESSAGE.DMA + MESSAGE.WARNING, "advanceDMA(%d) unsupported transfer type %#06X\n", iDMAChannel, channel.type);
                    channel.fError = true;
                }
            }
            if (fAsyncRequest || this.updateDMA(channel)) break;
        }
    }

    /**
     * updateDMA(channel)
     *
     * @this {ChipSet}
     * @param {Object} channel
     * @returns {boolean} true if DMA operation complete, false if not
     */
    updateDMA(channel)
    {
        if (!channel.fError && --channel.count >= 0) {
            if (channel.mode & ChipSet.DMA_MODE.DECREMENT) {
                channel.addrCurrent[0]--;
                if (channel.addrCurrent[0] < 0) {
                    channel.addrCurrent[0] = 0xff;
                    channel.addrCurrent[1]--;
                    if (channel.addrCurrent[1] < 0) channel.addrCurrent[1] = 0xff;
                }
            } else {
                channel.addrCurrent[0]++;
                if (channel.addrCurrent[0] > 0xff) {
                    channel.addrCurrent[0] = 0x00;
                    channel.addrCurrent[1]++;
                    if (channel.addrCurrent[1] > 0xff) channel.addrCurrent[1] = 0x00;
                }
            }
            /**
             * In situations where an HDC DMA operation took too long, the Fixed Disk BIOS would give up, but the DMA operation would continue.
             *
             * TODO: Verify that the Fixed Disk BIOS shuts down (ie, re-masks) a DMA channel for failed requests, and that this handles those failures.
             */
            if (!channel.masked) return false;
        }

        let controller = channel.controller;
        let iDMAChannel = controller.nChannelBase + channel.iChannel;
        controller.bStatus = (controller.bStatus & ~(0x10 << channel.iChannel)) | (0x1 << channel.iChannel);

        /**
         * EOP is supposed to automatically (re)mask the channel, unless it's set for auto-initialize.
         */
        if (!(channel.mode & ChipSet.DMA_MODE.AUTOINIT)) {
            channel.masked = true;
            channel.component = channel.obj = null;
        }

        if (DEBUG && channel.type == ChipSet.DMA_MODE.TYPE_WRITE && channel.sAddrDebug && this.messageEnabled(this.messageBitsDMA(iDMAChannel))) {
            this.printf(MESSAGE.DMA, "updateDMA(%d) transferred %d bytes to %s\n", iDMAChannel, channel.cbDebug, channel.sAddrDebug);
            this.dbg.doDump(["db", channel.sAddrDebug, "l" + channel.cbDebug]);
        }

        if (channel.done) {
            channel.done(!channel.fError);
            channel.done = null;
        }

        /**
         * While it might make sense to call cpu.setDMA() here, it's simpler to let the CPU issue one more call
         * to chipset.checkDMA() and let the CPU update INTR.DMA on its own, based on the return value from checkDMA().
         */
        return true;
    }

    /**
     * inPICLo(iPIC, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} iPIC
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    inPICLo(iPIC, addrFrom)
    {
        let b = 0;
        let pic = this.aPICs[iPIC];
        if (pic.bOCW3 != null) {
            let bReadReg = pic.bOCW3 & ChipSet.PIC_LO.OCW3_READ_CMD;
            switch (bReadReg) {
                case ChipSet.PIC_LO.OCW3_READ_IRR:
                    b = pic.bIRR;
                    break;
                case ChipSet.PIC_LO.OCW3_READ_ISR:
                    b = pic.bISR;
                    break;
                default:
                    break;
            }
        }
        if (this.messageEnabled(MESSAGE.PIC + MESSAGE.PORT)) {
            this.printIO(pic.port, undefined, addrFrom, "PIC" + iPIC, b, true);
        }
        return b;
    }

    /**
     * outPICLo(iPIC, bOut, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} iPIC
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     */
    outPICLo(iPIC, bOut, addrFrom)
    {
        let pic = this.aPICs[iPIC];
        if (this.messageEnabled(MESSAGE.PIC + MESSAGE.PORT)) {
            this.printIO(pic.port, bOut, addrFrom, "PIC" + iPIC, undefined, true);
        }
        if (bOut & ChipSet.PIC_LO.ICW1) {
            /**
             * This must be an ICW1...
             */
            pic.nICW = 0;
            pic.aICW[pic.nICW++] = bOut;
            /**
             * I used to do the rest of this initialization in outPICHi(), once all the ICW commands had been received,
             * but a closer reading of the 8259A spec indicates that that should happen now, on receipt on ICW1.
             *
             * Also, on p.10 of that spec, it says "The Interrupt Mask Register is cleared".  I originally took that to
             * mean that all interrupts were masked, but based on what MS-DOS 4.0M expects to happen after this code runs:
             *
             *      0070:44C6 B013          MOV      AL,13
             *      0070:44C8 E620          OUT      20,AL
             *      0070:44CA B050          MOV      AL,50
             *      0070:44CC E621          OUT      21,AL
             *      0070:44CE B009          MOV      AL,09
             *      0070:44D0 E621          OUT      21,AL
             *
             * (ie, it expects its next call to INT 0x13 will still generate an interrupt), I've decided the spec
             * must be read literally, meaning that all IMR bits must be zeroed.  Unmasking all possible interrupts by
             * default seems unwise to me, but who am I to judge....
             */
            pic.bIMR = 0x00;
            pic.bIRLow = 7;
            /**
             * TODO: I'm also zeroing both IRR and ISR, even though that's not actually mentioned as part of the ICW
             * sequence, because they need to be (re)initialized at some point.  However, if some component is currently
             * requesting an interrupt, what should I do about that?  Originally, I had decided to clear them ONLY if they
             * were still undefined, but that change appeared to break the ROM BIOS handling of CTRL-ALT-DEL, so I'm back
             * to unconditionally zeroing them.
             */
            pic.bIRR = pic.bISR = 0;
            /**
             * The spec also says that "Special Mask Mode is cleared and Status Read is set to IRR".  I attempt to insure
             * the latter, but as for special mask mode... well, that mode isn't supported yet.
             */
            pic.bOCW3 = ChipSet.PIC_LO.OCW3 | ChipSet.PIC_LO.OCW3_READ_IRR;
        }
        else if (!(bOut & ChipSet.PIC_LO.OCW3)) {
            /**
             * This must be an OCW2...
             */
            let bOCW2 = bOut & ChipSet.PIC_LO.OCW2_OP_MASK;
            if (bOCW2 & ChipSet.PIC_LO.OCW2_EOI) {
                /**
                 * This OCW2 must be an EOI command...
                 */
                let nIRL;
                let bIREnd = 0;
                if ((bOCW2 & ChipSet.PIC_LO.OCW2_EOI_SPEC) == ChipSet.PIC_LO.OCW2_EOI_SPEC) {
                    /**
                     * More "specifically", a specific EOI command...
                     */
                    nIRL = bOut & ChipSet.PIC_LO.OCW2_IR_LVL;
                    bIREnd = 1 << nIRL;
                } else {
                    /**
                     * Less "specifically", a non-specific EOI command.  The search for the highest priority in-service
                     * interrupt must start with whichever interrupt is opposite the lowest priority interrupt (normally 7,
                     * but technically whatever bIRLow is currently set to).  For example:
                     *
                     *      If bIRLow is 7, then the priority order is: 0, 1, 2, 3, 4, 5, 6, 7.
                     *      If bIRLow is 6, then the priority order is: 7, 0, 1, 2, 3, 4, 5, 6.
                     *      If bIRLow is 5, then the priority order is: 6, 7, 0, 1, 2, 3, 4, 5.
                     *      etc.
                     */
                    nIRL = pic.bIRLow + 1;
                    while (true) {
                        nIRL &= 0x7;
                        let bIR = 1 << nIRL;
                        if (pic.bISR & bIR) {
                            bIREnd = bIR;
                            break;
                        }
                        if (nIRL++ == pic.bIRLow) break;
                    }
                    if (DEBUG && !bIREnd) nIRL = null;      // for unexpected non-specific EOI commands, there's no IRQ to report
                }
                let nIRQ = (nIRL == null? undefined : pic.nIRQBase + nIRL);
                if (pic.bISR & bIREnd) {
                    if (DEBUG && this.dbg) this.printf(this.messageBitsIRQ(nIRQ), "outPIC%d(%#04X): IRQ %d ending @%s stack=%s\n",  iPIC, pic.port, nIRQ, this.dbg.toHexOffset(this.cpu.getIP(), this.cpu.getCS()), this.dbg.toHexOffset(this.cpu.getSP(), this.cpu.getSS()));
                    pic.bISR &= ~bIREnd;
                    this.checkIRR();
                } else {
                    if (DEBUG) {
                        this.printf(MESSAGE.PIC + MESSAGE.WARNING + MESSAGE.ADDR, "outPIC%d(%#04X): unexpected EOI for IRQ %d\n", iPIC, pic.port, nIRQ);
                        if (MAXDEBUG && this.dbg) this.dbg.stopCPU();
                    }
                }
                /**
                 * TODO: Support EOI commands with automatic rotation (eg, ChipSet.PIC_LO.OCW2_EOI_ROT and ChipSet.PIC_LO.OCW2_EOI_ROTSPEC)
                 */
                if (bOCW2 & ChipSet.PIC_LO.OCW2_SET_ROTAUTO) {
                    this.printf(MESSAGE.PIC + MESSAGE.WARNING + MESSAGE.ADDR, "outPIC%d(%#04X): unsupported OCW2 rotate %#04X\n", iPIC, pic.port, bOut);
                }
            }
            else  if (bOCW2 == ChipSet.PIC_LO.OCW2_SET_PRI) {
                /**
                 * This OCW2 changes the lowest priority interrupt to the specified level (the default is 7)
                 */
                pic.bIRLow = bOut & ChipSet.PIC_LO.OCW2_IR_LVL;
            }
            else {
                /**
                 * TODO: Remaining commands to support: ChipSet.PIC_LO.OCW2_SET_ROTAUTO and ChipSet.PIC_LO.OCW2_CLR_ROTAUTO
                 */
                this.printf(MESSAGE.PIC + MESSAGE.WARNING + MESSAGE.ADDR, "outPIC%d(%#04X): unsupported OCW2 automatic rotate %#04X\n", iPIC, pic.port, bOut);
            }
        } else {
            /**
             * This must be an OCW3 request. If it's a "Read Register" command (PIC_LO.OCW3_READ_CMD), inPICLo() will take care it.
             *
             * TODO: If OCW3 specified a "Poll" command (PIC_LO.OCW3_POLL_CMD) or a "Special Mask Mode" command (PIC_LO.OCW3_SMM_CMD),
             * that's unfortunate, because I don't support them yet.
             */
            if (bOut & (ChipSet.PIC_LO.OCW3_POLL_CMD | ChipSet.PIC_LO.OCW3_SMM_CMD)) {
                this.printf(MESSAGE.PIC + MESSAGE.WARNING + MESSAGE.ADDR, "outPIC%d(%#04X): unsupported OCW3 %#04X\n", iPIC, pic.port, bOut);
            }
            pic.bOCW3 = bOut;
        }
    }

    /**
     * inPICHi(iPIC, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} iPIC
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    inPICHi(iPIC, addrFrom)
    {
        let pic = this.aPICs[iPIC];
        let b = pic.bIMR;
        if (this.messageEnabled(MESSAGE.PIC + MESSAGE.PORT)) {
            this.printIO(pic.port+1, undefined, addrFrom, "PIC" + iPIC, b, true);
        }
        return b;
    }

    /**
     * outPICHi(iPIC, bOut, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} iPIC
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     */
    outPICHi(iPIC, bOut, addrFrom)
    {
        let pic = this.aPICs[iPIC];
        if (this.messageEnabled(MESSAGE.PIC + MESSAGE.PORT)) {
            this.printIO(pic.port+1, bOut, addrFrom, "PIC" + iPIC, undefined, true);
        }
        if (pic.nICW < pic.aICW.length) {
            pic.aICW[pic.nICW++] = bOut;
            if (pic.nICW == 2 && (pic.aICW[0] & ChipSet.PIC_LO.ICW1_SNGL)) {
                pic.nICW++;
            }
            if (pic.nICW == 3 && !(pic.aICW[0] & ChipSet.PIC_LO.ICW1_ICW4)) {
                pic.nICW++;
            }
        }
        else {
            /**
             * We have all our ICW "words" (ie, bytes), so this must be an OCW1 write (which is simply an IMR write)
             */
            pic.bIMR = bOut;
            /**
             * See the CPU's delayINTR() function for an explanation of why this explicit delay is necessary.
             */
            this.cpu.delayINTR();
            /**
             * Alas, we need a longer delay for the MODEL_5170's "KBD_RESET" function (F000:17D2), which must drop
             * into a loop and decrement CX at least once after unmasking the KBD IRQ.  The "KBD_RESET" function on
             * previous models could be handled with a 4-instruction delay provided by the Keyboard.resetDevice() call
             * to setIRR(), but the MODEL_5170 needs a roughly 6-instruction delay after it unmasks the KBD IRQ.
             */
            this.checkIRR(!iPIC && bOut == 0xFD? 6 : 0);
        }
    }

    /**
     * checkIMR(nIRQ)
     *
     * @this {ChipSet}
     * @param {number} nIRQ
     * @returns {boolean} true if the specified IRQ is masked, false if not
     */
    checkIMR(nIRQ)
    {
        let iPIC = nIRQ >> 3;
        let nIRL = nIRQ & 0x7;
        let pic = this.aPICs[iPIC];
        return !!(pic.bIMR & (0x1 << nIRL));
    }

    /**
     * setIRR(nIRQ, nDelay)
     *
     * @this {ChipSet}
     * @param {number} nIRQ (IRQ 0-7 implies iPIC 0, and IRQ 8-15 implies iPIC 1)
     * @param {number} [nDelay] is an optional number of instructions to delay acknowledgment of the IRQ (see getIRRVector)
     */
    setIRR(nIRQ, nDelay)
    {
        /**
         * Whenever the Video component needs to signal a vertical retrace interrupt, it specifies ChipSet.IRQ.VID
         * (aka IRQ 2) and it is blissfully ignorant of whether the machine has one or two PICs; unfortunately, in the
         * case of two PICs (master and slave), its interrupt is supposed to come through IRQ 9 on the slave, since
         * IRQ 2 has now been reserved for the slave PIC.  We take care of that here, so that Video can remain blissful.
         */
        if (nIRQ == ChipSet.IRQ.SLAVE && this.cPICs == 2) {     // IRQ.SLAVE conflicts with IRQ.VID
            nIRQ = ChipSet.IRQ.IRQ2;                            // aka IRQ 9
        }
        let iPIC = nIRQ >> 3;
        let nIRL = nIRQ & 0x7;
        let pic = this.aPICs[iPIC];
        let bIRR = (1 << nIRL);
        if (!(pic.bIRR & bIRR)) {
            pic.bIRR |= bIRR;
            this.printf(this.messageBitsIRQ(nIRQ), "set IRQ %d\n", nIRQ);
            pic.nDelay = nDelay || 0;
            this.checkIRR();
        }
    }

    /**
     * clearIRR(nIRQ)
     *
     * @this {ChipSet}
     * @param {number} nIRQ (IRQ 0-7 implies iPIC 0, and IRQ 8-15 implies iPIC 1)
     */
    clearIRR(nIRQ)
    {
        let iPIC = nIRQ >> 3;
        let nIRL = nIRQ & 0x7;
        let pic = this.aPICs[iPIC];
        let bIRR = (1 << nIRL);
        if (pic.bIRR & bIRR) {
            pic.bIRR &= ~bIRR;
            this.printf(this.messageBitsIRQ(nIRQ), "clear IRQ %d\n", nIRQ);
            this.checkIRR();
        }
    }

    /**
     * checkIRR(nDelay)
     *
     * @this {ChipSet}
     * @param {number} [nDelay] is an optional number of instructions to delay acknowledgment of a pending interrupt
     */
    checkIRR(nDelay)
    {
        /**
         * Look for any IRR bits that aren't masked and aren't already in service; in theory, all we'd have to
         * check is the master PIC (which is the *only* PIC on pre-5170 models), because when any IRQs are set or
         * cleared on the slave, that would automatically be reflected in IRQ.SLAVE on the master; that's what
         * setIRR() and clearIRR() used to do.
         *
         * Unfortunately, despite setIRR() and clearIRR()'s efforts, whenever a slave interrupt is acknowledged,
         * getIRRVector() ends up clearing the IRR bits for BOTH the slave's IRQ and the master's IRQ.SLAVE.
         * So if another lower-priority slave IRQ is waiting to be dispatched, that fact is no longer reflected
         * in IRQ.SLAVE.
         *
         * Since checkIRR() is called on every EOI, we can resolve that problem here, by first checking the slave
         * PIC for any unmasked, unserviced interrupts and updating the master's IRQ.SLAVE.
         *
         * And since this is ALSO called by both setIRR() and clearIRR(), those functions no longer need to perform
         * their own IRQ.SLAVE updates.  This function consolidates the propagation of slave interrupts to the master.
         */
        let pic;
        let bIR = -1;

        if (this.cPICs > 1) {
            pic = this.aPICs[1];
            bIR = ~(pic.bISR | pic.bIMR) & pic.bIRR;
        }

        pic = this.aPICs[0];

        if (bIR >= 0) {
            if (bIR) {
                pic.bIRR |= (1 << ChipSet.IRQ.SLAVE);
            } else {
                pic.bIRR &= ~(1 << ChipSet.IRQ.SLAVE);
            }
        }

        bIR = ~(pic.bISR | pic.bIMR) & pic.bIRR;

        this.cpu.updateINTR(!!bIR);

        if (bIR && nDelay) pic.nDelay = nDelay;
    }

    /**
     * getIRRVector()
     *
     * getIRRVector() is called by the CPU whenever PS_IF is set and OP_NOINTR is clear.  Ordinarily, an immediate
     * response would seem perfectly reasonable, but unfortunately, there are places in the original ROM BIOS like
     * "KBD_RESET" (F000:E688) that enable interrupts but still expect nothing to happen for several more instructions.
     *
     * So, in addition to the two normal responses (an IDT vector #, or -1 indicating no pending interrupts), we must
     * support a third response (-2) that basically means: don't change the CPU interrupt state, just keep calling until
     * we return one of the first two responses.  The number of times we delay our normal response is determined by the
     * component that originally called setIRR with an optional delay parameter.
     *
     * @this {ChipSet}
     * @param {number} [iPIC]
     * @returns {number} IDT vector # of the next highest-priority interrupt, -1 if none, or -2 for "please try your call again later"
     */
    getIRRVector(iPIC)
    {
        if (iPIC === undefined) iPIC = 0;

        /**
         * Look for any IRR bits that aren't masked and aren't already in service...
         */
        let nIDT = -1;
        let pic = this.aPICs[iPIC];
        if (!pic.nDelay) {
            let bIR = pic.bIRR & ((pic.bISR | pic.bIMR) ^ 0xff);
            /**
             * The search for the next highest priority requested interrupt (that's also not in-service and not masked)
             * must start with whichever interrupt is opposite the lowest priority interrupt (normally 7, but technically
             * whatever bIRLow is currently set to).  For example:
             *
             *      If bIRLow is 7, then the priority order is: 0, 1, 2, 3, 4, 5, 6, 7.
             *      If bIRLow is 6, then the priority order is: 7, 0, 1, 2, 3, 4, 5, 6.
             *      If bIRLow is 5, then the priority order is: 6, 7, 0, 1, 2, 3, 4, 5.
             *      etc.
             *
             * This process is similar to the search performed by non-specific EOIs, except those apply only to a single
             * PIC (which is why a slave interrupt must be EOI'ed twice: once for the slave PIC and again for the master),
             * whereas here we must search across all PICs.
             */
            let nIRL = pic.bIRLow + 1;
            while (true) {

                nIRL &= 0x7;
                let bIRNext = 1 << nIRL;

                /**
                 * If we encounter an interrupt that's still in-service BEFORE we encounter a requested interrupt,
                 * then we're done; we must allow a higher priority in-service interrupt to finish before acknowledging
                 * any lower priority interrupts.
                 */
                if (pic.bISR & bIRNext) break;

                if (bIR & bIRNext) {

                    if (!iPIC && nIRL == ChipSet.IRQ.SLAVE && this.aPICs.length > 1) {
                        /**
                         * Slave interrupts are tied to the master PIC on IRQ2; query the slave PIC for the vector #
                         */
                        nIDT = this.getIRRVector(1);
                    } else {
                        /**
                         * Get the starting IDT vector # from ICW2 and add the IR level to obtain the target IDT vector #
                         */
                        nIDT = pic.aICW[1] + nIRL;
                    }

                    if (nIDT >= 0) {
                        pic.bISR |= bIRNext;

                        /**
                         * Setting the ISR implies clearing the IRR, but clearIRR() has side-effects we don't want
                         * (eg, clearing the slave IRQ, notifying the CPU, etc), so we clear the IRR ourselves.
                         */
                        pic.bIRR &= ~bIRNext;

                        let nIRQ = pic.nIRQBase + nIRL;
                        if (DEBUG && this.dbg) this.printf(this.messageBitsIRQ(nIRQ) + MESSAGE.ADDR, "getIRRVector(): IRQ %d interrupting stack %s\n", nIRQ, this.dbg.toHexOffset(this.cpu.getSP(), this.cpu.getSS()));
                        if (MAXDEBUG && DEBUGGER) this.acInterrupts[nIRQ]++;
                    }
                    break;
                }

                if (nIRL++ == pic.bIRLow) break;
            }
        } else {
            nIDT = -2;
            pic.nDelay--;
        }
        return nIDT;
    }

    /**
     * setFPUInterrupt()
     *
     * @this {ChipSet}
     */
    setFPUInterrupt()
    {
        if (this.model >= ChipSet.MODEL_5170) {
            this.setIRR(ChipSet.IRQ.FPU);
        } else {
            /**
             * TODO: Determine whether we need to maintain an "Active NMI" state; ie, if NMI.DISABLE is cleared
             * later, and the FPU coprocessor is still indicating an error condition, should we then generate an NMI?
             */
            if (this.bNMI & ChipSet.NMI.ENABLE) {
                X86.helpInterrupt.call(this.cpu, X86.EXCEPTION.NMI);
            }
        }
    }

    /**
     * clearFPUInterrupt(fSet)
     *
     * @this {ChipSet}
     */
    clearFPUInterrupt()
    {
        if (this.model >= ChipSet.MODEL_5170) {
            this.clearIRR(ChipSet.IRQ.FPU);
        } else {
            /**
             * TODO: If we maintain an "Active NMI" state, then we will need code here to clear that state, as well
             * as code in outNMI() to clear that state and generate an NMI as needed.
             */
        }
    }

    /**
     * inTimer(iPIT, iPITTimer, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} iPIT (0 or 1)
     * @param {number} iPITTimer (0, 1, or 2)
     * @param {number} port (0x40, 0x41, 0x42, etc)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    inTimer(iPIT, iPITTimer, port, addrFrom)
    {
        let b;
        let iBaseTimer = (iPIT? 3 : 0);
        let timer = this.aTimers[iBaseTimer + iPITTimer];

        if (timer.fStatusLatched) {
            b = timer.bStatus;
            timer.fStatusLatched = false;
        }
        else {
            if (timer.countIndex == timer.countBytes) {
                this.resetTimerIndex(iBaseTimer + iPITTimer);
            }
            if (timer.fCountLatched) {
                b = timer.countLatched[timer.countIndex++];
                if (timer.countIndex == timer.countBytes) {
                    timer.fCountLatched = false;
                }
            }
            else {
                this.updateTimer(iBaseTimer + iPITTimer);
                b = timer.countCurrent[timer.countIndex++];
            }
        }
        if (this.messageEnabled(MESSAGE.TIMER + MESSAGE.PORT)) {
            this.printIO(port, undefined, addrFrom, "PIT" + iPIT + ".TIMER" + iPITTimer, b, true);
        }
        return b;
    }

    /**
     * outTimer(iPIT, iPITTimer, port, bOut, addrFrom)
     *
     * We now rely EXCLUSIVELY on setBurstCycles() to address situations where quick timer interrupt turn-around
     * is expected; eg, by the ROM BIOS POST when it sets TIMER0 to a low test count (0x16); since we typically
     * don't update any of the timers until after we've finished a burst of CPU cycles, we must reduce the current
     * burst cycle count, so that the current instruction burst will end at the same time a timer interrupt is expected.
     *
     * @this {ChipSet}
     * @param {number} iPIT (0 or 1)
     * @param {number} iPITTimer (0, 1, or 2)
     * @param {number} port (0x40, 0x41, 0x42, etc)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     */
    outTimer(iPIT, iPITTimer, port, bOut, addrFrom)
    {
        if (this.messageEnabled(MESSAGE.TIMER + MESSAGE.PORT)) {
            this.printIO(port, bOut, addrFrom, "PIT" + iPIT + ".TIMER" + iPITTimer, undefined, true);
        }

        let iBaseTimer = (iPIT? 3 : 0);
        let timer = this.aTimers[iBaseTimer + iPITTimer];

        if (timer.countIndex == timer.countBytes) {
            this.resetTimerIndex(iBaseTimer + iPITTimer);
        }

        timer.countInit[timer.countIndex++] = bOut;

        if (timer.countIndex == timer.countBytes) {
            /**
             * In general, writing a new count to a timer that's already counting isn't supposed to affect the current
             * count, with the notable exceptions of MODE0 and MODE4.
             */
            if (!timer.fCounting || timer.mode == ChipSet.PIT_CTRL.MODE0 || timer.mode == ChipSet.PIT_CTRL.MODE4) {
                timer.fCountLatched = false;
                timer.countCurrent[0] = timer.countStart[0] = timer.countInit[0];
                timer.countCurrent[1] = timer.countStart[1] = timer.countInit[1];
                timer.nCyclesStart = this.cpu.getCycles(this.fScaleTimers);
                timer.fCounting = true;

                /**
                 * I believe MODE0 is the only mode where OUT (fOUT) starts out low (false); for the rest of the modes,
                 * OUT (fOUT) starts high (true).  It's also my understanding that the way edge-triggered interrupts work
                 * on the original PC is that an interrupt is requested only when the corresponding OUT transitions from
                 * low to high.
                 */
                timer.fOUT = (timer.mode != ChipSet.PIT_CTRL.MODE0);

                if (iPIT == ChipSet.PIT0.INDEX && iPITTimer == ChipSet.PIT0.TIMER0) {
                    /**
                     * TODO: Determine if there are situations/modes where I should NOT automatically clear IRQ0 on behalf of TIMER0.
                     */
                    this.clearIRR(ChipSet.IRQ.TIMER0);
                    let countInit = this.getTimerInit(ChipSet.PIT0.TIMER0);
                    let nCyclesRemain = (countInit * this.nTicksDivisor) | 0;
                    if (timer.mode == ChipSet.PIT_CTRL.MODE3) nCyclesRemain >>= 1;
                    this.cpu.setBurstCycles(nCyclesRemain);
                }
            }

            if (iPIT == ChipSet.PIT0.INDEX && iPITTimer == ChipSet.PIT0.TIMER2) this.setSpeaker();
        }
    }

    /**
     * inTimerCtrl(iPIT, port, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} iPIT (0 or 1)
     * @param {number} port (0x43 or 0x4B)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number|null} simulated port value
     */
    inTimerCtrl(iPIT, port, addrFrom)
    {
        this.printIO(port, undefined, addrFrom, "PIT" + iPIT + ".CTRL", undefined, MESSAGE.TIMER);
        /**
         * NOTE: Even though reads to port 0x43 are undefined (I think), I'm going to "define" it
         * as returning the last value written, purely for the Debugger's benefit.
         */
        return iPIT? this.bPIT1Ctrl : this.bPIT0Ctrl;
    }

    /**
     * outTimerCtrl(iPIT, port, bOut, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} iPIT (0 or 1)
     * @param {number} port (0x43)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     */
    outTimerCtrl(iPIT, port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "PIT" + iPIT + ".CTRL", undefined, MESSAGE.TIMER);

        /**
         * Extract the SC (Select Counter) bits.
         */
        let iBaseTimer = 0;
        let iPITTimer = (bOut & ChipSet.PIT_CTRL.SC);
        if (!iPIT) {
            this.bPIT0Ctrl = bOut;
        } else {
            iBaseTimer = 3;
            this.bPIT1Ctrl = bOut;
        }

        /**
         * Check for the Read-Back command and process as needed.
         */
        if (iPITTimer == ChipSet.PIT_CTRL.SC_BACK) {
            if (!(bOut & ChipSet.PIT_CTRL.RB_STATUS)) {
                for (iPITTimer = 0; iPITTimer <= 2; iPITTimer++) {
                    if (bOut & (ChipSet.PIT_CTRL.RB_CTR0 << iPITTimer)) {
                        this.latchTimerStatus(iBaseTimer + iPITTimer);
                    }
                }
            }
            if (!(bOut & ChipSet.PIT_CTRL.RB_COUNTS)) {
                for (iPITTimer = 0; iPITTimer <= 2; iPITTimer++) {
                    if (bOut & (ChipSet.PIT_CTRL.RB_CTR0 << iPITTimer)) {
                        this.latchTimerCount(iBaseTimer + iPITTimer);
                    }
                }
            }
            return;
        }

        /**
         * Convert the SC (Select Counter) bits into an iPITTimer index (0-2).
         */
        iPITTimer >>= ChipSet.PIT_CTRL.SC_SHIFT;

        /**
         * Extract BCD (bit 0), MODE (bits 1-3), and RW (bits 4-5), which we simply store as-is (see setTimerMode).
         */
        let bcd = (bOut & ChipSet.PIT_CTRL.BCD);
        let mode = (bOut & ChipSet.PIT_CTRL.MODE);
        let rw = (bOut & ChipSet.PIT_CTRL.RW);

        if (rw == ChipSet.PIT_CTRL.RW_LATCH) {
            /**
             * Of all the RW bit combinations, this is the only one that "countermands" normal control register
             * processing (the BCD and MODE bits are "don't care").
             */
            this.latchTimerCount(iBaseTimer + iPITTimer);
        }
        else {
            this.setTimerMode(iBaseTimer + iPITTimer, bcd, mode, rw);

            /**
             * The 5150 ROM BIOS code @F000:E285 ("TEST.7") would fail after a warm boot (eg, after a CTRL-ALT-DEL) because
             * it assumed that no TIMER0 interrupt would occur between the point it unmasked the TIMER0 interrupt and the
             * point it started reprogramming TIMER0.
             *
             * Similarly, the 5160 ROM BIOS @F000:E35D ("8253 TIMER CHECKOUT") would fail after initializing the EGA BIOS,
             * because the EGA BIOS uses TIMER0 during its diagnostics; as in the previous example, by the time the 8253
             * test code runs later, there's now a pending TIMER0 interrupt, which triggers an interrupt as soon as IRQ0 is
             * unmasked @F000:E364.
             *
             * After looking at this problem at bit more closely the second time around (while debugging the EGA BIOS),
             * it turns out I missed an important 8253 feature: whenever a new MODE0 control word OR a new MODE0 count
             * is written, fOUT (which is what drives IRQ0) goes low.  So, by simply adding an appropriate clearIRR() call
             * both here and in outTimer(), this annoying problem seems to be gone.
             *
             * TODO: Determine if there are situations/modes where I should NOT automatically clear IRQ0 on behalf of TIMER0.
             */
            if (iPIT == ChipSet.PIT0.INDEX && iPITTimer == ChipSet.PIT0.TIMER0) this.clearIRR(ChipSet.IRQ.TIMER0);

            /**
             * Another TIMER0 HACK: The "CASSETTE DATA WRAP TEST" @F000:E51E occasionally reports an error when the second of
             * two TIMER0 counts it latches is greater than the first.  You would think the ROM BIOS would expect this, since
             * TIMER0 can reload its count at any time.  Is the ROM BIOS assuming that TIMER0 was initialized sufficiently
             * recently that this should never happen?  I'm not sure, but for now, let's try resetting TIMER0's count immediately
             * after TIMER2 has been reprogrammed for the test in question (ie, when interrupts are masked and PPIB is set as
             * shown below).
             *
             * FWIW, I believe the cassette hardware was discontinued after MODEL_5150, and even if the test fails, it's non-fatal;
             * the ROM BIOS displays an error (131) and moves on.
             */
            if (iPIT == ChipSet.PIT0.INDEX && iPITTimer == ChipSet.PIT0.TIMER2) {
                let pic = this.aPICs[0];
                if (pic.bIMR == 0xff && this.bPPIB == (ChipSet.PPI_B.CLK_TIMER2 | ChipSet.PPI_B.ENABLE_SW2 | ChipSet.PPI_B.CASS_MOTOR_OFF | ChipSet.PPI_B.CLK_KBD)) {
                    let timer = this.aTimers[0];
                    timer.countStart[0] = timer.countInit[0];
                    timer.countStart[1] = timer.countInit[1];
                    timer.nCyclesStart = this.cpu.getCycles(this.fScaleTimers);
                    if (DEBUG) this.printf(MESSAGE.TIMER, "PIT0.TIMER0 count reset @%d cycles\n", timer.nCyclesStart);
                }
            }
        }
    }

    /**
     * getTimerInit(iTimer)
     *
     * @this {ChipSet}
     * @param {number} iTimer
     * @returns {number} initial timer count
     */
    getTimerInit(iTimer)
    {
        let timer = this.aTimers[iTimer];
        let countInit = (timer.countInit[1] << 8) | timer.countInit[0];
        if (!countInit) countInit = (timer.countBytes == 1? 0x100 : 0x10000);
        return countInit;
    }

    /**
     * getTimerStart(iTimer)
     *
     * @this {ChipSet}
     * @param {number} iTimer
     * @returns {number} starting timer count (from the initial timer count for the current countdown)
     */
    getTimerStart(iTimer)
    {
        let timer = this.aTimers[iTimer];
        let countStart = (timer.countStart[1] << 8) | timer.countStart[0];
        if (!countStart) countStart = (timer.countBytes == 1? 0x100 : 0x10000);
        return countStart;
    }

    /**
     * getTimerCycleLimit(iTimer, nCycles)
     *
     * This is called by the CPU to determine the maximum number of cycles it can process for the current burst.
     * It's presumed that no instructions have been executed since the last updateTimer(iTimer) call.
     *
     * @this {ChipSet}
     * @param {number} iTimer
     * @param {number} nCycles desired
     * @returns {number} maximum number of cycles remaining for the specified timer (<= nCycles)
     */
    getTimerCycleLimit(iTimer, nCycles)
    {
        let timer = this.aTimers[iTimer];
        if (timer.fCounting) {
            let nCyclesUpdate = this.cpu.getCycles(this.fScaleTimers);
            let ticksElapsed = ((nCyclesUpdate - timer.nCyclesStart) / this.nTicksDivisor) | 0;
            // DEBUG: this.assert(ticksElapsed >= 0);
            let countStart = this.getTimerStart(iTimer);
            let count = countStart - ticksElapsed;
            if (timer.mode == ChipSet.PIT_CTRL.MODE3) count -= ticksElapsed;
            // DEBUG: this.assert(count > 0);
            let nCyclesRemain = (count * this.nTicksDivisor) | 0;
            if (timer.mode == ChipSet.PIT_CTRL.MODE3) nCyclesRemain >>= 1;
            if (nCycles > nCyclesRemain) nCycles = nCyclesRemain;
        }
        return nCycles;
    }

    /**
     * latchTimerCount(iTimer)
     *
     * @this {ChipSet}
     * @param {number} iTimer
     */
    latchTimerCount(iTimer)
    {
        /**
         * Update the timer's current count.
         */
        this.updateTimer(iTimer);

        /**
         * Now we can latch it.
         */
        let timer = this.aTimers[iTimer];
        timer.countLatched[0] = timer.countCurrent[0];
        timer.countLatched[1] = timer.countCurrent[1];
        timer.fCountLatched = true;

        /**
         * VERIFY: That a latch request resets the timer index.
         */
        this.resetTimerIndex(iTimer);
    }

    /**
     * latchTimerStatus(iTimer)
     *
     * @this {ChipSet}
     * @param {number} iTimer
     */
    latchTimerStatus(iTimer)
    {
        let timer = this.aTimers[iTimer];
        if (!timer.fStatusLatched) {
            this.updateTimer(iTimer);
            timer.bStatus = timer.bcd | timer.mode | timer.rw | (timer.countIndex < timer.countBytes? ChipSet.PIT_CTRL.RB_NULL : 0) | (timer.fOUT? ChipSet.PIT_CTRL.RB_OUT : 0);
            timer.fStatusLatched = true;
        }
    }

    /**
     * setTimerMode(iTimer, bcd, mode, rw)
     *
     * FYI: After setting a timer's mode, the CPU must set the timer's count before it becomes operational;
     * ie, before fCounting becomes true.
     *
     * @this {ChipSet}
     * @param {number} iTimer
     * @param {number} bcd
     * @param {number} mode
     * @param {number} rw
     */
    setTimerMode(iTimer, bcd, mode, rw)
    {
        let timer = this.aTimers[iTimer];
        timer.rw = rw;
        timer.mode = mode;
        timer.bcd = bcd;
        timer.countInit = [0, 0];
        timer.countCurrent = [0, 0];
        timer.countLatched = [0, 0];
        timer.fOUT = false;
        timer.fCountLatched = false;
        timer.fCounting = false;
        timer.fStatusLatched = false;
        this.resetTimerIndex(iTimer);
    }

    /**
     * resetTimerIndex(iTimer)
     *
     * @this {ChipSet}
     * @param {number} iTimer
     */
    resetTimerIndex(iTimer)
    {
        let timer = this.aTimers[iTimer];
        timer.countIndex = (timer.rw == ChipSet.PIT_CTRL.RW_MSB? 1 : 0);
        timer.countBytes = (timer.rw == ChipSet.PIT_CTRL.RW_BOTH? 2 : 1);
    }

    /**
     * updateTimer(iTimer, fCycleReset)
     *
     * updateTimer() calculates and updates a timer's current count purely on an "on-demand" basis; we don't
     * actually adjust timer counters every 4 CPU cycles on a 4.77Mhz PC, since updating timers that frequently
     * would be prohibitively slow.  If you're single-stepping the CPU, then yes, updateTimer() will be called
     * after every stepCPU(), via updateAllTimers(), but if we're doing our job correctly here, the frequency
     * of calls to updateTimer() should not affect timer counts across otherwise identical runs.
     *
     * TODO: Implement support for all TIMER modes, and verify that all the modes currently implemented are
     * "up to spec"; they're close enough to make the ROM BIOS happy, but beyond that, I've done very little.
     *
     * @this {ChipSet}
     * @param {number} iTimer
     *      0: Time-of-Day interrupt (~18.2 interrupts/second)
     *      1: DMA refresh
     *      2: Sound/Cassette
     * @param {boolean} [fCycleReset] is true if a cycle-count reset is about to occur
     * @returns {Timer}
     */
    updateTimer(iTimer, fCycleReset)
    {
        let timer = this.aTimers[iTimer];

        /**
         * Every timer's counting state is gated by its own fCounting flag; TIMER2 is further gated by PPI_B's
         * CLK_TIMER2 bit.
         */
        if (timer.fCounting && (iTimer != ChipSet.PIT0.TIMER2 || (this.bPPIB & ChipSet.PPI_B.CLK_TIMER2))) {
            /**
             * We determine the current timer count based on how many instruction cycles have elapsed since we started
             * the timer.  Timers are supposed to be "ticking" at a rate of 1193181.8181 times per second, which is
             * the system clock of 14.31818Mhz, divided by 12.
             *
             * Similarly, for an 8088, there are supposed to be 4.77Mhz instruction cycles per second, which comes from
             * the system clock of 14.31818Mhz, divided by 3.
             *
             * If we divide 4,772,727 CPU cycles per second by 1,193,181 ticks per second, we get 4 cycles per tick,
             * which agrees with the ratio of the clock divisors: 12 / 3 == 4.
             *
             * However, if getCycles() is being called with fScaleTimers == true AND the CPU is running faster than its
             * base cycles-per-second setting, then getCycles() will divide the cycle count by the CPU's cycle multiplier,
             * so that the timers fire with the same real-world frequency that the user expects.  However, that will
             * break any code (eg, the ROM BIOS diagnostics) that assumes that the timers are ticking once every 4 cycles
             * (or more like every 5 cycles on a 6Mhz 80286).
             *
             * So, when using a machine with the ChipSet "scaleTimers" property set, make sure you reset the machine's
             * speed prior to rebooting, otherwise you're likely to see ROM BIOS errors.  Ditto for any application code
             * that makes similar assumptions about the relationship between CPU and timer speeds.
             *
             * In general, you're probably better off NOT using the "scaleTimers" property, and simply allowing the timers
             * to tick faster as you increase CPU speed (which is why fScaleTimers defaults to false).
             */
            let nCycles = this.cpu.getCycles(this.fScaleTimers);

            /**
             * Instead of maintaining partial tick counts, we calculate a fresh countCurrent from countStart every
             * time we're called, using the cycle count recorded when the timer was initialized.  countStart is set
             * to countInit when fCounting is first set, and then it is refreshed from countInit at the expiration of
             * every count, so that if someone loaded a new countInit in the meantime (eg, BASICA), we'll pick it up.
             *
             * For the original MODEL_5170, the number of cycles per tick is approximately 6,000,000 / 1,193,181,
             * or 5.028575, so we can no longer always divide cycles by 4 with a simple right-shift by 2.  The proper
             * divisor (eg, 4 for MODEL_5150 and MODEL_5160, 5 for MODEL_5170, etc) is nTicksDivisor, which initBus()
             * calculates using the base CPU speed returned by cpu.getBaseCyclesPerSecond().
             */
            let ticksElapsed = ((nCycles - timer.nCyclesStart) / this.nTicksDivisor) | 0;

            if (ticksElapsed < 0) {
                if (DEBUG) this.printf(MESSAGE.TIMER, "updateTimer(%d): negative tick count (%d)\n", iTimer, ticksElapsed);
                timer.nCyclesStart = nCycles;
                ticksElapsed = 0;
            }

            let countInit = this.getTimerInit(iTimer);
            let countStart = this.getTimerStart(iTimer);

            let fFired = false;
            let count = countStart - ticksElapsed;

            /**
             * NOTE: This mode is used by ROM BIOS test code that wants to verify timer interrupts are arriving
             * neither too slowly nor too quickly.  As a result, I've had to add some corresponding trickery
             * in outTimer() to force interrupt simulation immediately after a low initial count (0x16) has been set.
             */
            if (timer.mode == ChipSet.PIT_CTRL.MODE0) {
                if (count <= 0) count = 0;
                if (DEBUG) this.printf(MESSAGE.TIMER, "updateTimer(%d): MODE0 timer count=%d\n" + iTimer, count);
                if (!count) {
                    timer.fOUT = true;
                    timer.fCounting = false;
                    if (!iTimer) {
                        fFired = true;
                        this.setIRR(ChipSet.IRQ.TIMER0);
                        if (MAXDEBUG && DEBUGGER) this.acTimersFired[iTimer]++;
                    }
                }
            }
            /**
             * Early implementation of this mode was minimal because when using this mode, the ROM BIOS simply wanted
             * to see the count changing; it wasn't looking for interrupts.  See ROM BIOS "TEST.03" code @F000:E0DE,
             * where TIMER1 is programmed for MODE2, LSB (the same settings, incidentally, used immediately afterward
             * for TIMER1 in conjunction with DMA channel 0 memory refreshes).
             *
             * Now this mode generates interrupts.  Note that OUT goes low when the count reaches 1, then high
             * one tick later, at which point the count is reloaded and counting continues.
             *
             * Chances are, we will often miss the exact point at which the count becomes 1 (or more importantly,
             * one tick later, when the count *would* become 0, since that's when OUT transitions from low to high),
             * but as with MODE3, hopefully no one will mind.
             *
             * FYI, technically, it appears that the count is never supposed to reach 0, and that an initial count of 1
             * is "illegal", whatever that means.
             */
            else if (timer.mode == ChipSet.PIT_CTRL.MODE2) {
                timer.fOUT = (count != 1);          // yes, this line does seem rather pointless....
                if (count <= 0) {
                    count = countInit + count;
                    if (count <= 0) {
                        /**
                         * TODO: Consider whether we ever care about TIMER1 or TIMER2 underflow
                         */
                        if (DEBUG && !iTimer) this.printf(MESSAGE.TIMER, "updateTimer(%d): mode=2, underflow=%d\n", iTimer, count);
                        count = countInit;
                    }
                    timer.countStart[0] = count & 0xff;
                    timer.countStart[1] = (count >> 8) & 0xff;
                    timer.nCyclesStart = nCycles;
                    if (!iTimer && timer.fOUT) {
                        fFired = true;
                        this.setIRR(ChipSet.IRQ.TIMER0);
                        if (MAXDEBUG && DEBUGGER) this.acTimersFired[iTimer]++;
                    }
                }
            }
            /**
             * NOTE: This is the normal mode for TIMER0, which the ROM BIOS uses to generate h/w interrupts roughly
             * 18.2 times per second.  In this mode, the count must be decremented twice as fast (hence the extra ticks
             * subtraction below, in addition to the subtraction above), but IRQ_TIMER0 is raised only on alternate
             * iterations; ie, only when fOUT transitions to true ("high").  The equal alternating fOUT states is why
             * this mode is referred to as "square wave" mode.
             *
             * TODO: Implement the correct behavior for this mode when the count is ODD.  In that case, fOUT is supposed
             * to be "high" for (N + 1) / 2 ticks and "low" for (N - 1) / 2 ticks.
             */
            else if (timer.mode == ChipSet.PIT_CTRL.MODE3) {
                count -= ticksElapsed;
                if (count <= 0) {
                    timer.fOUT = !timer.fOUT;
                    count = countInit + count;
                    if (count <= 0) {
                        /**
                         * TODO: Consider whether we ever care about TIMER1 or TIMER2 underflow
                         */
                        if (DEBUG && !iTimer) this.printf(MESSAGE.TIMER, "updateTimer(%d): mode=3, underflow=%d\n", iTimer, count);
                        count = countInit;
                    }
                    if (MAXDEBUG && DEBUGGER && !iTimer) {
                        let nCycleDelta = 0;
                        if (this.acTimer0Counts.length > 0) nCycleDelta = nCycles - this.acTimer0Counts[0][1];
                        this.acTimer0Counts.push([count, nCycles, nCycleDelta]);
                    }
                    timer.countStart[0] = count & 0xff;
                    timer.countStart[1] = (count >> 8) & 0xff;
                    timer.nCyclesStart = nCycles;
                    if (!iTimer && timer.fOUT) {
                        fFired = true;
                        this.setIRR(ChipSet.IRQ.TIMER0);
                        if (MAXDEBUG && DEBUGGER) this.acTimersFired[iTimer]++;
                    }
                }
            }

            if (MAXDEBUG) {
                this.printf(MESSAGE.TIMER + MESSAGE.WARNING, "TIMER%d count: %d, ticks: %d, fired: %b\n", iTimer, count, ticksElapsed, fFired);
            }

            timer.countCurrent[0] = count & 0xff;
            timer.countCurrent[1] = (count >> 8) & 0xff;
            if (fCycleReset) this.nCyclesStart = 0;
        }
        return timer;
    }

    /**
     * updateAllTimers(fCycleReset)
     *
     * @this {ChipSet}
     * @param {boolean} [fCycleReset] is true if a cycle-count reset is about to occur
     */
    updateAllTimers(fCycleReset)
    {
        for (let iTimer = 0; iTimer < this.aTimers.length; iTimer++) {
            this.updateTimer(iTimer, fCycleReset);
        }
        if (this.model >= ChipSet.MODEL_5170) this.updateRTCTime();
    }

    /**
     * outMFGTest(port, bOut, addrFrom)
     *
     * This is test port on the PCjr (MODEL_4860) only.
     *
     * @this {ChipSet}
     * @param {number} port (0x10)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     */
    outMFGTest(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "MFG_TEST");
    }

    /**
     * inPPIA(port, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} port (0x60)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    inPPIA(port, addrFrom)
    {
        let b = this.bPPIA;
        if (this.bPPICtrl & ChipSet.PPI_CTRL.A_IN) {
            if (this.bPPIB & ChipSet.PPI_B.CLEAR_KBD) {
                b = this.aDIPSwitches[0][1];
            } else {
                b = this.bKbdData;
                this.printIO(port, undefined, addrFrom, "PPI_A", b, MESSAGE.KBD);
                return b;
            }
        }
        this.printIO(port, undefined, addrFrom, "PPI_A", b);
        return b;
    }

    /**
     * outPPIA(port, bOut, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} port (0x60)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     */
    outPPIA(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "PPI_A");
        this.bPPIA = bOut;
    }

    /**
     * inPPIB(port, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} port (0x61)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    inPPIB(port, addrFrom)
    {
        let b = this.bPPIB;
        this.printIO(port, undefined, addrFrom, "PPI_B", b);
        return b;
    }

    /**
     * outPPIB(port, bOut, addrFrom)
     *
     * This is the original (MODEL_5150 and MODEL_5160) handler for port 0x61.  Functionality common
     * to all models must be placed in updatePPIB().
     *
     * @this {ChipSet}
     * @param {number} port (0x61)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     */
    outPPIB(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "PPI_B");
        this.updatePPIB(bOut);
    }

    /**
     * updatePPIB(bOut)
     *
     * On MODEL_5170 and up, this updates the "simulated" PPI_B.  The only common (and well-documented) PPI_B bits
     * across all models are PPI_B.CLK_TIMER2 and PPI_B.SPK_TIMER2, so its possible that this function may need to
     * limit its updates to just those bits, and move any model-specific requirements back into the appropriate I/O
     * handlers (PPIB or 8042RWReg).  We'll see.
     *
     * UPDATE: The WOLF3D keyboard interrupt handler toggles the CLEAR_KBD bit of port 0x61 (ie, it sets and then
     * clears the bit) after reading the scan code from port 0x60; assuming that they use the same interrupt handler
     * for all machine models (which I haven't verified), the clear implication is that updatePPIB() also needs to
     * support CLEAR_KBD and CLK_KBD, so I've moved that code from outPPIB() to updatePPIB().
     *
     * @this {ChipSet}
     * @param {number} bOut
     */
    updatePPIB(bOut)
    {
        let toggled = (bOut ^ this.bPPIB);
        if (toggled & ChipSet.PPI_B.CLK_TIMER2) {
            /**
             * If TIMER2 is about to be "declocked", then we should update the timer NOW, because any attempt to read
             * timer's count AFTER it has been declocked will not trigger an update.  This was a problem for the following
             * code in SUPERPCK.EXE from DR DOS 6.00:
             *
             *      &10AE:C863 E461             IN       AL,61
             *      &10AE:C865 24FC             AND      AL,FC
             *      &10AE:C867 8AE0             MOV      AH,AL
             *      &10AE:C869 E661             OUT      61,AL              ; PPI_B: disable CLK_TIMER2 and SPK_TIMER2
             *      &10AE:C86B B0B4             MOV      AL,B4
             *      &10AE:C86D E643             OUT      43,AL              : PIT_CTRL: MODE2, RW_BOTH, SC_CTR2
             *      &10AE:C86F 32C0             XOR      AL,AL
             *      &10AE:C871 E642             OUT      42,AL
             *      &10AE:C873 EB00             JMP      C875 (SUPERPCK.EXE+0x745B)
             *      &10AE:C875 E642             OUT      42,AL
             *      &10AE:C877 B90010           MOV      CX,1000
             *      &10AE:C87A 8AC4             MOV      AL,AH
             *      &10AE:C87C 0C01             OR       AL,01
             *      &10AE:C87E E661             OUT      61,AL              ; PPI_B: enable CLK_TIMER2
             *      &10AE:C880 E2FE             LOOP     C880 (SUPERPCK.EXE+0x7469)
             *      &10AE:C882 8AC4             MOV      AL,AH
             *      &10AE:C884 E661             OUT      61,AL              ; PPI_B: disable CLK_TIMER2 again
             *      &10AE:C886 E442             IN       AL,42              ; PIT_TIMER2: read count (without, um, latching)
             *      &10AE:C888 8AE0             MOV      AH,AL
             *      &10AE:C88A E442             IN       AL,42
             *      &10AE:C88C 86C4             XCHG     AL,AH
             *      &10AE:C88E F7D8             NEG      AX
             *      &10AE:C890 8BD8             MOV      BX,AX
             *      &10AE:C892 B80010           MOV      AX,1000
             *      &10AE:C895 33D2             XOR      DX,DX
             *      &10AE:C897 F7F3             DIV      BX                 ; potential divide-by-zero if TIMER2 count was zero
             *
             * Another interesting but unrelated problem is that DR DOS's divide-by-zero exception handler was pointing
             * to 0F71:258C at this point, which contained invalid code.  The code was valid when the handler was first set,
             * but it was later discarded or relocated and then overwritten.
             */
            if (!(bOut & ChipSet.PPI_B.CLK_TIMER2)) {
                this.updateTimer(ChipSet.PIT0.TIMER2);
            }
        }
        this.bPPIB = bOut;
        if (toggled & ChipSet.PPI_B.SPK_TIMER2) {
            /**
             * Originally, this code didn't catch the "ERROR_BEEP" case @F000:EC34, which first turns both PPI_B.CLK_TIMER2 (0x01)
             * and PPI_B.SPK_TIMER2 (0x02) off, then turns on only PPI_B.SPK_TIMER2 (0x02), then restores the original port value.
             *
             * So, when the ROM BIOS keyboard buffer got full, we didn't issue a BEEP alert.  I've fixed that by limiting the test
             * to PPI_B.SPK_TIMER2 and ignoring PPI_B.CLK_TIMER2.
             */
            this.setSpeaker(bOut & ChipSet.PPI_B.SPK_TIMER2);
        }
        if (this.kbd) this.kbd.setEnabled(!(bOut & ChipSet.PPI_B.CLEAR_KBD), !!(bOut & ChipSet.PPI_B.CLK_KBD));
    }

    /**
     * inPPIC(port, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} port (0x62)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    inPPIC(port, addrFrom)
    {
        let b = 0;

        /**
         * If you ever wanted to simulate I/O channel errors or R/W memory parity errors, you could
         * add either PPI_C.IO_CHANNEL_CHK (0x40) or PPI_C.RW_PARITY_CHK (0x80) to the return value (b).
         */
        if ((this.model|0) == ChipSet.MODEL_4860) {
            b |= this.bNMI & ChipSet.NMI.KBD_LATCH;
            /**
             * We're going to hard-code the rest of the PCjr settings for now, including NOT setting the NO_KBD_CABLE
             * bit, on the theory that if we don't have to deal with IR hardware emulation, so much the better.
             */
            b |= ChipSet.PPI_C.NO_MODEM | ChipSet.PPI_C.NO_DISKETTE | ChipSet.PPI_C.NO_MEMEXP;
            /**
             * I'm just guessing at how keyboard data is "clocked" into the the KBD_DATA bit; this will be revisited.
             */
            b |= (this.bKbdData & 0x1)? ChipSet.PPI_C.KBD_DATA : 0;
            this.bKbdData >>>= 1;
        }
        else if ((this.model|0) == ChipSet.MODEL_5150) {
            if (this.bPPIB & ChipSet.PPI_B.ENABLE_SW2) {
                b |= this.aDIPSwitches[1][1] & ChipSet.PPI_C.SW;
            } else {
                b |= (this.aDIPSwitches[1][1] >> 4) & 0x1;
            }
        } else {
            if (this.bPPIB & ChipSet.PPI_B.ENABLE_SW_HI) {
                b |= this.aDIPSwitches[0][1] >> 4;
            } else {
                b |= this.aDIPSwitches[0][1] & 0xf;
            }
        }

        if (this.bPPIB & ChipSet.PPI_B.CLK_TIMER2) {
            let timer = this.updateTimer(ChipSet.PIT0.TIMER2);
            if (timer.fOUT) {
                if (this.bPPIB & ChipSet.PPI_B.SPK_TIMER2) {
                    b |= ChipSet.PPI_C.TIMER2_OUT;
                } else {
                    b |= ChipSet.PPI_C.CASS_DATA_IN;
                }
            }
        }

        /**
         * The ROM BIOS polls this port incessantly during its memory tests, checking for memory parity errors
         * (which of course we never report), so you must use both MESSAGE.PORT and MESSAGE.CHIPSET.
         */
        this.printIO(port, undefined, addrFrom, "PPI_C", b, MESSAGE.CHIPSET);
        return b;
    }

    /**
     * outPPIC(port, bOut, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} port (0x62)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     */
    outPPIC(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "PPI_C");
        this.bPPIC = bOut;
    }

    /**
     * inPPICtrl(port, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} port (0x63)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    inPPICtrl(port, addrFrom)
    {
        let b = this.bPPICtrl;
        this.printIO(port, undefined, addrFrom, "PPI_CTRL", b);
        return b;
    }

    /**
     * outPPICtrl(port, bOut, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} port (0x63)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined if the Debugger is trying to write the specified port)
     */
    outPPICtrl(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "PPI_CTRL");
        this.bPPICtrl = bOut;
    }

    /**
     * in8041Kbd(port, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} port (0x60)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    in8041Kbd(port, addrFrom)
    {
        let b = this.bKbdData;
        this.printIO(port, undefined, addrFrom, "8041_KBD", b, MESSAGE.KBD);
        this.b8041Status &= ~ChipSet.C8042.STATUS.OUTBUFF_FULL;
        return b;
    }

    /**
     * out8041Kbd(port, bOut, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} port (0x60)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     */
    out8041Kbd(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "8041_KBD");
        // if (this.kbd) this.kbd.receiveCmd(bOut);
    }

    /**
     * in8041Ctrl(port, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} port (0x61)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    in8041Ctrl(port, addrFrom)
    {
        let b = this.bPPIB;
        this.printIO(port, undefined, addrFrom, "8041_CTRL", b);
        return b;
    }

    /**
     * out8041Ctrl(port, bOut, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} port (0x61)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     */
    out8041Ctrl(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "8041_CTRL");
        this.updatePPIB(bOut);
    }

    /**
     * in8041Status(port, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} port (0x64)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    in8041Status(port, addrFrom)
    {
        let b = this.b8041Status;
        this.printIO(port, undefined, addrFrom, "8041_STATUS", b);
        return b;
    }

    /**
     * in8042OutBuff(port, addrFrom)
     *
     * Return the contents of the OUTBUFF register and clear the OUTBUFF_FULL status bit.
     *
     * Moreover, we also call kbd.checkBuffer() to let the Keyboard know that we just pulled
     * data, so that it can reset its internal timer controlling the delivery of additional data.
     *
     * Note that there are applications like BASICA that install a keyboard interrupt handler
     * that reads OUTBUFF, does some scan code preprocessing, and then passes control on to the
     * ROM's interrupt handler.  As a result, OUTBUFF is read multiple times during a single
     * interrupt, so we need to avoid filling it with new data after every read; otherwise,
     * scan codes will get dropped.
     *
     * The safest thing to do is to wait until kbd.setEnabled() is called, and let that call supply
     * more data to receiveKbdData().  That will happen as soon as the ROM re-enables the controller,
     * and is why C8042.CMD.ENABLE_KBD processing ends with a call to kbd.checkBuffer().  However,
     * not all software (eg, Xenix 286, and the Windows 95 VMM) does that, so we have to rely on
     * the Keyboard's internal timer.
     *
     * Also note that, the foregoing notwithstanding, I still clear the OUTBUFF_FULL bit here
     * (as I believe I should); fortunately, none of the interrupt handlers I've seen rely on
     * OUTBUFF_FULL as a prerequisite for reading OUTBUFF (certainly not BASICA or the ROM).
     * The assumption seems to be that if an interrupt occurred, OUTBUFF must contain data,
     * regardless of the state of OUTBUFF_FULL.
     *
     * @this {ChipSet}
     * @param {number} port (0x60)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    in8042OutBuff(port, addrFrom)
    {
        let b = this.b8042OutBuff;
        this.printIO(port, undefined, addrFrom, "8042_OUTBUFF", b, MESSAGE.C8042);
        this.b8042Status &= ~(ChipSet.C8042.STATUS.OUTBUFF_FULL | ChipSet.C8042.STATUS.OUTBUFF_DELAY);
        if (this.kbd) this.kbd.checkBuffer(b);
        return b;
    }

    /**
     * out8042InBuffData(port, bOut, addrFrom)
     *
     * This writes to the 8042's input buffer; using this port (ie, 0x60 instead of 0x64) designates the
     * the byte as a C8042.DATA.CMD "data byte".  Before clearing C8042.STATUS.CMD_FLAG, however, we see if it's set,
     * and then based on the previous C8042.CMD "command byte", we do whatever needs to be done with this "data byte".
     *
     * @this {ChipSet}
     * @param {number} port (0x60)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined if the Debugger is trying to write the specified port)
     */
    out8042InBuffData(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "8042_INBUF.DATA", undefined, MESSAGE.C8042);

        if (this.b8042Status & ChipSet.C8042.STATUS.CMD_FLAG) {

            switch (this.b8042InBuff) {

            case ChipSet.C8042.CMD.WRITE_CMD:
                this.set8042CmdData(bOut);
                break;

            case ChipSet.C8042.CMD.WRITE_OUTPORT:
                this.set8042OutPort(bOut);
                break;

            /**
             * This case is reserved for command bytes that the 8042 is not expecting, which should therefore be passed
             * on to the Keyboard itself.
             *
             * Here's some relevant MODEL_5170 ROM BIOS code, "XMIT_8042" (missing from the original MODEL_5170 ROM BIOS
             * listing), which sends a command code in AL to the Keyboard and waits for a response, returning it in AL.
             * Note that the only "success" exit path from this function involves LOOPing 64K times before finally reading
             * the Keyboard's response; either the hardware and/or this code seems a bit brain-damaged if that's REALLY
             * what you had to do to ensure a valid response....
             *
             *      F000:1B25 86E0          XCHG     AH,AL
             *      F000:1B27 2BC9          SUB      CX,CX
             *      F000:1B29 E464          IN       AL,64
             *      F000:1B2B A802          TEST     AL,02      ; WAIT FOR INBUFF_FULL TO BE CLEAR
             *      F000:1B2D E0FA          LOOPNZ   1B29
             *      F000:1B2F E334          JCXZ     1B65       ; EXIT WITH ERROR (CX == 0)
             *      F000:1B31 86E0          XCHG     AH,AL
             *      F000:1B33 E660          OUT      60,AL      ; SAFE TO WRITE KEYBOARD CMD TO INBUFF NOW
             *      F000:1B35 2BC9          SUB      CX,CX
             *      F000:1B37 E464          IN       AL,64
             *      F000:1B39 8AE0          MOV      AH,AL
             *      F000:1B3B A801          TEST     AL,01
             *      F000:1B3D 7402          JZ       1B41
             *      F000:1B3F E460          IN       AL,60      ; READ PORT 0x60 IF OUTBUFF_FULL SET ("FLUSH"?)
             *      F000:1B41 F6C402        TEST     AH,02
             *      F000:1B44 E0F1          LOOPNZ   1B37
             *      F000:1B46 751D          JNZ      1B65       ; EXIT WITH ERROR (CX == 0)
             *      F000:1B48 B306          MOV      BL,06
             *      F000:1B4A 2BC9          SUB      CX,CX
             *      F000:1B4C E464          IN       AL,64
             *      F000:1B4E A801          TEST     AL,01
             *      F000:1B50 E1FA          LOOPZ    1B4C
             *      F000:1B52 7508          JNZ      1B5C       ; PROCEED TO EXIT NOW THAT OUTBUFF_FULL IS SET
             *      F000:1B54 FECB          DEC      BL
             *      F000:1B56 75F4          JNZ      1B4C
             *      F000:1B58 FEC3          INC      BL
             *      F000:1B5A EB09          JMP      1B65       ; EXIT WITH ERROR (CX == 0)
             *      F000:1B5C 2BC9          SUB      CX,CX
             *      F000:1B5E E2FE          LOOP     1B5E       ; LOOOOOOPING....
             *      F000:1B60 E460          IN       AL,60
             *      F000:1B62 83E901        SUB      CX,0001    ; EXIT WITH SUCCESS (CX != 0)
             *      F000:1B65 C3            RET
             *
             * But WAIT, the FUN doesn't end there.  After this function returns, "KBD_RESET" waits for a Keyboard
             * interrupt to occur, hoping for scan code 0xAA as the Keyboard's final response.  "KBD_RESET" also returns
             * CX to the caller, and the caller ("TEST.21") assumes there was no interrupt if CX is zero.
             *
             *              MOV     AL,0FDH
             *              OUT     INTA01,AL
             *              MOV     INTR_FLAG,0
             *              STI
             *              MOV     BL,10
             *              SUB     CX,CX
             *      G11:    TEST    [1NTR_FLAG],02H
             *              JNZ     G12
             *              LOOP    G11
             *              DEC     BL
             *              JNZ     G11
             *              ...
             *
             * However, if [INTR_FLAG] is set immediately, the above code will exit immediately, without ever decrementing
             * CX.  CX can be zero not only if the loop exhausted it, but also if no looping was required; the latter is not
             * an error, but "TEST.21" assumes that it is.
             */
            default:
                this.set8042CmdData(this.b8042CmdData & ~ChipSet.C8042.DATA.CMD.NO_CLOCK);
                if (this.kbd) this.set8042OutBuff(this.kbd.receiveCmd(bOut));
                break;
            }
        }
        this.b8042InBuff = bOut;
        this.b8042Status &= ~ChipSet.C8042.STATUS.CMD_FLAG;
    }

    /**
     * in8042RWReg(port, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} port (0x61)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    in8042RWReg(port, addrFrom)
    {
        /**
         * Normally, we return whatever was last written to this port, but we do need to mask the
         * two upper-most bits (C8042.RWREG.NMI_ERROR), as those are output-only bits used to signal
         * parity errors.
         *
         * Also, "TEST.09" of the MODEL_5170 BIOS expects the REFRESH_BIT to alternate, so we used to
         * do this:
         *
         *      this.bPPIB ^= ChipSet.C8042.RWREG.REFRESH_BIT;
         *
         * However, the MODEL_5170_REV3 BIOS not only checks REFRESH_BIT in "TEST.09", but includes
         * an additional test right before "TEST.11A", which requires the bit change "a bit less"
         * frequently.  This new test sets CX to zero, and at the end of the test (@F000:05B8), CX
         * must be in the narrow range of 0xF600 through 0xF9FD.
         *
         * In fact, the new "WAITF" function @F000:1A3A tells us exactly how frequently REFRESH_BIT
         * is expected to change now.  That function performs a "FIXED TIME WAIT", where CX is a
         * "COUNT OF 15.085737us INTERVALS TO WAIT".
         *
         * So we now tie the state of the REFRESH_BIT to bit 6 of the current CPU cycle count,
         * effectively toggling the bit after every 64 cycles.  On an 8Mhz CPU that can do 8 cycles
         * in 1us, 64 cycles represents 8us, so that might be a bit fast for "WAITF", but bit 6
         * is the only choice that also satisfies the pre-"TEST.11A" test as well.
         */
        let b = this.bPPIB & ~(ChipSet.C8042.RWREG.NMI_ERROR | ChipSet.C8042.RWREG.REFRESH_BIT) | ((this.cpu.getCycles() & 0x40)? ChipSet.C8042.RWREG.REFRESH_BIT : 0);
        /**
         * Thanks to the WAITF function, this has become a very "busy" port, so if this generates too
         * many messages, try adding MESSAGE.WARNING to the criteria.
         */
        this.printIO(port, undefined, addrFrom, "8042_RWREG", b, MESSAGE.C8042 + MESSAGE.WARNING);
        return b;
    }

    /**
     * out8042RWReg(port, bOut, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} port (0x61)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     */
    out8042RWReg(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "8042_RWREG", undefined, MESSAGE.C8042);
        this.updatePPIB(bOut);
    }

    /**
     * in8042Status(port, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} port (0x64)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    in8042Status(port, addrFrom)
    {
        this.printIO(port, undefined, addrFrom, "8042_STATUS", this.b8042Status, MESSAGE.C8042);
        let b = this.b8042Status & 0xff;
        /**
         * There's code in the 5170 BIOS (F000:03BF) that writes an 8042 command (0xAA), waits for
         * C8042.STATUS.INBUFF_FULL to go clear (which it always is, because we always accept commands
         * immediately), then checks C8042.STATUS.OUTBUFF_FULL and performs a "flush" on port 0x60 if
         * it's set, then waits for C8042.STATUS.OUTBUFF_FULL *again*.  Unfortunately, the "flush" throws
         * away our response if we respond immediately.
         *
         * So now when out8042InBuffCmd() has a response, it sets C8042.STATUS.OUTBUFF_DELAY instead
         * (which is outside the 0xff range of bits we return); when we see C8042.STATUS.OUTBUFF_DELAY,
         * we clear it and set C8042.STATUS.OUTBUFF_FULL, which will be returned on the next read.
         *
         * This provides a single poll delay, so that the aforementioned "flush" won't toss our response.
         * If longer delays are needed down the road, we may need to set a delay count in the upper (unused)
         * bits of b8042Status, instead of using a single delay bit.
         */
        if (this.b8042Status & ChipSet.C8042.STATUS.OUTBUFF_DELAY) {
            this.b8042Status |= ChipSet.C8042.STATUS.OUTBUFF_FULL;
            this.b8042Status &= ~ChipSet.C8042.STATUS.OUTBUFF_DELAY;
        }
        /**
         * I added this for Windows 95's VMM keyboard driver for DOS sessions, which differs from the keyboard
         * driver for protected-mode applications (see the keyboard's setEnabled() function for more details).
         *
         * The Windows 95 VMM driver doesn't do what EITHER the ROM or the protected-mode driver typically does
         * after receiving a scan code (ie, toggle the keyboard's enable state).  Instead, the VMM simply checks
         * this status port one more time, perhaps to confirm that the OUTBUFF_FULL bit is clear.  It then
         * expects another keyboard interrupt to arrive when the next scan code is available.  Very minimalistic.
         */
        if (!(this.b8042Status & ChipSet.C8042.STATUS.OUTBUFF_FULL) && this.kbd) {
            this.kbd.checkBuffer();
        }
        return b;
    }

    /**
     * out8042InBuffCmd(port, bOut, addrFrom)
     *
     * This writes to the 8042's input buffer; using this port (ie, 0x64 instead of 0x60) designates the
     * the byte as a "command byte".  We immediately set C8042.STATUS.CMD_FLAG, and then see if we can act upon
     * the command immediately (some commands requires us to wait for a "data byte").
     *
     * @this {ChipSet}
     * @param {number} port (0x64)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined if the Debugger is trying to write the specified port)
     */
    out8042InBuffCmd(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "8042_INBUFF.CMD", undefined, MESSAGE.C8042);
        this.assert(!(this.b8042Status & ChipSet.C8042.STATUS.INBUFF_FULL));
        this.b8042InBuff = bOut;

        this.b8042Status |= ChipSet.C8042.STATUS.CMD_FLAG;

        let bPulseBits = 0;
        if (this.b8042InBuff >= ChipSet.C8042.CMD.PULSE_OUTPORT) {
            bPulseBits = (this.b8042InBuff ^ 0xf);
            /**
             * Now that we have isolated the bit(s) to pulse, map all pulse commands to C8042.CMD.PULSE_OUTPORT
             */
            this.b8042InBuff = ChipSet.C8042.CMD.PULSE_OUTPORT;
        }

        switch (this.b8042InBuff) {
        case ChipSet.C8042.CMD.READ_CMD:        // 0x20
            this.set8042OutBuff(this.b8042CmdData);
            break;

        case ChipSet.C8042.CMD.WRITE_CMD:       // 0x60
            /**
             * No further action required for this command; more data is expected via out8042InBuffData()
             */
            break;

        case ChipSet.C8042.CMD.DISABLE_KBD:     // 0xAD
            this.set8042CmdData(this.b8042CmdData | ChipSet.C8042.DATA.CMD.NO_CLOCK);
            if (!COMPILED) this.printf(MESSAGE.KBD + MESSAGE.PORT, "keyboard disabled\n");
            /**
             * NOTE: The MODEL_5170 BIOS calls "KBD_RESET" (F000:17D2) while the keyboard interface is disabled,
             * yet we must still deliver the Keyboard's CMDRES.BAT_OK response code?  Seems like an odd thing for
             * a "disabled interface" to do.
             */
            break;

        case ChipSet.C8042.CMD.ENABLE_KBD:      // 0xAE
            this.set8042CmdData(this.b8042CmdData & ~ChipSet.C8042.DATA.CMD.NO_CLOCK);
            if (!COMPILED) this.printf(MESSAGE.KBD + MESSAGE.PORT, "keyboard re-enabled\n");
            if (this.kbd) this.kbd.checkBuffer();
            break;

        case ChipSet.C8042.CMD.SELF_TEST:       // 0xAA
            if (this.kbd) this.kbd.flushBuffer();
            this.set8042CmdData(this.b8042CmdData | ChipSet.C8042.DATA.CMD.NO_CLOCK);
            if (!COMPILED) this.printf(MESSAGE.KBD + MESSAGE.PORT, "keyboard disabled on reset\n");
            this.set8042OutBuff(ChipSet.C8042.DATA.SELF_TEST.OK);
            this.set8042OutPort(ChipSet.C8042.OUTPORT.NO_RESET | ChipSet.C8042.OUTPORT.A20_ON);
            break;

        case ChipSet.C8042.CMD.INTF_TEST:       // 0xAB
            /**
             * TODO: Determine all the side-effects of the Interface Test, if any.
             */
            this.set8042OutBuff(ChipSet.C8042.DATA.INTF_TEST.OK);
            break;

        case ChipSet.C8042.CMD.READ_INPORT:     // 0xC0
            this.set8042OutBuff(this.b8042InPort);
            break;

        case ChipSet.C8042.CMD.READ_OUTPORT:    // 0xD0
            this.set8042OutBuff(this.b8042OutPort);
            break;

        case ChipSet.C8042.CMD.WRITE_OUTPORT:   // 0xD1
            /**
             * No further action required for this command; more data is expected via out8042InBuffData()
             */
            break;

        case ChipSet.C8042.CMD.READ_TEST:       // 0xE0
            this.set8042OutBuff((this.b8042CmdData & ChipSet.C8042.DATA.CMD.NO_CLOCK)? 0 : ChipSet.C8042.TESTPORT.KBD_CLOCK);
            break;

        case ChipSet.C8042.CMD.PULSE_OUTPORT:   // 0xF0-0xFF
            if (bPulseBits & 0x1) {
                /**
                 * Bit 0 of the 8042's output port is connected to RESET.  If it's pulsed, the processor resets.
                 * We don't want to clear *all* CPU state (eg, cycle counts), so we call cpu.resetRegs() instead
                 * of cpu.reset().
                 */
                this.cpu.resetRegs();
            }
            break;

        default:
            if (!COMPILED) {
                this.printf(MESSAGE.LOG, "unrecognized 8042 command: %#04X\n", this.b8042InBuff);
                // if (this.dbg) this.dbg.stopCPU();
            }
            break;
        }
    }

    /**
     * set8042CmdData(b)
     *
     * @this {ChipSet}
     * @param {number} b
     */
    set8042CmdData(b)
    {
        this.b8042CmdData = b;
        this.assert(ChipSet.C8042.DATA.CMD.SYS_FLAG === ChipSet.C8042.STATUS.SYS_FLAG);
        this.b8042Status = (this.b8042Status & ~ChipSet.C8042.STATUS.SYS_FLAG) | (b & ChipSet.C8042.DATA.CMD.SYS_FLAG);
        if (this.kbd) {
            /**
             * This seems to be what the doctor ordered for the MODEL_5170_REV3 BIOS @F000:0A6D, where it
             * sends ChipSet.C8042.CMD.WRITE_CMD to port 0x64, followed by 0x4D to port 0x60, which clears NO_CLOCK
             * and enables the keyboard.  The BIOS then waits for OUTBUFF_FULL to be set, at which point it seems
             * to be anticipating an 0xAA response in the output buffer.
             *
             * And indeed, if we call the original MODEL_5150/MODEL_5160 setEnabled() Keyboard interface here,
             * and both the data and clock lines have transitioned high (ie, both parameters are true), then it
             * will call resetDevice(), generating a Keyboard.CMDRES.BAT_OK response.
             *
             * This agrees with my understanding of what happens when the 8042 toggles the clock line high
             * (ie, clears NO_CLOCK): the TechRef's "Basic Assurance Test" section says that when the Keyboard is
             * powered on, it performs the BAT, and then when the clock and data lines go high, the keyboard sends
             * a completion code (eg, 0xAA for success, or 0xFC or something else for failure).
             */
            this.kbd.setEnabled(!!(b & ChipSet.C8042.DATA.CMD.NO_INHIBIT), !(b & ChipSet.C8042.DATA.CMD.NO_CLOCK));
        }
    }

    /**
     * set8042OutBuff(b, fNoDelay)
     *
     * The 5170 ROM BIOS assumed there would be a slight delay after certain 8042 commands, like SELF_TEST
     * (0xAA), before there was an OUTBUFF response; in fact, there is BIOS code that will fail without such
     * a delay.  This is discussed in greater detail in in8042Status().
     *
     * So we default to a "single poll" delay, setting OUTBUFF_DELAY instead of OUTBUFF_FULL, unless the caller
     * explicitly asks for no delay.  The fNoDelay parameter was added later, so that receiveKbdData() could
     * request immediate delivery of keyboard scan codes, because some operating systems (eg, Microport's 1986
     * version of Unix for PC AT machines) poll the status port only once, immediately giving up if no data is
     * available.
     *
     * TODO: Determine if we should invert the fNoDelay default (from false to true) and delay only in specific
     * cases; ie, perhaps only the SELF_TEST command required a delay.
     *
     * @this {ChipSet}
     * @param {number} b
     * @param {boolean} [fNoDelay]
     */
    set8042OutBuff(b, fNoDelay)
    {
        if (b >= 0) {
            this.b8042OutBuff = b;
            if (fNoDelay) {
                this.b8042Status |= ChipSet.C8042.STATUS.OUTBUFF_FULL;
            } else {
                this.b8042Status &= ~ChipSet.C8042.STATUS.OUTBUFF_FULL;
                this.b8042Status |= ChipSet.C8042.STATUS.OUTBUFF_DELAY;
            }
            if (!COMPILED) this.printf(MESSAGE.KBD + MESSAGE.PORT, "chipset.set8042OutBuff(%#04X,delay=%b)\n", b, !fNoDelay);
        }
    }

    /**
     * set8042OutPort(b)
     *
     * When ChipSet.C8042.CMD.WRITE_OUTPORT (0xD1) is written to port 0x64, the next byte written to port 0x60 comes here,
     * to the KBC's OUTPORT.  One of the most important bits in the OUTPORT is the A20_ON bit (0x02): set it to turn A20 on,
     * clear it to turn A20 off.
     *
     * @this {ChipSet}
     * @param {number} b
     */
    set8042OutPort(b)
    {
        this.b8042OutPort = b;

        this.bus.setA20(!!(b & ChipSet.C8042.OUTPORT.A20_ON));

        if (!(b & ChipSet.C8042.OUTPORT.NO_RESET)) {
            /**
             * Bit 0 of the 8042's output port is connected to RESET.  Normally, it's "pulsed" with the
             * C8042.CMD.PULSE_OUTPORT command, so if a RESET is detected via this command, we should try to
             * determine if that's what the caller intended.
             */
            if (!COMPILED) {
                this.printf(MESSAGE.NONE, "unexpected 8042 output port reset: %#04X\n", b);
                if (this.dbg) this.dbg.stopCPU();
            }
            this.cpu.resetRegs();
        }
    }

    /**
     * receiveKbdData(b)
     *
     * In the old days of PCx86, the Keyboard component would simply call setIRR() when it had some data for the
     * keyboard controller.  However, the Keyboard's sole responsibility is to emulate an actual keyboard and call
     * receiveKbdData() whenever it has some data; it's not allowed to mess with IRQ lines.
     *
     * If there's an 8042, we check (this.b8042CmdData & ChipSet.C8042.DATA.CMD.NO_CLOCK); if NO_CLOCK is clear,
     * we can raise the IRQ immediately.  Well, not quite immediately....
     *
     * Notes regarding the MODEL_5170 (eg, /devices/pc/machine/5170/ega/1152kb/rev3/machine.xml):
     *
     * The "Rev3" BIOS, dated 11-Nov-1985, contains the following code in the keyboard interrupt handler at K26A:
     *
     *      F000:3704 FA            CLI
     *      F000:3705 B020          MOV      AL,20
     *      F000:3707 E620          OUT      20,AL
     *      F000:3709 B0AE          MOV      AL,AE
     *      F000:370B E88D02        CALL     SHIP_IT
     *      F000:370E FA            CLI                     <-- window of opportunity
     *      F000:370F 07            POP      ES
     *      F000:3710 1F            POP      DS
     *      F000:3711 5F            POP      DI
     *      F000:3712 5E            POP      SI
     *      F000:3713 5A            POP      DX
     *      F000:3714 59            POP      CX
     *      F000:3715 5B            POP      BX
     *      F000:3716 58            POP      AX
     *      F000:3717 5D            POP      BP
     *      F000:3718 CF            IRET
     *
     * and SHIP_IT looks like this:
     *
     *      F000:399B 50            PUSH     AX
     *      F000:399C FA            CLI
     *      F000:399D 2BC9          SUB      CX,CX
     *      F000:399F E464          IN       AL,64
     *      F000:39A1 A802          TEST     AL,02
     *      F000:39A3 E0FA          LOOPNZ   399F
     *      F000:39A5 58            POP      AX
     *      F000:39A6 E664          OUT      64,AL
     *      F000:39A8 FB            STI
     *      F000:39A9 C3            RET
     *
     * This code *appears* to be trying to ensure that another keyboard interrupt won't occur until after the IRET,
     * but sadly, it looks to me like the CLI following the call to SHIP_IT is too late.  SHIP_IT should have been
     * written with PUSHF/CLI and POPF intro/outro sequences, thereby honoring the first CLI at the top of K26A and
     * eliminating the need for the second CLI (@F000:370E).
     *
     * Of course, in "real life", this was probably never a problem, because the 8042 probably wasn't fast enough to
     * generate another interrupt so soon after receiving the ChipSet.C8042.CMD.ENABLE_KBD command.  In my case, I ran
     * into this problem by 1) turning on "kbd" Debugger messages and 2) rapidly typing lots of keys.  The Debugger
     * messages bogged the machine down enough for me to hit the "window of opportunity", generating this message in
     * PC-DOS 3.20:
     *
     *      "FATAL: Internal Stack Failure, System Halted."
     *
     * and halting the system @0070:0923 (JMP 0923).
     *
     * That wasn't the only spot in the BIOS where I hit this problem; here's another "window of opportunity":
     *
     *      F000:3975 FA            CLI
     *      F000:3976 B020          MOV      AL,20
     *      F000:3978 E620          OUT      20,AL
     *      F000:397A B0AE          MOV      AL,AE
     *      F000:397C E81C00        CALL     SHIP_IT
     *      F000:397F B80291        MOV      AX,9102        <-- window of opportunity
     *      F000:3982 CD15          INT      15
     *      F000:3984 80269600FC    AND      [0096],FC
     *      F000:3989 E982FD        JMP      370E
     *
     * In this second, lengthier, example, I counted about 60 instructions being executed from the EOI @F000:3978 to
     * the final IRET @F000:3718, most of them in the INT 0x15 handler.  So, I'm going to double that count to 120
     * instructions, just to be safe, and pass that along to every setIRR() call we make here.
     *
     * @this {ChipSet}
     * @param {number} b
     * @returns {boolean} (true if data accepted, false if declined)
     */
    receiveKbdData(b)
    {
        if (!COMPILED) this.printf(MESSAGE.KBD + MESSAGE.PORT, "chipset.receiveKbdData(%#04X)\n", b);
        if (this.model == ChipSet.MODEL_4860) {
            if (!(this.bNMI & ChipSet.NMI.KBD_LATCH)) {
                this.bNMI |= ChipSet.NMI.KBD_LATCH;
                this.bKbdData = b;
                if (b && (this.bNMI & ChipSet.NMI.ENABLE)) {
                    X86.helpInterrupt.call(this.cpu, X86.EXCEPTION.NMI);
                }
                return true;
            }
            return false;
        }
        if (this.model < ChipSet.MODEL_5170) {
            if (this.bPPIB & ChipSet.PPI_B.CLK_KBD) {
                this.bKbdData = b;
                if (b) {
                    this.setIRR(ChipSet.IRQ.KBD, 120);
                    this.b8041Status |= ChipSet.C8042.STATUS.OUTBUFF_FULL;
                }
                return true;
            }
            return false;
        }
        if (b) {
            if (!(this.b8042CmdData & ChipSet.C8042.DATA.CMD.NO_CLOCK)) {
                /**
                 * The next in8042OutBuff() will clear both of these bits and call kbd.checkBuffer(),
                 * which will call receiveKbdData() again if there's still keyboard data to process.
                 */
                if (!(this.b8042Status & (ChipSet.C8042.STATUS.OUTBUFF_FULL | ChipSet.C8042.STATUS.OUTBUFF_DELAY))) {
                    this.set8042OutBuff(b, true);
                    /**
                     * A delay of 4 instructions was originally requested as part of the the Keyboard's resetDevice()
                     * response, but a larger delay (120) is now needed for MODEL_5170 machines, per the discussion above.
                     */
                    this.setIRR(ChipSet.IRQ.KBD, 120);
                    return true;
                }
                if (!COMPILED) this.printf(MESSAGE.KBD + MESSAGE.PORT, "chipset.receiveKbdData(%#04X): output buffer full\n", b);
                return false;
            }
            if (!COMPILED) this.printf(MESSAGE.KBD + MESSAGE.PORT, "chipset.receiveKbdData(%#04X): disabled\n", b);
        }
        return false;
    }

    /**
     * in6300DIPSwitches(iDIP, port, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} iDIP (0 or 1)
     * @param {number} port (0x66 or 0x67)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    in6300DIPSwitches(iDIP, port, addrFrom)
    {
        let b = this.aDIPSwitches[iDIP][1];
        this.printIO(port, undefined, addrFrom, "DIPSW-" + iDIP, b, MESSAGE.CHIPSET);
        return b;
    }

    /**
     * inCMOSAddr(port, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} port (0x70)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    inCMOSAddr(port, addrFrom)
    {
        this.printIO(port, undefined, addrFrom, "CMOS.ADDR", this.bCMOSAddr, MESSAGE.CMOS);
        return this.bCMOSAddr;
    }

    /**
     * outCMOSAddr(port, bOut, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} port (0x70)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined if the Debugger is trying to write the specified port)
     */
    outCMOSAddr(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "CMOS.ADDR", undefined, MESSAGE.CMOS);
        this.bCMOSAddr = bOut;
        this.bNMI = (this.bNMI & ~ChipSet.NMI.ENABLE) | ((bOut & ChipSet.CMOS.ADDR.NMI_DISABLE)? 0 : ChipSet.NMI.ENABLE);
    }

    /**
     * inCMOSData(port, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} port (0x71)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    inCMOSData(port, addrFrom)
    {
        let bAddr = this.bCMOSAddr & ChipSet.CMOS.ADDR.MASK;
        let bIn = (bAddr <= ChipSet.CMOS.ADDR.STATUSD? this.getRTCByte(bAddr) : this.abCMOSData[bAddr]);
        if (this.messageEnabled(MESSAGE.CMOS + MESSAGE.PORT)) {
            this.printIO(port, undefined, addrFrom, "CMOS.DATA[" + StrLib.toHexByte(bAddr) + "]", bIn, true);
        }
        if (addrFrom != null) {
            if (bAddr == ChipSet.CMOS.ADDR.STATUSC) {
                /**
                 * When software reads the STATUSC port, all interrupt bits (PF, AF, and UF) are automatically
                 * cleared, which in turn clears the IRQF bit, which in turn clears the IRQ.
                 */
                this.abCMOSData[bAddr] &= ChipSet.CMOS.STATUSC.RESERVED;
                if (bIn & ChipSet.CMOS.STATUSC.IRQF) this.clearIRR(ChipSet.IRQ.RTC);
                /**
                 * If we just cleared PF, and PIE is still set, then we need to make sure the next Periodic Interrupt
                 * occurs in a timely manner, too.
                 */
                if ((bIn & ChipSet.CMOS.STATUSC.PF) && (this.abCMOSData[ChipSet.CMOS.ADDR.STATUSB] & ChipSet.CMOS.STATUSB.PIE)) {
                    if (!COMPILED) this.printf(MESSAGE.RTC, "RTC periodic interrupt cleared\n");
                    this.setRTCCycleLimit();
                }
            }
        }
        return bIn;
    }

    /**
     * outCMOSData(port, bOut, addrFrom)
     *
     * @this {ChipSet}
     * @param {number} port (0x71)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined if the Debugger is trying to write the specified port)
     */
    outCMOSData(port, bOut, addrFrom)
    {
        let bAddr = this.bCMOSAddr & ChipSet.CMOS.ADDR.MASK;
        if (this.messageEnabled(MESSAGE.CMOS + MESSAGE.PORT)) {
            this.printIO(port, bOut, addrFrom, "CMOS.DATA[" + StrLib.toHexByte(bAddr) + "]", undefined, true);
        }
        let bDelta = bOut ^ this.abCMOSData[bAddr];
        this.abCMOSData[bAddr] = (bAddr <= ChipSet.CMOS.ADDR.STATUSD? this.setRTCByte(bAddr, bOut) : bOut);
        if (bAddr == ChipSet.CMOS.ADDR.STATUSB && (bDelta & ChipSet.CMOS.STATUSB.PIE)) {
            if (bOut & ChipSet.CMOS.STATUSB.PIE) {
                if (!COMPILED) this.printf(MESSAGE.RTC, "RTC periodic interrupts enabled\n");
                this.setRTCCycleLimit();
            } else {
                if (!COMPILED) this.printf(MESSAGE.RTC, "RTC periodic interrupts disabled\n");
            }
        }
    }

    /**
     * inNMI(port, addrFrom)
     *
     * This handler is installed only for models before MODEL_5170; technically, this port is not readable,
     * except on the MODEL_4860, and even there, all a read is required to do is clear KBD_LATCH, but we go ahead
     * and return all the bits.
     *
     * @this {ChipSet}
     * @param {number} port (0xA0)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to read the specified port)
     * @returns {number} simulated port value
     */
    inNMI(port, addrFrom)
    {
        let bIn = this.bNMI;
        this.printIO(port, undefined, addrFrom, "NMI", bIn);
        this.bNMI &= ~ChipSet.NMI.KBD_LATCH;
        return bIn;
    }

    /**
     * outNMI(port, bOut, addrFrom)
     *
     * This handler is installed only for models before MODEL_5170.
     *
     * @this {ChipSet}
     * @param {number} port (0xA0)
     * @param {number} bOut
     * @param {number} [addrFrom] (not defined if the Debugger is trying to write the specified port)
     */
    outNMI(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "NMI");
        this.bNMI = bOut;
    }

    /**
     * outFPUClear(port, bOut, addrFrom)
     *
     * This handler is installed only for MODEL_5170.
     *
     * @this {ChipSet}
     * @param {number} port (0xF0)
     * @param {number} bOut (0x00 is the only expected output)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to write the specified port)
     */
    outFPUClear(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "FPU.CLEAR");
        this.assert(!bOut);
        if (this.fpuActive) this.fpuActive.clearBusy();
    }

    /**
     * outFPUReset(port, bOut, addrFrom)
     *
     * This handler is installed only for MODEL_5170.
     *
     * @this {ChipSet}
     * @param {number} port (0xF1)
     * @param {number} bOut (0x00 is the only expected output)
     * @param {number} [addrFrom] (not defined if the Debugger is trying to write the specified port)
     */
    outFPUReset(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "FPU.RESET");
        this.assert(!bOut);
        if (this.fpuActive) this.fpuActive.resetFPU();
    }

    /**
     * intBIOSTimer(addr)
     *
     * INT 0x1A Quick Reference:
     *
     *      AH
     *      ----
     *      0x00    Get current clock count in CX:DX
     *      0x01    Set current clock count from CX:DX
     *      0x02    Get real-time clock using BCD (CH=hours, CL=minutes, DH=seconds)
     *      0x03    Set real-time clock using BCD (CH=hours, CL=minutes, DH=seconds, DL=1 if Daylight Savings Time option)
     *      0x04    Get real-time date using BCD (CH=century, CL=year, DH=month, DL=day)
     *      0x05    Set real-time date using BCD (CH=century, CL=year, DH=month, DL=day)
     *      0x06    Set alarm using BCD (CH=hours, CL=minutes, DH=seconds)
     *      0x07    Reset alarm
     *
     * @this {ChipSet}
     * @param {number} addr
     * @returns {boolean} true to proceed with the INT 0x1A software interrupt, false to skip
     */
    intBIOSTimer(addr)
    {
        if (DEBUGGER) {
            if (this.messageEnabled(MESSAGE.INT) && this.dbg.messageInt(Interrupts.TIMER, addr)) {
                /**
                 * By computing AH now, we get the incoming AH value; if we computed it below, along with
                 * the rest of the register values, we'd get the outgoing AH value, which is not what we want.
                 */
                let chipset = this;
                let AH = this.cpu.regEAX >> 8;
                let nCycles = this.cpu.getCycles();
                this.cpu.addIntReturn(addr, function onBIOSRTCReturn(nLevel) {
                    let sResult;
                    let CL = chipset.cpu.regEDX & 0xff;
                    let CH = chipset.cpu.regEDX >> 8;
                    let DL = chipset.cpu.regEDX & 0xff;
                    let DH = chipset.cpu.regEDX >> 8;
                    if (AH == 0x02 || AH == 0x03) {
                        sResult = " CH(hour)=" + StrLib.toHexWord(CH) + " CL(min)=" + StrLib.toHexByte(CL) + " DH(sec)=" + StrLib.toHexByte(DH);
                    } else if (AH == 0x04 || AH == 0x05) {
                        sResult = " CX(year)=" + StrLib.toHexWord(chipset.cpu.regECX) + " DH(month)=" + StrLib.toHexByte(DH) + " DL(day)=" + StrLib.toHexByte(DL);
                    }
                    let nCyclesDelta = -nCycles + (nCycles = chipset.cpu.getCycles());
                    chipset.dbg.messageIntReturn(Interrupts.TIMER, nLevel, nCyclesDelta, sResult);
                });
            }
        }
        return true;
    }

    /**
     * setSpeaker(enable)
     *
     * @this {ChipSet}
     * @param {number} [enable] (non-zero to enable speaker, zero to disable it; otherwise, update as appropriate)
     */
    setSpeaker(enable)
    {
        let fOn;
        if (enable !== undefined) {
            fOn = !!enable;
            if (fOn != this.fSpeakerEnabled) {
                //
                // Yielding doesn't seem to help the simulation of sound via rapid speaker toggling.
                //
                // if (this.cpu) {
                //     this.cpu.yieldCPU();
                // }
                this.fSpeakerEnabled = fOn;
            }
        } else {
            fOn = !!(this.fSpeakerEnabled && this.cpu && this.cpu.isRunning());
        }
        let freq = Math.round(ChipSet.TIMER_TICKS_PER_SEC / this.getTimerInit(ChipSet.PIT0.TIMER2));
        if (freq < 20 || freq > 20000) {
            /**
             * Treat frequencies outside the normal hearing range (below 20hz or above 20Khz) as a clever
             * attempt to turn sound off.
             */
            fOn = false;
        }
        if (this.contextAudio) {
            if (fOn && this.startAudio()) {
                /**
                 * Instead of setting the frequency's 'value' property directly, as we used to do, we use the
                 * setValueAtTime() method, with a time of zero, as a work-around to avoid the "easing" (aka
                 * "de-zippering") of the frequency that browsers like to do.  Supposedly de-zippering is an
                 * attempt to avoid "pops" if the frequency is altered while the wave is still rising or falling.
                 *
                 * Ditto for the gain's 'value'.
                 */
                // this.oscillatorAudio['frequency']['value'] = freq;
                this.oscillatorAudio['frequency']['setValueAtTime'](freq, 0);
                // this.volumeAudio['gain']['value'] = this.volumeInit;
                this.volumeAudio['gain']['setValueAtTime'](this.volumeInit, 0);
                this.printf(MESSAGE.SPEAKER, "speaker on at  %dhz\n", freq);
            } else if (this.volumeAudio) {
                this.volumeAudio['gain']['setValueAtTime'](0, 0);
                this.printf(MESSAGE.SPEAKER, "speaker off at %dhz\n", freq);
            }
        } else if (fOn && this.fSpeakerOn != fOn) {
            this.printf(MESSAGE.SPEAKER, "BEEP\n");
        }
        this.fSpeakerOn = fOn;
    }

    /**
     * startAudio(event)
     *
     * NOTE: We currently use named properties rather than "dot" properties to access all the AudioContext
     * properties and methods, because we don't have any built-in declarations or externs for them, so neither
     * WebStorm nor the Closure Compiler recognize them.  We could live with the WebStorm inspection warnings,
     * but we definitely can't have the Closure Compiler renaming any of the properties -- and since it
     * automatically converts them all to "dot" properties, there's no incentive for us to do anything more.
     *
     * @this {ChipSet}
     * @param {Event} [event] object from a 'touch' event, if any
     * @returns {boolean}
     */
    startAudio(event)
    {
        if (this.contextAudio) {
            /**
             * NOTE: If the machine happened to enable its speaker *before* the user generated an event
             * (eg, touchstart) that resulted in a call here, then we're too late -- at least as far as iOS
             * devices are concerned, because those devices require the oscillator's start() method to be
             * called in the context of a user-initiated event.
             *
             * So, for the benefit of iOS devices, when we finally receive a user-generated call, we will
             * simply recreate the oscillator.  This is a one-time work-around for the life of the machine.
             *
             * TODO: Consider adding a "Sound On/Off" button to all machines (probably in the top right corner,
             * where "Full Screen" and "Lock Pointer" buttons typically appear), at least on iOS devices.
             */
            if (event) {
                if (this.fUserSound) return true;
                this.oscillatorAudio = null;
                this.fUserSound = true;
            }
            if (this.oscillatorAudio) return true;
            try {
                this.oscillatorAudio = this.contextAudio['createOscillator']();
                if ('start' in this.oscillatorAudio) {  // early versions of WebLib Audio used noteOn() instead of start()
                    this.volumeAudio = this.contextAudio['createGain']();
                    this.oscillatorAudio['connect'](this.volumeAudio);
                    this.volumeAudio['connect'](this.contextAudio['destination']);
                    this.volumeAudio['gain']['setValueAtTime'](0, 0);
                    this.oscillatorAudio['type'] = "square";
                    this.oscillatorAudio['start'](0);
                    return true;
                }
            } catch(e) {
                this.printf(MESSAGE.NOTICE, "AudioContext exception: %s\n", e.message);
                this.contextAudio = null;
            }
        }
        return false;
    }

    /**
     * messageBitsDMA(iChannel)
     *
     * @this {ChipSet}
     * @param {number} [iChannel] if the message is associated with a particular IRQ #
     * @returns {number}
     */
    messageBitsDMA(iChannel)
    {
        let bitsMessage = 0;
        if (DEBUG) {
            bitsMessage = MESSAGE.DATA;
            if (iChannel == ChipSet.DMA_FDC) {
                bitsMessage += MESSAGE.FDC;
            } else if (iChannel == ChipSet.DMA_HDC) {
                bitsMessage += MESSAGE.HDC;
            }
        }
        return bitsMessage;
    }

    /**
     * messageBitsIRQ(nIRQ)
     *
     * @this {ChipSet}
     * @param {number|undefined} [nIRQ] if the message is associated with a particular IRQ #
     * @returns {number}
     */
    messageBitsIRQ(nIRQ)
    {
        let bitsMessage = MESSAGE.IRQ;
        if (nIRQ == ChipSet.IRQ.TIMER0) {       // IRQ 0
            bitsMessage |= MESSAGE.TIMER;
        } else if (nIRQ == ChipSet.IRQ.KBD) {   // IRQ 1
            bitsMessage |= MESSAGE.KBD;
        } else if (nIRQ == ChipSet.IRQ.SLAVE) { // IRQ 2
            bitsMessage |= MESSAGE.NONE;       // (we're not really interested in IRQ 2 itself, just the slaves)
        } else if (nIRQ == ChipSet.IRQ.COM1 || nIRQ == ChipSet.IRQ.COM2) {
            bitsMessage |= MESSAGE.SERIAL;
        } else if (nIRQ == ChipSet.IRQ.XTC) {   // IRQ 5 (MODEL_5160)
            bitsMessage |= MESSAGE.HDC;
        } else if (nIRQ == ChipSet.IRQ.FDC) {   // IRQ 6
            bitsMessage |= MESSAGE.FDC;
        } else if (nIRQ == ChipSet.IRQ.RTC) {   // IRQ 8 (MODEL_5170 and up)
            bitsMessage |= MESSAGE.RTC;
        } else if (nIRQ == ChipSet.IRQ.ATC1 || nIRQ == ChipSet.IRQ.ATC2) {      // IRQ 14 or 15 (MODEL_5170 and up)
            bitsMessage |= MESSAGE.HDC;
        }
        return bitsMessage;
    }

    /**
     * checkDMA()
     *
     * Called by the CPU whenever INTR.DMA is set.
     *
     * @returns {boolean} true if one or more async DMA channels are still active (unmasked), false to reset INTR.DMA
     *
     checkDMA()
     {
         let fActive = false;
         for (let iDMAC = 0; iDMAC < this.aDMACs; iDMAC++) {
             let controller = this.aDMACs[iDMAC];
             for (let iChannel = 0; iChannel < controller.aChannels.length; iChannel++) {
                 let channel = controller.aChannels[iChannel];
                 if (!channel.masked) {
                     this.advanceDMA(channel);
                     if (!channel.masked) fActive = true;
                 }
             }
         }
         return fActive;
     }
     */

    /**
     * ChipSet.init()
     *
     * This function operates on every HTML element of class "chipset", extracting the
     * JSON-encoded parameters for the ChipSet constructor from the element's "data-value"
     * attribute, invoking the constructor to create a ChipSet component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        let aeChipSet = Component.getElementsByClass(APPCLASS, "chipset");
        for (let iChip = 0; iChip < aeChipSet.length; iChip++) {
            let eChipSet = aeChipSet[iChip];
            let parmsChipSet = Component.getComponentParms(eChipSet);
            let chipset = new ChipSet(parmsChipSet);
            Component.bindComponentControls(chipset, eChipSet, APPCLASS);
            chipset.updateDIPSwitchDescriptions();
        }
    }

    /**
     * Port input notification tables, starting with the one that's common to all models (aPortInput)
     */
    static aPortInput = {
        [ChipSet.PIC0.PORT+0]: /** @this {ChipSet} */ function inPort20(port, addrFrom) { return this.inPICLo(ChipSet.PIC0.INDEX, addrFrom); },
        [ChipSet.PIC0.PORT+1]: /** @this {ChipSet} */ function inPort21(port, addrFrom) { return this.inPICHi(ChipSet.PIC0.INDEX, addrFrom); },
        [ChipSet.PIT0.PORT+0]: /** @this {ChipSet} */ function inPort40(port, addrFrom) { return this.inTimer(ChipSet.PIT0.INDEX, ChipSet.PIT0.TIMER0, port, addrFrom); },
        [ChipSet.PIT0.PORT+1]: /** @this {ChipSet} */ function inPort41(port, addrFrom) { return this.inTimer(ChipSet.PIT0.INDEX, ChipSet.PIT0.TIMER1, port, addrFrom); },
        [ChipSet.PIT0.PORT+2]: /** @this {ChipSet} */ function inPort42(port, addrFrom) { return this.inTimer(ChipSet.PIT0.INDEX, ChipSet.PIT0.TIMER2, port, addrFrom); },
        [ChipSet.PIT0.PORT+3]: /** @this {ChipSet} */ function inPort43(port, addrFrom) { return this.inTimerCtrl(ChipSet.PIT0.INDEX, port, addrFrom); },
    };

    static aPortInput4860 = {
        [ChipSet.PPI.PORT+0]: ChipSet.prototype.inPPIA,
        [ChipSet.PPI.PORT+1]: ChipSet.prototype.inPPIB,
        [ChipSet.PPI.PORT+2]: ChipSet.prototype.inPPIC,
        [ChipSet.PPI.PORT+3]: ChipSet.prototype.inPPICtrl,  // technically, not actually readable, but I want the Debugger to be able to read it
        [ChipSet.NMI.PORT]:   ChipSet.prototype.inNMI
    };

    static aPortInput5150 = {
        [ChipSet.PPI.PORT+0]: ChipSet.prototype.inPPIA,
        [ChipSet.PPI.PORT+1]: ChipSet.prototype.inPPIB,
        [ChipSet.PPI.PORT+2]: ChipSet.prototype.inPPIC,
        [ChipSet.PPI.PORT+3]: ChipSet.prototype.inPPICtrl,  // technically, not actually readable, but I want the Debugger to be able to read it
    };

    static aPortInput51xx = {
        [ChipSet.DMA0.PORT.CH0_ADDR]:     /** @this {ChipSet} */ function inPort00(port, addrFrom) { return this.inDMAChannelAddr(ChipSet.DMA0.INDEX, 0, port, addrFrom); },
        [ChipSet.DMA0.PORT.CH0_COUNT]:    /** @this {ChipSet} */ function inPort01(port, addrFrom) { return this.inDMAChannelCount(ChipSet.DMA0.INDEX, 0, port, addrFrom); },
        [ChipSet.DMA0.PORT.CH1_ADDR]:     /** @this {ChipSet} */ function inPort02(port, addrFrom) { return this.inDMAChannelAddr(ChipSet.DMA0.INDEX, 1, port, addrFrom); },
        [ChipSet.DMA0.PORT.CH1_COUNT]:    /** @this {ChipSet} */ function inPort03(port, addrFrom) { return this.inDMAChannelCount(ChipSet.DMA0.INDEX, 1, port, addrFrom); },
        [ChipSet.DMA0.PORT.CH2_ADDR]:     /** @this {ChipSet} */ function inPort04(port, addrFrom) { return this.inDMAChannelAddr(ChipSet.DMA0.INDEX, 2, port, addrFrom); },
        [ChipSet.DMA0.PORT.CH2_COUNT]:    /** @this {ChipSet} */ function inPort05(port, addrFrom) { return this.inDMAChannelCount(ChipSet.DMA0.INDEX, 2, port, addrFrom); },
        [ChipSet.DMA0.PORT.CH3_ADDR]:     /** @this {ChipSet} */ function inPort06(port, addrFrom) { return this.inDMAChannelAddr(ChipSet.DMA0.INDEX, 3, port, addrFrom); },
        [ChipSet.DMA0.PORT.CH3_COUNT]:    /** @this {ChipSet} */ function inPort07(port, addrFrom) { return this.inDMAChannelCount(ChipSet.DMA0.INDEX, 3, port, addrFrom); },
        [ChipSet.DMA0.PORT.CMD_STATUS]:   /** @this {ChipSet} */ function inPort08(port, addrFrom) { return this.inDMAStatus(ChipSet.DMA0.INDEX, port, addrFrom); },
        [ChipSet.DMA0.PORT.MASTER_CLEAR]: /** @this {ChipSet} */ function inPort0D(port, addrFrom) { return this.inDMATemp(ChipSet.DMA0.INDEX, port, addrFrom); },
        [ChipSet.DMA0.PORT.CH2_PAGE]:     /** @this {ChipSet} */ function inPort81(port, addrFrom) { return this.inDMAPageReg(ChipSet.DMA0.INDEX, 2, port, addrFrom); },
        [ChipSet.DMA0.PORT.CH3_PAGE]:     /** @this {ChipSet} */ function inPort82(port, addrFrom) { return this.inDMAPageReg(ChipSet.DMA0.INDEX, 3, port, addrFrom); },
        [ChipSet.DMA0.PORT.CH1_PAGE]:     /** @this {ChipSet} */ function inPort83(port, addrFrom) { return this.inDMAPageReg(ChipSet.DMA0.INDEX, 1, port, addrFrom); },
        [ChipSet.DMA0.PORT.CH0_PAGE]:     /** @this {ChipSet} */ function inPort87(port, addrFrom) { return this.inDMAPageReg(ChipSet.DMA0.INDEX, 0, port, addrFrom); }
    };

    static aPortInput5170 = {
        [ChipSet.C8042.PORT+0]: ChipSet.prototype.in8042OutBuff,
        [ChipSet.C8042.PORT+1]: ChipSet.prototype.in8042RWReg,
        [ChipSet.C8042.PORT+4]: ChipSet.prototype.in8042Status,
        0x70: ChipSet.prototype.inCMOSAddr,
        0x71: ChipSet.prototype.inCMOSData,
        0x80: /** @this {ChipSet} */ function inPort80(port, addrFrom) { return this.inDMAPageSpare(7, port, addrFrom); },
        0x84: /** @this {ChipSet} */ function inPort84(port, addrFrom) { return this.inDMAPageSpare(0, port, addrFrom); },
        0x85: /** @this {ChipSet} */ function inPort85(port, addrFrom) { return this.inDMAPageSpare(1, port, addrFrom); },
        0x86: /** @this {ChipSet} */ function inPort86(port, addrFrom) { return this.inDMAPageSpare(2, port, addrFrom); },
        0x88: /** @this {ChipSet} */ function inPort88(port, addrFrom) { return this.inDMAPageSpare(3, port, addrFrom); },
        [ChipSet.DMA1.PORT.CH6_PAGE]: /** @this {ChipSet} */ function inPort89(port, addrFrom) { return this.inDMAPageReg(ChipSet.DMA1.INDEX, 2, port, addrFrom); },
        [ChipSet.DMA1.PORT.CH7_PAGE]: /** @this {ChipSet} */ function inPort8A(port, addrFrom) { return this.inDMAPageReg(ChipSet.DMA1.INDEX, 3, port, addrFrom); },
        [ChipSet.DMA1.PORT.CH5_PAGE]: /** @this {ChipSet} */ function inPort8B(port, addrFrom) { return this.inDMAPageReg(ChipSet.DMA1.INDEX, 1, port, addrFrom); },
        0x8C: /** @this {ChipSet} */ function inPort8C(port, addrFrom) { return this.inDMAPageSpare(4, port, addrFrom); },
        0x8D: /** @this {ChipSet} */ function inPort8D(port, addrFrom) { return this.inDMAPageSpare(5, port, addrFrom); },
        0x8E: /** @this {ChipSet} */ function inPort8E(port, addrFrom) { return this.inDMAPageSpare(6, port, addrFrom); },
        [ChipSet.DMA1.PORT.CH4_PAGE]: /** @this {ChipSet} */ function inPort8F(port, addrFrom) { return this.inDMAPageReg(ChipSet.DMA1.INDEX, 0, port, addrFrom); },
        [ChipSet.PIC1.PORT+0]: /** @this {ChipSet} */ function inPortA0(port, addrFrom) { return this.inPICLo(ChipSet.PIC1.INDEX, addrFrom); },
        [ChipSet.PIC1.PORT+1]: /** @this {ChipSet} */ function inPortA1(port, addrFrom) { return this.inPICHi(ChipSet.PIC1.INDEX, addrFrom); },
        [ChipSet.DMA1.PORT.CH4_ADDR]:     /** @this {ChipSet} */ function inPortC0(port, addrFrom) { return this.inDMAChannelAddr(ChipSet.DMA1.INDEX, 0, port, addrFrom); },
        [ChipSet.DMA1.PORT.CH4_COUNT]:    /** @this {ChipSet} */ function inPortC2(port, addrFrom) { return this.inDMAChannelCount(ChipSet.DMA1.INDEX, 0, port, addrFrom); },
        [ChipSet.DMA1.PORT.CH5_ADDR]:     /** @this {ChipSet} */ function inPortC4(port, addrFrom) { return this.inDMAChannelAddr(ChipSet.DMA1.INDEX, 1, port, addrFrom); },
        [ChipSet.DMA1.PORT.CH5_COUNT]:    /** @this {ChipSet} */ function inPortC6(port, addrFrom) { return this.inDMAChannelCount(ChipSet.DMA1.INDEX, 1, port, addrFrom); },
        [ChipSet.DMA1.PORT.CH6_ADDR]:     /** @this {ChipSet} */ function inPortC8(port, addrFrom) { return this.inDMAChannelAddr(ChipSet.DMA1.INDEX, 2, port, addrFrom); },
        [ChipSet.DMA1.PORT.CH6_COUNT]:    /** @this {ChipSet} */ function inPortCA(port, addrFrom) { return this.inDMAChannelCount(ChipSet.DMA1.INDEX, 2, port, addrFrom); },
        [ChipSet.DMA1.PORT.CH7_ADDR]:     /** @this {ChipSet} */ function inPortCC(port, addrFrom) { return this.inDMAChannelAddr(ChipSet.DMA1.INDEX, 3, port, addrFrom); },
        [ChipSet.DMA1.PORT.CH7_COUNT]:    /** @this {ChipSet} */ function inPortCE(port, addrFrom) { return this.inDMAChannelCount(ChipSet.DMA1.INDEX, 3, port, addrFrom); },
        [ChipSet.DMA1.PORT.CMD_STATUS]:   /** @this {ChipSet} */ function inPortD0(port, addrFrom) { return this.inDMAStatus(ChipSet.DMA1.INDEX, port, addrFrom); },
        [ChipSet.DMA1.PORT.MASTER_CLEAR]: /** @this {ChipSet} */ function inPortDA(port, addrFrom) { return this.inDMATemp(ChipSet.DMA1.INDEX, port, addrFrom); }
    };

    static aPortInput6300 = {
        [ChipSet.C8041.PORT+0]: ChipSet.prototype.in8041Kbd,
        [ChipSet.C8041.PORT+1]: ChipSet.prototype.in8041Ctrl,
        [ChipSet.C8041.PORT+4]: ChipSet.prototype.in8041Status,
        0x66: /** @this {ChipSet} */ function inPort66(port, addrFrom) { return this.in6300DIPSwitches(0, port, addrFrom); },
        0x67: /** @this {ChipSet} */ function inPort67(port, addrFrom) { return this.in6300DIPSwitches(1, port, addrFrom); }
    };

    static aPortInputDeskPro386 = {
        [ChipSet.PIT1.PORT+0]: /** @this {ChipSet} */ function inPort48(port, addrFrom) { return this.inTimer(ChipSet.PIT1.INDEX, ChipSet.PIT1.TIMER3, port, addrFrom); },
        [ChipSet.PIT1.PORT+1]: /** @this {ChipSet} */ function inPort49(port, addrFrom) { return this.inTimer(ChipSet.PIT1.INDEX, ChipSet.PIT1.TIMER4, port, addrFrom); },
        [ChipSet.PIT1.PORT+2]: /** @this {ChipSet} */ function inPort4A(port, addrFrom) { return this.inTimer(ChipSet.PIT1.INDEX, ChipSet.PIT1.TIMER5, port, addrFrom); },
        [ChipSet.PIT1.PORT+3]: /** @this {ChipSet} */ function inPort4B(port, addrFrom) { return this.inTimerCtrl(ChipSet.PIT1.INDEX, port, addrFrom); }
    };

    /**
     * Port output notification tables, starting with the one that's common to all models (aPortOutput)
     */
    static aPortOutput = {
        [ChipSet.PIC0.PORT+0]: /** @this {ChipSet} */ function outPort20(port, bOut, addrFrom) { this.outPICLo(ChipSet.PIC0.INDEX, bOut, addrFrom); },
        [ChipSet.PIC0.PORT+1]: /** @this {ChipSet} */ function outPort21(port, bOut, addrFrom) { this.outPICHi(ChipSet.PIC0.INDEX, bOut, addrFrom); },
        [ChipSet.PIT0.PORT+0]: /** @this {ChipSet} */ function outPort40(port, bOut, addrFrom) { this.outTimer(ChipSet.PIT0.INDEX, ChipSet.PIT0.TIMER0, port, bOut, addrFrom); },
        [ChipSet.PIT0.PORT+1]: /** @this {ChipSet} */ function outPort41(port, bOut, addrFrom) { this.outTimer(ChipSet.PIT0.INDEX, ChipSet.PIT0.TIMER1, port, bOut, addrFrom); },
        [ChipSet.PIT0.PORT+2]: /** @this {ChipSet} */ function outPort42(port, bOut, addrFrom) { this.outTimer(ChipSet.PIT0.INDEX, ChipSet.PIT0.TIMER2, port, bOut, addrFrom); },
        [ChipSet.PIT0.PORT+3]: /** @this {ChipSet} */ function outPort43(port, bOut, addrFrom) { this.outTimerCtrl(ChipSet.PIT0.INDEX, port, bOut, addrFrom); },
    };

    static aPortOutput4860 = {
        0x10: ChipSet.prototype.outMFGTest,     // a manufacturing test port that we don't really care about
        [ChipSet.PPI.PORT+0]: ChipSet.prototype.outPPIA,
        [ChipSet.PPI.PORT+1]: ChipSet.prototype.outPPIB,
        [ChipSet.PPI.PORT+2]: ChipSet.prototype.outPPIC,
        [ChipSet.PPI.PORT+3]: ChipSet.prototype.outPPICtrl,
        [ChipSet.NMI.PORT]:   ChipSet.prototype.outNMI
    };

    static aPortOutput5150 = {
        [ChipSet.PPI.PORT+0]: ChipSet.prototype.outPPIA,
        [ChipSet.PPI.PORT+1]: ChipSet.prototype.outPPIB,
        [ChipSet.PPI.PORT+2]: ChipSet.prototype.outPPIC,
        [ChipSet.PPI.PORT+3]: ChipSet.prototype.outPPICtrl,
        [ChipSet.NMI.PORT]:   ChipSet.prototype.outNMI
    };

    static aPortOutput51xx = {
        [ChipSet.DMA0.PORT.CH0_ADDR]:     /** @this {ChipSet} */ function outPort00(port, bOut, addrFrom) { this.outDMAChannelAddr(ChipSet.DMA0.INDEX, 0, port, bOut, addrFrom); },
        [ChipSet.DMA0.PORT.CH0_COUNT]:    /** @this {ChipSet} */ function outPort01(port, bOut, addrFrom) { this.outDMAChannelCount(ChipSet.DMA0.INDEX, 0, port, bOut, addrFrom); },
        [ChipSet.DMA0.PORT.CH1_ADDR]:     /** @this {ChipSet} */ function outPort02(port, bOut, addrFrom) { this.outDMAChannelAddr(ChipSet.DMA0.INDEX, 1, port, bOut, addrFrom); },
        [ChipSet.DMA0.PORT.CH1_COUNT]:    /** @this {ChipSet} */ function outPort03(port, bOut, addrFrom) { this.outDMAChannelCount(ChipSet.DMA0.INDEX, 1, port, bOut, addrFrom); },
        [ChipSet.DMA0.PORT.CH2_ADDR]:     /** @this {ChipSet} */ function outPort04(port, bOut, addrFrom) { this.outDMAChannelAddr(ChipSet.DMA0.INDEX, 2, port, bOut, addrFrom); },
        [ChipSet.DMA0.PORT.CH2_COUNT]:    /** @this {ChipSet} */ function outPort05(port, bOut, addrFrom) { this.outDMAChannelCount(ChipSet.DMA0.INDEX, 2, port, bOut, addrFrom); },
        [ChipSet.DMA0.PORT.CH3_ADDR]:     /** @this {ChipSet} */ function outPort06(port, bOut, addrFrom) { this.outDMAChannelAddr(ChipSet.DMA0.INDEX, 3, port, bOut, addrFrom); },
        [ChipSet.DMA0.PORT.CH3_COUNT]:    /** @this {ChipSet} */ function outPort07(port, bOut, addrFrom) { this.outDMAChannelCount(ChipSet.DMA0.INDEX, 3, port, bOut, addrFrom); },
        [ChipSet.DMA0.PORT.CMD_STATUS]:   /** @this {ChipSet} */ function outPort08(port, bOut, addrFrom) { this.outDMACmd(ChipSet.DMA0.INDEX, port, bOut, addrFrom); },
        [ChipSet.DMA0.PORT.REQUEST]:      /** @this {ChipSet} */ function outPort09(port, bOut, addrFrom) { this.outDMAReq(ChipSet.DMA0.INDEX, port, bOut, addrFrom); },
        [ChipSet.DMA0.PORT.MASK]:         /** @this {ChipSet} */ function outPort0A(port, bOut, addrFrom) { this.outDMAMask(ChipSet.DMA0.INDEX, port, bOut, addrFrom); },
        [ChipSet.DMA0.PORT.MODE]:         /** @this {ChipSet} */ function outPort0B(port, bOut, addrFrom) { this.outDMAMode(ChipSet.DMA0.INDEX, port, bOut, addrFrom); },
        [ChipSet.DMA0.PORT.RESET_FF]:     /** @this {ChipSet} */ function outPort0C(port, bOut, addrFrom) { this.outDMAResetFF(ChipSet.DMA0.INDEX, port, bOut, addrFrom); },
        [ChipSet.DMA0.PORT.MASTER_CLEAR]: /** @this {ChipSet} */ function outPort0D(port, bOut, addrFrom) { this.outDMAMasterClear(ChipSet.DMA0.INDEX, port, bOut, addrFrom); },
        [ChipSet.DMA0.PORT.CH2_PAGE]:     /** @this {ChipSet} */ function outPort81(port, bOut, addrFrom) { this.outDMAPageReg(ChipSet.DMA0.INDEX, 2, port, bOut, addrFrom); },
        [ChipSet.DMA0.PORT.CH3_PAGE]:     /** @this {ChipSet} */ function outPort82(port, bOut, addrFrom) { this.outDMAPageReg(ChipSet.DMA0.INDEX, 3, port, bOut, addrFrom); },
        [ChipSet.DMA0.PORT.CH1_PAGE]:     /** @this {ChipSet} */ function outPort83(port, bOut, addrFrom) { this.outDMAPageReg(ChipSet.DMA0.INDEX, 1, port, bOut, addrFrom); },
        [ChipSet.DMA0.PORT.CH0_PAGE]:     /** @this {ChipSet} */ function outPort87(port, bOut, addrFrom) { this.outDMAPageReg(ChipSet.DMA0.INDEX, 0, port, bOut, addrFrom); }
    };

    static aPortOutput5170 = {
        [ChipSet.C8042.PORT+0]: ChipSet.prototype.out8042InBuffData,
        [ChipSet.C8042.PORT+1]: ChipSet.prototype.out8042RWReg,
        [ChipSet.C8042.PORT+4]: ChipSet.prototype.out8042InBuffCmd,
        0x70: ChipSet.prototype.outCMOSAddr,
        0x71: ChipSet.prototype.outCMOSData,
        0x80: /** @this {ChipSet} */ function outPort80(port, bOut, addrFrom) { this.outDMAPageSpare(7, port, bOut, addrFrom); },
        0x84: /** @this {ChipSet} */ function outPort84(port, bOut, addrFrom) { this.outDMAPageSpare(0, port, bOut, addrFrom); },
        0x85: /** @this {ChipSet} */ function outPort85(port, bOut, addrFrom) { this.outDMAPageSpare(1, port, bOut, addrFrom); },
        0x86: /** @this {ChipSet} */ function outPort86(port, bOut, addrFrom) { this.outDMAPageSpare(2, port, bOut, addrFrom); },
        0x88: /** @this {ChipSet} */ function outPort88(port, bOut, addrFrom) { this.outDMAPageSpare(3, port, bOut, addrFrom); },
        [ChipSet.DMA1.PORT.CH6_PAGE]: /** @this {ChipSet} */ function outPort89(port, bOut, addrFrom) { this.outDMAPageReg(ChipSet.DMA1.INDEX, 2, port, bOut, addrFrom); },
        [ChipSet.DMA1.PORT.CH7_PAGE]: /** @this {ChipSet} */ function outPort8A(port, bOut, addrFrom) { this.outDMAPageReg(ChipSet.DMA1.INDEX, 3, port, bOut, addrFrom); },
        [ChipSet.DMA1.PORT.CH5_PAGE]: /** @this {ChipSet} */ function outPort8B(port, bOut, addrFrom) { this.outDMAPageReg(ChipSet.DMA1.INDEX, 1, port, bOut, addrFrom); },
        0x8C: /** @this {ChipSet} */ function outPort8C(port, bOut, addrFrom) { this.outDMAPageSpare(4, port, bOut, addrFrom); },
        0x8D: /** @this {ChipSet} */ function outPort8D(port, bOut, addrFrom) { this.outDMAPageSpare(5, port, bOut, addrFrom); },
        0x8E: /** @this {ChipSet} */ function outPort8E(port, bOut, addrFrom) { this.outDMAPageSpare(6, port, bOut, addrFrom); },
        0x8F: /** @this {ChipSet} */ function outPort8F(port, bOut, addrFrom) { this.outDMAPageReg(ChipSet.DMA1.INDEX, 0, port, bOut, addrFrom); },
        [ChipSet.PIC1.PORT+0]: /** @this {ChipSet} */ function outPortA0(port, bOut, addrFrom) { this.outPICLo(ChipSet.PIC1.INDEX, bOut, addrFrom); },
        [ChipSet.PIC1.PORT+1]: /** @this {ChipSet} */ function outPortA1(port, bOut, addrFrom) { this.outPICHi(ChipSet.PIC1.INDEX, bOut, addrFrom); },
        [ChipSet.DMA1.PORT.CH4_ADDR]:     /** @this {ChipSet} */ function outPortC0(port, bOut, addrFrom) { this.outDMAChannelAddr(ChipSet.DMA1.INDEX, 0, port, bOut, addrFrom); },
        [ChipSet.DMA1.PORT.CH4_COUNT]:    /** @this {ChipSet} */ function outPortC2(port, bOut, addrFrom) { this.outDMAChannelCount(ChipSet.DMA1.INDEX, 0, port, bOut, addrFrom); },
        [ChipSet.DMA1.PORT.CH5_ADDR]:     /** @this {ChipSet} */ function outPortC4(port, bOut, addrFrom) { this.outDMAChannelAddr(ChipSet.DMA1.INDEX, 1, port, bOut, addrFrom); },
        [ChipSet.DMA1.PORT.CH5_COUNT]:    /** @this {ChipSet} */ function outPortC6(port, bOut, addrFrom) { this.outDMAChannelCount(ChipSet.DMA1.INDEX, 1, port, bOut, addrFrom); },
        [ChipSet.DMA1.PORT.CH6_ADDR]:     /** @this {ChipSet} */ function outPortC8(port, bOut, addrFrom) { this.outDMAChannelAddr(ChipSet.DMA1.INDEX, 2, port, bOut, addrFrom); },
        [ChipSet.DMA1.PORT.CH6_COUNT]:    /** @this {ChipSet} */ function outPortCA(port, bOut, addrFrom) { this.outDMAChannelCount(ChipSet.DMA1.INDEX, 2, port, bOut, addrFrom); },
        [ChipSet.DMA1.PORT.CH7_ADDR]:     /** @this {ChipSet} */ function outPortCC(port, bOut, addrFrom) { this.outDMAChannelAddr(ChipSet.DMA1.INDEX, 3, port, bOut, addrFrom); },
        [ChipSet.DMA1.PORT.CH7_COUNT]:    /** @this {ChipSet} */ function outPortCE(port, bOut, addrFrom) { this.outDMAChannelCount(ChipSet.DMA1.INDEX, 3, port, bOut, addrFrom); },
        [ChipSet.DMA1.PORT.CMD_STATUS]:   /** @this {ChipSet} */ function outPortD0(port, bOut, addrFrom) { this.outDMACmd(ChipSet.DMA1.INDEX, port, bOut, addrFrom); },
        [ChipSet.DMA1.PORT.REQUEST]:      /** @this {ChipSet} */ function outPortD2(port, bOut, addrFrom) { this.outDMAReq(ChipSet.DMA1.INDEX, port, bOut, addrFrom); },
        [ChipSet.DMA1.PORT.MASK]:         /** @this {ChipSet} */ function outPortD4(port, bOut, addrFrom) { this.outDMAMask(ChipSet.DMA1.INDEX, port, bOut, addrFrom); },
        [ChipSet.DMA1.PORT.MODE]:         /** @this {ChipSet} */ function outPortD6(port, bOut, addrFrom) { this.outDMAMode(ChipSet.DMA1.INDEX, port, bOut, addrFrom); },
        [ChipSet.DMA1.PORT.RESET_FF]:     /** @this {ChipSet} */ function outPortD8(port, bOut, addrFrom) { this.outDMAResetFF(ChipSet.DMA1.INDEX, port, bOut, addrFrom); },
        [ChipSet.DMA1.PORT.MASTER_CLEAR]: /** @this {ChipSet} */ function outPortDA(port, bOut, addrFrom) { this.outDMAMasterClear(ChipSet.DMA1.INDEX, port, bOut, addrFrom); },
        0xF0: ChipSet.prototype.outFPUClear,
        0xF1: ChipSet.prototype.outFPUReset
    };

    static aPortOutput6300 = {
        [ChipSet.C8041.PORT+0]: ChipSet.prototype.out8041Kbd,
        [ChipSet.C8041.PORT+1]: ChipSet.prototype.out8041Ctrl,
        [ChipSet.NMI.PORT]:     ChipSet.prototype.outNMI
    };

    static aPortOutputDeskPro386 = {
        [ChipSet.PIT1.PORT+0]: /** @this {ChipSet} */ function outPort48(port, bOut, addrFrom) { this.outTimer(ChipSet.PIT1.INDEX, ChipSet.PIT1.TIMER3, port, bOut, addrFrom); },
        [ChipSet.PIT1.PORT+1]: /** @this {ChipSet} */ function outPort49(port, bOut, addrFrom) { this.outTimer(ChipSet.PIT1.INDEX, ChipSet.PIT1.TIMER4, port, bOut, addrFrom); },
        [ChipSet.PIT1.PORT+2]: /** @this {ChipSet} */ function outPort4A(port, bOut, addrFrom) { this.outTimer(ChipSet.PIT1.INDEX, ChipSet.PIT1.TIMER5, port, bOut, addrFrom); },
        [ChipSet.PIT1.PORT+3]: /** @this {ChipSet} */ function outPort4B(port, bOut, addrFrom) { this.outTimerCtrl(ChipSet.PIT1.INDEX, port, bOut, addrFrom); }
    };
}

/**
 * Initialize every ChipSet module on the page.
 */
WebLib.onInit(ChipSet.init);
