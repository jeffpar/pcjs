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
        name: COMPAQ MS-DOS 3.31D (720K Disk 2)
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

     Volume in drive A is SPY01
     Directory of A:\

    README   TXT       142   1-26-23  11:18a
    SPY      COM     55136   1-26-23   2:30p
    SPY      MAP     18871   1-26-23   2:30p
    SRC          <DIR>       1-26-23   2:37p
            4 file(s)      74149 bytes

     Directory of A:\SRC

    .            <DIR>       1-26-23   2:37p
    ..           <DIR>       1-26-23   2:37p
    386INIT  ASM     26675   1-26-23   2:30p
    386TRAP  ASM     24922   1-26-23   2:30p
    COMIO    ASM      3518   1-26-23   2:30p
    DOSDUMP  C        4557   1-26-23   2:30p
    H            <DIR>       1-26-23   2:37p
    INC          <DIR>       1-26-23   2:37p
    INTPARSE C       14699   1-26-23   2:30p
    LIB          <DIR>       1-26-23   2:37p
    MAIN     C         696   1-26-23   2:37p
    MAKEFILE          3300   1-26-23   2:30p
    MEMMGR   C        2025   1-26-23   2:30p
    REBOOT   ASM      2245   1-26-23   2:30p
    V86INT   ASM      3762   1-26-23   2:30p
    V86IO    ASM      7170   1-26-23   2:30p
    VIDMGR   C        3159   1-26-23   2:30p
    VIDSAVE  ASM     18497   1-26-23   2:30p
    X86DEBUG C      126948   1-26-23   2:30p
           19 file(s)     242173 bytes

     Directory of A:\SRC\H

    .            <DIR>       1-26-23   2:37p
    ..           <DIR>       1-26-23   2:37p
    386      H       11369   1-26-23   2:30p
    387      H         246   1-26-23   2:30p
    ALL      H         350   1-26-23   2:30p
    BIOS     H       14420   1-26-23   2:30p
    CMOS     H        2391   1-26-23   2:30p
    COM      H        1335   1-26-23   2:30p
    DEBUG    H        1191   1-26-23   2:30p
    DISK     H        5644   1-26-23   2:30p
    DOS      H       25261   1-26-23   2:30p
    EMS      H         378   1-26-23   2:30p
    GLOBALS  H        3114   1-26-23   2:30p
    KBD      H        5776   1-26-23   2:30p
    LIB      H        4067   1-26-23   2:30p
    PARSE    H        3292   1-26-23   2:30p
    PIC      H        3920   1-26-23   2:30p
    SYM      H        2270   1-26-23   2:30p
    TIMER    H         680   1-26-23   2:30p
    TYPES    H        2238   1-26-23   2:30p
    VIDEO    H       19386   1-26-23   2:30p
    X86      H       33048   1-26-23   2:30p
           22 file(s)     140376 bytes

     Directory of A:\SRC\INC

    .            <DIR>       1-26-23   2:37p
    ..           <DIR>       1-26-23   2:37p
    386      INC      5617   1-26-23   2:30p
    387      INC        52   1-26-23   2:30p
    ALL      INC       198   1-26-23   2:30p
    BIOS     INC      6466   1-26-23   2:30p
    CMOS     INC      1007   1-26-23   2:30p
    COM      INC       468   1-26-23   2:30p
    DEBUG    INC       792   1-26-23   2:30p
    DISK     INC      2478   1-26-23   2:30p
    DOS      INC     15546   1-26-23   2:30p
    EMS      INC       241   1-26-23   2:30p
    GLOBALS  INC      1193   1-26-23   2:30p
    KBD      INC      2754   1-26-23   2:30p
    LIB      INC        89   1-26-23   2:30p
    PIC      INC      3137   1-26-23   2:30p
    TIMER    INC       200   1-26-23   2:30p
    TYPES    INC       306   1-26-23   2:30p
    VIDEO    INC      9254   1-26-23   2:30p
    X86      INC     14825   1-26-23   2:30p
           20 file(s)      64623 bytes

     Directory of A:\SRC\LIB

    .            <DIR>       1-26-23   2:37p
    ..           <DIR>       1-26-23   2:37p
    GETS     C        4611   1-26-23   2:30p
    PRINTF   C        6975   1-26-23   2:30p
    SPRINTF  C        5980   1-26-23   2:30p
    STRING   C        7824   1-26-23   2:30p
            6 file(s)      25390 bytes

    Total files listed:
           71 file(s)     546711 bytes
                          648192 bytes free
