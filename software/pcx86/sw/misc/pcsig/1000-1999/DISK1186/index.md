---
layout: page
title: "PC-SIG Diskette Library (Disk #1186)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1186/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1186"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SIMBASE 1 OF 2 (ALSO 1187)"

    SIMBASE is a baseball simulation program.  It contains data for two
    teams.  This program gives you a tool to analyze the value of a
    particular player or a group of players to the team over the course of
    one or more full seasons.  It lets you review the pluses and minuses of
    different player lineups.  And it provides a framework where you can
    forecast the likely outcome for a full baseball season.  To really use
    SIMBASE productively, you must run a large number of games and look at
    the averages.  Once you are familiar with the program, you will want to
    amend the LINEUPS.DAT file by shuffling or adding and subtracting
    players.  This is easily done with any wordprocessor that reads and
    writes ASCII files.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1186.TXT

{% raw %}
```
Disk No  1186
Program Title: BASEBALL version 2.0 (Disk 1 of 2)
PC-SIG version 1
 
SIMBASE is a baseball simulation program.  It is a limited version,
however, there is only data for two teams.  This program gives you a
tool to analyze the value of a particular player or a group of players
to the team over the course of one or more full seasons.  It lets you
review the pluses and minuses of different player lineups.  And it
provides a framework where you can forecast the likely outcome for a
full baseball season.  To really use SIMBASE productively, you must run
a large number of games and look at the averages.  Once you are familiar
with the program, you will want to amend the LINEUPS.DAT file by
shuffling or adding and subtracting players.  This is easily done with
any wordprocessor that reads and writes ASCII files.  This disk is disk
one of a two-disk set.  The second disk of the set is disk #1187.
 
Usage:  Sports/Entertainment.
 
Special Requirements:  None.
 
How to Start:  Type SIMBASE (press enter).
 
Suggested Registration:  $25.00
 
File Descriptions:
 
SIMBASE  DOC  Documintation for SIMBASE.
SIMBASE  EXE  Main program.
GO       BAT  Batch file to start program
READ     ME   Introductory text file
SETUP    BAT  Batch file to configure program
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG Inc.

```
{% endraw %}

## SIMBASE.DOC

{% raw %}
```
                         Baseball Simulation Program  
                                                       
                               October 10, 1988          
                                 Version  2.0          
                                                       
                                 Philip Smith          
                              109 Tripp Crescent       
                               Nepean, Ontario        
                               Canada  K2J 1E2        
                                                       



                              TABLE OF CONTENTS


I.  INTRODUCTION . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  1

II.  RUNNING THE PROGRAM . . . . . . . . . . . . . . . . . . . . . . . . .  2

III.  THE FUNCTION KEYS. . . . . . . . . . . . . . . . . . . . . . . . . .  4

IV.  HOW THE PROGRAM WORKS . . . . . . . . . . . . . . . . . . . . . . . .  7

V.  SETTING THE PROBABILITIES THAT DRIVE THE SIMULATION  . . . . . . . . .  9

VI.  COMMAND LINE OPTIONS. . . . . . . . . . . . . . . . . . . . . . . . . 11

   VI.1  RANDOM NUMBER GENERATORS  . . . . . . . . . . . . . . . . . . . . 11

   VI.2  DISPLAY MONITORS AND VIDEO MODES  . . . . . . . . . . . . . . . . 12

   VI.3  THE DATA SUB-DIRECTORY  . . . . . . . . . . . . . . . . . . . . . 12

   VI.4  THE PITCHER POWER . . . . . . . . . . . . . . . . . . . . . . . . 13

VII.  ILLUSTRATIVE PRACTICAL RESULTS FROM THE PROGRAM  . . . . . . . . . . 14

VIII.  FUTURE IMPROVEMENTS . . . . . . . . . . . . . . . . . . . . . . . . 15

OVERVIEW OF THE BASEBALL SIMULATION PROGRAM  . . . . . . . . . . . . . . . 16

CONDITIONS ON THE USE OF THE BASEBALL SIMULATION PROGRAM . . . . . . . . . 17

REGISTRATION FORM  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18
                                   -  1  -

                          Baseball Simulation Program
                                                       
                               October 10, 1988          
                                 Version  2.0          
                                                       
                                 Philip Smith          
                              109 Tripp Crescent       
                                Nepean, Ontario        
                                Canada  K2J 1E2        


I.  INTRODUCTION

         This is a program to simulate baseball games.  And baseball is a 
great game indeed.  Millions of fans testify to this fact every year by 
spending enormous amounts of time and money on it.  The game is fun as an 
athletic challenge, as a casual diversion and as a subject for serious study.  
Personally I love it.  If you are reading this, you probably do too. 

         The game of baseball lends itself quite naturally to probabilistic 
analysis.  This BASEBALL SIMULATION PROGRAM is intended as a tool for use in 
such analysis.  This program is NOT intended as a "game" itself.  It does NOT 
make little graphic images of baseball players run about the screen and it 
does NOT cast you in the role of team manager for a particular game, at least 
not in the sense of letting you decide when to bunt, when to pinch hit or 
when to bring in a relief pitcher.  What the program DOES do is this: it 
provides you with a tool for analyzing the value of a particular player or a 
group of players to the team over the course of one or more full seasons.  It 
allows you to review the pluses and minuses of different player lineups.  And 
it provides a framework within which you can forecast the likely outcome for 
a full baseball season.  You can use the program to help you assess current 
or historical won-loss records in the major leagues, or you can use it to 
help improve the prospects of your own local team. 

         This is the second major version of the SIMBASE program.  The first 
version was released in August 1987.  There are several improvements in this 
new version including: 
 
            -  an improved user interface; 

            -  more efficient coding, in the C language
               instead of in BASIC;

            -  a new database with statistics for all 
               26 major league teams; 

            -  the ability to select teams and lineups 
               interactively; 

            -  display of player performance statistics
               during the simulations; 

            -  a choice of random number generator 
               functions; 
 
            -  a "pitcher importance" factor;  and

            -  detailed printed output.
                                   -  2  -


         Baseball is a complex game.  It is safe to say that no one will ever 
succeed in creating a program that can simulate all of its features 
faithfully.  Certainly there is much room for improvement in my program.  I 
am continuing to work on it, making it both more realistic and more 
efficient.  But the the program does simulate the outcomes of real world 
major league baseball games moderately well.  I hope you find this new 
version of SIMBASE both useful and fun. 


II.  RUNNING THE PROGRAM

          Running the BASEBALL SIMULATION PROGRAM is easy.  You just type its 
name SIMBASE at the DOS prompt, wait while several supporting files are read 
in from the disk and proceed by choosing options using the function keys.  

          The program is distributed on two diskettes.  Diskette #1 contains 
the program itself (SIMBASE.EXE), this documentation file (SIMBASE.DOC), a 
batch file to copy the SIMBASE files to your hard disk if you have one 
(SETUP.BAT), a quick start batch file (GO.BAT) and a small text file with 
basic information about the program (README).  Diskette #2 contains six 
PREBAT and POSTBAT files (PREBAT.DAT, PREBAT1.DAT, PREBAT2.DAT, POSTBAT.DAT, 
POSTBAT1.DAT and POSTBAT2.DAT) and twenty-six TEAM files (TEAM1, TEAM2, ... 
TEAM26).  

          You can run the program by putting diskette #1 in your a: drive, 
putting diskette #2 in your b: drive and issuing the command: 

          SIMBASE f=b:\

at the DOS prompt.  (The "f=" option and other command line options are 
explained in Section VI below).  If you have a hard disk drive you can 
create a sub-directory with a name such as SIMBASE, copy all of the files 
from the two distribution diskettes onto the hard drive and then simply 
issue the command:

          SIMBASE

at the DOS prompt.  In this case the "f=" option is not needed because the 
default case assumes all files are in the same sub-directory on the same disk 
drive.  However, if you wanted to use the command line option anyway the 
proper form would be: 

          SIMBASE f=c:\SIMBASE\

assuming that your hard drive is designated c: and the sub-directory where 
the files are stored is named SIMBASE.  

          When the program is loading you will see a message displayed on the 
bottom line of the screen that says:  "Now reading the baseball statistics.  
Please be patient."  When the statistics have been completely read in and the 
program is ready to respond to your commands a second message will be 
displayed on this line that says:  "The baseball statistics are now read in.  
Press F1 for help."  Alternatively, if the program is unable to find the 
statistics it is looking for, an error alert will be displayed on the message 
line.  These examples illustrate an important feature of the program.  The 
bottom line of the screen always acts as a message line.  It provides 
important information about what the program is doing and what kind of inputs 
                                   -  3  -


it expects from you, if any.  You should keep your eye on the message line. 

          After the program is loaded you can begin by pressing the F1 key.  
This will give you a small "help screen" that summarizes the separate actions 
performed by each of the function keys.  The program uses thirteen such keys: 
the ten function keys themselves (F1, F2, ... F10), the first two control-
shifted keys (<ctrl>-F1 and <ctrl>-F2) and the escape key (ESC).  Section III 
below provides a detailed account of what each function key is used for.

          If you want to get a quick idea of what the program is all about, 
you should begin with the F5 key.  You will see the baseball diamond and the 
scoreboard appear.  A player will come up to bat.  A single game simulation 
will then begin, taking you step-by-step through the probabilistic outcomes 
for each AT BAT phase, using default teams and lineups.  You proceed from one 
step to the next by pressing a key -- any key except the ESC key, which takes 
you out of the single game simulation and back to the main menu.

         Stepping through a single game in this manner is a useful way 
to learn how the program works.  But it is not what the program is really 
intended for.  To really use SIMBASE productively you must run a large number 
of games and look at the averages.  Random factors can easily dominate in any 
one ballgame.  The results of one or two games alone mean almost nothing.  To 
see what's really going on, you must run a large number of games and look at 
the central tendency.  This is true in real life baseball and it's also true 
in this simulation program.  The difference however is that in real life it 
takes six months to complete a full season's worth of games.  With this 
program it takes only five minutes or so!  (It could take more or less, 
depending on what kind of computer you are using.) 
 
         To run a multi-game simulation, just press the F6 key.  The more 
games you run the better, from the point of view of getting a reliable 
statistical sample.  But there are tradeoffs here.  You don't want to sit 
waiting in front of your computer screen for too long.  And anyway, there are 
diminishing returns:  after a point, adding more games doesn't make the 
sample much more reliable.  You'll have to experiment with the program to 
arrive at your own judgement on how large your samples should be.  If you've 
got a very powerful machine, say an 80386 or an 80286 with a stepped up clock 
speed, you can afford to use larger samples.  Personally I like to run three 
full seasons of 162 games -- 486 games in total -- for my sample.  But this 
takes fifteen minutes on my 10 MHz 80286 based machine.  You may want to 
settle for less.  The maximum number of games you can do at one time is 650. 

         Once you are familiar with the program and are using it seriously, 
you will want to amend the player lineups by shuffling players.  Rearranging 
the lineups between simulations is the name of the game here.  It's by doing 
this that you can learn the net advantage of using batter X in the 3rd 
batting spot instead of in the 4th one, for example.  You do this with the F3 
key.  You will also want to work with a variety of different teams.  You 
choose your teams with the F2 key.  And you will want to see lots of detailed 
output from the simulations, on your screen and possibly on your printer.  
For this you use the F7, F8 and F10 keys.  You may also want to examine the 
input statistics (which come from the 1987 season) and the associated 
probabilities and PREBAT/POSTBAT plays that drive the simulations.  You do 
this using the F4, F9, <ctrl>-F1 and <ctrl>-F2 keys. 
 
         Eventually you may want to set up your own database, perhaps using 
statistics from your local amateur and semi-professional baseball teams.  
                                   -  4  -


This is easily done with any word processor that reads and writes pure ASCII 
files.  (PC-WRITE (C) and NEW YORK WORD (C) are two excellent shareware 
options for this.)  When you create new TEAM files or make changes to the 
existing National and American League files be sure to stick exactly to the 
current format.  The program expects certain information to be in certain 
columns, although it is tolerant about the order in which you put the lines 
within any particular file. 


III.  THE FUNCTION KEYS

          The program's operation is based on 13 major function keys:  the 
keys F1, F2, ... F10, the control-shifted function keys <ctrl>-F1 and 
<ctrl>-F2 and the escape key ESC.  If the program is expecting one of these 
keys and you press some other key, you will hear a sharp beep.  The following 
is an account of how each of the 13 function keys are used. 

          Function key F1 is the help key.  You can press this key whenever 
the program expects a major function key and it will display a short 
explanation of what each of the 13 function keys is used for. 

          Function key F2 is used to select the teams that will play.  If you 
do not press this key to select teams explicitly, then the two default teams 
Toronto Blue Jays and New York Yankees will be used.  (These two teams are 
the defaults because the are named TEAM1 and TEAM2.  If you want two other 
teams to be the defaults, all you have to do is reorder the team names 
accordingly.)  When you press the F2 key, the 26 National and American League 
team names will be displayed.  You use the cursor control keys (the arrow 
keys) to move to the first team you want, and then press the return key.  
This will select the visiting team and display its name at the top of the 
screen.  Then you use the cursor control keys again to move to the second 
team you want, and select it by pressing the return key a second time.  You 
can change your mind if you wish, by simply repeating the procedure.  You can 
even have the same team play against itself!  When your selections are ready 
you press the ESC key.  The program proceeds to read the statistics for the 
players on the two selected teams.  It then returns to the main level.  You 
are ready to execute another function by pressing another function key.  

          Function key F3 is used to select the player lineups.  Each team 
has a default lineup and these defaults are displayed initially.  You change 
the lineups in the following manner.  First move the cursor, using the arrow 
keys, to select a player.  Press the return key to select the player and it 
will then be shown as "selected" at the bottom of the screen.  Then move the 
cursor to another player and press the return key again.  The previously 
selected player will be swapped for this second player.  The players not 
currently in the 10-player lineup are listed as hitters and pitchers on the 
bench.  These players are "stacked" on top of one another and only one of 
them can be seen at a time.  You must move the cursor to the first one and 
then page through the list one by one.  When you complete the list of hitters 
on the bench the cursor will jump to the list of pitchers.  The "select and 
swap" procedure can be used either to switch the positions of two players 
already in the lineup, or to move players to and from the bench. 

          The game can play with or without the designated hitter rule.  The 
lineups include nine places for batters and a separate, tenth place for the 
pitcher.  If you wish to play by National League rules, the pitcher must be 
listed twice, once as a hitter and again as a pitcher.  The database has all 
                                   -  5  -


pitchers' pitching records, but only a few pitchers' batting records are
included at this time.  If you want to play without the designated hitter 
rule and the batting record for the pitcher you have chosen is not in the 
database, then I suggest you use the batting record for another pitcher.  
Most pitchers are poor hitters, so this approximation may work adequately in 
many cases.  If you simply must have the proper statistics for your favorite 
pitcher, then you can add them to the database yourself:  the statistics are 
stored in a set of ASCII files called TEAM1, TEAM2, ... TEAM26 that can be 
easily modified by virtually any wordprocessing program.  

          Function key F4 is used to display the player statistics for the 
two teams that will play or have just played.  These are the statistics that 
drive the simulations.  They are drawn from the full 1987 season and include 
all major players on each team.  The statistics displayed for hitters are the 
number of at bats (AB), the number of singles (1B), doubles (2B), triples 
(3B) and home runs (HR), the total number of hits (H), the number of bases on 
balls (BB), the number of strikeouts (SO), the number of other outs (OO), the 
batting average (BA) and the slugging average (SA).  For pitchers the 
statistics displayed are the number of wins (W) and losses (L), the number of 
at bats by opponents (AB), the number of one-to-three-base hits by opponents 
(1-3B), the number of home runs by opponents (HR), the total number of hits 
by opponents (H), the number of bases on balls given up to opponents (BB), 
the number of strikeouts of opponents (SO), the batting average of opponents 
(BA), the on-base average of opponents (OBA) and each pitcher's earned run 
average (ERA).  There are four screens of data and you page from one to the 
next by pressing any key.

          Function key F5 is used to play a single game in step-by-step mode.  
This function is included in the program to demonstrate how the simulations 
are conducted.  When you press F5 a baseball diamond is displayed with an 
accompanying scoresheet.  You cause the simulations to proceed by pressing 
any key.  Three keypresses are required for each batter, since there are 
three phases to each at bat (more on this in Section IV below).  A box on the 
screen contains text describing what is happening.  The F5 function has no 
real use other than to demonstrate, in slow motion, how the simulations are 
performed.  It is not intended as a "game" function, as no provision has been 
made to allow player substitutions or other decisions by the manager during 
the course of the game.  Such game features could easily be included, 
however, and I may add some to the F5 function in future if users indicate 
they would like to have them built in. 

         When you use the F5 function to demonstrate how a ballgame is 
simulated you will see a brief textual description of what is happening in a 
box in the lower left hand portion of the screen.  You will also see a play 
number and a probability, enclosed in square brackets, within this same box.  
The play number identifies the outcome taken from the PREBAT.DAT and 
POSTBAT.DAT files (and displayed with the <ctrl>-F1 and <ctrl>-F2 keys -- 
more on this below).  When you use the "r=" command line option to select a 
random number generator explicitly, the random numbers themselves and the 
associated seed value will also be displayed.  

          Function key F6 is the most important function key in the program.  
It causes a number of game simulations to be performed, using the teams and 
lineups that have been previously selected.  When you press F6 a small box 
appears on the screen asking how many game simulations you wish to compute.  
You must select a number greater than 0 and no more than 650.  It takes about 
1.75 seconds to compute each game simulation on my 80286 based PC. It could 
                                   -  6  -


take more or less time than this on your machine, depending on what kind you 
have.  The simulation time per game is also affected by the random number 
generator used.  When the simulations are complete a short summary of the 
results will be displayed on the screen.  This summary includes the total 
runs, hits and errors accounted for by each team plus the averages, standard 
deviations and variances for each of these variables.  The number of wins and 
the winning percentage for each team is also displayed.  You can see more 
detailed results by using the F7, F8 and F10 keys.  When you use the F6 
function to conduct multiple simulations, exactly the same process is being 
followed as when you conduct a single simulation using the F5 function, 
although the play-by-play results are no longer displayed on the screen. 

          Function key F7 displays the player statistics for the simulated 
games.  The display is similar to that obtained with the F4 key, except that 
the statistics are calculated from the simulations rather than from the 1987 
season.  Four screens are displayed, showing the hitters and pitcher from 
each team.  You display these screens sequentially by pressing a key.  If the 
number of games simulated is very large, the simulated player statistics 
should be close to the actual statistics from 1987.  For a small number of 
games however, the statistics could diverge quite markedly from the full 
season benchmark numbers.  

          Function key F8 displays the detailed runs, hits and errors table 
for the previous set of simulated games.  This display shows the number of 
runs, hits and errors accounted for by each team for each game simulated.  It 
can go on for several screens if a large number of games have been simulated, 
since only 15 games can be shown on a single screen. 

          Function key F9 displays the hitting probabilities that drive the 
simulations.  These probabilities are calculated from the player statistics 
for the 1987 season.  Three sets of probabilities are displayed.  The first 
is the set of probabilities based solely on the hitters' overall batting 
records (that is, without any allowance for the particular pitcher they will 
be facing).  Each hitter has a separate set of probabilities in this display, 
based on his own record.  The second set of probabilities is based solely on 
the opposing pitcher's statistical record.  All hitters on a particular team 
have the same set of probabilities in this case, as they all face the same 
opposing pitcher.  Finally, the third set of probabilities is a combination 
of the first two.  In fact, this third set of probabilities is the one 
actually used in the simulations.  In combining the hitters' probabilities 
with the pitchers' it is possible to put relatively more or relatively less 
weight on the pitcher's record.  Baseball lore has it that "good pitching 
beats good hitting", suggesting that the pitchers' probabilities should get 
the greater weight.  But you may not agree with this.  The program 
incorporates a parameter (the "pitching power") that will allow you to put 
more or less weight on the pitchers' statistics relative to the hitters', 
according to your preference (more on this below).  The default value for 
this parameter is one, which implies equal weight for pitchers and hitters. 

          Function key F10 generates simulation output for the printer.  Two 
kinds of output can be obtained: a short summary of the results or a longer, 
more detailed summary.  The short summary includes: 

            -  the number of games played;

            -  the "pitching power" used;

                                   -  7  -


            -  the type of random number generator used;

            -  the lineups for each team;

            -  the runs, hits and errors summary table 
               (same as displayed automatically on the 
               screen following a set of simulations);  and 

            -  the player performance statistics (same 
               as displayed on the screen with the F7 
               key). 

The longer printout includes all of these results plus the detailed game-by-
game runs, hits and errors results (the same as displayed on the screen with 
the F8 key). 

          The <ctrl>-F1 key displays the PREBAT plays that drive the 
simulations.  There are 137 of these plays.  Their role in the simulations is 
described in more detail in Section IV below.  Some impossible (zero 
probability) plays have been included in the list for completeness.  You can 
choose to see these too or to pass them by, as you prefer.  You can also 
choose the play number (between 1 and 137) that you wish to begin with. 

          The <ctrl>-F2 key is similar to the <ctrl>-F1 key and displays the 
POSTBAT plays that drive the simulations.  There are 607 of these plays.  
Their role too is described in more detail in Section IV below.  Again, some 
impossible (zero probability) plays have been included in the list for 
completeness.  You can choose to see these too or to pass them by, as you 
prefer.  You can also choose the play number (between 1 and 607) that you 
wish to begin with. 

          Finally, the ESC key is used to exit the program.  Whenever you 
press this key a warning will appear on the message line at the bottom of the 
screen, asking if you REALLY want to quit the program.  If you do, then press 
the y key for yes.  Pressing any other key will tell the program to continue 
executing. 


IV.  HOW THE PROGRAM WORKS

          The program generates probabilistic outcomes for a sequence of 
AT BATs, based on individual batter and pitcher statistics from real world 
games.  Each AT BAT is broken down into three PHASEs, called the PREBAT 
phase, the BATTING phase and the POSTBAT phase.  The program generates 
random numbers between zero and one for each PHASE of each AT BAT, and 
then looks up the associated outcome in a probability table.  Several 
alternative random number generators are available within the program, 
although the results are not greatly affected by the particular choice (see 
Section VI on command line options for more information about alternative 
random number generators).  The program keeps generating AT BATs until three 
outs are accumulated.  Full nine-inning games are simulated.  The possibility 
of extra innings is allowed for.  The program can simulate several games in 
rapid succession and then generate a summary table displaying the results.  
To print the results, use F10. 

          The three PHASEs of each AT BAT are as follows:

                                   -  8  -


     (1)  The PREBAT phase.

          This is the period while the batter is at the
          plate.  During this period runners may attempt
          to steal or may be picked off, balks may occur,
          wild pitches may be thrown, etcetera.  In other
          words, any runners who happen to be on base may
          advance or be thrown out in various ways.

     (2)  The BATTING phase.

          This is the PHASE where the direct outcome of 
          the AT BAT itself is determined.  It can be one 
          of eight possibilities: 

             (i)  a hit that is normally a single;
            (ii)  a hit that is normally a double;
           (iii)  a hit that is normally a triple;
            (iv)  a home run;
             (v)  a walk;
            (vi)  a strikeout;
           (vii)  a ground ball that is normally an out; 
          (viii)  a fly ball that is normally an out.

     (3)  The POSTBAT phase.

          This is the period when runners, possibly
          including the hitter, are running the bases
          after the BATTING outcome.  It is a time when
          fielding, throwing and running errors, double
          plays, etcetera can occur.

The net outcome from the AT BAT is the combined result of the interdependent 
outcomes from these three PHASEs. 

          The simulation is organized around the eight possible states of the
bases that may occur:

     (1)  All bases clear.
     (2)  One player on first.
     (3)  One player on second.
     (4)  One player on third.
     (5)  Players on first and second.
     (6)  Players on second and third.
     (7)  Players on first and third.
     (8)  Bases loaded.

All innings start with state (1) and proceed through a series of 
transformations to other states as the inning progresses.  The probabilities 
of different outcomes under each of the three sequential PHASEs of an AT BAT 
depend upon the initial state.  For example, the probability of a ground ball 
double play at first and second in the POSTBAT phase is zero if the initial 
state is (1) or (3) or (4) or (6), but it will be a positive number with any 
other initial state. 
                                   -  9  -
  

V.  SETTING THE PROBABILITIES THAT DRIVE THE SIMULATION

          In the present version of the program, the probabilities for the 
outcomes under phases (1) and (3) are determined independently of the player 
statistics.  These probabilities can be examined by using the <ctrl>-F1 and 
<ctrl>-F2 function keys.  I have been intending to revise the PREBAT and 
POSTBAT plays, deriving better estimates of the probabilities based on the 
results of Project Scoresheet (see below), but this still lies in the future.  
I also intend to improve the program so that these probabilities get adjusted 
on the basis of the individual player statistics, rather than being 
predetermined.  The probability of a successful steal, for example, should 
depend crucially on who is on base and who are pitching and catching.  

          By the way, for those not familiar with Project Scoresheet, this is 
an informal non-profit organization of baseball fans scattered across North 
America that keeps detailed computerized records on all baseball games played 
in the National and American leagues.  The organization is based in Chicago. 
It has accumulated extremely detailed records on every major league baseball 
game played since (and including) 1984.  The database is available to the 
public both in printed form and on MS-DOS formatted floppies.  For more
information see the publication "The Great American Baseball Stat Book," 
published by Ballantine Books in New York in 1987.  This book presents a 
large volume of statistics derived from the Project Scoresheet database.  
Alternatively, you can write to Project Scoresheet, P.O.  Box 46074, Chicago, 
Illinois, 60646. 

          Developments during PHASE (2) of the simulation really constitute 
the heart of the game.  It is here that batter meets pitcher and the real 
action takes place.  In this PHASE of the game the individual player batting 
and pitching statistics are used to determine the probabilities of the 
different outcomes.  The probabilities are recomputed separately for each 
batter-pitcher combination. 

          The computed BATTING probabilities are based on performance 
statistics from previous baseball games -- the 1987 season in the case of the 
distribution diskettes.  The player statistics themselves are recorded in the 
ASCII files TEAM1, TEAM2, ...  TEAM26.  You may want to update the statistics 
with numbers for the current season when they are available.  Or you may want 
to add data for your own local amateur or semi-professional teams.  There are 
many sources of data you can draw on to update or augment the database, 
including your daily newspaper.  I used "The Great American Baseball Stat 
Book," referred to above, "The 1988 Elias Baseball Analyst" (Macmillan 
Publishing Company, New York, 1988), "Gravengood's Baseball Today" (PPC 
Publications, 1988) and "The Sporting News Official Baseball Guide" (The 
Sporting News Publishing Company, 1988) as my primary sources. 

          How are the BATTING probabilities for PHASE (2) calculated?  Let's 
suppose Tim Wallach comes up to bat and Dwight Gooden is pitching for the 
Mets.  The question then is, which of the eight possible outcomes listed 
under the BATTING phase above will be the outcome?  Let's look first at 
Wallach's stats.  He had 593 official AT BATS last year plus 37 bases on 
balls, for a total of 630 plate appearances.  (Free trips to first base are 
not counted in official "at bats" but they are counted in "plate 
appearances".)  That means his total ex post probability of walking in any 
given plate appearance was 5.6 per cent (100*37/630).  Wallach got 177 hits 
in the 1987 season, of which 105 were singles, 42 were doubles, 4 were 
triples and 26 were home runs.  Consequently the probabilities of his getting 
                                   -  10  -


a single, double, triple or home run can be calculated as 16.7 per cent, 6.7 
per cent, 0.6 per cent and 4.1 per cent respectively.  He struck out 98 times 
and hit ground ball or fly ball outs 318 times.  So his overall ex post 
probability vector, based on his 630 plate appearances against a wide range 
of pitchers in 1987, was quite impressive and looked this way: 

          Single                   16.7%
          Double                    6.7%
          Triple                    0.6%
          Homer                     4.1%
            Hit, total              -----> 28.1%

          Base on balls                     5.6%
            On base, total                  -----> 33.7%

          Strike out                       15.6%
          Ground or fly ball out           50.7%
            Out, total                      -----> 66.3%
              Total                                 -----> 100.0%

          But what about the influence of Met ace Dwight Gooden?  These 
averages for Wallach are based on the wide variety of pitchers he faced 
through the course of the 1987 season.  Gooden is substantially above average 
in pitching ability, a real "good-un" as Duke Snider likes to say.  How do we 
take this into account?  One possibility would be to recompute Wallach's 
averages using only his plate appearances against Gooden.  But this would 
give us a very small sample and would be statistically unreliable.  It would 
gauge neither Wallach's hitting ability nor Gooden's pitching ability 
adequately. 

          As an alternative, I thought I might use a weighted average of the 
full season probabilities for the hitter and the pitcher.  For the hitter, I 
calculated probabilities as described for Wallach's case in the table above.  
For the pitcher, I did much the same thing for hits and walks allowed.  For 
example, Dwight Gooden faced 756 batters last year, walking 53, allowing 162 
hits and getting strikeouts, groundouts or flyouts on the other 541 hitters.  
Looking only at Gooden's stats, the estimated probabilities are 21.4 per cent 
for a hit, 7.0 per cent for a walk, 28.4 per cent for getting on base and 
71.6 per cent for an out.  To compute the final probabilities when Wallach 
faces Gooden, I thought I might use weighted averages of their respective 
probabilities in each category. 

          What weights to use?  To examine this question I decided to try some 
simple regression analysis.  I assembled a sample of hitter-pitcher matchups 
and tried to estimate the ex post batting average in each matchup (the 
dependent variable) as a function of the hitter's overall batting average and 
the pitcher's overall batting average allowed.  I used career batting 
statistics for several players and only considered cases where 40 or more 
matchups between the particular hitter and pitcher were available.  One more 
or less plausible result was the following: 
                                                                     
     Overall BA  =  0.43 * Hitter's BA  +  0.57 * Pitcher's BA allowed 
     in matchup    (0.16)  for career     (0.16)  for career           
                                                                     
     Standard error of estimate = 6.6%      Observations = 68

More work is needed on this aspect of the simulation.  A larger sample must 
                                   -  11  -


be assembled and more sophisticated models should be considered. 

          I decided to use a simpler approach than this in the program itself, 
for a couple of reasons.  First, the regression results were not robust 
enough to warrant much confidence.  Second, a simple weighted average 
approach as just described has a rather bizarre implication:  it pulls up the 
hitting probabilities for abysmally bad hitters, even when they face good 
quality pitchers.  For the program I decided to use a more ad hoc formula:  
the final BATTING probabilities are computed using the hitter's overall 
averages, multiplied by the ratios of the pitcher's probabilities to the 
overall league average probabilities, with the latter ratios being raised to 
an arbitrary "pitcher power".  The default value for this pitcher power 
exponent is one, but you can experiment with other values by using the "s=" 
command line option (see Section VI below).  If the pitcher is better than 
average the hitter's probabilities deteriorate as they should, regardless of 
the pitcher power value.  A pitcher power of one implies equal weighting for 
the pitcher's and hitter's statistics.  A value slightly greater than one 
puts greater weight on the pitcher's statistics while a value slightly less 
than one puts greater weight on the hitter's statistics.  This multiplicative 
formula, while very simple, appears to be quite effective.  

          All the raw statistics as well as the hitters' unweighted and 
pitching-weighted BATTING phase probabilities are displayed by the program if 
you ask for them via the F4 and F9 functions. 


VI.  COMMAND LINE OPTIONS

          The program contains a few parameters which, while they have 
default values, can also be specified via command line options.  You do not 
need to make use of these command line options if you are satisfied with the 
default values.  But the command line options are available to experiment 
with if you need them. To use a command line option you simply add one or 
more arguments to the DOS command line when you start up SIMBASE.  There are 
four such options available.  You can specify none, one, two, three or all 
four of the options on the command line after the program name SIMBASE.  No 
spaces or quotes are allowed WITHIN any of these arguments, although the 
arguments themselves are separated from one another by spaces.  


VI.1  RANDOM NUMBER GENERATORS

          The first command line option, "r=", allows you to specify which 
random number generator function you wish to use.  The default generator, 
generator number 1,  is the RAND function that comes with the Microsoft C 
compiler, Version 5.0.  Generator number 2 uses the linear congruential 
method.  Random numbers R are generated using the formula:

          R = {(double)[(R*125)%2796203]}/2796203.000000

where % is the modulus operator.  Numbers are calculated sequentially, after 
the process is started up with a seed value.  Generator number 3 uses the 
linear congruential method with an added intercept.  Random numbers R are 
generated using the formula:       

          R = {(double)[(R*32719+3)%32749]}/32749.000000

                                   -  12  -


Again, numbers are calculated sequentially after the process is started up 
with a seed value.  Finally, generator number 4 is a combination of the other 
three generators.  With this generator a random number is first generated 
using generator number 1.  If the resulting number is greater than 0.500000
then the final random number is calculated with generator number 2.  
Otherwise it is calculated with generator number 3. 

          Each of these generators requires a seed value.  The program gets 
one automatically by reading the system clock.  

          You select one of these four random number generators by including 
an "r=" argument on the command line.  For example, if you want to use 
generator number 3 you would start up SIMBASE by issuing the following 
command at the DOS prompt:

          SIMBASE r=3

          When you choose a random number generator explicitly using the "r=" 
command line option, the step-by-step ballgame display requested with the F5 
function key will contain two additional pieces of information:  each random 
number generated will be displayed along with the associated seed value, in 
the description box alongside the play number and probability. 
                             

VI.2  DISPLAY MONITORS AND VIDEO MODES

          The program has been designed to automatically sense the video mode
and act accordingly.  If you have a colour monitor and are using video mode 
3, you should get colour results.  If you have a black and white monitor the 
results should be clearly visible in black and white.  However in some cases 
you may wish to tell the program explicitly what kind of monitor to assume.  
For example, you may prefer to use the program in black and white mode even 
though you have a colour screen.  The command line option "d=" is designed 
for this purpose.  

          There are three sub-options here.  You can set the video mode to 2 
if you have a black and white graphics or a colour graphics monitor.  This 
will give you a black and white video display.  You can set the video mode to 
3 if you have a colour graphics monitor.  This will give you a multi-colour 
display.  Or you can set it to 7 if you have a standard monochrome monitor.  
This will give you a black and white display.  But be careful.  If you tell 
the program to use a video mode that is not compatible with your equipment 
you may see nothing at all.  

          By way of example, if you want to tell the program to use a colour 
display (video mode 3) you would start up SIMBASE by issuing the following 
command at the DOS prompt: 

          SIMBASE d=3
                             

VI.3  THE DATA SUB-DIRECTORY

          While the SIMBASE program itself is contained in a single file 
called SIMBASE.EXE, the program requires several supporting files if it is to 
work properly.  These supporting files include three files with PREBAT play 
information (PREBAT.DAT, PREBAT1.DAT, PREBAT2.DAT), three files with POSTBAT 
                                   -  13  -


play information (POSTBAT.DAT, POSTBAT1.DAT, POSTBAT2.DAT) and twenty-six 
files with TEAM statistics (TEAM1, TEAM2, ... TEAM26).  The program must know 
how to find these files.  By default, it assumes that the files are located 
in the same directory that the SIMBASE.EXE program is being executed from.  
Thus, if you have a hard disk on your system you will probably find it most 
conveneient to copy all of the files into a single sub-directory and work 
directly out of that sub-directory.  However for one reason or another you 
may want to keep the supporting data files in a sub-directory that is 
different from the one containing SIMBASE.EXE.  If you do not have a hard 
disk on your computer system and work with floppy disks only, for example, 
you will fall into this category since it is not possible to fit all the 
required files onto a single 360K double density floppy diskette.  In cases 
like this a way is needed to inform the program about where to find the 
supporting data files. 

          The way you tell the program about the data sub-directory is via 
the "f=" command line option.  For example, suppose you are working with a 
two floppy diskette system, you are using the a: drive to hold the diskette 
with the SIMBASE.EXE program on it (distribution disk #1) and you are using 
the b: drive to hold the diskette with the supporting data files on it 
(distribution disk #2).  Then you would start up the program by issuing the 
following command at the DOS prompt: 

          SIMBASE f=b:\

You would of course issue this command from within the a:\ directory where 
the SIMBASE.EXE program itself would, by assumption, be located.  As another 
example, suppose you have a hard disk and you have copied the the SIMBASE.EXE 
program into a directory called c:\SIMBASE\ and you have copied the 
supporting data files into a sub-directory of this directory called 
c:\SIMBASE\DATA\.  Then you would start up SIMBASE by issuing the following 
command at the DOS prompt: 

          SIMBASE f=c:\SIMBASE\DATA\

You would of course issue this command from within the c:\SIMBASE\ directory 
where the SIMBASE.EXE program itself would be located.


VI.4  THE PITCHER POWER 

          In Section V above the role of the "pitcher power" in the 
simulations was explained.  The default value of this parameter is 1.000000 
but you can experiment with different values slightly greater than or less 
than one.  You do this with the "s=" option.  Values greater than one will 
put more weight on the pitchers' statistics and less on the batters' while 
values less than one will have the opposite effect.  For example, if you 
wanted the pitcher power to be 1.010000 you would start up SIMBASE by issuing 
the following command at the DOS prompt: 

          SIMBASE s=1.010000

It is recommended that six decimals of accuracy be included when specifying a 
value for the pitcher power.
                                   -  14  -
  

VII.  ILLUSTRATIVE PRACTICAL RESULTS FROM THE PROGRAM

          It takes about 1.75 seconds on my AT-compatible (scoring 7.7 on the 
Norton SysInfo scale) to simulate one ballgame and it takes somewhat less 
than 5 minutes to simulate a full 162 game season.  I also tried the program 
on a older but souped up IBM-PC (1.8 SysInfo) and it took 2.65 seconds per 
game on that machine.  Version 1 of the SIMBASE program was much slower, 
requiring about 10 seconds per game on the AT-compatible and about 30 seconds 
per game on the enhanced IBM-PC.  The improved speed of operation was 
achieved by reprogramming in the C language.  These time estimates were 
derived using the default random number generator and different times would 
result for the other random number generators. 

          As I've been emphasizing, the program is really intended to run many 
games at one time.  As in real world baseball, the outcome of a single game 
does not tell you very much.  Even the World Series Champion Minnesota Twins 
of 1987 lost 48 per cent of their games in that season.  To really learn 
something about a team you must look at its track record over a large number 
of games.  This is true in the real world and it's equally true in computer 
simulation. 

          To test the normal properties of the simulation as it is currently 
calibrated I ran two 162-game series and one 486-game series between the Mets 
and the Expos.  I used the same lineups for every game, with Gooden and 
Martinez pitching.  The results were as follows: 

                                       Mets                Expos
                                   R     H     E       R     H     E
     First 162 games:
        Average                   3.2   7.8   1.1     2.8   7.8   1.4
        Standard deviation        2.3   3.0   1.1     2.3   2.9   1.2

     Second 162 games:
        Average                   3.6   8.2   1.3     3.5   8.0   1.4
        Standard deviation        2.4   3.0   1.3     2.6   3.1   1.2

     Third 486 games:
        Average                   3.4   8.0   1.2     2.9   7.6   1.3
        Standard deviation        2.6   3.3   1.2     2.2   2.9   1.1

For purposes of comparison, the corresponding National League actual average 
figures for all league teams during the 1987 season were as follows: 

                                              Nat. League
                                             R     H     E
     For 971 games, 12 teams:
        Average                             4.5   8.9   0.8

Taking account of the fact that Gooden and Martinez were two of the better 
pitchers in the league last year, it is entirely appropriate that the average 
number of hits and runs scored during the Mets-Expos simulations should be 
somewhat less than the league averages.  A concern that existed in version 
1.0 of the program and continues in version 2.0 is that the average number 
of errors in the simulations exceeds the league average by 0.4-0.6 errors per 
game, suggesting the need for further refinement of the PREBAT.DAT and 
POSTBAT.DAT plays and probabilities. 
                                   -  15  -


          The 1987 Expos did not do as well as the Mets in these simulations.  
The Expo record was 70 wins and 92 losses (a 43.2% winning percentage) in the 
first set of simulations, 72 and 90 (a 44.4% winning percentage) in the 
second set and 231 and 255 (a 47.5% winning percentage) in the third set.  
The Expos actual season record against all National League teams was 91 and 
71 while the Mets overall season record was 92 and 70.  Against the Mets the 
Expos were 7 and 9 during the season.  

         These results do not really tell us much about what the overall 
performance of the two teams should have been during the season.  This is 
because the identical nine-player rosters were used for each game.  Of 
course, Gooden and Martinez could not really pitch all 162 games during the 
regular season, so these simulations are not realistic as structured.  
Moreover, the hitting lineups also will change during the course of the 
season due to injuries, player fatigue, managerial decisions, etcetera.  If 
you seriously wished to simulate the entire season outcome, you would need to 
play different games with different mixes of players. 

          To illustrate the sensitivity of the simulations to the pitcher, a 
further 486 games were run with Bob Sebra pitching for the Expos instead of 
Dennis Martinez.  Sebra was one of the Expos poorer pitchers in 1987.  All 
other players in the two teams' lineups were kept the same in the simulations.  
The results of this simulation were quite different.  The Mets got 9.2 hits 
per game and 4.4 runs, much better than with Martinez pitching.  With Gooden 
still pitching for the Mets and the Expos maintaining the same batting lineup, 
the Expo hits and runs performance was comparable to the previous simulations 
(7.7 hits per game and 3.1 runs).  The Mets won 303 of the 486 games and the 
Expos won just 183 (37.7%). 

         These two exercises demonstrate a key point about this program: it 
is most useful as a tool for estimating the differential impact of one player 
when he is substituted for another, either by shuffling the batting lineup or 
by bringing in a new player from the bench.  The program as it presently 
stands is more limited when used as a tool for forecasting full seasonal 
outcomes when opposition teams vary, rosters evolve and pitchers rotate, 
although these sorts of simulations could also be done if desired. 


VIII.  FUTURE IMPROVEMENTS

         There is no perfect way to simulate a baseball game.  This program 
provides a workable approach, but there are many improvements that can be 
made to it.  I have referred to some of these above.  The PREBAT and POSTBAT 
play lists can be improved and their probabilities made dependent, within the 
program, on the players' stats.  The determination of the BATTING outcome 
probabilities, as a function of the hitters' and pitchers' stats, can be 
researched more thoroughly.  The players' defensive stats can be taken into 
account as well as their offensive stats.  The F5 function can be enhanced 
to make it more "game oriented", allowing player substitutions for pinch 
hitting and running and pitching changes as the game proceeds, for example.  
These and other enhancements are projects on my future agenda.  I hope to get 
further ideas from you the user. 


                                 Overview of               
                       The Baseball Simulation Program     
                                                           
                 (C) Copyright 1987, 1988 by Philip M. Smith  
                           - All Rights Reserved -         
                                                           
                  


The program (SIMBASE.EXE) and its documentation (SIMBASE.DOC) are for the 
Baseball Simulation Program user supported software.  The following is a 
brief summary of the Baseball Simulation Program. 

The Baseball Simulation Program is an MS-DOS program providing an environment 
for simulating or forecasting the outcomes of major or minor league baseball.  
Using SIMBASE you can do things such as: 

  -  study the impact of rearranging the batting lineup for your 
     favorite ball team;

  -  investigate the costs and benefits of a player trade in the 
     major leagues; 
     
  -  forecast the likely outcome of a baseball season;
     
  -  analyze who the most valuable player on a team really is;  and

  -  proceed through a simulated baseball game step by step, watching 
     the performance of the individual players on each team.

The program uses actual player hitting and pitching performance statistics, 
tabulated in an ASCII-format database, to calculate batting outcome 
probabilities.  The database includes performance statistics for the players 
on all 26 National and American League teams during the 1987 season.  You can 
rapidly run a full season's worth of games and tabulate the results, or you 
can slowly step your way through a single game.  You could even enter the 
statistics for the teams of your own local amateur baseball league and use 
them as the basis for the analysis. 

The Baseball Simulation Program runs on the IBM PC, XT, AT and compatibles 
under MS-DOS versions 3.0 and higher.  It works with either a monochrome or a 
color monitor and requires no special peripheral equipment. The complete 
program and associated documentation comes on two MS-DOS formatted 360K floppy 
diskettes.  Copies of the diskettes are available from the author for $20 at 
the address below, or from several Public Domain and Shareware software 
libraries and bulletin boards.  Full registration is encouraged for those who 
find the program useful, at a cost of $50.  Registration entitles the user to 
the latest version of the program, a copy of the source code, notice of future 
program and database updates and telephone support.  Contact Philip Smith at 
109 Tripp Crescent, Nepean, Ontario, CANADA, K2J 1E2. 

Thank you for your interest in the Baseball Simulation Program.
          
Sincerely,
Philip M. Smith

                
                           Conditions on the Use of         
                       The Baseball Simulation Program    
                                                           
                 (C) Copyright 1987, 1988 by Philip M. Smith 
                           - All Rights Reserved -        
                                                           
                  


SIMBASE is Copyright (C) 1987, 1988 by Philip M. Smith.  

WARNING: This program and documentation could include technical inaccuracies 
or typographical errors.  They are provided without warranty of any kind.  
I will in no event be liable for any damages arising out of the use of this 
program. 

Individuals are granted permission to freely copy the SIMBASE diskettes for 
their own use or for others to use, so long as no price is charged and no 
changes are made to the program, documentation and other files on the 
diskettes.  Computer and other clubs are encouraged to copy the diskettes and 
share them with their members, under the same conditions.  A distribution 
cost may be charged for the cost of the diskettes, shipping and handling, up 
to $10 per diskette.

If you use the program, please help underwrite the cost of its development by 
sending a $50 contribution.  A contribution entitles you to the C language 
source code, telephone support, plus notices of future program and database 
updates.  Your support now will help make future releases possible. 

REGISTRATION FORM

Please register me as a user/supporter of the Baseball Simulation Program.  I 
understand I will receive the latest version of the program and its complete 
C source code.  In addition, I will receive notice of future new versions of 
the program and of database updates when they become available. 
          

NAME_________________________________________________DATE_____________________

STREET________________________________________________________________________

CITY_________________________________STATE/PROVINCE___________________________

COUNTRY______________________________ZIP/POSTAL CODE__________________________

TELEPHONE_____________________________________________________________________


                                  Cost            Number              Total
 

     Use License                 $50.00           ______         ________.____

Please make payment by bank or postal money order, or by personal cheque, 
payable to Philip M. Smith. 

MAIL TO:   Philip M. Smith
           109 Tripp Crescent
           Nepean, Ontario
           CANADA, K2J 1E2



What features would you like to see added to the Baseball Simulation Program?

______________________________________________________________________________

______________________________________________________________________________


What features need most to be improved in the current version (2.0)?

______________________________________________________________________________

______________________________________________________________________________


Where did you hear about the Baseball Simulation Program?

______________________________________________________________________________
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1186

     Volume in drive A has no label
     Directory of A:\

    FILE1186 TXT      1416  10-26-88   9:06a
    GO       BAT       558  10-10-88   1:00p
    READ     ME       1893  10-10-88   1:00p
    SETUP    BAT      1103  10-10-88   1:00p
    SIMBASE  DOC     57993  10-10-88   1:00p
    SIMBASE  EXE    212690  10-10-88   1:00p
            6 file(s)     275653 bytes
                           44032 bytes free
