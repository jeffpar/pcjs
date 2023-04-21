---
layout: page
title: "PC-SIG Diskette Library (Disk #26)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0026/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0026"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "BOOK INDEX BUILDER"

    BOOK INDEX is a simple and straightforward set of programs and
    procedures for preparing book indices.  They allow the user to easily
    create a data file that will form the index.  This program can be a
    lifesaver for those aspiring writers whose word processors do not
    include built-in index abilities.
    
    System Requirements:  128k, two disk drives, monochrome monitor
    
    How to Start: From DOS, enter INFO for documentation and
    instructions on using the program.  With program disk in drive A and
    working data disk in drive B, enter START to begin program.
    
    File Descriptions:
    
    START    BAT  Start-up program. Creates empty data file
    INFO     BAT  Informational file for Book Indexing programs
    INPUT    PAS  Pascal source code for Book Indexing Program
    BUILD    EXE  Compiled programs for Book Indexing
    MERGE    EXE  Compiled programs for Book Indexing
    SORT     EXE  Compiled programs for Book Indexing
    INPUT    EXE  Compiled programs for Book Indexing
    INDEX    BAT  Format an index from the data
    COMBINE  BAT  Sort/merge new entries with any previous entries
    ENTER    BAT  Begin index entries
    SORT     PAS  Pascal source code for Book Indexing Program
    MERGE    PAS  Pascal source code for Book Indexing Program
    BUILD    PAS  Pascal source code for Book Indexing Program
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #26, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  EMPTY   .            CRC = 00 00

--> FILE:  INFO    .BAT         CRC = CC E1

--> FILE:  START   .BAT         CRC = 90 5A

--> FILE:  ENTER   .BAT         CRC = E1 98

--> FILE:  COMBINE .BAT         CRC = 4D EC

--> FILE:  INDEX   .BAT         CRC = FD 49

--> FILE:  INPUT   .EXE         CRC = 24 9B

--> FILE:  SORT    .EXE         CRC = BA DA

--> FILE:  MERGE   .EXE         CRC = B7 5F

--> FILE:  BUILD   .EXE         CRC = 9E 18

--> FILE:  INPUT   .PAS         CRC = CB 38

--> FILE:  SORT    .PAS         CRC = EC 88

--> FILE:  MERGE   .PAS         CRC = 23 D7

--> FILE:  BUILD   .PAS         CRC = 85 FB

 ---------------------> SUM OF CRCS = 20 86

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0026

     Volume in drive A has no label
     Directory of A:\

    BUILD    EXE     29696   1-13-83  11:33a
    BUILD    PAS      4170   3-02-83  12:00p
    COMBINE  BAT       128   1-13-83  11:39a
    CRC      TXT      1216  11-09-84   8:41a
    CRCK4    COM      1536  10-21-82   7:54p
    EMPTY                1   1-08-83  10:26a
    ENTER    BAT       128   1-13-83  11:37a
    INDEX    BAT       128   1-13-83  11:40a
    INFO     BAT      5760   1-13-83  11:19a
    INPUT    EXE     29696   1-19-83   9:31a
    INPUT    PAS      6912   1-19-83   9:29a
    MERGE    EXE     30464   1-13-83  11:30a
    MERGE    PAS      4096   1-13-83  11:21a
    SORT     EXE     36096   1-13-83  11:28a
    SORT     PAS      5248   1-13-83  11:20a
    START    BAT       128   1-13-83  11:36a
           16 file(s)     155403 bytes
                             512 bytes free
