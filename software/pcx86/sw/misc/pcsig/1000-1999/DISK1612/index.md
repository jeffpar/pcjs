---
layout: page
title: "PC-SIG Diskette Library (Disk #1612)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1612/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1612"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TOMMY'S GIN RUMMY AND METEORS"

    TOMMY'S GIN RUMMY implements the game allegedly invented in 1909 by E.T.
    Baker of the Knickerbocker Whist Club of New York, with optional
    automatic sorting of your hand to give the best score.  You play against
    the computer, which plays a mean game.  Your hand is displayed at the
    top of the screen, the computer's hand is displayed under yours.  To
    learn the game, you can choose to play with open hands, meaning that you
    can see the computer's hand but it can't see yours.  The computer
    shuffles, deals, and keeps all scores current.
    
    You can choose from 3 different variations of GIN RUMMY; Standard,
    Oklahoma (Cedarhurst), and Tommy's Space Cowboy.  A hot key demo mode is
    available, in which you can watch the computer play against itself, a
    great way to learn how to play this all-time favorite card game with
    plenty of music and color.  It works both on mono and color screens.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EZT.DOC

{% raw %}
```
                               EZ-TREE

EZ-Tree is a genealogy program to track and report on family trees.  
The program records information in variable length records and fields 
with the following maximum field sizes:

              First Name . . . . . . . . . . .  16 characters
              Middle Name  . . . . . . . . . .  16 characters
              Last Name  . . . . . . . . . . .  16 characters
              Maiden Name  . . . . . . . . . .  16 characters

              Sex (M or F) . . . . . . . . . .   1 character
              Birth Date & Information . . . .  32 characters
              Death Date & Information . . . .  32 characters
              Personal Comments  . . . . . . . 144 characters

              Marriage Date & Information  . .  32 characters
              Divorce Date & Information . . .  32 characters
              Marriage & Divorce Notes . . . . 144 characters

You can keep track of up to 16 marriages per person and up to 32 
children per marriage.  There is no logical limit to the number of
generations you can have for each family tree.  There are provisions
currently in the program to handle 90 different family trees with 200
people and marriages per family tree.  Both of these last two numbers
will be increased in the future.


                        INSTALLATION AND SETUP

There is only one file (EZT.COM) you need to run EZ-Tree.  To start 
the program simply key in EZT and press the ENTER key.  The program 
will create other files that it uses to store information in.  They 
are:
              CONFIG.EZT  used to store program configuration info.
              FAMILY.EZT  used to store an index to the family trees.
              TREE1.EZT - TREE90.EZT stores all the family tree data.


                              MAIN MENU

To choose an entry from the main menu use the up and down arrow keys 
to highlight the one you want to use, then press the ENTER key; or
just press the first letter of the entry.  The first entry you may
want to choose is the Modify configuration entry.  This lets you
choose a different disk drive and directory to store the Family and
Tree files if you need to do that.  This would actually allow you to
use more than 90 family trees by putting 90 families in each
directory you create for that purpose.  Also with this entry you can
change your screen colors and the screen save time out feature that
will blank out the screen after a certain amount of time.

The next entry you will choose is either Create a new family tree or
Retrieve an existing one.  To create a new one, choose the Create
option, then key in a description of the family tree your creating.

You can use up to 60 characters.  Next you would choose Work on the
current family tree to start entering the detailed information.  If 
you already had some family trees created and chose the Retrieve a 
family tree entry, you would be presented with a list of available 
family trees.  To choose one use the up or down arrow keys to 
highlight the one you want and press the ENTER key.  Then you would 
choose Work on current family tree.

The remaining main menu entries allow you to save the family tree on
disk any time while your working on it or to delete the current 
family tree from the index and from your disk.


                       WORKING ON A FAMILY TREE

You start by keying in information about the first person you want to 
add to the family tree.  Pressing ENTER takes you to the next field 
until all fields are used.  Then the person's name is displayed in a 
box in the upper left hand corner of the screen and a function key 
menu is displayed below it.  Press the F1 (help) key to see the 
details of what each key on the keyboard will do.  Press any key to 
return.  You can now add parents to the person you keyed in or add a
spouse.  The top two boxes are always used to display a husband and 
wife if there is a marriage.  Children are added and displayed below 
the couple.  The ESCAPE key can be used at any time to cancel or back 
out of any procedure.


                               REPORTS

Presently there are three reports that can be produced by using the 
F9 (list) key.  More will be added later.  You can get detailed 
information about the person currently highlighted by the cursor, a 
report on all people in the current family tree, and a list of all 
descendents of the person currently highlighted by the cursor.  The
detailed report and the report on all people have reference numbers
listed in front of each person.  This lets you locate information on
a person by that reference number because the report is produced in
reference number sequence.  The descendents report puts an asterisk
in front of people who are related by marriage, but are not actually
in the blood line.  A listing can be directed to your printer or to
the screen and it can be cancelled any time by pressing the ESCAPE
key.


              MORE INFORMATION, SUGGESTIONS, & PROBLEMS

    Write to:
                               Jim Hass
                             P.O. Box 447
                             Richfield, OH
                              44286-0447


```
{% endraw %}

## FILE1612.TXT

{% raw %}
```
Disk No: 1612                                                           
Disk Title: Gin Rummy/Meteors                                           
PC-SIG Version: S1                                                      
                                                                        
Program Title: Gin Rummy/Meteors                                        
Author Version: 1.0                                                     
Author Registration: None.                                              
Special Requirements: None.                                             
                                                                        
This disk gives twice the fun with GIN RUMMY and METEORS.  GIN RUMMY    
implements the game invented in 1909 by E.T. Baker of the Knickerbocker 
Whist club of New York, with automatic sorting of your hand to give the 
best score.  You play against the computer.  Your hand is displayed at  
the top of the screen, the computer's hand is displayed under yours.    
You can choose to play with open hands, meaning that you can see the    
computer's hand but it can't see yours.  The computer shuffles, deals,  
and keeps all scores current.  You can choose from 3 different          
variations of GIN RUMMY; Standard Gin Rummy, Oklahoma Gin Rummy, and    
Space Cowboy Gin Rummy.  A demo mode is available where you can watch   
the computer play against itself, a great way to learn how to play this 
old time favorite card game.                                            
                                                                        
METEORS is a fast paced game.  You try to accumulate as many points as  
possible before being hit by fast falling meteors.  METEORS is similar  
in operation to Pac Man in that you earn points by moving around the    
screen and eating space while trying to stay out of the way of falling  
meteors.  There is a demo mode where you can watch the computer play    
against itself and learn the basics of the game.                        
                                                                        
File Descriptions:                                                      
                                                                        
GINRUMMY EXE  Main program.                                             
GINRUMMY DOC  Documentation file.                                       
METEORS  EXE  Main program.                                             
METEORS  DOC  Documentation file.                                       
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1988 PC-SIG, Inc.                                         
```
{% endraw %}

## GINRUMMY.DOC

{% raw %}
```
TOMMY'S GIN RUMMY (C) COPYRIGHT 1987 BY TOMMY'S TOYS
P. O. BOX 11261, DENVER, CO 80211 USA.  ALL RIGHTS RESERVED.
CATALOG #87-067-1A

INSTRUCTIONS:

TOMMY'S GIN RUMMY IMPLEMENTS THE GAME INVENTED IN 1909 BY E. T. BAKER OF THE
KNICKERBOCKER WHIST CLUB OF NEW YORK, WITH AUTOMATIC SORTING OF YOUR HAND
TO GIVE THE BEST SCORE.

PLAYERS:
YOU PLAY AGAINST THE COMPUTER.  YOUR HAND IS DISPLAYED AT THE TOP OF THE
SCREEN, THE COMPUTER'S UNDER IT.  AT PROGRAM STARTUP YOU ARE GIVEN THE OPTION
OF PLAYING WITH OPEN HANDS, MEANING THAT YOU CAN SEE THE COMPUTER'S HAND BUT
IT CAN'T SEE YOURS.

CARDS:
THE STANDARD DECK OF 52 IS USED.

DEALER:
THE INITIAL DEALER IS CHOSEN BY THE COMPUTER AFTER ROLLING A DIE IN ITS
CIRCUITS.  AFTER THAT, THE WINNER OF EACH ROUND DEALS THE NEXT.

THE DEAL:
EACH PLAYER RECEIVES 10 CARDS, DEALT TO EACH PLAYER ALTERNATELY STARTING WITH
THE NON-DEALER.  THE TOP CARD OF THE DECK IS THEN TURNED UP AND BECOMES THE
UPCARD ON A SEPARATE UPCARD PILE.

THE PLAY:
ON THE FIRST PLAY, NON-DEALER EITHER TAKES THE UPCARD OR REFUSES IT; IF HE
REFUSES, DEALER HAS THE SAME OPTION.  IF DEALER ALSO REFUSES, NON-DEALER MUST
DRAW FROM THE TOP OF THE DECK, GIVING HIM 11 CARDS. (NOTE: IN TOMMY'S GIN
RUMMY, THIS IS SKIPPED AND NON-DEALER HAS THE OPTION OF UPCARD OR DECK.)

ON SUBSEQUENT PLAYS, EACH PLAYER MUST DRAW ONE CARD, EITHER THE UPCARD OR THE
TOP OF THE DECK, AND THEN DISCARD ONE CARD ON THE UPCARD PILE (BECOMING THE
NEW UPCARD).

KNOCKING:
EACH HAND HAS A POINT VALUE THAT ITS PLAYER TRIES TO MINIMIZE.  AFTER
DRAWING AND DISCARDING, IF THE POINT VALUE IS 10 OR LESS, A PLAYER MAY
"KNOCK", ENDING THE ROUND.

DEAD HANDS:
IF THE 50TH CARD IS DRAWN FROM THE DECK AND, AFTER THE DISCARD, NEITHER
PLAYER HAS KNOCKED, THE HAND IS DEAD AND A NEW ONE IS STARTED.

MATCHED SET:
THE OBJECT OF THE GAME IS TO FORM YOUR HAND INTO "MATCHED SETS":

     1. 3 OR 4 CARDS OF THE SAME RANK ("FLAT")
     2. 3 OR MORE CARDS OF THE SAME SUIT IN SEQUENCE ("STRAIGHT")

CARDS THAT DO NOT FORM PART OF ANY MATCHED SET ARE CALLED UNMATCHED CARDS
(OR DEADWOOD) AND ARE PENALIZED WITH A POINT VALUE (PV).

HAND POINT VALUE (PV):
THE POINT VALUE (PV) OF A HAND DEPENDS ON THE UNMATCHED CARDS ONLY.
IN THIS COUNT, EACH FACE CARD COUNTS AS 10 POINTS, AN ACE COUNTS AS 1 POINT,
AND EACH OTHER CARD COUNTS AS ITS FACE VALUE.

GIN:
TO KNOCK, YOUR PV (AFTER DISCARDING) MUST BE 10 OR LESS.
IF ALL YOUR CARDS ARE MATCHED, YOU HAVE A PV OF 0 (PERFECT) AND YOU "GO GIN".
(YOU SHOULD ALWAYS KNOCK IF YOU GO GIN!)

NOTE ON MATCHED SETS:
THE COMPUTER AUTOMATICALLY REARRANGES YOUR HAND FOR YOU TO PRODUCE THE
MOST MATCHED CARDS, AND, AMONG EQUAL ALTERNATIVES, THOSE WITH THE LOWEST
PV.  THIS TAKES ALL OF THE DRUDGERY OUT OF THE GAME AND WHO WOULD EVER WANT
TO HAVE TO GO BACK TO SORTING ONE'S OWN HAND EVER AGAIN?  OF COURSE THIS
DOESN'T PREVENT YOU FROM DISCARDING ANY CARD YOU WANT.

THERE IS ONE LITTLE CATCH HOWEVER...
AS THIS ALGORITHM'S SPEED DEPENDS EXPONENTIALLY ON THE NUMBER OF "INTERSECT"
CARDS (E.G., 2-CLUBS, 3-CLUBS, 4-CLUBS, 3-HEARTS, 3-DIAMONDS HAS ONE
INTERSECT, 3-CLUBS), THERE ARE A FEW PATHOLOGICAL HANDS THAT TAKE A WHILE
TO OPTIMIZE:  TOMMY SUGGESTS YOU USE THE TIME TO STRAIGHTEN YOUR DESK.

LAYING OFF:
THE PLAYER WHO KNOCKS SHOWS HIS HAND WITH THE MATCHED SETS SEGREGATED.  IF
HE DIDN'T HAVE GIN, THE OTHER PLAYER THEN GETS TO "LAY OFF" ANY OF HIS
UNMATCHED CARDS THAT FIT INTO THE OPPONENT'S MATCHED SETS, THEREBY REDUCING
HIS HAND'S PV.  NOTE THAT YOU CANNOT LAY OFF A STRAIGHT ON AN OPPONENT'S FLAT,
OR VICE VERSA, HENCE IF THE OPPONENT HAS 3 5'S AND YOU HAVE A 4,6 OF THE
RIGHT SUIT, THAT'S TOUGH.

SCORING:
IF THE KNOCKER HAS THE LOWEST PV AFTER THE OPPONENT LAYS OFF HIS UNMATCHED
CARDS, THE KNOCKER WINS THE DIFFERENCE IN THE FINAL PV, BUT IF THE OPPONENT
HAS THE LOWEST PV ("UNDERCUTS THE KNOCKER"), HE WINS THE DIFFERENCE IN PV
PLUS A BONUS OF 25 POINTS.  HOWEVER, IF THE KNOCKER HAS GIN, HE WINS
UNCONDITIONALLY, SCORING THE OPPONENT'S PV PLUS A BONUS OF 25 POINTS.

GAME:
THE FIRST PLAYER TO SCORE 100 GAME POINTS WINS THE GAME.
THE WINNER GETS 100 MORE POINTS, THEN EACH PLAYER GETS 25 MORE POINTS
FOR EACH HAND HE HAS WON (THE SO-CALLED BOX OR LINE BONUS).  THE WINNER
THEN GETS GAME POINTS EQUAL TO THE DIFFERENCE IN TOTAL PV SCORES; BUT IF
THE LOSER HAS WON NO HANDS (0 PV, A SO-CALLED SHUTOUT OR SCHNEIDER), THE
WINNER WINS DOUBLE THE DIFFERENCE IN GAME POINTS AND THE LOSER IS "SKUNKED".

IN TOMMY'S GIN RUMMY, THE CUMULATIVE GAME POINTS ARE SAVED FOR REFERENCE
IN CASE YOU HAVE A STEAK DINNER RIDING ON THE SESSION.

STRATEGY:
MOST HANDS ARE WON WITH 6 OR 7 MATCHED CARDS.  YOU MUST THEREFORE ALWAYS
STRIVE TO KEEP 2 OR 3 LOW CARDS (ACES, DEUCES, TREYS) IN YOUR HAND AT ALL
TIMES, TO KEEP YOUR PV LOW AND MINIMIZE THE RISK SHOULD THE OPPONENT KNOCK.
IT IS ALSO UNWISE TO KEEP HIGH PAIRS AND TWO-CARD SEQUENCES AFTER THE FIRST
FEW ROUNDS.  AS FOR KNOCKING, MOST PLAYERS KNOCK IMMEDIATELY IF THEIR PV
GOES TO 10 OR LESS ANYTIME IN THE FIRST 4 OR 5 TURNS; AFTER THAT, ESPECIALLY
AFTER THE 8TH TURN, YOU PROBABLY SHOULD NOT KNOCK UNLESS YOUR COUNT IS LESS
THAN 6.  OF COURSE, IF YOU SEE THE OPPONENT DRAWING MORE THAN ONCE FROM THE
UPCARD PILE, YOU MIGHT NOT WANT TO KNOCK AT ALL, FEARING HE IS TRYING TO
TRICK YOU INTO AN UNDERCUT.  ON THE OTHER HAND, BLINDLY WAITING FOR A DEAD
HAND, OR WAITING TO GO GIN, MAY GIVE THE OTHER PLAYER TIME TO GO GIN AND GIVE
HIM A 50+ POINT JUMP ON YOU.

NOTE THAT THIS GAME GIVES BOTH PLAYERS WIDE OPPORTUNITY FOR SKILL BY
OBSERVING ALL THAT IS GOING ON AND MAKING USE OF IT.  GOOD PLAYERS DEVELOP
A "FEEL FOR THE CARDS" AND INSTINCTIVELY KNOW WHICH CARDS ARE BEING SOUGHT
BY THE OPPONENT.

OKLAHOMA GIN:
IN OKLAHOMA GIN, ALSO KNOWN AS CEDARHURST, THE RANK OF THE FIRST UPCARD
DETERMINES THE MINIMUM POINTS NEEDED TO KNOCK: FOR EXAMPLE, IF THE UPCARD IS
A 3, THEN 3 OR LESS POINTS ARE NEEDED TO KNOCK, IF THE UPCARD IS A FACE CARD,
THEN 10 POINTS OR LESS ARE NEEDED TO KNOCK.  HOWEVER, IF THE UPCARD IS AN ACE,
THEN GIN IS NEEDED.

IN ADDITION, IF THE UPCARD IS A SPADE THEN ALL SCORES FROM THE HAND ARE
DOUBLED.

TOMMY'S SPACE COWBOY GIN:
THIS IS PLAYED LIKE OKLAHOMA, EXCEPT THE RANK OF THE >>>CURRENT<<< UPCARD
DETERMINES THE POINTS NEEDED TO KNOCK.

FUNCTION KEY COMMANDS:
SOUND EFFECTS TOGGLE: FUNCTION KEY F1 TOGGLES THE SOUND EFFECTS ON AND OFF.

DEMO MODE TOGGLE: FUNCTION KEY F2 TOGGLES THE DEMO MODE.  IN DEMO MODE, THE
COMPUTER PLAYS BOTH HANDS.

TO QUIT: HIT FUNCTION KEY F7.

TO DISPLAY THESE INSTRUCTIONS: HIT FUNCTION KEY F5.

TO CHANGE THE SCREEN BORDER COLOR (COLOR MONITORS ONLY): HIT FUNCTION KEY F10.

DID YOU LIKE THIS TOY?
DON'T FORGET TO TRY OUR GOBS OF OTHER NEAT LOW-PRICED TOYS AND GAMES FOR THE
IBM PC AND COMPATIBLES.  WE ARE WAITING TO SEND YOU OUR 5.25 INCH (360KB) OR
3.5 INCH (720KB) DEMO DISK, CONTAINING AN ELECTRONIC CATALOG AND A FREE COPY
OF A TOMMY'S TOY (OUR CHOICE), FOR ONLY $2 US, $3 FOREIGN.  IF YOUR PC BORES
YOU WRITE US NOW.

HAVE FUN!

```
{% endraw %}

## METEORS.DOC

{% raw %}
```
TOMMY'S METEORS (C) COPYRIGHT 1986 BY TOMMY'S TOYS
P. O. BOX 11261, DENVER, CO 80211 USA.  ALL RIGHTS RESERVED.
CATALOG #86-038-1A

INSTRUCTIONS:

THINK FAST! USE THE 4 ARROW KEYS ON THE NUMERIC KEY PAD TO MOVE.

TO QUIT: HIT FUNCTION KEY F7 OR THE ESC KEY.

FUNCTION KEY F1 TOGGLES THE SOUND EFFECTS ON AND OFF.

FUNCTION KEY F2 TOGGLES THE DEMO MODE ON AND OFF.  PRESSING THIS KEY ZEROES
THE SCORE.

FUNCTION KEY F5 DISPLAYS THESE INSTRUCTIONS.

FUNCTION KEY F9 DECREASES, AND FUNCTION KEY F10 INCREASES, THE BASIC PITCH
USED IN THE SOUND EFFECTS.

TO SKIP THE STARTUP SHOW, HIT <ENTER> TWICE INSTEAD OF ONCE WHEN RUNNING THE
PROGRAM FROM DOS.

TO IMPROVE SCREEN LEGIBILITY, TRY RUNNING THE PROGRAM AS FOLLOWS:
   >METEORS /M
OR
   >METEORS /C

DID YOU LIKE THIS TOY?
DON'T FORGET TO TRY OUR GOBS OF OTHER NEAT LOW-PRICED TOYS AND GAMES FOR THE
IBM PC AND COMPATIBLES.  OUR 5.25 INCH (360KB) OR 3.5 INCH (720KB) DEMO DISK,
CONTAINING AN ELECTRONIC CATALOG AND A FREE WORKING COPY OF A TOMMY'S TOY
(OUR CHOICE), IS ONLY $2 US, $3 FOREIGN.  IF YOU ARE BORED WITH YOUR PC WRITE
US NOW.

ENJOY!

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1612

     Volume in drive A has no label
     Directory of A:\

    EZT      DOC      5263   3-02-88   4:06p
    EZT      EXE     51984   3-06-88   6:32p
    FILE1612 TXT      3035  10-18-89   2:41p
    GINRUMMY DOC      7095  11-19-88   7:06a
    GINRUMMY EXE    104046  11-19-88   7:06a
    GO       BAT        38   1-01-80   1:56a
    GO       TXT       694   1-01-80   4:22a
    METEORS  DOC      1130  11-18-88   7:06a
    METEORS  EXE     74622  11-18-88   7:06a
            9 file(s)     247907 bytes
                           70656 bytes free
