---
layout: page
title: "PC-SIG Library Disk #789"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0789/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0789"
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


### Directory of PC-SIG Library Disk 0789

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
