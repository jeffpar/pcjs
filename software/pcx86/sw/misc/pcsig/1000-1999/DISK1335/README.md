---
layout: page
title: "PC-SIG Diskette Library (Disk #1335)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1335/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1335"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BURN-IN"

    BURN-IN tests your new PC to the limit to make certain that if there is
    a problem, it shows up before your warranty runs out.
    
    BURN-IN makes your computer and drives do electronic pushups and deep
    knee bends for 24 to 72 hours.  By then, the PC will either conk out and
    you can use your warranty or it will last until it's obsolete.  The
    basic rule is that electronic devices usually break during their first
    couple of dozen hours of heavy use or else they will last a long, long
    time.
    
    This program first runs a routine displaying ASCII characters.  Then it
    runs graphics to exercise your CGA, EGA or VGA card.  As soon as it's
    finished, it generates random numbers and stores them on your disks and
    displays them.  Then it erases the numbers and repeats the whole
    exercise over and over and over again.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1335.TXT

{% raw %}
```
Disk No: 1335
Program Title:  BURN-IN version 3.0
PC-SIG version: 1

BURN-IN tests your new PC to the limit to make certain that if there is
a problem, it shows up before your warranty runs out.

BURN-IN makes your computer and drives do electronic pushups and deep
knee bends for 24 to 72 hours.  By then, the PC will either conk out and
you can use your warranty or else it will likely last until a blue moon.
The basic rule is that electronic devices usually break during their
first couple of dozen hours of heavy use or else they will last a long,
long time.

This program first runs a routine displaying ASCII characters.  Then it
runs graphics to exercise your CGA, EGA or VGA card.  As soon as it's
finished, it generates random numbers and stores them on your disks and
displays them.  Then it erases the numbers and repeats the whole
exercise over and over and over again.

Usage:  Utility.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $49.95

File Descriptions:

BURNIN   ARC  Archived files.
BURNIN   EXE  Main program.
MANUAL   COM  Displays or prints user guide.
AT2F2HEN      Sample configuration file.
PROGRAMS COM  Other shareware programs by author.
FILES    TXT  Describes files.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## FILES.TXT

{% raw %}
```

Files on the Burn-In Disk:

File     Ext     Description

BURNIN   ARC    Archive File for BBS distribution.
BURNIN   EXE    Burn-In program, Version 3.0
MANUAL   COM    Self-browsing manual for Burn-In.
AT2F2HEN        Sample configuration file for Burn-In.
PROGRAMS COM    Other Shareware programs by George Campbell.
FILES    TXT    This file.
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk No 1335 BURN-IN  >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type BURNIN (press enter)                         ║
║                                                                         ║
║ To copy the documentation to your printer, type MANUAL (press enter)    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1335

     Volume in drive A has no label
     Directory of A:\

    AT2F2HEN            24  12-27-88  11:30a
    BURNIN   EXE     74166  12-27-88  11:45a
    FILE1335 TXT      1391   2-22-89  10:29a
    FILES    TXT       360   1-10-89  12:30p
    GO       BAT        38   1-11-89   1:55p
    GO       TXT       540   3-07-89  10:05a
    MANUAL   COM      9502  12-27-88  12:36p
    PROGRAMS COM      9726   1-09-89   1:34p
            8 file(s)      95747 bytes
                           62464 bytes free
