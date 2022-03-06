/*  DebuggerSymbols.java
 *
 *  v1.0 created April 2001 by Jeff Parsons
 *  Copyright (c) 1999-2022 by Jeff Parsons.  All rights reserved.
 *
 *  This contains routines for managing a group of symbols associated
 *  with a contiguous chunk of memory (code or data).
 */


class DebuggerSymbols
{
    String sModule;             // name of module containing group
    String sSymbolFile;         // name of symbol file, if any
    int addrStart, length;
    
    int cSymbols;
    String aSymbolNames[];
    int aSymbolAddrs[];
    String aSortedSymbolNames[];
    int aSortedSymbolAddrs[];
    
    
    private final static String[] aDBRegNames = {
        "SCR",                  // HWDragonBall.DBREGS_BASE + 0x000
        "MRR",                  // HWDragonBall.DBREGS_BASE + 0x004
        "GRPBASEA",             // HWDragonBall.DBREGS_BASE + 0x100
        "GRPBASEB",             // HWDragonBall.DBREGS_BASE + 0x102
        "GRPBASEC",             // HWDragonBall.DBREGS_BASE + 0x104
        "GRPBASED",             // HWDragonBall.DBREGS_BASE + 0x106
        "GRPMASKA",             // HWDragonBall.DBREGS_BASE + 0x108
        "GRPMASKB",             // HWDragonBall.DBREGS_BASE + 0x10A
        "GRPMASKC",             // HWDragonBall.DBREGS_BASE + 0x10C
        "GRPMASKD",             // HWDragonBall.DBREGS_BASE + 0x10E
        "CSA0",                 // HWDragonBall.DBREGS_BASE + 0x110
        "CSA1",                 // HWDragonBall.DBREGS_BASE + 0x114
        "CSA2",                 // HWDragonBall.DBREGS_BASE + 0x118
        "CSA3",                 // HWDragonBall.DBREGS_BASE + 0x11C
        "CSB0",                 // HWDragonBall.DBREGS_BASE + 0x120
        "CSB1",                 // HWDragonBall.DBREGS_BASE + 0x124
        "CSB2",                 // HWDragonBall.DBREGS_BASE + 0x128
        "CSB3",                 // HWDragonBall.DBREGS_BASE + 0x12C
        "CSC0",                 // HWDragonBall.DBREGS_BASE + 0x130
        "CSC1",                 // HWDragonBall.DBREGS_BASE + 0x134
        "CSC2",                 // HWDragonBall.DBREGS_BASE + 0x138
        "CSC3",                 // HWDragonBall.DBREGS_BASE + 0x13C
        "CSD0",                 // HWDragonBall.DBREGS_BASE + 0x140
        "CSD1",                 // HWDragonBall.DBREGS_BASE + 0x144
        "CSD2",                 // HWDragonBall.DBREGS_BASE + 0x148
        "CSD3",                 // HWDragonBall.DBREGS_BASE + 0x14C
        "PLLCR",                // HWDragonBall.DBREGS_BASE + 0x200
        "PLLFSR",               // HWDragonBall.DBREGS_BASE + 0x202
        "PCTLR",                // HWDragonBall.DBREGS_BASE + 0x207
        "IVR",                  // HWDragonBall.DBREGS_BASE + 0x300
        "ICR",                  // HWDragonBall.DBREGS_BASE + 0x302
        "IMR",                  // HWDragonBall.DBREGS_BASE + 0x304
        "IWR",                  // HWDragonBall.DBREGS_BASE + 0x308
        "ISR",                  // HWDragonBall.DBREGS_BASE + 0x30C
        "IPR",                  // HWDragonBall.DBREGS_BASE + 0x310
        "PADIR",                // HWDragonBall.DBREGS_BASE + 0x400
        "PADATA",               // HWDragonBall.DBREGS_BASE + 0x401
        "PASEL",                // HWDragonBall.DBREGS_BASE + 0x403
        "PBDIR",                // HWDragonBall.DBREGS_BASE + 0x408
        "PBDATA",               // HWDragonBall.DBREGS_BASE + 0x409
        "PBSEL",                // HWDragonBall.DBREGS_BASE + 0x40B
        "PCDIR",                // HWDragonBall.DBREGS_BASE + 0x410
        "PCDATA",               // HWDragonBall.DBREGS_BASE + 0x411
        "PCSEL",                // HWDragonBall.DBREGS_BASE + 0x413
        "PDDIR",                // HWDragonBall.DBREGS_BASE + 0x418
        "PDDATA",               // HWDragonBall.DBREGS_BASE + 0x419
        "PDPUEN",               // HWDragonBall.DBREGS_BASE + 0x41A
        "PDPOL",                // HWDragonBall.DBREGS_BASE + 0x41C
        "PDIRQEN",              // HWDragonBall.DBREGS_BASE + 0x41D
        "PDIRQEDGE",            // HWDragonBall.DBREGS_BASE + 0x41F
        "PEDIR",                // HWDragonBall.DBREGS_BASE + 0x420
        "PEDATA",               // HWDragonBall.DBREGS_BASE + 0x421
        "PEPUEN",               // HWDragonBall.DBREGS_BASE + 0x422
        "PESEL",                // HWDragonBall.DBREGS_BASE + 0x423
        "PFDIR",                // HWDragonBall.DBREGS_BASE + 0x428
        "PFDATA",               // HWDragonBall.DBREGS_BASE + 0x429
        "PFPUEN",               // HWDragonBall.DBREGS_BASE + 0x42A
        "PFSEL",                // HWDragonBall.DBREGS_BASE + 0x42B
        "PGDIR",                // HWDragonBall.DBREGS_BASE + 0x430
        "PGDATA",               // HWDragonBall.DBREGS_BASE + 0x431
        "PGPUEN",               // HWDragonBall.DBREGS_BASE + 0x432
        "PGSEL",                // HWDragonBall.DBREGS_BASE + 0x433
        "PJDIR",                // HWDragonBall.DBREGS_BASE + 0x438
        "PJDATA",               // HWDragonBall.DBREGS_BASE + 0x439
        "PJSEL",                // HWDragonBall.DBREGS_BASE + 0x43B
        "PKDIR",                // HWDragonBall.DBREGS_BASE + 0x440
        "PKDATA",               // HWDragonBall.DBREGS_BASE + 0x441
        "PKPUEN",               // HWDragonBall.DBREGS_BASE + 0x442
        "PKSEL",                // HWDragonBall.DBREGS_BASE + 0x443
        "PMDIR",                // HWDragonBall.DBREGS_BASE + 0x448
        "PMDATA",               // HWDragonBall.DBREGS_BASE + 0x449
        "PMPUEN",               // HWDragonBall.DBREGS_BASE + 0x44A
        "PMSEL",                // HWDragonBall.DBREGS_BASE + 0x44B
        "PWMC",                 // HWDragonBall.DBREGS_BASE + 0x500
        "PWMP",                 // HWDragonBall.DBREGS_BASE + 0x502
        "PWMW",                 // HWDragonBall.DBREGS_BASE + 0x504
        "PWMCNT",               // HWDragonBall.DBREGS_BASE + 0x506
        "TCTL1",                // HWDragonBall.DBREGS_BASE + 0x600
        "TPRER1",               // HWDragonBall.DBREGS_BASE + 0x602
        "TCMP1",                // HWDragonBall.DBREGS_BASE + 0x604
        "TCR1",                 // HWDragonBall.DBREGS_BASE + 0x606
        "TCN1",                 // HWDragonBall.DBREGS_BASE + 0x608
        "TSTAT1",               // HWDragonBall.DBREGS_BASE + 0x60A
        "TCTL2",                // HWDragonBall.DBREGS_BASE + 0x60C
        "TPRER2",               // HWDragonBall.DBREGS_BASE + 0x60E
        "TCMP2",                // HWDragonBall.DBREGS_BASE + 0x610
        "TCR2",                 // HWDragonBall.DBREGS_BASE + 0x612
        "TCN2",                 // HWDragonBall.DBREGS_BASE + 0x614
        "TSTAT2",               // HWDragonBall.DBREGS_BASE + 0x616
        "WCSR",                 // HWDragonBall.DBREGS_BASE + 0x618
        "WRR",                  // HWDragonBall.DBREGS_BASE + 0x61A
        "WCN",                  // HWDragonBall.DBREGS_BASE + 0x61C
        "SPISR",                // HWDragonBall.DBREGS_BASE + 0x700
        "SPIMDATA",             // HWDragonBall.DBREGS_BASE + 0x800
        "SPIMCONT",             // HWDragonBall.DBREGS_BASE + 0x802
        "USTCNT",               // HWDragonBall.DBREGS_BASE + 0x900
        "UBAUD",                // HWDragonBall.DBREGS_BASE + 0x902
        "URX",                  // HWDragonBall.DBREGS_BASE + 0x904
        "UTX",                  // HWDragonBall.DBREGS_BASE + 0x906
        "UMISC",                // HWDragonBall.DBREGS_BASE + 0x908
        "LSSA",                 // HWDragonBall.DBREGS_BASE + 0xA00
        "LVPW",                 // HWDragonBall.DBREGS_BASE + 0xA05
        "LXMAX",                // HWDragonBall.DBREGS_BASE + 0xA08
        "LYMAX",                // HWDragonBall.DBREGS_BASE + 0xA0A
        "LCXP",                 // HWDragonBall.DBREGS_BASE + 0xA18
        "LCYP",                 // HWDragonBall.DBREGS_BASE + 0xA1A
        "LCWCH",                // HWDragonBall.DBREGS_BASE + 0xA1C
        "LBLKC",                // HWDragonBall.DBREGS_BASE + 0xA1F
        "LPICF",                // HWDragonBall.DBREGS_BASE + 0xA20
        "LPOLCF",               // HWDragonBall.DBREGS_BASE + 0xA21
        "LACDRC",               // HWDragonBall.DBREGS_BASE + 0xA23
        "LPXCD",                // HWDragonBall.DBREGS_BASE + 0xA25
        "LCKCON",               // HWDragonBall.DBREGS_BASE + 0xA27
        "LLBAR",                // HWDragonBall.DBREGS_BASE + 0xA29
        "LOTCR",                // HWDragonBall.DBREGS_BASE + 0xA2B
        "LPOSR",                // HWDragonBall.DBREGS_BASE + 0xA2D
        "LFRCM",                // HWDragonBall.DBREGS_BASE + 0xA31
        "LGPMR",                // HWDragonBall.DBREGS_BASE + 0xA32
        "RHMSR",                // HWDragonBall.DBREGS_BASE + 0xB00
        "RALARM",               // HWDragonBall.DBREGS_BASE + 0xB04
        "RCTL",                 // HWDragonBall.DBREGS_BASE + 0xB0C
        "RISR",                 // HWDragonBall.DBREGS_BASE + 0xB0E
        "RIENR",                // HWDragonBall.DBREGS_BASE + 0xB10
        "RSTPWCH",              // HWDragonBall.DBREGS_BASE + 0xB12
    };

    private final static int[] aDBRegAddrs = {
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_SCR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_MRR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_GRPBASEA,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_GRPBASEB,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_GRPBASEC,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_GRPBASED,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_GRPMASKA,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_GRPMASKB,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_GRPMASKC,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_GRPMASKD,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_CSA0,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_CSA1,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_CSA2,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_CSA3,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_CSB0,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_CSB1,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_CSB2,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_CSB3,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_CSC0,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_CSC1,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_CSC2,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_CSC3,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_CSD0,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_CSD1,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_CSD2,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_CSD3,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PLLCR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PLLFSR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PCTLR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_IVR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_ICR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_IMR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_IWR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_ISR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_IPR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PADIR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PADATA,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PASEL,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PBDIR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PBDATA,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PBSEL,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PCDIR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PCDATA,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PCSEL,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PDDIR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PDDATA,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PDPUEN,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PDPOL,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PDIRQEN,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PDIRQEDGE,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PEDIR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PEDATA,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PEPUEN,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PESEL,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PFDIR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PFDATA,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PFPUEN,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PFSEL,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PGDIR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PGDATA,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PGPUEN,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PGSEL,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PJDIR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PJDATA,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PJSEL,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PKDIR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PKDATA,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PKPUEN,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PKSEL,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PMDIR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PMDATA,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PMPUEN,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PMSEL,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PWMC,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PWMP,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PWMW,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_PWMCNT,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_TCTL1,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_TPRER1,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_TCMP1,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_TCR1,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_TCN1,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_TSTAT1,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_TCTL2,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_TPRER2,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_TCMP2,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_TCR2,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_TCN2,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_TSTAT2,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_WCSR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_WRR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_WCN,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_SPISR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_SPIMDATA,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_SPIMCONT,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_USTCNT,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_UBAUD,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_URX,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_UTX,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_UMISC,
        HWLCDDragonBall.LCDREGS_BASE + HWLCDDragonBall.LCDREG_SSA,
        HWLCDDragonBall.LCDREGS_BASE + HWLCDDragonBall.LCDREG_VPW,
        HWLCDDragonBall.LCDREGS_BASE + HWLCDDragonBall.LCDREG_XMAX,
        HWLCDDragonBall.LCDREGS_BASE + HWLCDDragonBall.LCDREG_YMAX,
        HWLCDDragonBall.LCDREGS_BASE + HWLCDDragonBall.LCDREG_CXP,
        HWLCDDragonBall.LCDREGS_BASE + HWLCDDragonBall.LCDREG_CYP,
        HWLCDDragonBall.LCDREGS_BASE + HWLCDDragonBall.LCDREG_CWCH,
        HWLCDDragonBall.LCDREGS_BASE + HWLCDDragonBall.LCDREG_BLKC,
        HWLCDDragonBall.LCDREGS_BASE + HWLCDDragonBall.LCDREG_PICF,
        HWLCDDragonBall.LCDREGS_BASE + HWLCDDragonBall.LCDREG_POLCF,
        HWLCDDragonBall.LCDREGS_BASE + HWLCDDragonBall.LCDREG_ACDRC,
        HWLCDDragonBall.LCDREGS_BASE + HWLCDDragonBall.LCDREG_PXCD,
        HWLCDDragonBall.LCDREGS_BASE + HWLCDDragonBall.LCDREG_CKCON,
        HWLCDDragonBall.LCDREGS_BASE + HWLCDDragonBall.LCDREG_LBAR,
        HWLCDDragonBall.LCDREGS_BASE + HWLCDDragonBall.LCDREG_OTCR,
        HWLCDDragonBall.LCDREGS_BASE + HWLCDDragonBall.LCDREG_POSR,
        HWLCDDragonBall.LCDREGS_BASE + HWLCDDragonBall.LCDREG_FRCM,
        HWLCDDragonBall.LCDREGS_BASE + HWLCDDragonBall.LCDREG_GPMR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_RHMSR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_RALARM,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_RCTL,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_RISR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_RIENR,
        HWDragonBall.DBREGS_BASE + HWDragonBall.DBREG_RSTPWCH,
    };
        

    private final static String[] aSEDRegNames = {
        "REVCODE",              // HWLCDEpson1375.SEDREGS_BASE + 0x00
        "MODE0",                // HWLCDEpson1375.SEDREGS_BASE + 0x01
        "MODE1",                // HWLCDEpson1375.SEDREGS_BASE + 0x02
        "MODE2",                // HWLCDEpson1375.SEDREGS_BASE + 0x03
        "HPS",                  // HWLCDEpson1375.SEDREGS_BASE + 0x04
        "VPSLO",                // HWLCDEpson1375.SEDREGS_BASE + 0x05
        "VPSHI",                // HWLCDEpson1375.SEDREGS_BASE + 0x06
        "FPLSP",                // HWLCDEpson1375.SEDREGS_BASE + 0x07
        "HNDP",                 // HWLCDEpson1375.SEDREGS_BASE + 0x08
        "FPFSP",                // HWLCDEpson1375.SEDREGS_BASE + 0x09
        "VNDP",                 // HWLCDEpson1375.SEDREGS_BASE + 0x0a
        "MODRATE",              // HWLCDEpson1375.SEDREGS_BASE + 0x0b
        "S1ADDRLO",             // HWLCDEpson1375.SEDREGS_BASE + 0x0c
        "S1ADDRHI",             // HWLCDEpson1375.SEDREGS_BASE + 0x0d
        "S2ADDRLO",             // HWLCDEpson1375.SEDREGS_BASE + 0x0e
        "S2ADDRHI",             // HWLCDEpson1375.SEDREGS_BASE + 0x0f
        "S1ADDRBIT",            // HWLCDEpson1375.SEDREGS_BASE + 0x10
        "MAOFF",                // HWLCDEpson1375.SEDREGS_BASE + 0x11
        "S1VSLO",               // HWLCDEpson1375.SEDREGS_BASE + 0x12
        "S1VSHI",               // HWLCDEpson1375.SEDREGS_BASE + 0x13
        "LUTADDR",              // HWLCDEpson1375.SEDREGS_BASE + 0x15
        "LUTDATA",              // HWLCDEpson1375.SEDREGS_BASE + 0x17
        "GPIOCONF",             // HWLCDEpson1375.SEDREGS_BASE + 0x18
        "GPIOSTAT",             // HWLCDEpson1375.SEDREGS_BASE + 0x19
        "SCRATCHPAD",           // HWLCDEpson1375.SEDREGS_BASE + 0x1a
        "PORTRAIT",             // HWLCDEpson1375.SEDREGS_BASE + 0x1b
        "LBCR",                 // HWLCDEpson1375.SEDREGS_BASE + 0x1c
    };
        
    private final static int[] aSEDRegAddrs = {
        HWLCDEpson1375.SEDREGS_BASE + HWLCDEpson1375.SEDREG_REVCODE,
        HWLCDEpson1375.SEDREGS_BASE + HWLCDEpson1375.SEDREG_MODE0,
        HWLCDEpson1375.SEDREGS_BASE + HWLCDEpson1375.SEDREG_MODE1,
        HWLCDEpson1375.SEDREGS_BASE + HWLCDEpson1375.SEDREG_MODE2,
        HWLCDEpson1375.SEDREGS_BASE + HWLCDEpson1375.SEDREG_HPS,
        HWLCDEpson1375.SEDREGS_BASE + HWLCDEpson1375.SEDREG_VPSLO,
        HWLCDEpson1375.SEDREGS_BASE + HWLCDEpson1375.SEDREG_VPSHI,
        HWLCDEpson1375.SEDREGS_BASE + HWLCDEpson1375.SEDREG_FPLSP,
        HWLCDEpson1375.SEDREGS_BASE + HWLCDEpson1375.SEDREG_HNDP,
        HWLCDEpson1375.SEDREGS_BASE + HWLCDEpson1375.SEDREG_FPFSP,
        HWLCDEpson1375.SEDREGS_BASE + HWLCDEpson1375.SEDREG_VNDP,
        HWLCDEpson1375.SEDREGS_BASE + HWLCDEpson1375.SEDREG_MODRATE,
        HWLCDEpson1375.SEDREGS_BASE + HWLCDEpson1375.SEDREG_S1ADDRLO,
        HWLCDEpson1375.SEDREGS_BASE + HWLCDEpson1375.SEDREG_S1ADDRHI,
        HWLCDEpson1375.SEDREGS_BASE + HWLCDEpson1375.SEDREG_S2ADDRLO,
        HWLCDEpson1375.SEDREGS_BASE + HWLCDEpson1375.SEDREG_S2ADDRHI,
        HWLCDEpson1375.SEDREGS_BASE + HWLCDEpson1375.SEDREG_S1ADDRBIT,
        HWLCDEpson1375.SEDREGS_BASE + HWLCDEpson1375.SEDREG_MAOFF,
        HWLCDEpson1375.SEDREGS_BASE + HWLCDEpson1375.SEDREG_S1VSLO,
        HWLCDEpson1375.SEDREGS_BASE + HWLCDEpson1375.SEDREG_S1VSHI,
        HWLCDEpson1375.SEDREGS_BASE + HWLCDEpson1375.SEDREG_LUTADDR,
        HWLCDEpson1375.SEDREGS_BASE + HWLCDEpson1375.SEDREG_LUTDATA,
        HWLCDEpson1375.SEDREGS_BASE + HWLCDEpson1375.SEDREG_GPIOCONF,
        HWLCDEpson1375.SEDREGS_BASE + HWLCDEpson1375.SEDREG_GPIOSTAT,
        HWLCDEpson1375.SEDREGS_BASE + HWLCDEpson1375.SEDREG_SCRATCHPAD,
        HWLCDEpson1375.SEDREGS_BASE + HWLCDEpson1375.SEDREG_SWIVELMODE,
        HWLCDEpson1375.SEDREGS_BASE + HWLCDEpson1375.SEDREG_LBCR,
    };
      
    
    /*  DebuggerSymbols(sModule, sSymbolFile, mem, iType, addrStart, length)
     *
     *  ENTRY
     *      sModule == name of module (eg, "Hello.prc"), null if none
     *      sSymbolFile == name of symbol file (eg, "Hello.sym"), null if none
     *      mem == CPUMem object
     *      iType == memory type (see DebuggerInterface.MEMTYPE_*)
     *      addrStart == start address of module
     *      length == length of module
     *
     *  EXIT
     *      Number of symbols are determined (if possible), an initial array of symbol
     *      slots are allocated, and the DebuggerSymbols object is made ready to perform both
     *      queries and additions.
     */
    DebuggerSymbols(String sModule, String sSymbolFile, CPUMem mem, int iType, int addrStart, int length)
    {
        this.sModule = sModule;
        this.sSymbolFile = sSymbolFile;
        this.addrStart = addrStart;
        this.length = length;
        
        if (iType == DebuggerInterface.MEMTYPE_ROM) {
            // Scan the ROM for symbols
            cSymbols = ScanROM(mem, addrStart, length);
            if (cSymbols > 0) {
                aSymbolNames = new String[cSymbols];
                aSymbolAddrs = new int[cSymbols];
                int cSymbols2 = ScanROM(mem, addrStart, length);
                Emulator.Assert_Debug(cSymbols == cSymbols2, "DebuggerSymbols: ScanROM results differ");
            }
        }
        else if (iType == DebuggerInterface.MEMTYPE_DEVICE) {
            if (addrStart == HWDragonBall.DBREGS_BASE) {
                cSymbols = aDBRegNames.length;
                aSymbolNames = aDBRegNames;
                aSymbolAddrs = aDBRegAddrs;
            }
            else if (addrStart == HWLCDEpson1375.SEDREGS_BASE) {
                cSymbols = aSEDRegNames.length;
                aSymbolNames = aSEDRegNames;
                aSymbolAddrs = aSEDRegAddrs;
            }
        }
        
        if (cSymbols > 0) {
            int cNonUnique = 0;
            
            aSortedSymbolNames = new String[cSymbols];
            aSortedSymbolAddrs = new int[cSymbols];

            // Performance note: we COULD upper-case all the strings in aSortedSymbolNames, which would
            // allow us to search faster, because then we could upper-case the search string once and do case-less
            // compares for the duration of the search.  However, that would require more than just the second
            // array;  it would require a new copy of EVERY STRING in the second array.  I prefer to save the memory;
            // perf won't suffer noticeably.

            System.arraycopy(aSymbolNames, 0, aSortedSymbolNames, 0, cSymbols);
            System.arraycopy(aSymbolAddrs, 0, aSortedSymbolAddrs, 0, cSymbols);
        
            quickSort(0, cSymbols-1);
            
            // Time to check for duplicate symbols....
            for (int i=0; i<cSymbols-1; i++) {
                if (aSortedSymbolNames[i].equals(aSortedSymbolNames[i+1])) {
                    int j, k, l;
                    for (j=i+2; j<cSymbols-1; j++) {
                        if (!aSortedSymbolNames[i].equals(aSortedSymbolNames[j]))
                            break;
                    }
                    // So, all symbols from i to j-1 are identical; let's "uniquify" them while preserving their "sortedness"
                    l = j-i;
                    if (l >= 100)
                        Emulator.DisplayMessage("Too many non-unique symbols named \"" + aSortedSymbolNames[i] + "\" (" + l + ")");
                    else {
                        cNonUnique += l;
                        for (j=i,k=1; k<=l; j++,k++) {
                            aSortedSymbolNames[j] = aSortedSymbolNames[j] + (k < 10? "0" : "") + k;
                            int m = GetSymbolIndex(aSortedSymbolAddrs[j]);
                            if (m >= 0)
                                aSymbolNames[m] = aSortedSymbolNames[j];
                        }
                    }
                }
            }
            
          //if (sModule != null)
          //    Emulator.DisplayMessage("Found " + cSymbols + " symbols for " + sModule + " (" + cNonUnique + " non-unique)");
        }
    }
    
    
    void quickSort(int left, int right)
    {
        if (right > left) {
            String s = aSortedSymbolNames[right].toUpperCase();
            int i = left - 1;
            int j = right;
            while (true) {
                while (aSortedSymbolNames[++i].toUpperCase().compareTo(s) < 0)
                    ;
                while (j > 0) {
                    if (aSortedSymbolNames[--j].toUpperCase().compareTo(s) <= 0)
                        break;
                }
                if (i >= j)
                    break;
                quickSwap(i, j);
            }
            quickSwap(i, right);
            quickSort(left, i-1);
            quickSort(i+1, right);
        }
    }
    
    
    void quickSwap(int i1, int i2)
    {
        String sTemp = aSortedSymbolNames[i1];
        int addrTemp = aSortedSymbolAddrs[i1];
        
        aSortedSymbolNames[i1] = aSortedSymbolNames[i2];
        aSortedSymbolAddrs[i1] = aSortedSymbolAddrs[i2];
        
        aSortedSymbolNames[i2] = sTemp;
        aSortedSymbolAddrs[i2] = addrTemp;
    }


    /*  ScanROM
     *
     *  ENTRY
     *      mem == CPUMem object containing ROM
     *      addrROM == address of ROM image
     *      cbROM == length of ROM image, in bytes
     *
     *  EXIT
     *      Number of (possible) symbols in the ROM
     */
    int ScanROM(CPUMem mem, int addrROM, int cbROM)
    {
        int cSymbols = 0;
        int cPeeksForLINK = 1;
        int addr = addrROM;
        int addrLimit = addrROM + cbROM;
        int addrFunc = addrROM;
        byte abSymbolName[] = new byte[32];
        
        Emulator.Assert_Debug(addrROM > 0 && addrLimit > addrROM, "ScanROM: invalid address range");
        
        while (addr < addrLimit) {
            
            int wCode = mem.GetWordEx(addr);
            
            // The LINK instruction is a nice marker for setting addrFunc,
            // but we'll only do it as long as cPeeksForLINK > 0, to avoid overdoing it.
            
            if (cPeeksForLINK > 0) {
                if (wCode == (CPUOps.OP_LINK + 6)) {            // check for LINK A6,#-0x?
                    addrFunc = addr;
                    cPeeksForLINK--;
                }
            }

            addr += 2;
            
            if (wCode == CPUOps.OP_RTS || wCode == CPUOps.OP_RTE) {
                
                int addrByte = addr;
                int iSymbolName = 0;
                int bLengthName = mem.GetByteEx(addrByte++);
                
                // BUGBUG: I put an arbitrary limit of 50 characters on the length, what's the real limit? -JP
                if ((bLengthName & 0x80) != 0 && (bLengthName & 0x7f) < 50) {
                    
                    bLengthName = (bLengthName & 0x7f) + 1;     // add 1 for the null-terminator that the count doesn't include
                    
                    while (bLengthName-- > 0 && iSymbolName < abSymbolName.length && addrByte < addrLimit) {
                        byte b = mem.GetByteEx(addrByte++);
                        if (b == 0) {
                          //Emulator.Assert_Debug(bLengthName == 0, "ScanROM: malformed symbol name");
                            if (bLengthName != 0) {             // assumed it is malformed, and therefore ignore it
                                bLengthName = 0;
                                iSymbolName = 0;
                            }
                            break;
                        }
                        if (b >= 0x41 && b <= 0x5A || b >= 0x61 && b <= 0x7A || b == 0x5f || addrByte > addr && b >= 0x30 && b <= 0x39) {
                            abSymbolName[iSymbolName++] = b;
                        }
                        else {
                            iSymbolName = 0;
                            bLengthName = 0;
                            break;
                        }
                    }
                }
                else
                    bLengthName = 0;

                addr = (addrByte + bLengthName + 1) & ~0x1;
                while (addr < addrLimit && mem.GetWordEx(addr) == 0)
                    addr += 2;                                  // skip any extra null padding

                if (iSymbolName > 0) {
                    if (aSymbolNames != null) {
                        String s = aSymbolNames[cSymbols] = new String(abSymbolName, 0, iSymbolName);
                        aSymbolAddrs[cSymbols] = addrFunc;
                        Emulator.DisplayVerboseMessage_Debug("Symbol for 0x" + Integer.toHexString(addrFunc) + ": " + s);
                    }
                    cSymbols++;
                }
                
                // Setting addrFunc here has the advantage of advancing it past the most recent RTS or RTE instruction;
                // previously, we were only advancing it when we successfully recorded a symbol, but not all functions
                // have valid symbols, which meant that some symbols were spanning much larger ranges than they were meant to.

                addrFunc = addr;
                cPeeksForLINK = 1;
            }
        }
        return cSymbols;
    }
    
    
    /*  GetSymbolIndex
     *
     *  ENTRY
     *      addr == address to look for
     *
     *  EXIT
     *      Closest symbol index, or -1 if out of range
     */
    int GetSymbolIndex(int addr)
    {
        //  Mask the addresses to avoid compare errors due to sign overflow
        int addrLow = addrStart & 0x7fffffff;
        int addrHigh = addrLow + length;
        if (addrHigh < 0)
            addrHigh = 0x7fffffff;
        
        addr &= 0x7fffffff;
        
        if (cSymbols == 0 || addr < addrLow || addr >= addrHigh)
            return -1;
        
        int mid = 0;
        int left = 0;
        int right = cSymbols - 1;
        
        while (left <= right) {
            mid = (left + right) / 2;
            if (addr == (aSymbolAddrs[mid] & 0x7fffffff))
                return mid;
            if (addr < (aSymbolAddrs[mid] & 0x7fffffff))
                right = mid - 1;
            else
                left = mid + 1;
        }
        
        return right;
    }
    
    
    /*  GetSymbolName
     *
     *  ENTRY
     *      i == symbol index returned by GetSymbolIndex
     *
     *  EXIT
     *      Name of symbol
     */
    String GetSymbolName(int i)
    {
        return i < aSymbolNames.length? aSymbolNames[i] : null;
    }
    
    
    /*  GetSymbolAddress
     *
     *  ENTRY
     *      i == symbol index returned by GetSymbolIndex
     *
     *  EXIT
     *      Address of symbol
     */
    int GetSymbolAddress(int i)
    {
        return i < aSymbolAddrs.length? aSymbolAddrs[i] : 0;
    }
    
    
    /*  FindSymbolAddress
     *
     *  ENTRY
     *      s == symbol
     *
     *  EXIT
     *      Integer containing address of symbol, or null if not found
     *
     *  NOTE
     *      Important subtlety: it's important to UPPER-case both strings for each comparison
     *      rather than lower-case them -- if you want case-less compares to actually work, that is.
     *      The reason is because aSortedSymbolNames was sorted using UPPER-case compares as well.
     *      In other words, both the sort and the search have to use the same casing logic (duh).
     */
    Integer FindSymbolAddress(String s)
    {
        int mid = 0;
        int left = 0;
        int right = cSymbols - 1;
        
        s = s.toUpperCase();
        
        while (left <= right) {
            mid = (left + right) / 2;
            int compare = s.compareTo(aSortedSymbolNames[mid].toUpperCase());
            if (compare == 0)
                return new Integer(aSortedSymbolAddrs[mid]);
            if (compare < 0)
                right = mid - 1;
            else
                left = mid + 1;
        }
        return null;
    }
    
}
