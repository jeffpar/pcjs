---
layout: page
title: "PC-SIG Diskette Library (Disk #1109)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1109/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1109"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "CELL SYSTEMS"

    CELL SYSTEMS creates linear cellular automata that are often beautiful
    and also have mathematical significance. The patterns simulate the
    growth processes of simple biological entities. The program has a
    library of patterns already installed, with room for many more. This
    program lets you create new growth patterns of your own, save them,
    re-run them, and edit them. Your new cell can die, flourish, create a
    mess, or make a beautiful pattern that can be stored on disk. View the
    parameters for the sample cells and edit them if you want a slightly
    different pattern. You can create the patterns on either a medium- or
    high-resolution monitor and can print them. An installation program
    configures the program to fit your printer needs.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1109.TXT

{% raw %}
```
Disk No  1109
Program Title: CELL SYSTEMS version 1.0
PC-SIG version 1.1
 
CELL SYSTEMS creates beautiful patterns which also have mathematical
significance.  The patterns simulate the growth processes of simple
biological entities.  The disk has a library of patterns already
installed, with room for many more.  This program lets you create new
growth patterns of your own, save them, re-run them, and edit them.  Your
new cell can die, flourish, create a mess, or make a beautiful pattern
that can be stored on disk.  You can also view the parameters for the
sample cells on this disk, and edit them if you want a slightly different
pattern.  The patterns can be created on either a medium- or
high-resolution monitor and can be printed.  An installation program
configures the program to fit your printer needs.
 
Usage:  Cell Growth.
 
System Requirements:  Color graphics (CGA) card.
 
How to Start:  Type GO (press enter).
 
Suggested Registration:  $18.50
 
File Descriptions:
 
AUTOEXEC BAT  Runs the CELL program.
CELLNAME RND  Data file containing the names of each cell pattern.
CELLDATA RND  Data file which defines and creates each cell pattern.
CELSYS   EXE  System configuration for your moniter and printer.
MAINPROG EXE  Main program.
SYSTEM   DAT  System configuration data file.
SCREENS  PIC  Screen layouts loaded into video memory.
READ     ME   Brief instructions.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1109

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT         8   1-01-80  12:43a
    CELLDATA RND      5504   1-01-80  12:28a
    CELLNAME RND      1152   1-01-80  12:27a
    CELSYS   EXE     32000   1-01-80  12:43a
    FILE1109 TXT      1532   8-17-88   1:21p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       386   7-20-88   1:50p
    MAINPROG EXE     42240   1-01-80  12:56a
    READ     ME       6265   6-17-87  11:56p
    SCREENS  PIC     12296   1-01-80   2:28a
    SYSTEM   DAT      1024   1-01-80  12:01a
           11 file(s)     102445 bytes
                           54784 bytes free
