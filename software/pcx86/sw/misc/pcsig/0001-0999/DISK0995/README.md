---
layout: page
title: "PC-SIG Diskette Library (Disk #995)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0995/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0995"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "H&P CALENDAR"

    H&P CALENDAR creates a monthly calendar on screen with graphic designs
    or a yearly wall calendar without graphics.
    
    Edit the monthly calendar by using the arrow keys to move the cursor
    anywhere on the screen to enter holidays, special dates, anniversaries,
    etc.  When the calendar is completed, it is dumped to the printer using
    DOS ``GRAPHICS.COM.''  A database is included to save the data to disk.
    The data for a particular month may be printed before filling in the
    boxes.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES995.TXT

{% raw %}
```
Disk No:  995
Program Title: H&P CALENDAR version 2.0
PC-SIG version: 1.3

H&P CALENDAR creates a calendar on screen with graphic designs.  You can
edit by using the arrow keys to move the cursor anywhere on the screen
to enter holidays, special dates, anniversaries, etc.  When the calendar
is completed, it is dumped to the printer using GRAPHICS.COM, a TSR
program supplied with DOS.  With the calendar program, no data is saved
to disk, so once the screen is cleared, data is lost.  H&P CALENDAR is
entirely user-programmable, so it will not become obsolete due to
pre-programmed date limitations.

Usage:  Home Application.

Special Requirements:  CGA graphics.

How to Start:  Type GO (press enter).

Suggested Registration:  $5.00

File Descriptions:

CAL      EXE  Calendar program.
CAL87    EXE  Calendar program for Tandy users.
README   BAT  Info file.
APR           Calendar Data Files.
AUG           Calendar Data Files.
DEC           Calendar Data Files.
FEB           Calendar Data Files.
JAN           Calendar Data Files.
JUL           Calendar Data Files.
JUN           Calendar Data Files.
MAR           Calendar Data Files.
MAY           Calendar Data Files.
NOV           Calendar Data Files.
OCT           Calendar Data Files.
SEP           Calendar Data Files.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk No 995 H&P CALENDAR  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To view the documentation for CALENDAR, Type:README (press enter)       ║
║                                                                         ║
║ To run the program CALENDAR, Type: CAL (press enter)                    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0995

     Volume in drive A has no label
     Directory of A:\

    APR                320  12-03-87   5:32p
    AUG                320  12-03-87   5:33p
    CAL      EXE    120774   2-10-89   6:07p
    CAL87    EXE    120774   2-13-89   9:51a
    DEC                320  12-03-87   5:36p
    FEB                320  12-03-87   5:31p
    FILES995 TXT      1434   3-02-89   4:01p
    GO       BAT        38   1-27-88   8:46a
    GO       TXT       540   2-27-89   3:42p
    JAN                320   4-22-88  10:49p
    JUL                320  12-03-87   5:33p
    JUN                320   4-22-88  11:01p
    MAR                320  12-03-87   5:32p
    MAY                320   4-22-88   9:12p
    NOV                320  12-06-87  12:49a
    OCT                320  12-03-87   5:34p
    README   BAT       597   1-27-89   4:54p
    SEP                320   4-22-88   9:51p
           18 file(s)     247997 bytes
                           63488 bytes free
