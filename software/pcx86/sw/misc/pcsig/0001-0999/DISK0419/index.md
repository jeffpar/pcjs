---
layout: page
title: "PC-SIG Diskette Library (Disk #419)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0419/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0419"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "QPARSER PLUS"

    Here is the public domain version of QPARSER, a tool for writing
    translators, compilers, assemblers, and other language parsing
    programs. This disk has the full QPARSER software but it is limited
    with a top limit of 25 production/parsing rules.  QPARSER is an
    excellent way to experiment with language design and compiler
    development.  Very useful for computer science students.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES419.TXT

{% raw %}
```
Disk No:  419
Program Title:  QPARSER PLUS
PC-SIG version: 3.2

Here is the public domain version of QPARSER, a tool for writing
translators, compilers, assemblers, and other language parsing programs.
This disk contains the full QPARSER software but it is limited in that
it has a top limit of 25 production/parsing rules.  QPARSER is an
excellent way to experiment with language design and compiler
development.  Very useful for computer science students.

Usage:  Programming.

Special Requirements:  A hard disk is recommended.

How to Start:  Type GO (press enter).

Suggested Registration:  $10.00

File Descriptions:

ARCX     COM  Unarchiving program.
QPDEMO   ARC  QPARSER files in archived format.
QPDEMO2  ARC  QPARSER files in archived format.
README   DOC  Note on where to get full QPARSER SYSTEM

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1986,87,88,89 PC-SIG, Inc.

```
{% endraw %}

## README.DOC

{% raw %}
```

Greetings!

Thank you for using the QPARSER+ demonstration disk.  You may be quite
surprised to find that this disk contains only four files.  There are
actually many more files on the disk, but they have all been squeezed into
two files -- qpdemo.arc and qpdemo2.arc.  We have included an unsqueezing
program on the disk called ARCX.  ARCX will unsqueeze the files from the
demo disk and place them onto another disk.  If you have a hard disk
drive, you should:

1) Create a temporary directory on your hard disk drive

  C:> mkdir demo

2) Go into the new directory

  C:> cd demo

3) Switch back to the drive which contains the demo

  C:> A:

4) Start the ARCX program with the following parameters

  A:> ARCX a:* c:

This will load all of the compressed files into the demo directory of
your hard disk.  The automated parts of the demo will create new files
on the disk, so make sure that you have some available space on your
hard disk.

Instructions for running the automated parts of the demo are contained
in the compressed file called READ.ME.

-------------------------------------------------------------------------------
               INSTRUCTIONS FOR UNSQUEEZING TO TWO FLOPPY DISKS

Before we begin, you should prepare two blank formatted floppy disks.
Insert the demo disk in drive A: and one of the blank disks into drive B:
Execute the command line:

1) arcx a:qpdemo.arc b:

This will load the first set of demo files onto the floppy in drive B:.
Take this floppy out of drive B: and insert the second blank floppy into drive
B: Execute the command line:

2) arcx a:qpdemo2.arc b:

This will load the second set of demo files onto the second blank disk.  Now
remove the demo disk from drive A: and re-insert the disk which contains
the first set of unsqueezed files into drive A:.  There should be a file on
this disk called READ.ME which will provide you with further instructions.

If you have any problems or questions, feel free to call us at:

QCAD SYSTEMS
1164 HYDE AVE.
San Jose, CA 95129
(408) 995-6884

Have Fun !







```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0419

     Volume in drive A has no label
     Directory of A:\

    ARCX     COM      7808   7-28-86
    FILES419 TXT       955   4-24-89  10:31a
    GO       BAT        38   6-10-87   3:00p
    GO       TXT       386   4-24-89  10:26a
    PAGE     COM       325   1-06-87   4:21p
    QPDEMO   ARC    199380   7-28-87  12:45p
    QPDEMO2  ARC     97623   3-30-87  10:39a
    README   DOC      2122   7-28-87  12:33p
    VIEW     BAT        37   4-24-89  10:25a
            9 file(s)     308674 bytes
                            8192 bytes free
