---
layout: page
title: "PC-SIG Diskette Library (Disk #251)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0251/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0251"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TIME AND MONEY"

    A simple financial record-keeping system for the home or small
    business. Finally, you can know just where all the money goes!
    
    Design and keep a budget, create financial plans, track cash outlay, and
    analyze rent/buy options. Track bank accounts, manage your checkbook,
    and monitor your use of charge cards. Select menu options to project
    future plans and analyze specific financial alternatives. The system
    makes graphs of projected cash use for up to a year in the future.
    Use TIME AND MONEY to help take control of your financial life!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES251.TXT

{% raw %}
```
Disk No  251
Program Title: TIME AND MONEY version 2.1
PC-SIG version 1.5

TIME AND MONEY is a simple financial record-keeping system that also
keeps a budget, calculates interest, compares rent/buy options, and more.
You can call up any of the programs on this disk from the menus
displayed. This version of the program has been translated into Turbo
BASIC and upgraded. It now sorts 10 times faster, handles three times as
many transactions, and has graphics.

Usage:  Business / Personal Record Keeping System.

System Requirements:  None.

How to Start:  Type TAMSTART (press enter).

Suggested Registration:  $25.00

File Descriptions:

README        How to get started.
TAMSTART EXE  Brings up the main menu.
TAMCHN?? TBC  Loadable Modules (overlays) of the program.
BUDCODES      User changeable budget categories.
TRANS         Example financial records (transactions) for a typical
              family.
BUDGET1       Example budget for a typical family.
PLAN1         Example financial plan for a typical family.

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
║             <<<< Disk No 251  TIME AND MONEY Ver. 2.1 >>>>              ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To print the documentation, type:                                     ║
║                  MANUAL (press enter)                                   ║
║                                                                         ║
║   To run the program, type:                                             ║
║                  TAMSTART (press enter)                                 ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0251

     Volume in drive A has no label
     Directory of A:\

    BUDCODES           896   9-01-88  12:35a
    BUDGET1            187   9-01-88  12:42a
    FILES251 TXT      1161   9-02-88   8:59a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       848   8-17-88   8:47a
    MANUAL   BAT        18   8-17-88   8:47a
    PLAN1             2156   9-01-88  12:40a
    README            1664   9-01-88  12:05a
    TAMCHNA  TBC     30660   9-01-88  12:22a
    TAMCHNB  TBC     52015   9-01-88  12:36a
    TAMCHNC  TBC     17496   9-01-88  12:42a
    TAMCHND  TBC     41869   9-01-88  12:45a
    TAMCHNE  TBC     12963   9-01-88  12:48a
    TAMCHNF  TBC     25741   9-01-88  12:50a
    TAMSTART EXE     66956   9-01-88  12:32a
    TRANS             6400   9-01-88  12:39a
           16 file(s)     261068 bytes
                           52224 bytes free
