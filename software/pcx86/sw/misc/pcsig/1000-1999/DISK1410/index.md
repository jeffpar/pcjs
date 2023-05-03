---
layout: page
title: "PC-SIG Diskette Library (Disk #1410)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1410/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1410"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MENUSHOW"

    The PC programmer who needs a way to create professional menus will
    enjoy the colorful presentation of MENUSHOW.  A viewer-paced demo shows
    how ASCII files are created and converted into a menu with the nice
    finishing touches you admire.  MENUMAKE shows you how to create your own
    ASCII files.  MENUSHOW then converts those files into a very attractive
    menu.  While not recommended for the novice, it is well within the
    capability of programmers with mid-range skills.  For anyone who wants
    quality output, it's worth the effort.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CONTENTS.TXT

{% raw %}
```
menudemo.exe  -  program to demonstrate menushow
menumake.exe  -  program to create an ASCII file for menushow.exe
menushow.exe  -  program that generates MENU from ASCII file
menusho1.exe  -  used by menushow to run user selected program
menu          -  sample ASCII menu file
check.bat     -  used by menudemo
direct.bat    -  used by menudemo
user.bat      -  used by menudemo
menumod       -  sample ASCII menu file (menu modified)
contents.txt  -  lists files on diskette
menushow.man  -  manual explaining how to use menushow and
                 and menumake
brun30.exe    -  required to run all .exe files above
```
{% endraw %}

## FILE1410.TXT

{% raw %}
```
Disk No: 1410
Program Title:  MENU SHOW
PC-SIG version: 1

The PC programmer who needs a way to create professional menus will
enjoy the colorful presentation of MENU SHOW.  A viewer-paced demo shows
how ASCII files are created and converted into a menu with the nice
finishing touches you admire.  MENUMAKE will take you by the hand and
show you how to create your own ASCII files.  MENUSHOW will then convert
those files into a very attractive menu.  While not recommended for the
novice, it is well within the capability of programmers with mid-range
skills.  For those who want quality output, it's worth the effort.

Synopsis: Colorful menumaker for the PC programmer of mid-range skill
level.  An attractive demo walks through the creation of ASCII files for
the final menu.

Usage:  Menumaker.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $35.00

File Descriptions:

BRUN30   EXE  Enables .EXE Files to Run.
README   DOC  Text of Initial Instruction.
MENUMOD       Sample ASCII File for Demo (menu modified).
MENUDEMO EXE  Demo Program.
MENU          Sample ASCII File.
CONTENTS TXT  Lists Disk Files for Demo.
MENUMAKE EXE  Program Creates ASCII Files.
CHECK    BAT  Batch Command for Demo.
DIRECT   BAT  Batch Command for Demo.
MENUSHOW EXE  Program Generates Menu from ASCII File.
MENUSHOW MAN  Text of MENUSHOW Program Manual.
MENUSHO1 EXE  Program Allows User to Run Programs Listed in Menus.
USER     BAT  Batch Command for Demo.

PC-SIG
1030D E. Duane Avenue
Sunnyvale, CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk No 1410 MENUSHOW  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type MENUMAKE (press enter)                       ║
║                                                                         ║
║ To look at the documentation on your screen, type VIEW (press enter)    ║
║                                                                         ║
║ To copy the documentation to your printer, type MANUAL (press enter)    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.DOC

{% raw %}
```
























WELCOME TO SUPERIOR SOFTWARE INC.'s  MENUSHOW  - a Menu Generator

Instructions:
1) log on to drive A:
2) type MENUDEMO and ENTER
3) watch the show!

To register:
send $25.00  to

Superior Software, Inc.
9685 Huntington Park Drive
Strongsville, OH  44136




For technical help call:    (216) 572-1045



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1410

     Volume in drive A has no label
     Directory of A:\

    BRUN30   EXE     70680   4-07-87  10:48a
    CHECK    BAT        18   6-06-88   3:16p
    CONTENTS TXT       635   8-16-88   5:21p
    DIRECT   BAT        15   8-13-88   3:26p
    FILE1410 TXT      1640   5-31-89   4:25p
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       694   5-31-89   4:26p
    KIKE                 1   1-01-80  12:07a
    MANUAL   BAT       147   5-31-89   4:31p
    MENU               267   6-07-88  11:58a
    MENUDEMO EXE     53288   8-13-88   1:52p
    MENUMAKE EXE     15008   8-14-88  11:04a
    MENUMOD            398   6-07-88  10:56a
    MENUSHO1 EXE      3440   8-13-88   3:32p
    MENUSHOW EXE      9104   8-13-88   7:34p
    MENUSHOW MAN     19815   8-16-88   5:07p
    PAGE     COM       325   1-06-87   4:21p
    README   DOC       373   8-16-88   4:09p
    USER     BAT        70   6-07-88  10:02a
    VIEW     BAT        37   5-31-89   4:31p
           20 file(s)     175993 bytes
                          132096 bytes free
