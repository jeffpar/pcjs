---
layout: page
title: "PC-SIG Library Disk #51"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0051/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsig0/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0051"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

## Information about "HYPERDRIVE"

    There are two different configurations of the HYPERDRIVE RAM-disk
    program on this disk, as well as the source code to let users generate
    their own configurations.  Note, however, that the documentation states
    that you must reset DIP switches on your system board to use this
    program.  Also included is an interesting BASIC program to figure
    future.  And for all you heretics who still believe that computers can
    be fun, too, a version of the game GOMOKU is included.  Translated into
    Pascal from HP Basic, this is guaranteed to keep you up late for a few
    nights.
    
    System Requirements:  Some programs require BASIC.
    
    How to Start: To run an EXE program simply type its name and press
    <ENTER>.  For instructions on running BASIC programs, please refer to
    the GETTING STARTED section in this catalog.  For instructions on ASM
    listings, refer to your Assembler manual.  To read DOC files simply
    enter TYPE filename.ext and press <ENTER>.
    
    File Descriptions:
    
    FOUR     EXE  Game - get four in a row
    FUTRDATE BAS  Determines date - x days, months, years from now
    GOMOKU   DOC  Documentation for GOMOKU.EXE
    FUTRDATE DOC  Documentation for FUTRDATE.BAS
    GOMOKU   EXE  Game - simular to tic-tac-toe but played on 20x20 board
    HDD512   EXE  RAM disk program for 512K of memory
    GOMOKU   PAS  Source code for game of GOMOKU
    PCGLOBE  BAS  Draws globe
    INTERUPT MAC  Macro assembly language interrupt routine
    HYPERDRV DOC  Documentation for RAM disk program
    HDS320   EXE  RAM disk program for 320K of memory
    RAMDISK  ASM  Source code for RAM disk program
    TMDAY    BAS  Digital clock

### Directory of PC-SIG Library Disk 0051

     Volume in drive A has no label
     Directory of A:\

    CRC      TXT      1169  11-09-84  10:48a
    CRCK4    COM      1536  10-21-82   7:54p
    FOUR     EXE     24704   1-01-80
    FUTRDATE BAS      3584   2-25-83   7:57p
    FUTRDATE DOC      3571   2-25-83   8:15p
    GOMOKU   DOC      1979  12-02-82
    GOMOKU   EXE     32128  10-08-82
    GOMOKU   PAS     10731  10-08-82
    HDD512   EXE      1152   2-02-83   7:24p
    HDS320   EXE      1152   2-02-83  10:22p
    HYPERDRV DOC     12032   2-04-83  11:23p
    INTERUPT MAC      3865  11-13-82   8:06p
    PCGLOBE  BAS      5376   3-02-83   6:51p
    RAMDISK  ASM     10368   2-02-83   7:20p
    TMDAY    BAS      6400   2-03-83  10:59p
           15 file(s)     119747 bytes
                           37376 bytes free
