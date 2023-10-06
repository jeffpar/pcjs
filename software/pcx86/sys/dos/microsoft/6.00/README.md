---
layout: page
title: Microsoft MS-DOS 6.00
permalink: /software/pcx86/sys/dos/microsoft/6.00/
redirect_from:
  - /disks/pcx86/dos/microsoft/6.00/1200K/
  - /disks/pcx86/dos/microsoft/6.00/1440K/
  - /disks/pcx86/dos/microsoft/6.00/
machines:
  - id: compaq386-msdos600
    type: pcx86
    config: /machines/pcx86/compaq/deskpro386/vga/2048kb/machine.xml
    autoMount:
      A: None
      B: MS-DOS 6.00 (1.2M Disk 1)
    drives: '[{name:"20Mb Hard Disk",type:2,path:"/harddisks/pcx86/20mb/MSDOS600.json"}]'
    autoType: DBLSPACE\r
---

In March 1993, Microsoft released MS-DOS 6.00, the next major release of MS-DOS after 5.00 shipped in June 1991.

In addition to several new full-screen utilities, like `DEFRAG` to defragment your hard disk (licensed from Symantec),
`MSBACKUP` to efficiently backup your hard disk (also licensed from Symantec), and `MSAV` to check for viruses (licensed
from Central Point Software), there were a number of new command-line programs, such as `CHOICE`, `DELTREE`, `MOVE`,
`MSCDEX`, and `SMARTDRV`.

But the biggest addition to MS-DOS 6.00 was a new feature called **DoubleSpace** (dubbed "MagicDrive" internally) that
automatically compressed everything on your hard disk, providing up to "double" the amount of effective disk space -- or more,
or less, depending on how compressible your files were overall.

See this [blog post](/blog/2023/10/04/) for more information -- and some personal trivia -- regarding MS-DOS 6.00.

{% include machine.html id="compaq386-msdos600" %}

NOTE: The machine above is configured with a 20Mb hard disk, with MS-DOS 6.00 preinstalled, but the disk is uncompressed.
The same machine with a [compressed disk](compressed/) is also available.

Directory listings of the [four 1.2M](#directory-of-ms-dos-600-12m-disk-1) and [three 1.44M](#directory-of-ms-dos-600-144m-disk-1)
distribution diskettes are provided below.

### Directory of MS-DOS 6.00 (1.2M Disk 1)

     Volume in drive A is DISK      1
     Directory of A:\

    IO       SYS*    40470   3-10-93   6:00a
    MSDOS    SYS*    38138   3-10-93   6:00a
    ANSI     SY_      6260   3-10-93   6:00a
    ATTRIB   EXE     11165   3-10-93   6:00a
    AUTOEXEC BAT        36   3-10-93   6:00a
    CHKDSK   EXE     12907   3-10-93   6:00a
    COMMAND  COM     52925   3-10-93   6:00a
    CONFIG   SYS        13   3-10-93   6:00a
    COUNTRY  SYS     17066   3-10-93   6:00a
    DBLSPACE BIN     51214   3-10-93   6:00a
    DEBUG    EXE     15715   3-10-93   6:00a
    DOSSETUP INI      3735   3-10-93   6:00a
    EDIT     COM       413   3-10-93   6:00a
    EXPAND   EXE     16129   3-10-93   6:00a
    FDISK    EXE     29333   3-10-93   6:00a
    FORMAT   COM     22717   3-10-93   6:00a
    KEYB     COM     14983   3-10-93   6:00a
    KEYBOARD SYS     34694   3-10-93   6:00a
    MORE     COM      2546   3-10-93   6:00a
    MSD      EXE    158470   3-10-93   6:00a
    NETWORKS TXT     20463   3-10-93   6:00a
    NLSFUNC  EXE      7036   3-10-93   6:00a
    PACKING  LST      6929   3-10-93   6:00a
    QBASIC   EXE    194309   3-10-93   6:00a
    README   TXT     44990   3-10-93   6:00a
    RESTORE  EX_     23328   3-10-93   6:00a
    SETUP    EXE     71974   3-10-93   6:00a
    SETUP    MSG      1290   3-10-93   6:00a
    SYS      COM      9379   3-10-93   6:00a
    UNFORMAT COM     12738   3-10-93   6:00a
           30 file(s)     921365 bytes
                          284672 bytes free

### Directory of MS-DOS 6.00 (1.2M Disk 2)

     Volume in drive A is DISK      2
     Directory of A:\

    8514     VI_      6421   3-10-93   6:00a
    APPEND   EX_      7462   3-10-93   6:00a
    CGA      GR_      1617   3-10-93   6:00a
    CGA      IN_      2775   3-10-93   6:00a
    CGA      VI_      6131   3-10-93   6:00a
    CHOICE   COM      1754   3-10-93   6:00a
    DEFRAG   EXE     75033   3-10-93   6:00a
    DEFRAG   HL_      4284   3-10-93   6:00a
    DELTREE  EX_      7253   3-10-93   6:00a
    DISKCOMP CO_      6657   3-10-93   6:00a
    DISKCOPY CO_      7382   3-10-93   6:00a
    DISPLAY  SY_      9796   3-10-93   6:00a
    DOSHELP  HL_      2492   3-10-93   6:00a
    DOSKEY   CO_      4217   3-10-93   6:00a
    DOSSHELL CO_      1907   3-10-93   6:00a
    DOSSHELL EX_    142511   3-10-93   6:00a
    DOSSWAP  EX_     13498   3-10-93   6:00a
    DRIVER   SY_      4027   3-10-93   6:00a
    EDIT     HL_     15709   3-10-93   6:00a
    EGA      CP_     18186   3-10-93   6:00a
    EGA      GR_      2466   3-10-93   6:00a
    EGA      IN_      2776   3-10-93   6:00a
    EGA      SY_      3684   3-10-93   6:00a
    EGA      VI_      6160   3-10-93   6:00a
    EGAMONO  GR_      2318   3-10-93   6:00a
    FASTHELP EX_      7539   3-10-93   6:00a
    FASTOPEN EX_      7783   3-10-93   6:00a
    FC       EX_     12065   3-10-93   6:00a
    FIND     EX_      4877   3-10-93   6:00a
    GRAPHICS CO_     11327   3-10-93   6:00a
    GRAPHICS PR_      3883   3-10-93   6:00a
    HELP     COM       413   3-10-93   6:00a
    HELP     HL_    263819   3-10-93   6:00a
    HERC     GR_      1636   3-10-93   6:00a
    HERC     VI_      6271   3-10-93   6:00a
    HIMEM    SY_      8497   3-10-93   6:00a
    LABEL    EX_      6176   3-10-93   6:00a
    LOADFIX  CO_       649   3-10-93   6:00a
    MEM      EX_     19147   3-10-93   6:00a
    MODE     CO_     14849   3-10-93   6:00a
    MONO     GR_       296   3-10-93   6:00a
    MONO     IN_      2451   3-10-93   6:00a
    MOVE     EX_     11659   3-10-93   6:00a
    POWER    EX_      5549   3-10-93   6:00a
    PRINT    EX_      9614   3-10-93   6:00a
    QBASIC   HL_    113105   3-10-93   6:00a
    RAMDRIVE SY_      3282   3-10-93   6:00a
    REPLACE  EX_     12800   3-10-93   6:00a
    SETVER   EX_      6635   3-10-93   6:00a
    SHARE    EX_      8116   3-10-93   6:00a
    SMARTDRV EX_     13793   3-10-93   6:00a
    SMARTMON EX_     13747   3-10-93   6:00a
    SMARTMON HL_      7319   3-10-93   6:00a
    SORT     EX_      4355   3-10-93   6:00a
    SUBST    EX_     12710   3-10-93   6:00a
    TREE     CO_      4753   3-10-93   6:00a
    VGA      GR_      3198   3-10-93   6:00a
    VGA      VI_      6355   3-10-93   6:00a
    VGAMONO  GR_      3214   3-10-93   6:00a
    WINA20   38_      2661   3-10-93   6:00a
    XCOPY    EX_     10368   3-10-93   6:00a
           61 file(s)     981427 bytes
                          216576 bytes free

### Directory of MS-DOS 6.00 (1.2M Disk 3)

     Volume in drive A is DISK      3
     Directory of A:\

    CHKSTATE SY_     16770   3-10-93   6:00a
    MEMMAKER HL_      5980   3-10-93   6:00a
    MEMMAKER IN_       800   3-10-93   6:00a
    MSBACKDB OVL     63098   3-10-93   6:00a
    MSBACKDR OVL     66906   3-10-93   6:00a
    MSBACKFB OVL     69066   3-10-93   6:00a
    MSBACKFR OVL     72474   3-10-93   6:00a
    MSBACKUP EX_      2487   3-10-93   6:00a
    MSBACKUP HL_    112396   3-10-93   6:00a
    MSBACKUP OVL    133952   3-10-93   6:00a
    MSBCONFG HL_     18549   3-10-93   6:00a
    MSBCONFG OVL     47210   3-10-93   6:00a
    MWBACKF  DL_      6956   3-10-93   6:00a
    MWBACKR  DL_     30277   3-10-93   6:00a
    MWBACKUP EX_    159138   3-10-93   6:00a
    MWBACKUP HL_    141281   3-10-93   6:00a
    MWGRAFIC DL_     18094   3-10-93   6:00a
    MWUNDEL  EX_     65900   3-10-93   6:00a
    MWUNDEL  HL_     17458   3-10-93   6:00a
    UNDELETE EXE     26420   3-10-93   6:00a
    VFINTD   38_      1289   3-10-93   6:00a
    WNTOOLS  GR_      1071   3-10-93   6:00a
           22 file(s)    1077572 bytes
                          131072 bytes free

### Directory of MS-DOS 6.00 (1.2M Disk 4)

     Volume in drive A is DISK      4
     Directory of A:\

    DBLSPACE EX_    170947   3-10-93   6:00a
    DBLSPACE HL_     22203   3-10-93   6:00a
    DBLSPACE IN_      1060   3-10-93   6:00a
    DBLSPACE SYS       339   3-10-93   6:00a
    DBLWIN   HL_      4205   3-10-93   6:00a
    DOSSHELL HL_     48773   3-10-93   6:00a
    EMM386   EX_     48725   3-10-93   6:00a
    INTERLNK EX_     10720   3-10-93   6:00a
    INTERSVR EX_     26343   3-10-93   6:00a
    MEMMAKER EXE    118660   3-10-93   6:00a
    MONOUMB  38_       950   3-10-93   6:00a
    MSAV     EXE    172198   3-10-93   6:00a
    MSAV     HL_     12230   3-10-93   6:00a
    MSAVHELP OV_     17796   3-10-93   6:00a
    MSAVIRUS LS_     11473   3-10-93   6:00a
    MSCDEX   EXE     25377   3-10-93   6:00a
    MSTOOLS  DL_      8376   3-10-93   6:00a
    MWAV     EX_     65629   3-10-93   6:00a
    MWAV     HL_     12070   3-10-93   6:00a
    MWAVABSI DL_     23085   3-10-93   6:00a
    MWAVDLG  DL_     10232   3-10-93   6:00a
    MWAVDOSL DL_     19702   3-10-93   6:00a
    MWAVDRVL DL_      4219   3-10-93   6:00a
    MWAVMGR  DL_      9569   3-10-93   6:00a
    MWAVSCAN DL_     70797   3-10-93   6:00a
    MWAVSOS  DL_      3983   3-10-93   6:00a
    MWAVTSR  EX_      8445   3-10-93   6:00a
    SIZER    EX_      4136   3-10-93   6:00a
    VSAFE    CO_     33046   3-10-93   6:00a
    COUNTRY  IC_      3266   3-10-93   6:00a
    EGA      IC_     22791   3-10-93   6:00a
    KEYBOARD IC_      8243   3-10-93   6:00a
           32 file(s)     999588 bytes
                          205824 bytes free

### Directory of MS-DOS 6.00 (1.44M Disk 1)

     Volume in drive A is DISK      1
     Directory of A:\

    IO       SYS*    40470   3-10-93   6:00a
    MSDOS    SYS*    38138   3-10-93   6:00a
    8514     VI_      6421   3-10-93   6:00a
    ANSI     SY_      6260   3-10-93   6:00a
    ATTRIB   EXE     11165   3-10-93   6:00a
    AUTOEXEC BAT        36   3-10-93   6:00a
    CGA      GR_      1617   3-10-93   6:00a
    CGA      IN_      2775   3-10-93   6:00a
    CGA      VI_      6131   3-10-93   6:00a
    CHKDSK   EXE     12907   3-10-93   6:00a
    CHOICE   COM      1754   3-10-93   6:00a
    COMMAND  COM     52925   3-10-93   6:00a
    CONFIG   SYS        13   3-10-93   6:00a
    COUNTRY  SYS     17066   3-10-93   6:00a
    DBLSPACE BIN     51214   3-10-93   6:00a
    DEBUG    EXE     15715   3-10-93   6:00a
    DEFRAG   EXE     75033   3-10-93   6:00a
    DEFRAG   HL_      4284   3-10-93   6:00a
    DELTREE  EX_      7253   3-10-93   6:00a
    DOSSETUP INI      3723   3-10-93   6:00a
    DOSSWAP  EX_     13498   3-10-93   6:00a
    EDIT     COM       413   3-10-93   6:00a
    EGA      CP_     18186   3-10-93   6:00a
    EGA      GR_      2466   3-10-93   6:00a
    EGA      IN_      2776   3-10-93   6:00a
    EGA      SY_      3684   3-10-93   6:00a
    EGA      VI_      6160   3-10-93   6:00a
    EGAMONO  GR_      2318   3-10-93   6:00a
    EXPAND   EXE     16129   3-10-93   6:00a
    FDISK    EXE     29333   3-10-93   6:00a
    FORMAT   COM     22717   3-10-93   6:00a
    HERC     GR_      1636   3-10-93   6:00a
    HERC     VI_      6271   3-10-93   6:00a
    HIMEM    SY_      8497   3-10-93   6:00a
    KEYB     COM     14983   3-10-93   6:00a
    KEYBOARD SYS     34694   3-10-93   6:00a
    MEM      EX_     19147   3-10-93   6:00a
    MONO     GR_       296   3-10-93   6:00a
    MONO     IN_      2451   3-10-93   6:00a
    MORE     COM      2546   3-10-93   6:00a
    MOVE     EX_     11659   3-10-93   6:00a
    MSD      EXE    158470   3-10-93   6:00a
    README   TXT     44990   3-10-93   6:00a
    NETWORKS TXT     20463   3-10-93   6:00a
    NLSFUNC  EXE      7036   3-10-93   6:00a
    PACKING  LST      6899   3-10-93   6:00a
    QBASIC   EXE    194309   3-10-93   6:00a
    RAMDRIVE SY_      3282   3-10-93   6:00a
    RESTORE  EX_     23328   3-10-93   6:00a
    SETUP    EXE     71974   3-10-93   6:00a
    SETUP    MSG      1290   3-10-93   6:00a
    SMARTDRV EX_     13793   3-10-93   6:00a
    SYS      COM      9379   3-10-93   6:00a
    UNFORMAT COM     12738   3-10-93   6:00a
    VGA      GR_      3198   3-10-93   6:00a
    VGA      VI_      6355   3-10-93   6:00a
    VGAMONO  GR_      3214   3-10-93   6:00a
    WINA20   38_      2661   3-10-93   6:00a
    XCOPY    EX_     10368   3-10-93   6:00a
           59 file(s)    1168507 bytes
                          272896 bytes free

### Directory of MS-DOS 6.00 (1.44M Disk 2)

     Volume in drive A is DISK      2
     Directory of A:\

    APPEND   EX_      7462   3-10-93   6:00a
    DISKCOMP CO_      6657   3-10-93   6:00a
    DISKCOPY CO_      7382   3-10-93   6:00a
    DISPLAY  SY_      9796   3-10-93   6:00a
    DOSHELP  HL_      2492   3-10-93   6:00a
    DOSKEY   CO_      4217   3-10-93   6:00a
    DOSSHELL CO_      1907   3-10-93   6:00a
    DOSSHELL EX_    142511   3-10-93   6:00a
    DRIVER   SY_      4027   3-10-93   6:00a
    EDIT     HL_     15709   3-10-93   6:00a
    FASTHELP EX_      7539   3-10-93   6:00a
    FASTOPEN EX_      7783   3-10-93   6:00a
    FC       EX_     12065   3-10-93   6:00a
    FIND     EX_      4877   3-10-93   6:00a
    GRAPHICS CO_     11327   3-10-93   6:00a
    GRAPHICS PR_      3883   3-10-93   6:00a
    HELP     COM       413   3-10-93   6:00a
    HELP     HL_    263819   3-10-93   6:00a
    LABEL    EX_      6176   3-10-93   6:00a
    LOADFIX  CO_       649   3-10-93   6:00a
    MODE     CO_     14849   3-10-93   6:00a
    MSBACKFB OVL     69066   3-10-93   6:00a
    MSBACKFR OVL     72474   3-10-93   6:00a
    MSBACKUP EX_      2487   3-10-93   6:00a
    MSBACKUP OVL    133952   3-10-93   6:00a
    MWBACKF  DL_      6956   3-10-93   6:00a
    MWBACKR  DL_     30277   3-10-93   6:00a
    MWBACKUP EX_    159138   3-10-93   6:00a
    MWBACKUP HL_    141281   3-10-93   6:00a
    POWER    EX_      5549   3-10-93   6:00a
    PRINT    EX_      9614   3-10-93   6:00a
    QBASIC   HL_    113105   3-10-93   6:00a
    REPLACE  EX_     12800   3-10-93   6:00a
    SETVER   EX_      6635   3-10-93   6:00a
    SHARE    EX_      8116   3-10-93   6:00a
    SMARTMON EX_     13747   3-10-93   6:00a
    SMARTMON HL_      7319   3-10-93   6:00a
    SORT     EX_      4355   3-10-93   6:00a
    SUBST    EX_     12710   3-10-93   6:00a
    TREE     CO_      4753   3-10-93   6:00a
    VFINTD   38_      1289   3-10-93   6:00a
    COUNTRY  IC_      3266   3-10-93   6:00a
    EGA      IC_     22791   3-10-93   6:00a
    KEYBOARD IC_      8243   3-10-93   6:00a
           44 file(s)    1385463 bytes
                           61952 bytes free

### Directory of MS-DOS 6.00 (1.44M Disk 3)

     Volume in drive A is DISK      3
     Directory of A:\

    CHKSTATE SY_     16770   3-10-93   6:00a
    DBLSPACE EX_    170947   3-10-93   6:00a
    DBLSPACE HL_     22203   3-10-93   6:00a
    DBLSPACE IN_      1060   3-10-93   6:00a
    DBLSPACE SYS       339   3-10-93   6:00a
    DBLWIN   HL_      4205   3-10-93   6:00a
    DOSSHELL HL_     48773   3-10-93   6:00a
    EMM386   EX_     48725   3-10-93   6:00a
    INTERLNK EX_     10720   3-10-93   6:00a
    INTERSVR EX_     26343   3-10-93   6:00a
    MEMMAKER EXE    118660   3-10-93   6:00a
    MEMMAKER HL_      5980   3-10-93   6:00a
    MEMMAKER IN_       800   3-10-93   6:00a
    MONOUMB  38_       950   3-10-93   6:00a
    MSAV     EXE    172198   3-10-93   6:00a
    MSAV     HL_     12230   3-10-93   6:00a
    MSAVHELP OV_     17796   3-10-93   6:00a
    MSAVIRUS LS_     11473   3-10-93   6:00a
    MSBACKDB OVL     63098   3-10-93   6:00a
    MSBACKDR OVL     66906   3-10-93   6:00a
    MSBACKUP HL_    112396   3-10-93   6:00a
    MSBCONFG HL_     18549   3-10-93   6:00a
    MSBCONFG OVL     47210   3-10-93   6:00a
    MSCDEX   EXE     25377   3-10-93   6:00a
    MSTOOLS  DL_      8376   3-10-93   6:00a
    MWAV     EX_     65629   3-10-93   6:00a
    MWAV     HL_     12070   3-10-93   6:00a
    MWAVABSI DL_     23085   3-10-93   6:00a
    MWAVDLG  DL_     10232   3-10-93   6:00a
    MWAVDOSL DL_     19702   3-10-93   6:00a
    MWAVDRVL DL_      4219   3-10-93   6:00a
    MWAVMGR  DL_      9569   3-10-93   6:00a
    MWAVSCAN DL_     70797   3-10-93   6:00a
    MWAVSOS  DL_      3983   3-10-93   6:00a
    MWAVTSR  EX_      8445   3-10-93   6:00a
    MWGRAFIC DL_     18094   3-10-93   6:00a
    MWUNDEL  EX_     65900   3-10-93   6:00a
    MWUNDEL  HL_     17458   3-10-93   6:00a
    SIZER    EX_      4136   3-10-93   6:00a
    UNDELETE EXE     26420   3-10-93   6:00a
    VSAFE    CO_     33046   3-10-93   6:00a
    WNTOOLS  GR_      1071   3-10-93   6:00a
           42 file(s)    1425940 bytes
                           20480 bytes free
