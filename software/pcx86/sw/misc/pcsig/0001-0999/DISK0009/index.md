---
layout: page
title: "PC-SIG Library Disk #9"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0009/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0009"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

## Information about "SQUISH"

    This disk is half BASIC subprograms and the rest are DOS file-handling
    programs.  The BASIC programs are all modules to be used in other
    programs for both programming ease and consistency.  These are nice,
    reuseable general purpose modules, like NUMVERT.BAS which displays
    numbers in ASCII, dec, oct, hex and binary.
    
    The other programs help with day to day computer activities.  LOOK and
    FIND search memory for certain bytes and strings.  SQUISH saves space
    by removing unwanted extra bytes from BASIC programs.   Other goodies
    include an autostart device, programs to shift you from monochrome to
    color graphics and back, and even a miniature modem package with file
    transfer capacity (MDM7I).
    
    System Requirements: 64K, one disk drive and monochrome display.
    
    How to Start: Consult the .DOC and README files for directions and
    documentation.  To run the BASIC programs, consult the directions in
    GETTING STARTED for your configuration.  To run a program with the
    suffix .COM or .EXE, just type its name, i.e., for FF.BAT, type FF and
    press <ENTER>.  LOAD (filename).BAS and then type RUN to run the
    programs.
    
    File Descriptions:
    
    UPDATE   BAT  Program to copy updated BASIC programs
    PAYMENT  BAS  Computes payment for a fully amortized loan
    OPKEYS   BAS  Programs the Function Keys for BASIC programming
    AUTOEXEC BAT  Boots up BASICA and AUTOST from power ON Startup
    MDM7     DOC  This describes how the modem program is to be used
    REAL$    BAS  Displays and prints a table of Real Estate Appreciation
    STARTUP  BAT  Transfers DOS and BASICA from DOS Disk in B to Disk in A
    2COLOR   COM  Transfers to Color Graphics Adapter and Monitor from DOS
    !        BAT  Boots up BASICA and AUTOST from DOS
    ASCICHAR BAS  Display or Prints primary and alternate character sets
    PEEK     BAS  Peeks at a location in memory
    ASCII    BAS  A chart of ASCII Characters  (Decimal)
    NUMVERT  BAS  Displays numbers in ASCII, dec, oct, hex and binary
    LONGZONE BAS  Computes GMT (UCT) and local time for any longitude
    CRCK4    COM  This a file checksum program
    2MONO    SYS  Transfers to Monochrome Adapter and Monitor from BASICA
    MDMIBM   ASM  Part of MDM7I above
    2MONO    COM  Transfers to Monochrome Adaptor and Monitor from DOS
    TIME     BAS  Displays system date and time on the screen
    MODULO   BAS  Demonstrates Modulo Arithmetic
    Q        BAS  Returns to DOS with a clear screen and keys reset
    CHECKOUT BAS  Checks Serial and Parallel equipment & handshake
    AUTOST   BAS  Sets date and time, displays files and runs program
    WASH     DOC  This documents WASH.COM
    SQUISH   BAS  This program removes spaces, REM's and condenses lines
    SQUISH   DOC  Documentation for SQUISH program
    LOOK     COM  This is a memory byte search program
    WASH     COM  This is a disk maintenance program
    FIND     COM  This is a disk file string search program
    CRCK4    CPM  Part of CRCK4.COM
    MDM7I    COM  This is a MODEM and TERMINAL file transfer program
    MONOSET  BAS  Displays screen options for the monochrome monitor
    COLORSET BAS  Displays color options on a color monitor
    MENU     BAS  Runs AUTOST.BAS program
    AUTOINST BAS  Prints Autostart Program Instructions  (AUTOST.BAS)
    INDEX    DOC  This contains details on files on this disk
    DISKID   REV  Contains Disk ID Label and Year for AUTOST program
    MINIPROG BAS  A Skeleton BASIC program used to start a new program
    KEYSMP   BAS  Prints a Function Key OVERLAY for Multiplan programs
    2COLOR   SYS  Transfers to Color Graphics Adapt and Monitor from BASICA
    KEYSBAS  BAS  Programs Function keys for BASIC and prints OVERLAY
    AUTOPEEK BAS  Displays 10 locations of memory in dec or hex
    SYS      BAS  Returns to DOS with a clear screen and keys reset
    ACATALOG BAS  A catalog of the programs on this disk  (Items 1-31)

### Directory of PC-SIG Library Disk 0009

     Volume in drive A has no label
     Directory of A:\

    ACATALOG BAS      5120   1-23-83  11:09p
    ASCICHAR BAS      2432   1-21-83   4:24p
    ASCII    BAS       640   1-20-83   8:51p
    AUTOINST BAS      2048   1-23-83  11:21p
    AUTOPEEK BAS       896   1-20-83   9:41p
    AUTOST   BAS      6528   1-22-83   2:11p
    CHECKOUT BAS      6656   1-20-83   8:02p
    COLORSET BAS      2176   1-21-83  11:00p
    KEYSBAS  BAS      2944   1-20-83   8:38p
    KEYSMP   BAS      2560   1-20-83   8:36p
    LONGZONE BAS      2944   1-21-83  11:10p
    MENU     BAS       128  12-19-82   6:02p
    MINIPROG BAS      1280   1-22-83   1:48p
    MODULO   BAS       512   1-21-83  11:15p
    MONOSET  BAS      1664   1-20-83  10:12p
    NUMVERT  BAS      1152   1-20-83   9:27p
    OPKEYS   BAS       512   1-21-83   2:54p
    PAYMENT  BAS      3200   1-21-83  10:17p
    PEEK     BAS       896   1-21-83  11:13p
    Q        BAS       384   1-21-83   3:43p
    REAL$    BAS      1664   1-21-83   4:01p
    SYS      BAS       384   1-21-83   3:11p
    TIME     BAS       640   1-20-83   9:17p
    !        BAT        16   1-20-83  11:43p
    AUTOEXEC BAT        16   1-20-83  11:43p
    STARTUP  BAT        62   1-05-83   9:15p
    UPDATE   BAT        18   1-21-83  10:32a
    2COLOR   COM        22
    2MONO    COM        22
    DISKID   REV       128   1-23-83  11:41p
    2COLOR   SYS       256   1-16-83   5:24p
    2MONO    SYS       256   1-16-83   5:25p
    INDEX    DOC      6144  11-01-82   6:35p
    MDM7I    COM      7552  10-16-82   5:31a
    MDMIBM   ASM      4724  10-18-82   6:30p
    MDM7     DOC     12288  11-01-82   6:30p
    CRCK4    COM      1536  10-21-82   7:54p
    CRCK4    CPM      1408  11-01-82   6:37p
    LOOK     COM      1024  10-26-81
    FIND     COM       896  10-22-82   5:27p
    WASH     COM      3328  11-01-82   5:44p
    WASH     DOC     15872  11-01-82   5:53p
    SQUISH   BAS      6400   2-09-83  11:26a
    SQUISH   DOC      5566   2-09-83  11:52a
    CRC      TXT      2625  11-09-84   7:55a
           45 file(s)     117519 bytes
                           32768 bytes free
