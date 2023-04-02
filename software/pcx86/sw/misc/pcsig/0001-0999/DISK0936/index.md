---
layout: page
title: "PC-SIG Library Disk #936"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0936/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0936"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

## Information about "DCOPY, MYMENU, AND MENUEZE"

    DCOPY is an enhancement of the MS-DOS COPY command.  You can still copy
    files, but you control the copying process based on the file's
    creation/revision date.  The program also pauses when the new disk
    becomes full, lets you put in another, and even formats it!  If you
    want, you can ask DCOPY to prompt you before each file is copied.
    Wildcard copies are supported.
    
    MYMENU creates a start-up menu for your hard disk.  A BASIC program is
    created by the program, and you provide a directory and the program name
    for each option in the menu.  The menu can have up to 18 options, each
    having a short description of the program.
    
    After the BASIC program is created, a few lines are entered into your
    AUTOEXEC.BAT file, and your menu is ready to go!
    
    Make menus to automatically load programs on your various disk drives.
    Put an automatic menu on each of the disks you use regularly.
    
    You are prompted for the names of the programs you want included in a
    particular menu, then asked for the commands needed to run them.
    MENU-EZE lets you choose the colors for your menu screen and you can
    make a different menu for each of the disks in your library (including
    your hard disk).

### Directory of PC-SIG Library Disk 0936

     Volume in drive A has no label
     Directory of A:\

    DCOPY    DOC     16176   1-15-87  11:05a
    DCOPY    EXE     21262   8-01-86  10:58a
    FILES936 TXT      2985   9-28-88  11:40a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1541   9-27-88   9:32a
    MEZ                916   1-18-87  10:29p
    MEZ      BAS      6008   1-18-87   6:37a
    MEZ      BAT        85   1-18-87  10:25p
    MEZ      DOC     26515   1-18-87   5:34p
    MEZDEM   BAT      2623   1-18-87   6:44a
    MYMENU   EXE     39008   7-19-87   3:36p
    MZ       COM        16  11-17-86   2:25p
           12 file(s)     117173 bytes
                           39424 bytes free
