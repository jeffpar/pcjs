---
layout: page
title: "PC-SIG Diskette Library (Disk #914)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0914/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0914"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-DEMO GRAPHICS PRESENTATION PACKAGE"

    PC-DEMO is a graphics package that lets you create demonstrations
    featuring graphics animation, program interface capabilities, and slide
    shows.
    
    Use the full range of characters and colors on your computer.  Choose
    between big or small characters.  Fill in a box, move it, copy it, and
    even rotate it.  Use the cursor keys to draw your picture without the
    need for a mouse or pad.  Slides can be organized into an interactive
    demo which accepts input from users.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BLOAD.BAS

{% raw %}
```bas
10 'This program loads a screen which was saved with a .BLD extension.          20 C = 80                        'or 40 for a 40-column screen
30 WIDTH 80                      'or 40 for a 40-column screen
40 OUT &H3D8,&H21                'video off (80-column only)
50 DEF SEG = &HB800              'set to first page of color screen
60 BLOAD "PICTURE.BLD",0
70 OUT &H3D8,&H29                'video on (80-column only)
```
{% endraw %}

## BSAVE.BAS

{% raw %}
```bas
5 'This program saves the current screen. Always use a .BLD extension.
10 DEF SEG = &HB800               'first page of color screen
20 BSAVE "picture.bld",0, 4000    'use 2000 as length of a 40-column screen
40 DEF SEG
```
{% endraw %}

## FILES914.TXT

{% raw %}
```
Disk No  914
Program Title: PC-DEMO version 2.1
PC-SIG version 1
 
    PC-DEMO is a graphics demonstration package. It demonstrates graphics
animation, program interface capabilities, and slide shows. PC-DEMO lets
you use the full range of charaters and colors on your computer. PC-DEMO's
single-command language gives you big or small characters. You can fill in
a box, move it, copy it, and even rotate it. Use the cursor keys to draw
your picture. In addition, PC-DEMO slides may be organized into an
interactive demo.
 
Usage: Graphics Package.
 
System Requirements: 256K memory and two drives.
 
How to start: Type: RUNDEMO (press enter).
 
Suggested Registration: $35.00
 
File Descriptions:
 
PC-DEMO  BAT  Development system batch program.
PC-DEMO  COM  Development system program.
PC-DEMO  000  Development system overlay file.
PC-DEMO  HLP  Development system help file.
DEMO     COM  Runtime demo program.
CAPTURE  COM  Memory resident screen capture program.
FASKEYS  COM  Program to enhance the keyboard rate.
BLD_PIC  PAS  Pascal program to convert files from .BLD format to .PIC format.
PIC_BLD  PAS  Pascal program to convert files from .PIC format to .BLD format.
PIC_ASC  PAS  Pascal program to convert files from .PIC format to ASCII.
SHOW_PIC PAS  Turbo Pascal source program to display a PC-DEMO .PIC file.
BLOAD    BAS  Example BASIC program to display a PC-DEMO .PIC file.
BSAVE    BAS  Example BASIC program to save a screen in the .PIC format.
RUNDEMO  BAT  Demonstration program. Requires a color graphics adapter.
PC-DEMO  DMO  Demonstration file of PC-DEMO's features.
READ     ME   File descriptions.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk No 914 PC-DEMO  >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation for PC-DEMO, Type:                           ║
║                  COPY READ.ME LPT1: (press enter)                       ║
║                                                                         ║
║ To run the program PC-DEMO, Type: PC-DEMO (press enter)                 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0914

     Volume in drive A has no label
     Directory of A:\

    PC       BAT        18   4-15-87  12:00p
    PC-DEMO  COM     44717   4-15-87  12:00p
    PC-DEMO  000     44800   4-15-87  12:00p
    PC-DEMO  HLP     76000   4-15-87  12:00p
    DEMO     COM     18995   4-15-87  12:00p
    CAPTURE  COM     15178   4-15-87  12:00p
    FASTKEYS COM        15   4-15-87  12:00p
    PIC_BLD  PAS      5273   4-15-87  12:00p
    BLD_PIC  PAS      5110   4-15-87  12:00p
    PIC_ASC  PAS      4678   4-15-87  12:00p
    SHOW_PIC PAS      4451   4-15-87  12:00p
    BLOAD    BAS       419   4-15-87  12:00p
    BSAVE    BAS       223   4-15-87  12:00p
    RUNDEMO  BAT        28   4-15-87  12:00p
    PC-DEMO  DMO    123904   4-15-87  12:00p
    READ     ME       4236   4-15-87  12:00p
    FILES914 TXT      1775  12-09-87  10:51a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       617  12-08-87   4:32p
           19 file(s)     350475 bytes
                            1024 bytes free
