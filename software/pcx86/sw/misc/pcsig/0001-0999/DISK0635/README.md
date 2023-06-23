---
layout: page
title: "PC-SIG Diskette Library (Disk #635)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0635/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0635"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MUSES 1 OF 2 (ALSO 636)"

    MUSE is a specialized database for authors and agents to organize the
    circulation of manuscripts to publishers, especially useful when
    sending multiple or simultaneous submissions. Keep track of queries,
    submissions, publishers' responses, acceptances and publications, as
    well as current mailings. Review the status of any manuscript at any
    publisher at any time. Mail merge the address in the files with
    appropriate form letters and print letters on one printer and
    envelopes on another.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0635.TXT

{% raw %}
```
Disk No:  635
Program Title: MUSES version 3.5 (disk 1 of 2)
PC-SIG version: 1.7

MUSES is for authors and their agents to organize the circulation of
manuscripts to publishers.  It is a specialized database which helps
keep track of publishers' responses as well as current mailings.  It
also mail merges the address in the files with appropriate form letters.

Usage:  Manuscript Tracking

Special Requirements: None.

How to Start: Type GO to start.

Suggested Registration: $15.00

File Descriptions:

DISK1V35 EXE  Self unarchiving program.
HOW-TO        Text file.
README   DOC  Text file.
REPLACE  DOC  Text file.
WARNING       Text file.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## README.DOC

{% raw %}
```
This file contains any late announcements since the current edition of
the MUSES.DOC, the manual.
======================================================================
Where these explanation files refer to DISK?.EXE, your copy may have
DISK?V??.EXE to indicate a version change.  You must enter the full name
of the *.EXE files as you have it in your copy, or you may change the
names to the generic names used in the explanations.
======================================================================

If you have used an earlier version of MUSES, first read REPLACE.DOC,
lest you destroy work you have already done.
======================================================================
All MUSE?.exe files will work on either the two main program disks,  but
you change disk less frequently if you have space to use this combination:
the DISK?.EXE files, namely:

     Disk 1 :   MUSE.EXE   MUSE1.EXE  and MUSE3.EXE
     Disk 2 :   MUSE2.EXE  MUSE4.EXE (may remove after you have installed)


The DISK?.EXE files put MUSE3.EXE on disk 2, so that you will have room for
it if you use MS-DOS versions 3.0 or higher.  Earlier versions leave enough
room for you to put it on disk 1, where it works more efficiently.


In this version, MUSES.DOC (the manual) appears in DISK3.EXE, not in
DISK2.EXE as earlier.  You may put it anywhere else you find room for it.
After you print it, you may prefer to save it only with your original
copies for back-up.

==============================================================

If you want to test MUSES on your hard disk, check your ms-dos directory
for ASSIGN and APPEND (from MS-DOS 3.0+) as ways to make muses treat your hard
disk drive as if it is the A: drive which the distributed installation requires.
Later you will want to install it for your hard drive properly, but this is a
quick way to preview.

```
{% endraw %}

## REPLACE.DOC

{% raw %}
```
This file speaks only to those who have used earlier versions:
===================================================================
I hope that you will enjoy this new version (3.5) of MUSES.

First you must extract the files.  See instructions in HOW-TO on either
distribution disk.

If you have never installed an earlier version, you do not need this
informatino.  Begin afresh with this version.  See HOW-TO and the manual
(MUSES.DOC)

If you have used an earlier version,  you should copy from these new disks ONLY
the files extracted from DISK1.EXE and DISK2.EXE.

Do NOT copy the data files if you have already installed your own data,
lest you lose the work that you have done.  You will need to look at HEAD
and HEADPENN in DISK3.EXE as a model for creating your own heading files,
now required for all letter options.

WARNING:  You will need to run SZ.BAT on each of your own data files (on disk 2)
to strip any ^Z (control Z) markers that older versions of MUSES routinely added
to ends of files.  Otherwise, the new version will not work properly.  This
takes only a few seconds.   Copy SZ.BAT to your data disk (#3).  Then enter

            SZ ?

For ?, substitute the name of each data file (that is, the single letter files
for publishers on hold; and the D? files for circulation data; and any
bibliographical data files you have created with the B option from the main
menu.)

You must also move your all your *.LET to the DATA DISK (#3?) and not keep them
with MUSE3 as earlier versions required.


You should copy SORT.EXE (from your own MS-DOS disk) to your data disk and
then it from your two program disks.  Alternatively, it should be in your
PATH.

Store these new originals in a safe place.

======================================================================

Several users have helped me to provide this new version.  I welcome
all suggestions.

                                 Louie Crew
                                 P. O. Box 1545
                                 Orangeburg, SC 29116





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0635

     Volume in drive A has no label
     Directory of A:\

    DISK1V35 EXE    174604   2-08-89  10:56p
    HOW-TO            1288   2-22-88   4:29p
    README   DOC      1889   5-06-88  11:26p
    REPLACE  DOC      2081   1-14-89   2:49p
    WARNING            996   2-08-89  11:03p
    FILE0635 TXT       782   4-05-89   1:44p
    GO       BAT        38   6-22-89   8:19a
            7 file(s)     181678 bytes
                          137216 bytes free
