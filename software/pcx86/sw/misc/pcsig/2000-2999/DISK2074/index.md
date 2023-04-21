---
layout: page
title: "PC-SIG Diskette Library (Disk #2074)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2074/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2074"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "STATISTICALLY ACCURATE BASEBALL"

    Being an armchair baseball manager is a tough job.  For all the work you
    do during the season, the players on the screen never do what you tell
    them to do.  You yell "run for third base" and they stay put at second,
    or you tell them to bunt and they strike out.  Now there's hope.
    
    STATISTICALLY ACCURATE BASEBALL lets you bring together two major league
    baseball teams, historical as well as current, and let them do battle on
    the diamond, with you as their manager.  You can pit your managerial
    skills against the computer, a fellow armchair manager, or let two
    computerized managers go at it head to head.
    
    STATISTICALLY ACCURATE BASEBALL provides you with players from The 1988
    Cubs, A's, Bluejays and Giants, as well as The 1950 Red Sox and The 1936
    Yankees (over 120 more teams are available from the author). It's the
    answer to the question of what to do after the World Series.  Play ball!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2074.TXT

{% raw %}
```
Disk No: 2074                                                           
Disk Title: Statistically Accurate Baseball                             
PC-SIG Version: S1                                                      
                                                                        
Program Title: Statistically Accurate Baseball                          
Author Version: 3                                                       
Author Registration: $14.00                                             
Special Requirements: Hard drive recommended.                           
                                                                        
Being an armchair baseball manager is a tough job. For all the work you 
do during the season, the players on the screen never do what you tell  
them to do. You yell "Run for third base" and they stay put at second,  
or you tell them to bunt and they strike out. Well now there's hope.    
                                                                        
STATISTICALLY ACCURATE BASEBALL lets you bring together two major league
baseball teams, historical as well as current, and let them do battle on
the diamond, with you as their manager. You can pit your managerial     
skills against the computer, a fellow armchair manager, or let two      
computerized managers go at it head to head.                            
                                                                        
STATISTICALLY ACCURATE BASEBALL provides you with players from The 1988 
Cubs, A's, Bluejays and Giants, as well as The 1950 Redsox and The 1936 
Yankees. It's the answer to the question of what to do after The World  
Series.                                                                 
                                                                        
Play ball!                                                              
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## READ1ST.DOC

{% raw %}
```
        Statistically Accurate Baseball copyright 1988 Joe Damore

 To  play  baseball  you must create a DIRECTORY called TEAMS on A:, C:, or
B: drive at the top level, Then copy the teams you want to use in to the
TEAMS DIRECTORY. Note you may only have 500 teams at a time in the TEAMS DIR. 
because at this time it will only allow 500 files in the list box
at one time. You must also create a DIRECTORY called STATS on A:, C:, or B:
drive because the program will look for this directory to write your stats
files too. This directory also must be at the top level.

Also set the (SAB.CFG) programs config file for the drives you want to
use.  example: C=TEAMS  It must be at the root or top DIR on your disk.
               C=STATS               example: C:\SAB.CFG
 
      This would tell the program to look on C: drive for these DIR's.
Just edit this ascii file and resave it as ascii it must have two lines.
It is preset for the C: drive.

     Look  for  version SABpcv3.exe on Genie to  fix  the last few
bugs in version SABpc.exe and few new features.

               Remember This is Shareware!
               Thanks for your Support.

You can leave me messages on genie but I only log on once a month you can call
or write me any time.
                                   
                    Joe Damore   (817) 485-9964 after 6:00pm....
                    5716 Chesapeake
                    Watauga, Texas 76148


                                  LICENSE / WARRANTY

                                      LICENSE
        _____________________________________________________________________

             SABPCv3.zip is being distributed under the "shareware" or
        user supported concept.  This software is NOT free software.  The
        use or reproduction of this software outside of the limits specified
        in this license agreement is prohibited.

            Anyone may upload the ziped file SABPCv1.ZIP to other BBS systems
        that includes Delphi, Compuserve, PC-LINK, etc... as long as it remains
        unchanged with all of the 10 included files.  User groups may also keep
        this in thier clubs libraries.

             SABPCv3.ZIP must be copied in its original unmodified form.

             All of the files must be included in the copy.

                                    WARRANTY
        _____________________________________________________________________

              I JOE DAMORE AUTHOR OF THIS PROGRAM make no warranty of any
        kind, express or implied, including without limitation, any
        warranties of merchantability and or fitness for a particular purpose.
        JOE DAMORE AUTHOR shall not be liable for any damages, whether direct,
        indirect, special or consequential arising from a failure of this
        program to operate in the manner desired by the user. JOE DAMORE
        THE AUTHOR shall not be liable for any damage to data or property which
        may be caused directly or indirectly by use of the program.

             IN NO EVENT WILL JOE DAMORE THE AUTHOR BE LIABLE TO YOU FOR ANY
        DAMAGES, INCLUDING ANY LOST PROFITS, LOST SAVINGS OR OTHER INCIDENTAL
        OR CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR USE OR INABILITY TO USE
        THE PROGRAM, OR FOR ANY CLAIM BY ANY OTHER PARTY.


        Using the software is your acknowlegedment to all of thee above!


```
{% endraw %}

## SABPC.DOC

{% raw %}
```
         Statistically Accurate Baseball developed by Joe Damore

                   (c) Copyrighted 1987 by Joe Damore

                     Statistically Accurate Baseball

                               SABpcV3.ZIP

  This Document must always accompany the SABpc.exe or SABpcV3.exe
and the 6 Team files that come with it these are shareware files and you
can pass them to friends. But the Stats.prg and the Drafting Program and
all the other teams are not public domain but must be purchased from 
me the author. Please honor this, my price for the programs and teams 
is more than fair.


  This version of Statistically Accurate Baseball is released as 
Shareware and works with only a Color Monitor  included is four teams 
to start you off  with. The 1988 CUBS, 1988 A's, 1988 BlueJays, 1988 
GIANTS, 1950 REDSOX and the 1936 Yankees. If you find  you enjoy this game
then please send $14.00 and you will receive the Drafting Program that
lets you form your own teams from any of the teams I have created, and
also the Stats Compiler Program which compiles team stats and  lets you 
view them or print them at any time. Last but not least you get the 
complete 1987 set of teams and also 47 great teams of the past with at 
least one team included for each city. Also there are no bad bugs in
SABpcV1.exe, there are new enhancements like being able to view game stats 
at any time, pinch runners are now put on base correctly and, score 
sheet problems have been fixed. Also there is now a computer Manager 
you can play against and, if you want to play more than one game without 
rerunning the program you can. You get all this for a very low price 
so please support me, other games of this type sell for as high as 
$69.00 This money covers my three years of hard work, shipping, and 
a disk or disks. Also my wife might let me create a football program
some day.
     A little bit about me. My name is Joe Damore I am 34 years old 
and I work for GTE Directories Corp. as a System Admin. on a Interleaf 
driven Sun system. I am happily married with 4 children ages 13, 6, 
5, and 1. I have a Tandy 1000TX with a 720k 3 1/2 disk, 360k 5 1/4 disk,
768k ram, a 32meg harddrive and last but not least a VGA color system. 
    Now a little info on my program. I worked 3 years to create a  
baseball fans baseball game. This game is statistically accurate if 
you were to play a 162 game season a player should bat very close 
to his  average of that season or pitcher should be right on with 
his ERA. But you as the manager can make a difference in a teams season 
of about 10 games buy putting the right pinch hitter in or calling 
on the right  relief pitcher etc. This game does not have fancy graphics 
but like I  said it does have realism. Also one nine inning game can 
be played in 10 minutes or if you let the computer manager manage 
both teams a game can be played in less than 10 seconds this is great 
for baseball leagues or replays. At the end of the game it prints out a
score sheet so you can enjoy the game and not keep the stats yourself.
The program will also update a stats file too so you can track a whole 
season.
    NOTE: If you play a super teams league by drafting or with the 
old timer teams batting Averages will be lower than normal and pitchers 
ERA. will be higher this is normal and reflects the tougher competition 
in a league filled with super stars.
   My next release of teams is the complete 1989 baseball season 
witch I will have ready by middle Febuary 1990. The 1988 season
witch is now ready.  At a very low cost of only $8.00 the 1989 season.
will also be $8.00.
    Also if you want a team created that I don't have in my best teams 
set I will create one for you at $5.00 per team with a two team minimum.


                    Thank you very much and PLAY BALL !
                                          Joe Damore

        Heres a list of all the teams I have created to date!

1930 A'S         1973 A's          1987 A's          1988 A's
1979 ANGELS      1986 ANGELS       1987 ANGELS       1988 ANGELS
1980 ASTROS      1986 ASTROS       1987 ASTROS       1988 ASTROS
1986 BLUE JAYS   1987 BLUE JAYS    1988 BLUE JAYS    1957 BRAVES
1987 BRAVES      1988 BRAVES       1982 BREWERS      1987 BREWERS
1988 BREWERS     1985 CARDINALS    1987 CARDINALS    1988 CARDINALS
1929 CUBS        1970 CUBS         1984 CUBS         1987 CUBS
1988 CUBS        ALL TIME CUBS     1953 DODGERS      1962 DODGERS
1985 DODGERS     1987 DODGERS      1988 DODGERS      1979 EXPOS
1987 EXPOS       1988 EXPOS        1962 GIANTS       1987 GIANTS
1988 GIANTS      1968 INDIANS      1986 INDIANS      1987 INDIANS
1988 INDIANS     1986 MARINERS     1987 MARINERS     1988 MARINERS
1986 METS        1987 METS         1988 METS         1969 ORIOLES
1970 ORIOLES     1987 ORIOLES      1988 ORIOLES      1984 PADRES
1987 PADRES      1988 PADRES       1977 PHILLIES     1987 PHILLIES
1988 PHILLIES    1971 PIRATES      1987 PIRATES      1988 PIRATES
1986 RANGERS     1987 RANGERS      1988 RANGERS      1950 REDSOX
1970 REDSOX      1986 REDSOX       1987 REDSOX       1988 REDSOX
ALL TIME REDSOX  1962 REDS         1970 REDS         1987 REDS
1988 REDS        1980 ROYALS       1987 ROYALS       1988 ROYALS
1968 TIGERS      1987 TIGERS       1988 TIGERS       1962 TWINS
1964 TWINS       1970 TWINS        1987 TWINS        1988 TWINS
1983 WHITE SOX   1987 WHITE SOX    1988 WHITE SOX    1927 YANKEES
1936 YANKEES     1941 YANKEES      1961 YANKEES      1962 YANKEES
1987 YANKEES     1988 YANKEES      ALL TIME YANKEES



                     Statistically Accurate Baseball

  To play ball at the dos prompt type SABPCV3, this will start the
loading and running of the baseball program. When the program has
finished loading you will see a message on the screen with a
copyright notice. Now press any key to begin.
   Next pick the home team and then the visiting team by using your
arrow keys to move the highlighted cursor on the team you want then
press enter.
  After you have picked the teams you want, you will now select 
the starting pitchers the same way as you selected the teams.
  The next screen display will ask you if you want the computer 
to manage one of the teams or both of the teams. The computer will 
be no push over as it will play conservatively and by percentages. 
If you want the  computer to manage both of the teams a game can be 
played very quickly. Set the delay setting to Warp, Medium, or Fast 
these settings control how quickly the game displays are shown. You 
would usually set the control to Warp, and watch it fly if the computer 
is against its self.
  Last but not least it is time to choose your starting lineups 
for  each team. This menu screen will display each players name and 
their  most important stats. It will also have a PRESET lineup. Now 
look over  the stats and see if you want to use the PRESET lineup 
or select a  lineup of your OWN choice.
  After you have selected both lineups you should now see the Main 
action screen. This is where every thing happens during the game. 
The top half of the Main action screen has the Scoreboard, Outs made 
in the inning and, the Base Runners on base situation. All this keeps 
you informed on the games progress inning by inning. The bottom half 
of the Main action screen is the area where both managers make their 
strategy decisions and, where you also see the outcome of each play. 
The defensive manager makes his decision first then the offensive 
manager makes his decision. You do this by Selecting the decision you want.
  Don't worry about keeping stats S.A.B. does that for you. And 
at the end of the game it will ask you if you want a printout if you  
have a printer, or you can print them to the screen if you don't. 
Also at any time during the game you can see the starting lineup for 
either team by clicking the mouse on DEF Change for the defensive 
team, or clicking the mouse on OFF Change for the offensive team. 
You are now ready to playball.  


                   Rules Built Into The Program

     There are certain rules built into the program pertaining to 
Strategy. If you accidentally violate one of these rules you will 
be see a alert box telling you  what you did something wrong.


   SQUEEZE BUNT:                        Can only be used when there 
                                        is a runner on 3rd base.

   SACRIFICE BUNT:                      Cannot be used with runner 
                                        on 3rd base.

   STEALING:                            You cannot steal a base 
                                        already occupied.

   INFIELD IN:                          You cannot use unless there 
                                        is at least 1 runner on base.

   HOLDING A RUNNER ON BASE:            You cannot use unless there 
                                        is at least 1 runner on base.

   HIT&RUN:                             You cannot use with a runner 
                                        on 3rd base.

   DESIGNATED HITTER:                   Each team has a Designated 
                                        hitter in the lineup.

   DOUBLE STEAL:                        If a runner on 2nd base attempts 
                                        steal 3rd base and there is a
                                        runner on 1st base this auto-
                                        matically starts a double steal
                                        attempt. 
                 

Defensive Coaching Decisions



PLAY NORMAL:             Usually this is the most often defensive 
                         selection. Best situations to use would
                         be with no men on or poor base stealer
                         is on 1st base.

HOLD RUNNER ON:          You would use this to help prevent 
                         good base stealers from running on
                         you. But this also improves a batters
                         chance to get a base hit by leaving a
                         hole between 1st and 2nd base.

INT. WALK:               You are allowed to intentionally walk 
                         any batter. Good situations would be
                         with 1st base open and a runner on 2nd
                         base to put you in the position for a
                         doubleplay. Or with men on and a good
                         hitter up with two outs.

INFIELD IN:              Playing the infield in decreases the 
                         scoring chances of a runner on 3rd base.
                         It also decreases the chances of a player
                         sacrificing a runner to scoring position.
                         However it increases the batters chances
                         of hitting safely if he swings away, and
                         also decreases the chances of doubleplay.

CORNERS IN:              Playing the corners in decreases the 
                         chances of a player sacrificing a runner 
                         to scoring position. It increases the batters
                         chances of hitting safely if he swings away,
                         but it is less of a increase than playing your
                         whole infield in. Also it doesn't decrease
                         the chances of doubleplay as much.

PLAYER CHANGE:           A defensive manager buy picking this
                         selection can view his starting lineup and 
                         make a player change during the game. 
                         He can also just view his players ratings 
                         during the game and go back to the main 
                         menu with out a change.

VIEW STATS:              View the stats for this game at any time.



Offensive Coaching Decisions


SWING AWAY:              The batter just takes his cuts. This should
                         be the most often used offensive play.

BUNT:                    Used to advance base runners into scoring 
                         position in a close game. You can also bunt
                         for hit if you want.

STEAL:                   If you pick this play during the game,a
                         screen will appear to ask you what base you
                         want to steal. It will also tell you if the
                         runner was safe or out. Also, if you are
                         stealing 3rd base with a runner on 1st base
                         a double steal will occur automatically.
                         The catcher will throw at the man trying to
                         steal 3rd base.  

HIT & RUN:               It should be used with one or no outs. So
                         that your base runners have a better chance
                         to advance to the next base. But it also
                         decreases a batters batting Average.

SQUEEZE BUNT:            It should only be used with one or no outs
                         and a runner on 3rd base. A good bunter
                         will have a good chance to score the runner
                         on 3rd.

PLAYER CHANGE:           The offensive manager can pinch hit any
                         time he wants. He can also pick this choice
                         to view his staring lineup or bench to look at
                         the player ratings.

VIEW STATS:              View the stats for this game at any time.


            Explanation of the Terms Used and How They Affect
                      the Game On The Action Screen


   Homerun               All base runners score.

   Triple                All base runners advances 3 bases.

   Double*               All base runners advance 3 bases.

   Double                All base runners advance 2 bases.

   Single*               All base runners advance 2 bases.

   2BE                   All base runners advance 2 bases on a error.

   Single                All base runners advance 1 base.

   Walk                  All base runners advance 1 base.

   Bunt Single           All base runners advance 1 base.

   Sacrifice is Good     All base runners advance 1 base.

   1bE                   All base runners advance 1 base on a error.

   Grounded-Out (RA)     Base runners advance 1 base if 
                         the infield is not in. If there are
                         no base runners just a groundout.

   Grounded-Out (FC)     Fielders choice batter is safe on
                         1st base, man going to 2nd is out other
                         runners advance 1 base. If there are
                         no base runners just a groundout. 
                         Also if there is a man on 3rd base and
                         the infield is in and the runner on
                         3rd base is forced home he is out.

   Grounded-Out (DP)     Doubleplay runner on 1st base is the
                         out other runners advance 1 base. If
                         there is no one on 1st base then there
                         is just a groundout. Also if the
                         infield is in the runner on 3rd base
                         holds and the batter is out.   

   Shallow Flyout        All base runners hold.

   Deep Flyout           Runner on 3rd scores all other 
                         runners hold. If there is no one on
                         3rd base then it is just a long flyout.

   Popout                All Base runners hold.   

   Lineout               All Base runners hold.

   Fouled Out            All base runners hold.

   Strikeout             All base runners hold.


         Statistically Accurate Baseball developed by Joe Damore
                     Copyrighted 1987, 1988, 1989 by Joe Damore        
                    Statistically Accurate Baseball
                              SABpcV3.exe


STATS PROGRAM: Version 3.0 is now out using color!

  The new stats program is easy to use all you have to do is 
make menu choices and the program does all the work for you. It will 
let you view a teams compiled stats and print them.It will let you 
create a baseball league or division of 15 teams or less, and then 
it will  print the standings of the league on the screen or print 
them on your printer. This program  makes it so easy to keep stats 
so that most of your time will be used on playing the game. In V3.0 
of the STATS.prg all bugs are fixed and there is now a totals line 
on the bottom of the stats columns for both batters and pitchers. 


DRAFTING PROGRAM: Version 3.0 is now out using color!

   This new program is also easy to use and all your choices 
are menu selected. This program  allows you to draft your teams from 
any of the current teams I have created which is 100  teams right now. 
It also lets you change the permanent lineup to one of your choice 
on any team that I have created or you have created. If you wish to 
view the pitching  rotation with out making a change enter 99 return. 
This brings you to the main screen.  

NOTE:     If you wish to view the pitching rotation in the DRAFTING.prg
          with out making a change enter 99 at the 1st prompt. This
           brings you to the main screen.

NOTE:     In all of my programs you may exit them at any 
          time with Control-Break or on the Tandy as Cntrl-Hold

NOTE:     You  must have a FOLDER called STATS and a FOLDER called TEAMS
          on your A:, B:, or C: drive at the root or top level of your
          directory for SABpcV1.exe. You then may place the PROGRAMS on your
          hard drive or A: drive. Also all the Teams must be in the TEAMS
          FOLDER and the STATS.STS files will be created and put in the
          STATS FOLDER by the S.A.B. program. Also all LEAGUE.LGE files
          must be kept in the STATS FOLDER.

NOTE:     Please  tell me if you have a double sided 720k drive.
          or a 360k drive. If you don't have a hard drive tell me and
          I can set the config file for a one or two drive system for you.

ORDER FROM FOR S.A.B.

SEND TO:

          JOE DAMORE
          5716 CHESAPEAKE
          WATAUGA, TEXAS 76148

   YOUR NAME: ____________________________________________________________

     ADDRESS: ____________________________________________________________

CITY, STATE,: ________________________________________ ZIP:_______________
    
    COMMENTS: ____________________________________________________________

Drive type 720k or 360k please circle your choice.

                Thank You for  your support and interest!
                               Joe Damore



COMMON QUESTIONS:

Q. > How well do players field if they are out of position.

A. >  If a player who plays infield is put in the outfield 
     or a outfielder is put in the infield then he will perform
     poorly but when you change a infielders position to a
     different infield position then they will perform only
     one rating worse, the same goes for the outfield.

Q. > Why are some players performing at levels that
     are above or below real life.

A. >  There are three main reasons for this. First if you play
     only a short season say about 40 games which may seem like a
     lot, but its really not for baseball this will cause more 
     variations than normal. Because just like in real life your
     players will have hot and cold streaks. But over a 
     long season like the pros play statistics will level out 
     to real life levels.
       Second even if you play a full season of 162 games but, you played
     only the good teams against the good teams or you had a draft league 
     of say 10 teams which in affect gives you a super league. Pitchers
     ERA's should be higher and batters AVERAGES should be lower all other
     stats should be about the same.
       The third reason has to do with how you manage a team. 
     if you bunt, steal, or hit & run more or less than in real
     life you will see different results. How you set
     your lineup will have a big impact on RBI and Run production 
     too. Also how you handle your pitchers is very important to
     statistical out comes.


NOTE: There is a new feature in SABpcV3.exe the Computer manager is now a
      better manager than before. If you let the Computer manager manage
      both teams in the WARP mode a game can be played in as fast as
      3 seconds on a IBM 70-E 80386 computer!


     Not sure about something then please call me at home.
     after 7:00pm will be the best time to get a hold of me.
     (817) 485-9964


                                  LICENSE / WARRANTY

                                      LICENSE
        _____________________________________________________________________

             SABPCv3.ZIP is being distributed under the "shareware" or
        user supported concept.  This software is NOT free software.  The
        use or reproduction of this software outside of the limits specified
        in this license agreement is prohibited.

        This Document must always accompany the SABpc.exe or SABpcV3.exe
        and the 6 Team files that come with it these are shareware files and
        you can pass them to friends. But the Stats.prg and the Drafting
        Program and all the other teams are not public domain but must be
        purchased from me the author. Please honor this, my price for the
        programs and teams is more than fair.

             SABPCv#.ZIP must be copied in its original unmodified form.

             All of the files must be included in the copy.

                                    WARRANTY
        _____________________________________________________________________

              I JOE DAMORE AUTHOR OF THIS PROGRAM make no warranty of any
        kind, express or implied, including without limitation, any
        warranties of merchantability and or fitness for a particular purpose.
        JOE DAMORE AUTHOR shall not be liable for any damages, whether direct,
        indirect, special or consequential arising from a failure of this
        program to operate in the manner desired by the user. JOE DAMORE
        THE AUTHOR shall not be liable for any damage to data or property which
        may be caused directly or indirectly by use of the program.

             IN NO EVENT WILL JOE DAMORE THE AUTHOR BE LIABLE TO YOU FOR ANY
        DAMAGES, INCLUDING ANY LOST PROFITS, LOST SAVINGS OR OTHER INCIDENTAL
        OR CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR USE OR INABILITY TO USE
        THE PROGRAM, OR FOR ANY CLAIM BY ANY OTHER PARTY.

         Your use of this program is your agreement.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2074

     Volume in drive A has no label
     Directory of A:\

    BB       BAT        18  10-30-89  12:50a
    LIST     COM      3072   2-18-85   6:01p
    READ1ST  DOC      3452  10-26-89  12:30a
    SABPC    CFG        20   9-28-89   3:48a
    SABPC    DOC     23209  10-26-89  12:45a
    SABPCV3  EXE    231123  10-22-89  12:06a
    FILE2074 TXT      2517   1-29-90   3:45p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-30-90  12:43p
    BJAYS_88 DAT      2125   9-07-89   1:33a
    CUBS_88  DAT      2125   9-07-89   1:34a
    GIANTS88 DAT      2125   9-07-89   1:34a
    OAK_1988 DAT      2125   9-07-89   1:34a
    REDSOX50 DAT      2125   1-31-89  10:24p
    YANKS_36 DAT      2125   1-31-89  10:25p
           15 file(s)     276739 bytes
                           34816 bytes free
