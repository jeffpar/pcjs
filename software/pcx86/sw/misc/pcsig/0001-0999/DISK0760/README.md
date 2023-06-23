---
layout: page
title: "PC-SIG Diskette Library (Disk #760)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0760/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0760"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MINIGEN"

    MINIGEN is a screen generator that creates Turbo Pascal code for either
    color or monochrome displays.  You can paint data-entry screens
    (constants areas and data fields), open and close windows with borders
    and cursor memory, perform controlled data entry, and create pull-down
    menus.
    
    MINIGEN produces Turbo Pascal code which you can later add to your
    programs.  It is entirely written in Turbo Pascal using the same source
    code routines provided on the disk.  Also included is a TPU for
    accessing Microsoft-compatible mouse drivers.
    
    Since this is a programming aid, the documentation assumes you already
    know how to program in Turbo Pascal.  It also assumes knowledge of DOS
    and jumps right in describing the various functions and how to use them.
    
    This program is primarily for intermediate to experienced users, and not
    the novice.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES760.TXT

{% raw %}
```
Disk No:  760
Program Title: MINIGEN version 2.0
PC-SIG version:  2

MINIGEN is a Turbo Pascal(tm) screen code generator designed to work on
an IBM PC or compatible with a MonoChrome or Color Graphics Adapter
installed.  With it you can paint data entry screens (constants areas
and data fields), open and close windows with borders and cursor memory,
perform controlled data entry and create pull down menus.

MINIGEN produces Turbo Pascal code to be used in programs which you are
writing.  MiniGen is entirely written in Turbo Pascal using the same
source code routines provided on this disk.  A TPU for accessing
MicroSoft compatible mouse drivers is included.

Since this is a programming aid, the documentation assumes that you
already know how to program in Turbo Pascal.  It also assumes knowledge
of DOS and jumps right in describing the various functions and how to
use them.

This program is designed primarily for intermediate to experienced users
and not for the novice.

Usage:  Programming.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $10.00

File Descriptions:

CURDATE  INC  Returns a string containing the system date.
CURSOR   INC  Some useful cursor control routines.
CURTIME  INC  Returns a string containing the system time.
EXIST    INC  A modification of Borland's Exist routine.
MGMOUSE  DOC  Documentation for MgMouse.TPU
MGMOUSE  TPU  Mouse driver support.
MGPROG   TPU  Pascal unit for windowing, data entry and pull down menus.
MGSKEL   PAS  Skeleton program for use with .INC routines and MgProg.TPU.
MINIGEN  DOC  System Documentation.
MINIGEN  EXE  Screen painter / code generator program.
MOUSTEST PAS  MgMouse demonstration program source code.
WIDGIT   DAT  Stored data file for demo program data entry screen.
WIDGIT   INC  Generated procedure for the screen held in WIDGIT.DAT.
WIDGIT   PAS  Demonstration data entry program.
WNDODEMO PAS  Demonstration windowing program.

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
║                  <<<<  Disk #760 MINIGEN  >>>>                          ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  To Print the documentation for MINIGEN type the command:               ║
║             MANUAL (press enter)                                        ║
║                                                                         ║
║  To start the program type MINIGEN  (press enter)                       ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0760

     Volume in drive A has no label
     Directory of A:\

    CURDATE  INC       521  12-09-87   8:32a
    CURSOR   INC       464   2-04-88   7:31a
    CURTIME  INC       754  11-15-87  11:28p
    EXIST    INC       172  12-08-87   9:51p
    FILES760 TXT      2121   6-22-89   9:32a
    GO       BAT        38   5-19-87   4:47p
    GO       TXT       773   3-20-89   2:37p
    MGMOUSE  DOC     16085   4-29-89   6:10a
    MGMOUSE  TPU      4656   3-13-89  10:11p
    MGPROG   TPU     16240   3-13-89  10:09p
    MGSKEL   PAS       603   1-16-88  10:41a
    MINIGEN  DOC     40016   4-29-89   6:09a
    MINIGEN  EXE     75712   3-19-89  12:49p
    MOUSTEST PAS      8282   3-14-88  12:48p
    WIDGIT   DAT      3690   1-31-88  11:52a
    WIDGIT   INC      2855   1-29-88   8:58a
    WIDGIT   PAS      5685   2-20-88   6:50p
    WNDODEMO PAS      1231  11-11-87   9:11p
           18 file(s)     179898 bytes
                          133120 bytes free
