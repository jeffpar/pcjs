---
layout: page
title: "PC-SIG Diskette Library (Disk #521)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0521/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0521"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FREE FILE"

    FREEFILE is a relational database system for anyone with little or no
    programming experience to determine how files are to be created, enter
    information, and print reports.
    
    It is particularly useful for someone interested in maintaining a
    collection of information with the ability to set up "calculated
    fields" and import or export data to and from other packages. FREEFILE
    has on-line help and two tutorials. It allows 10 indexes per database,
    2 billion records, 1000 characters per record, and 100 fields per
    record.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES521.TXT

{% raw %}
```
Disk No  521
Program Title: FREE FILE version 1.0
PC-SIG version 1.2

    FREEFILE is a relational database system that lets anyone with little
or no programming experience determine how files are to be created, enter
information, and print reports. It is particularly useful for someone
interested in maintaining a collection of information with the ability to
set up `calculated fields' and import or export data to and from other
packages. FREE FILE has on-line help and two tutorials with explanations.
It allows ten indexes per database, 2 billion records, 1000 characters per
record, and 100 fields per record.

Usage: Database

System Requirements: 256K memory and one disk drive.

How to Start: Type FF (press enter).

Suggested Registration: $25.00

File Descriptions:

READ     ME   Introduction to print documentation
FF       EXE  Main FREEFILE program
FF       HLP  FREEFILE help text
FF       DOC  FREEFILE documentation
DEMO1    ?    First tutorial with names & addresses (5 files)
DEMO2    ?    Second tutorial with rental business application (6 files)
COLOR    EXE  Set up color for color monitor
NO-COLOR FIL  Set up for monochrome graphic monitor

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1986,87,88 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                     <<<<  Disk #521 FREEFILE  >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To display information on using FREEFILE type:                          ║
║                  TYPE FF.DOC  (press enter)                             ║
║ To print the information on using FREEFILE type:                        ║
║                  COPY FF.DOC LPT1: (press enter)                        ║
║                                                                         ║
║ To run FREEFILE type: FF (press enter)                                  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0521

     Volume in drive A has no label
     Directory of A:\

    READ     ME       1846  12-11-85   7:31p
    FF       EXE    158990   3-06-88   1:07p
    FF       HLP     17727  11-21-85   9:34p
    FF       DOC    116510   3-19-88   8:15a
    DEMO1    HDR       155   9-02-85   8:24p
    DEMO1    P          75   9-02-85   8:24p
    DEMO1    DAT       460   6-25-87   5:23p
    DEMO1    IDX      1024   9-04-85   9:21p
    DEMO1    RPT       119   9-04-85   9:49p
    DEMO2    RPT       229   9-10-85   8:08p
    DEMO2    FRM       195   9-08-85  10:43p
    DEMO2    HDR       309   9-06-85  10:19p
    DEMO2    P         102   9-06-85  10:19p
    DEMO2    DAT      1755   9-15-85   3:31p
    DEMO2    IDX      1536   9-14-85   6:49p
    COLOR    EXE     18618   3-29-86   8:04p
    NO-COLOR FIL         7   6-02-85   9:57a
    FILES521 TXT      1310   5-12-88   3:52p
    GO       BAT        38   5-05-88   4:34p
    GO       TXT       771   5-05-88   4:33p
           20 file(s)     321776 bytes
                           27648 bytes free
