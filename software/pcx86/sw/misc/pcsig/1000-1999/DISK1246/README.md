---
layout: page
title: "PC-SIG Diskette Library (Disk #1246)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1246/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1246"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BOWL - 101"

    At long last, some help for all of you overworked bowling league
    secretaries. Let BOWL-101 handle the drudgery of maintaining the
    records.
    
    Completely menu-driven, this was written with the novice PC user in
    mind.  BOWL-101 pairs teams for you.  Enter the three or four games for
    each bowler in the order they bowled, and it does the rest.
    
    BOWL-101 handles high team and individual games and series.  Scratch and
    handicapped, mixed or not, are done automatically.  Keeping individual
    averages for several weeks is no problem. Errors are easy to correct:
    any team, bowler, sub, high game, name, or score may be changed with
    just a few keystrokes.  It can handle 36 teams, 100 substitutes, 10
    bowlers/subs per team.  Auto lane assignments are totally configurable
    for match points, scratch, handicap, or mixed league in any combination.
    There are over 70 pop-up help screens, and easy edit features. Data can
    be sent to screen, printer or disk.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DESCRIPT.TXT

{% raw %}
```
                               B O W L - 1 0 1 h

Bowling league management program for the IBM and compatibles. This program
will work on any IBM compatible computer with at least 279k of free ram, any
monitor and printer, one or more drives.  It does require Dos 2.1 or above.

36 teams, 10 bowlers/subs per team, unlimited number of weeks, 100 subs.

BOWL101h is a user friendly, but very powerful program. It can be configured
to run almost any type of league, mixed, scratch, all male or all female.

The program is a menu driven program using pull down menus and pop up help
screens.  There are 70 help screens to guide you through the program if you need
them, (just press the F1 key) but are out of the way of an experienced user.

Full featured editing.  Edit any bowler or team score while entering data or
edit them individually from the main menu with page up page down capability.

Traverse through the program with the arrow keys, pg up, pg down and ESC keys

It will handle match or Peterson points and games bowled can be three or four.

The program handles subs in a logical manner by temporarily placing them on the
team they bowl on.  This allows for difficult situations where a bowler bowls
one or two games and is replaced by a sub. All scores are taken care of
automatically. There is a built in calendar and pop up calculator.

Subs are added to the sub roster as they bowl.
The roster keeps growing as subs are added. The first sub on the list of subs
you pick from is "NOT LISTED". Picking this allows you to add a new sub.

The program is almost completely automatic.  After the initial startup,
all that is necessary is to enter the three or four scores bowled by each
bowler.  High games and series are calculated for you.

There is an option to let you manually enter the number of wins if your league
uses a different type of scoring system not handled by BOWL101h.

Some other options are as follows.....
Seperate handicaps for male or female. Maximum handicap for male or female.
Minimum handicap. (allows handicap to drop to a negative handicap.) Set the
number of points each bowler receives if using match points. Set the number of
points per game and series. Lets you set a maximum score larger than 300 (5 pin
bowling or duckpin) Keep averages for a given number of games (0 - 99). Adjusts
for position rounds if your league uses them. Auto lane assignment. Shell to
dos, delete files, all from the main menu.

Other routines are being written to enhance the program and will be included in
the registered version.  Some of these are....
Individual recap sheets Sort routines. A money program to help disperse the
prize fund or pin money. Final average sheet.  Print to file any printout to
allow editing and custom printouts.
                                     Randy Stowe
                                     1229 Newburg Rd
                                     Fortuna CA. 95540 
```
{% endraw %}

## FILE1246.TXT

{% raw %}
```
Disk No: 1246                                                           
Disk Title: Bowl - 101h                                                 
PC-SIG Version: S2.3                                                    
                                                                        
Program Title: Bowl - 101h                                              
Author Version: 5S2                                                     
Author Registration: $20.00                                             
Special Requirements: 384KB                                             
                                                                        
At long last, some help for all of you overworked bowling league        
secretaries. Let BOWL-101 handle the drudgery of maintaining the        
records.                                                                
                                                                        
Completely menu-driven, this was written with the novice PC user        
in mind.  BOWL-101 pairs teams for you.  Tell the program which team    
bowled on which lane and enter the three games for each bowler in the   
order they bowled, and it does the rest.                                
                                                                        
BOWL-101 handles high team and individual games and series.  Scratch and
handicapped, mixed or not, are done automatically.  You'll soon be a    
hero.  Keeping individual averages for several weeks is no problem.     
Errors are easy to correct: any team, bowler, sub, high game, name, or  
score may be changed with just a few keystrokes.                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FILES.TXT

{% raw %}
```
BOWL101.EXE  Main bowling program.
BOWL101H.DOC  Documentation to BOWL101h.
BOWLHELP.HLP  Help files.
BOWL.PIC      Logo, Picture file displayed from main menu.
INVOICE.TXT   Print this out from main menu to register.
HISCORES.TXT  Prompts for editing high games.
18LANES.DAT   \
14LANES.DAT    \
16LANES.DAT     \
12LANES.DAT      \ Lane assignment files.
10LANES.DAT      /
8LANES.DAT      /
6LANES.DAT     /
4LANES.DAT    /
BOWL.MNU      Menu for BOWL101h
INSTALL.BAT   Batchfile to install BOWL101h to the hard drive.
FILES.TXT     This file.
DESCRIPT.TXT  Description of this bowling league management program.
```
{% endraw %}

## GO.TXT

{% raw %}
```
    ╔══════════════════════════════════════════════════════════════════╗
    ║                 <<< Disk #1246  BOWL - 101H >>>                  ║
    ╠══════════════════════════════════════════════════════════════════╣
    ║  To start program type: BOWL101G                                 ║
    ║                                                                  ║
    ║  To print documentation type: COPY BOWL101G.DOC PRN (press Enter)║
    ║                               COPY DESCRIPT.TXT PRN (press Enter)║
    ║                               COPY INVOICE.TXT PRN (press Enter) ║
    ║                                                                  ║
    ╚══════════════════════════════════════════════════════════════════╝
    (c) Copyright 1990, PC-SIG Inc.
~
```
{% endraw %}

## HISCORES.TXT

{% raw %}
```
First High Team Scratch Game
Second High Team Scratch Game
Third High Team Scratch Game
First High Team Handicap Game
Second High Team Handicap Game
Third High Team Handicap Game
First High Team Scratch Series
Second High Team Scratch Series
Third High Team Scratch Series
First High Team Handicap Series
Second High Team Handicap Series
Third High Team Handicap Series
First High Bowler Scratch Game
Second High Bowler Scratch Game
Third High Bowler Scratch Game
First High Bowler Handicap Game
Second High Bowler Handicap Game
Third High Bowler Handicap Game
First High Bowler Scratch Series
Second High Bowler Scratch Series
Third High Bowler Scratch Series
First High Bowler Handicap Series
Second High Bowler Handicap Series
Third High Bowler Handicap Series
First High Bowler Scratch Game
Second High Bowler Scratch Game
Third High Bowler Scratch Game
First High Bowler Handicap Game
Second High Bowler Handicap Game
Third High Bowler Handicap Game
First High Bowler Scratch Series
Second High Bowler Scratch Series
Third High Bowler Scratch Series
First High Bowler Handicap Series
Second High Bowler Handicap Series
Third High Bowler Handicap Series
```
{% endraw %}

## INVOICE.TXT

{% raw %}
```
                                B O W L - 1 0 1h
                       Copyright (C) 1988-90 by Randy Stowe.
                       1229 Newburg Road, Fortuna, CA 95540
                              All Rights Reserved
                        A Bowling League Secretary System

===============================================================================
                          Bowl-101h Registration Invoice.

Version__-_____-_____-______BOWL101h__-_____-____-____-____-____Version_(5S1)__

Name___________________________________________________________________________

Address________________________________________________________________________

City________________________________   Type of computer________________________

State______________Zip______________   Amount of Memory______K  No of Drives___

Phone (___)-____________  Date___/___/__

Registration fee for BOWL-101h__________________________________________$49.95

Shipping and handling __________________________________________________$ 3.00

If California resident, please add     $3.12     sales tax______________$______

Non U.S. Funds please add an additional $10.00 to offset coversion costs$______

Disk Size ( ) 5.25   or  ( ) 3 1/2    ( ) Either size.            Total $______
===============================================================================
                 Things I would like to see added to BOWL-101h

_______________________________________________________________________________

_______________________________________________________________________________

_______________________________________________________________________________

                     Problems I am having with BOWL-101h

_______________________________________________________________________________

_______________________________________________________________________________


===============================================================================
This is my fifth release of this shareware program and I am
curious as to where you obtained your copy of BOWL101h.

Bulletin board_____________________________________________Number (___)________

Shareware distributor__________________________________________________________

Address_______________________City_________________________State____Zip________

Thank you so much for taking the time to fill this out..............Randy Stowe

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1246

     Volume in drive A has no label
     Directory of A:\

    BOWL101  EXE    211554   7-09-90  10:51p
    BOWL101H DOC     46228   7-01-90  10:55p
    BOWLHELP HLP     24293   7-02-90   3:58p
    BOWL     PIC     16391   6-16-90   8:24p
    DESCRIPT TXT      2979   6-28-90   8:45p
    INVOICE  TXT      2455   6-28-90   8:48p
    18LANES  DAT      1852   4-29-90  11:10a
    14LANES  DAT      1720   4-11-90   5:10p
    16LANES  DAT      1654   4-29-90  11:09a
    12LANES  DAT      1258   9-10-86  10:16a
    HISCORES TXT      1194   7-09-90  10:19p
    10LANES  DAT      1157   2-19-90   7:37a
    BOWL     MNU      1052   7-02-90   3:58p
    READ     ME       1039   7-04-90  12:36p
    8LANES   DAT       914   9-10-86  10:32a
    6LANES   DAT       704   4-11-90   5:04p
    FILES    TXT       634   7-09-90  10:58p
    4LANES   DAT       508   4-11-90   5:02p
    INSTALL  BAT       361   7-09-90  10:36p
    BOWL101H BAT       112   6-28-90   9:04p
    GO       BAT        19   7-09-90   6:27a
    FILE1246 TXT      2147   8-09-90   5:01p
    GO       TXT       779   1-01-80   2:17a
           23 file(s)     321004 bytes
                           27648 bytes free
