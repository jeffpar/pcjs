---
layout: page
title: "PC-SIG Library Disk #70"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0070/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsig0/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0070"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

## Information about "DISKCAT"

    DISKCAT and DC-SORT: These two programs combine for a disk cataloging
    and sorting/pring system for keeping track of your disk files.  It
    works with DOS 1.1 format disks only.
    
    PAGESKIP : This utility simply skips to the top of form from DOS 2.0,
    so that you do not have to push buttons on your printer.  Just key
    "PAGE" and hit enter to run, if the utility is on a diskette in your
    default drive.  NOTE: it requires an EPSON MX or FX compatible.
    
    SMALLPRT and USMALLPRT: These install (and uninstall) a utility that
    skips you to the top of form then sets the printer to compressed
    double-strike mode.  While slow, it saves paper and makes printouts
    more readable and xerox-able, when printing documentation like this.
    
    How to Start: Consult the .TXT and .DOC files for directions.
    The BASIC programs require GWBASIC; the .EXE and .COM programs
    can be run directly from DOS.
    
    File Descriptions:
    
    PAGE     BAT  Sends formfeed to printer
    PAGESKIP DOC  Documentation for PAGESKIP.BAS
    PAGES    KIP  Formfeed character
    UNSMALLP BAT  Batch file to reset Epson in normal print mode
    SMALLPRT DOC  Notes for using SMALLPRT.BAT
    SMALLPRT BAT  Batch file to put Epson in condensed, double-strike mode
    SMALLPR  INT  Commands to put Epson in condensed, double-strike mode
    UNSMALLP DOC  Notes for using UNSMALLP.BAT
    UNSMALLP RNT  Commands to put Epson printer back to normal mode
    DISKCAT  BAS  Disk cataloging program
    *        EXE  Compiled version of DISKCAT BASIC files (2 files
    DISKCAT  DOC  Documentation for DISKCAT.BAS
    VPRINT   COM  Redirects printer output to file
    DC-SORT  BAS  Sort program for DISKCAT
    VPRINT   ASM  Assembly language source for VPRINT.COM
    DIRMANIP EXE  Directory manipulation program
    VPRINT   DOC  Documentation for VPRINT.COM
    VIRTUAL  PRN  Printer utility

### Directory of PC-SIG Library Disk 0070

     Volume in drive A has no label
     Directory of A:\

    PAGE     BAT        68   7-28-83   2:29a
    PAGES    KIP         4   7-28-83   2:30a
    PAGESKIP DOC       564   7-28-83   2:30a
    SMALLPR  INT        11   7-28-83   2:30a
    SMALLPRT BAT        80   7-28-83   2:21a
    SMALLPRT DOC       664   7-28-83   2:26a
    UNSMALLP BAT       124   7-28-83   2:23a
    UNSMALLP DOC       602   7-28-83   2:31a
    UNSMALLP RNT        11   7-28-83   2:31a
    DISKCAT  BAS     21376   7-27-83
    DISKCAT  EXE     44672   7-27-83
    DISKCAT  DOC      5373   7-27-83
    DC-SORT  BAS      7040   7-27-83
    DC-SORT  EXE     27136   7-27-83
    VPRINT   COM      1408   2-13-83  12:46a
    VPRINT   ASM      8065   2-13-83  12:15a
    VPRINT   DOC      1742   2-05-83  12:14a
    DIRMANIP EXE      9728   6-06-82
    VIRTUAL  PRN       512   8-28-83  12:33p
    CRC      TXT      1451  11-09-84  11:31a
    CRCK4    COM      1536  10-21-82   7:54p
           21 file(s)     132167 bytes
                           22528 bytes free
