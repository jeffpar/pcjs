---
layout: page
title: "PC-SIG Diskette Library (Disk #845)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0845/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0845"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "COST EFFECTIVE TRACKING SYSTEM"

    Are you having a hard time figuring the cost of that construction job?
    COST EFFECTIVE is here to help you out. COST EFFECTIVE keeps track of
    your raw materials and their prices. When you have a job to do, you
    tell the program what you will be needing and COST EFFECTIVE will tell
    you what the price will be.
    
    Raw materials are never going to be the same price from day to day, this
    why COST EFFECTIVE also allows you to enter new prices for your raw
    materials and get a new estimate. Reports like raw materials listings a
    prices can be printed from the program.
    
    The program is fully menu-driven and there are help screens available at
    any point in the program. You will find COST EFFECTIVE a great asset
    your company if raw materials are a part of your productions.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES845.TXT

{% raw %}
```
Disk No:  845
Program Title:  COST EFFECTIVE  version 1.10
PC-SIG version 1.1

COST EFFECTIVE is a program that processes bills of materials.  It is
useful to manufacturers who needs to keep track of manufactured product
costs due to fluctuations in the cost of raw materials.  This program
allows the user to specify raw materials and their unit costs, and
computes the cost of each product based upon these entries.  When the
price of the raw materials changes, the program recomputes the costs
automatically.  Materials and costs are entered into tables, which are
used by the program to provide information concerning the manufacturing
operation.

COST EFFECTIVE has other features, such as displaying a list of products
by material.  It comes on two diskettes and is best run from its own
subdirectory on a hard disk.  It can be run on a floppy, but without
on-line help.

Usage:  Financial/Manufacturing.

Special Requirements:  None.

How to Start:  Type GO (press return).

Suggested Registration:  None.

File Descriptions:

CEF      BAT  Batch file to start COST EFFECTIVE without help files.
CEF      VOL  Subsidiary volume containing system and application files.
PSYSTEM  COM  Program to run P-SYSTEM under PC-DOS.
MANUAL   CEF  The COST EFFECTIVE manual.
CHEMS    CED  Sample data (product) file.
COOKIES  CED  Sample data (product) file.
FILES    DOC  Text file which outlines the files on this disk.
READ     ME   Introductory text file.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk #845 COST EFFECTIVE  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation to your printer type;                         ║
║                         COPY MANUAL.CEF PRN (press enter)               ║
║                                                                         ║
║ To start the program, type; CEF (press enter)                           ║
║                                                                         ║
║ Please Note: If you have a Leading Edge Model D this program will not   ║
║ function correctly.                                                     ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0845

     Volume in drive A has no label
     Directory of A:\

    CEF      BAT        34   6-23-87   6:17p
    CEF      VOL    284160  10-15-87  12:01p
    CHEMS    CED     10240   5-13-87   5:06p
    COOKIES  CED     11776   8-21-87  10:07a
    FILES    DOC       617   8-31-87   6:02p
    FILES845 TXT      1599  10-28-88   9:46a
    GO       BAT        38  10-15-87  11:57a
    GO       TXT       848  10-19-88   8:15a
    MANUAL   CEF     28160  10-09-87  10:00p
    PSYSTEM  COM      4096   6-22-87
    READ     ME       4123   9-01-87   9:57a
           11 file(s)     345691 bytes
                           11264 bytes free
