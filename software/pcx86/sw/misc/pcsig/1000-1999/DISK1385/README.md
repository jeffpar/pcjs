---
layout: page
title: "PC-SIG Diskette Library (Disk #1385)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1385/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1385"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HDBCALC"

    HBDCALC is a 16-bit calculator made for programmers. Perform binary,
    decimal, or hexadecimal calculations or mix the three number bases and
    display the answer in all three. Convert a number from one base to
    another instantly. Handle both mathematical and logical operations
    including: ADD, SUB, SHR, SHL, AND, NOT, XOR and OR functions. The
    CPU's sign and carry flags are also displayed.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1385.TXT

{% raw %}
```
Disk No: 1385
Program Title:  HDBCALC version 1.0
PC-SIG version 1

HBDCALC is a 16-bit calculator made for programmers.  It performs
calculations entered in hexadecimal, decimal or binary, or a mix of the
three and shows the answer in all three number bases.  Converting a
number from one base to another is instantly done.  Both mathematical
and logical operations are handled, including add, subtract, SHR, SHL,
AND, NOT, XOR and OR functions.

Synopsis:  16-bit calculator handles hex, decimal and/or binary
computations.  A programmer's delight.

Usage:  Programming/Math/Calculator.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $10.00 entitles you to a memory resident
version of the program.

File Descriptions:

HDBCALC  COM  Main program.
HDBCALC  DOC  User guide.

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
║                    <<<<  Disk No 1385 HDBCALC  >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type HDBCALC (press enter)                        ║
║                                                                         ║
║ To view the documentation on your screen, type VIEW (press enter)       ║
║                                                                         ║
║ To copy the documentation to your printer, type MANUAL (press enter)    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1385

     Volume in drive A has no label
     Directory of A:\

    FILE1385 TXT       956   5-04-89   3:34p
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       694   5-04-89   3:38p
    HDBCALC  COM      8677   5-26-88  12:00p
    HDBCALC  DOC      5069   5-26-88  12:00p
    MANUAL   BAT       147   5-04-89   3:39p
    PAGE     COM       325   1-06-87   4:21p
    VIEW     BAT        37   5-04-89   3:38p
            8 file(s)      15943 bytes
                          142336 bytes free
