---
layout: page
title: "PC-SIG Diskette Library (Disk #1451)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1451/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1451"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DISK DUPLICATOR"

    DISKDUP makes it easy to make multiple floppy copies of all your
    favorite shareware programs for your friends.  It is also handy for
    disk librarians, teachers, and others needing multiple copies of a
    disk.  Written in Forth, the program is faster than the standard DOS
    DISKCOPY, with more user options.  It allows the user to copy only
    allocated sectors as a time saving feature.  It has options to format
    disks, verify copies and detect any write errors and will try three
    times to read a disk section before giving up in disgust.
    
    Because DISKDUP loads the source disk to be duplicated into its
    virtual memory, it frees up both of your disk drives to crank out two
    copies at a time!  The volume name of the source disk is always shown
    on the screen so you don't wind up duping a bunch of copies of the
    wrong program.  An optional alert signal lets you do something else
    while DISKDUP takes care of the copying, calling you when it's time to
    pop in two more blank disks.  A counter lets you know how many copies
    have already been made.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BUGS.TXT

{% raw %}
```

                      * BUGS - etc. *

Version 1.0

  Disk IO

Mystery problems have occured during format (always) and read
(sometimes) on a '386 machine running DOS 3.3. The specifics of the
problem haven't been isolated yet. Switching to DOS 3.2 fixed things. If
this problem crops up on your machine, try another DOS version or don't
use DiskDup's format option (pre-format your disks).

  Video

Some ANSI drivers and resident video utilities appear to not handle all
video BIOS calls properly. On color equipment, if un-expected colors
arrive or some lines don't clear properly, you will have to run DiskDup
without the offending ANSI driver/video routine installed.

Other bug reports, comments, and suggestions are invited:

                                    DiskDup 1.0
                                    P O Box 915
                                    Fortuna, CA 95540
9feb89jb
```
{% endraw %}

## FILE1451.TXT

{% raw %}
```
Disk No: 1451
Program Title:  DISKDUP version 1.0
PC-SIG version 1

DISKDUP makes it easy to make multiple floppy copies of all your
favorite shareware programs to share with your friends.  Written in
FORTH, the program is faster than the standard DOS DISKCOPY, with more
user options.  It automatically formats disks, verifies copies and
detects any write errors.  It will also try three times to read a disk
section before giving up in disgust.

Because DISKDUP loads the source disk to be duplicated into its virtual
memory, it frees up both of your disk drives to crank out two copies at
a time!  The volume name of the source disk is always shown on the
screen so you don't wind up duping a bunch of copies of the wrong
program.  An optional sound signal lets you do something else while
DISKDUP takes care of the copying, calling you when its time to pop in a
couple more blank disks.  A counter lets you know how many copies have
already been made.

Synopsis:  Makes multiple copies of your favorite programs.

Usage:  Disk Copy Manager.

Special Requirements: 430K RAM.

How to Start:  Type GO (press enter).

Suggested Registration:  $3 to $10.

File Descriptions:

BUGS     TXT  Error reporting instructions.
DISKDUP  COM  Main program.
DISKDUP  DOC  User guide.
ORDER    FRM  Disk order form.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk No 1451 DISK DUPLICATOR  >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type DISKDUP (press enter)                        ║
║                                                                         ║
║ To look at the documentation on your screen, type VIEW (press enter)    ║
║                                                                         ║
║ To copy the documentation to your printer, type MANUAL (press enter)    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1451

     Volume in drive A has no label
     Directory of A:\

    BUGS     TXT       921   2-10-89   6:52p
    DISKDUP  COM     24625   2-19-89   6:17p
    DISKDUP  DOC      8741   2-20-89   2:56p
    FILE1451 TXT      1445   6-02-89  12:23p
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       694   6-02-89  12:24p
    MANUAL   BAT       147   6-02-89  12:26p
    ORDER    FRM      1164   2-27-89   6:13p
    PAGE     COM       325   1-06-87   4:21p
    VIEW     BAT        37   6-02-89  12:24p
           10 file(s)      38137 bytes
                          118784 bytes free
