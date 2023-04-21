---
layout: page
title: "PC-SIG Diskette Library (Disk #1844)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1844/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1844"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "SPORT MANAGEMENT PACKAGE, DISK 1 OF 2"

    Go ahead and volunteer to be your kid's team manager or coach.  The work
    will be easy with this software package.  SPORTS MANAGER helps you
    manage any sports team -- Little League, Pop Warner, American Legion,
    etc.
    
    It consists of three modules.  The main module, TeamMgrM, contains
    information on players that is considered necessary for proper
    administration.  Module TeamMgrC is to be used by the manager or coach
    for maintaining running comments on the performance of the various
    players on his team.  Module TeamMgrD maintains information on the
    league and team required for day to day administration.  Three packages
    designed for maintaining statistical information on baseball/softball,
    football, or basketball teams and players are immediately available from
    the author.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1844.TXT

{% raw %}
```
Disk No: 1844                                                           
Disk Title: Sport League Management, disk 1 of 2                        
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Sports League Management                                 
Author Version: 08/89                                                   
Author Registration: $20.00                                             
Special Requirements: PKUNZIP unarchiving program (disk #1364).         
                                                                        
Go ahead and volunteer to be your kid's team manager or coach.  The work
will be easy with this software package.  SPROTS MANAGER helps you      
manage any sports team--Little League, Pop Warner, American Legion, etc.
                                                                        
It consists of three modules, the main module, TeamMgrM, which contains 
information on players that is considered necessary for proper adminis- 
tration.  Module TeamMgrC is to be used by the manager or coach for     
maintaining running comments on the performance of the various players  
on his team.  Module TeamMgrD maintains information on the league and   
team required for day to day administration.  Three packages designed   
for maintaining statistical information on (1) baseball/softball,(same  
program) (2) football, or (3) basketball teams and players are          
immediately available from the address below.                           
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FOOTBAMG.DOC

{% raw %}
```
 Documentation for Football statistics programs. Written by Sports
League Management Associates - August 1989 - Pat and Cathy Rankin, Props.

    1. Overview.  These modules were designed to be used in conjunction with
the Sports League Management Programs, TeamMgrM, TeamMgrD, and TeamMgrC. These
are in the shareware market as SptsMgm1.zip. This Football package consists
of three modules. TmgrFBTS is designed for maintenance of composite
statistics on the each game for the team. TmFOBWRK maintains statistics on
individual offensive team members, except for the offensive line. TmDBLSTS
facilitates maintenance of statistical data on the defense and special teams.
DATA can be edited as it is entered from the keyboard. Editing is not
permissible after writing to file due to problems in updating the figures for
accumulated totals. DO NOT answer Yes to the question Is this ready for
file? until you are sure that the data that you have entered is correct.

    2. The menu of TmgrFBTS (Team Statistics) is as follows

    1 - Post Data on Last game.
    2 - View, or  Print a Game Record.
    3 - List all Game Stats on Printer.
    4 - View or Print Cumulative Statistics.
    5 - Kill a DOS file.
    6 - Go to FootBall Offense statistics Module.
    7 - Go to Football Defense statistics Module.
    8 - Return to Main Program.

    Information to entered by Menu Item # 1, Post Data, is shown below

    Game Number  Opponent Name  Date of Game  Our Score  Opponents Score
    Penalties  Penalty Yards  Points 1st Period  Points 2nd Period
    Points 3rd Period  Points 4th Period  1st Downs Rushing  1st Downs Passing
    Points Passing  Points Rushing  Passes Tried  Passes Completed
    Passes Intercepted  Fumbles Lost  Punts  Punts Yards  Yards Rushing
    Yards Passing  Sacks  Field Goals Tried  Field Goals Made  PATs Tried
    PATs Made

 The following figures are for the performance of the defensive team.
  
    Points Passing  Points Rushing  Points 1st Period  Points 2nd Period
    Points 3rd Period  Points 4th Period  Sacks  Passes Attempted
    Passes Completed  Passes Intercepted  Yards Passing  Points Passing
    Points Rushing  Punts  KO Return Yards

    Menu Item #2 permits viewing of figures entered for each game. The
figures for any game can be printed out with the P option. Menu Item #3
will list all games to date on the printer. Item #4 allows viewing and
printing of the cumulative statistics, i.e. the total for all of the games
played and entered into the database. Items 6, 7, 8 and 9 are self explanatory.
    
    3. The main menu of TMFOBWRK (Individual Statistics) is as follows

1 - Review Present contents of personnel files.
2 - Select Position for Data Entry.
3 - Post Individual Data on Last game.
4 - View, Edit or Print a Game Record.
5 - List all Individual Game Stats on Printer.
6 - View or Print Cumulative Statistics.
7 - Kill a DOS file.
8 - Go to Team Statistics Module.
9 - Return to Main Program.

     Information indicated by Item #1,Review Files is as follows
    Player Name - Player Position - Game Number

    If the information as to who is presently in the files is otherwise
available, this item may be skipped. This data is only printed on your
printer.

      Item #2 requests entry of following information

 1 - Selects QuarterBack # 1.       2 - Selects QuarterBack # 2.
 3 - Selects FullBack # 1.          4 - Selects Fullback # 2.
 5 - Selects HalfBack # 1.          6 - Selects Halfback # 2.
 7 - Selects Wide Receiver # 1.     8 - Selects Wide Receiver # 2.
 9 - Selects Wide Receiver # 3.    10 - Selects Tight End # 1.
 11 - Selects Tight End # 2.       12 - Selects Kicker # 1.
 13 - Selects Kicker # 2.          14 - Selects Punter # 1.
 15 - Selects Punter # 2.

    Selection of a number activates a file for that position. The use will
be further explained below. Item # 3 involves entry of the following data

 Game Number  Player Name  Player Position  Game Date  Opponent Name
 Weather Conditions  Day Or Night Gam  Starting Injuries  Injuries Incurred
 Passes Attempted  Passes Completed  Passing Yards  Rushes  Rushing Yards
 Yards Lost Rushing  Sacks  Sack Yards Lost  Points Passing  Points Rushing
 Passes Caught  Yards Passing  Points Passing  Punts  Yards Punting  Kick Offs
 KO Return Yards  PATDs Attempted  Points After TD  FGs Attempted  FG Points

    This entry identifies a player with a particular position and position
number. If the individual is replaced KILL the Ran file for the position and
number and then enter the data for the replacement. Space is limited, so make
your answers short for weather conditions and injuries. Last name and initial
is usually sufficient to identify a player. Some items apply only to certain
positions. Most passes are by the one of the quarterbacks and most receptions
by one of the wide receivers or the tight end. Offensive special team players
will only be involved in Punt returns and kickoff returns. Defensive special
teams are covered in subsequent text. The remainder of the items in the menu
are self explanatory.

    4. The main menu of TmFDBLST, offensive line and defense stats follows:


1 - Review Present contents of personnel files.
2 - Select Position for Data Entry
3 - Post Individual Data on Last game.
4 - View or Print a Game Record.
5 - List all Individual Game Stats on Printer
6 - View or Print Cumulative Statistics
7 - Kill a DOS file
8 - Go to Team Statistics Module
9 - Return to Main Program

    All of the above menu items are identical to those for the offensive team.
Position selected by Item # 2 are as follows:

 1 - Selects Off-Gd, Tackle # 1.      2 - Selects Off-Gd, Tackle # 2.
 3 - Selects Off-Gd, Tackle # 3.      4 - Selects Off-Gd, Tackle # 4.
 5 - Selects Off-Gd, Tackle # 5.      6 - Selects Off-Gd, Tackle # 6.
 7 - Selects Def Guard # 1.           8 - Selects Def Guard # 2.
 9 - Selects Def Tackle # 1.         10 - Selects Def Tackle # .
 11 - Selects Def End # 1.           12 - Selects Def End # 2.
 13 - Selects Def Back # 1.          14 - Selects Def Back # 2.
 15 - Selects Def Back # 3.          16 - Selects Def Back # 4.
 17 - Selects Corner Back # 1.       18 - Selects Corner Back # 2.
 19 - Selects Corner Back # 3.       20 - Selects Corner Back # 4.

    It is assumed that the defensive special team members will be selected
from the above team members. If additional team selections are required, I
will be happy to supply the revisions for those who register their programs.

    The items for entry for each of the above follows:

    Game Number  Player Name  Player Position  Starting Injuries
    Injuries In Game OL Sacks Allowed  OL Penalties  OL Penalty Yards
    ST Punt Returns  ST Punt Return Yds  ST Punt Return TD  ST KO Returns
    ST KO Return Yds  ST KO Return TD  ST Penalties  ST Penalty Yards
    DB Passes Comp On  DB Pass Broken Up  DB Penalties  DB Penalty Yards
    DB Tackles  DB Points Passes  DB Points Rushing  DL Sacks  DL Sack Yards
    DL Penalties  DL Penalty Yards  DL Tackles

    Definitions are OL = Offensive Line  ST = Special Team
                    DL = Defensive Line  DB = Defensive Back or Corner Back

    5. Your comments and suggestions, pro or con, are solicited. I will make
every effort to make these programs as useful as possible to you, the user.

    6. The following additional products are available from Sports League
Management Associates at the address below

    Olympics88 - Database of all Olympics Gold Medal winner since inception
of games. Also includes times and other records.

    Baskbldb - Database of Pro and college basket ball winners and records
since 1900

    FootblDb - Database of Pro and college football winners and records since
1900.

    GolfHcap - A personal golf handicap program for 1 to several  hundred
golfers.

    GolfSecy - A program for golf league secretaries, including handicapping
and scheduling.

    BaseBaMg - A program for baseball and softball team managers and coaches.

    FootBaMg - This program.

    BaskBaMg - A program for basketball team managers and coaches.

                                              Pat Rankin
                                              Sports League Manamgement Assoc.
                                              867 N Lamb Blvd # 180
                                              Las Vegas, Nv 89110
                                              (702) 452-8684

```
{% endraw %}

## SPTSMGMT.DOC

{% raw %}
```
Documentation for Sports Management Package- Written by Sports League
Management Associates-August 1989 - Pat and Cathy Rankin, Proprietors.

     1. Overview. This package was designed to serve as a template for
management of any sports team. It will greatly simplify the job of the
Little League, Pop Warner, American Legion etc., team manager or coach.
It consists of three modules, the main module, TeamMgrM, which contains
information on players that is considered necessary for proper adminis-
tration. Module TeamMgrC is to be used by the manager or coach for
maintaining running comments on the performance of the various players
on his team. Module TeamMgrD maintains information on the league and team
required for day to day administration. Three packages designed for
maintaining statistical information on (1) baseball/softball,(same program)
(2) football, or (3) basketball teams and players are immediately
available from the address below.

    Users of the programs herein documented will be expected to remit
$20.00 total for the three Team Management modules, if used beyond a
reasonable trial period. Each of the specific sports statistics packages
consisting of two to three modules each, are priced at $20.00 also. The
documentation for the particular statistical package accompanies the program.

     2. The menu of the main module (TeamMgrM.Exe) is as follows:

   "1 - <A>dd Players to YOUR Team "
   "2 - <V>iew, Edit, Print a Record, Mark or Unmark a Record"
   "3 - <P>rint a list of all players  "
   "4 - <D>elete a Marked Record "
   "5 -  Go to Team Data Manager Module"
   "6 -  Go to Team Comments Module."
   "7 -  Go to Team BaseBall Statistics Module."
   "8 -  Go to Team Football Statistics Module."
   "9 -  Go to Team Basketball Statistics Module."
   "10 - <Q>uit to operating system."

     Information to be entered by Menu Item #1 is shown below:

        Player Name
        Street address
        City, State, and Zip code
        Home Phone
        Player's Age, Height, and Weight
        Name to  Call in emergency
        EmergencyPhone Number
        Positions Player Can Play
        Date Joined Team
        Date Passed Physical Exam
        Restrictions on Physical Activity

     Choice #1 prompts the coach or manager for entry of biographical infor-
mation on each of the players. Editing of entries is possible as entries
are made. Choice #2 permits viewing, editing, or printing of the biograph-
ical information entered in Menu Item #1. This option also permits marking
a record for deletion from the file. Also, a previously marked record can
be unmarked. Selection of Choice #4 will effect the deletion of a previously
marked record.  Choice # 5 transfers program control to the the TeamMgrD.Exe
module. Choice #6 tranfers control to the TeamMgrC.Exe module. Choice
# 7 takes the user to the Team Baseball/Softball Statistics Module.
Choice # 8 selects the Team Football Statistics Module. Choice # 9 selects
the Basketball Statistics Module. Choice # 10 returns the user to the
operating system, usually MS-DOS or PC-DOS. The print function is compatible
with any Epson or similar printer.  For drivers for other printers contact
the author after registering the programs.

     The Menu of the TeamMgrD.Exe module is as follows:

        1 - <E>nter Data on League operation "
        2 - <V>iew or Edit league data "
        3 - <P>rint League information "
        4 - <G>o to Manager Comments Module"
        5 - <R>eturn to Main Program "

     Information to be entered by Menu Item #1 is shown below:

        TeamName
        League Name
        Team Manager or Coach Name
        Team Manager or Coach Phone
        Asst Mamager or Asst Coach Name
        Asst Manager or Asst Coach Phone
        Sponsor Name
        Sponsor Phone
        League Executive Name
        League Executive Phone
        Sponsor Cash Contribution
        Sponsor Supplied Equipment
        Day Or Days Of Week Of Games
        Number Of Games Scheduled
        Season Start Date

     The above Menu choices are self-explanatory and follow the same pattern
as for the first module, TeamMgrM.Exe.

         The Menu for TeamMgrC. Exe is as follows:

        1 - <M>ake comments on a player "
        2 - <D>isplay and/or print manager's comments on a player "
        3 - <L>ist the manager's comments on all of the players"
        4 - <R>eturn to the Player Data module "
        5 - <C>hain to Team Data Manager module"
        6 - <G>o to Team Statistics Module"
        7 - <Q>uit and return to Operating System "

        Choice #1 permits the team manager or coach to log pertinent comments
on the various members of the team.  It is especially useful in maintaining
a record of the growth and development of the players personal traits and
playing skills. Choice #2 displays previously entered comments and Choice #3
prints a list of all of the comments in the file.

     3. Your comments and suggestion are urgently solicited. I want to make
these programs as useful as possible while still retaining the generality.

     4. Additional sports products available from Sports League Management                              
Associates at address below:

     Olympic88 -- Database of all Olympics Gold Medal Winners since 1896 with
all record times and distances.

     BaskBlDB -- All pro and college basketball winners and records since
1900.

     FootBlDB -- All pro and college football winners and records since
     1900.

     GolfHcap -- A golf handicap program for one to 100 golfers for PC
     compatibles.

     GolfSecy -- A program for golf league secretaries. Time and effort
     saver.

   
                                         Pat Rankin
                                         Sports League Management Assoc        
                                         867 N Lamb Blvd #180
                                         Las Vegas, NV, 89110
                                         702-452-8684

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1844

     Volume in drive A has no label
     Directory of A:\

    FILE1844 TXT      2073   1-16-90   1:45p
    FOOTBMGR ZIP    161177   1-01-80   2:59a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT      1464   1-16-90   2:09p
    SPTSMGMT ZIP    136619   1-01-80   3:02a
            5 file(s)     301371 bytes
                           17408 bytes free
