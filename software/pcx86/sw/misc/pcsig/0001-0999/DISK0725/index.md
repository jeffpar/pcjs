---
layout: page
title: "PC-SIG Diskette Library (Disk #725)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0725/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0725"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "TURNKEY DEMO"

    TURNKEY helps you set up your computer as a menu-driven system.  You
    construct and edit menu choices to your liking (the words you want
    displayed on the menu).  Then it lets you specify what will happen for
    each item in the menu by helping you write simple batch files that
    correspond to the menu choice.  TURNKEY can then pop up a menu with
    your choices and let you run a program simply by moving the cursor to
    your choice and pressing enter.  When you finish running your program,
    you are returned to the menu.
    File Descriptions:
    
    INSTALL  BAT  Installation batch file
    README        Introductory text file
    TK31     PGM  Main program file
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES725.TXT

{% raw %}
```
Disk No  725
Program Title: Turnkey version 3.1 (Demo version)
PC-SIG version 1.2
 
TURNKEY is a program which helps you to set up your computer as a
menu-driven system.  You construct and edit menu choices to your liking
(the words you want to be displayed on the menu).  It then allows you to
specify what actions should be taken for each item in the menu by helping
you write simple batch files that correspond to the menu choice.  TURNKEY
can then pop up a menu with your choices and allow you to run a program
simply by moving the cursor over your choice and pressing enter.  When you
finish running your program, you are returned to the menu.
 
Usage:  Menuing System.
 
System Requirements:  256K memory and a hard disk.
 
How to Start:  Type INSTALL (press enter).
 
Suggested Registration:  $25.00
 
File Descriptions:
 
INSTALL  BAT  Installation batch file
README        Introductory text file
TK31     PGM  Main program file
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,1988 PC-SIG Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0725

     Volume in drive A has no label
     Directory of A:\

    FILES725 TXT      1074   9-01-88   8:28a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       848   8-29-88   1:56p
    INSTALL  BAT      1604   8-10-88   4:48p
    README            3612   8-10-88   4:42p
    TK31     PGM    271170   8-16-88  11:25p
            6 file(s)     278346 bytes
                           40960 bytes free
