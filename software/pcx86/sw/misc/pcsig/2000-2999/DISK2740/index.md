---
layout: page
title: "PC-SIG Diskette Library (Disk #2740)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2740/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2740"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2740.TXT

{% raw %}
```
Disk No: 2740
Disk Title: Workbase & Recap
PC-SIG Version: S1

Program Title: Workbase
Author Version: 3.2
Author Registration: $49.00
Special Requirements: 512K RAM.  Knowledge of Clipper or dBASE recommend

Designed with the serious database developer in mind, WORKBASE provides
an interactive environment for dBASE language commands, including some
that may be new to you.

Features include:

~ Create a DBF file; append a DBF file

~ Edit and browse records

~ Restore from and save to MEM files

~ Display memory

~ Display structure

~ Modify structure

~ and many other commands necessary for development, troubleshooting,
and support

The current version includes a simple PRG interpreter.  If your
applications use dBASE-compatible DBF files, you'll love this handy
utility.  Unlike other ``dot prompt'' programs, this one works!
Everything you need to create and manipulate dBASE III data, memo, and
index files is here.

Program Title: Recap
Author Version: 2.1
Author Registration: $15.00
Special Requirements: dBASE III-compatible database file.

It can be very frustrating to find that some of your database records
have been entered in caps when you didn't want them that way, or that
some have not been entered in caps when you wanted caps.  RECAP will go
through any dBASE III-compatible file and make the desired adjustments.
Save yourself hours of re-entering data.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1991 PC-SIG, Inc.
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║             <<<<  PC-SIG Disk #2740 WORKBASE & RECAP  >>>>              ║
╠═════════════════════════════════════════════════════════════════════════╣
║ Create a subdirectory on your hard drive for each program and copy all  ║
║ appropriate files respectively.                                         ║
║                                                                         ║
║   To create a subdirectory, go to the drive you want and type:          ║
║     MD [subdirectory name]                                              ║
║   To copy all the files to the hard drive, type:                        ║
║     COPY [source drive]:[filename.EXE] [destination drive]:\subdirectory║
║                                                                         ║
║ To extract the files, type: REKAP    (press enter)                      ║
║                             WORKBS   (press enter)                      ║
║                                                                         ║
║ To print or view documentation for WORKBASE after extraction,           ║
║                       type: WORKDOC  (press enter)                      ║
║                                                                         ║
║ To run WORKBASE after extraction, type: WORKBASE  (press enter)         ║
║                                                                         ║
║ To print documentation for RECAP, type: COPY RECAP.DOC PRN (press enter)║
║                                                                         ║
║ To run the RECAP after extraction, type: RECAP (press enter)            ║
║                                                                         ║
║                                        (c) Copyright 1991, PC-SIG Inc.  ║
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2740

     Volume in drive A has no label
     Directory of A:\

    WORKBS   EXE    224422   7-08-91   7:46a
    REKAP    EXE    116285   7-08-91   7:49a
    GO       BAT        38   6-21-91   2:37a
    FILE2740 TXT      1538   7-23-91  12:22a
    GO       TXT      1849   8-07-91   8:31a
            5 file(s)     344132 bytes
                           15360 bytes free
