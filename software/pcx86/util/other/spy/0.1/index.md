---
layout: page
title: SPY 386 Monitor v0.1
permalink: /software/pcx86/util/other/spy/0.1/
machines:
  - id: deskpro386
    type: pcx86
    config: /machines/pcx86/compaq/deskpro386/vga/4096kb/machine.xml
    autoMount:
      A:
        name: COMPAQ MS-DOS 3.31 (Disk 2)
      B:
        name: SPY 386 Monitor 0.1
    autoType: \r\rB:\rDIR\r\SPY\r
---

The machine below boots [COMPAQ MS-DOS 3.31](/software/pcx86/sys/dos/compaq/3.31/) from drive A and then runs
[SPY](https://github.com/jeffpar/spy) from drive B.

Use '?' to get a list of SPY commands and 'g' to continue execution.  The first thing SPY will execute is an INT 19h
instruction, which will trigger a reboot from drive A.  Load another disk into drive A before typing 'g' if you want to
boot a different disk while SPY is loaded.

The [SPY Repository](https://github.com/jeffpar/spy) has more information about its history and use.

{% include machine.html id="deskpro386" %}

### Directory of SPY 386 Monitor 0.1

     Volume in drive A is SPY
     Directory of A:\

    README   TXT       145   1-25-23   3:32p
    SPY      COM     54880   1-25-23   3:09p
    SPY      MAP     18871   1-25-23   3:09p
    SRC          <DIR>       1-25-23   3:20p
            4 file(s)      73896 bytes

     Directory of A:\SRC

    .            <DIR>       1-25-23   3:20p
    ..           <DIR>       1-25-23   3:20p
    386INIT  ASM     26675   1-25-23   3:09p
    386TRAP  ASM     24922   1-25-23   3:09p
    COMIO    ASM      3518   1-25-23   3:09p
    DOSDUMP  C        4557   1-25-23   3:09p
    H            <DIR>       1-25-23   3:20p
    INC          <DIR>       1-25-23   3:23p
    INTPARSE C       14699   1-25-23   3:09p
    LIB          <DIR>       1-25-23   3:20p
    MAIN     C         642   1-25-23   3:09p
    MAKEFILE          3300   1-25-23   3:09p
    MEMMGR   C        2025   1-25-23   3:09p
    REBOOT   ASM      2245   1-25-23   3:09p
    V86INT   ASM      3762   1-25-23   3:09p
    V86IO    ASM      7170   1-25-23   3:09p
    VIDMGR   C        3145   1-25-23   3:09p
    VIDSAVE  ASM     18497   1-25-23   3:09p
    X86DEBUG C      126948   1-25-23   3:09p
           19 file(s)     242105 bytes

     Directory of A:\SRC\H

    .            <DIR>       1-25-23   3:20p
    ..           <DIR>       1-25-23   3:20p
    386      H       11369   1-25-23   3:09p
    387      H         246   1-25-23   3:09p
    ALL      H         350   1-25-23   3:09p
    BIOS     H       14420   1-25-23   3:09p
    CMOS     H        2391   1-25-23   3:09p
    COM      H        1335   1-25-23   3:09p
    DEBUG    H        1191   1-25-23   3:09p
    DISK     H        5644   1-25-23   3:09p
    DOS      H       25261   1-25-23   3:09p
    EMS      H         378   1-25-23   3:09p
    GLOBALS  H        3114   1-25-23   3:09p
    KBD      H        5776   1-25-23   3:09p
    LIB      H        4067   1-25-23   3:09p
    PARSE    H        3292   1-25-23   3:09p
    PIC      H        3920   1-25-23   3:09p
    SYM      H        2270   1-25-23   3:09p
    TIMER    H         680   1-25-23   3:09p
    TYPES    H        2238   1-25-23   3:09p
    VIDEO    H       19386   1-25-23   3:09p
    X86      H       33048   1-25-23   3:09p
           22 file(s)     140376 bytes

     Directory of A:\SRC\INC

    .            <DIR>       1-25-23   3:23p
    ..           <DIR>       1-25-23   3:23p
    386      INC      5617   1-25-23   3:09p
    387      INC        52   1-25-23   3:09p
    ALL      INC       198   1-25-23   3:09p
    BIOS     INC      6466   1-25-23   3:09p
    CMOS     INC      1007   1-25-23   3:09p
    COM      INC       468   1-25-23   3:09p
    DEBUG    INC       792   1-25-23   3:09p
    DISK     INC      2478   1-25-23   3:09p
    DOS      INC     15546   1-25-23   3:09p
    EMS      INC       241   1-25-23   3:09p
    GLOBALS  INC      1193   1-25-23   3:09p
    KBD      INC      2754   1-25-23   3:09p
    LIB      INC        89   1-25-23   3:09p
    PIC      INC      3137   1-25-23   3:09p
    TIMER    INC       200   1-25-23   3:09p
    TYPES    INC       306   1-25-23   3:09p
    VIDEO    INC      9254   1-25-23   3:09p
    X86      INC     14825   1-25-23   3:09p
           20 file(s)      64623 bytes

     Directory of A:\SRC\LIB

    .            <DIR>       1-25-23   3:20p
    ..           <DIR>       1-25-23   3:20p
    GETS     C        4611   1-25-23   3:09p
    PRINTF   C        6975   1-25-23   3:09p
    SPRINTF  C        5980   1-25-23   3:09p
    STRING   C        7824   1-25-23   3:09p
            6 file(s)      25390 bytes

    Total files listed:
           71 file(s)     546390 bytes
                          648192 bytes free
