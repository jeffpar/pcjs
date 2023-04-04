---
layout: page
title: "PC-SIG Library Disk #266"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0266/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0266"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "NAEPIRS"

    This disk contains data from the National Assessment of Educational
    Progress Information Retrieval System (NAEPIRS) and programs to access
    the data.  It is produced by the National Institute of Education.  It
    has been designed so that users can ask for findings according to
    subject or age group; look for trends or attitudes; or compare
    findings between groups such as rural and urban students, males and
    females, students of different races, etc.  Example of findings --
    About 10 percent of the surveyed students at each age do not read in
    their spare time.
    
    System Requirements: 2 disk drives
    
    How to Start: Load DOS and type NAEPIRS to enter the main program.
    
    File Descriptions:
    
    NAEPIRS  EXE  Main program, type "NAEPIRS" to start
    SPOOL    EXE  Spooler, so you don't have to wait for your printer
    AUTOEXEC BAT  Auto start file
    SETUP    BAT  Batch file to set up working disk
    JSUM     BIN  Part of NAEPIRS system
    JINT     BIN  Part of NAEPIRS system
    @??      OVL  Overlay files
    DBFIND   DAT  NAEPIRS data file
    REFYR    BIN  Part of NAEPIRS system
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #0266

     Volume in drive A has no label
     Directory of A:\

    SETUP    BAT        33   1-01-80  12:03a
    AUTOEXEC BAT        19   1-01-80  12:02a
    SPOOL    EXE      2176   3-19-84  10:12a
    NAEPIRS  EXE     43392   4-16-84   1:36a
    JSUM     BIN        84   3-30-84   7:24a
    JINT     BIN      4832   3-30-84   7:24a
    REFYR    BIN        56   3-17-84  12:22p
    DBFIND   DAT    205824   4-16-84   1:26a
    @HA      OVL      3840   4-16-84   4:02a
    @HB      OVL      2560   4-16-84   4:03a
    @HC      OVL       512   4-16-84   4:03a
    @HD      OVL      3712   4-16-84   4:04a
    @HE      OVL      5120   4-16-84   4:04a
    @HF      OVL      3584   4-16-84   4:05a
    @HG      OVL      6656   4-16-84   4:05a
    @HH      OVL      4736   4-16-84   4:05a
    @HI      OVL      3328   4-16-84   4:06a
    @HJ      OVL      1792   4-16-84   4:06a
    @SB      OVL      6912   4-16-84   4:06a
    @SD      OVL      4480   4-17-84   9:16p
    CRC      TXT      1522   1-10-85  10:43a
    CRCK4    COM      1536  10-21-82   5:50p
           22 file(s)     306706 bytes
                            4096 bytes free
