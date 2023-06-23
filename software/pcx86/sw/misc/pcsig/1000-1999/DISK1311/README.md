---
layout: page
title: "PC-SIG Diskette Library (Disk #1311)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1311/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1311"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "INSULIN"

    INSULIN, BOTTLE, and NO6 are computer tutors that can teach student
    nurses to determine IV rates and measure insulin dosage correctly.
    Repetition of the task with simple on-screen instructions, explanations
    and user-response feedback makes it easy to learn with these programs.
    
    MAKEFILE is a complimentary program to INSULIN that allows for entry of
    new insulin dose values or viewing of students names and scores.
    Determining IV rates for both plain solutions and medication additive
    solutions are covered.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1311.TXT

{% raw %}
```
Disk No: 1311
Program Title: INSULIN
PC-SIG version 1

INSULIN, BOTTLE, and NO6 are computer tutors that can teach student
nurses to determine IV rates and measure insulin dosage correctly.
Repetition of the task with simple on-screen instructions, explanations
and user-response feedback makes it easy to learn with these programs.

MAKEFILE is a compliment program to INSULIN that allows for entry of new
insulin dose values or viewing of students names and scores.
Determining IV rates for both plain solutions and medication additive
solutions are covered.

Usage:  Medication Math for Nurses.

Special Requirements:  None.

How to Start:  Type Go (press enter).

Suggested Registration:  $5.00

File Descriptions:

CALC     COM  Calculates IV drops/min, gives the formula, ask questions.
INSULIN  EXE  Instructs how to measure insulin dosage in a syringe.
MAKEFILE EXE  Accepts data from user for the 2 data files.
NO6      EXE  How to set IV rate for medication additives.
NO7      EXE  How to set IV rate for medication additives.
BOTTLE   EXE  Teaches how to set IV rate.
DOSE     DAT  Data files for insulin doses, user names and scores.
NAME     DAT  Data files for insulin doses, user names and scores.
NOTES    EXE  A text file about author and use of the programs.
NOTES    TXT  Types explanation of what the 4 program EXE files do.
INSULIN  BAS  Unable to load file for list or run (see comments).
GO       BAT  Types NOTES.TXT and starts programs.

PC-SIG
1030D E. Duane Ave.
Sunnyvale  CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG Inc.

```
{% endraw %}

## NOTES.TXT

{% raw %}
```
INSULIN.EXE - May be used to see if insulin is properly measured.  User
measures 10 doses of Insulin using U100 Insulin.

MAKEFILE.EXE - Instructor can enter 10 doses which will be measured by INSULIN.EXE

Also the instructor can see how well the student can measure Insulin.

BOTTLE.EXE - User regulates IV rate.  This program may be used by IBM without
color or graphics.

NO6.EXE & NO7.EXE - User sets IV pump to proper rate to deliver calculated
dose of medication.
  
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1311

     Volume in drive A has no label
     Directory of A:\

    BOTTLE   EXE     43162   9-19-88  12:35a
    CALC     COM     11857   6-19-87   1:32a
    DOSE     DAT        40  10-18-88  10:12p
    FILE1311 TXT      1603   2-23-89   1:44p
    GO       BAT        45  10-27-88  12:15a
    INSULIN  BAS     16392   3-01-87   3:57p
    INSULIN  EXE     51696  10-18-88   8:54p
    MAKEFILE EXE     34978  10-19-88   1:16a
    MANUAL   BAT       151   1-18-89   9:35a
    NAME     DAT        18  11-05-87  12:53a
    NO6      EXE     38724  11-05-87  12:06a
    NO7      EXE     36162  11-05-87  12:47a
    NOTES    EXE     30652  10-19-88   1:03a
    NOTES    TXT       487  10-28-88  11:38p
           14 file(s)     265967 bytes
                           47104 bytes free
