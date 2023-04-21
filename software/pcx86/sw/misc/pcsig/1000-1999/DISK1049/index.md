---
layout: page
title: "PC-SIG Diskette Library (Disk #1049)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1049/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1049"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DISK CATALOGING PROGRAM"

    After collecting numerous programs on your hard disk or several
    floppies, finding a particular program can be a tremendous, dreaded
    problem. DISK CATALOGING PROGRAM is a simple utility designed to handle
    just that. It creates a catalog of all your files by reading
    the information from your disks as you insert them in your floppy
    drive. Add or change the disk label as each disk is read by the
    program and catalog over 500 disks in one catalog. View and modify a
    list of disks. Search for a filename and the program tells you all the
    locations for that file. Add individual file descriptions once the disk
    is cataloged.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1049.TXT

{% raw %}
```
Disk No  1049
Program Title: DISK CATALOGING PROGRAM version 1.01
PC-SIG version 1.1

    After collecting numerous programs on your hard disk or several
floppies, finding a particular program can be a tremendous and dreaded
problem. DISK CATALOGING PROGRAM is a simple utility designed to handle
just that. It creates a catalog of all your files, by simply reading the
information from your disks as you insert them in your floppy drive. You
can add or change the disk label as each disk is read by the program, and
catalog over 500 diskettes in one catalog. A list of disks can then be
viewed and modified. A filename can be searched for, and the program tells
you all the locations for that file. Individual file descriptions can be
added once the disk is cataloged. From the program you can shell to DOS,
and help screens are available.

Usage: Disk Cataloging/Database

System Requirements: 128K memory and one floppy disk drive.

How to Start: Type GO (press enter).

Suggested Registration: $19.00

File Descriptions:

GO       BAT  Batch file to type README.
README        How to get started.
CAT      EXE  Main program.
CAT      IND  Sample catalog index file.
CAT      DTA  Sample catalog data file.
CAT      DOC  Documentation.
CAT      PIF  Program file.
DELETEBU BAT  Batch file to delete backup files after data compression.
RECOVER  BAT  Batch file to recover data files after compress failure.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1988 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1049

     Volume in drive A has no label
     Directory of A:\

    CAT      DOC     31052   6-23-88   9:53p
    CAT      DTA     38160  12-03-87   7:28p
    CAT      EXE     26135   6-21-88  11:01p
    CAT      IND       792  12-03-87   7:28p
    CAT      PIF       369  12-05-87  10:44a
    DELETEBU BAT        89  11-30-87  10:03p
    FILE1049 TXT      1551   7-07-88  10:15a
    GO       BAT        26  11-27-87  12:48p
    README            1085  12-05-87  11:00a
    RECOVER  BAT        39  12-07-87  10:42p
           10 file(s)      99298 bytes
                           57344 bytes free
