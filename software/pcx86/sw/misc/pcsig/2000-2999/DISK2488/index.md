---
layout: page
title: "PC-SIG Diskette Library (Disk #2488)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2488/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2488"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FBSCORES.DOC

{% raw %}
```


                    FOOTBALL SCOREBOARD 

                        Version 1.3

                      Reference Manual

                        June 18, 1990




                     Cosoft Micro Systems
                        P.O. Box 4724
                      Hayward, CA 94540



        Copyright (C) 1988-90 John A. Bruzas.  All Rights Reserved.




                        Copyright

This program is copyrighted (C) 1988-1990 by John A. Bruzas.  All
Rights Reserved. 

This product is Shareware.   Please help distribute Football
Scoreboard by sharing unmodified copies of this diskette with
others in the United States and Canada for non-commercial use.
If you find Football Scoreboard useful,  we encourage you to 
buy a registered copy for only $20.00. 

A registered copy provides you:

  o  A printed copy of the manual.
  o  Current Football Scoreboard with your unique registration
     number.
  o  Support service for one year including updates.
  o  A $5.00 commission when someone registers and gives your
     number.
  o  Our thanks and appreciation (as well as help make possible
     updates in future years).

To register, send the registration from the bottom left hand
corner of the copyright screen along with your name and address and 
$20.00 to:

                    Cosoft Micro Systems
                       P.O. Box 4724
                     Hayward, CA 94540

Unregistered copies are also available from the above address for $5.00
per copy.

NOTE:  If you have NOT registered your copy, please do not call with 
support questions.  We cannot (for economic reasons) return calls for 
those who have not registered.  However, you can send us your question 
or problem with a self-addressed stamped envelope and we will do our 
best to respond.  Of course, you could register! 

Californians, please add 7.0% state sales tax.

Feel free to send comments, suggestions, etc. about the product to
us.  We hope that you'll find it an enjoyable addition to the football
season!


                      Football Scoreboard


FOOTBALL SCOREBOARD is a computer program that gives you access to the 
results of more than 4200 NFL games - regular season, wildcard, playoff, 
championship and Super Bowl - played between 1970 and 1989. 

FOOTBALL SCOREBOARD is designed for use on the IBM-PC and close compatibles 
with either a monochrome or color monitor. 

WHY 1970?

1970 saw the creation of the NFL as we know it today.  In 1970, the AFL and 
NFL merged to form two conferences in the NFL.  Interconference play began 
in the regular season and the NFL and AFL were no longer separate, 
distinctive entities. 

WHAT DOES FOOTBALL SCOREBOARD DO?

Football Scoreboard gives you almost unlimited flexibility in how you want 
to look at the game outcomes.  For example, you can: 

  o Get composite standings for any year or series of years    
    with only a few keystrokes.
  o List games played and outcomes for any team, conference, or 
    division.
  o Look at the games played by a single team against another 
    team, by division or conference. 
  o Look at how a team did over any number of years. 
  o Create composite standings for playoff games and Superbowls.


HOW DO YOU USE FOOTBALL SCOREBOARD?

First copy the files from this diskette to a work diskette or your hard 
disk.  There should be three files: FBSCORES.EXE, FBSCORES.DAT, and 
FBSCORES.DOC.  See your DOS manual if you need to learn how to do this. 

RUNNING FOOTBALL SCOREBOARD

To run Football Scoreboard, at the DOS prompt type: 

FBSCORE

You then see the title screen while the data is being loaded.  

Once the data has been loaded, the program will beep.  Press ENTER. 

Next you'll see the copyright screen.  

Press ENTER again. 

You'll now see the main screen.  

To the left are the options and commands available to you.  Notice that the 
whole program can be run using the function keys on the left side of your 
keyboard. 

To the right of the screen is the SELECTION which shows you which games 
will be included when you list games or create standings. 


                    AVAILABLE COMMANDS


  F1   -  LIST GAMES

Lists all the games that match the selection criteria on the right side of 
the screen.  When you first get into the program, all games will be listed. 

Go ahead, try it.  Press F1.  

You're asked:

    F1  SCREEN  F2 PRINTER

Press F1.  The games should start listing on the screen starting with the 
first week in 1970.  When the screen fills, you have the option of pressing 
any key to continue the listing or pressing ESC to return to the command 
screen. 

After you've looked at a few screens, press ESC. 

Now let's make a change to the SELECTION to illustrate another feature. 

Press F3.  You'll then be asked for a team.  Look at the list and type the 
two character abbreviation for your favorite team and press ENTER.  Notice 
that the SELECTION at the bottom changes to reflect your selection. 

Now press F1 for LIST GAMES and F1 for SCREEN.    Now only the games for 
the team you selected will list.  Also notice that in the right hand side 
of the listing, an indicator will appear showing whether the team Won, 
Lost, or Tied for that particular game.  After a few screens, press ESC 
again. 

  F2  -  SUMMARY STATISTICS

There will be times when you want summary information about the games that 
match your selection.  You need to first select    a team using F4.  Then, 
when you press F2, you're asked: 

   F1  SCREEN    F2  PRINTER

After a brief pause, you get the summary statistics.   These are: 

  o number of games won, lost, tied

  o percentage won

  o total points scored and average points per game

  o total points scored by opponents and the average number of opponent 
  points per game. 


If you have not selected a team, you'll get the message: 

NO TEAM SELECTED.  PRESS ENTER TO CONTINUE. 

 F3 -  SHOW STANDINGS 

Calculates the standings for the games selected using current divisional 
and conference alignments. 

When you press F3, you're asked:

   F1  SCREEN    F2  PRINTER

Once you press either, after a brief pause, you'll see the standings. 


                    SELECTING GAMES

The following activities allow you to limit which games will be included in 
the listing or standings. 


  F4 - SELECT YEARS

Let's you select which years will be included.  When you press F4, you're 
asked: 

FIRST YEAR?
LAST YEAR?

Type a two digit answer and press ENTER for each. 

To list a single year, make first year and last year the same. 
If you enter a year less than 70, the listing will start with 70. 
If you enter a number greater than 89, you'll get 89. 
If you enter a last year less than first year, you'll get no 
listing. 

Note that year refers to season rather than calendar year.  Thus the 1970 
Super Bowl, while played in 1971, will be included with the 1970 season. 


  F5 - SELECT WEEKS


Lets you set the first and last weeks to be included in the listing. 

Weeks 1 through 16 are regular season games.  Prior to 1978, the NFL played 
a 14 game season.  Thus, there are no games for weeks 15 and 16. 

Week 17 is the wildcard games introducee in 1978. 
Week 18 is the playoff games also introduced in 1978. 
Week 19 are the championship games played from 1970 on. 
Week 20 is the Super Bowl.

If you want only regular season games to list, set first week = 1 and last 
week = 16. 

To see post-season games only, set first week = 17 and last week = 20. 

To list only the Super Bowls, set First Week = 20 and Last Week = 20. 


 F6 - SELECT TEAM


Let's you select which team to list games for.  When you press F6, you'll 
see a list of teams along with two character abbreviations.  Type the 
abbreviation you want and press ENTER.  To list all games, type ALL and 
press ENTER. 


 F7 - SELECT OPPONENT


Let's you select games against a specific opponent.  For example, you could 
select NG (New York Giants for TEAM and DB (Denver Broncos) for OPPONENT.  
The listing would then consist of all the games where these two teams met. 

When you press F7, you'll see a list of teams along with two character 
abbreviations.  Type the abbreviation you want and press ENTER.  To list 
all opponents, type ALL and press ENTER. 

If you have NOT selected a team using F6, then selecting only an opponent 
is equivalent to using F6 except that you won't see a win/loss indication.


  F8 - SELECT WHERE


If you have selected a team, you can limit the listing to either Home or 
Away games.  


When you press F8, you're asked:

LIST GAMES FOR (H)OME, (A)WAY, (B)OTH?

Typing B will give both Home and Away games. 



  F9 - SELECT CONF/DIV


Let's you limit the games that list to a specific conference or a specific 
division within a conference. 

When you press F9, you can then select:

  o  AFC
  o  NFC
  o  BOTH

If you choose NFC or AFC then you can choose: 

  o East
  o Central
  o West
  o All Three

If you have NOT selected a team, but you select a conference or a 
conference and division, then intra-division or intra-conference games will 
list. 

For example, if you choose NFC and have not selected a team, then all games 
where both teams were from the NFC will list. 

If you choose AFC for conference and Central for the division, then all 
games where both opponents were in the AFC Central division will be 
included. 

If you have selected a team, then when you select a conference or a 
conference and division, then all games where the opponent was a member of 
the selected conference or conference/division will be included. 


  F10 - SELECT SCORES


Let's you set up criteria for scoring that have to be met in order to 
include a game. 

When you press F10, you can then choose:

  SCORE LESS THAN - where at least one of the scores is less than a number 
  you supply. 

  SCORE GREATER THAN - where at least one of the scores is greater than a 
  number you supply. 

  DIFFERENCE LESS THAN - where the difference between the two scores for a 
  given game is less than a number you supply. 

  DIFFERENCE GREATER THAN - where the difference between the two scores for 
  a given game is greater than a number you supply. 

For example,

  o if you specify a score less than 7, then all games where at least one 
  of the teams scored 7 or fewer points will be listed. 

  o if you specify a score less than 49, then all games where at least one 
  of the teams scored 49 or more points will be listed. 

  o if you specify a difference less than 3, then all games where the 
  game's outcome was decided by 3 or fewer points will be listed. 
   
  o if you specify a difference greater than 21, then all games where the 
  spread was greater than 21 will be listed. 

These can also be combined.  You could set up criteria such as games where: 

  o one of the teams scored more than 35 points and they beat their 
  opponent by 21 points. 



IN CLOSING



And that's it!  You're now ready to use one of the most flexible ways to 
become a knowledgable fan. And it's easy to use! 

Play with Football Scoreboard.  Try using different selection criteria.  
Create listings and standings.  The more you use it, the more useful you 
will find it to be. 


```
{% endraw %}

## FILE2488.TXT

{% raw %}
```
Disk No: 2488                                                           
Disk Title: Football Scoreboard                                         
PC-SIG Version: S1                                                      
                                                                        
Program Title: Football Scoreboard NFL 1970-1989                        
Author Version: 1.3                                                     
Author Registration: $20.00                                             
Special Requirements: None.                                             
                                                                        
You probably thought the only thing that could make Sunday afternoon    
football better was a large pepperoni pizza.  That was before FOOTBALL  
SCOREBOARD.  FOOTBALL SCOREBOARD gives you access to the results of more
than 4,200 games since the NFL was merged in 1970.                      
                                                                        
Every NFL game has been included with information like the teams that   
played (and their conferences), the week and year the game was played,  
the home/visiting team, and the final score.  You'll be able to specify 
any combination of the data and display it on your computer screen or   
send it to your printer.                                                
                                                                        
Here are some examples of information that FOOTBALL SCOREBOARD provides:
                                                                        
~ Conference records and standings of the teams for a week, range of    
weeks, a year, a group of years, or all the years since 1970.  What's   
the 49'ers record since 1970?  How about from 1980 through 1989?  How do
they compare to other teams?  What was the conference standing in week  
seven in 1977?                                                          
                                                                        
~ Results of games, selected by favorite team, opponent, year, or       
location.  What are the results of the Browns' games against the Bengals
since 1985?  How about when the Browns were the home team?  What were   
the results of the Browns conference games in 1983?                     
                                                                        
~ Games won and lost, the win/lose percentage, and total points         
statistics of any team based on when they played, who they played, and  
where they played.  What is the Packers' record at home since 1985?     
Just in conference games?  What about just against the Bears?  Against  
the Bears when they where the home team?                                
                                                                        
FOOTBALL SCOREBOARD lets you slice and dice the football stats any way  
you want it.  It's a great way to make your own trivia questions!       
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989-1991 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2488

     Volume in drive A has no label
     Directory of A:\

    FBSCORES DAT     25224   6-23-90  11:43a
    FBSCORES EXE    112258   6-23-90   6:00p
    FBSCORES ANN      2795   7-01-90   7:50p
    FBSCORES DOC     11575   6-29-90   5:34p
    GO       BAT        28  10-04-90   5:21a
    GO       TXT       733  10-10-90  12:14p
    FILE2488 TXT      3484  10-10-90  12:15p
            7 file(s)     156097 bytes
                            2048 bytes free
