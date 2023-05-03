---
layout: page
title: "PC-SIG Diskette Library (Disk #1020)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1020/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1020"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "IMX CO-PILOT"

    IMX CO-PILOT is a desk organizer program that includes the following
    subsections:
    
    ~ A calculator.
    
    ~ Appointment calendars with alarms.
    
    ~ Phone and address books with label-printing capability.
    
    ~ A notepad for any type of messages.
    
    ~ And several other features including disk management utilities.
    
    IMX CO-PILOT is memory-resident and runs with most major software
    packages. It is invoked only when you call it up with a special
    user-defined keystroke. A must for the business person on the go.
    Keeps track of several different appointments and reminds you what time
    they are, freeing you to worry about other important tasks.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1020.TXT

{% raw %}
```
Disk No: 1020
Program Title:  IMX CO-PILOT
PC-SIG version: 1.1

IMX CO-PILOT is a desk organizer program that includes the following
subsections:

~ A calculator

~ Appointment calendars with alarms

~ Phone and address books with label printing capability

~ A notepad for any type of messages

~ And several other features including disk management utilities.

IMX CO-PILOT is memory resident on boot-up and runs with most major
software packages.  It is invoked only when the user calls it up with a
special user-defined keystroke.  A must for the business person on the
go.  Keeps track of several different appointments and reminds you what
time they are, freeing your mind to worry about other important tasks.

Usage:  Desktop Organizer.

Special Requirements:  Hard disk is recommended.

How to Start:  Type GO (press enter).

Suggested Registration:  $24.95

File Descriptions:

IMX      EXE  Main program.
INSTALL  BAT  Installs IMX CO-PILOT for you.
README   DOC  Instructions for installation.
IMS      <DIR>Subdirectory containing following files.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk #1020 IMX CO-PILOT  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To view installation procedures, type: READ (press enter)               ║
║                                                                         ║
║ To isntall the program, type: INSTALL (press enter)                     ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.DOC

{% raw %}
```
To do a quick installation of the IMX CO-PILOT do the following:
    - Put IMX CO-PILOT disk in the A: drive.
    - Type "A:"
    - Type "A:INSTALL.BAT"
    - Press F1 - To select Monitor Type. (Follow directions in
      Monitor Select function.)
    - Press F2 - To select Default Drive. (Follow directions in
      Default Drive function.)
    - Press F9 - To exit Setup.
    - Type "Y" to allow data to be overwritten.
    - The IMX CO-PILOT system is now installed on the default drive.
      To load program in memory type "<default drive>:\IMS\IMX.EXE".
      (It is recomended that "\IMS\IMX.EXE" be the last line of the
      autoexec.bat file.)
    - To invoke the system hold down the "Alt" key and press the "X"
      key.
To receive a copy of the IMX CO-PILOT instruction manual and be added
to the IMX CO-PILOT information/mailing list, send a check for $24.95
payable to:
            MICRO COMPUTER TECHNOLOGY, INC
            SUITE 203
            2075 SILAS DEANE HWY
            ROCKY HILL, CT 06067
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1020

     Volume in drive A has no label
     Directory of A:\

    INSTALL  BAT       128   2-11-87   4:30p
    IMX      EXE     86754  11-05-87   4:34p
    README   DOC      1152  11-05-87   4:37p
    FILE1020 TXT      1211   1-27-89   2:14p
    GO       BAT        38   3-24-88   2:22p
    GO       TXT       540   3-24-88   2:28p
    READ     BAT        42   1-27-89   2:15p
    IMS          <DIR>    
            8 file(s)      89865 bytes

     Directory of A:\IMS

    .            <DIR>    
    ..           <DIR>    
    IMSINIT  EXE    130608   2-11-87   4:27p
    CFNAME   IMS       130   1-01-80   6:12p
    IMSSET   IMS      5310   7-22-86   4:06p
    CONFIG   IMS        24   1-01-80   6:12p
    IMSCAN   IMS       384   6-24-86   9:57a
    IMS      BAT        26   1-01-80   6:12p
    LABEL    IMS         3  10-23-87   9:10a
    DIAL     IMS      1074   7-16-86   3:25p
    DIAL     ADR       672   7-15-86   5:35p
    INST1    BAT       256   1-01-80   6:13p
           12 file(s)     138487 bytes

    Total files listed:
           20 file(s)     228352 bytes
                           79872 bytes free
