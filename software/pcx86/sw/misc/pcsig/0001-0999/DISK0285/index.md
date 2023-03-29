---
layout: page
title: "PC-SIG Library Disk #285"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0285/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsig0/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0285"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

## Information about "WIZARD SCREEN"

    The WHIZZARD Screen I/O Routines are designed to allow maximum
    performance on the IBM PC.  They can be called from BASIC to increase
    the speed at which text goes to the screen.  Some of the routines will
    NOT work properly on non-IBM PCs.  In particular, the pieces that
    increase print speed for the BASIC Interpreter (See Item 3, below)
    will not operate properly with non-IBM versions of BASIC.  Try the
    software.  If it works on your configuration, great.  If not, the
    source code is on the diskette.
    
    The software on this diskette can be divided:
    
    (1)  WHIZZARD Screen I/O Subroutines. These can be called from BASIC
    to increase the speed at which text gets to the screen.
    (2)  A rational approach to calling assembly routines in BASIC code.
    This approach allows one source version for both interpreter and
    compiler input. The example uses Whizzard Screen I/O Subroutines,
    but any useful assembly routines can be added.
    (3)  Software to accelerate the PRINT statement for interpreted BASIC
    WITHOUT changing the BASIC source code.
    (4)  Software to accelerate the PRINT statement for compiled BASIC
    that uses BASRUN.EXE.  Source code is NOT changed.
    (5)  Software to accelerate the PRINT statement for BASIC compiled /O.
    Source code is NOT changed.
    (6)  Software to demonstrate BASPRINT, COMPRINT, PRSLASHO and ASMBASIC
    (7)  Patch to DOS 2.0  DEBUG  TRACE command to prevent collision between
    external interrupts (like the timer) and the TRACE command
    (8)  Software to allow editing or printing of the source and text files
    shown above despite the presence of tab characters
    
    How to Start: Consult the .DOC and .TXT files for directions and
    documentation.  To run the BASIC programs, consult the directions in
    GETTING STARTED for your configuration.
    
    Suggested Registration:  $5.00
    
    File Descriptions:
    
    XREP     ASM  Repeat some character along the x axis
    YREP     ASM  Repeat some character down the y axis
    BASPRINT ASM  Source to primary module
    PRSLASHO ASM  Source to primary module
    COMPRINT ASM  Source to primary module
    ASMBASIC ASM  Source to primary module
    ZPRINT   ASM  Print a string using the color/attribute given
    SCRLUP   ASM  Scroll some portion of the screen up
    QPRINT   ASM  Quickly print a string at the current location
    CLREOS   ASM  Clear from the current position to the end of the screen
    CLREOL   ASM  Clear from the current position to the end of the line
    BANDDEMO BAS  Source to graphic demo program showing the enhancement
    TIMEDEMO BAS  Source to timing program demonstrating improvement
    DETAB    BAS  Interpreted BASIC program to remove tabs
    SCRLDN   ASM  Scroll some portion of the screen down
    LONGDEMO BAT  Demonstrates all three modules and QPRINT from ASM BAS
    SUBDEMO  BAS  Interpreted BASIC program demonstrating ASMBASIC
    PRSLASHO EXE  Module to be executed after booting the system
    EASYDEMO BAT  BAT file demonstrating compiled routines using PRSLOASHO
    SUBDEMO  EXE  Compiled program
    BANDDEMO EXE  BASIC graphic demo program compiled with the I/O option
    DEBUG20  FIX  PIPELINE input file which can be used to apply the
    ASMBASIC EXE  Sample executable linked with the I/O subroutines
    BASPRINT EXE  Module to be executed after booting the system
    COMPRINT EXE  Module to be executed after booting the system
    ???      OBJ  Object code for .BAS files of the same name (9 files)
    ASMBASIC TXT  How to call assembly routines in BASIC
    SCRNIO   TXT  Explanation of acceleratiing the PRINT statement
    DEBUGFIX TXT  Explanation of the patch to DOS 2.0 DEBUG  TRACE command
    README   TXT  Description of programs
    ??SLASHO BAT  Batch file to compile programs
    BANDNOO  EXE  Basic program
    TIMEPRIN FIL  Information on compiling times
    CLUBWARE DSC  Information on Clubware Software

### Directory of PC-SIG Library Disk 0285

     Volume in drive A has no label
     Directory of A:\

    ASMBASIC ASM      8104   6-18-84   1:21p
    ASMBASIC EXE      2432   7-12-84   6:00p
    ASMBASIC TXT      7647   7-11-84   9:12a
    BANDDEMO BAS     12682   7-06-84  10:06a
    BANDDEMO EXE     26981   7-12-84   5:27p
    BANDNOO  EXE      7965   7-12-84   5:35p
    BASPRINT ASM     19481   6-18-84   1:17p
    BASPRINT EXE      1920   6-18-84   1:23p
    CLREOL   ASM      2672   6-27-83   3:35a
    CLREOL   OBJ       111   6-27-83   3:40a
    CLREOS   ASM      3940   6-27-83   3:36a
    CLREOS   OBJ       169   6-27-83   3:40a
    CLUBWARE DSC      3757   7-07-84   3:11p
    COMPRINT ASM     19856   6-16-84  11:31a
    COMPRINT EXE      1920   6-16-84  11:41a
    DEBUG20  FIX       555   3-31-84  12:44a
    DEBUGFIX TXT     10885   7-11-84   9:10a
    DETAB    BAS       986   3-31-84   1:07a
    EASYDEMO BAT      1524   7-12-84   3:58p
    LONGDEMO BAT      2081   7-12-84   3:55p
    NOSLASHO BAT       580   6-29-84   9:07a
    PRSLASHO ASM     23440   6-26-84   9:08a
    PRSLASHO EXE      2176   6-26-84   9:10a
    QPRINT   ASM      6555   7-12-84   5:22p
    QPRINT   OBJ       304   7-12-84   5:22p
    README   TXT      5109   7-11-84  11:47a
    SCRLDN   ASM      1989   6-27-83   3:38a
    SCRLDN   OBJ       108   6-27-83   3:42a
    SCRLUP   ASM      1981   6-27-83   3:39a
    SCRLUP   OBJ       108   6-27-83   3:42a
    SCRNIO   TXT     10938   7-11-84   3:46p
    SLASHO   BAT       580   6-29-84   9:08a
    SUBDEMO  BAS     21504   6-26-84   4:50p
    SUBDEMO  EXE     37402   7-12-84   5:33p
    TIMEDEMO BAS     14295   6-26-84   5:47p
    TIMEPRIN FIL       896   6-26-84   5:58p
    XREP     ASM      6818   7-12-84   5:49p
    XREP     OBJ       303   7-12-84   5:53p
    YREP     ASM      6960   7-12-84   5:50p
    YREP     OBJ       310   7-12-84   5:53p
    ZPRINT   ASM      7060   7-12-84   5:50p
    ZPRINT   OBJ       307   7-12-84   5:52p
           42 file(s)     285391 bytes
                           18432 bytes free
