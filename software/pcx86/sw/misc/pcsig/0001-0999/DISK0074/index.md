---
layout: page
title: "PC-SIG Library Disk #74"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0074/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0074"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PASCAL UTILITIES DEMO"

    The Pascal Utilities Package consists of over 70 Pascal callable
    procedures and functions to control the screen, keyboard, graphics,
    light pen, joysticks, music, printers and communication ports.  It
    provides IBM PC DOS Pascal programmers an easy-to-use, yet powerful
    method for utilizing the special features of the IBM PC It is written
    in Assembly language and provides device level control of the IBM PC.
    
    This disk contains all the files from the commercially available
    Pascal Utilities Package except for all the object code modules
    (SLIB.OBJ, ALIB.OBJ, GLIB.OBJ, PLIB.OBJ and GUNIT.OBJ).  The five
    modules include:
    
    SLIB - Screen and Keyboard control.
    PLIB - Peripheral Control (music, printers, communication ports).
    GLIB - Graphics (line drawing graphics - a line, circle/ellipse).
    ALIB - Animation (pattern paint, get picture and put picture).
    GUNIT- Graphics using world coordinates (Window and Viewport
    transformation).
    
    NOTE: THIS PACKAGE IS IBM PC-DOS SPECIFIC.
    
    System Requirements: Two disk drives, PC-DOS, IBM Pascal Compiler
    
    How to Start:  Consult the MANUAL.TXT and your compiler manual.
    
    Suggested Registration: $119.00 gets you the complete package
    including source code and a printed, bound 110 page manual.
    
    File Descriptions:
    
    MANUAL   TXT  Manual for the Pascal utilities.
    DEMOMINI EXE  Demo random number, sound, screen control, and drawing.
    DEMO     EXE  Demostrates music, animation, bar, pie, and screen.
    DEMOS    INC  Interface file for the demos.
    MINI     OBJ  Library object module for the pascal utilities.
    DEMOG    INC  Interface file for the demog.
    DEMOMINI OBJ  Object codes.
    DEMOG    PAS  Source code for graphics and music demo.
    DEMO     PAS  Source code for the main program for demo.exe.
    MINI     INC  Function declarations to be include by the Pascal program.
    GUNIT    INC  Graphics using world coordinated (window and viewport).
    ALIB     INC  Animation (pattern fill, get/put picture)declarations.
    GLIB     INC  Graphics (line drawing) module declarations.
    PLIB     INC  Peripheral control and sound/music module declarations.
    SLIB     INC  Screen/keyboard control module declarations.
    DEMOS    PAS  Source code for displaying a table of color text.
    DEMOMINI PAS  Source codes.
    README        Intro to PASCAL utilities
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #0074

     Volume in drive A has no label
     Directory of A:\

    ALIB     INC       305   6-13-83   7:56p
    CRC      TXT      1406  11-09-84  11:41a
    CRCK4    COM      1536  10-21-82   7:54p
    DEMO     EXE     68864  12-20-83  12:13a
    DEMO     PAS     37765   8-28-83  11:07p
    DEMOG    INC        73   6-15-83   3:11p
    DEMOG    PAS     16257   7-06-83   5:27p
    DEMOMINI EXE     25600   8-30-83   1:52a
    DEMOMINI OBJ      2330   8-30-83   1:51a
    DEMOMINI PAS      2085   8-30-83   1:50a
    DEMOS    INC       197   6-15-83   3:10p
    DEMOS    PAS      7583   7-06-83   5:26p
    GLIB     INC       919   6-15-83  10:01a
    GUNIT    INC       897   6-15-83   9:19a
    MANUAL   TXT    115251   8-29-83  11:27p
    MINI     INC       758   8-30-83   1:16a
    MINI     OBJ       744   8-29-83   9:48p
    PLIB     INC      2674   8-28-83   7:12p
    README            3289   9-05-83   5:02p
    SLIB     INC      1372   8-30-83   1:17a
           20 file(s)     289905 bytes
                           22528 bytes free
