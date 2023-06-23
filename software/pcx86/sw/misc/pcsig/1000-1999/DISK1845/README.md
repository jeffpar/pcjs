---
layout: page
title: "PC-SIG Diskette Library (Disk #1845)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1845/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1845"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SPORT MANAGEMENT PACKAGE, DISK 2 OF 2"

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

## BASEBAMG.DOC

{% raw %}
```
Documentation for Baseball/Softball statistics programs. Written by Sports
League Management Associates - August 1989 - Pat and Cathy Rankin, Props.

    1. Overview.  These modules were designed to be used in conjunction with
the Sports League Management Programs, TeamMgrM,TeamMgrD, and TeamMgrC. These
are in the shareware market as SptsMgm1.zip. This baseball/softball package
consist of three modules. TmgrBATS is designed for maintenance of composite
statistics on the each game for the team. TmgrBAIS maintains statistics on
individual team members. TmgrBAPS facilitates maintenance of statistical
DATA on the pitching staff. Data can be edited as it is entered from the
keyboard. Editing is not permissible after writing to file due to problems
in updating the figures for accumulated totals. DO NOT answer Yes to the
question Is this ready for file? until you are sure that the data that
you have entered is correct.

    2. The menu of TmgrBATS (Team Statistics) is as follows:

    1 - Post Data on Last game.
    2 - View, Print or Mark a Game Record for Deletion.
    3 - List all Game Stats on Printer.
    4 - View or Print Cumulative Statistics.
    5 - Delete a marked record.
    6 - Kill a DOS file.
    7 - Go to Individual statistics Module.
    8 - Go to Pitcher Statistics Module.
    9 - Return to Main Program

     Information to entered by Menu Item # 1," Post Data," is shown below:

      Game Number - Number of game according to game schedule.
     Date of Game - Obvious
  Opponent's Name - Obvious
        Our Score - ""
      Their Score - ""
   Innings Played - Remember those extra inning games.
     Game at bats - The following totals are for the whole team.
          Doubles -
          Triples -
         HomeRuns -
             Hits -
   Runs Batted In -
            Walks -
           Errors -
     Passed Balls - Poor catcher gets all of these.
    Hits Given Up - By all of the pitchers used in game.
  Earned Runs Opp - Number of earned runs by the opponents.
     Wild Pitches - Combined for all of the pitchers used in game.
   Date Next Game -
    NEXT Opponent -

    Menu Item #2 permits viewing of figures entered for each game. The
figures for any game can be printed out with the "P" option. The "M" and
"U" options are for deleting files from the record. Use only as a last
resort. Menu Item #3 will list all games to date on the printer. Item #4
allows viewing and printing of the cumulative statistics, i.e. the total for
all of the games played and entered into the database. Use Item $5 to delet
a record marked under Item #2. Items 6, 7, 8 and 9 are self explanatory.
    
    3. The main menu of TMGRBAIS (Individual Statistics) is as follows:

 1 - Select Player Position for data entry or viewing. "
 2 - Enter and edit as you enter, Game Hit and Field Stats. "
 3 - View or Print Statistics on individual Players."
 4 - Print All Statistics for each game to date"
 5 - Kill DOS files"
 6 - Go to Team Statistics Module"
 7 - Go to Main Sports Management Module"
 8 - Go to Pitcher Statistics Module"

     Information requested by Item #1,"Select Player" is as follows:

 1 - Selects the Pitcher position."
 2 - Selects the Catcher position. "
 3 - Selects the First Base position."
 4 - Selects the Second Base position."
 5 - Selects the Third Base position."
 6 - Selects the Short Stop position."
 7 - Selects the Left Fielder position."
 8 - Selects the Center Fielder position."
 9 - Selects the Right Fielder position."
 10 - Selects the First Utility position."
 11 - Selects the Second Utility position."
 12 - Selects the Third Utility position."
      
      This choice selects the position to which to assign each player.

      Item #2 requests entry of following information:

        Game number
      Player's Name
    Position Played
       Game at Bats
       Hits in Game
            Doubles
            Triples
          Home Runs
        Runs Scored
     Runs Batted In
     Walks Received
   Errors Committed
       Passed Balls

    Observe that most of the above items are identical to those entered
for the team stats above, except these are for the individual player assigned
to each position.  The remainder of the menu items are identical to those
explained in the above text.

    4. The main menu of TmgrBAPS "Pitchers stats" is as follows:


 1 - Review, initiate or change pitcher number assignments."
 2 - Go to Select pitcher file menu. "
 3 - Enter current game data on selected pitcher. "
 4 - View or Print Statistics on individual Pitchers"
 5 - View or Print Pitching Stats on all Game Appearances."
 6 - Kill DOS files"
 7 - Go to Team Statistics Module"
 8 - Go to Main Sports Management Module"
 9 - Go to All Players Statistics Module"

     Item #1 requests the following information:

 1 - Pitcher # 1 name
 2 - Pitcher # 2 name
 3 - Pitcher # 3 name
 4 - Pitcher # 4 name
 5 - Pitcher # 5 name
 6 - Pitcher # 6 name

     These choices require that a pitcher be assigned to each position. For
example you might have Branca #1, Newcomb, #2, Loes, #3,Labine,#4 etc.
The remainder of the entries are the same as previously explained and are
mostly self explanatory.

    5. Your comments and suggestions, pro or con, are solicited. I will make
every effort to make these programs as useful as possible to you, the user.

    6. The following additional products are available from Sports League
Management Associates at the address below:

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


                                              Pat Rankin
                                              Sports League Manamgement Assoc.
                                              867 N Lamb Blvd # 180
                                              Las Vegas, Nv 89110
                                              (702) 452-8684

```
{% endraw %}

## BASKBAMG.DOC

{% raw %}
```

Documentation for Baseball/Softball statistics programs. Written by Sports
League Management Associates - August 1989 - Pat and Cathy Rankin, Props.

    1. Overview.  These modules were designed to be used in conjunction with
the Sports League Management Programs, TeamMgrM,TeamMgrD, and TeamMgrC. These
are in the shareware market as SptsMgm1.zip. This basketball package
consist of two modules. TmgrBBTS is designed for maintenance of composite
statistics on the each game for the team. TmgrBBIS maintains statistics on
individual team members. Data can be edited as it is entered from the
keyboard. Editing is not permissible after writing to file due to problems
in updating the figures for accumulated totals. DO NOT answer Yes to the
question Is this ready for file? until you are sure that the data that
you have entered is correct.

    2. The menu of TmgrBBTS (Team Statistics) is as follows:

1 - Post Data on Last game. "
2 - View, Print or Mark a Game Record for Deletion. "
3 - List all Game Stats on Printer "
4 - View or Print Cumulative Statistics "
5 - Delete a marked record."
6 - Kill a DOS file "
7 - Go to Individual statistics Module"
8 - Return to Main Program "

     Information to entered by Menu Item # 1," Post Data," is shown below:

    Game Number  Date of Game  Opponent Name  Our Score  Their Score
    Offensive Rebounds  Defensive Rebounds  Shots Attempted  Shots Made
    Three Point Attempts  Three Pointers Made  Free Throw Attempts
    Free Throws Made  Personal Fouls  Technical Fouls  Ejections
    Date Next Game  NEXT Opponent

    Menu Item #2 permits viewing of figures entered for each game. The
figures for any game can be printed out with the "P" option. The "M" and
"U" options are for deleting files from the record. Use only as a last
resort. Menu Item #3 will list all games to date on the printer. Item #4
allows viewing and printing of the cumulative statistics, i.e. the total for
all of the games played and entered into the database. Use Item #5 to delete
a record marked under Item #2. Items 6, 7, 8 and 9 are self explanatory.
    
    3. The main menu of TMGRBAIS (Individual Statistics) is as follows:

 Menu Choice #1 must be used to select or change position played.")
 Selection must be made prior to using choices 2 - 5 ")
 1 - Select Player Position for data entry or viewing. "
 2 - Enter and edit as you enter. "
 3 - View or Print Statistics on individual Players."
 4 - Print All Statistics for each game to date"
 5 - Go to Team Statistics Module"
 6 - Go to Main Sports Management Module"

     Information requested by Item #1,"Select Player" is as follows:
 1 - Selects Guard Number 1. "
 2 - Selects Guard Number 2. "
 3 - Selects Guard Number 3. "
 4 - Selects Guard Number 4. "
 5 - Selects Forward Number 1. "
 6 - Selects Forward Number 2. "
 7 - Selects Forward Number 3. "
 8 - Selects Forward Number 4. "
 9 - Selects Center Number 1. "
 10 - Selects Center Number 2. "
 11 - Selects Utility Player Number 1. "
 12 - Selects Utility Player Number 2. "
      
      This choice selects the position to which to assign each player.

      Item #2 requests entry of following information:
   
    Game Number  Date of Game  Position Played  Player Name
    Opponents Name  Shot Attempts  Shots Made  Three Point Tries
    Three Pointers  Free Throws Tried  Free Throws Made  Points Made
    Offensive Rebounds  Defensive Rebounds  Assists  Personal Fouls
    Technical Fouls

    Observe that most of the above items are identical to those entered
for the team stats above, except these are for the individual player assigned
to each position.  The remainder of the menu items are identical to those
explained in the above text.

    5. Your comments and suggestions, pro or con, are solicited. I will make
every effort to make these programs as useful as possible to you, the user.

    6. The following additional products are available from Sports League
Management Associates at the address below:

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

    FootBaMg - A program for football team managers and coaches.

    BaskBaMg - A program for basketball team managers and coaches.


                                              Pat Rankin
                                              Sports League Manamgement Assoc.
                                              867 N Lamb Blvd # 180
                                              Las Vegas, Nv 89110
                                              (702) 452-8684

```
{% endraw %}

## FILE1845.TXT

{% raw %}
```
Disk No: 1845                                                           
Disk Title: Sport League Management, disk 2 of 2                        
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

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  Disk #1845  SPORT LEAGUE MANAGEMENT  >>>>            ║
║                         (disk 2 of 2, 1844 also)                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║ You MUST copy files to a hard drive and use PKUNZIP (disk #1364) to     ║
║     extract files.                                                      ║
║                                                                         ║
║ To start SPORTS MANAGEMENT program, type: TEAMMGRM (press enter)        ║
║                                                                         ║
║ To print documentation for SPORTS MANAGEMENT, type:                     ║
║                            COPY SPTSMGMT.DOC PRN                        ║
║ To print documentation for FOOTBALL MANAGER, type:                      ║
║                            COPY FOOTBAMG.DOC PRN                        ║
║ To print documentation for BASEBALL MANAGER, type:                      ║
║                            COPY BASEBAMG.DOC PRN                        ║
║ To print documentation for BASKETBALL MANAGER, type:                    ║
║                            COPY BASKBAMG.DOC PRN                        ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1845

     Volume in drive A has no label
     Directory of A:\

    BASEBMGR ZIP    155721   1-01-80   2:54a
    BASKBMGR ZIP     95806   1-01-80   2:57a
    FILE1845 TXT      2073   1-16-90   1:46p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT      1464   1-16-90   2:10p
    SCHEDULE ZIP     35414  12-11-92   1:05a
            6 file(s)     290516 bytes
                           27648 bytes free
