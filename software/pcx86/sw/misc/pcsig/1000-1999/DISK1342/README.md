---
layout: page
title: "PC-SIG Diskette Library (Disk #1342)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1342/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1342"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MORTPLAN"

    MORTPLAN provides menu-driven ease for calculating home loans.  It
    calculates a standard mortgage for principle amounts up to
    $99,999,999.99 and interest rates up to 35.000%, and saves the results
    to disk.  Random additional payments can be used and the results
    analyzed.  It has a section for comparing a range of interest rates and
    a range of loan amounts at the same time.  There is also provision for
    variable rate loans.  All output can be directed to either the screen or
    the printer.
    
    MORTPLAN provides menu-driven ease for calculating home loans.  It
    calculates a standard mortgage for principle amounts up to
    $99,999,999.99 and interest rates up to 35.000%, and saves the results
    to disk.  Random additional payments can be used and the results
    analyzed.  It has a section for comparing a range of interest rates and
    a range of loan amounts at the same time.  There is also provision for
    variable rate loans.  All output can be directed to either the screen or
    the printer.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1342.TXT

{% raw %}
```
Disk No: 1342
Program Title:  MORTPLAN version 3.0
PC-SIG version: 1.1

MORTPLAN provides menu driven ease for calculating home loans.  It
calculates a standard mortgage for principle amounts up to
$99,999,999.99 and interest rates up to 35.000%, and saves the results
to disk.  Random additional payments can be used and the results
analyzed.  It has a section for comparing a range of interest rates and
a range of loan amounts at the same time.  There is also provision for
variable rate loans.  All output can be directed to either the screen or
the printer.

Usage:  Financial Application.

Special Requirements:  None.

How to Start:  Type  GO (press enter).

Suggested Registration:  $30.00

File Descriptions:

AMORTMST FIL  Data file.
AMORTPRT DRV  Data file.
MORTHELP FIL  Data file.
MORTPLAN DOC  Documentation for MORTPLAN.EXE.
MORTPLAN EXE  Main MORTPLAN program.
README   CIS  Text file.
SAMPLE   PMT  Data file.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                     <<<< Disk #1342 MORTPLAN  >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation for MORTPLAN, type MANUAL (press enter)      ║
║                                                                         ║
║ To start the program, type: MORTPLAN (press enter)                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1342

     Volume in drive A has no label
     Directory of A:\

    AMORTMST FIL     71604  10-07-88  12:10p
    AMORTPRT DRV        40  10-07-88  12:10p
    FILE1342 TXT      1063   4-26-89   9:02a
    GO       BAT        38   1-20-89  10:04a
    GO       TXT       540   3-27-89  12:32p
    MANUAL   BAT       147   1-20-89  10:03a
    MORTHELP FIL      8610   3-29-88   9:06a
    MORTPLAN DOC     51943   1-24-89   8:52p
    MORTPLAN EXE    125488  12-01-88  10:22a
    README   CIS       470  12-01-88  11:04a
    SAMPLE   PMT      4048  10-05-88   8:32p
           11 file(s)     263991 bytes
                           52224 bytes free
