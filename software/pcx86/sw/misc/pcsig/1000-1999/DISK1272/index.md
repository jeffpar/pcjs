---
layout: page
title: "PC-SIG Diskette Library (Disk #1272)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1272/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1272"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE1272.TXT

{% raw %}
```
Disk No: 1272
Disk Title: ReSearch (formerly Litigex)
PC-SIG Version: S3

Program Title: ReSearch (formerly Litigex)
Author Version: 1.01

Designed for attorneys, LITIGEX packs the power to document and sort
through caseloads full of research material to find vital evidence.

A research, document, and evidence organizer, LITIGEX lets you enter
notes on evidence or other research, and file up to an eleven line
summary according to source, page, line number and subject.  Notes can
be chained together if 11 lines are inadequate.  Using up to 32,000
entries per hard disk, LITIGEX can file the data under 500 subjects or
types.  Keep tabs on documents or other evidence including who sent it,
where it is located, and where and when it was found.

Scan and find tools are fast and accurate and enable you to sort through
massive files for obscure bits of incriminating data.  The program uses
ASCII, making it compatible with your wordprocessor.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## README.DOC

{% raw %}
```
This disk holds:

         ReSearch, a research- and evidence-tracking database.

IT IS IMPORTANT THAT YOU READ AND COMPLY WITH THESE SIMPLE INSTRUCTIONS.  DO
NOT INSTALL THIS PROGRAM IN ANY MANNER DIFFERENT FROM WHAT IS DESCRIBED
BELOW.


RESEARCH is also contained in a self-extracting archive file: RSCH.EXE.  To
load RESEARCH onto your hard disk and print its instructions, place this disk
into drive A and enter "A:INSTRSCH A: C:" (assuming that your hard disk is
drive C). The program will be automatically placed into a MANAGEX directory on
your hard disk.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1272

     Volume in drive A is DISK1272
     Directory of A:\

    FILE1272 TXT      1076  12-14-89   9:42a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694  12-14-89   9:33a
    INSTALL  BAT       128   2-23-89   8:28p
    INSTRSCH BAT      2532   6-01-89  10:20a
    README   DOC       579  12-14-89   9:28a
    RSCH     EXE    163392   7-14-89   2:49p
            7 file(s)     168439 bytes
                          149504 bytes free
