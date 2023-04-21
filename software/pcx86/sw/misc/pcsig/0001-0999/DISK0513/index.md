---
layout: page
title: "PC-SIG Diskette Library (Disk #513)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0513/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0513"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "B MENU AND MENUGET"

    BMENU allows simplified development and use of command menus. The menu
    files are built with a text editor, using an abbreviated and simple set
    of commands. Anyone who can use a text editor can use this system.
    
    MENUGET is another program to incorporate menus into batch files. The
    disk comes with a set of demonstration programs and menus. The
    documentation is sparse, but adequate.
    
    One of the demonstration programs, DATIME.EXE, is very functional as it
    allows you to set the system time and date on a single line in a variety
    of time/date formats. You should add this one to your system's utilities
    
    This is a nice program, one that should simplify using the computer for
    people who don't want to learn DOS in detail, and don't want to pay the
    higher price of most commercially-available menu programs.
    
    System Requirements:  None.
    
    How to Start:  Type MENU (press enter).
    
    Suggested Registration:  $10.00
    
    File Descriptions:
    
    AUTOEXEC BAT  Autoexecute batch file to start menu program.
    BMENU    EXE  Executable program to display menus.
    BMENU    HLP  default help file.
    BMENU    MNU  Sample menu.
    COOKIE   COM  Fortune cookie program.
    COOKIE   DAT  Data file for COOKIE.EXE.
    DATIME   EXE  Set system time and date in a variety of formats.
    DEMESC   BAT  Demonstration of ESC.EXE program.
    DOMENU   BAT  Batch file to demonstrate MENUGET menu system.
    EGGS     EXE  Graphics demonstration program.
    ESC      COM  Program to detect the <ESC> key in a batch file.
    GRAPH    HLP  Help file for graphics menu.
    GRAPH    MNU  Submenu used with demonstration programs.
    HANGMAN  EXE  The hangman word guessing game.
    INFO          Data file used with MENUGET.EXE.
    LABEL    BAS  Label maker (printes standard diskette label for BMENU UTI
    LINES    EXE  Graphics demonstration program.
    LISAJOU  EXE  Graphics demonstration program.
    MAIN     HLP  Help file for main menu.
    MAIN     MNU  Main menu for demonstration programs.
    MENU     BAT  Run this to start BMENU.
    MENUGET  COM  Executable program to build menus into a batch files.
    NOTICE   TXT  Program legal notices and list of files.
    READ     ME   Program documentation.
    REGIS    FRM  Program registration form.
    VERSION  DOC  BMENU Version history.
    WORDS         Data file for HANGMAN.EXE.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES513.TXT

{% raw %}
```
Disk No  513
Program Title: BMENU AND OTHERS version 1.4
PC-SIG version 1.4

BMENU allows simplified development and use of command menus. The menu
files are built with a text editor, using an abbreviated and simple set
of commands. Anyone who can use a text editor can use this system.

MENUGET is another program to incorporate menus into batch files. The
disk comes with a set of demonstration programs and menus. The
documentation is sparse, but adequate.

One of the demonstration programs, DATIME.EXE, is very functional as it
allows you to set the system time and date on a single line in a variety
of time/date formats. You should add this one to your system's utilities.

This is a nice program, one that should simplify using the computer for
people who don't want to learn DOS in detail, and don't want to pay the
higher price of most commercially-available menu programs.

Usage:  Menuing System

System Requirements:  None.

How to Start:  Type MENU (press enter).

Suggested Registration:  $10.00

File Descriptions:

AUTOEXEC BAT  Autoexecute batch file to start menu program.
BMENU    EXE  Executable program to display menus.
BMENU    HLP  default help file.
BMENU    MNU  Sample menu.
COOKIE   COM  Fortune cookie program.
COOKIE   DAT  Data file for COOKIE.EXE.
DATIME   EXE  Set system time and date in a variety of formats.
DEMESC   BAT  Demonstration of ESC.EXE program.
DOMENU   BAT  Batch file to demonstrate MENUGET menu system.
EGGS     EXE  Graphics demonstration program.
ESC      COM  Program to detect the <ESC> key in a batch file.
GRAPH    HLP  Help file for graphics menu.
GRAPH    MNU  Submenu used with demonstration programs.
HANGMAN  EXE  The hangman word guessing game.
INFO          Data file used with MENUGET.EXE.
LABEL    BAS  Label maker (printes standard diskette label for BMENU UTILITIES.
LINES    EXE  Graphics demonstration program.
LISAJOU  EXE  Graphics demonstration program.
MAIN     HLP  Help file for main menu.
MAIN     MNU  Main menu for demonstration programs.
MENU     BAT  Run this to start BMENU.
MENUGET  COM  Executable program to build menus into a batch files.
NOTICE   TXT  Program legal notices and list of files.
READ     ME   Program documentation.
REGIS    FRM  Program registration form.
VERSION  DOC  BMENU Version history.
WORDS         Data file for HANGMAN.EXE.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## NOTICE.TXT

{% raw %}
```
Registration and Package Content

This software is distrubuted on a ShareWare basis.

  * You may copy the entire disk and provide copies to
    anyone you wish to.

  * You may not charge these persons more than it costs you
    to copy the programs.

  * You may not make any changes to the diskette that you
    give to others without my permission.

Software companies (such as PC-Sig) have my permission to market these files
as shareware as long as the following conditions are met:

  * All of the files may be archived together or remain seperate.

  * None of the files may be omitted.

  * My files should be kept seperate from other files on any diskette.

  * The software company may add addional text files as it sees fit
    but may not modify the files I supply.


On this diskette you should have the following files:

Text files,please read
READ.ME, NOTICE.TXT, REGIS.FRM, VERSION.DOC


Executable Files
COOKIE.COM, BMENU.EXE, DATIME.EXE, EGGS.EXE, ESCAPE.EXE,
HANGMAN.EXE, LINES.EXE, LISAJOU.EXE, MENUGET.EXE

MENU.BAT, AUTOEXEC.BAT, DOMENU.BAT

Menus for bMENU
BMENU.MNU, MAIN.MNU, GRAPH.MNU


Data Files
COOKIE.DAT, WORDS, INFO, BMENU.HLP, MAIN.HLP, GRAPH.HLP


For use of these programs there is a sugested $10.00
shareware fee. After a reasonable trial period, if you
intend to continue to use bMENU please send the registration
fee and Invoice / registration form to:

        Ronald Alan Hudson
        3538 Alden Way #3  
        San Jose CA 95117

The registration fee gives you the right to use bMENU and to
keep as many copies as you see fit on as many machines as
you personally use.


You may wish to purchace a site license for  $100.00.  A
site is defined as one street address.

Purchase of a site license enables any number of users to use
bMENU on any number of computers at one site. You can copy
the bMENU package as you see fit for installation on any of
the computers at your site. bMENU may be installed in
portable computers and used off site only when the conputer
in question is normmaly located at the site.

Send the site license fee and Invoice/registration to the
above address.


Ron Hudson may be reached at:

   Abort, Retry, Ignore BBS
   (408) 247-0295

For technical support and newer versions.

```
{% endraw %}

## VERSION.DOC

{% raw %}
```
bMENU Menu Utilities

Version History:

    04/08/86  1.0   Version History Starts

    07/22/86  1.1   Add Copyright notice to Bmenu

    12/19/86  1.1   Cookie rewritten to a COM file

    02/25/87  1.2   Extended Docs for Color in Bmenu

    10/28/87  1.3   Change of Address,
                    Menuget no longer clears screen.

    08/15/88  1.5   BMenu 8.5
                    * Help screens moved outside of Bmenu.
                    * You can select the characters that make up the
                      pointer
                    * You can specify the name of the help file in
                      the menu file.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0513

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT        53   2-14-86   7:46a
    BMENU    EXE     43252   8-16-88   9:25a
    BMENU    HLP      1840   8-15-88   3:54p
    BMENU    MNU       587   8-16-88  12:27p
    COOKIE   COM     12248  12-19-86   9:22a
    COOKIE   DAT     16583  12-18-86   1:26p
    DATIME   EXE     27116   4-14-86  10:08a
    DEMESC   BAT       571   4-18-86   9:48a
    DOMENU   BAT       597   1-01-80  12:08a
    EGGS     EXE     33100   4-14-86  10:09a
    ESC      COM        53   4-17-86   3:22p
    FILES513 TXT      2502   9-02-88  10:10a
    GO       BAT        38  11-13-87   9:48a
    GO       TXT       616   8-15-88   1:04p
    GRAPH    HLP       335   8-17-88  10:01a
    GRAPH    MNU       398   8-16-88  12:25p
    HANGMAN  EXE     39040   4-14-86  10:11a
    INFO               214   8-15-88   1:51p
    LINES    EXE     40668   4-14-86  10:11a
    LISAJOU  EXE     29480   4-14-86  10:12a
    MAIN     HLP       275   8-16-88  12:24p
    MAIN     MNU       587   8-16-88  12:27p
    MENU     BAT        18   8-16-88  12:53p
    MENUGET  COM     11627  10-28-87   2:03a
    NOTICE   TXT      2331   8-17-88  10:01a
    READ     ME      11337   8-16-88   4:09p
    REGIS    FRM       898   8-16-88   3:53p
    VERSION  DOC       647   8-16-88   1:01p
    WORDS             3928   4-14-86  11:53a
           29 file(s)     280939 bytes
                           24576 bytes free
