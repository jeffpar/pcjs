---
layout: page
title: "PC-SIG Diskette Library (Disk #3021)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3021/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3021"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE3021.TXT

{% raw %}
```
Disk No: 3021
Disk Title: Daily Wisdom
PC-SIG Version: S1.0

Program Title: Daily Wisdom
Author Version: 1.0B
Author Registration: $5.00
Special Requirements: 390K free space and Windows 3.x.

DAILY WISDOM is a Windows shareware utility that brings the Bible
to the computer screen, displaying an entire passage in a scrollable
window. A clipboard facility allows copying and editing/usage of the
passage. Passages are selected by date, and the system date can be
changed to read a passage different from the one selected by the
program.

The shareware version contains passages from Proverbs of the KJV Bible
only, although compressed libraries of the text are available upon
registration.  The design of the program allows for a high level of
configuration by the end user.

A good program combining the Bible and Windows, DAILY WISDOM is easy to
install and use and can be a great source of learning.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.
```
{% endraw %}

## README.TXT

{% raw %}
```


Daily Wisdom Installation 1.0b

10/16/91

To install Daily Wisdom on a hard drive, either copy the files to your hard
drive, or execute "INSTALL.EXE" from a floppy drive.  The files needed for
installation are:

1. INSTALL.EXE          - Daily Wisdom Installation program
2. DAYFILES.EXE       - Archived files
3. VBRUN100.DLL      - Dynamic link library

To install, you must have 390k of free disk space.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3021

     Volume in drive A has no label
     Directory of A:\

    DAYFILES EXE     57858  10-16-91   1:12p
    INSTALL  EXE     12553  10-16-91  11:53a
    VBRUN100 DLL    271264   5-10-91   1:00a
    README   TXT       426  10-16-91  12:14p
    GO       BAT        38   1-31-91  12:58a
    GO       TXT       497   3-08-92  10:06p
    FILE3021 TXT      1033   5-29-92   3:56p
            7 file(s)     343669 bytes
                           14336 bytes free
