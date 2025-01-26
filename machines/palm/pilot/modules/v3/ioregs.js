/**
 * @fileoverview Implements Palm Pilot I/O Registers
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Input from "../../../../modules/v3/input.js";
import Memory from "../../../../modules/v3/memory.js";

/**
 * @typedef {IOConfig} PilotIOConfig
 * @property {number} addr
 * @property {number} size
 */

/**
 * @class PilotIO
 * @unrestricted
 * @property {PilotIOConfig} config
 */
export default class PilotIO extends Memory {
    /**
     * PilotIO(idMachine, idDevice, config)
     *
     * @this {PilotIO}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {PilotIOConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);
        this.input = /** @type {Input} */ (this.findDeviceByClass("Input"));
        this.busMemory = /** @type {Bus} */ (this.findDevice(this.config['bus']));
        this.busMemory.addBlocks(PilotIO.DBREGS_BASE, PilotIO.DBREGS_SIZE, Memory.TYPE.READWRITE, this);
        this.onReset();
    }

    /**
     * loadState(state)
     *
     * Memory and I/O register states are managed by the Bus onLoad() handler, which calls our loadState() handler.
     *
     * @this {PilotIO}
     * @param {Array|undefined} state
     * @returns {boolean}
     */
    loadState(state)
    {
        if (state) {
            let idDevice = state.shift();
            if (this.idDevice == idDevice) {
                return true;
            }
        }
        return false;
    }

    /**
     * saveState(state)
     *
     * Memory and I/O register states are managed by the Bus onSave() handler, which calls our saveState() handler.
     *
     * @this {PilotIO}
     * @param {Array} state
     */
    saveState(state)
    {
        state.push(this.idDevice);
    }

    /**
     * onButton(id, down)
     *
     * @this {PilotIO}
     * @param {string} id
     * @param {boolean} down
     */
    onButton(id, down)
    {
    }

    /**
     * onReset()
     *
     * Called by the Machine device to provide notification of a reset event.
     *
     * @this {PilotIO}
     */
    onReset()
    {
        for (let offset in PilotIO.abRegsInit) {
            this.printf("reset byte I/O register 0x%08x to 0x%02x\n", PilotIO.DBREGS_BASE + offset, PilotIO.abRegsInit[offset]);
        }
    }

    /**
     * readData(offset)
     *
     * Implements the required Memory interface for reading a single value (ie, byte) at the given offset.
     *
     * @this {PilotIO}
     * @param {number} offset
     * @returns {number}
     */
    readData(offset)
    {
        let data = 0;
        this.printf("PilotIO.readData(0x%08x): 0x%02x\n", PilotIO.DBREGS_BASE + offset, data);
        return data;
    }

    /**
     * writeData(offset, data)
     *
     * Implements the required Memory interface for writing a single value (ie, byte) at the given offset.
     *
     * @this {Memory}
     * @param {number} offset
     * @param {number} data
     */
     writeData(offset, data)
     {
        this.printf("PilotIO.writeData(0x%08x, 0x%02x)\n", PilotIO.DBREGS_BASE + offset, data);
     }

  }

/**
 * List of supported DragonBall h/w registers (see p.24 of MC68328 User's Manual 12/9/97)
 */
PilotIO.DBREGS_BASE         = 0xfffff000;
PilotIO.DBREGS_SIZE         = 0x00001000;
PilotIO.DBREGS_LIMIT        = PilotIO.DBREGS_BASE + PilotIO.DBREGS_SIZE;

/**
 * System Control Register
 */
PilotIO.DBREG_SCR           = 0x000;

/**
 * Mask Revision Register
 */
PilotIO.DBREG_MRR           = 0x004;

/**
 * Chip Select Base Registers
 */
PilotIO.DBREG_GRPBASEA      = 0x100;
PilotIO.DBREG_GRPBASEB      = 0x102;
PilotIO.DBREG_GRPBASEC      = 0x104;
PilotIO.DBREG_GRPBASED      = 0x106;

/**
 * Chip Select A Mask Registers
 */
PilotIO.DBREG_GRPMASKA      = 0x108;
PilotIO.DBREG_GRPMASKB      = 0x10A;
PilotIO.DBREG_GRPMASKC      = 0x10C;
PilotIO.DBREG_GRPMASKD      = 0x10E;

/**
 * Group Chip Select Option Registers
 */
PilotIO.DBREG_CSA0          = 0x110;
PilotIO.DBREG_CSA1          = 0x114;
PilotIO.DBREG_CSA2          = 0x118;
PilotIO.DBREG_CSA3          = 0x11C;
PilotIO.DBREG_CSB0          = 0x120;
PilotIO.DBREG_CSB1          = 0x124;
PilotIO.DBREG_CSB2          = 0x128;
PilotIO.DBREG_CSB3          = 0x12C;
PilotIO.DBREG_CSC0          = 0x130;
PilotIO.DBREG_CSC1          = 0x134;
PilotIO.DBREG_CSC2          = 0x138;
PilotIO.DBREG_CSC3          = 0x13C;
PilotIO.DBREG_CSD0          = 0x140;
PilotIO.DBREG_CSD1          = 0x144;
PilotIO.DBREG_CSD2          = 0x148;
PilotIO.DBREG_CSD3          = 0x14C;

PilotIO.CHIP_SELECT_DEFAULT = 0x00010006;

/**
 * PLL (Phase-Locked Loop Clock Generator) Control Register (16-bit)
 *
 * To put the CPU in "sleep mode", the simplest approach is to wait until PLLFSR_CLK32 in DBREG_PLLFSR goes high,
 * and then shut down the PLL by setting PLLCR_DISPLL in DBREG_PLLCR.  Any interrupt specified as a "wake up" interrupt
 * in DBREG_IWR can take the CPU out of "sleep mode" (true even if the interrupt is masked).  For example:
 *
 *      lea     #$fff202,A1     ; point to the Freq Sel reg.
 *      lea     #$fff200,A0     ; point to the Ctrl reg.
 *  l1: move.w  (A1),D0         ; sync to rising CLK32 edge
 *      bpl.w   l1              ; wait for CLK32 to go high
 *      bset    #3,(A0)         ; disable PLL
 *      stop    #$2000          ; stop fetching and wait for any IRQ
 *
 * It's also good practice to disable CLKO before sleeping and re-enabling after wake-up (but I'm not sure if this
 * is a software recommendation or a hardware-only issue).  There's also the potential for an external device to try to power
 * itself from the DragonBall's output pins, in which case it may be best to insure the pin(s) are in the "low state"
 * (which again may be a hardware-only issue).
 */
PilotIO.DBREG_PLLCR         = 0x200;
PilotIO.PLLCR_DISPLL                = 0x0008;       // disables PLL if set (to put the CPU in "sleep mode")
PilotIO.PLLCR_CLKEN                 = 0x0010;       // enables CLKO pin if set
PilotIO.PLLCR_SYSCLK                = 0x0700;       // sets system clock to VCO/(2^(SYSCLK+1)), or to VCO if SYSCLK >= 4
PilotIO.PLLCR_PIXCLK                = 0x3800;       // sets LCD pixel clock to VCO/(2^(PIXCLK+1)), or to VCO if PIXCLK >= 4

/**
 * PLL (Phase-Locked Loop Clock Generator) Frequency Select Register (16-bit)
 *
 * On a Pilot, PLLFSR's default value of 0x0123 is used, which means that P is 35 and Q is 1.  P and Q and used to form
 * what's called the "PLL Divisor", using the following formula:  14*(P+1) + Q+1.  So the default PLL Divisor is 506.
 * When choosing other divisors, Q must range from 1 to 14, and P must be greater than Q (which also means that not
 * all divisor values below 225 are possible).
 *
 * The PLL Divisor is used to generate the master frequency, aka system clock.  Assuming a 32.768Khz crystal, multiply that
 * by 506 to get a master frequency of 16.580608Mhz.  DragonBall documentation says 506 was chosen since it can generate standard
 * baud frequencies with an error of only 0.05% (they say an "accuracy of 0.05%" but I think they misspoke :-)).
 */
PilotIO.DBREG_PLLFSR        = 0x202;
PilotIO.PLLFSR_PCOUNT               = 0x00FF;       // P counter
PilotIO.PLLFSR_QCOUNT               = 0x0F00;       // Q counter
PilotIO.PLLFSR_PROT                 = 0x4000;       // protects P and Q counters from additional writes
PilotIO.PLLFSR_CLK32                = 0x8000;       // current state of the CLK32 signal (BUGBUG: we just toggle it -JP)

/**
 * Power Control Register (8-bit, but could also be accessed as a word at 0x206, where bits 8-15 are reserved)
 */
PilotIO.DBREG_PCTLR         = 0x207;
PilotIO.PCTLR_WIDTH                 = 0x1f;         // # of 1/31 the clock is bursted
PilotIO.PCTLR_STOP                  = 0x40;         // immediately enters power-saving mode ("doze mode")
PilotIO.PCTLR_PCEN                  = 0x80;         // enables power controller (disabled by interrupts)

/**
 * Interrupt Vector Register (8-bit)
 */
PilotIO.DBREG_IVR           = 0x300;

/**
 * Interrupt levels (7 is highest priority, 1 is lowest).  The interrupt vector
 * number for an interrupt is formed by the low 3 bits of the level and the high 5 bits
 * of the IVR (the low 3 bits of the IVR are always zero).  If an interrupt occurs
 * before the IVR has been programmed, vector number 0xf is generated by default.
 * The vector number is then multiplied by 4 to form the corresponding vector address (ie,
 * there is no vector base register (VBR); the 68000's vector base is hard-coded to zero).
 */
PilotIO.INTLVL_IRQ7             = 7;
PilotIO.INTLVL_SPIS             = 6;        // Serial Peripheral Interface Slave
PilotIO.INTLVL_TMR1             = 6;
PilotIO.INTLVL_IRQ6             = 6;
PilotIO.INTLVL_PEN              = 5;
PilotIO.INTLVL_SPIM             = 4;        // Serial Peripheral Interface Master
PilotIO.INTLVL_TMR2             = 4;
PilotIO.INTLVL_UART             = 4;
PilotIO.INTLVL_WDT              = 4;        // Watchdog Timer
PilotIO.INTLVL_RTC              = 4;
PilotIO.INTLVL_KBD              = 4;
PilotIO.INTLVL_PWM              = 4;
PilotIO.INTLVL_INT              = 4;
PilotIO.INTLVL_IRQ3             = 3;
PilotIO.INTLVL_IRQ2             = 2;
PilotIO.INTLVL_IRQ1             = 1;

PilotIO.abIMRLvl = [4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 2, 3, 6, 5, 6, 6, 7];

/**
 * Interrupt Control Register (16-bit)
 */
PilotIO.DBREG_ICR           = 0x302;
PilotIO.ICR_ET6                     = 0x0100;
PilotIO.ICR_ET3                     = 0x0200;
PilotIO.ICR_ET2                     = 0x0400;
PilotIO.ICR_ET1                     = 0x0800;

/**
 * Interrupt Mask Register (32-bit)
 */
PilotIO.DBREG_IMR           = 0x304;
PilotIO.IMR_SPIM                    = 0x00000001;
PilotIO.IMR_TMR2                    = 0x00000002;
PilotIO.IMR_UART                    = 0x00000004;
PilotIO.IMR_WDT                     = 0x00000008;
PilotIO.IMR_RTC                     = 0x00000010;
PilotIO.IMR_KBD                     = 0x00000040;
PilotIO.IMR_PWM                     = 0x00000080;
PilotIO.IMR_INT0                    = 0x00000100;
PilotIO.IMR_INT1                    = 0x00000200;
PilotIO.IMR_INT2                    = 0x00000400;
PilotIO.IMR_INT3                    = 0x00000800;
PilotIO.IMR_INT4                    = 0x00001000;
PilotIO.IMR_INT5                    = 0x00002000;
PilotIO.IMR_INT6                    = 0x00004000;
PilotIO.IMR_INT7                    = 0x00008000;
PilotIO.IMR_IRQ1                    = 0x00010000;
PilotIO.IMR_IRQ2                    = 0x00020000;
PilotIO.IMR_IRQ3                    = 0x00040000;
PilotIO.IMR_IRQ6                    = 0x00080000;
PilotIO.IMR_PEN                     = 0x00100000;
PilotIO.IMR_SPIS                    = 0x00200000;
PilotIO.IMR_TMR1                    = 0x00400000;
PilotIO.IMR_IRQ7                    = 0x00800000;

PilotIO.DBREG_IWR           = 0x308;        // Interrupt Wakeup Enable Register (32-bit)
PilotIO.DBREG_ISR           = 0x30C;        // Interrupt Status Register (32-bit)
PilotIO.DBREG_IPR           = 0x310;        // Interrupt Pending Register (32-bit)

/**
 * Port registers (all 8-bit)
 */
PilotIO.DBREG_PADIR         = 0x400;
PilotIO.DBREG_PADATA        = 0x401;
PilotIO.DBREG_PASEL         = 0x403;
PilotIO.DBREG_PBDIR         = 0x408;
PilotIO.DBREG_PBDATA        = 0x409;
PilotIO.DBREG_PBSEL         = 0x40B;
PilotIO.DBREG_PCDIR         = 0x410;

/**
 * I don't know the details of the Port C Data register (PCDATA), but I do know that in PalmOS 3.3,
 * in a routine called PrvLowBatteryShutdownNow, if it doesn't see bit 4 (value 0x10) set in PCDATA,
 * then it wants to go to sleep (ie, TRAP HwrSleep).  Let's avoid that for now.  ;-) -JP
 */
PilotIO.DBREG_PCDATA        = 0x411;
PilotIO.DBREG_PCSEL         = 0x413;

/**
 * The Port D Data register contains bits that map to the hardware button interrupt lines:
 *      Bit 0:  DeviceInterface.BUTTON_POWER
 *      Bit 1:  DeviceInterface.BUTTON_UP
 *      Bit 2:  DeviceInterface.BUTTON_DOWN
 *      Bit 3:  DeviceInterface.BUTTON_DATEBOOK
 *      Bit 4:  DeviceInterface.BUTTON_ADDRESS
 *      Bit 5:  DeviceInterface.BUTTON_TODOLIST
 *      Bit 6:  DeviceInterface.BUTTON_MEMOPAD
 *      Bit 7:  Undefined
 */
PilotIO.DBREG_PDDIR         = 0x418;
PilotIO.DBREG_PDDATA        = 0x419;
PilotIO.DBREG_PDPUEN        = 0x41A;
PilotIO.DBREG_PDPOL         = 0x41C;
PilotIO.DBREG_PDIRQEN       = 0x41D;
PilotIO.DBREG_PDIRQEDGE     = 0x41F;
PilotIO.DBREG_PEDIR         = 0x420;
PilotIO.DBREG_PEDATA        = 0x421;
PilotIO.DBREG_PEPUEN        = 0x422;
PilotIO.DBREG_PESEL         = 0x423;
PilotIO.DBREG_PFDIR         = 0x428;

/**
 * The Port F Data register contains bits that control the LCD display.  The most important one is bit 4 (0x10).
 */
PilotIO.DBREG_PFDATA        = 0x429;
PilotIO.PFDATA_LCDENABLE            = 0x10;
PilotIO.DBREG_PFPUEN        = 0x42A;
PilotIO.DBREG_PFSEL         = 0x42B;
PilotIO.DBREG_PGDIR         = 0x430;
PilotIO.DBREG_PGDATA        = 0x431;
PilotIO.DBREG_PGPUEN        = 0x432;
PilotIO.DBREG_PGSEL         = 0x433;
PilotIO.DBREG_PJDIR         = 0x438;
PilotIO.DBREG_PJDATA        = 0x439;
PilotIO.DBREG_PJSEL         = 0x43B;
PilotIO.DBREG_PKDIR         = 0x440;
PilotIO.DBREG_PKDATA        = 0x441;
PilotIO.DBREG_PKPUEN        = 0x442;
PilotIO.DBREG_PKSEL         = 0x443;
PilotIO.DBREG_PMDIR         = 0x448;
PilotIO.DBREG_PMDATA        = 0x449;
PilotIO.DBREG_PMPUEN        = 0x44A;
PilotIO.DBREG_PMSEL         = 0x44B;

PilotIO.DBREG_PWMC          = 0x500;        // PWM Control Register
PilotIO.DBREG_PWMP          = 0x502;        // PWM Period Register
PilotIO.DBREG_PWMW          = 0x504;        // PWM Width Register
PilotIO.DBREG_PWMCNT        = 0x506;        // PWM Counter Register

PilotIO.DBREG_TCTL1         = 0x600;        // Timer Unit 1 Control Register (TMR1, 16-bit)
PilotIO.TCTL                    = 0;
PilotIO.TCTL_TEN                    = 0x0001;       // timer enable
PilotIO.TCTL_CLKSOURCE              = 0x000E;       // clock source
PilotIO.CLKSOURCE_STOPCOUNT         =    0x0;
PilotIO.CLKSOURCE_SYSTEMCLOCK       =    0x2;       // input clock = system clock
PilotIO.CLKSOURCE_SYSTEMCLOCKDIV16  =    0x4;       // input clock = system clock / 16
PilotIO.CLKSOURCE_TINPIN            =    0x6;
PilotIO.CLKSOURCE_32OR38KHZ         =    0x8;
PilotIO.TCTL_IRQEN                  = 0x0010;       // reference event interrupt enable
PilotIO.TCTL_OM                     = 0x0020;       // output mode
PilotIO.TCTL_CAPTUREEDGE            = 0x00C0;       // capture edge
PilotIO.TCTL_FRR                    = 0x0100;       // free run/restart

PilotIO.DBREG_TPRER1        = 0x602;        // Timer Unit 1 Prescaler Register (16-bit)
PilotIO.TPRER                   = 1;        // the value TPRER_PRESCALER+1 is used to divide the input clock
PilotIO.TPRER_PRESCALER             = 0x00FF;

PilotIO.DBREG_TCMP1         = 0x604;        // Timer Unit 1 Compare Register (16-bit)
PilotIO.TCMP                    = 2;

PilotIO.DBREG_TCR1          = 0x606;        // Timer Unit 1 Capture Register (16-bit, R/O)
PilotIO.TCR                     = 3;

PilotIO.DBREG_TCN1          = 0x608;        // Timer Unit 1 Counter Register (16-bit, R/O)
PilotIO.TCN                     = 4;

PilotIO.DBREG_TSTAT1        = 0x60A;        // Timer Unit 1 Status Register (16-bit)
PilotIO.TSTAT                   = 5;
PilotIO.TSTAT_COMP                  = 0x0001;       // compare event
PilotIO.TSTAT_CAPT                  = 0x0002;       // capture event

PilotIO.TSTAT_LASTREAD          = 6;        // this isn't a real register, just something we maintain internally
PilotIO.TMR_REGS                = 7;        // total # of TMR registers

PilotIO.DBREG_TCTL2         = 0x60C;        // Timer Unit 2 Control Register (TMR2, 16-bit)
PilotIO.DBREG_TPRER2        = 0x60E;        // Timer Unit 2 Prescaler Register (16-bit)

/**
 * On a Pilot, TCMP2 is set to 0xD7E4, or 55268.  Since TCTL2 sets the input clock to the system clock,
 * and TPRER2 is set to 2 (which divides the input clock by 3), 100 interrupts per second are generated
 * (16580608 / 3 / 55268).
 */
PilotIO.DBREG_TCMP2         = 0x610;        // Timer Unit 2 Compare Register (16-bit)
PilotIO.DBREG_TCR2          = 0x612;        // Timer Unit 2 Capture Register (16-bit, R/O)
PilotIO.DBREG_TCN2          = 0x614;        // Timer Unit 2 Counter Register (16-bit, R/O)
PilotIO.DBREG_TSTAT2        = 0x616;        // Timer Unit 2 Status Register (16-bit)
PilotIO.DBREG_WCSR          = 0x618;        // Watchdog Control and Status Register
PilotIO.DBREG_WRR           = 0x61A;        // Watchdog Compare Register
PilotIO.DBREG_WCN           = 0x61C;        // Watchdog Counter Register

PilotIO.DBREG_SPISR         = 0x700;        // SPIS (Serial Peripheral Interface Slave) Register (16-bit)

PilotIO.DBREG_SPIMDATA      = 0x800;        // SPIM (Serial Peripheral Interface Master) Data Register (16-bit)
PilotIO.DBREG_SPIMCONT      = 0x802;        // SPIM (Serial Peripheral Interface Master) Control/Status Register (16-bit)
PilotIO.SPIMCONT_BITCOUNT           = 0x000F;
PilotIO.SPIMCONT_POL                = 0x0010;       // polarity
PilotIO.SPIMCONT_PHA                = 0x0020;       // phase
PilotIO.SPIMCONT_IRQEN              = 0x0040;       // interrupt request enable
PilotIO.SPIMCONT_SPIMIRQ            = 0x0080;
PilotIO.SPIMCONT_XCH                = 0x0100;
PilotIO.SPIMCONT_SPIMEN             = 0x0200;       // SPI master enable
PilotIO.SPIMCONT_DATARATE           = 0xE000;

PilotIO.DBREG_USTCNT        = 0x900;        // UART Status/Control Register
PilotIO.DBREG_UBAUD         = 0x902;        // UART Baud Control Register
PilotIO.DBREG_URX           = 0x904;        // UART RX Register
PilotIO.DBREG_UTX           = 0x906;        // UART TX Register
PilotIO.DBREG_UMISC         = 0x908;        // UART Misc Register

PilotIO.LCDREG_SSA          = 0x00;         // LCD Screen Starting Address Register (LSSA, 32-bit)
PilotIO.LCDREG_VPW          = 0x05;         // LCD Virtual Page Width Register (LVPW, 8-bit, normally set to 10, units are words)
PilotIO.LCDREG_XMAX         = 0x08;         // LCD Screen Width Register (LXMAX, 16-bit)
PilotIO.LCDREG_YMAX         = 0x0A;         // LCD Screen Height Register (LYMAX, 16-bit)
PilotIO.LCDREG_CXP          = 0x18;         // LCD Cursor X Position Register (LCXP, 16-bit)
PilotIO.LCDREG_CYP          = 0x1A;         // LCD Cursor Y Position Register (LCYP, 16-bit)
PilotIO.LCDREG_CWCH         = 0x1C;         // LCD Cursor Width & Height Register (LCWCH, 16-bit)
PilotIO.LCDREG_BLKC         = 0x1F;         // LCD Blink Control Register (LBLKC, 8-bit)
PilotIO.LCDREG_PICF         = 0x20;         // LCD Panel Interface Configuration Register (LPICF, 8-bit)
                                            //  (bit 0 normally clear for 1-bit mode, set for 2-bit mode)
PilotIO.LCDREG_POLCF        = 0x21;         // LCD Polarity Configuration Register (LPOLCF, 8-bit)
PilotIO.LCDREG_ACDRC        = 0x23;         // ACD (M) Rate Control Register (LACDRC, 8-bit)
PilotIO.LCDREG_PXCD         = 0x25;         // LCD Pixel Clock Divider Register (LPXCD, 8-bit)
PilotIO.LCDREG_CKCON        = 0x27;         // LCD Clocking Control Register (LCKCON, 8-bit)
PilotIO.CKCON_LCDON               = 0x80;   // bit 7 enables LCD controller if set, disables if clear
PilotIO.LCDREG_LBAR         = 0x29;         // LCD Last Buffer Address Register (LLBAR, 8-bit, normally same as VPW)
PilotIO.LCDREG_OTCR         = 0x2B;         // LCD Octet Terminal Count Register (LOTCR, 8-bit)
PilotIO.LCDREG_POSR         = 0x2D;         // LCD Panning Offset Register (LPOSR, 8-bit)
PilotIO.LCDREG_FRCM         = 0x31;         // LCD Frame-Rate Modulation Control Register (LFRCM, 8-bit)
PilotIO.LCDREG_GPMR         = 0x32;         // LCD Gray Palette Mapping Register (LGPMR, 16-bit)

PilotIO.DEF_SCREEN_WIDTH    = 160;
PilotIO.DEF_SCREEN_HEIGHT   = 160;

PilotIO.DBREG_RHMSR         = 0xB00;        // RTC Hours Minutes Seconds Register (32-bit)
PilotIO.RHMSR_HOURS                 = 0x1f000000;
PilotIO.RHMSR_HOURS_SHIFT           = 24;
PilotIO.RHMSR_MINUTES               = 0x003f0000;
PilotIO.RHMSR_MINUTES_SHIFT         = 16;
PilotIO.RHMSR_SECONDS               = 0x0000003f;
PilotIO.RHMSR_SECONDS_SHIFT         = 0;
PilotIO.DBREG_RALARM        = 0xB04;        // RTC Alarm Register
PilotIO.DBREG_RCTL          = 0xB0C;        // RTC Control Register
PilotIO.DBREG_RISR          = 0xB0E;        // RTC Interrupt Status Register
PilotIO.DBREG_RIENR         = 0xB10;        // RTC Interrupt Enable Register
PilotIO.DBREG_RSTPWCH       = 0xB12;        // RTC Stopwatch Register

PilotIO.abRegsInit = {
    [PilotIO.DBREG_PCTLR]:    0x1F,
    [PilotIO.DBREG_PDPUEN]:   0xFF,
    [PilotIO.DBREG_PEPUEN]:   0x80,
    [PilotIO.DBREG_PESEL]:    0x80,
    [PilotIO.DBREG_PFPUEN]:   0xFF,
    [PilotIO.DBREG_PFSEL]:    0xFF,
    [PilotIO.DBREG_PGPUEN]:   0xFF,
    [PilotIO.DBREG_PGSEL]:    0xFF,
    [PilotIO.DBREG_PKPUEN]:   0x3F,
    [PilotIO.DBREG_PKSEL]:    0x3F,
    [PilotIO.DBREG_PMPUEN]:   0xFF,
    [PilotIO.DBREG_PMSEL]:    0x02,
    [PilotIO.LCDREG_VPW]:     (PilotIO.DEF_SCREEN_WIDTH/8)/2,
    [PilotIO.LCDREG_BLKC]:    0x7F,
    [PilotIO.LCDREG_CKCON]:   0x40,                                   // LCD controller initially disabled
    [PilotIO.LCDREG_LBAR]:    (PilotIO.DEF_SCREEN_WIDTH/8)/2,         // we initialize this to 10, they seem to prefer 9, hmmm
    [PilotIO.LCDREG_OTCR]:    0x3F,
    [PilotIO.LCDREG_FRCM]:    0xB9
};

PilotIO.awRegsInit = {
    [PilotIO.DBREG_PLLCR]:    0x2400,
    [PilotIO.DBREG_PLLFSR]:   0x0123,         // sets Q counter to 0x1, P counter to 0x23
    [PilotIO.DBREG_TCMP1]:    0xFFFF,
    [PilotIO.DBREG_TCMP2]:    0xFFFF,
    [PilotIO.DBREG_WCSR]:     0x0001,
    [PilotIO.DBREG_WRR]:      0xFFFF,
    [PilotIO.DBREG_UBAUD]:    0x003F,
    [PilotIO.LCDREG_XMAX]:    0x03FF,
    [PilotIO.LCDREG_YMAX]:    0x01FF,
    [PilotIO.LCDREG_CWCH]:    0x0101,
    [PilotIO.LCDREG_GPMR]:    0x1073
};

PilotIO.alRegsInit = {
    [PilotIO.DBREG_IMR]:      0x00FFFFFF,
    [PilotIO.DBREG_IWR]:      0x00FFFFFF
};

PilotIO.CLASSES["PilotIO"] = PilotIO;
