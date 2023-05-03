---
layout: page
title: "PC-SIG Diskette Library (Disk #904)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0904/
preview: https://pcsigdisks.pcjs.org/pcx86/sw/misc/pcsig/0001-0999/DISK0904/DISK0904.jpg
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0904"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DROEGE 1 OF 2 (ALSO 905)"

    DROEGE (Design Robot for Origination of Exacting Graphic Engineering)
    was created for designing printed circuit photomasters.
    
    DROEGE is a manual CAD system, which means it has no automatic
    functions such as schematic capture, wire listing, routing, parts
    lists, etc. It does provide the computer-aided equivalent of a taped
    master or drawing board with the advantage of always having things in
    perfect registration and the ability to work on selected layers.
    
    General features include a 65" x 65" working area, twelve layers deep,
    with a resolution of 0.001". The output can be scaled, however, so
    what is actually provided is a 65,000 X 65,000 point working space.
    Layers can be turned on and off and assigned any available color.
    Lines, pads, symbols, arcs and labels can be entered. The symbol
    feature is particularly powerful since symbols can be nested up to
    twenty levels deep, allowing the construction of very complex objects
    with a few keystrokes.
    
    Note: This program has a limited documentation file, so it will be
    very helpful if you have prior experience with CAD systems and with
    designing printed circuit boards.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES904.TXT

{% raw %}
```
Disk No  904
Program Title: DROEGE version 1.86 (Disk 1 of 2)
PC-SIG version 1.1
 
DROEGE--Design Robot for Origination of Exacting Graphic
Engineering--was created for designing printed circuit photomasters.  It
is a manual CAD system, which means it does nothing automatically, such
as schematic capture, wire listing, routing, parts lists, etc.  DROEGE
does provide a computer-aided equivalent of a taped master or drawing
board with the advantage that things are always in perfect registration
and one can work on selected layers.
 
General features are a 65" x 65" working area twelve layers deep.
Resolution over this area is 0.001".  The output can be scaled to
anything, however, so what is really provided is a 65,000 X 65,000 point
working space.  The layers can be turned on and off and assigned to any
available color.  Lines, Pads (something a photoplotter can do--a small
object drawn all at once), Symbols (a named collection of other
objects), Arcs, and Labels can be entered.  The Symbol feature is
particularly powerful since Symbols can be nested within Symbols to as
many as twenty levels, allowing construction of very complex objects
with a few keystrokes.
 
You will also need disk #905 to run this program.
 
Usage:  Manual PC Board Layout
 
System Requirements:  Operation requires CGA adapter and 320K memory.
Optional Epson printer.
 
How to Start:  Do not attempt to use this program without reading at least
some of the documentation. To get started, print the file called FIRST.DOC
as follows: type COPY FIRST.DOC PRN (press enter) follow the instructions
given in this document to print the manual.
 
Suggested Registration:  $25.00 initial fee then $25.00 per plot
 
File Descriptions:
 
READ1    ME   Brief program description and file list.
DROEGE   EXE  The DROEGE program.
SETUP    PCD  Data file containing setup conditions for DROEGE.
SETUP    PCS  The initial condition symbol file for DROEGE.
DEMO     PCD  The setup condition file for the DEMO job.
DEMO     PCS  The symbol and job data for the DEMO job.
TUTOR    PCD  The setup condition file for the TUTOR job.
TUTOR    PCS  The symbol and job data for the TUTOR job.
APERDEF  PCD  The setup condition file for the APERDEF job.
APERDEF  PCS  The symbol and job data for the APERDEF job.
KEYBOARD LIB  A library of symbols for the keyboard letters.
ELEC     LIB  A few electronic symbols to get started.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  Disk No 904 DROEGE (Disk 1 of 2)  >>>>               ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation for DROEGE, Type                             ║
║             COPY READ1.ME PRN (press enter)                             ║
║                                                                         ║
║ Do not attempt to use this program without reading at least some of the ║
║ documentation.                                                          ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0904

     Volume in drive A is #904 v1.1
     Directory of A:\

    APERDEF  PCD      1968   8-21-87  10:44p
    APERDEF  PCS     44899   8-21-87  10:44p
    DEMO     PCD      1987   9-07-88  10:27p
    DEMO     PCS    102508   9-07-88  10:29p
    DROEGE   EXE    135230   8-22-88  10:45p
    ELEC     LIB     12874   8-25-86   1:40a
    KEYBOARD LIB     26528  10-14-86   2:14p
    READ1    ME       3262   9-07-88  10:12p
    SETUP    PCD      1893   9-20-88   9:05p
    SETUP    PCS       213   9-07-88   9:45p
    TUTOR    PCD      2032   1-01-80   1:17a
    TUTOR    PCS     15254   1-01-80   1:17a
    FILES904 TXT      2556   9-28-88  11:19a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694   9-26-88   3:43p
           15 file(s)     351936 bytes
                            4096 bytes free

![PC-SIG Library Disk #0904]({{ site.software.pcsigdisks.server }}/pcx86/sw/misc/pcsig/0001-0999/DISK0904/DISK0904.jpg)
