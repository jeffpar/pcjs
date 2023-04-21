---
layout: page
title: "PC-SIG Diskette Library (Disk #1052)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1052/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1052"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FINDATA CORPORATE PROFILE 2 OF 2 (1051)"

    FINDATA CORPORATE PROFILE is a well-documented, two-disk set of data on
    over 4,000 publicly-traded corporations.  It operates as a database
    within any system that reads dBase III files or can use its own built-in
    database system.  Corporate data supplied includes: ticker symbol, name,
    address, city, state, zip code, telephone, president's name, type of
    industry, industry code, stock exchange code, year of latest data,
    company's fiscal year, annual sales, after-tax profits, earnings per
    share, average number of shares outstanding, sales margin, the high and
    low stock market price, and the high and low price-to-earnings ratio.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1052.TXT

{% raw %}
```
Disk No: 1052
Program Title:  FINDATA CORPORATE PROFILE DATA (Disk 2 of 2)
PC-SIG version:  1.3

This is the second disk of a two-disk set.  Both disks #1051 and #1052
are required to run the program.  For a full description, refer to disk
number #1051.

Usage:  Business Applications.

Special Requirements:  PC-FILE+ or dBASE III, and a hard drive with at
least 1.5 MB of available space.

How to Start:  Type GO (press enter).

Suggested Registration:  $55.00, with quarterly updates available for
$45.00 per calendar quarter.

File Descriptions:

FLOP     BAT  Batch file to install files to floppy disks.
HARD     BAT  Batch file to install files to your hard drive.
PKXARC   COM  Unarchiving program to unarchive FINDAT.ARC.
FINDAT   ARC  Archived file containing data and header files.

PC-SIG
1030D E Duane Avenue
Sunnyvale, CA   94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1052

     Volume in drive A has no label
     Directory of A:\

    FILE1052 TXT       928   9-08-89   8:51a
    FINDAT   ARC    265824   9-05-89   9:02a
    FLOP     BAT       948   5-26-88  12:35p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1156   9-08-89   8:52a
    HARD     BAT       372   5-26-88  12:37p
    PKXARC   COM     12242   4-27-87
            7 file(s)     281508 bytes
                           37888 bytes free
