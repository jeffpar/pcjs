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
