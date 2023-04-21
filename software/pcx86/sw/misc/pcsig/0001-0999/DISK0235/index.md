---
layout: page
title: "PC-SIG Diskette Library (Disk #235)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0235/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0235"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PARTS INVENTORY"

    The Parts Inventory Control database program can be used to track
    inventory of parts and service businesses.  It is menu driven and
    fast.  Inventory programs like this one do five things:
    
    1) Decrease the time it takes to record changes in your inventory
    2) Show where your inventory is too large or too small
    3) Provide immediate access to the status of any inventory item
    4) Help you determine your tax liability
    5) Help you spot sales trends and obsolete parts.
    
    Features:
    
    ~ Class supplier
    ~ Manufacturer
    ~ Description
    ~ Part number
    ~ Location
    ~ Date
    ~ Counted
    ~ Items
    ~ Reorders
    ~ Costs
    ~ Receipts
    
    System Requirements: 256K, 2 disk drives, 80-column display, 132-
    column printer
    
    How to Start: Before beginning, read the README and other .DOC files
    for the documentation (Tutorial and a User's Guide).  The program runs
    off INVENT.COM; after that it is menu-driven to get to the other
    modules.
    
    Suggested Registration: $50.00 includes notification of new releases
    and technical support
    
    File Descriptions:
    
    DISKETTE COM  Loaded by INVENT.COM - formats and copies disks
    INVENT   COM  Program driver, enter INVENT from DOS to load and run
    FILE     COM  Loaded by INVENT.COM - create inventory records
    PRINT    COM  Loaded by INVENT.COM - prints current and history reports
    RECORD   COM  Loaded by INVENT.COM - update inventory records
    HISTORY  COM  Loaded by INVENT.COM - transfer data to history disks
    UTILITY  COM  Loaded by INVENT.COM transfers data to DOS-formatted disks
    INVENT   DOC  Tutorial and User's Guide
    NOTICE   DOC  Press release
    AUTOEXEC BAT  Loads INVENT.COM at power on or with Alt, Ctrl, and Del
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES235.TXT

{% raw %}
```
--------------------------------------------------------------------------
Disk No 235   Parts Inventory Control                                v1.2
--------------------------------------------------------------------------
This diskette contains the documentation and program for Parts Inventory
Control, Version 1.1. There are eleven datasets:
 
INVENT   COM  Program driver, enter INVENT from DOS to load and run program
DISKETTE COM  Loaded by INVENT.COM - formats and copies diskettes
FILE     COM  Loaded by INVENT.COM - create inventory records
RECORD   COM  Loaded by INVENT.COM - update inventory records
PRINT    COM  Loaded by INVENT.COM - prints current and history reports
HISTORY  COM  Loaded by INVENT.COM - transfer data to history diskettes
UTILITY  COM  Loaded by INVENT.COM - transfer data to DOS formatted diskettes
INVENT   DOC  Tutorial and User's Guide, print using DOS support  (161K)
README        Notes about files on disk and printing documentation
NOTICE   DOC  Press release
AUTOEXEC BAT  Loads INVENT.COM at power on or with Alt, Ctrl, and Del
 
PC-SIG
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## NOTICE.DOC

{% raw %}
```
INVENT                                                              FREE
________________________________________________________________________

INVENT - "Parts Inventory Control" can be used by small retail
businesses to manage inventory. This program supports the additional
needs of businesses that deal in parts and services, such as motorcycle
and recreational vehicle dealers; auto repair, and implement dealers.

The advantages of this program over other inventory programs is its'
execution speed (written in 8088 assembler), its' data compaction on
diskettes (8191 records which expand to 150 characters each), its'
emphasis on data entry (skip fields, save last used records in memory,
foreground data entry, background diskette and printer operation), its'
sort time, about 20 seconds for 5000 records, and its' search speed
(index in memory). It is menu driven, provides on line help, takes
advantage of the function keys, and, except for monthly history updates,
requires no diskette swapping.

The program provides the following options:

1. Diskette option to format (five 1024 byte sectors per track)
   or backup diskettes.
2. Record option to save supplier and manufacture names, create
   default, and miscellaneous (printer, and financial) data;
   enter inventory data records; and create a sorted index
   (description or part number for each record).
3. File option to count, order (optional, can just use receive),
   receive, sell, return from customer, or return to supplier.
   Printed audit trail, option for estimates, allows function keys
   adjust of selling price, optional sales tax.
4. History option to periodically save sales and financial data.
   Can update daily (optional), monthly, and yearly. Edit programs
   for sale and tax history diskettes. Program to calculate reorder
   point and quantity.
5. Print option for master list, orders, under stock, over stock,
   count/order, sales history, and tax information (LIFO and FIFO).
   Qualified by class, supplier, dates, etc.
6. Utility option to transfer data to DOS format and to adjust
   all selling prices, by class and manufacture.

System requirements: IBM-PC with 256KB memory and two double sided
diskette drives, 132 column printer, 80 column display, and DOS 1.1,
2.0, or 2.1.

Start by reading the dataset README which will explain how to print the
49 page Tutorial and User's Guide, how to copy the program to a DOS
diskette, and how to run the program.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0235

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT        23   2-10-85   4:37p
    DISKETTE COM      3293   9-02-86   6:58p
    FILE     COM     10080   7-25-86   5:13p
    FILES235 TXT      1189   1-30-87   8:41a
    HISTORY  COM      9334   1-11-87  12:50p
    INVENT   COM      2969   1-11-87  10:59a
    INVENT   DOC    160640  10-11-86   3:31p
    NOTICE   DOC      2510   1-11-87  12:59p
    PRINT    COM     11300   7-03-86   9:35a
    README            1358   1-11-87  12:57p
    RECORD   COM      8883   6-12-86   8:29p
    UTILITY  COM      8785  12-01-85   1:30p
           12 file(s)     220364 bytes
                           95232 bytes free
