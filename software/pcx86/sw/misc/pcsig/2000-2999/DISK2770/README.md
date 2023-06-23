---
layout: page
title: "PC-SIG Diskette Library (Disk #2770)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2770/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2770"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2770.TXT

{% raw %}
```
Disk No: 2770
Disk Title: Equator
PC-SIG Version: S1.0

Program Title: Equator
Author Version: 1.0
Author Registration: $29.00
Special Requirements: CGA,EGA, or VGA, a hard disk or high density drive

EQUATOR facilitates quick and easy entry, storage and evaluation
of equations.The program automatically decodes the equation entered on to
screen, recognizing functions and standard constants. Greek and special
characters are available. Once entered, the equation is stored in a
categorized file for easy access in the future. Graphs of the results or
other text data files may be plotted with linear or logarithmic axes on
the screen graphics printer or on an HPGL plotter. The program helps by
calculating optimum ranges for the axes which the user may accept or
redefine before plotting the graph.

Features:

 Symbolic equations
 Report-quality linear or logarithmic graphs
 Inspection of each graph data point with cursor
 Trigonometric and hyperbolic functions
 Complex numbers
 Greek and special characters
 Variables and constants stored for reference
 Context sensitive help system
 Automatic graph scaling
 Menu driven
 Graphs on HP Laserjet, IBM and Epson printers

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
║                <<<<  PC-SIG Disk #2770  EQUATOR  >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║   To copy all files to hard drive or high desity drive, type:           ║
║      COPY *.* [destination drive]:\subdirectory's name (press Enter)    ║
║                                                                         ║
║   To run the self extracting program type:  EQ (press Enter)            ║
║                                                                         ║
║   To install the program on drive C, type:  INSTALL (press Enter)       ║
║                                                                         ║
║   Once extracted or installed, to start the program, type:              ║
║       EQUATOR  (press Enter)                                            ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
                                            Copyright (c) 1991, PC-SIG Inc.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2770

     Volume in drive A has no label
     Directory of A:\

    EQ       EXE    241484   4-04-90   8:58p
    EQUATOR  INF      3812   4-07-90   4:56a
    INSTALL  BAT       189   4-07-90   5:04a
    GO       BAT        38   1-20-89  10:04a
    GO       TXT      1156   1-01-80   2:22a
    FILE2770 TXT      1316   7-10-91   1:22a
            6 file(s)     247995 bytes
                           70656 bytes free
