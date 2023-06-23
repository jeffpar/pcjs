---
layout: page
title: "PC-SIG Diskette Library (Disk #1356)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1356/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1356"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DISK FILE"

    DISK FILE is a simple but complete database program for making your own
    disk labels. It supports IBM/Epson/compatible printers. Note: These
    are ONE-UP gummed labels.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DISKFILE.DOC

{% raw %}
```
                           D I S K - F I L E
                  (c) COPYRIGHTED 1986 PETER T. DYER

     This is a very simple but complete program to make good looking
diskette labels, (rather than using the labels supplied by the disk
maker and packed in every box of diskettes), using your IBM PC or AT.

     To use the program simply enter DISK at the DOS prompt.  A
MENU will appear.  Follow the MENU and you will be taken through the
various features of the program.  IT IS EASY !!!

     Labels are created and stored in the DISKFILE.DBF data base file.
The first line prints in DOUBLE WIDTH print, if you have an IBM, Epson
or compatible printer.  You need to purchase ONE-UP gummed labels.

     If you would like other IBM PC Utilities, simply send me your
name, address, and $10.00, and I'll send you a disk with my latest
collection of neat utilities.  Send your request to the following:

                           Peter T. Dyer
                           138 Kuuhale Street
                           Kailua, HI  96734

```
{% endraw %}

## FILE1356.TXT

{% raw %}
```
Disk No: 1356
Program Title:  DiskFile version 1.6
PC-SIG version: 1.1

Disk File is a simple but complete database program for making disk
labels rather than using the labels supplied by the disk manufacturer.
It supports IBM/Epson/compatible printers.

NOTE: These are ONE-UP gummed labels.

Usage:  Business/Personal.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $5.00

File Descriptions:

COMMENT  MEM  File used by main program.
CONFIG   SYS  Configuration file.
DISK     EXE  Main program.
DISKFILE DBF  Data file.
DISKFILE DOC  Manual.
FILELIST FRM  Data file.
FILES    BAT  Batch file to view FILES.TXT
FILES    TXT  Text file listing files on this disk.
TITLENDX NTX  Index file.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## FILES.TXT

{% raw %}
```

    This diskette contains the following files associated with the
DISK--FILE software for the IBM PC, XT, or AT.

CONFIG.SYS         Set for FILES=20 and BUFFERS=8
DISKFILE.EXE       Main program file for LABEL-IT diskette labeler.
DISKFILE.DBF       Data base data file.
DISKFILE.DOC       Brief explanation of DISKFILE.EXE.
FILES.BAT          Batch file to run FILES.TXT
FILES.TXT          List of files on diskette
READ.BAT           Batch file to run DISKFILE.DOC.
AUTOEXEC.BAT       Batch file to automatically start DISK.EXE
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║           <<<<  Disk No: 1356  DiskFile version 1.5  >>>>               ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To print the manual, type:                                            ║
║                                                                         ║
║                  MANUAL (press enter)                                   ║
║                                                                         ║
║   To run the program, type:                                             ║
║                                                                         ║
║                  DISK (press enter)                                     ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1356

     Volume in drive A has no label
     Directory of A:\

    COMMENT  MEM        69   7-17-89   3:57p
    CONFIG   SYS        21   2-19-89   3:43p
    DISK     EXE    164608   7-17-89   3:53p
    DISKFILE DBF       163   2-19-89   3:45p
    DISKFILE DOC      1057   9-05-86   6:46a
    FILE1356 TXT       881   9-07-89   8:51a
    FILELIST FRM      1990   9-24-86   9:49p
    FILES    BAT        21   9-07-85   7:45p
    FILES    TXT       546   2-19-89   3:44p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1002   3-02-89   9:50a
    MANUAL   BAT       147   1-19-89   9:21a
    TITLENDX NTX      2048   7-09-89   4:19p
           13 file(s)     172591 bytes
                          142336 bytes free
