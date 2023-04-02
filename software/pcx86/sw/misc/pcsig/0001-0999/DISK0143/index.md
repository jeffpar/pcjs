---
layout: page
title: "PC-SIG Library Disk #143"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0143/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0143"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

## Information about "PROGRAMERS UTILITIES #7"

    This disk contains many different kinds and flavors of utilities.  CMP
    compares files (either ASCII or binary) of different lengths and
    reports differences, good for archiving or updating text files. COPYFLD
    is a dBASE II tool to cut and paste from different dBASE files.  D and
    PC-ZAP both work on individual disk sectors, tracks, and sides for low
    level disk data manipulation and display.  RUSQ performs the inverse
    function of SQ, whichs squeezes files, but it does it in a different
    way than the public domain version of UNSQ, helpful if UNSQ doesnt
    work.  Lastly, SCRIPT is a XTALK utility used to set up a menu driven
    environment within XTALK.
    
    System Requirements:  Some programs require BASIC.
    
    How to Start: Enter PRINT *.DOC at the DOS prompt (A:), the
    instructions for running programs are in their respective text files.
    
    File Descriptions:
    
    COPYFLD  DOC  Documentation for COPYFLD.PRG
    COPYFLD  PRG  dBASE II program to copy fields from one file to another
    CMP      DOC  Documentation for CMP.COM
    CMP      COM  Intelligent file compare - works on binary files
    SCRIPT   DOC  A Crosstalk script for menu-driven operation
    RUSQ     EXE  Another (different) file unsqueezer - as last resort!
    PROJECTS DAT  Sample database for PROJECTS.BAS
    PROJECTS BAS  Home projects database manager
    PC-ZAP   DOC  Documentation for PC-ZAP.EXE
    D        EXE  Display selected disk sides/sectors/tracks
    PC-ZAP   EXE  Apply patches to disk(ette) - supports auto-patch files
    D        DOC  Documentation for D.EXE
    READ     ME   Listing of included files

### Directory of PC-SIG Library Disk 0143

     Volume in drive A has no label
     Directory of A:\

    PC-ZAP   DOC    153728   3-29-84   6:00p
    PC-ZAP   EXE     42112   3-29-84   3:04p
    D        EXE      2560   4-09-84  11:15a
    D        DOC       896   4-09-84  11:14a
    SCRIPT   DOC     12672   3-09-84  10:28p
    PROJECTS BAS      7808   4-09-84  11:19a
    PROJECTS DAT      2944   4-09-84  11:19a
    COPYFLD  DOC      3712   4-09-84  11:22a
    COPYFLD  PRG      4480   4-09-84  11:22a
    CMP      COM      2176   4-08-84  11:45p
    CMP      DOC      7680   4-08-84  11:46p
    RUSQ     EXE     16512   4-09-84  12:18a
    READ     ME        955   4-09-84  11:41a
    CRC      TXT      1170  11-13-84   2:51p
    CRCK4    COM      1536  10-21-82   7:54p
           15 file(s)     260941 bytes
                           53248 bytes free
