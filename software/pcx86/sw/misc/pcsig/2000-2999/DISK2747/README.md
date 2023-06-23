---
layout: page
title: "PC-SIG Diskette Library (Disk #2747)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2747/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2747"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2747.TXT

{% raw %}
```
Disk No: 2747
Disk Title: PRISM
PC-SIG Version: S1

Program Title: Prism
Author Version: 1.10
Author Registration: $25.00
Special Requirements: VGA, and a hard disk or high density disk drive.

Prism is a shareware utility that will allow you to reset the color
attributes on your VGA screen.  Instead of having to use DOS's 16
garish colors, you can create more pleasingpalettes of colors for
use with ANY non-graphics program.

PRISM contains nearly 60K of help screens.  Enter the PRISM editor
and press <F1><F1> to get to the Help Index.  PRISM's help screens
will teach everything you need to know to use the program effectively.
You will be creating bright new colors for your VGA system within minutes.

PRISM110.EXE is a self-extracting archive.  It contains the following files

  README       -- this file.
  PRISM   .EXE -- the amazing VGA palette editor.
  P       .BAT -- a batch file for using PRISM from any subdirectory.
  PDEMO   .EXE -- a self-running demonstration which will display all
                  palette files in the same subdirectory.
  *       .PAL -- a variety of palette files demonstrating some of
                  the palettes you can create with PRISM.

PRISM was written in Turbo Pascal 6.0, from Borland International.
PRISM also makes use of the Object Professional library from TurboPower.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1991 PC-SIG, Inc.
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  PC-SIG Disk #2747 PRISM  >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║ Create a subdirectory on your hard drive and copy all files to it.      ║
║ To create a subdirectory, go to the drive you want and type:            ║
║       MD [subdirectory name]                                            ║
║ To copy all the files to the hard drive, type:                          ║
║       COPY [source drive]:*.* [destination drive]:\subdirectory name    ║
║                                                                         ║
║ To extract the files, type: PRISM110 (press Enter)                      ║
║                                                                         ║
║ To print documentation after extraction, type: COPY README PRN (Enter)  ║
║                                                                         ║
║ To run the program after extraction, type: PRISM   (press Enter)        ║
║                                                                         ║
║                                        (c) Copyright 1991, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2747

     Volume in drive A has no label
     Directory of A:\

    PRISM110 EXE    175103  11-10-90   8:28a
    GO       BAT        38   7-23-91   2:37a
    GO       TXT      1310   8-01-91   2:26a
    FILE2747 TXT      1469   8-01-91   2:28a
            4 file(s)     177920 bytes
                          142336 bytes free
