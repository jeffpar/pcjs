---
layout: page
title: "PC-SIG Diskette Library (Disk #1428)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1428/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1428"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EVERY OTHER PAGE"

    EVERY OTHER PAGE paginates your text files so you can print on the front
    and back of pages while maintaining the proper text sequence.  The
    program saves you paper, helps your documents fit into one binder, and
    gives your reports the look of printed books.
    
    EVERY OTHER PAGE takes any text file and breaks it up into 56 lines per
    page, and into odd pages (1, 3, 5...) which are to be printed on one
    side and even pages (2, 4, 6...) which are printed on the other side.
    First, it prints the odd-numbered pages and when finished, prompts you
    to reverse the paper in the printer so the other side can be printed
    with the even-numbered pages.
    File Descriptions:
    
    CON_TEXT  EXE Main program.
    GO        BAT Batch start file.
    READ      ME  Small documentation file.
    FILES         Small text file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1428.TXT

{% raw %}
```
Disk No: 1428
Program Title: EVERY OTHER PAGE version 1
PC-SIG version 1

EVERY OTHER PAGE paginates your text files so you can print on the front
and back of pages while maintaining the proper text sequence.  The
program saves you paper, helps your documents fit into one binder, and
gives your reports the the look of printed books.

EVERY OTHER PAGE takes any text file and breaks it up into 56 lines per
page, and into odd pages (1,3,5...) which are to be printed on one side
and even pages (2,4,6...), which get printed on the other side.  It then
prints the odd-numbered pages and when finished prompts you to reverse
the paper in the printer so the other side can be printed with the
even-numbered pages.

Synopsis:  Paginates your files into even and odd pages for printing
both sides of a sheet of paper.

Usage:  Printer Utility/Pagination

Special Requirements:  Printer.

How to Start:  Type GO (press enter).

Suggested Registration:  $15.00

File Descriptions:

CON_TEXT  EXE Main program.
GO        BAT Batch start file.
READ      ME  Small documentation file.
FILES         Small text file.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1428

     Volume in drive A has no label
     Directory of A:\

    CON_TEXT EXE     61904   1-13-89   4:11p
    FILE1428 TXT      1245   6-01-89   3:45p
    FILES              544   1-07-89  12:38a
    GO       BAT        20   6-01-89   3:47p
    PAGE     COM       325   1-06-87   4:21p
    READ     ME       3070   1-07-89  12:52p
            6 file(s)      67108 bytes
                           91648 bytes free
