---
layout: page
title: "PC-SIG Library Disk #216"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0216/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsig0/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0216"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

## Information about "C UTILITIES NO 2"

    This hard working, time-saving set of utilities and functions for the C
    programmer includes many screen-handling routines to draw boxes, clear
    lines, move the cursor, etc.  Some DOS interfaces let you access DOS
    time (to hundredths), convert date formats, interface with BIOS, and
    more.  If you'd like some help with your own programming projects, or
    only want to investigate how others have done the job, be sure to check
    out this one!
    File Descriptions:
    
    README   DOC  Notes about programs on this disk.
    READS    C    Reads string from stdin.
    WEEKDAY  C    Gives the day of week a given Gregorian date.
    SCRATT   C    Toggles screen attributes (ie BOLD, blink, reverse video).
    SCRINIT  C    Initializes screen and keyboard arrays.
    JTOJ     C    Returns Julian day from date in form (yddd).
    DOSDATE  ASM  Returns DOS month, day, year as integers.
    JTOG     C    Function to convert Julian date to Gregorian date.
    ELINE    C    Function to erase line of screen.
    CHOSIT   C    Displays menu, prompt for a response and validate.
    SCONTROL H    Header file used by screen and keyboard control library.
    FRAME    C    Function to draw box given two corners.
    CURSOR   C    Function to move cursor to a specific r,c position.
    GTOJ     C    Converts Gregorian date to Julian date.
    CVTDATE  C    Unpacks Gregorian date (1/1/84) to (01/01/84).
    GETLINE  C    Read record from file to string.
    CURDOWN  C    Function to move curser down y relative lines.
    GETDATE  C    Gets date in string form MM/DD/YY.
    GETTIME  C    Gets time in form HH:MM:SS  (24 hour clock).
    DOSTIME  ASM  Gives DOS time in hours, minutes, seconds, 1/100 seconds.
    ESCREEN  C    Function to erase line from screen.
    CURUP    C    Mover cursor up y lines.
    PAUSE    C    Pauses a program for period of time.
    CURBACK  C    Move cursor back x columns.
    CURFOR   C    Move cursor forward x columns.
    BIOSIO   ASM  Assembly routines which interface directly with BIOS.
    READC    C    Function to read string from stdin.
    WRITES   C    Function to write string to stdout.
    WRITEC   C    Function to write character to screen using DOS function.
    COMM     MNU  Menu for communications program.
    MENCON   C    Function to open menu file and display it on screen.
    ???      BAT  Batch files to emulate UNIX commands (9 files).
    IBMTTY   C    Terminal emulation program with file upload & download.

### Directory of PC-SIG Library Disk 0216

     Volume in drive A has no label
     Directory of A:\

    BIOSIO   ASM     13287   6-25-84  11:33a
    CAT      BAT        74   1-27-84   1:30p
    CC       BAT       156   1-31-84  11:14a
    CHOSIT   C        1854   5-11-84   2:50p
    CL       BAT         6   1-27-84   8:42a
    COMM     MNU       533   5-17-84   9:41a
    CRC      TXT      2580  11-15-84   9:52a
    CRCK4    COM      1536  10-21-82   7:54p
    CURBACK  C        1425   4-05-84  11:37a
    CURDOWN  C        1425   4-05-84  11:44a
    CURFOR   C        1424   4-05-84  11:35a
    CURSOR   C        1572   4-05-84  11:32a
    CURUP    C        1423   4-05-84  11:41a
    CVTDATE  C        2238   4-05-84  11:08a
    DOSDATE  ASM      1232   5-16-84   1:50p
    DOSTIME  ASM      1516   5-16-84   2:27p
    ELINE    C        1764   4-05-84  11:51a
    ESCREEN  C        1767   4-05-84  11:48a
    FRAME    C        2363   5-11-84   2:15p
    GETDATE  C        1514   5-17-84   9:28a
    GETLINE  C        1384   1-01-80   1:39a
    GETTIME  C        1539   5-17-84   9:29a
    GTOJ     C        2037   4-05-84  11:11a
    IBMTTY   C       16064   6-25-84  12:47p
    JTOG     C        2603   1-01-80   1:45a
    JTOJ     C        1813   4-05-84  11:12a
    L        BAT        19  12-02-83  11:25a
    LD       BAT        72   1-27-84   3:22p
    LS       BAT        83   1-31-84  11:30a
    MENCON   C        7494   1-01-80   1:03a
    MV       BAT        15   1-01-80  12:08a
    PAUSE    C        1660   5-17-84  10:30a
    READC    C         785   6-25-84  12:01p
    README   DOC      2338   7-15-84  10:25a
    READS    C        1978   1-01-80   1:29a
    RM       BAT        72   1-30-84   1:33p
    SCONTROL H        1930   5-04-84   1:31p
    SCRATT   C        2520   5-04-84   1:51p
    SCRINIT  C         934   5-04-84   1:21p
    VI       BAT        11   1-26-84   2:00p
    WEEKDAY  C        1850   4-05-84  11:15a
    WRITEC   C         818   6-25-84  12:03p
    WRITES   C         944   6-25-84  12:02p
           43 file(s)      88652 bytes
                           60416 bytes free
