---
layout: page
title: "PC-SIG Library Disk #139"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0139/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0139"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

## Information about "SCREEN UTILITIES #2"

    Some nice routines for handling screen output, as well as other
    utilities.  The LORES program lets you design screens using the 160x100
    16-color mode of the CGA card.  Fun and colorful, there are both BASIC
    and compiled versions.  The PRINTXT1 routines are for Dbase II
    programmers (allows you to display long (>80 chars)text lines on
    screen.  Also included, the BAT200D program, and associated .BAT files,
    allow you to explore the many possibilities of batch files.
    
    How to Start: To run an EXE program simply type its name and
    press <ENTER>.  For instructions on ASM or 'C' listings, refer to
    your Assembler or 'C' language manuals.  For instructions on
    running BASIC programs, please refer to the GETTING STARTED
    section in this catalog.  CMD files are for use with dBASE II. To
    read DOC files simply enter TYPE filename.ext and press <ENTER>.
    
    Suggested Registration:   LORES $10.00 or $5.00 and a formatted
    diskette. This gets you the latest version of the program and demos, as
    well as printed documentation.
    
    File Descriptions:
    
    DIR201   EXE  Compiled version of above
    DIR201   BAS  Diskette cataloging program.  Very friendly!
    CHAROP   ASM  Used by DOSPATH.C.  Reads/sets switch char and device
    DOSPATH  C    Lattice c functions for DOS 2.0 command lines and paths
    LORES    DOC  Documentation for 160x100 graphics support package
    LORES    BAS  Does 160x100 16-color graphics
    PRINTXT1 DOC  Documentation for above
    PRINTXT1 CMD  dbase II command to print multiple text lines on screen
    NUSQ     COM  Assembly-coded version of unsqueeze program,super fast!
    LORES    USR  BASIC-callable 160x100 graphics functions
    LORES    EXE  Another 160x100 demo program
    LODEMO   BAS  Demo of 160x100 16-color graphics on IBM PC
    LORES    OBJ  Assembled version of LORES.ASM
    LORES    ASM  Assembly language routines for 160x100 16-color graphics
    PRINTXT1 INC  Include routines for PRINTXT1.CMD
    READ     ME   Listing of included files
    ???      BAT  Screen and general purpose batch file utilities

### Directory of PC-SIG Library Disk 0139

     Volume in drive A has no label
     Directory of A:\

    ANSI     BAT       768   3-26-84   1:40p
    BAT200D  COM      9728   3-26-84   1:30p
    CHAROP   ASM      1024   3-28-84  12:39p
    CRC      TXT      1781  11-13-84   2:27p
    CRCK4    COM      1536  10-21-82   7:54p
    DIAL     BAT      1664   3-26-84   1:44p
    DIR201   BAS     21760   3-28-84  11:53a
    DIR201   EXE     45568   3-28-84  12:02p
    DOSPATH  C        8320   3-28-84  12:41p
    EDIT     BAT       896   3-26-84   1:43p
    FORMAT   BAT      3712   3-26-84   1:39p
    FSKEL    BAT      2048   3-26-84   1:38p
    LODEMO   BAS     16384   3-28-84  12:09p
    LORES    ASM     30208   3-28-84  11:36a
    LORES    BAS     16384   3-28-84  11:30a
    LORES    DOC     20864   3-28-84  11:26a
    LORES    EXE      7552   3-28-84  12:21p
    LORES    OBJ      3456   3-28-84  11:38a
    LORES    USR      2432   3-28-84  11:37a
    MENU     BAT      6528   3-26-84   1:37p
    NUSQ     COM      3584   3-28-84  12:06p
    PRINTXT1 CMD      6016   3-22-84   4:03p
    PRINTXT1 DOC      9344   3-22-84   4:03p
    PRINTXT1 INC      3584   3-22-84   4:03p
    READ     ME       1868   3-28-84   1:36p
    TELE     BAT       896   3-26-84   1:46p
    UTILITY  BAT     10112   3-26-84   1:35p
    VCOPY    BAT      2688   3-26-84   1:43p
           28 file(s)     240705 bytes
                           70656 bytes free
