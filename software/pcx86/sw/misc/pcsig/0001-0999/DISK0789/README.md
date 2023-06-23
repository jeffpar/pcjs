---
layout: page
title: "PC-SIG Diskette Library (Disk #789)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0789/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0789"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CARD TRAK, EGA SCREEN SAVE, AND MORE"

    A screen-blanking routine that shuts your EGA screen off after three
    minutes of keyboard inactivity.  This helps prolong the life of your
    screen by preventing ``image burn-in''.  Striking any key restores your
    video display.
    
    MONTAGE2 is in this library for one reason: it's fun.  It presents a
    colorful line display rivaled only by '60s music videos -- a good way to
    show off your EGA system.  You configure parameters that determine the
    color and pattern of the lines.  It's self-documented with a help
    display during execution.
    
    LOTTOPIKS is a random number generator for playing six-number format
    state lottos.  It sorts the numbers into ascending order and displays a
    screen of games.  The Illinois and Missouri lottos are menued for the
    basic games, but other states' games can be easily configured with the
    program by setting that game's maximum high number (6 to 255).
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES789.TXT

{% raw %}
```
Disk No  789
Program Title: CARDTRAK version 3.0 and more
PC-SIG version 1.1

    CARD TRACK is a full-featured payments simulator for bank cards and
simple interest loans supporting user file creation, editing, and re-
trieval, two methods of process (Daily/Avg), two screening formats (Auto/
Page), and two formatted printer output modes (Verbose/Terse).
Documentation is in the file CARDHELP.DOC. Print CARDHELP.DOC with
PRNT-DOC.BAT.

    MONTAGE2 is for fun, it draws a series of lines on the screen and then
moves them around for you. It can be completely configured to draw its
lines your way. It's self-documented with a help display. It's in Hi-Res
and displays in 16 colors. It's a bit noisy on start-up. The opening screen
has complete information on user options. These can be changed during
program execution (no configuration files).

    LOTOPIKS is a random number generator for playing state lottos. It
sorts the numbers in ascending order and displays a screen of games. The
Illinois and Missouri lottos are menued for the basic games, but a
selection of `O' (Other) is also offered and a maximum high number (range
of 6...255) can be entered. The games are restricted to a six-number
format.

Usage: Financial and Assorted Utilities

System Requirements: 128K and one floppy drive. (You need an EGA card for
the EGA screen-save program.)

How to Start: Type the name of the program you want to start. For
example, type CARDTRAK (press enter) to start the CARDTRAK program.

Suggested Registration: CARDTRAK - $25.00, LOTOPIKS - $10.00

File Descriptions:

CARDTRAK EXE  Simulator for bank cards and most loans.
READ     BAT  Batch file to view intro text file for CARDTRAK
READ     ME   Introductory text file about CARDTRAK
Z-FILER  TRK  Demonstration file for CARDTRAK.COM.
MONTAGE2 COM  User controlled revision of familiar line drawing program.
LOTOPIKS COM  Lotto players aid.  Random number generator w/ formatting.
EGABLANK COM  EGA sreenblank program.
EGABLANK SCR  EGA screem.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk #789 CARDTRAK AND OTHERS >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To view the documentation for CARDTRAK type:                            ║
║                       READ   (press enter)                              ║
║                                                                         ║
║ To start the CARDTRAK program type CARDTRAK (press enter)               ║
║                                                                         ║
║ To start the LOTOPIKS program type LOTOPIKS (press enter)               ║
║                                                                         ║
║ To start the MONTAGE program type MONTAGE2 (press enter)                ║
║                                                                         ║
║ To install the EGA SCREEN SAVE program type EGABLANK (press enter)      ║
║ After a few minutes your screen will shut down just type any key to     ║
║ reactivate it.                                                          ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0789

     Volume in drive A has no label
     Directory of A:\

    PRINTDOC BAT       978   4-29-87   5:27a
    LOTOPIKS COM     17677   3-09-87   3:48a
    EGABLANK COM       134   9-18-86  11:24a
    CARDTRAK EXE    139616   4-07-88  11:17a
    MONTAGE2 COM     25589   9-16-86  11:02a
    READ     BAT        37   4-07-88  10:55a
    EGABLANK SCR       635   9-18-86  11:23a
    Z-FILER  TRK       890   4-07-88  10:55a
    FILES789 TXT      2159   5-04-88  10:50a
    GO       BAT        38   6-30-87   4:46p
    GO       TXT      1233   4-22-88  10:14a
    READ     ME       1181   4-07-88  10:55a
           12 file(s)     190167 bytes
                          124928 bytes free
