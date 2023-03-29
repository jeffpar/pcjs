---
layout: page
title: "PC-SIG Library Disk #372"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0372/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsig0/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0372"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

## Information about "BASIC AIDS NO 3"

    Here is a collection of BASIC extensions and subroutines which can make
    BASIC much more flexible.  Routines include some for enabling access to
    DOS command line parameters, joystick port watch program, read
    directory from within BASIC program, and a screen splitting routine.
    The programs are useful in incorporating I/O functions within your own
    BASIC programs.
    
    System Requirements: BASIC
    
    How to Start: To read the files with the DOC extensions, enter TYPE
    filename.DOC and press <ENTER>.  To run BASIC programs, refer to the
    GETTING STARTED section in this catalog.
    
    File Descriptions:
    
    BASPARAM BAS  Subroutine to access DOS command line parameters
    BASICSUB DOC  Documentation of 'CALL' statement
    DAYS     BAS  Program to calculate the days between two dates
    DAYOFWK  BAS  Calculates the day of the week given date
    CNTRL-BR BAS  Defeat BASIC file protection to list a file
    CMDLIN   DOC  A routine to enable the use of command line parameters
    CAPLOCK  BAS  Test and display the state of NUM/CAPS lock keys
    BASSUB   OBJ  Subroutine to access DOS directory commands
    BASSUB   ASC  Test program for BASSUB.OBJ
    DIR4     BAS  Demonstration file for DIR4.BIN
    SCRN-GET TWO  A BASIC program to demonstrate screen swapping
    SCRNSLGR DEM  A BASIC program that draws and swaps two screens
    SCROLL   DOC  Documentation for SCROLL.BAS
    SCROLL   BLD  BLOAD version of SCROLL.BAS
    SCROLL   BAS  Subroutine to be used with a BASIC program to perform
    SCRNDUMP BAS  Routine to print an image of the graphics screen
    SCRN-WK  BAS  Create and save screens
    SCRN-DOC      Documentation for the next three files
    SCRLDEMO BAS  Screen scrolling demo
    READ_DIR SUB  Read directory from within BASIC program
    READ_DIR BAS  Demo of READ_DIR.SUB
    QUICKC   BAS  Quick printing routine
    DISKHAND BIN  Get drive number from within BASIC
    DIR4     BIN  Binary directory routine
    GETSP1   EXE  Executable module for sample of getspace routine
    GETSP1   BAS  Sample of getspace routine
    GETSP    BAS  Basic source code to create BLOAD module of GETSPACE
    GETSP    ASM  Assembly code for GETSPACE routine
    FIND-DS  BAS  Finds the value of BASIC/BASICA'S data segment
    FCBREAD  BSV  Binary directory search routine
    FCBREAD  BAS  Example for FCBREAD.BSV routine
    DISKTYPE SUB  Get media type from within BASIC
    QSORT    BAS  Quicksort algorithm demonstration
    QPRINTC  BIN  same, but for compiled programs
    QPRINT   BIN  machine code for quick print routine
    QCLEAR   BIN  machine code for screen-clearing routine
    PRTSC    BAS  Routine to print the screen from a basic program
    PAK-DATE BAS  Subroutines can pack a 6 byte date into a 2 byte integer
    NUM2WORD BAS  Convert numbers to words
    JULIAN   DOC  Documentation for JULIAN.BAS
    JULIAN   BAS  Converts dates
    JOYSTIK  BAS  Program to watch the joystick ports
    INKEY2   BAS  Demo program like INKEY.BAS
    INKEY    BAS  Name/address data base program
    HEAPSORT DOC  Documentation for HEAPSORT.BAS
    HEAPSORT BAS  Demo of the HEAPSORT sorting algorithm
    GETSPACE DOC  Documentation for GETSPACE routine
    GETSPACE      Binary LOAD module created by program
    SHELSORT BAS  Shell sort routine
    SETMEM   BAS  Routine to set memory from BASIC
    SPLTSCRN BAS  Splits the screen at horizontal dividing line location
    SHORTSUB BAS  Collection of menu driven subroutines
    TIMER    BAS  Times invoked from the system timer to 1/100th a second
    UPCASE   BAS  Routine to change lowercase to uppercase
    TIMER    RTN  Routine for TIMER.BAS

### Directory of PC-SIG Library Disk 0372

     Volume in drive A has no label
     Directory of A:\

    FCBREAD  BAS      2560   4-19-85   8:35a
    FCBREAD  BSV       384   4-19-85   8:35a
    QCLEAR   BIN       256   4-19-85   8:35a
    QPRINT   BIN       128   4-19-85   8:35a
    QPRINTC  BIN       128   4-19-85   8:36a
    SCRLDEMO BAS      3200   4-19-85   8:36a
    SCROLL   BLD       128   4-19-85   8:36a
    SCROLL   DOC      5120   4-19-85   8:36a
    SPLTSCRN BAS      2816   4-19-85   8:36a
    BASPARAM BAS      1536   4-19-85   8:36a
    GETSP    ASM      3968   4-19-85   8:36a
    GETSP    BAS      2304   4-19-85   8:36a
    GETSP1   BAS      1024   4-19-85   8:37a
    GETSP1   EXE      2048   4-19-85   8:37a
    GETSPACE           256   4-19-85   8:37a
    GETSPACE DOC      1280   4-19-85   8:37a
    SCRN-DOC           256   4-19-85   8:37a
    SCRN-GET TWO      1536   4-19-85   8:37a
    SCRN-WK  BAS      2304   4-19-85   8:37a
    SCRNSLGR DEM      3584   4-19-85   8:37a
    SCROLL   BAS      6400   4-19-85   8:37a
    BASICSUB DOC      4096   4-19-85   8:38a
    FIND-DS  BAS       640   4-19-85   8:38a
    QUICKC   BAS      1280   4-19-85   8:38a
    TIMER    BAS      1280   4-19-85   8:38a
    TIMER    RTN       128   4-19-85   8:38a
    DISKTYPE SUB      1152   4-19-85   8:38a
    READ_DIR SUB      3072   4-19-85   8:38a
    DAYOFWK  BAS       768   4-19-85   8:38a
    READ_DIR BAS      3328   4-19-85   8:39a
    HEAPSORT BAS      1536   4-19-85   8:39a
    HEAPSORT DOC       128   4-19-85   8:39a
    JULIAN   BAS      4096   4-19-85   8:39a
    JULIAN   DOC       128   4-19-85   8:39a
    NUM2WORD BAS      3200   4-19-85   8:39a
    PRTSC    BAS       384   4-19-85   8:39a
    SHELSORT BAS       768   4-19-85   8:39a
    BASSUB   ASC      2816   4-19-85   8:40a
    BASSUB   OBJ       384   4-19-85   8:40a
    CMDLIN   DOC      6400   4-19-85   8:40a
    CAPLOCK  BAS      1024   4-19-85   8:40a
    DISKHAND BIN       128   4-19-85   8:40a
    PAK-DATE BAS      1920   4-19-85   8:40a
    CNTRL-BR BAS       640   4-19-85   8:40a
    QSORT    BAS      2816   4-19-85   8:40a
    JOYSTIK  BAS       512   4-19-85   8:41a
    SETMEM   BAS       768   4-19-85   8:41a
    DAYS     BAS      3584   4-19-85   8:41a
    SHORTSUB BAS      9472   4-19-85   8:41a
    INKEY    BAS      5504   4-19-85   8:41a
    INKEY2   BAS      8192   4-19-85   8:41a
    DIR4     BAS      2304   4-19-85   8:41a
    DIR4     BIN       640   4-19-85   8:42a
    SCRNDUMP BAS      2176   4-19-85   8:42a
    UPCASE   BAS       768   4-19-85   8:42a
    FILES372 TXT      3372   7-08-85   2:36p
           56 file(s)     120620 bytes
                           28160 bytes free
