---
layout: page
title: "PC-SIG Diskette Library (Disk #2472)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2472/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2472"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GANTT2"

    Are you an executive who needs real time schedule status displayed
    graphically?  Though you may be at some distance from the activities,
    computer networks can show you the project's status at electronic
    speeds.  While it does not create or modify the information, GANTT2
    allows you to examine that status.
    
    GANTT2 is a fully functional program designed to make Gantt charts from
    lists of dates and times.  It can also be used with a project
    management program such as SCHEDULE for planning and tracking.
    Accompanying the GANTT2 package is an educational version of SCHEDULE
    and a starter set of batch and command files.
    
    GANTT2 (#2472) was designed for the hard disk personal computer.
    Personal computer users working with floppy drives can achieve the same
    results with GANTT CHARTING (#1306).
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHANGES.DOC

{% raw %}
```
This describes the changes from GANTT version 1.3 to 2.0

  GANTT2 is a complete rewrite although it maintains compatibility wherever
  possible. It is designed for use with hard disk systems. Some of the new
  features are:

      - On line documentation and improved help.
      - Mouse support and SAA compliance.
      - Background processing for better responsiveness.
      - Planned and actual displays with the "BookIt" function.
      - Accumulative Planned vs. Actual job completion display.
      - Future availability in German and Spanish (if there is a demand).

  If you are using GANTT version 1.x you may notice some differences using
  GANTT 2.x. You may also want to keep using version 1.3 if you have
  requirements for use with a diskette only system.

  1. Additional storage is required for the program and data. 256K is
     now required. Disk storage has also increased.

  2. The Resource Activities frame F5 has been eliminated. Lack of use and
     the fact that the content was difficult to explain was the reason.

  3. The ACTIVITIES TOT, SUB, CLR, CLS, commands have been eliminated.
     Lack of use was the reason.

  4. The GANTT2 program now consists of three files rather than one.
     GANTT2.EXE, GANTT2.PIC, and GANTT2.MSG make up the program. This change
     allows the program to support a variety of languages by customizing the
     picture and message files.

  5. Time starts with year 50 and ends with year 49. This allows projects
     to span across year 2000 (start in 1950 and end in 2049) while using
     two characters to indicate the year. If you had projects starting
     before year 1950 and ending after 1950 they will no longer display
     properly as they will be seen as starting in 20xx and ending in 19xx.

  6. If you had multiple jobs with the same name in the project.PRT file
     the last one will now be displayed rather than the first. If this is
     a problem rename your "project.PRT" file to "project.REF" so you can
     select the duplicate names independently.

  7. If there are multiple tasks with the same name in a job the
     tasks will all be displayed on the same line rather than on separate
     lines. Version 2.x of GANTT supports multiple independent time spans
     on a single line with JOB displays.

  8. The backslash "\" can no longer be used as a job separator character.
     The ASCII 2 (Smiley) and ASCII 12 (Eject) can still be used.

The following is an additional list of differences between GANTT version 1.x
and 2.x. These differences are compatible with any existing files or
configurations you may be using currently.

  1. Disk paths can be used with the command and the project name on the
     DOS command line.
         a. GANTT.EXE, GANTT.PIC, and GANTT.MSG always stay together and are
            assumed to be in the same directory.
         b. The project.PRT, project.REF, project.GKB, and project.GPT
            files are assumed to be in the same directory but that directory
            can be different from the directory with the program.

  2. "project.REF" is a new optional file. It is in the same format as the
     "project.PRT" file and can be used interchangeable in most cases. If both
     files exist the .REF file is considered to be the reference and the
     .PRT file is the current status. Double lines will be displayed for each
     item that is contained in both files. The order of the display is
     determined by the .REF file sequence. This allows you to display planned
     vs. actual, insert additional formatting lines and notes, or to manually
     arrange the order of the job displays.


```
{% endraw %}

## FILE2472.TXT

{% raw %}
```
Disk No: 2472                                                           
Disk Title: Gantt2                                                      
PC-SIG Version: S1                                                      
                                                                        
Program Title: GANTT2                                                   
Author Version: 2.0                                                     
Author Registration: $10.00                                             
Special Requirements: CGA, SIDEWAYS, and dot-matrix printer. Mouse is op
                                                                        
Are you an executive who needs real time schedule status displayed      
graphically?  While you may be remote from the activities, computer     
networks can bring you project status at electronic speeds.  And with   
that objective in mind, and while it does not create or modify the      
information, GANTT2 is a program for examining that status.             
                                                                        
GANTT2 is a full-function program designed to create Gantt charts from  
lists of dates and times.  GANTT2 can also be used with a project       
management program such as SCHEDULE for planning and tracking.          
Accompanying the GANTT2 package is an educational version of SCHEDULE   
and a starter set of batch and command files.                           
                                                                        
GANTT2 (#2472) was designed for the hard disk personal computer.        
Diskette personal computer users can achieve the same with results with 
GANTT CHARTING (#1306).                                                 
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                       <<<<  DISK #2472 Gantt2  >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To install the program, type: INSTALL                                   ║
║                                                                         ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.


```
{% endraw %}

## MENU.DOC

{% raw %}
```
                       S C H E D U L E     M E N U

Command             Description

READ                Do this first.
RUN                 Find out what a Gantt chart is.
DEMO                Run the SCHEDULE and GANTT demonstrations.
EASY                A tutor in the basics of setting up a project.

NEW    project      Start a new data base and link to VIEW.
PLAN   project      Modify the project data and link to VIEW.
BOOKIT project      Create a project reference for planned vs actual.
VIEW   project      Display the project Gantt chart.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2472

     Volume in drive A has no label
     Directory of A:\

    FILE2472 TXT      2221  11-05-90   2:09p
    FILES    LST       575   5-06-90   6:09p
    CHANGES  DOC      3717   5-06-90   6:28p
    INSTALL  BAT      1100   5-07-90   9:14a
    INSTALL2 BAT      1313   5-07-90  10:12a
    DEMO     BAT      1743   5-07-90   3:39p
    READ     BAT       452   5-07-90   3:24p
    READ     ME1       975   5-03-90  11:40p
    READ     ME2      1087   5-07-90   9:21a
    READ     ME3       800   5-04-90  12:14a
    RUN      BAT       424   5-06-90   4:50p
    RUN      PRT      7050   5-02-90   3:07p
    RUN      REF      5390   5-02-90   3:07p
    RUN      KBG      5117   5-04-90  12:51a
    GANTT2   EXE     53199   5-07-90  12:20a
    GANTT2   PIC    119040   5-07-90   9:49a
    GANTT2   MSG     18382   5-07-90   6:10p
    GANTT2   PRT     21403   4-29-90  12:46p
    GANTT2   KBG     13020   5-04-90  12:22a
    M        BAT        24   4-30-90  11:03p
    MENU     BAT       230   5-07-90   3:27p
    MENU     DOC       564   5-03-90  11:25p
    SYNTAX1  BAT       458   4-29-90   3:21p
    SYNTAX2  BAT       282   7-18-87  12:08p
    SYNTAX3  BAT       192   4-30-90  11:03p
    SYNTAX4  BAT       337   4-30-90  11:04p
    SYNTAX5  BAT       221   4-30-90  11:04p
    SYNTAX6  BAT       414   4-30-90  11:04p
    SYNTAX8  BAT       192   4-30-90  11:04p
    EASY     BAT       678   5-06-90   4:28p
    EASY     KBS      5609  11-11-89   3:57p
    EASY     KBG        51   5-06-90   6:11p
    NEW      BAT      1069   5-07-90   9:34a
    NEW      KBS      2160  12-02-86   6:39p
    VIEW     BAT       221   5-06-90   5:02p
    VIEW     KBG        51   5-06-90   6:12p
    BOOKIT   BAT      1488   5-06-90   5:08p
    BOOKIT   KBG       268   5-06-90   5:16p
    PLAN     BAT       463   5-06-90   4:56p
    PLAN     KBS       424   8-24-86   1:06p
    EXITCODE BAT       914  11-11-89   2:18a
    GO       TXT       654  12-13-90   3:29p
    GO       BAT        28  10-04-90   5:21a
           43 file(s)     274000 bytes
                           23552 bytes free
