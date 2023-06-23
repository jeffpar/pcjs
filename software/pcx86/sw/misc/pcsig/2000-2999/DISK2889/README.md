---
layout: page
title: "PC-SIG Diskette Library (Disk #2889)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2889/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2889"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2889.TXT

{% raw %}
```
Disk No: 2889
Disk Title: PREP
PC-SIG Version: S1.3

Program Title: PREP
Author Version: 1.3
Author Registration: $30.00
Special Requirements: 512K RAM and two floppy drives.

PREP is a Multiple Choice, True/False question authoring system for text
questions.  It can assist the user in developing question sets for
manual or computer aided testing.  In addition, PREP allows the user to
analyze both group and individual results. Following is a summary of
features contained in the PREP and the Run-Time programs created using
PREP:

~ Create question set of up to 200 multiple choice questions.

~ Create question sub-sets from master question set.

~ Retrieve results from files containing individual results.

~ Maintain a list of 300 individual results which can be saved.

~ View individual results on a group basis or individually.

~ View group summary results of missed questions.

~ Print test, answer sheet, results.

~ Print questions to disk for use with a word processor.

~ Provides context sensitive help throughout the program.

~ Create a run-time version of questions as a test program.

~ Create a run-time version of questions as a drill program.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  PC-SIG Disk #2889 PREP  >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║  First extract files to a subdirectory by typing:                       ║
║                               PREPZIP [drive:\directory]  (press Enter) ║
║                                                                         ║
║  To print documentation, type:  COPY PREP.DOC PRN  (press Enter)        ║
║                                                                         ║
║  To print starting instructions, type:  COPY README.TXT PRN             ║
║                                                        (press Enter)    ║
║                                                                         ║
║  To start the program, type:  PREP  (press Enter)                       ║
║                                                                         ║
║  To print registration form, type:  COPY REGISTER.DOC PRN (press Enter) ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1992, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## VENDOR.TXT

{% raw %}
```

Southwind   Software
P.O. Box 273228
Concord, CA., 94527-3228


Reason for Re-Issue:  Maintenance upgrade to PREP v 1.3


Product:  PREP v 1.3

Needs: IBM PC, Dos 2.1 or greater.  512K.

Author:  Southwind Software

Registration: $35.00 for Disks & Documentation,  (Registration
only: $25.00)

Look for:  PREP.ZIP in IBMAPPS forum LIB 11, or contact user
70401,3026 (Compuserve)

Download size:  180k.

Description:
A program that can be used to create multiple choice, true/false
run-time programs on any subject.  Excellent study aid for
students.  Menu-driven with context sensitive help throughout. 
PREP provides extensive review opportunities for student/group
results.  Question sets can contain up to 200 questions with 5
possible choices and responses for correct and incorrect
answers.  Prints questions to printer or text file.

Support:  By Mail or via Compuserve  email,  CIS: 70401, 3026

FIles contained in PREPZIP.EXE:

PREP.EXE............Main Program
PREP.DOC............Documentation
PREP.HLP............HELP info for Main Program
PREP_ASK.EXE........Executable Overlay for Test/Drill Program
SAMPLE.OVL..........Sample Question Set
SAMPLE.LST..........Sample Group List
REGISTER.DOC........Registration form
README.TXT..........Getting Started
OMBUDSMN.ASP........ASP statement
SHAREW.PRN..........Shareware information, Warranty, Support
AVEXTRA.TXT.........PKZIP authenticity statement for unpack.
VENDOR.DOC..........Information for Vendor distribution.

The disk provided contains the self-extracting file PREPZIP.EXE
and uses PKZIP's authenticity verification.  Also contained on
the disk is the file VENDOR.TXT which contains an ASCII copy of
this letter for your use (need not be distributed with program).

Any questions or recommendations are appreciated.

Thanks for your support !!


Jim Suhling
Southwind Software

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2889

     Volume in drive A has no label
     Directory of A:\

    PREPZIP  EXE    191514   1-08-92   9:24p
    VENDOR   TXT      1910   1-12-92   9:02p
    FILE2889 TXT      1311   4-28-92   5:12p
    GO       BAT        38   1-31-91  12:58a
    GO       TXT      1386   4-28-92   5:11p
            5 file(s)     196159 bytes
                          122880 bytes free
