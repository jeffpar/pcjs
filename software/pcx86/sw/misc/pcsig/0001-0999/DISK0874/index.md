---
layout: page
title: "PC-SIG Diskette Library (Disk #874)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0874/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0874"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ZZAP AND OTHER UTILITIES FOR PROGRAMMERS"

    ZZAP is a disk editor that can read, modify and write any sector on the
    disk, as well as any file by filename upon the disk -- along the same
    lines as Norton's Utilities.
    
    A 4,096-byte buffer is used to hold the information to be written to or
    read from the disk.  Editing can be done on a byte-by-byte basis by
    entering the data in hex, decimal, octal or ASCII format.  You can also
    add, copy, or exchange the data of the current buffer.
    
    Programmers -- VECTOR inspects the interrupt vector table of your
    system and displays the vectors in human-readable form with some brief
    comments describing each interrupt.  This is useful because some
    interrupts are not standardized and are difficult to interpret.
    
    Attention, programmers -- 400 inspects the BIOS communications area and
    the DOS communications area and displays them in human-readable form.
    It also displays some brief comments describing each byte of the
    communications areas.
    
    RPN is a Reverse Polish Notation calculator based on a fully-visible
    stack, especially useful to busy programmers and computer specialists.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DEMO.DOC

{% raw %}
```

     The demo version that you have will show you the capabilities of
     the ZZAP program.  Because it is a demo version, there have been
     some limitations installed.  These limitations are:

     1 - NO WRITE OPERATIONS CAN BE DONE TO THE DISK IN EITHER SECTOR
         OR FILE MODES;

     If your requirements are such that you need the full potential of
     ZZAP, the modest price of $30.00 will give you a full operating
     version for the PC, XT as well as an optimized version just for
     the AT (80286 code) systems!  Please see the ORDER.DOC file for
     additional information.

     Please enjoy your demo version.  I hope you will find it to be of
     use in your present as well as future requirements!


```
{% endraw %}

## FILES.DOC

{% raw %}
```

     Files included with the ZZAP demo package:


     PROGRAM NAME   DESCRIPTION
     ------------   ------------------------------------------------------

     ZZAPDEMO.EXE - DEMO VERSION OF ZZAP FOR PC, XT, AT
         DEMO.DOC - LIMITATIONS OF THE DEMO VERSION
        ORDER.DOC - ORDER FORM/INFO TO OBTAIN FULL OPERATING VERSIONS
     TESTFILE.ZAP - TEST FILE TO PLAY WITH
         QCMD.DOC - QUICK LIST OF ZZAP COMMANDS
      VERSION.DOC - VERSION NUMBERS AND FIX-UP HISTORY
        FILES.DOC - LIST OF FILES (THIS FILE)
       README.DOC - HOW TO START AND ANY LATEST INFO
       MANUAL     - OPERATION DETAILS OF ZZAPDEMO (VERSION 4)
        ZZAP3.EXE - FULLY OPERATIONAL ZZAP VERSION 3
      MANUAL3     - OPERATION DETAILS OF VERSION 3 OF ZZAP
    



     The demo package may be freely distributed without restriction!

y
```
{% endraw %}

## FILES874.TXT

{% raw %}
```
Disk No  874
Program Title:  ZZAP version 4.0, Vector, 400 and RPN
PC-SIG version 1
 
    ZZAP is a disk editor that can read, modify, and write any sector on
the disk, as well as any file by filename upon the disk. A 4096 byte buffer
is used to hold the information to be written onto or read from the disk.
Editing can be done on a byte-by-byte basis by entering the data in HEX,
DECIMAL, OCTAL or ASCII format. You can also copy, exchange, or fill the
data of the current buffer. A window on the left half of the home screen
displays 256 bytes of the buffer at a time in all four input types. A demo
version of the next upgrade of ZZAP is included on this disk.
 
    VECTOR inspects the interrupt vector table and displays the interrupt
vectors in human readable form. VECTOR also displays some brief comments
describing each interrupt. Some interrupts are not standardized and are
difficult to interpret. The program "400" inspects the BIOS communications
area and the DOS communications area and displays these areas in human
readable form. "400" also displays some brief comments describing each byte
of the communications areas. RPN is a Reverse Polish notation calculator
based on a fully-visible stack.
 
Usage: Disk Editor
 
System Requirements: 360K memory and one disk drive.
 
How to Start: Type: ZZAPDEMO (press enter). Type: VECTOR (press enter),
to start VECTOR. Type: 400 (press enter) to start 400. Type: RPN (press
enter) to start RPN.
 
Suggested Registration: $30 for ZZAP, $10 for VECTOR, $5 for 400, $10
for RPN.
 
File Descriptions:
 
ZZAPDEMO EXE  Demo version of ZZAP.
README   DOC  How to start program.
VERSION  DOC  Version history.
TESTFILE ZAP  Test file for ZZAP.
ORDER    DOC  Order form.
DEMO     DOC  Limitations of the demo version.
QCMD     DOC  List of ZZAP commands.
FILES    DOC  List of files.
MANUAL        Documentation for ZZAPDEMO (version 4).
ZZAP3    EXE  ZZAP, version 3.
MANUAL3       Documentation for ZZAP, version 3.
VECTOR   COM  VECTOR main program.
400      COM  400, main program.
RPN      COM  RPN, main program.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## ORDER.DOC

{% raw %}
```
_______________________________________________________________________________

     WESTCOMP
     245 E. FOOTHILL BLVD., SUITE 304
     UPLAND, CA  91786
_______________________________________________________________________________

     PLEASE RUSH ME THE FULLY OPERATIONAL ZZAP PACKAGE, INCLUDING THE
     FULLY OPERATIONAL FILES:


     1 - ZZAP.EXE       (FULL-FUNCTION ZZAP FOR PC,XT,AT)

     2 - ZZAPA.EXE      (FULL-FUNCTION ZZAP FOR AT ONLY - 80286 CODE!)

_______________________________________________________________________________

     I UNDERSTAND THE FULL-FUNCTION ZZAP PROGRAMS ARE COPYRIGHTED AND I WILL
     NOT DISTRIBUTE THEM.

     (COPYRIGHT REGISTRATION DATA AVAILABLE UPON REQUEST)
     (ZZAPDEMO AND .DOC FILES MAY BE DISTRIBUTED FREELY)
_______________________________________________________________________________

     ENCLOSED IS MY CHECK OR MONEY ORDER FOR $30.00  (NO PURCHASE ORDERS!)
     (US DOLLORS, DRAWN ON A US BANK!)

     PLEASE RUSH TO:

               NAME:__________________________________________________


          (COMPANY):__________________________________________________


            ADDRESS:__________________________________________________


           CITY, ST:__________________________________________________


           ZIP CODE:______________(ORDERS WILL BE RETURNED WITHOUT ZIP)


              PHONE:_________________________(OPTIONAL)



     >>>>>>>>>>>>>>>>      PLEASE PRINT CAREFULLY!!!      <<<<<<<<<<<<<<<

     APPROX. SHIPPING TIME IS 10 WORK DAYS.  IF YOU ARE IN A SUPER RUSH,
     MAKE PAYMENT BY CERTIFIED CHECK.  THIS WILL TRIM ABOUT 6 DAYS OFF
     THE AVERAGE SHIPPING TIME.
```
{% endraw %}

## QCMD.DOC

{% raw %}
```

BELOW IS A LIST OF THE MAIN COMMANDS OF ZZAP THAT WILL PROMPT YOU FOR
FOR ADDITIONAL DIRECTION.  WHEN ANY OF THE MENUS FOR SUCH SELECTION APPEAR,
DEPRESSING THE ESC KEY WILL CANCEL THAT OPTION.  YOU MAY MAKE A SELECTION
BY DEPRESSING THE FIRST LETTER OF THE OPTION YOU WANT (UPPER OR lower) OR
BY MOVING THE SELECTION BAR WITH THE CURSOR KEYS OR SPACE BAR.  WHEN THE
SELECTION BAR IS OVER THE OPTION YOU WANT, JUST DEPRESS THE ENTER KEY.


LEVEL__________   KEY____   PURPOSE__________________________________________
|                 |         |
TOP LEVEL         ESC       REMOVE THE CURRENT ACTIVE VIEW WINDOW (IF ANY)
TOP LEVEL         ALT-G     TOGGLE GRAPHICS MODE
TOP LEVEL         SPACE     DISPLAY THE MAIN ZZAP OPTIONS
TOP LEVEL         B         ENTER THE BUFFER OPERATIONS MENU
TOP LEVEL         C         TOGGLE BETWEEN MEMORY AND BUFFER FOR WINDOW VIEW
TOP LEVEL         E         EDIT THE BUFFER IN THE CURRENT MODE
TOP LEVEL         P         ENTER THE PAGE OPERATIONS        (DEMO LIMITED!)
TOP LEVEL         R         READ FILE/SECTOR INTO THE BUFFER (DEMO LIMITED!)
TOP LEVEL         V         OPEN A WINDOW VIEW
TOP LEVEL         W         WRITE FILE/SECTOR FROM BUFFER    (DEMO LIMITED!)
TOP LEVEL         M         MOVE BETWEEN BUFFER <--> MEMORY
TOP LEVEL         Z         EXIT FROM ZZAP (USE WITH CARE!)
TOP LEVEL         F1        MAKE LEFT WINDOW VIEW ACTIVE IF BOTH ARE UP
TOP LEVEL         F2        MAKE RIGHT WINDOW VIEW ACTIVE IF BOTH ARE UP
_____________________________________________________________________________

LEVEL__________   KEY____   PURPOSE__________________________________________
|                 |         |
B-BUFFER          ESC       RETURN TO THE TOP LEVEL
B-BUFFER          A         ADVANCE CURRENT WINDOW VIEW TO BYTE #
B-BUFFER          C         COPY A SECTION TO ANOTHER
B-BUFFER          E         EXCHANGE BYTES BETWEEN 2 AREAS
B-BUFFER          F         FILL A GIVEN RANGE WITH THE REQUESTED BYTE
B-BUFFER          S         SCAN THE BUFFER
B-BUFFER          M         FIND A MATCH (SEARCH)
B-BUFFER          N         CHANGE THE CURRENT WINDOW'S MODE
B-BUFFER          L         PERFORM A LOGICAL OPERATION WITHIN A RANGE
_____________________________________________________________________________

LEVEL__________   KEY____   PURPOSE__________________________________________
|                 |         |
R-READ INTO BUF   ESC       RETURN TO TOP LEVEL
R-READ INTO BUF   F         READ BY FILE ACCESS
R-READ INTO BUF   S         READ BY SECTOR ACCESS
_____________________________________________________________________________

LEVEL__________   KEY____   PURPOSE__________________________________________
|                 |         |
W-WRITE FROM BUF  ESC       RETURN TO TOP LEVEL
W-WRITE FROM BUF  F         WRITE INTO THE SELECTED FILE
W-WRITE FROM BUF  S         WRITE INTO THE SELECTED SECTORS
_____________________________________________________________________________

LEVEL__________   KEY____   PURPOSE__________________________________________
|                 |         |
M-MOVE BUF<>MEM   ESC       RETURN TO TOP LEVEL
M-MOVE BUF<>MEM   M         MOVE MEMORY INTO THE CURRENT BUFFER
M-MOVE BUF<>MEM   B         MOVE THE CURRENT BUFFER INTO MEMORY
_____________________________________________________________________________

```
{% endraw %}

## README.DOC

{% raw %}
```
_______________________________________________________________________________

     REQUIREMENTS:

     IBM-PC, XT, AT
     360K MEMORY (MAYBE MORE IS MEMORY RESIDENT PROGRAMS ARE IN YOUR SYSTEM)
     CGA OR EGA DISPAYS

     **** NOTE:  TEST ZZAPDEMO ON YOUR SYSTEM FIRST!  IF IT DISPLAYS ALRIGHT
                 THEN THERE SHOULD BE NO PROBLEMS.
_______________________________________________________________________________

     TO START ZZAPDEMO:

     IF YOU HAVE A COLOR MONITOR, JUST TYPE: ZZAPDEMO

     IF YOU HAVE A B/W MONITOR,   JUST TYPE: ZZAPDEMO B

_______________________________________________________________________________

     LATEST NOTES:

     NONE TO REPORT AT THIS TIME!










```
{% endraw %}

## VERSION.DOC

{% raw %}
```

     VERSION / FIXUP HISTORY FOR ZZAP


VERSION     DATE    PURPOSE
_______   ________  ______________________________________________________

 V4.0     07/08/87  TOTAL RE-DO OF ZZAP, EXPANDED COMMANDS, WINDOWS

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0874

     Volume in drive A has no label
     Directory of A:\

    ZZAPDEMO EXE     60385   8-15-87   2:11p
    README   DOC       746   8-01-87   6:46p
    VERSION  DOC       222   7-30-87  11:52a
    TESTFILE ZAP       256   7-31-87   8:32p
    ORDER    DOC      1716   8-15-87   6:39p
    DEMO     DOC       749   8-15-87   3:25p
    QCMD     DOC      3378   8-01-87  11:14a
    FILES    DOC       860   8-25-87   8:50a
    MANUAL           37931   8-04-87   8:01p
    ZZAP3    EXE     21681  12-31-85   1:17a
    MANUAL3           4811   8-26-87   2:44p
    -------- ---         5  11-25-87   4:12p
    VECTOR   COM     25240   5-09-87   8:33p
    400      COM     30696   5-09-87   8:33p
    RPN      COM     36694   5-09-87   7:58p
    FILES874 TXT      2226  12-01-87   2:44p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1079  11-30-87  10:20a
           18 file(s)     228713 bytes
                           83968 bytes free
