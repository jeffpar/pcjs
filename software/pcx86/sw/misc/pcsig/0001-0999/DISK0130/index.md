---
layout: page
title: "PC-SIG Diskette Library (Disk #130)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0130/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0130"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PASCAL TOOLS VOL 1"

    This is the first of the three-disk series Pascal Tools (Disks #130-
    132).  The series consists of routines adapted from the book "Software
    Tools in Pascal" which are useful for processing and extracting
    information from text files.  This disk includes six programs for
    formatting output, echoing arguments to output, defining your KWIC
    (key-word-in-context) index, and a file archiving program.
    
    How to Start: Read manual (*.MAN) files before using corresponding
    programs.  To run a .EXE file, enter: filename <ENTER>.
    
    File Descriptions:
    
    README1       Notes about using Pascal Tools
    ARCHIVE  EXE  File archiving program
    CHARCNT  EXE  Count characters in input
    CHANGE   EXE  Changes patterns in text
    KWIC     EXE  Produce lines for KWIC index
    FMT      EXE  Produce formatted output
    FINDP    EXE  Find patterns in text
    ECHOARG  EXE  Echo arguments to output
    *        MAN  Documentation  (17 files)
    *        FNT  Printer setup files (4 files)
    MAN      IM   Macros for manual page
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #130, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  README1 .            CRC = AB AA

--> FILE:  ARCHIVE .EXE         CRC = 4C 79

--> FILE:  CHANGE  .EXE         CRC = FA F0

--> FILE:  CHARCNT .EXE         CRC = FE 02

--> FILE:  ECHOARG .EXE         CRC = F1 5B

--> FILE:  FINDP   .EXE         CRC = 68 EA

--> FILE:  FMT     .EXE         CRC = 3B 64

--> FILE:  CITOH   .FNT         CRC = 97 6C

--> FILE:  FMT     .FNT         CRC = 19 B1

--> FILE:  MX80    .FNT         CRC = 19 B1

--> FILE:  KWIC    .EXE         CRC = 81 45

--> FILE:  MAN     .IM          CRC = F5 B5

--> FILE:  ARCHIVE .MAN         CRC = C4 A2

--> FILE:  CHANGE  .MAN         CRC = 10 F5

--> FILE:  CHARCNT .MAN         CRC = C6 57

--> FILE:  ECHOARG .MAN         CRC = 36 CC

--> FILE:  FINDP   .MAN         CRC = 06 C4

--> FILE:  FMT     .MAN         CRC = 9E 34

--> FILE:  KWIC    .MAN         CRC = 1F CD

--> FILE:  LINECNT .MAN         CRC = 37 A3

--> FILE:  MACRO   .MAN         CRC = 66 73

--> FILE:  PRINTF  .MAN         CRC = 57 24

--> FILE:  SORTF   .MAN         CRC = C5 09

--> FILE:  TED     .MAN         CRC = EA F9

--> FILE:  TOOLS   .MAN         CRC = B5 18

--> FILE:  TRANSLIT.MAN         CRC = C6 DF

--> FILE:  UNIQUE  .MAN         CRC = 71 EB

--> FILE:  UNROTATE.MAN         CRC = E0 5B

--> FILE:  WORDCNT .MAN         CRC = 67 1A

--> FILE:  CRC     .TXT         CRC = 0B 13

--> FILE:  CRCK4   .COM         CRC = BD 22

 ---------------------> SUM OF CRCS = 02 CD

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0130

     Volume in drive A has no label
     Directory of A:\

    ARCHIVE  EXE     34176   9-01-83   1:36p
    ARCHIVE  MAN      2187   9-07-83   2:33p
    CHANGE   EXE     30592   8-31-83  11:04p
    CHANGE   MAN       756   9-07-83  11:00a
    CHARCNT  EXE     26496   9-01-83   3:31p
    CHARCNT  MAN       424   9-07-83  11:01a
    CITOH    FNT       993   9-07-83   1:43p
    CRC      TXT      2016   1-01-80  12:32a
    CRCK4    COM      1536  10-21-82   7:54p
    ECHOARG  EXE     26368   9-02-83   8:44a
    ECHOARG  MAN       556   9-07-83  10:53a
    FINDP    EXE     30976   8-31-83  11:31p
    FINDP    MAN      1822   9-07-83  10:52a
    FMT      EXE     44160   9-02-83  10:58a
    FMT      FNT      1020   6-11-83  12:16p
    FMT      MAN      6448   9-07-83   2:36p
    KWIC     EXE     27392   9-01-83  11:48a
    KWIC     MAN       712   9-07-83  11:01a
    LINECNT  MAN       235   9-07-83  11:06a
    MACRO    MAN      2983   9-07-83  11:01a
    MAN      IM        618  11-01-82  11:08a
    MX80     FNT      1020   6-11-83  12:16p
    PRINTF   MAN       704   9-07-83  11:01a
    README1            710   9-06-83   9:54p
    SORTF    MAN       678   9-07-83  11:04a
    TED      MAN      3856   9-07-83   2:38p
    TOOLS    MAN      5383   9-07-83   1:51p
    TRANSLIT MAN      1721   9-07-83   2:41p
    UNIQUE   MAN       463   9-07-83  11:05a
    UNROTATE MAN      1017   9-07-83  11:05a
    WORDCNT  MAN       381   9-07-83  11:05a
           31 file(s)     258399 bytes
                           52224 bytes free
