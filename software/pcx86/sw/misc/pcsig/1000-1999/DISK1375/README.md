---
layout: page
title: "PC-SIG Diskette Library (Disk #1375)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1375/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1375"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "THE ITEMIZED CALCULATOR"

    ITEMIZED CALCULATOR allows you to create an electronic list of item
    descriptions that automatically tracks quantities, prices, price
    extensions and totals. Whether you're making a shopping list,
    tracking inventory or updating stock portfolio transactions, the
    system does the job in a quick, straightforward manner.
    
    Set up data files to define units to be tracked, the tracking
    category, and the unit costs. Call up the item and enter the number of
    units bought or sold and ITEMIZED CALCULATOR does the rest,
    calculating costs and totals. Sort and print item lists according to
    description, price, or price extension, in ascending or descending
    order. The 60-page on-disk manual is clear and comprehensive.
    
    With the advent of low-cost laptop computers, ITEMIZED CALCULATOR has
    uses ranging from recording rack-jobbing inventory to listing sales,
    revenue and expenses for a flea market operation.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1375.TXT

{% raw %}
```
Disk No: 1375
Program Title:  THE ITEMIZED CALCULATOR
PC-SIG version 1

ITEMIZED CALCULATOR allows you to create an electronic list of item
descriptions which automatically tracks quantities, prices, price
extensions and totals.  Whether you're making a shopping list, tracking
inventory or updating stock portfolio transactions, the system does the
job in a quick, straightforward manner.

The program helps you set up data files to define units to be tracked,
the tracking category and the unit costs.  To use the program, call up
the item and enter the number of units bought or sold and it does the
rest, calculating costs and totals.  It will also sort and print item
lists according to description, price or price extension, in ascending
or descending order.  The sixty-page on-disk manual is clear and
comprehensive.

With the advent of low-cost laptop computers, ITEMIZED CALCULATOR has a
thousand uses ranging from recording rack-jobbing inventory to listing
sales, revenue and expenses for a flea market operation.

Synopsis:  Lets you create self calculating lists of items for taking
inventory, updating your stock portfolio, tracking daily sales.

Usage:  Business/Inventory.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $39.00

File Descriptions:

ICDOC         User guide.
IC       EXE  Main program.
ICPARM   FIL  Data file.
COBRUN   EXE  Subprogram to generate lists and reports.
ICSORT   EXE  Sorting routine.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║             <<<<  Disk No 1375 THE ITEMIZED CALCULATOR  >>>>            ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type IC (press enter)                             ║
║                                                                         ║
║ To view the documentation on your screen, type VIEW (press enter)       ║
║                                                                         ║
║ To copy the documentation to your printer, type MANUAL (press enter)    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1375

     Volume in drive A has no label
     Directory of A:\

    COBRUN   EXE     16593   4-01-84  12:00p
    FILE1375 TXT      1623   5-02-89   3:07p
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       694   5-02-89   3:12p
    IC       EXE     71905  11-11-88   3:36p
    ICDOC            69020  11-11-88   1:41p
    ICPARM   FIL       256   1-01-80  12:03a
    ICSORT   EXE     42561   7-09-85  10:10a
    MANUAL   BAT       147   5-02-89   3:13p
    PAGE     COM       325   1-06-87   4:21p
    VIEW     BAT        37   5-02-89   3:18p
           11 file(s)     203199 bytes
                          111616 bytes free
