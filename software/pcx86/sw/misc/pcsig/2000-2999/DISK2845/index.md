---
layout: page
title: "PC-SIG Diskette Library (Disk #2845)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2845/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2845"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2845.TXT

{% raw %}
```
Disk No: 2845
Disk Title: BCS Menu Program
PC-SIG Version: S1.0

Program Title: BCS Menu Program
Author Version: 2.0
Author Registration: $34.95
Special Requirements: 512K RAM, DOS 3.0+. Hard drive or network file
                      server recommended.

BRISTOL COMPUTING PROFESSIONAL MENU SYSTEM is a DOS menuing system
engineered for ease of use and increased productivity. It's screen
displays were designed to provide an intuitive interface as well as a
professional appearance.  Productivity increase is realized by reducing
the keystrokes required to start application programs and repetitive
tasks while eliminating the need for memorization of complex commands.
This makes it ideal in an office environment as well as in the home. BCS
MENU PROGRAM makes all the programs on your computer easily accessible.

Enhanced menu editing capabilities include a Command Helper mode which
allows you to browse your disk(s) for executable files or for menu
files. Also, you can set the state of NUM LOCK, CAPS LOCK and SCROLL
LOCK in each menu file. Improved support for monochrome adapter has been
added.

BCS MENU PROGRAM allows up to 100 entries per menu.  The possible
number of menu files is virtually unlimited (limited only by DOS file
naming conventions).  Each menu item may contain up to six lines of
descriptive information.  BCS MENU PROGRAM is completely self contained.
It features on-line, interactive menu editing.

Complete Microsoft compatible mouse support is provided.  Support for
MDA, CGA, EGA, MCGA, VGA & 8514/A video adapters.  Palette control on
EGA/VGA allows selection from 64 colors in standard text mode.  BCS MENU
PROGRAM features an advanced, intuitive color editing screen that allows
easy color customization.  Colors are saved in the menu file, not in the
program (allowing different color selections for each menu). Optional
automatic screen blanking is user modifiable in time increments from 1
to 99 minutes.

Each menu item may be password protected; exit to DOS may also be
password protected.  Support for up to 20 user input variables per menu
item; the user is prompted for input prior to command execution. (A user
input variable allows the user to enter text that is substituted into
the command sequence.)

BCS MENU PROGRAM is not a TSR (Terminate and Stay Resident) program. It
doesn't use batch files to execute commands.  All commands are executed
directly from memory, yet, BCS MENU PROGRAM uses only 2.5K RAM during
command execution.


PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.
```
{% endraw %}

## FILEXXXX.TXT

{% raw %}
```
PROGRAM TITLE
BCS Menu Program
SHORT DESCRIPTION
BRISTOL COMPUTING PROFESSIONAL MENU SYSTEM is a DOS menuing system
engineered for ease of use and increased productivity. It's screen
displays were designed to provide an intuitive interface as well as a
professional appearance.  Productivity increase is realized by reducing
the keystrokes required to start application programs and repetitive
tasks while eliminating the need for memorization of complex commands.
This makes it ideal in an office environment as well as in the home. BCS
MENU PROGRAM makes all the programs on your computer easily accessible.
PROGRAM DESCRIPTION
BRISTOL COMPUTING PROFESSIONAL MENU SYSTEM is a DOS menuing system
engineered for ease of use and increased productivity. It's screen
displays were designed to provide an intuitive interface as well as a
professional appearance.  Productivity increase is realized by reducing
the keystrokes required to start application programs and repetitive
tasks while eliminating the need for memorization of complex commands.
This makes it ideal in an office environment as well as in the home. BCS
MENU PROGRAM makes all the programs on your computer easily accessible.

Enhanced menu editing capabilities include a Command Helper mode which
allows you to browse your disk(s) for executable files or for menu
files. Also, you can set the state of NUM LOCK, CAPS LOCK and SCROLL
LOCK in each menu file. Improved support for monochrome adapter has been
added.

BCS MENU PROGRAM allows up to 100 entries per menu.  The possible
number of menu files is virtually unlimited (limited only by DOS file
naming conventions).  Each menu item may contain up to six lines of
descriptive information.  BCS MENU PROGRAM is completely self contained.
It features on-line, interactive menu editing.

Complete Microsoft compatible mouse support is provided.  Support for
MDA, CGA, EGA, MCGA, VGA & 8514/A video adapters.  Palette control on
EGA/VGA allows selection from 64 colors in standard text mode.  BCS MENU
PROGRAM features an advanced, intuitive color editing screen that allows
easy color customization.  Colors are saved in the menu file, not in the
program (allowing different color selections for each menu). Optional
automatic screen blanking is user modifiable in time increments from 1
to 99 minutes.

Each menu item may be password protected; exit to DOS may also be
password protected.  Support for up to 20 user input variables per menu
item; the user is prompted for input prior to command execution. (A user
input variable allows the user to enter text that is substituted into
the command sequence.)

BCS MENU PROGRAM is not a TSR (Terminate and Stay Resident) program. It
doesn't use batch files to execute commands.  All commands are executed
directly from memory, yet, BCS MENU PROGRAM uses only 2.5K RAM during
command execution.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║             <<<<  PC-SIG Disk #2845  BCS MENU PROGRAM  >>>>             ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To install the program to your hard drive, create a subdirectory on     ║
║ your hard drive (ex. BCSMENU) and copy the files on this diskette to it.║
║ Then change to that drive and subdirectory so the prompt is at:         ║
║                             C:\BCSMENU>                                 ║
║                                                                         ║
║ To extract the files from BCSMNU20, type:  BCSMNU20  (press Enter)      ║
║                                                                         ║
║ To add BCS MENU PROGRAM to your Autoexec.bat so the program will come   ║
║ up every time you start your computer, type:  TYPE ADD2AUTO.BAT  at     ║
║ the DOS prompt to display the appropriate wording to be added at the    ║
║ end of your Autoexec.bat file.                                          ║
║                                                                         ║
║ To print out the program documentation, type:                           ║
║                                    COPY BCSMENU.DOC PRN  (press Enter)  ║
║                                                                         ║
║ To begin the program, type:  BCSMENU  (press Enter)                     ║
║                                                                         ║
║ To print the order form, type:  COPY ORDER.DOC PRN                      ║
║                                                                         ║
║ To print any of the other DOC files, type:                              ║
║                                 COPY [filename].DOC PRN  (press Enter)  ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1991, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2845

     Volume in drive A has no label
     Directory of A:\

    BCSMNU20 EXE    196824  12-01-90   6:00a
    FILEXXXX TXT      2913  10-01-91   1:48p
    GO       TXT      2156  10-01-91   1:21p
    GO       BAT        38   1-31-91  12:58a
    FILE2845 TXT      2644  10-01-91   2:07p
            5 file(s)     204575 bytes
                          114688 bytes free
