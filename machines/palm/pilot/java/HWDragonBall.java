/*  HWDragonBall.java
 *
 *  v1.0 created April 2001 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  This encapsulates the hardware registers for the Device.
 */


import java.util.*;                     // for Vector class


class HWDragonBall extends HWRegs
{
    private Device dev;
    private CPUMem mem;
    private Vector vecHWRegs;
    
    //  For the most part, all hardware register values are simply maintained in the
    //  memory we allocated along with the hardware address range (we don't have a notion of
    //  valid address ranges that aren't backed by memory anyway, so why waste the memory).
    //
    //  However, for the sake of the emulator's performance, there are certain frequently
    //  accessed hardware registers that we prefer to maintain internally inside HWDragonBall, to
    //  avoid the overhead of extracting them from the memory subsystem maintained by CPUMem.
    //  We list those internal variables here, so that you know they're special.
    
    private int[] awTMR1;
    private int[] awTMR2;
    private int xPenCurrent, yPenCurrent;       // current pen position
    private boolean fPenDown, fPenUpPending;    // keeps track of whether the pen is currently down
    private boolean fPenRead;                   // keeps track of whether the last pen position change has been read yet
    private byte bPDDataEdge;                   // keeps track of button interrupt transitions
    private Date dateRTC;                       // a Date object used to help simulate the RTC
    private long msRTCDelta;                    // the delta between the device's specified time and the "real world" time
    

    /*  List of supported DragonBall h/w registers (see p.24 of MC68328 User's Manual 12/9/97)
     */
    public static final int DBREGS_BASE         = 0xfffff000;
    public static final int DBREGS_SIZE         = 0x00001000;
    public static final int DBREGS_LIMIT        = DBREGS_BASE + DBREGS_SIZE;
    
    //  System Control Register
    public static final int DBREG_SCR           = 0x000;
    
    //  Mask Revision Register
    public static final int DBREG_MRR           = 0x004;
    
    //  Chip Select Base Registers
    public static final int DBREG_GRPBASEA      = 0x100;
    public static final int DBREG_GRPBASEB      = 0x102;
    public static final int DBREG_GRPBASEC      = 0x104;
    public static final int DBREG_GRPBASED      = 0x106;
    
    //  Chip Select A Mask Registers
    public static final int DBREG_GRPMASKA      = 0x108;
    public static final int DBREG_GRPMASKB      = 0x10A;
    public static final int DBREG_GRPMASKC      = 0x10C;
    public static final int DBREG_GRPMASKD      = 0x10E;
    
    //  Group Chip Select Option Registers
    public static final int DBREG_CSA0          = 0x110;
    public static final int DBREG_CSA1          = 0x114;
    public static final int DBREG_CSA2          = 0x118;
    public static final int DBREG_CSA3          = 0x11C;
    public static final int DBREG_CSB0          = 0x120;
    public static final int DBREG_CSB1          = 0x124;
    public static final int DBREG_CSB2          = 0x128;
    public static final int DBREG_CSB3          = 0x12C;
    public static final int DBREG_CSC0          = 0x130;
    public static final int DBREG_CSC1          = 0x134;
    public static final int DBREG_CSC2          = 0x138;
    public static final int DBREG_CSC3          = 0x13C;
    public static final int DBREG_CSD0          = 0x140;
    public static final int DBREG_CSD1          = 0x144;
    public static final int DBREG_CSD2          = 0x148;
    public static final int DBREG_CSD3          = 0x14C;
    
    public static final int CHIP_SELECT_DEFAULT = 0x00010006;

    //  PLL (Phase-Locked Loop Clock Generator) Control Register (16-bit)
    //
    //  To put the CPU in "sleep mode", the simplest approach is to wait until PLLFSR_CLK32 in DBREG_PLLFSR goes high,
    //  and then shut down the PLL by setting PLLCR_DISPLL in DBREG_PLLCR.  Any interrupt specified as a "wake up" interrupt
    //  in DBREG_IWR can take the CPU out of "sleep mode" (true even if the interrupt is masked).  For example:
    //
    //      lea     #$fff202,A1     ; point to the Freq Sel reg.
    //      lea     #$fff200,A0     ; point to the Ctrl reg.
    //  l1: move.w  (A1),D0         ; sync to rising CLK32 edge
    //      bpl.w   l1              ; wait for CLK32 to go high
    //      bset    #3,(A0)         ; disable PLL
    //      stop    #$2000          ; stop fetching and wait for any IRQ
    //
    //  It's also good practice to disable CLKO before sleeping and re-enabling after wake-up (but I'm not sure if this
    //  is a software recommendation or a hardware-only issue).  There's also the potential for an external device to try to power
    //  itself from the DragonBall's output pins, in which case it may be best to insure the pin(s) are in the "low state"
    //  (which again may be a hardware-only issue).
    public static final int DBREG_PLLCR         = 0x200;
    public static final int PLLCR_DISPLL                = 0x0008;       // disables PLL if set (to put the CPU in "sleep mode")
    public static final int PLLCR_CLKEN                 = 0x0010;       // enables CLKO pin if set
    public static final int PLLCR_SYSCLK                = 0x0700;       // sets system clock to VCO/(2^(SYSCLK+1)), or to VCO if SYSCLK >= 4
    public static final int PLLCR_PIXCLK                = 0x3800;       // sets LCD pixel clock to VCO/(2^(PIXCLK+1)), or to VCO if PIXCLK >= 4
    
    //  PLL (Phase-Locked Loop Clock Generator) Frequency Select Register (16-bit)
    //
    //  On a Pilot, PLLFSR's default value of 0x0123 is used, which means that P is 35 and Q is 1.  P and Q and used to form
    //  what's called the "PLL Divisor", using the following formula:  14*(P+1) + Q+1.  So the default PLL Divisor is 506.
    //  When choosing other divisors, Q must range from 1 to 14, and P must be greater than Q (which also means that not
    //  all divisor values below 225 are possible).
    //
    //  The PLL Divisor is used to generate the master frequency, aka system clock.  Assuming a 32.768Khz crystal, multiply that
    //  by 506 to get a master frequency of 16.580608Mhz.  DragonBall documentation says 506 was chosen since it can generate standard
    //  baud frequencies with an error of only 0.05% (they say an "accuracy of 0.05%" but I think they misspoke :-)).
    public static final int DBREG_PLLFSR        = 0x202;
    public static final int PLLFSR_PCOUNT               = 0x00FF;       // P counter
    public static final int PLLFSR_QCOUNT               = 0x0F00;       // Q counter
    public static final int PLLFSR_PROT                 = 0x4000;       // protects P and Q counters from additional writes
    public static final int PLLFSR_CLK32                = 0x8000;       // current state of the CLK32 signal (BUGBUG: we just toggle it -JP)
    
    //  Power Control Register (8-bit, but could also be accessed as a word at 0x206, where bits 8-15 are reserved)
    public static final int DBREG_PCTLR         = 0x207;
    public static final int PCTLR_WIDTH                 = 0x1f;         // # of 1/31 the clock is bursted
    public static final int PCTLR_STOP                  = 0x40;         // immediately enters power-saving mode ("doze mode")
    public static final int PCTLR_PCEN                  = 0x80;         // enables power controller (disabled by interrupts)
    
    //  Interrupt Vector Register (8-bit)
    public static final int DBREG_IVR           = 0x300;
    
    //  Interrupt levels (7 is highest priority, 1 is lowest).  The interrupt vector
    //  number for an interrupt is formed by the low 3 bits of the level and the high 5 bits
    //  of the IVR (the low 3 bits of the IVR are always zero).  If an interrupt occurs
    //  before the IVR has been programmed, vector number 0xf is generated by default.
    //  The vector number is then multiplied by 4 to form the corresponding vector address (ie,
    //  there is no vector base register (VBR); the 68000's vector base is hard-coded to zero).
    public static final int INTLVL_IRQ7             = 7;
    public static final int INTLVL_SPIS             = 6;        // Serial Peripheral Interface Slave
    public static final int INTLVL_TMR1             = 6;
    public static final int INTLVL_IRQ6             = 6;
    public static final int INTLVL_PEN              = 5;
    public static final int INTLVL_SPIM             = 4;        // Serial Peripheral Interface Master
    public static final int INTLVL_TMR2             = 4;
    public static final int INTLVL_UART             = 4;
    public static final int INTLVL_WDT              = 4;        // Watchdog Timer
    public static final int INTLVL_RTC              = 4;
    public static final int INTLVL_KBD              = 4;
    public static final int INTLVL_PWM              = 4;
    public static final int INTLVL_INT              = 4;
    public static final int INTLVL_IRQ3             = 3;
    public static final int INTLVL_IRQ2             = 2;
    public static final int INTLVL_IRQ1             = 1;
    public static final byte abIMRLvl[] = {4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 2, 3, 6, 5, 6, 6, 7};

    //  Interrupt Control Register (16-bit)
    public static final int DBREG_ICR           = 0x302;
    public static final int ICR_ET6                     = 0x0100;
    public static final int ICR_ET3                     = 0x0200;
    public static final int ICR_ET2                     = 0x0400;
    public static final int ICR_ET1                     = 0x0800;
    
    //  Interrupt Mask Register (32-bit)
    public static final int DBREG_IMR           = 0x304;
    public static final int IMR_SPIM                    = 0x00000001;
    public static final int IMR_TMR2                    = 0x00000002;
    public static final int IMR_UART                    = 0x00000004;
    public static final int IMR_WDT                     = 0x00000008;
    public static final int IMR_RTC                     = 0x00000010;
    public static final int IMR_KBD                     = 0x00000040;
    public static final int IMR_PWM                     = 0x00000080;
    public static final int IMR_INT0                    = 0x00000100;
    public static final int IMR_INT1                    = 0x00000200;
    public static final int IMR_INT2                    = 0x00000400;
    public static final int IMR_INT3                    = 0x00000800;
    public static final int IMR_INT4                    = 0x00001000;
    public static final int IMR_INT5                    = 0x00002000;
    public static final int IMR_INT6                    = 0x00004000;
    public static final int IMR_INT7                    = 0x00008000;
    public static final int IMR_IRQ1                    = 0x00010000;
    public static final int IMR_IRQ2                    = 0x00020000;
    public static final int IMR_IRQ3                    = 0x00040000;
    public static final int IMR_IRQ6                    = 0x00080000;
    public static final int IMR_PEN                     = 0x00100000;
    public static final int IMR_SPIS                    = 0x00200000;
    public static final int IMR_TMR1                    = 0x00400000;
    public static final int IMR_IRQ7                    = 0x00800000;
    
    public static final int DBREG_IWR           = 0x308;        // Interrupt Wakeup Enable Register (32-bit)
    public static final int DBREG_ISR           = 0x30C;        // Interrupt Status Register (32-bit)
    public static final int DBREG_IPR           = 0x310;        // Interrupt Pending Register (32-bit)
    
    //  Port registers (all 8-bit)
    public static final int DBREG_PADIR         = 0x400;
    public static final int DBREG_PADATA        = 0x401;
    public static final int DBREG_PASEL         = 0x403;
    public static final int DBREG_PBDIR         = 0x408;
    public static final int DBREG_PBDATA        = 0x409;
    public static final int DBREG_PBSEL         = 0x40B;
    public static final int DBREG_PCDIR         = 0x410;
    
    //  I don't know the details of the Port C Data register (PCDATA), but I do know that in PalmOS 3.3,
    //  in a routine called PrvLowBatteryShutdownNow, if it doesn't see bit 4 (value 0x10) set in PCDATA,
    //  then it wants to go to sleep (ie, TRAP HwrSleep).  Let's avoid that for now.  ;-) -JP
    public static final int DBREG_PCDATA        = 0x411;
    public static final int DBREG_PCSEL         = 0x413;
    
    //  The Port D Data register contains bits that map to the hardware button interrupt lines:
    //      Bit 0:  DeviceInterface.BUTTON_POWER
    //      Bit 1:  DeviceInterface.BUTTON_UP
    //      Bit 2:  DeviceInterface.BUTTON_DOWN
    //      Bit 3:  DeviceInterface.BUTTON_DATEBOOK
    //      Bit 4:  DeviceInterface.BUTTON_ADDRESS
    //      Bit 5:  DeviceInterface.BUTTON_TODOLIST
    //      Bit 6:  DeviceInterface.BUTTON_MEMOPAD
    //      Bit 7:  Undefined
    public static final int DBREG_PDDIR         = 0x418;
    public static final int DBREG_PDDATA        = 0x419;
    public static final int DBREG_PDPUEN        = 0x41A;
    public static final int DBREG_PDPOL         = 0x41C;
    public static final int DBREG_PDIRQEN       = 0x41D;
    public static final int DBREG_PDIRQEDGE     = 0x41F;
    public static final int DBREG_PEDIR         = 0x420;
    public static final int DBREG_PEDATA        = 0x421;
    public static final int DBREG_PEPUEN        = 0x422;
    public static final int DBREG_PESEL         = 0x423;
    public static final int DBREG_PFDIR         = 0x428;
    
    //  The Port F Data register contains bits that control the LCD display.  The most important one is bit 4 (0x10).
    public static final int DBREG_PFDATA        = 0x429;
    public static final int PFDATA_LCDENABLE            = 0x10;
    public static final int DBREG_PFPUEN        = 0x42A;
    public static final int DBREG_PFSEL         = 0x42B;
    public static final int DBREG_PGDIR         = 0x430;
    public static final int DBREG_PGDATA        = 0x431;
    public static final int DBREG_PGPUEN        = 0x432;
    public static final int DBREG_PGSEL         = 0x433;
    public static final int DBREG_PJDIR         = 0x438;
    public static final int DBREG_PJDATA        = 0x439;
    public static final int DBREG_PJSEL         = 0x43B;
    public static final int DBREG_PKDIR         = 0x440;
    public static final int DBREG_PKDATA        = 0x441;
    public static final int DBREG_PKPUEN        = 0x442;
    public static final int DBREG_PKSEL         = 0x443;
    public static final int DBREG_PMDIR         = 0x448;
    public static final int DBREG_PMDATA        = 0x449;
    public static final int DBREG_PMPUEN        = 0x44A;
    public static final int DBREG_PMSEL         = 0x44B;
    
    public static final int DBREG_PWMC          = 0x500;        // PWM Control Register
    public static final int DBREG_PWMP          = 0x502;        // PWM Period Register
    public static final int DBREG_PWMW          = 0x504;        // PWM Width Register
    public static final int DBREG_PWMCNT        = 0x506;        // PWM Counter Register
    
    public static final int DBREG_TCTL1         = 0x600;        // Timer Unit 1 Control Register (TMR1, 16-bit)
    public static final int TCTL                    = 0;
    public static final int TCTL_TEN                    = 0x0001;       // timer enable
    public static final int TCTL_CLKSOURCE              = 0x000E;       // clock source
    public static final int CLKSOURCE_STOPCOUNT         =    0x0;
    public static final int CLKSOURCE_SYSTEMCLOCK       =    0x2;       // input clock = system clock
    public static final int CLKSOURCE_SYSTEMCLOCKDIV16  =    0x4;       // input clock = system clock / 16
    public static final int CLKSOURCE_TINPIN            =    0x6;
    public static final int CLKSOURCE_32OR38KHZ         =    0x8;
    public static final int TCTL_IRQEN                  = 0x0010;       // reference event interrupt enable
    public static final int TCTL_OM                     = 0x0020;       // output mode
    public static final int TCTL_CAPTUREEDGE            = 0x00C0;       // capture edge
    public static final int TCTL_FRR                    = 0x0100;       // free run/restart
    
    public static final int DBREG_TPRER1        = 0x602;        // Timer Unit 1 Prescaler Register (16-bit)
    public static final int TPRER                   = 1;        // the value TPRER_PRESCALER+1 is used to divide the input clock
    public static final int TPRER_PRESCALER             = 0x00FF;
    
    public static final int DBREG_TCMP1         = 0x604;        // Timer Unit 1 Compare Register (16-bit)
    public static final int TCMP                    = 2;
    
    public static final int DBREG_TCR1          = 0x606;        // Timer Unit 1 Capture Register (16-bit, R/O)
    public static final int TCR                     = 3;
    
    public static final int DBREG_TCN1          = 0x608;        // Timer Unit 1 Counter Register (16-bit, R/O)
    public static final int TCN                     = 4;
    
    public static final int DBREG_TSTAT1        = 0x60A;        // Timer Unit 1 Status Register (16-bit)
    public static final int TSTAT                   = 5;
    public static final int TSTAT_COMP                  = 0x0001;       // compare event
    public static final int TSTAT_CAPT                  = 0x0002;       // capture event
    
    public static final int TSTAT_LASTREAD          = 6;        // this isn't a real register, just something we maintain internally
    public static final int TMR_REGS                = 7;        // total # of TMR registers
    
    public static final int DBREG_TCTL2         = 0x60C;        // Timer Unit 2 Control Register (TMR2, 16-bit)
    public static final int DBREG_TPRER2        = 0x60E;        // Timer Unit 2 Prescaler Register (16-bit)
    
    //  On a Pilot, TCMP2 is set to 0xD7E4, or 55268.  Since TCTL2 sets the input clock to the system clock,
    //  and TPRER2 is set to 2 (which divides the input clock by 3), 100 interrupts per second are generated
    //  (16580608 / 3 / 55268).
    public static final int DBREG_TCMP2         = 0x610;        // Timer Unit 2 Compare Register (16-bit)
    public static final int DBREG_TCR2          = 0x612;        // Timer Unit 2 Capture Register (16-bit, R/O)
    public static final int DBREG_TCN2          = 0x614;        // Timer Unit 2 Counter Register (16-bit, R/O)
    public static final int DBREG_TSTAT2        = 0x616;        // Timer Unit 2 Status Register (16-bit)
    public static final int DBREG_WCSR          = 0x618;        // Watchdog Control and Status Register
    public static final int DBREG_WRR           = 0x61A;        // Watchdog Compare Register
    public static final int DBREG_WCN           = 0x61C;        // Watchdog Counter Register
    
    public static final int DBREG_SPISR         = 0x700;        // SPIS (Serial Peripheral Interface Slave) Register (16-bit)
    
    public static final int DBREG_SPIMDATA      = 0x800;        // SPIM (Serial Peripheral Interface Master) Data Register (16-bit)
    public static final int DBREG_SPIMCONT      = 0x802;        // SPIM (Serial Peripheral Interface Master) Control/Status Register (16-bit)
    public static final int SPIMCONT_BITCOUNT           = 0x000F;
    public static final int SPIMCONT_POL                = 0x0010;       // polarity
    public static final int SPIMCONT_PHA                = 0x0020;       // phase
    public static final int SPIMCONT_IRQEN              = 0x0040;       // interrupt request enable
    public static final int SPIMCONT_SPIMIRQ            = 0x0080;
    public static final int SPIMCONT_XCH                = 0x0100;
    public static final int SPIMCONT_SPIMEN             = 0x0200;       // SPI master enable
    public static final int SPIMCONT_DATARATE           = 0xE000;
    
    public static final int DBREG_USTCNT        = 0x900;        // UART Status/Control Register
    public static final int DBREG_UBAUD         = 0x902;        // UART Baud Control Register
    public static final int DBREG_URX           = 0x904;        // UART RX Register
    public static final int DBREG_UTX           = 0x906;        // UART TX Register
    public static final int DBREG_UMISC         = 0x908;        // UART Misc Register
    
    public static final int DBREG_RHMSR         = 0xB00;        // RTC Hours Minutes Seconds Register (32-bit)
    public static final int RHMSR_HOURS                 = 0x1f000000;
    public static final int RHMSR_HOURS_SHIFT           = 24;
    public static final int RHMSR_MINUTES               = 0x003f0000;
    public static final int RHMSR_MINUTES_SHIFT         = 16;
    public static final int RHMSR_SECONDS               = 0x0000003f;
    public static final int RHMSR_SECONDS_SHIFT         = 0;
    public static final int DBREG_RALARM        = 0xB04;        // RTC Alarm Register
    public static final int DBREG_RCTL          = 0xB0C;        // RTC Control Register
    public static final int DBREG_RISR          = 0xB0E;        // RTC Interrupt Status Register
    public static final int DBREG_RIENR         = 0xB10;        // RTC Interrupt Enable Register
    public static final int DBREG_RSTPWCH       = 0xB12;        // RTC Stopwatch Register
    
    static final short[] abRegsInit = {
        DBREG_PCTLR,    0x1F,
        DBREG_PDPUEN,   0xFF,
        DBREG_PEPUEN,   0x80,
        DBREG_PESEL,    0x80,
        DBREG_PFPUEN,   0xFF,
        DBREG_PFSEL,    0xFF,
        DBREG_PGPUEN,   0xFF,
        DBREG_PGSEL,    0xFF,
        DBREG_PKPUEN,   0x3F,
        DBREG_PKSEL,    0x3F,
        DBREG_PMPUEN,   0xFF,
        DBREG_PMSEL,    0x02,
    };

    static final int[] awRegsInit = {
        DBREG_PLLCR,    0x2400,
        DBREG_PLLFSR,   0x0123,         // sets Q counter to 0x1, P counter to 0x23
        DBREG_TCMP1,    0xFFFF,
        DBREG_TCMP2,    0xFFFF,
        DBREG_WCSR,     0x0001,
        DBREG_WRR,      0xFFFF,
        DBREG_UBAUD,    0x003F,
    };
    
    static final int[] alRegsInit = {
        DBREG_IMR,      0x00FFFFFF,
        DBREG_IWR,      0x00FFFFFF,
    };
    
    protected static final int SAVEHWR_SIG      = 0x48575200;

    
    /*  HWDragonBall(dev)
     *
     *  Created by CPUMem.InitMem(), and subsequently initialized in Init() by CPUMem.InitMem() as well.
     */
    HWDragonBall(Device dev)
    {
        this.dev = dev;
        
        awTMR1 = new int[TMR_REGS];
        awTMR2 = new int[TMR_REGS];
        
        vecHWRegs = new Vector(4);      // specify an initial and arbitrary capacity of 4
        
        // A traditional approach would be to load only one LCD controller register set, based
        // on an applet parameter that defines the device's capabilities, but I'm going
        // to try something a little different here, and load multiple sets.  Whichever set
        // is ultimately activated by the ROM will in turn be passed to the DeviceScreen class,
        // via Device.ResetScreen(), and the other set(s) will simply lie dormant.  Eventually,
        // I'll add support for the more traditional (and efficient) approach too;  this is just
        // more expedient.
        
        vecHWRegs.addElement(new HWLCDDragonBall(dev));
        vecHWRegs.addElement(new HWLCDEpson1375(dev));
    }
    
    
    /*  Init(mem)
     *
     *  Allocate memory for the hardware registers and initialize all the registers that are defined to
     *  have non-zero starting values.
     *
     *  Note that we do NOT initialize the LCD or RTC portion of the hardware register set;  those are taken
     *  care of by other components (eg, HWLCDDragonBall in the case the DragonBall LCD).
     */
    public void Init(CPUMem mem)
    {
        int i, offset;
        
        this.mem = mem;
        
        dateRTC = new Date();
        msRTCDelta = 0;
        
        mem.InitDeviceBanks(DBREGS_BASE, DBREGS_SIZE);
        
        for (i=0; i<abRegsInit.length; i+=2)
            mem.SetByteEx(DBREGS_BASE + abRegsInit[i], abRegsInit[i+1]);

        for (i=0; i<awRegsInit.length; i+=2)
            mem.SetWordEx(DBREGS_BASE + awRegsInit[i], awRegsInit[i+1]);

        for (i=0; i<alRegsInit.length; i+=2)
            mem.SetLongEx(DBREGS_BASE + alRegsInit[i], alRegsInit[i+1]);

        for (offset = DBREG_CSA0; offset <= DBREG_CSD3; offset += 4)
            mem.SetLongEx(DBREGS_BASE + offset, CHIP_SELECT_DEFAULT);
        
        for (i=0; i<vecHWRegs.size(); i++) {
            HWRegs hwregs = (HWRegs)(vecHWRegs.elementAt(i));
            hwregs.Init(mem);
        }
    }
    
    
    /*  Save(file)
     *
     *  Write the current set of device registers to the specified file.
     */
    public void Save(FileStream file)
    {
        // The first DWORD is a signature, followed by two more DWORDs describing the length and address of the data
            
        file.WriteInt(SAVEHWR_SIG);
        file.WriteInt(DBREGS_SIZE + awTMR1.length*4 + awTMR2.length*4);
        file.WriteInt(DBREGS_BASE);
            
        mem.GetBytes(DBREGS_BASE, DBREGS_SIZE, file);
        
        // BUGBUG: We might need to write out more of the internal variables we use for tracking hardware state as well -JP
        
        int i;
        for (i=0; i<awTMR1.length; i++)
            file.WriteInt(awTMR1[i]);
        for (i=0; i<awTMR2.length; i++)
            file.WriteInt(awTMR2[i]);
        
        for (i=0; i<vecHWRegs.size(); i++) {
            HWRegs hwregs = (HWRegs)(vecHWRegs.elementAt(i));
            hwregs.Save(file);
        }
    }
    
    
    /*  Restore(file)
     *
     *  Read the current set of device registers from the specified file.
     */
    public boolean Restore(FileStream file)
    {
        // The first DWORD is a signature, followed by two more DWORDs describing the length and address of the data
            
        int sig = file.ReadInt();
        int length = file.ReadInt();
        int addr = file.ReadInt();
            
        if (sig != SAVEHWR_SIG || length != DBREGS_SIZE + awTMR1.length*4 + awTMR2.length*4 || addr != DBREGS_BASE)
            return false;
        
        mem.SetBytes(addr, DBREGS_SIZE, file);
        
        // BUGBUG: We might need to read in more of the internal variables we use for tracking hardware state as well -JP
        
        int i;
        for (i=0; i<awTMR1.length; i++)
            awTMR1[i] = file.ReadInt();
        for (i=0; i<awTMR2.length; i++)
            awTMR2[i] = file.ReadInt();
        
        for (i=0; i<vecHWRegs.size(); i++) {
            HWRegs hwregs = (HWRegs)(vecHWRegs.elementAt(i));
            hwregs.Restore(file);
        }
        return true;
    }


    /*  GetByte(addr)
     *
     *  Get one byte from the register set.
     */
    public final byte GetByte(int addr)
    {
        if (mem.PageBank(addr, true))
            return mem.GetByte(addr);
        
        byte data = 0;
        
stage1: {

        for (int i=0; i<vecHWRegs.size(); i++) {
            HWRegs hwregs = (HWRegs)(vecHWRegs.elementAt(i));
            if (addr >= hwregs.addrBase && addr < hwregs.addrLimit) {
                data = hwregs.GetByte(addr);
                break stage1;
            }
        }
        
        // Easy way to detect our dummy "guard banks": DBREGS_BASE is a negative int, so a positive addr is bogus...
        if (addr > 0)
            break stage1;
        
        data = mem.GetByteEx(addr);
        
        int reg = addr - DBREGS_BASE;
        
        switch (reg) {
        case DBREG_PCDATA:
            data |= 0x10;       // BUGBUG: see "documentation" above regarding PCDATA -JP
            mem.SetByteEx(addr, data);
            break;
            
#if DEBUG            
        case DBREG_IMR:         /* 0x304 */
        case DBREG_IMR+1:
        case DBREG_IMR+2:
        case DBREG_IMR+3:
        case DBREG_ISR:         /* 0x30c */
        case DBREG_ISR+1:
        case DBREG_ISR+2:
        case DBREG_ISR+3:
            
        case DBREG_TCTL1:       /* 0x600 */
        case DBREG_TCTL1+1:
        case DBREG_TPRER1:
        case DBREG_TPRER1+1:
        case DBREG_TCMP1:
        case DBREG_TCMP1+1:
        case DBREG_TCR1:
        case DBREG_TCR1+1:
        case DBREG_TCN1:
        case DBREG_TCN1+1:
        case DBREG_TSTAT1:
        case DBREG_TSTAT1+1:
            
        case DBREG_TCTL2:
        case DBREG_TCTL2+1:
        case DBREG_TPRER2:
        case DBREG_TPRER2+1:
        case DBREG_TCMP2:
        case DBREG_TCMP2+1:
        case DBREG_TCR2:
        case DBREG_TCR2+1:
        case DBREG_TCN2:
        case DBREG_TCN2+1:
        case DBREG_TSTAT2:
        case DBREG_TSTAT2+1:
            
        case DBREG_RHMSR:
        case DBREG_RHMSR+1:
        case DBREG_RHMSR+2:
        case DBREG_RHMSR+3:
            Emulator.Assert_Debug(false, "GetByte(" + Integer.toHexString(addr) + ") from PC " + Integer.toHexString(mem.pc0) + ": unexpected");
            break;
#endif
        }
        
        }   // stage1

        if ((mem.fCPU & mem.CPU_WATCHHW) != 0 && mem.debugger != null)
            mem.debugger.MarkHardwareAccess(addr, 1, data, DebuggerInterface.DATAACCESS_READ);
        
        return data;
    }
    

    /*  GetWord(addr)
     *
     *  Get one word from the register set.
     */
    public final int GetWord(int addr)
    {
        if (mem.PageBank(addr, true))
            return mem.GetWord(addr);
        
        int data = 0;
        
stage1: {        
        for (int i=0; i<vecHWRegs.size(); i++) {
            HWRegs hwregs = (HWRegs)(vecHWRegs.elementAt(i));
            if (addr >= hwregs.addrBase && addr < hwregs.addrLimit) {
                data = hwregs.GetWord(addr);
                break stage1;
            }
        }
        
        // Easy way to detect our dummy "guard banks": DBREGS_BASE is a negative int, so a positive addr is bogus...
        if (addr > 0)
            break stage1;
        
        // BUGBUG: This is superfluous when the registers are internal variables (eg, awTMR1) -JP
        data = mem.GetWordEx(addr);
        
        int reg = addr - DBREGS_BASE;
        
      //Emulator.Assert_Debug(reg >= 0 && reg < DBREG_SIZE, "HWDragonBall.GetWord: bad address: 0x" + Integer.toHexString(addr));
        
        switch (reg) {
        case DBREG_PLLFSR:
            data ^= PLLFSR_CLK32;
            mem.SetWordEx(addr, data);
            break;
            
        case DBREG_IPR:
          //BUGBUG: Until we understand how to clear PEN interrupts, let's clear them when the mouse is released -JP
          //if ((data & (IMR_PEN >> 16)) != 0)
          //    UpdateInterrupts(IMR_PEN, 0, false);
            break;
            
        case DBREG_IPR+2:
            break;

        case DBREG_TCTL1:
        case DBREG_TPRER1:
        case DBREG_TCMP1:
        case DBREG_TCR1:
        case DBREG_TCN1:
            UpdateTimers(0);
            data = awTMR1[(reg - DBREG_TCTL1)/2];
            break;
            
        case DBREG_TSTAT1:
            UpdateTimers(0);
            data = awTMR1[TSTAT];
            awTMR1[TSTAT_LASTREAD] |= data;
            break;
            
        case DBREG_TCTL2:
        case DBREG_TPRER2:
        case DBREG_TCMP2:
        case DBREG_TCR2:
        case DBREG_TCN2:
            UpdateTimers(0);
            data = awTMR2[(reg - DBREG_TCTL2)/2];
            break;
        
        case DBREG_TSTAT2:
            UpdateTimers(0);
            data = awTMR2[TSTAT];
            awTMR2[TSTAT_LASTREAD] |= data;
            break;
            
        case DBREG_SPIMDATA:
            if (fPenUpPending) {
                fPenUpPending = false;
                UpdateInterrupts(IMR_PEN, 0, false);
            }
            break;
            
        case DBREG_SPIMCONT:
            if ((data & SPIMCONT_XCH) != 0) {
                // BUGBUG: The 3.5 ROM gets stuck in PrvSetBacklightController if we don't clear this bit;
                // we really need to understand how this controller works, and only clear SPIMCONT_XCH as appropriate -JP
                data &= ~SPIMCONT_XCH;
                mem.SetWordEx(addr, data);
            }
            break;
#if DEBUG            
        case DBREG_RHMSR:
        case DBREG_RHMSR+2:
            Emulator.Assert_Debug(false, "GetWord(" + Integer.toHexString(addr) + ") from PC " + Integer.toHexString(mem.pc0) + ": unexpected");
            break;
#endif
        }
        
        }   // stage1

        if ((mem.fCPU & mem.CPU_WATCHHW) != 0 && mem.debugger != null)
            mem.debugger.MarkHardwareAccess(addr, 2, data, DebuggerInterface.DATAACCESS_READ);
        
        return data;
    }
    

    /*  GetLong(addr)
     *
     *  Get one long from the register set.
     */
    public final int GetLong(int addr)
    {
        if (mem.PageBank(addr, true))
            return mem.GetLong(addr);
        
        int data = 0;
        
stage1: {        
        for (int i=0; i<vecHWRegs.size(); i++) {
            HWRegs hwregs = (HWRegs)(vecHWRegs.elementAt(i));
            if (addr >= hwregs.addrBase && addr < hwregs.addrLimit) {
                data = hwregs.GetLong(addr);
                break stage1;
            }
        }

        // Easy way to detect our dummy "guard banks": DBREGS_BASE is a negative int, so a positive addr is bogus...
        if (addr > 0)
            break stage1;
        
        data = mem.GetLongEx(addr);

        int reg = addr - DBREGS_BASE;
        
        switch (reg) {
#if DEBUG        
        case DBREG_IPR:
          //BUGBUG: Until we understand how to clear PEN interrupts, let's clear them when the mouse is released -JP
          //if ((data & IMR_PEN) != 0)
          //    UpdateInterrupts(IMR_PEN, 0, false);
            break;
                
        case DBREG_TCTL1:
        case DBREG_TPRER1:
        case DBREG_TCMP1:
        case DBREG_TCR1:
        case DBREG_TCN1:
        case DBREG_TSTAT1:
            
        case DBREG_TCTL2:
        case DBREG_TPRER2:
        case DBREG_TCMP2:
        case DBREG_TCR2:
        case DBREG_TCN2:
        case DBREG_TSTAT2:
            Emulator.Assert_Debug(false, "GetLong(" + Integer.toHexString(addr) + ") from PC " + Integer.toHexString(mem.pc0) + ": unexpected");
            break;
#endif
        case DBREG_RHMSR:
            dateRTC.setTime(System.currentTimeMillis() + msRTCDelta);
            data = (dateRTC.getHours() << RHMSR_HOURS_SHIFT) | (dateRTC.getMinutes() << RHMSR_MINUTES_SHIFT) | (dateRTC.getSeconds() << RHMSR_SECONDS_SHIFT);
            mem.SetLongEx(addr, data);          // shadow it
            break;
        }
        
        }   // stage1

        if ((mem.fCPU & mem.CPU_WATCHHW) != 0 && mem.debugger != null)
            mem.debugger.MarkHardwareAccess(addr, 4, data, DebuggerInterface.DATAACCESS_READ);
        
        return data;
    }
    

    /*  SetByte(addr, data)
     *
     *  Set one byte in the register set.
     */
    public final void SetByte(int addr, int data)
    {
        if ((mem.fCPU & mem.CPU_WATCHHW) != 0 && mem.debugger != null)
            mem.debugger.MarkHardwareAccess(addr, 1, data, DebuggerInterface.DATAACCESS_WRITE);
        
        for (int i=0; i<vecHWRegs.size(); i++) {
            HWRegs hwregs = (HWRegs)(vecHWRegs.elementAt(i));
            if (addr >= hwregs.addrBase && addr < hwregs.addrLimit) {
                hwregs.SetByte(addr, data);
                return;
            }
        }

        // Easy way to detect our dummy "guard banks": DBREGS_BASE is a negative int, so a positive addr is bogus...
        if (addr > 0)
            return;
        
        byte bPrev = 0;
        int reg = addr - DBREGS_BASE;
        
        switch (reg) {
        case DBREG_PDDATA:
            bPDDataEdge &= ~data;
            UpdateButtonInterrupts();
            return;     // since the data must not propagate to PDDATA, we return now
            
        case DBREG_PFDATA:
            bPrev = mem.GetByteEx(addr);
            break;
#if DEBUG            
        case DBREG_IMR:
        case DBREG_IMR+1:
        case DBREG_IMR+2:
        case DBREG_IMR+3:
        case DBREG_ISR:
        case DBREG_ISR+1:
        case DBREG_ISR+2:
        case DBREG_ISR+3:
            
        case DBREG_TCTL1:
        case DBREG_TCTL1+1:
        case DBREG_TPRER1:
        case DBREG_TPRER1+1:
        case DBREG_TCMP1:
        case DBREG_TCMP1+1:
        case DBREG_TCR1:
        case DBREG_TCR1+1:
        case DBREG_TCN1:
        case DBREG_TCN1+1:
        case DBREG_TSTAT1:
        case DBREG_TSTAT1+1:
            
        case DBREG_TCTL2:
        case DBREG_TCTL2+1:
        case DBREG_TPRER2:
        case DBREG_TPRER2+1:
        case DBREG_TCMP2:
        case DBREG_TCMP2+1:
        case DBREG_TCR2:
        case DBREG_TCR2+1:
        case DBREG_TCN2:
        case DBREG_TCN2+1:
        case DBREG_TSTAT2:
        case DBREG_TSTAT2+1:
            
        case DBREG_RHMSR:
        case DBREG_RHMSR+1:
        case DBREG_RHMSR+2:
        case DBREG_RHMSR+3:
            Emulator.Assert_Debug(false, "SetByte(" + Integer.toHexString(addr) + "," + Integer.toHexString(data) + ") from PC " + Integer.toHexString(mem.pc0) + ": unexpected");
            break;
#endif        
        }
        
        mem.SetByteEx(addr, data);
        
        switch (reg) {
        case DBREG_PDIRQEN:
            UpdateButtonInterrupts();
            break;
            
        case DBREG_PFDATA:
            if ((bPrev & PFDATA_LCDENABLE) != (data & PFDATA_LCDENABLE))
                dev.ResetScreen(null);
            break;
        }    
    }
    

    /*  SetWord(addr, data)
     *
     *  Set one word in the register set.
     */
    public final void SetWord(int addr, int data)
    {
        if ((mem.fCPU & mem.CPU_WATCHHW) != 0 && mem.debugger != null)
            mem.debugger.MarkHardwareAccess(addr, 2, data, DebuggerInterface.DATAACCESS_WRITE);
        
        for (int i=0; i<vecHWRegs.size(); i++) {
            HWRegs hwregs = (HWRegs)(vecHWRegs.elementAt(i));
            if (addr >= hwregs.addrBase && addr < hwregs.addrLimit) {
                hwregs.SetWord(addr, data);
                return;
            }
        }

        // Easy way to detect our dummy "guard banks": DBREGS_BASE is a negative int, so a positive addr is bogus...
        if (addr > 0)
            return;
        
        int reg = addr - DBREGS_BASE;
        
        switch(reg) {
        case DBREG_IMR:
        case DBREG_IMR+2:
            mem.SetWordEx(addr, data);
            UpdateInterrupts(0, 0, false);
            return;             // return, memory already updated
            
        case DBREG_ISR:
      //case DBREG_ISR+2:       // no writable bits we have to pay attention to in ISR+2
            int wICR = mem.GetWordEx(DBREGS_BASE + DBREG_ICR);
            int lIPR = mem.GetLongEx(DBREGS_BASE + DBREG_IPR);
            int lIPRNew = lIPR;
            if ((wICR & ICR_ET1) != 0 && (data & (IMR_IRQ1 >> 16)) != 0)
                lIPRNew &= ~IMR_IRQ1;
            if ((wICR & ICR_ET2) != 0 && (data & (IMR_IRQ2 >> 16)) != 0)
                lIPRNew &= ~IMR_IRQ2;
            if ((wICR & ICR_ET3) != 0 && (data & (IMR_IRQ3 >> 16)) != 0)
                lIPRNew &= ~IMR_IRQ3;
            if ((wICR & ICR_ET6) != 0 && (data & (IMR_IRQ6 >> 16)) != 0)
                lIPRNew &= ~IMR_IRQ6;
            if ((data & (IMR_IRQ7 >> 16)) != 0)
                lIPRNew &= ~IMR_IRQ7;
            if (lIPRNew != lIPR) {
                mem.SetLongEx(DBREGS_BASE + DBREG_IPR, lIPRNew);
                UpdateInterrupts(0, 0, false);
            }
            return;             // return, memory already updated

        case DBREG_TCTL1:
        case DBREG_TPRER1:
        case DBREG_TCMP1:
            awTMR1[(reg - DBREG_TCTL1)/2] = data & 0xffff;
            break;              // break and shadow the change in memory
            
        case DBREG_TCR1:
        case DBREG_TCN1:
            Emulator.Assert_Debug(false, "SetWord(" + Integer.toHexString(addr) + "," + Integer.toHexString(data) + ") from PC " + Integer.toHexString(mem.pc0) + ": read-only");
            data = awTMR1[(reg - DBREG_TCTL1)/2];
            break;              // these timer registers are read-only
            
        case DBREG_TSTAT1:
            data = awTMR1[TSTAT] & (data | ~awTMR1[TSTAT_LASTREAD]);
            awTMR1[TSTAT_LASTREAD] = 0;
            if ((data & TSTAT_COMP) == 0)
                UpdateInterrupts(IMR_TMR1, 0, false);
            awTMR1[TSTAT] = data & 0xffff;
            break;              // break and shadow the change in memory
            
        case DBREG_TCTL2:
        case DBREG_TPRER2:
        case DBREG_TCMP2:
            awTMR2[(reg - DBREG_TCTL2)/2] = data & 0xffff;
            break;              // break and shadow the change in memory
            
        case DBREG_TCR2:
        case DBREG_TCN2:
            Emulator.Assert_Debug(false, "SetWord(" + Integer.toHexString(addr) + "," + Integer.toHexString(data) + ") from PC " + Integer.toHexString(mem.pc0) + ": read-only");
            data = awTMR2[(reg - DBREG_TCTL2)/2];
            break;              // these timer registers are read-only
            
        case DBREG_TSTAT2:
            data = awTMR2[TSTAT] & (data | ~awTMR2[TSTAT_LASTREAD]);
            awTMR2[TSTAT_LASTREAD] = 0;
            if ((data & TSTAT_COMP) == 0)
                UpdateInterrupts(IMR_TMR2, 0, false);
            awTMR2[TSTAT] = data & 0xffff;
            break;              // break and shadow the change in memory
            
        case DBREG_SPIMCONT:
            if ((data & SPIMCONT_XCH) != 0 && (data & SPIMCONT_IRQEN) != 0) {
                                                // the caller is wanting to exchange data
                data |= SPIMCONT_SPIMIRQ;       // set this to indicate exchange complete (data will be deposited in SPIMDATA)
                data &= ~SPIMCONT_XCH;
                
                byte pfdata = mem.GetByteEx(DBREGS_BASE + DBREG_PFDATA);
                int spimdata = 0;
                boolean fUpdate = false;
                
                switch (pfdata & 0x0F) {        // Port F Data apparently specifies the type of data requested
                case 0x6:
                    spimdata = (0xff - xPenCurrent)*2;
                    fPenRead = fUpdate = true;
                    break;
                case 0x9:
                    spimdata = (0xff - yPenCurrent)*2;
                    fPenRead = fUpdate = true;
                    break;
                }
                
                if (fUpdate)
                    mem.SetWordEx(DBREGS_BASE + DBREG_SPIMDATA, spimdata);
            }
            break;
#if DEBUG            
        case DBREG_RHMSR:
        case DBREG_RHMSR+2:
            Emulator.Assert_Debug(false, "SetWord(" + Integer.toHexString(addr) + "," + Integer.toHexString(data) + ") from PC " + Integer.toHexString(mem.pc0) + ": unexpected");
            break;
#endif
        }
        
        mem.SetWordEx(addr, data);
    }
    

    /*  SetLong(addr, data)
     *
     *  Set one long in the register set.
     */
    public final void SetLong(int addr, int data)
    {
        if ((mem.fCPU & mem.CPU_WATCHHW) != 0 && mem.debugger != null)
            mem.debugger.MarkHardwareAccess(addr, 4, data, DebuggerInterface.DATAACCESS_WRITE);
        
        for (int i=0; i<vecHWRegs.size(); i++) {
            HWRegs hwregs = (HWRegs)(vecHWRegs.elementAt(i));
            if (addr >= hwregs.addrBase && addr < hwregs.addrLimit) {
                hwregs.SetLong(addr, data);
                return;
            }
        }

        // Easy way to detect our dummy "guard banks": DBREGS_BASE is a negative int, so a positive addr is bogus...
        if (addr > 0)
            return;
        
        int reg = addr - DBREGS_BASE;
        
        switch(reg) {
        case DBREG_IMR:
            mem.SetLongEx(addr, data);
            UpdateInterrupts(0, 0, false);
            return;             // return, memory already updated
            
        case DBREG_ISR:
            int wICR = mem.GetWordEx(DBREGS_BASE + DBREG_ICR);
            int lIPR = mem.GetLongEx(DBREGS_BASE + DBREG_IPR);
            int lIPRNew = lIPR;
            if ((wICR & ICR_ET1) != 0 && (data & IMR_IRQ1) != 0)
                lIPRNew &= ~IMR_IRQ1;
            if ((wICR & ICR_ET2) != 0 && (data & IMR_IRQ2) != 0)
                lIPRNew &= ~IMR_IRQ2;
            if ((wICR & ICR_ET3) != 0 && (data & IMR_IRQ3) != 0)
                lIPRNew &= ~IMR_IRQ3;
            if ((wICR & ICR_ET6) != 0 && (data & IMR_IRQ6) != 0)
                lIPRNew &= ~IMR_IRQ6;
            if ((data & IMR_IRQ7) != 0)
                lIPRNew &= ~IMR_IRQ7;
            if (lIPRNew != lIPR) {
                mem.SetLongEx(DBREGS_BASE + DBREG_IPR, lIPRNew);
                UpdateInterrupts(0, 0, false);
            }
            return;             // return, memory already updated
#if DEBUG        
        case DBREG_TCTL1:
        case DBREG_TPRER1:
        case DBREG_TCMP1:
        case DBREG_TCR1:
        case DBREG_TCN1:
        case DBREG_TSTAT1:
            
        case DBREG_TCTL2:
        case DBREG_TPRER2:
        case DBREG_TCMP2:
        case DBREG_TCR2:
        case DBREG_TCN2:
        case DBREG_TSTAT2:
            Emulator.Assert_Debug(false, "SetLong(" + Integer.toHexString(addr) + "," + Integer.toHexString(data) + ") from PC " + Integer.toHexString(mem.pc0) + ": unexpected");
            break;
#endif        
        case DBREG_RHMSR:
            dateRTC.setHours((data & RHMSR_HOURS) >> RHMSR_HOURS_SHIFT);
            dateRTC.setMinutes((data & RHMSR_MINUTES) >> RHMSR_MINUTES_SHIFT);
            dateRTC.setSeconds((data & RHMSR_SECONDS) >> RHMSR_SECONDS_SHIFT);
            msRTCDelta = dateRTC.getTime() - System.currentTimeMillis();
            break;
        }
        
        mem.SetLongEx(addr, data);
    }


    /*  UpdateButton(id, fDown)
     */
    public void UpdateButton(int id, boolean fDown)
    {
        byte bMask = (byte)(1 << id);
        
        byte bPDData = mem.GetByteEx(DBREGS_BASE + DBREG_PDDATA);
        byte bPDIRQEdge = mem.GetByteEx(DBREGS_BASE + DBREG_PDIRQEDGE);
        byte bPDIRQEn = mem.GetByteEx(DBREGS_BASE + DBREG_PDIRQEN);
        
        byte bPDDataOrig = bPDData;
        
        if (fDown)
            bPDData |= bMask;
        else
            bPDData &= ~bMask;
        
        if (bPDData != bPDDataOrig) {
            bPDDataEdge |= bMask;
            mem.SetByteEx(DBREGS_BASE + DBREG_PDDATA, bPDData);
            UpdateButtonInterrupts();
        }
    }


    /*  UpdateButtonInterrupts()
     */
    public void UpdateButtonInterrupts()
    {
        byte bPDData = mem.GetByteEx(DBREGS_BASE + DBREG_PDDATA);
        byte bPDIRQEdge = mem.GetByteEx(DBREGS_BASE + DBREG_PDIRQEDGE);
        byte bPDIRQEn = mem.GetByteEx(DBREGS_BASE + DBREG_PDIRQEN);
        
        UpdateInterrupts(((bPDDataEdge & bPDIRQEdge) | (bPDData & ~bPDIRQEdge) & bPDIRQEn) << 8, (IMR_INT0 | IMR_INT1 | IMR_INT2 | IMR_INT3 | IMR_INT4 | IMR_INT5 | IMR_INT6 | IMR_INT7), true);
    }
    
    
    /*  UpdatePen(x, y, fDown)
     */
    public void UpdatePen(int x, int y, boolean fDown)
    {
        if (dev.fPower) {
            
            xPenCurrent = x;
            yPenCurrent = y;
            
            if (!fPenDown && fDown) {
                
                fPenDown = true;
                UpdateInterrupts(IMR_PEN, 0, true);
                
            }
            else if (fPenDown && !fDown) {
                
                fPenDown = false;
                
                // In an attempt to avoid missing pen activity due to the emulator being unexpectedly busy (eg, demand-paging
                // some ROM?), I don't clear IPR_PEN if fPenRead is false.  I wait until the emulator has started reading pen data
                // and clear the interrupt at THAT time.
                
                if (!fPenRead) {
                    fPenUpPending = true;
                }
                else {
                    // BUGBUG: I suspect we should really be clearing PEN interrupts when the handler updates the IPR instead.
                    // The problem with clearing them here is that the emulator could miss the transition altogether, and I seriously
                    // doubt the real hardware clears the interrupt status on a "pen up" condition - but maybe it does.... -JP
                    UpdateInterrupts(IMR_PEN, 0, false);
                }
            }
            
            fPenRead = false;
        }
    }


    /*  UpdateTimers(ms)
     *
     *  Update the high-frequency timers.  To do so correctly, we'd like to have the current cycle count, assuming
     *  the timer(s) are usually configured to use the system clock for their input, but since we don't maintain
     *  a cycle count in non-DEBUG builds (due to the added overhead it would impose), we supply estimates, usually
     *  based either on number of opcodes executed (see ExecuteOpcodes) or on number of milliseconds elapsed in
     *  real-world time, which we then convert to an estimated number of opcodes that we could have executed in that
     *  time.
     *
     *  BUGBUG: Timer events could also be generated with a separate thread dedicated to timer emulation, allowing us
     *  to avoid doing this work on each virtual cpu cycle.  However, that would also mean that any code that peeked at
     *  the timer's state would require that we determine a reasonable state at that moment.  Certainly doable, but this
     *  "inline" approach is easier, so that's what we'll do for now. -JP
     */
    public void UpdateTimers(int ms)
    {
        // BUGBUG: The multiplier for converting real-world milliseconds into cycles (16580)
        // depends on the current PLLFSR (Phase-Locked Loop Frequency Select Register), and
        // the number of cycles per instruction (12) is just an estimate -- but one that
        // happens to divide nicely when divided by the common timer PRESCALER value of 3.
        //
        // I used to set it lower (9) because I think that's closer to the real average, but
        // on the other hand, a larger value will advance the timers faster, which could be good
        // for speeding up delay loops in emulated code. -JP
                
        int cCyclesOpcodesAdd = mem.cOpcodesUncycled * 12;
        mem.cOpcodesUncycled = 0;
        mem.cCycles += cCyclesOpcodesAdd;
        
        if (mem.cCycles < 0)            // if the cycle count underflows, reset all the counters
            mem.ResetCounters();
        
        int cCyclesAdd = ms * 16580 + cCyclesOpcodesAdd;
        
        UpdateTimer(awTMR1, cCyclesAdd, IMR_TMR1);
        UpdateTimer(awTMR2, cCyclesAdd, IMR_TMR2);
    }


    /*  UpdateTimer(awTMR, cCyclesAdd, lBit)
     *
     *  Update the specified high-frequency timer, by adding the number of cycles accumulated since the last call.
     */
    public void UpdateTimer(int[] awTMR, int cCyclesAdd, int lBit)
    {
        // BUGBUG: This code is currently hard-coded to assume that the system clock is the timer's input clock -JP
        
        if ((awTMR[TCTL] & TCTL_TEN) != 0) {
            
            // BUGBUG: There's potential for error loss when dividing cCyclesAdd at this point in the calculation -JP
            int tcn = awTMR[TCN] + cCyclesAdd / ((awTMR[TPRER] & TPRER_PRESCALER) + 1);
            
            // BUGBUG: This is a hack to prevent the count from overflowing before it has a chance to be examined -JP
            awTMR[TCN] = (tcn > 0xffff? 0xffff : tcn);
            
            if (tcn >= awTMR[TCMP]) {
                
                awTMR[TSTAT] |= TSTAT_COMP;     // indicate that a "compare event" has occurred
                
                if ((awTMR[TCTL] & TCTL_FRR) == 0) {
                    // If we're not in "free run" mode, then we're in "restart" mode, so reset counter to 0 and resume counting
                    awTMR[TCN] = 0;
                }
                
                if ((awTMR[TCTL] & TCTL_IRQEN) != 0) {
                    // If the timer's IRQ is enabled, then set the IPR bit
                    UpdateInterrupts(lBit, 0, true);
                }
            }
        }
    }


    /*  UpdateInterrupts(lBits, lMask, fSet)
     *
     *  Update the Interrupt Pending Register (IPR), and then propagate any pending interrupts that are NOT
     *  masked to the Interrupt Status Register (ISR).  If this results in a change in the ISR, then we need
     *  to tell the CPU to take a look, and see if the flags will allow an interrupt to occur.
     */
    public synchronized void UpdateInterrupts(int lBits, int lMask, boolean fSet)
    {
        // Get the current IPR and compute a new IPR
        int lIPR = mem.GetLongEx(DBREGS_BASE + DBREG_IPR);
        int lIPRNew = fSet? ((lIPR & ~lMask) | lBits) : ((lIPR & ~lMask) & ~lBits);
        
        // Get the current IMR and compute a new ISR, using the new IPR
        int lIMR = mem.GetLongEx(DBREGS_BASE + DBREG_IMR);
        int lISR = mem.GetLongEx(DBREGS_BASE + DBREG_ISR);
        int lISRNew = lIPRNew & ~lIMR;
        
        // If the new IPR differs from the current IPR, update it
        if (lIPR != lIPRNew)
            mem.SetLongEx(DBREGS_BASE + DBREG_IPR, lIPRNew);
        
        // If the new ISR differs from the current ISR, update it, and indicate that interrupt status has changed
        if (lISR != lISRNew) {
            mem.SetLongEx(DBREGS_BASE + DBREG_ISR, lISRNew);
            
            if (lISRNew != 0) {
                
                mem.fCPU |= mem.CPU_CHECKINTS;
                
#if SUSPEND_RESUME
                // This is a tiny optimization (ie, calling Resume only if needed).  Note that we will never
                // actually call Resume, because we never actually suspend the CPU;  we merely sleep for brief
                // periods (eg, when CPU_STOP is set).  Even so, it wouldn't do any good here to clear CPU_STOP,
                // because we could be running on a thread other than the CPU thread, and the CPU thread might
                // be just about to set CPU_STOP.  Instead, we simply avoid sleeping altogether in CPUThread.run()
                // whenever CPU_CHECKINTS is set.
                
                if ((mem.fCPU & mem.CPU_SUSPENDED) != 0)
                    mem.cpu.Resume();
#endif
            }
        }
    }


    /*  CheckInterrupts(fInitiate)
     *
     *  Called from CPUThread whenever it notices CPU_CHECKINTS has been set.  It clears CPU_CHECKINTS and then
     *  calls us.  Our job is to determine if an interrupt is currently being asserted, and whether or not it is
     *  greater than the flag's current IPM (Interrupt Priority Mask).
     *
     *  Returns true if an interrupt is ready to initiate (or has been if fInitiate is true).
     */
    public synchronized boolean CheckInterrupts(boolean fInitiate)
    {
        // BUGBUG: The following code is a hack to prevent simulating interrupts when the current stack is
        // dangerously close to the current task's interrupt stack.
        //
        // I've noticed that when booting PalmOS 3.3, the hardware interrupt service routine at 0x10c7cba2 loads
        // A0 from 0x11e (let's call location 0x11e the "current task pointer"), and then switches to a new
        // stack (let's call it the current task's "interrupt stack"), whose address is stored at A0+0x10.  In the
        // case of PalmOS 3.3, the current (first?) task is usually 0xe7fe, its application stack is usually 0xedf6
        // (set by 0x10c7c804), and its interrupt stack is usually 0xeafe.  Notice that the amount of room between
        // the stacks is surprisingly small: 0x2f8.  Set a breakpoint at 0x10c87a32, and when you hit it, set another
        // breakpoint at 0x10c7c7a2 -- at this second location, you will eventually see the stack (A7) drop as low
        // as 0xeb12.  At that instant, the stack is too low to allow an interrupt to occur, because the first thing the
        // interrupt service routine at 0x10c7cba2 will do is save a bunch of client registers, thereby overflowing
        // the application stack and overwriting the interrupt stack.  0x10c7c7a2 is not an arbitrary address
        // either: it's the very next instruction after the IPM (Interrupt Priority Mask) in the CPU's flags has
        // been reset to zero, clearing the way for any pending interrupt to be acknowledged.
        //
        // I've repro'ed the same thing in Palm's own emulator.  All the stacks are 0x16 bytes higher, but their
        // relative positions are identical, so the only reason their emulator (and presumably real devices) don't
        // crash is fortuitous timing with respect to TMR2.  Even if I'm simulating timer interrupts at a slightly
        // different/incorrect rate, PalmOS clearly has a window where their application stack is too small.
        
        if (mem.a[7] <= 0xeb12+0x14 && mem.a[7] > 0xeafe)
            return false;
        
        // Note: We feed interrupts to the CPU only if the debugger is not tracing.  BUGBUG: This might not
        // always be desirable behavior, because it can hold off interrupts a long time if the debugger is tracing
        // a lot of code, but this is certainly an easy way to prevent ourselves from unexpectedly tracing into an
        // interrupt service routine. -JP
        
        if ((mem.fCPU & CPUMem.CPU_TRACING) != 0) {
            if ((mem.fCPU & CPUMem.CPU_STEPPING) == 0 || mem.cStep <= 1)
                return false;
        }
            
        if ((mem.fCPU & mem.CPU_CHECKINTS) != 0) {
            
            int iLvlHighest = 0;
            int lISR = mem.GetLongEx(DBREGS_BASE + DBREG_ISR);
        
            for (int iBit=0,lMask=1; lISR != 0 && iBit < abIMRLvl.length; iBit++,lMask <<= 1) {
                if ((lISR & lMask) != 0) {
                    if (iLvlHighest < abIMRLvl[iBit])
                        iLvlHighest = abIMRLvl[iBit];
                    lISR &= ~lMask;
                }
            }
        
            if (iLvlHighest > mem.GetFlagIPM()) {
                if (fInitiate) {
                    int iVector = (mem.GetByteEx(DBREGS_BASE + DBREG_IVR) & 0xff) + iLvlHighest;
                    mem.CallException(iVector);
                    mem.SetFlagIPM(iLvlHighest);        // we can't change the IPM until CallException had a chance to save the current IPM on the stack
                    mem.fCPU &= ~mem.CPU_CHECKINTS;
                    mem.cInterrupts++;
                }
                return true;
            }
            mem.fCPU &= ~mem.CPU_CHECKINTS;
        }
        return false;
    }

}
