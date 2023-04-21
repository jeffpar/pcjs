---
layout: page
title: "PC-SIG Diskette Library (Disk #405)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0405/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0405"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-DESKTEAM"

    Take control of your PC and manage your work more efficiently with this
    desktop manager. RAM-resident or stand-alone, PC-DESKTEAM maintains
    eight accessories -- one keystroke away!
    
    This menu-driven system keeps a calendar to remind you of appointments;
    an alarm clock to warn you of the time; a notepad for reminders and DOS
    access; a calculator whenever you need to run the numbers; an auto-
    dialer; and printer controls (all available from within your other
    applications). Use your printer as a typewriter. (Sometimes it's just
    faster.)
    
    A super alternative to SIDEKICK, with full documentation and on-line
    help.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## AUTOEXEC.TXT

{% raw %}
```
REM  This is a sample of the commands that would be added to the
REM  AUTOEXEC.BAT file to execute PC-DeskTeam.
REM
REM  Add the following command if you are using a monochrome monitor on
REM  a graphics card:

MODE BW80

REM  Add the following commands to run PC-DeskTeam on a diskette system:

A:DESKTEAM /M

REM  Add the following commands if you want to run the CALENDAR program:

ECHO OFF
A:CALENDAR
ECHO ON

REM  Add the following commands to run PC-DeskTeam on a hard disk system:

CD C:\DESKTEAM
DESKTEAM /M
ECHO OFF
CALENDAR
ECHO ON

REM  If you are using a printer on a serial port add the following comamnds
REM  to your file:  (It assumes COM1 at 2400 baud)

MODE COM1:2400,N,7,2,P
MODE LPT1:=COM1
```
{% endraw %}

## FILES405.TXT

{% raw %}
```
Disk No:  405
Program Title: PC-DESKTEAM version 2.01
PC-SIG version 2.2

PC-DESKTEAM is an all-in-one utility/accessory program that can be
called from within any program as well as from DOS.  It includes the and
alarm clock, calculator, calendar, selected DOS commands, notepad, phone
dialer, printer control, typewriter mode, and a handy ASCII chart.  It
is menu-driven, has help facilities, and runs as a stand-alone program
or memory-resident (with the ability to change the start key).  This is
a super alternative to SideKick and has more features, great
documentation.

Features:

  o  Menu driven operation.
  o  On line help facilities.
  o  Memory resident or stand alone operation.
  o  Integrated printer control utility.
  o  Easy to use.

Usage:  Memory-Resident Desktop Manager

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $25.00

File Descriptions:

ASCII    PAD  A file with ASCII/IBM Character set chart.
AUTOEXEC TXT  Sample AUTOEXEC.BAT file.
CALENDAR PAD  Sample Calendar data.
CLKFIX   COM  Program to fix clock display on LEADING EDGE and AT&T.
DESKTEAM C20  Configuration file for DESKTEAM.
DESKTEAM COM  Main program.
DISKETTE BAT  Batch file for installing DESKTEAM on a floppy.
HARDISK  BAT  Batch file for installing DESKTEAM on a hardisk.
HOLIDAYS PAD  File containing Holiday dates.
MANUAL   001  Documentation used by MANUAL program.
MANUAL   002  Documentation used by MANUAL program.
MANUAL   003  Documentation used by MANUAL program.
MANUAL   004  Documentation used by MANUAL program.
MANUAL   005  Documentation used by MANUAL program.
MANUAL   006  Documentation used by MANUAL program.
MANUAL   007  Documentation used by MANUAL program.
MANUAL   008  Documentation used by MANUAL program.
MANUAL   EXE  Program to print and display the manual.
METRICS  PAD  Metric conversion Pad.
PHONE    PAD  Telephone directory.
PRINTER  C20  PC-DESKTEAM printer configuration file.
PRINTERS COM  Program to display available printers.
README        Introduction letter.
README   BAT  Displays README file.
SHARE    BAT  Command file to create Shareware diskette.
STATES   PAD  File containg states and capitals.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1986,87,88,89 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0405

     Volume in drive A has no label
     Directory of A:\

    ASCII    PAD      1921   2-16-85   3:44p
    AUTOEXEC TXT       742   9-21-88   7:26p
    CALENDAR PAD      2052   3-14-88   7:49p
    CLKFIX   COM      3665   7-16-88   8:15a
    DESKTEAM C20       466  11-04-88   8:55p
    DESKTEAM COM     51082  10-16-88  10:38a
    DISKETTE BAT        97   9-21-88   6:43p
    FILES405 TXT      2363  12-08-88  11:18a
    GO       BAT         7   9-21-88   6:46p
    HARDISK  BAT        49   9-21-88   7:03p
    HOLIDAYS PAD      1462   9-21-88   6:47p
    MANUAL   001      1239  10-22-88   8:49p
    MANUAL   002      2055  10-22-88   8:49p
    MANUAL   003      7955  10-15-88  10:24a
    MANUAL   004     44515  10-16-88   5:07p
    MANUAL   005      3939  10-15-88  10:24a
    MANUAL   006      9160  10-15-88  10:32a
    MANUAL   007      1615   9-19-88   8:01p
    MANUAL   008      2246   9-24-88   2:46p
    MANUAL   EXE     12288   9-18-88   8:05p
    METRICS  PAD      2011   3-03-85   4:18p
    PHONE    PAD       532  12-20-87   8:03p
    PRINTER  C20      4290   9-24-88   6:19p
    PRINTERS COM     11269   9-18-88   8:04p
    README            8220   9-24-88   8:03p
    README   BAT         9   9-21-88   6:46p
    SHARE    BAT       264   9-24-88  12:42p
    STATES   PAD      1920   1-06-85   5:57p
           28 file(s)     177433 bytes
                          129024 bytes free
