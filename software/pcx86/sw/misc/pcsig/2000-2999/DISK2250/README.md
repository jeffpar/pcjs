---
layout: page
title: "PC-SIG Diskette Library (Disk #2250)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2250/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2250"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MEGACAD 1 OF 3 (2251, 2252 ALSO)"

    This program, developed in Germany, has sold thousands of copies
    there and is twice as fast as AutoCad.
    
    MEGACAD is a 2D CAD program for intermediate and professional use. It
    has all of the basic drawing elements such as points, lines, circles,
    arcs, text, grid, redraw, and zoom. MEGACAD also boasts more powerful
    drawing commands, such as dimensioning, hatching, macros, separate,
    layer, defaults, and group. This program offers the serious CAD
    programmer all of the options he or she will ever need.
    
    Registered users receive plotter drivers, laser drivers, desktop
    publishing interface, additional fonts, and a program enabling the user
    to generate and edit original fonts.
    
    MEGACAD -- A software package for people who are serious about CAD.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BESTELL.TXT

{% raw %}
```
M E G A C A D

We would be happy if you decide, because of your positive experience with the 
shareware-version, to update to the registrated version. MegaCad as registered 
version is available in three variations.

Base-version for DM 298,-- includes:

* MegaCad construction and painting program
  (without paging, i.e. the size of a drawing is restricted by the available 
  RAM of your computer)
* Printed output to all current printers in high resolution up to DIN A4
* Support of Hercules- and EGA-graphics
* English written manual with about 380 pages
  (includes description for extension levels I and II)
* Installation program


Extension level I for DM 598,-- includes:

* All components of the base-version
* Extensive print- and plot-program for all current printers and plotters in 
  high resolution from DIN A4 up to DIN A0. Also impact-, laser- an color-
  printers. 
* Combination of drawings and cuttingzooms for the printout. Changes in the 
  MegaCad construction- and painting-program ar automatically transferred to 
  the combined drawings of the print- and plot-program.

Extension level II for DM 2.280,-- includes:

* All components of the base version and extension level I
* Paging on the harddisk, i.e. in very large constructions parts, of the RAM 
  will be dispersed to the harddisk.
* Communication-program to other CAD-systems. Output of MegaCad drawings to 
  other CAD-systems by DXF-files and reading of CAD-drawings from other CAD-
  systems (e.g. Autocad 10.0)
* Interface to NC-systems by export of coordinates or geometrical elements.
* Support of high resolution graphic cards.
* Output-program to DTP-systems (e.g. Ventura or Pagemaker) with HPGL-files.


In addition there are available:

Libraries with standard parts for

Electrical engineering                       1100 parts          DM 298,--
Electronics                                   550 parts          DM 298,--
Architecture                                  850 parts          DM 298,--
Junction elements for mechanical engineering  800 parts          DM 298,--

IGES-interface

UNIX-version (available by July 1990)        for the price please contact us

There is no question, that the extension levels are harmonized one to another. 
Controlling of the program is identical in all levels. By purchasing MegaCad 
in several units, already payed fees will be credited. For example if you are 
beginning with the base version and later want to update to the extension 
level I you will only have to pay the difference of DM 300,--. Fees for demo 
or shareware versions will not be credited.

Release: 20. of June, 1990

All prices include the legal VAT
Former prices are no more valid

Please address your orders to: 
                     
Kirschbaum Software GmbH
Kronau 15

D-8091 Emmering b. Wbg.

Phone. germany 08067 / 1016
Fax.   germany 08067 / 1053

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║ <<<<  PC-SIG Disk #2250 MEGACAD Disk 1 of 3 (also #2251,#2252)  >>>>    ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To install MEGACAD, type:  INSTALL                                      ║
║                                                                         ║
║ To start the program, type:  MEGA                                       ║
║                                                                         ║
║ To print the documentation, insert disk# 2250 and type:                 ║
║                                               COPY MEGACAD.DOC PRN      ║
║                                                                         ║
║ To print information on registering MEGACAD, type:                      ║
║                                               COPY BESTELL.TXT PRN      ║
║                                                                         ║
║                                           Copyright 1990, PC-SIG Inc.   ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## TASTEN.DOC

{% raw %}
```
 "a-1"  : Note zoom 1
 "a-2"  : Note zoom 2
 "a-3"  : Note zoom 3
 "a-4"  : Note zoom 4
 "a-5"  : Note zoom 5
 "a-b"  : MODE meet point 1/2
 "a-s"  : MODE intersection point 1/2
 "a-l"  : MODE entity distance
 "a-e"  : MODE end point
 "a-r"  : Round
 "a-p"  : Zoom pan
 "a-t"  : Trim 1
 "c-t"  : Trim 2
 "T"    : Trim 3
 "c"    : Delete
 "w"    : Zoom window
 "t"    : Divide
 "h"    : Zoom factor 0.5 (Halve)
 "r"    : New character (Redraw)
 "a"    : Zoom automatic
 "0"    : Zoom 0 ( 1:1 )
 "1"    : Zoom 1
 "2"    : Zoom 2
 "3"    : Zoom 3
 "4"    : Zoom 4
 "5"    : Zoom 5
 " "    : MODE - Selection
 "S"    : STYLE - Selection
 "f"    : MODE Free
 "g"    : MODE Grid
 "p"    : MODE Point
 "s"    : MODE Intersection point
 "m"    : MODE Centre point
 "b"    : MODE Meet point
 "l"    : MODE Entity
 "e"    : MODE End point
 "k"    : MODE Keyboard
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2250

     Volume in drive A has no label
     Directory of A:\

    ZAHN2    PRT     16683  12-01-88   1:00a
    MOTOR    PRT     13660  12-01-88   1:00a
    WECKUHR  PRT     22408  12-01-88   1:00a
    KOLBEN1  PRT     19559  12-01-88   1:00a
    T1       MAC       296  12-01-88   1:00a
    T2       MAC       296  12-01-88   1:00a
    W1       MAC       218  12-01-88   1:00a
    W2       MAC       322  12-01-88   1:00a
    D1       MAC       192  12-01-88   1:00a
    D3       MAC       348  12-01-88   1:00a
    MEGACAD  DOC    102753   1-10-90  12:29p
    INSTALL  BAT      8000   1-10-90   2:50p
    ENDE     BAK       350   1-01-80  12:20a
    HAUS2    PRT     12855   7-03-89   8:40a
    MENUE1   DAT       975   8-24-90   2:44p
    MENUE2   DAT       847   1-01-80  12:30a
    MENUE3   DAT       975   1-01-80  12:39a
    GETKEY   EXE      7529  12-01-88   1:00a
    LSTYLE   INI       650  11-07-89   4:12p
    TASTEN   DOC       890   1-10-90   2:51p
    README   DOC      5703  10-24-89   6:21p
    BESTELL  TXT      2948   6-20-90   4:09p
    GO       BAT        38   1-01-80   1:37a
    ENDE     DAT       346   8-24-90   2:49p
    GO       TXT      1233   8-24-90   2:38p
           25 file(s)     220074 bytes
                           89088 bytes free
