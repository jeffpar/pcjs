---
layout: page
title: "PC-SIG Diskette Library (Disk #1033)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1033/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1033"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "QUICKLIST"

    A great program for any homeowner or renter who wants accurate records
    of possessions for insurance reasons.  Keep track of each piece of your
    furniture, its current replacement price, who uses it, and where it is
    located in your home.  The list is categorized by room and can either be
    printed by room or in its entirety.
    File Descriptions:
    
    AUTOEXEC BAT  Batch file to automatically start QUICKLIST on boot-up.
    FILE1    DTA  Room Data file.
    FILE2    DTA  Room Data file.
    FILE3    DTA  Room Data file.
    FILE4    DTA  Room Data file.
    FILE5    DTA  Room Data file.
    MANUAL   BAT  Prints manual on printer for you.
    PROPERTY EXE  Main Program.
    README        Introductory text file.
    SETUP    EXE  Installation program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1033.TXT

{% raw %}
```
Disk No: 1033
Program Title:  QUICKLIST version 1.73
PC-SIG version: 1.2

A great program for any homeowner or renter who wants accurate records
of possessions for insurance reasons.  Keep track of each piece of your
furniture, its current replacement price, who uses it, and where it is
located in your home.  The list is categorized by room and can either be
printed by room or in its entirety.

Usage:  Home Inventory.

Special Requirements:  CGA card.

How to Start:  Type GO (press enter).

Suggested Registration:  $35.00

File Descriptions:

AUTOEXEC BAT  Batch file to automatically start QUICKLIST on boot-up.
FILE1    DTA  Room Data file.
FILE2    DTA  Room Data file.
FILE3    DTA  Room Data file.
FILE4    DTA  Room Data file.
FILE5    DTA  Room Data file.
MANUAL   BAT  Prints manual on printer for you.
PROPERTY EXE  Main Program.
README        Introductory text file.
SETUP    EXE  Installation program.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk #1033 QUICK LIST  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation for Quick List, type: MANUAL (press enter)   ║
║                                                                         ║
║ To start the program, type: PROPERTY (press enter)                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1033

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT        15   4-19-87   9:03p
    FILE1    DTA     20000   5-02-87
    FILE1033 TXT      1062   3-17-89  10:17a
    FILE2    DTA     20000   5-02-87
    FILE3    DTA     20000   5-02-87
    FILE4    DTA     20000   5-02-87
    FILE5    DTA     20000   5-02-87
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540   3-17-89   9:03a
    MANUAL   BAT       148   3-17-89   9:03a
    PROPERTY EXE    204100   9-28-88   9:54p
    README            4424   9-28-88  10:57p
    SETUP    EXE     38595  12-05-88  12:02a
           13 file(s)     348922 bytes
                            5120 bytes free
