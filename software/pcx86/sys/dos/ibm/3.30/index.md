---
layout: page
title: IBM PC DOS 3.30
permalink: /software/pcx86/sys/dos/ibm/3.30/
redirect_from: /disks/pcx86/dos/ibm/3.30/
machines:
  - id: ibm5170-pcdos330
    type: pcx86
    config: /configs/pcx86/machine/ibm/5170/ega/2048kb/rev3/machine.xml
    resume: 1
    autoMount:
      A:
        name: PC DOS 3.30 (Disk 1)
      B:
        name: PC DOS 3.30 (Disk 2)
    autoType: \r\r
---

PC DOS 3.30 was announced and released on April 2, 1987, along with the first PS/2 models. 

A [Feature Summary](#feature-summary), along with [Directory Listings](#directory-of-pc-dos-330-disk-1) of the two
360Kb distribution diskettes, are provided below.  This version of PC DOS was also available on one 720Kb diskette.

{% include machine.html id="ibm5170-pcdos330" %}

### Feature Summary

New features:

- 1.44MB 3.5" floppy disk support
- Extended partition support (partition type 05h)
- National language support
- Code page switching support
- Per-line batch file echo suppression added (@)
- Hardware interrupt stack switching support can be disabled (STACKS=0,0)
- 102-byte buffer reserved at 800h (70h:100h) for programs using 80286 LOADALL

New internal commands:

- CALL
- CHCP

New external commands:

- APPEND (PC DOS)
- ATTRIB /S (to recurse subdirectories)
- COMP (MS-DOS)
- FASTOPEN
- KEYB
- NLSFUNC
- SELECT (MS-DOS)

Removed external commands:

- KEYBFR, KEYBGR, KEYBIT, KEYBSP, KEYBUK (replaced by KEYB)

New internal devices:

- COM3
- COM4

New CONFIG.SYS commands:

- STACKS (replaced STACK)

New device drivers:

- DISPLAY.SYS
- PRINTER.SYS

New support files:

- COUNTRY.SYS
- EGA.CPI
- KEYBOARD.SYS

New functions:

- INT 21h functions 65h-68h
- INT 2Fh multiplex functions 14h (NLSFUNC), ADh (DISPLAY.SYS/KEYB), AEh (APPEND), B0h (GRAFTABL), B7h (APPEND)

### Directory of PC DOS 3.30 (Disk 1)

     Volume in drive A has no label
     Directory of A:\

    IBMBIO   COM*    22100   3-18-87  12:00p
    IBMDOS   COM*    30159   3-17-87  12:00p
    COMMAND  COM     25307   3-17-87  12:00p
    ANSI     SYS      1678   3-17-87  12:00p
    COUNTRY  SYS     11285   3-17-87  12:00p
    DISPLAY  SYS     11290   3-17-87  12:00p
    DRIVER   SYS      1196   3-17-87  12:00p
    FASTOPEN EXE      3919   3-17-87  12:00p
    FDISK    COM     48216   3-18-87  12:00p
    FORMAT   COM     11616   3-18-87  12:00p
    KEYB     COM      9056   3-17-87  12:00p
    KEYBOARD SYS     19766   3-17-87  12:00p
    MODE     COM     15487   3-17-87  12:00p
    NLSFUNC  EXE      3060   3-17-87  12:00p
    PRINTER  SYS     13590   3-17-87  12:00p
    REPLACE  EXE     11775   3-17-87  12:00p
    SELECT   COM      4163   3-17-87  12:00p
    SYS      COM      4766   3-17-87  12:00p
    VDISK    SYS      3455   3-17-87  12:00p
    XCOPY    EXE     11247   3-17-87  12:00p
    EGA      CPI     49065   3-18-87  12:00p
    LCD      CPI     10752   3-17-87  12:00p
    4201     CPI     17089   3-18-87  12:00p
    5202     CPI       459   3-17-87  12:00p
    VENDOR-# DO1*        0   7-04-83  12:00a
           25 file(s)     340496 bytes
                            9216 bytes free

### Directory of PC DOS 3.30 (Disk 2)

     Volume in drive A has no label
     Directory of A:\

    APPEND   EXE      5825   3-17-87  12:00p
    ASSIGN   COM      1561   3-17-87  12:00p
    ATTRIB   EXE      9529   3-17-87  12:00p
    BACKUP   COM     31913   3-18-87  12:00p
    BASIC    COM      1063   3-17-87  12:00p
    BASICA   COM     36403   3-17-87  12:00p
    CHKDSK   COM      9850   3-18-87  12:00p
    COMMAND  COM     25307   3-17-87  12:00p
    COMP     COM      4214   3-17-87  12:00p
    DEBUG    COM     15897   3-17-87  12:00p
    DISKCOMP COM      5879   3-17-87  12:00p
    DISKCOPY COM      6295   3-17-87  12:00p
    EDLIN    COM      7526   3-17-87  12:00p
    FIND     EXE      6434   3-17-87  12:00p
    FORMAT   COM     11616   3-18-87  12:00p
    GRAFTABL COM      6128   3-17-87  12:00p
    GRAPHICS COM      3300   3-17-87  12:00p
    JOIN     EXE      8969   3-17-87  12:00p
    LABEL    COM      2377   3-17-87  12:00p
    MORE     COM       313   3-17-87  12:00p
    PRINT    COM      9026   3-17-87  12:00p
    RECOVER  COM      4299   3-18-87  12:00p
    REPLACE  EXE     11775   3-17-87  12:00p
    RESTORE  COM     34643   3-17-87  12:00p
    SHARE    EXE      8608   3-17-87  12:00p
    SORT     EXE      1977   3-17-87  12:00p
    SUBST    EXE      9909   3-17-87  12:00p
    TREE     COM      3571   3-17-87  12:00p
    XCOPY    EXE     11247   3-17-87  12:00p
    BASIC    PIF       369   3-17-87  12:00p
    BASICA   PIF       369   3-17-87  12:00p
    MORTGAGE BAS      6251   3-17-87  12:00p
    VENDOR-# DO1*        0   7-04-83  12:00a
           33 file(s)     302443 bytes
                           43008 bytes free

### Directory of PC DOS 3.30 (TechRef)

     Volume in drive A has no label
     Directory of A:\

    DEBUG    COM     15897   3-17-87  11:00p
    EXE2BIN  EXE      3081   3-17-87  11:00p
    LIB      EXE     22912   3-17-87  11:00p
    LINK     EXE     39076   3-17-87  11:00p
    VDISK    ASM     75284   3-17-87  11:00p
    VENDOR-# DO1*        0   7-04-83  12:00a
            6 file(s)     156250 bytes
                          202752 bytes free

### Directory of PC DOS 3.30 (720K)

     Volume in drive A has no label
     Directory of A:\

    IBMBIO   COM*    22100   3-18-87  12:00p
    IBMDOS   COM*    30159   3-17-87  12:00p
    COMMAND  COM     25307   3-17-87  12:00p
    ANSI     SYS      1678   3-17-87  12:00p
    APPEND   EXE      5825   3-17-87  12:00p
    ASSIGN   COM      1561   3-17-87  12:00p
    ATTRIB   EXE      9529   3-17-87  12:00p
    BACKUP   COM     31913   3-18-87  12:00p
    BASIC    COM      1063   3-17-87  12:00p
    BASICA   COM     36403   3-17-87  12:00p
    CHKDSK   COM      9850   3-18-87  12:00p
    COMP     COM      4214   3-17-87  12:00p
    COUNTRY  SYS     11285   3-17-87  12:00p
    DEBUG    COM     15897   3-17-87  12:00p
    DISKCOMP COM      5879   3-17-87  12:00p
    DISKCOPY COM      6295   3-17-87  12:00p
    DISPLAY  SYS     11290   3-17-87  12:00p
    DRIVER   SYS      1196   3-17-87  12:00p
    EDLIN    COM      7526   3-17-87  12:00p
    FASTOPEN EXE      3919   3-17-87  12:00p
    FDISK    COM     48216   3-18-87  12:00p
    FIND     EXE      6434   3-17-87  12:00p
    FORMAT   COM     11616   3-18-87  12:00p
    GRAFTABL COM      6128   3-17-87  12:00p
    GRAPHICS COM      3300   3-17-87  12:00p
    JOIN     EXE      8969   3-17-87  12:00p
    KEYB     COM      9056   3-17-87  12:00p
    KEYBOARD SYS     19766   3-17-87  12:00p
    LABEL    COM      2377   3-17-87  12:00p
    MODE     COM     15487   3-17-87  12:00p
    MORE     COM       313   3-17-87  12:00p
    NLSFUNC  EXE      3060   3-17-87  12:00p
    PRINT    COM      9026   3-17-87  12:00p
    PRINTER  SYS     13590   3-17-87  12:00p
    RECOVER  COM      4299   3-18-87  12:00p
    REPLACE  EXE     11775   3-17-87  12:00p
    RESTORE  COM     34643   3-17-87  12:00p
    SELECT   COM      4163   3-17-87  12:00p
    SHARE    EXE      8608   3-17-87  12:00p
    SORT     EXE      1977   3-17-87  12:00p
    SUBST    EXE      9909   3-17-87  12:00p
    SYS      COM      4766   3-17-87  12:00p
    TREE     COM      3571   3-17-87  12:00p
    VDISK    SYS      3455   3-17-87  12:00p
    XCOPY    EXE     11247   3-17-87  12:00p
    EGA      CPI     49065   3-18-87  12:00p
    LCD      CPI     10752   3-17-87  12:00p
    4201     CPI     17089   3-18-87  12:00p
    5202     CPI       459   3-17-87  12:00p
    BASIC    PIF       369   3-17-87  12:00p
    BASICA   PIF       369   3-17-87  12:00p
    MORTGAGE BAS      6251   3-17-87  12:00p
    VENDOR-# DO1*        0   7-04-83  12:00a
           53 file(s)     582994 bytes
                          128512 bytes free
