---
layout: page
title: "PC-SIG Diskette Library (Disk #1363)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1363/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1363"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}
{% comment %}samples_begin{% endcomment %}

## FILE1363.TXT

{% raw %}
```
Disk No: 1363
Program Title:  GS-TESTIT (Disk 2 of 2)
PC-SIG version 1

This is disk two of a two disk set.  It contains data files necessary to
run the program.  Both disks are needed to run the program.  The first
disk in the set is #1362.  Please refer to the first disk for a full
description of the program.

Usage:  Study Aid for FAA Exams/Educational.

Special Requirements:  CGA card for PASSAGES.

How to Start:  Type GO (press enter).

Suggested Registration:  $50.00

File Descriptions:

PHYSACFT DTA  GS.COM data file.
FAAREGUL DTA  GS.COM data file.
WEATHERQ DTA  GS.COM data file.
READ     ME   Program information.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║   <<<<  Disk No 1363 THE PASSING PASSAGES & GS-TESTIT DATA DISK >>>>    ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start GS-TESTIT or PASSAGES insert disk #1362, type GO (press enter) ║
║                                                                         ║
║ For info on the programs type, READ (press enter)                       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1363

     Volume in drive A is DISK1363
     Directory of A:\

    FAAREGUL DTA    107576  12-21-87  11:00a
    FILE1363 TXT       759   4-27-89   4:10p
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       540   4-27-89   4:09p
    PHYSACFT DTA    129272  12-21-87  11:00a
    READ     BAT        39   4-27-89   4:07p
    READ     ME        403   1-01-80  12:08a
    WEATHERQ DTA    102152  12-21-87  11:00a
            8 file(s)     340779 bytes
                           16384 bytes free
