---
layout: page
title: IBM PC DOS 5.00
permalink: /software/pcx86/sys/dos/ibm/5.00/
redirect_from: /disks/pcx86/dos/ibm/5.00/
machines:
  - id: ibm5170-pcdos500
    type: pcx86
    debugger: true
    config: /configs/pcx86/machine/ibm/5170/ega/2048kb/rev3/debugger/machine.xml
    autoMount:
      A:
        name: PC DOS 5.00 (Disk 1)
      B:
        name: None
---

PC DOS 5.00 was released in June 1991.

A [Feature Summary](#feature-summary), along with [Directory Listings](#directory-of-pc-dos-500-disk-1) of the three
720Kb distribution diskettes, are provided below.

{% include machine.html id="ibm5170-pcdos500" %}

### Feature Summary

New internal commands:

- LOADHIGH (LH)

New external commands:

- DOSKEY
- EDIT
- EMM386
- HELP
- LOADFIX
- MIRROR
- QBASIC
- SETVER
- UNDELETE
- UNFORMAT

Removed external commands:

- FILESYS
- GWBASIC
- IFSFUNC
- LINK
- SELECT

New CONFIG.SYS commands:

- DEVICEHIGH
- DOS

Removed CONFIG.SYS commands:

- CPSW
- IFS

New device drivers:

- EMM386.EXE
- HIMEM.SYS
- SETVER.EXE

Removed device drivers:

- VDISK.SYS (PC DOS)
- XMA2EMS.SYS
- XMAEM.SYS

New functions:

- INT 21h functions 3306h, 4410h-4411h, 4B05h, 5802h-5803h
- INT 2Fh multiplex functions 43h (HIMEM.SYS), 48h (DOSKEY), 4Ah (IBMBIO), 55h (COMMAND), ACh (GRAPHICS)

Removed functions:

- INT 21h functions 3303h-3304h, 3701h, 5702h-5704h, 5D0Bh, 6Bh

### Directory of PC DOS 5.00 (Disk 1)

     Volume in drive A is DISK1
     Directory of A:\

    IBMBIO   COM*    33430   5-09-91  12:00p
    IBMDOS   COM*    37378   5-09-91  12:00p
    AUTOEXEC BAT        36   5-09-91  12:00p
    COMMAND  COM     47987   5-09-91  12:00p
    CONFIG   SYS        13   5-09-91  12:00p
    COUNTRY  SYS     17686   5-09-91  12:00p
    EGA      SY_      4108   5-09-91  12:00p
    KEYB     COM     15163   5-09-91  12:00p
    KEYBOARD SYS     38206   5-09-91  12:00p
    NLSFUNC  EXE      7020   5-09-91  12:00p
    SETUP    EXE     74126   5-09-91  12:00p
    SETUP    INI      2161   5-09-91  12:00p
    CV       COM       716   5-09-91  12:00p
    DISPLAY  SY_     11177   5-09-91  12:00p
    EGA      CP_     19694   5-09-91  12:00p
    HIMEM    SY_      7888   5-09-91  12:00p
    MODE     CO_     16867   5-09-91  12:00p
    SETVER   EX_      7445   5-09-91  12:00p
    ANSI     SY_      7177   5-09-91  12:00p
    DEBUG    CO_     16897   5-09-91  12:00p
    EDLIN    CO_     10430   5-09-91  12:00p
    EMM386   EX_     47563   5-09-91  12:00p
    FASTOPEN EX_      8914   5-09-91  12:00p
    FDISK    COM     57304   5-09-91  12:00p
    FORMAT   COM     32911   5-09-91  12:00p
    MIRROR   CO_     12781   5-09-91  12:00p
    RAMDRIVE SY_      3737   5-09-91  12:00p
    SHARE    EX_      9295   5-09-91  12:00p
    SMARTDRV SY_      6289   5-09-91  12:00p
    SYS      CO_      9665   5-09-91  12:00p
    UNDELETE EX_      9393   5-09-91  12:00p
    UNFORMAT COM     18576   5-09-91  12:00p
    XCOPY    EX_     11865   5-09-91  12:00p
           33 file(s)     603898 bytes
                          106496 bytes free

### Directory of PC DOS 5.00 (Disk 2)

     Volume in drive A is DISK2
     Directory of A:\

    DOSKEY   CO_      4729   5-09-91  12:00p
    CGA      GR_      1768   5-09-91  12:00p
    CGA      IN_      3335   5-09-91  12:00p
    CGA      VI_      6920   5-09-91  12:00p
    DOSSHELL CO_      2218   5-09-91  12:00p
    DOSSHELL EX_    155861   5-09-91  12:00p
    DOSSWAP  EX_     15487   5-09-91  12:00p
    EGA      GR_      2729   5-09-91  12:00p
    EGA      IN_      3336   5-09-91  12:00p
    EGA      VI_      7012   5-09-91  12:00p
    EGAMONO  GR_      2564   5-09-91  12:00p
    HERC     GR_      1809   5-09-91  12:00p
    HERC     VI_      6998   5-09-91  12:00p
    MONO     GR_       301   5-09-91  12:00p
    MONO     IN_      2992   5-09-91  12:00p
    PACKING  LST      2548   5-09-91  12:00p
    PRINT    CO_     11032   5-09-91  12:00p
    VGA      GR_      3593   5-09-91  12:00p
    VGA      VI_      7238   5-09-91  12:00p
    VGAMONO  GR_      3605   5-09-91  12:00p
    APPNOTES TXT      8494   5-09-91  12:00p
    DOSHELP  HL_      2837   5-09-91  12:00p
    DOSSHELL HL_     54369   5-09-91  12:00p
    EDIT     HL_     17322   5-09-91  12:00p
    HELP     EX_      8537   5-09-91  12:00p
    RECOVER  CO_      7526   5-09-91  12:00p
    QBASIC   HL_    122321   5-09-91  12:00p
    EDIT     COM       413   5-09-91  12:00p
    MONEY    BA_     14912   5-09-91  12:00p
    MSHERC   CO_      4444   5-09-91  12:00p
    QBASIC   EX_    212408   5-09-91  12:00p
           31 file(s)     699658 bytes
                           14336 bytes free

### Directory of PC DOS 5.00 (Disk 3)

     Volume in drive A is DISK3
     Directory of A:\

    GORILLA  BA_     11957   5-09-91  12:00p
    4201     CP_      7938   5-09-91  12:00p
    4208     CP_       375   5-09-91  12:00p
    5202     CP_       352   5-09-91  12:00p
    PPDS     CP_       316   5-09-91  12:00p
    APPEND   EX_      8466   5-09-91  12:00p
    ASSIGN   CO_      5213   5-09-91  12:00p
    ATTRIB   EX_     11802   5-09-91  12:00p
    BACKUP   CO_     25729   5-09-91  12:00p
    CHKDSK   CO_     12699   5-09-91  12:00p
    COMP     CO_     10513   5-09-91  12:00p
    DISKCOMP CO_      7650   5-09-91  12:00p
    DISKCOPY CO_      8389   5-09-91  12:00p
    DRIVER   SY_      4571   5-09-91  12:00p
    FC       EX_     13505   5-09-91  12:00p
    FIND     EX_      5547   5-09-91  12:00p
    GRAFTABL CO_      8120   5-09-91  12:00p
    GRAPHICS CO_     12896   5-09-91  12:00p
    LABEL    CO_      6929   5-09-91  12:00p
    MORE     CO_      2311   5-09-91  12:00p
    NIBBLES  BA_      8242   5-09-91  12:00p
    REMLINE  BA_      4999   5-09-91  12:00p
    RESTORE  CO_     26090   5-09-91  12:00p
    SORT     EX_      4982   5-09-91  12:00p
    WINA20   38_      3214   5-09-91  12:00p
    EXE2BIN  EX_      6882   5-09-91  12:00p
    EXPAND   EXE     14563   5-09-91  12:00p
    GRAPHICS PR_      5186   5-09-91  12:00p
    JOIN     EX_     13908   5-09-91  12:00p
    LOADFIX  CO_       704   5-09-91  12:00p
    PRINTER  SY_     12449   5-09-91  12:00p
    README   TXT     12856   5-09-91  12:00p
    REPLACE  EX_     14419   5-09-91  12:00p
    SUBST    EX_     14503   5-09-91  12:00p
    TREE     CO_      5437   5-09-91  12:00p
    MEM      EX_     29716   5-09-91  12:00p
    MOUSE    CO_     19218   5-09-91  12:00p
    CMOSCLK  SY_       925   5-09-91  12:00p
    BASIC    CO_       545   5-09-91  12:00p
    BASICA   CO_     59013   5-09-91  12:00p
    MEUTOINI EX_     25693   5-09-91  12:00p
    AUTOCONF EX_     17246   5-09-91  12:00p
    KEYBGK   COM     15880   5-09-91  12:00p
    KEYBOARD SYS     38206   5-09-91  12:00p
    EGAX     CP_     14101   5-09-91  12:00p
           45 file(s)     534255 bytes
                          169984 bytes free

