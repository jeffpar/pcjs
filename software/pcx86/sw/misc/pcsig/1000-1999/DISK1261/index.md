---
layout: page
title: "PC-SIG Diskette Library (Disk #1261)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1261/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1261"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "WORDPERFECT 4.2 LEARNING SYSTEM 2 OF 2"

    More than 300 screens are used by this multi-featured tutorial to teach
    you WORDPERFECT v4.2.
    
    Step-by-step, you learn WORDPERFECT commands and gain skills to create,
    edit or modify a document, and set up parameters for page formatting.
    The tutorial shows you how to use the spelling checker and the
    thesaurus, as well as special arithmetic features of WORDPERFECT.  The
    PC novice will find excellent introductory lessons describing hardware,
    DOS and keyboard functions.
    
    WORDPERFECT LEARNING SYSTEM works well for individual use, and classroom
    instruction.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1261.TXT

{% raw %}
```
Disk No: 1261
Program Title:  WORD PERFECT 4.2 LEARNING SYSTEM (Disk 2 of 2)
PC-SIG Version 1

THE WORD PERFECT LEARNING SYSTEM is a two disk set, #1260 and 1261 are
the two disks needed to run this program.  Please refer to disk #1260
for a full description of the program.

Usage: Educational.

Special Requirements: 512K RAM, CGA graphics, WORD PERFECT 4.2 for
sample problems.

How to Start:  Type GO (Press enter).

Suggested Registration:  $79.95.

File Descriptions:

WPL      DBD  Second tutorial program file.
GOHARD   BAT  Batch file for installing program on hard disk.
GOBAT    BAT  Batch file for running program on dual floppy system.
DISK#2        Registration information.
FINISHED TXT  Instructions for installation process.
INSTALL  TXT  Instructions for installation process.
GO       BAT  Executes the tutorial from the hard disk.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1988 PC-SIG, Inc.

```
{% endraw %}

## FINISHED.TXT

{% raw %}
```











The installation process has been completed.  You should have a
sub-directory on the hard drive named WORDPTUT.  All of the files
for running The WordPerfect Learning System have been transferred to
the hard drive and you are ready to use the tutorial.

Change your current drive to C:

Change your current directory to c:\WORDPTUT

Type in the command Go and press <ENTER>


```
{% endraw %}

## INSTALL.TXT

{% raw %}
```
 
 


This will install The Learning System Tutorial on your hard drive

This will create a sub-directory called WORDPTUT and copy all the
files from the floppy diskette to the sub-directory.  

When you are ready to run The WordPerfect LEARNING SYSTEM make the
WORDPTUT sub-directory your current directory.  

The type in the command GO and press <ENTER>.

NOTE! If you are going to run The WordPerfect Learning System on a
floppy diskette system and NOT on a hard drive.....

          PRESS <CTRL> AND <BREAK>

If you are going to use the hard drive to run The WordPerfect 
Learning System, press <ANY KEY> to continue.


```
{% endraw %}

## RUN.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║ <<<<  Disk No: 1261 WORD PERFECT 4.2 LEARNING SYSTEM (Disk 2 of 2)  >>>>║
╠═════════════════════════════════════════════════════════════════════════╣
║ To install the program to your hard disk, insert disk #1260 in drive A: ║
║ and type GOHARD (press enter)                                           ║
║                                                                         ║
║ To run the program from your floppy drive, insert disk #1260 in drive A:║
║ and type GOSOFT (press enter)                                           ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1261

     Volume in drive A has no label
     Directory of A:\

    WP2      DBD    161346  10-26-88   1:06p
    GOHARD   BAT       256   9-15-88  10:13a
    GOSOFT   BAT        32   9-15-88  10:13a
    DISK#2             997  10-27-88  11:13a
    FINISHED TXT       411   9-15-88  10:14a
    RUN      BAT        39   1-13-89   3:45p
    INSTALL  TXT       650   9-16-88   8:48a
    FILE1261 TXT       983  12-14-88  11:01a
    RUN      TXT       694   1-13-89   3:49p
    GO       BAT        32   9-15-88   2:10p
           10 file(s)     165440 bytes
                          151552 bytes free
