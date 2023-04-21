---
layout: page
title: "PC-SIG Diskette Library (Disk #593)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0593/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0593"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GANTT PAC 1 OF 2 (ALSO 1198)"

    This is a group of project management aids that produce presentation-
    quality Gantt charts -- graphic displays of schedules -- from a list of
    projects, dates and times.
    
    Four primary applications are provided: Gantt chart transparencies for
    meeting displays, the ability to directly drive a video projector from a
    PC for meeting displays, Gantt charts for insertion into the
    text files of word processors, and direct use to view project status.
    These types of displays are commonly used throughout industry for
    management presentations of project status and resource use.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES593.TXT

{% raw %}
```
Disk No  593
Program Title: GANTT & SCHEDULING version 1.3 (Disk 1 of 2)
PC-SIG version 1.4

GANTT is a group of project management aids that produce presentation-
quality Gantt charts from a list of projects, dates and times.  The 
types of displays provided are commonly used throughout industry for 
management presentations of project status and resource usage.  In this 
way GANTT charts are used as a graphic means of displaying schedules. 

This program has four primary applications: it produces GANTT chart
transparencies for meeting displays, directly drives a video projector
from a PC for meeting displays, creates GANTT charts to be inserted into
the text files of word processors, and is used directly to view project
status.

To get you going, this disk has a DEMO, a TUTOR, and a "sister" program,
SCHEDULE, a limited working model of another sophisticated project
management tool.

Usage:  Critical Task Tracking/Project Management/Scheduling.

Special Requirements:  A printer for hard copy.

How to Start:  Type GO (press enter).

Suggested Registration:  None for GANTT, but SCHEDULE is $295.00 for the
full version.

File Descriptions:

DEMO     BAT  Batch file to start a demonstration of the program.
DISKETTE FLS  List of files on this disk.
EASY     BAT  Batch file to start the easy Turorial for Gantt.
EASY     L?   Tutorial files (5 files).
EASY     SKB  Tutorial file.
EXITCODE BAT  Batch file listing all possible exit error codes.
GANTT    DOC  Documentation file.
GANTT    EXE  Main program file.
GANTT    GKB  Data file used by program demonstration.
GANTT    PRT  Data file used by program demonstration.
M        BAT  Batch file to run the file MENU.bat.
MENU     BAT  Batch file to print the MENU.DOC file.
MENU     DOC  Documentation file.
NEW      BAT  Batch file to create a new database.
NEW      SKB  Data file used by NEW.BAT.
PLAN     BAT  Project planning batch file.
PLAN     SKB  Data file used by PLAN.BAT.
READ     BAT  Batch file which prints an text introduction.
READ     ME?  Text files used by READ.BAT (4 files).
SCHEDULE EXE  Sister program to Gantt.
SCHEDULE SKB  Data file for SCHEDULE.EXE.
STATION  ???  Data files (6 files).
SYNTAX?  BAT  Batch files which printout syntax errors (7 files).
VIEW     BAT  Batch file used to view project status files.
VIEW     GKB  Data file used by VIEW.BAT.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## MENU.DOC

{% raw %}
```

                       S C H E D U L E     M E N U

Command            Description

M or MENU          Displays this menu.
READ               Start here.
DEMO               Run the SCHEDULE and GANTT demonstration.
EASY               A tutor in the basics of setting up a project.
PLAN STATION       To use the service station example data base.
NEW  project       Start a new project data base and link to VIEW.
PLAN project       Modify the project data and link to VIEW.
VIEW project       Display the project Gantt chart.
SWGANTT project    Create a file for SideWays printing.


```
{% endraw %}

## PCSIG.TXT

{% raw %}
```
PCSIG

This diskette contains the files listed in "DISKETTE.FLS"
Place the diskette in the A: diskette drive and enter "A:M".

PCSIG diskette # 593 named "GANTT" contains the program GANTT and
a limited demonstration version of "SCHEDULE".

This diskette contains updates to GANTT (now version 1.3) along with a new
BIG GANTT function which can be used in conjunction with a sideways printing
program (not included). Double high print is now supported for printers which
support the double high function (IBM Pro-Printer II or beyond).

SCHEDULE is no longer crippled. It is version 1.2 and is equivalent to the
commercial version except that the capacity is limited and the support files
are setup for a diskette rather than a hard disk. The license provides for
free distribution for educational use but not for commercial use.
The commercial version is available from HITT Personal Software at $295 per
single system license.

Our intent is to provide a free (distribution cost) package which can be
freely copied for students in the academic environment and at the same time
provide a commercial version with direct commercial level support.

                                    Donald C. Hitt

                                    HITT Personal Software
                                    13 Rosalind Road
                                    Poughkeepsie, New York
                                    12601
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0593

     Volume in drive A has no label
     Directory of A:\

    BIGGANTT EXE      2381   5-28-88  10:15p
    BIGGANTT GKB      1704   5-31-88   9:56a
    DEMO     BAT       992   5-24-87   6:27p
    DISKETTE FLS       653   7-30-88   9:55a
    EASY     BAT      1478   6-10-87   8:50p
    EASY     GKB       227   2-01-87  10:00p
    EASY     GPT     13209   7-04-88   1:56p
    EASY     L1        936   1-01-87   5:24p
    EASY     L2        888   1-01-87   5:27p
    EASY     L3       1019   2-05-87   6:58p
    EASY     L4        902   1-04-87   5:42p
    EASY     L5        388   1-25-88  10:29p
    EASY     SKB      5545   1-01-87   5:44p
    EXITCODE BAT       668  11-30-86  12:33p
    FILES593 TXT      2519  10-26-88   6:28p
    GANTT    EXE     32754   7-25-88   7:27p
    GANTT    GKB     12634   8-16-87   1:24a
    GANTT    PRT     19617   7-23-86   9:02p
    GANTT    TMP      3689  10-13-85  11:20p
    GO       BAT        38   4-21-88   1:44p
    GO       TXT       540  10-25-88   3:38p
    M        BAT        24  12-20-86  11:25a
    MENU     BAT       197   7-17-88   2:34p
    MENU     DOC       600   5-29-88  10:00a
    NEW      BAT       867  12-18-86  11:30p
    NEW      SKB      2148   1-03-87   1:45p
    PCSIG    TXT      1443  10-16-88   9:41p
    PLAN     BAT       484   1-01-87   5:59p
    PLAN     SKB       424  12-18-86  10:04p
    READ     BAT        98   1-04-87   6:11p
    READ     ME        383   1-09-87  10:54p
    READ     ME1       977  10-19-88  12:29a
    READ     ME2      1160  10-16-88   5:53p
    READ     ME3       435  10-16-88   2:42p
    SCHEDULE EXE     97969  10-16-88   4:48p
    SCHEDULE SKB      9575  10-16-88   3:07p
    STATION  ACT      1896  10-16-88   8:03a
    STATION  CAL      1221  10-16-88   7:07a
    STATION  JOB       606  10-16-88   8:03a
    STATION  RES      1334  12-21-86   6:39p
    STATION  STA      4699  10-16-88   8:03a
    STATION  TSK      6238  12-21-86   6:38p
    SWGANTT  BAT       618   5-29-88   9:59a
    SYNTAX1  BAT       304   1-02-87   1:19a
    SYNTAX2  BAT       268   8-13-86   8:32p
    SYNTAX3  BAT       177  12-18-86  10:07p
    SYNTAX4  BAT       337  11-30-86  12:31p
    SYNTAX5  BAT        17  12-18-86  10:12p
    SYNTAX6  BAT       414  12-18-86  10:12p
    SYNTAX8  BAT       177  12-18-86  10:07p
    VIEW     BAT       519   5-29-88   9:45a
    VIEW     GKB       227   2-01-87  10:00p
           52 file(s)     238617 bytes
                           55296 bytes free
