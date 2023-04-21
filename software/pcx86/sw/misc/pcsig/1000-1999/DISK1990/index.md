---
layout: page
title: "PC-SIG Diskette Library (Disk #1990)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1990/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1990"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PRO SET FOOTBALL"

    4th Quarter, two minutes left to play.  Ball is on the 20 yard line, 4th
    down and 1 yard to go -- as coach of your favorite football team it is
    up to you to decide the next strategy in Ed Hagen's PRO SET FOOTBALL.
    Choose from your favorite teams as you decide the offensive and
    defensive choices for your players.  Pass, run, kick, score touchdowns
    and kick field goals.  Get penalized for "off sides" or intercept a pass
    and run it back for 6 points!
    
    Although PRO SET FOOTBALL is not a graphic game, its depth is made up in
    the format in which you play.  First, either choose from pro or college
    teams.  Second, play against the computer or a friend.  Select from a
    menu of options for either the defensive or offensive plays -- the
    computer then "plays" the results of your choices.  Game time is held in
    15 minute quarters and stats of all your players (real players from the
    1987 pro teams and 1988 college teams) are displayed at half time and
    the end.  Sound effects are minimal but do add a nice quality to the
    game.
    
    Truly enjoyable, simple to use, PRO SET FOOTBALL will never be the same
    game twice.  Enjoy playing the pros all year round -- a nice addition to
    your computerized sports library.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1990.TXT

{% raw %}
```
Disk No: 1990                                                           
Disk Title: Football                                                    
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: FOOTBALL                                                 
Author Version: 3.1                                                     
Author Registration: $15.00.                                            
Special Requirements: None.                                             
                                                                        
4th Quarter, two minutes left to play.  Ball is on the 20 yard          
line, 4th down and 1 yard to go - as coach of your favorite             
football team it is up to you to decide the next strategy in Ed         
Hagen's PRO SET FOOTBALL.  Choose from your favorite teams as you       
decide the offensive and defensive choices for your players.  Pass,     
run, kick, score touchdowns and kick field goals.  Get penalized        
for "Off Sides" or intercept a pass and run it back for 6 points!       
                                                                        
PRO SET FOOTBALL is operable on an IBM or Compatible.  Although it      
is not a graphic game, its depth is made up in the format in which      
you play.  First, either choose from Pro or College teams.  Second,     
play against the computer or a friend.  Select from a menu of           
options for either the defensive or offensive plays - the computer      
then "plays" the results of your choices.  Game time is held in 15      
minute quarters and stats of all your players (real players from        
the 1987 pro teams and 1988 college teams) are displayed at half        
time and the end.  Sound effects are minimal but do add a nice          
quality to the game.                                                    
                                                                        
Truly enjoyable, simple to use, PRO SET FOOTBALL will never be the      
same game twice.  Enjoy playing the pros all year round - a nice        
addition to your computerized sports library.                           
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FOOTBALL.DOC

{% raw %}
```
PRO SET FOOTBALL version 3.3

This program is designed to be played by any reasonably 
knowledgeable football fan without any instructions.  By all 
means, go ahead and play the game without reading further.

PHILOSOPHY:  This is both a game and a simulation.  That is, it 
is meant to be fun to play, and at the same time be an 
educational simulation of football.  Any time those goals 
conflicted, I opted for game over stipulation.  Still, the teams 
and players will perform a lot like their real life counterparts.  

HARDWARE REQUIREMENTS:  This program will run on any moderately 
equipped PC:  hard disk or floppy, color graphics or mono. 
FOOTBALL.EXE and FOOTBALL.DAT must be kept in the same 
subdirectory. 

The game uses a light bar menu system similar to that used in 
Lotus 1-2-3.  Choices can be made in two ways.  You can use the 
right and left arrow keys to highlight your choice, and then 
press <Enter>, but it is faster to press the capitalized (usually 
first) letter of the choice.  A one line explanation of the 
highlighted choice appears below the menu line.  These selections 
can be made in rapid fire order.  For example, pressing SM will 
select a Split backs formation, Medium pass.

Use the menus to select a college or pro game, and the teams.
The teams are selected by using the up and down arrows, and
pressing <Enter>.  Visiting teams get a slight disadvantage 
during the game just as visiting teams have in real life.

The next menu sets the background screen color.  The default 
color is monochrome.  This is a good choice for LCD laptops and 
TTL monitors.  Blue is usually the best choice for color systems. 
You can also change colors during the game.  The foreground 
colors are dictated by the teams colors of the selected teams; 
yellow for the Oregon Ducks, purple for the Washington Huskies, 
and so on.

There are three modes of play for each team.  "Human" means that 
the player makes both the offensive and defensive calls.  
In "Computer" mode, the computer makes all the calls.  In "Mix" 
mode, the player makes the offensive calls, and the computer 
calls the defenses.  "Mix" mode works well in head to head games; 
the players can conduct extended drives without having to hand 
the keyboard back and forth.

Just for fun, the computer will determine a point spread and 
"over/under."  If you do not know what these gambling terms mean, 
good for you!  Your ignorance has saved you many dollars.

RUNNING THE OFFENSE:  The first choice you make is your offensive 
formation:

OPPOSITE:  The fullback lines up behind the quarterback, and the 
halfback lines up opposite from the tight end.  This is a 
completely vanilla, standard offensive formation.  All plays work 
OK from this set.

SPLIT BACKS:  This is a fairly standard offensive formation, with
the two running backs "split" apart behind the quarterback. This 
makes them more effective as pass receivers.  Consequently, you 
gain a little edge on short passes, and lose a slight edge in 
power runs.

I FORMATION:  Another standard set.  Backs are well placed for 
sweeps, not so well positioned as pass receivers.  Once again, we 
have a small trade off:  better sweeps, weaker short passes.

DOUBLE TIGHT END:  Two tight ends for power running.  Very poor 
passing formation.

DOUBLE WING:  Good for passing, poor for running.

SHOTGUN:  Excellent for passing, terrible for running.

Next, you select a play.  When your opponent selects a defense,
the defensive player can see your formation, but not your play.  
This is true even when you are playing against the computer.  You 
should practice some degree of deceit, occasionally using 
formations to influence the defense. 

EXAMPLE:  You have the ball, second and 13.  The computer is 
handling the defense.  It makes little sense to line up in a 
running formation and pass; given the down and yardage, the 
computer is unlikely to take the bait.  A better selection would 
be to run a draw or sweep out of the double wing, hoping to catch 
the computer playing for the pass, or to throw strength against 
strength, and throw a medium pass out of the shotgun.

EXAMPLE:  You have the ball, first and goal at the two.  You 
could certainly choose to go into a double tight end formation 
and slam it up the middle, but the defense will be laying for 
that.  A better call might be to line up in a split back 
formation and throw a short pass.

Th defenses:

GAP EIGHT:  This is an all out attempt to stop the run, good for 
goal line stands.  If the other side passes, you get pretty good 
pressure on the quarterback, but terrible pass coverage.

INSIDE CHARGE:  This is particularly effective against the dive, 
and you get a good pass rush.  Otherwise very vulnerable to the 
pass.

FLEX:  This is a reacting defense that chokes out draws and 
sweeps.  Almost no pass rush at all, so it is weak on pass plays.

STANDARD:  A standard, vanilla set without pronounced strengths 
or weaknesses.

NICKLE:  An extra defense back makes this a strong pass defense, 
poor run defense.

PREVENT:  Two extra defense backs for maximum pass defense.  
Terrible against the run.

DOG:  One of the linebackers takes off after the quarterback.  
This gives you a strong pass rush.  Longer passes are harder to 
complete, but screens and short passes can go for big yardage.

BLITZ:  Two linebackers rush the quarterback, for an even 
stronger pass rush, and greater vulnerability to screens and 
short passes. 

Several options are available by pressing M for Misc during the 
game.  You can change the background colors and the player mode.  
You can turn the sound effects on and off.  You can look at the 
game statistics and check the scouting reports.  You can even 
bench your quarterback.


Ed Hagen
January 22, 1990
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1990

     Volume in drive A has no label
     Directory of A:\

    FILE1990 TXT      2739   3-09-90   7:53p
    FOOTBALL DAT     11167   1-21-90   3:00p
    FOOTBALL DOC      5921   1-22-90  11:20a
    FOOTBALL EXE     88484   1-22-90  11:08a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80  12:31a
            6 file(s)     108889 bytes
                           49664 bytes free
