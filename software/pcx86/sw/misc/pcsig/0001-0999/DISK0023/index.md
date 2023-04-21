---
layout: page
title: "PC-SIG Diskette Library (Disk #23)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0023/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0023"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BOWLING LEAGUE SECRETARY"

    So you've been fingered to run the company bowling league, eh?  No
    problem. This software, aptly called BOWLING LEAGUE SECRETARY, will
    make your job a snap.  The package includes 12 programs that cover
    everything needed to run a league.
    
    This highly generalized system handles league name, team, configuration,
    handicap basis, and schedule.  As distributed, the system can handle 24
    teams, up to nine bowlers per team, and up to a 50-week season.
    
    Programs are provided to start all master files, enter scores and print
    standings (weekly), as well as prepare book average listings, final
    team/bowler standings, and display or print individual team/bowler
    record sheets.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BOWL.DOC

{% raw %}
```
                     BOWLING LEAGUE SECRETARY'S SYSTEM
                   PROGRAM DESCRIPTION/OPERATIONS MANUAL
                               SEPTEMBER 1982



             All questions about the system may be directed to:

                            William W. Klaproth
                             1897 Joseph Drive
                            Moraga Ca.    94556
                                415/376-0708

                                  B/O GPC
                                Oakland Ca.
                               Tie 8/648-5337

                     BOWLING LEAGUE SECRETARY'S SYSTEM
                              SYSTEM OVERVIEW

The system is highly generalized, permitting initialization of most items
including:

                                League Name
                             Team Configuration
                               Handicap basis
                                  Schedule

     As distributed, the system can handle 18 teams, up to 5 bowlers per
team, and up to a 50 week season.  The 18 team limit is a function of the
80 character print line width used to print schedules.  If this function is
appropriately modified, or not used, a much larger number of teams can be
accommodated.  The actual limit is a function of diskette capacity, bowlers
per team, and number of weeks.

     Programs are provided to initialize all master files, enter scores and
print standings (weekly), as well as prepare Book average listings, final
team/bowler standings, and display or print individual team/bowler record
sheets.

     The system is designed to be used on either a one or two disk drive
system.  Option selection is controlled by a master MENU option.  The
program diskette is assumed to be in the A drive. Except for the smallest
leagues, you will need to maintain all bowler files on the B drive.  In a
single drive environment, DOS will provide prompts to insert the
appropriate diskette.  Just remember - Drive A = PROGRAMS;  Drive B =
FILES.











                      SUMMARY OF FILE USAGE

 *
   * File    1        2       3       4           5          6
     *
       *   TEAMS.  BOWLERS.  TEAM.  BOWLER.  HISCORES.  SCHEDULE.
Option  *  HDR      HDR      DET    .DET        DET       DET
---------- -----    ------   ----    -----     ------     ------
CREATE       C        C        C       C
SCHEDULE                                                    C
CHANGE       U        U
SCORES       U        U        U       U          C
RECAP        I        I        I       I          I         I
RECORDD      I        I        I       I
RECORDP      I        I        I       I
SORTFILE     I        I        I       I
FINAL        I        I
PRINT        I        I
DETAIL       I                 I       I

     The Table above contains a summary of file creation and usage.  All
bowling files are Random Files, and are written in packed binary format.
In the table above, "C" indicates where a file is created, "U" where it is
updated, and "I" where it is used as input.


                     FILE RELATIONSHIPS
        TEAMS.HDR                           BOWLERS.HDR
Bowler              Team
                                   No                 No
                                 +-----------------------------+
             /-----------------> | 01                 01       |
             |                   +-----------------------------+
             |  /--------------> | 02                 01       |
             |  |                +-----------------------------+
             |  |  /-----------> | 03                 01       |
             |  |  |             +-----------------------------+
             |  |  |  /--------> | 04                 01       |
 Team         |  |  |  |          +-----------------------------+
 No         Bowler ID's      /-> | 05                 02       |
+------------+--+--+--+---+  |   +-----------------------------+
|01         01 02 03 04 ..|  |                .
+-------------------------+  |                .
|02         05 06 07 08 ..|  |                .
+------------+------------+  |                .
          .  \--------------/                 .
          .                      +-----------------------------+
          .           /--------> | 32                 08       |
+---------------------+---+      +-----------------------------+
|08         29 30 31 32 ..|      | 33                 00       |
+-------------------------+      +-----------------------------+
                                              .
                                              .
     The diagram above illustrates the control mechanism utilized to
associate bowlers with their teams.
     On the left, is shown the TEAMS.HDR file.  Assume that the file has
been initialized for eight teams, four bowlers per team.  Each team has a
header record which includes the Bowler ID's of its members.  These ID's
are direct pointers to the appropriate record in the BOWLERS.HDR file.
Thus, team one has bowlers 1 through 4, team two has bowlers 5 through 8,
and so on up to team eight, which points to bowlers 29 through 32.  This is
the way the file would appear after initialilization and before any changes
were made.
     The BOWLERS.HDR file is shown on the right.  There is one header
record for each bowler which contains, among other data, a pointer to the
team with which the bowler is associated.  Notice that bowler numbers 33
and higher have 00 in the Team Number field.  This indicates that they are
substitutes and not members of any team.  To replace a member who leaves,
it is only necessary to update the appropriate pointers in these files.

                              OPTIONS INCLUDED

Option    Description
-------    ----------------------------------
        A - Creation/Maintenance Programs
CREATE     Initialize League Master Files
SCHEDULE   Create Master Schedule File
CHANGE     Master File Maintenance Option
        B - Weekly Processing Programs

SCORES     Enter Scores
RECAP      Print Weekly Standings Sheet

        C - Reporting Programs

RECORDD    Display Team and Bowler Records
RECORDP    Print Team and Bowler Records
SORTFILE   Print ABC/WIBC Book Average Report (Name sequence)
FINAL      Print Final Standings and Averages

        D - Special Utility Programs

PRINT      Print Utility - Team/Bowler Headers
DETAIL     Print Utility - Team/Bowler Detail Records


                            OPTION DESCRIPTIONS

A.  File Creation/Maintenance Programs

     1.  CREATE - This option is used to initialize the master files at the
begining of the season.  The option first prompts for LEAGUE variable data
(League name, number of teams, bowlers per team, handicap basis, and number
of weeks in season).  This information is recorded on record #1 of the
TEAMS.HDR file.

     Next, the system will prompt for team and individual bowler data,
under control of the variables entered above.  It is suggested that the
team name begin with the team number for ease of identification on the
various reports (e.g. "#1 - The AlleyCats").  Bowler names should be
entered as First-name  Last-name(e.g. Frank Brown).  The SORTFILE option
will automatically reverse the names prior to sorting to achieve correct
sequence. Vacancies should be entered as "*VACANCY" in all caps.  If the
bowler did not have an average last year, zero ("0") should be entered.
This will be the basis for computing improvement on the final standings
report.  The bowlers 21 game average will be automatically inserted if zero
is entered here.
     When all regular bowlers have been entered, the system will prompt for
substitute names and previous averages.  A mask is provided to facilitate
entry of telephone number in the right-most portion of the name field.
When all bowler records have been entered, "*END" should be keyed into the
leftmost positions of the name field to complete processing.

     2.  SCHEDULE - This option permits entry of the league schedule.
After initializing lane numbers, it prompts for dates and schedules.  Month
and day are entered as numeric variables,separated by a comma.  The team
pairings are entered as character text.  Appropriate spaces should be
entered to align the data with the Lane Numbers HEADING line.  This
approach also permits free form text to be entered.
     NOTE:  With the current forms design, a maximum of 18 teams can be
accommodated on an 80 character print line.

     3.  CHANGE - The master maintenence option permits changes to most of
the data in the header records, as well as allowing new bowler records to
be added to the files.  All bowlers added to the file after initial
creation should be added as substitutes.  When that person is placed on a
team, the pointers controlling team assignment should be changed using
function number 2 - that is,the team header record should be changed to
point to the newbolwer number, and the bowler's header record should be
changed so that team number is "0".  See the File Descriptions section for
further information.  Where a new bowler is filling a previous "*VACANCY"
position, the data can be entered directly into the existing dummy record.

B.  Weekly Processing Programs

     1. SCORES - This option posts the weekly bowling results to the master
files.  A prompt for month and day of bowling is issued at the start of
processing.  These constants should be entered as numeric values, separated
by a comma (e.g. 11,24).  This date isused on the detail record files.
     After date has been entered properly, the option will present each
team and its bowlers in sequence for posting ofscores.  Any game not bowled
must be entered as zero; the option will then request entry of blind
scores.  Four scores must be entered on each line.  The example below shows
how the scores would be entered for a bowler who missed the first 2 games.
The blind score is entered manually and can therefore be a constant score
which is league determined, average, average less 10 pins,or any other
appropriate score.

      e.g.     GAM1   GAM2   GAM3   SER
               ----   ----   ----   ---
                0      0      175   175 Bowler's actual score
164    164 0     328   Avg less 10 pins

     In the example above, the scratch score posted to the bowler's record
is a 175 series (1 game), while the team score is posted as a 503 series.

     Substitutes are indicated by entering 999 as the first game score.
The system will mark the regular bowlers record as absent and retrieve and
display the sub name for verification.  Subs are identified by their bowler
ID.  If you mis-key and get the wrong sub record, simply enter 999 in the
first game again to restart.

     In posting scores, you will actually be interactively building a copy
of the score sheet on the screen.  Game scores are totaled and compared to
the series.  If out of balance, the system will prompt you to reenter.
**NOTE**  -  When entering scores on this screen, you must depress the
enter key after each one.  It is not necessary to separate the scores with
commas.
     At the end of each team, you are allowed to enter team handicap (per
game), as well as points won.  The system requires verification (enter "y"
or "n") before you may proceed.

     In addition to updating the master files, the SCORES option also
creates the HISCORES.DET file for later processing by RECAP.


     2.  RECAP - This option sorts the results and prints the weekly
standings sheet.  The first line contains the Name of the bowling
establishment.  System date is used on this line also, so you should set
the appropriate date in DOS prior to running this program.

     Prior to printing high individual and team scores, the system will
prompt for the number of lines desired.  You may print as many or as few as
your league wants - 3 or 4 is a suggested value here.  Up to eight special
message lines may be entered for League News or other special items.

The last processing step prompts for the next bowling date (MM,DD) and uses
this to search the SCHEDULE.DET file to locate the records for the next
three bowling dates, which are then printed on the standings sheet.  A
sample output is attached.

C - Reporting Programs

     1.  RECORDD - This option permits display of team and bowler detail
record sheets.  Individual sheets can by printed with the PrtSc key.

     2.  RECORDP - Prints all team and bowler record sheets.  It is
primarily intended to prepare the end of season hard copy for filing.

     3.  SORTFILE - Prints the alphabetic "Book Average" listing for
submission to ABC/WIBC each April.

     4.  FINAL - Prints the Final Standings sheet.

D - Special Utility Options

    The following options were written to aid during the option
development/testing phase.  The user may find them useful during system
modification.

     1.  PRINT - File dump of TEAMS.HDR and BOWLERS.HDR files.

     2.  DETAIL - File dump of TEAM.DET and BOWLER.DET files.



                            SETUP AND OPERATIONS

1.  Program diskette.  To run type BOWL at the DOS prompt.  The system is
supplied with an AUTOEXEC.BAT file.

2.  Files Diskette.  It is recommended that you dedicate a separate
diskette for files only.  The program is written to run on the A disk and
access all files on B, although these references may be easily changed.  If
you have a very small league or have the 320kb dirves, you can probably get
away with combining program and files on one floppy.

3.  Initialization of system.  To setup the league, you must run the CREATE
and SCHEDULE functions.  They are independant of each other so sequence of
execution is of no concern.  CHANGE can be run as desired to correct
errors, add new bowlers,or shuffle bowlers around within the league.

4.  Weekly Processing.  Only two options (SCORES followed by RECAP) need to
be run each week.  Remember to set the system date to whatever value you
want to have printed at the top of the summary sheet.  It is suggested that
you print one master copy,from which xerographic copies can be made for
distribution to league members.

5.  Backup.  Backup of the files diskette on a regular basis is highly
recommemded.  Remember that some fields cannot be accessed by the CHANGE
option and the only way of recovering from file errors with the supplied
code is to recreate the files and install the weekly results again.
However - if you do not need the system maintained detail records for teams
and bowlers, it is possible to use the CHANGE option to update total pins,
games,etc. and recover from a lost file more easily.  The detail files are
used only to print/display the individual record sheets.
```
{% endraw %}

## FILE0023.TXT

{% raw %}
```
Disk No:   23                                                           
Disk Title: Bowling League Secretary                                    
PC-SIG Version: S2.0                                                    
                                                                        
Program Title: Bowling League Secretary                                 
Author Registration: $25.00                                             
Special Requirements: none.                                             
                                                                        
So you've been fingered to run the company bowling league, eh?  No      
problem. This software, aptly called BOWLING LEAGUE SECRETARY, will     
make your job a snap.  The package includes 12 programs that cover      
everything needed to run a league.                                      
                                                                        
This highly generalized system handles league name, team, configuration,
handicap basis, and schedule.  As distributed, the system can handle 24 
teams, up to nine bowlers per team, and up to a 50-week season.         
                                                                        
Programs are provided to start all master files, enter scores and print 
standings (weekly), as well as prepare book average listings, final     
team/bowler standings, and display or print individual team/bowler      
record sheets.                                                          
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0023

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT        18   1-04-90   1:29a
    BOWL     DOC     14969   1-04-90   1:26a
    BOWL     EXE    110886   2-27-89   1:47a
    FILE0023 TXT      2073   3-10-90   3:23p
    GO       BAT        38   3-10-90   3:14p
    GO       TXT       540   3-10-90   3:13p
            6 file(s)     128524 bytes
                           29184 bytes free
