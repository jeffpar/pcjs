---
layout: page
title: "PC-SIG Diskette Library (Disk #1297)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1297/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1297"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LABEL CMT"

    This simple program prints labels in any size up to 5.2 x 2.3 inches
    including regular address labels (3.5" x 0.7"), or file folder work
    labels (3.2" x 2.3").
    
    Labels are shown on the screen letting you see what you are going to
    get.  Size of type is standard with no options.  You can save labels to
    a library, print one or more copies of the same label, and optionally
    pause the printer after each label is printed.  LABEL CMT is most
    useful
    for creating labels that do not need to be part of a database, such as
    return address, file folder, or inventory/bin type labels.  The program
    is menu-driven with on-screen help.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1297.TXT

{% raw %}
```
Disk No: 1297
Program Title:  LABEL CMT version 1.0
PC-SIG version 1

This simple program prints labels in any size up to 5.2 x 2.3 inches
including regular address labels (3.5" by 0.7"), or file folder work
labels (3.2" by 2.3").

Labels are shown on the screen letting you see what you are going to
get.  Size of type is standard with no options.  You can save labels to
a library, print one or more copies of the same label, and optionally
pause the printer after each label is printed.  LABEL CMT is most useful
for creating labels that do not need to be part of a database, such as
return address, file folder, or inventory/bin type labels.  The program
is menu-driven with on-screen help.

Usage:  Labels.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $20.00

File Descriptions:

CMTDTA1  CMT  Data file.
CMTWORK1 CMT  Data file.
CMTDIR1  CMT  Data file.
LABELCMT EXE  Main program.
MANUAL1  CMT  Online help file.
MANUAL1  NTX  Online help file.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1297

     Volume in drive A has no label
     Directory of A:\

    CMTDIR1  CMT       480   4-12-88   5:04p
    CMTDTA1  CMT      1090   4-12-88   5:04p
    CMTWORK1 CMT       430   2-10-88   6:55p
    FILE1297 TXT      1139   2-23-89  12:46p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694  12-20-88   3:07p
    LABELCMT EXE    207612   4-19-88  10:21a
    MANUAL1  CMT     10240   3-31-88  12:43p
    MANUAL1  NTX      6144   3-31-88  12:44p
            9 file(s)     227867 bytes
                           90112 bytes free
