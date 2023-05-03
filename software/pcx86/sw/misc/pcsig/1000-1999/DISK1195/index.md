---
layout: page
title: "PC-SIG Diskette Library (Disk #1195)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1195/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1195"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC SHIFT"

    PC-SHIFT helps organize your employee shift schedule.  PC-SHIFT allows
    you to divide the jobs by location or category and then lets you
    describe each job required for each area.  The job descriptions consist
    of the beginning date, the location or department, the job title or
    description, the minimum and maximum qualification level, and the
    minimum and maximum security level.
    
    PC-SHIFT then lets you enter a schedule for each job, showing a chart of
    each hour of the day divided into 15-minute intervals.  Once all the
    data is entered, you may display or print a report on a 12-hour
    schedule, a 24-hour schedule, a 24-hour chart, or a report on all the
    job descriptions.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1195.TXT

{% raw %}
```
Disk No: 1195
Program Title: PC Shift version 1.01
PC-SIG version: 1.1

PC-SHIFT is a program that will help organize your employee shift
schedule.  PC-SHIFT allows you to divide the jobs by location or
category and then lets you describe each job required for each area.
The job descriptions consist of the beginning date, the location or
department, the job title or description, the minimum and maximum
qualification level, and the minimum and maximum security level.

PC-SHIFT then lets you enter a schedule for each job, showing a chart of
each hour of the day divided into 15-minute intervals.  Once all the
data is entered, you may display or print a report on a 12-hour
schedule, a 24-hour schedule, a 24-hour chart, or a report on all the
job descriptions.

Usage:  Employee Shift Scheduling.

Special Requirements:  A printer for the reports.

How to Start:  Type GO (press enter).

Suggested Registration:  $39.95

File Descriptions:

1        BAT  Installation file.
2        BAT  Installation file.
3        BAT  Installation file.
4        BAT  Installation file.
5        BAT  Installation file.
EMPTY    DBF  Database file.
ESJOBS   DBF  Database file.
HELP     BAT  Types MENU.SCR.
MENU     BAT  Types MENU.SCR.
MENU     SCR  Menu screen.
PCSHIFT  EXE  Main program.
PCSHIFT  MAN  Documentation.
PRINTMAN EXE  Print file.
README        How to get started.
WHATIS   IT   Text file.

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
║                    <<<<  Disk No 1195 PCSHIFT  >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type MENU (press enter)                           ║
║                                                                         ║
║ From the menu you can start the program and print the documentation     ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1195

     Volume in drive A is DISK1195
     Directory of A:\

    1        BAT       758   9-11-88  12:46p
    2        BAT      1119   9-11-88  12:47p
    3        BAT        44   9-11-88  12:48p
    4        BAT        64   9-11-88  12:50p
    5        BAT        94   1-30-88   3:29p
    EMPTY    DBF      3584   9-11-88  12:57p
    ESJOBS   DBF      3395
    FILE1195 TXT      1553  12-09-88  11:13a
    GO       BAT        38   1-18-88   1:38p
    GO       TXT       540  10-25-88   1:25p
    HELP     BAT        26  11-07-87   2:33p
    MENU     BAT        31  11-07-87   2:19p
    MENU     SCR      1179   9-11-88  12:45p
    PCSHIFT  EXE    218434   9-26-88   9:25p
    PCSHIFT  MAN     27818   9-11-88  11:09a
    PRINTMAN EXE     40356  10-22-88   3:22a
    README             669   9-11-88   1:33p
    WHATIS   IT        721   9-26-88   9:04p
           18 file(s)     300423 bytes
                            9216 bytes free
